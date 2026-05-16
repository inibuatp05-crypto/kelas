/* ====== DATA — 36 siswa ====== */
const students = [
  { name: "Alya Mutiara",        img: "img/Alya Mutiara.webp",        msg: "Don't compare yourself, because everyone has their own story" },
  { name: "Annisa Arrumaisha",   img: "img/Annisa Arrumaisha.webp",   msg: "Even if you're walking slowly, you're still moving forward - Woozi" },
  { name: "Arka Ridhano",        img: "img/Arka Ridhano.webp",        msg: "Rasa sakit yang tidak membunuhmu, diam-diam sedang menguatkan mu." },
  { name: "Azzahra Arifiani",    img: "img/Azzahra Arifiani.webp",    msg: "In this moment now, capture it, remember it." },
  { name: "Baihaqii Al Wasilah", img: "img/Baihaqii Al Wasilah.webp", msg: "Semangatt yaa!!" },
  { name: "Berliana Zahra",      img: "img/Berliana Zahra.webp",      msg: "We won't ever tell. I'll miss you, double XL" },
  { name: "Chika Syacharani",    img: "img/Chika Syacharani.webp",    msg: '"In a revolution, one triumphs or dies" - che guevara' },
  { name: "Fakhriza Nafis",      img: "img/Fakhriza Nafis.webp",      msg: "Jangan menyerah karena, kunci kesuksesan itu adalah semangat belajar dan juga orang dalam" },
  { name: "Fauzan Arief",        img: "img/Fauzan Arief.webp",        msg: "Teruslah melangkah dan ingat perjuanganmu menuju hidup yang lebih baik" },
  { name: "Fauzan Laurant",      img: "img/Fauzan Laurant.webp",      msg: "Practice doesn't aim for perfection but perfection comes when trying" },
  { name: "Felan Putri",         img: "img/Felan Putri.webp",         msg: "Throw away your fear, all the keys are in your possession" },
  { name: "Felicia Cantika",     img: "img/Felicia Cantika.webp",     msg: "I love when I remember who I am" },
  { name: "Fransiska Desti",     img: "img/Fransiska Desti.webp",     msg: "It is not in the stars to hold our destiny but in ourselves" },
  { name: "Gracia Hana",         img: "img/Gracia Hana.webp",         msg: "You're not as messed up as you think you are." },
  { name: "Haizel Khairan",      img: "img/Haizel Khairan.webp",      msg: "Wake up and get a job! We want a better life, right?" },
  { name: "Hana Nadirah",        img: "img/Hana Nadirah.webp",        msg: "Life is prettier than it may seem. - Laufey" },
  { name: "Kaino Faiq",          img: "img/Kaino Faiq.webp",          msg: "Be yourself and never surrender! See you soon!" },
  { name: "Keisha Maharani",     img: "img/Keisha Maharani.webp",     msg: "Kita usahakan gaji minimal 60000 dollar" },
  { name: "Khansa Fakhriyyah",   img: "img/Khansa Fakhriyyah.webp",   msg: "Jihyo twice pernah sekolah disinii" },
  { name: "Klein Wahid",         img: "img/Klein Wahid.webp",         msg: "By any means necessary" },
  { name: "Miqdada Shafiya",     img: "img/Miqdada Shafiya.webp",     msg: "Worth it kan lelah dan keselnya?? Jangan lupa makan !!" },
  { name: "Mochammad Zidane",    img: "img/Mochammad Zidane.webp",    msg: "Gimana? Masih jadi orang baik? Baguslah" },
  { name: "Muhammad Elmi",       img: "img/Muhammad Elmi.webp",       msg: "Hello diriku dimasa depan, tetep jadi lelaki yang terus bertanggung jawab atas segala hal ya" },
  { name: "Muhammad Gilang",     img: "img/Muhammad Gilang.webp",     msg: '"Young, dumb, broke high school kids.' },
  { name: "Muhammad Naufal",     img: "img/Muhammad Naufal.webp",     msg: "Ingat Tuhan, Apalagi Kalo Banyak Masalah, And Take A Rest When You Need To." },
  { name: "Muhammad Sulthan",    img: "img/Muhammad Sulthan.webp",    msg: '"A life never questioned slowly forgets how to be lived' },
  { name: "Mutia Sara",          img: "img/Mutia Sara.webp",          msg: "Tak sempurna Stop hindari kata itu! I'm proud of u. meet your standard yet?" },
  { name: "Nabil Abinaya",       img: "img/Nabil Abinaya.webp",       msg: "It's not over until it's over." },
  { name: "Naisya Zahra",        img: "img/Naisya Zahra.webp",        msg: "Mw ngingetin, jgn lupa bernapas biar idup terus sampe ke Mars aamiin.." },
  { name: "Nazla Hafidhotul",    img: "img/Nazla Hafidhotul.webp",    msg: "You're doing better than you think. Don't be too hard on yourself - Jihoon" },
  { name: "Prima Juwita",        img: "img/Prima Juwita.webp",        msg: "Udah jadi bos muda kaya raya?" },
  { name: "Aisy Taqiyya",        img: "img/Aisy Taqiyya.webp",        msg: "I'm not a stop along the way. I'm a destination xoxo. - Blair Waldorf" },
  { name: "Raisya Ramadhani",    img: "img/Raisya Ramadhani.webp",    msg: "Your story is yours, so write it completely" },
  { name: "Salma Nur",           img: "img/Salma Nur.webp",           msg: "Makasih udah bisa survive dari amukan pa momo" },
  { name: "Santa Teresia",       img: "img/Santa Teresia.webp",       msg: "Kelak kita akan menuai buah yang di tebar. Semoga diri ini semakin kuat, hebat dan bestari" },
  { name: "Surya Pandora",       img: "img/Surya Pandora.webp",       msg: "Used to dream of outer space, but now they're laughin' at our face saying, WAKE UP, YOU NEED TO MAKE MONEY" },
];

const scrapbook = [
  {type:'photo', src:'img/3.webp', cap:'matmin botram!', col:'col-span-6 md:col-span-4', row:'row-span-3', rot:-2, tape:true},
  {type:'photo', src:'img/4.webp', cap:'fotbar bareng', col:'col-span-6 md:col-span-3', row:'row-span-4', rot:3},
  {type:'sticky', text:'Kapan lagi ya bisa kayak gini? ✎', cls:'pink', col:'col-span-6 md:col-span-2', row:'row-span-2', rot:-5},
  {type:'photo', src:'img/5.webp', cap:'titisan Leonardo da Vinci ga sih?!', col:'col-span-6 md:col-span-3', row:'row-span-3', rot:-3, tape:true},
  {type:'photo', src:'img/1.webp', cap:'praktikum', col:'col-span-4 md:col-span-3', row:'row-span-2', rot:2},
  {type:'sticky', text:'Kelas ambis nih ☼', cls:'blue', col:'col-span-4 md:col-span-2', row:'row-span-2', rot:4},
  {type:'photo', src:'img/2.webp', cap:'BINCARUNG!!', col:'col-span-12 md:col-span-4', row:'row-span-2', rot:-1, tape:true},
  {type:'photo', src:'img/6.webp', cap:'latihan uprak', col:'col-span-6 md:col-span-3', row:'row-span-3', rot:1},
  {type:'sticky', text:'Kangen deh latihan buat uprak', cls:'green', col:'col-span-6 md:col-span-3', row:'row-span-2', rot:-3},
  {type:'photo', src:'img/12.webp', cap:'our last photo in shs', col:'col-span-6 md:col-span-3', row:'row-span-3', rot:2, tape:true},
  {type:'photo', src:'img/9.webp', cap:'matmin masak masak', col:'col-span-6 md:col-span-3', row:'row-span-2', rot:-2},
  {type:'sticky', text:'Sukses selalu ya kita semua ✿', cls:'', col:'col-span-12 md:col-span-3', row:'row-span-2', rot:5},
];

const polaroids = [
  {img:'img/7.webp',  cap:''},
  {img:'img/8.webp',  cap:''},
  {img:'img/17.webp',  cap:''},
  {img:'img/14.webp',  cap:''},
  {img:'img/13.webp',  cap:''},
  {img:'img/18.webp',  cap:''},
  {img:'img/19.webp',  cap:''},
  {img:'img/30.webp',  cap:''},
  {img:'img/29.webp',  cap:''},
  {img:'img/37.webp', cap:''},
  {img:'img/38.webp', cap:''},
  {img:'img/10.webp', cap:''},
];

const timeline = [
  {date:'Juli 2023',     title:'Our first photo together',         text:'36 orang asing duduk di kelas yang sama. Tidak ada yang tahu apa yang akan terjadi kedepannya.', img:'img/22.webp'},
  {date:'Desember 2023', title:'Foto bersama ayah dan papah', text:'Merayakan apa yang telah mereka berikan untuk kita selama ini.',         img:'img/23.webp'},
  {date:'Mei 2024',      title:'Matmin road to pangalengan',   text:'Bus, lagu-lagu, dan tidur di pundak teman. Tidak ada yang ingin pulang.',           img:'img/20.webp'},
  {date:'Agustus 2024',  title:'Foto yearbook!',       text:'Melukis kenangan bersama-sama dengan pakaian terbaik kita.',                          img:'img/24.webp'},
  {date:'Februari 2025', title:'Ujian praktek moment',   text:'Lampu panggung menyala. Hasil dari segala kerja keras kita semua.', img:'img/25.webp'},
  {date:'Mei 2025',      title:'Our last trip together',        text:'Kita berfoto. Kita berpelukan. Kita berjanji. Lalu kita pulang membawa semuanya.',   img:'img/21.webp'},
];

const quotes = [
  {text:'Terima kasih untuk semua yang telah membuat kelas ini istimewa.', by:'— Anonim'},
  {text:'Should have known all of you guys from the start.', by:'— Anonim'},
  {text:'Maaf untuk semua kesalahan, terima kasih untuk semua tawa.', by:'— Anonim'},
  {text:'Terimakasih semuanya! Saya sayang kalian semua dan semoga kalian sukses kedepannya. Ditunggu kabar baiknya ya!', by:'— Kaino'},
];

/* ====== HELPERS ====== */
const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const PLACEHOLDER = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'><rect width='3' height='4' fill='%23e9e1d2'/></svg>";
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const IS_TOUCH = window.matchMedia('(hover:none)').matches;

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* ===== Shared lazy-image observer (one observer for ALL imgs).
   We render <img data-src="..."> with a tiny SVG placeholder, then
   swap to the real src only when the image is within ~600px of the
   viewport. This is the single biggest fix for slow image load. ===== */
const lazyImgIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const img = e.target;
    const real = img.dataset.src;
    if(real){
      img.src = real;
      img.addEventListener('load', ()=>img.setAttribute('data-loaded','1'), {once:true});
      img.addEventListener('error', ()=>img.setAttribute('data-loaded','1'), {once:true});
      img.removeAttribute('data-src');
    }
    lazyImgIO.unobserve(img);
  });
},{ rootMargin: '600px 0px', threshold: 0 });

function observeLazyImgs(scope){
  (scope || document).querySelectorAll('img[data-src]').forEach(el=>lazyImgIO.observe(el));
}

/* ====== RENDER: STUDENTS ====== */
function renderStudents(){
  const html = students.map((s,i)=>`
    <div class="stu reveal" role="listitem" tabindex="0"
         aria-label="${escapeHtml(s.name)}. Tekan Enter untuk melihat pesan."
         data-i="${i}">
      <div class="frame">
        <img class="lazy-img" src="${PLACEHOLDER}" data-src="${escapeHtml(s.img)}"
             alt="Potret ${escapeHtml(s.name)}" loading="lazy" decoding="async"
             width="300" height="400"/>
      </div>
      <p class="name">${escapeHtml(s.name)}</p>
    </div>`).join('');
  $('#studentsGrid').innerHTML = html;

  const grid = $('#studentsGrid');
  grid.addEventListener('click', e=>{
    const card = e.target.closest('.stu'); if(!card) return;
    openModal(+card.dataset.i);
  });
  grid.addEventListener('keydown', e=>{
    if(e.key!=='Enter' && e.key!==' ') return;
    const card = e.target.closest('.stu'); if(!card) return;
    e.preventDefault(); openModal(+card.dataset.i);
  });
  observeLazyImgs(grid);
}
renderStudents();

/* ====== RENDER: SCRAPBOOK ====== */
const lightboxImages = [];
const sb = $('#scrapbook');
sb.setAttribute('role','list');
sb.setAttribute('aria-label','Galeri scrapbook hari-hari kelas');
sb.innerHTML = scrapbook.map((it,i)=>{
  if(it.type==='photo'){
    const lbIdx = lightboxImages.length;
    lightboxImages.push({src: it.src.replace('/600/','/1200/').replace('/800','/1200'), cap:it.cap});
    return `<div class="sb-item reveal ${it.col} ${it.row}" role="listitem" style="transform:rotate(${it.rot}deg); transition-delay:${i*50}ms;">
      <figure class="sb-photo h-full flex flex-col" tabindex="0"
           role="button" aria-label="Foto: ${escapeHtml(it.cap)}. Tekan Enter untuk memperbesar."
           data-lb="${lbIdx}">
        ${it.tape?'<span class="sb-tape" aria-hidden="true"></span>':''}
        <div class="flex-1 overflow-hidden">
          <img class="lazy-img" src="${PLACEHOLDER}" data-src="${escapeHtml(it.src)}"
               alt="Foto kenangan: ${escapeHtml(it.cap)}" loading="lazy" decoding="async"
               width="600" height="600"/>
        </div>
        <figcaption class="lbl">${escapeHtml(it.cap)}</figcaption>
      </figure>
    </div>`;
  }
  return `<div class="sb-item reveal ${it.col} ${it.row}" role="listitem" style="transition-delay:${i*50}ms;">
    <div class="sticky ${it.cls} h-full flex items-center justify-center text-center" role="note">${escapeHtml(it.text)}</div>
  </div>`;
}).join('');
sb.addEventListener('click', e=>{
  const f = e.target.closest('[data-lb]'); if(!f) return;
  openLightboxByIdx(+f.dataset.lb);
});
sb.addEventListener('keydown', e=>{
  if(e.key!=='Enter' && e.key!==' ') return;
  const f = e.target.closest('[data-lb]'); if(!f) return;
  e.preventDefault(); openLightboxByIdx(+f.dataset.lb);
});
observeLazyImgs(sb);

/* ====== RENDER: POLAROIDS ====== */
const pol = $('#polaroids');
pol.innerHTML = polaroids.map((p,i)=>{
  const rot = (i%2===0?-3:3) + (i%3);
  const lbIdx = lightboxImages.length;
  lightboxImages.push({src:p.img.replace('/600','/1200'), cap:p.cap});
  return `<div class="reveal" style="transform:rotate(${rot}deg); transition-delay:${i*60}ms;">
    <div class="polaroid" data-lb="${lbIdx}" tabindex="0" role="button" aria-label="Polaroid: ${escapeHtml(p.cap)}">
      <img class="lazy-img" src="${PLACEHOLDER}" data-src="${escapeHtml(p.img)}"
           alt="${escapeHtml(p.cap)}" loading="lazy" decoding="async"
           width="600" height="600"/>
      <p class="cap">${escapeHtml(p.cap)}</p>
    </div>
  </div>`;
}).join('');
pol.addEventListener('click', e=>{
  const f = e.target.closest('[data-lb]'); if(!f) return;
  openLightboxByIdx(+f.dataset.lb);
});
pol.addEventListener('keydown', e=>{
  if(e.key!=='Enter' && e.key!==' ') return;
  const f = e.target.closest('[data-lb]'); if(!f) return;
  e.preventDefault(); openLightboxByIdx(+f.dataset.lb);
});
observeLazyImgs(pol);

/* ====== RENDER: EXTRA GALLERY (40 slot tambahan) ====== */
const extraGallery = [
  { img: "img/42.webp", cap: "" },
  { img: "img/32.webp", cap: "" },
  { img: "img/56.webp", cap: "" },
  { img: "img/27.webp", cap: "" },
  { img: "img/31.webp", cap: "" },
  { img: "img/35.webp", cap: "" },
  { img: "img/16.webp", cap: "" },
  { img: "img/57.webp", cap: "" },
  { img: "img/55.webp", cap: "" },
  { img: "img/52.webp", cap: "" },
  { img: "img/50.webp", cap: "" },
  { img: "img/51.webp", cap: "" },
  { img: "img/54.webp", cap: "" },
  { img: "img/53.webp", cap: "" },
  { img: "img/49.webp", cap: "" },
  { img: "img/48.webp", cap: "" },
  { img: "img/46.webp", cap: "" },
  { img: "img/47.webp", cap: "" },
  { img: "img/44.webp", cap: "" },
  { img: "img/43.webp", cap: "" },
  { img: "img/36.webp", cap: "" },
  { img: "img/58.webp", cap: "" },
  { img: "img/61.webp", cap: "" },
  { img: "img/62.webp", cap: "" },
  { img: "img/63.webp", cap: "" },
  { img: "img/64.webp", cap: "" },
  { img: "img/65.webp", cap: "" },
  { img: "img/66.webp", cap: "" },
  { img: "img/68.webp", cap: "" },
  { img: "img/69.webp", cap: "" },
  { img: "img/70.webp", cap: "" },
  { img: "img/71.webp", cap: "" },
  { img: "img/72.webp", cap: "" },
  { img: "img/73.webp", cap: "" },
  { img: "img/74.webp", cap: "" },
  { img: "img/75.webp", cap: "" },
  { img: "img/76.webp", cap: "" },
  { img: "img/77.webp", cap: "" },
  { img: "img/79.webp", cap: "" },
  { img: "img/80.webp", cap: "" },
  { img: "img/81.webp", cap: "" },
  { img: "img/82.webp", cap: "" },
  { img: "img/83.webp", cap: "" },
  { img: "img/84.webp", cap: "" },
  { img: "img/85.webp", cap: "" },
  { img: "img/86.webp", cap: "" },
  { img: "img/87.webp", cap: "" },
  { img: "img/89.webp", cap: "" },
  { img: "img/90.webp", cap: "" },
  { img: "img/91.webp", cap: "" },
  { img: "img/93.webp", cap: "" },
  { img: "img/94.webp", cap: "" },
  { img: "img/95.webp", cap: "" },
  { img: "img/96.webp", cap: "" },
  { img: "img/97.webp", cap: "" },
  { img: "img/98.webp", cap: "" },
  { img: "img/99.webp", cap: "" },
  // ... tambahkan sendiri sesuai keinginan
];
const eg = $('#extraGallery');
if(eg){
  eg.innerHTML = extraGallery.map((p, i) => {
    const rot = ((i%2===0?-2:2) + (i%4-1)) * 0.6;
    const lbIdx = lightboxImages.length;
    lightboxImages.push({ src: p.img, cap: p.cap });
    return `<div class="reveal" style="transform:rotate(${rot}deg); transition-delay:${(i%8)*40}ms;">
      <div class="polaroid" data-lb="${lbIdx}" tabindex="0" role="button" aria-label="Foto: ${escapeHtml(p.cap)}">
        <img class="lazy-img" src="${PLACEHOLDER}" data-src="${escapeHtml(p.img)}"
             alt="${escapeHtml(p.cap)}" loading="lazy" decoding="async"
             width="600" height="600"
             onerror="this.onerror=null;this.src='https://picsum.photos/seed/extra${i+1}/600'"/>
        <p class="cap">${escapeHtml(p.cap)}</p>
      </div>
    </div>`;
  }).join('');
  eg.addEventListener('click', e=>{
    const f = e.target.closest('[data-lb]'); if(!f) return;
    openLightboxByIdx(+f.dataset.lb);
  });
  eg.addEventListener('keydown', e=>{
    if(e.key!=='Enter' && e.key!==' ') return;
    const f = e.target.closest('[data-lb]'); if(!f) return;
    e.preventDefault(); openLightboxByIdx(+f.dataset.lb);
  });
  observeLazyImgs(eg);
}

/* ====== RENDER: TIMELINE ====== */
$('#timelineList').innerHTML =
  `<div class="tl-track"></div><div class="tl-fill" id="tlFill"></div>` +
  timeline.map((t,i)=>{
    const left = i%2===0;
    const lbIdx = lightboxImages.length;
    lightboxImages.push({src:t.img.replace('/800/500','/1400/900'), cap:t.title});
    return `
    <div class="tl-item relative py-12 reveal">
      <div class="tl-dot"></div>
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="${left?'order-1':'order-2 md:col-start-2'}">
          <div class="tl-card ${left?'left':'right'}">
            <span class="arrow"></span>
            <img class="lazy-img" src="${PLACEHOLDER}" data-src="${escapeHtml(t.img)}"
                 alt="${escapeHtml(t.title)}" loading="lazy" decoding="async"
                 width="800" height="500" data-lb="${lbIdx}" class="cursor-pointer"/>
            <p class="font-sans tracking-[.3em] text-xs text-[color:var(--rose)] mb-2">${escapeHtml(t.date)}</p>
            <h4 class="font-display italic text-2xl mb-2">${escapeHtml(t.title)}</h4>
            <p class="text-base leading-relaxed opacity-80">${escapeHtml(t.text)}</p>
          </div>
        </div>
        <div class="hidden md:block ${left?'order-2':'order-1'}"></div>
      </div>
    </div>`;
  }).join('');
$('#timelineList').addEventListener('click', e=>{
  const f = e.target.closest('[data-lb]'); if(!f) return;
  openLightboxByIdx(+f.dataset.lb);
});
observeLazyImgs($('#timelineList'));

/* ====== RENDER: QUOTES ====== */
$('#quotesGrid').innerHTML = quotes.map((q,i)=>`
  <div class="quote-card reveal" style="transition-delay:${i*100}ms">
    <p class="font-display italic text-2xl leading-snug">${escapeHtml(q.text)}</p>
    <p class="font-hand text-xl mt-4 text-[color:var(--rose)]">${escapeHtml(q.by)}</p>
  </div>`).join('');

/* ====== PETALS / STARS — kurangi jumlah & matikan saat reduced-motion ====== */
if(!REDUCED_MOTION){
  const petals = $('#petals');
  const petalCount = window.innerWidth < 640 ? 10 : 18;
  for(let i=0;i<petalCount;i++){
    const p = document.createElement('div');
    p.className='floating-petal';
    p.style.left = Math.random()*100+'%';
    p.style.animationDuration = (8+Math.random()*10)+'s';
    p.style.animationDelay = Math.random()*8+'s';
    p.style.background = ['#b85450','#c9a961','#d97a6b'][i%3];
    petals.appendChild(p);
  }
}

/* Stars: render hanya saat ending mendekat */
const endingEl = document.getElementById('ending');
let starsRendered = false;
const endingIO = new IntersectionObserver(es=>{
  if(es[0].isIntersecting && !starsRendered){
    starsRendered = true;
    const stars = $('#stars');
    const starCount = REDUCED_MOTION ? 0 : (window.innerWidth < 640 ? 50 : 90);
    for(let i=0;i<starCount;i++){
      const s = document.createElement('div');
      s.className='star';
      s.style.left=Math.random()*100+'%';
      s.style.top=Math.random()*100+'%';
      s.style.animationDelay=Math.random()*3+'s';
      stars.appendChild(s);
    }
    if(!REDUCED_MOTION){
      const shoots = $('#shoots');
      for(let i=0;i<3;i++){
        const sh = document.createElement('div');
        sh.className='shoot';
        sh.style.top=(Math.random()*40)+'%';
        sh.style.animationDelay=(i*3)+'s';
        shoots.appendChild(sh);
      }
    }
    endingIO.disconnect();
  }
},{rootMargin:'400px 0px'});
endingIO.observe(endingEl);

/* ====== CURTAIN ====== */
const curtain = $('#curtain');
const curtainContent = curtain.querySelector('.curtain-content');
function openCurtain(){
  curtainContent.classList.add('exit');
  const a = $('#bgm');
  a.volume = 0.4;
  try { a.currentTime = 0; } catch(e){}
  a.play().then(()=>{
    $('#audioBtn').classList.add('playing');
    $('#iconPlay').style.display='none';
    $('#iconPause').style.display='block';
  }).catch(()=>{});
  setTimeout(()=>{ curtain.classList.add('open'); }, 500);
  setTimeout(()=>{
    curtain.classList.add('gone');
    initReveal();
  }, 500 + 2400);
}
$('#openCurtain').onclick = openCurtain;

function closeCurtain(){
  if(curtain.classList.contains('closing')) return;
  const dim = document.getElementById('curtainDim');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  dim.classList.add('show');
  // Fade out & stop backsound
  const a = $('#bgm');
  if(a && !a.paused){
    const startVol = a.volume;
    const steps = 20;
    let i = 0;
    const fade = setInterval(()=>{
      i++;
      a.volume = Math.max(0, startVol * (1 - i/steps));
      if(i >= steps){
        clearInterval(fade);
        a.pause();
        a.currentTime = 0;
        a.volume = startVol;
        $('#audioBtn').classList.remove('playing');
        const ip = $('#iconPlay'), ipa = $('#iconPause');
        if(ip) ip.style.display='block';
        if(ipa) ipa.style.display='none';
        $('#audioBtn').setAttribute('aria-label','Putar musik latar');
      }
    }, 40);
  }
  setTimeout(()=>{
    curtain.classList.add('closing');
    curtain.classList.remove('gone');
    void curtain.offsetWidth;
    curtain.classList.remove('open');
    curtainContent.classList.remove('exit');
    curtainContent.querySelectorAll(':scope > *').forEach(el=>{
      el.style.animation = 'none'; el.style.opacity = '0'; el.style.transform = 'translateY(24px)';
    });
  }, 950);
  setTimeout(()=>{
    dim.classList.remove('show');
    curtainContent.querySelectorAll(':scope > *').forEach(el=>{
      el.style.animation = ''; el.style.opacity = ''; el.style.transform = '';
      el.style.animationName = 'none'; void el.offsetWidth; el.style.animationName = '';
    });
  }, 950 + 2400);
  setTimeout(()=>{ curtain.classList.remove('closing'); }, 950 + 2900);
}
window.closeCurtain = closeCurtain;

/* ====== AUDIO ====== */
const audioBtn = $('#audioBtn'), bgm = $('#bgm');
audioBtn.onclick = ()=>{
  if(bgm.paused){
    bgm.play();
    audioBtn.classList.add('playing');
    $('#iconPlay').style.display='none';
    $('#iconPause').style.display='block';
    audioBtn.setAttribute('aria-label','Jeda musik latar');
  } else {
    bgm.pause();
    audioBtn.classList.remove('playing');
    $('#iconPlay').style.display='block';
    $('#iconPause').style.display='none';
    audioBtn.setAttribute('aria-label','Putar musik latar');
  }
};

/* ====== THEME TOGGLE ====== */
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
root.dataset.theme = savedTheme;
updateThemeIcon();
$('#themeBtn').onclick = ()=>{
  root.dataset.theme = root.dataset.theme==='light' ? 'dark' : 'light';
  localStorage.setItem('theme', root.dataset.theme);
  updateThemeIcon();
};
function updateThemeIcon(){
  const dark = root.dataset.theme==='dark';
  $('#iconSun').style.display = dark? 'none':'block';
  $('#iconMoon').style.display = dark? 'block':'none';
}

/* ====== REVEAL ====== */
function initReveal(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  },{threshold:.12});
  $$('.reveal').forEach(el=>io.observe(el));

  const tio = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
  },{threshold:.4});
  $$('.tl-item').forEach(el=>tio.observe(el));
}

/* ====== FOCUS TRAP utility ====== */
let lastFocus = null;
function trapFocus(container){
  const focusable = container.querySelectorAll('button, [tabindex="0"], input, textarea, [href]');
  if(!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length-1];
  function onKey(e){
    if(e.key !== 'Tab') return;
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
  container.addEventListener('keydown', onKey);
  container._untrap = ()=>container.removeEventListener('keydown', onKey);
  setTimeout(()=>first.focus(), 60);
}
function untrap(container){ if(container._untrap){ container._untrap(); container._untrap=null; } if(lastFocus){ lastFocus.focus(); lastFocus=null; } }

/* ====== MODAL ====== */
function openModal(i){
  const s = students[i];
  $('#mImg').src = s.img;
  $('#mImg').alt = 'Potret ' + s.name;
  $('#mName').textContent = s.name;
  $('#mMsg').textContent = '"' + s.msg + '"';
  const m = $('#modal');
  m.classList.add('show'); m.setAttribute('aria-hidden','false');
  lastFocus = document.activeElement; trapFocus(m);
}
function closeModal(){
  const m = $('#modal');
  m.classList.remove('show'); m.setAttribute('aria-hidden','true');
  untrap(m);
}
window.openModal = openModal; window.closeModal = closeModal;
$('#modal').addEventListener('click', e=>{ if(e.target.id==='modal') closeModal(); });

/* ====== LIGHTBOX ====== */
let lbCurrent = 0;
function openLightbox(src,cap){
  $('#lbImg').src=src; $('#lbImg').alt = cap || ''; $('#lbCap').textContent = cap||'';
  const lb = $('#lightbox');
  lb.classList.add('show'); lb.setAttribute('aria-hidden','false');
  lastFocus = document.activeElement; trapFocus(lb);
}
function openLightboxByIdx(i){
  lbCurrent=i;
  const it = lightboxImages[i];
  openLightbox(it.src, it.cap);
}
function lbNav(d){
  lbCurrent = (lbCurrent+d+lightboxImages.length)%lightboxImages.length;
  openLightboxByIdx(lbCurrent);
}
function closeLightbox(){
  const lb = $('#lightbox');
  lb.classList.remove('show'); lb.setAttribute('aria-hidden','true');
  untrap(lb);
}
window.openLightbox = openLightbox; window.openLightboxByIdx = openLightboxByIdx;
window.lbNav = lbNav; window.closeLightbox = closeLightbox;
$('#lightbox').addEventListener('click', e=>{ if(e.target.id==='lightbox') closeLightbox(); });

/* Keyboard global */
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
    if($('#lightbox').classList.contains('show')) closeLightbox();
    else if($('#guestbookModal').classList.contains('show')) closeGuestbook();
    else if($('#modal').classList.contains('show')) closeModal();
  }
  if($('#lightbox').classList.contains('show')){
    if(e.key==='ArrowLeft') lbNav(-1);
    if(e.key==='ArrowRight') lbNav(1);
  }
});

/* Lightbox: swipe support on touch */
(function(){
  const lb = $('#lightbox'); let sx=0,sy=0,active=false;
  lb.addEventListener('touchstart', e=>{ const t=e.touches[0]; sx=t.clientX; sy=t.clientY; active=true; }, {passive:true});
  lb.addEventListener('touchend', e=>{
    if(!active) return; active=false;
    const t = e.changedTouches[0];
    const dx = t.clientX-sx, dy = t.clientY-sy;
    if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy)) lbNav(dx<0?1:-1);
    else if(dy>80) closeLightbox();
  }, {passive:true});
})();

/* ====== GUESTBOOK — Firebase Realtime Database ======
   Konfig diambil dari window.__FIREBASE_CONFIG (lihat <head> main.html).
   Pesan disimpan di path "guestbook" sebagai child auto-id, sehingga
   muncul realtime di semua perangkat dan tidak hilang. */
const GB_KEY = 'kenangan_guestbook';     // cache offline
let guestbook = [];
let fbDb = null;
let fbReady = false;

function setGbStatus(msg, ok){
  const el = document.getElementById('gbStatus');
  if(!el) return;
  el.textContent = msg;
  el.style.color = ok ? 'var(--gold)' : '';
  el.style.opacity = ok ? '.75' : '.5';
}

function loadLocalGuestbook(){
  try { guestbook = JSON.parse(localStorage.getItem(GB_KEY) || '[]'); }
  catch(e){ guestbook = []; }
  renderGuestbook();
}

function initFirebaseGuestbook(){
  // tampilkan cache lokal dulu biar instan
  loadLocalGuestbook();

  const cfg = window.__FIREBASE_CONFIG;
  if(!cfg || !cfg.apiKey || cfg.apiKey === 'GANTI_API_KEY' || typeof firebase === 'undefined'){
    setGbStatus('mode lokal (Firebase belum dikonfigurasi)');
    return;
  }
  try {
    if(!firebase.apps || !firebase.apps.length) firebase.initializeApp(cfg);
    fbDb = firebase.database();
    fbReady = true;
    setGbStatus('terhubung ke Firebase ✓', true);

    const ref = fbDb.ref('guestbook').limitToLast(500);
    ref.on('value', snap => {
      const val = snap.val() || {};
      const list = Object.values(val).map(r => ({
        name: r.name || 'Anonim',
        msg:  r.msg  || '',
        color: r.color || '',
        ts: r.ts || 0
      })).sort((a,b)=> b.ts - a.ts);
      guestbook = list;
      try { localStorage.setItem(GB_KEY, JSON.stringify(guestbook)); } catch(e){}
      renderGuestbook();
    }, err => {
      console.warn('Firebase read error:', err);
      setGbStatus('koneksi gagal — mode lokal');
      fbReady = false;
    });
  } catch(err){
    console.warn('Firebase init failed:', err);
    setGbStatus('Firebase gagal — mode lokal');
    fbReady = false;
  }
}
async function pushCloudGuestbook(entry){
  if(!fbReady || !fbDb) throw new Error('Firebase not ready');
  await fbDb.ref('guestbook').push({
    name: entry.name,
    msg:  entry.msg,
    color: entry.color || '',
    ts:   firebase.database.ServerValue.TIMESTAMP
  });
}

function renderGuestbook(){
  if(!guestbook.length){
    $('#guestbookList').innerHTML = `<p class="opacity-60 italic font-display text-center col-span-full py-8">Belum ada pesan. Jadilah yang pertama menuliskan kenangan.</p>`;
    return;
  }
  $('#guestbookList').innerHTML = guestbook.map((g,i)=>{
    const colors=['','pink','blue','green'];
    const c = g.color || colors[i%4];
    const rot = ((i%2===0?-1:1) * (1+i%3));
    return `<div class="gb-entry ${c}" style="transform:rotate(${rot}deg)" tabindex="0" aria-label="Pesan dari ${escapeHtml(g.name)}">
      <p>${escapeHtml(g.msg)}</p>
      <p class="who">— ${escapeHtml(g.name)}</p>
    </div>`;
  }).join('');
}

/* Init firebase setelah load supaya skrip compat-nya sempat siap */
if(document.readyState === 'complete') initFirebaseGuestbook();
else window.addEventListener('load', initFirebaseGuestbook);

$('#openGuestbook').onclick=()=>{
  const m = $('#guestbookModal');
  m.classList.add('show'); m.setAttribute('aria-hidden','false');
  lastFocus = document.activeElement; trapFocus(m);
  setTimeout(()=>$('#gbName').focus(),100);
};
function closeGuestbook(){
  const m = $('#guestbookModal');
  m.classList.remove('show'); m.setAttribute('aria-hidden','true');
  $('#gbName').value=''; $('#gbMsg').value='';
  untrap(m);
}
async function submitGuestbook(){
  const n = ($('#gbName').value.trim() || 'Anonim').slice(0,40);
  const m = $('#gbMsg').value.trim().slice(0,500);
  if(!m) return;
  const entry = {name:n, msg:m, color:'', ts: Date.now()};
  // optimistic update
  guestbook.unshift(entry);
  renderGuestbook();
  closeGuestbook();
  celebrate(40);
  if(fbReady){
    try {
      await pushCloudGuestbook(entry);
      // listener 'value' akan refresh otomatis
    } catch(err){
      console.warn('Firebase push failed, kept locally:', err);
      try { localStorage.setItem(GB_KEY, JSON.stringify(guestbook)); } catch(e){}
      alert('Pesanmu tersimpan sementara di perangkat ini — koneksi ke server gagal. Coba lagi nanti.');
    }
  } else {
    try { localStorage.setItem(GB_KEY, JSON.stringify(guestbook)); } catch(e){}
  }
}
window.submitGuestbook = submitGuestbook;
window.closeGuestbook = closeGuestbook;
$('#guestbookModal').addEventListener('click', e=>{ if(e.target.id==='guestbookModal') closeGuestbook(); });

/* ====== SHARE — dihapus sesuai permintaan ====== */

/* ====== SCROLL — rAF throttled, IntersectionObserver active nav ====== */
const sections = ['hero','chapter1','timeline','students','chapter2','quotes','guestbook','ending'];
const navLinks = {};
$$('#chapterNav a').forEach(a=>{
  const href = a.getAttribute('href').slice(1);
  navLinks[href] = a;
});

/* Active nav using IntersectionObserver instead of per-scroll math */
const navIO = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    const id = e.target.id;
    if(e.isIntersecting && navLinks[id]){
      Object.values(navLinks).forEach(a=>a.classList.remove('active'));
      navLinks[id].classList.add('active');
    }
  });
},{ rootMargin: '-40% 0px -55% 0px', threshold: 0 });
sections.forEach(id=>{ const el=document.getElementById(id); if(el) navIO.observe(el); });

/* Scroll handler: progress bar + parallax + timeline fill, all in one rAF tick */
let scrollTicking = false;
function scrollLoop(){
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  const pb = $('#progressBar');
  pb.style.width = pct + '%';
  pb.setAttribute('aria-valuenow', String(Math.round(pct)));

  // parallax (skip on touch — janky on mobile + saves CPU)
  if(!IS_TOUCH && !REDUCED_MOTION){
    $$('.parallax').forEach(el=>{
      const sp = parseFloat(el.dataset.speed||'0.1');
      el.style.transform = `translate3d(0,${window.scrollY*sp}px,0)`;
    });
  }

  // timeline fill
  const tl = $('#timelineList');
  if(tl){
    const r = tl.getBoundingClientRect();
    const total = r.height;
    const seen = Math.min(Math.max(window.innerHeight*0.5 - r.top, 0), total);
    const fillEl = $('#tlFill');
    if(fillEl) fillEl.style.height = (seen/total*100) + '%';
  }

  // top button
  const topBtn = $('#topBtn');
  if(topBtn) topBtn.style.display = window.scrollY > window.innerHeight*0.8 ? 'flex' : 'none';

  scrollTicking = false;
}
window.addEventListener('scroll', ()=>{
  if(scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(scrollLoop);
}, {passive:true});

/* Smooth scroll for nav (prefers-reduced-motion respected by browser) */
$$('#chapterNav a').forEach(a=>{
  a.onclick = (e)=>{
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
  };
});

/* Top button */
$('#topBtn').onclick = ()=>window.scrollTo({top:0, behavior:'smooth'});

/* ====== CURSOR TRAIL — only on fine pointer, throttled ====== */
if(!IS_TOUCH && !REDUCED_MOTION){
  let lastTrail = 0;
  window.addEventListener('mousemove', e=>{
    const now = performance.now();
    if(now - lastTrail < 80) return;
    lastTrail = now;
    const d = document.createElement('div');
    d.className='trail-dot';
    d.style.left = (e.clientX-4)+'px';
    d.style.top  = (e.clientY-4)+'px';
    document.body.appendChild(d);
    requestAnimationFrame(()=>{ d.style.opacity='0'; d.style.transform='scale(2)'; });
    setTimeout(()=>d.remove(), 800);
  }, {passive:true});
}

/* ====== CONFETTI ====== */
function celebrate(n=120){
  if(REDUCED_MOTION) return;
  const c = $('#confetti');
  c.style.display='block';
  c.width = window.innerWidth; c.height = window.innerHeight;
  const ctx = c.getContext('2d');
  const colors = ['#b85450','#c9a961','#fff59a','#ffb8c1','#b8e0ff','#c8f0c0'];
  const parts = Array.from({length:n}, ()=>({
    x: Math.random()*c.width,
    y: -20 - Math.random()*200,
    vx: (Math.random()-.5)*4,
    vy: 2+Math.random()*4,
    s: 6+Math.random()*8,
    rot: Math.random()*Math.PI,
    vr: (Math.random()-.5)*.3,
    color: colors[Math.floor(Math.random()*colors.length)]
  }));
  let frames=0;
  function tick(){
    frames++;
    ctx.clearRect(0,0,c.width,c.height);
    parts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy; p.rot+=p.vr; p.vy+=0.05;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.fillStyle=p.color;
      ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*0.6); ctx.restore();
    });
    if(frames<260) requestAnimationFrame(tick);
    else { ctx.clearRect(0,0,c.width,c.height); c.style.display='none'; }
  }
  tick();
}
window.celebrate = celebrate;

/* ====== KONAMI EASTER EGG ====== */
let buf = [];
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
window.addEventListener('keydown', e=>{
  buf.push(e.key); if(buf.length>10) buf.shift();
  if(buf.join(',') === KONAMI.join(',')){ celebrate(300); buf=[]; }
});

/* ====== ANIMATED HERO COUNTER ====== */
function animateCount(el, target, dur=1800){
  const start = performance.now();
  function tick(t){
    const p = Math.min((t-start)/dur, 1);
    const eased = 1 - Math.pow(1-p, 3);
    el.textContent = Math.round(target * eased);
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const cntEl = $('#cntDays');
if(cntEl){
  const cio = new IntersectionObserver((es)=>{
    es.forEach(e=>{ if(e.isIntersecting){ animateCount(cntEl, 659); cio.disconnect(); } });
  },{threshold:.5});
  cio.observe(cntEl);
}

/* ====== SPARKLE ON CLICK ====== */
function sparkleBurst(x, y, count=8){
  if(REDUCED_MOTION) return;
  for(let i=0;i<count;i++){
    const s = document.createElement('div');
    s.className='sparkle';
    s.style.left = x+'px';
    s.style.top = y+'px';
    const ang = Math.random()*Math.PI*2;
    const dist = 30+Math.random()*50;
    s.style.setProperty('--dx', Math.cos(ang)*dist+'px');
    s.style.setProperty('--dy', Math.sin(ang)*dist+'px');
    document.body.appendChild(s);
    setTimeout(()=>s.remove(), 900);
  }
}
document.addEventListener('click', e=>{
  const t = e.target.closest('.sticky, .gb-entry, .polaroid');
  if(t) sparkleBurst(e.clientX, e.clientY, 10);
});

/* Pause heavy animations when tab hidden */
document.addEventListener('visibilitychange', ()=>{
  if(document.hidden){
    document.body.style.animationPlayState = 'paused';
    if(!bgm.paused){ bgm.pause(); bgm.dataset.wasPlaying = '1'; }
  } else {
    document.body.style.animationPlayState = '';
    if(bgm.dataset.wasPlaying === '1'){ bgm.play().catch(()=>{}); bgm.dataset.wasPlaying = ''; }
  }
});

/* init */
initReveal();
requestAnimationFrame(scrollLoop);