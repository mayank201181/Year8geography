import type { TopicGuide } from "../../types.ts";

// Climate tables in this guide are approximate, rounded, illustrative climate normals.
// The climate graph SVG in "climate-graphs" is drawn exactly from the Singapore and
// central Sahara tables; the Antarctic table is used for calculations only.

export const guide: TopicGuide = {
  id: "extreme-climates",
  title: "Extreme Environments & Their Climates",
  strand: "Extreme Environments",
  icon: "🏜️",
  summary: "Why the Sahara is bone-dry, the poles are frozen and mountain tops are cold — and how climate graphs prove it.",
  intro:
    "Scorching deserts, frozen poles and mountains where the air runs thin: extreme environments cover a big share of Earth's land. In this topic you'll find out where they are and, more importantly, **why** they exist — sinking air that kills clouds over the Sahara, sunlight spread thin across the poles, and air that cools about 6.5 °C for every kilometre you climb. You'll also learn to read, draw and calculate from climate graphs, the geographer's most useful tool for describing any climate, from Singapore to Antarctica.",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "what-is-extreme",
      heading: "What makes an environment extreme?",
      discovery: {
        problem:
          "Antarctica is bigger than Europe — about 14 million km² — yet nobody lives there permanently. Singapore is under 750 km² and home to about 6 million people. What is it about Antarctica that keeps people away? Is it the same thing that keeps most people out of the middle of the Sahara?",
        idea:
          "Both are places where one or more conditions — temperature, water, altitude — sit at the limits of what life can cope with. That is what makes an environment **extreme**. The Sahara's limits are water and heat; Antarctica's are cold and darkness — and, surprisingly, water too, because Antarctica is a desert as well.",
      },
      body:
        "An **extreme environment** is a place where one or more conditions — temperature, rainfall, altitude, wind or daylight — sit at the very edge of what plants, animals and people can tolerate. Life is possible there, but only with special **adaptations** or technology.\n\n**The main types**\n\n- **Hot deserts** — very little rain (under 250 mm a year), scorching days and cool nights. *Sahara, Arabian, Atacama, Kalahari, Australian deserts.*\n- **Polar (cold) environments** — bitterly cold, long dark winters, ice and snow. *Antarctica, the Arctic Ocean, Greenland.*\n- **High mountains** — thin air, low temperatures, strong winds and intense sunlight. *Himalayas, Andes, Alps, Rockies.*\n- **Others** — hot, wet **tropical rainforests** (heavy rain and humidity all year), **volcanic** areas and the deep ocean are sometimes counted too.\n\n**Where are they?** Look at the map using CLOCC. Hot deserts form a belt roughly **15–30° north and south** of the Equator, often on the western side of continents. Polar environments lie mostly beyond the **Arctic and Antarctic Circles (66.5°)**. High mountains are not tied to latitude: they rise wherever tectonic plates have pushed land up, from the Andes near the Equator to the Himalayas at about 28° N.\n\n| Type | Main 'extreme' | Typical figures |\n|---|---|---|\n| Hot desert | Lack of water, heat | Under 250 mm of rain a year; summer days often over 40 °C |\n| Polar | Cold, darkness | Antarctic interior: under about 50 mm of precipitation a year; winters far below −20 °C |\n| High mountain | Altitude, cold, thin air | About 6.5 °C colder per 1,000 m; at about 5,500 m air pressure is roughly half that at sea level |\n\n> A **desert** is defined by low precipitation, not by heat. Antarctica gets so little that it counts as the world's largest desert.\n\n**Why do extreme environments matter?**\n\n- **Science** — ice cores drilled in Antarctica contain air bubbles from about 800,000 years ago, a record of past climate.\n- **Resources** — oil and gas (Arabian Desert, Arctic Alaska), minerals, and clear skies for solar power (Morocco's Noor Ouarzazate plant on the edge of the Sahara).\n- **People** — indigenous peoples such as the Tuareg, Inuit and Sherpa have lived in extreme places for centuries.\n- **Early warning** — polar ice and mountain glaciers respond quickly to climate change, so they show early what warming is doing.\n- **Tourism and adventure** — Everest, the Sahara and Antarctica all attract visitors (see *Living & Travelling in Extreme Environments*).\n\nHot and cold deserts together cover roughly a third of Earth's land surface — extreme environments are not rare corners of the planet.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified world map with the Equator, Tropics and polar circles, showing hot deserts between about 15 and 30 degrees north and south, polar ice in Antarctica, Greenland and the Arctic Ocean, high mountain ranges, and Singapore near the Equator"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><rect x="60" y="20" width="410" height="195.5" fill="#bae6fd" stroke="#334155" stroke-width="0.8"/><rect x="60" y="20" width="410" height="8" fill="#e0f2fe"/><polygon points="73.7,41.8 88.5,36.1 122.6,37.3 156.8,35 173.9,39.6 194.4,48.8 202.4,60.3 188.7,66 178.4,77.5 172.8,89 154.5,87.9 154.5,94.8 165.9,93.6 170.5,106.3 176.2,108.6 162.5,101.6 145.4,94.8 137.4,83.3 130.6,78.7 123.8,71.8 123.8,62.6 111.3,51.1 94.2,48.8 77.1,48.8" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><polygon points="176.2,108.6 196.7,106.3 208.1,117.7 225.1,124.7 219.4,143.1 210.3,148.8 198.9,161.5 191,166 187.6,177.5 183,178.7 179.6,169.5 183,152.3 185.3,138.5 178.4,133.9 172.8,123.5 173.9,117.7 177.3,113.2" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><polygon points="253.6,76.4 254.8,68.3 262.7,67.2 259.3,62.6 265,60.3 270.7,56.8 274.1,52.2 270.7,46.5 282.1,38.4 296.9,36.1 310.6,40.7 333.3,37.3 344.7,33.8 356.1,33.8 378.9,29.2 396,32.7 424.4,35 447.2,37.3 470,39.6 470,43 458.6,48.8 447.2,51.1 442.7,59.1 426.7,56.8 422.2,64.9 413.1,69.4 409.6,77.5 403.9,83.3 401.7,91.3 390.3,94.8 385.7,106.3 378.9,102.8 378.9,110.9 382.9,116.1 376.6,108.6 376.6,99.4 369.8,92.4 364.1,92.4 356.1,100.5 352.7,108.6 347,94.8 340.2,89 331.1,89 332.2,92.4 327.6,98.2 324.2,99.4 316.3,102.8 314,102.8 309.4,93.6 304.9,85.6 303.7,82.1 306,76.4 299.2,76.4 294.6,74.1 292.3,71.8 287.8,71.8 280.9,69.4 278.7,67.2 274.1,67.2 268.4,68.3 263.9,75.2 258.2,76.4" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><polygon points="245.6,93.6 245.6,100.5 247.9,105.1 255.9,112 270.7,112 275.3,113.2 276.4,120.1 278.7,124.7 279.8,131.6 278.7,138.5 282.1,148.8 285.5,156.9 294.6,156.9 301.4,150 304.9,144.2 306,138.5 310.6,135 310.6,129.3 309.4,123.5 312.8,117.7 319.7,112 323.1,105.1 314,104 309.4,99.4 307.1,92.4 302.6,85.6 301.4,82.1 287.8,80.9 276.4,75.2 265,76.4 258.2,76.4 253.6,83.3 247.9,86.7" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><polygon points="315.1,132.7 321.9,135 318.5,146.5 315.1,143.1" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><polygon points="394.8,143.1 403.9,138.5 413.1,131.6 421,131.6 426.7,130.4 431.3,139.6 439.3,146.5 437,156.9 430.1,161.5 422.2,158 415.3,154.5 406.2,156.9 396,156.9 393.7,147.6" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><polygon points="259.3,60.3 266.1,59.1 262.7,52.2 258.2,51.1 259.3,55.7" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><polygon points="389.1,115.5 398.3,109.7 400.5,116.6 397.1,122.4 390.3,121.2" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><polygon points="373.2,112 376.6,113.2 385.7,124.7 382.3,123.5" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><polygon points="202.4,48.8 217.2,48.8 242.2,37.3 244.5,25.8 219.4,22.3 191,25.8 183,29.2 202.4,37.3" fill="#e0f2fe" stroke="#334155" stroke-width="0.8"/><polygon points="60,198.3 128.3,201.7 196.7,191.4 230.8,206.3 265,198.3 333.3,194.8 401.7,193.6 470,198.3 470,215.5 60,215.5" fill="#e0f2fe" stroke="#334155" stroke-width="0.8"/><ellipse cx="276.4" cy="91.3" rx="27.3" ry="8" fill="#fde68a" stroke="#b45309" stroke-width="0.8"/><ellipse cx="318.5" cy="92.4" rx="8" ry="6.9" fill="#fde68a" stroke="#b45309" stroke-width="0.8"/><ellipse cx="185.3" cy="144.2" rx="2.8" ry="6.9" fill="#fde68a" stroke="#b45309" stroke-width="0.8"/><ellipse cx="287.8" cy="145.4" rx="6.8" ry="5.2" fill="#fde68a" stroke="#b45309" stroke-width="0.8"/><ellipse cx="413.1" cy="146.5" rx="11.4" ry="5.8" fill="#fde68a" stroke="#b45309" stroke-width="0.8"/><ellipse cx="136.3" cy="82.1" rx="5.7" ry="4" fill="#fde68a" stroke="#b45309" stroke-width="0.8"/><polygon points="355.8,89.4 361.8,78.4 367.8,89.4" fill="#d6d3d1" stroke="#1f2937" stroke-width="1"/><polygon points="179.3,140 185.3,129 191.3,140" fill="#d6d3d1" stroke="#1f2937" stroke-width="1"/><polygon points="179.3,166.5 185.3,155.5 191.3,166.5" fill="#d6d3d1" stroke="#1f2937" stroke-width="1"/><polygon points="133.7,71 139.7,60 145.7,71" fill="#d6d3d1" stroke="#1f2937" stroke-width="1"/><polygon points="270.4,69.9 276.4,58.9 282.4,69.9" fill="#d6d3d1" stroke="#1f2937" stroke-width="1"/><line x1="60" y1="41.3" x2="470" y2="41.3" stroke="#334155" stroke-width="0.8" stroke-dasharray="4 3"/><text x="56" y="45.3" text-anchor="end">66.5° N</text><line x1="60" y1="90.7" x2="470" y2="90.7" stroke="#334155" stroke-width="0.8" stroke-dasharray="4 3"/><text x="56" y="94.7" text-anchor="end">23.5° N</text><line x1="60" y1="117.7" x2="470" y2="117.7" stroke="#334155" stroke-width="0.8"/><text x="56" y="121.7" text-anchor="end">0°</text><line x1="60" y1="144.8" x2="470" y2="144.8" stroke="#334155" stroke-width="0.8" stroke-dasharray="4 3"/><text x="56" y="148.8" text-anchor="end">23.5° S</text><line x1="60" y1="194.2" x2="470" y2="194.2" stroke="#334155" stroke-width="0.8" stroke-dasharray="4 3"/><text x="56" y="198.2" text-anchor="end">66.5° S</text><text x="69.1" y="87.7" >Tropic of Cancer</text><text x="69.1" y="114.7" >Equator</text><text x="69.1" y="141.8" >Tropic of Capricorn</text><circle cx="383.2" cy="116.3" r="3.5" fill="#dc2626" stroke="#1f2937" stroke-width="0.8"/><text x="389.2" y="128.3" font-size="11">Singapore</text><text x="276.4" y="99.3" text-anchor="middle" font-weight="bold">Sahara</text><text x="320.5" y="80.4" text-anchor="middle">Arabian</text><text x="179.3" y="166.2" text-anchor="end">Atacama</text><text x="287.8" y="163.4" text-anchor="middle">Kalahari</text><text x="413.1" y="165.5" text-anchor="middle">Australian</text><text x="361.8" y="75.4" text-anchor="middle">Himalayas</text><text x="194.3" y="139" >Andes</text><text x="148.7" y="70" >Rockies</text><text x="267.4" y="59.9" text-anchor="end">Alps</text><text x="265" y="211.5" text-anchor="middle" font-weight="bold">Antarctica</text><text x="219.4" y="32.7" text-anchor="middle">Greenland</text><text x="122.6" y="28" text-anchor="middle">Arctic Ocean sea ice</text><rect x="60" y="248" width="14" height="10" fill="#fde68a" stroke="#b45309"/><text x="80" y="257" >Hot desert</text><rect x="160" y="248" width="14" height="10" fill="#e0f2fe" stroke="#334155"/><text x="180" y="257" >Polar ice</text><polygon points="254,258 260,247 266,258" fill="#d6d3d1" stroke="#1f2937"/><text x="272" y="257" >High mountains</text><circle cx="378" cy="253" r="3.5" fill="#dc2626" stroke="#1f2937" stroke-width="0.8"/><text x="386" y="257" >Singapore</text><text x="60" y="280" >Schematic map: shapes simplified, positions approximate.</text></g></svg>`,
      diagramCaption:
        "Schematic world map. Hot deserts cluster between about 15° and 30° N and S; polar ice lies beyond the polar circles (66.5°); high mountains follow plate boundaries, not latitude. Singapore sits about 1° north of the Equator.",
      workedExamples: [
        {
          title: "Read the resource: which extreme is it?",
          problem:
            "Use the (illustrative) data to decide which type of extreme environment each place is.\n\n| Place | Latitude | Height | Annual precipitation | Warmest month | Coldest month |\n|---|---|---|---|---|---|\n| P | 23° N | 300 m | 20 mm | 36 °C | 12 °C |\n| Q | 78° S | 3,500 m | 25 mm | −32 °C | −68 °C |\n| R | 30° N | 4,500 m | 400 mm | 8 °C | −10 °C |",
          steps: [
            "Strategy — *Look for the anomaly*: in each row, find the figure furthest from 'normal'.",
            "P: only 20 mm of rain (far under 250 mm) and a 36 °C summer, at 23° N — right by the Tropic of Cancer. → **hot desert**.",
            "Q: 78° S is well beyond the Antarctic Circle (66.5° S); even the warmest month is −32 °C, and there is only 25 mm of precipitation. → **polar** (a polar desert too).",
            "R: 30° N is in the hot-desert latitude belt, yet the warmest month is only 8 °C. The clue is the height: 4,500 m. Altitude, not latitude, controls this climate. → **high mountain** (like the Tibetan Plateau).",
          ],
          answer: "P = hot desert; Q = polar (a polar desert); R = high mountain.",
          yourTurn: {
            question:
              "Your turn: place S is at 24° N, 150 m above sea level, gets about 10 mm of rain a year and its July average is 33 °C. Name the type of extreme environment (two words).",
            answer: { type: "text", accept: ["hot desert", "hot deserts", "a hot desert", "hot-desert", "hot dry desert", "tropical desert", "subtropical desert"] },
            solution:
              "10 mm a year is far below 250 mm (a desert), and a 33 °C July at 24° N (near the Tropic of Cancer) makes it hot: a **hot desert**.",
          },
        },
        {
          title: "Skills: distances from latitude",
          problem:
            "One degree of latitude is about 111 km. The hot-desert belt in the northern hemisphere runs from about 15° N to 30° N. How wide is this belt from south to north?",
          steps: [
            "Find the difference in latitude: 30 − 15 = 15°.",
            "Multiply by the distance per degree: 15 × 111 = 1,665 km.",
          ],
          answer: "About 1,665 km (roughly 1,700 km) — wide enough to hold the whole Sahara from north to south.",
          yourTurn: {
            question:
              "Your turn: the Tropic of Cancer is at 23.5° N and the Arctic Circle at 66.5° N. Using 1° ≈ 111 km, how far apart are they, in km?",
            answer: { type: "number", value: 4773 },
            solution: "66.5 − 23.5 = 43°. 43 × 111 = 4,773 km.",
          },
        },
      ],
      keyPoints: [
        "An extreme environment has conditions at the limits of what life can tolerate: heat, cold, dryness, altitude or darkness.",
        "Main types: hot desert, polar, high mountain (also rainforest, volcanic).",
        "Hot deserts lie mostly 15–30° N and S; polar areas beyond 66.5°; mountains follow plate boundaries.",
        "A desert is defined by low precipitation (under 250 mm a year), so Antarctica is a desert.",
        "They matter for science, resources, indigenous peoples, tourism and as early warnings of climate change.",
      ],
      whyItWorks:
        "Why are extremes found where they are? A few big controls set every climate: **latitude** (how much of the Sun's energy arrives), **altitude** (how thin and cold the air is), the global pattern of **rising and sinking air** (which decides where rain falls) and **distance from the sea**. Push any one control to its limit — very high latitude, very high altitude, permanently sinking air — and you get an extreme environment. That is why the map shows patterns, not random dots: deserts line up near 30°, ice caps sit at the poles and mountains follow plate boundaries.",
      strategies: ["CLOCC (Continents, Lines of latitude, Oceans, Countries, Compass)", "Look for the anomaly", "Work it out from the map", "Think at different scales"],
      thinkDeeper:
        "The Amazon rainforest has plenty of water and warmth. Some geographers call it an extreme environment; others don't. Using the definition above, argue both sides. What would you need to measure to decide?",
    },
    // ------------------------------------------------------------------
    {
      id: "hot-desert-climate",
      heading: "Hot desert climates",
      discovery: {
        problem:
          "Singapore (about 1° N) and the central Sahara (about 25° N) both get strong tropical sunshine. Singapore receives roughly 2,200–2,500 mm of rain a year; parts of the central Sahara get less than 25 mm. Same Sun, same planet. What must the **air** be doing differently above the two places?",
        idea:
          "Above Singapore and the rest of the equatorial belt, warm, moist air **rises** — and rising air cools, condenses and makes rain. Above the Sahara, air is **sinking**. Sinking air warms up, so its water vapour stays invisible: no clouds, no rain. Deserts are where air is pushed down, not simply where the Sun is strongest.",
      },
      body:
        "**Hot deserts** receive **less than 250 mm of rain a year** — the driest parts get under 25 mm. Most lie between about **15° and 30° north and south** of the Equator: the Sahara and Arabian deserts in the north; the Kalahari, Namib, Atacama and Australian deserts in the south.\n\n**Cause 1 — sinking air and high pressure (the main reason)**\n\nThe Sun heats the Equator most strongly. Hot, moist air rises there, cools and drops heavy rain on the rainforests. High up, the now-dry air spreads towards the poles and, at about **30° N and S**, **sinks** back to the surface. This loop is called a **Hadley cell**. Sinking air is squeezed and **warms**, so clouds cannot form. The result is a belt of **high pressure** with clear skies for most of the year — ideal conditions for a desert. At the surface, the **trade winds** blow back towards the Equator to complete the loop.\n\n**Other causes that make some deserts even drier**\n\n- **Rain shadow** — mountains block moist winds. The Andes block moist air from the Amazon, helping to dry the Atacama.\n- **Cold ocean currents** — the Humboldt (Peru) Current off Chile and Peru and the Benguela Current off Namibia chill the air above them. Cool air near the surface is stable and cannot rise to form rain clouds, so these coasts get fog instead. Some Atacama weather stations average **less than 1 mm a year**.\n- **Distance from the sea (continentality)** — winds that cross thousands of kilometres of land, like those reaching the central Sahara or central Australia, have lost their moisture.\n\n**Temperature: hot days, cold nights**\n\nWith no cloud and very dry air, nothing blocks the sunshine by day and nothing traps the heat at night. The **diurnal (daily) temperature range** is large: 15–20 °C or more is common, and on clear winter nights the temperature can fall close to freezing after a warm afternoon. Summer afternoons in the Sahara often pass 40 °C.\n\n**Data: a central Sahara station** (approximate, rounded, illustrative climate normals)\n\n| | J | F | M | A | M | J | J | A | S | O | N | D |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| Temp (°C) | 12 | 15 | 19 | 24 | 29 | 33 | 36 | 35 | 32 | 26 | 18 | 13 |\n| Rain (mm) | 3 | 2 | 2 | 1 | 1 | 0 | 0 | 1 | 1 | 2 | 3 | 4 |\n\n**Named examples**\n\n- **Sahara** — about 9 million km², the largest hot desert. Most of it is rock and gravel plains, not sand dunes.\n- **Atacama, Chile** — one of the driest places on Earth (Hadley cell + rain shadow + cold current). NASA has tested Mars rover technology there.\n- **Arabian Desert** — includes the Rub' al Khali (Empty Quarter), one of the largest sand seas in the world.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the two Hadley cells: air rises at the Equator, forming clouds and rain over rainforest, flows towards 30 degrees north and south high in the atmosphere, then sinks and warms, giving high pressure, clear skies and deserts at about 30 degrees; trade winds blow back towards the Equator at the surface"><defs><marker id="ec-had-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#1f2937"/></marker></defs><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><line x1="20" y1="40" x2="460" y2="40" stroke="#334155" stroke-dasharray="5 4"/><text x="240" y="33" text-anchor="middle">Top of the troposphere (lower atmosphere)</text><rect x="20" y="230" width="440" height="8" fill="#d6d3d1" stroke="#334155" stroke-width="0.8"/><rect x="35" y="226" width="70" height="8" fill="#fde68a" stroke="#b45309" stroke-width="0.8"/><rect x="375" y="226" width="70" height="8" fill="#fde68a" stroke="#b45309" stroke-width="0.8"/><rect x="200" y="222" width="80" height="12" fill="#bbf7d0" stroke="#15803d" stroke-width="0.8"/><g fill="#e5e7eb" stroke="#334155" stroke-width="1"><ellipse cx="240" cy="92" rx="38" ry="18"/><ellipse cx="215" cy="104" rx="22" ry="13"/><ellipse cx="265" cy="104" rx="22" ry="13"/></g><g stroke="#2563eb" stroke-width="1.5"><line x1="212" y1="122" x2="208" y2="136"/><line x1="224" y1="124" x2="220" y2="138"/><line x1="258" y1="124" x2="254" y2="138"/><line x1="270" y1="122" x2="266" y2="136"/></g><line x1="240" y1="215" x2="240" y2="60" stroke="#1f2937" stroke-width="2.5" marker-end="url(#ec-had-a)"/><line x1="228" y1="52" x2="82" y2="52" stroke="#1f2937" stroke-width="2" marker-end="url(#ec-had-a)"/><line x1="252" y1="52" x2="398" y2="52" stroke="#1f2937" stroke-width="2" marker-end="url(#ec-had-a)"/><line x1="70" y1="60" x2="70" y2="212" stroke="#1f2937" stroke-width="2.5" marker-end="url(#ec-had-a)"/><line x1="410" y1="60" x2="410" y2="212" stroke="#1f2937" stroke-width="2.5" marker-end="url(#ec-had-a)"/><line x1="82" y1="216" x2="196" y2="216" stroke="#1f2937" stroke-width="2" marker-end="url(#ec-had-a)"/><line x1="398" y1="216" x2="284" y2="216" stroke="#1f2937" stroke-width="2" marker-end="url(#ec-had-a)"/><text x="155" y="210" text-anchor="middle">Trade winds</text><text x="325" y="210" text-anchor="middle">Trade winds</text><text x="155" y="68" text-anchor="middle">High up, air flows</text><text x="155" y="81" text-anchor="middle">towards 30°</text><text x="325" y="68" text-anchor="middle">High up, air flows</text><text x="325" y="81" text-anchor="middle">towards 30°</text><text x="248" y="152" >Hot, moist air rises,</text><text x="248" y="165" >cools and condenses:</text><text x="248" y="178" >clouds, heavy rain</text><text x="80" y="112" >Air sinks and</text><text x="80" y="125" >warms: no cloud</text><text x="400" y="112" text-anchor="end">Air sinks and</text><text x="400" y="125" text-anchor="end">warms: no cloud</text><text x="70" y="252" text-anchor="middle" font-weight="bold">30° S</text><text x="70" y="266" text-anchor="middle">HIGH pressure</text><text x="70" y="280" text-anchor="middle">Desert (e.g. Kalahari)</text><text x="240" y="252" text-anchor="middle" font-weight="bold">Equator 0°</text><text x="240" y="266" text-anchor="middle">LOW pressure</text><text x="240" y="280" text-anchor="middle">Rainforest</text><text x="410" y="252" text-anchor="middle" font-weight="bold">30° N</text><text x="410" y="266" text-anchor="middle">HIGH pressure</text><text x="410" y="280" text-anchor="middle">Desert (e.g. Sahara)</text></g></svg>`,
      diagramCaption:
        "The two Hadley cells. Air rises at the Equator (low pressure, clouds, rain) and sinks at about 30° N and S, where it warms and dries: high pressure, clear skies and the desert belts.",
      workedExamples: [
        {
          title: "Calculation: annual range and total rainfall",
          problem:
            "Use the central Sahara table above (approximate, illustrative normals). Calculate (a) the annual temperature range and (b) the total annual rainfall. Does the station qualify as a hot desert?",
          steps: [
            "Annual range = warmest month − coldest month. Warmest: July, 36 °C. Coldest: January, 12 °C.",
            "36 − 12 = **24 °C**.",
            "Total rainfall = add all 12 months: 3 + 2 + 2 + 1 + 1 + 0 + 0 + 1 + 1 + 2 + 3 + 4 = **20 mm**.",
            "20 mm is far below the 250 mm threshold, and summer averages reach 36 °C, so yes: a hot desert, and an extremely dry one.",
          ],
          answer: "(a) 24 °C (b) 20 mm — a hot desert.",
          yourTurn: {
            question:
              "Your turn: at a Saharan oasis the temperature is 39 °C at 3 p.m. and 14 °C at 5 a.m. the next morning. What is the diurnal (daily) temperature range, in °C?",
            answer: { type: "number", value: 25 },
            solution: "Diurnal range = maximum − minimum = 39 − 14 = 25 °C.",
          },
        },
        {
          title: "Model exam answer: explain why the Sahara is so dry (4 marks)",
          problem: "Explain why the Sahara Desert receives very little rainfall. (4 marks)",
          steps: [
            "Command word *explain* = give reasons and link them (cause → process → effect). 4 marks ≈ two well-developed points.",
            "Point 1 — location: the Sahara lies at about 15–30° N, where air in the Hadley cell sinks.",
            "Point 2 — process: sinking air is compressed and warms, so water vapour does not condense; no clouds form, giving high pressure and clear skies.",
            "Point 3 — extra factor: the centre of the Sahara is thousands of kilometres from the sea, so winds reaching it have little moisture left (continentality).",
            "Join it up as PEEL prose: *The Sahara is dry mainly because it lies at about 15–30° N, where air in the Hadley cell sinks. As the air sinks it warms, so its water vapour cannot condense into clouds, and high pressure gives clear skies for most of the year. In addition, much of the Sahara is a very long way from the sea, so any winds that reach it have already lost their moisture.*",
          ],
          answer:
            "A full-mark answer links location (about 30° N) → sinking air → warming → no condensation or clouds → high pressure → little rain, and adds a second factor such as distance from the sea.",
          yourTurn: {
            question:
              "Your turn: what type of air pressure is created where air sinks at about 30° N and S? (Two words.)",
            answer: { type: "text", accept: ["high pressure", "high-pressure", "high air pressure", "anticyclone", "an anticyclone", "anticyclonic", "high"] },
            solution:
              "Sinking air presses down on the surface, creating **high pressure** (an anticyclone): clear, dry, settled weather.",
          },
        },
      ],
      keyPoints: [
        "Hot deserts get less than 250 mm of rain a year and lie mostly 15–30° N and S.",
        "Main cause: sinking air in the Hadley cell warms, so clouds can't form → high pressure, clear skies.",
        "Extra drying: rain shadows (Atacama), cold ocean currents (Atacama, Namib), distance from the sea (central Sahara).",
        "No cloud cover → large diurnal range: hot days, cold nights.",
        "Examples: Sahara (about 9 million km²), Atacama (one of the driest places on Earth), Arabian.",
      ],
      whyItWorks:
        "Air pressure and temperature are linked. When air **rises**, there is less air above it, so it expands and cools. Cooler air can hold less water vapour, so the vapour condenses into cloud droplets and, eventually, rain. When air **sinks**, the opposite happens: it is squashed by the air above, warms up and can hold *more* water vapour, so droplets evaporate. Sinking air is a cloud-killer. Around 30° N and S the air is sinking for most of the year, so clouds rarely form. Without clouds there is also no blanket at night: the ground radiates its heat straight out to space, which is why desert nights get so cold.",
      strategies: ["Cause → process → effect", "Use the command word", "PEEL paragraph", "Use figures from the source"],
      thinkDeeper:
        "At midday Singapore and the Sahara both get intense sunshine, yet Sahara summer afternoons are far hotter — Singapore rarely tops 35 °C. Use the words *cloud*, *evaporation* and *water vapour* to explain why rainy Singapore stays cooler.",
    },
    // ------------------------------------------------------------------
    {
      id: "polar-climate",
      heading: "Polar climates",
      discovery: {
        problem:
          "In late June, Tromsø in northern Norway (about 70° N) has the Sun above the horizon for 24 hours a day; Singapore gets about 12 hours. Yet on a typical late-June day Tromsø reaches only around 12–15 °C while Singapore reaches about 31 °C. More hours of sunshine, but colder — how?",
        idea:
          "It isn't how **long** the Sun shines that matters most, but how **steeply**. Near the poles the Sun stays low in the sky, so each beam of sunlight is spread over a large area, passes through more atmosphere, and much of it bounces off snow and ice. Lots of hours, but weak heating.",
      },
      body:
        "Polar regions are cold for three linked reasons — remember them as **Angle, Atmosphere, Albedo**.\n\n1. **Low sun angle.** Earth is a sphere, so sunlight strikes the polar regions at a slant. The same beam of energy that lands on a small patch at the Equator is **spread over a much larger area** near the poles, so each square metre gets less heat. At an equinox the noon Sun is overhead (90°) at the Equator, but only 30° above the horizon at 60° N and 10° at 80° N.\n2. **More atmosphere.** A slanting beam travels a **longer path through the atmosphere**, so more energy is absorbed, scattered or reflected before it reaches the ground.\n3. **High albedo.** **Albedo** is the proportion of sunlight a surface reflects. Fresh snow reflects up to about 80–90%; dark open ocean reflects under about 10%. Ice bounces energy back to space, keeping the region cold — which keeps the ice there. This is a **positive feedback loop**.\n\n**Polar day and polar night**\n\nEarth's axis is tilted at about **23.5°**. In a hemisphere's summer, its pole leans towards the Sun: inside the Arctic or Antarctic Circle (**66.5°**) there is at least one day of 24-hour daylight (**polar day**, the 'midnight sun'). In winter the pole leans away, giving **polar night**, with no sunrise. At the poles themselves there are roughly six months of daylight followed by six months of darkness. With no sunshine at all for months, winter temperatures plunge.\n\n**Polar deserts**\n\nCold air holds very little water vapour, and high pressure sits over the ice sheets, so precipitation is tiny. The Antarctic interior gets **less than about 50 mm** (water equivalent) a year — drier than many hot deserts.\n\n**Data: a coastal Antarctic station** (approximate, rounded, illustrative climate normals; precipitation as water equivalent)\n\n| | J | F | M | A | M | J | J | A | S | O | N | D |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| Temp (°C) | −3 | −9 | −18 | −21 | −22 | −23 | −26 | −26 | −25 | −19 | −10 | −4 |\n| Precip. (mm) | 15 | 20 | 20 | 15 | 15 | 15 | 15 | 10 | 10 | 10 | 10 | 15 |\n\nNotice that the warmest months are **December and January**: this is the southern hemisphere, so summer comes at the end and start of the calendar year.\n\n**The Arctic vs Antarctica**\n\n| | Arctic | Antarctica |\n|---|---|---|\n| What is it? | A frozen **ocean** surrounded by land (Greenland, Canada, Alaska, Russia, Norway) | A **continent** surrounded by the Southern Ocean |\n| Height | Sea ice is at sea level | Ice sheet over 4 km thick in places; the highest average height of any continent |\n| Temperature | Very cold, but the ocean under the ice releases some heat | Much colder: −89.2 °C recorded at Vostok Station (1983) |\n| People | Roughly 4 million people live in the Arctic region, including Inuit and Sámi | No permanent population; a few thousand scientists and staff in summer |\n\nAntarctica's height matters: temperature falls with altitude (see *Mountain climates*), so its high ice plateau is far colder than the sea-level Arctic.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of parallel sun rays hitting a curved Earth: a beam near the Equator hits the ground almost head-on and heats a small area strongly, while an equal beam near the pole strikes at a low angle, spreads over a much larger area and passes through more atmosphere"><defs><marker id="ec-sun-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#b45309"/></marker></defs><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><circle cx="150" cy="170" r="128" fill="none" stroke="#7dd3fc" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="150" cy="170" r="110" fill="#bbf7d0" stroke="#334155" stroke-width="1.2"/><path d="M 90 77.8 A 110 110 0 0 1 210 77.8 Z" fill="#e0f2fe" stroke="none"/><line x1="40" y1="170" x2="260" y2="170" stroke="#334155" stroke-dasharray="4 3"/><text x="50" y="165" >Equator</text><circle cx="150" cy="60" r="3" fill="#1f2937"/><text x="150" y="52" text-anchor="middle">North Pole</text><line x1="470" y1="70" x2="197.8" y2="70" stroke="#d97706" stroke-width="1.6" marker-end="url(#ec-sun-a)"/><line x1="470" y1="80" x2="215.2" y2="80" stroke="#d97706" stroke-width="1.6" marker-end="url(#ec-sun-a)"/><line x1="470" y1="90" x2="227.5" y2="90" stroke="#d97706" stroke-width="1.6" marker-end="url(#ec-sun-a)"/><line x1="470" y1="160" x2="261.5" y2="160" stroke="#d97706" stroke-width="1.6" marker-end="url(#ec-sun-a)"/><line x1="470" y1="170" x2="262" y2="170" stroke="#d97706" stroke-width="1.6" marker-end="url(#ec-sun-a)"/><line x1="470" y1="180" x2="261.5" y2="180" stroke="#d97706" stroke-width="1.6" marker-end="url(#ec-sun-a)"/><path d="M 195.8 70 A 110 110 0 0 1 225.5 90" fill="none" stroke="#dc2626" stroke-width="5"/><path d="M 259.5 160 A 110 110 0 0 1 259.5 180" fill="none" stroke="#dc2626" stroke-width="5"/><text x="470" y="16" text-anchor="end" font-weight="bold">Parallel rays from the Sun (equal beams)</text><text x="470" y="34" text-anchor="end">Near the pole: low sun angle,</text><text x="470" y="47" text-anchor="end">beam spread over a BIG area,</text><text x="470" y="60" text-anchor="end">longer path through the air</text><text x="470" y="202" text-anchor="end">Near the Equator: sun high,</text><text x="470" y="215" text-anchor="end">beam on a SMALL area</text><text x="470" y="228" text-anchor="end">so strong heating</text><text x="22" y="300" >Dashed ring = atmosphere. Red = ground heated by each beam.</text><text x="22" y="314" >Snow and ice (light blue) reflect most sunlight: high albedo.</text></g></svg>`,
      diagramCaption:
        "Equal beams of sunlight: near the Equator the energy lands on a small area and heats it strongly; near the pole the same energy is spread over a larger area and passes through more atmosphere. White ice then reflects much of what arrives.",
      workedExamples: [
        {
          title: "Skills: the noon sun angle",
          problem:
            "At an equinox (around 21 March or 23 September) the noon Sun is overhead at the Equator, and its angle above the horizon is about **90° − latitude**. Find the noon sun angle in Singapore (about 1° N) and in Longyearbyen, Svalbard (about 78° N). What does this tell you?",
          steps: [
            "Singapore: 90 − 1 = 89°. The Sun is almost directly overhead.",
            "Longyearbyen: 90 − 78 = 12°. The Sun is just above the horizon.",
            "A beam arriving at 12° is spread over about five times as much ground as a beam from overhead (stretch: the spread factor is 1 ÷ sin 12° ≈ 4.8), so each square metre gets only about a fifth of the energy — before you even count the longer path through the atmosphere.",
          ],
          answer: "Singapore about 89°, Longyearbyen about 12° — so the same sunshine heats Longyearbyen far less.",
          yourTurn: {
            question:
              "Your turn: London is at about 51.5° N. Using 90° − latitude, what is the noon sun angle in London at an equinox, in degrees?",
            answer: { type: "number", value: 38.5 },
            solution: "90 − 51.5 = 38.5°.",
          },
        },
        {
          title: "Calculation: range and precipitation with negative numbers",
          problem:
            "Use the coastal Antarctic table (approximate, illustrative normals). Find (a) the annual temperature range and (b) the total annual precipitation. Does the station count as a desert?",
          steps: [
            "Warmest month: January, −3 °C. Coldest: July and August, −26 °C.",
            "Range = warmest − coldest = −3 − (−26) = −3 + 26 = **23 °C**. Subtracting a negative means adding.",
            "Total = 15 + 20 + 20 + 15 + 15 + 15 + 15 + 10 + 10 + 10 + 10 + 15 = **170 mm**.",
            "170 mm is under 250 mm, so yes: it is a (cold) polar desert.",
          ],
          answer: "(a) 23 °C (b) 170 mm — a polar desert.",
          yourTurn: {
            question:
              "Your turn: an Arctic weather station's warmest month averages 2 °C and its coldest month averages −31 °C. What is the annual temperature range, in °C?",
            answer: { type: "number", value: 33 },
            solution: "Range = 2 − (−31) = 2 + 31 = 33 °C.",
          },
        },
      ],
      keyPoints: [
        "The poles are cold because of Angle (energy spread out), Atmosphere (longer path) and Albedo (ice reflects sunlight).",
        "Axis tilt of 23.5° gives polar day in summer and polar night in winter inside 66.5°.",
        "Cold air holds little moisture, so polar regions are deserts (Antarctic interior: under about 50 mm a year).",
        "Arctic = frozen ocean ringed by inhabited land; Antarctica = high, ice-covered continent with no permanent residents — and colder.",
        "Annual range with negatives: warmest − coldest, e.g. −3 − (−26) = 23 °C.",
      ],
      whyItWorks:
        "Shine a torch straight down on a table: you get a small, bright circle. Tilt it, and the same light becomes a big, dim oval. Earth's curve does exactly this to sunlight. The total energy in the beam is unchanged, but spread over a bigger area each square metre gets less, so it warms less. Add a longer journey through the air (more energy lost before arriving) and white ice that reflects most of what does arrive, and the poles end up with an energy shortfall all year. Winds and ocean currents carry heat from the tropics towards the poles, which stops the tropics getting ever hotter and the poles ever colder.",
      strategies: ["Sketch it", "Cause → process → effect", "Compare and contrast", "Spot the misconception"],
      thinkDeeper:
        "As Arctic sea ice melts, dark ocean replaces white ice. Using albedo, explain why this could speed up warming — and why scientists call it a feedback loop. (Recent studies suggest the Arctic has warmed roughly three to four times faster than the global average since 1979.)",
    },
    // ------------------------------------------------------------------
    {
      id: "mountain-climate",
      heading: "Mountain climates",
      discovery: {
        problem:
          "Mount Kilimanjaro in Tanzania stands only about 340 km south of the Equator, yet it has had ice and snow near its summit (about 5,900 m) for thousands of years. How can there be ice so close to the Equator?",
        idea:
          "Height beats latitude. Temperature falls by about **6.5 °C for every 1,000 m** you climb. The plains around Kilimanjaro are at about 1,000 m and often around 25 °C. Climbing another 4,900 m costs about 4.9 × 6.5 ≈ 32 °C, so the summit is usually well below freezing.",
      },
      body:
        "High mountains create their own extreme climate. Four factors matter.\n\n**1. Temperature falls with height**\n\nOn average, air temperature drops by about **6.5 °C for every 1,000 m** you climb (the **lapse rate**). That is why there is permanent snow on mountains near the Equator.\n\n    temperature change (°C) = height difference (m) ÷ 1000 × 6.5\n    temperature higher up = temperature lower down − temperature change\n\nThe 6.5 °C figure is an average; on any given day it varies with cloud, moisture and time of day.\n\n**2. Thin air**\n\nAir pressure falls with height because there is less air above pressing down. At about 5,500 m the pressure is roughly **half** its sea-level value; on the summit of **Mount Everest (8,849 m)** it is only about **one-third**. Each breath holds less oxygen, which can cause altitude sickness. Thin air also filters less ultraviolet (UV) light — UV increases by roughly 10% for every 1,000 m — so a mountain can be freezing yet still give you sunburn.\n\n**3. Relief rainfall and rain shadows**\n\nWhen moist wind meets a mountain range it is forced to rise up the **windward** slope. It cools, its water vapour condenses, clouds form and rain falls: **relief (orographic) rainfall**. Once over the top, the air sinks down the **leeward** slope, warms and dries out, leaving a **rain shadow**.\n\n- **Himalayas** — summer monsoon winds from the Indian Ocean drench the southern slopes and hills. In the Khasi Hills of north-east India, Mawsynram and Cherrapunji average roughly 11,000–12,000 mm a year. North of the main ranges, the Tibetan Plateau and Ladakh lie in a rain shadow: Leh gets only around 100 mm a year.\n- **Andes** — in the far south, westerly winds from the Pacific soak southern Chile, while Patagonia in Argentina, on the leeward side, is dry steppe and semi-desert. Further north the Andes block moist air from the Amazon, helping to dry the Atacama.\n\n**4. Aspect — which way a slope faces**\n\nIn the northern hemisphere, **south-facing** slopes face the Sun, so they are warmer and sunnier; north-facing slopes are shaded and colder, and snow lasts longer there. In the Alps, villages and vineyards cluster on the sunny side of east–west valleys. In the southern hemisphere it's the other way round: north-facing slopes are the sunny ones.\n\n| Place | Height (approx.) | What you'd notice |\n|---|---|---|\n| Bukit Timah Hill, Singapore | about 164 m | Only about 1 °C cooler than the coast |\n| La Paz, Bolivia | about 3,600 m | Cool all year; new arrivals get breathless |\n| Everest Base Camp (south side) | about 5,400 m | Below freezing most nights; about half the oxygen per breath |\n| Mount Everest summit | 8,849 m | About one-third of sea-level pressure; far below 0 °C |",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a 4000 metre mountain. Moist wind from the sea rises up the windward slope, cools, forms cloud and relief rain; it sinks down the leeward side, warming and drying, creating a rain shadow. A height scale shows temperature falling 6.5 degrees Celsius per 1000 metres, from 28 degrees at sea level to 2 degrees at 4000 metres"><defs><marker id="ec-mtn-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#1f2937"/></marker></defs><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><rect x="87" y="260" width="48" height="20" fill="#bae6fd"/><line x1="86" y1="260" x2="86" y2="60" stroke="#334155"/><line x1="82" y1="260" x2="86" y2="260" stroke="#334155"/><text x="79" y="264" text-anchor="end">0 m</text><text x="91" y="264" fill="#b91c1c">28 °C</text><line x1="82" y1="210" x2="86" y2="210" stroke="#334155"/><text x="79" y="214" text-anchor="end">1000 m</text><text x="91" y="214" fill="#b91c1c">21.5 °C</text><line x1="82" y1="160" x2="86" y2="160" stroke="#334155"/><text x="79" y="164" text-anchor="end">2000 m</text><text x="91" y="164" fill="#b91c1c">15 °C</text><line x1="82" y1="110" x2="86" y2="110" stroke="#334155"/><text x="79" y="114" text-anchor="end">3000 m</text><text x="91" y="114" fill="#b91c1c">8.5 °C</text><line x1="82" y1="60" x2="86" y2="60" stroke="#334155"/><text x="79" y="64" text-anchor="end">4000 m</text><text x="91" y="64" fill="#b91c1c">2 °C</text><text x="4" y="34" >Height (m)</text><text x="91" y="34" fill="#b91c1c">Temperature (falls 6.5 °C per 1000 m)</text><polygon points="135,280 135,260 150,256 270,60 300,95 400,255 470,255 470,280" fill="#d6d3d1" stroke="#334155" stroke-width="1.2"/><rect x="400" y="250" width="70" height="5" fill="#fde68a" stroke="#b45309" stroke-width="0.6"/><polygon points="150,256 210,140 230,152 160,262" fill="#bbf7d0" stroke="none"/><g fill="#e5e7eb" stroke="#334155"><ellipse cx="200" cy="110" rx="30" ry="14"/><ellipse cx="228" cy="96" rx="24" ry="12"/><ellipse cx="178" cy="120" rx="18" ry="10"/></g><g stroke="#2563eb" stroke-width="1.5"><line x1="180" y1="134" x2="176" y2="150"/><line x1="192" y1="128" x2="188" y2="144"/><line x1="204" y1="126" x2="200" y2="142"/><line x1="216" y1="122" x2="212" y2="138"/></g><polyline points="92,240 140,240" fill="none" stroke="#1f2937" stroke-width="2" marker-end="url(#ec-mtn-a)"/><polyline points="150,225 205,150 250,72" fill="none" stroke="#1f2937" stroke-width="2" marker-end="url(#ec-mtn-a)"/><polyline points="290,60 340,140 392,225" fill="none" stroke="#b45309" stroke-width="2" marker-end="url(#ec-mtn-a)"/><text x="92" y="232" >Moist wind</text><text x="100" y="278" >Sea</text><text x="178" y="70" text-anchor="middle">Air forced up,</text><text x="178" y="83" text-anchor="middle">cools, condenses</text><text x="345" y="92" >Air sinks, warms</text><text x="345" y="105" >and dries out</text><text x="190" y="236" font-weight="bold">Windward side:</text><text x="190" y="249" >relief rain</text><text x="474" y="175" text-anchor="end" font-weight="bold">Leeward side:</text><text x="474" y="188" text-anchor="end">RAIN SHADOW (dry)</text><text x="270" y="294" text-anchor="middle">Summit 4000 m</text><line x1="270" y1="285" x2="270" y2="66" stroke="#334155" stroke-dasharray="2 3"/></g></svg>`,
      diagramCaption:
        "Rain shadow cross-section. Moist wind rises and cools on the windward side (relief rain); sinking air warms and dries on the leeward side (rain shadow). The scale shows temperature falling 6.5 °C per 1,000 m, from 28 °C at sea level to 2 °C at 4,000 m.",
      workedExamples: [
        {
          title: "Calculation: using the lapse rate",
          problem:
            "Ravi is trekking in Nepal. At a village at 1,400 m the temperature is 20 °C. Estimate the temperature at a pass at 5,400 m, using a lapse rate of 6.5 °C per 1,000 m.",
          steps: [
            "Height difference = 5,400 − 1,400 = 4,000 m.",
            "Cooling = 4,000 ÷ 1,000 × 6.5 = 4 × 6.5 = 26 °C.",
            "Temperature at the pass = 20 − 26 = **−6 °C**.",
          ],
          answer: "About −6 °C — well below freezing, even though the village feels mild.",
          yourTurn: {
            question:
              "Your turn: on a sunny afternoon a coastal town in Sabah, Malaysia (at sea level) is 30 °C. Using 6.5 °C per 1,000 m, estimate the temperature at 4,000 m on Mount Kinabalu (about 4,095 m high), in °C.",
            answer: { type: "number", value: 4 },
            solution: "Cooling = 4,000 ÷ 1,000 × 6.5 = 4 × 6.5 = 26 °C. Temperature = 30 − 26 = 4 °C.",
          },
        },
        {
          title: "Model exam answer: relief rain and rain shadow (4 marks)",
          problem:
            "Explain how the Himalayas cause heavy rain on their southern side but a dry climate on the Tibetan Plateau to the north. (4 marks)",
          steps: [
            "Strategy — *Sketch it*: draw the cross-section first (ocean → mountains → plateau) with arrows, then write in the order the air moves.",
            "Windward: summer monsoon winds carry moist air from the Indian Ocean towards the mountains.",
            "The air is forced to rise, cools, and its water vapour condenses → clouds → heavy relief rainfall on the southern slopes.",
            "By the time the air has crossed the mountains, it has lost most of its moisture.",
            "Leeward: the air sinks, warms and dries, so the Tibetan Plateau lies in a rain shadow with little rain.",
          ],
          answer:
            "Model: *Moist monsoon winds from the Indian Ocean are forced to rise over the Himalayas. As the air rises it cools and its water vapour condenses, forming clouds and heavy relief rain on the southern slopes. Having lost most of its moisture, the air then sinks on the northern side, warming and drying, so the Tibetan Plateau lies in a rain shadow and is dry.*",
          yourTurn: {
            question:
              "Your turn: what is the name for the dry area on the sheltered (leeward) side of a mountain range? (Two words.)",
            answer: { type: "text", accept: ["rain shadow", "rainshadow", "rain-shadow", "a rain shadow", "rain shadow area", "rain shadow zone", "rain shadow region"] },
            solution: "It is a **rain shadow**: the sinking air on the leeward side warms and dries, so little rain falls.",
          },
        },
      ],
      keyPoints: [
        "Temperature falls by about 6.5 °C per 1,000 m of height.",
        "Air pressure is roughly halved by about 5,500 m — less oxygen in every breath; UV is stronger.",
        "Windward slopes get relief rain; leeward slopes lie in a rain shadow (Tibetan Plateau, Patagonia).",
        "Aspect: in the northern hemisphere south-facing slopes are warmer and sunnier.",
        "Height can beat latitude: ice on Kilimanjaro, only about 340 km from the Equator.",
      ],
      whyItWorks:
        "The atmosphere is heated mainly from **below**: sunlight passes through the air and warms the ground, and the ground then warms the air touching it. Higher up you are further from that 'radiator', and the air is thinner, so it absorbs and holds less heat. Rising air also **expands** as the pressure around it drops, and expanding air cools — the same reason a spray can feels cold when you use it. Push moist air up a mountain and this cooling makes its vapour condense into cloud and rain. Let it sink down the other side and compression warms it, so it holds on to what little moisture is left: a rain shadow.",
      strategies: ["Sketch it", "Cause → process → effect", "Use figures from the source", "Think at different scales"],
      thinkDeeper:
        "Work backwards: sea level is 28 °C and a mountain top is 2 °C. Using 6.5 °C per 1,000 m, how high is the mountain? (26 ÷ 6.5 = 4, so 4,000 m.) Now stretch further: rising air that is cloud-free cools by about 10 °C per 1,000 m, but once cloud forms it cools more slowly (often around 5–6 °C per 1,000 m). Air sinking down the leeward side is cloud-free, so it warms at about 10 °C per 1,000 m. Why does this make the leeward foot of the mountain not just drier but *warmer* than the windward foot?",
    },
    // ------------------------------------------------------------------
    {
      id: "climate-graphs",
      heading: "Climate graphs",
      discovery: {
        problem:
          "Graph A has tall blue bars in every month and a red line almost flat between 26 and 29 °C. Graph B has bars you can barely see and a red line that climbs from 12 °C to 36 °C and back down again. One of them is Singapore. What is the other — and which single number from each graph would prove it?",
        idea:
          "Graph B is a hot desert. Two numbers summarise any climate graph: **total annual rainfall** (add the bars: Singapore 2,235 mm vs the Sahara station's 20 mm) and **annual temperature range** (Singapore 2.0 °C vs the Sahara station's 24 °C). Lots of rain + tiny range = equatorial. Almost no rain + big range = hot desert.",
      },
      body:
        "A **climate graph** shows the *average* weather of a place through the year, usually worked out from about 30 years of records (a **climate normal**).\n\n- **Bars** = average **rainfall** (or precipitation) for each month, read on the **rainfall axis** in **mm** (on the left in the diagram below).\n- **Line** = average **temperature** for each month, read on the **temperature axis** in **°C** (on the right below). Some climate graphs swap the sides, so always read the axis labels first. Plot each point in the *middle* of its month, then join the points with a smooth line or straight segments.\n- The **x-axis** shows the 12 months, J to D.\n\n**Check the scales first.** In the diagram, Singapore's rainfall axis goes up to 350 mm but the Sahara station's goes only to 10 mm — the Sahara's bars are visible only because its scale is so small.\n\n**Data for the graphs** (approximate, rounded, illustrative climate normals)\n\nSingapore:\n\n| | J | F | M | A | M | J | J | A | S | O | N | D |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| Temp (°C) | 26.5 | 27.0 | 27.5 | 28.0 | 28.5 | 28.5 | 28.0 | 28.0 | 27.5 | 27.5 | 27.0 | 26.5 |\n| Rain (mm) | 240 | 115 | 175 | 165 | 170 | 155 | 155 | 170 | 145 | 170 | 255 | 320 |\n\nCentral Sahara station:\n\n| | J | F | M | A | M | J | J | A | S | O | N | D |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| Temp (°C) | 12 | 15 | 19 | 24 | 29 | 33 | 36 | 35 | 32 | 26 | 18 | 13 |\n| Rain (mm) | 3 | 2 | 2 | 1 | 1 | 0 | 0 | 1 | 1 | 2 | 3 | 4 |\n\n**Key calculations**\n\n    annual temperature range = highest monthly temperature − lowest monthly temperature\n    total annual rainfall = sum of the 12 monthly totals\n    mean annual temperature = sum of the 12 monthly temperatures ÷ 12\n\n| | Singapore | Central Sahara station | Coastal Antarctic station |\n|---|---|---|---|\n| Total precipitation | 2,235 mm | 20 mm | 170 mm |\n| Annual temperature range | 28.5 − 26.5 = 2.0 °C | 36 − 12 = 24 °C | −3 − (−26) = 23 °C |\n| Wettest month | December (320 mm) | December (4 mm) | February and March (20 mm) |\n\n**Describing a climate graph: use TEA**\n\n- **Trend** — the overall pattern ('hot all year, rain every month, wettest November to January').\n- **Evidence** — figures with units *and* months ('highest 28.5 °C in May and June').\n- **Anomaly** — anything that breaks the pattern ('February is much drier, at 115 mm').\n\nSingapore's wettest spell, November to January, covers the late inter-monsoon thunderstorms and the wet first phase of the **Northeast Monsoon** (December to early March). Its tiny temperature range comes from being so near the Equator: the noon Sun is always high, so there is no real winter.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two climate graphs drawn from the data tables. Singapore: tall rainfall bars every month from 115 to 320 millimetres and a nearly flat temperature line between 26.5 and 28.5 degrees. Central Sahara station: rainfall bars of 0 to 4 millimetres on a 0 to 10 millimetre scale, and a temperature line rising from 12 degrees in January to 36 degrees in July"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="124" y="26" text-anchor="middle" font-weight="bold">Singapore</text><line x1="40" y1="250" x2="208" y2="250" stroke="#e5e7eb"/><line x1="208" y1="250" x2="212" y2="250" stroke="#dc2626"/><text x="214" y="254" fill="#b91c1c">0</text><line x1="40" y1="200" x2="208" y2="200" stroke="#e5e7eb"/><line x1="208" y1="200" x2="212" y2="200" stroke="#dc2626"/><text x="214" y="204" fill="#b91c1c">10</text><line x1="40" y1="150" x2="208" y2="150" stroke="#e5e7eb"/><line x1="208" y1="150" x2="212" y2="150" stroke="#dc2626"/><text x="214" y="154" fill="#b91c1c">20</text><line x1="40" y1="100" x2="208" y2="100" stroke="#e5e7eb"/><line x1="208" y1="100" x2="212" y2="100" stroke="#dc2626"/><text x="214" y="104" fill="#b91c1c">30</text><line x1="40" y1="50" x2="208" y2="50" stroke="#e5e7eb"/><line x1="208" y1="50" x2="212" y2="50" stroke="#dc2626"/><text x="214" y="54" fill="#b91c1c">40</text><line x1="36" y1="250" x2="40" y2="250" stroke="#1d4ed8"/><text x="34" y="254" text-anchor="end" fill="#1d4ed8">0</text><line x1="36" y1="221.4" x2="40" y2="221.4" stroke="#1d4ed8"/><text x="34" y="225.4" text-anchor="end" fill="#1d4ed8">50</text><line x1="36" y1="192.9" x2="40" y2="192.9" stroke="#1d4ed8"/><text x="34" y="196.9" text-anchor="end" fill="#1d4ed8">100</text><line x1="36" y1="164.3" x2="40" y2="164.3" stroke="#1d4ed8"/><text x="34" y="168.3" text-anchor="end" fill="#1d4ed8">150</text><line x1="36" y1="135.7" x2="40" y2="135.7" stroke="#1d4ed8"/><text x="34" y="139.7" text-anchor="end" fill="#1d4ed8">200</text><line x1="36" y1="107.1" x2="40" y2="107.1" stroke="#1d4ed8"/><text x="34" y="111.1" text-anchor="end" fill="#1d4ed8">250</text><line x1="36" y1="78.6" x2="40" y2="78.6" stroke="#1d4ed8"/><text x="34" y="82.6" text-anchor="end" fill="#1d4ed8">300</text><line x1="36" y1="50" x2="40" y2="50" stroke="#1d4ed8"/><text x="34" y="54" text-anchor="end" fill="#1d4ed8">350</text><rect x="41.5" y="112.9" width="11" height="137.1" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="47" y="264" text-anchor="middle">J</text><rect x="55.5" y="184.3" width="11" height="65.7" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="61" y="264" text-anchor="middle">F</text><rect x="69.5" y="150" width="11" height="100" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="75" y="264" text-anchor="middle">M</text><rect x="83.5" y="155.7" width="11" height="94.3" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="89" y="264" text-anchor="middle">A</text><rect x="97.5" y="152.9" width="11" height="97.1" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="103" y="264" text-anchor="middle">M</text><rect x="111.5" y="161.4" width="11" height="88.6" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="117" y="264" text-anchor="middle">J</text><rect x="125.5" y="161.4" width="11" height="88.6" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="131" y="264" text-anchor="middle">J</text><rect x="139.5" y="152.9" width="11" height="97.1" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="145" y="264" text-anchor="middle">A</text><rect x="153.5" y="167.1" width="11" height="82.9" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="159" y="264" text-anchor="middle">S</text><rect x="167.5" y="152.9" width="11" height="97.1" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="173" y="264" text-anchor="middle">O</text><rect x="181.5" y="104.3" width="11" height="145.7" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="187" y="264" text-anchor="middle">N</text><rect x="195.5" y="67.1" width="11" height="182.9" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="201" y="264" text-anchor="middle">D</text><polyline points="47,117.5 61,115 75,112.5 89,110 103,107.5 117,107.5 131,110 145,110 159,112.5 173,112.5 187,115 201,117.5" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="47" cy="117.5" r="2.2" fill="#dc2626"/><circle cx="61" cy="115" r="2.2" fill="#dc2626"/><circle cx="75" cy="112.5" r="2.2" fill="#dc2626"/><circle cx="89" cy="110" r="2.2" fill="#dc2626"/><circle cx="103" cy="107.5" r="2.2" fill="#dc2626"/><circle cx="117" cy="107.5" r="2.2" fill="#dc2626"/><circle cx="131" cy="110" r="2.2" fill="#dc2626"/><circle cx="145" cy="110" r="2.2" fill="#dc2626"/><circle cx="159" cy="112.5" r="2.2" fill="#dc2626"/><circle cx="173" cy="112.5" r="2.2" fill="#dc2626"/><circle cx="187" cy="115" r="2.2" fill="#dc2626"/><circle cx="201" cy="117.5" r="2.2" fill="#dc2626"/><rect x="40" y="50" width="168" height="200" fill="none" stroke="#334155"/><text x="34" y="42" text-anchor="end" fill="#1d4ed8">mm</text><text x="212" y="42" fill="#b91c1c">°C</text><text x="370" y="26" text-anchor="middle" font-weight="bold">Central Sahara station</text><line x1="286" y1="250" x2="454" y2="250" stroke="#e5e7eb"/><line x1="454" y1="250" x2="458" y2="250" stroke="#dc2626"/><text x="460" y="254" fill="#b91c1c">0</text><line x1="286" y1="200" x2="454" y2="200" stroke="#e5e7eb"/><line x1="454" y1="200" x2="458" y2="200" stroke="#dc2626"/><text x="460" y="204" fill="#b91c1c">10</text><line x1="286" y1="150" x2="454" y2="150" stroke="#e5e7eb"/><line x1="454" y1="150" x2="458" y2="150" stroke="#dc2626"/><text x="460" y="154" fill="#b91c1c">20</text><line x1="286" y1="100" x2="454" y2="100" stroke="#e5e7eb"/><line x1="454" y1="100" x2="458" y2="100" stroke="#dc2626"/><text x="460" y="104" fill="#b91c1c">30</text><line x1="286" y1="50" x2="454" y2="50" stroke="#e5e7eb"/><line x1="454" y1="50" x2="458" y2="50" stroke="#dc2626"/><text x="460" y="54" fill="#b91c1c">40</text><line x1="282" y1="250" x2="286" y2="250" stroke="#1d4ed8"/><text x="280" y="254" text-anchor="end" fill="#1d4ed8">0</text><line x1="282" y1="210" x2="286" y2="210" stroke="#1d4ed8"/><text x="280" y="214" text-anchor="end" fill="#1d4ed8">2</text><line x1="282" y1="170" x2="286" y2="170" stroke="#1d4ed8"/><text x="280" y="174" text-anchor="end" fill="#1d4ed8">4</text><line x1="282" y1="130" x2="286" y2="130" stroke="#1d4ed8"/><text x="280" y="134" text-anchor="end" fill="#1d4ed8">6</text><line x1="282" y1="90" x2="286" y2="90" stroke="#1d4ed8"/><text x="280" y="94" text-anchor="end" fill="#1d4ed8">8</text><line x1="282" y1="50" x2="286" y2="50" stroke="#1d4ed8"/><text x="280" y="54" text-anchor="end" fill="#1d4ed8">10</text><rect x="287.5" y="190" width="11" height="60" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="293" y="264" text-anchor="middle">J</text><rect x="301.5" y="210" width="11" height="40" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="307" y="264" text-anchor="middle">F</text><rect x="315.5" y="210" width="11" height="40" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="321" y="264" text-anchor="middle">M</text><rect x="329.5" y="230" width="11" height="20" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="335" y="264" text-anchor="middle">A</text><rect x="343.5" y="230" width="11" height="20" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="349" y="264" text-anchor="middle">M</text><text x="363" y="264" text-anchor="middle">J</text><text x="377" y="264" text-anchor="middle">J</text><rect x="385.5" y="230" width="11" height="20" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="391" y="264" text-anchor="middle">A</text><rect x="399.5" y="230" width="11" height="20" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="405" y="264" text-anchor="middle">S</text><rect x="413.5" y="210" width="11" height="40" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="419" y="264" text-anchor="middle">O</text><rect x="427.5" y="190" width="11" height="60" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="433" y="264" text-anchor="middle">N</text><rect x="441.5" y="170" width="11" height="80" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="0.6"/><text x="447" y="264" text-anchor="middle">D</text><polyline points="293,190 307,175 321,155 335,130 349,105 363,85 377,70 391,75 405,90 419,120 433,160 447,185" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="293" cy="190" r="2.2" fill="#dc2626"/><circle cx="307" cy="175" r="2.2" fill="#dc2626"/><circle cx="321" cy="155" r="2.2" fill="#dc2626"/><circle cx="335" cy="130" r="2.2" fill="#dc2626"/><circle cx="349" cy="105" r="2.2" fill="#dc2626"/><circle cx="363" cy="85" r="2.2" fill="#dc2626"/><circle cx="377" cy="70" r="2.2" fill="#dc2626"/><circle cx="391" cy="75" r="2.2" fill="#dc2626"/><circle cx="405" cy="90" r="2.2" fill="#dc2626"/><circle cx="419" cy="120" r="2.2" fill="#dc2626"/><circle cx="433" cy="160" r="2.2" fill="#dc2626"/><circle cx="447" cy="185" r="2.2" fill="#dc2626"/><rect x="286" y="50" width="168" height="200" fill="none" stroke="#334155"/><text x="280" y="42" text-anchor="end" fill="#1d4ed8">mm</text><text x="458" y="42" fill="#b91c1c">°C</text><rect x="40" y="280" width="14" height="10" fill="#7dd3fc" stroke="#1d4ed8"/><text x="60" y="289" >Rainfall (mm, left scale)</text><line x1="240" y1="285" x2="262" y2="285" stroke="#dc2626" stroke-width="2"/><text x="268" y="289" >Temperature (°C, right scale)</text></g></svg>`,
      diagramCaption:
        "Climate graphs drawn exactly from the two data tables. Bars = rainfall (left axis, mm); line = temperature (right axis, °C). Notice how different the two rainfall scales are.",
      workedExamples: [
        {
          title: "Read the resource: Singapore's climate in numbers",
          problem:
            "Using the Singapore table, calculate (a) the total annual rainfall and (b) the annual temperature range, and (c) name the wettest and driest months.",
          steps: [
            "(a) Add in pairs to avoid slips: (240 + 115) + (175 + 165) + (170 + 155) + (155 + 170) + (145 + 170) + (255 + 320).",
            "= 355 + 340 + 325 + 325 + 315 + 575 = **2,235 mm**.",
            "(b) Highest = 28.5 °C (May and June). Lowest = 26.5 °C (January and December). Range = 28.5 − 26.5 = **2.0 °C**.",
            "(c) Wettest: December (320 mm). Driest: February (115 mm).",
          ],
          answer: "(a) 2,235 mm (b) 2.0 °C (c) wettest December, driest February.",
          yourTurn: {
            question:
              "Your turn: using the Singapore table, how many mm more rain falls in the wettest month than in the driest month?",
            answer: { type: "number", value: 205 },
            solution: "Wettest = December, 320 mm. Driest = February, 115 mm. 320 − 115 = 205 mm.",
          },
        },
        {
          title: "Model exam answer: compare two climates (4 marks)",
          problem: "Using the two climate graphs, compare the climate of Singapore with that of the central Sahara station. (4 marks)",
          steps: [
            "Strategy — *Compare and contrast*: every sentence mentions BOTH places and uses comparative words (whereas, higher, compared with, both).",
            "Temperature: Singapore is hot all year (26.5–28.5 °C), whereas the Sahara station ranges from 12 °C in January to 36 °C in July.",
            "Range: Singapore's annual range is only 2.0 °C, compared with 24 °C at the Sahara station.",
            "Rainfall: Singapore gets 2,235 mm a year with rain in every month (at least 115 mm), whereas the Sahara station gets only 20 mm, with two completely dry months (June and July).",
            "Similarity (a nice extra): both have their wettest month in December — 320 mm in Singapore but just 4 mm at the Sahara station.",
          ],
          answer:
            "Model: *Singapore is hot all year, between 26.5 °C and 28.5 °C, so its annual range is only 2.0 °C, whereas the Sahara station has a much larger range of 24 °C, from 12 °C in January to 36 °C in July. Singapore is also far wetter, with 2,235 mm a year and every month above 100 mm, compared with just 20 mm at the Sahara station, where June and July have no rain at all.*",
          yourTurn: {
            question:
              "Your turn: calculate the mean annual temperature of the central Sahara station (sum of the 12 monthly temperatures ÷ 12). Give your answer in °C to 1 decimal place.",
            answer: { type: "number", value: 24.3, tolerance: 0.05, allowFraction: false },
            solution: "12 + 15 + 19 + 24 + 29 + 33 + 36 + 35 + 32 + 26 + 18 + 13 = 292. Then 292 ÷ 12 = 24.33… ≈ 24.3 °C.",
          },
        },
      ],
      keyPoints: [
        "Bars = rainfall (mm axis); line = temperature (°C axis), plotted in the middle of each month. Check which side each axis is on.",
        "Total rainfall = add all 12 bars; annual range = highest − lowest monthly temperature.",
        "Always quote figures with units and months — use TEA.",
        "Check each axis scale before comparing two graphs.",
        "Equatorial (Singapore): lots of rain, tiny range. Hot desert: almost no rain, big range. Polar: below 0 °C most of the year, little precipitation.",
      ],
      whyItWorks:
        "Why bars for rain but a line for temperature? Rainfall is an **amount** that piles up: each month's total is a separate bucket, so a bar shows 'how much fell'. Temperature is **continuous**: it changes smoothly from one month to the next, so a joined-up line shows how it rises and falls. Putting both on one graph, with two axes, lets you see at a glance whether the wet season is also the hot season — often the quickest clue to a climate type.",
      strategies: ["TEA (Trend, Evidence, Anomaly)", "Use figures from the source", "Compare and contrast", "Look for the anomaly"],
      thinkDeeper:
        "The coastal Antarctic station's annual range (23 °C) is almost the same as the Sahara station's (24 °C). So is 'a large annual range' enough to identify a hot desert? Which other figure would tell them apart instantly — and why is the Antarctic station's warmest month January?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Extreme environment", back: "A place where conditions (heat, cold, dryness, altitude, darkness) are at the limits of what living things can tolerate." },
      { front: "Hot desert", back: "An area with less than 250 mm of rain a year and high temperatures; mostly between 15° and 30° N and S." },
      { front: "Polar desert", back: "A very cold area with low precipitation (under 250 mm a year), e.g. Antarctica — the world's largest desert." },
      { front: "Hadley cell", back: "A loop of air: it rises at the Equator, flows towards the poles high up, sinks at about 30° N/S and returns at the surface as the trade winds." },
      { front: "Why does sinking air bring dry weather?", back: "It is compressed and warms, so water vapour doesn't condense. No clouds form → high pressure and clear skies." },
      { front: "Diurnal temperature range", back: "The difference between the highest and lowest temperature in one day (24 hours). Large in hot deserts because of clear skies." },
      { front: "Annual temperature range", back: "Highest monthly average temperature minus lowest monthly average temperature." },
      { front: "Albedo", back: "The proportion of sunlight a surface reflects. Fresh snow: up to about 80–90%; dark ocean: under about 10%." },
      { front: "Three reasons the poles are cold", back: "Angle (low sun, energy spread out), Atmosphere (longer path for the sunlight), Albedo (snow and ice reflect sunlight)." },
      { front: "Polar night", back: "A period of 24-hour darkness in winter inside the Arctic or Antarctic Circle (66.5°)." },
      { front: "Polar day (midnight sun)", back: "A period of 24-hour daylight in summer inside the Arctic or Antarctic Circle." },
      { front: "Lapse rate", back: "The fall in air temperature with height: on average about 6.5 °C per 1,000 m." },
      { front: "Relief (orographic) rainfall", back: "Rain formed when moist air is forced to rise over high ground, cools and condenses." },
      { front: "Rain shadow", back: "The dry area on the leeward side of mountains, where sinking air warms and dries." },
      { front: "Windward vs leeward", back: "Windward = the side facing the wind (wet). Leeward = the sheltered side (dry)." },
      { front: "Aspect", back: "The direction a slope faces. In the northern hemisphere south-facing slopes are warmer and sunnier." },
      { front: "Climate graph", back: "A graph of average monthly rainfall (bars, read on the mm axis) and temperature (line, read on the °C axis) for one place." },
      { front: "Continentality", back: "The effect of distance from the sea: places far inland are drier and have bigger temperature ranges." },
      { front: "Cold ocean currents and deserts", back: "Currents such as the Humboldt and Benguela cool the air above them, so it is too stable to rise and form rain (Atacama, Namib)." },
      { front: "Lowest temperature recorded at a weather station", back: "−89.2 °C at Vostok Station, Antarctica, in July 1983." },
    ],
    mustKnow: [
      "Define an extreme environment and name three types, with an example of each.",
      "Locate hot deserts, polar regions and major mountain ranges on a world map using lines of latitude.",
      "State that hot deserts get under 250 mm of rain a year and lie mostly 15–30° N and S.",
      "Explain how sinking air in the Hadley cell creates high pressure and deserts.",
      "Give two other causes of deserts (rain shadow, cold ocean currents, distance from the sea) with named examples.",
      "Explain why hot deserts have a large diurnal temperature range.",
      "Explain why the poles are cold using sun angle, atmosphere and albedo.",
      "Explain polar day and polar night using the 23.5° tilt of Earth's axis.",
      "Compare the Arctic and Antarctica (ocean vs continent, height, temperature, people).",
      "Use the lapse rate (about 6.5 °C per 1,000 m) to calculate temperatures at different heights.",
      "Explain relief rainfall and a rain shadow with a labelled cross-section.",
      "Read and draw a climate graph, and calculate total rainfall, annual range and mean temperature.",
      "Describe and compare climates using figures, units and months (TEA).",
    ],
    misconceptions: [
      { wrong: "Deserts are always hot.", right: "A desert is defined by low precipitation (under 250 mm a year). Antarctica is a cold desert — the largest on Earth." },
      { wrong: "Deserts are mostly sand dunes.", right: "Most of the Sahara is rock and gravel plains; sand seas cover only part of it." },
      { wrong: "The poles are cold because they are further from the Sun.", right: "The distance difference is tiny. The poles are cold because of the low sun angle, the longer path through the atmosphere and the high albedo of ice. (Earth is actually closest to the Sun in early January, during the northern winter.)" },
      { wrong: "Mountain tops are closer to the Sun, so they should be warmer.", right: "A few kilometres is nothing compared with the Sun's distance. The air is heated from the ground, and thin air holds less heat, so it gets colder as you climb." },
      { wrong: "Hot deserts are hot all the time.", right: "Clear skies let heat escape at night, so the diurnal range is large; on clear winter nights the temperature can fall close to freezing." },
      { wrong: "More hours of daylight always means warmer weather.", right: "Polar summers have 24-hour daylight, but the low sun angle spreads the energy thinly, so it stays cool." },
      { wrong: "The Arctic and Antarctica are basically the same.", right: "The Arctic is a frozen ocean ringed by inhabited land; Antarctica is a high, ice-covered continent with no permanent population, and it is much colder." },
      { wrong: "A rain shadow happens because the mountain blocks the air completely.", right: "The air does cross the mountains, but it drops most of its moisture on the windward side; then it sinks, warms and dries on the leeward side." },
    ],
    examMistakes: [
      "Reading the rainfall bars against the temperature axis (or the other way round) — check which axis each belongs to.",
      "Getting the annual range wrong with negatives: −3 − (−26) = 23 °C, not 29 °C or −29 °C.",
      "Describing a climate graph without figures, units and months.",
      "Writing 'it is hot because it is near the Sun' instead of explaining sun angle, sinking air or cloud cover.",
      "Saying 'air sinks so it is dry' without the process: sinking → warming → no condensation → no clouds → no rain.",
      "Forgetting the lapse rate is per 1,000 m — multiplying 6.5 by the height in metres.",
      "Mixing up windward and leeward when explaining a rain shadow.",
      "Plotting temperature points on the boundary between months instead of in the middle of each month.",
    ],
    mnemonics: [
      { topic: "Why the poles are cold", device: "The three As: Angle, Atmosphere, Albedo", explanation: "Low sun Angle spreads energy out; the slanting beam crosses more Atmosphere; high Albedo snow and ice reflect sunlight away." },
      { topic: "Causes of hot deserts", device: "HARC: High pressure, Away from the sea, Rain shadow, Cold currents", explanation: "High pressure from sinking air is the main cause in most hot deserts; the other three make some deserts (Atacama, central Sahara, Namib) even drier." },
      { topic: "Lapse rate", device: "Climb a kilometre, lose six and a half", explanation: "Temperature falls about 6.5 °C per 1,000 m. Convert the height difference to kilometres first, then multiply by 6.5." },
      { topic: "Reading a climate graph", device: "Bars for the rain that falls, a line for the heat that rolls", explanation: "Rainfall is shown as bars (mm axis); temperature as a line (°C axis). Check which side of the graph each axis is on." },
    ],
    realWorld: [
      { title: "Gardens by the Bay's Cloud Forest, Singapore", detail: "The Cloud Forest dome recreates the cool, misty conditions of tropical mountains at roughly 1,000–3,500 m — a mountain climate kept at sea level by chilling the air. It shows how the lapse rate changes what can grow.", emoji: "🌿" },
      { title: "From Bukit Timah to Kinabalu", detail: "Singapore's highest point, Bukit Timah Hill (about 164 m), is only about 1 °C cooler than the coast. Climb Mount Kinabalu in Sabah (about 4,095 m) and the summit can be close to freezing at dawn — the lapse rate at work in our own region.", emoji: "⛰️" },
      { title: "Telescopes in the Atacama", detail: "The ALMA observatory sits at about 5,000 m on a plateau in Chile's Atacama Desert. The high, dry, cloud-free air means there is very little water vapour between the telescopes and the stars.", emoji: "🔭" },
      { title: "Ice cores: Antarctica's climate diary", detail: "Ice drilled at Dome C in Antarctica contains air bubbles from about 800,000 years ago, showing how carbon dioxide and temperature rose and fell together through the ice ages.", emoji: "🧊" },
      { title: "Solar power from the Sahara's sinking air", detail: "Morocco's Noor Ouarzazate solar complex, on the edge of the Sahara, makes use of the clear skies created by the same sinking air that makes the desert dry.", emoji: "☀️" },
    ],
    videos: [
      { title: "Why are deserts dry? Hadley cells explained", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=hadley+cell+why+deserts+form+geography" },
      { title: "Why are the poles cold? Sun angle and albedo", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=why+are+the+poles+cold+sun+angle+albedo" },
      { title: "Relief rainfall and the rain shadow effect", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=relief+rainfall+rain+shadow+effect+geography" },
      { title: "Why is it colder at the top of a mountain?", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=why+is+it+colder+at+the+top+of+a+mountain+lapse+rate" },
      { title: "How to draw and describe a climate graph", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=how+to+draw+a+climate+graph+geography" },
    ],
    formulas: [
      { name: "Annual temperature range", formula: "highest monthly mean temperature − lowest monthly mean temperature", note: "Central Sahara station: 36 − 12 = 24 °C. Coastal Antarctic station: −3 − (−26) = 23 °C." },
      { name: "Total annual rainfall", formula: "sum of the 12 monthly rainfall totals (mm)", note: "Singapore table: 2,235 mm." },
      { name: "Mean annual temperature", formula: "sum of the 12 monthly mean temperatures ÷ 12", note: "Central Sahara station: 292 ÷ 12 ≈ 24.3 °C." },
      { name: "Diurnal (daily) temperature range", formula: "daytime maximum − night-time minimum, within the same 24 hours" },
      { name: "Lapse rate calculation", formula: "temperature change (°C) = height difference (m) ÷ 1000 × 6.5", note: "e.g. 4,000 m higher → 26 °C colder." },
      { name: "Noon sun angle at an equinox", formula: "90° − latitude", note: "Singapore (about 1° N) ≈ 89°; 80° N = 10°." },
      { name: "Hot desert", formula: "Under 250 mm of rain a year with high temperatures; mostly 15–30° N and S." },
      { name: "Polar desert", formula: "A cold area with under 250 mm of precipitation a year, e.g. Antarctica (interior under about 50 mm)." },
      { name: "Albedo", formula: "The proportion of incoming sunlight a surface reflects (fresh snow up to about 80–90%; ocean under about 10%)." },
      { name: "Hadley cell", formula: "Air rises at the Equator, flows poleward high up, sinks at about 30° N/S (high pressure, deserts) and returns as trade winds." },
      { name: "Relief rainfall", formula: "Moist air forced over high ground rises, cools and condenses, giving rain on the windward slope." },
      { name: "Rain shadow", formula: "The dry leeward side of a mountain range, where air sinks, warms and dries." },
      { name: "Aspect", formula: "The direction a slope faces; south-facing slopes are warmer in the northern hemisphere." },
      { name: "Key lines of latitude", formula: "Equator 0°; Tropics of Cancer and Capricorn 23.5° N/S; Arctic and Antarctic Circles 66.5° N/S." },
      { name: "Distance from latitude", formula: "1° of latitude ≈ 111 km", note: "15° of latitude ≈ 15 × 111 = 1,665 km." },
    ],
  },
};
