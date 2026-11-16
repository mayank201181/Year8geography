import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "living-in-extremes",
  title: "Living & Travelling in Extreme Environments",
  strand: "Extreme Environments",
  icon: "🧗",
  summary: "How people survive, visit and explore the hottest, coldest and highest places on Earth — and how to do it without wrecking them.",
  intro:
    "Hot deserts, the polar regions and high mountains push the human body to its limits: too hot, too cold, too dry or too little oxygen. Yet people have lived in some of these places for thousands of years, and every year more of us pay to visit them. In this topic you will explain the difficulties of living in extreme environments and how indigenous peoples and modern technology cope, weigh up the social, economic and environmental impacts of extreme tourism on places like Everest, judge whether Antarctic tourism can really be 'positive', and finally plan your own expedition — route, kit, risk assessment, food, water and Leave No Trace.",
  guide: [
    // -------------------------------------------------------------------------
    {
      id: "difficulties-of-living",
      heading: "Difficulties of living in extreme places",
      discovery: {
        problem:
          "Iqaluit, the capital of Nunavut in Arctic Canada, is built on ground that stays frozen solid all year. Frozen ground is as hard as concrete. So why do engineers worry that an ordinary, warm, heated house would slowly sink and crack there?",
        idea:
          "The ground is only hard **because it is frozen**. A heated house leaks heat downwards, the ice in the soil melts, and the ground turns to soft mud — so the house sinks unevenly and cracks. The fix is to lift buildings on **piles** (stilts) so cold air flows underneath and the ground stays frozen. Living in an extreme place means understanding exactly how the environment works.",
      },
      body:
        "An **extreme environment** is a place where at least one condition — temperature, rainfall, altitude or wind — is so far from 'normal' that surviving takes real planning. Hot deserts get less than 250 mm of rain a year; Antarctica recorded −89.2 °C at Vostok station in 1983; at the summit of Everest each breath holds only about a third of the oxygen it would at sea level.\n\n**The big difficulties**\n\n| Challenge | Hot desert (Sahara) | Polar (Arctic) | High mountain (Himalayas) |\n|---|---|---|---|\n| Temperature | Days above 40 °C; cold nights | Winters often below −30 °C; wind chill | Falls about 6.5 °C per 1000 m climbed |\n| Water | Little rain; wells far apart | Water locked up as ice | Streams freeze; melting snow needs fuel |\n| Food | Few crops without irrigation | Very short or no growing season | Thin soils, steep slopes |\n| Building | Shifting sand, flash floods | Permafrost thaws under heated buildings | Avalanches, landslides |\n| Health | Heatstroke, dehydration | Hypothermia, frostbite | Altitude sickness |\n| Isolation | Long distances between oases | Months of winter darkness; few roads | Footpaths and small airstrips only |\n\n**How indigenous peoples adapt**\n- **Inuit** (Arctic Canada, Greenland, Alaska): few plants grow, so they traditionally hunted seals, caribou and fish; wore layered caribou-skin and sealskin clothing; built snow-block igloos as temporary hunting shelters. Most now live in permanent settlements and use snowmobiles, but hunting skills are still valued.\n- **Bedouin and Tuareg** (Arabian deserts and the Sahara): nomadic herders who move camels and goats between wells and oases. Long, loose robes and head-wraps shade the skin and cut sweat loss; Tuareg men traditionally wear a veil (the tagelmust) against sun and sand.\n- **Sherpa** (Khumbu valley, Nepal): have lived high in the Himalayas for generations, so their bodies cope well with thin air. They grow potatoes and barley, herd yaks, and many now work as mountain guides.\n\n**How modern technology helps**\n- **Desalination** turns seawater into drinking water — vital in Saudi Arabia and the UAE, and one of Singapore's Four National Taps.\n- **Air-conditioning** makes desert cities such as Dubai liveable when summer highs pass 40 °C.\n- **Buildings on piles**, thick insulation and triple glazing in the Arctic.\n- **Satellite phones, air ambulances and imported food** reduce isolation.\n\n> Technology lets more people live in extreme places, but it needs lots of energy and money — and it can fail. Indigenous knowledge works *with* the environment.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two cross-sections. Left: a heated house built straight on the ground has thawed the permafrost beneath it into mud, so it sinks and cracks. Right: a house raised on piles has a cold air gap underneath, so the active layer and permafrost stay frozen."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937"><text x="120" y="22" font-size="13" text-anchor="middle" font-weight="bold">Built on the ground</text><text x="360" y="22" font-size="13" text-anchor="middle" font-weight="bold">Built on piles</text></g><line x1="240" y1="32" x2="240" y2="292" stroke="#334155" stroke-dasharray="4 4"/><rect x="10" y="150" width="220" height="30" fill="#d6d3d1" stroke="#334155"/><rect x="10" y="180" width="220" height="80" fill="#e0f2fe" stroke="#334155"/><path d="M50 150 Q120 235 190 150 Z" fill="#fde68a" stroke="#334155" stroke-dasharray="3 3"/><polygon points="55,105 120,75 185,105" fill="#d6d3d1" stroke="#334155"/><rect x="60" y="105" width="120" height="45" fill="#fecaca" stroke="#334155"/><polyline points="100,105 108,118 101,130 110,150" fill="none" stroke="#1f2937" stroke-width="2"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="140" y="132">Heated house</text><text x="120" y="172">Thawed mud</text><text x="120" y="246">Permafrost (frozen all year)</text><text x="120" y="276">Heat thaws the ground</text><text x="120" y="291">so the house sinks and cracks</text></g><rect x="250" y="150" width="220" height="30" fill="#d6d3d1" stroke="#334155"/><rect x="250" y="180" width="220" height="80" fill="#e0f2fe" stroke="#334155"/><rect x="301" y="110" width="8" height="125" fill="#94a3b8" stroke="#334155"/><rect x="403" y="110" width="8" height="125" fill="#94a3b8" stroke="#334155"/><polygon points="290,70 360,45 430,70" fill="#d6d3d1" stroke="#334155"/><rect x="295" y="70" width="130" height="40" fill="#fecaca" stroke="#334155"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="360" y="94">Heated house</text><text x="356" y="134">Cold air gap</text><text x="356" y="169">Active layer</text><text x="356" y="202">Permafrost</text><text x="360" y="252">Piles anchored in permafrost</text><text x="360" y="276">Heat escapes into the air gap,</text><text x="360" y="291">so the ground stays frozen</text></g></svg>`,
      diagramCaption:
        "Permafrost is only strong while it stays frozen. Raising a building on piles leaves a cold air gap that carries heat away, so the ground underneath does not thaw. The active layer is the top layer of soil that thaws each summer.",
      workedExamples: [
        {
          title: "Read the resource: daily temperature range in a hot desert",
          problem:
            "Example data from a weather station in a hot desert on one summer day: maximum temperature 41 °C at 3 p.m., minimum temperature 17 °C at 5 a.m. Calculate the **diurnal (daily) temperature range** and suggest why it is so large.",
          steps: [
            "Range = highest value − lowest value.",
            "41 − 17 = 24, so the diurnal range is 24 °C.",
            "Explain: desert skies are usually clear and the air is very dry. By day, strong sunshine heats the bare ground quickly. At night there are no clouds and little water vapour to trap heat, so heat escapes fast and temperatures plunge.",
          ],
          answer: "24 °C — clear, dry skies let the ground heat up fast by day and lose heat fast at night.",
          yourTurn: {
            question:
              "Your turn: an Arctic weather station records a maximum of −12 °C and a minimum of −31 °C on one winter day. What is the temperature range, in °C?",
            answer: { type: "number", value: 19, display: "19 °C" },
            solution: "Range = highest − lowest = −12 − (−31) = −12 + 31 = 19 °C. Subtracting a negative number means adding.",
          },
        },
        {
          title: "Model exam answer: building on permafrost (4 marks)",
          problem: "Explain why building in Arctic areas with permafrost is difficult, and how engineers solve the problem. [4]",
          steps: [
            "Point 1 — define it: permafrost is ground that stays frozen for at least two years in a row.",
            "Point 2 — the cause: heat from a building flows into the ground and melts the ice in the soil, turning it into mud.",
            "Point 3 — the effect: the ground loses its strength, so the building subsides unevenly and cracks. Pipes laid in the ground can break for the same reason.",
            "Point 4 — the solution: buildings are raised on piles drilled deep into the permafrost, leaving an air gap so cold air flows underneath and the ground stays frozen. Water and sewage pipes are often carried above ground in insulated boxes.",
          ],
          answer:
            "Permafrost is ground that stays frozen for at least two years. Heat from a building can thaw the ice in the soil, so the ground becomes soft mud and the building sinks and cracks. Engineers therefore raise buildings on piles sunk deep into the frozen ground, leaving an air gap so cold air carries heat away and the permafrost does not melt.",
          yourTurn: {
            question: "Your turn: name the process that turns seawater into fresh drinking water.",
            answer: { type: "text", accept: ["desalination", "desalinisation", "desalinization", "desalting", "reverse osmosis"] },
            solution: "**Desalination** removes the salt from seawater, usually by forcing it through very fine membranes (reverse osmosis). It is expensive and uses a lot of energy, but Gulf states and Singapore rely on it.",
          },
        },
      ],
      keyPoints: [
        "Extreme environments are too hot, too cold, too dry or too high for easy living: the problems are temperature, water, food, building, health and isolation.",
        "Permafrost thaws under heated buildings, so Arctic buildings stand on piles with an air gap.",
        "Indigenous peoples (Inuit, Bedouin, Tuareg, Sherpa) adapt their food, clothing, shelter and lifestyle to the environment.",
        "Modern technology (desalination, air-conditioning, insulation, satellite communications) makes life easier but costs energy and money.",
        "Deserts have large daily temperature ranges because clear, dry skies let heat in by day and out by night.",
      ],
      whyItWorks:
        "**Why does a heated building sink on permafrost?** Heat always flows from warmer to colder places. A heated house at about 20 °C sits on ground at below 0 °C, so heat flows down into the soil. Permafrost soil is held together by ice, like sand glued with frozen water. Once that ice melts, the soil turns into a soft, waterlogged mush that cannot hold up weight, and the building sinks — usually unevenly, so it tilts and cracks. Putting the building on piles breaks the heat's path: the cold air gap carries the heat away before it reaches the ground. Loose, flowing desert robes work in a similar way, using a layer of air as a buffer between the body and the extreme outside.",
      strategies: ["Cause → process → effect", "Compare and contrast", "Use figures from the source", "Think at different scales"],
      thinkDeeper:
        "Climate change is warming the Arctic faster than most of the planet. Using what you know about permafrost, predict two problems Arctic towns may face in the next 50 years — and suggest who should pay to fix them.",
    },
    // -------------------------------------------------------------------------
    {
      id: "extreme-tourism",
      heading: "Tourism in extreme environments",
      discovery: {
        problem:
          "Each spring a few hundred people try to climb Everest. But tens of thousands of trekkers walk the Khumbu valley to Everest Base Camp every year and never go higher. Which group do you think has the bigger *total* impact on the region — and on what?",
        idea:
          "Climbers grab the headlines (and leave litter on the high slopes), but **trekkers are far more numerous**. Their combined spending supports most of the lodges, porters and teahouses — and their combined footsteps, rubbish and demand for fuel and water cause most of the wear and tear. To judge impacts you have to think about **numbers × behaviour**, and sort them into social, economic and environmental.",
      },
      body:
        "Why visit somewhere that could kill you? People go for **challenge** (climbing Everest), **wilderness and scenery** (the Sahara's dunes at Erg Chebbi in Morocco), **wildlife** (polar bears in Svalbard), **natural wonders** (the northern lights in Tromsø or Finnish Lapland) and the **story** of having been somewhere few people go. Cheaper flights, guided trips and better kit have made extreme places far easier to reach.\n\n**Case study: Everest and the Khumbu, Nepal**\n- Everest is 8,849 m high (2020 survey) and lies in Sagarmatha National Park, a UNESCO World Heritage Site since 1979.\n- Most visitors are **trekkers**: tens of thousands a year fly into Lukla and walk to Base Camp.\n- Nepal issued a record of about 480 Everest climbing permits to foreign climbers in spring 2023. A permit cost about US$11,000 per climber for many years and was raised to US$15,000 in 2025.\n\n**Impacts — sort them with SEE**\n\n| | Positive | Negative |\n|---|---|---|\n| Social | Jobs for Sherpa guides and porters; schools and clinics (some built by Edmund Hillary's Himalayan Trust) funded by visitors | Dangerous work — 16 Nepali guides died in a Khumbu Icefall avalanche in 2014; traditional culture changes |\n| Economic | Permit fees, lodges and teahouses bring money to a poor mountain region | **Leakage** — much of the money goes to foreign or Kathmandu-based tour firms; income vanishes when tourists stop coming (2015 earthquake, COVID-19) |\n| Environmental | Park fees help pay for conservation and clean-ups | Litter, human waste, eroded trails, demand for fuel |\n\n**Litter on Everest**\nFor decades climbers left oxygen bottles, tents, ropes and packaging on the mountain. Since 2014 expeditions have paid a rubbish deposit (about US$4,000) that is only returned if each climber brings at least **8 kg** of rubbish back down. A 2019 clean-up campaign removed about 11 tonnes of rubbish, and since 2024 climbers have had to carry their own human waste down in special bags.\n\n**Carrying capacity**\nThe **carrying capacity** of a place is the maximum number of visitors it can take before the environment is damaged or the experience is spoiled. A famous photo from May 2019 showed a long queue of climbers waiting near Everest's summit — a sign that the mountain's carrying capacity was being exceeded.\n\n> Extreme tourism is not simply 'good' or 'bad'. The same visitor can create a porter's job *and* leave a footprint. Good answers weigh both.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Altitude profile of the route from Kathmandu at about 1,400 metres, by flight to Lukla at about 2,850 metres, walking to Namche Bazaar at about 3,440 metres and Everest Base Camp at about 5,360 metres, then climbers only to the summit at 8,849 metres, with tourism impacts noted for the trekking and climbing zones."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g stroke="#e5e7eb"><line x1="60" y1="221.7" x2="460" y2="221.7"/><line x1="60" y1="183.3" x2="460" y2="183.3"/><line x1="60" y1="145" x2="460" y2="145"/><line x1="60" y1="106.7" x2="460" y2="106.7"/><line x1="60" y1="68.3" x2="460" y2="68.3"/><line x1="60" y1="30" x2="460" y2="30"/></g><line x1="60" y1="30" x2="60" y2="260" stroke="#334155"/><line x1="60" y1="260" x2="460" y2="260" stroke="#334155"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="55" y="264">0</text><text x="55" y="225.7">1,500</text><text x="55" y="187.3">3,000</text><text x="55" y="149">4,500</text><text x="55" y="110.7">6,000</text><text x="55" y="72.3">7,500</text><text x="55" y="34">9,000</text></g><text x="14" y="145" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle" transform="rotate(-90 14 145)">Altitude (m)</text><line x1="110" y1="224.2" x2="180" y2="187.2" stroke="#334155" stroke-width="2" stroke-dasharray="5 4"/><polyline points="180,187.2 240,172.1 340,123" fill="none" stroke="#1f2937" stroke-width="2.5"/><line x1="340" y1="123" x2="430" y2="33.9" stroke="#334155" stroke-width="2" stroke-dasharray="2 4"/><g fill="#fecaca" stroke="#1f2937"><circle cx="110" cy="224.2" r="4"/><circle cx="180" cy="187.2" r="4"/><circle cx="240" cy="172.1" r="4"/><circle cx="340" cy="123" r="4"/><circle cx="430" cy="33.9" r="4"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="70" y="246">Kathmandu ≈1,400 m</text><text x="140" y="199" text-anchor="end">fly in</text><text x="185" y="205">Lukla ≈2,850 m</text><text x="235" y="160" text-anchor="end">Namche Bazaar ≈3,440 m</text><text x="348" y="130">Base Camp ≈5,360 m</text><text x="422" y="38" text-anchor="end">Summit 8,849 m</text><text x="400" y="98">climbers only</text><text x="278" y="180" font-weight="bold">Trekking zone:</text><text x="278" y="194">tens of thousands a year;</text><text x="278" y="208">jobs, teahouses, worn trails</text><text x="278" y="228" font-weight="bold">Climbing zone:</text><text x="278" y="242">a few hundred a year; permits,</text><text x="278" y="256">litter and waste at high camps</text><text x="260" y="282" text-anchor="middle">Distance along the route (not to scale)</text></g></svg>`,
      diagramCaption:
        "The Everest route. Most visitors fly to Lukla and trek to Base Camp; only climbers go higher. Altitudes are approximate except the summit (8,849 m, 2020 survey). The y-axis is to scale; distances along the route are not.",
      workedExamples: [
        {
          title: "Skills calculation: the 8 kg rubbish rule",
          problem:
            "Each Everest climber must bring at least 8 kg of rubbish back down. Suppose 420 foreign climbers each bring down exactly the minimum in one season. How much rubbish is that, in kilograms and in tonnes?",
          steps: [
            "Total = number of climbers × rubbish per climber.",
            "420 × 8 = 3,360 kg.",
            "1 tonne = 1,000 kg, so 3,360 ÷ 1,000 = 3.36 tonnes.",
            "Interpret it: that is a useful amount, but it is the *minimum*, and it only counts climbers — not the thousands of trekkers lower down.",
          ],
          answer: "3,360 kg = 3.36 tonnes",
          yourTurn: {
            question: "Your turn: if 475 climbers each bring down exactly 8 kg of rubbish, how many kilograms is that in total?",
            answer: { type: "number", value: 3800, display: "3,800 kg" },
            solution: "475 × 8 = 3,800 kg (which is 3.8 tonnes).",
          },
        },
        {
          title: "Model exam answer: one positive and one negative economic impact (4 marks)",
          problem: "Using an example, explain one positive and one negative economic impact of tourism in an extreme environment. [4]",
          steps: [
            "Name the place: Everest and the Khumbu valley, Nepal.",
            "Positive point + development: climbers pay permit fees (about US$11,000 each for many years), and trekkers spend money in lodges and teahouses, which creates jobs for Sherpa guides and porters in a poor mountain region.",
            "Negative point + development: much of the money leaks away to foreign or Kathmandu-based tour companies (leakage), so less stays in local villages.",
            "Add a twist for full marks: income is unreliable — after the 2015 earthquake and during COVID-19, visitors stopped coming and many families lost their only income.",
          ],
          answer:
            "On Everest, tourism brings money into a poor mountain region: permit fees and spending in lodges and teahouses create jobs for Sherpa guides and porters. However, much of the money leaks away to tour companies based abroad or in Kathmandu, and the income is unreliable — when visitors stopped coming after the 2015 earthquake and during COVID-19, many families lost their income.",
          yourTurn: {
            question:
              "Your turn: what term means the maximum number of visitors a place can cope with before the environment is damaged or the visitor experience is spoiled?",
            answer: { type: "text", accept: ["carrying capacity", "tourist carrying capacity", "tourism carrying capacity"] },
            solution: "**Carrying capacity.** Once it is exceeded, problems such as queues, erosion and litter grow quickly.",
          },
        },
      ],
      keyPoints: [
        "People visit extreme places for challenge, wilderness, wildlife and natural wonders.",
        "Sort impacts into social, economic and environmental (SEE), and positive and negative.",
        "Everest: permits, lodges and porter jobs bring money; litter, human waste and danger to guides are costs.",
        "Leakage means tourist money flows out of the local area to outside companies.",
        "Carrying capacity is the maximum number of visitors a place can take before it is damaged.",
        "Rules such as the 8 kg rubbish rule and poo bags try to manage the impacts.",
      ],
      whyItWorks:
        "**Why do extreme places suffer so much from tourism?** Extreme environments are **fragile** and **slow to recover**. In the cold, rubbish and human waste barely rot, because the bacteria that break them down work very slowly below freezing — so litter left decades ago is still there. Plants grow only a little each year, so a trampled path can take many years to heal. And because everything (food, fuel, gas) must be carried in by porters, yaks or aircraft, removing waste is hard and expensive. A small number of visitors can therefore cause a large, long-lasting impact — which is why carrying capacity matters more here than in a city park.",
      strategies: ["Social / economic / environmental (SEE)", "Weigh both sides then judge", "PEEL paragraph", "Use figures from the source"],
      thinkDeeper:
        "Nepal could limit Everest permits to protect the mountain, but permit fees are an important source of income. Who would win and who would lose if the number of permits were halved? Would raising the price instead be fairer?",
    },
    // -------------------------------------------------------------------------
    {
      id: "antarctica-tourism",
      heading: "Positive tourism in Antarctica",
      discovery: {
        problem:
          "Antarctica has no countries in charge, no permanent residents and no police. Yet more than 100,000 tourists visited in a single recent season, and the continent is still one of the least spoilt places on Earth. Who makes the rules there — and how can tourism possibly be called 'positive'?",
        idea:
          "Two things do the job. The **Antarctic Treaty** (1959) keeps the continent for peace and science and, through the Madrid Protocol, makes environmental protection compulsory. And the tour companies police themselves through **IAATO**, with strict rules on how many people land, where and how. Visitors often go home as passionate defenders of Antarctica — the **ambassador effect**.",
      },
      body:
        "Antarctica is the coldest, windiest and driest continent: about 14 million km², roughly 98% covered by ice. It has no permanent population — only scientists and support staff at research stations, a few thousand in summer and far fewer in winter.\n\n**The Antarctic Treaty**\n- Signed in **1959** by 12 countries; came into force in **1961**. More than 50 countries have now joined.\n- Antarctica is for **peace and science** only — no military bases, no nuclear tests, no nuclear waste.\n- Territorial claims are 'frozen': no new claims can be made.\n- The 1991 **Madrid Protocol** (in force 1998) bans mining and makes environmental protection compulsory for every activity, including tourism.\n\n**Tourism is growing**\nNearly all tourists come in the austral summer (November–March), mostly by ship from Ushuaia in Argentina to the Antarctic Peninsula.\n\n| Season | Visitors (approx., IAATO, rounded) |\n|---|---|\n| 2007–08 | 46,000 |\n| 2019–20 | 74,000 |\n| 2022–23 | 105,000 |\n| 2023–24 | 122,000 |\n\n**IAATO's rules**\nThe International Association of Antarctica Tour Operators (founded 1991) sets rules its members agree to follow:\n- No more than **100 visitors ashore** at one site at a time.\n- Ships carrying **more than 500 passengers may not land anyone** — they cruise only.\n- About **1 guide for every 20 visitors** ashore.\n- Keep at least **5 m from wildlife** and never block a penguin's path.\n- **Biosecurity**: boots scrubbed and disinfected, clothes and bags vacuumed for seeds before every landing; no food taken ashore.\n- Only one ship at a landing site at a time; take nothing, leave nothing.\n\n**Why call it 'positive' tourism?**\n- **Ambassador effect**: visitors return home as champions for protecting Antarctica.\n- Landings are short, small and supervised, so damage is kept low.\n- Places such as Port Lockroy, a restored British base and post office, raise money for heritage conservation.\n\n**Is it sustainable?** Concerns remain: carbon emissions from ships and flights to South America, the risk of fuel spills (heavy fuel oil has been banned in Antarctic waters since 2011), invasive species and diseases such as bird flu, and numbers that keep rising. IAATO membership is voluntary, so its rules rely on companies choosing to join.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of tourists visiting Antarctica per season, rounded IAATO figures: about 46,000 in 2007 to 2008, 74,000 in 2019 to 2020, 105,000 in 2022 to 2023 and 122,000 in 2023 to 2024."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="265" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1f2937" text-anchor="middle">Tourists visiting Antarctica (IAATO, rounded)</text><g stroke="#e5e7eb"><line x1="70" y1="228.57" x2="460" y2="228.57"/><line x1="70" y1="197.14" x2="460" y2="197.14"/><line x1="70" y1="165.71" x2="460" y2="165.71"/><line x1="70" y1="134.29" x2="460" y2="134.29"/><line x1="70" y1="102.86" x2="460" y2="102.86"/><line x1="70" y1="71.43" x2="460" y2="71.43"/><line x1="70" y1="40" x2="460" y2="40"/></g><line x1="70" y1="40" x2="70" y2="260" stroke="#334155"/><line x1="70" y1="260" x2="460" y2="260" stroke="#334155"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="65" y="264">0</text><text x="65" y="232.57">20,000</text><text x="65" y="201.14">40,000</text><text x="65" y="169.71">60,000</text><text x="65" y="138.29">80,000</text><text x="65" y="106.86">100,000</text><text x="65" y="75.43">120,000</text><text x="65" y="44">140,000</text></g><text x="13" y="150" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle" transform="rotate(-90 13 150)">Visitors per season</text><g fill="#bae6fd" stroke="#334155"><rect x="95" y="187.71" width="60" height="72.29"/><rect x="185" y="143.71" width="60" height="116.29"/><rect x="275" y="95" width="60" height="165"/><rect x="365" y="68.29" width="60" height="191.71"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="125" y="181.71">≈46,000</text><text x="215" y="137.71">≈74,000</text><text x="305" y="89">≈105,000</text><text x="395" y="62.29">≈122,000</text><text x="125" y="276">2007–08</text><text x="215" y="276">2019–20</text><text x="305" y="276">2022–23</text><text x="395" y="276">2023–24</text><text x="265" y="294">Season (November–March)</text></g></svg>`,
      diagramCaption:
        "Antarctic tourist numbers per season, rounded to the nearest thousand (IAATO estimates, including visitors who cruise without landing). Bar heights are drawn to scale. The seasons are not evenly spaced, so read the labels carefully before describing the trend.",
      workedExamples: [
        {
          title: "Skills calculation: percentage change in visitors",
          problem: "Using the table, calculate the percentage increase in Antarctic visitors from 2019–20 (about 74,000) to 2023–24 (about 122,000). Give your answer to the nearest whole number.",
          steps: [
            "Percentage change = (new − old) ÷ old × 100.",
            "Change = 122,000 − 74,000 = 48,000.",
            "48,000 ÷ 74,000 = 0.6486…",
            "0.6486… × 100 = 64.86…%, which rounds to 65%.",
            "Interpret: visitor numbers rose by nearly two-thirds in just four seasons — even with a pandemic in between.",
          ],
          answer: "An increase of about 65%",
          yourTurn: {
            question:
              "Your turn: calculate the percentage increase in visitors from 2007–08 (about 46,000) to 2019–20 (about 74,000). Give your answer as a percentage to the nearest whole number.",
            answer: { type: "number", value: 61, tolerance: 0.2, display: "61%" },
            solution: "Change = 74,000 − 46,000 = 28,000. 28,000 ÷ 46,000 = 0.6087… × 100 = 60.87…% ≈ 61%.",
          },
        },
        {
          title: "Applying the IAATO rules: organising a landing",
          problem:
            "A ship carrying 380 passengers wants to land everyone at one site. Using IAATO's rules, what is the smallest number of separate landing groups needed, and how many guides should go ashore with each full group?",
          steps: [
            "Check the ship first: 380 is not more than 500, so it is allowed to land passengers at all.",
            "At most 100 visitors may be ashore at once: 380 ÷ 100 = 3.8.",
            "You cannot have 0.8 of a group, so round **up**: 4 groups (for example 100, 100, 100 and 80).",
            "Guides: 1 for every 20 visitors, so a full group of 100 needs 100 ÷ 20 = 5 guides.",
          ],
          answer: "4 landing groups, with 5 guides for each group of 100",
          yourTurn: {
            question:
              "Your turn: a ship carrying 250 passengers wants to land everyone at one site. What is the smallest number of separate landing groups IAATO's 100-at-a-time rule allows?",
            answer: { type: "number", value: 3 },
            solution: "250 ÷ 100 = 2.5, and you must round up because nobody can be left over: 3 groups (for example 100, 100 and 50). The ship has fewer than 500 passengers, so landing is allowed.",
          },
        },
      ],
      keyPoints: [
        "Antarctic Treaty: signed 1959, in force 1961 — peace and science only; claims frozen.",
        "Madrid Protocol (1991, in force 1998): bans mining and makes environmental protection compulsory.",
        "IAATO: max 100 visitors ashore at one site at a time; ships with more than 500 passengers cannot land people; about 1 guide per 20; 5 m from wildlife; strict biosecurity.",
        "Tourism has grown from about 46,000 (2007–08) to about 122,000 (2023–24) visitors per season.",
        "'Positive' tourism relies on strict rules and the ambassador effect, but emissions, invasive species and rising numbers are real concerns.",
      ],
      whyItWorks:
        "**Why can rules work in a place nobody owns?** Because everyone who matters has signed up to them. Every country that sends ships or scientists is bound by the Treaty and the Madrid Protocol, so national governments must check that expeditions (including tourist trips) do not harm the environment. Tour companies also have a strong selfish reason to behave: their whole business depends on Antarctica staying pristine, and one disaster could bring in much tougher limits. Small, short, supervised landings limit trampling; biosecurity stops seeds and diseases hitching a ride on boots in a place whose plants and animals have never met them; and people who have seen Antarctica for themselves are more likely to vote, donate and campaign to protect it.",
      strategies: ["Weigh both sides then judge", "Use figures from the source", "Social / economic / environmental (SEE)", "Look for the anomaly"],
      thinkDeeper:
        "Is a tourist who flies from London to Argentina and then sails to Antarctica really an 'ambassador' for the environment, given the carbon emissions of the trip? Argue both sides and reach a judgement.",
    },
    // -------------------------------------------------------------------------
    {
      id: "planning-an-expedition",
      heading: "Planning an expedition",
      discovery: {
        problem:
          "Mountain guides have a saying: 'cotton kills'. A cotton T-shirt is comfortable, cheap and warm when dry. Why would anyone call it dangerous on a cold mountain?",
        idea:
          "Cotton soaks up sweat and rain and holds it next to your skin. Wet fabric loses most of its insulation and water carries heat away from the body far faster than air, so a sweaty cotton layer can chill you towards **hypothermia** once you stop moving. Expedition clothing is a **system of layers** designed to move sweat away, trap warm air and block wind and rain — and that is just one part of careful planning.",
      },
      body:
        "A good expedition is planned long before anyone leaves home. Work through these steps.\n\n**1. Route and season**\nChoose the season with the safest weather: Himalayan treks are usually in October–November or March–May (avoiding the summer monsoon); Antarctic trips run November–March; Sahara treks are best between about October and April, avoiding the summer heat. Plan a route with escape routes, water sources and, at altitude, slow height gain — a common guideline above 3,000 m is to sleep no more than about 500 m higher each night, with a rest day every 3–4 days (**acclimatisation**).\n\n**2. Kit and clothing**\n\n| Item | Why you need it |\n|---|---|\n| Base layer (wool or synthetic) | Wicks sweat away from the skin |\n| Mid layer (fleece or down) | Traps warm air |\n| Outer shell (waterproof, windproof) | Blocks wind and rain |\n| Hat, buff, gloves and mitts | Most frostbite starts at fingers, toes, nose and ears |\n| Sunglasses or goggles, sun cream | Snow and sand reflect UV — snow blindness and sunburn |\n| Water bottles and purification tablets | Safe drinking water |\n| Map, compass, GPS | Navigation when paths disappear |\n| Satellite phone or emergency beacon | Calling for help where there is no signal |\n| First-aid kit and head torch | Treating injuries; short winter days |\n\n**3. Risk assessment**\nFor each hazard, score likelihood and severity from 1 (low) to 5 (high); risk = likelihood × severity. Then plan a control to reduce it.\n\n| Hazard | Likelihood | Severity | Risk | Control |\n|---|---|---|---|---|\n| Altitude sickness | 3 | 5 | 15 | Climb slowly, rest days, descend if symptoms appear |\n| Frostbite or hypothermia | 3 | 4 | 12 | Layers, dry spare clothes, check each other's faces and hands |\n| Getting lost in a whiteout or sandstorm | 2 | 5 | 10 | Map, compass, GPS; leave route plan with base; stay together |\n| Dehydration | 3 | 3 | 9 | Water plan, drink regularly, purify water |\n| Sunburn or snow blindness | 4 | 2 | 8 | Goggles, SPF 50, cover skin |\n\n**4. Food and water**\nIn the cold your body burns huge amounts of energy keeping warm: polar sledging expeditions often plan for about 5,000–6,000 kcal per person per day — porridge, nuts, cheese, dried fruit, chocolate and dehydrated pasta meals. Water is heavy (1 litre = 1 kg), so plan where you will find it or how you will melt snow.\n\n**5. Navigation and communication**\nCarry a map and compass as well as a GPS (batteries die in the cold), agree check-in times with a base team, and carry a satellite phone or personal locator beacon.\n\n**6. Leave No Trace**\n1. Plan ahead and prepare.\n2. Travel and camp on durable surfaces.\n3. Dispose of waste properly — pack it in, pack it out.\n4. Leave what you find.\n5. Minimise campfire impacts.\n6. Respect wildlife.\n7. Be considerate of other visitors.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section through clothing layers. From the skin outwards: a base layer that wicks sweat, a thick mid layer of fleece or down that traps warm air, and a thin outer shell that blocks wind and rain while letting sweat vapour escape."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1f2937" text-anchor="middle">The three-layer system (cross-section through a sleeve)</text><rect x="20" y="40" width="50" height="160" fill="#fecaca" stroke="#334155"/><rect x="70" y="40" width="60" height="160" fill="#c7d2fe" stroke="#334155"/><rect x="130" y="40" width="120" height="160" fill="#fde68a" stroke="#334155"/><rect x="250" y="40" width="40" height="160" fill="#bae6fd" stroke="#334155"/><g fill="#ffffff" stroke="#334155"><circle cx="150" cy="95" r="6"/><circle cx="180" cy="110" r="6"/><circle cx="212" cy="96" r="6"/><circle cx="235" cy="115" r="6"/><circle cx="160" cy="165" r="6"/><circle cx="195" cy="178" r="6"/><circle cx="228" cy="165" r="6"/></g><text x="190" y="142" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">trapped warm air</text><line x1="40" y1="70" x2="338" y2="70" stroke="#334155" stroke-width="2" stroke-dasharray="6 4"/><polygon points="348,70 336,64 336,76" fill="#334155"/><text x="185" y="58" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">sweat vapour is wicked away and escapes</text><line x1="450" y1="110" x2="302" y2="110" stroke="#334155" stroke-width="2"/><polygon points="292,110 304,104 304,116" fill="#334155"/><line x1="450" y1="140" x2="302" y2="140" stroke="#334155" stroke-width="2"/><polygon points="292,140 304,134 304,146" fill="#334155"/><g stroke="#334155" stroke-width="2"><line x1="330" y1="165" x2="325" y2="178"/><line x1="360" y1="160" x2="355" y2="173"/><line x1="390" y1="170" x2="385" y2="183"/><line x1="420" y1="162" x2="415" y2="175"/><line x1="448" y1="172" x2="443" y2="185"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="455" y="100" text-anchor="end">Wind</text><text x="455" y="200" text-anchor="end">Rain</text><text x="45" y="220">Skin</text><text x="100" y="220" font-weight="bold">1 Base</text><text x="100" y="234">wicks sweat</text><text x="190" y="220" font-weight="bold">2 Mid layer</text><text x="190" y="234">fleece or down:</text><text x="190" y="248">traps warm air</text><text x="270" y="220" font-weight="bold">3 Shell</text><text x="270" y="234">waterproof,</text><text x="270" y="248">windproof</text><text x="390" y="220">Wind and rain</text><text x="390" y="234">blocked by shell</text><text x="240" y="282">Add or remove layers to stay warm but not sweaty. No cotton next to the skin.</text></g></svg>`,
      diagramCaption:
        "Layering: the base layer moves sweat away from the skin, the mid layer traps still, warm air, and the shell keeps wind and rain out while letting water vapour escape. Several thin layers beat one thick coat because you can adjust them.",
      workedExamples: [
        {
          title: "Skills calculation: temperature at altitude",
          problem:
            "Temperature falls by about 6.5 °C for every 1000 m you climb. On a spring afternoon it is 20 °C in Kathmandu (about 1,400 m). Estimate the temperature at Everest Base Camp (about 5,400 m, rounded) at the same time.",
          steps: [
            "Height difference = 5,400 − 1,400 = 4,000 m.",
            "Number of 1000 m steps = 4,000 ÷ 1,000 = 4.",
            "Temperature drop = 4 × 6.5 = 26 °C.",
            "Temperature at Base Camp = 20 − 26 = −6 °C.",
            "Interpret: below freezing in the afternoon — before wind chill or night-time cooling. Pack the full layer system.",
          ],
          answer: "About −6 °C",
          yourTurn: {
            question:
              "Your turn: a camp at 2,800 m has a temperature of 11 °C. Using a fall of 6.5 °C per 1000 m, estimate the temperature at 5,800 m at the same time, in °C.",
            answer: { type: "number", value: -8.5, display: "−8.5 °C" },
            solution: "Difference = 5,800 − 2,800 = 3,000 m. Drop = 3 × 6.5 = 19.5 °C. Temperature = 11 − 19.5 = −8.5 °C.",
          },
        },
        {
          title: "Skills calculation: water for a desert expedition",
          problem:
            "Four students plan a 5-day desert trek with no wells on the route. They allow 4 litres of drinking water and 1 litre for cooking per person per day. How much water must they carry, and how heavy is it?",
          steps: [
            "Water per person per day = 4 + 1 = 5 litres.",
            "Per day for the group = 5 × 4 people = 20 litres.",
            "For the whole trip = 20 × 5 days = 100 litres.",
            "1 litre of water weighs 1 kg, so the water weighs 100 kg.",
            "Interpret: far too heavy to carry on your backs — so plan a route via wells or oases, or use a support vehicle or camels.",
          ],
          answer: "100 litres, weighing 100 kg",
          yourTurn: {
            question:
              "Your turn: three people go on a 6-day trek and allow 5 litres of water per person per day. How many litres of water do they need in total?",
            answer: { type: "number", value: 90, display: "90 litres" },
            solution: "5 litres × 3 people × 6 days = 90 litres (which weighs 90 kg).",
          },
        },
      ],
      keyPoints: [
        "Choose the safest season and a route with water sources, escape routes and slow height gain.",
        "Layers: base (wicks sweat), mid (traps warm air), shell (blocks wind and rain); avoid cotton.",
        "Risk assessment: for each hazard, risk = likelihood × severity, then add a control.",
        "Temperature falls about 6.5 °C per 1000 m; water weighs 1 kg per litre — both shape your plan.",
        "Carry backup navigation and emergency communication; agree check-in times.",
        "Leave No Trace: pack it in, pack it out, respect wildlife, leave what you find.",
      ],
      whyItWorks:
        "**Why do layers work better than one thick coat?** Warmth does not come from the fabric itself — it comes from **still air** trapped in it, because air is a poor conductor of heat. Fleece and down are full of tiny air pockets. But if those pockets fill with sweat or rain, water (which conducts heat about 25 times better than air) carries body heat away fast. So the base layer pulls sweat off the skin, the mid layer holds the still air, and the shell stops wind from blowing that warm air away and rain from soaking in. Because you can remove a layer when you work hard and add one when you stop, you stay warm *without* getting sweaty — the key to avoiding hypothermia.",
      strategies: ["Use the command word", "Work it out from the map", "Cause → process → effect", "Sketch it"],
      thinkDeeper:
        "Your risk assessment scores altitude sickness at 15 and sunburn at 8. Does that mean you should spend twice as much effort on altitude sickness? What are the limits of scoring risk with numbers?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Extreme environment", back: "A place where conditions such as temperature, rainfall, altitude or wind make living difficult — e.g. hot deserts, polar regions, high mountains." },
      { front: "Permafrost", back: "Ground that stays frozen for at least two years in a row. It thaws and turns to mud if a heated building warms it." },
      { front: "Active layer", back: "The top layer of soil above permafrost that thaws each summer and refreezes each winter." },
      { front: "How are Arctic buildings protected from thawing permafrost?", back: "They are raised on piles sunk deep into the permafrost, leaving a cold air gap underneath." },
      { front: "Desalination", back: "Removing salt from seawater to make fresh drinking water. Expensive and energy-hungry; used in Gulf states and Singapore." },
      { front: "Name three indigenous groups that live in extreme environments", back: "Inuit (Arctic), Bedouin or Tuareg (deserts), Sherpa (Himalayas)." },
      { front: "Carrying capacity", back: "The maximum number of visitors a place can take before the environment is damaged or the experience is spoiled." },
      { front: "Leakage", back: "When tourist money flows out of the local area to outside companies, e.g. foreign tour operators." },
      { front: "Everest rubbish rule", back: "Since 2014 each climber must bring at least 8 kg of rubbish down, or the expedition loses its rubbish deposit (about US$4,000)." },
      { front: "Antarctic Treaty", back: "Signed 1959 by 12 countries, in force 1961. Antarctica is for peace and science only; territorial claims are frozen." },
      { front: "Madrid Protocol", back: "Agreed 1991, in force 1998. Bans mining in Antarctica and makes environmental protection compulsory for all activities." },
      { front: "IAATO", back: "International Association of Antarctica Tour Operators (founded 1991). Sets self-regulating rules for Antarctic tourism." },
      { front: "IAATO landing limits", back: "No more than 100 visitors ashore at one site at a time; ships with more than 500 passengers may not land anyone." },
      { front: "Ambassador effect", back: "Tourists who see Antarctica go home as champions for protecting it." },
      { front: "Biosecurity", back: "Measures that stop non-native seeds, insects and diseases being carried in — e.g. scrubbing boots and vacuuming clothes before landing." },
      { front: "Hypothermia", back: "A dangerous drop in body core temperature below 35 °C." },
      { front: "Altitude sickness", back: "Illness caused by low oxygen at high altitude (often above about 2,500 m): headache, nausea, tiredness. Cure: descend." },
      { front: "Temperature change with altitude", back: "Temperature falls by about 6.5 °C for every 1000 m climbed." },
      { front: "The three-layer system", back: "Base layer (wicks sweat), mid layer (traps warm air), outer shell (blocks wind and rain)." },
      { front: "Risk score", back: "Risk = likelihood × severity (each scored 1–5). High scores need strong controls." },
      { front: "Leave No Trace", back: "Seven principles for minimum impact: plan ahead, durable surfaces, dispose of waste, leave what you find, minimise fires, respect wildlife, be considerate." },
    ],
    mustKnow: [
      "Can you describe the difficulties of living in hot deserts, polar regions and high mountains (temperature, water, food, building, health, isolation)?",
      "Can you explain why heated buildings damage permafrost and how piles solve the problem?",
      "Can you describe how the Inuit, Bedouin/Tuareg and Sherpa adapt to their environments?",
      "Can you give examples of modern technology (desalination, air-conditioning, insulation) that help people live in extreme places?",
      "Can you sort the impacts of extreme tourism into social, economic and environmental, positive and negative, using Everest?",
      "Can you define carrying capacity and leakage and use them in an answer?",
      "Can you state when the Antarctic Treaty was signed (1959) and came into force (1961), and what it says?",
      "Can you list at least four IAATO rules, including the 100-visitor and 500-passenger limits?",
      "Can you explain the ambassador effect and argue whether Antarctic tourism is sustainable?",
      "Can you calculate temperature at altitude using 6.5 °C per 1000 m?",
      "Can you calculate a percentage change and a daily temperature range from data?",
      "Can you write a simple risk assessment with hazard, likelihood, severity and control?",
      "Can you explain the three-layer clothing system and the Leave No Trace principles?",
    ],
    misconceptions: [
      { wrong: "Deserts are always hot.", right: "A desert is defined by low precipitation, not heat. Antarctica is the largest desert on Earth, and hot deserts can get very cold at night." },
      { wrong: "Permafrost is frozen solid, so it is a great foundation for buildings.", right: "It is only strong while frozen. Heat from buildings thaws it into mud, so buildings must be raised on piles." },
      { wrong: "Indigenous ways of life are primitive and less effective than modern technology.", right: "Indigenous knowledge is a highly skilled, low-energy adaptation built up over generations; technology often depends on expensive fuel and supplies." },
      { wrong: "Tourism always makes local people richer.", right: "Leakage means much of the money can flow to outside companies, and tourist income can collapse after disasters or pandemics." },
      { wrong: "Nobody owns Antarctica, so there are no rules there.", right: "The Antarctic Treaty and Madrid Protocol apply, and tour operators follow IAATO rules." },
      { wrong: "The higher you climb, the closer you are to the Sun, so it gets warmer.", right: "Temperature falls about 6.5 °C per 1000 m because the air is heated from the ground and is thinner higher up." },
      { wrong: "One really thick coat is the best way to keep warm.", right: "Several adjustable layers trap more air and let you avoid sweating, which keeps you warmer and drier." },
      { wrong: "Antarctica has an indigenous population, like the Arctic.", right: "Antarctica has no indigenous people and no permanent residents — only temporary research staff and visitors." },
    ],
    examMistakes: [
      "Mixing up the Arctic (frozen ocean surrounded by land, with indigenous people) and Antarctica (an ice-covered continent with no permanent residents).",
      "Getting the Antarctic Treaty date wrong — it was signed in 1959 and came into force in 1961.",
      "Listing impacts without saying whether they are social, economic or environmental, positive or negative.",
      "Writing 'tourism brings money' without explaining who gets it and how (jobs for porters, leakage to foreign firms).",
      "Forgetting to round up when dividing people into groups (380 visitors need 4 landing groups, not 3.8).",
      "Subtracting negative temperatures wrongly: the range between −12 °C and −31 °C is 19 °C, not 43 °C.",
      "In 'evaluate' or 'to what extent' questions, giving only one side and no justified conclusion.",
      "Leaving out the units (°C, kg, litres, %) in calculation answers.",
    ],
    mnemonics: [
      { topic: "Keeping warm in the cold", device: "COLD", explanation: "Keep clothing **C**lean, avoid **O**verheating, wear it **L**oose and in **L**ayers, keep it **D**ry." },
      { topic: "Sorting impacts", device: "SEE", explanation: "**S**ocial, **E**conomic, **E**nvironmental — then split each into positive and negative." },
      { topic: "IAATO numbers", device: "100 – 500 – 20 – 5", explanation: "**100** visitors ashore at once, ships over **500** passengers don't land, **1 guide per 20**, stay **5 m** from wildlife." },
      { topic: "Clothing layers", device: "Wick, Warm, Weather", explanation: "Base layer **wicks** sweat, mid layer keeps you **warm**, shell keeps out the **weather**." },
    ],
    realWorld: [
      { title: "Singapore's desalination plants", detail: "Desalination is one of Singapore's Four National Taps, with several large plants turning seawater into drinking water — the same technology that lets desert cities in the Gulf survive.", emoji: "💧" },
      { title: "The Trans-Alaska Pipeline", detail: "This 1,287 km oil pipeline crosses permafrost, so long stretches are raised on supports to stop warm oil thawing the ground beneath it.", emoji: "🛢️" },
      { title: "Poo bags on Everest", detail: "Since 2024 climbers on Everest have had to carry their own human waste down in special bags, because waste barely breaks down in the cold.", emoji: "🏔️" },
      { title: "Port Lockroy, Antarctica", detail: "A restored British base and post office on the Antarctic Peninsula; visiting tourists send postcards home and their spending helps fund heritage conservation.", emoji: "📮" },
      { title: "Iqaluit, Nunavut", detail: "Buildings in Canada's Arctic capital stand on piles above the permafrost, with an air gap underneath to keep the ground frozen.", emoji: "🏘️" },
    ],
    videos: [
      { title: "Antarctic tourism and IAATO rules", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=antarctica+tourism+IAATO+guidelines" },
      { title: "Litter and overcrowding on Everest", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=everest+rubbish+clean+up+overcrowding" },
      { title: "Building on permafrost in the Arctic", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=building+on+permafrost+piles+arctic" },
      { title: "How to layer clothing for the cold", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=layering+system+base+mid+shell+explained" },
      { title: "How the Tuareg and Bedouin live in the desert", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=tuareg+bedouin+desert+nomads+geography" },
    ],
    formulas: [
      { name: "Extreme environment", formula: "A place where temperature, rainfall, altitude or wind make living difficult — hot deserts, polar regions, high mountains." },
      { name: "Permafrost", formula: "Ground that stays frozen for at least two years in a row." },
      { name: "Active layer", formula: "The soil above permafrost that thaws each summer and refreezes each winter." },
      { name: "Temperature and altitude", formula: "Temperature falls by about 6.5 °C for every 1000 m climbed.", note: "Temperature at the top = temperature at the bottom − (height gained ÷ 1000 × 6.5)." },
      { name: "Diurnal temperature range", formula: "Highest temperature − lowest temperature in one day.", note: "Hot deserts have large ranges because of clear, dry skies." },
      { name: "Percentage change", formula: "(new − old) ÷ old × 100" },
      { name: "Carrying capacity", formula: "The maximum number of visitors a place can take before it is damaged or the experience is spoiled." },
      { name: "Leakage", formula: "Tourist money that flows out of the local area to outside companies." },
      { name: "Antarctic Treaty", formula: "Signed 1959, in force 1961: Antarctica is for peace and science; territorial claims are frozen." },
      { name: "Madrid Protocol", formula: "Agreed 1991, in force 1998: bans mining and makes environmental protection compulsory in Antarctica." },
      { name: "IAATO", formula: "International Association of Antarctica Tour Operators: max 100 visitors ashore at once; ships with more than 500 passengers may not land people." },
      { name: "Ambassador effect", formula: "Visitors who experience a fragile place go home as champions for protecting it." },
      { name: "Biosecurity", formula: "Steps to stop non-native species and diseases being introduced, e.g. cleaning boots and clothing." },
      { name: "Risk score", formula: "Risk = likelihood × severity (each scored 1–5)." },
      { name: "Hypothermia", formula: "Body core temperature falling below 35 °C." },
      { name: "Acclimatisation", formula: "Letting the body adjust gradually to lower oxygen by gaining height slowly." },
      { name: "Leave No Trace", formula: "Seven principles for minimum-impact travel: plan ahead, durable surfaces, dispose of waste, leave what you find, minimise fires, respect wildlife, be considerate." },
    ],
  },
};
