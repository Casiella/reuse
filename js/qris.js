// QRIS statis → QRIS dengan nominal (format EMVCo / QRIS Bank Indonesia).
// Dipakai di halaman bayar: isi QRIS milik admin ditambah tag 54 (nominal),
// tag 01 diubah dari 11 (statis) ke 12 (dinamis), lalu CRC (tag 63) dihitung ulang.
(function (root) {
  function crc16(str) {
    let crc = 0xffff;
    for (let i = 0; i < str.length; i++) {
      crc ^= str.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
  }
  function parse(payload) {
    const out = [];
    let i = 0;
    while (i < payload.length) {
      const id = payload.slice(i, i + 2), len = parseInt(payload.slice(i + 2, i + 4), 10);
      if (!/^\d\d$/.test(id) || isNaN(len)) throw new Error('Format QRIS tidak dikenali');
      const value = payload.slice(i + 4, i + 4 + len);
      if (value.length !== len) throw new Error('Format QRIS terpotong');
      out.push([id, value]);
      i += 4 + len;
    }
    return out;
  }
  const tlv = (id, v) => id + String(v.length).padStart(2, '0') + v;
  // Mengembalikan pesan kesalahan, atau null jika valid
  function check(payload) {
    if (typeof payload !== 'string' || !payload.startsWith('000201')) return 'Bukan kode QRIS (harus diawali 000201).';
    let f;
    try { f = parse(payload); } catch (e) { return e.message; }
    const crc = f.find(x => x[0] === '63');
    if (!crc || payload.slice(-8, -4) !== '6304') return 'Kode QRIS tidak punya CRC.';
    if (crc16(payload.slice(0, -4)) !== crc[1].toUpperCase()) return 'CRC QRIS tidak cocok, gambar mungkin rusak.';
    if (!f.some(x => x[0] === '58' && x[1] === 'ID')) return 'Bukan QRIS Indonesia.';
    if (!f.some(x => x[0] === '53' && x[1] === '360')) return 'Mata uang QRIS bukan Rupiah.';
    return null;
  }
  function merchant(payload) { try { const m = parse(payload).find(x => x[0] === '59'); return m ? m[1] : ''; } catch (e) { return ''; } }
  function withAmount(payload, amount) {
    const err = check(payload); if (err) throw new Error(err);
    amount = Math.round(amount);
    if (!(amount > 0)) throw new Error('Nominal harus lebih dari 0');
    const f = parse(payload).filter(x => x[0] !== '63' && x[0] !== '54');
    const pi = f.find(x => x[0] === '01'); if (pi) pi[1] = '12';
    const at = f.findIndex(x => x[0] === '58');
    f.splice(at < 0 ? f.length : at, 0, ['54', String(amount)]);
    const body = f.map(x => tlv(x[0], x[1])).join('') + '6304';
    return body + crc16(body);
  }
  const api = { crc16, parse, check, merchant, withAmount };
  if (typeof module !== 'undefined') module.exports = api; else root.QRIS = api;
})(this);
