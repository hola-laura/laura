const slides=[
 {
  "title": "Remortgaging at Monzo, 2025–26",
  "notes": "Hi, I'm Laura. I joined Monzo's Homeownership team when the product didn't make any money yet, so I've seen it go from an engagement feature to a revenue line. Today I'll focus on 2025 and 2026: the moment we reset the strategy, and everything that happened from there. I worked as the design lead, and for most of that time I was the only designer, in one squad with a PM, engineers, a data scientist and a user researcher, and partners in Habito, Operations and Compliance. But first, two minutes of context, so the reset makes sense.",
  "ask": []
 },
 {
  "title": "Monzo customers loved seeing their mortgage in the app — but it didn't make money",
  "notes": "When I joined, Homeownership let you connect your mortgage from almost any UK lender and see it right in the Monzo app: your balance, how much of your home you own, what happens if you overpay, and how a new rate would change your monthly payment. Customers loved it. Today more than 640,000 mortgages are connected. But it didn't make any money. It was an engagement product.",
  "ask": [
   [
    "How does connecting a mortgage work?",
    "Through TransUnion, the credit reference agency. You don't type any account details and it doesn't affect your credit score."
   ]
  ]
 },
 {
  "title": "Connect in a minute — and tell us when your deal ends",
  "notes": "Here's what that looks like. I rebuilt it in code from my Figma files, so you can see it move. You connect in a few taps, with no account details, and we find your mortgage. The part I want to point out is the end: we ask one question, when does your current deal end, with an 'I don't know' way out and a reminder you choose. In one year, the share of new connections that told us their date went from 38 to 88 percent. That date matters for the rest of the story, because it's how we know when to talk to someone about remortgaging.",
  "ask": [
   [
    "Is 38 to 88 percent your result?",
    "It's a team result: the design, plus optimisation and CRM campaigns. My part was the question, the 'I don't know' way out and the reminder."
   ],
   [
    "Why is it rebuilt in code?",
    "So I can show it moving without sharing internal files. The lender is anonymised and the figures are placeholders from the designs."
   ]
  ]
 },
 {
  "title": "To make money, we launched remortgaging with Better.co.uk — it worked, but not enough",
  "notes": "So we wanted to prove a revenue stream, and remortgaging was the obvious one: everyone with a mortgage needs a new deal every few years, and we often knew when. We found a partner, the broker Better.co.uk. Monzo spotted the right moment, and Better gave the advice and handled the application. I designed that first journey, and it was a click-out experience: customers left Monzo and finished on Better's website. It proved there was a business, around 5,000 customers and about 1.5 million pounds over time. But it didn't go the way we wanted. We missed our revenue goals, growth stalled, and once customers left the app we couldn't see where or why they dropped out. And that was my main learning from that first chapter: our success ended at the referral. Once people left Monzo, we were blind to everything that happened next.",
  "ask": [
   [
    "Why did it miss the goals?",
    "Reach and visibility. We could only prompt people whose deal-end date we knew, and our data stopped at the referral. So we kept improving the way in, without seeing where people dropped out afterwards."
   ],
   [
    "Was the first journey a bad design?",
    "No. 11:FS Pulse scored the journey 4.6 out of 5 in July 2024. The limit was the model: people finished on someone else's website, and we couldn't see or change what happened there."
   ],
   [
    "What did you try with Better?",
    "Experiments on their side of the journey: letting people schedule the adviser call, a path without a call, and choosing between deals first or adviser first. We could propose changes to their site, but we couldn't ship them ourselves."
   ]
  ]
 },
 {
  "title": "In 2025 and 2026, I led design for remortgaging through a strategy reset and an acquisition",
  "notes": "This is the part of the story I want to focus on. In 2025 and 2026, I led design for remortgaging through two big changes: a strategy reset, and then an acquisition. In 2025 I led the design vision and the growth work. In 2026, after Monzo bought Habito, I worked on bringing the journey into the app, and then on first-time buyers, the next journey for Homeownership. I was an individual contributor in one squad, with a PM, engineers, a data scientist, Layla from research, and partners in Habito, Operations and Compliance. Monzo's Product Director later wrote about this period on the Monzo blog, and he names me as the designer who led the vision.",
  "ask": []
 },
 {
  "title": "Five chapters, five decisions",
  "notes": "So here's how I'll walk you through it, in five chapters. First, the reset, when we paused to listen. Second, the vision that came out of it. Third, reach: getting to people before they were ready. Fourth, and this is the biggest part, what happened after Monzo bought Habito, where I'll go through four decisions. And finally, how I work with AI, the results, and what I learned.",
  "ask": []
 },
 {
  "title": "We lent our engineers for two months — and used the time to listen",
  "notes": "The reset started in a slightly unexpected way. In February 2025, Monzo needed engineers in Financial Health; there was a real business need there. Homeownership wasn't going the way we wanted, so we agreed they could borrow our engineers for two months. And we used that time on purpose: we ran a discovery sprint to understand why our experiments weren't moving the numbers. Layla, our user researcher, interviewed two groups: people who had remortgaged with us, and people who had started and given up. That sprint is what changed the strategy.",
  "ask": [
   [
    "Whose decision was the pause?",
    "Our Product Director's, with leadership behind it. Leadership confirmed the long-term commitment to Homeownership and we agreed a return date. So it was a pause with an end, not a wind-down."
   ],
   [
    "What were the seven workstreams?",
    "Each had an owner and a deliverable. Customer research was Layla's and the vision was mine. Others covered things like how feasible each idea was."
   ]
  ]
 },
 {
  "title": "Customers wanted one journey — but not the same one",
  "notes": "Customers told us four things. First: don't send me out. People expected to get their new deal inside Monzo, not on another website. You can see it in the two personas Layla built from the interviews. George remortgaged with us, and was frustrated at being sent to a partner's website. Carla started and gave up, when she hit the friction of doing it all outside the app. Second: use what you already know about me, instead of asking me again. Third: let me choose. Some people wanted a phone call for reassurance; others wanted to do it themselves, as long as a person was there if they needed one. And fourth: tell me what's happening, because the waiting was the most stressful part.",
  "ask": [
   [
    "What was your part in the research?",
    "Layla led the interviews: one-to-one, with people who had remortgaged with us and people who had dropped out. I worked with her on the synthesis and turned the themes into the vision."
   ]
  ]
 },
 {
  "title": "One journey, inside Monzo, that flexes to you",
  "notes": "I turned that into a design vision: one journey, inside Monzo, that flexes to the person. Bring the application into the app, pre-filled with what we already know. Let people choose whether to talk to an adviser first or see deals first. Take the pain out of paperwork. And always show what happens next. These are the designs; Monzo later published them on its blog. It wasn't a list of promises, it was a direction. And it made something very clear: the experience customers wanted meant owning much more of the journey than a referral partner allowed. With Better, customers left the app, we couldn't change their flow, and we couldn't see where people dropped out. The vision became part of the case for changing our partnership model, and Monzo later bought Habito, which made it buildable. I wasn't part of the acquisition decision, but the vision is still what the team refers back to.",
  "ask": [
   [
    "So your vision made Monzo buy Habito?",
    "No, and I wouldn't claim that. It showed what customers expected, and that we couldn't build it through a referral: we couldn't change the partner's flow or see where people dropped out. That was one input into the case for a different model. The acquisition itself was a leadership decision."
   ]
  ]
 },
 {
  "title": "I turned the vision into bets the team could ship",
  "notes": "But a vision only matters if it changes what you ship. So we broke it down into now, next and later. Some things were no-brainers that didn't need a test; one of them was mine: I improved the progress tracker so customers saw their status closer to real time. You'll see where that tracker ended up later. Others were experiments on the riskiest assumptions, like letting people choose between talking to an adviser first or seeing deals first. That one we had to park when Habito arrived, and I'll come back to it in decision 4. In June I led a value-proposition workshop with Product Marketing, Research and our Product Director, built around two kinds of customers: comparers, who want to look at deals themselves, and delegators, who want an expert to handle it. That gave us the differentiators to design for: personalised insights, forms filled in for you, and flexible contact. And keep an eye on the 'later' column: two of those became my work in 2026.",
  "ask": [
   [
    "What happened to the adviser-first test?",
    "We parked it when the partner changed, because Habito's advisers work by chat, not by phone. The idea came back in 2026 as flexible journeys: letting people choose when they talk to someone."
   ]
  ]
 },
 {
  "title": "Decision 1 · Reach people before they're ready to remortgage",
  "notes": "Now, the decisions. While the move to a new partner was being worked out, we still had a revenue target with Better. So from the second half of 2025, we focused on what we could control: reach. Most people who were about to remortgage hadn't connected their mortgage, so we simply couldn't see them. I designed ways in that didn't need a connection: adding your deal-end date, indicative rates and estimated deals. I also designed Focus View, where your home screen changes depending on where you are in the journey, and the move of Homeownership into the Grow tab. We ran all of this as a fast series of experiments, and I kept an experiment file in Figma linking every design to its hypothesis and its result. It became the team's source of truth, so we stopped repeating failed tests. It's linked here on the slide, together with the Grow tab work. Between late 2025 and spring 2026 we beat our referral goal by about 75 percent. The catch was that indicative rates are regulated, so every word mattered. I'll come back to that when I talk about AI.",
  "ask": [
   [
    "Which experiment worked best?",
    "The rates calculator, which is the next slide. It gave people something useful before asking for anything. What didn't work was showing full lender offers: unfamiliar lender names made people hesitate, so we paused it."
   ],
   [
    "Is the 75 percent your result?",
    "It's a team number: design, CRM and optimisation together. My part was the entry points and the design of each experiment."
   ]
  ]
 },
 {
  "title": "Value before commitment: see your rates first",
  "notes": "This is the experiment that worked best, so let me show it. You find it on your home screen. You see estimated rates for your situation, and it also works if you haven't connected a mortgage. You can change your details, like the property value or the term, and the monthly repayment updates as you go. And because these are regulated numbers, 'how are rates estimated' is always one tap away. It gave people something useful before we asked them for anything.",
  "ask": [
   [
    "How do you show rates without it being advice?",
    "They are estimates, labelled as estimates, with the assumptions one tap away. Advice only starts when you talk to a broker. Every word went through Compliance."
   ]
  ]
 },
 {
  "title": "More referrals didn't mean more mortgages",
  "notes": "Then the partner changed. At the end of 2025 Monzo agreed to buy Habito, and from December our customers started going to Habito instead of Better. The reach work kept paying off: referrals were well above plan. But more referrals didn't mean more mortgages. Far fewer people went on to submit an application to a lender than we expected. And the surprising part was where they dropped. It wasn't at the start. It was after the recommendation: people who had filled in the whole questionnaire, which brokers call the fact-find, and talked to an adviser, and then didn't go ahead. That's when intent should be highest, so it couldn't just be the quality of the traffic. This is where I stopped myself from jumping straight into screens. With Layla, our researcher, and my colleague Hayley, I co-led an insight workshop on the drop-off, and then I turned what we learned into an opportunity solution tree.",
  "ask": [
   [
    "Was Habito converting worse than Better?",
    "It's not like-for-like. With Habito you can reach a recommendation without a call; Better put a call first, so different people got that far. And a mortgage takes months, so the cohorts were still maturing. But the gap was real enough to act on."
   ],
   [
    "Can you share the real numbers?",
    "Not the absolute ones, they're confidential. That's why the chart shows each stage against its target."
   ]
  ]
 },
 {
  "title": "One outcome, five opportunities — and who can fix each one",
  "notes": "This is the tree, simplified. At the top, one outcome: more recommendations accepted. Under it, the problem: high-intent customers don't feel confident enough, at the moment they see the recommendation, to act. Then five opportunity areas. Relevance: the recommendation feels generic, with no reasoning or human behind it. Experience break: being kicked out of Monzo. One customer described it as being palmed off to another organisation. Timing: people are still exploring when the recommendation lands. Momentum: they were ready, but our follow-up was slow and easy to miss. And friction: a long form that's hard to pick back up. The part I found most useful was the last row. For each area I asked two questions: is it a root cause, or something that makes it worse? And is it in Monzo's power, or in Habito's? Relevance, for example, was mostly in Habito's hands, because they write the recommendation. That told us where design in Monzo could make the biggest difference, and the next decisions map straight onto it.",
  "ask": [
   [
    "Why is relevance in Habito's hands?",
    "Because the adviser writes the recommendation. What Monzo could change was how it's presented and explained, and that's decision 3."
   ],
   [
    "Why a tree and not a list of ideas?",
    "Because the team had many ideas and one metric. The tree made every idea answer to a cause, and showed which causes we could actually fix from Monzo."
   ]
  ]
 },
 {
  "title": "Decision 2 · Tell people what this actually is",
  "notes": "The first fix tackled the experience break, and it was simple, but it mattered a lot: tell people what this actually is. People thought they were using a comparison site. So when a broker started asking about their finances, it felt like a bait-and-switch. For Habito's first day as part of Monzo, I reframed the journey from 'compare mortgages' to 'get a mortgage with a broker'. I cut the consent screens down while keeping the commission disclosure Compliance needed, added trust signals early, and a clear 'what happens next'. The hard call was the pre-fill experiment, which was still running. We stopped it early and turned pre-fill on for everyone, because it had little downside and the launch date was fixed. We traded some learning for speed, on purpose. It launched on the 1st of May 2026, together with the Habito by Monzo brand. This is the entry screen I designed for Day 1: it says plainly that Habito is now part of Monzo, that a real expert will help you, and that it's fee-free.",
  "ask": [
   [
    "Did the reframe move conversion?",
    "I don't have a clean number for it. It launched together with the Habito by Monzo brand, so the two effects can't be separated, and mortgage cohorts take months to mature."
   ],
   [
    "Why stop an experiment early?",
    "The launch date was fixed and pre-fill had almost no downside. Waiting for significance would have meant launching Day 1 with an inconsistent experience."
   ]
  ]
 },
 {
  "title": "Do I trust this recommendation enough to go ahead?",
  "notes": "The next decision is about the moment of decision itself, and this is the question customers were really asking themselves: do I trust this recommendation enough to go ahead? Before designing anything, I scored the screen we had against what confidence actually needs: understanding, feeling it's for me, alternatives, trade-offs, the real cost, and being ready to act. Nothing was fully covered. My verdict was: they could see the deal, but they couldn't really decide. The screen showed a product, and confidence needs a decision.",
  "ask": []
 },
 {
  "title": "Decision 3 · Make the recommendation something you can trust",
  "notes": "So I designed the recommendation inside Monzo around the three questions people kept asking: why this deal for me, what does it really cost compared to the alternatives, and what happens if I say yes. That last one matters for timing: we tell people they're not signing today, and that they can chat with their adviser first. Every line here is regulated, so I worked through it closely with Compliance. And for momentum, we launched an experiment: a push notification the moment the recommendation is ready, on day zero and day three, instead of only on day three, landing on the progress tracker. All of it was measured on accepted recommendations, the team's main metric for the year. The recommendation itself was at its second version, with the team's feedback in, when I left. Let me show you the flow.",
  "ask": [
   [
    "Why a push on day zero?",
    "Before, the only reminder came three days later. The moment the recommendation is ready is the moment people care most."
   ],
   [
    "Why land on the tracker and not on the recommendation?",
    "The tracker already existed, so we could test momentum quickly. Landing on the recommendation in the app was the second experiment."
   ]
  ]
 },
 {
  "title": "The recommendation, inside Monzo",
  "notes": "Here's the flow, built from my Figma frames. It starts in the tracker: your recommendation is ready. Then one screen with the deal and what you pay each month. 'Why this is your best deal' gives the adviser's reasons. 'How this deal was calculated' shows the real cost over the whole deal, not just the monthly payment. And you can see the deals we ruled out. Before you commit, you see every detail, and you can accept, reject, or chat with your adviser. And the last screen tells you what happens next. The figures and some of the copy are placeholders.",
  "ask": [
   [
    "Was this built?",
    "Not when I left. It was designed and reviewed with the team; the first step we shipped was the push experiment."
   ],
   [
    "How would you know it works?",
    "Accepted recommendations is the main metric. But I'd also look at comprehension and wrong turns: do people open the reasons, do they ask the adviser, do they come back."
   ]
  ]
 },
 {
  "title": "Always clear whose turn it is",
  "notes": "And this is what ties it all together: the progress tracker. Remember the fourth thing customers told us: tell me what's happening. A remortgage has around ten stages, and the next step can sit with you, with the adviser or with the lender. So I designed one card that changes with the journey: orange when it's your turn, green when someone else is working on it. The push from the experiment lands here, and so does the adviser chat, which is the next decision. This version was being built when I left.",
  "ask": [
   [
    "Is this live?",
    "A simpler tracker has been live since the first journey. This version, with the adviser and the documents, was being built when I left in October."
   ],
   [
    "Why one card instead of a full timeline?",
    "Because people open it to answer one question: do I need to do something? The full timeline is one tap away."
   ]
  ]
 },
 {
  "title": "Decision 4 · Bring the adviser into the app — fast, with guardrails",
  "notes": "Then the adviser, which tackles relevance and that one rigid path. Remember the comparers and the delegators, and the adviser-first test we had to park? The vision said people should choose how they talk to an adviser. The reality was that Habito's advisers worked by chat, in a separate tool, and at the time the chat opened in Habito, outside Monzo. We could wait about nine months for Monzo's own chat, or put Habito's chat inside the app in about a month. I proposed shipping in about a month, and the team agreed, because every month we waited we kept losing people at the decision. But a second chat inside Monzo is risky: people might ask their adviser about a blocked card, or ask Monzo support about their mortgage. So I designed three guardrails. Gate: only show it during an active remortgage. Signpost: make it obvious who you're talking to and when they'll reply. Recover: if you land in the wrong place, get you to the right one in one tap. The main place for the chat is the progress tracker, so you can see where you are and ask about it in the same place. We also agreed a kill switch up front: above 2 percent misrouted chats we investigate, above 5 percent we roll back. Then a small pilot before a proper 50/50 test. When I left, the in-app chat was being built for that pilot.",
  "ask": [
   [
    "How big was the risk, really?",
    "Small in volume: a few thousand people are in a remortgage at any time, against millions of Monzo customers. But landing in the wrong chat is a compliance problem, not only a UX one, so we treated it seriously."
   ],
   [
    "Why not wait for Monzo's own chat?",
    "Nine more months of losing people at the moment of decision. And the first version would teach us what the final one needs."
   ]
  ]
 },
 {
  "title": "Your adviser, one tap away",
  "notes": "Here's how it looks. The adviser has a permanent place in the tracker, with a label that says who it is and what it's for. One tap, and you're in a chat that is clearly about your mortgage. And when the adviser sends your recommendation, it opens in the app, not on another website. One honest detail: the label here still says 'Chatting on Habito.com', because that's what was live. The in-app version replaces it.",
  "ask": []
 },
 {
  "title": "Decision 5 · Move the application into Monzo, pre-filled",
  "notes": "And finally, the application form, which was the most fragmented part of the journey. It lived on Habito's website, outside Monzo, and it was long. In 2025 almost half of people dropped out there, and two thirds were applying with a partner. So I designed the application inside Monzo, with two decisions I care about. First, pre-fill: instead of typing everything, you confirm what Monzo already knows about you, which answers 'use what you already know about me'. Second, save and come back later, because nobody has all their mortgage details at hand in one go. And it's measured step by step, so the team can see exactly where people stop. What you see on the right is the start: what you'll need and how long it takes, before the first question. We also wanted your partner to be able to join and fill in their part. Habito's operations only allow one account per application, so that's still an open topic with them. Looking further ahead, we want people to fill it in by voice, and to bring in data from other banks through Open Banking. We took that vision to the FCA as part of our Open Finance work, and it landed really well. I'm happy to show it if you're interested; the link is right here on the slide. The in-app application wasn't live when I left, so I won't claim it lifted conversion.",
  "ask": [
   [
    "Why can't a partner join the application?",
    "Habito's operations work with one account per application. Changing that is an operational change on their side, not a design one. So I designed for one person filling in both parts, and we kept the conversation open."
   ]
  ]
 },
 {
  "title": "I built a tool to get regulated designs approved faster",
  "notes": "There's one more thing I want to show you, because it ran through all of this work and changed how I worked: AI. AI didn't set the direction; the research did. Where it helped was speed and risk. One of the slowest parts of the project wasn't design or engineering, it was approval. Every screen about rates, deals or recommendations went back and forth with Compliance. So I built a checker that we used inside Monzo. A team uploads the rules it has to follow, pastes its copy or drops in Figma screens, and it flags lines that might break a rule and drafts a fix. If something required is missing, like the APRC, it says so instead of making it up. It doesn't approve anything, Compliance still does, but the review can focus on the hard calls. Loans, Overdrafts and Wealth asked to use it too. I also used AI to analyse support conversations, and found that people were disconnecting their mortgage because the data was wrong. Let me show you the checker; this is a copy I rebuilt for this case study, with no Monzo data.",
  "ask": [
   [
    "Does it replace Compliance?",
    "No. It flags and suggests; Compliance approves. It means the review starts from a cleaner draft and can focus on the hard calls."
   ]
  ]
 },
 {
  "title": "What moved, and what's still being measured",
  "notes": "So, what came out of it? Between late 2025 and spring 2026, the reach work beat our referral goal by about 75 percent, and the vision became the team's North Star and part of the case for a new partnership model. In 2026 the work was about conversion. The Day 1 reframing and the push experiment launched in May. The progress tracker and the adviser chat were being built when I left in October. And the recommendation and the in-app application were designed, but not live yet. I'd rather tell you that honestly than claim an uplift I can't prove. And first-time buyers, the next journey I worked on, launched on the 11th of November.",
  "ask": [
   [
    "What would you measure next?",
    "Accepted recommendations first. Then whether people understand what they accepted: wrong turns, questions to the adviser, and how many come back after leaving."
   ],
   [
    "What would you do differently?",
    "Research the decision earlier. We spent a long time improving the way in before learning that the real barrier was the decision itself."
   ]
  ]
 },
 {
  "title": "What I'd take to the next problem",
  "notes": "Looking back, there are four things I'd take with me. One: growth at the top isn't growth. More referrals didn't help until we designed the middle of the funnel. Two: when two companies' systems meet, routing, consent and who you're talking to are design problems, not plumbing. Three: shipping fast is fine, as long as you agree the guardrails and the rollback before you start. And four: name the problem first. One word, compare versus broker, changed what people expected from the whole journey.",
  "ask": []
 },
 {
  "title": "Why this matters for Benefits",
  "notes": "And I think that's why this is relevant for Benefits. From what I understand, Benefits works across international products, integrations and partners: providers whose systems you don't own, decisions that matter a lot to employees, and rules that change by country. That's the shape of the work I've been doing: making a service that spans several companies feel like one, being honest about what we know, and keeping people moving.",
  "ask": []
 },
 {
  "title": "Thank you. Where would you like to go deeper?",
  "notes": "That's the story. Thank you. I'm happy to go deeper on any of these. And if it's useful, I can also show Monzo Flex, a credit card I redesigned, which has more mature results.",
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
const prevButtons=[document.getElementById("previous-slide"),document.getElementById("previous-bottom")];
const nextButtons=[document.getElementById("next-slide"),document.getElementById("next-bottom")];
const pad=n=>String(n+1).padStart(2,"0");
const total=String(slides.length).padStart(2,"0");
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
  count.textContent=pad(current)+" / "+total;
  bottomCount.innerHTML=pad(current)+" <i>/</i> "+total;
  captionNumber.textContent=pad(current);
  captionTitle.textContent=slide.title;
  progress.style.width=((current+1)/slides.length*100)+"%";
  progressBar.setAttribute("aria-valuenow",String(current+1));
  notesHeading.textContent="Slide "+(current+1)+" · "+slide.title;
  notesContent.textContent="";
  const say=document.createElement("p");say.className="notes-say";say.textContent=slide.notes;notesContent.append(say);
  if(slide.ask&&slide.ask.length){
    const box=document.createElement("div");box.className="notes-ask";
    const hd=document.createElement("h3");hd.textContent="If they ask";box.append(hd);
    slide.ask.forEach(([q,a])=>{const dt=document.createElement("p");dt.className="q";dt.textContent=q;const dd=document.createElement("p");dd.className="ans";dd.textContent=a;box.append(dt,dd)});
    notesContent.append(box);
  }
  notesContent.scrollTop=0;
  sheetCount.textContent=pad(current)+" / "+total;
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
let sx=null;figure.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
figure.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)go(dx<0?1:-1);sx=null});
const h=parseInt(location.hash.slice(1));if(h>=1&&h<=slides.length)current=h-1;
render();
