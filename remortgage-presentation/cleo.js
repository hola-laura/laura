const slides=[
 {
  "title": "Remortgaging at Monzo, 2025–26",
  "notes": "Hi, I'm Laura. Thanks for having me. I'm going to walk you through remortgaging at Monzo, from the first research in 2025 to what's live today.\nMy title was Senior Product Designer. I was the only product designer on the squad, and I led the design from the initial vision through to the Habito integration.\nLet me start with the ending. We beat our referral goal by about 75 percent, but mortgages didn't grow at the same pace. Most of what you'll see is how I found out why, and what I designed to fix it.",
  "ask": []
 },
 {
  "title": "Monzo customers loved seeing their mortgage in the app, but it didn't make money",
  "notes": "When I joined, Homeownership was this. You could connect your mortgage from almost any UK lender and see it in the app: your balance, how much of your home you own, and what happens if you overpay or your rate changes.\nThere were 250,000 mortgages connected. Customers loved it, but it didn't make any money.\nIn 2024 we launched remortgaging with a broker, Better. It proved the model. But once people left Monzo for Better's website, we couldn't see or change what happened next.",
  "ask": [
   [
    "How does connecting a mortgage work?",
    "Through TransUnion, the credit reference agency. You don't type any account details and it doesn't affect your credit score."
   ]
  ]
 },
 {
  "title": "Customers asked us for four things",
  "notes": "In February 2025 we paused for two months to listen to customers: people who had remortgaged with us, and people who had started and given up. They told us four things.\nDon't send me out: they expected to get their new deal inside Monzo. Use what you already know about me. Let me choose how I talk to you. And tell me what's happening, because the waiting was the most stressful part.\nYou can see it in the two personas we built from research. George remortgaged with us, but he was frustrated that we sent him to a partner's website. Carla started and gave up, because doing everything outside the app was too much.\nKeep these four in mind. Each one became a design decision, and at the end I'll show you where each one stands.",
  "ask": [
   [
    "What was your part in the research?",
    "Our user researcher led the interviews: one-to-one, with people who had remortgaged with us and people who had dropped out. I worked with the researcher on the synthesis and turned the themes into the vision."
   ]
  ]
 },
 {
  "title": "The whole remortgage, without leaving Monzo",
  "notes": "I turned that into a design vision: one journey, inside Monzo, that adapts to the person. The application comes into the app, already filled in with what we know. People choose how they talk to an adviser. And they always know what happens next.\nWhat's playing here is the vision, straight from my Figma frames. I planned the discovery phase, and I ran the vision workshop with our researcher.\nIt was a direction for the team. We weren't promising to build everything. But it made one thing clear: to give customers what they wanted, we needed to own much more of the journey than a referral partner allowed. It became part of the case for changing our partnership model.\nLater Monzo bought Habito, another broker. I wasn't part of that decision, but the team still goes back to this vision.",
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
  "notes": "We couldn't build the vision overnight, and we still had revenue targets. So we worked on two tracks: reach more people now, and move more of the journey into Monzo, step by step.\nMost people about to remortgage hadn't connected their mortgage, so we couldn't see them. About 365,000 had connected one, and more than two million had one we couldn't see.\nSo I designed a way in without connecting: indicative rates for everyone. From there people could connect, and we captured their deal-end date, to reach them at the right moment.\nThe filters screen in the middle is my favourite detail. We didn't know their home, but we knew where they lived from their Monzo address. So we pre-filled the property value and the balance from averages for their area. You saw rates for a home like yours without typing anything, and you could change them.\nLater we launched estimated deals for connected customers: deals from real lenders, with the monthly repayment and the fees. Estimated, because they come before the fact-find.\nThe result: between late 2025 and spring 2026, referrals beat our goal by about 75 percent, around 7,500 against 4,300. New mortgage connections went from about 200 to about 1,000 a day. But a referral is only the first step. It isn't a mortgage yet.",
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
  "title": "I designed the onboarding to Habito",
  "notes": "At the end of 2025 Monzo agreed to buy Habito, another mortgage broker. From December we sent customers to both partners, and in October 2026 we stopped sending them to Better.\nWe didn't have time to redesign and test the whole onboarding. So I translated Better's onboarding to Habito, applying what we had learned, and balancing the trade-offs Habito came with.\nLearning one: people thought we were a comparison site. We led with 'compare deals from over 100 lenders', so when a broker started asking about their finances, it felt like a trick. I redesigned the first screen to lead with the expert: 'Find a mortgage with free expert help'. It went live on the 1st of May 2026, and Ops told us they were getting fewer questions about comparing deals. The before and after are behind this button.\nLearning two: people didn't want to leave Monzo. We couldn't avoid sending them to Habito yet, so the team framed the Habito account as a benefit: you can check your progress in the app, or on Habito's website.",
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
  "notes": "Back to the numbers. With Habito, the reach work was still paying off.\nThis chart compares each stage of the Habito funnel with its 2026 target. Referrals were at 153 percent of plan. Recommendation to submitted to lender was at 44 percent. The biggest gap came after the recommendation, when intent should be highest.\nThe money only arrives when a mortgage completes, months later. So the team chose an earlier signal we could read in weeks: accepted recommendations. That's the first moment people really commit.\nTo give you a sense of scale: of the people who got to a recommendation, about six in a hundred submitted an application to a lender. With Better it was nine or ten, although you can't compare them directly, because Better put a phone call first.\nSo the question changed. From how do we send more people, to why don't people who already have a recommendation go ahead?",
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
    "They went up. First with the push on day zero, and then a little more with the view-only recommendation. I don't have the final figure against the goal, so I won't quote one."
   ]
  ]
 },
 {
  "title": "Where people got stuck, and who could fix it",
  "notes": "With our PM I co-led a workshop about the drop-off, and I turned what we learned into an opportunity solution tree. One outcome at the top: more recommendations accepted.\nOur hypothesis was that these customers really want to remortgage, but when they see the recommendation, they don't feel confident enough to act.\nThree of the areas. Relevance: the recommendation feels generic. The experience break: people get sent out of Monzo, and one customer said it felt like being palmed off to another organisation. And momentum: people were ready, but our follow-up was slow and easy to miss.\nFor each area I asked two questions: is it a root cause, and can Monzo fix it, or is it in Habito's hands? That showed us where design in Monzo could make the biggest difference. And these were hypotheses: rates, eligibility or how fast the adviser replied could explain part of the drop too.",
  "ask": [
   [
    "What did you decide not to do?",
    "Three things. The quality of the advice itself, because that's Habito's side. Joint applications, because Habito's operations allow one account per application. And letting people lock a rate six months ahead, which stayed as an exploration. Saying no to those let us focus on the moment of decision."
   ],
   [
    "Why is relevance in Habito's hands?",
    "Because the adviser writes the recommendation. What Monzo could change was how it's presented and explained, and that's the recommendation bet."
   ],
   [
    "Why a tree and not a list of ideas?",
    "Because the team had many ideas and one metric. The tree made every idea answer to a cause, and showed which causes we could actually fix from Monzo."
   ]
  ]
 },
 {
  "title": "I treated every decision as a bet",
  "notes": "I treated every decision as a bet. For each one I wrote down what we believed and where that came from, how we'd know it was working, and what would make me change direction.\nFor example, for the recommendation: if people read every reason and still don't accept, then the problem is the deal itself. And for the application: if more people finish the form but accepted recommendations don't move, the form wasn't the real problem.\nThe four bets have two goals. How we explain the product and the application form help more people get to a recommendation. The recommendation and the adviser help more people accept it.",
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
  "title": "We shipped the simplest tracker first",
  "notes": "The first progress tracker shows how I work with trade-offs. The first option was the ideal one: your steps, your deals and your expert in one place. But it depended on data we couldn't get. Not every step Habito gave us could be tracked from our side.\nSo with engineering we made a second proposal, only with the states we could track accurately. Documents mattered to customers, but we couldn't reliably tell whether Habito had received them. I suggested showing documents as an upcoming step. That let us explain what was ahead without telling someone their paperwork was progressing when we didn't know.\nEvery state needed its own screen and copy, so it was slower to build. We shipped the third option: Habito's own steps, with a link to the exact step on their website, because it was the one we could launch on time.\nCustomers found it useful, but it didn't move the metrics. A tracker without the rest of the journey mostly reduces the stress of waiting. The decision I'd make again: ship it small. It showed us early how hard the data part was.",
  "ask": []
 },
 {
  "title": "A push the moment the recommendation is ready",
  "notes": "The first bet on the decision was the quickest one. When your recommendation was ready, the only reminder was an email from Habito. So we sent a push from Monzo on day zero, the moment it's ready, when people care the most.\nI explored where the push should land. Option A was a short screen in between, saying Habito is regulated and free. Two taps and a whole screen to build trust, but it was new to build. Option B was the progress tracker, which already existed. Three taps and more distraction, but nothing new to build.\nOn paper I preferred A, because it was the cleaner test. We shipped B in May, because we could test it much faster. We measured it on accepted recommendations, and they went up. I don't remember the exact number, so I won't give you one.\nThe tracker was already live, but it was hard to find. The push took people straight to it, so more people got there, and more of them accepted.",
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
   ],
   [
    "Was the push an A/B test?",
    "I don't remember exactly how it was measured, so I won't claim more than what I know: after the push launched in May, more people accepted their recommendation."
   ]
  ]
 },
 {
  "title": "What customers needed to see before choosing a mortgage",
  "notes": "Then the recommendation itself. A first view-only version in the app moved accepted recommendations a little. Not enough. So I redesigned it, with one goal at the top of my file: help people decide with confidence when they're ready, or wait on purpose, without dropping off.\nFour rounds in about four months. In June, a top pick presented through the adviser, with the alternatives next to it. When I reviewed it against the research, it was missing a way to reach the adviser, and an honest sense of urgency.\nOver the summer, a low-fidelity round: total cost first, and staying versus switching, in pounds. In September, a hub with tools went to a design crit, and the feedback was that too many things were competing for attention.\nSo in version 2.1, in October, the monthly payment goes back on top, because showing the total cost first put people off. Monzo had seen it before: in a 2019 remortgage test with the broker Mojo, deals ranked by true cost looked uncompetitive to customers. Now you see the monthly payment and why the adviser chose this deal, and then you can open the full cost and see which deals were ruled out.",
  "ask": [
   [
    "What did the crit change?",
    "How much was on the first screen. Before, reasons, tools and timeline all competed. After, one recommendation and its reasons, and the rest behind a tap."
   ]
  ]
 },
 {
  "title": "The recommendation, inside Monzo",
  "notes": "This is version 2.1, made from my Figma frames. It starts in the tracker: your recommendation is ready.\nOne screen with the deal and what you pay every month. 'Why this is your best deal' gives you the adviser's reasons. 'How this deal was calculated' shows the real cost over the whole deal, and the deals we ruled out. Then you can accept, reject, or chat with your adviser.\nIt went live on the 1st of November. I designed it, but it was built after I'd left. The numbers and some of the copy are placeholders.\nThe live data will show if more people accept. To know if they understood it, I'd ask people to explain in their own words why that deal was chosen.",
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
  "notes": "The other bet I'll show you is the application form, the most fragmented part of the journey. It lived on the broker's website, and it was long. With Better, in 2025, almost half of people dropped out there.\nI designed the application inside Monzo, with two decisions I care about. Pre-fill: you confirm what Monzo already knows, instead of typing it again. And saving your progress, because nobody has all their mortgage details ready in one go. That one is in the next version.\nWe measure it step by step, so the team can see exactly where people stop. The first version went live at the end of September, tested with half of our customers. The first signal is good, but the data isn't mature yet.\nAnd the next version is designed, on the right. It splits the form into sections and tells you what you'll need before you start.",
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
  "title": "The tracker shows who has to act next",
  "notes": "And the next progress tracker. It answers 'tell me what's happening'. A remortgage has around ten stages, and the next step can be yours, the adviser's or the lender's. I worked with Habito to understand them, and our engineers built the bridges between both systems.\nI designed one card that changes during the journey. It's orange when it's your turn, and green when someone else is working on it. The push lands here, and it's where the adviser chat opens.\nIt went live this November. It's the design I expect to have the biggest impact, and it's too soon to tell.",
  "ask": [
   [
    "Is this live?",
    "Yes. A simpler tracker has been live since the first journey, and this version went live in November 2026, after I left. Former colleagues tell me the early signals are very positive, but there are no mature results yet."
   ],
   [
    "Why one card instead of a full timeline?",
    "Because people open it to answer one question: do I need to do something? The full timeline is one tap away."
   ]
  ]
 },
 {
  "title": "The 2025 vision, designed end to end",
  "notes": "This is where it all lands. In 2025 the vision was the whole remortgage without leaving Monzo. This is that journey, designed end to end, and the plan is to launch all of it in February.\nThe advice comes from Monzo, and nobody leaves the app. The form is pre-filled, you chat with your expert, and the recommendation arrives in the chat. You accept it in the app, upload documents from your phone, and the tracker shows every step.\nAt the end we ask: is this your new mortgage? That closes the loop, so we can help again when the new deal ends. It's designed, and it isn't live yet.",
  "ask": [
   [
    "Is this live?",
    "Not yet. It's designed, and the plan is to launch all of it in February."
   ],
   [
    "Is that a real conversation in the chat?",
    "The chat design is from the Figma. The conversation is an example I wrote for this deck, so it reads like a real one."
   ]
  ]
 },
 {
  "title": "What if designers could check their screens against the rules before Compliance?",
  "notes": "One more thing, about raising the quality bar. Every screen about rates or deals went back and forth with Compliance. So I built a checker with Cursor, using the documents with the rules, and we used it inside Monzo.\nYou paste your copy or drop in Figma screens. It flags what could break a rule and suggests a fix. If something required is missing, like the APRC, it tells you. It doesn't approve anything: Compliance still does that.\nLoans, Overdrafts and Wealth asked to use it too, so I ran a lunch and learn and set up a feedback channel. What you see is a copy I rebuilt for this case study, with no Monzo data in it.",
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
  "title": "Where AI helps me, and where it isn’t worth it",
  "notes": "Here's how I use AI more broadly. Four ways: to experiment, like the checker. Built into the team's flow, checking UI copy before Compliance. In my own work: drafts, quick UI variations, and analysing support conversations. And to share what I learn, with a lunch and learn and a prompt library.\nAnd where it isn't worth it: deciding the strategy, standing in for research with real people, high-impact decisions without a human, like eligibility or risk, and generating solutions before we understand the problem.\nThe way I'd put it: I use AI to increase the speed and breadth of exploration, but I don't delegate product judgment or accountability to it.",
  "ask": []
 },
 {
  "title": "What changed, and what’s still to do",
  "notes": "So, what came out of it. Referrals ended about 75 percent above our goal, but a referral is only the first step. The number that matters here is accepted recommendations, and that one went up: first with the push on day zero, then a little more with the view-only recommendation.\nBack to the four things customers asked for. Most of it is live: estimated deals, pre-fill, the push, the application inside Monzo since the end of September, and since November the new tracker and the new recommendation. The adviser chat opens inside the app, on Habito's Intercom, as a first step.\nIn September, 355 applications came from Monzo, a record. Completed mortgages come months later, and I can't attribute those applications to the new form. Most of what I designed for Habito shipped late in 2026, so the results are only starting to arrive.\nIf I could measure one more thing, it would be understanding: whether people can explain what they accepted. Wrong turns, questions to the adviser, and how many come back after leaving.",
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
  "notes": "Looking back, four things. One: getting people in isn't enough. Referral growth showed us a bottleneck after the recommendation. Two: say what it is. People thought we were a comparison site, and leading with the expert changed that.\nThree: ship what you can, then improve it. The push used the tracker we already had, and acceptance went up. And four: work with your partner's limits. Habito had no design team, so I went through the journey myself, and we shipped first steps.",
  "ask": []
 },
 {
  "title": "What I’d bring to Cleo",
  "notes": "And why Cleo. From what I understand, people use Cleo to make decisions about their money, often in a chat. That's close to my last two years: helping people trust a recommendation enough to act on it, and designing an adviser chat with guardrails.\nAnd I work in bets, each with a metric and a reason to stop. That's how I'd like to work with you.",
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
