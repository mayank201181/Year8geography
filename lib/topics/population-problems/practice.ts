import type { TopicPractice } from "../../types.ts";

// Resource diagrams (drawn exactly from the stated percentages).
const PYRAMID_A = `<svg viewBox="0 0 480 226" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Population pyramid for Country A: ages 65+ 3% male 3% female; 40 to 64 8% and 8%; 15 to 39 15% and 15%; 0 to 14 24% and 24%"><rect width="480" height="226" fill="#ffffff"/><text x="240" y="20" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Country A (2024, simplified)</text><text x="120" y="34" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#334155">Male</text><text x="360" y="34" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#334155">Female</text><rect x="222" y="44" width="18" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="44" width="18" height="26" fill="#fecaca" stroke="#334155"/><text x="216" y="62" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">3%</text><text x="264" y="62" font-size="12" font-family="sans-serif" fill="#1f2937">3%</text><text x="12" y="62" font-size="12" font-family="sans-serif" fill="#1f2937">65+</text><rect x="192" y="78" width="48" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="78" width="48" height="26" fill="#fecaca" stroke="#334155"/><text x="186" y="96" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">8%</text><text x="294" y="96" font-size="12" font-family="sans-serif" fill="#1f2937">8%</text><text x="12" y="96" font-size="12" font-family="sans-serif" fill="#1f2937">40–64</text><rect x="150" y="112" width="90" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="112" width="90" height="26" fill="#fecaca" stroke="#334155"/><text x="144" y="130" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">15%</text><text x="336" y="130" font-size="12" font-family="sans-serif" fill="#1f2937">15%</text><text x="12" y="130" font-size="12" font-family="sans-serif" fill="#1f2937">15–39</text><rect x="96" y="146" width="144" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="146" width="144" height="26" fill="#fecaca" stroke="#334155"/><text x="90" y="164" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">24%</text><text x="390" y="164" font-size="12" font-family="sans-serif" fill="#1f2937">24%</text><text x="12" y="164" font-size="12" font-family="sans-serif" fill="#1f2937">0–14</text><line x1="240" y1="40" x2="240" y2="182" stroke="#1f2937"/><text x="240" y="200" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">% of total population (bar length 6 px = 1%)</text></svg>`;
const PYRAMID_B = `<svg viewBox="0 0 480 226" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Population pyramid for Country B: ages 65+ 13% male 17% female; 40 to 64 16% and 16%; 15 to 39 13% and 13%; 0 to 14 6% and 6%"><rect width="480" height="226" fill="#ffffff"/><text x="240" y="20" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Country B (2024, simplified)</text><text x="120" y="34" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#334155">Male</text><text x="360" y="34" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#334155">Female</text><rect x="162" y="44" width="78" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="44" width="102" height="26" fill="#fecaca" stroke="#334155"/><text x="156" y="62" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">13%</text><text x="348" y="62" font-size="12" font-family="sans-serif" fill="#1f2937">17%</text><text x="12" y="62" font-size="12" font-family="sans-serif" fill="#1f2937">65+</text><rect x="144" y="78" width="96" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="78" width="96" height="26" fill="#fecaca" stroke="#334155"/><text x="138" y="96" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">16%</text><text x="342" y="96" font-size="12" font-family="sans-serif" fill="#1f2937">16%</text><text x="12" y="96" font-size="12" font-family="sans-serif" fill="#1f2937">40–64</text><rect x="162" y="112" width="78" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="112" width="78" height="26" fill="#fecaca" stroke="#334155"/><text x="156" y="130" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">13%</text><text x="324" y="130" font-size="12" font-family="sans-serif" fill="#1f2937">13%</text><text x="12" y="130" font-size="12" font-family="sans-serif" fill="#1f2937">15–39</text><rect x="204" y="146" width="36" height="26" fill="#bae6fd" stroke="#334155"/><rect x="240" y="146" width="36" height="26" fill="#fecaca" stroke="#334155"/><text x="198" y="164" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">6%</text><text x="282" y="164" font-size="12" font-family="sans-serif" fill="#1f2937">6%</text><text x="12" y="164" font-size="12" font-family="sans-serif" fill="#1f2937">0–14</text><line x1="240" y1="40" x2="240" y2="182" stroke="#1f2937"/><text x="240" y="200" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">% of total population (bar length 6 px = 1%)</text></svg>`;
const OPTIMUM_GRAPH = `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of standard of living against population size. The curve rises to a peak labelled Q, the optimum population, then falls. Point P is on the rising left side, point R on the falling right side."><rect width="480" height="270" fill="#ffffff"/><line x1="60" y1="220" x2="450" y2="220" stroke="#1f2937" stroke-width="2"/><line x1="60" y1="30" x2="60" y2="220" stroke="#1f2937" stroke-width="2"/><path d="M70 200 Q 255 -20 440 200" fill="none" stroke="#334155" stroke-width="3"/><line x1="255" y1="90" x2="255" y2="220" stroke="#334155" stroke-dasharray="5 4"/><circle cx="130" cy="140" r="6" fill="#c7d2fe" stroke="#1f2937"/><circle cx="255" cy="90" r="6" fill="#bbf7d0" stroke="#1f2937"/><circle cx="380" cy="140" r="6" fill="#fecaca" stroke="#1f2937"/><text x="118" y="132" font-size="14" text-anchor="end" font-family="sans-serif" fill="#1f2937">P</text><text x="255" y="78" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Q</text><text x="392" y="132" font-size="14" font-family="sans-serif" fill="#1f2937">R</text><text x="255" y="240" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Population size (resources and technology fixed) →</text><text x="22" y="125" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="rotate(-90 22 125)">Standard of living per person →</text></svg>`;

const SINGAPORE_TIMELINE =
  "| Date | Singapore's population policy and fertility |\n|---|---|\n| 1966 | Family Planning and Population Board set up |\n| 1970s | 'Stop at Two' campaign: e.g. higher hospital delivery fees for third and later children, school-place priority for small families |\n| Late 1970s | Fertility rate falls below replacement level (2.1 children per woman) |\n| 1986 | Fertility rate about 1.4 |\n| 1987 | New slogan: 'Have Three or More (if you can afford it)' |\n| 2001 | Baby Bonus scheme introduced |\n| 2023 | Resident fertility rate about 0.97 |";

const CHINA_CENSUS =
  "| Census year | % of population aged 65+ (approx.) | Boys born per 100 girls (approx.) |\n|---|---|---|\n| 1982 | 4.9 | 108 |\n| 2000 | 7.0 | 117 |\n| 2010 | 8.9 | 118 |\n| 2020 | 13.5 | 111 |\n\n*Rounded figures from China's national censuses. A natural sex ratio at birth is about 105 boys per 100 girls.*";

const TWO_COUNTRIES =
  "| Indicator | Kaldora | Venmark |\n|---|---|---|\n| Population | 45 million | 12 million |\n| Area | 300,000 km² | 900,000 km² |\n| People without safe drinking water | 35% | 2% |\n| Unemployment | 28% | 4% |\n| Food | Imports 40% of its food; many families can't afford enough | Exports food; mines and farms report unfilled jobs |\n\n*Kaldora and Venmark are fictional countries.*";

export const practice: TopicPractice = {
  // ============================== QUIZ ==============================
  quiz: [
    {
      kind: "short",
      id: "population-problems-quiz-q01",
      question:
        "Name the population size that gives the **highest standard of living per person** for the resources and technology a country has. (Two words.)",
      answer: { type: "text", accept: ["optimum population", "optimum", "optimal population", "optimum population size"], display: "Optimum population" },
      traps: [
        {
          spec: { type: "text", accept: ["carrying capacity"] },
          feedback: "Carrying capacity is the *maximum* number of people the resources can support — the optimum is the number that gives the *best* standard of living, which is usually lower.",
        },
      ],
      solution: [
        "'Highest standard of living per person' = the best balance between people and resources.",
        "That balance point is called the **optimum population**.",
      ],
      commonError: "Mixing up 'optimum' (best) with 'maximum' (most).",
      difficulty: "warmup",
      guideRef: "over-under-population",
      hints: ["The word means 'best' — it's used in maths and science too."],
    },
    {
      kind: "short",
      id: "population-problems-quiz-q02",
      question: "What word describes a population policy designed to encourage people to have **more** children?",
      answer: { type: "text", accept: ["pro-natalist", "pronatalist", "pro natalist", "pro-natal", "pro-natalism"], display: "Pro-natalist" },
      traps: [
        {
          spec: { type: "text", accept: ["anti-natalist"] },
          feedback: "Anti-natalist policies try to *reduce* births (like China's One-Child Policy). You need the opposite.",
        },
      ],
      solution: ["*Pro* = for, *natal* = birth.", "A policy 'for births' is **pro-natalist** (e.g. Singapore's Baby Bonus)."],
      difficulty: "warmup",
      guideRef: "population-policies",
      hints: ["Pro = for; natal = birth."],
    },
    {
      kind: "short",
      id: "population-problems-quiz-q03",
      question: "In which year did China introduce its **Three-Child Policy**?",
      answer: { type: "number", value: 2021, allowFraction: false },
      traps: [
        { spec: { type: "number", value: 2016 }, feedback: "2016 was the start of the **Two**-Child Policy." },
        { spec: { type: "number", value: 2015 }, feedback: "2015 is when the end of the One-Child Policy was announced." },
      ],
      solution: ["1980: One-Child Policy begins.", "2016: Two-Child Policy.", "**2021**: Three-Child Policy."],
      difficulty: "warmup",
      guideRef: "china-one-child",
      hints: ["One child from 1980, two from 2016, three from…?"],
      strategy: "Sketch it",
    },
    {
      kind: "short",
      id: "population-problems-quiz-q04",
      question:
        "A youthful country has a birth rate of 46 per 1,000 and a death rate of 12 per 1,000. What is its **rate of natural increase**, in people per 1,000 per year?",
      answer: { type: "number", value: 34 },
      traps: [{ spec: { type: "number", value: 58 }, feedback: "You added the rates. Natural increase = birth rate **minus** death rate." }],
      solution: ["Natural increase = birth rate − death rate.", "46 − 12 = **34 per 1,000** (that is 3.4% a year)."],
      commonError: "Adding the birth and death rates instead of subtracting.",
      difficulty: "core",
      guideRef: "ageing-youthful",
      hints: ["Births add people; deaths remove them.", "Subtract the death rate from the birth rate."],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "population-problems-quiz-q05",
      question: "Which country is the best example of a **youthful** population?",
      options: ["Japan", "Italy", "Niger", "Germany"],
      answerIndex: 2,
      explanation:
        "Niger has one of the world's highest fertility rates, and about half its people are under 15. Japan, Italy and Germany all have **ageing** populations with low birth rates.",
      difficulty: "core",
      guideRef: "ageing-youthful",
      hints: ["Which country has a very high birth rate?", "Three of these are rich countries with low birth rates."],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "population-problems-quiz-q06",
      question:
        "In China, an only child may one day have to support two parents and four grandparents. What is the name of this problem? (Give the three numbers.)",
      answer: { type: "text", accept: ["4-2-1", "421", "4 2 1", "4:2:1", "4-2-1 problem", "4–2–1"], display: "4-2-1" },
      traps: [
        { spec: { type: "text", accept: ["1-2-4"] }, feedback: "Right numbers, wrong order — it's named from the top of the family tree: 4 grandparents, 2 parents, 1 child." },
      ],
      solution: ["Draw the family tree: 4 grandparents → 2 parents → 1 child.", "It is called the **4-2-1 problem**."],
      difficulty: "core",
      guideRef: "china-one-child",
      hints: ["Sketch a family tree with one child at the bottom.", "Count each generation, starting with the grandparents."],
      strategy: "Sketch it",
    },
    {
      kind: "short",
      id: "population-problems-quiz-q07",
      question:
        "An island's farmland and fishing can sustainably feed 30,000 people. 42,000 people live there. By how many people does the population **exceed** the island's carrying capacity?",
      answer: { type: "number", value: 12000 },
      traps: [{ spec: { type: "number", value: 72000 }, feedback: "You added the numbers. Find the difference: 42,000 − 30,000." }],
      solution: ["Carrying capacity = 30,000 people.", "Excess = 42,000 − 30,000 = **12,000 people**."],
      difficulty: "core",
      guideRef: "over-under-population",
      hints: ["Carrying capacity is the maximum the resources support.", "How far above that maximum is the actual population?"],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "population-problems-quiz-q08",
      question: "Which of these is an **anti-natalist** measure?",
      options: [
        "Cash gifts when a baby is born",
        "Free contraception and family-planning advice",
        "Longer paid parental leave",
        "Bigger tax breaks for each extra child",
      ],
      answerIndex: 1,
      explanation:
        "Free contraception and family-planning advice help people have **fewer** children, so it is anti-natalist. Cash gifts, longer parental leave and tax breaks for children all *encourage* births — they are pro-natalist.",
      difficulty: "core",
      guideRef: "population-policies",
      hints: ["Anti = against, natal = birth.", "Three options make having children easier or cheaper."],
    },
    {
      kind: "short",
      id: "population-problems-quiz-q09",
      question:
        "In Country Z, 18% of people are aged 0–14, 60% are aged 15–64 and 22% are aged 65+. Calculate the **dependency ratio** = (aged 0–14 + aged 65+) ÷ aged 15–64 × 100. Give your answer to the nearest whole number.",
      answer: { type: "number", value: 67 },
      traps: [
        { spec: { type: "number", value: 40 }, feedback: "40 is the % of dependants. You still need to divide by the working-age % (60) and multiply by 100." },
        { spec: { type: "number", value: 150 }, feedback: "You divided the wrong way round: dependants go on **top**." },
      ],
      solution: ["Dependants = 18 + 22 = 40%.", "Workers = 60%.", "40 ÷ 60 × 100 = 66.7 → **67**."],
      commonError: "Dividing workers by dependants instead of dependants by workers.",
      difficulty: "core",
      guideRef: "ageing-youthful",
      hints: ["Who counts as a dependant?", "Add the young and old percentages.", "Dependants ÷ workers × 100."],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "population-problems-quiz-q10",
      question:
        "Official figures (rounded) show China's population was about 1,412.60 million at the end of 2021 and about 1,411.75 million at the end of 2022. By how many **people** did it fall? Give a whole number of people.",
      answer: { type: "number", value: 850000, display: "850,000" },
      traps: [
        { spec: { type: "number", value: 0.85 }, feedback: "0.85 is the fall in **millions**. Convert to people: 0.85 × 1,000,000." },
        { spec: { type: "number", value: 85000 }, feedback: "Check your place value: 0.85 million = 850,000." },
      ],
      solution: ["1,412.60 − 1,411.75 = 0.85 million.", "0.85 × 1,000,000 = **850,000 people**."],
      commonError: "Leaving the answer in millions when the question asks for people.",
      difficulty: "core",
      guideRef: "china-one-child",
      hints: ["Subtract the 2022 figure from the 2021 figure.", "Your answer is in millions — multiply by 1,000,000."],
    },
  ],

  // ============================== PAPERS ==============================
  papers: [
    // ------------------------- PRACTICE PAPER 1 -------------------------
    {
      id: "population-problems-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "population-problems-p1-q01",
          question:
            "Give the term for the **maximum** number of people that an area's resources can support sustainably. (Two words.)",
          answer: { type: "text", accept: ["carrying capacity"], display: "Carrying capacity" },
          traps: [
            {
              spec: { type: "text", accept: ["optimum population", "optimum"] },
              feedback: "The optimum is the *best* population for standard of living — the question asks for the *maximum* the resources can support.",
            },
          ],
          solution: ["The maximum sustainable population an area can 'carry' is its **carrying capacity**."],
          difficulty: "warmup",
          guideRef: "over-under-population",
          hints: ["The land and resources 'carry' the people."],
        },
        {
          kind: "mcq",
          id: "population-problems-p1-q02",
          question: "Which of these is a **pro-natalist** policy?",
          options: [
            "China's 1970s 'Later, Longer, Fewer' campaign",
            "Singapore's 1970s 'Stop at Two' campaign",
            "Singapore's Baby Bonus scheme",
            "India's sterilisation campaign in the 1970s",
          ],
          answerIndex: 2,
          explanation:
            "The **Baby Bonus** (2001) rewards parents for having children, so it is pro-natalist. 'Later, Longer, Fewer', 'Stop at Two' and India's sterilisation drive all tried to *reduce* births — they were anti-natalist.",
          difficulty: "warmup",
          guideRef: "population-policies",
          hints: ["Which one rewards having babies?"],
        },
        {
          kind: "short",
          id: "population-problems-p1-q03",
          question: "Study the pyramid for Country A. What percentage of its total population is aged **0–14**?",
          diagram: PYRAMID_A,
          answer: { type: "number", value: 48, display: "48%" },
          traps: [{ spec: { type: "number", value: 24 }, feedback: "24% is only one side. Add male (24%) and female (24%)." }],
          solution: ["Male 0–14 = 24%; female 0–14 = 24%.", "24 + 24 = **48%**."],
          commonError: "Reading only one side of the pyramid.",
          difficulty: "warmup",
          guideRef: "ageing-youthful",
          hints: ["Each bar is split into male (left) and female (right)."],
          strategy: "Read the key first",
        },
        {
          kind: "short",
          id: "population-problems-p1-q04",
          question:
            "Use the pyramid for Country A. Calculate its **dependency ratio** = (% aged 0–14 + % aged 65+) ÷ % aged 15–64 × 100. Give your answer to the nearest whole number.",
          diagram: PYRAMID_A,
          answer: { type: "number", value: 117 },
          traps: [
            { spec: { type: "number", value: 54 }, feedback: "54% is the share of dependants. Now divide by the working-age share (46%) and × 100." },
            { spec: { type: "number", value: 85 }, feedback: "You divided workers by dependants. Dependants go on top: 54 ÷ 46." },
          ],
          solution: [
            "0–14 = 24 + 24 = 48%. 65+ = 3 + 3 = 6%. Dependants = 54%.",
            "Working age (15–39 and 40–64) = 15 + 15 + 8 + 8 = 46%. Check: 54 + 46 = 100 ✓",
            "54 ÷ 46 × 100 = 117.4 → **117**.",
          ],
          solutions: [
            { label: "Using the 100% shortcut", steps: ["Dependants = 48 + 6 = 54%.", "Workers = 100 − 54 = 46%.", "54 ÷ 46 × 100 ≈ 117."] },
          ],
          commonError: "Forgetting to count both sexes, or dividing the wrong way round.",
          difficulty: "core",
          guideRef: "ageing-youthful",
          hints: [
            "Add both sides of each bar first.",
            "Dependants are 0–14 and 65+. Everyone else is working age.",
            "Dependants ÷ working age × 100.",
          ],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "population-problems-p1-q05",
          question:
            "Study the pyramid for Country A. Describe its shape and suggest what it shows about the country's birth rate and life expectancy. [3 marks]",
          diagram: PYRAMID_A,
          marks: 3,
          modelAnswer:
            "Country A's pyramid has a very wide base and narrows quickly towards a thin top: 48% of people are aged 0–14 but only 6% are 65+. The wide base suggests a high birth rate. The narrow top suggests a low life expectancy, with relatively few people surviving into old age, so this is a youthful population.",
          markScheme: [
            { point: "Describes the shape (wide base, narrow top / triangular), with a figure such as 48% aged 0–14 or 6% aged 65+", keywords: ["wide base", "narrow", "triangle", "48", "6%", "6 per"] },
            { point: "Wide base → high birth rate", keywords: ["high birth rate", "many births", "lots of babies", "birth rate"] },
            { point: "Narrow top → low life expectancy / fewer people reach old age (youthful population)", keywords: ["life expectancy", "few elderly", "die young", "youthful", "short lives"] },
          ],
          commonError: "Describing the shape without using any figures from the pyramid.",
          difficulty: "core",
          guideRef: "ageing-youthful",
          hints: ["Start with the overall shape: wide or narrow base? wide or narrow top?", "Quote at least one figure.", "Link the base to births and the top to how long people live."],
          strategy: "TEA (Trend, Evidence, Anomaly)",
        },
        {
          kind: "short",
          id: "population-problems-p1-q06",
          question:
            "What is the name for the number of boys born for every 100 girls? (Two words, beginning with 's'.)",
          answer: { type: "text", accept: ["sex ratio", "sex ratio at birth", "gender ratio", "sex ratios"], display: "Sex ratio (at birth)" },
          traps: [
            { spec: { type: "text", accept: ["dependency ratio"] }, feedback: "The dependency ratio compares dependants with workers. You need the ratio of boys to girls." },
          ],
          solution: ["Boys per 100 girls is the **sex ratio** (here, the sex ratio at birth). Naturally it is about 105."],
          difficulty: "core",
          guideRef: "china-one-child",
          hints: ["It compares males and females.", "Which ratio name begins with 's'?"],
        },
        {
          kind: "written",
          id: "population-problems-p1-q07",
          question: "Explain how China's One-Child Policy was enforced. Refer to both **incentives** and **penalties**. [4 marks]",
          marks: 4,
          modelAnswer:
            "China used rewards to persuade families to have only one child. Couples who signed a one-child pledge could receive extra payments and priority for housing, schooling and healthcare. It also used punishments: families who had an unauthorised second child could face large fines and lose jobs or benefits, especially if they worked for the state. The policy was enforced through local family-planning officials and workplaces, and in some places there were forced abortions and sterilisations, which is one reason the policy was so controversial.",
          markScheme: [
            { point: "Incentive: payments / bonuses for one-child families", keywords: ["bonus", "payment", "money", "cash", "pledge", "certificate"] },
            { point: "Incentive: priority access to housing, schools or healthcare", keywords: ["housing", "school", "education", "healthcare", "priority"] },
            { point: "Penalty: fines for extra children", keywords: ["fine", "fines", "fined", "pay"] },
            { point: "Penalty: loss of jobs/benefits, or coercion such as forced abortion/sterilisation, enforced by local officials", keywords: ["job", "lose", "forced", "sterilis", "abortion", "officials", "punish"] },
          ],
          commonError: "Listing only penalties and forgetting the incentives (or vice versa).",
          difficulty: "core",
          guideRef: "china-one-child",
          hints: ["Carrot and stick: what were the carrots?", "What were the sticks?", "Who checked that families obeyed?"],
          strategy: "PEEL paragraph",
        },
        {
          kind: "short",
          id: "population-problems-p1-q08",
          question:
            "In one city, 59,000 boys and 50,000 girls were born in a year. Calculate the **sex ratio at birth**, in boys per 100 girls.",
          answer: { type: "number", value: 118 },
          traps: [
            { spec: { type: "number", value: 54, tolerance: 0.5 }, feedback: "That is the percentage of babies who were boys. The sex ratio is boys ÷ girls × 100." },
            { spec: { type: "number", value: 85, tolerance: 0.5 }, feedback: "You divided girls by boys. Boys go on top: 59,000 ÷ 50,000 × 100." },
          ],
          solution: ["Sex ratio = boys ÷ girls × 100.", "59,000 ÷ 50,000 = 1.18.", "1.18 × 100 = **118 boys per 100 girls** — well above the natural level of about 105."],
          commonError: "Dividing by the total number of babies instead of by the number of girls.",
          difficulty: "core",
          guideRef: "china-one-child",
          hints: ["Boys per 100 girls — which number goes on top?", "Boys ÷ girls, then × 100."],
          strategy: "Use figures from the source",
        },
        {
          kind: "mcq",
          id: "population-problems-p1-q09",
          question:
            "The graph shows standard of living against population size, with resources and technology fixed. Which point represents a country that could **benefit from more immigrants** to develop its resources?",
          diagram: OPTIMUM_GRAPH,
          options: ["P", "Q", "R", "Any point — immigration always raises standard of living"],
          answerIndex: 0,
          explanation:
            "P is to the **left** of the optimum: under-population. Adding people (e.g. immigrants) moves it right, towards Q, so standard of living rises. Q is already at the optimum, and at R more people would push living standards down further — so immigration does not *always* help.",
          difficulty: "core",
          guideRef: "over-under-population",
          hints: ["Adding people moves a country which way along the x-axis?", "From which point would moving right take you *up* the curve?"],
          strategy: "Read the key first",
        },
        {
          kind: "written",
          id: "population-problems-p1-q10",
          question:
            "'Over-population is about resources and technology, not just the number of people.' Explain this statement, using an example. [4 marks]",
          marks: 4,
          modelAnswer:
            "Over-population happens when there are too many people for the resources and technology available to support a decent standard of living, so it is a balance, not a fixed number. For example, Singapore has about 8,000 people per km² and almost no farmland, but its wealth and technology let it import food and produce water through NEWater and desalination, so it is not usually called over-populated. By contrast, a much less crowded rural area with poor soils, drought and little money for technology may not be able to feed its people. Technology can also raise carrying capacity: high-yield seeds and irrigation helped world food production per person rise even as population more than doubled after 1960.",
          markScheme: [
            { point: "Defines over-population as too many people for the resources / technology (a balance, not a number)", keywords: ["resources", "technology", "balance", "support", "too many people"] },
            { point: "Uses an example of a dense place that copes (e.g. Singapore with a figure)", keywords: ["singapore", "8,000", "8000", "newater", "import", "hdb"] },
            { point: "Contrasts with a less dense place that struggles because resources/technology are lacking", keywords: ["drought", "poor soil", "less dense", "sparse", "struggle", "rural"] },
            { point: "Explains that technology/trade can raise carrying capacity", keywords: ["carrying capacity", "green revolution", "irrigation", "seeds", "fertiliser", "trade"] },
          ],
          commonError: "Saying that a country is over-populated just because it is crowded.",
          difficulty: "core",
          guideRef: "over-under-population",
          hints: ["Start with a clear definition.", "Think of a very crowded place that is rich — is it over-populated?", "How can technology change the number of people an area can support?"],
          strategy: "PEEL paragraph",
          solutions: [
            { label: "Two-place comparison", steps: ["Define over-population.", "Dense but coping: Singapore (wealth, imports, NEWater).", "Less dense but struggling: drought-hit rural area.", "Conclude: resources and technology decide it, not numbers."] },
          ],
        },
        {
          kind: "written",
          id: "population-problems-p1-q11",
          question:
            "Study the timeline.\n\n" + SINGAPORE_TIMELINE + "\n\nUsing the timeline, explain why Singapore switched from an anti-natalist to a pro-natalist policy. [4 marks]",
          marks: 4,
          modelAnswer:
            "In the 1960s and 1970s Singapore wanted to slow rapid population growth, so it used anti-natalist measures such as the 'Stop at Two' campaign, with higher delivery fees for third children. These worked so well that the fertility rate fell below the replacement level of 2.1 by the late 1970s and was only about 1.4 by 1986. A rate this low means each generation is smaller than the last, leading to an ageing population and a future shortage of workers. So in 1987 the government reversed its policy with 'Have Three or More (if you can afford it)', and later added the Baby Bonus in 2001.",
          markScheme: [
            { point: "Early policy was anti-natalist to slow rapid growth (Stop at Two)", keywords: ["stop at two", "slow growth", "anti-natalist", "1970s", "fees"] },
            { point: "Fertility fell below replacement level (2.1) — uses timeline evidence", keywords: ["2.1", "replacement", "below", "late 1970s"] },
            { point: "Uses the 1986 figure (about 1.4) to show the rate became too low", keywords: ["1.4", "1986", "too low"] },
            { point: "Explains the problem: ageing / future labour shortage → policy reversed in 1987", keywords: ["ageing", "workers", "labour", "shortage", "1987", "have three", "reverse"] },
          ],
          commonError: "Describing the timeline without explaining *why* the low fertility rate was a problem.",
          difficulty: "core",
          guideRef: "population-policies",
          hints: ["What happened to the fertility rate after 'Stop at Two'?", "What does a fertility rate below 2.1 mean for the next generation?", "Quote at least two figures from the timeline."],
          strategy: "Use figures from the source",
        },
        {
          kind: "short",
          id: "population-problems-p1-q12",
          question:
            "Japan has about 124 million people (2024), and about 29% are aged 65 or over. Roughly how many **million** people in Japan are aged 65+? Give your answer to the nearest million.",
          answer: { type: "number", value: 36, display: "36 million" },
          traps: [
            { spec: { type: "number", value: 88 }, feedback: "That is the number *under* 65 (71%). You need 29% of 124 million." },
            { spec: { type: "number", value: 4 }, feedback: "Did you divide 124 by 29? Find 29% of 124: 124 × 0.29." },
          ],
          solution: ["29% = 0.29.", "124 × 0.29 = 35.96 million.", "To the nearest million: **36 million**."],
          commonError: "Finding the percentage *not* aged 65+.",
          difficulty: "core",
          guideRef: "ageing-youthful",
          hints: ["Turn 29% into a decimal.", "Multiply the total population by that decimal."],
        },
        {
          kind: "written",
          id: "population-problems-p1-q13",
          question:
            "Explain how a country can use **immigration** as part of its population policy. Use an example. [3 marks]",
          marks: 3,
          modelAnswer:
            "Immigration can quickly add working-age people to a country whose own birth rate is low. For example, Singapore's resident fertility rate is far below replacement level, so it uses work passes and grants citizenship and permanent residence to some foreigners to keep its workforce growing. Because migrants usually arrive as young adults, they pay taxes that help support an ageing population, although governments must balance this against pressure on housing and transport and public concern about integration.",
          markScheme: [
            { point: "Immigration adds working-age people / fills labour shortages quickly", keywords: ["workers", "workforce", "labour", "working age", "young adults", "jobs"] },
            { point: "Uses an example (e.g. Singapore work passes/citizenship, Canada)", keywords: ["singapore", "work pass", "citizenship", "permanent resident", "canada"] },
            { point: "Explains a benefit (taxes support the elderly) or a challenge (housing, integration)", keywords: ["tax", "pension", "elderly", "housing", "integration", "crowding", "tension"] },
          ],
          difficulty: "core",
          guideRef: "population-policies",
          hints: ["Who usually migrates — babies, young adults or pensioners?", "Which country with a very low birth rate relies on foreign workers?"],
          strategy: "Cause → process → effect",
        },
        {
          kind: "written",
          id: "population-problems-p1-q14",
          question: "'China's One-Child Policy was a success.' Evaluate this statement. [6 marks]",
          marks: 6,
          modelAnswer:
            "On one hand, the policy achieved its main aim of slowing population growth. The government claimed it prevented hundreds of millions of births (a figure many demographers dispute), and fewer children meant more money for education and helped China's rapid economic growth, lifting many people out of poverty.\n\nOn the other hand, it had serious costs. A strong preference for sons led to sex-selective abortion, and the sex ratio at birth reached about 118 boys per 100 girls around 2010, so millions of men may struggle to find wives. The 4-2-1 problem leaves only children supporting two parents and four grandparents, and the population is ageing fast — it began to fall in 2022. Enforcement involved fines and, in some places, forced abortions and sterilisations.\n\nIt is also hard to judge because China's fertility had already dropped from about 6 to under 3 children per woman in the 1970s, before the policy began.\n\nOverall, I think it was only a partial success: it met its short-term aim, but the long-term problems were so serious that China reversed it, moving to two children in 2016 and three in 2021.",
          markScheme: [
            { point: "Success: slowed population growth / fewer births (with a hedged figure or the claim of hundreds of millions)", keywords: ["slowed", "fewer births", "prevented", "400 million", "hundreds of millions", "growth"] },
            { point: "Success: helped economic growth / more spending per child on education", keywords: ["economic", "economy", "education", "poverty", "richer", "resources"] },
            { point: "Failure: gender imbalance / sex-selective abortion (e.g. about 118 boys per 100 girls)", keywords: ["gender", "sex ratio", "118", "boys", "girls", "imbalance"] },
            { point: "Failure: ageing population / 4-2-1 problem / population fall in 2022 / human-rights abuses", keywords: ["ageing", "4-2-1", "421", "elderly", "2022", "forced", "human rights"] },
            { point: "Complicating evidence: fertility was already falling before 1980 / other factors", keywords: ["already falling", "1970s", "before 1980", "later longer fewer", "development"] },
            { point: "Justified overall judgement (e.g. partial success; reversed in 2016/2021)", keywords: ["overall", "partial", "to some extent", "judgement", "2016", "2021", "reversed"] },
          ],
          commonError: "Writing a one-sided answer, or ending without a clear judgement that weighs both sides.",
          difficulty: "challenge",
          guideRef: "china-one-child",
          hints: [
            "What was the policy trying to achieve? Did it?",
            "List the side-effects: think about boys and girls, grandparents, and the workforce.",
            "Was the birth rate already falling before 1980?",
            "Finish with 'Overall…' and say *why* one side outweighs the other.",
          ],
          strategy: "Weigh both sides then judge",
        },
        {
          kind: "written",
          id: "population-problems-p1-q15",
          question:
            "Compare the problems faced by a country with an **ageing** population (such as Japan) and one with a **youthful** population (such as Niger). [4 marks]",
          marks: 4,
          modelAnswer:
            "Both types of country have a high dependency load, but the dependants are different. In Japan, about 29% of people are aged 65+, so pension and healthcare costs are rising while the number of workers paying tax shrinks; some rural schools and villages are closing as there are too few young people. In Niger, about half the population is under 15, so the pressure is on schools, maternal and child healthcare, and creating enough jobs for the young people who will soon reach working age. So while Japan worries about too few workers in the future, Niger worries about too few jobs and services for its many young people.",
          markScheme: [
            { point: "Similarity: both have many dependants / high dependency ratio", keywords: ["both", "dependants", "dependency", "similar"] },
            { point: "Ageing problem: pensions/healthcare costs, fewer workers/taxpayers (Japan, about 29% aged 65+)", keywords: ["pension", "healthcare", "fewer workers", "tax", "29", "japan", "care"] },
            { point: "Youthful problem: schools, child healthcare, need for jobs (Niger, about half under 15)", keywords: ["schools", "jobs", "unemployment", "children", "niger", "half", "under 15"] },
            { point: "Direct comparison using linking words (whereas / however / while)", keywords: ["whereas", "however", "while", "but", "in contrast", "on the other hand"] },
          ],
          commonError: "Writing two separate descriptions without ever comparing them directly.",
          difficulty: "core",
          guideRef: "ageing-youthful",
          hints: ["Which age group does each country have too many of?", "What does each of those groups need?", "Use a linking word such as 'whereas' at least once."],
          strategy: "Compare and contrast",
        },
      ],
    },
    // ------------------------- PRACTICE PAPER 2 -------------------------
    {
      id: "population-problems-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "population-problems-p2-q01",
          question: "What word describes a population policy designed to **reduce** the birth rate?",
          answer: { type: "text", accept: ["anti-natalist", "antinatalist", "anti natalist", "anti-natal", "anti-natalism"], display: "Anti-natalist" },
          traps: [{ spec: { type: "text", accept: ["pro-natalist"] }, feedback: "Pro-natalist policies try to *increase* births. You need the opposite." }],
          solution: ["*Anti* = against, *natal* = birth, so a policy that reduces births is **anti-natalist** (e.g. China's One-Child Policy)."],
          difficulty: "warmup",
          guideRef: "population-policies",
          hints: ["Anti = against; natal = birth."],
        },
        {
          kind: "mcq",
          id: "population-problems-p2-q02",
          question: "Which feature of a population pyramid shows an **ageing** population?",
          options: [
            "A wide base and a narrow top",
            "Equal bars at every age",
            "A very wide bar for ages 15–39 only",
            "A narrow base and wide bars near the top",
          ],
          answerIndex: 3,
          explanation:
            "A **narrow base** means few births, and **wide upper bars** mean many people living into old age — the signs of an ageing population (like Japan). A wide base and narrow top is the opposite: a youthful population.",
          difficulty: "warmup",
          guideRef: "ageing-youthful",
          hints: ["The base shows children; the top shows the elderly."],
        },
        {
          kind: "short",
          id: "population-problems-p2-q03",
          question: "Study the pyramid for Country B. What percentage of its population is aged **65 and over**?",
          diagram: PYRAMID_B,
          answer: { type: "number", value: 30, display: "30%" },
          traps: [
            { spec: { type: "number", value: 17 }, feedback: "17% is only the women. Add the men (13%)." },
            { spec: { type: "number", value: 13 }, feedback: "13% is only the men. Add the women (17%)." },
          ],
          solution: ["Male 65+ = 13%; female 65+ = 17%.", "13 + 17 = **30%**."],
          difficulty: "warmup",
          guideRef: "ageing-youthful",
          hints: ["Add the male and female sides of the top bar."],
          strategy: "Read the key first",
        },
        {
          kind: "short",
          id: "population-problems-p2-q04",
          question:
            "An island can produce enough food for 2.4 million people, but 3 million people live there. What **percentage** of the population could be fed from the island's own food?",
          answer: { type: "number", value: 80, display: "80%" },
          traps: [{ spec: { type: "number", value: 125 }, feedback: "You divided population by food. Food is the part, population the whole: 2.4 ÷ 3 × 100." }],
          solution: ["Fraction fed = 2.4 ÷ 3 = 0.8.", "0.8 × 100 = **80%**. So 20% of people (600,000) depend on imports or go short."],
          commonError: "Dividing the wrong way round.",
          difficulty: "core",
          guideRef: "over-under-population",
          hints: ["Which number is the 'part' and which is the 'whole'?", "Part ÷ whole × 100."],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "population-problems-p2-q05",
          question:
            "Study the pyramid for Country B. Using evidence from the pyramid, explain **two** challenges this population structure creates. [4 marks]",
          diagram: PYRAMID_B,
          marks: 4,
          modelAnswer:
            "Country B has an ageing population: 30% are aged 65+ while only 12% are aged 0–14. First, this means rising costs for pensions and healthcare, because many more elderly people need support and long-term care. Second, because the base is so narrow, fewer young people will enter the workforce in future, so there will be a shortage of workers and fewer taxpayers to fund those pensions — the burden on each worker will grow.",
          markScheme: [
            { point: "Evidence: 30% aged 65+ (or narrow base, 12% aged 0–14)", keywords: ["30", "12", "narrow base", "65+", "65 and over"] },
            { point: "Challenge 1: rising pension / healthcare / care costs", keywords: ["pension", "healthcare", "care", "hospital", "cost"] },
            { point: "Challenge 2: shrinking workforce / labour shortage", keywords: ["fewer workers", "labour shortage", "workforce", "worker shortage", "fewer young"] },
            { point: "Explains the link: fewer taxpayers supporting more dependants", keywords: ["tax", "taxpayers", "burden", "support", "dependants"] },
          ],
          commonError: "Naming challenges without quoting any figures from the pyramid.",
          difficulty: "core",
          guideRef: "ageing-youthful",
          hints: ["First, quote the key figures for the top and the base.", "What do lots of elderly people need?", "What happens in 20 years if the base is narrow?"],
          strategy: "Use figures from the source",
        },
        {
          kind: "short",
          id: "population-problems-p2-q06",
          question:
            "A Chinese county recorded 1,250 births in 1979 and 750 births in 1990. Calculate the **percentage decrease** in births.",
          answer: { type: "number", value: 40, display: "40%" },
          traps: [
            { spec: { type: "number", value: 66.7, tolerance: 0.5 }, feedback: "You divided by the *new* value (750). Percentage change always divides by the **original** value (1,250)." },
            { spec: { type: "number", value: 500 }, feedback: "500 is the decrease in births. Now turn it into a percentage of the original 1,250." },
          ],
          solution: ["Decrease = 1,250 − 750 = 500.", "500 ÷ 1,250 = 0.4.", "0.4 × 100 = **40%**."],
          commonError: "Dividing by the new value instead of the original.",
          difficulty: "core",
          guideRef: "china-one-child",
          hints: ["Find the change first.", "Divide the change by the **original** value, then × 100."],
        },
        {
          kind: "written",
          id: "population-problems-p2-q07",
          question:
            "Study the census data for China.\n\n" + CHINA_CENSUS + "\n\nDescribe the changes shown and suggest how the One-Child Policy contributed to them. [4 marks]",
          marks: 4,
          modelAnswer:
            "The share of people aged 65+ almost tripled, from about 4.9% in 1982 to 13.5% in 2020, rising fastest after 2010. Fewer births under the One-Child Policy meant each new generation was smaller, so the elderly became a larger share of the population. The sex ratio at birth rose from about 108 in 1982 to a peak of about 118 in 2010, far above the natural 105, because some families who could only have one child used sex-selective abortion to have a son. It then fell to about 111 by 2020, possibly as rules were relaxed and attitudes towards daughters changed, though it was still above the natural level.",
          markScheme: [
            { point: "Describes the rise in % aged 65+ with figures (about 4.9% → 13.5%)", keywords: ["4.9", "13.5", "rose", "increased", "tripled", "ageing"] },
            { point: "Explains ageing: fewer births → smaller young generations → elderly share rises", keywords: ["fewer births", "fewer children", "smaller", "low birth rate", "one child"] },
            { point: "Describes the sex ratio rising to about 118 (2010) then falling to about 111 (2020), above natural 105", keywords: ["118", "111", "105", "peak", "fell", "rose"] },
            { point: "Explains the sex ratio: son preference + one-child limit → sex-selective abortion", keywords: ["son", "boys", "sex-selective", "abortion", "preference"] },
          ],
          commonError: "Describing only one column, or giving no figures.",
          difficulty: "core",
          guideRef: "china-one-child",
          hints: ["Describe each column in turn with first and last figures (TEA).", "Is there an anomaly in the sex-ratio column?", "Link each change to fewer births or to son preference."],
          strategy: "TEA (Trend, Evidence, Anomaly)",
        },
        {
          kind: "short",
          id: "population-problems-p2-q08",
          question:
            "In China's census data, 7.0% of China's population was aged 65+ in 2000 and 13.5% in 2020. By how many **percentage points** did this share rise?",
          answer: { type: "number", value: 6.5, tolerance: 0.05, display: "6.5 percentage points" },
          traps: [
            { spec: { type: "number", value: 93, tolerance: 1 }, feedback: "That's the *percentage change* (6.5 ÷ 7.0 × 100). The question asks for the difference in **percentage points**: just subtract." },
          ],
          solution: ["Percentage points = new % − old %.", "13.5 − 7.0 = **6.5 percentage points**."],
          commonError: "Calculating a percentage change when the question asks for percentage points.",
          difficulty: "core",
          guideRef: "china-one-child",
          hints: ["Percentage points means a simple difference between two percentages.", "13.5 − 7.0"],
          strategy: "Use figures from the source",
        },
        {
          kind: "mcq",
          id: "population-problems-p2-q09",
          question: "Which is the **main reason** coercive anti-natalist policies, such as forced sterilisation, are widely criticised?",
          options: [
            "They always increase the birth rate",
            "They violate people's human rights and can cause lasting distrust of family planning",
            "They are cheaper than voluntary family planning",
            "They only work in rich countries",
          ],
          answerIndex: 1,
          explanation:
            "Forcing people to have fewer children takes away their right to choose. India's sterilisation drive during the Emergency (1975–77) caused such anger that family planning stayed unpopular for years. Coercion does not increase births, and being cheaper is not a criticism.",
          difficulty: "core",
          guideRef: "population-policies",
          hints: ["'Coercive' means forcing people.", "Think about India's experience in the 1970s."],
        },
        {
          kind: "written",
          id: "population-problems-p2-q10",
          question:
            "Study the table.\n\n" + TWO_COUNTRIES + "\n\nUsing the table, explain which country shows signs of **over-population** and which shows signs of **under-population**. [4 marks]",
          marks: 4,
          modelAnswer:
            "Kaldora shows signs of over-population. 35% of its people lack safe drinking water, unemployment is 28% and it imports 40% of its food, yet many families still can't afford enough — so it has too many people for its resources and jobs. Venmark shows signs of under-population: it exports food and has unfilled jobs in mines and farms, with only 4% unemployment, suggesting it has too few people to use its resources fully. Density supports this: Kaldora has 150 people per km² (45 million ÷ 300,000) compared with about 13 in Venmark, but it is the shortages, not the density, that show over-population.",
          markScheme: [
            { point: "Identifies Kaldora as over-populated", keywords: ["kaldora"] },
            { point: "Uses Kaldora evidence: 35% no safe water / 28% unemployment / food shortages", keywords: ["35", "28", "water", "unemployment", "40%", "afford"] },
            { point: "Identifies Venmark as under-populated with evidence (food exports, unfilled jobs, 4% unemployment)", keywords: ["venmark", "exports", "unfilled", "vacancies", "4%", "jobs"] },
            { point: "Links evidence to resources vs people (not just density); may calculate densities (150 vs about 13 per km²)", keywords: ["resources", "too many", "too few", "150", "13", "density"] },
          ],
          commonError: "Deciding using density alone, without looking at resources and living standards.",
          difficulty: "core",
          guideRef: "over-under-population",
          hints: ["Over-population shows up as shortages. Which country has them?", "Under-population shows up as unused resources or unfilled jobs.", "Quote at least two figures for each country."],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "population-problems-p2-q11",
          question:
            "France's fertility rate (roughly 1.6–1.8 in recent years) has long been one of the highest in the EU and far above Singapore's (about 0.97 in 2023). Suggest **three** reasons why France's pro-natalist approach may have been more effective. [3 marks]",
          marks: 3,
          modelAnswer:
            "First, France's support is long-running and covers the whole of childhood — family allowances, tax breaks that grow with each child, and benefits continue for years, rather than a one-off payment. Second, cheap or free childcare and free nursery school from age 3 make it easier for both parents to keep working. Third, working culture may matter: France's legal working week is 35 hours, so parents have more time for family, while long hours and high costs of housing and tuition in Singapore can discourage larger families.",
          markScheme: [
            { point: "Long-term / generous financial support that grows with family size (not one-off)", keywords: ["long-term", "allowance", "tax", "every child", "grows", "generous", "years"] },
            { point: "Affordable childcare / free nursery school lets parents keep working", keywords: ["childcare", "nursery", "creche", "crèche", "school", "work"] },
            { point: "Work-life balance / culture / lower pressures than Singapore (hours, housing, tuition costs)", keywords: ["hours", "35", "work-life", "culture", "housing", "tuition", "stress", "pressure"] },
          ],
          difficulty: "core",
          guideRef: "population-policies",
          hints: ["Is France's help a one-off payment or long-lasting?", "What stops parents with jobs having more children?", "Compare working life and costs in the two countries."],
          strategy: "Compare and contrast",
        },
        {
          kind: "short",
          id: "population-problems-p2-q12",
          question:
            "What term describes a fall in population that happens because **deaths outnumber births**? (Two words.)",
          answer: { type: "text", accept: ["natural decrease", "natural population decrease", "negative natural increase", "natural decline"], display: "Natural decrease" },
          commonError: "Writing 'natural increase', which is when births are greater than deaths.",
          solution: ["Births − deaths is negative → the population falls naturally: **natural decrease** (as in Japan, and in China since 2022)."],
          difficulty: "core",
          guideRef: "ageing-youthful",
          hints: ["It's the opposite of 'natural increase'.", "No migration is involved — only births and deaths."],
        },
        {
          kind: "written",
          id: "population-problems-p2-q13",
          question:
            "Explain how Niger's youthful population could become an **opportunity** rather than a problem. [3 marks]",
          marks: 3,
          modelAnswer:
            "About half of Niger's people are under 15, so in the coming decades a huge number will reach working age. If the government invests in education, especially for girls, and in healthcare, these young people could become a skilled workforce. As educated women tend to have fewer children, the birth rate would fall, leaving many workers and relatively few dependants — a 'demographic dividend' that could boost economic growth, as happened in parts of East Asia.",
          markScheme: [
            { point: "Many young people will become a large future workforce", keywords: ["workforce", "workers", "working age", "half", "young"] },
            { point: "Needs investment in education/skills (especially for girls) and healthcare", keywords: ["education", "school", "girls", "skills", "training", "healthcare"] },
            { point: "Falling birth rate + more workers than dependants → demographic dividend / economic growth", keywords: ["demographic dividend", "growth", "economy", "fewer dependants", "birth rate falls"] },
          ],
          difficulty: "core",
          guideRef: "ageing-youthful",
          hints: ["What will today's children be doing in 20 years?", "What must happen for them to be productive workers?", "Do you know the term 'demographic dividend'?"],
          strategy: "Cause → process → effect",
        },
        {
          kind: "written",
          id: "population-problems-p2-q14",
          question:
            "'Pro-natalist policies do not work.' To what extent do you agree? Refer to Singapore and at least one other country. [6 marks]",
          marks: 6,
          modelAnswer:
            "There is strong evidence for the statement. Singapore has used pro-natalist policies since 1987 and the Baby Bonus since 2001, yet its resident fertility rate fell to about 0.97 in 2023, far below the replacement level of 2.1. The deeper reasons for small families — the cost of housing and education, long working hours, and people marrying later — seem stronger than cash incentives.\n\nHowever, some policies seem to help. France has long combined family allowances, tax breaks that grow with each child and affordable childcare, and its fertility rate has long been one of the highest in the EU, at roughly 1.6–1.8 in recent years. Policies may also stop fertility from falling even further than it otherwise would — we cannot see what Singapore's rate would have been without them.\n\nOverall, I mostly agree: no rich country has pushed fertility back up to 2.1 with incentives alone. But generous, long-term policies that make it easier to combine work and family can make a modest difference, so it is more accurate to say pro-natalist policies work only weakly, and best as part of a wider package that includes immigration and automation.",
          markScheme: [
            { point: "Agree: Singapore evidence — incentives since 1987/2001 but fertility about 0.97 (2023)", keywords: ["singapore", "0.97", "baby bonus", "2001", "1987", "still low"] },
            { point: "Explains why incentives have little effect (costs, careers, housing, late marriage)", keywords: ["cost", "housing", "career", "work", "marry later", "childcare", "expensive"] },
            { point: "Disagree: France (or another country) — generous, long-term support linked to relatively high fertility", keywords: ["france", "allowance", "childcare", "1.8", "1.6", "higher", "eu"] },
            { point: "Recognises the counterfactual: rates might have fallen further without the policies", keywords: ["without", "even lower", "further", "would have", "slowed the fall"] },
            { point: "Notes no rich country has returned to replacement level (2.1) using incentives alone", keywords: ["2.1", "replacement", "no country", "alone"] },
            { point: "Justified conclusion (e.g. they work only weakly / best as part of a package)", keywords: ["overall", "to some extent", "mostly agree", "partly", "conclusion", "package"] },
          ],
          commonError: "Only using Singapore, or giving both sides without a clear, justified judgement.",
          difficulty: "challenge",
          guideRef: "population-policies",
          hints: [
            "What has happened to Singapore's fertility rate since the Baby Bonus began?",
            "Which European country is often given as a pro-natalist success?",
            "Could the policies have stopped things getting even worse?",
            "Decide: do they work not at all, a little, or a lot? Justify it.",
          ],
          strategy: "Weigh both sides then judge",
        },
        {
          kind: "written",
          id: "population-problems-p2-q15",
          question: "Explain why the **4-2-1 family structure** puts pressure on young adults in China. [3 marks]",
          marks: 3,
          modelAnswer:
            "Because of the One-Child Policy, many young adults have no brothers or sisters, so they may be the only person available to support two parents and four grandparents. This means a heavy financial burden — helping to pay for care, healthcare and living costs, especially where pensions are small. It also takes time: caring for elderly relatives can be hard to combine with a full-time job, particularly if the young adult has moved to a city far from their family.",
          markScheme: [
            { point: "Only child has no siblings to share care of 2 parents + 4 grandparents", keywords: ["only child", "no siblings", "brothers", "sisters", "two parents", "four grandparents", "4"] },
            { point: "Financial burden (care, healthcare, small pensions)", keywords: ["money", "pay", "cost", "financial", "pension", "healthcare"] },
            { point: "Time / care burden, especially if working or living far away (migration to cities)", keywords: ["time", "care", "look after", "job", "work", "city", "far away", "migrate"] },
          ],
          difficulty: "core",
          guideRef: "china-one-child",
          hints: ["Who else could share the care if the child had siblings?", "Think about both money and time."],
          strategy: "Cause → process → effect",
        },
      ],
    },
  ],

  // ============================ CHALLENGE ============================
  challenge: [
    {
      kind: "written",
      id: "population-problems-ch-q01",
      question:
        "Marovia is a fictional island country. Its fertility rate is 1.2, 27% of its people are aged 65+, it has little spare land, and opinion polls show many citizens worry about large-scale immigration. Design a **population policy package** for Marovia for the next 30 years and justify each part. [6 marks]",
      marks: 6,
      modelAnswer:
        "Marovia's problem is an ageing, shrinking population, so it needs measures that work over different time scales.\n\nIn the short term, it should raise the retirement age gradually and support flexible work so healthy older people can keep working, and invest in automation and robots in care homes and factories. These add or replace workers immediately.\n\nIn the medium term, it should use a limited, skills-based immigration scheme focused on shortage jobs such as nursing, with integration programmes to ease public concern. This is quicker than raising births but must be balanced against land and housing pressure.\n\nIn the long term, it should introduce pro-natalist support that lasts through childhood — affordable childcare, paid parental leave for both parents and housing priority for families — rather than one-off cash, because Singapore's experience shows bonuses alone barely raise fertility.\n\nTogether these share the burden: no single policy can solve ageing on its own, and the package respects Marovia's limited land and public opinion.",
      markScheme: [
        { point: "Diagnoses the problem using the data (ageing: 27% aged 65+, fertility 1.2 below 2.1)", keywords: ["27", "1.2", "2.1", "ageing", "shrinking", "below replacement"] },
        { point: "Short-term measure: later retirement / older workers / women into work, justified as immediate", keywords: ["retirement", "older workers", "women", "immediate", "now", "flexible"] },
        { point: "Uses technology / automation to replace missing workers", keywords: ["robot", "automation", "technology", "machines"] },
        { point: "Limited, managed immigration justified despite public concern (skills, integration, land limits)", keywords: ["immigration", "skilled", "limited", "integration", "quota", "migrants"] },
        { point: "Long-term pro-natalist support beyond cash (childcare, leave, housing), using evidence such as Singapore", keywords: ["childcare", "parental leave", "housing", "baby bonus", "singapore", "long-term"] },
        { point: "Justifies the package overall (different time scales / no single fix / fits constraints)", keywords: ["package", "combination", "time scales", "no single", "together", "balance"] },
      ],
      commonError: "Proposing only a Baby Bonus, which would not add any workers for about 20 years.",
      difficulty: "challenge",
      guideRef: "population-policies",
      hints: [
        "Is Marovia's problem too many people or too few young people?",
        "Sort your ideas by how quickly they work: now, in 5–10 years, in 20+ years.",
        "How can you use immigration while respecting public worries and limited land?",
        "Learn from Singapore: what does cash alone achieve?",
      ],
      strategy: "Think at different scales",
    },
    {
      kind: "short",
      id: "population-problems-ch-q02",
      question:
        "A country today has 9 million people aged 0–14, 40 million aged 15–64 and 15 million aged 65+. Projections for 2050 are 8 million aged 0–14, 32 million aged 15–64 and 20 million aged 65+. Calculate the **2050 dependency ratio** = (0–14 + 65+) ÷ (15–64) × 100, to 1 decimal place.",
      answer: { type: "number", value: 87.5, tolerance: 0.05 },
      traps: [
        { spec: { type: "number", value: 60 }, feedback: "60 is **today's** ratio ((9 + 15) ÷ 40 × 100). Use the 2050 figures." },
        { spec: { type: "number", value: 114.3, tolerance: 0.1 }, feedback: "You divided workers by dependants. Dependants (8 + 20) go on top." },
        { spec: { type: "number", value: 62.5 }, feedback: "You used only the 65+ group. Dependants include the 0–14s too." },
      ],
      solution: [
        "2050 dependants = 8 + 20 = 28 million.",
        "2050 workers = 32 million.",
        "28 ÷ 32 × 100 = **87.5**.",
        "Compare today: 24 ÷ 40 × 100 = 60. So each 100 workers will support about 28 more dependants than now, even though there are *fewer* children.",
      ],
      commonError: "Using today's figures or leaving out the children.",
      difficulty: "challenge",
      guideRef: "ageing-youthful",
      hints: [
        "Use the 2050 figures only.",
        "Dependants = 0–14 plus 65+.",
        "Divide by 15–64, then × 100.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-problems-ch-q03",
      question:
        "A student argues: 'Countries with high birth rates, like Niger, are over-populated, and they are the main cause of pressure on the world's resources.' Identify and explain **four** weaknesses in this argument. [4 marks]",
      marks: 4,
      modelAnswer:
        "First, a high birth rate measures *growth*, not over-population: over-population compares people with resources and technology, so you would need evidence of shortages. Second, the argument ignores consumption: an average person in a rich country such as the USA uses many times more energy and resources than an average person in Niger, so low-birth-rate rich countries put far more pressure on global resources. Third, poverty, conflict and drought, not just numbers, often explain shortages in countries such as Niger. Fourth, it ignores technology and trade, which can raise carrying capacity — a fast-growing population can be supported if investment, education and farming improve.",
      markScheme: [
        { point: "High birth rate ≠ over-population (over-population is people vs resources)", keywords: ["birth rate", "not the same", "resources", "growth", "definition"] },
        { point: "Consumption: rich countries use far more resources per person", keywords: ["consumption", "per person", "rich", "usa", "energy", "use more"] },
        { point: "Other causes of shortage: poverty, conflict, climate/drought, poor governance", keywords: ["poverty", "conflict", "war", "drought", "climate", "government"] },
        { point: "Technology/trade/investment can raise carrying capacity", keywords: ["technology", "trade", "carrying capacity", "investment", "farming", "education"] },
      ],
      commonError: "Agreeing with the student or only saying 'it's not fair' without geographical reasoning.",
      difficulty: "challenge",
      guideRef: "over-under-population",
      hints: [
        "Check the definition: what is over-population measured against?",
        "Who uses the most resources *per person*?",
        "What else could cause shortages in Niger?",
        "Can technology change how many people an area supports?",
      ],
      strategy: "Spot the misconception",
    },
    {
      kind: "short",
      id: "population-problems-ch-q04",
      question:
        "Use the **rule of 70**: doubling time (years) ≈ 70 ÷ annual growth rate (%). A youthful country of 25 million people grows by 3.5% a year. If that rate stays the same, roughly how many **years** will it take for the population to reach **100 million**?",
      answer: { type: "number", value: 40, tolerance: 1 },
      traps: [
        { spec: { type: "number", value: 20, tolerance: 1 }, feedback: "20 years is one doubling time — that only takes the population from 25 to 50 million. How many doublings reach 100 million?" },
        { spec: { type: "number", value: 80, tolerance: 1 }, feedback: "100 million is 4 times 25 million, but that is only **two** doublings (25 → 50 → 100), not four." },
        { spec: { type: "number", value: 57, tolerance: 1 }, feedback: "You used 100 instead of 70 for the doubling time. The rule uses 70 because growth compounds each year." },
      ],
      solution: [
        "Doubling time ≈ 70 ÷ 3.5 = 20 years.",
        "25 million → 50 million → 100 million is **two** doublings.",
        "2 × 20 = **40 years** — which is why schools and jobs are such pressing needs in fast-growing youthful countries.",
      ],
      solutions: [
        { label: "Check by compounding", steps: ["1.035 multiplied by itself 20 times ≈ 1.99, so the population almost exactly doubles in 20 years.", "Two lots of 20 years: 25 × 1.99 × 1.99 ≈ 99 million ✓."] },
      ],
      commonError: "Stopping after one doubling time, or treating ×4 as four doublings.",
      difficulty: "challenge",
      guideRef: "ageing-youthful",
      hints: [
        "Start by finding the doubling time with the rule of 70.",
        "How many times does 25 million have to double to reach 100 million?",
        "Multiply the doubling time by the number of doublings.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "population-problems-ch-q05",
      question:
        "About 12 million babies were born in China in 2020, and the sex ratio at birth was about 111 boys per 100 girls. Roughly how many **million** of those babies were boys? Give your answer to 1 decimal place.",
      answer: { type: "number", value: 6.3, tolerance: 0.05, display: "6.3 million" },
      traps: [
        { spec: { type: "number", value: 6.66, tolerance: 0.01 }, feedback: "111 boys per 100 girls means 111 boys out of every **211** babies, not out of 200." },
        { spec: { type: "number", value: 5.7, tolerance: 0.05 }, feedback: "That's the number of girls (100 out of every 211). The question asks for boys." },
      ],
      solution: [
        "For every 111 boys there are 100 girls, so 111 out of every 211 babies are boys.",
        "12 × 111 ÷ 211 = 1,332 ÷ 211 ≈ 6.31.",
        "≈ **6.3 million boys** (and about 5.7 million girls) — roughly 600,000 more boys than girls in one year.",
      ],
      commonError: "Treating 111 per 100 as 111 out of 200.",
      difficulty: "challenge",
      guideRef: "china-one-child",
      hints: [
        "In a group of 111 boys and 100 girls, how many babies are there altogether?",
        "What fraction of all babies are boys?",
        "Multiply that fraction by 12 million.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-problems-ch-q06",
      question:
        "To what extent was China's rapid population ageing caused by the One-Child Policy, rather than by economic development? Use evidence from other countries. [6 marks]",
      marks: 6,
      modelAnswer:
        "The One-Child Policy clearly sped up ageing. By limiting most urban families to one child for 35 years, it shrank each new generation, and the share of people aged 65+ rose from about 7% in 2000 to 13.5% in 2020. The policy also created the 4-2-1 structure.\n\nHowever, economic development is a powerful cause on its own. China's fertility had already fallen from about 6 to under 3 children per woman in the 1970s as healthcare, education and urbanisation improved. Countries that never had a one-child rule are ageing too: South Korea's fertility rate fell to about 0.7 in 2023 and Japan's is around 1.2, with about 29% of Japanese aged 65+. Rising life expectancy, which comes with development, also adds to the elderly population whatever the birth rate.\n\nThe policy's effect also seems limited by how little fertility recovered after it ended: births kept falling after 2016 and the population fell in 2022.\n\nOverall, development was probably the main long-term cause, as the pattern is shared by rich East Asian countries, but the One-Child Policy made China's ageing faster and more sudden — so it 'got old before it got rich'.",
      markScheme: [
        { point: "Policy caused ageing: fewer births → smaller young generations (with figure, e.g. 7% → 13.5% aged 65+)", keywords: ["fewer births", "smaller", "7", "13.5", "one child", "generation"] },
        { point: "Development caused fertility to fall before 1980 (about 6 → under 3 in the 1970s)", keywords: ["before 1980", "1970s", "already", "6", "development", "education", "urbanisation"] },
        { point: "Comparison: South Korea / Japan / others ageing without such a policy (with hedged figures)", keywords: ["south korea", "japan", "0.7", "1.2", "29", "without", "taiwan"] },
        { point: "Rising life expectancy adds to ageing regardless of policy", keywords: ["life expectancy", "living longer", "healthcare", "longer lives"] },
        { point: "Fertility did not recover after the policy ended (births fell after 2016, population fell 2022)", keywords: ["2016", "2022", "did not recover", "kept falling", "fell"] },
        { point: "Justified judgement weighing the two causes", keywords: ["overall", "main cause", "both", "faster", "to some extent", "judgement"] },
      ],
      commonError: "Blaming the policy alone without comparing with countries that aged without it.",
      difficulty: "challenge",
      guideRef: "china-one-child",
      hints: [
        "How could the policy have made China age faster?",
        "Which neighbouring countries are ageing without a one-child rule?",
        "What happened to China's fertility in the 1970s, before the policy?",
        "Decide which cause was bigger and say why.",
      ],
      strategy: "Weigh both sides then judge",
    },
    {
      kind: "short",
      id: "population-problems-ch-q07",
      question:
        "When birth rates fall in a youthful country, it can for a few decades have lots of working-age adults and relatively few children and elderly people to support. If those workers have jobs, the economy can grow quickly. What is this boost called? (Two words.)",
      answer: { type: "text", accept: ["demographic dividend", "population dividend", "demographic bonus"], display: "Demographic dividend" },
      traps: [
        { spec: { type: "text", accept: ["baby boom"] }, feedback: "A baby boom is a *rise* in births. Here births are falling and workers make up a large share of the population." },
        { spec: { type: "text", accept: ["dependency ratio"] }, feedback: "The dependency ratio is the measure that falls during this period — the economic boost has another name." },
      ],
      solution: [
        "Falling births → large working-age share and low dependency ratio.",
        "If young people are educated and employed, the economy grows faster: the **demographic dividend** (as in South Korea and much of East Asia from the 1960s–1990s).",
      ],
      difficulty: "challenge",
      guideRef: "ageing-youthful",
      hints: ["A 'dividend' is a bonus paid out.", "The bonus comes from the population structure — which adjective describes population structure?"],
    },
    {
      kind: "written",
      id: "population-problems-ch-q08",
      question:
        "A newspaper columnist writes: 'Singapore should simply copy France's family policies and its fertility rate will rise back to 2.1.' Evaluate this claim. [5 marks]",
      marks: 5,
      modelAnswer:
        "There is some sense in learning from France. Its long-term, generous support — family allowances, tax breaks that grow with each child and affordable childcare — is linked to a fertility rate that has long been one of the highest in the EU, compared with Singapore's resident rate of about 0.97 in 2023.\n\nHowever, the claim is too simple. Even France's rate, roughly 1.6–1.8 in recent years, is below 2.1, so copying it would not restore replacement level. Policies may not transfer either: Singapore's pressures include high housing costs, long working hours, competitive schooling and later marriage, which money and childcare alone may not change. Singapore already offers a Baby Bonus and other support, so the gap is not only about policy.\n\nOverall the claim is mostly wrong: borrowing ideas such as better childcare and shorter working hours might raise fertility a little, but reaching 2.1 is unlikely, so Singapore will still need immigration and other measures to cope with ageing.",
      markScheme: [
        { point: "Supports: France's generous, long-term policies linked to relatively high fertility", keywords: ["france", "allowance", "childcare", "tax", "higher", "eu"] },
        { point: "Uses figures: Singapore about 0.97 (2023) vs France roughly 1.6–1.8", keywords: ["0.97", "1.6", "1.8", "compared"] },
        { point: "Challenges: even France is below 2.1, so copying would not reach replacement", keywords: ["below 2.1", "2.1", "replacement", "not reach", "even france"] },
        { point: "Challenges: policies may not transfer — different culture, housing, work hours, schooling, late marriage", keywords: ["culture", "housing", "hours", "school", "tuition", "marriage", "different", "transfer"] },
        { point: "Justified conclusion (e.g. may help a little; will still need immigration/other measures)", keywords: ["overall", "conclusion", "partly", "little", "immigration", "still need", "unlikely"] },
      ],
      commonError: "Assuming France is at replacement level, or not testing whether policies would work in a different society.",
      difficulty: "challenge",
      guideRef: "population-policies",
      hints: [
        "Is France's own fertility rate actually 2.1?",
        "Does Singapore already have pro-natalist policies?",
        "Would the same policies work in a society with different costs, culture and working hours?",
        "End with a clear judgement about the word 'simply'.",
      ],
      strategy: "Spot the misconception",
    },
  ],
};
