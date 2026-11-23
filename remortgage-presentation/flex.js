const slides=[
 {
  "title": "From pay later to an everyday credit card",
  "notes": "The second project is Flex, Monzo's credit product. Between February 2023 and March 2025 I led design as it went from a pay-later product to an everyday credit card. I'll take you from the first research to what launched, and what happened after.\nI covered two squads, Growth and Core, and worked with a part-time researcher, marketing, legal and compliance. The new direction had to land in five months.",
  "ask": []
 },
 {
  "title": "By early 2023, Flex was 15% behind its customer goal",
  "notes": "Flex was a hybrid. You got a credit limit, and for every purchase you chose a plan: pay in full, or spread it over monthly payments. You could also move a past transaction from your current account to Flex.\nAt the start of 2023 we were 15 percent behind our customer goal, and NPS was dropping. The goals for the year: 700,000 customers, average spend from £200 to £400 a month, which was our north star, and active customers from 47 to 60 percent.\nAnd underneath, Flex had to move to Monzo's new app framework. So this was also a full redesign.",
  "ask": []
 },
 {
  "title": "The product said “pay later”. Customers already used credit cards.",
  "notes": "I started with what we already knew. With our researcher and the data scientist, I put everything in one board for the team.\nThe growth squad had surveyed 1,924 eligible customers who had never tried Flex. 65 percent used credit cards, only 9 percent used buy now, pay later, and 71 percent already knew Flex. It just didn't sound like it was for them.\nSo our hypothesis was that positioning Flex as a credit card would bring in more customers. I audited every entry point and sign-up screen, and worked with marketing on new ways to frame the product. On the right, before and after.",
  "ask": []
 },
 {
  "title": "A travel message got more applications. A credit card message got more customers.",
  "notes": "Here's a call I think you'll find interesting. We tested two framings in the app: Flex for travel, and Flex as a credit card.\nTravel started 13 percent more applications, but ended with 7.7 percent fewer accounts. The credit card message brought 10.8 percent more applications, and 7.1 percent more accounts. It even worked better than the travel message with customers we had identified as travellers.\nSo we chose credit card. Interest isn't customers: what matters is who finishes. Then a campaign with credit card messaging, sent to 870,000 customers, created 20 percent more accounts than our best previous message.",
  "ask": [
   [
    "Why not keep travel for travellers?",
    "We tested that too: the credit card message worked better than the travel one even with customers we had identified as travellers. We kept a travel trigger-based experiment on the list, as long as it didn't push out credit experiments."
   ]
  ]
 },
 {
  "title": "New words weren’t enough. A credit card has to behave like one.",
  "notes": "But new words weren't enough. A credit card has to behave like one. I audited the product and found different promises across screens, and confusing actions. For example, 'Pay off extra' looked like paying your balance. In reality, it paid one purchase at a time.\nThen our researcher and I interviewed 20 customers. Flex was built around single purchases, and people wanted to manage the account as a whole. 37 percent had more than 10 active purchases. To change what they paid each month, they had to open every purchase, one by one.\nThey also wanted to pay the balance in one go, and to set a default for card payments, because choosing a plan for every coffee was painful. What surprised me: payment behaviours explained people better than personas did.",
  "ask": []
 },
 {
  "title": "A credit card with full visibility and control",
  "notes": "After playing back the research with the team, the vision was a credit card with full visibility and control, that you can use every day. The card leads the experience, also from the Monzo home screen.\nBut we didn't agree on what to build first: fix payments, move to the new framework, or phase it differently. So I ran a prioritisation workshop. We scored every option on fit with the vision, business impact and engineering effort. The order: the new framework first, then card defaults, then the payment experience.\nI tested the first version. People liked the structure, but payments confused them: the screen tried to do too much. So I simplified it, took out what we wouldn't build yet, like insights and rewards, and ran a task-based usability test. In the second round, 9 out of 10 completed the tasks without help.",
  "ask": [
   [
    "Was there friction with the design system?",
    "A bit of guesswork at the start, because we were stress-testing what the new framework could do. And engineers wanted to be efficient, but I pushed for some principles, like showing people when they save interest."
   ]
  ]
 },
 {
  "title": "One balance. A clearer starting point.",
  "notes": "This is the account we launched. Research and product data ranked what people came to do, and that ranking decided what went where. First the balance, what's left to spend and the next payment. Then paying early, paying extra or clearing it all. Then recent purchases, with each breakdown on a second screen.\n40 percent of customers never tapped the manage tab, so everything moved into one view.\nOne thing I'm proud of: limit utilisation. We weren't building insights yet, but credit card users care about their credit score. I talked to other teams building progress bars, and convinced my team to ship it in the first version. After launch, 26 percent more people asked for a higher limit.",
  "ask": []
 },
 {
  "title": "In credit, less friction isn’t always better.",
  "notes": "Then repayments. You can now pay your whole balance, and see what's left and the interest you save.\nBut an extra payment doesn't always lower your next one, because we allocate it to the latest purchases. So I added a pause that says so before you pay. In credit, less friction isn't always better.\nEditing the monthly payment shipped later. I first imagined it in the same flow as paying, but it changed how money is allocated to future payments, and engineering needed a new algorithm. So we split it, and the clearer account reached customers first. Now one amount is the starting point, and you see the effect on interest and the months ahead before you confirm.",
  "ask": []
 },
 {
  "title": "Choose once, not for every coffee",
  "notes": "Card defaults were one of the most requested features. Now you choose once: pay in full, the minimum, or still choose every time. We couldn't offer pay in 3 or 6 as a default, because it was a revenue risk.\nAnd one call I made. 'Pay in full' first looked like the kindest default: no interest. But failed payments went up. I recommended stopping it and testing 'Choose for every purchase' first. Failed payments barely changed, and people kept the decision.",
  "ask": []
 },
 {
  "title": "One screen. Every financial situation.",
  "notes": "A credit product can't show everyone the same thing. The account adapts to where each person is: not used yet, spending, payment due, missed payment, payment made.\nFor new customers I also designed suggested actions for the first 30 days, starting with the physical card, because people with a physical card engage more, and it helps the mental model of a credit card.",
  "ask": [
   [
    "How did you design all the edge cases?",
    "By sharing the work with engineering all the time. A credit product has many states, and some things we couldn't do, or had to rethink, came out of those conversations."
   ]
  ]
 },
 {
  "title": "A credit card that won awards",
  "notes": "It worked. Retention went up 37 percent, and 15 percent fewer customers missed payments. Payment complaints fell by 20.5 percent and support contacts by 7 percent. Average spend went up 10 percent, and NPS 8 percent.\nFlex won Best Credit Card Provider at the British Bank Awards in 2023, and Best Credit Card at the Card and Payments Awards in 2024. And from Monzo's annual reports: balances went from £169 million when I joined to £553 million by March 2025, with over a million customers.\nThose are the team's results. Marketing and credit decisions played their part too.",
  "ask": []
 },
 {
  "title": "What I learned",
  "notes": "Three things I take with me. One: interest isn't customers. Measure who finishes, not who starts. Two: in credit, friction can be care. The pause before an extra payment saves people from a surprise.\nThree: our hardest calls weren't only design. Easy options could cost Monzo money or put customers at risk. Next time I'd bring business and risk into the first workshop, and measure success by people staying on top of their payments, not only by sign-ups.\nWhat came next: money transfers, for the things a card can't pay for, and limit changes that never feel like a surprise. Happy to go into those.",
  "ask": []
 },
 {
  "title": "Where would you like to go deeper?",
  "notes": "And that's Flex. Thank you. I'm happy to go deeper into any part of it.",
  "ask": []
 }
];
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
