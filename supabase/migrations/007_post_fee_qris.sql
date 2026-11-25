-- ReUse · migrasi 007 · biaya posting (QRIS manual, diverifikasi admin)
-- Barang yang sudah ada tetap tampil (status 'approved'). Aman dijalankan ulang.

-- =========================================================
-- 1. PENGATURAN (biaya posting & gambar QRIS), diubah admin
-- =========================================================
create table if not exists public.settings (
  key        text primary key,
  value      jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.settings enable row level security;
drop policy if exists "settings: semua bisa baca" on public.settings;
create policy "settings: semua bisa baca" on public.settings for select to anon, authenticated using (true);
drop policy if exists "settings: admin ubah" on public.settings;
create policy "settings: admin ubah" on public.settings for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "settings: admin tambah" on public.settings;
create policy "settings: admin tambah" on public.settings for insert to authenticated with check (public.is_admin());
grant select on public.settings to anon, authenticated;
grant insert, update on public.settings to authenticated;
insert into public.settings (key, value) values
  ('post_fee', '2000'::jsonb),
  ('qris_url', 'null'::jsonb),
  ('qris_name', '"ReUse"'::jsonb),
  ('qris_payload', 'null'::jsonb)
on conflict (key) do nothing;

-- Biaya berlaku hanya jika admin sudah memasang QRIS (supaya penjual tidak terjebak)
create or replace function public.post_fee() returns int
language sql stable security definer set search_path = public as $$
  select case when exists (select 1 from public.settings
                           where key in ('qris_url','qris_payload') and jsonb_typeof(value) = 'string')
              then coalesce((select (value #>> '{}')::int from public.settings where key = 'post_fee'), 0)
              else 0 end
$$;

-- =========================================================
-- 2. STATUS PEMBAYARAN DI BARANG
-- =========================================================
alter table public.items add column if not exists pay_status text not null default 'approved';
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'items_pay_status_check') then
    alter table public.items add constraint items_pay_status_check check (pay_status in ('pending','approved','rejected'));
  end if;
end $$;
create index if not exists items_pay_status_idx on public.items (pay_status);

-- Barang baru: menunggu pembayaran (kecuali biaya 0 atau diposting admin)
create or replace function public.items_set_pay_status() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if public.post_fee() > 0 and not public.is_admin() then new.pay_status := 'pending';
  else new.pay_status := 'approved'; end if;
  return new;
end $$;
drop trigger if exists items_pay_on_insert on public.items;
create trigger items_pay_on_insert before insert on public.items
  for each row execute function public.items_set_pay_status();

-- Pemilik tidak bisa mengubah status pembayaran sendiri
create or replace function public.items_guard_pay_status() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.pay_status is distinct from old.pay_status
     and not public.is_admin()
     and coalesce(current_setting('reuse.pay_trigger', true), '') <> '1' then
    raise exception 'Status pembayaran hanya bisa diubah admin';
  end if;
  return new;
end $$;
drop trigger if exists items_guard_pay on public.items;
create trigger items_guard_pay before update on public.items
  for each row execute function public.items_guard_pay_status();

-- Barang yang belum dibayar hanya terlihat oleh pemiliknya dan admin
drop policy if exists "items: baca semua akun login" on public.items;
create policy "items: baca semua akun login" on public.items
  for select to authenticated using (pay_status = 'approved' or owner = auth.uid() or public.is_admin());

-- Barang yang belum dibayar tidak tampil di layar login
create or replace function public.showcase(n int default 8)
returns table (title text, mode text, price int, photo text, campus text)
language sql stable security definer set search_path = public as $$
  select i.title, i.mode, i.price, i.photos[1], i.campus
  from public.items i
  where i.status = 'available' and i.pay_status = 'approved'
  order by i.created_at desc
  limit least(greatest(n, 1), 12)
$$;
revoke all on function public.showcase(int) from public;
grant execute on function public.showcase(int) to anon, authenticated;

-- =========================================================
-- 3. BUKTI PEMBAYARAN
-- =========================================================
create table if not exists public.payments (
  id          uuid primary key default gen_random_uuid(),
  item_id     uuid not null references public.items(id) on delete cascade,
  owner       uuid not null references public.profiles(id) on delete cascade,
  amount      int  not null check (amount >= 0),
  proof_path  text not null check (char_length(proof_path) between 5 and 200),
  status      text not null default 'pending' check (status in ('pending','approved','rejected')),
  note        text check (char_length(note) <= 200),
  created_at  timestamptz not null default now(),
  decided_at  timestamptz,
  decided_by  uuid references public.profiles(id) on delete set null
);
create index if not exists payments_item_idx on public.payments (item_id);
create index if not exists payments_owner_idx on public.payments (owner);
create index if not exists payments_status_idx on public.payments (status, created_at);
create index if not exists payments_decided_by_idx on public.payments (decided_by);
alter table public.payments enable row level security;

create or replace function public.storage_path_owner(p text) returns text
language sql immutable set search_path = public as $$ select split_part(p, '/', 1) $$;


drop policy if exists "payments: pemilik & admin baca" on public.payments;
create policy "payments: pemilik & admin baca" on public.payments
  for select to authenticated using (owner = auth.uid() or public.is_admin());
drop policy if exists "payments: pemilik kirim bukti" on public.payments;
create policy "payments: pemilik kirim bukti" on public.payments
  for insert to authenticated with check (
    owner = auth.uid() and status = 'pending'
    and (storage_path_owner(proof_path) = auth.uid()::text)
    and exists (select 1 from public.items i where i.id = item_id and i.owner = auth.uid() and i.pay_status <> 'approved')
    and not exists (select 1 from public.payments p where p.item_id = payments.item_id and p.status = 'pending'));
drop policy if exists "payments: admin putuskan" on public.payments;
create policy "payments: admin putuskan" on public.payments
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

-- Nominal selalu diambil dari pengaturan; status barang ikut bukti pembayaran
create or replace function public.payments_before() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'INSERT' then
    new.amount := public.post_fee();
  else
    if old.status <> 'pending' then raise exception 'Pembayaran ini sudah diputuskan'; end if;
    if new.item_id <> old.item_id or new.owner <> old.owner or new.proof_path <> old.proof_path or new.amount <> old.amount then
      raise exception 'Hanya status dan catatan yang boleh diubah';
    end if;
    if new.status <> 'pending' then new.decided_at := now(); new.decided_by := auth.uid(); end if;
  end if;
  return new;
end $$;
drop trigger if exists payments_before_trg on public.payments;
create trigger payments_before_trg before insert or update on public.payments
  for each row execute function public.payments_before();

create or replace function public.payments_after() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  perform set_config('reuse.pay_trigger', '1', true);
  update public.items set pay_status = new.status where id = new.item_id;
  perform set_config('reuse.pay_trigger', '', true);
  return new;
end $$;
drop trigger if exists payments_after_trg on public.payments;
create trigger payments_after_trg after insert or update of status on public.payments
  for each row execute function public.payments_after();

revoke execute on function public.items_set_pay_status() from public, anon, authenticated;
revoke execute on function public.items_guard_pay_status() from public, anon, authenticated;
revoke execute on function public.payments_before() from public, anon, authenticated;
revoke execute on function public.payments_after() from public, anon, authenticated;
revoke execute on function public.post_fee() from public, anon;
grant execute on function public.post_fee() to authenticated;

-- Statistik admin: tambah pembayaran
create or replace function public.admin_pay_stats() returns jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'Khusus admin'; end if;
  return jsonb_build_object(
    'pending',  (select count(*) from payments where status = 'pending'),
    'approved', (select count(*) from payments where status = 'approved'),
    'revenue',  (select coalesce(sum(amount), 0) from payments where status = 'approved'));
end $$;
revoke all on function public.admin_pay_stats() from public, anon;
grant execute on function public.admin_pay_stats() to authenticated;

-- =========================================================
-- 4. STORAGE: bukti bayar (privat) & gambar QRIS (publik)
-- =========================================================
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('payment-proofs', 'payment-proofs', false, 3145728, array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public = false;
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('site', 'site', true, 3145728, array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public = true;

drop policy if exists "proofs: upload ke folder sendiri" on storage.objects;
create policy "proofs: upload ke folder sendiri" on storage.objects for insert to authenticated
  with check (bucket_id = 'payment-proofs' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists "proofs: pemilik & admin lihat" on storage.objects;
create policy "proofs: pemilik & admin lihat" on storage.objects for select to authenticated
  using (bucket_id = 'payment-proofs' and ((storage.foldername(name))[1] = auth.uid()::text or public.is_admin()));
drop policy if exists "site: admin upload" on storage.objects;
create policy "site: admin upload" on storage.objects for insert to authenticated
  with check (bucket_id = 'site' and public.is_admin());
drop policy if exists "site: admin ganti" on storage.objects;
create policy "site: admin ganti" on storage.objects for update to authenticated
  using (bucket_id = 'site' and public.is_admin());

-- =========================================================
-- 5. REALTIME (penjual dapat kabar saat disetujui/ditolak)
-- =========================================================
do $$ begin
  if not exists (select 1 from pg_publication_tables
                 where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'payments') then
    alter publication supabase_realtime add table public.payments;
  end if;
end $$;
