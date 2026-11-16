import type { ExamPaper } from "../types.ts";

// ---------------------------------------------------------------------------
// Big Exam — Paper 1: People & Cities (human geography)
// Covers the Population strand (distribution, growth, demography, change,
// problems & policies) and the Cities strand (cities & megacities, Lagos,
// sustainable cities), plus geo-skills applied to population/city data.
// ---------------------------------------------------------------------------

const egyptMap = `<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified map of Egypt. Dots showing where people live are packed tightly along the River Nile and in the Nile delta north of Cairo, with only a few dots in the deserts to the west and east."><rect x="0" y="0" width="360" height="300" fill="#ffffff"/><polygon points="0,0 268,0 265,33 219,31 190,28 162,36 44,25 0,22" fill="#bae6fd"/><polygon points="225,67 266,126 282,80 292,80 360,180 360,300 348,300 330,275 298,249 255,138" fill="#bae6fd"/><polygon points="44,25 162,36 190,28 219,31 265,33 282,80 266,126 225,67 255,138 298,249 330,275 44,275" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><polyline points="198,275 215,250 234,222 228,180 236,168 222,170 196,140 186,116 198,66" fill="none" stroke="#bbf7d0" stroke-width="10" stroke-linejoin="round"/><polygon points="198,66 176,31 213,29" fill="#bbf7d0"/><polyline points="198,275 215,250 234,222 228,180 236,168 222,170 196,140 186,116 198,66" fill="none" stroke="#0284c7" stroke-width="2" stroke-linejoin="round"/><line x1="198" y1="66" x2="180" y2="30" stroke="#0284c7" stroke-width="1.5"/><line x1="198" y1="66" x2="211" y2="29" stroke="#0284c7" stroke-width="1.5"/><g fill="#1f2937"><circle cx="192" cy="40" r="2.5"/><circle cx="198" cy="45" r="2.5"/><circle cx="204" cy="38" r="2.5"/><circle cx="186" cy="48" r="2.5"/><circle cx="196" cy="54" r="2.5"/><circle cx="206" cy="50" r="2.5"/><circle cx="200" cy="60" r="2.5"/><circle cx="190" cy="58" r="2.5"/><circle cx="184" cy="40" r="2.5"/><circle cx="208" cy="42" r="2.5"/><circle cx="196" cy="35" r="2.5"/><circle cx="195" cy="68" r="2.5"/><circle cx="201" cy="71" r="2.5"/><circle cx="197" cy="75" r="2.5"/><circle cx="203" cy="64" r="2.5"/><circle cx="162" cy="38" r="2.5"/><circle cx="167" cy="40" r="2.5"/><circle cx="158" cy="41" r="2.5"/><circle cx="193" cy="82" r="2.5"/><circle cx="190" cy="95" r="2.5"/><circle cx="188" cy="108" r="2.5"/><circle cx="187" cy="122" r="2.5"/><circle cx="192" cy="130" r="2.5"/><circle cx="198" cy="138" r="2.5"/><circle cx="206" cy="148" r="2.5"/><circle cx="214" cy="158" r="2.5"/><circle cx="222" cy="166" r="2.5"/><circle cx="232" cy="170" r="2.5"/><circle cx="229" cy="185" r="2.5"/><circle cx="230" cy="198" r="2.5"/><circle cx="232" cy="210" r="2.5"/><circle cx="234" cy="220" r="2.5"/><circle cx="56" cy="88" r="2.5"/><circle cx="177" cy="185" r="2.5"/><circle cx="226" cy="72" r="2.5"/><circle cx="252" cy="142" r="2.5"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="70" y="14">Mediterranean Sea</text><text x="300" y="215">Red Sea</text><text x="183" y="82" text-anchor="end">Cairo</text><text x="100" y="52">Alexandria</text><text x="240" y="232">Aswan</text><text x="180" y="134" text-anchor="end">River Nile</text><text x="62" y="160">Western Desert</text><text x="62" y="174">(part of the Sahara)</text><text x="252" y="73" text-anchor="middle">SINAI</text><text x="150" y="292">SUDAN</text></g><g font-family="sans-serif" font-size="12" fill="#1f2937"><line x1="330" y1="40" x2="330" y2="16" stroke="#1f2937" stroke-width="1.5"/><polygon points="330,10 326,18 334,18" fill="#1f2937"/><text x="330" y="54" text-anchor="middle">N</text></g><rect x="50" y="216" width="150" height="54" fill="#ffffff" stroke="#334155"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><circle cx="60" cy="229" r="2.5" fill="#1f2937"/><text x="70" y="233">many people</text><rect x="55" y="240" width="10" height="10" fill="#bbf7d0" stroke="#334155"/><text x="70" y="249">fertile, irrigated land</text><rect x="55" y="255" width="10" height="10" fill="#fde68a" stroke="#334155"/><text x="70" y="264">desert</text></g><line x1="236" y1="288" x2="283" y2="288" stroke="#1f2937" stroke-width="2"/><text x="288" y="292" font-family="sans-serif" font-size="11" fill="#1f2937">200 km</text></svg>`;

const dtmGraph = `<svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of birth rate and death rate for Country X from 1950 to 2020. The death rate falls from 26 to 7 per 1,000, mostly before 1980. The birth rate stays at about 46 until 1980, then falls to 27 per 1,000 by 2020."><rect x="0" y="0" width="420" height="290" fill="#ffffff"/><g stroke="#e5e7eb" stroke-width="1"><line x1="50" y1="40" x2="400" y2="40"/><line x1="50" y1="80" x2="400" y2="80"/><line x1="50" y1="120" x2="400" y2="120"/><line x1="50" y1="160" x2="400" y2="160"/><line x1="50" y1="200" x2="400" y2="200"/></g><line x1="50" y1="240" x2="400" y2="240" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="40" x2="50" y2="240" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="44" y="244">0</text><text x="44" y="204">10</text><text x="44" y="164">20</text><text x="44" y="124">30</text><text x="44" y="84">40</text><text x="44" y="44">50</text></g><text x="16" y="140" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle" transform="rotate(-90 16 140)">Rate per 1,000 people per year</text><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="50" y="256">1950</text><text x="125" y="256">1965</text><text x="200" y="256">1980</text><text x="275" y="256">1995</text><text x="350" y="256">2010</text><text x="400" y="256">2020</text><text x="225" y="276">Year</text></g><polyline points="50,56 125,56 200,60 275,88 350,116 400,132" fill="none" stroke="#1f2937" stroke-width="2.5"/><polyline points="50,136 125,168 200,192 275,204 350,208 400,212" fill="none" stroke="#334155" stroke-width="2.5" stroke-dasharray="6 4"/><g fill="#1f2937"><circle cx="50" cy="56" r="3"/><circle cx="125" cy="56" r="3"/><circle cx="200" cy="60" r="3"/><circle cx="275" cy="88" r="3"/><circle cx="350" cy="116" r="3"/><circle cx="400" cy="132" r="3"/><circle cx="50" cy="136" r="3"/><circle cx="125" cy="168" r="3"/><circle cx="200" cy="192" r="3"/><circle cx="275" cy="204" r="3"/><circle cx="350" cy="208" r="3"/><circle cx="400" cy="212" r="3"/></g><text x="56" y="22" font-family="sans-serif" font-size="13" fill="#1f2937">Country X</text><line x1="230" y1="18" x2="256" y2="18" stroke="#1f2937" stroke-width="2.5"/><text x="260" y="22" font-family="sans-serif" font-size="11" fill="#1f2937">Birth rate</text><line x1="320" y1="18" x2="346" y2="18" stroke="#334155" stroke-width="2.5" stroke-dasharray="6 4"/><text x="350" y="22" font-family="sans-serif" font-size="11" fill="#1f2937">Death rate</text></svg>`;

const pyramidK = `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Population pyramid for Country K in 10-year age bands, as a percentage of the total population. Males: 0–9 16%, 10–19 12%, 20–29 9%, 30–39 6%, 40–49 4%, 50–59 2%, 60–69 1%, 70 and over 0.5%. Females: 0–9 15%, 10–19 12%, 20–29 9%, 30–39 6%, 40–49 4%, 50–59 2%, 60–69 1%, 70 and over 0.5%."><rect x="0" y="0" width="400" height="290" fill="#ffffff"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="100" y="20">Males</text><text x="300" y="20">Females</text></g><g stroke="#334155" stroke-width="1"><rect x="175" y="30" width="5" height="24" fill="#c7d2fe"/><rect x="170" y="56" width="10" height="24" fill="#c7d2fe"/><rect x="160" y="82" width="20" height="24" fill="#c7d2fe"/><rect x="140" y="108" width="40" height="24" fill="#c7d2fe"/><rect x="120" y="134" width="60" height="24" fill="#c7d2fe"/><rect x="90" y="160" width="90" height="24" fill="#c7d2fe"/><rect x="60" y="186" width="120" height="24" fill="#c7d2fe"/><rect x="20" y="212" width="160" height="24" fill="#c7d2fe"/><rect x="220" y="30" width="5" height="24" fill="#fecaca"/><rect x="220" y="56" width="10" height="24" fill="#fecaca"/><rect x="220" y="82" width="20" height="24" fill="#fecaca"/><rect x="220" y="108" width="40" height="24" fill="#fecaca"/><rect x="220" y="134" width="60" height="24" fill="#fecaca"/><rect x="220" y="160" width="90" height="24" fill="#fecaca"/><rect x="220" y="186" width="120" height="24" fill="#fecaca"/><rect x="220" y="212" width="150" height="24" fill="#fecaca"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="200" y="46">70+</text><text x="200" y="72">60–69</text><text x="200" y="98">50–59</text><text x="200" y="124">40–49</text><text x="200" y="150">30–39</text><text x="200" y="176">20–29</text><text x="200" y="202">10–19</text><text x="200" y="228">0–9</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="171" y="46">0.5</text><text x="166" y="72">1</text><text x="156" y="98">2</text><text x="136" y="124">4</text><text x="116" y="150">6</text><text x="86" y="176">9</text><text x="56" y="202">12</text><text x="16" y="228">16</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="start"><text x="229" y="46">0.5</text><text x="234" y="72">1</text><text x="244" y="98">2</text><text x="264" y="124">4</text><text x="284" y="150">6</text><text x="314" y="176">9</text><text x="344" y="202">12</text><text x="374" y="228">15</text></g><line x1="20" y1="238" x2="180" y2="238" stroke="#1f2937" stroke-width="1.5"/><line x1="220" y1="238" x2="380" y2="238" stroke="#1f2937" stroke-width="1.5"/><g stroke="#1f2937" stroke-width="1"><line x1="180" y1="238" x2="180" y2="243"/><line x1="130" y1="238" x2="130" y2="243"/><line x1="80" y1="238" x2="80" y2="243"/><line x1="30" y1="238" x2="30" y2="243"/><line x1="220" y1="238" x2="220" y2="243"/><line x1="270" y1="238" x2="270" y2="243"/><line x1="320" y1="238" x2="320" y2="243"/><line x1="370" y1="238" x2="370" y2="243"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="180" y="255">0</text><text x="130" y="255">5</text><text x="80" y="255">10</text><text x="30" y="255">15</text><text x="220" y="255">0</text><text x="270" y="255">5</text><text x="320" y="255">10</text><text x="370" y="255">15</text><text x="200" y="276">% of total population</text></g></svg>`;

const lagosGraph = `<svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of the population of Lagos from 1950 to 2020 (UN estimates, approximate): 0.3 million in 1950, 1.4 million in 1970, 4.8 million in 1990, 10.4 million in 2010 and 14.4 million in 2020."><rect x="0" y="0" width="420" height="290" fill="#ffffff"/><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="40" x2="400" y2="40"/><line x1="60" y1="90" x2="400" y2="90"/><line x1="60" y1="140" x2="400" y2="140"/><line x1="60" y1="190" x2="400" y2="190"/></g><line x1="60" y1="240" x2="400" y2="240" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="240" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="54" y="244">0</text><text x="54" y="194">4</text><text x="54" y="144">8</text><text x="54" y="94">12</text><text x="54" y="44">16</text></g><text x="18" y="140" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle" transform="rotate(-90 18 140)">Population (millions)</text><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="60" y="256">1950</text><text x="156" y="256">1970</text><text x="252" y="256">1990</text><text x="348" y="256">2010</text><text x="396" y="256">2020</text><text x="228" y="278">Year</text></g><polyline points="60,236.25 156,222.5 252,180 348,110 396,60" fill="none" stroke="#1f2937" stroke-width="2.5"/><g fill="#1f2937"><circle cx="60" cy="236.25" r="3.5"/><circle cx="156" cy="222.5" r="3.5"/><circle cx="252" cy="180" r="3.5"/><circle cx="348" cy="110" r="3.5"/><circle cx="396" cy="60" r="3.5"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="66" y="226">0.3</text><text x="150" y="214" text-anchor="end">1.4</text><text x="246" y="172" text-anchor="end">4.8</text><text x="342" y="102" text-anchor="end">10.4</text><text x="390" y="52" text-anchor="end">14.4</text></g><text x="66" y="22" font-family="sans-serif" font-size="13" fill="#1f2937">Lagos: population, 1950–2020 (UN estimates, approx.)</text></svg>`;

const choropleth = `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Choropleth map of a fictional island divided into six districts, A to F, shaded by population density. A is in the lightest class, under 1,000 per km². B, E and F are in the class 1,000 to 4,999. D is in the class 5,000 to 9,999. C is in the darkest class, 10,000 and over."><rect x="0" y="0" width="480" height="290" fill="#bae6fd"/><text x="40" y="32" font-family="sans-serif" font-size="13" fill="#1f2937">Island of Tera: population density</text><g stroke="#1f2937" stroke-width="1.5"><rect x="40" y="50" width="100" height="100" fill="#fef3c7"/><rect x="140" y="50" width="100" height="100" fill="#fcd34d"/><rect x="240" y="50" width="100" height="100" fill="#b45309"/><rect x="40" y="150" width="100" height="100" fill="#f59e0b"/><rect x="140" y="150" width="100" height="100" fill="#fcd34d"/><rect x="240" y="150" width="100" height="100" fill="#fcd34d"/></g><g font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1f2937"><text x="90" y="105">A</text><text x="190" y="105">B</text><text x="290" y="105" fill="#ffffff">C</text><text x="90" y="205">D</text><text x="190" y="205">E</text><text x="290" y="205">F</text></g><rect x="352" y="50" width="122" height="122" fill="#ffffff" stroke="#334155"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="358" y="66">People per km²</text><rect x="358" y="76" width="14" height="14" fill="#b45309" stroke="#334155"/><text x="378" y="87">10,000 and over</text><rect x="358" y="100" width="14" height="14" fill="#f59e0b" stroke="#334155"/><text x="378" y="111">5,000–9,999</text><rect x="358" y="124" width="14" height="14" fill="#fcd34d" stroke="#334155"/><text x="378" y="135">1,000–4,999</text><rect x="358" y="148" width="14" height="14" fill="#fef3c7" stroke="#334155"/><text x="378" y="159">Under 1,000</text></g><g font-family="sans-serif" font-size="12" fill="#1f2937"><line x1="410" y1="250" x2="410" y2="222" stroke="#1f2937" stroke-width="1.5"/><polygon points="410,214 406,224 414,224" fill="#1f2937"/><text x="410" y="266" text-anchor="middle">N</text></g></svg>`;

export const paper: ExamPaper = {
  id: "exam-n1",
  title: "Paper 1 — People & Cities (human geography)",
  calculator: true,
  minutes: 60,
  questions: [
    // ======================= POPULATION DISTRIBUTION =======================
    {
      kind: "mcq",
      id: "exam-n1-q01",
      topicId: "population-distribution",
      guideRef: "world-distribution",
      difficulty: "warmup",
      question: "Which pair of places are **both** sparsely populated?",
      options: [
        "The Nile valley and the Ganges delta",
        "Java and the north-east USA",
        "The Sahara and the Amazon rainforest",
        "The Nile valley and the Sahara",
      ],
      answerIndex: 2,
      explanation:
        "The Sahara is too dry and the dense Amazon rainforest is hard to clear, farm and travel through, so both have very few people per km². The tempting trap is the Nile valley: it runs through the desert, but its water and fertile soil make it one of the most crowded strips of land on Earth. Java, the north-east USA and the Ganges delta are all densely populated.",
      hints: ["Think of places that are too dry, too cold, too high or too thickly forested for many people — then check that BOTH places in the pair fit."],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "exam-n1-q02",
      topicId: "population-distribution",
      guideRef: "population-density",
      difficulty: "warmup",
      question:
        "Mongolia has about 3,400,000 people and an area of about 1,564,000 km². Calculate its population density. Give your answer in people per km², to 1 decimal place.",
      answer: { type: "number", value: 2.2, tolerance: 0.05, display: "2.2 people per km²" },
      traps: [
        { spec: { type: "number", value: 0.46, tolerance: 0.01 }, feedback: "You divided the area by the population. Density is people ÷ area: 3,400,000 ÷ 1,564,000." },
      ],
      solution: [
        "Population density = population ÷ area.",
        "3,400,000 ÷ 1,564,000 = 2.17…",
        "To 1 decimal place: **2.2 people per km²** — one of the lowest densities of any country.",
      ],
      commonError: "Putting the area on top of the fraction, which gives a tiny decimal (about 0.46).",
      hints: ["Density = people ÷ area, so the population goes first."],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-n1-q03",
      topicId: "population-distribution",
      guideRef: "explaining-distribution",
      difficulty: "core",
      question:
        "Study the map of Egypt. About 95% of Egypt's people live on about 5% of its land.\n\nDescribe **and** explain the distribution of population shown on the map. [4 marks]",
      diagram: egyptMap,
      marks: 4,
      modelAnswer:
        "Egypt's population is very unevenly distributed. People are concentrated in a narrow, linear strip along the River Nile from Aswan to Cairo, and in a dense triangular cluster in the Nile delta between Cairo and the Mediterranean coast, including Alexandria. The Western Desert (part of the Sahara) and the Eastern Desert are almost empty, apart from a few oases and Red Sea towns.\n\nThe main reason is water. Egypt is a hot desert with very little rain (under 250 mm a year in most places), so the Nile is the only reliable source of water for drinking and for irrigating crops. The river has also deposited fertile silt on flat land in the valley and delta, so farming is productive and can feed many people. Because so many people already live there, the big cities, jobs, roads and ports (Cairo and Alexandria) are also in the delta, which pulls even more people to the same area.",
      markScheme: [
        { point: "Describes the concentration along the Nile valley and/or in the delta (a linear strip / dense cluster), ideally naming Cairo or Alexandria", keywords: ["nile", "valley", "delta", "along the river", "linear", "strip", "cairo", "alexandria", "concentrated"] },
        { point: "Describes the very sparse / empty desert areas to the west and east", keywords: ["desert", "sahara", "sparse", "empty", "few people", "west", "east"] },
        { point: "Explains that the Nile gives water for drinking and irrigation in a very dry climate", keywords: ["water", "irrigation", "irrigate", "drink", "rain", "dry", "250"] },
        { point: "Explains a further factor: fertile silt / flat land for farming, or jobs, services and transport in Cairo and Alexandria", keywords: ["fertile", "silt", "soil", "flat", "farm", "crops", "jobs", "port", "transport", "services"] },
      ],
      commonError: "Only describing the pattern (or only explaining it). The question asks for both — describe WHERE, then explain WHY.",
      hints: [
        "Start with the key: where are the dots packed together, and where are there almost none?",
        "Use a distribution word such as 'linear' or 'clustered' and name places from the map.",
        "For the explanation, think about what the river gives people in a desert: water, soil, transport.",
      ],
      strategy: "Use the command word",
    },
    {
      kind: "written",
      id: "exam-n1-q04",
      topicId: "population-distribution",
      guideRef: "human-factors",
      difficulty: "challenge",
      question:
        "Brazil opened a new capital city, Brasília, far inland in 1960. Yet most Brazilians still live in the south-east and near the coast.\n\nSuggest **one** reason why the government built Brasília inland, and explain **two** human factors that keep so many people near the coast. [3 marks]",
      marks: 3,
      modelAnswer:
        "The government built Brasília inland to pull people and economic development away from the crowded coast and to open up the huge, sparsely populated interior. However, most people still live near the coast because of the history of settlement: the Portuguese colonists arrived by sea and built their first towns and ports on the coast, so the oldest and largest cities grew there and have kept growing. These big cities, such as São Paulo and Rio de Janeiro in the south-east, also have most of the jobs, industry, universities and transport links, so new migrants keep moving to them rather than to the interior.",
      markScheme: [
        { point: "A reason for Brasília: to draw people and development inland / away from the crowded coast / open up the interior", keywords: ["pull", "draw", "interior", "inland", "spread", "develop", "crowded coast", "away from the coast", "open up"] },
        { point: "History of settlement: colonists arrived by sea, so the first towns and ports grew on the coast", keywords: ["history", "colonial", "colonists", "portuguese", "port", "trade", "first", "settled", "by sea"] },
        { point: "Jobs, services and transport are concentrated in big coastal / south-eastern cities (São Paulo, Rio de Janeiro), so migrants still go there", keywords: ["jobs", "são paulo", "sao paulo", "rio", "industry", "services", "transport", "roads", "universities"] },
      ],
      commonError: "Giving physical factors (climate, rainforest) when the question asks for HUMAN factors.",
      hints: [
        "Why would a government want its people spread out more evenly?",
        "Human factors are made by people: think history, jobs, transport, services.",
        "Where did the first European settlers arrive, and what did they build there?",
      ],
      strategy: "Think at different scales",
    },

    // ========================== POPULATION GROWTH ==========================
    {
      kind: "short",
      id: "exam-n1-q05",
      topicId: "population-growth",
      guideRef: "birth-death-rates",
      difficulty: "core",
      question:
        "In 2023 Japan's birth rate was roughly 6 per 1,000 people per year and its death rate roughly 13 per 1,000 per year.\n\nCalculate Japan's rate of natural increase as a percentage. Use a minus sign if the population is naturally decreasing.",
      answer: { type: "number", value: -0.7, display: "−0.7%" },
      traps: [
        { spec: { type: "number", value: 0.7 }, feedback: "Check the sign: deaths are higher than births, so this is a natural DECREASE. The answer must be negative." },
        { spec: { type: "number", value: -7 }, feedback: "−7 is per 1,000. To turn 'per 1,000' into a percentage (per 100), divide by 10." },
        { spec: { type: "number", value: 7 }, feedback: "That is the gap per 1,000 with the wrong sign. Do birth rate − death rate, then divide by 10." },
      ],
      solution: [
        "Rate of natural increase (%) = (birth rate − death rate) ÷ 10.",
        "6 − 13 = −7 per 1,000 people per year.",
        "−7 ÷ 10 = **−0.7%**.",
        "The negative answer means a natural decrease: without immigration, Japan's population shrinks by about 0.7% a year.",
      ],
      commonError: "Subtracting the wrong way round (13 − 6) and losing the minus sign, or forgetting to divide by 10.",
      hints: [
        "Which comes first in the formula: birth rate or death rate?",
        "Birth rate − death rate gives an answer per 1,000. How do you change 'per 1,000' into 'per 100'?",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "exam-n1-q06",
      topicId: "population-growth",
      guideRef: "demographic-transition",
      difficulty: "core",
      question:
        "The graph shows birth and death rates for Country X.\n\n| Year | 1950 | 1965 | 1980 | 1995 | 2010 | 2020 |\n|---|---|---|---|---|---|---|\n| Birth rate (per 1,000) | 46 | 46 | 45 | 38 | 31 | 27 |\n| Death rate (per 1,000) | 26 | 18 | 12 | 9 | 8 | 7 |\n\nWhich stage of the Demographic Transition Model best describes Country X in 2020?",
      diagram: dtmGraph,
      options: [
        "Stage 2 (early expanding)",
        "Stage 3 (late expanding)",
        "Stage 4 (low stationary)",
        "Stage 1 (high stationary)",
      ],
      answerIndex: 1,
      explanation:
        "By 2020 the death rate is already low and levelling off (7 per 1,000), while the birth rate is falling quickly (45 → 27 since 1980). A falling birth rate with a low death rate is stage 3. It is not stage 4 yet: the birth rate (27) is still far above the death rate, so the population is still growing by about 2% a year. Stage 2 fits Country X around 1950–1980, when the death rate fell but the birth rate stayed high — not 2020.",
      hints: [
        "Look at the right-hand end of each line: which rate is still changing quickly?",
        "In which stage does the birth rate fall rapidly while the death rate is already low?",
      ],
      strategy: "Read the key first",
    },
    {
      kind: "written",
      id: "exam-n1-q07",
      topicId: "population-growth",
      guideRef: "future-population",
      difficulty: "challenge",
      question:
        "The UN projects that most of the world's population growth over the rest of this century will happen in sub-Saharan Africa, while the populations of East Asia and Europe shrink. Explain why. [4 marks]",
      marks: 4,
      modelAnswer:
        "Many sub-Saharan African countries still have high fertility: Niger's total fertility rate is about 6 children per woman, far above the replacement level of about 2.1. At the same time, better healthcare and vaccination have cut death rates, especially infant mortality, so births greatly outnumber deaths and natural increase is high. These populations are also very youthful, so huge numbers of young people are about to reach the age of having children. This population momentum means the population will keep growing for decades even if each family becomes smaller. In contrast, East Asian and European countries have fertility rates well below 2.1 and ageing populations, so deaths are starting to exceed births. China's population fell in 2022 for the first time in about six decades, and Japan's has been shrinking for years.",
      markScheme: [
        { point: "Sub-Saharan Africa has high fertility / birth rates (e.g. Niger's TFR about 6, well above 2.1)", keywords: ["fertility", "tfr", "6", "children per woman", "birth rate", "high birth", "large families"] },
        { point: "Death rates (especially infant mortality) have fallen with better healthcare, so natural increase is high", keywords: ["death rate", "healthcare", "vaccin", "infant mortality", "life expectancy", "natural increase"] },
        { point: "A very youthful structure gives population momentum: many young people will soon become parents", keywords: ["young", "youthful", "momentum", "under 15", "become parents", "childbearing", "next generation"] },
        { point: "East Asia / Europe: fertility below replacement (2.1) and ageing, so deaths exceed births (e.g. China fell in 2022, Japan)", keywords: ["below replacement", "2.1", "ageing", "deaths exceed", "natural decrease", "china", "japan", "low birth", "elderly"] },
      ],
      commonError: "Explaining only Africa and forgetting the second half of the question: why East Asia and Europe will shrink.",
      hints: [
        "Compare fertility rates with the replacement level of about 2.1.",
        "Think about the age structure: what happens when a very large group of children grows up?",
        "For East Asia and Europe, compare births with deaths in an ageing population.",
      ],
      strategy: "Compare and contrast",
    },

    // ============================== DEMOGRAPHY =============================
    {
      kind: "mcq",
      id: "exam-n1-q08",
      topicId: "demography",
      guideRef: "what-is-demography",
      difficulty: "warmup",
      question: "Which of these best describes a **census**?",
      options: [
        "An official count of every person in a country at a fixed date, usually every 10 years",
        "A survey that asks a random sample of households about their lives",
        "A yearly record of the births and deaths in each town",
        "A map that shows how many people live in each square kilometre",
      ],
      answerIndex: 0,
      explanation:
        "A census aims to count EVERYONE in the country on a fixed date, usually once every 10 years (Singapore's latest was Census 2020). A sample survey is different: it asks only some households, which is cheaper and quicker but is not a full count. Records of births and deaths are vital registration, and a density map is a way of showing data, not collecting it.",
      hints: ["The key word is 'everyone' — which option counts the whole population?"],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "exam-n1-q09",
      topicId: "demography",
      guideRef: "population-pyramids",
      difficulty: "warmup",
      question:
        "The pyramid shows the population of Country K in 10-year age bands, as a percentage of the total population.\n\nWhat percentage of Country K's **total** population is aged under 20 (males and females)?",
      diagram: pyramidK,
      answer: { type: "number", value: 55, display: "55%" },
      traps: [
        { spec: { type: "number", value: 28 }, feedback: "That is males only (16 + 12). Add the female bars on the right as well." },
        { spec: { type: "number", value: 31 }, feedback: "That is only the 0–9 band. 'Under 20' also includes the 10–19 band." },
      ],
      solution: [
        "Under 20 means the 0–9 and 10–19 bands.",
        "Males: 16 + 12 = 28%. Females: 15 + 12 = 27%.",
        "Total: 28 + 27 = **55%** — more than half the population is under 20.",
      ],
      commonError: "Reading only one side of the pyramid, or only the bottom bar.",
      hints: ["Which two age bands are 'under 20'? Remember there are bars on both sides."],
      strategy: "Read the key first",
    },
    {
      kind: "written",
      id: "exam-n1-q10",
      topicId: "demography",
      guideRef: "population-pyramids",
      difficulty: "core",
      question:
        "Study the population pyramid for Country K again.\n\nDescribe the shape of the pyramid **and** explain what it suggests about Country K's birth rate, death rate and life expectancy. Use figures from the pyramid. [4 marks]",
      diagram: pyramidK,
      marks: 4,
      modelAnswer:
        "The pyramid has a very wide base: 31% of the population is aged 0–9 (16% male and 15% female). This suggests a high birth rate. The sides narrow quickly and evenly with age — each band is smaller than the one below, falling to only 8% aged 40–49 — which suggests a high death rate at all ages, so many people do not reach old age. The top is very narrow: only 1% of people are aged 70 and over, and 3% are 60 or over, which suggests a low life expectancy. Overall this is an expanding, youthful pyramid, typical of a low-income country in stage 2 of the Demographic Transition Model.",
      markScheme: [
        { point: "Wide base, with a figure (e.g. 31% aged 0–9) → high birth rate", keywords: ["wide base", "31", "base", "0–9", "0-9", "children", "high birth", "birth rate"] },
        { point: "Sides narrow quickly / each band smaller with age → high death rate", keywords: ["narrow", "taper", "concave", "death rate", "die", "sides", "smaller"] },
        { point: "Narrow top, with a figure (e.g. only 1% aged 70+) → low life expectancy", keywords: ["top", "1%", "70", "elderly", "life expectancy", "old", "3%"] },
        { point: "Overall interpretation: youthful / expanding population, e.g. a low-income country or DTM stage 2", keywords: ["youthful", "expanding", "stage 2", "low-income", "lic", "growing", "developing"] },
      ],
      commonError: "Describing the shape without using any figures, or mixing up which part of the pyramid shows birth rate (the base) and life expectancy (the top).",
      hints: [
        "Work from bottom to top: base, sides, top.",
        "The base links to birth rate, the sides to death rate, the top to life expectancy.",
        "Quote at least two figures from the bars.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "exam-n1-q11",
      topicId: "demography",
      guideRef: "dependency-ratio",
      difficulty: "core",
      question:
        "The table shows Japan's population by age group (2024, approximate).\n\n| Age group | Population (millions) |\n|---|---|\n| 0–14 | 14 |\n| 15–64 | 74 |\n| 65 and over | 36 |\n\nCalculate Japan's dependency ratio. Give your answer to the nearest whole number.",
      answer: { type: "number", value: 68, tolerance: 0.5, display: "68" },
      traps: [
        { spec: { type: "number", value: 40.3, tolerance: 0.5 }, feedback: "You divided by the TOTAL population (124 million). The dependency ratio divides by the working-age group (15–64) only." },
        { spec: { type: "number", value: 48.6, tolerance: 0.5 }, feedback: "You included only the elderly. Dependants are the young (0–14) AND the elderly (65+)." },
        { spec: { type: "number", value: 148, tolerance: 0.5 }, feedback: "The fraction is upside down: dependants go on top, working age underneath." },
      ],
      solution: [
        "Dependency ratio = (young + elderly) ÷ working age × 100.",
        "Dependants: 14 + 36 = 50 million.",
        "50 ÷ 74 × 100 = 67.6 → **68**.",
        "So there are about 68 dependants for every 100 people of working age — most of them elderly.",
      ],
      commonError: "Dividing by the total population instead of the 15–64 group.",
      hints: [
        "Which age groups are the dependants?",
        "Add the dependants, then divide by the working-age population (not the total).",
        "Multiply by 100 at the end.",
      ],
      strategy: "Use figures from the source",
    },

    // ========================== POPULATION CHANGE ==========================
    {
      kind: "written",
      id: "exam-n1-q12",
      topicId: "population-change",
      guideRef: "birth-rate-factors",
      difficulty: "core",
      question: "Explain how keeping more girls in secondary school can lower a country's birth rate. [3 marks]",
      marks: 3,
      modelAnswer:
        "Girls who stay in school longer usually marry and start a family later, so they have fewer years in which to have children. Education also teaches them about health and family planning, so they are more likely to know about and use contraception. Educated women can get better-paid jobs and careers, so having many children costs them more in lost earnings, and they often choose smaller families.",
      markScheme: [
        { point: "Marry / start a family later, so fewer child-bearing years", keywords: ["later", "delay", "marry", "older", "fewer years"] },
        { point: "Learn about health and family planning, so more likely to use contraception", keywords: ["contraception", "family planning", "health", "knowledge", "learn"] },
        { point: "Better jobs / careers make large families costly, so women choose fewer children", keywords: ["career", "job", "work", "earn", "smaller famil", "fewer children", "choice", "empower"] },
      ],
      commonError: "Just saying 'they know more' — explain HOW education leads to fewer births.",
      hints: [
        "What does a girl do with her late teens if she stays at school rather than leaving?",
        "What might she learn at school about health?",
        "How does a career change the 'cost' of having many children?",
      ],
      strategy: "Cause → process → effect",
    },
    {
      kind: "short",
      id: "exam-n1-q13",
      topicId: "population-change",
      guideRef: "migration",
      difficulty: "challenge",
      question:
        "Town T had 150,000 people at the start of one year. During that year:\n\n| Births | Deaths | Immigrants | Emigrants |\n|---|---|---|---|\n| 4,200 | 3,900 | 2,600 | 1,100 |\n\nCalculate the percentage change in Town T's population over the year. Give your answer to 1 decimal place.",
      answer: { type: "number", value: 1.2, tolerance: 0.001, display: "1.2% (an increase)" },
      traps: [
        { spec: { type: "number", value: 1 }, feedback: "That is net migration only (1,500 people). Add natural change (births − deaths) too." },
        { spec: { type: "number", value: 0.2 }, feedback: "That is natural change only (300 people). Add net migration (immigrants − emigrants) too." },
        { spec: { type: "number", value: 1800 }, feedback: "1,800 is the change in NUMBER of people. Now turn it into a percentage of the starting population." },
      ],
      solution: [
        "Natural change = births − deaths = 4,200 − 3,900 = 300.",
        "Net migration = immigrants − emigrants = 2,600 − 1,100 = 1,500.",
        "Total change = 300 + 1,500 = 1,800 people.",
        "Percentage change = 1,800 ÷ 150,000 × 100 = **1.2%**.",
        "Migration added five times as many people as natural increase — it is the main driver of growth here.",
      ],
      commonError: "Using only natural change or only net migration — population change needs both.",
      hints: [
        "Population change has two parts. What are they?",
        "Work out births − deaths, then immigrants − emigrants, and add them.",
        "Percentage change = change ÷ starting population × 100.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-n1-q14",
      topicId: "population-change",
      guideRef: "significance-of-factors",
      difficulty: "challenge",
      question:
        "'Natural increase is more important than migration in explaining population change.'\n\nUsing Niger **and** Singapore, to what extent do you agree? [6 marks]",
      marks: 6,
      modelAnswer:
        "In Niger, I agree strongly. Niger's total fertility rate is about 6 children per woman, so its birth rate is very high, while better healthcare has lowered the death rate. Children are valued as workers on family farms and as security for parents in old age, and few girls stay in school or have access to contraception. The result is a large natural increase that drives almost all of Niger's growth; migration hardly changes its total.\n\nIn Singapore, the opposite is true. The resident total fertility rate was only about 0.97 in 2023, far below the replacement level of about 2.1, so natural increase is very small and the resident population would eventually shrink without newcomers. Singapore's population keeps growing mainly because of migration: non-residents, such as foreign workers and students, make up roughly 30% of the population, and the government uses immigration policy to keep its workforce growing.\n\nOverall, I agree only partly. Natural increase is the most important factor in poorer countries with high fertility in the early stages of the Demographic Transition Model, such as Niger, but in wealthy countries with very low fertility, such as Singapore, migration is more significant. The importance of each factor depends on the place and its stage of development, so the statement is true for Niger but not for Singapore.",
      markScheme: [
        { point: "Niger: very high fertility (TFR about 6) so natural increase drives almost all growth", keywords: ["niger", "6", "tfr", "high birth", "natural increase", "fertility"] },
        { point: "Explains why Niger's natural increase is high (children as farm workers / little contraception or girls' education / falling death rate)", keywords: ["farm", "contraception", "education", "infant mortality", "death rate", "workers", "security"] },
        { point: "Singapore: TFR about 0.97–1.0, far below replacement (2.1), so natural increase is very small", keywords: ["0.97", "1.0", "below replacement", "2.1", "low birth", "singapore"] },
        { point: "Singapore: migration drives growth (non-residents roughly 30%; foreign workforce; immigration policy)", keywords: ["migration", "immigra", "foreign", "30%", "non-resident", "workers", "migrants"] },
        { point: "Recognises that significance depends on place / time / stage of development (e.g. DTM stage)", keywords: ["depends", "place", "time", "stage", "development", "dtm", "wealthy", "poorer"] },
        { point: "Reaches a justified overall judgement on 'to what extent'", keywords: ["overall", "conclusion", "to some extent", "partly", "therefore", "agree", "disagree"] },
      ],
      commonError: "Writing about only one country, or ending without a clear judgement that answers 'to what extent'.",
      hints: [
        "Set up two sides: one country where the statement is true, one where it isn't.",
        "Use a figure for each: Niger's TFR, Singapore's TFR and its share of non-residents.",
        "Your conclusion should say what the answer DEPENDS on.",
      ],
      strategy: "Weigh both sides then judge",
    },

    // ========================= POPULATION PROBLEMS =========================
    {
      kind: "mcq",
      id: "exam-n1-q15",
      topicId: "population-problems",
      guideRef: "population-policies",
      difficulty: "warmup",
      question:
        "Singapore's Baby Bonus gives parents cash gifts and savings top-ups when a child is born. What type of population policy is this?",
      options: ["Anti-natalist policy", "Immigration policy", "Population redistribution policy", "Pro-natalist policy"],
      answerIndex: 3,
      explanation:
        "'Natal' means birth: a pro-natalist policy encourages people to have MORE children, which is exactly what the Baby Bonus is for, because Singapore's fertility rate is very low. An anti-natalist policy does the opposite — it tries to reduce births, like China's One-Child Policy or Singapore's own 'Stop at Two' campaign in the 1970s.",
      hints: ["'Pro' means for, 'anti' means against, and 'natal' means birth."],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "exam-n1-q16",
      topicId: "population-problems",
      guideRef: "over-under-population",
      difficulty: "core",
      question:
        "Give the term for the number of people that allows the **highest standard of living per person**, using the resources and technology an area has.",
      answer: { type: "text", accept: ["optimum population", "optimum", "optimal population", "optimum population size", "the optimum population"] },
      traps: [
        { spec: { type: "text", accept: ["carrying capacity"] }, feedback: "Carrying capacity is the MOST people an area can support sustainably. The question asks for the number giving the BEST standard of living per person." },
        { spec: { type: "text", accept: ["under-population", "underpopulation", "under population"] }, feedback: "Under-population is when there are too FEW people to make full use of the resources. The question asks for the ideal number." },
      ],
      solution: [
        "**Optimum population** is the 'just right' number: enough people to use the resources well, but not so many that resources run short.",
        "Too many people for the resources and technology = over-population; too few = under-population.",
      ],
      commonError: "Confusing optimum population (best standard of living) with carrying capacity (maximum number that can be supported).",
      hints: [
        "It sits between over-population and under-population.",
        "It's the 'best' or 'ideal' number — what word means best?",
      ],
      strategy: "Spot the misconception",
    },
    {
      kind: "written",
      id: "exam-n1-q17",
      topicId: "population-problems",
      guideRef: "ageing-youthful",
      difficulty: "core",
      question:
        "About 29% of Japan's population is aged 65 and over (2024). Explain the problems this ageing population creates for Japan **and** one opportunity it brings. [4 marks]",
      marks: 4,
      modelAnswer:
        "As more people retire, the government must pay more in state pensions, but there are fewer working-age people paying taxes to fund them, so taxes may rise or pensions fall. Older people also need more healthcare and long-term care, such as hospitals, care homes and dementia support, which is very expensive. Because the working-age population is shrinking, many firms face labour shortages, so Japan uses robots and is admitting more foreign workers. However, ageing also brings opportunities: the 'silver economy' of products, travel and services designed for older people creates businesses and jobs, and many healthy older people keep working, volunteer or look after grandchildren.",
      markScheme: [
        { point: "Rising pension costs paid for by fewer taxpayers", keywords: ["pension", "tax", "taxpayers", "fund", "retire"] },
        { point: "Greater demand for healthcare and long-term care", keywords: ["health", "care", "hospital", "dementia", "nursing", "care homes", "medical"] },
        { point: "Shrinking workforce causes labour shortages (robots / foreign workers needed)", keywords: ["workforce", "workers", "labour", "shortage", "robot", "immigra", "fewer working"] },
        { point: "An opportunity: silver economy / older people working, volunteering or caring for grandchildren", keywords: ["silver", "volunteer", "grandchildren", "grandparent", "experience", "spend", "tourism", "products", "keep working"] },
      ],
      commonError: "Writing only about problems and forgetting the opportunity (or vice versa).",
      hints: [
        "Who pays for pensions — and how many of them are there?",
        "Think about money, health and the workforce.",
        "Opportunity: what can older people buy, give or do?",
      ],
      strategy: "Social / economic / environmental (SEE)",
    },
    {
      kind: "written",
      id: "exam-n1-q18",
      topicId: "population-problems",
      guideRef: "china-one-child",
      difficulty: "challenge",
      question:
        "'China's One-Child Policy (1980–2015) was a success.'\n\nEvaluate this statement. Use evidence for **and** against, and reach a justified conclusion. [9 marks]",
      marks: 9,
      modelAnswer:
        "The policy achieved its main aim: slowing population growth. Fertility fell, and the Chinese government claims that around 400 million births were prevented. This eased pressure on food, water, housing and jobs at a time when China was poor, and allowed more investment in each child, which helped China's rapid economic growth. Only children, especially girls in cities, received more education than earlier generations.\n\nHowever, the success is less clear than it looks. China's fertility was already falling fast in the 1970s under the voluntary 'Later, Longer, Fewer' campaign, so many demographers think the 400 million figure is exaggerated; countries such as Thailand cut fertility sharply without strict limits. The human cost was severe: families faced heavy fines and job losses, and there were forced abortions and sterilisations. A strong preference for sons led to a sex ratio at birth that peaked at about 117–118 boys per 100 girls, leaving tens of millions more men than women.\n\nThe long-term effects are also serious. The 4-2-1 problem means one child may have to support two parents and four grandparents, and China is ageing rapidly with a shrinking workforce. Its population fell in 2022 for the first time in about six decades. Even the government judged that the policy had gone too far: it switched to a two-child policy in 2016 and a three-child policy in 2021.\n\nOverall, I think the policy was only a partial success. It met its short-term aim of slowing growth, but fertility was already falling, the human-rights abuses were severe, and it created long-term problems — a gender imbalance and rapid ageing — that China is now trying to reverse. Judged by its costs and long-term effects, not just its aim, it was more of a failure than a success.",
      markScheme: [
        { point: "For: slowed population growth / fewer births (government claims about 400 million prevented)", keywords: ["slowed", "400 million", "fewer births", "prevented", "growth", "fertility fell"] },
        { point: "For: eased pressure on food, water, jobs and housing; more investment per child helped economic growth", keywords: ["food", "resources", "economic", "economy", "pressure", "investment", "jobs", "housing"] },
        { point: "For: only children (especially girls in cities) received more education", keywords: ["education", "girls", "only child", "school", "university"] },
        { point: "Against: fertility was already falling ('Later, Longer, Fewer'), so the 400 million claim is disputed; voluntary policies elsewhere also worked", keywords: ["already falling", "1970s", "later, longer, fewer", "later longer fewer", "disputed", "exaggerated", "thailand", "kerala"] },
        { point: "Against: human costs — fines, job losses, forced abortions and sterilisations", keywords: ["forced", "sterilis", "abortion", "human rights", "fines", "abuse", "coercion", "job loss"] },
        { point: "Against: gender imbalance — sex ratio at birth peaked around 117–118 boys per 100 girls", keywords: ["gender", "sex ratio", "117", "118", "boys", "males", "imbalance", "son preference"] },
        { point: "Against: 4-2-1 problem, rapid ageing, shrinking workforce; population fell in 2022", keywords: ["4-2-1", "ageing", "elderly", "workforce", "fell", "2022", "shrinking", "decline"] },
        { point: "Uses the policy reversal (two-child 2016, three-child 2021) as evidence of long-term problems", keywords: ["two-child", "three-child", "2016", "2021", "reversed", "relaxed", "ended", "changed"] },
        { point: "Justified conclusion using criteria (aim vs cost, short term vs long term) that answers how far it was a success", keywords: ["overall", "partial", "to some extent", "partly", "conclusion", "therefore", "judgement", "depends", "short term", "long term"] },
      ],
      commonError: "Listing effects without saying whether each one makes the policy more or less of a success — and missing out the final judgement.",
      hints: [
        "First decide your criteria: did it meet its aim, at what cost, and what about the long term?",
        "Build a 'for' paragraph and an 'against' paragraph, each with figures and dates.",
        "Ask: would fertility have fallen anyway? What did the government itself do in 2016 and 2021?",
        "Finish with a clear judgement that uses your criteria — not just 'it was good and bad'.",
      ],
      strategy: "Weigh both sides then judge",
    },

    // ========================= CITIES & MEGACITIES =========================
    {
      kind: "mcq",
      id: "exam-n1-q19",
      topicId: "cities-megacities",
      guideRef: "megacities",
      difficulty: "core",
      question: "Which statement about the world's megacities is correct?",
      options: [
        "Most megacities are in high-income countries in Europe and North America",
        "A city must be its country's capital to count as a megacity",
        "Most of the world's megacities are in Asia",
        "The number of megacities has fallen since 1990 as people move to the suburbs",
      ],
      answerIndex: 2,
      explanation:
        "The UN counted about 33 megacities (10 million+ people) in 2018, and roughly 20 of them were in Asia — Tokyo, Delhi, Shanghai and Dhaka among them. The tempting idea that megacities are mostly in rich Western countries is out of date: the fastest-growing ones are in lower-income countries and NEEs. A megacity need not be a capital (Lagos is not Nigeria's capital), and the number has risen sharply, from about 10 in 1990.",
      hints: [
        "Think of the names on a list of the biggest cities: which continent keeps coming up?",
        "Is Lagos Nigeria's capital? Has the number of megacities gone up or down?",
      ],
      strategy: "Spot the misconception",
    },
    {
      kind: "short",
      id: "exam-n1-q20",
      topicId: "cities-megacities",
      guideRef: "what-is-a-city",
      difficulty: "core",
      question:
        "Country M has a total population of 48 million. Of these, 18 million live in rural areas.\n\nCalculate the percentage of Country M's population that is **urban**. Give your answer to 1 decimal place.",
      answer: { type: "number", value: 62.5, tolerance: 0.001, display: "62.5%" },
      traps: [
        { spec: { type: "number", value: 37.5 }, feedback: "37.5% is the RURAL share (18 ÷ 48). The question asks for the urban share." },
        { spec: { type: "number", value: 160 }, feedback: "The fraction is upside down. Percentage urban = urban ÷ total × 100, so it can't be more than 100." },
      ],
      solution: [
        "Urban population = total − rural = 48 − 18 = 30 million.",
        "% urban = urban ÷ total × 100 = 30 ÷ 48 × 100 = **62.5%**.",
        "Check: 62.5% urban + 37.5% rural = 100%.",
      ],
      commonError: "Dividing the rural figure by the total and forgetting to subtract it from 100.",
      hints: [
        "You are given the rural number — how many people are urban?",
        "% urban = urban ÷ total × 100.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-n1-q21",
      topicId: "cities-megacities",
      guideRef: "causes-of-urbanisation",
      difficulty: "core",
      question:
        "Explain why cities in low-income countries and NEEs are growing much faster than cities in high-income countries such as the UK. [4 marks]",
      marks: 4,
      modelAnswer:
        "In many low-income countries and NEEs, large numbers of people are pushed out of rural areas by poverty, few services and crop failures caused by drought, so rural–urban migration is very high. They are pulled to cities by the hope of jobs, higher wages, schools and hospitals. Most migrants are young adults, so they start families in the city, and with high birth rates the city also grows by natural increase. In contrast, high-income countries such as the UK are already highly urbanised (about 84% urban), so there are few rural people left to move, and some city dwellers are moving out to smaller towns (counter-urbanisation).",
      markScheme: [
        { point: "Push factors in rural areas (poverty, few services, drought) cause high rural–urban migration", keywords: ["rural", "migration", "push", "poverty", "farm", "drought", "few services"] },
        { point: "Pull factors in cities (jobs, wages, schools, hospitals, bright lights)", keywords: ["pull", "jobs", "wages", "schools", "hospitals", "services", "bright lights", "opportunit"] },
        { point: "Natural increase: migrants are young adults, so birth rates in cities are high", keywords: ["natural increase", "young", "birth", "children", "families", "young adults"] },
        { point: "HICs are already highly urbanised (UK about 84%) and see counter-urbanisation", keywords: ["84", "already", "urbanised", "counter", "move out", "suburbs", "small towns"] },
      ],
      commonError: "Only describing push and pull factors and forgetting natural increase or the comparison with HICs.",
      hints: [
        "There are two ways a city grows. Name both.",
        "Who usually migrates — old people or young adults? What happens next?",
        "Why can't UK cities grow in the same way — where do most Britons already live?",
      ],
      strategy: "Compare and contrast",
    },

    // ================================ LAGOS ================================
    {
      kind: "mcq",
      id: "exam-n1-q22",
      topicId: "lagos",
      guideRef: "lagos-location-growth",
      difficulty: "warmup",
      question: "Which statement about Lagos is correct?",
      options: [
        "It lies on the Gulf of Guinea in south-west Nigeria and is the country's main commercial centre",
        "It has been Nigeria's capital city since 1991",
        "It is a landlocked city in the dry north of Nigeria",
        "It lies on the Indian Ocean coast of East Africa",
      ],
      answerIndex: 0,
      explanation:
        "Lagos is on the coast of the Gulf of Guinea (the Bight of Benin) in south-west Nigeria, built around the Lagos Lagoon, and is Nigeria's commercial and financial hub. The common mistake is to think it is the capital: Lagos WAS the capital until 1991, when the government moved to Abuja, a planned city in the centre of the country.",
      hints: ["Lagos grew as a port — so is it inland or on the coast? Which ocean does West Africa face?"],
      strategy: "CLOCC",
    },
    {
      kind: "written",
      id: "exam-n1-q23",
      topicId: "lagos",
      guideRef: "push-pull",
      difficulty: "core",
      question:
        "Explain how **one** push factor in rural northern Nigeria and **one** pull factor in Lagos lead people to migrate to Lagos. [4 marks]",
      marks: 4,
      modelAnswer:
        "One push factor is drought and desertification in the dry Sahel region of northern Nigeria. Lower and less reliable rainfall makes crops fail, so families lose their food and income and young people leave to find another way to earn a living. One pull factor is the chance of work in Lagos, at the port, in factories and offices, or in the huge informal economy as a trader or driver. These jobs usually pay more than farming, so migrants can support themselves and send money home to their families.",
      markScheme: [
        { point: "Identifies a relevant push factor in northern Nigeria (drought / desertification, conflict e.g. Boko Haram, poverty, floods, few services)", keywords: ["drought", "desertification", "sahel", "conflict", "boko haram", "poverty", "flood", "few services", "insecurity"] },
        { point: "Explains how the push factor makes people leave (e.g. crops fail → no income; violence → unsafe)", keywords: ["crops fail", "no income", "lose", "unsafe", "hunger", "leave", "can't farm", "food"] },
        { point: "Identifies a relevant pull factor in Lagos (jobs, schools, hospitals, family networks)", keywords: ["jobs", "work", "port", "informal", "schools", "university", "hospital", "relatives", "family"] },
        { point: "Explains how the pull factor attracts people (higher wages, remittances, better future for children)", keywords: ["higher wages", "pay more", "earn", "send money", "remittances", "better life", "future", "education for children"] },
      ],
      commonError: "Naming a push and a pull factor without explaining HOW each one makes people move.",
      hints: [
        "Push = something bad about home; pull = something good about Lagos.",
        "For each factor, add 'so…' to show what it makes people do.",
        "Use a Nigerian example: the Sahel, Boko Haram, the port, the informal economy.",
      ],
      strategy: "Cause → process → effect",
    },
    {
      kind: "written",
      id: "exam-n1-q24",
      topicId: "lagos",
      guideRef: "lagos-challenges",
      difficulty: "core",
      question:
        "Read the extract.\n\n> Bisi, 14, lives in Makoko, where homes stand on wooden stilts over the Lagos Lagoon. There is no mains sewer, so waste from the houses drops straight into the water below. Her older brother Femi leaves home at 5 a.m. so that his bus journey to work at the port is not swallowed by the 'go-slow'. When the mains electricity cuts out in the evening, the family switches on a small petrol generator.\n\nUsing the extract and your own knowledge, explain **two** challenges that Lagos faces because of its rapid growth. [4 marks]",
      marks: 4,
      modelAnswer:
        "One challenge is poor sanitation in informal settlements such as Makoko. Housing and services have not kept up with the number of people arriving, so there is no mains sewer and waste goes straight into the lagoon. This pollutes the water that people fish and wash in and spreads diseases such as cholera and diarrhoea, especially among children. A second challenge is traffic congestion, the 'go-slow'. Lagos has millions of vehicles but too few roads, bridges and rail lines, so commuters like Femi can lose several hours a day travelling. This wastes time that could be spent working or studying, and the fumes from idling vehicles add to air pollution.",
      markScheme: [
        { point: "Identifies a sanitation / waste / informal housing challenge (Makoko, no sewer)", keywords: ["sewer", "sewage", "waste", "sanitation", "toilet", "makoko", "informal", "slum"] },
        { point: "Develops it: polluted water spreads disease (cholera, diarrhoea) / blocked drains worsen floods", keywords: ["disease", "cholera", "diarrhoea", "pollut", "dirty water", "health", "flood", "drains"] },
        { point: "Identifies a second challenge: traffic congestion ('go-slow') or unreliable electricity", keywords: ["go-slow", "traffic", "congestion", "electricity", "power cut", "generator", "jams"] },
        { point: "Develops it: hours lost / lower productivity / air pollution, or generators are costly, noisy and polluting", keywords: ["hours", "time", "late", "productivity", "fumes", "air pollution", "cost", "expensive", "noise", "noisy"] },
      ],
      commonError: "Copying the extract without explaining the effect of each challenge on people's lives.",
      hints: [
        "Pick out two problems from the extract first.",
        "For each one, explain WHY it happens (growth faster than services) and WHAT it does to people.",
        "Add one piece of your own knowledge, such as a disease or how long journeys take.",
      ],
      strategy: "PEEL paragraph",
    },
    {
      kind: "written",
      id: "exam-n1-q25",
      topicId: "lagos",
      guideRef: "lagos-solutions",
      difficulty: "challenge",
      question:
        "'The Lagos Rail Mass Transit will do more to improve life for ordinary Lagosians than Eko Atlantic.'\n\nTo what extent do you agree? [6 marks]",
      marks: 6,
      modelAnswer:
        "The rail system targets one of the city's biggest problems, the 'go-slow'. Phase 1 of the Blue Line (Marina to Mile 2) opened to passengers in 2023 and the Red Line (Agbado to Oyingbo) in 2024. Trains are unaffected by road traffic, so commuters get faster, more reliable journeys, and every passenger on a train is one fewer vehicle on the road, which cuts congestion and air pollution. Because it is public transport, it is used by ordinary workers, not just the rich. However, the network is still small, covering only a few corridors of a huge city, so most Lagosians do not yet benefit.\n\nEko Atlantic is a new district on about 10 km² of land reclaimed from the Atlantic, protected by a long sea wall. Supporters say the wall protects Victoria Island from coastal erosion and storm surges, and the project attracts investment and creates construction jobs. But it is planned for only about 250,000 residents and is criticised as an enclave for the wealthy: most Lagosians could never afford to live there, it does nothing for people in places like Makoko, and some fear it may push erosion onto nearby coastline.\n\nOverall, I largely agree. Judged by who benefits and how many people, the rail lines help far more ordinary people every day, even though the network is small so far. Eko Atlantic brings some wider benefits, such as coastal protection, but its homes and services are mainly for a rich minority.",
      markScheme: [
        { point: "Rail: Blue Line (2023) / Red Line (2024) give fast, reliable journeys that avoid the go-slow", keywords: ["blue line", "red line", "2023", "2024", "rail", "train", "go-slow", "traffic", "reliable"] },
        { point: "Rail benefits many ordinary commuters and can reduce congestion and air pollution", keywords: ["commuters", "many people", "ordinary", "affordable", "public transport", "pollution", "emissions", "congestion"] },
        { point: "Limitation of rail: small network so far, covering only a few corridors", keywords: ["only", "limited", "phase", "small", "few stations", "small part", "corridors"] },
        { point: "Eko Atlantic benefits: sea wall protects the coast from erosion / storm surges; investment and construction jobs", keywords: ["reclaimed", "sea wall", "erosion", "storm surge", "protect", "investment", "construction jobs", "business"] },
        { point: "Eko Atlantic criticisms: enclave for the wealthy, unaffordable, does little for poor areas such as Makoko, may shift erosion", keywords: ["wealthy", "rich", "enclave", "expensive", "afford", "makoko", "poor", "inequality", "elsewhere"] },
        { point: "Justified conclusion using criteria such as who benefits and how many people", keywords: ["overall", "agree", "conclusion", "more people", "who benefits", "therefore", "largely", "to some extent"] },
      ],
      commonError: "Describing both projects without comparing them — the question asks which does MORE for ORDINARY people.",
      hints: [
        "Set your criteria first: who benefits, how many people, and what problem does each scheme solve?",
        "Give at least one benefit and one limitation for each scheme, with a fact (date, place, size).",
        "Finish by deciding which does more for ordinary Lagosians — and why.",
      ],
      strategy: "Weigh both sides then judge",
    },

    // ========================= SUSTAINABLE CITIES ==========================
    {
      kind: "mcq",
      id: "exam-n1-q26",
      topicId: "sustainable-cities",
      guideRef: "singapore-success",
      difficulty: "core",
      question:
        "Singapore's Four National Taps make its water supply more secure during droughts. Which **two** taps do **not** depend on rainfall?",
      options: [
        "Local catchment water and imported water",
        "Imported water and desalinated water",
        "Local catchment water and NEWater",
        "NEWater and desalinated water",
      ],
      answerIndex: 3,
      explanation:
        "NEWater is used water that is treated and purified, and desalination turns seawater into fresh water — neither needs rain, so they keep flowing during a drought. Imported water is tempting because it comes from outside Singapore, but it still depends on rain falling in Johor's catchments. Local catchment water is collected rainwater stored in reservoirs.",
      hints: [
        "Where does each tap's water originally come from?",
        "Imported water comes from Johor — and how does Johor's river get its water?",
      ],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "exam-n1-q27",
      topicId: "sustainable-cities",
      guideRef: "las-vegas",
      difficulty: "core",
      question:
        "Clark County, which includes Las Vegas, grew from about 740,000 people in 1990 to about 2,270,000 in 2020.\n\nCalculate the average increase in population **per year** between 1990 and 2020, in people per year.",
      answer: { type: "number", value: 51000, display: "51,000 people per year" },
      traps: [
        { spec: { type: "number", value: 1530000 }, feedback: "1,530,000 is the TOTAL increase over 30 years. Divide by the number of years to get the increase per year." },
        { spec: { type: "number", value: 75667, tolerance: 1 }, feedback: "You divided the 2020 population by 30. First find the increase (2,270,000 − 740,000), then divide by 30." },
      ],
      solution: [
        "Increase = 2,270,000 − 740,000 = 1,530,000 people.",
        "Number of years = 2020 − 1990 = 30.",
        "Average increase per year = 1,530,000 ÷ 30 = **51,000 people per year**.",
        "That is about 1,000 extra people every week moving into or being born in a city in the Mojave Desert — each needing water.",
      ],
      commonError: "Forgetting to subtract the 1990 figure before dividing.",
      hints: [
        "First find the total increase.",
        "How many years are there between 1990 and 2020? Divide by that.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-n1-q28",
      topicId: "sustainable-cities",
      guideRef: "eco-city-design",
      difficulty: "challenge",
      question:
        "A planning team must choose a site for a new neighbourhood of 20,000 people.\n\n| | Site P | Site Q |\n|---|---|---|\n| Land | Secondary forest at the edge of the city (a greenfield site) | Old factory land inside the city (a brownfield site) |\n| Transport | An MRT station is planned but will not open for 8 years | 600 m from an existing MRT station |\n| Cost | Cheaper to build; larger flats | Polluted land must be cleaned first, so it costs more; smaller flats |\n| Extras | Solar panels on every roof | Rooftop solar, community gardens and a recycling hub |\n\nWhich site is the more sustainable choice? Justify your decision using the social, economic and environmental pillars of sustainability. [4 marks]",
      marks: 4,
      modelAnswer:
        "I would choose Site Q. Environmentally, it reuses brownfield land, so no forest is cleared and wildlife habitats and the trees that cool the city are kept; being only 600 m from an existing MRT station means residents can travel by train from day one instead of relying on cars, which cuts emissions and congestion. Socially, the community gardens and recycling hub give people places to meet and grow food, and easy access to the MRT links residents to jobs, schools and hospitals across the city. Economically, it costs more at the start to clean the polluted land, and the flats are smaller, which is the main weakness of Site Q. However, residents will save money on transport, and cleaning up derelict land improves the area. Site P's cheaper, bigger flats are attractive, but for 8 years 20,000 people would depend on cars and the forest would be lost for ever, so Site Q is more sustainable in the long term.",
      markScheme: [
        { point: "Makes a clear decision and gives an environmental argument (forest kept or lost, car use vs MRT, emissions, solar)", keywords: ["forest", "brownfield", "greenfield", "habitat", "wildlife", "emissions", "cars", "mrt", "solar", "environment"] },
        { point: "Gives a social argument (access to jobs and services, community gardens, flat size, quality of life)", keywords: ["social", "community", "gardens", "access", "jobs", "schools", "larger flats", "smaller flats", "quality of life", "meet"] },
        { point: "Gives an economic argument (building and clean-up cost, transport costs for residents, value of the land)", keywords: ["cost", "cheaper", "expensive", "money", "economic", "save", "afford", "clean"] },
        { point: "Recognises a weakness of the chosen site (or a strength of the other) and explains why the decision still stands", keywords: ["however", "although", "weakness", "but", "drawback", "still", "long term", "outweigh"] },
      ],
      commonError: "Choosing a site but only using one pillar, or ignoring the obvious drawback of your chosen site. Either site can score full marks if the justification is balanced.",
      hints: [
        "Score each site against the three pillars before you decide.",
        "What happens to the forest at Site P? How will residents travel for the first 8 years?",
        "A strong answer admits the weakness of its chosen site and explains why it is still the better option.",
      ],
      strategy: "Weigh both sides then judge",
    },

    // ============================== GEO-SKILLS =============================
    {
      kind: "short",
      id: "exam-n1-q29",
      topicId: "geo-skills",
      guideRef: "graphs-and-charts",
      difficulty: "core",
      question:
        "Study the line graph of the population of Lagos (UN estimates, approximate).\n\nCalculate the percentage increase in Lagos's population between 1990 and 2020.",
      diagram: lagosGraph,
      answer: { type: "number", value: 200, tolerance: 0.5, display: "200%" },
      traps: [
        { spec: { type: "number", value: 300 }, feedback: "14.4 ÷ 4.8 = 3 means the 2020 population is 300% OF the 1990 population. The INCREASE is the change ÷ the original: (14.4 − 4.8) ÷ 4.8 × 100." },
        { spec: { type: "number", value: 9.6, tolerance: 0.05 }, feedback: "9.6 million is the increase in people. Turn it into a percentage of the 1990 population." },
        { spec: { type: "number", value: 66.7, tolerance: 0.1 }, feedback: "You divided by the 2020 figure. Percentage change always divides by the ORIGINAL (1990) value." },
      ],
      solution: [
        "Read the graph: 1990 = 4.8 million, 2020 = 14.4 million.",
        "Change = 14.4 − 4.8 = 9.6 million.",
        "Percentage increase = change ÷ original × 100 = 9.6 ÷ 4.8 × 100 = **200%**.",
        "In other words, Lagos's population tripled in 30 years.",
      ],
      commonError: "Dividing by the new value instead of the original, or confusing 'three times as big' (300% of) with a 200% increase.",
      hints: [
        "Read the values for 1990 and 2020 from the labels on the graph.",
        "% change = (new − old) ÷ old × 100.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "exam-n1-q30",
      topicId: "geo-skills",
      guideRef: "graphs-and-charts",
      difficulty: "challenge",
      question:
        "A student drew this choropleth map of population density on the fictional Island of Tera using the data below.\n\n| District | Population | Area (km²) |\n|---|---|---|\n| A | 12,000 | 20 |\n| B | 90,000 | 30 |\n| C | 240,000 | 20 |\n| D | 140,000 | 20 |\n| E | 45,000 | 15 |\n| F | 66,000 | 12 |\n\nOne district has been shaded in the wrong class. Which district?",
      diagram: choropleth,
      options: ["District B", "District F", "District D", "District E"],
      answerIndex: 1,
      explanation:
        "Work out each density (population ÷ area): A = 600, B = 3,000, C = 12,000, D = 7,000, E = 3,000 and F = 66,000 ÷ 12 = 5,500 people per km². F belongs in the 5,000–9,999 class but has been shaded 1,000–4,999. The trap is to compare total populations: F has fewer people than B (66,000 vs 90,000), so it 'looks' right to shade them the same — but F's small area makes it nearly twice as dense as B.",
      hints: [
        "A choropleth shows density, not total population — so calculate population ÷ area for each district.",
        "Compare each answer with the class its shade shows in the key.",
        "Look closely at the district with the smallest area.",
      ],
      strategy: "Look for the anomaly",
    },
  ],
};
