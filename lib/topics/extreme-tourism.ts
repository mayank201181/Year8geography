import type { Topic } from "../types";

export const extremeTourism: Topic = {
  id: "extreme-tourism",
  title: "Tourism & Expeditions in Extreme Places",
  subject: "Extreme Environments",
  icon: "🧭",
  summary: "Antarctica, Everest and the Sahara: can tourism be positive?",
  intro:
    "Every year more than 100,000 people pay to visit Antarctica, hundreds queue for the summit of Everest and thousands ride camels into the Sahara. Why do people pay to go to the coldest, highest and driest places on Earth — and can that tourism protect these fragile places rather than damage them? By the end of this topic you will be able to weigh up the impacts of extreme tourism, explain the rules that manage it, and plan a safe, low-impact expedition of your own.",

  guide: [
    {
      id: "why-extreme-tourism",
      heading: "Why go to extreme places? The growth of extreme tourism",
      discovery: {
        problem:
          "In 1992–93 about 6,700 people visited Antarctica. In 2023–24 it was about 122,000. There are no hotels, almost no tourist airports, and the trip costs thousands of pounds. What could explain an 18-fold increase?",
        idea:
          "Tourism grows when **push factors** (wealth, free time, a wish for adventure) meet **pull factors** (unique wildlife, wild landscapes, 'bucket list' status) and **access** improves (more ships, cheaper flights, social media). Extreme places sell exactly what ordinary holidays cannot: rarity.",
      },
      body:
        "An **extreme environment** is a place where conditions such as temperature, altitude or lack of water make life very difficult for people — for example the polar regions, high mountains and hot deserts. **Extreme tourism** (also called adventure tourism) means travelling to these places for recreation.\n\n**Why do tourists go?**\n- **Adventure and challenge** — climbing, trekking, skiing or kayaking somewhere genuinely risky.\n- **Wildlife** — penguins, whales and seals in Antarctica; snow leopards in the Himalaya; fennec foxes in the Sahara.\n- **Bucket lists** — a **bucket list** is a list of things a person wants to do in their lifetime. 'Stand on all seven continents' or 'see Everest' are common entries.\n- **Last chance tourism** — visiting places before climate change alters them (melting glaciers, shrinking sea ice).\n- **Social media and status** — a summit photo is shared instantly.\n\n**Push and pull.** A **push factor** is something at home that encourages people to travel (rising incomes, stressful city life, retirement). A **pull factor** is something about the destination that attracts them (wildlife, scenery, solitude).\n\n**Antarctic tourism is booming.** Visitor numbers counted by IAATO (the International Association of Antarctica Tour Operators) rose from about 6,700 in 1992–93 to about 74,000 in 2019–20, then — after the COVID pause — to **over 100,000 in 2022–23** (about 105,000) and about 122,000 in 2023–24. Most tourists sail from **Ushuaia, Argentina**, crossing the Drake Passage (about 1,000 km, two days) to the **Antarctic Peninsula**, the closest and mildest part of the continent. The season is the southern summer, roughly **November to March**.\n\n**Everest is crowded.** Mount Everest (8,849 m) attracts climbers from all over the world. In 2023 Nepal issued a record of about 478 climbing permits. On good-weather days, long queues form near the summit — in May 2019 a famous photo showed hundreds of climbers waiting on the summit ridge, and 11 people died that season. Crowds also bring **waste**: tents, oxygen bottles, food packaging and human waste left on the mountain.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of Antarctic tourist numbers from 1992-93 to 2023-24"><text x="160" y="16" font-size="12" text-anchor="middle" fill="#0f172a" font-weight="bold">Antarctic visitors per season (approx.)</text><line x1="40" y1="170" x2="310" y2="170" stroke="#334155"/><line x1="40" y1="30" x2="40" y2="170" stroke="#334155"/><text x="36" y="173" font-size="10" text-anchor="end" fill="#334155">0</text><text x="36" y="116" font-size="10" text-anchor="end" fill="#334155">50k</text><text x="36" y="62" font-size="10" text-anchor="end" fill="#334155">100k</text><line x1="40" y1="116" x2="310" y2="116" stroke="#cbd5e1" stroke-dasharray="3 3"/><line x1="40" y1="62" x2="310" y2="62" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="50" y="163" width="32" height="7" fill="#38bdf8"/><rect x="95" y="157" width="32" height="13" fill="#38bdf8"/><rect x="140" y="134" width="32" height="36" fill="#38bdf8"/><rect x="185" y="90" width="32" height="80" fill="#38bdf8"/><rect x="230" y="57" width="32" height="113" fill="#0284c7"/><rect x="275" y="39" width="32" height="131" fill="#0284c7"/><text x="66" y="158" font-size="10" text-anchor="middle" fill="#0f172a">6.7k</text><text x="111" y="152" font-size="10" text-anchor="middle" fill="#0f172a">12k</text><text x="156" y="129" font-size="10" text-anchor="middle" fill="#0f172a">34k</text><text x="201" y="85" font-size="10" text-anchor="middle" fill="#0f172a">74k</text><text x="246" y="52" font-size="10" text-anchor="middle" fill="#0f172a">105k</text><text x="291" y="34" font-size="10" text-anchor="middle" fill="#0f172a">122k</text><text x="66" y="184" font-size="10" text-anchor="middle" fill="#334155">92–93</text><text x="111" y="184" font-size="10" text-anchor="middle" fill="#334155">00–01</text><text x="156" y="184" font-size="10" text-anchor="middle" fill="#334155">10–11</text><text x="201" y="184" font-size="10" text-anchor="middle" fill="#334155">19–20</text><text x="246" y="184" font-size="10" text-anchor="middle" fill="#334155">22–23</text><text x="291" y="184" font-size="10" text-anchor="middle" fill="#334155">23–24</text><text x="175" y="202" font-size="10" text-anchor="middle" fill="#334155">Season (southern summer). Source: IAATO, rounded</text></svg>`,
      diagramCaption:
        "Antarctic tourism has grown about 18-fold since the early 1990s, passing 100,000 visitors in the 2022–23 season.",
      keyPoints: [
        "Tourists go to extreme places for adventure, wildlife, bucket lists and 'last chance' experiences.",
        "Antarctic visitors passed 100,000 in 2022–23 (about 105,000) and reached about 122,000 in 2023–24.",
        "Most Antarctic tourists sail from Ushuaia, Argentina, to the Antarctic Peninsula between November and March.",
        "Everest crowding peaked with record permits (about 478 in 2023) and queues in the 'death zone'.",
      ],
      skill:
        "Calculating percentage change: (new − old) ÷ old × 100. From 6,700 (1992–93) to 122,000 (2023–24): (122,000 − 6,700) ÷ 6,700 × 100 ≈ 1,720% increase. From 74,000 (2019–20) to 105,000 (2022–23) ≈ 42% increase.",
      thinkDeeper:
        "If Antarctic tourism kept growing by about 15% a year, roughly how many seasons would it take to double from 122,000? (Hint: try multiplying by 1.15 repeatedly.) What problems would a doubling cause — and who would decide whether to stop it, given that no country owns Antarctica?",
    },
    {
      id: "antarctic-rules",
      heading: "Managing Antarctica: the Treaty, the Madrid Protocol and IAATO",
      discovery: {
        problem:
          "Antarctica is bigger than Europe, has no permanent population, no government and no police. Seven countries claim slices of it. So who stops a cruise company landing 3,000 passengers on a penguin colony — or a mining company drilling for minerals?",
        idea:
          "Antarctica is managed by **international agreement** rather than by one country: the **Antarctic Treaty (1959)** keeps it for peace and science, the **Madrid Protocol (1991)** bans mining and protects the environment, and the tour operators regulate themselves through **IAATO** rules.",
      },
      body:
        "**The Antarctic Treaty (1959).** Signed in Washington by **12 countries** in 1959 (in force from 1961), the Treaty now has more than 50 member countries. It says Antarctica must be used **only for peaceful purposes and scientific research**. It bans military activity, nuclear explosions and the dumping of nuclear waste, encourages countries to share scientific results, and 'freezes' territorial claims — nobody can make new claims or enlarge old ones.\n\n**The Madrid Protocol (1991).** The Protocol on Environmental Protection to the Antarctic Treaty was signed in Madrid in 1991 and came into force in 1998. It designates Antarctica a 'natural reserve, devoted to peace and science', **bans all mining** and mineral extraction (except for scientific research), and requires an **environmental impact assessment** before any activity, including tourism. The ban can only be reviewed after 2048 — and even then it would be very hard to change.\n\n**IAATO.** The **International Association of Antarctica Tour Operators** was founded in 1991 by seven tour companies. It is a form of **self-regulation**: operators agree to follow strict rules so that tourism stays safe and environmentally responsible. Key IAATO rules include:\n- **No more than 100 people ashore at one landing site at a time.**\n- **Ships carrying more than 500 passengers cannot land people at all** — they may only cruise and look from the ship.\n- Only **one ship** at a landing site at a time; roughly **one guide per 20 passengers** ashore.\n- **Biosecurity**: boots are scrubbed and disinfected (**boot-washing**) and clothing, bags and Velcro are vacuumed before and after every landing so that seeds, soil and diseases are not carried between sites.\n- Keep **about 5 m from wildlife** (further if animals react) and never feed or touch them.\n- **Nothing left behind and nothing taken**: no litter, no food ashore, no toilets ashore, no souvenirs such as rocks, feathers or bones.\n\n**Biosecurity** means measures that stop harmful organisms (seeds, insects, bacteria, viruses such as bird flu) being introduced into a place. Antarctica has very few native plants and insects, so an invasive species could spread with no natural competitors.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of an IAATO landing: ship offshore, zodiac boat, boot-wash station, group of up to 100 people and a 5 metre zone around penguins"><defs><marker id="ar-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0f172a"/></marker></defs><rect x="0" y="0" width="320" height="200" fill="#e0f2fe"/><path d="M150,200 L150,120 Q190,95 240,105 Q290,100 320,90 L320,200 Z" fill="#f8fafc" stroke="#94a3b8"/><path d="M15,95 L95,95 L85,110 L25,110 Z" fill="#475569"/><rect x="35" y="80" width="40" height="15" fill="#64748b"/><text x="55" y="76" font-size="10" text-anchor="middle" fill="#0f172a">Ship ≤ 500</text><text x="55" y="126" font-size="10" text-anchor="middle" fill="#0f172a">passengers</text><ellipse cx="120" cy="140" rx="14" ry="5" fill="#f97316"/><text x="120" y="160" font-size="10" text-anchor="middle" fill="#0f172a">Zodiac</text><line x1="90" y1="110" x2="110" y2="132" stroke="#0f172a" marker-end="url(#ar-arrow)"/><rect x="160" y="125" width="34" height="18" fill="#a7f3d0" stroke="#047857"/><text x="177" y="137" font-size="10" text-anchor="middle" fill="#064e3b">wash</text><text x="177" y="156" font-size="10" text-anchor="middle" fill="#064e3b">boots</text><circle cx="215" cy="170" r="3" fill="#1e293b"/><circle cx="223" cy="172" r="3" fill="#1e293b"/><circle cx="231" cy="169" r="3" fill="#1e293b"/><circle cx="219" cy="180" r="3" fill="#1e293b"/><circle cx="228" cy="181" r="3" fill="#1e293b"/><text x="222" y="196" font-size="10" text-anchor="middle" fill="#0f172a">≤ 100 ashore</text><circle cx="285" cy="140" r="24" fill="none" stroke="#dc2626" stroke-dasharray="4 3"/><ellipse cx="280" cy="140" rx="4" ry="7" fill="#111827"/><ellipse cx="291" cy="142" rx="4" ry="7" fill="#111827"/><text x="285" y="110" font-size="10" text-anchor="middle" fill="#b91c1c">5 m zone</text><text x="160" y="22" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">An IAATO landing</text><text x="160" y="38" font-size="10" text-anchor="middle" fill="#334155">one ship per site · nothing left, nothing taken</text></svg>`,
      diagramCaption:
        "IAATO landing rules: small ships only, no more than 100 people ashore, boots washed for biosecurity, and about 5 m kept from wildlife.",
      keyPoints: [
        "Antarctic Treaty 1959: 12 original countries; peace and science only; territorial claims frozen.",
        "Madrid Protocol 1991 (in force 1998): bans mining; environmental impact assessments required.",
        "IAATO: max 100 ashore per site at a time; ships with more than 500 passengers cannot land people.",
        "Biosecurity (boot-washing, vacuuming), keeping about 5 m from wildlife and leaving nothing behind protect fragile ecosystems.",
      ],
      caseStudy: {
        place: "Antarctic Peninsula landing sites",
        facts: [
          "About 105,000 visitors in 2022–23 — the first season above 100,000.",
          "IAATO was founded in 1991 by 7 operators; it now has more than 100 member companies.",
          "Ships carrying more than 500 passengers may not make landings; at most 100 people ashore at one site.",
          "Port Lockroy, a former British base (1944), is now a museum and post office run by the UK Antarctic Heritage Trust.",
          "The Madrid Protocol's mining ban cannot be reviewed until 2048.",
        ],
      },
      thinkDeeper:
        "IAATO is voluntary — companies choose to join. Why might a company follow strict rules it is not legally forced to follow? What could happen to Antarctica if a large non-member cruise line ignored them?",
    },
    {
      id: "tourism-impacts",
      heading: "Positive and negative impacts: economic, environmental and social",
      discovery: {
        problem:
          "A guide in Ushuaia, a penguin colony on the Antarctic Peninsula, a Sherpa family in the Khumbu valley and a camel owner near Merzouga are all affected by the same tourists. Would each of them say tourism is good or bad?",
        idea:
          "Impacts depend on **who** you ask and **which kind** of impact you look at. Geographers sort impacts into **economic** (money and jobs), **environmental** (land, water, wildlife, climate) and **social** (people, culture, health and safety) — and each can be positive or negative.",
      },
      body:
        "An **impact** is an effect or change caused by an activity. Good answers always say **what kind** of impact, **who or what** is affected and give **evidence**.\n\n**Economic impacts**\n- Positive: jobs for guides, porters, ship crews, cooks and hotel staff; income for gateway towns such as **Ushuaia** (Argentina) and **Kathmandu/Lukla** (Nepal); government income from permits (an Everest permit costs foreign climbers about US$15,000 from 2025, up from US$11,000). Money spent locally can create a **multiplier effect** — tourist spending in shops pays wages, which are spent in other local businesses.\n- Negative: jobs are often **seasonal**; much of the money may go to foreign companies (**leakage**); prices for food and land can rise for local people.\n\n**Environmental impacts**\n- Negative: trampling of fragile mosses and lichens; disturbance of breeding penguins and seals; **invasive species** carried on boots and clothing; **litter and human waste** (a major problem on Everest); fuel spills (the cruise ship MS *Explorer* sank near the Antarctic Peninsula in 2007 — all 154 people were rescued); carbon emissions from flights and ships, plus soot (black carbon) that darkens snow and speeds melting.\n- Positive: entry fees and permits can pay for **conservation** and clean-ups; tourists who have seen Antarctica may become **'ambassadors'** who campaign to protect it.\n\n**Social impacts**\n- Positive: better schools, health posts and electricity in the Everest region partly funded by tourism; local culture (Sherpa or Amazigh traditions) gains pride and value.\n- Negative: danger to local workers (Sherpa guides carry the most risk); crowding; traditional culture may be changed or 'staged' for tourists; young people leave farming.\n\nRemember: Antarctica has **no indigenous population**, so 'social' impacts there are mainly on tourists, crews, scientists and gateway towns.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table of positive and negative economic, environmental and social impacts of extreme tourism"><rect x="0" y="0" width="320" height="200" fill="#f8fafc"/><rect x="80" y="8" width="115" height="24" fill="#dcfce7" stroke="#16a34a"/><rect x="200" y="8" width="115" height="24" fill="#fee2e2" stroke="#dc2626"/><text x="137" y="24" font-size="11" text-anchor="middle" fill="#14532d" font-weight="bold">Positive +</text><text x="257" y="24" font-size="11" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Negative −</text><rect x="5" y="38" width="70" height="50" fill="#fef9c3" stroke="#ca8a04"/><rect x="5" y="93" width="70" height="50" fill="#dbeafe" stroke="#2563eb"/><rect x="5" y="148" width="70" height="50" fill="#f3e8ff" stroke="#9333ea"/><text x="40" y="67" font-size="10" text-anchor="middle" fill="#0f172a">Economic</text><text x="40" y="122" font-size="10" text-anchor="middle" fill="#0f172a">Environmental</text><text x="40" y="177" font-size="10" text-anchor="middle" fill="#0f172a">Social</text><text x="85" y="58" font-size="10" fill="#0f172a">Jobs, permit fees,</text><text x="85" y="72" font-size="10" fill="#0f172a">multiplier effect</text><text x="205" y="58" font-size="10" fill="#0f172a">Seasonal jobs,</text><text x="205" y="72" font-size="10" fill="#0f172a">leakage abroad</text><text x="85" y="113" font-size="10" fill="#0f172a">Fees fund clean-ups;</text><text x="85" y="127" font-size="10" fill="#0f172a">'ambassadors'</text><text x="205" y="113" font-size="10" fill="#0f172a">Litter, trampling,</text><text x="205" y="127" font-size="10" fill="#0f172a">invasive species</text><text x="85" y="168" font-size="10" fill="#0f172a">Schools, clinics,</text><text x="85" y="182" font-size="10" fill="#0f172a">cultural pride</text><text x="205" y="168" font-size="10" fill="#0f172a">Risk to guides,</text><text x="205" y="182" font-size="10" fill="#0f172a">crowding, culture</text><line x1="198" y1="38" x2="198" y2="198" stroke="#94a3b8"/><line x1="78" y1="90" x2="318" y2="90" stroke="#cbd5e1"/><line x1="78" y1="145" x2="318" y2="145" stroke="#cbd5e1"/></svg>`,
      diagramCaption:
        "A six-box impacts grid: sort every impact by type (economic, environmental, social) and by direction (positive or negative).",
      keyPoints: [
        "Always classify impacts: economic, environmental or social; positive or negative.",
        "Leakage = tourist money that flows out of the local area to foreign companies.",
        "The multiplier effect = tourist spending is re-spent locally, creating more jobs and income.",
        "Antarctica has no indigenous people, so social impacts there fall on visitors, crews and gateway towns.",
      ],
      skill:
        "Writing a PEEL paragraph: **P**oint (tourism brings jobs to the Everest region), **E**vidence (Sherpa guides can earn several thousand US dollars a season), **E**xplanation (this money pays for school fees and homes), **L**ink (so economically tourism is positive — but at a high personal risk).",
      thinkDeeper:
        "Can the same impact be positive for one group and negative for another? Think of rising land prices in a tourist town: who wins and who loses?",
    },
    {
      id: "everest-mountains",
      heading: "High mountains: Everest crowding, waste and the Sherpa dilemma",
      discovery: {
        problem:
          "A Sherpa guide can earn more in two months on Everest than many people in Nepal earn in several years. Yet the job is one of the most dangerous in the world. Why would anyone choose it — and why do so many people want to climb Everest that they queue for hours above 8,000 m?",
        idea:
          "Mountain tourism creates a trade-off between **income** and **risk**. High pay and few other jobs pull local people into guiding, while a short **weather window** squeezes hundreds of climbers into a few summit days, causing dangerous crowding.",
      },
      body:
        "**Mount Everest** (8,849 m, re-measured by Nepal and China in 2020) lies on the border of Nepal and China (Tibet). Edmund Hillary and **Tenzing Norgay**, a Sherpa, first reached the summit on 29 May 1953. Today well over 10,000 ascents have been made, most from the Nepal side through **Sagarmatha National Park**, a UNESCO World Heritage Site since 1979.\n\n**The Sherpa people** are an ethnic group who live in the high valleys of the Everest (Khumbu) region. Many work as mountain guides, so 'sherpa' has also come to mean a high-altitude guide or porter. Sherpa guides fix ropes, carry loads and set up camps.\n\n**Income vs risk**\n- A climbing Sherpa can earn roughly US$4,000–10,000 in a season — several times Nepal's average annual income of about US$1,400. Tourism money has paid for schools, clinics, lodges and hydro-electricity in the Khumbu.\n- But Sherpas cross the deadly **Khumbu Icefall** many more times than their clients. On 18 April 2014 an ice avalanche there killed **16 Nepali guides**; in 2015 an earthquake-triggered avalanche hit Base Camp.\n\n**Crowding.** Summit attempts happen mainly in **May**, when the jet-stream winds lift away from the summit before the monsoon. If the weather window is short, hundreds of climbers move at once. Queues form above 8,000 m — the **death zone**, where there is too little oxygen for the body to survive for long. Waiting uses up bottled oxygen and increases the risk of frostbite, exhaustion and **altitude sickness** (illness caused by low oxygen at high altitude). In 2019, 11 people died; in 2023, a record of about 478 permits was issued.\n\n**Waste.** Old tents, ropes, oxygen bottles and human waste pile up, especially at Camp 4 on the South Col. Responses include:\n- A **rubbish deposit** of US$4,000 per team, refunded only if each climber brings down **8 kg of rubbish**.\n- Since 2024, climbers must carry **'poo bags'** above Base Camp and bring their human waste down.\n- Clean-up campaigns by the Nepal Army have removed many tonnes of waste.\n- Proposals for stricter permit rules (e.g. requiring climbers to have climbed a 7,000 m peak first).",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the Everest south-east ridge route from Base Camp to the summit with camps and the death zone"><defs><marker id="ev-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b91c1c"/></marker></defs><rect x="0" y="0" width="320" height="200" fill="#f0f9ff"/><polygon points="10,185 30,172 60,160 95,140 135,124 180,94 220,70 265,24 300,80 315,185" fill="#cbd5e1" stroke="#475569"/><polygon points="230,56 265,24 285,52 260,46" fill="#ffffff"/><line x1="10" y1="62" x2="315" y2="62" stroke="#b91c1c" stroke-dasharray="5 3"/><text x="12" y="57" font-size="10" fill="#b91c1c">8,000 m: start of the 'death zone'</text><circle cx="30" cy="172" r="3" fill="#0f172a"/><text x="34" y="186" font-size="10" fill="#0f172a">Base Camp 5,364 m</text><text x="40" y="153" font-size="10" fill="#0f172a">Icefall</text><circle cx="95" cy="140" r="3" fill="#0f172a"/><text x="99" y="137" font-size="10" fill="#0f172a">C1 ~6,065</text><circle cx="135" cy="124" r="3" fill="#0f172a"/><text x="139" y="121" font-size="10" fill="#0f172a">C2 ~6,400</text><circle cx="180" cy="94" r="3" fill="#0f172a"/><text x="122" y="92" font-size="10" fill="#0f172a">C3 ~7,160</text><circle cx="220" cy="70" r="3" fill="#0f172a"/><text x="160" y="76" font-size="10" fill="#0f172a">C4 South Col ~7,950</text><circle cx="265" cy="24" r="4" fill="#dc2626"/><text x="268" y="16" font-size="10" fill="#7f1d1d">Summit 8,849 m</text><text x="226" y="45" font-size="10" fill="#b91c1c">queues</text><line x1="230" y1="48" x2="250" y2="38" stroke="#b91c1c" marker-end="url(#ev-arrow)"/></svg>`,
      diagramCaption:
        "Cross-section of the South Col route: climbers pass through the Khumbu Icefall and four camps, then queue on the summit ridge in the death zone above 8,000 m.",
      keyPoints: [
        "Everest is 8,849 m; most climbers use the Nepal (south) side via the Khumbu Icefall.",
        "Sherpa guides earn far more than the Nepali average but take the greatest risks (16 killed in the 2014 Icefall avalanche).",
        "A short May weather window causes queues in the death zone above 8,000 m.",
        "Waste is tackled by an 8 kg rubbish-return deposit, compulsory poo bags (from 2024) and army clean-ups.",
      ],
      caseStudy: {
        place: "Mount Everest / Sagarmatha National Park, Nepal",
        facts: [
          "Height 8,849 m (2020 survey); first climbed 29 May 1953 by Hillary and Tenzing Norgay.",
          "Sagarmatha National Park: UNESCO World Heritage Site since 1979.",
          "About 478 permits issued in 2023 — a record; 11 deaths in the crowded 2019 season.",
          "Permit for foreign climbers: about US$15,000 from 2025 (previously US$11,000).",
          "18 April 2014: Khumbu Icefall avalanche killed 16 Nepali guides.",
          "Each climber must bring down 8 kg of rubbish or lose the team's US$4,000 deposit.",
        ],
      },
      skill: "Reading a cross-section: identify heights, gradients and where hazards are concentrated.",
      thinkDeeper:
        "Nepal could cut crowding by halving the number of permits. Who would gain and who would lose? Would raising the permit price be fairer or less fair than a lottery?",
    },
    {
      id: "sahara-deserts",
      heading: "Hot deserts: tourism in the Sahara",
      discovery: {
        problem:
          "The Sahara is about the size of the USA, yet most tourists visit only a few small areas near its edges — such as the dunes of Merzouga in Morocco or the White Desert in Egypt. Why would tourism be so concentrated rather than spread across the whole desert?",
        idea:
          "Tourism follows **accessibility** (roads, airports, distance from cities), **safety** (some central Saharan countries are affected by conflict) and **attractions** (spectacular sand seas, oases, culture). This creates an uneven distribution — a key skill to describe using TEA.",
      },
      body:
        "A **hot desert** is an area receiving less than 250 mm of rain a year with very high daytime temperatures. The **Sahara** in North Africa is the world's largest hot desert, about **9 million km²**, crossing more than ten countries. Daytime temperatures can exceed 45°C in summer, but clear skies let heat escape at night, so temperatures can fall close to freezing in winter — a very large **diurnal (daily) temperature range**.\n\n**What do tourists do?**\n- Camel treks and overnight stays in desert camps among the sand dunes of **Erg Chebbi** near Merzouga, Morocco (dunes up to about 150 m high).\n- 4×4 safaris, sandboarding and stargazing (no light pollution).\n- Visiting oases, kasbahs and film locations (e.g. southern Tunisia and Ouarzazate in Morocco).\n- Endurance events: the **Marathon des Sables**, about 250 km over six days in southern Morocco, held since 1986.\n\n**Positive impacts**: jobs for camel guides, drivers and camp staff, many of them local **Amazigh** (Berber) people; income for remote villages with few other jobs; cultural pride in music, food and crafts.\n\n**Negative impacts**:\n- **Water**: hotels, showers and swimming pools use scarce groundwater that oasis farmers depend on.\n- **Off-road driving** damages fragile desert crusts and plants, and causes erosion.\n- **Litter and waste** last for decades because decomposition is very slow in dry conditions.\n- **Culture** can become a staged performance for tourists.\n\n**Distribution and safety**: tourism is concentrated in Morocco, Tunisia and Egypt, which have airports, roads and stable conditions. Large areas of Mali, Niger, Chad and southern Algeria receive very few tourists because of insecurity and official travel warnings — Timbuktu (Mali), once a popular destination, now sees almost none.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map of North Africa showing the Sahara and main tourist areas in Morocco, Tunisia and Egypt, with a low-tourism zone in the central Sahara"><defs><marker id="sd-north" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 Z" fill="#0f172a"/></marker></defs><rect x="0" y="0" width="320" height="210" fill="#bfdbfe"/><path d="M20,40 L80,30 L140,38 L200,45 L260,40 L300,50 L305,200 L15,200 Z" fill="#fef3c7" stroke="#92400e"/><ellipse cx="160" cy="115" rx="125" ry="55" fill="#fcd34d" opacity="0.8"/><text x="160" y="118" font-size="12" text-anchor="middle" fill="#78350f" font-weight="bold">SAHARA</text><text x="160" y="132" font-size="10" text-anchor="middle" fill="#78350f">~9 million km²</text><ellipse cx="135" cy="160" rx="60" ry="20" fill="#9ca3af" opacity="0.6"/><text x="135" y="164" font-size="10" text-anchor="middle" fill="#1f2937">few tourists: insecurity</text><circle cx="60" cy="72" r="5" fill="#dc2626"/><text x="68" y="68" font-size="10" fill="#7f1d1d">Merzouga (Morocco)</text><circle cx="155" cy="58" r="5" fill="#dc2626"/><text x="163" y="56" font-size="10" fill="#7f1d1d">S. Tunisia</text><circle cx="265" cy="82" r="5" fill="#dc2626"/><text x="222" y="98" font-size="10" fill="#7f1d1d">White Desert (Egypt)</text><circle cx="95" cy="150" r="3" fill="#1f2937"/><text x="60" y="185" font-size="10" fill="#1f2937">Timbuktu (Mali)</text><line x1="295" y1="25" x2="295" y2="8" stroke="#0f172a" stroke-width="2" marker-end="url(#sd-north)"/><text x="295" y="35" font-size="10" text-anchor="middle" fill="#0f172a">N</text><line x1="210" y1="190" x2="270" y2="190" stroke="#0f172a" stroke-width="2"/><text x="240" y="186" font-size="10" text-anchor="middle" fill="#0f172a">1,000 km</text><text x="160" y="22" font-size="10" text-anchor="middle" fill="#1e3a8a">Mediterranean Sea</text></svg>`,
      diagramCaption:
        "Sketch map: Saharan tourism clusters near the edges (Morocco, Tunisia, Egypt) where access and safety are good; the central Sahara receives very few visitors.",
      keyPoints: [
        "The Sahara is the largest hot desert (about 9 million km²) with a huge day–night temperature range.",
        "Tourism is concentrated in accessible, stable areas such as Merzouga (Morocco) and Egypt's White Desert.",
        "Positives: jobs for Amazigh guides and camp staff; negatives: water use, off-road damage, long-lasting litter.",
        "Insecurity has almost ended tourism in parts of the central Sahara, e.g. Timbuktu.",
      ],
      caseStudy: {
        place: "Merzouga and Erg Chebbi, Morocco",
        facts: [
          "Erg Chebbi is a sand sea about 22 km long with dunes up to about 150 m high.",
          "Morocco received about 17 million international tourists in 2024, a national record.",
          "The Marathon des Sables (about 250 km in 6 days) has been held in southern Morocco since 1986.",
          "Luxury desert camps with showers and pools compete with oasis farmers for scarce groundwater.",
        ],
      },
      skill:
        "Describing a distribution using TEA: **T**rend (tourism is concentrated around the northern and eastern edges of the Sahara), **E**xample (Merzouga in Morocco, the White Desert in Egypt), **A**nomaly (the central Sahara, e.g. Mali, has very few tourists despite famous sites like Timbuktu).",
      thinkDeeper:
        "Litter in a hot desert can last longer than litter in a rainforest. Using what you know about decomposition (it needs water, warmth and organisms), explain why.",
    },
    {
      id: "ecotourism-sustainability",
      heading: "Ecotourism and sustainable tourism: can tourism be positive?",
      discovery: {
        problem:
          "Two trekking holidays in Nepal cost the same. In Trip A, the company is foreign-owned, staff are flown in and rubbish is burned. In Trip B, you stay in village lodges, pay a conservation fee and are guided by local people. Which trip does more good — and how could you prove it?",
        idea:
          "**Ecotourism** aims to make tourism a force for good: protecting the environment, benefiting local people and educating visitors. The test is whether money stays local, wildlife is protected and the place could cope with tourism for ever (**sustainability**).",
      },
      body:
        "**Sustainable tourism** is tourism that meets the needs of today's visitors and hosts without damaging the environment, economy or culture for future generations. It balances three 'pillars': **environment**, **economy** and **society**.\n\n**Ecotourism** is a type of sustainable tourism: responsible travel to natural areas that **conserves the environment**, **improves the well-being of local people** and **involves education** (learning about the place). Features include:\n- Small group sizes that stay within the **carrying capacity** — the maximum number of visitors a place can take before it is damaged or the visitor experience suffers.\n- Local ownership and employment, so money stays in the community and **leakage** is low.\n- Fees that pay directly for conservation.\n- Low-impact accommodation (solar power, composting toilets, local food).\n- Guides who teach visitors about wildlife and culture.\n\n**Is Antarctic tourism 'eco'?** Supporters say IAATO rules make it one of the best-managed forms of tourism on Earth, and visitors return as 'ambassadors' for protecting Antarctica. Critics point out that a single trip involves long flights and a ship voyage with a large carbon footprint, and that numbers keep rising. Many experts call it 'responsible' rather than truly 'eco'.\n\n**Greenwashing** is when a company claims to be environmentally friendly to attract customers without really being so — for example, labelling a large cruise 'eco' because it offers reusable bottles.\n\n**Close to home**: Singapore's **Sungei Buloh Wetland Reserve** and **Pulau Ubin** show small-scale ecotourism: boardwalks keep visitors off fragile mud, guides explain migratory birds and mangroves, and visitor numbers on key trails are managed.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram of the three pillars of sustainability: environment, economy and society, with ecotourism at the centre"><rect x="0" y="0" width="320" height="200" fill="#ffffff"/><circle cx="125" cy="80" r="60" fill="#86efac" opacity="0.6" stroke="#16a34a"/><circle cx="195" cy="80" r="60" fill="#fde68a" opacity="0.6" stroke="#ca8a04"/><circle cx="160" cy="135" r="60" fill="#c4b5fd" opacity="0.6" stroke="#7c3aed"/><text x="95" y="60" font-size="11" text-anchor="middle" fill="#14532d" font-weight="bold">Environment</text><text x="95" y="74" font-size="10" text-anchor="middle" fill="#14532d">protect wildlife</text><text x="225" y="60" font-size="11" text-anchor="middle" fill="#713f12" font-weight="bold">Economy</text><text x="225" y="74" font-size="10" text-anchor="middle" fill="#713f12">local jobs</text><text x="160" y="172" font-size="11" text-anchor="middle" fill="#4c1d95" font-weight="bold">Society</text><text x="160" y="186" font-size="10" text-anchor="middle" fill="#4c1d95">respect culture</text><text x="160" y="102" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">ECO-</text><text x="160" y="115" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">TOURISM</text></svg>`,
      diagramCaption:
        "Ecotourism sits where all three pillars of sustainability overlap: environment, economy and society.",
      keyPoints: [
        "Sustainable tourism meets present needs without harming the future; it balances environment, economy and society.",
        "Ecotourism = conserve nature + benefit local people + educate visitors.",
        "Carrying capacity is the most visitors a place can handle without damage.",
        "Watch out for greenwashing: an 'eco' label is not proof of sustainability.",
      ],
      caseStudy: {
        place: "Annapurna Conservation Area Project (ACAP), Nepal",
        facts: [
          "Set up in 1986; Nepal's largest protected area at about 7,600 km².",
          "Home to more than 100,000 local people from several ethnic groups.",
          "Trekkers pay an entry permit fee; the money is spent on conservation, trail repairs, schools and health posts.",
          "Local committees help manage forests and lodges, for example promoting kerosene and solar power to reduce firewood cutting.",
        ],
      },
      thinkDeeper:
        "If ecotourism succeeds and a place becomes famous, more visitors arrive. Can ecotourism ever become a victim of its own success? How could a manager use the idea of carrying capacity to prevent this?",
    },
    {
      id: "planning-expedition",
      heading: "Planning an expedition to an extreme environment",
      discovery: {
        problem:
          "You are planning a 10-day ski trip in Antarctica and a 5-day trek in the Sahara. Write down the single most important item for each trip. Now ask: what would happen if that item failed? What is your back-up?",
        idea:
          "Expedition planning is about **anticipating what can go wrong** and preparing for it: the right **kit** and clothing layers, a **risk assessment**, **logistics**, enough **water** and **food (calories)**, reliable **communications**, and a plan to **leave no trace**.",
      },
      body:
        "**1. Kit and layering.** Clothing works best as layers that can be added or removed:\n- **Base layer** — next to the skin; **wicks** (draws) sweat away. Merino wool or synthetic, never cotton (cotton stays wet and chills you).\n- **Mid layer** — **insulates** by trapping warm air (fleece or down).\n- **Outer layer (shell)** — **windproof and waterproof**, protects against wind chill and snow.\nIn the Sahara, the aim is the opposite: loose, light-coloured, long-sleeved clothing, a wide hat or headscarf (*cheche*), sunglasses and sun cream — plus a warm layer for cold nights.\n\n**2. Risk assessment.** A **risk assessment** identifies **hazards** (things that could cause harm), judges the **likelihood** and **severity** of harm, and sets **control measures** to reduce the risk. Many teams score risk = likelihood × severity (e.g. 1–5 each).\n- Polar hazards: **hypothermia** (body core temperature falls below 35°C), **frostbite** (freezing of skin and tissue), crevasses, whiteouts, polar bears (Arctic only).\n- Mountain hazards: **altitude sickness**, avalanches, rockfall. Control: ascend slowly, 'climb high, sleep low'.\n- Desert hazards: **dehydration**, **heat exhaustion** and **heatstroke**, sunburn, sandstorms, getting lost.\n\n**3. Logistics** — the organisation of transport, supplies and people: permits (e.g. Everest permit, Antarctic permit from a Treaty country), flights and ships, supply depots, insurance that covers **helicopter evacuation**, weather windows, and an emergency plan.\n\n**4. Water.** In a hot desert you may need **4–6 litres or more per person per day**, more when walking in heat. In polar regions water is made by melting snow — which needs fuel — and cold, dry air still causes dehydration.\n\n**5. Food and calories.** A person at home needs about 2,000–2,500 kcal a day. Pulling a sledge in Antarctica can need **5,000–6,000+ kcal a day**, so expedition food is high-energy and light (fats, nuts, chocolate, dried meals).\n\n**6. Communications** — mobile phones rarely work. Teams carry a **satellite phone**, a **GPS** device and a **personal locator beacon (PLB)** that sends a distress signal via satellite, and agree daily check-in times.\n\n**7. Leave no trace** — plan ahead, stay on durable surfaces, carry out all rubbish (including human waste where required), leave what you find, minimise fire impact, respect wildlife and be considerate of others.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the three-layer clothing system: base layer wicks, mid layer insulates, outer shell blocks wind and water"><defs><marker id="pe-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0f172a"/></marker></defs><rect x="0" y="0" width="320" height="200" fill="#f8fafc"/><rect x="20" y="30" width="150" height="150" rx="10" fill="#1d4ed8"/><rect x="38" y="48" width="114" height="114" rx="8" fill="#f97316"/><rect x="56" y="66" width="78" height="78" rx="6" fill="#a3e635"/><rect x="74" y="84" width="42" height="42" rx="4" fill="#fde68a"/><text x="95" y="109" font-size="10" text-anchor="middle" fill="#0f172a">Skin</text><text x="160" y="20" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">Layering: W-I-P</text><line x1="170" y1="40" x2="190" y2="40" stroke="#0f172a" marker-end="url(#pe-arrow)"/><text x="195" y="44" font-size="10" fill="#1d4ed8">Outer shell: Protects</text><text x="195" y="57" font-size="10" fill="#334155">windproof, waterproof</text><line x1="152" y1="90" x2="190" y2="90" stroke="#0f172a" marker-end="url(#pe-arrow)"/><text x="195" y="94" font-size="10" fill="#c2410c">Mid layer: Insulates</text><text x="195" y="107" font-size="10" fill="#334155">traps warm air (fleece)</text><line x1="134" y1="140" x2="190" y2="140" stroke="#0f172a" marker-end="url(#pe-arrow)"/><text x="195" y="144" font-size="10" fill="#3f6212">Base layer: Wicks</text><text x="195" y="157" font-size="10" fill="#334155">moves sweat off skin</text><text x="195" y="185" font-size="10" fill="#b91c1c">No cotton next to skin!</text></svg>`,
      diagramCaption:
        "The layering system (Wicking, Insulating, Protecting): each layer has one job, and layers can be added or removed as effort and weather change.",
      keyPoints: [
        "Layering: base (wicks sweat), mid (insulates), outer shell (windproof and waterproof).",
        "Risk assessment = hazard → likelihood × severity → control measures.",
        "Plan water (4–6+ L/person/day in deserts) and calories (5,000–6,000+ kcal/day man-hauling in polar regions).",
        "Carry satellite communications (sat phone, PLB, GPS) and follow leave-no-trace principles.",
      ],
      skill:
        "Completing a risk assessment table. Example: Hazard — frostbite; Likelihood 3; Severity 4; Risk score 3 × 4 = 12 (high); Control — insulated mitts and face mask, buddy checks of each other's faces every hour, retreat to tent if wind chill falls below −30°C.",
      thinkDeeper:
        "Every extra kilogram on a sledge costs energy, which costs food, which adds weight. How would you decide what to leave behind? Which item would you never cut, and why?",
    },
    {
      id: "historic-expeditions",
      heading: "Learning from history: Amundsen, Scott and Shackleton",
      discovery: {
        problem:
          "In 1911 two teams raced to the South Pole. Both were brave and experienced. One team arrived first and all returned safely; the other arrived 34 days later and all five men died. What differences in planning might explain such different outcomes?",
        idea:
          "The race shows that **planning and the right technology for the environment** matter as much as courage. Amundsen used dogs, skis and Inuit-style fur clothing, and laid well-marked food depots; Scott relied on ponies, motor sledges and man-hauling. Shackleton later showed how **leadership** can save lives when plans fail.",
      },
      body:
        "**Roald Amundsen (Norway).** Amundsen sailed in the *Fram* and set up his base at the Bay of Whales on the Ross Ice Shelf. He had learned polar skills from the Inuit in the Arctic. His team of **five men** used **skis and dog sledges** (starting with 52 dogs), wore loose **fur clothing**, and laid large, well-marked **supply depots**. They reached the **South Pole on 14 December 1911** and returned safely.\n\n**Robert Falcon Scott (Britain).** Scott's *Terra Nova* expedition had important scientific aims. His plan relied on **motor sledges** (which broke down), **ponies** (which could not cope with the cold and had to be shot) and finally **man-hauling** — men pulling sledges themselves, which burns huge amounts of energy. Scott's polar party of five reached the Pole on **17 January 1912**, finding Amundsen's tent already there. On the return all five died from cold, hunger and exhaustion: Edgar Evans and Lawrence Oates first, then Scott, Wilson and Bowers, in a tent only about **18 km (11 miles) from a food depot** at the end of March 1912.\n\n**Lessons for planning**: choose transport suited to the environment; carry enough food and fuel with a safety margin; mark depots clearly; plan for bad weather; keep the team small and fit.\n\n**Ernest Shackleton and the Endurance (1914–17).** Shackleton aimed to cross Antarctica on foot. His ship, **Endurance**, became trapped in the pack ice of the **Weddell Sea** in January 1915 and was crushed, sinking in November 1915. The 28 men camped on the drifting ice, then sailed lifeboats to **Elephant Island**. Shackleton and five others sailed the small boat *James Caird* about **1,300 km** across the stormy Southern Ocean to **South Georgia**, then crossed its mountains to a whaling station to get help. **All 28 men of the Endurance crew survived.**\n\n**The wreck found (2022).** On 5 March 2022 the Endurance22 expedition found the wreck at a depth of about **3,008 m** in the Weddell Sea, using underwater robots launched from the icebreaker *S.A. Agulhas II*. It is remarkably well preserved because there are no wood-eating shipworms in Antarctic waters. It is protected as a **Historic Site and Monument** under the Antarctic Treaty, so it was filmed but not touched.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map of Antarctica showing Amundsen and Scott's routes to the South Pole from the Ross Ice Shelf and the site where Endurance sank in the Weddell Sea"><defs><marker id="he-amund" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker><marker id="he-scott" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2563eb"/></marker><marker id="he-boat" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0f172a"/></marker></defs><rect x="0" y="0" width="320" height="210" fill="#dbeafe"/><path d="M160,20 Q240,25 255,95 Q260,170 190,190 L175,160 L140,160 L125,190 Q60,175 65,110 L90,80 L110,90 L120,60 Q130,25 160,20 Z" fill="#ffffff" stroke="#64748b"/><circle cx="160" cy="105" r="4" fill="#0f172a"/><text x="168" y="104" font-size="10" fill="#0f172a">South Pole</text><text x="157" y="175" font-size="10" text-anchor="middle" fill="#334155">Ross Ice Shelf</text><path d="M172,160 L168,130 L162,110" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#he-amund)"/><path d="M142,162 L150,135 L157,111" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 2" marker-end="url(#he-scott)"/><text x="200" y="150" font-size="10" fill="#dc2626">Amundsen</text><text x="200" y="162" font-size="10" fill="#dc2626">14 Dec 1911</text><text x="70" y="150" font-size="10" fill="#2563eb">Scott</text><text x="70" y="162" font-size="10" fill="#2563eb">17 Jan 1912</text><text x="88" y="62" font-size="10" fill="#334155">Weddell Sea</text><text x="96" y="80" font-size="12" fill="#b91c1c" font-weight="bold">✕</text><text x="12" y="98" font-size="10" fill="#b91c1c">Endurance sank 1915</text><text x="12" y="110" font-size="10" fill="#b91c1c">found 2022, 3,008 m</text><circle cx="45" cy="30" r="4" fill="#475569"/><text x="12" y="20" font-size="10" fill="#0f172a">Elephant Island</text><path d="M50,32 Q120,10 190,12" fill="none" stroke="#0f172a" stroke-dasharray="2 3" marker-end="url(#he-boat)"/><text x="196" y="16" font-size="10" fill="#0f172a">to South Georgia</text><text x="160" y="205" font-size="10" text-anchor="middle" fill="#334155">Not to scale</text></svg>`,
      diagramCaption:
        "Sketch map (not to scale): Amundsen (red) and Scott (blue) both started from the Ross Ice Shelf; Endurance sank in the Weddell Sea, and Shackleton sailed from Elephant Island to South Georgia for rescue.",
      keyPoints: [
        "Amundsen reached the South Pole on 14 December 1911 using dogs, skis, furs and well-marked depots.",
        "Scott arrived on 17 January 1912; his party of five died on the return, about 18 km from a depot.",
        "Shackleton's Endurance sank in the Weddell Sea in 1915; all 28 crew survived after the James Caird voyage.",
        "The wreck was found on 5 March 2022 at about 3,008 m and is protected under the Antarctic Treaty.",
      ],
      caseStudy: {
        place: "Shackleton's Endurance, Weddell Sea",
        facts: [
          "Trapped in pack ice January 1915; crushed and sank November 1915.",
          "28 men; all survived after about 20 months stranded.",
          "James Caird voyage: about 1,300 km from Elephant Island to South Georgia in about 16 days.",
          "Wreck found 5 March 2022 at about 3,008 m depth by the Endurance22 expedition.",
          "Protected as an Antarctic Treaty Historic Site and Monument — not to be disturbed.",
        ],
      },
      thinkDeeper:
        "Scott's team also carried 16 kg of rock samples on the return journey — valuable fossils for science. Was that a planning mistake, or a choice that made sense given the expedition's aims? How would a modern risk assessment treat it?",
    },
  ],

  mnemonics: [
    {
      topic: "IAATO landing numbers",
      device: "100 on the shore, 500 no more, 5 metres for the penguin's door",
      explanation:
        "No more than 100 people ashore at a site at one time; ships carrying more than 500 passengers cannot land anyone; keep about 5 m from wildlife.",
    },
    {
      topic: "The two big Antarctic agreements",
      device: "'59 for Peace, '91 for no Pits",
      explanation:
        "The Antarctic Treaty (1959) keeps Antarctica for peace and science; the Madrid Protocol (1991) bans mining — no mine pits.",
    },
    {
      topic: "Clothing layers from the skin outwards",
      device: "W-I-P: Wick, Insulate, Protect",
      explanation:
        "Base layer wicks sweat away; mid layer insulates by trapping air; outer shell protects from wind and water.",
    },
    {
      topic: "Expedition planning checklist",
      device: "Keen Rangers Love Water, Food and Calls — Leaving No Trace",
      explanation:
        "Kit, Risk assessment, Logistics, Water, Food (calories), Communications, Leave No Trace.",
    },
  ],

  examMistakes: [
    "Saying 'tourism is bad for the environment' without naming the impact (e.g. trampling of moss, invasive seeds on boots) or the place.",
    "Mixing up the Antarctic Treaty (1959, peace and science) and the Madrid Protocol (1991, bans mining).",
    "Writing that ships over 500 passengers 'cannot go to Antarctica' — they can cruise there; they just cannot land passengers.",
    "Describing an impact when the question says 'explain' — always add 'because…' or 'this means that…'.",
    "Not classifying impacts as economic, environmental or social, so the answer looks one-sided.",
    "Ignoring the Sherpa trade-off: mentioning only income or only danger in an Everest 'evaluate' question.",
    "In a percentage-change calculation, dividing by the new value instead of the original value.",
    "Ending a 'to what extent' answer without a clear judgement that weighs both sides.",
  ],

  misconceptions: [
    {
      wrong: "Antarctica belongs to Britain (or to whoever got there first).",
      right: "Seven countries have claims, but the 1959 Antarctic Treaty froze them. No country can extend a claim, and the continent is managed jointly for peace and science.",
    },
    {
      wrong: "Ecotourism means any holiday in nature.",
      right: "Ecotourism must conserve the environment, benefit local people and educate visitors. A big cruise or a resort in a desert is not ecotourism just because it is in a natural place.",
    },
    {
      wrong: "Tourists in Antarctica can wander anywhere they like.",
      right: "Landings are tightly controlled: no more than 100 people ashore at a site, guided groups, marked paths, about 5 m from wildlife and boots washed before and after.",
    },
    {
      wrong: "Deserts are hot all the time, so you only need light clothing.",
      right: "Clear skies mean heat escapes at night; Saharan nights can fall close to freezing in winter, so a warm layer is essential.",
    },
    {
      wrong: "Sherpas are just porters, and 'Sherpa' is a job title.",
      right: "The Sherpa are an ethnic group from the Khumbu region of Nepal. Many work as highly skilled high-altitude guides who fix ropes and lead climbs.",
    },
    {
      wrong: "Scott lost the race because he was unlucky with the weather.",
      right: "Weather played a part, but planning mattered most: ponies and motor sledges failed, man-hauling burned huge energy, and supplies had little safety margin. Amundsen's dogs, skis and well-marked depots suited the environment.",
    },
  ],

  expertDebates: [
    {
      question: "Should Antarctic tourism be capped — or even banned?",
      detail:
        "Supporters of tourism argue IAATO rules work well, visitors become 'ambassadors' who push governments to protect Antarctica, and tour ships help scientists with transport and data. Critics say numbers have grown from about 6,700 to over 120,000 in 30 years, every voyage has a large carbon footprint, and voluntary self-regulation may not survive if new operators ignore it. Treaty countries have discussed caps but not yet agreed on one.",
    },
    {
      question: "Should Nepal limit the number of Everest permits?",
      detail:
        "Permit fees and tourism are vital income for Nepal and Sherpa families, and cutting permits could make climbing a sport for only the very rich. But crowding in the death zone kills people, and inexperienced climbers put Sherpa guides at greater risk. Options debated include fewer permits, proof of previous high-altitude experience, staggered summit slots, and higher fees.",
    },
    {
      question: "Is 'last chance tourism' helping or harming the places people want to see?",
      detail:
        "Some say seeing melting glaciers or shrinking sea ice first-hand inspires people to act on climate change. Others point out the paradox: the flights and ships used to get there add the very greenhouse gas emissions that are causing the damage.",
    },
  ],

  realWorld: [
    {
      emoji: "🏔️",
      title: "Singaporeans on Everest",
      detail:
        "The first Singapore Everest team put Khoo Swee Chiow and Edwin Siew on the summit in May 1998, and a Singapore women's team summited in 2009. Their expeditions needed years of planning, training on lower peaks and Sherpa support.",
    },
    {
      emoji: "✈️",
      title: "Changi as a gateway",
      detail:
        "Many trekkers and climbers from Asia fly via Changi to Kathmandu. A long-haul flight is a big part of an adventure trip's carbon footprint — something to weigh up when calling a trip 'eco'.",
    },
    {
      emoji: "🛶",
      title: "Expedition training at Outward Bound Singapore",
      detail:
        "Secondary students on Pulau Ubin practise real expedition skills: route planning, risk assessment, carrying water, cooking on stoves and leaving no trace on the campsite.",
    },
    {
      emoji: "🌿",
      title: "Ecotourism at Sungei Buloh",
      detail:
        "Boardwalks, guided walks and visitor education at Sungei Buloh Wetland Reserve show how even a small reserve manages visitors so migratory birds and mangroves are protected.",
    },
    {
      emoji: "🌡️",
      title: "Heat safety in Singapore",
      detail:
        "Singapore schools and the SAF use heat-stress guidelines (the Wet Bulb Globe Temperature) and water breaks — the same ideas a Sahara trekker needs to avoid heat exhaustion and heatstroke.",
    },
    {
      emoji: "🐧",
      title: "Port Lockroy's penguin post office",
      detail:
        "A former British base in Antarctica is now a museum and post office; money from visitors helps conserve historic sites, while scientists monitor whether visits affect the gentoo penguins nesting around it.",
    },
  ],

  flashcards: [
    { front: "Extreme environment", back: "A place where temperature, altitude or lack of water make human life very difficult, e.g. polar regions, high mountains, hot deserts." },
    { front: "Bucket list", back: "A list of experiences a person wants to have in their lifetime, e.g. 'visit all seven continents'." },
    { front: "Antarctic visitors 2022–23", back: "Over 100,000 (about 105,000) — about 122,000 in 2023–24, up from about 6,700 in 1992–93." },
    { front: "Antarctic Treaty", back: "Signed 1959 by 12 countries: Antarctica used only for peace and science; military activity banned; territorial claims frozen." },
    { front: "Madrid Protocol", back: "1991 (in force 1998): environmental protection; bans mining; requires environmental impact assessment. Reviewable only after 2048." },
    { front: "IAATO", back: "International Association of Antarctica Tour Operators (founded 1991): self-regulating body that sets rules for Antarctic tourism." },
    { front: "IAATO landing limits", back: "Max 100 people ashore at a site at one time; ships with more than 500 passengers cannot land people; one ship per site." },
    { front: "Biosecurity", back: "Measures to stop non-native organisms (seeds, insects, diseases) being introduced — e.g. boot-washing and vacuuming clothing." },
    { front: "Leakage", back: "Tourist money that leaves the local area, e.g. profits going to foreign-owned tour companies." },
    { front: "Carrying capacity", back: "The maximum number of visitors a place can take before the environment or the visitor experience is damaged." },
    { front: "Ecotourism", back: "Responsible travel to natural areas that conserves the environment, benefits local people and educates visitors." },
    { front: "Death zone", back: "Altitudes above about 8,000 m where there is too little oxygen for the body to survive for long." },
    { front: "Everest waste rule", back: "Each climber must bring down 8 kg of rubbish or the team loses a US$4,000 deposit; poo bags compulsory since 2024." },
    { front: "Layering", back: "Base layer wicks sweat; mid layer insulates; outer shell is windproof and waterproof." },
    { front: "Amundsen vs Scott", back: "Amundsen reached the South Pole 14 Dec 1911 (dogs, skis, furs) and returned safely; Scott arrived 17 Jan 1912 and his party of five died on the return." },
    { front: "Endurance wreck", back: "Shackleton's ship sank in the Weddell Sea in 1915; wreck found 5 March 2022 at about 3,008 m. All 28 crew had survived." },
  ],

  mustKnow: [
    "I can give at least four reasons why tourists visit extreme environments, using push and pull factors.",
    "I can describe the growth of Antarctic tourism with figures (about 6,700 in 1992–93; over 100,000 in 2022–23) and calculate percentage change.",
    "I can explain the purpose of the Antarctic Treaty (1959) and the Madrid Protocol (1991).",
    "I can state and justify at least four IAATO rules (100 ashore, 500-passenger limit, biosecurity, 5 m from wildlife, nothing left behind).",
    "I can classify impacts of tourism as economic, environmental or social and positive or negative, with named examples.",
    "I can explain the Sherpa dilemma of income versus risk and the causes of crowding and waste on Everest.",
    "I can describe the distribution and impacts of tourism in the Sahara.",
    "I can define ecotourism, sustainable tourism, leakage and carrying capacity, and judge whether a trip is genuinely sustainable.",
    "I can plan an expedition: kit and layering, risk assessment, logistics, water, calories, communications and leave no trace.",
    "I can compare Amundsen and Scott and explain what Shackleton's Endurance expedition teaches about planning and leadership.",
  ],

  videos: [
    {
      title: "Tourism in Antarctica explained",
      channel: "Time for Geography",
      url: "https://www.youtube.com/results?search_query=time+for+geography+antarctica+tourism",
    },
    {
      title: "Everest crowding and waste",
      channel: "BBC News",
      url: "https://www.youtube.com/results?search_query=bbc+everest+crowding+rubbish+sherpa",
    },
    {
      title: "Ecotourism and sustainable tourism",
      channel: "Cool Geography / Geography Hub",
      url: "https://www.youtube.com/results?search_query=geography+ecotourism+sustainable+tourism+gcse",
    },
    {
      title: "Amundsen vs Scott and the discovery of Endurance",
      channel: "BBC Bitesize / Falklands Maritime Heritage Trust",
      url: "https://www.youtube.com/results?search_query=amundsen+scott+race+south+pole+endurance+wreck+found",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "xtour-quiz-mcq-1",
        question: "Which of these is a PULL factor attracting tourists to Antarctica?",
        options: [
          "Rising incomes in the tourists' home countries",
          "The chance to see penguins, whales and seals in the wild",
          "Retirement giving people more free time",
          "Stressful city jobs that make people want a break",
        ],
        answerIndex: 1,
        hint: "A pull factor is about the destination itself, not the tourist's home.",
        explanation:
          "Wildlife is a feature of Antarctica that attracts visitors, so it is a pull factor. Rising incomes, retirement and stressful jobs are all push factors — they come from the tourist's home situation, not from Antarctica.",
        guideRef: "why-extreme-tourism",
      },
      {
        id: "xtour-quiz-mcq-2",
        question: "Which pairing of agreement and main purpose is correct?",
        options: [
          "Antarctic Treaty 1959 — bans all tourism; Madrid Protocol 1991 — allows mining",
          "Antarctic Treaty 1991 — peace and science; Madrid Protocol 1959 — bans mining",
          "Antarctic Treaty 1959 — divides Antarctica between 12 countries; Madrid Protocol 1991 — limits ships to 500 passengers",
          "Antarctic Treaty 1959 — peace and science; Madrid Protocol 1991 — bans mining",
        ],
        answerIndex: 3,
        hint: "The Treaty came first; think '59 for Peace, '91 for no Pits'.",
        explanation:
          "The 1959 Treaty reserves Antarctica for peace and science and freezes claims; the 1991 Madrid Protocol protects the environment and bans mining. The 500-passenger landing rule is an IAATO rule, not part of the Protocol, and the Treaty froze claims rather than dividing the continent.",
        guideRef: "antarctic-rules",
      },
      {
        id: "xtour-quiz-mcq-3",
        question: "Which statement best sums up the dilemma facing Sherpa guides on Everest?",
        options: [
          "They earn far more than the average Nepali income, but take the greatest risks on the mountain",
          "They earn little money but the work is very safe",
          "They are paid by the Nepali government, so tourist numbers do not affect them",
          "They rarely climb above Base Camp, so crowding does not affect them",
        ],
        answerIndex: 0,
        hint: "Think about both money and danger.",
        explanation:
          "A climbing Sherpa can earn several thousand US dollars a season — several times Nepal's average annual income — but crosses the Khumbu Icefall many times (16 guides died there in 2014). The other options are wrong: the work is very dangerous, guides are paid by expedition companies, and they climb to the summit.",
        guideRef: "everest-mountains",
      },
      {
        id: "xtour-quiz-mcq-4",
        question: "For a polar expedition, what is the correct order of clothing layers from the skin outwards?",
        options: [
          "Waterproof shell, fleece, wicking base layer",
          "Fleece, wicking base layer, waterproof shell",
          "Wicking base layer, insulating fleece or down, windproof and waterproof shell",
          "Cotton T-shirt, down jacket, fleece",
        ],
        answerIndex: 2,
        hint: "Remember W-I-P.",
        explanation:
          "Wick (base) → Insulate (mid) → Protect (shell). The shell must be outermost to block wind and snow. Cotton is a poor choice next to the skin because it holds sweat and chills you.",
        guideRef: "planning-expedition",
      },
    ],
    qa: [
      {
        id: "xtour-quiz-qa-1",
        question: "Give two reasons why the number of tourists visiting Antarctica has increased.",
        marks: 2,
        hint: "Think about push factors, pull factors and access.",
        modelAnswer:
          "More people have the wealth and time to take expensive trips, and more expedition ships now sail from Ushuaia, making Antarctica easier to reach. Social media and 'bucket lists' also make it a must-see place, and some people want to visit before climate change alters it ('last chance tourism').",
        markScheme: [
          { point: "A demand reason, e.g. wealth, bucket list, social media, last-chance tourism, wildlife", keywords: ["wealth", "rich", "income", "bucket", "social media", "last chance"] },
          { point: "An access/supply reason, e.g. more ships or flights, easier to reach", keywords: ["ship", "cruise", "flight", "access", "easier", "ushuaia"] },
        ],
        commonError: "Giving two versions of the same reason (e.g. 'people are richer' and 'people have more money').",
        guideRef: "why-extreme-tourism",
      },
      {
        id: "xtour-quiz-qa-2",
        question: "Describe two IAATO rules for landings in Antarctica and explain how each one protects the environment.",
        marks: 4,
        hint: "Rule + 'this protects… because…', twice.",
        modelAnswer:
          "No more than 100 people may be ashore at one site at a time. This reduces trampling of mosses and lichens and limits disturbance to breeding penguins. Second, visitors must wash and disinfect their boots and vacuum their clothing before and after each landing. This biosecurity stops seeds, soil and diseases being carried between sites, so invasive species cannot establish.",
        markScheme: [
          { point: "States a first IAATO rule (e.g. max 100 ashore, 500-passenger limit, 5 m from wildlife)", keywords: ["100", "500", "5 m", "five metres", "5 metres"] },
          { point: "Explains how it protects (less trampling/disturbance of wildlife)", keywords: ["trampl", "disturb", "stress", "breeding", "less damage"] },
          { point: "States a second rule (e.g. boot-washing/biosecurity, nothing left behind)", keywords: ["boot", "wash", "biosecurity", "vacuum", "litter", "nothing left"] },
          { point: "Explains how it protects (stops invasive species/disease or pollution)", keywords: ["invasive", "seed", "non-native", "disease", "alien", "pollut"] },
        ],
        commonError: "Listing rules without explaining how each one protects the environment.",
        guideRef: "antarctic-rules",
      },
      {
        id: "xtour-quiz-qa-3",
        question: "Explain one positive and one negative impact of tourism on the Everest region.",
        marks: 4,
        hint: "Name the type of impact and add 'because'.",
        modelAnswer:
          "A positive economic impact is income: Sherpa guides can earn US$4,000–10,000 a season, several times Nepal's average income, which pays for schooling and better homes. A negative environmental impact is waste: tents, oxygen bottles and human waste are left high on the mountain, especially at the South Col, because it is exhausting and dangerous to carry them down.",
        markScheme: [
          { point: "Identifies a positive impact (jobs/income/permit fees/schools)", keywords: ["job", "income", "earn", "money", "permit", "school"] },
          { point: "Develops the positive with explanation or evidence", keywords: ["4,000", "10,000", "dollar", "average", "pays for", "multiplier"] },
          { point: "Identifies a negative impact (waste/crowding/deaths/risk)", keywords: ["waste", "rubbish", "litter", "crowd", "death", "risk"] },
          { point: "Develops the negative with explanation or evidence", keywords: ["oxygen bottle", "south col", "queue", "8,000", "death zone", "avalanche"] },
        ],
        commonError: "Stating 'it brings money' without saying who gets it or what it is used for.",
        guideRef: "everest-mountains",
      },
      {
        id: "xtour-quiz-qa-4",
        question: "Explain why Amundsen's team reached the South Pole first and returned safely, while Scott's party died.",
        marks: 4,
        hint: "Compare transport, clothing, depots and food.",
        modelAnswer:
          "Amundsen used dog sledges and skis, which were fast and suited to snow, while Scott's motor sledges broke down and his ponies died, forcing his men to man-haul, which used huge amounts of energy. Amundsen's team wore loose Inuit-style furs and laid large, well-marked depots, so they had enough food. Scott's party ran short of food and fuel and were caught by bad weather about 18 km from a depot.",
        markScheme: [
          { point: "Amundsen's transport: dogs and skis", keywords: ["dog", "ski", "husk"] },
          { point: "Scott's transport failed: ponies/motor sledges/man-hauling", keywords: ["pony", "ponies", "motor", "man-haul", "manhaul", "pulling"] },
          { point: "Depots/food/supplies difference", keywords: ["depot", "food", "supplies", "fuel", "starv", "hunger"] },
          { point: "Clothing or weather/environment knowledge", keywords: ["fur", "inuit", "clothing", "weather", "blizzard", "cold"] },
        ],
        commonError: "Saying Scott was simply unlucky, without comparing specific planning decisions.",
        guideRef: "historic-expeditions",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "xtour-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "xtour-mcq-p1-q01",
            question: "About how many people visited Antarctica in the 2022–23 season?",
            options: ["About 10,000", "Over 100,000", "About 1 million", "About 40,000"],
            answerIndex: 1,
            hint: "It was the first season to pass a big round number.",
            explanation:
              "IAATO counted about 105,000 visitors in 2022–23 — the first season over 100,000. About 40,000 is closer to the early 2010s, and 1 million is far too high for a continent with no hotels.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-mcq-p1-q02",
            question: "From which port do most Antarctic cruises depart?",
            options: ["Cape Town, South Africa", "Hobart, Australia", "Ushuaia, Argentina", "Singapore"],
            answerIndex: 2,
            hint: "It is the closest port to the Antarctic Peninsula, at the tip of South America.",
            explanation:
              "Ushuaia is about two days' sail across the Drake Passage from the Antarctic Peninsula, where most tourism happens. Hobart is a gateway for science voyages to East Antarctica but handles far fewer tourists.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-mcq-p1-q03",
            question: "What is a 'bucket list'?",
            options: [
              "A list of experiences a person wants to have in their lifetime",
              "A packing list for an expedition",
              "A list of endangered species in a place",
              "A list of rules for tourists in Antarctica",
            ],
            answerIndex: 0,
            hint: "It is a personal wish list.",
            explanation:
              "A bucket list is a list of things someone hopes to do before they die, such as 'stand on all seven continents'. It is not a kit list or a set of rules.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-mcq-p1-q04",
            question: "In which year was the Antarctic Treaty signed?",
            options: ["1911", "1991", "1998", "1959"],
            answerIndex: 3,
            hint: "It was during the Cold War, soon after the International Geophysical Year (1957–58).",
            explanation:
              "The Treaty was signed in 1959 and came into force in 1961. 1991 is the Madrid Protocol and 1998 is when that Protocol came into force; 1911 is Amundsen's arrival at the Pole.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p1-q05",
            question: "What is the main purpose of the Antarctic Treaty?",
            options: [
              "To divide Antarctica fairly between seven countries",
              "To allow oil drilling under strict rules",
              "To keep Antarctica for peaceful purposes and scientific research",
              "To ban all tourism",
            ],
            answerIndex: 2,
            hint: "Think 'peace and science'.",
            explanation:
              "The Treaty reserves Antarctica for peace and science, bans military activity and freezes territorial claims. It does not divide the continent, and tourism is allowed (it is managed, not banned).",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p1-q06",
            question: "What does the 1991 Madrid Protocol ban in Antarctica?",
            options: ["Tourist landings", "Mining and mineral extraction", "Scientific research stations", "Fishing in the Southern Ocean"],
            answerIndex: 1,
            hint: "Think '91 for no Pits'.",
            explanation:
              "The Madrid Protocol bans mineral resource activities (mining), except for science. Tourism and research continue under environmental rules; fishing is managed by a different agreement (CCAMLR).",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p1-q07",
            question: "Under IAATO rules, what is the maximum number of people allowed ashore at one landing site at the same time?",
            options: ["20", "500", "1,000", "100"],
            answerIndex: 3,
            hint: "A three-digit number — but not the ship-size limit.",
            explanation:
              "No more than 100 people may be ashore at a site at once. 500 is the passenger limit for ships that are allowed to land people at all, and 20 is roughly the number of passengers per guide.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p1-q08",
            question: "A cruise ship carrying 2,000 passengers visits Antarctica. Under IAATO rules, what can it do?",
            options: [
              "Cruise and let passengers view from the ship, but not land anyone",
              "Land all passengers at once on a large beach",
              "Land passengers in groups of 100",
              "Land passengers only at research stations",
            ],
            answerIndex: 0,
            hint: "Check the ship-size rule.",
            explanation:
              "Ships carrying more than 500 passengers cannot make landings at all — they are 'cruise-only'. Landing in groups of 100 applies only to ships with 500 or fewer passengers.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p1-q09",
            question: "Why must visitors scrub and disinfect their boots before and after each landing in Antarctica?",
            options: [
              "To stop their boots freezing",
              "To stop seeds, soil and diseases being carried into Antarctica or between sites",
              "To keep the ship's decks clean",
              "To remove penguin guano so it does not smell",
            ],
            answerIndex: 1,
            hint: "This is called biosecurity.",
            explanation:
              "Boot-washing is a biosecurity measure that stops non-native seeds, soil and pathogens (like bird flu) spreading. Clean decks are a side benefit, not the reason.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p1-q10",
            question: "How close may tourists normally approach penguins and seals under IAATO guidelines?",
            options: ["Close enough to touch", "About 1 m", "About 5 m", "About 500 m"],
            answerIndex: 2,
            hint: "Roughly the length of a car.",
            explanation:
              "Visitors keep about 5 m away (more if the animals react). 1 m would disturb them; 500 m would make wildlife viewing almost impossible.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p1-q11",
            question: "What is the height of Mount Everest according to the 2020 survey?",
            options: ["7,950 m", "5,364 m", "8,000 m", "8,849 m"],
            answerIndex: 3,
            hint: "It is the highest point on Earth, above the 'death zone'.",
            explanation:
              "Nepal and China announced 8,849 m in 2020. 5,364 m is roughly Base Camp and 7,950 m is the South Col (Camp 4).",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-mcq-p1-q12",
            question: "What is meant by the 'death zone' on high mountains?",
            options: [
              "Altitudes above about 8,000 m where there is too little oxygen to survive for long",
              "The Khumbu Icefall, where avalanches are common",
              "Any area below Base Camp where storms occur",
              "A zone where climbing is banned by law",
            ],
            answerIndex: 0,
            hint: "It is defined by height and oxygen.",
            explanation:
              "Above about 8,000 m the air holds about a third of the oxygen at sea level, so the body slowly deteriorates. The Icefall is dangerous but is much lower (about 5,500–6,000 m).",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-mcq-p1-q13",
            question: "Who are the Sherpa?",
            options: [
              "A Nepali government department that issues permits",
              "Any porter working anywhere in the Himalaya",
              "An ethnic group from the Everest (Khumbu) region, many of whom work as mountain guides",
              "Foreign climbers who have summited Everest",
            ],
            answerIndex: 2,
            hint: "It is a people, not just a job.",
            explanation:
              "The Sherpa are an ethnic group living in the high valleys of the Khumbu region. The word is also used for high-altitude guides, but it is first of all the name of a people.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-mcq-p1-q14",
            question: "Which is the world's largest hot desert?",
            options: ["Gobi", "Sahara", "Atacama", "Antarctica"],
            answerIndex: 1,
            hint: "It covers much of North Africa.",
            explanation:
              "The Sahara covers about 9 million km². Antarctica is the largest desert of all, but it is a cold desert; the Gobi is a cold desert too; the Atacama is very dry but much smaller.",
            guideRef: "sahara-deserts",
          },
          {
            id: "xtour-mcq-p1-q15",
            question: "Which definition best describes ecotourism?",
            options: [
              "Responsible travel to natural areas that conserves the environment, benefits local people and educates visitors",
              "Any holiday that takes place outdoors",
              "Cheap travel by budget airline",
              "Holidays in large resorts with swimming pools",
            ],
            answerIndex: 0,
            hint: "It has three parts: environment, people and learning.",
            explanation:
              "Ecotourism must conserve nature, benefit locals and include education. Simply being outdoors is not enough — a big resort can damage the environment.",
            guideRef: "ecotourism-sustainability",
          },
          {
            id: "xtour-mcq-p1-q16",
            question: "What is the main job of a base layer in a layering system?",
            options: [
              "To block wind and rain",
              "To look smart in photos",
              "To trap a thick layer of warm air",
              "To wick sweat away from the skin",
            ],
            answerIndex: 3,
            hint: "It touches your skin.",
            explanation:
              "The base layer wicks moisture away so the skin stays dry. Trapping warm air is the mid layer's job, and blocking wind and rain is the shell's job.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p1-q17",
            question: "Who led the first team to reach the South Pole, and when?",
            options: [
              "Robert Scott, 17 January 1912",
              "Roald Amundsen, 14 December 1911",
              "Ernest Shackleton, 1915",
              "Edmund Hillary, 1953",
            ],
            answerIndex: 1,
            hint: "He was Norwegian.",
            explanation:
              "Amundsen's team reached the Pole on 14 December 1911. Scott arrived 34 days later; Shackleton never reached the Pole; Hillary climbed Everest in 1953.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-mcq-p1-q18",
            question: "What was the name of Shackleton's ship that was crushed by sea ice in 1915?",
            options: ["Fram", "Terra Nova", "Endurance", "Discovery"],
            answerIndex: 2,
            hint: "The name describes what the crew needed to survive.",
            explanation:
              "Endurance was trapped and crushed in the Weddell Sea. Fram was Amundsen's ship and Terra Nova was Scott's.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-mcq-p1-q19",
            question: "When was the wreck of Endurance found?",
            options: ["1916", "1959", "2012", "2022"],
            answerIndex: 3,
            hint: "Very recently — just over a century after it sank.",
            explanation:
              "The Endurance22 expedition found the wreck on 5 March 2022 at about 3,008 m. 1916 is when the crew were rescued.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-mcq-p1-q20",
            question: "What does 'leave no trace' mean for an expedition?",
            options: [
              "Leaving the environment as you found it — carrying out all rubbish and not disturbing wildlife",
              "Not telling anyone where you are going",
              "Covering your footprints so other teams cannot follow",
              "Burning all rubbish on a campfire",
            ],
            answerIndex: 0,
            hint: "It is about your impact, not secrecy.",
            explanation:
              "Leave no trace means minimising impact: carry out waste, stay on durable surfaces, leave what you find and respect wildlife. Burning rubbish leaves ash and pollution, and you should always tell someone your route.",
            guideRef: "planning-expedition",
          },
        ],
      },
      {
        id: "xtour-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          {
            id: "xtour-mcq-p2-q01",
            question: "A Singaporean family books an Antarctic cruise because they have recently retired and have savings to spend. This reason is best described as:",
            options: ["A pull factor", "An environmental impact", "A push factor", "Leakage"],
            answerIndex: 2,
            hint: "Is the reason about home or about the destination?",
            explanation:
              "Retirement and savings are conditions at home that encourage travel — push factors. A pull factor would be something about Antarctica itself, such as its wildlife.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-mcq-p2-q02",
            question: "What is 'last chance tourism'?",
            options: [
              "Visiting places before they are changed or lost, often due to climate change",
              "Booking a holiday at the last minute for a lower price",
              "Tourism in places that will soon be closed by law",
              "The final trip of a tourist season",
            ],
            answerIndex: 0,
            hint: "Think of melting glaciers and shrinking sea ice.",
            explanation:
              "Last chance tourism means travelling to see fragile places (glaciers, sea ice, coral reefs) before they disappear. It is not about last-minute bargains.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-mcq-p2-q03",
            question: "Antarctic visitors rose from about 74,000 (2019–20) to about 105,000 (2022–23). What is the approximate percentage increase?",
            options: ["31%", "70%", "142%", "42%"],
            answerIndex: 3,
            hint: "(new − old) ÷ old × 100.",
            explanation:
              "(105,000 − 74,000) ÷ 74,000 × 100 = 31,000 ÷ 74,000 × 100 ≈ 42%. 31% is the trap of mistaking the 31,000 rise for a percentage; dividing by the new value (105,000) instead of the original gives about 30%, which is also wrong.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-mcq-p2-q04",
            question: "Why do most Antarctic tourists visit the Antarctic Peninsula rather than the South Pole?",
            options: [
              "The South Pole is closed to all visitors by the Treaty",
              "The Peninsula is closest to South America, is milder and has abundant coastal wildlife",
              "The Peninsula has hotels and an international airport",
              "The South Pole has no ice",
            ],
            answerIndex: 1,
            hint: "Think about distance, climate and wildlife.",
            explanation:
              "The Peninsula is about two days' sail from Ushuaia, has the mildest Antarctic climate and plenty of penguins and seals. The Pole is not banned (a few people fly there), but it is remote and has no wildlife; the Peninsula has no hotels.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-mcq-p2-q05",
            question: "When is the Antarctic tourist season?",
            options: [
              "Roughly November to March (southern summer)",
              "Roughly June to August (northern summer)",
              "All year round",
              "Only in December",
            ],
            answerIndex: 0,
            hint: "Antarctica is in the Southern Hemisphere.",
            explanation:
              "Tourism happens in the southern summer, roughly November to March, when sea ice retreats and there is near-constant daylight. June to August is the dark Antarctic winter.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-mcq-p2-q06",
            question: "Which action by a tourist would break IAATO guidelines?",
            options: [
              "Walking only along the route marked by guides",
              "Vacuuming Velcro and pockets before going ashore",
              "Staying about 5 m from a resting seal",
              "Picking up a penguin feather as a souvenir",
            ],
            answerIndex: 3,
            hint: "Nothing left behind — and nothing taken.",
            explanation:
              "Taking anything (feathers, rocks, bones) is not allowed. The other three actions are exactly what IAATO asks visitors to do.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p2-q07",
            question: "Why does IAATO allow only one ship at a landing site at a time?",
            options: [
              "Because ships could collide in the fog",
              "Because there are not enough guides",
              "To keep visitor numbers at each site low and reduce trampling and disturbance",
              "To make sure each company makes the same profit",
            ],
            answerIndex: 2,
            hint: "Think about the 100-person limit too.",
            explanation:
              "One ship per site, together with the 100-ashore limit, keeps pressure on each site low, protecting vegetation and breeding wildlife. Safety is a factor at sea, but the landing rule is about environmental impact.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p2-q08",
            question: "IAATO is best described as:",
            options: [
              "A United Nations agency",
              "A voluntary, self-regulating association of tour operators",
              "An Antarctic research station",
              "The government of Antarctica",
            ],
            answerIndex: 1,
            hint: "The operators make rules for themselves.",
            explanation:
              "IAATO (founded 1991) is an association of tour companies that agree to follow its rules — self-regulation. Antarctica has no government; it is managed through the Treaty system.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p2-q09",
            question: "Which is a POSITIVE ECONOMIC impact of Antarctic tourism?",
            options: [
              "Fuel spills from ships",
              "Tourists becoming 'ambassadors' for Antarctica",
              "Invasive seeds carried on clothing",
              "Jobs for guides, ship crews and hotel staff in gateway towns such as Ushuaia",
            ],
            answerIndex: 3,
            hint: "Economic = money and jobs.",
            explanation:
              "Jobs and income in Ushuaia are an economic benefit. 'Ambassadors' is a positive social/environmental effect; fuel spills and invasive seeds are negative environmental impacts.",
            guideRef: "tourism-impacts",
          },
          {
            id: "xtour-mcq-p2-q10",
            question: "Which is a NEGATIVE ENVIRONMENTAL impact of tourism in Antarctica?",
            options: [
              "Non-native seeds introduced on visitors' clothing",
              "Seasonal jobs on cruise ships",
              "Rising prices in Ushuaia",
              "Tourists learning about climate change",
            ],
            answerIndex: 0,
            hint: "Environmental = land, water, wildlife, climate.",
            explanation:
              "Invasive seeds can outcompete native mosses and grasses — an environmental impact. Seasonal jobs and rising prices are economic; learning about climate change is a positive social effect.",
            guideRef: "tourism-impacts",
          },
          {
            id: "xtour-mcq-p2-q11",
            question: "Which is a NEGATIVE SOCIAL impact of mountain tourism on Everest?",
            options: [
              "Oxygen bottles left at the South Col",
              "High risk of death or injury for Sherpa guides",
              "Permit fees paid to the government",
              "Trampling of alpine plants",
            ],
            answerIndex: 1,
            hint: "Social = people, health, safety and culture.",
            explanation:
              "The danger to guides affects people's health and families, so it is a social impact. Oxygen bottles and trampling are environmental; permit fees are economic (and positive).",
            guideRef: "tourism-impacts",
          },
          {
            id: "xtour-mcq-p2-q12",
            question: "What is 'leakage' in tourism?",
            options: [
              "Water leaking from hotel pipes in deserts",
              "Fuel leaking from ships",
              "Tourist money that leaves the local area, e.g. profits going to foreign-owned companies",
              "Tourists leaving a tour group without permission",
            ],
            answerIndex: 2,
            hint: "It is an economic term.",
            explanation:
              "Leakage is when tourist spending flows out of the local economy, for example to overseas tour operators or imported goods. Fuel leaks are an environmental problem, not 'leakage' in this sense.",
            guideRef: "tourism-impacts",
          },
          {
            id: "xtour-mcq-p2-q13",
            question: "A trekker pays a lodge owner in the Khumbu, who then pays a local farmer for vegetables, who buys school books. This chain is an example of:",
            options: ["The multiplier effect", "Leakage", "Carrying capacity", "Greenwashing"],
            answerIndex: 0,
            hint: "Money is re-spent again and again locally.",
            explanation:
              "The multiplier effect is when tourist spending is re-spent within the local economy, creating more income. Leakage is the opposite — money leaving the area.",
            guideRef: "tourism-impacts",
          },
          {
            id: "xtour-mcq-p2-q14",
            question: "Why is the Khumbu Icefall one of the most dangerous parts of the Everest climb?",
            options: [
              "It is in the death zone above 8,000 m",
              "It has no snow, so climbers slip on rock",
              "Rescue helicopters are banned there",
              "The glacier moves, so huge ice blocks (seracs) can collapse and crevasses open",
            ],
            answerIndex: 3,
            hint: "It is a moving, broken glacier.",
            explanation:
              "The Icefall is a fast-moving section of the Khumbu Glacier where towering seracs can collapse without warning — as in the 2014 avalanche. It lies at about 5,500–6,000 m, well below the death zone.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-mcq-p2-q15",
            question: "How many Nepali guides were killed in the Khumbu Icefall avalanche of 18 April 2014?",
            options: ["2", "16", "478", "11"],
            answerIndex: 1,
            hint: "It was then the deadliest single day on Everest.",
            explanation:
              "Sixteen Nepali guides died. 11 is the number of deaths in the crowded 2019 season, and 478 is the number of permits issued in 2023.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-mcq-p2-q16",
            question: "How does Nepal's rubbish deposit scheme for Everest work?",
            options: [
              "Climbers pay a fine if rubbish is found at Base Camp",
              "The army carries down all rubbish for free",
              "Teams pay a deposit that is refunded only if each climber brings down 8 kg of rubbish",
              "Rubbish is burned at Camp 4",
            ],
            answerIndex: 2,
            hint: "It uses a financial incentive.",
            explanation:
              "Teams pay a US$4,000 deposit, returned only if each climber brings down 8 kg of rubbish. Army clean-ups exist too but are separate; burning at altitude is neither practical nor allowed.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-mcq-p2-q17",
            question: "Which is a typical tourist activity near Merzouga, Morocco?",
            options: [
              "Skiing on glaciers",
              "Watching penguins",
              "A camel trek and overnight stay in a desert camp among the Erg Chebbi dunes",
              "Climbing to an 8,000 m summit",
            ],
            answerIndex: 2,
            hint: "Erg Chebbi is a sand sea.",
            explanation:
              "Merzouga is the gateway to the Erg Chebbi dunes, famous for camel treks and desert camps. Skiing, penguins and 8,000 m peaks belong to other extreme environments.",
            guideRef: "sahara-deserts",
          },
          {
            id: "xtour-mcq-p2-q18",
            question: "Which is the most serious health hazard for a tourist trekking in the Sahara in summer?",
            options: [
              "Dehydration and heatstroke",
              "Frostbite",
              "Altitude sickness",
              "Hypothermia from falling through sea ice",
            ],
            answerIndex: 0,
            hint: "Think about heat and water.",
            explanation:
              "With temperatures above 40°C, losing water through sweat quickly leads to dehydration and heatstroke. Frostbite and sea-ice hazards are polar; altitude sickness affects high mountains.",
            guideRef: "sahara-deserts",
          },
          {
            id: "xtour-mcq-p2-q19",
            question: "When did Scott's party reach the South Pole?",
            options: ["14 December 1911", "29 May 1953", "5 March 2022", "17 January 1912"],
            answerIndex: 3,
            hint: "About a month after Amundsen.",
            explanation:
              "Scott arrived on 17 January 1912, 34 days after Amundsen (14 December 1911). 29 May 1953 is the first Everest ascent; 5 March 2022 is when Endurance was found.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-mcq-p2-q20",
            question: "Which was Amundsen's most important transport advantage over Scott?",
            options: [
              "Motor sledges",
              "Dog sledges and skis",
              "Ponies",
              "Aircraft",
            ],
            answerIndex: 1,
            hint: "He had learned polar travel from the Inuit.",
            explanation:
              "Amundsen used experienced dog teams and expert skiers, ideal for snow and ice. Motor sledges and ponies were Scott's choices, and both failed; aircraft were not used.",
            guideRef: "historic-expeditions",
          },
        ],
      },
      {
        id: "xtour-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "xtour-mcq-p3-q01",
            question: "What is meant by 'carrying capacity' in tourism?",
            options: [
              "The weight a sledge can carry",
              "The number of passengers a ship is built for",
              "The amount of money a tourist spends",
              "The maximum number of visitors a place can take before it is damaged or the experience suffers",
            ],
            answerIndex: 3,
            hint: "It is about a place's limit, not a vehicle's.",
            explanation:
              "Carrying capacity is the most visitors a site can cope with sustainably. A ship's passenger number is its capacity, but not 'carrying capacity' in the tourism sense.",
            guideRef: "ecotourism-sustainability",
          },
          {
            id: "xtour-mcq-p3-q02",
            question: "Which is the best definition of sustainable tourism?",
            options: [
              "Tourism that makes the largest possible profit",
              "Tourism that meets the needs of visitors and hosts today without damaging the environment, economy or culture for the future",
              "Tourism that uses only electric vehicles",
              "Tourism that is banned in fragile places",
            ],
            answerIndex: 1,
            hint: "It is about the future as well as today.",
            explanation:
              "Sustainable tourism balances environment, economy and society now and in the future. Electric vehicles may help, but they are only one small part of it.",
            guideRef: "ecotourism-sustainability",
          },
          {
            id: "xtour-mcq-p3-q03",
            question: "In the Annapurna Conservation Area Project (Nepal), what happens to the trekkers' entry fees?",
            options: [
              "They go to foreign tour companies",
              "They are used to build airports",
              "They are spent on conservation and local community projects such as trails, schools and health posts",
              "They are returned to trekkers at the end",
            ],
            answerIndex: 2,
            hint: "ACAP is a classic ecotourism example.",
            explanation:
              "ACAP reinvests permit fees in conservation and community development, so money stays local (low leakage). Fees going to foreign companies would be leakage — the opposite of ACAP's aim.",
            guideRef: "ecotourism-sustainability",
          },
          {
            id: "xtour-mcq-p3-q04",
            question: "Why can Saharan nights be very cold even after a very hot day?",
            options: [
              "Clear skies with little cloud or water vapour let heat escape quickly into space",
              "Cold winds blow from Antarctica every night",
              "The sand produces cold air",
              "The Sahara is at a very high altitude",
            ],
            answerIndex: 0,
            hint: "Clouds act like a blanket.",
            explanation:
              "With almost no cloud or humidity to trap heat, the ground loses heat rapidly at night, giving a large diurnal range. The Sahara is mostly low-lying, so altitude is not the main reason.",
            guideRef: "sahara-deserts",
          },
          {
            id: "xtour-mcq-p3-q05",
            question: "Roughly how much water should a person plan to drink per day when trekking in a hot desert?",
            options: ["0.5 litres", "4–6 litres or more", "1 litre", "20 litres"],
            answerIndex: 1,
            hint: "Much more than a normal day in a classroom.",
            explanation:
              "Trekkers often need 4–6 litres or more because of heavy sweating. 0.5–1 litre would quickly cause dehydration; 20 litres is unrealistic to carry and drink.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p3-q06",
            question: "A person pulling a sledge across Antarctica may need roughly how many kilocalories of food per day?",
            options: ["About 1,000 kcal", "About 2,000 kcal", "About 3,000 kcal", "About 5,000–6,000 kcal or more"],
            answerIndex: 3,
            hint: "Cold plus hard physical work burns huge amounts of energy.",
            explanation:
              "Man-hauling in extreme cold can burn 5,000–6,000+ kcal a day. 2,000 kcal is roughly a normal day's need at home — far too little on the ice.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p3-q07",
            question: "What is hypothermia?",
            options: [
              "A dangerous fall in body core temperature, below about 35°C",
              "Freezing of the skin on fingers and toes",
              "Illness caused by low oxygen at altitude",
              "Overheating caused by strong sunshine",
            ],
            answerIndex: 0,
            hint: "'Hypo' means under.",
            explanation:
              "Hypothermia is when the body's core temperature drops below about 35°C. Freezing of skin is frostbite; low-oxygen illness is altitude sickness; overheating is heatstroke.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p3-q08",
            question: "Which control measure would best reduce the risk of frostbite on a polar expedition?",
            options: [
              "Wearing cotton gloves",
              "Drinking cold water",
              "Wearing insulated mitts and a face mask, and checking each other's faces regularly",
              "Walking faster to finish sooner",
            ],
            answerIndex: 2,
            hint: "Protect exposed skin and catch early signs.",
            explanation:
              "Insulated mitts, face masks and buddy checks keep skin covered and catch early white patches. Cotton gloves get wet and lose insulation, making frostbite more likely.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p3-q09",
            question: "Which advice best helps prevent altitude sickness when trekking to Everest Base Camp?",
            options: [
              "Fly straight to 5,000 m to save time",
              "Ascend quickly while you feel fit",
              "Ascend slowly with rest days — 'climb high, sleep low'",
              "Sleep at the highest point each day",
            ],
            answerIndex: 2,
            hint: "The body needs time to acclimatise.",
            explanation:
              "Gaining height slowly and sleeping lower than the day's high point lets the body acclimatise. Flying straight to high altitude or rushing up are the main causes of altitude sickness.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p3-q10",
            question: "Why do expeditions to Antarctica or the central Sahara carry a satellite phone rather than relying on a mobile phone?",
            options: [
              "Satellite phones are cheaper",
              "There is no mobile phone network coverage in these remote areas",
              "Mobile phones are banned by the Antarctic Treaty",
              "Satellite phones work without batteries",
            ],
            answerIndex: 1,
            hint: "Think about phone masts.",
            explanation:
              "Remote extreme environments have no mobile masts, but satellites cover almost the whole Earth. Satellite phones are more expensive and still need batteries.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p3-q11",
            question: "What does a personal locator beacon (PLB) do?",
            options: [
              "Measures oxygen levels in the blood",
              "Shows the way like a map",
              "Plays music to keep up morale",
              "Sends a distress signal with your location via satellite to rescue services",
            ],
            answerIndex: 3,
            hint: "It is used only in an emergency.",
            explanation:
              "A PLB transmits an emergency signal and GPS position to search-and-rescue via satellite. A GPS unit shows your position for navigation, but does not call for rescue.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p3-q12",
            question: "In a risk assessment, a hazard scores 3 for likelihood and 4 for severity. Using risk = likelihood × severity, what is the risk score?",
            options: ["12", "7", "1", "34"],
            answerIndex: 0,
            hint: "Multiply, don't add.",
            explanation:
              "3 × 4 = 12. Adding them (7) is a common slip; the method multiplies likelihood by severity.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p3-q13",
            question: "How does a fleece or down mid layer keep you warm?",
            options: [
              "It generates its own heat",
              "It reflects sunlight",
              "It stops all sweat leaving the body",
              "It traps a layer of air, which is a poor conductor of heat",
            ],
            answerIndex: 3,
            hint: "Still air is an insulator.",
            explanation:
              "Mid layers insulate by trapping still air close to the body. They do not produce heat; trapping sweat would actually make you colder.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p3-q14",
            question: "Why is cotton a poor choice for a base layer in cold environments?",
            options: [
              "It holds sweat, stays wet and draws heat away from the body",
              "It is too expensive",
              "It is too warm",
              "It is banned in Antarctica",
            ],
            answerIndex: 0,
            hint: "Wet clothing loses its insulation.",
            explanation:
              "Cotton absorbs moisture and dries slowly; wet fabric conducts heat away, raising the risk of hypothermia. Merino wool or synthetic fibres wick and keep insulating when damp.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p3-q15",
            question: "What is 'wind chill'?",
            options: [
              "Cold wind blowing from the sea",
              "The way wind makes the air feel colder by removing heat from exposed skin faster",
              "A type of polar storm",
              "The temperature at night in a desert",
            ],
            answerIndex: 1,
            hint: "It is about how cold it feels.",
            explanation:
              "Wind strips away the thin layer of warm air next to the skin, so heat is lost faster and it feels much colder than the thermometer reading — raising frostbite risk.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p3-q16",
            question: "When did the Madrid Protocol come into force, and from when can its mining ban be reviewed?",
            options: [
              "1959; reviewed from 1991",
              "1961; reviewed from 2000",
              "1998; reviewed only after 2048",
              "2022; reviewed from 2030",
            ],
            answerIndex: 2,
            hint: "Signed in 1991; reviewable 50 years after it came into force.",
            explanation:
              "Signed in 1991, the Protocol came into force in 1998, and a review is only possible after 2048 — 50 years later. 1959 and 1961 are the Treaty's signing and entry into force.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p3-q17",
            question: "How many countries originally signed the Antarctic Treaty in 1959?",
            options: ["12", "7", "50", "193"],
            answerIndex: 0,
            hint: "It has grown to more than 50 since.",
            explanation:
              "Twelve countries signed in 1959. Seven is the number of countries with territorial claims, and the Treaty now has more than 50 parties.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p3-q18",
            question: "About how far did Shackleton sail in the small lifeboat James Caird to reach help on South Georgia?",
            options: ["About 13 km", "About 130 km", "About 13,000 km", "About 1,300 km"],
            answerIndex: 3,
            hint: "It took about 16 days in a 7 m boat.",
            explanation:
              "The voyage from Elephant Island to South Georgia was about 1,300 km across the stormy Southern Ocean. 13,000 km would be about a third of the way around the world.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-mcq-p3-q19",
            question: "Which tourism activity is most likely to cause long-lasting damage to fragile desert surfaces?",
            options: [
              "Stargazing at a camp",
              "Driving 4×4 vehicles off marked tracks",
              "Buying crafts from a local cooperative",
              "Walking with a local guide on a set route",
            ],
            answerIndex: 1,
            hint: "Think about tyres and slow-growing plants.",
            explanation:
              "Off-road driving crushes desert crusts and plants that take decades to recover, and loosens sand for erosion. Stargazing and guided walks on set routes have very low impact.",
            guideRef: "sahara-deserts",
          },
          {
            id: "xtour-mcq-p3-q20",
            question: "Which of these is an example of greenwashing?",
            options: [
              "A lodge that uses solar power and employs local staff",
              "A park that limits daily visitor numbers",
              "A large cruise company calling its trip 'eco' because it gives out reusable water bottles",
              "A guide teaching visitors about penguin behaviour",
            ],
            answerIndex: 2,
            hint: "It sounds green, but the real impact barely changes.",
            explanation:
              "Greenwashing is claiming to be environmentally friendly without real change. Solar power with local staff, visitor limits and education are genuine sustainable practices.",
            guideRef: "ecotourism-sustainability",
          },
        ],
      },
      {
        id: "xtour-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "xtour-mcq-p4-q01",
            question: "An expedition ship carries 380 passengers. Following IAATO rules, what is the minimum number of separate groups needed to give every passenger a turn ashore at one site?",
            options: ["4", "3", "1", "38"],
            answerIndex: 0,
            hint: "No more than 100 ashore at once.",
            explanation:
              "380 ÷ 100 = 3.8, so 4 groups are needed (for example 100, 100, 100 and 80). Three groups would leave 80 people out; one group of 380 breaks the 100-person limit.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p4-q02",
            question: "Four ships plan Antarctic voyages, carrying 650, 800, 1,200 and 450 passengers. Which ship may land passengers?",
            options: ["The 650-passenger ship", "The 800-passenger ship", "The 1,200-passenger ship", "The 450-passenger ship"],
            answerIndex: 3,
            hint: "Find the ship at or below the limit.",
            explanation:
              "Only ships carrying 500 or fewer passengers may land people, so only the 450-passenger ship qualifies. The others can only cruise and view from the deck.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p4-q03",
            question: "Which policy would most directly reduce dangerous queues near the summit of Everest?",
            options: [
              "Building more lodges in Kathmandu",
              "Limiting permits or allocating summit days so fewer climbers go up on the same day",
              "Raising the price of trekking boots",
              "Banning photography at the summit",
            ],
            answerIndex: 1,
            hint: "Queues happen when too many people climb on the same few days.",
            explanation:
              "Queues form because hundreds of climbers use the same weather window. Fewer permits or staggered summit slots tackle this directly. More lodges in Kathmandu might even increase demand.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-mcq-p4-q04",
            question: "Why does waiting in a queue above 8,000 m greatly increase the risk of death?",
            options: [
              "Because the queue blocks rescue helicopters",
              "Because climbers become bored and careless",
              "Because climbers use up bottled oxygen, get colder and become exhausted while not moving",
              "Because the summit is closed after midday by law",
            ],
            answerIndex: 2,
            hint: "Think about oxygen, cold and energy.",
            explanation:
              "Standing still in the death zone uses oxygen supplies and body heat without progress, increasing the risk of hypoxia, frostbite and exhaustion on the descent. There is no legal summit closing time.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-mcq-p4-q05",
            question: "Why are most Everest summit attempts squeezed into a short period in May?",
            options: [
              "Because permits are only sold in May",
              "Because the Khumbu Icefall closes in June",
              "Because May is the coldest month",
              "Because the jet-stream winds move away from the summit before the summer monsoon arrives",
            ],
            answerIndex: 3,
            hint: "Think about winds and the monsoon.",
            explanation:
              "In May the strong jet stream usually shifts north, giving a short window of calmer weather before monsoon snows begin in June. Spring permits are issued earlier in the year.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-mcq-p4-q06",
            question: "Soot (black carbon) from ship exhausts can land on Antarctic snow. Why does this speed up melting?",
            options: [
              "Darker snow has a lower albedo, so it absorbs more sunlight and warms",
              "Soot is hot when it lands",
              "Soot adds salt to the snow",
              "Soot blocks the wind",
            ],
            answerIndex: 0,
            hint: "Think about reflection: white vs dark surfaces.",
            explanation:
              "Albedo is how much sunlight a surface reflects. Clean snow reflects most sunlight; dark soot reduces albedo, so more energy is absorbed and melting increases. The soot is not hot when it lands.",
            guideRef: "tourism-impacts",
          },
          {
            id: "xtour-mcq-p4-q07",
            question: "Why is Antarctica especially vulnerable to invasive species brought by tourists?",
            options: [
              "Because it has the most plant species of any continent",
              "Because it is warm all year",
              "Because it is isolated, with few native species and little competition, and damage recovers very slowly",
              "Because tourists stay for many months",
            ],
            answerIndex: 2,
            hint: "Isolation and few competitors.",
            explanation:
              "Antarctica's long isolation means it has very few native plants and insects, so a newcomer may face little competition, and the short, cold growing season means recovery is slow. Most tourists stay only a week or two.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p4-q08",
            question: "Port Lockroy on the Antarctic Peninsula is best described as:",
            options: [
              "An oil terminal",
              "A former British base, now a museum and post office run by a heritage trust",
              "The largest Antarctic research station",
              "A hotel for tourists",
            ],
            answerIndex: 1,
            hint: "Tourists can post a postcard there.",
            explanation:
              "Port Lockroy (built 1944) is run by the UK Antarctic Heritage Trust as a museum and post office. Antarctica has no hotels, and mining or oil terminals are banned by the Madrid Protocol.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-mcq-p4-q09",
            question: "Supporters of Antarctic tourism often say visitors become 'ambassadors'. What does this argument mean?",
            options: [
              "Visitors who see Antarctica first-hand are more likely to support its protection and campaign for it",
              "Visitors are given diplomatic passports",
              "Visitors must represent their country at the Treaty meetings",
              "Visitors are paid to advertise cruises",
            ],
            answerIndex: 0,
            hint: "It is about attitudes after the trip.",
            explanation:
              "The 'ambassador' argument says experiencing Antarctica creates supporters for conservation. Critics reply that the trip's carbon footprint may outweigh this benefit.",
            guideRef: "ecotourism-sustainability",
          },
          {
            id: "xtour-mcq-p4-q10",
            question: "A Sherpa guide earns US$5,600 in one Everest season. Nepal's average annual income is about US$1,400. The guide's season earnings are about:",
            options: ["Half the average income", "The same as the average income", "Twice the average income", "Four times the average income"],
            answerIndex: 3,
            hint: "Divide 5,600 by 1,400.",
            explanation:
              "5,600 ÷ 1,400 = 4, so one season earns about four times the average annual income. This helps explain why guides accept such high risks.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-mcq-p4-q11",
            question: "Luxury desert camps near Saharan oases often have showers and swimming pools. Which group is most likely to be harmed?",
            options: [
              "Tourists, who are too cold at night",
              "Oasis farmers, who rely on the same scarce groundwater for their crops",
              "Camel guides, who gain more customers",
              "Airlines, who carry more passengers",
            ],
            answerIndex: 1,
            hint: "Who else needs water in an oasis?",
            explanation:
              "Pools and showers draw on limited groundwater, lowering water tables that farmers' date palms and crops depend on. Guides and airlines gain from more tourism.",
            guideRef: "sahara-deserts",
          },
          {
            id: "xtour-mcq-p4-q12",
            question: "Which statement best explains why very few tourists now visit Timbuktu and much of the central Sahara?",
            options: [
              "The area is too cold for tourists",
              "There are no historic sites there",
              "Conflict and insecurity have led to official travel warnings, and access is difficult",
              "The Antarctic Treaty bans tourism there",
            ],
            answerIndex: 2,
            hint: "Think about safety and accessibility.",
            explanation:
              "Insecurity in parts of Mali, Niger and neighbouring areas has led governments to advise against travel, and the region is remote. Timbuktu actually has famous historic mosques and manuscripts — the anomaly is low tourism despite these attractions.",
            guideRef: "sahara-deserts",
          },
          {
            id: "xtour-mcq-p4-q13",
            question: "Which was the most important reason Scott's polar party died on the return journey?",
            options: [
              "They were attacked by polar bears",
              "A combination of failed transport, man-hauling, food and fuel shortages and severe weather",
              "They got lost because they had no compass",
              "Amundsen took their supplies",
            ],
            answerIndex: 1,
            hint: "Think about energy, supplies and weather together.",
            explanation:
              "Exhausting man-hauling, too little food and fuel, and an unusually cold March combined fatally; they died about 18 km from a depot. Polar bears live only in the Arctic, and Amundsen did not touch Scott's supplies.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-mcq-p4-q14",
            question: "At about what depth was the wreck of Endurance found in 2022?",
            options: ["About 3,000 m", "About 30 m", "About 300 m", "About 30,000 m"],
            answerIndex: 0,
            hint: "Deeper than the height of many mountains in the Alps.",
            explanation:
              "The wreck lies at about 3,008 m in the Weddell Sea, reached by underwater robots. 30,000 m is deeper than any ocean on Earth (the deepest point is about 11,000 m).",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-mcq-p4-q15",
            question: "Why is the wreck of Endurance so well preserved after more than 100 years?",
            options: [
              "It was covered by sand dunes",
              "It was raised and restored in a museum",
              "It was coated in paint by the 2022 expedition",
              "The very cold water has no wood-eating marine organisms such as shipworms",
            ],
            answerIndex: 3,
            hint: "What usually destroys wooden wrecks?",
            explanation:
              "In warmer seas shipworms bore into wood, but they are absent from Antarctic waters, so the timber is intact. The wreck was not raised — it is a protected Historic Site and Monument.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-mcq-p4-q16",
            question: "How many of the 28 men on Shackleton's Endurance expedition survived?",
            options: ["None", "5", "All 28", "14"],
            answerIndex: 2,
            hint: "It is famous as a story of survival.",
            explanation:
              "All 28 men survived, thanks largely to Shackleton's leadership and the James Caird voyage. Five is the size of Scott's polar party, who all died.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-mcq-p4-q17",
            question: "Which trip is the BEST example of sustainable tourism in an extreme environment?",
            options: [
              "A 3,000-passenger cruise passing the Antarctic Peninsula",
              "A 4×4 rally across Saharan dunes",
              "A self-guided Everest climb that leaves gear at Camp 4",
              "A small-group trek using locally owned lodges, paying conservation fees and carrying out all waste",
            ],
            answerIndex: 3,
            hint: "Check environment, economy and society.",
            explanation:
              "Small groups, local ownership, conservation fees and carrying out waste meet all three pillars. The large cruise has a big footprint and little local benefit; the rally and abandoned gear damage the environment.",
            guideRef: "ecotourism-sustainability",
          },
          {
            id: "xtour-mcq-p4-q18",
            question: "Why is Antarctic tourism said to have mainly economic benefits for places OUTSIDE Antarctica?",
            options: [
              "Because tourists are not allowed to spend money",
              "Because Antarctica has no permanent population; spending goes to tour companies and gateway towns such as Ushuaia",
              "Because the Treaty bans all businesses",
              "Because tourists only visit in winter",
            ],
            answerIndex: 1,
            hint: "Who lives in Antarctica permanently?",
            explanation:
              "With no indigenous or permanent population, money flows to operators, crews and gateway ports. Tourists do spend money (e.g. at Port Lockroy's shop), and tourism happens in summer, not winter.",
            guideRef: "tourism-impacts",
          },
          {
            id: "xtour-mcq-p4-q19",
            question: "Using the risk score method (likelihood × severity, each 1–5), which hazard should a Sahara trek leader prioritise first?",
            options: [
              "Heat exhaustion: likelihood 4, severity 4",
              "Sunburn: likelihood 4, severity 2",
              "Sandstorm: likelihood 2, severity 3",
              "Scorpion sting: likelihood 1, severity 4",
            ],
            answerIndex: 0,
            hint: "Calculate each score.",
            explanation:
              "Heat exhaustion scores 4 × 4 = 16, the highest. Sunburn scores 8, sandstorm 6 and scorpion sting 4. A scorpion sting sounds scary but is unlikely.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-mcq-p4-q20",
            question: "Which is the strongest criticism of IAATO as a way of managing Antarctic tourism?",
            options: [
              "Its rules are too weak to protect wildlife at all",
              "It bans all landings",
              "It is voluntary self-regulation, so a company that does not join is not bound by its rules",
              "It is run by the Chinese government",
            ],
            answerIndex: 2,
            hint: "Who has to follow IAATO's rules?",
            explanation:
              "IAATO's rules are strong and widely followed, but membership is voluntary, so enforcement depends on companies choosing to join and on national permit systems of Treaty countries. IAATO does not ban landings and is not a government body.",
            guideRef: "antarctic-rules",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "xtour-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "xtour-qa-p1-q01",
            question: "Define 'ecotourism'.",
            marks: 2,
            hint: "It has more than one part — nature AND people.",
            modelAnswer:
              "Ecotourism is responsible travel to natural areas that conserves the environment and benefits local people, while educating visitors about the place.",
            markScheme: [
              { point: "Conserves/protects the natural environment", keywords: ["conserv", "protect", "environment", "nature"] },
              { point: "Benefits local people or educates visitors", keywords: ["local", "communit", "educat", "learn"] },
            ],
            commonError: "Saying only 'tourism in nature' — that misses conservation and local benefit.",
            guideRef: "ecotourism-sustainability",
          },
          {
            id: "xtour-qa-p1-q02",
            question: "State two pull factors that attract tourists to Antarctica.",
            marks: 2,
            hint: "Pull factors are features of the destination.",
            modelAnswer:
              "Unique wildlife such as penguins, whales and seals; dramatic, untouched icy landscapes such as glaciers and icebergs. (Also: 'seventh continent' bucket-list status, remoteness and solitude.)",
            markScheme: [
              { point: "Wildlife", keywords: ["penguin", "whale", "seal", "wildlife", "animal"] },
              { point: "Landscape/scenery or uniqueness/remoteness", keywords: ["landscape", "scenery", "iceberg", "glacier", "remote", "seventh continent"] },
            ],
            commonError: "Giving push factors such as 'people are richer'.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-qa-p1-q03",
            question: "Study the data on Antarctic visitors per season. 1992–93: 6,700; 2000–01: 12,000; 2010–11: 34,000; 2019–20: 74,000; 2020–21: almost none (COVID-19); 2022–23: 105,000. Describe the trend in visitor numbers.",
            marks: 3,
            hint: "Overall trend + data + anomaly (TEA).",
            modelAnswer:
              "Visitor numbers have increased rapidly overall, from about 6,700 in 1992–93 to about 105,000 in 2022–23 — more than 15 times as many. The growth sped up after 2010. The anomaly is 2020–21, when numbers fell to almost zero because of the COVID-19 pandemic, before recovering to a new record.",
            markScheme: [
              { point: "Identifies overall increasing trend", keywords: ["increas", "rise", "rose", "grow", "upward"] },
              { point: "Uses data to support", keywords: ["6,700", "105,000", "6700", "105000", "74,000"] },
              { point: "Identifies the anomaly (COVID drop)", keywords: ["covid", "pandemic", "anomaly", "fell", "drop"] },
            ],
            commonError: "Listing every number without stating the overall trend or the anomaly.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-qa-p1-q04",
            question: "Antarctic visitors rose from 6,700 in 1992–93 to 105,000 in 2022–23. Calculate the percentage increase. Show your working.",
            marks: 2,
            hint: "(new − old) ÷ old × 100.",
            modelAnswer:
              "105,000 − 6,700 = 98,300. 98,300 ÷ 6,700 = 14.67. × 100 = about 1,467% increase (about 1,470%).",
            markScheme: [
              { point: "Correct method shown (difference divided by original)", keywords: ["98,300", "98300", "÷ 6,700", "/6700", "/ 6700", "÷6700"] },
              { point: "Correct answer about 1,467%", keywords: ["1,467", "1467", "1,470", "1470", "1,466"] },
            ],
            commonError: "Dividing by 105,000 instead of the original value 6,700.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-qa-p1-q05",
            question: "Outline the main aims of the Antarctic Treaty (1959).",
            marks: 3,
            hint: "Peace, science and claims.",
            modelAnswer:
              "The Treaty keeps Antarctica for peaceful purposes only, banning military activity and nuclear explosions. It promotes freedom of scientific research and the sharing of results between countries. It freezes territorial claims, so no country can make new claims or enlarge existing ones.",
            markScheme: [
              { point: "Peaceful use / no military or nuclear activity", keywords: ["peace", "military", "nuclear", "weapon"] },
              { point: "Scientific research and cooperation", keywords: ["scien", "research", "share", "cooperat"] },
              { point: "Territorial claims frozen", keywords: ["claim", "frozen", "freez", "territor", "sovereign"] },
            ],
            commonError: "Saying the Treaty bans mining — that was the 1991 Madrid Protocol.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-qa-p1-q06",
            question: "Explain why the Madrid Protocol (1991) is important for the future of Antarctica.",
            marks: 3,
            hint: "What does it ban and what does it require?",
            modelAnswer:
              "The Madrid Protocol bans all mining and mineral extraction, so Antarctica's rocks and ice cannot be exploited for minerals or oil, which could cause spills and pollution. It makes Antarctica a natural reserve devoted to peace and science. It also requires environmental impact assessments before activities such as tourism or building stations, so damage is predicted and reduced. The ban cannot be reviewed until after 2048.",
            markScheme: [
              { point: "Bans mining/mineral extraction", keywords: ["mining", "mine", "mineral", "oil", "extract"] },
              { point: "Explains benefit, e.g. avoids pollution/damage; natural reserve", keywords: ["pollut", "spill", "damage", "natural reserve", "protect"] },
              { point: "Requires environmental impact assessment / long-term (2048)", keywords: ["impact assessment", "assessment", "eia", "2048", "long-term"] },
            ],
            commonError: "Confusing the Protocol with IAATO's landing rules.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-qa-p1-q07",
            question: "Describe three rules that IAATO tour operators follow when landing tourists in Antarctica.",
            marks: 3,
            hint: "Numbers, cleaning and wildlife.",
            modelAnswer:
              "No more than 100 people can be ashore at a site at one time. Ships carrying more than 500 passengers cannot land anyone. Visitors must wash and disinfect their boots and vacuum their clothing to prevent introducing non-native species, and must stay about 5 m from wildlife and leave nothing behind.",
            markScheme: [
              { point: "Max 100 ashore at once", keywords: ["100", "hundred", "ashore at", "per site"] },
              { point: "Ships over 500 passengers cannot land", keywords: ["500", "five hundred", "large ship", "big ship"] },
              { point: "Biosecurity / 5 m from wildlife / nothing left behind", keywords: ["boot", "wash", "biosecurity", "5 m", "5 metres", "litter"] },
            ],
            commonError: "Writing vague rules such as 'be careful' or 'respect nature'.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-qa-p1-q08",
            question: "Explain why biosecurity is so important in Antarctica.",
            marks: 4,
            hint: "What could arrive, and why would it be harmful there in particular?",
            modelAnswer:
              "Tourists can carry seeds, soil, insects or diseases on their boots, clothing and bags. Antarctica has been isolated for millions of years and has very few native plant and insect species, so an invasive species may face little competition and spread quickly. Diseases such as bird flu could also spread through crowded penguin colonies. Because the growing season is short and cold, damaged ecosystems recover very slowly, so prevention through boot-washing and vacuuming is essential.",
            markScheme: [
              { point: "Tourists may carry seeds/soil/organisms", keywords: ["seed", "soil", "insect", "organism", "carry"] },
              { point: "Few native species/little competition — invasive species spread", keywords: ["invasive", "non-native", "competition", "few native", "spread"] },
              { point: "Disease risk to wildlife", keywords: ["disease", "bird flu", "virus", "avian", "patho"] },
              { point: "Slow recovery / prevention needed (boot-washing)", keywords: ["slow", "recover", "boot", "wash", "vacuum"] },
            ],
            commonError: "Explaining 'boot-washing keeps things clean' without saying what could be introduced or why it matters.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-qa-p1-q09",
            question: "Identify two natural hazards that climbers face on Mount Everest.",
            marks: 2,
            hint: "Think about ice, snow, weather and air.",
            modelAnswer:
              "Avalanches and collapsing seracs in the Khumbu Icefall; lack of oxygen (altitude sickness) in the death zone. Others: crevasses, extreme cold/frostbite, high winds.",
            markScheme: [
              { point: "First hazard", keywords: ["avalanche", "serac", "crevasse", "icefall"] },
              { point: "Second hazard", keywords: ["oxygen", "altitude", "cold", "frostbite", "wind", "storm"] },
            ],
            commonError: "Naming human problems (e.g. crowding) when the question asks for natural hazards.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-qa-p1-q10",
            question: "Explain why Mount Everest has become so crowded during the climbing season.",
            marks: 4,
            hint: "Demand, permits, weather and commercial companies.",
            modelAnswer:
              "Everest is the world's highest mountain, so it is a top bucket-list goal and there is huge demand. Commercial companies now guide less experienced climbers, and Nepal issues many permits because they bring income (a record of about 478 in 2023). Most climbers aim for the same short weather window in May, when the jet-stream winds move away before the monsoon, so hundreds try to summit on the same few days. The route has only one fixed line along the summit ridge, so climbers must queue.",
            markScheme: [
              { point: "High demand / bucket list / highest mountain", keywords: ["highest", "bucket", "demand", "famous", "popular"] },
              { point: "Many permits / commercial guiding / income for Nepal", keywords: ["permit", "commercial", "company", "income", "478"] },
              { point: "Short weather window in May", keywords: ["weather window", "in may", "jet stream", "monsoon", "calm"] },
              { point: "Narrow route / single fixed rope causes queues", keywords: ["queue", "narrow", "rope", "ridge", "bottleneck"] },
            ],
            commonError: "Describing the queue photo without explaining the causes of crowding.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-qa-p1-q11",
            question: "Describe how waste is being managed on Mount Everest.",
            marks: 3,
            hint: "Deposit, bags and clean-ups.",
            modelAnswer:
              "Each expedition pays a US$4,000 deposit, which is refunded only if each climber brings down 8 kg of rubbish. Since 2024 climbers must carry poo bags and bring their human waste down. The Nepal Army and local groups also run clean-up campaigns that remove tonnes of rubbish.",
            markScheme: [
              { point: "Deposit refunded for bringing down 8 kg", keywords: ["deposit", "8 kg", "8kg", "4,000", "refund"] },
              { point: "Poo bags / human waste carried down", keywords: ["poo", "human waste", "toilet", "bag"] },
              { point: "Clean-up campaigns", keywords: ["clean", "army", "campaign", "collect"] },
            ],
            commonError: "Only describing the problem of waste rather than how it is managed.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-qa-p1-q12",
            question: "Explain why tourists visit the Sahara Desert.",
            marks: 3,
            hint: "Landscape, activities and culture.",
            modelAnswer:
              "Tourists come for the spectacular landscapes, such as the huge sand dunes of Erg Chebbi near Merzouga in Morocco. They want adventure activities such as camel treks, 4×4 trips and sandboarding, or challenges like the Marathon des Sables. Many are attracted by the culture of the Amazigh (Berber) people, oases and kasbahs, and by clear night skies for stargazing.",
            markScheme: [
              { point: "Landscape/dunes", keywords: ["dune", "landscape", "scenery", "sand", "erg"] },
              { point: "Adventure activities", keywords: ["camel", "4x4", "4×4", "sandboard", "trek", "marathon"] },
              { point: "Culture or stargazing", keywords: ["culture", "amazigh", "berber", "oasis", "stargaz", "kasbah"] },
            ],
            commonError: "Writing 'to see the desert' without saying what is attractive about it.",
            guideRef: "sahara-deserts",
          },
          {
            id: "xtour-qa-p1-q13",
            question: "Name the three layers in a layered clothing system for a cold environment and state the job of each.",
            marks: 3,
            hint: "W-I-P.",
            modelAnswer:
              "Base layer: wicks sweat away from the skin to keep it dry. Mid layer (fleece or down): insulates by trapping warm air. Outer shell: windproof and waterproof, protecting against wind chill, rain and snow.",
            markScheme: [
              { point: "Base layer wicks sweat", keywords: ["wick", "sweat", "moisture", "dry"] },
              { point: "Mid layer insulates/traps air", keywords: ["insulat", "trap", "fleece", "warm air"] },
              { point: "Outer shell windproof/waterproof", keywords: ["windproof", "waterproof", "shell", "wind", "rain"] },
            ],
            commonError: "Naming the layers but not stating what each one does.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p1-q14",
            question: "Explain why a risk assessment is essential when planning an expedition to an extreme environment.",
            marks: 4,
            hint: "What does a risk assessment do, step by step?",
            modelAnswer:
              "A risk assessment identifies the hazards in advance, such as frostbite, crevasses or heatstroke. It judges how likely each is and how severe the harm would be, so the team can prioritise the most serious risks. It sets control measures, such as roping up on glaciers or carrying extra water, to reduce the risk. In extreme environments rescue may take days, so preventing problems is far safer than reacting to them.",
            markScheme: [
              { point: "Identifies hazards", keywords: ["hazard", "identif", "danger"] },
              { point: "Judges likelihood and severity / prioritises", keywords: ["likelihood", "severity", "likely", "prioriti", "score"] },
              { point: "Sets control measures", keywords: ["control", "reduce", "measure", "prevent", "mitigat"] },
              { point: "Rescue is slow/remote, so prevention matters", keywords: ["rescue", "remote", "isolated", "evacuat", "emergenc"] },
            ],
            commonError: "Listing hazards without explaining how the assessment reduces them.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p1-q15",
            question: "'Tourism in Antarctica can be positive.' To what extent do you agree? Use evidence in your answer.",
            marks: 6,
            hint: "PEEL: positives, negatives, management, then a judgement.",
            modelAnswer:
              "To a large extent I agree, as long as it remains well managed. Tourism brings economic benefits: thousands of jobs on ships and in gateway towns such as Ushuaia. Visitors also become 'ambassadors' who support protecting Antarctica. Its impacts are reduced by strict IAATO rules: no more than 100 people ashore at a site, no landings from ships with more than 500 passengers, boot-washing for biosecurity and staying about 5 m from wildlife. The Madrid Protocol also bans mining. However, numbers have risen from about 6,700 in 1992–93 to over 100,000 in 2022–23, increasing trampling and disturbance, the risk of invasive species, and carbon emissions from flights and ships, while IAATO is voluntary. Overall, tourism can be positive only if numbers are controlled and the rules are enforced as it keeps growing.",
            markScheme: [
              { point: "Positive economic impact with evidence", keywords: ["job", "ushuaia", "income", "econom", "money"] },
              { point: "Positive awareness/ambassadors", keywords: ["ambassador", "awareness", "educat", "campaign"] },
              { point: "Management rules (IAATO/Madrid) with detail", keywords: ["iaato", "100", "500", "boot", "madrid"] },
              { point: "Negative environmental impact", keywords: ["trampl", "invasive", "disturb", "pollut", "spill"] },
              { point: "Uses data on growth or carbon", keywords: ["100,000", "105,000", "6,700", "carbon", "emission"] },
              { point: "Reaches a justified judgement", keywords: ["overall", "conclude", "extent", "therefore", "on balance"] },
            ],
            commonError: "Writing a one-sided answer with no judgement or no figures.",
            guideRef: "tourism-impacts",
          },
        ],
      },
      {
        id: "xtour-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "xtour-qa-p2-q01",
            question: "Define 'sustainable tourism'.",
            marks: 2,
            hint: "Today and the future.",
            modelAnswer:
              "Sustainable tourism meets the needs of today's tourists and host communities without damaging the environment, economy or culture so that future generations can still benefit.",
            markScheme: [
              { point: "Meets present needs of tourists/hosts", keywords: ["present", "today", "current", "needs of", "meets"] },
              { point: "Without harming the future / future generations", keywords: ["future", "generation", "long term", "long-term"] },
            ],
            commonError: "Defining it only as 'eco-friendly' without the idea of the future.",
            guideRef: "ecotourism-sustainability",
          },
          {
            id: "xtour-qa-p2-q02",
            question: "What is meant by 'leakage' in tourism? Give an example.",
            marks: 2,
            hint: "Where does the money end up?",
            modelAnswer:
              "Leakage is when money spent by tourists leaves the local area instead of benefiting local people — for example, when an Everest trekker books with a foreign-owned company whose profits go overseas, or when hotels import food.",
            markScheme: [
              { point: "Money leaving the local area/economy", keywords: ["leave", "out of", "overseas", "abroad", "lost"] },
              { point: "Valid example (foreign company, imported goods)", keywords: ["foreign", "import", "international", "company", "chain"] },
            ],
            commonError: "Confusing leakage with a physical leak of fuel or water.",
            guideRef: "tourism-impacts",
          },
          {
            id: "xtour-qa-p2-q03",
            question: "Explain the positive economic impacts of mountain tourism for Nepal.",
            marks: 4,
            hint: "Jobs, permits, multiplier effect, infrastructure.",
            modelAnswer:
              "Tourism creates jobs for guides, porters, cooks and lodge owners in the Khumbu region. Climbing Sherpas can earn US$4,000–10,000 a season, several times the national average income. The government earns money from permits (about US$15,000 per foreign Everest climber from 2025), which can be spent on services. Money spent in lodges and shops is re-spent locally — the multiplier effect — helping to pay for schools, clinics and small hydro-electric schemes.",
            markScheme: [
              { point: "Jobs for local people", keywords: ["job", "employ", "guide", "porter", "lodge"] },
              { point: "High earnings with evidence", keywords: ["earn", "4,000", "10,000", "dollar", "average"] },
              { point: "Government income from permits", keywords: ["permit", "government", "fee", "15,000", "11,000"] },
              { point: "Multiplier effect / infrastructure", keywords: ["multiplier", "school", "clinic", "hydro", "re-spent"] },
            ],
            commonError: "Making the same point (jobs) several times in different words.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-qa-p2-q04",
            question: "Explain the negative environmental impacts of tourism in Antarctica.",
            marks: 4,
            hint: "Land, wildlife, sea and air.",
            modelAnswer:
              "Visitors can trample fragile mosses and lichens, which take decades to recover in the short, cold growing season. Groups close to penguin and seal colonies can disturb breeding animals and cause stress. Seeds and diseases carried on clothing could introduce invasive species. Ships risk fuel spills (MS Explorer sank in 2007) and their emissions add greenhouse gases and soot, which darkens snow and speeds melting.",
            markScheme: [
              { point: "Trampling of vegetation", keywords: ["trampl", "moss", "lichen", "vegetation", "plant"] },
              { point: "Disturbance of wildlife", keywords: ["disturb", "penguin", "seal", "breeding", "stress"] },
              { point: "Invasive species/disease", keywords: ["invasive", "seed", "non-native", "disease", "alien"] },
              { point: "Pollution from ships (fuel, emissions, soot)", keywords: ["fuel", "spill", "emission", "carbon", "soot", "explorer"] },
            ],
            commonError: "Writing 'pollution' without saying what kind or where it comes from.",
            guideRef: "tourism-impacts",
          },
          {
            id: "xtour-qa-p2-q05",
            question: "Explain the social impacts, both positive and negative, of Everest tourism on Sherpa communities.",
            marks: 4,
            hint: "Health, safety, education and culture.",
            modelAnswer:
              "Positively, tourism income has helped build schools and health clinics in the Khumbu, improving education and healthcare, and Sherpa culture has gained worldwide respect. Negatively, Sherpa guides face high risks — 16 Nepali guides died in the 2014 Icefall avalanche — leaving families without income. Many young people now leave farming for seasonal tourism work or move away, changing traditional ways of life.",
            markScheme: [
              { point: "Positive: education/health improvements", keywords: ["school", "educat", "clinic", "health", "hospital"] },
              { point: "Positive: cultural pride/recognition", keywords: ["culture", "pride", "respect", "recogni", "famous"] },
              { point: "Negative: danger/deaths with evidence", keywords: ["death", "die", "killed", "16", "risk", "avalanche"] },
              { point: "Negative: change in traditional way of life", keywords: ["tradition", "farming", "way of life", "leave", "migrat"] },
            ],
            commonError: "Writing about economic impacts (wages) when the question asks for social impacts.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-qa-p2-q06",
            question: "Study the data on Everest climbing permits issued by Nepal. 2019: 381; 2021: 408; 2023: 478. Describe the trend and calculate the percentage increase from 2019 to 2023.",
            marks: 3,
            hint: "Trend + data + (new − old) ÷ old × 100.",
            modelAnswer:
              "The number of permits increased steadily from 381 in 2019 to a record 478 in 2023. Percentage increase = (478 − 381) ÷ 381 × 100 = 97 ÷ 381 × 100 ≈ 25%.",
            markScheme: [
              { point: "Describes increasing trend", keywords: ["increas", "rise", "rose", "grew", "upward"] },
              { point: "Quotes data", keywords: ["381", "478", "408"] },
              { point: "Correct % increase (about 25%)", keywords: ["25", "25.5", "25.4"] },
            ],
            commonError: "Dividing 97 by 478 (giving about 20%) instead of by the original 381.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-qa-p2-q07",
            question: "Suggest two ways Everest could be made safer and less crowded. Explain how each would help.",
            marks: 4,
            hint: "Strategy + 'this would help because…', twice.",
            modelAnswer:
              "First, Nepal could limit the number of permits or allocate summit days, so fewer climbers are on the summit ridge at once and queues in the death zone are shorter. Second, permits could require proof of experience, such as having climbed a 7,000 m peak, so climbers are more skilled, move faster and need fewer rescues, which also reduces the risk to Sherpa guides.",
            markScheme: [
              { point: "Strategy 1 (limit permits/allocate days/higher fees)", keywords: ["limit", "fewer permits", "cap", "slot", "fee", "lottery"] },
              { point: "Explains how strategy 1 helps (shorter queues)", keywords: ["queue", "crowd", "fewer people", "death zone", "wait"] },
              { point: "Strategy 2 (experience requirement/training/better forecasts)", keywords: ["experience", "7,000", "train", "qualif", "forecast"] },
              { point: "Explains how strategy 2 helps (fewer rescues/safer)", keywords: ["rescue", "faster", "skill", "safer", "risk"] },
            ],
            commonError: "Giving strategies without explaining how they reduce crowding or danger.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-qa-p2-q08",
            question: "Describe the climate challenges that tourists face in hot deserts such as the Sahara.",
            marks: 3,
            hint: "Day, night, rain and sun.",
            modelAnswer:
              "Daytime temperatures can exceed 45°C in summer, risking heat exhaustion and heatstroke. There is very little rain (under 250 mm a year), so water must be carried and dehydration is a danger. Clear skies cause a huge diurnal range, so nights can be near freezing in winter, and strong sun causes sunburn; winds can raise sandstorms.",
            markScheme: [
              { point: "Very high day temperatures / heat illness", keywords: ["45", "hot", "heat", "40"] },
              { point: "Low rainfall / dehydration", keywords: ["rain", "250", "dry", "dehydrat", "water"] },
              { point: "Cold nights / diurnal range / sun / sandstorms", keywords: ["night", "diurnal", "freez", "sandstorm", "sunburn"] },
            ],
            commonError: "Forgetting that desert nights can be very cold.",
            guideRef: "sahara-deserts",
          },
          {
            id: "xtour-qa-p2-q09",
            question: "Explain the negative impacts of tourism in the Sahara.",
            marks: 4,
            hint: "Water, land, litter and culture.",
            modelAnswer:
              "Hotels and desert camps with showers and pools use scarce groundwater, lowering water tables that oasis farmers need for crops. Off-road 4×4 driving crushes fragile desert plants and crusts, causing erosion that takes decades to recover. Litter lasts a very long time because there is too little moisture for it to decompose. Amazigh culture can become a staged performance for tourists, losing its meaning.",
            markScheme: [
              { point: "Water use competing with locals", keywords: ["water", "groundwater", "pool", "shower", "oasis"] },
              { point: "Off-road driving damage/erosion", keywords: ["4x4", "4×4", "off-road", "erosion", "crust", "vehicle"] },
              { point: "Litter persisting (slow decomposition)", keywords: ["litter", "rubbish", "waste", "decompos"] },
              { point: "Cultural change/staging", keywords: ["culture", "staged", "tradition", "amazigh", "berber"] },
            ],
            commonError: "Giving impacts that apply to Antarctica (e.g. penguins) rather than deserts.",
            guideRef: "sahara-deserts",
          },
          {
            id: "xtour-qa-p2-q10",
            question: "Using the Annapurna Conservation Area Project (ACAP) as an example, explain how ecotourism can benefit both local people and the environment.",
            marks: 4,
            hint: "Where does the fee go? Who manages it?",
            modelAnswer:
              "In ACAP, set up in Nepal in 1986, trekkers pay an entry fee that is reinvested in the area rather than leaking abroad. It pays for conservation such as tree planting and trail repairs, protecting forests from overuse. Local committees help manage the area and run lodges, so local people earn income and have a say. Projects such as promoting kerosene and solar power reduce firewood cutting, protecting forests while improving lives, and funds also support schools and health posts.",
            markScheme: [
              { point: "Names ACAP/Nepal with detail (1986, fee)", keywords: ["acap", "annapurna", "1986", "fee", "permit"] },
              { point: "Environmental benefit (conservation/less firewood)", keywords: ["conserv", "forest", "firewood", "tree", "trail"] },
              { point: "Local economic benefit (jobs/lodges/money stays)", keywords: ["lodge", "income", "job", "local", "money"] },
              { point: "Community involvement or services", keywords: ["committee", "school", "health", "communit", "manage"] },
            ],
            commonError: "Describing ACAP's scenery instead of how the scheme works.",
            guideRef: "ecotourism-sustainability",
          },
          {
            id: "xtour-qa-p2-q11",
            question: "Explain why people on a polar expedition need far more food energy than they would at home.",
            marks: 3,
            hint: "Cold + effort.",
            modelAnswer:
              "The body burns extra energy to keep warm in extreme cold and wind. Pulling a heavy sledge or skiing for many hours is very hard physical work. As a result a man-hauling expedition member may need 5,000–6,000+ kcal a day compared with about 2,000–2,500 kcal at home, so food must be high-energy, such as fats, nuts and chocolate.",
            markScheme: [
              { point: "Energy needed to keep warm in cold", keywords: ["warm", "cold", "heat", "temperature"] },
              { point: "Hard physical work (man-hauling, skiing)", keywords: ["haul", "pull", "sledge", "ski", "exercise", "physical"] },
              { point: "Uses figures (5,000–6,000 vs 2,000)", keywords: ["5,000", "6,000", "5000", "6000", "kcal", "calorie"] },
            ],
            commonError: "Saying 'they get hungry' without explaining where the energy goes.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p2-q12",
            question: "A group of 4 people plan a 5-day trek in the Sahara. Each person needs 5 litres of water per day. Calculate the total water needed and explain one other factor the planners should consider about water.",
            marks: 3,
            hint: "Multiply people × days × litres.",
            modelAnswer:
              "4 people × 5 days × 5 litres = 100 litres. Water weighs 1 kg per litre, so 100 kg is too heavy to carry on foot — they will need camels or a vehicle, or must plan a route via reliable wells/oases, with a safety reserve in case of delays or extra heat.",
            markScheme: [
              { point: "Correct method", keywords: ["4 × 5 × 5", "4 x 5 x 5", "4x5x5", "4 people", "5 days", "20 litres"] },
              { point: "Correct answer 100 litres", keywords: ["100", "hundred", "100 l", "100 litres"] },
              { point: "Other water factor (weight, resupply, reserve, purification)", keywords: ["weight", "heavy", "camel", "wells", "oases", "reserve"] },
            ],
            commonError: "Calculating for one person only (25 litres).",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p2-q13",
            question: "Explain what communications equipment an expedition to Antarctica should carry, and why.",
            marks: 3,
            hint: "No mobile signal.",
            modelAnswer:
              "There is no mobile coverage, so the team needs a satellite phone for regular check-ins and to call for help. A personal locator beacon (PLB) can send a distress signal with the team's position to rescue services via satellite. A GPS device helps with navigation in whiteouts. They should agree daily check-in times so a missed call triggers an alert.",
            markScheme: [
              { point: "Satellite phone", keywords: ["satellite phone", "sat phone", "satphone", "satellite"] },
              { point: "PLB/emergency beacon", keywords: ["plb", "beacon", "locator", "distress"] },
              { point: "Reason: no mobile coverage / remote / rescue", keywords: ["no signal", "coverage", "remote", "rescue", "mast"] },
            ],
            commonError: "Suggesting a mobile phone or walkie-talkies as the main communication.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p2-q14",
            question: "Compare the expeditions of Amundsen and Scott to the South Pole in 1911–12.",
            marks: 4,
            hint: "Use 'whereas' — dates, transport, outcome.",
            modelAnswer:
              "Amundsen reached the South Pole on 14 December 1911, whereas Scott arrived 34 days later on 17 January 1912. Amundsen used dog sledges and skis, whereas Scott relied on motor sledges and ponies that failed, so his men had to man-haul. Amundsen laid large, well-marked depots, whereas Scott's supplies had a small safety margin. All of Amundsen's team returned safely, whereas all five of Scott's polar party died on the return.",
            markScheme: [
              { point: "Dates/who arrived first", keywords: ["1911", "1912", "first", "34 days", "december"] },
              { point: "Transport contrast", keywords: ["dog", "ski", "pony", "ponies", "motor", "man-haul"] },
              { point: "Supplies/depots contrast", keywords: ["depot", "food", "supplies", "fuel"] },
              { point: "Outcome contrast", keywords: ["died", "death", "survived", "returned", "safely"] },
            ],
            commonError: "Describing each expedition separately without directly comparing them.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-qa-p2-q15",
            question: "Evaluate whether tourism on Mount Everest does more good than harm. Use evidence in your answer.",
            marks: 6,
            hint: "Good (economic, social) vs harm (environmental, safety), then judge.",
            modelAnswer:
              "Everest tourism does a lot of economic good. Sherpa guides can earn US$4,000–10,000 a season, several times Nepal's average income of about US$1,400, and permits (about US$15,000 each) bring government revenue. This money has helped build schools and clinics in the Khumbu. However, the harm is serious: crowding in the death zone has caused deaths (11 in 2019), Sherpas carry the greatest risk (16 killed in the 2014 avalanche), and oxygen bottles, tents and human waste pollute the mountain. Management is improving — the 8 kg rubbish deposit and compulsory poo bags since 2024 reduce waste. On balance, tourism does more good than harm economically, but only if crowding is controlled and guides are better protected.",
            markScheme: [
              { point: "Economic benefit with figures", keywords: ["earn", "income", "permit", "4,000", "15,000", "revenue"] },
              { point: "Social benefit (schools, clinics)", keywords: ["school", "clinic", "health", "educat"] },
              { point: "Harm: crowding/deaths with evidence", keywords: ["death", "died", "crowd", "queue", "2019", "2014"] },
              { point: "Harm: waste/environment", keywords: ["waste", "rubbish", "oxygen bottle", "litter", "pollut"] },
              { point: "Management mentioned (deposit, poo bags)", keywords: ["deposit", "8 kg", "poo", "clean", "manage"] },
              { point: "Clear judgement", keywords: ["overall", "on balance", "conclude", "therefore", "more good", "more harm"] },
            ],
            commonError: "Not reaching a judgement, or ignoring the risk to Sherpa guides.",
            guideRef: "everest-mountains",
          },
        ],
      },
      {
        id: "xtour-qa-p3",
        title: "Written Paper 3",
        questions: [
          {
            id: "xtour-qa-p3-q01",
            question: "What is IAATO, and why was it set up?",
            marks: 2,
            hint: "Who are the members, and what do they agree to?",
            modelAnswer:
              "IAATO is the International Association of Antarctica Tour Operators, founded in 1991. It was set up so that tour companies regulate themselves, following agreed rules that keep Antarctic tourism safe and environmentally responsible.",
            markScheme: [
              { point: "Association of tour operators/companies", keywords: ["tour operator", "association", "companies", "operators"] },
              { point: "Purpose: self-regulation / safe and responsible tourism", keywords: ["self-regulat", "rules", "responsible", "safe", "protect"] },
            ],
            commonError: "Describing IAATO as the government of Antarctica.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-qa-p3-q02",
            question: "Explain why ships carrying more than 500 passengers are not allowed to land tourists in Antarctica.",
            marks: 3,
            hint: "Think about how long landings would take and what could go wrong.",
            modelAnswer:
              "With only 100 people allowed ashore at once, landing more than 500 people would take many rotations and keep sites busy for long periods, causing more trampling and disturbance of wildlife. Large ships carry more fuel, so an accident could cause a serious spill. A rescue of thousands of people in such a remote place would be extremely difficult.",
            markScheme: [
              { point: "Too many people for the 100-ashore limit / long site use", keywords: ["100", "too many", "rotation", "pressure", "busy"] },
              { point: "More trampling/disturbance", keywords: ["trampl", "disturb", "wildlife", "damage"] },
              { point: "Safety: fuel spills / difficult rescue", keywords: ["spill", "fuel", "rescue", "evacuat", "accident"] },
            ],
            commonError: "Saying large ships are 'banned from Antarctica' — they may cruise but not land people.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-qa-p3-q03",
            question: "An expedition ship has 180 passengers and wants to visit a gentoo penguin colony. Explain how IAATO rules would shape the landing plan.",
            marks: 3,
            hint: "Apply the numbers, then the behaviour rules.",
            modelAnswer:
              "The ship is under 500 passengers, so it may land people, but only 100 can be ashore at once, so passengers go in two groups (e.g. 90 and 90) taking turns. No other ship can be at the site at the same time. Everyone washes boots and vacuums clothing before and after, keeps about 5 m from the penguins, stays on guided routes with roughly one guide per 20 passengers, and takes nothing ashore or away.",
            markScheme: [
              { point: "Two groups / no more than 100 ashore", keywords: ["two group", "2 group", "100", "turns", "split"] },
              { point: "Biosecurity before/after", keywords: ["boot", "wash", "vacuum", "biosecurity", "disinfect"] },
              { point: "Wildlife distance / guides / one ship", keywords: ["5 m", "5 metres", "guide", "one ship", "distance"] },
            ],
            commonError: "Not applying the 100-person limit to the actual number of passengers.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-qa-p3-q04",
            question: "Explain what 'last chance tourism' is and why some people call it a paradox.",
            marks: 4,
            hint: "What is the cause of the change they want to see?",
            modelAnswer:
              "Last chance tourism is travelling to see places before they disappear or change, such as Antarctic sea ice or Himalayan glaciers that are shrinking due to climate change. It is a paradox because the long-haul flights and ship voyages needed to reach these places release large amounts of greenhouse gases, adding to the climate change that is destroying them. So the more people rush to see them, the faster they may be lost.",
            markScheme: [
              { point: "Definition: visiting before places are lost/changed", keywords: ["before they", "disappear", "lost", "too late", "last chance"] },
              { point: "Link to climate change (melting ice/glaciers)", keywords: ["climate", "melt", "glacier", "sea ice", "warming"] },
              { point: "Travel emits greenhouse gases", keywords: ["flight", "emission", "carbon", "greenhouse", "ship"] },
              { point: "Explains the paradox (adds to the cause)", keywords: ["paradox", "contribut", "adds to", "faster", "worse"] },
            ],
            commonError: "Defining the term but not explaining why it is self-defeating.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-qa-p3-q05",
            question: "A Singaporean student wants to trek to Everest Base Camp. Explain the push and pull factors that might influence this decision.",
            marks: 4,
            hint: "Two push (from home), two pull (from Nepal).",
            modelAnswer:
              "Push factors come from home: Singapore is flat and urban, so the student may want a challenge and wild scenery they cannot find there; having savings and school holidays makes the trip possible. Pull factors come from the destination: the chance to see the world's highest mountain and stand at Base Camp (a bucket-list goal), and the culture of the Sherpa people and their monasteries. Easy flights via Changi to Kathmandu also improve access.",
            markScheme: [
              { point: "Push factor 1 (urban/flat home, need for challenge)", keywords: ["flat", "urban", "city", "challenge", "escape", "stress"] },
              { point: "Push factor 2 (money/time)", keywords: ["holiday", "savings", "money", "afford", "time"] },
              { point: "Pull factor 1 (highest mountain/scenery/bucket list)", keywords: ["highest", "scenery", "bucket", "mountain", "view"] },
              { point: "Pull factor 2 (culture/adventure/access)", keywords: ["culture", "sherpa", "monaster", "changi", "flight"] },
            ],
            commonError: "Mixing up push and pull factors.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-qa-p3-q06",
            question: "Describe how the Antarctic Treaty System manages a continent that has no permanent population or government.",
            marks: 3,
            hint: "Agreements, meetings and inspections.",
            modelAnswer:
              "Member countries make decisions together at regular Antarctic Treaty meetings, where they agree measures such as rules on tourism and environmental protection. The 1991 Madrid Protocol adds environmental rules such as the mining ban and impact assessments. Countries can inspect each other's stations, and each country issues permits to its own expeditions and tour companies, so rules are enforced through national laws.",
            markScheme: [
              { point: "Joint decisions at Treaty meetings", keywords: ["meeting", "together", "agree", "consensus", "member"] },
              { point: "Environmental rules (Madrid Protocol)", keywords: ["madrid", "protocol", "mining", "environment"] },
              { point: "Inspections / national permits / enforcement", keywords: ["inspect", "permit", "national law", "enforce"] },
            ],
            commonError: "Saying one country (e.g. the UK or the UN) is in charge.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-qa-p3-q07",
            question: "Describe what happened to Shackleton's Endurance expedition (1914–17).",
            marks: 4,
            hint: "Ice → sinking → Elephant Island → James Caird → rescue.",
            modelAnswer:
              "Endurance became trapped in the pack ice of the Weddell Sea in January 1915 and was slowly crushed, sinking in November 1915. The 28 men camped on the drifting ice and then sailed lifeboats to Elephant Island. Shackleton and five others sailed the small boat James Caird about 1,300 km to South Georgia and crossed its mountains to a whaling station. He then organised a rescue, and all 28 men survived.",
            markScheme: [
              { point: "Trapped and crushed by ice in the Weddell Sea", keywords: ["trapped", "crush", "pack ice", "weddell", "sank"] },
              { point: "Camped on ice / Elephant Island", keywords: ["elephant island", "camp", "lifeboat", "floe"] },
              { point: "James Caird voyage to South Georgia", keywords: ["james caird", "south georgia", "1,300", "boat journey"] },
              { point: "All 28 survived / rescue", keywords: ["all 28", "survived", "rescue", "no one died", "everyone"] },
            ],
            commonError: "Saying Shackleton reached the South Pole — he never did.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-qa-p3-q08",
            question: "The wreck of Endurance was found in 2022 but has not been raised. Explain why.",
            marks: 3,
            hint: "Rules, depth and condition.",
            modelAnswer:
              "The wreck is protected as a Historic Site and Monument under the Antarctic Treaty, so it must not be disturbed. It lies at about 3,008 m in the Weddell Sea, which would make raising it extremely difficult and expensive. It is so well preserved in cold water without shipworms that leaving it in place is the best way to conserve it; it was surveyed and filmed by underwater robots instead.",
            markScheme: [
              { point: "Protected under Antarctic Treaty / historic monument", keywords: ["protect", "historic", "monument", "treaty", "law"] },
              { point: "Very deep (about 3,000 m) / difficult", keywords: ["3,008", "3,000", "3000", "deep", "depth"] },
              { point: "Well preserved in place / filmed instead", keywords: ["preserv", "shipworm", "film", "robot", "in place"] },
            ],
            commonError: "Only saying 'it is too heavy' without mentioning its legal protection.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-qa-p3-q09",
            question: "Explain how high altitude affects the human body and how climbers reduce the danger.",
            marks: 3,
            hint: "Oxygen, illness and acclimatisation.",
            modelAnswer:
              "At high altitude the air pressure is lower, so each breath contains less oxygen. This can cause altitude sickness — headaches, sickness and, in severe cases, fluid on the lungs or brain, which can kill. Climbers reduce the danger by ascending slowly with rest days to acclimatise ('climb high, sleep low'), using bottled oxygen above about 8,000 m and descending immediately if symptoms get worse.",
            markScheme: [
              { point: "Less oxygen / lower air pressure", keywords: ["oxygen", "pressure", "thin air", "less air"] },
              { point: "Altitude sickness symptoms/danger", keywords: ["altitude sickness", "headache", "fluid", "brain", "lung", "ams"] },
              { point: "Control: acclimatise / bottled oxygen / descend", keywords: ["acclimati", "slow", "bottled", "descend", "sleep low"] },
            ],
            commonError: "Saying the air is 'colder so you can't breathe' — the key is lower oxygen.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p3-q10",
            question: "A Sherpa guide earns US$6,300 in one Everest season. Nepal's average annual income is about US$1,400. Calculate how many times greater the guide's earnings are, and explain why many guides accept the risk.",
            marks: 4,
            hint: "Divide; then think about alternatives and benefits.",
            modelAnswer:
              "6,300 ÷ 1,400 = 4.5, so the guide earns about 4.5 times the average annual income in one season. Many accept the risk because there are few other well-paid jobs in the mountains — farming yields little at high altitude. The money pays for children's education, better housing and family needs, and experienced guides gain status and can start their own businesses, such as lodges or trekking companies.",
            markScheme: [
              { point: "Correct calculation (4.5 times)", keywords: ["4.5", "4 and a half", "four and a half", "4.50"] },
              { point: "Few alternative jobs / farming poor", keywords: ["few other", "alternative", "farming", "no other", "limited"] },
              { point: "Money used for education/housing/family", keywords: ["school", "educat", "house", "family", "children"] },
              { point: "Status / business opportunities / tradition", keywords: ["status", "business", "lodge", "respect", "tradition"] },
            ],
            commonError: "Subtracting (4,900) instead of dividing to find 'how many times'.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-qa-p3-q11",
            question: "Describe three 'leave no trace' principles an expedition should follow.",
            marks: 3,
            hint: "Rubbish, ground, wildlife, souvenirs.",
            modelAnswer:
              "Carry out all rubbish, including food scraps and, where required, human waste. Stay on durable surfaces and marked paths so fragile plants are not trampled. Leave what you find — do not take rocks, feathers or plants — and respect wildlife by keeping your distance and never feeding animals.",
            markScheme: [
              { point: "Carry out all waste", keywords: ["rubbish", "waste", "litter", "carry out", "pack out"] },
              { point: "Stay on durable surfaces/paths", keywords: ["path", "durable", "trail", "trampl", "route"] },
              { point: "Leave what you find / respect wildlife", keywords: ["leave what", "souvenir", "wildlife", "feed", "distance"] },
            ],
            commonError: "Writing three versions of 'don't drop litter'.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p3-q12",
            question: "Complete a risk assessment for the hazard 'frostbite' on a polar expedition: give a likelihood and severity score (1–5), calculate the risk score and suggest two control measures.",
            marks: 3,
            hint: "Risk = likelihood × severity; controls reduce one or both.",
            modelAnswer:
              "Likelihood 3, severity 4, so risk score = 3 × 4 = 12 (high). Control measures: wear insulated mitts, face masks and goggles so no skin is exposed; do buddy checks of each other's faces every hour and warm any white patches immediately; shelter in the tent when wind chill is extreme.",
            markScheme: [
              { point: "Scores and correct multiplication", keywords: ["12", "3 × 4", "3 x 4", "multipl", "risk score"] },
              { point: "Control measure 1 (clothing)", keywords: ["mitt", "glove", "mask", "goggle", "cover"] },
              { point: "Control measure 2 (checks/shelter/limit exposure)", keywords: ["buddy", "check", "shelter", "tent", "limit"] },
            ],
            commonError: "Adding the scores instead of multiplying, or giving controls that don't reduce the risk.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p3-q13",
            question: "Explain the logistical challenges of organising an expedition to Antarctica.",
            marks: 4,
            hint: "Getting there, permits, supplies, emergencies.",
            modelAnswer:
              "Antarctica is extremely remote, so people and equipment must travel by specialist ship or plane, often via Ushuaia or Punta Arenas, and travel depends on the weather. Expeditions need a permit from a Treaty country and an environmental impact assessment. All food, fuel and equipment must be taken in, and supply depots planned, because nothing can be bought there. Insurance must cover very expensive evacuation, and rescue could take days, so a detailed emergency plan is essential.",
            markScheme: [
              { point: "Remote access/transport/weather delays", keywords: ["remote", "ship", "plane", "flight", "weather", "ushuaia"] },
              { point: "Permits/environmental assessment", keywords: ["permit", "assessment", "treaty", "permission"] },
              { point: "All supplies carried in / depots", keywords: ["supplies", "depot", "food", "fuel", "carry"] },
              { point: "Emergency/evacuation/insurance", keywords: ["insurance", "evacuat", "rescue", "emergency", "helicopter"] },
            ],
            commonError: "Listing kit items instead of explaining logistics (transport, permits, supply, rescue).",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p3-q14",
            question: "Describe the distribution of tourism in the Sahara. Use TEA (Trend, Example, Anomaly).",
            marks: 3,
            hint: "Where is it concentrated? Where is it missing?",
            modelAnswer:
              "Trend: tourism is concentrated around the northern and eastern edges of the Sahara, close to coasts, airports and stable countries. Example: Merzouga and the Erg Chebbi dunes in Morocco, southern Tunisia and the White Desert in Egypt. Anomaly: the central Sahara, including Timbuktu in Mali, has very few tourists despite famous historic sites, because of insecurity and travel warnings.",
            markScheme: [
              { point: "Trend: concentrated on northern/eastern edges", keywords: ["edge", "north", "concentrat", "east", "cluster"] },
              { point: "Named example", keywords: ["merzouga", "morocco", "egypt", "tunisia", "white desert"] },
              { point: "Anomaly: central Sahara / Timbuktu / insecurity", keywords: ["timbuktu", "mali", "central", "insecur", "conflict", "anomaly"] },
            ],
            commonError: "Explaining reasons only, without describing where tourism is found.",
            guideRef: "sahara-deserts",
          },
          {
            id: "xtour-qa-p3-q15",
            question: "'Tourism to Antarctica should be banned.' Discuss this statement.",
            marks: 6,
            hint: "Arguments for a ban, arguments against, then your judgement.",
            modelAnswer:
              "Some argue for a ban because visitor numbers have grown from about 6,700 in 1992–93 to about 122,000 in 2023–24, increasing the risk of invasive species, disturbance to wildlife and fuel spills. Every trip involves long flights and voyages with a large carbon footprint, adding to the climate change that is melting Antarctic ice. However, a ban may not be necessary because tourism is strictly managed: IAATO limits landings to 100 people at a site, ships with more than 500 passengers cannot land, and biosecurity rules are enforced, while the Madrid Protocol bans mining. Tourism also creates jobs in Ushuaia and turns visitors into 'ambassadors' who support protection. On balance, a total ban is unnecessary, but a cap on numbers and legally binding rules would be wise as numbers keep rising.",
            markScheme: [
              { point: "Argument for a ban: growing numbers with data", keywords: ["6,700", "122,000", "100,000", "growing", "increas"] },
              { point: "Argument for a ban: environmental harm", keywords: ["invasive", "disturb", "spill", "trampl", "carbon"] },
              { point: "Against: strict management (IAATO/Madrid)", keywords: ["iaato", "100", "500", "madrid", "biosecurity"] },
              { point: "Against: economic benefit", keywords: ["job", "ushuaia", "income", "econom"] },
              { point: "Against: ambassadors/education", keywords: ["ambassador", "awareness", "educat", "support"] },
              { point: "Clear, justified conclusion (e.g. cap rather than ban)", keywords: ["on balance", "overall", "conclude", "cap", "limit"] },
            ],
            commonError: "Only arguing one side, or concluding without explaining why.",
            guideRef: "tourism-impacts",
          },
        ],
      },
      {
        id: "xtour-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "xtour-qa-p4-q01",
            question: "Explain why the Antarctic environment is especially vulnerable to the impacts of tourism.",
            marks: 4,
            hint: "Think about recovery time, isolation and where wildlife and visitors meet.",
            modelAnswer:
              "Antarctica's short, cold growing season means mosses and lichens grow extremely slowly, so trampled areas can take decades to recover. Its isolation means it has very few native species, so invasive species could spread with little competition. Less than 2% of Antarctica is ice-free, mostly on the coast, so tourists and breeding wildlife are concentrated in the same small areas. Cold temperatures also slow the breakdown of oil and waste, so pollution lasts longer.",
            markScheme: [
              { point: "Slow growth/recovery", keywords: ["slow", "recover", "decade", "growing season"] },
              { point: "Isolation / few native species — invasive risk", keywords: ["isolat", "invasive", "few native", "competition", "non-native"] },
              { point: "Wildlife and visitors concentrated on small ice-free coast", keywords: ["ice-free", "coast", "concentrat", "same areas", "2%"] },
              { point: "Pollution breaks down slowly in cold", keywords: ["break down", "pollut", "oil", "persist", "lasts longer"] },
            ],
            commonError: "Saying 'it is cold' without linking the cold to slow recovery.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-qa-p4-q02",
            question: "Three ships plan to visit Antarctica. Ship A: 120 passengers; Ship B: 480 passengers; Ship C: 900 passengers. Using IAATO rules, explain which ships may land passengers and how many groups each would need at one site.",
            marks: 4,
            hint: "Apply the 500 limit first, then divide by 100.",
            modelAnswer:
              "Ship A (120) may land passengers; it needs 2 groups because only 100 can be ashore at once. Ship B (480) may land passengers because it is under 500; it needs 5 groups (480 ÷ 100 = 4.8, rounded up). Ship C (900) carries more than 500 passengers, so it cannot land anyone and may only cruise and view from the ship.",
            markScheme: [
              { point: "Ship A may land, 2 groups", keywords: ["2 groups", "two groups", "2 trips", "two trips"] },
              { point: "Ship B may land, 5 groups", keywords: ["5 groups", "five groups", "4.8", "5 trips"] },
              { point: "Ship C cannot land", keywords: ["cannot land", "can't land", "not allowed", "no landing", "cruise"] },
              { point: "Correctly applies the 500 and 100 rules", keywords: ["500", "100 ashore", "100 at", "100 can"] },
            ],
            commonError: "Rounding 4.8 down to 4 groups — that would leave 80 people unable to land.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-qa-p4-q03",
            question: "Explain how the Madrid Protocol and IAATO work together to protect Antarctica.",
            marks: 3,
            hint: "Law between governments vs rules among companies.",
            modelAnswer:
              "The Madrid Protocol is an international agreement between governments: it bans mining and requires environmental impact assessments for all activities, including tourism. IAATO is an association of tour companies that adds detailed, practical rules for tourists, such as no more than 100 people ashore and boot-washing. Together, the Protocol sets the legal framework and IAATO turns it into day-to-day behaviour on landings.",
            markScheme: [
              { point: "Madrid Protocol = government agreement, bans mining / EIA", keywords: ["madrid", "government", "mining", "assessment", "law"] },
              { point: "IAATO = operators' practical rules", keywords: ["iaato", "operator", "100", "boot", "practical"] },
              { point: "Explains how they complement each other", keywords: ["together", "framework", "complement", "both", "day-to-day"] },
            ],
            commonError: "Describing each separately without explaining how they fit together.",
            guideRef: "antarctic-rules",
          },
          {
            id: "xtour-qa-p4-q04",
            question: "Evaluate how effective the rubbish deposit scheme (8 kg per climber) has been in reducing waste on Everest.",
            marks: 4,
            hint: "Strengths, weaknesses, then a judgement.",
            modelAnswer:
              "The scheme gives climbers a financial incentive: the US$4,000 deposit is lost unless each climber brings down 8 kg of rubbish, so many tonnes have been carried down. However, the deposit is small compared with the total cost of an expedition, so some teams may accept losing it, and checking is difficult. It also does not remove old waste already high on the mountain or deal fully with human waste — that needed extra measures such as compulsory poo bags (2024) and army clean-ups. Overall it has been partly effective, but it works best combined with other measures.",
            markScheme: [
              { point: "Strength: financial incentive/deposit", keywords: ["incentive", "deposit", "4,000", "refund"] },
              { point: "Evidence of success (tonnes removed)", keywords: ["tonne", "removed", "brought down", "collected"] },
              { point: "Weakness: small vs total cost / hard to enforce / old waste", keywords: ["small", "enforce", "check", "old waste", "afford"] },
              { point: "Judgement (partly effective, needs other measures)", keywords: ["partly", "overall", "on balance", "combined", "limited"] },
            ],
            commonError: "Describing the scheme without judging how well it works.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-qa-p4-q05",
            question: "Explain the links between climate change and tourism in extreme environments.",
            marks: 4,
            hint: "Tourism affects climate; climate affects tourism.",
            modelAnswer:
              "Tourism contributes to climate change: long-haul flights and ship voyages to Antarctica or Nepal release large amounts of carbon dioxide, and ship soot darkens snow. Climate change in turn affects tourism: shrinking glaciers in the Khumbu make icefalls less stable and routes more dangerous, while melting sea ice can open new areas to ships. It also drives 'last chance tourism', as people hurry to see places before they change — which increases visitor numbers and emissions further, a feedback loop.",
            markScheme: [
              { point: "Tourism emits greenhouse gases/soot", keywords: ["flight", "emission", "carbon", "co2", "soot"] },
              { point: "Climate change alters destinations (glaciers, sea ice)", keywords: ["glacier", "melt", "sea ice", "unstable", "retreat"] },
              { point: "Last chance tourism", keywords: ["last chance", "before they", "disappear", "too late"] },
              { point: "Feedback/link between the two", keywords: ["feedback", "cycle", "loop", "more visitors", "worse"] },
            ],
            commonError: "Only explaining one direction of the relationship.",
            guideRef: "why-extreme-tourism",
          },
          {
            id: "xtour-qa-p4-q06",
            question: "Compare the impacts of tourism in polar regions with those in hot deserts.",
            marks: 4,
            hint: "Similarities AND differences — people, wildlife, water.",
            modelAnswer:
              "In both environments, recovery is very slow — Antarctic mosses and desert crusts take decades to regrow — and litter lasts a long time. However, Antarctica has no local population, so economic benefits go to gateway towns such as Ushuaia, whereas in the Sahara local Amazigh people earn money as guides and camp workers. In Antarctica the main concerns are wildlife disturbance and invasive species, whereas in deserts the biggest conflict is over scarce water used by hotels and camps.",
            markScheme: [
              { point: "Similarity: slow recovery/fragile/long-lasting litter", keywords: ["both", "slow", "fragile", "similar", "decade"] },
              { point: "Difference: local people (none in Antarctica vs Amazigh)", keywords: ["no local", "no population", "amazigh", "berber", "local people"] },
              { point: "Difference: wildlife/invasive species in Antarctica", keywords: ["penguin", "wildlife", "invasive", "seal"] },
              { point: "Difference: water conflict in deserts", keywords: ["water", "groundwater", "pool", "oasis"] },
            ],
            commonError: "Writing two separate descriptions with no comparative words (whereas, both, however).",
            guideRef: "tourism-impacts",
          },
          {
            id: "xtour-qa-p4-q07",
            question: "Explain how Amundsen's planning reflects the principles of modern expedition planning.",
            marks: 4,
            hint: "Match his choices to kit, logistics, food and risk.",
            modelAnswer:
              "Amundsen chose kit suited to the environment — skis, dog sledges and loose Inuit-style furs — just as modern teams choose layering systems for the conditions. His logistics were excellent: large supply depots marked with flags across the route so they could be found in poor visibility, like modern resupply planning. He carried enough food with a safety margin and planned high-energy rations, matching modern calorie planning. He reduced risk by learning from experienced Inuit and keeping a small, skilled team — similar to risk assessment and control measures today.",
            markScheme: [
              { point: "Kit suited to environment (skis/dogs/furs)", keywords: ["ski", "dog", "fur", "inuit", "kit"] },
              { point: "Logistics: marked depots", keywords: ["depot", "flag", "mark", "logistic", "resupply"] },
              { point: "Food/calories with safety margin", keywords: ["food", "calorie", "margin", "ration", "energy"] },
              { point: "Risk reduction/learning/small team", keywords: ["risk", "learn", "experience", "small team", "skilled"] },
            ],
            commonError: "Retelling the story of the race without linking it to planning principles.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-qa-p4-q08",
            question: "You are planning a 5-day camel trek in the Sahara with a small group. Describe and justify the key items and plans you would include.",
            marks: 5,
            hint: "Water, clothing, navigation/communication, health, leave no trace.",
            modelAnswer:
              "Water: about 5 litres per person per day plus a reserve, carried by camels and topped up at known wells. Clothing: loose, light-coloured, long-sleeved clothes, a wide hat or headscarf, sunglasses and sun cream to prevent sunburn and heatstroke, plus a warm fleece and sleeping bag for cold nights. Navigation and communication: a local Amazigh guide, GPS and a satellite phone, as mobile coverage is poor. Health: a first-aid kit and oral rehydration salts, and a risk assessment with rest during the hottest hours. Leave no trace: carry out all rubbish because it decomposes very slowly in the desert.",
            markScheme: [
              { point: "Water quantity/supply with justification", keywords: ["water", "litre", "wells", "dehydrat", "reserve"] },
              { point: "Sun/heat clothing", keywords: ["hat", "scarf", "loose", "sun cream", "sunscreen", "long sleeve"] },
              { point: "Warm layer for cold nights", keywords: ["night", "warm", "fleece", "sleeping bag", "cold"] },
              { point: "Navigation/communication (guide, GPS, sat phone)", keywords: ["guide", "gps", "satellite", "compass", "map"] },
              { point: "Health/risk or leave no trace", keywords: ["first aid", "rehydration", "risk", "rubbish", "leave no trace"] },
            ],
            commonError: "Listing items without saying why each is needed.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p4-q09",
            question: "Explain how you would adapt your clothing plan for an Antarctic expedition compared with a Sahara trek.",
            marks: 4,
            hint: "Same principle (layers), different priorities.",
            modelAnswer:
              "In Antarctica I would use the full three-layer system: a wicking merino base layer, an insulating fleece or down mid layer and a windproof, waterproof shell to resist wind chill, plus insulated mitts, a face mask and goggles against frostbite and snow glare. In the Sahara the priority is staying cool and avoiding sunburn, so I would wear loose, light-coloured, breathable long sleeves and a wide hat or headscarf. Both trips need layers that can be added or removed, because Saharan nights can be near freezing and effort in Antarctica causes sweating.",
            markScheme: [
              { point: "Antarctic layering detail", keywords: ["base layer", "mid layer", "shell", "three-layer", "fleece", "merino"] },
              { point: "Antarctic extremities protection (mitts/mask/goggles)", keywords: ["mitt", "glove", "mask", "goggle", "frostbite"] },
              { point: "Sahara: loose, light-coloured, sun protection", keywords: ["loose", "light-colour", "light colour", "hat", "scarf", "sun"] },
              { point: "Common principle: adjustable layers / cold desert nights", keywords: ["night", "both", "adjust", "add or remove", "remove"] },
            ],
            commonError: "Saying 'wear shorts in the desert' — long, loose sleeves protect better from the sun.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p4-q10",
            question: "A polar team of 3 people will ski for 20 days. Each person needs 5,500 kcal per day. Their food provides about 500 kcal per 100 g. Calculate the total energy needed and the mass of food they must carry.",
            marks: 3,
            hint: "Total kcal first; then 500 kcal = 100 g, so 5 kcal = 1 g.",
            modelAnswer:
              "Total energy = 3 × 20 × 5,500 = 330,000 kcal. 500 kcal per 100 g means 5 kcal per gram, so mass = 330,000 ÷ 5 = 66,000 g = 66 kg of food (22 kg per person).",
            markScheme: [
              { point: "Total energy 330,000 kcal", keywords: ["330,000", "330000", "330 000"] },
              { point: "Correct method for mass (÷ 5 or × 100/500)", keywords: ["330,000 ÷ 5", "330,000 / 5", "5 kcal per g", "per gram", "330,000 ÷ 500"] },
              { point: "Answer 66 kg", keywords: ["66 kg", "66kg", "66,000", "66000", "66"] },
            ],
            commonError: "Forgetting to multiply by both the number of people and the number of days.",
            guideRef: "planning-expedition",
          },
          {
            id: "xtour-qa-p4-q11",
            question: "Explain how the 'weather window' on Everest leads to dangerous queues.",
            marks: 3,
            hint: "Few good days + many climbers + one route.",
            modelAnswer:
              "For most of the year jet-stream winds at the summit are too strong to climb safely, so summits are only possible on a few calm days, usually in May before the monsoon. Hundreds of climbers with permits all wait for the same forecast and set off on the same days. As the summit ridge has a single fixed rope, climbers must move in single file, so long queues form in the death zone.",
            markScheme: [
              { point: "Few calm days (jet stream/monsoon)", keywords: ["jet stream", "wind", "monsoon", "calm", "few days"] },
              { point: "Many climbers go at the same time", keywords: ["same day", "same time", "hundreds", "all wait", "together"] },
              { point: "Single route/fixed rope → queue in death zone", keywords: ["rope", "single file", "ridge", "queue", "death zone"] },
            ],
            commonError: "Not explaining why the good weather days are so few.",
            guideRef: "everest-mountains",
          },
          {
            id: "xtour-qa-p4-q12",
            question: "Explain how employing local guides can make desert tourism in Morocco more sustainable.",
            marks: 3,
            hint: "Economy, culture and environment.",
            modelAnswer:
              "Local Amazigh guides keep tourist money in the community, reducing leakage and creating a multiplier effect in villages with few other jobs. They know the desert well, improving safety and keeping groups on routes that limit damage. They share their culture and knowledge of the environment, educating visitors and giving local people a reason to value and protect their heritage.",
            markScheme: [
              { point: "Money stays local / reduces leakage", keywords: ["local", "leakage", "multiplier", "income", "community"] },
              { point: "Safety/environmental knowledge", keywords: ["safe", "knowledge", "route", "damage", "environment"] },
              { point: "Cultural benefit/education", keywords: ["culture", "educat", "heritage", "amazigh", "berber", "learn"] },
            ],
            commonError: "Only mentioning jobs, without linking to the three pillars of sustainability.",
            guideRef: "ecotourism-sustainability",
          },
          {
            id: "xtour-qa-p4-q13",
            question: "Explain why much of the money spent on extreme tourism may not benefit the places visited.",
            marks: 4,
            hint: "Think about who owns the companies and where the goods come from.",
            modelAnswer:
              "Many expeditions are sold by foreign-owned companies, so profits go overseas — this is called leakage. Equipment, food and fuel are often imported rather than bought locally. Flights and cruise ships, a large part of the cost, are run by international companies. In Antarctica there is no local population at all, so spending benefits gateway towns like Ushuaia and the operators instead. Local workers may also receive only low, seasonal wages compared with the trip price.",
            markScheme: [
              { point: "Foreign-owned companies / profits overseas (leakage)", keywords: ["foreign", "overseas", "leakage", "abroad", "international"] },
              { point: "Imported goods/equipment", keywords: ["import", "equipment", "brought in", "food"] },
              { point: "Antarctica has no local population", keywords: ["no local", "no population", "no one lives", "ushuaia", "gateway"] },
              { point: "Low/seasonal local wages", keywords: ["seasonal", "low wage", "low pay", "small share"] },
            ],
            commonError: "Only giving one reason, or not using the term leakage.",
            guideRef: "tourism-impacts",
          },
          {
            id: "xtour-qa-p4-q14",
            question: "What lessons for modern expedition leaders can be learned from Shackleton's Endurance expedition?",
            marks: 3,
            hint: "Leadership, flexibility, teamwork.",
            modelAnswer:
              "Leaders must be flexible: when Endurance was crushed, Shackleton changed his goal from crossing Antarctica to bringing every man home. Keeping morale and teamwork high helped the crew cope with months on the ice. He took calculated risks with a clear plan, such as the James Caird voyage, to get help. Modern teams should have back-up and emergency plans for when things go wrong.",
            markScheme: [
              { point: "Flexibility / changing goals", keywords: ["flexib", "change", "adapt", "new goal", "survival"] },
              { point: "Morale/teamwork/leadership", keywords: ["morale", "team", "leader", "spirit", "together"] },
              { point: "Calculated risk / emergency plan", keywords: ["risk", "plan", "emergency", "back-up", "james caird"] },
            ],
            commonError: "Retelling events without stating a lesson.",
            guideRef: "historic-expeditions",
          },
          {
            id: "xtour-qa-p4-q15",
            question: "'Ecotourism is the only way tourism in extreme environments can be sustainable.' To what extent do you agree?",
            marks: 6,
            hint: "Ecotourism's strengths, its limits, other approaches, judgement.",
            modelAnswer:
              "Ecotourism has strong advantages: in the Annapurna Conservation Area (Nepal), entry fees are reinvested in conservation, trails, schools and health posts, and local people run lodges, so environment, economy and society all benefit. However, ecotourism alone has limits: if it becomes popular, visitor numbers may exceed the carrying capacity, and some 'eco' trips are greenwashing. Other approaches can also make tourism sustainable. In Antarctica, where there are no local people to benefit, strict management — the Madrid Protocol's mining ban and IAATO's 100-person and 500-passenger rules — keeps impacts low. On Everest, regulation such as the 8 kg rubbish deposit and poo bags is needed. Overall I partly agree: ecotourism principles are essential, but they need to be combined with regulation and limits on numbers to make extreme tourism truly sustainable.",
            markScheme: [
              { point: "Explains ecotourism benefits with an example (e.g. ACAP)", keywords: ["acap", "annapurna", "conserv", "local", "fee"] },
              { point: "Limitation: carrying capacity / popularity", keywords: ["carrying capacity", "popular", "too many", "success", "numbers"] },
              { point: "Limitation: greenwashing", keywords: ["greenwash", "fake", "label", "claim"] },
              { point: "Alternative: regulation in Antarctica (IAATO/Madrid)", keywords: ["iaato", "madrid", "100", "500", "regulat"] },
              { point: "Alternative: Everest rules (deposit, poo bags)", keywords: ["deposit", "8 kg", "poo", "permit", "rubbish"] },
              { point: "Justified judgement", keywords: ["overall", "partly", "on balance", "extent", "conclude"] },
            ],
            commonError: "Agreeing completely without considering regulation-based approaches like IAATO.",
            guideRef: "ecotourism-sustainability",
          },
        ],
      },
    ],
  },
};
