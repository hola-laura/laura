const slides=[
 {
  "title": "Remortgaging at Monzo, 2025–26",
  "notes": "Hello, I'm Laura. Thanks for having me, and for taking the time to learn about me and this project.\nI'm going to present a remortgaging case study from Monzo, where I was a Senior Product Designer. It covers 2025 and 2026.\nI worked at Monzo for over five years, and for the last two I focused on their Homeownership product.\nThe team was one PM, an engineering manager, six engineers, a data scientist and a user researcher, and we worked with Ops, Compliance and a broker called Habito.\nMy role covered setting the vision, turning that vision into the product, UX and UI, experiments, and AI tooling.\nLet's start.",
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
  "notes": "We already had connected customers, and we knew when their deal was ending, because we asked in onboarding. So remortgaging was the safest place to start making money.\nIn summer 2024, we partnered with a mortgage broker, Better.co.uk. The broker finds the deal and does the paperwork. When the mortgage completes, the lender pays the broker, the customer pays nothing, and Monzo gets a share.\nEvery customer we send to a partner is a referral. I designed this first journey. It was a click-out: people finished on Better's website.\nIt proved there was a business: by the end of 2025, we estimate that more than a thousand customers had completed a new mortgage through Monzo's remortgage journey. But our target was £1 million a year by September 2024. We measured it as an annualised run-rate: one month's revenue, times twelve. That meant around 300 applications a month. We expected about 80 percent to complete their mortgage, so about 240 completions a month, at roughly £350 each. When September came, we had about 70 applications a month. We missed the target by a long way. So the team lowered it to about £630,000 a year by March 2025.\nAnd because we didn't own the rest of the journey, we could only try to grow the top of the funnel.",
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
    "Experiments on their side of the journey: letting people schedule the call with the mortgage expert, a path without a call, and choosing between deals first or mortgage expert first. We could propose changes to their site, but we couldn't ship them ourselves."
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
  "notes": "This is the part I want to focus on in this case study: 2025 and 2026, when we went through two big changes. First we reset the strategy, and then there was an acquisition.\nIn 2025 I led the vision, which took a couple of months. I'll tell you about it in a second.\nThen came Habito, a mortgage broker that has been part of the Monzo group since April 2026. We, the team at Monzo, knew about it a bit earlier. From late 2025, I designed how its journey came into our app. The second screen you see is from that.\nLet's start with how the strategy changed.",
  "ask": []
 },
 {
  "title": "We lent our engineers for two months, and used the time to listen",
  "notes": "The reset started in a way I didn't expect.\nEarly in 2025, our growth was slowing. We were launching lots of experiments, but they weren't moving the numbers. So in February we decided to pause engineering on Homeownership for two months.\nFrom March, our engineers helped two other teams, Financial Health and Payments. And we used that time to run a discovery phase, to understand what wasn't working.\nWe interviewed two groups of people. One group was people who had remortgaged with us, and the other was people who had started and given up.\nOur product director wrote about this on the Monzo blog, and the article is linked on this slide. Anyway, that phase is what changed the strategy.",
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
  "notes": "Customers told us four things.\nFirst: don't send me out. People expected to get their new deal inside Monzo. They didn't expect to end up on another website.\nSecond: use what you already know about me, don't ask me again. And it's true: from sign-up, onboarding and the other products people use, we already know a lot, so we should ask them for less.\nThird: let me choose how I interact. With our partner Better, everything started with a phone call, and they called customers on their own schedule, whenever they could.\nSome people appreciated the phone call, because it made them feel safer. But other people preferred less intrusive ways, like chat or email, at a time they chose.\nAnd fourth: tell me what's happening, because the waiting was the most stressful part for them. The full customer journey usually took four to six months, from first exploring options to completion. The formal application was only one part of that journey, and could take weeks. It was a long time. Customers sometimes didn't know what was happening, and they had no place to come back to and check.",
  "ask": [
   [
    "What was your part in the research?",
    "Our user researcher led the interviews: one-to-one, with people who had remortgaged with us and people who had dropped out. I worked with the researcher on the synthesis and turned the themes into the vision."
   ]
  ]
 },
 {
  "title": "The whole remortgage, without leaving Monzo",
  "notes": "I turned all of that into a design vision: the whole remortgage, inside Monzo.\nThe application comes into the app. You see the benefits of remortgaging with us, and the deals you could get, because we already have some data about you.\nThen you choose how to start. Talk to a mortgage expert first, for a more personal experience. Or see the recommendations first, and talk to a mortgage expert after.\nTo get a mortgage you have to fill in a fact-find, a very thorough affordability assessment. Here it comes pre-filled with what Monzo already knows. You can review it, but most of the form is already done.\nYou see who your mortgage expert is, and you choose how to talk to them. And when your recommendation arrives, it comes with a note from your mortgage expert explaining their advice.\nYou can follow your progress in the app, and see if there's anything you need to do.\nAnd you upload all your documents from the app. Something I find really interesting in the vision: we proposed the first B2C website experience, so people could also upload documents from a laptop. Research showed that many of these documents live on a computer, not on a phone. It stayed as a proposal in the vision: we never built it.\nAnd at the end, you get your new mortgage, you connect it to Monzo, and the homeownership journey starts again, until it's time to remortgage.\nWe presented the vision to leadership in May 2025, after about two months of work.\nI should say, a vision is a direction for the team. We weren't promising to build everything. But it made one thing very clear: to give customers the experience they wanted, we needed to own much more of the journey than our referral partner allowed us to.\nWe also changed how we measured success. Instead of stopping at the referral, we started measuring conversion further down the funnel.\nAt that point, the business was also talking about bringing in more partners. We didn't know Monzo was going to buy Habito. But from the research and the early vision work, we knew we needed to offer other ways to communicate, and more flexibility, closer to how Monzo works.\nSo the vision became part of the argument for changing our partnership model. Later Monzo bought Habito, and that's what made it possible to build. I wasn't part of the acquisition decision, but the team still goes back to this vision.",
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
  "title": "I turned the vision into a plan the team could ship",
  "notes": "A vision doesn't help if the team can't build it. So, with the support of our engineering manager, I ran a session with the team to turn it into a plan. At that point, our partner was still Better.\nThe plan had to fit the team's goals for April to September 2025. We had missed both earlier targets, so the team set a new one for this period. The first goal was revenue: from about £278,000 a year, based on January's completions, to £990,000 a year by the end of September, both as annualised run-rates. With the same assumptions, that meant about 240 completions and close to 300 applications a month. We didn't reach that one either, although by October we were at about £916,000. The second was getting more customers who were about to remortgage to use Homeownership. We also had to look after the platform's technical health, and assess moving from Better to Habito.\nNow was what we could start straight away. Opening the door to people without a connected mortgage, because we were behind on revenue and needed more people. The progress tracker, which for me is the most valuable idea: while we were still sending people out, they could always see where they were and what came next. And pre-fill, so people don't type things twice.\nNext needed more work: revisiting the onboarding, which was the first thing we built with Habito, our own application form, estimated deals, and a first recommendation in Monzo that you could see but not accept.\nWith Better, we also tested letting people choose: talk to a mortgage expert first, or see the deals first. It tested very well, but Habito couldn't support it yet, so we parked it, and kept estimated deals as the simpler way to see deals first.\nLater had the big pieces: accepting the recommendation in Monzo, the chat with your mortgage expert, and document upload. In 2026, Monzo's own chat and the document upload moved back again, because the focus moved to first-time buyers. As a step in between, we launched Habito's chat inside the app. I'll come back to that.",
  "ask": [
   [
    "What happened to the expert-first test?",
    "It tested well with Better. We parked it for Habito, because they couldn't support it operationally: their mortgage experts work by chat. We kept estimated deals as the simpler way to see deals first, without talking to anyone."
   ],
   [
    "Did you work on the value proposition?",
    "Yes. In June 2025 I ran a value-proposition workshop with Product Marketing. It gave us two kinds of customers, planners, who compare deals themselves, and delegators, who want someone to guide them. And it picked pre-fill and the tracker as the things that would make us different. Both are live today."
   ],
   [
    "How do you decide what to build?",
    "I look at three things. Do people want it, can we build it with what we have, and does it work for the business. The expert-first test is a good example: people wanted it, but it wasn't feasible with Habito, so we kept the simpler version, estimated deals. Our own chat in Monzo was the opposite: people wanted it and we could build it, but that year it wasn't the best use of the team."
   ]
  ]
 },
 {
  "title": "Reach people before they're ready to remortgage",
  "notes": "OK, reach.\nWe couldn't build the vision overnight. We still had revenue targets, and we depended on what our broker could do. So we worked on two tracks: reach more people now, and move the journey into Monzo, step by step.\nReach was the part we could control. Our hypothesis was simple: we weren't growing because we couldn't reach enough people. Most people about to remortgage hadn't connected their mortgage, so we couldn't see them. About 365,000 customers had connected one. More than two million had one we couldn't see.\nI always thought that asking people to connect first was a barrier. So what if we gave everyone a tool to see mortgage rates?\nFrom there, they could connect. And we could get their deal end, to reach them at the right moment, even if they never connected. That's the first screen.\nOn the second screen, we filled in the filters, like the property value and the mortgage balance, with averages for their area, based on their Monzo address. So they could see rates for a home like theirs without typing anything. And of course, they could change them.\nWe were already thinking about indicative rates while we worked on the vision. By April 2025, the version I designed was live for connected customers, because it was easier: we already had their data. It had the rate chart and rate alerts, so people got a notification when rates changed. Later, we made it work for people without a connected mortgage too. That was the full product.\nIn our May 2025 review, rate alerts were linked to about 44 percent of recent referrals. That was an internal, approximate read, not proof that the alerts caused all of them.\nThe last screen is estimated deals, for connected customers. These are deals from real lenders, with the monthly repayment and the fees. They're estimated because they come before you apply.\nI also designed entry points across the app, so people could find all this more easily.\nAnd a few more things I designed and the team built. Some people skipped the deal-end question in onboarding. So I designed a header in Homeownership that asks them to finish setting up. That took us to 91% of people giving us their deal end, up from 88%.\nAnd at onboarding, if your deal ended in the next six months, we took you straight to remortgaging. You can see examples behind the button.\nThe impact: by early 2026, total referrals across all our partners were around 7,500 a month, against a target of 4,300 a month. That's about 75 percent above plan.\nAnd new mortgage connections went from about 200 to about 1,000 a day.\nThe results supported our reach hypothesis. They also showed that referrals were only the first step: we still needed to improve what happened after someone reached the broker.\nKeep that in mind for later: a referral isn't a mortgage yet. We only got paid when the customer accepted the recommendation and completed their new mortgage.",
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
  "notes": "And then we started with Habito.\nAt the end of 2025 Monzo agreed to buy Habito, which is another mortgage broker. From December we sent customers to both partners, Better and Habito, and in October 2026 we stopped sending them to Better.\nWith Better we already had entry points and an onboarding designed. We didn't have time to redesign and test a whole onboarding, so I translated Better's onboarding to Habito. I applied what we had learned, and balanced the trade-offs that came with Habito.\nOf course, we had to adapt some things to how Habito worked operationally.\nLearning number one: people thought we were a comparison site. We led with 'compare remortgage deals from over 100 lenders', so when a broker started asking about their finances, it felt like a trick.\nSo I reframed it, and redesigned the first screen to lead with the help of a mortgage expert: 'Find a mortgage with free expert help'. It went live in May 2026, and Ops told us they were getting fewer questions about comparing deals. I don't have an exact number for you, though.\nWe also tweaked the wording to mention the acquisition. At first we couldn't say Habito by Monzo publicly, so we just had the Habito logo, without 'by Monzo'. Later we could, and to be honest, we tested the copy quite a lot.\nLearning number two: people didn't want to leave Monzo. We couldn't avoid sending them to Habito, or to another partner, yet. You had to create a Habito account from the Monzo app, so to make that feel less negative, I proposed framing the account as a benefit: you can check your progress here, in the app, or on Habito's website, wherever suits you.\nThen another operational trade-off: Habito needed to know if you were remortgaging with someone else, to add them as a second applicant. We were working on moving those questions into the application form, out of the onboarding, but that was going to take a bit longer.\nAnd from there, we took you to Habito.",
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
  "notes": "This one was tricky. Habito had no design team and no design files. And there was no staging environment we could use.\nSo I applied for a mortgage through Habito myself, as a real customer, and mapped the whole journey. Every screen, email and document could be followed in my design file.\nThat map helped us design the onboarding, the tracker and everything after it. It showed us what we had to plan for, like the documents that had to go with each recommendation. And it showed gaps, like recommendation notes that didn't say much.\nIt also gave the whole team one picture of the experience that everyone could follow.\nFor me, it's simple: I'll do whatever it takes to understand the experience, so we know exactly where the customer is.",
  "ask": [
   [
    "Why do it yourself, and not rely on research?",
    "Research tells you what people say. Going through it tells you what the journey asks of them, step by step. I needed both: the research interviews for the why, and my own run for the where."
   ]
  ]
 },
 {
  "title": "We shipped the simplest tracker first",
  "notes": "Now, the first progress tracker. We actually designed it for Better, and launched it at the same time as the Habito onboarding, so it worked for both partners. I want to show you how it evolved, because the trade-offs say more than the final screen.\nRemember how it worked: after the onboarding, customers went straight to the broker's site and filled in the fact-find there. Only once that fact-find was done did we show this tracker in Monzo.\nThe first iteration was, to me, the ideal one at that point. Everything in one place: your steps, the deals you got, and your expert. It answered 'tell me what's happening' best, and you didn't have to leave the screen to know where you were.\nIn this version, you only saw the steps ahead of you. To see the ones you'd already finished, you tapped 'Show all'.\nBut it didn't work for us, because at that point it depended on data we couldn't get. When we sat down with engineering, not every step the broker gave us could be tracked on our side, and there were bits of data we just couldn't get yet.\nSo with what I learned from engineering, I made a second proposal. We already knew we couldn't show the recommendations or the chat in the app yet, so I took them out and kept only the steps. I proposed leading with the name of the step in the title, with an illustration to go with it, so you always knew where you were. But from an engineering point of view, that meant a new screen for every state, and it would have made the build much longer.\nSo we shipped the third one: the broker's own steps, with one highlight card at the top. The highlight card was much easier to build, and we could make its title and illustration change with each step. It also had a button to take you back to the broker you were working with, at the step you were on. We chose this version because we could launch it on time, and we saved the ideal version for later.\nOne more limit: in this first version, we couldn't say 'Barclays approved your mortgage'. We only knew that a lender had approved it, so we could show the step, but not name the lender.\nWe heard from customers that it was useful, but we didn't see a measurable change in how many people reached or accepted a recommendation. Looking back, I can see why.\nFirst, it depended on data from outside Monzo. If Habito or the lender didn't send us reliable updates, the tracker could go out of date and lose people's trust.\nSecond, it didn't say who had to act next: you, the broker or the lender. 'The lender approved your mortgage' tells you what happened, but you don't know if you need to do something or just wait.\nThird, it ended in a handoff. 'Go to Habito' took people out of Monzo just when they needed to carry on with the broker.\nAnd it didn't help when something went wrong. If a document was missing, or the lender asked for something new, a progress line wasn't enough. People needed to understand the problem and how to fix it.\nIt was also hard to find. It only showed up in Monzo after people had filled in the fact-find on the broker's site. By then they were used to going there, and they had no clear reason to come back to Monzo to check.\nOn its own, a tracker mostly reduces the stress of waiting. But it was a point in favour of our vision, and it shaped the next tracker you'll see later.\nOn the tech side, it was a very hard project. Our engineers had to build a lot of bridges and APIs so the tracker was accurate. At launch, statuses reached Monzo two days late, for both Better and Habito, and we had a few complaints about that. We never fixed it with Better. With Habito, we kept working on the connection, and after a couple of months the tracker in Monzo matched their statuses.\nThis is a decision I'd make again: ship small. It moved us closer to the vision, and it showed us early how hard the data part was.\nYou'll see the next version of the tracker in a few minutes.",
  "ask": []
 },
 {
  "title": "Move the application into Monzo, pre-filled",
  "notes": "In parallel, we also moved the form into Monzo. It launched at the end of September 2026. It was the most fragmented part of the whole journey: it was on the broker's website, and it was long. Around 200 questions.\nWith Better, in 2025, almost half of the people we sent to them never finished the form.\nI designed the application inside Monzo, and there are two decisions I care about.\nThe first is pre-fill. You don't type everything, you just confirm what Monzo already knows about you. That's the answer to 'use what you already know about me'. On the partner's side, pre-fill has been on for everyone since May 2026. Our own form came in September.\nThe second is saving your progress, so you can come back later, because nobody has all their mortgage details ready in one go. We couldn't do that in the first version.\nHabito's own form could save a draft, because they owned the form and the backend. To do it in Monzo, we needed more pieces: a safe place to keep a half-finished application, a way to pick it up when you came back, and an agreed way for Monzo and Habito to share where you were. With sensitive financial data, the interface alone couldn't solve that. So saving progress comes in the next version.\nAnd we measure it step by step, so the team can see exactly where people stop. On the right you can see two versions.\nThe first one is a simple form, and it went live at the end of September as a 50/50 test: half of our customers got the form in Monzo, and the other half kept the existing journey on Habito's website. We kept it simple on purpose. The main question was: if we bring the same form into Monzo, will more people finish it? If we changed where the form lived, its structure and its content all at once, we wouldn't know what made the difference.\nIt also let us check, with less risk, that the journey and the connection with Habito worked. This is personal financial information, so we wanted that to be solid before adding more.\nIn the first read, about 40 percent of the people who started the form in Monzo finished it, compared with about 29 percent on the existing journey. That's roughly a 40 percent relative lift, or about 11 percentage points. The sample was still small, so I treated it as an early directional signal. But it gave us a reason to keep going.\nThe next version is designed, on the right. The idea is to go from 'fill in this form' to 'check what we already know, and finish the rest in parts'. It tells you what you'll need and how long it takes, so there are fewer surprises. It shows what we've already answered for you, so you type less. And it breaks the form into five sections that keep your progress, so a long task feels manageable.\nWe expect it to help more people finish, but we still need to test it. And if a pre-filled answer is wrong, people lose trust, so getting the data right matters.",
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
  "title": "Referrals beat the plan, the later stages didn’t",
  "notes": "Back to the numbers. In early 2026, this is where we were. This chart only shows the Habito funnel, not the total across partners I showed you before, against its own 2026 targets. Each bar is the percentage of that stage's target, not a conversion rate.\nHabito referrals, the people we sent to Habito, were at 153 percent of target.\nReaching a recommendation, meaning they filled in the form and got one, was at 72 percent of its target. Higher, but still behind.\nAnd accepted recommendations, going ahead with one lender and moving on to the next steps, were at only 44 percent of their target.\nOverall, only 7 percent of referrals made it to an accepted recommendation. And that's when people should be most motivated. They'd filled in the whole form and talked to a mortgage expert.\nWe only make money when the mortgage completes. A completed mortgage usually came months after the referral, and in the longest cases up to six months later. So we chose accepted recommendations as an earlier signal.\nSo the question changed. It wasn't 'how do we send more people?' anymore. It was 'why don't people with a recommendation go ahead?' So I went to find out, with the team.",
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
    "In March 2026, of the people who got a recommendation, about 10 percent submitted an application to a lender, against a target of 23 percent. And the goal for the next half was to take accepted recommendations from about 400 to 1,000 a month. We didn't reach it."
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
  "notes": "With our PM, I co-led a workshop about the drop-off. Then I turned what we learned into this: an opportunity solution tree.\nIt's simple. One goal at the top: more people accept their recommendation. Under it, the problem. And under that, the possible causes.\nOur hypothesis was that these people really wanted to remortgage, but when they saw the recommendation, they didn't feel confident enough to say yes.\nWe identified five possible causes. First, relevance: the recommendation felt generic. There was a mortgage expert and a reason behind every recommendation, but customers couldn't see them clearly in the experience.\nSecond, leaving Monzo: people got sent out of the app. One customer said it felt like being passed on to another company.\nThird, timing: some people were still looking around when the recommendation arrived. Fourth, momentum: people were ready, but our follow-up was slow and easy to miss. In one review, 54 percent of people didn't reply after they got their recommendation.\nAnd friction: the form was long, and hard to come back to. We already knew that was a problem we had to solve, and we were actively working on it. That's the form you saw a moment ago.\nFor each cause, I asked one question: can Monzo fix this, or is it up to Habito? Relevance, for example, was split. Habito decided the recommendation and its reasons. We could improve how those reasons, and the mortgage expert, showed up in Monzo.\nAnd these were only hypotheses. Rates, eligibility, or how fast the mortgage expert replied could also explain part of the drop, and most of that was on Habito's side.\nThis showed us where design in Monzo could make the biggest difference. What I'll show you next comes from here.",
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
  "title": "A push the moment the recommendation is ready",
  "notes": "Now, the moment people decide. The next three slides show one thing: we knew where we wanted to get, but we had to split the work into phases. People could already see their recommendation in Monzo, but only if they came back. The follow-up was the easiest gap to fix. When the recommendation was ready, we relied on an email from Habito. Monzo didn't send anything.\nSo I designed a push from Monzo. We sent it on day zero, the moment the recommendation is ready, because that's when people care the most. And again on day three.\nAnything that goes outside the app has to be worded very carefully. So the push couldn't mention a rate or a lender. That was the trade-off to stay compliant.\nThen, where should the push take you? I designed two options. Option A was a new screen that set expectations: your recommendation is ready, Habito is regulated, and it's free. Option B took you to the progress tracker, where you could already see your recommendation, and from there to Habito.\nWe went with B. Remember, people found it hard to come back to the tracker, and this gave them a reason to. And it was a screen we already had, so we could test fast. It launched in May 2026.\nThere was a third option: sending people straight to Habito. I didn't want that. The push comes from Monzo, so landing on another company's website would make the journey feel even more broken. It can even feel unsafe, because people expect a Monzo notification to open Monzo.\nAccepted recommendations went up in our early read, but I don't have the exact uplift. So I'd treat it as a positive early signal, not proof that the push alone caused the change.",
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
  "title": "Recommendations in the app, built in steps",
  "notes": "The recommendation in the app was a project of its own. It was built in parallel with everything else, and it needed new APIs and new connections with Habito.\nWe knew where we wanted to get. The question customers were asking themselves was: do I trust this recommendation enough to go ahead? From research, the same insights behind the opportunity tree, I turned that into six things people need. Understand it. Feel it's for them. See alternatives. See the trade-offs, like two years against five, or staying with your lender. See the real cost. And know what to do next.\nThe first view-only release came earlier, as a small part of the bigger Habito integration, and engineering set its scope. Monzo could show the data Habito already sent us: the lender, the monthly payment, the rate, the length, the fees and the APRC. The advice, and accepting it, stayed with Habito.\nHabito recommends one deal, which makes sense, because that's their advice. But customers wanted to compare, so we showed the other deals as secondary options, under the main recommendation. In an early test, we compared it with a version with only one deal. The version with several deals did better on accepted recommendations, meaning people who went ahead with one lender. It was around a 10 percent relative lift. I'd treat that as a directional signal, not conclusive proof. It helped, but we still didn't reach our goal: from about 400 to 1,000 accepted recommendations a month. So more visibility on its own wasn't enough. Customers needed more.\nI scored that screen against the six needs. People could see the deal, but they couldn't really decide. It felt generic, because the mortgage expert and their reasons were there in Habito, but you couldn't see them in Monzo. Habito wrote the advice. Our part was how it showed up in Monzo.\nIn parallel, I was exploring the full version. In the summer, a low-fidelity version showed the total cost first, and staying with your lender against switching, in pounds. Then a hub with tools, for example to stress-test the deal, which went to a design crit in September. We even tried the mortgage expert's reasons as a voice note, but it was too complex, so we parked it. In both, we were testing if different information changed people's decision.\nDuring October, we finalised the new recommendation. The total cost is the real cost of the deal, but in testing that big number scared people away. Monzo had seen the same in 2019, in a remortgage test with the broker Mojo. So the monthly payment went back on top.\nAnd Habito wasn't comfortable showing several deals with the same weight. They had analysed hundreds of deals for you, and the others weren't equal. So after some conversations we agreed: one main recommendation on top, with all its numbers and a note from the mortgage expert explaining why they chose it. Customers could still open 'Deals we ruled out' to see the alternatives.\nIt also took time for other reasons: tech constraints, giving Habito time to improve how they explained the recommendation, and agreeing with Compliance what had to be on screen and what could go in the documents we send by email. Let me show you the new recommendation.",
  "ask": [
   [
    "Why a view-only version?",
    "It was the quickest way to see if just showing the recommendation in Monzo changed behaviour. It did, but only a little. Positive, but not enough, so I started the redesign."
   ],
   [
    "Who were you really competing with?",
    "Mostly the customer's current lender. Staying with the same lender takes a few clicks, with no mortgage expert and no paperwork. Our research showed people used us to sense-check and then some finished elsewhere. So the recommendation had to earn the switch: the reasons, the real cost and what was ruled out."
   ],
   [
    "How big was the effect of the view-only version?",
    "The overall effect was small, and I don't have a figure for it I'd stand behind. The number I do have is the test inside it: showing several deals instead of one gave around a 10 percent relative lift in accepted recommendations. A directional signal, not proof."
   ]
  ]
 },
 {
  "title": "The recommendation, inside Monzo",
  "notes": "So this is the new recommendation. I'll tap through it.\nFirst, you see the recommended deal and what you'd pay each month. 'Why this is your best deal' gives you the mortgage expert's reasons.\n'How this deal was calculated' shows the real cost over the whole deal, so you see more than the monthly payment. And one step away, you can see the deals we ruled out.\nBefore you commit you can see every detail, and you can accept, reject, or chat with your mortgage expert, which opens Habito's chat. And the last screen tells you what happens next.\nThis version went live in November 2026. I designed these experiences while I was at Monzo. The team implemented and launched some of them after I left.\nThe early feedback from the team is that it looks great. The live data will show if more people accept. To know if they understood it, I'd ask people to explain in their own words why that deal was chosen, and what it means for them.",
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
  "title": "The tracker shows who has to act next",
  "notes": "Now, the progress tracker. It answers 'tell me what's happening' better than the previous version.\nA remortgage has around ten stages, and the next step can be yours, the mortgage expert's or the lender's. To design it I worked with Habito, to understand the steps they track and make them clear for our customers.\nAnd then our engineers worked with Habito's engineers to build the bridges between the two systems.\nI designed one card that changes during the journey. It's orange when it's your turn, and green when someone else is working on it.\nIn one of our crits, a designer from the pensions team said they were exploring a progress tracker too. I worked with them to shape a shared pattern that could work for both products.\nWe also redesigned how people get to the tracker. Before, you went to Homeownership in Monzo, and from there to the tracker. Now, if you're remortgaging, the tracker is your first entry point, because that's your main focus. And from there you can still go back to your Homeownership dashboard.\nWe also added the bell. Every time you move to a new step, you get a notification, so you always know which step you're in. And if you don't want them, you can turn them off by tapping the bell.\nAnd this is also where the chat with your mortgage expert was going to live, which comes next. The first, simpler tracker went live with the Habito onboarding. This version went live in November 2026, after I'd left.\nPeople I worked with tell me the early signals are very positive, but it's too soon to have results.",
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
  "title": "The chat with your mortgage expert: a first step in the app",
  "notes": "Now, how we brought the mortgage expert more into the experience. The vision said people should choose how they talk to a mortgage expert.\nBut in reality, Habito's mortgage experts worked by chat, in a separate tool. And at that time, the chat opened in Habito, outside Monzo.\nOur vision was to have the chat inside Monzo. That's the full design, on the right. But we had two options. Wait about nine months for Monzo's own chat. Or bring Intercom, the chat tool Habito used, into our app as a window. We went with Intercom first, because it was faster.\nBut a second chat inside Monzo is risky. People could ask their mortgage expert Monzo questions, like how to block their card. Or they could ask Monzo support about their mortgage.\nSo I also designed guardrails: safe answers we could give people when they ask in the wrong place. You can see them on the right.\nWe also agreed a kill switch before we started. It's a limit that tells you in advance when to stop. If more than 2 percent of chats ended up in the wrong place, we'd investigate. Above 5 percent, we'd roll back. These were limits we agreed before launch, not results.\nSo, as a step in between, we launched Habito's Intercom chat inside the app in November 2026. I designed it. You can see it on the left.\nBefore we moved to the full chat in Monzo, first-time buyers became the team's first goal. That was a business decision. We needed to show that buying Habito had been a good decision, and we know that most Monzo customers are working towards buying their first home.\nSo Monzo's own chat was pushed back, and today the chat in the app is still that step in between. From what I hear, the team's main focus has been first-time buyers, and that's already live in the app.",
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
  "title": "The vision, almost there",
  "notes": "What's next? As you can see, the vision is almost there. There's still a bit more to go.\nThe team wants the whole experience to feel fully integrated within Monzo, so Habito doesn't feel like a separate company. That's what they're working towards, and you can see it in the new onboarding, which presents it as free advice through Monzo.\nThe team is also working towards bringing the chat into Monzo. That will take longer, but here you can see how it could work in the Monzo app.\nAnd everything to do with documents is still missing. Uploading them from your phone is designed. And the end of the journey: connecting your new mortgage again, so we can help you when it ends.\nThe team is targeting February 2027 for this next phase, and I'm very excited to keep following this work.\nYou can try the full prototype behind this button.",
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
  "notes": "There's one more thing I want to show you. One of the slowest parts of the project was approval. Every screen about rates, deals or recommendations went back and forth with Compliance, many times.\nSo I asked myself: what if designers could check their screens against the rules before they get to Compliance?\nI built a checker myself, with Cursor, an AI coding tool. It works from the documents that set out the rules. And we used it inside Monzo.\nYou paste your copy or add your Figma screens. The tool marks the lines that could break a rule, and suggests a fix. If something required is missing, like the APRC, an annualised measure of the mortgage's cost over its lifetime, fees included, it tells you. It doesn't make it up.\nIt doesn't approve anything. Compliance still does that. But the review can focus on the hard decisions. Loans, Overdrafts and Wealth asked to use it too. So I ran a lunch and learn, and set up a Slack channel for feedback.\nYou can see it running on the right. It's a copy I rebuilt for this case study, with no Monzo data in it.\nYou asked how I use AI: where it helps, and where it isn't worth it. I use it in four ways.\nOne, to support my work. Like this checker. I'm not a compliance expert, and remembering every rule and checking my screens against it takes a lot of effort. So I built a tool that does it for me.\nTwo, to check how I communicate. My typos, my English, and whether something I say is wrong. It also helped me build this presentation, with animations I can't explore in Figma.\nThree, for quick variations and summaries. Copy and UI variations, summaries of research, or of a Slack channel full of customer feedback.\nAnd four, to share what I learn. For example, I built a tool with all our research insights, so anyone on the team can ask it questions.\nAnd there are things I don't use it for. AI tends to tell you you're right, so I don't let it make decisions for me. I don't use it to decide the strategy, to replace research, or to find solutions before we understand the problem.\nSo I use it to take mechanical work off my hands. The judgment and the accountability stay with me. AI helps me explore faster and wider, and every decision stays mine.",
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
  "title": "What I learned",
  "notes": "Looking back, I take four things with me.\nOne: look past the first number. Referrals beat the plan, but people dropped after the recommendation. So we focused on the recommendation, and kept moving the form into Monzo.\nTwo: say what it is. People thought we were a comparison site. Leading with the mortgage expert changed what they expected.\nThree: know the goal, and ship in steps. The vision didn't change, but we got there in pieces: the view-only screen, the push, then the new recommendation.\nAnd four: work with what your partner has. Habito had no design team, so I went through the journey as a customer. And we shipped first steps, like their chat inside our app.",
  "ask": []
 },
 {
  "title": "What I’d bring to Benefits",
  "notes": "And this is why I think it's relevant for Benefits. From what I understand, Benefits works across countries, integrations and partners.\nSo, providers whose systems you don't own. People who need to know what happens next. Rules that change in every country. And choices that matter for years, like a mortgage at Monzo, or health cover and a pension at Deel.\nThat's very close to what I did in remortgaging. I made a service split between Monzo and a broker feel like one, and made sure people always knew which step they were on. And before I design anything, I like to check which step we need to move.",
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
  "title": "Chat with your mortgage expert without leaving Monzo",
  "notes": "This is how it was designed. The mortgage expert has a fixed place in the tracker, with a name and a face.\nThe first time you open the chat you get a short intro. Who Annie is, that this chat is only for your remortgage, and when she replies. You only see it that first time.\nIt's there so you feel confident that you're talking to a real person, and to an expert.\nAfter that, the chat opens directly from the tracker. If you ask about something else, your balance for example, it sends you to Monzo support in one tap.\nAnd when the mortgage expert sends your recommendation, it arrives in the chat and it opens in the app, so you don't go to another website. This was designed, but it was never built.",
  "ask": [
   [
    "What if the mortgage expert still sends the old link to Habito's site?",
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
