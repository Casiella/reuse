-- ReUse · migrasi 012 · tanda dibaca di chat + komplain ke admin. Aman dijalankan ulang.

-- =========================================================
-- 1. TANDA DIBACA (✓ terkirim, ✓✓ dibaca)
-- =========================================================
alter table public.conversations add column if not exists buyer_read_at  timestamptz not null default now();
alter table public.conversations add column if not exists seller_read_at timestamptz not null default now();

-- Pengirim otomatis dianggap sudah membaca pesannya sendiri
create or replace function public.touch_conversation() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  update public.conversations
     set last_message = left(new.body, 120), last_sender = new.sender, last_message_at = new.created_at,
         buyer_read_at  = case when buyer_id  = new.sender then greatest(buyer_read_at,  new.created_at) else buyer_read_at  end,
         seller_read_at = case when seller_id = new.sender then greatest(seller_read_at, new.created_at) else seller_read_at end
   where id = new.conversation_id;
  return new;
end $$;
revoke execute on function public.touch_conversation() from public, anon, authenticated;

-- Tandai chat sudah dibaca oleh pengguna yang sedang login (hanya kolom miliknya)
create or replace function public.mark_read(p_conv uuid) returns timestamptz
language plpgsql security definer set search_path = public as $$
declare t timestamptz := now();
begin
  update public.conversations
     set buyer_read_at  = case when buyer_id  = auth.uid() then t else buyer_read_at  end,
         seller_read_at = case when seller_id = auth.uid() then t else seller_read_at end
   where id = p_conv and auth.uid() in (buyer_id, seller_id);
  if not found then raise exception 'Chat tidak ditemukan'; end if;
  return t;
end $$;
revoke all on function public.mark_read(uuid) from public, anon;
grant execute on function public.mark_read(uuid) to authenticated;

-- Jumlah pesan belum dibaca per chat milik pengguna
create or replace function public.unread_counts()
returns table (conversation_id uuid, n bigint)
language sql stable security definer set search_path = public as $$
  select m.conversation_id, count(*)
  from public.conversations c
  join public.messages m on m.conversation_id = c.id
  where auth.uid() in (c.buyer_id, c.seller_id)
    and m.sender <> auth.uid()
    and m.created_at > case when c.buyer_id = auth.uid() then c.buyer_read_at else c.seller_read_at end
  group by m.conversation_id
$$;
revoke all on function public.unread_counts() from public, anon;
grant execute on function public.unread_counts() to authenticated;

-- =========================================================
-- 2. KOMPLAIN (dilihat pelapor & admin saja)
-- =========================================================
create table if not exists public.reports (
  id              uuid primary key default gen_random_uuid(),
  reporter        uuid not null references public.profiles(id) on delete cascade,
  target          uuid not null references public.profiles(id) on delete cascade,
  item_id         uuid references public.items(id) on delete set null,
  conversation_id uuid references public.conversations(id) on delete set null,
  item_title      text check (char_length(item_title) <= 120),
  reason          text not null check (reason in ('Penipuan','Barang tidak sesuai','Tidak datang saat COD','Kata-kata kasar','Konten tidak pantas','Lainnya')),
  detail          text check (char_length(detail) <= 1000),
  status          text not null default 'open' check (status in ('open','process','resolved','rejected')),
  admin_note      text check (char_length(admin_note) <= 300),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  decided_by      uuid references public.profiles(id) on delete set null,
  check (reporter <> target)
);
create index if not exists reports_reporter_idx on public.reports (reporter);
create index if not exists reports_target_idx on public.reports (target);
create index if not exists reports_item_idx on public.reports (item_id);
create index if not exists reports_conv_idx on public.reports (conversation_id);
create index if not exists reports_decided_by_idx on public.reports (decided_by);
create index if not exists reports_status_idx on public.reports (status, created_at);
-- Satu komplain aktif per pelapor, orang, dan barang
create unique index if not exists reports_one_open on public.reports
  (reporter, target, coalesce(item_id, '00000000-0000-0000-0000-000000000000'::uuid))
  where status in ('open','process');
alter table public.reports enable row level security;

drop policy if exists "reports: pelapor & admin baca" on public.reports;
create policy "reports: pelapor & admin baca" on public.reports
  for select to authenticated using (reporter = auth.uid() or public.is_admin());

drop policy if exists "reports: pengguna melapor" on public.reports;
create policy "reports: pengguna melapor" on public.reports
  for insert to authenticated with check (
    reporter = auth.uid() and status = 'open' and admin_note is null and decided_by is null
    and target <> auth.uid()
    and (item_id is null or exists (select 1 from public.items i where i.id = reports.item_id
                                    and (i.owner = reports.target or (i.owner = auth.uid() and i.taken_by = reports.target))))
    and (conversation_id is null or exists (select 1 from public.conversations c where c.id = reports.conversation_id
                                            and auth.uid() in (c.buyer_id, c.seller_id)
                                            and reports.target in (c.buyer_id, c.seller_id))));

drop policy if exists "reports: admin tindak lanjut" on public.reports;
create policy "reports: admin tindak lanjut" on public.reports
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

-- Judul barang disimpan saat melapor (tetap terbaca walau barang dihapus); admin hanya boleh ubah status & catatan
create or replace function public.reports_before() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'INSERT' then
    new.item_title := (select title from public.items where id = new.item_id);
    new.created_at := now(); new.updated_at := now();
  else
    if new.reporter <> old.reporter or new.target <> old.target or new.reason <> old.reason
       or new.detail is distinct from old.detail or new.item_title is distinct from old.item_title
       or new.created_at <> old.created_at then
      raise exception 'Hanya status dan catatan admin yang boleh diubah';
    end if;
    new.updated_at := now(); new.decided_by := auth.uid();
  end if;
  return new;
end $$;
drop trigger if exists reports_before_trg on public.reports;
create trigger reports_before_trg before insert or update on public.reports
  for each row execute function public.reports_before();
revoke execute on function public.reports_before() from public, anon, authenticated;

grant select, insert, update on public.reports to authenticated;
revoke all on public.reports from anon;

-- Jumlah yang perlu ditangani admin (bukti bayar + komplain)
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
    'sundul_active',  (select count(*) from items where bumped_until > now() and status = 'available'),
    'reports_open',   (select count(*) from reports where status in ('open','process')));
end $$;

do $$ begin
  if not exists (select 1 from pg_publication_tables
                 where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'reports') then
    alter publication supabase_realtime add table public.reports;
  end if;
end $$;
