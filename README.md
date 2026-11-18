# ReUse · Sprint 2

Prototipe PWA **ReUse — Your Old, Their Gold**, lanjutan dari [reuse-sprint1](https://github.com/anasyadyandra/reuse-sprint1).
Mulai sprint ini data **sudah tersimpan di Supabase**: barang yang diposting satu akun langsung terlihat di akun lain.

- **Sprint:** 14–21 Nov 2026 · 19 SP
- **Sprint goal:** seeker bisa menemukan barang di kampusnya dan menghubungi owner.

## Cakupan Sprint 2

| ID | Sprint Backlog | SP | PIC | Status |
|---|---|---|---|---|
| PBI-05 | Home: listing terbaru per kampus | 8 | Fikriyyah | ✅ |
| PBI-06 | Search kata kunci + chip kategori | 5 | Safira | ✅ |
| PBI-07 | Campus filter: kampus, area kos, mode | 3 | Safira | ✅ |
| PBI-08 | Chat realtime + 3 template pesan | 8 | Anassya | ✅ |

Juga di sprint ini: PBI-01 (OTP) dan PBI-02 (posting) yang sebelumnya disimulasikan sekarang **benar-benar memakai Supabase Auth, Storage, dan Database**.

## Struktur folder

```
reuse-sprint2/
├── index.html            # semua layar (section.screen)
├── css/styles.css        # gaya & token warna
├── js/config.js          # ← ISI URL & anon key Supabase di sini
├── js/app.js             # logika aplikasi + query Supabase
├── supabase/schema.sql   # tabel, RLS, storage, realtime (jalankan sekali)
├── img/                  # foto barang contoh
├── vercel.json
└── docs/ (sprint-1.md, sprint-2.md, changelog.md)
```

## Setup Supabase (± 10 menit)

1. **Buat project** di https://supabase.com → New project.
2. **Buat tabel:** buka *SQL Editor → New query*, tempel seluruh isi `supabase/schema.sql`, klik **Run**. Ini membuat tabel `profiles`, `items`, `conversations`, `messages`, bucket foto `item-photos`, aturan keamanan (RLS), dan mengaktifkan Realtime. Aman dijalankan ulang.
3. **Isi `js/config.js`:** ambil *Project URL* dan *anon public key* dari *Project Settings → API*.
4. **Pilih cara login** (`AUTH_MODE` di `js/config.js`):

   **a. `'otp'` (sesuai desain, kode dikirim ke email kampus)**
   - *Authentication → Email Templates*: di template **Magic Link** dan **Confirm signup**, ganti isinya supaya memuat kode, misalnya:
     `<h2>Kode ReUse kamu: {{ .Token }}</h2><p>Berlaku 1 jam.</p>`
   - *Authentication → Sign In / Providers → Email*: cek **Email OTP Length**. Samakan dengan `OTP_LENGTH` di `config.js` (default 6).
   - **Wajib pasang SMTP sendiri** di *Authentication → Emails → SMTP Settings* (contoh gratis: Resend atau Brevo). Email bawaan Supabase hanya mengirim ke alamat anggota tim project dan dibatasi beberapa email per jam, jadi email `.ac.id` teman-teman tidak akan menerima kode.

   **b. `'password'` (paling cepat untuk demo)**
   - *Authentication → Sign In / Providers → Email*: matikan **Confirm email**.
   - Login pakai email `.ac.id` + password. Akun baru otomatis dibuat saat pertama masuk.

5. **Jalankan lokal:** `npx serve .` lalu buka http://localhost:3000. Kalau `config.js` belum diisi, aplikasi menampilkan layar "Supabase belum tersambung".

## GitHub + Vercel

```bash
git remote add origin https://github.com/anasyadyandra/reuse-sprint2.git
git push -u origin main
```

Lalu di Vercel: **Add New → Project →** pilih repo `reuse-sprint2` → Framework Preset **Other**, Build Command kosong, Output Directory `.` → Deploy. Setiap `git push` ke `main` otomatis ter-deploy.

## Cara demo (21 Nov)

1. Buka app di **dua browser/HP** (atau satu jendela biasa + satu incognito), login dengan dua email kampus berbeda.
2. Akun A: tombol **+** → posting barang (foto, mode, area kos, titik COD).
3. Akun B: barang A langsung muncul di **Beranda** (live, tanpa refresh).
4. Akun B: **Cari** kata kunci / pilih chip kategori; di Beranda pakai tombol **filter** (kampus, area kos, mode).
5. Akun B: buka barang → **Chat pemilik** → ketuk salah satu dari **3 template pesan**.
6. Akun A: titik merah muncul di tab **Chat** → buka → balas. Pesan muncul realtime di akun B.

## Catatan teknis

- **Keamanan** diatur oleh RLS di `schema.sql`: hanya email `.ac.id` yang bisa membuat profil, posting hanya ke kampus sendiri, hanya pemilik yang bisa menghapus barangnya, dan chat hanya bisa dibaca dua pesertanya. *anon key* memang aman ditaruh di frontend.
- **Foto** dikecilkan ke 800 px (JPEG) di browser, lalu diunggah ke bucket `item-photos/<user-id>/…`.
- **Barang contoh** (5 barang di folder `img/`) hanya tampil kalau kampus itu belum punya barang asli. Barang contoh tidak bisa di-chat.
- **Area kos** per kampus ada di konstanta `CAMPUS` (`area: [...]`) di `js/app.js`.
- Masih dikunci (ikon gembok): favorit, bagikan, edit profil.
