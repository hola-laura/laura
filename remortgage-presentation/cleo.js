const slides=[
 {
  "title": "Remortgaging at Monzo, 2025–26",
  "notes": "Hi, I'm Laura. Thanks for having me. I'm going to walk you through remortgaging at Monzo, from the research in 2025 to what's live today. At the end I'll show you what came next: first-time buyers.\nMy title was Senior Product Designer. I was the only product designer on the squad, and I led the design from the initial vision through to the Habito integration.\nJust to spice things up, let me start with the ending. We beat our referral goal by about 75 percent, but mortgages didn't grow at the same pace. Most of what you'll see is how I found out why, and what I designed to fix it.",
  "ask": []
 },
 {
  "title": "Monzo customers loved seeing their mortgage in the app, but it didn't make money",
  "notes": "When I joined, Homeownership was this. You could connect your mortgage from any UK lender and see it in the app: your balance, how much of your home you own, and what happens if you overpay or your rate changes.\nThere were 250,000 mortgages connected. Customers loved it, but it didn't make any money.\nIn summer 2024 we launched remortgaging with a broker, Better.co.uk. It proved the model. But once people left Monzo for Better's website, on this last screen, we couldn't see or change what happened next. And we weren't hitting our goal: £1 million a year by September 2024, which meant about 300 applications a month. In September we had about 70.",
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
  "notes": "I turned that into a design vision: the whole remortgage, inside Monzo. The application comes into the app, already filled in with what we know. People choose how they talk to a mortgage expert. And they always know what happens next.\nIt showed we needed to own much more of the journey than a referral partner allowed, so it became part of the argument for changing our partner model. Later Monzo bought Habito, another broker, and that's what made it possible to build.\nAs you can see on the slide, our goal for April to December 2025 was £990,000 in annualised revenue. We didn't reach it. By December we were at about £558,000, around 56 percent of the goal.\nOn the right is the funnel. Until now we measured referrals. After the vision, we started measuring every step after them, because we only got paid at the end, when a mortgage completed.\nThen, with the support of our engineering manager, I ran a session with the team to turn the vision into a plan: now, next and later.",
  "ask": [
   [
    "So your vision made Monzo buy Habito?",
    "No, and I wouldn't claim that. It showed what customers expected, and that we couldn't build it through a referral: we couldn't change the partner's flow or see where people dropped out. That was one input into the case for a different model. The acquisition itself was a leadership decision."
   ],
   [
    "When did the vision start?",
    "I wrote a first vision proposal in November 2024, right after our diagnosis. The pause in February 2025 gave us the time to go back to customers and take it further."
   ],
   [
    "Was the vision a promise to build everything?",
    "No. A vision is a direction for the team. It made one thing clear: to give customers what they wanted, we needed to own much more of the journey than a referral partner allowed. It became part of the argument for changing our partnership model, and the team still goes back to it."
   ]
  ]
 },
 {
  "title": "Referrals beat the plan, the later stages didn’t",
  "notes": "We couldn't build the vision overnight, and we still had revenue targets. So first I designed ways to reach more people.\nThese are indicative rates: mortgage rates for everyone, with no need to connect a mortgage. We filled in the details with averages for your area, and you could change them. Connected customers got estimated deals from real lenders. By early 2026, total referrals across all our partners were around 7,500 a month, against a target of 4,300.\nBut a referral isn't a mortgage. In the Habito funnel, against its own 2026 targets, referrals were at 153 percent. Reaching a recommendation was at 72 percent. And accepted recommendations, going ahead with one lender, were at only 44 percent. Overall, only 7 percent of referrals made it to an accepted recommendation. The biggest gap came after the recommendation, when intent should be highest.\nSo we chose accepted recommendations as our signal, and the question changed: from 'how do we send more people?' to 'why don't people with a recommendation go ahead?'",
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
    "No. They went up after the push on day zero, and the view-only recommendation helped a little, but we didn't reach 1,000 a month. That's why we redesigned the recommendation."
   ]
  ]
 },
 {
  "title": "Where people got stuck, and who could fix it",
  "notes": "With our PM, I co-led a workshop about the drop-off, and I turned what we learned into an opportunity solution tree. Our hypothesis: these people wanted to remortgage, but when they saw the recommendation, they didn't feel confident enough to say yes.\nWe identified five possible causes. Relevance: you couldn't see the reasons or the mortgage expert behind the recommendation. Leaving Monzo: people got sent out of the app. Timing: some were still looking around. Momentum: our follow-up was slow and easy to miss. In one review, 54 percent of people didn't reply after they got their recommendation. And friction: the form was long, which we were already working on.\nFor each cause I asked: can Monzo fix it, or is it up to Habito? Relevance was split: Habito wrote the advice, and we could change how it showed up in Monzo.\nWhat comes next follows these causes, starting with what we'd already shipped.",
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
  "notes": "One thing we'd already shipped was the first progress tracker. This slide shows how I work with trade-offs. We designed it for Better and launched it with the Habito onboarding, so it worked for both partners. The ideal version had your steps, your deals and your expert in one place, but it depended on data we couldn't get. A second version, with a screen for every step, would have made the build much longer.\nSo we shipped the third: the broker's own steps, with one card that changes at each step, and a button back to the broker. We heard it was useful, but we didn't see a measurable change in how many people reached or accepted a recommendation. The decision I'd make again: ship it small. It showed us early how hard the data part was.\nFor this and future designs, Habito had no design files, so I applied for a mortgage with them as a real customer and mapped the whole journey for the team, so we could see the steps and analyse them.",
  "ask": []
 },
 {
  "title": "Move the application into Monzo, pre-filled",
  "notes": "Then friction: the form. The application form was the most fragmented part of the journey. It lived on the broker's website, and it was long: around 200 questions. In 2025, almost half of the people we sent to them never finished the form.\nI designed the application inside Monzo, with two decisions. Saving your progress, because nobody has all their mortgage details ready in one go. We couldn't do that in the first version, but the second version, in sections, saves your progress, and it's been live since November. You can Save and Close at any point and pick up where you left off. In both versions, if you stop halfway, Monzo sends you a notification to continue your application. And pre-fill: you confirm what Monzo already knows, instead of typing it again. That one is designed, but not built yet.\nThe first version went live at the end of September 2026, as a 50/50 test against the existing journey on Habito's website. In the first read, about 40 percent of the people who started the form in Monzo finished it, compared with about 29 percent on the existing journey: roughly a 40 percent relative lift. The sample was small, so it's an early signal.",
  "ask": [
   [
    "Is the application live?",
    "Yes. The first version went live at the end of September 2026, as a 50/50 test. The second version, in sections with your progress saved, has been live since November, and both send a notification if you stop halfway. Pre-fill with what Monzo knows is designed, not built yet."
   ],
   [
    "Forty percent more than what?",
    "It's a relative lift: about 40 percent finished the form in Monzo, against about 29 percent on the existing journey on Habito's website. So about 11 percentage points. The sample was still small, so I treat it as a directional signal."
   ]
  ]
 },
 {
  "title": "What customers needed to choose a mortgage",
  "notes": "Then the moment people decide. First, the follow-up. When a recommendation was ready, the only reminder was an email from Habito. So in May 2026 I designed a push from Monzo, on day zero and day three, that opens the tracker. Outside the app the copy couldn't mention a rate or a lender, to stay compliant.\nThen the recommendation itself. The first view-only version came in June 2026, inside the Habito integration, and accepting stayed with Habito. In an early test, showing the other deals under the main one gave around a 10 percent relative lift in accepted recommendations, but it didn't get us to our goal: from about 400 to 1,000 accepted recommendations a month. So I redesigned it, to help people decide with confidence.\nOver the summer I tried different iterations that went to team crit and design team crit. For example, exploring a hub with tools, I realised too many things were competing for attention, and I needed to make better use of progressive disclosure.\nDuring September I finalised the new recommendation, with a trade-off. People wanted to compare, but Habito wanted one recommended deal. What customers wanted to see was that the mortgage expert had done the research. So one deal sits on top, with a note from the mortgage expert explaining why, and the others are one step away. And the monthly payment goes back on top, because showing the total cost first put people off.",
  "ask": [
   [
    "How did you convince someone who disagreed?",
    "With Habito, on the recommendation. Habito recommends one deal, and customers wanted to compare. I proposed a test: one version with one deal, and one with three, the other two as secondary options. The version with three did about 10 percent better on accepted recommendations. That still didn't convince them, and they had good reasons: how their operations work, and the software their mortgage experts use. So I went back to what customers wanted underneath: to see that the mortgage expert had done the research. In the next iteration I proposed a screen called 'Deals we ruled out'. One recommendation stays on top, which is what Habito needed, and the alternatives are one step away. That's the version that's live."
   ],
   [
    "What did the crit change?",
    "How much was on the first screen. Before, reasons, tools and timeline all competed. After, one recommendation and its reasons, and the rest behind a tap."
   ]
  ]
 },
 {
  "title": "The recommendation, inside Monzo",
  "notes": "So this is the new recommendation. I'll tap through it.\nFirst you see the recommended deal and what you'd pay each month. The details are one tap away, in sheets that open over the screen, like the rate, the fees and the APRC. You read one and you're back where you were. I defined how they open and close, so you never lose your place.\n'Why this is your best deal' gives you the mortgage expert's reasons. 'How this deal was calculated' shows the real cost over the whole deal, and the deals we ruled out.\nBefore you commit you can see every detail, and you can accept, reject, or chat with your mortgage expert, which opens Habito's chat. And the last screen tells you what happens next.\nIt went live in November 2026, after I left.",
  "ask": [
   [
    "How did you convince someone who disagreed?",
    "With Habito, on the recommendation. Habito recommends one deal, and customers wanted to compare. I proposed a test: one version with one deal, and one with three, the other two as secondary options. The version with three did about 10 percent better on accepted recommendations. That still didn't convince them, and they had good reasons: how their operations work, and the software their mortgage experts use. So I went back to what customers wanted underneath: to see that the mortgage expert had done the research. In the next iteration I proposed a screen called 'Deals we ruled out'. One recommendation stays on top, which is what Habito needed, and the alternatives are one step away. That's the version that's live."
   ],
   [
    "Was this built?",
    "Yes. It went live in November 2026. I designed it while I was at Monzo, and the team built and launched it after I left, so it's too early for results. Before it, the push on day zero and the view-only version had shipped."
   ],
   [
    "How will the team know it works?",
    "Accepted recommendations is the main metric. But I'd also look at comprehension and wrong turns: do people open the reasons, do they ask the mortgage expert, do they come back."
   ],
   [
    "Where does the chat button go?",
    "To Habito's chat, inside the app. Building our own chat in Monzo was a separate project, and it was pushed back when the focus moved to first-time buyers."
   ],
   [
    "Did it change the design system?",
    "Yes. The new recommendation and the new tracker both brought new components into Monzo's design system. At Monzo, that goes through the design system team's own process."
   ],
   [
    "How would you know people understood it?",
    "I'd ask people to explain in their own words why that deal was chosen, and what it means for them."
   ]
  ]
 },
 {
  "title": "The tracker shows who has to act next",
  "notes": "And the next progress tracker. A remortgage has around ten stages, and the next step can be yours, the mortgage expert's or the lender's. I worked with Habito to understand them, and our engineers built the bridges between both systems.\nI designed one card that changes during the journey, so there's always one next step. It's orange when it's your turn, and green when someone else is working on it. You get a notification at every step, and you can turn them off by tapping the bell.\nI defined the interactions and the motion: how the card moves forward at each step, and how things open. The animated illustrations were my idea too, and our team's animator brought them to life.\nThe push brings you back here, and the chat with your mortgage expert opens from here.\nIn a design crit, a designer from the pensions team was exploring a tracker too. I worked with them to shape a pattern that works for both products.\nIt went live in November 2026, after I'd left. People I worked with tell me the early signals are very positive, but it's too soon to have results.",
  "ask": [
   [
    "Is this live?",
    "Yes. The first, simpler tracker went live with the Habito onboarding, and this version went live in November 2026, after I left. People I worked with tell me the early signals are very positive, but there are no mature results yet."
   ],
   [
    "Why one card instead of a full timeline?",
    "Because people open it to answer one question: do I need to do something? The full timeline is one tap away."
   ],
   [
    "Who did the motion?",
    "I defined every interaction and micro-interaction: how sheets open, how the tracker card moves forward. The animated illustrations were my idea, and our team's animator made them."
   ],
   [
    "Where does the tracker live?",
    "If you're remortgaging, it's the first thing you see in Homeownership. From there you can still go back to your Homeownership dashboard."
   ]
  ]
 },
 {
  "title": "The chat with your mortgage expert: a first step in the app",
  "notes": "Then the chat with your mortgage expert. Habito's mortgage experts chat on Intercom, a separate tool, so the chat opened outside Monzo.\nThe full design, on the right, is our own chat inside Monzo. We had two options: wait about nine months for Monzo's own chat, or bring Intercom into our app as a window. We went with Intercom first, because it was faster.\nBut a second chat inside Monzo is risky. People could ask their mortgage expert how to block their card, or ask Monzo support about their mortgage. So I designed three guardrails, Gate, Signpost and Recover, with safe answers for people who ask in the wrong place.\nWe also agreed a kill switch before launch: if more than 2 percent of chats ended up in the wrong place, we'd investigate, and above 5 percent we'd roll back.\nHabito's chat went live inside the app in November 2026, and I designed it. Our own chat was pushed back when first-time buyers became the priority. I'll come back to that.",
  "ask": [
   [
    "How big was the risk, really?",
    "Small in volume: at most about 7,000 people use the product in a month, against 15 million Monzo customers. But landing in the wrong chat is a compliance problem, not only a UX one, so we treated it seriously."
   ],
   [
    "Why was it paused?",
    "It came down to priorities. Our own chat in Monzo was possible, but the team decided to put its resources into first-time buyers this year. In the meantime, Habito's chat works inside the app, since November 2026. It isn't a final decision, and the design and the guardrails are ready for when it comes back."
   ]
  ]
 },
 {
  "title": "What if designers could check their screens against the rules before Compliance?",
  "notes": "One more thing, about raising the quality bar. Every screen about rates or deals went back and forth with Compliance. So I built a checker with Cursor, working from the documents that set out the rules, and we used it inside Monzo.\nYou paste your copy or drop in Figma screens. It flags what could break a rule and suggests a fix. If something required is missing, like the APRC, it tells you. It doesn't approve anything: Compliance still does that.\nLoans, Overdrafts and Wealth asked to use it too, so I ran a lunch and learn and set up a feedback channel. What you see is a copy I rebuilt for this case study, with no Monzo data in it.\nI use AI to remove a bottleneck, and the decision stays with me.",
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
   ],
   [
    "How do you know it works?",
    "It's an internal tool, so success is simple: Monzo designers use it. I did the same later with data, for first-time buyers."
   ]
  ]
 },
 {
  "title": "What changed, and what’s still to do",
  "notes": "So, what came out of it, and what was mine.\nThree things were mine.\nThe deal-end question: I added it to onboarding in 2024, and the share of people who told us when their deal ends went from 38 to 88 percent.\nReach: showing mortgage rates to everyone, without connecting a mortgage, was my idea and my designs, and by early 2026 referrals were about 75 percent above our target.\nWhen we didn't hit our goals, I changed the question the team was asking: people dropped after the recommendation, so we moved our work there.\nEngineering built it and data told us what was working. The hypotheses and the designs were mine.\nWe didn't reach the £990,000 goal, or the goal for accepted recommendations. The business number for what came later is still early.\nThe cleanest signal is the application form: in a 50/50 test, about 40 percent of people finished it in Monzo, against 29 percent on the broker's website.\nA mortgage takes months to complete, and most of what I designed for Habito went live in November, after I left.\nBack to the four things customers asked for: on the right is where each one stands, and most of it is now live.\nFor what launched in November, this is what I'd measure, and what I'd do with each answer, from the opportunity tree. If accepted recommendations don't go up, the next lever is trust: making the mortgage expert's reasons stronger. If people don't come back to the tracker, a nudge at every step, not only for the recommendation. And if more than 5 percent of chats land in the wrong place, we roll back, as we agreed before launch.",
  "ask": [
   [
    "What impact did you have, not the team?",
    "Three things were mine. The deal-end question: I added it to onboarding in 2024, and people who told us when their deal ends went from 38 to 88 percent. Reach: showing mortgage rates to everyone was my idea and my designs, and by early 2026 referrals were about 75 percent above our target. And I changed the question the team was asking, from referrals to why people don't go ahead after the recommendation. Engineering built it and data told us what was working. The hypotheses and the designs were mine."
   ],
   [
    "But what business number did you move?",
    "I can show you early signals, and I can't show you completed mortgages yet. The cleanest one is the application form: in a 50/50 test, about 40 percent of people finished it in Monzo, against 29 percent on the broker's website. I designed that form. A mortgage takes months to complete, and most of what I designed for Habito went live in November, after I left. I'd rather tell you what I know than give you a number I can't defend."
   ],
   [
    "The short version",
    "The deal-end question took us from 38 to 88 percent. My reach designs took referrals 75 percent above target. And three other teams asked to use the Compliance checker I built."
   ],
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
   ],
   [
    "How did you lead, as the only designer?",
    "Through the work and through people. I ran the workshop that turned the vision into a plan, took my work to design crits, and ran a lunch and learn on the Compliance checker. And I mentored two people from Operations at Monzo, who are now part of the Product Design team."
   ],
   [
    "What exactly is live?",
    "Estimated deals, pre-fill, the push, the application inside Monzo, and since November the new tracker, the new recommendation, and Habito's chat inside the app as a first step."
   ]
  ]
 },
 {
  "title": "Next: first-time buyers",
  "notes": "In 2026, first-time buyers became the team's first goal. It was a business decision: we needed to show that buying Habito had been a good decision, and most Monzo customers are working towards buying their first home. I was the only designer on it. I designed the vision and the entry points.\nThe problem is bigger than a mortgage. In a 2024 survey, only 38 percent of people knew what to expect from the process. And in interviews, seven of eight people had talked to a broker before making an offer. Trust starts early.\nOur hypothesis: if we open Monzo's mortgage journey to first-time buyers, with what we'd already built, we can learn who comes in and how ready they are, before investing in a bigger proposition. So we designed for learning, not for volume.\nAnd we couldn't open it to millions at once: the mortgage experts could take about 200 first-time buyers a month from Monzo.\nThat left one design question: how do we make it easy enough to find, without sending people who aren't ready to a mortgage expert?\nOn the right is the app today.",
  "ask": [
   [
    "Why not wait until people have an offer accepted?",
    "In a reference cohort from October 2025, people with an accepted offer went on to apply about 29 percent of the time, and people with no property yet about 9 percent. But the people without an accepted offer were more than half of those asking for advice, and the research showed that trust in a broker starts before the offer."
   ],
   [
    "What was the goal?",
    "The goal the team reports is finished fact-finds that reach a mortgage expert: 421 a month by March. It's a target. I don't have results."
   ],
   [
    "Why reuse the remortgage journey?",
    "To learn sooner with less to build. The tracker and the form already worked for a purchase, so the new design work went into how people find it and what we ask them first."
   ]
  ]
 },
 {
  "title": "Four ways to open it. We chose readiness",
  "notes": "So we had three things pulling in different directions. The business needed demand. Customers needed useful help, wherever they were. And operations needed us to protect the mortgage experts' time.\nWe explored four ways to open it, which you can see here. Each one gave up speed, the experts' time or future customers. Readiness meant more routing to design, but the right help at each stage.\nWe chose readiness. Everyone can come in, and the first question is where you are in your home-buying journey. If you're saving for a property, we tell you it's a little early to talk to a mortgage expert, and to come back when you're ready. If you're looking, have found a property or have an offer accepted, you go ahead, even without an offer, because trust starts early.",
  "ask": [
   [
    "Did you really explore all four?",
    "Yes. We explored all four with the team before choosing. Readiness was the one that balanced the three goals: demand, useful help and the experts' time."
   ],
   [
    "What happens to people who aren't ready?",
    "Today we tell them it's a little early and to come back. In the Figma I also designed a screen for them with tools to get ready, like Credit Tracker and Savings. That one isn't live."
   ]
  ]
 },
 {
  "title": "Entry points, in steps",
  "notes": "We reused the remortgage journey you've just seen: the tracker, and the form in sections that saves your progress. So the design work went into how people find it.\nI sized each door myself, with Cursor on our data, and our data scientist checked my queries. Mortgage and house searches were about 2,000 a week: few people, but if you search for a first home, you want it. About 500,000 people a week open Do more. And the Grow tab, which comes next, has 2 to 3 million a week.\nSo everyone is eligible, but we control the exposure. First Search, Do more and a card on the home screen, with no pushes. The louder doors, like the Grow tab, come later, once we know the mortgage experts can keep up.\nPots were my favourite idea. We postponed them to learn from every type of customer first.\nThe first release is live today, launched after I left, so there are no results yet. The plan is to launch, measure, decide and iterate. The first thing I'd look at is the mix of readiness, before volume. If most people are just starting, the next bet is helping them get ready, not more doors. If most are ready, we open the louder doors. The goal the team reports is 421 finished fact-finds a month by March.",
  "ask": [
   [
    "How did you check your numbers?",
    "I wrote the queries with Cursor on our data repository, which is a day behind. Then our data scientist checked the queries and the numbers against his own data. To choose the order of the entry points, general numbers were enough."
   ],
   [
    "Why postpone Pots if the numbers were good?",
    "About 52,000 customers had a house savings Pot with more than £5,000, and about 460 of them buy a first home each month. They've already told us their goal. But the entry point only works if people open the Pot, and the people who do that often are very engaged with Monzo. We wanted the first release to teach us about every type of customer, so the general doors came first."
   ],
   [
    "How do you learn without completed mortgages?",
    "From the mix of readiness, where people stop, and what they tell us. I designed four short in-app surveys: one always on, one for people who haven't started, one for people who didn't take the recommendation, and one at a milestone. 'Help us improve' is live in the tracker. I can't confirm the others."
   ],
   [
    "What's in the value proposition test?",
    "Six versions: a baseline, all in Monzo, Habito Plus, human and digital together, affordability, and first-time-buyer scheme experts. Each has a screen and a notification. It hasn't been run yet."
   ]
  ]
 },
 {
  "title": "The vision: from saving to owning, in Monzo",
  "notes": "And this is the vision I designed for first-time buyers. It isn't about selling a mortgage. It's about staying with people for the whole life of their home.\nYou see what you can afford, keep everything in one buyer profile, and talk to your adviser in a chat. When you buy, every step is tracked, from the conveyancing to the survey. And when you get the keys, your home story starts, until it's time to remortgage.\nThe first release covers finding the right mortgage, and remortgaging is already live. The rest is a direction, not a plan.",
  "ask": []
 },
 {
  "title": "What I learned",
  "notes": "Looking back, four things. One: look past the first number. Referrals beat the plan, but people dropped after the recommendation, so we focused on the recommendation. Two: design for readiness, not volume. More referrals weren't more mortgages, and for first-time buyers we chose readiness over reach.\nThree: know the goal, and ship in steps. The vision didn't change, but we got there in pieces: the push, the view-only screen, then the new recommendation. And four: work with what your partner has. Habito had no design team, so I went through the journey as a customer, and we shipped first steps, like their chat inside our app.\nAnd what I'd do differently: bring people back sooner, with a notification at every step, because until the journey was inside Monzo they had no reason to come back. And ask about the technical limits before proposing a first version.",
  "ask": [
   [
    "What would you do differently?",
    "Three things. First, I'd bring people back much earlier. Until the whole journey was inside Monzo, people had no reason to come back to us. We learned that when we had to add a push for the recommendation. I'd have added notifications much sooner, and for every step. Someone getting a mortgage has other things going on in their life, so we need to stay top of mind. Second, the form. We took too long to decide what to do with it. There were real technical limits, but I could have been more proactive: map every question in a spreadsheet and work from that before the API was built. Third, the first tracker. I should have asked about the technical limits before proposing my first version, because it couldn't be built. I don't regret it, because it showed the team where we wanted to get to. But it cost a week or two while engineering checked."
   ]
  ]
 },
 {
  "title": "What I’d bring to Cleo",
  "notes": "And why Cleo. From what I understand, people use Cleo to make decisions about their money, often in a chat. That's close to my last two years: helping people trust a recommendation enough to act on it, and designing a chat with a mortgage expert, with guardrails.\nAnd I like to know the goal and ship in steps: small releases, measured early. That's how I'd like to work with you. And I like growing people: at Monzo I mentored two people from Operations who are now part of the Product Design team.",
  "ask": []
 },
 {
  "title": "Thank you. Where would you like to go deeper?",
  "notes": "And that's the story. Thank you. I'm happy to go deeper into any part of it.\nFour more slides sit after this one, for questions: the onboarding to Habito, the full journey planned for February 2027, how we reached more people, and the push on day zero.",
  "ask": [
   [
    "What impact did you have, not the team?",
    "Three things were mine. The deal-end question: I added it to onboarding in 2024, and people who told us when their deal ends went from 38 to 88 percent. Reach: showing mortgage rates to everyone was my idea and my designs, and by early 2026 referrals were about 75 percent above our target. And I changed the question the team was asking, from referrals to why people don't go ahead after the recommendation. Engineering built it and data told us what was working. The hypotheses and the designs were mine."
   ],
   [
    "But what business number did you move?",
    "I can show you early signals, and I can't show you completed mortgages yet. The cleanest one is the application form: in a 50/50 test, about 40 percent of people finished it in Monzo, against 29 percent on the broker's website. I designed that form. A mortgage takes months to complete, and most of what I designed for Habito went live in November, after I left. I'd rather tell you what I know than give you a number I can't defend."
   ],
   [
    "How did you convince someone who disagreed?",
    "With Habito, on the recommendation. Habito recommends one deal, and customers wanted to compare. I proposed a test: one version with one deal, and one with three, the other two as secondary options. The version with three did about 10 percent better on accepted recommendations. That still didn't convince them, and they had good reasons: how their operations work, and the software their mortgage experts use. So I went back to what customers wanted underneath: to see that the mortgage expert had done the research. In the next iteration I proposed a screen called 'Deals we ruled out'. One recommendation stays on top, which is what Habito needed, and the alternatives are one step away. That's the version that's live."
   ],
   [
    "What would you do differently?",
    "Three things. First, I'd bring people back much earlier. Until the whole journey was inside Monzo, people had no reason to come back to us. We learned that when we had to add a push for the recommendation. I'd have added notifications much sooner, and for every step. Someone getting a mortgage has other things going on in their life, so we need to stay top of mind. Second, the form. We took too long to decide what to do with it. There were real technical limits, but I could have been more proactive: map every question in a spreadsheet and work from that before the API was built. Third, the first tracker. I should have asked about the technical limits before proposing my first version, because it couldn't be built. I don't regret it, because it showed the team where we wanted to get to. But it cost a week or two while engineering checked."
   ],
   [
    "The short version",
    "The deal-end question took us from 38 to 88 percent. My reach designs took referrals 75 percent above target. And three other teams asked to use the Compliance checker I built."
   ],
   [
    "Why did you leave Monzo?",
    "After more than five years at Monzo, and two on the same product, it was my moment to change. The business was putting its energy into opening new lines, which is a fair call. But it meant the plan for remortgaging would stay half-built for a long time, and it started to feel like a project I wouldn't see finished. So I decided to take what I'd learned to a new problem."
   ],
   [
    "How did you lead, as the only designer?",
    "Through the work and through people. I ran the workshop that turned the vision into a plan, took my work to design crits, and ran a lunch and learn on the Compliance checker. And I mentored two people from Operations at Monzo, who are now part of the Product Design team."
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
  ],
  "appx": true
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
  ],
  "appx": true
 },
 {
  "title": "Reach people before they're ready to remortgage",
  "notes": "We couldn't build the vision overnight, and we still had revenue targets. So we worked on two tracks: reach more people now, and move the journey into Monzo, step by step.\nMost people about to remortgage hadn't connected their mortgage, so we couldn't see them. So I designed a way in without connecting: indicative rates for everyone, and estimated deals for connected customers.\nThe result: by early 2026, total referrals across all our partners were around 7,500 a month, against a target of 4,300. That's about 75 percent above plan. New mortgage connections went from about 200 to about 1,000 a day. The results supported our reach hypothesis, but a referral is only the first step. It isn't a mortgage yet.",
  "ask": [
   [
    "Is the 75 percent your result?",
    "The hypotheses and the design of each experiment were mine. Engineering built them, and the data told us what was working and what wasn't."
   ],
   [
    "Which experiment worked best?",
    "Rate alerts: a notification when mortgage rates change. In our May 2025 review they were linked to about 44 percent of recent referrals. It was an internal, approximate read, not proof that the alerts caused all of them."
   ]
  ],
  "appx": true
 },
 {
  "title": "A push the moment the recommendation is ready",
  "notes": "Then the follow-up. Until we had the recommendation in the app, we sent people to Habito to see it. When it was ready, the only reminder was an email from Habito. So I designed a push from Monzo on day zero, when people care the most, and again on day three. Outside the app, it couldn't mention a rate or a lender, to stay compliant.\nWe had two options for where the push should take you: a new screen that set expectations, or the progress tracker, and from there to Habito. We went with the tracker, in May 2026. It gave people a reason to come back to it, and it was a screen we already had, so we could test fast.\nAccepted recommendations went up in our early read, but I don't have the exact uplift, so I'd treat it as a positive early signal, not proof that the push alone caused it.",
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
    "The tracker already existed, and from there people went on to Habito to see their recommendation, so we could test quickly. It was working, it just wasn't easy to find."
   ],
   [
    "Was the push an A/B test?",
    "I don't remember exactly how it was measured, so I won't claim more than what I know: after the push launched in May, more people accepted their recommendation."
   ]
  ],
  "appx": true
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
