-- ReUse · migrasi 011 · Sundul berbayar (Rp2.000, 24 jam di urutan teratas beranda kampus)
-- Bayar lewat QRIS yang sama dengan biaya posting, diverifikasi admin. Aman dijalankan ulang.

-- 1. Pengaturan biaya sundul
insert into public.settings (key, value) values ('sundul_fee', '2000'::jsonb) on conflict (key) do nothing;

create or replace function public.sundul_fee() returns int
language sql stable security definer set search_path = public as $$
  select case when exists (select 1 from public.settings
                           where key in ('qris_url','qris_payload') and jsonb_typeof(value) = 'string')
              then coalesce((select (value #>> '{}')::int from public.settings where key = 'sundul_fee'), 0)
              else 0 end
$$;
revoke execute on function public.sundul_fee() from public, anon;
grant execute on function public.sundul_fee() to authenticated;

-- 2. Kolom sundul di barang
alter table public.items add column if not exists bumped_at timestamptz;
alter table public.items add column if not exists bumped_until timestamptz;
create index if not exists items_bumped_idx on public.items (campus, bumped_until desc) where bumped_until is not null;

-- Saat posting: pengguna biasa tidak bisa langsung menyundul
create or replace function public.items_set_pay_status() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if public.post_fee() > 0 and not public.is_admin() then new.pay_status := 'pending';
  else new.pay_status := 'approved'; end if;
  if not public.is_admin() then new.bumped_at := null; new.bumped_until := null; end if;
  return new;
end $$;

-- Pemilik tidak bisa mengubah status pembayaran atau masa sundul sendiri
create or replace function public.items_guard_pay_status() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (new.pay_status is distinct from old.pay_status
      or new.bumped_at is distinct from old.bumped_at
      or new.bumped_until is distinct from old.bumped_until)
     and not public.is_admin()
     and coalesce(current_setting('reuse.pay_trigger', true), '') <> '1' then
    raise exception 'Status pembayaran dan sundul hanya bisa diubah admin';
  end if;
  return new;
end $$;

-- 3. Jenis pembayaran: posting atau sundul
alter table public.payments add column if not exists kind text not null default 'post';
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'payments_kind_check') then
    alter table public.payments add constraint payments_kind_check check (kind in ('post','sundul'));
  end if;
end $$;

drop policy if exists "payments: pemilik kirim bukti" on public.payments;
create policy "payments: pemilik kirim bukti" on public.payments
  for insert to authenticated with check (
    owner = auth.uid() and status = 'pending'
    and storage_path_owner(proof_path) = auth.uid()::text
    and exists (select 1 from public.items i
                where i.id = payments.item_id and i.owner = auth.uid()
                  and ((payments.kind = 'post' and i.pay_status <> 'approved')
                    or (payments.kind = 'sundul' and i.pay_status = 'approved' and i.status = 'available'
                        and (i.bumped_until is null or i.bumped_until < now()))))
    and not exists (select 1 from public.payments p
                    where p.item_id = payments.item_id and p.kind = payments.kind and p.status = 'pending'));

create or replace function public.payments_before() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'INSERT' then
    new.amount := case when new.kind = 'sundul' then public.sundul_fee() else public.post_fee() end;
  else
    if old.status <> 'pending' then raise exception 'Pembayaran ini sudah diputuskan'; end if;
    if new.item_id <> old.item_id or new.owner <> old.owner or new.proof_path <> old.proof_path
       or new.amount <> old.amount or new.kind <> old.kind then
      raise exception 'Hanya status dan catatan yang boleh diubah';
    end if;
    if new.status <> 'pending' then new.decided_at := now(); new.decided_by := auth.uid(); end if;
  end if;
  return new;
end $$;

create or replace function public.payments_after() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  perform set_config('reuse.pay_trigger', '1', true);
  if new.kind = 'sundul' then
    if new.status = 'approved' then
      update public.items set bumped_at = now(), bumped_until = now() + interval '24 hours' where id = new.item_id;
    end if;
  else
    update public.items set pay_status = new.status where id = new.item_id;
  end if;
  perform set_config('reuse.pay_trigger', '', true);
  return new;
end $$;

-- 4. Sundul gratis (hanya jika biaya sundul 0 atau QRIS belum dipasang)
create or replace function public.sundul_free(p_item uuid) returns timestamptz
language plpgsql security definer set search_path = public as $$
declare until timestamptz;
begin
  if public.sundul_fee() > 0 then raise exception 'Sundul perlu dibayar'; end if;
  if not exists (select 1 from public.items where id = p_item and owner = auth.uid()
                 and status = 'available' and pay_status = 'approved'
                 and (bumped_until is null or bumped_until < now())) then
    raise exception 'Barang ini tidak bisa disundul sekarang';
  end if;
  perform set_config('reuse.pay_trigger', '1', true);
  update public.items set bumped_at = now(), bumped_until = now() + interval '24 hours'
   where id = p_item returning bumped_until into until;
  perform set_config('reuse.pay_trigger', '', true);
  return until;
end $$;
revoke all on function public.sundul_free(uuid) from public, anon;
grant execute on function public.sundul_free(uuid) to authenticated;

-- 5. Layar login: barang yang sedang disundul tampil duluan
create or replace function public.showcase(n int default 8)
returns table (title text, mode text, price int, photo text, campus text)
language sql stable security definer set search_path = public as $$
  select i.title, i.mode, i.price, i.photos[1], i.campus
  from public.items i
  where i.status = 'available' and i.pay_status = 'approved'
  order by (i.bumped_until > now()) is true desc, i.created_at desc
  limit least(greatest(n, 1), 12)
$$;

-- 6. Statistik admin
create or replace function public.admin_pay_stats() returns jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'Khusus admin'; end if;
  return jsonb_build_object(
    'pending',  (select count(*) from payments where status = 'pending'),
    'approved', (select count(*) from payments where status = 'approved'),
    'revenue',  (select coalesce(sum(amount), 0) from payments where status = 'approved'),
    'sundul_paid',    (select count(*) from payments where status = 'approved' and kind = 'sundul'),
    'sundul_revenue', (select coalesce(sum(amount), 0) from payments where status = 'approved' and kind = 'sundul'),
    'sundul_active',  (select count(*) from items where bumped_until > now() and status = 'available'));
end $$;
