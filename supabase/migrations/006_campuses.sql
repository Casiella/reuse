-- ReUse · migrasi 006 · daftar kampus, titik COD, dan area kos diatur admin
-- Sebelumnya tertulis langsung di js/app.js. Aman dijalankan ulang.

create table if not exists public.campuses (
  id         text primary key check (id ~ '^[a-z0-9-]{2,20}$'),
  name       text not null check (char_length(name) between 3 and 80),
  short      text not null check (char_length(short) between 2 and 16),
  loc        text not null default '',
  domain     text not null check (domain ~ '\.ac\.id$'),
  cod        text[] not null check (cardinality(cod) between 1 and 8),
  areas      text[] not null default '{}' check (cardinality(areas) <= 12),
  active     boolean not null default true,
  sort       int not null default 100,
  updated_at timestamptz not null default now()
);
alter table public.campuses enable row level security;

drop policy if exists "campuses: semua bisa baca" on public.campuses;
create policy "campuses: semua bisa baca" on public.campuses
  for select to anon, authenticated using (true);
drop policy if exists "campuses: admin tambah" on public.campuses;
create policy "campuses: admin tambah" on public.campuses
  for insert to authenticated with check (public.is_admin());
drop policy if exists "campuses: admin ubah" on public.campuses;
create policy "campuses: admin ubah" on public.campuses
  for update to authenticated using (public.is_admin()) with check (public.is_admin());
grant select on public.campuses to anon, authenticated;
grant insert, update on public.campuses to authenticated;

insert into public.campuses (id, name, short, loc, domain, cod, areas, sort) values
 ('unpad','Universitas Padjadjaran','Unpad','Jatinangor','unpad.ac.id','{"Gerbang Lama","Masjid Raya Unpad","Bale Santika","Halte Bus Kampus"}','{"Sayang","Ciseke","Caringin","Hegarmanah","Cikuda"}',1),
 ('itb','Institut Teknologi Bandung','ITB','Ganesha, Bandung','itb.ac.id','{"Gerbang Depan ITB","Masjid Salman","Perpustakaan Pusat","Sunken Court"}','{"Cisitu","Tubagus Ismail","Sekeloa","Dago","Plesiran"}',2),
 ('ui','Universitas Indonesia','UI','Depok','ui.ac.id','{"Stasiun UI","Masjid UI","Perpustakaan UI","Halte Bikun FIB"}','{"Kukusan","Kukusan Teknik","Pondok Cina","Margonda","Beji"}',3),
 ('ugm','Universitas Gadjah Mada','UGM','Yogyakarta','ugm.ac.id','{"Bundaran UGM","Masjid Kampus UGM","Perpustakaan Pusat","Lembah UGM"}','{"Pogung","Karangmalang","Sendowo","Klebengan","Condongcatur"}',4),
 ('ipb','IPB University','IPB','Dramaga, Bogor','ipb.ac.id','{"Gerbang Dramaga","Masjid Al-Hurriyyah","Perpustakaan LSI","Gymnasium"}','{"Babakan Raya","Babakan Tengah","Bara","Cibanteng","Perwira"}',5),
 ('tel','Telkom University','Tel-U','Bandung','telkomuniversity.ac.id','{"Gerbang Utama","Masjid Syamsul Ulum","Open Library","Danau Tel-U"}','{"Sukapura","Sukabirus","PGA","Bojongsoang","Ciganitri"}',6)
on conflict (id) do nothing;

create or replace function public.touch_campus() returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end $$;
drop trigger if exists campuses_touch on public.campuses;
create trigger campuses_touch before update on public.campuses for each row execute function public.touch_campus();
revoke execute on function public.touch_campus() from public, anon, authenticated;

-- Kampus di profil & barang harus terdaftar
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'profiles_campus_fkey') then
    alter table public.profiles add constraint profiles_campus_fkey foreign key (campus) references public.campuses(id) on update cascade;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'items_campus_fkey') then
    alter table public.items add constraint items_campus_fkey foreign key (campus) references public.campuses(id) on update cascade;
  end if;
end $$;

-- Nama titik COD disimpan di barang, supaya barang lama tidak berubah tempat saat admin mengedit daftar COD
alter table public.items add column if not exists cod_place text;
update public.items i set cod_place = c.cod[i.cod + 1]
  from public.campuses c where c.id = i.campus and i.cod_place is null;
alter table public.items drop constraint if exists items_cod_check;
alter table public.items add constraint items_cod_check check (cod between 0 and 7);
