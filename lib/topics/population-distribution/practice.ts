import type { TopicPractice } from "../../types.ts";

// ---------------------------------------------------------------------------
// Resources (inline SVG)
// ---------------------------------------------------------------------------

const worldMap = `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified world map with the Equator and the Tropics as dashed lines. Densely populated areas are shaded red: eastern China, Japan, South Asia, Europe, the north-east USA, the Nile valley, West Africa, Java and south-east Brazil. Sparsely populated areas are labelled in italics: Northern Canada, Sahara, Amazon, Siberia, Himalayas, Central Australia and Antarctica."><rect x="0" y="0" width="480" height="250" fill="#ffffff"/><rect x="0" y="0" width="480" height="216" fill="#bae6fd"/><g fill="#bbf7d0" stroke="#334155" stroke-width="0.8"><polygon points="20,33 53,27 113,24 140,29 160,47 167,56 147,63 139,73 132,87 111,85 111,93 124,100 129,108 136,109 117,100 100,93 93,89 84,77 75,67 73,55 60,43 40,40 20,40"/><polygon points="173,11 213,11 213,27 180,40 167,29"/><polygon points="137,109 160,107 173,120 193,127 189,140 176,157 163,171 153,193 144,187 143,173 145,144 132,127 133,120"/><polygon points="217,92 232,72 253,71 283,79 297,104 308,105 293,140 283,157 267,167 256,143 252,115 229,115 217,101"/><polygon points="227,72 228,61 237,55 247,49 251,44 247,37 260,27 280,25 320,27 347,23 373,17 427,24 480,29 480,33 453,40 429,51 420,63 409,69 401,79 396,88 387,92 385,104 380,108 373,103 379,119 371,109 371,99 363,92 357,91 347,100 343,109 337,93 329,87 316,87 319,91 309,99 297,103 287,83 288,72 275,67 256,61 244,63 233,72"/><polygon points="392,149 392,165 397,167 413,163 424,167 435,172 440,169 444,157 444,153 435,145 429,135 421,136 413,136 403,143"/><polygon points="413,79 420,75 427,71 428,65 429,60 432,63 430,69 429,73 421,77"/><ellipse cx="237" cy="48" rx="3.5" ry="6"/><polygon points="367,113 371,115 381,124 381,128 375,124 368,117"/><polygon points="385,118 396,111 399,113 395,125 387,124"/><ellipse cx="387" cy="130" rx="7" ry="2"/><polygon points="470,166 477,171 471,176 462,182 465,176"/><polygon points="303,136 307,140 303,153 299,152 299,143"/></g><rect x="0" y="203" width="480" height="11" fill="#e0f2fe" stroke="#334155" stroke-width="0.8"/><g stroke="#334155" stroke-width="1" stroke-dasharray="4 3"><line x1="0" y1="89" x2="480" y2="89"/><line x1="0" y1="120" x2="480" y2="120"/><line x1="0" y1="151" x2="480" y2="151"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="3" y="86">Tropic of Cancer</text><text x="3" y="117">Equator</text><text x="3" y="148">Tropic of Capricorn</text></g><g fill="#dc2626" fill-opacity="0.75"><ellipse cx="390" cy="78" rx="10" ry="11"/><ellipse cx="424" cy="73" rx="4" ry="2.5"/><ellipse cx="350" cy="87" rx="10" ry="7"/><ellipse cx="255" cy="54" rx="11" ry="6"/><circle cx="238" cy="51" r="2.5"/><ellipse cx="137" cy="66" rx="6" ry="5"/><ellipse cx="282" cy="85" rx="2" ry="6"/><ellipse cx="248" cy="108" rx="5" ry="5"/><ellipse cx="387" cy="130" rx="6" ry="1.6"/><ellipse cx="176" cy="150" rx="4" ry="4"/></g><g font-size="11" font-family="sans-serif" font-style="italic" fill="#1f2937" text-anchor="middle"><text x="108" y="45">Northern Canada</text><text x="250" y="96">Sahara</text><text x="160" y="129">Amazon</text><text x="385" y="42">Siberia</text><text x="350" y="76">Himalayas</text><text x="418" y="152">Central</text><text x="418" y="163">Australia</text><text x="240" y="212">Antarctica</text></g><rect x="10" y="226" width="14" height="10" fill="#dc2626" fill-opacity="0.75"/><text x="30" y="235" font-size="11" font-family="sans-serif" fill="#1f2937">Densely populated</text><rect x="160" y="226" width="14" height="10" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><text x="180" y="235" font-size="11" font-family="sans-serif" fill="#1f2937">Sparsely populated (named areas in italics)</text></svg>`;

const continentBars = `<svg viewBox="0 0 460 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal bar chart of the approximate share of world population by region in about 2024: Asia 59%, Africa 18%, Europe 9%, Latin America and Caribbean 8%, Northern America 5%, Oceania 1%."><rect x="0" y="0" width="460" height="290" fill="#ffffff"/><text x="230" y="20" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Share of world population by region (about 2024)</text><g stroke="#cbd5e1" stroke-width="1"><line x1="200" y1="32" x2="200" y2="250"/><line x1="240" y1="32" x2="240" y2="250"/><line x1="280" y1="32" x2="280" y2="250"/><line x1="320" y1="32" x2="320" y2="250"/><line x1="360" y1="32" x2="360" y2="250"/><line x1="400" y1="32" x2="400" y2="250"/></g><g fill="#c7d2fe" stroke="#334155" stroke-width="1"><rect x="160" y="40" width="236" height="22"/><rect x="160" y="76" width="72" height="22"/><rect x="160" y="112" width="36" height="22"/><rect x="160" y="148" width="32" height="22"/><rect x="160" y="184" width="20" height="22"/><rect x="160" y="220" width="4" height="22"/></g><g font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="152" y="55">Asia</text><text x="152" y="91">Africa</text><text x="152" y="127">Europe</text><text x="152" y="157">Latin America</text><text x="152" y="169">and Caribbean</text><text x="152" y="199">Northern America</text><text x="152" y="235">Oceania</text></g><g font-size="12" font-family="sans-serif" fill="#1f2937"><text x="400" y="55">59%</text><text x="236" y="91">18%</text><text x="200" y="127">9%</text><text x="196" y="163">8%</text><text x="184" y="199">5%</text><text x="168" y="235">1%</text></g><line x1="160" y1="32" x2="160" y2="250" stroke="#1f2937" stroke-width="1.5"/><line x1="160" y1="250" x2="420" y2="250" stroke="#1f2937" stroke-width="1.5"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="160" y="264">0</text><text x="200" y="264">10</text><text x="240" y="264">20</text><text x="280" y="264">30</text><text x="320" y="264">40</text><text x="360" y="264">50</text><text x="400" y="264">60</text><text x="290" y="282">% of world population</text></g></svg>`;

const australiaDots = `<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dot map of Australia. Dots cluster around Sydney, Melbourne, Brisbane, Canberra and Adelaide in the south-east and east, and around Perth in the south-west, with a few near Hobart and Darwin. The huge interior, labelled mostly hot desert and semi-arid land, has almost no dots."><rect x="0" y="0" width="400" height="320" fill="#bae6fd"/><polygon points="34,119 30,153 43,196 43,221 68,230 111,221 162,200 179,200 213,225 238,230 255,255 289,259 310,264 340,251 349,221 366,196 370,170 366,145 344,123 306,94 302,60 285,51 276,23 268,43 268,77 255,81 225,64 228,34 187,28 170,43 162,60 136,51 106,77 94,98 60,108" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><polygon points="294,279 326,281 323,299 306,303 298,289" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937"><circle cx="345" cy="219" r="2.5"/><circle cx="340" cy="215" r="2.5"/><circle cx="343" cy="225" r="2.5"/><circle cx="337" cy="221" r="2.5"/><circle cx="346" cy="212" r="2.5"/><circle cx="297" cy="252" r="2.5"/><circle cx="292" cy="249" r="2.5"/><circle cx="301" cy="248" r="2.5"/><circle cx="295" cy="256" r="2.5"/><circle cx="288" cy="253" r="2.5"/><circle cx="362" cy="166" r="2.5"/><circle cx="358" cy="171" r="2.5"/><circle cx="360" cy="160" r="2.5"/><circle cx="50" cy="204" r="2.5"/><circle cx="53" cy="210" r="2.5"/><circle cx="48" cy="198" r="2.5"/><circle cx="243" cy="226" r="2.5"/><circle cx="240" cy="221" r="2.5"/><circle cx="332" cy="232" r="2.5"/><circle cx="317" cy="294" r="2.5"/><circle cx="177" cy="44" r="2.5"/><circle cx="338" cy="128" r="2.5"/><circle cx="305" cy="100" r="2.5"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="352" y="235">Sydney</text><text x="262" y="276">Melbourne</text><text x="352" y="168" text-anchor="end">Brisbane</text><text x="58" y="207">Perth</text><text x="218" y="212">Adelaide</text><text x="183" y="50">Darwin</text><text x="300" y="315">Hobart</text><text x="120" y="140">Interior: mostly hot desert</text><text x="120" y="154">and semi-arid land</text><text x="8" y="300">Indian Ocean</text><text x="330" y="60">Pacific</text><text x="330" y="73">Ocean</text><text x="372" y="22">N ↑</text></g><circle cx="15" cy="15" r="3" fill="#1f2937"/><text x="24" y="19" font-size="11" font-family="sans-serif" fill="#1f2937">Dots show where people live</text></svg>`;

const islandMap = `<svg viewBox="0 0 450 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fig. 1: choropleth map of an imaginary island with six districts, A B C in the north and D E F in the south, with sea to the south and east. Key in people per km²: 0 to 9 palest, 10 to 49, 50 to 99, 100 to 499, 500 or more darkest. A, in the north-west, has mountains and is 0 to 9. B is 10 to 49. C, on the north-east coast, is 50 to 99. D, on the river plain in the south-west, is 100 to 499. E, at the river mouth on the south coast with the port and capital city, is 500 or more. F, on the south-east coast, is swamp and is 10 to 49. A river flows from the mountains in A south through D and into the sea in E."><rect x="0" y="0" width="450" height="290" fill="#ffffff"/><rect x="30" y="30" width="320" height="250" fill="#bae6fd"/><text x="175" y="262" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Sea</text><g stroke="#334155" stroke-width="1.5"><rect x="30" y="30" width="100" height="100" fill="#fef9c3"/><rect x="130" y="30" width="100" height="100" fill="#fde68a"/><rect x="230" y="30" width="100" height="100" fill="#fbbf24"/><rect x="30" y="130" width="100" height="100" fill="#f97316"/><rect x="130" y="130" width="100" height="100" fill="#9a3412"/><rect x="230" y="130" width="100" height="100" fill="#fde68a"/></g><g fill="none" stroke="#475569" stroke-width="1.2"><polyline points="40,80 55,55 70,80"/><polyline points="62,80 78,50 94,80"/><polyline points="86,80 100,58 114,80"/><polyline points="50,115 63,94 76,115"/></g><path d="M 80 85 C 80 140 100 190 170 230" fill="none" stroke="#2563eb" stroke-width="3"/><rect x="163" y="212" width="10" height="10" fill="#ffffff" stroke="#1f2937" stroke-width="1"/><g stroke="#166534" stroke-width="1.2" fill="none"><path d="M 250 190 h 16 M 254 190 l -3 -7 M 258 190 v -8 M 262 190 l 3 -7"/><path d="M 285 205 h 16 M 289 205 l -3 -7 M 293 205 v -8 M 297 205 l 3 -7"/><path d="M 290 165 h 16 M 294 165 l -3 -7 M 298 165 v -8 M 302 165 l 3 -7"/></g><g font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="50" y="48">A</text><text x="180" y="55">B</text><text x="280" y="55">C</text><text x="50" y="150">D</text><text x="180" y="155" fill="#ffffff">E</text><text x="280" y="150">F</text></g><text x="20" y="15" font-size="12" font-family="sans-serif" fill="#1f2937">Fig. 1 An imaginary island</text><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="358" y="28">Key:</text><text x="358" y="42">people per km²</text><rect x="358" y="50" width="16" height="14" fill="#fef9c3" stroke="#334155"/><text x="380" y="61">0–9</text><rect x="358" y="70" width="16" height="14" fill="#fde68a" stroke="#334155"/><text x="380" y="81">10–49</text><rect x="358" y="90" width="16" height="14" fill="#fbbf24" stroke="#334155"/><text x="380" y="101">50–99</text><rect x="358" y="110" width="16" height="14" fill="#f97316" stroke="#334155"/><text x="380" y="121">100–499</text><rect x="358" y="130" width="16" height="14" fill="#9a3412" stroke="#334155"/><text x="380" y="141">500 or more</text><polyline points="358,172 366,160 374,172" fill="none" stroke="#475569" stroke-width="1.2"/><text x="380" y="171">Mountains</text><line x1="358" y1="188" x2="374" y2="188" stroke="#2563eb" stroke-width="3"/><text x="380" y="192">River</text><rect x="361" y="203" width="10" height="10" fill="#ffffff" stroke="#1f2937"/><text x="380" y="208">Port and</text><text x="380" y="220">capital city</text><path d="M 358 240 h 16 M 362 240 l -3 -7 M 366 240 v -8 M 370 240 l 3 -7" stroke="#166534" stroke-width="1.2" fill="none"/><text x="380" y="240">Swamp</text><text x="358" y="270">N ↑</text></g></svg>`;

const scatterRain = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fig. 3: scatter graph of annual rainfall against population density for eight regions A to H of an imaginary country. A 100 mm and 5 people per km². B 250 mm and 20. C 400 mm and 60. D 600 mm and 90. E 800 mm and 140. F 1,000 mm and 170. G 1,200 mm and 220. H 200 mm and 250."><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><text x="248" y="22" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Fig. 3 Rainfall and population density in eight regions</text><g stroke="#e2e8f0" stroke-width="1"><line x1="60" y1="190" x2="435" y2="190"/><line x1="60" y1="120" x2="435" y2="120"/><line x1="60" y1="50" x2="435" y2="50"/><line x1="185" y1="50" x2="185" y2="260"/><line x1="310" y1="50" x2="310" y2="260"/><line x1="435" y1="50" x2="435" y2="260"/></g><line x1="60" y1="50" x2="60" y2="260" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="260" x2="440" y2="260" stroke="#1f2937" stroke-width="1.5"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="55" y="264">0</text><text x="55" y="194">100</text><text x="55" y="124">200</text><text x="55" y="54">300</text></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="60" y="276">0</text><text x="185" y="276">500</text><text x="310" y="276">1,000</text><text x="435" y="276">1,500</text><text x="248" y="294">Annual rainfall (mm)</text></g><text x="16" y="155" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 16 155)">People per km²</text><g fill="#1f2937"><circle cx="85" cy="256.5" r="4"/><circle cx="122.5" cy="246" r="4"/><circle cx="160" cy="218" r="4"/><circle cx="210" cy="197" r="4"/><circle cx="260" cy="162" r="4"/><circle cx="310" cy="141" r="4"/><circle cx="360" cy="106" r="4"/><circle cx="110" cy="85" r="4"/></g><g font-size="12" font-family="sans-serif" font-weight="bold" fill="#1f2937"><text x="78" y="248">A</text><text x="127" y="240">B</text><text x="165" y="212">C</text><text x="215" y="191">D</text><text x="265" y="156">E</text><text x="315" y="135">F</text><text x="365" y="100">G</text><text x="116" y="80">H</text></g></svg>`;

const badChoropleth = `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fig. 4: a student's choropleth map of four districts P, Q, R and S. Key: 0 to 50 dark purple, 50 to 100 pale yellow, 100 to 200 dark green, 200 or more pale pink. P is dark purple, Q is pale pink, R is pale yellow and S is dark green."><rect x="0" y="0" width="420" height="240" fill="#ffffff"/><text x="20" y="18" font-size="12" font-family="sans-serif" fill="#1f2937">Fig. 4 A student's choropleth map</text><g stroke="#334155" stroke-width="1.5"><rect x="20" y="30" width="100" height="90" fill="#4c1d95"/><rect x="120" y="30" width="100" height="90" fill="#fbcfe8"/><rect x="20" y="120" width="100" height="90" fill="#fef9c3"/><rect x="120" y="120" width="100" height="90" fill="#166534"/></g><g font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle"><text x="70" y="80" fill="#ffffff">P</text><text x="170" y="80" fill="#1f2937">Q</text><text x="70" y="170" fill="#1f2937">R</text><text x="170" y="170" fill="#ffffff">S</text></g><g font-size="12" font-family="sans-serif" fill="#1f2937"><text x="250" y="45">Key: people per km²</text><rect x="250" y="58" width="18" height="14" fill="#4c1d95" stroke="#334155"/><text x="276" y="70">0–50</text><rect x="250" y="82" width="18" height="14" fill="#fef9c3" stroke="#334155"/><text x="276" y="94">50–100</text><rect x="250" y="106" width="18" height="14" fill="#166534" stroke="#334155"/><text x="276" y="118">100–200</text><rect x="250" y="130" width="18" height="14" fill="#fbcfe8" stroke="#334155"/><text x="276" y="142">200 or more</text></g></svg>`;

// ---------------------------------------------------------------------------
// Practice
// ---------------------------------------------------------------------------

export const practice: TopicPractice = {
  // ============================================================== QUIZ
  quiz: [
    {
      kind: "short",
      id: "population-distribution-quiz-q01",
      question: "According to UN estimates, which country has had the **largest population in the world** since 2023?",
      answer: { type: "text", accept: ["India", "Republic of India"] },
      traps: [
        {
          spec: { type: "text", accept: ["China", "People's Republic of China"] },
          feedback: "China held the top spot for a long time, but UN estimates show India overtook it in 2023. Both have roughly 1.4 billion people.",
        },
      ],
      solution: [
        "India and China each have roughly 1.4 billion people — together more than a third of humanity.",
        "UN estimates show India overtook China during 2023, so India is now the most populous country.",
      ],
      difficulty: "warmup",
      guideRef: "world-distribution",
      hints: ["It is in South Asia, and it recently overtook its giant neighbour."],
    },
    {
      kind: "short",
      id: "population-distribution-quiz-q02",
      question: "Name the type of map that shades whole areas (such as countries or districts) darker or lighter to show values such as population density.",
      answer: { type: "text", accept: ["choropleth", "choropleth map", "chloropleth", "chloropleth map"] },
      traps: [
        {
          spec: { type: "text", accept: ["dot map", "dot distribution map", "dot"] },
          feedback: "A dot map uses dots to show where people are. This map shades whole areas — that is a choropleth map.",
        },
      ],
      solution: [
        "A **choropleth map** shades each area according to which class its value falls in, using a key.",
        "Darker shading normally means a higher value, e.g. more people per km².",
      ],
      difficulty: "warmup",
      guideRef: "population-density",
      hints: ["It starts with 'choro-', from the Greek for 'area'."],
    },
    {
      kind: "short",
      id: "population-distribution-quiz-q03",
      question: "An island has 45,000 people and an area of 300 km². Calculate its population density, in people per km².",
      answer: { type: "number", value: 150 },
      traps: [
        {
          spec: { type: "number", value: 0.00667, tolerance: 0.0005 },
          feedback: "You divided the area by the population. Density = population ÷ area: 45,000 ÷ 300.",
        },
      ],
      solution: ["Density = population ÷ area.", "45,000 ÷ 300 = 150", "150 people per km²."],
      commonError: "Dividing the area by the population, which gives a tiny decimal.",
      difficulty: "core",
      guideRef: "population-density",
      hints: ["Which number goes on top: people or km²?", "45,000 ÷ 300 — cancel two zeros first: 450 ÷ 3."],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "population-distribution-quiz-q04",
      question: "Which of these is a **negative physical** factor — one that discourages people from living in an area?",
      options: [
        "Fertile soil",
        "A reliable water supply",
        "Plenty of factory jobs",
        "Frequent flooding and cyclones",
      ],
      answerIndex: 3,
      explanation:
        "Floods and cyclones are natural hazards — physical — and they put people off. Fertile soil and reliable water are physical but positive. Factory jobs are positive and human.",
      difficulty: "warmup",
      guideRef: "physical-factors",
      hints: ["You need something that is natural AND bad for people."],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "population-distribution-quiz-q05",
      question: "Is **political stability** a physical factor or a human factor? Type physical or human.",
      answer: { type: "text", accept: ["human", "human factor"] },
      traps: [
        {
          spec: { type: "text", accept: ["physical", "physical factor"] },
          feedback: "Governments, peace and laws are created by people, so political stability is a human factor.",
        },
      ],
      solution: [
        "Physical factors come from nature (relief, climate, soil, water, resources, hazards).",
        "Political stability depends on governments and people, so it is a **human** factor — peaceful, well-run places attract people and investment.",
      ],
      difficulty: "warmup",
      guideRef: "human-factors",
      hints: ["Would it exist on an empty planet with no people?"],
    },
    {
      kind: "short",
      id: "population-distribution-quiz-q06",
      question: "About 95% of Egypt's people live on about 5% of its land. Name the river whose valley and delta they live in.",
      answer: { type: "text", accept: ["Nile", "River Nile", "Nile River", "the Nile"] },
      traps: [
        {
          spec: { type: "text", accept: ["Amazon", "Amazon River", "River Amazon"] },
          feedback: "The Amazon is in South America. Egypt's lifeline is the Nile.",
        },
      ],
      solution: [
        "The **Nile** flows north through the Sahara to the Mediterranean.",
        "It provides water and fertile alluvial soil in a desert, so almost everyone lives along it.",
      ],
      difficulty: "core",
      guideRef: "physical-factors",
      hints: ["It is often called the longest river in Africa.", "It flows through Cairo into the Mediterranean Sea."],
    },
    {
      kind: "short",
      id: "population-distribution-quiz-q07",
      question: "Canada has about 41,000,000 people and an area of about 9,980,000 km². Calculate its population density in people per km², to 1 decimal place.",
      answer: { type: "number", value: 4.1, display: "4.1" },
      traps: [
        {
          spec: { type: "number", value: 0.24, tolerance: 0.05 },
          feedback: "That's area ÷ population (km² per person). Divide the population by the area instead.",
        },
      ],
      solution: [
        "Density = population ÷ area.",
        "41,000,000 ÷ 9,980,000 = 4.108…",
        "To 1 decimal place: 4.1 people per km².",
      ],
      commonError: "Rounding to 4 (a whole number) when 1 decimal place was asked for, or dividing the wrong way round.",
      difficulty: "core",
      guideRef: "population-density",
      hints: ["Population ÷ area.", "Cancel the zeros: 41 ÷ 9.98.", "That's just over 4 — now give 1 decimal place."],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "population-distribution-quiz-q08",
      question: "Which pair gives one **physical** and one **human** factor that help explain why so many people live in Singapore?",
      options: [
        "A sheltered natural harbour on a major shipping route (physical) and a busy port with many jobs (human)",
        "Fertile volcanic soil (physical) and cold winters (physical)",
        "Large areas of farmland (human) and good schools (physical)",
        "Long rivers for irrigation (human) and high mountains (human)",
      ],
      answerIndex: 0,
      explanation:
        "Singapore's sheltered natural harbour, at the southern end of the Strait of Malacca on a major shipping route, is physical; the port, finance and jobs built there are human. The other pairs either mislabel factors (schools are human, not physical) or describe things Singapore does not have, such as volcanic soil, cold winters or long rivers.",
      difficulty: "core",
      guideRef: "explaining-distribution",
      hints: [
        "Check each label: is the first thing really natural, and the second really made by people?",
        "Does Singapore have volcanoes, cold winters or long rivers?",
      ],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "population-distribution-quiz-q09",
      question: "Roughly 90% of the world's people live north of one imaginary line at 0° latitude. Name that line.",
      answer: { type: "text", accept: ["Equator", "the Equator"] },
      traps: [
        {
          spec: { type: "text", accept: ["Prime Meridian", "Greenwich Meridian", "meridian"] },
          feedback: "The Prime Meridian is 0° **longitude** and runs north–south. The line of 0° latitude is the Equator.",
        },
        {
          spec: { type: "text", accept: ["Tropic of Cancer", "Tropic of Capricorn"] },
          feedback: "The Tropics are at about 23.5° north and south. The line at 0° latitude is the Equator.",
        },
      ],
      solution: [
        "Lines of latitude run east–west; 0° latitude is the **Equator**.",
        "It divides the Northern and Southern Hemispheres. Most land, and roughly 90% of people, are north of it.",
      ],
      difficulty: "core",
      guideRef: "world-distribution",
      hints: ["Latitude measures how far north or south you are.", "It splits the Earth into two hemispheres."],
      strategy: "CLOCC (Continents, Lines of latitude, Oceans, Countries, Compass)",
    },
    {
      kind: "short",
      id: "population-distribution-quiz-q10",
      question: "The world's population is about 8.1 billion (2024), and about 59% of people live in Asia. How many billion people live in Asia? Give your answer to 1 decimal place.",
      answer: { type: "number", value: 4.8, display: "4.8 billion" },
      traps: [
        {
          spec: { type: "number", value: 3.3, tolerance: 0.05 },
          feedback: "That's the number living **outside** Asia (8.1 − 4.8). The question asks how many live in Asia.",
        },
      ],
      solution: [
        "59% of 8.1 billion = 0.59 × 8.1",
        "= 4.779 billion",
        "To 1 decimal place: about 4.8 billion people.",
      ],
      commonError: "Writing 59 × 8.1 = 477.9 — remember 59% means 0.59.",
      difficulty: "core",
      guideRef: "world-distribution",
      hints: ["Percent means 'out of 100': 59% = 0.59.", "Multiply 0.59 by 8.1.", "Round 4.779 to 1 decimal place."],
      strategy: "Use figures from the source",
    },
  ],

  // ============================================================== PAPERS
  papers: [
    {
      id: "population-distribution-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "population-distribution-p1-q01",
          question: "Places such as Bangladesh and the Nile delta have a very large number of people per km². Complete the term: they are ______ populated.",
          answer: { type: "text", accept: ["densely", "densely populated", "dense", "highly"] },
          traps: [
            {
              spec: { type: "text", accept: ["sparsely", "sparsely populated", "sparse"] },
              feedback: "Sparsely populated means **few** people per km². Bangladesh has over 1,000 per km², so it is densely populated.",
            },
          ],
          solution: [
            "Many people per km² = **densely populated**.",
            "Few people per km² = sparsely populated.",
          ],
          difficulty: "warmup",
          guideRef: "world-distribution",
          hints: ["It is the opposite of 'sparsely'."],
        },
        {
          kind: "short",
          id: "population-distribution-p1-q02",
          question: "The United Kingdom has about 68,000,000 people and an area of about 243,000 km². Calculate its population density, to the nearest whole number of people per km².",
          answer: { type: "number", value: 280 },
          traps: [
            {
              spec: { type: "number", value: 0.0036, tolerance: 0.0005 },
              feedback: "You divided area by population. It's population ÷ area: 68,000,000 ÷ 243,000.",
            },
          ],
          solution: [
            "Density = population ÷ area.",
            "68,000,000 ÷ 243,000 = 279.83…",
            "To the nearest whole number: 280 people per km².",
          ],
          commonError: "Rounding 279.83 down to 279 — the digit after the point is 8, so round up.",
          difficulty: "warmup",
          guideRef: "population-density",
          hints: ["Population ÷ area.", "Cancel three zeros from each: 68,000 ÷ 243."],
          strategy: "Use figures from the source",
        },
        {
          kind: "short",
          id: "population-distribution-p1-q03",
          question: "Japan has about 124,000,000 people (2024) and an area of about 378,000 km². Calculate its population density, to the nearest whole number of people per km².",
          answer: { type: "number", value: 328 },
          traps: [
            {
              spec: { type: "number", value: 0.003, tolerance: 0.0005 },
              feedback: "That's km² per person. Put the population on top: 124,000,000 ÷ 378,000.",
            },
          ],
          solution: [
            "Density = population ÷ area.",
            "124,000,000 ÷ 378,000 = 328.04…",
            "To the nearest whole number: 328 people per km².",
            "Check: 378,000 × 328 = 123,984,000, which is very close to 124,000,000. ✓",
          ],
          commonError: "Typing the area or population with a missing zero — write both numbers in full first.",
          difficulty: "core",
          guideRef: "population-density",
          hints: ["Population ÷ area.", "Cancel three zeros from each: 124,000 ÷ 378.", "Estimate first: 120,000 ÷ 400 = 300, so expect a bit more than 300."],
          strategy: "Use figures from the source",
        },
        {
          kind: "short",
          id: "population-distribution-p1-q04",
          question: "**Work backwards.** A city-state has about 6,000,000 people and a population density of about 8,000 people per km². Calculate its area in km².",
          answer: { type: "number", value: 750 },
          traps: [
            {
              spec: { type: "number", value: 48000000000, tolerance: 1000000 },
              feedback: "You multiplied. If density = population ÷ area, then area = population ÷ density.",
            },
            {
              spec: { type: "number", value: 0.00133, tolerance: 0.0002 },
              feedback: "You divided density by population. Area = population ÷ density: 6,000,000 ÷ 8,000.",
            },
          ],
          solution: [
            "Density = population ÷ area, so area = population ÷ density.",
            "6,000,000 ÷ 8,000 = 750 km².",
            "These figures describe Singapore. Its real area is about 735 km² — the gap appears because the density 8,000 is itself rounded (the true value is about 8,160).",
          ],
          solutions: [
            {
              label: "Think of it as sharing",
              steps: [
                "Each km² holds about 8,000 people.",
                "How many lots of 8,000 make 6,000,000? 6,000,000 ÷ 8,000 = 750.",
                "So there must be about 750 km².",
              ],
            },
          ],
          commonError: "Multiplying population by density instead of dividing.",
          difficulty: "core",
          guideRef: "population-density",
          hints: [
            "Rearrange: if density = population ÷ area, what is area?",
            "Area = population ÷ density.",
            "6,000,000 ÷ 8,000 — cancel three zeros: 6,000 ÷ 8.",
          ],
          strategy: "Work backwards",
        },
        {
          kind: "mcq",
          id: "population-distribution-p1-q05",
          question: "Study Fig. 1, a choropleth map of an imaginary island. Which **physical** factor shown on the map best explains why District A has the lowest population density?",
          diagram: islandMap,
          options: [
            "It is coastal swamp land.",
            "It contains the island's port.",
            "It is high, steep, mountainous land.",
            "It is flat river floodplain.",
          ],
          answerIndex: 2,
          explanation:
            "District A is covered by the mountain symbols and is in the palest class (0–9 people per km²): steep, high land is cold and hard to farm or build on. Swamp is shown in District F, the port in E and the river plain in D — so those options describe other districts.",
          difficulty: "core",
          guideRef: "physical-factors",
          hints: ["Read the key: what symbols are drawn in District A?", "Which of those symbols makes building and farming hard?"],
          strategy: "Read the key first",
        },
        {
          kind: "written",
          id: "population-distribution-p1-q06",
          question: "Using Fig. 1, **describe** the distribution of population on the island. [4 marks]",
          diagram: islandMap,
          marks: 4,
          modelAnswer:
            "Population is unevenly distributed, with the highest densities in the south of the island along the river and the south coast, and the lowest in the north-west. District E, at the river mouth on the south coast, is the most densely populated, with 500 or more people per km², and District D on the river plain to its west has 100–499 people per km². In contrast, District A in the mountainous north-west has only 0–9 people per km². An anomaly is District F: although it is on the south-east coast, it has only 10–49 people per km².",
          markScheme: [
            {
              point: "Overall pattern: uneven — densest in the south / along the river and south coast; sparsest in the north-west",
              keywords: ["uneven", "south", "river", "coast", "north-west", "northwest"],
            },
            {
              point: "Evidence for high density using district and key value (E 500+ or D 100–499)",
              keywords: ["district e", "500", "district d", "100–499", "100-499"],
            },
            {
              point: "Evidence for low density using district and key value (A 0–9, in the mountains)",
              keywords: ["district a", "0–9", "0-9", "mountain", "mountains", "lowest"],
            },
            {
              point: "Identifies the anomaly: F is on the coast but only 10–49 people per km²",
              keywords: ["district f", "anomaly", "10–49", "10-49", "swamp", "except"],
            },
          ],
          commonError: "Explaining (giving reasons) instead of describing, or writing 'lots' and 'not many' without quoting districts and key values.",
          difficulty: "core",
          guideRef: "world-distribution",
          hints: [
            "Start with the big picture: where is it densest and where is it emptiest? Use compass directions.",
            "Quote evidence: name districts and their key classes.",
            "Look for an anomaly — a district that breaks the pattern.",
          ],
          strategy: "TEA (Trend, Evidence, Anomaly)",
        },
        {
          kind: "written",
          id: "population-distribution-p1-q07",
          question: "Bangladesh has about 173 million people (2024) on about 148,000 km² of the Ganges–Brahmaputra delta. **Explain** how two physical factors encourage such a high population density there. [4 marks]",
          marks: 4,
          modelAnswer:
            "First, the delta is flat, low-lying land. This makes it easy to build homes and roads and to irrigate fields, so a lot of people can be supported on each km². Second, the Ganges and Brahmaputra flood regularly and deposit fertile alluvium (silt) across the delta. Together with heavy monsoon rain, this lets farmers grow rice intensively, often more than one crop a year, producing enough food to feed very large numbers of people. This is why Bangladesh has roughly 1,170 people per km², despite the risk of floods and cyclones.",
          markScheme: [
            {
              point: "Identifies flat / low-lying delta land (relief)",
              keywords: ["flat", "low", "low-lying", "delta", "plain", "relief"],
            },
            {
              point: "Develops it: easy to farm, build on, irrigate or travel across, so many people can live there",
              keywords: ["easy", "build", "farm", "irrigate", "roads", "transport"],
            },
            {
              point: "Identifies fertile alluvial soil (silt) deposited by river floods, or a plentiful water supply from rivers and monsoon rain",
              keywords: ["fertile", "alluvial", "alluvium", "silt", "soil", "monsoon", "water"],
            },
            {
              point: "Develops it: high crop yields / rice (several harvests a year) feed a large population",
              keywords: ["rice", "crops", "harvest", "yields", "food", "feed"],
            },
          ],
          commonError: "Naming a human factor (such as jobs in Dhaka) when the question asks for physical factors — or listing factors without explaining how they support more people.",
          difficulty: "core",
          guideRef: "physical-factors",
          hints: [
            "What does a delta look like — steep or flat?",
            "What do flooding rivers leave behind on the land?",
            "For each factor, finish the sentence '…so many people can live there because…'",
          ],
          strategy: "Cause → process → effect",
        },
        {
          kind: "short",
          id: "population-distribution-p1-q08",
          question: "In Singapore, most residents live in high-rise public flats in new towns such as Tampines and Punggol. Give the name (or initials) of the government board that builds these flats.",
          answer: {
            type: "text",
            accept: ["HDB", "Housing and Development Board", "Housing & Development Board", "Housing Development Board", "the HDB"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["URA", "Urban Redevelopment Authority"] },
              feedback: "The URA plans how land is used across Singapore, but the flats themselves are built by the HDB (Housing & Development Board).",
            },
          ],
          solution: [
            "The **Housing & Development Board (HDB)**, set up in 1960, builds Singapore's public housing.",
            "More than three-quarters of resident households live in HDB flats, in planned new towns with MRT stations, schools and shops — a human factor that allows very high density.",
          ],
          difficulty: "warmup",
          guideRef: "human-factors",
          hints: ["Three letters — you see them on the side of most blocks of flats."],
        },
        {
          kind: "written",
          id: "population-distribution-p1-q09",
          question: "Sydney is one of Australia's two largest cities, on the south-east coast. **Explain** two human factors that attract people to live in large coastal cities such as Sydney. [4 marks]",
          marks: 4,
          modelAnswer:
            "One human factor is jobs. Sydney has many well-paid jobs in finance, tourism, education and its port, so people move there from the rest of Australia and from abroad to find work, and businesses set up where the workers are. A second factor is history of settlement. Sydney was founded as a British colony in 1788 at a natural harbour, so it became the first port; roads, railways and services were built there first, and later migrants kept arriving where the city, jobs and transport links already existed.",
          markScheme: [
            {
              point: "Identifies jobs / employment as a human factor",
              keywords: ["jobs", "job", "employment", "work", "wages", "finance", "tourism"],
            },
            {
              point: "Explains how jobs attract people (migrants move for work; businesses cluster)",
              keywords: ["attract", "move", "migrants", "migrate", "businesses", "income"],
            },
            {
              point: "Identifies a second human factor: transport links / port / history of settlement / services",
              keywords: ["port", "transport", "airport", "history", "1788", "settlers", "services", "hospitals", "universities"],
            },
            {
              point: "Explains the second factor (e.g. early port meant infrastructure built first, so later migrants followed; services and connections make life easier)",
              keywords: ["first", "built", "trade", "connected", "followed", "already", "infrastructure"],
            },
          ],
          commonError: "Giving physical factors (such as a mild climate) when the question asks for human factors, or naming factors without explaining them.",
          difficulty: "core",
          guideRef: "human-factors",
          hints: [
            "Human factors are made by people: jobs, transport, services, history, government.",
            "Pick two, then say HOW each one attracts people.",
            "Use Sydney details: its harbour port, founded in 1788, its finance and tourism jobs.",
          ],
          strategy: "PEEL paragraph",
        },
        {
          kind: "short",
          id: "population-distribution-p1-q10",
          question: "Using Fig. 1, how many of the six districts have a population density of **50 or more** people per km²?",
          diagram: islandMap,
          answer: { type: "number", value: 3 },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "You counted only the 100–499 and 500+ classes. The 50–99 class (District C) is also 50 or more.",
            },
            {
              spec: { type: "number", value: 1 },
              feedback: "You counted only the darkest class. 50 or more includes the 50–99, 100–499 and 500+ classes.",
            },
          ],
          solution: [
            "Classes that are 50 or more: 50–99, 100–499 and 500 or more.",
            "C = 50–99, D = 100–499, E = 500 or more.",
            "So 3 districts.",
          ],
          commonError: "Forgetting that the 50–99 class counts as '50 or more'.",
          difficulty: "core",
          guideRef: "population-density",
          hints: ["Read the key first: which classes start at 50 or above?", "Now find every district shaded in one of those classes."],
          strategy: "Read the key first",
        },
        {
          kind: "mcq",
          id: "population-distribution-p1-q11",
          question: "Study the world map. Which of these sparsely populated areas is sparse **mainly because of extreme cold**?",
          diagram: worldMap,
          options: ["Sahara", "Northern Canada", "Amazon", "Central Australia"],
          answerIndex: 1,
          explanation:
            "Northern Canada has long, bitterly cold winters, a very short growing season and permafrost, so farming and building are very difficult. The Sahara and Central Australia are sparse mainly because they are **dry**, and the Amazon because of dense forest, leached soils and poor access — a common slip is to think all empty places are cold.",
          difficulty: "core",
          guideRef: "explaining-distribution",
          hints: ["Look at the latitude of each area — which is furthest from the Equator?", "Three of these are hot places."],
          strategy: "Eliminate options",
        },
        {
          kind: "written",
          id: "population-distribution-p1-q12",
          question: "Study the dot map of Australia. Using the map and your own knowledge, **explain** why most Australians live near the south-east, east and south-west coasts. [4 marks]",
          diagram: australiaDots,
          marks: 4,
          modelAnswer:
            "The map shows almost no dots in the interior, which is mostly hot desert and semi-arid land. Rainfall there is low and unreliable, so there is little water for drinking or farming and few people can make a living. The coasts, especially in the south-east around Sydney and Melbourne, have a milder climate with more reliable rainfall, which suits farming and comfortable living. Human factors add to this: the main cities grew from ports founded by European settlers (Sydney in 1788), so roads, railways, jobs and services were built there first, and new migrants keep arriving where the jobs are. As a result, roughly 85% of Australians live within about 50 km of the coast.",
          markScheme: [
            {
              point: "Interior is hot desert / semi-arid with low rainfall, so little water for people and farming",
              keywords: ["desert", "dry", "arid", "semi-arid", "rainfall", "water", "interior"],
            },
            {
              point: "Coastal south-east / east has a milder climate with more reliable rain",
              keywords: ["mild", "milder", "temperate", "wetter", "reliable", "rain", "climate"],
            },
            {
              point: "Human: cities grew from coastal ports founded by European settlers (history of settlement)",
              keywords: ["port", "ports", "settlers", "1788", "colony", "history", "founded"],
            },
            {
              point: "Human: jobs, services and transport links are concentrated in the coastal cities, so migrants go there",
              keywords: ["jobs", "services", "transport", "trade", "migrants", "cities"],
            },
          ],
          commonError: "Only describing where the dots are, without explaining why — or giving only physical reasons when the question invites both.",
          difficulty: "core",
          guideRef: "explaining-distribution",
          hints: [
            "Read the map label for the interior: what kind of land is it?",
            "Why would a milder, wetter coast attract people?",
            "Add a human reason: how did Australia's big cities begin?",
          ],
          strategy: "Cause → process → effect",
          solutions: [
            {
              label: "Physical route",
              steps: ["Dry desert interior → little water → few farms or towns.", "Milder, wetter coasts → farming and comfortable living → more people."],
            },
            {
              label: "Human route",
              steps: ["Settlers arrived by sea → ports such as Sydney (1788) → first roads, jobs and services.", "Jobs and services stay concentrated → migrants keep moving to coastal cities."],
            },
          ],
        },
        {
          kind: "written",
          id: "population-distribution-p1-q13",
          question: "**Explain** one advantage and one limitation of using a choropleth map to show population density. [3 marks]",
          marks: 3,
          modelAnswer:
            "An advantage is that the shading makes the overall pattern easy to see at a glance, so you can quickly compare which areas are more or less crowded. A limitation is that each area gets one shade based on its average density, which hides variation inside it. For example, the whole of Australia could be shaded as under 10 people per km², even though most Australians live crowded together in a few coastal cities.",
          markScheme: [
            {
              point: "Advantage: the pattern is easy / quick to see and compare between areas",
              keywords: ["easy", "quick", "glance", "compare", "pattern", "clear"],
            },
            {
              point: "Limitation: one shade for each whole area / shows only the average, so it hides variation within the area (or sudden jumps at boundaries)",
              keywords: ["average", "hides", "whole area", "within", "variation", "boundary", "border", "same shade"],
            },
            {
              point: "Develops the limitation with an example or explanation (e.g. Australia shaded low despite crowded coastal cities; exact values lost in classes)",
              keywords: ["australia", "egypt", "cities", "exact", "class", "range", "for example"],
            },
          ],
          commonError: "Saying a choropleth shows 'exactly how many people live there' — it only shows which class an area's average falls into.",
          difficulty: "core",
          guideRef: "population-density",
          hints: [
            "Why do people like using shaded maps?",
            "One shade covers a whole area. What can't you see inside that area?",
            "Use a real example of a country where people are bunched up in one part.",
          ],
          strategy: "Weigh both sides then judge",
        },
        {
          kind: "written",
          id: "population-distribution-p1-q14",
          question: "Using Fig. 1, state **one physical** and **one human** factor that help explain why District E has the highest population density. [2 marks]",
          diagram: islandMap,
          marks: 2,
          modelAnswer:
            "Physical: District E is where the river reaches the sea on the south coast, giving a water supply and flat, low land at the river mouth. Human: it has the island's port and capital city, which provide jobs, trade and services.",
          markScheme: [
            {
              point: "Physical: at the river mouth / on the coast / flat lowland / water supply from the river",
              keywords: ["river", "mouth", "coast", "water", "flat", "lowland", "sea"],
            },
            {
              point: "Human: port and/or capital city providing jobs, trade or services",
              keywords: ["port", "capital", "jobs", "trade", "services", "city"],
            },
          ],
          commonError: "Giving two physical factors (river and coast) and no human factor.",
          difficulty: "core",
          guideRef: "explaining-distribution",
          hints: ["Look at the key: which symbols are inside District E?", "One symbol is natural; one is made by people."],
          strategy: "Read the key first",
        },
        {
          kind: "written",
          id: "population-distribution-p1-q15",
          question: "\"Physical factors are more important than human factors in explaining where people live.\" To what extent do you agree? Use examples you have studied. [6 marks]",
          marks: 6,
          modelAnswer:
            "Physical factors clearly explain the world's emptiest places. The Sahara is too dry for farming, the Himalayas are steep and cold, Antarctica is covered in ice, and the Amazon has dense forest and leached soils, so all are very sparsely populated. Physical factors also explain many dense areas: about 95% of Egyptians live on about 5% of the land along the Nile because it supplies water and fertile alluvium in a desert, and Bangladesh's flat, fertile delta supports roughly 1,170 people per km².\n\nHowever, human factors explain many patterns that physical factors cannot. Singapore has almost no farmland and no large rivers, yet about 6 million people live there at about 8,000 per km² because of its port, jobs and careful HDB planning. Technology lets people overcome physical limits: Dubai grows in a hot desert using desalination, and Brasília was built inland in 1960 to pull people from the coast. Mining towns such as Kalgoorlie exist because of jobs in a harsh desert.\n\nOverall, I partly agree. Physical factors set the limits — almost nobody lives on ice sheets or the highest mountains — but within those limits, human factors increasingly decide where people live, especially in richer countries with the technology to overcome physical problems. In poorer, mostly rural places physical factors such as soil and water still matter most, so the answer depends on the place and its wealth.",
          markScheme: [
            {
              point: "Physical factors explain sparse areas, with named examples (Sahara, Himalayas, Antarctica, Amazon)",
              keywords: ["sahara", "himalayas", "antarctica", "amazon", "desert", "cold", "mountains"],
            },
            {
              point: "Physical factors explain dense areas, with an example and figure (Nile valley 95% on 5%; Bangladesh delta)",
              keywords: ["nile", "egypt", "95", "bangladesh", "fertile", "delta", "water"],
            },
            {
              point: "Human factors explain dense areas (e.g. Singapore: port, jobs, HDB planning; Sydney's history)",
              keywords: ["singapore", "port", "jobs", "hdb", "planning", "8,000", "8000"],
            },
            {
              point: "Technology / government decisions can overcome physical limits (Dubai desalination, Brasília, Kalgoorlie)",
              keywords: ["technology", "desalination", "dubai", "brasília", "brasilia", "kalgoorlie", "air-conditioning", "irrigation"],
            },
            {
              point: "Recognises factors interact or vary with scale / wealth (physical sets limits, human decides within them)",
              keywords: ["both", "interact", "together", "depends", "scale", "richer", "poorer", "limits"],
            },
            {
              point: "Reaches a justified conclusion on the extent of agreement",
              keywords: ["overall", "conclusion", "partly agree", "to some extent", "therefore", "most important"],
            },
          ],
          commonError: "Writing only about one side, or listing examples without a final judgement that says how far you agree and why.",
          difficulty: "challenge",
          guideRef: "explaining-distribution",
          hints: [
            "Plan two columns: places explained mainly by physical factors, and places explained mainly by human factors.",
            "Use at least one figure: Egypt's 95% on 5%, Singapore's 8,000 per km².",
            "Think about technology: can people overcome physical problems?",
            "Finish with a judgement: 'Overall I agree/partly agree because…'",
          ],
          strategy: "Weigh both sides then judge",
        },
      ],
    },
    {
      id: "population-distribution-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "population-distribution-p2-q01",
          question: "Which physical factor describes the **height and shape** of the land — for example flat plains or steep mountains? Give one word.",
          answer: { type: "text", accept: ["relief", "topography"] },
          traps: [
            {
              spec: { type: "text", accept: ["climate", "weather"] },
              feedback: "Climate is the long-term pattern of temperature and rainfall. Height and shape of the land is relief.",
            },
            {
              spec: { type: "text", accept: ["altitude", "height"] },
              feedback: "Altitude is only height above sea level. The word that covers both height AND shape (how steep or flat) is relief.",
            },
          ],
          solution: [
            "**Relief** = the height and shape of the land.",
            "Flat, low relief (plains, valleys, deltas) attracts people; high, steep relief (mountains) discourages them.",
          ],
          difficulty: "warmup",
          guideRef: "physical-factors",
          hints: ["A 'relief map' shows hills and valleys."],
        },
        {
          kind: "short",
          id: "population-distribution-p2-q02",
          question: "A town has 20,000 people and covers 8 km². Calculate its population density, in people per km².",
          answer: { type: "number", value: 2500 },
          traps: [
            {
              spec: { type: "number", value: 160000 },
              feedback: "You multiplied. Density = population ÷ area: 20,000 ÷ 8.",
            },
            {
              spec: { type: "number", value: 0.0004, tolerance: 0.00005 },
              feedback: "You divided area by population. Put the people on top: 20,000 ÷ 8.",
            },
          ],
          solution: ["Density = population ÷ area.", "20,000 ÷ 8 = 2,500 people per km²."],
          difficulty: "warmup",
          guideRef: "population-density",
          hints: ["Population ÷ area: 20,000 ÷ 8."],
        },
        {
          kind: "short",
          id: "population-distribution-p2-q03",
          question: "The island of Java in Indonesia has roughly 150,000,000 people on about 130,000 km². Calculate its population density, to the nearest whole number of people per km².",
          answer: { type: "number", value: 1154 },
          traps: [
            {
              spec: { type: "number", value: 0.00087, tolerance: 0.0001 },
              feedback: "That's area ÷ population. Density = population ÷ area: 150,000,000 ÷ 130,000.",
            },
            {
              spec: { type: "number", value: 1153 },
              feedback: "Check your rounding: 1,153.8… rounds up to 1,154.",
            },
          ],
          solution: [
            "Density = population ÷ area.",
            "150,000,000 ÷ 130,000 = 1,153.846…",
            "To the nearest whole number: 1,154 people per km² — similar to Bangladesh, thanks largely to fertile volcanic soils.",
          ],
          commonError: "Cutting off the decimal (1,153) instead of rounding (1,154).",
          difficulty: "core",
          guideRef: "population-density",
          hints: ["Population ÷ area.", "Cancel four zeros from each: 15,000 ÷ 13.", "Round 1,153.8… to the nearest whole number."],
          strategy: "Use figures from the source",
        },
        {
          kind: "mcq",
          id: "population-distribution-p2-q04",
          question: "Which statement best explains why **conflict and political instability** can make an area sparsely populated?",
          options: [
            "Conflict changes the relief of the land, making it steeper.",
            "People are attracted to conflict zones because land is cheap.",
            "Conflict destroys homes, jobs and services, so people flee and businesses stop investing.",
            "Unstable governments make the climate drier.",
          ],
          answerIndex: 2,
          explanation:
            "War and unstable government make life unsafe and wreck the economy: homes, schools and hospitals are damaged, jobs disappear and businesses will not invest, so people leave. Conflict does not change physical factors such as relief or climate, and cheap land does not outweigh danger.",
          difficulty: "core",
          guideRef: "human-factors",
          hints: ["Think about what people need to stay in a place: safety, work, services.", "Physical factors (relief, climate) are not changed by politics."],
          strategy: "Cause → process → effect",
        },
        {
          kind: "short",
          id: "population-distribution-p2-q05",
          question: "Study the bar chart. What percentage of the world's population lives in **Europe and Northern America combined**?",
          diagram: continentBars,
          answer: { type: "number", value: 14, display: "14%" },
          traps: [
            {
              spec: { type: "number", value: 9 },
              feedback: "That's Europe alone. Add Northern America's share too.",
            },
            {
              spec: { type: "number", value: 22 },
              feedback: "You may have added Latin America and the Caribbean (8%) as well. Northern America is the 5% bar.",
            },
          ],
          solution: ["Europe ≈ 9%.", "Northern America ≈ 5%.", "9 + 5 = 14% — less than a quarter of Asia's 59%."],
          difficulty: "core",
          guideRef: "world-distribution",
          hints: ["Find the Europe bar and the Northern America bar.", "Add the two percentages."],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "population-distribution-p2-q06",
          question: "Study the world map. Using **CLOCC** (Continents, Lines of latitude, Oceans, Countries, Compass directions), **describe** the distribution of the world's densely populated areas. [4 marks]",
          diagram: worldMap,
          marks: 4,
          modelAnswer:
            "The world's population is very unevenly distributed, with a few dense clusters and huge sparsely populated areas. Most densely populated areas lie in the Northern Hemisphere, mainly between the Tropic of Cancer and about 60°N. The largest clusters are in Asia — eastern China, Japan and South Asia (India and Bangladesh) — with others in Europe and the north-east USA near the Atlantic Ocean. Smaller dense areas include the narrow Nile valley in Egypt, West Africa and Java, which is an exception because it lies south of the Equator. In contrast, the Sahara, northern Canada, Siberia, the Amazon, central Australia and Antarctica are sparsely populated.",
          markScheme: [
            {
              point: "Overall: uneven — a few dense clusters, large sparse areas",
              keywords: ["uneven", "clusters", "concentrated", "few areas", "unevenly"],
            },
            {
              point: "Latitude: most dense areas in the Northern Hemisphere / north of the Equator / near the Tropic of Cancer",
              keywords: ["northern hemisphere", "north of the equator", "tropic of cancer", "equator", "latitude", "°n"],
            },
            {
              point: "Names dense areas by continent/country (e.g. East Asia, China, Japan, India, Bangladesh, Europe, north-east USA)",
              keywords: ["asia", "china", "india", "bangladesh", "japan", "europe", "usa", "america"],
            },
            {
              point: "Names sparse areas or an anomaly (e.g. Sahara, Siberia, Amazon, Antarctica; Java south of the Equator; Nile strip in the desert)",
              keywords: ["sahara", "siberia", "amazon", "antarctica", "canada", "australia", "java", "nile"],
            },
          ],
          commonError: "Explaining WHY people live there instead of describing WHERE — 'describe' needs places, directions and lines of latitude.",
          difficulty: "core",
          guideRef: "world-distribution",
          hints: [
            "Start with the general pattern: even or uneven?",
            "Which hemisphere holds most red areas? Mention a line of latitude.",
            "Name continents and countries for the dense areas, then name some empty areas or an exception.",
          ],
          strategy: "CLOCC (Continents, Lines of latitude, Oceans, Countries, Compass)",
        },
        {
          kind: "short",
          id: "population-distribution-p2-q07",
          question: "Fig. 3 shows annual rainfall and population density for eight regions (A–H) of an imaginary country.\n\n| Region | Rainfall (mm) | Density (people per km²) |\n|---|---|---|\n| A | 100 | 5 |\n| B | 250 | 20 |\n| C | 400 | 60 |\n| D | 600 | 90 |\n| E | 800 | 140 |\n| F | 1,000 | 170 |\n| G | 1,200 | 220 |\n| H | 200 | 250 |\n\nWhich region is the **anomaly** that does not fit the general pattern? Give its letter.",
          diagram: scatterRain,
          answer: { type: "text", accept: ["H", "region H"] },
          traps: [
            {
              spec: { type: "text", accept: ["A", "region A"] },
              feedback: "A has the lowest density, but it fits the pattern: low rain, few people. Look for a region with low rain but MANY people.",
            },
            {
              spec: { type: "text", accept: ["G", "region G"] },
              feedback: "G has lots of rain and lots of people — that fits the pattern. Which region has little rain but a very high density?",
            },
          ],
          solution: [
            "General pattern: the more rain, the higher the density (positive correlation).",
            "H has only 200 mm of rain but the highest density of all (250 people per km²).",
            "So H is the anomaly.",
          ],
          difficulty: "core",
          guideRef: "explaining-distribution",
          hints: ["First describe the trend: as rainfall rises, what happens to density?", "Which point sits far away from the others?"],
          strategy: "Look for the anomaly",
        },
        {
          kind: "written",
          id: "population-distribution-p2-q08",
          question: "Using Fig. 3, **describe** the relationship between rainfall and population density. Use figures in your answer. [3 marks]",
          diagram: scatterRain,
          marks: 3,
          modelAnswer:
            "There is a positive relationship: regions with more rainfall generally have higher population densities. For example, region A gets only 100 mm of rain and has just 5 people per km², while region G gets 1,200 mm and has 220 people per km². However, region H is an anomaly: it has only 200 mm of rain but the highest density, 250 people per km².",
          markScheme: [
            {
              point: "States a positive relationship: more rainfall, higher density",
              keywords: ["positive", "more rain", "higher", "increases", "correlation", "as rainfall"],
            },
            {
              point: "Supports it with paired figures for at least two regions",
              keywords: ["100 mm", "1,200", "1200", "220", "region a", "region g"],
            },
            {
              point: "Identifies anomaly H with its figures (200 mm, 250 per km²)",
              keywords: ["region h", "anomaly", "200 mm", "250", "except"],
            },
          ],
          commonError: "Quoting rainfall without the matching density (or vice versa) — always give the pair.",
          difficulty: "core",
          guideRef: "explaining-distribution",
          hints: [
            "Name the type of relationship: positive or negative?",
            "Quote two regions with both their rainfall and their density.",
            "Finish with the anomaly.",
          ],
          strategy: "TEA (Trend, Evidence, Anomaly)",
        },
        {
          kind: "written",
          id: "population-distribution-p2-q09",
          question: "**Suggest** two reasons why region H in Fig. 3 has a very high population density even though it receives little rain. [2 marks]",
          diagram: scatterRain,
          marks: 2,
          modelAnswer:
            "Region H might contain the capital city or a major port, with many jobs and services that attract people whatever the climate. It might also get water from another source — a large river flowing in from wetter areas, underground water (an oasis) or desalination — so people can live there despite the low rainfall.",
          markScheme: [
            {
              point: "A human reason: capital city / port / jobs / services / mining or oil resource",
              keywords: ["capital", "city", "port", "jobs", "services", "mining", "oil", "industry"],
            },
            {
              point: "A water-supply reason: river from elsewhere, groundwater / oasis, irrigation, desalination, dam",
              keywords: ["river", "oasis", "groundwater", "irrigation", "desalination", "dam", "nile"],
            },
          ],
          commonError: "Saying 'it has lots of rain' — the graph shows it does not.",
          difficulty: "core",
          guideRef: "explaining-distribution",
          hints: [
            "If rain isn't bringing people, something else must be. Think human factors.",
            "Can people get water without rain? Think of Egypt or Dubai.",
          ],
          strategy: "Think at different scales",
        },
        {
          kind: "mcq",
          id: "population-distribution-p2-q10",
          question: "Which **physical** factor discourages settlement in northern Canada?",
          options: [
            "Fertile prairie soils",
            "Too few universities",
            "Hot desert conditions",
            "Permafrost and long, very cold winters",
          ],
          answerIndex: 3,
          explanation:
            "Permanently frozen ground (permafrost) makes building and farming very difficult, and winters are long and bitterly cold with a short growing season. 'Too few universities' is a human factor, the fertile prairies are in the south and attract people, and northern Canada is cold, not a hot desert.",
          difficulty: "core",
          guideRef: "physical-factors",
          hints: ["Northern Canada is close to the Arctic.", "Which option is physical AND negative?"],
          strategy: "Eliminate options",
        },
        {
          kind: "written",
          id: "population-distribution-p2-q11",
          question: "The River Nile flows north through the Sahara Desert. **Compare** the physical factors affecting population density in the Nile valley with those in the surrounding Sahara. [4 marks]",
          marks: 4,
          modelAnswer:
            "Both areas have a hot, very dry climate — Cairo receives only about 25 mm of rain a year. However, the Nile valley has a reliable supply of water from the river for drinking and irrigation, whereas the open Sahara has almost none apart from scattered oases. The Nile's floods deposited fertile alluvial silt on the valley floor, while the desert has sand, rock and thin, infertile soils. The valley floor and delta are also flat and easy to farm, unlike sand dunes and rocky plateaus. As a result the Nile valley is densely populated, while the Sahara around it is almost empty.",
          markScheme: [
            {
              point: "Similarity: both hot with very low rainfall",
              keywords: ["both", "hot", "dry", "low rainfall", "25", "desert climate"],
            },
            {
              point: "Water: the Nile provides reliable water / irrigation, whereas the Sahara has little (only oases)",
              keywords: ["water", "river", "irrigation", "oasis", "oases", "reliable"],
            },
            {
              point: "Soil: fertile alluvial silt in the valley, whereas desert soils are sandy/rocky/infertile",
              keywords: ["fertile", "silt", "alluvial", "alluvium", "sand", "rock", "infertile"],
            },
            {
              point: "Uses comparative language and links to density (valley dense vs desert sparse) or compares relief",
              keywords: ["whereas", "however", "in contrast", "but", "dense", "sparse", "flat"],
            },
          ],
          commonError: "Writing two separate descriptions with no comparison — use 'whereas', 'however' or 'in contrast'.",
          difficulty: "core",
          guideRef: "physical-factors",
          hints: [
            "Start with something the two areas have in common.",
            "Then compare water and soil: what does the river give that the desert lacks?",
            "Use linking words such as 'whereas' in every comparison.",
          ],
          strategy: "Compare and contrast",
        },
        {
          kind: "written",
          id: "population-distribution-p2-q12",
          question: "Fig. 4 is a student's choropleth map. Identify **one problem** with how it has been drawn and explain why it could mislead a reader. [2 marks]",
          diagram: badChoropleth,
          marks: 2,
          modelAnswer:
            "The colours do not get darker as density increases — the lowest class (0–50) is dark purple while the highest (200 or more) is pale pink. Readers expect darker shading to mean more people, so they would wrongly think District P is crowded and District Q is nearly empty. The map should use one colour getting steadily darker from low to high. (Another problem: the classes overlap — 50 appears in both 0–50 and 50–100 — so some values could go in two classes.)",
          markScheme: [
            {
              point: "Identifies a problem: shades do not go from light to dark in order / mixed colours (or classes overlap at 50, 100, 200)",
              keywords: ["colour", "colours", "dark", "light", "order", "overlap", "random", "different colours"],
            },
            {
              point: "Explains how it misleads (readers assume darker = denser, so P looks crowded and Q looks empty; overlapping values could go in two classes) or how to fix it",
              keywords: ["mislead", "darker", "denser", "looks", "wrong", "two classes", "one colour", "fix"],
            },
          ],
          commonError: "Saying 'the colours are ugly' — explain how the colours break the light-to-dark rule and mislead.",
          difficulty: "core",
          guideRef: "population-density",
          hints: [
            "On a good choropleth, how should shading change as density rises?",
            "Which class has the darkest colour here? Is that sensible?",
            "Also look closely at the numbers in the key — where does 50 go?",
          ],
          strategy: "Spot the misconception",
        },
        {
          kind: "written",
          id: "population-distribution-p2-q13",
          question: "**Explain** why good transport links attract people to an area. Use an example. [3 marks]",
          marks: 3,
          modelAnswer:
            "Good transport links make it easy for people to travel to work, school and services, so living there is convenient. They also attract businesses, because goods and workers can move easily, which creates more jobs and draws in even more people. For example, Singapore plans MRT lines and bus interchanges into each HDB new town, such as Punggol, so residents can reach jobs across the island quickly, and its port connects Singapore to world trade.",
          markScheme: [
            {
              point: "Easy access to jobs / schools / services (commuting)",
              keywords: ["commute", "travel", "reach", "access", "jobs", "services", "school"],
            },
            {
              point: "Attracts businesses / trade, creating jobs that draw more people",
              keywords: ["businesses", "trade", "goods", "industry", "investment", "more jobs"],
            },
            {
              point: "Relevant example (e.g. Singapore MRT and new towns, Singapore's port, Sydney's harbour, a motorway or railway town)",
              keywords: ["mrt", "singapore", "port", "punggol", "railway", "airport", "sydney", "example"],
            },
          ],
          commonError: "Just saying 'it is easy to get around' without explaining why that brings people or jobs.",
          difficulty: "core",
          guideRef: "human-factors",
          hints: [
            "How does a train line change a family's daily life?",
            "Why would a company want to be near a port or motorway?",
            "Name a real example — Singapore is a good one.",
          ],
          strategy: "PEEL paragraph",
        },
        {
          kind: "short",
          id: "population-distribution-p2-q14",
          question: "Through land reclamation, Singapore's land area has grown from about 580 km² in the 1960s to about 735 km² today. By what **percentage** has its area increased? Give your answer to the nearest whole number.",
          answer: { type: "number", value: 27, display: "27%" },
          traps: [
            {
              spec: { type: "number", value: 21 },
              feedback: "You divided by the new area (735). Percentage increase always divides by the ORIGINAL value: 155 ÷ 580.",
            },
            {
              spec: { type: "number", value: 155 },
              feedback: "155 km² is the increase in area. Now divide by the original 580 and multiply by 100 to get a percentage.",
            },
          ],
          solution: [
            "Increase = 735 − 580 = 155 km².",
            "Percentage increase = 155 ÷ 580 × 100",
            "= 26.72…%",
            "To the nearest whole number: 27%.",
          ],
          commonError: "Dividing by the new value (735) instead of the original value (580).",
          difficulty: "core",
          guideRef: "human-factors",
          hints: [
            "Find the increase first.",
            "Percentage increase = increase ÷ original × 100.",
            "155 ÷ 580 × 100 = ?",
          ],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "population-distribution-p2-q15",
          question: "\"Population density is a good measure of how crowded a country is.\" To what extent do you agree? Use examples and figures. [6 marks]",
          marks: 6,
          modelAnswer:
            "Population density is useful because it lets us compare countries of very different sizes fairly. Singapore has about 8,000 people per km² and Australia about 3.5, which shows clearly that Singapore is far more crowded overall. It is also simple to calculate and can be shown on a choropleth map.\n\nHowever, density is an average, so it hides how unevenly people are spread. Egypt's average is about 110 people per km², but about 95% of Egyptians live on about 5% of the land along the Nile, where density is roughly 2,000 per km², while the desert is almost empty. Australia's very low average hides the fact that roughly 85% of people live within about 50 km of the coast in crowded cities such as Sydney. How crowded a place feels also depends on planning: Singapore's high-rise HDB towns, MRT and parks make a very high density liveable.\n\nOverall, I only partly agree. Density is a good starting point for comparing countries, but at the national scale it can be misleading; it is much more useful when calculated for smaller areas, or read together with a distribution map.",
          markScheme: [
            {
              point: "For: allows fair comparison between places of different sizes, with figures (e.g. Singapore ≈ 8,000 vs Australia ≈ 3.5)",
              keywords: ["compare", "fair", "8,000", "8000", "3.5", "singapore", "different sizes"],
            },
            {
              point: "For: a single, simple number that is easy to calculate or map",
              keywords: ["simple", "easy", "single number", "calculate", "choropleth", "quick"],
            },
            {
              point: "Against: an average hides uneven distribution (e.g. Egypt 110 average vs about 2,000 in the Nile valley)",
              keywords: ["average", "hides", "egypt", "110", "nile", "2,000", "2000", "95"],
            },
            {
              point: "Against: low national averages hide crowded cities (e.g. Australia / Canada coastal or southern cities)",
              keywords: ["australia", "canada", "sydney", "cities", "coast", "85"],
            },
            {
              point: "Against: crowding also depends on planning, housing and usable land (e.g. Singapore HDB, parks, MRT)",
              keywords: ["planning", "high-rise", "hdb", "usable", "green", "parks", "feels"],
            },
            {
              point: "Justified conclusion (e.g. useful starting point but better for small areas / with distribution maps)",
              keywords: ["overall", "conclusion", "partly", "starting point", "smaller areas", "depends", "scale"],
            },
          ],
          commonError: "Arguing only one side, or forgetting the conclusion. A 6-mark evaluation needs points for AND against plus a supported judgement.",
          difficulty: "challenge",
          guideRef: "population-density",
          hints: [
            "What does density let you do that total population can't?",
            "Density is an average. What does an average hide? Think of Egypt.",
            "Does a dense place always feel crowded? Think about Singapore's planning.",
            "Finish with 'Overall…' and say how far you agree.",
          ],
          strategy: "Weigh both sides then judge",
        },
      ],
    },
  ],

  // ============================================================== CHALLENGE
  challenge: [
    {
      kind: "short",
      id: "population-distribution-ch-q01",
      question: "Egypt has about 110,000,000 people and an area of about 1,000,000 km². About 95% of the people live in the Nile valley and delta, which cover about 5% of the land. Calculate the population density of the **rest** of Egypt (outside the Nile valley and delta), in people per km² to 1 decimal place.",
      answer: { type: "number", value: 5.8 },
      traps: [
        {
          spec: { type: "number", value: 110 },
          feedback: "110 is the national average. The question asks only about the land outside the Nile valley and delta.",
        },
        {
          spec: { type: "number", value: 5.5, tolerance: 0.05 },
          feedback: "You used the right number of people (5.5 million) but the whole area. The rest of Egypt is only 95% of 1,000,000 km².",
        },
        {
          spec: { type: "number", value: 2090, tolerance: 1 },
          feedback: "That's the density **inside** the Nile valley and delta. Now do the same for the other 5% of people on the other 95% of the land.",
        },
      ],
      solution: [
        "People outside the valley: 5% of 110,000,000 = 5,500,000.",
        "Area outside the valley: 95% of 1,000,000 km² = 950,000 km².",
        "Density = 5,500,000 ÷ 950,000 = 5.789…",
        "To 1 decimal place: 5.8 people per km² — compared with about 2,090 per km² in the valley and delta, and an average of 110.",
      ],
      solutions: [
        {
          label: "Scale the national average",
          steps: [
            "National average = 110 per km².",
            "The rest of Egypt has {{5/100}} of the people on {{95/100}} of the land.",
            "So its density = 110 × {{5/95}} = 5.789… ≈ 5.8 per km².",
          ],
        },
      ],
      commonError: "Mixing up the percentages — 95% of the PEOPLE live on 5% of the LAND, so the rest of Egypt has 5% of the people on 95% of the land.",
      difficulty: "challenge",
      guideRef: "population-density",
      hints: [
        "You need two numbers: how many people live outside the valley, and how much land is outside it.",
        "If 95% of people are in the valley, what percentage are outside? Same idea for the land.",
        "5,500,000 people ÷ 950,000 km².",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-distribution-ch-q02",
      question: "**Apply your knowledge to a new place.** Read the information about Greenland.\n\n| Fact | Greenland |\n|---|---|\n| Population | about 56,000 |\n| Area | about 2.2 million km² |\n| Ice sheet | covers about 80% of the land |\n| Where people live | small towns on the ice-free coast, mostly in the south-west; the capital, Nuuk, has nearly 20,000 people |\n| Main industry | fishing |\n| Transport | towns are linked by sea and air, not by roads |\n\nA student claims: \"Greenland is nearly empty simply because it is covered in ice.\" **Test this claim** by calculating the population density of the ice-free land only. Then **explain** why Greenland is so sparsely populated and why its people live where they do, using physical and human factors. [5 marks]",
      marks: 5,
      modelAnswer:
        "Greenland is one of the most sparsely populated places on Earth — about 56,000 people on about 2.2 million km² is roughly 0.03 people per km². An ice sheet covers about 80% of the land, so most of it cannot be farmed or built on. However, the ice is not the whole story. The ice-free land is about 20% of 2,200,000 km² = 440,000 km², and 56,000 ÷ 440,000 ≈ 0.13 people per km² — still extremely sparse, so the student's claim is too simple. Even the ice-free land is very cold, rocky and mountainous, with a very short growing season, so almost no crops can be grown. People therefore live in small towns on the coast, especially in the south-west, where conditions are least harsh. Human factors reinforce this: the main industry is fishing, so jobs are in coastal ports, and because towns are linked only by sea and air, people stay close to harbours. Nuuk, the capital, attracts the most people because it has government jobs and services.",
      markScheme: [
        {
          point: "Ice sheet covers about 80% of the land, so it cannot be farmed or built on",
          keywords: ["ice", "80", "ice sheet", "cannot build", "no farming"],
        },
        {
          point: "Calculation: ice-free land ≈ 20% × 2.2 million = 440,000 km²; 56,000 ÷ 440,000 ≈ 0.13 people per km² — still extremely sparse, so ice alone does not explain it",
          keywords: ["440,000", "440000", "0.13", "0.127", "20%", "still sparse", "not just ice"],
        },
        {
          point: "Even the ice-free land is extremely cold / rocky / mountainous with a very short growing season",
          keywords: ["cold", "freezing", "short", "growing season", "permafrost", "climate", "rocky", "mountainous"],
        },
        {
          point: "People live on the ice-free coast, mainly the south-west, where conditions are less harsh",
          keywords: ["coast", "ice-free", "south-west", "southwest", "milder", "sea"],
        },
        {
          point: "Human: fishing jobs in ports / sea and air transport only / capital Nuuk has jobs and services",
          keywords: ["fishing", "port", "harbour", "boats", "nuuk", "capital", "services", "jobs"],
        },
      ],
      commonError: "Accepting the student's claim without testing it, or ignoring the data — strong answers calculate the ice-free density (about 0.13 per km²) and link each factor to WHERE people live, not just why there are few.",
      difficulty: "challenge",
      guideRef: "explaining-distribution",
      hints: [
        "Start with the biggest physical fact in the table — then check whether it explains everything.",
        "Ice-free land = 20% of 2,200,000 km². Divide the 56,000 people by that area. Is the result still very sparse?",
        "If even the ice-free land is nearly empty, what else about it makes life hard?",
        "Fishing is the main job, and there are no roads between towns. How does that pull people to particular places?",
      ],
      strategy: "Cause → process → effect",
    },
    {
      kind: "short",
      id: "population-distribution-ch-q03",
      question: "District J has an area of 1,250 km² and 140,000 people. A new mining town brings in another 35,000 people. On the region's choropleth map, the darkest class is **150 or more** people per km². How many **more** people would need to move into District J (after the mining town is built) for it to be shaded in the darkest class?",
      answer: { type: "number", value: 12500 },
      traps: [
        {
          spec: { type: "number", value: 10 },
          feedback: "10 is the gap in **density** (150 − 140 people per km²). Multiply by the area to turn it into a number of people.",
        },
        {
          spec: { type: "number", value: 47500 },
          feedback: "You forgot the 35,000 people from the mining town. The district already has 175,000 people.",
        },
      ],
      solution: [
        "Population after the mining town: 140,000 + 35,000 = 175,000.",
        "Current density: 175,000 ÷ 1,250 = 140 people per km² — not yet in the darkest class.",
        "Population needed for 150 per km²: 150 × 1,250 = 187,500.",
        "Extra people needed: 187,500 − 175,000 = 12,500.",
      ],
      solutions: [
        {
          label: "Work in density first",
          steps: [
            "Density now = 140 per km²; target = 150 per km².",
            "Gap = 10 people per km².",
            "10 × 1,250 km² = 12,500 more people.",
          ],
        },
      ],
      commonError: "Stopping at the density gap (10) without converting it into people.",
      difficulty: "challenge",
      guideRef: "population-density",
      hints: [
        "First find the population after the mining town arrives.",
        "What population would give exactly 150 people per km² on 1,250 km²?",
        "Subtract the current population from that target.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-distribution-ch-q04",
      question: "The table shows data for five regions of an imaginary country.\n\n| Region | Rainfall (mm per year) | Average altitude (m) | Distance to coast (km) | Density (people per km²) |\n|---|---|---|---|---|\n| V | 1,800 | 2,600 | 40 | 6 |\n| W | 900 | 100 | 20 | 420 |\n| X | 300 | 200 | 400 | 35 |\n| Y | 1,100 | 900 | 150 | 110 |\n| Z | 700 | 150 | 250 | 260 |\n\n\"Rainfall is the most important factor affecting population density in this country.\" Using the data, **evaluate** this statement. [5 marks]",
      marks: 5,
      modelAnswer:
        "The data do not support the statement well. Region V has the most rain (1,800 mm) but the lowest density (6 people per km²), so more rain does not simply mean more people. Altitude shows a much stronger pattern: density falls steadily as altitude rises — W (100 m, 420 per km²), Z (150 m, 260), Y (900 m, 110) and V (2,600 m, 6). The exception is X: it is low (200 m) but has only 35 people per km², which is best explained by its very low rainfall (300 mm) — so rainfall matters when it is too low. Distance to the coast shows only a weak link: W, nearest the coast at 20 km, is densest, but V is only 40 km from the coast and has the lowest density, and Z at 250 km is denser than Y at 150 km. Overall, altitude seems the most important single factor here, but rainfall acts as a limit when it is very low, so density is best explained by a combination of factors rather than rainfall alone.",
      markScheme: [
        {
          point: "Evidence against rainfall: V has the most rain (1,800 mm) but the lowest density (6)",
          keywords: ["region v", "1,800", "1800", "most rain", "lowest"],
        },
        {
          point: "Identifies altitude as the stronger pattern with data (density falls as altitude rises: W 100 m, Z 150 m, Y 900 m, V 2,600 m)",
          keywords: ["altitude", "height", "2,600", "2600", "900", "100 m", "150 m", "higher", "lower"],
        },
        {
          point: "Explains anomaly X: low altitude but low density because rainfall is very low (300 mm) — rainfall matters when scarce",
          keywords: ["region x", "300 mm", "35", "dry", "too little", "anomaly"],
        },
        {
          point: "Considers distance to coast with data (weak/inconsistent link, e.g. V is only 40 km from the coast but emptiest; Z denser than Y despite being further away)",
          keywords: ["coast", "distance", "40 km", "20", "250", "weak", "inconsistent"],
        },
        {
          point: "Justified conclusion: rainfall not the most important on its own; altitude strongest / combination of factors",
          keywords: ["overall", "conclusion", "combination", "most important", "disagree", "partly"],
        },
      ],
      commonError: "Looking at only one column, or ranking the regions by rainfall and stopping there. Test every factor against the density column and look for exceptions.",
      difficulty: "challenge",
      guideRef: "physical-factors",
      hints: [
        "Rank the regions by density, highest to lowest. Then look down each other column.",
        "Does the wettest region have the most people?",
        "Which column follows the density ranking most closely — and which region breaks it?",
        "Can rainfall explain that exception? Use it to reach a balanced conclusion.",
      ],
      strategy: "Weigh both sides then judge",
    },
    {
      kind: "short",
      id: "population-distribution-ch-q05",
      question: "Bangladesh has about 173,000,000 people on about 148,000 km². Canada has an area of about 9,980,000 km². If Canada had the **same population density as Bangladesh**, how many people would it have? Give your answer in **billions**, to the nearest billion.",
      answer: { type: "number", value: 12, tolerance: 0.4, display: "about 12 billion" },
      traps: [
        {
          spec: { type: "number", value: 11665810810, tolerance: 100000000 },
          feedback: "Right calculation — now write it in billions: about 11.7 billion, which is 12 billion to the nearest billion.",
        },
        {
          spec: { type: "number", value: 1169, tolerance: 2 },
          feedback: "That's Bangladesh's density (people per km²). Now multiply it by Canada's area.",
        },
      ],
      solution: [
        "Bangladesh's density = 173,000,000 ÷ 148,000 = 1,168.9… people per km².",
        "People in Canada at that density = 1,168.9 × 9,980,000 ≈ 11,666,000,000.",
        "That is about 11.7 billion — 12 billion to the nearest billion.",
        "That is more than the whole world's population (about 8.1 billion in 2024)! Canada's physical geography — frozen north, permafrost, long winters — could never support that, which shows why density depends on the land, not just its size.",
      ],
      solutions: [
        {
          label: "Scale by area",
          steps: [
            "Canada's area ÷ Bangladesh's area = 9,980,000 ÷ 148,000 ≈ 67.4.",
            "So Canada is about 67 times bigger.",
            "173,000,000 × 67.4 ≈ 11.7 billion → about 12 billion.",
          ],
        },
      ],
      commonError: "Stopping after finding Bangladesh's density, or not converting a huge number into billions (1 billion = 1,000,000,000).",
      difficulty: "challenge",
      guideRef: "population-density",
      hints: [
        "Step 1: find Bangladesh's density.",
        "Step 2: people = density × area — use Canada's area.",
        "Step 3: divide by 1,000,000,000 to get billions.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "population-distribution-ch-q06",
      question: "**Spot the flaws.** Look at Fig. 1. A student describes the map like this:\n\n> \"The population is highest in the north-west of the island because of the mountains. District B has exactly 30 people per km². All of the coastal districts have high densities, so the pattern is even.\"\n\nIdentify **four** errors in the student's description and correct each one. [4 marks]",
      diagram: islandMap,
      marks: 4,
      modelAnswer:
        "1. Density is not highest in the north-west — it is lowest there: District A is 0–9 people per km². The highest is District E (500 or more) on the south coast.\n2. Mountains discourage settlement, so they are a reason for LOW density, not high density.\n3. A choropleth only shows classes, not exact values, so District B can only be described as 10–49 people per km², not exactly 30.\n4. Not all coastal districts are dense: District F is on the south-east coast but has only 10–49 people per km², so the pattern is uneven, not even.",
      markScheme: [
        {
          point: "Highest density is not the north-west; the NW (A) is lowest at 0–9 and E (south coast, 500+) is highest",
          keywords: ["lowest", "district a", "0–9", "0-9", "district e", "500", "south"],
        },
        {
          point: "Mountains reduce density — they are a reason for low, not high, density",
          keywords: ["mountains", "low", "reduce", "discourage", "steep"],
        },
        {
          point: "A choropleth shows classes, not exact values: B is 10–49 people per km²",
          keywords: ["class", "range", "10–49", "10-49", "exact", "not exactly"],
        },
        {
          point: "Not all coastal districts are dense (F is 10–49), so the pattern is uneven",
          keywords: ["district f", "uneven", "not all", "swamp", "anomaly"],
        },
      ],
      commonError: "Spotting an error but not correcting it with evidence from the map and key.",
      difficulty: "challenge",
      guideRef: "world-distribution",
      hints: [
        "Check each sentence of the student's answer against the key.",
        "Can a choropleth give you an exact number?",
        "Check every coastal district — are they all dark?",
      ],
      strategy: "Spot the misconception",
    },
    {
      kind: "written",
      id: "population-distribution-ch-q07",
      question: "\"Modern technology means that physical factors no longer matter in deciding where people live.\" To what extent do you agree? [6 marks]",
      marks: 6,
      modelAnswer:
        "Technology has certainly reduced the importance of some physical factors. Dubai has grown into a large city in a hot desert because desalination turns seawater into drinking water and air-conditioning makes the heat bearable. Egypt's Aswan High Dam, finished in 1970, controls the Nile's floods and stores water for irrigation all year. Singapore has overcome its shortage of land and water through land reclamation (from about 580 km² in the 1960s to about 735 km²), NEWater and desalination, so about 6 million people live on a tiny island.\n\nHowever, physical factors still matter a great deal. Antarctica has no permanent population, and the high Himalayas, the Amazon interior and the Sahara away from the Nile remain almost empty. Technology is expensive, so poorer, mostly rural countries still depend on fertile soil and reliable water — Bangladesh's people crowd onto its fertile delta despite floods and cyclones. Even rich desert cities face limits: Las Vegas depends on scarce water, and hazards such as floods and earthquakes still shape where people live.\n\nOverall, I disagree with the statement. Technology has weakened physical factors, mainly in wealthy places, but it has not removed them: physical factors still set the limits of where large numbers of people can live, and only richer countries can afford to push those limits.",
      markScheme: [
        {
          point: "Agree: technology lets people live in harsh places, with an example (Dubai desalination, air-conditioning, Las Vegas)",
          keywords: ["dubai", "desalination", "air-conditioning", "air conditioning", "las vegas", "desert city"],
        },
        {
          point: "Agree: a second example of technology/engineering overcoming physical limits (Aswan High Dam 1970, Singapore reclamation / NEWater)",
          keywords: ["aswan", "dam", "irrigation", "reclamation", "newater", "580", "735"],
        },
        {
          point: "Disagree: extreme environments are still almost empty (Antarctica, Himalayas, Sahara, Amazon)",
          keywords: ["antarctica", "himalayas", "sahara", "amazon", "still", "empty"],
        },
        {
          point: "Disagree: technology is expensive, so poorer / rural places still depend on soil and water (e.g. Bangladesh delta)",
          keywords: ["expensive", "cost", "poorer", "rural", "bangladesh", "afford"],
        },
        {
          point: "Recognises remaining limits/hazards even with technology (water shortages, floods, earthquakes)",
          keywords: ["limits", "water shortage", "hazards", "floods", "earthquakes", "still matter"],
        },
        {
          point: "Justified conclusion on the extent of agreement",
          keywords: ["overall", "conclusion", "disagree", "partly", "to some extent", "therefore"],
        },
      ],
      commonError: "Agreeing completely with one example such as Dubai, without testing the claim against places that are still empty or countries that cannot afford the technology.",
      difficulty: "challenge",
      guideRef: "explaining-distribution",
      hints: [
        "Find two examples where technology has beaten a physical problem.",
        "Find places that are STILL empty despite modern technology.",
        "Who can afford desalination and huge dams?",
        "Decide how far you agree and say why in a final paragraph.",
      ],
      strategy: "Weigh both sides then judge",
    },
    {
      kind: "short",
      id: "population-distribution-ch-q08",
      question: "An imaginary country has two regions:\n\n| Region | Area (km²) | Density (people per km²) |\n|---|---|---|\n| Coastal strip | 800 | 450 |\n| Dry interior | 7,200 | 5 |\n\nCalculate the population density of the **whole country**, in people per km², to 1 decimal place.",
      answer: { type: "number", value: 49.5 },
      traps: [
        {
          spec: { type: "number", value: 227.5, tolerance: 0.05 },
          feedback: "You averaged the two densities. The interior is nine times bigger, so it counts for more — find the total people and the total area instead.",
        },
        {
          spec: { type: "number", value: 396000 },
          feedback: "396,000 is the total population. Now divide by the total area (8,000 km²).",
        },
      ],
      solution: [
        "People on the coast: 800 × 450 = 360,000.",
        "People in the interior: 7,200 × 5 = 36,000.",
        "Total people = 396,000; total area = 800 + 7,200 = 8,000 km².",
        "Density = 396,000 ÷ 8,000 = 49.5 people per km².",
        "Notice the national figure (49.5) describes neither region — nobody lives at 'average' density. This is exactly why a single national density can mislead.",
      ],
      commonError: "Taking the simple mean of the two densities, (450 + 5) ÷ 2 = 227.5, which ignores that the regions are different sizes.",
      difficulty: "challenge",
      guideRef: "population-density",
      hints: [
        "You can't just average 450 and 5 — the regions are different sizes.",
        "Use density × area to find how many people live in each region.",
        "Total people ÷ total area.",
      ],
      strategy: "Spot the misconception",
    },
  ],
};
