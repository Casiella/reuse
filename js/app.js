(()=>{
const IC={
cycle:'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"/><path d="M16 16h5v5"/>',
book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
table:'<path d="M3 7h18"/><path d="M5 7v13M19 7v13"/><path d="M5 12h14"/>',
shirt:'<path d="M20.4 6.6 16 4a4 4 0 0 1-8 0L3.6 6.6a1 1 0 0 0-.5 1.2l1 3a1 1 0 0 0 1.3.6L7 11v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9l1.6.4a1 1 0 0 0 1.3-.6l1-3a1 1 0 0 0-.5-1.2z"/>',
laptop:'<rect x="4" y="4" width="16" height="11" rx="2"/><path d="M2 20h20"/>',
mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',
pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
flag:'<path d="M4 22V4a1 1 0 0 1 1-1h12l-2 4 2 4H5"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
x:'<path d="M18 6 6 18M6 6l12 12"/>',plus:'<path d="M12 5v14M5 12h14"/>',
home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
swap:'<path d="M16 3h5v5"/><path d="M21 3 14 10"/><path d="M8 21H3v-5"/><path d="m3 21 7-7"/>',
gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v9H5v-9"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
camera:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
check:'<path d="M20 6 9 17l-5-5"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
box:'<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
out:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
send:'<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>'
};
const svg=(n,c='i')=>`<svg class="${c}" viewBox="0 0 24 24">${IC[n]||''}</svg>`;
const VB='<svg viewBox="0 0 24 24"><path d="M12 2l2.4 1.8 3-.2.9 2.9 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.9 2.9-3-.2L12 22l-2.4-1.8-3 .2-.9-2.9-2.5-1.7 1-2.8-1-2.8 2.5-1.7.9-2.9 3 .2z"/><path d="m8.5 12 2.5 2.5 4.5-5" fill="none"/></svg>';
const hydrate=root=>root.querySelectorAll('[data-ic]').forEach(e=>{if(!e.dataset.done){e.insertAdjacentHTML('afterbegin',svg(e.dataset.ic));e.dataset.done=1}});
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rp=n=>'Rp'+Number(n).toLocaleString('id-ID');

/* ---------- Supabase ---------- */
const CFG=window.REUSE_CONFIG||{};
const configured=!!(window.supabase&&CFG.SUPABASE_URL&&CFG.SUPABASE_ANON_KEY&&!/YOUR-/.test(CFG.SUPABASE_URL+CFG.SUPABASE_ANON_KEY));
const sb=configured?window.supabase.createClient(CFG.SUPABASE_URL,CFG.SUPABASE_ANON_KEY):null;
const PWMODE=CFG.AUTH_MODE==='password';
const OTPN=+CFG.OTP_LENGTH||6;
const BUCKET='item-photos';
const ITEM_SEL='*, profiles(name)';
const CONV_SEL='*, items(id,title,photos,mode,price,wish,cod,campus), buyer:profiles!conversations_buyer_id_fkey(name), seller:profiles!conversations_seller_id_fkey(name)';
function errMsg(e){const m=String(e?.message||e||'');
  if(/rate limit|too many|security purposes/i.test(m))return 'Terlalu sering meminta kode. Tunggu sebentar lalu coba lagi.';
  if(/expired|invalid.*(otp|token)|token.*(expired|invalid)/i.test(m))return 'Kode salah atau sudah kedaluwarsa.';
  if(/failed to fetch|network/i.test(m))return 'Tidak bisa terhubung ke server. Cek koneksi internet.';
  if(/row-level security/i.test(m))return 'Ditolak oleh server (aturan keamanan). Pastikan email .ac.id dan kampus sudah dipilih.';
  return m||'Terjadi kesalahan.';}

/* ---------- Data statis ---------- */
const CAMPUS=[
 {id:'unpad',n:'Universitas Padjadjaran',s:'Unpad',loc:'Jatinangor',dom:'unpad.ac.id',cod:['Gerbang Lama','Masjid Raya Unpad','Bale Santika','Halte Bus Kampus'],area:['Sayang','Ciseke','Caringin','Hegarmanah','Cikuda']},
 {id:'itb',n:'Institut Teknologi Bandung',s:'ITB',loc:'Ganesha, Bandung',dom:'itb.ac.id',cod:['Gerbang Depan ITB','Masjid Salman','Perpustakaan Pusat','Sunken Court'],area:['Cisitu','Tubagus Ismail','Sekeloa','Dago','Plesiran']},
 {id:'ui',n:'Universitas Indonesia',s:'UI',loc:'Depok',dom:'ui.ac.id',cod:['Stasiun UI','Masjid UI','Perpustakaan UI','Halte Bikun FIB'],area:['Kukusan','Kukusan Teknik','Pondok Cina','Margonda','Beji']},
 {id:'ugm',n:'Universitas Gadjah Mada',s:'UGM',loc:'Yogyakarta',dom:'ugm.ac.id',cod:['Bundaran UGM','Masjid Kampus UGM','Perpustakaan Pusat','Lembah UGM'],area:['Pogung','Karangmalang','Sendowo','Klebengan','Condongcatur']},
 {id:'ipb',n:'IPB University',s:'IPB',loc:'Dramaga, Bogor',dom:'ipb.ac.id',cod:['Gerbang Dramaga','Masjid Al-Hurriyyah','Perpustakaan LSI','Gymnasium'],area:['Babakan Raya','Babakan Tengah','Bara','Cibanteng','Perwira']},
 {id:'tel',n:'Telkom University',s:'Tel-U',loc:'Bandung',dom:'telkomuniversity.ac.id',cod:['Gerbang Utama','Masjid Syamsul Ulum','Open Library','Danau Tel-U'],area:['Sukapura','Sukabirus','PGA','Bojongsoang','Ciganitri']}
];
const PINPOS=[[22,30],[70,26],[34,74],[78,70]];
const CATS=['Buku & Modul','Elektronik','Pakaian','Perabot Kos','Alat Tulis','Lainnya'];
const MODES=['Semua','Sell','Swap','Donate'];
const SEED=[
 {t:'Buku Pengantar Ekonomi Mankiw',k:'Buku & Modul',c:'Baik',m:'Sell',p:45000,cod:0,by:'Rani A.',d:'Edisi 7 bahasa Indonesia. Ada stabilo di bab 1–3, sisanya bersih.',img:['img/mankiw-pengantar-ekonomi.jpg']},
 {t:'Meja Lipat Laptop',k:'Perabot Kos',c:'Seperti baru',m:'Swap',w:'Rak buku kecil / kipas angin',cod:1,by:'Dimas P.',d:'Dipakai 1 semester, kaki masih kokoh.',img:['img/folding-laptop-table.jpg']},
 {t:'Kemeja PMB Putih (M)',k:'Pakaian',c:'Baik',m:'Donate',cod:2,by:'Salsa N.',d:'Buat maba yang butuh kemeja putih untuk PMB. Sudah dicuci & disetrika.',img:['img/white-shirt-pmb.jpg']},
 {t:'Charger Laptop 65W USB-C',k:'Elektronik',c:'Layak pakai',m:'Sell',p:120000,cod:3,by:'Fajar H.',d:'Original, kabel ada sedikit lecet tapi normal.',img:['img/usb-c-laptop-charger-65w.jpg']},
 {t:'Kalkulator Casio fx-991ID',k:'Alat Tulis',c:'Baik',m:'Swap',w:'Buku Statistika Dasar',cod:0,by:'Nadia K.',d:'Semua tombol berfungsi, baterai baru diganti.',img:['img/casio-fx-991id-calculator.jpg']}
];

/* ---------- State ---------- */
const fresh=()=>({onb:0,email:'',uid:null,me:null,filter:{campus:null,area:'',mode:'Semua'},cache:{},q:'',cat:'Semua'});
let S=fresh();
const campusOf=id=>CAMPUS.find(c=>c.id===id)||CAMPUS[0];
const myCampus=()=>campusOf(S.me?.campus);
const mapItem=r=>({id:r.id,owner:r.owner,t:r.title,k:r.category,c:r.condition,m:r.mode,p:r.price,w:r.wish,cod:r.cod,area:r.area,d:r.description,
  img:r.photos||[],by:r.profiles?.name||'Mahasiswa',campus:r.campus,ts:Date.parse(r.created_at),mine:r.owner===S.uid});
const cacheIt=i=>(S.cache[i.id]=i);
const seedFor=cid=>SEED.map((x,i)=>cacheIt({...x,id:'sample-'+cid+'-'+i,campus:cid,ts:Date.now()-(i+1)*3600e3*(i+2),sample:true}));

async function fetchItems({campus,area,mode,cat,q}){
  let qb=sb.from('items').select(ITEM_SEL).eq('campus',campus).order('created_at',{ascending:false}).limit(60);
  if(area)qb=qb.eq('area',area);
  if(mode&&mode!=='Semua')qb=qb.eq('mode',mode);
  if(cat&&cat!=='Semua')qb=qb.eq('category',cat);
  const k=(q||'').replace(/[%,()*"\\]/g,' ').trim();
  if(k)qb=qb.or(`title.ilike."%${k}%",description.ilike."%${k}%"`);
  const {data,error}=await qb;if(error)throw error;
  return data.map(mapItem).map(cacheIt);
}

/* ---------- Navigasi ---------- */
let cur='onb',curConv=null;
function go(id,opts={}){
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on',s.id===id));
  cur=id;window.scrollTo(0,0);if(id!=='chat')curConv=null;
  $('#nav').hidden=!['home','search','chats','profile'].includes(id);
  document.querySelectorAll('#nav [data-tab]').forEach(b=>b.classList.toggle('on',b.dataset.tab===id));
  ({onb:renderOnb,otp:startOtp,campus:renderCampus,home:renderHome,search:renderSearch,chats:renderChats,chat:()=>renderChat(opts.id),
    post:resetPost,profile:renderProfile,detail:()=>renderDetail(opts.id)}[id]||(()=>{}))();
}
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');if(g){e.preventDefault();go(g.dataset.go)}
  const t=e.target.closest('[data-tab]');if(t)go(t.dataset.tab);
  const l=e.target.closest('[data-lock]');if(l)e.preventDefault();
});

let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2400)}
function modal(html){$('#modal').innerHTML=html;hydrate($('#modal'));$('#scrim').classList.add('on')}
const closeModal=()=>$('#scrim').classList.remove('on');
$('#scrim').addEventListener('click',e=>{if(e.target.id==='scrim'||e.target.closest('[data-close]'))closeModal()});

function scope(){
  const ck=(ok,b,s)=>`<div><span class="ck ${ok?'':'no'}">${svg(ok?'check':'lock')}</span><span><b>${b}</b><br><small>${s}</small></span></div>`;
  modal(`<div class="mi" data-ic="flag"></div><h2>Sprint 2 · 14–21 Nov 2026 · 19 SP</h2>
  <p>Sprint goal: seeker bisa menemukan barang di kampusnya dan menghubungi owner.</p>
  <div class="scope">
  ${ck(1,'PBI-05 · Home: listing terbaru per kampus','8 SP · Fikriyyah')}
  ${ck(1,'PBI-06 · Search kata kunci + chip kategori','5 SP · Safira')}
  ${ck(1,'PBI-07 · Campus filter: kampus, area kos, mode','3 SP · Safira')}
  ${ck(1,'PBI-08 · Chat realtime + 3 template pesan','8 SP · Anassya')}
  ${ck(0,'Revisi UI dari usability test (laporan M2)','Masuk setelah 21 Nov')}
  ${ck(0,'Favorit, bagikan, edit profil','Sprint berikutnya')}
  </div><button class="btn" data-close>Tutup</button>`);
}
$('#scopeBtn').onclick=scope;$('#scopeBtn2').onclick=scope;

/* ---------- Onboarding ---------- */
function renderOnb(){$('#onb').scrollTop=0}
$('#lpSearch').onsubmit=e=>{e.preventDefault();const q=$('#lpQ').value.trim();if(q)S.q=q;go('email');if(q)toast('Masuk dulu untuk mencari “'+q+'”')};

/* ---------- PBI-01 · Email + OTP (Supabase Auth) ---------- */
const EMRE=/^[^\s@]+@([a-z0-9-]+\.)*[a-z0-9-]+\.ac\.id$/i;
if(PWMODE){$('#pwI').hidden=false;$('#emailP').textContent='Gunakan email kampus berakhiran .ac.id. Akun baru otomatis dibuat saat pertama masuk.';$('#emailB').textContent='Masuk / daftar'}
$('#emailF').onsubmit=async e=>{e.preventDefault();const v=$('#emailI').value.trim().toLowerCase(),E=$('#emailE'),B=$('#emailB');
  if(!v){E.textContent='Email wajib diisi.';return}
  if(!EMRE.test(v)){E.textContent='Gunakan email kampus yang berakhiran .ac.id.';return}
  E.textContent='';S.email=v;const label=B.textContent;B.disabled=true;B.textContent=PWMODE?'Memproses…':'Mengirim kode…';
  try{
    if(PWMODE){const pw=$('#pwI').value;if(pw.length<6){E.textContent='Password minimal 6 karakter.';return}
      let r=await sb.auth.signInWithPassword({email:v,password:pw});
      if(r.error&&/invalid login/i.test(r.error.message)){
        r=await sb.auth.signUp({email:v,password:pw});
        if(r.error)throw r.error;
        if(!r.data.session){E.textContent=r.data.user?.identities?.length===0?'Password salah.':'Akun dibuat. Matikan "Confirm email" di Supabase atau cek email untuk konfirmasi.';return}
      }else if(r.error)throw r.error;
      await afterLogin(r.data.user);
    }else{
      const {error}=await sb.auth.signInWithOtp({email:v,options:{shouldCreateUser:true}});
      if(error)throw error;go('otp');
    }
  }catch(err){E.textContent=errMsg(err)}
  finally{B.disabled=false;B.textContent=label}};
$('#emailI').oninput=()=>$('#emailE').textContent='';

let rt,cd=0,tries=0;
const box=$('#otpBox');box.innerHTML=Array.from({length:OTPN},(_,i)=>`<input inputmode="numeric" maxlength="${OTPN}" aria-label="Digit ${i+1}">`).join('');
const ins=[...box.children];
const otpVal=()=>ins.map(i=>i.value).join('');
ins.forEach((inp,i)=>{
  inp.addEventListener('input',()=>{const d=inp.value.replace(/\D/g,'');
    if(d.length>1){d.slice(0,OTPN).split('').forEach((c,j)=>{if(ins[i+j])ins[i+j].value=c});ins[Math.min(i+d.length,OTPN)-1].focus()}
    else{inp.value=d;if(d&&ins[i+1])ins[i+1].focus()}
    $('#otpE').textContent='';$('#otpB').disabled=otpVal().length!==OTPN;});
  inp.addEventListener('keydown',e=>{if(e.key==='Backspace'&&!inp.value&&ins[i-1])ins[i-1].focus()});
});
function tick(){const b=$('#resend');if(cd>0){b.disabled=true;b.textContent=`Kirim ulang (${cd--}s)`}else{b.disabled=false;b.textContent='Kirim ulang';clearInterval(rt)}}
function cooldown(){cd=60;tick();clearInterval(rt);rt=setInterval(tick,1000)}
function startOtp(){$('#otpTo').textContent=S.email;$('#otpP').textContent=`${OTPN} digit kode dikirim ke email kampusmu. Cek juga folder spam.`;
  ins.forEach(i=>i.value='');$('#otpB').disabled=true;$('#otpE').textContent='';tries=0;cooldown();setTimeout(()=>ins[0].focus(),50)}
$('#resend').onclick=async()=>{ins.forEach(i=>i.value='');$('#otpB').disabled=true;
  const {error}=await sb.auth.signInWithOtp({email:S.email,options:{shouldCreateUser:true}});
  if(error){$('#otpE').textContent=errMsg(error);return}tries=0;cooldown();toast('Kode baru dikirim ke '+S.email)};
$('#otpF').onsubmit=async e=>{e.preventDefault();const B=$('#otpB');B.disabled=true;B.textContent='Memverifikasi…';
  const {data,error}=await sb.auth.verifyOtp({email:S.email,token:otpVal(),type:'email'});
  B.textContent='Verifikasi';
  if(error){tries++;$('#otpE').textContent=tries>=3?'Terlalu banyak percobaan. Minta kode baru.':errMsg(error);
    if(tries>=3){cd=0;tick()}ins.forEach(i=>i.value='');ins[0].focus();return}
  clearInterval(rt);await afterLogin(data.user);};

async function afterLogin(user){
  S.uid=user.id;S.email=user.email;
  const {data:prof,error}=await sb.from('profiles').select('*').eq('id',user.id).maybeSingle();
  if(error){toast(errMsg(error))}
  if(prof?.campus){S.me=prof;S.filter.campus=prof.campus;startRealtime();go(S.q?'search':'home')}
  else go('campus');
}

/* ---------- Pilih kampus → simpan profil ---------- */
function renderCampus(){const dom=S.email.split('@')[1]||'';
  const sug=CAMPUS.find(c=>dom.endsWith(c.dom));
  $('#campL').innerHTML=CAMPUS.map(c=>`<label><input type="radio" name="camp" value="${c.id}" ${(S.me?.campus||sug?.id)===c.id?'checked':''}><span class="ini">${c.s}</span><span><b>${c.n}</b><span>${c.loc}</span></span>${sug?.id===c.id?'<em class="sug" style="font-style:normal">Sesuai email</em>':''}</label>`).join('');
  $('#campE').textContent='';}
$('#campL').addEventListener('change',()=>$('#campE').textContent='');
$('#campB').onclick=async()=>{const v=document.querySelector('input[name=camp]:checked');
  if(!v){$('#campE').textContent='Pilih satu kampus dulu.';return}
  const local=S.email.split('@')[0].split(/[._\d-]/).filter(Boolean)[0]||'mahasiswa';
  const name=S.me?.name||local[0].toUpperCase()+local.slice(1);
  const B=$('#campB');B.disabled=true;
  const {data,error}=await sb.from('profiles').upsert({id:S.uid,email:S.email,name,campus:v.value}).select().single();
  B.disabled=false;
  if(error){$('#campE').textContent=errMsg(error);return}
  S.me=data;S.filter={campus:data.campus,area:'',mode:'Semua'};startRealtime();
  toast('Akun terverifikasi · '+myCampus().s);go(S.q?'search':'home');};

/* ---------- PBI-05 · Beranda: listing terbaru per kampus ---------- */
const priceTxt=i=>i.m==='Sell'?rp(i.p):i.m==='Swap'?'Tukar':'Gratis';
function ago(ts){const m=Math.max(1,Math.round((Date.now()-ts)/6e4));return m<60?m+' mnt':m<1440?Math.round(m/60)+' jam':Math.round(m/1440)+' hari'}
const skel=n=>Array.from({length:n},()=>'<div class="skel"></div>').join('');
function cardHTML(i){const c=campusOf(i.campus);
  return `<button class="card" data-id="${i.id}"><div class="thumb"><img src="${esc(i.img[0])}" alt="" loading="lazy"><span class="mtag m-${i.m}">${i.m}</span>${i.sample?'<span class="smp">Contoh</span>':''}</div>
   <div class="ci"><b>${esc(i.t)}</b><div class="pr">${priceTxt(i)}</div><div class="meta">${svg('pin')}${esc(i.area?i.area+' · '+c.cod[i.cod]:c.cod[i.cod])}</div>
   <div class="meta"><span class="vb">${VB}</span>${esc(i.by)}${i.mine?' (kamu)':''} · ${ago(i.ts)}</div></div></button>`;}
let homeTok=0;
async function renderHome(){const f=S.filter,c=campusOf(f.campus),mine=f.campus===S.me.campus;
  $('#hCamp').textContent=c.s+' · '+c.loc;$('#hHi').textContent='Halo, '+S.me.name+'!';
  $('#chips').innerHTML=MODES.map(m=>`<button class="chip ${f.mode===m?'on':''}" data-f="${m}">${m}</button>`).join('');
  const tags=[!mine&&`Kampus: ${c.s}`,f.area&&`Area: ${f.area}`].filter(Boolean);
  $('#fSum').innerHTML=tags.length?tags.map(t=>`<span>${esc(t)}</span>`).join('')+'<button id="fClr">Hapus filter</button>':'';
  $('#fDot').hidden=!tags.length;
  const g=$('#grid');g.innerHTML=skel(4);const tok=++homeTok;
  let list;try{list=await fetchItems(f)}catch(e){if(tok===homeTok)g.innerHTML=`<div class="empty">Gagal memuat barang.<br>${esc(errMsg(e))}</div>`;return}
  if(tok!==homeTok)return;
  if(list.length){g.innerHTML=list.map(cardHTML).join('');return}
  const label=f.mode==='Semua'?'':' '+f.mode;
  g.innerHTML=`<div class="empty">Belum ada barang${esc(label)} di ${esc(c.s)}${f.area?' area '+esc(f.area):''}.${mine?'<br>Jadilah yang pertama posting lewat tombol +.':''}</div>`
    +(f.area?'':`<div class="empty" style="padding:0 0 4px;font-size:11.5px">Contoh tampilan barang:</div>`+seedFor(f.campus).filter(i=>f.mode==='Semua'||i.m===f.mode).map(cardHTML).join(''));
}
$('#chips').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(b){S.filter.mode=b.dataset.f;renderHome()}});
$('#fSum').addEventListener('click',e=>{if(e.target.id==='fClr'){S.filter={campus:S.me.campus,area:'',mode:S.filter.mode};renderHome()}});
let prev={s:'home',o:{}};
function openDetail(id){prev={s:cur,o:cur==='chat'?{id:curConv}:{}};go('detail',{id})}
['#grid','#sGrid'].forEach(s=>$(s).addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b)openDetail(b.dataset.id)}));

/* ---------- PBI-07 · Filter: kampus, area kos, mode ---------- */
$('#filterBtn').onclick=()=>{let m=S.filter.mode;
  const areaOpts=cid=>'<option value="">Semua area</option>'+campusOf(cid).area.map(a=>`<option ${S.filter.area===a&&S.filter.campus===cid?'selected':''}>${esc(a)}</option>`).join('');
  modal(`<div class="fsheet"><h2>Filter barang</h2>
   <label class="lbl" for="fC">Kampus</label><select class="field" id="fC">${CAMPUS.map(c=>`<option value="${c.id}" ${c.id===S.filter.campus?'selected':''}>${esc(c.n)}${c.id===S.me.campus?' (kampusmu)':''}</option>`).join('')}</select>
   <label class="lbl" for="fA">Area kos</label><select class="field" id="fA">${areaOpts(S.filter.campus)}</select>
   <span class="lbl">Mode</span><div class="chips" id="fM"></div>
   <div class="row2"><button class="btn ghost" id="fReset">Reset</button><button class="btn" id="fApply">Terapkan</button></div></div>`);
  const drawM=()=>$('#fM').innerHTML=MODES.map(x=>`<button type="button" class="chip ${m===x?'on':''}" data-m="${x}">${x}</button>`).join('');drawM();
  $('#fM').onclick=e=>{const b=e.target.closest('[data-m]');if(b){m=b.dataset.m;drawM()}};
  $('#fC').onchange=()=>$('#fA').innerHTML=areaOpts($('#fC').value);
  $('#fReset').onclick=()=>{S.filter={campus:S.me.campus,area:'',mode:'Semua'};closeModal();renderHome()};
  $('#fApply').onclick=()=>{S.filter={campus:$('#fC').value,area:$('#fA').value,mode:m};closeModal();renderHome()};
};

/* ---------- PBI-06 · Search kata kunci + chip kategori ---------- */
let sTok=0,sT;
function renderSearch(){const c=campusOf(S.filter.campus);
  $('#sCamp').textContent=`Mencari di ${c.s} · ${c.loc}`+(S.filter.campus!==S.me.campus?' (dari filter beranda)':'');
  $('#sCats').innerHTML=['Semua',...CATS].map(k=>`<button class="chip ${S.cat===k?'on':''}" data-k="${esc(k)}">${esc(k)}</button>`).join('');
  $('#sQ').value=S.q;runSearch();}
async function runSearch(){const g=$('#sGrid');g.innerHTML=skel(4);const tok=++sTok;
  let list;try{list=await fetchItems({campus:S.filter.campus,cat:S.cat,q:S.q})}catch(e){if(tok===sTok)g.innerHTML=`<div class="empty">${esc(errMsg(e))}</div>`;return}
  if(tok!==sTok)return;
  g.innerHTML=list.length?`<div class="empty" style="padding:0;text-align:left;font-size:12px">${list.length} barang ditemukan</div>`+list.map(cardHTML).join('')
    :`<div class="empty">Tidak ada barang${S.q?` untuk “${esc(S.q)}”`:''}${S.cat!=='Semua'?` di kategori ${esc(S.cat)}`:''}.<br>Coba kata kunci lain.</div>`;}
$('#sQ').addEventListener('input',()=>{S.q=$('#sQ').value.trim();clearTimeout(sT);sT=setTimeout(runSearch,300)});
$('#sF').onsubmit=e=>{e.preventDefault();clearTimeout(sT);S.q=$('#sQ').value.trim();$('#sQ').blur();runSearch()};
$('#sCats').onclick=e=>{const b=e.target.closest('[data-k]');if(!b)return;S.cat=b.dataset.k;
  document.querySelectorAll('#sCats .chip').forEach(x=>x.classList.toggle('on',x===b));runSearch()};

/* ---------- PBI-02 · Posting → Supabase (Storage + tabel items) ---------- */
let P;
function resetPost(){P={photos:[],mode:null,cod:null,busy:false};['pT','pK','pC','pP','pW','pD'].forEach(id=>$('#'+id).value='');
  $('#pA').innerHTML='<option value="">Pilih area kos</option>'+myCampus().area.map(a=>`<option>${esc(a)}</option>`).join('');
  $('#postB').disabled=false;$('#postB').textContent='Posting barang';
  document.querySelectorAll('#postF .err').forEach(e=>e.textContent='');renderPhotos();renderMode();renderCod();}
function renderPhotos(){$('#phC').textContent=`(${P.photos.length}/5 · minimal 1)`;
  $('#phL').innerHTML=P.photos.map((s,i)=>`<div class="ph"><img src="${s.url}" alt=""><button type="button" class="x" data-rm="${i}">${svg('x')}</button>${i===0?'<span class="cv">Sampul</span>':''}</div>`).join('')
   +(P.photos.length<5?`<button type="button" class="addph" id="addPh">${svg('camera')}Tambah</button>`:'');}
$('#phL').addEventListener('click',e=>{const r=e.target.closest('[data-rm]');if(r){URL.revokeObjectURL(P.photos[+r.dataset.rm].url);P.photos.splice(+r.dataset.rm,1);renderPhotos();return}
  if(e.target.closest('#addPh'))$('#phI').click();});
function shrink(file){return new Promise((res,rej)=>{const u=URL.createObjectURL(file);const im=new Image();im.onerror=()=>{URL.revokeObjectURL(u);rej()};im.onload=()=>{
  const k=Math.min(1,800/Math.max(im.width,im.height));const cv=document.createElement('canvas');cv.width=Math.round(im.width*k);cv.height=Math.round(im.height*k);
  cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);URL.revokeObjectURL(u);
  cv.toBlob(b=>b?res({blob:b,url:URL.createObjectURL(b)}):rej(),'image/jpeg',.8)};im.src=u})}
$('#phI').onchange=async e=>{const files=[...e.target.files].filter(f=>f.type.startsWith('image/'));e.target.value='';
  const room=5-P.photos.length;if(files.length>room)toast('Maksimal 5 foto');
  for(const f of files.slice(0,room)){if(f.size>10*1024*1024){toast(f.name+' lebih dari 10 MB');continue}
    try{P.photos.push(await shrink(f))}catch(_){toast('Gagal membaca '+f.name)}}
  $('#e-photos').textContent='';renderPhotos();};
function renderMode(){document.querySelectorAll('#seg button').forEach(b=>b.classList.toggle('on',b.dataset.m===P.mode));
  ['Sell','Swap','Donate'].forEach(m=>$('#m'+m).hidden=P.mode!==m);}
$('#seg').onclick=e=>{const b=e.target.closest('[data-m]');if(!b)return;P.mode=b.dataset.m;$('#e-mode').textContent='';renderMode()};
$('#pP').oninput=e=>{const n=e.target.value.replace(/\D/g,'').slice(0,9);e.target.value=n?Number(n).toLocaleString('id-ID'):''};
function renderCod(){const c=myCampus();
  $('#map').innerHTML=`<svg class="bg" viewBox="0 0 100 60" preserveAspectRatio="none"><path d="M0 40 C25 34 40 48 60 38 S90 30 100 34" stroke="#fff" stroke-width="3.5" fill="none"/><path d="M48 0 C46 20 54 40 50 60" stroke="#fff" stroke-width="2.5" fill="none"/><rect x="8" y="6" width="22" height="12" rx="2" fill="#DCE8D4"/><rect x="62" y="44" width="26" height="12" rx="2" fill="#DCE8D4"/><circle cx="84" cy="12" r="7" fill="#CFE0C5"/></svg>`
   +c.cod.map((n,i)=>`<button type="button" class="pin ${P.cod===i?'on':''}" style="left:${PINPOS[i][0]}%;top:${PINPOS[i][1]+14}%" data-cod="${i}"><span class="dot">${svg('pin')}</span><small>${esc(n)}</small></button>`).join('');
  $('#cods').innerHTML=c.cod.map((n,i)=>`<label><input type="radio" name="cod" value="${i}" ${P.cod===i?'checked':''}><span><b style="font-weight:500">${esc(n)}</b><span>${c.s} · area kampus</span></span></label>`).join('');}
const pickCod=i=>{P.cod=i;$('#e-cod').textContent='';renderCod()};
$('#map').onclick=e=>{const p=e.target.closest('[data-cod]');if(p)pickCod(+p.dataset.cod)};
$('#cods').onchange=e=>pickCod(+e.target.value);
['pT','pK','pC','pP','pW'].forEach(id=>$('#'+id).addEventListener('input',()=>{const m={pT:'title',pK:'cat',pC:'cond',pP:'price',pW:'wish'}[id];$('#e-'+m).textContent=''}));
$('#postX').onclick=()=>{if(P.busy)return;const dirty=P.photos.length||$('#pT').value.trim();
  if(dirty){modal(`<h2>Batalkan posting?</h2><p>Foto dan isian yang sudah kamu buat akan hilang.</p><div class="row2"><button class="btn ghost" data-close>Lanjut isi</button><button class="btn" id="disc">Buang</button></div>`);$('#disc').onclick=()=>{closeModal();go('home')}}
  else go('home');};
const pathFromUrl=u=>{const k='/'+BUCKET+'/';const i=u.indexOf(k);return i<0?null:decodeURIComponent(u.slice(i+k.length))};
$('#postF').onsubmit=async e=>{e.preventDefault();if(P.busy)return;const er={};
  const t=$('#pT').value.trim(),k=$('#pK').value,c=$('#pC').value,price=+$('#pP').value.replace(/\D/g,''),w=$('#pW').value.trim();
  if(!P.photos.length)er.photos='Tambahkan minimal 1 foto barang.';
  if(t.length<3)er.title='Nama barang minimal 3 karakter.';
  if(!k)er.cat='Pilih kategori.';if(!c)er.cond='Pilih kondisi.';
  if(!P.mode)er.mode='Pilih mode Sell, Swap, atau Donate.';
  if(P.mode==='Sell'&&!(price>=1000))er.price='Isi harga minimal Rp1.000.';
  if(P.mode==='Swap'&&w.length<3)er.wish='Tulis barang yang ingin kamu dapatkan.';
  if(P.cod===null)er.cod='Pilih satu titik COD.';
  ['photos','title','cat','cond','mode','price','wish','cod'].forEach(f=>$('#e-'+f).textContent=er[f]||'');
  const first=Object.keys(er)[0];if(first){$('#e-'+first).scrollIntoView({block:'center',behavior:'smooth'});return}
  const B=$('#postB');P.busy=true;B.disabled=true;const uploaded=[];
  try{
    for(const [n,ph] of P.photos.entries()){B.textContent=`Mengunggah foto ${n+1}/${P.photos.length}…`;
      const path=`${S.uid}/${Date.now()}-${n}.jpg`;
      const {error}=await sb.storage.from(BUCKET).upload(path,ph.blob,{contentType:'image/jpeg'});if(error)throw error;
      uploaded.push(path);}
    B.textContent='Menyimpan…';
    const {data,error}=await sb.from('items').insert({owner:S.uid,campus:S.me.campus,title:t,category:k,condition:c,mode:P.mode,
      price:P.mode==='Sell'?price:null,wish:P.mode==='Swap'?w:null,cod:P.cod,area:$('#pA').value||null,description:$('#pD').value.trim()||null,
      photos:uploaded.map(p=>sb.storage.from(BUCKET).getPublicUrl(p).data.publicUrl)}).select(ITEM_SEL).single();
    if(error)throw error;
    const it=cacheIt(mapItem(data));P.busy=false;toast('Barang berhasil diposting');prev={s:'home',o:{}};go('detail',{id:it.id});
  }catch(err){
    if(uploaded.length)sb.storage.from(BUCKET).remove(uploaded);
    P.busy=false;B.disabled=false;B.textContent='Posting barang';toast('Gagal posting: '+errMsg(err));
  }};

/* ---------- PBI-04 · Detail ---------- */
async function renderDetail(id){const el=$('#detail');
  let i=S.cache[id];
  if(!i){el.innerHTML=`<div class="body"><div class="skel" style="aspect-ratio:1"></div></div>`;
    const {data}=await sb.from('items').select(ITEM_SEL).eq('id',id).maybeSingle();
    if(!data){toast('Barang tidak ditemukan');go('home');return}i=cacheIt(mapItem(data));}
  const c=campusOf(i.campus);
  el.innerHTML=`<div class="gal"><div class="track" id="trk">${i.img.map(s=>`<img src="${esc(s)}" alt="">`).join('')}</div>
   <div class="tb"><button id="dBack" aria-label="Kembali">${svg('left')}</button><span style="display:flex;gap:8px"><button data-lock="Bagikan barang">${svg('share')}</button><button data-lock="Simpan ke favorit">${svg('heart')}</button></span></div>
   <span class="cnt" id="cnt">1/${i.img.length}</span></div>
  <div class="dbody">
   <div class="dtags"><span class="mtag m-${i.m}">${i.m}</span><span>${esc(i.k)}</span><span>${esc(i.c)}</span>${i.area?`<span>Area ${esc(i.area)}</span>`:''}${i.sample?'<span>Contoh</span>':''}</div>
   <h1>${esc(i.t)}</h1>
   <div class="dpr">${i.m==='Sell'?rp(i.p):i.m==='Swap'?'Tukar barang':'Gratis'}</div>
   ${i.m==='Swap'?`<div style="font-size:13px;color:var(--mut);margin-top:2px">Ingin ditukar dengan: <b style="color:var(--swap)">${esc(i.w)}</b></div>`:''}
   <div style="font-size:11.5px;color:var(--mut);margin-top:6px">Diposting ${ago(i.ts)} lalu</div>
   <div class="box"><div class="seller"><div class="av">${esc(i.by[0])}</div><div><b>${esc(i.by)}${i.mine?' (kamu)':''} <span class="vb">${VB}</span></b><small>${c.s}</small></div></div>
    <div class="verif">${VB}<span><b>Mahasiswa terverifikasi</b><br>Email kampus @${esc(c.dom)} sudah dikonfirmasi lewat OTP.</span></div></div>
   <div class="box"><h3>Titik COD</h3><div class="codrow"><div class="ic">${svg('pin')}</div><div><b>${esc(c.cod[i.cod])}</b><span>${c.n} · ${c.loc}</span></div></div></div>
   ${i.d?`<div class="box"><h3>Deskripsi</h3><p>${esc(i.d)}</p></div>`:''}
  </div>
  <div class="dfoot">${i.sample?`<button class="btn" disabled>Barang contoh · tidak bisa chat</button>`
    :i.mine?`<button class="btn ghost sq" id="dDel" aria-label="Hapus barang">${svg('trash')}</button><button class="btn" data-tab="chats">${svg('chat')}Lihat chat masuk</button>`
    :`<button class="btn" id="dChat">${svg('chat')}Chat pemilik</button>`}</div>`;
  $('#dBack').onclick=()=>go(prev.s,prev.o);
  if($('#dChat'))$('#dChat').onclick=()=>openChatFor(i);
  if($('#dDel'))$('#dDel').onclick=()=>{modal(`<h2>Hapus barang ini?</h2><p>“${esc(i.t)}” akan hilang dari beranda semua orang, termasuk chat terkait.</p><div class="row2"><button class="btn ghost" data-close>Batal</button><button class="btn" id="delOk" style="background:#B3261E">Hapus</button></div>`);
    $('#delOk').onclick=async()=>{$('#delOk').disabled=true;const {error}=await sb.from('items').delete().eq('id',i.id);
      if(error){toast(errMsg(error));$('#delOk').disabled=false;return}
      const paths=i.img.map(pathFromUrl).filter(Boolean);if(paths.length)sb.storage.from(BUCKET).remove(paths);
      delete S.cache[i.id];closeModal();toast('Barang dihapus');go('home')}};
  const trk=$('#trk');trk.onscroll=()=>{$('#cnt').textContent=(Math.round(trk.scrollLeft/trk.clientWidth)+1)+'/'+i.img.length};}

/* ---------- PBI-08 · Chat realtime + 3 template pesan ---------- */
async function openChatFor(i){const B=$('#dChat');if(B)B.disabled=true;
  try{
    let {data,error}=await sb.from('conversations').select('id').eq('item_id',i.id).eq('buyer_id',S.uid).maybeSingle();
    if(error)throw error;
    if(!data){const r=await sb.from('conversations').insert({item_id:i.id,buyer_id:S.uid,seller_id:i.owner}).select('id').single();
      if(r.error&&r.error.code==='23505')({data}=await sb.from('conversations').select('id').eq('item_id',i.id).eq('buyer_id',S.uid).single());
      else if(r.error)throw r.error;else data=r.data;}
    go('chat',{id:data.id});
  }catch(e){toast(errMsg(e));if(B)B.disabled=false}}
const hm=ts=>new Date(ts).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
const dayTxt=ts=>{const d=new Date(ts),t=new Date();const y=new Date(t);y.setDate(t.getDate()-1);
  return d.toDateString()===t.toDateString()?'Hari ini':d.toDateString()===y.toDateString()?'Kemarin':d.toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'})};
const otherName=cv=>cv.buyer_id===S.uid?cv.seller?.name:cv.buyer?.name;

async function renderChats(){$('#nDot').hidden=true;const L=$('#cList');
  if(!L.children.length)L.innerHTML=`<div class="empty">Memuat chat…</div>`;
  const {data,error}=await sb.from('conversations').select(CONV_SEL).order('last_message_at',{ascending:false});
  if(cur!=='chats')return;
  if(error){L.innerHTML=`<div class="empty">${esc(errMsg(error))}</div>`;return}
  L.innerHTML=data.length?data.map(cv=>`<button class="crow-i" data-cv="${cv.id}"><img src="${esc(cv.items?.photos?.[0]||'')}" alt="">
    <div class="tx"><b>${esc(otherName(cv)||'Mahasiswa')}</b><small>${cv.seller_id===S.uid?'Barangmu · ':''}${esc(cv.items?.title||'Barang dihapus')}</small>
    <p>${cv.last_message?(cv.last_sender===S.uid?'Kamu: ':'')+esc(cv.last_message):'Belum ada pesan'}</p></div><time>${ago(Date.parse(cv.last_message_at))}</time></button>`).join('')
   :`<div class="empty">Belum ada chat.<br>Buka barang di beranda lalu ketuk <b>Chat pemilik</b>.</div>`;}
$('#cList').onclick=e=>{const b=e.target.closest('[data-cv]');if(b)go('chat',{id:b.dataset.cv})};

let seenMsg=new Set(),lastDay='';
function appendMsg(m,pending){if(m.id&&seenMsg.has(m.id))return;if(m.id)seenMsg.add(m.id);
  const M=$('#msgs');M.querySelector('.chempty')?.remove();
  const d=dayTxt(m.created_at);if(d!==lastDay){lastDay=d;M.insertAdjacentHTML('beforeend',`<div class="mday">${d}</div>`)}
  M.insertAdjacentHTML('beforeend',`<div class="msg ${m.sender===S.uid?'me':''} ${pending?'pending':''}" ${m.id?`data-mid="${m.id}"`:''}>${esc(m.body)}<time>${hm(m.created_at)}</time></div>`);
  M.scrollTop=M.scrollHeight;}
function templates(cv){const it=cv.items||{},c=campusOf(it.campus),cod=c.cod[it.cod]||'titik COD';
  if(cv.seller_id===S.uid)return['Masih ada, kak!',`Bisa ketemu di ${cod} ya.`,'Kapan kamu bisa COD?'];
  return[`Halo, ${it.title||'barang ini'} masih ada?`,`Bisa COD di ${cod}?`,
    it.mode==='Sell'?'Harganya masih bisa nego?':it.mode==='Swap'?`Aku punya barang buat ditukar, boleh kirim fotonya?`:'Boleh aku ambil barangnya?'];}
async function renderChat(id){curConv=id;seenMsg=new Set();lastDay='';
  $('#msgs').innerHTML='<div class="chempty">Memuat pesan…</div>';$('#chHead').innerHTML='';$('#tpls').innerHTML='';$('#chI').value='';
  const [{data:cv,error},{data:msgs}]=await Promise.all([
    sb.from('conversations').select(CONV_SEL).eq('id',id).single(),
    sb.from('messages').select('*').eq('conversation_id',id).order('created_at',{ascending:true}).limit(500)]);
  if(curConv!==id)return;
  if(error||!cv){toast('Chat tidak ditemukan');go('chats');return}
  const it=cv.items||{};
  $('#chHead').innerHTML=`<img src="${esc(it.photos?.[0]||'')}" alt=""><div><b>${esc(otherName(cv)||'Mahasiswa')} <span class="vb">${VB}</span></b><small>${esc(it.title||'Barang dihapus')} · ${it.mode==='Sell'?rp(it.price):it.mode==='Swap'?'Tukar':'Gratis'}</small></div>`;
  $('#chHead').onclick=()=>it.id&&openDetail(it.id);
  $('#msgs').innerHTML=(msgs||[]).length?'':`<div class="chempty">Mulai obrolan dengan ${esc(otherName(cv)||'pemilik')}.<br>Pakai template di bawah biar cepat.</div>`;
  (msgs||[]).forEach(m=>appendMsg(m));
  $('#tpls').innerHTML=templates(cv).map(t=>`<button type="button">${esc(t)}</button>`).join('');
}
$('#tpls').onclick=e=>{const b=e.target.closest('button');if(b){sendMsg(b.textContent);$('#tpls').scrollTo({left:0,behavior:'smooth'})}};
$('#chF').onsubmit=e=>{e.preventDefault();const v=$('#chI').value.trim();if(v){$('#chI').value='';sendMsg(v)}};
$('#chBack').onclick=()=>go('chats');
async function sendMsg(body){const id=curConv;if(!id)return;
  const tmp={body,sender:S.uid,created_at:new Date().toISOString()};appendMsg(tmp,true);const tmpEl=$('#msgs .msg.pending:last-child');
  const {data,error}=await sb.from('messages').insert({conversation_id:id,sender:S.uid,body}).select().single();
  if(error){tmpEl?.remove();toast('Pesan gagal terkirim: '+errMsg(error));$('#chI').value=body;return}
  if(seenMsg.has(data.id)){tmpEl?.remove();return}
  seenMsg.add(data.id);if(tmpEl){tmpEl.classList.remove('pending');tmpEl.dataset.mid=data.id}}

/* ---------- Realtime: beranda live + pesan masuk ---------- */
let channel=null,homeT;
function startRealtime(){if(channel)return;
  channel=sb.channel('reuse-live')
   .on('postgres_changes',{event:'INSERT',schema:'public',table:'items'},({new:r})=>{
     if(r.owner===S.uid)return;
     if(cur==='home'&&r.campus===S.filter.campus){clearTimeout(homeT);homeT=setTimeout(renderHome,400);toast('Ada barang baru di '+campusOf(r.campus).s)}})
   .on('postgres_changes',{event:'INSERT',schema:'public',table:'messages'},({new:m})=>{
     if(cur==='chat'&&m.conversation_id===curConv){appendMsg(m);return}
     if(m.sender===S.uid)return;
     if(cur==='chats')renderChats();else{$('#nDot').hidden=false;toast('Pesan baru: '+m.body.slice(0,40))}})
   .subscribe();}

/* ---------- Profil ---------- */
async function renderProfile(){const c=myCampus();$('#pfAv').textContent=S.me.name[0];$('#pfN').innerHTML=esc(S.me.name)+` <span class="vb">${VB}</span>`;
  $('#pfE').textContent=S.me.email;$('#pfV').innerHTML=VB+`<span><b>Terverifikasi via ${PWMODE?'email kampus':'OTP'}</b><br>Lencana ini tampil di setiap barang yang kamu posting.</span>`;
  $('#pfC').textContent=c.s;$('#pfP').textContent='…';
  const {count}=await sb.from('items').select('id',{count:'exact',head:true}).eq('owner',S.uid);$('#pfP').textContent=count??0;}
$('#logout').onclick=async()=>{if(channel){sb.removeChannel(channel);channel=null}await sb.auth.signOut();
  S=fresh();$('#emailI').value='';$('#pwI').value='';$('#cList').innerHTML='';$('#nDot').hidden=true;go('onb')};

/* ---------- Boot ---------- */
hydrate(document);
(async()=>{
  if(!sb){go('setup');return}
  const {data:{session}}=await sb.auth.getSession();
  if(session?.user)await afterLogin(session.user);else go('onb');
})();
})();
