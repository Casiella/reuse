# Sprint 3 · 15 SP

**Sprint goal:** transaksi selesai sampai barang berpindah tangan, dan tim bisa memantau aplikasi lewat panel admin.

> Tanggal sprint dan PIC belum ditentukan. Isi di sini dan di Product Backlog.

## Sprint backlog

| ID | Item | SP | Prioritas | PIC |
|---|---|---|---|---|
| PBI-09 | Kartu kesepakatan waktu & tempat COD di chat | 3 | Medium | [__] |
| PBI-10 | Tandai Selesai, ringkasan dampak, profil aktivitas | 5 | Medium | [__] |
| PBI-11 | Fake-door Sundul: tombol + log klik | 2 | Medium | [__] |
| PBI-12 | Uji keamanan data (RLS) & bug fixing | 5 | High | [__] |
| — | Panel admin (pendukung PBI-10 & PBI-11) | — | — | [__] |

## Acceptance criteria yang sudah terpenuhi

**PBI-09 · Kartu kesepakatan COD**
- Ikon kalender di chat membuka form tanggal, jam, dan tempat (titik COD kampus atau tempat lain).
- Ajakan tampil sebagai kartu di chat kedua pihak secara realtime.
- Penerima bisa **Terima** atau **Tolak**; pengaju bisa **Batalkan** selama belum dijawab.
- Setelah dijawab, kartu terkunci. Daftar chat menampilkan status terakhir ("COD disepakati: …").

**PBI-10 · Tandai selesai, dampak, aktivitas**
- Pemilik menekan **Tandai selesai** dan memilih penerima dari orang yang pernah chat (atau "di luar ReUse").
- Barang selesai hilang dari beranda, pencarian, dan slideshow login; detailnya diberi tanda "Barang sudah selesai".
- Pop-up ringkasan dampak: jumlah barang yang dapat pemilik baru, uang dari penjualan, donasi, tukar.
- Profil: angka aktivitas (diposting, selesai, didapat, COD disepakati), daftar dampak, dan daftar "Barangku" dengan status.
- Pemilik bisa membuat barang **tersedia lagi**.

**PBI-11 · Fake-door Sundul**
- Tombol **Sundul** di detail barang milik sendiri. Klik dicatat di tabel `sundul_clicks`.
- Pengguna melihat penjelasan "Sundul segera hadir" (± Rp2.000, naik ke atas beranda 24 jam).
- Admin melihat total klik, pengguna unik, persentase dari semua pengguna, dan barang yang paling sering disundul.

**PBI-12 · Keamanan & bug fixing**
- 47 skenario RLS diuji dan lulus: `supabase/tests/rls_test.sql` (lihat cara menjalankan di bawah).
- **Bug ditemukan & diperbaiki:** email semua pengguna bisa dibaca akun mana pun lewat API. Sekarang kolom email tertutup (migrasi `005_hide_emails.sql`); hanya admin yang bisa melihat email lewat fungsi `admin_users()`.
- Fungsi admin tidak bisa dipanggil tanpa login (migrasi `004`).
- Saran dari Supabase yang belum dikerjakan: aktifkan *Leaked password protection* di Authentication → Settings.

**Panel admin**
- Hanya akun di tabel `admins` yang melihat tombol **Panel admin** di Profil.
- Tab **Ringkasan**: pengguna, barang aktif/selesai, percakapan, COD disepakati, klik Sundul, barang per mode, per kampus.
- Tab **Barang**: 100 barang terbaru semua kampus, bisa dihapus (moderasi).
- Tab **Pengguna**: nama, email, kampus, jumlah barang.
- Tab **Sundul**: hasil fake-door.
- Admin **tidak** bisa membaca isi chat.

## Menambah admin

Di Supabase → SQL Editor:

```sql
insert into public.admins (user_id)
select id from auth.users where email = 'email@kampus.ac.id';
```

## Menjalankan uji RLS (PBI-12)

Jangan di database produksi. Di Postgres lokal: jalankan stub Supabase, lalu `supabase/migrations/*.sql` berurutan, lalu `supabase/tests/rls_test.sql`. Hasilnya tabel PASS/FAIL per skenario.
