-- ReUse · migrasi 010 · rating & ulasan penjual
-- Hanya pembeli yang tercatat menerima barang (items.taken_by) yang bisa memberi rating, satu kali per barang.

create table if not exists public.reviews (
  id         uuid primary key default gen_random_uuid(),
  item_id    uuid not null references public.items(id) on delete cascade,
  seller     uuid not null references public.profiles(id) on delete cascade,
  reviewer   uuid not null references public.profiles(id) on delete cascade,
  stars      smallint not null check (stars between 1 and 5),
  comment    text check (char_length(comment) <= 300),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (item_id, reviewer),
  check (seller <> reviewer)
);
create index if not exists reviews_seller_idx on public.reviews (seller, created_at desc);
create index if not exists reviews_reviewer_idx on public.reviews (reviewer);
alter table public.reviews enable row level security;

drop policy if exists "reviews: semua akun login bisa baca" on public.reviews;
create policy "reviews: semua akun login bisa baca" on public.reviews
  for select to authenticated using (true);

drop policy if exists "reviews: penerima barang memberi rating" on public.reviews;
create policy "reviews: penerima barang memberi rating" on public.reviews
  for insert to authenticated with check (
    reviewer = auth.uid()
    and exists (select 1 from public.items i
                where i.id = item_id and i.status = 'done' and i.taken_by = auth.uid() and i.owner = seller));

drop policy if exists "reviews: ubah ulasan sendiri" on public.reviews;
create policy "reviews: ubah ulasan sendiri" on public.reviews
  for update to authenticated using (reviewer = auth.uid()) with check (reviewer = auth.uid());

drop policy if exists "reviews: hapus oleh admin atau penulis" on public.reviews;
create policy "reviews: hapus oleh admin atau penulis" on public.reviews
  for delete to authenticated using (public.is_admin() or reviewer = auth.uid());

-- Ulasan hanya boleh mengubah bintang & komentar
create or replace function public.reviews_guard() returns trigger
language plpgsql set search_path = public as $$
begin
  if new.item_id <> old.item_id or new.seller <> old.seller or new.reviewer <> old.reviewer or new.created_at <> old.created_at then
    raise exception 'Hanya bintang dan komentar yang boleh diubah';
  end if;
  new.updated_at := now();
  return new;
end $$;
drop trigger if exists reviews_guard_trg on public.reviews;
create trigger reviews_guard_trg before update on public.reviews for each row execute function public.reviews_guard();
revoke execute on function public.reviews_guard() from public, anon, authenticated;

-- Rata-rata rating per penjual
create or replace view public.seller_ratings with (security_invoker = true) as
  select seller, round(avg(stars)::numeric, 1) as avg_stars, count(*)::int as total
  from public.reviews group by seller;
grant select on public.seller_ratings to authenticated;

-- Realtime: pembeli dapat kabar saat barang ditandai selesai untuknya; penjual saat dapat ulasan
do $$
declare t text;
begin
  foreach t in array array['reviews'] loop
    if not exists (select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename=t) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;
