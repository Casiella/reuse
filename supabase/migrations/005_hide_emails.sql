-- ReUse · migrasi 005 (PBI-12) · email pengguna tidak bisa dibaca akun lain
-- Sebelumnya semua akun login bisa membaca kolom email di tabel profiles lewat API.
revoke select on public.profiles from anon, authenticated;
grant select (id, name, campus, created_at) on public.profiles to authenticated;

-- Daftar pengguna lengkap (dengan email) hanya untuk admin
create or replace function public.admin_users()
returns table (id uuid, name text, email text, campus text, created_at timestamptz, items bigint, done bigint, is_admin boolean)
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'Khusus admin'; end if;
  return query
    select p.id, p.name, p.email, p.campus, p.created_at,
           (select count(*) from items i where i.owner = p.id),
           (select count(*) from items i where i.owner = p.id and i.status = 'done'),
           exists (select 1 from admins a where a.user_id = p.id)
    from profiles p order by p.created_at desc;
end $$;
revoke all on function public.admin_users() from public, anon;
grant execute on function public.admin_users() to authenticated;
