import type { Paper } from "../../types.ts";

// ---------------------------------------------------------------------------
// Shared resources (inline SVG)
// ---------------------------------------------------------------------------

const worldMap = `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified world map with the Equator and the Tropics as dashed lines. Densely populated areas are shaded red: eastern China, Japan, South Asia, Europe, the north-east USA, the Nile valley, West Africa, Java and south-east Brazil. Sparsely populated areas are labelled in italics: Northern Canada, Sahara, Amazon, Siberia, Himalayas, Central Australia and Antarctica."><rect x="0" y="0" width="480" height="250" fill="#ffffff"/><rect x="0" y="0" width="480" height="216" fill="#bae6fd"/><g fill="#bbf7d0" stroke="#334155" stroke-width="0.8"><polygon points="20,33 53,27 113,24 140,29 160,47 167,56 147,63 139,73 132,87 111,85 111,93 124,100 129,108 136,109 117,100 100,93 93,89 84,77 75,67 73,55 60,43 40,40 20,40"/><polygon points="173,11 213,11 213,27 180,40 167,29"/><polygon points="137,109 160,107 173,120 193,127 189,140 176,157 163,171 153,193 144,187 143,173 145,144 132,127 133,120"/><polygon points="217,92 232,72 253,71 283,79 297,104 308,105 293,140 283,157 267,167 256,143 252,115 229,115 217,101"/><polygon points="227,72 228,61 237,55 247,49 251,44 247,37 260,27 280,25 320,27 347,23 373,17 427,24 480,29 480,33 453,40 429,51 420,63 409,69 401,79 396,88 387,92 385,104 380,108 373,103 379,119 371,109 371,99 363,92 357,91 347,100 343,109 337,93 329,87 316,87 319,91 309,99 297,103 287,83 288,72 275,67 256,61 244,63 233,72"/><polygon points="392,149 392,165 397,167 413,163 424,167 435,172 440,169 444,157 444,153 435,145 429,135 421,136 413,136 403,143"/><polygon points="413,79 420,75 427,71 428,65 429,60 432,63 430,69 429,73 421,77"/><ellipse cx="237" cy="48" rx="3.5" ry="6"/><polygon points="367,113 371,115 381,124 381,128 375,124 368,117"/><polygon points="385,118 396,111 399,113 395,125 387,124"/><ellipse cx="387" cy="130" rx="7" ry="2"/><polygon points="470,166 477,171 471,176 462,182 465,176"/><polygon points="303,136 307,140 303,153 299,152 299,143"/></g><rect x="0" y="203" width="480" height="11" fill="#e0f2fe" stroke="#334155" stroke-width="0.8"/><g stroke="#334155" stroke-width="1" stroke-dasharray="4 3"><line x1="0" y1="89" x2="480" y2="89"/><line x1="0" y1="120" x2="480" y2="120"/><line x1="0" y1="151" x2="480" y2="151"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="3" y="86">Tropic of Cancer</text><text x="3" y="117">Equator</text><text x="3" y="148">Tropic of Capricorn</text></g><g fill="#dc2626" fill-opacity="0.75"><ellipse cx="390" cy="78" rx="10" ry="11"/><ellipse cx="424" cy="73" rx="4" ry="2.5"/><ellipse cx="350" cy="87" rx="10" ry="7"/><ellipse cx="255" cy="54" rx="11" ry="6"/><circle cx="238" cy="51" r="2.5"/><ellipse cx="137" cy="66" rx="6" ry="5"/><ellipse cx="282" cy="85" rx="2" ry="6"/><ellipse cx="248" cy="108" rx="5" ry="5"/><ellipse cx="387" cy="130" rx="6" ry="1.6"/><ellipse cx="176" cy="150" rx="4" ry="4"/></g><g font-size="11" font-family="sans-serif" font-style="italic" fill="#1f2937" text-anchor="middle"><text x="108" y="45">Northern Canada</text><text x="250" y="96">Sahara</text><text x="160" y="129">Amazon</text><text x="385" y="42">Siberia</text><text x="350" y="76">Himalayas</text><text x="418" y="152">Central</text><text x="418" y="163">Australia</text><text x="240" y="212">Antarctica</text></g><rect x="10" y="226" width="14" height="10" fill="#dc2626" fill-opacity="0.75"/><text x="30" y="235" font-size="11" font-family="sans-serif" fill="#1f2937">Densely populated</text><rect x="160" y="226" width="14" height="10" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><text x="180" y="235" font-size="11" font-family="sans-serif" fill="#1f2937">Sparsely populated (named areas in italics)</text></svg>`;

const continentBars = `<svg viewBox="0 0 460 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal bar chart of the approximate share of world population by region in about 2024: Asia 59%, Africa 18%, Europe 9%, Latin America and Caribbean 8%, Northern America 5%, Oceania 1%."><rect x="0" y="0" width="460" height="290" fill="#ffffff"/><text x="230" y="20" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Share of world population by region (about 2024)</text><g stroke="#cbd5e1" stroke-width="1"><line x1="200" y1="32" x2="200" y2="250"/><line x1="240" y1="32" x2="240" y2="250"/><line x1="280" y1="32" x2="280" y2="250"/><line x1="320" y1="32" x2="320" y2="250"/><line x1="360" y1="32" x2="360" y2="250"/><line x1="400" y1="32" x2="400" y2="250"/></g><g fill="#c7d2fe" stroke="#334155" stroke-width="1"><rect x="160" y="40" width="236" height="22"/><rect x="160" y="76" width="72" height="22"/><rect x="160" y="112" width="36" height="22"/><rect x="160" y="148" width="32" height="22"/><rect x="160" y="184" width="20" height="22"/><rect x="160" y="220" width="4" height="22"/></g><g font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="152" y="55">Asia</text><text x="152" y="91">Africa</text><text x="152" y="127">Europe</text><text x="152" y="157">Latin America</text><text x="152" y="169">and Caribbean</text><text x="152" y="199">Northern America</text><text x="152" y="235">Oceania</text></g><g font-size="12" font-family="sans-serif" fill="#1f2937"><text x="400" y="55">59%</text><text x="236" y="91">18%</text><text x="200" y="127">9%</text><text x="196" y="163">8%</text><text x="184" y="199">5%</text><text x="168" y="235">1%</text></g><line x1="160" y1="32" x2="160" y2="250" stroke="#1f2937" stroke-width="1.5"/><line x1="160" y1="250" x2="420" y2="250" stroke="#1f2937" stroke-width="1.5"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="160" y="264">0</text><text x="200" y="264">10</text><text x="240" y="264">20</text><text x="280" y="264">30</text><text x="320" y="264">40</text><text x="360" y="264">50</text><text x="400" y="264">60</text><text x="290" y="282">% of world population</text></g></svg>`;

const telukMap = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Choropleth map of the imaginary island of Teluk, divided into nine districts A to I in a three by three grid, with the sea along the east coast. Key classes in people per km²: 0 to 9 palest, 10 to 49, 50 to 99, 100 to 499, 500 or more darkest. A and D in the west have mountains and are 0 to 9. B and G are 10 to 49. H is 50 to 99. C, E and I are 100 to 499. F, on the east coast at the river mouth with a port, is 500 or more. A river flows from D through E to F."><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><rect x="270" y="30" width="45" height="240" fill="#bae6fd"/><text x="293" y="155" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Sea</text><g stroke="#334155" stroke-width="1.5"><rect x="30" y="30" width="80" height="80" fill="#fef9c3"/><rect x="110" y="30" width="80" height="80" fill="#fde68a"/><rect x="190" y="30" width="80" height="80" fill="#f97316"/><rect x="30" y="110" width="80" height="80" fill="#fef9c3"/><rect x="110" y="110" width="80" height="80" fill="#f97316"/><rect x="190" y="110" width="80" height="80" fill="#9a3412"/><rect x="30" y="190" width="80" height="80" fill="#fde68a"/><rect x="110" y="190" width="80" height="80" fill="#fbbf24"/><rect x="190" y="190" width="80" height="80" fill="#f97316"/></g><g fill="none" stroke="#475569" stroke-width="1.2"><polyline points="45,95 58,72 71,95"/><polyline points="68,95 82,68 96,95"/><polyline points="45,175 58,152 71,175"/><polyline points="72,170 85,148 98,170"/></g><path d="M 60 140 C 100 130 120 160 150 150 C 180 140 210 165 270 160" fill="none" stroke="#2563eb" stroke-width="3"/><rect x="246" y="150" width="9" height="9" fill="#1f2937" stroke="#ffffff" stroke-width="1"/><g font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="70" y="52">A</text><text x="150" y="52">B</text><text x="230" y="52">C</text><text x="70" y="132">D</text><text x="150" y="132">E</text><text x="230" y="132" fill="#ffffff">F</text><text x="70" y="212">G</text><text x="150" y="212">H</text><text x="230" y="212">I</text></g><text x="20" y="20" font-size="12" font-family="sans-serif" fill="#1f2937">Island of Teluk (imaginary)</text><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="330" y="40">Key: people per km²</text><rect x="330" y="50" width="16" height="14" fill="#fef9c3" stroke="#334155"/><text x="352" y="61">0–9</text><rect x="330" y="70" width="16" height="14" fill="#fde68a" stroke="#334155"/><text x="352" y="81">10–49</text><rect x="330" y="90" width="16" height="14" fill="#fbbf24" stroke="#334155"/><text x="352" y="101">50–99</text><rect x="330" y="110" width="16" height="14" fill="#f97316" stroke="#334155"/><text x="352" y="121">100–499</text><rect x="330" y="130" width="16" height="14" fill="#9a3412" stroke="#334155"/><text x="352" y="141">500 or more</text><polyline points="330,172 340,160 350,172" fill="none" stroke="#475569" stroke-width="1.2"/><text x="356" y="171">Mountains</text><line x1="330" y1="188" x2="350" y2="188" stroke="#2563eb" stroke-width="3"/><text x="356" y="192">River</text><rect x="336" y="203" width="9" height="9" fill="#1f2937"/><text x="356" y="212">Port</text><text x="330" y="245">N ↑</text></g></svg>`;

const australiaDots = `<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dot map of Australia. Dots cluster around Sydney, Melbourne, Brisbane, Canberra and Adelaide in the south-east and east, and around Perth in the south-west, with a few near Hobart and Darwin. The huge interior, labelled mostly hot desert and semi-arid land, has almost no dots."><rect x="0" y="0" width="400" height="320" fill="#bae6fd"/><polygon points="34,119 30,153 43,196 43,221 68,230 111,221 162,200 179,200 213,225 238,230 255,255 289,259 310,264 340,251 349,221 366,196 370,170 366,145 344,123 306,94 302,60 285,51 276,23 268,43 268,77 255,81 225,64 228,34 187,28 170,43 162,60 136,51 106,77 94,98 60,108" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><polygon points="294,279 326,281 323,299 306,303 298,289" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><g fill="#1f2937"><circle cx="345" cy="219" r="2.5"/><circle cx="340" cy="215" r="2.5"/><circle cx="343" cy="225" r="2.5"/><circle cx="337" cy="221" r="2.5"/><circle cx="346" cy="212" r="2.5"/><circle cx="297" cy="252" r="2.5"/><circle cx="292" cy="249" r="2.5"/><circle cx="301" cy="248" r="2.5"/><circle cx="295" cy="256" r="2.5"/><circle cx="288" cy="253" r="2.5"/><circle cx="362" cy="166" r="2.5"/><circle cx="358" cy="171" r="2.5"/><circle cx="360" cy="160" r="2.5"/><circle cx="50" cy="204" r="2.5"/><circle cx="53" cy="210" r="2.5"/><circle cx="48" cy="198" r="2.5"/><circle cx="243" cy="226" r="2.5"/><circle cx="240" cy="221" r="2.5"/><circle cx="332" cy="232" r="2.5"/><circle cx="317" cy="294" r="2.5"/><circle cx="177" cy="44" r="2.5"/><circle cx="338" cy="128" r="2.5"/><circle cx="305" cy="100" r="2.5"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="352" y="235">Sydney</text><text x="262" y="276">Melbourne</text><text x="352" y="168" text-anchor="end">Brisbane</text><text x="58" y="207">Perth</text><text x="218" y="212">Adelaide</text><text x="183" y="50">Darwin</text><text x="300" y="315">Hobart</text><text x="120" y="140">Interior: mostly hot desert</text><text x="120" y="154">and semi-arid land</text><text x="8" y="300">Indian Ocean</text><text x="330" y="60">Pacific</text><text x="330" y="73">Ocean</text><text x="372" y="22">N ↑</text></g><circle cx="15" cy="15" r="3" fill="#1f2937"/><text x="24" y="19" font-size="11" font-family="sans-serif" fill="#1f2937">Dots show where people live</text></svg>`;

const egyptMap = `<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map of Egypt. The Mediterranean Sea is to the north and the Red Sea to the east. Most of the country is desert: the Western Desert, the Eastern Desert and Sinai. A narrow red strip of dense population follows the River Nile from Aswan and Lake Nasser in the south, north through Luxor and Cairo, then fans out into the delta near the Mediterranean coast."><rect x="0" y="0" width="450" height="320" fill="#bae6fd"/><polygon points="52,31 209,42 244,31 286,42 346,40 369,90 350,138 295,79 327,152 356,188 391,247 433,300 52,300" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><polygon points="209,42 244,31 286,42 265,75" fill="#dc2626" fill-opacity="0.75" stroke="none"/><polyline points="257,300 270,280 288,255 305,241 295,196 298,182 264,154 249,129 265,75" fill="none" stroke="#dc2626" stroke-opacity="0.75" stroke-width="10" stroke-linejoin="round"/><polyline points="257,300 270,280 288,255 305,241 295,196 298,182 264,154 249,129 265,75" fill="none" stroke="#2563eb" stroke-width="2"/><ellipse cx="282" cy="266" rx="12" ry="22" fill="#bae6fd" stroke="#334155" stroke-width="1" transform="rotate(-35 282 266)"/><g fill="#1f2937"><circle cx="265" cy="75" r="4"/><circle cx="305" cy="241" r="3"/><circle cx="296" cy="196" r="3"/></g><g font-size="12" font-family="sans-serif" fill="#1f2937"><text x="120" y="20">Mediterranean Sea</text><text x="398" y="200">Red</text><text x="398" y="214">Sea</text><text x="90" y="170">Western Desert</text><text x="270" y="118" font-size="11">Eastern</text><text x="272" y="131" font-size="11">Desert</text><text x="318" y="62" font-size="11">Sinai</text><text x="215" y="80">Cairo</text><text x="313" y="245">Aswan</text><text x="304" y="200">Luxor</text><text x="300" y="288" font-size="11">Lake Nasser</text></g><rect x="14" y="232" width="196" height="42" fill="#ffffff" stroke="#334155"/><rect x="20" y="240" width="14" height="10" fill="#dc2626" fill-opacity="0.75"/><text x="40" y="249" font-size="11" font-family="sans-serif" fill="#1f2937">Densely populated</text><rect x="20" y="258" width="14" height="10" fill="#fde68a" stroke="#334155"/><text x="40" y="267" font-size="11" font-family="sans-serif" fill="#1f2937">Desert: very sparsely populated</text><text x="400" y="30" font-size="12" font-family="sans-serif" fill="#1f2937">N ↑</text></svg>`;

const transectBars = `<svg viewBox="0 0 440 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of population density against distance from the coast in an imaginary country. 0 to 50 km: 400 people per km². 50 to 100 km: 150. 100 to 200 km: 40. 200 to 300 km: 90. 300 to 400 km: 5."><rect x="0" y="0" width="440" height="290" fill="#ffffff"/><text x="230" y="18" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Population density and distance from the coast</text><g stroke="#cbd5e1" stroke-width="1"><line x1="60" y1="180" x2="420" y2="180"/><line x1="60" y1="130" x2="420" y2="130"/><line x1="60" y1="80" x2="420" y2="80"/><line x1="60" y1="30" x2="420" y2="30"/></g><g fill="#c7d2fe" stroke="#334155" stroke-width="1"><rect x="75" y="30" width="50" height="200"/><rect x="145" y="155" width="50" height="75"/><rect x="215" y="210" width="50" height="20"/><rect x="285" y="185" width="50" height="45"/><rect x="355" y="227.5" width="50" height="2.5"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="100" y="46">400</text><text x="170" y="151">150</text><text x="240" y="206">40</text><text x="310" y="181">90</text><text x="380" y="223">5</text><text x="100" y="246">0–50</text><text x="170" y="246">50–100</text><text x="240" y="246">100–200</text><text x="310" y="246">200–300</text><text x="380" y="246">300–400</text><text x="240" y="266">Distance from the coast (km)</text></g><line x1="60" y1="30" x2="60" y2="230" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="230" x2="420" y2="230" stroke="#1f2937" stroke-width="1.5"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="55" y="234">0</text><text x="55" y="184">100</text><text x="55" y="134">200</text><text x="55" y="84">300</text><text x="55" y="34">400</text></g><text x="16" y="140" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 16 140)">People per km²</text></svg>`;

// ---------------------------------------------------------------------------
// Papers
// ---------------------------------------------------------------------------

export const mcqPapers: Paper[] = [
  // ======================================================== MCQ Paper 1
  {
    id: "population-distribution-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "population-distribution-m1-q01",
        question: "Which continent is home to roughly 59% of the world's people?",
        options: ["Asia", "Africa", "Europe", "North America"],
        answerIndex: 0,
        explanation:
          "About 59% of people live in Asia — India and China alone have about 1.4 billion each. Africa is tempting because it is huge and growing fast, but it holds only about 18% of the world's people.",
        difficulty: "warmup",
        guideRef: "world-distribution",
        hints: ["Think of the two countries with the most people in the world. Which continent are they in?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q02",
        question: "How do you calculate the population density of an area?",
        options: [
          "Area ÷ population",
          "Population ÷ area",
          "Population × area",
          "Population ÷ number of towns",
        ],
        answerIndex: 1,
        explanation:
          "Density is people per km², so the people go on top: population ÷ area. Area ÷ population is the classic slip — it gives km² per person, a tiny decimal, not people per km².",
        difficulty: "warmup",
        guideRef: "population-density",
        hints: ["The units are 'people per km²'. 'Per' means 'divided by'."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q03",
        question: "Which of these is a **physical** factor that makes an area **sparsely** populated?",
        options: [
          "A shortage of jobs",
          "Poor road and rail links",
          "Steep, high mountains",
          "A long civil war",
        ],
        answerIndex: 2,
        explanation:
          "Steep, high mountains are part of the natural environment, so they are a physical factor — they make farming, building and travel difficult. Jobs, roads and war are all created by people, so they are human factors.",
        difficulty: "warmup",
        guideRef: "physical-factors",
        hints: ["Physical = nature made it. Human = people made it. Which option would still exist if there were no people?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q04",
        question: "Which of these is a **human** factor that attracts people to an area?",
        options: [
          "Flat, low-lying land",
          "Fertile soil",
          "Reliable rainfall",
          "Plenty of well-paid jobs",
        ],
        answerIndex: 3,
        explanation:
          "Jobs are created by people (businesses, factories, offices), so they are a human factor. Flat land, fertile soil and rainfall are all attractive too, but they are physical factors — part of nature.",
        difficulty: "warmup",
        guideRef: "human-factors",
        hints: ["Three of these options come from nature. Which one comes from people?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q05",
        question: "The bar chart shows the approximate share of the world's population in each region. Roughly how many times larger is Asia's share than Africa's share?",
        diagram: continentBars,
        options: ["About 3 times", "About 41 times", "About 6 times", "About 2 times"],
        answerIndex: 0,
        explanation:
          "Asia 59% ÷ Africa 18% ≈ 3.3, so Asia's share is about 3 times Africa's. The tempting 41 is the **difference** (59 − 18 = 41 percentage points), not how many times bigger.",
        difficulty: "core",
        guideRef: "world-distribution",
        hints: [
          "Read the two bars: Asia and Africa.",
          "'How many times larger' means divide, not subtract.",
          "59 ÷ 18 = ?",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q06",
        question: "Singapore has about 6,000,000 people living on about 735 km². Which is closest to its population density?",
        options: [
          "About 820 people per km²",
          "About 82,000 people per km²",
          "About 8,200 people per km²",
          "About 0.0001 people per km²",
        ],
        answerIndex: 2,
        explanation:
          "6,000,000 ÷ 735 ≈ 8,163, so about 8,200 people per km² (often quoted as about 8,000). 820 and 82,000 come from slipping a place value. The tiny decimal comes from dividing area by population — that gives km² per person.",
        difficulty: "core",
        guideRef: "population-density",
        hints: [
          "Density = population ÷ area.",
          "Estimate first: 6,000,000 ÷ 700 is a bit less than 9,000.",
          "Choose the option closest to your estimate.",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q07",
        question: "Look at the world map. Which statement about the pattern of densely populated areas is correct?",
        diagram: worldMap,
        options: [
          "Most densely populated areas are south of the Equator.",
          "Most densely populated areas are in the Northern Hemisphere.",
          "Densely populated areas are spread evenly across every continent.",
          "The interiors of large continents, such as Australia, are the most densely populated.",
        ],
        answerIndex: 1,
        explanation:
          "Almost every red area — East Asia, South Asia, Europe, the north-east USA, the Nile valley and West Africa — lies north of the Equator; only Java and south-east Brazil are south of it. Roughly 90% of people live in the Northern Hemisphere. Central Australia is labelled as sparsely populated, so the 'interiors' option is the reverse of the truth.",
        difficulty: "core",
        guideRef: "world-distribution",
        hints: [
          "Find the Equator (the dashed line labelled Equator).",
          "Count the red areas above and below it.",
        ],
        strategy: "CLOCC (Continents, Lines of latitude, Oceans, Countries, Compass)",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q08",
        question: "Why is the Sahara Desert so sparsely populated?",
        options: [
          "It is too cold to grow crops for most of the year.",
          "Dense forest makes it hard to clear land.",
          "Its ground is permanently frozen.",
          "Very low rainfall means little water for drinking or farming.",
        ],
        answerIndex: 3,
        explanation:
          "The Sahara is a hot desert: most of it gets less than 250 mm of rain a year (much of it far less), so there is little water for people, crops or animals. People cluster only where water exists — oases and the Nile. Frozen ground (permafrost) belongs to cold places such as northern Canada and Siberia, not the Sahara.",
        difficulty: "core",
        guideRef: "physical-factors",
        hints: [
          "What does every person, plant and animal need every day?",
          "Deserts are defined by how little rain they get.",
        ],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q09",
        question: "About 6 million people live in Singapore at a density of about 8,000 per km². Which **human** factor best explains how so many people fit on so little land?",
        options: [
          "Most people live in large detached houses with gardens.",
          "Singapore has huge areas of empty farmland to build on.",
          "HDB plans high-rise flats in new towns, built together with MRT lines, schools and shops.",
          "The government stops anyone moving into new towns.",
        ],
        answerIndex: 2,
        explanation:
          "The Housing & Development Board builds high-rise flats, so many households share a small footprint of land, and each new town (e.g. Tampines, Punggol) is planned with transport and services. Detached houses would do the opposite — they use lots of land per family.",
        difficulty: "core",
        guideRef: "human-factors",
        hints: [
          "If land is scarce, which direction can you build?",
          "Think about who plans Singapore's housing estates.",
        ],
        strategy: "Use the command word",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q10",
        question: "About 95% of Egypt's people live on about 5% of its land. Which combination of factors best explains this?",
        options: [
          "Water and fertile alluvial soil from the Nile, plus cities, jobs and transport that grew up along the river",
          "Cool temperatures in the Nile valley and high mountains in the desert",
          "Rich farming soils in the desert, but no roads to reach them",
          "Heavy rainfall across the Sahara that floods land away from the river",
        ],
        answerIndex: 0,
        explanation:
          "The Nile gives water and fertile alluvium in a desert (physical), and thousands of years of settlement built Cairo, jobs and transport along it (human). The desert does **not** have rich soils waiting to be used — it lacks water, which is why people stay by the river.",
        difficulty: "core",
        guideRef: "explaining-distribution",
        hints: [
          "Egypt is almost all desert. What does the Nile provide that the desert lacks?",
          "The best answer combines a physical AND a human reason.",
        ],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q11",
        question: "The choropleth map shows population density on the imaginary island of Teluk. Using the key, which district has the **highest** population density?",
        diagram: telukMap,
        options: ["District A", "District E", "District C", "District F"],
        answerIndex: 3,
        explanation:
          "On a choropleth map, darker shading = higher density. District F is the darkest (500 or more people per km²) — it has the port at the river mouth. District A is the palest shade (0–9), so choosing it means reading the key backwards. E and C are in the 100–499 class: dense, but not the densest.",
        difficulty: "core",
        guideRef: "population-density",
        hints: [
          "Read the key first: which shade means the most people per km²?",
          "Now find that shade on the map.",
        ],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q12",
        question: "Which list contains **only** physical factors?",
        options: [
          "Relief, jobs, climate",
          "Relief, climate, soil fertility",
          "Transport links, soil, water supply",
          "Services, government policy, rainfall",
        ],
        answerIndex: 1,
        explanation:
          "Relief (the shape and height of the land), climate and soil fertility are all natural. Each other list hides a human factor: jobs, transport links, services or government policy.",
        difficulty: "core",
        guideRef: "physical-factors",
        hints: [
          "Check every word in each list — one human factor spoils the list.",
          "Jobs, transport, services and government are all made by people.",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q13",
        question: "Country P has 50 million people and an area of 500,000 km². Country Q has 5 million people and an area of 25,000 km². Q's population then grows by 50%, while P's population and both areas stay the same. Which statement is now correct?",
        options: [
          "P is still more densely populated, because it has far more people.",
          "Q becomes twice as densely populated as P.",
          "Q becomes three times as densely populated as P.",
          "Q becomes two and a half times as densely populated as P.",
        ],
        answerIndex: 2,
        explanation:
          "P: 50,000,000 ÷ 500,000 = 100 people per km². Q after growth: 5,000,000 × 1.5 = 7,500,000, and 7,500,000 ÷ 25,000 = 300 people per km². 300 ÷ 100 = 3, so Q becomes three times as dense. 'Twice as dense' is Q's density before the growth (200), and 'more people = more crowded' ignores area altogether.",
        difficulty: "challenge",
        guideRef: "population-density",
        hints: [
          "Work out P's density, then Q's population after a 50% rise.",
          "Q's new population = 5,000,000 × 1.5. Now divide each population by its area.",
          "Compare 100 with Q's new density: how many times bigger?",
        ],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q14",
        question: "Which example best shows **technology** making a physical factor less important in deciding where people live?",
        options: [
          "Desalination and air-conditioning helping large cities such as Dubai grow in a hot desert",
          "People avoiding the high Himalayas because of steep slopes and cold",
          "Farmers using fertile Nile silt for thousands of years",
          "Antarctica having no permanent population because of extreme cold",
        ],
        answerIndex: 0,
        explanation:
          "Dubai relies heavily on desalinated seawater, and air-conditioning makes the heat bearable, so a big city exists where nature provides almost no fresh water. The Himalayas and Antarctica show physical factors still winning; the Nile example shows a physical factor helping, not technology overcoming one.",
        difficulty: "challenge",
        guideRef: "explaining-distribution",
        hints: [
          "Look for a place where people live **despite** a physical problem.",
          "Which option involves a machine or invention solving that problem?",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-distribution-m1-q15",
        question: "On a world choropleth map, the whole of Australia is shaded in the lowest class (fewer than 10 people per km²). What is the **main limitation** of showing Australia this way?",
        options: [
          "It shows the exact number of people in every town.",
          "It hides the fact that most Australians live in a few large coastal cities.",
          "A choropleth map cannot show areas of low density.",
          "It proves that almost nobody lives anywhere in Australia.",
        ],
        answerIndex: 1,
        explanation:
          "A choropleth gives one shade to a whole area, based on its average. Australia's average is about 3.5 people per km², but roughly 85% of Australians live within about 50 km of the coast, in cities such as Sydney and Melbourne. The map hides that pattern — it does not show exact numbers, and it certainly does not prove nobody lives there.",
        difficulty: "challenge",
        guideRef: "population-density",
        hints: [
          "A choropleth shades a whole area using one average value.",
          "Where do most Australians actually live?",
        ],
        strategy: "Spot the misconception",
      },
    ],
  },

  // ======================================================== MCQ Paper 2
  {
    id: "population-distribution-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "population-distribution-m2-q01",
        question: "What does **sparsely populated** mean?",
        options: [
          "Many people live close together in an area.",
          "The population is growing quickly.",
          "People have recently moved away from an area.",
          "Few people live in an area.",
        ],
        answerIndex: 3,
        explanation:
          "Sparse means thinly spread: few people per km². 'Many people close together' is the opposite — densely populated. Growth and migration describe change, not how spread out people are.",
        difficulty: "warmup",
        guideRef: "world-distribution",
        hints: ["Sparse is the opposite of dense."],
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q02",
        question: "Which type of land is usually the **easiest** to build settlements on and farm?",
        options: ["Steep mountain slopes", "Ice sheets", "Flat, low-lying land", "Dense rainforest"],
        answerIndex: 2,
        explanation:
          "Flat, low land is easy to build on, plough, irrigate and cross with roads and railways — so plains and valleys attract people. Steep slopes, ice and dense forest all make building and farming hard.",
        difficulty: "warmup",
        guideRef: "physical-factors",
        hints: ["Imagine building a road, a school and a rice field. Where would that be easiest?"],
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q03",
        question: "Which **human** factor is most likely to make people **leave** an area?",
        options: [
          "Conflict and political instability",
          "Fertile soil",
          "A good supply of jobs",
          "New hospitals and schools",
        ],
        answerIndex: 0,
        explanation:
          "War and unstable government destroy homes, jobs and services, so people flee and investment stops. Jobs, hospitals and schools are human factors too, but they attract people. Fertile soil is a physical factor.",
        difficulty: "warmup",
        guideRef: "human-factors",
        hints: ["Which option is both made by people AND a reason to move away?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q04",
        question: "Which of these countries has a very **high** population density (more than 1,000 people per km²)?",
        options: ["Mongolia", "Bangladesh", "Australia", "Canada"],
        answerIndex: 1,
        explanation:
          "Bangladesh has about 173 million people on about 148,000 km² — roughly 1,170 people per km². Mongolia (about 2), Australia (about 3.5) and Canada (about 4) are among the most sparsely populated countries in the world.",
        difficulty: "warmup",
        guideRef: "population-density",
        hints: ["Which country is a crowded river delta in South Asia?"],
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q05",
        question: "Which statement best explains why few people live high in the Himalayas?",
        options: [
          "The mountains are near the Equator, so they are too hot for crops.",
          "There are too many factory jobs for the number of workers.",
          "Rivers flood the highest peaks every year.",
          "Steep slopes, thin soils and low temperatures make farming and building difficult.",
        ],
        answerIndex: 3,
        explanation:
          "At high altitude it is cold (temperature falls about 6.5 °C for every 1,000 m), slopes are steep, soils are thin and air is thin, so farming, building and transport are hard. The 'too hot' option is a misconception — high mountains are cold, and the Himalayas are well north of the Equator.",
        difficulty: "core",
        guideRef: "physical-factors",
        hints: [
          "What happens to temperature as you climb higher?",
          "Think about relief, soil and climate together.",
        ],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q06",
        question: "The Amazon rainforest is hot and very wet all year, yet it is sparsely populated. Which is the **best** explanation?",
        options: [
          "Dense forest, leached (poor) soils and difficult access by land",
          "There is too little rain to grow crops.",
          "The winters are freezing.",
          "Its soils are the most fertile on Earth, so they are protected from farming.",
        ],
        answerIndex: 0,
        explanation:
          "The forest is dense and hard to clear or cross, heavy rain washes nutrients out of the soil (leaching), so cleared land soon becomes poor, and there are few roads. The tempting misconception is that a lush forest must have fertile soil — in fact most nutrients are held in the plants, not the soil.",
        difficulty: "core",
        guideRef: "physical-factors",
        hints: [
          "Heavy rain soaks through the soil all year. What does that do to nutrients?",
          "How easy is it to build roads through dense forest?",
        ],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q07",
        question: "The dot map shows where people live in Australia. Which statement **best describes** the distribution?",
        diagram: australiaDots,
        options: [
          "People are spread evenly across the whole country.",
          "Most people live in the centre, around the desert.",
          "Most people live near the coast, especially in the south-east and east, while the interior is almost empty.",
          "Most people live in the north, around Darwin.",
        ],
        answerIndex: 2,
        explanation:
          "The dots cluster around the coastal cities of Brisbane, Sydney, Melbourne and Adelaide in the south-east and east, and Perth in the south-west — while the interior has almost none. Roughly 85% of Australians live within about 50 km of the coast. Darwin has only one dot, so the north is not the main cluster.",
        difficulty: "core",
        guideRef: "world-distribution",
        hints: [
          "Where are the dots bunched together?",
          "Use compass directions: which part of the coast has the most dots?",
        ],
        strategy: "CLOCC (Continents, Lines of latitude, Oceans, Countries, Compass)",
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q08",
        question: "Brazil opened a new capital city, Brasília, in its interior in 1960. What was the **main** aim?",
        options: [
          "To give the government better access to the sea",
          "To draw people and investment inland, away from the crowded coast",
          "To stop anyone from settling in the interior",
          "To move people up into the mountains to escape flooding",
        ],
        answerIndex: 1,
        explanation:
          "Most Brazilians lived near the south-east coast (São Paulo, Rio de Janeiro). Building the capital inland was government planning — a human factor — to pull people, roads and jobs into the interior. It did the opposite of keeping people out, and it moved the capital **away** from the sea, not towards it.",
        difficulty: "core",
        guideRef: "human-factors",
        hints: [
          "Where did most Brazilians live before 1960?",
          "A capital city brings government jobs, roads and services. Where would the government want those?",
        ],
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q09",
        question: "Australia has about 27,000,000 people and an area of about 7,690,000 km². Which is closest to its population density?",
        options: [
          "About 35 people per km²",
          "About 0.28 people per km²",
          "About 350 people per km²",
          "About 3.5 people per km²",
        ],
        answerIndex: 3,
        explanation:
          "27,000,000 ÷ 7,690,000 ≈ 3.51, so about 3.5 people per km². 0.28 comes from dividing the area by the population (7,690,000 ÷ 27,000,000), which gives km² per person. 35 and 350 are place-value slips.",
        difficulty: "core",
        guideRef: "population-density",
        hints: [
          "Population goes on top.",
          "Cancel the zeros: 27 ÷ 7.69.",
          "27 ÷ 7.69 is between 3 and 4.",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q10",
        question: "Bangladesh is densely populated even though it suffers floods and cyclones. Which **physical** factor attracts so many people to its Ganges–Brahmaputra delta?",
        options: [
          "A cold, dry climate that keeps crops free of disease",
          "High mountains that shelter the delta from cyclones",
          "Flat land with fertile alluvial soil and plenty of water for growing rice",
          "Thick ice that stores fresh water for the dry season",
        ],
        answerIndex: 2,
        explanation:
          "Rivers deposit fertile silt (alluvium) on the flat delta, and monsoon rain and rivers supply water, so rice can be grown intensively to feed many people. The delta is low and exposed — there are no high mountains sheltering it from cyclones, which is why cyclones are a danger.",
        difficulty: "core",
        guideRef: "physical-factors",
        hints: [
          "What do rivers leave behind when they flood?",
          "Which crop needs flat, wet, fertile land?",
        ],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q11",
        question: "Most Canadians live in the south of the country, fairly close to the border with the USA. Which pair of factors **best** explains this?",
        options: [
          "A milder climate in the south (physical) and jobs and trade links with the USA (human)",
          "Hot deserts in the north (physical) and more jobs in the Arctic (human)",
          "More fertile soil in the tundra (physical) and more roads in the far north (human)",
          "Heavier rainfall in the north (physical) and the capital city being in the Arctic (human)",
        ],
        answerIndex: 0,
        explanation:
          "Southern Canada has milder winters and a longer growing season, and its cities (Toronto, Montreal, Vancouver) have jobs and trade links with the USA. The north has long, very cold winters, permafrost and few roads. There are no hot deserts in northern Canada, and Ottawa — the capital — is in the south.",
        difficulty: "core",
        guideRef: "explaining-distribution",
        hints: [
          "What is the climate like in northern Canada?",
          "Which country is Canada's biggest trading partner, and where is it?",
        ],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q12",
        question: "A choropleth map uses this key:\n\n| Shade | People per km² |\n|---|---|\n| Palest | 0–9 |\n| Pale | 10–49 |\n| Medium | 50–99 |\n| Dark | 100–499 |\n| Darkest | 500 or more |\n\nThe district of Ash Vale has 36,000 people living in 450 km². Which shade should Ash Vale be given?",
        options: ["Pale (10–49)", "Medium (50–99)", "Dark (100–499)", "Darkest (500 or more)"],
        answerIndex: 1,
        explanation:
          "36,000 ÷ 450 = 80 people per km², which falls in the 50–99 class, so it is the medium shade. 'Dark' is tempting if you only glance at the large population — always calculate the density before choosing a class.",
        difficulty: "core",
        guideRef: "population-density",
        hints: [
          "Calculate the density first: population ÷ area.",
          "36,000 ÷ 450 = ?",
          "Which class contains 80?",
        ],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q13",
        question: "Roughly 90% of the world's people live in the Northern Hemisphere. Which is the **best** explanation?",
        options: [
          "Conditions south of the Equator are too harsh to support dense populations.",
          "Most of the Southern Hemisphere's land is the Antarctic ice sheet.",
          "Countries in the Southern Hemisphere all have much lower birth rates.",
          "Most of the world's land, including almost all of Asia, Europe and North America, is north of the Equator.",
        ],
        answerIndex: 3,
        explanation:
          "About two-thirds of the Earth's land is in the Northern Hemisphere, including the huge, fertile lowlands of Asia where most people live; the Southern Hemisphere is mostly ocean. 'Too harsh' is wrong because Java and south-east Brazil are densely populated south of the Equator. Antarctica is big, but it is well under half of the Southern Hemisphere's land, and many southern African countries have high, not low, birth rates.",
        difficulty: "challenge",
        guideRef: "world-distribution",
        hints: [
          "Test each option against a counter-example: are there any dense places south of the Equator?",
          "Is Antarctica really more than half of all southern land? Think of South America, southern Africa and Australia.",
          "People can only live on land — where is most of it?",
        ],
        strategy: "Think at different scales",
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q14",
        question: "Mongolia's average population density is only about 2 people per km², yet nearly half of its people live in one city, the capital Ulaanbaatar. Which statement **best** explains this pattern?",
        options: [
          "Ulaanbaatar has a warm tropical climate that attracts people.",
          "The Gobi Desert in the south has very fertile soil.",
          "The capital has jobs, services and housing, while harsh winters and dry grassland make it hard to make a living in the countryside.",
          "Nomadic herding needs everyone to live close together in one city.",
        ],
        answerIndex: 2,
        explanation:
          "Mongolia has long, bitterly cold winters and dry steppe and desert, which only support thinly spread herding. The capital offers jobs, schools and hospitals (human pull factors). Ulaanbaatar is often called the world's coldest capital, so a 'warm tropical climate' is wrong, and herding needs lots of land per family — it spreads people out rather than gathering them together.",
        difficulty: "challenge",
        guideRef: "explaining-distribution",
        hints: [
          "Think about what the countryside is like: climate and vegetation.",
          "Then think about what a capital city offers.",
          "The best answer combines a physical push and a human pull.",
        ],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-distribution-m2-q15",
        question: "Java in Indonesia is one of the most densely populated islands on Earth, even though it has many active volcanoes. Which is the **best** explanation?",
        options: [
          "Volcanic ash weathers into very fertile soils that support intensive farming.",
          "The volcanoes on Java are all extinct, so there is no danger.",
          "The volcanoes make the climate cold and dry, which suits rice.",
          "People are not allowed to leave the island.",
        ],
        answerIndex: 0,
        explanation:
          "Volcanic soils are rich in minerals, so farmers can grow several crops a year and feed many people — a physical factor that outweighs the hazard. The 'extinct' option is wrong: Java has active volcanoes such as Merapi, so people accept a real risk in return for fertile land.",
        difficulty: "challenge",
        guideRef: "physical-factors",
        hints: [
          "A hazard can still come with a benefit. What do eruptions leave behind?",
          "Think about what farmers need most.",
        ],
        strategy: "Weigh both sides then judge",
      },
    ],
  },

  // ======================================================== MCQ Paper 3
  {
    id: "population-distribution-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "population-distribution-m3-q01",
        question: "Which of these areas is the **most** sparsely populated?",
        options: ["Bangladesh", "Antarctica", "Java", "The Nile delta"],
        answerIndex: 1,
        explanation:
          "Antarctica has no permanent population — only scientists and support staff who stay for limited periods at research stations. Bangladesh, Java and the Nile delta are among the most densely populated places on Earth.",
        difficulty: "warmup",
        guideRef: "world-distribution",
        hints: ["Which place is covered by a huge ice sheet?"],
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q02",
        question: "Good transport links — ports, railways and motorways — attract people to an area mainly because they…",
        options: [
          "increase the amount of rainfall",
          "make the soil more fertile",
          "lower the temperature",
          "make it easier to trade, travel to work and reach services",
        ],
        answerIndex: 3,
        explanation:
          "Transport links connect people to jobs, markets and services, and businesses locate where goods can move easily — a human factor. Transport does not change rainfall, soil or temperature, which are physical factors.",
        difficulty: "warmup",
        guideRef: "human-factors",
        hints: ["Transport is about moving people and goods. Why would that matter to a family or a business?"],
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q03",
        question: "What are the units of population density?",
        options: ["People per km²", "km² per person", "People per year", "People per 1,000"],
        answerIndex: 0,
        explanation:
          "Density = population ÷ area, so its units are people per km². 'People per year' describes a rate of change, and 'per 1,000' is used for birth and death rates.",
        difficulty: "warmup",
        guideRef: "population-density",
        hints: ["Density compares people with area."],
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q04",
        question: "Which type of climate usually attracts the most people?",
        options: [
          "Polar: very cold all year",
          "Hot desert: very little rain",
          "Temperate: mild temperatures and reliable rainfall",
          "High mountain: cold with thin air",
        ],
        answerIndex: 2,
        explanation:
          "A temperate climate is comfortable and gives a long growing season with reliable water, so farming is easy. Polar, hot desert and high mountain climates are all extreme — too cold or too dry for easy farming.",
        difficulty: "warmup",
        guideRef: "physical-factors",
        hints: ["Which climate is neither extreme heat, extreme cold nor extreme drought?"],
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q05",
        question: "The table shows four regions of a country.\n\n| Region | Population | Area (km²) |\n|---|---|---|\n| North | 120,000 | 2,000 |\n| East | 900,000 | 3,000 |\n| South | 50,000 | 100 |\n| West | 1,500,000 | 10,000 |\n\nWhich region is the **most densely** populated?",
        options: ["West", "South", "East", "North"],
        answerIndex: 1,
        explanation:
          "Densities: North 120,000 ÷ 2,000 = 60; East 900,000 ÷ 3,000 = 300; South 50,000 ÷ 100 = 500; West 1,500,000 ÷ 10,000 = 150 people per km². South has the fewest people but the highest density. West is the tempting wrong answer because it has the most people — but it is also the largest region.",
        difficulty: "core",
        guideRef: "population-density",
        hints: [
          "Don't pick the biggest population — calculate each density.",
          "Population ÷ area for each row.",
          "Compare 60, 300, 500 and 150.",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q06",
        question: "Study the sketch map of Egypt. Which statement is **supported by the map**?",
        diagram: egyptMap,
        options: [
          "People are spread evenly across the Western Desert.",
          "Most people live along the Red Sea coast.",
          "The south-west of Egypt is the most densely populated part.",
          "People are concentrated in a narrow strip along the Nile and in the delta near the Mediterranean.",
        ],
        answerIndex: 3,
        explanation:
          "The red (densely populated) shading follows the Nile from Aswan north through Luxor to Cairo and spreads into the delta by the Mediterranean Sea. The Western Desert, the south-west and the Red Sea coast are shown as desert — very sparsely populated.",
        difficulty: "core",
        guideRef: "world-distribution",
        hints: [
          "Read the key first: which colour shows dense population?",
          "Trace where that colour runs across the map.",
        ],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q07",
        question: "The table shows climate data for four places.\n\n| Place | Rainfall (mm per year) | Warmest month (°C) | Coldest month (°C) |\n|---|---|---|---|\n| P | 25 | 35 | 14 |\n| Q | 800 | 18 | 5 |\n| R | 1,500 | 29 | 24 |\n| S | 600 | 22 | −2 |\n\nWhich place is **most likely** to be sparsely populated because of a lack of water?",
        options: ["P", "Q", "R", "S"],
        answerIndex: 0,
        explanation:
          "P gets only 25 mm of rain a year — far below the 250 mm that defines a hot desert — so there is almost no water for drinking or farming. S is tempting because −2 °C sounds cold, but 600 mm of rain is plenty and a cool winter does not stop farming in summer.",
        difficulty: "core",
        guideRef: "physical-factors",
        hints: [
          "The question is about water, so look at the rainfall column first.",
          "Hot deserts get less than 250 mm a year.",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q08",
        question: "Which is the best example of **history of settlement** as a human factor?",
        options: [
          "The Himalayas are too steep to build on.",
          "Canada's far north has permafrost.",
          "Sydney grew from an early port where European settlers first landed, so later migrants also settled there.",
          "The Nile floods brought fertile silt to Egypt every year.",
        ],
        answerIndex: 2,
        explanation:
          "Once a port or city is founded, it builds up jobs, roads and services, so later migrants keep arriving — the past shapes today's pattern. Steep relief, permafrost and Nile silt are all physical factors.",
        difficulty: "core",
        guideRef: "human-factors",
        hints: [
          "'History' means something that people did in the past.",
          "Three options describe nature.",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q09",
        question: "Geographers explain distributions at different **scales**. Which explanation works at the **global** scale?",
        options: [
          "Families in a town live close to the railway station.",
          "Most people live in the Northern Hemisphere because most of the land is there.",
          "A new housing estate is built next to a factory.",
          "Houses in a valley are built on the sheltered, sunny side.",
        ],
        answerIndex: 1,
        explanation:
          "The Northern Hemisphere explanation covers the whole planet — that is the global scale. Railway stations, housing estates next to factories and sunny valley sides explain where people live within one town or valley — the local scale.",
        difficulty: "core",
        guideRef: "explaining-distribution",
        hints: [
          "Global = the whole world. Local = a town or valley.",
          "Which option talks about the whole planet?",
        ],
        strategy: "Think at different scales",
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q10",
        question: "A country's population doubles, but its area stays the same. What happens to its population density?",
        options: ["It halves.", "It stays the same.", "It increases four times.", "It doubles."],
        answerIndex: 3,
        explanation:
          "Density = population ÷ area. If the top number doubles and the bottom stays the same, the answer doubles. It would halve only if the **area** doubled with the same population.",
        difficulty: "core",
        guideRef: "population-density",
        hints: [
          "Try it with numbers: 100 people on 10 km², then 200 people on 10 km².",
          "Compare 10 per km² with 20 per km².",
        ],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q11",
        question: "Which sentence uses the **most precise evidence** when describing the world's population distribution?",
        options: [
          "About 59% of people live in Asia, with dense clusters in eastern China, India and Bangladesh.",
          "Lots of people live in some places and not many live in others.",
          "Asia has loads of people because it is really big.",
          "People live where it is nice.",
        ],
        answerIndex: 0,
        explanation:
          "It gives a figure (59%), a continent and named countries — exactly the CLOCC evidence examiners reward. The other sentences are vague, and 'because it is really big' tries to explain instead of describe (and size alone is not the reason).",
        difficulty: "core",
        guideRef: "world-distribution",
        hints: [
          "Good descriptions use figures and place names.",
          "Which sentence names continents and countries AND gives a number?",
        ],
        strategy: "CLOCC (Continents, Lines of latitude, Oceans, Countries, Compass)",
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q12",
        question: "Kalgoorlie is a town in the dry interior of Western Australia, far from the coast. Which factor best explains why a town grew there?",
        options: [
          "Very fertile soils for farming",
          "High, reliable rainfall",
          "Gold deposits — a natural resource — that attracted miners",
          "A sheltered natural harbour",
        ],
        answerIndex: 2,
        explanation:
          "Gold was discovered at Kalgoorlie in the 1890s, and mining jobs still keep the town going. A natural resource can attract people even to a harsh, dry place. It is inland and dry, so harbours, high rainfall and rich farmland are wrong.",
        difficulty: "core",
        guideRef: "physical-factors",
        hints: [
          "The area is dry and inland, so rule out options that need water or the sea.",
          "What could be found under the ground?",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q13",
        question: "Country K has 20 million people and an area of 400,000 km². 80% of its people live in a river valley that covers 4% of the land. What is the population density **in the valley**?",
        options: [
          "50 people per km²",
          "1,000 people per km²",
          "1,250 people per km²",
          "40 people per km²",
        ],
        answerIndex: 1,
        explanation:
          "People in the valley: 80% of 20,000,000 = 16,000,000. Valley area: 4% of 400,000 = 16,000 km². Density = 16,000,000 ÷ 16,000 = 1,000 people per km². 50 is the national average (20,000,000 ÷ 400,000). 1,250 comes from putting **all** 20 million people in the valley.",
        difficulty: "challenge",
        guideRef: "population-density",
        hints: [
          "You need two new numbers: the valley's population and the valley's area.",
          "80% of 20,000,000 and 4% of 400,000.",
          "Then divide people by area.",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q14",
        question: "A student writes: \"Bangladesh is densely populated because it is a poor country.\" What is the **main flaw** in this argument?",
        options: [
          "Bangladesh is actually sparsely populated.",
          "Poor countries always have low population densities.",
          "Bangladesh is dense because its climate is cold.",
          "It confuses density with wealth: density is explained by factors such as fertile delta soil and water, and rich places like Singapore are dense too.",
        ],
        answerIndex: 3,
        explanation:
          "Wealth does not decide density — Singapore is wealthy and far denser than Bangladesh, while Mongolia, a much less wealthy country, is very sparse. Bangladesh's density is explained by its flat, fertile, well-watered delta. 'Poor countries always have low densities' is wrong for the same reason: there is no simple rule linking wealth and density.",
        difficulty: "challenge",
        guideRef: "explaining-distribution",
        hints: [
          "Can you think of a rich country that is very densely populated?",
          "What physical factors attract people to the delta?",
        ],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-distribution-m3-q15",
        question: "The bar chart shows population density at different distances from the coast in an imaginary country. Which is the **best** explanation of the anomaly at 200–300 km?",
        diagram: transectBars,
        options: [
          "The coast is closer at that distance.",
          "Density always rises again far inland.",
          "A local factor, such as a mining town or an oasis, attracts people there.",
          "The anomaly proves the data must be wrong.",
        ],
        answerIndex: 2,
        explanation:
          "Density falls from 400 to 150 to 40 people per km² moving inland, then jumps to 90 at 200–300 km before falling to 5. An anomaly usually has a local cause — a resource (such as a mine), water (an oasis or river) or a city. 'Density always rises again inland' is wrong: the next bar falls to just 5.",
        difficulty: "challenge",
        guideRef: "explaining-distribution",
        hints: [
          "Describe the trend first (TEA: Trend, Evidence, Anomaly).",
          "Which bar breaks the trend?",
          "What could attract people to one inland area?",
        ],
        strategy: "Look for the anomaly",
      },
    ],
  },
];
