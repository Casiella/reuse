-- ReUse · PBI-12 · uji keamanan data (RLS)
-- Dijalankan di Postgres lokal yang sudah diberi stub Supabase (auth.uid, auth.jwt, storage)
-- lalu semua file di supabase/migrations/. Hasil: satu baris PASS/FAIL per skenario.
-- JANGAN dijalankan di database produksi (membuat akun & data uji).

create temp table hasil (no serial, skenario text, harap text, dapat text, status text);
grant all on hasil to public; grant all on hasil_no_seq to public;

create or replace function pg_temp.uji(skenario text, uid uuid, email text, q text, harap text) returns void
language plpgsql as $$
declare dapat text; n bigint;
begin
  perform set_config('request.jwt.claim.sub', uid::text, false);
  perform set_config('request.jwt.claims', json_build_object('email', email)::text, false);
  begin
    execute 'set role authenticated';
    if harap like 'rows:%' then execute 'select count(*) from (' || q || ') t' into n; dapat := 'rows:' || n;
    else execute q; get diagnostics n = row_count; dapat := case when n = 0 and q ilike any (array['update%','delete%']) then 'fail' else 'ok' end;
    end if;
    execute 'reset role';
  exception when others then
    execute 'reset role'; dapat := 'fail';
  end;
  insert into hasil (skenario, harap, dapat, status) values (skenario, harap, dapat, case when dapat = harap then 'PASS' else 'FAIL' end);
end $$;

-- akun uji: A & B mahasiswa Unpad, X orang luar (ITB), G gmail, Z admin
insert into auth.users values
 ('aaaaaaaa-0000-0000-0000-000000000001','a@mail.unpad.ac.id'),
 ('bbbbbbbb-0000-0000-0000-000000000002','b@mail.unpad.ac.id'),
 ('cccccccc-0000-0000-0000-000000000003','x@itb.ac.id'),
 ('dddddddd-0000-0000-0000-000000000004','g@gmail.com'),
 ('eeeeeeee-0000-0000-0000-000000000005','admin@unpad.ac.id');
insert into public.admins values ('eeeeeeee-0000-0000-0000-000000000005');

-- uji awal tanpa biaya posting; biaya diuji di bagian akhir
update public.settings set value = '0'::jsonb where key = 'post_fee';

\set A '''aaaaaaaa-0000-0000-0000-000000000001'''
\set B '''bbbbbbbb-0000-0000-0000-000000000002'''
\set X '''cccccccc-0000-0000-0000-000000000003'''
\set G '''dddddddd-0000-0000-0000-000000000004'''
\set Z '''eeeeeeee-0000-0000-0000-000000000005'''

select pg_temp.uji('Profil: email gmail ditolak', :G, 'g@gmail.com', $q$insert into profiles values ('dddddddd-0000-0000-0000-000000000004','g@gmail.com','G','unpad')$q$, 'fail');
select pg_temp.uji('Profil: A buat profil sendiri', :A, 'a@mail.unpad.ac.id', $q$insert into profiles values ('aaaaaaaa-0000-0000-0000-000000000001','a@mail.unpad.ac.id','A','unpad')$q$, 'ok');
select pg_temp.uji('Profil: B buat profil sendiri', :B, 'b@mail.unpad.ac.id', $q$insert into profiles values ('bbbbbbbb-0000-0000-0000-000000000002','b@mail.unpad.ac.id','B','unpad')$q$, 'ok');
select pg_temp.uji('Profil: X buat profil sendiri', :X, 'x@itb.ac.id', $q$insert into profiles values ('cccccccc-0000-0000-0000-000000000003','x@itb.ac.id','X','itb')$q$, 'ok');
select pg_temp.uji('Profil: Z (admin) buat profil', :Z, 'admin@unpad.ac.id', $q$insert into profiles values ('eeeeeeee-0000-0000-0000-000000000005','admin@unpad.ac.id','Admin','unpad')$q$, 'ok');
select pg_temp.uji('Profil: A ubah profil B', :A, 'a@mail.unpad.ac.id', $q$update profiles set name='hack' where id='bbbbbbbb-0000-0000-0000-000000000002'$q$, 'fail');
select pg_temp.uji('Admin: A tidak bisa jadikan diri admin', :A, 'a@mail.unpad.ac.id', $q$insert into admins values ('aaaaaaaa-0000-0000-0000-000000000001')$q$, 'fail');

select pg_temp.uji('Barang: A posting ke kampus sendiri', :A, 'a@mail.unpad.ac.id', $q$insert into items (id,owner,campus,title,category,condition,mode,price,cod,photos) values ('11111111-0000-0000-0000-000000000001','aaaaaaaa-0000-0000-0000-000000000001','unpad','Buku A','Buku & Modul','Baik','Sell',50000,0,'{x}')$q$, 'ok');
select pg_temp.uji('Barang: A posting ke kampus lain', :A, 'a@mail.unpad.ac.id', $q$insert into items (owner,campus,title,category,condition,mode,price,cod,photos) values ('aaaaaaaa-0000-0000-0000-000000000001','itb','Buku','Buku & Modul','Baik','Sell',50000,0,'{x}')$q$, 'fail');
select pg_temp.uji('Barang: A posting atas nama B', :A, 'a@mail.unpad.ac.id', $q$insert into items (owner,campus,title,category,condition,mode,price,cod,photos) values ('bbbbbbbb-0000-0000-0000-000000000002','unpad','Buku','Buku & Modul','Baik','Sell',50000,0,'{x}')$q$, 'fail');
select pg_temp.uji('Barang: B bisa lihat barang A', :B, 'b@mail.unpad.ac.id', $q$select * from items$q$, 'rows:1');
select pg_temp.uji('Barang: B tidak bisa ubah barang A', :B, 'b@mail.unpad.ac.id', $q$update items set price=1000 where id='11111111-0000-0000-0000-000000000001'$q$, 'fail');
select pg_temp.uji('Barang: B tidak bisa hapus barang A', :B, 'b@mail.unpad.ac.id', $q$delete from items where id='11111111-0000-0000-0000-000000000001'$q$, 'fail');

select pg_temp.uji('Chat: B mulai chat ke A', :B, 'b@mail.unpad.ac.id', $q$insert into conversations (id,item_id,buyer_id,seller_id) values ('22222222-0000-0000-0000-000000000001','11111111-0000-0000-0000-000000000001','bbbbbbbb-0000-0000-0000-000000000002','aaaaaaaa-0000-0000-0000-000000000001')$q$, 'ok');
select pg_temp.uji('Chat: B kirim pesan', :B, 'b@mail.unpad.ac.id', $q$insert into messages (conversation_id,sender,body) values ('22222222-0000-0000-0000-000000000001','bbbbbbbb-0000-0000-0000-000000000002','Halo')$q$, 'ok');
select pg_temp.uji('Chat: X tidak bisa baca chat A-B', :X, 'x@itb.ac.id', $q$select * from messages$q$, 'rows:0');
select pg_temp.uji('Chat: admin tidak bisa baca isi chat', :Z, 'admin@unpad.ac.id', $q$select * from messages$q$, 'rows:0');
select pg_temp.uji('Chat: X tidak bisa kirim ke chat A-B', :X, 'x@itb.ac.id', $q$insert into messages (conversation_id,sender,body) values ('22222222-0000-0000-0000-000000000001','cccccccc-0000-0000-0000-000000000003','spam')$q$, 'fail');

select pg_temp.uji('COD: B ajukan kesepakatan', :B, 'b@mail.unpad.ac.id', $q$insert into deals (id,conversation_id,proposer,meet_at,place) values ('33333333-0000-0000-0000-000000000001','22222222-0000-0000-0000-000000000001','bbbbbbbb-0000-0000-0000-000000000002',now()+interval '1 day','Gerbang Lama')$q$, 'ok');
select pg_temp.uji('COD: B tidak bisa terima ajakan sendiri', :B, 'b@mail.unpad.ac.id', $q$update deals set status='accepted' where id='33333333-0000-0000-0000-000000000001'$q$, 'fail');
select pg_temp.uji('COD: A tidak bisa ganti tempat', :A, 'a@mail.unpad.ac.id', $q$update deals set place='Rumah A' where id='33333333-0000-0000-0000-000000000001'$q$, 'fail');
select pg_temp.uji('COD: X tidak bisa lihat kesepakatan', :X, 'x@itb.ac.id', $q$select * from deals$q$, 'rows:0');
select pg_temp.uji('COD: A terima ajakan', :A, 'a@mail.unpad.ac.id', $q$update deals set status='accepted' where id='33333333-0000-0000-0000-000000000001'$q$, 'ok');
select pg_temp.uji('COD: status yang sudah diterima tidak bisa diubah', :B, 'b@mail.unpad.ac.id', $q$update deals set status='cancelled' where id='33333333-0000-0000-0000-000000000001'$q$, 'fail');
select pg_temp.uji('COD: daftar chat ikut terbarui', :A, 'a@mail.unpad.ac.id', $q$select * from conversations where last_message like 'COD disepakati%'$q$, 'rows:1');

select pg_temp.uji('Selesai: penerima harus pernah chat', :A, 'a@mail.unpad.ac.id', $q$update items set status='done', taken_by='cccccccc-0000-0000-0000-000000000003' where id='11111111-0000-0000-0000-000000000001'$q$, 'fail');
select pg_temp.uji('Selesai: A tandai selesai ke B', :A, 'a@mail.unpad.ac.id', $q$update items set status='done', taken_by='bbbbbbbb-0000-0000-0000-000000000002' where id='11111111-0000-0000-0000-000000000001'$q$, 'ok');
select pg_temp.uji('Selesai: barang selesai hilang dari showcase', :X, 'x@itb.ac.id', $q$select * from showcase(8)$q$, 'rows:0');

select pg_temp.uji('Sundul: A catat klik barang sendiri', :A, 'a@mail.unpad.ac.id', $q$insert into sundul_clicks (item_id,user_id) values ('11111111-0000-0000-0000-000000000001','aaaaaaaa-0000-0000-0000-000000000001')$q$, 'ok');
select pg_temp.uji('Sundul: B tidak bisa sundul barang A', :B, 'b@mail.unpad.ac.id', $q$insert into sundul_clicks (item_id,user_id) values ('11111111-0000-0000-0000-000000000001','bbbbbbbb-0000-0000-0000-000000000002')$q$, 'fail');
select pg_temp.uji('Sundul: A tidak bisa baca log', :A, 'a@mail.unpad.ac.id', $q$select * from sundul_clicks$q$, 'rows:0');
select pg_temp.uji('Sundul: admin bisa baca log', :Z, 'admin@unpad.ac.id', $q$select * from sundul_clicks$q$, 'rows:1');

select pg_temp.uji('Admin: statistik ditolak untuk non-admin', :A, 'a@mail.unpad.ac.id', $q$select admin_stats()$q$, 'fail');
select pg_temp.uji('Admin: statistik untuk admin', :Z, 'admin@unpad.ac.id', $q$select admin_stats()$q$, 'ok');
select pg_temp.uji('Admin: hapus barang (moderasi)', :Z, 'admin@unpad.ac.id', $q$delete from items where id='11111111-0000-0000-0000-000000000001'$q$, 'ok');

select pg_temp.uji('Privasi: B tidak bisa baca email pengguna lain', :B, 'b@mail.unpad.ac.id', $q$select email from profiles$q$, 'fail');
select pg_temp.uji('Privasi: B tetap bisa baca nama penjual', :B, 'b@mail.unpad.ac.id', $q$select name, campus from profiles$q$, 'rows:4');
select pg_temp.uji('Privasi: daftar pengguna ditolak untuk non-admin', :A, 'a@mail.unpad.ac.id', $q$select * from admin_users()$q$, 'fail');
select pg_temp.uji('Privasi: admin bisa lihat daftar pengguna', :Z, 'admin@unpad.ac.id', $q$select * from admin_users()$q$, 'rows:4');

select pg_temp.uji('Kampus: semua akun bisa baca daftar kampus', :A, 'a@mail.unpad.ac.id', $q$select * from campuses$q$, 'rows:6');
select pg_temp.uji('Kampus: A tidak bisa ubah titik COD', :A, 'a@mail.unpad.ac.id', $q$update campuses set cod='{"Rumah A"}' where id='unpad'$q$, 'fail');
select pg_temp.uji('Kampus: A tidak bisa tambah kampus', :A, 'a@mail.unpad.ac.id', $q$insert into campuses (id,name,short,domain,cod) values ('palsu','Kampus Palsu','KP','palsu.ac.id','{"X"}')$q$, 'fail');
select pg_temp.uji('Kampus: admin ubah titik COD', :Z, 'admin@unpad.ac.id', $q$update campuses set cod='{"Gerbang Lama","Masjid Raya Unpad","Bale Santika","Halte Bus Kampus","Kantin Fikom"}' where id='unpad'$q$, 'ok');
select pg_temp.uji('Kampus: admin tambah kampus', :Z, 'admin@unpad.ac.id', $q$insert into campuses (id,name,short,loc,domain,cod) values ('unair','Universitas Airlangga','Unair','Surabaya','unair.ac.id','{"Gerbang Kampus C"}')$q$, 'ok');
select pg_temp.uji('Kampus: domain harus .ac.id', :Z, 'admin@unpad.ac.id', $q$insert into campuses (id,name,short,domain,cod) values ('x1','Kampus X','X','x.com','{"X"}')$q$, 'fail');
select pg_temp.uji('Kampus: titik COD tidak boleh kosong', :Z, 'admin@unpad.ac.id', $q$update campuses set cod='{}' where id='unpad'$q$, 'fail');
select pg_temp.uji('Kampus: profil dengan kampus tak terdaftar ditolak', :G, 'g@unpad.ac.id', $q$insert into profiles values ('dddddddd-0000-0000-0000-000000000004','g@unpad.ac.id','G','ngasal')$q$, 'fail');

-- Biaya posting Rp2.000 (QRIS manual)
select pg_temp.uji('Bayar: tanpa QRIS, posting tetap gratis', :A, 'a@mail.unpad.ac.id', $q$insert into items (owner,campus,title,category,condition,mode,cod,photos) values ('aaaaaaaa-0000-0000-0000-000000000001','unpad','Tes gratis','Lainnya','Baik','Donate',0,'{x}') returning pay_status$q$, 'ok');
update public.settings set value = '2000'::jsonb where key = 'post_fee';
select pg_temp.uji('Bayar: biaya belum berlaku sebelum QRIS dipasang', :B, 'b@mail.unpad.ac.id', $q$select * from items where title='Tes gratis' and pay_status='approved'$q$, 'rows:1');
update public.settings set value = '"000201010211...dummy"'::jsonb where key = 'qris_payload';
select pg_temp.uji('Bayar: A posting barang baru', :A, 'a@mail.unpad.ac.id', $q$insert into items (id,owner,campus,title,category,condition,mode,price,cod,photos) values ('11111111-0000-0000-0000-000000000002','aaaaaaaa-0000-0000-0000-000000000001','unpad','Kipas','Elektronik','Baik','Sell',60000,0,'{x}')$q$, 'ok');
select pg_temp.uji('Bayar: barang belum dibayar tersembunyi dari B', :B, 'b@mail.unpad.ac.id', $q$select * from items where id='11111111-0000-0000-0000-000000000002'$q$, 'rows:0');
select pg_temp.uji('Bayar: A tetap melihat barangnya (pending)', :A, 'a@mail.unpad.ac.id', $q$select * from items where id='11111111-0000-0000-0000-000000000002' and pay_status='pending'$q$, 'rows:1');
select pg_temp.uji('Bayar: A tidak bisa set lunas sendiri', :A, 'a@mail.unpad.ac.id', $q$update items set pay_status='approved' where id='11111111-0000-0000-0000-000000000002'$q$, 'fail');
select pg_temp.uji('Bayar: bukti di folder orang lain ditolak', :A, 'a@mail.unpad.ac.id', $q$insert into payments (item_id,owner,amount,proof_path) values ('11111111-0000-0000-0000-000000000002','aaaaaaaa-0000-0000-0000-000000000001',2000,'bbbbbbbb-0000-0000-0000-000000000002/x.jpg')$q$, 'fail');
select pg_temp.uji('Bayar: A kirim bukti (nominal diisi sistem)', :A, 'a@mail.unpad.ac.id', $q$insert into payments (item_id,owner,amount,proof_path) values ('11111111-0000-0000-0000-000000000002','aaaaaaaa-0000-0000-0000-000000000001',1,'aaaaaaaa-0000-0000-0000-000000000001/x.jpg')$q$, 'ok');
select pg_temp.uji('Bayar: nominal tercatat Rp2.000', :A, 'a@mail.unpad.ac.id', $q$select * from payments where amount=2000$q$, 'rows:1');
select pg_temp.uji('Bayar: tidak bisa kirim bukti ganda saat masih menunggu', :A, 'a@mail.unpad.ac.id', $q$insert into payments (item_id,owner,amount,proof_path) values ('11111111-0000-0000-0000-000000000002','aaaaaaaa-0000-0000-0000-000000000001',2000,'aaaaaaaa-0000-0000-0000-000000000001/y.jpg')$q$, 'fail');
select pg_temp.uji('Bayar: B tidak bisa lihat bukti bayar A', :B, 'b@mail.unpad.ac.id', $q$select * from payments$q$, 'rows:0');
select pg_temp.uji('Bayar: A tidak bisa menyetujui sendiri', :A, 'a@mail.unpad.ac.id', $q$update payments set status='approved' where item_id='11111111-0000-0000-0000-000000000002'$q$, 'fail');
select pg_temp.uji('Bayar: admin menyetujui', :Z, 'admin@unpad.ac.id', $q$update payments set status='approved' where item_id='11111111-0000-0000-0000-000000000002'$q$, 'ok');
select pg_temp.uji('Bayar: setelah disetujui, B bisa lihat barang', :B, 'b@mail.unpad.ac.id', $q$select * from items where id='11111111-0000-0000-0000-000000000002'$q$, 'rows:1');
select pg_temp.uji('Bayar: keputusan tidak bisa diubah lagi', :Z, 'admin@unpad.ac.id', $q$update payments set status='rejected' where item_id='11111111-0000-0000-0000-000000000002'$q$, 'fail');
select pg_temp.uji('Bayar: barang lunas tidak bisa dibayar lagi', :A, 'a@mail.unpad.ac.id', $q$insert into payments (item_id,owner,amount,proof_path) values ('11111111-0000-0000-0000-000000000002','aaaaaaaa-0000-0000-0000-000000000001',2000,'aaaaaaaa-0000-0000-0000-000000000001/z.jpg')$q$, 'fail');
select pg_temp.uji('Bayar: A tidak bisa ubah biaya posting', :A, 'a@mail.unpad.ac.id', $q$update settings set value='0'::jsonb where key='post_fee'$q$, 'fail');
select pg_temp.uji('Bayar: admin ubah gambar QRIS', :Z, 'admin@unpad.ac.id', $q$update settings set value='"https://x/qris.png"'::jsonb where key='qris_url'$q$, 'ok');
select pg_temp.uji('Bayar: posting admin langsung tampil', :Z, 'admin@unpad.ac.id', $q$insert into items (owner,campus,title,category,condition,mode,cod,photos) values ('eeeeeeee-0000-0000-0000-000000000005','unpad','Info admin','Lainnya','Baik','Donate',0,'{x}') returning pay_status$q$, 'ok');

select no, status, skenario, harap, dapat from hasil order by no;
select count(*) filter (where status='PASS') as lulus, count(*) as total from hasil;
