// Isi dengan data dari Supabase Dashboard → Project Settings → API.
// "anon public key" memang aman ditaruh di frontend; keamanan data dijaga oleh RLS di supabase/schema.sql.
window.REUSE_CONFIG = {
  SUPABASE_URL: 'https://bztmvkbwqxgscximthcn.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_oSMrxFELws0WkWkgjhP1AA_1uY5808U',

  // 'otp'      → kode OTP dikirim ke email kampus (butuh template email berisi {{ .Token }} + SMTP custom, lihat README)
  // 'password' → daftar/masuk pakai email kampus + password (matikan "Confirm email" di Supabase Auth)
  AUTH_MODE: 'password',
  OTP_LENGTH: 6
};
