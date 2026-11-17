// Big Exam — Paper 2: Extreme Environments & Coasts (physical geography).
// 30 questions: Section A (Q1–15) extreme environments, Section B (Q16–30) coasts and reefs.
import type { ExamPaper } from "../types.ts";

// ---------------------------------------------------------------------------
// Shared resources
// ---------------------------------------------------------------------------

// Weather station A. Rainfall (left axis, 10 px per mm): J 10, F 8, M 6, A 4, M 2, J 0, J 0, A 0, S 0, O 2, N 6, D 10 (total 48 mm).
// Temperature (right axis, 5 px per °C): J 15, F 17, M 21, A 26, M 30, J 33, J 34, A 33, S 31, O 27, N 21, D 16.
const CLIMATE_GRAPH_A = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for weather station A. Rainfall bars, read on the left axis from 0 to 20 millimetres, are labelled: January 10, February 8, March 6, April 4, May 2, June to September no rain, October 2, November 6, December 10. The temperature line, read on the right axis from 0 to 40 degrees Celsius, is: January 15, February 17, March 21, April 26, May 30, June 33, July 34, August 33, September 31, October 27, November 21, December 16."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="22" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Weather station A</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="50" x2="420" y2="50"/><line x1="60" y1="75" x2="420" y2="75"/><line x1="60" y1="100" x2="420" y2="100"/><line x1="60" y1="125" x2="420" y2="125"/><line x1="60" y1="150" x2="420" y2="150"/><line x1="60" y1="175" x2="420" y2="175"/><line x1="60" y1="200" x2="420" y2="200"/><line x1="60" y1="225" x2="420" y2="225"/></g><g fill="#93c5fd" stroke="#1d4ed8" stroke-width="1"><rect x="65" y="150" width="20" height="100"/><rect x="95" y="170" width="20" height="80"/><rect x="125" y="190" width="20" height="60"/><rect x="155" y="210" width="20" height="40"/><rect x="185" y="230" width="20" height="20"/><rect x="335" y="230" width="20" height="20"/><rect x="365" y="190" width="20" height="60"/><rect x="395" y="150" width="20" height="100"/></g><g font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1d4ed8"><text x="75" y="146">10</text><text x="105" y="184">8</text><text x="135" y="186">6</text><text x="165" y="206">4</text><text x="195" y="226">2</text><text x="345" y="226">2</text><text x="375" y="186">6</text><text x="405" y="146">10</text></g><polyline points="75,175 105,165 135,145 165,120 195,100 225,85 255,80 285,85 315,95 345,115 375,145 405,170" fill="none" stroke="#dc2626" stroke-width="2.5"/><g fill="#dc2626"><circle cx="75" cy="175" r="3"/><circle cx="105" cy="165" r="3"/><circle cx="135" cy="145" r="3"/><circle cx="165" cy="120" r="3"/><circle cx="195" cy="100" r="3"/><circle cx="225" cy="85" r="3"/><circle cx="255" cy="80" r="3"/><circle cx="285" cy="85" r="3"/><circle cx="315" cy="95" r="3"/><circle cx="345" cy="115" r="3"/><circle cx="375" cy="145" r="3"/><circle cx="405" cy="170" r="3"/></g><g stroke="#1f2937" stroke-width="1.5"><line x1="60" y1="250" x2="420" y2="250"/><line x1="60" y1="50" x2="60" y2="250"/><line x1="420" y1="50" x2="420" y2="250"/></g><g font-size="11" font-family="sans-serif" text-anchor="end" fill="#1d4ed8"><text x="55" y="254">0</text><text x="55" y="204">5</text><text x="55" y="154">10</text><text x="55" y="104">15</text><text x="55" y="54">20</text></g><g font-size="11" font-family="sans-serif" text-anchor="start" fill="#dc2626"><text x="425" y="254">0</text><text x="425" y="229">5</text><text x="425" y="204">10</text><text x="425" y="179">15</text><text x="425" y="154">20</text><text x="425" y="129">25</text><text x="425" y="104">30</text><text x="425" y="79">35</text><text x="425" y="54">40</text></g><g font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937"><text x="75" y="266">J</text><text x="105" y="266">F</text><text x="135" y="266">M</text><text x="165" y="266">A</text><text x="195" y="266">M</text><text x="225" y="266">J</text><text x="255" y="266">J</text><text x="285" y="266">A</text><text x="315" y="266">S</text><text x="345" y="266">O</text><text x="375" y="266">N</text><text x="405" y="266">D</text></g><text x="20" y="150" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1d4ed8" transform="rotate(-90 20 150)">Rainfall (mm)</text><text x="462" y="150" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#dc2626" transform="rotate(90 462 150)">Temperature (°C)</text><rect x="120" y="280" width="14" height="10" fill="#93c5fd" stroke="#1d4ed8"/><text x="140" y="289" font-size="11" font-family="sans-serif" fill="#1f2937">rainfall (bars)</text><line x1="260" y1="285" x2="280" y2="285" stroke="#dc2626" stroke-width="2.5"/><text x="286" y="289" font-size="11" font-family="sans-serif" fill="#1f2937">temperature (line)</text></svg>`;

// Mountain cross-section, drawn to scale: 0 m at y = 280, 5,400 m at y = 40 (240 px for 5,400 m).
// Village at 1,400 m → y ≈ 218; freezing level at 3,400 m → y ≈ 129.
const MOUNTAIN = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a mountain. A village on the lower slope is at 1,400 metres with an air temperature of 13 degrees Celsius. The summit is at 5,400 metres. A dashed line part-way up the mountain marks the freezing level, labelled 0 degrees Celsius, with its height shown as a question mark. Above it the mountain is covered in snow."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><polygon points="20,280 300,40 460,280" fill="#d6d3d1" stroke="#334155" stroke-width="1.5"/><polygon points="196,129 300,40 359,129" fill="#e0f2fe" stroke="#334155" stroke-width="1"/><line x1="20" y1="280" x2="460" y2="280" stroke="#1f2937" stroke-width="1.5"/><line x1="145" y1="129" x2="400" y2="129" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="6 4"/><text x="60" y="124" font-size="12" font-family="sans-serif" fill="#0369a1">Freezing level</text><text x="60" y="139" font-size="12" font-family="sans-serif" fill="#0369a1">0 °C at ? m</text><g fill="#fecaca" stroke="#334155" stroke-width="1"><rect x="84" y="210" width="10" height="8"/><rect x="97" y="207" width="10" height="8"/><polygon points="83,210 89,204 95,210"/><polygon points="96,207 102,201 108,207"/></g><text x="20" y="196" font-size="12" font-family="sans-serif" fill="#1f2937">Village: 1,400 m</text><text x="20" y="211" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1f2937">13 °C</text><polygon points="300,34 295,44 305,44" fill="#1f2937"/><text x="310" y="40" font-size="12" font-family="sans-serif" fill="#1f2937">Summit: 5,400 m</text><text x="240" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Sea level (0 m)</text></svg>`;

// Coastal OS-style extract. Grid squares are 80 px. Eastings 41 (x 40) to 45 (x 360); northings 17 (y 260) to 20 (y 20).
// Lighthouse at (64,164) = 413182. Stack at (104,212) = 418176. Groynes in 4218. Caravan park in 4318. Spit in 4318–4418, salt marsh behind it.
const COAST_MAP = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OS-style map extract of a coast with eastings 41 to 45 along the bottom and northings 17 to 20 up the side. Land is in the north and the sea in the south. A headland with cliffs and a lighthouse is in square 4118, with a stack just offshore in square 4117. A beach runs east from the headland. Three groynes cross the beach in square 4218, each with extra sand piled on its west side. A caravan park is on the land in square 4318. Where the coast turns north into an estuary, a spit grows eastwards from the end of the beach across squares 4318 and 4418, ending in a hook that curves north, with salt marsh in the sheltered water behind it. An arrow shows the prevailing wind blowing from the south-west."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="40" y="20" width="320" height="240" fill="#bae6fd"/><polygon points="40,20 272,20 270,60 262,100 252,128 200,136 150,134 100,140 96,160 90,185 75,200 52,204 40,200" fill="#bbf7d0" stroke="#334155" stroke-width="1.2"/><polygon points="330,20 360,20 360,90 338,90 332,55" fill="#bbf7d0" stroke="#334155" stroke-width="1.2"/><polygon points="100,140 150,134 200,136 252,128 254,138 200,146 150,144 100,150" fill="#fde68a" stroke="#a16207" stroke-width="0.8"/><polygon points="252,128 290,132 320,130 334,124 340,112 346,114 342,130 330,140 290,142 254,138" fill="#fde68a" stroke="#a16207" stroke-width="0.8"/><polygon points="262,116 274,104 300,101 324,106 334,117 326,123 292,126 264,124" fill="#86efac" stroke="#166534" stroke-width="0.8"/><g stroke="#166534" stroke-width="1" fill="none"><path d="M280,116 l3,-5 l3,5"/><path d="M300,112 l3,-5 l3,5"/><path d="M318,116 l3,-5 l3,5"/></g><g fill="#fbbf24"><polygon points="121,147 135,139 135,153"/><polygon points="146,146 160,138 160,152"/><polygon points="171,146 185,138 185,152"/></g><g stroke="#1f2937" stroke-width="2.5"><line x1="135" y1="134" x2="135" y2="158"/><line x1="160" y1="133" x2="160" y2="157"/><line x1="185" y1="133" x2="185" y2="157"/></g><g stroke="#7c2d12" stroke-width="1.5"><path d="M98,145 l-5,2 M96,160 l-5,1 M93,173 l-5,1 M88,186 l-5,0 M78,197 l-3,4 M62,202 l0,5"/></g><circle cx="104" cy="212" r="5" fill="#a8a29e" stroke="#334155"/><polygon points="64,157 58,168 70,168" fill="#dc2626" stroke="#7f1d1d"/><g fill="#ffffff" stroke="#334155" stroke-width="0.8"><rect x="210" y="108" width="7" height="4"/><rect x="221" y="108" width="7" height="4"/><rect x="210" y="116" width="7" height="4"/><rect x="221" y="116" width="7" height="4"/></g><line x1="150" y1="245" x2="186" y2="209" stroke="#1f2937" stroke-width="2"/><polygon points="192,203 182,207 188,213" fill="#1f2937"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="43" y="178" font-size="9">Lighthouse</text><text x="112" y="216">Stack</text><text x="206" y="118" text-anchor="end">Caravan park</text><text x="140" y="172">Beach</text><text x="282" y="158">Spit</text><text x="276" y="96">Salt marsh</text><text x="282" y="50">Estuary</text><text x="150" y="60">Farmland</text><text x="250" y="232">Sea</text><text x="120" y="256">Prevailing wind (from SW)</text></g><g stroke="#334155" stroke-width="1" stroke-opacity="0.7"><line x1="120" y1="20" x2="120" y2="260"/><line x1="200" y1="20" x2="200" y2="260"/><line x1="280" y1="20" x2="280" y2="260"/><line x1="40" y1="100" x2="360" y2="100"/><line x1="40" y1="180" x2="360" y2="180"/></g><rect x="40" y="20" width="320" height="240" fill="none" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="40" y="276">41</text><text x="120" y="276">42</text><text x="200" y="276">43</text><text x="280" y="276">44</text><text x="360" y="276">45</text></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="end"><text x="34" y="264">17</text><text x="34" y="184">18</text><text x="34" y="104">19</text><text x="34" y="26">20</text></g><text x="200" y="296" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#334155">Eastings (1 square = 1 km)</text><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="372" y="34" font-weight="bold">Key</text><polygon points="380,42 375,52 385,52" fill="#dc2626"/><text x="392" y="51">Lighthouse</text><circle cx="380" cy="64" r="5" fill="#a8a29e" stroke="#334155"/><text x="392" y="68">Stack</text><line x1="380" y1="76" x2="380" y2="90" stroke="#1f2937" stroke-width="2.5"/><text x="392" y="87">Groyne</text><rect x="374" y="98" width="12" height="9" fill="#fde68a" stroke="#a16207"/><text x="392" y="106">Sand / shingle</text><rect x="374" y="116" width="12" height="9" fill="#86efac" stroke="#166534"/><text x="392" y="124">Salt marsh</text><rect x="374" y="134" width="7" height="4" fill="#ffffff" stroke="#334155"/><text x="392" y="140">Caravans</text><path d="M374,152 l8,0 M374,156 l8,0" stroke="#7c2d12" stroke-width="1.5"/><text x="392" y="158">Cliffs</text><line x1="420" y1="210" x2="420" y2="180" stroke="#1f2937" stroke-width="2"/><polygon points="420,172 415,182 425,182" fill="#1f2937"/><text x="420" y="225" text-anchor="middle" font-weight="bold">N</text></g></svg>`;

export const paper: ExamPaper = {
  id: "exam-c1",
  title: "Paper 2 — Extreme Environments & Coasts (physical geography)",
  calculator: true,
  minutes: 60,
  questions: [
    // =================== SECTION A: EXTREME ENVIRONMENTS ===================
    {
      kind: "mcq",
      id: "exam-c1-q01",
      topicId: "extreme-climates",
      question: "Most of Antarctica is buried under ice up to several kilometres thick, yet geographers call it a **desert**. Why?",
      options: [
        "It is extremely cold all year round",
        "It has almost no plants or land animals",
        "It receives very little precipitation — under about 50 mm a year in the interior, far below the 250 mm a year that defines a desert",
        "There is sand and bare rock underneath the ice sheet",
      ],
      answerIndex: 2,
      explanation:
        "A desert is defined by **low precipitation** (under 250 mm a year), not by heat or sand. Cold air holds very little moisture, so the Antarctic interior gets under about 50 mm a year — as dry as many hot deserts. 'Extremely cold' is true, but cold alone does not make a desert: plenty of cold places get lots of snow. The ice is thick because almost none of it melts, so thousands of years of small snowfalls have piled up.",
      difficulty: "warmup",
      guideRef: "polar-climate",
      hints: ["What single measurement is used to decide whether a place is a desert — temperature, or something else?"],
      strategy: "Spot the misconception",
    },
    {
      kind: "short",
      id: "exam-c1-q02",
      topicId: "extreme-climates",
      question:
        "Study the climate graph for weather station A. Each rainfall bar is labelled with its value; months with no bar had no rain.\n\nCalculate the **total annual rainfall** at station A, in mm.",
      diagram: CLIMATE_GRAPH_A,
      answer: { type: "number", value: 48, display: "48 mm" },
      traps: [
        { spec: { type: "number", value: 4 }, feedback: "4 mm is the mean monthly rainfall (48 ÷ 12). The total is all twelve months added together." },
        { spec: { type: "number", value: 10 }, feedback: "10 mm is just the wettest month. Add up every bar to get the year's total." },
      ],
      solution: [
        "Rainfall is shown by the bars (left axis, mm). Add all twelve months.",
        "Jan 10 + Feb 8 + Mar 6 + Apr 4 + May 2 = 30 mm",
        "Jun, Jul, Aug, Sep = 0 mm",
        "Oct 2 + Nov 6 + Dec 10 = 18 mm",
        "Total = 30 + 18 = **48 mm** a year.",
      ],
      commonError: "Reading the temperature line instead of the rainfall bars, or forgetting the months at the end of the year.",
      difficulty: "warmup",
      guideRef: "climate-graphs",
      hints: ["Rainfall is the bars, not the line. Add every month — even the small ones in October and November."],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "exam-c1-q03",
      topicId: "geo-skills",
      question:
        "Use the climate graph for weather station A again. What **percentage** of station A's annual rainfall falls in the three months **December, January and February**?\n\nGive your answer to 1 decimal place.",
      diagram: CLIMATE_GRAPH_A,
      answer: { type: "number", value: 58.3, tolerance: 0.05, display: "58.3%" },
      traps: [
        { spec: { type: "number", value: 28 }, feedback: "28 mm is the rainfall in those three months — now turn it into a percentage of the 48 mm total." },
        { spec: { type: "number", value: 171.4, tolerance: 0.1 }, feedback: "You divided the total by the part. Percentage = part ÷ whole × 100, so 28 ÷ 48 × 100." },
        { spec: { type: "number", value: 41.7, tolerance: 0.05 }, feedback: "That is December and January only. Remember to include February (8 mm)." },
      ],
      solution: [
        "Rain in Dec + Jan + Feb = 10 + 10 + 8 = 28 mm.",
        "Annual total = 48 mm.",
        "    percentage = 28 ÷ 48 × 100 = 58.33…",
        "= **58.3%** (1 d.p.) — well over half the year's rain falls in just three winter months.",
      ],
      commonError: "Dividing by 12 (the number of months) instead of by the annual total.",
      difficulty: "core",
      guideRef: "graphs-and-charts",
      hints: [
        "First find the rainfall in those three months, then the total for the whole year.",
        "A percentage of a whole is (part ÷ whole) × 100.",
        "The part is 10 + 10 + 8 mm; the whole is the annual total.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-c1-q04",
      topicId: "extreme-climates",
      question:
        "Use the climate graph for weather station A. **Describe** the climate of station A and use evidence from the graph to show that it is a **hot desert** climate. [4 marks]",
      diagram: CLIMATE_GRAPH_A,
      marks: 4,
      modelAnswer:
        "Station A has very hot summers: the temperature rises to a peak of about 34 °C in July and stays at or above 30 °C from May to September. Winters are mild rather than cold, with the lowest temperature about 15 °C in January, giving an annual range of about 19 °C. The most important evidence is the rainfall: the total is only 48 mm a year, far below the 250 mm a year that defines a desert, so with summer temperatures over 30 °C it is a hot desert. The little rain that falls is seasonal — it comes between October and May, peaking at 10 mm in December and January, and June to September are completely dry. The hottest months are June to August, so the station is probably in the northern hemisphere.",
      markScheme: [
        { point: "Hot summers with a figure: peak about 34 °C in July (30 °C or more May–September)", keywords: ["34", "july", "hot summer", "30", "summer"] },
        { point: "Mild winters / annual range with figures: lowest about 15 °C in January, range about 19 °C", keywords: ["15", "january", "range", "19", "mild", "winter"] },
        { point: "Very low total rainfall (48 mm) compared with the 250 mm desert threshold", keywords: ["48", "250", "under 250", "less than 250", "very dry", "low rainfall"] },
        { point: "Rainfall is seasonal: falls October–May (max 10 mm Dec/Jan), June–September dry", keywords: ["june", "september", "dry season", "no rain", "winter rain", "seasonal", "december"] },
      ],
      commonError: "Describing without figures, or saying 'it never rains' — 48 mm does fall, just not much.",
      difficulty: "core",
      guideRef: "hot-desert-climate",
      hints: [
        "Use TEA: describe the temperature pattern, then the rainfall pattern, quoting months and figures.",
        "What is the highest and lowest temperature, and in which months?",
        "Compare the total rainfall with the figure that defines a desert.",
      ],
      strategy: "TEA (Trend, Evidence, Anomaly)",
    },
    {
      kind: "short",
      id: "exam-c1-q05",
      topicId: "extreme-climates",
      question:
        "Study the mountain cross-section. A village at **1,400 m** has an air temperature of **13 °C**. Assume the temperature falls by **6.5 °C for every 1,000 m** of height.\n\nAt what height above sea level is the **freezing level** (where the temperature reaches 0 °C)? Give your answer in metres.",
      diagram: MOUNTAIN,
      answer: { type: "number", value: 3400, display: "3,400 m" },
      traps: [
        { spec: { type: "number", value: 2000 }, feedback: "2,000 m is how far you climb ABOVE THE VILLAGE. The village is already 1,400 m above sea level — add it on." },
        { spec: { type: "number", value: -13 }, feedback: "−13 °C is the temperature at the summit. The question asks for a height, in metres." },
      ],
      solution: [
        "The temperature must fall by 13 °C (from 13 °C to 0 °C).",
        "    height climbed = 13 ÷ 6.5 × 1,000 = 2 × 1,000 = 2,000 m",
        "That is 2,000 m above the village, which is itself at 1,400 m.",
        "    freezing level = 1,400 + 2,000 = **3,400 m** above sea level",
        "Check: from 3,400 m to the summit at 5,400 m is another 2,000 m, so the summit is about 0 − 13 = −13 °C — which is why it is snow-covered.",
      ],
      commonError: "Working out the height above the village and forgetting to add the village's own height.",
      difficulty: "challenge",
      guideRef: "mountain-climate",
      hints: [
        "How many degrees must the temperature fall to get from the village to 0 °C?",
        "Each 6.5 °C of cooling needs 1,000 m of climbing. How many lots of 6.5 °C are in that drop?",
        "Your answer so far is the height above the village. Where does the village start?",
      ],
      strategy: "Work it out from the map",
    },
    {
      kind: "mcq",
      id: "exam-c1-q06",
      topicId: "extreme-weather",
      question:
        "The seas around Singapore are warm all year (about 28–30 °C), yet Singapore almost never experiences tropical storms (typhoons). What is the main reason?",
      options: [
        "Singapore lies only about 1° north of the Equator, where the Coriolis effect is too weak to make a storm spin",
        "The sea around Singapore is too cold for tropical storms to form",
        "The mountains of Sumatra block every storm before it can reach Singapore",
        "Tropical storms only form over land, and Singapore is surrounded by sea",
      ],
      answerIndex: 0,
      explanation:
        "Tropical storms need the **Coriolis effect** to set the rising air spinning, and it is almost zero near the Equator — so storms usually form about 5–30° from it. Singapore, at about 1°N, is too close. The sea is certainly warm enough (well above 26.5 °C), so 'too cold' is wrong. A very rare exception, Typhoon Vamei (December 2001), formed unusually close to the Equator just east of Singapore. Sumatra's mountains do not block storms — in fact Singapore's Sumatra squalls arrive from that direction.",
      difficulty: "core",
      guideRef: "tropical-storms",
      hints: [
        "List the conditions a tropical storm needs. Which one does Singapore fail?",
        "Singapore's sea is warm enough — so think about its latitude and what makes a storm spin.",
      ],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "exam-c1-q07",
      topicId: "extreme-weather",
      question:
        "Wei Ling reads her school's rain gauge in Singapore at 9 a.m. every day for one week in December (Northeast Monsoon). Her results are:\n\n| Day | Mon | Tue | Wed | Thu | Fri | Sat | Sun |\n|---|---|---|---|---|---|---|---|\n| Rainfall (mm) | 0 | 12 | 35 | 8 | 0 | 0 | 15 |\n\nCalculate the **mean daily rainfall** for the week, in mm.",
      answer: { type: "number", value: 10, display: "10 mm" },
      traps: [
        { spec: { type: "number", value: 17.5 }, feedback: "You divided by the 4 days that had rain. A dry day still counts as a day — divide by all 7." },
        { spec: { type: "number", value: 70 }, feedback: "70 mm is the total for the week. The mean is the total shared out over the number of days." },
        { spec: { type: "number", value: 35 }, feedback: "35 mm is the wettest day (and the range, 35 − 0). The question asks for the mean." },
      ],
      solution: [
        "Total = 0 + 12 + 35 + 8 + 0 + 0 + 15 = 70 mm",
        "    mean = total ÷ number of days = 70 ÷ 7 = **10 mm per day**",
        "Notice that no single day actually had 10 mm: three days were dry and one had 35 mm. Rainfall in Singapore comes in heavy bursts, so the mean hides a lot.",
      ],
      commonError: "Leaving out the days with 0 mm when dividing.",
      difficulty: "core",
      guideRef: "measuring-weather",
      hints: [
        "Mean = total ÷ number of values.",
        "How many days are in the table — including the dry ones?",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-c1-q08",
      topicId: "extreme-weather",
      question: "Explain how a tropical storm forms, and why it weakens once it reaches land. [6 marks]",
      marks: 6,
      modelAnswer:
        "Tropical storms form over oceans where the sea surface is at least about 26.5 °C, which causes rapid evaporation and a supply of warm, moist air. This air rises quickly, creating an area of very low pressure at the surface. As it rises it cools and the water vapour condenses into towering cumulonimbus clouds and torrential rain; condensation releases heat, which warms the air further so it rises even faster — this is the storm's 'engine'. Air rushes in across the sea surface to replace the rising air, and because the storm is about 5–30° from the Equator the Coriolis effect makes it spin (anticlockwise in the northern hemisphere); low wind shear lets the storm grow tall without being torn apart. In the centre, cool air sinks to form a calm, clear eye, surrounded by the eyewall where winds are strongest. When the storm reaches land it is cut off from its energy source, the warm, moist ocean air, and friction with the rougher land surface slows the winds, so it weakens and eventually dies out.",
      markScheme: [
        { point: "Warm sea of at least about 26.5 °C causes evaporation / supplies warm, moist air", keywords: ["26.5", "warm sea", "warm ocean", "evaporat", "moist"] },
        { point: "Warm air rises rapidly, creating very low pressure at the surface", keywords: ["rises", "rising", "low pressure"] },
        { point: "Rising air cools, condenses into cumulonimbus cloud/rain and releases heat that powers the storm", keywords: ["condens", "cumulonimbus", "cloud", "releases heat", "latent", "energy"] },
        { point: "Inflowing air is made to spin by the Coriolis effect (5–30° from Equator); low wind shear lets it grow", keywords: ["coriolis", "spin", "rotate", "5", "wind shear"] },
        { point: "Structure: calm eye of sinking air surrounded by an eyewall with the strongest winds", keywords: ["eye", "eyewall", "sinking", "calm"] },
        { point: "Over land it loses its supply of warm, moist air (energy) and friction slows it, so it weakens", keywords: ["land", "friction", "cut off", "no moisture", "loses energy", "no warm water", "weakens"] },
      ],
      commonError: "Saying storms form on the Equator — the Coriolis effect is too weak there.",
      difficulty: "challenge",
      guideRef: "tropical-storms",
      hints: [
        "Start with the energy source: what must the sea be like?",
        "Follow the air: it rises, cools, condenses — what does condensation release?",
        "Why does the air spin, and why not right on the Equator?",
        "Finally, what does the storm lose when it moves over land?",
      ],
      strategy: "Cause → process → effect",
    },
    {
      kind: "mcq",
      id: "exam-c1-q09",
      topicId: "extreme-weather",
      question:
        "At a weather station in southern England, the barometer reading falls steadily from 1012 hPa to 990 hPa over 12 hours. What weather is most likely on the way?",
      options: [
        "Calm, dry, settled weather as high pressure builds",
        "Hot sunshine, because falling pressure means the air is warming up",
        "No change — air pressure is not linked to the weather",
        "Cloud, rain and strengthening winds as a low-pressure system approaches",
      ],
      answerIndex: 3,
      explanation:
        "A falling barometer means a **low-pressure** system (a depression) is arriving. In a low, air rises, cools and condenses, giving cloud and rain, and the bigger the pressure difference the stronger the wind. 'Calm, dry, settled weather' is what **rising** pressure (a high, with sinking air) brings — the opposite of these readings.",
      difficulty: "warmup",
      guideRef: "forecasting",
      hints: ["Is the pressure rising or falling? Which system — high or low — brings rising air and cloud?"],
      strategy: "Cause → process → effect",
    },
    {
      kind: "mcq",
      id: "exam-c1-q10",
      topicId: "adaptations",
      question:
        "A camel stores most of its body fat in its **hump**, instead of in a layer spread all over its body. How does this help it survive in a hot desert?",
      options: [
        "The hump is really a water store, which the camel drinks from when there is no oasis",
        "The rest of the body has little insulating fat, so heat can escape easily through the skin",
        "The fat in the hump reflects sunlight away from the camel's back",
        "The heavy hump presses the camel's feet down so it does not sink into the sand",
      ],
      answerIndex: 1,
      explanation:
        "Fat is an insulator. Keeping it in one place means the rest of the camel's body is not wrapped in a warm 'blanket', so it can **lose heat** more easily — and the fat is still there to be broken down for energy when food is scarce. The 'water tank' idea is a famous myth: the hump holds fat, not water. Camels avoid sinking in sand because of their wide, padded feet, not the weight of the hump.",
      difficulty: "warmup",
      guideRef: "desert-adaptations",
      hints: ["Think about what fat does for animals in the cold — then ask why a desert animal would NOT want that all over its body."],
      strategy: "Spot the misconception",
    },
    {
      kind: "written",
      id: "exam-c1-q11",
      topicId: "adaptations",
      question:
        "The **black-tailed jackrabbit** of North American hot deserts has very long ears with many blood vessels close to the skin. The **Arctic hare** has much shorter ears and a compact, rounded body. Explain how these features help **each** animal survive in its environment. [4 marks]",
      marks: 4,
      modelAnswer:
        "The jackrabbit's long ears give it a very large surface area, so it can lose heat to the surrounding air and stay cool in desert temperatures that can pass 40 °C. The blood vessels close to the skin of the ears can widen, carrying warm blood to the surface where its heat escapes — a way of cooling down without sweating, which saves precious water in a dry desert. The Arctic hare has the opposite problem: its short ears and compact, rounded body give it a small surface area compared with its volume, so less body heat escapes into the freezing air. Short ears also have less exposed skin, so they are less likely to suffer frostbite, which helps the hare survive Arctic winters.",
      markScheme: [
        { point: "Jackrabbit: long ears = large surface area, so more heat is lost to the air (keeps cool)", keywords: ["surface area", "lose heat", "heat loss", "cool", "radiate"] },
        { point: "Jackrabbit: blood vessels near the surface carry warm blood to lose heat without sweating/losing water", keywords: ["blood vessels", "blood", "without sweating", "save water", "conserve water", "widen"] },
        { point: "Arctic hare: short ears/compact body = small surface area to volume, so less heat lost", keywords: ["small surface area", "less heat", "keep heat", "retain heat", "compact", "volume"] },
        { point: "Arctic hare: less exposed skin so less risk of frostbite / survives the cold", keywords: ["frostbite", "freeze", "exposed", "cold"] },
      ],
      commonError: "Saying the jackrabbit's ears 'let cool air in' — they work by letting heat OUT, through a large surface area.",
      difficulty: "core",
      guideRef: "what-is-adaptation",
      hints: [
        "Both features are about surface area. A big surface area does what to heat?",
        "What are the blood vessels in the ears for — and why is cooling this way better than sweating in a desert?",
        "Now flip it: why would a small surface area help in the Arctic?",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "written",
      id: "exam-c1-q12",
      topicId: "adaptations",
      question:
        "Ravi flies from Singapore (sea level) to Nepal and treks quickly up to 5,000 m with Pemba, a Sherpa guide who grew up in the Khumbu valley. Explain why Ravi is much more likely than Pemba to suffer from altitude sickness. [3 marks]",
      marks: 3,
      modelAnswer:
        "At 5,000 m the air pressure is much lower than at sea level (roughly half by about 5,500 m), so each breath Ravi takes contains much less oxygen, even though air is still about 21% oxygen. Ravi's body has not acclimatised: acclimatisation — breathing faster and slowly making more red blood cells — takes days to weeks, and by climbing quickly he has not given it time. Pemba's people have lived at high altitude for many generations and have inherited adaptations (for example breathing more and having good blood flow), and he is also already acclimatised from living high in the Khumbu, so his body copes with thin air far better.",
      markScheme: [
        { point: "Lower air pressure at altitude means less oxygen in each breath (not a lower % of oxygen)", keywords: ["pressure", "less oxygen", "thin air", "half"] },
        { point: "Ravi has not acclimatised — it takes days to weeks and he climbed too quickly", keywords: ["acclimatis", "acclimatiz", "too quickly", "too fast", "days", "weeks"] },
        { point: "Sherpa have inherited adaptations over generations and/or Pemba is already acclimatised", keywords: ["inherited", "generations", "genes", "already acclimatised", "adapted", "lived"] },
      ],
      commonError: "Saying 'there is less oxygen in the air' at altitude — the air is still about 21% oxygen; it is the pressure that drops.",
      difficulty: "core",
      guideRef: "mountain-adaptations",
      hints: [
        "What changes about the air as you go higher?",
        "How long does a body take to adjust to thin air, and did Ravi give it that time?",
        "Pemba has two advantages: one from his ancestors, one from where he lives now.",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "mcq",
      id: "exam-c1-q13",
      topicId: "living-in-extremes",
      question:
        "Traditional houses in many hot desert towns have very **thick mud-brick walls** and **small windows**. What is the main reason?",
      options: [
        "Thick walls stop moving sand dunes from burying the town",
        "The walls reflect all of the Sun's heat, so the house stays cold both day and night",
        "Thick walls heat up slowly by day and give out their heat at night, so the inside stays cooler by day and warmer at night",
        "Small windows let more wind blow through the house to cool it",
      ],
      answerIndex: 2,
      explanation:
        "Deserts have a huge **daily temperature range**: clear skies let in strong sunshine by day and let heat escape at night. Thick walls absorb heat slowly, so by the time the heat soaks through it is night — and that stored warmth is welcome. Small windows let in less direct sunlight. The walls do not reflect 'all' the heat (that would leave the house cold at night too), and small windows reduce, rather than increase, air flow.",
      difficulty: "core",
      guideRef: "difficulties-of-living",
      hints: [
        "What is unusual about desert temperatures across a full 24 hours?",
        "A thick wall acts like a slow store of heat. When does it take heat in, and when does it give it out?",
      ],
      strategy: "Cause → process → effect",
    },
    {
      kind: "short",
      id: "exam-c1-q14",
      topicId: "living-in-extremes",
      question:
        "Zara's group of **4 people** will walk for **3 days** across part of the Sahara with no wells or oases. Each person needs **6 litres** of water per day. The group adds a **25% safety reserve** on top of what they need. All the water is shared equally between **2 camels**. One litre of water weighs 1 kg.\n\nHow many kilograms of water does **each camel** carry?",
      answer: { type: "number", value: 45, display: "45 kg" },
      traps: [
        { spec: { type: "number", value: 36 }, feedback: "36 kg leaves out the 25% safety reserve. Work out the extra water before you split it between the camels." },
        { spec: { type: "number", value: 90 }, feedback: "90 kg is the total for the whole group. It is shared equally between 2 camels." },
        { spec: { type: "number", value: 18 }, feedback: "18 kg is only the reserve (25% of 72). Add it to the 72 kg the group needs." },
      ],
      solution: [
        "Water needed = 4 people × 6 L × 3 days = 72 L",
        "Safety reserve = 25% of 72 = 18 L, so total = 72 + 18 = 90 L (or 72 × 1.25 = 90)",
        "90 L of water weighs 90 kg.",
        "    per camel = 90 ÷ 2 = **45 kg**",
      ],
      commonError: "Forgetting to multiply by the number of days, or adding the reserve after splitting the load.",
      difficulty: "core",
      guideRef: "planning-an-expedition",
      hints: [
        "Start with how much the whole group drinks in the whole crossing.",
        "A 25% reserve means multiplying by 1.25 (or adding a quarter).",
        "Litres become kilograms one-for-one; then share between the camels.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-c1-q15",
      topicId: "living-in-extremes",
      question:
        "'Tourism in Antarctica is better managed, and more sustainable, than tourism on Mount Everest.' To what extent do you agree with this statement? [6 marks]",
      marks: 6,
      modelAnswer:
        "In some ways I agree. Antarctic tourism is tightly controlled: IAATO members allow no more than 100 visitors ashore at one site at a time, ships with more than 500 passengers may not land anyone, and boots and clothing are cleaned to stop invasive species arriving. Under the Antarctic Treaty (1959) and the Madrid Protocol, mining is banned and environmental protection is compulsory, and many visitors return home as 'ambassadors' for the continent. On Everest, by contrast, crowding on the summit route, litter, human waste and eroded trails remain serious problems, even though each climber must now bring down at least 8 kg of rubbish.\n\nHowever, Antarctica's rules are set by the tour operators' own association, and numbers keep rising — from about 46,000 visitors in 2007–08 to about 122,000 in 2023–24 — while every trip depends on long-haul flights and ships that burn fuel and emit carbon. Sustainability also has social and economic sides: Everest tourism gives jobs and income to Sherpa guides, porters and lodge owners in a poor mountain region, whereas Antarctica has no local community, and much of the money goes to cruise companies and gateway ports such as Ushuaia.\n\nOverall, I mostly agree for the environment: Antarctica's limits are stricter and better enforced at each site. But Everest's tourism benefits local people far more, so neither is fully sustainable, and Antarctica's advantage will shrink if visitor numbers keep growing.",
      markScheme: [
        { point: "Antarctica: strict IAATO limits (100 ashore, no landings from ships over 500 passengers, biosecurity)", keywords: ["100", "500", "iaato", "biosecurity", "clean boots", "ashore"] },
        { point: "Antarctica: Treaty/Madrid Protocol ban mining, protect environment; ambassador effect", keywords: ["treaty", "1959", "madrid", "mining", "ambassador"] },
        { point: "Everest: crowding, litter, human waste and eroded trails persist despite rules such as the 8 kg rubbish rule", keywords: ["litter", "rubbish", "waste", "crowd", "8 kg", "trail", "everest"] },
        { point: "Antarctica: rising numbers (about 46,000 to 122,000), emissions from flights/ships, self-regulated industry", keywords: ["46,000", "122,000", "rising", "emissions", "carbon", "fuel", "ships", "self"] },
        { point: "Everest brings jobs and income to local people (Sherpa guides, porters, lodges); Antarctica has no local community to benefit", keywords: ["jobs", "income", "sherpa", "porters", "lodges", "local people", "economic", "ushuaia"] },
        { point: "Justified conclusion weighing environmental vs social/economic sustainability", keywords: ["overall", "conclusion", "depends", "mostly", "partly", "therefore", "on balance"] },
      ],
      commonError: "Writing only about Antarctica, or only about the environment — 'sustainable' includes people and the economy too.",
      difficulty: "challenge",
      guideRef: "extreme-tourism",
      hints: [
        "Set up the comparison: what rules control visitors in each place?",
        "Use SEE: is one place more sustainable environmentally but the other socially or economically?",
        "Look for weaknesses in the Antarctic system too — numbers, emissions, who makes the rules.",
        "Finish with a judgement that says which kind of sustainability you are weighing most.",
      ],
      strategy: "Weigh both sides then judge",
    },

    // ======================= SECTION B: COASTS & REEFS ======================
    {
      kind: "mcq",
      id: "exam-c1-q16",
      topicId: "coastal-erosion",
      question: "A coast can be studied as a **system** with inputs, processes and outputs. Which of these is an **output**?",
      options: [
        "Energy from waves driven by the wind",
        "Sediment carried to the coast by rivers",
        "Longshore drift moving sand along the beach",
        "A spit built up by deposition",
      ],
      answerIndex: 3,
      explanation:
        "Outputs are the results of the system — the **landforms** it creates, such as a spit. Wave energy and river sediment are **inputs** (they enter the system), and longshore drift is a **process** (it moves material within it). Longshore drift is tempting because it is an action you can see, but an action is a process, not an output.",
      difficulty: "warmup",
      guideRef: "intro-to-coasts",
      hints: ["Inputs go in, processes happen inside, outputs are what the system produces. Which option is a finished result?"],
      strategy: "Eliminate options",
    },
    {
      kind: "written",
      id: "exam-c1-q17",
      topicId: "coastal-erosion",
      question:
        "Beach X faces the open ocean to the south-west, with thousands of kilometres of open water in front of it. Beach Y faces a narrow sea strait about 20 km wide. The prevailing wind at both beaches blows from the south-west.\n\nExplain why the waves at beach X are usually much larger. [2 marks]",
      marks: 2,
      modelAnswer:
        "Beach X has a much longer fetch — the distance of open water the wind blows over — than beach Y, where the fetch is only about 20 km. Over a longer fetch the wind has more distance and time to transfer energy to the water, so the waves grow bigger and more powerful before they reach the beach.",
      markScheme: [
        { point: "Beach X has a much longer fetch (distance of open water the wind blows over)", keywords: ["fetch", "open water", "distance", "longer"] },
        { point: "Wind transfers more energy to the water over a longer distance/time, so waves grow bigger", keywords: ["energy", "more time", "transfer", "bigger", "larger", "stronger"] },
      ],
      commonError: "Saying the wind is stronger at X — the question tells you the same prevailing wind blows at both.",
      difficulty: "warmup",
      guideRef: "waves",
      hints: ["The wind is the same at both beaches — so what is different about the water in front of them?"],
      strategy: "Compare and contrast",
    },
    {
      kind: "short",
      id: "exam-c1-q18",
      topicId: "coastal-erosion",
      question:
        "A survey team measures the distance from a fixed marker post to the edge of a soft boulder-clay cliff every five years:\n\n| Year | 2004 | 2009 | 2014 | 2019 | 2024 |\n|---|---|---|---|---|---|\n| Distance from post to cliff edge (m) | 62.0 | 54.5 | 47.0 | 40.5 | 32.0 |\n\nA house stands **13 m further inland** than the marker post. If the cliff keeps retreating at its **mean rate for 2004–2024**, in which **year** will the cliff edge reach the house?",
      answer: { type: "number", value: 2054, display: "2054" },
      traps: [
        { spec: { type: "number", value: 2045.3, tolerance: 0.5 }, feedback: "You used the 32 m from the cliff edge to the POST. The house is 13 m further inland, so it is 32 + 13 = 45 m from the edge." },
        { spec: { type: "number", value: 2032.7, tolerance: 0.5 }, feedback: "13 m is the gap between the post and the house — the cliff edge first has to reach the post, 32 m away. Total distance = 45 m." },
        { spec: { type: "number", value: 30 }, feedback: "30 is how many YEARS it takes. The question asks for the year: count on from 2024." },
        { spec: { type: "number", value: 2030 }, feedback: "You divided by 7.5 m — that is the retreat in a five-year gap, not in one year. The mean rate is 1.5 m per year." },
      ],
      solution: [
        "Mean rate of retreat = distance lost ÷ time = (62.0 − 32.0) ÷ (2024 − 2004) = 30 ÷ 20 = 1.5 m per year.",
        "Distance from the cliff edge to the house in 2024 = 32 + 13 = 45 m.",
        "    time = 45 ÷ 1.5 = 30 years",
        "Year = 2024 + 30 = **2054**.",
        "In reality, clay cliffs retreat in sudden slumps after storms and wet winters, not smoothly — so this is only an estimate.",
      ],
      commonError: "Forgetting the extra 13 m between the post and the house.",
      difficulty: "challenge",
      guideRef: "erosion-processes",
      hints: [
        "Step 1: find the mean rate of retreat in metres per year over the whole 20 years.",
        "Step 2: how far is the house from the cliff edge in 2024? Draw a quick line: edge — post — house.",
        "Step 3: distance ÷ rate gives years. Then turn years into a calendar year.",
      ],
      strategy: "Sketch it",
    },
    {
      kind: "written",
      id: "exam-c1-q19",
      topicId: "coastal-erosion",
      question:
        "Freeze–thaw weathering helps to break up sea cliffs in northern Scotland, but it never happens on Singapore's coast. Chemical weathering, on the other hand, is much faster in Singapore. Explain both of these differences. [4 marks]",
      marks: 4,
      modelAnswer:
        "Freeze–thaw needs temperatures that swing above and below 0 °C again and again, as they do on winter nights in northern Scotland. Rainwater or spray seeps into cracks, freezes and expands by about 9%, forcing the crack wider; when it thaws, more water gets in, and after many cycles pieces of rock break off the cliff. Singapore is hot all year — temperatures stay far above 0 °C — so water in its rocks never freezes and freeze–thaw cannot happen. Chemical weathering, however, is fastest in warm, wet climates: chemical reactions speed up in heat, and Singapore's heavy rainfall (well over 2,000 mm a year) supplies plenty of water and weak acid to attack the rock, so rocks there rot much faster than in cool Scotland.",
      markScheme: [
        { point: "Freeze–thaw needs repeated temperatures above and below 0 °C (as in Scottish winters)", keywords: ["0", "freezing", "below zero", "above and below", "winter", "frost"] },
        { point: "Water in cracks freezes, expands (about 9%), widens the crack; repeated cycles break rock off", keywords: ["expand", "9%", "crack", "repeated", "cycle", "breaks off"] },
        { point: "Singapore never gets close to 0 °C, so water never freezes there", keywords: ["never freezes", "hot all year", "always warm", "never below", "too warm", "tropical"] },
        { point: "Chemical weathering is faster with high temperatures and heavy rainfall (warm, wet climate)", keywords: ["warm", "wet", "heat speeds", "rainfall", "reactions", "faster", "acid"] },
      ],
      commonError: "Mixing up weathering and erosion — weathering breaks rock down in place; it does not need waves to carry anything away.",
      difficulty: "core",
      guideRef: "weathering",
      hints: [
        "What exact temperature condition does freeze–thaw need?",
        "Describe what water does in a crack when it freezes.",
        "For chemical weathering, think about what speeds up chemical reactions, and what Singapore has plenty of.",
      ],
      strategy: "Compare and contrast",
    },
    {
      kind: "short",
      id: "exam-c1-q20",
      topicId: "geo-skills",
      question: "Study the coastal map extract. Give the **six-figure grid reference** of the **lighthouse**.",
      diagram: COAST_MAP,
      answer: {
        type: "text",
        accept: ["413182", "412182", "414182", "413181", "413183", "412181", "412183", "414181", "414183"],
        display: "413182",
      },
      traps: [
        { spec: { type: "text", accept: ["182413"] }, feedback: "You gave the northing first. Along the corridor (eastings) BEFORE up the stairs (northings)." },
        { spec: { type: "text", accept: ["4118"] }, feedback: "4118 is the four-figure reference of the whole square. Add the tenths across and up to pin down the lighthouse itself." },
      ],
      solution: [
        "Find the square: the easting line to its left is 41 and the northing line below it is 18 → square 4118.",
        "Tenths across: the lighthouse is about 3 tenths east of line 41 → 413.",
        "Tenths up: it is about 2 tenths north of line 18 → 182.",
        "Six-figure reference = **413182** (easting first, then northing).",
      ],
      commonError: "Reading the northing first, or using the line to the right of the square instead of the left.",
      difficulty: "core",
      guideRef: "grid-references",
      hints: [
        "First find the four-figure square: line to the LEFT, then line BELOW.",
        "Split each side of the square into ten. How many tenths across, then how many tenths up?",
      ],
      strategy: "Work it out from the map",
    },
    {
      kind: "written",
      id: "exam-c1-q21",
      topicId: "coastal-landforms",
      question:
        "Study the coastal map extract. State the direction in which **longshore drift** moves sand along the beach in square 4218, and explain how evidence on the map shows this. [3 marks]",
      diagram: COAST_MAP,
      marks: 3,
      modelAnswer:
        "Longshore drift moves sand from west to east along this beach. The groynes in 4218 have sand piled up on their western side, which shows that sand is travelling eastwards and being trapped against each groyne. The spit also grows eastwards from the end of the beach across 4318 and 4418, and the prevailing wind from the south-west drives the swash up the beach at an angle towards the north-east, so each wave moves sediment a little further east.",
      markScheme: [
        { point: "Direction: west to east (eastwards)", keywords: ["west to east", "eastwards", "east", "towards the east"] },
        { point: "Sand builds up on the west (updrift) side of the groynes", keywords: ["groyne", "west side", "piled", "trapped", "built up", "updrift"] },
        { point: "Spit grows eastwards and/or the prevailing south-westerly wind pushes the swash north-east", keywords: ["spit", "south-west", "prevailing wind", "swash", "north-east", "angle"] },
      ],
      commonError: "Giving the direction of the backwash (straight down the beach) instead of the overall movement along the coast.",
      difficulty: "core",
      guideRef: "longshore-drift",
      hints: [
        "Look closely at the groynes. On which side has extra sand collected?",
        "Sand piles up on the side it is coming FROM. Which way is it heading?",
        "Two more clues: which way does the spit point, and where does the wind come from?",
      ],
      strategy: "Work it out from the map",
    },
    {
      kind: "written",
      id: "exam-c1-q22",
      topicId: "coastal-landforms",
      question: "Study the coastal map extract. Explain the formation of the **spit** shown in squares 4318 and 4418. [5 marks]",
      diagram: COAST_MAP,
      marks: 5,
      modelAnswer:
        "Longshore drift carries sand and shingle eastwards along the beach: the swash, driven by the prevailing south-westerly wind, pushes sediment up the beach at an angle and the backwash pulls it straight back down, so it zig-zags east. In square 4318 the coastline suddenly turns north into the estuary, but the drift carries on in the same direction and deposits material out into the sea. Here the water is calmer and more sheltered, so the waves lose energy and drop their sediment, gradually building a long, narrow ridge of sand and shingle out from the coast. At its end, changes in wind and wave direction (and waves bending around the tip) curve the spit landwards, forming the hooked end in 4418. Behind the spit the water is sheltered and calm, so fine silt and mud settle out and plants colonise it, forming the salt marsh.",
      markScheme: [
        { point: "Longshore drift moves sediment eastwards (angled swash, straight backwash)", keywords: ["longshore drift", "swash", "backwash", "zig-zag", "eastwards", "transport"] },
        { point: "Coastline changes direction (turns north at the estuary) but drift continues", keywords: ["changes direction", "turns", "bend", "estuary", "river mouth", "continues"] },
        { point: "Waves lose energy in calmer/sheltered water and deposit sediment, building a ridge out to sea", keywords: ["deposit", "lose energy", "calm", "sheltered", "ridge", "builds", "extends"] },
        { point: "Changing wind/wave direction or wave refraction curves the end into a hook", keywords: ["hook", "curve", "recurved", "wind direction", "refraction", "secondary wind"] },
        { point: "Sheltered water behind the spit lets mud/silt settle, forming salt marsh", keywords: ["salt marsh", "mud", "silt", "behind", "sheltered"] },
      ],
      commonError: "Saying the spit forms because the backwash carries sand along the coast — the backwash only goes straight down the beach.",
      difficulty: "core",
      guideRef: "depositional-landforms",
      hints: [
        "Start with the process that delivers the sand — which way is it moving here?",
        "What happens to the coastline in square 4318, and what does the drift do there?",
        "Why does the sediment get dropped, and how does the end become hooked?",
        "Finish with the green area behind the spit.",
      ],
      strategy: "Cause → process → effect",
    },
    {
      kind: "written",
      id: "exam-c1-q23",
      topicId: "coastal-landforms",
      question:
        "The stack at grid reference 418176 on the map was once part of the headland in square 4118. Explain the formation of a stack, and how it will eventually become a stump. [6 marks]",
      diagram: COAST_MAP,
      marks: 6,
      modelAnswer:
        "Headlands are made of more resistant rock, but they still contain lines of weakness such as joints and faults. Because waves bend (refract) around a headland, their energy is concentrated on its sides. Hydraulic action forces water and compressed air into a crack, and abrasion scrapes it with sand and pebbles, widening it into a cave. The cave is eroded deeper until it breaks through the headland (or two caves on opposite sides meet), forming an arch. Waves keep widening the base of the arch while weathering, such as freeze–thaw and salt crystallisation, weakens its roof from above, until the roof collapses, leaving an isolated pillar of rock — a stack, like the one at 418176. Finally, waves cut a notch at the base of the stack between high and low tide; it is undercut until it collapses, leaving a low stump that may only be visible at low tide.",
      markScheme: [
        { point: "Headland has lines of weakness (joints/faults); waves refract so energy concentrates on its sides", keywords: ["joint", "fault", "weakness", "crack", "refract", "bend", "concentrated"] },
        { point: "Hydraulic action and abrasion widen the crack into a cave", keywords: ["hydraulic", "abrasion", "cave", "widen"] },
        { point: "Cave is eroded through the headland (or two caves meet) to form an arch", keywords: ["arch", "through", "back to back", "meet"] },
        { point: "Base of arch widened by erosion and roof weakened by weathering (e.g. freeze–thaw)", keywords: ["weathering", "freeze", "thaw", "roof", "weakened", "salt"] },
        { point: "Arch roof collapses, leaving an isolated pillar — a stack", keywords: ["collapse", "stack", "pillar", "isolated"] },
        { point: "Stack undercut by a wave-cut notch at its base and collapses to leave a stump", keywords: ["notch", "undercut", "stump", "base", "low tide"] },
      ],
      commonError: "Mixing up the order (arch before cave) or forgetting that weathering from above helps the arch collapse.",
      difficulty: "challenge",
      guideRef: "cave-arch-stack",
      hints: [
        "Every stage needs a process. Start with what weakness in the rock the sea attacks first.",
        "Crack → ? → ? → stack → stump. Fill in the missing landforms in order.",
        "Erosion works from below; what works on the roof of the arch from above?",
        "How does the sea attack the bottom of the stack?",
      ],
      strategy: "Sketch it",
    },
    {
      kind: "written",
      id: "exam-c1-q24",
      topicId: "coastal-landforms",
      question:
        "Study the coastal map extract. The council built the groynes in square 4218 to protect the beach there. Since then, the owners of the caravan park in square 4318 say the beach in front of them has become narrower and the land behind it is eroding faster. Explain why. [4 marks]",
      diagram: COAST_MAP,
      marks: 4,
      modelAnswer:
        "Longshore drift moves sand from west to east along this coast. The groynes in 4218 are barriers across the beach that trap this sand on their western side, which is why the beach there has been protected. However, this means far less sand continues east (downdrift) to square 4318, so the beach in front of the caravan park is starved of new sediment and becomes narrower as waves carry its existing sand away. A narrow beach absorbs less of the waves' energy, so waves reach the land behind it with more force and erode it faster. The groynes have not removed the problem — they have moved it further along the coast, and less sand may reach the spit as well.",
      markScheme: [
        { point: "Groynes trap sand moved by longshore drift on their updrift (west) side", keywords: ["trap", "groyne", "longshore drift", "west side", "updrift"] },
        { point: "Less sediment reaches the beach downdrift (east) at 4318, so it is starved and narrows", keywords: ["less sand", "less sediment", "starved", "downdrift", "east", "narrower"] },
        { point: "A narrower beach absorbs less wave energy, so waves erode the land behind it faster", keywords: ["energy", "absorb", "protect", "erode", "erosion", "waves reach"] },
        { point: "The problem is moved along the coast rather than solved (spit may also receive less sand)", keywords: ["moved", "shifted", "further along", "knock-on", "elsewhere", "spit"] },
      ],
      commonError: "Saying the groynes 'block the waves' — groynes trap sand moving along the beach; they do not stop waves arriving.",
      difficulty: "core",
      guideRef: "coastal-management",
      hints: [
        "Which way does sand move along this beach? Where does it end up when it meets a groyne?",
        "If sand is held back in 4218, what happens to the supply reaching 4318?",
        "What job does a wide beach do for the land behind it?",
      ],
      strategy: "Cause → process → effect",
    },
    {
      kind: "mcq",
      id: "exam-c1-q25",
      topicId: "coral-reefs",
      question:
        "The coasts of Peru and northern Chile lie in the tropics (about 5–20°S), yet they have almost no coral reefs. What is the best explanation?",
      options: [
        "A cold ocean current and upwelling of cold, deep water keep the sea too cool for reef-building coral",
        "The water is too clear, so too much sunlight reaches the sea bed for coral to grow",
        "Being in the tropics, the water there is far too hot for coral to survive",
        "The sea is too salty because the Atacama Desert lies next to it",
      ],
      answerIndex: 0,
      explanation:
        "Reef-building coral needs water of roughly 18–29 °C. Along the west coast of South America the cold Humboldt (Peru) Current and upwelling of cold water from the deep ocean keep the sea much cooler than its latitude suggests — the same reason west coasts of continents generally have few reefs. 'Too clear' is a misconception: coral **needs** clear, sunlit water for its zooxanthellae to photosynthesise. Tropical latitude does not automatically mean too hot — most of the world's reefs are in the tropics.",
      difficulty: "challenge",
      guideRef: "where-reefs-grow",
      hints: [
        "List the conditions coral needs. Which one could fail even in the tropics?",
        "Think about ocean currents on the WEST coasts of continents.",
        "What does cold water rising from the deep ocean do to the sea temperature?",
      ],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "exam-c1-q26",
      topicId: "coral-reefs",
      question:
        "Scientists measured hard coral cover (the percentage of the sea bed covered by living hard coral) at one reef monitoring site:\n\n| Year | 2014 | 2015 | 2017 | 2021 |\n|---|---|---|---|---|\n| Hard coral cover (%) | 38 | 40 | 22 | 31 |\n\nA marine heatwave caused mass bleaching at the site in 2016. Calculate the **percentage decrease** in hard coral cover between **2015 and 2017**.",
      answer: { type: "number", value: 45, display: "45%" },
      traps: [
        { spec: { type: "number", value: 18 }, feedback: "18 is the fall in percentage POINTS (40 − 22). A percentage decrease compares that fall with the starting value: 18 ÷ 40 × 100." },
        { spec: { type: "number", value: 81.8, tolerance: 0.1 }, feedback: "You divided by the new value (22). Percentage change always divides by the ORIGINAL value, 40." },
        { spec: { type: "number", value: 55 }, feedback: "55% of the 2015 cover was left (22 ÷ 40). The decrease is the part that was lost: 100 − 55." },
      ],
      solution: [
        "Change = 22 − 40 = −18 percentage points (a fall of 18).",
        "    % decrease = 18 ÷ 40 × 100 = **45%**",
        "So almost half of the living hard coral at this site was lost in two years. By 2021 cover had partly recovered to 31%, showing that bleached reefs can recover if they get enough years without another heatwave.",
      ],
      commonError: "Giving the drop in percentage points (18) instead of the percentage decrease.",
      difficulty: "core",
      guideRef: "coral-bleaching",
      hints: [
        "Which two years does the question ask about? Ignore the others for now.",
        "Percentage change = change ÷ ORIGINAL value × 100.",
        "The original value is the 2015 cover.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-c1-q27",
      topicId: "coral-reefs",
      question:
        "Forest is cleared for new farms along a river that flows into the sea near a fringing reef. Explain how this could harm the reef. [4 marks]",
      marks: 4,
      modelAnswer:
        "Without trees and roots to hold it, the soil is washed off the bare land by heavy rain and carried down the river into the sea as sediment. The sediment makes the water cloudy, so less sunlight reaches the coral; the zooxanthellae living inside the polyps cannot photosynthesise as much, so the coral gets less food and becomes weaker. Sediment can also settle on the coral and smother the polyps. Fertiliser washed off the new farms adds nutrients to the sea, which feeds fast-growing algae and seaweed that can overgrow the coral, and nutrient-rich run-off is linked to outbreaks of coral-eating crown-of-thorns starfish.",
      markScheme: [
        { point: "Soil erosion from cleared land washes sediment down the river to the reef", keywords: ["soil", "erosion", "sediment", "washed", "run-off", "runoff", "river"] },
        { point: "Cloudy water blocks sunlight, so zooxanthellae photosynthesise less and coral gets less food", keywords: ["cloudy", "murky", "sunlight", "light", "photosynthes", "zooxanthellae"] },
        { point: "Sediment settles on and smothers the coral polyps", keywords: ["smother", "settles", "covers", "blocks"] },
        { point: "Fertiliser/nutrients cause algae to overgrow coral and/or crown-of-thorns outbreaks", keywords: ["fertiliser", "fertilizer", "nutrients", "algae", "seaweed", "crown-of-thorns", "starfish"] },
      ],
      commonError: "Treating it as a global threat like warming — this is a LOCAL threat that starts on land and reaches the reef through the river.",
      difficulty: "core",
      guideRef: "local-threats",
      hints: [
        "Follow the chain from land to sea: what happens to soil when trees are removed?",
        "What does muddy water do to the light reaching the coral — and why does coral need light?",
        "New farms also use something that washes into rivers. What does it feed in the sea?",
      ],
      strategy: "Cause → process → effect",
    },
    {
      kind: "mcq",
      id: "exam-c1-q28",
      topicId: "protecting-reefs",
      question:
        "At Sisters' Islands Marine Park, NParks grows coral fragments in underwater nurseries before transplanting them onto damaged reefs. What is the main reason for the nursery stage?",
      options: [
        "Nursery corals become immune to bleaching, so the restored reef can never bleach again",
        "Young fragments are protected, cleaned and checked until they are big enough to survive on the reef",
        "Coral fragments need fresh water to start growing, which the nursery provides",
        "Nursery corals are grown mainly to be sold to aquariums to pay for the park",
      ],
      answerIndex: 1,
      explanation:
        "Small fragments are easily smothered by sediment, eaten or knocked loose. In a nursery they grow on frames or tables where they are cleaned and monitored, and only the healthy, larger colonies are transplanted onto bare rock or rubble. Nursery corals are **not** immune to bleaching — restoration helps reefs recover, but it cannot stop marine heatwaves caused by global warming. Coral is a marine animal and needs salt water, not fresh.",
      difficulty: "core",
      guideRef: "protecting-reefs-elsewhere",
      hints: [
        "What dangers does a tiny coral fragment face on a damaged reef?",
        "Be wary of any option that promises a reef will 'never' be harmed again.",
      ],
      strategy: "Spot the misconception",
    },
    {
      kind: "short",
      id: "exam-c1-q29",
      topicId: "protecting-reefs",
      question:
        "The Great Barrier Reef Marine Park covers about **344,000 km²**. In the 2004 rezoning, the share of the park in green (no-take) zones rose from about **4.5%** to about **33%**.\n\nBy roughly how many km² did the area of green zones **increase**? Give your answer to the nearest thousand km².",
      answer: { type: "number", value: 98000, tolerance: 50, display: "98,000 km²" },
      traps: [
        { spec: { type: "number", value: 113520, tolerance: 600 }, feedback: "That is the total green-zone area AFTER 2004 (33% of the park). The question asks how much it increased, so subtract the area before 2004." },
        { spec: { type: "number", value: 28.5, tolerance: 0.1 }, feedback: "28.5 is the increase in percentage points. Turn it into an area: 28.5% of 344,000 km²." },
        { spec: { type: "number", value: 15480, tolerance: 600 }, feedback: "That is the green-zone area BEFORE 2004 (4.5% of the park). You need the increase." },
      ],
      solution: [
        "Increase in share = 33% − 4.5% = 28.5 percentage points.",
        "    increase in area = 28.5 ÷ 100 × 344,000 = 98,040 km²",
        "To the nearest thousand: **about 98,000 km²**.",
        "Check another way: after = 0.33 × 344,000 = 113,520 km²; before = 0.045 × 344,000 = 15,480 km²; 113,520 − 15,480 = 98,040 km².",
      ],
      solutions: [
        { label: "Subtract the percentages first", steps: ["33 − 4.5 = 28.5%", "28.5% of 344,000 = 98,040 ≈ 98,000 km²"] },
        { label: "Find both areas, then subtract", steps: ["33% of 344,000 = 113,520 km²", "4.5% of 344,000 = 15,480 km²", "113,520 − 15,480 = 98,040 ≈ 98,000 km²"] },
      ],
      commonError: "Giving the total green-zone area after 2004 instead of the increase.",
      difficulty: "challenge",
      guideRef: "management-strategies",
      hints: [
        "Read carefully: the question asks for the INCREASE, not the new total.",
        "You can subtract the two percentages first, then find that percentage of the park.",
        "To find a percentage of an amount: percentage ÷ 100 × amount.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-c1-q30",
      topicId: "protecting-reefs",
      question:
        "'Local management cannot save the Great Barrier Reef.' Evaluate this statement. Use evidence from the reef in your answer. [9 marks]",
      marks: 9,
      modelAnswer:
        "Local management has clearly achieved a great deal. Since the 2004 rezoning about 33% of the Marine Park has been green no-take zones, and studies have found more and larger fish, such as coral trout, inside green zones than in fished areas. Divers cull crown-of-thorns starfish with single injections of bile salts or vinegar, which has protected coral cover on the reefs where they work. Rules on farm run-off, tourism permits, the ban on dumping dredge spoil inside the Marine Park (2015) and the Reef 2050 Plan all reduce local pressures, and coral restoration is being trialled.\n\nHowever, the biggest threat is global, not local. Marine heatwaves caused mass bleaching in 2016, 2017, 2020, 2022 and 2024, and the 2016 event alone killed roughly 30% of the reef's shallow-water coral, mostly in the north — including inside well-protected green zones, because no zoning map can stop the ocean warming. Rising carbon dioxide also causes ocean acidification, making it harder for coral to build its skeleton. Even the local measures are not fully working: water-quality targets for farm run-off have been missed or are progressing slowly.\n\nYet local management still matters, because it builds resilience: a reef with clear water, plenty of plant-eating fish and no starfish plague recovers from bleaching faster, as shown when coral cover rose again in much of the north and central reef by 2022.\n\nOverall, I largely agree with the statement. Local management is necessary — it buys the reef time and helps it recover between heatwaves — but it is not sufficient on its own. Unless global greenhouse gas emissions are cut, bleaching events will keep coming too often for the reef to recover, so the reef can only be saved by local and global action together.",
      markScheme: [
        { point: "Zoning: about 33% green no-take zones since 2004, with more/larger fish (e.g. coral trout) inside them", keywords: ["33", "green zone", "no-take", "zoning", "coral trout", "2004", "fish"] },
        { point: "Crown-of-thorns culling protects coral cover on targeted reefs", keywords: ["crown-of-thorns", "starfish", "cull", "bile", "vinegar", "cots"] },
        { point: "Other local measures: farm run-off rules, tourism permits, dredge-spoil ban, Reef 2050 Plan, restoration", keywords: ["run-off", "runoff", "farm", "permit", "reef 2050", "dredg", "restoration", "water quality"] },
        { point: "Mass bleaching events (2016, 2017, 2020, 2022, 2024) are caused by global warming that local rules cannot stop", keywords: ["bleaching", "2016", "2017", "2020", "2022", "2024", "global warming", "heatwave", "climate change"] },
        { point: "Uses scale of damage: 2016 killed roughly 30% of shallow-water coral, even in protected zones", keywords: ["30%", "30", "shallow", "north", "protected zones", "killed"] },
        { point: "Ocean acidification from rising CO2 is another global threat", keywords: ["acidification", "co2", "carbon dioxide", "acid"] },
        { point: "Local measures are not fully working: water-quality targets missed or slow", keywords: ["missed", "targets", "slow", "not working", "failed"] },
        { point: "Local management builds resilience, helping the reef recover faster between bleaching events", keywords: ["resilience", "recover", "recovery", "buys time", "healthier"] },
        { point: "Justified conclusion: local action necessary but not sufficient; global emissions cuts needed", keywords: ["overall", "conclusion", "necessary", "not enough", "emissions", "global action", "on balance", "largely"] },
      ],
      commonError: "Listing management strategies without judging whether they work, or ignoring the difference between local and global threats.",
      difficulty: "challenge",
      guideRef: "evaluating-management",
      hints: [
        "Split the threats into local ones (fishing, run-off, starfish, tourists) and global ones (warming, acidification).",
        "For each local strategy, find evidence that it has worked — and evidence of its limits.",
        "Can any zoning map stop a marine heatwave? Use the bleaching years and the scale of the 2016 damage.",
        "Your conclusion should say whether local management is necessary, sufficient, or both — and why.",
      ],
      strategy: "Weigh both sides then judge",
    },
  ],
};
