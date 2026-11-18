# Changelog

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
