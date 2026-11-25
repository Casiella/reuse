-- ReUse · migrasi 008 · rapikan peringatan Supabase (search_path fungsi)
alter function public.touch_campus() set search_path = public;
