import type { Paper } from "../../types.ts";

// Resource diagrams (drawn exactly from the stated percentages).
const PYRAMID_A = `<svg viewBox="0 0 480 226" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Population pyramid for Country A: ages 65+ 3% male 3% female; 40 to 64 8% and 8%; 15 to 39 15% and 15%; 0 to 14 24% and 24%"><rect width="480" height="226" fill="#ffffff"/><text x="240" y="20" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Country A (2024, simplified)</text><text x="120" y="34" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#334155">Male</text><text x="360" y="34" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#334155">Female</text><rect x="222" y="44" width="18" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="44" width="18" height="26" fill="#fecaca" stroke="#334155"/><text x="216" y="62" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">3%</text><text x="264" y="62" font-size="12" font-family="sans-serif" fill="#1f2937">3%</text><text x="12" y="62" font-size="12" font-family="sans-serif" fill="#1f2937">65+</text><rect x="192" y="78" width="48" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="78" width="48" height="26" fill="#fecaca" stroke="#334155"/><text x="186" y="96" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">8%</text><text x="294" y="96" font-size="12" font-family="sans-serif" fill="#1f2937">8%</text><text x="12" y="96" font-size="12" font-family="sans-serif" fill="#1f2937">40–64</text><rect x="150" y="112" width="90" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="112" width="90" height="26" fill="#fecaca" stroke="#334155"/><text x="144" y="130" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">15%</text><text x="336" y="130" font-size="12" font-family="sans-serif" fill="#1f2937">15%</text><text x="12" y="130" font-size="12" font-family="sans-serif" fill="#1f2937">15–39</text><rect x="96" y="146" width="144" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="146" width="144" height="26" fill="#fecaca" stroke="#334155"/><text x="90" y="164" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">24%</text><text x="390" y="164" font-size="12" font-family="sans-serif" fill="#1f2937">24%</text><text x="12" y="164" font-size="12" font-family="sans-serif" fill="#1f2937">0–14</text><line x1="240" y1="40" x2="240" y2="182" stroke="#1f2937"/><text x="240" y="200" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">% of total population (bar length 6 px = 1%)</text></svg>`;
const PYRAMID_B = `<svg viewBox="0 0 480 226" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Population pyramid for Country B: ages 65+ 13% male 17% female; 40 to 64 16% and 16%; 15 to 39 13% and 13%; 0 to 14 6% and 6%"><rect width="480" height="226" fill="#ffffff"/><text x="240" y="20" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Country B (2024, simplified)</text><text x="120" y="34" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#334155">Male</text><text x="360" y="34" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#334155">Female</text><rect x="162" y="44" width="78" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="44" width="102" height="26" fill="#fecaca" stroke="#334155"/><text x="156" y="62" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">13%</text><text x="348" y="62" font-size="12" font-family="sans-serif" fill="#1f2937">17%</text><text x="12" y="62" font-size="12" font-family="sans-serif" fill="#1f2937">65+</text><rect x="144" y="78" width="96" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="78" width="96" height="26" fill="#fecaca" stroke="#334155"/><text x="138" y="96" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">16%</text><text x="342" y="96" font-size="12" font-family="sans-serif" fill="#1f2937">16%</text><text x="12" y="96" font-size="12" font-family="sans-serif" fill="#1f2937">40–64</text><rect x="162" y="112" width="78" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="112" width="78" height="26" fill="#fecaca" stroke="#334155"/><text x="156" y="130" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">13%</text><text x="324" y="130" font-size="12" font-family="sans-serif" fill="#1f2937">13%</text><text x="12" y="130" font-size="12" font-family="sans-serif" fill="#1f2937">15–39</text><rect x="204" y="146" width="36" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="146" width="36" height="26" fill="#fecaca" stroke="#334155"/><text x="198" y="164" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">6%</text><text x="282" y="164" font-size="12" font-family="sans-serif" fill="#1f2937">6%</text><text x="12" y="164" font-size="12" font-family="sans-serif" fill="#1f2937">0–14</text><line x1="240" y1="40" x2="240" y2="182" stroke="#1f2937"/><text x="240" y="200" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">% of total population (bar length 6 px = 1%)</text></svg>`;
const OPTIMUM_GRAPH = `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of standard of living against population size. The curve rises to a peak labelled Q, the optimum population, then falls. Point P is on the rising left side, point R on the falling right side."><rect width="480" height="270" fill="#ffffff"/><line x1="60" y1="220" x2="450" y2="220" stroke="#1f2937" stroke-width="2"/><line x1="60" y1="30" x2="60" y2="220" stroke="#1f2937" stroke-width="2"/><path d="M70 200 Q 255 -20 440 200" fill="none" stroke="#334155" stroke-width="3"/><line x1="255" y1="90" x2="255" y2="220" stroke="#334155" stroke-dasharray="5 4"/><circle cx="130" cy="140" r="6" fill="#c7d2fe" stroke="#1f2937"/><circle cx="255" cy="90" r="6" fill="#bbf7d0" stroke="#1f2937"/><circle cx="380" cy="140" r="6" fill="#fecaca" stroke="#1f2937"/><text x="118" y="132" font-size="14" text-anchor="end" font-family="sans-serif" fill="#1f2937">P</text><text x="255" y="78" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Q</text><text x="392" y="132" font-size="14" font-family="sans-serif" fill="#1f2937">R</text><text x="255" y="240" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Population size (resources and technology fixed) →</text><text x="22" y="125" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="rotate(-90 22 125)">Standard of living per person →</text></svg>`;

export const mcqPapers: Paper[] = [
  // =========================== MCQ PAPER 1 ===========================
  {
    id: "population-problems-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "population-problems-m1-q01",
        question: "What is meant by **optimum population**?",
        options: [
          "The largest number of people that can physically fit onto a country's land",
          "The number of people that gives the highest standard of living per person, using the resources and technology available",
          "A population with exactly equal numbers of males and females",
          "A population that has stopped growing because the birth rate equals the death rate",
        ],
        answerIndex: 1,
        explanation:
          "Optimum population is about **balance** between people and resources (with today's technology): it gives the best standard of living per person. It is not the most people you can squeeze in, and a population that has stopped growing (zero growth) could still be over- or under-populated.",
        difficulty: "warmup",
        guideRef: "over-under-population",
        hints: ["Think 'best', not 'biggest' — what is being made as high as possible?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q02",
        question: "A government policy that tries to **increase** the birth rate is called…",
        options: ["anti-natalist", "family planning", "emigration control", "pro-natalist"],
        answerIndex: 3,
        explanation:
          "*Pro* means 'for' and *natal* means 'birth', so a **pro-natalist** policy encourages births (e.g. Singapore's Baby Bonus). Anti-natalist is the opposite — it tries to reduce births, like China's One-Child Policy. Family planning usually helps people have *fewer* children.",
        difficulty: "warmup",
        guideRef: "population-policies",
        hints: ["Break the word up: pro = for, natal = birth."],
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q03",
        question: "In which year did China's **Two-Child Policy** replace the One-Child Policy?",
        options: ["2016", "1980", "2021", "2000"],
        answerIndex: 0,
        explanation:
          "The One-Child Policy ran from 1980 to 2015; the Two-Child Policy began in **2016**. 1980 is when the One-Child Policy started, and 2021 is when China moved again, to a Three-Child Policy.",
        difficulty: "warmup",
        guideRef: "china-one-child",
        hints: ["The One-Child Policy ended in 2015 — the change came into force the next year."],
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q04",
        question: "Which of these is a typical problem caused by an **ageing** population?",
        options: [
          "Not enough school places for children",
          "Too many young people looking for their first job",
          "Rising pension and healthcare costs paid for by fewer workers",
          "A very high birth rate",
        ],
        answerIndex: 2,
        explanation:
          "An ageing population has a large share of people aged 65+, so pensions and healthcare cost more while the share of tax-paying workers shrinks. Shortages of school places and jobs for school-leavers are problems of a **youthful** population, not an ageing one.",
        difficulty: "warmup",
        guideRef: "ageing-youthful",
        hints: ["Which age group grows in an ageing population — and what does that group need?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q05",
        question:
          "Singapore has about 8,000 people per km² — one of the highest densities in the world. Why is it **not** usually described as over-populated?",
        options: [
          "Its population is falling quickly",
          "It has large areas of farmland to feed its people",
          "Wealth, trade and technology (such as NEWater and imported food) let it support its people at a high standard of living",
          "Over-population is measured only by total population, not density",
        ],
        answerIndex: 2,
        explanation:
          "Over-population means too many people **for the resources and technology available**. Singapore's wealth lets it import food and energy and use technology (NEWater, desalination, high-rise HDB towns), so its people enjoy a high standard of living. It has very little farmland, and its total population is still growing slowly, not falling.",
        difficulty: "core",
        guideRef: "over-under-population",
        hints: [
          "Over-population is about people compared with *what*?",
          "Where does Singapore get most of its food and water from?",
          "High density ≠ over-population if resources and technology keep up.",
        ],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q06",
        question: "Study the population pyramid for Country B. Which description is correct?",
        diagram: PYRAMID_B,
        options: [
          "It has an ageing population: 30% are aged 65+ and only 12% are aged 0–14",
          "It has a youthful population: most people are under 15",
          "Men outnumber women in the 65+ age group",
          "The birth rate must be very high because the base is wide",
        ],
        answerIndex: 0,
        explanation:
          "Add both sides of each bar: 65+ = 13% + 17% = 30%; 0–14 = 6% + 6% = 12%. A narrow base and wide top show an **ageing** population with a low birth rate. In the 65+ bar, women (17%) outnumber men (13%) — women usually live longer.",
        difficulty: "core",
        guideRef: "ageing-youthful",
        hints: [
          "Read the key: left = male, right = female. Add both sides of a bar.",
          "Is the base (0–14) wide or narrow?",
          "65+: 13 + 17 = ?",
        ],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q07",
        question: "Which of these was a common **exception** to China's One-Child Policy?",
        options: [
          "Families in big cities such as Shanghai could have three children",
          "Couples who paid no tax could have any number of children",
          "Every family could have a second child if the first was a boy",
          "In many rural areas, families could have a second child if their first child was a girl",
        ],
        answerIndex: 3,
        explanation:
          "The rules were enforced most strictly in cities. In many rural provinces a second child was allowed if the first was a girl (reflecting the need for farm labour and a strong preference for sons), and many ethnic minorities were exempt. City families were the *least* likely to get exceptions.",
        difficulty: "core",
        guideRef: "china-one-child",
        hints: [
          "Was the policy strictest in the city or the countryside?",
          "Think about which families needed extra help on the farm — and which sex of child many parents hoped for.",
        ],
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q08",
        question:
          "Singapore's population policy changed direction in the 1980s. Which slogan marked the switch from **anti-natalist** to **pro-natalist**?",
        options: [
          "Stop at Two",
          "Have Three or More (if you can afford it)",
          "Later, Longer, Fewer",
          "Speak Mandarin",
        ],
        answerIndex: 1,
        explanation:
          "In 1987 Singapore replaced its 1970s 'Stop at Two' (anti-natalist) campaign with 'Have Three or More (if you can afford it)' because the birth rate had fallen well below replacement level. 'Later, Longer, Fewer' was China's 1970s anti-natalist campaign, and 'Speak Mandarin' was a language campaign, not a population policy.",
        difficulty: "core",
        guideRef: "population-policies",
        hints: [
          "'Stop at Two' was the 1970s policy — was it trying to raise or lower births?",
          "A pro-natalist slogan would ask for *more* children.",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q09",
        question: "What is meant by the **carrying capacity** of an area?",
        options: [
          "The maximum number of people the area's resources can support sustainably",
          "The number of people that can fit into the area's public transport at rush hour",
          "The average number of children born per woman",
          "The number of people living in each square kilometre",
        ],
        answerIndex: 0,
        explanation:
          "Carrying capacity is the largest population an area's resources (food, water, energy, land) can support **without being damaged** over time. People per km² is population density — a different idea — and children per woman is the fertility rate.",
        difficulty: "core",
        guideRef: "over-under-population",
        hints: ["Think of the area 'carrying' its people on its resources.", "The word 'sustainably' matters — can it keep going for ever?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q10",
        question:
          "Niger has one of the highest fertility rates in the world (roughly 6 children per woman in recent estimates). Which problem is it **most** likely to face?",
        options: [
          "A shortage of children to fill its schools",
          "A very high pension bill for its elderly",
          "Not enough school places, healthcare and jobs for a fast-growing number of young people",
          "A shrinking total population",
        ],
        answerIndex: 2,
        explanation:
          "A very high fertility rate creates a **youthful** population: about half of Niger's people are under 15, so demand for schools, healthcare and (later) jobs grows fast. Big pension bills and shrinking populations are problems of ageing countries such as Japan.",
        difficulty: "core",
        guideRef: "ageing-youthful",
        hints: ["Lots of births today means lots of what in 5, 10 and 20 years' time?", "Which needs belong to children and young adults?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q11",
        question: "What does the **4-2-1 problem** in China describe?",
        options: [
          "Four children sharing two bedrooms in one flat",
          "One only child who may have to support two parents and four grandparents in old age",
          "Four boys born for every two girls in one village",
          "A ratio of four workers to every two children and one pensioner",
        ],
        answerIndex: 1,
        explanation:
          "After decades of one-child families, many young adults have no brothers or sisters to share the care of their **2 parents and 4 grandparents** — a top-heavy family tree. It is not a sex ratio (no region had 4 boys per 2 girls) and not a worker ratio.",
        difficulty: "core",
        guideRef: "china-one-child",
        hints: ["Draw a family tree with one child at the bottom.", "How many parents and grandparents does that one child have?"],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q12",
        question:
          "Why do pro-natalist cash bonuses often have only a **small** effect on birth rates in rich countries?",
        options: [
          "Most people in rich countries never hear about the bonuses",
          "Governments in rich countries rarely pay the bonuses",
          "Death rates in rich countries are rising quickly",
          "The main reasons for small families — housing and childcare costs, long working hours and careers — matter far more than a one-off payment",
        ],
        answerIndex: 3,
        explanation:
          "Raising a child costs far more than any bonus, and choices about marriage, careers, housing and childcare drive family size. So bonuses may nudge the *timing* of births but rarely raise fertility much. The schemes are widely publicised and are paid, so the other options don't explain the weak effect.",
        difficulty: "core",
        guideRef: "population-policies",
        hints: ["Compare the size of a bonus with the cost of raising a child for 20 years.", "What else makes couples decide to have fewer children?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q13",
        question:
          "The graph shows how standard of living changes with population size when resources and technology stay the same. A country moves from point Q to point R. Which statement explains the change?",
        diagram: OPTIMUM_GRAPH,
        options: [
          "New technology has increased the resources available",
          "The population has fallen below the optimum",
          "Emigration has reduced the number of people",
          "The population has grown beyond the optimum, so there are fewer resources per person",
        ],
        answerIndex: 3,
        explanation:
          "Q is the peak — the **optimum population**. Moving right to R means *more* people sharing the same resources, so standard of living falls: over-population. New technology would raise the whole curve, not move along it; a falling population or emigration would move the country *left*, not right.",
        difficulty: "challenge",
        guideRef: "over-under-population",
        hints: [
          "What does moving to the right along the x-axis mean?",
          "Which point is the peak, and what is that peak called?",
          "If technology changed, would the country move along the curve or would the curve itself shift?",
        ],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q14",
        question:
          "In some Chinese provinces in the 2000s, about 118 boys or more were born for every 100 girls. Naturally, about 105 boys are born for every 100 girls. What explanation do most geographers give for the gap?",
        options: [
          "Boys are naturally more likely to survive birth in China",
          "A strong preference for sons, combined with strict limits on family size, led some families to use sex-selective abortion or not register baby girls",
          "The One-Child Policy allowed only boys to be registered",
          "Death rates were higher among adult women",
        ],
        answerIndex: 1,
        explanation:
          "With only one (or two) children allowed, some families who wanted a son used ultrasound scans and sex-selective abortion, or didn't register daughters. The policy never banned registering girls, and adult death rates cannot change the ratio **at birth**. Exact figures vary by source and region, so treat them as estimates.",
        difficulty: "challenge",
        guideRef: "china-one-child",
        hints: [
          "The data are about the ratio **at birth** — so which options can't affect it?",
          "If you could only have one child and felt strong pressure to have a son, what might happen?",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-problems-m1-q15",
        question:
          "A country has a fertility rate of 1.1, a fast-ageing population and strong public opposition to large-scale immigration. Which policy mix is **most** likely to slow the shrinking of its workforce over the next 10 years?",
        options: [
          "Raise the retirement age, help more women and older people into work, and use automation",
          "Pay a large Baby Bonus and do nothing else",
          "Introduce an anti-natalist policy to reduce the number of dependants",
          "Lower the retirement age so young people can find jobs",
        ],
        answerIndex: 0,
        explanation:
          "The key phrase is **'next 10 years'**. A baby born now won't work for about 20 years, so a Baby Bonus alone is too slow. Keeping older people in work, helping more women into jobs and using robots act **immediately**. Lowering the retirement age shrinks the workforce, and an anti-natalist policy would make long-term ageing worse.",
        difficulty: "challenge",
        guideRef: "population-policies",
        hints: [
          "Underline the time frame in the question.",
          "How old is a baby born today in 10 years' time?",
          "Which option adds workers *now* without needing immigration?",
        ],
        strategy: "Use the command word",
      },
    ],
  },
  // =========================== MCQ PAPER 2 ===========================
  {
    id: "population-problems-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "population-problems-m2-q01",
        question: "A country with **too few people** to make full use of its resources is described as…",
        options: ["over-populated", "densely populated", "under-populated", "at its optimum population"],
        answerIndex: 2,
        explanation:
          "**Under-population** means there are not enough people to develop the resources fully (Canada and Australia are classic textbook examples). 'Densely populated' only describes people per km² — it says nothing about resources.",
        difficulty: "warmup",
        guideRef: "over-under-population",
        hints: ["'Too few' — which prefix means 'not enough'?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q02",
        question: "China's One-Child Policy is an example of…",
        options: ["an anti-natalist policy", "a pro-natalist policy", "an immigration policy", "a pension policy"],
        answerIndex: 0,
        explanation:
          "It aimed to **reduce** births, so it was **anti-natalist** (anti = against, natal = birth). Pro-natalist policies, such as Singapore's Baby Bonus, try to raise births.",
        difficulty: "warmup",
        guideRef: "china-one-child",
        hints: ["Was China trying to have more babies or fewer?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q03",
        question: "Roughly what percentage of Japan's population was aged 65 or over in the mid-2020s?",
        options: ["About 5%", "About 12%", "About 50%", "About 29%"],
        answerIndex: 3,
        explanation:
          "Japan is the world's most aged large country: **about 29%** of its people are 65+ (roughly 3 in 10). About 12% is closer to the share of Japan's *children* (0–14), a common mix-up; 50% is far too high.",
        difficulty: "warmup",
        guideRef: "ageing-youthful",
        hints: ["Think 'nearly 3 in every 10 people'."],
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q04",
        question: "In which year did Singapore introduce the **Baby Bonus** scheme?",
        options: ["1965", "2001", "1972", "2021"],
        answerIndex: 1,
        explanation:
          "The Baby Bonus began in **2001**, giving cash gifts and savings support to parents. 1965 is the year of Singapore's independence, and the early 1970s were the anti-natalist 'Stop at Two' years.",
        difficulty: "warmup",
        guideRef: "population-policies",
        hints: ["It started at the turn of the millennium."],
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q05",
        question: "Study the population pyramid for Country A. What percentage of the population is aged 0–14?",
        diagram: PYRAMID_A,
        options: ["24%", "48%", "15%", "6%"],
        answerIndex: 1,
        explanation:
          "The 0–14 bar shows 24% male **and** 24% female: 24 + 24 = **48%**. Choosing 24% means you read only one side of the pyramid. 6% is the 65+ total (3 + 3).",
        difficulty: "core",
        guideRef: "ageing-youthful",
        hints: ["Each bar has two halves — what do the left and right sides show?", "Add the male and female values for the 0–14 bar."],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q06",
        question:
          "Which statement best supports the argument that **consumption**, not just the number of people, puts pressure on the Earth's resources?",
        options: [
          "Niger's population is growing fast, so it must use most of the world's resources",
          "Every country with a high population density is over-populated",
          "Population size and resource use are unrelated",
          "An average person in a rich country such as the USA uses many times more energy and resources than an average person in Niger",
        ],
        answerIndex: 3,
        explanation:
          "If one rich person uses as much energy as many people in a poor country, then *how* people live matters as much as *how many* there are. Niger's fast growth does not mean it uses most resources — its use per person is tiny. Density alone never proves over-population.",
        difficulty: "core",
        guideRef: "over-under-population",
        hints: ["'Consumption' = how much each person uses.", "Which option compares use **per person**?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q07",
        question: "Which of these was an **incentive** (reward) used under China's One-Child Policy?",
        options: [
          "One-child families could receive benefits such as extra payments and priority for housing, schooling or healthcare",
          "Large fines for having a second child",
          "Free land for families with three children",
          "Exemption from the policy for all city families",
        ],
        answerIndex: 0,
        explanation:
          "Couples who signed a one-child pledge could receive rewards such as cash bonuses and better access to housing, schools and healthcare. Fines were a **penalty**, not an incentive. City families were the strictest-controlled, not exempt.",
        difficulty: "core",
        guideRef: "china-one-child",
        hints: ["Incentive = carrot; penalty = stick.", "Which option *rewards* families for having one child?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q08",
        question: "France is often given as an example of long-running **pro-natalist** policy. Which measure does it use?",
        options: [
          "Fines for families with more than two children",
          "Free sterilisation for parents with two children",
          "Family allowances and tax benefits that become more generous for larger families",
          "A complete ban on immigration",
        ],
        answerIndex: 2,
        explanation:
          "France gives family allowances (from the second child), tax breaks that grow with family size, and subsidised childcare. Fines and sterilisation are **anti-natalist** tools, and France has not banned immigration.",
        difficulty: "core",
        guideRef: "population-policies",
        hints: ["Pro-natalist policies *reward* having children.", "Which option makes a bigger family cheaper?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q09",
        question: "Which piece of evidence would **best** support the claim that a region is over-populated?",
        options: [
          "It has a high population density",
          "It contains a very large city",
          "It has a high birth rate",
          "Many people lack enough food, water, jobs or housing even though its resources are already fully used",
        ],
        answerIndex: 3,
        explanation:
          "Over-population is a **mismatch between people and resources**, so the best evidence is shortages despite resources being used fully. High density (think Singapore), a big city or a high birth rate on their own do not prove there are too many people for the resources.",
        difficulty: "core",
        guideRef: "over-under-population",
        hints: ["What is over-population measured against?", "Which option mentions resources running short?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q10",
        question: "China's population **fell** in 2022 for the first time in about six decades. What was the main reason?",
        options: [
          "A sudden rise in emigration to Singapore",
          "Deaths outnumbered births, after decades of low fertility",
          "The One-Child Policy was brought back in 2021",
          "A war reduced the population",
        ],
        answerIndex: 1,
        explanation:
          "Births had fallen to a record low while deaths rose in an ageing population, giving a **natural decrease**. In 2021 China moved to a *Three*-Child Policy — it did not restore the One-Child Policy — and migration is far too small to shrink a population of about 1.4 billion.",
        difficulty: "core",
        guideRef: "china-one-child",
        hints: ["Population change = births − deaths ± migration. Which part is biggest for China?", "What happens when births fall below deaths?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q11",
        question: "Which of these is an **opportunity** that an ageing population can bring?",
        options: [
          "More young workers paying tax",
          "A higher birth rate",
          "Healthy retired people can volunteer, look after grandchildren and spend money in the 'silver economy'",
          "Lower healthcare costs",
        ],
        answerIndex: 2,
        explanation:
          "Many older people are active: they volunteer, provide free childcare for grandchildren and spend their savings on leisure, travel and care services (the 'silver economy'). An ageing population means *fewer* young workers and *higher* healthcare costs, not lower.",
        difficulty: "core",
        guideRef: "ageing-youthful",
        hints: ["An opportunity is a benefit — which option is actually good news *and* true?", "What can retired people do with their time and savings?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q12",
        question: "Which is an example of an **immigration** policy used to tackle a population problem?",
        options: [
          "Singapore granting work passes and citizenship to some foreigners to support its workforce while its birth rate stays low",
          "China fining couples who had a second child",
          "France paying family allowances",
          "India's sterilisation campaign in the 1970s",
        ],
        answerIndex: 0,
        explanation:
          "Immigration policies change population by controlling who can move **into** a country. Singapore uses work passes and new citizens to top up its workforce. China's fines and India's sterilisation campaign were anti-natalist; France's allowances are pro-natalist.",
        difficulty: "core",
        guideRef: "population-policies",
        hints: ["Immigration = people moving in.", "Which option is about people from other countries?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q13",
        question:
          "Use the pyramid for Country B. The dependency ratio = (people aged 0–14 + people aged 65+) ÷ people aged 15–64 × 100. What is Country B's dependency ratio?",
        diagram: PYRAMID_B,
        options: ["About 72", "About 42", "About 138", "About 30"],
        answerIndex: 0,
        explanation:
          "Dependants = 0–14 (6 + 6 = 12%) + 65+ (13 + 17 = 30%) = 42%. Working age = 100 − 42 = 58%. 42 ÷ 58 × 100 ≈ **72**. 42 forgets to divide by the workers; 138 divides the wrong way round (58 ÷ 42); 30 counts only the elderly.",
        difficulty: "challenge",
        guideRef: "ageing-youthful",
        hints: [
          "First add up the dependants: both young and old, both sexes.",
          "Working-age % = 100 − dependants %.",
          "Divide dependants by workers, then × 100.",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q14",
        question:
          "Which is the **strongest** criticism of the claim 'The One-Child Policy alone caused China's birth rate to fall'?",
        options: [
          "China's population is still over 1 billion",
          "The policy ended in 2015",
          "China's fertility had already fallen sharply in the 1970s — from about 6 to under 3 children per woman — before the policy began",
          "Other countries have higher birth rates than China",
        ],
        answerIndex: 2,
        explanation:
          "If fertility was already falling fast **before 1980** (thanks to the 1970s 'Later, Longer, Fewer' campaign, better healthcare and education), the policy cannot be the *only* cause. A large total population, the end date, or other countries' birth rates don't test the claim about causes.",
        difficulty: "challenge",
        guideRef: "china-one-child",
        hints: [
          "To prove something is not the *only* cause, what evidence would you need?",
          "Look for an option about what happened **before** 1980.",
        ],
        strategy: "Weigh both sides then judge",
      },
      {
        kind: "mcq",
        id: "population-problems-m2-q15",
        question:
          "Between 1960 and 2020 the world's population more than doubled (from about 3 billion to nearly 8 billion), yet average food production per person **rose**. Which conclusion is best supported?",
        options: [
          "Population growth can never cause food shortages",
          "The world as a whole is under-populated",
          "Nobody in the world goes hungry any more",
          "Technology such as high-yield seeds, fertilisers and irrigation raised the number of people the Earth can feed",
        ],
        answerIndex: 3,
        explanation:
          "Food per person rose because **technology increased carrying capacity** (the Green Revolution). That does not prove shortages can *never* happen, nor that hunger has ended — hundreds of millions are still undernourished, often because of poverty and conflict. 'Never' and 'nobody' are over-generalisations.",
        difficulty: "challenge",
        guideRef: "over-under-population",
        hints: [
          "Watch out for absolute words such as 'never' and 'nobody'.",
          "What must have changed for more people to get more food each?",
        ],
        strategy: "Eliminate options",
      },
    ],
  },
  // =========================== MCQ PAPER 3 ===========================
  {
    id: "population-problems-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "population-problems-m3-q01",
        question: "A population with a high proportion of people aged under 15 is described as…",
        options: ["ageing", "optimum", "under-populated", "youthful"],
        answerIndex: 3,
        explanation:
          "A **youthful** population has a large share of children and young people (e.g. Niger). Ageing is the opposite. Under-populated and optimum describe people compared with resources, not age.",
        difficulty: "warmup",
        guideRef: "ageing-youthful",
        hints: ["Which word describes age structure, and which describes people versus resources?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q02",
        question: "Which country is most often used in textbooks as an example of **under-population**?",
        options: ["Bangladesh", "Singapore", "Canada", "India"],
        answerIndex: 2,
        explanation:
          "**Canada** has vast resources (land, minerals, energy, fresh water) and relatively few people, so it actively recruits immigrants to develop them. Singapore and Bangladesh are densely populated; India is the world's most populous country.",
        difficulty: "warmup",
        guideRef: "over-under-population",
        hints: ["Which country has huge resources and a small population for its size?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q03",
        question: "In 2021 China changed its policy again. Couples were then allowed up to…",
        options: ["two children", "three children", "one child", "four children"],
        answerIndex: 1,
        explanation:
          "The **Three-Child Policy** was announced in 2021. Two children had been allowed since 2016, and the One-Child Policy ended in 2015.",
        difficulty: "warmup",
        guideRef: "china-one-child",
        hints: ["1980: one; 2016: two; 2021: …?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q04",
        question: "Singapore's 'Stop at Two' campaign in the 1970s was…",
        options: ["anti-natalist", "pro-natalist", "an immigration policy", "a retirement policy"],
        answerIndex: 0,
        explanation:
          "'Stop at Two' tried to **limit** family size, so it was anti-natalist. Singapore only switched to pro-natalist policies in 1987.",
        difficulty: "warmup",
        guideRef: "population-policies",
        hints: ["Is 'stop' asking for more babies or fewer?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q05",
        question: "Which was a **penalty** often used to enforce China's One-Child Policy?",
        options: [
          "Large fines for an unauthorised extra child",
          "Free education for an only child",
          "Longer maternity leave",
          "Priority for housing",
        ],
        answerIndex: 0,
        explanation:
          "Families who broke the rules could face large fines (often several times a year's income) and could lose jobs or benefits. Free education and priority housing were **incentives** — rewards for obeying.",
        difficulty: "core",
        guideRef: "china-one-child",
        hints: ["Penalty = punishment.", "Which option would a family *not* want?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q06",
        question: "Japan has an ageing population. Which response helps Japan cope with fewer workers **without** relying on a higher birth rate?",
        options: [
          "Building more primary schools",
          "Using robots and automation in care homes and factories, and encouraging older people to keep working",
          "Introducing an anti-natalist policy",
          "Lowering the retirement age",
        ],
        answerIndex: 1,
        explanation:
          "Automation replaces missing workers and longer working lives keep experienced people in jobs. Lowering the retirement age would *remove* workers, an anti-natalist policy would make ageing worse, and Japan already has spare school places as its number of children falls.",
        difficulty: "core",
        guideRef: "ageing-youthful",
        hints: ["Which option adds workers or replaces them?", "Check each option: does it make the worker shortage better or worse?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q07",
        question:
          "Study the simplified table.\n\n| Country | Population (millions) | Food it can produce (enough for … million people) |\n|---|---|---|\n| P | 20 | 60 |\n| Q | 50 | 50 |\n| R | 80 | 55 |\n\nUsing only this table, which country appears **over-populated**?",
        options: ["Country P", "Country Q", "Country R", "None of them can be judged without each country's area"],
        answerIndex: 2,
        explanation:
          "Country R has 80 million people but food for only 55 million — more people than its resources support. P has far more food than people (under-population) and Q is balanced. You do not need area: over-population compares people with **resources**, not with land area.",
        difficulty: "core",
        guideRef: "over-under-population",
        hints: ["For each country, compare the two numbers.", "Which country has more people than its food can support?"],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q08",
        question: "Why is a pro-natalist policy described as a **slow** way to fix a shortage of workers?",
        options: [
          "Babies are not counted in the census",
          "Pro-natalist policies usually reduce birth rates",
          "Families cannot claim bonuses until their child turns 20",
          "A baby born today will not join the workforce for around 18–20 years",
        ],
        answerIndex: 3,
        explanation:
          "Even if a bonus raises births straight away, those children only start work about two decades later. That's why ageing countries also use immigration, automation and later retirement. Babies *are* counted in censuses, and Singapore's Baby Bonus is paid in the child's early years.",
        difficulty: "core",
        guideRef: "population-policies",
        hints: ["How old are people when they start full-time work?", "Think about the time lag between birth and work."],
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q09",
        question: "Which statement about **youthful** populations is correct?",
        options: [
          "Their main problem is paying pensions",
          "They have a narrow base on a population pyramid",
          "They can bring a 'demographic dividend' if young people get education and jobs",
          "They are found mainly in Europe and Japan",
        ],
        answerIndex: 2,
        explanation:
          "If birth rates fall and a large young generation gets good schooling and jobs, a country gains many workers and relatively few dependants — the **demographic dividend**. Youthful populations have a *wide* base and are found mainly in sub-Saharan Africa; pensions are an ageing-population problem.",
        difficulty: "core",
        guideRef: "ageing-youthful",
        hints: ["Picture a youthful pyramid — wide or narrow at the bottom?", "Which option describes a possible benefit?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q10",
        question: "Why did China move to a **Two-Child Policy** in 2016?",
        options: [
          "To reduce the number of elderly people",
          "Because the population was growing too fast",
          "Because the United Nations ordered it to",
          "To slow population ageing and the shrinking of the working-age population",
        ],
        answerIndex: 3,
        explanation:
          "Decades of low fertility meant fewer young workers and a fast-growing elderly population. Allowing two children aimed to raise births and ease ageing. Growth was already slow, so 'growing too fast' would call for *stricter* limits, not looser ones.",
        difficulty: "core",
        guideRef: "china-one-child",
        hints: ["Allowing more children is a move towards raising or lowering births?", "What problem do extra births solve in the long run?"],
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q11",
        question: "Which is the best definition of **over-population**?",
        options: [
          "When there are too many people for the available resources and technology to support at a decent standard of living",
          "When a country has more than 100 million people",
          "When population density is above 1,000 people per km²",
          "When the birth rate is higher than the death rate",
        ],
        answerIndex: 0,
        explanation:
          "Over-population is a **relationship** between people and resources. A fixed number of people or a density threshold can't define it: Singapore is far denser than 1,000 per km² yet supports its people well. A birth rate above the death rate just means the population is growing.",
        difficulty: "core",
        guideRef: "over-under-population",
        hints: ["Is over-population a number, or a comparison?", "Test each option against Singapore."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q12",
        question: "India's past family-planning campaigns are often discussed critically. What happened during the **Emergency of 1975–77**?",
        options: [
          "India introduced a Baby Bonus",
          "Millions of people were sterilised, many under pressure or by force, causing a backlash against family planning",
          "India banned immigration",
          "India brought in a strict One-Child Policy",
        ],
        answerIndex: 1,
        explanation:
          "During the Emergency, sterilisation targets led to millions of operations, many forced or pressured. The anger it caused made family planning unpopular for years — an example of how **coercive** anti-natalist policies can backfire. India never had a One-Child Policy; that was China.",
        difficulty: "core",
        guideRef: "population-policies",
        hints: ["India was trying to reduce births — so which options are pro-natalist and can be ruled out?", "Which option was China's policy, not India's?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q13",
        question:
          "Study the pyramid for Country A. Which **policy priority** best fits its population structure over the next 20 years?",
        diagram: PYRAMID_A,
        options: [
          "Building more care homes and raising pension ages",
          "Expanding schools and training, creating jobs, and improving access to family planning",
          "Paying a large Baby Bonus",
          "Recruiting foreign workers to fill job vacancies",
        ],
        answerIndex: 1,
        explanation:
          "Country A is **youthful**: 48% are aged 0–14 and only 6% are 65+. Its children need schools now and jobs soon, and family planning can slow growth. Care homes and a Baby Bonus suit an ageing country; with so many young people about to reach working age, A is unlikely to need foreign workers.",
        difficulty: "challenge",
        guideRef: "ageing-youthful",
        hints: [
          "First describe the pyramid: wide or narrow base? What % are 0–14?",
          "In 20 years, today's 0–14s will be how old?",
          "Which option prepares for lots of young adults?",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q14",
        question:
          "A student writes: 'China's gender imbalance proves that the One-Child Policy was a complete failure.' What is the **main weakness** of this argument?",
        options: [
          "It judges the policy on one side-effect and ignores its main aim — slowing population growth — which it did achieve to some extent",
          "China has never had a gender imbalance",
          "Gender imbalance is caused only by migration",
          "The policy was never enforced",
        ],
        answerIndex: 0,
        explanation:
          "To judge success you must test a policy against its **aims**. The gender imbalance is a serious side-effect, but population growth did slow (even if fertility was already falling before 1980). The other options are factually wrong: China did have a high sex ratio at birth, and the policy was enforced, often harshly.",
        difficulty: "challenge",
        guideRef: "china-one-child",
        hints: ["What was the policy *trying* to do?", "Can one negative side-effect alone prove 'complete failure'?"],
        strategy: "Weigh both sides then judge",
      },
      {
        kind: "mcq",
        id: "population-problems-m3-q15",
        question:
          "Singapore's resident fertility rate was about 0.97 in 2023, despite the Baby Bonus and other incentives since 2001. What does this **best** suggest?",
        options: [
          "The Baby Bonus caused the birth rate to fall",
          "Singapore should switch to an anti-natalist policy",
          "Money incentives alone cannot outweigh deeper factors such as housing and childcare costs, work pressure and later marriage",
          "Singapore's total population must be falling quickly",
        ],
        answerIndex: 2,
        explanation:
          "Fertility kept falling *despite* incentives, so other forces are stronger. That doesn't mean the bonus **caused** the fall (correlation is not causation), and Singapore's total population has kept growing slowly because of immigration. Switching to anti-natalism would make ageing worse.",
        difficulty: "challenge",
        guideRef: "population-policies",
        hints: [
          "Two things happening together doesn't mean one caused the other.",
          "Does a low birth rate always mean a falling total population? Think about migration.",
        ],
        strategy: "Spot the misconception",
      },
    ],
  },
];
