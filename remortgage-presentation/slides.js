const slides=[
 {
  "title": "Remortgaging at Monzo, 2025–26",
  "notes": "Hi, I'm Laura. Thanks for having me. I'm going to present a remortgaging case study from Monzo, but first I need to give you a bit of context, if that's OK. I joined Monzo's Homeownership team when the product didn't make any money at all, so I saw it grow from a nice feature into something that brings revenue.\nToday I'm going to talk about 2025 and 2026, which is when we changed the strategy, and everything that came after.\nMy title was Senior Product Designer, but for most of that time I was the only designer in the squad, so I was leading the design.\nLet me start with the ending. We beat our referral goal by 75 percent, but mortgages didn't grow at the same pace.\nSo most of what you'll see is how I found out why, and what I designed to fix it.\nLet me give you a bit more context, so you understand the product.",
  "ask": []
 },
 {
  "title": "Monzo customers loved seeing their mortgage in the app, but it didn't make money",
  "notes": "So, when I joined, Homeownership was basically this. You could connect your mortgage, from almost any UK lender, and see it in the Monzo app.\nYour balance, how much of your home you actually own, what happens if you overpay, and how a new rate would change what you pay every month. And customers loved it.\nWhen I joined, there were 250,000 mortgages connected. The problem was that it didn't make any money. It was good for engagement, and that was it.",
  "ask": [
   [
    "How does connecting a mortgage work?",
    "Through TransUnion, the credit reference agency. You don't type any account details and it doesn't affect your credit score."
   ]
  ]
 },
 {
  "title": "To make money, we launched remortgaging with Better.co.uk. It worked, but not enough",
  "notes": "First, we needed to prove we could make money. Remortgaging was the obvious place to start.\nQuick context on the UK: most mortgages have a fixed deal for a few years. When it ends, your rate goes up, so people switch to a new deal. That's remortgaging.\nAnd thanks to the deal-end date, we often knew when that moment was coming.\nDuring onboarding, we ask about your deal end and your home, to work out your equity.\nIt's not the focus of this case study, but putting these questions in onboarding was my idea. They already existed in the product, but very few people answered them.\nBy January 2025, we'd gone from 38% to 88% of new customers giving us their deal-end date. And that date matters, because it tells us when someone is close to remortgaging.\nSo we partnered with Better.co.uk, a mortgage broker. A broker finds you a deal and does the paperwork for you.\nWhen the mortgage completes, the lender pays the broker, the customer pays nothing, and Monzo gets a share if the customer started in our app.\nEvery customer we send to a partner is a referral. I designed that first journey. It was a click-out: people left Monzo and finished on Better's website.\nIt proved there was a business: around 5,000 customers over time.\nBut it didn't go the way we wanted.\nOur goal for the first six months was about 300 applications a month, around a million pounds a year.\nBy September 2024 we had 70. We missed our revenue goals, and growth stopped.\nAnd once people left the app, we only saw the totals Better sent us, like how many dropped out at the form. Not why, and we couldn't test anything on their side. That was my big learning: our success ended at the referral.",
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
  "notes": "And this is the part I want to focus on.\nIn 2025 and 2026 I led design for remortgaging, and we went through two big changes.\nFirst we reset the strategy, and then there was an acquisition.\nIn 2025 I led the vision, that's the first screen you see here. Then I designed the growth experiments, to reach more people: rates for everyone, even without a connected mortgage, estimated deals for connected customers, new entry points like the Monzo home screen, and rate alerts.\nThen came Habito, a mortgage broker that has been part of the Monzo group since April 2026. That year I designed how its journey came into our app. That means the application form, the tracker, and the recommendation.\nThe second screen is from that, from the product today. The team was one squad. A product manager, six engineers, a data scientist, and me on design.\nAnd we worked a lot with Operations and Compliance. And we also had a user researcher until the vision was done.\nI'll start with how the strategy changed. Then I'll go through the main problems we worked on, one by one, and what I designed for each. Some of them overlap in time, so I'll tell you when each one happened.",
  "ask": []
 },
 {
  "title": "We lent our engineers for two months, and used the time to listen",
  "notes": "The reset started in a way I didn't expect.\nIn February 2025, another team at Monzo, Financial Health, needed engineers. They had a real business need, and Homeownership wasn't going the way we wanted.\nWe agreed they could borrow our engineers for two months. It wasn't the end of the product. Leadership confirmed the long-term commitment and we agreed a date for the engineers to come back.\nAnd we decided to use that time well. We ran a discovery phase, to understand why our work wasn't moving the numbers.\nOur user researcher interviewed two groups of people. I was in those interviews too, but the researcher was leading.\nOne group was people who had remortgaged with us, and the other was people who had started and then given up. And that phase is what changed the strategy.",
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
  "notes": "Customers told us four things.\nThe first one was, don't send me out. People expected to get their new deal inside Monzo, they didn't expect to end up on another website.\nYou can see it in the two personas we built from research. George did remortgage with us, but he was frustrated that we sent him to a partner's website.\nAnd Carla started and then gave up, because doing everything outside the app was too much.\nThe second thing was, use what you already know about me, don't ask me again. and its true that from sign up, onboarding or other products we do know a lot.\nThe third was, let me choose how I interact. Some people wanted a phone call, because it made them feel safer. With Better, everything started with a phone call, and they called customers when they could.\nBut Other people wanted to do it on their own, but knowing there was a human expert there if they needed one.\nAnd the fourth was, tell me what's happening. Because the waiting was the most stressful part for them.",
  "ask": [
   [
    "What was your part in the research?",
    "Our user researcher led the interviews: one-to-one, with people who had remortgaged with us and people who had dropped out. I worked with the researcher on the synthesis and turned the themes into the vision."
   ]
  ]
 },
 {
  "title": "The whole remortgage, without leaving Monzo",
  "notes": "I turned all of that into a design vision.\nOne journey, inside Monzo, that adapts to the person. The application comes into the app, already filled in with what we know. People choose if they want to talk to an adviser first, or see deals first after filling the form.\nLike that, the paperwork gets easier. And you always know what happens next. I planned the discovery phase for it, and I ran the vision workshop together with our researcher.\nWhat you see playing here is the vision, directly from my Figma frames. And on this slide I've attached an article about our vision work, written by our product director. You can read it later if you want.\nI should say, this was a direction for the team. We weren't promising to build everything.\nBut it made one thing very clear. To give customers the experience they wanted, we needed to own much more of the journey than a referral partner allowed us to.\nSo the vision became part of the argument for changing our partnership model. Later Monzo bought Habito, and that's what made it possible to build. I wasn't part of the acquisition decision.\nBut the team still goes back to this vision.",
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
  "notes": "I had a vision. But a vision doesn't help if the team can't build it.\nWe were behind on revenue, so in June 2025 I organised a session with the team to turn the vision into a plan.\nI ran that session, and this is the plan. At that point our partner was still Better.\nThree columns. Now, next and later. The now column is what we could start straight away.\nFirst, the onboarding to the broker. When we moved to Habito, that was the first thing we built.\nThen the progress tracker, closer to real time, so customers can follow their remortgage in the app, even if at the beginning they still have to go to the partner's website. For me it's the most valuable idea, because however much of the journey is inside the app, people can always see where they are and go to the right place.\nAnd pre-fill: using the data we already have, so people don't type things twice.\nThe next column is what needed more work. Opening the door to people without a connected mortgage. Our own application form. Estimated deals.\nAnd a first, simple version of the recommendation in Monzo, where you could see it, but not accept it yet.\nWe had also tested letting people choose. Talk to an adviser first, or see the deals first.\nPeople liked it, and it tested well with Better.\nBut when we moved to Habito, they couldn't support it yet, so we had to park it.\nSo I looked for a version we could do, and that became estimated deals.\nAnd the later column has the big pieces. Accepting the recommendation inside Monzo, and the adviser chat in the app.\nAnd document upload. The chat and the document upload got moved back again later in 2026, because we needed to grow faster, and the focus moved to first-time buyers. I'll come back to why.",
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
  "notes": "OK, reach. We knew where we wanted the product to go, but we couldn't build the vision overnight. We still had revenue targets with Better, and we depended on what our broker could do. So we worked on two tracks: reach more people now, and move more of the journey into Monzo, step by step. And while the partner change was being worked out, we also had to send people to Habito, to prove that it worked.\nFrom the second half of 2025, reach was the part we could control. Our hypothesis was simple. We weren't growing because we couldn't reach enough people.\nMost people who were about to remortgage hadn't connected their mortgage, so we couldn't see them. At the time, about 365,000 customers had connected one, and more than two million had one we couldn't see.\nHonestly, I always thought that asking people to connect first was a barrier. And here I could do something about it.\nWhat if we gave them a tool to see mortgage rates? From there they could connect. And we could capture their deal-end date, to reach them at the right moment, even if they never connected. And we didn't only launch it for people who hadn't connected: we launched it for connected customers too.\nWe didn't know their home, but we knew where they lived, from when they signed up to Monzo. So we used averages for their area, and they could change them to their own numbers.\nFor connected customers we went a step further. We had more details and their permission, so we could show them estimated deals. For me, this also kept the deals-first idea going.\nAll of these are estimates. For an accurate offer, people still need to complete the fact-find, the long application the broker needs, because Monzo doesn't know things like how many dependants you have.\nI also audited and designed the entry points across the app, so people could find rates and deals in the usual places. We added an entry point on the Monzo home screen. And I designed a notification that reached people when rates went down or up, only inside the app at first, because the rules on financial promotions for mortgages are very strict.\nIn the end, rates and deals became the main way people started a remortgage. One colleague even posted about the rate updates in our product feedback channel. It's behind this button.\nFor the result. Between late 2025 and spring 2026 we beat our referral goal by about 75 percent. That's around 7,500 referrals, when the goal was 4,300.\nSo the hypothesis was right. But keep one thing in mind for later. A referral is only the first step. It isn't a mortgage yet.",
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
  "title": "We designed the onboarding to Habito",
  "notes": "And then the partner changed. At the end of 2025 Monzo agreed to buy Habito, which is another mortgage broker, and from December our customers started going to Habito, and no longer to Better.\nWith Better we already had entry points and an onboarding. So the onboarding to Habito was similar, but with what we had learned, a lot of it from research.\nOf course, we had to adapt some things to how Habito worked operationally.\nLearning number one: people thought we were a comparison site. We led with 'compare remortgage deals from over 100 lenders', so when a broker started asking about their finances, it felt like a trick.\nSo on the first page I led with the help of a mortgage expert instead: 'Find a mortgage with free expert help'. The before and after are behind this button. It went live on the 1st of May 2026, with the Habito by Monzo brand, and Ops told us they were getting fewer questions about comparing deals.\nThen, the Habito account. It's another broker, so it's another click-out. Nobody wants another account, so I framed it as a benefit: we use your Monzo email, and you can check your progress here or on Habito's website.\nThen Habito needed to know if you were remortgaging with someone else, to add them as a second applicant. We were working on moving these questions into the application form, out of the onboarding, but that was going to take longer.\nAnd from there, we took you to Habito.\nDuring the onboarding there were several changes. At first we couldn't say Habito by Monzo publicly. Later we could, and we tested the copy quite a lot.\nI convinced the team to call it Habito by Monzo, in the journey, in the documents and in the emails, so customers know it's all one journey, linked to Monzo.\nA rebrand is still pending. But with all the product work, Habito by Monzo did the job.",
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
  "title": "First, I became the customer",
  "notes": "Before we built the tracker, I did the journey myself. I applied through Habito as a real customer, from the first tap in Monzo until I got the mortgage illustration.\nAnd I saved every screen, every email and every document in one page. That's the wall you see here. And doing that, I saw three things that no dashboard was showing us.\nHalfway through, you get a second account and a second brand. You have to fill in a long form before you get anything back.\nAnd the recommendation and the messages are on Habito's website and in emails branded Habito, they're not in Monzo. It gave the team one picture of the journey as it was, that everybody could look at.",
  "ask": [
   [
    "Why do it yourself, and not rely on research?",
    "Research tells you what people say. Going through it tells you what the journey asks of them, step by step. I needed both: the research interviews for the why, and my own run for the where."
   ]
  ]
 },
 {
  "title": "We shipped the simplest tracker first",
  "notes": "Next in the now column, the progress tracker. I want to show you how it evolved, because the trade-offs say more than the final screen.\nThe first iteration was the ideal one. Everything in one place: your steps, the deals you got, and your expert. It answered 'tell me what's happening' best, and you didn't have to leave the screen to know where you were.\nWhat didn't work: it depended on data we couldn't get. When we sat down with engineering, not every step Habito gave us could be tracked from our side.\nSo after a lot of meetings and back and forth, we made a second proposal, with only the states we could track accurately. One screen per state, with what's done and what's next.\nDocuments were a big step for customers, but we couldn't track them. I suggested showing them as a step to come, with no progress state. That way people still see what's ahead, and we never show a status we can't back up.\nWhat didn't work there: every state needed its own screen and its own copy, so it was slower to build.\nAnd we shipped the third one: Habito's own steps, with a link to their website at the exact step each customer was on. We chose it because it was the one we could launch on time. And we saved the ideal version for later.\nCustomers found it useful. But it didn't move the metrics.\nAnd that makes sense. A tracker without the rest of the journey doesn't do much more than reduce the stress of waiting. But it was a point in favour of our vision.\nOn the tech side, it was a hard project. Our engineers had to build a lot of bridges and APIs so the tracker was accurate.\nAt the beginning the data reached us two days late, while Habito was already showing it. The first version didn't even have parity.\nThe decision I'd make again: ship it small. It moved us closer to the vision, and it showed us early how hard the data part was.\nYou'll see the next version of the tracker in a few minutes.",
  "ask": []
 },
 {
  "title": "More referrals didn't mean more mortgages",
  "notes": "Back to the numbers. With Habito, the reach work was still paying off.\nReferrals were well above plan.\nBut more referrals didn't mean more mortgages. Remember that the money only arrives when a mortgage completes, and that can be months after the referral.\nSo the team looked at an earlier signal, something we could read in weeks. Accepted recommendations.\nA recommendation is the deal that the adviser proposes to you, and when you accept it, that's the first moment you really commit. And fewer people were getting to the end than before.\nMore or less six in a hundred went on to submit an application to a lender.\nWith Better it was nine or ten. To be fair, you can't compare them directly, because Better put a phone call first and Habito doesn't.\nBut the gap was big enough that we had to do something.\nAnd what surprised me was where people dropped. You'd expect it to be at the start, and it was after the recommendation.\nSo these were people who had filled in the whole questionnaire, which brokers call the fact-find, and talked to an adviser, and then they didn't go ahead.\nAt that point people should be really motivated, so it couldn't only be the quality of the traffic. And it wasn't a new problem.\nIt's the same thing we had with Better, people dropping out after we sent them. The difference is that this time we could see exactly where, and we could change it.\nSo for me this is the turning point of the whole story.\nUntil here, the question was how do we send more people. From here, the question is why people who already have a recommendation don't go ahead.\nSo I went to find out with the team.",
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
  "notes": "With our PM I co-led a workshop about the drop-off, and then I turned what we learned into this. It's called an opportunity solution tree.\nBasically you have one goal at the top, the causes under it, and the ideas under each cause. At the top we have one outcome, more recommendations accepted. Under that, the problem.\nOur hypothesis was that these customers really want to remortgage, but when they see the recommendation, they don't feel confident enough to act.\nUnder that, five areas. They're all on the slide, so I'll talk about three. First, relevance. The recommendation feels generic. There's no reasoning and no human behind it.\nSecond, the experience break. People get sent out of Monzo. One customer said it felt like being palmed off to another organisation.\nThird, momentum. People were ready, but our follow-up was slow and easy to miss.\nFor me, the most useful part is the last row. For each area I asked two questions. Is this a root cause, or does it just make things worse? And can Monzo fix it, or is it in Habito's hands?\nRelevance, for example, was mostly in Habito's hands, because they write the recommendation.\nAnd these were hypotheses. We hadn't proven any of them. Rates, eligibility or how fast the adviser replied could explain part of the drop too, and most of that was on Habito's side. The bets were how we tested the part we could change.\nThat showed us where design in Monzo could make the biggest difference. The four bets I'll show you next come straight from here.",
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
  "notes": "Before the designs, one slide about how I was thinking. I treated every decision as a bet.\nSo for each one I wrote down three things.\nWhat we believed, and where that belief came from. How we would know it was working. And what would make me change direction.\nI'll give you two examples. For the recommendation, if people read every reason and they still don't accept, then the problem is the deal, and how we explain it doesn't matter. And the deal is Habito's side.\nAnd for the application, if more people finish the form but accepted recommendations don't move, then the form wasn't the real problem.\nAnd the four bets have two goals. The first two, how we explain the product and the application form, help more people get to a recommendation. The other two, the recommendation and the adviser, help more of them accept it. Accepted recommendations stay the business number for all four.",
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
  "title": "Move the application into Monzo, pre-filled",
  "notes": "The second bet is also about getting people to a recommendation. The application form, which was the most fragmented part of the whole journey. It was outside Monzo, on the broker's website, and it was long. Around 200 questions.\nWith Better, in 2025, almost half of the people dropped out there. That number came from Better, by the way, because we couldn't see that part of the journey ourselves.\nAnd with Habito it was still on a separate website.\nI designed the application inside Monzo, and there are two decisions I care about.\nThe first is pre-fill. You don't type everything, you just confirm what Monzo already knows about you. That's the answer to 'use what you already know about me'. Pre-fill has been on for everyone since May.\nThe second is saving your progress, so you can come back later, because nobody has all their mortgage details ready in one go. That one is in the next version.\nAnd we measure it step by step, so the team can see exactly where people stop. On the right you can see two versions.\nThe first one is a simple form, and it went live at the end of September. We tested it with half of our customers. People on the team tell me the first signal is strong.\nAbout 40 percent more people are finishing the form and getting to a recommendation, compared with when they started in Monzo and had to go to Habito's website.\nThe data isn't mature yet, so for me it's still an early signal. And the next version breaks the form into five sections, tells you how long it takes, and keeps your progress.",
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
  "title": "A push the moment the recommendation is ready",
  "notes": "The next two bets are about the moment people decide. And the first thing we did there was the quickest one. If you remember the tree, people were ready, but our follow-up was slow.\nAt that point the only reminder was an email from Habito.\nThe first experiment was very simple. Send a push from Monzo on day zero, the moment the recommendation is ready, which is when people care the most, and again on day three. The design question was where that push should take you.\nI explored two options. Option A was a short screen in the middle. It tells you your recommendation is ready, it shows that Habito is regulated and that it's free, and then it takes you there.\nTwo taps and a whole screen to build trust, but we had to build it. Option B opened the progress tracker, which already existed, with the button on the current step.\nThree taps and more distraction, but nothing new to build. On paper I preferred A, because it was the cleaner test.\nBut the tracker already existed, so with B we could test much faster, and that's what launched in May. And I think it was the right decision, because we needed to learn fast.\nWe measured it on accepted recommendations, and they went up. I don't remember the exact number, so I'm not going to give you one. And I think I know why it worked.\nThe tracker was already live, and it was working, but it wasn't easy to find. You had to know where to look: your mortgage home screen, or one specific entry point.\nThe push took people straight to it, so more people got there, and more of them accepted.",
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
  "notes": "The next step was to bring the recommendation itself into Monzo. I designed a first version where you could see your recommendation inside Monzo, but you couldn't act on it there.\nYou can see it playing here. This one was interesting. Habito could only offer one recommended deal, which makes sense, because that's their advice. But customers wanted to see more than one.\nSo we showed the other deals as secondary options, under the main one. We proved it by showing several deals in Monzo, and Habito ran its own test as well. Conversion was better, around 10 percent.\nTo accept it, you tapped a button and went to Habito's website. It was a quick way to see if just seeing it in Monzo changed behaviour. And it did, but only a little.\nI don't have an exact figure, so I won't give you one. Positive, but not enough.\nI asked myself what was missing. And I think this is the question customers were asking themselves. Do I trust this recommendation enough to go ahead?\nI took that screen and I scored it against the things you need to feel confident.\nDo I understand it, does it feel like it's for me, can I see alternatives, the trade-offs, the real cost, and am I ready to act. And none of them was fully covered.\nMy conclusion was that people could see the deal, but they couldn't really decide.",
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
  "title": "Four rounds before the version you're about to see",
  "notes": "So once we saw that the view-only version wasn't enough, I started redesigning it. At the top of my file I wrote the goal.\nHelp people decide with confidence when they're ready, or wait on purpose, without dropping off. It took me four rounds in about four months, and every round fixed something the previous one was missing.\nThe first version was in June 2026. It's presented through the adviser, it says 'Will's top pick for you'. When you see the name of a real person, you trust it more.\nAnd the alternatives are next to the top pick, so it doesn't feel like we're pushing you.\nThen I reviewed my own design against the research and I wrote down what was missing. You couldn't contact the adviser from that screen, and there was no honest sense of urgency.\nThe second round was low fidelity. It showed the total cost first, before the monthly rate, and it compared staying with your lender and switching, in pounds. We weren't converting enough by pushing people to switch, and research said people wanted to compare and feel safe. And staying with your lender is always less work.\nThe third one went to a design crit on the 17th of September. It was a hub with tools, for example to stress-test the deal. And the feedback was that it showed too much at the same time. A crit is feedback from designers, so it doesn't prove customers understand it better. That's what the live data has to show.\nSo I hid more things behind a tap. And that became version 2.1, which is the one I'm going to show you now.",
  "ask": [
   [
    "What did the crit change?",
    "How much was on the first screen. Before, reasons, tools and timeline all competed. After, one recommendation and its reasons, and the rest behind a tap."
   ]
  ]
 },
 {
  "title": "The recommendation, inside Monzo · live since 1 Nov 2026",
  "notes": "So this is version 2.1, made from my Figma frames. It starts in the tracker, your recommendation is ready.\nThen you get one screen with the deal and what you pay every month. 'Why this is your best deal' gives you the adviser's reasons.\n'How this deal was calculated' shows the real cost over the whole deal, so you see more than the monthly payment. And you can see the deals we ruled out.\nBefore you commit you can see every detail, and you can accept, reject, or chat with your adviser, which opens Habito's chat. And the last screen tells you what happens next.\nThe numbers and some of the copy are placeholders. And this version went live on the 1st of November. I designed it, but it was built after I'd left, so I didn't get to see it live.",
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
  "title": "When people aren’t ready, or the lender withdraws the rate",
  "notes": "For me the part I'm most proud of is what happens when things don't go to plan. There are two cases.\nThe first one is when I'm interested, but I'm not ready.\nToday you can stop your application at any time, but if you come back, you have to start again from zero. And if the screen only has accept and reject, you lose all of those people.\nSo I designed a third button, 'I need more time'. You choose when you want a reminder, and the recommendation waits for you in the tracker.\nThe second case is when the lender withdraws the rate, and that happens all the time.\nWe don't show an error. The adviser talks first and says 'I'm already looking at alternatives for you', and the other options are right there. Both of these were designed, but they were never built.\nThe principle I used was 'decision support, not decision pressure'. The idea is to look after the relationship with people who aren't ready yet, without forcing them to say yes or no.",
  "ask": [
   [
    "Are these two paths live?",
    "No. Both were designed, but they were never built. Today you can stop your application at any time, but if you come back, you start again from zero. That's the gap the first one closes."
   ],
   [
    "Doesn't 'I need more time' just lower conversion?",
    "It lowers same-day conversion and protects total conversion. A mortgage is decided over weeks. A reminder the customer chose is a way back. A rejected offer isn't."
   ]
  ]
 },
 {
  "title": "The tracker shows who has to act next",
  "notes": "Now, the progress tracker. It answers the fourth thing customers told us, tell me what's happening.\nA remortgage has around ten stages, and the next step can be yours, the adviser's or the lender's. To design it I worked with Habito, to understand the steps they track and make them understandable for our customers.\nAnd then our engineers worked with Habito's engineers to build the bridges between the two systems.\nI designed one card that changes during the journey. It's orange when it's your turn, and green when someone else is working on it. The push from the experiment brings you here.\nAnd this is also where the adviser chat was going to live, which is the next bet. A simpler tracker has been live since the first journey. This version went live this November, when I had already left.\nOn the left you can see two screens from the live app, and on the right, my design. People I worked with tell me the early signals are very positive, but it's too soon to have results.",
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
  "title": "The adviser chat: designed, then paused",
  "notes": "OK, the adviser. This bet is about relevance, and about choice.\nRemember the adviser-first test we had to park? The vision said people should choose how they talk to an adviser.\nBut in reality Habito's advisers worked by chat, in a separate tool, and at that time the chat opened in Habito, outside Monzo. We had two options.\nWait about nine months for Monzo's own chat, or put Habito's chat inside the app in about a month. I proposed the fast one, because every month we waited we were losing people at the decision.\nThe extra cost was small, about 43 thousand dollars a year, and the product review estimated it would pay for itself in about a month.\nBut having a second chat inside Monzo is risky. People could ask their adviser about a blocked card, or ask Monzo support about their mortgage.\nSo I designed three guardrails. Gate, which means we only show it during an active remortgage.\nSignpost, so the first time you open the chat there's a short intro that shows who you're talking to, a real person and a mortgage expert, and when they'll reply.\nAnd recover, so if you end up in the wrong place, you get to the right one in one tap.\nWe also agreed a kill switch before starting, so a limit that tells you in advance when to stop. Above 2 percent of chats in the wrong place we investigate, and above 5 percent we roll back.\nThe plan was a small pilot first, and then a proper 50/50 test.\nAnd in the end we paused it. People wanted it, and we could build it.\nAfter the analysis, the team decided this integration wasn't the best use of our resources this year, and put them into other problems, like first-time buyers.\nFirst-time buyers had been our second goal since the second half of 2025.\nIn 2026 it became the first. That was a business decision. We needed to show that buying Habito had been a good decision, and as you've seen, we were sometimes missing our revenue goals.\nAnd first-time buyers are a big opportunity for Monzo, because most Monzo customers are first-time buyers.\nSo for now the chat stays in Habito. The design is in the appendix, if you want to see it.",
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
  ]
 },
 {
  "title": "What if designers could check their screens against the rules before Compliance?",
  "notes": "There's one more thing I want to show you. One of the slowest parts of the project was approval. Every screen about rates, deals or recommendations went back and forth with Compliance, many times.\nAnd I asked myself, what if designers could check their screens against the rules before they even get to Compliance?\nI built a checker myself with Cursor, which is an AI coding tool, using the documents with the rules. And we used it inside Monzo.\nA team pastes its copy or drops in Figma screens, and the tool flags the lines that could break a rule and suggests a fix. If something required is missing, like the APRC, the full yearly cost of the mortgage, it tells you. It doesn't make it up.\nIt doesn't approve anything, Compliance still does that, but the review can focus on the difficult decisions. Loans, Overdrafts and Wealth asked to use it too, so I ran a lunch and learn and set up a Slack channel for feedback.\nYou can see it running on the right. It's a copy I rebuilt for this case study, with no Monzo data in it.\nAbout AI in general: it didn't decide the direction of this work, the research did. It helped me with speed and with risk.\nSo I use AI in four ways. One, to experiment, like this checker, or a custom AI assistant I built with our product context.\nTwo, built into how the team works, checking our UI copy before it gets to Compliance.\nThree, for my own work. Drafting copy and scenarios, trying quick UI variations, and analysing support conversations. That's how I found out people were disconnecting their mortgage because the data was wrong.\nAnd four, to share what I learn. The lunch and learn, the feedback channel, and a prompt library for the team.",
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
  "notes": "So, what came out of all this? At the start I told you that we beat the referral goal, but mortgages didn't grow at the same pace. Referrals ended about 75 percent above our goal.\nBut a referral is only the first step, and I prefer to tell you that than to claim an uplift I can't prove.\nSo the number that matters in this story is accepted recommendations. And that one went up.\nFirst with the push on day zero, because it took people straight to the tracker.\nThen the view-only recommendation moved it a little more.\nNow, the four things customers asked for at the beginning. I'm not going to read every row. Most of it is live.\nEstimated deals, pre-fill, the push when your recommendation is ready, the application inside Monzo since the end of September, and since this November, the new tracker and the new recommendation, where you can accept it inside Monzo.\nThe 'I need more time' option is designed. And the adviser chat is paused for this year.\nIn 2026, most of what I designed for Habito shipped late in the year, so the results are only starting to arrive.\nWith the application inside Monzo, I'm told that about 40 percent more people are finishing the form and getting to a recommendation. It's early, so I wouldn't call it a result yet.\nAnd the new tracker, which is the design I expect to have the biggest impact, has only just launched.\nI'm told the first signals are very positive, but it's too soon.\nAnd the whole remortgage isn't in the app yet. Document upload and the adviser chat were moved back, because the focus moved to first-time buyers.\nThat launched on the 11th of November, and I did the vision and the design of that first release.",
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
  "notes": "Looking back, there are four things I take with me. One, more referrals aren't more mortgages. They grew the top of the funnel, but they didn't fix where people dropped. That's why we moved to the application and the recommendation.\nTwo, when the systems of two companies meet, things like routing, consent and who you're talking to are design decisions too. Three, shipping fast is fine, but you agree the guardrails and the rollback before you start.\nAnd four, name the problem first. One word, compare or broker, changed what people expected from the whole journey.",
  "ask": []
 },
 {
  "title": "Why this matters for Benefits",
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
  "notes": "The audit pointed at one place to start: the Focus View. It's the home screen for your mortgage, the room every other journey opens into. And it had one design for everyone.\nSo my proposal was a screen that adapts: what you see depends on where you are in your mortgage. Watch it change.\nFirst visit, not connected: one clear action. Returning after looking at rates. Just connected: we celebrate first, we don't dump data.\nDeal far away: calm, equity and timeline. Then, as the deal end gets closer, the tone shifts from calm to urgent, and remortgaging becomes the main action. While you're remortgaging, the tracker is the hero.\nAnd there's a state for when the data fails, and one for variable-rate mortgages, where there's no deal end at all.\nThe first principle is the important one: state-driven, not feature-driven. It's a proposal. The decision was to validate it before rebuilding.",
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
  "notes": "The last piece of this chapter is an edge case that turned out to be a foundation. Our tools were built for one person with one mortgage.\nBut people have two mortgages on one home, or a couple shares one, and then the numbers got confusing: one deal-end date for two products, or two partners seeing a different value for the same house.\nFor our UX days I explored four ways to show it: a property overview, stacked sections, a switcher, and combining both into one deal, which could even save money. The useful part was the insight underneath.\nThe data already added up at the level of the property. The screen didn't.\nSo the answer to every case was the same: show the property first, then its mortgages. And I'd start with the cheapest fix: the case where both mortgages were already on screen and simply rendered badly.",
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
  "notes": "One more piece before I step back, because it shows where this could go. Early in 2026 I worked on a concept for Monzo's Open Finance vision.\nToday we read your mortgage from your credit file, which updates slowly and has little detail. With Open Banking, you connect your lender directly, with consent you control: you choose the accounts, and you renew every ninety days.\nAnd with better data, Monzo can give you advice before you ask.\n'You'll reach the next loan-to-value band before your deal ends.' 'You'd be better off overpaying than saving.' Or the honest one: 'switching now would cost you 2,900 pounds in early repayment charges.' This was shared with the FCA as part of Monzo's Open Finance work, and it landed really well.",
  "ask": [
   [
    "Is this live?",
    "No, it's a concept. Its job was to show the regulator and the business what better mortgage data would make possible."
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
