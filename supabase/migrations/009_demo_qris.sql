-- ReUse · migrasi 009 · QRIS demo (bukan QRIS asli, tidak bisa menerima uang)
-- Dipakai selama admin belum upload QRIS asli. Upload QRIS asli di Panel admin → Bayar mematikan mode demo.
insert into public.settings (key, value) values ('qris_demo', 'false'::jsonb) on conflict (key) do nothing;
update public.settings set value = '"00020101021126370013ID.REUSE.DEMO011600000000000000005204599953033605802ID5910REUSE DEMO6010JATINANGOR62080704DEMO630416D9"'::jsonb
 where key = 'qris_payload' and jsonb_typeof(value) <> 'string';
update public.settings set value = 'true'::jsonb
 where key = 'qris_demo' and exists (select 1 from public.settings where key = 'qris_payload' and value #>> '{}' like '%ID.REUSE.DEMO%');
update public.settings set value = '"ReUse (Demo)"'::jsonb
 where key = 'qris_name' and exists (select 1 from public.settings where key = 'qris_demo' and value = 'true'::jsonb);
