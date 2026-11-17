// Big Exam — Paper 4: End-of-Year Mixed Exam (cross-topic, calculator allowed).
import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-c2",
  title: "Paper 4 — End-of-Year Mixed Exam",
  calculator: true,
  minutes: 75,
  questions: [
    // ============================ SKILLS ==================================
    {
      kind: "short",
      id: "exam-c2-q01",
      topicId: "geo-skills",
      question:
        "The map extract shows part of an OS-style map. Each grid square is 1 km × 1 km, and the small ticks along the edges mark tenths of a square.\n\nGive the **six-figure grid reference** of the church.",
      diagram: `<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map extract with eastings 34 to 37 along the bottom and northings 12 to 15 up the side. A church symbol sits between two and three tenths of the way across the square east of easting 35 and between four and five tenths of the way up from northing 13. A road crosses the map, a river runs across the bottom right, there is woodland in the bottom-left square and a school in the top-right square."><rect x="0" y="0" width="380" height="300" fill="#ffffff"/><rect x="60" y="20" width="240" height="240" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/><path d="M180 260 C 200 222, 250 202, 300 192" fill="none" stroke="#7dd3fc" stroke-width="6"/><line x1="60" y1="114" x2="300" y2="134" stroke="#9ca3af" stroke-width="4"/><g fill="#86efac" stroke="#15803d" stroke-width="0.8"><circle cx="80" cy="200" r="6"/><circle cx="100" cy="215" r="6"/><circle cx="85" cy="235" r="6"/><circle cx="115" cy="240" r="6"/><circle cx="120" cy="202" r="6"/></g><g stroke="#64748b" stroke-width="1"><line x1="140" y1="20" x2="140" y2="260"/><line x1="220" y1="20" x2="220" y2="260"/><line x1="60" y1="180" x2="300" y2="180"/><line x1="60" y1="100" x2="300" y2="100"/></g><line x1="60" y1="263" x2="300" y2="263" stroke="#334155" stroke-width="6" stroke-dasharray="1 7"/><line x1="57" y1="20" x2="57" y2="260" stroke="#334155" stroke-width="6" stroke-dasharray="1 7"/><rect x="155" y="141" width="10" height="10" fill="#1f2937"/><path d="M160 132 V141 M156 136 H164" stroke="#1f2937" stroke-width="2"/><text x="260" y="64" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Sch</text><g font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="60" y="282">34</text><text x="140" y="282">35</text><text x="220" y="282">36</text><text x="300" y="282">37</text></g><g font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="48" y="264">12</text><text x="48" y="184">13</text><text x="48" y="104">14</text><text x="48" y="24">15</text></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="310" y="34" font-weight="bold">Key</text><rect x="311" y="47" width="8" height="8" fill="#1f2937"/><path d="M315 40 V47 M312 43 H318" stroke="#1f2937" stroke-width="1.5"/><text x="324" y="55">Church</text><text x="310" y="76">Sch</text><text x="332" y="76">School</text><circle cx="315" cy="92" r="5" fill="#86efac" stroke="#15803d" stroke-width="0.8"/><text x="324" y="96">Wood</text><line x1="310" y1="112" x2="322" y2="112" stroke="#9ca3af" stroke-width="4"/><text x="326" y="116">Road</text><line x1="310" y1="132" x2="322" y2="132" stroke="#7dd3fc" stroke-width="5"/><text x="326" y="136">River</text></g></svg>`,
      answer: { type: "text", accept: ["352134", "352 134"] },
      traps: [
        { spec: { type: "text", accept: ["134352", "134 352"] }, feedback: "You gave the northing first. Eastings (along the corridor) always come before northings (up the stairs)." },
        { spec: { type: "text", accept: ["3513", "35 13"] }, feedback: "That is the four-figure reference for the square. Add the tenths across and the tenths up to make six figures." },
      ],
      solution: [
        "Start with the easting: the church lies east of line 35. It is between 2 and 3 tenths of the way across the square — count the 2 whole tenths it has passed — so the easting is **352**.",
        "Now the northing: the church lies north of line 13. It is between 4 and 5 tenths of the way up the square, so the northing is **134**.",
        "Eastings first, then northings: **352134**.",
      ],
      commonError: "Writing the northing first, or giving only the four-figure square reference (3513).",
      difficulty: "core",
      guideRef: "grid-references",
      hints: [
        "Along the corridor, then up the stairs.",
        "First find the square: which easting line is just to the left of the church, and which northing line is just below it?",
        "Use the ticks to count how many tenths the church is across from that easting line, then how many tenths up from that northing line.",
      ],
      strategy: "Work it out from the map",
    },
    {
      kind: "short",
      id: "exam-c2-q02",
      topicId: "geo-skills",
      question:
        "On a 1:25 000 map, the straight-line distance between Arjun's campsite and the youth hostel measures 7.2 cm.\n\nWhat is the real distance between them? Give your answer in **km**.",
      answer: { type: "number", value: 1.8 },
      traps: [
        { spec: { type: "number", value: 3.6 }, feedback: "That would be right on a 1:50 000 map (1 cm = 0.5 km). On 1:25 000, 1 cm = 0.25 km." },
        { spec: { type: "number", value: 18 }, feedback: "Check your conversion: there are 100,000 cm in 1 km, not 10,000." },
        { spec: { type: "number", value: 180 }, feedback: "You divided by 1,000. To turn cm into km, divide by 100,000." },
      ],
      solution: [
        "On a 1:25 000 map, 1 cm on the map = 25,000 cm on the ground.",
        "7.2 × 25,000 = 180,000 cm.",
        "180,000 cm ÷ 100,000 = **1.8 km**.",
        "Quick check: 1 cm = 0.25 km, so 7.2 × 0.25 = 1.8 km.",
      ],
      commonError: "Using the 1:50 000 rule (1 cm = 0.5 km) by habit, or dividing by the wrong power of ten.",
      difficulty: "warmup",
      guideRef: "scale-distance",
      hints: [
        "On a 1:25 000 map, 4 cm represents 1 km — so what does 1 cm represent?",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "exam-c2-q03",
      topicId: "geo-skills",
      question:
        "An exam question says: *'Describe the distribution of the world's hot deserts shown on the map.'* Which answer best fits the command word?",
      options: [
        "Most hot deserts lie between about 15° and 30° north and south of the Equator, often on the western sides of continents — for example the Sahara in North Africa and the Atacama in South America.",
        "Hot deserts form where air sinks at about 30° north and south of the Equator, creating high pressure so that clouds cannot form.",
        "Hot deserts are found in hot countries.",
        "Hot deserts are very difficult places to live because there is so little water for drinking and farming.",
      ],
      answerIndex: 0,
      explanation:
        "*Describe* means say **where** the pattern is, using lines of latitude, continents and named examples (CLOCC). The answer about 15°–30° N and S with the Sahara and Atacama does exactly that. The answer about sinking air is tempting because it is true, but it *explains* why deserts are there — it answers 'explain', not 'describe'. 'Hot countries' is too vague, and the answer about water describes a problem for people, not the distribution.",
      difficulty: "warmup",
      guideRef: "describing-patterns",
      hints: ["Describe = what and where. Explain = why. Which answer says *where*, with evidence?"],
      strategy: "Use the command word",
    },
    // =========================== POPULATION ===============================
    {
      kind: "short",
      id: "exam-c2-q04",
      topicId: "population-distribution",
      question:
        "Study the rounded data for Egypt.\n\n| Fact | Value |\n|---|---|\n| Population (about 2023) | 110,000,000 |\n| Total area | 1,000,000 km² |\n| Share of the population living in the Nile valley and delta | about 95% |\n| Share of the land area that is the Nile valley and delta | about 5% |\n\nCalculate the population density of the **Nile valley and delta**, in people per km².",
      answer: { type: "number", value: 2090, tolerance: 1 },
      traps: [
        { spec: { type: "number", value: 110 }, feedback: "That is Egypt's national average density. The question asks about the Nile valley and delta only — use 95% of the people and 5% of the land." },
        { spec: { type: "number", value: 2200 }, feedback: "You put all 110 million people on the 5% of land. Only 95% of them live there." },
        { spec: { type: "number", value: 104.5 }, feedback: "You used 95% of the people but the whole area of Egypt. Use only the 5% of land in the valley and delta." },
      ],
      solution: [
        "People in the valley and delta: 95% of 110,000,000 = 0.95 × 110,000,000 = 104,500,000.",
        "Area of the valley and delta: 5% of 1,000,000 km² = 0.05 × 1,000,000 = 50,000 km².",
        "Density = population ÷ area = 104,500,000 ÷ 50,000 = **2,090 people per km²**.",
        "Compare: Egypt's national average is only 110,000,000 ÷ 1,000,000 = 110 per km² — the average hides a crowded river valley and an almost empty desert.",
      ],
      solutions: [
        {
          label: "Compare with the national average",
          steps: [
            "National average = 110 per km².",
            "The valley has 95 ÷ 5 = 19 times its 'fair share' of people for its area.",
            "110 × 19 = 2,090 people per km².",
          ],
        },
      ],
      commonError: "Calculating the national average (110 per km²) instead of the density of the valley and delta.",
      difficulty: "challenge",
      guideRef: "population-density",
      hints: [
        "You need two new numbers first: how many people live in the valley and delta, and how big that area is.",
        "95% of the people live on 5% of the land. Work out each one from the table.",
        "Then density = people ÷ area: 104,500,000 ÷ (5% of 1,000,000 km²).",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-c2-q05",
      topicId: "population-distribution",
      question:
        "Australia has about 27 million people and is one of the most sparsely populated countries on Earth, yet roughly 85% of Australians live within about 50 km of the coast.\n\nExplain this distribution using **both** physical and human factors. [4 marks]",
      marks: 4,
      modelAnswer:
        "Physically, most of Australia's interior is hot desert or semi-desert with very low, unreliable rainfall, so there is too little water to farm or to supply large towns, and very few people live there. In contrast, the coasts — especially the south-east — have a milder, wetter climate and more fertile land, so farming and settlement are much easier.\n\nHuman factors reinforce this. European settlers arrived by sea, so the first towns grew up as ports on the coast, and trade still flows through them. Today jobs, universities, hospitals and transport links are concentrated in coastal cities such as Sydney, Melbourne and Brisbane, which pulls even more people towards the coast, while the remote interior offers few jobs or services.",
      markScheme: [
        { point: "Physical: the interior is hot desert / very dry, so little water and few people", keywords: ["desert", "dry", "arid", "rainfall", "water", "outback", "interior"] },
        { point: "Physical: coastal areas (especially the south-east) are milder and wetter with more fertile land for farming", keywords: ["mild", "wetter", "rain", "fertile", "farming", "temperate", "south-east"] },
        { point: "Human: history of settlement — settlers arrived by sea, so ports and cities grew on the coast for trade", keywords: ["port", "trade", "ship", "settlers", "history", "sea", "colonial"] },
        { point: "Human: jobs, services and transport are concentrated in coastal cities (Sydney, Melbourne, Brisbane, Perth), attracting more people", keywords: ["jobs", "services", "sydney", "melbourne", "brisbane", "perth", "transport", "cities"] },
      ],
      commonError: "Only describing where people live, or giving only physical factors when the question asks for both.",
      difficulty: "core",
      guideRef: "explaining-distribution",
      hints: [
        "Split your answer: two physical reasons, two human reasons.",
        "Physical: compare the climate and water of the interior with the climate of the south-east coast.",
        "Human: how did people first arrive in Australia, and where are the jobs and services now?",
      ],
      strategy: "Cause → process → effect",
    },
    {
      kind: "mcq",
      id: "exam-c2-q06",
      topicId: "population-growth",
      question:
        "Study the table.\n\n| World population | Year reached |\n|---|---|\n| 1 billion | about 1804 |\n| 2 billion | 1927 |\n| 3 billion | 1960 |\n| 4 billion | 1974 |\n| 5 billion | 1987 |\n| 6 billion | 1999 |\n| 7 billion | 2011 |\n| 8 billion | 2022 |\n\nWhich conclusion is best supported by the table?",
      options: [
        "The world's growth rate (% per year) is higher now than ever before, because the latest billion was added fastest.",
        "Each extra billion has been added in about half the time of the billion before it.",
        "The time needed to add each billion fell steeply at first, but has changed little since 3 billion: each billion since then has taken about 11–14 years.",
        "The world's population doubled between 1960 and 1987.",
      ],
      answerIndex: 2,
      explanation:
        "Work out the gaps: 123, 33, 14, 13, 12, 12 and 11 years. They fall steeply at first and then level off at about 11–14 years, so that conclusion is supported. The 'growth rate is higher than ever' option is tempting, but adding a billion quickly does not mean a high *percentage* rate: 1 billion is a much smaller share of 7 billion than of 3 billion. In fact the rate peaked at just over 2% a year in the 1960s. The gaps do not halve each time (33 to 14 to 13), and 3 billion to 5 billion is not a doubling.",
      difficulty: "challenge",
      guideRef: "growth-over-time",
      hints: [
        "Subtract each year from the next to find how long each billion took.",
        "Look at the pattern in those gaps: steady fall, or fall then level off?",
        "A big number added quickly is not the same as a high *percentage* growth rate — compare 1 billion with the size of the population at the time.",
      ],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "exam-c2-q07",
      topicId: "population-growth",
      question:
        "The table gives illustrative figures for a small city-state over one year.\n\n| Measure | Figure |\n|---|---|\n| Population at the start of the year | 6,000,000 |\n| Birth rate | 8 per 1,000 |\n| Death rate | 6 per 1,000 |\n| Immigrants | 70,000 |\n| Emigrants | 30,000 |\n\nCalculate the **total** population change over the year (number of people).",
      answer: { type: "number", value: 52000 },
      traps: [
        { spec: { type: "number", value: 12000 }, feedback: "That is the natural increase only. Total change = natural change + net migration." },
        { spec: { type: "number", value: 82000 }, feedback: "You added all the immigrants but forgot to take away the emigrants. Net migration = immigrants − emigrants." },
        { spec: { type: "number", value: 112000 }, feedback: "Emigrants are people *leaving*, so they must be subtracted, not added." },
      ],
      solution: [
        "The rates are per 1,000 people, and 6,000,000 ÷ 1,000 = 6,000 groups of 1,000 people. Births = 8 × 6,000 = 48,000. Deaths = 6 × 6,000 = 36,000.",
        "Natural increase = 48,000 − 36,000 = 12,000.",
        "Net migration = 70,000 − 30,000 = 40,000.",
        "Total change = 12,000 + 40,000 = **52,000 people**.",
      ],
      commonError: "Forgetting migration (12,000) or treating emigrants as a gain.",
      difficulty: "core",
      guideRef: "birth-death-rates",
      hints: [
        "Population change = natural change + net migration.",
        "Rates are per 1,000 people: how many thousands of people are there? Multiply the birth and death rates by that.",
        "Net migration = immigrants − emigrants. Then add the two parts together.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "exam-c2-q08",
      topicId: "demography",
      question:
        "The pyramid shows Country X (simplified 10-year age bands, % of total population).\n\n| Age | Males (%) | Females (%) |\n|---|---|---|\n| 80+ | 2.0 | 4.6 |\n| 70–79 | 4.0 | 5.0 |\n| 60–69 | 6.0 | 6.5 |\n| 50–59 | 7.0 | 7.3 |\n| 40–49 | 7.5 | 7.6 |\n| 30–39 | 6.5 | 6.5 |\n| 20–29 | 5.5 | 5.4 |\n| 10–19 | 5.0 | 4.8 |\n| 0–9 | 4.5 | 4.3 |\n\nWhich statement about Country X is correct?",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Population pyramid for Country X drawn from the table: narrow base with 4.5 and 4.3 percent aged 0 to 9, widest bars at ages 40 to 49 with 7.5 and 7.6 percent, and a wide top with 2.0 percent of males and 4.6 percent of females aged 80 and over."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><g font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold"><text x="140" y="18">Males</text><text x="340" y="18">Females</text></g><g fill="#c7d2fe" stroke="#334155" stroke-width="1"><rect x="180" y="28" width="40" height="24"/><rect x="140" y="56" width="80" height="24"/><rect x="100" y="84" width="120" height="24"/><rect x="80" y="112" width="140" height="24"/><rect x="70" y="140" width="150" height="24"/><rect x="90" y="168" width="130" height="24"/><rect x="110" y="196" width="110" height="24"/><rect x="120" y="224" width="100" height="24"/><rect x="130" y="252" width="90" height="24"/></g><g fill="#fecaca" stroke="#334155" stroke-width="1"><rect x="260" y="28" width="92" height="24"/><rect x="260" y="56" width="100" height="24"/><rect x="260" y="84" width="130" height="24"/><rect x="260" y="112" width="146" height="24"/><rect x="260" y="140" width="152" height="24"/><rect x="260" y="168" width="130" height="24"/><rect x="260" y="196" width="108" height="24"/><rect x="260" y="224" width="96" height="24"/><rect x="260" y="252" width="86" height="24"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="240" y="44">80+</text><text x="240" y="72">70–79</text><text x="240" y="100">60–69</text><text x="240" y="128">50–59</text><text x="240" y="156">40–49</text><text x="240" y="184">30–39</text><text x="240" y="212">20–29</text><text x="240" y="240">10–19</text><text x="240" y="268">0–9</text></g><g stroke="#334155" stroke-width="1"><line x1="60" y1="280" x2="220" y2="280"/><line x1="260" y1="280" x2="420" y2="280"/><line x1="60" y1="280" x2="60" y2="284"/><line x1="100" y1="280" x2="100" y2="284"/><line x1="140" y1="280" x2="140" y2="284"/><line x1="180" y1="280" x2="180" y2="284"/><line x1="220" y1="280" x2="220" y2="284"/><line x1="260" y1="280" x2="260" y2="284"/><line x1="300" y1="280" x2="300" y2="284"/><line x1="340" y1="280" x2="340" y2="284"/><line x1="380" y1="280" x2="380" y2="284"/><line x1="420" y1="280" x2="420" y2="284"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="60" y="296">8</text><text x="100" y="296">6</text><text x="140" y="296">4</text><text x="180" y="296">2</text><text x="220" y="296">0</text><text x="260" y="296">0</text><text x="300" y="296">2</text><text x="340" y="296">4</text><text x="380" y="296">6</text><text x="420" y="296">8</text><text x="240" y="314">% of total population</text></g></svg>`,
      options: [
        "It has a wide base, so the birth rate is high and the population is youthful.",
        "Its narrow base and wide middle and top suggest a low birth rate and long life expectancy, typical of DTM stage 4 or 5.",
        "More males than females are aged 80+, because men usually live longer than women.",
        "The largest age group is 0–9, so the population is likely to grow quickly.",
      ],
      answerIndex: 1,
      explanation:
        "The base (0–9) is narrow — only 4.5% + 4.3% = 8.8% — while the widest bars are at 40–49 (15.1%) and the top is wide. A narrow base means a low birth rate; a wide top means long life expectancy: an ageing, constrictive pyramid like Japan's, so stage 4 or 5. The 'wide base' option misreads the shape, and the 80+ bars show the opposite of men living longer: 4.6% female against 2.0% male, because women usually live longer.",
      difficulty: "core",
      guideRef: "population-pyramids",
      hints: [
        "Base = birth rate, sides = death rate, top = life expectancy.",
        "Compare the 0–9 bars with the 40–49 bars. Which is wider?",
        "Check the 80+ bars carefully — which side is longer?",
      ],
      strategy: "Read the key first",
    },
    {
      kind: "short",
      id: "exam-c2-q09",
      topicId: "demography",
      question:
        "Country Y (rounded figures, millions):\n\n| Age group | Population (millions) |\n|---|---|\n| 0–14 | 4.2 |\n| 15–64 | 12.0 |\n| 65+ | 3.0 |\n\nCalculate Country Y's **dependency ratio**.",
      answer: { type: "number", value: 60 },
      traps: [
        { spec: { type: "number", value: 37.5 }, feedback: "You divided the dependants by the whole population. The dependency ratio divides by the working-age group (15–64) only." },
        { spec: { type: "number", value: 166.7, tolerance: 0.1 }, feedback: "You turned the fraction upside down. Dependants go on top, working age on the bottom." },
        { spec: { type: "number", value: 25 }, feedback: "That is only the old-age part. Dependants = young (0–14) **plus** elderly (65+)." },
        { spec: { type: "number", value: 35 }, feedback: "That is only the young part. Add the elderly (65+) as well." },
      ],
      solution: [
        "Dependants = 0–14 + 65+ = 4.2 + 3.0 = 7.2 million.",
        "Working age = 15–64 = 12.0 million.",
        "Dependency ratio = 7.2 ÷ 12.0 × 100 = **60**.",
        "So there are 60 dependants for every 100 people of working age.",
      ],
      commonError: "Dividing by the total population (19.2 million) instead of by the 15–64 group.",
      difficulty: "core",
      guideRef: "dependency-ratio",
      hints: [
        "Who are the dependants? Two age groups.",
        "Dependency ratio = (0–14 + 65+) ÷ (15–64) × 100.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-c2-q10",
      topicId: "population-change",
      question:
        "Singapore's resident total fertility rate was about 0.97 in 2023, yet its total population has kept growing. Niger's total fertility rate is about 6.\n\n'Migration is the most significant factor in population change.' Using Singapore **and** Niger, to what extent do you agree? [6 marks]",
      marks: 6,
      modelAnswer:
        "Population change is made of two parts: natural change (births minus deaths) and net migration (immigrants minus emigrants). Which one matters most depends on the country.\n\nIn Singapore migration is clearly the most significant factor. The resident TFR of about 0.97 (2023) is less than half the replacement level of about 2.1, and the population is ageing, so natural increase is very small and will turn into a natural decrease. The population keeps growing mainly because of net migration: roughly 30% of people in Singapore (2024) are non-residents. They are pulled by jobs and high wages, and the government admits workers to fill labour shortages in construction, healthcare and finance.\n\nIn Niger the opposite is true. With a TFR of about 6 and a falling death rate, natural increase drives almost all growth — more than 3% a year — while migration is small in comparison. Birth rates stay high because many girls leave school early and marry young, children help on farms, infant mortality is still high and contraception is hard to get.\n\nOverall I only partly agree. Migration is the most significant factor for a rich, low-fertility country like Singapore, but for a country at stage 2 of the DTM like Niger, natural increase matters far more. The significance of migration depends on a country's level of development and its fertility rate.",
      markScheme: [
        { point: "Shows population change = natural change + net migration", keywords: ["natural", "net migration", "births minus deaths", "immigrants", "emigrants", "natural increase"] },
        { point: "Singapore: TFR about 0.97, far below replacement 2.1, so natural increase is tiny and growth comes from migration (about 30% non-residents)", keywords: ["0.97", "2.1", "replacement", "30%", "non-resident", "foreign workers", "immigration"] },
        { point: "Explains why migrants come to Singapore: pull of jobs/wages, labour shortages, government immigration policy", keywords: ["jobs", "wages", "pull", "labour shortage", "policy", "work permit", "economy"] },
        { point: "Niger: TFR about 6, so natural increase drives almost all growth (over 3% a year); migration is small", keywords: ["niger", "6", "natural increase", "3%", "high birth rate", "births"] },
        { point: "Explains Niger's high fertility: little schooling for girls, early marriage, children as farm labour, high infant mortality, limited contraception", keywords: ["education", "girls", "early marriage", "farm", "infant mortality", "contraception"] },
        { point: "Justified conclusion: significance depends on the country / its stage of development — agrees for Singapore, not for Niger", keywords: ["depends", "overall", "partly", "conclusion", "therefore", "development", "stage"] },
      ],
      commonError: "Writing about only one country, or listing factors without ever making a judgement about which is most significant.",
      difficulty: "challenge",
      guideRef: "significance-of-factors",
      hints: [
        "Start with the equation: population change = natural change + net migration. Which part is bigger in each country?",
        "Singapore: what does a TFR of 0.97 tell you about natural increase? So where must growth come from?",
        "Niger: with a TFR of about 6, does migration even need to matter? Why are births so high?",
        "Finish with 'It depends on…' and say what it depends on.",
      ],
      strategy: "Weigh both sides then judge",
    },
    {
      kind: "mcq",
      id: "exam-c2-q11",
      topicId: "population-problems",
      question: "Which statement about China's One-Child Policy is accurate?",
      options: [
        "It applied equally to every family in China, with no exceptions.",
        "It lasted until 2021, when it was replaced directly by a three-child policy.",
        "China's population began to fall in the 1980s, soon after the policy started.",
        "It contributed to a sex ratio at birth of about 118 boys for every 100 girls by the 2010 census, far above the natural ratio of about 105.",
      ],
      answerIndex: 3,
      explanation:
        "Combined with a traditional preference for sons, the policy helped push the sex ratio at birth to about 117 (2000 census) and 118 (2010 census) boys per 100 girls — far above the natural ratio of about 105. The policy ran from 1980 to 2015, was followed by a two-child policy in 2016 and only then a three-child policy in 2021 — so the '2021' option is wrong. There were exceptions (many rural families whose first child was a girl, and ethnic minorities), and China's population did not fall until 2022 — the first fall in about six decades.",
      difficulty: "core",
      guideRef: "china-one-child",
      hints: [
        "Check the dates: when did the policy end, and what came next?",
        "Did China's population fall straight away? Think about when the first fall in about six decades happened.",
      ],
      strategy: "Spot the misconception",
    },
    {
      kind: "written",
      id: "exam-c2-q12",
      topicId: "population-problems",
      question:
        "Roughly 1 in 5 Singapore citizens is now aged 65 or over. Explain **two** problems that an ageing population causes for Singapore, and describe **one** way the government is responding. [4 marks]",
      marks: 4,
      modelAnswer:
        "First, an ageing population puts pressure on healthcare. Older people need more hospital treatment, medicines and long-term care, so spending on hospitals and care homes rises.\n\nSecond, there are fewer people of working age for every older person: Singapore's old-age support ratio has fallen from well over 10 working-age citizens per elderly citizen around 1970 to about 4. Fewer workers means labour shortages and fewer taxpayers to fund services and support retirees.\n\nOne response is raising the retirement and re-employment ages in steps — to 64 and 69 in 2026 — so that older people can keep working and saving for longer.",
      markScheme: [
        { point: "Problem 1: rising demand for and cost of healthcare / elderly care", keywords: ["healthcare", "hospital", "care", "medical", "nursing", "cost"] },
        { point: "Problem 2: shrinking workforce / labour shortages", keywords: ["workforce", "workers", "labour", "shortage", "fewer workers"] },
        { point: "Explains the pressure: fewer working-age taxpayers support each elderly person (support ratio fell to about 4)", keywords: ["taxes", "support ratio", "dependency", "pensions", "cpf", "fewer taxpayers", "4"] },
        { point: "Response: raising retirement/re-employment ages (64 and 69 in 2026), CPF savings, immigration of workers or elder-friendly HDB flats", keywords: ["retirement age", "re-employment", "64", "69", "cpf", "immigration", "hdb", "baby bonus"] },
      ],
      commonError: "Naming problems without explaining why an ageing population causes them, or choosing a youthful-population problem such as a shortage of school places.",
      difficulty: "core",
      guideRef: "ageing-youthful",
      hints: [
        "Think about what older people need more of — and who pays for it.",
        "What happens to the number of workers when a large generation retires and few babies are born?",
        "For the response, think about how long people work in Singapore.",
      ],
      strategy: "PEEL paragraph",
    },
    // ======================= EXTREME ENVIRONMENTS =========================
    {
      kind: "written",
      id: "exam-c2-q13",
      topicId: "extreme-climates",
      question: "The climate graph shows Station D. Describe the climate of Station D. Use figures from the graph. [3 marks]",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for Station D. Rainfall bars on a 0 to 8 millimetre scale: January 5, February 4, March 3, April 2, May 1, June 0, July 0, August 1, September 1, October 2, November 4, December 6 millimetres. Temperature line on a 0 to 40 degree scale: 13, 15, 19, 24, 29, 33, 35, 34, 31, 25, 19 and 14 degrees Celsius from January to December. Total rainfall 29 millimetres a year."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="240" y="24" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">Station D — total rainfall 29 mm a year</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="235" x2="420" y2="235"/><line x1="60" y1="210" x2="420" y2="210"/><line x1="60" y1="185" x2="420" y2="185"/><line x1="60" y1="160" x2="420" y2="160"/><line x1="60" y1="135" x2="420" y2="135"/><line x1="60" y1="110" x2="420" y2="110"/><line x1="60" y1="85" x2="420" y2="85"/></g><g fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"><rect x="66" y="135" width="18" height="125"/><rect x="96" y="160" width="18" height="100"/><rect x="126" y="185" width="18" height="75"/><rect x="156" y="210" width="18" height="50"/><rect x="186" y="235" width="18" height="25"/><rect x="276" y="235" width="18" height="25"/><rect x="306" y="235" width="18" height="25"/><rect x="336" y="210" width="18" height="50"/><rect x="366" y="160" width="18" height="100"/><rect x="396" y="110" width="18" height="150"/></g><polyline points="75,195 105,185 135,165 165,140 195,115 225,95 255,85 285,90 315,105 345,135 375,165 405,190" fill="none" stroke="#dc2626" stroke-width="2"/><g fill="#dc2626"><circle cx="75" cy="195" r="3"/><circle cx="105" cy="185" r="3"/><circle cx="135" cy="165" r="3"/><circle cx="165" cy="140" r="3"/><circle cx="195" cy="115" r="3"/><circle cx="225" cy="95" r="3"/><circle cx="255" cy="85" r="3"/><circle cx="285" cy="90" r="3"/><circle cx="315" cy="105" r="3"/><circle cx="345" cy="135" r="3"/><circle cx="375" cy="165" r="3"/><circle cx="405" cy="190" r="3"/></g><rect x="60" y="60" width="360" height="200" fill="none" stroke="#334155"/><g font-size="11" font-family="sans-serif" fill="#1d4ed8" text-anchor="end"><text x="54" y="264">0</text><text x="54" y="239">1</text><text x="54" y="214">2</text><text x="54" y="189">3</text><text x="54" y="164">4</text><text x="54" y="139">5</text><text x="54" y="114">6</text><text x="54" y="89">7</text><text x="54" y="64">8</text></g><g font-size="11" font-family="sans-serif" fill="#b91c1c"><text x="426" y="264">0</text><text x="426" y="239">5</text><text x="426" y="214">10</text><text x="426" y="189">15</text><text x="426" y="164">20</text><text x="426" y="139">25</text><text x="426" y="114">30</text><text x="426" y="89">35</text><text x="426" y="64">40</text></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="75" y="276">J</text><text x="105" y="276">F</text><text x="135" y="276">M</text><text x="165" y="276">A</text><text x="195" y="276">M</text><text x="225" y="276">J</text><text x="255" y="276">J</text><text x="285" y="276">A</text><text x="315" y="276">S</text><text x="345" y="276">O</text><text x="375" y="276">N</text><text x="405" y="276">D</text></g><text x="20" y="160" transform="rotate(-90 20 160)" font-size="11" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">Rainfall (mm)</text><text x="462" y="160" transform="rotate(90 462 160)" font-size="11" font-family="sans-serif" fill="#b91c1c" text-anchor="middle">Temperature (°C)</text><rect x="110" y="292" width="14" height="10" fill="#93c5fd" stroke="#1d4ed8"/><text x="130" y="301" font-size="11" font-family="sans-serif" fill="#1f2937">Rainfall</text><line x1="250" y1="297" x2="272" y2="297" stroke="#dc2626" stroke-width="2"/><text x="278" y="301" font-size="11" font-family="sans-serif" fill="#1f2937">Temperature</text></svg>`,
      marks: 3,
      modelAnswer:
        "Station D is extremely dry, with a total of only 29 mm of rain a year — far below the 250 mm that defines a desert. The little rain falls mostly in winter, with a maximum of 6 mm in December, and June and July have none at all. Temperatures are hot in summer, peaking at about 35 °C in July, but mild in winter, falling to about 13 °C in January, so the annual temperature range is large: about 35 − 13 = 22 °C.",
      markScheme: [
        { point: "Very low rainfall: 29 mm a year in total (under 250 mm — a hot desert)", keywords: ["29", "dry", "low rainfall", "250", "desert", "arid"] },
        { point: "Hot summer: highest about 35 °C in July; mild winter: lowest about 13 °C in January", keywords: ["35", "july", "13", "january", "hot summer", "mild winter"] },
        { point: "Large annual temperature range of about 22 °C (accept 21–23 °C), or a seasonal rainfall detail with figures (most in winter, wettest December 6 mm, none in June and July)", keywords: ["22", "range", "december", "6 mm", "june", "no rain", "winter"] },
      ],
      commonError: "Describing without figures, or explaining why the place is a desert when the command word is 'describe'.",
      difficulty: "core",
      guideRef: "climate-graphs",
      hints: [
        "Use TEA: Trend, Evidence (figures with units and months), Anomaly.",
        "Bars use the left axis (mm); the line uses the right axis (°C).",
        "Find the highest and lowest temperatures and subtract to get the range.",
      ],
      strategy: "TEA (Trend, Evidence, Anomaly)",
    },
    {
      kind: "mcq",
      id: "exam-c2-q14",
      topicId: "extreme-climates",
      question: "Why do hot deserts such as the Sahara receive so little rain?",
      options: [
        "They are closer to the Sun than other places on Earth.",
        "Air sinks at around 15–30° north and south of the Equator, warming as it falls, so clouds rarely form under the high pressure.",
        "Air rises strongly there, cools and drops all its moisture before it reaches the ground.",
        "The sand soaks up the rain as soon as it falls, so it never shows up in rain gauges.",
      ],
      answerIndex: 1,
      explanation:
        "In the Hadley cell, air that rose at the Equator sinks at about 30° N and S. Sinking air warms, so its water vapour cannot condense into cloud: high pressure and clear skies mean very little rain. Rising, cooling air is what makes rain — that happens at the Equator, which is why Singapore is so wet. No part of Earth is meaningfully 'closer to the Sun', and rain gauges catch rain before it reaches the sand.",
      difficulty: "warmup",
      guideRef: "hot-desert-climate",
      hints: ["Rising air cools and makes clouds. What does sinking air do?"],
      strategy: "Eliminate options",
    },
    {
      kind: "written",
      id: "exam-c2-q15",
      topicId: "extreme-weather",
      question:
        "Explain why tropical storms form over warm oceans about 5–30° from the Equator, and why they weaken when they move over land. [4 marks]",
      marks: 4,
      modelAnswer:
        "Tropical storms need a sea surface temperature of at least 26.5 °C. The warm water evaporates rapidly, and the warm, moist air rises, creating an area of very low pressure. As the air rises it cools and the water vapour condenses into towering clouds, releasing heat energy that makes the air rise even faster — this is the storm's 'engine'.\n\nThey form at least about 5° from the Equator because the Coriolis effect is needed to make the storm spin, and it is too weak near the Equator. Beyond about 30° the sea is usually too cool.\n\nOver land the storm is cut off from its supply of warm, moist air, so it loses its energy source, and friction with the land surface slows the winds, so it weakens.",
      markScheme: [
        { point: "Sea surface at least 26.5 °C: warm water evaporates; warm, moist air rises, creating low pressure", keywords: ["26.5", "warm", "evaporat", "rises", "moist", "low pressure"] },
        { point: "Condensation releases heat energy that powers the storm / makes air rise faster", keywords: ["condens", "heat", "energy", "latent", "clouds", "power"] },
        { point: "Coriolis effect needed to spin the storm — too weak within about 5° of the Equator (seas too cool beyond about 30°)", keywords: ["coriolis", "spin", "rotate", "5°", "equator", "too cool", "30°"] },
        { point: "Over land: cut off from warm, moist air (energy supply) and slowed by friction, so it weakens", keywords: ["land", "energy supply", "moisture", "friction", "cut off", "weakens"] },
      ],
      commonError: "Saying storms form *on* the Equator because it is hottest — the Coriolis effect is too weak there to start the spin.",
      difficulty: "core",
      guideRef: "tropical-storms",
      hints: [
        "What does a storm use as fuel, and where does that fuel come from?",
        "Why is there a gap of about 5° either side of the Equator? Think about what makes the storm spin.",
        "Over land, what does the storm lose — and what slows the wind down?",
      ],
      strategy: "Cause → process → effect",
    },
    {
      kind: "mcq",
      id: "exam-c2-q16",
      topicId: "extreme-weather",
      question:
        "The weather map shows isobars (in hPa) around an area of low pressure, L. At which location are the winds likely to be strongest?",
      diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Weather map with four isobars around a low, L. The isobars are labelled 992, 996, 1000 and 1004 hectopascals from the inside out. They are packed closely together on the west side, where point P lies, further apart to the north, where point R lies, and widely spaced on the east side, where point Q lies."><rect x="0" y="0" width="400" height="300" fill="#ffffff"/><g fill="none" stroke="#334155" stroke-width="1.5"><circle cx="150" cy="160" r="30"/><circle cx="160" cy="160" r="55"/><circle cx="170" cy="160" r="80"/><circle cx="180" cy="160" r="105"/></g><g fill="#ffffff"><rect x="136" y="183" width="28" height="14"/><rect x="146" y="208" width="28" height="14"/><rect x="156" y="233" width="28" height="14"/><rect x="164" y="258" width="32" height="14"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="150" y="194">992</text><text x="160" y="219">996</text><text x="170" y="244">1000</text><text x="180" y="269">1004</text></g><text x="150" y="166" font-size="18" font-family="sans-serif" font-weight="bold" fill="#b91c1c" text-anchor="middle">L</text><g fill="#1f2937"><circle cx="97" cy="160" r="3"/><circle cx="232" cy="160" r="3"/><circle cx="165" cy="93" r="3"/></g><g font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="99" y="151">P</text><text x="232" y="151">Q</text><text x="176" y="97">R</text></g><g stroke="#1f2937" stroke-width="1.5"><line x1="360" y1="60" x2="360" y2="30"/><path d="M354 38 L360 26 L366 38 Z" fill="#1f2937"/></g><text x="360" y="76" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">N</text><text x="300" y="290" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Isobars every 4 hPa</text></svg>`,
      options: [
        "At P, where the isobars are closest together",
        "At Q, where the isobars are furthest apart",
        "At R, north of the low",
        "At L, the centre of the low, where pressure is lowest",
      ],
      answerIndex: 0,
      explanation:
        "Wind blows from high to low pressure, and the bigger the pressure change over a distance, the stronger the wind. Closely spaced isobars mean a steep pressure gradient, so the strongest winds are at P. It is tempting to pick L because the pressure is lowest there, but strong wind depends on how *quickly* pressure changes, not on how low it is: inside the innermost isobar the pressure hardly changes. At Q the isobars are widest apart, so winds are lightest.",
      difficulty: "core",
      guideRef: "forecasting",
      hints: [
        "On a weather map, what does the spacing of isobars tell you?",
        "Wind strength depends on how quickly pressure changes over a distance — not on how low the pressure is.",
      ],
      strategy: "Work it out from the map",
    },
    {
      kind: "short",
      id: "exam-c2-q17",
      topicId: "adaptations",
      question:
        "In the Antarctic winter, emperor penguins crowd together in a tight group and take turns moving from the cold outside edge to the warm middle.\n\nIs this a **structural**, **behavioural** or **physiological** adaptation? Answer in one word.",
      answer: { type: "text", accept: ["behavioural", "behavioral", "behaviour", "behavior", "behavioural adaptation", "behavioral adaptation"] },
      traps: [
        { spec: { type: "text", accept: ["structural", "structural adaptation"] }, feedback: "Structural adaptations are body features the penguin *has*, such as dense feathers or fat. Huddling is something it *does*." },
        { spec: { type: "text", accept: ["physiological", "physiological adaptation"] }, feedback: "Physiological adaptations happen *inside* the body, such as counter-current blood flow. Huddling is something the penguins *do*." },
      ],
      solution: [
        "Structural = what an organism *has*; behavioural = what it *does*; physiological = what happens *inside* it.",
        "Huddling and taking turns on the edge is an action the penguins carry out, so it is a **behavioural** adaptation.",
      ],
      commonError: "Calling any adaptation to the cold 'structural' without checking whether it is a body part or an action.",
      difficulty: "warmup",
      guideRef: "what-is-adaptation",
      hints: ["Is huddling something the penguin has, something it does, or something happening inside its body?"],
      strategy: "Spot the misconception",
    },
    {
      kind: "written",
      id: "exam-c2-q18",
      topicId: "living-in-extremes",
      question:
        "Study the data.\n\n| Antarctic season | Tourists visiting (approx., IAATO) |\n|---|---|\n| 2007–08 | 46,000 |\n| 2023–24 | 122,000 |\n\n'Tourism in Antarctica is positive tourism.' Using the data and your own knowledge, to what extent do you agree? [6 marks]",
      marks: 6,
      modelAnswer:
        "Tourism in Antarctica is growing fast: visitor numbers rose from about 46,000 in 2007–08 to about 122,000 in 2023–24, an increase of about 165% — more than 2.5 times as many.\n\nThere are good reasons to call it positive tourism. The Antarctic Treaty (1959) keeps the continent for peace and science, and the Madrid Protocol (1991) bans mining. IAATO's rules are strict: no more than 100 visitors ashore at one site at a time, ships carrying more than 500 passengers may not land anyone, visitors stay about 5 m from wildlife and clean their boots and clothing to stop invasive species. Many visitors also return home as 'ambassadors' who campaign to protect Antarctica.\n\nHowever, there are real costs. Ships and the flights to reach them burn fuel, adding to the greenhouse gas emissions that are warming polar regions and melting ice. Despite biosecurity checks, seeds and microbes can still hitch a ride, and landings are concentrated at a few accessible sites, so penguin colonies there face repeated disturbance. Visitor numbers are rising so quickly that they could exceed the carrying capacity of popular landing sites.\n\nOverall, I partly agree: the strict rules make Antarctic tourism far better managed than most extreme tourism, so it is 'positive' compared with places like Everest. But with numbers more than doubling and emissions unavoidable, it is only positive if the limits are kept tight and perhaps total visitor numbers are capped.",
      markScheme: [
        { point: "Uses the data: about 46,000 to about 122,000, a rise of about 165% / more than doubled", keywords: ["46,000", "122,000", "165", "doubled", "increase", "rise"] },
        { point: "For: strict rules — Antarctic Treaty 1959 / Madrid Protocol mining ban / IAATO limits (100 ashore, no landings from ships over 500 passengers, 5 m from wildlife)", keywords: ["treaty", "1959", "madrid", "iaato", "100", "500", "5 m", "rules"] },
        { point: "For: ambassador effect — visitors become campaigners for protection / support science and conservation", keywords: ["ambassador", "campaign", "awareness", "education", "protect", "conservation"] },
        { point: "Against: emissions from ships and flights add to climate change, warming polar regions; risk of fuel spills", keywords: ["emissions", "carbon", "fuel", "climate change", "flights", "pollution", "spill"] },
        { point: "Against: invasive species / disturbance of wildlife at a few busy landing sites; numbers may exceed carrying capacity", keywords: ["invasive", "biosecurity", "seeds", "disturb", "penguins", "carrying capacity", "wildlife"] },
        { point: "Justified conclusion that weighs both sides (e.g. positive only if rules stay strict / numbers capped)", keywords: ["overall", "partly", "conclusion", "depends", "therefore", "only if", "agree"] },
      ],
      commonError: "Describing the IAATO rules without judging whether they are enough, or ignoring the data in the table.",
      difficulty: "challenge",
      guideRef: "antarctica-tourism",
      hints: [
        "Start with the data: calculate the percentage increase — (new − old) ÷ old × 100.",
        "For: what rules (Treaty, Madrid Protocol, IAATO) keep damage low? What is the 'ambassador effect'?",
        "Against: how do visitors get there, and what might they bring with them?",
        "End with a judgement that says what 'positive' depends on.",
      ],
      strategy: "Weigh both sides then judge",
    },
    {
      kind: "short",
      id: "exam-c2-q19",
      topicId: "living-in-extremes",
      question:
        "Priya's expedition starts from a hut at 1,400 m, where the temperature is 16 °C. The summit is at 4,200 m. Using a lapse rate of 6.5 °C per 1,000 m, estimate the temperature at the summit, in °C to 1 decimal place.",
      answer: { type: "number", value: -2.2, display: "−2.2 °C" },
      traps: [
        { spec: { type: "number", value: 2.2 }, feedback: "Check the sign: the temperature drops by 18.2 °C from 16 °C, which takes it below zero." },
        { spec: { type: "number", value: -11.3 }, feedback: "You used the full 4,200 m. The climb is only from 1,400 m to 4,200 m." },
        { spec: { type: "number", value: 34.2 }, feedback: "Temperature falls as you climb — subtract the drop, don't add it." },
      ],
      solution: [
        "Height climbed = 4,200 − 1,400 = 2,800 m.",
        "Temperature drop = 2,800 ÷ 1,000 × 6.5 = 2.8 × 6.5 = 18.2 °C.",
        "Summit temperature = 16 − 18.2 = **−2.2 °C** — below freezing, so Priya's team needs warm layers and must plan for ice.",
      ],
      commonError: "Using the summit height instead of the height gained, or losing the minus sign.",
      difficulty: "core",
      guideRef: "planning-an-expedition",
      hints: [
        "How many metres does the team actually climb?",
        "Each 1,000 m costs 6.5 °C. How many thousands of metres is the climb?",
        "Subtract the drop from 16 °C — watch for a negative answer.",
      ],
      strategy: "Use figures from the source",
    },
    // ============================== COASTS ================================
    {
      kind: "mcq",
      id: "exam-c2-q20",
      topicId: "coastal-erosion",
      question: "Which statement correctly describes the difference between weathering and erosion?",
      options: [
        "Weathering and erosion mean the same thing: rocks being worn away by the sea.",
        "Erosion breaks rock down where it is, while weathering carries it away from the coast.",
        "Weathering only happens in cold places, where water freezes in cracks.",
        "Weathering breaks rock down where it is, while erosion wears rock away and removes it by a moving force such as waves.",
      ],
      answerIndex: 3,
      explanation:
        "Weathering is the breakdown of rock **in place** (for example freeze–thaw or salt weathering); erosion is the wearing away **and removal** of rock by a moving force such as waves. The swapped version is tempting but reverses the two terms. Weathering is not only a cold-climate process: chemical weathering is fastest in warm, wet places like Singapore.",
      difficulty: "warmup",
      guideRef: "weathering",
      hints: ["Which process needs something moving — waves, wind or ice — to carry the material away?"],
      strategy: "Spot the misconception",
    },
    {
      kind: "short",
      id: "exam-c2-q21",
      topicId: "coastal-erosion",
      question:
        "Students measured the distance from a farmhouse to the cliff edge on the Holderness coast (illustrative survey data).\n\n| Year | Distance from farmhouse to cliff edge (m) |\n|---|---|\n| 2004 | 67.5 |\n| 2014 | 56.0 |\n| 2024 | 40.5 |\n\nUsing the **mean rate of retreat for 2004–2024**, in which year will the cliff edge reach the farmhouse if this rate continues?",
      answer: { type: "number", value: 2054 },
      traps: [
        { spec: { type: "number", value: 30 }, feedback: "30 is the number of years left. The question asks for the year: add it to 2024." },
        { spec: { type: "number", value: 2050, tolerance: 1 }, feedback: "You used the faster 2014–2024 rate (1.55 m a year). The question asks for the mean rate over the whole period, 2004–2024." },
        { spec: { type: "number", value: 2059, tolerance: 1 }, feedback: "You used the slower 2004–2014 rate (1.15 m a year). Use the mean rate for the whole period, 2004–2024." },
      ],
      solution: [
        "Cliff lost between 2004 and 2024 = 67.5 − 40.5 = 27.0 m.",
        "Mean rate of retreat = 27.0 ÷ 20 years = 1.35 m per year.",
        "Years until the cliff reaches the farmhouse = 40.5 ÷ 1.35 = 30 years.",
        "2024 + 30 = **2054**.",
        "Note: retreat was faster in 2014–2024 (1.55 m a year) than in 2004–2014 (1.15 m a year), so the real date could be sooner.",
      ],
      commonError: "Giving the number of years (30) rather than the year, or using only one decade's rate.",
      difficulty: "challenge",
      guideRef: "erosion-processes",
      hints: [
        "First find how many metres were lost between 2004 and 2024, and over how many years.",
        "Rate of retreat = distance lost ÷ time taken.",
        "How many years will it take to lose the remaining 40.5 m at that rate? Then add to 2024.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-c2-q22",
      topicId: "coastal-landforms",
      question:
        "Old Harry Rocks are chalk stacks at Handfast Point in Dorset. Explain how a stack forms from a headland. [4 marks]",
      marks: 4,
      modelAnswer:
        "Waves attack weaknesses such as cracks, joints and faults in the chalk headland. Hydraulic action forces water and compressed air into the cracks, and abrasion hurls sand and pebbles against the rock, so a crack widens into a cave.\n\nThe cave is eroded deeper until it breaks right through the headland (or two caves on either side meet), forming an arch, like Durdle Door.\n\nWaves keep eroding the base of the arch while weathering, such as freeze–thaw and salt weathering, weakens the roof from above. Eventually the roof becomes too heavy and collapses, leaving an isolated pillar of rock — a stack. Further erosion at its base will one day turn it into a stump.",
      markScheme: [
        { point: "Waves erode weaknesses (cracks/joints/faults) in the headland by hydraulic action and/or abrasion", keywords: ["crack", "joint", "fault", "weakness", "hydraulic action", "abrasion"] },
        { point: "The crack is widened into a cave", keywords: ["cave", "widen", "enlarge", "hollow"] },
        { point: "The cave erodes through the headland (or two caves meet) to form an arch", keywords: ["arch", "through", "back to back", "durdle door", "breaks through"] },
        { point: "The arch roof, weakened by erosion below and weathering above, collapses, leaving a stack", keywords: ["roof", "collapse", "weathering", "freeze-thaw", "stack", "isolated", "gravity"] },
      ],
      commonError: "Listing 'cave, arch, stack' without naming the erosion processes or explaining why the arch roof collapses.",
      difficulty: "core",
      guideRef: "cave-arch-stack",
      hints: [
        "Where on a headland do waves attack first?",
        "Follow the sequence: crack → cave → arch → stack. Explain each step.",
        "What weakens the arch roof from above, and what happens to it eventually?",
      ],
      strategy: "Sketch it",
    },
    {
      kind: "written",
      id: "exam-c2-q23",
      topicId: "coastal-landforms",
      question:
        "The diagram shows the coast at Mappleton on the Holderness coast. In 1991, about £2 million was spent on two rock groynes and rock armour to protect the village.\n\nEvaluate whether hard engineering was the right choice for this stretch of coast. [6 marks]",
      diagram: `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map of Mappleton on the east-facing Holderness coast. The North Sea is to the east. Longshore drift moves south. Two rock groynes stick out into the sea in front of the village, with rock armour at the cliff foot. Sand builds up on the north side of each groyne and the beach is wide there. South of the groynes the beach is narrow and the cliff line is set back inland, showing faster erosion."><rect x="0" y="0" width="420" height="300" fill="#bae6fd"/><path d="M0 0 L260 0 L260 190 L232 215 L225 300 L0 300 Z" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><path d="M260 0 L275 0 L290 117 L260 117 Z" fill="#fde68a" stroke="#a16207" stroke-width="0.8"/><path d="M260 123 L268 123 L290 167 L260 167 Z" fill="#fde68a" stroke="#a16207" stroke-width="0.8"/><path d="M262 173 L262 190 L234 215 L227 300" fill="none" stroke="#fde68a" stroke-width="4"/><g stroke="#57534e" stroke-width="6"><line x1="256" y1="120" x2="302" y2="120"/><line x1="256" y1="170" x2="302" y2="170"/></g><g fill="#a8a29e" stroke="#57534e" stroke-width="0.8"><circle cx="257" cy="98" r="4"/><circle cx="257" cy="108" r="4"/><circle cx="257" cy="132" r="4"/><circle cx="257" cy="142" r="4"/><circle cx="257" cy="152" r="4"/></g><rect x="180" y="105" width="50" height="55" fill="#e5e7eb" stroke="#334155"/><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="205" y="137" text-anchor="middle">Village</text><text x="205" y="92" text-anchor="middle">Rock armour</text><line x1="236" y1="90" x2="253" y2="98" stroke="#1f2937"/><text x="312" y="144">Rock</text><text x="312" y="157">groynes</text><line x1="309" y1="140" x2="300" y2="124" stroke="#1f2937"/><line x1="309" y1="155" x2="300" y2="166" stroke="#1f2937"/><text x="296" y="60">Wide beach</text><text x="244" y="250">Narrow beach:</text><text x="244" y="264">faster cliff erosion</text><text x="110" y="60" text-anchor="middle">Farmland</text><text x="110" y="250" text-anchor="middle">Farmland</text><text x="120" y="185" text-anchor="middle">Soft boulder clay cliffs</text><text x="380" y="215" text-anchor="middle">Longshore</text><text x="380" y="229" text-anchor="middle">drift</text><text x="345" y="290" text-anchor="middle" font-weight="bold">NORTH SEA</text><text x="30" y="70" text-anchor="middle">N</text></g><line x1="380" y1="30" x2="380" y2="185" stroke="#1d4ed8" stroke-width="3"/><path d="M372 182 L380 198 L388 182 Z" fill="#1d4ed8"/><line x1="30" y1="55" x2="30" y2="25" stroke="#1f2937" stroke-width="1.5"/><path d="M25 32 L30 20 L35 32 Z" fill="#1f2937"/></svg>`,
      marks: 6,
      modelAnswer:
        "The rock groynes trap sediment carried south by longshore drift, so a wider beach builds up on their northern side. A wide beach absorbs wave energy before it reaches the cliff, and the rock armour breaks up the waves at the cliff foot. Together they have protected Mappleton's homes and its main road for over 30 years, which would otherwise have been lost as the soft boulder clay cliffs retreat.\n\nHowever, by trapping sand the groynes starve the beaches to the south. With only a narrow beach, waves hit the cliffs south of Mappleton with more energy, so erosion there increased and farmland and buildings further south have been lost faster — the problem has been moved down the coast rather than solved.\n\nCost is also important. About £2 million was a lot to protect one small village, and hard defences need maintenance. A benefit–cost comparison might support protecting a village and a road, but not open farmland. Soft engineering such as managed retreat would be cheaper and would let sediment keep moving along the coast, but the village would be lost.\n\nOverall, hard engineering was justified for Mappleton itself because the value of the homes and road was high, but it was not the best choice for the coast as a whole because of the damage downdrift. A fair scheme should consider the whole stretch of coast, and perhaps compensate landowners to the south.",
      markScheme: [
        { point: "Explains how groynes work: they trap sediment moved by longshore drift, building a wider beach that absorbs wave energy", keywords: ["trap", "sediment", "longshore drift", "wider beach", "absorb", "wave energy"] },
        { point: "Rock armour breaks up waves at the cliff foot — the village and its road have been protected", keywords: ["rock armour", "protect", "village", "road", "homes", "saved"] },
        { point: "Negative: beaches to the south are starved of sediment, so erosion increases downdrift (problem moved, not solved)", keywords: ["south", "downdrift", "starved", "narrow beach", "increased erosion", "farmland"] },
        { point: "Cost: about £2 million plus maintenance — weighed against the value of what is protected (benefit–cost)", keywords: ["£2 million", "cost", "expensive", "maintenance", "benefit", "value"] },
        { point: "Alternative: soft engineering / managed retreat is cheaper and works with natural processes, but land would be lost", keywords: ["soft engineering", "managed retreat", "nourishment", "natural", "cheaper", "alternative"] },
        { point: "Justified conclusion (e.g. right for the village, but not for the whole coastline)", keywords: ["overall", "justified", "conclusion", "depends", "therefore", "whole coast"] },
      ],
      commonError: "Only describing what groynes are, or ignoring the effect on the coast to the south shown on the diagram.",
      difficulty: "challenge",
      guideRef: "coastal-management",
      hints: [
        "Use the diagram: where is the beach wide, and where is it narrow? Why?",
        "Which way does longshore drift move? What happens to the coast that the sand no longer reaches?",
        "Think about cost and alternatives (soft engineering, managed retreat).",
        "Judge: right for whom — the village, or the whole coastline?",
      ],
      strategy: "Weigh both sides then judge",
    },
    {
      kind: "written",
      id: "exam-c2-q24",
      topicId: "coral-reefs",
      question:
        "The table shows weekly sea surface temperatures at a reef site during one summer (illustrative data). Corals here usually bleach if the water stays at least about 1 °C above the normal summer maximum of 29 °C for several weeks.\n\n| Week | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|---|---|---|---|---|---|---|---|---|\n| Sea temperature (°C) | 28.6 | 29.1 | 29.7 | 30.2 | 30.5 | 30.4 | 30.1 | 29.3 |\n\nUsing the data, explain why the coral bleached, and why bleaching does not always kill coral. [4 marks]",
      marks: 4,
      modelAnswer:
        "From week 4 to week 7 the sea stayed between 30.1 °C and 30.5 °C — at least 1 °C above the normal summer maximum of 29 °C for four weeks in a row. This marine heatwave put the coral polyps under heat stress, so they expelled the zooxanthellae, the tiny algae that live inside them. The algae give coral its colour and most of its food through photosynthesis, so without them the white calcium carbonate skeleton shows through and the coral starts to starve.\n\nBleached coral is not yet dead. In week 8 the temperature fell back to 29.3 °C; if the water cools quickly like this, the algae can return and the coral can recover. Coral only dies if the heat lasts too long, or if bleaching happens again before it has had years to recover.",
      markScheme: [
        { point: "Uses the data: weeks 4–7 were at least 1 °C above 29 °C (30.1–30.5 °C) for four weeks", keywords: ["week 4", "30.2", "30.5", "30.1", "four weeks", "1 °c", "above 29"] },
        { point: "Heat stress makes polyps expel their zooxanthellae (symbiotic algae)", keywords: ["expel", "zooxanthellae", "algae", "heat stress", "polyp"] },
        { point: "The algae provide colour and most of the coral's food (photosynthesis), so the coral turns white and starves", keywords: ["food", "photosynthesis", "colour", "white", "skeleton", "starve"] },
        { point: "If temperatures fall quickly (29.3 °C in week 8) algae can return and the coral recovers; it dies only if heat lasts or recurs", keywords: ["recover", "return", "cools", "29.3", "week 8", "lasts", "dies"] },
      ],
      commonError: "Saying bleached coral is dead, or that the heat 'bleaches' the coral like sunlight bleaching paint.",
      difficulty: "challenge",
      guideRef: "coral-bleaching",
      hints: [
        "Find the weeks when the sea was 30 °C or more. How many weeks in a row?",
        "What lives inside a coral polyp, and what happens to it under heat stress?",
        "Look at week 8. What could happen next if the water stays cooler?",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-c2-q25",
      topicId: "protecting-reefs",
      question:
        "'The Great Barrier Reef is well managed, so its future is secure.' Evaluate this statement. [6 marks]",
      marks: 6,
      modelAnswer:
        "The Great Barrier Reef is one of the best-managed reefs in the world. The Marine Park was created in 1975 and is run by GBRMPA, and since 2004 about 33% of it has been green no-take zones where fishing and collecting are banned, letting fish populations and coral recover.\n\nOther local threats are also tackled. Divers cull crown-of-thorns starfish, rules on farms reduce fertiliser, pesticide and soil run-off, and tourist boats need permits and use moorings instead of anchors. The Reef 2050 Plan (2015) sets long-term targets. This matters because healthy, well-managed reefs recover faster after damage.\n\nHowever, the biggest threat is global. Mass bleaching events in 2016, 2017, 2020, 2022 and 2024 were caused by marine heatwaves linked to climate change, and these cannot be stopped by Australian park rules. With bleaching every few years, coral has too little time to recover, and ocean acidification makes it harder for coral to build its skeleton. UNESCO has also considered listing the reef as 'in danger', and conflicts between farmers, fishers and the tourism industry make some rules hard to tighten.\n\nOverall, I disagree with the statement. The reef is well managed for *local* threats, which gives it the best possible chance, but its future is not secure, because it depends mainly on cutting global greenhouse gas emissions — something no reef manager can control.",
      markScheme: [
        { point: "Marine Park (1975) with zoning: about 33% green no-take zones since 2004", keywords: ["1975", "marine park", "zoning", "33%", "no-take", "green zones", "gbrmpa"] },
        { point: "Other local management: crown-of-thorns culling, farm run-off rules, tourism permits/moorings, Reef 2050 Plan", keywords: ["crown-of-thorns", "starfish", "run-off", "farm", "permits", "moorings", "reef 2050"] },
        { point: "Healthy, well-managed reefs are more resilient — they recover faster after bleaching", keywords: ["resilient", "recover", "healthy", "faster", "bounce back"] },
        { point: "Against: global warming causes mass bleaching (2016, 2017, 2020, 2022, 2024), which local management cannot prevent", keywords: ["bleaching", "2016", "2024", "climate change", "global", "warming", "heatwave"] },
        { point: "Against: frequent bleaching leaves too little recovery time / ocean acidification / stakeholder conflict / UNESCO 'in danger' concerns", keywords: ["acidification", "recovery time", "unesco", "in danger", "conflict", "stakeholders"] },
        { point: "Justified conclusion: well managed locally but not secure, because the future depends on cutting global emissions", keywords: ["overall", "not secure", "depends", "emissions", "conclusion", "disagree"] },
      ],
      commonError: "Listing management strategies without separating local threats (which they can fix) from global threats (which they cannot).",
      difficulty: "challenge",
      guideRef: "evaluating-management",
      hints: [
        "Split the threats into local and global.",
        "Which local threats does management tackle successfully? Give named strategies and figures.",
        "What has happened to the reef in 2016, 2017, 2020, 2022 and 2024 — and could zoning have stopped it?",
        "Judge both parts of the statement separately: 'well managed' and 'future is secure'.",
      ],
      strategy: "Weigh both sides then judge",
    },
    // ============================== CITIES ================================
    {
      kind: "mcq",
      id: "exam-c2-q26",
      topicId: "cities-megacities",
      question: "Which statement about megacities is correct?",
      options: [
        "A megacity is any capital city with more than 1 million people.",
        "Most megacities are in Europe and North America, where countries are richest.",
        "Most megacities are in Asia, and the fastest-growing ones, such as Dhaka and Lagos, are in lower-income countries and NEEs.",
        "Megacities grow only through rural–urban migration; natural increase plays no part.",
      ],
      answerIndex: 2,
      explanation:
        "In 2018 the UN counted about 33 megacities, roughly 20 of them in Asia, and the fastest growth is in lower-income countries and NEEs such as Bangladesh and Nigeria. A megacity needs 10 million or more people, not 1 million, and it need not be a capital (Lagos is not Nigeria's capital). The idea that rich regions have most megacities is a common misconception: Tokyo and New York are megacities, but most are in Asia. Cities also grow by natural increase, because migrants are mostly young adults who start families in the city.",
      difficulty: "core",
      guideRef: "megacities",
      hints: [
        "How many people does a city need to be a megacity?",
        "Which continent has most of the world's people — and most of its megacities?",
      ],
      strategy: "Eliminate options",
    },
    {
      kind: "written",
      id: "exam-c2-q27",
      topicId: "lagos",
      question:
        "Using UN estimates, Lagos grew by roughly 400,000 people a year between 2010 and 2020. Explain how this rapid growth has led to informal settlements such as Makoko. [3 marks]",
      marks: 3,
      modelAnswer:
        "Lagos grew far faster than the city could build formal housing, and the homes that were built were too expensive for most low-income migrants, many of whom work in the informal economy. With nowhere affordable to live, people built their own homes on land nobody else wanted — in Makoko, wooden houses on stilts over the Lagos Lagoon. Because these settlements are unplanned, they lack services: there is no mains sewer or piped clean water, so waste goes into the lagoon and diseases spread, and residents have no legal right to the land, so parts of Makoko were demolished in 2012.",
      markScheme: [
        { point: "Growth outpaced formal housing supply / formal housing too expensive for low-income migrants", keywords: ["housing", "shortage", "expensive", "afford", "too fast", "outpace", "low income"] },
        { point: "People build their own homes on unused or unsafe land — e.g. stilt houses over the lagoon at Makoko", keywords: ["stilt", "lagoon", "build their own", "makoko", "unsafe land", "self-built"] },
        { point: "Unplanned, so no services (no mains sewer, clean water) / no legal ownership — partly demolished in 2012", keywords: ["sewer", "sanitation", "clean water", "disease", "illegal", "demolished", "2012", "services"] },
      ],
      commonError: "Describing Makoko without linking it back to the speed of the city's growth.",
      difficulty: "core",
      guideRef: "lagos-challenges",
      hints: [
        "Compare the number of new people each year with the number of affordable homes being built.",
        "If you cannot afford a formal home, where and how do you live?",
        "What services does an unplanned settlement on a lagoon usually lack?",
      ],
      strategy: "Cause → process → effect",
    },
    {
      kind: "written",
      id: "exam-c2-q28",
      topicId: "lagos",
      question:
        "The Lagos Rail Mass Transit and Eko Atlantic are both attempts to improve life in Lagos. Which do you think will benefit **more people**? Justify your answer. [4 marks]",
      marks: 4,
      modelAnswer:
        "I think the Lagos Rail Mass Transit will benefit more people. The Blue Line opened to passengers in 2023 and the Red Line in 2024, and each train can carry far more passengers than the cars and minibuses stuck in the 'go-slow'. Ordinary commuters, including lower-income workers, can travel faster and more cheaply, saving hours each day and cutting traffic fumes.\n\nEko Atlantic does bring benefits: it is built on land reclaimed from the Atlantic, its sea wall protects part of the coast from erosion and storm surges, and it creates offices and jobs. However, it is criticised as an enclave for the wealthy, so most Lagosians, especially the millions in informal settlements, will never live or work there.\n\nThe rail network is still limited to a few lines in a huge city and needs to keep expanding, but judged by how many people it reaches and who benefits, it does more for the majority than Eko Atlantic.",
      markScheme: [
        { point: "Rail: Blue Line (2023) / Red Line (2024) carry large numbers of ordinary commuters, cutting journey times in the 'go-slow' and pollution", keywords: ["blue line", "red line", "2023", "2024", "commuters", "go-slow", "traffic", "mass transit"] },
        { point: "Eko Atlantic: reclaimed land and sea wall protect the coast; creates offices and jobs", keywords: ["reclaimed", "sea wall", "coast", "erosion", "storm surge", "offices", "jobs"] },
        { point: "Eko Atlantic criticised as an enclave for the wealthy — few poor residents benefit / rail still limited in coverage or cost", keywords: ["wealthy", "rich", "enclave", "exclusive", "poor", "few people", "limited", "only a few lines"] },
        { point: "Justified judgement using criteria (how many people, who benefits, sustainability)", keywords: ["more people", "majority", "therefore", "overall", "judgement", "who benefits"] },
      ],
      commonError: "Describing both projects without comparing who benefits, or making a judgement with no reasons.",
      difficulty: "challenge",
      guideRef: "lagos-solutions",
      hints: [
        "Use criteria: how many people, which people, and at what cost?",
        "Who will use the trains every day? Who will live and work in Eko Atlantic?",
        "Give at least one weakness of your chosen project before you make your final judgement.",
      ],
      strategy: "Weigh both sides then judge",
    },
    {
      kind: "written",
      id: "exam-c2-q29",
      topicId: "sustainable-cities",
      question:
        "Study the table about Singapore's Four National Taps.\n\n| Tap | Source | Depends on rainfall? |\n|---|---|---|\n| Local catchment | Rain collected in reservoirs | Yes |\n| Imported water | Rivers in Johor, Malaysia (agreement runs to 2061) | Yes |\n| NEWater | Used water treated to a very high standard; can meet up to about 40% of current demand | No |\n| Desalination | Seawater; can meet up to about 25% of current demand | No |\n\nUsing the table, explain how the Four National Taps make Singapore's water supply more sustainable, and suggest **one** weakness of the system. [4 marks]",
      marks: 4,
      modelAnswer:
        "Singapore does not rely on a single source: with four taps, if one is reduced — for example during a dry spell or a dispute over imports — the others can make up the difference.\n\nTwo of the taps, NEWater and desalination, do not depend on rainfall at all, and together can meet a large share of demand (up to about 40% and 25%). This makes the supply drought-resistant and reduces dependence on imported water before the Johor agreement ends in 2061.\n\nNEWater also recycles used water instead of wasting it, so the same water is used again — a good example of meeting today's needs without harming future supplies.\n\nOne weakness is that desalination and NEWater use a lot of energy, which is expensive and, since most of Singapore's energy is imported and comes from fossil fuels, adds to greenhouse gas emissions.",
      markScheme: [
        { point: "Diversity: four sources, so not dependent on one / less risk if one fails", keywords: ["four", "diverse", "variety", "not rely", "one source", "backup", "risk"] },
        { point: "NEWater and desalination do not depend on rainfall, so the supply is drought-resistant (up to about 40% and 25%)", keywords: ["rainfall", "drought", "40%", "25%", "weather", "not depend"] },
        { point: "Recycling used water (NEWater) / less reliance on imports before the 2061 agreement ends — supports long-term (future) needs", keywords: ["recycle", "reuse", "2061", "imports", "johor", "future", "long-term"] },
        { point: "Weakness: desalination/NEWater use lots of energy (cost, emissions) or imported water depends on another country", keywords: ["energy", "expensive", "cost", "emissions", "fossil", "depends on malaysia", "electricity"] },
      ],
      commonError: "Describing the four taps one by one without explaining why the mix makes the supply more sustainable.",
      difficulty: "core",
      guideRef: "singapore-success",
      hints: [
        "Look at the last column. Why is it useful that two taps say 'No'?",
        "Think about what happens if one tap is reduced — and about the year 2061.",
        "For the weakness: what does it take to turn seawater into drinking water?",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-c2-q30",
      topicId: "sustainable-cities",
      question:
        "'Building more sustainable cities is the most important way to protect coral reefs and to reduce the damage caused by extreme weather.'\n\nTo what extent do you agree? Use examples from **at least two** of the units you have studied this year (for example Cracking Coasts, Extreme Environments and Future Cities). [9 marks]",
      marks: 9,
      modelAnswer:
        "Climate change links all three units. Cities produce roughly 70% of the world's CO₂ emissions (UN estimate), mainly from transport, buildings and energy use, so how cities are built has a huge effect on global warming.\n\nWarming seas are the biggest threat to coral reefs. Marine heatwaves cause polyps to expel their zooxanthellae, and the Great Barrier Reef suffered mass bleaching in 2016, 2017, 2020, 2022 and 2024. Extra CO₂ dissolving in the ocean also causes acidification, making it harder for coral to build its skeleton. Warmer oceans also matter for extreme weather: tropical storms need sea temperatures of at least 26.5 °C, and scientists (IPCC) expect a larger share of the most intense storms, along with more intense heatwaves and heavier downpours, as the world warms.\n\nSustainable cities attack this root cause. Singapore cuts car use with ERP road pricing, the COE system and a large MRT network, and its Green Plan 2030 aims for greener energy and a City in Nature; Curitiba's BRT and Copenhagen's cycling and district heating show how a city can shrink its ecological footprint. Sustainable cities also *adapt*: Singapore is planning for sea-level rise of up to about 1 m by 2100, and parks and green roofs reduce the urban heat island during heatwaves.\n\nHowever, sustainable cities are not enough on their own. Coral reefs also face local threats that city design does not solve: overfishing, farm run-off and crown-of-thorns starfish on the Great Barrier Reef are tackled by zoning (about 33% no-take since 2004) and farm rules. One city's emissions are a small share of the global total, so the benefits depend on national energy policies and international agreements, and they take decades to reduce warming. For extreme weather, the damage also depends on prediction, protection and preparation: forecasts, warnings and shelters have saved many lives in places such as Bangladesh, and fast-growing cities like Lagos, where informal settlements flood, need better drainage and housing as well as lower emissions.\n\nOverall, I partly agree. Sustainable cities are the most important *long-term* solution because they tackle the root cause — greenhouse gas emissions — for both reefs and extreme weather. But they are not enough on their own in the short term: reefs also need local management, and people need warnings and protection from the extreme weather that is already happening. The best approach combines sustainable cities with local protection.",
      markScheme: [
        { point: "Link: cities produce roughly 70% of CO₂ emissions, so they drive climate change", keywords: ["70%", "emissions", "co2", "carbon", "greenhouse", "cities produce"] },
        { point: "Climate change → marine heatwaves → coral bleaching (e.g. GBR 2016, 2017, 2020, 2022, 2024) and ocean acidification", keywords: ["bleaching", "heatwave", "zooxanthellae", "acidification", "2016", "great barrier reef", "warmer sea"] },
        { point: "Climate change → more intense extreme weather (warm seas ≥26.5 °C fuel tropical storms; heatwaves, heavy rain, sea-level rise)", keywords: ["26.5", "tropical storm", "typhoon", "heatwave", "flood", "intense", "sea-level"] },
        { point: "Sustainable city measures that cut emissions, with an example (Singapore ERP/MRT/Green Plan 2030, Curitiba BRT, Copenhagen cycling)", keywords: ["erp", "mrt", "green plan", "curitiba", "copenhagen", "public transport", "renewable", "footprint"] },
        { point: "Sustainable cities also adapt: e.g. Singapore planning for up to about 1 m sea-level rise by 2100; green space reduces urban heat island", keywords: ["adapt", "sea-level rise", "1 m", "2100", "urban heat island", "drainage", "green roofs", "coastal protection"] },
        { point: "Counter: reefs face local threats (overfishing, run-off, crown-of-thorns) needing local management such as GBR zoning (33% no-take)", keywords: ["overfishing", "run-off", "crown-of-thorns", "zoning", "33%", "local threats", "no-take"] },
        { point: "Counter: one city's emissions are small / need national and global action; benefits take decades", keywords: ["global", "international", "agreement", "small share", "decades", "national", "other countries"] },
        { point: "Counter: extreme weather damage also depends on prediction, protection and preparation (warnings, shelters — e.g. Bangladesh) and on poverty/vulnerability (e.g. Lagos flooding)", keywords: ["warnings", "forecast", "prediction", "preparation", "shelters", "bangladesh", "lagos", "vulnerable"] },
        { point: "Justified overall judgement weighing long-term root cause against short-term local measures", keywords: ["overall", "partly agree", "long-term", "root cause", "conclusion", "combine", "therefore"] },
      ],
      commonError: "Writing three separate mini-essays on reefs, weather and cities without explaining the link (greenhouse gas emissions and warming) or reaching a judgement.",
      solutions: [
        {
          label: "Plan by unit",
          steps: [
            "Paragraph 1 — the link: cities → emissions → warming.",
            "Paragraph 2 — Cracking Coasts: bleaching and acidification; but local threats need local management (GBR zoning).",
            "Paragraph 3 — Extreme Environments: warmer seas and more intense extreme weather; but warnings and preparation save lives now.",
            "Paragraph 4 — Future Cities: what sustainable cities do (Singapore, Curitiba, Copenhagen), both mitigation and adaptation.",
            "Conclusion — most important long-term, not sufficient alone.",
          ],
        },
        {
          label: "Plan by time-scale",
          steps: [
            "Long term: only cutting emissions (where cities matter most) can stop warming seas and worsening extreme weather.",
            "Short term: reefs and people are being hit now, so local management (zoning, run-off rules) and preparation (forecasts, shelters) matter more today.",
            "Judge: which time-scale does 'most important' refer to? Make your conclusion depend on it.",
          ],
        },
      ],
      difficulty: "challenge",
      guideRef: "what-is-sustainable",
      hints: [
        "Find the thread that links reefs, extreme weather and cities: what do cities produce, and what does it do to the oceans and atmosphere?",
        "Agree side: name real sustainable-city measures and say how they cut emissions or help cities adapt.",
        "Disagree side: what threats to reefs have nothing to do with cities? What else reduces deaths from extreme weather?",
        "Your conclusion should say *when* sustainable cities are most important — long term or right now — and why.",
      ],
      strategy: "Weigh both sides then judge",
    },
  ],
};
