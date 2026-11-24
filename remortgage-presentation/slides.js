const slides=[
 {
  "title": "Remortgaging at Monzo, 2025–26",
  "notes": "Hi, I'm Laura. Thanks for having me. I'm going to present a remortgaging case study from Monzo, where I was a Senior Product Designer.\nLet me start with the ending. We beat our referral goal by 75 percent, but mortgages didn't grow at the same pace.\nSo most of what you'll see is how I found out why, and what I designed to fix it. First, a bit of context on the product.",
  "ask": []
 },
 {
  "title": "Monzo customers loved seeing their mortgage in the app, but it didn't make money",
  "notes": "When I joined, Homeownership was basically this. You could connect your mortgage, from almost any UK lender, and see it in the Monzo app.\nYour balance, how much of your home you actually own, what happens if you overpay, and how a new rate would change what you pay every month.\nThere were 250,000 mortgages connected, and customers loved it. But it was good for engagement, and that was it: it didn't make any money.",
  "ask": [
   [
    "How does connecting a mortgage work?",
    "Through TransUnion, the credit reference agency. You don't type any account details and it doesn't affect your credit score."
   ]
  ]
 },
 {
  "title": "To make money, we launched remortgaging with Better.co.uk. It worked, but not enough",
  "notes": "Remortgaging was the obvious place to start making money.\nQuick context on the UK: most mortgages have a fixed deal for a few years. When it ends, your rate goes up, so people switch to a new deal. That's remortgaging.\nAnd we often knew when that moment was coming. In onboarding, we ask about your deal end, and about your home to work out your equity.\nIt's not the focus of this case study, but putting these questions in onboarding was my idea. They already existed in the product, but very few people answered them. By January 2025, we'd gone from 38% to 88% of new customers giving us their deal-end date.\nSo we partnered with Better.co.uk, a mortgage broker. A broker finds you a deal and does the paperwork for you. When the mortgage completes, the lender pays the broker, the customer pays nothing, and Monzo gets a share if the customer started in our app.\nEvery customer we send to a partner is a referral. I designed that first journey. It was a click-out: people left Monzo and finished on Better's website.\nIt proved there was a business: around 5,000 customers over time. But our goal for the first six months was about 300 applications a month, around a million pounds a year. By September 2024 we had 70, and growth stopped.\nAnd once people left the app, we only saw the totals Better sent us, like how many dropped out at the form. Not why, and we couldn't test anything on their side. That was my big learning: our success ended at the referral.",
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
   ],
   [
    "If you couldn't see what happened after the referral, where do the Better figures come from?",
    "From Better. They told us, for example, how many people dropped out at the application form. What we didn't have was our own data, step by step, or a way to change their journey."
   ],
   [
    "Is 38 to 88 percent your result?",
    "Yes. It was one of my first projects when I joined. The design is mine and engineering built it. It was a big win for everything we did in remortgaging afterwards, because the deal-end date is how we know when to talk to someone."
   ],
   [
    "Why is it rebuilt in code?",
    "So you can see it move, the way it does in the app. The balance and dates are the placeholder figures from my designs."
   ],
   [
    "Did the default date inflate the 88 percent?",
    "When I removed the default, the number of people giving us a date didn't drop. So the share held, and the data got cleaner."
   ],
   [
    "What was the impact of the fix?",
    "I can't claim a business result from that change on its own. What I can say is that the strange data stopped, and we didn't lose dates."
   ],
   [
    "Why was the goal 49 to 55 percent, if you got 88?",
    "Because they measure different things. The 88 percent is new connections, after my change. The 49 percent was the whole base, including everyone who connected before the question existed."
   ]
  ]
 },
 {
  "title": "In 2025 and 2026, I led design for remortgaging through a strategy reset and an acquisition",
  "notes": "This is the part I want to focus on: 2025 and 2026, when we went through two big changes. First we reset the strategy, and then there was an acquisition.\nIn 2025 I led the vision, that's the first screen you see here. Then I designed the growth experiments to reach more people, like rates for everyone and rate alerts. I'll tell you about them in a second.\nThen came Habito, a mortgage broker that has been part of the Monzo group since April 2026. That year I designed how its journey came into our app. The second screen is one part of that product today.\nThe team was one squad: a product manager, six engineers, a data scientist, and me, the only product designer. We worked a lot with Operations and Compliance, and we had a user researcher until the vision was done.\nLet's start with how the strategy changed. Then I'll go through the main problems we worked on, one by one, and what I designed for each.",
  "ask": []
 },
 {
  "title": "We lent our engineers for two months, and used the time to listen",
  "notes": "The reset started in a way I didn't expect.\nIn February 2025, another team at Monzo, Financial Health, needed engineers. They had a real business need, and Homeownership wasn't going the way we wanted.\nWe agreed they could borrow our engineers for two months, and we decided to use that time well. We ran a discovery phase, to understand why our work wasn't moving the numbers.\nWe interviewed two groups of people. One group was people who had remortgaged with us, and the other was people who had started and given up.\nAnd just as a fun little thing: instead of presenting the discovery learnings in just a doc, I suggested we made a comic, so the research insights would stay with the team along the way.\nAnyway, that phase is what changed the strategy.",
  "ask": [
   [
    "Whose decision was the pause?",
    "Our Product Director's, with leadership behind it. Leadership confirmed the long-term commitment to Homeownership and we agreed a return date. So it was a pause with an end, not a wind-down."
   ],
   [
    "How was the discovery phase organised?",
    "In workstreams, each with an owner and a deliverable. The three that mattered most for this story were customer research, which our user researcher led, the vision, which was mine, and checking how feasible each idea was. The rest were outside design, and I wasn't close to them."
   ]
  ]
 },
 {
  "title": "Customers asked us for four things",
  "notes": "Customers told us four things.\nThe first one was, don't send me out. People expected to get their new deal inside Monzo, they didn't expect to end up on another website.\nThe second thing was, use what you already know about me, don't ask me again. And it's true that from sign-up, onboarding or other products we already know a lot, like your income, your mortgage balance or your address.\nThe third was, let me choose how I interact. With our partner at the time, Better.co.uk, everything started with a phone call, and they called customers on their own schedule, whenever they could.\nSome people wanted a phone call, because it made them feel safer. But other people preferred less intrusive ways, like chat or email, at a time they chose. They wanted to do it on their own, knowing there was a human expert there if they needed one.\nAnd the fourth one was, tell me what's happening, because the waiting was the most stressful part for them. A remortgage usually takes between four and six months to complete. So it was quite long, sometimes customers didn't know what was happening, and they didn't have a place to come back to and check.",
  "ask": [
   [
    "What was your part in the research?",
    "Our user researcher led the interviews: one-to-one, with people who had remortgaged with us and people who had dropped out. I worked with the researcher on the synthesis and turned the themes into the vision."
   ]
  ]
 },
 {
  "title": "The whole remortgage, without leaving Monzo",
  "notes": "I turned all of that into a design vision: the whole remortgage, inside Monzo. What you see playing here comes straight from my Figma frames.\nThe application comes into the app. You see the benefits of remortgaging with us, and the deals you could get, because we already have some data about you.\nThen you choose how to start. Talk to an adviser first, for a more personal experience. Or see the recommendations first, and talk to an adviser after.\nTo get a mortgage you have to fill in a fact-find, a very thorough affordability assessment. Here it comes pre-filled with what Monzo already knows. You can review it, but most of the form is already done.\nYou see who your adviser is, and you choose how to talk to them. And when your recommendation arrives, it comes with a note from your adviser, and their expert recommendations.\nYou can follow your progress in the app, and see if there's anything you need to do.\nAnd you upload all your documents from the app. Something I find really interesting in the vision: we proposed the first B2C website experience, so people could also upload documents from a laptop. Research showed that many of these documents live on a computer, not on a phone.\nAnd at the end, you get your new mortgage, you connect it to Monzo, and the homeownership journey starts again, until it's time to remortgage.\nOn this slide I've also attached an article about our vision work, written by our product director.\nI should say, a vision is a direction for the team. We weren't promising to build everything. But it made one thing very clear: to give customers the experience they wanted, we needed to own much more of the journey than our referral partner allowed us to.\nAt that point, the business was also talking about bringing in more partners. We didn't know we were going to buy Habito. But from the research and the early vision work, we knew we needed to offer other ways to communicate, and more flexibility, closer to how Monzo works.\nSo the vision became part of the argument for changing our partnership model. Later Monzo bought Habito, and that's what made it possible to build. I wasn't part of the acquisition decision, but the team still goes back to this vision.",
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
  "title": "I turned the vision into bets the team could ship",
  "notes": "I had the vision, but a vision doesn't help if the team can't build it.\nSo I organised a session with the team to turn the vision into a plan, with the support of our engineering manager. I ran the session, and this is the plan. At that point, our partner was still Better.\nThree columns: now, next and later. The now column is what we could start straight away.\nFirst, opening the door to people without a connected mortgage. I'll show you that in a minute, but you can imagine: we were behind our revenue goals, and we needed to bring more people in.\nThen the progress tracker, so customers could follow their remortgage in the app, and connect the app to what was happening outside it, even if at the beginning they still had to go to the partner's website.\nFor me, this is the most valuable idea. While we were still building, and still sending people out, they could always see where they were and know the next step.\nAnd of course pre-fill: using the data we already have, so people don't type things twice.\nThe next column is what needed a bit more work. Revisiting the onboarding to the broker: when we started with Habito, that was the first thing we built. Our own application form inside the app. And estimated deals.\nAnd a first, simple version of the recommendation in Monzo, where you could see it, but not accept it.\nIt's true that with Better, on their site, after building the vision, we tested letting people choose: talk to an adviser first, or see the deals first. People liked it, and it tested very well. But I have to say, when we started with Habito, they couldn't support that yet, so we had to park it. So I looked for a version we could do, and that became estimated deals.\nAnd the later column has the big pieces: accepting the recommendation inside Monzo, the adviser chat in the app, and document upload.\nThe chat and the document upload got moved back again in 2026, because we needed to grow faster and the focus moved to first-time buyers. I'll come back to why.",
  "ask": [
   [
    "What happened to the adviser-first test?",
    "It tested well with Better. We parked it for Habito, because they couldn't handle it operationally, their advisers work by chat. I suggested a way around it, and that became estimated deals, so people can see deals first without talking to anyone."
   ],
   [
    "Did you work on the value proposition?",
    "Yes. In June 2025 I ran a value-proposition workshop with Product Marketing. It gave us two kinds of customers, planners, who compare deals themselves, and delegators, who want someone to guide them. And it picked pre-fill and the tracker as the things that would make us different. Both are live today."
   ],
   [
    "How do you decide what to build?",
    "I look at three things. Do people want it, can we build it with what we have, and does it work for the business. The adviser-first test is a good example: people wanted it, but it wasn't feasible with Habito, so I found the version that was, estimated deals. The chat in the app was the opposite: people wanted it and we could build it, but that year it wasn't the best use of the team."
   ]
  ]
 },
 {
  "title": "Reach people before they're ready to remortgage",
  "notes": "OK, reach. We knew where we wanted the product to go, but we couldn't build the vision overnight. We still had revenue targets, and we depended on what our broker could do. So we worked on two tracks: reach more people now, and move more of the journey into Monzo, step by step.\nFrom the second half of 2025, reach was the part we could control. Our hypothesis was simple. We weren't growing because we couldn't reach enough people.\nMost people who were about to remortgage hadn't connected their mortgage, so we couldn't see them. At the time, about 365,000 customers had connected one, and more than two million had one we couldn't see.\nHonestly, I always thought that asking people to connect first was a barrier. And here I could do something about it.\nWhat if we gave them a tool to see mortgage rates? From there they could connect. And we could capture their deal-end date, to reach them at the right moment, even if they never connected. That's the first screen.\nThat's the second screen. We didn't know their home, but we knew where they lived, from their Monzo address. So we guessed the filters, like the property value and the mortgage balance, from averages for their area. You saw rates for a home like yours without typing anything, and you could change them to your own numbers.\nA bit later, we launched estimated deals for connected customers. That's the last screen: deals from real lenders, with the monthly repayment and the fees. They're estimated because they come before the fact-find and before you apply.\nWe also ran rate alerts and new entry points across the app. I'm happy to go into those later.\nFor the result. Between late 2025 and spring 2026, all our referrals together beat our referral goal by about 75 percent. That's around 7,500 referrals, when the goal was 4,300. New mortgage connections went from about 200 to about 1,000 a day. And rate alerts were behind 44 percent of recent referrals.\nSo the hypothesis was right. But keep one thing in mind for later. A referral is only the first step. It isn't a mortgage yet.",
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
  "notes": "And then we started with Habito. At the end of 2025 Monzo agreed to buy Habito, which is another mortgage broker. From December we sent customers to both partners, Better and Habito, and in October 2026 we stopped sending them to Better.\nWith Better we already had entry points and an onboarding. We didn't have time to redesign and test the whole onboarding, so I translated Better's onboarding to Habito. I applied what we had learned, and balanced the trade-offs that came with Habito.\nOf course, we had to adapt some things to how Habito worked operationally.\nLearning number one: people thought we were a comparison site. We led with 'compare remortgage deals from over 100 lenders', so when a broker started asking about their finances, it felt like a trick.\nSo I reframed it, and redesigned the first screen to lead with the help of a mortgage expert: 'Find a mortgage with free expert help'. It went live in May 2026, and Ops told us they were getting fewer questions about comparing deals. I don't have an exact number for you, though.\nWe also tweaked the wording to mention the acquisition. At first we couldn't say Habito by Monzo publicly, so we just had the Habito logo, without 'by Monzo'. Later we could, and to be honest, we tested the copy quite a lot.\nLearning number two: people didn't want to leave Monzo. We couldn't avoid sending them to Habito, or to another partner, yet. You had to create a Habito account from the Monzo app, so to make that feel less negative, I proposed framing the account as a benefit: you can check your progress here, in the app, or on Habito's website, wherever suits you.\nThen another operational trade-off: Habito needed to know if you were remortgaging with someone else, to add them as a second applicant. We were working on moving those questions into the application form, out of the onboarding, but that was going to take a bit longer.\nAnd from there, we took you to Habito.",
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
  "title": "No design files at Habito, so I became the customer",
  "notes": "Habito didn't have a design team, so there were no design files of their journey.\nSo to design the onboarding, the tracker and everything that came after, I needed to know the journey customers were completing in Habito. So I did the journey myself. I applied through Habito as a real customer, from the first step in Monzo until I got the mortgage illustration.\nI saved every screen, every email and every document in one page. That's the wall you see here.\nAnd by doing that, I saw the terminology they used, how they delivered the recommendation, and how they talked to customers. So we could see how to bring that into our app, and also the gaps: operational ones, and gaps in the Habito experience.\nAnd of course, it gave the team one picture of the journey as it was, that everybody could look at.",
  "ask": [
   [
    "Why do it yourself, and not rely on research?",
    "Research tells you what people say. Going through it tells you what the journey asks of them, step by step. I needed both: the research interviews for the why, and my own run for the where."
   ]
  ]
 },
 {
  "title": "We shipped the simplest tracker first",
  "notes": "I'm going to talk a bit about the first progress tracker. I want to show you how it evolved, because the trade-offs say more than the final screen.\nThe first iteration was, to me, the ideal one at that point. Everything in one place: your steps, the deals you got, and your expert. It answered 'tell me what's happening' best, and you didn't have to leave the screen to know where you were.\nBut it didn't work for us, because at that point it depended on data we couldn't get. When we sat down with engineering, not every step Habito gave us could be tracked on our side, and there were bits of data we just couldn't get yet.\nSo with what I learned from engineering, I made a second proposal, with only the steps we could track accurately. One screen per state, with what's done and what's next. But from an engineering point of view, we needed a new screen for every state, and it was very slow to build at that time.\nSo we shipped the third one: Habito's own steps, with a link to their website at the exact step each customer was on. We chose it because it was the one we could launch on time, and we saved the ideal version for later.\nCustomers found it useful, but it didn't move the metrics. And that makes sense, because a tracker without the rest of the journey doesn't do much more than reduce the stress of waiting. But it was a point in favour of our vision.\nOn the tech side, it was a very hard project. Our engineers had to build a lot of bridges and APIs so the tracker was accurate. At the beginning, the data even reached us two days late, while Habito was already showing it, so the first version didn't have parity. We had a few complaints about that, but we worked with Habito to fix it, and now the app has full parity.\nThis is a decision I'd make again: ship small. It moved us closer to the vision, and it showed us early how hard the data part was.\nYou'll see the next version of the tracker in a few minutes.",
  "ask": []
 },
 {
  "title": "Move the application into Monzo, pre-filled",
  "notes": "After the tracker, we moved the application form into Monzo. It was the most fragmented part of the whole journey: it was on the broker's website, and it was long. Around 200 questions.\nWith Better, in 2025, almost half of the people dropped out there. That number came from Better, by the way, because we couldn't see that part of the journey ourselves.\nAnd with Habito it was still on a separate website.\nI designed the application inside Monzo, and there are two decisions I care about.\nThe first is pre-fill. You don't type everything, you just confirm what Monzo already knows about you. That's the answer to 'use what you already know about me'. Pre-fill has been on for everyone since May.\nThe second is saving your progress, so you can come back later, because nobody has all their mortgage details ready in one go. That one is in the next version.\nAnd we measure it step by step, so the team can see exactly where people stop. On the right you can see two versions.\nThe first one is a simple form, and it went live at the end of September. We tested it with half of our customers. People on the team tell me the first signal is strong.\nAbout 40 percent more people are finishing the form and getting to a recommendation, compared with when they started in Monzo and had to go to Habito's website.\nThe data isn't mature yet, so for me it's still an early signal. And the next version is designed, on the right: it tells you what you'll need and how long it takes, shows what we've already answered for you, and breaks the form into five sections that keep your progress.",
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
  "title": "Referrals beat the plan, the later stages didn’t",
  "notes": "Back to the numbers. With Habito, we were still sending a lot of people.\nThis chart shows each step of the Habito funnel against its 2026 target.\nReferrals were at 153 percent of the target. But from referral to recommendation, we were at 72 percent. And from recommendation to sending the application to the lender, only 44 percent.\nSo the biggest drop was after the recommendation. People got a deal from their adviser, and then they didn't go ahead.\nAnd that's when they should be most motivated. They had filled in the whole form, the fact-find, and talked to an adviser. So it wasn't only about the quality of the traffic.\nWe only make money when the mortgage completes, and that takes months. So we picked an earlier signal: accepted recommendations. When you accept the deal, that's the first moment you really commit.\nIt was the same problem we had with Better. The difference was that now we could see where it happened, and we could change it.\nFor me, this is the turning point. The question wasn't 'how do we send more people?' anymore. It was 'why don't people with a recommendation go ahead?'\nSo I went to find out, with the team.",
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
  "notes": "With our PM, I co-led a workshop about the drop-off. Then I turned what we learned into this: an opportunity solution tree.\nIt's simple. One goal at the top: more people accept their recommendation. Under it, the problem. And under that, the possible causes.\nOur hypothesis was that these people really wanted to remortgage, but when they saw the recommendation, they didn't feel confident enough to say yes.\nWe found five causes. I'll talk about three. First, relevance: the recommendation felt generic. No reasons, and no person behind it.\nSecond, leaving Monzo: people got sent out of the app. One customer said it felt like being passed on to another company.\nThird, momentum: people were ready, but our follow-up was slow and easy to miss.\nFor each cause, I asked one question: can Monzo fix this, or is it up to Habito? Relevance, for example, was mostly up to Habito, because they write the recommendation.\nAnd these were only hypotheses. Rates, eligibility, or how fast the adviser replied could also explain part of the drop, and most of that was on Habito's side.\nThis showed us where design in Monzo could make the biggest difference. What I'll show you next comes from here.",
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
  "title": "A push the moment the recommendation is ready",
  "notes": "Now, the moment people decide. The first thing we did there was the quickest one. If you remember the tree, people were ready, but our follow-up was slow. The only reminder was an email from Habito.\nSo we built a push from Monzo. We sent it on day zero, the moment the recommendation is ready, because that's when people care the most. And again on day three. The question was where the push should take you.\nWe had two options. Option A was a new screen that took you to Habito. It says your recommendation is ready, that Habito is regulated, and that it's free. It was the best way to build trust, but we had to build a new screen.\nOption B reused the progress tracker, where you could already review your recommendation. A screen people already knew, and nothing new to build.\nOn paper I preferred A, because it was a cleaner test. But with B we could test much faster, and that's what launched in May. I think it was the right call, because we needed to learn fast.\nWe measured accepted recommendations, and they went up. I don't remember the exact number, so I won't give you one.\nAnd I think I know why it worked. The tracker was already live, but it was hard to find. You had to know where to look. The push took people straight to it, so more people got there, and more of them accepted.",
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
  "title": "Do I trust this recommendation enough to go ahead?",
  "notes": "The next step was to bring the recommendation itself into Monzo. I designed a first version where you could see your recommendation in Monzo, but you couldn't act on it there.\nThat was an engineering constraint at the time. We were still building our full set of APIs and connectors, so there were limits while we built them.\nYou can see it playing here. This one was interesting. Habito could only offer one recommended deal, which makes sense, because that's their advice. But customers wanted to see more than one.\nSo we showed the other deals as secondary options, under the main one. We tested one recommendation against several, with the others shown as secondary. Conversion was better with several, around 10 percent.\nTo accept it, you tapped a button and went to Habito's website. It was a quick way to see if just seeing the recommendation in Monzo changed behaviour. And it did, but only a little.\nI don't have an exact figure, so I won't make one up. It was positive, but not enough.\nI asked myself what was missing. And I think this is the question customers were asking themselves: do I trust this recommendation enough to go ahead?\nI took that screen and I scored it against the things you need to feel confident. My audit is behind this button.\nDo I understand it, does it feel like it's for me, can I see alternatives, the trade-offs, the real cost, and am I ready to act. And none of them was fully covered.\nMy conclusion was that people could see the deal, but they couldn't really decide.",
  "ask": [
   [
    "Why a view-only version?",
    "It was the quickest way to see if just showing the recommendation in Monzo changed behaviour. It did, but only a little. Positive, but not enough, so I started the redesign."
   ],
   [
    "Who were you really competing with?",
    "Mostly the customer's current lender. Staying with the same lender takes a few clicks, with no adviser and no paperwork. Our research showed people used us to sense-check and then some finished elsewhere. So the recommendation had to earn the switch: the reasons, the real cost and what was ruled out."
   ],
   [
    "How big was the effect of the view-only version?",
    "Small. I don't have an exact figure I'd stand behind, so I won't give you one. What it told us was clear enough: seeing the recommendation wasn't the same as being able to decide."
   ]
  ]
 },
 {
  "title": "What customers needed to see before choosing a mortgage",
  "notes": "So once we saw that the view-only version wasn't enough, I started redesigning it. The goal was to help people decide with confidence.\nIt took me three rounds of iteration, and every round fixed something the previous one was missing.\nIt also took time for other reasons. There were tech constraints. We wanted time to see if Habito could improve how they explained the recommendation. And we needed to study with Compliance what information had to be on the screen, and what could live in the documents we send by email. So we took our time.\nThe first round was low fidelity. It showed the total cost first, before the monthly rate, and it compared staying with your lender and switching, in pounds. We weren't converting enough by pushing people to switch, and research said people wanted to compare and feel safe. And staying with your lender is always less work.\nThe second one went to a design crit on the 17th of September. It was a hub with tools, for example to stress-test the deal. And the feedback was that too many things were competing for attention.\nSo in the third one, version 2.1, in October, the monthly payment goes back on top. Showing the total cost first put people off: a big total number scared them away. And Monzo had seen something similar before. In 2019, in a first remortgage test with the broker Mojo, deals were ranked by their true cost, and customers thought they weren't competitive. So now you see the monthly payment and why the adviser chose this deal. Then you can open the full cost, and see which alternatives were ruled out. The question I still wanted to test was whether that helped people explain the choice in their own words. Let me show you.",
  "ask": [
   [
    "What did the crit change?",
    "How much was on the first screen. Before, reasons, tools and timeline all competed. After, one recommendation and its reasons, and the rest behind a tap."
   ]
  ]
 },
 {
  "title": "The recommendation, inside Monzo",
  "notes": "So this is version 2.1, made from my Figma frames. It starts in the tracker, your recommendation is ready.\nThen you get one screen with the deal and what you pay every month. 'Why this is your best deal' gives you the adviser's reasons.\n'How this deal was calculated' shows the real cost over the whole deal, so you see more than the monthly payment. And you can see the deals we ruled out.\nBefore you commit you can see every detail, and you can accept, reject, or chat with your adviser, which opens Habito's chat. And the last screen tells you what happens next.\nThe numbers and some of the copy are placeholders. And this version went live on the 1st of November. I designed it, but it was built after I'd left, so I didn't get to see it live.\nThe live data will show if more people accept. To know if they understood it, I'd ask people to explain in their own words why that deal was chosen, and what it means for them.",
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
  "title": "The tracker shows who has to act next",
  "notes": "Now, the progress tracker. It answers the fourth thing customers told us, tell me what's happening.\nA remortgage has around ten stages, and the next step can be yours, the adviser's or the lender's. To design it I worked with Habito, to understand the steps they track and make them understandable for our customers.\nAnd then our engineers worked with Habito's engineers to build the bridges between the two systems.\nI designed one card that changes during the journey. It's orange when it's your turn, and green when someone else is working on it.\nWe also redesigned how people get to the tracker. Before, you went to Homeownership in Monzo, and from there to the tracker. Now, if you're remortgaging, the tracker is your first entry point, because that's your main focus. And from there you can still go back to your Homeownership dashboard.\nAnd this is also where the adviser chat was going to live, which comes next. A simpler tracker has been live since the first journey. This version went live this November, when I had already left.\nPeople I worked with tell me the early signals are very positive, but it's too soon to have results.",
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
  "title": "The adviser chat: a first step in the app",
  "notes": "Now, how we brought the adviser more into the experience. The vision said people should choose how they talk to an adviser.\nBut in reality, Habito's advisers worked by chat, in a separate tool. And at that time, the chat opened in Habito, outside Monzo.\nOur vision was to have the chat inside Monzo. That's the full design, on the right. But we had two options. Wait about nine months for Monzo's own chat. Or bring Intercom, the chat tool Habito used, into our app as a window. We went with Intercom first, because it was faster.\nBut a second chat inside Monzo is risky. People could ask their adviser Monzo questions, like how to block their card. Or they could ask Monzo support about their mortgage.\nSo I also designed guardrails: safe answers we could give people when they ask in the wrong place. You can see them on the right.\nWe also agreed a kill switch before we started. It's a limit that tells you in advance when to stop. If more than 2 percent of chats were in the wrong place, we'd investigate. Above 5 percent, we'd roll back.\nThen we launched the first version, and I designed it: Habito's Intercom chat, inside the app. You can see it on the left.\nBefore we moved to the full chat in Monzo, first-time buyers became the team's first goal. That was a business decision. We needed to show that buying Habito had been a good decision, and we know most Monzo customers are first-time buyers.\nSo today the chat is still that first version. The team's main focus in the last two months was launching for first-time buyers, and that's already live in the app.",
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
  "title": "The 2025 vision, designed end to end",
  "notes": "This is where it all lands. In 2025 the vision was the whole remortgage without leaving Monzo. This is that journey, designed end to end.\nThe difference from today: the advice comes from Monzo, and nobody leaves the app.\nYou start from your mortgage in Monzo. The form is pre-filled with what we already know. Then you chat with your expert, and the recommendation arrives in the chat.\nYou accept it in the app, upload your documents from your phone, and the tracker shows every step until the lender accepts the offer.\nAnd at the end we ask: is this your new mortgage? That closes the loop. The new deal goes back into Monzo, and we can help again when it ends.\nAs you can see, we still have some pieces of the vision to build. Mainly later steps in the journey, like uploading your documents and connecting your new mortgage. But it's almost there.\nYou can try the full prototype behind this button. The full launch is planned for February.",
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
  "notes": "There's one more thing I want to show you. One of the slowest parts of the project was approval. Every screen about rates, deals or recommendations went back and forth with Compliance, many times.\nAnd I asked myself, what if designers could check their screens against the rules before they even get to Compliance?\nI built a checker myself with Cursor, which is an AI coding tool, using the documents with the rules. And we used it inside Monzo.\nA team pastes its copy or drops in Figma screens, and the tool flags the lines that could break a rule and suggests a fix. If something required is missing, like the APRC, the full yearly cost of the mortgage, it tells you. It doesn't make it up.\nIt doesn't approve anything, Compliance still does that, but the review can focus on the difficult decisions. Loans, Overdrafts and Wealth asked to use it too, so I ran a lunch and learn and set up a Slack channel for feedback.\nYou can see it running on the right. It's a copy I rebuilt for this case study, with no Monzo data in it.",
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
  "notes": "About AI in general: it didn't decide the direction of this work, the research did. It helped me with speed and with risk.\nSo I use AI in four ways. One, to experiment, like this checker, or a custom AI assistant I built with our product context.\nTwo, built into how the team works, checking our UI copy before it gets to Compliance.\nThree, for my own work. Drafting copy and scenarios, trying quick UI variations, and analysing support conversations. That's how I found out people were disconnecting their mortgage because the data was wrong.\nAnd four, to share what I learn. The lunch and learn, the feedback channel, and a prompt library for the team.\nAnd there are places where I've decided it isn't worth it. Basically, when it adds a layer of complexity without improving a decision or an outcome.\nI don't use it to decide the strategy. It can sort signals and suggest hypotheses, but it doesn't replace understanding the context, negotiating priorities or owning a hard decision.\nI don't use it to pretend we did research. It can summarise interviews, but it doesn't replace talking to people, and seeing the difference between what they say and what they do.\nAnd no high-impact decisions without a human. In financial products, I wouldn't let an opaque recommendation affect someone's eligibility, risk or access without an explanation, oversight and a way to review it.\nI also don't use it to generate solutions before we understand the problem, or to produce generic designs or copy in bulk. If the result needs so much review that it's faster to do it well from the start, it isn't saving any work. And it doesn't fix a team that isn't aligned.\nSo I use it to take away mechanical work, and the judgment and the accountability stay with the team. The way I'd put it: I use AI to increase the speed and breadth of exploration, but I don't delegate product judgment or accountability to it.",
  "ask": []
 },
 {
  "title": "What changed, and what’s still to do",
  "notes": "So, what came out of all this? At the start I told you that we beat the referral goal, but mortgages didn't grow at the same pace. Referrals ended about 75 percent above our goal.\nBut a referral is only the first step, and I prefer to tell you that than to claim an uplift I can't prove.\nSo the number that matters in this story is accepted recommendations. And that one went up.\nFirst with the push on day zero, because it took people straight to the tracker.\nThen the view-only recommendation moved it a little more.\nNow, the four things customers asked for at the beginning. I'm not going to read every row. Most of it is live.\nEstimated deals, pre-fill, the push when your recommendation is ready, the application inside Monzo since the end of September, and since this November, the new tracker and the new recommendation, where you can accept it inside Monzo.\nThe 'I need more time' option is designed. And the adviser chat opens inside the app now, on Habito's Intercom chat. It's a first step towards our own chat in Monzo.\nIn 2026, most of what I designed for Habito shipped late in the year, so the results are only starting to arrive.\nWith the application inside Monzo, I'm told that about 40 percent more people are finishing the form and getting to a recommendation. It's early, so I wouldn't call it a result yet.\nAnd the new tracker, which is the design I expect to have the biggest impact, has only just launched, so it's too soon to tell.\nOne number I can share: in September, 355 applications came from Monzo, a record. Completed mortgages come months later, and I can't attribute those applications to the new form.\nAnd the whole remortgage isn't in the app yet. Document upload and our own adviser chat in Monzo were moved back, because the focus moved to first-time buyers.\nThat launched on the 11th of November, and I did the vision and the design of that first release.",
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
  "notes": "Looking back, there are four things I take with me. One: getting people in isn't enough. Referral growth showed us a bottleneck after the recommendation. So we moved to where people dropped: the form and the recommendation.\nTwo: say what it is. People thought we were a comparison site, and leading with the expert changed what they expected. Three: ship what you can, then improve it. The push used the tracker we already had, and accepted recommendations went up.\nAnd four: work with your partner's limits. Habito had no design team, and their chat ran on Intercom. So I went through the journey myself, and we shipped first steps, like the chat inside the app.",
  "ask": []
 },
 {
  "title": "What I’d bring to Benefits",
  "notes": "And I think this is why it's relevant for Benefits. From what I understand, Benefits works across international products, integrations and partners.\nSo providers whose systems you don't own, decisions that matter a lot to employees, and rules that change in every country. And that's very similar to what I've been doing.\nIn remortgaging I did exactly that: I made a service split between Monzo and a broker feel like one, and made sure people always knew which step they were on. And before I design anything, I like to check which step we need to move.",
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
 },
 {
  "title": "Chat with your adviser without leaving Monzo",
  "notes": "This is how it was designed, it's playing from my Figma frames. The adviser has a fixed place in the tracker, with a name and a face.\nThe first time you open the chat you get a short intro. Who Annie is, that this chat is only for your remortgage, and when she replies. You only see it that first time.\nIt's there so you feel confident that you're talking to a real person, and to an expert.\nAfter that, the chat opens directly from the tracker. If you ask about something else, your balance for example, it sends you to Monzo support in one tap.\nAnd when the adviser sends your recommendation, it arrives in the chat and it opens in the app, so you don't go to another website. This was designed, but it was never built.",
  "ask": [
   [
    "What if the adviser still sends the old link to Habito's site?",
    "We planned for that. For a Monzo customer, a message that only links to the recommendation on the web is hidden, so there aren't two doors to the same thing."
   ]
  ],
  "appx": true
 },
 {
  "title": "The home screen, in eleven states",
  "notes": "My audit of the product pointed at one place to start: the Focus View. It's the home screen for your mortgage, the room every other journey opens into. And it had one design for everyone.\nSo my proposal was a screen that adapts: what you see depends on where you are in your mortgage. Watch it change.\nFirst visit, not connected: one clear action. Returning after looking at rates. Just connected: we celebrate first, we don't dump data.\nDeal far away: calm, equity and timeline. Then, as the deal end gets closer, the tone shifts from calm to urgent, and remortgaging becomes the main action. While you're remortgaging, the tracker is the hero.\nAnd there's a state for when the data fails, and one for variable-rate mortgages, where there's no deal end at all.\nThe first principle is the important one: state-driven, not feature-driven. It's a proposal. The decision was to validate it before rebuilding.",
  "ask": [
   [
    "Eleven states. Isn't that too many?",
    "For the customer it's always one screen with one main action. The states are for the team: they make every case explicit, so nobody finds out in production that a joint mortgage breaks the layout."
   ]
  ],
  "appx": true
 },
 {
  "title": "Four decisions, and why I made them",
  "notes": "Four decisions inside it that I'd defend. One: value without connecting. Millions of customers haven't connected a mortgage, and before this they had no home here at all.\nIf you only looked at rates, your saved rates are the first thing you see when you come back. Your earlier visit counts. Two: make the cost concrete.\nNot 'your deal ends soon', but what you pay now and what you'll pay if you do nothing. That's urgency the customer can check. Three: the remortgage tracker lives in the home screen, not on a separate one.\nThe home is the hub for everything about your mortgage. And four: never a dead end. If the data doesn't load, we show the last numbers we had, with the date.\nAnd the whole thing is resolved each time the screen opens, with three questions: are you connected, are you remortgaging, and how many months until your deal ends.",
  "ask": [],
  "appx": true
 },
 {
  "title": "Four ways to show two mortgages on one home",
  "notes": "This is an edge case that turned out to be a foundation. Our tools were built for one person with one mortgage.\nBut people have two mortgages on one home, or a couple shares one, and then the numbers got confusing: one deal-end date for two products, or two partners seeing a different value for the same house.\nFor our UX days I explored four ways to show it: a property overview, stacked sections, a switcher, and combining both into one deal, which could even save money. The useful part was the insight underneath.\nThe data already added up at the level of the property. The screen didn't.\nSo the answer to every case was the same: show the property first, then its mortgages. And I'd start with the cheapest fix: the case where both mortgages were already on screen and simply rendered badly.",
  "ask": [
   [
    "Which one would you ship?",
    "The property overview as the structure, because it works for one mortgage or five. Combining into one deal is the commercial idea I'd test next, with care about early repayment charges."
   ]
  ],
  "appx": true
 },
 {
  "title": "Next: mortgage data straight from the lender",
  "notes": "This one shows where all of this could go. Early in 2026 I worked on a concept for Monzo's Open Finance vision.\nToday we read your mortgage from your credit file, which updates slowly and has little detail. With Open Banking, you connect your lender directly, with consent you control: you choose the accounts, and you renew every ninety days.\nAnd with better data, Monzo can give you advice before you ask.\n'You'll reach the next loan-to-value band before your deal ends.' 'Overpaying beats your savings pot.' Or the honest one: 'switching now would cost you 2,900 pounds in early repayment charges.' This was shared with the FCA as part of Monzo's Open Finance work, and it landed really well.",
  "ask": [
   [
    "Is this live?",
    "No, it's a concept. Its job was to show the regulator and the business what better mortgage data would make possible."
   ]
  ],
  "appx": true
 },
 {
  "title": "Before scaling, I audited the whole product",
  "notes": "By the summer of 2026, things were about to get bigger.\nFirst-time buyers were the focus for growth, and Habito was bringing more traffic into our flows.\nSo before designing the next journey I asked a different question, which was where should we invest first. I reviewed the whole live experience: ten areas in total.\nAnd I scored the main journeys with the same six criteria. Things like how clear the customer's job is, the risk when volume grows, and how confident we are in the evidence.\nI expected to find one or two broken journeys. And what I found was different. There wasn't one broken journey.\nIt was a product that had grown piece by piece. I'll give you a small example. When I counted, we had eleven different ways of saying 'connect your mortgage', and nine for remortgaging.\nSo I recommended three initiatives for the next half. Align the copy on our entry points. Improve trust and clarity on the mortgage home screen.\nAnd open estimated deals to people who don't have enough connected data.\nAnd one direction for the longer term, which is to organise the product around your property. They went into the team's planning as candidates, to be scored with everything else.",
  "ask": [
   [
    "How did you score the journeys?",
    "Six criteria, each scored one, three or five: customer job clarity, UX quality, strategic importance, scale risk, confidence and delivery effort. I said out loud that the scores were a map to compare journeys, not the final priority order."
   ],
   [
    "What had growing piece by piece created?",
    "Fragmented entry points, duplicated functionality, inconsistent user states, disconnected experiences, and foundations that get harder to scale."
   ],
   [
    "What happened with it?",
    "The three initiatives went into the team's prioritisation for the second half, scored alongside the rest of the portfolio. The property-level direction was there to guide future discovery, not as a commitment."
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
