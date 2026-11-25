-- ReUse · migrasi 004 · fungsi admin tidak bisa dipanggil tanpa login
revoke execute on function public.admin_stats() from anon;
revoke execute on function public.is_admin() from anon;
