const slides=[
 {
  "title": "Remortgaging at Monzo, 2025–26",
  "notes": "Hi, I'm Laura. Thanks for having me. I'm going to present a remortgaging case study from Monzo, but first I need to give you a bit of context, if that's OK. I joined Monzo's Homeownership team when the product didn't make any money at all, so I saw it grow from a nice feature into something that brings revenue.\nMy title was Senior Product Designer, but for most of that time I was the only designer in the squad, so I was leading the design.\nIf you only remember one thing from today, I'd like it to be this. We beat our referral goal by 75 percent, and the mortgages didn't follow.\nSo most of what you'll see is how I found out why, and what I designed to fix it.\nLet me give you a bit more context, so you understand the product.",
  "ask": []
 },
 {
  "title": "Monzo customers loved seeing their mortgage in the app, but it didn't make money",
  "notes": "So, when I joined, Homeownership was basically this. You could connect your mortgage, from almost any UK lender, and see it in the Monzo app.\nYour balance, how much of your home you actually own, what happens if you overpay, and how a new rate would change what you pay every month. And customers loved it.\nWhen I joined, there were 250,000 mortgages connected. The problem was that it didn't make any money. It was good for engagement, and that was it.\nFirst, we needed to prove we could make money. Remortgaging was the obvious place to start.\nSo we partnered with Better.co.uk, a mortgage broker. A broker finds you a deal and does the paperwork for you.\nWhen the mortgage completes, the lender pays the broker, the customer pays nothing, and Monzo gets a share if the customer started in our app.",
  "ask": [
   [
    "How does connecting a mortgage work?",
    "Through TransUnion, the credit reference agency. You don't type any account details and it doesn't affect your credit score."
   ]
  ]
 },
 {
  "title": "The whole remortgage, without leaving Monzo",
  "notes": "In February 2025 we paused for two months to listen to customers: people who had remortgaged with us, and people who had started and given up.\nThey told us four things. Don't send me out: they expected to get their new deal inside Monzo. Use what you already know about me. Let me choose how I talk to you. And tell me what's happening.\nSo I turned all of that into a design vision.\nOne journey, inside Monzo, that adapts to the person. The application comes into the app, already filled in with what we know. People choose if they want to talk to an adviser first, or see deals first after filling the form.\nLike that, the paperwork gets easier. And you always know what happens next. I planned the sprint for it, and I ran the vision workshop together with our researcher.\nBut it made one thing very clear. To give customers the experience they wanted, we needed to own much more of the journey than a referral partner allowed us to.",
  "ask": [
   [
    "So your vision made Monzo buy Habito?",
    "No, and I wouldn't claim that. It showed what customers expected, and that we couldn't build it through a referral: we couldn't change the partner's flow or see where people dropped out. That was one input into the case for a different model. The acquisition itself was a leadership decision."
   ],
   [
    "When did the vision start?",
    "I wrote a first vision proposal in November 2024, right after our diagnosis. The pause in February 2025 gave us the time to go back to customers and take it further."
   ]
  ]
 },
 {
  "title": "Reach people before they're ready to remortgage",
  "notes": "While the partner change was being worked out, we still had a revenue target. So from the second half of 2025 we focused on what we could control, which was reach.\nMost people who were about to remortgage hadn't connected their mortgage, so we couldn't see them. At the time, about 365,000 customers had connected one, and more than two million had one we couldn't see.\nWhat if we gave them a tool to see mortgage rates? From there they could connect. And we could capture their deal-end date, to reach them at the right moment, even if they never connected. And we didn't only launch it for people who hadn't connected: we launched it for connected customers too.\nIn the end, rates and deals became the main way people started a remortgage. One colleague even posted about the rate updates in our product feedback channel. It's behind this button.\nFor the result. Between late 2025 and spring 2026 we beat our referral goal by about 75 percent. That's around 7,500 referrals, when the goal was 4,300.\nSo the hypothesis was right. But keep one thing in mind for the next chapter. A referral is only the first step. It isn't a mortgage yet.",
  "ask": [
   [
    "Is the 75 percent your result?",
    "The hypotheses and the design of each experiment were mine. Engineering built them, and the data told us what was working and what wasn't."
   ],
   [
    "Which experiment worked best?",
    "Rate updates: telling people when mortgage rates change. They were driving more than 30 percent of our mortgage referrals."
   ]
  ]
 },
 {
  "title": "More referrals didn't mean more mortgages",
  "notes": "And then the partner changed. At the end of 2025 Monzo agreed to buy Habito, which is another mortgage broker, and from December our customers started going to Habito, and no longer to Better.\nBut more referrals didn't mean more mortgages. Remember that the money only arrives when a mortgage completes, and that can be months after the referral.\nSo the team looked at an earlier signal, something we could read in weeks. Accepted recommendations.\nA recommendation is the deal that the adviser proposes to you, and when you accept it, that's the first moment you really commit. And fewer people were getting to the end than before.\nAnd what surprised me was where people dropped. You'd expect it to be at the start, and it was after the recommendation.\nSo these were people who had filled in the whole questionnaire, which brokers call the fact-find, and talked to an adviser, and then they didn't go ahead.\nSo for me this is the turning point of the whole story.\nUntil here, the question was how do we send more people. From here, the question is why people who already have a recommendation don't go ahead.",
  "ask": [
   [
    "Why accepted recommendations and not revenue?",
    "Revenue arrives when the mortgage completes, months later. Accepting a recommendation is the earliest point where a customer commits, so we could learn in weeks. The risk is optimising the proxy, which is why the chart also follows submissions to the lender."
   ],
   [
    "Was Habito converting worse than Better?",
    "It's not like-for-like. With Habito you can reach a recommendation without a call; Better put a call first, so different people got that far. And a mortgage takes months, so the cohorts were still maturing. But the gap was real enough to act on."
   ],
   [
    "What were the real numbers?",
    "From referral to submission we were at about 6 to 6.5 percent with Habito, against 9 to 10 percent with Better. And the goal for the first half was to take accepted recommendations from about 400 to 1,000."
   ],
   [
    "This chart says 153 percent of plan, but earlier you said 75 percent above goal?",
    "They're different periods. The 75 percent is the whole reach period, from late 2025 to spring 2026. This chart only covers the first months with Habito."
   ],
   [
    "Did you reach the goal for accepted recommendations?",
    "They went up. First with the push on day zero, and then with the view-only recommendation, about 5 percent. I don't have the final figure against the goal, so I won't quote one."
   ]
  ]
 },
 {
  "title": "I treated every decision as a bet",
  "notes": "So I went to find out. First, I applied through Habito myself, as a real customer, and saved every screen. Then, with our PM, I co-led a workshop with the team about the drop-off.\nThese customers really want to remortgage. But when they see the recommendation, they don't feel confident enough to act.\nOut of that came four bets. I treated every decision as a bet, and for each one I wrote down three things.\nWhat we believed, and where that belief came from. How we would know it was working. And what would make me change direction.\nI'll give you two examples. For the recommendation, if people read every reason and they still don't accept, then the problem is the deal, and how we explain it doesn't matter. And the deal is Habito's side.\nAnd for the application, if more people finish the form but accepted recommendations don't move, then the form wasn't the real problem.\nLet me show you those two.",
  "ask": [
   [
    "Did the team define these, or you?",
    "The main metric and the kill switch were agreed as a team. The early signals for each design are how I framed them, so that every design had a way to be proven wrong."
   ],
   [
    "Which bet were you least sure about?",
    "The recommendation. Explaining a deal better only helps if the deal is good for that person, and that part wasn't ours to change."
   ]
  ]
 },
 {
  "title": "A push the moment the recommendation is ready",
  "notes": "The first one is about the moment when people decide. People were ready, but our follow-up was slow.\nAt that point the only reminder was an email from Habito.\nSo the first experiment was very simple. Send a push from Monzo on day zero, the moment the recommendation is ready, which is when people care the most, and again on day three. The design question was where that push should take you.\nI explored two options: a new screen in between, or the progress tracker, which already existed. With the tracker we could test much faster, so that's what launched in May.\nWe measured it on accepted recommendations, and they went up. I don't remember the exact number, so I'm not going to give you one. And I think I know why it worked.\nThe tracker was already live, but it wasn't easy to find. The push took people straight to it, so more people got there, and more of them accepted.",
  "ask": [
   [
    "Did the push on day zero work?",
    "Yes. Accepted recommendations went up. I don't remember the exact figure, so I'd rather not quote one."
   ],
   [
    "What did you measure?",
    "How many people opened the push on day zero against day three, how many clicked through to Habito, how many dropped before getting there, how long it took them, and in the end, accepted recommendations."
   ],
   [
    "Why land on the tracker and not on the recommendation?",
    "The tracker already existed, so we could test quickly. And it was working, it just wasn't easy to find. Showing the recommendation itself in Monzo came next, with the view-only version."
   ]
  ]
 },
 {
  "title": "The recommendation, inside Monzo · live since 1 Nov 2026",
  "notes": "Then we brought the recommendation itself into Monzo. A first version, where you could only see it, moved accepted recommendations about 5 percent. Positive, but not enough. People could see the deal, but they couldn't really decide.\nSo I redesigned it, in four rounds over about four months. This is version 2.1, made from my Figma frames. It starts in the tracker, your recommendation is ready.\nThen you get one screen with the deal and what you pay every month. 'Why this is your best deal' gives you the adviser's reasons.\n'How this deal was calculated' shows the real cost over the whole deal, so you see more than the monthly payment. And you can see the deals we ruled out.\nBefore you commit you can see every detail, and you can accept, reject, or chat with your adviser, which opens Habito's chat. And the last screen tells you what happens next.\nThe numbers and some of the copy are placeholders. And this version went live on the 1st of November. I designed it, but it was built after I'd left, so I didn't get to see it live.",
  "ask": [
   [
    "Was this built?",
    "Yes. It went live on the 1st of November 2026. I designed it, but it was built after I left, so I didn't see it live, and it's too early for results. Before it, the push on day zero and the view-only version had shipped."
   ],
   [
    "How will the team know it works?",
    "Accepted recommendations is the main metric. But I'd also look at comprehension and wrong turns: do people open the reasons, do they ask the adviser, do they come back."
   ],
   [
    "Where does the chat button go?",
    "To Habito's chat. Bringing the adviser chat inside the app was a separate project, and it's paused for this year."
   ]
  ]
 },
 {
  "title": "Move the application into Monzo, pre-filled",
  "notes": "The last bet I'll show is the application form, the most fragmented part of the whole journey. It was outside Monzo, on the broker's website, and it was long. Around 200 questions.\nSo I designed the application inside Monzo, and there are two decisions I really care about.\nThe first is pre-fill. You don't type everything, you just confirm what Monzo already knows about you. That's the answer to 'use what you already know about me'.\nThe second is that you can save it and come back later, because nobody has all their mortgage details ready in one go.\nThe first version is a simple form, and it went live at the end of September. People on the team tell me the first signal is strong.\nAbout 40 percent more people are finishing the form and getting to a recommendation, compared with when they started in Monzo and had to go to Habito's website.\nThe data isn't mature yet, so for me it's still an early signal.",
  "ask": [
   [
    "Is the application live?",
    "Yes. The first version, a simple form, went live at the end of September 2026. I designed it. Former colleagues tell me that about 40 percent more people are finishing the form and getting to a recommendation. It's an early signal, not a mature result."
   ],
   [
    "Forty percent more than what?",
    "Than people who started in Monzo and then had to go to Habito's website to fill in the form. It's the number the team shared with me, and it's early, so I wouldn't put it in a results table yet."
   ]
  ]
 },
 {
  "title": "What changed, and what’s still to do",
  "notes": "So, what came out of all this? At the start I told you that we beat the referral goal and the mortgages didn't follow. Referrals ended about 75 percent above our goal.\nBut a referral is only the first step, and I prefer to tell you that than to claim an uplift I can't prove.\nSo the number that matters in this story is accepted recommendations. And that one went up.\nNow, the four things customers asked for. I'm not going to read every row. Most of it is live.\nAnd I want to be honest about 2026. Most of what I designed for Habito shipped late in the year, so the results are only starting to arrive.\nAnd the new tracker, which is the design I expect to have the biggest impact, has only just launched.\nI'm told the first signals are very positive, but it's too soon.",
  "ask": [
   [
    "What would you measure next?",
    "Accepted recommendations first. Then whether people understand what they accepted: wrong turns, questions to the adviser, and how many come back after leaving."
   ],
   [
    "What would you do differently?",
    "Research the decision earlier. We spent a long time improving the way in before learning that the real barrier was the decision itself."
   ],
   [
    "What did you do on first-time buyers?",
    "The vision, and the design of the first release, which launched on the 11th of November."
   ]
  ]
 },
 {
  "title": "What I learned",
  "notes": "Looking back, there are four things I take with me. One, more referrals aren't more mortgages. Getting more referrals didn't help us until we designed the middle of the funnel.\nTwo, when the systems of two companies meet, things like routing, consent and who you're talking to are design decisions too. Three, shipping fast is fine, but you agree the guardrails and the rollback before you start.\nAnd four, name the problem first. One word, compare or broker, changed what people expected from the whole journey.",
  "ask": []
 },
 {
  "title": "Thank you. Where would you like to go deeper?",
  "notes": "And that's the story. Thank you. I'm happy to go deeper into any part of it.",
  "ask": [
   [
    "Why did you leave Monzo?",
    "After more than five years at Monzo, and two on the same product, it was my moment to change. The business was putting its energy into opening new lines, which is a fair call. But it meant the plan for remortgaging would stay half-built for a long time, and it started to feel like a project I wouldn't see finished. So I decided to take what I'd learned to a new problem."
   ]
  ]
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
