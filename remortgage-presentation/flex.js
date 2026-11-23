const slides=[
 {
  "title": "Monzo Flex, from a ‘Buy Now Pay Later’ to a credit card",
  "notes": "The second project is Flex. It's the story of how we turned Monzo Flex from a buy now, pay later product into a credit card. I led design from February 2023 to March 2025, and I'll take you from the first research to what launched.",
  "ask": []
 },
 {
  "title": "Monzo",
  "notes": "But first, Monzo. It's a digital bank that lives entirely in an app.",
  "ask": []
 },
 {
  "title": "Monzo is a leading digital bank in the UK, serving over 10 million users",
  "notes": "It's one of the leading digital banks in the UK, with over 10 million customers. The mission is to make money work for everyone. And the vision is a financial control centre: everything about your money in one place, even products Monzo doesn't offer yet.",
  "ask": []
 },
 {
  "title": "What is Monzo Flex?",
  "notes": "Flex is Monzo's revolving credit product, launched in 2021. It sat between buy now, pay later and a credit card. You got a credit limit, and for each purchase you chose a plan. You could also move a past transaction from your current account to Flex, and spread the payments over time.\nIn November 2022 it had about 350,000 customers.",
  "ask": []
 },
 {
  "title": "In January 2023, Flex was 15% behind on acquisition goals",
  "notes": "But in January 2023, Flex was 15 percent behind its acquisition goals, and NPS was going down.",
  "ask": []
 },
 {
  "title": "In Feb 2023, I started to work with Flex full time",
  "notes": "Before me, two senior designers worked on Flex, one for the growth squad and one for the product squad. They both left in January 2023. I had already helped Flex part time, so in February I moved full time and covered both squads.\nI had five months to land the new vision, with two product teams, two PMs, eight engineers and a data scientist, a part-time researcher, marketing, legal and compliance.",
  "ask": []
 },
 {
  "title": "The goals",
  "notes": "These were the goals.",
  "ask": []
 },
 {
  "title": "Project goals",
  "notes": "700,000 customers by the end of 2023. Average spend from £200 to £400 a month, which was our north star. And active customers from 47 to 60 percent.\nAnd underneath, moving Flex to Monzo's new app framework. Before it, every new product started from scratch, which was slow for engineering. Flex was the first product to move.",
  "ask": []
 },
 {
  "title": "Where did we start?",
  "notes": "So, where did we start?",
  "ask": []
 },
 {
  "title": "What do we already know…",
  "notes": "I set up sessions with stakeholders, and paired with the researcher and the data scientist to put everything we knew in one board.\nFour things stood out. People found it hard to understand the two ways of using Flex: the card, or moving transactions. They saw it as buy now, pay later, and many didn't need it because they already had a credit card. They wanted to pay like they do with a credit card. And 80 percent of our target market used credit cards, while only 9 percent used buy now, pay later.",
  "ask": [
   [
    "Why not keep travel for travellers?",
    "We tested it: the credit card message worked better than the travel one even with customers we had identified as travellers."
   ]
  ]
 },
 {
  "title": "What do we already know… control and variant",
  "notes": "So the hypothesis was that positioning Flex as a credit card was how we'd win the market. I audited our entry points and sign-up screens, and worked with marketing on new ways to frame the product. On the right, control and variant.\nSign-ups went up 45 percent against control, when the target was 25. Transaction engagement went up 5 percent, and spend 2 percent.\nWe also tested a travel framing. It started more applications, but ended in fewer accounts, so we chose credit card. Interest isn't customers.",
  "ask": []
 },
 {
  "title": "How can we align the product with our customers’ credit card needs?",
  "notes": "But new words weren't enough. How could the product itself meet our customers' credit card needs?",
  "ask": []
 },
 {
  "title": "What we already have…",
  "notes": "I audited the full product. Different value propositions across screens, confusing actions and copy, and an odd architecture.\nFor example, the manage tab had 'Pay off extra', which made people think they could pay towards their balance. In reality, they had to pick one purchase at a time.",
  "ask": []
 },
 {
  "title": "Initial research",
  "notes": "Then the researcher and I spoke with 20 customers, Flex users and credit card users. We wanted to understand the needs we weren't covering as a credit card, and the biggest pain points.",
  "ask": []
 },
 {
  "title": "Key needs",
  "notes": "The main problem: we focused on single purchases, and people wanted to manage Flex as a whole. They wanted the numbers in one place, and to pay and edit at a Flex level. 37 percent had more than 10 active purchases, and to change their monthly payment they had to open each one.\nThey wanted a default for card payments, because choosing a plan for every purchase was painful. And they asked for balance transfers, deposits, joint accounts, and points and rewards.\nWhat surprised me: payment behaviours explained people better than personas.",
  "ask": []
 },
 {
  "title": "Exploring vision concepts for feedback and alignment",
  "notes": "After playing the research back to the team, the vision was a credit card with full visibility and control over credit and transactions. One that helps you understand your situation, and that you can use every day.\nI shared ideas early, to discuss and align. And the card leads the experience, because it's visible from the Monzo home screen.",
  "ask": []
 },
 {
  "title": "But wait! What are we building first?",
  "notes": "And with the vision came some friction.",
  "ask": []
 },
 {
  "title": "Misalignment within the team",
  "notes": "We didn't know what to build first. Keep the current experience and fix payments, move to the new framework first, or split it into launch phases. We just couldn't agree.",
  "ask": [
   [
    "Was there friction with the design system?",
    "A bit of guesswork at the start, because we were stress-testing what the new framework could do. Engineers wanted to be efficient, and I pushed for some principles, like always showing people when they save interest."
   ]
  ]
 },
 {
  "title": "Workshop together",
  "notes": "So I ran a prioritisation workshop. Everything we had to decide on one side, and we voted on product vision, business impact, engineering effort and reusable components.\nAt the end we had an order: adopting the new framework, then card defaults, then the payment experience.",
  "ask": []
 },
 {
  "title": "Testing the vision (I)",
  "notes": "I tested the first vision with 8 customers, to see if they understood the new structure, and payments at a Flex level. The reaction was positive. But when prompted, the numbers and the structure confused them. The screen was trying to do too much.",
  "ask": []
 },
 {
  "title": "Reshaping the vision (II)",
  "notes": "So I simplified it, and removed what we wouldn't build yet, like insights and rewards. Then I ran a task-based test with 10 customers, asking them to do things with their payments.\n9 out of 10 completed the tasks without help. We found places to explain better, like what a default would do, and the difference between paying early and paying extra.",
  "ask": [
   [
    "How did you handle edge cases?",
    "By sharing the work with engineering all the time. Some ideas we couldn't build, or had to rethink, came out of those conversations. The scenarios are in the Figma file."
   ]
  ]
 },
 {
  "title": "Life after the happy paths",
  "notes": "Then all the scenarios, including when things don't go to plan. A credit product has many. Sharing early with engineering, we found what we couldn't do.\nWe couldn't merge paying the monthly payment with editing it, because editing needed a new allocation algorithm. So it came later. And paying towards the balance doesn't reduce your next monthly payment, so I added friction, so people know before they pay.",
  "ask": []
 },
 {
  "title": "The end result",
  "notes": "So, what did we launch?",
  "ask": []
 },
 {
  "title": "Focus view",
  "notes": "A new focus view. Everything in one view: the numbers first, then payments, then purchases, settings, feedback and documents. 40 percent of customers never tapped the manage tab, so we removed that step. I added subheadings so payments were clear, and progress bars on each purchase, because seeing debt go down feels good.\nAnd I convinced the team to ship limit utilisation in the first version, by working with other teams building progress bars. Credit card users care about it because of their credit score. After launch, 26 percent more people asked for a higher limit.\nThe screen adapts to every scenario: new customers, active ones, or people in arrears.",
  "ask": []
 },
 {
  "title": "Paying balance",
  "notes": "People can now pay their balance, see how much is left, and whether they save interest. And because an extra payment doesn't cover the next monthly payment, the message and the friction here mattered.",
  "ask": []
 },
 {
  "title": "Edit payment",
  "notes": "Editing the monthly payment came a bit later, with two entry points: next to the monthly payment, and in payment settings. You see if you save or add interest, and the effect on your future payments.\nThe principle: always the least interest for the customer. If you lower your payment, we change the shorter or cheaper plans first. If you raise it, we pay the plans with the most interest first.",
  "ask": []
 },
 {
  "title": "Card defaults",
  "notes": "And the requested card defaults. You choose how card payments behave automatically, also during sign-up.\nA bit sad for me as a designer: we couldn't offer pay in 3 or 6 as a default, because it was a revenue risk. So it's pay in full, the minimum, or choose every time.",
  "ask": []
 },
 {
  "title": "Helping new users to understand the product",
  "notes": "For new customers, suggested actions in the first 30 days. The physical card first, because people with a physical card engage more, and research showed it helps the mental model of a credit card. Then moving a transaction, so they learn both ways. Then Apple or Google Pay, to keep us top of mind.",
  "ask": []
 },
 {
  "title": "And a new map of Flex",
  "notes": "Because we changed frameworks, I redesigned the whole product, fixed the copy, reviewed sign-up, and created one source of truth for every team. It set a precedent for the rest of the product teams.\nLater we also launched holds, money transfers and credit insights. Happy to talk about those.",
  "ask": []
 },
 {
  "title": "How it performed",
  "notes": "So, how did it perform?",
  "ask": []
 },
 {
  "title": "Impact",
  "notes": "Really well. Retention up 37 percent, 20.5 percent fewer payment complaints, engagement up 25, NPS up 8, 15 percent fewer customers missing payments, average spend up 10, 7 percent less support contact, and 26 percent more people increasing their limit.\nFlex was named best credit card provider in the UK, twice. It was product of the day on 11:FS Pulse, and people even comment on it on LinkedIn. These are the team's results.",
  "ask": []
 },
 {
  "title": "Learnings",
  "notes": "What did I learn?",
  "ask": []
 },
 {
  "title": "What did I learn?",
  "notes": "Different phases of research shaped the design, and aligned the team. Sharing with the core experience team all the time mattered: Flex was the first product on the new framework, so other teams could reuse what we built.\nRisk, compliance and legal had a key role, and working with them continuously helped us ship faster. Launching little by little, in cohorts of 50,000 customers, de-risked the launch and showed us corner cases. And we kept finding bugs after launch, so I documented them and shared them, to get them into the roadmap.",
  "ask": []
 },
 {
  "title": "If I had more time…",
  "notes": "If I had more time: customers still struggle with credit card payment cycles, and get confused between their monthly payment and their total balance. Our colour contrast needed work, and we started an accessibility audit. And I'd bring insights into the experience: it could be a differentiator, and teach good habits around debt.\nAnd that's Flex. Thank you. I'm happy to go deeper into any part of it.",
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
