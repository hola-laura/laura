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
  "notes": "Here's what that looks like. I rebuilt it in code from my Figma files, so you can see it move. You connect in a few taps, with no account details, and we find your mortgage. The part I want to point out is the end: we ask one question, when does your current deal end. In one year, the share of new connections that told us their date went from 38 to 88 percent. That date matters for the rest of the story, because it's how we know when to talk to someone about remortgaging.",
  "ask": [
   [
    "Is 38 to 88 percent your result?",
    "Yes. It was one of my first projects when I joined. The design is mine and engineering built it. It was a big win for everything we did in remortgaging afterwards, because the deal-end date is how we know when to talk to someone."
   ],
   [
    "Why is it rebuilt in code?",
    "So you can see it move, the way it does in the app. The balance and dates are the placeholder figures from my designs."
   ]
  ]
 },
 {
  "title": "To make money, we launched remortgaging with Better.co.uk — it worked, but not enough",
  "notes": "So we wanted to prove a revenue stream, and remortgaging was the obvious one: everyone with a mortgage needs a new deal every few years, and we often knew when. We found a partner, the broker Better.co.uk. Monzo spotted the right moment, and Better gave the advice and handled the application. I designed that first journey, and it was a click-out experience: customers left Monzo and finished on Better's website. It proved there was a business, around 5,000 customers and about 1.5 million pounds over time. But it didn't go the way we wanted. We missed our revenue goals, growth stalled, and once customers left the app we couldn't see where or why they dropped out. And that was my main learning from that first chapter: our success ended at the referral. Once people left Monzo, we were blind to everything that happened next.",
  "ask": [
   [
    "How does Monzo make money from this?",
    "The broker is paid by the lender when a mortgage completes, and the customer pays nothing. With Better, Monzo earned a share for each customer it referred who completed. So revenue depends on completed mortgages, not on referrals."
   ],
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
  "notes": "This is the part of the story I want to focus on. In 2025 and 2026, I led design for remortgaging through two big changes: a strategy reset, and then an acquisition. In 2025 I led the vision. The first screen here is from it. I also designed how to implement it and its first implementation, all the growth experiments, including the new entry points, and I led the value-proposition workshop. In 2026 we integrated Habito. We had to adapt to how their operations work, so the journey changed a bit. We brought recommendations into the app, which is the second screen, and the adviser chat, which had to be paused. We improved the tracker, and we wanted to keep growing with first-time buyers. The team was one squad: a product manager, six engineers, a data scientist and me on design, working with Operations and Compliance. Our researcher left after the vision.",
  "ask": []
 },
 {
  "title": "How I’ll walk you through it",
  "notes": "So here's how I'll walk you through it: six chapters, in the order they happened. First, the reset, when we paused to listen to customers. Second, the vision that came out of it: one journey, inside Monzo. Third, reach: the experiments we ran to get to people earlier. Fourth, and this is the biggest part, Habito: bringing the journey into the app. Fifth, what's next: an audit of the whole product, and first-time buyers. And finally, how I work with AI, the results, and what I learned.",
  "ask": []
 },
 {
  "title": "We lent our engineers for two months — and used the time to listen",
  "notes": "The reset started in a slightly unexpected way. In February 2025, Monzo needed engineers in Financial Health. There was a real business need there. Homeownership wasn't going the way we wanted, so we agreed they could borrow our engineers for two months. And we used that time on purpose: we ran a discovery sprint to understand why our experiments weren't moving the numbers. Our user researcher interviewed two groups: people who had remortgaged with us, and people who had started and given up. That sprint is what changed the strategy.",
  "ask": [
   [
    "Whose decision was the pause?",
    "Our Product Director's, with leadership behind it. Leadership confirmed the long-term commitment to Homeownership and we agreed a return date. So it was a pause with an end, not a wind-down."
   ],
   [
    "How was the sprint organised?",
    "In workstreams, each with an owner and a deliverable. The three that mattered most for this story were customer research, which our user researcher led, the vision, which was mine, and checking how feasible each idea was. The rest were outside design, and I wasn't close to them."
   ]
  ]
 },
 {
  "title": "Customers wanted one journey — but not the same one",
  "notes": "Customers told us four things. First: don't send me out. People expected to get their new deal inside Monzo, not on another website. You can see it in the two personas our researcher built from the interviews. George remortgaged with us, and was frustrated at being sent to a partner's website. Carla started and gave up, when she hit the friction of doing it all outside the app. Second: use what you already know about me, instead of asking me again. Third: let me choose. Some people wanted a phone call for reassurance. Others wanted to do it themselves, as long as a person was there if they needed one. And fourth: tell me what's happening, because the waiting was the most stressful part.",
  "ask": [
   [
    "What was your part in the research?",
    "Our user researcher led the interviews: one-to-one, with people who had remortgaged with us and people who had dropped out. I worked with the researcher on the synthesis and turned the themes into the vision."
   ]
  ]
 },
 {
  "title": "One journey, inside Monzo, that flexes to you",
  "notes": "I turned that into a design vision: one journey, inside Monzo, that flexes to the person. Bring the application into the app, pre-filled with what we already know. Let people choose whether to talk to an adviser first or see deals first. Take the pain out of paperwork. And always show what happens next. What's playing here is the vision, straight from my Figma frames. Monzo later published these designs on its blog, in a post about why and how we got to the new vision. The post and the full vision file in Figma are both linked here, so if you want to talk about the vision, I'm happy to open it and go deeper. It wasn't a list of promises, it was a direction. And it made something very clear: the experience customers wanted meant owning much more of the journey than a referral partner allowed. With Better, customers left the app, we couldn't change their flow, and we couldn't see where people dropped out. The vision became part of the case for changing our partnership model, and Monzo later bought Habito, which made it buildable. I wasn't part of the acquisition decision, but the vision is still what the team refers back to.",
  "ask": [
   [
    "So your vision made Monzo buy Habito?",
    "No, and I wouldn't claim that. It showed what customers expected, and that we couldn't build it through a referral: we couldn't change the partner's flow or see where people dropped out. That was one input into the case for a different model. The acquisition itself was a leadership decision."
   ]
  ]
 },
 {
  "title": "I turned the vision into bets the team could ship",
  "notes": "But a vision only matters if it changes what you ship. So we broke it down into now, next and later. Some things were no-brainers that didn't need a test. One of them was mine: I improved the progress tracker so customers saw their status closer to real time. You'll see where that tracker ended up later. Others were experiments on the riskiest assumptions, like letting people choose between talking to an adviser first or seeing deals first. That one we had to park when Habito arrived, and I'll come back to it when we get to the adviser chat. In June I led a value-proposition workshop with Product Marketing, Research and our Product Director, built around two kinds of customers: comparers, who want to look at deals themselves, and delegators, who want an expert to handle it. That gave us the differentiators to design for: personalised insights, forms filled in for you, and flexible contact. And keep an eye on the 'later' column: two of those became my work in 2026.",
  "ask": [
   [
    "What happened to the adviser-first test?",
    "We parked it when the partner changed, because Habito's advisers work by chat, not by phone. The idea came back in 2026 as flexible journeys: letting people choose when they talk to someone."
   ]
  ]
 },
 {
  "title": "Reach people before they're ready to remortgage",
  "notes": "Now, reach. While the move to a new partner was being worked out, we still had a revenue target with Better. So from the second half of 2025, we focused on what we could control: reach. Our hypothesis was simple: growth was limited by how many people we could reach. Most people who were about to remortgage hadn't connected their mortgage, so we simply couldn't see them. To give you the scale: about 600,000 customers had connected a mortgage, and about two and a half million had one that we couldn't see. I designed ways in that didn't need a connection: adding your deal-end date, indicative rates and estimated deals. I also designed Focus View, where your home screen changes depending on where you are in the journey, and the move of Homeownership into the Grow tab. We ran all of this as a fast series of experiments, and I kept an experiment file in Figma linking every design to its hypothesis and its result. It became the team's source of truth, so we stopped repeating failed tests. It's linked here on the slide, together with the Grow tab work. Between late 2025 and spring 2026 we beat our referral goal by about 75 percent: around 7,500 referrals against a goal of 4,300. So the hypothesis held. But keep one thing in mind: referrals are a leading indicator, not the result. That matters in the next chapter. The catch was that indicative rates are regulated, so every word mattered. I'll come back to that when I talk about AI.",
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
  "notes": "Then the partner changed. At the end of 2025 Monzo agreed to buy Habito, and from December our customers started going to Habito instead of Better. The reach work kept paying off: referrals were well above plan. But more referrals didn't mean more mortgages. One thing about how this is measured: Habito is paid by the lender when a mortgage completes, and that can be months after the referral. So the team steered by accepted recommendations, a signal we could read in weeks. Far fewer people went on to submit an application to a lender than we expected: about 6 to 6.5 percent, against 9 to 10 percent with Better. The team's goal for the first half was to take accepted recommendations from about 400 to 1,000. But the surprising part was where they dropped. It wasn't at the start. It was after the recommendation: people who had filled in the whole questionnaire, which brokers call the fact-find, and talked to an adviser, and then didn't go ahead. That's when intent should be highest, so it couldn't just be the quality of the traffic. This is where I stopped myself from jumping straight into screens. With two colleagues, I co-led an insight workshop on the drop-off, and then I turned what we learned into an opportunity solution tree.",
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
   ]
  ]
 },
 {
  "title": "First, I became the customer",
  "notes": "Before I show you the tree, one step back. When the numbers dropped, the first thing I did wasn't to open Figma and design. I went through the journey myself. On the 17th of April I applied through Habito as a real customer, from the first tap in Monzo to the mortgage illustration, and I kept every screen, every email and every document in one page. That's the wall you see here. It made three things obvious that no dashboard showed. Halfway through, you get a second account and a second brand. You fill in a long form before you get any value back. And the recommendation and the messages live on Habito's website, not in Monzo. It gave the team one shared picture of the journey as it really was. And it's what I brought into the workshop.",
  "ask": [
   [
    "Why do it yourself, and not rely on research?",
    "Research tells you what people say. Going through it tells you what the journey asks of them, step by step. I needed both: the research interviews for the why, and my own run for the where."
   ]
  ]
 },
 {
  "title": "One outcome, five opportunities — and who can fix each one",
  "notes": "This is the tree, simplified. At the top, one outcome: more recommendations accepted. Under it, the problem: high-intent customers don't feel confident enough, at the moment they see the recommendation, to act. Then five opportunity areas. Relevance: the recommendation feels generic, with no reasoning or human behind it. Experience break: being kicked out of Monzo. One customer described it as being palmed off to another organisation. Timing: people are still exploring when the recommendation lands. Momentum: they were ready, but our follow-up was slow and easy to miss. And friction: a long form that's hard to pick back up. The part I found most useful was the last row. For each area I asked two questions: is it a root cause, or something that makes it worse? And is it in Monzo's power, or in Habito's? Relevance, for example, was mostly in Habito's hands, because they write the recommendation. That told us where design in Monzo could make the biggest difference, and the four bets I'll show you next map straight onto it.",
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
  "title": "Four bets — and how each one could be wrong",
  "notes": "Before the designs, one slide on how I thought about them. Each decision was a bet, not a certainty. So for each one I wrote down three things: what we believed and where that came from, how we'd know it was working, and what would make me change course. Two examples. For the recommendation: if people read every reason and still don't accept, then the problem is the deal itself, not how we explain it, and that sits with Habito. And for the application: if more people finish the form but accepted recommendations don't move, then the form wasn't the real constraint. That is exactly what happened with referrals, and I didn't want to repeat it.",
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
  "title": "Tell people what this actually is",
  "notes": "The first bet tackled the experience break, and it was simple, but it mattered a lot: tell people what this actually is. People thought they were using a comparison site. So when a broker started asking about their finances, it felt like a bait-and-switch. For Habito's first day as part of Monzo, I reframed the journey from 'compare mortgages' to 'get a mortgage with a broker'. I cut the consent screens down while keeping the commission disclosure Compliance needed, added trust signals early, and a clear 'what happens next'. The hard call was the pre-fill experiment, which was still running. We stopped it early and turned pre-fill on for everyone, because it had little downside and the launch date was fixed. We traded some learning for speed, on purpose. It launched on the 1st of May 2026, together with the Habito by Monzo brand. This is the entry screen I designed for Day 1: it says plainly that Habito is now part of Monzo, that a real expert will help you, and that it's fee-free.",
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
  "notes": "The next bet is about the moment of decision itself, and this is the question customers were really asking themselves: do I trust this recommendation enough to go ahead? Before designing anything, I scored the screen we had against what confidence actually needs: understanding, feeling it's for me, alternatives, trade-offs, the real cost, and being ready to act. Nothing was fully covered. My verdict was: they could see the deal, but they couldn't really decide. The screen showed a product, and confidence needs a decision.",
  "ask": [
   [
    "Who were you really competing with?",
    "Mostly the customer's current lender. Staying with the same lender takes a few clicks, with no adviser and no paperwork. Our research showed people used us to sense-check and then some finished elsewhere. So the recommendation had to earn the switch: the reasons, the real cost and what was ruled out."
   ]
  ]
 },
 {
  "title": "Make the recommendation something you can trust",
  "notes": "So I designed the recommendation inside Monzo around the three questions people kept asking: why this deal for me, what does it really cost compared to the alternatives, and what happens if I say yes. That last one matters for timing: we tell people they're not signing today, and that they can chat with their adviser first. Every line here is regulated, so I worked through it closely with Compliance. And for momentum, we launched an experiment: a push notification the moment the recommendation is ready, on day zero and day three, instead of only on day three, landing on the progress tracker. All of it was measured on accepted recommendations, the team's main metric for the year. Let me show you how the recommendation itself took shape.",
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
  "title": "First version: decide inside Monzo",
  "notes": "So this is the first version of the recommendation in the app, from June. The goal was written at the top of my file: increase the acceptance rate by helping people decide confidently when they're ready, or defer on purpose, without dropping off. Three decisions here. First, it's framed through the adviser, not an algorithm: 'Will's top pick for you', 'a note from Will'. A person does the heavy lifting for trust. Second, there's a top pick, but the alternatives sit beside it, with the reasoning, so it never feels pushy. And third, we couldn't avoid the hand-off to Habito yet, so we say it out loud: 'Taking you back to Habito to continue. You can always come back to Monzo to check your progress.' A hand-off you announce feels very different from one that just happens to you.",
  "ask": [
   [
    "Why keep the hand-off at all?",
    "At that point the application still lived on Habito's side. Hiding that would have broken trust the moment the brand changed. Saying it was the honest version, until the in-app application moved the form."
   ]
  ]
 },
 {
  "title": "Decision support, not decision pressure",
  "notes": "The part I'm most proud of is not the happy path. It's the two ways this goes wrong. The first one is: I'm interested, but I'm not ready. A screen with only accept and reject loses all of those people. So I added a third button, 'I need more time'. You choose when you want to be reminded, and the recommendation waits for you in the tracker. In my file I called this section 'fear of commitment'. The second is when the lender withdraws the rate, which happens all the time. Instead of an error, the adviser speaks first: 'I'm already looking at alternatives for you', and other options are right there. I called the principle 'decision support, not decision pressure'. The design protects the relationship with people who aren't ready, instead of forcing a yes or a no.",
  "ask": [
   [
    "Doesn't 'I need more time' just lower conversion?",
    "It lowers same-day conversion and protects total conversion. A mortgage is decided over weeks. A reminder the customer chose is a way back. A rejected offer isn't."
   ]
  ]
 },
 {
  "title": "Four rounds before the version you're about to see",
  "notes": "And it didn't stay there. This went through four rounds in about four months, and each round answered a gap the previous one left. In June, the top pick with alternatives. Then I reviewed my own design against the research and wrote down what it didn't cover: you couldn't reach the adviser from that screen, and there was no honest sense of urgency. The second round, in low fidelity, led with the total cost instead of the monthly rate, and it compared staying with your lender against switching, in pounds. The third went to a design crit on the 17th of September: a hub with tools, like stress-testing the deal. The feedback was that it showed too much at once, so I moved to more progressive disclosure. And that became version 2.1, which is the one I'll show you now.",
  "ask": [
   [
    "What did the crit change?",
    "How much was on the first screen. Before, reasons, tools and timeline all competed. After, one recommendation and its reasons, and the rest behind a tap."
   ]
  ]
 },
 {
  "title": "The recommendation, inside Monzo",
  "notes": "And this is version 2.1, built from my Figma frames. It starts in the tracker: your recommendation is ready. Then one screen with the deal and what you pay each month. 'Why this is your best deal' gives the adviser's reasons. 'How this deal was calculated' shows the real cost over the whole deal, not just the monthly payment. And you can see the deals we ruled out. Before you commit, you see every detail, and you can accept, reject, or chat with your adviser. And the last screen tells you what happens next. The figures and some of the copy are placeholders.",
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
  "notes": "And this is what ties it all together: the progress tracker. Remember the fourth thing customers told us: tell me what's happening. A remortgage has around ten stages, and the next step can sit with you, with the adviser or with the lender. So I designed one card that changes with the journey: orange when it's your turn, green when someone else is working on it. The push from the experiment lands here, and so does the adviser chat, which is the next bet. This version was being built when I left.",
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
  "title": "The adviser in the app: designed with guardrails, then paused",
  "notes": "Then the adviser. This bet tackles relevance, and that one rigid path. Remember the comparers and the delegators, and the adviser-first test we had to park? The vision said people should choose how they talk to an adviser. The reality was that Habito's advisers worked by chat, in a separate tool, and at the time the chat opened in Habito, outside Monzo. We could wait about nine months for Monzo's own chat, or put Habito's chat inside the app in about a month. I proposed the faster route, because every month we waited we kept losing people at the decision. But a second chat inside Monzo is risky: people might ask their adviser about a blocked card, or ask Monzo support about their mortgage. So I designed three guardrails. Gate: only show it during an active remortgage. Signpost: make it obvious who you're talking to and when they'll reply. Recover: if you land in the wrong place, get you to the right one in one tap. The main place for the chat is the progress tracker, so you can see where you are and ask about it in the same place. We also agreed a kill switch up front: above 2 percent misrouted chats we investigate, above 5 percent we roll back. Then a small pilot before a proper 50/50 test. In the end, we paused it. After the analysis, the team decided this integration wasn't the best use of our resources this year, and put them into other problems, like first-time buyers. So for now, the chat keeps living in Habito. It's one of those decisions that is never quite final. But that was the call for this year.",
  "ask": [
   [
    "How big was the risk, really?",
    "Small in volume: at most about 7,000 people use the product in a month, against 15 million Monzo customers. But landing in the wrong chat is a compliance problem, not only a UX one, so we treated it seriously."
   ],
   [
    "Why was it paused?",
    "It came down to priorities. The integration was possible, but after the analysis the team decided to put its resources into other problems this year, like first-time buyers. The chat keeps working in Habito in the meantime. It isn't a final decision, and the design and the guardrails are ready for when it comes back."
   ]
  ]
 },
 {
  "title": "Your adviser, one tap away",
  "notes": "Here's how it looks. The adviser has a permanent place in the tracker, with a label that says who it is and what it's for. One tap, and you're in a chat that is clearly about your mortgage. And when the adviser sends your recommendation, it opens in the app, not on another website. One honest detail: the label here still says 'Chatting on Habito.com', because that's what stayed live. What you're seeing is the design we paused.",
  "ask": [
   [
    "What if the adviser still sends the old link to Habito's site?",
    "We planned for that. For a Monzo customer, a message that only links to the recommendation on the web is hidden, so there aren't two doors to the same thing."
   ]
  ]
 },
 {
  "title": "Move the application into Monzo, pre-filled",
  "notes": "And finally, the application form, which was the most fragmented part of the journey. It lived on Habito's website, outside Monzo, and it was long. In 2025 almost half of people dropped out there, and two thirds were applying with a partner. So I designed the application inside Monzo, with two decisions I care about. First, pre-fill: instead of typing everything, you confirm what Monzo already knows about you, which answers 'use what you already know about me'. Second, save and come back later, because nobody has all their mortgage details at hand in one go. And it's measured step by step, so the team can see exactly where people stop. What you see on the right is the start: what you'll need and how long it takes, before the first question. We also wanted your partner to be able to join and fill in their part. Habito's operations only allow one account per application, so that's still an open topic with them. Looking further ahead, we want people to fill it in by voice, and to bring in data from other banks through Open Banking. We took that vision to the FCA as part of our Open Finance work, and it landed really well. You'll see a glimpse of it on the next slide. The in-app application wasn't live when I left, so I won't claim it lifted conversion.",
  "ask": [
   [
    "Why can't a partner join the application?",
    "Habito's operations work with one account per application. Changing that is an operational change on their side, not a design one. So I designed for one person filling in both parts, and we kept the conversation open."
   ]
  ]
 },
 {
  "title": "Before scaling, I audited the whole product",
  "notes": "By the summer of 2026, things were about to scale. First-time buyers were the growth focus, and Habito was bringing more traffic into our flows. So before designing the next journey, I asked a different question: where should we invest first? I audited every journey that was live, ten of them, end to end, and I scored each one on seven lenses. I expected to find one or two broken journeys. Instead I found the same seven problems repeating everywhere. A small example: the same action had three different names, depending on where you opened it. So we didn't have one broken journey. We had a product that had grown piece by piece. My recommendation was to fix the cheap basics now, and to test the big structural change before rebuilding anything. I took that to the team as a first draft, with one rule: every row leaves with an owner.",
  "ask": [
   [
    "How did you score the journeys?",
    "Seven lenses, from 1 to 5: things like how clear the user's job is, the risk when volume grows, and how confident we are in the evidence. I said out loud that the scores were assumptions. They were there to compare like for like, not to decide for us."
   ],
   [
    "What were the seven problems?",
    "Unclear user jobs, fragmented journeys, inconsistent entry points, weak recovery when something breaks, user states we didn't serve well, low evidence, and plain bugs."
   ]
  ]
 },
 {
  "title": "Where I'd take it next",
  "notes": "And this is where I'd take it next. I'll keep it short, because none of this has been built or tested yet. The first idea is a home screen that adapts. Today everyone sees the same mortgage screen. In this proposal, what you see depends on where you are: not connected, deal far away, deal about to end, or in the middle of a remortgage. You can see it changing on the right. It's low fidelity on purpose, because the next step would be to validate it. The second idea is better data. With Open Banking, people could connect their lender directly, and Monzo could give advice before you ask. That concept was shared with the FCA as part of Monzo's Open Finance work. If you'd like to see either of these in detail, they're in the appendix.",
  "ask": []
 },
 {
  "title": "I built a tool to get regulated designs approved faster",
  "notes": "There's one more thing I want to show you, because it ran through all of this work and changed how I worked: AI. AI didn't set the direction. The research did. Where it helped was speed and risk. One of the slowest parts of the project wasn't design or engineering, it was approval. Every screen about rates, deals or recommendations went back and forth with Compliance. So I built a checker that we used inside Monzo. A team uploads the rules it has to follow, pastes its copy or drops in Figma screens, and it flags lines that might break a rule and drafts a fix. If something required is missing, like the APRC, which is the full yearly cost of the mortgage, it says so instead of making it up. It doesn't approve anything, Compliance still does, but the review can focus on the hard calls. Loans, Overdrafts and Wealth asked to use it too. I also used AI to analyse support conversations, and found that people were disconnecting their mortgage because the data was wrong. You can see it running on the right: you paste the copy, it flags what could break a rule, and it suggests a fix. This is a copy I rebuilt for this case study, with no Monzo data.",
  "ask": [
   [
    "Does it replace Compliance?",
    "No. It flags and suggests; Compliance approves. It means the review starts from a cleaner draft and can focus on the hard calls."
   ]
  ]
 },
 {
  "title": "What moved, and what's still being measured",
  "notes": "So, what came out of it? Between late 2025 and spring 2026, the reach work beat our referral goal by about 75 percent: around 7,500 referrals against 4,300. That's a leading indicator, and I call it that on purpose. The vision became the team's North Star and part of the case for a new partnership model. In 2026 the work was about conversion. The Day 1 reframing and the push experiment launched in May. The progress tracker was being built when I left in October. The adviser chat in the app was designed, and then paused for this year. And the recommendation and the in-app application were designed, but not live yet. I'd rather tell you that honestly than claim an uplift I can't prove. And first-time buyers, the next journey I worked on, launched on the 11th of November.",
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
 },
 {
  "title": "Where should we invest next? I audited the whole product",
  "notes": "By the summer of 2026, I'd been designing one journey at a time for a long while. And three things were changing at once. Homeownership was moving from a feature for existing customers to an acquisition bet. First-time buyers were the growth focus for the second half. And Habito was bringing more capability, and more traffic, into our flows. The scale was about to change too: about 600,000 customers had connected a mortgage, and about two and a half million hadn't. A small audience today, a big one tomorrow. So I asked a different question: before we scale all of this, where should we invest first? I audited every journey that was live in production, ten of them, end to end. Not concepts, not experiments: what customers really see. I scored each one on seven lenses, things like how clear the user's job is, the risk when volume grows, and how confident we are in the evidence. And I was open about it: the scores are assumptions. They're there to compare like for like, not to decide for us.",
  "ask": [
   [
    "Why score, if the scores are assumptions?",
    "To look at ten journeys with the same eyes. The framework made the comparison consistent. Strategy made the final call."
   ]
  ]
 },
 {
  "title": "Not one broken journey. A product that grew piece by piece.",
  "notes": "Here's what I found, and it wasn't what I expected. I expected one or two journeys to stand out as the broken ones. Instead I found good improvements everywhere, and the same seven problems repeating: unclear user jobs, fragmented journeys, inconsistent entry points, weak recovery when something breaks, user states we don't serve well, low evidence, and plain bugs. A small example: the same action had three names. 'Track your mortgage' in the Home tab, 'Home equity' in the Grow tab, 'See mortgage' in the plus menu. So the conclusion was that we didn't have one broken journey. We had a product that had grown piece by piece. And that changes the decision: fixing journeys one by one wouldn't solve it. The biggest return was in the foundations they all rely on.",
  "ask": []
 },
 {
  "title": "A first draft, a workshop, and an owner for every row",
  "notes": "An audit is only useful if it changes what the team does. So I didn't present a list of problems. I presented a strawman, and I said the word out loud: this is my first pass, please pull it apart. Four buckets. Fix now: the cheap, high-impact basics. Validate first: the Focus View, which is a big structural bet, so test it before rebuilding. Decision needed: two questions that are product calls, not design ones, like whether connecting a mortgage should be the gateway at all. And park, which I left empty on purpose, so the room would decide what we choose not to do. Then I designed a sixty-minute workshop with Design, Product, Engineering and Data, each with their own lens, and one rule: every row leaves with an owner. The trade-off I recommended was to wait on the Focus View rebuild until it was validated. Slower to visible change, but it stops us scaling the wrong structure.",
  "ask": [
   [
    "Why a strawman?",
    "Agreeing with a blank page is easy and useless. A concrete position gives people something to push against, and the disagreement is where the value is."
   ],
   [
    "Why are some of these not design decisions?",
    "Whether connecting a mortgage is the gateway changes the whole funnel and the business case. Design can show the options and the cost of each. Product has to own the call."
   ]
  ]
 },
 {
  "title": "One home screen, eleven states",
  "notes": "The audit pointed at one place to start: the Focus View. It's the home screen for your mortgage, the room every other journey opens into. And it had one design for everyone. So my proposal was a screen that adapts: what you see depends on where you are in your mortgage. Watch it change. First visit, not connected: one clear action. Returning after looking at rates. Just connected: we celebrate first, we don't dump data. Deal far away: calm, equity and timeline. Then, as the deal end gets closer, the tone shifts from calm to urgent, and remortgaging becomes the main action. While you're remortgaging, the tracker is the hero. And there's a state for when the data fails, and one for variable-rate mortgages, where there's no deal end at all. The first principle is the important one: state-driven, not feature-driven. It's low fidelity on purpose. The decision was to validate it before rebuilding.",
  "ask": [
   [
    "Eleven states. Isn't that too many?",
    "For the customer it's always one screen with one main action. The states are for the team: they make every case explicit, so nobody finds out in production that a joint mortgage breaks the layout."
   ]
  ]
 },
 {
  "title": "Four decisions I'd defend",
  "notes": "Four decisions inside it that I'd defend. One: value without connecting. About two and a half million customers haven't connected a mortgage, and before this they had no home here at all. If you only looked at rates, your saved rates are the first thing you see when you come back. Your earlier visit counts. Two: make the cost concrete. Not 'your deal ends soon', but what you pay now and what you'll pay if you do nothing. That's urgency the customer can check. Three: the remortgage tracker lives in the home screen, not on a separate one. The home is the hub for everything about your mortgage. And four: never a dead end. If the data doesn't load, we show the last numbers we had, with the date. And the whole thing is resolved each time the screen opens, with three questions: are you connected, are you remortgaging, and how many months until your deal ends.",
  "ask": []
 },
 {
  "title": "Two mortgages, one home: four ways to show it",
  "notes": "The last piece of this chapter is an edge case that turned out to be a foundation. Our tools were built for one person with one mortgage. But people have two mortgages on one home, or a couple shares one, and then the numbers got confusing: one deal-end date for two products, or two partners seeing a different value for the same house. For our UX days I explored four ways to show it: a property overview, stacked sections, a switcher, and combining both into one deal, which could even save money. The useful part was the insight underneath. The data already added up at the level of the property. The screen didn't. So the answer to every case was the same: show the property first, then its mortgages. And I'd start with the cheapest fix: the case where both mortgages were already on screen and simply rendered badly.",
  "ask": [
   [
    "Which one would you ship?",
    "The property overview as the structure, because it works for one mortgage or five. Combining into one deal is the commercial idea I'd test next, with care about early repayment charges."
   ]
  ]
 },
 {
  "title": "Where it goes next: your mortgage data, straight from your lender",
  "notes": "One more piece before I step back, because it shows where this could go. Early in 2026 I worked on a concept for Monzo's Open Finance vision. Today we read your mortgage from your credit file, which updates slowly and has little detail. With Open Banking, you connect your lender directly, with consent you control: you choose the accounts, and you renew every ninety days. And with better data, Monzo can give you advice before you ask. 'You'll reach the next loan-to-value band before your deal ends.' 'You'd be better off overpaying than saving.' Or the honest one: 'switching now would cost you 2,900 pounds in early repayment charges.' This was shared with the FCA as part of Monzo's Open Finance work, and it landed really well.",
  "ask": [
   [
    "Is this live?",
    "No, it's a concept. Its job was to show the regulator and the business what better mortgage data would make possible."
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
