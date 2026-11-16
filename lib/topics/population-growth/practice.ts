import type { TopicPractice } from "../../types.ts";

// Resources (inline SVG) — identical to those in mcq.ts; every plotted value matches the text.
/** Years taken to add each extra billion. Bar height = 1.5 px per year; baseline y = 260. */
const BILLION_BARS = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of the number of years taken to add each extra billion people: 1 to 2 billion took 123 years, 2 to 3 billion 33 years, 3 to 4 billion 14 years, 4 to 5 billion 13 years, 5 to 6 billion 12 years, 6 to 7 billion 12 years and 7 to 8 billion 11 years." font-family="sans-serif" font-size="12"><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><text x="250" y="22" text-anchor="middle" font-size="14" fill="#1f2937">Years taken to add each extra billion people</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="230" x2="440" y2="230"/><line x1="60" y1="200" x2="440" y2="200"/><line x1="60" y1="170" x2="440" y2="170"/><line x1="60" y1="140" x2="440" y2="140"/><line x1="60" y1="110" x2="440" y2="110"/><line x1="60" y1="80" x2="440" y2="80"/><line x1="60" y1="50" x2="440" y2="50"/></g><line x1="60" y1="260" x2="440" y2="260" stroke="#334155" stroke-width="1.5"/><line x1="60" y1="260" x2="60" y2="45" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937" text-anchor="end"><text x="54" y="264">0</text><text x="54" y="234">20</text><text x="54" y="204">40</text><text x="54" y="174">60</text><text x="54" y="144">80</text><text x="54" y="114">100</text><text x="54" y="84">120</text><text x="54" y="54">140</text></g><text x="16" y="155" transform="rotate(-90 16 155)" text-anchor="middle" fill="#1f2937">Years taken</text><g fill="#c7d2fe" stroke="#1f2937"><rect x="80" y="75.5" width="36" height="184.5"/><rect x="130" y="210.5" width="36" height="49.5"/><rect x="180" y="239" width="36" height="21"/><rect x="230" y="240.5" width="36" height="19.5"/><rect x="280" y="242" width="36" height="18"/><rect x="330" y="242" width="36" height="18"/><rect x="380" y="243.5" width="36" height="16.5"/></g><g fill="#1f2937" text-anchor="middle"><text x="98" y="70">123</text><text x="148" y="205">33</text><text x="198" y="234">14</text><text x="248" y="235">13</text><text x="298" y="237">12</text><text x="348" y="237">12</text><text x="398" y="238">11</text></g><g fill="#1f2937" text-anchor="middle"><text x="98" y="277">1→2</text><text x="148" y="277">2→3</text><text x="198" y="277">3→4</text><text x="248" y="277">4→5</text><text x="298" y="277">5→6</text><text x="348" y="277">6→7</text><text x="398" y="277">7→8</text></g><text x="250" y="294" text-anchor="middle" fill="#1f2937">World population (billions): from → to</text></svg>`;

/** Generic DTM. Rates: y = 260 − 4.4 × (per 1000). Stage boundaries at x = 130, 210, 290, 370. */
const DTM_GRAPH = `<svg viewBox="0 0 480 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Demographic Transition Model with five stages. Birth rate: high and fluctuating around 40 per 1000 in stage 1, still high in stage 2, falls steeply in stage 3, low around 12 to 13 in stage 4, and falls to about 8 in stage 5. Death rate: high and fluctuating in stage 1, falls steeply in stage 2, keeps falling to about 10 in stage 3, stays low in stage 4 and rises slightly to about 11 in stage 5, ending above the birth rate. Total population is low in stage 1, rises most steeply at the end of stage 2 and start of stage 3, levels off in stage 4 and starts to fall in stage 5." font-family="sans-serif" font-size="12"><rect x="0" y="0" width="480" height="310" fill="#ffffff"/><text x="250" y="16" text-anchor="middle" font-size="14" fill="#1f2937">The Demographic Transition Model</text><g fill="#f1f5f9"><rect x="130" y="40" width="80" height="220"/><rect x="290" y="40" width="80" height="220"/></g><g stroke="#94a3b8" stroke-dasharray="3 3"><line x1="130" y1="40" x2="130" y2="260"/><line x1="210" y1="40" x2="210" y2="260"/><line x1="290" y1="40" x2="290" y2="260"/><line x1="370" y1="40" x2="370" y2="260"/></g><g fill="#1f2937" text-anchor="middle" font-size="13"><text x="90" y="34">Stage 1</text><text x="170" y="34">Stage 2</text><text x="250" y="34">Stage 3</text><text x="330" y="34">Stage 4</text><text x="410" y="34">Stage 5</text></g><line x1="50" y1="260" x2="450" y2="260" stroke="#334155" stroke-width="1.5"/><line x1="50" y1="260" x2="50" y2="40" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937" text-anchor="end" font-size="11"><text x="45" y="264">0</text><text x="45" y="220">10</text><text x="45" y="176">20</text><text x="45" y="132">30</text><text x="45" y="88">40</text><text x="45" y="44">50</text></g><text x="14" y="150" transform="rotate(-90 14 150)" text-anchor="middle" font-size="11" fill="#1f2937">Births and deaths per 1000 per year</text><text x="250" y="276" text-anchor="middle" font-size="11" fill="#1f2937">Time →</text><polyline points="50,250 130,248 170,242 210,228 250,205 290,186 330,176 370,172 410,171 450,175" fill="none" stroke="#6366f1" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round"/><polyline points="50,92.8 66,79.6 82,97.2 98,84 114,92.8 130,84 210,88.4 290,198.4 330,207.2 370,202.8 450,224.8" fill="none" stroke="#1f2937" stroke-width="2.5"/><polyline points="50,106 66,88.4 82,114.8 98,92.8 114,110.4 130,101.6 210,189.6 290,216 370,216 450,211.6" fill="none" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="7 4"/><g font-size="11"><line x1="60" y1="294" x2="85" y2="294" stroke="#1f2937" stroke-width="2.5"/><text x="90" y="298" fill="#1f2937">Birth rate</text><line x1="170" y1="294" x2="195" y2="294" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="7 4"/><text x="200" y="298" fill="#1f2937">Death rate</text><line x1="285" y1="294" x2="310" y2="294" stroke="#6366f1" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round"/><text x="315" y="298" fill="#1f2937">Total population</text></g></svg>`;

/** Country Z rates. x = 60 + 3 × (year − 1900); y = 260 − 4.4 × (per 1000). */
const COUNTRY_Z = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of Country Z's birth and death rates per 1000, 1900 to 2020. Birth rate: 46 in 1900, 45 in 1920, 44 in 1940, 37 in 1960, 28 in 1980, 20 in 2000, 14 in 2020. Death rate: 32 in 1900, 26 in 1920, 18 in 1940, 12 in 1960, 9 in 1980, 7 in 2000, 7 in 2020." font-family="sans-serif" font-size="12"><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><text x="240" y="22" text-anchor="middle" font-size="14" fill="#1f2937">Country Z: birth and death rates, 1900–2020</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="216" x2="430" y2="216"/><line x1="60" y1="172" x2="430" y2="172"/><line x1="60" y1="128" x2="430" y2="128"/><line x1="60" y1="84" x2="430" y2="84"/><line x1="60" y1="40" x2="430" y2="40"/></g><line x1="60" y1="260" x2="430" y2="260" stroke="#334155" stroke-width="1.5"/><line x1="60" y1="260" x2="60" y2="36" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937" text-anchor="end"><text x="54" y="264">0</text><text x="54" y="220">10</text><text x="54" y="176">20</text><text x="54" y="132">30</text><text x="54" y="88">40</text><text x="54" y="44">50</text></g><g fill="#1f2937" text-anchor="middle"><text x="60" y="277">1900</text><text x="120" y="277">1920</text><text x="180" y="277">1940</text><text x="240" y="277">1960</text><text x="300" y="277">1980</text><text x="360" y="277">2000</text><text x="420" y="277">2020</text></g><text x="245" y="295" text-anchor="middle" fill="#1f2937">Year</text><text x="16" y="150" transform="rotate(-90 16 150)" text-anchor="middle" fill="#1f2937">Rate per 1000 per year</text><polyline points="60,57.6 120,62 180,66.4 240,97.2 300,136.8 360,172 420,198.4" fill="none" stroke="#1f2937" stroke-width="2.5"/><polyline points="60,119.2 120,145.6 180,180.8 240,207.2 300,220.4 360,229.2 420,229.2" fill="none" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="7 4"/><g fill="#1f2937"><circle cx="60" cy="57.6" r="3"/><circle cx="120" cy="62" r="3"/><circle cx="180" cy="66.4" r="3"/><circle cx="240" cy="97.2" r="3"/><circle cx="300" cy="136.8" r="3"/><circle cx="360" cy="172" r="3"/><circle cx="420" cy="198.4" r="3"/></g><g fill="#b91c1c"><circle cx="60" cy="119.2" r="3"/><circle cx="120" cy="145.6" r="3"/><circle cx="180" cy="180.8" r="3"/><circle cx="240" cy="207.2" r="3"/><circle cx="300" cy="220.4" r="3"/><circle cx="360" cy="229.2" r="3"/><circle cx="420" cy="229.2" r="3"/></g><g fill="#1f2937" text-anchor="middle" font-size="11"><text x="66" y="50">46</text><text x="120" y="55">45</text><text x="180" y="59">44</text><text x="244" y="90">37</text><text x="304" y="130">28</text><text x="364" y="165">20</text><text x="420" y="191">14</text></g><g fill="#b91c1c" text-anchor="middle" font-size="11"><text x="70" y="139">32</text><text x="120" y="160">26</text><text x="180" y="195">18</text><text x="240" y="222">12</text><text x="300" y="235">9</text><text x="360" y="244">7</text><text x="420" y="244">7</text></g><g font-size="11"><line x1="300" y1="56" x2="325" y2="56" stroke="#1f2937" stroke-width="2.5"/><text x="330" y="60" fill="#1f2937">Birth rate</text><line x1="300" y1="74" x2="325" y2="74" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="7 4"/><text x="330" y="78" fill="#1f2937">Death rate</text></g></svg>`;

/** World population estimates and UN WPP 2024 medium projection (rounded). x = 60 + 2.5 × (year − 1950); y = 260 − 18 × billions. */
const PROJECTION = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of world population. Estimates (solid line): about 2.5 billion in 1950, 6 billion in 1999 and 8 billion in 2022. UN World Population Prospects 2024 medium projection (dashed line): about 9.7 billion in 2050, a peak of about 10.3 billion in the mid-2080s, then about 10.2 billion in 2100." font-family="sans-serif" font-size="12"><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><text x="245" y="22" text-anchor="middle" font-size="14" fill="#1f2937">World population: estimates and UN projection</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="224" x2="440" y2="224"/><line x1="60" y1="188" x2="440" y2="188"/><line x1="60" y1="152" x2="440" y2="152"/><line x1="60" y1="116" x2="440" y2="116"/><line x1="60" y1="80" x2="440" y2="80"/><line x1="60" y1="44" x2="440" y2="44"/></g><line x1="60" y1="260" x2="440" y2="260" stroke="#334155" stroke-width="1.5"/><line x1="60" y1="260" x2="60" y2="40" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937" text-anchor="end"><text x="54" y="264">0</text><text x="54" y="228">2</text><text x="54" y="192">4</text><text x="54" y="156">6</text><text x="54" y="120">8</text><text x="54" y="84">10</text><text x="54" y="48">12</text></g><g fill="#1f2937" text-anchor="middle"><text x="60" y="277">1950</text><text x="185" y="277">2000</text><text x="310" y="277">2050</text><text x="435" y="277">2100</text></g><g stroke="#334155"><line x1="185" y1="260" x2="185" y2="265"/><line x1="310" y1="260" x2="310" y2="265"/><line x1="435" y1="260" x2="435" y2="265"/></g><text x="250" y="294" text-anchor="middle" fill="#1f2937">Year</text><text x="16" y="150" transform="rotate(-90 16 150)" text-anchor="middle" fill="#1f2937">Population (billions)</text><polyline points="60,215 182.5,152 240,116" fill="none" stroke="#1f2937" stroke-width="2.5"/><polyline points="240,116 310,85.4 397.5,74.6 435,76.4" fill="none" stroke="#1f2937" stroke-width="2.5" stroke-dasharray="7 4"/><g fill="#c7d2fe" stroke="#1f2937"><circle cx="60" cy="215" r="3.5"/><circle cx="182.5" cy="152" r="3.5"/><circle cx="240" cy="116" r="3.5"/><circle cx="310" cy="85.4" r="3.5"/><circle cx="397.5" cy="74.6" r="3.5"/><circle cx="435" cy="76.4" r="3.5"/></g><g fill="#1f2937" font-size="11"><text x="68" y="232">2.5 bn (1950)</text><text x="190" y="168">6 bn (1999)</text><text x="247" y="132">8 bn (2022)</text><text x="303" y="78" text-anchor="end">9.7 bn (2050)</text><text x="455" y="62" text-anchor="end">10.3 bn peak (mid-2080s)</text><text x="455" y="94" text-anchor="end">10.2 bn (2100)</text></g><g font-size="11"><line x1="75" y1="52" x2="100" y2="52" stroke="#1f2937" stroke-width="2.5"/><text x="105" y="56" fill="#1f2937">Estimate</text><line x1="75" y1="68" x2="100" y2="68" stroke="#1f2937" stroke-width="2.5" stroke-dasharray="7 4"/><text x="105" y="72" fill="#1f2937">UN projection (medium)</text></g></svg>`;

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK QUIZ
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "population-growth-quiz-q01",
      question: "In which year did the world's population reach **2 billion**?",
      answer: { type: "number", value: 1927 },
      traps: [
        { spec: { type: "number", value: 1804 }, feedback: "About 1804 is when the world reached **1 billion**. The second billion took another 123 years." },
        { spec: { type: "number", value: 1960 }, feedback: "1960 is the **3 billion** milestone. 2 billion came 33 years earlier." },
      ],
      solution: ["The world reached 2 billion in 1927 — about 123 years after the first billion (about 1804)."],
      difficulty: "warmup",
      guideRef: "growth-over-time",
      hints: ["It was between the two World Wars, in the 1920s."],
    },
    {
      kind: "short",
      id: "population-growth-quiz-q02",
      question: "What is the name of the measure that gives the **average number of children a woman is expected to have in her lifetime**?",
      answer: { type: "text", accept: ["total fertility rate", "tfr", "fertility rate", "total fertility"] },
      traps: [
        {
          spec: { type: "text", accept: ["birth rate", "crude birth rate"] },
          feedback: "Birth rate is live births per 1000 **people** per year. This measure is per **woman**, over her whole life.",
        },
      ],
      solution: ["The total fertility rate (TFR) is the average number of children per woman. Replacement level is about 2.1."],
      difficulty: "warmup",
      guideRef: "birth-death-rates",
      hints: ["It is measured 'per woman', not 'per 1000 people'. Its initials are TFR."],
    },
    {
      kind: "short",
      id: "population-growth-quiz-q03",
      question: "A country has a birth rate of 31 per 1000 and a death rate of 8 per 1000. Calculate its rate of natural increase, in %.",
      answer: { type: "number", value: 2.3, display: "2.3%" },
      traps: [
        { spec: { type: "number", value: 23 }, feedback: "23 is the natural increase **per 1000**. Divide by 10 to turn it into a percentage (per 100)." },
        { spec: { type: "number", value: 3.9 }, feedback: "You added the rates. Natural increase is births **minus** deaths." },
      ],
      solution: ["RNI (%) = (BR − DR) ÷ 10", "= (31 − 8) ÷ 10", "= 23 ÷ 10 = 2.3%"],
      commonError: "Forgetting to divide by 10, giving 23%.",
      difficulty: "core",
      guideRef: "birth-death-rates",
      hints: ["Subtract first: births minus deaths.", "31 − 8 = 23 per 1000. Now turn 'per 1000' into 'per 100'."],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "population-growth-quiz-q04",
      question:
        "The UK has a low birth rate and a low death rate (both around 10 per 1000), so births and deaths change its population only slowly. Which stage of the DTM is the UK usually placed in?",
      options: ["Stage 4", "Stage 2", "Stage 1", "Stage 5"],
      answerIndex: 0,
      explanation:
        "Low, roughly equal birth and death rates = **stage 4** (low stationary). Stage 1 also has a fairly stable population, but there **both rates are high**. Stage 5 needs the death rate to be clearly above the birth rate for a long time, as in Japan.",
      difficulty: "warmup",
      guideRef: "demographic-transition",
      hints: ["Are both rates high or low? Which stage has both rates low and close together?"],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "population-growth-quiz-q05",
      question: "World population was 6 billion in 1999 and 8 billion in 2022. How many years did it take to add these 2 billion people?",
      answer: { type: "number", value: 23, display: "23 years" },
      traps: [{ spec: { type: "number", value: 2 }, feedback: "2 is the number of billions added. The question asks how many **years** it took." }],
      solution: ["2022 − 1999 = 23 years — about 11 or 12 years per billion."],
      difficulty: "warmup",
      guideRef: "growth-over-time",
      hints: ["Subtract the earlier year from the later year."],
    },
    {
      kind: "short",
      id: "population-growth-quiz-q06",
      question:
        "Stage 5 of the DTM is often called the '______' stage, because the birth rate drops below the death rate and the total population starts to fall. What is the missing word?",
      answer: { type: "text", accept: ["declining", "decline", "decreasing", "decrease", "shrinking", "falling"] },
      traps: [
        { spec: { type: "text", accept: ["stationary", "low stationary"] }, feedback: "'Low stationary' is stage 4, where both rates are low and the population is roughly stable." },
      ],
      solution: ["Stage 5 is the **declining** stage: deaths exceed births, so there is a natural decrease (Japan is the usual example)."],
      difficulty: "core",
      guideRef: "demographic-transition",
      hints: ["What happens to the total population when deaths outnumber births?", "The word means 'going down'."],
    },
    {
      kind: "mcq",
      id: "population-growth-quiz-q07",
      question: "What is a **population projection**?",
      options: [
        "An exact count of everyone living in a country",
        "An estimate of future population, based on assumptions about births, deaths and migration",
        "A record of past census results",
        "A government target that must be met",
      ],
      answerIndex: 1,
      explanation:
        "A projection estimates **future** population by assuming what will happen to fertility, life expectancy and migration — so it can turn out wrong if those assumptions change. An exact count of everyone today is a **census**, not a projection.",
      difficulty: "warmup",
      guideRef: "future-population",
      hints: ["'Project' means to throw forward — into the future."],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "population-growth-quiz-q08",
      question: "A country has a population of **5 million** and a death rate of **8 per 1000**. About how many deaths happen there in a year?",
      answer: { type: "number", value: 40000, display: "40,000 deaths" },
      traps: [
        { spec: { type: "number", value: 400000 }, feedback: "That would be 8 per **100** (8%). The rate is per 1000." },
        { spec: { type: "number", value: 625000 }, feedback: "You divided the population by 8. Find how many groups of 1000 there are, then multiply by 8." },
      ],
      solution: ["5,000,000 ÷ 1000 = 5,000 groups of 1000 people.", "Each group has 8 deaths: 5,000 × 8 = 40,000 deaths."],
      commonError: "Treating 'per 1000' as a percentage.",
      difficulty: "core",
      guideRef: "birth-death-rates",
      hints: ["How many lots of 1000 people are there in 5 million?", "Multiply that by 8."],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "population-growth-quiz-q09",
      question: "Which change mainly caused the 'population explosion' in many lower-income countries after about 1950?",
      options: [
        "Birth rates rose sharply across the world",
        "Huge numbers of people migrated between continents",
        "Death rates fell quickly thanks to vaccines, antibiotics and clean water, while birth rates stayed high",
        "Life expectancy fell",
      ],
      answerIndex: 2,
      explanation:
        "After 1950 vaccines, antibiotics, clean water and better food spread quickly, so **death rates fell fast**. Birth rates stayed high for decades, so the gap — natural increase — was huge. Birth rates did not rise sharply; it was the fall in deaths that made the difference. Migration moves people around but does not change the world total.",
      difficulty: "core",
      guideRef: "growth-over-time",
      hints: ["Growth = births − deaths. Which of the two changed most?", "Did families suddenly have more children, or did more children survive?"],
      strategy: "Cause → process → effect",
    },
    {
      kind: "short",
      id: "population-growth-quiz-q10",
      question: "Name the model that shows how a country's birth rate, death rate and total population change through five stages as it develops.",
      answer: { type: "text", accept: ["demographic transition model", "dtm", "demographic transition", "the demographic transition model"] },
      solution: ["The **Demographic Transition Model** (DTM) — five stages from high birth and death rates to low ones."],
      difficulty: "warmup",
      guideRef: "demographic-transition",
      hints: ["Its initials are DTM."],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS
  // =========================================================================
  papers: [
    {
      id: "population-growth-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "population-growth-p1-q01",
          question:
            "Study the table.\n\n| World population | Year reached |\n|---|---|\n| 1 billion | about 1804 |\n| 2 billion | 1927 |\n| 3 billion | 1960 |\n| 4 billion | 1974 |\n| 5 billion | 1987 |\n| 6 billion | 1999 |\n| 7 billion | 2011 |\n| 8 billion | 2022 |\n\nHow many years did it take the world's population to grow from **3 billion to 5 billion**?",
          answer: { type: "number", value: 27, display: "27 years" },
          traps: [
            { spec: { type: "number", value: 14 }, feedback: "14 years is only 3 → 4 billion. Go all the way to 5 billion." },
            { spec: { type: "number", value: 2 }, feedback: "2 is the increase in billions. The question asks for **years**." },
          ],
          solution: ["3 billion: 1960. 5 billion: 1987.", "1987 − 1960 = 27 years."],
          difficulty: "warmup",
          guideRef: "growth-over-time",
          hints: ["Find both years in the table, then subtract the earlier from the later."],
          strategy: "Use figures from the source",
        },
        {
          kind: "short",
          id: "population-growth-p1-q02",
          question: "What term is used for the number of babies who die before their first birthday, per 1000 live births, in a year?",
          answer: { type: "text", accept: ["infant mortality rate", "infant mortality", "imr", "infant death rate"] },
          traps: [
            {
              spec: { type: "text", accept: ["child mortality", "child mortality rate", "under-5 mortality", "under five mortality rate"] },
              feedback: "Child (under-5) mortality covers children up to age five. This measure is only babies under **one**.",
            },
          ],
          solution: ["Infant mortality rate = deaths of babies under one year old per 1000 live births per year. It is one of the best clues to a country's healthcare."],
          difficulty: "warmup",
          guideRef: "birth-death-rates",
          hints: ["An 'infant' is a baby in its first year."],
        },
        {
          kind: "short",
          id: "population-growth-p1-q03",
          question: "Study the graph of Country Z. Calculate Country Z's rate of natural increase in **1940**, in %.",
          diagram: COUNTRY_Z,
          answer: { type: "number", value: 2.6, display: "2.6%" },
          traps: [
            { spec: { type: "number", value: 26 }, feedback: "26 is the natural increase per 1000. Divide by 10 to get a percentage." },
            { spec: { type: "number", value: 6.2 }, feedback: "You added the two rates. Use birth rate **minus** death rate." },
          ],
          solution: ["In 1940: birth rate = 44 per 1000, death rate = 18 per 1000.", "(44 − 18) ÷ 10 = 26 ÷ 10 = 2.6%."],
          commonError: "Reading the wrong line — use the key: solid line = birth rate, dashed line = death rate.",
          difficulty: "core",
          guideRef: "birth-death-rates",
          hints: ["Use the key: which line is births and which is deaths?", "Read both values above 1940.", "RNI (%) = (BR − DR) ÷ 10."],
          strategy: "Read the key first",
        },
        {
          kind: "written",
          id: "population-growth-p1-q04",
          question:
            "Study the graph of Country Z. Describe how Country Z's birth rate and death rate changed between 1900 and 2020. Use figures from the graph. [4 marks]",
          diagram: COUNTRY_Z,
          marks: 4,
          modelAnswer:
            "Country Z's death rate fell first and fastest: from 32 per 1000 in 1900 to 18 in 1940 and 12 in 1960. Meanwhile the birth rate stayed high, only slipping from 46 to 44 between 1900 and 1940.\n\nAfter 1940 the birth rate fell steeply, to 28 by 1980 and 14 by 2020. The death rate kept falling, but more slowly, and levelled off at about 7 per 1000 from 2000. So the gap between the two rates was widest in 1940 (26 per 1000) and had narrowed to only 7 per 1000 by 2020.",
          markScheme: [
            { point: "Death rate fell rapidly at first, with figures (e.g. 32 per 1000 in 1900 to 12 by 1960)", keywords: ["death rate fell", "32", "12", "rapidly", "quickly"] },
            { point: "Birth rate stayed high until about 1940 (46 → 44)", keywords: ["stayed high", "46", "44", "1940", "steady"] },
            { point: "Birth rate then fell steeply after 1940, to 14 by 2020", keywords: ["birth rate fell", "14", "after 1940", "steeply", "declined"] },
            { point: "Death rate levelled off at a low rate (about 7) / the gap between the lines narrowed by 2020", keywords: ["levelled", "7", "gap", "narrowed", "both low", "2020"] },
          ],
          commonError: "Describing only one line, or giving no figures. 'Describe' needs the trend of **both** rates, with data and years.",
          difficulty: "core",
          guideRef: "demographic-transition",
          hints: [
            "Describe each line separately: when does it fall fast, fall slowly or stay level?",
            "Quote a start figure, an end figure and a turning-point year for each line.",
            "Finish by comparing the gap between the lines at different dates.",
          ],
          strategy: "TEA (Trend, Evidence, Anomaly)",
        },
        {
          kind: "mcq",
          id: "population-growth-p1-q05",
          question: "Which piece of evidence would best show that a country has moved from **stage 2 into stage 3** of the DTM?",
          options: [
            "Its death rate has started to fall",
            "Its birth and death rates both fluctuate at high levels",
            "Its birth rate has started to fall steadily",
            "Its total population has started to fall",
          ],
          answerIndex: 2,
          explanation:
            "The move from stage 2 to stage 3 is marked by the **birth rate** starting to fall. A falling death rate is what marks the start of **stage 2**, so it cannot show the move into stage 3. A falling total population belongs to stage 5.",
          difficulty: "core",
          guideRef: "demographic-transition",
          hints: ["What changes at the start of stage 2? And at the start of stage 3?", "In stage 2 the death rate is already falling — so what new change signals stage 3?"],
          strategy: "Eliminate options",
        },
        {
          kind: "short",
          id: "population-growth-p1-q06",
          question: "World population was 3 billion in 1960 and 6 billion in 1999. How many years did it take to **double**?",
          answer: { type: "number", value: 39, display: "39 years" },
          traps: [
            { spec: { type: "number", value: 3 }, feedback: "3 is the increase in billions. The question asks how many **years** the doubling took." },
            { spec: { type: "number", value: 33 }, feedback: "33 years was 2 → 3 billion (1927–1960). Use 1960 and 1999." },
          ],
          solution: ["Doubling 3 billion gives 6 billion.", "1999 − 1960 = 39 years."],
          difficulty: "core",
          guideRef: "growth-over-time",
          hints: ["Double 3 billion is how many billion?", "Subtract the year for 3 billion from the year for 6 billion."],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "population-growth-p1-q07",
          question: "Suggest **two** ways in which the Agricultural and Industrial Revolutions helped the world's population to grow faster after about 1800. [2 marks]",
          marks: 2,
          modelAnswer:
            "First, new farming methods such as crop rotation, selective breeding and machinery produced much more food, so famines became rarer and people were better fed and better able to fight disease — the death rate fell. Second, the wealth and technology of the Industrial Revolution paid for clean water supplies, sewers and better medicine, and railways and steamships moved food to where it was needed, so fewer people died young while birth rates stayed high.",
          markScheme: [
            { point: "More food produced (e.g. crop rotation, machinery), so fewer famines / better nutrition lowered the death rate", keywords: ["food", "farming", "crop", "famine", "nutrition", "harvest"] },
            { point: "Industrial wealth/technology brought clean water, sewers, medicine or transport of food, lowering the death rate", keywords: ["sanitation", "sewers", "clean water", "medicine", "wealth", "railways", "transport"] },
          ],
          commonError: "Saying people had more babies. Growth sped up mainly because **death rates fell**, not because birth rates rose.",
          difficulty: "warmup",
          guideRef: "growth-over-time",
          hints: ["One way is about food; the other is about health or living conditions."],
          strategy: "Cause → process → effect",
        },
        {
          kind: "written",
          id: "population-growth-p1-q08",
          question: "Explain why a country's birth rate can stay high for many years **after** its death rate has fallen. [3 marks]",
          marks: 3,
          modelAnswer:
            "Birth rates depend on family decisions, which change more slowly than death rates. In farming communities children are needed to work on the land and to care for parents in old age when there are no pensions, so large families make economic sense. Parents who have seen many babies die may keep having extra children as insurance, and it can take a generation before they trust that their children will survive. Traditions and religion may also encourage large families and early marriage, especially where girls leave school early and contraception is hard to get.",
          markScheme: [
            { point: "Children are an economic asset — they work on farms or support parents in old age (no pensions)", keywords: ["farm", "work", "old age", "pension", "look after", "labour", "income"] },
            { point: "Parents still expect some children to die, so have extra as insurance — it takes time to trust that children will survive", keywords: ["infant mortality", "die", "survive", "insurance", "trust", "time lag"] },
            { point: "Culture/religion, early marriage, little education for girls or limited access to contraception keep fertility high", keywords: ["religion", "tradition", "culture", "contraception", "education", "early marriage", "family planning"] },
          ],
          commonError: "Writing 'people want lots of children' without explaining **why**. Each point needs a reason.",
          difficulty: "core",
          guideRef: "birth-death-rates",
          hints: [
            "Think about what children do for a family in a farming village.",
            "If you had seen many babies die, how quickly would you change your plans?",
            "Consider education for girls, contraception and tradition.",
          ],
          strategy: "Cause → process → effect",
        },
        {
          kind: "short",
          id: "population-growth-p1-q09",
          question:
            "Study the graph. World population was about 2.5 billion in 1950 and 8 billion in 2022. How many **times as large** was the population in 2022 as in 1950?",
          diagram: PROJECTION,
          answer: { type: "number", value: 3.2, display: "3.2 times" },
          traps: [
            { spec: { type: "number", value: 5.5 }, feedback: "5.5 billion is the increase (8 − 2.5). 'How many times as large' means **divide**." },
            { spec: { type: "number", value: 0.3125 }, feedback: "You divided the wrong way round. Divide the 2022 value by the 1950 value." },
          ],
          solution: ["8 ÷ 2.5 = 3.2", "The population more than tripled in just 72 years."],
          difficulty: "core",
          guideRef: "growth-over-time",
          hints: ["'How many times' means divide, not subtract.", "Divide the 2022 value by the 1950 value."],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "population-growth-p1-q10",
          question: "Study the graph. Describe the **projected** change in world population from 2022 to 2100. Use figures. [4 marks]",
          diagram: PROJECTION,
          marks: 4,
          modelAnswer:
            "The UN projects that world population will keep rising after reaching 8 billion in 2022, to about 9.7 billion by 2050 — an increase of about 1.7 billion. After 2050 growth slows and the line flattens, rising only about another 0.6 billion to a peak of about 10.3 billion in the mid-2080s. After the peak the population falls slightly, to about 10.2 billion by 2100. Overall the projection shows growth coming to an end later this century.",
          markScheme: [
            { point: "Continues to rise after 2022, to about 9.7 billion by 2050", keywords: ["9.7", "2050", "rise", "increase", "continue"] },
            { point: "Growth slows / the line flattens after 2050", keywords: ["slow", "flatten", "levels", "less steep", "gradual"] },
            { point: "Peaks at about 10.3 billion in the mid-2080s", keywords: ["10.3", "peak", "2080", "2080s", "maximum", "highest"] },
            { point: "Then falls slightly, to about 10.2 billion by 2100", keywords: ["10.2", "2100", "fall", "decline", "slightly", "drop"] },
          ],
          commonError: "Explaining **why** instead of describing, or writing as if the projection were certain. Say 'is projected to'.",
          difficulty: "core",
          guideRef: "future-population",
          hints: [
            "Describe the shape in stages: 2022–2050, 2050–peak, peak–2100.",
            "Quote a figure and a year at each turning point.",
            "Use words like 'rises', 'slows', 'peaks' and 'falls slightly'.",
          ],
          strategy: "TEA (Trend, Evidence, Anomaly)",
        },
        {
          kind: "mcq",
          id: "population-growth-p1-q11",
          question: "Which pair of figures gives a rate of natural increase of **1.2%**?",
          options: ["Birth rate 14, death rate 26", "Birth rate 20, death rate 8", "Birth rate 12, death rate 10", "Birth rate 32, death rate 12"],
          answerIndex: 1,
          explanation:
            "(20 − 8) ÷ 10 = **1.2%**. The pair with birth rate 14 and death rate 26 gives −1.2% — the right size but a natural **decrease**, because deaths exceed births. Birth rate 12 and death rate 10 only gives 0.2%; birth rate 32 and death rate 12 gives 2.0%.",
          difficulty: "core",
          guideRef: "birth-death-rates",
          hints: ["Work out (BR − DR) ÷ 10 for each pair.", "Watch the sign: is births minus deaths positive?"],
          strategy: "Eliminate options",
        },
        {
          kind: "written",
          id: "population-growth-p1-q12",
          question:
            "Study the table.\n\n| | Niger | UK |\n|---|---|---|\n| Birth rate (per 1000, approx., early 2020s) | 45 | 10 |\n| Death rate (per 1000, approx., early 2020s) | 9 | 9 |\n\nNiger is often placed in stage 2 of the DTM and the UK in stage 4. Compare their birth and death rates, and explain **one** reason for the difference in birth rates. [4 marks]",
          marks: 4,
          modelAnswer:
            "Niger's birth rate (about 45 per 1000) is around four and a half times the UK's (about 10 per 1000). Their death rates, however, are similar — both about 9 per 1000 — because Niger's has already fallen a long way thanks to vaccination and better healthcare, and its population is very young. As a result Niger's rate of natural increase is about 3.6% a year, compared with only about 0.1% in the UK.\n\nOne reason for the difference in birth rates is education and opportunities for women. In the UK most women stay in education and have careers, contraception is easy to get and children are expensive to raise, so families are small. In rural Niger many girls marry young and leave school early, and children help on family farms, so families are large.",
          markScheme: [
            { point: "Niger's birth rate is much higher — about 45 vs 10, roughly four to five times the UK's", keywords: ["45", "10", "higher", "times", "four", "4.5"] },
            { point: "Death rates are similar / both low (about 9 per 1000)", keywords: ["similar", "same", "9", "both low", "death rate"] },
            { point: "So Niger's natural increase is far higher (about 3.6% vs 0.1%)", keywords: ["3.6", "0.1", "natural increase", "grows faster", "growth"] },
            { point: "A developed reason for the birth-rate difference (e.g. girls' education, early marriage, contraception, children as farm workers, cost of raising children in the UK)", keywords: ["farm", "contraception", "education", "marriage", "infant mortality", "cost", "career"] },
          ],
          commonError: "Assuming Niger's death rate must be much higher than the UK's. On these figures the death rates are the same — the big difference is in **births**.",
          difficulty: "core",
          guideRef: "demographic-transition",
          hints: [
            "Start by comparing the numbers: how many times bigger is Niger's birth rate?",
            "What do you notice about the death rates?",
            "For the reason, think about girls' education, contraception and the role of children in farming families.",
          ],
          strategy: "Compare and contrast",
        },
        {
          kind: "written",
          id: "population-growth-p1-q13",
          question:
            "Study the table of three countries.\n\n| Indicator | Country A | Country B | Country C |\n|---|---|---|---|\n| Birth rate (per 1000) | 9 | 41 | 18 |\n| Death rate (per 1000) | 11 | 9 | 6 |\n| Infant mortality (per 1000 live births) | 2 | 62 | 15 |\n| Life expectancy (years) | 84 | 61 | 74 |\n| Total fertility rate | 1.3 | 5.8 | 2.0 |\n\n(a) Which country is likely to be the **least developed**? Give evidence from the table.\n(b) Explain why Country A has the **highest** death rate even though it has the longest life expectancy. [4 marks]",
          marks: 4,
          modelAnswer:
            "(a) Country B is likely to be the least developed. Its infant mortality rate is 62 per 1000 live births — over four times Country C's and about 30 times Country A's — and its life expectancy is only 61 years. Its very high birth rate (41) and TFR (5.8) also suggest limited access to contraception and education for women.\n\n(b) Country A probably has an ageing population with a large share of elderly people, which fits its very low birth rate (9) and TFR (1.3). The death rate counts deaths per 1000 people of all ages, so a country with many old people has many deaths each year, even though its healthcare is excellent and people live to 84 on average.",
          markScheme: [
            { point: "Identifies Country B as the least developed", keywords: ["country b"] },
            { point: "Supports it with figures (e.g. infant mortality 62, life expectancy 61, birth rate 41 or TFR 5.8)", keywords: ["62", "61", "41", "5.8", "infant mortality", "life expectancy"] },
            { point: "Country A has an ageing population / large share of elderly people", keywords: ["elderly", "old", "ageing", "aging", "65"] },
            { point: "Death rate is per 1000 of the whole population, so many old people means many deaths each year despite good healthcare", keywords: ["per 1000", "whole population", "age structure", "more deaths", "proportion", "all ages"] },
          ],
          commonError: "Assuming a high death rate always means poor healthcare. The crude death rate also depends on the **age structure**.",
          difficulty: "core",
          guideRef: "birth-death-rates",
          hints: [
            "For (a), which indicators show health and wealth most clearly?",
            "For (b), think about the age of Country A's population. Who is most likely to die in any one year?",
            "A death rate is per 1000 people of **all ages**, not per 1000 old people.",
          ],
          strategy: "Look for the anomaly",
        },
        {
          kind: "short",
          id: "population-growth-p1-q14",
          question:
            "Ignoring migration, a country of **20 million** people has a birth rate of 41 per 1000 and a death rate of 9 per 1000. How many people does natural increase add in one year?",
          answer: { type: "number", value: 640000, display: "640,000 people" },
          traps: [
            { spec: { type: "number", value: 6400000 }, feedback: "That treats the rates as per 100. They are per **1000** — check your zeros." },
            { spec: { type: "number", value: 64000 }, feedback: "Check your zeros: 20,000,000 ÷ 1000 = 20,000 groups of 1000, not 2,000." },
          ],
          solution: ["Natural increase = 41 − 9 = 32 per 1000.", "Groups of 1000: 20,000,000 ÷ 1000 = 20,000.", "20,000 × 32 = 640,000 people."],
          solutions: [
            { label: "Using the RNI", steps: ["RNI = (41 − 9) ÷ 10 = 3.2%.", "3.2% of 20,000,000 = 0.032 × 20,000,000 = 640,000."] },
          ],
          commonError: "Losing or adding a zero when dividing 20 million by 1000.",
          difficulty: "core",
          guideRef: "birth-death-rates",
          hints: ["First find the natural increase per 1000.", "How many groups of 1000 people are there in 20 million?", "Multiply the two."],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "population-growth-p1-q15",
          question:
            "'The Demographic Transition Model is a useful tool for understanding population change in every country.' To what extent do you agree? Use examples. [6 marks]",
          marks: 6,
          modelAnswer:
            "The DTM is useful because it shows a general pattern that many countries have followed. The UK, for example, moved from high birth and death rates in the 1700s, through rapid growth in the 1800s, to low birth and death rates today (stage 4). The model also helps geographers compare countries and make predictions: Niger, with a very high birth rate, fits stage 2, while Bangladesh's falling birth rate suggests it is in stage 3 and may move towards stage 4.\n\nHowever, the model has serious limitations. It was based on the experience of Europe and North America, and today's lower-income countries may move through it much faster — Singapore went from rapid growth to a very low TFR in about 60 years — or get stuck where traditions keep birth rates high. It ignores migration: Singapore's total population has kept growing, to about 6 million, even though its resident TFR is only about 0.97, because of immigration. It also cannot predict sudden changes caused by government policy, such as China's One-Child Policy (1980–2015), or by disease, such as HIV/AIDS raising death rates in southern Africa in the 1990s.\n\nOverall, I only partly agree. The DTM is a useful general guide to how population changes as countries develop, but it is not a reliable prediction for every country, because migration, policies and unexpected events can push a country off the model's path.",
          markScheme: [
            { point: "Useful: shows a general pattern that matches many countries' history (e.g. the UK moved through stages 1–4)", keywords: ["uk", "pattern", "history", "matches", "stages"] },
            { point: "Useful: helps classify, compare and predict (e.g. Niger stage 2, Bangladesh stage 3, Japan stage 5)", keywords: ["predict", "compare", "bangladesh", "niger", "japan", "classify"] },
            { point: "Limitation: based on Europe/North America — other countries may move faster or slower, or get stuck", keywords: ["europe", "based on", "faster", "stuck", "culture", "different"] },
            { point: "Limitation: ignores migration (e.g. Singapore grows through immigration despite a TFR of about 0.97)", keywords: ["migration", "immigration", "singapore", "migrants"] },
            { point: "Limitation: policy or disease can change rates suddenly (e.g. China's One-Child Policy; HIV/AIDS)", keywords: ["policy", "one-child", "china", "hiv", "aids", "war", "pandemic"] },
            { point: "Reaches a justified overall judgement", keywords: ["overall", "conclusion", "to some extent", "partly", "however", "guide"] },
          ],
          commonError: "Only listing limitations. 'To what extent' needs both sides **and** a judgement that says why one side is stronger.",
          difficulty: "challenge",
          guideRef: "demographic-transition",
          hints: [
            "Plan two sides: ways the model is useful, and its limitations.",
            "Use real examples: the UK, Niger, Bangladesh, Japan, Singapore, China.",
            "Which important population change does the DTM leave out completely?",
            "End with a judgement: fully, partly or not at all — and say why.",
          ],
          strategy: "Weigh both sides then judge",
        },
      ],
    },
    {
      id: "population-growth-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "population-growth-p2-q01",
          question: "The world reached 7 billion people in 2011 and 8 billion in 2022. How many years did it take to add the eighth billion?",
          answer: { type: "number", value: 11, display: "11 years" },
          traps: [{ spec: { type: "number", value: 1 }, feedback: "1 is the number of billions added. The question asks how many **years** it took." }],
          solution: ["2022 − 2011 = 11 years — compared with about 123 years for the second billion."],
          difficulty: "warmup",
          guideRef: "growth-over-time",
          hints: ["Subtract the earlier year from the later year."],
        },
        {
          kind: "written",
          id: "population-growth-p2-q02",
          question: "What is meant by **life expectancy**? Give one reason why it has risen around the world. [2 marks]",
          marks: 2,
          modelAnswer:
            "Life expectancy is the average number of years a newborn baby can expect to live if today's death rates stay the same (about 73 years worldwide in 2024). It has risen because vaccinations and antibiotics have cut deaths from infectious diseases, so far fewer babies and children die young.",
          markScheme: [
            { point: "Definition: the average number of years a person born now can expect to live", keywords: ["average", "years", "expect", "live", "born"] },
            { point: "A valid reason (vaccinations, medicine, clean water, sanitation, better diet, healthcare)", keywords: ["vaccin", "medicine", "clean water", "sanitation", "diet", "food", "healthcare", "hospital"] },
          ],
          commonError: "Defining it as 'how old people are when they die' — it is an **average** expectation for people born now.",
          difficulty: "warmup",
          guideRef: "birth-death-rates",
          hints: ["Give the definition first, then one reason that saves lives."],
        },
        {
          kind: "short",
          id: "population-growth-p2-q03",
          question: "In one year a country of **12 million** people records **96,000** deaths. What is its death rate, in deaths per 1000 people?",
          answer: { type: "number", value: 8, display: "8 per 1000" },
          traps: [
            { spec: { type: "number", value: 0.8 }, feedback: "0.8 is the figure per 100 (a percentage). Rates are per **1000**." },
            { spec: { type: "number", value: 125 }, feedback: "You divided the population by the deaths. Deaths go on top." },
          ],
          solution: ["Death rate = deaths ÷ population × 1000.", "96,000 ÷ 12,000,000 = 0.008.", "0.008 × 1000 = 8 per 1000."],
          solutions: [{ label: "Groups of 1000", steps: ["12,000,000 ÷ 1000 = 12,000 groups of 1000 people.", "96,000 ÷ 12,000 = 8 deaths in each group of 1000."] }],
          difficulty: "core",
          guideRef: "birth-death-rates",
          hints: ["Deaths ÷ population, then × 1000.", "Or: how many groups of 1000 people are there, and how many deaths per group?"],
          strategy: "Use figures from the source",
        },
        {
          kind: "short",
          id: "population-growth-p2-q04",
          question:
            "Study the data for Country V.\n\n| Year | Birth rate (per 1000) | Death rate (per 1000) |\n|---|---|---|\n| 2000 | 12 | 10 |\n| 2010 | 13 | 9 |\n| 2020 | 11 | 10 |\n\nWhich stage of the DTM is Country V in? Give the stage number.",
          answer: { type: "text", accept: ["4", "stage 4", "four", "stage four", "4 (low stationary)", "low stationary"] },
          traps: [
            {
              spec: { type: "text", accept: ["5", "stage 5", "five", "stage five"] },
              feedback: "Stage 5 needs the birth rate to drop **below** the death rate. Here births are still slightly higher every year.",
            },
            {
              spec: { type: "text", accept: ["3", "stage 3", "three", "stage three"] },
              feedback: "In stage 3 the birth rate is falling fast and is still well above the death rate. Here both rates are low and close together.",
            },
          ],
          solution: [
            "Both rates are low (9–13 per 1000).",
            "The birth rate fluctuates rather than falling steadily, and stays just above the death rate.",
            "RNI is only 0.1–0.4% a year: slow, fairly stable growth → stage 4 (low stationary).",
          ],
          difficulty: "core",
          guideRef: "demographic-transition",
          hints: ["Are the rates high or low?", "Is the birth rate above or below the death rate?", "Work out the RNI for each year: is growth fast, slow or negative?"],
          strategy: "TEA (Trend, Evidence, Anomaly)",
        },
        {
          kind: "written",
          id: "population-growth-p2-q05",
          question:
            "Study the DTM graph. Describe **and** explain the changes in birth rate, death rate and total population in **stage 3**. [4 marks]",
          diagram: DTM_GRAPH,
          marks: 4,
          modelAnswer:
            "In stage 3 the birth rate falls steeply, from about 39 to about 14 per 1000. This happens because contraception becomes widely available, more girls stay in education and have careers, and families move to cities where children are expensive and are not needed as farm workers; falling infant mortality also means parents no longer need extra children as insurance.\n\nThe death rate keeps falling, but more slowly, from about 16 to about 10 per 1000, as healthcare continues to improve. Because the gap between the two lines narrows, the total population is still rising, but more and more slowly by the end of the stage.",
          markScheme: [
            { point: "Birth rate falls steeply (from about 39 to about 14 per 1000)", keywords: ["birth rate falls", "39", "14", "steeply", "rapidly", "decreases"] },
            { point: "Explains the falling birth rate (contraception, education/careers for women, urbanisation, lower infant mortality)", keywords: ["contraception", "education", "women", "cities", "urban", "infant mortality", "cost"] },
            { point: "Death rate keeps falling but more slowly, to about 10 per 1000", keywords: ["death rate", "slowly", "10", "continues", "healthcare"] },
            { point: "Total population still rises, but more slowly, as the gap narrows", keywords: ["still rises", "more slowly", "gap", "narrow", "growth slows"] },
          ],
          commonError: "Saying the population falls in stage 3. It is still **rising** — births are still above deaths — just more slowly.",
          difficulty: "core",
          guideRef: "demographic-transition",
          hints: [
            "Use the key: describe each line in turn, with figures read from the y-axis.",
            "Then explain: why do families choose to have fewer children?",
            "What happens to the gap between the lines, and so to the total population?",
          ],
          strategy: "Cause → process → effect",
        },
        {
          kind: "mcq",
          id: "population-growth-p2-q06",
          question: "Which statement about world population growth since the 1960s is correct?",
          options: [
            "The world's population has stopped growing",
            "The percentage growth rate has kept rising every year",
            "The world's population fell during the 1990s",
            "The percentage growth rate has fallen (from a peak of a little over 2% a year to under 1%), but the population is still growing",
          ],
          answerIndex: 3,
          explanation:
            "The annual growth rate peaked at a little over 2% in the 1960s and is now under 1%. But a smaller percentage of a much bigger population is still a large number, so the total keeps rising — about a billion every 11–12 years recently. Saying the population 'has stopped growing' confuses a slowing **rate** with a falling **total**.",
          difficulty: "core",
          guideRef: "growth-over-time",
          hints: ["Is a falling growth rate the same as a falling population?", "8 billion was reached in 2022 — so has the total stopped growing?"],
          strategy: "Spot the misconception",
        },
        {
          kind: "written",
          id: "population-growth-p2-q07",
          question: "Explain why the graph of world population over the last 2000 years is described as a **J-curve**. [2 marks]",
          marks: 2,
          modelAnswer:
            "For most of history the line is almost flat, because high death rates cancelled out high birth rates — like the long bottom of a J. After about 1800, and especially after 1950, it rises very steeply as death rates fell while birth rates stayed high, forming the tall upright of the J.",
          markScheme: [
            { point: "A long period of very slow growth — the line is almost flat (the bottom of the J)", keywords: ["flat", "slow", "centuries", "bottom", "gradual"] },
            { point: "Then a very rapid, steep rise since about 1800, especially after 1950 (the upright of the J)", keywords: ["steep", "rapid", "1800", "1950", "shoots up", "sharp"] },
          ],
          difficulty: "warmup",
          guideRef: "growth-over-time",
          hints: ["Picture the letter J: what does the bottom look like, and what does the upright look like?"],
          strategy: "Sketch it",
        },
        {
          kind: "short",
          id: "population-growth-p2-q08",
          question:
            "Country K had a population of 30 million in 2024. A projection suggests it will reach 45 million by 2050. What is the projected percentage increase, in %?",
          answer: { type: "number", value: 50, display: "50%" },
          traps: [
            { spec: { type: "number", value: 15 }, feedback: "15 million is the actual increase. Now divide by the **starting** population and × 100." },
            { spec: { type: "number", value: 33.3, tolerance: 0.1 }, feedback: "You divided by the final population (45). Percentage change always divides by the **starting** value (30)." },
          ],
          solution: ["Increase = 45 − 30 = 15 million.", "% increase = 15 ÷ 30 × 100 = 50%."],
          commonError: "Dividing by the new value instead of the original value.",
          difficulty: "core",
          guideRef: "future-population",
          hints: ["First find the increase.", "Percentage change = increase ÷ original × 100."],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "population-growth-p2-q09",
          question: "Explain why the UN projects **Europe's** population to shrink while **sub-Saharan Africa's** keeps growing. [3 marks]",
          marks: 3,
          modelAnswer:
            "Europe's fertility rate is well below the replacement level of about 2.1 — around 1.5 or less in most European countries — so each generation of children is smaller than its parents' generation. Its population is also ageing: a large share of people are elderly, so the number of deaths is rising and in many countries is already higher than the number of births. In sub-Saharan Africa, by contrast, women have more than four children on average (in Niger about six), and the population is very young, so huge numbers of young people are about to become parents. This momentum keeps births far above deaths for decades.",
          markScheme: [
            { point: "Europe: fertility well below replacement level (about 2.1)", keywords: ["below replacement", "1.5", "low fertility", "few children", "2.1"] },
            { point: "Europe: ageing population, so deaths rise and can exceed births", keywords: ["ageing", "aging", "elderly", "old", "deaths exceed", "more deaths"] },
            { point: "Sub-Saharan Africa: high fertility and a very young population — momentum keeps births high", keywords: ["high fertility", "young", "youthful", "momentum", "niger", "six", "four"] },
          ],
          commonError: "Saying Africa grows because death rates are high. A high death rate would slow growth — it grows because **birth rates** are high and the population is young.",
          difficulty: "core",
          guideRef: "future-population",
          hints: [
            "Compare fertility in each region with replacement level (about 2.1).",
            "Think about age structure: who makes up most of each population?",
            "Why does a young population keep growing even if fertility starts to fall?",
          ],
          strategy: "Compare and contrast",
        },
        {
          kind: "short",
          id: "population-growth-p2-q10",
          question: "A country has a birth rate of **18 per 1000** and a rate of natural increase of **1.1%**. What is its death rate, in deaths per 1000?",
          answer: { type: "number", value: 7, display: "7 per 1000" },
          traps: [
            { spec: { type: "number", value: 16.9 }, feedback: "You subtracted 1.1 straight from 18. First turn 1.1% back into 'per 1000': 1.1 × 10 = 11." },
            { spec: { type: "number", value: 29 }, feedback: "You added. The death rate must be **lower** than the birth rate, because the RNI is positive." },
          ],
          solution: ["RNI (%) = (BR − DR) ÷ 10, so BR − DR = 1.1 × 10 = 11 per 1000.", "DR = 18 − 11 = 7 per 1000.", "Check: (18 − 7) ÷ 10 = 1.1% ✓"],
          commonError: "Mixing up units — subtracting a percentage from a rate per 1000.",
          difficulty: "core",
          guideRef: "birth-death-rates",
          hints: ["Work backwards through RNI = (BR − DR) ÷ 10.", "What must BR − DR be, if dividing it by 10 gives 1.1?", "BR − DR = 11. Now find DR."],
          strategy: "Work backwards",
        },
        {
          kind: "mcq",
          id: "population-growth-p2-q11",
          question: "Bangladesh is usually placed in (late) stage 3 of the DTM. Which evidence **best** supports this?",
          options: [
            "Its birth rate and fertility have fallen a lot since the 1970s, while its death rate is low",
            "Its death rate is higher than its birth rate",
            "Its birth and death rates are both high and fluctuating",
            "Its birth rate has been rising steadily",
          ],
          answerIndex: 0,
          explanation:
            "Bangladesh's TFR fell from about 6 or more children per woman in the 1970s to about 2 today, while its death rate is low. A falling birth rate with a low death rate is **stage 3**. A death rate above the birth rate would be stage 5 (like Japan); high, fluctuating rates are stage 1.",
          difficulty: "core",
          guideRef: "demographic-transition",
          hints: ["What is the key feature of stage 3?", "Which rate is changing in stage 3 — births or deaths?"],
          strategy: "Eliminate options",
        },
        {
          kind: "written",
          id: "population-growth-p2-q12",
          question:
            "Study the table.\n\n| | Singapore (residents) | Niger | World |\n|---|---|---|---|\n| Total fertility rate (children per woman, approx.) | 0.97 (2023) | about 6 | about 2.25 (2024) |\n\nReplacement level is about 2.1. Compare fertility in Singapore and Niger, and suggest reasons for the difference. [4 marks]",
          marks: 4,
          modelAnswer:
            "Niger's TFR (about 6) is roughly six times Singapore's resident TFR (0.97). Niger is almost three times replacement level, while Singapore is less than half of it, so Niger's population is growing fast while Singapore's resident population is not replacing itself.\n\nSingapore's TFR is low because raising children there is expensive (housing, education, tuition), most women are well educated and have careers, and many people marry and start families later. Niger's is high because children help on family farms and look after parents in old age, many girls marry young and few stay long in school, contraception is not widely used, and high infant mortality in the past encouraged large families.",
          markScheme: [
            { point: "Compares with figures: Niger's TFR is about six times Singapore's (6 vs 0.97)", keywords: ["6", "0.97", "six times", "higher", "lower"] },
            { point: "Uses replacement level: Singapore well below (less than half), Niger nearly three times", keywords: ["replacement", "2.1", "half", "below", "above", "three times"] },
            { point: "Suggests reasons for Singapore's low TFR (cost of children/housing, careers, later marriage)", keywords: ["cost", "expensive", "career", "later", "marry", "housing", "work"] },
            { point: "Suggests reasons for Niger's high TFR (farm work, old-age support, early marriage, low female education, little contraception, infant mortality)", keywords: ["farm", "early marriage", "contraception", "education", "infant mortality", "religion", "tradition"] },
          ],
          commonError: "Only describing the numbers. 'Suggest reasons' needs explanations for **both** countries.",
          difficulty: "core",
          guideRef: "birth-death-rates",
          hints: [
            "How many times bigger is 6 than 0.97?",
            "Compare each country with replacement level (2.1).",
            "Think about the cost of children, women's education and the role of children in each country.",
          ],
          strategy: "Compare and contrast",
        },
        {
          kind: "short",
          id: "population-growth-p2-q13",
          question:
            "World population grew from about 1 billion in 1804 to 2 billion in 1927. On average, how many **million** people were added each year? Give your answer to the nearest million.",
          answer: { type: "number", value: 8, display: "about 8 million a year" },
          traps: [
            { spec: { type: "number", value: 123 }, feedback: "123 is the number of years. Divide the increase (1,000 million) by it." },
            { spec: { type: "number", value: 0.008, tolerance: 0.0005 }, feedback: "That is in **billions** per year. Convert: 1 billion = 1,000 million." },
          ],
          solution: [
            "Increase = 1 billion = 1,000 million people.",
            "Time = 1927 − 1804 = 123 years.",
            "1,000 ÷ 123 ≈ 8.1, so about 8 million people a year.",
            "Compare: between 2011 and 2022 the world added about 91 million a year — over ten times as many.",
          ],
          difficulty: "core",
          guideRef: "growth-over-time",
          hints: ["Write 1 billion in millions.", "How many years between 1804 and 1927?", "Divide the increase by the number of years."],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "population-growth-p2-q14",
          question: "Study the graph of Country Z. Explain why Country Z's population was growing fastest around **1940**. [3 marks]",
          diagram: COUNTRY_Z,
          marks: 3,
          modelAnswer:
            "In 1940 the gap between Country Z's birth rate (44 per 1000) and death rate (18 per 1000) was the widest on the graph — 26 per 1000, a rate of natural increase of 2.6% a year. The death rate had fallen quickly from 32 in 1900, probably because of vaccinations, cleaner water and better food supplies, which save lives straight away. But the birth rate had hardly changed, because family decisions change more slowly: children were still needed to work on farms, contraception was not widely available and traditions favoured large families. This time lag between the falling death rate and the falling birth rate made the population grow fastest.",
          markScheme: [
            { point: "The gap between birth and death rates was widest (44 − 18 = 26 per 1000, or 2.6%)", keywords: ["gap", "26", "2.6", "44", "18", "widest", "largest"] },
            { point: "The death rate had fallen fast because of improved healthcare, vaccination, clean water or food supply", keywords: ["vaccin", "medicine", "clean water", "sanitation", "healthcare", "food"] },
            { point: "The birth rate was still high (tradition, children needed for farm work, no contraception) — a time lag", keywords: ["tradition", "farm", "contraception", "time lag", "still high", "religion"] },
          ],
          commonError: "Saying the population grew fastest because the birth rate was highest. The birth rate was actually higher in 1900 (46) — what mattered was the **gap**.",
          difficulty: "core",
          guideRef: "demographic-transition",
          hints: [
            "Natural increase = birth rate − death rate. Where is the gap biggest?",
            "Why had the death rate already fallen by 1940?",
            "Why was the birth rate still high?",
          ],
          strategy: "Cause → process → effect",
        },
        {
          kind: "written",
          id: "population-growth-p2-q15",
          question: "'The world's population will keep growing for ever.' To what extent do you agree? Use evidence. [6 marks]",
          marks: 6,
          modelAnswer:
            "There is some evidence that growth will continue for a long time. The world reached 8 billion in 2022 and the UN projects about 9.7 billion by 2050. Much of this growth will come from sub-Saharan Africa, where fertility is still high (Niger's TFR is about 6) and the population is very young, so momentum will keep births above deaths for decades even as fertility falls.\n\nHowever, there is strong evidence that growth will not continue for ever. The world's TFR has fallen to about 2.25 (2024), close to the replacement level of about 2.1, and many countries are already well below it. Some populations are already shrinking: Japan's has been falling since around 2010 and China's fell in 2022 for the first time in about six decades, and much of Europe is ageing. The UN's World Population Prospects 2024 projects a peak of about 10.3 billion in the mid-2080s, followed by a slight fall to about 10.2 billion by 2100.\n\nOverall, I disagree. The population will keep growing for several more decades, but falling fertility means it is projected to stop growing this century. Projections are uncertain — the peak could come sooner or later — but almost no credible forecast shows growth lasting for ever.",
          markScheme: [
            { point: "Growth is continuing now (8 billion in 2022; about 9.7 billion projected by 2050)", keywords: ["8 billion", "9.7", "2050", "still growing", "growing"] },
            { point: "Momentum and high fertility in sub-Saharan Africa (e.g. Niger's TFR about 6)", keywords: ["momentum", "young", "youthful", "africa", "niger", "high fertility"] },
            { point: "Fertility is falling worldwide (world TFR about 2.25, close to replacement level 2.1)", keywords: ["fertility", "falling", "2.25", "replacement", "2.1", "below"] },
            { point: "Some populations are already shrinking (Japan; China fell in 2022; much of Europe)", keywords: ["japan", "china", "2022", "europe", "shrinking", "declining"] },
            { point: "UN WPP 2024 projects a peak of about 10.3 billion in the mid-2080s, then a slight fall; projections are uncertain", keywords: ["10.3", "peak", "2080", "10.2", "2100", "uncertain", "projection"] },
            { point: "Reaches a justified conclusion", keywords: ["disagree", "overall", "conclusion", "will not", "stop"] },
          ],
          commonError: "Treating the UN projection as a certainty. Use 'is projected to' and say that projections depend on assumptions.",
          difficulty: "challenge",
          guideRef: "future-population",
          hints: [
            "Find evidence for continued growth first: where is population still rising fast, and why?",
            "Then find evidence against: what is happening to fertility worldwide? Which countries are already shrinking?",
            "What does the UN's 2024 projection say about a peak?",
            "Finish with a judgement that weighs both sides.",
          ],
          strategy: "Weigh both sides then judge",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "population-growth-ch-q01",
      question:
        "The **rule of 70** estimates doubling time: doubling time (years) ≈ 70 ÷ annual growth rate (%).\n\nIn the 1960s the world's population was growing by about 2% a year. In reality it doubled from 3 billion (1960) to 6 billion (1999).\n\nHow many years **longer** did the real doubling take than the rule-of-70 estimate for a 2% growth rate?",
      answer: { type: "number", value: 4, display: "4 years" },
      traps: [
        { spec: { type: "number", value: 35 }, feedback: "35 years is the rule-of-70 estimate. Now compare it with the real doubling time." },
        { spec: { type: "number", value: 39 }, feedback: "39 years is the real doubling time. How much longer is that than the estimate?" },
      ],
      solution: [
        "Estimate: 70 ÷ 2 = 35 years.",
        "Actual: 1999 − 1960 = 39 years.",
        "Difference: 39 − 35 = 4 years longer.",
        "Why? The growth rate did not stay at 2% — it fell after the 1960s as fertility dropped, so the doubling took longer than the rule predicted.",
      ],
      commonError: "Stopping after one step. This question needs two calculations and a comparison.",
      difficulty: "challenge",
      guideRef: "growth-over-time",
      hints: [
        "There are two separate calculations, then a comparison.",
        "Rule of 70 at 2%: 70 ÷ 2.",
        "Real doubling: 3 billion → 6 billion. Which two years?",
        "Subtract the estimate from the real time.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "population-growth-ch-q02",
      question:
        "Country G has **40 million** people, a birth rate of **38 per 1000** and a death rate of **8 per 1000**. Assume these rates stay the same and there is no migration. Each year's natural increase is added on before the next year is worked out.\n\nBy how much will Country G's population have **grown** after **2 years**? Give your answer in millions, to 3 decimal places.",
      answer: { type: "number", value: 2.436, tolerance: 0.0005, display: "2.436 million (2,436,000 people)" },
      traps: [
        { spec: { type: "number", value: 2.4 }, feedback: "You added 3% of 40 million twice. In year 2 the 3% is taken of the **bigger** population (41.2 million)." },
        { spec: { type: "number", value: 27.6 }, feedback: "You used 30% a year. (38 − 8) = 30 per **1000**, which is 3%, not 30%." },
        { spec: { type: "number", value: 42.436 }, feedback: "That is the new **total**. The question asks how much the population has **grown** — subtract the starting 40 million." },
      ],
      solution: [
        "RNI = (38 − 8) ÷ 10 = 3% a year.",
        "After year 1: 40 × 1.03 = 41.2 million.",
        "After year 2: 41.2 × 1.03 = 42.436 million.",
        "Growth = 42.436 − 40 = 2.436 million (2,436,000 people).",
      ],
      solutions: [
        { label: "Multiplier in one go", steps: ["Growing by 3% means multiplying by 1.03 each year.", "40 × 1.03 × 1.03 = 40 × 1.0609 = 42.436 million.", "Growth = 42.436 − 40 = 2.436 million."] },
        { label: "Year by year in people", steps: ["Year 1: 3% of 40,000,000 = 1,200,000 → 41,200,000.", "Year 2: 3% of 41,200,000 = 1,236,000.", "Total growth = 1,200,000 + 1,236,000 = 2,436,000 = 2.436 million."] },
      ],
      commonError: "Ignoring compounding (giving 2.4 million): year 2 adds 3% of 41.2 million, not 3% of 40 million.",
      difficulty: "challenge",
      guideRef: "birth-death-rates",
      hints: [
        "Start by turning the birth and death rates into an RNI percentage.",
        "Year 1: add 3% of 40 million.",
        "Year 2: add 3% of the **new** total, not the original one.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-growth-ch-q03",
      question:
        "Study the data for Country N, a country you have not met before.\n\n| Year | Birth rate (per 1000) | Death rate (per 1000) |\n|---|---|---|\n| 1960 | 47 | 22 |\n| 1980 | 45 | 14 |\n| 2000 | 34 | 9 |\n| 2020 | 21 | 6 |\n\nApply the DTM to Country N:\n(a) identify its stage in 1960–1980 and in 2000–2020, using evidence;\n(b) predict and justify what is likely to happen next;\n(c) give one reason why your prediction might be wrong. [5 marks]",
      marks: 5,
      modelAnswer:
        "(a) Between 1960 and 1980 Country N was in stage 2: its birth rate stayed high (47 → 45 per 1000) while its death rate fell fast (22 → 14). Between 2000 and 2020 it was in stage 3: the death rate was low (9 → 6) and the birth rate was falling rapidly (34 → 21). The rate of natural increase shows this too — it peaked at (45 − 14) ÷ 10 = 3.1% in 1980 and had slowed to (21 − 6) ÷ 10 = 1.5% by 2020.\n\n(b) If the trend continues, the birth rate will keep falling towards the low death rate, so within a few decades Country N should reach stage 4, with slow or stable growth and an ageing population.\n\n(c) The prediction could be wrong because the DTM is based on European history. Country N's birth rate might stop falling because of cultural or religious traditions, a government policy could change birth rates, war or disease could raise the death rate, and the model ignores migration, which could make the population grow or shrink.",
      markScheme: [
        { point: "1960–1980 identified as stage 2, with evidence (birth rate stays high 47 → 45; death rate falls 22 → 14)", keywords: ["stage 2", "47", "45", "22", "14", "death rate fell"] },
        { point: "2000–2020 identified as stage 3, with evidence (birth rate falling 34 → 21; death rate low 9 → 6)", keywords: ["stage 3", "34", "21", "birth rate fell", "falling"] },
        { point: "Uses calculated RNI to support the stages (peak 3.1% in 1980, down to 1.5% in 2020)", keywords: ["3.1", "1.5", "natural increase", "rni", "slowed", "peak"] },
        { point: "Justified prediction: birth rate keeps falling towards the death rate → stage 4 (slow/stable growth)", keywords: ["stage 4", "continue", "towards", "stable", "few decades", "predict"] },
        { point: "Valid reason the prediction might be wrong (birth rate stalls, policy, war/disease, migration ignored)", keywords: ["stall", "stuck", "policy", "migration", "war", "disease", "culture", "religion"] },
      ],
      commonError: "Identifying stages from a single year's numbers. Look at the **direction** each rate is moving, not just its size.",
      difficulty: "challenge",
      guideRef: "demographic-transition",
      hints: [
        "For each period, ask: which rate is falling fast, and which is steady?",
        "Calculate the RNI for each year — when is growth fastest?",
        "Extend the trend: where are the two lines heading?",
        "For (c), think about the limitations of the DTM.",
      ],
      strategy: "Apply a model to a new place",
    },
    {
      kind: "written",
      id: "population-growth-ch-q04",
      question:
        "Arjun writes: *'Singapore's resident TFR is only 0.97, so Singapore must be in stage 5 of the DTM and its population must be falling.'*\n\nIdentify and explain **two** flaws in Arjun's reasoning. [4 marks]",
      marks: 4,
      modelAnswer:
        "First, Arjun confuses fertility with the DTM's stages. Stage 5 means the death rate is **higher** than the birth rate. A TFR of 0.97 shows that each woman has very few children, but the birth rate per 1000 people also depends on how many adults of child-bearing age there are. A low TFR takes time to work through the age structure, so a country can have a very low TFR and still have more births than deaths for a while, especially when its death rate is low.\n\nSecond, Arjun — like the DTM — ignores migration. Singapore's total population has actually grown, to about 6.0 million in 2024, largely because of immigrants and foreign workers. So even if the resident population eventually shrinks, Singapore's total population is not necessarily falling.",
      markScheme: [
        { point: "Flaw 1: stage 5 is defined by the death rate exceeding the birth rate — a low TFR alone does not show this", keywords: ["death rate", "birth rate", "exceed", "higher than", "not the same", "tfr"] },
        { point: "Explains: age structure/momentum means births can still exceed deaths for a while — effects of low TFR take time", keywords: ["momentum", "time", "age structure", "young adults", "lag", "still more births"] },
        { point: "Flaw 2: the reasoning (and the DTM) ignores migration", keywords: ["migration", "immigration", "ignores"] },
        { point: "Evidence: Singapore's total population has grown, to about 6.0 million (2024), through immigration/foreign workers", keywords: ["6 million", "6.0", "immigrants", "foreign", "workers", "rising", "grown"] },
      ],
      commonError: "Agreeing with Arjun because 0.97 is so low. A very low TFR is a warning sign for the future, but it is not the same as deaths already exceeding births — and it says nothing about migration.",
      difficulty: "challenge",
      guideRef: "demographic-transition",
      hints: [
        "What exactly defines stage 5 on the DTM graph?",
        "Is the total fertility rate the same thing as the birth rate?",
        "What population flow does the DTM leave out — and how has Singapore's total population actually changed?",
      ],
      strategy: "Spot the misconception",
    },
    {
      kind: "short",
      id: "population-growth-ch-q05",
      question:
        "Between 2011 (7 billion) and 2022 (8 billion) the world added people at a certain average rate each year. The UN WPP 2024 projects about 9.7 billion by 2050.\n\nOn average, how many million **fewer** people per year is the world projected to add between 2022 and 2050 than it added between 2011 and 2022? Give your answer to the nearest million.",
      answer: { type: "number", value: 30, tolerance: 0.5, display: "about 30 million fewer per year" },
      traps: [
        { spec: { type: "number", value: 61 }, feedback: "About 61 million a year is the projected rate for 2022–2050. Now compare it with 2011–2022." },
        { spec: { type: "number", value: 91 }, feedback: "About 91 million a year is the 2011–2022 rate. Now work out the 2022–2050 rate and find the difference." },
      ],
      solution: [
        "2011–2022: 1,000 million ÷ 11 years ≈ 90.9 million a year.",
        "2022–2050: (9.7 − 8.0) billion = 1,700 million, over 28 years: 1,700 ÷ 28 ≈ 60.7 million a year.",
        "Difference: 90.9 − 60.7 ≈ 30.2, so about 30 million fewer people a year.",
        "So even before the peak, the yearly increase is projected to fall by about a third.",
      ],
      commonError: "Using 2050 − 2022 = 18 years, or forgetting to convert billions into millions.",
      difficulty: "challenge",
      guideRef: "future-population",
      hints: [
        "Work out two averages: people added per year in each period.",
        "Write the increases in millions: 1 billion = 1,000 million.",
        "2050 − 2022 = 28 years.",
        "Subtract the smaller average from the larger.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-growth-ch-q06",
      question:
        "Some researchers argue that world population will peak **earlier and lower** than the UN's projection of about 10.3 billion in the mid-2080s. Evaluate this view. [6 marks]",
      marks: 6,
      modelAnswer:
        "There is good evidence for an earlier, lower peak. Fertility has fallen faster than many experts expected in several countries: South Korea's TFR was about 0.72 in 2023 and Singapore's resident TFR about 0.97, and China's population fell in 2022. As more girls stay in school, more people move to cities and contraception spreads, fertility in sub-Saharan Africa could also fall faster than the UN assumes. A 2020 study by the IHME suggested a peak of only about 9.7 billion in the 2060s, and the UN's own projections have been revised slightly downwards (its 2022 edition had a higher peak of about 10.4 billion).\n\nOn the other hand, fertility in parts of sub-Saharan Africa, such as Niger (TFR about 6), has fallen only slowly. These populations are very young, so momentum will keep births high for decades even if fertility drops. People everywhere are also living longer, which keeps the total up. Projections are uncertain in both directions: the peak could also be higher than the UN expects.\n\nOverall, an earlier and lower peak is quite possible, because recent evidence shows fertility falling fast in many regions — but it is not certain, because the future of fertility in sub-Saharan Africa is the biggest unknown, and momentum guarantees decades more growth whatever happens.",
      markScheme: [
        { point: "For: fertility has fallen faster than expected in some places (e.g. South Korea about 0.72; Singapore 0.97; China's fall in 2022)", keywords: ["south korea", "0.72", "faster", "china", "singapore", "0.97"] },
        { point: "For: spreading girls' education, urbanisation and contraception could lower African fertility faster than assumed", keywords: ["education", "girls", "urban", "cities", "contraception", "africa"] },
        { point: "For: alternative projections and revisions (e.g. IHME 2020 about 9.7 billion in the 2060s; UN projections revised down)", keywords: ["ihme", "9.7", "2060", "revised", "lower"] },
        { point: "Against: slow fertility decline in parts of sub-Saharan Africa and momentum from youthful populations", keywords: ["momentum", "slowly", "young", "africa", "niger"] },
        { point: "Against: rising life expectancy; uncertainty runs both ways (peak could be higher)", keywords: ["life expectancy", "longer", "uncertain", "both ways", "higher"] },
        { point: "Reaches a justified conclusion", keywords: ["overall", "conclusion", "likely", "possible", "therefore"] },
      ],
      commonError: "Writing one-sided support. 'Evaluate' needs evidence for **and** against, then a weighed judgement.",
      difficulty: "challenge",
      guideRef: "future-population",
      hints: [
        "What would have to happen to fertility for the peak to come earlier and lower?",
        "Find real evidence that fertility is falling fast — think East Asia and Singapore.",
        "Now argue the other side: where is fertility still high, and what does momentum do?",
        "Finish with a judgement that says which evidence is stronger, and why.",
      ],
      strategy: "Weigh both sides then judge",
    },
    {
      kind: "short",
      id: "population-growth-ch-q07",
      question:
        "Country M has **6.5 million** people. Last year there were **156,000** births and **52,000** deaths. Calculate its rate of natural increase, in %.",
      answer: { type: "number", value: 1.6, display: "1.6%" },
      traps: [
        { spec: { type: "number", value: 16 }, feedback: "16 is the natural increase **per 1000**. Divide by 10 for a percentage." },
        { spec: { type: "number", value: 2.4 }, feedback: "2.4 is the birth rate turned into a percentage. Remember to take away the deaths." },
      ],
      solution: [
        "Birth rate = 156,000 ÷ 6,500,000 × 1000 = 24 per 1000.",
        "Death rate = 52,000 ÷ 6,500,000 × 1000 = 8 per 1000.",
        "RNI = (24 − 8) ÷ 10 = 1.6%.",
      ],
      solutions: [
        { label: "Straight to a percentage", steps: ["Natural increase = 156,000 − 52,000 = 104,000 people.", "104,000 ÷ 6,500,000 × 100 = 1.6%."] },
      ],
      commonError: "Stopping at 16 (per 1000) instead of converting to a percentage.",
      difficulty: "challenge",
      guideRef: "birth-death-rates",
      hints: [
        "You are not given the rates — work them out from the totals first.",
        "Birth rate = births ÷ population × 1000.",
        "Then use RNI = (BR − DR) ÷ 10 — or find births − deaths as a percentage of the population.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-growth-ch-q08",
      question:
        "Study the bar chart. The time taken to add each billion people fell from 123 years to about 11–14 years — yet the world's **percentage** growth rate has been falling since the 1960s. Explain both of these facts. [4 marks]",
      diagram: BILLION_BARS,
      marks: 4,
      modelAnswer:
        "In the 1800s and 1900s death rates fell sharply thanks to more food, clean water, sanitation and medicine, while birth rates stayed high, so the growth rate rose. Growth also compounds: the same percentage adds far more people to a bigger population — 2% of 3 billion is three times as many people as 2% of 1 billion — so each billion arrived faster.\n\nSince the 1960s fertility has fallen in most countries as education and contraception spread, so the growth rate has dropped from a little over 2% a year to under 1%. But a smaller percentage of a much larger population is still a huge number: about 0.9% of 8 billion is roughly 70 million people a year. That is why the last five bars stay at a similar 11–14 years even though the percentage rate is falling.",
      markScheme: [
        { point: "Death rates fell (food, sanitation, medicine) while birth rates stayed high, so growth sped up", keywords: ["death rate", "fell", "medicine", "sanitation", "food", "birth rates stayed high"] },
        { point: "Compounding: the same percentage adds more people to a bigger population", keywords: ["compound", "bigger", "larger population", "more people", "same percentage"] },
        { point: "Since the 1960s fertility has fallen, so the percentage rate dropped (from a little over 2% to under 1%)", keywords: ["fertility", "fallen", "2%", "1%", "rate fell", "contraception"] },
        { point: "A smaller percentage of a much bigger population still adds similar numbers, so the bars stay level at 11–14 years", keywords: ["smaller percentage", "similar", "level", "11", "14", "still large", "70 million"] },
      ],
      commonError: "Thinking a falling growth rate means a falling population. A rate can fall while the total keeps rising.",
      difficulty: "challenge",
      guideRef: "growth-over-time",
      hints: [
        "Separate the two ideas: **number added** each year and **percentage** growth rate.",
        "Why did each billion arrive faster at first? Think deaths, births and compounding.",
        "What has happened to fertility since the 1960s?",
        "Work out roughly 1% of 8 billion — is that a small number of people?",
      ],
      strategy: "Cause → process → effect",
    },
  ],
};
