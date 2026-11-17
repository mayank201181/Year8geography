import type { Paper, TopicPractice } from "../../types.ts";

const pushPullDiagram = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Push-pull diagram for Rahim, who moves from a village in rural Bangladesh to Singapore. Push factors at home: low farm wages, few jobs outside farming, fields often flooded. Pull factors in Singapore: construction jobs available, wages several times higher, money can be sent home to the family."><rect x="0" y="0" width="460" height="230" fill="#ffffff"/><rect x="10" y="40" width="180" height="160" fill="#fecaca" stroke="#334155"/><rect x="270" y="40" width="180" height="160" fill="#bbf7d0" stroke="#334155"/><text x="100" y="24" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Origin: rural Bangladesh</text><text x="360" y="24" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Destination: Singapore</text><text x="100" y="64" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">PUSH factors</text><text x="20" y="96" font-size="11" font-family="sans-serif" fill="#1f2937">• Farm wages are low</text><text x="20" y="128" font-size="11" font-family="sans-serif" fill="#1f2937">• Few jobs outside farming</text><text x="20" y="160" font-size="11" font-family="sans-serif" fill="#1f2937">• Fields often flooded</text><text x="360" y="64" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">PULL factors</text><text x="280" y="96" font-size="11" font-family="sans-serif" fill="#1f2937">• Construction jobs available</text><text x="280" y="128" font-size="11" font-family="sans-serif" fill="#1f2937">• Wages several times higher</text><text x="280" y="160" font-size="11" font-family="sans-serif" fill="#1f2937">• Money can be sent home</text><line x1="196" y1="120" x2="258" y2="120" stroke="#1f2937" stroke-width="3"/><polygon points="258,112 268,120 258,128" fill="#1f2937"/><text x="230" y="110" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Rahim</text><text x="230" y="218" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">He signs a two-year work contract.</text></svg>`;

const migrationBarChart = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of immigrants and emigrants for Country Y in thousands. 2005: 40 immigrants, 25 emigrants. 2010: 55 immigrants, 20 emigrants. 2015: 30 immigrants, 35 emigrants. 2020: 20 immigrants, 30 emigrants."><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><line x1="60" y1="70" x2="60" y2="250" stroke="#1f2937"/><line x1="60" y1="250" x2="450" y2="250" stroke="#1f2937"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="54" y="254">0</text><text x="54" y="194">20</text><text x="54" y="134">40</text><text x="54" y="74">60</text></g><g stroke="#cbd5e1"><line x1="60" y1="190" x2="450" y2="190"/><line x1="60" y1="130" x2="450" y2="130"/><line x1="60" y1="70" x2="450" y2="70"/></g><text x="18" y="160" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 18 160)">People (thousands)</text><rect x="80" y="130" width="30" height="120" fill="#c7d2fe" stroke="#334155"/><rect x="112" y="175" width="30" height="75" fill="#fecaca" stroke="#334155"/><rect x="180" y="85" width="30" height="165" fill="#c7d2fe" stroke="#334155"/><rect x="212" y="190" width="30" height="60" fill="#fecaca" stroke="#334155"/><rect x="280" y="160" width="30" height="90" fill="#c7d2fe" stroke="#334155"/><rect x="312" y="145" width="30" height="105" fill="#fecaca" stroke="#334155"/><rect x="380" y="190" width="30" height="60" fill="#c7d2fe" stroke="#334155"/><rect x="412" y="160" width="30" height="90" fill="#fecaca" stroke="#334155"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="95" y="125">40</text><text x="127" y="170">25</text><text x="195" y="80">55</text><text x="227" y="185">20</text><text x="295" y="155">30</text><text x="327" y="140">35</text><text x="395" y="185">20</text><text x="427" y="155">30</text><text x="111" y="268">2005</text><text x="211" y="268">2010</text><text x="311" y="268">2015</text><text x="411" y="268">2020</text></g><rect x="80" y="20" width="14" height="12" fill="#c7d2fe" stroke="#334155"/><text x="100" y="31" font-size="12" font-family="sans-serif" fill="#1f2937">Immigrants</text><rect x="200" y="20" width="14" height="12" fill="#fecaca" stroke="#334155"/><text x="220" y="31" font-size="12" font-family="sans-serif" fill="#1f2937">Emigrants</text><text x="255" y="292" font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle">Year</text></svg>`;

const paper1: Paper = {
  id: "population-change-p1",
  title: "Practice Paper 1",
  questions: [
    {
      kind: "short",
      id: "population-change-p1-q01",
      question:
        "Name the measure that counts the number of babies who die before their first birthday for every 1,000 live births.",
      answer: { type: "text", accept: ["infant mortality rate", "infant mortality", "imr", "infant death rate"] },
      traps: [
        { spec: { type: "text", accept: ["death rate"] }, feedback: "The death rate counts deaths of people of all ages per 1,000 people. This measure is only about babies under one." },
        { spec: { type: "text", accept: ["child mortality rate"] }, feedback: "Close — but child mortality usually means children under five. Under one year old is infant mortality." },
      ],
      solution: [
        "The **infant mortality rate** = deaths of babies under one year old per 1,000 live births per year.",
        "It is one of the best single measures of a country's healthcare and living conditions.",
      ],
      difficulty: "warmup",
      guideRef: "death-rate-factors",
      hints: ["'Infant' means a baby under one year old."],
    },
    {
      kind: "short",
      id: "population-change-p1-q02",
      question:
        "A country of 5,000,000 people recorded 110,000 live births in one year. Calculate its birth rate in births per 1,000 people per year.",
      answer: { type: "number", value: 22 },
      traps: [
        { spec: { type: "number", value: 2.2 }, feedback: "2.2 is the number of births per 100 people (a percentage). The birth rate is per 1,000 — multiply by 1,000, not 100." },
        { spec: { type: "number", value: 0.022 }, feedback: "That is births per person. Multiply by 1,000 to get births per 1,000 people." },
      ],
      solution: [
        "Birth rate = births ÷ population × 1,000.",
        "110,000 ÷ 5,000,000 = 0.022",
        "0.022 × 1,000 = **22 births per 1,000 people per year**.",
      ],
      solutions: [
        { label: "Scale down", steps: ["5,000,000 people is 5,000 groups of 1,000.", "110,000 ÷ 5,000 = 22 births in each group of 1,000."] },
      ],
      commonError: "Multiplying by 100 instead of 1,000 and giving a percentage.",
      difficulty: "core",
      guideRef: "birth-rate-factors",
      hints: ["Birth rate is births per 1,000 people.", "How many groups of 1,000 people are there in 5,000,000?", "Divide 110,000 by that number of groups."],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "population-change-p1-q03",
      question:
        "A country has a birth rate of 22 per 1,000 and a death rate of 7 per 1,000. Ignoring migration, calculate its rate of natural increase as a **percentage** per year.",
      answer: { type: "number", value: 1.5, display: "1.5%" },
      traps: [
        { spec: { type: "number", value: 15 }, feedback: "15 is the natural increase per 1,000. To give a percentage (per 100), divide by 10." },
        { spec: { type: "number", value: 2.9 }, feedback: "You added the two rates. Natural increase = birth rate − death rate." },
      ],
      solution: [
        "Natural increase = birth rate − death rate = 22 − 7 = 15 per 1,000.",
        "Per 1,000 → per 100: 15 ÷ 10 = **1.5% per year**.",
      ],
      commonError: "Leaving the answer as 15 (per 1,000) when a percentage was asked for.",
      difficulty: "core",
      guideRef: "birth-rate-factors",
      hints: ["First subtract the death rate from the birth rate.", "Your answer is per 1,000. A percentage is per 100 — what do you divide by?"],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "population-change-p1-q04",
      question: "Which of these is an example of **voluntary** migration?",
      options: [
        "A Rohingya family fleeing persecution in Myanmar",
        "Residents evacuated after a nuclear accident",
        "An engineer from India taking a better-paid job in Singapore",
        "Villagers escaping rising floodwater that has destroyed their homes",
      ],
      answerIndex: 2,
      explanation:
        "The engineer chose to move for a better job — voluntary (economic) migration. Fleeing persecution, being evacuated after an accident and escaping floods all leave people no real choice, so they are forced migration.",
      difficulty: "warmup",
      guideRef: "migration",
      hints: ["Voluntary = the person chose to move. Which person had a real choice?"],
      strategy: "Eliminate options",
    },
    {
      kind: "written",
      id: "population-change-p1-q05",
      question:
        "Give **one** push factor and **one** pull factor that might encourage a young person to move from a village in rural Indonesia to Jakarta. [2 marks]",
      marks: 2,
      modelAnswer:
        "Push factor: there are few paid jobs in the village apart from low-wage farm work.\n\nPull factor: Jakarta offers more jobs, for example in factories, shops and offices, with higher wages.",
      markScheme: [
        { point: "A valid push factor at the village (e.g. few jobs, low farm wages, poor services, crop failure, natural hazard)", keywords: ["few jobs", "no jobs", "low wages", "poor", "farm", "crop", "drought", "flood", "no school", "no hospital", "lack"] },
        { point: "A valid pull factor in Jakarta (e.g. jobs, higher wages, better schools/hospitals, bright lights)", keywords: ["jobs", "higher wages", "more money", "better pay", "schools", "university", "hospital", "services", "entertainment", "opportunities"] },
      ],
      commonError: "Writing two pull factors, or giving a push factor that is really about the city (e.g. 'better hospitals').",
      difficulty: "warmup",
      guideRef: "migration",
      hints: ["Push = a problem in the village. Pull = an attraction in Jakarta."],
      strategy: "Use the command word",
    },
    {
      kind: "written",
      id: "population-change-p1-q06",
      question:
        "Study the table for Country Z.\n\n| Year | 1960 | 1990 | 2020 |\n|---|---|---|---|\n| Death rate (per 1,000) | 22 | 12 | 6 |\n| Life expectancy (years) | 46 | 58 | 72 |\n| Infant mortality (per 1,000 live births) | 160 | 100 | 25 |\n\nDescribe the changes shown in the table. Use figures in your answer. [3 marks]",
      marks: 3,
      modelAnswer:
        "Between 1960 and 2020 the death rate fell steadily, from 22 to 6 per 1,000 — a fall of 16 per 1,000. Over the same period life expectancy rose by 26 years, from 46 to 72. Infant mortality fell most dramatically, from 160 to 25 per 1,000 live births, and its fastest fall came after 1990 (from 100 to 25).",
      markScheme: [
        { point: "Death rate fell, with figures (22 → 6 per 1,000 / fell by 16)", keywords: ["death rate fell", "22", "6", "16", "decreased", "fell"] },
        { point: "Life expectancy rose, with figures (46 → 72 / +26 years)", keywords: ["life expectancy", "46", "72", "26", "rose", "increased"] },
        { point: "Infant mortality fell sharply, with figures (160 → 25), or a valid comment on rate of change (e.g. fastest fall after 1990)", keywords: ["infant mortality", "160", "25", "sharply", "fastest", "after 1990"] },
      ],
      commonError: "Explaining *why* the figures changed instead of describing *what* changed — 'describe' needs trends and figures, not reasons.",
      difficulty: "core",
      guideRef: "death-rate-factors",
      hints: ["Take each row in turn: did it go up or down?", "Quote the start and end figures, and work out the change.", "Is there a row that changed especially quickly in one period?"],
      strategy: "TEA (Trend, Evidence, Anomaly)",
    },
    {
      kind: "written",
      id: "population-change-p1-q07",
      question:
        "Explain how improvements in healthcare and clean water can cause a country's death rate to fall. [4 marks]",
      marks: 4,
      modelAnswer:
        "Vaccination programmes protect children against diseases such as measles and polio, so far fewer children die young. More doctors, clinics and medicines (such as antibiotics) mean illnesses and injuries that were once fatal can now be treated.\n\nClean piped water and proper sanitation stop water-borne diseases such as cholera and diarrhoea from spreading. Because young children are most at risk from these diseases, infant mortality falls, which lowers the overall death rate and raises life expectancy.",
      markScheme: [
        { point: "Vaccination prevents deadly diseases (e.g. measles, polio)", keywords: ["vaccin", "immunis", "measles", "polio", "jab"] },
        { point: "More doctors/clinics/medicines mean illness can be treated", keywords: ["doctor", "clinic", "hospital", "medicine", "antibiotic", "treat", "nurse"] },
        { point: "Clean water / sanitation stops water-borne diseases (e.g. cholera, diarrhoea)", keywords: ["clean water", "sanitation", "sewer", "toilet", "cholera", "diarrhoea", "water-borne", "waterborne"] },
        { point: "Develops the effect: fewer children/infants die, so death rate falls / life expectancy rises", keywords: ["infant", "children", "fewer deaths", "death rate falls", "life expectancy", "live longer"] },
      ],
      commonError: "Listing 'better healthcare' without explaining *how* it stops people dying.",
      difficulty: "core",
      guideRef: "death-rate-factors",
      hints: ["Give two separate improvements: one about healthcare, one about water.", "For each, say which diseases it stops or treats.", "Finish the chain: who survives who would once have died?"],
      strategy: "Cause → process → effect",
    },
    {
      kind: "short",
      id: "population-change-p1-q08",
      question:
        "Island A starts the year with 400,000 people.\n\n| Births | Deaths | Immigrants | Emigrants |\n|---|---|---|---|\n| 3,200 | 2,800 | 5,100 | 1,700 |\n\nCalculate the **total population change** for the year (number of people).",
      answer: { type: "number", value: 3800, display: "+3,800 people" },
      traps: [
        { spec: { type: "number", value: 400 }, feedback: "+400 is only the natural change. You also need to add net migration." },
        { spec: { type: "number", value: 3400 }, feedback: "+3,400 is only the net migration. Add the natural change too." },
        { spec: { type: "number", value: 403800 }, feedback: "That is the population at the END of the year. The question asks for the change." },
      ],
      solution: [
        "Natural change = births − deaths = 3,200 − 2,800 = +400.",
        "Net migration = immigrants − emigrants = 5,100 − 1,700 = +3,400.",
        "Total change = 400 + 3,400 = **+3,800 people**.",
      ],
      commonError: "Calculating only one of the two parts of population change.",
      difficulty: "core",
      guideRef: "significance-of-factors",
      hints: ["Population change = natural change + net migration.", "Work out each part separately, then add."],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "population-change-p1-q09",
      question:
        "On Island A, natural change was +400 people and net migration was +3,400 people, giving a total change of +3,800. What **percentage** of the total population change came from net migration? Give your answer to the nearest whole number.",
      answer: { type: "number", value: 89, tolerance: 0.5, display: "89%" },
      traps: [
        { spec: { type: "number", value: 11 }, feedback: "11% is the share from natural change. The question asks about net migration." },
        { spec: { type: "number", value: 850 }, feedback: "You divided migration by natural change (3,400 ÷ 400 = 8.5) — that tells you how many times bigger it is, not its share of the total." },
      ],
      solution: [
        "Share from migration = net migration ÷ total change × 100.",
        "3,400 ÷ 3,800 × 100 = 89.47…",
        "≈ **89%** — migration is by far the more significant factor on Island A.",
      ],
      commonError: "Dividing by the natural change (400) instead of the total change (3,800).",
      difficulty: "core",
      guideRef: "significance-of-factors",
      hints: ["A percentage share = part ÷ whole × 100.", "The 'whole' is the total change, 3,800."],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-change-p1-q10",
      question: "Explain why educating girls and women tends to lower the birth rate. [4 marks]",
      marks: 4,
      modelAnswer:
        "Girls who stay in school longer tend to marry and have their first child later, which leaves fewer years for having children. Education also teaches them about contraception and family planning, so they can choose how many children to have.\n\nEducated women are more likely to have careers and earn their own money, so taking time out to raise many children costs them more, and they often want to invest more in each child's education. They also usually have more say in family decisions. Finally, educated mothers know more about health and nutrition, so more of their babies survive — which removes the need to have extra children 'just in case'.",
      markScheme: [
        { point: "Stay in school longer → marry / have first child later → fewer childbearing years", keywords: ["later", "marry later", "delay", "older", "first child", "stay in school"] },
        { point: "Knowledge of and access to contraception / family planning", keywords: ["contraception", "family planning", "contraceptive", "birth control"] },
        { point: "Careers / earning money make children more costly (opportunity cost) or more say in decisions", keywords: ["career", "job", "work", "earn", "income", "cost", "decisions", "independent", "empower"] },
        { point: "Better health knowledge → lower infant mortality → less need for extra children", keywords: ["health", "infant mortality", "survive", "just in case", "nutrition", "hygiene"] },
      ],
      commonError: "Just saying 'educated women are smarter so have fewer children' — you need the chain of steps.",
      difficulty: "core",
      guideRef: "birth-rate-factors",
      hints: ["What happens to the age a woman marries if she stays in school until 18 or 21?", "What might school teach about family planning?", "Think about jobs, money and who makes decisions."],
      strategy: "Cause → process → effect",
    },
    {
      kind: "mcq",
      id: "population-change-p1-q11",
      question: "Why do couples in high-income cities such as Singapore often have only one or two children?",
      options: [
        "Contraception is banned",
        "Children are needed to work in factories",
        "Infant mortality is very high",
        "Housing, childcare and education make each child very expensive, and both parents often work long hours",
      ],
      answerIndex: 3,
      explanation:
        "In wealthy cities children are a large cost — housing, tuition, childcare — and long working hours leave little time, so many couples choose small families. Contraception is easily available, child labour is not part of the economy, and infant mortality in Singapore is among the lowest in the world.",
      difficulty: "core",
      guideRef: "birth-rate-factors",
      hints: ["Three options are false for Singapore.", "Is a child in Singapore mainly an earner or a cost?"],
      strategy: "Eliminate options",
    },
    {
      kind: "written",
      id: "population-change-p1-q12",
      question:
        "Study the push–pull diagram about Rahim.\n\nUsing the diagram, explain why Rahim is described as an **economic migrant** rather than a **refugee**. [3 marks]",
      diagram: pushPullDiagram,
      marks: 3,
      modelAnswer:
        "Rahim is moving mainly to earn money: the pull factors are construction jobs and wages several times higher than at home, and he plans to send money home to his family. He has chosen to move and has signed a two-year work contract, so his migration is voluntary. A refugee, by contrast, is forced to flee their country because of war, violence or persecution — nothing in the diagram shows that Rahim is in danger, even though floods make farming difficult.",
      markScheme: [
        { point: "Uses the diagram: he moves for jobs / higher wages / to send money home", keywords: ["job", "wages", "money", "send home", "construction", "work", "earn"] },
        { point: "His move is voluntary / a choice (work contract)", keywords: ["choice", "chose", "voluntary", "contract", "decided"] },
        { point: "Contrast with refugee: forced to flee war / persecution / danger", keywords: ["refugee", "forced", "flee", "war", "persecution", "danger", "conflict"] },
      ],
      commonError: "Saying the flooding makes him a refugee. Hazards make farming harder, but he is choosing to move for work, not fleeing for his life across a border.",
      difficulty: "core",
      guideRef: "migration",
      hints: ["What does Rahim want from Singapore?", "Did he choose to go, or was he forced?", "Define a refugee, then show Rahim does not fit."],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "population-change-p1-q13",
      question:
        "What is the term for a person who is forced to flee their home but stays **inside** their own country?",
      answer: {
        type: "text",
        accept: ["internally displaced person", "internally displaced people", "internally displaced persons", "idp", "idps", "internally displaced"],
      },
      traps: [
        { spec: { type: "text", accept: ["refugee"] }, feedback: "A refugee has crossed an international border. This person is still inside their own country." },
        { spec: { type: "text", accept: ["internal migrant"] }, feedback: "Close, but 'internal migrant' usually means someone who chose to move. The term for someone FORCED from home within their country is more specific." },
      ],
      solution: [
        "An **internally displaced person (IDP)** has been forced from home — by conflict, disaster or persecution — but has not crossed an international border.",
        "Once someone crosses a border to seek safety, they may become a refugee.",
      ],
      difficulty: "core",
      guideRef: "migration",
      hints: ["They have been 'displaced' (moved from their place).", "Which word means 'within the country'?"],
    },
    {
      kind: "written",
      id: "population-change-p1-q14",
      question:
        "Singapore's resident total fertility rate was about 0.97 in 2023. Suggest why Singapore relies on immigration to keep its workforce growing. [4 marks]",
      marks: 4,
      modelAnswer:
        "Singapore's resident TFR of about 0.97 is less than half the replacement level of 2.1, so each new generation of Singaporeans is much smaller than the one before. As a result, fewer young people are entering the workforce.\n\nAt the same time the population is ageing: people are living longer and many older workers are retiring, so there are more elderly people for each worker to support. Some sectors — such as construction, healthcare and domestic work — already depend on foreign workers to fill jobs. Immigration therefore fills these gaps, keeps the economy growing and helps pay for services for the elderly.",
      markScheme: [
        { point: "TFR 0.97 is far below replacement (2.1) — each generation smaller", keywords: ["0.97", "2.1", "replacement", "below", "low birth rate", "fewer babies", "smaller generation"] },
        { point: "Fewer young people entering the workforce / labour shortage", keywords: ["fewer workers", "shortage", "workforce", "labour", "young people", "fill jobs"] },
        { point: "Ageing population / more retirees to support", keywords: ["ageing", "aging", "elderly", "old", "retire", "dependency", "live longer"] },
        { point: "Migrants fill specific jobs (construction, healthcare, domestic work) / keep the economy growing", keywords: ["construction", "healthcare", "nurses", "domestic", "economy", "foreign workers", "migrants"] },
      ],
      commonError: "Saying the population is falling — Singapore's total population has grown over the long term (apart from a dip during COVID-19), largely because of immigration.",
      difficulty: "core",
      guideRef: "significance-of-factors",
      hints: ["Compare 0.97 with the replacement level.", "What does that mean for the number of new workers in 20 years?", "Who will do jobs such as building and nursing, and look after an ageing population?"],
      strategy: "Cause → process → effect",
    },
    {
      kind: "written",
      id: "population-change-p1-q15",
      question:
        "'Falling death rates were the most significant factor in the rapid growth of the world's population in the 20th century.' To what extent do you agree? [6 marks]",
      marks: 6,
      modelAnswer:
        "I largely agree. In the 20th century vaccination, antibiotics, clean water, sanitation and better food supply caused death rates to fall sharply across Asia, Africa and Latin America. Birth rates stayed high for several decades, so the gap between births and deaths widened — for example, a country with a birth rate of 40 and a death rate falling from 20 to 8 per 1,000 sees natural increase rise from 2.0% to 3.2% a year. This is why world population rose from about 2 billion in 1927 to 6 billion by 1999.\n\nHowever, falling deaths alone would not have caused such fast growth. Birth rates also had to stay high, because of a lack of contraception, children's value as farm workers, high infant mortality in the past and cultural traditions. Where birth rates fell quickly too, as in Japan, growth slowed. Migration is not a factor at all at the world scale, because people moving between countries does not change the global total.\n\nOverall, falling death rates were the most significant **trigger** of rapid growth, because they changed fastest, but they only produced a population explosion because high birth rates continued alongside them.",
      markScheme: [
        { point: "Explains why death rates fell (vaccination, medicine, clean water, food)", keywords: ["vaccin", "antibiotic", "medicine", "clean water", "sanitation", "food", "healthcare"] },
        { point: "Explains that a falling death rate with a high birth rate widens the gap / natural increase", keywords: ["gap", "natural increase", "births exceed deaths", "wider", "difference"] },
        { point: "Uses evidence (e.g. world population 2 bn 1927 → 6 bn 1999, or worked rates)", keywords: ["2 billion", "6 billion", "1927", "1999", "billion", "per 1,000"] },
        { point: "Other side: birth rates had to stay high (no contraception, farm labour, culture, infant mortality)", keywords: ["birth rate", "high birth", "contraception", "farm", "culture", "religion", "infant mortality"] },
        { point: "Recognises migration does not change world population / limits of the claim", keywords: ["migration", "global total", "world total", "does not change", "cancel"] },
        { point: "Justified conclusion weighing the factors", keywords: ["overall", "therefore", "most significant", "trigger", "to a large extent", "conclusion", "partly"] },
      ],
      commonError: "Writing only about death rates and never considering the other side, or forgetting to reach a judgement.",
      difficulty: "challenge",
      guideRef: "significance-of-factors",
      hints: ["Why did death rates fall so quickly in the 20th century?", "Would the population have exploded if birth rates had fallen just as fast?", "Can migration change the WORLD population?", "Finish with 'Overall…' and say how far you agree, and why."],
      strategy: "Weigh both sides then judge",
    },
  ],
};

const paper2: Paper = {
  id: "population-change-p2",
  title: "Practice Paper 2",
  questions: [
    {
      kind: "short",
      id: "population-change-p2-q01",
      question: "What is the term for moving **into** a country to live there?",
      answer: { type: "text", accept: ["immigration", "immigrating", "immigrate", "immigrant"] },
      traps: [
        { spec: { type: "text", accept: ["emigration"] }, feedback: "Emigration is LEAVING a country (E for Exit). Moving IN is im-migration." },
      ],
      solution: ["**Im**migration = moving **in**to a country. **E**migration = **e**xiting a country."],
      difficulty: "warmup",
      guideRef: "migration",
      hints: ["Im- for In, E- for Exit."],
    },
    {
      kind: "short",
      id: "population-change-p2-q02",
      question:
        "Niger's total fertility rate is about 6 children per woman; Singapore's resident TFR was about 0.97 in 2023. Roughly how many **times** higher is Niger's TFR? Give your answer to the nearest whole number.",
      answer: { type: "number", value: 6 },
      traps: [
        { spec: { type: "number", value: 5 }, feedback: "5 is the DIFFERENCE (6 − 0.97 ≈ 5). 'How many times' means divide." },
      ],
      solution: ["How many times = 6 ÷ 0.97 ≈ 6.19.", "To the nearest whole number: about **6 times** higher."],
      commonError: "Subtracting instead of dividing.",
      difficulty: "core",
      guideRef: "significance-of-factors",
      hints: ["'How many times bigger' means divide one by the other.", "6 ÷ 0.97 — is 0.97 close to 1?"],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "population-change-p2-q03",
      question:
        "A country of 2,400,000 people has a death rate of 9 per 1,000. How many people died there in the year?",
      answer: { type: "number", value: 21600 },
      traps: [
        { spec: { type: "number", value: 216000 }, feedback: "You treated 9 per 1,000 as 9 per 100 (9%). Divide the population by 1,000, then multiply by 9." },
        { spec: { type: "number", value: 2160 }, feedback: "Check your place value: 2,400,000 ÷ 1,000 = 2,400 groups, and 2,400 × 9 = 21,600." },
      ],
      solution: [
        "2,400,000 people = 2,400 groups of 1,000.",
        "Deaths = 2,400 × 9 = **21,600**.",
      ],
      commonError: "Using 9% instead of 9 per 1,000.",
      difficulty: "core",
      guideRef: "death-rate-factors",
      hints: ["How many groups of 1,000 people are there?", "Each group has 9 deaths."],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "population-change-p2-q04",
      question:
        "Last year a country's population grew by 12 per 1,000. Its birth rate was 15 per 1,000 and its death rate was 10 per 1,000. Calculate its **net migration rate** per 1,000.",
      answer: { type: "number", value: 7, display: "+7 per 1,000" },
      traps: [
        { spec: { type: "number", value: 17 }, feedback: "You added natural change to total growth. Net migration = total change − natural change." },
        { spec: { type: "number", value: -7 }, feedback: "Check the sign: the population grew by more than natural change alone, so migration must have ADDED people." },
      ],
      solution: [
        "Natural change = 15 − 10 = +5 per 1,000.",
        "Total change = natural change + net migration, so 12 = 5 + net migration.",
        "Net migration = 12 − 5 = **+7 per 1,000**.",
      ],
      commonError: "Forgetting to work backwards from the total.",
      difficulty: "core",
      guideRef: "significance-of-factors",
      hints: ["Start with natural change.", "Total change = natural change + net migration. Which part is missing?"],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "population-change-p2-q05",
      question: "How does a measles vaccination programme reduce the death rate?",
      options: [
        "It gives children immunity, so fewer catch the disease and die from it",
        "It cures people who already have measles",
        "It lowers the birth rate, so fewer babies can die",
        "It cleans the water supply",
      ],
      answerIndex: 0,
      explanation:
        "A vaccine trains the immune system before infection, so children do not catch measles and fewer die. Vaccines prevent disease; they are not a cure for people already ill. Cleaning water is sanitation, a separate improvement.",
      difficulty: "warmup",
      guideRef: "death-rate-factors",
      hints: ["Does a vaccine prevent a disease or cure it?"],
      strategy: "Spot the misconception",
    },
    {
      kind: "written",
      id: "population-change-p2-q06",
      question:
        "Niger has one of the highest fertility rates in the world (about 6 children per woman). Give **two** reasons why birth rates are high in countries like Niger. [2 marks]",
      marks: 2,
      modelAnswer:
        "Many families farm, so children are useful workers and support their parents in old age because there are few pensions. Also, many girls leave school and marry young, so they start having children early and have limited access to contraception.",
      markScheme: [
        { point: "Economic reason: children work on farms / support parents in old age / no pensions", keywords: ["farm", "work", "labour", "old age", "pension", "look after", "support"] },
        { point: "Social reason: early marriage / little education for girls / limited contraception / high infant mortality / cultural or religious value of large families", keywords: ["marry young", "early marriage", "education", "school", "contraception", "infant mortality", "culture", "religion", "tradition"] },
      ],
      commonError: "Giving two versions of the same reason (e.g. 'farm work' and 'help in the fields').",
      difficulty: "warmup",
      guideRef: "birth-rate-factors",
      hints: ["Think of one money-related reason and one social reason."],
      strategy: "Social / economic / environmental (SEE)",
    },
    {
      kind: "written",
      id: "population-change-p2-q07",
      question:
        "Study the data for four countries.\n\n| Country | Girls completing secondary school (%) | Total fertility rate |\n|---|---|---|\n| A | 95 | 1.6 |\n| B | 70 | 2.4 |\n| C | 40 | 4.1 |\n| D | 15 | 6.0 |\n\nDescribe the relationship shown, and suggest why it exists. [4 marks]",
      marks: 4,
      modelAnswer:
        "There is a strong negative relationship: the higher the percentage of girls completing secondary school, the lower the total fertility rate. Country A, where 95% of girls complete secondary school, has a TFR of 1.6, while Country D, with only 15%, has a TFR of 6.0.\n\nThis is probably because girls who stay in school marry and have children later, learn about contraception and family planning, and are more likely to have careers, so they choose smaller families. However, the data only shows a link: richer countries tend to have both more schooling and lower fertility, so wealth and healthcare may also be part of the reason.",
      markScheme: [
        { point: "Identifies negative / inverse relationship (more schooling, lower TFR)", keywords: ["negative", "inverse", "higher", "lower", "the more", "the less", "as", "decreases"] },
        { point: "Uses data from the table (e.g. A 95% → 1.6; D 15% → 6.0)", keywords: ["95", "1.6", "15", "6.0", "6", "country a", "country d"] },
        { point: "Explains with a reason (later marriage, contraception, careers)", keywords: ["later", "marry", "contraception", "career", "job", "family planning"] },
        { point: "Recognises a link is not proof / other factors such as wealth or healthcare", keywords: ["correlation", "not proof", "wealth", "richer", "other factors", "healthcare", "link"] },
      ],
      commonError: "Describing each country separately without stating the overall relationship.",
      difficulty: "core",
      guideRef: "birth-rate-factors",
      hints: ["As one column goes down, what happens to the other?", "Quote the two extreme countries.", "Does a link between two things prove one causes the other?"],
      strategy: "TEA (Trend, Evidence, Anomaly)",
    },
    {
      kind: "short",
      id: "population-change-p2-q08",
      question:
        "Cholera, typhoid and many diarrhoeal infections spread through dirty water. What general name is given to this group of diseases?",
      answer: {
        type: "text",
        accept: ["water-borne diseases", "waterborne diseases", "water borne diseases", "water-borne disease", "waterborne disease", "water-borne", "waterborne", "water related diseases", "water-related diseases"],
      },
      traps: [
        { spec: { type: "text", accept: ["airborne diseases"] }, feedback: "Airborne diseases (like flu) spread through the air. These spread through dirty water." },
      ],
      solution: ["They are **water-borne diseases**: they spread through contaminated drinking water, so clean water and sanitation sharply reduce deaths from them."],
      difficulty: "core",
      guideRef: "death-rate-factors",
      hints: ["How do these diseases travel?", "'___-borne' means carried by ___."],
    },
    {
      kind: "written",
      id: "population-change-p2-q09",
      question: "Compare a **refugee** with an **economic migrant**. [3 marks]",
      marks: 3,
      modelAnswer:
        "A refugee is forced to leave their country because of war, violence or persecution, whereas an economic migrant chooses to move, mainly to find work or higher wages. A refugee's move is driven mostly by push factors (danger at home), while an economic migrant is often drawn by pull factors such as jobs. A refugee usually cannot safely return home, but an economic migrant could go back, and many send money home to their families.",
      markScheme: [
        { point: "Refugee is forced (war/persecution) whereas economic migrant chooses (voluntary)", keywords: ["forced", "choose", "chose", "voluntary", "war", "persecution", "whereas", "while"] },
        { point: "Refugee's reasons are mainly push / safety; economic migrant's mainly pull / jobs and wages", keywords: ["push", "pull", "safety", "danger", "jobs", "wages", "work"] },
        { point: "Further contrast, e.g. refugees cannot safely return / have legal protection; economic migrants can return / send remittances", keywords: ["return", "go back", "protection", "asylum", "send money", "remittance", "home"] },
      ],
      commonError: "Describing each type separately without using comparison words such as 'whereas' or 'while'.",
      difficulty: "core",
      guideRef: "migration",
      hints: ["Compare means give similarities or differences — use 'whereas'.", "Think: choice, reasons and whether they can go home."],
      strategy: "Compare and contrast",
    },
    {
      kind: "short",
      id: "population-change-p2-q10",
      question:
        "Country P had 2,000,000 people on 1 January and 2,030,000 on 31 December. During the year there were 24,000 births and 18,000 deaths. Calculate the **net migration** for the year (number of people).",
      answer: { type: "number", value: 24000, display: "+24,000 people" },
      traps: [
        { spec: { type: "number", value: 30000 }, feedback: "+30,000 is the TOTAL change. Take away the natural change (+6,000) to find the part due to migration." },
        { spec: { type: "number", value: 36000 }, feedback: "You added natural change instead of subtracting it. Net migration = total change − natural change." },
      ],
      solution: [
        "Total change = 2,030,000 − 2,000,000 = +30,000.",
        "Natural change = 24,000 − 18,000 = +6,000.",
        "Net migration = 30,000 − 6,000 = **+24,000 people**.",
      ],
      commonError: "Stopping at the total change.",
      difficulty: "core",
      guideRef: "significance-of-factors",
      hints: ["How much did the population change in total?", "How much of that came from births minus deaths?", "The rest must be migration."],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "population-change-p2-q11",
      question:
        "Japan's population has been falling for more than a decade, even though some immigrants arrive each year. Which explanation is best?",
      options: [
        "Huge numbers of Japanese people emigrate every year",
        "Japan's birth rate has been rising quickly",
        "Each year deaths exceed births by more than net migration adds",
        "Japan's death rate has fallen to almost zero",
      ],
      answerIndex: 2,
      explanation:
        "Japan has a low birth rate and an old population, so every year there are more deaths than births. Net migration is positive but small, so it does not fill the gap — the population shrinks. Japan's birth rate is low, not rising, and mass emigration is not the cause.",
      difficulty: "core",
      guideRef: "significance-of-factors",
      hints: ["Population change = natural change + net migration.", "If the total is negative but migration is positive, what must natural change be?"],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-change-p2-q12",
      question:
        "Suggest why the death rate in some high-income countries, such as Japan, has been **rising** even though their healthcare is excellent. [4 marks]",
      marks: 4,
      modelAnswer:
        "Japan has a very old population: people live long lives and the birth rate has been low for decades, so elderly people make up a large share of the population. Older people are much more likely to die in any one year than young people, mainly from diseases of old age such as heart disease, cancer and strokes. Because the large post-war generations are now reaching old age, the number of deaths each year is rising. This means a high death rate here is a sign of an ageing population, not of poor healthcare.",
      markScheme: [
        { point: "Large / growing proportion of elderly people (ageing population)", keywords: ["ageing", "aging", "elderly", "old", "over 65", "older people"] },
        { point: "Older people are more likely to die each year / diseases of old age", keywords: ["more likely to die", "heart", "cancer", "stroke", "dementia", "old age", "diseases"] },
        { point: "Cause of ageing: low birth rate and long life expectancy", keywords: ["low birth rate", "birth rate has been low", "fewer babies", "life expectancy", "live longer", "live long", "fertility"] },
        { point: "Recognises death rate rise reflects age structure, not worse healthcare", keywords: ["not because", "healthcare", "age structure", "still excellent", "not poor"] },
      ],
      commonError: "Assuming a rising death rate must mean healthcare has got worse.",
      difficulty: "core",
      guideRef: "death-rate-factors",
      hints: ["Who makes up a large part of Japan's population?", "Which age group is most likely to die in any one year?", "Why does Japan have so many elderly people?"],
      strategy: "Spot the misconception",
    },
    {
      kind: "written",
      id: "population-change-p2-q13",
      question:
        "Study the bar chart showing immigrants and emigrants for Country Y (in thousands).\n\nDescribe how **net migration** changed between 2005 and 2020. Use figures from the graph. [3 marks]",
      diagram: migrationBarChart,
      marks: 3,
      modelAnswer:
        "Net migration was positive in 2005 (+15,000: 40,000 in, 25,000 out) and rose to a peak of +35,000 in 2010 (55,000 in, 20,000 out). It then turned negative, with more people leaving than arriving: −5,000 in 2015 (30,000 in, 35,000 out) and −10,000 in 2020 (20,000 in, 30,000 out). So Country Y changed from gaining people through migration to losing them.",
      markScheme: [
        { point: "Net migration positive and rising 2005–2010 (+15,000 → +35,000)", keywords: ["15", "35", "positive", "rose", "increased", "peak", "2010"] },
        { point: "Net migration became negative after 2010 (−5,000 in 2015, −10,000 in 2020)", keywords: ["negative", "-5", "−5", "-10", "−10", "more leaving", "emigrants exceeded", "2015", "2020"] },
        { point: "Overall summary: changed from net gain to net loss (or correct calculation method shown: immigrants − emigrants)", keywords: ["overall", "gain", "loss", "turned", "changed", "immigrants minus emigrants"] },
      ],
      commonError: "Describing immigration and emigration separately without ever working out net migration.",
      difficulty: "core",
      guideRef: "migration",
      hints: ["Net migration = immigrants − emigrants. Work it out for each year.", "In which years is it positive, and in which negative?", "Describe the overall trend, then quote figures."],
      strategy: "TEA (Trend, Evidence, Anomaly)",
    },
    {
      kind: "short",
      id: "population-change-p2-q14",
      question:
        "What name is given to the movement of people from the countryside into towns and cities within the same country?",
      answer: {
        type: "text",
        accept: ["rural-urban migration", "rural to urban migration", "rural urban migration", "rural-to-urban migration", "urban migration", "urbanisation", "urbanization"],
      },
      traps: [
        { spec: { type: "text", accept: ["counter-urbanisation", "counterurbanisation"] }, feedback: "Counter-urbanisation is the opposite: people moving OUT of cities into the countryside." },
        { spec: { type: "text", accept: ["emigration"] }, feedback: "Emigration means leaving the country. This movement stays inside one country." },
      ],
      solution: ["This is **rural–urban migration** — a type of internal migration and a major cause of urbanisation."],
      difficulty: "core",
      guideRef: "migration",
      hints: ["Countryside = rural. Towns and cities = urban.", "Join the two words with the type of movement."],
    },
    {
      kind: "written",
      id: "population-change-p2-q15",
      question:
        "How significant is migration, compared with natural change, in explaining population change in Singapore? [6 marks]",
      marks: 6,
      modelAnswer:
        "Migration is the more significant factor. Singapore's resident TFR was only about 0.97 in 2023, less than half the replacement level of 2.1, so natural change adds very few people each year and is expected to turn negative as the population ages. Yet Singapore's total population has grown over the long term to about 6.0 million (2024), and nearly a third of the people living there are non-residents such as foreign workers and students. Immigrants and new citizens fill jobs in construction, healthcare and domestic work and replace retiring workers.\n\nHowever, natural change still matters. For now, resident births still slightly outnumber deaths, and the very low birth rate is the underlying reason Singapore needs migrants at all. The government also tries to change natural change directly with policies such as the Baby Bonus. Migration numbers can also go up or down quickly — for example, when borders closed during COVID-19 the non-resident population fell.\n\nOverall, migration is the most significant factor in Singapore's population growth in the short term, because natural change is close to zero. But the low birth rate is the root cause that makes migration so important, so the two factors are linked.",
      markScheme: [
        { point: "Natural change is small: TFR about 0.97, far below 2.1", keywords: ["0.97", "2.1", "replacement", "low birth", "natural change", "small"] },
        { point: "Migration drives growth: total population still rising / about a third non-resident", keywords: ["immigration", "migrants", "non-resident", "foreign workers", "third", "30%", "6 million", "rising"] },
        { point: "Explains why migrants are needed (jobs, ageing, labour shortages)", keywords: ["jobs", "construction", "healthcare", "ageing", "elderly", "shortage", "workforce"] },
        { point: "Other side: natural change still matters / births still slightly exceed deaths / Baby Bonus policies", keywords: ["still", "exceed", "baby bonus", "policy", "pro-natalist", "however", "births"] },
        { point: "Recognises links or variability (low birth rate is root cause; migration can change quickly, e.g. COVID-19)", keywords: ["root cause", "linked", "because of", "covid", "borders", "changes quickly", "depends"] },
        { point: "Justified conclusion on significance", keywords: ["overall", "most significant", "therefore", "conclusion", "more significant", "in the short term"] },
      ],
      commonError: "Only writing about migration, or forgetting to make a final judgement about how significant it is.",
      difficulty: "challenge",
      guideRef: "significance-of-factors",
      hints: ["Start with what natural change is like in Singapore — use the TFR.", "How has the total population still grown?", "Is there any way natural change still matters?", "End with a judgement: how significant, and why?"],
      strategy: "Weigh both sides then judge",
    },
  ],
};

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "population-change-quiz-q01",
      question: "What term describes the difference between the birth rate and the death rate?",
      answer: {
        type: "text",
        accept: ["natural change", "natural increase", "natural population change", "rate of natural increase", "natural increase rate", "natural decrease"],
      },
      traps: [
        { spec: { type: "text", accept: ["net migration"] }, feedback: "Net migration is immigrants − emigrants. Births − deaths has a different name." },
      ],
      solution: ["**Natural change** (or natural increase) = birth rate − death rate. It ignores migration."],
      difficulty: "warmup",
      guideRef: "birth-rate-factors",
      hints: ["It is the change that happens 'naturally', through births and deaths."],
    },
    {
      kind: "short",
      id: "population-change-quiz-q02",
      question:
        "A country has a birth rate of 28 per 1,000 and a death rate of 8 per 1,000. What is its natural increase, in people per 1,000 per year?",
      answer: { type: "number", value: 20 },
      traps: [
        { spec: { type: "number", value: 36 }, feedback: "You added the rates. Natural increase = birth rate − death rate." },
      ],
      solution: ["Natural increase = 28 − 8 = **20 per 1,000 per year**."],
      difficulty: "warmup",
      guideRef: "birth-rate-factors",
      hints: ["Births add people; deaths take them away."],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "population-change-quiz-q03",
      question:
        "A country has a birth rate of 18 per 1,000 and a death rate of 6 per 1,000. Give its rate of natural increase as a **percentage** per year.",
      answer: { type: "number", value: 1.2, display: "1.2%" },
      traps: [
        { spec: { type: "number", value: 12 }, feedback: "12 is per 1,000. A percentage is per 100, so divide by 10." },
      ],
      solution: ["18 − 6 = 12 per 1,000.", "12 ÷ 10 = **1.2% per year**."],
      commonError: "Forgetting to convert from per 1,000 to per cent.",
      difficulty: "core",
      guideRef: "birth-rate-factors",
      hints: ["Subtract first.", "Per 1,000 → per 100: divide by 10."],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "population-change-quiz-q04",
      question:
        "What is the term for a person who has been forced to leave their own country because of war or persecution and has been given protection in another country?",
      answer: { type: "text", accept: ["refugee", "refugees"] },
      traps: [
        { spec: { type: "text", accept: ["economic migrant"] }, feedback: "An economic migrant chooses to move for work. This person was forced to flee." },
        { spec: { type: "text", accept: ["asylum seeker"] }, feedback: "Close! An asylum seeker is someone still ASKING for protection. Once protection has been given, they are called a refugee." },
        { spec: { type: "text", accept: ["internally displaced person"] }, feedback: "An internally displaced person stays inside their own country. This person crossed a border." },
      ],
      solution: ["A **refugee** has fled their country because of war, violence or persecution and been given protection elsewhere."],
      difficulty: "warmup",
      guideRef: "migration",
      hints: ["They are seeking 'refuge' — safety."],
    },
    {
      kind: "short",
      id: "population-change-quiz-q05",
      question:
        "A lack of clean water and healthcare in a village encourages people to leave for the city. Is this a **push** or a **pull** factor?",
      answer: { type: "text", accept: ["push", "push factor"] },
      traps: [
        { spec: { type: "text", accept: ["pull"] }, feedback: "Pull factors are attractions at the destination. A problem in the village drives people away." },
      ],
      solution: ["It is a problem at the place of origin that drives people away, so it is a **push** factor."],
      difficulty: "warmup",
      guideRef: "migration",
      hints: ["Is this describing the village they leave or the city they go to?"],
    },
    {
      kind: "short",
      id: "population-change-quiz-q06",
      question:
        "In one year 12,500 people moved into a country and 15,000 people left it. Calculate its net migration (number of people). Include a minus sign if it is negative.",
      answer: { type: "number", value: -2500, display: "−2,500" },
      traps: [
        { spec: { type: "number", value: 2500 }, feedback: "More people left than arrived, so net migration is NEGATIVE: 12,500 − 15,000 = −2,500." },
        { spec: { type: "number", value: 27500 }, feedback: "You added the two flows. Net migration = immigrants − emigrants." },
      ],
      solution: ["Net migration = immigrants − emigrants = 12,500 − 15,000 = **−2,500**."],
      commonError: "Dropping the minus sign.",
      difficulty: "core",
      guideRef: "migration",
      hints: ["Net migration = in − out.", "Did more people arrive or leave? So is the answer positive or negative?"],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "population-change-quiz-q07",
      question: "Which change did most to lower death rates in British cities in the late 1800s and early 1900s?",
      options: [
        "Mobile phones that let people call doctors",
        "Sewers and clean piped water",
        "More people emigrating to Australia",
        "A rise in the birth rate",
      ],
      answerIndex: 1,
      explanation:
        "Building sewers and supplying clean piped water stopped repeated outbreaks of cholera and typhoid in crowded Victorian cities, so death rates fell. Mobile phones did not exist then; emigration and birth rates do not stop people dying.",
      difficulty: "core",
      guideRef: "death-rate-factors",
      hints: ["Think about what was killing people in crowded Victorian cities.", "Which option existed in the 1800s?"],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "population-change-quiz-q08",
      question:
        "A total fertility rate of about 2.1 lets a population replace itself in the long run (without migration). What is this level called?",
      answer: {
        type: "text",
        accept: ["replacement level", "replacement rate", "replacement level fertility", "replacement fertility", "replacement fertility rate", "replacement"],
      },
      solution: [
        "This is the **replacement level**: two children replace their two parents, and the extra 0.1 allows for children who die before having children of their own.",
      ],
      difficulty: "core",
      guideRef: "birth-rate-factors",
      hints: ["Each generation 'replaces' the one before.", "Two parents → about two children."],
    },
    {
      kind: "short",
      id: "population-change-quiz-q09",
      question:
        "In one year a city's natural change was +7,200 people and its net migration was −3,000 people. What was its total population change?",
      answer: { type: "number", value: 4200, display: "+4,200" },
      traps: [
        { spec: { type: "number", value: 10200 }, feedback: "Net migration is NEGATIVE (−3,000), so it takes people away: 7,200 − 3,000." },
      ],
      solution: ["Total change = natural change + net migration = 7,200 + (−3,000) = **+4,200**."],
      commonError: "Ignoring the minus sign on net migration.",
      difficulty: "core",
      guideRef: "significance-of-factors",
      hints: ["Population change = natural change + net migration.", "Adding a negative number is the same as subtracting."],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "population-change-quiz-q10",
      question:
        "Singapore's resident TFR was about 0.97 in 2023. Which is the **most significant** reason its total population has still grown?",
      options: [
        "A very high birth rate among residents",
        "A death rate that has fallen to zero",
        "Large numbers of Singaporeans emigrating",
        "Immigration of foreign workers, students and new residents",
      ],
      answerIndex: 3,
      explanation:
        "With fertility far below replacement, natural change adds very few people. Singapore's growth has come mainly from immigration — nearly a third of the people living there are non-residents. Emigration would reduce, not increase, the population.",
      difficulty: "core",
      guideRef: "significance-of-factors",
      hints: ["A TFR below 1 means natural change adds very few people.", "What is the other way a population can grow?"],
      strategy: "Eliminate options",
    },
  ],
  papers: [paper1, paper2],
  challenge: [
    {
      kind: "short",
      id: "population-change-ch-q01",
      question:
        "A country of 10,000,000 people has a birth rate of 30 per 1,000, a death rate of 10 per 1,000 and a net migration rate of −3 per 1,000. By how many people will its population change in one year?",
      answer: { type: "number", value: 170000, display: "+170,000" },
      traps: [
        { spec: { type: "number", value: 200000 }, feedback: "That is only natural change (20 per 1,000). Don't forget the −3 per 1,000 from migration." },
        { spec: { type: "number", value: 230000 }, feedback: "Net migration is NEGATIVE — it removes people. Use 20 − 3, not 20 + 3." },
      ],
      solution: [
        "Natural change = 30 − 10 = +20 per 1,000.",
        "Total change rate = 20 + (−3) = +17 per 1,000.",
        "10,000,000 = 10,000 groups of 1,000, so change = 10,000 × 17 = **+170,000 people**.",
      ],
      solutions: [
        { label: "Work in numbers of people", steps: ["Births = 10,000 × 30 = 300,000; deaths = 10,000 × 10 = 100,000.", "Net migration = 10,000 × (−3) = −30,000.", "Change = 300,000 − 100,000 − 30,000 = 170,000."] },
      ],
      commonError: "Adding the net migration rate instead of subtracting it.",
      difficulty: "challenge",
      guideRef: "significance-of-factors",
      hints: ["Combine all three rates into one rate per 1,000 first.", "Watch the sign on net migration.", "How many groups of 1,000 people are there?"],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "population-change-ch-q02",
      question:
        "A country of 4,000,000 people has natural increase of 0.5% a year. The government wants its population to grow by 1.5% a year. How many net migrants (people) does it need each year?",
      answer: { type: "number", value: 40000 },
      traps: [
        { spec: { type: "number", value: 60000 }, feedback: "60,000 is the TOTAL growth wanted (1.5%). Natural increase already provides 0.5% of it." },
        { spec: { type: "number", value: 20000 }, feedback: "20,000 is what natural increase already provides. Migration must supply the rest." },
      ],
      solution: [
        "Migration must supply 1.5% − 0.5% = 1% a year.",
        "1% of 4,000,000 = **40,000 net migrants**.",
      ],
      solutions: [
        { label: "Work in people first", steps: ["Target growth = 1.5% × 4,000,000 = 60,000.", "Natural increase = 0.5% × 4,000,000 = 20,000.", "Migrants needed = 60,000 − 20,000 = 40,000."] },
      ],
      difficulty: "challenge",
      guideRef: "migration",
      hints: ["How much of the target growth does natural increase already give?", "Migration must make up the difference.", "Find that percentage of 4,000,000."],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-change-ch-q03",
      question:
        "Spot the flaw: 'Country X's birth rate has halved from 40 to 20 per 1,000 in 30 years, so its population must now be shrinking.' Explain why this conclusion may be wrong. [4 marks]",
      marks: 4,
      modelAnswer:
        "Whether a population shrinks depends on the birth rate **compared with** the death rate, not on the birth rate alone. If the death rate has also fallen — say to 7 per 1,000 — natural increase is still +13 per 1,000, so the population is still growing, just more slowly than before.\n\nThe statement also ignores migration: population change = natural change + net migration, so positive net migration could keep the population growing even if births fell below deaths.\n\nFinally, a country with a youthful population has many young adults entering parenthood, so the number of births can stay high for years even after the rate falls. The correct conclusion is only that growth has probably slowed.",
      markScheme: [
        { point: "Must compare birth rate with death rate (natural change)", keywords: ["death rate", "compare", "natural change", "minus", "births minus deaths"] },
        { point: "Example: if death rate is below 20, natural change is still positive / still growing but more slowly", keywords: ["still growing", "slower", "still positive", "below 20", "slowing"] },
        { point: "Ignores migration (population change = natural change + net migration)", keywords: ["migration", "immigration", "net migration", "migrants"] },
        { point: "Youthful population / momentum keeps births high, or correct conclusion that growth has slowed", keywords: ["young", "youthful", "momentum", "many parents", "slowed", "growth slowed"] },
      ],
      commonError: "Agreeing with the statement because 'halved' sounds dramatic.",
      difficulty: "challenge",
      guideRef: "birth-rate-factors",
      hints: ["A population shrinks only if more people leave or die than are added. What is missing from the statement?", "What if the death rate is 7 per 1,000?", "Are births and deaths the only ways a population changes?"],
      strategy: "Spot the misconception",
    },
    {
      kind: "written",
      id: "population-change-ch-q04",
      question:
        "'Education of women is the most significant factor in reducing birth rates.' To what extent do you agree? [6 marks]",
      marks: 6,
      modelAnswer:
        "I mostly agree. Educating girls works through several links at once: girls who stay in school marry and have their first child later; they learn about contraception; they are more likely to have careers, so they choose smaller families; and their better health knowledge means more children survive, so families do not need extra children 'just in case'. Across the world, countries where girls stay in school longest generally have the lowest fertility rates, while Niger, where few girls finish secondary school, has a TFR of about 6.\n\nHowever, other factors also matter. Access to contraception and family planning is needed for women to act on their choices. Falling infant mortality, urbanisation (children cost more in cities) and pensions all reduce the need for large families. Government policy can be powerful too: China's one-child policy (1980–2015) restricted births, although China's fertility had already fallen sharply in the 1970s and neighbouring countries without the policy saw similar falls.\n\nOverall, education is probably the most significant single factor because it underpins many of the others — educated women use contraception more and have healthier children — but it works best alongside healthcare, contraception and economic development, so it is not the only cause.",
      markScheme: [
        { point: "Explains the chain from education to fewer births (later marriage, contraception, careers)", keywords: ["later", "marry", "contraception", "career", "job", "chain"] },
        { point: "Uses evidence supporting education (e.g. global pattern, Niger TFR about 6)", keywords: ["niger", "6", "evidence", "pattern", "girls in school", "data"] },
        { point: "Other factor: contraception / family planning / infant mortality / urbanisation / pensions", keywords: ["infant mortality", "urbanisation", "urbanization", "city", "pension", "family planning", "contraception"] },
        { point: "Other factor: government policy (e.g. China one-child policy) with evaluation", keywords: ["policy", "one-child", "china", "government", "law", "baby bonus"] },
        { point: "Recognises links between factors (education underpins others)", keywords: ["linked", "underpins", "connected", "leads to", "because of", "together"] },
        { point: "Justified conclusion on the extent of agreement", keywords: ["overall", "mostly agree", "to a large extent", "therefore", "conclusion", "partly"] },
      ],
      commonError: "Only listing other factors without saying how significant each is compared with education.",
      difficulty: "challenge",
      guideRef: "birth-rate-factors",
      hints: ["Build the education → fewer children chain first.", "Name at least two rival factors and give evidence for each.", "Are the factors connected? Does education help cause any of the others?", "Finish with a clear judgement: how far do you agree?"],
      strategy: "Weigh both sides then judge",
    },
    {
      kind: "short",
      id: "population-change-ch-q05",
      question:
        "A country of 1,000,000 people has a birth rate of 9 per 1,000 and a death rate of 12 per 1,000. What net migration (number of people) is needed in one year for the population to stay **exactly** the same?",
      answer: { type: "number", value: 3000, display: "+3,000" },
      traps: [
        { spec: { type: "number", value: -3000 }, feedback: "Natural change is −3,000, so migration must ADD 3,000 people to cancel it out." },
        { spec: { type: "number", value: 3 }, feedback: "3 is the rate per 1,000. The question asks for a number of people in a population of 1,000,000." },
      ],
      solution: [
        "Natural change = 9 − 12 = −3 per 1,000.",
        "1,000,000 = 1,000 groups of 1,000, so natural change = −3,000 people.",
        "To stay the same, net migration must be **+3,000**.",
      ],
      commonError: "Giving the answer with the same sign as natural change.",
      difficulty: "challenge",
      guideRef: "death-rate-factors",
      hints: ["Are there more births or deaths?", "Convert the rate into a number of people.", "Migration must exactly cancel natural change."],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-change-ch-q06",
      question:
        "Country R: TFR 5.5 but falling; 45% of the population is under 15; death rate 8 per 1,000.\n\nExplain why Country R's population is likely to keep growing for decades even if its TFR falls quickly. [4 marks]",
      marks: 4,
      modelAnswer:
        "With 45% of people under 15, a huge number of young people will reach child-bearing age over the next 10–30 years. Even if each woman has fewer children, there are so many more women having them that the total number of births stays high — this is called population momentum.\n\nThe death rate is low (8 per 1,000) because the population is so young, and young people rarely die, so deaths will stay well below births for many years. As a result natural increase remains positive and the population keeps growing until the large young generation ages.",
      markScheme: [
        { point: "Large youthful population (45% under 15) will soon reach child-bearing age", keywords: ["45", "under 15", "young", "youthful", "child-bearing", "future parents"] },
        { point: "More women having children → total births stay high even with lower TFR (momentum)", keywords: ["momentum", "more mothers", "more women", "births stay high", "total births"] },
        { point: "Low death rate because population is young", keywords: ["low death rate", "8", "young people rarely die", "few deaths"] },
        { point: "So natural increase stays positive / growth continues until the young generation ages", keywords: ["natural increase", "positive", "keep growing", "continue", "decades", "until"] },
      ],
      commonError: "Thinking a falling TFR stops growth immediately.",
      difficulty: "challenge",
      guideRef: "birth-rate-factors",
      hints: ["What will the 45% under 15 be doing in 15–30 years' time?", "Total births = number of mothers × children per mother.", "Why is the death rate so low in a young country?"],
      strategy: "Think at different scales",
    },
    {
      kind: "short",
      id: "population-change-ch-q07",
      question:
        "Singapore's resident TFR was about 0.97 in 2023. Replacement level is about 2.1. What **percentage** of replacement level is 0.97? Give your answer to the nearest whole number.",
      answer: { type: "number", value: 46, tolerance: 0.5, display: "46%" },
      traps: [
        { spec: { type: "number", value: 54 }, feedback: "54% is how far BELOW replacement it is (the shortfall). The question asks what percentage of replacement 0.97 is." },
        { spec: { type: "number", value: 216 }, feedback: "You divided the wrong way round (2.1 ÷ 0.97). Divide the part (0.97) by the whole (2.1)." },
      ],
      solution: [
        "Percentage = 0.97 ÷ 2.1 × 100 = 46.19…",
        "≈ **46%** — each generation of residents is less than half the size needed to replace the one before.",
      ],
      commonError: "Dividing 2.1 by 0.97.",
      difficulty: "challenge",
      guideRef: "significance-of-factors",
      hints: ["Percentage of something = part ÷ whole × 100.", "Here the 'whole' is the replacement level, 2.1."],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-change-ch-q08",
      question:
        "Country N (rates per 1,000 people per year):\n\n| Year | Birth rate | Death rate | Net migration rate |\n|---|---|---|---|\n| 1990 | 10 | 9 | +1 |\n| 2020 | 7 | 12 | +4 |\n\nCountry N's population went from growing to shrinking. Using the data, assess the relative significance of falling births, rising deaths and migration in explaining this change. [5 marks]",
      marks: 5,
      modelAnswer:
        "In 1990 total change was 10 − 9 + 1 = +2 per 1,000 (growing); in 2020 it was 7 − 12 + 4 = −1 per 1,000 (shrinking) — a swing of −3.\n\nThe birth rate fell by 3 per 1,000 and the death rate rose by 3 per 1,000, so together natural change fell by 6 (from +1 to −5). Net migration rose by 3 (from +1 to +4), which cancelled half of that fall but could not cover all of it.\n\nFalling births and rising deaths were equally large in the data, but the rise in deaths is probably caused by ageing — itself the result of a long period of low birth rates. So the low birth rate is the most significant underlying factor, rising deaths the second, while migration actually worked against the decline rather than causing it.",
      markScheme: [
        { point: "Calculates total change in both years (+2 in 1990, −1 in 2020)", keywords: ["+2", "2", "-1", "−1", "total change", "shrinking"] },
        { point: "Quantifies changes: births −3, deaths +3, so natural change fell by 6 (+1 → −5)", keywords: ["3", "6", "-5", "−5", "natural change fell", "+1"] },
        { point: "Migration rose by 3 and offset part of the decline (did not cause it)", keywords: ["migration", "offset", "cancel", "+4", "worked against", "slowed"] },
        { point: "Links rising deaths to ageing caused by low birth rates", keywords: ["ageing", "aging", "elderly", "older", "low birth", "caused by"] },
        { point: "Justified judgement on which factor is most significant", keywords: ["most significant", "overall", "therefore", "underlying", "conclusion", "main"] },
      ],
      commonError: "Saying migration caused the decline — it actually increased and partly offset it.",
      difficulty: "challenge",
      guideRef: "significance-of-factors",
      hints: ["Work out total change for each year.", "How much did each of the three rates change between 1990 and 2020?", "Which changes pushed the total down, and which pushed it up?", "Why might the death rate rise in a country with low birth rates?"],
      strategy: "Weigh both sides then judge",
    },
  ],
};
