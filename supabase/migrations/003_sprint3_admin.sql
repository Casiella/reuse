-- ReUse · migrasi 003 (Sprint 3) · admin, kesepakatan COD, tandai selesai, fake-door Sundul
-- Aman dijalankan ulang.

-- =========================================================
-- 1. ADMIN
-- Admin hanya bisa ditambah lewat SQL Editor (bukan dari aplikasi):
--   insert into public.admins (user_id)
--   select id from auth.users where email = 'email@kampus.ac.id';
-- =========================================================
create table if not exists public.admins (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.admins enable row level security;
drop policy if exists "admins: lihat diri sendiri" on public.admins;
create policy "admins: lihat diri sendiri" on public.admins
  for select to authenticated using (user_id = auth.uid());

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where user_id = auth.uid())
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- Admin boleh menghapus barang siapa pun (moderasi)
drop policy if exists "items: admin hapus" on public.items;
create policy "items: admin hapus" on public.items
  for delete to authenticated using (public.is_admin());

-- =========================================================
-- 2. PBI-10 · TANDAI SELESAI
-- =========================================================
alter table public.items add column if not exists status   text not null default 'available';
alter table public.items add column if not exists done_at  timestamptz;
alter table public.items add column if not exists taken_by uuid references public.profiles(id) on delete set null;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'items_status_check') then
    alter table public.items add constraint items_status_check check (status in ('available','done'));
  end if;
end $$;
create index if not exists items_taken_by_idx on public.items (taken_by);

-- Penerima barang harus orang yang pernah chat soal barang itu
create or replace function public.check_item_done() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.status = 'done' and old.status <> 'done' then
    new.done_at := now();
  elsif new.status = 'available' then
    new.done_at := null; new.taken_by := null;
  end if;
  if new.taken_by is not null and new.taken_by is distinct from old.taken_by and not exists (
      select 1 from public.conversations c where c.item_id = new.id and c.buyer_id = new.taken_by) then
    raise exception 'Penerima harus orang yang pernah chat soal barang ini';
  end if;
  return new;
end $$;
drop trigger if exists items_check_done on public.items;
create trigger items_check_done before update on public.items
  for each row execute function public.check_item_done();

-- Barang yang sudah selesai tidak tampil di layar login
create or replace function public.showcase(n int default 8)
returns table (title text, mode text, price int, photo text, campus text)
language sql stable security definer set search_path = public as $$
  select i.title, i.mode, i.price, i.photos[1], i.campus
  from public.items i
  where i.status = 'available'
  order by i.created_at desc
  limit least(greatest(n, 1), 12)
$$;
revoke all on function public.showcase(int) from public;
grant execute on function public.showcase(int) to anon, authenticated;

-- =========================================================
-- 3. PBI-09 · KARTU KESEPAKATAN COD DI CHAT
-- =========================================================
create table if not exists public.deals (
  id              uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  proposer        uuid not null references public.profiles(id) on delete cascade,
  meet_at         timestamptz not null,
  place           text not null check (char_length(place) between 2 and 80),
  status          text not null default 'proposed' check (status in ('proposed','accepted','declined','cancelled')),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);
create index if not exists deals_conv_idx on public.deals (conversation_id, created_at);
create index if not exists deals_proposer_idx on public.deals (proposer);
alter table public.deals enable row level security;

drop policy if exists "deals: peserta bisa baca" on public.deals;
create policy "deals: peserta bisa baca" on public.deals
  for select to authenticated using (exists (
    select 1 from public.conversations c
    where c.id = conversation_id and auth.uid() in (c.buyer_id, c.seller_id)));

drop policy if exists "deals: peserta bisa ajukan" on public.deals;
create policy "deals: peserta bisa ajukan" on public.deals
  for insert to authenticated with check (
    proposer = auth.uid() and status = 'proposed' and meet_at > now() - interval '1 hour'
    and exists (select 1 from public.conversations c
                where c.id = conversation_id and auth.uid() in (c.buyer_id, c.seller_id)));

drop policy if exists "deals: peserta bisa ubah status" on public.deals;
create policy "deals: peserta bisa ubah status" on public.deals
  for update to authenticated using (exists (
    select 1 from public.conversations c
    where c.id = conversation_id and auth.uid() in (c.buyer_id, c.seller_id)));

-- Hanya status yang boleh berubah: penerima → terima/tolak, pengaju → batalkan
create or replace function public.check_deal_update() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.conversation_id <> old.conversation_id or new.proposer <> old.proposer
     or new.meet_at <> old.meet_at or new.place <> old.place or new.created_at <> old.created_at then
    raise exception 'Hanya status kesepakatan yang boleh diubah';
  end if;
  if old.status <> 'proposed' then
    raise exception 'Kesepakatan ini sudah %', old.status;
  end if;
  if new.status in ('accepted','declined') and auth.uid() = old.proposer then
    raise exception 'Kesepakatan dijawab oleh pihak lain';
  end if;
  if new.status = 'cancelled' and auth.uid() <> old.proposer then
    raise exception 'Hanya pengaju yang bisa membatalkan';
  end if;
  new.updated_at := now();
  return new;
end $$;
drop trigger if exists deals_check_update on public.deals;
create trigger deals_check_update before update on public.deals
  for each row execute function public.check_deal_update();

-- Kartu COD ikut muncul sebagai pesan terakhir di daftar chat
create or replace function public.touch_conversation_deal() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  update public.conversations
     set last_message = case new.status
           when 'proposed'  then 'Ajakan COD: ' || new.place
           when 'accepted'  then 'COD disepakati: ' || new.place
           when 'declined'  then 'Ajakan COD ditolak'
           else 'Ajakan COD dibatalkan' end,
         last_sender = case when tg_op = 'INSERT' then new.proposer else auth.uid() end,
         last_message_at = now()
   where id = new.conversation_id;
  return new;
end $$;
drop trigger if exists deals_touch_conv on public.deals;
create trigger deals_touch_conv after insert or update of status on public.deals
  for each row execute function public.touch_conversation_deal();

revoke execute on function public.check_item_done() from public, anon, authenticated;
revoke execute on function public.check_deal_update() from public, anon, authenticated;
revoke execute on function public.touch_conversation_deal() from public, anon, authenticated;

-- =========================================================
-- 4. PBI-11 · FAKE-DOOR SUNDUL (log klik)
-- =========================================================
create table if not exists public.sundul_clicks (
  id         bigint generated always as identity primary key,
  item_id    uuid references public.items(id) on delete set null,
  user_id    uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now()
);
create index if not exists sundul_item_idx on public.sundul_clicks (item_id);
create index if not exists sundul_user_idx on public.sundul_clicks (user_id);
alter table public.sundul_clicks enable row level security;

drop policy if exists "sundul: catat klik sendiri" on public.sundul_clicks;
create policy "sundul: catat klik sendiri" on public.sundul_clicks
  for insert to authenticated with check (
    user_id = auth.uid()
    and exists (select 1 from public.items i where i.id = item_id and i.owner = auth.uid()));

drop policy if exists "sundul: admin bisa baca" on public.sundul_clicks;
create policy "sundul: admin bisa baca" on public.sundul_clicks
  for select to authenticated using (public.is_admin());

-- =========================================================
-- 5. STATISTIK UNTUK PANEL ADMIN (tanpa isi chat)
-- =========================================================
create or replace function public.admin_stats() returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare r jsonb;
begin
  if not public.is_admin() then raise exception 'Khusus admin'; end if;
  select jsonb_build_object(
    'users',          (select count(*) from profiles),
    'users_7d',       (select count(*) from profiles where created_at > now() - interval '7 days'),
    'items_active',   (select count(*) from items where status = 'available'),
    'items_done',     (select count(*) from items where status = 'done'),
    'value_done',     (select coalesce(sum(price), 0) from items where status = 'done' and mode = 'Sell'),
    'conversations',  (select count(*) from conversations),
    'messages',       (select count(*) from messages),
    'deals_accepted', (select count(*) from deals where status = 'accepted'),
    'deals_total',    (select count(*) from deals),
    'sundul_clicks',  (select count(*) from sundul_clicks),
    'sundul_users',   (select count(distinct user_id) from sundul_clicks),
    'by_mode',  (select coalesce(jsonb_object_agg(mode, n), '{}') from (select mode, count(*) n from items group by mode) t),
    'by_campus',(select coalesce(jsonb_agg(jsonb_build_object('campus', campus, 'users', u, 'items', i) order by i desc, u desc), '[]') from (
                   select c.campus, (select count(*) from profiles p where p.campus = c.campus) u,
                          (select count(*) from items x where x.campus = c.campus) i
                   from (select campus from profiles union select campus from items) c) t)
  ) into r;
  return r;
end $$;
revoke all on function public.admin_stats() from public;
grant execute on function public.admin_stats() to authenticated;

-- =========================================================
-- 6. REALTIME
-- =========================================================
do $$ begin
  if not exists (select 1 from pg_publication_tables
                 where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'deals') then
    alter publication supabase_realtime add table public.deals;
  end if;
end $$;
