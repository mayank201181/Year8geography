import type { Paper } from "../../types.ts";

// ---------------------------------------------------------------------------
// Resources (inline SVG). Every plotted value matches the numbers in the text.
// ---------------------------------------------------------------------------

/** J-curve: world population milestones 1804–2022. x = 60 + 1.5 × (year − 1800); y = 270 − 22 × billions. */
const JCURVE = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of world population from 1800 to 2022. The line is almost flat at first and then rises steeply: 1 billion in 1804, 2 billion in 1927, 3 billion in 1960, 4 billion in 1974, 5 billion in 1987, 6 billion in 1999, 7 billion in 2011 and 8 billion in 2022." font-family="sans-serif" font-size="12"><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><text x="245" y="22" text-anchor="middle" font-size="14" fill="#1f2937">World population, 1800–2022</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="226" x2="430" y2="226"/><line x1="60" y1="182" x2="430" y2="182"/><line x1="60" y1="138" x2="430" y2="138"/><line x1="60" y1="94" x2="430" y2="94"/><line x1="60" y1="50" x2="430" y2="50"/></g><line x1="60" y1="270" x2="430" y2="270" stroke="#334155" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="45" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937" text-anchor="end"><text x="54" y="274">0</text><text x="54" y="230">2</text><text x="54" y="186">4</text><text x="54" y="142">6</text><text x="54" y="98">8</text><text x="54" y="54">10</text></g><g fill="#1f2937" text-anchor="middle"><text x="60" y="287">1800</text><text x="135" y="287">1850</text><text x="210" y="287">1900</text><text x="285" y="287">1950</text><text x="360" y="287">2000</text></g><g stroke="#334155"><line x1="135" y1="270" x2="135" y2="275"/><line x1="210" y1="270" x2="210" y2="275"/><line x1="285" y1="270" x2="285" y2="275"/><line x1="360" y1="270" x2="360" y2="275"/></g><text x="16" y="160" transform="rotate(-90 16 160)" text-anchor="middle" fill="#1f2937">Population (billions)</text><polyline points="66,248 250.5,226 300,204 321,182 340.5,160 358.5,138 376.5,116 393,94" fill="none" stroke="#1f2937" stroke-width="2.5"/><g fill="#c7d2fe" stroke="#1f2937"><circle cx="66" cy="248" r="3.5"/><circle cx="250.5" cy="226" r="3.5"/><circle cx="300" cy="204" r="3.5"/><circle cx="321" cy="182" r="3.5"/><circle cx="340.5" cy="160" r="3.5"/><circle cx="358.5" cy="138" r="3.5"/><circle cx="376.5" cy="116" r="3.5"/><circle cx="393" cy="94" r="3.5"/></g><text x="74" y="262" fill="#1f2937">1 bn (1804)</text><text x="244" y="214" text-anchor="end" fill="#1f2937">2 bn (1927)</text><text x="385" y="88" text-anchor="end" fill="#1f2937">8 bn (2022)</text></svg>`;

/** Years taken to add each extra billion. Bar height = 1.5 px per year; baseline y = 260. */
const BILLION_BARS = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of the number of years taken to add each extra billion people: 1 to 2 billion took 123 years, 2 to 3 billion 33 years, 3 to 4 billion 14 years, 4 to 5 billion 13 years, 5 to 6 billion 12 years, 6 to 7 billion 12 years and 7 to 8 billion 11 years." font-family="sans-serif" font-size="12"><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><text x="250" y="22" text-anchor="middle" font-size="14" fill="#1f2937">Years taken to add each extra billion people</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="230" x2="440" y2="230"/><line x1="60" y1="200" x2="440" y2="200"/><line x1="60" y1="170" x2="440" y2="170"/><line x1="60" y1="140" x2="440" y2="140"/><line x1="60" y1="110" x2="440" y2="110"/><line x1="60" y1="80" x2="440" y2="80"/><line x1="60" y1="50" x2="440" y2="50"/></g><line x1="60" y1="260" x2="440" y2="260" stroke="#334155" stroke-width="1.5"/><line x1="60" y1="260" x2="60" y2="45" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937" text-anchor="end"><text x="54" y="264">0</text><text x="54" y="234">20</text><text x="54" y="204">40</text><text x="54" y="174">60</text><text x="54" y="144">80</text><text x="54" y="114">100</text><text x="54" y="84">120</text><text x="54" y="54">140</text></g><text x="16" y="155" transform="rotate(-90 16 155)" text-anchor="middle" fill="#1f2937">Years taken</text><g fill="#c7d2fe" stroke="#1f2937"><rect x="80" y="75.5" width="36" height="184.5"/><rect x="130" y="210.5" width="36" height="49.5"/><rect x="180" y="239" width="36" height="21"/><rect x="230" y="240.5" width="36" height="19.5"/><rect x="280" y="242" width="36" height="18"/><rect x="330" y="242" width="36" height="18"/><rect x="380" y="243.5" width="36" height="16.5"/></g><g fill="#1f2937" text-anchor="middle"><text x="98" y="70">123</text><text x="148" y="205">33</text><text x="198" y="234">14</text><text x="248" y="235">13</text><text x="298" y="237">12</text><text x="348" y="237">12</text><text x="398" y="238">11</text></g><g fill="#1f2937" text-anchor="middle"><text x="98" y="277">1→2</text><text x="148" y="277">2→3</text><text x="198" y="277">3→4</text><text x="248" y="277">4→5</text><text x="298" y="277">5→6</text><text x="348" y="277">6→7</text><text x="398" y="277">7→8</text></g><text x="250" y="294" text-anchor="middle" fill="#1f2937">World population (billions): from → to</text></svg>`;

/** Generic DTM. Rates: y = 260 − 4.4 × (per 1000). Stage boundaries at x = 130, 210, 290, 370. */
const DTM_GRAPH = `<svg viewBox="0 0 480 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Demographic Transition Model with five stages. Birth rate: high and fluctuating around 40 per 1000 in stage 1, still high in stage 2, falls steeply in stage 3, low around 12 to 13 in stage 4, and falls to about 8 in stage 5. Death rate: high and fluctuating in stage 1, falls steeply in stage 2, keeps falling to about 10 in stage 3, stays low in stage 4 and rises slightly to about 11 in stage 5, ending above the birth rate. Total population is low in stage 1, rises most steeply at the end of stage 2 and start of stage 3, levels off in stage 4 and starts to fall in stage 5." font-family="sans-serif" font-size="12"><rect x="0" y="0" width="480" height="310" fill="#ffffff"/><text x="250" y="16" text-anchor="middle" font-size="14" fill="#1f2937">The Demographic Transition Model</text><g fill="#f1f5f9"><rect x="130" y="40" width="80" height="220"/><rect x="290" y="40" width="80" height="220"/></g><g stroke="#94a3b8" stroke-dasharray="3 3"><line x1="130" y1="40" x2="130" y2="260"/><line x1="210" y1="40" x2="210" y2="260"/><line x1="290" y1="40" x2="290" y2="260"/><line x1="370" y1="40" x2="370" y2="260"/></g><g fill="#1f2937" text-anchor="middle" font-size="13"><text x="90" y="34">Stage 1</text><text x="170" y="34">Stage 2</text><text x="250" y="34">Stage 3</text><text x="330" y="34">Stage 4</text><text x="410" y="34">Stage 5</text></g><line x1="50" y1="260" x2="450" y2="260" stroke="#334155" stroke-width="1.5"/><line x1="50" y1="260" x2="50" y2="40" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937" text-anchor="end" font-size="11"><text x="45" y="264">0</text><text x="45" y="220">10</text><text x="45" y="176">20</text><text x="45" y="132">30</text><text x="45" y="88">40</text><text x="45" y="44">50</text></g><text x="14" y="150" transform="rotate(-90 14 150)" text-anchor="middle" font-size="11" fill="#1f2937">Births and deaths per 1000 per year</text><text x="250" y="276" text-anchor="middle" font-size="11" fill="#1f2937">Time →</text><polyline points="50,250 130,248 170,242 210,228 250,205 290,186 330,176 370,172 410,171 450,175" fill="none" stroke="#6366f1" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round"/><polyline points="50,92.8 66,79.6 82,97.2 98,84 114,92.8 130,84 210,88.4 290,198.4 330,207.2 370,202.8 450,224.8" fill="none" stroke="#1f2937" stroke-width="2.5"/><polyline points="50,106 66,88.4 82,114.8 98,92.8 114,110.4 130,101.6 210,189.6 290,216 370,216 450,211.6" fill="none" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="7 4"/><g font-size="11"><line x1="60" y1="294" x2="85" y2="294" stroke="#1f2937" stroke-width="2.5"/><text x="90" y="298" fill="#1f2937">Birth rate</text><line x1="170" y1="294" x2="195" y2="294" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="7 4"/><text x="200" y="298" fill="#1f2937">Death rate</text><line x1="285" y1="294" x2="310" y2="294" stroke="#6366f1" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round"/><text x="315" y="298" fill="#1f2937">Total population</text></g></svg>`;

/** Country Z rates. x = 60 + 3 × (year − 1900); y = 260 − 4.4 × (per 1000). */
const COUNTRY_Z = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of Country Z's birth and death rates per 1000, 1900 to 2020. Birth rate: 46 in 1900, 45 in 1920, 44 in 1940, 37 in 1960, 28 in 1980, 20 in 2000, 14 in 2020. Death rate: 32 in 1900, 26 in 1920, 18 in 1940, 12 in 1960, 9 in 1980, 7 in 2000, 7 in 2020." font-family="sans-serif" font-size="12"><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><text x="240" y="22" text-anchor="middle" font-size="14" fill="#1f2937">Country Z: birth and death rates, 1900–2020</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="216" x2="430" y2="216"/><line x1="60" y1="172" x2="430" y2="172"/><line x1="60" y1="128" x2="430" y2="128"/><line x1="60" y1="84" x2="430" y2="84"/><line x1="60" y1="40" x2="430" y2="40"/></g><line x1="60" y1="260" x2="430" y2="260" stroke="#334155" stroke-width="1.5"/><line x1="60" y1="260" x2="60" y2="36" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937" text-anchor="end"><text x="54" y="264">0</text><text x="54" y="220">10</text><text x="54" y="176">20</text><text x="54" y="132">30</text><text x="54" y="88">40</text><text x="54" y="44">50</text></g><g fill="#1f2937" text-anchor="middle"><text x="60" y="277">1900</text><text x="120" y="277">1920</text><text x="180" y="277">1940</text><text x="240" y="277">1960</text><text x="300" y="277">1980</text><text x="360" y="277">2000</text><text x="420" y="277">2020</text></g><text x="245" y="295" text-anchor="middle" fill="#1f2937">Year</text><text x="16" y="150" transform="rotate(-90 16 150)" text-anchor="middle" fill="#1f2937">Rate per 1000 per year</text><polyline points="60,57.6 120,62 180,66.4 240,97.2 300,136.8 360,172 420,198.4" fill="none" stroke="#1f2937" stroke-width="2.5"/><polyline points="60,119.2 120,145.6 180,180.8 240,207.2 300,220.4 360,229.2 420,229.2" fill="none" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="7 4"/><g fill="#1f2937"><circle cx="60" cy="57.6" r="3"/><circle cx="120" cy="62" r="3"/><circle cx="180" cy="66.4" r="3"/><circle cx="240" cy="97.2" r="3"/><circle cx="300" cy="136.8" r="3"/><circle cx="360" cy="172" r="3"/><circle cx="420" cy="198.4" r="3"/></g><g fill="#b91c1c"><circle cx="60" cy="119.2" r="3"/><circle cx="120" cy="145.6" r="3"/><circle cx="180" cy="180.8" r="3"/><circle cx="240" cy="207.2" r="3"/><circle cx="300" cy="220.4" r="3"/><circle cx="360" cy="229.2" r="3"/><circle cx="420" cy="229.2" r="3"/></g><g fill="#1f2937" text-anchor="middle" font-size="11"><text x="66" y="50">46</text><text x="120" y="55">45</text><text x="180" y="59">44</text><text x="244" y="90">37</text><text x="304" y="130">28</text><text x="364" y="165">20</text><text x="420" y="191">14</text></g><g fill="#b91c1c" text-anchor="middle" font-size="11"><text x="70" y="139">32</text><text x="120" y="160">26</text><text x="180" y="195">18</text><text x="240" y="222">12</text><text x="300" y="235">9</text><text x="360" y="244">7</text><text x="420" y="244">7</text></g><g font-size="11"><line x1="300" y1="56" x2="325" y2="56" stroke="#1f2937" stroke-width="2.5"/><text x="330" y="60" fill="#1f2937">Birth rate</text><line x1="300" y1="74" x2="325" y2="74" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="7 4"/><text x="330" y="78" fill="#1f2937">Death rate</text></g></svg>`;

/** World population estimates and UN WPP 2024 medium projection (rounded). x = 60 + 2.5 × (year − 1950); y = 260 − 18 × billions. */
const PROJECTION = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of world population. Estimates (solid line): about 2.5 billion in 1950, 6 billion in 1999 and 8 billion in 2022. UN World Population Prospects 2024 medium projection (dashed line): about 9.7 billion in 2050, a peak of about 10.3 billion in the mid-2080s, then about 10.2 billion in 2100." font-family="sans-serif" font-size="12"><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><text x="245" y="22" text-anchor="middle" font-size="14" fill="#1f2937">World population: estimates and UN projection</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="224" x2="440" y2="224"/><line x1="60" y1="188" x2="440" y2="188"/><line x1="60" y1="152" x2="440" y2="152"/><line x1="60" y1="116" x2="440" y2="116"/><line x1="60" y1="80" x2="440" y2="80"/><line x1="60" y1="44" x2="440" y2="44"/></g><line x1="60" y1="260" x2="440" y2="260" stroke="#334155" stroke-width="1.5"/><line x1="60" y1="260" x2="60" y2="40" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937" text-anchor="end"><text x="54" y="264">0</text><text x="54" y="228">2</text><text x="54" y="192">4</text><text x="54" y="156">6</text><text x="54" y="120">8</text><text x="54" y="84">10</text><text x="54" y="48">12</text></g><g fill="#1f2937" text-anchor="middle"><text x="60" y="277">1950</text><text x="185" y="277">2000</text><text x="310" y="277">2050</text><text x="435" y="277">2100</text></g><g stroke="#334155"><line x1="185" y1="260" x2="185" y2="265"/><line x1="310" y1="260" x2="310" y2="265"/><line x1="435" y1="260" x2="435" y2="265"/></g><text x="250" y="294" text-anchor="middle" fill="#1f2937">Year</text><text x="16" y="150" transform="rotate(-90 16 150)" text-anchor="middle" fill="#1f2937">Population (billions)</text><polyline points="60,215 182.5,152 240,116" fill="none" stroke="#1f2937" stroke-width="2.5"/><polyline points="240,116 310,85.4 397.5,74.6 435,76.4" fill="none" stroke="#1f2937" stroke-width="2.5" stroke-dasharray="7 4"/><g fill="#c7d2fe" stroke="#1f2937"><circle cx="60" cy="215" r="3.5"/><circle cx="182.5" cy="152" r="3.5"/><circle cx="240" cy="116" r="3.5"/><circle cx="310" cy="85.4" r="3.5"/><circle cx="397.5" cy="74.6" r="3.5"/><circle cx="435" cy="76.4" r="3.5"/></g><g fill="#1f2937" font-size="11"><text x="68" y="232">2.5 bn (1950)</text><text x="190" y="168">6 bn (1999)</text><text x="247" y="132">8 bn (2022)</text><text x="303" y="78" text-anchor="end">9.7 bn (2050)</text><text x="455" y="62" text-anchor="end">10.3 bn peak (mid-2080s)</text><text x="455" y="94" text-anchor="end">10.2 bn (2100)</text></g><g font-size="11"><line x1="75" y1="52" x2="100" y2="52" stroke="#1f2937" stroke-width="2.5"/><text x="105" y="56" fill="#1f2937">Estimate</text><line x1="75" y1="68" x2="100" y2="68" stroke="#1f2937" stroke-width="2.5" stroke-dasharray="7 4"/><text x="105" y="72" fill="#1f2937">UN projection (medium)</text></g></svg>`;

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1
  // =========================================================================
  {
    id: "population-growth-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "population-growth-m1-q01",
        question: "According to the UN, on 15 November of which year did the world's population reach **8 billion**?",
        options: ["2022", "2011", "1999", "2030"],
        answerIndex: 0,
        explanation:
          "The UN marked 15 November 2022 as the day the world reached 8 billion people. 2011 is a tempting slip — that was the **7 billion** milestone, only 11 years earlier. 1999 was 6 billion, and 2030 is in the future.",
        difficulty: "warmup",
        guideRef: "growth-over-time",
        hints: ["Each recent billion has taken roughly 11–12 years. 7 billion was reached in 2011 — add about 11 years."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q02",
        question: "How is the **birth rate** of a country usually measured?",
        options: [
          "The average number of children each woman has in her lifetime",
          "The number of live births per 1000 people per year",
          "The number of live births per 100 people per year",
          "The number of babies who die before their first birthday per 1000 live births",
        ],
        answerIndex: 1,
        explanation:
          "Birth rate (the crude birth rate) = live births **per 1000 people per year**. The 'average number of children per woman' is the **total fertility rate**, a different measure. Deaths of babies under one per 1000 live births is the **infant mortality rate**.",
        difficulty: "warmup",
        guideRef: "birth-death-rates",
        hints: ["Geographers measure birth and death rates 'per thousand' (‰), not per hundred."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q03",
        question: "In which stage of the Demographic Transition Model does the **death rate fall rapidly** while the **birth rate stays high**?",
        options: ["Stage 1", "Stage 4", "Stage 2", "Stage 3"],
        answerIndex: 2,
        explanation:
          "In **stage 2** (early expanding) better food, clean water and medicine make the death rate fall fast, but the birth rate stays high — so the population grows rapidly. In stage 3 it is the **birth rate** that starts to fall; in stage 1 both rates are high.",
        difficulty: "warmup",
        guideRef: "demographic-transition",
        hints: ["Which line drops first on the DTM graph — births or deaths?"],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q04",
        question: "What does the UN's **World Population Prospects 2024** project for the world's population?",
        options: [
          "A peak of about 8.5 billion in the 2030s",
          "About 15 billion by 2100, and still rising",
          "A peak of about 12 billion in the 2050s",
          "A peak of about 10.3 billion in the mid-2080s, then a slight fall",
        ],
        answerIndex: 3,
        explanation:
          "UN WPP 2024 (medium projection) has world population peaking at about **10.3 billion in the mid-2080s**, then easing to about 10.2 billion by 2100. The idea that population will keep rising for ever (15 billion and climbing) is a common misconception — fertility is falling in most countries.",
        difficulty: "warmup",
        guideRef: "future-population",
        hints: ["The UN expects growth to slow and stop in the second half of this century."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q05",
        question:
          "A country has a birth rate of **36 per 1000** and a death rate of **9 per 1000**. What is its rate of natural increase?",
        options: ["27%", "2.7%", "4.5%", "0.27%"],
        answerIndex: 1,
        explanation:
          "Rate of natural increase (%) = (BR − DR) ÷ 10 = (36 − 9) ÷ 10 = 27 ÷ 10 = **2.7%**. 27% forgets that the rates are per 1000, not per 100 — you must divide by 10 to turn ‰ into %. 4.5% comes from adding the two rates instead of subtracting.",
        difficulty: "core",
        guideRef: "birth-death-rates",
        hints: [
          "Natural increase = births minus deaths.",
          "36 − 9 = 27 per 1000. How do you turn 'per 1000' into 'per 100' (a percentage)?",
          "Divide by 10.",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q06",
        question: "Study the bar chart. Which statement is best supported by it?",
        diagram: BILLION_BARS,
        options: [
          "The time needed to add each extra billion fell sharply, from 123 years to about 11–14 years",
          "It takes longer to add each billion as the population gets bigger",
          "The world's population grew by the same amount in every century",
          "The world's population is now falling",
        ],
        answerIndex: 0,
        explanation:
          "The first bar (1 → 2 billion) is 123 years; from 3 → 4 billion onwards each bar is only 11–14 years. So each extra billion has arrived far faster. 'It takes longer as the population gets bigger' reads the chart backwards — the bars get **shorter**. Nothing on the chart shows a fall in population: every bar is another billion **added**.",
        difficulty: "core",
        guideRef: "growth-over-time",
        hints: [
          "Read the axis title first: what does a tall bar mean?",
          "Compare the first bar with the last three bars.",
        ],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q07",
        question:
          "Study the DTM graph. Why does the **total population** line rise most steeply around the end of stage 2 and the start of stage 3?",
        diagram: DTM_GRAPH,
        options: [
          "The birth rate reaches its highest point there",
          "The death rate starts to rise there",
          "Immigration is highest in these stages",
          "The gap between the birth rate and the death rate is widest there",
        ],
        answerIndex: 3,
        explanation:
          "Population grows by births minus deaths. At the end of stage 2 the death rate has fallen to about 16 per 1000 while the birth rate is still about 39 — the **widest gap** — so natural increase is greatest. The birth rate is no higher than in stage 1, so 'the birth rate peaks' is wrong; and the DTM ignores migration altogether.",
        difficulty: "core",
        guideRef: "demographic-transition",
        hints: [
          "Population changes by births − deaths. Where is that difference biggest?",
          "Measure the vertical gap between the solid and dashed lines at each stage boundary.",
        ],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q08",
        question:
          "In Japan the death rate is now **higher** than the birth rate. Ignoring migration, what is happening to Japan's population?",
        options: [
          "Natural increase — the population is rising slowly",
          "Nothing — the population stays exactly the same",
          "Natural decrease — the population is falling",
          "Rapid growth — because people live longer",
        ],
        answerIndex: 2,
        explanation:
          "When deaths outnumber births there is **natural decrease**, so the population falls (Japan's population has been shrinking since around 2010). 'Rapid growth because people live longer' is a misconception: long lives raise the number of elderly people, but with so few births the total still falls.",
        difficulty: "core",
        guideRef: "birth-death-rates",
        hints: ["Births add people; deaths remove them.", "If more are removed than added each year, which way does the total go?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q09",
        question:
          "Which change helped death rates fall in the 1800s and early 1900s, so that world population growth sped up?",
        options: [
          "Families chose to have more children",
          "Contraception became widely available",
          "Clean piped water and sewers cut deaths from diseases such as cholera",
          "Millions of people migrated from Europe to the Americas",
        ],
        answerIndex: 2,
        explanation:
          "Clean water and proper sewers stopped water-borne diseases like cholera and typhoid, so the **death rate** fell. Migration from Europe to the Americas moved people around but did not change the **world** total. Contraception lowers the birth rate, not the death rate.",
        difficulty: "core",
        guideRef: "growth-over-time",
        hints: [
          "The question is about the **death** rate. Cross out anything that is about births.",
          "Does moving people between continents change the world total?",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q10",
        question:
          "Study the data for Country W.\n\n| Year | Birth rate (per 1000) | Death rate (per 1000) |\n|---|---|---|\n| 1990 | 36 | 10 |\n| 2005 | 29 | 8 |\n| 2020 | 22 | 7 |\n\nWhich DTM stage best fits Country W over this period?",
        options: ["Stage 1", "Stage 2", "Stage 4", "Stage 3"],
        answerIndex: 3,
        explanation:
          "The death rate is already low and only edging down (10 → 7), while the birth rate is falling steadily (36 → 22). A birth rate that is falling fast, with a low death rate, is **stage 3** — the population is still growing, but more slowly. It is not stage 2, because in stage 2 the **death rate** falls fast while the birth rate stays high. It is not yet stage 4: a birth rate of 22 is still well above the death rate, so the population is growing by about 1.5% a year.",
        difficulty: "core",
        guideRef: "demographic-transition",
        hints: [
          "Look at the **trend** in each rate, not just the 2020 numbers.",
          "Which rate is changing fastest — births or deaths?",
          "Stage 3 is when the birth rate falls quickly towards the (already low) death rate.",
        ],
        strategy: "TEA (Trend, Evidence, Anomaly)",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q11",
        question: "According to UN projections, which region is expected to provide **much of the world's population growth** between now and 2050?",
        options: ["Sub-Saharan Africa", "Europe", "East Asia", "North America"],
        answerIndex: 0,
        explanation:
          "Sub-Saharan Africa still has high fertility and a very young population, so the UN expects much of the growth to 2050 to happen there. Europe and East Asia (including China, whose population fell in 2022) have fertility well below replacement level and are expected to shrink.",
        difficulty: "core",
        guideRef: "future-population",
        hints: ["Which region has the highest fertility rates today?", "Think of Niger and Nigeria versus Japan, China and Italy."],
        strategy: "Think at different scales",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q12",
        question: "What does the **infant mortality rate** measure?",
        options: [
          "Deaths of children under five per 1000 people",
          "Deaths of babies under one year old per 1000 live births",
          "Deaths of babies under one year old per 1000 people in the population",
          "The number of babies born per 1000 women",
        ],
        answerIndex: 1,
        explanation:
          "Infant mortality = deaths of babies **under one year old per 1000 live births** in a year. The version 'per 1000 people in the population' uses the wrong comparison — it must be per 1000 **live births**. Deaths under five is a separate measure (child or under-5 mortality).",
        difficulty: "core",
        guideRef: "birth-death-rates",
        hints: ["'Infant' means a baby in its first year.", "The rate compares baby deaths with the number of babies born, not with the whole population."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q13",
        question:
          "The **rule of 70** says: doubling time (years) ≈ 70 ÷ growth rate (%). A country's population is growing at **2.8% a year**. About how long will it take to double?",
        options: ["196 years", "28 years", "35 years", "25 years"],
        answerIndex: 3,
        explanation:
          "70 ÷ 2.8 = **25 years**. 196 comes from multiplying (70 × 2.8) instead of dividing. 35 years is the doubling time for 2% growth (70 ÷ 2), so it uses the wrong rate.",
        difficulty: "challenge",
        guideRef: "growth-over-time",
        hints: [
          "Faster growth should mean a **shorter** doubling time — so you divide by the rate.",
          "70 ÷ 2.8: try 70 ÷ 28 and then multiply by 10.",
          "28 × 2.5 = 70.",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q14",
        question: "Which is the **strongest** criticism of using the DTM to predict what will happen to a country such as Niger?",
        options: [
          "The DTM does not show birth rates",
          "The DTM is based on the past experience of European countries such as the UK, and today's lower-income countries may not follow the same path or timescale",
          "The DTM has only ever been used to study Japan",
          "The DTM includes migration, which makes it too complicated",
        ],
        answerIndex: 1,
        explanation:
          "The DTM was built from the history of industrialising countries like the UK, where the transition took well over a century. Today's lower-income countries have different cultures, economies and access to imported medicine, so they may move faster, slower or get 'stuck'. The claim that the DTM includes migration is false — it **ignores** migration, which is itself a limitation.",
        difficulty: "challenge",
        guideRef: "demographic-transition",
        hints: [
          "Which countries' history was the model drawn from?",
          "Two options are simply false about the model — check what the DTM actually shows.",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m1-q15",
        question: "Why does the UN give future world population as a **range** of possible figures, as well as a single 'medium' projection?",
        options: [
          "Future fertility is uncertain, and small differences in births per woman add up to big differences over decades",
          "Nobody has any idea how many people are alive today",
          "The UN only counts people who live in cities",
          "Death rates will definitely rise sharply after 2050",
        ],
        answerIndex: 0,
        explanation:
          "Projections depend on **assumptions** about future births, deaths and migration. A difference of just half a child per woman, repeated over several generations, changes the 2100 total by billions — so the UN shows a range. Today's population is estimated fairly well from censuses and surveys, so 'nobody knows today's population' is an exaggeration.",
        difficulty: "challenge",
        guideRef: "future-population",
        hints: [
          "A projection is not a count — what does it have to assume?",
          "Which assumption has the biggest effect over 80 years: births, deaths or migration?",
        ],
        strategy: "Weigh both sides then judge",
      },
    ],
  },
  // =========================================================================
  // MCQ PAPER 2
  // =========================================================================
  {
    id: "population-growth-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "population-growth-m2-q01",
        question:
          "A graph of world population over the last 1000 years is almost flat for centuries and then shoots steeply upwards. What is this shape called?",
        options: ["An S-curve", "A bell curve", "A J-curve", "A U-curve"],
        answerIndex: 2,
        explanation:
          "A long, nearly flat line followed by a very steep rise looks like the letter **J**. An S-curve would level off again at the top — world population has not yet done that, although the UN expects growth to level off later this century.",
        difficulty: "warmup",
        guideRef: "growth-over-time",
        hints: ["Picture a capital letter that is flat at the bottom and then goes straight up."],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q02",
        question: "What is the **total fertility rate (TFR)**?",
        options: [
          "The number of live births per 1000 people per year",
          "The number of women aged 15–49 in a country",
          "The percentage of babies who survive to age five",
          "The average number of children a woman is expected to have in her lifetime",
        ],
        answerIndex: 3,
        explanation:
          "TFR is the **average number of children per woman** over her lifetime (Singapore's resident TFR was about 0.97 in 2023). Live births per 1000 people per year is the **birth rate** — a different measure that also depends on how many young adults a country has.",
        difficulty: "warmup",
        guideRef: "birth-death-rates",
        hints: ["TFR is measured 'per woman', not 'per 1000 people'."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q03",
        question: "In which stage of the DTM are **both** birth and death rates low, so the population is fairly stable?",
        options: ["Stage 4", "Stage 1", "Stage 2", "Stage 3"],
        answerIndex: 0,
        explanation:
          "In **stage 4** both rates are low (around 10 per 1000), so population growth is slow or stable — the UK is the usual example. Stage 1 is also fairly stable, but because **both rates are high**, not low.",
        difficulty: "warmup",
        guideRef: "demographic-transition",
        hints: ["Two stages have a fairly stable population. In which one are both rates **low**?"],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q04",
        question: "In 2023, according to UN estimates, which country overtook China to become the **most populous** country in the world?",
        options: ["The United States", "India", "Nigeria", "Indonesia"],
        answerIndex: 1,
        explanation:
          "UN estimates show **India** overtaking China in 2023. China's population began to fall in 2022 (for the first time in about six decades), while India's is still growing. The USA is third, far behind both.",
        difficulty: "warmup",
        guideRef: "future-population",
        hints: ["Only two countries have more than 1 billion people. China's population has started to fall."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q05",
        question:
          "Study the table.\n\n| Country | Birth rate (per 1000) | Death rate (per 1000) |\n|---|---|---|\n| Country A | 38 | 12 |\n| Country B | 42 | 18 |\n| Country C | 28 | 5 |\n| Country D | 46 | 21 |\n\nWhich country has the **highest rate of natural increase**?",
        options: ["Country A", "Country B", "Country C", "Country D"],
        answerIndex: 0,
        explanation:
          "Work out BR − DR for each: A = 26, B = 24, C = 23, D = 25 per 1000, i.e. 2.6%, 2.4%, 2.3% and 2.5%. **Country A** is highest. Country D is the trap: it has the highest **birth rate** (46), but its high death rate (21) cancels much of that out.",
        difficulty: "core",
        guideRef: "birth-death-rates",
        hints: [
          "Don't just pick the biggest birth rate — growth depends on births **minus** deaths.",
          "Subtract DR from BR for all four countries.",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q06",
        question:
          "World population reached about 1 billion in 1804, 2 billion in 1927 and 3 billion in 1960. How many years did it take to **triple** from 1 billion to 3 billion?",
        options: ["33 years", "123 years", "156 years", "56 years"],
        answerIndex: 2,
        explanation:
          "Tripling from 1 billion means reaching 3 billion: 1960 − 1804 = **156 years**. 123 years is only the first step (1 → 2 billion) and 33 years only the second (2 → 3 billion); you need both steps together (123 + 33 = 156). Notice how much faster the second billion was than the first.",
        difficulty: "core",
        guideRef: "growth-over-time",
        hints: ["Tripling 1 billion means reaching 3 billion — so which two years do you need?", "Subtract the year for 1 billion from the year for 3 billion."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q07",
        question: "Study the DTM graph. In which stage does the **birth rate fall below the death rate**?",
        diagram: DTM_GRAPH,
        options: ["Stage 4", "Stage 5", "Stage 1", "Stage 3"],
        answerIndex: 1,
        explanation:
          "On the graph the solid birth-rate line crosses below the dashed death-rate line in **stage 5** (birth rate about 8, death rate about 11 per 1000), so the total population starts to fall. In stage 4 both rates are low but the birth rate (about 12–13) is still slightly above the death rate (about 10).",
        difficulty: "core",
        guideRef: "demographic-transition",
        hints: ["Use the key: which line is births and which is deaths?", "Find where the two lines cross."],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q08",
        question: "A town of **50,000** people had **600** live births last year. What was its birth rate?",
        options: ["1.2 per 1000", "120 per 1000", "83 per 1000", "12 per 1000"],
        answerIndex: 3,
        explanation:
          "Birth rate = births ÷ population × 1000 = 600 ÷ 50,000 × 1000 = **12 per 1000**. 1.2 is the figure per 100 (a percentage), not per 1000. 83 comes from dividing the population by the births — the wrong way round.",
        difficulty: "core",
        guideRef: "birth-death-rates",
        hints: ["Births go on top: births ÷ population.", "Then multiply by 1000 to get 'per 1000'.", "600 ÷ 50 = 12, because 50,000 ÷ 1000 = 50."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q09",
        question: "Why did world population grow only **very slowly** for most of human history before about 1800?",
        options: [
          "Birth rates were very low because families chose to have few children",
          "No one migrated between countries",
          "People lived much longer but had fewer children",
          "Death rates were high because of disease, famine and poor hygiene, cancelling out high birth rates",
        ],
        answerIndex: 3,
        explanation:
          "Before about 1800 birth rates were **high**, but so were death rates: infectious disease, famine, dirty water and war killed many people, especially babies and children. Births and deaths nearly cancelled out. The idea that people chose small families gets it backwards — birth rates were high.",
        difficulty: "core",
        guideRef: "growth-over-time",
        hints: ["Slow growth means births and deaths were nearly equal.", "Were they both low or both high?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q10",
        question:
          "Study the graph. According to the UN projection, by about how much does world population change **between 2050 and 2100**?",
        diagram: PROJECTION,
        options: ["It rises by about 0.5 billion", "It rises by about 2.2 billion", "It falls by about 0.1 billion", "It rises by about 10.2 billion"],
        answerIndex: 0,
        explanation:
          "2100 value − 2050 value = 10.2 − 9.7 = a rise of **0.5 billion**. The population climbs to the peak (10.3 billion) and then dips a little, but it still ends higher than in 2050. 'Falls by 0.1 billion' only measures the dip after the peak (10.3 → 10.2). 10.2 billion is the 2100 **total**, not the change, and 2.2 billion is the change from 2022 (8 billion) to 2100.",
        difficulty: "core",
        guideRef: "future-population",
        hints: ["Read off the 2050 value and the 2100 value.", "A change is a difference between two values, not a total.", "Ignore what happens in between — compare only the start and end of the period."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q11",
        question: "Which country is the best example of **stage 5** of the DTM?",
        options: ["Niger", "Bangladesh", "Japan", "The United Kingdom"],
        answerIndex: 2,
        explanation:
          "**Japan** has a death rate higher than its birth rate, and its population has been falling — stage 5. The UK is usually placed in stage 4: both rates are low (around 10 per 1000) and close together, but its death rate has not been clearly and steadily above its birth rate the way Japan's has. Niger (very high birth rate) fits stage 2, and Bangladesh (falling birth rate) stage 3.",
        difficulty: "core",
        guideRef: "demographic-transition",
        hints: ["Stage 5 = the population is falling because deaths exceed births.", "Which of these countries is famous for an ageing, shrinking population?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q12",
        question: "Which change would most **directly** lower a country's infant mortality rate?",
        options: [
          "A rise in the birth rate",
          "More trained midwives and clinics for safe childbirth",
          "A fall in the number of elderly people",
          "A higher retirement age",
        ],
        answerIndex: 1,
        explanation:
          "Infant mortality is about babies dying in their first year, so **safe childbirth care** (midwives, clinics, vaccinations, clean water) cuts it directly. A rise in the birth rate does not lower a **rate** of baby deaths per 1000 live births; changes among elderly people do not affect babies at all.",
        difficulty: "core",
        guideRef: "birth-death-rates",
        hints: ["Who does the infant mortality rate measure?", "Which option actually helps newborn babies survive?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q13",
        question:
          "Japan's death rate (about 12–13 per 1000 in recent years) is much **higher** than Bangladesh's (only about 5–6 per 1000), even though people in Japan live about ten years longer on average. Why?",
        options: [
          "Japan has a much larger share of elderly people, and older people are more likely to die in any one year",
          "Healthcare in Bangladesh is better than healthcare in Japan",
          "Death rates are calculated per 1000 women, not per 1000 people",
          "Japan has a higher infant mortality rate than Bangladesh",
        ],
        answerIndex: 0,
        explanation:
          "The death rate counts deaths per 1000 **people**, so it depends on the **age structure**. Almost 3 in 10 Japanese people are 65 or over, so many deaths happen each year even though each person lives a long life. Bangladesh's population is much younger, so there are fewer deaths per 1000 people even though life expectancy is lower. Japan's infant mortality is actually among the **lowest** in the world.",
        difficulty: "challenge",
        guideRef: "birth-death-rates",
        hints: [
          "Which age group is most likely to die in a given year?",
          "Compare the age structure of an ageing country with a youthful one.",
          "A crude death rate is affected by how old the population is, not just by healthcare.",
        ],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q14",
        question: "Study the graph of Country Z. During which period was Country Z **most clearly in stage 2** of the DTM?",
        diagram: COUNTRY_Z,
        options: ["1960–2020", "1980–2000", "2000–2020", "1900–1940"],
        answerIndex: 3,
        explanation:
          "From 1900 to 1940 the death rate fell fast (32 → 18 per 1000) while the birth rate stayed high (46 → 44) — the signature of **stage 2**. From 1960 onwards the birth rate falls steeply (37 → 14), which is stage 3 behaviour, so 1960–2020 and 1980–2000 do not fit.",
        difficulty: "challenge",
        guideRef: "demographic-transition",
        hints: [
          "Stage 2: which rate falls, and which stays high?",
          "Check each period — is the birth rate steady or falling?",
          "The birth rate only starts to drop sharply after 1940.",
        ],
        strategy: "TEA (Trend, Evidence, Anomaly)",
      },
      {
        kind: "mcq",
        id: "population-growth-m2-q15",
        question:
          "Imagine a youthful country's TFR fell to replacement level (about 2.1) overnight. Its population would **still keep growing for decades**. Why?",
        options: [
          "Replacement level means the population doubles every generation",
          "Death rates would immediately rise",
          "A large share of its people are children who have not yet had families, so the number of births stays high for years",
          "TFR has no effect on population size",
        ],
        answerIndex: 2,
        explanation:
          "This is **population momentum**. A youthful country has huge numbers of children who will soon become parents. Even at about two children each, so many parents means many births — and few deaths, because the population is young. Replacement level means each generation roughly **replaces** itself, not doubles.",
        difficulty: "challenge",
        guideRef: "future-population",
        hints: [
          "Think about how many future parents are already alive.",
          "Births = (number of women of child-bearing age) × (children per woman).",
        ],
        strategy: "Cause → process → effect",
      },
    ],
  },
  // =========================================================================
  // MCQ PAPER 3
  // =========================================================================
  {
    id: "population-growth-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "population-growth-m3-q01",
        question: "In about which year did the world's population first reach **1 billion**?",
        options: ["1927", "1804", "1650", "1900"],
        answerIndex: 1,
        explanation:
          "The world reached about 1 billion people around **1804**. 1927 is when it reached **2 billion** — it took about 123 years to add that second billion.",
        difficulty: "warmup",
        guideRef: "growth-over-time",
        hints: ["It was early in the Industrial Revolution, at the start of the 19th century."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q02",
        question: "When does **natural increase** happen?",
        options: [
          "When the birth rate is higher than the death rate",
          "When the death rate is higher than the birth rate",
          "When more people move into a country than leave it",
          "When life expectancy falls",
        ],
        answerIndex: 0,
        explanation:
          "Natural increase = more **births** than **deaths**. More people moving in than leaving is **net migration**, which is a different way a population can grow — the word 'natural' tells you migration is left out.",
        difficulty: "warmup",
        guideRef: "birth-death-rates",
        hints: ["'Natural' change only counts births and deaths."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q03",
        question: "What does the **Demographic Transition Model** show?",
        options: [
          "Only the total population of one country",
          "How many people live in rural and urban areas",
          "How many people migrate in and out of a country",
          "How birth rates, death rates and total population change over time as a country develops",
        ],
        answerIndex: 3,
        explanation:
          "The DTM tracks **birth rate, death rate and total population** through five stages as a country develops. It does **not** include migration — one of its main limitations.",
        difficulty: "warmup",
        guideRef: "demographic-transition",
        hints: ["Picture the DTM graph: how many lines does it have, and what are they?"],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q04",
        question: "Which of these is projected by the UN to have a **shrinking** population in the coming decades?",
        options: ["Sub-Saharan Africa", "Nigeria", "Europe", "Niger"],
        answerIndex: 2,
        explanation:
          "**Europe** has fertility well below replacement level and an ageing population, so the UN projects its population to fall. Sub-Saharan Africa, including Nigeria and Niger, has high fertility and a young population, so it is projected to keep growing strongly.",
        difficulty: "warmup",
        guideRef: "future-population",
        hints: ["Which of these has an ageing population with few births per woman?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q05",
        question: "A country has a birth rate of **8 per 1000** and a death rate of **12 per 1000**. What is its rate of natural increase?",
        options: ["0.4%", "4%", "−4%", "−0.4%"],
        answerIndex: 3,
        explanation:
          "(BR − DR) ÷ 10 = (8 − 12) ÷ 10 = −4 ÷ 10 = **−0.4%**. The minus sign matters: deaths exceed births, so this is natural **decrease**. 0.4% has the right size but the wrong sign; −4% forgets to divide by 10.",
        difficulty: "core",
        guideRef: "birth-death-rates",
        hints: ["Always do births minus deaths — the order matters.", "Is 8 − 12 positive or negative?", "Then divide by 10."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q06",
        question: "Study the graph. What does it show about world population growth since 1800?",
        diagram: JCURVE,
        options: [
          "Population grew at a steady rate throughout",
          "Growth was slow at first, then much faster, especially after about 1950",
          "Population fell between 1900 and 1950",
          "Growth was fastest before 1900 and has slowed since",
        ],
        answerIndex: 1,
        explanation:
          "The line is almost flat from 1804 (1 billion) to 1927 (2 billion), then gets steeper and steeper: from 1974 to 2022 it added about a billion every 11–13 years. That is a **J-curve**. 'Growth was fastest before 1900' reads it backwards — the steepest part is on the right.",
        difficulty: "core",
        guideRef: "growth-over-time",
        hints: ["Where is the line flattest, and where is it steepest?", "A steeper slope means faster growth."],
        strategy: "TEA (Trend, Evidence, Anomaly)",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q07",
        question: "Why does the **birth rate** fall in stage 3 of the DTM?",
        options: [
          "The death rate rises sharply, so families have fewer children",
          "Every country in stage 3 brings in a one-child policy",
          "More girls stay in education, contraception becomes available and children are less needed as farm workers",
          "Fewer babies survive, so parents give up having children",
        ],
        answerIndex: 2,
        explanation:
          "In stage 3, education for girls and women, access to contraception, moving to cities (where children cost more and are not needed on farms) and lower infant mortality all lead families to have fewer children. It is not that 'fewer babies survive' — the opposite: because **more** babies survive, parents no longer need extra children as insurance. Very few countries have used a one-child policy.",
        difficulty: "core",
        guideRef: "demographic-transition",
        hints: [
          "In stage 3 the death rate is still falling, not rising.",
          "Think about education, contraception and the cost of children in towns.",
        ],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q08",
        question:
          "A country has **40 million** people and a rate of natural increase of **1.5%**. Ignoring migration, about how many people are added by natural increase in one year?",
        options: ["600,000", "60,000", "6 million", "1.5 million"],
        answerIndex: 0,
        explanation:
          "1.5% of 40,000,000 = 0.015 × 40,000,000 = **600,000**. 6 million treats 1.5% as 15%; 60,000 treats it as 0.15%. 1.5 million mixes up the percentage with a number of people.",
        difficulty: "core",
        guideRef: "birth-death-rates",
        hints: ["1% of 40 million is 400,000.", "1.5% is one and a half times that."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q09",
        question: "What is the **main** reason the UN projects world population growth to slow and then stop later this century?",
        options: [
          "Fertility rates are falling in most countries as they develop",
          "Death rates are expected to rise sharply worldwide",
          "The world will run out of food in 2050",
          "Migration between countries will reduce the world's population",
        ],
        answerIndex: 0,
        explanation:
          "Projected slowdown comes from **falling fertility**: the world average is now only a little above 2 children per woman, and more and more countries are below replacement level. Migration cannot change the **world** total — it only moves people between countries. Death rates are expected to keep falling, not rise.",
        difficulty: "core",
        guideRef: "future-population",
        hints: ["Can migration change the number of people on Earth?", "Which is falling almost everywhere: births per woman or life expectancy?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q10",
        question:
          "Study the table.\n\n| Country | Birth rate (per 1000) | Death rate (per 1000) |\n|---|---|---|\n| Country P | 45 | 17 |\n| Country Q | 24 | 7 |\n| Country R | 11 | 10 |\n| Country S | 7 | 12 |\n\nWhich country is most likely to be in **stage 3** of the DTM?",
        options: ["Country P", "Country R", "Country Q", "Country S"],
        answerIndex: 2,
        explanation:
          "Stage 3: the death rate is already low and the birth rate is falling but still moderate — **Country Q** (24 and 7). Country P (very high birth rate, falling death rate) fits stage 2; Country R (both low and nearly equal) stage 4; Country S (deaths exceed births) stage 5.",
        difficulty: "core",
        guideRef: "demographic-transition",
        hints: ["Match each country to a stage, then pick the one left for stage 3.", "Stage 3 has a low death rate and a birth rate that is falling but not yet low."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q11",
        question:
          "Which development in the 1960s, using high-yield crop varieties, fertilisers and irrigation, greatly increased food supplies and helped support rapid population growth?",
        options: ["The Industrial Revolution", "The Green Revolution", "The British Agricultural Revolution of the 1700s", "The One-Child Policy"],
        answerIndex: 1,
        explanation:
          "The **Green Revolution** (from the 1960s) spread high-yield wheat and rice, fertilisers and irrigation, especially in Asia, and food production rose sharply. The British Agricultural Revolution was earlier (1700s) and used methods like crop rotation and selective breeding.",
        difficulty: "core",
        guideRef: "growth-over-time",
        hints: ["Check the date in the question — 1960s.", "The name links to plants and farming."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q12",
        question: "What is meant by **replacement-level fertility**?",
        options: [
          "A TFR of exactly 1.0 — one child per adult",
          "A birth rate of 21 per 1000",
          "When falling births are replaced by immigration",
          "A TFR of about 2.1, enough children for each generation to replace its parents over time",
        ],
        answerIndex: 3,
        explanation:
          "Replacement level is a TFR of about **2.1**: two children replace the two parents, and the extra 0.1 covers children who die young and the slightly higher number of boys born. A TFR of 1.0 would only replace **half** of each generation (each child has two parents).",
        difficulty: "core",
        guideRef: "birth-death-rates",
        hints: ["Each child has two parents. How many children are needed to replace both?", "Why is it a bit more than 2, not exactly 2?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q13",
        question: "Study the bar chart. Which conclusion is **best** supported by the chart?",
        diagram: BILLION_BARS,
        options: [
          "World population is now growing faster in percentage terms than at any time before",
          "The next billion will take fewer than 5 years",
          "From 3 billion onwards each extra billion took a similar time (11–14 years), so roughly similar numbers of people were added each year",
          "World population growth stopped after 2011",
        ],
        answerIndex: 2,
        explanation:
          "The last five bars are all 11–14 years long, so the world has been adding roughly a billion people every 12 years or so. The chart says nothing directly about the **percentage** growth rate — and in fact that rate has fallen since the 1960s, because similar numbers are now added to a much bigger base. Predicting the next billion in under 5 years extends a trend the chart does not show: the bars have nearly levelled off.",
        difficulty: "challenge",
        guideRef: "growth-over-time",
        hints: [
          "Look carefully at the last five bars — are they getting much shorter?",
          "A chart of **years per billion** shows numbers added, not percentage growth.",
          "Adding 1 billion to 3 billion is a bigger percentage than adding 1 billion to 7 billion.",
        ],
        strategy: "Use the command word",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q14",
        question:
          "In the 1990s, HIV/AIDS caused death rates to **rise** and life expectancy to fall in several southern African countries. Which limitation of the DTM does this show?",
        options: [
          "The DTM assumes death rates keep falling, but disease, war or famine can push them back up",
          "The DTM ignores birth rates",
          "The DTM only works for island countries",
          "It proves that these countries must return to stage 1",
        ],
        answerIndex: 0,
        explanation:
          "The model assumes a one-way journey: once death rates fall, they stay low. HIV/AIDS showed that disease (like war or famine) can push death rates **up** again. A country does not 'return to stage 1' — birth rates and the rest of its development did not go back to how they were.",
        difficulty: "challenge",
        guideRef: "demographic-transition",
        hints: ["What does the DTM assume always happens to the death rate after stage 2?", "Does one rising rate move a whole country back to stage 1?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-growth-m3-q15",
        question:
          "Singapore's resident TFR was about **0.97** in 2023. If fertility stayed this low and there were **no migration**, what is the most likely long-term result for the resident population?",
        options: [
          "It would grow quickly",
          "It would age and eventually shrink",
          "It would stay the same because death rates are low",
          "Birth rates would automatically rise back to 2.1",
        ],
        answerIndex: 1,
        explanation:
          "A TFR of 0.97 is less than **half** of replacement level (about 2.1), so each generation of children is much smaller than their parents' generation. The population gets older, and once deaths overtake births it shrinks. Low death rates only delay this; they cannot stop it. Nothing makes birth rates 'automatically' bounce back — that is why Singapore offers incentives such as the Baby Bonus.",
        difficulty: "challenge",
        guideRef: "future-population",
        hints: ["Compare 0.97 with replacement level.", "If each generation is about half the size of the one before, what happens over 50–100 years?"],
        strategy: "Cause → process → effect",
      },
    ],
  },
];
