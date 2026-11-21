const slides=[{"title": "Remortgaging at Monzo, 2025–26", "notes": "", "ask": []}, {"title": "Monzo customers loved seeing their mortgage in the app, but it didn't make money", "notes": "", "ask": []}, {"title": "To make money, we launched remortgaging with Better.co.uk. It worked, but not enough", "notes": "", "ask": []}, {"title": "In 2025 and 2026, I led design for remortgaging through a strategy reset and an acquisition", "notes": "", "ask": []}, {"title": "We lent our engineers for two months, and used the time to listen", "notes": "", "ask": []}, {"title": "Customers asked us for four things", "notes": "", "ask": []}, {"title": "The whole remortgage, without leaving Monzo", "notes": "", "ask": []}, {"title": "I turned the vision into bets the team could ship", "notes": "", "ask": []}, {"title": "We designed the onboarding to Habito", "notes": "", "ask": []}, {"title": "First, I became the customer", "notes": "", "ask": []}, {"title": "We shipped the simplest tracker first", "notes": "", "ask": []}, {"title": "Reach people before they're ready to remortgage", "notes": "", "ask": []}, {"title": "More referrals didn't mean more mortgages", "notes": "", "ask": []}, {"title": "Where people got stuck, and who could fix it", "notes": "", "ask": []}, {"title": "I treated every decision as a bet", "notes": "", "ask": []}, {"title": "People thought we were a comparison site", "notes": "", "ask": []}, {"title": "The rest of Day 1, up to the hand-off to Habito", "notes": "", "ask": []}, {"title": "A push the moment the recommendation is ready", "notes": "", "ask": []}, {"title": "Do I trust this recommendation enough to go ahead?", "notes": "", "ask": []}, {"title": "Four rounds before the version you're about to see", "notes": "", "ask": []}, {"title": "The recommendation, inside Monzo · live since 1 Nov 2026", "notes": "", "ask": []}, {"title": "When people aren’t ready, or the lender withdraws the rate", "notes": "", "ask": []}, {"title": "The tracker shows who has to act next", "notes": "", "ask": []}, {"title": "The adviser chat: designed, then paused", "notes": "", "ask": []}, {"title": "Move the application into Monzo, pre-filled", "notes": "", "ask": []}, {"title": "Before scaling, I audited the whole product", "notes": "", "ask": []}, {"title": "One home screen that changes with your mortgage", "notes": "", "ask": []}, {"title": "What if designers could check their screens against the rules before Compliance?", "notes": "", "ask": []}, {"title": "What changed, and what’s still to do", "notes": "", "ask": []}, {"title": "What I learned", "notes": "", "ask": []}, {"title": "Why this matters for Benefits", "notes": "", "ask": []}, {"title": "Thank you. Where would you like to go deeper?", "notes": "", "ask": []}, {"title": "Chat with your adviser without leaving Monzo", "notes": "", "ask": [], "appx": true}, {"title": "The home screen, in eleven states", "notes": "", "ask": [], "appx": true}, {"title": "Four decisions, and why I made them", "notes": "", "ask": [], "appx": true}, {"title": "Four ways to show two mortgages on one home", "notes": "", "ask": [], "appx": true}, {"title": "Next: mortgage data straight from the lender", "notes": "", "ask": [], "appx": true}];
let current=0;
const sections=[...document.querySelectorAll('.slide')];
const canvas=document.querySelector('.canvas');
const figure=document.querySelector('.slide-figure');
const count=document.getElementById("slide-count");
const bottomCount=document.getElementById("bottom-count");
const captionNumber=document.getElementById("caption-number");
const captionTitle=document.getElementById("slide-title");
const progress=document.getElementById("progress-fill");
const progressBar=document.querySelector(".progress-track");
const notesDialog=document.getElementById("notes-sheet");
const notesHeading=document.getElementById("notes-heading");
const notesContent=document.getElementById("notes-content");
const sheetCount=document.getElementById("sheet-count");
const prevButtons=[document.getElementById("previous-slide"),document.getElementById("previous-bottom"),document.getElementById("notes-prev")];
const nextButtons=[document.getElementById("next-slide"),document.getElementById("next-bottom"),document.getElementById("notes-next")];
const pad=n=>String(n+1).padStart(2,"0");
const total=String(slides.length).padStart(2,"0");
const mainCount=slides.filter(s=>!s.appx).length;
const label=i=>i<mainCount?pad(i)+" / "+String(mainCount).padStart(2,"0"):"Appendix "+(i-mainCount+1)+" / "+(slides.length-mainCount);
function fit(){canvas.style.transform="scale("+(figure.clientWidth/1600)+")"}
new ResizeObserver(fit).observe(figure);fit();
function countUp(root){
  root.querySelectorAll('.count').forEach(el=>{
    const to=+el.dataset.to,pre=el.dataset.prefix||"",suf=el.dataset.suffix||"";
    const big=to>=1000,base=big?to/1000:to,t0=performance.now(),dur=1400;
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    function step(t){const p=reduce?1:Math.min(1,(t-t0-500)/dur);const e=p<0?0:1-Math.pow(1-p,3);
      el.textContent=pre+Math.round(base*e).toLocaleString('en-GB')+(big?suf:suf);if(p<1)requestAnimationFrame(step)}
    requestAnimationFrame(step);
  });
}
function render(){
  sections.forEach((s,i)=>{
    if(i===current){s.classList.remove('active');void s.offsetWidth;s.classList.add('active');s.setAttribute('aria-hidden','false')}
    else{s.classList.remove('active');s.setAttribute('aria-hidden','true')}
  });
  sections.forEach((s,i)=>s.querySelectorAll('iframe[data-src]').forEach(f=>{
    if(i===current){if(f.getAttribute('src')!==f.dataset.src)f.setAttribute('src',f.dataset.src)}
    else if(f.hasAttribute('src'))f.removeAttribute('src')}));
  countUp(sections[current]);
  const slide=slides[current];
  count.textContent=label(current);
  bottomCount.textContent=label(current);
  captionNumber.textContent=pad(current);
  captionTitle.textContent=slide.title;
  progress.style.width=(Math.min(1,(current+1)/mainCount)*100)+"%";
  progressBar.setAttribute("aria-valuenow",String(current+1));
  notesHeading.textContent="Slide "+(current+1)+" · "+slide.title;
  notesContent.textContent="";
  const say=document.createElement("ul");say.className="notes-say";String(slide.notes).split("\n").forEach(t=>{if(!t.trim())return;const li=document.createElement("li");li.textContent=t;say.append(li)});notesContent.append(say);
  if(slide.ask&&slide.ask.length){
    const box=document.createElement("div");box.className="notes-ask";
    const hd=document.createElement("h3");hd.textContent="If they ask";box.append(hd);
    slide.ask.forEach(([q,a])=>{const dt=document.createElement("p");dt.className="q";dt.textContent=q;const dd=document.createElement("p");dd.className="ans";dd.textContent=a;box.append(dt,dd)});
    notesContent.append(box);
  }
  notesContent.scrollTop=0;
  sheetCount.textContent=label(current);
  prevButtons.forEach(b=>b.disabled=current===0);
  nextButtons.forEach(b=>b.disabled=current===slides.length-1);
  history.replaceState(null,"","#"+(current+1));
}
function go(step){const next=Math.max(0,Math.min(slides.length-1,current+step));if(next!==current){current=next;render()}}
prevButtons.forEach(b=>b.addEventListener("click",()=>go(-1)));
nextButtons.forEach(b=>b.addEventListener("click",()=>go(1)));
function openNotes(){if(!notesDialog.open)notesDialog.showModal()}
document.getElementById("open-notes").addEventListener("click",openNotes);
document.getElementById("open-notes-bottom").addEventListener("click",openNotes);
document.getElementById("close-notes").addEventListener("click",()=>notesDialog.close());
notesDialog.addEventListener("click",event=>{if(event.target===notesDialog)notesDialog.close()});
document.addEventListener("keydown",event=>{
 if(event.target.closest("input,textarea,select,[contenteditable='true']"))return;
 if(event.key==="ArrowLeft"){event.preventDefault();go(-1)}
 if(event.key==="ArrowRight"||event.key===" "){event.preventDefault();go(1)}
});
addEventListener('message',e=>{const k=e.data&&e.data.deckKey;if(k==='ArrowLeft')go(-1);else if(k==='ArrowRight')go(1)});
document.addEventListener('click',e=>{const a=e.target.closest('a[data-go]');if(!a)return;e.preventDefault();const n=parseInt(a.dataset.go);if(n>=1&&n<=slides.length){current=n-1;render()}});
document.querySelectorAll('dialog.fb-pop').forEach(d=>{document.body.append(d);d.addEventListener('click',e=>{if(e.target===d||e.target.closest('.fb-close'))d.close()});['touchstart','touchend'].forEach(t=>d.addEventListener(t,e=>e.stopPropagation(),{passive:true}))});
document.addEventListener('click',e=>{const b=e.target.closest('[data-pop]');if(!b)return;const d=document.getElementById(b.dataset.pop);if(d&&!d.open)d.showModal()});
document.addEventListener('keydown',e=>{if(document.querySelector('dialog.fb-pop[open]')&&e.key!=='Escape')e.stopImmediatePropagation()},true);
let sx=null;figure.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
figure.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)go(dx<0?1:-1);sx=null});
const h=parseInt(location.hash.slice(1));if(h>=1&&h<=slides.length)current=h-1;
render();
