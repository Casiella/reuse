-- ReUse · migrasi 002 · showcase barang terbaru untuk layar login (bisa dibaca tanpa login)
-- Hanya mengembalikan judul, mode, harga, foto sampul, dan kampus. Tidak ada data pemilik.
create or replace function public.showcase(n int default 8)
returns table (title text, mode text, price int, photo text, campus text)
language sql stable security definer set search_path = public as $$
  select i.title, i.mode, i.price, i.photos[1], i.campus
  from public.items i
  order by i.created_at desc
  limit least(greatest(n, 1), 12)
$$;
revoke all on function public.showcase(int) from public;
grant execute on function public.showcase(int) to anon, authenticated;
