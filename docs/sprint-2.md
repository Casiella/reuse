# Sprint 2 · 14–21 Nov 2026 · 19 SP

**Sprint goal:** Seeker bisa menemukan barang di kampusnya dan menghubungi owner.

## Sprint events

- Planning: 14 Nov
- Daily stand-up 15 menit (online)
- Review & demo: 19 Nov
- Retrospective: 19 Nov

## Sprint backlog

| ID | Item | SP | PIC |
|---|---|---|---|
| PBI-05 | Home: listing terbaru per kampus | 8 | Dev · Fikriyyah |
| PBI-06 | Search kata kunci + chip kategori | 5 | Dev · Casiella |
| PBI-07 | Campus filter: kampus, area kos, mode | 3 | Dev · Wella |
| PBI-08 | Chat realtime + 3 template pesan | 8 | Dev · Anassya |

## Increment

Alur cari → filter → detail → chat owner berjalan di PWA, dengan data bersama di Supabase.

## Acceptance criteria yang sudah terpenuhi

**PBI-05**
- Beranda menampilkan barang dari tabel `items` untuk kampus yang dipilih, urut terbaru, maks. 60.
- Barang yang diposting akun lain muncul otomatis (Supabase Realtime) tanpa refresh.
- Chip Sell / Swap / Donate tetap berfungsi.

**PBI-06**
- Pencarian kata kunci di judul dan deskripsi (tidak peka huruf besar/kecil), jalan otomatis 0,3 detik setelah berhenti mengetik.
- Chip kategori: Semua, Buku & Modul, Elektronik, Pakaian, Perabot Kos, Alat Tulis, Lainnya.
- Menampilkan jumlah hasil dan pesan kosong yang jelas.

**PBI-07**
- Filter kampus (bisa melihat kampus lain), area kos (5 area per kampus), dan mode.
- Filter aktif tampil sebagai label di beranda dan bisa dihapus sekali ketuk.
- Form posting punya kolom **Area kos** (opsional).

**PBI-08**
- Tombol **Chat pemilik** membuat satu percakapan per barang per pembeli (tidak dobel).
- Pesan terkirim dan diterima realtime. Titik merah di tab Chat saat ada pesan baru.
- 3 template pesan. Pembeli: "masih ada?", "bisa COD di <titik COD>?", dan satu sesuai mode (nego / tukar / ambil donasi). Penjual: "masih ada", "ketemu di <titik COD>", "kapan bisa COD?".
- Daftar chat menampilkan lawan bicara, barang, dan pesan terakhir.

## Perubahan dari Sprint 1

- OTP sekarang lewat Supabase Auth (bukan simulasi).
- Posting mengunggah foto ke Supabase Storage dan menyimpan ke tabel `items`.
- Pemilik bisa menghapus barangnya sendiri.

## Input baru

Hasil usability test (laporan M2, 21 Nov) masuk sebagai revisi UI di sprint ini. **Belum dikerjakan**: laporannya baru keluar 21 Nov. Catat temuan di sini lalu kerjakan sebelum review.

| Temuan | Layar | Revisi | Status |
|---|---|---|---|
| | | | |

## Di luar cakupan (dikunci)

Favorit, bagikan, edit profil.
