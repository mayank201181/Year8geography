import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "extreme-weather",
  title: "Extreme Weather & Forecasting",
  strand: "Extreme Environments",
  icon: "🌪️",
  summary: "Why typhoons spin, why Singapore gets squalls but not hurricanes, and how forecasts save lives.",
  intro:
    "Typhoons that flatten cities, droughts that last for years, squalls that hit Singapore before breakfast: extreme weather is where geography gets dramatic. In this topic you will find out what the main types of extreme weather are and where they strike, exactly how a tropical storm is born and why it spins, how meteorologists measure the weather with simple instruments, satellites and radar, and how forecasts and warnings can turn a deadly storm into a survivable one.",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "types-of-extreme-weather",
      heading: "Types of extreme weather",
      discovery: {
        problem:
          "On average about 20 tropical storms enter the waters around the Philippines every year. Singapore is about 2,400 km away and sits beside the same warm tropical seas — yet it almost never gets one. The sea is warm enough. So what is missing?",
        idea:
          "Singapore is only about 1° north of the Equator. A tropical storm needs **spin**, which comes from the Earth's rotation (the Coriolis effect) — and that spin is almost zero within about 5° of the Equator. Same warm sea, no spin, no typhoon. Singapore's extremes are different ones: monsoon downpours, **Sumatra squalls**, thunderstorms and flash floods.",
      },
      body:
        "**Extreme weather** is weather that is much more severe than usual for a place and time of year — far hotter, colder, wetter, drier or windier — and that can damage property, harm people or disrupt daily life. 'Extreme' depends on where you are: 35 °C is an ordinary summer afternoon in Dubai but a dangerous heatwave in London.\n\n| Type | What it is | Where it is common | Why there |\n|---|---|---|---|\n| Tropical storm (hurricane, typhoon, cyclone) | A huge spinning low-pressure system with violent winds and torrential rain | Warm oceans about 5–30° north and south of the Equator | Warm sea water supplies heat and moisture |\n| Drought | A long period with much less rain than normal, causing water shortages | Sahel, Horn of Africa, Australia, California | Rains fail; high pressure (sinking air) sits over the area |\n| Heatwave | Several days of unusually high temperatures for that place | Europe, India, Australia | A 'blocking' high pressure gives clear skies day after day |\n| Blizzard | Heavy snow with strong winds and very poor visibility | Northern USA and Canada, Russia | Very cold air plus moisture and strong winds |\n| Sandstorm | Strong winds lift sand and dust into a wall that can hide the Sun | Sahara, Arabian Peninsula, Gobi | Loose, dry sand with no plants to hold it |\n| Flash flood | Very fast flooding after intense rain, often within an hour or so | Cities with concrete surfaces, steep valleys | Rain falls faster than it can soak in or drain away |\n| Tornado | A narrow, violently spinning column of air from a thunderstorm to the ground | 'Tornado Alley' in the central USA; also Bangladesh | Warm, moist air from the Gulf of Mexico meets cold, dry air |\n\n**Singapore's weather.** Singapore (about 1.3° N) is hot and wet all year, with roughly 2,500 mm of rain a year and no true dry season. Its seasons are set by the **monsoons** — winds that reverse direction with the seasons:\n\n| Period (approx.) | Winds | Typical weather |\n|---|---|---|\n| Northeast Monsoon: December to early March | From the north-east, across the South China Sea | Wet phase (Dec–Jan): spells of heavy, prolonged rain; dry phase (Feb–early Mar): drier and breezy |\n| Inter-monsoon: late March to May | Light and variable | Hot; heavy afternoon thunderstorms |\n| Southwest Monsoon: June to September | From the south-west | Drier overall, but **Sumatra squalls** |\n| Inter-monsoon: October to November | Light and variable | Afternoon and evening thunderstorms |\n\n**Sumatra squalls** are lines of thunderstorms that form at night over Sumatra or the Strait of Malacca and sweep east, usually reaching Singapore before dawn or in the early morning. They bring sudden gusts of about 40–80 km/h and an hour or two of heavy rain, and are most common from April to November. Intense rain on Singapore's concrete can cause **flash floods** — the Orchard Road flood of June 2010 is a famous example — which is why PUB has widened drains and built underground storage such as the Stamford Detention Tank.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified world map showing where different types of extreme weather are common, with tropical storm zones shaded between about 5 and 30 degrees north and south of the Equator"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="10" y="20" width="460" height="250" fill="#bae6fd" stroke="#334155"/><rect x="10" y="103" width="460" height="47" fill="#fecaca" opacity="0.75"/><rect x="10" y="168" width="460" height="46" fill="#fecaca" opacity="0.75"/><g fill="#bbf7d0" stroke="#334155" stroke-width="0.8"><polygon points="29,39 61,29 119,26 138,39 163,57 170,70 151,79 143,94 137,113 116,111 116,122 129,131 138,144 122,133 106,122 91,100 82,85 80,70 68,51 48,48 29,48"/><polygon points="183,48 214,29 214,20 163,20 170,39"/><polygon points="142,144 163,140 176,159 195,172 189,200 179,211 166,229 157,261 148,251 147,233 149,196 143,185 137,168 138,157"/><polygon points="227,92 229,77 235,70 245,63 250,57 246,44 259,31 278,27 317,29 342,24 381,22 419,26 464,39 444,51 413,57 419,70 406,81 404,94 396,85 395,101 390,114 378,120 379,137 374,142 368,135 367,144 373,156 369,153 365,144 365,129 358,118 351,120 342,131 338,144 333,127 327,114 313,113 315,118 306,129 296,137 290,118 283,107 285,92 275,90 273,85 263,85 255,77 244,79 239,89 232,92"/><polygon points="234,66 242,63 237,53 234,51 235,59"/><polygon points="218,120 218,131 230,150 246,150 252,151 255,168 257,181 255,192 259,211 264,224 273,222 282,209 285,196 291,181 291,164 305,139 295,137 289,126 283,107 281,101 266,100 253,90 232,92 227,103 220,114"/><polygon points="303,181 304,189 300,205 296,203 296,190"/><polygon points="386,200 387,222 391,224 406,218 416,224 427,231 432,227 436,211 427,194 421,179 414,181 407,181 400,187 395,194"/><polygon points="362,149 365,151 373,163 375,170 373,170 368,161 362,153"/><polygon points="379,157 390,146 392,157 388,166 381,164"/><polygon points="393,126 396,126 401,146 398,148 395,135"/><polygon points="406,101 420,92 421,77 419,81 409,96"/><polygon points="452,244 462,235 467,229 461,224"/></g><g stroke="#334155" stroke-width="0.6" stroke-dasharray="2 3"><line x1="10" y1="103" x2="470" y2="103"/><line x1="10" y1="150" x2="470" y2="150"/><line x1="10" y1="168" x2="470" y2="168"/><line x1="10" y1="214" x2="470" y2="214"/></g><line x1="10" y1="159" x2="470" y2="159" stroke="#1f2937" stroke-width="1.2" stroke-dasharray="6 3"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="13" y="114">30°N</text><text x="13" y="147">5°N</text><text x="468" y="156" text-anchor="end">Equator</text><text x="13" y="179">5°S</text><text x="13" y="211">30°S</text></g><g font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle"><text x="170" y="128">Hurricanes</text><text x="60" y="136">Hurricanes</text><text x="432" y="124">Typhoons</text><text x="336" y="196">Cyclones</text></g><g fill="#ffffff" stroke="#1f2937"><circle cx="116" cy="90" r="7"/><circle cx="253" cy="114" r="7"/><circle cx="288" cy="150" r="7"/><circle cx="243" cy="74" r="7"/><circle cx="138" cy="70" r="7"/><circle cx="373" cy="156" r="7"/></g><g font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="116" y="94">1</text><text x="253" y="118">2</text><text x="288" y="154">3</text><text x="243" y="78">4</text><text x="138" y="74">5</text><text x="373" y="160">6</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="8" y="287">1 Tornadoes (USA)</text><text x="150" y="287">2 Sandstorms (Sahara)</text><text x="296" y="287">3 Drought (Horn of Africa)</text><text x="8" y="301">4 Heatwave (Europe)</text><text x="150" y="301">5 Blizzards (N America)</text><text x="296" y="301">6 Sumatra squalls (Singapore)</text><text x="28" y="315">Tropical storm zones: about 5–30° N and S of the Equator, over warm seas</text></g><rect x="8" y="306" width="14" height="10" fill="#fecaca" stroke="#334155"/></svg>`,
      diagramCaption:
        "Schematic map (shapes and positions approximate). The pink bands mark the 5–30° latitudes where tropical storms can form over warm oceans; they take different names in different regions (the cooler South Atlantic and south-east Pacific rarely get them). The strip within about 5° of the Equator — where Singapore sits — almost never gets them.",
      workedExamples: [
        {
          title: "Read the resource: a squall hits a school weather station",
          problem:
            "Wei Ling's school weather station in western Singapore logged this one July morning (illustrative data):\n\n| Time | Strongest gust (km/h) | Rain in the previous 30 min (mm) |\n|---|---|---|\n| 04:30 | 8 | 0 |\n| 05:00 | 15 | 0 |\n| 05:30 | 62 | 18 |\n| 06:00 | 41 | 24 |\n| 06:30 | 20 | 6 |\n| 07:00 | 10 | 1 |\n\nDescribe what happened and suggest what type of event this was.",
          steps: [
            "**Trend:** calm and dry at first, then a sudden burst of wind and rain, then a quick return to calm.",
            "**Evidence (use figures):** the gust jumped from 15 km/h at 05:00 to 62 km/h at 05:30 — an increase of 62 − 15 = 47 km/h in half an hour. Rain started at the same moment.",
            "**Peak:** the heaviest rain came slightly after the strongest wind (24 mm in the half hour to 06:00).",
            "**Link to theory:** a short, violent event before dawn, in July (Southwest Monsoon), with gusts in the 40–80 km/h range — this fits a **Sumatra squall** moving east from the Strait of Malacca.",
          ],
          answer:
            "A sudden squall: the gust rose by 47 km/h (15 → 62 km/h) between 05:00 and 05:30 with heavy rain, then eased by 07:00 — typical of a Sumatra squall.",
          yourTurn: {
            question: "Using the same table, what was the total rainfall from 04:30 to 07:00? Give your answer in mm.",
            answer: { type: "number", value: 49, display: "49 mm" },
            solution: "Add every rainfall reading: 0 + 0 + 18 + 24 + 6 + 1 = 49 mm.",
          },
        },
        {
          title: "Model answer: flash floods in Singapore",
          problem: "Suggest why Singapore can suffer flash floods even though it is almost never hit by tropical storms. (3 marks)",
          steps: [
            "**Point 1 — the rain:** name a cause of intense rain. 'Singapore gets very heavy, short bursts of rain from afternoon thunderstorms in the inter-monsoon periods and from Sumatra squalls.'",
            "**Point 2 — the surface:** link to the land. 'Much of Singapore is covered in concrete and tarmac, which water cannot soak into, so it runs off quickly.'",
            "**Point 3 — the drains:** finish the chain. 'If rain falls faster than drains and canals can carry it away, water builds up in low-lying spots such as the Orchard Road area in 2010.'",
          ],
          answer:
            "Thunderstorms and Sumatra squalls can drop a lot of rain in a short time. Because much of Singapore is concrete, the water cannot soak in and runs off quickly, so if the drains cannot carry it away fast enough, low-lying areas flood within minutes (as on Orchard Road in June 2010).",
          yourTurn: {
            question:
              "Name the line of thunderstorms that forms at night over the Strait of Malacca and often reaches Singapore before dawn, bringing strong gusts.",
            answer: { type: "text", accept: ["Sumatra squall", "Sumatra squalls", "Sumatran squall", "Sumatran squalls", "squall line", "squall"] },
            solution: "A **Sumatra squall** — named after the island where many of them begin.",
          },
        },
      ],
      keyPoints: [
        "Extreme weather is unusually severe for that place and season, and causes harm or disruption.",
        "Main types: tropical storms, droughts, heatwaves, blizzards, sandstorms, flash floods and tornadoes.",
        "Tropical storms need warm seas about 5–30° from the Equator — so Singapore (about 1° N) almost never gets them.",
        "Singapore's year: Northeast Monsoon (Dec–early Mar), Southwest Monsoon (Jun–Sep) and two inter-monsoon periods with heavy thunderstorms.",
        "Sumatra squalls: lines of storms that arrive before dawn with gusts of about 40–80 km/h, mostly April–November.",
      ],
      whyItWorks:
        "Almost every type of extreme weather comes down to **air rising or sinking**. When air rises (low pressure) it cools, its water vapour condenses into cloud, and you get storms, heavy rain and floods. When air sinks (high pressure) it warms and dries, clouds cannot form, and you get heatwaves and droughts.\n\nThe **monsoons** happen because land heats up and cools down faster than the sea. In December–February the Asian landmass is cold, high pressure builds over it, and air flows out towards the Equator from the north-east. In June–September Asia is hot, low pressure forms over it, and air is drawn in from the south-west.\n\n**Sumatra squalls** are thought to start when night-time land breezes blowing off Sumatra and the Malay Peninsula meet over the Strait of Malacca. The air is forced upwards, thunderclouds grow in a line, and the south-westerly winds push the whole line east towards Singapore — which is why they so often arrive before dawn.",
      strategies: ["Cause → process → effect", "Think at different scales", "Use figures from the source", "TEA (Trend, Evidence, Anomaly)"],
      thinkDeeper:
        "In December 2001, Typhoon Vamei formed at about 1.5° N, just north-east of Singapore — the closest to the Equator a tropical cyclone has ever been recorded. Does this prove the '5° rule' is wrong? What might make such an event possible, and why is it so rare?",
    },
    // ------------------------------------------------------------------
    {
      id: "tropical-storms",
      heading: "Tropical storms",
      discovery: {
        problem:
          "Four patches of ocean. Which one will grow a hurricane?\n\n1. On the Equator, sea at 29 °C, calm winds high up.\n2. At 35° N, sea at 20 °C, calm winds high up.\n3. At 15° N, sea at 29 °C, strong winds high up tearing across in a different direction from the surface winds.\n4. At 15° N, sea at 29 °C, calm winds high up.",
        idea:
          "Only **patch 4**. Patch 1 has warm water but no spin (the Coriolis effect is zero at the Equator). Patch 2 is too cold — the sea must be at least **26.5 °C**. Patch 3 has strong **wind shear**, which tilts and rips the growing storm apart. A tropical storm needs *all* its ingredients at once.",
      },
      body:
        "A **tropical storm** is a huge, spinning area of very low pressure that forms over warm tropical oceans. It brings violent winds, torrential rain and a **storm surge**. Roughly 80–90 reach tropical-storm strength worldwide each year.\n\n**Conditions needed to form:**\n- Sea surface at least **26.5 °C**, warm to a depth of about 50 m — the storm's fuel.\n- About **5–30°** north or south of the Equator: far enough from the Equator for the **Coriolis effect** to make it spin, close enough for the sea to be warm.\n- **Low wind shear** — winds high up and near the surface blowing at similar speeds and directions, so the tall storm is not torn apart.\n- Moist air and an existing cluster of thunderstorms to start it off.\n\nThey are most common in late summer and autumn, when seas are warmest (the official North Atlantic season is 1 June to 30 November). Over land or cooler water they lose their energy supply and weaken.\n\n**Same storm, different names:**\n\n| Name | Region |\n|---|---|\n| Hurricane | North Atlantic, Caribbean, north-east Pacific |\n| Typhoon | North-west Pacific (Philippines, China, Japan) |\n| Cyclone | Indian Ocean (Bay of Bengal, Arabian Sea) and South Pacific / Australia |\n\n**Structure:** a calm, clear **eye** (usually about 20–60 km across) is surrounded by the **eyewall**, a ring of towering cumulonimbus clouds with the strongest winds and heaviest rain. Spiral **rain bands** stretch outwards; the whole system can be several hundred kilometres wide. In the Northern Hemisphere it spins anticlockwise; in the Southern Hemisphere, clockwise.\n\n**Saffir–Simpson scale** (one-minute sustained wind speed):\n\n| Category | Wind speed (km/h) |\n|---|---|\n| 1 | 119–153 |\n| 2 | 154–177 |\n| 3 | 178–208 |\n| 4 | 209–251 |\n| 5 | 252 or more |\n\nBelow 119 km/h it is a tropical storm (63–118 km/h) or a tropical depression.\n\n**Hazards:** strong winds, **storm surge** (a dome of sea water pushed onto the coast by wind and low pressure — often the biggest killer), heavy rain causing floods and landslides. Secondary impacts include homelessness, disease from dirty water, power cuts and lost jobs and crops.\n\n**Case study — Typhoon Haiyan (Yolanda), Philippines, 8 November 2013:**\n- One of the strongest storms ever to hit land: sustained winds estimated at about 315 km/h — Category 5.\n- A storm surge of around 5 m or more swept through Tacloban city on Leyte.\n- About 6,300 deaths (official figure), over 1,000 missing and about 4 million people displaced.\n- Responses: hundreds of thousands were evacuated beforehand; afterwards many countries, including Singapore and the UK, sent aircraft, ships and aid. Long-term plans included rebuilding stronger homes, replanting mangroves and 'no-build zones' along parts of the coast.\n- Why so deadly? Low-lying coasts, many lightweight homes, and many people did not understand what a 'storm surge' would mean.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section through a tropical storm showing the clear eye with sinking air, the eyewall with rising air, spiral rain bands, warm moist air spiralling in at the surface and air flowing out at the top"><defs><marker id="ewTsDark" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#1f2937"/></marker><marker id="ewTsRed" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#b91c1c"/></marker></defs><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><rect x="0" y="250" width="480" height="50" fill="#bae6fd"/><line x1="0" y1="250" x2="480" y2="250" stroke="#334155"/><g fill="#e5e7eb" stroke="#334155" stroke-width="1.2"><path d="M70,80 Q120,52 228,48 L228,64 Q150,66 70,80 Z"/><path d="M410,80 Q360,52 252,48 L252,64 Q330,66 410,80 Z"/><path d="M22,225 C18,205 28,188 42,186 C56,184 64,205 60,225 Z"/><path d="M84,225 C80,185 94,150 114,146 C134,142 146,175 142,225 Z"/><path d="M168,225 C162,150 178,78 204,62 C218,54 228,62 228,80 L228,225 Z"/><path d="M312,225 C318,150 302,78 276,62 C262,54 252,62 252,80 L252,225 Z"/><path d="M396,225 C400,185 386,150 366,146 C346,142 334,175 338,225 Z"/><path d="M458,225 C462,205 452,188 438,186 C424,184 416,205 420,225 Z"/></g><path d="M176,228 L174,238 M184,228 L182,238 M192,228 L190,238 M200,228 L198,238 M208,228 L206,238 M216,228 L214,238 M224,228 L222,238 M258,228 L256,238 M266,228 L264,238 M274,228 L272,238 M282,228 L280,238 M290,228 L288,238 M298,228 L296,238 M306,228 L304,238 M94,228 L92,238 M106,228 L104,238 M118,228 L116,238 M130,228 L128,238 M350,228 L348,238 M362,228 L360,238 M374,228 L372,238 M386,228 L384,238" stroke="#3b82f6" stroke-width="1.5"/><g stroke="#b91c1c" stroke-width="2.2" marker-end="url(#ewTsRed)"><line x1="198" y1="210" x2="198" y2="95"/><line x1="282" y1="210" x2="282" y2="95"/><line x1="113" y1="210" x2="113" y2="168"/><line x1="367" y1="210" x2="367" y2="168"/></g><line x1="240" y1="70" x2="240" y2="205" stroke="#1f2937" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ewTsDark)"/><g stroke="#1f2937" stroke-width="1.8" marker-end="url(#ewTsDark)"><line x1="226" y1="38" x2="132" y2="38"/><line x1="254" y1="38" x2="348" y2="38"/><line x1="40" y1="244" x2="160" y2="244"/><line x1="440" y1="244" x2="320" y2="244"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="240" y="20"><tspan font-weight="bold">Eye:</tspan> calm, clear, sinking air, lowest pressure</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="126" y="42" text-anchor="end">Outflow</text><text x="354" y="42">Outflow</text><text x="10" y="100">Warm, moist air rises,</text><text x="10" y="114">cools and condenses →</text><text x="318" y="100"><tspan font-weight="bold">Eyewall:</tspan> strongest</text><text x="318" y="114">winds, heaviest rain</text><text x="113" y="138" text-anchor="middle">Rain bands</text><text x="367" y="138" text-anchor="middle">Rain bands</text><text x="240" y="268" text-anchor="middle">Warm, moist air spirals in towards the centre</text><text x="240" y="290" text-anchor="middle">Warm ocean, at least 26.5 °C: the storm's fuel</text></g></svg>`,
      diagramCaption:
        "Cross-section through a tropical storm (not to scale). Red arrows: warm, moist air rising in the eyewall and rain bands. Dashed arrow: air sinking in the calm eye. The whole storm can be several hundred kilometres across and over 12 km tall.",
      workedExamples: [
        {
          title: "Skills: using the Saffir–Simpson scale",
          problem:
            "Typhoon Haiyan's sustained winds around landfall were estimated at about 315 km/h. (a) Which Saffir–Simpson category was it? (b) By how much did it exceed the lowest Category 5 wind speed?",
          steps: [
            "Find the row on the scale that contains 315 km/h. Categories 1–4 stop at 251 km/h; Category 5 is 252 km/h or more.",
            "So 315 km/h is **Category 5**.",
            "Subtract the threshold: 315 − 252 = 63 km/h.",
          ],
          answer: "(a) Category 5. (b) About 63 km/h above the Category 5 threshold.",
          yourTurn: {
            question:
              "A typhoon has one-minute sustained winds of 195 km/h. Which Saffir–Simpson category is it? Give the category number only.",
            answer: { type: "number", value: 3, display: "Category 3" },
            solution: "Category 3 covers 178–208 km/h, and 195 km/h falls in that range.",
          },
        },
        {
          title: "Model answer: how a tropical storm forms",
          problem: "Explain how a tropical storm forms. (4 marks)",
          steps: [
            "**Start with the ingredient:** 'The sea surface must be at least 26.5 °C, so lots of water evaporates and warm, moist air rises quickly.'",
            "**Process — condensation:** 'As the air rises it cools and the water vapour condenses into huge cumulonimbus clouds. Condensation releases heat, which warms the air further and makes it rise even faster.'",
            "**Process — low pressure and inflow:** 'The rising air leaves very low pressure at the surface, so more warm, moist air rushes in to replace it, keeping the storm fed.'",
            "**Process — spin:** 'Because the storm is between about 5° and 30° from the Equator, the Coriolis effect makes the inflowing air spiral, and the storm starts to rotate around a calm eye. Low wind shear lets it grow tall without being torn apart.'",
          ],
          answer:
            "Over sea at least 26.5 °C, warm water evaporates and moist air rises rapidly. It cools and condenses into cumulonimbus clouds, releasing heat that drives the air upward even faster. This leaves intense low pressure at the surface, drawing in more warm, moist air. Between about 5° and 30° from the Equator the Coriolis effect makes this air spiral, so the storm spins around a calm eye; low wind shear allows it to keep growing.",
          yourTurn: {
            question:
              "What name is given to the rise in sea level caused when a tropical storm's winds and low pressure push sea water onto the coast?",
            answer: { type: "text", accept: ["storm surge", "storm surges", "stormsurge", "tidal surge"] },
            solution: "A **storm surge** — in Typhoon Haiyan it was the main cause of death in Tacloban.",
          },
        },
      ],
      keyPoints: [
        "Formation needs: sea at least 26.5 °C, about 5–30° from the Equator, low wind shear, and the Coriolis effect to make it spin.",
        "Hurricane (Atlantic and NE Pacific), typhoon (NW Pacific), cyclone (Indian Ocean and South Pacific) — same type of storm.",
        "Structure: calm eye with sinking air; eyewall with the strongest winds; spiral rain bands.",
        "Saffir–Simpson: Category 1 = 119–153 km/h up to Category 5 = 252 km/h or more.",
        "Storm surge is often the deadliest hazard; storms weaken over land or cooler water.",
        "Typhoon Haiyan (2013): Category 5, about 6,300 deaths, about 4 million displaced.",
      ],
      whyItWorks:
        "A tropical storm is a **heat engine**. Warm sea water evaporates, and the water vapour carries hidden ('latent') heat with it. When the air rises and the vapour condenses into cloud, that heat is released, warming the air so it rises even faster. Faster rising means lower pressure at the surface, which pulls in more warm, moist air — a loop that keeps strengthening the storm as long as it sits over warm water.\n\nThe **spin** comes from the Earth's rotation. Air rushing towards the low-pressure centre is deflected (to the right in the Northern Hemisphere) by the Coriolis effect, so instead of flowing straight in it spirals. At the Equator this deflection is zero, so no spin can build.\n\nThe **eye** is calm because some of the air that has risen in the eyewall sinks back down in the centre; sinking air warms and dries, so clouds clear. Cut the fuel supply — by moving over land or cold water — and the engine stalls.",
      strategies: ["Cause → process → effect", "Use the command word", "PEEL paragraph", "Sketch it"],
      thinkDeeper:
        "The Saffir–Simpson scale only measures wind speed. Haiyan's worst killer in Tacloban was the storm surge, and slow-moving weaker storms can drop record amounts of rain. Design a better warning scale: what else would you include, and why might a single number still be useful?",
    },
    // ------------------------------------------------------------------
    {
      id: "measuring-weather",
      heading: "Measuring the weather",
      discovery: {
        problem:
          "At 2 pm Arjun tapes a thermometer to a sunny wall at school and reads 41 °C. At the same moment the official Changi reading is 32 °C. The thermometer isn't broken. Who has measured the *air* temperature — and what went wrong for the other person?",
        idea:
          "Changi's reading is the fair one. Arjun's thermometer was heated by direct sunshine and by the hot wall, so it measured the wall and the Sun, not the air. Official air temperatures are taken **in the shade**, about 1.25 m above grass, inside a white, slatted box called a **Stevenson screen**.",
      },
      body:
        "Forecasts and climate records are only as good as the measurements behind them. Weather stations use a standard set of instruments, sited in the same careful way everywhere, so readings can be compared fairly.\n\n| Instrument | Measures | Unit | Key tip |\n|---|---|---|---|\n| Thermometer (max–min) | Temperature | °C | Records the highest and lowest temperatures since it was last reset; kept in a Stevenson screen |\n| Rain gauge | Rainfall (precipitation) | mm | Funnel into a measuring cylinder; open ground, rim about 30 cm above the ground |\n| Barometer | Air pressure | hPa (= millibars, mb) | Average sea-level pressure is about 1013 hPa; falling pressure often means rain is coming |\n| Anemometer | Wind speed | km/h (or m/s, knots) | Spinning cups; standard height is 10 m, away from buildings and trees |\n| Wind vane | Wind direction | Compass points | Points to where the wind comes **from**; a 'north-easterly' blows from the north-east |\n| Hygrometer | Humidity | % | Wet- and dry-bulb thermometers: the bigger the difference, the drier the air |\n\nA **Stevenson screen** is not an instrument but a shelter: white (reflects sunlight), louvred (slatted sides let air flow through), standing on legs over grass so the thermometers are about 1.25 m up, away from heat given off by the ground.\n\n**Bigger picture tools:**\n- **Satellites** photograph clouds from space. Geostationary satellites such as Japan's Himawari stay over the same spot about 36,000 km up and send new images every few minutes, so a typhoon can be tracked across the whole Pacific.\n- **Weather radar** sends out radio pulses that bounce off raindrops, showing exactly where rain is falling and how heavy it is right now. Singapore's weather service uses radar to spot squalls and thunderstorms before they arrive.\n- Weather balloons, buoys, ships and aircraft measure conditions high up and far out at sea.\n\n**Recording and using data.** Read instruments at the same time every day (UK stations use 09:00), in the same place, the same way. Then summarise:\n\n    mean = total ÷ number of readings\n    range = highest − lowest\n\nA single odd reading that does not fit the pattern is an **anomaly** — check whether it was a real event (a squall) or a mistake (a leaf in the rain gauge).",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six weather measuring tools: a Stevenson screen on legs about 1.25 metres high, a rain gauge with funnel, a barometer dial in hectopascals, an anemometer with spinning cups, a wind vane pointing into the wind, and a satellite with a ground radar"><defs><marker id="ewMwArrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#1f2937"/></marker></defs><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><g stroke="#e5e7eb" stroke-width="1.5"><line x1="160" y1="8" x2="160" y2="312"/><line x1="320" y1="8" x2="320" y2="312"/><line x1="8" y1="160" x2="472" y2="160"/></g><rect x="20" y="105" width="120" height="5" fill="#bbf7d0"/><line x1="20" y1="105" x2="140" y2="105" stroke="#334155"/><g stroke="#334155" stroke-width="2"><line x1="60" y1="62" x2="60" y2="105"/><line x1="100" y1="62" x2="100" y2="105"/></g><rect x="55" y="24" width="50" height="38" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><polygon points="50,24 80,12 110,24" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><path d="M58,30 L102,30 M58,36 L102,36 M58,42 L102,42 M58,48 L102,48 M58,54 L102,54" stroke="#94a3b8"/><g stroke="#1f2937" stroke-width="1.2" marker-end="url(#ewMwArrow)"><line x1="120" y1="75" x2="120" y2="104"/><line x1="120" y1="75" x2="120" y2="44"/></g><rect x="180" y="105" width="120" height="8" fill="#d6d3d1"/><line x1="180" y1="105" x2="300" y2="105" stroke="#334155"/><rect x="228" y="60" width="24" height="50" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/><polygon points="222,50 258,50 245,62 235,62" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><rect x="234" y="66" width="12" height="40" fill="#ffffff" stroke="#334155" stroke-width="0.8"/><rect x="234" y="90" width="12" height="16" fill="#bae6fd"/><path d="M226,28 L224,38 M240,24 L238,34 M254,28 L252,38" stroke="#3b82f6" stroke-width="1.5"/><g stroke="#1f2937" stroke-width="1.2" marker-end="url(#ewMwArrow)"><line x1="272" y1="78" x2="272" y2="104"/><line x1="272" y1="78" x2="272" y2="51"/></g><circle cx="400" cy="60" r="42" fill="#ffffff" stroke="#334155" stroke-width="2"/><line x1="400" y1="60" x2="405" y2="31" stroke="#b91c1c" stroke-width="2"/><circle cx="400" cy="60" r="3" fill="#1f2937"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="378" y="77">970</text><text x="386" y="44">1010</text><text x="422" y="77">1050</text><text x="400" y="93">hPa</text><text x="139" y="79">1.25 m</text><text x="289" y="81">30 cm</text></g><rect x="20" y="265" width="120" height="5" fill="#bbf7d0"/><line x1="20" y1="265" x2="140" y2="265" stroke="#334155"/><line x1="80" y1="265" x2="80" y2="205" stroke="#334155" stroke-width="2"/><line x1="48" y1="205" x2="112" y2="205" stroke="#334155" stroke-width="2"/><path d="M40,205 A8,8 0 0,1 56,205 Z" fill="#c7d2fe" stroke="#334155"/><path d="M104,205 A8,8 0 0,0 120,205 Z" fill="#c7d2fe" stroke="#334155"/><line x1="80" y1="205" x2="92" y2="197" stroke="#334155" stroke-width="2"/><circle cx="95" cy="195" r="6" fill="#c7d2fe" stroke="#334155"/><path d="M58,186 A24,9 0 0,1 102,186" fill="none" stroke="#1f2937" stroke-width="1.2" marker-end="url(#ewMwArrow)"/><rect x="180" y="265" width="120" height="5" fill="#bbf7d0"/><line x1="180" y1="265" x2="300" y2="265" stroke="#334155"/><line x1="240" y1="265" x2="240" y2="200" stroke="#334155" stroke-width="2"/><line x1="222" y1="222" x2="258" y2="222" stroke="#334155" stroke-width="1.5"/><line x1="205" y1="200" x2="268" y2="200" stroke="#1f2937" stroke-width="2"/><polygon points="200,200 212,193 212,207" fill="#1f2937"/><polygon points="262,200 276,190 282,190 282,210 276,210" fill="#c7d2fe" stroke="#334155"/><g stroke="#1f2937" stroke-width="1.2" marker-end="url(#ewMwArrow)"><line x1="166" y1="184" x2="194" y2="184"/><line x1="166" y1="236" x2="194" y2="236"/></g><path d="M330,265 Q400,232 470,265 Z" fill="#bbf7d0" stroke="#334155"/><ellipse cx="368" cy="226" rx="16" ry="7" fill="#e5e7eb" stroke="#334155"/><line x1="400" y1="196" x2="400" y2="238" stroke="#334155" stroke-dasharray="3 3"/><rect x="392" y="182" width="16" height="14" fill="#c7d2fe" stroke="#334155"/><rect x="368" y="185" width="22" height="8" fill="#bae6fd" stroke="#334155"/><rect x="410" y="185" width="22" height="8" fill="#bae6fd" stroke="#334155"/><path d="M432,252 A9,9 0 0,1 450,252 Z" fill="#ffffff" stroke="#334155"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="214" y="226">W</text><text x="266" y="226">E</text><text x="180" y="178">wind</text><text x="441" y="244">radar</text></g><g font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="80" y="126">Stevenson screen</text><text x="240" y="126">Rain gauge</text><text x="400" y="126">Barometer</text><text x="80" y="286">Anemometer</text><text x="240" y="286">Wind vane</text><text x="400" y="286">Satellites and radar</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="80" y="141">thermometers (°C) and</text><text x="80" y="155">hygrometer (humidity, %)</text><text x="240" y="141">rainfall in mm</text><text x="240" y="155">rim 30 cm above ground</text><text x="400" y="141">air pressure in hPa (mb)</text><text x="400" y="155">average about 1013 hPa</text><text x="80" y="300">wind speed in km/h</text><text x="80" y="314">spinning cups, 10 m up</text><text x="240" y="300">wind direction</text><text x="240" y="314">arrow points INTO the wind</text><text x="400" y="300">cloud images, rain maps</text><text x="400" y="314">track storms in real time</text></g></svg>`,
      diagramCaption:
        "The standard toolkit of a weather station. Thermometers sit in the shade of the Stevenson screen about 1.25 m above grass; the wind vane's arrow points towards where the wind is coming from (here, a westerly wind).",
      workedExamples: [
        {
          title: "Skills: mean and range from a rain gauge",
          problem:
            "Priya emptied her school rain gauge at 09:00 each day for a week (illustrative data):\n\n| Day | Mon | Tue | Wed | Thu | Fri | Sat | Sun |\n|---|---|---|---|---|---|---|---|\n| Rainfall (mm) | 0 | 12 | 35 | 4 | 0 | 18 | 7 |\n\nCalculate (a) the total, (b) the mean daily rainfall to 1 decimal place, (c) the range.",
          steps: [
            "Total: 0 + 12 + 35 + 4 + 0 + 18 + 7 = 76 mm.",
            "Mean = total ÷ number of readings. There are **7** readings — the two dry days still count.\n\n    76 ÷ 7 = 10.857… ≈ 10.9 mm",
            "Range = highest − lowest = 35 − 0 = 35 mm.",
          ],
          answer: "(a) 76 mm (b) about 10.9 mm per day (c) 35 mm",
          yourTurn: {
            question:
              "Daily maximum temperatures for five days were 31 °C, 33 °C, 32 °C, 30 °C and 34 °C. What was the mean daily maximum temperature, in °C?",
            answer: { type: "number", value: 32, display: "32 °C" },
            solution: "Total = 31 + 33 + 32 + 30 + 34 = 160. Mean = 160 ÷ 5 = 32 °C.",
          },
        },
        {
          title: "Model answer: siting instruments fairly",
          problem: "Explain two ways a rain gauge should be positioned to give accurate readings. (4 marks)",
          steps: [
            "**Way 1 + reason:** 'Put it in an open space, away from buildings and trees, because overhanging leaves or walls could block rain from falling in or drip extra water into it.'",
            "**Way 2 + reason:** 'Sink it into the ground so the rim is about 30 cm above the surface. Sinking it stops it being knocked over and keeps the water cool so less evaporates; having the rim above the ground stops rain splashing in from the surface.'",
            "Each 'way' earns a mark and each linked 'because' earns another — always explain, don't just list.",
          ],
          answer:
            "Place it in open ground away from trees and buildings, so nothing blocks or adds rainfall. Sink it into the ground with its rim about 30 cm up, so it cannot blow over, less water evaporates, and rain cannot splash in from the ground.",
          yourTurn: {
            question: "Name the instrument used to measure air pressure.",
            answer: { type: "text", accept: ["barometer", "aneroid barometer", "barograph", "mercury barometer"] },
            solution: "A **barometer** measures air pressure, usually in hectopascals (hPa) or millibars (mb).",
          },
        },
      ],
      keyPoints: [
        "Thermometer: °C · rain gauge: mm · barometer: hPa/mb · anemometer: wind speed · wind vane: direction · hygrometer: humidity %.",
        "Measure air temperature in the shade, in a white, louvred Stevenson screen about 1.25 m above grass.",
        "A wind vane points to where the wind comes FROM; winds are named after where they come from.",
        "Satellites track clouds and storms from space; radar shows where rain is falling right now.",
        "Take readings at the same time and place every day; summarise with mean (total ÷ number) and range (highest − lowest).",
      ],
      whyItWorks:
        "Every siting rule removes a source of error. A Stevenson screen is **white** so it reflects sunlight instead of heating up, and **louvred** so air flows freely over the thermometer — giving the true air temperature. Raising it about 1.25 m keeps it away from heat soaking out of the ground.\n\nA **barometer** works because air has weight: the column of air above you presses down. An aneroid barometer contains a sealed metal capsule that is squeezed when pressure rises and expands when it falls, moving the needle. Falling pressure means air is rising — the first step to cloud and rain.\n\nA **wind vane** points into the wind because its broad tail catches the wind and is pushed downwind, swinging the narrow arrowhead round to face the direction the wind is coming from.",
      strategies: ["Use figures from the source", "Look for the anomaly", "Spot the misconception", "Cause → process → effect"],
      thinkDeeper:
        "Singapore's official weather station is at Changi, near the coast and surrounded by open ground. Wei Ling lives in a dense HDB estate in the middle of the island. Would you expect her neighbourhood to be warmer or cooler on a sunny afternoon than Changi? Explain why, and say what this means for how we use 'official' temperatures.",
    },
    // ------------------------------------------------------------------
    {
      id: "forecasting",
      heading: "Forecasting & warnings",
      discovery: {
        problem:
          "Tomorrow's forecast is usually very reliable. But a day-by-day forecast for three weeks' time is barely better than just guessing the usual weather for that season. It is the same supercomputer, using the same laws of physics. What is going on?",
        idea:
          "The atmosphere is **chaotic**: tiny errors in today's measurements — a gust nobody recorded, a reading rounded off — grow bigger every hour the computer steps forward. After a week or two they swamp the forecast. This is often called the **butterfly effect**. Forecasters cannot measure every puff of air on Earth, so certainty fades the further ahead you look.",
      },
      body:
        "**Air pressure** is the weight of the air pressing down on the Earth's surface, measured in hectopascals (hPa) or millibars (mb). Average sea-level pressure is about 1013 hPa.\n\n| | Low pressure (depression) | High pressure (anticyclone) |\n|---|---|---|\n| Air movement | Rising | Sinking |\n| Map symbol | L | H |\n| Clouds and rain | Cloud forms; rain likely | Clear skies; dry |\n| Wind | Often strong | Usually light |\n| Typical weather | Wet, windy, unsettled | Settled: sunny and hot in summer; cold, frosty or foggy in winter |\n\n**Reading a weather map (synoptic chart):**\n- **Isobars** are lines joining places with the same air pressure, usually drawn every 4 hPa.\n- **Close isobars = strong winds**; widely spaced isobars = light winds.\n- **Fronts** are boundaries between warm and cold air, and bring bands of cloud and rain. A **cold front** is drawn with blue triangles, a **warm front** with red semicircles, and an **occluded front** (where the two have merged) in purple with both.\n\n**How a forecast is made:**\n1. **Observe:** millions of readings from weather stations, balloons, buoys, ships, aircraft, satellites and radar.\n2. **Model:** supercomputers divide the atmosphere into a 3-D grid of boxes and use the laws of physics to calculate how each box will change, step by step into the future.\n3. **Repeat with variations:** an **ensemble** runs the model many times with slightly different starting conditions. If the runs agree, forecasters are confident; if they spread out, the forecast is uncertain.\n4. **Interpret and warn:** meteorologists turn the output into forecasts and warnings for the public.\n\nForecasts have improved by roughly a day per decade — today's 5-day forecast is about as reliable as a 4-day forecast was ten years earlier — but day-by-day detail still has little skill beyond about two weeks.\n\n**Warnings that save lives — the 3 Ps:**\n\n| P | What it means | Examples |\n|---|---|---|\n| Prediction | Forecasting and tracking the hazard | Satellites tracking typhoons; Singapore's weather service issuing heavy-rain warnings |\n| Protection | Building to resist the hazard | Sea walls, raised cyclone shelters, bigger drains, wind-resistant buildings |\n| Preparation | Planning what people will do | Evacuation routes, emergency kits, drills, PUB flash-flood alerts sent to phones |\n\n**Bangladesh** shows what this can achieve. The Bhola cyclone of 1970 killed an estimated 300,000–500,000 people. Since then Bangladesh has built thousands of raised cyclone shelters and trained tens of thousands of volunteers to spread warnings. When Cyclone Amphan struck in 2020, about 3 million people across Bangladesh and India were evacuated, and reported deaths were about 130 — still tragic, but a tiny fraction of 1970.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified weather map: a low-pressure centre with six closely spaced isobars from 988 to 1008 hectopascals, and a high-pressure centre with four widely spaced isobars from 1024 to 1012 hectopascals, plus symbols for cold and warm fronts"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><rect x="4" y="4" width="472" height="292" fill="none" stroke="#334155"/><g fill="none" stroke="#1f2937" stroke-width="1.2"><ellipse cx="140" cy="140" rx="14" ry="12"/><ellipse cx="140" cy="140" rx="26" ry="22"/><ellipse cx="140" cy="140" rx="38" ry="32"/><ellipse cx="140" cy="140" rx="50" ry="42"/><ellipse cx="140" cy="140" rx="62" ry="52"/><ellipse cx="140" cy="140" rx="74" ry="62"/><ellipse cx="370" cy="165" rx="25" ry="20"/><ellipse cx="370" cy="165" rx="50" ry="40"/><ellipse cx="370" cy="165" rx="75" ry="60"/><ellipse cx="370" cy="165" rx="100" ry="80"/></g><g fill="#ffffff"><rect x="128" y="122" width="24" height="12"/><rect x="125" y="196" width="30" height="12"/><rect x="355" y="139" width="30" height="12"/><rect x="355" y="119" width="30" height="12"/><rect x="355" y="99" width="30" height="12"/><rect x="355" y="79" width="30" height="12"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="140" y="132">988</text><text x="140" y="206">1008</text><text x="370" y="149">1024</text><text x="370" y="129">1020</text><text x="370" y="109">1016</text><text x="370" y="89">1012</text></g><g font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle"><text x="140" y="145" fill="#b91c1c">L</text><text x="370" y="170" fill="#1d4ed8">H</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="16" y="24">L = low pressure: rising air</text><text x="16" y="38">→ cloud, rain and strong winds</text><text x="250" y="24">H = high pressure: sinking air</text><text x="250" y="38">→ dry, clear, settled, light winds</text><text x="16" y="262">Isobars close together = strong winds</text><text x="280" y="262">Isobars far apart = light winds</text><text x="82" y="288">cold front</text><text x="226" y="288">warm front</text><text x="320" y="288">Isobars drawn every 4 hPa</text></g><g stroke="#334155" stroke-width="0.8"><line x1="70" y1="252" x2="88" y2="186"/><line x1="320" y1="252" x2="321" y2="236"/></g><line x1="16" y1="284" x2="76" y2="284" stroke="#2563eb" stroke-width="2"/><g fill="#2563eb"><polygon points="22,284 30,284 26,277"/><polygon points="38,284 46,284 42,277"/><polygon points="54,284 62,284 58,277"/><polygon points="68,284 76,284 72,277"/></g><line x1="160" y1="284" x2="220" y2="284" stroke="#dc2626" stroke-width="2"/><g fill="#dc2626"><path d="M166,284 A4,4 0 0,1 174,284 Z"/><path d="M182,284 A4,4 0 0,1 190,284 Z"/><path d="M198,284 A4,4 0 0,1 206,284 Z"/></g></svg>`,
      diagramCaption:
        "A simplified synoptic chart (Northern Hemisphere style, not a real day). Around the low, isobars from 988 to 1008 hPa are squeezed close together — strong winds. Around the high, isobars from 1024 to 1012 hPa are spread out — light winds.",
      workedExamples: [
        {
          title: "Read the resource: the synoptic chart",
          problem:
            "Use the weather map above. (a) Where would you expect the strongest winds, and why? (b) What weather would you forecast under the H?",
          steps: [
            "**Read the key first:** isobars are every 4 hPa; L = low, H = high.",
            "**Count the gaps:** around the low there are six isobars, 988 → 1008 hPa — a rise of 1008 − 988 = 20 hPa packed into a short distance. Around the high there are four isobars, 1024 → 1012 hPa — a fall of 12 hPa spread over a much wider distance.",
            "**Apply the rule:** pressure changes fastest where isobars are closest, so wind is strongest there — around the low, especially close to its centre.",
            "**Under the H:** high pressure means sinking air, which warms and dries — so clear skies, little or no rain and light winds.",
          ],
          answer:
            "(a) Around the low, where the isobars are closest together (20 hPa change over a short distance). (b) Dry, settled weather with clear skies and light winds.",
          yourTurn: {
            question:
              "On the same map, what is the difference in pressure between the innermost isobar of the high (1024 hPa) and the innermost isobar of the low (988 hPa)? Give your answer in hPa.",
            answer: { type: "number", value: 36, display: "36 hPa" },
            solution: "1024 − 988 = 36 hPa.",
          },
        },
        {
          title: "Model answer: why forecasts get less certain",
          problem: "Explain why weather forecasts become less accurate the further ahead they look. (3 marks)",
          steps: [
            "**Point 1 — imperfect start:** 'Forecasts begin with measurements, but we cannot measure every part of the atmosphere, so the starting picture always has small gaps and errors.'",
            "**Point 2 — errors grow:** 'The atmosphere is chaotic, so these small errors grow larger with every step the computer model calculates.'",
            "**Point 3 — evidence:** 'This is why ensemble forecasts, which start with slightly different conditions, agree for the next few days but spread out more and more after about a week.'",
          ],
          answer:
            "Forecasts start from incomplete measurements, so there are always small errors. Because the atmosphere is chaotic, these errors grow with each time step of the computer model. Ensemble runs agree closely for a few days but spread out after about a week, so long-range forecasts are much less certain.",
          yourTurn: {
            question: "Name the lines on a weather map that join places with the same air pressure.",
            answer: { type: "text", accept: ["isobars", "isobar"] },
            solution: "**Isobars** — 'iso' means equal and 'bar' refers to pressure (as in barometer).",
          },
        },
      ],
      keyPoints: [
        "Low pressure (L): rising air, cloud, rain and wind. High pressure (H): sinking air, dry and settled.",
        "Isobars join places of equal pressure, usually every 4 hPa; close isobars = strong winds.",
        "Cold front: blue triangles. Warm front: red semicircles. Fronts bring bands of cloud and rain.",
        "Forecasts = observations + supercomputer models + ensembles + human forecasters.",
        "The atmosphere is chaotic, so certainty falls with time; detail has little skill beyond about two weeks.",
        "Prediction, protection and preparation cut deaths — e.g. Bangladesh: Bhola 1970 vs Amphan 2020.",
      ],
      whyItWorks:
        "**Why does air pressure control the weather?** Air flows from high pressure to low pressure, like water running downhill. Isobars work like contour lines on a map: where they are packed tightly, the 'slope' of pressure is steep and air rushes down it quickly — strong wind. Where they are far apart the slope is gentle, so winds are light.\n\nIn a **low**, air is rising. Rising air expands and cools, and cool air cannot hold as much water vapour, so the vapour condenses into cloud and falls as rain. In a **high**, air is sinking. Sinking air is squashed and warms up, so any cloud evaporates — that is why highs bring clear skies, hot sunny days in summer, and cold, frosty nights in winter when heat escapes through the clear sky.\n\n**Why do warnings work?** A storm's wind and water cannot be stopped, but deaths depend mostly on whether people are in the wrong place when it arrives. A good forecast gives time, and preparation turns that time into action.",
      strategies: ["Read the key first", "Work it out from the map", "Compare and contrast", "Social / economic / environmental (SEE)"],
      thinkDeeper:
        "Forecasters sometimes issue a warning and the storm misses, or turns out weaker. Some people then ignore the next warning ('cry wolf'). How should forecasters and governments balance the risk of a false alarm against the risk of a missed warning? Use Typhoon Haiyan or Cyclone Amphan in your answer.",
    },
  ],
  learn: {
    flashcards: [
      { front: "Extreme weather", back: "Weather that is much more severe than usual for a place and time of year, and that can cause damage, harm or disruption." },
      { front: "Four conditions for a tropical storm to form", back: "Sea at least 26.5 °C (to about 50 m deep); about 5–30° from the Equator; low wind shear; the Coriolis effect to make it spin." },
      { front: "Hurricane, typhoon or cyclone?", back: "Same storm, different region: hurricane (Atlantic and NE Pacific), typhoon (NW Pacific), cyclone (Indian Ocean and South Pacific)." },
      { front: "The eye of a tropical storm", back: "The calm, clear centre (about 20–60 km across) with sinking air and the lowest pressure." },
      { front: "The eyewall", back: "The ring of towering cumulonimbus clouds around the eye, with the strongest winds and heaviest rain." },
      { front: "Storm surge", back: "A rise in sea level as strong winds and low pressure push sea water onto the coast — often the deadliest hazard of a tropical storm." },
      { front: "Coriolis effect", back: "The deflection of moving air caused by the Earth's rotation; it makes storms spin and is zero at the Equator." },
      { front: "Wind shear", back: "A change in wind speed or direction with height. Strong shear tears a growing tropical storm apart." },
      { front: "Saffir–Simpson scale", back: "Cat 1: 119–153 km/h · Cat 2: 154–177 · Cat 3: 178–208 · Cat 4: 209–251 · Cat 5: 252 km/h or more." },
      { front: "Typhoon Haiyan", back: "Philippines, 8 November 2013; Category 5 (about 315 km/h winds); about 6,300 deaths; about 4 million displaced; storm surge in Tacloban." },
      { front: "Sumatra squall", back: "A line of thunderstorms that forms at night over Sumatra or the Strait of Malacca and reaches Singapore around dawn with gusts of about 40–80 km/h." },
      { front: "Singapore's Northeast Monsoon", back: "About December to early March; winds from the north-east; wet phase with heavy, prolonged rain in December–January." },
      { front: "Singapore's Southwest Monsoon", back: "About June to September; winds from the south-west; generally drier, but with Sumatra squalls." },
      { front: "Isobar", back: "A line on a weather map joining places with the same air pressure (usually drawn every 4 hPa)." },
      { front: "Close isobars mean…", back: "Strong winds — pressure changes quickly over a short distance." },
      { front: "Low pressure weather", back: "Rising air cools and condenses: cloud, rain, often strong winds — unsettled." },
      { front: "High pressure weather", back: "Sinking air warms and dries: clear skies, little rain, light winds — hot in summer, cold and frosty in winter." },
      { front: "Stevenson screen", back: "A white, louvred box on legs, about 1.25 m above grass, that keeps thermometers in the shade with air flowing through." },
      { front: "Which way does a wind vane point?", back: "Towards where the wind is coming FROM." },
      { front: "Units: rainfall, pressure, temperature, humidity", back: "mm (rain gauge); hPa or mb (barometer); °C (thermometer); % (hygrometer)." },
      { front: "The 3 Ps of hazard management", back: "Prediction (forecasting and warnings), Protection (building defences), Preparation (plans, kits, evacuation)." },
      { front: "Why do forecasts get less certain further ahead?", back: "The atmosphere is chaotic, so small errors in the starting measurements grow over time (the butterfly effect)." },
    ],
    mustKnow: [
      "Can you define extreme weather and give at least six types, with where each is common?",
      "Can you describe Singapore's monsoon seasons (NE Monsoon Dec–early Mar, SW Monsoon Jun–Sep, two inter-monsoons)?",
      "Can you explain what a Sumatra squall is, when it arrives and why?",
      "Can you list the four conditions needed for a tropical storm to form, with figures (26.5 °C, 5–30°)?",
      "Can you explain why tropical storms do not form on the Equator?",
      "Can you draw and label a cross-section of a tropical storm (eye, eyewall, rain bands, rising and sinking air)?",
      "Can you name tropical storms by region (hurricane, typhoon, cyclone)?",
      "Can you classify a storm using the Saffir–Simpson scale in km/h?",
      "Can you describe the causes, impacts and responses for Typhoon Haiyan (2013) using hedged figures?",
      "Can you match each weather instrument to what it measures and its unit, and explain how to site it fairly?",
      "Can you calculate a mean and a range from weather data?",
      "Can you read a synoptic chart: identify highs and lows, explain close isobars, and recognise front symbols?",
      "Can you explain how forecasts are made and why they become less certain further ahead?",
      "Can you use the 3 Ps (prediction, protection, preparation) to explain how deaths from storms can be reduced?",
    ],
    misconceptions: [
      { wrong: "Tropical storms form at the Equator because that is where the sea is hottest.", right: "They almost never form within about 5° of the Equator, because the Coriolis effect there is too weak to make them spin." },
      { wrong: "A wind vane points in the direction the wind is blowing towards.", right: "It points into the wind — towards where the wind is coming FROM." },
      { wrong: "A 'north wind' blows towards the north.", right: "Winds are named after where they come from: a north wind blows from the north towards the south." },
      { wrong: "The eye is the most dangerous part of a tropical storm.", right: "The eye is calm and clear. The danger is the eyewall around it — and when the eye passes, the second half of the eyewall hits from the opposite direction." },
      { wrong: "Wind is always what kills most people in a tropical storm.", right: "Storm surge and flooding usually cause the most deaths — as in Tacloban during Typhoon Haiyan." },
      { wrong: "Isobars far apart mean strong winds because the storm is bigger.", right: "Widely spaced isobars mean light winds; close isobars mean strong winds." },
      { wrong: "High pressure always means hot weather.", right: "High pressure means dry, settled weather — hot and sunny in summer, but cold, frosty or foggy in winter." },
      { wrong: "You can measure air temperature by putting a thermometer anywhere outside.", right: "It must be in the shade, with air flowing round it, about 1.25 m above grass — in a Stevenson screen." },
      { wrong: "A Category 1 storm is harmless.", right: "Category 1 winds of 119–153 km/h still damage buildings, and a slow, weak storm can still cause deadly floods." },
    ],
    examMistakes: [
      "Writing that storms need sea 'over 26 °C' or 'hot sea' — give the precise figure: at least 26.5 °C.",
      "Forgetting units: rainfall in mm, pressure in hPa or mb, wind speed in km/h, temperature in °C.",
      "Listing formation conditions without explaining HOW they create the storm (evaporation → rising → condensation → low pressure → spin).",
      "Using the Saffir–Simpson scale with the wrong thresholds — Category 5 is 252 km/h or more, Category 1 starts at 119 km/h.",
      "Giving case-study figures with false precision or no hedging — write 'about 6,300 deaths' for Haiyan, not a made-up exact number.",
      "Confusing primary impacts (wind damage, storm surge, flooding) with secondary impacts (disease, homelessness, lost jobs).",
      "Leaving out zero days when calculating a mean — every reading counts, including 0 mm.",
      "Describing a synoptic chart without quoting isobar values from the map.",
    ],
    mnemonics: [
      {
        topic: "Conditions for a tropical storm",
        device: "Storms need HELP: Hot sea, Enough spin, Low shear, Plenty of moist rising air",
        explanation: "Hot sea = at least 26.5 °C; Enough spin = 5–30° from the Equator so the Coriolis effect works; Low wind shear; Plenty of warm, moist air rising to feed the clouds.",
      },
      {
        topic: "Low vs high pressure",
        device: "Low = Lousy weather, High = Happy weather",
        explanation: "Lows bring rising air, cloud, rain and wind; highs bring sinking air and dry, settled conditions.",
      },
      {
        topic: "Reading isobars",
        device: "Close lines, crazy winds; wide lines, weak winds",
        explanation: "The closer the isobars, the steeper the pressure 'slope' and the stronger the wind.",
      },
      {
        topic: "Wind vanes",
        device: "The vane faces the wind's birthplace",
        explanation: "The arrow points to where the wind was 'born' — the direction it comes from — which is also how winds are named.",
      },
    ],
    realWorld: [
      {
        title: "Typhoon Haiyan, Philippines (2013)",
        detail: "A Category 5 super typhoon with winds of about 315 km/h. Its storm surge devastated Tacloban; about 6,300 people died and about 4 million were displaced. Singapore was among many countries that sent aid.",
        emoji: "🌀",
      },
      {
        title: "Singapore's monsoons and Sumatra squalls",
        detail: "Singapore has no typhoons but gets heavy Northeast Monsoon rain around December–January and pre-dawn Sumatra squalls with gusts of about 40–80 km/h, mostly between April and November.",
        emoji: "🇸🇬",
      },
      {
        title: "Flash floods and Singapore's drains",
        detail: "Intense rain flooded parts of Orchard Road in June 2010. PUB responded by widening drains, building the Stamford Detention Tank and Diversion Canal, and sending flood alerts to the public.",
        emoji: "🌧️",
      },
      {
        title: "Cyclone shelters in Bangladesh",
        detail: "The 1970 Bhola cyclone killed an estimated 300,000–500,000 people. Thousands of raised shelters and a volunteer warning network meant that for Cyclone Amphan (2020) about 3 million people across Bangladesh and India were evacuated and reported deaths were about 130.",
        emoji: "🏚️",
      },
      {
        title: "Hurricane Katrina, USA (2005)",
        detail: "Storm surge broke through the levees protecting New Orleans and flooded most of the city; about 1,800 people died. Even a rich country can be badly hit if defences and evacuation fail.",
        emoji: "🌊",
      },
      {
        title: "European heatwave (2003)",
        detail: "A blocking high pressure gave weeks of extreme heat across Europe; estimates of extra deaths are over 70,000, many of them elderly people living alone.",
        emoji: "🌡️",
      },
    ],
    videos: [
      { title: "How do tropical storms (hurricanes) form?", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=BBC+Bitesize+how+do+tropical+storms+form" },
      { title: "Hurricanes 101", channel: "National Geographic", url: "https://www.youtube.com/results?search_query=National+Geographic+Hurricanes+101" },
      { title: "How to read a weather map (isobars and fronts)", channel: "Met Office", url: "https://www.youtube.com/results?search_query=Met+Office+how+to+read+a+weather+map+isobars+fronts" },
      { title: "Typhoon Haiyan case study", channel: "Time for Geography", url: "https://www.youtube.com/results?search_query=Typhoon+Haiyan+case+study+geography" },
      { title: "Weather instruments explained", channel: "Geography teachers", url: "https://www.youtube.com/results?search_query=weather+instruments+anemometer+barometer+rain+gauge+Stevenson+screen" },
    ],
    formulas: [
      { name: "Extreme weather", formula: "Weather much more severe than usual for a place and season, causing damage, harm or disruption." },
      { name: "Tropical storm", formula: "An intense, spinning low-pressure system that forms over warm tropical seas, with violent winds, heavy rain and storm surge." },
      { name: "Tropical storm formation", formula: "Sea ≥ 26.5 °C + about 5–30° from the Equator + low wind shear + Coriolis spin." },
      { name: "Saffir–Simpson scale", formula: "Cat 1: 119–153 km/h; Cat 2: 154–177; Cat 3: 178–208; Cat 4: 209–251; Cat 5: ≥ 252 km/h.", note: "Based on one-minute sustained wind speed." },
      { name: "Storm surge", formula: "A rise in sea level as a storm's winds and low pressure push water onto the coast." },
      { name: "Coriolis effect", formula: "The deflection of moving air by the Earth's rotation — gives storms their spin; zero at the Equator." },
      { name: "Wind shear", formula: "A change in wind speed or direction with height; strong shear stops tropical storms forming." },
      { name: "Monsoon", formula: "A seasonal reversal of wind direction, bringing wet and drier seasons (Singapore: NE Monsoon Dec–early Mar, SW Monsoon Jun–Sep)." },
      { name: "Sumatra squall", formula: "A line of thunderstorms moving east from Sumatra or the Strait of Malacca, usually reaching Singapore before dawn with gusts of about 40–80 km/h." },
      { name: "Air pressure", formula: "The weight of the air pressing down on the surface, measured in hPa (= mb); average at sea level about 1013 hPa." },
      { name: "Isobar", formula: "A line joining places of equal air pressure; close isobars = strong winds." },
      { name: "Front", formula: "The boundary between a warm and a cold air mass; cold front = blue triangles, warm front = red semicircles." },
      { name: "Mean", formula: "mean = total ÷ number of readings" },
      { name: "Range", formula: "range = highest value − lowest value" },
      { name: "Ensemble forecast", formula: "Running a forecast model many times from slightly different starting conditions to measure how certain the forecast is." },
      { name: "The 3 Ps", formula: "Prediction, protection and preparation — the ways people reduce the impact of extreme weather." },
    ],
  },
};
