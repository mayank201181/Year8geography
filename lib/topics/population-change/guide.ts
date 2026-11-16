import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "population-change",
  title: "How and Why Do Populations Change?",
  strand: "Population",
  icon: "🔄",
  summary: "Births, deaths and migration: the four taps that fill or drain every country.",
  intro:
    "Every country's population changes in just four ways: people are born, people die, people arrive and people leave. Put together, that gives the most useful equation in population geography:\n\n    Population change = (births − deaths) + (immigrants − emigrants)\n\nIn this topic you will find out *why* women in Niger have about 6 children on average but women in Singapore fewer than 1, why death rates have fallen almost everywhere, what pushes and pulls people to migrate, and — the skill examiners love — how to weigh up which factors matter most in a particular place and reach a judgement you can back with evidence.",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "birth-rate-factors",
      heading: "Why birth rates rise and fall",
      discovery: {
        problem:
          "A woman in Niger has, on average, about 6 children. A woman in Singapore has, on average, fewer than 1. Human biology is the same in both countries. So what is different? Before reading on, write down **three** reasons why families in one place might choose to have many children and families in another place very few.",
        idea:
          "Having children is a decision shaped by **economics and society**, not biology. Where children work on the farm, look after parents in old age and many babies die young, large families make sense. Where children cost a lot (housing, tuition, childcare), women are educated and working, and contraception is easy to get, families are small. The key question is: **are children an economic asset or an economic cost?**",
      },
      body:
        "The **birth rate** is the number of live births per 1,000 people per year. The **total fertility rate (TFR)** is the average number of children a woman is expected to have in her lifetime. A TFR of about **2.1** is called **replacement level** — enough children to replace both parents (the extra 0.1 allows for children who die before adulthood, and for the fact that slightly more boys than girls are born). Below 2.1, a population will eventually shrink unless migrants arrive.\n\n**Factors that keep birth rates HIGH**\n- **High infant mortality** — if many babies die, parents have more children so that some survive.\n- **Children as workers** — on farms children fetch water, herd animals and help with harvests, so they bring in food and money.\n- **No state pension** — children are the 'pension' that cares for parents in old age.\n- **Little access to contraception** or family-planning advice.\n- **Early marriage** and few years of schooling for girls.\n- **Religious and cultural traditions** that value large families.\n\n**Factors that bring birth rates DOWN**\n- **Education and empowerment of women** — girls who stay in school marry later, have careers and usually choose smaller families. Many geographers see this as the most powerful single factor.\n- **Cheap, available contraception.**\n- **Urbanisation** — in cities children are a cost (school fees, space in a flat), not farm labour.\n- **The high cost of raising children** — housing, tuition and childcare in rich cities like Singapore.\n- **Falling infant mortality** — parents are confident their children will survive.\n- **Government policy** — *anti-natalist* (fewer babies, e.g. China's One-Child Policy, 1980–2015) or *pro-natalist* (more babies, e.g. Singapore's Baby Bonus).\n\n| Country | Total fertility rate (approx., 2023) |\n|---|---|\n| Niger | about 6 (estimates range from about 6 to 7) |\n| Bangladesh | about 2.0 |\n| UK | about 1.4 |\n| Japan | about 1.2 |\n| Singapore (residents) | 0.97 |\n| South Korea | about 0.72 |\n\n**Case study — Bangladesh.** In the early 1970s women had on average about 6–7 children; today the figure is about 2. Girls' schooling, health workers bringing contraception to villages, and falling child deaths all played a part. It shows birth rates can fall quickly even in a lower-income country.\n\n**Case study — Singapore.** Singapore has the opposite problem. Its resident TFR was about **0.97 in 2023**, one of the lowest in the world, even though the government offers the Baby Bonus, paid parental leave and priority for HDB flats for families with children. High costs, long working hours and later marriage all push the rate down.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of total fertility rate around 2023: Niger about 6.0, Bangladesh about 2.0, UK about 1.4, Japan about 1.2, Singapore residents 0.97, South Korea about 0.72. A dashed line marks replacement level at 2.1."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="250" y="22" font-size="13" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">Total fertility rate, about 2023</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="220" x2="465" y2="220"/><line x1="60" y1="190" x2="465" y2="190"/><line x1="60" y1="160" x2="465" y2="160"/><line x1="60" y1="130" x2="465" y2="130"/><line x1="60" y1="100" x2="465" y2="100"/><line x1="60" y1="70" x2="465" y2="70"/><line x1="60" y1="40" x2="465" y2="40"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="54" y="254">0</text><text x="54" y="224">1</text><text x="54" y="194">2</text><text x="54" y="164">3</text><text x="54" y="134">4</text><text x="54" y="104">5</text><text x="54" y="74">6</text><text x="54" y="44">7</text></g><text x="18" y="145" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 18 145)">Children per woman</text><rect x="75" y="70" width="40" height="180" fill="#fde68a" stroke="#334155"/><rect x="140" y="190" width="40" height="60" fill="#bbf7d0" stroke="#334155"/><rect x="205" y="208" width="40" height="42" fill="#c7d2fe" stroke="#334155"/><rect x="270" y="214" width="40" height="36" fill="#c7d2fe" stroke="#334155"/><rect x="335" y="220.9" width="40" height="29.1" fill="#fecaca" stroke="#334155"/><rect x="400" y="228.4" width="40" height="21.6" fill="#fecaca" stroke="#334155"/><line x1="60" y1="40" x2="60" y2="250" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="250" x2="465" y2="250" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="187" x2="465" y2="187" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="6 4"/><text x="462" y="180" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">Replacement level 2.1</text><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="95" y="64">≈6.0</text><text x="160" y="178">≈2.0</text><text x="225" y="203">≈1.4</text><text x="290" y="209">≈1.2</text><text x="355" y="216">0.97</text><text x="420" y="223">≈0.72</text><text x="95" y="266">Niger</text><text x="160" y="266">Bangladesh</text><text x="225" y="266">UK</text><text x="290" y="266">Japan</text><text x="355" y="266">Singapore</text><text x="355" y="279">(residents)</text><text x="420" y="266">S. Korea</text></g><text x="250" y="295" font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle">Values are approximate and rounded.</text></svg>`,
      diagramCaption:
        "Total fertility rate in six countries (approximate, about 2023). Only Niger is above replacement level (2.1); Bangladesh sits close to it, and Singapore and South Korea are far below.",
      workedExamples: [
        {
          title: "Calculating the rate of natural increase",
          problem:
            "A country has a birth rate of 45 per 1,000 and a death rate of 9 per 1,000. Calculate its **rate of natural increase** as a percentage.",
          steps: [
            "Natural increase is births minus deaths, so subtract the rates: 45 − 9 = 36 per 1,000.",
            "'Per 1,000' means out of 1,000 people. A percentage is out of 100, so divide by 10: 36 ÷ 10 = 3.6.",
            "Check it makes sense: 3.6% a year is very fast growth — typical of a country with a high TFR like Niger.",
          ],
          answer: "3.6% per year (36 per 1,000)",
          yourTurn: {
            question:
              "Your turn: a country has a birth rate of 12 per 1,000 and a death rate of 8 per 1,000. What is its rate of natural increase, as a percentage?",
            answer: { type: "number", value: 0.4, allowFraction: false, display: "0.4%" },
            solution: "12 − 8 = 4 per 1,000. Divide by 10 to turn 'per 1,000' into a percentage: 4 ÷ 10 = 0.4% per year.",
          },
        },
        {
          title: "Reading the resource: how far below replacement?",
          problem:
            "Use the bar chart. By how much is Singapore's resident TFR below replacement level?",
          steps: [
            "Read the key value first: the dashed line shows replacement level = 2.1.",
            "Read Singapore's bar: 0.97 (2023).",
            "Subtract: 2.1 − 0.97 = 1.13.",
            "Interpret: on average each woman has about 1.13 fewer children than are needed to replace the population in the long run — so without immigration Singapore's resident population would eventually shrink.",
          ],
          answer: "1.13 children per woman below replacement level",
          yourTurn: {
            question:
              "Your turn: using the chart values Niger ≈ 6.0 and South Korea ≈ 0.72, how many times larger is Niger's TFR than South Korea's? Give your answer to 1 decimal place.",
            answer: { type: "number", value: 8.3, tolerance: 0.05, allowFraction: false },
            solution: "6.0 ÷ 0.72 = 8.33… ≈ 8.3. A woman in Niger has, on average, more than eight times as many children as a woman in South Korea.",
          },
        },
      ],
      keyPoints: [
        "Birth rate = live births per 1,000 people per year; TFR = average children per woman.",
        "Replacement level is a TFR of about 2.1.",
        "Birth rates stay high where children are an economic asset, infant mortality is high and contraception is scarce.",
        "Birth rates fall with women's education, contraception, urbanisation, falling infant mortality and high costs of raising children.",
        "Singapore's resident TFR was about 0.97 in 2023; Niger's is about 6.",
      ],
      whyItWorks:
        "Parents weigh up — often without saying so — the **costs and benefits** of another child. On a farm without pensions, a child is extra labour and future security, so the benefits win. When families move to cities, children stop earning and start costing (school, housing, tuition), so the balance tips towards fewer children. Educating girls speeds this up: a woman who stays in school marries later (fewer years to have children), knows about contraception, earns a wage she would lose by staying at home, and is more likely to keep her children healthy — so she doesn't need 'spare' children. There is also a **time lag**: when infant mortality falls, parents keep having large families for a generation until they trust that their children will survive. That lag is why populations often boom just after healthcare improves.",
      strategies: ["Cause → process → effect", "Use figures from the source", "Read the key first", "Social / economic / environmental (SEE)"],
      thinkDeeper:
        "Singapore has offered the Baby Bonus since 2001, yet its TFR has kept falling. Does that prove pro-natalist policies don't work — or might the rate have fallen even further without them? How could a geographer test this?",
    },
    // ------------------------------------------------------------------
    {
      id: "death-rate-factors",
      heading: "Why death rates rise and fall",
      discovery: {
        problem:
          "Japan has some of the best hospitals in the world and people there live to about 84 on average. Niger is one of the poorest countries in the world. Yet Japan's **death rate** (deaths per 1,000 people) is *higher* than Niger's. How can that possibly be true?",
        idea:
          "The crude death rate counts deaths per 1,000 of the **whole** population. Japan has a very old population, and old people die even with excellent healthcare. Niger has a very young population (a median age of about 15), so even though many babies die, the share of the whole population dying each year is lower. Always ask: **who** makes up the population?",
      },
      body:
        "The **death rate** is the number of deaths per 1,000 people per year. **Life expectancy** is the average number of years a newborn baby can expect to live. The **infant mortality rate** is the number of babies who die before their first birthday per 1,000 live births — one of the best single measures of how developed a country is.\n\n**Factors that LOWER death rates**\n- **Healthcare and vaccination** — vaccines protect against measles, polio and tetanus; smallpox was declared eradicated by the World Health Organization in 1980. Doctors, clinics and antibiotics treat infections that once killed.\n- **Clean water and sanitation** — piped water and sewers stop diseases such as cholera and typhoid. Diarrhoea from unsafe water still kills many young children in poorer places.\n- **A reliable food supply** — better farming, storage and transport reduce famine; well-fed bodies fight disease better.\n- **Better housing and hygiene education** — less overcrowding and handwashing slow the spread of disease.\n\n**Factors that RAISE death rates**\n- **Conflict** — direct violence, plus destroyed hospitals, water supplies and food supplies.\n- **Disease and pandemics** — the World Health Organization estimated about 15 million excess deaths worldwide from COVID-19 in 2020–2021. In the 1300s the Black Death killed perhaps a third or more of Europe's people.\n- **Famine and natural disasters** — droughts, floods, earthquakes.\n- **Lifestyle diseases** — heart disease, some cancers and diabetes are linked to diet, smoking and inactivity in richer countries.\n- **An ageing population** — as more people reach old age, the crude death rate *rises* even if healthcare keeps improving.\n\n| Measure | Figure (approx.) |\n|---|---|\n| World life expectancy, 1950 | about 46 years |\n| World life expectancy, 2023 | about 73 years |\n| Singapore life expectancy, 2023 | about 83 years |\n| Japan life expectancy, early 2020s | about 84 years |\n| Japan crude death rate, early 2020s | about 13 per 1,000 |\n| Niger crude death rate, early 2020s | under 10 per 1,000 |\n\n**Case study — Singapore.** In the 1950s many people lived in crowded kampongs and shophouses without proper sanitation. Mass HDB housing, piped water, sewers, free childhood vaccinations and good hospitals helped push infant mortality down to about 2 per 1,000 — among the lowest in the world — and life expectancy up to about 83 years.\n\nThe big global story is that death rates fell first (from the late 1700s and 1800s in Europe, mostly after 1950 elsewhere) while birth rates stayed high for a while. That gap is what made the world's population explode from about 2.5 billion in 1950 to 8 billion in 2022.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Factor diagram. Left box: factors that push the death rate down (vaccines and healthcare, clean water and sewers, reliable food supply, better housing, hygiene education, antibiotics). Right box: factors that push it up (war and conflict, epidemics and pandemics, famine and drought, natural disasters, ageing population, unhealthy lifestyles). Both point to a central death rate box. Below, a chain: clean water leads to fewer water-borne diseases, fewer infant deaths and higher life expectancy."><defs><marker id="pcArrowDr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 z" fill="#1f2937"/></marker></defs><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="240" y="22" font-size="13" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">What pushes the death rate down — or up?</text><rect x="10" y="38" width="160" height="182" rx="8" fill="#bbf7d0" stroke="#334155"/><text x="90" y="60" font-size="13" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">Death rate DOWN ↓</text><g font-size="12" font-family="sans-serif" fill="#1f2937"><text x="20" y="86">• Vaccines, healthcare</text><text x="20" y="108">• Clean water, sewers</text><text x="20" y="130">• Reliable food supply</text><text x="20" y="152">• Better housing</text><text x="20" y="174">• Hygiene education</text><text x="20" y="196">• Antibiotics, medicines</text></g><rect x="310" y="38" width="160" height="182" rx="8" fill="#fecaca" stroke="#334155"/><text x="390" y="60" font-size="13" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">Death rate UP ↑</text><g font-size="12" font-family="sans-serif" fill="#1f2937"><text x="320" y="86">• War and conflict</text><text x="320" y="108">• Epidemics, pandemics</text><text x="320" y="130">• Famine and drought</text><text x="320" y="152">• Natural disasters</text><text x="320" y="174">• Ageing population</text><text x="320" y="196">• Unhealthy lifestyles</text></g><rect x="200" y="98" width="80" height="62" rx="6" fill="#e5e7eb" stroke="#1f2937" stroke-width="1.5"/><g font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="240" y="118" font-weight="bold">Death rate</text><text x="240" y="134">per 1,000</text><text x="240" y="150">per year</text></g><line x1="171" y1="129" x2="198" y2="129" stroke="#1f2937" stroke-width="2" marker-end="url(#pcArrowDr)"/><line x1="309" y1="129" x2="282" y2="129" stroke="#1f2937" stroke-width="2" marker-end="url(#pcArrowDr)"/><text x="240" y="246" font-size="12" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">One chain of cause and effect</text><g fill="#bae6fd" stroke="#334155"><rect x="10" y="258" width="100" height="44" rx="6"/><rect x="130" y="258" width="100" height="44" rx="6"/><rect x="250" y="258" width="100" height="44" rx="6"/><rect x="370" y="258" width="100" height="44" rx="6"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="60" y="284">Clean water</text><text x="180" y="276">Fewer water-</text><text x="180" y="290">borne diseases</text><text x="300" y="276">Fewer infant</text><text x="300" y="290">deaths</text><text x="420" y="276">Higher life</text><text x="420" y="290">expectancy</text></g><g stroke="#1f2937" stroke-width="2"><line x1="111" y1="280" x2="128" y2="280" marker-end="url(#pcArrowDr)"/><line x1="231" y1="280" x2="248" y2="280" marker-end="url(#pcArrowDr)"/><line x1="351" y1="280" x2="368" y2="280" marker-end="url(#pcArrowDr)"/></g></svg>`,
      diagramCaption:
        "Factors that lower (green) and raise (red) the death rate, with one cause-and-effect chain showing how clean water raises life expectancy.",
      workedExamples: [
        {
          title: "From a rate to a number of deaths",
          problem:
            "A country has a population of 5,000,000 and a death rate of 8 per 1,000. About how many people die there in a year?",
          steps: [
            "'8 per 1,000' means 8 deaths for every 1,000 people.",
            "Find how many lots of 1,000 there are: 5,000,000 ÷ 1,000 = 5,000.",
            "Multiply by the rate: 5,000 × 8 = 40,000.",
          ],
          answer: "About 40,000 deaths per year",
          yourTurn: {
            question:
              "Your turn: a country of 2,000,000 people has a death rate of 11 per 1,000. How many deaths would you expect in one year?",
            answer: { type: "number", value: 22000, display: "22,000 deaths" },
            solution: "2,000,000 ÷ 1,000 = 2,000 lots of 1,000. 2,000 × 11 = 22,000 deaths a year.",
          },
        },
        {
          title: "Model answer built step by step",
          problem: "Explain **two** reasons why death rates fall as a country develops. [4 marks]",
          steps: [
            "Decode the command word: *explain* means give a reason **and** show how it works (cause → process → effect). Two reasons × 2 marks each.",
            "Reason 1 (point): Clean water and sanitation improve. (Explain): Piped water and sewers stop water-borne diseases such as cholera and typhoid spreading, so fewer people — especially young children — die of diarrhoea.",
            "Reason 2 (point): Healthcare and vaccination improve. (Explain): Vaccines protect children against diseases such as measles and polio, and clinics and antibiotics treat infections, so fewer people die young and life expectancy rises.",
            "Add a real example for top marks: in Singapore, HDB housing, piped water and free childhood vaccinations helped cut infant mortality to about 2 per 1,000.",
          ],
          answer:
            "As a country develops, clean water and sanitation spread. Piped water and sewers stop diseases such as cholera and typhoid, so fewer children die of diarrhoea and the death rate falls. Healthcare also improves: vaccination protects children from measles and polio, and antibiotics treat infections, so more people survive into old age. In Singapore, for example, HDB housing, piped water and childhood vaccination helped cut infant mortality to about 2 per 1,000.",
          yourTurn: {
            question:
              "Your turn: what is the name of the measure that counts the number of babies who die before their first birthday for every 1,000 live births?",
            answer: { type: "text", accept: ["infant mortality rate", "infant mortality", "imr", "infant death rate"] },
            solution:
              "The **infant mortality rate**. It is a powerful development indicator because it reflects clean water, healthcare, nutrition and mothers' education all at once.",
          },
        },
      ],
      keyPoints: [
        "Death rate = deaths per 1,000 people per year; life expectancy = average years a newborn can expect to live.",
        "Healthcare, vaccination, clean water, sanitation and a reliable food supply lower death rates.",
        "Conflict, pandemics, famine, disasters and lifestyle diseases raise them.",
        "An ageing population raises the crude death rate even when healthcare is excellent (Japan).",
        "World life expectancy rose from about 46 years (1950) to about 73 years (2023).",
      ],
      whyItWorks:
        "Most deaths in poorer countries in the past — and many today — come from **infectious diseases** that spread through dirty water, crowded housing and contact between unvaccinated people. Each improvement breaks a link in the chain of infection: sewers keep human waste away from drinking water, vaccines stop a disease jumping from person to person, and good food makes bodies strong enough to recover. Once infectious diseases are controlled, people live long enough to die of **old-age diseases** (heart disease, cancer, dementia). That is why, in very developed countries, the death rate can creep back *up*: not because people are less healthy, but because a bigger share of the population is old.",
      strategies: ["Cause → process → effect", "Use the command word", "PEEL paragraph", "Spot the misconception"],
      thinkDeeper:
        "Life expectancy and the crude death rate are both 'death' measures, but they can tell opposite stories (compare Japan and Niger). Which is the fairer measure of a country's health, and why?",
    },
    // ------------------------------------------------------------------
    {
      id: "migration",
      heading: "Migration",
      discovery: {
        problem:
          "Roughly 3 in every 10 people living in Singapore are non-residents — foreign workers, students and their families (2024). Meanwhile, nearly 1 million Rohingya people live in refugee camps in Bangladesh, most of whom fled Myanmar in 2017. Both groups are migrants. What is the most important *difference* between the two moves?",
        idea:
          "Most of Singapore's foreign workers **chose** to move, attracted by jobs and wages — **voluntary** migration driven mainly by **pull** factors. The Rohingya had no real choice: they fled violence and persecution — **forced** migration driven by **push** factors. Asking 'did they choose?' and 'what pushed, what pulled?' unlocks every migration question.",
      },
      body:
        "**Migration** is the movement of people from one place to another to live, usually for at least a year.\n\n- **Immigrant** — someone who moves *into* a country. **Emigrant** — someone who moves *out* of a country.\n- **Net migration** = immigrants − emigrants. Positive net migration adds people; negative net migration removes them.\n- **Internal migration** happens within one country (e.g. rural to urban). **International migration** crosses a border.\n\n    Population change = (births − deaths) + (immigrants − emigrants)\n    Population change = natural increase + net migration\n\n**Push and pull factors**\n\n| | Push factors (drive people away) | Pull factors (attract people) |\n|---|---|---|\n| Social | Poor schools and healthcare | Good schools, hospitals, family already there |\n| Economic | Unemployment, low wages | Jobs, higher wages |\n| Environmental | Drought, floods, pollution | Safe, pleasant environment |\n| Political | War, persecution | Peace, safety, freedom |\n\nMigrants must also overcome **obstacles** — cost, distance, visas and border controls, language.\n\n**Types of migrant**\n- **Voluntary migrants** choose to move — e.g. **economic migrants** seeking work.\n- **Forced migrants** have to move to survive.\n- A **refugee** has been forced to flee their country because of persecution, war or violence, and is protected under international law (the 1951 UN Refugee Convention).\n- An **asylum seeker** has asked for protection as a refugee but is waiting for a decision.\n- An **internally displaced person (IDP)** has been forced from home but is still inside their own country.\n\n**Examples**\n- **Singapore's foreign workforce** — Employment Pass holders (professionals), S Pass holders (mid-skilled) and Work Permit holders (for example in construction, shipyards and domestic work). Non-residents made up roughly 30% of the population in 2024. Voluntary, economic, mainly pull.\n- **China's rural–urban migration** — nearly 300 million rural migrant workers (2023) work outside farming; many have moved internally to cities, especially on the east coast, for factory and construction jobs.\n- **Syria** — the civil war that began in 2011 forced millions to flee abroad; Turkey has hosted the largest number. Forced, push.\n- **Ukraine** — after Russia's full-scale invasion in 2022, millions of Ukrainians fled to other European countries. Forced, push.\n\nUNHCR, the UN Refugee Agency, reported that more than 100 million people worldwide had been forcibly displaced by 2023 — most of them inside their own countries or in neighbouring countries, not in rich countries far away.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Push and pull diagram. On the left, the place of origin with push factors: few jobs and low wages, war or persecution, drought or floods, poor schools and healthcare. On the right, the destination with pull factors: jobs and higher wages, safety and freedom, better services, family already there. A large arrow labelled migration goes from origin to destination, above a box of obstacles: cost, distance, borders and visas, language."><rect x="0" y="0" width="480" height="300" fill="#bae6fd"/><path d="M20,45 Q90,28 170,50 Q186,140 166,235 Q90,252 25,235 Q6,140 20,45 Z" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><path d="M310,50 Q390,28 460,45 Q474,140 455,235 Q390,252 314,235 Q294,140 310,50 Z" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><text x="95" y="70" font-size="13" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">ORIGIN</text><text x="95" y="92" font-size="12" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#b91c1c">PUSH factors</text><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="30" y="116">• Few jobs, low wages</text><text x="30" y="138">• War or persecution</text><text x="30" y="160">• Drought or floods</text><text x="30" y="182">• Poor schools and</text><text x="38" y="196">healthcare</text></g><text x="385" y="70" font-size="13" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">DESTINATION</text><text x="385" y="92" font-size="12" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#15803d">PULL factors</text><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="318" y="116">• Jobs, higher wages</text><text x="318" y="138">• Safety and freedom</text><text x="318" y="160">• Better services</text><text x="318" y="182">• Family already</text><text x="326" y="196">there</text></g><polygon points="178,122 272,122 272,108 302,132 272,156 272,142 178,142" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="238" y="100" font-size="12" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">MIGRATION</text><rect x="188" y="170" width="104" height="62" rx="6" fill="#ffffff" stroke="#334155" stroke-dasharray="5 3"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="240" y="186" font-weight="bold">Obstacles</text><text x="240" y="201">cost, distance</text><text x="240" y="214">borders, visas</text><text x="240" y="227">language</text></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="240" y="268">Voluntary migrants choose to move (often mainly pull).</text><text x="240" y="285">Forced migrants must flee to survive (strong push, e.g. war).</text></g></svg>`,
      diagramCaption:
        "The push–pull model: push factors drive people out of the place of origin, pull factors attract them to the destination, and obstacles in between decide whether they can actually move.",
      workedExamples: [
        {
          title: "Using the population change equation",
          problem:
            "In one year a small country records 1,200 births, 900 deaths, 700 immigrants and 1,000 emigrants. Calculate the natural increase, the net migration and the total population change.",
          steps: [
            "Natural increase = births − deaths = 1,200 − 900 = +300.",
            "Net migration = immigrants − emigrants = 700 − 1,000 = −300 (more people left than arrived).",
            "Population change = natural increase + net migration = 300 + (−300) = 0.",
            "Interpret: the population stayed the same — the extra births were cancelled out exactly by people emigrating.",
          ],
          answer: "Natural increase +300; net migration −300; total change 0",
          yourTurn: {
            question:
              "Your turn: a region has 4,000 births, 4,500 deaths, 1,000 immigrants and 2,000 emigrants in a year. What is its total population change? (Use a minus sign if it falls.)",
            answer: { type: "number", value: -1500, display: "−1,500" },
            solution:
              "Natural change = 4,000 − 4,500 = −500 (a natural decrease). Net migration = 1,000 − 2,000 = −1,000. Total = −500 + (−1,000) = −1,500 people.",
          },
        },
        {
          title: "Classifying push and pull factors",
          problem:
            "Arjun's family leave a village in rural India, where the monsoon rains failed and their crops died, and move to Mumbai, where his father has been offered a construction job. Identify one push factor and one pull factor, and say whether the move is internal or international.",
          steps: [
            "Strategy — ask of each reason: does it drive them **away** from the origin, or **attract** them to the destination?",
            "Failed rains and dead crops are a problem in the village: they drive the family away, so this is a **push** factor (environmental and economic).",
            "The job offer is an attraction in Mumbai, so this is a **pull** factor (economic).",
            "Village and Mumbai are both in India, so the move is **internal** (rural to urban).",
          ],
          answer: "Push: crop failure after the rains failed. Pull: a construction job in Mumbai. Internal (rural–urban) migration.",
          yourTurn: {
            question:
              "Your turn: a nurse moves from the Philippines to Singapore because hospital salaries are higher in Singapore. Is 'higher salaries in Singapore' a push factor or a pull factor?",
            answer: { type: "text", accept: ["pull", "pull factor", "a pull factor", "pull factors"] },
            solution:
              "It is a **pull** factor: it is a feature of the destination (Singapore) that attracts the migrant. Low pay at home would be the matching push factor.",
          },
        },
      ],
      keyPoints: [
        "Net migration = immigrants − emigrants; population change = natural increase + net migration.",
        "Push factors drive people away; pull factors attract them; obstacles can stop them moving.",
        "Voluntary migrants choose to move (e.g. economic migrants); forced migrants must flee (e.g. refugees).",
        "A refugee has crossed a border to escape persecution or war; an IDP is displaced inside their own country.",
        "Non-residents made up roughly 30% of Singapore's population in 2024.",
      ],
      whyItWorks:
        "People compare where they are with where they could be. If the gap is big enough — in wages, safety or opportunity — and the obstacles (cost, distance, visas) are small enough, they move. That is why most migrants are young adults: they have the most to gain from a better job and the fewest ties holding them back. For refugees the comparison is brutally simple — staying means danger — so the push overwhelms every obstacle, and they usually go to the **nearest safe place**, which is why most refugees end up in neighbouring countries rather than far-off rich ones.",
      strategies: ["Social / economic / environmental (SEE)", "Compare and contrast", "Use figures from the source", "Think at different scales"],
      thinkDeeper:
        "Singapore's foreign workers fill jobs in construction and care that might otherwise go unfilled — but they usually cannot settle permanently. Who gains most from this kind of migration: the migrants, their home countries (which receive money sent home), or Singapore? Can all three gain?",
    },
    // ------------------------------------------------------------------
    {
      id: "significance-of-factors",
      heading: "Weighing up the factors",
      discovery: {
        problem:
          "Singapore's resident TFR is about 0.97 (2023) — far below replacement level — yet its total population has grown over the long term (apart from a dip during COVID-19), reaching about 6.0 million in 2024. Niger's population is also growing fast, but for a completely different reason. Which 'tap' in the population change equation matters most in each country — and how could you *prove* it?",
        idea:
          "The most significant factor is **not the same everywhere**. In Singapore, net migration (immigrants − emigrants) does much more to grow the population than natural increase does. In Niger, a very high birth rate (TFR about 6) and a falling death rate drive almost all the growth; migration hardly matters. To judge significance you compare the **size** of each component, using figures — then explain *why* it is so large.",
      },
      body:
        "Exam questions such as *'How significant is…'* or *'To what extent…'* want a **judgement**, not just a list. Here is how to weigh factors like a geographer.\n\n**Step 1 — Split the change into its parts.** Use the equation and work out which part is biggest:\n\n    Population change = natural increase + net migration\n\n**Step 2 — Use criteria to judge significance.**\n- **Size** — how many people does the factor add or remove? Use figures.\n- **Speed** — does it change the population fast or slowly?\n- **Duration** — is it a short shock (a pandemic) or a long-term trend (falling fertility)?\n- **Root cause** — does it drive other factors? Women's education, for example, lowers birth rates *and* infant mortality.\n- **Place and time** — the answer changes with the country and the decade.\n\n**Step 3 — Compare places.**\n\n| | Singapore | Niger |\n|---|---|---|\n| TFR | about 0.97 (2023, residents) | about 6 |\n| Main driver of growth | net migration | natural increase |\n| Key causes | high cost of children, careers, later marriage; economy attracts foreign workers | early marriage, little schooling for girls, children as farm labour, limited contraception |\n| Death rate story | ageing population, so deaths are rising | death rate falling, but infant mortality still high |\n\n**Step 4 — Write PEEL paragraphs and a conclusion.**\n- **P**oint: state the factor and your view of how significant it is.\n- **E**vidence: a figure or example (TFR 0.97; roughly 30% non-residents).\n- **E**xplain: why the factor has such a big (or small) effect.\n- **L**ink: back to the question — 'so this factor is the most/less significant because…'.\n\nAlways write a **counter-paragraph** (what else matters?), then a **conclusion** that makes a clear judgement *and* says what it depends on.\n\n**Other places to test your judgement**\n- **Japan** — very low fertility (TFR about 1.2) and an ageing population mean deaths outnumber births, and only limited immigration; its population has been falling since around 2010.\n- **UK** — natural increase is now small, so in recent years most of the UK's population growth has come from net migration.\n- **Bangladesh** — fertility fell from about 6–7 to about 2, so natural increase has slowed sharply: education and family planning were highly significant.\n\nA strong conclusion often says: *'Factor X is the most significant here because… but this depends on…'* — and never 'all factors are equally important', which avoids making a judgement.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two bathtub models of population change. Singapore: a thin births tap and a thick immigrants tap flow in, with thin deaths and medium emigrants outflows, so the population grows mainly through migration. Niger: a very thick births tap and a very thin immigrants tap flow in, with a medium deaths outflow and a thin emigrants outflow, so the population grows fast through births. Arrow widths show rough relative size and are not to scale."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="240" y="20" font-size="12" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">Change = (births − deaths) + (immigrants − emigrants)</text><line x1="240" y1="34" x2="240" y2="282" stroke="#d6d3d1" stroke-width="1.5"/><g><text x="120" y="46" font-size="13" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">SINGAPORE</text><text x="120" y="62" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">few births, many migrants</text><rect x="52" y="155" width="136" height="58" fill="#bae6fd"/><path d="M50,125 L50,215 L190,215 L190,125" fill="none" stroke="#1f2937" stroke-width="2.5"/><text x="120" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">Population</text><text x="120" y="196" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">grows via migrants</text><polygon points="77.5,80 82.5,80 82.5,128 88.5,128 80,138 71.5,128 77.5,128" fill="#bbf7d0" stroke="#1f2937"/><polygon points="142,80 158,80 158,128 164,128 150,138 136,128 142,128" fill="#bbf7d0" stroke="#1f2937"/><polygon points="78,215 82,215 82,260 88,260 80,270 72,260 78,260" fill="#fecaca" stroke="#1f2937"/><polygon points="146,215 154,215 154,260 160,260 150,270 140,260 146,260" fill="#fecaca" stroke="#1f2937"/><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="67" y="108" text-anchor="end">Births</text><text x="168" y="108">Immigrants</text><text x="68" y="248" text-anchor="end">Deaths</text><text x="164" y="248">Emigrants</text></g></g><g transform="translate(240,0)"><text x="120" y="46" font-size="13" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">NIGER</text><text x="120" y="62" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">many births, few migrants</text><rect x="52" y="155" width="136" height="58" fill="#bae6fd"/><path d="M50,125 L50,215 L190,215 L190,125" fill="none" stroke="#1f2937" stroke-width="2.5"/><text x="120" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">Population</text><text x="120" y="196" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">grows fast via births</text><polygon points="72,80 88,80 88,128 94,128 80,138 66,128 72,128" fill="#bbf7d0" stroke="#1f2937"/><polygon points="149,80 151,80 151,128 157,128 150,138 143,128 149,128" fill="#bbf7d0" stroke="#1f2937"/><polygon points="77.5,215 82.5,215 82.5,260 88.5,260 80,270 71.5,260 77.5,260" fill="#fecaca" stroke="#1f2937"/><polygon points="148.5,215 151.5,215 151.5,260 157.5,260 150,270 142.5,260 148.5,260" fill="#fecaca" stroke="#1f2937"/><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="62" y="108" text-anchor="end">Births</text><text x="161" y="108">Immigrants</text><text x="67" y="248" text-anchor="end">Deaths</text><text x="161" y="248">Emigrants</text></g></g><text x="240" y="300" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Green = inflows, red = outflows. Arrow widths show rough relative size (not to scale).</text></svg>`,
      diagramCaption:
        "The 'bathtub' model of population change. In Singapore the immigration tap is the big one; in Niger the births tap dominates. Judging significance means comparing the size of the taps.",
      workedExamples: [
        {
          title: "Model 6-mark answer, built up with PEEL",
          problem:
            "'Migration is the most significant factor in Singapore's population change.' To what extent do you agree? [6 marks]",
          steps: [
            "Decode the question: *to what extent* means weigh both sides and reach a judgement. Plan: one PEEL paragraph for, one against, then a conclusion.",
            "**Paragraph 1 (agree).** P: Migration is very significant because natural increase is now small. E: Singapore's resident TFR was about 0.97 in 2023, far below the replacement level of 2.1, while non-residents made up roughly 30% of the population in 2024. E: With so few births, the resident population cannot grow much by itself, so the growth in the total population comes mainly from foreign workers and new permanent residents and citizens. L: So migration is currently the main driver of Singapore's growth.",
            "**Paragraph 2 (disagree / counter-argument).** P: However, births and deaths still matter. E: Most Singapore citizens are born in Singapore, and as the population ages the number of deaths is rising. E: In the long run, the low birth rate and ageing are what *create* the need for migrants — and migration itself depends on government policy, which can tighten or loosen work passes. L: So natural change and policy are the underlying causes, even if migration is the biggest flow.",
            "**Conclusion.** Make a clear judgement and say what it depends on: 'I largely agree. Migration is the most significant factor in the *size* of Singapore's population change today because natural increase is so small. But the very low birth rate is the reason migration matters so much, so the two are linked — and if the government reduced foreign worker numbers, natural change would become relatively more important.'",
          ],
          answer:
            "I largely agree. Singapore's resident TFR was about 0.97 in 2023, well below the replacement level of 2.1, so natural increase adds few people, while non-residents made up roughly 30% of the population in 2024. Migration is therefore the main reason the total population has kept growing. However, births and deaths still matter: most citizens are born locally, deaths are rising as the population ages, and the very low birth rate is the underlying reason Singapore relies on migrants. Migration also depends on government policy. Overall, migration is the most significant factor in the size of Singapore's population change today, but only because fertility is so low — the two factors are closely linked.",
          yourTurn: {
            question:
              "Your turn: in one year a country of 1,000,000 people has 9,000 births, 7,000 deaths, 30,000 immigrants and 10,000 emigrants. What percentage of its total population growth came from net migration? Give your answer to the nearest whole number.",
            answer: { type: "number", value: 91, tolerance: 0.5, display: "91%" },
            solution:
              "Natural increase = 9,000 − 7,000 = 2,000. Net migration = 30,000 − 10,000 = 20,000. Total growth = 22,000. Share from migration = 20,000 ÷ 22,000 × 100 = 90.9…% ≈ 91%. Migration is clearly the most significant component here.",
          },
        },
        {
          title: "Reading the resource: which component wins?",
          problem:
            "Country A (similar to Niger) has a birth rate of 45 per 1,000, a death rate of 8 per 1,000 and a net migration rate of −1 per 1,000. Which component of population change is most significant, and how do you know?",
          steps: [
            "Natural increase = 45 − 8 = 37 per 1,000.",
            "Net migration = −1 per 1,000 (slightly more people leave than arrive).",
            "Total change = 37 + (−1) = 36 per 1,000, or 3.6% a year.",
            "Compare the sizes: 37 is far bigger than 1, so natural increase is overwhelmingly the most significant component. Migration slightly *reduces* growth but makes little difference.",
          ],
          answer: "Natural increase (+37 per 1,000) is far more significant than net migration (−1 per 1,000).",
          yourTurn: {
            question:
              "Your turn: for Country A above, name the component of population change (two words) that is most significant.",
            answer: {
              type: "text",
              accept: ["natural increase", "natural change", "natural population increase", "natural growth"],
            },
            solution:
              "**Natural increase** (births minus deaths): +37 per 1,000 compared with net migration of only −1 per 1,000.",
          },
        },
      ],
      keyPoints: [
        "The most significant factor depends on the place and the time.",
        "Judge significance with criteria: size, speed, duration, root cause, place and time.",
        "Singapore: TFR about 0.97 (2023) — net migration drives most growth.",
        "Niger: TFR about 6 — natural increase drives almost all growth.",
        "Write PEEL paragraphs for both sides, then a conclusion that makes a clear judgement and says what it depends on.",
      ],
      whyItWorks:
        "Population change is literally a sum of parts, so the 'most significant factor' is simply the part that changes the total most — which you can measure. But numbers only show *which* tap is biggest; geography explains *why*. Behind each tap sit deeper causes: Singapore's tiny births tap comes from costs, careers and later marriage, and its big immigration tap comes from a strong economy and government work-pass policy. Good judgements therefore work at two levels — the **measurable component** (natural increase or net migration) and the **underlying cause** (education, economy, policy, conflict). Linking the two is what turns a list into an argument.",
      strategies: ["Weigh both sides then judge", "PEEL paragraph", "Use figures from the source", "Compare and contrast", "Think at different scales"],
      thinkDeeper:
        "Women's education doesn't appear in the population change equation at all — yet many geographers call it the most significant factor in world population change. How can a factor that is not one of the four 'taps' be the most significant? (Hint: what does it change?)",
    },
  ],
  learn: {
    flashcards: [
      { front: "Population change equation", back: "Population change = (births − deaths) + (immigrants − emigrants)." },
      { front: "Natural increase", back: "Births minus deaths. If deaths are greater, it is a natural decrease." },
      { front: "Net migration", back: "Immigrants minus emigrants. Positive = more arrive than leave." },
      { front: "Birth rate", back: "The number of live births per 1,000 people per year." },
      { front: "Death rate", back: "The number of deaths per 1,000 people per year." },
      { front: "Total fertility rate (TFR)", back: "The average number of children a woman is expected to have in her lifetime." },
      { front: "Replacement level fertility", back: "A TFR of about 2.1 — enough children to replace both parents in the long run." },
      { front: "Life expectancy", back: "The average number of years a newborn baby can expect to live." },
      { front: "Infant mortality rate", back: "The number of babies who die before their first birthday per 1,000 live births." },
      { front: "Push factor", back: "Something that drives people away from a place, e.g. war, unemployment, drought." },
      { front: "Pull factor", back: "Something that attracts people to a place, e.g. jobs, higher wages, safety." },
      { front: "Refugee", back: "Someone who has fled their country because of a well-founded fear of persecution, war or violence." },
      { front: "Asylum seeker", back: "Someone who has asked for protection as a refugee and is waiting for a decision." },
      { front: "Internally displaced person (IDP)", back: "Someone forced to flee their home who is still inside their own country." },
      { front: "Economic migrant", back: "A voluntary migrant who moves mainly to find work or earn higher wages." },
      { front: "Singapore's resident TFR", back: "About 0.97 (2023) — far below replacement level." },
      { front: "Niger's TFR", back: "About 6 children per woman (estimates about 6–7) — one of the highest in the world." },
      { front: "Rate of natural increase (%)", back: "(Birth rate − death rate) ÷ 10, when both rates are per 1,000." },
      { front: "Pro-natalist vs anti-natalist", back: "Pro-natalist policies encourage more births (Singapore's Baby Bonus); anti-natalist policies discourage them (China's One-Child Policy, 1980–2015)." },
    ],
    mustKnow: [
      "Can you write the population change equation and use it with real numbers, including negative values?",
      "Can you calculate natural increase, net migration and the rate of natural increase as a percentage?",
      "Can you define birth rate, death rate, TFR, life expectancy and infant mortality rate?",
      "Can you explain at least four reasons why birth rates fall as countries develop?",
      "Can you explain why educating women is often seen as the most powerful factor lowering birth rates?",
      "Can you explain at least four reasons why death rates fall, and three things that make them rise?",
      "Can you explain why an ageing country like Japan can have a higher crude death rate than Niger?",
      "Can you sort push and pull factors into social, economic, environmental and political?",
      "Can you tell the difference between voluntary and forced migration, and between a refugee, an asylum seeker and an IDP?",
      "Can you describe Singapore's foreign workforce and why Singapore relies on it?",
      "Can you quote Singapore's resident TFR (about 0.97, 2023) and Niger's TFR (about 6)?",
      "Can you write a PEEL answer with a counter-argument and a conclusion that makes a supported judgement?",
    ],
    misconceptions: [
      {
        wrong: "Poor countries have high birth rates because people don't know any better.",
        right: "High birth rates are usually a sensible response to circumstances: high infant mortality, children working on farms and no pensions. When those circumstances change, birth rates fall.",
      },
      {
        wrong: "A country with excellent healthcare must have a low death rate.",
        right: "The crude death rate depends on age structure too. Japan's very old population gives it a higher death rate than Niger's very young one.",
      },
      {
        wrong: "Refugees and economic migrants are the same thing.",
        right: "Economic migrants choose to move for work (voluntary). Refugees are forced to flee persecution, war or violence and are protected under international law.",
      },
      {
        wrong: "Most refugees go to rich countries in Europe and North America.",
        right: "Most forcibly displaced people stay inside their own country or move to a neighbouring country — often a lower- or middle-income one.",
      },
      {
        wrong: "A TFR of 2.0 means the population is definitely growing.",
        right: "Replacement level is about 2.1, so a TFR of 2.0 is slightly below it. Without migration the population would eventually shrink (though it may grow for a while if many young adults are still having children).",
      },
      {
        wrong: "If the birth rate is higher than the death rate, the population must be growing.",
        right: "Only if migration doesn't cancel it out. A large negative net migration can make a population shrink even with natural increase.",
      },
      {
        wrong: "Pull factors are always good things and push factors are always bad things for everyone.",
        right: "They are about the migrant's view of a place. And a move usually involves both: a push from the origin and a pull to the destination.",
      },
      {
        wrong: "Giving parents money will quickly raise a very low birth rate.",
        right: "Cash incentives like the Baby Bonus help, but costs of housing and childcare, working hours and later marriage are powerful too — Singapore's TFR has stayed below 1.",
      },
    ],
    examMistakes: [
      "Writing births − deaths and forgetting migration when asked for *total* population change.",
      "Getting the signs wrong: net migration is immigrants − emigrants, not the other way round.",
      "Forgetting that rates are 'per 1,000' — divide by 10 to turn a rate into a percentage.",
      "Calling TFR the 'birth rate': TFR is children per woman; birth rate is births per 1,000 people.",
      "Listing factors without explaining *how* each one changes the birth or death rate (no cause → process → effect).",
      "Using 'refugee' for any migrant — only people fleeing persecution, war or violence across a border are refugees.",
      "In 'to what extent' answers, never giving a judgement, or saying 'all factors are equally important'.",
      "Quoting figures without 'about' and a year (e.g. Singapore's resident TFR is about 0.97 in 2023, not a permanent fixed number).",
    ],
    mnemonics: [
      {
        topic: "The four components of population change",
        device: "BIDE",
        explanation: "**B**irths + **I**mmigrants − **D**eaths − **E**migrants. B and I fill the bathtub; D and E drain it.",
      },
      {
        topic: "Sorting push and pull factors",
        device: "SEEP",
        explanation: "**S**ocial, **E**conomic, **E**nvironmental, **P**olitical — sort every push or pull factor into one of these four boxes.",
      },
      {
        topic: "Writing an evaluation paragraph",
        device: "PEEL",
        explanation: "**P**oint, **E**vidence, **E**xplain, **L**ink back to the question. Do one for each side, then conclude with a judgement.",
      },
      {
        topic: "Why birth rates fall",
        device: "Girls, Pills, Bills, Cities",
        explanation: "**Girls** (education and empowerment of women), **Pills** (contraception), **Bills** (cost of raising children), **Cities** (urbanisation turns children from workers into costs).",
      },
    ],
    realWorld: [
      {
        title: "Singapore's Baby Bonus",
        detail:
          "Since 2001 Singapore has given cash gifts and savings support to parents, alongside paid parental leave and priority for HDB flats. Even so, the resident TFR was about 0.97 in 2023 — a reminder that policy alone cannot easily overcome high costs and busy lives.",
        emoji: "👶",
      },
      {
        title: "Singapore's foreign workforce",
        detail:
          "Employment Pass, S Pass and Work Permit holders work in everything from finance to construction and domestic care. Non-residents made up roughly 30% of Singapore's population in 2024 — a key reason the total population keeps growing despite very low fertility.",
        emoji: "🏗️",
      },
      {
        title: "Niger's young population",
        detail:
          "With a TFR of about 6 and a median age of about 15, Niger has one of the youngest and fastest-growing populations in the world. Keeping girls in school is widely seen as key to future change.",
        emoji: "🌍",
      },
      {
        title: "Bangladesh's fertility fall",
        detail:
          "Bangladesh's TFR fell from about 6–7 in the early 1970s to about 2 today, helped by girls' schooling, village health workers bringing contraception, and falling child deaths.",
        emoji: "📉",
      },
      {
        title: "Japan's shrinking population",
        detail:
          "With a TFR of about 1.2 and an ageing population, deaths in Japan now outnumber births each year, and its population has been falling since around 2010.",
        emoji: "🗾",
      },
      {
        title: "Forced migration worldwide",
        detail:
          "UNHCR reported more than 100 million people forcibly displaced worldwide by 2023, from conflicts such as those in Syria, Ukraine and Sudan and from persecution such as that faced by the Rohingya — most hosted inside their own countries or by neighbours.",
        emoji: "⛺",
      },
    ],
    videos: [
      {
        title: "200 Countries, 200 Years, 4 Minutes — how life expectancy changed",
        channel: "BBC / Hans Rosling",
        url: "https://www.youtube.com/results?search_query=hans+rosling+200+countries+200+years+4+minutes",
      },
      {
        title: "Push and pull factors of migration",
        channel: "Time for Geography",
        url: "https://www.youtube.com/results?search_query=time+for+geography+push+and+pull+factors+migration",
      },
      {
        title: "Why birth rates fall: fertility and development",
        channel: "Search: geography explainer",
        url: "https://www.youtube.com/results?search_query=why+do+birth+rates+fall+as+countries+develop+geography",
      },
      {
        title: "Singapore's low fertility rate explained",
        channel: "Search: news explainer",
        url: "https://www.youtube.com/results?search_query=singapore+low+fertility+rate+explained",
      },
    ],
    formulas: [
      { name: "Population change", formula: "(Births − deaths) + (immigrants − emigrants)" },
      { name: "Natural increase", formula: "Births − deaths (a negative answer is a natural decrease)" },
      { name: "Net migration", formula: "Immigrants − emigrants" },
      { name: "Birth rate", formula: "Live births per 1,000 people per year = births ÷ population × 1,000" },
      { name: "Death rate", formula: "Deaths per 1,000 people per year = deaths ÷ population × 1,000" },
      { name: "Rate of natural increase (%)", formula: "(Birth rate − death rate) ÷ 10, with both rates per 1,000", note: "e.g. (45 − 9) ÷ 10 = 3.6%" },
      { name: "Total fertility rate (TFR)", formula: "The average number of children a woman is expected to have in her lifetime" },
      { name: "Replacement level fertility", formula: "A TFR of about 2.1" },
      { name: "Life expectancy", formula: "The average number of years a newborn baby can expect to live" },
      { name: "Infant mortality rate", formula: "Deaths of babies under one year old per 1,000 live births" },
      { name: "Migration", formula: "The movement of people from one place to another to live, usually for at least a year" },
      { name: "Push / pull factors", formula: "Push: drives people away from the origin. Pull: attracts people to the destination." },
      { name: "Voluntary vs forced migration", formula: "Voluntary: people choose to move. Forced: people must move to survive (war, persecution, disaster)." },
      { name: "Refugee", formula: "A person who has fled their country because of a well-founded fear of persecution, war or violence" },
      { name: "Asylum seeker", formula: "A person who has applied for protection as a refugee and is awaiting a decision" },
      { name: "Internally displaced person (IDP)", formula: "A person forced from home who remains inside their own country" },
      { name: "Key figures", formula: "Singapore resident TFR about 0.97 (2023); Niger TFR about 6; world life expectancy about 73 (2023)" },
    ],
  },
};
