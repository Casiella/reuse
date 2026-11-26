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
headset:'<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="13" width="4" height="7" rx="2"/><rect x="17" y="13" width="4" height="7" rx="2"/><path d="M19 20a3 3 0 0 1-3 3h-3"/>',
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
eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
dbl:'<path d="M2 13l4 4L15 8"/><path d="M10 15.5l1.5 1.5L21 8"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
chart:'<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M16 4.5a3.5 3.5 0 0 1 0 7M22 20c0-3-2-5.2-5-5.8"/>',
qr:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 17h4v4h-4"/>',
star:'<path d="M12 2.5l2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.3l-5.9 3.1 1.3-6.5L2.5 9.3l6.6-.8z"/>',
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
const ITEM_SEL='*, profiles!items_owner_fkey(name)';
const PROF_COLS='id,name,campus,created_at';
const CONV_SEL='*, items(id,title,photos,mode,price,wish,cod,cod_place,campus,status,owner,taken_by), buyer:profiles!conversations_buyer_id_fkey(name), seller:profiles!conversations_seller_id_fkey(name)';
function errMsg(e){const m=String(e?.message||e||'');
  if(/rate limit|too many|security purposes/i.test(m))return 'Terlalu sering meminta kode. Tunggu sebentar lalu coba lagi.';
  if(/expired|invalid.*(otp|token)|token.*(expired|invalid)/i.test(m))return 'Kode salah atau sudah kedaluwarsa.';
  if(/failed to fetch|network/i.test(m))return 'Tidak bisa terhubung ke server. Cek koneksi internet.';
  if(/row-level security/i.test(m))return 'Ditolak oleh server (aturan keamanan). Pastikan email .ac.id dan kampus sudah dipilih.';
  if(/coerce the result|JSON object requested|0 rows/i.test(m))return 'Tidak bisa disimpan. Muat ulang halaman lalu coba lagi.';
  if(/dijawab oleh pihak lain|sudah (accepted|declined|cancelled)/i.test(m))return 'Ajakan COD ini sudah dijawab. Muat ulang chat.';
  return m||'Terjadi kesalahan.';}

/* ---------- Data statis ---------- */
let CAMPUS=[
 {id:'unpad',n:'Universitas Padjadjaran',s:'Unpad',loc:'Jatinangor',dom:'unpad.ac.id',cod:['Gerbang Lama','Masjid Raya Unpad','Bale Santika','Halte Bus Kampus'],area:['Sayang','Ciseke','Caringin','Hegarmanah','Cikuda']},
 {id:'itb',n:'Institut Teknologi Bandung',s:'ITB',loc:'Ganesha, Bandung',dom:'itb.ac.id',cod:['Gerbang Depan ITB','Masjid Salman','Perpustakaan Pusat','Sunken Court'],area:['Cisitu','Tubagus Ismail','Sekeloa','Dago','Plesiran']},
 {id:'ui',n:'Universitas Indonesia',s:'UI',loc:'Depok',dom:'ui.ac.id',cod:['Stasiun UI','Masjid UI','Perpustakaan UI','Halte Bikun FIB'],area:['Kukusan','Kukusan Teknik','Pondok Cina','Margonda','Beji']},
 {id:'ugm',n:'Universitas Gadjah Mada',s:'UGM',loc:'Yogyakarta',dom:'ugm.ac.id',cod:['Bundaran UGM','Masjid Kampus UGM','Perpustakaan Pusat','Lembah UGM'],area:['Pogung','Karangmalang','Sendowo','Klebengan','Condongcatur']},
 {id:'ipb',n:'IPB University',s:'IPB',loc:'Dramaga, Bogor',dom:'ipb.ac.id',cod:['Gerbang Dramaga','Masjid Al-Hurriyyah','Perpustakaan LSI','Gymnasium'],area:['Babakan Raya','Babakan Tengah','Bara','Cibanteng','Perwira']},
 {id:'tel',n:'Telkom University',s:'Tel-U',loc:'Bandung',dom:'telkomuniversity.ac.id',cod:['Gerbang Utama','Masjid Syamsul Ulum','Open Library','Danau Tel-U'],area:['Sukapura','Sukabirus','PGA','Bojongsoang','Ciganitri']}
];
const PINPOS=[[22,30],[70,26],[34,74],[78,70],[50,50],[12,58],[88,44],[56,14]];
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
const campusOf=id=>CAMPUS.find(c=>c.id===id)||{id,n:id||'Kampus',s:id||'Kampus',loc:'',dom:'',cod:[],area:[]};
const activeCampuses=()=>CAMPUS.filter(c=>c.active!==false||c.id===S.me?.campus);
const codName=i=>i.codPlace||campusOf(i.campus).cod[i.cod]||'Titik COD';
const PAY_BUCKET='payment-proofs';
let FEE=0,FEE_SET=0,SFEE=0,SFEE_SET=0,QRIS=null,QRIS_NAME='ReUse',QRIS_PAYLOAD=null,QRIS_DEMO=false,PAY_AUTO=false;
const loadScript=src=>new Promise((res,rej)=>{if(document.querySelector(`script[src="${src}"]`))return res();const el=document.createElement('script');el.src=src;el.onload=res;el.onerror=rej;document.head.appendChild(el)});
async function loadSettings(){try{const {data}=await sb.from('settings').select('key,value');
  (data||[]).forEach(r=>{if(r.key==='post_fee')FEE_SET=+r.value||0;if(r.key==='sundul_fee')SFEE_SET=+r.value||0;if(r.key==='qris_url')QRIS=r.value||null;if(r.key==='qris_name')QRIS_NAME=r.value||'ReUse';if(r.key==='qris_payload')QRIS_PAYLOAD=r.value||null;if(r.key==='qris_demo')QRIS_DEMO=r.value===true;if(r.key==='pay_auto')PAY_AUTO=r.value===true});
  FEE=QRIS||QRIS_PAYLOAD?FEE_SET:0;SFEE=QRIS||QRIS_PAYLOAD?SFEE_SET:0}catch(_){}}
async function loadCampuses(){try{const {data,error}=await sb.from('campuses').select('*').order('sort').order('name');
  if(!error&&data&&data.length)CAMPUS=data.map(c=>({id:c.id,n:c.name,s:c.short,loc:c.loc,dom:c.domain,cod:c.cod,area:c.areas||[],active:c.active,sort:c.sort}))}catch(_){}}
const myCampus=()=>campusOf(S.me?.campus);
const mapItem=r=>({id:r.id,owner:r.owner,t:r.title,k:r.category,c:r.condition,m:r.mode,p:r.price,w:r.wish,cod:r.cod,codPlace:r.cod_place,area:r.area,d:r.description,
  img:r.photos||[],by:r.profiles?.name||'Mahasiswa',campus:r.campus,ts:Date.parse(r.created_at),mine:r.owner===S.uid,
  status:r.status||'available',pay:r.pay_status||'approved',takenBy:r.taken_by,doneAt:r.done_at?Date.parse(r.done_at):null,bumpUntil:r.bumped_until?Date.parse(r.bumped_until):0,bumpAt:r.bumped_at?Date.parse(r.bumped_at):0});
const boosted=i=>i.bumpUntil>Date.now();
const leftTxt=ms=>{const h=Math.floor(ms/3600e3),m=Math.max(1,Math.round(ms%3600e3/60e3));return h?`${h} jam${m&&h<6?' '+m+' mnt':''}`:`${m} mnt`};
const cacheIt=i=>(S.cache[i.id]=i);
const seedFor=cid=>SEED.map((x,i)=>cacheIt({...x,id:'sample-'+cid+'-'+i,campus:cid,ts:Date.now()-(i+1)*3600e3*(i+2),sample:true}));

async function fetchItems({campus,area,mode,cat,q}){
  const base=()=>{let qb=sb.from('items').select(ITEM_SEL).eq('campus',campus).eq('status','available');
    if(area)qb=qb.eq('area',area);
    if(mode&&mode!=='Semua')qb=qb.eq('mode',mode);
    if(cat&&cat!=='Semua')qb=qb.eq('category',cat);
    const k=(q||'').replace(/[%,()*"\\]/g,' ').trim();
    if(k)qb=qb.or(`title.ilike."%${k}%",description.ilike."%${k}%"`);
    return qb};
  // Barang yang sedang disundul (24 jam) selalu di atas, sisanya terbaru dulu
  const [top,all]=await Promise.all([base().gt('bumped_until',new Date().toISOString()).order('bumped_at',{ascending:false}).limit(20),
    base().order('created_at',{ascending:false}).limit(60)]);
  if(all.error)throw all.error;
  const up=(top.data||[]).map(mapItem).filter(boosted),ids=new Set(up.map(i=>i.id));
  return [...up,...all.data.map(mapItem).filter(i=>!ids.has(i.id))].map(cacheIt);
}

/* ---------- Navigasi ---------- */
let cur='onb',curConv=null;
function go(id,opts={}){
  if(S.me&&['onb','email','otp'].includes(id))id='home';
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on',s.id===id));
  cur=id;window.scrollTo(0,0);if(id!=='chat')curConv=null;
  $('#nav').hidden=!['home','search','chats','profile'].includes(id);window.csSync&&csSync(id);
  document.querySelectorAll('#nav [data-tab]').forEach(b=>b.classList.toggle('on',b.dataset.tab===id));
  ({pay:()=>renderPay(opts.id,opts.kind),admin:renderAdmin,email:loadShowcase,onb:renderOnb,otp:startOtp,campus:renderCampus,home:renderHome,search:renderSearch,chats:renderChats,chat:()=>renderChat(opts.id),
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



/* ---------- Onboarding ---------- */
function renderOnb(){$('#onb').scrollTop=0;$('#lpInT').textContent=S.me?'Buka app':'Masuk';$('#lpCtaT').textContent=S.me?'Lanjut ke beranda':'Mulai sekarang'}
document.addEventListener('click',e=>{const b=e.target.closest('[data-enter]');if(b)go(S.me?b.dataset.enter:'email')});
$('#lpSearch').onsubmit=e=>{e.preventDefault();const q=$('#lpQ').value.trim();if(q)S.q=q;if(S.me){go('search');return}go('email');if(q)toast('Masuk dulu untuk mencari “'+q+'”')};

/* ---------- PBI-01 · Email + OTP (Supabase Auth) ---------- */
const EMRE=/^[^\s@]+@([a-z0-9-]+\.)*[a-z0-9-]+\.ac\.id$/i;
if(PWMODE){$('#pwWrap').hidden=false;$('#emailB').textContent='Masuk'}
$('#pwEye').onclick=()=>{const i=$('#pwI');i.type=i.type==='password'?'text':'password'};
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
/* slideshow barang yang sedang dijual (layar login) */
let slides=[],si=0,sTimer,showcaseLoaded=false;
const SAMPLE_SHOW=SEED.map(x=>({title:x.t,mode:x.m,price:x.p,photo:x.img[0],campus:'unpad'}));
function buildSlides(list){const S2=$('#slides');S2.querySelectorAll('figure').forEach(f=>f.remove());
  list.forEach(x=>S2.insertAdjacentHTML('afterbegin',`<figure><img src="${esc(x.photo)}" alt=""><figcaption><span class="mtag m-${esc(x.mode)}">${esc(x.mode)}</span><span class="ft"><b>${esc(x.title)}</b><small>${x.mode==='Sell'?rp(x.price):x.mode==='Swap'?'Tukar barang':'Gratis'} · ${esc(campusOf(x.campus).s)}</small></span></figcaption></figure>`));
  slides=[...S2.querySelectorAll('figure')].reverse();$('#sdots').innerHTML=slides.map((_,i)=>`<i data-s="${i}"></i>`).join('');showSlide(0);startSlides()}
const showSlide=i=>{if(!slides.length)return;si=(i+slides.length)%slides.length;slides.forEach((f,k)=>f.classList.toggle('on',k===si));[...$('#sdots').children].forEach((d,k)=>d.classList.toggle('on',k===si))};
$('#sdots').onclick=e=>{const d=e.target.closest('[data-s]');if(d){showSlide(+d.dataset.s);startSlides()}};
function startSlides(){clearInterval(sTimer);sTimer=setInterval(()=>{if(cur==='email')showSlide(si+1)},3200)}
async function loadShowcase(){if(showcaseLoaded)return;showcaseLoaded=true;
  try{const {data,error}=await sb.rpc('showcase',{n:8});if(error)throw error;
    buildSlides(data&&data.length?data:SAMPLE_SHOW)}catch(e){buildSlides(SAMPLE_SHOW)}}

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
  const {data:prof,error}=await sb.from('profiles').select(PROF_COLS).eq('id',user.id).maybeSingle();
  if(error){toast(errMsg(error))}
  S.admin=false;sb.rpc('is_admin').then(({data})=>{S.admin=!!data;refreshPending();if(cur==='profile')renderProfile()});
  if(prof?.campus){S.me=prof;S.filter.campus=prof.campus;startRealtime();go(S.q?'search':'home')}
  else go('campus');
}

/* ---------- Pilih kampus → simpan profil ---------- */
function renderCampus(){const dom=S.email.split('@')[1]||'';
  const sug=activeCampuses().find(c=>c.dom&&dom.endsWith(c.dom));
  $('#campL').innerHTML=activeCampuses().map(c=>`<label><input type="radio" name="camp" value="${c.id}" ${(S.me?.campus||sug?.id)===c.id?'checked':''}><span class="ini">${c.s}</span><span><b>${c.n}</b><span>${c.loc}</span></span>${sug?.id===c.id?'<em class="sug" style="font-style:normal">Sesuai email</em>':''}</label>`).join('');
  $('#campE').textContent='';}
$('#campL').addEventListener('change',()=>$('#campE').textContent='');
$('#campB').onclick=async()=>{const v=document.querySelector('input[name=camp]:checked');
  if(!v){$('#campE').textContent='Pilih satu kampus dulu.';return}
  const local=S.email.split('@')[0].split(/[._\d-]/).filter(Boolean)[0]||'mahasiswa';
  const name=S.me?.name||local[0].toUpperCase()+local.slice(1);
  const B=$('#campB');B.disabled=true;
  const {data,error}=S.me?await sb.from('profiles').update({name,campus:v.value}).eq('id',S.uid).select(PROF_COLS).single()
    :await sb.from('profiles').insert({id:S.uid,email:S.email,name,campus:v.value}).select(PROF_COLS).single();
  B.disabled=false;
  if(error){$('#campE').textContent=errMsg(error);return}
  S.me=data;S.filter={campus:data.campus,area:'',mode:'Semua'};startRealtime();
  toast('Akun terverifikasi · '+myCampus().s);go(S.q?'search':'home');};

/* ---------- PBI-05 · Beranda: listing terbaru per kampus ---------- */
const priceTxt=i=>i.m==='Sell'?rp(i.p):i.m==='Swap'?'Tukar':'Gratis';
function ago(ts){const m=Math.max(1,Math.round((Date.now()-ts)/6e4));return m<60?m+' mnt':m<1440?Math.round(m/60)+' jam':Math.round(m/1440)+' hari'}
const skel=n=>Array.from({length:n},()=>'<div class="skel"></div>').join('');
function cardHTML(i){const c=campusOf(i.campus);
  return `<button class="card" data-id="${i.id}"><div class="thumb"><img src="${esc(i.img[0])}" alt="" loading="lazy"><span class="mtag m-${i.m}">${i.m}</span>${i.sample?'<span class="smp">Contoh</span>':''}${boosted(i)?`<span class="bump">${svg('up')}Disundul</span>`:''}</div>
   <div class="ci"><b>${esc(i.t)}</b><div class="pr">${priceTxt(i)}</div><div class="meta">${svg('pin')}${esc(i.area?i.area+' · '+codName(i):codName(i))}</div>
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
  g.innerHTML=`<div class="empty">Belum ada barang${esc(label)} di ${esc(c.s)}${f.area?' area '+esc(f.area):''}.${mine?'<br>Jadilah yang pertama posting lewat tombol +.':''}</div>`;
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
   <label class="lbl" for="fC">Kampus</label><select class="field" id="fC">${activeCampuses().map(c=>`<option value="${c.id}" ${c.id===S.filter.campus?'selected':''}>${esc(c.n)}${c.id===S.me.campus?' (kampusmu)':''}</option>`).join('')}</select>
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
      price:P.mode==='Sell'?price:null,wish:P.mode==='Swap'?w:null,cod:P.cod,cod_place:myCampus().cod[P.cod],area:$('#pA').value||null,description:$('#pD').value.trim()||null,
      photos:uploaded.map(p=>sb.storage.from(BUCKET).getPublicUrl(p).data.publicUrl)}).select(ITEM_SEL).single();
    if(error)throw error;
    const it=cacheIt(mapItem(data));P.busy=false;prev={s:'home',o:{}};
    if(it.pay!=='approved'){toast('Barang tersimpan. Bayar biaya posting supaya tampil.');go('pay',{id:it.id})}else{toast('Barang berhasil diposting');go('detail',{id:it.id})}
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
   <div class="tb"><button id="dBack" aria-label="Kembali">${svg('left')}</button><span class="tbr">${!i.mine&&!i.sample?`<button id="dFlag" aria-label="Laporkan barang">${svg('flag')}</button>`:''}<button id="dShare" aria-label="Bagikan barang">${svg('share')}</button></span></div>
   <span class="cnt" id="cnt">1/${i.img.length}</span></div>
  <div class="dbody">
   ${i.mine&&i.pay!=='approved'?`<div class="paybar ${i.pay}" id="dPayBar">${svg('qr')}<span><b>${i.pay==='rejected'?'Pembayaran ditolak':'Belum tampil ke pembeli'}</b><br>${i.pay==='rejected'?'Kirim ulang bukti bayar.':'Menunggu pembayaran biaya posting '+rp(FEE)+'.'}</span></div>`:''}
   ${i.status==='done'?`<div class="donebar">${svg('check')}<span><b>Barang sudah selesai</b><br>Sudah berpindah tangan${i.doneAt?' '+ago(i.doneAt)+' lalu':''}.</span></div>`:''}
   <div class="dtags"><span class="mtag m-${i.m}">${i.m}</span><span>${esc(i.k)}</span><span>${esc(i.c)}</span>${i.area?`<span>Area ${esc(i.area)}</span>`:''}${i.sample?'<span>Contoh</span>':''}</div>
   <h1>${esc(i.t)}</h1>
   <div class="dpr">${i.m==='Sell'?rp(i.p):i.m==='Swap'?'Tukar barang':'Gratis'}</div>
   ${i.m==='Swap'?`<div style="font-size:13px;color:var(--mut);margin-top:2px">Ingin ditukar dengan: <b style="color:var(--swap)">${esc(i.w)}</b></div>`:''}
   <div style="font-size:11.5px;color:var(--mut);margin-top:6px">Diposting ${ago(i.ts)} lalu</div>
   <div class="box"><div class="seller"><div class="av">${esc(i.by[0])}</div><div style="flex:1"><b>${esc(i.by)}${i.mine?' (kamu)':''} <span class="vb">${VB}</span></b><small>${c.s}</small></div><button class="rate" id="dRate" data-seller="${i.owner}" data-name="${esc(i.by)}" ${i.sample?'hidden':''}></button></div>
    <div class="verif">${VB}<span><b>Mahasiswa terverifikasi</b><br>Email kampus @${esc(c.dom)} sudah dikonfirmasi lewat OTP.</span></div></div>
   <div class="box"><h3>Titik COD</h3><div class="codrow"><div class="ic">${svg('pin')}</div><div><b>${esc(codName(i))}</b><span>${c.n} · ${c.loc}</span></div></div></div>
   ${i.d?`<div class="box"><h3>Deskripsi</h3><p>${esc(i.d)}</p></div>`:''}
  </div>
  <div class="dfoot">${i.sample?`<button class="btn" disabled>Barang contoh · tidak bisa chat</button>`
    :i.mine&&i.pay!=='approved'?`<button class="btn ghost sq" id="dDel" aria-label="Hapus barang">${svg('trash')}</button><button class="btn" id="dPay">${svg('qr')}${i.pay==='rejected'?'Kirim ulang bukti':'Bayar / lihat status'}</button>`
    :i.mine?`<button class="btn ghost sq" id="dDel" aria-label="Hapus barang">${svg('trash')}</button>`+(i.status==='done'
        ?`<button class="btn ghost" id="dReopen">Tersedia lagi</button><button class="btn" data-tab="profile">${svg('chart')}Lihat dampak</button>`
        :`<button class="btn ghost sundul ${boosted(i)?'on':''}" id="dSundul">${svg('up')}${boosted(i)?'Disundul · '+leftTxt(i.bumpUntil-Date.now()):'Sundul'}</button><button class="btn" id="dDone">${svg('check')}Tandai selesai</button>`)
    :i.status==='done'&&i.takenBy===S.uid?`<button class="btn" id="dReview">${svg('star')}Beri rating penjual</button>`
    :i.status==='done'?`<button class="btn" disabled>Barang sudah selesai</button>`
    :`${S.admin?`<button class="btn ghost sq" id="dDel" aria-label="Hapus barang (admin)">${svg('trash')}</button>`:''}<button class="btn" id="dChat">${svg('chat')}Chat pemilik</button>`}</div>`;
  $('#dBack').onclick=()=>go(prev.s,prev.o);
  if($('#dChat'))$('#dChat').onclick=()=>openChatFor(i);
  if($('#dDone'))$('#dDone').onclick=()=>markDone(i);
  if($('#dPay'))$('#dPay').onclick=()=>go('pay',{id:i.id});
  if($('#dReopen'))$('#dReopen').onclick=()=>reopenItem(i);
  if($('#dSundul'))$('#dSundul').onclick=()=>sundul(i);
  if($('#dFlag'))$('#dFlag').onclick=()=>reportModal({target:i.owner,name:i.by,item:i.id,title:i.t});
  if($('#dDel'))$('#dDel').onclick=()=>{modal(`<h2>Hapus barang ini?</h2><p>“${esc(i.t)}” akan hilang dari beranda semua orang, termasuk chat terkait.${i.mine?'':' Kamu menghapus sebagai <b>admin</b>.'}</p><div class="row2"><button class="btn ghost" data-close>Batal</button><button class="btn" id="delOk" style="background:#B3261E">Hapus</button></div>`);
    $('#delOk').onclick=async()=>{$('#delOk').disabled=true;const {error}=await sb.from('items').delete().eq('id',i.id);
      if(error){toast(errMsg(error));$('#delOk').disabled=false;return}
      const paths=i.mine?i.img.map(pathFromUrl).filter(Boolean):[];if(paths.length)sb.storage.from(BUCKET).remove(paths);
      delete S.cache[i.id];closeModal();toast('Barang dihapus');go('home')}};
  $('#dShare').onclick=async()=>{const url=location.origin+'/';const text=`${i.t} · ${i.m==='Sell'?rp(i.p):i.m==='Swap'?'Tukar':'Gratis'} di ReUse (${c.s})`;
    try{if(navigator.share){await navigator.share({title:i.t,text,url});return}await navigator.clipboard.writeText(text+' '+url);toast('Info barang disalin')}catch(_){}};
  if(!i.sample)loadRateBtn($('#dRate'),i.owner);
  if($('#dReview'))myReview(i.id).then(r=>{const b=$('#dReview');if(!b)return;if(r)b.innerHTML=svg('star')+'Ubah rating ('+r.stars+'★)';b.onclick=()=>rateModal({id:i.id,t:i.t,owner:i.owner,by:i.by},r)});
  const trk=$('#trk');trk.onscroll=()=>{$('#cnt').textContent=(Math.round(trk.scrollLeft/trk.clientWidth)+1)+'/'+i.img.length};}

/* ---------- PBI-10 · Tandai selesai + ringkasan dampak ---------- */
async function markDone(i){
  modal(`<h2>Tandai selesai</h2><p>Memuat siapa saja yang chat soal barang ini…</p>`);
  const {data:cvs}=await sb.from('conversations').select('buyer_id, buyer:profiles!conversations_buyer_id_fkey(name)').eq('item_id',i.id);
  const opts=(cvs||[]).map(c=>`<label><input type="radio" name="taker" value="${c.buyer_id}"><span><b style="font-weight:500">${esc(c.buyer?.name||'Mahasiswa')}</b><span>Pernah chat soal barang ini</span></span></label>`).join('');
  modal(`<div class="mi" data-ic="check"></div><h2>“${esc(i.t)}” sudah ${i.m==='Sell'?'terjual':i.m==='Swap'?'ditukar':'diberikan'}?</h2>
   <p>Barang akan hilang dari beranda dan pencarian. Pilih siapa yang mendapatkannya.</p>
   <div class="cods" id="takers">${opts}<label><input type="radio" name="taker" value="" ${opts?'':'checked'}><span><b style="font-weight:500">Orang lain / tidak dicatat</b><span>Di luar chat ReUse</span></span></label></div>
   <div class="err" id="doneE"></div>
   <div class="row2"><button class="btn ghost" data-close>Batal</button><button class="btn" id="doneOk">Selesai</button></div>`);
  $('#doneOk').onclick=async()=>{const v=document.querySelector('input[name=taker]:checked');
    if(!v){$('#doneE').textContent='Pilih salah satu dulu.';return}
    $('#doneOk').disabled=true;
    const {data,error}=await sb.from('items').update({status:'done',taken_by:v.value||null}).eq('id',i.id).select(ITEM_SEL).single();
    if(error){$('#doneE').textContent=errMsg(error);$('#doneOk').disabled=false;return}
    cacheIt(mapItem(data));showImpact(true);renderDetail(i.id);};
}
async function reopenItem(i){
  const {data,error}=await sb.from('items').update({status:'available'}).eq('id',i.id).select(ITEM_SEL).single();
  if(error){toast(errMsg(error));return}cacheIt(mapItem(data));toast('Barang tampil lagi di beranda');renderDetail(i.id);}
async function myImpact(){
  const [{data:mine},{count:got},{count:deals}]=await Promise.all([
    sb.from('items').select(ITEM_SEL).eq('owner',S.uid).order('created_at',{ascending:false}),
    sb.from('items').select('id',{count:'exact',head:true}).eq('taken_by',S.uid),
    sb.from('deals').select('id',{count:'exact',head:true}).eq('status','accepted')]);
  const items=(mine||[]).map(mapItem).map(cacheIt),done=items.filter(x=>x.status==='done');
  return {items,posted:items.length,done:done.length,got:got||0,deals:deals||0,
    earned:done.filter(x=>x.m==='Sell').reduce((a,x)=>a+(x.p||0),0),
    donated:done.filter(x=>x.m==='Donate').length,swapped:done.filter(x=>x.m==='Swap').length};
}
const impactText=d=>[d.done?`<b>${d.done}</b> barang dapat pemilik baru, tidak berakhir di tempat sampah`:'',
  d.earned?`<b>${rp(d.earned)}</b> uang tambahan dari barang yang terjual`:'',
  d.donated?`<b>${d.donated}</b> barang didonasikan ke sesama mahasiswa`:'',
  d.swapped?`<b>${d.swapped}</b> barang ditukar dengan yang lebih kamu butuhkan`:'',
  d.got?`<b>${d.got}</b> barang bekas kamu pakai lagi`:''].filter(Boolean);
async function showImpact(fresh){const d=await myImpact();const lines=impactText(d);
  modal(`<div class="mi" data-ic="${fresh?'gift':'chart'}"></div><h2>${fresh?`Barang ke-${d.done} yang kamu selamatkan!`:'Dampakmu di ReUse'}</h2>
   <div class="impact">${lines.length?lines.map(l=>`<div>${svg('check')}<span>${l}</span></div>`).join(''):'<p>Belum ada barang yang selesai.</p>'}</div>
   <button class="btn" data-close>Mantap</button>`);}

/* ---------- Sundul · naik ke urutan teratas beranda kampus 24 jam ---------- */
async function sundul(i){
  sb.from('sundul_clicks').insert({item_id:i.id,user_id:S.uid}).then(()=>{});
  if(boosted(i)){modal(`<div class="mi" data-ic="up"></div><h2>Barangmu sedang disundul</h2>
     <p>“${esc(i.t)}” tampil paling atas di beranda ${esc(campusOf(i.campus).s)} dengan lencana <b>Disundul</b> sampai <b>${fmtMeet(i.bumpUntil)}</b> (sisa ${leftTxt(i.bumpUntil-Date.now())}).</p>
     <p class="muted">Setelah masa itu habis kamu bisa menyundul lagi.</p><button class="btn" data-close>Oke</button>`);return}
  await loadSettings();
  const last=SFEE>0?await lastPayment(i.id,'sundul'):null;
  if(last&&last.status==='pending'){go('pay',{id:i.id,kind:'sundul'});return}
  modal(`<div class="mi" data-ic="up"></div><h2>Sundul barang ini?</h2>
   <div class="impact"><div>${svg('up')}<span>Naik ke <b>urutan paling atas</b> beranda ${esc(campusOf(i.campus).s)}</span></div>
    <div>${svg('clock')}<span>Berlaku <b>24 jam</b>, lalu kembali ke urutan biasa</span></div>
    <div>${svg('star')}<span>Diberi lencana <b>Disundul</b> supaya lebih dilirik</span></div></div>
   <div class="row2"><button class="btn ghost" data-close>Nanti</button><button class="btn" id="sdOk">${SFEE>0?'Bayar '+rp(SFEE):'Sundul sekarang'}</button></div>`);
  $('#sdOk').onclick=async()=>{if(SFEE>0){closeModal();go('pay',{id:i.id,kind:'sundul'});return}
    $('#sdOk').disabled=true;const {data,error}=await sb.rpc('sundul_free',{p_item:i.id});
    if(error){toast(errMsg(error));$('#sdOk').disabled=false;return}
    delete S.cache[i.id];closeModal();toast('Barangmu sudah disundul ke atas selama 24 jam');renderDetail(i.id)};}

/* ---------- PBI-09 · Kartu kesepakatan COD di chat ---------- */
let curCv=null;
const fmtMeet=ts=>new Date(ts).toLocaleString('id-ID',{weekday:'long',day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'});
const DEAL_TXT={proposed:'Menunggu jawaban',accepted:'Disepakati',declined:'Ditolak',cancelled:'Dibatalkan'};
function dealHTML(d){const mine=d.proposer===S.uid,open=d.status==='proposed';
  return `<div class="deal ${mine?'me':''} st-${d.status}" data-deal="${d.id}">
   <div class="dh">${svg('cal')}<b>${mine?'Ajakan COD kamu':'Ajakan COD'}</b><span class="dst">${DEAL_TXT[d.status]}</span></div>
   <div class="dr">${svg('cal')}<span>${esc(fmtMeet(d.meet_at))}</span></div>
   <div class="dr">${svg('pin')}<span>${esc(d.place)}</span></div>
   ${open&&!mine?`<div class="da"><button class="btn ghost" data-dact="declined">Tolak</button><button class="btn" data-dact="accepted">Terima</button></div>`:''}
   ${open&&mine?`<div class="da"><button class="btn ghost" data-dact="cancelled">Batalkan</button></div>`:''}
   <time>${hm(d.created_at)}</time></div>`;}
function putDeal(d){const M=$('#msgs'),old=M.querySelector(`[data-deal="${d.id}"]`);
  if(old){old.outerHTML=dealHTML(d);return}
  M.querySelector('.chempty')?.remove();
  const day=dayTxt(d.created_at);if(day!==lastDay){lastDay=day;M.insertAdjacentHTML('beforeend',`<div class="mday">${day}</div>`)}
  M.insertAdjacentHTML('beforeend',dealHTML(d));M.scrollTop=M.scrollHeight;}
$('#msgs').addEventListener('click',async e=>{const b=e.target.closest('[data-dact]');if(!b)return;
  const id=b.closest('[data-deal]').dataset.deal;b.disabled=true;
  const {data,error}=await sb.from('deals').update({status:b.dataset.dact}).eq('id',id).select().single();
  if(error){toast(errMsg(error));b.disabled=false;return}putDeal(data);
  if(data.status==='accepted')toast('COD disepakati. Jangan lupa tandai selesai setelah barang berpindah tangan.');});
function proposeDeal(){if(!curCv)return;const it=curCv.items||{},c=campusOf(it.campus);
  const t=new Date(Date.now()+864e5);const dd=t.toISOString().slice(0,10);
  modal(`<div class="mi" data-ic="cal"></div><h2>Atur waktu & tempat COD</h2>
   <label class="lbl" for="dlD">Tanggal</label><input class="field" type="date" id="dlD" value="${dd}" min="${new Date().toISOString().slice(0,10)}">
   <label class="lbl" for="dlT">Jam</label><input class="field" type="time" id="dlT" value="13:00">
   <label class="lbl" for="dlP">Tempat</label><select class="field" id="dlP">${[...new Set([it.cod_place,...c.cod].filter(Boolean))].map(n=>`<option ${n===(it.cod_place||c.cod[it.cod])?'selected':''}>${esc(n)}</option>`).join('')}<option value="">Tempat lain…</option></select>
   <input class="field" id="dlO" placeholder="Tulis tempat lain" maxlength="80" hidden style="margin-top:8px">
   <div class="err" id="dlE"></div>
   <div class="row2"><button class="btn ghost" data-close>Batal</button><button class="btn" id="dlOk">Kirim ajakan</button></div>`);
  $('#dlP').onchange=()=>{$('#dlO').hidden=!!$('#dlP').value};
  $('#dlOk').onclick=async()=>{const place=($('#dlP').value||$('#dlO').value).trim();
    const when=new Date(`${$('#dlD').value}T${$('#dlT').value||'00:00'}`);
    if(isNaN(when)){$('#dlE').textContent='Isi tanggal dan jam.';return}
    if(when<Date.now()){$('#dlE').textContent='Waktu COD sudah lewat.';return}
    if(place.length<2){$('#dlE').textContent='Isi tempat COD.';return}
    $('#dlOk').disabled=true;
    const {data,error}=await sb.from('deals').insert({conversation_id:curConv,proposer:S.uid,meet_at:when.toISOString(),place}).select().single();
    if(error){$('#dlE').textContent=errMsg(error);$('#dlOk').disabled=false;return}
    closeModal();putDeal(data);};
}
$('#chCod').onclick=proposeDeal;

/* ---------- Biaya posting · QRIS manual ---------- */
let payItem=null,payKind='post',payProof=null;
async function lastPayment(itemId,kind='post'){const {data}=await sb.from('payments').select('*').eq('item_id',itemId).eq('kind',kind).order('created_at',{ascending:false}).limit(1);return data?.[0]||null}
async function renderPay(id,kind){kind=kind||'post';payItem=id;payKind=kind;payProof=null;const B=$('#payBody');B.innerHTML=skel(2);
  const SD=kind==='sundul';$('#pay h1').textContent=SD?'Sundul barang':'Biaya posting';
  await loadSettings();
  const [{data},last]=await Promise.all([sb.from('items').select(ITEM_SEL).eq('id',id).maybeSingle(),lastPayment(id,kind)]);
  if(payItem!==id||payKind!==kind)return;
  if(!data){toast('Barang tidak ditemukan');go('profile');return}
  const i=cacheIt(mapItem(data)),AMT=SD?SFEE:FEE;
  const head=`<div class="payitem"><img src="${esc(i.img[0])}" alt=""><span><b>${esc(i.t)}</b><small>${i.m} · ${esc(campusOf(i.campus).s)}</small></span></div>`;
  if(SD&&boosted(i)){B.innerHTML=head+`<div class="paystate ok">${svg('up')}<b>Barangmu sedang disundul</b><p>Tampil paling atas di beranda kampus sampai ${fmtMeet(i.bumpUntil)}.</p></div><button class="btn" id="payGo">Lihat barang</button>`;
    $('#payGo').onclick=()=>go('detail',{id});return}
  if(SD&&(i.pay!=='approved'||i.status!=='available')){B.innerHTML=head+`<div class="paystate bad"><b>Barang ini belum bisa disundul</b><p>${i.status!=='available'?'Barang sudah selesai.':'Selesaikan dulu pembayaran biaya posting.'}</p></div><button class="btn ghost" id="payGo">Kembali</button>`;
    $('#payGo').onclick=()=>go('detail',{id});return}
  if(!SD&&i.pay==='approved'){B.innerHTML=head+`<div class="paystate ok">${svg('check')}<b>Pembayaran disetujui</b><p>Barangmu sudah tampil di beranda kampus.</p></div><button class="btn" id="payGo">Lihat barang</button>`;
    $('#payGo').onclick=()=>go('detail',{id});return}
  if(last&&last.status==='pending'){B.innerHTML=head+`<div class="paystate">${svg('qr')}<b>Bukti terkirim, menunggu verifikasi admin</b><p>Dikirim ${ago(Date.parse(last.created_at))} lalu · ${rp(last.amount)}. ${SD?'Barang otomatis naik ke atas 24 jam setelah disetujui.':'Barang otomatis tampil setelah disetujui.'}</p></div><button class="btn ghost" data-tab="home">Kembali ke beranda</button>`;return}
  B.innerHTML=head+(last&&last.status==='rejected'?`<div class="paystate bad"><b>Pembayaran sebelumnya ditolak</b><p>Alasan: ${esc((last.note||'Bukti tidak sesuai').replace(/[.\s]+$/,''))}. Silakan bayar lagi dan kirim ulang bukti.</p></div>`:'')+
   `<div class="qrbox">${QRIS_DEMO?`<div class="demotag">Mode demo · QRIS contoh, tidak menerima uang sungguhan.${PAY_AUTO?' Langsung tekan “Saya sudah bayar”.':' Upload screenshot apa saja sebagai bukti.'}</div>`:''}<small>${SD?'Bayar sundul 24 jam':'Bayar biaya posting'}</small><div class="amt">${rp(AMT)}</div>
     ${QRIS_PAYLOAD?`<img id="dynQr" alt="QRIS ${esc(QRIS_NAME)} nominal ${rp(AMT)}"><p>Scan QRIS a.n. <b>${esc(QRIS_NAME)}</b> dari m-banking atau e-wallet. <b>Nominal ${rp(AMT)} sudah otomatis terisi</b>, tinggal konfirmasi bayar${PAY_AUTO?', lalu kembali ke sini':''}.</p>
       <a class="btn ghost" id="dynDl" download="QRIS-ReUse-${AMT}.png">Simpan gambar QRIS</a>`
     :QRIS?`<img src="${esc(QRIS)}" alt="QRIS ${esc(QRIS_NAME)}"><p>Scan QRIS a.n. <b>${esc(QRIS_NAME)}</b> dari m-banking atau e-wallet, lalu ketik nominal <b>${rp(AMT)}</b>.</p>
       <a class="btn ghost" href="${esc(QRIS)}" download="QRIS-ReUse">Simpan gambar QRIS</a>`
     :`<div class="qrnone">${svg('qr')}<span>QRIS belum dipasang admin. Coba lagi nanti.</span></div>`}</div>
   ${PAY_AUTO?`<div class="paysteps"><span>1</span>Scan & bayar ${rp(AMT)}<span>2</span>Tekan tombol di bawah</div>`:`<span class="lbl">Bukti pembayaran <small>(screenshot transaksi berhasil)</small></span>
   <label class="proof" id="proofL"><input type="file" accept="image/*" id="proofI" hidden><span id="proofT">${svg('camera')}Upload screenshot bukti bayar</span></label>`}
   <div class="err" id="payE"></div>
   <button class="btn" id="paySend" ${QRIS||QRIS_PAYLOAD?'':'disabled'}>${PAY_AUTO?svg('check')+'Saya sudah bayar':'Kirim bukti bayar'}</button>`;
  if(QRIS_PAYLOAD){try{await loadScript('js/vendor/qrcode.js');const qr=qrcode(0,'M');qr.addData(window.QRIS.withAmount(QRIS_PAYLOAD,AMT));qr.make();
    const url=qr.createDataURL(8,4);$('#dynQr').src=url;$('#dynDl').href=url}catch(e){$('#payE').textContent='QRIS tidak bisa dibuat: '+e.message}}
  if($('#proofI'))$('#proofI').onchange=async e=>{const f=e.target.files[0];if(!f)return;
    try{payProof=await shrinkTo(f,1400);$('#proofT').innerHTML=`<img src="${payProof.url}" alt="">`;$('#payE').textContent=''}catch(_){$('#payE').textContent='Gagal membaca gambar.'}};
  const LBL=$('#paySend').innerHTML;
  $('#paySend').onclick=async()=>{const btn=$('#paySend');
    if(PAY_AUTO){btn.disabled=true;btn.textContent='Mengecek pembayaran…';
      const {data:pd,error}=await sb.from('payments').insert({item_id:id,owner:S.uid,amount:AMT,kind}).select().single();
      if(error){$('#payE').textContent=errMsg(error);btn.disabled=false;btn.innerHTML=LBL;return}
      delete S.cache[id];
      if(pd.status!=='approved'){toast('Pembayaran tercatat, menunggu verifikasi admin.');renderPay(id,kind);return}
      toast(SD?'Pembayaran berhasil. Barangmu di urutan teratas 24 jam!':'Pembayaran berhasil. Barangmu sudah tampil!');go('detail',{id});return}
    if(!payProof){$('#payE').textContent='Upload screenshot bukti bayar dulu.';return}
    btn.disabled=true;btn.textContent='Mengirim…';
    const path=`${S.uid}/${kind}-${id}-${Date.now()}.jpg`;
    const up=await sb.storage.from(PAY_BUCKET).upload(path,payProof.blob,{contentType:'image/jpeg'});
    if(up.error){$('#payE').textContent=errMsg(up.error);btn.disabled=false;btn.textContent='Kirim bukti bayar';return}
    const {error}=await sb.from('payments').insert({item_id:id,owner:S.uid,amount:AMT,proof_path:path,kind});
    if(error){$('#payE').textContent=errMsg(error);btn.disabled=false;btn.textContent='Kirim bukti bayar';return}
    toast('Bukti terkirim. Admin akan memverifikasi.');renderPay(id,kind)};
}
function readQr(file){return new Promise((res,rej)=>{const u=URL.createObjectURL(file);const im=new Image();im.onerror=()=>{URL.revokeObjectURL(u);rej()};im.onload=()=>{
  const tries=[1,Math.min(1,1000/Math.max(im.width,im.height)),Math.min(1,600/Math.max(im.width,im.height))];
  for(const k of tries){const cv=document.createElement('canvas');cv.width=Math.round(im.width*k);cv.height=Math.round(im.height*k);
    const cx=cv.getContext('2d');cx.fillStyle='#fff';cx.fillRect(0,0,cv.width,cv.height);cx.drawImage(im,0,0,cv.width,cv.height);
    const d=cx.getImageData(0,0,cv.width,cv.height);const r=window.jsQR(d.data,cv.width,cv.height,{inversionAttempts:'attemptBoth'});
    if(r&&r.data){URL.revokeObjectURL(u);return res(r.data.trim())}}
  URL.revokeObjectURL(u);res(null)};im.src=u})}
function shrinkTo(file,max){return new Promise((res,rej)=>{const u=URL.createObjectURL(file);const im=new Image();im.onerror=()=>{URL.revokeObjectURL(u);rej()};im.onload=()=>{
  const k=Math.min(1,max/Math.max(im.width,im.height));const cv=document.createElement('canvas');cv.width=Math.round(im.width*k);cv.height=Math.round(im.height*k);
  cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);URL.revokeObjectURL(u);cv.toBlob(b=>b?res({blob:b,url:URL.createObjectURL(b)}):rej(),'image/jpeg',.85)};im.src=u})}
$('#payBack').onclick=()=>payItem?go('detail',{id:payItem}):go('profile');

/* ---------- Rating penjual ---------- */
const fmtStar=n=>Number(n).toLocaleString('id-ID',{minimumFractionDigits:1,maximumFractionDigits:1});
const starRow=n=>`<span class="stars">${[1,2,3,4,5].map(k=>`<i class="${n>=k-.25?'on':n>=k-.75?'half':''}">${svg('star')}</i>`).join('')}</span>`;
async function sellerRating(uid){const {data}=await sb.from('seller_ratings').select('avg_stars,total').eq('seller',uid).maybeSingle();return data}
async function myReview(itemId){const {data}=await sb.from('reviews').select('*').eq('item_id',itemId).eq('reviewer',S.uid).maybeSingle();return data}
async function toRate(){const [{data:got},{data:mine}]=await Promise.all([
  sb.from('items').select('id,title,photos,owner,profiles!items_owner_fkey(name)').eq('taken_by',S.uid).eq('status','done').order('done_at',{ascending:false}),
  sb.from('reviews').select('item_id').eq('reviewer',S.uid)]);
  const done=new Set((mine||[]).map(r=>r.item_id));return (got||[]).filter(x=>!done.has(x.id)&&x.owner!==S.uid)}
async function loadRateBtn(b,uid){if(!b)return;const r=await sellerRating(uid);if(!b.isConnected)return;
  b.innerHTML=r&&r.total?`${svg('star')}<b>${fmtStar(r.avg_stars)}</b><small>${r.total} ulasan</small>`:`<small>Belum ada ulasan</small>`;
  b.disabled=!(r&&r.total);b.onclick=()=>reviewsModal(uid,b.dataset.name)}
async function reviewsModal(uid,name){modal(`<h2>Ulasan untuk ${esc(name||'penjual')}</h2><p>Memuat…</p>`);
  const [r,{data}]=await Promise.all([sellerRating(uid),sb.from('reviews').select('*, items(title), rv:profiles!reviews_reviewer_fkey(name)').eq('seller',uid).order('created_at',{ascending:false}).limit(50)]);
  modal(`<h2>Ulasan untuk ${esc(name||'penjual')}</h2>
   ${r&&r.total?`<div class="rsum"><b>${fmtStar(r.avg_stars)}</b>${starRow(r.avg_stars)}<span>${r.total} ulasan</span></div>`:''}
   <div class="rlist">${(data||[]).map(v=>`<div class="rv" data-rv="${v.id}"><div class="rvh">${starRow(v.stars)}<small>${esc(v.rv?.name||'Pembeli')} · ${ago(Date.parse(v.created_at))} lalu</small>${S.admin||v.reviewer===S.uid?`<button class="adel" data-rvdel="${v.id}" aria-label="Hapus ulasan">${svg('trash')}</button>`:''}</div>
     ${v.comment?`<p>${esc(v.comment)}</p>`:''}<small class="rvi">Barang: ${esc(v.items?.title||'dihapus')}</small></div>`).join('')||'<p class="muted">Belum ada ulasan.</p>'}</div>
   <button class="btn" data-close>Tutup</button>`);
  $('#modal').onclick=async e=>{const d=e.target.closest('[data-rvdel]');if(!d)return;if(!confirm('Hapus ulasan ini?'))return;
    const {error}=await sb.from('reviews').delete().eq('id',d.dataset.rvdel);if(error){toast(errMsg(error));return}toast('Ulasan dihapus');reviewsModal(uid,name)}}
function rateModal(it,existing){let st=existing?.stars||0;
  modal(`<div class="mi" data-ic="star"></div><h2>Beri rating ${esc(it.by||'penjual')}</h2><p>Untuk “${esc(it.t)}”. Rating membantu mahasiswa lain memilih penjual yang terpercaya.</p>
   <div class="starpick" id="spk">${[1,2,3,4,5].map(k=>`<button type="button" data-k="${k}" aria-label="${k} bintang">${svg('star')}</button>`).join('')}</div>
   <div class="stl" id="stl"></div>
   <textarea class="field" id="rvC" rows="3" maxlength="300" placeholder="Ceritakan pengalamanmu (opsional)">${esc(existing?.comment||'')}</textarea>
   <div class="err" id="rvE"></div>
   <div class="row2"><button class="btn ghost" data-close>Nanti</button><button class="btn" id="rvOk">Kirim rating</button></div>`);
  const LBL=['','Buruk','Kurang','Cukup','Baik','Sangat baik'];
  const draw=()=>{[...$('#spk').children].forEach((b,k)=>b.classList.toggle('on',k<st));$('#stl').textContent=st?LBL[st]:'Ketuk bintang'};draw();
  $('#spk').onclick=e=>{const b=e.target.closest('[data-k]');if(b){st=+b.dataset.k;$('#rvE').textContent='';draw()}};
  $('#rvOk').onclick=async()=>{if(!st){$('#rvE').textContent='Pilih jumlah bintang dulu.';return}
    $('#rvOk').disabled=true;const comment=$('#rvC').value.trim()||null;
    const {error}=existing?await sb.from('reviews').update({stars:st,comment}).eq('id',existing.id)
      :await sb.from('reviews').insert({item_id:it.id,seller:it.owner,reviewer:S.uid,stars:st,comment});
    if(error){$('#rvE').textContent=errMsg(error);$('#rvOk').disabled=false;return}
    closeModal();toast('Terima kasih! Rating terkirim.');if(cur==='profile')renderProfile();else if(cur==='detail')renderDetail(it.id);else if(cur==='chat')$('#chRate').hidden=true}}

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

/* Tanda dibaca: ✓ terkirim, ✓✓ hijau = sudah dibaca lawan bicara */
const myReadAt=cv=>Date.parse(cv.buyer_id===S.uid?cv.buyer_read_at:cv.seller_read_at)||0;
const theirReadAt=cv=>Date.parse(cv.buyer_id===S.uid?cv.seller_read_at:cv.buyer_read_at)||0;
let UNREAD={};
async function refreshUnread(){const {data,error}=await sb.rpc('unread_counts');if(error)return UNREAD;
  UNREAD={};(data||[]).forEach(r=>UNREAD[r.conversation_id]=+r.n);
  const tot=Object.values(UNREAD).reduce((a,b)=>a+b,0);$('#nDot').hidden=!tot;$('#nDot').textContent=tot>9?'9+':tot||'';return UNREAD}
let chatsT;const renderChatsSoon=()=>{clearTimeout(chatsT);chatsT=setTimeout(()=>cur==='chats'&&renderChats(),250)};
async function renderChats(){const L=$('#cList');
  if(!L.children.length)L.innerHTML=`<div class="empty">Memuat chat…</div>`;
  const [{data,error}]=await Promise.all([sb.from('conversations').select(CONV_SEL).order('last_message_at',{ascending:false}),refreshUnread()]);
  if(cur!=='chats')return;
  if(error){L.innerHTML=`<div class="empty">${esc(errMsg(error))}</div>`;return}
  L.innerHTML=data.length?data.map(cv=>{const n=UNREAD[cv.id]||0,mineLast=cv.last_sender===S.uid,seen=mineLast&&theirReadAt(cv)>=Date.parse(cv.last_message_at);
    return `<button class="crow-i ${n?'unread':''}" data-cv="${cv.id}"><img src="${esc(cv.items?.photos?.[0]||'')}" alt="">
    <div class="tx"><b>${esc(otherName(cv)||'Mahasiswa')}</b><small>${cv.seller_id===S.uid?'Barangmu · ':''}${esc(cv.items?.title||'Barang dihapus')}</small>
    <p>${mineLast&&cv.last_message?`<i class="tk ${seen?'rd':''}" aria-label="${seen?'Dibaca':'Terkirim'}">${svg(seen?'dbl':'check')}</i>`:''}${cv.last_message?(mineLast?'Kamu: ':'')+esc(cv.last_message):'Belum ada pesan'}</p></div>
    <div class="cmeta"><time>${ago(Date.parse(cv.last_message_at))}</time>${n?`<em class="ub" aria-label="${n} pesan belum dibaca">${n>99?'99+':n}</em>`:''}</div></button>`}).join('')
   :`<div class="empty">Belum ada chat.<br>Buka barang di beranda lalu ketuk <b>Chat pemilik</b>.</div>`;}
$('#cList').onclick=e=>{const b=e.target.closest('[data-cv]');if(b)go('chat',{id:b.dataset.cv})};

let seenMsg=new Set(),lastDay='',OTHER_READ=0,readT;
function paintTicks(){document.querySelectorAll('#msgs .msg.me:not(.pending):not(.rd)').forEach(el=>{if(+el.dataset.ts<=OTHER_READ){el.classList.add('rd');const t=el.querySelector('.tk');if(t)t.innerHTML=svg('dbl')}})}
function markRead(id){clearTimeout(readT);readT=setTimeout(async()=>{if(cur!=='chat'||curConv!==id||document.hidden)return;await sb.rpc('mark_read',{p_conv:id});refreshUnread()},300)}
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&cur==='chat'&&curConv)markRead(curConv)});
function appendMsg(m,pending){if(m.id&&seenMsg.has(m.id))return;if(m.id)seenMsg.add(m.id);
  const M=$('#msgs');M.querySelector('.chempty')?.remove();
  const d=dayTxt(m.created_at);if(d!==lastDay){lastDay=d;M.insertAdjacentHTML('beforeend',`<div class="mday">${d}</div>`)}
  const me=m.sender===S.uid,ts=Date.parse(m.created_at),rd=me&&!pending&&ts<=OTHER_READ;
  M.insertAdjacentHTML('beforeend',`<div class="msg ${me?'me':''} ${pending?'pending':''} ${rd?'rd':''}" ${m.id?`data-mid="${m.id}"`:''} data-ts="${ts}">${esc(m.body)}<time>${hm(m.created_at)}${me?`<i class="tk">${svg(rd?'dbl':'check')}</i>`:''}</time></div>`);
  M.scrollTop=M.scrollHeight;}
function templates(cv){const it=cv.items||{},cod=it.cod_place||campusOf(it.campus).cod[it.cod]||'titik COD';
  if(cv.seller_id===S.uid)return['Masih ada, kak!',`Bisa ketemu di ${cod} ya.`,'Kapan kamu bisa COD?'];
  return[`Halo, ${it.title||'barang ini'} masih ada?`,`Bisa COD di ${cod}?`,
    it.mode==='Sell'?'Harganya masih bisa nego?':it.mode==='Swap'?`Aku punya barang buat ditukar, boleh kirim fotonya?`:'Boleh aku ambil barangnya?'];}
async function renderChat(id){curConv=id;seenMsg=new Set();lastDay='';OTHER_READ=0;$('#chFlag').hidden=true;
  $('#msgs').innerHTML='<div class="chempty">Memuat pesan…</div>';$('#chHead').innerHTML='';$('#tpls').innerHTML='';$('#chI').value='';
  const [{data:cv,error},{data:msgs},{data:deals}]=await Promise.all([
    sb.from('conversations').select(CONV_SEL).eq('id',id).single(),
    sb.from('messages').select('*').eq('conversation_id',id).order('created_at',{ascending:true}).limit(500),
    sb.from('deals').select('*').eq('conversation_id',id).order('created_at',{ascending:true})]);
  if(curConv!==id)return;
  if(error||!cv){toast('Chat tidak ditemukan');go('chats');return}
  curCv=cv;OTHER_READ=theirReadAt(cv);const it=cv.items||{};markRead(id);
  $('#chFlag').hidden=false;$('#chFlag').onclick=()=>reportModal({target:cv.buyer_id===S.uid?cv.seller_id:cv.buyer_id,name:otherName(cv)||'pengguna ini',item:it.id&&(it.owner===S.uid?it.taken_by:it.owner)===(cv.buyer_id===S.uid?cv.seller_id:cv.buyer_id)?it.id:null,title:it.title,conv:cv.id});
  $('#chHead').innerHTML=`<img src="${esc(it.photos?.[0]||'')}" alt=""><div><b>${esc(otherName(cv)||'Mahasiswa')} <span class="vb">${VB}</span></b><small>${esc(it.title||'Barang dihapus')} · ${it.mode==='Sell'?rp(it.price):it.mode==='Swap'?'Tukar':'Gratis'}</small></div>`;
  $('#chHead').onclick=()=>it.id&&openDetail(it.id);
  const feed=[...(msgs||[]).map(m=>({...m,_t:'m'})),...(deals||[]).map(d=>({...d,_t:'d'}))].sort((a,b)=>a.created_at<b.created_at?-1:1);
  $('#msgs').innerHTML=feed.length?'':`<div class="chempty">Mulai obrolan dengan ${esc(otherName(cv)||'pemilik')}.<br>Pakai template di bawah, atau ketuk ikon kalender untuk mengatur COD.</div>`;
  feed.forEach(x=>x._t==='m'?appendMsg(x):putDeal(x));
  $('#chCod').hidden=!it.id||it.status==='done';
  $('#chRate').hidden=true;
  if(it.status==='done'&&it.taken_by===S.uid)myReview(it.id).then(r=>{if(curConv!==id||r)return;const b=$('#chRate');b.hidden=false;
    b.onclick=()=>rateModal({id:it.id,t:it.title,owner:it.owner,by:otherName(cv)},null)});
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
  seenMsg.add(data.id);if(tmpEl){tmpEl.classList.remove('pending');tmpEl.dataset.mid=data.id;tmpEl.dataset.ts=Date.parse(data.created_at)}}

/* ---------- Realtime: beranda live + pesan masuk ---------- */
let channel=null,homeT;
function startRealtime(){refreshUnread();if(channel)return;
  channel=sb.channel('reuse-live')
   .on('postgres_changes',{event:'INSERT',schema:'public',table:'items'},({new:r})=>{
     if(r.owner===S.uid)return;
     if(cur==='home'&&r.campus===S.filter.campus){clearTimeout(homeT);homeT=setTimeout(renderHome,400);toast('Ada barang baru di '+campusOf(r.campus).s)}})
   .on('postgres_changes',{event:'INSERT',schema:'public',table:'messages'},({new:m})=>{
     if(cur==='chat'&&m.conversation_id===curConv){appendMsg(m);if(m.sender!==S.uid)markRead(m.conversation_id);return}
     if(m.sender===S.uid)return;
     if(cur==='chats')renderChatsSoon();else{refreshUnread();toast('Pesan baru: '+m.body.slice(0,40))}})
   .on('postgres_changes',{event:'UPDATE',schema:'public',table:'conversations'},({new:cv})=>{
     if(cur==='chat'&&cv.id===curConv){const t=theirReadAt(cv);if(t>OTHER_READ){OTHER_READ=t;paintTicks()}}
     else if(cur==='chats')renderChatsSoon()})
   .on('postgres_changes',{event:'INSERT',schema:'public',table:'reports'},({new:r})=>{if(!S.admin||r.reporter===S.uid)return;
     refreshPending();toast('Komplain baru masuk. Buka Profil → Panel admin.');if(cur==='admin'&&admTab==='komplain')renderAdmin()})
   .on('postgres_changes',{event:'UPDATE',schema:'public',table:'reports'},({new:r})=>{if(S.admin)refreshPending();if(r.reporter!==S.uid)return;
     toast(`Komplainmu ${RSTAT[r.status].toLowerCase()}${r.admin_note?': '+r.admin_note:''}`);if(cur==='profile')renderProfile()})
   .on('postgres_changes',{event:'INSERT',schema:'public',table:'deals'},({new:d})=>onDeal(d,true))
   .on('postgres_changes',{event:'UPDATE',schema:'public',table:'deals'},({new:d})=>onDeal(d,false))
   .on('postgres_changes',{event:'INSERT',schema:'public',table:'payments'},({new:p})=>{if(!S.admin||p.owner===S.uid||p.status!=='pending')return;
     refreshPending();toast('Bukti bayar baru masuk. Buka Profil → Panel admin.');if(cur==='admin'&&admTab==='bayar')renderAdmin()})
   .on('postgres_changes',{event:'UPDATE',schema:'public',table:'items'},({new:r,old:o})=>{
     if(r.taken_by===S.uid&&r.status==='done'&&r.owner!==S.uid){delete S.cache[r.id];$('#pfDot').hidden=false;
       toast(`“${r.title}” sudah jadi milikmu. Beri rating penjual di Profil.`);if(cur==='profile')renderProfile()}})
   .on('postgres_changes',{event:'INSERT',schema:'public',table:'reviews'},({new:v})=>{if(v.seller!==S.uid)return;
     toast(`Kamu dapat rating ${v.stars}★ dari pembeli`);if(cur==='profile')renderProfile()})
   .on('postgres_changes',{event:'UPDATE',schema:'public',table:'payments'},({new:p})=>{if(S.admin)refreshPending();if(p.owner!==S.uid)return;
     delete S.cache[p.item_id];const sd=p.kind==='sundul';
     toast(p.status==='approved'?(sd?'Sundul disetujui. Barangmu di urutan teratas 24 jam!':'Pembayaran disetujui. Barangmu sudah tampil!'):(sd?'Bayar sundul ditolak':'Pembayaran ditolak')+(p.note?': '+p.note:''));
     if(cur==='pay'&&payItem===p.item_id)renderPay(p.item_id,payKind);else if(cur==='detail'&&sd)renderDetail(p.item_id);else if(cur==='profile')renderProfile();})
   .subscribe();}
function onDeal(d,isNew){
  if(cur==='chat'&&d.conversation_id===curConv){putDeal(d);return}
  const fromOther=isNew?d.proposer!==S.uid:d.proposer===S.uid;
  if(!fromOther)return;
  if(cur==='chats')renderChatsSoon();else{$('#nDot').hidden=false;toast(isNew?'Ajakan COD baru di chat':'Ajakan COD-mu '+DEAL_TXT[d.status].toLowerCase())}}

/* ---------- Profil ---------- */
async function renderProfile(){const c=myCampus();$('#pfAv').textContent=S.me.name[0];$('#pfN').innerHTML=esc(S.me.name)+` <span class="vb">${VB}</span>`;
  $('#pfE').textContent=S.email;$('#pfV').innerHTML=VB+`<span><b>Terverifikasi via ${PWMODE?'email kampus':'OTP'}</b><br>Lencana ini tampil di setiap barang yang kamu posting.</span>`;
  $('#pfC').textContent=c.s;$('#adminBtn').hidden=!S.admin;
  $('#pfStats').innerHTML=skel(3);$('#pfItems').innerHTML='';
  const [d,rt,todo,reps]=await Promise.all([myImpact(),sellerRating(S.uid),toRate(),myReports()]);if(cur!=='profile')return;
  $('#pfReports').hidden=!reps.length;
  $('#pfReports').innerHTML=reps.length?`<h3>Komplain saya</h3>`+reps.map(r=>`<div class="rep"><div class="rh"><b>${esc(r.reason)}</b><em class="rst ${r.status}">${RSTAT[r.status]}</em></div>
    <small>Terhadap ${esc(r.tg?.name||'pengguna')}${r.item_title?' · '+esc(r.item_title):''} · ${ago(Date.parse(r.created_at))} lalu</small>
    ${r.admin_note?`<p class="anote">${svg('shield')}<span><b>Admin:</b> ${esc(r.admin_note)}</span></p>`:''}</div>`).join(''):'';
  $('#pfRate').innerHTML=rt&&rt.total?`${starRow(rt.avg_stars)}<b>${fmtStar(rt.avg_stars)}</b><span>dari ${rt.total} ulasan pembeli</span>${svg('right')}`:`${starRow(0)}<span>Belum ada rating sebagai penjual</span>`;
  $('#pfRate').onclick=()=>rt&&rt.total&&reviewsModal(S.uid,S.me.name);
  $('#pfTodo').hidden=!todo.length;
  $('#pfTodo').innerHTML=todo.length?`<h3>Beri rating</h3>`+todo.map(x=>`<div class="myi"><img src="${esc(x.photos?.[0]||'')}" alt=""><span><b>${esc(x.title)}</b><small>dari ${esc(x.profiles?.name||'penjual')}</small></span><button class="btn sm" data-rate="${x.id}">${svg('star')}Nilai</button></div>`).join(''):'';
  $('#pfTodo').onclick=e=>{const b=e.target.closest('[data-rate]');if(!b)return;const x=todo.find(t=>t.id===b.dataset.rate);rateModal({id:x.id,t:x.title,owner:x.owner,by:x.profiles?.name},null)};
  $('#pfStats').innerHTML=[['Diposting',d.posted],['Selesai',d.done],['Didapat',d.got],['COD disepakati',d.deals]].map(([l,n])=>`<div><b>${n}</b><small>${l}</small></div>`).join('');
  const lines=impactText(d);
  $('#pfImpact').innerHTML=lines.length?lines.map(l=>`<div>${svg('check')}<span>${l}</span></div>`).join(''):'<p>Belum ada barang yang selesai. Tandai barangmu “selesai” setelah berpindah tangan untuk melihat dampaknya di sini.</p>';
  $('#pfItems').innerHTML=d.items.length?d.items.map(x=>`<button class="myi" data-id="${x.id}"><img src="${esc(x.img[0])}" alt=""><span><b>${esc(x.t)}</b><small>${x.m} · ${ago(x.ts)} lalu</small></span><em class="${x.pay!=='approved'?'wait':x.status==='done'?'done':''}">${x.pay==='pending'?'Belum tampil':x.pay==='rejected'?'Bayar ditolak':x.status==='done'?'Selesai':boosted(x)?'Disundul':'Tersedia'}</em></button>`).join('')
    :'<p class="muted">Belum ada barang. Posting lewat tombol +.</p>';}
$('#pfItems').onclick=e=>{const b=e.target.closest('[data-id]');if(b)openDetail(b.dataset.id)};
$('#adminBtn').onclick=()=>{if(PEND_PAY>0)admTab='bayar';else if(PEND_REP>0)admTab='komplain';go('admin')};
let PEND=0;
let PEND_PAY=0,PEND_REP=0;
async function refreshPending(){if(!S.admin)return;const {data}=await sb.rpc('admin_pay_stats');PEND_PAY=data?.pending||0;PEND_REP=data?.reports_open||0;PEND=PEND_PAY+PEND_REP;
  $('#pfDot').hidden=!PEND;$('#admCount').textContent=[PEND_PAY&&PEND_PAY+' bayar',PEND_REP&&PEND_REP+' komplain'].filter(Boolean).join(' · ');$('#admCount').hidden=!PEND}
$('#editName').onclick=()=>{modal(`<h2>Ubah nama</h2><p>Nama ini tampil di barang dan chat kamu.</p><input class="field" id="enI" maxlength="40" value="${esc(S.me.name)}"><div class="err" id="enE"></div><div class="row2"><button class="btn ghost" data-close>Batal</button><button class="btn" id="enOk">Simpan</button></div>`);
  $('#enOk').onclick=async()=>{const v=$('#enI').value.trim();if(v.length<2){$('#enE').textContent='Nama minimal 2 huruf.';return}
    $('#enOk').disabled=true;const {data,error}=await sb.from('profiles').update({name:v}).eq('id',S.uid).select(PROF_COLS).single();
    if(error){$('#enE').textContent=errMsg(error);$('#enOk').disabled=false;return}
    S.me=data;S.cache={};closeModal();toast('Nama disimpan');renderProfile()}};

/* ---------- Komplain ---------- */
const REASONS=['Penipuan','Barang tidak sesuai','Tidak datang saat COD','Kata-kata kasar','Konten tidak pantas','Lainnya'];
const RSTAT={open:'Terkirim',process:'Sedang diproses',resolved:'Selesai',rejected:'Ditolak'};
const REP_SEL='*, rp:profiles!reports_reporter_fkey(name), tg:profiles!reports_target_fkey(name)';
async function myReports(){const {data}=await sb.from('reports').select(REP_SEL).eq('reporter',S.uid).order('created_at',{ascending:false}).limit(20);return data||[]}
function reportModal({target,name,item,title,conv}){let why='';
  modal(`<div class="mi" data-ic="flag"></div><h2>Komplain</h2><p>Laporkan <b>${esc(name)}</b>${title?` terkait “${esc(title)}”`:''}. Hanya admin yang bisa membaca komplain ini, ${esc(name)} tidak diberi tahu siapa pelapornya.</p>
   <span class="lbl">Masalahnya apa?</span><div class="rsn" id="rsn">${REASONS.map(r=>`<button type="button" data-r="${esc(r)}">${esc(r)}</button>`).join('')}</div>
   <label class="lbl" for="rpD">Ceritakan singkat <small>(opsional)</small></label><textarea class="field" id="rpD" rows="3" maxlength="1000" placeholder="Mis. barang yang datang beda dengan foto, penjual tidak datang di titik COD…"></textarea>
   <div class="err" id="rpE"></div><div class="row2"><button class="btn ghost" data-close>Batal</button><button class="btn" id="rpOk">Kirim komplain</button></div>`);
  $('#rsn').onclick=e=>{const b=e.target.closest('[data-r]');if(!b)return;why=b.dataset.r;$('#rsn').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));$('#rpE').textContent=''};
  $('#rpOk').onclick=async()=>{if(!why){$('#rpE').textContent='Pilih salah satu masalah dulu.';return}
    $('#rpOk').disabled=true;const {error}=await sb.from('reports').insert({reporter:S.uid,target,item_id:item||null,conversation_id:conv||null,reason:why,detail:$('#rpD').value.trim()||null});
    if(error){$('#rpE').textContent=error.code==='23505'||/duplicate|reports_one_open/.test(error.message)?'Kamu sudah punya komplain aktif untuk ini. Lihat statusnya di Profil.':errMsg(error);$('#rpOk').disabled=false;return}
    closeModal();toast('Komplain terkirim. Admin akan menindaklanjuti, pantau statusnya di Profil.')}}

/* ---------- Panel admin ---------- */
let admTab='ringkas';
async function renderAdmin(){if(!S.admin){go('profile');return}
  document.querySelectorAll('#admTabs button').forEach(b=>b.classList.toggle('on',b.dataset.at===admTab));
  const B=$('#admBody');B.innerHTML=skel(4);
  try{({ringkas:admSummary,bayar:admPay,komplain:admReports,barang:admItems,pengguna:admUsers,sundul:admSundul,kampus:admCampus}[admTab])(B)}catch(e){B.innerHTML=`<div class="empty">${esc(errMsg(e))}</div>`}}
$('#admTabs').onclick=e=>{const b=e.target.closest('[data-at]');if(b){admTab=b.dataset.at;renderAdmin()}};
$('#admBack').onclick=()=>go('profile');
const tile=(n,l,s2)=>`<div class="tile"><b>${n}</b><small>${l}</small>${s2?`<em>${s2}</em>`:''}</div>`;
async function admSummary(B){const {data:st,error}=await sb.rpc('admin_stats');if(error)throw error;
  const bm=st.by_mode||{},tot=(bm.Sell||0)+(bm.Swap||0)+(bm.Donate||0)||1;
  B.innerHTML=`<div class="tiles">${tile(st.users,'Pengguna',`+${st.users_7d} dalam 7 hari`)}${tile(st.items_active,'Barang aktif')}${tile(st.items_done,'Barang selesai',st.value_done?rp(st.value_done)+' terjual':'')}
    ${tile(st.conversations,'Percakapan',`${st.messages} pesan`)}${tile(st.deals_accepted,'COD disepakati',`dari ${st.deals_total} ajakan`)}${tile(st.sundul_clicks,'Tombol Sundul',`${st.sundul_users} pengguna`)}</div><div id="admPend"></div>
   <h3 class="ah">Barang per mode</h3><div class="bars">${['Sell','Swap','Donate'].map(m=>`<div><span>${m}</span><i style="--w:${Math.round((bm[m]||0)/tot*100)}%" class="m-${m}"></i><b>${bm[m]||0}</b></div>`).join('')}</div>
   <h3 class="ah">Per kampus</h3><div class="atable"><div class="ar head"><span>Kampus</span><span>Pengguna</span><span>Barang</span></div>${(st.by_campus||[]).map(r=>`<div class="ar"><span>${esc(campusOf(r.campus).s)}</span><span>${r.users}</span><span>${r.items}</span></div>`).join('')}</div>
   <p class="muted">Isi chat tidak bisa dibaca admin. Yang terlihat hanya jumlahnya.</p>`;
  const {data:ps}=await sb.rpc('admin_pay_stats');if(ps&&ps.pending)$('#admPend').innerHTML=`<button class="pendbar" id="goPay">${svg('qr')}<span><b>${ps.pending} pembayaran menunggu verifikasi</b><br>Ketuk untuk memeriksa bukti bayar.</span></button>`;
  if($('#goPay'))$('#goPay').onclick=()=>{admTab='bayar';renderAdmin()};}
async function admItems(B){const {data,error}=await sb.from('items').select(ITEM_SEL).order('created_at',{ascending:false}).limit(100);if(error)throw error;
  const items=data.map(mapItem).map(cacheIt);
  B.innerHTML=`<p class="muted">${items.length} barang terbaru dari semua kampus. Hapus barang yang melanggar aturan.</p>`+items.map(x=>`<div class="myi"><img src="${esc(x.img[0])}" alt="" data-id="${x.id}"><span data-id="${x.id}"><b>${esc(x.t)}</b><small>${esc(x.by)} · ${esc(campusOf(x.campus).s)} · ${x.m} · ${ago(x.ts)} lalu</small></span><em class="${x.pay!=='approved'?'wait':x.status==='done'?'done':''}">${x.pay==='pending'?'Belum bayar':x.pay==='rejected'?'Ditolak':x.status==='done'?'Selesai':'Aktif'}</em><button class="adel" data-del="${x.id}" aria-label="Hapus">${svg('trash')}</button></div>`).join('');
  B.onclick=async e=>{const o=e.target.closest('[data-id]');if(o&&!e.target.closest('[data-del]')){openDetail(o.dataset.id);return}
    const d=e.target.closest('[data-del]');if(!d)return;const x=S.cache[d.dataset.del];
    modal(`<h2>Hapus sebagai admin?</h2><p>“${esc(x.t)}” milik ${esc(x.by)} akan dihapus dari semua akun, termasuk chat terkait. Tindakan ini tidak bisa dibatalkan.</p><div class="row2"><button class="btn ghost" data-close>Batal</button><button class="btn" id="adOk" style="background:#B3261E">Hapus</button></div>`);
    $('#adOk').onclick=async()=>{$('#adOk').disabled=true;const {error}=await sb.from('items').delete().eq('id',x.id);
      if(error){toast(errMsg(error));$('#adOk').disabled=false;return}delete S.cache[x.id];closeModal();toast('Barang dihapus');renderAdmin()}};}
async function admPay(B){await loadSettings();
  const [{data:pend,error},{data:done},{data:st}]=await Promise.all([
    sb.from('payments').select('*, items(title,photos,campus), owner_p:profiles!payments_owner_fkey(name)').eq('status','pending').order('created_at',{ascending:true}),
    sb.from('payments').select('*, items(title), owner_p:profiles!payments_owner_fkey(name)').neq('status','pending').order('decided_at',{ascending:false}).limit(15),
    sb.rpc('admin_pay_stats')]);
  if(error)throw error;
  const urls={};await Promise.all((pend||[]).map(async p=>{const {data}=await sb.storage.from(PAY_BUCKET).createSignedUrl(p.proof_path,600);urls[p.id]=data?.signedUrl}));
  B.innerHTML=`<div class="tiles">${tile(st?.pending??0,'Menunggu verifikasi')}${tile(rp(st?.revenue??0),'Pemasukan',`${st?.approved??0} pembayaran · ${st?.sundul_paid??0} sundul`)}</div>
   <h3 class="ah">Pengaturan QRIS</h3>
   <div class="cpc"><div class="qrset">${QRIS&&!QRIS_DEMO?`<img src="${esc(QRIS)}" alt="QRIS">`:`<div class="qrnone">${svg('qr')}<span>${QRIS_DEMO?'QRIS demo':'Belum ada QRIS'}</span></div>`}
    <div><div class="row2"><div><label class="lbl" for="stFee">Biaya posting (Rp)</label><input class="field" id="stFee" inputmode="numeric" value="${FEE_SET}"></div>
    <div><label class="lbl" for="stSFee">Biaya sundul (Rp)</label><input class="field" id="stSFee" inputmode="numeric" value="${SFEE_SET}"></div></div>
    <label class="lbl" for="stName">Nama di QRIS</label><input class="field" id="stName" maxlength="60" value="${esc(QRIS_NAME)}"></div></div>
    <label class="proof sm"><input type="file" accept="image/png,image/jpeg,image/webp" id="stQr" hidden><span id="stQrT">${svg('qr')}${QRIS?'Ganti gambar QRIS':'Upload gambar QRIS'}</span></label>
    <label class="cfchk autochk"><input type="checkbox" id="stAuto" ${PAY_AUTO?'checked':''}> <span><b>Konfirmasi otomatis</b><br><small>Pembayaran langsung disetujui saat pengguna menekan “Saya sudah bayar”, tanpa bukti dan tanpa verifikasi admin.</small></span></label>
    ${QRIS_DEMO?`<div class="demotag">QRIS demo sedang aktif (tidak menerima uang). Upload QRIS asli untuk menerima pembayaran sungguhan.</div>`:''}<p class="muted">${QRIS_PAYLOAD?'Nominal otomatis aktif: pembeli tidak perlu mengetik nominal.':QRIS?'QRIS ini belum terbaca, jadi penjual harus mengetik nominal. Upload ulang gambar yang lebih jelas.':''} Isi 0 untuk menggratiskan posting atau sundul. Barang yang diposting admin selalu langsung tampil.</p>
    <div class="err" id="stE"></div><button class="btn" id="stSave">Simpan pengaturan</button></div>
   <h3 class="ah">Menunggu verifikasi (${(pend||[]).length})</h3>`+
   ((pend||[]).length?pend.map(p=>`<div class="payrow" data-pid="${p.id}" data-kind="${p.kind||'post'}">
     <a href="${esc(urls[p.id]||'#')}" target="_blank" rel="noopener" class="proofimg">${urls[p.id]?`<img src="${esc(urls[p.id])}" alt="Bukti bayar">`:'Bukti'}</a>
     <div class="pinfo"><b>${p.kind==='sundul'?'<em class="kind">Sundul</em>':'<em class="kind post">Posting</em>'}${esc(p.items?.title||'Barang dihapus')}</b><small>${esc(p.owner_p?.name||'Mahasiswa')} · ${esc(campusOf(p.items?.campus).s)} · ${ago(Date.parse(p.created_at))} lalu</small>
      <div class="amt sm">${rp(p.amount)}</div>
      <div class="da"><button class="btn ghost" data-pdec="rejected">Tolak</button><button class="btn" data-pdec="approved">Setujui</button></div></div></div>`).join('')
    :`<p class="muted">${PAY_AUTO?'Konfirmasi otomatis aktif, jadi tidak ada yang perlu diverifikasi.':'Tidak ada pembayaran yang menunggu.'}</p>`)+
   `<h3 class="ah">Riwayat</h3><div class="atable">${(done||[]).map(p=>`<div class="ar"><span>${p.kind==='sundul'?'<em class="kind">Sundul</em>':''}${esc(p.items?.title||'Barang dihapus')}<small style="display:block;color:var(--mut)">${esc(p.owner_p?.name||'')}${p.note&&p.note!=='Otomatis'?' · '+esc(p.note):''}</small></span><span>${rp(p.amount)}</span><span><em class="pst ${p.status}">${p.status==='approved'?(p.note==='Otomatis'?'Otomatis':'Setuju'):'Tolak'}</em></span></div>`).join('')||'<div class="ar"><span>Belum ada</span></div>'}</div>`;
  let newQr=null;
  let newPayload=null;
  $('#stQr').onchange=async e=>{const f=e.target.files[0],E=$('#stE');if(!f)return;if(f.size>3*1024*1024){E.textContent='Maksimal 3 MB.';return}
    E.textContent='';$('#stQrT').textContent='Membaca QRIS…';
    try{await loadScript('js/vendor/jsqr.js');const code=await readQr(f);
      const bad=code?window.QRIS.check(code):'Kode QR tidak terbaca. Pakai gambar QRIS yang jelas dan tidak terpotong.';
      if(bad){E.textContent=bad;$('#stQrT').textContent='Upload ulang gambar QRIS';return}
      newQr=f;newPayload=code;const m=window.QRIS.merchant(code);if(m)$('#stName').value=m;
      $('#stQrT').textContent='QRIS terbaca: '+(m||f.name)+' · nominal akan otomatis'}catch(_){E.textContent='Gagal membaca gambar.'}};
  $('#stSave').onclick=async()=>{const fee=+$('#stFee').value.replace(/\D/g,''),sfee=+$('#stSFee').value.replace(/\D/g,''),name=$('#stName').value.trim()||'ReUse',E=$('#stE');
    if(!(fee>=0&&fee<=1000000&&sfee>=0&&sfee<=1000000)){E.textContent='Biaya tidak valid.';return}
    $('#stSave').disabled=true;let url=QRIS;
    if(newQr){const path=`qris-${Date.now()}.${(newQr.type.split('/')[1]||'png').replace('jpeg','jpg')}`;
      const up=await sb.storage.from('site').upload(path,newQr,{contentType:newQr.type});
      if(up.error){E.textContent=errMsg(up.error);$('#stSave').disabled=false;return}
      url=sb.storage.from('site').getPublicUrl(path).data.publicUrl}
    for(const [key,value] of [['post_fee',fee],['sundul_fee',sfee],['pay_auto',$('#stAuto').checked],['qris_name',name],['qris_url',url],...(newPayload?[['qris_payload',newPayload],['qris_demo',false]]:[])]){
      const {error}=await sb.from('settings').update({value}).eq('key',key);
      if(error){E.textContent=errMsg(error);$('#stSave').disabled=false;return}}
    toast('Pengaturan pembayaran disimpan');renderAdmin()};
  B.onclick=async e=>{const b=e.target.closest('[data-pdec]');if(!b)return;const row=b.closest('[data-pid]'),pid=row.dataset.pid,st=b.dataset.pdec,sd=row.dataset.kind==='sundul';
    const decide=async note=>{const {error}=await sb.from('payments').update({status:st,note:note||null}).eq('id',pid);
      if(error){toast(errMsg(error));return}closeModal();toast(st==='approved'?(sd?'Disetujui. Barang naik ke atas 24 jam.':'Disetujui. Barang sudah tampil.'):'Pembayaran ditolak');refreshPending();renderAdmin()};
    if(st==='approved'){b.disabled=true;decide(null);return}
    modal(`<h2>Tolak pembayaran?</h2><p>Penjual akan melihat alasan ini dan bisa mengirim ulang bukti.</p><input class="field" id="rjI" maxlength="200" value="Nominal atau bukti tidak sesuai"><div class="row2" style="margin-top:14px"><button class="btn ghost" data-close>Batal</button><button class="btn" id="rjOk" style="background:#B3261E">Tolak</button></div>`);
    $('#rjOk').onclick=()=>{$('#rjOk').disabled=true;decide($('#rjI').value.trim())}};}
async function admCampus(B){await loadCampuses();
  B.innerHTML=`<p class="muted">Daftar kampus, titik COD, dan area kos yang muncul di aplikasi. Kampus nonaktif tidak bisa dipilih pengguna baru.</p>
   <button class="btn" id="cpAdd" style="margin-bottom:12px">${svg('plus')}Tambah kampus</button>`+
   CAMPUS.map(c=>`<div class="cpc ${c.active===false?'off':''}"><div class="cph"><span class="ini">${esc(c.s)}</span><span><b>${esc(c.n)}</b><small>${esc(c.loc)} · @${esc(c.dom)}${c.active===false?' · nonaktif':''}</small></span><button class="btn ghost" data-cp="${esc(c.id)}">Ubah</button></div>
    <div class="cpl">${svg('pin')}<span>${c.cod.map(esc).join(' · ')}</span></div>
    ${c.area.length?`<div class="cpl">${svg('home')}<span>${c.area.map(esc).join(' · ')}</span></div>`:''}</div>`).join('');
  $('#cpAdd').onclick=()=>campusForm(null);
  B.onclick=e=>{const b=e.target.closest('[data-cp]');if(b)campusForm(CAMPUS.find(c=>c.id===b.dataset.cp))};}
function campusForm(c){const isNew=!c;c=c||{id:'',n:'',s:'',loc:'',dom:'',cod:[],area:[],active:true};
  modal(`<h2>${isNew?'Tambah kampus':'Ubah '+esc(c.s)}</h2>
   ${isNew?`<label class="lbl" for="cfId">Kode kampus <small>(huruf kecil, tidak bisa diubah)</small></label><input class="field" id="cfId" maxlength="20" placeholder="mis. unair">`:''}
   <label class="lbl" for="cfN">Nama lengkap</label><input class="field" id="cfN" maxlength="80" value="${esc(c.n)}" placeholder="Universitas Airlangga">
   <div class="row2"><div><label class="lbl" for="cfS">Singkatan</label><input class="field" id="cfS" maxlength="16" value="${esc(c.s)}" placeholder="Unair"></div>
    <div><label class="lbl" for="cfL">Lokasi</label><input class="field" id="cfL" maxlength="40" value="${esc(c.loc)}" placeholder="Surabaya"></div></div>
   <label class="lbl" for="cfD">Domain email</label><input class="field" id="cfD" maxlength="60" value="${esc(c.dom)}" placeholder="unair.ac.id">
   <label class="lbl" for="cfC">Titik COD <small>(satu per baris, maks. 8)</small></label><textarea class="field" id="cfC" rows="5">${esc(c.cod.join('\n'))}</textarea>
   <label class="lbl" for="cfA">Area kos <small>(satu per baris, boleh kosong)</small></label><textarea class="field" id="cfA" rows="4">${esc(c.area.join('\n'))}</textarea>
   <label class="cfchk"><input type="checkbox" id="cfOn" ${c.active!==false?'checked':''}> Aktif (bisa dipilih pengguna)</label>
   <p class="muted">Mengubah titik COD tidak mengubah barang yang sudah diposting.</p>
   <div class="err" id="cfE"></div>
   <div class="row2"><button class="btn ghost" data-close>Batal</button><button class="btn" id="cfOk">Simpan</button></div>`);
  $('#cfOk').onclick=async()=>{const lines=v=>[...new Set(v.split('\n').map(x=>x.trim()).filter(Boolean))];
    const row={name:$('#cfN').value.trim(),short:$('#cfS').value.trim(),loc:$('#cfL').value.trim(),domain:$('#cfD').value.trim().toLowerCase().replace(/^@/,''),
      cod:lines($('#cfC').value),areas:lines($('#cfA').value),active:$('#cfOn').checked};
    const E=$('#cfE');
    if(isNew){row.id=$('#cfId').value.trim().toLowerCase();if(!/^[a-z0-9-]{2,20}$/.test(row.id)){E.textContent='Kode kampus 2–20 huruf kecil/angka, tanpa spasi.';return}
      if(CAMPUS.some(x=>x.id===row.id)){E.textContent='Kode kampus sudah dipakai.';return}}
    if(row.name.length<3){E.textContent='Isi nama kampus.';return}
    if(row.short.length<2){E.textContent='Isi singkatan.';return}
    if(!/\.ac\.id$/.test(row.domain)){E.textContent='Domain email harus berakhiran .ac.id.';return}
    if(!row.cod.length||row.cod.length>8){E.textContent='Isi 1–8 titik COD.';return}
    if(row.areas.length>12){E.textContent='Maksimal 12 area kos.';return}
    $('#cfOk').disabled=true;
    const {error}=isNew?await sb.from('campuses').insert({...row,sort:100}):await sb.from('campuses').update(row).eq('id',c.id);
    if(error){E.textContent=errMsg(error);$('#cfOk').disabled=false;return}
    closeModal();toast(isNew?'Kampus ditambahkan':'Kampus disimpan');renderAdmin()};}
async function admUsers(B){const {data,error}=await sb.rpc('admin_users');if(error)throw error;
  B.innerHTML=`<p class="muted">${data.length} pengguna terdaftar.</p><div class="atable u"><div class="ar head"><span>Nama</span><span>Kampus</span><span>Barang</span></div>${data.map(u=>`<div class="ar"><span><b>${esc(u.name)}${u.is_admin?' <em class="adm">admin</em>':''}</b><small>${esc(u.email)} · gabung ${ago(Date.parse(u.created_at))} lalu</small></span><span>${esc(campusOf(u.campus).s)}</span><span>${u.items}${u.done?` <small>(${u.done} selesai)</small>`:''}</span></div>`).join('')}</div>`;}
let repView='aktif';
async function admReports(B){const act=repView==='aktif';
  let q=sb.from('reports').select(REP_SEL).order('created_at',{ascending:act}).limit(100);
  q=act?q.in('status',['open','process']):q.in('status',['resolved','rejected']);
  const {data,error}=await q;if(error)throw error;
  B.innerHTML=`<div class="chips sub"><button class="chip ${act?'on':''}" data-rv="aktif">Perlu ditangani</button><button class="chip ${act?'':'on'}" data-rv="selesai">Riwayat</button></div>
   <p class="muted">Komplain hanya terlihat oleh pelapor dan admin. Admin tidak bisa membaca isi chat, jadi tanyakan detail ke pelapor atau periksa barangnya.</p>`+
   (data.length?data.map(r=>`<div class="rep arep" data-rid="${r.id}"><div class="rh"><b>${esc(r.reason)}</b><em class="rst ${r.status}">${RSTAT[r.status]}</em></div>
     <small><b>${esc(r.rp?.name||'Pengguna')}</b> melaporkan <b>${esc(r.tg?.name||'pengguna')}</b> · ${ago(Date.parse(r.created_at))} lalu${r.conversation_id?' · dari chat':''}</small>
     ${r.item_title?`<button class="ritem" ${r.item_id?`data-id="${r.item_id}"`:'disabled'}>${svg('box')}${esc(r.item_title)}${r.item_id?'':' (sudah dihapus)'}</button>`:''}
     ${r.detail?`<p class="rdet">${esc(r.detail)}</p>`:''}
     ${r.admin_note?`<p class="anote">${svg('shield')}<span>${esc(r.admin_note)}</span></p>`:''}
     ${act?`<div class="da">${r.status==='open'?`<button class="btn ghost" data-rs="process">Proses</button>`:''}<button class="btn ghost" data-rs="rejected">Tolak</button><button class="btn" data-rs="resolved">Selesai</button></div>`:''}</div>`).join('')
    :`<p class="muted">${act?'Tidak ada komplain yang perlu ditangani.':'Belum ada riwayat komplain.'}</p>`);
  B.onclick=e=>{const v=e.target.closest('[data-rv]');if(v){repView=v.dataset.rv;renderAdmin();return}
    const it=e.target.closest('[data-id]');if(it){openDetail(it.dataset.id);return}
    const b=e.target.closest('[data-rs]');if(!b)return;const rid=b.closest('[data-rid]').dataset.rid,st=b.dataset.rs;
    const save=async note=>{const {error}=await sb.from('reports').update(note!==undefined?{status:st,admin_note:note||null}:{status:st}).eq('id',rid);
      if(error){toast(errMsg(error));return}closeModal();toast('Komplain '+RSTAT[st].toLowerCase());refreshPending();renderAdmin()};
    if(st==='process'){b.disabled=true;save();return}
    modal(`<h2>${st==='resolved'?'Selesaikan komplain':'Tolak komplain'}</h2><p>Catatan ini dikirim ke pelapor.</p>
     <input class="field" id="rnI" maxlength="300" value="${st==='resolved'?'Sudah kami tindak lanjuti. Terima kasih sudah melapor.':'Belum ada bukti pelanggaran.'}">
     <div class="row2" style="margin-top:14px"><button class="btn ghost" data-close>Batal</button><button class="btn" id="rnOk">${st==='resolved'?'Selesai':'Tolak'}</button></div>`);
    $('#rnOk').onclick=()=>{$('#rnOk').disabled=true;save($('#rnI').value.trim())}};}
async function admSundul(B){const now=new Date().toISOString();
  const [{data:act,error},{data:clk},{data:st},{data:pays}]=await Promise.all([
    sb.from('items').select(ITEM_SEL).gt('bumped_until',now).eq('status','available').order('bumped_until',{ascending:true}),
    sb.from('sundul_clicks').select('user_id').limit(5000),sb.rpc('admin_pay_stats'),
    sb.from('payments').select('*, items(title), owner_p:profiles!payments_owner_fkey(name)').eq('kind','sundul').order('created_at',{ascending:false}).limit(15)]);
  if(error)throw error;
  const live=(act||[]).map(mapItem).filter(boosted),users=new Set((clk||[]).map(r=>r.user_id)).size;
  B.innerHTML=`<div class="tiles">${tile(live.length,'Sedang disundul')}${tile(rp(st?.sundul_revenue??0),'Pemasukan sundul',`${st?.sundul_paid??0} kali dibayar`)}${tile((clk||[]).length,'Tombol diketuk',`${users} pengguna`)}</div>
   <p class="muted">Sundul menaikkan barang ke urutan teratas beranda kampusnya selama 24 jam. Biaya ${SFEE?rp(SFEE):'gratis'} (ubah di tab Bayar). Bukti bayar sundul diverifikasi di tab Bayar, sama seperti biaya posting.</p>
   <h3 class="ah">Sedang disundul</h3>${live.length?live.map(x=>`<button class="myi" data-id="${x.id}"><img src="${esc(x.img[0])}" alt=""><span><b>${esc(x.t)}</b><small>${esc(x.by)} · ${esc(campusOf(x.campus).s)}</small></span><em>sisa ${leftTxt(x.bumpUntil-Date.now())}</em></button>`).join(''):'<p class="muted">Belum ada barang yang disundul.</p>'}
   <h3 class="ah">Pembayaran sundul terbaru</h3><div class="atable">${(pays||[]).map(p=>`<div class="ar"><span>${esc(p.items?.title||'Barang dihapus')}<small style="display:block;color:var(--mut)">${esc(p.owner_p?.name||'')} · ${ago(Date.parse(p.created_at))} lalu</small></span><span>${rp(p.amount)}</span><span><em class="pst ${p.status}">${p.status==='approved'?'Setuju':p.status==='rejected'?'Tolak':'Menunggu'}</em></span></div>`).join('')||'<div class="ar"><span>Belum ada</span></div>'}</div>`;
  B.onclick=e=>{const b=e.target.closest('[data-id]');if(b)go('detail',{id:b.dataset.id})};}
$('#logout').onclick=async()=>{if(channel){sb.removeChannel(channel);channel=null}await sb.auth.signOut();S.admin=false;
  S=fresh();$('#emailI').value='';$('#pwI').value='';$('#cList').innerHTML='';$('#nDot').hidden=true;go('onb')};

/* ---------- Customer service (bot FAQ, tanpa server) ---------- */
{
const rpx=n=>n?rp(n):'gratis';
const camp=()=>myCampus?.()||{cod:[],s:'kampusmu'};
// Setiap topik: kata kunci (bobot), jawaban (HTML, boleh fungsi), tombol aksi, saran lanjutan
const KB=[
 {id:'sapa',k:['halo','hai','hi','hallo','helo','pagi','siang','sore','malam','permisi','assalamualaikum','hei','hey','p'],exact:true,
  a:()=>`Halo${S.me?.name?', '+esc(S.me.name.split(' ')[0]):''}! 👋 Ada yang bisa aku bantu soal ReUse?`,s:['Cara posting','Biaya & bayar','Apa itu Sundul?','Cara COD aman']},
 {id:'makasih',k:['makasih','terima kasih','terimakasih','thanks','thank','tq','thx','mksh','oke makasih','sip'],
  a:'Sama-sama! Semoga barangnya cepat dapat pemilik baru 🌱 Kalau ada yang bingung lagi, tinggal tanya.'},
 {id:'posting',k:['posting','post','jual','upload','unggah','pasang','iklan','tambah barang','masukin barang','naruh barang','menjual'],
  a:()=>`Cara memposting barang:<ol><li>Ketuk tombol <b>+</b> di tengah menu bawah.</li><li>Tambah foto (maks. 5), isi judul, kategori, dan kondisi.</li><li>Pilih mode: <b>Sell</b> (jual), <b>Swap</b> (tukar), atau <b>Donate</b> (gratis).</li><li>Pilih titik COD, lalu ketuk <b>Posting</b>.</li></ol>${FEE?`Biaya posting ${rpx(FEE)}, dibayar lewat QRIS${PAY_AUTO?' dan langsung aktif setelah kamu menekan “Saya sudah bayar”':''}.`:'Posting saat ini gratis.'}`,
  act:[['Posting sekarang','post']],s:['Biaya & bayar','Mode Sell, Swap, Donate']},
 {id:'biaya',k:['biaya','bayar','pembayaran','qris','fee','2000','2rb','2 ribu','dua ribu','tarif','mahal','harga posting','scan','transfer','bukti bayar','gratis ga'],
  a:()=>`Biaya di ReUse:<ul><li>Posting barang: <b>${rpx(FEE)}</b></li><li>Sundul 24 jam: <b>${rpx(SFEE)}</b></li></ul>Bayar dengan scan QRIS, nominalnya sudah terisi otomatis. ${PAY_AUTO?'Setelah bayar, ketuk <b>Saya sudah bayar</b> dan barangmu langsung aktif.':'Setelah bayar, upload screenshot bukti lalu tunggu admin menyetujui.'}${QRIS_DEMO?'<br><small>Saat ini masih QRIS demo, jadi tidak ada uang sungguhan yang ditarik.</small>':''}<br>Chat, COD, dan rating tidak dipungut biaya.`,
  s:['Apa itu Sundul?','Cara posting']},
 {id:'sundul',k:['sundul','naik','ke atas','paling atas','boost','promosi','biar laku','biar dilihat','biar rame','sepi peminat','iklan atas'],
  a:()=>`<b>Sundul</b> menaikkan barangmu ke urutan paling atas beranda kampus selama <b>24 jam</b>, dengan lencana oranye “Disundul”.<ol><li>Buka barangmu dari <b>Profil → Barangku</b>.</li><li>Ketuk <b>Sundul</b>, lalu bayar ${rpx(SFEE)}.</li></ol>Setelah 24 jam barang kembali ke urutan biasa dan bisa disundul lagi.`,
  act:[['Buka Profil','profile']],s:['Biaya & bayar','Tips biar cepat laku']},
 {id:'laku',k:['cepat laku','tips jual','gak laku','ga laku','tidak laku','biar cepet','sepi'],
  a:'Tips biar barang cepat laku:<ul><li>Pakai foto terang dari beberapa sisi.</li><li>Tulis kondisi jujur, termasuk minusnya.</li><li>Pasang harga wajar, cek barang serupa di beranda.</li><li>Balas chat secepatnya. Pembeli bisa lihat apakah pesannya sudah kamu baca.</li><li>Pakai <b>Sundul</b> supaya tampil paling atas 24 jam.</li></ul>',s:['Apa itu Sundul?']},
 {id:'mode',k:['mode','swap','tukar','tuker','tukeran','barter','donate','donasi','gratisan','kasih gratis','sell'],
  a:'Ada tiga mode:<ul><li><b>Sell</b>: dijual dengan harga.</li><li><b>Swap</b>: ditukar dengan barang lain. Tulis barang yang kamu cari.</li><li><b>Donate</b>: diberikan gratis.</li></ul>Pilih mode saat memposting. Di beranda, kamu juga bisa memfilter barang berdasarkan mode.',s:['Cara posting','Cara mencari barang']},
 {id:'aman',k:['aman','keamanan','tips cod','penipuan cara','hati hati','hati-hati','takut','waspada','safe','resiko','risiko'],
  a:'Tips COD aman:<ul><li>Ketemu di titik COD yang ramai, siang hari kalau bisa.</li><li>Cek barang dulu sebelum membayar.</li><li>Jangan transfer uang sebelum ketemu.</li><li>Semua pengguna sudah diverifikasi email kampus, cek lencana centang hijau di namanya.</li><li>Kalau ada yang mencurigakan, ketuk ikon <b>bendera</b> untuk komplain.</li></ul>',s:['Lapor penipuan']},
 {id:'cod',k:['cod','ketemu','ketemuan','titik','lokasi','tempat','janjian','ambil barang','serah terima','meet','jadwal'],
  a:()=>{const c=camp();return `Transaksi di ReUse dilakukan lewat <b>COD</b> di titik aman sekitar kampus.<ol><li>Di chat, ketuk ikon <b>kalender</b> untuk mengajak COD (tanggal, jam, tempat).</li><li>Lawan bicara menekan <b>Terima</b>, lalu kartu COD berubah menjadi “Disepakati”.</li><li>Setelah barang berpindah tangan, penjual menekan <b>Tandai selesai</b>.</li></ol>${c.cod?.length?`Titik COD di ${esc(c.s)}: ${c.cod.map(esc).join(', ')}.`:''}`},
  s:['Cara COD aman','Tandai selesai']},
 {id:'chat',k:['chat','pesan','hubungi','kontak','nego','tawar','nawar','menawar','centang','dibaca','read','balas','whatsapp'],
  a:'Untuk menghubungi pemilik barang, buka barangnya lalu ketuk <b>Chat pemilik</b>. Ada template pesan cepat juga.<br>Arti tanda di chat: ✓ abu-abu berarti terkirim, ✓✓ hijau berarti sudah dibaca. Chat yang belum kamu baca ditandai angka di menu <b>Chat</b>.',
  act:[['Buka Chat','chats']],s:['Cara COD aman']},
 {id:'selesai',k:['selesai','terjual','laku','sold','tandai','sudah dijual','udah laku','kasih ke','stok habis','tersedia lagi'],
  a:'Setelah barang berpindah tangan, buka barangmu lalu ketuk <b>Tandai selesai</b> dan pilih pembelinya (orang yang pernah chat soal barang itu). Barang hilang dari beranda, pembeli bisa memberi rating, dan dampakmu tercatat di Profil.<br>Kalau batal, ketuk <b>Tersedia lagi</b>.',s:['Rating penjual']},
 {id:'rating',k:['rating','ulasan','bintang','review','nilai','reputasi','testimoni'],
  a:'Rating hanya bisa diberikan oleh pembeli yang dipilih saat penjual menekan <b>Tandai selesai</b>, sekali per barang (bisa diubah). Tombolnya muncul di Profil → <b>Beri rating</b>, di halaman barang, dan di chat.<br>Rating penjual tampil di samping namanya di halaman barang.',s:['Tandai selesai']},
 {id:'komplain',k:['komplain','lapor','laporkan','report','penipu','penipuan','tipu','nipu','scam','kasar','tidak datang','ga datang','gak datang','barang beda','tidak sesuai','kecewa','dirugikan','masalah'],
  a:'Untuk komplain, ketuk ikon <b>bendera</b> 🏳:<ul><li>di pojok kanan atas halaman barang, atau</li><li>di pojok kanan atas chat.</li></ul>Pilih masalahnya, ceritakan singkat, lalu kirim. Hanya admin yang membaca komplainmu, dan terlapor tidak tahu siapa pelapornya. Status dan jawaban admin muncul di <b>Profil → Komplain saya</b>.',
  act:[['Lihat Profil','profile']],s:['Cara COD aman']},
 {id:'hapus',k:['hapus','delete','edit','ubah barang','ganti foto','ganti harga','salah posting','tarik barang','batalkan posting'],
  a:'Buka barangmu dari <b>Profil → Barangku</b>, lalu ketuk ikon <b>tempat sampah</b> untuk menghapusnya. Saat ini barang belum bisa diedit, jadi kalau ada yang salah (harga, foto, deskripsi), hapus lalu posting ulang.',act:[['Buka Profil','profile']]},
 {id:'muncul',k:['tidak muncul','ga muncul','gak muncul','nggak muncul','belum muncul','belum tampil','tidak tampil','ga tampil','gak tampil','hilang','ilang','ga ada di beranda'],
  a:()=>`Kalau barangmu tidak muncul di beranda, kemungkinan penyebabnya:<ul><li><b>Biaya posting belum dibayar.</b> Buka barangnya dari Profil → Barangku. Kalau ada tulisan “Belum tampil”, selesaikan pembayaran ${rpx(FEE)}.</li><li><b>Sudah ditandai selesai.</b> Ketuk <b>Tersedia lagi</b> kalau batal.</li><li><b>Filter beranda</b> masih memilih kampus, area, atau mode lain.</li><li>Barang dihapus admin karena melanggar aturan.</li></ul>`,
  act:[['Cek Barangku','profile']]},
 {id:'cari',k:['cari','search','filter','kategori','temukan','nyari','area kos','kos'],
  a:'Ketuk <b>Cari</b> di menu bawah untuk mencari berdasarkan kata kunci dan kategori. Di beranda, ketuk ikon filter untuk memilih kampus, area kos, dan mode (Sell/Swap/Donate).',act:[['Cari barang','search']]},
 {id:'akun',k:['akun','login','masuk','daftar','register','password','sandi','lupa','email','verifikasi','otp','logout','keluar'],
  a:'Akun ReUse memakai <b>email kampus</b> (berakhiran .ac.id) supaya semua pengguna mahasiswa terverifikasi. Kamu tetap masuk di perangkat ini sampai menekan <b>Keluar</b> di Profil.<br>Kalau lupa kata sandi atau email kampusmu bermasalah, kirim komplain kategori <b>Lainnya</b> supaya admin bisa membantu.',s:['Ganti nama']},
 {id:'nama',k:['ganti nama','ubah nama','nama profil','nama saya'],
  a:'Buka <b>Profil → Ubah nama</b>. Nama ini tampil di barang dan chat kamu.',act:[['Buka Profil','profile']]},
 {id:'kampus',k:['kampus','universitas','pindah kampus','ganti kampus','kampus lain','unpad','itb'],
  a:()=>`Kampusmu: <b>${esc(camp().s||'-')}</b>. Kampus mengikuti email kampus saat mendaftar, jadi tidak bisa diganti sendiri. Kamu tetap bisa melihat barang di kampus lain lewat filter di beranda.`},
 {id:'dampak',k:['dampak','impact','lingkungan','sampah','eco','hemat'],
  a:'Setiap barang yang ditandai selesai tercatat sebagai barang yang “diselamatkan” dari tempat sampah. Lihat jumlahnya di <b>Profil → Dampakmu</b>.',act:[['Lihat dampak','profile']]},
 {id:'admin',k:['admin','manusia','orang asli','cs asli','operator','bicara dengan','telepon','nomor'],
  a:'Aku bot, jadi jawabanku otomatis 🙂 Untuk masalah yang perlu ditangani admin (penipuan, akun, pembayaran), kirim lewat <b>komplain</b> (ikon bendera di barang atau chat). Admin akan membalas dan statusnya muncul di Profil.',s:['Lapor penipuan']},
 {id:'bot',k:['kamu siapa','siapa kamu','bot','robot'],
  a:'Aku bot Customer Service ReUse. Aku bisa menjelaskan cara posting, bayar, Sundul, COD, rating, dan komplain. Tanya saja!',s:['Cara posting','Biaya & bayar']},
];
const CHIP={'Cara posting':'posting','Biaya & bayar':'biaya','Apa itu Sundul?':'sundul','Cara COD aman':'aman','Lapor penipuan':'komplain','Mode Sell, Swap, Donate':'mode',
  'Tandai selesai':'selesai','Rating penjual':'rating','Cara mencari barang':'cari','Ganti nama':'nama','Tips biar cepat laku':'laku'};
const START=['Cara posting','Biaya & bayar','Apa itu Sundul?','Cara COD aman','Lapor penipuan'];
const norm=t=>' '+t.toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim()+' ';
function match(text){const t=norm(text);let best=null,score=0;
  for(const e of KB){let sc=0;
    for(const k of e.k){const kk=norm(k),w=kk.trim().split(' ').length;
      if(e.exact&&kk.trim().length<=2){if(t===kk)sc+=3}else if(t.includes(kk))sc+=w+1.2;else if(kk.trim().length>=3&&t.includes(kk.slice(0,-1)))sc+=w+.8}
    if(e.exact&&sc&&t.trim().split(' ').length>3)sc=0.5;
    if(sc>score){score=sc;best=e}}
  return score>=1?best:null}

let open=false,booted=false;
const box=()=>document.getElementById('csBody');
function add(html,who){const b=box();b.insertAdjacentHTML('beforeend',`<div class="csm ${who}">${html}</div>`);b.scrollTop=b.scrollHeight}
function chips(list){document.getElementById('csChips').innerHTML=(list||[]).map(c=>`<button type="button">${esc(c)}</button>`).join('')}
function reply(e,fromChip){const b=box();
  b.insertAdjacentHTML('beforeend','<div class="csm bot typing"><i></i><i></i><i></i></div>');b.scrollTop=b.scrollHeight;
  setTimeout(()=>{b.querySelector('.typing')?.remove();
    if(!e){add('Maaf, aku belum paham pertanyaannya 🙏 Coba pakai kata lain, atau pilih topik di bawah. Kalau masalahnya perlu admin, kirim <b>komplain</b> lewat ikon bendera.','bot');chips(START);return}
    const a=typeof e.a==='function'?e.a():e.a;
    add(a+(e.act?`<div class="csact">${e.act.map(([l,t])=>`<button type="button" data-go-tab="${t}">${esc(l)}</button>`).join('')}</div>`:''),'bot');
    chips(e.s||START)},fromChip?350:600)}
function ask(text,fromChip){text=text.trim();if(!text)return;add(esc(text),'me');
  const id=CHIP[text];reply(id?KB.find(x=>x.id===id):match(text),fromChip)}
function toggle(v){open=v??!open;document.getElementById('csPanel').classList.toggle('on',open);document.getElementById('csFab').classList.toggle('on',open);
  document.getElementById('csFab').setAttribute('aria-expanded',open);
  if(open&&!booted){booted=true;add(`Halo${S.me?.name?', '+esc(S.me.name.split(' ')[0]):''}! Aku bot Customer Service ReUse 🤖<br>Mau tanya apa? Pilih topik di bawah atau ketik pertanyaanmu.`,'bot');chips(START)}
  if(open)setTimeout(()=>document.getElementById('csI').focus({preventScroll:true}),250)}
document.body.insertAdjacentHTML('beforeend',`
 <button class="csfab" id="csFab" aria-label="Customer service" aria-expanded="false" hidden>${svg('headset')}<span class="csx">${svg('x')}</span></button>
 <div class="cspanel" id="csPanel" role="dialog" aria-label="Customer service ReUse">
  <div class="cshead"><span class="csav">${svg('headset')}</span><div><b>CS ReUse</b><small><i></i>Bot · selalu online</small></div><button class="ibtn" id="csClose" aria-label="Tutup">${svg('x')}</button></div>
  <div class="csbody" id="csBody"></div>
  <div class="cschips" id="csChips"></div>
  <form class="csform" id="csF"><input class="field" id="csI" maxlength="200" placeholder="Tulis pertanyaan…" autocomplete="off"><button class="btn sendb" aria-label="Kirim">${svg('send')}</button></form>
 </div>`);
document.getElementById('csFab').onclick=()=>toggle();
document.getElementById('csClose').onclick=()=>toggle(false);
document.getElementById('csF').onsubmit=e=>{e.preventDefault();const i=document.getElementById('csI');ask(i.value);i.value=''};
document.getElementById('csChips').onclick=e=>{const b=e.target.closest('button');if(b)ask(b.textContent,true)};
box().onclick=e=>{const b=e.target.closest('[data-go-tab]');if(b){toggle(false);go(b.dataset.goTab)}};
// Tombol hanya tampil di layar utama (beranda, cari, chat, profil)
window.csSync=id=>{const show=['home','search','chats','profile'].includes(id);document.getElementById('csFab').hidden=!show;if(!show&&open)toggle(false)};
window.csSync(typeof cur!=='undefined'?cur:'');
}

/* ---------- Boot ---------- */
hydrate(document);
(async()=>{
  if(!sb){go('setup');return}
  await Promise.all([loadCampuses(),loadSettings()]);
  sb.auth.onAuthStateChange((ev,session)=>{const uid=session?.user?.id||null;
    if(!S.uid)return;
    if(!uid){if(channel){sb.removeChannel(channel);channel=null}S=fresh();S.admin=false;$('#cList').innerHTML='';go('onb');return}
    if(uid!==S.uid){toast('Akun berganti di tab lain. Memuat ulang…');setTimeout(()=>location.reload(),700)}});
  const {data:{session}}=await sb.auth.getSession();
  if(session?.user)await afterLogin(session.user);else go('onb');
})();
})();
