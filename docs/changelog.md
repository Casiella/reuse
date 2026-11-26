# Changelog

## 2026-11-26 · Komplain & tanda dibaca di chat
- Komplain (migrasi 012): ikon bendera di halaman barang dan di chat. Pilih alasan (Penipuan, Barang tidak sesuai, Tidak datang saat COD, Kata-kata kasar, Konten tidak pantas, Lainnya) + cerita singkat.
- Komplain hanya terlihat oleh pelapor dan admin; terlapor tidak tahu siapa pelapornya. Satu komplain aktif per orang & barang.
- Admin: tab Komplain (Perlu ditangani / Riwayat) dengan tombol Proses, Selesai, Tolak + catatan untuk pelapor. Badge "N komplain" di tombol Panel admin.
- Pelapor melihat status & jawaban admin di Profil → Komplain saya, plus notifikasi saat statusnya berubah.
- Chat: ✓ terkirim, ✓✓ hijau sudah dibaca. Daftar chat menebalkan chat yang belum dibaca dan menampilkan jumlah pesan baru; tab Chat menampilkan angka total.

## 2026-11-26 · Sundul berbayar
- Sundul bukan lagi fake-door (migrasi 011): Rp2.000 lewat QRIS yang sama, diverifikasi admin, lalu barang tampil paling atas di beranda kampus 24 jam dengan lencana "Disundul".
- Admin bisa mengubah biaya sundul (0 = gratis & langsung aktif). Tab Sundul menampilkan barang yang sedang disundul dan pemasukannya.
- Uji RLS: 124 skenario.

## 2026-11-26 · Rating penjual
- Tabel `reviews` + view `seller_ratings` (migrasi 010). Hanya pembeli yang dipilih saat "Tandai selesai" yang bisa memberi 1–5 bintang + ulasan, sekali per barang (bisa diubah).
- Rating tampil di halaman barang (ketuk untuk lihat semua ulasan) dan di Profil penjual.
- Pembeli diingatkan lewat notifikasi, bagian "Beri rating" di Profil, tombol di halaman barang, dan banner di chat.
- Admin dan penulis bisa menghapus ulasan. Uji RLS: 79 skenario.

## 2026-11-25 · Perbaikan
- Perbaikan: jika akun berganti di tab lain, tab ini ikut memuat ulang (sebelumnya "Tandai selesai" & "Terima COD" gagal karena memakai akun dari tab lain).
- Pesan error teknis diganti kalimat yang jelas.
- Admin: titik merah di tab Profil dan angka "N menunggu" di tombol Panel admin; tombolnya langsung membuka tab Bayar.

## 2026-11-25 · QRIS demo
- QRIS demo bawaan (merchant fiktif "REUSE DEMO", tidak bisa menerima uang) supaya alur bayar Rp2.000 bisa dicoba tanpa QRIS asli (migrasi 009).
- Layar bayar dan Panel admin menampilkan label "Mode demo". Upload QRIS asli di Panel admin → Bayar otomatis mematikan mode demo.

## 2026-11-25 · Biaya posting + QRIS nominal otomatis
- Setiap posting dikenai biaya (default Rp2.000, diatur di Panel admin → Bayar). Berlaku setelah admin mengupload QRIS.
- Admin upload gambar QRIS statis sekali; aplikasi membaca isinya dan membuat QRIS dengan nominal otomatis untuk setiap pembayaran (`js/qris.js`, pustaka `js/vendor/`).
- Penjual upload bukti bayar; admin menyetujui/menolak. Barang baru tampil ke orang lain setelah disetujui.
- Tabel `settings` & `payments`, bucket privat `payment-proofs`, bucket publik `site` (migrasi 007). Uji RLS: 66 skenario.

## 2026-11-25 · Kampus & titik COD diatur admin
- Daftar kampus, titik COD (maks. 8), dan area kos pindah dari kode ke tabel `campuses` (migrasi 006).
- Panel admin → tab **Kampus**: tambah kampus, ubah nama/domain/titik COD/area kos, nonaktifkan kampus.
- Nama titik COD disimpan di tiap barang (`cod_place`), jadi barang lama tidak berubah tempat saat daftar COD diedit.
- Uji RLS bertambah jadi 47 skenario (semua lulus).

## 2026-11-25 · Siap dipakai
- Label sprint dihapus dari aplikasi (badge beranda dan menu Profil).
- Tombol terkunci diganti fitur jadi: Bagikan barang (share/salin) dan Ubah nama di Profil. Tombol favorit dihapus.
- Beranda tidak lagi menampilkan barang contoh saat kampus masih kosong.
- Perbaikan: daftar barang kosong karena relasi profil ganda (pemilik vs penerima).

## 2026-11-25 · Sprint 3 + panel admin
- PBI-09: kartu kesepakatan waktu & tempat COD di chat (tabel `deals`, realtime).
- PBI-10: tandai selesai + pilih penerima, ringkasan dampak, profil aktivitas, barang selesai disembunyikan dari beranda/cari/login.
- PBI-11: fake-door Sundul dengan log klik (`sundul_clicks`).
- PBI-12: 39 skenario RLS lulus (`supabase/tests/rls_test.sql`); perbaikan kebocoran email pengguna (migrasi 005).
- Panel admin: ringkasan, moderasi barang, daftar pengguna, hasil Sundul (tabel `admins`).

## 2026-11-18 · Tampilan
- Layar login: latar ilustrasi kamar kos + kartu kaca (glassmorphism), slideshow barang yang benar-benar sedang dijual (fungsi `showcase`, migrasi 002), logo putih.
- Logo dibuat ulang sebagai vektor (`img/logo.svg`) supaya tajam di semua layar. Layar login: slideshow 5 barang contoh yang berganti otomatis.
- Perbaikan: halaman depan tidak lagi ikut tampil di layar lain. Layar login/OTP kembali ke desain awal. Kardus di ilustrasi dibuat lebih realistis.
- Landing: foto barang diganti ilustrasi (kardus, buku, lampu, tanaman); tombol login berulang dihapus. Akun yang sudah login tidak pernah diarahkan ke halaman depan/login lagi.
- Halaman depan diganti jadi landing page: navbar + logo, hero pemandangan, kotak cari, sambutan, 3 kartu Sell/Swap/Donate. Kartu melayang dihapus.
- Layar pembuka dan layar daftar/masuk memakai latar ombre hijau dan logo ReUse (`img/logo.png`).

## 2026-11-18 · Sprint 2
- Tersambung ke Supabase: Auth (OTP email atau password), tabel `profiles`/`items`/`conversations`/`messages`, bucket `item-photos`, RLS, Realtime (`supabase/migrations/001_sprint2_schema.sql`).
- PBI-05: beranda membaca barang dari database, update live.
- PBI-06: layar Cari dengan kata kunci + chip kategori.
- PBI-07: filter kampus, area kos, mode; kolom area kos di form posting.
- PBI-08: chat realtime, daftar chat, 3 template pesan, notifikasi pesan baru.
- Pemilik bisa menghapus barangnya.
- Foto contoh dipindah ke folder `img/`.

## 2026-11-12
- Kode dipecah menjadi `index.html`, `css/styles.css`, dan `js/app.js`.
- Menambahkan desain 21 layar dalam format SVG di folder `design/`.

## 2026-11-11
- Prototipe Sprint 1 dibuat: PBI-01 sampai PBI-04.
- Deploy ke https://reuse-sprint1.vercel.app.
- Popup "Belum tersedia di Sprint 1" dihapus. Fitur yang dikunci sekarang hanya menampilkan ikon gembok.
