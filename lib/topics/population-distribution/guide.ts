import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "population-distribution",
  title: "Where Do People Live?",
  strand: "Population",
  icon: "🌏",
  summary: "Why 8 billion people crowd into a few places and leave huge areas almost empty.",
  intro:
    "Over 8 billion people share the planet, but they are not spread out like butter on toast. Most of us are packed into river valleys, coastal plains and cities, while deserts, ice sheets, mountains and rainforests stay almost empty. In this topic you will learn to describe that pattern on a map, measure crowding with population density, and explain it using physical factors (the natural environment) and human factors (jobs, transport, government decisions). By the end you should be able to look at any population map — of the world, of Egypt, of Australia, or of Singapore — and say not just *where* people live, but *why*.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "world-distribution",
      heading: "How people are spread around the world",
      discovery: {
        problem:
          "Imagine you could drop a pin at a completely random point on the Earth's land. Would you most likely land somewhere crowded or somewhere almost empty? Now drop a pin on a random *person* instead. Would that person most likely live in Asia, Africa, Europe or the Americas? Why do your two answers feel so different?",
        idea:
          "A random point on land usually lands somewhere nearly empty — desert, ice, forest, mountain or tundra. A random *person*, though, most likely lives in Asia, because about 59% of humanity lives there. People are **unevenly distributed**: a few regions are packed and most of the land is thinly peopled. Describing that unevenness clearly is the first skill of this topic.",
      },
      body:
        "**Population distribution** is the way people are spread out across an area. On a world map it is strikingly **uneven**: huge numbers crowd into a few regions while vast areas are almost empty.\n\n**Densely populated** regions (many people per km²):\n- **East Asia** — eastern China, Japan, South Korea\n- **South Asia** — the Ganges valley of northern India, and Bangladesh\n- **Western and central Europe**\n- **North-east USA** — the city chain from Boston to Washington DC\n- smaller clusters: the **Nile valley**, the island of **Java**, **West Africa** (especially southern Nigeria) and **south-east Brazil**\n\n**Sparsely populated** regions (few people per km²): the **Sahara**, **northern Canada** and **Siberia**, the **Amazon** rainforest, the **Himalayas** and Tibetan Plateau, **Mongolia**, **Australia's interior** and **Antarctica**, which has no permanent residents at all.\n\n| Region | Share of world population (approx., 2024) |\n|---|---|\n| Asia | 59% |\n| Africa | 18% |\n| Europe | 9% |\n| Latin America & Caribbean | 8% |\n| Northern America | 5% |\n| Oceania | 1% |\n\nThree big patterns to remember:\n1. **Asia dominates.** About 59% of the world's roughly 8.1 billion people (2024) live in Asia. India (about 1.44 billion) and China (about 1.41 billion) together hold more than a third of humanity; India overtook China as the most populous country in 2023.\n2. **North beats south.** Roughly 90% of people live in the Northern Hemisphere — mainly because most of the world's land is there.\n3. **People hug coasts and rivers.** Roughly 40% of people live within about 100 km of the sea, and many great clusters follow rivers such as the Nile, Ganges and Yangtze.\n\n**Describing a distribution map** is an exam skill in its own right. *Describe* means say **where** — don't explain *why* yet. Use **CLOCC** vocabulary (Continents, Lines of latitude, Oceans, Countries, Compass directions), quote **evidence** from the key, and point out any **anomaly**, such as a dense strip along the Nile running through an empty desert.\n\n> Strong: \"Population is concentrated in South and East Asia, for example eastern China, while large areas such as the Sahara and northern Canada are sparsely populated.\"\n\n> Weak: \"Lots of people live in some places and not many in others.\"",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic world map showing densely populated areas numbered 1 to 8 (East Asia, South Asia, Europe, north-east USA, Nile valley, West Africa, Java, south-east Brazil) and sparsely populated areas named in italics (Northern Canada, Greenland, Amazon, Sahara, Siberia, Mongolia, Himalayas, Outback, Antarctica), with the Equator and Tropics as dashed lines"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="240" y="18" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">World population distribution (schematic)</text><rect x="0" y="28" width="480" height="204" fill="#bae6fd"/><rect x="0" y="218" width="480" height="14" fill="#e0f2fe" stroke="#334155" stroke-width="0.5"/><g fill="#bbf7d0" stroke="#334155" stroke-width="0.8"><polygon points="34,68 34,61 65,56 115,54 140,56 163,70 171,80 156,86 153,91 145,98 140,109 138,104 128,105 119,109 119,116 128,115 130,122 140,129 143,130 135,129 125,123 109,116 94,102 85,92 84,81 65,68"/><polygon points="178,42 215,43 215,54 186,68 171,58"/><polygon points="144,130 163,128 178,140 196,147 190,166 180,172 168,182 159,190 155,206 148,200 149,188 151,162 139,147 140,140"/><polygon points="219,115 228,104 233,97 253,96 265,102 280,103 294,126 304,127 290,146 290,158 281,172 265,182 259,172 255,160 251,141 251,135 230,134 219,123"/><polygon points="228,97 228,87 234,82 246,78 246,66 259,56 278,56 315,54 365,48 415,54 465,58 440,68 415,78 403,90 393,102 390,114 375,126 370,138 365,123 355,114 340,124 336,130 330,116 323,110 311,110 314,114 305,121 294,124 284,106 284,97 274,96 255,87 244,88 234,97"/><polygon points="383,166 384,181 395,180 408,179 413,182 423,187 428,185 431,177 431,170 423,163 419,153 416,160 410,154 403,154 394,160"/><ellipse cx="238" cy="75" rx="3" ry="6"/><ellipse cx="413" cy="97" rx="4" ry="9" transform="rotate(30 413 97)"/><ellipse cx="365" cy="141" rx="10" ry="3" transform="rotate(-40 365 141)"/><ellipse cx="383" cy="139" rx="7" ry="6"/><ellipse cx="378" cy="149" rx="9" ry="2.5"/><ellipse cx="415" cy="146" rx="12" ry="4"/><ellipse cx="299" cy="163" rx="3" ry="7"/><ellipse cx="458" cy="189" rx="3" ry="8"/></g><g stroke="#334155" stroke-width="0.8" stroke-dasharray="4 3"><line x1="0" y1="140" x2="480" y2="140"/><line x1="0" y1="112" x2="480" y2="112"/><line x1="0" y1="168" x2="480" y2="168"/></g><text x="4" y="137" font-size="11" font-family="sans-serif" fill="#1f2937">Equator 0°</text><text x="4" y="109" font-size="11" font-family="sans-serif" fill="#1f2937">Tropic of Cancer</text><text x="4" y="165" font-size="11" font-family="sans-serif" fill="#1f2937">Tropic of Capricorn</text><g fill="#f87171" stroke="#b91c1c" stroke-width="0.6"><ellipse cx="385" cy="104" rx="12" ry="12"/><ellipse cx="345" cy="114" rx="14" ry="8"/><ellipse cx="252" cy="80" rx="14" ry="9"/><ellipse cx="146" cy="91" rx="8" ry="6"/><ellipse cx="279" cy="106" rx="3" ry="7"/><ellipse cx="249" cy="130" rx="7" ry="4"/><ellipse cx="378" cy="149" rx="7" ry="2.5"/><ellipse cx="184" cy="166" rx="6" ry="4"/><ellipse cx="414" cy="97" rx="3" ry="6" transform="rotate(30 414 97)"/></g><g font-size="11" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="385" y="108">1</text><text x="345" y="118">2</text><text x="252" y="84">3</text><text x="146" y="95">4</text><text x="289" y="104">5</text><text x="249" y="146">6</text><text x="376" y="162">7</text><text x="198" y="172">8</text></g><polygon points="341,104 347,96 353,104" fill="#d6d3d1" stroke="#1f2937" stroke-width="0.8"/><g font-size="11" font-style="italic" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="110" y="70">Northern Canada</text><text x="194" y="58">Greenland</text><text x="166" y="152">Amazon</text><text x="250" y="116">Sahara</text><text x="370" y="66">Siberia</text><text x="375" y="81">Mongolia</text><text x="408" y="173">Outback</text><text x="240" y="229">Antarctica</text></g><text x="338" y="94" font-size="11" font-style="italic" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Himalayas</text><circle cx="370" cy="138" r="2" fill="#1f2937"/><line x1="368" y1="140" x2="360" y2="149" stroke="#1f2937" stroke-width="0.8"/><text x="360" y="158" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Singapore</text><rect x="16" y="241" width="14" height="10" fill="#f87171" stroke="#b91c1c"/><text x="36" y="250" font-size="11" font-family="sans-serif" fill="#1f2937">Densely populated (numbered)</text><rect x="240" y="241" width="14" height="10" fill="#bbf7d0" stroke="#334155"/><text x="260" y="250" font-size="11" font-family="sans-serif" fill="#1f2937">Land; sparse areas in italics</text><text x="16" y="270" font-size="11" font-family="sans-serif" fill="#1f2937">1 East Asia · 2 South Asia · 3 Europe · 4 North-east USA</text><text x="16" y="287" font-size="11" font-family="sans-serif" fill="#1f2937">5 Nile valley · 6 West Africa · 7 Java · 8 South-east Brazil</text><text x="16" y="306" font-size="11" font-family="sans-serif" fill="#1f2937">Dashed lines: Equator (0°) and Tropics (about 23.5° N and S)</text></svg>`,
      diagramCaption:
        "A schematic map (shapes simplified, positions roughly right). Notice how most dense areas lie north of the Equator, many in Asia, and how the big empty areas are deserts, cold lands, mountains and rainforest.",
      workedExamples: [
        {
          title: "Using figures from a table",
          problem:
            "Use the table of world population shares (2024). What percentage of the world's people live in Africa and Europe combined?",
          steps: [
            "Find the two rows you need: Africa = 18%, Europe = 9%.",
            "The shares are all percentages of the same total (world population), so you can add them.",
            "18 + 9 = 27.",
          ],
          answer: "About 27% of the world's people live in Africa and Europe combined.",
          yourTurn: {
            question:
              "Your turn: using the same table, what percentage of the world's people live **outside** Asia? Give your answer as a whole-number percentage.",
            answer: { type: "number", value: 41, display: "41%" },
            solution: "All the shares add up to 100%. Asia = 59%, so outside Asia = 100 − 59 = 41%.",
          },
        },
        {
          title: "Model answer: describe a distribution (4 marks)",
          problem: "Using the world map, describe the distribution of the world's population. (4 marks)",
          steps: [
            "Check the command word: **describe** = say where, not why. No reasons needed.",
            "Start with the overall pattern: \"The world's population is unevenly distributed.\"",
            "Give the dense areas with named evidence: \"Most people live in Asia, especially eastern China and South Asia (India and Bangladesh). Europe and the north-east USA are also densely populated.\"",
            "Give the sparse areas with named evidence: \"Large areas are sparsely populated, such as the Sahara, northern Canada, Siberia and Australia's interior.\"",
            "Add a latitude/CLOCC point or an anomaly: \"Most people live in the Northern Hemisphere, and there is a thin dense strip along the Nile valley in the middle of the empty Sahara.\"",
          ],
          answer:
            "The world's population is unevenly distributed. Most people live in Asia, especially eastern China and South Asia, and Europe and the north-east USA are also densely populated. Large areas such as the Sahara, northern Canada, Siberia and Australia's interior are sparsely populated. Most people live in the Northern Hemisphere, and there is a narrow dense strip along the Nile valley within the empty Sahara.",
          yourTurn: {
            question:
              "Your turn: roughly 90% of the world's people live in one hemisphere. Which hemisphere? (Northern, Southern, Eastern or Western — give the north/south one.)",
            answer: {
              type: "text",
              accept: ["Northern Hemisphere", "northern", "the northern hemisphere", "north", "northern half", "north hemisphere"],
              display: "Northern Hemisphere",
            },
            solution:
              "The Northern Hemisphere. Most of the world's land — Europe, almost all of Asia, North America and most of Africa — lies north of the Equator, so most people do too.",
          },
        },
      ],
      keyPoints: [
        "World population distribution is **uneven**: a few dense clusters, large sparse areas.",
        "About 59% of people live in Asia; India and China together hold more than a third of humanity (2024).",
        "Dense: East Asia, South Asia, Europe, north-east USA, plus the Nile valley, Java, West Africa and south-east Brazil.",
        "Sparse: hot deserts, cold lands, high mountains and dense rainforest — e.g. Sahara, northern Canada, Himalayas, Amazon, Antarctica.",
        "Roughly 90% of people live in the Northern Hemisphere; roughly 40% live within about 100 km of the coast.",
        "\"Describe\" = where (with named places and figures), not why.",
      ],
      whyItWorks:
        "Why is the pattern so lumpy? Because people need food, water and work, and those are not spread evenly either. Food grows best where land is flat, soils are fertile and there is reliable water — so farmers clustered in river valleys and coastal plains thousands of years ago. Once a place has many people, it attracts trade, roads and ports, which bring jobs, which attract even more people. That **snowball** effect means today's crowded regions (the Ganges valley, the Nile, eastern China, Europe) were often already crowded centuries ago. Deserts, ice sheets and high mountains never offered enough food or water to start the snowball rolling.",
      strategies: ["CLOCC", "Use the command word", "TEA (Trend, Evidence, Anomaly)", "Use figures from the source", "Read the key first"],
      thinkDeeper:
        "About 90% of people live in the Northern Hemisphere. Is that mostly because the north has better conditions, or simply because it has more land? How could you test which explanation matters more using data on land area?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "population-density",
      heading: "Population density",
      discovery: {
        problem:
          "Bangladesh has about 173 million people. Canada has about 41 million. Which country is more crowded — and could a country with fewer people ever be more crowded than one with more? What extra piece of information do you need before you can decide?",
        idea:
          "You need the **area**. Bangladesh squeezes its people into about 148,000 km², so it has about 1,170 people per km². Canada spreads 41 million people over about 9.98 million km² — only about 4 per km². Dividing people by area gives **population density**, which lets you compare places of any size fairly.",
      },
      body:
        "**Population density** is the average number of people living in each square kilometre (km²) of land.\n\n    population density = total population ÷ area (km²)\n    units: people per km²\n\n- **Densely populated** = many people per km² (Singapore, Bangladesh).\n- **Sparsely populated** = few people per km² (Mongolia, Canada, Australia).\n- World average: roughly 60 people per km² of land, if you leave out Antarctica (2024).\n\n| Country | Population (approx.) | Area (km²) | Density (people per km²) |\n|---|---|---|---|\n| Singapore | 6.0 million (2024) | 735 | about 8,160 |\n| Bangladesh | 173 million (2024) | 148,000 | about 1,170 |\n| United Kingdom | 68 million (2023) | 243,000 | about 280 |\n| Egypt | 110 million (early 2020s) | 1,000,000 | about 110 |\n| Canada | 41 million (2024) | 9,980,000 | about 4.1 |\n| Australia | 27 million (2024) | 7,690,000 | about 3.5 |\n| Mongolia | 3.5 million (2024) | 1,564,000 | your turn below! |\n\n**Singapore** is one of the most densely populated countries on Earth, yet it is wealthy and well run — high density does **not** automatically mean poverty or over-population. **Mongolia** is the most sparsely populated sovereign country in the world, and nearly half of its people live in one city, Ulaanbaatar.\n\n**An average hides a lot.** Egypt's average is about 110 per km², but almost everyone lives in the Nile valley and delta, where density is far higher, while the desert is nearly empty. Canada's 4 per km² hides crowded Toronto and empty Arctic islands.\n\n**Choropleth maps** show density by shading each area according to its value, using a key of **classes** (e.g. under 100, 100–999 …). Rules: darker shade = higher density; use one colour family; classes must not overlap. Choropleths are quick to read, but every part of an area gets the same shade, and the sudden jump at a border can hide a gradual change. A **dot map** (one dot = a fixed number of people) shows where people actually cluster inside each area.",
      diagram: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Choropleth map of an imaginary island with six districts A to F shaded by population density in four classes: F and C under 100, B 100 to 999, E and A 1,000 to 4,999, D 5,000 and over"><rect x="0" y="0" width="480" height="260" fill="#ffffff"/><rect x="10" y="20" width="300" height="225" fill="#bae6fd" stroke="#334155" stroke-width="0.8"/><text x="160" y="14" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Population density of an imaginary island</text><g stroke="#1f2937" stroke-width="1.2"><polygon points="40,60 80,38 120,40 115,85 125,130 30,128 28,95" fill="#fef9c3"/><polygon points="120,40 170,32 210,45 200,90 212,130 125,130 115,85" fill="#fef9c3"/><polygon points="210,45 260,42 295,70 300,110 290,132 212,130 200,90" fill="#fde047"/><polygon points="30,128 125,130 118,175 128,222 70,220 35,180" fill="#f59e0b"/><polygon points="125,130 212,130 205,180 215,218 128,222 118,175" fill="#b45309"/><polygon points="212,130 290,132 298,175 275,212 215,218 205,180" fill="#f59e0b"/></g><g fill="#d6d3d1" stroke="#1f2937" stroke-width="0.8"><polygon points="52,78 60,64 68,78"/><polygon points="68,74 76,60 84,74"/></g><g font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937"><text x="78" y="105">F</text><text x="162" y="90">C</text><text x="252" y="92">B</text><text x="78" y="180">E</text><text x="252" y="178">A</text><text x="166" y="180" fill="#ffffff">D</text></g><circle cx="170" cy="210" r="4" fill="#ffffff" stroke="#1f2937"/><text x="178" y="214" font-size="11" font-family="sans-serif" fill="#ffffff">port</text><text x="50" y="92" font-size="11" font-family="sans-serif" fill="#1f2937">mountains</text><g stroke="#1f2937" stroke-width="1.2"><line x1="290" y1="235" x2="290" y2="210"/><polygon points="290,204 286,214 294,214" fill="#1f2937"/></g><text x="283" y="240" font-size="11" font-family="sans-serif" fill="#1f2937">N</text><text x="325" y="40" font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937">People per km²</text><g stroke="#1f2937" stroke-width="1"><rect x="325" y="52" width="22" height="16" fill="#b45309"/><rect x="325" y="76" width="22" height="16" fill="#f59e0b"/><rect x="325" y="100" width="22" height="16" fill="#fde047"/><rect x="325" y="124" width="22" height="16" fill="#fef9c3"/></g><g font-size="12" font-family="sans-serif" fill="#1f2937"><text x="355" y="64">5,000 and over</text><text x="355" y="88">1,000 – 4,999</text><text x="355" y="112">100 – 999</text><text x="355" y="136">under 100</text></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="325" y="166">Darker = more crowded.</text><text x="325" y="184">One colour family,</text><text x="325" y="200">classes do not overlap.</text><text x="325" y="224">District shapes are</text><text x="325" y="240">not drawn to scale.</text></g></svg>`,
      diagramCaption:
        "A choropleth map of an imaginary island, shaded using the densities in the district table in the worked example. The capital port district D is darkest; the mountainous north (F) is palest.",
      workedExamples: [
        {
          title: "Calculating density: Bangladesh",
          problem:
            "Bangladesh has a population of about 173,000,000 (2024) and an area of about 148,000 km². Calculate its population density to the nearest whole number.",
          steps: [
            "Write the formula: density = population ÷ area.",
            "Substitute: {{173000000/148000}}.",
            "Cancel the three zeros top and bottom to make it easier: 173,000 ÷ 148 = 1,168.9…",
            "Round to the nearest whole number: 1,169.",
            "Add the units: people per km².",
          ],
          answer: "About 1,169 people per km² — roughly 330 times Australia's density.",
          yourTurn: {
            question:
              "Your turn: Mongolia has about 3,500,000 people (2024) and an area of about 1,564,000 km². Calculate its population density, in people per km², to 1 decimal place.",
            answer: { type: "number", value: 2.2, tolerance: 0.05, allowFraction: false },
            solution:
              "3,500,000 ÷ 1,564,000 = 2.237… which rounds to 2.2 people per km² — the most sparsely populated sovereign country in the world.",
          },
        },
        {
          title: "Shading a choropleth map",
          problem:
            "This table gives data for the imaginary island on the map.\n\n| District | Population | Area (km²) | Density (per km²) |\n|---|---|---|---|\n| A | 120,000 | 40 | 3,000 |\n| B | 45,000 | 150 | ? |\n| C | 9,000 | 300 | 30 |\n| D | 600,000 | 50 | 12,000 |\n| E | 72,000 | 60 | 1,200 |\n| F | 2,000 | 400 | 5 |\n\nShow how district D's density was worked out and which class it goes into.",
          steps: [
            "Density = population ÷ area = 600,000 ÷ 50.",
            "600,000 ÷ 50 = 12,000 people per km².",
            "Read the key first: the classes are under 100 · 100–999 · 1,000–4,999 · 5,000 and over.",
            "12,000 is 5,000 or more, so D gets the **darkest** shade.",
            "Check the pattern makes sense: D contains the port, so it is the most crowded; F is mountainous, so it is palest.",
          ],
          answer: "12,000 people per km², shaded in the darkest class (5,000 and over).",
          yourTurn: {
            question:
              "Your turn: district B has 45,000 people living in 150 km². Calculate its population density in people per km².",
            answer: { type: "number", value: 300 },
            solution:
              "45,000 ÷ 150 = 300 people per km². That falls in the 100–999 class, which is why B is shaded the second-palest colour.",
          },
        },
      ],
      keyPoints: [
        "Population density = population ÷ area; units are **people per km²**.",
        "Singapore is about 8,160 per km²; Bangladesh about 1,170; Australia about 3.5; Mongolia about 2.2.",
        "A national average hides huge differences inside a country (Egypt, Canada, Australia).",
        "High density does not automatically mean poverty — Singapore is dense and wealthy.",
        "Choropleth maps shade areas by class: darker = denser, one colour family, no overlapping classes.",
      ],
      whyItWorks:
        "Why divide? Because total population on its own mixes up two things: how many people there are and how much space they have. Dividing by area asks a single fair question — \"how many people would be in one typical square kilometre if everyone were spread out evenly?\" — so a city-state of 735 km² and a continent of 7.7 million km² can be compared on the same scale. The catch is the phrase *spread out evenly*: real people never are, which is why the average can mislead.",
      strategies: ["Use figures from the source", "Read the key first", "Compare and contrast", "Spot the misconception"],
      thinkDeeper:
        "Australia's density is about 3.5 people per km² and Bangladesh's is about 1,170. Does that mean Australia could \"fit\" hundreds of millions more people? What would you need to know about Australia's land, water and climate before answering?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "physical-factors",
      heading: "Physical factors",
      discovery: {
        problem:
          "Egypt is about 1 million km² — four times the size of the UK — but about 95% of Egyptians live on only about 5% of the land. Draw a quick sketch of what you think that 5% looks like on a map. What is special about it?",
        idea:
          "That 5% is a thin green ribbon: the **Nile valley and delta**. Everywhere else is the Sahara, where it hardly rains. The Nile supplies water and, before the Aswan High Dam was finished in 1970, its yearly flood spread fertile silt over the fields. Water, flat land and fertile soil are **physical factors** — features of the natural environment — and here they decide almost everything.",
      },
      body:
        "**Physical factors** are natural features of the environment that make a place easier or harder to live in. Each can be **positive** (attracting people) or **negative** (discouraging them).\n\n| Factor | Positive (dense) | Negative (sparse) |\n|---|---|---|\n| **Relief** (shape and height of the land) | Flat lowlands and valleys — easy to build on, farm and connect with roads | Steep, high mountains (Himalayas) — hard to farm and build on, cold, thin air |\n| **Climate** | Moderate temperatures and reliable rain (much of Europe) | Too hot and dry (Sahara: under 250 mm of rain a year), too cold (Siberia, northern Canada) |\n| **Water supply** | Rivers, lakes, groundwater (Nile, Ganges) | Deserts with no reliable surface water |\n| **Soil** | Deep, fertile alluvium on flood plains and deltas (Ganges–Brahmaputra delta in Bangladesh) | Thin mountain soils; leached rainforest soils (Amazon) |\n| **Natural resources** | Coal, oil, gold, timber can attract workers (Kalgoorlie gold mines, Australia) | Few resources to make a living from |\n| **Natural hazards** | Low risk of floods, earthquakes, storms | Frequent hazards can discourage settlement — though fertile deltas and volcanic soils often attract people despite the risk |\n\n**Named examples**\n- **Nile valley (Egypt):** water plus fertile silt in a desert = one of the densest farming strips on Earth.\n- **Sahara:** under 250 mm of rain a year (much of it far less) and daytime temperatures that can top 40 °C — people live mainly at oases.\n- **Himalayas:** steep slopes, thin soils, short growing seasons and cold. Temperature falls about 6.5 °C for every 1,000 m you climb, and Everest reaches 8,849 m.\n- **Amazon:** dense forest is hard to clear and travel through; heavy rain washes nutrients out of the soil (leaching), and diseases such as malaria have historically been a problem.\n- **Bangladesh:** flat, fertile delta land with monsoon rain grows rice — supporting huge densities *despite* serious flood risk.\n- **Mongolia:** cold, dry continental climate and short grass seasons support herding, but not many people.\n\nNotice that factors **combine** and can **cancel out**: Bangladesh is hazardous but extremely fertile, so it is dense; the Amazon is warm and wet but its soils and forest cover make it sparse.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of four landscapes from left to right: high mountains (sparse), a river flood plain (dense), a hot desert (sparse) and a coastal lowland next to the sea (dense), with houses showing where people live"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><circle cx="322" cy="40" r="16" fill="#fde68a" stroke="#334155"/><ellipse cx="130" cy="34" rx="26" ry="10" fill="#e5e7eb" stroke="#334155"/><ellipse cx="150" cy="40" rx="20" ry="8" fill="#e5e7eb" stroke="#334155"/><rect x="450" y="212" width="30" height="88" fill="#bae6fd"/><path d="M0,300 L0,200 L20,170 L45,70 L62,100 L80,40 L100,92 L118,72 L140,195 L150,205 L192,205 L195,213 L207,213 L210,205 L250,205 L262,180 L290,180 Q300,170 310,180 Q320,170 330,180 L370,180 L385,192 L450,212 L450,300 Z" fill="#d6d3d1" stroke="#334155" stroke-width="1.2"/><polygon points="80,40 75,58 87,58" fill="#ffffff" stroke="#334155" stroke-width="0.8"/><polygon points="45,70 41,85 54,85" fill="#ffffff" stroke="#334155" stroke-width="0.8"/><path d="M262,180 L290,180 Q300,170 310,180 Q320,170 330,180 L370,180 L385,192 L385,198 L262,198 Z" fill="#fde68a"/><rect x="146" y="205" width="104" height="7" fill="#bbf7d0"/><polygon points="385,192 450,212 450,219 385,199" fill="#bbf7d0"/><rect x="195" y="205" width="12" height="8" fill="#38bdf8"/><g fill="#1f2937"><rect x="150" y="198" width="7" height="7"/><rect x="161" y="198" width="7" height="7"/><rect x="172" y="198" width="7" height="7"/><rect x="183" y="198" width="7" height="7"/><rect x="213" y="198" width="7" height="7"/><rect x="224" y="198" width="7" height="7"/><rect x="235" y="198" width="7" height="7"/><rect x="392" y="187" width="7" height="7"/><rect x="402" y="190" width="7" height="7"/><rect x="412" y="193" width="7" height="7"/><rect x="422" y="196" width="7" height="7"/><rect x="432" y="199" width="7" height="7"/><rect x="6" y="178" width="7" height="7"/></g><text x="201" y="196" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">river</text><text x="465" y="208" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">sea</text><g stroke="#64748b" stroke-dasharray="3 3"><line x1="140" y1="225" x2="140" y2="300"/><line x1="258" y1="225" x2="258" y2="300"/><line x1="380" y1="225" x2="380" y2="300"/></g><g font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937"><text x="70" y="240" font-weight="bold">High mountains</text><text x="70" y="255">cold, steep,</text><text x="70" y="269">thin soils</text><text x="70" y="289" font-weight="bold">SPARSE</text><text x="199" y="240" font-weight="bold">River flood plain</text><text x="199" y="255">flat, water,</text><text x="199" y="269">fertile alluvium</text><text x="199" y="289" font-weight="bold">DENSE</text><text x="322" y="240" font-weight="bold">Hot desert</text><text x="322" y="255">under 250 mm</text><text x="322" y="269">rain a year</text><text x="322" y="289" font-weight="bold">SPARSE</text><text x="418" y="240" font-weight="bold" font-size="10">Coastal plain</text><text x="418" y="255" font-size="10">flat, ports,</text><text x="418" y="269" font-size="10">mild climate</text><text x="418" y="289" font-weight="bold">DENSE</text></g><text x="12" y="18" font-size="11" font-family="sans-serif" fill="#1f2937">Higher = colder: about 6.5 °C per 1,000 m, snow on peaks</text></svg>`,
      diagramCaption:
        "A simplified cross-section. Houses (black squares) cluster on the flat, well-watered flood plain and the coastal lowland, and are almost absent from the high mountains and the desert.",
      workedExamples: [
        {
          title: "Relief and climate: the lapse rate",
          problem:
            "Temperature falls by about 6.5 °C for every 1,000 m of height. A farming village in a Himalayan valley at 500 m has a temperature of 25 °C. Estimate the temperature at a mountain pass at 3,500 m.",
          steps: [
            "Find the height difference: 3,500 − 500 = 3,000 m.",
            "Count the thousands of metres: 3,000 m = 3 × 1,000 m.",
            "Temperature drop: 3 × 6.5 = 19.5 °C.",
            "New temperature: 25 − 19.5 = 5.5 °C.",
            "Link back to population: at 5.5 °C the growing season is short and crops struggle — one reason high mountains are sparsely populated.",
          ],
          answer: "About 5.5 °C.",
          yourTurn: {
            question:
              "Your turn: a valley at 1,000 m has a temperature of 20 °C. Using a fall of 6.5 °C per 1,000 m, estimate the temperature on a peak at 5,000 m, in °C.",
            answer: { type: "number", value: -6, display: "−6 °C" },
            solution:
              "Height gain = 5,000 − 1,000 = 4,000 m. Drop = 4 × 6.5 = 26 °C. Temperature = 20 − 26 = −6 °C. Below freezing: no farming, so very few people live this high.",
          },
        },
        {
          title: "Model answer: explain a contrast (4 marks)",
          problem: "Explain why the Nile valley is densely populated but the surrounding Sahara is sparsely populated. (4 marks)",
          steps: [
            "Command word **explain** = give reasons and say *how* each one affects where people live. Aim for two developed points.",
            "Point 1 (water): \"The Nile provides a reliable water supply for drinking and irrigation, even though Egypt gets very little rain…\"",
            "Develop it: \"…so farmers can grow crops all year and support a large population.\"",
            "Point 2 (soil): \"The Nile's floods deposited fertile silt (alluvium) on the valley floor and delta, so the land is very productive.\"",
            "Contrast: \"In the Sahara, rainfall is under 250 mm a year and there is little surface water or fertile soil, so it cannot support many people except at oases.\"",
          ],
          answer:
            "The Nile provides a reliable water supply in a very dry country, so farmers can irrigate crops all year and feed many people. Its floods deposited fertile alluvium over the valley floor and delta, making the land highly productive. In contrast, the Sahara receives under 250 mm of rain a year, has little surface water and poor soils, so it can support only a few people, mainly at oases.",
          yourTurn: {
            question:
              "Your turn: name the fine, fertile material that a river deposits on its flood plain and delta when it floods.",
            answer: {
              type: "text",
              accept: ["alluvium", "silt", "alluvial soil", "alluvial silt", "alluvial deposits", "sediment"],
              display: "alluvium (silt)",
            },
            solution:
              "Alluvium (fine silt). When a river floods it slows down and drops the fine sediment it was carrying, building up deep, fertile soils — the reason flood plains and deltas such as the Nile and Ganges–Brahmaputra are so densely farmed.",
          },
        },
      ],
      keyPoints: [
        "Physical factors = natural features: relief, climate, water, soil, natural resources, natural hazards.",
        "Each factor can be positive (attracts people) or negative (discourages them).",
        "Flat, fertile, well-watered land (Nile valley, Ganges–Brahmaputra delta) is densely populated.",
        "Hot deserts (Sahara), cold lands (Siberia), high mountains (Himalayas) and dense rainforest (Amazon) are sparse.",
        "Factors combine: Bangladesh is hazard-prone but so fertile that it is extremely densely populated.",
      ],
      whyItWorks:
        "Most physical factors work through **food and water**. For most of history people had to grow their own food close to home, so they settled where crops grew well. Crops need warmth, water and nutrients. Flat flood plains get all three: rivers bring water, floods add new silt each year, and flat land is easy to plough and irrigate. In contrast, cold air at high altitude (about 6.5 °C colder per 1,000 m) shortens the growing season, steep slopes lose soil downhill, deserts lack water, and heavy rainforest rain leaches nutrients out of the soil. Fewer crops means fewer people the land can feed.",
      strategies: ["Cause → process → effect", "PEEL paragraph", "Use the command word", "Compare and contrast", "Sketch it"],
      thinkDeeper:
        "Bangladesh floods often, yet it is one of the most densely populated countries in the world. Can a natural hazard ever be a *positive* factor? Think about what floods leave behind.",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "human-factors",
      heading: "Human factors",
      discovery: {
        problem:
          "In the 1960s, Punggol and Tampines in Singapore were mostly farms, plantations and kampong villages. Today each is home to well over 100,000 people. The climate, rocks and rivers did not change. So what did?",
        idea:
          "People made the change. The government planned **HDB new towns** there and built flats, MRT lines, schools, shops and parks. Jobs, transport, services and planning are **human factors** — decisions and activities of people that make a place attractive. In modern, wealthy countries human factors often matter more than physical ones.",
      },
      body:
        "**Human factors** are economic, social and political features created by people that encourage or discourage settlement.\n\n| Factor | Encourages settlement (dense) | Discourages settlement (sparse) |\n|---|---|---|\n| **Jobs** (economic) | Factories, offices, ports, mines — e.g. Singapore's port and finance sector | Few jobs; farming only just feeds a family |\n| **Transport links** | Ports, airports, railways, MRT, motorways | Remote, poorly connected places |\n| **Services** | Schools, hospitals, shops, clean water, electricity, internet | No services: people must travel far |\n| **Political stability** | Peace and good government attract people and investment | War and conflict force people to flee |\n| **History of settlement** | Old trading cities grow because they were already big | Places that were never settled stay empty |\n| **Government planning** | New towns, new capitals, incentives | Restrictions, protected areas, national parks |\n\n**Singapore: planning for density**\n\nSingapore has about 6.0 million people (2024) on about 735 km² — and it has *grown* that land from about 580 km² in the 1960s through **land reclamation**. The **Housing & Development Board (HDB)**, set up in 1960, now houses more than three-quarters of Singapore's resident households in high-rise flats. Each **HDB new town** (Tampines, Punggol, Woodlands, and the newer \"forest town\" of Tengah) is planned as a complete community:\n- an **MRT station** and bus interchange linking residents to jobs across the island;\n- a **town centre** with shopping, clinics and libraries;\n- **neighbourhood centres**, schools, parks and park connectors within walking distance.\n\nThis lets millions live at very high density while still having green space and short journeys.\n\n**Elsewhere**\n- **Jobs and resources:** remote mining towns such as Kalgoorlie (gold, Western Australia) and Fort McMurray (oil sands, Canada) exist almost entirely because of jobs.\n- **Political decisions:** Brazil moved its capital inland to **Brasília** in 1960 to pull people away from the crowded coast; Indonesia has begun building a new capital, Nusantara, on Borneo, partly to ease pressure on crowded Java.\n- **History:** port cities such as London and Singapore grew because of trade routes chosen long ago — and the jobs they created kept attracting people.\n\nIn **richer countries** technology (air conditioning, desalination, imported food) lets human factors overcome physical ones. In **poorer, mostly rural** countries, physical factors such as soil and water still shape distribution most strongly.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic plan of a Singapore-style HDB new town: four neighbourhoods of high-rise blocks around a town centre with an MRT station and bus interchange, a school and a central park, with a key explaining how each feature attracts residents"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="175" y="16" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A planned HDB new town (schematic)</text><rect x="20" y="28" width="310" height="262" rx="24" fill="#f8fafc" stroke="#334155" stroke-width="1.2"/><g fill="#cbd5e1" stroke="#334155" stroke-width="0.7"><rect x="40" y="45" width="14" height="9"/><rect x="62" y="45" width="14" height="9"/><rect x="84" y="45" width="14" height="9"/><rect x="106" y="45" width="14" height="9"/><rect x="40" y="65" width="14" height="9"/><rect x="62" y="65" width="14" height="9"/><rect x="84" y="65" width="14" height="9"/><rect x="106" y="65" width="14" height="9"/><rect x="40" y="85" width="14" height="9"/><rect x="62" y="85" width="14" height="9"/><rect x="84" y="85" width="14" height="9"/><rect x="106" y="85" width="14" height="9"/><rect x="230" y="45" width="14" height="9"/><rect x="252" y="45" width="14" height="9"/><rect x="274" y="45" width="14" height="9"/><rect x="296" y="45" width="14" height="9"/><rect x="230" y="65" width="14" height="9"/><rect x="252" y="65" width="14" height="9"/><rect x="274" y="65" width="14" height="9"/><rect x="296" y="65" width="14" height="9"/><rect x="230" y="85" width="14" height="9"/><rect x="252" y="85" width="14" height="9"/><rect x="274" y="85" width="14" height="9"/><rect x="296" y="85" width="14" height="9"/><rect x="40" y="200" width="14" height="9"/><rect x="62" y="200" width="14" height="9"/><rect x="84" y="200" width="14" height="9"/><rect x="106" y="200" width="14" height="9"/><rect x="40" y="220" width="14" height="9"/><rect x="62" y="220" width="14" height="9"/><rect x="84" y="220" width="14" height="9"/><rect x="106" y="220" width="14" height="9"/><rect x="40" y="240" width="14" height="9"/><rect x="62" y="240" width="14" height="9"/><rect x="84" y="240" width="14" height="9"/><rect x="106" y="240" width="14" height="9"/><rect x="230" y="200" width="14" height="9"/><rect x="252" y="200" width="14" height="9"/><rect x="274" y="200" width="14" height="9"/><rect x="296" y="200" width="14" height="9"/><rect x="230" y="220" width="14" height="9"/><rect x="252" y="220" width="14" height="9"/><rect x="274" y="220" width="14" height="9"/><rect x="296" y="220" width="14" height="9"/><rect x="230" y="240" width="14" height="9"/><rect x="252" y="240" width="14" height="9"/><rect x="274" y="240" width="14" height="9"/><rect x="296" y="240" width="14" height="9"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="80" y="112">Neighbourhood</text><text x="270" y="112">Neighbourhood</text><text x="80" y="270">Neighbourhood</text><text x="270" y="270">Neighbourhood</text></g><rect x="145" y="45" width="60" height="28" fill="#c7d2fe" stroke="#334155"/><text x="175" y="63" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">School</text><line x1="20" y1="150" x2="330" y2="150" stroke="#334155" stroke-width="5"/><text x="30" y="143" font-size="11" font-family="sans-serif" fill="#1f2937">MRT line</text><rect x="137" y="102" width="76" height="34" fill="#fecaca" stroke="#334155"/><text x="175" y="117" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Town centre</text><text x="175" y="130" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">shops, clinic</text><circle cx="175" cy="150" r="9" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><rect x="148" y="164" width="54" height="18" fill="#fde68a" stroke="#334155"/><text x="175" y="177" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Bus</text><ellipse cx="175" cy="232" rx="42" ry="26" fill="#bbf7d0" stroke="#334155"/><text x="175" y="236" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Park</text><path d="M330,150 L345,150" stroke="#334155" stroke-width="5"/><polygon points="345,143 357,150 345,157" fill="#334155"/><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="345" y="135">to jobs in the</text><text x="345" y="174">city centre</text></g><g stroke="#334155" stroke-width="0.8"><rect x="342" y="200" width="12" height="9" fill="#cbd5e1"/><circle cx="348" cy="225" r="5" fill="#ffffff" stroke-width="1.6"/><rect x="342" y="236" width="12" height="9" fill="#fecaca"/><rect x="342" y="254" width="12" height="9" fill="#c7d2fe"/><rect x="342" y="272" width="12" height="9" fill="#bbf7d0"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="360" y="208">HDB blocks: homes</text><text x="360" y="229">MRT: transport</text><text x="360" y="245">services</text><text x="360" y="263">education</text><text x="360" y="281">green space</text></g></svg>`,
      diagramCaption:
        "A simplified planned new town. High-rise blocks house many people on little land, while the MRT line, bus interchange, town centre, school and park supply the human factors — transport, jobs access and services — that make high density work.",
      workedExamples: [
        {
          title: "Percentage change: a new town grows",
          problem:
            "Imaginary data: a new town had 120,000 residents. Five years after a new MRT station opened, it had 150,000 residents. Calculate the percentage increase.",
          steps: [
            "Find the change: 150,000 − 120,000 = 30,000.",
            "Divide by the **original** value: {{30000/120000}} = 0.25.",
            "Multiply by 100: 0.25 × 100 = 25.",
            "Interpret it: better transport (a human factor) helped pull 25% more people into the town.",
          ],
          answer: "A 25% increase.",
          yourTurn: {
            question:
              "Your turn (imaginary data): a town grew from 40,000 to 70,000 residents after a new industrial estate brought jobs. Calculate the percentage increase. Give your answer as a whole number.",
            answer: { type: "number", value: 75, display: "75%" },
            solution:
              "Change = 70,000 − 40,000 = 30,000. 30,000 ÷ 40,000 = 0.75. 0.75 × 100 = 75% increase. (Dividing by 70,000 instead of the original 40,000 is the classic mistake — it gives about 43%.)",
          },
        },
        {
          title: "Model answer: human factors in Singapore (4 marks)",
          problem: "Explain how human factors allow Singapore to have a very high population density. (4 marks)",
          steps: [
            "Pick two human factors and develop each with a \"so…\" or \"which means…\".",
            "Factor 1 — jobs: \"Singapore has many jobs in its port, finance and other services, which attracts workers and their families.\"",
            "Factor 2 — planning: \"The government's HDB builds high-rise flats in planned new towns, so many people can live on a small area of land.\"",
            "Develop with transport/services: \"Each new town has an MRT station, schools and a town centre, so people can live densely but still reach work and services easily.\"",
            "Use a figure: \"Singapore has about 8,000 people per km² (2024).\"",
          ],
          answer:
            "Singapore has many jobs in its port, finance and service industries, which attracts workers and their families. The government plans housing carefully: HDB builds high-rise flats in new towns such as Tampines and Punggol, so many people can live on a small area — giving a density of about 8,000 people per km². Each new town has an MRT station, bus interchange, schools and a town centre, so residents can reach jobs and services easily even at very high density.",
          yourTurn: {
            question:
              "Your turn: which Singapore government body, set up in 1960, plans and builds the public-housing new towns where most Singaporeans live? Give its name or initials.",
            answer: {
              type: "text",
              accept: ["Housing & Development Board", "Housing and Development Board", "HDB", "the HDB", "Housing Development Board"],
              display: "Housing & Development Board (HDB)",
            },
            solution:
              "The Housing & Development Board (HDB). It was set up in 1960 to tackle a housing shortage and now houses more than three-quarters of resident households.",
          },
        },
      ],
      keyPoints: [
        "Human factors = economic, social and political features made by people.",
        "Key ones: jobs, transport links, services, political stability, history of settlement, government planning.",
        "Singapore: HDB new towns, MRT and land reclamation let about 6 million people live on about 735 km².",
        "Governments can deliberately shift population: Brasília (1960), Indonesia's planned capital Nusantara.",
        "In rich, urban countries human factors usually matter more than physical ones.",
      ],
      whyItWorks:
        "Human factors work through **opportunity**. Once farming is no longer the main way to earn a living, people move to where the jobs are — and jobs cluster where there are already workers, customers, transport and services. A port attracts traders, traders attract banks and shops, those attract more workers, and the government builds more housing and transport to serve them. Physical factors set the starting point, but human decisions and money can overcome many physical limits: reclaiming land from the sea, desalinating water, cooling buildings with air conditioning.",
      strategies: ["PEEL paragraph", "Social / economic / environmental (SEE)", "Use figures from the source", "Think at different scales"],
      thinkDeeper:
        "Singapore has almost no natural resources, no big rivers and very little land, yet it is extremely densely populated. Does Singapore prove that physical factors don't matter any more — or that they matter in a different way?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "explaining-distribution",
      heading: "Explaining a distribution",
      discovery: {
        problem:
          "Australia is about 7.7 million km² — roughly 10,000 times the size of Singapore — and has about 27 million people (2024). Yet if you look at a population map, almost the whole country looks empty. Where do Australians actually live, and why there?",
        idea:
          "Roughly 85% of Australians live within about 50 km of the coast, mostly in a crescent of cities in the south-east (Brisbane, Sydney, Melbourne, Adelaide) plus Perth in the south-west. The interior is hot and arid, so few people live there (**physical**). The coastal cities grew from ports founded by European settlers and now hold most of the jobs (**human**). Real distributions are almost always explained by **both** kinds of factor working together.",
      },
      body:
        "To **explain** a distribution, combine physical and human factors, link each to the pattern, and think about **scale**.\n\n**Global scale:** most people live in warm-temperate and tropical lowlands with reliable water — monsoon Asia, Europe, eastern North America — and avoid extremes of cold, drought and altitude.\n\n**National scale — three case studies**\n\n| Country | Where people live | Physical reasons | Human reasons |\n|---|---|---|---|\n| **Egypt** | About 95% on about 5% of the land: the Nile valley and delta (Cairo, Alexandria) | The only reliable water and fertile alluvium in the Sahara; Cairo gets only about 25 mm of rain a year | Thousands of years of farming and settlement; Cairo is the capital and jobs centre |\n| **Australia** | Roughly 85% within about 50 km of the coast, mainly the south-east and south-west | Arid interior (much of it desert); milder, wetter coasts | Cities grew from ports founded by European settlers; jobs, trade and services are there |\n| **Brazil** | Concentrated along the south-east coast (São Paulo, Rio de Janeiro); sparse Amazon interior | Dense rainforest, leached soils and heavy rain in the Amazon | Colonial ports and later industry on the coast; Brasília (1960) built to draw people inland |\n\n**Local scale:** inside Singapore, density is highest in HDB new towns and lowest in areas such as the Central Catchment Nature Reserve, military land and Pulau Ubin — mostly because of **planning decisions**, not physical limits.\n\n**Factors change in importance over time.** Technology changes which places are habitable:\n- **Irrigation and dams** (Egypt's Aswan High Dam, finished 1970) control floods and store water.\n- **Air conditioning** makes hot, humid cities like Singapore comfortable all year.\n- **Desalination** turns seawater into drinking water — it supplies much of Dubai's water and is one of Singapore's Four National Taps.\n- **Transport** (railways, aircraft) connects remote places such as mining towns.\n\nSo as countries grow richer, **human factors tend to matter more** and physical factors less — though physical limits never disappear completely: water shortages still restrict desert cities such as Las Vegas.\n\n**Exam tip:** in a \"to what extent\" or 6-mark answer, explain at least one physical and one human factor, use a named place with a figure, and finish with a judgement — which factor matters *most* in this place, and why.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two schematic maps. Left: Egypt, desert with a dense strip along the Nile valley and delta, with Cairo, Alexandria and Aswan marked. Right: Australia, arid interior with a dense coastal fringe in the south-east from Brisbane to Adelaide and around Perth"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><rect x="10" y="38" width="225" height="190" fill="#bae6fd" stroke="#334155" stroke-width="0.8"/><rect x="245" y="38" width="228" height="190" fill="#bae6fd" stroke="#334155" stroke-width="0.8"/><text x="122" y="28" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Egypt</text><text x="359" y="28" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Australia</text><polygon points="15,50 103,57 123,48 146,54 181,54 193,86 182,117 152,79 170,127 195,185 229,221 15,221" fill="#fde68a" stroke="#334155" stroke-width="1"/><polygon points="127,76 103,57 123,48 146,54" fill="#bbf7d0" stroke="#334155" stroke-width="0.6"/><polyline points="127,76 123,113 127,127 154,147 152,154 157,183" fill="none" stroke="#bbf7d0" stroke-width="9" stroke-linejoin="round"/><polyline points="127,76 123,113 127,127 154,147 152,154 157,183" fill="none" stroke="#2563eb" stroke-width="2" stroke-linejoin="round"/><polygon points="157,183 150,200 138,214 132,221 140,221 150,207 160,190" fill="#38bdf8" stroke="#2563eb" stroke-width="0.8"/><g fill="#dc2626"><circle cx="118" cy="62" r="2"/><circle cx="126" cy="58" r="2"/><circle cx="134" cy="60" r="2"/><circle cx="122" cy="68" r="2"/><circle cx="130" cy="67" r="2"/><circle cx="140" cy="58" r="2"/><circle cx="112" cy="58" r="2"/><circle cx="124" cy="92" r="2"/><circle cx="124" cy="104" r="2"/><circle cx="125" cy="120" r="2"/><circle cx="138" cy="136" r="2"/><circle cx="150" cy="144" r="2"/><circle cx="153" cy="160" r="2"/><circle cx="155" cy="172" r="2"/></g><g fill="#1f2937"><circle cx="127" cy="76" r="4"/><circle cx="103" cy="56" r="3"/><circle cx="157" cy="183" r="3"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="116" y="80" text-anchor="end">Cairo</text><text x="99" y="68" text-anchor="end">Alexandria</text><text x="148" y="187" text-anchor="end">Aswan</text><text x="62" y="140" text-anchor="middle" font-style="italic">Sahara</text><text x="62" y="154" text-anchor="middle" font-style="italic">(Western Desert)</text><text x="215" y="150" text-anchor="middle">Red</text><text x="215" y="163" text-anchor="middle">Sea</text><text x="14" y="47">Mediterranean Sea</text><text x="128" y="210" text-anchor="end">Lake Nasser</text></g><polygon points="265,109 262,128 270,168 284,173 314,165 338,155 363,160 382,173 392,187 422,192 441,185 456,153 458,124 441,109 422,94 419,75 407,55 400,65 397,84 390,87 373,75 378,60 353,57 343,65 338,75 324,70 309,84 304,89 289,99" fill="#fde68a" stroke="#334155" stroke-width="1"/><ellipse cx="427" cy="207" rx="7" ry="5" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><polyline points="456,136 452,150 447,167 436,182 417,186 400,182 385,172" fill="none" stroke="#f87171" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/><ellipse cx="274" cy="158" rx="6" ry="8" fill="#f87171" opacity="0.85"/><g fill="#1f2937"><circle cx="456" cy="136" r="3"/><circle cx="447" cy="167" r="3"/><circle cx="417" cy="186" r="3"/><circle cx="385" cy="172" r="3"/><circle cx="274" cy="158" r="3"/><circle cx="347" cy="62" r="2"/><circle cx="362" cy="117" r="2"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="450" y="132" text-anchor="end">Brisbane</text><text x="440" y="163" text-anchor="end">Sydney</text><text x="414" y="204" text-anchor="end">Melbourne</text><text x="379" y="183" text-anchor="end">Adelaide</text><text x="281" y="148">Perth</text><text x="343" y="57" text-anchor="end">Darwin</text><text x="366" y="113">Alice Springs</text><text x="340" y="135" text-anchor="middle" font-style="italic">Arid interior</text><text x="340" y="149" text-anchor="middle" font-style="italic">(Outback)</text></g><rect x="14" y="240" width="14" height="10" fill="#f87171" stroke="#b91c1c"/><text x="34" y="249" font-size="11" font-family="sans-serif" fill="#1f2937">Densely populated</text><rect x="150" y="240" width="14" height="10" fill="#fde68a" stroke="#334155"/><text x="170" y="249" font-size="11" font-family="sans-serif" fill="#1f2937">Desert / arid</text><rect x="262" y="240" width="14" height="10" fill="#bbf7d0" stroke="#334155"/><text x="282" y="249" font-size="11" font-family="sans-serif" fill="#1f2937">Fertile / irrigated land</text><text x="14" y="272" font-size="11" font-family="sans-serif" fill="#1f2937">Egypt: about 95% of people on about 5% of the land.</text><text x="14" y="290" font-size="11" font-family="sans-serif" fill="#1f2937">Australia: roughly 85% within about 50 km of the coast. (Maps not to the same scale.)</text></svg>`,
      diagramCaption:
        "Two countries, one lesson: people crowd where water, fertile land, ports and jobs come together. In Egypt the key factor is the Nile; in Australia it is the milder, wetter coast where the cities and jobs grew.",
      workedExamples: [
        {
          title: "Egypt: what the average hides",
          problem:
            "Egypt has about 110,000,000 people and an area of about 1,000,000 km². About 95% of the people live on about 5% of the land. Calculate (a) Egypt's average population density and (b) the density of the inhabited Nile valley and delta.",
          steps: [
            "(a) Average density = 110,000,000 ÷ 1,000,000 = 110 people per km².",
            "(b) People in the valley and delta = 95% of 110,000,000 = 0.95 × 110,000,000 = 104,500,000.",
            "Area of the valley and delta = 5% of 1,000,000 km² = 0.05 × 1,000,000 = 50,000 km².",
            "Density there = {{104500000/50000}} = 2,090 people per km².",
            "Interpret: the average (110) completely hides how crowded the Nile strip really is.",
          ],
          answer: "(a) 110 people per km²; (b) about 2,090 people per km² in the Nile valley and delta.",
          yourTurn: {
            question:
              "Your turn: how many times greater is the density of the inhabited Nile strip (2,090 per km²) than Egypt's average density (110 per km²)? Give a whole number.",
            answer: { type: "number", value: 19 },
            solution: "2,090 ÷ 110 = 19. People in the Nile valley and delta live about 19 times more densely than the national average suggests.",
          },
        },
        {
          title: "Model answer: explain Australia's distribution (6 marks)",
          problem: "Explain the distribution of population in Australia. Refer to physical and human factors. (6 marks)",
          steps: [
            "Open with a one-sentence description: \"Australia's population is concentrated on the coast, especially in the south-east, while the interior is very sparsely populated.\" Add a figure.",
            "Physical factor 1 (climate/water): the interior is arid — hot with low, unreliable rainfall — so there is little water for farming or drinking.",
            "Physical factor 2 (positive): the south-east and south-west coasts have milder temperatures and more reliable rain, so farming and cities could develop.",
            "Human factor 1 (history): European settlers arrived by sea, so the first towns were ports such as Sydney — and they kept growing.",
            "Human factor 2 (jobs/services): today most jobs, universities, hospitals and transport links are in the coastal cities, so new migrants also settle there.",
            "Conclude with a judgement: the physical factor (aridity) explains why the interior is empty, while human factors explain why people concentrate in a few big coastal cities rather than spreading along the whole coast.",
          ],
          answer:
            "Australia's population is concentrated on the coast — roughly 85% of people live within about 50 km of it — mainly in the south-east (Brisbane, Sydney, Melbourne, Adelaide) and around Perth. The interior is arid, with high temperatures and low, unreliable rainfall, so there is too little water for most farming or large settlements. In contrast, the south-east and south-west coasts are milder and wetter, so agriculture and towns could develop. European settlers arrived by sea, so the first settlements were ports like Sydney, which grew into large cities. Today these cities hold most jobs, services and transport links, so new arrivals, including migrants, also settle there. Overall, aridity explains the empty interior, but human factors explain why people are concentrated in a handful of big coastal cities.",
          yourTurn: {
            question:
              "Your turn: name the city that Brazil built in its interior and made its capital in 1960 to encourage people to move away from the crowded coast.",
            answer: { type: "text", accept: ["Brasília", "Brasilia"], display: "Brasília" },
            solution:
              "Brasília. Moving the capital inland was a deliberate **human** (political) factor designed to change Brazil's distribution, which had always been concentrated near the Atlantic coast.",
          },
        },
      ],
      keyPoints: [
        "Explaining a distribution means combining physical **and** human factors and linking each to the pattern.",
        "Egypt: about 95% of people on about 5% of the land — the Nile valley and delta.",
        "Australia: roughly 85% within about 50 km of the coast; the arid interior is nearly empty.",
        "Brazil: dense south-east coast, sparse Amazon; Brasília (1960) was built to pull people inland.",
        "Scale matters: global, national and local patterns have different main causes.",
        "Technology (irrigation, air conditioning, desalination) makes human factors more important over time.",
      ],
      whyItWorks:
        "Why do physical and human factors reinforce each other? Physical factors decide where people **first** settle — usually where water and food were easiest to get. Those early settlements then build up human advantages: roads, ports, markets, government offices, universities. Later generations move there for the **human** advantages, even if the original physical reason no longer matters much. This is called **cumulative causation**: success attracts more success. It explains why Cairo still dominates Egypt and why Sydney and Melbourne, not the interior, attract new Australians.",
      strategies: ["Think at different scales", "Weigh both sides then judge", "PEEL paragraph", "Use figures from the source", "Cause → process → effect"],
      thinkDeeper:
        "Las Vegas and Dubai are big cities in hot deserts. Do they disprove the idea that deserts are sparsely populated — or do they show how human factors and technology can overcome physical ones? What might limit how big such cities can grow?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Population distribution", back: "The way people are spread out across an area — where they live." },
      { front: "Population density", back: "The average number of people per km² of land: population ÷ area." },
      { front: "Densely populated", back: "An area with many people per km², e.g. Singapore, Bangladesh, the Nile valley." },
      { front: "Sparsely populated", back: "An area with few people per km², e.g. the Sahara, Mongolia, northern Canada, Australia's interior." },
      { front: "Which continent holds about 59% of the world's people?", back: "Asia (2024)." },
      { front: "Roughly what share of people live in the Northern Hemisphere?", back: "Roughly 90% — most of the world's land is north of the Equator." },
      { front: "Singapore's population density", back: "About 8,000 people per km² (about 6.0 million people on about 735 km², 2024)." },
      { front: "Mongolia's population density", back: "About 2 people per km² — the most sparsely populated sovereign country." },
      { front: "Physical factor", back: "A natural feature affecting where people live: relief, climate, water, soil, natural resources, natural hazards." },
      { front: "Human factor", back: "A feature created by people affecting where they live: jobs, transport, services, political stability, history, government planning." },
      { front: "Relief", back: "The height and shape of the land — e.g. flat lowland vs steep mountains." },
      { front: "Alluvium", back: "Fine, fertile silt deposited by a river when it floods — makes flood plains and deltas good farmland." },
      { front: "Why is Egypt's population concentrated along the Nile?", back: "It is the only reliable water and fertile land in the Sahara; about 95% of Egyptians live on about 5% of the land." },
      { front: "Where do most Australians live?", back: "On the coast — roughly 85% within about 50 km of it, mainly in the south-east and around Perth." },
      { front: "Choropleth map", back: "A map that shades areas by value classes (e.g. density): darker shade = higher value." },
      { front: "Why are the Himalayas sparsely populated?", back: "Steep relief, thin soils, cold (about 6.5 °C colder per 1,000 m) and a short growing season." },
      { front: "HDB", back: "Singapore's Housing & Development Board (1960): plans and builds the high-rise new towns where most residents live." },
      { front: "Brasília", back: "Brazil's capital, opened in 1960 in the interior to draw people away from the crowded coast." },
    ],
    mustKnow: [
      "Describe the world's population distribution using named dense and sparse regions and CLOCC vocabulary.",
      "State that about 59% of people live in Asia and roughly 90% in the Northern Hemisphere.",
      "Define population distribution and population density, and tell them apart.",
      "Calculate population density (population ÷ area) and give the units, people per km².",
      "Compare densities of Singapore, Bangladesh, Australia, Mongolia and Canada.",
      "Read and shade a choropleth map using its key classes.",
      "Explain how relief, climate, water supply, soil, resources and hazards affect where people live, with examples.",
      "Explain how jobs, transport, services, political stability, history and planning affect where people live.",
      "Explain the distribution in Egypt and Australia using both physical and human factors.",
      "Explain how Singapore's HDB new towns and land reclamation support a very high density.",
      "Explain why physical factors matter less as technology improves — and why they never disappear.",
      "Write a PEEL paragraph that uses a named place and a figure.",
    ],
    misconceptions: [
      { wrong: "The country with the most people is the most crowded.", right: "Crowding depends on area too. India has the most people, but Singapore and Bangladesh have far higher densities." },
      { wrong: "High population density means a country is poor or over-populated.", right: "Singapore is one of the densest countries and is wealthy. Over-population is about people vs resources, not density alone." },
      { wrong: "Distribution and density mean the same thing.", right: "Distribution is *where* people are (the pattern); density is *how many* per km² (a number)." },
      { wrong: "A country's average density tells you how crowded every part of it is.", right: "Averages hide variation: Egypt averages about 110 per km² but the Nile strip is roughly 2,000 per km² and the desert is nearly empty." },
      { wrong: "Natural hazards always keep people away.", right: "Fertile deltas (Bangladesh) and volcanic soils attract dense populations despite the risk." },
      { wrong: "All deserts and hot places are empty.", right: "Oases, the Nile valley and cities such as Dubai and Las Vegas show that water and technology can support many people in deserts." },
      { wrong: "Physical factors no longer matter today.", right: "Technology reduces their effect, but water shortages, extreme cold and high altitude still limit where people live." },
      { wrong: "Rainforests must have fertile soil because so much grows there.", right: "Heavy rain leaches nutrients out of rainforest soils; most nutrients are stored in the plants, so cleared land soon loses fertility." },
    ],
    examMistakes: [
      "Forgetting the units for density — always write people per km².",
      "Dividing area by population instead of population by area.",
      "Explaining (why) when the question says *describe* (where) — and vice versa.",
      "Writing vague descriptions (\"lots of people in some places\") with no named places or figures.",
      "Listing factors without explaining *how* each one affects where people live (no \"so…\" or \"which means…\").",
      "Only giving physical factors when the question asks for physical **and** human factors.",
      "In percentage change, dividing by the new value instead of the original value.",
      "Missing a judgement at the end of a \"to what extent\" or 6-mark answer.",
    ],
    mnemonics: [
      { topic: "Describing a distribution map", device: "CLOCC", explanation: "Continents, Lines of latitude, Oceans, Countries, Compass directions — the vocabulary that turns \"over there\" into precise geography." },
      { topic: "Physical factors", device: "Really Cold Weather Stops Rice Harvests", explanation: "Relief, Climate, Water supply, Soil, Resources (natural), Hazards." },
      { topic: "Human factors", device: "Jolly Trains Stop People Heading Places", explanation: "Jobs, Transport, Services, Political stability, History of settlement, Planning by government." },
      { topic: "Writing an explanation", device: "PEEL", explanation: "Point, Evidence (named place and figure), Explain (so… which means…), Link back to the question." },
    ],
    realWorld: [
      { title: "Singapore: growing land, building up", detail: "Land reclamation has grown Singapore from about 580 km² in the 1960s to about 735 km², and HDB new towns such as Tampines, Punggol and Tengah let about 6 million people live at about 8,000 per km².", emoji: "🏙️" },
      { title: "Egypt's ribbon of life", detail: "About 95% of Egyptians live along the Nile valley and delta, which make up about 5% of the country. Egypt is building a New Administrative Capital in the desert east of Cairo, partly to ease crowding in the capital.", emoji: "🌊" },
      { title: "Brasília and Nusantara: moving a capital", detail: "Brazil opened Brasília in its interior in 1960 to draw people from the coast. Indonesia has begun building a new capital, Nusantara, on Borneo, partly to relieve pressure on crowded Java.", emoji: "🏛️" },
      { title: "Australia's coastal fringe", detail: "Roughly 85% of Australians live within about 50 km of the coast. Outback mining towns such as Kalgoorlie exist because of jobs, and at many remote mines workers fly in and out rather than living there permanently.", emoji: "🦘" },
      { title: "Bangladesh: crowded delta", detail: "About 173 million people (2024) live on about 148,000 km² of fertile Ganges–Brahmaputra delta — roughly 1,170 per km² — despite regular monsoon floods and cyclones.", emoji: "🌾" },
      { title: "Desert cities and desalination", detail: "Dubai relies heavily on desalinated seawater, and Singapore uses desalination as one of its Four National Taps — technology that lets people live where natural fresh water is scarce.", emoji: "💧" },
    ],
    videos: [
      { title: "Population distribution and density", channel: "Time for Geography", url: "https://www.youtube.com/results?search_query=time+for+geography+population+distribution" },
      { title: "Factors affecting population density (IGCSE)", channel: "Mr Sinn", url: "https://www.youtube.com/results?search_query=mr+sinn+igcse+population+density+factors" },
      { title: "Why do Egyptians live along the Nile?", channel: "Various (YouTube search)", url: "https://www.youtube.com/results?search_query=why+egypt+population+lives+along+nile" },
      { title: "Why does almost no one live in Australia's interior?", channel: "Various (YouTube search)", url: "https://www.youtube.com/results?search_query=why+australians+live+on+the+coast+population+distribution" },
      { title: "How HDB new towns are planned", channel: "Various (YouTube search)", url: "https://www.youtube.com/results?search_query=singapore+hdb+new+town+planning" },
    ],
    formulas: [
      { name: "Population density", formula: "Population ÷ area, in people per km².", note: "e.g. 6,000,000 ÷ 735 ≈ 8,160 people per km² for Singapore." },
      { name: "Population distribution", formula: "The pattern of where people live across an area — even or uneven, clustered or dispersed." },
      { name: "Densely populated", formula: "Having many people per km² (e.g. Singapore, Bangladesh, the Nile valley)." },
      { name: "Sparsely populated", formula: "Having few people per km² (e.g. Mongolia, the Sahara, northern Canada)." },
      { name: "Percentage change", formula: "(new − original) ÷ original × 100.", note: "Divide by the original value, not the new one." },
      { name: "Lapse rate (rule of thumb)", formula: "Temperature falls by about 6.5 °C for every 1,000 m gained in height." },
      { name: "Hot desert", formula: "An area receiving under 250 mm of precipitation a year, with high temperatures (e.g. Sahara)." },
      { name: "Physical factor", formula: "A natural feature that affects where people live: relief, climate, water, soil, resources, hazards." },
      { name: "Human factor", formula: "A feature created by people that affects where they live: jobs, transport, services, stability, history, planning." },
      { name: "Relief", formula: "The height and shape of the land surface." },
      { name: "Alluvium", formula: "Fine, fertile sediment (silt) deposited by a river on its flood plain or delta." },
      { name: "Choropleth map", formula: "A map shading areas in classes of a value (e.g. density); darker shades show higher values." },
      { name: "Land reclamation", formula: "Creating new land from the sea or wetlands by filling with sand, soil or rock — Singapore has grown by roughly a quarter since the 1960s." },
      { name: "World population share", formula: "Asia about 59%, Africa 18%, Europe 9%, Latin America & Caribbean 8%, Northern America 5%, Oceania 1% (approx., 2024)." },
    ],
  },
};
