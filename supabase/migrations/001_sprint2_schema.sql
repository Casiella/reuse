-- ReUse · migrasi 001 (Sprint 2) · skema awal Supabase
-- Jalankan sekali di Supabase Dashboard → SQL Editor → New query → Run.
-- Aman dijalankan ulang (idempotent).

-- =========================================================
-- 1. PROFILES  (1 baris per akun, dibuat setelah pilih kampus)
-- =========================================================
create table if not exists public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  email      text not null,
  name       text not null,
  campus     text not null,
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

drop policy if exists "profiles: baca semua akun login" on public.profiles;
create policy "profiles: baca semua akun login" on public.profiles
  for select to authenticated using (true);

-- Hanya email kampus (.ac.id) yang boleh membuat profil
drop policy if exists "profiles: buat milik sendiri" on public.profiles;
create policy "profiles: buat milik sendiri" on public.profiles
  for insert to authenticated
  with check (id = auth.uid() and (auth.jwt() ->> 'email') ilike '%.ac.id');

drop policy if exists "profiles: ubah milik sendiri" on public.profiles;
create policy "profiles: ubah milik sendiri" on public.profiles
  for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

-- =========================================================
-- 2. ITEMS  (barang yang diposting — terlihat oleh semua akun)
-- =========================================================
create table if not exists public.items (
  id          uuid primary key default gen_random_uuid(),
  owner       uuid not null references public.profiles(id) on delete cascade,
  campus      text not null,
  title       text not null check (char_length(title) between 3 and 60),
  category    text not null,
  condition   text not null,
  mode        text not null check (mode in ('Sell','Swap','Donate')),
  price       integer check (price is null or price >= 1000),
  wish        text,
  cod         smallint not null check (cod between 0 and 3),
  area        text,
  description text,
  photos      text[] not null check (cardinality(photos) between 1 and 5),
  created_at  timestamptz not null default now(),
  constraint sell_needs_price check (mode <> 'Sell' or price is not null),
  constraint swap_needs_wish  check (mode <> 'Swap' or char_length(coalesce(wish,'')) >= 3)
);
create index if not exists items_campus_created_idx on public.items (campus, created_at desc);
create index if not exists items_owner_idx on public.items (owner);
alter table public.items enable row level security;

drop policy if exists "items: baca semua akun login" on public.items;
create policy "items: baca semua akun login" on public.items
  for select to authenticated using (true);

-- Posting hanya ke kampus sendiri
drop policy if exists "items: posting milik sendiri" on public.items;
create policy "items: posting milik sendiri" on public.items
  for insert to authenticated
  with check (
    owner = auth.uid()
    and campus = (select p.campus from public.profiles p where p.id = auth.uid())
  );

drop policy if exists "items: ubah milik sendiri" on public.items;
create policy "items: ubah milik sendiri" on public.items
  for update to authenticated using (owner = auth.uid()) with check (owner = auth.uid());

drop policy if exists "items: hapus milik sendiri" on public.items;
create policy "items: hapus milik sendiri" on public.items
  for delete to authenticated using (owner = auth.uid());

-- =========================================================
-- 3. CHAT  (PBI-08)
-- =========================================================
create table if not exists public.conversations (
  id              uuid primary key default gen_random_uuid(),
  item_id         uuid not null references public.items(id) on delete cascade,
  buyer_id        uuid not null references public.profiles(id) on delete cascade,
  seller_id       uuid not null references public.profiles(id) on delete cascade,
  last_message    text,
  last_sender     uuid,
  last_message_at timestamptz not null default now(),
  created_at      timestamptz not null default now(),
  unique (item_id, buyer_id),
  check (buyer_id <> seller_id)
);
create index if not exists conversations_seller_idx on public.conversations (seller_id);
create index if not exists conversations_buyer_idx on public.conversations (buyer_id);
alter table public.conversations enable row level security;

drop policy if exists "conv: peserta bisa baca" on public.conversations;
create policy "conv: peserta bisa baca" on public.conversations
  for select to authenticated using (auth.uid() in (buyer_id, seller_id));

drop policy if exists "conv: pembeli memulai" on public.conversations;
create policy "conv: pembeli memulai" on public.conversations
  for insert to authenticated
  with check (
    buyer_id = auth.uid()
    and seller_id = (select i.owner from public.items i where i.id = item_id)
  );

create table if not exists public.messages (
  id              uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  sender          uuid not null references public.profiles(id) on delete cascade,
  body            text not null check (char_length(body) between 1 and 1000),
  created_at      timestamptz not null default now()
);
create index if not exists messages_conv_idx on public.messages (conversation_id, created_at);
create index if not exists messages_sender_idx on public.messages (sender);
alter table public.messages enable row level security;

drop policy if exists "msg: peserta bisa baca" on public.messages;
create policy "msg: peserta bisa baca" on public.messages
  for select to authenticated using (
    exists (select 1 from public.conversations c
            where c.id = conversation_id and auth.uid() in (c.buyer_id, c.seller_id))
  );

drop policy if exists "msg: peserta bisa kirim" on public.messages;
create policy "msg: peserta bisa kirim" on public.messages
  for insert to authenticated with check (
    sender = auth.uid()
    and exists (select 1 from public.conversations c
                where c.id = conversation_id and auth.uid() in (c.buyer_id, c.seller_id))
  );

-- Simpan pesan terakhir di conversations (untuk daftar chat)
create or replace function public.touch_conversation() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  update public.conversations
     set last_message = left(new.body, 120), last_sender = new.sender, last_message_at = new.created_at
   where id = new.conversation_id;
  return new;
end $$;

revoke execute on function public.touch_conversation() from public, anon, authenticated;

drop trigger if exists messages_touch_conv on public.messages;
create trigger messages_touch_conv after insert on public.messages
  for each row execute function public.touch_conversation();

-- =========================================================
-- 4. REALTIME  (beranda live + chat live)
-- =========================================================
do $$
declare t text;
begin
  foreach t in array array['items','messages','conversations'] loop
    if not exists (select 1 from pg_publication_tables
                   where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;

-- =========================================================
-- 5. STORAGE  (foto barang)
-- =========================================================
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('item-photos', 'item-photos', true, 2097152, array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public = true;

drop policy if exists "photos: upload ke folder sendiri" on storage.objects;
create policy "photos: upload ke folder sendiri" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'item-photos' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "photos: hapus milik sendiri" on storage.objects;
create policy "photos: hapus milik sendiri" on storage.objects
  for delete to authenticated
  using (bucket_id = 'item-photos' and (storage.foldername(name))[1] = auth.uid()::text);
