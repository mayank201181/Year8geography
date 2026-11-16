import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "protecting-reefs",
  title: "Protecting Coral Reefs: The Great Barrier Reef",
  strand: "Coasts",
  icon: "🐠",
  summary: "How do you protect a reef the size of a country when the biggest threat comes from the whole planet?",
  intro:
    "The Great Barrier Reef is the largest coral reef system on Earth, a World Heritage Site and worth billions of dollars a year to Australia. It is also one of the most carefully managed seas in the world — yet it keeps being hit by mass bleaching. In this topic you will learn the key facts about the reef, how it is managed (zoning, starfish control, farm rules, tourism permits, the Reef 2050 Plan and coral restoration), how to judge whether that management is working, and how Singapore protects its own reefs at Sisters' Islands Marine Park. By the end you should be able to write a supported 'to what extent' judgement like an IGCSE geographer.",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "gbr-facts",
      heading: "The Great Barrier Reef",
      discovery: {
        problem:
          "Most Australians live more than 1,000 km from the Great Barrier Reef and will never dive on it. Yet Australian governments spend large sums of money every year protecting it. Before you read on, list as many reasons as you can why protecting a faraway reef could be good value for a whole country.",
        idea:
          "The reef pays its way many times over. It supports tens of thousands of **jobs** (mostly in tourism), adds **billions of dollars** to the economy, shelters the Queensland coast from waves, holds an enormous share of marine **biodiversity**, and is part of the **Sea Country** of its Traditional Owners. It is also a **World Heritage Site**, so Australia has promised the world to look after it. Value is economic, environmental *and* social — use all three (SEE) in exam answers.",
      },
      body:
        "The **Great Barrier Reef (GBR)** is the world's largest coral reef system. It lies in the **Coral Sea**, off the north-east coast of **Queensland, Australia**, stretching from the tip of Cape York in the north to near Bundaberg in the south. It is not one reef but a huge chain of separate reefs and islands.\n\n| Fact | Figure |\n|---|---|\n| Length | about 2,300 km |\n| Individual reefs | about 2,900 |\n| Islands | about 900 |\n| Area of the Marine Park | about 344,000 km² (a bit bigger than Italy) |\n| Protected as a marine park | 1975 (Great Barrier Reef Marine Park Act) |\n| UNESCO World Heritage Site | 1981 |\n\n**Why the reef matters**\n\n- **Biodiversity (environmental)**: more than 1,500 species of fish, roughly 400 kinds of hard coral, six of the world's seven species of marine turtle, plus dugongs, sharks and whales. Reefs cover less than 1% of the ocean floor but support about 25% of marine species.\n- **Economy and jobs (economic)**: a 2017 study by Deloitte Access Economics estimated that the reef added about **A$6.4 billion a year** to Australia's economy and supported about **64,000 jobs**, most of them in tourism (dive boats, hotels, pilots, guides).\n- **Coastal protection (environmental and economic)**: the reef breaks up ocean waves before they reach the shore, reducing erosion and storm damage.\n- **Culture and identity (social)**: Aboriginal and Torres Strait Islander peoples — the reef's **Traditional Owners** — have cared for this Sea Country for thousands of years.\n\n**Stakeholders**\n\nA **stakeholder** is any person or group with an interest in a place. On the GBR their interests often clash, which is why management is difficult.\n\n| Stakeholder | What they want | Possible conflict |\n|---|---|---|\n| Farmers (sugar cane, cattle) in the river catchments | Profitable crops and grazing | Fertiliser, pesticides and soil wash down rivers onto the reef |\n| Commercial and recreational fishers | Good catches and access to fishing grounds | Lose access when areas become no-take zones |\n| Tourism operators | Healthy, beautiful reefs to show visitors | Boats, anchors and crowds can damage coral |\n| Scientists (e.g. AIMS, universities) | Monitoring data and protected study sites | Often call for stricter limits than users want |\n| Traditional Owners (more than 70 groups) | Care for Sea Country and keep traditional uses | Want a stronger voice in decisions |\n| Governments and GBRMPA | Protect the reef *and* support jobs and exports | Must balance the economy with conservation |\n\nPorts, shipping and mining companies are stakeholders too: Queensland exports coal through ports beside the reef.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified map of Australia showing Queensland and the Great Barrier Reef running about 2,300 km along the north-east coast in the Coral Sea, with Cairns, Townsville, Brisbane and the Tropic of Capricorn marked"><rect x="0" y="0" width="480" height="320" fill="#bae6fd"/><polygon points="250,0 420,0 412,10 362,20 330,14 292,16 250,10" fill="#bbf7d0" stroke="#334155" stroke-width="1"/><text x="335" y="11" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Papua New Guinea</text><polygon points="279.3,34.5 302.2,75.3 307.3,87.2 315.8,107.6 336.2,122.9 347.3,142.4 362.6,155.2 369.4,177.3 353.2,231.7 312.4,275.9 299.7,269.1 246.1,241 236.8,224 207,219.8 156,213 122,230.8 70.2,241 46.4,235.9 51.5,215.5 33.6,164.5 37,130.5 76.1,116 106.7,96.5 134.8,66.8 164.5,71 179.8,48.9 228.3,45.5 219.8,71 258,92.3 271.6,49.8" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><polygon points="303,289 327,289 322,312 309,313" fill="#bbf7d0" stroke="#334155" stroke-width="1"/><polyline points="241,83 241,164.5 266.5,164.5 266.5,190 334.5,190 368,183" fill="none" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="20" y1="142.7" x2="470" y2="142.7" stroke="#334155" stroke-width="1" stroke-dasharray="2 4"/><text x="120" y="137" font-size="11" font-family="sans-serif" fill="#1f2937">Tropic of Capricorn (23.4°S)</text><polyline points="292,28.5 304.8,62.5 313.3,83.8 326,103.3 347.3,117.8 364.3,128.8 366.8,143.3 366,148.4" fill="none" stroke="#dc2626" stroke-width="4" stroke-dasharray="7 3" stroke-linecap="round"/><line x1="358" y1="48" x2="307" y2="62" stroke="#1f2937" stroke-width="1"/><text x="360" y="36" font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937">Great Barrier Reef</text><text x="360" y="50" font-size="11" font-family="sans-serif" fill="#1f2937">about 2,300 km long</text><text x="360" y="64" font-size="11" font-family="sans-serif" fill="#1f2937">about 2,900 reefs</text><text x="420" y="100" font-size="13" font-family="sans-serif" text-anchor="middle" font-style="italic" fill="#1f2937">CORAL</text><text x="420" y="115" font-size="13" font-family="sans-serif" text-anchor="middle" font-style="italic" fill="#1f2937">SEA</text><circle cx="307.3" cy="87.2" r="3" fill="#1f2937"/><text x="301" y="91" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">Cairns</text><circle cx="315.8" cy="107.6" r="3" fill="#1f2937"/><text x="310" y="111" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">Townsville</text><circle cx="368" cy="178" r="3" fill="#1f2937"/><text x="362" y="181" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">Brisbane</text><text x="292" y="160" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1f2937">QUEENSLAND</text><text x="150" y="180" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1f2937">AUSTRALIA</text><line x1="30" y1="300" x2="68" y2="300" stroke="#1f2937" stroke-width="2"/><line x1="30" y1="296" x2="30" y2="304" stroke="#1f2937" stroke-width="1.5"/><line x1="68" y1="296" x2="68" y2="304" stroke="#1f2937" stroke-width="1.5"/><text x="76" y="304" font-size="11" font-family="sans-serif" fill="#1f2937">500 km</text><polygon points="445,262 439,280 445,276 451,280" fill="#1f2937"/><text x="445" y="296" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">N</text><text x="470" y="314" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Simplified map</text></svg>`,
      diagramCaption:
        "The Great Barrier Reef (red dashes) runs about 2,300 km along the Queensland coast in the Coral Sea, mostly north of the Tropic of Capricorn. Dashed black line = Queensland state border. Simplified map.",
      workedExamples: [
        {
          title: "Calculation: how much is each job worth?",
          problem:
            "The 2017 Deloitte Access Economics study estimated that the reef added about A$6.4 billion a year to Australia's economy and supported about 64,000 jobs. On average, how much value (in A$ per year) does that represent for each job?",
          steps: [
            "Write the billions out in full: A$6.4 billion = A$6,400,000,000.",
            "Divide the value by the number of jobs: 6,400,000,000 ÷ 64,000.",
            "Cancel the thousands: 6,400,000 ÷ 64 = 100,000.",
            "Sense-check: 64,000 jobs × A$100,000 = A$6,400,000,000 ✔. Remember it is an *average* and an *estimate* from one study — the real figure changes from year to year.",
          ],
          answer: "About A$100,000 of economic value per job per year.",
          yourTurn: {
            question:
              "The Great Barrier Reef is about 2,300 km long. Singapore's main island is about 50 km from west to east. How many times longer is the reef than Singapore is wide? Give a whole number.",
            answer: { type: "number", value: 46 },
            solution: "2,300 ÷ 50 = 46. The reef is about 46 times longer than Singapore is wide.",
          },
        },
        {
          title: "Model answer: 'Explain why the Great Barrier Reef is important.' (4 marks)",
          problem: "Build a 4-mark answer that covers more than one kind of importance and uses figures.",
          steps: [
            "Use the command word: *explain* means give reasons **and** develop them ('…which means…').",
            "Point 1 — economic, with a figure: 'A 2017 study estimated the reef adds about A$6.4 billion a year to Australia's economy and supports about 64,000 jobs, mostly in tourism.'",
            "Develop it: 'This means towns such as Cairns depend on healthy coral to attract visitors.'",
            "Point 2 — environmental: 'It is the world's largest reef system, about 2,300 km long, home to more than 1,500 fish species, so its loss would be a huge blow to marine biodiversity.'",
            "Add a third angle for safety (social or protection): 'It is part of the Sea Country of its Traditional Owners and protects the coast from waves.'",
          ],
          answer:
            "The reef is economically important because a 2017 study estimated it adds about A$6.4 billion a year to Australia's economy and supports about 64,000 jobs, so tourist towns like Cairns depend on it. It is environmentally important because it is the world's largest reef system, home to more than 1,500 fish species, so damage would cause a large loss of biodiversity. It also protects Queensland's coast from waves and is culturally important to its Traditional Owners.",
        },
      ],
      keyPoints: [
        "The GBR lies in the Coral Sea off Queensland, north-east Australia: about 2,300 km long, about 2,900 reefs.",
        "Marine Park created in 1975; UNESCO World Heritage Site since 1981.",
        "A 2017 Deloitte study estimated about A$6.4 billion a year and about 64,000 jobs, mostly tourism.",
        "Stakeholders (farmers, fishers, tourism operators, scientists, Traditional Owners, governments) want different things, so conflict is built in.",
        "Use SEE: social, economic and environmental importance.",
      ],
      whyItWorks:
        "Why does a reef create so much wealth? Because tourists pay to see something they cannot see anywhere else. Every visitor spends money on boats, hotels, food and guides, and those businesses employ local people who spend their wages in turn — a **multiplier effect**. That is also why the reef is fragile economically: if the coral dies, the tourism that depends on it collapses too, and so do the jobs.",
      strategies: ["Use figures from the source", "Social / economic / environmental (SEE)", "CLOCC", "Think at different scales"],
      thinkDeeper:
        "Farmers in Queensland's river catchments never go near the reef, yet they are one of its most important stakeholders. Why? Trace the path of a grain of fertiliser from a sugar cane field to a coral polyp.",
    },
    // ------------------------------------------------------------------
    {
      id: "management-strategies",
      heading: "How the reef is managed",
      discovery: {
        problem:
          "You are put in charge of 344,000 km² of sea. Fishers want to fish, tourists want to snorkel, ships need to pass, scientists need untouched study sites, and farmers upstream want to grow crops. Ban everyone and about 64,000 jobs are at risk; allow everything and the coral is wrecked. Sketch a plan before you read on.",
        idea:
          "Most people invent **zoning** — giving different parts of the sea different rules, just as a town plan separates housing from factories. That is exactly what Australia does. Then you add rules for the threats that zones cannot stop: starfish outbreaks, farm run-off and tourist damage. Good management is a **toolkit**, not one magic rule.",
      },
      body:
        "The reef is managed by the **Great Barrier Reef Marine Park Authority (GBRMPA)**, set up under the **Great Barrier Reef Marine Park Act 1975**, working with the Queensland Government. The main strategies are:\n\n**1. Zoning.** The Marine Park is divided into colour-coded zones. In the **2004 rezoning**, the share of **green (no-take) zones** was raised from about 4.5% to about **33%** of the park — at the time one of the biggest increases in protected sea anywhere in the world.\n\n| Zone (map colour) | Main rule |\n|---|---|\n| Marine National Park (green) | **No-take**: no fishing or collecting; boating, swimming, snorkelling and diving allowed |\n| Preservation (pink) | No entry without a permit |\n| Scientific Research (orange) | Mainly for research |\n| Buffer (olive green) | Only trolling for open-water fish |\n| Conservation Park (yellow) | Limited fishing (e.g. one line, one hook) |\n| Habitat Protection (dark blue) | Fishing allowed but no trawling of the sea bed |\n| General Use (light blue) | Most reasonable uses, including trawling and shipping |\n\n**2. Crown-of-thorns starfish (COTS) control.** Outbreaks of these coral-eating starfish can strip a reef. Trained divers find them and give each starfish a single injection of **bile salts or vinegar**, which kills it without harming the coral. Culling focuses on reefs that matter most for tourism and for supplying coral larvae to other reefs.\n\n**3. Water-quality rules for farms.** Fertiliser, pesticides and soil washed off farms make the water murky and feed starfish larvae. Queensland's reef protection regulations (strengthened in 2019) set minimum standards for sugar cane, banana and cattle farms, and farmers are helped to use less fertiliser, keep soil covered and restore wetlands that filter river water.\n\n**4. Tourism permits.** Tour operators need a permit from GBRMPA. Visitors on commercial trips pay an **Environmental Management Charge** that helps fund management. Public **moorings** stop boats dropping anchors on coral, and operators report what they see through the **Eye on the Reef** programme.\n\n**5. The Reef 2050 Long-Term Sustainability Plan (2015, updated 2021).** A joint Australian and Queensland government plan with targets for water quality, biodiversity and jobs. Under it, dumping of dredged sea-bed material from new port projects inside the Marine Park was banned in 2015, and in 2018 the government gave about A$443 million to the Great Barrier Reef Foundation for reef projects.\n\n**6. Coral restoration and research.** Scientists are testing ways to help the reef recover: growing coral in nurseries and replanting it, collecting coral spawn and releasing the larvae onto damaged reefs ('coral IVF'), and research into **heat-tolerant corals** that may survive warmer seas. These projects work on small areas compared with the size of the reef.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified, not-to-scale zoning map of part of the Great Barrier Reef Marine Park: green no-take zones, a yellow conservation park zone, dark blue habitat protection zone near the coast, light blue general use zone, a pink preservation zone and an orange scientific research zone, with a legend"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="15" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Simplified zoning map (schematic, not to scale)</text><rect x="60" y="24" width="240" height="266" fill="#bfdbfe" stroke="#334155" stroke-width="1"/><rect x="60" y="24" width="90" height="266" fill="#3b82f6" fill-opacity="0.55"/><rect x="170" y="44" width="70" height="80" fill="#4ade80" stroke="#1f2937" stroke-width="1"/><rect x="200" y="180" width="95" height="80" fill="#4ade80" stroke="#1f2937" stroke-width="1"/><rect x="85" y="150" width="55" height="50" fill="#fde047" stroke="#1f2937" stroke-width="1"/><rect x="252" y="56" width="38" height="36" fill="#f9a8d4" stroke="#1f2937" stroke-width="1"/><rect x="95" y="50" width="35" height="28" fill="#fdba74" stroke="#1f2937" stroke-width="1"/><g fill="#fecaca" stroke="#7f1d1d" stroke-width="1"><ellipse cx="205" cy="84" rx="18" ry="9"/><ellipse cx="247" cy="220" rx="26" ry="12"/><ellipse cx="112" cy="175" rx="14" ry="8"/><ellipse cx="271" cy="74" rx="10" ry="7"/><ellipse cx="255" cy="150" rx="14" ry="7"/><ellipse cx="112" cy="64" rx="8" ry="5"/></g><path d="M0,24 L55,24 Q72,90 60,150 Q50,220 66,290 L0,290 Z" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><text x="28" y="157" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 28 157)">Queensland coast</text><text x="282" y="282" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">Open sea →</text><g font-family="sans-serif" fill="#1f2937"><rect x="312" y="34" width="14" height="14" fill="#4ade80" stroke="#1f2937"/><text x="332" y="44" font-size="11" font-weight="bold">Marine National Park</text><text x="332" y="57" font-size="11">no-take: no fishing</text><rect x="312" y="70" width="14" height="14" fill="#fde047" stroke="#1f2937"/><text x="332" y="80" font-size="11" font-weight="bold">Conservation Park</text><text x="332" y="93" font-size="11">limited fishing</text><rect x="312" y="106" width="14" height="14" fill="#3b82f6" fill-opacity="0.55" stroke="#1f2937"/><text x="332" y="116" font-size="11" font-weight="bold">Habitat Protection</text><text x="332" y="129" font-size="11">no trawling</text><rect x="312" y="142" width="14" height="14" fill="#bfdbfe" stroke="#1f2937"/><text x="332" y="152" font-size="11" font-weight="bold">General Use</text><text x="332" y="165" font-size="11">most activities allowed</text><rect x="312" y="178" width="14" height="14" fill="#f9a8d4" stroke="#1f2937"/><text x="332" y="188" font-size="11" font-weight="bold">Preservation</text><text x="332" y="201" font-size="11">no entry without permit</text><rect x="312" y="214" width="14" height="14" fill="#fdba74" stroke="#1f2937"/><text x="332" y="224" font-size="11" font-weight="bold">Scientific Research</text><text x="332" y="237" font-size="11">mainly research</text><ellipse cx="319" cy="257" rx="8" ry="5" fill="#fecaca" stroke="#7f1d1d"/><text x="332" y="261" font-size="11" font-weight="bold">Coral reef</text></g></svg>`,
      diagramCaption:
        "A schematic zoning map (simplified — real zones are irregular shapes drawn around individual reefs). Since 2004 about a third of the whole Marine Park has been green no-take zone.",
      workedExamples: [
        {
          title: "Calculation: how big are the green zones?",
          problem:
            "The Marine Park covers about 344,000 km². Since 2004 about 33% has been green (no-take) zone. Roughly what area is that? Give your answer to the nearest thousand km².",
          steps: [
            "Turn the percentage into a decimal: 33% = 0.33.",
            "Multiply: 344,000 × 0.33 = 113,520 km².",
            "Round to the nearest thousand: 113,520 → 114,000 km².",
            "Give it meaning: that is more than 150 times the area of Singapore (114,000 ÷ 735 ≈ 155).",
          ],
          answer: "About 114,000 km² of green no-take zone.",
          yourTurn: {
            question:
              "Before the 2004 rezoning only about 4.5% of the Marine Park was green zone; afterwards it was about 33%. How many times larger was the new share than the old one? Give your answer to 1 decimal place.",
            answer: { type: "number", value: 7.3, tolerance: 0.05, allowFraction: false },
            solution: "33 ÷ 4.5 = 7.33… → 7.3. The share of no-take zone grew about seven-fold.",
          },
        },
        {
          title: "Read the resource: using the zoning map",
          problem:
            "Use the zoning map and table. Wei Ling's family hire a boat. They want to (a) go snorkelling and (b) catch fish with a single rod and line. Which zones could they do each activity in?",
          steps: [
            "Read the key first: find each colour's rule in the table.",
            "Snorkelling: allowed in green, yellow, dark blue and light blue zones. Not pink (no entry without a permit).",
            "Fishing with one line and hook: allowed in yellow (Conservation Park), dark blue (Habitat Protection) and light blue (General Use).",
            "Fishing is **not** allowed in green zones — they are no-take — even though swimming and snorkelling there are fine.",
          ],
          answer:
            "(a) Snorkelling: green, yellow, dark blue or light blue zones. (b) Line fishing: yellow, dark blue or light blue zones — never green or pink.",
          yourTurn: {
            question:
              "On a Great Barrier Reef zoning map, what colour is the zone where you may snorkel and dive but all fishing and collecting is banned?",
            answer: {
              type: "text",
              accept: [
                "green",
                "green zone",
                "green zones",
                "marine national park",
                "marine national park zone",
                "green no-take zone",
                "no-take zone",
                "no take zone",
                "dark green",
              ],
            },
            solution:
              "Green — the Marine National Park (no-take) zone. You can visit, but you cannot take anything out. Pink is stricter still: you cannot even enter without a permit.",
          },
        },
      ],
      keyPoints: [
        "GBRMPA manages the Marine Park, created by the Great Barrier Reef Marine Park Act 1975.",
        "Zoning gives each area different rules; green no-take zones rose from about 4.5% to about 33% in 2004.",
        "Divers cull crown-of-thorns starfish with single injections of bile salts or vinegar.",
        "Farm rules cut fertiliser, pesticide and soil run-off; tourism needs permits, moorings and a visitor charge.",
        "The Reef 2050 Long-Term Sustainability Plan (2015) sets long-term targets; coral restoration and heat-tolerant coral research are being trialled.",
      ],
      whyItWorks:
        "Why do no-take zones help coral, not just fish? Fish such as parrotfish graze seaweed that would otherwise smother young coral, and bigger predators eat young crown-of-thorns starfish. Leave the fish alone and the whole food web stays balanced. Protected fish also grow bigger and produce far more eggs, and their larvae drift out to restock fished areas nearby — a 'spillover' that can benefit fishers too. Cleaner water works in a similar chain: less fertiliser → fewer plankton blooms → fewer starfish larvae survive → fewer outbreaks.",
      strategies: ["Read the key first", "Cause → process → effect", "Use figures from the source", "Work it out from the map"],
      thinkDeeper:
        "Zoning, starfish culling and farm rules all tackle threats that start in or near Queensland. Which threat to the reef could none of them touch — and what would a strategy for *that* threat have to look like?",
    },
    // ------------------------------------------------------------------
    {
      id: "evaluating-management",
      heading: "Is it working?",
      discovery: {
        problem:
          "Since 2004 about a third of the reef has been no-take, farm rules have been tightened and divers have culled huge numbers of starfish. Yet the reef suffered mass bleaching in 2016, 2017, 2020, 2022 and 2024. Does that prove the management has failed? Decide yes or no, and write one reason, before reading on.",
        idea:
          "Not exactly. Most management tackles **local threats** — fishing, run-off, starfish, tourists. Mass bleaching is caused by **marine heatwaves** linked to **global climate change**, which no Australian park ranger can switch off. A fair judgement asks two separate questions: *Is management controlling the threats it can control?* and *Can local management alone save the reef?* The answers are 'partly yes' and 'no'.",
      },
      body:
        "To evaluate, weigh evidence on **both sides**, separate **local** from **global** threats, then reach a **supported judgement**.\n\n| Evidence it is working | Evidence it is not enough |\n|---|---|\n| Studies found more and larger fish (e.g. coral trout) inside green zones than in fished areas | Mass bleaching in 1998, 2002, 2016, 2017, 2020, 2022 and 2024 — now every year or two |\n| Starfish culling has protected coral cover on the reefs where divers work | The 2016 heatwave killed roughly 30% of the reef's shallow-water coral, mostly in the north |\n| Monitoring by AIMS recorded high coral cover in much of the north and central reef in 2022 | Surveys after the 2024 heat stress reported some of the biggest one-year falls in coral cover on record |\n| Tourism has continued, keeping jobs and funding for management | Water-quality targets for farm run-off have been missed or are progressing slowly |\n| Rules such as the 2015 ban on dumping dredge spoil inside the Marine Park removed some damaging activities | UNESCO has considered listing the reef as 'World Heritage in Danger' (notably in 2021) — Australia lobbied against it and it has not been listed so far |\n\n**Local versus global threats**\n\n- **Local threats** (can be managed in Australia): overfishing, farm run-off, crown-of-thorns outbreaks, anchor and diver damage, port dredging.\n- **Global threats** (need world action): rising sea temperatures causing bleaching, **ocean acidification** as the sea absorbs CO₂, and stronger cyclones.\n\nManagement cannot stop a marine heatwave. What it *can* do is build **resilience**: a reef with clear water, plenty of plant-eating fish and no starfish plague recovers from bleaching faster. Scientists sometimes describe local management as **'buying time'** while the world cuts emissions.\n\n**Is it sustainable?** Sustainable management meets today's needs (jobs, fishing, tourism) without destroying the reef for future generations. The zoning system balances users well, but if bleaching comes back before corals have recovered — fast-growing corals often need around ten years — the reef could shift to a poorer, less diverse state. That depends mainly on global greenhouse gas emissions, including from the coal and gas that Australia itself exports.\n\n**Making a judgement** — avoid 'it is working' or 'it has failed'. Use a qualified verdict: *'Management is largely successful at reducing local threats, but it cannot on its own protect the reef from climate change, so its long-term success depends on global action.'*",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline from 1970 to 2025. Green markers above the line show management milestones: 1975 Marine Park Act, 1981 World Heritage Site, 2004 rezoning to about 33 percent green zones, 2015 Reef 2050 Plan. Red markers below show mass bleaching events in 1998, 2002, 2016, 2017, 2020, 2022 and 2024"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><line x1="30" y1="160" x2="452" y2="160" stroke="#1f2937" stroke-width="2"/><g stroke="#1f2937" stroke-width="1"><line x1="30" y1="156" x2="30" y2="164"/><line x1="106" y1="156" x2="106" y2="164"/><line x1="182" y1="156" x2="182" y2="164"/><line x1="258" y1="156" x2="258" y2="164"/><line x1="334" y1="156" x2="334" y2="164"/><line x1="410" y1="156" x2="410" y2="164"/></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="30" y="177">1970</text><text x="106" y="177">1980</text><text x="182" y="177">1990</text><text x="258" y="177">2000</text><text x="334" y="177">2010</text><text x="410" y="177">2020</text></g><g stroke="#15803d" stroke-width="1.5"><line x1="68" y1="160" x2="68" y2="66"/><line x1="113.6" y1="160" x2="113.6" y2="104"/><line x1="288.4" y1="160" x2="288.4" y2="34"/><line x1="372" y1="160" x2="372" y2="96"/></g><g fill="#16a34a" stroke="#1f2937" stroke-width="1"><circle cx="68" cy="160" r="5"/><circle cx="113.6" cy="160" r="5"/><circle cx="288.4" cy="160" r="5"/><circle cx="372" cy="160" r="5"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="72" y="62">1975 Marine Park Act</text><text x="117" y="100">1981 World Heritage Site</text><text x="284" y="30" text-anchor="end">2004 rezoning: green no-take zones ~33%</text><text x="376" y="95">2015</text><text x="376" y="109">Reef 2050 Plan</text></g><g fill="#dc2626" stroke="#1f2937" stroke-width="1"><circle cx="242.8" cy="192" r="5"/><circle cx="273.2" cy="192" r="5"/><circle cx="379.6" cy="192" r="5"/><circle cx="387.2" cy="192" r="5"/><circle cx="410" cy="192" r="5"/><circle cx="425.2" cy="192" r="5"/><circle cx="440.4" cy="192" r="5"/></g><g stroke="#dc2626" stroke-width="1"><line x1="387.2" y1="197" x2="387.2" y2="221"/><line x1="425.2" y1="197" x2="425.2" y2="221"/></g><g font-size="11" font-family="sans-serif" fill="#b91c1c" text-anchor="middle"><text x="242.8" y="212">1998</text><text x="273.2" y="212">2002</text><text x="379.6" y="212">2016</text><text x="410" y="212">2020</text><text x="440.4" y="212">2024</text><text x="387.2" y="233">2017</text><text x="425.2" y="233">2022</text></g><circle cx="40" cy="262" r="5" fill="#16a34a" stroke="#1f2937"/><text x="52" y="266" font-size="12" font-family="sans-serif" fill="#1f2937">Management milestone</text><circle cx="40" cy="284" r="5" fill="#dc2626" stroke="#1f2937"/><text x="52" y="288" font-size="12" font-family="sans-serif" fill="#1f2937">Mass bleaching event on the Great Barrier Reef</text></svg>`,
      diagramCaption:
        "Management milestones (green) and mass bleaching events (red), drawn to scale on a 1970–2025 time axis. Notice how the gaps between bleaching events shrink after 2016 — despite stronger local management.",
      workedExamples: [
        {
          title: "Calculation: how often does mass bleaching happen?",
          problem:
            "Mass bleaching hit the Great Barrier Reef in 1998, 2002 and 2016. What was the mean gap, in years, between these events?",
          steps: [
            "Find each gap: 2002 − 1998 = 4 years; 2016 − 2002 = 14 years.",
            "Add the gaps: 4 + 14 = 18 years.",
            "Divide by the number of gaps (2, not 3 events!): 18 ÷ 2 = 9 years.",
            "Shortcut: (last year − first year) ÷ number of gaps = (2016 − 1998) ÷ 2 = 9.",
          ],
          answer: "A mean gap of 9 years between mass bleaching events from 1998 to 2016.",
          yourTurn: {
            question:
              "Mass bleaching then struck in 2016, 2017, 2020, 2022 and 2024. What was the mean gap in years between these five events? Give your answer as a number of years.",
            answer: { type: "number", value: 2 },
            solution:
              "Gaps: 1, 3, 2 and 2 years — four gaps. (1 + 3 + 2 + 2) ÷ 4 = 8 ÷ 4 = 2 years. Or (2024 − 2016) ÷ 4 = 2. Bleaching is now coming more than four times as often as in 1998–2016, leaving corals too little time to recover.",
          },
        },
        {
          title: "Model answer built step by step: 'To what extent has management of the Great Barrier Reef been successful?' (6 marks)",
          problem: "Build a balanced answer with evidence on both sides and a justified conclusion.",
          steps: [
            "Weigh both sides then judge. Plan: success (local threats) → limits (global threats) → judgement.",
            "Success, with evidence: 'Zoning has been partly successful. Since 2004 about 33% of the Marine Park has been green no-take zone, and studies found more and larger fish such as coral trout inside these zones. Divers culling crown-of-thorns starfish have protected coral on key tourist reefs.'",
            "Limits, with evidence: 'However, management has not stopped mass bleaching, which hit the reef in 2016, 2017, 2020, 2022 and 2024. The 2016 event alone killed roughly 30% of shallow-water coral. Water-quality targets for farm run-off have also been missed.'",
            "Explain WHY (the mechanism): 'This is because bleaching is caused by marine heatwaves linked to global climate change, which Australia cannot control locally.'",
            "Justified judgement: 'Overall, management has been successful to a large extent against local threats, and it builds resilience so the reef recovers faster. But it is only partly successful overall, because the reef's future depends on cutting global greenhouse gas emissions.'",
          ],
          answer:
            "Management has been successful to a large extent against local threats — about 33% of the park is no-take, fish numbers are higher in green zones, and starfish culling protects key reefs. However, it has not prevented five mass bleaching events between 2016 and 2024, because bleaching is driven by global ocean warming. So management is only partly successful overall: it buys the reef time, but long-term success depends on global action on climate change.",
        },
      ],
      keyPoints: [
        "Evaluate = evidence for, evidence against, then a qualified judgement.",
        "Local threats (fishing, run-off, starfish, tourists) can be managed; global threats (warming, acidification) cannot be solved locally.",
        "Mass bleaching in 2016, 2017, 2020, 2022 and 2024 shows the limit of local management.",
        "Healthy, well-managed reefs are more resilient — they recover faster after bleaching.",
        "UNESCO has considered an 'in danger' listing but has not made one (so far).",
      ],
      whyItWorks:
        "Why can't zoning stop bleaching? Corals live close to their upper temperature limit. If the water stays about 1 °C or more above the normal summer maximum for several weeks, the algae living inside the polyps (zooxanthellae) start to release harmful chemicals, so the coral expels them. The coral turns white and starts to starve, because the algae made most of its food. A green zone can stop a fishing boat, but heat moves through the water regardless of lines on a map. That is why the real 'management' of bleaching happens in global climate agreements, while local management decides how well the reef bounces back.",
      strategies: ["Weigh both sides then judge", "Think at different scales", "PEEL paragraph", "TEA (Trend, Evidence, Anomaly)", "Use the command word"],
      thinkDeeper:
        "A newspaper headline says: 'Reef management a waste of money — coral still dying.' Spot the flaw in the argument. What would have happened to the reef by now if there had been no zoning, no starfish culling and no farm rules?",
    },
    // ------------------------------------------------------------------
    {
      id: "protecting-reefs-elsewhere",
      heading: "Protecting reefs closer to home",
      discovery: {
        problem:
          "Singapore has one of the busiest ports in the world, murky water full of sediment, and has reclaimed so much land that it is roughly a quarter bigger than in the 1960s. Surely it has no coral left? In fact its waters hold more than 250 species of hard coral. How do you think they survive, and how could they be protected?",
        idea:
          "Singapore's corals are tough — many are adapted to cloudy, sediment-rich water. But they have lost a lot of space to reclamation, so Singapore now **protects** the best remaining reefs (Sisters' Islands Marine Park), **rescues** corals from development sites and **regrows** them in coral nurseries. Protection works at every scale: a government, a school club and you.",
      },
      body:
        "**Singapore's reefs**\n\nSingapore's reefs fringe its southern islands. Although much of the original reef area has been lost to land reclamation (often estimated at around 60%), the remaining reefs still hold more than 250 species of hard coral — about a third of the world's hard coral species.\n\n**Sisters' Islands Marine Park**\n\n- Singapore's **first marine park**, announced by NParks in **2014**.\n- Covers about **40 hectares** around Big Sister's Island and Little Sister's Island and the western reefs of St John's Island and Pulau Tekukor.\n- Visitors can join guided intertidal walks and dive trails, while Little Sister's Island is kept mainly for conservation and research.\n- Collecting marine life is banned, and the park is used for education, research and monitoring.\n\n**Coral nurseries and transplanting ('coral gardening')**\n\n1. **Collect** coral fragments — pieces broken off by storms or anchors, or corals rescued from areas about to be reclaimed or dredged.\n2. **Grow** them in a **nursery** on frames or tables in the sea, where they are cleaned and checked.\n3. **Transplant** the young colonies onto bare rock or rubble on a damaged reef.\n4. **Monitor** survival, growth and bleaching, and learn which species do best.\n\nNParks runs coral nurseries at Sisters' Islands, and in 2024 it launched an initiative aiming to plant about 100,000 corals over roughly ten years. Transplanting has also been used to move corals away from reclamation sites before work starts. But restoration is slow and small-scale: it helps, but it is not a substitute for protecting healthy reefs in the first place.\n\n**What individuals can do**\n\n| Scale | Action | Why it helps |\n|---|---|---|\n| On the reef | Never touch, stand on or collect coral; keep fins up | Coral polyps are thin living tissue, easily crushed |\n| On the reef | Choose eco-certified tour operators that use moorings | Avoids anchor damage |\n| On the reef | Use reef-friendly sunscreen or cover up with a rash vest | Some sunscreen chemicals (e.g. oxybenzone) may harm corals; the evidence is still debated |\n| At home | Encourage family and friends who eat seafood to choose sustainably certified options | Reduces overfishing of reef fish |\n| Global | Cut energy use and emissions (walk, MRT, turn off air-con when not needed) | Tackles the root cause of bleaching |\n| Global | Join citizen science or campaigns | More data and pressure for change |",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coral gardening cycle in four steps: collect fragments, grow in a nursery, transplant to the reef, monitor, with arrows going clockwise and Sisters' Islands Marine Park in the centre"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><rect x="20" y="20" width="190" height="80" rx="10" fill="#fecaca"/><rect x="270" y="20" width="190" height="80" rx="10" fill="#bae6fd"/><rect x="270" y="200" width="190" height="80" rx="10" fill="#bbf7d0"/><rect x="20" y="200" width="190" height="80" rx="10" fill="#c7d2fe"/></g><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="115" y="44" font-size="13" font-weight="bold">1. Collect fragments</text><text x="115" y="64" font-size="11">broken pieces, or corals rescued</text><text x="115" y="79" font-size="11">from reclamation sites</text><text x="365" y="44" font-size="13" font-weight="bold">2. Grow in a nursery</text><text x="365" y="64" font-size="11">on frames or tables in the sea,</text><text x="365" y="79" font-size="11">cleaned and checked for months</text><text x="365" y="224" font-size="13" font-weight="bold">3. Transplant to the reef</text><text x="365" y="244" font-size="11">attach young colonies to bare</text><text x="365" y="259" font-size="11">rock or rubble</text><text x="115" y="224" font-size="13" font-weight="bold">4. Monitor</text><text x="115" y="244" font-size="11">survival, growth, bleaching;</text><text x="115" y="259" font-size="11">learn which species do best</text></g><g stroke="#1f2937" stroke-width="2"><line x1="210" y1="60" x2="258" y2="60"/><line x1="365" y1="100" x2="365" y2="188"/><line x1="270" y1="240" x2="222" y2="240"/><line x1="115" y1="200" x2="115" y2="112"/></g><g fill="#1f2937"><polygon points="268,60 256,54 256,66"/><polygon points="365,198 359,186 371,186"/><polygon points="212,240 224,234 224,246"/><polygon points="115,102 109,114 121,114"/></g><ellipse cx="240" cy="150" rx="92" ry="34" fill="#e0f2fe" stroke="#334155" stroke-width="1"/><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="240" y="140" font-size="12" font-weight="bold">Coral gardening</text><text x="240" y="156" font-size="11">e.g. NParks nurseries,</text><text x="240" y="170" font-size="11">Sisters' Islands, Singapore</text></g></svg>`,
      diagramCaption:
        "The coral gardening cycle used in Singapore and on the Great Barrier Reef. Each loop teaches scientists which corals survive best, so the next round of planting improves.",
      workedExamples: [
        {
          title: "Calculation: did the transplanting work?",
          problem:
            "A (made-up) school marine club helps a nursery transplant 120 coral fragments. One year later 90 are still alive. What percentage survived?",
          steps: [
            "Percentage = (part ÷ whole) × 100.",
            "Survivors ÷ total = 90 ÷ 120 = 0.75.",
            "0.75 × 100 = 75%.",
            "Interpret: 75% survival is encouraging, but 30 fragments died — so you would check which species or sites did worst.",
          ],
          answer: "75% of the fragments survived.",
          yourTurn: {
            question:
              "A coral nursery grows 250 fragments. 40 of them die before they can be transplanted. What percentage survive? Give your answer as a percentage.",
            answer: { type: "number", value: 84, display: "84%" },
            solution: "Survivors = 250 − 40 = 210. 210 ÷ 250 × 100 = 84%. (A common slip is to work out 40 ÷ 250 = 16% — that is the percentage that died.)",
          },
        },
        {
          title: "Model answer: 'Suggest how a student in Singapore could help protect coral reefs.' (3 marks)",
          problem: "Give three different actions and say how each helps. Think at different scales.",
          steps: [
            "Think at different scales: on the reef, at home, and globally.",
            "On the reef: 'When visiting Sisters' Islands, Siti should stay on the trail and never touch or collect coral, because polyps are easily crushed.'",
            "At home: 'She could encourage family members who eat seafood to choose sustainably certified fish, which reduces overfishing of reef species.'",
            "Globally: 'She could cut her carbon footprint by taking the MRT instead of car rides, because climate change causes the marine heatwaves that bleach coral.'",
          ],
          answer:
            "Stay on trails and never touch or collect coral when visiting Sisters' Islands (protects fragile polyps); encourage family who eat seafood to choose sustainably certified options (reduces overfishing); and cut emissions, e.g. by using the MRT (tackles the warming that causes bleaching).",
        },
      ],
      keyPoints: [
        "Sisters' Islands Marine Park (2014) is Singapore's first marine park, about 40 hectares.",
        "Singapore's waters still hold more than 250 hard coral species despite heavy reclamation.",
        "Coral gardening: collect fragments → grow in a nursery → transplant → monitor.",
        "Restoration helps but is small-scale; protecting healthy reefs matters more.",
        "Individuals help locally (reef-safe behaviour) and globally (cutting emissions).",
      ],
      whyItWorks:
        "Why grow coral in a nursery instead of simply leaving fragments on the sea bed? A loose fragment rolls around in currents, gets buried by sediment or is eaten before it can attach. On a raised nursery frame it sits in clean, moving water with plenty of light, so it grows much faster and more survive. Once it is a sturdy little colony it can be fixed firmly to the reef, where it adds new living coral and shelter for fish. The catch: if the sea keeps overheating, transplanted corals bleach just like wild ones — so restoration only works alongside action on climate change.",
      strategies: ["Think at different scales", "Compare and contrast", "Use figures from the source", "Social / economic / environmental (SEE)"],
      thinkDeeper:
        "Sisters' Islands Marine Park is about 40 hectares; the Great Barrier Reef Marine Park is about 344,000 km² (1 km² = 100 hectares). How many times bigger is the GBR park? Does a tiny marine park still matter? Argue both sides.",
    },
  ],
  learn: {
    flashcards: [
      { front: "Where is the Great Barrier Reef?", back: "In the Coral Sea, off the north-east coast of Queensland, Australia." },
      { front: "How long is the Great Barrier Reef, and how many reefs does it contain?", back: "About 2,300 km long, made of about 2,900 individual reefs (plus about 900 islands)." },
      { front: "When did the Great Barrier Reef become a marine park?", back: "1975 — under the Great Barrier Reef Marine Park Act." },
      { front: "When did the Great Barrier Reef become a World Heritage Site?", back: "1981 (UNESCO)." },
      { front: "What did the 2017 Deloitte study estimate the reef is worth to Australia?", back: "About A$6.4 billion a year and about 64,000 jobs, mostly in tourism." },
      { front: "What is GBRMPA?", back: "The Great Barrier Reef Marine Park Authority — the Australian government body that manages the Marine Park." },
      { front: "What is a green zone?", back: "A Marine National Park (no-take) zone: no fishing or collecting, but boating, swimming, snorkelling and diving are allowed." },
      { front: "What happened in the 2004 rezoning?", back: "Green no-take zones were increased from about 4.5% to about 33% of the Marine Park." },
      { front: "What does a pink (Preservation) zone mean?", back: "No entry at all without a permit." },
      { front: "How are crown-of-thorns starfish controlled?", back: "Trained divers give each starfish a single injection of bile salts or vinegar, which kills it without harming the coral." },
      { front: "Why do farms affect the reef?", back: "Fertiliser, pesticides and soil wash down rivers, making water murky and feeding the plankton that helps starfish larvae survive." },
      { front: "What is the Reef 2050 Long-Term Sustainability Plan?", back: "A joint Australian and Queensland government plan (2015, updated 2021) with long-term targets for water quality, biodiversity and the reef's use." },
      { front: "Name two ways of restoring coral.", back: "Growing coral in nurseries and transplanting it; collecting spawn and releasing larvae onto damaged reefs ('coral IVF'). Research into heat-tolerant corals also aims to help." },
      { front: "When were the mass bleaching events on the Great Barrier Reef since 2016?", back: "2016, 2017, 2020, 2022 and 2024 (earlier ones in 1998 and 2002)." },
      { front: "Why can't local management stop bleaching?", back: "Bleaching is caused by marine heatwaves linked to global climate change; zoning and local rules cannot cool the ocean." },
      { front: "What is Sisters' Islands Marine Park?", back: "Singapore's first marine park (announced 2014), about 40 hectares around the Sisters' Islands and parts of St John's Island and Pulau Tekukor." },
      { front: "What is resilience (of a reef)?", back: "Its ability to recover after damage such as bleaching or a cyclone. Clean water, plenty of fish and no starfish outbreaks increase it." },
      { front: "Has UNESCO listed the reef as 'in danger'?", back: "No. It has considered doing so (notably in 2021), but has not listed it so far." },
    ],
    mustKnow: [
      "Can you locate the Great Barrier Reef using CLOCC (Coral Sea, Queensland, north-east Australia, roughly 10°S–24°S)?",
      "Can you give its size (about 2,300 km; about 2,900 reefs) and key dates (Marine Park 1975, World Heritage 1981)?",
      "Can you explain its economic value using the 2017 estimate of about A$6.4 billion a year and 64,000 jobs?",
      "Can you name six stakeholders and explain one conflict between them?",
      "Can you describe how zoning works and what green, yellow, blue and pink zones mean?",
      "Can you state that the 2004 rezoning raised green no-take zones to about 33%?",
      "Can you explain how crown-of-thorns starfish are controlled and why outbreaks are linked to farm run-off?",
      "Can you describe the purpose of the Reef 2050 Plan and of tourism permits and moorings?",
      "Can you give evidence for AND against the success of management?",
      "Can you explain why local management cannot prevent bleaching?",
      "Can you write a 'to what extent' answer with a qualified, justified judgement?",
      "Can you describe Sisters' Islands Marine Park and how coral nurseries work?",
      "Can you suggest actions individuals can take at different scales?",
    ],
    misconceptions: [
      { wrong: "The Great Barrier Reef is one single giant reef.", right: "It is a system of about 2,900 separate reefs and about 900 islands stretching about 2,300 km." },
      { wrong: "Green zones mean nobody is allowed in.", right: "Green zones are no-take: you can swim, snorkel, dive and boat there, but not fish or collect. It is pink Preservation zones that you cannot enter without a permit." },
      { wrong: "The whole Great Barrier Reef is closed to fishing.", right: "About a third is no-take; fishing is allowed (with rules) in yellow, blue and other zones." },
      { wrong: "Bleached coral is dead coral.", right: "Bleached coral is stressed and starving but still alive. If temperatures fall soon enough it can regain its algae and recover; if not, it dies." },
      { wrong: "Repeated bleaching proves reef management is useless.", right: "Management targets local threats and builds resilience; bleaching comes from global warming, which needs global action." },
      { wrong: "Tourism is only bad for the reef.", right: "Badly managed tourism damages coral, but tourism also funds management (visitor charge), creates jobs and gives operators a reason to protect and monitor the reef." },
      { wrong: "Coral restoration can rebuild the whole reef.", right: "Restoration works on small areas compared with a 344,000 km² park. It helps, but cannot replace protecting reefs and cutting emissions." },
      { wrong: "Farmers are far away from the reef, so they do not affect it.", right: "Run-off from farms in the river catchments carries fertiliser, pesticides and soil out to the reef." },
    ],
    examMistakes: [
      "Saying the reef is in 'Australia' without naming Queensland, the north-east coast or the Coral Sea.",
      "Giving figures without hedging or a date — write 'about A$6.4 billion a year (2017 estimate)'.",
      "Describing a strategy without explaining HOW it protects the reef (e.g. 'zoning' alone gets little credit).",
      "Writing a one-sided 'to what extent' answer, or giving a conclusion with no reason.",
      "Confusing green (no-take) zones with pink (no-entry) zones.",
      "Blaming all reef damage on tourists and ignoring climate change and farm run-off.",
      "Mixing up local and global threats — bleaching is a global threat, overfishing is a local one.",
      "Using Singapore examples incorrectly — Sisters' Islands is a marine park in Singapore, not part of the Great Barrier Reef.",
    ],
    mnemonics: [
      {
        topic: "The six main management strategies",
        device: "Zara Cleans Water To Restore Reefs",
        explanation: "Zoning · Crown-of-thorns culling · Water-quality rules for farms · Tourism permits · Restoration of coral · Reef 2050 Plan.",
      },
      {
        topic: "Zone colours",
        device: "Green = Grab nothing; Pink = Please keep out",
        explanation: "Green Marine National Park zones are no-take (visit but take nothing); pink Preservation zones need a permit even to enter.",
      },
      {
        topic: "Key dates",
        device: "Park, Heritage, Zones, Plan: 75 – 81 – 04 – 15",
        explanation: "Marine Park Act 1975 · World Heritage 1981 · rezoning to about 33% green 2004 · Reef 2050 Plan 2015.",
      },
    ],
    realWorld: [
      {
        title: "Sisters' Islands Marine Park, Singapore",
        detail: "Singapore's first marine park (2014), about 40 hectares of reef south of the main island, with guided intertidal walks, dive trails and coral nurseries run by NParks.",
        emoji: "🇸🇬",
      },
      {
        title: "Planting corals in Singapore",
        detail: "In 2024 NParks launched an initiative aiming to plant about 100,000 corals over roughly a decade, building on years of rescuing corals from reclamation sites and growing them in nurseries.",
        emoji: "🪸",
      },
      {
        title: "Starfish divers on the Great Barrier Reef",
        detail: "Teams of divers search high-value reefs for crown-of-thorns starfish and kill each one with a single injection of bile salts or vinegar, protecting coral on the reefs they treat.",
        emoji: "🤿",
      },
      {
        title: "Sunscreen rules in Hawaii and Palau",
        detail: "Hawaii and Palau have banned some sunscreen chemicals such as oxybenzone because of concern for corals — an example of a place changing everyday behaviour to protect reefs (scientists still debate how big the effect is).",
        emoji: "🧴",
      },
      {
        title: "Apo Island, Philippines",
        detail: "A small community-run no-take sanctuary set up in the 1980s became a famous example of fish numbers recovering when local people protect their own reef — and of fishers benefiting from 'spillover'.",
        emoji: "🐟",
      },
    ],
    videos: [
      {
        title: "Managing the Great Barrier Reef (GCSE case study)",
        channel: "YouTube search",
        url: "https://www.youtube.com/results?search_query=great+barrier+reef+management+gcse+geography",
      },
      {
        title: "How Great Barrier Reef zoning works",
        channel: "YouTube search",
        url: "https://www.youtube.com/results?search_query=great+barrier+reef+marine+park+zoning+explained",
      },
      {
        title: "Crown-of-thorns starfish control divers",
        channel: "YouTube search",
        url: "https://www.youtube.com/results?search_query=crown+of+thorns+starfish+control+program+great+barrier+reef",
      },
      {
        title: "Sisters' Islands Marine Park and Singapore's coral nurseries",
        channel: "YouTube search",
        url: "https://www.youtube.com/results?search_query=sisters+islands+marine+park+singapore+coral",
      },
    ],
    formulas: [
      { name: "Stakeholder", formula: "Any person or group with an interest in a place or decision (e.g. farmers, fishers, tourism operators, scientists, Traditional Owners, governments)." },
      { name: "Zoning", formula: "Dividing an area into zones with different rules so that different uses are separated and the most valuable areas are protected." },
      { name: "No-take zone (green zone)", formula: "An area where no fishing or collecting is allowed; people may still visit. About 33% of the Great Barrier Reef Marine Park since 2004." },
      { name: "Marine park", formula: "An area of sea protected by law, where activities are managed to conserve wildlife and habitats." },
      { name: "World Heritage Site", formula: "A place of outstanding value to all humanity, listed by UNESCO. The Great Barrier Reef was listed in 1981." },
      { name: "GBRMPA", formula: "Great Barrier Reef Marine Park Authority — the body set up under the 1975 Act to manage the Marine Park." },
      { name: "Crown-of-thorns starfish", formula: "A coral-eating starfish whose population outbreaks can strip reefs of living coral; controlled by divers on the GBR." },
      { name: "Run-off", formula: "Water flowing over land into rivers and the sea, carrying soil, fertiliser and pesticides from farms." },
      { name: "Catchment", formula: "The area of land drained by a river and its tributaries; farms in the reef's catchments affect water quality on the reef." },
      { name: "Reef 2050 Plan", formula: "The Reef 2050 Long-Term Sustainability Plan (2015, updated 2021): the Australian and Queensland governments' long-term plan for protecting the reef." },
      { name: "Coral bleaching", formula: "When stressed corals (usually by high water temperature) expel their algae (zooxanthellae) and turn white; they may recover or die." },
      { name: "Resilience", formula: "The ability of an ecosystem to recover after a disturbance such as bleaching or a cyclone." },
      { name: "Coral restoration", formula: "Actively helping reefs recover, e.g. growing coral in nurseries and transplanting it, or releasing coral larvae onto damaged reefs." },
      { name: "Sustainable management", formula: "Using a resource to meet today's needs without damaging it for future generations." },
      { name: "Key facts: Great Barrier Reef", formula: "Queensland, Australia · about 2,300 km · about 2,900 reefs · Marine Park 1975 · World Heritage 1981 · about A$6.4 billion a year and about 64,000 jobs (2017 estimate)." },
      { name: "Key facts: Sisters' Islands Marine Park", formula: "Singapore's first marine park · announced 2014 · about 40 hectares · coral nurseries run by NParks." },
    ],
  },
};
