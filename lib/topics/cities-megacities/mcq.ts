import type { Paper } from "../../types.ts";

// World urban share, UN World Urbanization Prospects 2018 (rounded). x = 50 + (year − 1950) × 3.3; y = 220 − % × 2.
const urbanShareGraph = `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of the percentage of the world's population living in urban areas: 30% in 1950, 38% in 1975, 47% in 2000, 55% in 2018 and a projected 68% in 2050"><rect width="420" height="260" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><line x1="50" y1="220" x2="395" y2="220" stroke="#334155"/><line x1="50" y1="20" x2="50" y2="220" stroke="#334155"/><g stroke="#e5e7eb"><line x1="50" y1="180" x2="390" y2="180"/><line x1="50" y1="140" x2="390" y2="140"/><line x1="50" y1="100" x2="390" y2="100"/><line x1="50" y1="60" x2="390" y2="60"/><line x1="50" y1="20" x2="390" y2="20"/></g><line x1="50" y1="120" x2="390" y2="120" stroke="#334155" stroke-dasharray="3 3"/><text x="392" y="116" font-size="10" text-anchor="end">50% line</text><text x="44" y="224" text-anchor="end">0</text><text x="44" y="184" text-anchor="end">20</text><text x="44" y="144" text-anchor="end">40</text><text x="44" y="104" text-anchor="end">60</text><text x="44" y="64" text-anchor="end">80</text><text x="44" y="24" text-anchor="end">100</text><text x="50" y="236" text-anchor="middle">1950</text><text x="132.5" y="236" text-anchor="middle">1975</text><text x="215" y="236" text-anchor="middle">2000</text><text x="297.5" y="236" text-anchor="middle">2025</text><text x="380" y="236" text-anchor="middle">2050</text><text x="215" y="254" text-anchor="middle">Year</text><text x="14" y="120" text-anchor="middle" transform="rotate(-90 14 120)">% of people living in urban areas</text><polyline points="50,160 132.5,144 215,126 274.4,110" fill="none" stroke="#1f2937" stroke-width="2.5"/><polyline points="274.4,110 380,84" fill="none" stroke="#1f2937" stroke-width="2.5" stroke-dasharray="6 4"/><circle cx="50" cy="160" r="3.5"/><circle cx="132.5" cy="144" r="3.5"/><circle cx="215" cy="126" r="3.5"/><circle cx="274.4" cy="110" r="3.5"/><circle cx="380" cy="84" r="3.5" fill="#ffffff" stroke="#1f2937"/><text x="56" y="176">30%</text><text x="132.5" y="160" text-anchor="middle">38%</text><text x="215" y="142" text-anchor="middle">47%</text><text x="274.4" y="100" text-anchor="middle">55% (2018)</text><text x="380" y="74" text-anchor="middle">68%</text><text x="300" y="200" font-size="10">dashed = projection</text></g></svg>`;

// Concentric land-use model (centre 140,140).
const landUseModel = `<svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concentric land-use model: zone A the CBD at the centre, zone B the inner city around it, zone C the suburbs, and zone D the rural–urban fringe on the outside"><rect width="440" height="280" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><circle cx="140" cy="140" r="120" fill="#bbf7d0"/><circle cx="140" cy="140" r="88" fill="#c7d2fe"/><circle cx="140" cy="140" r="56" fill="#fecaca"/><circle cx="140" cy="140" r="26" fill="#e5e7eb"/></g><g font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="140" y="145">A</text><text x="140" y="104">B</text><text x="140" y="73">C</text><text x="140" y="41">D</text></g><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="285" y="70" font-weight="bold">Key</text><rect x="285" y="80" width="14" height="14" fill="#e5e7eb" stroke="#334155"/><text x="305" y="92">A  CBD</text><rect x="285" y="104" width="14" height="14" fill="#fecaca" stroke="#334155"/><text x="305" y="116">B  Inner city</text><rect x="285" y="128" width="14" height="14" fill="#c7d2fe" stroke="#334155"/><text x="305" y="140">C  Suburbs</text><rect x="285" y="152" width="14" height="14" fill="#bbf7d0" stroke="#334155"/><text x="305" y="164">D  Rural–urban fringe</text></g></svg>`;

// Land value along a line from the city centre to the edge (no numbers — shape only).
const landValueGraph = `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of land value from the city centre to the edge: very high in the CBD, falling steeply through the inner city, then falling gently through the suburbs to its lowest at the rural–urban fringe"><rect width="420" height="240" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><line x1="50" y1="190" x2="400" y2="190" stroke="#334155"/><line x1="50" y1="20" x2="50" y2="190" stroke="#334155"/><g stroke="#94a3b8" stroke-dasharray="3 3"><line x1="90" y1="20" x2="90" y2="190"/><line x1="170" y1="20" x2="170" y2="190"/><line x1="310" y1="20" x2="310" y2="190"/></g><polyline points="50,30 90,110 150,145 250,165 400,178" fill="none" stroke="#1f2937" stroke-width="2.5"/><text x="44" y="34" text-anchor="end">High</text><text x="44" y="186" text-anchor="end">Low</text><text x="14" y="105" text-anchor="middle" transform="rotate(-90 14 105)">Land value</text><text x="70" y="206" text-anchor="middle">CBD</text><text x="130" y="206" text-anchor="middle">Inner city</text><text x="240" y="206" text-anchor="middle">Suburbs</text><text x="355" y="206" text-anchor="middle">Rural–urban fringe</text><text x="225" y="228" text-anchor="middle">Distance from the city centre →</text></g></svg>`;

// % urban by country, approx. 2023. Bar width = % × 3, starting x = 110.
const urbanByCountry = `<svg viewBox="0 0 460 232" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of the percentage of people living in urban areas, approximately 2023: Singapore 100%, Japan 92%, UK 84%, China 66%, Nigeria 54%, India 36%"><rect width="460" height="232" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="230" y="13" text-anchor="middle" font-weight="bold">% of population living in urban areas (approx., 2023)</text><g fill="#e5e7eb" stroke="#334155"><rect x="110" y="24" width="300" height="22"/><rect x="110" y="54" width="276" height="22"/><rect x="110" y="84" width="252" height="22"/><rect x="110" y="114" width="198" height="22"/><rect x="110" y="144" width="162" height="22"/><rect x="110" y="174" width="108" height="22"/></g><g text-anchor="end"><text x="104" y="39">Singapore</text><text x="104" y="69">Japan</text><text x="104" y="99">UK</text><text x="104" y="129">China</text><text x="104" y="159">Nigeria</text><text x="104" y="189">India</text></g><text x="416" y="39">100</text><text x="392" y="69">92</text><text x="368" y="99">84</text><text x="314" y="129">66</text><text x="278" y="159">54</text><text x="224" y="189">36</text><line x1="110" y1="204" x2="410" y2="204" stroke="#334155"/><g text-anchor="middle"><text x="110" y="218">0</text><text x="185" y="218">25</text><text x="260" y="218">50</text><text x="335" y="218">75</text><text x="410" y="218">100</text></g></g></svg>`;

// World urban and rural population (billions, rounded, UN WUP 2018). Scale 40 px per billion, baseline y = 210.
const urbanRuralBars = `<svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of world population in billions: 1950 urban 0.8 and rural 1.8; 2018 urban 4.2 and rural 3.4"><rect width="360" height="260" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><line x1="50" y1="210" x2="320" y2="210" stroke="#334155"/><line x1="50" y1="30" x2="50" y2="210" stroke="#334155"/><g text-anchor="end"><text x="44" y="214">0</text><text x="44" y="174">1</text><text x="44" y="134">2</text><text x="44" y="94">3</text><text x="44" y="54">4</text></g><g stroke="#334155"><line x1="46" y1="170" x2="50" y2="170"/><line x1="46" y1="130" x2="50" y2="130"/><line x1="46" y1="90" x2="50" y2="90"/><line x1="46" y1="50" x2="50" y2="50"/></g><text x="14" y="120" text-anchor="middle" transform="rotate(-90 14 120)">Population (billions)</text><rect x="80" y="178" width="40" height="32" fill="#e5e7eb" stroke="#334155"/><rect x="125" y="138" width="40" height="72" fill="#bbf7d0" stroke="#334155"/><rect x="200" y="42" width="40" height="168" fill="#e5e7eb" stroke="#334155"/><rect x="245" y="74" width="40" height="136" fill="#bbf7d0" stroke="#334155"/><g text-anchor="middle"><text x="100" y="173">0.8</text><text x="145" y="133">1.8</text><text x="220" y="37">4.2</text><text x="265" y="69">3.4</text><text x="122.5" y="226">1950</text><text x="242.5" y="226">2018</text></g><rect x="80" y="238" width="12" height="12" fill="#e5e7eb" stroke="#334155"/><text x="96" y="248">Urban</text><rect x="150" y="238" width="12" height="12" fill="#bbf7d0" stroke="#334155"/><text x="166" y="248">Rural</text></g></svg>`;

const megaTable1 =
  "| City | 2018 (millions) | 2030 projection (millions) |\n|---|---|---|\n| Tokyo | 37.5 | 36.6 |\n| Delhi | 28.5 | 38.9 |\n| Dhaka | 19.6 | 28.1 |\n| Lagos | 13.5 | 20.6 |\n\n*Source: UN World Urbanization Prospects 2018, rounded. 2030 figures are projections.*";

const megaTable2 =
  "| City | 2018 (millions) | 2030 projection (millions) |\n|---|---|---|\n| Shanghai | 25.6 | 32.9 |\n| Cairo | 20.1 | 25.5 |\n| Mumbai | 20.0 | 24.6 |\n| Lagos | 13.5 | 20.6 |\n\n*Source: UN World Urbanization Prospects 2018, rounded. 2030 figures are projections.*";

export const mcqPapers: Paper[] = [
  // =========================================================================
  {
    id: "cities-megacities-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "cities-megacities-m1-q01",
        question: "Which list puts settlements in order from **smallest to largest**?",
        options: [
          "Hamlet → village → town → city → megacity",
          "Village → hamlet → town → city → megacity",
          "Hamlet → town → village → megacity → city",
          "Village → town → hamlet → city → megacity",
        ],
        answerIndex: 0,
        explanation:
          "A hamlet is the smallest settlement (a handful of homes), then a village, a town, a city and finally a megacity of 10 million or more. Putting the village before the hamlet is the usual slip — a village is bigger and has at least a few services.",
        difficulty: "warmup",
        guideRef: "what-is-a-city",
        hints: ["Which is smaller: a hamlet or a village?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q02",
        question: "Which is the best definition of **urbanisation**?",
        options: [
          "The growth in the number of buildings in a city",
          "An increase in the proportion of a country's people living in urban areas",
          "The movement of people from cities to the countryside",
          "The building of new roads and railways between towns",
        ],
        answerIndex: 1,
        explanation:
          "Urbanisation is about the **share** (proportion) of people who are urban rising. More buildings in a city does not prove urbanisation — if the countryside grows just as fast, the urban share stays the same. People moving from cities to the countryside is counter-urbanisation, the opposite.",
        difficulty: "warmup",
        guideRef: "what-is-a-city",
        hints: ["Look for the option that talks about a proportion, not just size."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q03",
        question: "A **megacity** is an urban area with a population of at least…",
        options: ["1 million people", "5 million people", "10 million people", "50 million people"],
        answerIndex: 2,
        explanation:
          "The UN defines a megacity as an urban area of 10 million or more people. Cities of 1 million or more are often called 'million cities' — big, but not megacities.",
        difficulty: "warmup",
        guideRef: "megacities",
        hints: ["Singapore has about 6 million people and is NOT a megacity."],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q04",
        question: "Which zone of a city usually has the **highest land values** and the tallest office buildings?",
        options: ["The suburbs", "The rural–urban fringe", "The inner city", "The central business district (CBD)"],
        answerIndex: 3,
        explanation:
          "The CBD is the most accessible part of the city, so shops and offices compete for very little land. That pushes land values to their highest, so firms build upwards. The inner city is close by but has older, lower buildings and cheaper land.",
        difficulty: "warmup",
        guideRef: "characteristics-of-cities",
        hints: ["Where do roads and railway lines meet?"],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q05",
        question: "Which of these is a **pull** factor attracting people to a city?",
        options: [
          "Drought causing crops to fail in the countryside",
          "Better-paid factory and office jobs in the city",
          "Few schools in rural villages",
          "Conflict in rural areas",
        ],
        answerIndex: 1,
        explanation:
          "A pull factor is something good about the **destination** that draws people in — such as better-paid jobs in the city. Drought, few schools and conflict are all bad things about the place people leave, so they are push factors.",
        difficulty: "core",
        guideRef: "causes-of-urbanisation",
        hints: ["Pull = an attraction of the place people move TO.", "Three of these describe problems in the countryside. Which one describes the city?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q06",
        question: "Study the graph. Between which years did the share of the world's population living in urban areas **first pass 50%**?",
        diagram: urbanShareGraph,
        options: ["Between 2000 and 2018", "Between 1975 and 2000", "Between 1950 and 1975", "After 2018"],
        answerIndex: 0,
        explanation:
          "In 2000 the line is at 47% (below the 50% line) and by 2018 it is at 55% (above it), so it crossed 50% between those years — the UN puts it at around 2007–08. 'After 2018' is wrong because 55% is already more than half.",
        difficulty: "core",
        guideRef: "what-is-a-city",
        hints: ["Find the dashed 50% line first.", "Which plotted point is the last one below 50%, and which is the first above it?"],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q07",
        question: "Study the land-use model. What would you most expect to find in **zone B** (the inner city)?",
        diagram: landUseModel,
        options: [
          "Large detached houses with big gardens",
          "Farmland, golf courses and out-of-town retail parks",
          "Glass office towers and department stores",
          "Older, high-density terraced housing and former factories",
        ],
        answerIndex: 3,
        explanation:
          "The inner city grew around the old centre when factories were built, so it has older, tightly packed terraced housing and (often former) industry. Glass office towers belong in the CBD (zone A); large detached houses are typical of the suburbs (zone C); golf courses and retail parks are typical of the rural–urban fringe (zone D).",
        difficulty: "core",
        guideRef: "characteristics-of-cities",
        hints: ["Zone B is just outside the CBD — it was built early, as the city first grew.", "In the 1800s, workers needed to live close to the factories where they worked."],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q08",
        question: "**Natural increase** in a city's population happens when…",
        options: [
          "more people move into the city than leave it",
          "the city's boundary is extended outwards",
          "the birth rate is higher than the death rate",
          "the death rate is higher than the birth rate",
        ],
        answerIndex: 2,
        explanation:
          "Natural increase = births minus deaths, so it happens when the birth rate is higher than the death rate. More people moving in than leaving is net in-migration — a different cause of growth.",
        difficulty: "core",
        guideRef: "causes-of-urbanisation",
        hints: ["'Natural' means nothing to do with people moving.", "Which two things add people and take people away without anyone travelling?"],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q09",
        question: "Study the table.\n\n" + megaTable1 + "\n\nWhich statement is supported by the table?",
        options: [
          "Every city in the table is projected to grow between 2018 and 2030",
          "Lagos is projected to be the largest city in the table by 2030",
          "Tokyo is projected to shrink slightly, while Delhi is projected to grow by more than 10 million",
          "Dhaka was already larger than Delhi in 2018",
        ],
        answerIndex: 2,
        explanation:
          "Tokyo falls from 37.5 to 36.6 million (a small decrease), while Delhi rises from 28.5 to 38.9 million — an increase of 10.4 million. 'Every city grows' is wrong because of Tokyo. Lagos (20.6 million) is still the smallest in 2030, and Dhaka (19.6) was smaller than Delhi (28.5) in 2018.",
        difficulty: "core",
        guideRef: "megacities",
        hints: ["Check each statement against the numbers one at a time.", "Work out Delhi's change: 38.9 − 28.5."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q10",
        question: "Which of these is an **environmental** challenge of city life?",
        options: [
          "Air pollution from traffic and industry",
          "High house prices",
          "A shortage of well-paid jobs",
          "Crime in some neighbourhoods",
        ],
        answerIndex: 0,
        explanation:
          "Air pollution damages the natural environment (and health), so it is environmental. High house prices and a lack of good jobs are economic problems; crime is a social problem.",
        difficulty: "core",
        guideRef: "characteristics-of-cities",
        hints: ["Use SEE: social, economic, environmental.", "Which one is about air, water, land or wildlife?"],
        strategy: "Social / economic / environmental (SEE)",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q11",
        question: "What is **counter-urbanisation**?",
        options: [
          "Rural people moving into the city centre",
          "People moving out of large cities to smaller towns and rural areas",
          "A rise in the birth rate in cities",
          "Building new skyscrapers in the CBD",
        ],
        answerIndex: 1,
        explanation:
          "'Counter' means against: counter-urbanisation is the movement of people **out** of big cities to small towns and the countryside, common in HICs since the 1970s. Rural people moving into the city is rural–urban migration, which drives urbanisation instead.",
        difficulty: "core",
        guideRef: "causes-of-urbanisation",
        hints: ["'Counter' means 'against' or 'opposite'.", "What is the opposite direction to rural–urban migration?"],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q12",
        question: "Singapore is often described as **100% urban**. What does this mean?",
        options: [
          "Every part of Singapore is covered by buildings",
          "Singapore has no parks or nature reserves",
          "Singapore's population is not growing",
          "All of Singapore's residents are counted as living in an urban area",
        ],
        answerIndex: 3,
        explanation:
          "'100% urban' describes **people**, not land: every resident is counted as living in an urban area. Singapore still has plenty of green space — nature reserves such as Bukit Timah, the Central Catchment and Pulau Ubin — so 'every part is covered by buildings' is the misconception.",
        difficulty: "core",
        guideRef: "what-is-a-city",
        hints: ["Urbanisation statistics count people, not land.", "Think of Pulau Ubin or the Central Catchment Nature Reserve — are they built-up?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q13",
        question:
          "Study the data for Country P.\n\n| Year | Urban population (millions) | Rural population (millions) |\n|---|---|---|\n| 2000 | 10 | 40 |\n| 2020 | 15 | 60 |\n\nWhich statement is correct?",
        options: [
          "Its cities grew, but it did not urbanise — the urban share stayed at 20%",
          "It urbanised, because its urban population grew by 5 million",
          "It urbanised, because its urban population grew by 50%",
          "It counter-urbanised, because its rural population grew by more than its urban population",
        ],
        answerIndex: 0,
        explanation:
          "Urban share in 2000 = 10 ÷ 50 = 20%. In 2020 = 15 ÷ 75 = 20%. The cities grew by 50%, but the countryside grew by 50% too, so the **proportion** urban did not change — no urbanisation. 'Grew by 5 million' or 'by 50%' are the classic trap: bigger cities alone are not urbanisation. It is not counter-urbanisation either, because the urban share did not fall.",
        difficulty: "challenge",
        guideRef: "what-is-a-city",
        hints: [
          "Urbanisation is about the share of people who are urban, not the number.",
          "Find the total population in each year first.",
          "Urban share = urban ÷ total × 100. Compare 2000 with 2020.",
        ],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q14",
        question: "Two reports give different numbers of megacities in the world. Which is the **most likely** reason?",
        options: [
          "Some countries use 1 million people as the megacity threshold instead of 10 million",
          "Megacities only count people who were born in the city",
          "The reports draw city boundaries differently — city proper, urban agglomeration or metropolitan area — so the same place can have very different populations",
          "Megacity populations are counted only once every 50 years",
        ],
        answerIndex: 2,
        explanation:
          "The 10 million threshold is standard; what changes is **where the edge of the city is drawn**. Tokyo's 23 central wards hold about 10 million people, but the whole continuous built-up area is about 37 million (UN, 2018). Draw the boundary differently and cities move above or below 10 million. The '1 million threshold' option confuses megacities with million cities.",
        difficulty: "challenge",
        guideRef: "megacities",
        hints: [
          "The number 10 million stays the same — so what else could change?",
          "Where exactly does a city end? At the city council boundary, or where the built-up area stops?",
        ],
        strategy: "Think at different scales",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m1-q15",
        question: "Most of the world's urban growth today is in Asia and Africa. Which is the **best** explanation?",
        options: [
          "Asian and African cities are richer than European cities, so they attract more migrants",
          "Many people there still live in rural areas, and cities grow through both rural–urban migration and natural increase among young populations",
          "Natural increase has stopped in HIC cities, so all their urban growth has reversed",
          "Most HICs are still mostly rural, so they have little urban growth to come",
        ],
        answerIndex: 1,
        explanation:
          "In much of Asia and Africa a large share of people are still rural, so there are many potential migrants; migrants are mostly young adults, so they also add high natural increase. HICs are not mostly rural: they are already mostly urban (often 80%+), which is why their urbanisation has slowed. The 'richer cities' option is false — wages are usually higher in European cities.",
        difficulty: "challenge",
        guideRef: "causes-of-urbanisation",
        hints: [
          "Where are there still lots of rural people who could move?",
          "Cities grow in two ways — name both.",
          "Check each wrong option for a false fact about HICs.",
        ],
        strategy: "Eliminate options",
      },
    ],
  },
  // =========================================================================
  {
    id: "cities-megacities-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "cities-megacities-m2-q01",
        question: "Which describes a **rural** area?",
        options: [
          "A built-up area with high population density",
          "A place with many shops, offices and a CBD",
          "The countryside, with low population density and land used mainly for farming or nature",
          "A city with more than 10 million people",
        ],
        answerIndex: 2,
        explanation:
          "Rural means countryside: few people per km² and land mostly used for farming, forest or nature. A built-up, dense area with shops, offices and a CBD is urban.",
        difficulty: "warmup",
        guideRef: "what-is-a-city",
        hints: ["Rural is the opposite of urban."],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q02",
        question: "Which of these is a **push** factor that might make someone leave a rural village?",
        options: [
          "Crop failure caused by drought",
          "Hospitals and clinics in the city",
          "Friends and family already living in the city",
          "The 'bright lights' and entertainment of the city",
        ],
        answerIndex: 0,
        explanation:
          "A push factor is a problem in the place people **leave** — crop failure in the village. Hospitals, family in the city and the 'bright lights' are attractions of the destination, so they are pull factors.",
        difficulty: "warmup",
        guideRef: "causes-of-urbanisation",
        hints: ["Push = a problem that pushes you OUT of where you live now."],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q03",
        question: "In which continent are **most** of the world's megacities found?",
        options: ["Europe", "North America", "Africa", "Asia"],
        answerIndex: 3,
        explanation:
          "More than half of the world's megacities are in Asia — for example Tokyo, Delhi, Shanghai, Mumbai and Dhaka. Africa has a few (such as Cairo, Lagos and Kinshasa) and they are growing fast, but Asia has far more.",
        difficulty: "warmup",
        guideRef: "megacities",
        hints: ["Which continent has the world's two most populous countries?"],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q04",
        question: "What is the **rural–urban fringe**?",
        options: [
          "The oldest part of the city, next to the CBD",
          "The zone at the edge of a city where built-up land meets the countryside",
          "The main shopping street in the city centre",
          "An area of informal housing built by migrants",
        ],
        answerIndex: 1,
        explanation:
          "A fringe is an edge: the rural–urban fringe is where the city meets the countryside, with a mix of farms, business parks, golf courses and new housing. The oldest part next to the CBD is the inner city.",
        difficulty: "warmup",
        guideRef: "characteristics-of-cities",
        hints: ["A 'fringe' is the edge of something."],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q05",
        question: "As you move **up** the settlement hierarchy (from hamlet towards city), which change happens?",
        options: [
          "There are fewer settlements, and each offers a wider range of services",
          "There are more settlements, and each offers a wider range of services",
          "There are fewer settlements, and each offers fewer services",
          "There are more settlements, and each offers fewer services",
        ],
        answerIndex: 0,
        explanation:
          "The hierarchy is shaped like a pyramid: thousands of hamlets and villages, few cities. Bigger settlements have more people to support more services (hospitals, universities, department stores). So going up: fewer settlements, more services each. 'More settlements' is wrong — there are far fewer cities than villages.",
        difficulty: "core",
        guideRef: "what-is-a-city",
        hints: ["Are there more villages or more cities in a country?", "Where would you go to find a university hospital — a village or a city?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q06",
        question: "The graph shows land value along a line from the city centre to the edge. Which is the **best explanation** of the pattern?",
        diagram: landValueGraph,
        options: [
          "The centre has the least traffic, so land there is cheap",
          "Land is cheaper in the centre because the buildings there are the oldest",
          "The centre is the most accessible place, so many businesses compete for a small amount of land, pushing prices up",
          "There is more space towards the edge, so land value rises steadily outwards",
        ],
        answerIndex: 2,
        explanation:
          "Land value is highest in the CBD and falls outwards. Roads and rail lines meet in the centre, so it is the easiest place for most people to reach; shops and offices compete for that limited land and bid the price up. The graph shows land value **falling**, not rising, towards the edge, so the idea that it rises outwards misreads it.",
        difficulty: "core",
        guideRef: "characteristics-of-cities",
        hints: ["First describe the line: where is it highest?", "Why would a shop pay more to be in the centre?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q07",
        question: "Why does rural–urban migration often lead to **high natural increase** in cities?",
        options: [
          "Migrants are mostly elderly, which raises the death rate",
          "Migrants are mostly young adults, who are at the age when people start families",
          "Cities have higher death rates than rural areas",
          "Migrants usually move back to their village to have children",
        ],
        answerIndex: 1,
        explanation:
          "People who move for work are mostly aged about 15–35, so they have children after arriving — births rise in the city. Elderly migrants would raise the death rate, which would *lower* natural increase.",
        difficulty: "core",
        guideRef: "causes-of-urbanisation",
        hints: ["Who usually moves to find work — teenagers and young adults, or grandparents?", "What do many people in their twenties and thirties do next?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q08",
        question:
          "UN figures (2018) project that Tokyo will shrink slightly by 2030, while Dhaka will grow quickly. Which is the **best** explanation?",
        options: [
          "Tokyo has run out of land for new buildings",
          "Dhaka's birth rate is lower than Tokyo's",
          "Tokyo is a capital city, and capital cities stop growing",
          "Japan is already mostly urban and its population is ageing, while Bangladesh still has many rural migrants and a young population",
        ],
        answerIndex: 3,
        explanation:
          "Over 90% of Japanese people already live in urban areas and Japan's population is ageing and falling, so there are few new migrants and few births. Bangladesh is still largely rural with a young population, so both migration and natural increase keep Dhaka growing. 'Dhaka's birth rate is lower' is the reverse of the truth, and Dhaka is a capital too.",
        difficulty: "core",
        guideRef: "megacities",
        hints: ["What are the two ways a city grows?", "For each city, ask: are there many rural people left to move, and is the population young or old?"],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q09",
        question: "Study the bar chart. Which statement is correct?",
        diagram: urbanByCountry,
        options: [
          "India has fewer people living in urban areas than the UK does",
          "Nigeria is more urbanised than China",
          "Japan is 100% urban",
          "More than half of Nigeria's people live in urban areas",
        ],
        answerIndex: 3,
        explanation:
          "Nigeria's bar is at 54%, which is more than half. The trap is India: only 36% of its people are urban, but because India has about 1.4 billion people, that is roughly 500 million urban dwellers — far more than the UK's whole population. A **percentage** is not a **number** of people. China (66%) is more urbanised than Nigeria, and Japan is 92%, not 100%.",
        difficulty: "core",
        guideRef: "what-is-a-city",
        hints: ["Read each bar carefully against its value.", "Does the chart tell you the NUMBER of urban people, or the PERCENTAGE?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q10",
        question: "Which of these is an **economic** advantage of living in a city?",
        options: [
          "Cleaner air than in the countryside",
          "A wider choice of jobs and higher average wages",
          "Less traffic congestion",
          "Cheaper housing than in rural areas",
        ],
        answerIndex: 1,
        explanation:
          "Cities concentrate businesses, so there are more and better-paid jobs — an economic benefit. City air is usually *dirtier*, traffic is worse and housing is usually *more* expensive, so the other three are false.",
        difficulty: "core",
        guideRef: "characteristics-of-cities",
        hints: ["Economic = money and jobs.", "Check whether each statement is actually true of cities."],
        strategy: "Social / economic / environmental (SEE)",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q11",
        question:
          "From the 1970s, many people in the UK moved out of large cities to villages and small towns, often commuting back to work. This is an example of…",
        options: ["counter-urbanisation", "urbanisation", "rural–urban migration", "natural increase"],
        answerIndex: 0,
        explanation:
          "Moving from large cities to smaller towns and the countryside is counter-urbanisation. Rural–urban migration is the opposite direction (countryside to city), which drives urbanisation.",
        difficulty: "core",
        guideRef: "causes-of-urbanisation",
        hints: ["Which direction are these people moving?", "Which term means the opposite of urbanisation?"],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q12",
        question: "About what percentage of the world's people lived in urban areas in 2023?",
        options: ["About 30%", "About 45%", "About 57%", "About 80%"],
        answerIndex: 2,
        explanation:
          "The UN estimates about 57% of the world's people were urban in 2023 — the world passed the 50% mark around 2007–08. About 30% was the figure in 1950, and about 80% is typical of HICs such as the UK, not the whole world.",
        difficulty: "core",
        guideRef: "what-is-a-city",
        hints: ["The world became more than half urban around 2007–08.", "So the answer must be a bit more than 50%."],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q13",
        question: "A student says, 'The concentric land-use model describes every city perfectly.' Which is the **strongest** criticism of this claim?",
        options: [
          "The model puts the CBD in the centre",
          "Real cities rarely form neat rings: coasts, rivers, hills, transport routes and government planning all distort the pattern",
          "The model does not include the suburbs",
          "The model only works for cities with more than 10 million people",
        ],
        answerIndex: 1,
        explanation:
          "Models simplify. Real cities are bent out of shape by physical features (a coastline cuts a city in half), by roads and railways (growth stretches along them) and by planning (Singapore built high-density new towns far from the centre). The model does include the suburbs, and it was based on a city (Chicago in the 1920s) of a few million, not a megacity.",
        difficulty: "challenge",
        guideRef: "characteristics-of-cities",
        hints: [
          "A model is a simplification. What does a simplification leave out?",
          "Think of a coastal city — can it have a complete ring around its centre?",
        ],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q14",
        question:
          "Study the table.\n\n" + megaTable2 + "\n\nWhich city is projected to have the largest **percentage** increase between 2018 and 2030?",
        options: ["Shanghai", "Cairo", "Mumbai", "Lagos"],
        answerIndex: 3,
        explanation:
          "Percentage increase = increase ÷ 2018 value × 100. Lagos: 7.1 ÷ 13.5 × 100 ≈ 53%. Shanghai: 7.3 ÷ 25.6 × 100 ≈ 29%. Cairo ≈ 27%, Mumbai = 23%. Shanghai is the trap — it has the largest increase in **millions** (7.3), but it started from a much bigger base, so its percentage growth is smaller.",
        difficulty: "challenge",
        guideRef: "megacities",
        hints: [
          "Work out the increase in millions for each city first.",
          "Now divide each increase by that city's 2018 population.",
          "The biggest increase in millions is not necessarily the biggest percentage.",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m2-q15",
        question:
          "A city grows from 2 million to 3 million people in 10 years. Two-thirds of the extra people were born in the city (minus deaths) and one-third were migrants. Which statement is correct?",
        options: [
          "Natural increase added about twice as many people as migration",
          "Migration was the main cause of the city's growth",
          "The growth was caused by counter-urbanisation",
          "Natural increase and migration added the same number of people",
        ],
        answerIndex: 0,
        explanation:
          "The city gained 1 million people: about 667,000 from natural increase and about 333,000 from migration — natural increase added twice as many. Many people assume migration is always the main cause, but in many fast-growing cities natural increase is now the bigger part.",
        difficulty: "challenge",
        guideRef: "causes-of-urbanisation",
        hints: ["How many extra people altogether?", "Split 1 million into thirds.", "Compare two-thirds with one-third."],
        strategy: "Spot the misconception",
      },
    ],
  },
  // =========================================================================
  {
    id: "cities-megacities-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "cities-megacities-m3-q01",
        question: "Which is the **smallest** type of settlement?",
        options: ["Village", "Hamlet", "Town", "Conurbation"],
        answerIndex: 1,
        explanation:
          "A hamlet is just a few houses, usually with no services at all. A village is larger and has a few basic services such as a shop; a conurbation is several towns and cities that have grown into one another.",
        difficulty: "warmup",
        guideRef: "what-is-a-city",
        hints: ["It may be just a handful of houses with no shop."],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q02",
        question: "In which zone of a city would you most expect to find **newer, larger houses with gardens and garages**?",
        options: ["The CBD", "The inner city", "Old industrial docklands", "The suburbs"],
        answerIndex: 3,
        explanation:
          "The suburbs were built later, further out, where land is cheaper — so houses are larger, with gardens and space for cars. The inner city has older, tightly packed housing because land near the centre was in demand when it was built.",
        difficulty: "warmup",
        guideRef: "characteristics-of-cities",
        hints: ["Where is land cheap enough for big gardens?"],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q03",
        question: "What is **rural–urban migration**?",
        options: [
          "People moving from the countryside to towns and cities",
          "People moving from cities to the countryside",
          "People moving from one country to another",
          "People moving from one part of a city to another",
        ],
        answerIndex: 0,
        explanation:
          "Rural–urban migration is the move from rural areas (countryside) to urban areas (towns and cities) — the name gives the direction: from rural to urban. City to countryside is counter-urbanisation.",
        difficulty: "warmup",
        guideRef: "causes-of-urbanisation",
        hints: ["Read the name in order: from ___ to ___."],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q04",
        question: "Which of these cities is a **megacity**?",
        options: ["Singapore", "Oslo", "Delhi", "Perth"],
        answerIndex: 2,
        explanation:
          "Delhi's urban area had about 28.5 million people in 2018 (UN) — far above the 10 million threshold. Singapore is a big, dense city but has about 6 million people, so it is not a megacity. Oslo and Perth are much smaller.",
        difficulty: "warmup",
        guideRef: "megacities",
        hints: ["A megacity needs 10 million people or more. Singapore has about 6 million."],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q05",
        question: "Why are buildings in the CBD usually very **tall**?",
        options: [
          "Planning laws ban low buildings in the CBD",
          "Tall buildings are cheaper to build than low ones",
          "The ground is softer in the city centre",
          "Land is so expensive that firms build upwards to get more floor space from each plot",
        ],
        answerIndex: 3,
        explanation:
          "CBD land is the most expensive in the city, so building upwards makes the most of every square metre. Tall buildings are actually *more* expensive to build per floor — they are only worth it because the land is so valuable.",
        difficulty: "core",
        guideRef: "characteristics-of-cities",
        hints: ["Think about the price of land in the centre.", "If land is expensive, how do you get more space without buying more land?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q06",
        question: "Study the bar chart of world population. Which statement does it support?",
        diagram: urbanRuralBars,
        options: [
          "The rural population fell between 1950 and 2018",
          "By 2018, more people lived in urban areas than in rural areas",
          "The urban population roughly doubled between 1950 and 2018",
          "In 1950, most people lived in urban areas",
        ],
        answerIndex: 1,
        explanation:
          "In 2018 the urban bar (4.2 billion) is taller than the rural bar (3.4 billion). The rural population actually *grew* (1.8 → 3.4 billion), and the urban population rose about five times (0.8 → 4.2 billion), not two. In 1950 rural (1.8) was much bigger than urban (0.8).",
        difficulty: "core",
        guideRef: "what-is-a-city",
        hints: ["Read the value on top of each bar.", "Check each statement with the numbers — don't trust it until you have."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q07",
        question: "Farmers in a region start using tractors and harvesting machines. How does this mainly affect migration?",
        options: [
          "It is a pull factor, because machines make the city more attractive",
          "It causes counter-urbanisation",
          "It is a push factor, because fewer farm workers are needed",
          "It increases natural increase in the countryside",
        ],
        answerIndex: 2,
        explanation:
          "Mechanisation means one machine can do the work of many labourers, so farm jobs disappear and workers are pushed to look for work in cities. It happens in the countryside, so it is a push, not a pull, factor.",
        difficulty: "core",
        guideRef: "causes-of-urbanisation",
        hints: ["Where are the machines — in the city or the countryside?", "What happens to farm labourers' jobs?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q08",
        question: "Which is a typical challenge for **fast-growing megacities in lower-income countries**?",
        options: [
          "Many migrants live in informal settlements without proper water supply or sanitation",
          "There are too few people to fill the available jobs",
          "There is a shortage of young workers",
          "Housing in the city centre stands empty",
        ],
        answerIndex: 0,
        explanation:
          "When people arrive faster than homes, pipes and drains can be built, many build their own homes on unused land — informal settlements (slums) often lacking clean water and sanitation. Fast-growing cities have many young people and more workers than formal jobs, so the other options are the reverse.",
        difficulty: "core",
        guideRef: "megacities",
        hints: ["What happens if people arrive faster than the city can build homes?", "Fast-growing cities have lots of young migrants — so which options must be false?"],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q09",
        question: "Which is the best example of a **social** benefit of city life?",
        options: [
          "Access to hospitals, universities and cultural venues",
          "Higher tax income for the government",
          "Less pollution than in rural areas",
          "Lower land prices",
        ],
        answerIndex: 0,
        explanation:
          "Social benefits are about people's health, education and way of life — hospitals, universities, museums and theatres. Higher tax income is economic; cities usually have *more* pollution and *higher* land prices, so those are false.",
        difficulty: "core",
        guideRef: "characteristics-of-cities",
        hints: ["Social = people's health, education, culture and community.", "Is each statement even true of cities?"],
        strategy: "Social / economic / environmental (SEE)",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q10",
        question: "In most high-income countries (HICs), urbanisation is now **slow**. Why?",
        options: [
          "HICs have banned people from moving into cities",
          "Most cities in HICs are shrinking quickly",
          "Most people in HICs already live in urban areas, so there are few rural people left to move",
          "HIC birth rates are higher than those in LICs",
        ],
        answerIndex: 2,
        explanation:
          "HICs such as the UK and Japan urbanised during and after industrialisation and are now over 80% urban, so the urban share has little room left to rise. HIC birth rates are generally *lower* than those in LICs, not higher.",
        difficulty: "core",
        guideRef: "causes-of-urbanisation",
        hints: ["What percentage of people in the UK or Japan are already urban?", "If almost everyone is already urban, how much more can the share rise?"],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q11",
        question: "A city has a much larger **sphere of influence** than a village. What does this mean?",
        options: [
          "The city covers a larger area of land",
          "The city has more parks and open spaces",
          "The city has more people per km²",
          "People travel from a much wider surrounding area to use the city's services",
        ],
        answerIndex: 3,
        explanation:
          "The sphere of influence is the area **around** a settlement whose people come to use its services. People will travel a long way for a city's hospital, airport or university, but only a short way for a village shop. It is not about the settlement's own area or density.",
        difficulty: "core",
        guideRef: "what-is-a-city",
        hints: ["'Influence' — over whom?", "How far would you travel to a village shop? To a big hospital?"],
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q12",
        question: "Morning rush-hour traffic jams around a CBD are mainly caused by…",
        options: [
          "people leaving the CBD to shop in the suburbs",
          "many commuters travelling in from the suburbs to work in the same small area",
          "farm vehicles bringing produce into the city",
          "tourists arriving at weekends",
        ],
        answerIndex: 1,
        explanation:
          "Most jobs are concentrated in the small CBD while most people live in the suburbs, so in the morning huge numbers travel inwards at the same time. Shoppers leaving the CBD would be travelling the other way, and weekend tourists don't explain a weekday rush hour.",
        difficulty: "core",
        guideRef: "characteristics-of-cities",
        hints: ["Where do most people live, and where are most office jobs?", "What happens when they all travel at the same time?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q13",
        question: "A country has 40 million people, and 22 million of them live in urban areas. What percentage of its population is urban?",
        options: ["22%", "45%", "55%", "18%"],
        answerIndex: 2,
        explanation:
          "Urban share = 22 ÷ 40 × 100 = 55%. 45% is the **rural** share (18 ÷ 40), 18% comes from subtracting 22 from 40, and 22% simply copies the number of millions.",
        difficulty: "challenge",
        guideRef: "what-is-a-city",
        hints: ["Percentage = part ÷ whole × 100.", "Which number is the part and which is the whole?", "22 ÷ 40 = 0.55"],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q14",
        question:
          "In the UN's 2018 figures Tokyo was the world's largest urban area, but some newer estimates rank Jakarta or Dhaka higher. What is the **most likely** reason?",
        options: [
          "The newer estimates draw the urban area's boundary in a different way, so different areas and people are counted",
          "Tokyo's population halved after 2018",
          "Jakarta only became a megacity after 2018",
          "The newer estimates count only people under 65",
        ],
        answerIndex: 0,
        explanation:
          "Rankings of the biggest cities depend heavily on where each city's edge is drawn. Using a different, consistent method for every country can add or remove millions of people. Tokyo did not halve (its population changed only slightly), and Jakarta was already counted as a megacity in the UN's 2018 figures.",
        difficulty: "challenge",
        guideRef: "megacities",
        hints: [
          "Is it likely that a city of over 30 million changed size dramatically in a few years?",
          "So what else could make the numbers change?",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "cities-megacities-m3-q15",
        question: "Which change would **definitely** increase a country's level of urbanisation?",
        options: [
          "Its urban population grows by 10%",
          "Its rural population grows by 10%",
          "Both its urban and rural populations grow by 10%",
          "Its urban population grows by 10% while its rural population stays the same",
        ],
        answerIndex: 3,
        explanation:
          "Urbanisation is a rise in the urban **share**. If the urban population grows and the rural population stays the same, the share must rise. 'Urban grows by 10%' alone is not enough — if the rural population grows faster, the urban share would fall. If both grow by 10%, the share stays the same.",
        difficulty: "challenge",
        guideRef: "causes-of-urbanisation",
        hints: [
          "Urbanisation means the urban SHARE rises.",
          "For each option, ask: could the rural population be growing even faster?",
          "Try numbers: urban 10, rural 10. Apply each change.",
        ],
        strategy: "Spot the misconception",
      },
    ],
  },
];
