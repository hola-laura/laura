const slides=[
 {
  "title": "Remortgaging and first-time buyers at Monzo, 2025–26",
  "notes": "I'm Laura Sampedro. This is a case study of remortgaging at Monzo, where I was a Senior Product Designer. It covers 2025 and 2026, and ends with what came next: first-time buyers.\nI worked at Monzo for over five years, and for the last two I focused on their Homeownership product. I was the only product designer on the squad.\nThe team was one PM, an engineering manager, six engineers, a data scientist and a user researcher, and we worked with Ops, Compliance and a broker called Habito.\nMy role covered setting the vision, turning that vision into the product, UX and UI, experiments, and AI tooling.\nHow to read this: my notes sit next to every slide. They say what I decided, what the team did, and what is live today. The prototypes on the slides are interactive, and several slides link to the Figma file.",
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
  "notes": "We already had connected customers, and we knew when their deal was ending, because we asked in onboarding. I designed that question in 2024: the share of people who told us when their deal ends went from 38 to 88 percent. So remortgaging was the safest place to start making money.\nIn summer 2024, we partnered with a mortgage broker, Better.co.uk. The broker finds the deal and does the paperwork. When the mortgage completes, the lender pays the broker, the customer pays nothing, and Monzo gets a share.\nEvery customer we send to a partner is a referral. I designed this first journey. It was a click-out: people finished on Better's website.\nIt proved there was a business: by January 2025, we were making about £278,000 a year. But our target was £1 million a year by September 2024. We measured it as an annualised run-rate: one month's revenue, times twelve. That meant around 300 applications a month. We expected about 80 percent to complete their mortgage, so about 240 completions a month, at roughly £350 each. When September came, we had about 70 applications a month. We missed the target by a long way. So the team lowered it to about £630,000 a year by March 2025.\nAnd because we didn't own the rest of the journey, we could only try to grow the top of the funnel.",
  "ask": [
   [
    "How does Monzo make money from this?",
    "The broker is paid by the lender when a mortgage completes, and the customer pays nothing. With Better, Monzo earned a share for each customer it referred who completed. So revenue depends on completed mortgages, not on referrals."
   ],
   [
    "Where do the Better figures come from?",
    "From Better. They told us, for example, how many people dropped out at the application form. What we didn't have was our own data, step by step, or a way to change their journey."
   ]
  ]
 },
 {
  "title": "In 2025 and 2026, I led design for remortgaging through a strategy reset and an acquisition",
  "notes": "This case study focuses on 2025 and 2026, when we went through two big changes. First we reset the strategy, and then there was an acquisition.\nIn 2025 I led the vision, which took a couple of months.\nThen came Habito, a mortgage broker that has been part of the Monzo group since April 2026. We, the team at Monzo, knew about it a bit earlier. From late 2025, I designed how its journey came into our app. The second screen you see is from that.",
  "ask": []
 },
 {
  "title": "We lent our engineers for two months, and used the time to listen",
  "notes": "The reset started in a way I didn't expect.\nEarly in 2025, our growth was slowing. We were launching lots of experiments, but they weren't moving the numbers. So in February we decided to pause engineering on Homeownership for two months.\nFrom March, our engineers helped two other teams, Financial Health and Payments. And we used that time to run a discovery phase, to understand what wasn't working.\nWe interviewed two groups of people. One group was people who had remortgaged with us, and the other was people who had started and given up.\nOur product director wrote about this on the Monzo blog, and the article is linked on this slide. That phase is what changed the strategy.",
  "ask": [
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
  "notes": "I turned all of that into a design vision: the whole remortgage, inside Monzo.\nThe application comes into the app. You see the benefits of remortgaging with us, and the deals you could get, because we already have some data about you.\nThen you choose how to start. Talk to a mortgage expert first, for a more personal experience. Or see the recommendations first, and talk to a mortgage expert after.\nTo get a mortgage you have to fill in a fact-find, a very thorough affordability assessment. Here it comes pre-filled with what Monzo already knows. You can review it, but most of the form is already done.\nYou see who your mortgage expert is, and you choose how to talk to them. And when your recommendation arrives, it comes with a note from your mortgage expert explaining their advice.\nYou can follow your progress in the app, and see if there's anything you need to do.\nAnd you upload all your documents from the app. Something I find really interesting in the vision: we proposed the first B2C website experience, so people could also upload documents from a laptop. Research showed that many of these documents live on a computer, not on a phone. It stayed as a proposal in the vision: we never built it.\nAnd at the end, you get your new mortgage, you connect it to Monzo, and the homeownership journey starts again, until it's time to remortgage.\nWe presented the vision to leadership in May 2025, after about two months of work.\nA vision is a direction for the team. We weren't promising to build everything. But it made one thing very clear: to give customers the experience they wanted, we needed to own much more of the journey than our referral partner allowed us to.\nWe also changed how we measured success. Instead of stopping at the referral, we started measuring conversion further down the funnel.\nAt that point, the business was also talking about bringing in more partners. We didn't know Monzo was going to buy Habito. But from the research and the early vision work, we knew we needed to offer other ways to communicate, and more flexibility, closer to how Monzo works.\nSo the vision became part of the argument for changing our partnership model. Later Monzo bought Habito, and that's what made it possible to build. I wasn't part of the acquisition decision, but the team still goes back to this vision.",
  "ask": [
   [
    "Did the vision make Monzo buy Habito?",
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
  "notes": "A vision doesn't help if the team can't build it. So, with the support of our engineering manager, I ran a session with the team to turn it into a plan. At that point, our partner was still Better.\nThe plan had to fit the team's goals for April to December 2025. We had missed both earlier targets, so the team set a new one for this period. The first goal was revenue: from about £278,000 a year, based on January's completions, to £990,000 a year, both as annualised run-rates. With the same assumptions, that meant about 240 completions and close to 300 applications a month. We didn't reach that one either. By December we were at about £558,000, around 56 percent of the goal. The second was getting more customers who were about to remortgage to use Homeownership. We also had to look after the platform's technical health, and assess moving from Better to Habito.\nNow was what we could start straight away. Opening the door to people without a connected mortgage, because we were behind on revenue and needed more people. The progress tracker, which for me is the most valuable idea: while we were still sending people out, they could always see where they were and what came next. And pre-fill, so people don't type things twice.\nNext needed more work: revisiting the onboarding, which was the first thing we built with Habito, our own application form, estimated deals, and a first recommendation in Monzo that you could see but not accept.\nWith Better, we also tested letting people choose: talk to a mortgage expert first, or see the deals first. It tested very well, but Habito couldn't support it yet, so we parked it, and kept estimated deals as the simpler way to see deals first.\nLater had the big pieces: accepting the recommendation in Monzo, the chat with your mortgage expert, and document upload. In 2026, Monzo's own chat and the document upload moved back again, because the focus moved to first-time buyers. As a step in between, we launched Habito's chat inside the app. More on that later.",
  "ask": [
   [
    "How do you decide what to build?",
    "I look at three things. Do people want it, can we build it with what we have, and does it work for the business. The expert-first test is a good example: people wanted it, but it wasn't feasible with Habito, so we kept the simpler version, estimated deals. Our own chat in Monzo was the opposite: people wanted it and we could build it, but that year it wasn't the best use of the team."
   ]
  ]
 },
 {
  "title": "Reach people before they're ready to remortgage",
  "notes": "We couldn't build the vision overnight. We still had revenue targets, and we depended on what our broker could do. So we worked on two tracks: reach more people now, and move the journey into Monzo, step by step.\nReach was the part we could control. Our hypothesis was simple: we weren't growing because we couldn't reach enough people. Most people about to remortgage hadn't connected their mortgage, so we couldn't see them. About 365,000 customers had connected one. More than two million had one we couldn't see.\nI always thought that asking people to connect first was a barrier. So what if we gave everyone a tool to see mortgage rates?\nFrom there, they could connect. And we could get their deal end, to reach them at the right moment, even if they never connected. That's the first screen.\nOn the second screen, we filled in the filters, like the property value and the mortgage balance, with averages for their area, based on their Monzo address. So they could see rates for a home like theirs without typing anything. And of course, they could change them.\nWe were already thinking about indicative rates while we worked on the vision. By April 2025, the version I designed was live for connected customers, because it was easier: we already had their data. It had the rate chart and rate alerts, so people got a notification when rates changed. Later, we made it work for people without a connected mortgage too. That was the full product.\nIn our May 2025 review, rate alerts were linked to about 44 percent of recent referrals. That was an internal, approximate read, not proof that the alerts caused all of them.\nThe last screen is estimated deals, for connected customers. These are deals from real lenders, with the monthly repayment and the fees. They're estimated because they come before you apply.\nI also designed entry points across the app, so people could find all this more easily.\nAnd a few more things I designed and the team built. Some people skipped the deal-end question in onboarding. So I designed a header in Homeownership that asks them to finish setting up. That took us to 91% of people giving us their deal end, up from 88%.\nAnd at onboarding, if your deal ended in the next six months, we took you straight to remortgaging. You can see examples behind the button.\nThe impact: by early 2026, total referrals across all our partners were around 7,500 a month, against a target of 4,300 a month. That's about 75 percent above plan.\nAnd new mortgage connections went from about 200 to about 1,000 a day.\nThe results supported our reach hypothesis. They also showed that referrals were only the first step: we still needed to improve what happened after someone reached the broker.\nOne thing to keep in mind: a referral isn't a mortgage yet. We only got paid when the customer accepted the recommendation and completed their new mortgage.",
  "ask": [
   [
    "Is the 75 percent your result?",
    "The hypotheses and the design of each experiment were mine. Engineering built them, and the data told us what was working and what wasn't."
   ]
  ]
 },
 {
  "title": "I designed the onboarding to Habito",
  "notes": "And then we started with Habito.\nAt the end of 2025 Monzo agreed to buy Habito, which is another mortgage broker. From December we sent customers to both partners, Better and Habito, and in October 2026 we stopped sending them to Better.\nWith Better we already had entry points and an onboarding designed. We didn't have time to redesign and test a whole onboarding, so I translated Better's onboarding to Habito. I applied what we had learned, and balanced the trade-offs that came with Habito.\nOf course, we had to adapt some things to how Habito worked operationally.\nLearning number one: people thought we were a comparison site. We led with 'compare remortgage deals from over 100 lenders', so when a broker started asking about their finances, it felt like a trick.\nSo I reframed it, and redesigned the first screen to lead with the help of a mortgage expert: 'Find a mortgage with free expert help'. It went live in May 2026, and Ops told us they were getting fewer questions about comparing deals. I don't have an exact number.\nWe also tweaked the wording to mention the acquisition. At first we couldn't say Habito by Monzo publicly, so we just had the Habito logo, without 'by Monzo'. Later we could, and we tested the copy quite a lot.\nLearning number two: people didn't want to leave Monzo. We couldn't avoid sending them to Habito, or to another partner, yet. You had to create a Habito account from the Monzo app, so to make that feel less negative, I proposed framing the account as a benefit: you can check your progress here, in the app, or on Habito's website, wherever suits you.\nThen another operational trade-off: Habito needed to know if you were remortgaging with someone else, to add them as a second applicant. We were working on moving those questions into the application form, out of the onboarding, but that was going to take a bit longer.\nAnd from there, we took you to Habito.",
  "ask": [
   [
    "Who did the research in 2026, without a researcher?",
    "I did. I worked from the answers to our in-house surveys and from customer support conversations."
   ],
   [
    "Did the reframe move conversion?",
    "Not significantly yet, the numbers are still early. The signal so far comes from Ops: fewer questions about comparing deals, which was the confusion we wanted to fix. It also launched together with the Habito by Monzo brand, so I couldn't separate the two effects cleanly anyway."
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
  "notes": "Now, the first progress tracker. We actually designed it for Better, and launched it at the same time as the Habito onboarding, so it worked for both partners. This slide shows how it evolved, because the trade-offs say more than the final screen.\nRemember how it worked: after the onboarding, customers went straight to the broker's site and filled in the fact-find there. Only once that fact-find was done did we show this tracker in Monzo.\nThe first iteration was, to me, the ideal one at that point. Everything in one place: your steps, the deals you got, and your expert. It answered 'tell me what's happening' best, and you didn't have to leave the screen to know where you were.\nIn this version, you only saw the steps ahead of you. To see the ones you'd already finished, you tapped 'Show all'.\nBut it didn't work for us, because at that point it depended on data we couldn't get. When we sat down with engineering, not every step the broker gave us could be tracked on our side, and there were bits of data we just couldn't get yet.\nSo with what I learned from engineering, I made a second proposal. We already knew we couldn't show the recommendations or the chat in the app yet, so I took them out and kept only the steps. I proposed leading with the name of the step in the title, with an illustration to go with it, so you always knew where you were. But from an engineering point of view, that meant a new screen for every state, and it would have made the build much longer.\nSo we shipped the third one: the broker's own steps, with one highlight card at the top. The highlight card was much easier to build, and we could make its title and illustration change with each step. It also had a button to take you back to the broker you were working with, at the step you were on. We chose this version because we could launch it on time, and we saved the ideal version for later.\nOne more limit: in this first version, we couldn't say 'Barclays approved your mortgage'. We only knew that a lender had approved it, so we could show the step, but not name the lender.\nWe heard from customers that it was useful, but we didn't see a measurable change in how many people reached or accepted a recommendation. Looking back, I can see why.\nFirst, it depended on data from outside Monzo. If Habito or the lender didn't send us reliable updates, the tracker could go out of date and lose people's trust.\nSecond, it didn't say who had to act next: you, the broker or the lender. 'The lender approved your mortgage' tells you what happened, but you don't know if you need to do something or just wait.\nThird, it ended in a handoff. 'Go to Habito' took people out of Monzo just when they needed to carry on with the broker.\nAnd it didn't help when something went wrong. If a document was missing, or the lender asked for something new, a progress line wasn't enough. People needed to understand the problem and how to fix it.\nIt was also hard to find. It only showed up in Monzo after people had filled in the fact-find on the broker's site. By then they were used to going there, and they had no clear reason to come back to Monzo to check.\nOn its own, a tracker mostly reduces the stress of waiting. But it was a point in favour of our vision, and it shaped the next tracker you'll see later.\nOn the tech side, it was a very hard project. Our engineers had to build a lot of bridges and APIs so the tracker was accurate. At launch, statuses reached Monzo two days late, for both Better and Habito, and we had a few complaints about that. We never fixed it with Better. With Habito, we kept working on the connection, and after a couple of months the tracker in Monzo matched their statuses.\nThis is a decision I'd make again: ship small. It moved us closer to the vision, and it showed us early how hard the data part was.\nThe next version of the tracker comes a few slides later.",
  "ask": []
 },
 {
  "title": "Move the application into Monzo",
  "notes": "In parallel, we moved the application form into Monzo. It was the most fragmented part of the whole journey: it lived on the broker's website, and it was long. Around 200 questions. With Better, in 2025, almost half of the people we sent never finished it.\nI designed the application inside Monzo. Version 1 is a simple form, and it went live at the end of September 2026 as a 50/50 test: half of our customers got the form in Monzo, and the other half kept the existing journey on Habito's website.\nWe kept it simple on purpose. The main question was: if we bring the same form into Monzo, will more people finish it? If we changed where the form lived, its structure and its content all at once, we wouldn't know what made the difference. It also let us check, with less risk, that the journey and the connection with Habito worked. This is personal financial information, so we wanted that to be solid before adding more.\nIn the first read, about 40 percent of the people who started the form in Monzo finished it, compared with about 29 percent on the existing journey. That's roughly a 40 percent relative lift, or about 11 percentage points. The sample was still small, so I treated it as an early directional signal. But it gave us a reason to keep going.\nThen, saving your progress, because nobody has all their mortgage details ready in one go. We couldn't do that in the first version. Habito's own form could save a draft, because they owned the form and the backend. To do it in Monzo, we needed more pieces: a safe place to keep a half-finished application, a way to pick it up when you came back, and an agreed way for Monzo and Habito to share where you were. With sensitive financial data, the interface alone couldn't solve that.\nVersion 2, in sections, saves your progress, and it's been live since November 2026. You can Save and Close at any point and pick up where you left off. In both versions, if you stop halfway, Monzo sends you a notification to continue your application.\nAnd pre-fill: you confirm what Monzo already knows, instead of typing it again. That's the answer to 'use what you already know about me'. It went live in May 2026, but it had a lot of errors, so the team rolled it back, and it isn't back yet.\nOn the right is where the form is going: it tells you what you'll need and how long it takes, and it shows what we've already answered for you. That part is designed, and it isn't live.",
  "ask": [
   [
    "Is the application live?",
    "Yes. The first version went live at the end of September 2026, as a 50/50 test. The second version, in sections with your progress saved, has been live since November, and both send a notification if you stop halfway. Pre-fill with what Monzo knows went live in May 2026, but we rolled it back after a lot of errors, and it isn't back yet."
   ]
  ]
 },
 {
  "title": "Referrals beat the plan, the later stages didn’t",
  "notes": "Back to the numbers. In early 2026, this is where we were. This chart only shows the Habito funnel, not the total across partners I showed you before, against its own 2026 targets. Each bar is the percentage of that stage's target, not a conversion rate.\nHabito referrals, the people we sent to Habito, were at 153 percent of target.\nReaching a recommendation, meaning they filled in the form and got one, was at 72 percent of its target. Higher, but still behind.\nAnd accepted recommendations, going ahead with one lender and moving on to the next steps, were at only 44 percent of their target.\nAnd that's when people should be most motivated. They'd filled in the whole form and talked to a mortgage expert. Overall, only 7 percent of referrals made it to an accepted recommendation.\nWe only make money when the mortgage completes. A completed mortgage usually came months after the referral, and in the longest cases up to six months later. So we chose accepted recommendations as an earlier signal.\nSo the question changed. It wasn't 'how do we send more people?' anymore. It was 'why don't people with a recommendation go ahead?' So I went to find out, with the team.",
  "ask": [
   [
    "Why accepted recommendations and not revenue?",
    "Revenue arrives when the mortgage completes, months later. Accepting a recommendation is the earliest point where a customer commits, so we could learn in weeks. The risk is optimising the proxy, which is why the chart also follows submissions to the lender."
   ],
   [
    "153 percent of target here, and 75 percent above plan earlier?",
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
  "notes": "With our PM, I co-led a workshop about the drop-off. Then I turned what we learned into this: an opportunity solution tree.\nIt's simple. One goal at the top: more people accept their recommendation. Under it, the problem. And under that, the possible causes.\nOur hypothesis was that these people really wanted to remortgage, but when they saw the recommendation, they didn't feel confident enough to say yes.\nWe identified five possible causes. First, relevance: the recommendation felt generic. There was a mortgage expert and a reason behind every recommendation, but customers couldn't see them clearly in the experience.\nSecond, leaving Monzo: people got sent out of the app. One customer said it felt like being passed on to another company.\nThird, timing: some people were still looking around when the recommendation arrived. Fourth, momentum: people were ready, but our follow-up was slow and easy to miss. In one review, 54 percent of people didn't reply after they got their recommendation.\nAnd friction: the form was long, and hard to come back to. We already knew that was a problem we had to solve, and we were actively working on it. That's the form you saw a moment ago.\nFor each cause, I asked one question: can Monzo fix this, or is it up to Habito? Relevance, for example, was split. Habito decided the recommendation and its reasons. We could improve how those reasons, and the mortgage expert, showed up in Monzo.\nAnd these were only hypotheses. Rates, eligibility, or how fast the mortgage expert replied could also explain part of the drop, and most of that was on Habito's side.\nThis showed us where design in Monzo could make the biggest difference. The next slides come from here.",
  "ask": [
   [
    "What did you decide not to do?",
    "Three things. The quality of the advice itself, because that's Habito's side. Joint applications, because Habito's operations allow one account per application. And letting people lock a rate six months ahead, which stayed as an exploration. Saying no to those let us focus on the moment of decision."
   ],
   [
    "Why a tree and not a list of ideas?",
    "Because the team had many ideas and one metric. The tree made every idea answer to a cause, and showed which causes we could actually fix from Monzo."
   ]
  ]
 },
 {
  "title": "A push the moment the recommendation is ready",
  "notes": "Now, the moment people decide. The next three slides show one thing: we knew where we wanted to get, but we had to split the work into phases. Until we had the recommendation in the app, we sent people to Habito to see it. The follow-up was the easiest gap to fix. When the recommendation was ready, we relied on an email from Habito. Monzo didn't send anything.\nSo I designed a push from Monzo. We sent it on day zero, the moment the recommendation is ready, because that's when people care the most. And again on day three.\nAnything that goes outside the app has to be worded very carefully. So the push couldn't mention a rate or a lender. That was the trade-off to stay compliant.\nThen, where should the push take you? I designed two options. Option A was a new screen that set expectations: your recommendation is ready, Habito is regulated, and it's free. Option B took you to the progress tracker, and from there to Habito.\nWe went with B. Remember, people found it hard to come back to the tracker, and this gave them a reason to. And it was a screen we already had, so we could test fast. It launched in May 2026.\nThere was a third option: sending people straight to Habito. I didn't want that. The push comes from Monzo, so landing on another company's website would make the journey feel even more broken. It can even feel unsafe, because people expect a Monzo notification to open Monzo.\nAccepted recommendations went up in our early read, but I don't have the exact uplift. So I'd treat it as a positive early signal, not proof that the push alone caused the change.",
  "ask": [
   [
    "What did you measure?",
    "How many people opened the push on day zero against day three, how many clicked through to Habito, how many dropped before getting there, how long it took them, and in the end, accepted recommendations."
   ]
  ]
 },
 {
  "title": "Recommendations in the app, built in steps",
  "notes": "The recommendation in the app was a project of its own. It was built in parallel with everything else, and it needed new APIs and new connections with Habito.\nWe knew where we wanted to get. The question customers were asking themselves was: do I trust this recommendation enough to go ahead? From research, the same insights behind the opportunity tree, I turned that into six things people need. Understand it. Feel it's for them. See alternatives. See the trade-offs, like two years against five, or staying with your lender. See the real cost. And know what to do next.\nThe first view-only release came in June 2026, after the push, as a small part of the bigger Habito integration, and engineering set its scope. Monzo could show the data Habito already sent us: the lender, the monthly payment, the rate, the length, the fees and the APRC. The advice, and accepting it, stayed with Habito.\nHabito recommends one deal, which makes sense, because that's their advice. But customers wanted to compare, so we showed the other deals as secondary options, under the main recommendation. In an early test, we compared it with a version with only one deal. The version with several deals did better on accepted recommendations, meaning people who went ahead with one lender. It was around a 10 percent relative lift. I'd treat that as a directional signal, not conclusive proof. It helped, but we still didn't reach our goal: from about 400 to 1,000 accepted recommendations a month. So more visibility on its own wasn't enough. Customers needed more.\nI scored that screen against the six needs. People could see the deal, but they couldn't really decide. It felt generic, because the mortgage expert and their reasons were there in Habito, but you couldn't see them in Monzo. Habito wrote the advice. Our part was how it showed up in Monzo.\nIn parallel, I was exploring the full version. In the summer, a low-fidelity version showed the total cost first, and staying with your lender against switching, in pounds. Then a hub with tools, for example to stress-test the deal, which went to a design crit in September. We even tried the mortgage expert's reasons as a voice note, but it was too complex, so we parked it. In both, we were testing if different information changed people's decision.\nDuring October, we finalised the new recommendation. The total cost is the real cost of the deal, but in testing that big number scared people away. Monzo had seen the same in 2019, in a remortgage test with the broker Mojo. So the monthly payment went back on top.\nAnd Habito wasn't comfortable showing several deals with the same weight. They had analysed hundreds of deals for you, and the others weren't equal. So after some conversations we agreed: one main recommendation on top, with all its numbers and a note from the mortgage expert explaining why they chose it. Customers could still open 'Deals we ruled out' to see the alternatives.\nIt also took time for other reasons: tech constraints, giving Habito time to improve how they explained the recommendation, and agreeing with Compliance what had to be on screen and what could go in the documents we send by email. The next slide shows the new recommendation.",
  "ask": [
   [
    "Why a view-only version?",
    "It was the quickest way to see if just showing the recommendation in Monzo changed behaviour. It did, but only a little. Positive, but not enough, so I started the redesign."
   ],
   [
    "Who were you really competing with?",
    "Mostly the customer's current lender. Staying with the same lender takes a few clicks, with no mortgage expert and no paperwork. Our research showed people used us to sense-check and then some finished elsewhere. So the recommendation had to earn the switch: the reasons, the real cost and what was ruled out."
   ]
  ]
 },
 {
  "title": "The recommendation, inside Monzo",
  "notes": "This is the new recommendation. The prototype on the slide is interactive.\nFirst, you see the recommended deal and what you'd pay each month. The details are one tap away, in sheets that open over the screen, like the rate, the fees and the APRC. You read one and you're back where you were. I defined how they open and close, so you never lose your place.\n'Why this is your best deal' gives you the mortgage expert's reasons. 'How this deal was calculated' shows the real cost over the whole deal, so you see more than the monthly payment. And one step away, you can see the deals we ruled out.\nBefore you commit you can see every detail, and you can accept, reject, or chat with your mortgage expert, which opens Habito's chat. And the last screen tells you what happens next.\nThe new recommendation and the new tracker both brought new components into Monzo's design system. At Monzo, that goes through the design system team's own process.\nThis version went live in November 2026. I designed these experiences while I was at Monzo. The team implemented and launched some of them after I left.\nThe early feedback from the team is that it looks great. The live data will show if more people accept. To know if they understood it, I'd ask people to explain in their own words why that deal was chosen, and what it means for them.",
  "ask": [
   [
    "Was this built?",
    "Yes. It went live in November 2026. I designed it while I was at Monzo, and the team built and launched it after I left, so it's too early for results. Before it, the push on day zero and the view-only version had shipped."
   ],
   [
    "How will the team know it works?",
    "Accepted recommendations is the main metric. But I'd also look at comprehension and wrong turns: do people open the reasons, do they ask the mortgage expert, do they come back."
   ]
  ]
 },
 {
  "title": "The tracker shows who has to act next",
  "notes": "Now, the progress tracker. It answers 'tell me what's happening' better than the previous version.\nA remortgage has around ten stages, and the next step can be yours, the mortgage expert's or the lender's. To design it I worked with Habito, to understand the steps they track and make them clear for our customers.\nAnd then our engineers worked with Habito's engineers to build the bridges between the two systems.\nI designed one card that changes during the journey. It's orange when it's your turn, and green when someone else is working on it.\nI defined the interactions and the motion: how the card moves forward at each step, and how things open. The animated illustrations were my idea too, and our team's animator brought them to life.\nIn one of our crits, a designer from the pensions team said they were exploring a progress tracker too. I worked with them to shape a shared pattern that could work for both products.\nWe also redesigned how people get to the tracker. Before, you went to Homeownership in Monzo, and from there to the tracker. Now, if you're remortgaging, the tracker is your first entry point, because that's your main focus. And from there you can still go back to your Homeownership dashboard.\nWe also added the bell. Every time you move to a new step, you get a notification, so you always know which step you're in. And if you don't want them, you can turn them off by tapping the bell.\nAnd this is also where the chat with your mortgage expert was going to live, which comes next. The first, simpler tracker went live with the Habito onboarding. This version went live in November 2026, after I'd left.\nPeople I worked with tell me the early signals are very positive, but it's too soon to have results.",
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
  "notes": "What's next? The vision is almost there. There's still a bit more to go.\nThe team wants the whole experience to feel fully integrated within Monzo, so Habito doesn't feel like a separate company. That's what they're working towards, and you can see it in the new onboarding, which presents it as free advice through Monzo.\nThe team is also working towards bringing the chat into Monzo. That will take longer, but here you can see how it could work in the Monzo app.\nAnd everything to do with documents is still missing. Uploading them from your phone is designed. And the end of the journey: connecting your new mortgage again, so we can help you when it ends.\nThe team is targeting February 2027 for this next phase, and I'm very excited to keep following this work.\nYou can try the full prototype behind this button.",
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
  "notes": "One more thing. One of the slowest parts of the project was approval. Every screen about rates, deals or recommendations went back and forth with Compliance, many times.\nSo I asked myself: what if designers could check their screens against the rules before they get to Compliance?\nI built a checker myself, with Cursor, an AI coding tool. It works from the documents that set out the rules. And we used it inside Monzo.\nYou paste your copy or add your Figma screens. The tool marks the lines that could break a rule, and suggests a fix. If something required is missing, like the APRC, an annualised measure of the mortgage's cost over its lifetime, fees included, it tells you. It doesn't make it up.\nIt doesn't approve anything. Compliance still does that. But the review can focus on the hard decisions. Loans, Overdrafts and Wealth asked to use it too. So I ran a lunch and learn, and set up a Slack channel for feedback.\nYou can see it running on the right. It's a copy I rebuilt for this case study, with no Monzo data in it.\nThis is how I use AI: where it helps, and where it isn't worth it. I use it in four ways.\nOne, to support my work. Like this checker. I'm not a compliance expert, and remembering every rule and checking my screens against it takes a lot of effort. So I built a tool that does it for me.\nTwo, to check how I communicate. My typos, my English, and whether something I say is wrong. It also helped me build this case study, with animations I can't explore in Figma.\nThree, for quick variations and summaries. Copy and UI variations, summaries of research, or of a Slack channel full of customer feedback.\nAnd four, to share what I learn. For example, I built a tool with all our research insights, so anyone on the team can ask it questions.\nAnd there are things I don't use it for. AI tends to tell you you're right, so I don't let it make decisions for me. I don't use it to decide the strategy, to replace research, or to find solutions before we understand the problem.\nSo I use it to take mechanical work off my hands. The judgment and the accountability stay with me. AI helps me explore faster and wider, and every decision stays mine.",
  "ask": [
   [
    "How did you build it?",
    "With Cursor, an AI coding tool. I gave it the documents with the rules and built it by describing what I needed and iterating, what people call vibe coding. I'm a designer, so that was the fastest way to get a working tool in front of the team."
   ],
   [
    "What did you build it for?",
    "For estimated deals first, and then for the view-only recommendation. Every word about rates and deals had to go through Compliance, and those screens went back and forth many times."
   ]
  ]
 },
 {
  "title": "What changed, and what’s still to do",
  "notes": "So, what came out of it, and what was mine.\nI led all the design: the vision, the onboarding, the form, the recommendation, the tracker, the pushes and the chat. And beyond the screens, three things came from me: the deal-end question, from 38 to 88 percent. Reach, with referrals about 75 percent above target. And when we didn't hit our goals, I moved the team's work to the recommendation.\nWe didn't reach the £990,000 goal. The cleanest signal is the form: about 40 percent finished it in Monzo, against 29 percent on the broker's website. Most of the rest went live in November, after I left.\nOn the right is where each of the four asks stands. Most of it is live, and pre-fill was rolled back after errors.",
  "ask": [
   [
    "What was mine, and what was the team’s?",
    "I led all the design, end to end: the vision, the onboarding, the form, the recommendation, the tracker, the pushes and the chat. And beyond the screens, three things came from me. The deal-end question: I added it to onboarding in 2024, and people who told us when their deal ends went from 38 to 88 percent. Reach: showing mortgage rates to everyone was my idea and my designs, and by early 2026 referrals were about 75 percent above our target. And I changed the question the team was asking, from referrals to why people don't go ahead after the recommendation. Engineering built it and data told us what was working. The hypotheses and the designs were mine."
   ],
   [
    "What business number moved?",
    "I can show early signals, and I can't show completed mortgages yet. The cleanest one is the application form: in a 50/50 test, about 40 percent of people finished it in Monzo, against 29 percent on the broker's website. I designed that form. A mortgage takes months to complete, and most of what I designed for Habito went live in November, after I left. I'd rather say what I know than give a number I can't defend."
   ],
   [
    "How did you lead, as the only designer?",
    "Through the work and through people. I ran the workshop that turned the vision into a plan, took my work to design crits, and ran a lunch and learn on the Compliance checker. And I mentored two people from Operations at Monzo, who are now part of the Product Design team."
   ]
  ]
 },
 {
  "title": "The vision: from saving to owning, in Monzo",
  "notes": "Next, first-time buyers. We always wanted to cover the whole mortgage journey: from looking for a home, to your first mortgage, to remortgaging, and maybe moving home. So we knew first-time buyers would come at some point. While I worked on the more tactical remortgaging work, I explored this vision in parallel.\nIt isn't about selling a mortgage. It's about staying with people for the whole life of their home.\nYou see what you can afford, keep everything in one buyer profile, and talk to your adviser in a chat. When you buy, every step is tracked, from the conveyancing to the survey. And when you get the keys, your home story starts, until it's time to remortgage.\nIt's a direction, not a plan.",
  "ask": []
 },
 {
  "title": "First-time buyers became the priority",
  "notes": "In autumn 2026, first-time buyers became the team's first goal. Remortgaging wasn't hitting its goals, and we knew many Monzo customers are working towards buying their first home, so we decided to open it as soon as possible. It was also a business decision: we needed to show that buying Habito had been a good decision.\nI was the only designer on it. The first release covers the first step of the vision: finding the right mortgage. I designed the entry points.\nThe problem is bigger than a mortgage. In a 2024 survey, only 38 percent of people knew what to expect from the process. And in interviews, seven of eight people had talked to a broker before making an offer. Trust starts early.\nOur hypothesis: if we open Monzo's mortgage journey to first-time buyers, with what we'd already built, we can learn who comes in and how ready they are, before investing in a bigger proposition. So we designed for learning, not for volume.\nAnd we couldn't open it to millions at once: the mortgage experts could take about 200 first-time buyers a month from Monzo.\nThat left one design question: how do we make it easy enough to find, without sending people who aren't ready to a mortgage expert?\nOn the right is the app today.",
  "ask": [
   [
    "Why not wait until people have an offer accepted?",
    "In a reference cohort from October 2025, people with an accepted offer went on to apply about 29 percent of the time, and people with no property yet about 9 percent. But the people without an accepted offer were more than half of those asking for advice, and the research showed that trust in a broker starts before the offer."
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
    "What happens to people who aren't ready?",
    "Today we tell them it's a little early and to come back. In the Figma I also designed a screen for them with tools to get ready, like Credit Tracker and Savings. That one isn't live."
   ]
  ]
 },
 {
  "title": "Entry points, in steps",
  "notes": "We reused the remortgage journey you've just seen: the tracker, and the form in sections that saves your progress. So the design work went into how people find it.\nI sized each door myself, with Cursor on our data, and our data scientist checked my queries.\nSo everyone without a house on file is eligible, but we control the exposure. First, Search and Do more, always on, and a card on the home screen: a growth component we can switch on and off based on volumes. The louder doors, like an always-on entry point in the Grow tab, come later, once we know the mortgage experts can keep up.\nPots were my favourite idea. We postponed them because Pots are mostly used by very engaged Monzo customers, and in a learning phase we didn't want to limit it to one segment. We wanted to learn from every type of customer first.\nThe first release is live today, launched in November after I left, so there are no results yet. The plan is to launch, measure, decide and iterate. The first thing I'd look at is the mix of readiness, before volume. If most people are just starting, the next bet is helping them get ready, not more doors. If most are ready, we open the louder doors. The goal the team reports is 421 finished fact-finds a month by March.",
  "ask": [
   [
    "How did you check your numbers?",
    "I wrote the queries with Cursor on our data repository, which is a day behind. Then our data scientist checked the queries and the numbers against his own data. To choose the order of the entry points, general numbers were enough."
   ],
   [
    "Why postpone Pots if the numbers were good?",
    "About 52,000 customers had a house savings Pot with more than £5,000, and about 460 of them buy a first home each month. They've already told us their goal. But the entry point only works if people open the Pot, and the people who do that often are very engaged with Monzo. We wanted the first release to teach us about every type of customer, so the general doors came first."
   ]
  ]
 },
 {
  "title": "What I learned",
  "notes": "Looking back, I take four things with me.\nOne: look past the first number. Referrals beat the plan, but people dropped after the recommendation. So we focused on the recommendation, and kept moving the form into Monzo.\nTwo: say what it is. People thought we were a comparison site. Leading with the mortgage expert changed what they expected.\nThree: know the goal, and ship in steps. The vision didn't change, but we got there in pieces: the push, the view-only screen, then the new recommendation.\nAnd four: work with what your partner has. Habito had no design team, so I went through the journey as a customer. And we shipped first steps, like their chat inside our app.",
  "ask": [
   [
    "What would you do differently?",
    "Three things. First, I'd bring people back much earlier. Until the whole journey was inside Monzo, people had no reason to come back to us. We learned that when we had to add a push for the recommendation. I'd have added notifications much sooner, and for every step. Someone getting a mortgage has other things going on in their life, so we need to stay top of mind. Second, the form. We took too long to decide what to do with it. There were real technical limits, but I could have been more proactive: map every question in a spreadsheet and work from that before the API was built. Third, the first tracker. I should have asked about the technical limits before proposing my first version, because it couldn't be built. I don't regret it, because it showed the team where we wanted to get to. But it cost a week or two while engineering checked."
   ]
  ]
 },
 {
  "title": "Thank you for reading",
  "notes": "That's the story. Thank you for reading.\nThe buttons on this slide open my portfolio and the two Figma files. I'm happy to go deeper into any part of it.",
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
const notesHeading=document.getElementById("notes-heading");
const notesContent=document.getElementById("notes-content");
const panelCount=document.getElementById("np-count");
const toc=document.getElementById("toc");
const tocList=document.getElementById("toc-list");
const prevButtons=[document.getElementById("previous-slide"),document.getElementById("notes-prev")];
const nextButtons=[document.getElementById("next-slide"),document.getElementById("notes-next")];
const pad=n=>String(n+1).padStart(2,"0");
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
      el.textContent=pre+Math.round(base*e).toLocaleString('en-GB')+suf;if(p<1)requestAnimationFrame(step)}
    requestAnimationFrame(step);
  });
}
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n}
slides.forEach((s,i)=>{
  if(i===mainCount){tocList.append(el("li","toc-sep","Appendix"))}
  const li=el("li");const b=el("button");b.type="button";b.dataset.i=i;
  b.append(el("span","toc-n",i<mainCount?pad(i):"A"+(i-mainCount+1)),el("span","toc-t",s.title));
  li.append(b);tocList.append(li);
});
function render(scroll){
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
  panelCount.textContent=label(current);
  captionNumber.textContent=current<mainCount?pad(current):"A"+(current-mainCount+1);
  captionTitle.textContent=slide.title;
  progress.style.width=(Math.min(1,(current+1)/mainCount)*100)+"%";
  progressBar.setAttribute("aria-valuenow",String(current+1));
  notesHeading.textContent=slide.title;
  notesContent.textContent="";
  String(slide.notes).split("\n").forEach(t=>{if(t.trim())notesContent.append(el("p","np-p",t))});
  if(slide.ask&&slide.ask.length){
    const box=el("div","np-ask");box.append(el("h3",null,"You might ask"));
    slide.ask.forEach(([q,a])=>{box.append(el("p","q",q),el("p","ans",a))});
    notesContent.append(box);
  }
  tocList.querySelectorAll("button").forEach(b=>b.classList.toggle("on",+b.dataset.i===current));
  prevButtons.forEach(b=>b.disabled=current===0);
  nextButtons.forEach(b=>b.disabled=current===slides.length-1);
  history.replaceState(null,"","#"+(current+1));
  if(scroll)window.scrollTo({top:0,behavior:"auto"});
}
function go(step){const next=Math.max(0,Math.min(slides.length-1,current+step));if(next!==current){current=next;render(true)}}
prevButtons.forEach(b=>b.addEventListener("click",()=>go(-1)));
nextButtons.forEach(b=>b.addEventListener("click",()=>go(1)));
document.getElementById("open-toc").addEventListener("click",()=>{if(!toc.open)toc.showModal();const on=tocList.querySelector("button.on");if(on)on.scrollIntoView({block:"center"})});
document.getElementById("close-toc").addEventListener("click",()=>toc.close());
toc.addEventListener("click",e=>{if(e.target===toc){toc.close();return}const b=e.target.closest("button[data-i]");if(b){current=+b.dataset.i;toc.close();render(true)}});
const wideBtn=document.getElementById("toggle-wide"),wideLabel=document.getElementById("toggle-wide-label");
wideBtn.addEventListener("click",()=>{const on=document.body.classList.toggle("wide");wideBtn.setAttribute("aria-pressed",String(on));wideLabel.textContent=on?"Notes beside":"Larger slide";fit()});
document.addEventListener("keydown",event=>{
 if(event.target.closest("input,textarea,select,[contenteditable='true']"))return;
 if(toc.open)return;
 if(event.key==="ArrowLeft"){event.preventDefault();go(-1)}
 if(event.key==="ArrowRight"){event.preventDefault();go(1)}
});
addEventListener('message',e=>{const k=e.data&&e.data.deckKey;if(k==='ArrowLeft')go(-1);else if(k==='ArrowRight')go(1)});
document.querySelectorAll('dialog.fb-pop').forEach(d=>{document.body.append(d);d.addEventListener('click',e=>{if(e.target===d||e.target.closest('.fb-close'))d.close()});['touchstart','touchend'].forEach(t=>d.addEventListener(t,e=>e.stopPropagation(),{passive:true}))});
document.addEventListener('click',e=>{const b=e.target.closest('[data-pop]');if(!b)return;const d=document.getElementById(b.dataset.pop);if(d&&!d.open)d.showModal()});
document.addEventListener('keydown',e=>{if(document.querySelector('dialog.fb-pop[open]')&&e.key!=='Escape')e.stopImmediatePropagation()},true);
let sx=null;figure.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
figure.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)go(dx<0?1:-1);sx=null});
const h=parseInt(location.hash.slice(1));if(h>=1&&h<=slides.length)current=h-1;
render(false);
