const slides=[
 {
  "title": "Remortgaging at Monzo, 2025–26",
  "notes": "Hi, I'm Laura. Thanks for having me. I'm going to walk you through remortgaging at Monzo, from the first research in 2025 to what's live today.\nMy title was Senior Product Designer. I was the only product designer on the squad, and I led the design from the initial vision through to the Habito integration.\nLet me start with the ending. We beat our referral goal by about 75 percent, but mortgages didn't grow at the same pace. Most of what you'll see is how I found out why, and what I designed to fix it.",
  "ask": []
 },
 {
  "title": "Monzo customers loved seeing their mortgage in the app, but it didn't make money",
  "notes": "When I joined, Homeownership was this. You could connect your mortgage from almost any UK lender and see it in the app: your balance, how much of your home you own, and what happens if you overpay or your rate changes.\nThere were 250,000 mortgages connected. Customers loved it, but it didn't make any money.\nIn summer 2024 we launched remortgaging with a broker, Better.co.uk. It proved the model. But once people left Monzo for Better's website, we couldn't see or change what happened next.",
  "ask": [
   [
    "How does connecting a mortgage work?",
    "Through TransUnion, the credit reference agency. You don't type any account details and it doesn't affect your credit score."
   ]
  ]
 },
 {
  "title": "Customers asked us for four things",
  "notes": "Early in 2025, growth was slowing. So from March we paused engineering for two months, and used that time to listen to customers: people who had remortgaged with us, and people who had started and given up. They told us four things.\nDon't send me out: they expected to get their new deal inside Monzo. Use what you already know about me. Let me choose how I interact. And tell me what's happening, because the waiting was the most stressful part.\nKeep these four in mind. Each one became a design decision, and at the end I'll show you where each one stands.",
  "ask": [
   [
    "What was your part in the research?",
    "Our user researcher led the interviews: one-to-one, with people who had remortgaged with us and people who had dropped out. I worked with the researcher on the synthesis and turned the themes into the vision."
   ]
  ]
 },
 {
  "title": "The whole remortgage, without leaving Monzo",
  "notes": "I turned that into a design vision: the whole remortgage, inside Monzo. The application comes into the app, already filled in with what we know. People choose how they talk to a mortgage expert. And they always know what happens next.\nWe presented it to leadership in May 2025, after about two months of work.\nA vision is a direction for the team. We weren't promising to build everything. But it made one thing clear: to give customers what they wanted, we needed to own much more of the journey than a referral partner allowed. It became part of the argument for changing our partnership model.\nLater Monzo bought Habito, another broker, and that's what made it possible to build. I wasn't part of the acquisition decision, but the team still goes back to this vision.",
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
  "notes": "We couldn't build the vision overnight, and we still had revenue targets. So we worked on two tracks: reach more people now, and move the journey into Monzo, step by step.\nMost people about to remortgage hadn't connected their mortgage, so we couldn't see them. About 365,000 customers had connected one, and more than two million had one we couldn't see.\nSo I designed a way in without connecting: indicative rates for everyone. From there people could connect, and we could get their deal-end date, to reach them at the right moment.\nThe last screen is estimated deals, for connected customers: deals from real lenders, with the monthly repayment and the fees. Estimated, because they come before you apply.\nThe result: by early 2026, total referrals across all our partners were around 7,500 a month, against a target of 4,300. That's about 75 percent above plan. New mortgage connections went from about 200 to about 1,000 a day. The results supported our reach hypothesis, but a referral is only the first step. It isn't a mortgage yet.",
  "ask": [
   [
    "Is the 75 percent your result?",
    "The hypotheses and the design of each experiment were mine. Engineering built them, and the data told us what was working and what wasn't."
   ],
   [
    "Which experiment worked best?",
    "Rate alerts: a notification when mortgage rates change. In our May 2025 review they were linked to about 44 percent of recent referrals. It was an internal, approximate read, not proof that the alerts caused all of them."
   ]
  ]
 },
 {
  "title": "I designed the onboarding to Habito",
  "notes": "At the end of 2025 Monzo agreed to buy Habito, another mortgage broker. From December we sent customers to both partners, and in October 2026 we stopped sending them to Better.\nLearning one: people thought we were a comparison site, so when a broker started asking about their finances, it felt like a trick. I redesigned the first screen to lead with the mortgage expert: 'Find a mortgage with free expert help'. It went live in May 2026, and Ops told us they were getting fewer questions about comparing deals.\nLearning two: people didn't want to leave Monzo. We couldn't avoid sending them to Habito yet, so I proposed framing the Habito account as a benefit: you can check your progress in the app, or on Habito's website.",
  "ask": [
   [
    "Who did the research in 2026, without a researcher?",
    "I did. I worked from the answers to our in-house surveys and from customer support conversations."
   ],
   [
    "Did the reframe move conversion?",
    "Not significantly yet, the numbers are still early. The signal so far comes from Ops: fewer questions about comparing deals, which was the confusion we wanted to fix. It also launched together with the Habito by Monzo brand, so I couldn't separate the two effects cleanly anyway."
   ],
   [
    "Why not just remove the lenders?",
    "Choice still matters, so the number is still there, in the second line. What changed is the order: first the expert, then the lenders."
   ],
   [
    "Is the screen on the right exactly what went live?",
    "It's my design for Day 1. The copy kept changing after launch. In my audit that summer I flagged that the live headline could still read like a comparison site, so it's a fight you keep having."
   ]
  ]
 },
 {
  "title": "Referrals beat the plan, the later stages didn’t",
  "notes": "Back to the numbers. In early 2026, this is where we were.\nThis chart only shows the Habito funnel, against its own 2026 targets. Each bar is the percentage of that stage's target, not a conversion rate. Habito referrals, the people we sent to Habito, were at 153 percent of target. Reaching a recommendation was at 72 percent. And accepted recommendations, going ahead with one lender, were at only 44 percent. The biggest gap came after the recommendation, when intent should be highest.\nWe only make money when the mortgage completes. That usually came months after the referral, and in the longest cases up to six months later. So we chose accepted recommendations as an earlier signal.\nSo the question changed. From 'how do we send more people?' to 'why don't people with a recommendation go ahead?'",
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
    "Of the people who got to a recommendation, about 6 to 6.5 percent submitted an application to a lender with Habito, against 9 to 10 percent with Better. And the goal for the first half was to take accepted recommendations from about 400 to 1,000."
   ],
   [
    "This chart says 153 percent of target, but earlier you said 75 percent above plan?",
    "They measure different things. The 75 percent is total referrals across all our partners, against the total target of 4,300. This chart is only Habito, against Habito's own targets."
   ],
   [
    "Did you reach the goal for accepted recommendations?",
    "They went up: a little with the view-only recommendation, and then after the push on day zero. I don't have the final figure against the goal, so I won't quote one."
   ]
  ]
 },
 {
  "title": "Where people got stuck, and who could fix it",
  "notes": "With our PM, I co-led a workshop about the drop-off, and I turned what we learned into an opportunity solution tree. Our hypothesis: these people wanted to remortgage, but when they saw the recommendation, they didn't feel confident enough to say yes.\nWe identified five possible causes. Relevance: you couldn't see the reasons or the mortgage expert behind the recommendation. Leaving Monzo: people got sent out of the app. Timing: some were still looking around. Momentum: our follow-up was slow and easy to miss. And friction: the form was long, which we were already working on.\nFor each cause I asked: can Monzo fix it, or is it up to Habito? Relevance was split: Habito wrote the advice, and we could change how it showed up in Monzo.",
  "ask": [
   [
    "What did you decide not to do?",
    "Three things. The quality of the advice itself, because that's Habito's side. Joint applications, because Habito's operations allow one account per application. And letting people lock a rate six months ahead, which stayed as an exploration. Saying no to those let us focus on the moment of decision."
   ],
   [
    "Why is relevance split between Habito and Monzo?",
    "It's split. Habito decides the recommendation and its reasons. What Monzo could change was how those reasons, and the mortgage expert, show up in the app. That's the recommendation work."
   ],
   [
    "Why a tree and not a list of ideas?",
    "Because the team had many ideas and one metric. The tree made every idea answer to a cause, and showed which causes we could actually fix from Monzo."
   ]
  ]
 },
 {
  "title": "We shipped the simplest tracker first",
  "notes": "The first progress tracker shows how I work with trade-offs. We designed it for Better and launched it with the Habito onboarding, so it worked for both partners. The ideal version had your steps, your deals and your expert in one place, but it depended on data we couldn't get. A second version, with a screen for every step, would have made the build much longer.\nSo we shipped the third: the broker's own steps, with one card that changes at each step, and a button back to the broker. We heard it was useful, but we didn't see a measurable change in how many people reached or accepted a recommendation. The decision I'd make again: ship it small. It showed us early how hard the data part was.",
  "ask": []
 },
 {
  "title": "A push the moment the recommendation is ready",
  "notes": "Then the moment people decide. People could already see their recommendation in Monzo, but only if they came back. When it was ready, the only reminder was an email from Habito. So I designed a push from Monzo, on day zero, the moment it's ready, when people care the most, and again on day three. Outside the app, it couldn't mention a rate or a lender, to stay compliant.\nWe had two options for where the push should take you. Option A was a new screen that set expectations: your recommendation is ready, Habito is regulated, and it's free. Option B took you to the progress tracker, where you could already see your recommendation, and from there to Habito.\nWe went with B, in May 2026. People found it hard to come back to the tracker, this gave them a reason to, and it was a screen we already had, so we could test fast. Accepted recommendations went up in our early read, but I don't have the exact uplift, so I'd treat it as a positive early signal, not proof that the push alone caused it.",
  "ask": [
   [
    "Did the push on day zero work?",
    "Accepted recommendations went up in our early read. I don't have the exact uplift, so I treat it as a positive signal, not proof that the push alone caused it."
   ],
   [
    "What did you measure?",
    "How many people opened the push on day zero against day three, how many clicked through to Habito, how many dropped before getting there, how long it took them, and in the end, accepted recommendations."
   ],
   [
    "Why land on the tracker and not on the recommendation?",
    "The tracker already existed, and people could already see their recommendation from it, so we could test quickly. It was working, it just wasn't easy to find."
   ],
   [
    "Was the push an A/B test?",
    "I don't remember exactly how it was measured, so I won't claim more than what I know: after the push launched in May, more people accepted their recommendation."
   ]
  ]
 },
 {
  "title": "What customers needed to see before choosing a mortgage",
  "notes": "Then the recommendation itself. The first view-only version came earlier, inside the Habito integration, and accepting stayed with Habito. In an early test, showing the other deals under the main one gave around a 10 percent relative lift in accepted recommendations, but it didn't get us to our goal. So I redesigned it, to help people decide with confidence.\nOver the summer I tried total cost first, and in September a hub with tools went to a design crit: too many things were competing for attention.\nDuring October we finalised the new recommendation, with a trade-off. People wanted to compare, but Habito wanted one recommended deal. So one deal sits on top, with a note from the mortgage expert explaining why, and the others are one step away. And the monthly payment goes back on top, because showing the total cost first put people off.",
  "ask": [
   [
    "What did the crit change?",
    "How much was on the first screen. Before, reasons, tools and timeline all competed. After, one recommendation and its reasons, and the rest behind a tap."
   ]
  ]
 },
 {
  "title": "The recommendation, inside Monzo",
  "notes": "So this is the new recommendation. I'll tap through it.\nFirst, you see the recommended deal and what you'd pay each month. 'Why this is your best deal' gives you the mortgage expert's reasons. 'How this deal was calculated' shows the real cost over the whole deal, and the deals we ruled out. Then you can accept, reject, or chat with your mortgage expert.\nThis version went live in November 2026. I designed these experiences while I was at Monzo. The team implemented and launched some of them after I left.\nThe live data will show if more people accept. To know if they understood it, I'd ask people to explain in their own words why that deal was chosen.",
  "ask": [
   [
    "Was this built?",
    "Yes. It went live in November 2026. I designed it while I was at Monzo, and the team built and launched it after I left, so it's too early for results. Before it, the view-only version and the push on day zero had shipped."
   ],
   [
    "How will the team know it works?",
    "Accepted recommendations is the main metric. But I'd also look at comprehension and wrong turns: do people open the reasons, do they ask the mortgage expert, do they come back."
   ],
   [
    "Where does the chat button go?",
    "To Habito's chat, inside the app. Building our own chat in Monzo was a separate project, and it was pushed back when the focus moved to first-time buyers."
   ]
  ]
 },
 {
  "title": "Move the application into Monzo, pre-filled",
  "notes": "Another piece I'll show you is the application form, the most fragmented part of the journey. It lived on the broker's website, and it was long: around 200 questions. With Better, in 2025, almost half of the people we sent to them never finished the form.\nI designed the application inside Monzo, with two decisions I care about. Pre-fill: you confirm what Monzo already knows, instead of typing it again. And saving your progress, because nobody has all their mortgage details ready in one go. We couldn't do that in the first version, so it comes in the next one.\nThe first version went live at the end of September 2026, as a 50/50 test against the existing journey on Habito's website. In the first read, about 40 percent of the people who started the form in Monzo finished it, compared with about 29 percent on the existing journey: roughly a 40 percent relative lift. The sample was still small, so I treated it as an early directional signal.",
  "ask": [
   [
    "Is the application live?",
    "Yes. The first version, a simple form, went live at the end of September 2026, as a 50/50 test. I designed it. In the first read, about 40 percent of the people who started it in Monzo finished it, against about 29 percent on the existing journey. It's an early signal, not a mature result."
   ],
   [
    "Forty percent more than what?",
    "It's a relative lift: about 40 percent finished the form in Monzo, against about 29 percent on the existing journey on Habito's website. So about 11 percentage points. The sample was still small, so I treat it as a directional signal."
   ]
  ]
 },
 {
  "title": "The tracker shows who has to act next",
  "notes": "And the next progress tracker. It answers 'tell me what's happening' better than the first one. A remortgage has around ten stages, and the next step can be yours, the mortgage expert's or the lender's. I worked with Habito to understand them, and our engineers built the bridges between both systems.\nI designed one card that changes during the journey. It's orange when it's your turn, and green when someone else is working on it. You get a notification at every step, and you can turn them off by tapping the bell. The push lands here, and the chat with your mortgage expert opens from here.\nIt went live in November 2026, after I'd left. People I worked with tell me the early signals are very positive, but it's too soon to have results.",
  "ask": [
   [
    "Is this live?",
    "Yes. The first, simpler tracker went live with the Habito onboarding, and this version went live in November 2026, after I left. People I worked with tell me the early signals are very positive, but there are no mature results yet."
   ],
   [
    "Why one card instead of a full timeline?",
    "Because people open it to answer one question: do I need to do something? The full timeline is one tap away."
   ]
  ]
 },
 {
  "title": "The vision, almost there",
  "notes": "This is where it all lands. In 2025 the vision was the whole remortgage without leaving Monzo. This is that journey, designed end to end, and the team is targeting February 2027 for it.\nThe new onboarding presents it as free advice through Monzo. The form is pre-filled, you chat with your mortgage expert, and the recommendation arrives in the chat. You accept it in the app, upload documents from your phone, and the tracker shows every step.\nAt the end we ask: is this your new mortgage? That closes the loop, so we can help again when the new deal ends. Some of these pieces are live already; the rest is designed, and isn't live yet.",
  "ask": [
   [
    "Is this live?",
    "Not all of it. The new recommendation and the new tracker are live. The rest is designed, and the team is targeting February 2027."
   ],
   [
    "Is that a real conversation in the chat?",
    "The chat design is from the Figma. The conversation is an example I wrote for this deck, so it reads like a real one."
   ]
  ]
 },
 {
  "title": "What if designers could check their screens against the rules before Compliance?",
  "notes": "One more thing, about raising the quality bar. Every screen about rates or deals went back and forth with Compliance. So I built a checker with Cursor, working from the documents that set out the rules, and we used it inside Monzo.\nYou paste your copy or drop in Figma screens. It flags what could break a rule and suggests a fix. If something required is missing, like the APRC, it tells you. It doesn't approve anything: Compliance still does that.\nLoans, Overdrafts and Wealth asked to use it too, so I ran a lunch and learn and set up a feedback channel. What you see is a copy I rebuilt for this case study, with no Monzo data in it.",
  "ask": [
   [
    "Does it replace Compliance?",
    "No. It flags and suggests; Compliance approves. It means the review starts from a cleaner draft and can focus on the hard calls."
   ],
   [
    "How did you build it?",
    "With Cursor, an AI coding tool. I gave it the documents with the rules and built it by describing what I needed and iterating, what people call vibe coding. I'm a designer, so that was the fastest way to get a working tool in front of the team."
   ],
   [
    "Who used it?",
    "My own team first. Then Loans, Overdrafts and Wealth asked to use it too."
   ],
   [
    "What did you build it for?",
    "For estimated deals first, and then for the view-only recommendation. Every word about rates and deals had to go through Compliance, and those screens went back and forth many times."
   ]
  ]
 },
 {
  "title": "What changed, and what’s still to do",
  "notes": "So, what came out of it. Referrals ended about 75 percent above our goal, but a referral is only the first step. The number that matters here is accepted recommendations. They went up a little with the view-only recommendation, and again after the push on day zero.\nBack to the four things customers asked for. Most of it is live: estimated deals, pre-fill, the push, the application inside Monzo since the end of September, and since November the new tracker, the new recommendation, and Habito's chat inside the app as a first step.\nIn September 2026, 355 applications came from Monzo, a record. Completed mortgages come months later, and I can't attribute those applications to the new form. Most of what I designed for Habito launched late in 2026, so the results are only starting to arrive.",
  "ask": [
   [
    "What would you measure next?",
    "Accepted recommendations first. Then whether people understand what they accepted: wrong turns, questions to the mortgage expert, and how many come back after leaving."
   ],
   [
    "What would you do differently?",
    "Research the decision earlier. We spent a long time improving the way in before learning that the real barrier was the decision itself."
   ],
   [
    "What did you do on first-time buyers?",
    "The vision, and the design of the first release, which launched in November 2026."
   ]
  ]
 },
 {
  "title": "What I learned",
  "notes": "Looking back, four things. One: look past the first number. Referrals beat the plan, but people dropped after the recommendation, so we focused on the recommendation. Two: say what it is. People thought we were a comparison site, and leading with the mortgage expert changed what they expected.\nThree: know the goal, and ship in steps. The vision didn't change, but we got there in pieces: the view-only screen, the push, then the new recommendation. And four: work with what your partner has. Habito had no design team, so I went through the journey as a customer, and we shipped first steps, like their chat inside our app.",
  "ask": []
 },
 {
  "title": "What I’d bring to Cleo",
  "notes": "And why Cleo. From what I understand, people use Cleo to make decisions about their money, often in a chat. That's close to my last two years: helping people trust a recommendation enough to act on it, and designing a chat with a mortgage expert, with guardrails.\nAnd I like to know the goal and ship in steps: small releases, measured early. That's how I'd like to work with you.",
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
