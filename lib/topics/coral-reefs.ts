import type { Topic } from "../types";

export const coralReefs: Topic = {
  id: "coral-reefs",
  title: "Coral Reefs & the Great Barrier Reef",
  subject: "Cracking Coasts",
  icon: "🐠",
  summary: "Rainforests of the sea: how reefs form, what threatens them, how we protect them.",
  intro:
    "Coral reefs cover less than 1% of the ocean floor, yet about a quarter of all marine species live on them. They feed and protect hundreds of millions of people, and Singapore's own waters hold over 250 species of hard coral. In this topic you will find out how tiny animals build structures visible from space, why reefs are bleaching more often, and whether the Great Barrier Reef's world-famous management can save it.",

  guide: [
    {
      id: "what-is-coral",
      heading: "What is coral? Tiny animals, big builders",
      body:
        "A coral is not a rock or a plant. It is an **animal**: a colony of thousands of tiny **polyps** (soft-bodied animals, usually only a few millimetres across, related to jellyfish and sea anemones). Each polyp has a tube-shaped body, a mouth on top surrounded by stinging **tentacles**, and a stomach inside.\n\nReef-building corals (called **hard corals**) take calcium and carbonate from seawater and build a cup-shaped skeleton of **calcium carbonate** (limestone) underneath themselves. When a polyp dies, a new one grows on top of the old skeleton. Over thousands of years, millions of these skeletons pile up into a **coral reef**: a ridge or mound of limestone built by living things. Reefs typically grow upwards only a few millimetres to about 1–2 cm per year, so a large reef is many thousands of years old.\n\n**The secret partnership.** Inside the polyp's tissue live microscopic algae called **zooxanthellae** (say 'zo-zan-THEL-ee'). This is a **symbiotic relationship**: a partnership in which both living things benefit.\n\n- The algae **photosynthesise** (use sunlight to make sugars) and pass up to about 90% of the food they make to the coral.\n- The coral gives the algae a safe home, plus carbon dioxide and nutrients (waste from the polyp).\n- The algae also give coral most of its **colour**. Without them, the white skeleton shows through the clear tissue.\n\nAt night many polyps also stretch out their tentacles to catch tiny drifting animals called **zooplankton**, so coral is a bit like a 'solar-powered animal that also hunts'.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a coral polyp showing tentacles, mouth, stomach, zooxanthellae algae and the limestone skeleton"><defs><marker id="wic-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b45309"/></marker></defs><rect x="0" y="0" width="320" height="210" fill="#e0f2fe"/><circle cx="290" cy="22" r="14" fill="#fde047"/><line x1="276" y1="32" x2="200" y2="80" stroke="#b45309" stroke-width="2" marker-end="url(#wic-ah)"/><text x="232" y="48" font-size="10" fill="#92400e">sunlight</text><path d="M110,70 L95,35 M125,66 L120,28 M140,65 L145,28 M155,66 L170,33 M168,72 L190,42" stroke="#f472b6" stroke-width="5" stroke-linecap="round"/><path d="M100,75 Q140,58 180,75 L175,150 L105,150 Z" fill="#fbcfe8" stroke="#db2777"/><ellipse cx="140" cy="72" rx="10" ry="4" fill="#9d174d"/><ellipse cx="140" cy="110" rx="24" ry="22" fill="#fce7f3" stroke="#db2777" stroke-dasharray="3 2"/><g fill="#a16207"><circle cx="112" cy="95" r="3"/><circle cx="118" cy="130" r="3"/><circle cx="165" cy="92" r="3"/><circle cx="168" cy="128" r="3"/><circle cx="110" cy="115" r="3"/><circle cx="170" cy="110" r="3"/></g><path d="M80,150 L200,150 L210,195 L70,195 Z" fill="#f5f5f4" stroke="#78716c"/><text x="140" y="178" font-size="11" text-anchor="middle" fill="#44403c">calcium carbonate skeleton</text><text x="12" y="40" font-size="10" fill="#9d174d">stinging</text><text x="12" y="52" font-size="10" fill="#9d174d">tentacles</text><text x="12" y="75" font-size="10" fill="#9d174d">mouth</text><line x1="45" y1="72" x2="128" y2="72" stroke="#9d174d" stroke-width="0.8"/><text x="200" y="112" font-size="10" fill="#9d174d">stomach</text><line x1="198" y1="109" x2="165" y2="109" stroke="#9d174d" stroke-width="0.8"/><text x="214" y="138" font-size="10" fill="#713f12">zooxanthellae</text><text x="214" y="150" font-size="10" fill="#713f12">(algae) in tissue</text><line x1="212" y1="135" x2="171" y2="129" stroke="#713f12" stroke-width="0.8"/><text x="230" y="185" font-size="10" fill="#1e3a8a">algae → sugars to coral</text><text x="230" y="198" font-size="10" fill="#1e3a8a">coral → CO2 + nutrients</text></svg>`,
      diagramCaption:
        "A single coral polyp. Algae (zooxanthellae) living in its tissue use sunlight to make food for the coral; the polyp builds a limestone cup beneath itself.",
      keyPoints: [
        "Coral is an animal: a colony of tiny polyps related to jellyfish.",
        "Hard corals build skeletons of calcium carbonate (limestone); reefs are piles of these skeletons built up over thousands of years.",
        "Zooxanthellae algae live inside the polyps in a symbiotic relationship, supplying up to about 90% of the coral's food and its colour.",
      ],
      thinkDeeper:
        "If the algae need sunlight and the coral needs the algae, what does that tell you about how deep reef-building corals can live? Predict the answer before you read the next section.",
      discovery: {
        problem:
          "A diver photographs a 'rock' covered in tiny flower-like shapes that pull inwards when she waves her hand. A sample is sent to a lab: it fizzes in acid like chalk, but the soft layer on top contains animal cells AND plant-like cells that photosynthesise. Is it a rock, a plant or an animal?",
        idea:
          "All three, in a way! The 'flowers' are coral polyps (animals), the chalky part is the limestone skeleton they build, and the photosynthesising cells are zooxanthellae algae living inside them. A reef is a living partnership on top of a dead skeleton.",
      },
    },
    {
      id: "growth-conditions",
      heading: "Where do reefs grow? The conditions corals need",
      body:
        "Reef-building corals are fussy. Because their partner algae need sunlight and the polyps can only cope with a narrow range of conditions, reefs grow only where ALL of these are met:\n\n- **Warm water**: typically **23–29°C**. Below about 18°C corals grow too slowly; a few weeks at just 1°C above the usual summer maximum can cause bleaching.\n- **Shallow water**: usually **less than about 50 m deep**, and most growth is in the top 25 m, because sunlight fades quickly with depth.\n- **Clear water**: sunlight must reach the algae. **Sediment** (mud and silt washed down by rivers) makes water cloudy (**turbid**) and can smother polyps.\n- **Sunlight**: for the algae to photosynthesise.\n- **Normal salinity** (saltiness), about 32–42 parts per thousand. This is why reefs are often missing opposite large river mouths, where fresh water dilutes the sea.\n- **Low pollution and low nutrients**: too many nutrients from fertiliser make seaweed and plankton grow and crowd out coral.\n- **A firm base** to attach to, such as rock or an old reef.\n\n**The global pattern.** Put these together and you get a clear distribution: most reefs lie in a band between about **30°N and 30°S** of the Equator, in the tropics. They are mostly on the **eastern** sides of continents (e.g. the east coast of Australia, the Caribbean, East Africa), because warm ocean currents flow there. Western coasts, such as Peru and Namibia, have cold currents and upwelling, so they have few reefs even in the tropics. The richest area of all is the **Coral Triangle** (Indonesia, Malaysia, the Philippines, Papua New Guinea, Timor-Leste and the Solomon Islands), home to about three-quarters of the world's reef-building coral species. Singapore sits on its western edge.\n\n**Skill: describing a distribution with TEA.** Give the **Trend** (overall pattern: 'mostly between 30°N and 30°S'), an **Example** with a named place ('the Great Barrier Reef, off north-east Australia') and an **Anomaly** (an exception: 'few reefs off the west coast of South America despite tropical latitude; a reef in Bermuda at 32°N, kept warm by the Gulf Stream').",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a coastline showing reef growth limited to warm, shallow, clear water away from a muddy river mouth"><defs><marker id="gc-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b45309"/></marker></defs><rect x="0" y="40" width="320" height="170" fill="#bae6fd"/><rect x="0" y="0" width="320" height="40" fill="#f0f9ff"/><path d="M0,40 L60,40 L80,70 L320,200 L320,210 L0,210 Z" fill="#d6d3d1"/><path d="M30,40 Q50,55 80,70 Q110,80 120,95 L90,100 Q60,80 30,40 Z" fill="#a8a29e" opacity="0.6"/><text x="6" y="34" font-size="10" fill="#57534e">river brings mud</text><g stroke="#b45309" stroke-width="1.6"><line x1="180" y1="10" x2="180" y2="60" marker-end="url(#gc-ah)"/><line x1="230" y1="10" x2="230" y2="60" marker-end="url(#gc-ah)"/></g><text x="190" y="22" font-size="10" fill="#92400e">sunlight</text><path d="M150,100 Q160,90 170,100 Q180,88 192,104 Q205,95 214,110 L214,125 L150,108 Z" fill="#f472b6"/><text x="160" y="85" font-size="10" fill="#9d174d">reef</text><line x1="250" y1="40" x2="250" y2="200" stroke="#1e3a8a" stroke-width="1"/><text x="254" y="56" font-size="10" fill="#1e3a8a">0 m</text><line x1="246" y1="125" x2="320" y2="125" stroke="#1e3a8a" stroke-dasharray="4 3"/><text x="254" y="121" font-size="10" fill="#1e3a8a">~50 m</text><text x="254" y="145" font-size="10" fill="#1e3a8a">too dark</text><text x="254" y="157" font-size="10" fill="#1e3a8a">for algae</text><text x="10" y="130" font-size="10" fill="#7f1d1d">cloudy, less salty:</text><text x="10" y="142" font-size="10" fill="#7f1d1d">no reef here</text><text x="130" y="180" font-size="10" fill="#14532d">warm 23–29°C</text><text x="130" y="192" font-size="10" fill="#14532d">clear, salty, shallow</text></svg>`,
      diagramCaption:
        "Reefs grow where water is warm, shallow, clear and salty. Near a river mouth the water is muddy and less salty; below about 50 m it is too dark.",
      keyPoints: [
        "Conditions: 23–29°C, shallow (usually under ~50 m), clear, sunny, normal salinity, low sediment and low pollution.",
        "Most reefs lie between about 30°N and 30°S, especially on the eastern sides of continents with warm currents.",
        "The Coral Triangle in South-East Asia has the greatest coral diversity on Earth; Singapore lies on its edge.",
      ],
      thinkDeeper:
        "The Amazon reaches the Atlantic close to the Equator, yet there is very little coral near its mouth. Use at least two of the growth conditions to explain why. (Hint: think about what a huge river pours into the sea.)",
      discovery: {
        problem:
          "Peru and north-east Brazil are both in the tropics at about 5–15°S. Brazil has coral reefs; Peru's coast has almost none. Both have plenty of sunshine. What could be different about the sea on the two sides of South America?",
        idea:
          "Peru's coast is cooled by the cold Humboldt Current and upwelling of cold deep water, so the sea is far below 23°C. Latitude alone does not decide where reefs grow: sea temperature, clarity, depth and salinity all matter.",
      },
      skill: "Describing a distribution using TEA (Trend, Example, Anomaly)",
    },
    {
      id: "reef-types",
      heading: "Fringing, barrier and atoll: three types of reef",
      body:
        "Geographers classify reefs into three main types by their shape and position relative to the land.\n\n- **Fringing reef**: grows close to the shore, attached to the coast or separated by only a narrow, shallow channel. It is the most common type. Examples: the Red Sea coast of Egypt, and the reefs around Singapore's southern islands.\n- **Barrier reef**: lies further offshore, parallel to the coast, separated from land by a wide, deep **lagoon** (a sheltered area of calm water). Examples: the Great Barrier Reef (Australia) and the Belize Barrier Reef (Central America).\n- **Atoll**: a ring-shaped reef (often horseshoe-shaped) surrounding a central lagoon, with no central island left. Low sandy islands may form on top of the ring. Examples: the Maldives (about 26 atolls), Aldabra (Seychelles) and the atolls of Tuvalu and Kiribati.\n\n**Darwin's subsidence theory.** How can a ring of coral exist in the deep open ocean, when corals only grow in shallow water? Charles Darwin worked this out during the voyage of HMS *Beagle* (1830s) and published it in **1842**. His idea is a sequence:\n\n- A **fringing reef** grows around a volcanic island.\n- The volcano becomes extinct and slowly **subsides** (sinks), because the ocean floor cools and the heavy volcano presses down on it. The coral keeps growing **upwards** towards the light, so a lagoon opens up between reef and island: a **barrier reef**.\n- Eventually the island sinks completely below sea level, leaving only the ring of reef around a lagoon: an **atoll**.\n\n**Evidence.** In **1952** scientists drilled into Enewetak Atoll in the Pacific. They went through more than 1,200 m of coral limestone before hitting volcanic basalt rock. Since coral only grows in shallow water, the land must have sunk over millions of years while the coral kept pace: exactly what Darwin predicted. Changes in sea level during ice ages also helped shape many reefs, so modern geographers see subsidence as the main, but not the only, factor.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three stages of Darwin's subsidence theory: fringing reef, barrier reef, atoll"><defs><marker id="rt-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e3a8a"/></marker></defs><rect x="0" y="0" width="320" height="200" fill="#f8fafc"/><g><rect x="5" y="80" width="96" height="90" fill="#bae6fd"/><path d="M25,170 L53,55 L81,170 Z" fill="#78716c"/><path d="M28,92 L36,82 L40,92 Z M66,92 L70,82 L78,92 Z" fill="#f472b6"/><text x="53" y="186" font-size="10" text-anchor="middle" fill="#0f172a">1 Fringing</text></g><line x1="103" y1="125" x2="113" y2="125" stroke="#1e3a8a" stroke-width="1.5" marker-end="url(#rt-ah)"/><g><rect x="112" y="80" width="96" height="90" fill="#bae6fd"/><path d="M140,170 L160,70 L180,170 Z" fill="#78716c"/><path d="M120,80 L124,72 L130,80 L130,130 L120,130 Z M190,80 L196,72 L200,80 L200,130 L190,130 Z" fill="#f472b6"/><text x="160" y="76" font-size="10" text-anchor="middle" fill="#1e3a8a">lagoon</text><text x="160" y="186" font-size="10" text-anchor="middle" fill="#0f172a">2 Barrier</text></g><line x1="210" y1="125" x2="220" y2="125" stroke="#1e3a8a" stroke-width="1.5" marker-end="url(#rt-ah)"/><g><rect x="219" y="80" width="96" height="90" fill="#bae6fd"/><path d="M247,170 L267,115 L287,170 Z" fill="#78716c"/><path d="M226,80 L231,72 L237,80 L237,160 L226,160 Z M297,80 L303,72 L308,80 L308,160 L297,160 Z" fill="#f472b6"/><text x="267" y="96" font-size="10" text-anchor="middle" fill="#1e3a8a">lagoon</text><text x="267" y="186" font-size="10" text-anchor="middle" fill="#0f172a">3 Atoll</text></g><line x1="5" y1="80" x2="315" y2="80" stroke="#0369a1" stroke-dasharray="4 3"/><text x="8" y="74" font-size="10" fill="#0369a1">sea level</text><text x="160" y="22" font-size="11" text-anchor="middle" fill="#0f172a">Volcano slowly sinks; coral grows upwards</text><text x="160" y="40" font-size="10" text-anchor="middle" fill="#9d174d">pink = living reef</text></svg>`,
      diagramCaption:
        "Darwin's subsidence theory: as a volcanic island sinks, a fringing reef becomes a barrier reef and finally an atoll around a lagoon.",
      keyPoints: [
        "Fringing reefs hug the coast; barrier reefs are separated from land by a wide lagoon; atolls are rings of reef around a lagoon.",
        "Darwin (1842) explained atolls by subsidence: the island sinks while coral grows upwards.",
        "Drilling on Enewetak Atoll in 1952 found over 1,200 m of coral above volcanic rock, supporting Darwin.",
      ],
      thinkDeeper:
        "Coral grows a few millimetres a year. Enewetak has about 1,200 m of coral on top of its volcano. Roughly how many years would it take to build that at 1 mm per year? What does your answer suggest about how fast the island sank?",
      discovery: {
        problem:
          "On a map of the Pacific you spot dozens of perfect rings of coral with a lagoon in the middle and no hill or volcano anywhere. Corals can only grow in shallow, sunlit water, yet the ocean floor around these rings is thousands of metres deep. How did the coral get there?",
        idea:
          "There used to be a volcanic island in the middle. As it slowly sank, the coral around it kept growing upwards towards the light. The ring is the 'ghost outline' of a vanished island: Darwin's subsidence theory.",
      },
      caseStudy: {
        place: "Enewetak Atoll, Marshall Islands (Pacific Ocean)",
        facts: [
          "A ring of about 40 small islands around a lagoon roughly 30–40 km across.",
          "Drilled by US scientists in 1952 to test Darwin's 1842 subsidence theory.",
          "The drill passed through more than 1,200 m of coral limestone before reaching volcanic basalt.",
          "Because coral only grows in shallow water, the volcano must have subsided over tens of millions of years.",
        ],
      },
    },
    {
      id: "biodiversity-value",
      heading: "Rainforests of the sea: biodiversity and value",
      body:
        "**Biodiversity** means the variety of living things in an area. Coral reefs are called the **'rainforests of the sea'** because they are among the most biodiverse ecosystems on Earth. Reefs cover **less than 1% of the ocean floor** but support about **25% of all marine species**: fish, turtles, sharks, sponges, giant clams, sea stars, sea slugs and thousands of others. The complex 3-D structure of a reef gives many hiding places (**habitats**), and the clear, warm, sunny water lets the food web run all year.\n\n**Why reefs matter to people.** Reefs provide **goods** (things we take) and **services** (things they do for us). Around 500 million people worldwide are thought to depend on reefs in some way.\n\n- **Fisheries and food**: reef fish provide protein for millions of people in coastal communities, especially in South-East Asia and the Pacific islands.\n- **Tourism**: diving, snorkelling and glass-bottom boats bring income and jobs. The Great Barrier Reef alone supports about 64,000 jobs and contributes about A$6 billion a year to Australia's economy.\n- **Coastal protection**: a reef acts like a natural breakwater. A healthy reef can absorb up to about 97% of the energy of incoming waves, reducing coastal erosion and flooding from storms. This is free 'hard engineering' built by nature.\n- **Medicines**: reef organisms produce unusual chemicals. A Caribbean sponge led to drugs used against leukaemia and viruses, and cone-snail venom gave a powerful painkiller. Scientists call reefs a 'medicine cabinet of the 21st century'.\n- **Sand and land**: broken coral and shells make white beaches and build the low islands that whole countries (such as the Maldives and Tuvalu) live on.\n- **Science and culture**: reefs record past climates in their growth bands and are important to Indigenous peoples, such as Aboriginal and Torres Strait Islander Traditional Owners of the Great Barrier Reef.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart comparing coral reefs' share of the ocean floor (under 1 per cent) with their share of marine species (about 25 per cent)"><rect x="0" y="0" width="320" height="200" fill="#f8fafc"/><line x1="50" y1="20" x2="50" y2="160" stroke="#334155"/><line x1="50" y1="160" x2="300" y2="160" stroke="#334155"/><g font-size="10" fill="#334155" text-anchor="end"><text x="45" y="164">0%</text><text x="45" y="108">10%</text><text x="45" y="52">20%</text><text x="45" y="24">25%</text></g><g stroke="#cbd5e1" stroke-dasharray="3 3"><line x1="50" y1="104" x2="300" y2="104"/><line x1="50" y1="48" x2="300" y2="48"/></g><rect x="85" y="155" width="60" height="5" fill="#0ea5e9"/><rect x="195" y="20" width="60" height="140" fill="#f472b6"/><text x="115" y="148" font-size="11" text-anchor="middle" fill="#0369a1">under 1%</text><text x="225" y="88" font-size="11" text-anchor="middle" fill="#ffffff">~25%</text><text x="115" y="176" font-size="10" text-anchor="middle" fill="#0f172a">share of the</text><text x="115" y="188" font-size="10" text-anchor="middle" fill="#0f172a">ocean floor</text><text x="225" y="176" font-size="10" text-anchor="middle" fill="#0f172a">share of all</text><text x="225" y="188" font-size="10" text-anchor="middle" fill="#0f172a">marine species</text><text x="175" y="14" font-size="11" text-anchor="middle" fill="#0f172a">Coral reefs: tiny area, huge biodiversity</text></svg>`,
      diagramCaption:
        "Reefs occupy under 1% of the ocean floor yet are home to roughly a quarter of all marine species.",
      keyPoints: [
        "Reefs: under 1% of the ocean floor, about 25% of marine species.",
        "Value: fisheries, tourism, coastal protection (absorb up to ~97% of wave energy), medicines, beaches and islands.",
        "Hundreds of millions of people, mostly in poorer tropical countries, depend on reefs for food and income.",
      ],
      thinkDeeper:
        "If a reef dies, the coast behind it may need a concrete seawall. Which is better value: protecting the reef, or building the seawall? Think about cost, how long each lasts, and what else the reef provides.",
      discovery: {
        problem:
          "Imagine shrinking all the world's coral reefs into one place. They would cover an area smaller than France. Yet if you listed every species living in the ocean, roughly one in four would be on that list. How can such a tiny area hold so much life?",
        idea:
          "Reefs are complex 3-D structures with countless nooks for shelter, built in warm, sunlit, clear water where food is made all year. Habitat complexity plus steady energy equals extraordinary biodiversity, like a rainforest.",
      },
    },
    {
      id: "bleaching-climate",
      heading: "Global threats: bleaching, acidification and cyclones",
      body:
        "Some threats to reefs come from far away, because they are caused by **climate change**: the long-term warming of Earth caused mainly by greenhouse gases such as carbon dioxide (CO2) from burning fossil fuels.\n\n**1. Coral bleaching.** When sea water stays too hot for too long, for example during a **marine heatwave** (a period of unusually warm sea water lasting days to months), the zooxanthellae become stressed and start making harmful chemicals. The coral **expels the algae**. With no algae, the coral loses its colour and its main food supply: the white skeleton shows through, so it looks 'bleached'.\n\n- As little as **1°C above the normal summer maximum for about four weeks** can trigger bleaching.\n- Bleached coral is **not dead yet**. If temperatures fall quickly, algae can return and the coral recovers over months. If the heat lasts, the coral starves and dies, and seaweed takes over.\n- Recovery of a reef takes about **10–15 years**, but heatwaves are now coming every few years.\n\nThe Great Barrier Reef has suffered **mass bleaching** (bleaching over hundreds of kilometres) in **1998, 2002, 2016, 2017, 2020, 2022 and 2024**. The 2016 event alone killed about 30% of the reef's shallow-water corals, mostly in the northern section. In 2024 scientists confirmed the fourth **global** bleaching event, affecting reefs in more than 50 countries, including Singapore.\n\n**2. Ocean acidification.** The ocean absorbs about a quarter of the CO2 we release. CO2 dissolves to form a weak acid, so sea water is becoming more **acidic** (its pH has fallen from about 8.2 to 8.1 since the Industrial Revolution, about a 30% rise in acidity). More acidic water makes it harder for corals to build calcium carbonate skeletons, so they grow more slowly and become more brittle.\n\n**3. Stronger tropical cyclones.** Cyclones (typhoons/hurricanes) smash reefs with huge waves. Reefs have always recovered from storms, but warmer seas may make the strongest cyclones more intense, giving reefs less time to recover. Cyclone Yasi (2011) damaged about 15% of the Great Barrier Reef's area.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram of coral bleaching and a timeline of Great Barrier Reef mass bleaching years"><defs><marker id="bc-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs><rect x="0" y="0" width="320" height="210" fill="#f8fafc"/><rect x="6" y="14" width="70" height="40" rx="6" fill="#fbcfe8" stroke="#db2777"/><text x="41" y="31" font-size="10" text-anchor="middle" fill="#831843">healthy</text><text x="41" y="44" font-size="10" text-anchor="middle" fill="#831843">coral</text><rect x="90" y="14" width="70" height="40" rx="6" fill="#fecaca" stroke="#dc2626"/><text x="125" y="31" font-size="10" text-anchor="middle" fill="#7f1d1d">sea +1°C</text><text x="125" y="44" font-size="10" text-anchor="middle" fill="#7f1d1d">for ~4 weeks</text><rect x="174" y="14" width="70" height="40" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="209" y="31" font-size="10" text-anchor="middle" fill="#78350f">algae</text><text x="209" y="44" font-size="10" text-anchor="middle" fill="#78350f">expelled</text><rect x="258" y="14" width="56" height="40" rx="6" fill="#ffffff" stroke="#64748b"/><text x="286" y="31" font-size="10" text-anchor="middle" fill="#334155">white</text><text x="286" y="44" font-size="10" text-anchor="middle" fill="#334155">coral</text><g stroke="#334155" stroke-width="1.5"><line x1="76" y1="34" x2="88" y2="34" marker-end="url(#bc-ah)"/><line x1="160" y1="34" x2="172" y2="34" marker-end="url(#bc-ah)"/><line x1="244" y1="34" x2="256" y2="34" marker-end="url(#bc-ah)"/><line x1="276" y1="54" x2="230" y2="80" marker-end="url(#bc-ah)"/><line x1="296" y1="54" x2="296" y2="80" marker-end="url(#bc-ah)"/></g><text x="200" y="94" font-size="10" fill="#14532d">cools fast: recovers</text><text x="262" y="94" font-size="10" fill="#7f1d1d">stays hot: dies</text><text x="10" y="128" font-size="11" fill="#0f172a">GBR mass bleaching years</text><line x1="15" y1="165" x2="305" y2="165" stroke="#334155"/><g fill="#dc2626"><circle cx="20" cy="165" r="5"/><circle cx="66" cy="165" r="5"/><circle cx="231" cy="165" r="5"/><circle cx="242" cy="165" r="5"/><circle cx="275" cy="165" r="5"/><circle cx="286" cy="165" r="5"/><circle cx="300" cy="165" r="5"/></g><g font-size="10" fill="#0f172a" text-anchor="middle"><text x="20" y="152">1998</text><text x="66" y="152">2002</text><text x="226" y="152">2016</text><text x="246" y="186">2017</text><text x="275" y="152">2020</text><text x="282" y="186">2022</text><text x="306" y="152">2024</text></g><text x="150" y="200" font-size="10" text-anchor="middle" fill="#7f1d1d">gaps between events are shrinking</text></svg>`,
      diagramCaption:
        "Bleaching happens when heat stress makes coral expel its algae. On the Great Barrier Reef the gaps between mass bleaching events have shrunk from years to months.",
      keyPoints: [
        "Bleaching: heat stress (about 1°C above normal summer maximum for ~4 weeks) makes coral expel its zooxanthellae and turn white.",
        "Bleached coral can recover if the heat ends quickly, but dies if it lasts; reefs need ~10–15 years to recover.",
        "GBR mass bleaching: 1998, 2002, 2016, 2017, 2020, 2022, 2024.",
        "Ocean acidification (more CO2 dissolving in sea water) weakens coral skeletons and slows growth.",
      ],
      thinkDeeper:
        "If a reef needs 10–15 years to recover from bleaching, but bleaching now happens every 2–4 years, what will happen to the reef over the next 30 years? Sketch a line graph of 'coral cover' over time to show your prediction.",
      discovery: {
        problem:
          "Look at the timeline of mass bleaching on the Great Barrier Reef: 1998, 2002, then 2016, 2017, 2020, 2022, 2024. Describe the pattern. What does the changing gap between events suggest about the cause?",
        idea:
          "Events are becoming more frequent: a 4-year gap early on, then five events in just eight years. This fits a rising background sea temperature (climate change) that makes ordinary hot summers and El Niño years tip into marine heatwaves.",
      },
      skill: "Interpreting a timeline and describing change over time",
    },
    {
      id: "local-threats",
      heading: "Local threats: starfish, run-off, fishing and tourists",
      body:
        "Other threats are **local**: they are caused by people living, farming, fishing or holidaying near the reef. The good news is that local threats can be managed locally.\n\n- **Crown-of-thorns starfish (COTS)**: a large, spiny starfish that eats coral polyps. A single adult can eat up to about 10 m² of coral a year, and a female can release tens of millions of eggs in one spawning season. Small numbers are natural, but **outbreaks** of thousands can strip whole reefs. Outbreaks are linked to farm run-off (see below) and to overfishing of their predators.\n- **Pollution and farm run-off**: rain washes **sediment** (soil), **fertiliser** (nutrients such as nitrogen and phosphorus) and **pesticides** from farms into rivers and out to sea. Sediment blocks sunlight and smothers polyps. Extra nutrients feed seaweed and plankton; more plankton means more food for COTS larvae, so more survive. Sewage, plastic and oil spills add to the damage.\n- **Overfishing**: taking too many fish, especially plant-eating fish such as parrotfish, lets seaweed overgrow the coral. Removing predators upsets the food web.\n- **Destructive fishing**: **blast fishing** (using explosives to stun fish) shatters coral into rubble, and **cyanide fishing** (squirting poison to catch live fish for aquariums and restaurants) kills coral. These still happen in parts of South-East Asia. Bottom trawling and dropped anchors also break coral.\n- **Tourism damage**: divers and snorkellers kicking or standing on coral, boat anchors, souvenir collecting, sunscreen chemicals and new resorts built on the coast. Tourism also brings money for protection, so it is both a threat and an opportunity.\n- **Coastal development and land reclamation**: dredging and building on the coast stir up sediment and can bury reefs. Singapore has lost about 60% of its original reef area, mainly through reclamation.\n\n**Multiple stresses.** Local threats make reefs weaker, so they recover more slowly from global threats such as bleaching. A reef with clean water and plenty of plant-eating fish bounces back faster: this is called **resilience**.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram linking farm run-off to crown-of-thorns starfish outbreaks and coral loss"><defs><marker id="lt-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs><rect x="0" y="0" width="320" height="210" fill="#f8fafc"/><rect x="10" y="12" width="135" height="36" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="77" y="28" font-size="10" text-anchor="middle" fill="#14532d">fertiliser on sugar cane</text><text x="77" y="41" font-size="10" text-anchor="middle" fill="#14532d">and banana farms</text><rect x="175" y="12" width="135" height="36" rx="6" fill="#e0f2fe" stroke="#0284c7"/><text x="242" y="28" font-size="10" text-anchor="middle" fill="#0c4a6e">heavy rain washes</text><text x="242" y="41" font-size="10" text-anchor="middle" fill="#0c4a6e">nutrients into rivers</text><rect x="175" y="84" width="135" height="36" rx="6" fill="#ecfccb" stroke="#65a30d"/><text x="242" y="100" font-size="10" text-anchor="middle" fill="#365314">plankton bloom</text><text x="242" y="113" font-size="10" text-anchor="middle" fill="#365314">in reef waters</text><rect x="10" y="84" width="135" height="36" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="77" y="100" font-size="10" text-anchor="middle" fill="#78350f">more COTS larvae</text><text x="77" y="113" font-size="10" text-anchor="middle" fill="#78350f">survive (more food)</text><rect x="10" y="156" width="135" height="36" rx="6" fill="#fee2e2" stroke="#dc2626"/><text x="77" y="172" font-size="10" text-anchor="middle" fill="#7f1d1d">starfish outbreak</text><text x="77" y="185" font-size="10" text-anchor="middle" fill="#7f1d1d">eats coral polyps</text><rect x="175" y="156" width="135" height="36" rx="6" fill="#f1f5f9" stroke="#64748b"/><text x="242" y="172" font-size="10" text-anchor="middle" fill="#334155">coral cover falls;</text><text x="242" y="185" font-size="10" text-anchor="middle" fill="#334155">seaweed takes over</text><g stroke="#334155" stroke-width="1.5"><line x1="145" y1="30" x2="173" y2="30" marker-end="url(#lt-ah)"/><line x1="242" y1="48" x2="242" y2="82" marker-end="url(#lt-ah)"/><line x1="175" y1="102" x2="147" y2="102" marker-end="url(#lt-ah)"/><line x1="77" y1="120" x2="77" y2="154" marker-end="url(#lt-ah)"/><line x1="145" y1="174" x2="173" y2="174" marker-end="url(#lt-ah)"/></g></svg>`,
      diagramCaption:
        "How farm run-off on land can lead to a crown-of-thorns starfish outbreak on a reef up to 100 km offshore.",
      keyPoints: [
        "Local threats: crown-of-thorns starfish, farm run-off and pollution, overfishing, destructive (blast and cyanide) fishing, tourism damage, coastal development.",
        "Nutrients from fertiliser feed plankton, helping COTS larvae survive and triggering outbreaks.",
        "Reducing local threats increases a reef's resilience to global threats such as bleaching.",
      ],
      thinkDeeper:
        "Tourism is listed as a threat to reefs, but tourists also pay fees that fund reef protection. Under what conditions does tourism do more good than harm? Suggest two rules a reef manager could set.",
      discovery: {
        problem:
          "A farmer in Queensland sprays extra fertiliser on her sugar cane before the wet season. Months later, 50 km out to sea, a reef is stripped bare by spiny starfish. Can you build a chain of events connecting the farm to the starfish?",
        idea:
          "Fertiliser washes into rivers, then the sea; the nutrients feed plankton; plankton feed starfish larvae; more larvae survive and an outbreak eats the coral. Land and sea are linked systems, so reef protection must include farms.",
      },
    },
    {
      id: "gbr-management",
      heading: "Case study: protecting the Great Barrier Reef",
      body:
        "The **Great Barrier Reef (GBR)**, off the coast of Queensland in north-east Australia, is the world's largest coral reef system. It stretches about **2,300 km**, is made of about **2,900–3,000 individual reefs** and some 900 islands, and is so big it can be seen from space. It became a **UNESCO World Heritage Site in 1981**.\n\n**Who manages it?** The **Great Barrier Reef Marine Park Authority (GBRMPA)** was set up by the Australian government in 1975 to manage the Marine Park, working with the Queensland government and Traditional Owners.\n\n**1. Zoning.** The Marine Park is divided into zones, each with different rules, like land-use zoning in a city:\n\n- **Green zones** (Marine National Park): **no-take** — no fishing or collecting, but you may visit, swim and dive. Since rezoning in **2004**, green zones cover about **33%** of the park (up from under 5%).\n- **Yellow zones**: limited fishing (e.g. one line, one hook).\n- **Blue zones**: general fishing allowed but no trawling of the sea bed.\n- **Pink/orange zones**: preservation and scientific research; entry needs a permit.\n\nStudies have found more and bigger coral trout in green zones than in fished zones, showing that no-take zones work.\n\n**2. The Reef 2050 Plan.** The **Reef 2050 Long-Term Sustainability Plan** (first published 2015) is the joint Australian and Queensland government plan to protect the reef until 2050. Governments have committed billions of Australian dollars to reef protection.\n\n**3. Water-quality programmes.** Grants and rules help farmers use less fertiliser and pesticide, fence cattle away from rivers, replant riverbanks and repair gully erosion to cut sediment, particularly in big river catchments such as the Burdekin and Fitzroy.\n\n**4. Crown-of-thorns control.** Divers cull starfish on high-value reefs by injecting each one with bile salts or vinegar (a single injection kills it). More than a million starfish have been culled since the programme was expanded in 2012.\n\n**5. Coral restoration.** Coral 'gardening' (growing fragments in nurseries then replanting), 'coral IVF' (collecting coral spawn, rearing larvae and releasing them onto damaged reefs) and research into heat-tolerant corals through the Reef Restoration and Adaptation Program.\n\n**How successful?** Local management (zoning, COTS culling, water quality) has helped, and coral cover in some regions bounced back strongly in 2021–2022. But all of this cannot stop marine heatwaves. Most scientists agree the reef's long-term future depends on cutting global greenhouse gas emissions.",
      diagram: `<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map of the Great Barrier Reef along the Queensland coast with towns, rivers, compass and scale"><defs><marker id="gbr-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0f172a"/></marker></defs><rect x="0" y="0" width="320" height="230" fill="#bae6fd"/><path d="M0,0 L60,0 L70,30 L85,60 L105,90 L125,115 L150,140 L180,170 L215,200 L240,230 L0,230 Z" fill="#fde68a" stroke="#a16207"/><path d="M85,8 Q95,40 110,62 Q130,95 152,118 Q180,145 210,168 Q240,190 268,212" fill="none" stroke="#f472b6" stroke-width="9" stroke-linecap="round" opacity="0.85"/><path d="M78,14 Q90,45 105,68" fill="none" stroke="#16a34a" stroke-width="4"/><path d="M175,150 Q200,170 225,185" fill="none" stroke="#16a34a" stroke-width="4"/><g fill="#0f172a"><circle cx="98" cy="72" r="3"/><circle cx="122" cy="105" r="3"/><circle cx="160" cy="146" r="3"/><circle cx="186" cy="181" r="3"/></g><g font-size="10" fill="#0f172a"><text x="56" y="76">Cairns</text><text x="62" y="108">Townsville</text><text x="114" y="150">Mackay</text><text x="118" y="190">Rockhampton</text><text x="20" y="40">QUEENSLAND</text><text x="20" y="52">(Australia)</text></g><path d="M118,108 Q100,120 70,128" fill="none" stroke="#0284c7" stroke-width="2"/><text x="40" y="140" font-size="10" fill="#0c4a6e">Burdekin R.</text><path d="M184,184 Q160,200 130,205" fill="none" stroke="#0284c7" stroke-width="2"/><text x="100" y="218" font-size="10" fill="#0c4a6e">Fitzroy R.</text><text x="190" y="110" font-size="10" fill="#9d174d">Great Barrier Reef</text><text x="190" y="122" font-size="10" fill="#9d174d">~2,300 km long</text><text x="230" y="150" font-size="10" fill="#14532d">green = example</text><text x="230" y="162" font-size="10" fill="#14532d">no-take zones</text><line x1="290" y1="45" x2="290" y2="15" stroke="#0f172a" stroke-width="2" marker-end="url(#gbr-ah)"/><text x="286" y="58" font-size="11" fill="#0f172a">N</text><line x1="210" y1="80" x2="270" y2="80" stroke="#0f172a" stroke-width="2"/><text x="210" y="74" font-size="10" fill="#0f172a">0</text><text x="252" y="74" font-size="10" fill="#0f172a">250 km</text><text x="220" y="30" font-size="10" fill="#0c4a6e">Coral Sea</text></svg>`,
      diagramCaption:
        "Sketch map (not to exact scale) of the Great Barrier Reef. Rivers such as the Burdekin and Fitzroy carry farm run-off to the reef; green zones are no-take areas.",
      keyPoints: [
        "GBR: about 2,300 km long, ~2,900–3,000 reefs, World Heritage Site since 1981, managed by GBRMPA (1975).",
        "Zoning: green no-take zones cover about 33% of the Marine Park since 2004.",
        "Reef 2050 Plan, water-quality programmes, COTS culling and coral restoration tackle local threats.",
        "Local management builds resilience but cannot stop marine heatwaves caused by climate change.",
      ],
      thinkDeeper:
        "Australia spends billions protecting the reef but is also a major exporter of coal. Is it fair to say the reef is being protected with one hand and harmed with the other? Build an argument for each side.",
      discovery: {
        problem:
          "You are put in charge of a reef the length of the coast from Singapore to Bangkok, used by fishers, tourists, shipping and scientists. You cannot ban everyone, and you cannot patrol every metre. How might you divide it up so that some areas recover while people can still earn a living?",
        idea:
          "Zoning: give different areas different rules. Strict no-take 'green zones' act as nurseries that restock fished areas, while other zones allow fishing or tourism. This is exactly what the Great Barrier Reef Marine Park Authority does.",
      },
      caseStudy: {
        place: "Great Barrier Reef, Queensland, Australia",
        facts: [
          "About 2,300 km long with roughly 2,900–3,000 individual reefs and about 900 islands.",
          "UNESCO World Heritage Site since 1981; managed by the Great Barrier Reef Marine Park Authority (set up 1975).",
          "2004 rezoning raised green no-take zones from under 5% to about 33% of the Marine Park.",
          "Mass bleaching in 1998, 2002, 2016, 2017, 2020, 2022 and 2024; about 30% of shallow-water coral died in 2016.",
          "Supports about 64,000 jobs and contributes about A$6 billion a year to Australia's economy.",
          "Reef 2050 Long-Term Sustainability Plan launched in 2015.",
        ],
      },
      skill: "Reading a sketch map (compass direction, scale and annotation)",
    },
    {
      id: "singapore-reefs",
      heading: "Singapore's reefs and the Sisters' Islands Marine Park",
      body:
        "You might not expect it next to one of the world's busiest ports, but Singapore's waters are home to **over 250 species of hard coral**, roughly a third of the world's hard coral species, plus seahorses, giant clams, sea turtles and more than 100 species of reef fish. Most of Singapore's reefs are **fringing reefs** around the **Southern Islands** such as Pulau Hantu, Kusu, St John's, Pulau Semakau and the Sisters' Islands.\n\n**Pressures on Singapore's reefs**\n\n- **Land reclamation and dredging**: Singapore has grown its land area by about 25% since independence. Reclamation has buried or damaged about **60% of the original reef area**.\n- **Sediment**: dredging and shipping stir up mud, so visibility is often only 2–3 m and most coral now lives in the top few metres, much shallower than reefs in clear water.\n- **Shipping**: thousands of ships pass through each year, bringing risks of oil spills and anchor damage.\n- **Bleaching**: Singapore's reefs bleached in major heatwaves including 1998, 2010, 2016 and 2024.\n\n**Protecting them.** In **2014** Singapore created its first marine park, the **Sisters' Islands Marine Park**, about 40 hectares around Big and Small Sister's Island and the western reefs of St John's Island and Pulau Tekukor. It is managed by the **National Parks Board (NParks)**. The park:\n\n- protects reefs, seagrass and intertidal shores from damage and collecting;\n- runs guided intertidal walks and underwater dive trails for education;\n- supports research on corals, plus coral nurseries that grow fragments for replanting (for example near Pulau Semakau);\n- links to national efforts such as NParks' plan to plant 100,000 corals.\n\nSingapore also shows that reefs and a busy economy can exist side by side: corals were carefully relocated before some reclamation projects, and researchers study how Singapore's corals survive in such murky, hot water, which may help reefs elsewhere adapt.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map of Singapore's Southern Islands showing Sisters' Islands Marine Park, Sentosa, St John's, Kusu, Pulau Hantu and Pulau Semakau"><defs><marker id="sg-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0f172a"/></marker></defs><rect x="0" y="0" width="320" height="210" fill="#bae6fd"/><path d="M0,0 L320,0 L320,48 Q260,62 200,58 Q140,66 90,56 Q40,62 0,50 Z" fill="#fde68a" stroke="#a16207"/><text x="140" y="30" font-size="11" fill="#0f172a">SINGAPORE (main island)</text><ellipse cx="170" cy="82" rx="22" ry="7" fill="#fde68a" stroke="#a16207"/><text x="150" y="98" font-size="10" fill="#0f172a">Sentosa</text><ellipse cx="225" cy="128" rx="10" ry="6" fill="#fde68a" stroke="#a16207"/><text x="238" y="125" font-size="10" fill="#0f172a">St John's</text><ellipse cx="210" cy="150" rx="5" ry="4" fill="#fde68a" stroke="#a16207"/><text x="218" y="160" font-size="10" fill="#0f172a">Kusu</text><circle cx="186" cy="142" r="22" fill="#86efac" opacity="0.6" stroke="#16a34a" stroke-dasharray="3 2"/><circle cx="181" cy="140" r="4" fill="#fde68a" stroke="#a16207"/><circle cx="190" cy="146" r="3" fill="#fde68a" stroke="#a16207"/><text x="130" y="180" font-size="10" fill="#14532d">Sisters' Islands</text><text x="130" y="192" font-size="10" fill="#14532d">Marine Park (2014)</text><ellipse cx="110" cy="128" rx="7" ry="4" fill="#fde68a" stroke="#a16207"/><text x="88" y="145" font-size="10" fill="#0f172a">P. Hantu</text><path d="M40,150 L70,140 L78,175 L50,182 Z" fill="#fde68a" stroke="#a16207"/><text x="20" y="198" font-size="10" fill="#0f172a">P. Semakau</text><text x="20" y="208" font-size="9" fill="#0f172a">(landfill + reef)</text><g stroke="#f472b6" stroke-width="2.5" fill="none"><path d="M176,132 Q186,124 196,136"/><path d="M216,124 Q225,118 236,126"/><path d="M103,124 Q110,119 118,124"/><path d="M38,148 L68,137"/></g><line x1="295" y1="100" x2="295" y2="72" stroke="#0f172a" stroke-width="2" marker-end="url(#sg-ah)"/><text x="291" y="112" font-size="11" fill="#0f172a">N</text><line x1="250" y1="190" x2="300" y2="190" stroke="#0f172a" stroke-width="2"/><text x="250" y="184" font-size="10" fill="#0f172a">0</text><text x="282" y="184" font-size="10" fill="#0f172a">5 km</text><text x="250" y="80" font-size="10" fill="#9d174d">pink = fringing reef</text></svg>`,
      diagramCaption:
        "Sketch map (simplified, approximate positions) of Singapore's Southern Islands. Fringing reefs ring many islands; the Sisters' Islands Marine Park (2014) is about 40 hectares.",
      keyPoints: [
        "Singapore has over 250 species of hard coral, about a third of the world's total, mostly on fringing reefs around the Southern Islands.",
        "About 60% of Singapore's original reef area has been lost, mainly to land reclamation; sediment limits coral to shallow water.",
        "Sisters' Islands Marine Park (2014, ~40 ha, managed by NParks) protects reefs and runs education, research and coral nurseries.",
      ],
      thinkDeeper:
        "Singapore's corals survive in water that is murkier than most reefs could tolerate. Why might scientists in Australia be interested in studying them? How might this help reefs elsewhere cope with a changing world?",
      discovery: {
        problem:
          "Singapore's sea is crowded with ships and the water is often murky, yet divers have recorded more than 250 kinds of hard coral there, more than in the whole Caribbean. How could such a busy, cloudy sea hold so many species?",
        idea:
          "Singapore lies on the edge of the Coral Triangle, the world's richest coral region, so it inherits huge diversity. Corals there have adapted to murky water by living very shallow. Protecting what is left, as at Sisters' Islands, matters because so much has already been lost to reclamation.",
      },
      caseStudy: {
        place: "Sisters' Islands Marine Park, Singapore",
        facts: [
          "Singapore's first marine park, announced in 2014 and managed by the National Parks Board (NParks).",
          "Covers about 40 hectares around Big and Small Sister's Island and the western reefs of St John's Island and Pulau Tekukor.",
          "Singapore waters hold over 250 species of hard coral, about a third of the world's hard coral species.",
          "Around 60% of Singapore's original reef area has been lost, mainly through land reclamation.",
          "Offers guided intertidal walks and dive trails, and supports coral nurseries and restoration research.",
        ],
      },
      skill: "Reading a sketch map (compass direction, scale and annotation)",
    },
  ],

  mnemonics: [
    {
      topic: "Conditions for coral growth",
      device: "Corals Love Sunny Shallow Salty Seas (Clear, Light, Sunny/warm, Shallow, Salty, Sediment-free)",
      explanation:
        "Clear water; Light for the algae; Sunny and warm (23–29°C); Shallow (usually under ~50 m); Salty (normal salinity, away from river mouths); Sediment-free (low mud and pollution).",
    },
    {
      topic: "Darwin's three reef stages in order",
      device: "Fringe, Barrier, Atoll = F-B-A: 'Fish Become Adults'",
      explanation:
        "A Fringing reef around a volcanic island becomes a Barrier reef as the island sinks, then an Atoll when the island has disappeared.",
    },
    {
      topic: "Threats to reefs",
      device: "B-A-C-C-O-P-T: 'Big Angry Crabs Can Often Pinch Tourists'",
      explanation:
        "Bleaching, Acidification, Crown-of-thorns starfish, Cyclones, Overfishing (and destructive fishing), Pollution and run-off, Tourism damage.",
    },
    {
      topic: "Great Barrier Reef numbers",
      device: "'2,300 km, 3,000 reefs, '81, 33'",
      explanation:
        "About 2,300 km long, about 3,000 (2,900–3,000) reefs, World Heritage Site in 1981, green no-take zones about 33% of the Marine Park.",
    },
  ],

  examMistakes: [
    "Calling coral a plant or a rock. Coral is an animal (a colony of polyps) that lives in partnership with algae.",
    "Saying bleached coral is dead. Bleached coral has lost its algae and is starving; it can recover if temperatures drop quickly.",
    "Describing the distribution of reefs without data: say 'mostly between 30°N and 30°S' and name an example and an anomaly (TEA).",
    "Listing threats without explaining HOW they harm coral, e.g. write 'sediment blocks sunlight so the algae cannot photosynthesise', not just 'pollution'.",
    "Mixing up barrier reefs and atolls: a barrier reef is separated from land by a lagoon; an atoll is a ring around a lagoon with no central island.",
    "Writing about the Great Barrier Reef without named facts: quote 2,300 km, 1981, GBRMPA, 33% green zones or the bleaching years.",
    "Evaluating management one-sidedly: good answers say local measures work for local threats but cannot stop climate-driven heatwaves.",
    "Confusing ocean acidification with pollution: acidification is caused by CO2 dissolving in sea water and weakens skeletons; it is not caused by acid being dumped in the sea.",
  ],

  misconceptions: [
    {
      wrong: "Coral reefs are made of rock, and the coral is a kind of seaweed.",
      right: "Coral is an animal. Reefs are built from the calcium carbonate skeletons of millions of polyps, with algae living inside their tissues.",
    },
    {
      wrong: "White, bleached coral is dead coral.",
      right: "Bleached coral is alive but has expelled its algae. It can recover within months if the water cools; it dies only if the stress lasts too long.",
    },
    {
      wrong: "Reefs grow anywhere in the tropics.",
      right: "Reefs need warm, clear, shallow, salty water with little sediment. Tropical coasts with cold currents (Peru) or huge muddy rivers (the Amazon) have very few.",
    },
    {
      wrong: "Protecting the Great Barrier Reef just means stopping people fishing there.",
      right: "Fishing rules (zoning) help, but the reef also needs cleaner river water, starfish control, restoration and, above all, cuts in global greenhouse gas emissions.",
    },
    {
      wrong: "Singapore is too built-up and busy to have any real coral reefs.",
      right: "Singapore has over 250 species of hard coral on fringing reefs around the Southern Islands, protected in places by the Sisters' Islands Marine Park.",
    },
  ],

  expertDebates: [
    {
      question: "Can local management save coral reefs if global warming continues?",
      detail:
        "Some scientists argue that cleaner water, no-take zones and starfish control make reefs more resilient, buying time and helping them recover between heatwaves. Others point out that the Great Barrier Reef, one of the best-managed reefs in the world, still bleached five times between 2016 and 2024, so without deep cuts in emissions local action cannot stop decline. Most agree both are needed.",
    },
    {
      question: "Should the Great Barrier Reef be listed as 'World Heritage in Danger'?",
      detail:
        "UNESCO advisers have recommended an 'in danger' listing several times (for example in 2021 and 2023), arguing it would push faster climate action. The Australian government has lobbied against it, saying it is spending billions on protection and that the label could harm tourism. So far the reef has not been listed, but UNESCO keeps asking for progress reports.",
    },
    {
      question: "Is coral restoration worth the money, or a distraction?",
      detail:
        "Supporters say coral gardening, coral IVF and breeding heat-tolerant corals can rescue key reefs and buy time. Critics note that restoration covers tiny areas compared with a 2,300 km reef, costs a lot per square metre, and could give the impression that the problem is being 'fixed' while emissions keep rising. Many experts see restoration as a useful tool only alongside cutting emissions.",
    },
  ],

  realWorld: [
    {
      title: "Sisters' Islands dive trails",
      detail: "Singapore's first marine park runs guided intertidal walks and underwater trails so you can see local corals, giant clams and seahorses without damaging them.",
      emoji: "🤿",
    },
    {
      title: "Reef-safe sunscreen",
      detail: "Some sunscreen chemicals can harm coral larvae, so places such as Hawaii and Palau have banned certain ingredients. Mineral sunscreens and rash vests reduce the risk.",
      emoji: "🧴",
    },
    {
      title: "Seafood choices",
      detail: "Choosing sustainably caught fish (for example using a seafood guide) and avoiding live reef fish from cyanide fishing reduces pressure on reefs across South-East Asia.",
      emoji: "🐟",
    },
    {
      title: "Free coastal defence",
      detail: "A healthy reef can absorb up to about 97% of wave energy. Low-lying island nations such as the Maldives rely on reefs instead of costly seawalls like those at East Coast Park.",
      emoji: "🌊",
    },
    {
      title: "Medicines from the reef",
      detail: "Chemicals from reef sponges led to drugs for leukaemia and viral infections, and cone-snail venom produced a powerful painkiller. Losing reefs may mean losing future cures.",
      emoji: "💊",
    },
    {
      title: "Citizen science",
      detail: "Divers and snorkellers record bleaching and crown-of-thorns starfish sightings with apps and surveys such as Reef Check and the Eye on the Reef programme, helping scientists track reef health.",
      emoji: "📱",
    },
  ],

  flashcards: [
    { front: "Coral polyp", back: "A tiny soft-bodied animal (related to jellyfish) with tentacles around a mouth; thousands live together as a coral colony." },
    { front: "Zooxanthellae", back: "Microscopic algae living inside coral tissue. They photosynthesise and give the coral up to ~90% of its food and its colour." },
    { front: "Symbiosis", back: "A relationship in which two different living things live closely together and both benefit, e.g. coral and zooxanthellae." },
    { front: "What are coral skeletons made of?", back: "Calcium carbonate (limestone), taken from sea water." },
    { front: "Conditions for coral growth", back: "Warm water 23–29°C; shallow (usually under ~50 m); clear; sunlight; normal salinity; low sediment and pollution; mainly between ~30°N and 30°S." },
    { front: "Fringing reef", back: "A reef attached to or very close to the shore, with at most a narrow shallow channel. E.g. Red Sea, Singapore's Southern Islands." },
    { front: "Barrier reef", back: "A reef parallel to the coast but separated from it by a wide, deep lagoon. E.g. Great Barrier Reef, Belize Barrier Reef." },
    { front: "Atoll", back: "A ring-shaped reef around a central lagoon with no central island. E.g. the Maldives. Explained by Darwin's subsidence theory." },
    { front: "Darwin's subsidence theory", back: "(1842) A volcanic island slowly sinks while its coral grows upwards: fringing reef → barrier reef → atoll. Supported by 1952 Enewetak drilling (1,200+ m of coral on volcanic rock)." },
    { front: "Coral reef biodiversity figures", back: "Under 1% of the ocean floor, but about 25% of all marine species." },
    { front: "Coral bleaching", back: "When heat stress (e.g. a marine heatwave ~1°C above normal summer maximum for ~4 weeks) makes coral expel its algae and turn white. Can recover if heat ends quickly." },
    { front: "GBR mass bleaching years", back: "1998, 2002, 2016, 2017, 2020, 2022, 2024." },
    { front: "Ocean acidification", back: "Sea water becoming more acidic as it absorbs CO2 (pH ~8.2 → ~8.1). Makes it harder for corals to build calcium carbonate skeletons." },
    { front: "Crown-of-thorns starfish (COTS)", back: "A spiny starfish that eats coral polyps. Outbreaks are linked to nutrient run-off; on the GBR they are culled by injecting bile salts or vinegar." },
    { front: "Great Barrier Reef key facts", back: "About 2,300 km long; ~2,900–3,000 reefs; World Heritage Site 1981; managed by GBRMPA; green no-take zones ~33% since 2004; Reef 2050 Plan (2015)." },
    { front: "Sisters' Islands Marine Park", back: "Singapore's first marine park (2014), about 40 ha, managed by NParks. Singapore has 250+ hard coral species; ~60% of reef area lost to reclamation." },
  ],

  mustKnow: [
    "I can explain what coral is and the symbiotic relationship between polyps and zooxanthellae.",
    "I can list and explain the conditions corals need, with figures (23–29°C, under ~50 m, between ~30°N and 30°S).",
    "I can describe the global distribution of reefs using TEA, naming an anomaly.",
    "I can draw and explain fringing reef → barrier reef → atoll using Darwin's subsidence theory and the Enewetak evidence.",
    "I can explain why reefs are valuable for biodiversity, fisheries, tourism, coastal protection and medicines.",
    "I can explain how coral bleaching happens and list the GBR mass bleaching years.",
    "I can explain at least five threats to reefs and HOW each one harms coral.",
    "I can describe and evaluate how the Great Barrier Reef is managed (GBRMPA, zoning, Reef 2050, water quality, COTS culling, restoration).",
    "I can describe Singapore's reefs and the Sisters' Islands Marine Park with facts.",
    "I can write a PEEL paragraph evaluating whether reef management can succeed without tackling climate change.",
  ],

  videos: [
    {
      title: "Coral reefs: formation, conditions and types",
      channel: "Time for Geography",
      url: "https://www.youtube.com/results?search_query=time+for+geography+coral+reefs",
    },
    {
      title: "Coral reef ecosystems and threats",
      channel: "BBC Bitesize",
      url: "https://www.youtube.com/results?search_query=bbc+bitesize+coral+reefs+geography",
    },
    {
      title: "Great Barrier Reef case study: management and bleaching",
      channel: "Cool Geography",
      url: "https://www.youtube.com/results?search_query=great+barrier+reef+case+study+geography+management",
    },
    {
      title: "Darwin's theory of atoll formation",
      channel: "Geography Hub",
      url: "https://www.youtube.com/results?search_query=darwin+subsidence+theory+atoll+formation+geography",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "coral-quiz-mcq-1",
        question: "Which phrase BEST describes the relationship between a coral polyp and its zooxanthellae?",
        options: [
          "Parasitic: the algae feed on the coral and harm it",
          "Symbiotic: both the coral and the algae benefit",
          "Predator and prey: the coral eats the algae",
          "Competitive: they fight over sunlight",
        ],
        answerIndex: 1,
        hint: "Think about what each partner gives the other.",
        explanation:
          "It is symbiotic: the algae get shelter, CO2 and nutrients; the coral gets up to ~90% of its food from the algae's photosynthesis. 'Predator and prey' is tempting because coral does eat plankton, but it does not digest its zooxanthellae — it keeps them alive inside its tissue.",
        guideRef: "what-is-coral",
      },
      {
        id: "coral-quiz-mcq-2",
        question: "Which set of conditions would be BEST for reef-building corals?",
        options: [
          "18°C, 80 m deep, clear water, normal salinity",
          "27°C, 15 m deep, muddy water near a river mouth",
          "26°C, 15 m deep, clear water, normal salinity",
          "33°C, 5 m deep, clear water, normal salinity",
        ],
        answerIndex: 2,
        hint: "Check every condition — one bad condition rules a site out.",
        explanation:
          "26°C, 15 m, clear and salty meets every condition (23–29°C, shallow, clear, normal salinity). The 33°C option is tempting because it is shallow and clear, but 33°C is well above the range and would cause bleaching. 80 m is too deep and dark; muddy river water blocks light and lowers salinity.",
        guideRef: "growth-conditions",
      },
      {
        id: "coral-quiz-mcq-3",
        question: "According to Darwin's subsidence theory, in what order do reef types form as a volcanic island sinks?",
        options: [
          "Fringing reef → barrier reef → atoll",
          "Atoll → barrier reef → fringing reef",
          "Barrier reef → fringing reef → atoll",
          "Fringing reef → atoll → barrier reef",
        ],
        answerIndex: 0,
        hint: "Which type needs the island to have disappeared completely?",
        explanation:
          "The reef starts attached to the island (fringing), becomes separated by a lagoon as the island sinks (barrier), and is left as a ring when the island vanishes (atoll). Reversing the order is a common slip: an atoll cannot come first because it requires the island to have already sunk.",
        guideRef: "reef-types",
      },
      {
        id: "coral-quiz-mcq-4",
        question: "Which Great Barrier Reef strategy is aimed MAINLY at reducing farm run-off?",
        options: [
          "Expanding green no-take zones",
          "Culling crown-of-thorns starfish with injections",
          "Growing coral fragments in nurseries",
          "Paying farmers to use less fertiliser and replant riverbanks",
        ],
        answerIndex: 3,
        hint: "Run-off starts on land, not on the reef.",
        explanation:
          "Water-quality programmes help farmers cut fertiliser, pesticide and sediment at the source. COTS culling is tempting because outbreaks are linked to run-off, but culling removes starfish after an outbreak; it does nothing to reduce run-off itself.",
        guideRef: "gbr-management",
      },
    ],
    qa: [
      {
        id: "coral-quiz-qa-1",
        question: "Explain why coral bleaching happens. (3 marks)",
        marks: 3,
        hint: "Start with the cause, then what the coral does, then why it turns white.",
        modelAnswer:
          "Bleaching is caused by heat stress, for example a marine heatwave when the sea stays about 1°C above the normal summer maximum for around four weeks. The stressed coral expels the zooxanthellae algae that live in its tissue. Because the algae give coral its colour, the white calcium carbonate skeleton shows through the clear tissue, so the coral looks bleached; it is also starving because it has lost its main food source.",
        markScheme: [
          { point: "Cause: sea water too warm / marine heatwave / heat stress", keywords: ["heat", "warm", "temperature", "hot"] },
          { point: "Coral expels / loses its zooxanthellae algae", keywords: ["expel", "algae", "zooxanthellae", "lose", "lost"] },
          { point: "White skeleton shows through / algae gave colour / coral starves", keywords: ["white", "skeleton", "colour", "color", "starv", "food"] },
        ],
        commonError: "Saying the coral is dead. Bleached coral is alive but starving; it can recover if the water cools quickly.",
        guideRef: "bleaching-climate",
      },
      {
        id: "coral-quiz-qa-2",
        question: "Describe TWO physical conditions that reef-building corals need. Include a figure for each. (4 marks)",
        marks: 4,
        hint: "For each condition, name it AND give the number.",
        modelAnswer:
          "Corals need warm water, typically between 23°C and 29°C, which is why reefs are mostly found between about 30°N and 30°S. They also need shallow water, usually less than about 50 m deep, because the algae in their tissue need sunlight to photosynthesise and light fades with depth.",
        markScheme: [
          { point: "Names warm water as a condition", keywords: ["warm", "temperature", "hot"] },
          { point: "Gives a figure, e.g. 23–29°C", keywords: ["23", "29", "°c", "degrees"] },
          { point: "Names shallow / clear / sunny water as a condition", keywords: ["shallow", "depth", "deep", "light", "clear", "sun"] },
          { point: "Gives a figure, e.g. under 50 m or 30°N–30°S", keywords: ["50", "30", "metre", "latitude"] },
        ],
        commonError: "Naming conditions without any numbers, or giving salinity/sediment without explaining what level is needed.",
        guideRef: "growth-conditions",
      },
      {
        id: "coral-quiz-qa-3",
        question: "Explain TWO ways in which coral reefs are valuable to people. (4 marks)",
        marks: 4,
        hint: "State a value, then develop it with 'this means that…'.",
        modelAnswer:
          "First, reefs protect coastlines: the reef acts as a natural breakwater, absorbing up to about 97% of wave energy, which means less erosion and flooding on low islands such as the Maldives. Second, reefs support tourism: divers and snorkellers spend money on trips and hotels, so the Great Barrier Reef supports about 64,000 jobs and around A$6 billion a year for Australia's economy.",
        markScheme: [
          { point: "Identifies a first value (e.g. coastal protection, fisheries)", keywords: ["protect", "wave", "fish", "food", "coast"] },
          { point: "Explains the first value (how it helps people)", keywords: ["erosion", "flood", "breakwater", "protein", "income", "97"] },
          { point: "Identifies a second value (e.g. tourism, medicines)", keywords: ["touris", "medic", "drug", "div", "snorkel"] },
          { point: "Explains / supports the second value with detail", keywords: ["job", "money", "64,000", "billion", "cure", "econom"] },
        ],
        commonError: "Listing several values with no explanation. Two developed points score more than five bare words.",
        guideRef: "biodiversity-value",
      },
      {
        id: "coral-quiz-qa-4",
        question: "Describe how zoning helps to protect the Great Barrier Reef. (3 marks)",
        marks: 3,
        hint: "What happens in a green zone, and why does that help the rest of the reef?",
        modelAnswer:
          "The Great Barrier Reef Marine Park Authority divides the Marine Park into zones with different rules. Green zones are no-take areas where fishing and collecting are banned; since 2004 they cover about 33% of the park. Fish populations recover in green zones (studies find more and bigger coral trout there), and fish and larvae spill over into neighbouring fished zones, while other zones still allow fishing and tourism.",
        markScheme: [
          { point: "Park divided into zones with different rules / managed by GBRMPA", keywords: ["zone", "gbrmpa", "rules", "divid", "area"] },
          { point: "Green zones are no-take, about 33%", keywords: ["green", "no-take", "no take", "33", "ban"] },
          { point: "Effect: fish recover / spill over / reef more resilient", keywords: ["recover", "spill", "more fish", "trout", "resilien", "breed"] },
        ],
        commonError: "Saying zoning bans all fishing on the reef. Only green (and pink) zones are no-take; other zones allow some fishing.",
        guideRef: "gbr-management",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "coral-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "coral-mcq-p1-q01",
            question: "What kind of living thing is a coral?",
            options: ["A plant", "A type of seaweed", "An animal", "A fungus"],
            answerIndex: 2,
            hint: "It has a mouth and stinging tentacles.",
            explanation:
              "Coral is an animal: a colony of polyps related to jellyfish. 'Plant' is tempting because coral gets food from photosynthesis, but that is done by the algae living inside it, not by the coral itself.",
            guideRef: "what-is-coral",
          },
          {
            id: "coral-mcq-p1-q02",
            question: "What is the name of the microscopic algae that live inside coral polyps?",
            options: ["Zooxanthellae", "Zooplankton", "Phytoplankton", "Polyps"],
            answerIndex: 0,
            hint: "It begins with the same three letters as 'zoo'.",
            explanation:
              "Zooxanthellae are the algae living in coral tissue. Zooplankton is a tempting look-alike, but zooplankton are tiny drifting animals that polyps catch and eat at night.",
            guideRef: "what-is-coral",
          },
          {
            id: "coral-mcq-p1-q03",
            question: "What are the skeletons of reef-building corals made of?",
            options: ["Silica (sand)", "Basalt", "Bone (calcium phosphate)", "Calcium carbonate (limestone)"],
            answerIndex: 3,
            hint: "It is the same material as chalk and seashells.",
            explanation:
              "Hard corals build skeletons of calcium carbonate taken from sea water. Basalt is tempting because Darwin's atolls sit on it, but basalt is the volcanic rock underneath the reef, not the coral itself.",
            guideRef: "what-is-coral",
          },
          {
            id: "coral-mcq-p1-q04",
            question: "What is the typical range of water temperature in which reef-building corals grow best?",
            options: ["10–15°C", "23–29°C", "30–35°C", "15–20°C"],
            answerIndex: 1,
            hint: "Warm tropical sea, but not bath-water hot.",
            explanation:
              "Corals grow best at about 23–29°C. 30–35°C sounds 'tropical', but water that hot for weeks causes bleaching.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p1-q05",
            question: "Reef-building corals usually grow in water shallower than about…",
            options: ["5 m", "500 m", "50 m", "2,000 m"],
            answerIndex: 2,
            hint: "Below this depth there is too little light for the algae.",
            explanation:
              "Most reef growth is shallower than ~50 m because the algae need sunlight. 5 m is too strict: many reefs thrive at 10–30 m in clear water. Very deep 'cold-water corals' exist but do not build tropical reefs.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p1-q06",
            question: "Between which latitudes are most of the world's coral reefs found?",
            options: ["About 30°N and 30°S", "About 60°N and 60°S", "The Arctic and Antarctic Circles", "About 5°N and 5°S only"],
            answerIndex: 0,
            hint: "Think of the tropics plus a little extra on each side.",
            explanation:
              "Most reefs lie between about 30°N and 30°S where seas are warm. '5°N–5°S only' is too narrow: the Great Barrier Reef reaches about 24°S.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p1-q07",
            question: "Which type of reef runs parallel to the coast but is separated from it by a wide, deep lagoon?",
            options: ["Fringing reef", "Atoll", "Patch reef", "Barrier reef"],
            answerIndex: 3,
            hint: "Australia's most famous reef has this word in its name.",
            explanation:
              "A barrier reef is separated from the mainland by a wide lagoon. A fringing reef is tempting but it is attached to, or very close to, the shore.",
            guideRef: "reef-types",
          },
          {
            id: "coral-mcq-p1-q08",
            question: "Which type of reef is a ring of coral around a central lagoon, with no island in the middle?",
            options: ["Fringing reef", "Atoll", "Barrier reef", "Sea stack"],
            answerIndex: 1,
            hint: "The Maldives are made of these.",
            explanation:
              "An atoll is a ring-shaped reef around a lagoon. A barrier reef also has a lagoon, but there is still land (an island or mainland) inside it.",
            guideRef: "reef-types",
          },
          {
            id: "coral-mcq-p1-q09",
            question: "Approximately how long is the Great Barrier Reef?",
            options: ["230 km", "23,000 km", "2,300 km", "700 km"],
            answerIndex: 2,
            hint: "About the distance from Singapore to Bangkok and a bit more.",
            explanation:
              "The GBR stretches about 2,300 km along Queensland's coast. 23,000 km would be over half way round the world.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p1-q10",
            question: "In which year did the Great Barrier Reef become a UNESCO World Heritage Site?",
            options: ["1981", "1975", "2004", "2015"],
            answerIndex: 0,
            hint: "It was in the early 1980s.",
            explanation:
              "It was listed in 1981. 1975 is tempting: that is when the Great Barrier Reef Marine Park Authority was set up. 2004 was the rezoning; 2015 the Reef 2050 Plan.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p1-q11",
            question: "Roughly what proportion of the ocean floor do coral reefs cover?",
            options: ["About 25%", "About 10%", "About 50%", "Less than 1%"],
            answerIndex: 3,
            hint: "The surprise is how SMALL the area is.",
            explanation:
              "Reefs cover less than 1% of the ocean floor. 25% is the tempting distractor — that is the share of marine SPECIES that live on reefs, not the share of the area.",
            guideRef: "biodiversity-value",
          },
          {
            id: "coral-mcq-p1-q12",
            question: "Roughly what proportion of all marine species live on coral reefs?",
            options: ["Less than 1%", "About 25%", "About 75%", "About 5%"],
            answerIndex: 1,
            hint: "About one in four.",
            explanation:
              "About a quarter of marine species depend on reefs. Less than 1% is the reefs' share of ocean floor area, which is what makes the 25% so remarkable.",
            guideRef: "biodiversity-value",
          },
          {
            id: "coral-mcq-p1-q13",
            question: "What happens to coral during bleaching?",
            options: [
              "It expels the algae living in its tissue and turns white",
              "It is covered by white sand from storms",
              "It is poisoned by bleach from sewage",
              "Its skeleton dissolves completely",
            ],
            answerIndex: 0,
            hint: "The colour of coral comes from its partner.",
            explanation:
              "Heat-stressed coral expels its zooxanthellae, so the white skeleton shows through. Despite the name, bleaching has nothing to do with chemical bleach.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p1-q14",
            question: "Why are crown-of-thorns starfish a threat to coral reefs?",
            options: [
              "They block sunlight from reaching the coral",
              "They release acid that dissolves reefs",
              "They eat coral polyps",
              "They carry diseases to fish",
            ],
            answerIndex: 2,
            hint: "Think about what the starfish has for dinner.",
            explanation:
              "Crown-of-thorns starfish feed on coral polyps; an outbreak can strip a reef. Acid is a tempting distractor because of ocean acidification, but that is caused by CO2, not starfish.",
            guideRef: "local-threats",
          },
          {
            id: "coral-mcq-p1-q15",
            question: "On the Great Barrier Reef, what are 'green zones'?",
            options: [
              "Areas where only farming is allowed",
              "Areas planted with seagrass",
              "Areas reserved for shipping lanes",
              "No-take areas where fishing and collecting are banned",
            ],
            answerIndex: 3,
            hint: "Visitors may swim here, but may not take anything.",
            explanation:
              "Green zones (Marine National Park zones) are no-take: you can visit but not fish or collect. They are not about planting anything 'green'.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p1-q16",
            question: "In which year was Singapore's Sisters' Islands Marine Park created?",
            options: ["1981", "2014", "2004", "1965"],
            answerIndex: 1,
            hint: "It is Singapore's first marine park and is quite recent.",
            explanation:
              "The Sisters' Islands Marine Park was announced in 2014. 1981 is the GBR's World Heritage listing; 1965 is Singapore's independence.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-mcq-p1-q17",
            question: "About how many species of hard coral have been recorded in Singapore's waters?",
            options: ["About 25", "About 80", "Over 250", "Over 2,500"],
            answerIndex: 2,
            hint: "It is roughly a third of the world's hard coral species.",
            explanation:
              "Singapore has over 250 hard coral species, about a third of the world's total. 'About 25' underestimates how rich Singapore's reefs are thanks to its position near the Coral Triangle.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-mcq-p1-q18",
            question: "What causes ocean acidification?",
            options: [
              "The ocean absorbing carbon dioxide from the atmosphere",
              "Factories dumping acid directly into the sea",
              "Acid rain falling only on coral reefs",
              "Volcanoes erupting under reefs",
            ],
            answerIndex: 0,
            hint: "It is linked to the same gas that causes global warming.",
            explanation:
              "The sea absorbs about a quarter of the CO2 we emit; dissolved CO2 forms a weak acid. Dumping acid is tempting, but acidification is a global change caused by CO2, not by local pollution.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p1-q19",
            question: "What is the main damage done by blast fishing?",
            options: [
              "It makes the water too salty",
              "It removes all the sand from beaches",
              "It warms the water and causes bleaching",
              "It shatters the coral into rubble",
            ],
            answerIndex: 3,
            hint: "Blast = explosives.",
            explanation:
              "Explosives stun fish but smash the reef structure into rubble that takes decades to recover. Explosions do not warm the sea enough to cause bleaching.",
            guideRef: "local-threats",
          },
          {
            id: "coral-mcq-p1-q20",
            question: "A reef absorbs most of the energy of waves before they reach the shore. Which value of reefs does this describe?",
            options: ["Fisheries", "Coastal protection", "Medicines", "Tourism"],
            answerIndex: 1,
            hint: "What would happen to the beach without it?",
            explanation:
              "Absorbing wave energy (up to ~97%) protects coasts from erosion and flooding. Tourism is tempting because calm lagoons attract visitors, but the value described is protection.",
            guideRef: "biodiversity-value",
          },
        ],
      },
      {
        id: "coral-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          {
            id: "coral-mcq-p2-q01",
            question: "What does the coral polyp gain from its zooxanthellae?",
            options: [
              "A hard skeleton",
              "Most of its food, made by photosynthesis",
              "Protection from starfish",
              "Stinging cells for catching prey",
            ],
            answerIndex: 1,
            hint: "The algae have something the polyp lacks: the ability to use sunlight.",
            explanation:
              "The algae photosynthesise and pass up to ~90% of the sugars to the coral. The skeleton is tempting, but the polyp builds that itself from calcium carbonate in sea water.",
            guideRef: "what-is-coral",
          },
          {
            id: "coral-mcq-p2-q02",
            question: "Why are coral reefs usually absent opposite the mouths of large rivers?",
            options: [
              "Rivers make the water too warm",
              "Rivers bring too many fish that eat coral",
              "River water is too deep",
              "Fresh water lowers salinity and sediment blocks sunlight",
            ],
            answerIndex: 3,
            hint: "Think about what a big river pours into the sea.",
            explanation:
              "Rivers bring fresh water (lowering salinity) and sediment (making water murky and smothering polyps). 'Too warm' is tempting but river water is not usually warmer than tropical seas.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p2-q03",
            question: "Why are reef-building corals limited to shallow water?",
            options: [
              "Their algae need sunlight to photosynthesise",
              "Deep water is too salty",
              "Deep water has too many waves",
              "Polyps need to breathe air at the surface",
            ],
            answerIndex: 0,
            hint: "Light fades as you go deeper.",
            explanation:
              "Zooxanthellae need light, which fades with depth. 'Breathe air' is wrong: polyps take oxygen from the water; waves are actually strongest at the surface, not deep down.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p2-q04",
            question: "The coast of Peru lies in the tropics but has very few coral reefs. What is the main reason?",
            options: [
              "It is too close to the Equator",
              "The sea there is too shallow",
              "A cold ocean current keeps the water too cool",
              "There is too much sunlight",
            ],
            answerIndex: 2,
            hint: "Ocean currents carry warm or cold water along coasts.",
            explanation:
              "The cold Humboldt Current and upwelling of cold deep water keep Peru's sea well below 23°C. Being near the Equator would normally favour reefs, so that option makes no sense.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p2-q05",
            question: "In which year did Charles Darwin publish his theory of how atolls form?",
            options: ["1752", "1842", "1952", "1981"],
            answerIndex: 1,
            hint: "It was a few years after the Beagle voyage of the 1830s.",
            explanation:
              "Darwin published 'The Structure and Distribution of Coral Reefs' in 1842. 1952 is tempting: that is when drilling at Enewetak proved him right.",
            guideRef: "reef-types",
          },
          {
            id: "coral-mcq-p2-q06",
            question: "What did drilling on Enewetak Atoll in 1952 discover?",
            options: [
              "The atoll sits on a sandbank with no rock beneath",
              "The coral was only 10 m thick",
              "The atoll was formed by an earthquake",
              "Over 1,200 m of coral limestone on top of volcanic rock",
            ],
            answerIndex: 3,
            hint: "Darwin predicted a sunken volcano underneath.",
            explanation:
              "The drill passed through more than 1,200 m of coral before hitting volcanic basalt, showing the land had sunk while coral grew up. A thin 10 m layer would NOT support subsidence.",
            guideRef: "reef-types",
          },
          {
            id: "coral-mcq-p2-q07",
            question: "Which of these is a country made mainly of atolls?",
            options: ["The Maldives", "Singapore", "Australia", "Egypt"],
            answerIndex: 0,
            hint: "It is in the Indian Ocean, south-west of Sri Lanka.",
            explanation:
              "The Maldives is made of about 26 atolls. Australia has the Great Barrier Reef, but that is a barrier reef along a continent, not an atoll.",
            guideRef: "reef-types",
          },
          {
            id: "coral-mcq-p2-q08",
            question: "The reefs around Singapore's Southern Islands are mainly which type?",
            options: ["Atolls", "Barrier reefs", "Fringing reefs", "Deep-sea reefs"],
            answerIndex: 2,
            hint: "They grow right up to the islands' shores.",
            explanation:
              "Singapore's reefs are fringing reefs attached to the islands' shores. Barrier reefs need a wide, deep lagoon between reef and land, which Singapore's islands lack.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-mcq-p2-q09",
            question: "Which organisation manages the Great Barrier Reef Marine Park?",
            options: [
              "UNESCO",
              "The Great Barrier Reef Marine Park Authority (GBRMPA)",
              "The National Parks Board (NParks)",
              "The United Nations Security Council",
            ],
            answerIndex: 1,
            hint: "It is an Australian government body set up in 1975.",
            explanation:
              "GBRMPA manages the Marine Park. UNESCO is tempting because it lists the reef as World Heritage, but it does not manage it day to day. NParks manages Singapore's parks.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p2-q10",
            question: "About what percentage of the Great Barrier Reef Marine Park is covered by green no-take zones?",
            options: ["5%", "75%", "100%", "33%"],
            answerIndex: 3,
            hint: "Roughly one-third.",
            explanation:
              "Since 2004 about 33% is green zone. 5% is tempting because that was roughly the figure BEFORE the 2004 rezoning.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p2-q11",
            question: "In which year was the Great Barrier Reef Marine Park rezoned to greatly increase no-take green zones?",
            options: ["2004", "1981", "2016", "1998"],
            answerIndex: 0,
            hint: "Early in the 21st century.",
            explanation:
              "The 2004 rezoning raised green zones from under 5% to about 33%. 2016 and 1998 were mass bleaching years, not rezoning years.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p2-q12",
            question: "Which of these years was NOT a mass bleaching year on the Great Barrier Reef?",
            options: ["1998", "2016", "2012", "2022"],
            answerIndex: 2,
            hint: "The list is 1998, 2002, 2016, 2017, 2020, 2022, 2024.",
            explanation:
              "2012 was not a mass bleaching year. 1998, 2016 and 2022 all were. Remember the run of five events in eight years: 2016, 2017, 2020, 2022, 2024.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p2-q13",
            question: "How can fertiliser used on farms lead to an outbreak of crown-of-thorns starfish?",
            options: [
              "Fertiliser poisons the starfish's predators directly",
              "Nutrients feed plankton, so more starfish larvae survive",
              "Fertiliser makes the water warmer",
              "Starfish eat the fertiliser as food",
            ],
            answerIndex: 1,
            hint: "What do baby starfish larvae eat?",
            explanation:
              "Run-off nutrients cause plankton blooms; the starfish larvae feed on plankton, so far more survive. Warmer water is a bleaching cause, not the fertiliser link.",
            guideRef: "local-threats",
          },
          {
            id: "coral-mcq-p2-q14",
            question: "Why do some fishers squirt cyanide onto coral reefs?",
            options: [
              "To kill crown-of-thorns starfish",
              "To clean algae off the coral",
              "To protect coral from bleaching",
              "To stun fish so they can be caught alive for aquariums and restaurants",
            ],
            answerIndex: 3,
            hint: "The fish are worth more if they are still alive.",
            explanation:
              "Cyanide stuns fish for the live-fish trade, but it also kills coral. It is not a starfish control method — on the GBR, starfish are culled by injecting bile salts or vinegar.",
            guideRef: "local-threats",
          },
          {
            id: "coral-mcq-p2-q15",
            question: "Why is overfishing of parrotfish and other plant-eating fish harmful to reefs?",
            options: [
              "Seaweed is no longer grazed and overgrows the coral",
              "Parrotfish build the reef skeleton",
              "The water becomes too salty",
              "More sunlight reaches the coral",
            ],
            answerIndex: 0,
            hint: "What do herbivores eat?",
            explanation:
              "Plant-eating fish graze seaweed; without them, seaweed smothers coral and stops young corals settling. Parrotfish do NOT build skeletons — polyps do.",
            guideRef: "local-threats",
          },
          {
            id: "coral-mcq-p2-q16",
            question: "Roughly what proportion of Singapore's original reef area has been lost?",
            options: ["About 5%", "About 20%", "About 60%", "100%"],
            answerIndex: 2,
            hint: "More than half — but some reefs remain.",
            explanation:
              "About 60% has been lost, mainly to land reclamation. 100% is wrong: Singapore still has living reefs with over 250 hard coral species.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-mcq-p2-q17",
            question: "What has been the main cause of reef loss in Singapore?",
            options: ["Crown-of-thorns starfish", "Land reclamation", "Cyclones", "Blast fishing"],
            answerIndex: 1,
            hint: "Singapore's land area has grown by about a quarter since independence.",
            explanation:
              "Reclamation buried reefs and dredging stirred up sediment. Cyclones are tempting but Singapore lies too close to the Equator to be hit by them.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-mcq-p2-q18",
            question: "Which organisation manages Singapore's Sisters' Islands Marine Park?",
            options: ["GBRMPA", "UNESCO", "The Housing & Development Board (HDB)", "The National Parks Board (NParks)"],
            answerIndex: 3,
            hint: "The same agency looks after Sungei Buloh and the Botanic Gardens.",
            explanation:
              "NParks manages the Sisters' Islands Marine Park. GBRMPA is Australian and only manages the Great Barrier Reef Marine Park.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-mcq-p2-q19",
            question: "The Reef 2050 Long-Term Sustainability Plan was first published in which year?",
            options: ["2015", "2050", "1975", "2024"],
            answerIndex: 0,
            hint: "The '2050' is its target, not its start date.",
            explanation:
              "It was first published in 2015 to guide protection until 2050. Choosing 2050 confuses the plan's end-point with its launch.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p2-q20",
            question: "What is 'coral IVF'?",
            options: [
              "Injecting coral with vitamins",
              "Painting bleached coral to protect it from sunlight",
              "Collecting coral spawn, rearing the larvae and releasing them onto damaged reefs",
              "Moving whole reefs to cooler water by ship",
            ],
            answerIndex: 2,
            hint: "IVF is about helping new life begin.",
            explanation:
              "Coral IVF collects eggs and sperm during mass spawning, rears larvae and releases them on damaged reefs. Moving whole reefs is not practical; fragments may be replanted, but not entire reefs.",
            guideRef: "gbr-management",
          },
        ],
      },
      {
        id: "coral-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "coral-mcq-p3-q01",
            question: "Where does most of a healthy coral's colour come from?",
            options: [
              "Its calcium carbonate skeleton",
              "Sunlight reflecting off the water",
              "Sand trapped in its tentacles",
              "The zooxanthellae algae in its tissue",
            ],
            answerIndex: 3,
            hint: "When this is lost, the coral turns white.",
            explanation:
              "The algae's pigments give coral most of its colour. The skeleton is tempting, but the skeleton is white — that is why bleached coral looks white.",
            guideRef: "what-is-coral",
          },
          {
            id: "coral-mcq-p3-q02",
            question: "Coral polyps are most closely related to which animals?",
            options: ["Jellyfish and sea anemones", "Crabs and lobsters", "Fish and sharks", "Starfish and sea urchins"],
            answerIndex: 0,
            hint: "Their relatives also have stinging tentacles.",
            explanation:
              "Corals, jellyfish and anemones all have stinging tentacles around a central mouth. Starfish are tempting because they live on reefs, but they are a completely different group.",
            guideRef: "what-is-coral",
          },
          {
            id: "coral-mcq-p3-q03",
            question: "At night, many coral polyps extend their tentacles to catch…",
            options: ["Sea turtles", "Seaweed", "Zooplankton", "Sunlight"],
            answerIndex: 2,
            hint: "Tiny drifting animals.",
            explanation:
              "Polyps use stinging tentacles to catch zooplankton, adding to the food from their algae. They do not eat seaweed, and sunlight is no use at night.",
            guideRef: "what-is-coral",
          },
          {
            id: "coral-mcq-p3-q04",
            question: "Bermuda, at about 32°N, has coral reefs even though it is outside the usual reef zone. What is the best explanation?",
            options: [
              "It is very close to a huge river mouth",
              "The warm Gulf Stream current keeps its sea warm enough",
              "The water around Bermuda is very deep",
              "Bermuda has a cold current flowing past it",
            ],
            answerIndex: 1,
            hint: "Bermuda lies in the western Atlantic.",
            explanation:
              "The warm Gulf Stream carries tropical water north, so Bermuda is an anomaly in the global pattern. A cold current would have the opposite effect.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p3-q05",
            question: "Which group of countries lies in the Coral Triangle, the region with the most coral species on Earth?",
            options: [
              "Egypt, Saudi Arabia and Sudan",
              "Belize, Mexico and Honduras",
              "Australia, New Zealand and Fiji",
              "Indonesia, the Philippines, Malaysia and Papua New Guinea",
            ],
            answerIndex: 3,
            hint: "It is in South-East Asia, close to Singapore.",
            explanation:
              "The Coral Triangle covers Indonesia, Malaysia, the Philippines, Papua New Guinea, Timor-Leste and the Solomon Islands. Australia is tempting because of the GBR, but it lies outside the Triangle.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p3-q06",
            question: "When describing a distribution, what does 'TEA' stand for?",
            options: ["Trend, Example, Anomaly", "Temperature, Equator, Area", "Type, Effect, Answer", "Trend, Explain, Assess"],
            answerIndex: 0,
            hint: "You need the overall pattern, a named case and an exception.",
            explanation:
              "Trend (overall pattern), Example (named place), Anomaly (exception). 'Trend, Explain, Assess' is tempting, but describing a distribution does not require explaining it.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p3-q07",
            question: "What is a lagoon?",
            options: [
              "A deep ocean trench beside a reef",
              "A river flowing into a reef",
              "A sheltered area of calm, shallow water between a reef and the land (or inside an atoll)",
              "A hole drilled to test Darwin's theory",
            ],
            answerIndex: 2,
            hint: "The reef protects it from big waves.",
            explanation:
              "A lagoon is calm water enclosed or sheltered by a reef. It is not a trench — lagoons are much shallower than the open ocean outside the reef.",
            guideRef: "reef-types",
          },
          {
            id: "coral-mcq-p3-q08",
            question: "In Darwin's theory, why does the volcanic island slowly sink?",
            options: [
              "Waves erode it from the bottom upwards",
              "The ocean floor cools and the heavy volcano presses it down",
              "Coral eats away the rock",
              "Sea level falls",
            ],
            answerIndex: 1,
            hint: "It is called subsidence.",
            explanation:
              "As the extinct volcano's crust cools it contracts, and the volcano's weight pushes the sea bed down. Falling sea level would make the island look HIGHER, not sink it.",
            guideRef: "reef-types",
          },
          {
            id: "coral-mcq-p3-q09",
            question: "A Pacific island has a volcanic peak in the middle and a reef 5 km offshore, separated from it by a deep lagoon. Which stage of Darwin's sequence is it?",
            options: ["Fringing reef", "Atoll", "Patch reef", "Barrier reef"],
            answerIndex: 3,
            hint: "There is still an island, but the reef is no longer attached.",
            explanation:
              "Island still present + reef separated by a lagoon = barrier reef. It is not yet an atoll because the island has not completely disappeared.",
            guideRef: "reef-types",
          },
          {
            id: "coral-mcq-p3-q10",
            question: "Up to roughly how much of the energy of incoming waves can a healthy reef absorb?",
            options: ["97%", "50%", "10%", "25%"],
            answerIndex: 0,
            hint: "Almost all of it.",
            explanation:
              "Studies show reefs can absorb up to about 97% of wave energy, making them excellent natural breakwaters. 25% is tempting because it is the share of marine species on reefs.",
            guideRef: "biodiversity-value",
          },
          {
            id: "coral-mcq-p3-q11",
            question: "Which of these is an example of reefs providing medicines?",
            options: [
              "Tourists buying souvenirs made from coral",
              "Coral sand used to make cement",
              "Chemicals from a Caribbean sponge leading to drugs against leukaemia and viruses",
              "Fishers selling reef fish at markets",
            ],
            answerIndex: 2,
            hint: "Look for a living thing that makes unusual chemicals.",
            explanation:
              "Sponge compounds inspired anti-cancer and anti-viral drugs. Selling fish is a fisheries value, and coral souvenirs actually damage reefs.",
            guideRef: "biodiversity-value",
          },
          {
            id: "coral-mcq-p3-q12",
            question: "About how many jobs does the Great Barrier Reef support?",
            options: ["About 640", "About 64,000", "About 6.4 million", "About 6,400"],
            answerIndex: 1,
            hint: "Tens of thousands.",
            explanation:
              "About 64,000 jobs, mostly in tourism. 6.4 million would be roughly a quarter of all Australians — far too many.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p3-q13",
            question: "Roughly what level of heat stress can trigger coral bleaching?",
            options: [
              "One very hot afternoon",
              "Sea 10°C above normal for one day",
              "Sea 0.1°C above normal for a year",
              "Sea about 1°C above the normal summer maximum for about four weeks",
            ],
            answerIndex: 3,
            hint: "A small rise, but held for a while.",
            explanation:
              "About 1°C above the usual summer maximum for around four weeks can cause bleaching. One hot afternoon is too short — it is the duration of heat that matters.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p3-q14",
            question: "Roughly what proportion of the Great Barrier Reef's shallow-water coral died in the 2016 bleaching event?",
            options: ["About 30%", "About 3%", "About 90%", "None — it all recovered"],
            answerIndex: 0,
            hint: "Close to a third.",
            explanation:
              "About 30% of shallow-water corals died, mostly in the northern section. 'None' is wrong: bleaching was too long and severe for full recovery that year.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p3-q15",
            question: "How long does a reef typically need to recover after a severe bleaching event?",
            options: ["About 1–2 weeks", "About 1 year", "About 10–15 years", "About 1,000 years"],
            answerIndex: 2,
            hint: "Corals grow slowly, but not THAT slowly.",
            explanation:
              "Recovery generally takes 10–15 years. This is why bleaching every 2–4 years is so worrying — reefs do not get time to recover.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p3-q16",
            question: "How has the average pH of the ocean surface changed since the Industrial Revolution?",
            options: ["Risen from about 7.0 to 8.0", "Fallen from about 8.2 to 8.1", "Fallen from about 8.2 to 4.0", "Not changed at all"],
            answerIndex: 1,
            hint: "A small change on the pH scale, but a big one for corals.",
            explanation:
              "Surface pH has fallen from about 8.2 to 8.1 — about a 30% increase in acidity, because the pH scale is logarithmic. A fall to 4.0 would be as acidic as fizzy drinks: far too extreme.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p3-q17",
            question: "How does ocean acidification harm coral?",
            options: [
              "It makes the water too cold",
              "It causes crown-of-thorns outbreaks",
              "It increases salinity",
              "It makes it harder for corals to build calcium carbonate skeletons",
            ],
            answerIndex: 3,
            hint: "Think about what acid does to chalk.",
            explanation:
              "More acidic water reduces the carbonate available, so corals build skeletons more slowly and they become brittle. Starfish outbreaks are linked to nutrient run-off, not acidification.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p3-q18",
            question: "How are crown-of-thorns starfish culled on the Great Barrier Reef?",
            options: [
              "Divers inject each starfish with bile salts or vinegar",
              "Boats spray pesticide over the reef",
              "Starfish are cut in half by divers",
              "Nets are dragged across the reef",
            ],
            answerIndex: 0,
            hint: "One shot per starfish.",
            explanation:
              "A single injection of bile salts or vinegar kills a starfish. Cutting them up is tempting but useless — starfish can regenerate from pieces. Pesticides and nets would harm the whole reef.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p3-q19",
            question: "In which Great Barrier Reef zone is only limited fishing allowed (for example, one line and one hook)?",
            options: ["Green zone", "Pink zone", "Yellow zone", "Blue zone"],
            answerIndex: 2,
            hint: "It sits between 'no-take' and 'general use' in strictness.",
            explanation:
              "Yellow (Conservation Park) zones allow limited fishing. Green zones are no-take; blue zones allow more fishing but no trawling.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p3-q20",
            question: "Roughly how large is the Sisters' Islands Marine Park?",
            options: ["About 4 km²", "About 40 hectares", "About 344,000 km²", "About 2,300 km long"],
            answerIndex: 1,
            hint: "It is small — roughly the size of 50 football pitches.",
            explanation:
              "It covers about 40 hectares (0.4 km²). 344,000 km² is roughly the size of the whole Great Barrier Reef Marine Park.",
            guideRef: "singapore-reefs",
          },
        ],
      },
      {
        id: "coral-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "coral-mcq-p4-q01",
            question:
              "Four survey sites: A — 31°C, 10 m deep, clear; B — 25°C, 70 m deep, clear; C — 26°C, 12 m deep, clear, normal salinity; D — 26°C, 8 m deep, beside a muddy river mouth. Which site is MOST likely to have a thriving reef?",
            options: ["Site A", "Site B", "Site C", "Site D"],
            answerIndex: 2,
            hint: "Test each site against every condition; one failure rules it out.",
            explanation:
              "Site C meets all conditions. Site D is tempting (warm and shallow) but muddy, fresher river water blocks light and lowers salinity. A is too hot; B is too deep and dark.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p4-q02",
            question: "Coral cover on a reef fell from 40% to 28% after a heatwave. What is the percentage decrease in coral cover?",
            options: ["30%", "12%", "28%", "70%"],
            answerIndex: 0,
            hint: "Percentage change = (change ÷ original) × 100.",
            explanation:
              "Change = 40 − 28 = 12; 12 ÷ 40 × 100 = 30%. 12% is the tempting wrong answer: it is the drop in percentage POINTS, not the percentage decrease.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p4-q03",
            question: "The Great Barrier Reef Marine Park covers about 344,000 km² and about 33% of it is green zone. Approximately how large is the green-zone area?",
            options: ["About 11,000 km²", "About 33,000 km²", "About 1,000,000 km²", "About 114,000 km²"],
            answerIndex: 3,
            hint: "Find a third of 344,000.",
            explanation:
              "0.33 × 344,000 ≈ 113,500, so about 114,000 km². 33,000 km² is what you get if you mistakenly take about 10% instead of 33%.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p4-q04",
            question: "If Enewetak's 1,200 m of coral grew at an average of 1 mm per year, roughly how long did it take to form?",
            options: ["1,200 years", "1.2 million years", "12,000 years", "120 million years"],
            answerIndex: 1,
            hint: "Convert metres to millimetres first.",
            explanation:
              "1,200 m = 1,200,000 mm; at 1 mm per year that is 1.2 million years. 1,200 years forgets to convert metres to millimetres.",
            guideRef: "reef-types",
          },
          {
            id: "coral-mcq-p4-q05",
            question: "GBR mass bleaching years: 1998, 2002, 2016, 2017, 2020, 2022, 2024. Which statement BEST describes the pattern?",
            options: [
              "Bleaching happens exactly every four years",
              "Bleaching is becoming less frequent",
              "Events have become more frequent: five in the eight years from 2016 to 2024",
              "There is no pattern at all",
            ],
            answerIndex: 2,
            hint: "Compare the gaps early in the record with the gaps recently.",
            explanation:
              "The early gap was 4 years (1998–2002), then a long gap, then five events in 2016–2024 with gaps of only 1–2 years. 'Every four years' fits only the first pair.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p4-q06",
            question: "In 2016 the northern Great Barrier Reef bleached far more severely than the southern section. What is the most likely reason?",
            options: [
              "The marine heatwave was most intense and longest-lasting in the north",
              "There are no corals in the southern section",
              "The north has more green zones",
              "Crown-of-thorns starfish ate the bleached coral in the south",
            ],
            answerIndex: 0,
            hint: "Bleaching depends on how hot the water gets and for how long.",
            explanation:
              "The severity of bleaching tracks heat stress, which was greatest in the north in 2016 (the south was partly cooled by stormy weather). More green zones cannot prevent heat stress, so that option is wrong.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p4-q07",
            question: "Which action tackles the ROOT CAUSE of mass coral bleaching?",
            options: [
              "Culling crown-of-thorns starfish",
              "Banning fishing in green zones",
              "Replanting coral fragments from nurseries",
              "Cutting global greenhouse gas emissions",
            ],
            answerIndex: 3,
            hint: "Bleaching is driven by rising sea temperatures — what drives those?",
            explanation:
              "Mass bleaching is driven by marine heatwaves made more frequent by climate change, so cutting greenhouse gas emissions targets the cause. Replanting coral is tempting but it repairs damage rather than stopping heatwaves.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p4-q08",
            question: "How can green no-take zones benefit fishers who fish OUTSIDE them?",
            options: [
              "Fishers are paid to stay out of green zones",
              "Fish and larvae from protected areas spill over into fished areas",
              "Green zones make the water cooler",
              "Green zones stop cyclones",
            ],
            answerIndex: 1,
            hint: "Fish and their eggs do not respect lines on a map.",
            explanation:
              "Protected fish grow bigger and breed more; adults and larvae drift into fished zones ('spillover'). Green zones cannot change water temperature or stop cyclones.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p4-q09",
            question: "In reef science, what does 'resilience' mean?",
            options: [
              "How hard the coral skeleton is",
              "How quickly a reef grows upwards",
              "A reef's ability to resist damage and recover afterwards",
              "How many tourists a reef can hold",
            ],
            answerIndex: 2,
            hint: "Think about bouncing back.",
            explanation:
              "Resilience is the ability to withstand and recover from disturbances such as bleaching or cyclones. Skeleton hardness is only one small part of it.",
            guideRef: "local-threats",
          },
          {
            id: "coral-mcq-p4-q10",
            question: "Which statement gives the BEST evaluation of crown-of-thorns starfish culling?",
            options: [
              "It protects high-value reefs, but it is costly, cannot cover all 3,000 reefs, and does not tackle run-off that causes outbreaks",
              "It is the only action needed to save the Great Barrier Reef",
              "It is pointless because starfish do no harm",
              "It works best because it also stops bleaching",
            ],
            answerIndex: 0,
            hint: "A good evaluation has both strengths and limitations.",
            explanation:
              "Culling works locally but treats the symptom, not the cause, and cannot reach every reef. 'Only action needed' ignores bleaching and water quality; culling has no effect on heat stress.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p4-q11",
            question: "Hong Kong (about 22°N) has over 80 species of hard coral but no true coral reefs. Which is the most likely explanation?",
            options: [
              "It is too close to the Equator",
              "Its water is too clear and deep",
              "It lies in the middle of the Coral Triangle",
              "Winter sea temperatures fall low and the Pearl River brings fresh, muddy water",
            ],
            answerIndex: 3,
            hint: "Corals can survive there, but they cannot grow fast enough to build a reef.",
            explanation:
              "Cool winter seas and fresh, sediment-laden water from the nearby Pearl River slow coral growth too much for reefs to build up. Hong Kong is north of the Coral Triangle, so that option is wrong.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p4-q12",
            question: "Why are there more coral reefs on the EASTERN sides of continents in the tropics?",
            options: [
              "Eastern coasts have more rivers",
              "Eastern coasts get less sunlight",
              "Warm ocean currents flow along eastern coasts, while western coasts often have cold currents",
              "Western coasts are too shallow",
            ],
            answerIndex: 2,
            hint: "Compare north-east Australia with Peru or Namibia.",
            explanation:
              "Warm currents (e.g. the East Australian Current) keep eastern coasts warm; cold currents and upwelling cool western coasts. More rivers would REDUCE reefs, not increase them.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-mcq-p4-q13",
            question: "Which PAIR are both global threats linked to rising carbon dioxide levels?",
            options: [
              "Blast fishing and tourism",
              "Coral bleaching and ocean acidification",
              "Crown-of-thorns starfish and land reclamation",
              "Cyanide fishing and sewage",
            ],
            answerIndex: 1,
            hint: "One is about heat, the other about chemistry.",
            explanation:
              "CO2 warms the planet (driving bleaching) and dissolves in the sea (driving acidification). Starfish and reclamation are local threats that local managers can control.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p4-q14",
            question: "Which statement about bleached coral is TRUE?",
            options: [
              "It is still alive and can recover if the water cools quickly",
              "It is always dead",
              "It has been painted white by sediment",
              "It grows faster than normal coral",
            ],
            answerIndex: 0,
            hint: "Think about the difference between 'starving' and 'dead'.",
            explanation:
              "Bleached coral has lost its algae but is alive; if temperatures fall soon, algae return. 'Always dead' is the classic misconception.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-mcq-p4-q15",
            question: "Why do most of Singapore's corals live in only the top few metres of water?",
            options: [
              "The deeper water is too warm",
              "Divers have removed the deeper corals",
              "The sea floor is only a few metres deep everywhere",
              "Sediment makes the water murky, so light does not reach far down",
            ],
            answerIndex: 3,
            hint: "Visibility in Singapore's sea is often only 2–3 m.",
            explanation:
              "Sediment from dredging, reclamation and shipping reduces light penetration, so the algae can only photosynthesise near the surface. Deeper water is cooler, not warmer.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-mcq-p4-q16",
            question: "Which tourist behaviour does the MOST to reduce damage to a reef?",
            options: [
              "Taking a small piece of coral home as a souvenir",
              "Standing on coral to rest while snorkelling",
              "Following no-touch rules and choosing operators that use fixed moorings instead of anchors",
              "Feeding the fish with bread",
            ],
            answerIndex: 2,
            hint: "Which option avoids physical contact and anchor damage?",
            explanation:
              "No-touch rules and mooring buoys prevent breakage. Feeding fish seems kind, but it changes their behaviour and adds nutrients to the water.",
            guideRef: "local-threats",
          },
          {
            id: "coral-mcq-p4-q17",
            question: "Why would losing their reefs put the Maldives at particular risk of flooding?",
            options: [
              "The reefs supply all of the Maldives' drinking water",
              "The islands are very low and the reefs break waves before they reach the shore",
              "Reefs stop the islands from floating away",
              "Reefs cause the monsoon rains",
            ],
            answerIndex: 1,
            hint: "Most Maldivian land is only about 1 m above sea level.",
            explanation:
              "The low islands depend on reefs to absorb wave energy and supply the sand that builds them. Reefs do not supply drinking water or control monsoons.",
            guideRef: "biodiversity-value",
          },
          {
            id: "coral-mcq-p4-q18",
            question: "A student writes: 'Darwin's subsidence theory explains every reef in the world.' What is the best response?",
            options: [
              "Subsidence explains many atolls, but sea-level changes during ice ages and other factors also shaped reefs",
              "It is completely correct",
              "Darwin's theory has been proven entirely false",
              "Reefs are formed only by earthquakes",
            ],
            answerIndex: 0,
            hint: "Was the theory supported? Is it the WHOLE story?",
            explanation:
              "Enewetak drilling supported subsidence, but rising and falling sea levels also shaped reefs, and many fringing reefs grow on stable coasts. 'Proven entirely false' contradicts the 1952 evidence.",
            guideRef: "reef-types",
          },
          {
            id: "coral-mcq-p4-q19",
            question: "Which evidence would BEST show that green zones are working?",
            options: [
              "The number of tourists visiting green zones",
              "The amount of money spent creating green zones",
              "Sea temperatures in green zones",
              "More and bigger coral trout in green zones than in nearby fished zones",
            ],
            answerIndex: 3,
            hint: "What are green zones meant to protect?",
            explanation:
              "Comparing fish numbers and sizes inside and outside green zones measures their effect. Money spent shows effort, not results; temperature is not changed by zoning.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-mcq-p4-q20",
            question: "In 2024 scientists confirmed a global coral bleaching event affecting reefs in over 50 countries. Which global event was it?",
            options: ["The first", "The second", "The fourth", "The tenth"],
            answerIndex: 2,
            hint: "Previous global events occurred in 1998, 2010 and 2014–2017.",
            explanation:
              "Following 1998, 2010 and 2014–2017, the 2023–2024 event was the fourth global bleaching event. 'The first' ignores the earlier events in the record.",
            guideRef: "bleaching-climate",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "coral-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "coral-qa-p1-q01",
            question: "What is a coral polyp? (2 marks)",
            marks: 2,
            hint: "Say what kind of living thing it is and describe it briefly.",
            modelAnswer:
              "A coral polyp is a tiny soft-bodied animal, related to jellyfish and sea anemones. It has a tube-shaped body with a mouth surrounded by stinging tentacles, and thousands of polyps live together in a coral colony.",
            markScheme: [
              { point: "A small / soft-bodied animal (related to jellyfish)", keywords: ["animal", "jellyfish", "anemone", "creature"] },
              { point: "Description: mouth / tentacles / lives in colonies", keywords: ["tentacle", "mouth", "colon", "sting"] },
            ],
            commonError: "Calling a polyp a plant or a rock.",
            guideRef: "what-is-coral",
          },
          {
            id: "coral-qa-p1-q02",
            question: "Using coral as an example, explain what is meant by a symbiotic relationship. (3 marks)",
            marks: 3,
            hint: "Define the term, then say what EACH partner gets.",
            modelAnswer:
              "A symbiotic relationship is one where two different organisms live closely together and both benefit. In coral, the zooxanthellae algae photosynthesise and give the polyp up to about 90% of its food. In return the coral gives the algae a safe home in its tissue, plus carbon dioxide and nutrients from its waste.",
            markScheme: [
              { point: "Definition: two organisms living together, both benefit", keywords: ["both benefit", "both", "mutual", "each other", "together"] },
              { point: "Algae give the coral food / sugars from photosynthesis", keywords: ["food", "sugar", "photosynth", "energy", "90"] },
              { point: "Coral gives algae shelter / home / CO2 / nutrients", keywords: ["shelter", "home", "protect", "carbon dioxide", "co2", "nutrient"] },
            ],
            commonError: "Explaining only what the coral gets. Both sides of the partnership are needed for full marks.",
            guideRef: "what-is-coral",
          },
          {
            id: "coral-qa-p1-q03",
            question: "State THREE conditions that reef-building corals need to grow. (3 marks)",
            marks: 3,
            hint: "Think about temperature, light and what the water is like.",
            modelAnswer:
              "Corals need warm water of about 23–29°C; shallow, clear water (usually less than about 50 m deep) so that sunlight reaches the algae; and normal salinity with little sediment, so not too close to river mouths.",
            markScheme: [
              { point: "Warm water (23–29°C)", keywords: ["warm", "23", "29", "temperature"] },
              { point: "Shallow / sunlit water (under ~50 m)", keywords: ["shallow", "50", "sunlight", "light", "sun"] },
              { point: "Clear water / low sediment / normal salinity", keywords: ["clear", "sediment", "salin", "salt", "mud", "pollut"] },
            ],
            commonError: "Writing 'warm and sunny' as one condition and stopping, or giving the same idea three times.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-qa-p1-q04",
            question: "Describe a fringing reef and name an example. (2 marks)",
            marks: 2,
            hint: "Where is it compared with the shore?",
            modelAnswer:
              "A fringing reef grows close to the shore, attached to the coast or separated only by a narrow, shallow channel. Examples include the reefs around Singapore's Southern Islands, such as Pulau Hantu, and the Red Sea coast of Egypt.",
            markScheme: [
              { point: "Attached to / very close to the shore", keywords: ["close", "attached", "shore", "coast", "near", "narrow"] },
              { point: "Named example", keywords: ["red sea", "singapore", "hantu", "sisters", "egypt", "semakau"] },
            ],
            commonError: "Naming the Great Barrier Reef as a fringing reef — it is a barrier reef.",
            guideRef: "reef-types",
          },
          {
            id: "coral-qa-p1-q05",
            question: "Describe what an atoll is. (2 marks)",
            marks: 2,
            hint: "Describe its shape and what is in the middle.",
            modelAnswer:
              "An atoll is a ring-shaped (or horseshoe-shaped) coral reef surrounding a central lagoon, with no central island left, for example the atolls of the Maldives.",
            markScheme: [
              { point: "Ring / circular / horseshoe-shaped reef", keywords: ["ring", "circle", "circular", "horseshoe", "round"] },
              { point: "Around a central lagoon / no island in the middle", keywords: ["lagoon", "no island", "middle", "centre", "center"] },
            ],
            commonError: "Forgetting to mention the lagoon, which is what distinguishes an atoll.",
            guideRef: "reef-types",
          },
          {
            id: "coral-qa-p1-q06",
            question: "Explain why coral reefs are often called the 'rainforests of the sea'. (3 marks)",
            marks: 3,
            hint: "Use the two famous percentages, then explain WHY.",
            modelAnswer:
              "Like tropical rainforests, reefs have extremely high biodiversity. They cover less than 1% of the ocean floor but support about 25% of all marine species. This is because the reef's complex 3-D structure provides many habitats and hiding places, and the warm, sunny, clear water allows food to be produced all year.",
            markScheme: [
              { point: "Very high biodiversity / many species", keywords: ["biodivers", "species", "variety", "many"] },
              { point: "Quotes figures: under 1% of ocean floor, ~25% of marine species", keywords: ["25", "1%", "quarter", "less than 1"] },
              { point: "Reason: many habitats / complex structure / food all year", keywords: ["habitat", "hid", "shelter", "structure", "all year", "food"] },
            ],
            commonError: "Saying reefs are like rainforests because they are green or full of plants.",
            guideRef: "biodiversity-value",
          },
          {
            id: "coral-qa-p1-q07",
            question: "State TWO facts about the size of the Great Barrier Reef. (2 marks)",
            marks: 2,
            hint: "Think about its length and how many reefs it is made of.",
            modelAnswer:
              "The Great Barrier Reef is about 2,300 km long and is made up of about 2,900–3,000 individual reefs (plus around 900 islands).",
            markScheme: [
              { point: "About 2,300 km long", keywords: ["2,300", "2300", "2 300"] },
              { point: "About 2,900–3,000 reefs / 900 islands / visible from space", keywords: ["2,900", "3,000", "2900", "3000", "900", "space"] },
            ],
            commonError: "Giving vague answers such as 'very big' with no figures.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p1-q08",
            question: "Explain how sediment from rivers can harm coral. (3 marks)",
            marks: 3,
            hint: "Think about light, and about what happens when mud settles.",
            modelAnswer:
              "Sediment makes the water cloudy (turbid), so less sunlight reaches the coral. The zooxanthellae therefore cannot photosynthesise as much, so the coral gets less food. Sediment can also settle on the polyps and smother them.",
            markScheme: [
              { point: "Water becomes cloudy / murky / turbid", keywords: ["cloud", "murk", "turbid", "dirty", "visib"] },
              { point: "Less light, so algae photosynthesise less / less food", keywords: ["light", "photosynth", "food", "sun"] },
              { point: "Sediment settles on and smothers / buries polyps", keywords: ["smother", "settle", "bur", "cover", "block"] },
            ],
            commonError: "Writing only 'it pollutes the water' without explaining the effect on light or polyps.",
            guideRef: "local-threats",
          },
          {
            id: "coral-qa-p1-q09",
            question: "Describe TWO ways in which tourists can damage coral reefs. (2 marks)",
            marks: 2,
            hint: "Think about what people do in and on the water.",
            modelAnswer:
              "Divers and snorkellers can break coral by touching, kicking or standing on it. Boats can drop anchors that smash coral, and some tourists collect coral as souvenirs.",
            markScheme: [
              { point: "Physical damage by touching / standing / kicking coral", keywords: ["touch", "stand", "kick", "step", "break", "fin"] },
              { point: "A second way: anchors / souvenirs / sunscreen / resorts", keywords: ["anchor", "souvenir", "sunscreen", "resort", "hotel", "collect"] },
            ],
            commonError: "Giving the same idea twice (e.g. 'touching coral' and 'standing on coral').",
            guideRef: "local-threats",
          },
          {
            id: "coral-qa-p1-q10",
            question: "Explain how overfishing can damage a coral reef. (3 marks)",
            marks: 3,
            hint: "Think about which fish eat seaweed.",
            modelAnswer:
              "Overfishing removes plant-eating fish such as parrotfish. Without them, seaweed (algae) is not grazed and grows quickly. The seaweed overgrows and smothers the coral and stops young corals settling, so the reef declines.",
            markScheme: [
              { point: "Removes plant-eating fish (e.g. parrotfish) / upsets food web", keywords: ["parrotfish", "herbivor", "plant-eat", "grazer", "food web", "predator"] },
              { point: "Seaweed / algae grows unchecked", keywords: ["seaweed", "algae", "weed", "overgrow"] },
              { point: "Coral is smothered / outcompeted / young corals cannot settle", keywords: ["smother", "outcompet", "settl", "cover", "die", "crowd"] },
            ],
            commonError: "Saying overfishing harms reefs because 'there are fewer fish' without explaining the knock-on effect on coral.",
            guideRef: "local-threats",
          },
          {
            id: "coral-qa-p1-q11",
            question: "In which year did the Great Barrier Reef become a World Heritage Site, and which organisation manages the Marine Park? (2 marks)",
            marks: 2,
            hint: "One date, one organisation.",
            modelAnswer:
              "The Great Barrier Reef became a UNESCO World Heritage Site in 1981. The Marine Park is managed by the Great Barrier Reef Marine Park Authority (GBRMPA).",
            markScheme: [
              { point: "1981", keywords: ["1981", "eighty-one", "early 1980s"] },
              { point: "Great Barrier Reef Marine Park Authority / GBRMPA", keywords: ["gbrmpa", "marine park authority", "authority"] },
            ],
            commonError: "Writing 1975 (the year GBRMPA was set up) instead of 1981, or saying UNESCO manages the reef.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p1-q12",
            question: "Describe the Sisters' Islands Marine Park in Singapore. (3 marks)",
            marks: 3,
            hint: "When, how big, who runs it, what it does.",
            modelAnswer:
              "The Sisters' Islands Marine Park is Singapore's first marine park, created in 2014. It covers about 40 hectares around Big and Small Sister's Island and parts of St John's Island and Pulau Tekukor, and is managed by NParks. It protects reefs and shores, and runs guided intertidal walks, dive trails, research and coral nurseries.",
            markScheme: [
              { point: "Singapore's first marine park, created 2014", keywords: ["2014", "first", "first marine park"] },
              { point: "Size / location / manager (about 40 ha, Southern Islands, NParks)", keywords: ["40", "hectare", "nparks", "st john", "southern"] },
              { point: "What it does: protection, education walks, dive trails, research, nurseries", keywords: ["walk", "dive", "trail", "educat", "research", "nurser"] },
            ],
            commonError: "Describing Singapore's reefs in general without any facts about the marine park itself.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-qa-p1-q13",
            question: "Explain how coral reefs protect coastlines. (3 marks)",
            marks: 3,
            hint: "What happens to a wave when it hits a reef?",
            modelAnswer:
              "A reef acts as a natural breakwater. Waves break on the reef and lose energy before reaching the shore; a healthy reef can absorb up to about 97% of wave energy. This reduces coastal erosion and flooding, which is vital for low-lying islands such as the Maldives.",
            markScheme: [
              { point: "Reef acts as a natural barrier / breakwater; waves break on it", keywords: ["breakwater", "barrier", "break", "wall"] },
              { point: "Absorbs wave energy (up to ~97%)", keywords: ["energy", "97", "absorb", "weaker", "smaller wave"] },
              { point: "Reduces erosion / flooding / storm damage on the coast", keywords: ["erosion", "flood", "storm", "damage", "protect"] },
            ],
            commonError: "Stating that reefs 'protect the coast' without explaining the role of wave energy.",
            guideRef: "biodiversity-value",
          },
          {
            id: "coral-qa-p1-q14",
            question: "Outline what ocean acidification is and how it affects coral. (3 marks)",
            marks: 3,
            hint: "Cause → change in the water → effect on the skeleton.",
            modelAnswer:
              "The ocean absorbs about a quarter of the carbon dioxide released by burning fossil fuels. The CO2 dissolves to form a weak acid, so sea water becomes more acidic (pH has fallen from about 8.2 to 8.1). This makes it harder for corals to build their calcium carbonate skeletons, so they grow more slowly and become brittle.",
            markScheme: [
              { point: "Ocean absorbs CO2 from the atmosphere / fossil fuels", keywords: ["co2", "carbon dioxide", "absorb", "fossil"] },
              { point: "Sea water becomes more acidic / pH falls", keywords: ["acid", "ph", "8.1", "8.2"] },
              { point: "Harder to build calcium carbonate skeletons / slower growth / brittle", keywords: ["skeleton", "calcium carbonate", "brittle", "slow", "weak", "dissolv"] },
            ],
            commonError: "Saying acidification is caused by people pouring acid into the sea.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-qa-p1-q15",
            question: "Describe the global distribution of coral reefs. Use the TEA structure (Trend, Example, Anomaly). (4 marks)",
            marks: 4,
            hint: "Describe WHERE they are; you do not need to explain why.",
            modelAnswer:
              "Trend: most coral reefs are found in the tropics, between about 30°N and 30°S of the Equator, and especially on the eastern sides of continents. Example: the Great Barrier Reef lies off the north-east coast of Australia, and the Coral Triangle in South-East Asia has the most reefs and species. Anomaly: there are very few reefs off the west coast of South America (Peru) even though it is in the tropics, while Bermuda has reefs at about 32°N.",
            markScheme: [
              { point: "Trend: mainly in tropics / between ~30°N and 30°S", keywords: ["tropic", "30", "equator", "latitude"] },
              { point: "Pattern detail: eastern sides of continents / clustered in SE Asia", keywords: ["east", "coral triangle", "south-east asia", "southeast asia", "indonesia", "caribbean"] },
              { point: "Named example", keywords: ["great barrier", "australia", "maldives", "belize", "red sea", "philippines"] },
              { point: "Anomaly: few on west coasts (Peru) / Bermuda at 32°N", keywords: ["anomal", "peru", "west coast", "bermuda", "except", "namibia"] },
            ],
            commonError: "Explaining why reefs grow there (temperatures, etc.) instead of describing where they are.",
            guideRef: "growth-conditions",
          },
        ],
      },
      {
        id: "coral-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "coral-qa-p2-q01",
            question: "Explain why reef-building corals need sunlight. (3 marks)",
            marks: 3,
            hint: "The coral itself is an animal — so who needs the light?",
            modelAnswer:
              "Corals contain zooxanthellae algae in their tissue. The algae need sunlight to photosynthesise and make sugars. They pass most of this food (up to about 90%) to the coral, so without sunlight the coral would not get enough energy to survive and build its skeleton.",
            markScheme: [
              { point: "Zooxanthellae / algae live in coral tissue", keywords: ["zooxanthellae", "algae", "alga"] },
              { point: "Algae photosynthesise using sunlight", keywords: ["photosynth", "make food", "sugar", "glucose"] },
              { point: "Coral gets most of its food / energy from the algae", keywords: ["food", "energy", "90", "nutri", "feed"] },
            ],
            commonError: "Saying the coral photosynthesises. It is the algae inside the coral that do.",
            guideRef: "what-is-coral",
          },
          {
            id: "coral-qa-p2-q02",
            question: "The Amazon River reaches the Atlantic Ocean near the Equator. Explain why there are few coral reefs close to its mouth. (4 marks)",
            marks: 4,
            hint: "Think about two things the river adds to the sea and how each affects coral.",
            modelAnswer:
              "The Amazon pours huge amounts of fresh water into the sea, which lowers the salinity below the normal level corals need. It also carries vast amounts of sediment, making the water muddy and cloudy. This blocks sunlight, so the zooxanthellae cannot photosynthesise, and the sediment can settle on and smother polyps. So even though the water is warm enough, other conditions are not met.",
            markScheme: [
              { point: "Fresh water lowers salinity", keywords: ["fresh", "salin", "salt", "dilut"] },
              { point: "River carries sediment / mud", keywords: ["sediment", "mud", "silt", "soil"] },
              { point: "Cloudy water blocks light / less photosynthesis", keywords: ["light", "photosynth", "cloud", "murk", "turbid"] },
              { point: "Sediment smothers polyps / temperature alone not enough", keywords: ["smother", "bur", "warm enough", "temperature", "settle"] },
            ],
            commonError: "Saying the Amazon makes the sea too cold. The water near the Equator is warm; the problem is salinity and sediment.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-qa-p2-q03",
            question: "Describe and explain Darwin's subsidence theory of atoll formation. You may use a sequence of stages. (6 marks)",
            marks: 6,
            hint: "Three stages, each with what happens to the island and to the reef. Finish with evidence.",
            modelAnswer:
              "First, a fringing reef grows around the shore of a volcanic island in warm, shallow tropical water. The volcano then becomes extinct and slowly subsides (sinks) as the sea floor cools and the volcano's weight presses down. The coral keeps growing upwards towards the sunlight, so a lagoon forms between the island and the reef, which becomes a barrier reef. Eventually the island sinks completely beneath the sea, leaving a ring of reef around a central lagoon: an atoll. Darwin published this in 1842, and drilling at Enewetak Atoll in 1952 found over 1,200 m of coral sitting on volcanic rock, supporting the theory.",
            markScheme: [
              { point: "Stage 1: fringing reef around a volcanic island", keywords: ["fringing", "volcan", "attached", "around the island"] },
              { point: "Island subsides / sinks", keywords: ["subsid", "sink", "sank", "sunk", "lower"] },
              { point: "Coral grows upwards towards the light / keeps pace", keywords: ["upward", "grow up", "keep pace", "towards the light", "towards light"] },
              { point: "Stage 2: barrier reef with lagoon", keywords: ["barrier", "lagoon", "separat", "offshore"] },
              { point: "Stage 3: atoll when island disappears", keywords: ["atoll", "disappear", "ring", "below sea"] },
              { point: "Evidence: Enewetak 1952 drilling, 1,200 m of coral on volcanic rock / Darwin 1842", keywords: ["enewetak", "1952", "drill", "1,200", "1842"] },
            ],
            commonError: "Giving the three reef types without explaining WHY the reef moves away from the island (subsidence + upward growth).",
            guideRef: "reef-types",
          },
          {
            id: "coral-qa-p2-q04",
            question: "What evidence supports Darwin's subsidence theory? (2 marks)",
            marks: 2,
            hint: "Think of a drilling project in the 1950s.",
            modelAnswer:
              "In 1952 scientists drilled into Enewetak Atoll in the Pacific and passed through more than 1,200 m of coral limestone before reaching volcanic rock. Coral only grows in shallow water, so the volcano must have sunk while the coral grew upwards.",
            markScheme: [
              { point: "Drilling at Enewetak (1952) found deep coral (1,200+ m) on volcanic rock", keywords: ["enewetak", "drill", "1952", "1,200", "1200", "basalt"] },
              { point: "Explains: coral only grows shallow, so land must have sunk", keywords: ["shallow", "sunk", "sank", "subsid", "sink"] },
            ],
            commonError: "Describing the theory again instead of giving the evidence.",
            guideRef: "reef-types",
          },
          {
            id: "coral-qa-p2-q05",
            question: "Explain why some bleached corals recover while others die. (4 marks)",
            marks: 4,
            hint: "It depends on how long the heat lasts.",
            modelAnswer:
              "Bleached coral has expelled its zooxanthellae, so it has lost its main food supply but is still alive. If the sea cools quickly, the algae can return to the coral tissue and it can recover its colour and food supply over months. If the heat stress lasts for a long time, the coral starves and dies, and seaweed then grows over the dead skeleton. Corals already weakened by pollution or disease are less likely to recover.",
            markScheme: [
              { point: "Bleached coral is alive but has lost algae / food", keywords: ["alive", "lost", "expel", "starv", "food"] },
              { point: "If the water cools quickly, algae return and it recovers", keywords: ["cool", "return", "recover", "short"] },
              { point: "If heat lasts too long, coral starves / dies", keywords: ["long", "too long", "die", "death", "starv"] },
              { point: "Other factors: seaweed takes over / already stressed corals less likely to recover", keywords: ["seaweed", "pollut", "stress", "disease", "weak"] },
            ],
            commonError: "Treating bleaching and death as the same thing.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-qa-p2-q06",
            question: "Explain how fertiliser used on farms in Queensland can lead to crown-of-thorns starfish outbreaks on the Great Barrier Reef. (4 marks)",
            marks: 4,
            hint: "Build a chain: farm → river → sea → plankton → starfish.",
            modelAnswer:
              "Heavy wet-season rain washes fertiliser off sugar cane and banana farms into rivers such as the Burdekin, which carry the nutrients out to the reef. The extra nitrogen and phosphorus cause plankton blooms. Crown-of-thorns starfish larvae feed on plankton, so many more of them survive than usual. This produces an outbreak of adult starfish, which eat the coral polyps and strip whole reefs.",
            markScheme: [
              { point: "Rain washes fertiliser / nutrients into rivers and out to sea (run-off)", keywords: ["run-off", "runoff", "wash", "river", "rain"] },
              { point: "Nutrients cause plankton blooms", keywords: ["plankton", "bloom", "algae"] },
              { point: "More starfish larvae survive (they eat plankton)", keywords: ["larva", "surviv", "young", "baby"] },
              { point: "Outbreak eats coral polyps", keywords: ["outbreak", "eat", "polyp", "strip", "feed on coral"] },
            ],
            commonError: "Saying the fertiliser 'feeds the starfish' directly. The link is through plankton and larvae.",
            guideRef: "local-threats",
          },
          {
            id: "coral-qa-p2-q07",
            question: "Describe TWO ways in which water quality is being improved to protect the Great Barrier Reef. (4 marks)",
            marks: 4,
            hint: "Think about what farmers can change on their land.",
            modelAnswer:
              "First, farmers are given grants and advice to use less fertiliser and pesticide, for example applying it more precisely, which reduces the nutrients washed into rivers. Second, cattle are fenced away from rivers and riverbanks are replanted and gullies repaired, which reduces soil erosion, so less sediment reaches the reef in catchments such as the Burdekin and Fitzroy.",
            markScheme: [
              { point: "Way 1: reducing fertiliser / pesticide use", keywords: ["fertiliser", "fertilizer", "pesticide", "chemical"] },
              { point: "Develops way 1: fewer nutrients in run-off / grants to farmers", keywords: ["nutrient", "grant", "fund", "less run", "fewer"] },
              { point: "Way 2: fencing cattle / replanting riverbanks / repairing gullies", keywords: ["fenc", "replant", "tree", "gully", "vegetat", "cattle"] },
              { point: "Develops way 2: less erosion / sediment reaching reef", keywords: ["erosion", "sediment", "soil", "mud", "silt"] },
            ],
            commonError: "Describing green zones or starfish culling — those do not improve water quality.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p2-q08",
            question: "Explain why Singapore has lost much of its coral reef area. (3 marks)",
            marks: 3,
            hint: "How has Singapore made more land?",
            modelAnswer:
              "Singapore has expanded its land area by about 25% through land reclamation, which buried many reefs directly; about 60% of the original reef area has been lost. Dredging and reclamation also stirred up sediment, making the water murky so less light reaches the corals. Heavy shipping traffic adds further risks such as anchor damage and oil spills.",
            markScheme: [
              { point: "Land reclamation buried reefs (about 60% lost)", keywords: ["reclam", "60", "bur", "land"] },
              { point: "Dredging / sediment makes water murky, less light", keywords: ["sediment", "dredg", "murk", "light", "cloud"] },
              { point: "Other pressure: shipping / oil spills / bleaching", keywords: ["ship", "oil", "anchor", "bleach", "port"] },
            ],
            commonError: "Blaming cyclones or blast fishing — neither is a major cause in Singapore.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-qa-p2-q09",
            question: "Explain the economic value of the Great Barrier Reef to Australia. Use figures. (3 marks)",
            marks: 3,
            hint: "Jobs and money — and where they come from.",
            modelAnswer:
              "The Great Barrier Reef brings around A$6 billion a year into Australia's economy and supports about 64,000 jobs. Most of this comes from tourism, as visitors pay for diving, snorkelling and boat trips and spend money in towns such as Cairns. Fishing also earns money and provides food.",
            markScheme: [
              { point: "Figure for money (about A$6 billion a year)", keywords: ["6 billion", "billion", "a$6", "$6"] },
              { point: "Figure for jobs (about 64,000)", keywords: ["64,000", "64000", "64 000", "jobs"] },
              { point: "Source: tourism / fishing explained", keywords: ["touris", "div", "snorkel", "fish", "cairns", "visitor"] },
            ],
            commonError: "Giving no figures, or confusing the reef's length (2,300 km) with an economic figure.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p2-q10",
            question: "Compare a fringing reef with a barrier reef. (4 marks)",
            marks: 4,
            hint: "Use comparative words: 'whereas', 'but', 'both'.",
            modelAnswer:
              "Both are coral reefs that grow in warm, shallow tropical water along a coast. A fringing reef is attached to or very close to the shore, whereas a barrier reef lies further offshore, parallel to the coast. A barrier reef is separated from land by a wide, deep lagoon, but a fringing reef has at most a narrow, shallow channel. For example, Singapore's Southern Islands have fringing reefs, whereas Australia has the Great Barrier Reef.",
            markScheme: [
              { point: "Similarity: both coral reefs / tropical / along coasts", keywords: ["both", "similar", "alike"] },
              { point: "Fringing reef is close to / attached to shore", keywords: ["attached", "close", "near", "shore"] },
              { point: "Barrier reef separated by wide / deep lagoon", keywords: ["lagoon", "further", "offshore", "separat"] },
              { point: "Examples / comparative language", keywords: ["whereas", "great barrier", "red sea", "singapore", "belize"] },
            ],
            commonError: "Describing the two reefs separately without making direct comparisons.",
            guideRef: "reef-types",
          },
          {
            id: "coral-qa-p2-q11",
            question: "Explain how blast fishing and cyanide fishing damage coral reefs. (4 marks)",
            marks: 4,
            hint: "One mark for what each method is, one for the damage it does.",
            modelAnswer:
              "Blast fishing uses explosives to stun or kill fish so they float up and are easy to collect. The blast shatters the coral into rubble, which can take decades to recover. Cyanide fishing involves squirting poison onto the reef to stun fish so they can be caught alive for aquariums or restaurants. The cyanide also poisons and kills coral polyps and other reef life.",
            markScheme: [
              { point: "Blast fishing uses explosives to stun fish", keywords: ["explos", "dynamite", "bomb", "blast"] },
              { point: "Shatters coral into rubble / destroys structure", keywords: ["rubble", "shatter", "smash", "break", "destroy"] },
              { point: "Cyanide stuns fish to catch them alive (aquarium / restaurant trade)", keywords: ["alive", "live", "aquarium", "restaurant", "stun"] },
              { point: "Cyanide poisons / kills coral", keywords: ["poison", "kill", "toxic", "bleach", "die"] },
            ],
            commonError: "Explaining only one method, or saying what it is without the damage it causes.",
            guideRef: "local-threats",
          },
          {
            id: "coral-qa-p2-q12",
            question:
              "Coral cover (% of sea floor covered by living hard coral) in one region of a reef: 2015: 30%; 2016: 22%; 2017: 18%; 2019: 24%; 2022: 33%. Describe the changes shown. (4 marks)",
            marks: 4,
            hint: "Overall trend, the fall, the recovery, and quote data with years.",
            modelAnswer:
              "Coral cover fell sharply from 30% in 2015 to 18% in 2017, a fall of 12 percentage points (40%) over two years, probably during the back-to-back bleaching events of 2016 and 2017. It then recovered, rising to 24% by 2019 and reaching 33% in 2022, the highest value in the data. Overall, cover ended slightly higher than it started, showing the reef can recover when it gets several years without major disturbance.",
            markScheme: [
              { point: "Describes the fall 2015–2017", keywords: ["fell", "fall", "decrease", "declin", "drop"] },
              { point: "Quotes data with figures (e.g. 30% to 18%)", keywords: ["30", "18", "12"] },
              { point: "Describes the recovery 2017–2022", keywords: ["rose", "rise", "increase", "recover", "grew"] },
              { point: "Identifies the highest / overall change (33% in 2022)", keywords: ["33", "highest", "peak", "overall"] },
            ],
            commonError: "Describing only one part of the graph, or giving numbers without the years.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-qa-p2-q13",
            question: "Explain how tropical cyclones can damage coral reefs. (2 marks)",
            marks: 2,
            hint: "What do cyclones bring that hits a reef?",
            modelAnswer:
              "Cyclones produce huge, powerful waves that break and overturn coral, smashing branching corals into rubble; Cyclone Yasi in 2011 damaged a large area of the Great Barrier Reef. Heavy rain also brings floods of fresh water and sediment from rivers, lowering salinity and blocking light.",
            markScheme: [
              { point: "Powerful waves break / smash coral", keywords: ["wave", "smash", "break", "rubble", "storm"] },
              { point: "Flood water / fresh water / sediment from heavy rain, or named example", keywords: ["rain", "flood", "fresh", "sediment", "yasi"] },
            ],
            commonError: "Saying cyclones cause bleaching. In fact, the cloud and cooler water from a cyclone can sometimes reduce heat stress.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-qa-p2-q14",
            question: "Explain how coral restoration can help damaged reefs. (3 marks)",
            marks: 3,
            hint: "Name a method, explain how it works, then give a limitation or result.",
            modelAnswer:
              "In coral gardening, fragments of coral are grown in underwater nurseries and then replanted onto damaged reefs, giving them a head start. 'Coral IVF' collects eggs and sperm during spawning, rears the larvae and releases them onto degraded reefs to settle. Scientists are also breeding heat-tolerant corals. However, restoration only covers small areas compared with the whole reef.",
            markScheme: [
              { point: "Coral gardening / nurseries and replanting", keywords: ["garden", "nurser", "fragment", "replant", "transplant"] },
              { point: "Coral IVF / larvae / spawn / heat-tolerant corals", keywords: ["ivf", "larva", "spawn", "heat-tolerant", "heat tolerant", "breed"] },
              { point: "Explains benefit or limitation (speeds recovery / small scale)", keywords: ["small", "speed", "faster", "recover", "cost", "limit"] },
            ],
            commonError: "Saying restoration can 'fix' the whole reef. It works on small areas only.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p2-q15",
            question: "Explain why most coral reefs are found between about 30°N and 30°S. (2 marks)",
            marks: 2,
            hint: "Link latitude to temperature.",
            modelAnswer:
              "Between about 30°N and 30°S the sun is high in the sky all year, so the sea surface stays warm, typically within the 23–29°C range that reef-building corals need. Further from the Equator the water is too cool for corals to grow fast enough to build reefs.",
            markScheme: [
              { point: "Water there is warm enough (23–29°C)", keywords: ["warm", "23", "29", "temperature", "hot"] },
              { point: "Explains link to latitude / sun / cooler water further away", keywords: ["sun", "equator", "cool", "cold", "tropic"] },
            ],
            commonError: "Just repeating 'they are in the tropics' without explaining temperature.",
            guideRef: "growth-conditions",
          },
        ],
      },
      {
        id: "coral-qa-p3",
        title: "Written Paper 3",
        questions: [
          {
            id: "coral-qa-p3-q01",
            question: "Describe the structure of a coral polyp and how it builds a reef. (3 marks)",
            marks: 3,
            hint: "Body parts first, then what it does with calcium carbonate.",
            modelAnswer:
              "A polyp has a soft, tube-shaped body with a mouth on top surrounded by a ring of stinging tentacles. It takes calcium and carbonate from sea water and builds a cup-shaped skeleton of calcium carbonate (limestone) beneath itself. When polyps die, new ones grow on top of the old skeletons, so over thousands of years the skeletons build up into a reef.",
            markScheme: [
              { point: "Soft body with mouth and stinging tentacles", keywords: ["tentacle", "mouth", "soft", "sting", "tube"] },
              { point: "Builds a calcium carbonate / limestone skeleton", keywords: ["calcium carbonate", "limestone", "skeleton", "chalk"] },
              { point: "New polyps grow on old skeletons; builds up over thousands of years", keywords: ["on top", "build up", "thousands", "layer", "pile", "dead"] },
            ],
            commonError: "Describing the reef but not explaining how individual polyps make it.",
            guideRef: "what-is-coral",
          },
          {
            id: "coral-qa-p3-q02",
            question: "A survey found that live coral cover on a reef fell from 50% to 35% after a marine heatwave. Calculate the percentage decrease. Show your working. (2 marks)",
            marks: 2,
            hint: "(Original − new) ÷ original × 100.",
            modelAnswer:
              "Change = 50 − 35 = 15. Percentage decrease = 15 ÷ 50 × 100 = 30%.",
            markScheme: [
              { point: "Working: 15 ÷ 50 (× 100)", keywords: ["15", "÷ 50", "/50", "/ 50", "divided by 50"] },
              { point: "Correct answer: 30%", keywords: ["30%", "30 %", "30 percent", "30 per cent"] },
            ],
            commonError: "Giving 15% (the drop in percentage points) instead of the percentage decrease.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-qa-p3-q03",
            question: "Explain why coral reefs are more common on the eastern coasts of continents than on the western coasts in the tropics. (3 marks)",
            marks: 3,
            hint: "Think about ocean currents and named examples on each side.",
            modelAnswer:
              "Warm ocean currents flow along the eastern coasts of continents in the tropics, such as the East Australian Current past the Great Barrier Reef, keeping the sea within the 23–29°C that corals need. Western coasts often have cold currents and upwelling of cold deep water, for example the Humboldt Current off Peru. This keeps sea temperatures too low for reefs, even in the tropics.",
            markScheme: [
              { point: "Warm currents on eastern coasts", keywords: ["warm current", "warm ocean", "east australian", "gulf stream", "warm water"] },
              { point: "Cold currents / upwelling on western coasts", keywords: ["cold current", "upwelling", "humboldt", "benguela", "cold water"] },
              { point: "Links to temperature needed (23–29°C) or named example", keywords: ["23", "29", "temperature", "peru", "namibia", "too cold"] },
            ],
            commonError: "Saying western coasts get less sunlight — sunlight is similar on both sides.",
            guideRef: "growth-conditions",
          },
          {
            id: "coral-qa-p3-q04",
            question: "Explain how rising carbon dioxide levels threaten coral reefs in TWO different ways. (4 marks)",
            marks: 4,
            hint: "One way works through temperature, the other through the chemistry of sea water.",
            modelAnswer:
              "First, CO2 is a greenhouse gas, so more of it causes global warming and more frequent marine heatwaves. When the water stays about 1°C above the normal summer maximum for weeks, corals expel their algae and bleach, and may die. Second, the ocean absorbs CO2, which forms a weak acid, so the sea becomes more acidic (ocean acidification). This makes it harder for corals to build calcium carbonate skeletons, so reefs grow more slowly and become brittle.",
            markScheme: [
              { point: "CO2 causes warming / marine heatwaves", keywords: ["warm", "heatwave", "greenhouse", "temperature", "climate change"] },
              { point: "Leads to bleaching (algae expelled)", keywords: ["bleach", "expel", "algae", "white"] },
              { point: "Ocean absorbs CO2 and becomes more acidic", keywords: ["acid", "ph", "absorb", "dissolv"] },
              { point: "Weakens skeletons / slows growth", keywords: ["skeleton", "calcium carbonate", "brittle", "slow", "weak"] },
            ],
            commonError: "Explaining warming twice, or mentioning acidification without saying how it affects the coral.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-qa-p3-q05",
            question: "Describe how different zones are used to manage the Great Barrier Reef Marine Park. (4 marks)",
            marks: 4,
            hint: "Name the zones by colour and say what is allowed in each.",
            modelAnswer:
              "The Marine Park is divided into colour-coded zones. Green zones (Marine National Park) are no-take: people can visit, swim and dive but cannot fish or collect, and they cover about 33% of the park. Yellow zones allow limited fishing, such as one line and one hook. Blue zones allow general fishing but ban trawling of the sea bed. Pink and orange zones are for preservation and scientific research and need a permit to enter.",
            markScheme: [
              { point: "Green zones: no-take, about 33%", keywords: ["green", "no-take", "no take", "33"] },
              { point: "Yellow zones: limited fishing", keywords: ["yellow", "limited", "one line", "one hook"] },
              { point: "Blue zones: general fishing, no trawling", keywords: ["blue", "trawl", "general"] },
              { point: "Pink / orange zones: preservation / research / permit", keywords: ["pink", "orange", "research", "permit", "preserv"] },
            ],
            commonError: "Describing only green zones. Zoning is about a range of rules across the whole park.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p3-q06",
            question: "Describe how crown-of-thorns starfish are controlled on the Great Barrier Reef, and give ONE limitation of this method. (4 marks)",
            marks: 4,
            hint: "Who does it, how, where — then a weakness.",
            modelAnswer:
              "Trained divers search high-value reefs, such as those used by tourism, and inject each starfish with bile salts or vinegar; one injection kills it. More than a million starfish have been culled since 2012, and surveys show protected reefs keep more coral. However, culling is expensive and slow, so it cannot cover all of the roughly 3,000 reefs. It also treats the symptom, not the cause, because it does not reduce the nutrient run-off that triggers outbreaks.",
            markScheme: [
              { point: "Divers inject starfish (one shot)", keywords: ["inject", "diver", "shot"] },
              { point: "With bile salts or vinegar", keywords: ["bile", "vinegar", "acetic", "salts"] },
              { point: "Targets high-value reefs / evidence it protects coral", keywords: ["high-value", "high value", "tourism reef", "key reef", "protect", "million"] },
              { point: "Limitation: costly / cannot reach all reefs / does not fix run-off", keywords: ["cost", "expens", "all reefs", "run-off", "runoff", "symptom"] },
            ],
            commonError: "Saying starfish are cut up by divers — that does not work, as starfish can regenerate.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p3-q07",
            question: "What is a marine heatwave, and why does it cause coral bleaching? (3 marks)",
            marks: 3,
            hint: "Definition first, then the chain of events in the coral.",
            modelAnswer:
              "A marine heatwave is a period when sea temperatures are unusually high for days to months. If the water stays about 1°C above the usual summer maximum for around four weeks, the zooxanthellae become stressed and start producing harmful chemicals. The coral expels them, losing its colour and main food source, so it turns white (bleaches).",
            markScheme: [
              { point: "Definition: unusually warm sea for a long period", keywords: ["unusual", "warm", "hot", "period", "weeks", "long"] },
              { point: "Algae become stressed / produce harmful chemicals", keywords: ["stress", "harm", "toxic", "chemical"] },
              { point: "Coral expels algae and turns white", keywords: ["expel", "white", "lose", "lost", "bleach"] },
            ],
            commonError: "Defining a heatwave as hot air over land — it refers to sea temperatures.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-qa-p3-q08",
            question: "Describe how Singapore is protecting its coral reefs. (4 marks)",
            marks: 4,
            hint: "Think about the marine park, nurseries, education and research.",
            modelAnswer:
              "In 2014 Singapore created the Sisters' Islands Marine Park, about 40 hectares managed by NParks, where reefs are protected from damage and collecting. NParks and researchers run coral nurseries, for example near Pulau Semakau, growing coral fragments to replant on damaged reefs, and there is a national plan to plant 100,000 corals. Guided intertidal walks and dive trails educate the public. Corals have also been relocated before some reclamation projects, and scientists monitor bleaching.",
            markScheme: [
              { point: "Sisters' Islands Marine Park (2014, NParks)", keywords: ["sisters", "marine park", "2014", "nparks"] },
              { point: "Coral nurseries / replanting / 100,000 corals", keywords: ["nurser", "replant", "100,000", "restor", "transplant"] },
              { point: "Education: walks / dive trails", keywords: ["walk", "trail", "educat", "dive", "aware"] },
              { point: "Research / monitoring / relocating corals", keywords: ["research", "monitor", "relocat", "survey", "scien"] },
            ],
            commonError: "Writing about the Great Barrier Reef by mistake, or giving only one strategy.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-qa-p3-q09",
            question: "A company plans to build a large beach resort on a small island in the Philippines that is surrounded by a fringing reef. Suggest THREE ways the resort could harm the reef. (3 marks)",
            marks: 3,
            hint: "Think about construction, waste and visitors.",
            modelAnswer:
              "Building the resort would clear vegetation and stir up sediment that washes onto the reef and blocks light. Sewage and waste water from the hotel could add nutrients that cause seaweed and plankton blooms. Large numbers of tourists could break coral by touching or standing on it, and boat anchors could smash coral.",
            markScheme: [
              { point: "Construction sediment / dredging / land clearing", keywords: ["sediment", "construct", "build", "dredg", "clear", "mud"] },
              { point: "Sewage / waste water / pollution / nutrients", keywords: ["sewage", "waste", "pollut", "nutrient", "rubbish", "plastic"] },
              { point: "Tourist damage: trampling / anchors / souvenirs / overfishing for restaurants", keywords: ["touch", "stand", "anchor", "souvenir", "trampl", "tourist"] },
            ],
            commonError: "Listing three types of tourist damage and missing construction and pollution.",
            guideRef: "local-threats",
          },
          {
            id: "coral-qa-p3-q10",
            question: "Explain why many coastal communities in poorer tropical countries depend on coral reefs. (3 marks)",
            marks: 3,
            hint: "Food, money and safety.",
            modelAnswer:
              "Reef fish provide cheap protein for families who may not be able to afford other food, especially in South-East Asia and the Pacific islands. Fishing and tourism provide jobs and income where there are few other employers. Reefs also protect villages from storm waves and erosion, which these communities could not afford to replace with seawalls.",
            markScheme: [
              { point: "Food / protein from reef fish", keywords: ["food", "protein", "fish", "eat"] },
              { point: "Jobs / income from fishing or tourism", keywords: ["job", "income", "money", "touris", "work", "livelihood"] },
              { point: "Protection from storms / cannot afford seawalls", keywords: ["protect", "storm", "erosion", "seawall", "flood", "afford"] },
            ],
            commonError: "Listing reasons that apply to rich countries (e.g. medicines research) without linking to poorer communities.",
            guideRef: "biodiversity-value",
          },
          {
            id: "coral-qa-p3-q11",
            question: "Explain how the death of coral can reduce biodiversity on a reef. (3 marks)",
            marks: 3,
            hint: "Think about the reef as a building that many animals live in.",
            modelAnswer:
              "Living coral creates a complex 3-D structure with many habitats and hiding places. When coral dies, the skeleton is covered in seaweed and gradually breaks down into rubble, so these habitats are lost. Fish and other animals that depend on coral for food or shelter leave or die, and the food web collapses, so the number of species falls.",
            markScheme: [
              { point: "Coral provides habitat / shelter / 3-D structure", keywords: ["habitat", "shelter", "home", "hid", "structure"] },
              { point: "Dead coral breaks down / covered by seaweed / habitat lost", keywords: ["rubble", "break", "seaweed", "lost", "collapse"] },
              { point: "Species that depend on coral leave or die / food web affected", keywords: ["food web", "food chain", "leave", "die", "species", "fewer"] },
            ],
            commonError: "Simply stating 'animals die' without explaining why the loss of coral affects them.",
            guideRef: "biodiversity-value",
          },
          {
            id: "coral-qa-p3-q12",
            question:
              "Average sea surface temperature at a reef: January 28.5°C; February 30.2°C; March 30.4°C; April 29.0°C. The normal summer maximum here is 29.0°C. Identify the months above the normal maximum, and assess the risk of coral bleaching. (4 marks)",
            marks: 4,
            hint: "Compare each month to 29.0°C, then think about how much and how long.",
            modelAnswer:
              "February (30.2°C) and March (30.4°C) were above the normal summer maximum of 29.0°C. These months were 1.2°C and 1.4°C above normal. Bleaching can be triggered when the sea stays about 1°C above the summer maximum for around four weeks; here the water was more than 1°C above normal for about two months. So the risk of bleaching was high, and some corals may have died if they could not recover once the water cooled in April.",
            markScheme: [
              { point: "Identifies February and March", keywords: ["february", "march", "feb", "mar"] },
              { point: "Calculates how far above: 1.2°C and 1.4°C", keywords: ["1.2", "1.4", "above by", "degrees above"] },
              { point: "Uses threshold: about 1°C for about 4 weeks", keywords: ["1°c", "1 degree", "4 weeks", "four weeks", "threshold"] },
              { point: "Concludes risk is high / bleaching likely", keywords: ["high", "likely", "probabl", "severe"] },
            ],
            commonError: "Listing temperatures without comparing them to the 29.0°C threshold or reaching a judgement.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-qa-p3-q13",
            question: "What is the Reef 2050 Plan? Give ONE example of action it includes. (2 marks)",
            marks: 2,
            hint: "Who made it, when, and what for — then one action.",
            modelAnswer:
              "The Reef 2050 Long-Term Sustainability Plan, first published in 2015 by the Australian and Queensland governments, is a long-term plan to protect the Great Barrier Reef up to 2050. One action is improving water quality by helping farmers cut fertiliser and sediment run-off.",
            markScheme: [
              { point: "Long-term government plan (2015) to protect the GBR to 2050", keywords: ["2015", "long-term", "long term", "government", "plan to protect", "2050"] },
              { point: "One action: water quality / COTS control / restoration / zoning", keywords: ["water quality", "fertiliser", "starfish", "cots", "restor", "run-off"] },
            ],
            commonError: "Thinking the plan was written in 2050.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p3-q14",
            question: "Explain why tourism can both harm and help coral reefs. (4 marks)",
            marks: 4,
            hint: "Two developed harms vs two developed helps — or one of each, developed well.",
            modelAnswer:
              "Tourism can harm reefs because divers and snorkellers can break coral by touching or standing on it, and boat anchors and new resorts add damage and pollution. However, tourism can also help reefs because visitors pay reef fees and spend money, which funds management such as the Great Barrier Reef Marine Park Authority, and it gives local people a reason to protect the reef because their jobs depend on it. Eco-tourism with mooring buoys and no-touch rules can reduce the harm.",
            markScheme: [
              { point: "Harm: physical damage from tourists / anchors", keywords: ["touch", "stand", "anchor", "break", "trampl", "kick"] },
              { point: "Harm: pollution / development / resorts", keywords: ["pollut", "resort", "sewage", "sunscreen", "development", "hotel"] },
              { point: "Help: fees / money fund protection", keywords: ["fee", "fund", "money", "pay", "income"] },
              { point: "Help: jobs give reason to protect / eco-tourism / education", keywords: ["job", "eco", "educat", "aware", "reason to protect", "mooring"] },
            ],
            commonError: "Writing only about harm. The question asks for both sides.",
            guideRef: "local-threats",
          },
          {
            id: "coral-qa-p3-q15",
            question: "Explain how human activities on LAND can damage coral reefs. Write a PEEL paragraph using a named example. (6 marks)",
            marks: 6,
            hint: "Point → Evidence (named place, figure) → Explanation (the chain) → Link back to the question.",
            modelAnswer:
              "Point: farming on land is one of the biggest causes of damage to coral reefs because of polluted run-off. Evidence: on the Great Barrier Reef, rivers such as the Burdekin and Fitzroy carry sediment and fertiliser from sugar cane, banana and cattle farms out to the reef in the wet season. Explanation: sediment makes the water murky, blocking sunlight so the zooxanthellae cannot photosynthesise, and it smothers polyps. Fertiliser adds nutrients that cause plankton blooms; more crown-of-thorns starfish larvae survive, leading to outbreaks that eat coral. Coastal development, such as land reclamation in Singapore, has also buried reefs. Link: therefore activities on land many kilometres away can seriously damage reefs, which is why reef management must include water-quality programmes for farms.",
            markScheme: [
              { point: "Point: farming / run-off / development on land damages reefs", keywords: ["farm", "run-off", "runoff", "agricultur", "development"] },
              { point: "Evidence: named place or river (GBR, Burdekin, Fitzroy, Singapore)", keywords: ["great barrier", "burdekin", "fitzroy", "queensland", "singapore"] },
              { point: "Explains sediment blocks light / smothers polyps", keywords: ["sediment", "light", "smother", "murk", "cloud"] },
              { point: "Explains fertiliser → nutrients → plankton blooms", keywords: ["fertiliser", "fertilizer", "nutrient", "plankton", "bloom"] },
              { point: "Explains starfish outbreaks or reclamation burying reefs", keywords: ["starfish", "cots", "outbreak", "reclam", "bur"] },
              { point: "Link: concludes land activities harm reefs / need management on land", keywords: ["therefore", "so ", "this shows", "link", "water quality", "manage"] },
            ],
            commonError: "Writing about fishing or tourism (activities in the sea) instead of activities on land.",
            guideRef: "local-threats",
          },
        ],
      },
      {
        id: "coral-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "coral-qa-p4-q01",
            question: "'Local management cannot save the Great Barrier Reef.' To what extent do you agree? (6 marks)",
            marks: 6,
            hint: "Give evidence that local management works, evidence of its limits, then a justified judgement.",
            modelAnswer:
              "To some extent I agree. Local management has had real successes: since 2004 about 33% of the Marine Park has been green no-take zones, and studies show more and bigger coral trout there; crown-of-thorns starfish culling has protected high-value reefs; and water-quality programmes reduce sediment and fertiliser run-off. This makes reefs more resilient, and coral cover in some regions recovered strongly in 2021–2022. However, local management cannot stop marine heatwaves. The reef suffered mass bleaching in 2016, 2017, 2020, 2022 and 2024, and about 30% of shallow-water coral died in 2016 alone, despite it being one of the best-managed reefs in the world. Ocean acidification is also global. Overall, local management is necessary because it buys time and helps recovery, but on its own it cannot save the reef; the reef's future depends mainly on cutting global greenhouse gas emissions.",
            markScheme: [
              { point: "Evidence local management works: zoning / green zones 33%", keywords: ["zon", "green", "33", "no-take", "trout"] },
              { point: "Further local success: COTS culling / water quality / restoration", keywords: ["starfish", "cots", "water quality", "fertiliser", "restor", "cull"] },
              { point: "Explains resilience / recovery between events", keywords: ["resilien", "recover", "buy time", "bounce back"] },
              { point: "Limit: cannot stop marine heatwaves / bleaching (named years)", keywords: ["heatwave", "bleach", "2016", "2024", "temperature"] },
              { point: "Limit: global causes — climate change / acidification / emissions", keywords: ["climate change", "global", "acidif", "emission", "greenhouse"] },
              { point: "Justified overall judgement", keywords: ["overall", "conclusion", "to some extent", "largely", "i agree", "i disagree"] },
            ],
            commonError: "Agreeing or disagreeing without weighing both sides or reaching a clear, supported judgement.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p4-q02",
            question: "Evaluate how successful the Sisters' Islands Marine Park is likely to be in protecting Singapore's coral reefs. (5 marks)",
            marks: 5,
            hint: "What can a 40-hectare park do well — and what can it not control?",
            modelAnswer:
              "The Sisters' Islands Marine Park (2014) protects about 40 hectares of reef from collecting and physical damage, and its guided walks and dive trails raise public awareness, which can build support for conservation. Coral nurseries and research help restore damaged areas and study how Singapore's corals cope with murky, hot water. However, the park is very small compared with Singapore's total reef area, and it cannot control threats that come from outside it, such as sediment from dredging and reclamation elsewhere, shipping and oil spills. Most importantly, it cannot prevent marine heatwaves, and Singapore's reefs bleached in 2016 and 2024. Overall, it is successful as a protected 'core' and for education, but its success depends on wider controls on sediment and global action on climate change.",
            markScheme: [
              { point: "Strength: legal protection from collecting / damage", keywords: ["protect", "ban", "law", "collect", "damage"] },
              { point: "Strength: education / awareness (walks, dive trails)", keywords: ["educat", "aware", "walk", "trail", "public"] },
              { point: "Strength: research / nurseries / restoration", keywords: ["research", "nurser", "restor", "replant", "scien"] },
              { point: "Limitation: small size / cannot control sediment, shipping, reclamation", keywords: ["small", "40", "sediment", "ship", "reclam", "outside"] },
              { point: "Limitation: cannot stop bleaching / climate change + judgement", keywords: ["bleach", "climate", "heatwave", "overall", "judgement"] },
            ],
            commonError: "Describing the park without judging its success, or ignoring threats from outside its boundaries.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-qa-p4-q03",
            question:
              "GBR mass bleaching years: 1998, 2002, 2016, 2017, 2020, 2022, 2024. (a) Calculate the average gap in years between events from 2016 to 2024. (b) Compare this with the gap between 1998 and 2002, and suggest what this means for reef recovery. (4 marks)",
            marks: 4,
            hint: "From 2016 to 2024 there are 4 gaps. Recovery needs about 10–15 years.",
            modelAnswer:
              "(a) 2024 − 2016 = 8 years across 4 gaps, so the average gap is 8 ÷ 4 = 2 years. (b) The gap between 1998 and 2002 was 4 years, so the average gap has halved and events are becoming more frequent. Because reefs need about 10–15 years to recover from severe bleaching, a gap of about 2 years means corals do not have enough time to recover before the next event, so coral cover is likely to decline over time.",
            markScheme: [
              { point: "Working: 8 years ÷ 4 gaps", keywords: ["8 ÷ 4", "8/4", "8 / 4", "4 gaps", "8 years"] },
              { point: "Answer: 2 years", keywords: ["2 years", "two years", "= 2", "2 yrs"] },
              { point: "Comparison: 4 years earlier, events now twice as frequent", keywords: ["4 years", "four years", "halved", "twice", "more frequent", "more often"] },
              { point: "Recovery takes 10–15 years, so not enough time", keywords: ["10", "15", "not enough time", "cannot recover", "less time"] },
            ],
            commonError: "Dividing by 5 events instead of 4 gaps.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-qa-p4-q04",
            question: "Compare Singapore's coral reefs with the Great Barrier Reef. (4 marks)",
            marks: 4,
            hint: "Compare type, size, threats and management, using 'whereas'.",
            modelAnswer:
              "Both are biodiverse reef systems in the Indo-Pacific that have suffered bleaching, for example in 2016 and 2024. Singapore's reefs are small fringing reefs around the Southern Islands, whereas the Great Barrier Reef is a huge barrier reef system about 2,300 km long with around 3,000 reefs. Singapore's main threats have been land reclamation (about 60% of reef area lost) and sediment, whereas the GBR's major local threats are farm run-off and crown-of-thorns starfish. Singapore protects about 40 ha in the Sisters' Islands Marine Park, whereas about 33% of the GBR Marine Park is in green no-take zones.",
            markScheme: [
              { point: "Similarity: both biodiverse / both bleached", keywords: ["both", "similar", "bleach"] },
              { point: "Difference in type / size (fringing vs barrier; 2,300 km)", keywords: ["fringing", "barrier", "2,300", "size", "larger", "smaller"] },
              { point: "Difference in threats (reclamation vs run-off / COTS)", keywords: ["reclam", "run-off", "runoff", "starfish", "cots", "sediment"] },
              { point: "Difference in management (Sisters' Islands 40 ha vs GBR zoning 33%)", keywords: ["sisters", "40", "33", "zon", "nparks", "gbrmpa"] },
            ],
            commonError: "Writing two separate descriptions with no comparative words.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-qa-p4-q05",
            question: "Explain why it is becoming harder for coral reefs to recover from damage. (4 marks)",
            marks: 4,
            hint: "Think about frequency of events and multiple stresses acting together.",
            modelAnswer:
              "Reefs need around 10–15 years to recover from severe bleaching, but marine heatwaves are now happening every 2–4 years because of climate change, so corals do not have time to regrow. At the same time, ocean acidification slows the growth of coral skeletons, so recovery is slower. Local stresses such as sediment, nutrient run-off and overfishing weaken corals and let seaweed take over, reducing resilience. Crown-of-thorns outbreaks and cyclones add further damage on top of bleaching.",
            markScheme: [
              { point: "Bleaching / heatwaves more frequent", keywords: ["frequen", "more often", "every 2", "heatwave", "bleach"] },
              { point: "Recovery takes 10–15 years — not enough time", keywords: ["10", "15", "time", "years"] },
              { point: "Acidification slows growth", keywords: ["acid", "slow", "skeleton"] },
              { point: "Multiple local stresses reduce resilience (run-off, overfishing, COTS, cyclones)", keywords: ["resilien", "run-off", "overfish", "starfish", "cyclone", "multiple"] },
            ],
            commonError: "Listing threats without linking them to the speed of recovery.",
            guideRef: "local-threats",
          },
          {
            id: "coral-qa-p4-q06",
            question: "Should UNESCO list the Great Barrier Reef as 'World Heritage in Danger'? Evaluate both sides and reach a judgement. (6 marks)",
            marks: 6,
            hint: "Arguments for listing, arguments against, then your justified view.",
            modelAnswer:
              "Arguments for listing: the reef has suffered mass bleaching in 2016, 2017, 2020, 2022 and 2024, and about 30% of shallow-water coral died in 2016, so it clearly is in danger. UNESCO advisers recommended the listing in 2021 and 2023, arguing it would put pressure on Australia to act faster on climate change, including its coal and gas exports. Arguments against: the Australian government says it is spending billions through the Reef 2050 Plan on water quality, starfish control and restoration, and that the threat is global climate change, not Australian mismanagement. It also argues the label could put tourists off, harming the 64,000 jobs that depend on the reef. Judgement: I think listing is justified because the evidence of decline is strong and the label is meant to trigger action, although it should recognise the management work Australia already does.",
            markScheme: [
              { point: "For: evidence of decline (bleaching years / 30% loss in 2016)", keywords: ["bleach", "2016", "30", "declin", "2024"] },
              { point: "For: listing would pressure faster action on climate / emissions", keywords: ["pressure", "climate", "emission", "coal", "action"] },
              { point: "Against: Australia already spending billions / Reef 2050", keywords: ["billion", "reef 2050", "spend", "fund", "manage"] },
              { point: "Against: threat is global, not local mismanagement", keywords: ["global", "not australia", "worldwide", "other countries"] },
              { point: "Against: harm to tourism / jobs (64,000)", keywords: ["touris", "job", "64,000", "econom", "visitor"] },
              { point: "Justified judgement", keywords: ["overall", "i think", "judgement", "conclusion", "therefore", "i believe"] },
            ],
            commonError: "Giving only one side, or stating an opinion without supporting evidence.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p4-q07",
            question: "Explain how climate change could affect Singapore's coral reefs AND the people of Singapore. (5 marks)",
            marks: 5,
            hint: "Reef effects first, then knock-on effects for people.",
            modelAnswer:
              "Warmer seas will bring more frequent marine heatwaves, so Singapore's reefs, which bleached in 2016 and 2024, will bleach more often and may not recover. Ocean acidification will slow coral skeleton growth. For people, loss of reefs means less natural protection from waves for the Southern Islands, at a time when sea level is rising, so more seawalls like those at East Coast Park may be needed. Singapore would lose a rich part of its biodiversity (over 250 hard coral species), affecting education, research and eco-tourism such as the Sisters' Islands dive trails. Fewer reef fish would also reduce local fish stocks.",
            markScheme: [
              { point: "More frequent heatwaves → more bleaching", keywords: ["bleach", "heatwave", "warm", "temperature"] },
              { point: "Acidification slows growth", keywords: ["acid", "skeleton", "slow", "brittle"] },
              { point: "People: less coastal protection / need seawalls / sea-level rise", keywords: ["seawall", "protect", "wave", "sea level", "erosion", "flood"] },
              { point: "People: loss of biodiversity / education / eco-tourism", keywords: ["biodivers", "250", "touris", "educat", "dive", "research"] },
              { point: "People: fewer fish / food / named Singapore detail", keywords: ["fish", "food", "sisters", "east coast", "semakau"] },
            ],
            commonError: "Writing about the reef only and forgetting the effects on people.",
            guideRef: "singapore-reefs",
          },
          {
            id: "coral-qa-p4-q08",
            question: "Tuvalu is a Pacific country made of atolls, with most land less than 3 m above sea level. Explain why the loss of its coral reefs would be a serious threat to the country. (4 marks)",
            marks: 4,
            hint: "Think about what atolls are made of, as well as waves and food.",
            modelAnswer:
              "Tuvalu's islands are built from coral sand and rubble produced by the reef, so if the reef dies, the supply of sand that builds and repairs the islands stops. The reef also absorbs most wave energy; without it, storm waves would erode the low islands and cause flooding, made worse by sea-level rise. Many people rely on reef fish for food and fishing for income, so food security would suffer. Tourism and the country's identity also depend on its reefs.",
            markScheme: [
              { point: "Islands made of coral sand / reef supplies sediment", keywords: ["sand", "made of coral", "rubble", "build", "supply"] },
              { point: "Reef absorbs wave energy; without it, erosion / flooding", keywords: ["wave", "erosion", "flood", "energy", "breakwater"] },
              { point: "Low-lying land / sea-level rise worsens risk", keywords: ["low", "3 m", "sea level", "sea-level", "submerg"] },
              { point: "Food / income from reef fish", keywords: ["fish", "food", "income", "protein", "job"] },
            ],
            commonError: "Treating Tuvalu like a high volcanic island. Atolls are low and are built by the reef itself.",
            guideRef: "biodiversity-value",
          },
          {
            id: "coral-qa-p4-q09",
            question: "Suppose the volcanic base of an atoll subsided by 1,200 m over 50 million years. (a) Calculate the average rate of subsidence in millimetres per year. (b) Explain why this rate matters for whether the reef survives. (3 marks)",
            marks: 3,
            hint: "1 m = 1,000 mm. Then compare with coral growth rates (a few mm per year).",
            modelAnswer:
              "(a) 1,200 m = 1,200,000 mm. 1,200,000 ÷ 50,000,000 = 0.024 mm per year. (b) Coral can grow upwards at a few millimetres a year, which is much faster than 0.024 mm per year, so the reef can easily keep pace with the sinking island and stay in shallow, sunlit water. If the island sank faster than the coral could grow, the reef would 'drown' in deep, dark water and die.",
            markScheme: [
              { point: "Working: convert to mm and divide (1,200,000 ÷ 50,000,000)", keywords: ["1,200,000", "1200000", "÷ 50", "50,000,000", "50000000"] },
              { point: "Answer: 0.024 mm per year", keywords: ["0.024", "0,024", ".024"] },
              { point: "Coral grows faster, so it keeps pace and stays in shallow / sunlit water (or drowns if sinking were faster)", keywords: ["keep pace", "keep up", "faster", "drown", "shallow", "light"] },
            ],
            commonError: "Forgetting to convert metres to millimetres, giving 0.000024.",
            guideRef: "reef-types",
          },
          {
            id: "coral-qa-p4-q10",
            question: "Evaluate coral restoration as a way of protecting reefs. (5 marks)",
            marks: 5,
            hint: "How it works, what it achieves, what it cannot do, and a judgement.",
            modelAnswer:
              "Coral restoration includes coral gardening, where fragments are grown in nurseries and replanted, and coral IVF, where spawn is collected and larvae released onto damaged reefs. It can speed up recovery on high-value reefs such as tourist sites, and breeding heat-tolerant corals could help reefs survive future heatwaves. However, it works only on small areas — a few hectares compared with a 2,300 km reef — and it is expensive per square metre. Replanted corals can also be killed by the next marine heatwave, and critics argue it can distract from cutting emissions. Overall, restoration is a useful tool for buying time on key reefs, but it cannot replace tackling the causes of reef decline.",
            markScheme: [
              { point: "Describes method: gardening / nurseries / coral IVF", keywords: ["garden", "nurser", "ivf", "larva", "fragment", "replant"] },
              { point: "Strength: speeds recovery / heat-tolerant corals / key sites", keywords: ["speed", "faster", "heat-tolerant", "heat tolerant", "recover", "tourist"] },
              { point: "Limitation: small scale / expensive", keywords: ["small", "expens", "cost", "scale", "hectare"] },
              { point: "Limitation: next heatwave kills / distraction from emissions", keywords: ["heatwave", "bleach", "distract", "emission", "cause"] },
              { point: "Justified judgement", keywords: ["overall", "judgement", "conclusion", "therefore", "useful", "buy time"] },
            ],
            commonError: "Only describing how restoration works without weighing its effectiveness.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p4-q11",
            question: "Explain how local threats can make a reef less able to recover from bleaching. (4 marks)",
            marks: 4,
            hint: "Resilience — what helps a reef bounce back, and what stops it?",
            modelAnswer:
              "A reef recovers after bleaching when surviving corals regrow and new coral larvae settle on bare surfaces. If overfishing has removed plant-eating fish such as parrotfish, seaweed grows over the dead coral and stops larvae settling. Sediment from run-off blocks light and smothers young corals, and nutrients encourage seaweed and crown-of-thorns outbreaks, which eat the surviving coral. So local threats reduce the reef's resilience and slow or prevent its recovery.",
            markScheme: [
              { point: "Recovery depends on regrowth / new larvae settling", keywords: ["larva", "settl", "regrow", "new coral", "young"] },
              { point: "Overfishing → seaweed takes over", keywords: ["overfish", "parrotfish", "seaweed", "herbivor", "graz"] },
              { point: "Sediment / nutrients harm young corals or feed seaweed / COTS", keywords: ["sediment", "nutrient", "run-off", "runoff", "starfish", "smother"] },
              { point: "Concept of resilience reduced", keywords: ["resilien", "bounce back", "less able", "slower", "prevent"] },
            ],
            commonError: "Explaining what causes bleaching instead of what stops recovery.",
            guideRef: "local-threats",
          },
          {
            id: "coral-qa-p4-q12",
            question: "Assess which ONE threat is the most serious for the Great Barrier Reef. Justify your choice by comparing it with other threats. (6 marks)",
            marks: 6,
            hint: "Choose, give evidence, compare scale/area/control with at least two other threats, then conclude.",
            modelAnswer:
              "I think coral bleaching caused by marine heatwaves is the most serious threat. It affects the whole 2,300 km reef at once: mass bleaching occurred in 1998, 2002, 2016, 2017, 2020, 2022 and 2024, and about 30% of shallow-water coral died in 2016. By comparison, crown-of-thorns starfish outbreaks are serious but affect particular reefs and can be controlled by culling. Farm run-off is important and makes outbreaks worse, but it is being reduced by water-quality programmes. Cyclones damage large areas, but reefs have always recovered from storms between events. Bleaching is hardest to manage because its cause, climate change, is global and cannot be controlled by Australia alone. Therefore bleaching is the most serious threat, although local threats make it worse by reducing resilience.",
            markScheme: [
              { point: "Clear choice of one threat", keywords: ["most serious", "i think", "biggest", "greatest", "main threat"] },
              { point: "Evidence: years / percentages / scale", keywords: ["2016", "30", "2024", "2,300", "whole reef"] },
              { point: "Compares with a second threat (e.g. COTS)", keywords: ["starfish", "cots", "by comparison", "compared"] },
              { point: "Compares with a third threat (e.g. run-off, cyclones, fishing)", keywords: ["run-off", "runoff", "cyclone", "fishing", "pollut", "tourism"] },
              { point: "Explains manageability: global vs local control", keywords: ["global", "local", "control", "manage", "climate"] },
              { point: "Justified conclusion / interaction of threats", keywords: ["therefore", "overall", "conclusion", "resilien", "make it worse"] },
            ],
            commonError: "Describing every threat equally without making a choice and comparing.",
            guideRef: "bleaching-climate",
          },
          {
            id: "coral-qa-p4-q13",
            question: "You are advising the government of a tropical island whose fringing reef is being damaged by overfishing, sewage and careless tourists. Suggest a management plan with THREE measures, and explain how each would help. (5 marks)",
            marks: 5,
            hint: "Borrow ideas from the Great Barrier Reef and Singapore, and match each measure to a threat.",
            modelAnswer:
              "First, I would create zones like the Great Barrier Reef, including no-take green zones covering about a third of the reef, so fish such as parrotfish recover and spill over into fished areas, keeping seaweed under control. Second, I would build a sewage treatment works so untreated waste no longer adds nutrients that cause seaweed growth and starfish outbreaks. Third, I would introduce mooring buoys and no-touch rules for tourists, with a reef fee to fund rangers and education, as in the Sisters' Islands Marine Park's guided trails. I would monitor coral cover each year to check whether the plan is working.",
            markScheme: [
              { point: "Measure for overfishing: zoning / no-take areas / fishing limits", keywords: ["zon", "no-take", "no take", "ban fish", "limit", "green"] },
              { point: "Explains benefit: fish recover / spillover / seaweed grazed", keywords: ["recover", "spill", "parrotfish", "graz", "breed"] },
              { point: "Measure for sewage: treatment works / pollution control", keywords: ["sewage", "treatment", "waste water", "pollution control", "pipe"] },
              { point: "Measure for tourists: moorings / no-touch rules / fees / education", keywords: ["mooring", "no-touch", "rule", "fee", "educat", "guide"] },
              { point: "Explains benefit of sewage/tourist measures or monitoring", keywords: ["nutrient", "less damage", "fund", "monitor", "aware", "fewer"] },
            ],
            commonError: "Listing measures without explaining how each one reduces a specific threat.",
            guideRef: "gbr-management",
          },
          {
            id: "coral-qa-p4-q14",
            question: "Explain how nutrient run-off and overfishing can work together to turn a coral reef into a seaweed-covered reef. (4 marks)",
            marks: 4,
            hint: "One factor helps seaweed grow; the other removes what keeps it in check.",
            modelAnswer:
              "Nutrient run-off from fertiliser and sewage acts like plant food in the sea, so seaweed grows faster. Normally plant-eating fish such as parrotfish graze the seaweed and keep it in check. Overfishing removes these grazers, so nothing controls the extra seaweed. The seaweed then overgrows and shades the coral and covers bare surfaces so young coral cannot settle, so the reef shifts from coral to seaweed.",
            markScheme: [
              { point: "Nutrients make seaweed grow faster", keywords: ["nutrient", "fertiliser", "fertilizer", "sewage", "grow faster"] },
              { point: "Plant-eating fish normally graze seaweed", keywords: ["graz", "parrotfish", "herbivor", "plant-eat", "eat seaweed"] },
              { point: "Overfishing removes grazers", keywords: ["overfish", "remove", "fewer fish", "caught"] },
              { point: "Seaweed smothers / shades coral and stops young coral settling", keywords: ["smother", "shade", "settl", "overgrow", "cover", "outcompet"] },
            ],
            commonError: "Explaining each threat separately without showing how they combine.",
            guideRef: "local-threats",
          },
          {
            id: "coral-qa-p4-q15",
            question: "'Coral reefs are worth more alive than dead.' Discuss this statement. (6 marks)",
            marks: 6,
            hint: "What do people gain by exploiting reefs (blast fishing, coral mining, building on them)? What do living reefs provide over time?",
            modelAnswer:
              "People can make short-term money from damaging reefs: blast fishing and cyanide fishing catch more fish quickly, and reclaiming reef areas creates valuable land, as Singapore has done (about 60% of its reef area lost). However, a living reef provides value year after year. It supports fisheries that feed millions of people and tourism worth around A$6 billion a year and 64,000 jobs on the Great Barrier Reef alone. It protects coasts by absorbing up to about 97% of wave energy, avoiding the cost of seawalls, and it may provide future medicines, as sponge chemicals have already led to anti-cancer drugs. A dead reef provides none of these and turns to rubble and seaweed. Overall I agree: reefs are worth far more alive because their benefits continue for ever, while the gains from destroying them are one-off and usually go to only a few people.",
            markScheme: [
              { point: "Recognises short-term gains from damaging reefs (blast fishing, reclamation)", keywords: ["blast", "cyanide", "reclam", "short-term", "short term", "land"] },
              { point: "Living value: tourism with figures", keywords: ["touris", "6 billion", "64,000", "jobs", "dive"] },
              { point: "Living value: fisheries / food", keywords: ["fish", "food", "protein", "livelihood"] },
              { point: "Living value: coastal protection (97%) / avoids seawall costs", keywords: ["97", "wave", "protect", "seawall", "erosion"] },
              { point: "Living value: medicines / biodiversity", keywords: ["medic", "drug", "biodivers", "species", "25"] },
              { point: "Justified judgement (long-term vs one-off gains)", keywords: ["overall", "i agree", "conclusion", "long-term", "long term", "therefore"] },
            ],
            commonError: "Only listing the benefits of reefs without considering why some people damage them.",
            guideRef: "biodiversity-value",
          },
        ],
      },
    ],
  },
};
