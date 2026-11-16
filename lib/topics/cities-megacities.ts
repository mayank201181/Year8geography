import type { Topic } from "../types";

export const citiesMegacities: Topic = {
  id: "cities-megacities",
  title: "Cities, Urbanisation & Megacities",
  subject: "Future Cities",
  icon: "🏙️",
  summary: "What makes a city — and why the world's cities keep growing.",
  intro:
    "For the first time in human history, more people live in towns and cities than in the countryside — and you live in one of the only countries on Earth where everyone is urban. This topic asks what a city actually is, why billions of people are moving into them, how cities are laid out, and why the giant 'megacities' of the future are mostly in Asia and Africa. By the end you will be able to define, describe and explain urban change using real data and named places, just like a geographer.",

  guide: [
    {
      id: "what-is-a-city",
      heading: "What is a city?",
      discovery: {
        problem:
          "St Davids in Wales has fewer than 2,000 people but is officially a city. Milton Keynes in England had over 200,000 people but was only a town until 2022. In Denmark, a place with just 200 people counts as 'urban'. How can all of these be true at once?",
        idea:
          "There is no single world definition of a city. Each country chooses its own rules — population size, density, what jobs people do, or an official title — so you must always ask 'whose definition?' before comparing cities.",
      },
      body:
        "A **settlement** is any place where people live, from a single farm to a huge city. Geographers arrange settlements in a **settlement hierarchy**: hamlet → village → town → city → megacity. As you go up the hierarchy, settlements get bigger, there are fewer of them, and they offer more **services** (shops, hospitals, universities, airports).\n\nAn **urban area** is a built-up area such as a town or city. A **rural area** is the countryside, where land is mostly used for farming or is natural. A **city** is a large, permanent urban settlement — but the exact line between 'town' and 'city' is drawn differently in every country.\n\n**Four ways countries define a city or urban area:**\n- **Population threshold** — a minimum number of people. Denmark and Sweden count places with just **200** people as urban; the USA uses about **5,000** people (since the 2020 census); Japan usually needs **50,000** for a city.\n- **Density** — how crowded a place is (people per km²). Canada needs at least 1,000 people *and* a density of 400 people per km².\n- **Function** — what people do there. India's 'census towns' need 5,000+ people, a density of 400 per km² *and* at least 75% of working men in non-farming jobs.\n- **Official city status** — a title. In the UK, city status is granted by the monarch, often to places with a cathedral or a royal link. That is why tiny St Davids is a city and big Milton Keynes waited until 2022.\n\n**Population density** = total population ÷ area (km²). For example, Singapore has about 6 million people on about 735 km², so its density is about 8,200 people per km² — one of the highest in the world.\n\nBecause definitions differ, comparing 'how urban' two countries are is tricky: a country with a low threshold (like Denmark) will look more urban than one with a high threshold (like Japan), even if life on the ground is similar.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Settlement hierarchy pyramid and examples of urban population thresholds in different countries"><text x="95" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#1e293b">Settlement hierarchy</text><rect x="70" y="22" width="50" height="28" fill="#7c3aed"/><text x="95" y="40" font-size="10" text-anchor="middle" fill="#ffffff">Megacity</text><rect x="55" y="52" width="80" height="28" fill="#8b5cf6"/><text x="95" y="70" font-size="10" text-anchor="middle" fill="#ffffff">City</text><rect x="40" y="82" width="110" height="28" fill="#a78bfa"/><text x="95" y="100" font-size="10" text-anchor="middle" fill="#1e1b4b">Town</text><rect x="25" y="112" width="140" height="28" fill="#c4b5fd"/><text x="95" y="130" font-size="10" text-anchor="middle" fill="#1e1b4b">Village</text><rect x="10" y="142" width="170" height="28" fill="#ede9fe"/><text x="95" y="160" font-size="10" text-anchor="middle" fill="#1e1b4b">Hamlet</text><text x="95" y="188" font-size="10" text-anchor="middle" fill="#475569">Up = bigger, fewer, more services</text><rect x="190" y="22" width="126" height="148" rx="6" fill="#f1f5f9" stroke="#64748b"/><text x="253" y="38" font-size="10" text-anchor="middle" font-weight="bold" fill="#1e293b">'Urban' starts at…</text><text x="197" y="58" font-size="10" fill="#1e293b">Denmark: 200 people</text><text x="197" y="80" font-size="10" fill="#1e293b">Canada: 1,000 + dense</text><text x="197" y="102" font-size="10" fill="#1e293b">USA: 5,000 people</text><text x="197" y="124" font-size="10" fill="#1e293b">India: 5,000 + jobs</text><text x="197" y="146" font-size="10" fill="#1e293b">Japan city: 50,000</text><text x="197" y="164" font-size="10" fill="#b91c1c">UK: royal title!</text></svg>`,
      diagramCaption:
        "Left: the settlement hierarchy — fewer, larger settlements with more services towards the top. Right: different countries use very different rules for what counts as urban or a city.",
      keyPoints: [
        "There is no single global definition of a city — countries use population, density, function or official status.",
        "Settlement hierarchy: hamlet → village → town → city → megacity (bigger, fewer, more services as you go up).",
        "Population density = population ÷ area (people per km²).",
      ],
      thinkDeeper:
        "If Japan suddenly switched to Denmark's 200-person rule, what would happen to the percentage of Japanese people counted as 'urban' — even though nobody moved house? What does this tell you about comparing urban statistics between countries?",
      caseStudy: {
        place: "UK city status",
        facts: [
          "In the UK, city status is an honour granted by the monarch, not decided by population size.",
          "St Davids in Wales has fewer than 2,000 residents but is a city because of its cathedral.",
          "Milton Keynes (over 200,000 people) only gained city status in 2022, as part of the Platinum Jubilee awards.",
          "Eight places won city status in 2022, including Colchester, Doncaster and Wrexham.",
        ],
      },
      skill: "Calculating population density (population ÷ area)",
    },
    {
      id: "city-life",
      heading: "City life: the good and the bad",
      discovery: {
        problem:
          "On a calm evening, a thermometer in Singapore's Downtown Core can read several degrees warmer than one in the forest at Bukit Timah only a few kilometres away. Nobody has switched on a heater. Where is the extra heat coming from?",
        idea:
          "Cities create their own climate. Concrete, tarmac and glass soak up heat by day and release it at night, while air-conditioners, cars and factories add waste heat — the urban heat island. Cities bring huge benefits, but also problems like this.",
      },
      body:
        "Cities attract people because they **concentrate** things: jobs, money, ideas and services are packed into a small area. But that same crowding brings problems.\n\n**Positive characteristics (why people want to live in cities):**\n- **Jobs and higher wages** — offices, factories, shops, ports and airports employ millions. Wages are usually higher than in the countryside.\n- **Services** — hospitals, schools, universities, water, electricity and internet are easier to provide when people live close together.\n- **Culture and entertainment** — museums, sports stadiums, concerts, restaurants and festivals (think of Singapore's Esplanade or the F1 night race).\n- **Universities and innovation** — clever people meet and swap ideas, so new businesses start.\n- **Transport** — public transport such as Singapore's MRT is only possible where many people live close together.\n\n**Negative characteristics (the costs of crowding):**\n- **Traffic congestion** — roads jam, journeys are slow and stressful.\n- **Air pollution** — exhaust fumes and factory smoke harm health (Delhi's winter smog is among the world's worst).\n- **Inequality** — the gap between rich and poor is often widest in cities; luxury towers stand next to slums.\n- **High housing costs** — land is scarce, so rents and house prices are high. This is why Singapore built HDB public housing, where about 8 in 10 residents live.\n- **Urban heat island (UHI)** — a city is warmer than the countryside around it, especially at night. Dark surfaces absorb heat, tall buildings trap it, and air-conditioners and vehicles release waste heat. Studies suggest parts of Singapore can be up to about 7°C warmer at night than greener areas.\n- **Noise, crime and waste** — more people produce more rubbish and noise.\n\nGood geographers describe **both** sides and notice that the same thing can be good for one group and bad for another — for example, a new expressway helps drivers but brings noise and fumes to people living next to it.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Urban heat island cross-section showing temperature rising from rural edges to the city centre"><text x="160" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#1e293b">Urban heat island (night)</text><line x1="30" y1="25" x2="30" y2="150" stroke="#334155"/><text x="14" y="90" font-size="10" fill="#334155" transform="rotate(-90 14 90)" text-anchor="middle">Temperature</text><path d="M35,120 C80,118 95,100 120,80 C140,62 180,62 200,80 C225,100 240,118 290,120" fill="none" stroke="#dc2626" stroke-width="3"/><text x="160" y="56" font-size="10" text-anchor="middle" fill="#dc2626">warmest: CBD</text><text x="50" y="112" font-size="10" fill="#15803d">cooler</text><text x="268" y="112" font-size="10" fill="#15803d">cooler</text><line x1="30" y1="150" x2="300" y2="150" stroke="#334155"/><circle cx="45" cy="143" r="7" fill="#16a34a"/><circle cx="62" cy="144" r="6" fill="#16a34a"/><rect x="85" y="136" width="12" height="14" fill="#94a3b8"/><rect x="102" y="134" width="12" height="16" fill="#94a3b8"/><rect x="135" y="104" width="14" height="46" fill="#475569"/><rect x="152" y="92" width="16" height="58" fill="#334155"/><rect x="171" y="108" width="14" height="42" fill="#475569"/><rect x="215" y="134" width="12" height="16" fill="#94a3b8"/><rect x="232" y="136" width="12" height="14" fill="#94a3b8"/><circle cx="268" cy="144" r="6" fill="#16a34a"/><circle cx="285" cy="143" r="7" fill="#16a34a"/><text x="55" y="166" font-size="10" text-anchor="middle" fill="#334155">Rural</text><text x="100" y="166" font-size="10" text-anchor="middle" fill="#334155">Suburbs</text><text x="160" y="166" font-size="10" text-anchor="middle" fill="#334155">CBD</text><text x="230" y="166" font-size="10" text-anchor="middle" fill="#334155">Suburbs</text><text x="276" y="166" font-size="10" text-anchor="middle" fill="#334155">Rural</text><text x="160" y="188" font-size="10" text-anchor="middle" fill="#475569">Concrete, glass, cars and air-con add heat</text></svg>`,
      diagramCaption:
        "An urban heat island: temperature rises from the green countryside, through the suburbs, to a peak over the dense, built-up city centre.",
      keyPoints: [
        "Cities offer jobs, services, culture, universities and public transport because people and money are concentrated.",
        "Crowding also brings congestion, pollution, inequality, high housing costs and the urban heat island.",
        "The urban heat island makes cities warmer than surrounding rural areas, especially at night.",
      ],
      thinkDeeper:
        "Singapore is planting trees along roads, adding 'skyrise greenery' on buildings and painting some roofs in cooler colours. Explain how EACH of these could reduce the urban heat island. Which do you think would make the biggest difference, and why?",
      caseStudy: {
        place: "Singapore — living with density",
        facts: [
          "About 6 million people live on roughly 735 km² — around 8,200 people per km².",
          "About 8 in 10 residents live in HDB (Housing & Development Board) public flats.",
          "The MRT network carries millions of passenger trips every day, reducing car use.",
          "Vehicle numbers are capped using the Certificate of Entitlement (COE) system to limit congestion.",
          "Research suggests parts of the city can be up to about 7°C warmer at night than green areas — the urban heat island.",
        ],
      },
    },
    {
      id: "urbanisation",
      heading: "Urbanisation: an urban world",
      discovery: {
        problem:
          "In 1950, about 3 in 10 people in the world lived in towns and cities. Today it is nearly 6 in 10. In Singapore it is 10 in 10. Can a country's urban percentage keep rising for ever? What happens when it reaches 100%?",
        idea:
          "Urbanisation is about the SHARE (percentage) of people who live in urban areas. It cannot go above 100% — but cities can still grow bigger after that. This is the key difference between urbanisation and urban growth.",
      },
      body:
        "**Urbanisation** is the increase in the **proportion (percentage)** of a country's or the world's population living in urban areas. It is a *share*, not a number.\n\n**Urban growth** is the increase in the **number of people** living in towns and cities, or in the **area** they cover. A city can grow even if urbanisation is not happening — for example, if the countryside is growing just as fast, the urban *share* stays the same while the city still gets bigger.\n\n**The world in numbers (United Nations and World Bank estimates):**\n- **1950:** about **30%** of people lived in urban areas.\n- **2007:** for the first time, **more than half (50%)** of the world's people were urban.\n- **2023:** about **57%** — around 4.6 billion people.\n- **2050:** about **68%** projected — roughly 2 in every 3 people.\n\n**Urbanisation varies hugely between countries:**\n- **Singapore: 100%** — a city-state where all land counts as urban.\n- **UK: about 84%**; **Japan: about 92%** — high-income countries (HICs) urbanised early, during the Industrial Revolution, so they are already very urban and now change slowly.\n- **China: about 65%** — urbanised extremely fast; in 1980 fewer than 1 in 5 Chinese people lived in cities.\n- **India: about 36%** and **Nigeria: about 54%** — rising quickly.\n- **Burundi: about 14%** — one of the least urbanised countries.\n\nToday, the **fastest urbanisation** is in low-income countries (LICs) and newly emerging economies (NEEs) in **Africa and Asia**. In HICs, some people even move out of big cities to smaller towns and villages — this is called **counter-urbanisation**.\n\n**Percentage change** = (new value − old value) ÷ old value × 100. If a country's urban population rose from 20 million to 30 million, that is (30 − 20) ÷ 20 × 100 = a **50% increase**.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of the percentage of the world population living in urban areas from 1950 to 2050"><text x="170" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#1e293b">World population living in urban areas (%)</text><line x1="40" y1="20" x2="40" y2="170" stroke="#334155"/><line x1="40" y1="170" x2="305" y2="170" stroke="#334155"/><text x="34" y="173" font-size="10" text-anchor="end" fill="#334155">0</text><text x="34" y="98" font-size="10" text-anchor="end" fill="#334155">50</text><text x="34" y="23" font-size="10" text-anchor="end" fill="#334155">100</text><line x1="40" y1="95" x2="300" y2="95" stroke="#94a3b8" stroke-dasharray="3,3"/><text x="40" y="184" font-size="10" text-anchor="middle" fill="#334155">1950</text><text x="170" y="184" font-size="10" text-anchor="middle" fill="#334155">2000</text><text x="300" y="184" font-size="10" text-anchor="end" fill="#334155">2050</text><polyline points="40,125 105,114 170,100 188,95 230,84" fill="none" stroke="#2563eb" stroke-width="3"/><polyline points="230,84 300,68" fill="none" stroke="#2563eb" stroke-width="3" stroke-dasharray="5,4"/><circle cx="40" cy="125" r="3" fill="#2563eb"/><text x="46" y="138" font-size="10" fill="#1e3a8a">30%</text><circle cx="188" cy="95" r="3" fill="#dc2626"/><text x="180" y="112" font-size="10" fill="#b91c1c">2007: 50%</text><circle cx="230" cy="84" r="3" fill="#2563eb"/><text x="224" y="78" font-size="10" text-anchor="end" fill="#1e3a8a">2023: 57%</text><circle cx="300" cy="68" r="3" fill="#2563eb"/><text x="298" y="60" font-size="10" text-anchor="end" fill="#1e3a8a">68% (projected)</text></svg>`,
      diagramCaption:
        "The world passed 50% urban in 2007. About 57% of people were urban in 2023, and about 68% are expected to be by 2050 (dashed line = projection).",
      keyPoints: [
        "Urbanisation = rising PROPORTION of people living in urban areas; urban growth = rising NUMBER of urban people or area.",
        "World: about 30% urban in 1950, 50% in 2007, about 57% in 2023, about 68% projected for 2050.",
        "Singapore is 100% urban; the fastest urbanisation today is in Africa and Asia.",
      ],
      thinkDeeper:
        "Singapore's population grew from about 1.6 million in 1960 to about 6 million today, yet its urbanisation rate barely changed. How can both statements be true? Use the words 'urbanisation' and 'urban growth' in your answer.",
      caseStudy: {
        place: "Singapore — a 100% urban city-state",
        facts: [
          "Singapore is counted as 100% urban by the World Bank and UN.",
          "Its population grew from about 1.6 million in 1960 to about 6 million in the 2020s.",
          "Land area has grown by roughly a quarter since the 1960s through land reclamation, to about 735 km².",
          "The Urban Redevelopment Authority (URA) plans land use for the whole island through its Master Plan.",
        ],
      },
      skill: "Calculating percentage change",
    },
    {
      id: "causes-of-urbanisation",
      heading: "Why are cities growing? Migration and natural increase",
      discovery: {
        problem:
          "Imagine two young farmers in rural Bangladesh. Their rice fields flooded twice in three years and the river is eating away their land. A cousin in Dhaka says a garment factory is hiring. List everything that might make them leave — and everything that might draw them to the city. Then: if they stay in Dhaka and have children there, who gets counted as the city's 'growth'?",
        idea:
          "Cities grow in two ways: people move in (rural–urban migration, driven by push and pull factors) and city populations have more births than deaths (natural increase). Migrants are often young adults, so they boost natural increase too.",
      },
      body:
        "There are two main causes of urbanisation and urban growth.\n\n**1. Rural–urban migration** — the movement of people from the countryside to towns and cities. People are **pushed** away from rural areas and **pulled** towards cities.\n\n**Push factors** (negative things about the countryside):\n- Few jobs other than farming; low and unreliable incomes.\n- Natural hazards — drought, floods, cyclones, river-bank erosion — and climate change damaging crops.\n- Mechanisation (machines replacing farm workers).\n- Poor services: few secondary schools, hospitals or electricity.\n- Conflict or land shortages.\n\n**Pull factors** (positive things — real or imagined — about cities):\n- More jobs, often better paid (factories, offices, construction, services).\n- Better schools, hospitals and universities.\n- Clean water, electricity, entertainment and the 'bright lights' of city life.\n- Family or friends already living there to help newcomers.\n\nNot all pull factors come true: many migrants end up in informal jobs and informal settlements.\n\n**2. Natural increase** — when the **birth rate is higher than the death rate**. Natural increase = birth rate − death rate. Cities often have high natural increase because migrants are mostly **young adults** of child-bearing age, and better healthcare in cities lowers the death rate. In many fast-growing cities in Africa and Asia, natural increase now causes around half or more of the growth.\n\n**Development matters:** HICs such as the UK urbanised mainly in the 1800s, during the Industrial Revolution, when factories pulled workers from farms. Today's rapid urbanisation in LICs and NEEs is faster and much larger: Dhaka, Lagos and Kinshasa are adding hundreds of thousands of people every year.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Push and pull factors causing rural to urban migration, plus natural increase in the city"><defs><marker id="causes-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e3a8a"/></marker></defs><rect x="6" y="20" width="118" height="120" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="65" y="36" font-size="11" text-anchor="middle" font-weight="bold" fill="#78350f">Countryside</text><text x="65" y="52" font-size="10" text-anchor="middle" fill="#92400e">PUSH factors</text><text x="12" y="70" font-size="10" fill="#78350f">• few jobs</text><text x="12" y="86" font-size="10" fill="#78350f">• floods, drought</text><text x="12" y="102" font-size="10" fill="#78350f">• poor schools</text><text x="12" y="118" font-size="10" fill="#78350f">• low incomes</text><rect x="196" y="20" width="118" height="120" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="255" y="36" font-size="11" text-anchor="middle" font-weight="bold" fill="#1e3a8a">City</text><text x="255" y="52" font-size="10" text-anchor="middle" fill="#1d4ed8">PULL factors</text><text x="202" y="70" font-size="10" fill="#1e3a8a">• more jobs</text><text x="202" y="86" font-size="10" fill="#1e3a8a">• hospitals</text><text x="202" y="102" font-size="10" fill="#1e3a8a">• universities</text><text x="202" y="118" font-size="10" fill="#1e3a8a">• family there</text><line x1="128" y1="80" x2="190" y2="80" stroke="#1e3a8a" stroke-width="3" marker-end="url(#causes-arrow)"/><text x="160" y="70" font-size="10" text-anchor="middle" fill="#1e3a8a">migration</text><rect x="196" y="150" width="118" height="42" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="255" y="167" font-size="10" text-anchor="middle" font-weight="bold" fill="#14532d">Natural increase</text><text x="255" y="183" font-size="10" text-anchor="middle" fill="#14532d">births &gt; deaths</text><text x="100" y="168" font-size="10" text-anchor="middle" fill="#334155">Young migrants →</text><text x="100" y="182" font-size="10" text-anchor="middle" fill="#334155">more births in city</text></svg>`,
      diagramCaption:
        "Push factors drive people out of the countryside and pull factors attract them to the city (rural–urban migration). Once there, young migrants help cause natural increase.",
      keyPoints: [
        "Two causes of urban growth: rural–urban migration and natural increase.",
        "Push factors push people away from rural areas; pull factors attract them to cities.",
        "Natural increase = birth rate − death rate; young migrants raise city birth rates.",
      ],
      thinkDeeper:
        "Some pull factors are 'perceived' rather than real — migrants believe life will be better but often end up in informal jobs. Why might people keep migrating to a city even when many newcomers struggle? Think about the role of money sent home, family networks and long-term hopes for children.",
      caseStudy: {
        place: "Dhaka, Bangladesh",
        facts: [
          "Dhaka's urban area has over 20 million people and is one of the fastest-growing megacities in the world.",
          "Estimates suggest hundreds of thousands of people (often quoted as around 400,000) move to Dhaka each year.",
          "The garment industry employs about 4 million people in Bangladesh, many of them young women from rural areas — a major pull factor.",
          "River-bank erosion, floods and cyclones in rural and coastal Bangladesh are important push factors linked to climate change.",
          "Dhaka is one of the most densely populated cities on Earth.",
        ],
      },
      skill: "Calculating natural increase (birth rate − death rate)",
    },
    {
      id: "urban-land-use",
      heading: "Inside a city: land-use zones and the Burgess model",
      discovery: {
        problem:
          "Picture a train journey from the edge of London to its centre. At the start you see fields and a giant shopping centre; then semi-detached houses with gardens; then rows of old terraced houses and converted warehouses; finally skyscrapers and offices. Why do the buildings change in such a regular order?",
        idea:
          "Cities tend to be arranged in zones around a central core. Land is most expensive and most accessible in the centre, so it is used intensively (tall offices and shops); land is cheaper further out, so homes get bigger and gardens appear. Models like Burgess's concentric zones describe this pattern.",
      },
      body:
        "**Land use** means what the land is used for — housing, shops, offices, industry, open space or transport. Cities usually show a pattern of **land-use zones**.\n\n**The Burgess concentric-zone model (1925).** Sociologist Ernest Burgess studied Chicago and suggested a city grows outwards in **rings** around the centre. A simplified version used in UK geography has four or five zones:\n\n- **1. CBD (Central Business District)** — the commercial heart: offices, department stores, banks, government buildings, theatres. Land is **most expensive** here because it is the most **accessible** place (all transport routes meet), so buildings are **tall** and few people live there.\n- **2. Inner city (Burgess's 'zone in transition')** — old factories, warehouses and dense **terraced housing** or flats built for workers, often in the 1800s. Many inner cities declined when industry closed, then were **regenerated** (old docks turned into offices and flats).\n- **3. Inner suburbs** — 'working-class' and lower-middle housing; smaller semi-detached and terraced homes.\n- **4. Outer suburbs** — larger, newer **semi-detached and detached houses** with gardens, built from the 1930s onwards as railways, buses and cars let people commute. Lower density, more green space.\n- **5. Rural–urban fringe (commuter zone)** — where the city meets the countryside: business parks, **out-of-town shopping centres**, airports, golf courses, sewage works and new housing estates on **greenfield** (never-built-on) land.\n\n**Patterns as you move from the CBD outwards:** land value and building height **fall**; housing density falls; houses get **newer** and **larger**; there is more green space.\n\n**Limits of the model:** real cities are not perfect circles. Rivers, coasts, hills and transport routes stretch zones into **sectors** (Hoyt's sector model, 1939), and many modern cities have several centres. Planned cities like Singapore deliberately created **regional centres** (Jurong, Tampines, Woodlands) so that not every job is in the CBD.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Burgess concentric zone model with five rings from the CBD to the rural-urban fringe"><text x="95" y="12" font-size="11" text-anchor="middle" font-weight="bold" fill="#1e293b">Burgess model</text><circle cx="95" cy="105" r="90" fill="#dcfce7" stroke="#15803d"/><circle cx="95" cy="105" r="72" fill="#bbf7d0" stroke="#15803d"/><circle cx="95" cy="105" r="54" fill="#fde68a" stroke="#b45309"/><circle cx="95" cy="105" r="34" fill="#fdba74" stroke="#c2410c"/><circle cx="95" cy="105" r="14" fill="#ef4444" stroke="#7f1d1d"/><text x="95" y="109" font-size="10" text-anchor="middle" fill="#ffffff" font-weight="bold">1</text><text x="119" y="109" font-size="10" text-anchor="middle" fill="#7c2d12">2</text><text x="139" y="109" font-size="10" text-anchor="middle" fill="#78350f">3</text><text x="158" y="109" font-size="10" text-anchor="middle" fill="#14532d">4</text><text x="176" y="109" font-size="10" text-anchor="middle" fill="#14532d">5</text><rect x="192" y="22" width="124" height="128" rx="6" fill="#f8fafc" stroke="#64748b"/><text x="198" y="40" font-size="10" fill="#7f1d1d">1 CBD</text><text x="198" y="60" font-size="10" fill="#7c2d12">2 Inner city</text><text x="198" y="80" font-size="10" fill="#78350f">3 Inner suburbs</text><text x="198" y="100" font-size="10" fill="#14532d">4 Outer suburbs</text><text x="198" y="120" font-size="10" fill="#14532d">5 Rural–urban</text><text x="210" y="134" font-size="10" fill="#14532d">fringe</text><text x="254" y="168" font-size="10" text-anchor="middle" fill="#334155">From centre outwards:</text><text x="254" y="182" font-size="10" text-anchor="middle" fill="#334155">land value ↓ height ↓</text><text x="254" y="196" font-size="10" text-anchor="middle" fill="#334155">gardens ↑ house age ↓</text></svg>`,
      diagramCaption:
        "The Burgess concentric-zone model: a city grows outwards in rings from the CBD. Land value and building height fall with distance from the centre.",
      keyPoints: [
        "Zones from the centre out: CBD → inner city → inner suburbs → outer suburbs → rural–urban fringe.",
        "Land value, building height and housing density fall away from the CBD because the centre is most accessible.",
        "The Burgess model (Chicago, 1925) is a simplification; rivers, transport routes and planning distort the rings.",
      ],
      thinkDeeper:
        "Singapore planned regional centres in Jurong, Tampines and Woodlands, and HDB new towns all over the island. Does Singapore fit the Burgess model? Find one way it fits (think about Raffles Place) and one way it does not, and explain why planning makes a difference.",
      caseStudy: {
        place: "London — applying the zones",
        facts: [
          "CBD: the City of London (the 'Square Mile', about 2.9 km²) and the West End — banks, offices and theatres.",
          "Inner city: areas like Tower Hamlets; the old London Docklands were regenerated from 1981, creating Canary Wharf.",
          "Suburbs: 1930s semi-detached houses in places such as Bromley and Harrow, linked by the Underground and railways.",
          "Rural–urban fringe: the M25 motorway (opened 1986), Heathrow Airport and Bluewater shopping centre (opened 1999).",
          "A protected 'green belt' around London limits urban sprawl into the countryside.",
        ],
      },
      skill: "Applying a model to a real city",
    },
    {
      id: "megacities",
      heading: "Megacities: where are the giants?",
      discovery: {
        problem:
          "In 1950 the world had only two cities with more than 10 million people: New York and Tokyo — both in rich countries. By 2018 there were 33. Before reading on, guess which continent most of the new ones are in, and why.",
        idea:
          "Megacities have multiplied, and the growth has shifted away from rich countries towards Asia, Africa and Latin America, where urbanisation is happening fastest. Asia now has the large majority of megacities.",
      },
      body:
        "A **megacity** is an urban area with a population of **more than 10 million people**.\n\n**How the number has grown (UN figures):**\n- **1950: 2** megacities — New York and Tokyo.\n- **1975: 3** — Mexico City joined them.\n- **1990: 10**\n- **2018: 33**\n- **2030: about 43** projected. Newer UN estimates count more than 2018, though the exact total depends on how city boundaries are drawn.\n\n**Examples (rounded metro populations — sources differ by several million):**\n- **Tokyo, Japan — about 37 million** (Greater Tokyo); the UN's largest city in 2018. Its population has now peaked and is slowly falling as Japan ages.\n- **Delhi, India — about 30 million+**, growing fast and expected to become the largest.\n- **Shanghai, China — about 25–30 million.**\n- **Dhaka, Bangladesh — over 20 million.**\n- **Cairo, Egypt — about 20–22 million**, the largest city in the Arab world.\n- **Lagos, Nigeria — about 15–17 million in the city, 20 million+ in the wider metro area.**\n- **São Paulo, Brazil — about 22 million**, the largest city in South America.\n- **Mumbai, India — about 20 million+**, India's financial capital.\n\nBe aware: a 2025 UN report using a new, wider way of drawing city boundaries ranked **Jakarta** first (about 42 million), with Dhaka second and Tokyo third. Rankings depend on **where you draw the line** around a city.\n\n**Describing the distribution using TEA:**\n- **T (Trend)** — the overall pattern: most megacities are in **Asia** (about 20 of the 33 in 2018), mostly in the **Northern Hemisphere**, and many are on **coasts or major rivers** (ports and trade).\n- **E (Example)** — give named cities and data: e.g. Tokyo (about 37 million), Delhi, Shanghai, Dhaka, Mumbai.\n- **A (Anomaly)** — exceptions: e.g. Southern Hemisphere megacities such as **São Paulo, Buenos Aires and Lima**; very few in **Europe** (Moscow, Paris) and **none in Oceania**.\n\n**The shift:** in 1950 megacities were in HICs. Today most are in **LICs and NEEs**, and the fastest-growing big cities are in **Africa** (Lagos, Kinshasa, and soon Luanda and Dar es Salaam) and **South Asia**.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of the number of megacities in each world region in 2018"><text x="160" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#1e293b">Megacities by region, 2018 (UN): 33 total</text><text x="102" y="42" font-size="10" text-anchor="end" fill="#1e293b">Asia</text><rect x="106" y="32" width="180" height="14" fill="#7c3aed"/><text x="290" y="43" font-size="10" fill="#1e293b">20</text><text x="102" y="68" font-size="10" text-anchor="end" fill="#1e293b">Latin America</text><rect x="106" y="58" width="54" height="14" fill="#a78bfa"/><text x="164" y="69" font-size="10" fill="#1e293b">6</text><text x="102" y="94" font-size="10" text-anchor="end" fill="#1e293b">Africa</text><rect x="106" y="84" width="27" height="14" fill="#a78bfa"/><text x="137" y="95" font-size="10" fill="#1e293b">3</text><text x="102" y="120" font-size="10" text-anchor="end" fill="#1e293b">Europe</text><rect x="106" y="110" width="18" height="14" fill="#c4b5fd"/><text x="128" y="121" font-size="10" fill="#1e293b">2</text><text x="102" y="146" font-size="10" text-anchor="end" fill="#1e293b">North America</text><rect x="106" y="136" width="18" height="14" fill="#c4b5fd"/><text x="128" y="147" font-size="10" fill="#1e293b">2</text><text x="102" y="168" font-size="10" text-anchor="end" fill="#1e293b">Oceania</text><text x="110" y="168" font-size="10" fill="#1e293b">0</text><text x="160" y="190" font-size="10" text-anchor="middle" fill="#b91c1c">In 1950 there were only 2: New York and Tokyo</text></svg>`,
      diagramCaption:
        "In 2018, about 20 of the world's 33 megacities were in Asia (including Istanbul, which the UN counts as Western Asia). In 1950 there were only two, both in high-income countries.",
      keyPoints: [
        "Megacity = urban area with more than 10 million people.",
        "Megacities rose from 2 in 1950 to 33 in 2018, with about 43 projected by 2030.",
        "Most are now in Asia; growth has shifted from HICs to LICs and NEEs in Asia and Africa. Describe distributions with TEA.",
      ],
      thinkDeeper:
        "Tokyo has been the world's biggest city for decades, yet its population is now falling, while Lagos and Kinshasa are growing by hundreds of thousands a year. Using what you know about natural increase and migration, explain why the 'top ten' list of 2050 will look very different from 1950's.",
      caseStudy: {
        place: "Tokyo, Japan",
        facts: [
          "Greater Tokyo has about 37 million people — the UN's largest urban agglomeration in its 2018 figures.",
          "Tokyo and New York were the world's only two megacities in 1950.",
          "Shinjuku Station is often described as the world's busiest, with over 3 million passenger journeys a day.",
          "Japan is about 92% urban, and Tokyo's population has now peaked because of an ageing population and low birth rate.",
        ],
      },
      skill: "Describing a distribution using TEA (Trend–Example–Anomaly)",
    },
    {
      id: "world-cities",
      heading: "World cities: big is not the same as important",
      discovery: {
        problem:
          "Singapore has about 6 million people — not even close to a megacity. Kinshasa has well over 15 million. Yet bankers, airlines and global companies would call Singapore far more 'important' to the world economy. What could make a smaller city more globally powerful than a bigger one?",
        idea:
          "A world (global) city is defined by its CONNECTIONS and INFLUENCE — finance, headquarters, transport hubs, media and culture — not by its population. A megacity is about size; a world city is about global power.",
      },
      body:
        "A **world city** (or **global city**) is a city that has a major influence on the **global economy, politics and culture**. It is a key **hub** in the networks of money, people, goods and information that link the world together.\n\n**Typical features of a world city:**\n- **Finance** — a major stock exchange, international banks and insurance companies.\n- **Headquarters** of large **transnational corporations (TNCs)** — companies that operate in many countries.\n- **Transport hub** — a huge international airport and often a major port.\n- **Politics** — international organisations or government headquarters (e.g. the United Nations in New York).\n- **Culture and media** — global news, arts, fashion and universities; a very **diverse** population speaking hundreds of languages.\n\n**The top world cities:** London and New York are usually ranked as the two most connected world cities (the 'Alpha++' cities in the Globalization and World Cities (GaWC) ranking). Singapore, Hong Kong, Tokyo, Paris, Shanghai and Dubai are also in the top tier.\n\n**Singapore — a world city without being a megacity:**\n- One of the world's leading **financial centres** (usually in the top four with New York, London and Hong Kong).\n- One of the world's **two busiest container ports**.\n- **Changi Airport** handles tens of millions of passengers a year (around 65–70 million), connecting to about 150 cities.\n- Hundreds of TNCs base their **Asia-Pacific regional headquarters** here.\n\n**Megacity vs world city:** some cities are both (Tokyo, New York, Shanghai). Some megacities have huge populations but less global influence (e.g. Kinshasa or Dhaka). Some world cities are not megacities (Singapore; London, with about 9 million in Greater London, depending on the boundary used).",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Network diagram linking world cities London, New York and Singapore by finance, flights and trade"><text x="160" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#1e293b">World cities = global hubs</text><line x1="60" y1="110" x2="160" y2="50" stroke="#2563eb" stroke-width="3"/><line x1="160" y1="50" x2="260" y2="120" stroke="#2563eb" stroke-width="3"/><line x1="60" y1="110" x2="260" y2="120" stroke="#2563eb" stroke-width="3"/><line x1="160" y1="50" x2="160" y2="160" stroke="#94a3b8" stroke-width="2"/><line x1="260" y1="120" x2="160" y2="160" stroke="#94a3b8" stroke-width="2"/><line x1="60" y1="110" x2="160" y2="160" stroke="#94a3b8" stroke-width="2"/><circle cx="160" cy="50" r="18" fill="#1d4ed8"/><text x="160" y="54" font-size="10" text-anchor="middle" fill="#ffffff">London</text><circle cx="60" cy="110" r="22" fill="#1d4ed8"/><text x="60" y="114" font-size="10" text-anchor="middle" fill="#ffffff">New York</text><circle cx="260" cy="120" r="24" fill="#1d4ed8"/><text x="260" y="124" font-size="10" text-anchor="middle" fill="#ffffff">Singapore</text><circle cx="160" cy="160" r="14" fill="#64748b"/><text x="160" y="190" font-size="10" text-anchor="middle" fill="#334155">other cities</text><text x="98" y="72" font-size="10" fill="#1e3a8a">finance</text><text x="222" y="78" font-size="10" fill="#1e3a8a">flights</text><text x="150" y="128" font-size="10" fill="#1e3a8a">trade, data</text></svg>`,
      diagramCaption:
        "World cities are the busiest junctions in global networks of money, flights, trade and information — what matters is connection, not population.",
      keyPoints: [
        "A world (global) city has major global influence through finance, TNC headquarters, transport, politics and culture.",
        "London and New York are the most connected world cities; Singapore is in the top tier.",
        "Megacity = size (10 million+); world city = global influence. A city can be one, both or neither.",
      ],
      thinkDeeper:
        "Is it possible for a city to become a world city if it is NOT on a coast? Think about Paris, Beijing and Johannesburg. What else, apart from a port, can connect a city to the world?",
      caseStudy: {
        place: "Singapore as a world city",
        facts: [
          "Population about 6 million — a world city but not a megacity.",
          "Regularly ranked among the world's top four financial centres, with New York, London and Hong Kong.",
          "Its port is one of the two busiest container ports in the world.",
          "Changi Airport handles around 65–70 million passengers a year in normal years.",
          "Hundreds of transnational corporations have their Asia-Pacific regional headquarters in Singapore.",
        ],
      },
    },
    {
      id: "informal-settlements",
      heading: "Informal settlements: life on the edge",
      discovery: {
        problem:
          "Dharavi in Mumbai covers about 2 km² — smaller than Singapore's Changi Airport — yet somewhere between 600,000 and 1 million people live there, and its small businesses are thought to earn hundreds of millions of US dollars a year. How can a place be both very poor and very busy and productive?",
        idea:
          "Informal settlements (slums) house migrants who cannot afford formal housing. They lack basic services and legal security, but they are also full of enterprise: recycling, crafts and workshops form a huge informal economy.",
      },
      body:
        "An **informal settlement** is an area of housing built **without legal permission** on land the residents do not own, often on unsafe or unwanted land. A **slum** is the everyday word for a run-down, overcrowded area lacking basic services; the terms overlap. Other names include **favelas** (Brazil), **bustees** (India) and **shanty towns**.\n\n**The UN-Habitat definition:** a slum household lacks one or more of: **clean water**, **proper sanitation** (toilets), **enough living space** (no more than 3 people per room), **durable housing**, or **security of tenure** (the legal right to stay).\n\n**How big is the issue?** About **1.1 billion people** — roughly **1 in 4** city dwellers worldwide — live in slums or informal settlements, mostly in sub-Saharan Africa and South Asia.\n\n**Why do they form?** Rapid rural–urban migration and natural increase mean cities grow faster than governments can build affordable housing, roads, drains and schools. Newcomers build homes from whatever they can find — corrugated iron, wood, plastic sheeting — on spare land: **steep hillsides, river banks, swamps, beside railway lines** or near rubbish dumps.\n\n**Problems:**\n- Overcrowding; shared toilets and water taps; open drains spreading diseases such as cholera and typhoid.\n- High risk of **floods, landslides and fires**.\n- No legal ownership, so residents can be **evicted**.\n- Many work in the **informal economy** — jobs that are not taxed or protected, such as street selling or waste picking.\n\n**But also strengths:** strong communities, busy small businesses, recycling, and homes close to city jobs. That is why many experts now favour **upgrading** settlements (adding water, toilets, paths and legal tenure) rather than bulldozing them.\n\n**Kibera, Nairobi (Kenya)** is one of Africa's largest informal settlements, covering about 2.5 km². Estimates of its population vary hugely — from about 170,000 (2009 census) to over 700,000 — which shows how hard informal places are to count. The Kenya Slum Upgrading Programme has replaced some shacks with flats, and in 2009 young residents created **Map Kibera**, the first free, detailed map of the settlement.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of an informal settlement on a hillside next to a river, with hazards and the nearby city labelled"><text x="160" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#1e293b">Informal settlement: cross-section</text><path d="M0,60 L150,150 L210,165 L320,165 L320,200 L0,200 Z" fill="#d6b88a"/><rect x="210" y="160" width="40" height="8" fill="#60a5fa"/><rect x="30" y="70" width="18" height="12" fill="#a8a29e"/><path d="M28,70 L39,62 L50,70 Z" fill="#78716c"/><rect x="62" y="80" width="18" height="12" fill="#a8a29e"/><path d="M60,80 L71,72 L82,80 Z" fill="#78716c"/><rect x="94" y="99" width="18" height="12" fill="#a8a29e"/><path d="M92,99 L103,91 L114,99 Z" fill="#78716c"/><rect x="126" y="118" width="18" height="12" fill="#a8a29e"/><path d="M124,118 L135,110 L146,118 Z" fill="#78716c"/><rect x="170" y="143" width="18" height="12" fill="#a8a29e"/><path d="M168,143 L179,135 L190,143 Z" fill="#78716c"/><rect x="270" y="95" width="14" height="70" fill="#475569"/><rect x="288" y="80" width="16" height="85" fill="#334155"/><text x="6" y="48" font-size="10" fill="#7f1d1d">Steep slope: landslides</text><text x="196" y="190" font-size="10" fill="#1e3a8a">River: floods</text><text x="150" y="98" font-size="10" fill="#334155">Shacks of tin,</text><text x="150" y="110" font-size="10" fill="#334155">wood, plastic</text><text x="214" y="70" font-size="10" fill="#334155">City jobs</text><text x="214" y="82" font-size="10" fill="#334155">nearby →</text><text x="20" y="182" font-size="10" fill="#7f1d1d">Open drains, shared taps</text></svg>`,
      diagramCaption:
        "Informal settlements often grow on unwanted, hazardous land — steep slopes and river banks — but close to the jobs of the formal city.",
      keyPoints: [
        "Informal settlements are built without legal permission; slums lack water, sanitation, space, durable homes or secure tenure.",
        "About 1.1 billion people (around 1 in 4 urban residents) live in slums or informal settlements.",
        "They face hazards and disease but have strong communities and huge informal economies; upgrading is often preferred to demolition.",
      ],
      thinkDeeper:
        "Bulldozing Dharavi and building tower blocks might look like the quickest fix. Who would gain and who might lose? Think about a potter in Kumbharwada whose kiln is in her home, or a recycler who needs space to sort plastic.",
      caseStudy: {
        place: "Dharavi, Mumbai (India)",
        facts: [
          "Covers only about 2.1 km² but has an estimated 600,000–1,000,000 residents — among the highest densities on Earth.",
          "Its thousands of small businesses (recycling, pottery, leather, garments) are estimated to turn over roughly US$650 million–1 billion a year.",
          "Recyclers in Dharavi process a large share of Mumbai's plastic waste.",
          "Around 4 in 10 of Mumbai's people are estimated to live in slums or informal settlements.",
          "A large redevelopment project, awarded to the Adani Group in 2022, plans to rehouse residents in new flats — a plan many residents debate.",
        ],
      },
    },
  ],

  mnemonics: [
    {
      topic: "Land-use zones from the centre outwards",
      device: "Can I See Rural Fields?",
      explanation:
        "CBD → Inner city → Suburbs (inner then outer) → Rural–urban Fringe. Read it from the middle of the Burgess circles to the edge.",
    },
    {
      topic: "Describing a distribution (map or graph)",
      device: "Have a cup of TEA",
      explanation:
        "Trend (the overall pattern), Example (a named place with data), Anomaly (the exception that does not fit). E.g. 'Most megacities are in Asia (T); e.g. Tokyo, about 37 million (E); but São Paulo is in the Southern Hemisphere (A).'",
    },
    {
      topic: "Urbanisation vs urban growth",
      device: "Urbanisation = Up the Proportion; Growth = Gets Numbers",
      explanation:
        "Urbanisation is about the PERCENTAGE of people in urban areas (it can never pass 100%). Urban growth is about the NUMBER of urban people or the AREA of the city.",
    },
    {
      topic: "Megacity threshold",
      device: "Ten Million Makes a Mega",
      explanation: "A megacity has more than 10 million people. 1950: 2 megacities; 2018: 33; 2030: about 43.",
    },
  ],

  examMistakes: [
    "Confusing urbanisation (rising PERCENTAGE of urban people) with urban growth (rising NUMBER of urban people or area).",
    "Describing a distribution without data or named places — always use TEA: Trend, Example with figures, Anomaly.",
    "Listing push and pull factors the wrong way round: push factors are about the countryside, pull factors are about the city.",
    "Forgetting natural increase as a cause of urban growth — migration is not the only reason cities grow.",
    "Mixing up megacity (more than 10 million people) and world city (global influence) — Singapore is a world city but not a megacity.",
    "Saying the CBD is where most people live — it is mainly offices and shops; few people live there because land is so expensive.",
    "In 'explain' questions, only describing ('slums have no toilets') without the 'because/so' link ('so diseases such as cholera spread quickly').",
    "Quoting population figures as exact when sources differ — say 'about' and name the definition (city or metro area).",
  ],

  misconceptions: [
    {
      wrong: "A city is any place with more than a million people.",
      right:
        "There is no single definition. Countries use population thresholds (from 200 in Denmark to 50,000 in Japan), density, jobs or official status — UK cities like St Davids have under 2,000 people.",
    },
    {
      wrong: "Urbanisation means cities getting bigger.",
      right:
        "Urbanisation means the PROPORTION of people living in urban areas is increasing. Cities can get bigger (urban growth) even when the urban proportion stays the same, as in Singapore.",
    },
    {
      wrong: "Cities only grow because people move there from the countryside.",
      right:
        "Natural increase (more births than deaths) is also a major cause — in many African and Asian cities it causes around half or more of the growth.",
    },
    {
      wrong: "The biggest megacities are all in rich countries like the USA and Japan.",
      right:
        "That was true in 1950. Today most megacities are in Asia, Africa and Latin America, in LICs and NEEs such as India, Bangladesh, Nigeria and Brazil.",
    },
    {
      wrong: "Slums are just places of crime and unemployment.",
      right:
        "Informal settlements face real problems, but they also have strong communities and busy informal economies — Dharavi's businesses are estimated to turn over hundreds of millions of US dollars a year.",
    },
    {
      wrong: "The city centre is always the coolest place because tall buildings give shade.",
      right:
        "Because of the urban heat island, city centres are usually the WARMEST areas, especially at night, as concrete releases stored heat and air-conditioners and vehicles add waste heat.",
    },
  ],

  expertDebates: [
    {
      question: "Are megacities a good thing or a problem?",
      detail:
        "Supporters say megacities are engines of growth: they create jobs, ideas and wealth, and dense living can use less energy per person than sprawling suburbs. Critics point to slums, traffic, pollution and vulnerability to disasters such as floods and earthquakes, and argue that governments should help smaller cities grow instead. Many geographers say the answer depends on how well a megacity is planned and governed.",
    },
    {
      question: "Should informal settlements be cleared or upgraded?",
      detail:
        "Clearing slums and building new flats can provide safe homes with water and toilets — Singapore rehoused its kampong and squatter residents into HDB flats from the 1960s. But demolition can destroy livelihoods, break up communities and push people further from jobs. 'In-situ upgrading' — adding services and legal tenure where people already live — is often cheaper and fairer, but slower. Dharavi's redevelopment is a live example of this debate.",
    },
    {
      question: "How should we measure the size of a city?",
      detail:
        "City proper, urban agglomeration and metropolitan area give very different numbers: Tokyo can be 14 million or 37 million depending on the boundary. In 2025 a UN report using a new method ranked Jakarta as the largest city. Some experts say we need one global method; others argue local definitions reflect how cities really work. This is why you should always say 'about' and name your source.",
    },
  ],

  realWorld: [
    {
      title: "Your HDB estate is planned urban land use",
      detail:
        "Each HDB new town (like Punggol or Tengah) is planned by HDB and URA with its own town centre, MRT station, schools and parks — so residents do not all need to travel to the CBD.",
      emoji: "🏢",
    },
    {
      title: "Feeling the urban heat island",
      detail:
        "Walk from Orchard Road to the Singapore Botanic Gardens on a hot evening and you can feel the difference. Singapore's 'City in Nature' plans add trees and green roofs partly to cool the city.",
      emoji: "🌡️",
    },
    {
      title: "Changi: a world-city hub",
      detail:
        "Every flight from Changi connects Singapore to the global network that makes it a world city — tens of millions of passengers a year.",
      emoji: "✈️",
    },
    {
      title: "Where your clothes are made",
      detail:
        "Many T-shirts sold in Singapore are made in Dhaka's garment factories, whose jobs pull millions of young rural Bangladeshis into the city.",
      emoji: "👕",
    },
    {
      title: "Recycling in Dharavi",
      detail:
        "Plastic bottles thrown away in Mumbai are sorted, washed and shredded by hand in Dharavi's informal recycling workshops before being sold back to factories.",
      emoji: "♻️",
    },
    {
      title: "COE and ERP",
      detail:
        "Singapore's Certificate of Entitlement and Electronic Road Pricing are real tools to fight one of the biggest city problems: traffic congestion.",
      emoji: "🚗",
    },
  ],

  flashcards: [
    { front: "Urbanisation", back: "The increase in the PROPORTION (%) of people living in urban areas." },
    { front: "Urban growth", back: "The increase in the NUMBER of people living in urban areas, or in the area a city covers." },
    { front: "Megacity", back: "An urban area with more than 10 million people (2 in 1950; 33 in 2018; about 43 by 2030)." },
    { front: "World (global) city", back: "A city with major global influence in finance, business, transport, politics and culture — e.g. London, New York, Singapore." },
    { front: "Rural–urban migration", back: "The movement of people from the countryside to towns and cities." },
    { front: "Push factor vs pull factor", back: "Push: a negative factor that drives people away from a place (e.g. drought). Pull: a positive factor that attracts people to a place (e.g. jobs)." },
    { front: "Natural increase", back: "Birth rate minus death rate; when there are more births than deaths, the population grows." },
    { front: "CBD", back: "Central Business District — the commercial centre of a city, with offices, shops and the highest land values." },
    { front: "Rural–urban fringe", back: "The zone at the edge of a city where urban and rural land uses mix: business parks, out-of-town shops, airports, farmland." },
    { front: "Burgess model", back: "A 1925 model based on Chicago showing a city growing in concentric rings around the CBD." },
    { front: "Urban heat island", back: "A city being warmer than the surrounding countryside, especially at night, because of concrete, buildings and waste heat." },
    { front: "Informal settlement / slum", back: "Housing built without legal permission, often lacking water, sanitation, space, durable homes or secure tenure." },
    { front: "World urbanisation figures", back: "About 30% (1950), 50% (2007), about 57% (2023), about 68% projected (2050). Singapore: 100%." },
    { front: "Dharavi", back: "Informal settlement in Mumbai: about 2.1 km², about 600,000–1 million people, huge recycling and small-business economy." },
    { front: "TEA", back: "How to describe a distribution: Trend, Example (with data), Anomaly." },
    { front: "Population density", back: "Population ÷ area, in people per km². Singapore: about 6 million ÷ 735 km² ≈ 8,200 per km²." },
  ],

  mustKnow: [
    "Explain why there is no single definition of a city, giving at least two different national criteria.",
    "Describe positive and negative characteristics of cities, including the urban heat island.",
    "Define urbanisation and urban growth and explain the difference using an example.",
    "Quote world urbanisation figures (about 57% in 2023, about 68% by 2050) and Singapore's 100%.",
    "Explain how rural–urban migration (push and pull factors) and natural increase cause urban growth.",
    "Name and describe the land-use zones of the Burgess model and apply them to a real city.",
    "Define a megacity, name at least five, and describe their distribution using TEA.",
    "Explain the difference between a megacity and a world city, using Singapore as an example.",
    "Describe the features of informal settlements using Dharavi or Kibera as an example.",
    "Calculate population density and percentage change from data.",
  ],

  videos: [
    {
      title: "Urbanisation explained",
      channel: "Time for Geography",
      url: "https://www.youtube.com/results?search_query=time+for+geography+urbanisation",
    },
    {
      title: "Megacities and world cities",
      channel: "Cool Geography",
      url: "https://www.youtube.com/results?search_query=cool+geography+megacities+world+cities",
    },
    {
      title: "Urban land use and the Burgess model",
      channel: "BBC Bitesize",
      url: "https://www.youtube.com/results?search_query=bbc+bitesize+urban+land+use+model+burgess",
    },
    {
      title: "Life in Dharavi, Mumbai",
      channel: "Geography Hub",
      url: "https://www.youtube.com/results?search_query=geography+hub+dharavi+mumbai+slum",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "city-quiz-mcq-1",
        question: "Which of these best defines urbanisation?",
        options: [
          "An increase in the number of cities in a country",
          "An increase in the proportion of people living in urban areas",
          "The movement of people from cities back to the countryside",
          "The building of taller offices in the CBD",
        ],
        answerIndex: 1,
        hint: "Is urbanisation measured as a number or as a share?",
        explanation:
          "Urbanisation is about the PROPORTION (percentage) of people living in urban areas. 'More cities' or bigger cities is urban growth, not urbanisation; moving to the countryside is counter-urbanisation.",
        guideRef: "urbanisation",
      },
      {
        id: "city-quiz-mcq-2",
        question: "What is the minimum population for an urban area to be called a megacity?",
        options: ["1 million", "5 million", "10 million", "20 million"],
        answerIndex: 2,
        hint: "Think 'Ten Million Makes a Mega'.",
        explanation:
          "A megacity has more than 10 million people. 1 million is sometimes called a 'million city'; 20 million is far bigger than the threshold — only the very largest megacities, like Tokyo or Delhi, pass it.",
        guideRef: "megacities",
      },
      {
        id: "city-quiz-mcq-3",
        question: "In the Burgess model, which zone is furthest from the CBD?",
        options: ["Inner city", "Inner suburbs", "Outer suburbs", "Rural–urban fringe (commuter zone)"],
        answerIndex: 3,
        hint: "Where does the city meet the countryside?",
        explanation:
          "The rural–urban fringe (Burgess's commuter zone) is the outermost ring, where urban and rural land uses mix. The outer suburbs are close, but they are still fully built-up housing inside the fringe.",
        guideRef: "urban-land-use",
      },
      {
        id: "city-quiz-mcq-4",
        question: "Which of these is a PULL factor encouraging rural–urban migration?",
        options: [
          "Better-paid jobs in city factories",
          "Crops failing because of drought",
          "Farm machines replacing labourers",
          "Few secondary schools in villages",
        ],
        answerIndex: 0,
        hint: "Pull factors are about the place people move TO.",
        explanation:
          "Better-paid city jobs attract (pull) people to the city. Drought, mechanisation and poor rural schools are all push factors — negative things that drive people away from the countryside.",
        guideRef: "causes-of-urbanisation",
      },
    ],
    qa: [
      {
        id: "city-quiz-qa-1",
        question: "Explain the difference between urbanisation and urban growth.",
        marks: 2,
        hint: "One is a percentage, the other is a number.",
        modelAnswer:
          "Urbanisation is an increase in the proportion (percentage) of people living in urban areas. Urban growth is an increase in the number of people living in towns and cities, or in the area they cover — for example, Singapore's population has grown a lot, but it has stayed 100% urban.",
        markScheme: [
          { point: "Urbanisation = increase in proportion/percentage of people in urban areas", keywords: ["proportion", "percentage", "share", "%"] },
          { point: "Urban growth = increase in number of urban people or area of a city", keywords: ["number", "size", "area", "more people", "physical"] },
        ],
        commonError: "Saying both mean 'cities getting bigger' — urbanisation must be described as a proportion or percentage.",
        guideRef: "urbanisation",
      },
      {
        id: "city-quiz-qa-2",
        question: "Explain two causes of urban growth in cities in lower-income countries.",
        marks: 4,
        hint: "One cause is people arriving; the other happens inside the city.",
        modelAnswer:
          "One cause is rural–urban migration. People are pushed from the countryside by a lack of jobs, droughts or floods, and pulled to cities by better-paid jobs, schools and hospitals — for example, garment factory jobs pull young people to Dhaka. A second cause is natural increase: the birth rate is higher than the death rate. Because most migrants are young adults, they have children in the city, and better healthcare lowers the death rate, so the population grows even without more migration.",
        markScheme: [
          { point: "Identifies rural–urban migration", keywords: ["migrat", "move from rural", "move to the city", "rural-urban", "rural–urban"] },
          { point: "Explains with a push or pull factor", keywords: ["push", "pull", "jobs", "drought", "flood", "hospital"] },
          { point: "Identifies natural increase", keywords: ["natural increase", "birth rate", "births", "more births than deaths"] },
          { point: "Explains why natural increase is high (young migrants / healthcare)", keywords: ["young", "child-bearing", "healthcare", "death rate", "lower death"] },
        ],
        commonError: "Only writing about migration and forgetting natural increase, or listing factors without explaining how they cause growth.",
        guideRef: "causes-of-urbanisation",
      },
      {
        id: "city-quiz-qa-3",
        question: "Describe the global distribution of megacities. Use TEA in your answer.",
        marks: 3,
        hint: "Trend, Example with data, Anomaly.",
        modelAnswer:
          "Most megacities are in Asia — about 20 of the 33 in 2018 — and most are in the Northern Hemisphere, often on coasts or big rivers (Trend). For example, Tokyo has about 37 million people, and Delhi, Shanghai, Dhaka and Mumbai are all in Asia (Example). However, there are some in the Southern Hemisphere, such as São Paulo and Buenos Aires, and there are none in Oceania (Anomaly).",
        markScheme: [
          { point: "Trend: most in Asia / Northern Hemisphere / LICs and NEEs", keywords: ["asia", "northern hemisphere", "most", "majority"] },
          { point: "Example: named megacity, ideally with data", keywords: ["tokyo", "delhi", "shanghai", "dhaka", "mumbai", "million"] },
          { point: "Anomaly: e.g. Southern Hemisphere megacity or none in Oceania", keywords: ["southern hemisphere", "são paulo", "sao paulo", "buenos aires", "lima", "oceania"] },
        ],
        commonError: "Explaining WHY megacities are where they are instead of describing WHERE they are, or giving no named examples.",
        guideRef: "megacities",
      },
      {
        id: "city-quiz-qa-4",
        question: "Singapore is a world city but not a megacity. Explain why.",
        marks: 3,
        hint: "Compare its population with the megacity threshold, then think about its global connections.",
        modelAnswer:
          "Singapore has only about 6 million people, which is below the 10 million needed to be a megacity. However, it is a world city because it has huge global influence: it is one of the world's top financial centres, it has one of the two busiest container ports and a major international airport at Changi, and hundreds of transnational corporations have their Asia-Pacific headquarters there.",
        markScheme: [
          { point: "Population about 6 million, below 10 million threshold", keywords: ["6 million", "six million", "10 million", "ten million", "below", "less than"] },
          { point: "World city status depends on global influence/connections", keywords: ["influence", "connect", "global", "hub"] },
          { point: "Named evidence: finance, port, Changi, TNC headquarters", keywords: ["financ", "bank", "port", "changi", "headquarter", "tnc"] },
        ],
        commonError: "Assuming a world city must be very large — world-city status is about connections and influence, not population.",
        guideRef: "world-cities",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "city-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "city-mcq-p1-q01",
            question: "Which list shows the settlement hierarchy from SMALLEST to LARGEST?",
            options: [
              "Village, hamlet, town, city",
              "Hamlet, village, town, city",
              "Hamlet, town, village, city",
              "Town, village, hamlet, city",
            ],
            answerIndex: 1,
            hint: "A hamlet is just a handful of houses.",
            explanation:
              "The hierarchy runs hamlet → village → town → city (→ megacity). 'Village, hamlet…' is tempting but a hamlet is smaller than a village.",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-mcq-p1-q02",
            question: "Why is there no single worldwide definition of a city?",
            options: [
              "Because all cities have exactly the same population",
              "Because the United Nations has banned the word 'city'",
              "Because each country sets its own rules, such as population size, density, jobs or official status",
              "Because cities are only defined by how tall their buildings are",
            ],
            answerIndex: 2,
            hint: "Compare Denmark, Japan and the UK.",
            explanation:
              "Each country uses its own criteria — Denmark counts 200 people as urban, Japan needs about 50,000 for a city, and the UK grants city status as a royal title. Building height is not used as a definition anywhere.",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-mcq-p1-q03",
            question: "In Denmark, what is the minimum population for a settlement to count as urban?",
            options: ["50", "2,000", "20,000", "200"],
            answerIndex: 3,
            hint: "It is a remarkably small number.",
            explanation:
              "Denmark (and Sweden) count settlements of just 200 people as urban. 2,000 might seem more sensible, but that is ten times Denmark's real threshold.",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-mcq-p1-q04",
            question: "How does a place in the UK become a city?",
            options: [
              "City status is granted by the monarch as an honour",
              "It automatically becomes a city at 100,000 people",
              "It must have a population density over 400 per km²",
              "It must have an international airport",
            ],
            answerIndex: 0,
            hint: "Think about St Davids, a 'city' of under 2,000 people.",
            explanation:
              "UK city status is a royal honour — often linked to a cathedral — which is why tiny St Davids is a city. If 100,000 people were the rule, Milton Keynes would not have had to wait until 2022.",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-mcq-p1-q05",
            question: "Roughly what percentage of the world's population lived in urban areas in 2023?",
            options: ["About 25%", "About 40%", "About 57%", "About 85%"],
            answerIndex: 2,
            hint: "The world passed 50% in 2007 and has kept rising slowly.",
            explanation:
              "About 57% of people were urban in 2023. 85% is close to the UK's figure, not the world's — many people in Africa and South Asia still live in rural areas.",
            guideRef: "urbanisation",
          },
          {
            id: "city-mcq-p1-q06",
            question: "What percentage of the world's population is projected to be urban by 2050?",
            options: ["About 68%", "About 50%", "About 90%", "About 100%"],
            answerIndex: 0,
            hint: "Roughly two in every three people.",
            explanation:
              "The UN projects about 68% by 2050. 50% was already passed in 2007, so it cannot be the 2050 figure.",
            guideRef: "urbanisation",
          },
          {
            id: "city-mcq-p1-q07",
            question: "Which of these countries is 100% urban?",
            options: ["Japan", "United Kingdom", "India", "Singapore"],
            answerIndex: 3,
            hint: "A city-state with no countryside officially counted as rural.",
            explanation:
              "Singapore is a city-state counted as 100% urban. Japan is very urban (about 92%) but still has rural areas, and India is only about 36% urban.",
            guideRef: "urbanisation",
          },
          {
            id: "city-mcq-p1-q08",
            question: "What is natural increase?",
            options: [
              "People moving from rural areas to cities",
              "The birth rate minus the death rate, when births are higher",
              "A city growing in area by building on farmland",
              "The rise in the percentage of people living in cities",
            ],
            answerIndex: 1,
            hint: "It has nothing to do with people moving.",
            explanation:
              "Natural increase = birth rate − death rate. Moving from rural areas is rural–urban migration — a different cause of urban growth.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-mcq-p1-q09",
            question: "Which of these is a PUSH factor for a farmer living in a rural area?",
            options: [
              "Better hospitals in the city",
              "Crop failure caused by drought",
              "Relatives who already live in the city",
              "University places in the capital",
            ],
            answerIndex: 1,
            hint: "Push factors are negative things about the place people LEAVE.",
            explanation:
              "Drought ruining crops pushes people away from the countryside. Hospitals, relatives and universities in the city are pull factors.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-mcq-p1-q10",
            question: "Which feature is typical of a city's CBD?",
            options: [
              "The lowest land values in the city",
              "Large detached houses with big gardens",
              "Tall office buildings, department stores and high land values",
              "Farmland, golf courses and sewage works",
            ],
            answerIndex: 2,
            hint: "CBD stands for Central Business District.",
            explanation:
              "The CBD has the highest land values, so land is used intensively for tall offices and shops. Big gardens belong in the suburbs; farmland and golf courses are in the rural–urban fringe.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p1-q11",
            question: "The Burgess concentric-zone model (1925) was based on which city?",
            options: ["Chicago", "London", "Paris", "New York"],
            answerIndex: 0,
            hint: "An American city on the shore of Lake Michigan.",
            explanation:
              "Ernest Burgess studied Chicago. Although the model is often applied to London in UK classrooms, it was not designed from London.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p1-q12",
            question: "How many megacities were there in the world in 1950?",
            options: ["0", "10", "2", "33"],
            answerIndex: 2,
            hint: "Both were in high-income countries — one in the USA and one in Japan.",
            explanation:
              "In 1950 there were just two: New York and Tokyo. 33 is the UN's figure for 2018, not 1950.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p1-q13",
            question: "In the UN's 2018 figures, which was the world's largest urban area, with about 37 million people?",
            options: ["Delhi", "Tokyo", "Lagos", "New York"],
            answerIndex: 1,
            hint: "It is in Japan.",
            explanation:
              "Greater Tokyo had about 37 million people in the UN's 2018 figures. Delhi is growing faster and is expected to overtake it, but it was second in 2018.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p1-q14",
            question: "Which city is a world city but NOT a megacity?",
            options: ["Dhaka", "Kinshasa", "Lagos", "Singapore"],
            answerIndex: 3,
            hint: "It has about 6 million people but a huge global influence.",
            explanation:
              "Singapore has about 6 million people (below 10 million) but is a top financial centre and transport hub. Dhaka, Kinshasa and Lagos are megacities with less global financial influence.",
            guideRef: "world-cities",
          },
          {
            id: "city-mcq-p1-q15",
            question: "What is the urban heat island effect?",
            options: [
              "Islands close to cities being hotter than the mainland",
              "Cities being cooler than the countryside because tall buildings give shade",
              "Hot air rising over the sea near coastal cities",
              "A city being warmer than the surrounding countryside, especially at night",
            ],
            answerIndex: 3,
            hint: "It has nothing to do with real islands.",
            explanation:
              "The urban heat island is a city being warmer than the countryside around it, mainly at night, as concrete releases stored heat. Shade from buildings does not outweigh this, so city centres are usually warmest.",
            guideRef: "city-life",
          },
          {
            id: "city-mcq-p1-q16",
            question: "In which city is the informal settlement of Dharavi?",
            options: ["Delhi", "Dhaka", "Mumbai", "Karachi"],
            answerIndex: 2,
            hint: "India's financial capital, on the west coast.",
            explanation:
              "Dharavi is in Mumbai, India. Delhi is also an Indian megacity, but Dharavi is not there.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-mcq-p1-q17",
            question: "Kibera, one of Africa's largest informal settlements, is in which city?",
            options: ["Nairobi, Kenya", "Lagos, Nigeria", "Cairo, Egypt", "Kinshasa, DR Congo"],
            answerIndex: 0,
            hint: "East Africa.",
            explanation:
              "Kibera is in Nairobi, Kenya. Lagos has large informal settlements too (such as Makoko), but Kibera is not one of them.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-mcq-p1-q18",
            question: "When describing a distribution, what does TEA stand for?",
            options: [
              "Time, Evidence, Analysis",
              "Trend, Example, Anomaly",
              "Theme, Explain, Argue",
              "Trend, Explain, Assess",
            ],
            answerIndex: 1,
            hint: "The middle letter means you must name a place with data.",
            explanation:
              "TEA = Trend (overall pattern), Example (named place with data), Anomaly (the exception). 'Explain' is not part of it — description questions do not ask you to explain.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p1-q19",
            question: "A town has 50,000 people living on 20 km². What is its population density?",
            options: ["250 per km²", "1,000,000 per km²", "400 per km²", "2,500 per km²"],
            answerIndex: 3,
            hint: "Density = population ÷ area.",
            explanation:
              "50,000 ÷ 20 = 2,500 people per km². 1,000,000 comes from multiplying instead of dividing.",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-mcq-p1-q20",
            question: "In roughly which year did more than half of the world's people first live in urban areas?",
            options: ["1950", "1990", "2007", "2050"],
            answerIndex: 2,
            hint: "It happened in the 21st century, but has already happened.",
            explanation:
              "The world passed 50% urban in about 2007. 2050 is when about 68% are expected to be urban.",
            guideRef: "urbanisation",
          },
        ],
      },
      {
        id: "city-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          {
            id: "city-mcq-p2-q01",
            question: "Which is an example of urban growth WITHOUT urbanisation?",
            options: [
              "A country's urban share rises from 40% to 50%",
              "A city grows from 2 to 3 million while the rural population grows just as fast, so the urban % stays the same",
              "People leave a city to live in villages",
              "Farmland is abandoned as people move to towns",
            ],
            answerIndex: 1,
            hint: "Urban growth = more people; urbanisation = a bigger share.",
            explanation:
              "If the rural population grows as fast as the city, the city gets bigger (urban growth) but the urban percentage stays the same (no urbanisation). A rise from 40% to 50% IS urbanisation.",
            guideRef: "urbanisation",
          },
          {
            id: "city-mcq-p2-q02",
            question: "Why do many fast-growing cities have high natural increase?",
            options: [
              "Because city air pollution increases the birth rate",
              "Because older people tend to move to cities to retire",
              "Because most migrants are young adults of child-bearing age, and city healthcare lowers death rates",
              "Because cities have fewer hospitals than rural areas",
            ],
            answerIndex: 2,
            hint: "Think about the age of people who migrate.",
            explanation:
              "Migrants are mostly young adults who then have children in the city, and better healthcare reduces deaths. Cities usually have MORE hospitals than rural areas, not fewer.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-mcq-p2-q03",
            question: "Which of these is a PULL factor drawing people to Dhaka?",
            options: [
              "River-bank erosion destroying farmland",
              "Cyclones hitting the coast",
              "Machines replacing farm labourers",
              "Jobs in garment factories",
            ],
            answerIndex: 3,
            hint: "Which one is about the city, not the countryside?",
            explanation:
              "Garment factory jobs in Dhaka attract (pull) migrants. River erosion, cyclones and mechanisation happen in the countryside and push people away.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-mcq-p2-q04",
            question: "Which description best fits the inner city of a UK city?",
            options: [
              "Terraced housing and old factories built in the 1800s, often later regenerated",
              "Business parks and out-of-town shopping centres",
              "Large detached houses built after 1950",
              "Tall office towers and the main department stores",
            ],
            answerIndex: 0,
            hint: "This zone grew up next to the CBD during the Industrial Revolution.",
            explanation:
              "The inner city has dense 19th-century terraced housing and old industry, much of it regenerated. Tall offices and department stores are in the CBD, one zone further in.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p2-q05",
            question: "Why is land most expensive in the CBD?",
            options: [
              "Because the soil there is the most fertile",
              "Because it is the most accessible place, so many businesses compete for a small area",
              "Because the government charges a special tax only on central land",
              "Because nobody wants to build there",
            ],
            answerIndex: 1,
            hint: "Where do all the transport routes meet?",
            explanation:
              "The CBD is the most accessible point, so shops and offices compete for limited land, pushing prices up. Soil fertility matters for farming, not city land values.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p2-q06",
            question: "In which zone would you expect to find an out-of-town shopping centre such as Bluewater near London?",
            options: ["CBD", "Inner city", "Rural–urban fringe", "Inner suburbs"],
            answerIndex: 2,
            hint: "It needs lots of cheap land and easy motorway access.",
            explanation:
              "Out-of-town centres need large, cheap sites beside motorways, found in the rural–urban fringe. The CBD has shops too, but land there is too expensive for huge car parks.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p2-q07",
            question: "How does Canada define an urban 'population centre'?",
            options: [
              "Any place with a cathedral",
              "At least 50,000 people",
              "Any place with a railway station",
              "At least 1,000 people AND a density of at least 400 people per km²",
            ],
            answerIndex: 3,
            hint: "Canada combines two criteria.",
            explanation:
              "Canada uses both population (1,000+) and density (400+ per km²). 50,000 is closer to Japan's rule for a city.",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-mcq-p2-q08",
            question: "Which criterion is part of India's definition of a census town?",
            options: [
              "It must have an airport",
              "At least 75% of working men must have non-farming jobs",
              "It must be granted a royal charter",
              "It must be on the coast",
            ],
            answerIndex: 1,
            hint: "India looks at what people DO for work (the function of the place).",
            explanation:
              "India's census towns need 5,000+ people, a density of 400 per km² and at least 75% of male workers outside agriculture. Royal charters are a UK idea.",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-mcq-p2-q09",
            question: "A country's urban population rose from 40 million to 50 million. What is the percentage increase?",
            options: ["10%", "20%", "25%", "125%"],
            answerIndex: 2,
            hint: "(new − old) ÷ old × 100.",
            explanation:
              "(50 − 40) ÷ 40 × 100 = 25%. 20% comes from wrongly dividing by the NEW value (10 ÷ 50).",
            guideRef: "urbanisation",
          },
          {
            id: "city-mcq-p2-q10",
            question: "Which world region had the most megacities in 2018?",
            options: ["Asia", "Africa", "Latin America", "Europe"],
            answerIndex: 0,
            hint: "Think of Tokyo, Delhi, Shanghai, Dhaka and Mumbai.",
            explanation:
              "About 20 of the 33 megacities were in Asia. Latin America came second with about 6, and Africa had 3.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p2-q11",
            question: "'Most megacities are in the Northern Hemisphere.' Which city is an ANOMALY to this trend?",
            options: ["Tokyo", "Delhi", "São Paulo", "Cairo"],
            answerIndex: 2,
            hint: "Which one is south of the Equator?",
            explanation:
              "São Paulo in Brazil is in the Southern Hemisphere, so it does not fit the trend. Cairo is in Africa but still north of the Equator.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p2-q12",
            question: "Singapore's population has grown a lot since 1960, but its urbanisation rate has not changed. Why?",
            options: [
              "Its population has actually fallen",
              "Most of its people live on farms",
              "Urbanisation only counts people who were born abroad",
              "It is already 100% urban, so the share cannot rise any further",
            ],
            answerIndex: 3,
            hint: "Can a percentage go above 100?",
            explanation:
              "Singapore is a 100% urban city-state; growth adds people (urban growth) but the share stays at 100%. Its population has risen, not fallen — from about 1.6 million to about 6 million.",
            guideRef: "urbanisation",
          },
          {
            id: "city-mcq-p2-q13",
            question: "When did most high-income countries such as the UK urbanise?",
            options: [
              "Before the year 1000",
              "During the Industrial Revolution in the 1800s",
              "Only since 2000",
              "They have not urbanised yet",
            ],
            answerIndex: 1,
            hint: "Factories pulled workers from farms.",
            explanation:
              "The UK urbanised rapidly in the 1800s as factories grew. Rapid urbanisation since 2000 describes LICs and NEEs in Africa and Asia instead.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-mcq-p2-q14",
            question: "Which feature helps make a city a WORLD city?",
            options: [
              "A major stock exchange and the headquarters of many TNCs",
              "A population of over 10 million",
              "A large area of farmland inside its boundary",
              "Being the capital of its country",
            ],
            answerIndex: 0,
            hint: "World cities are defined by influence, not size.",
            explanation:
              "Finance and TNC headquarters give global influence. Over 10 million people makes a megacity, not a world city — Singapore has about 6 million but is a world city.",
            guideRef: "world-cities",
          },
          {
            id: "city-mcq-p2-q15",
            question: "According to UN-Habitat, a slum household lacks one or more of five things. Which is one of them?",
            options: [
              "A private car",
              "A television",
              "Security of tenure (the legal right to stay)",
              "A garden",
            ],
            answerIndex: 2,
            hint: "The five are water, sanitation, space, durable housing and…",
            explanation:
              "The five are clean water, sanitation, sufficient living space, durable housing and security of tenure. Cars, TVs and gardens are not part of the definition.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-mcq-p2-q16",
            question: "Why are informal settlements often built on steep hillsides or river banks?",
            options: [
              "Because the views are better",
              "Because the government plans them there",
              "Because the soil is good for building foundations",
              "Because the land is unwanted, so it is free and people are less likely to be evicted",
            ],
            answerIndex: 3,
            hint: "Why would nobody else want this land?",
            explanation:
              "Hazardous land is unwanted by developers, so migrants can build there without being moved on. It is not planned — informal settlements are, by definition, built without permission.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-mcq-p2-q17",
            question: "What is the MAIN cause of the urban heat island?",
            options: [
              "Cities being closer to the Equator than the countryside",
              "Concrete and tarmac absorbing heat by day and releasing it at night, plus waste heat from vehicles and air-conditioners",
              "Rivers in cities warming the air",
              "Cities having more clouds than the countryside",
            ],
            answerIndex: 1,
            hint: "Compare a car park and a forest on a sunny day.",
            explanation:
              "Built surfaces store heat and release it slowly, and machines add waste heat. A city and its countryside are at the same latitude, so the Equator cannot explain the difference.",
            guideRef: "city-life",
          },
          {
            id: "city-mcq-p2-q18",
            question: "What is counter-urbanisation?",
            options: [
              "The movement of people out of big cities to smaller towns and rural areas",
              "The movement of people from rural areas into cities",
              "The building of skyscrapers in the CBD",
              "The demolition of informal settlements",
            ],
            answerIndex: 0,
            hint: "'Counter' means against or opposite.",
            explanation:
              "Counter-urbanisation is the opposite of rural–urban migration: people leave big cities for smaller places, as happens in some HICs. Moving into cities is rural–urban migration.",
            guideRef: "urbanisation",
          },
          {
            id: "city-mcq-p2-q19",
            question: "Roughly how many people worldwide live in slums or informal settlements?",
            options: ["11 million", "110 million", "1.1 billion", "5 billion"],
            answerIndex: 2,
            hint: "About 1 in 4 of the world's city dwellers.",
            explanation:
              "UN-Habitat estimates about 1.1 billion. 5 billion is more than the whole world's urban population (about 4.6 billion), so it cannot be right.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-mcq-p2-q20",
            question: "By 1975 there were three megacities: Tokyo, New York and which other?",
            options: ["London", "Paris", "Shanghai", "Mexico City"],
            answerIndex: 3,
            hint: "The first megacity outside a high-income country.",
            explanation:
              "Mexico City joined Tokyo and New York by 1975. London was once the world's biggest city, but it never reached 10 million in the UN's agglomeration figures.",
            guideRef: "megacities",
          },
        ],
      },
      {
        id: "city-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "city-mcq-p3-q01",
            question: "A country has 12 million people, of whom 9 million live in urban areas. What percentage of the population is urban?",
            options: ["25%", "9%", "75%", "133%"],
            answerIndex: 2,
            hint: "Urban people ÷ total people × 100.",
            explanation:
              "9 ÷ 12 × 100 = 75%. 25% is the RURAL share (3 million ÷ 12 million); 133% comes from dividing the wrong way round.",
            guideRef: "urbanisation",
          },
          {
            id: "city-mcq-p3-q02",
            question: "A city has a birth rate of 30 per 1,000 and a death rate of 8 per 1,000. What is its rate of natural increase?",
            options: ["38 per 1,000", "22 per 1,000", "3.75 per 1,000", "8 per 1,000"],
            answerIndex: 1,
            hint: "Natural increase = birth rate − death rate.",
            explanation:
              "30 − 8 = 22 per 1,000 (2.2%). Adding them (38) is a common slip; dividing (3.75) is not how natural increase works.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-mcq-p3-q03",
            question: "If Japan changed its rule for 'urban' from about 50,000 people to Denmark's 200 people, what would happen to Japan's urban percentage?",
            options: [
              "It would rise, because many small settlements would now be counted as urban",
              "It would fall, because fewer places would count as urban",
              "It would stay exactly the same",
              "It would become 0%",
            ],
            answerIndex: 0,
            hint: "A lower threshold lets more places in.",
            explanation:
              "Lowering the threshold reclassifies small towns and villages as urban, so the percentage rises — even though nobody moved. This shows why international comparisons need care. It would not fall: a lower bar includes more places, not fewer.",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-mcq-p3-q04",
            question: "How does Hoyt's sector model (1939) differ from the Burgess model?",
            options: [
              "It says cities have no CBD",
              "It says cities are perfect squares",
              "It says the richest people always live in the CBD",
              "It says land uses form wedges (sectors) stretching out along transport routes, not just rings",
            ],
            answerIndex: 3,
            hint: "Think about what a railway line or river does to a ring pattern.",
            explanation:
              "Hoyt noticed that industry and housing types extend outwards in wedges along transport routes and rivers. Both models still have a CBD at the centre.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p3-q05",
            question: "Which statement shows that Singapore does NOT fit the Burgess model neatly?",
            options: [
              "Raffles Place has tall office towers",
              "Land is very expensive in the Downtown Core",
              "Planned regional centres like Tampines and Jurong East provide jobs and shops away from the CBD",
              "Many offices are close to Marina Bay",
            ],
            answerIndex: 2,
            hint: "Burgess assumed one centre. Does Singapore have just one?",
            explanation:
              "Planned regional centres create several centres of jobs and shopping, which a single-centre ring model does not show. Tall, expensive offices at Raffles Place actually FIT the model's CBD.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p3-q06",
            question: "Which pair are both African megacities?",
            options: ["Nairobi and Lagos", "Cairo and Lagos", "Cairo and Johannesburg", "Accra and Kinshasa"],
            answerIndex: 1,
            hint: "One is on the Nile, one is in West Africa on the Atlantic coast.",
            explanation:
              "Cairo (about 20–22 million) and Lagos (20 million+ metro) are both megacities. Nairobi is a big city with about 5 million people — well below 10 million.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p3-q07",
            question: "Which evidence best supports the statement 'megacity growth has shifted from high-income countries to Asia and Africa'?",
            options: [
              "In 1950 both megacities (New York and Tokyo) were in HICs; by 2018 most of the 33 were in Asia, Africa and Latin America",
              "Tokyo has been the world's largest city for decades",
              "London has about 9 million people",
              "Singapore is 100% urban",
            ],
            answerIndex: 0,
            hint: "You need a comparison over TIME and PLACE.",
            explanation:
              "Comparing 1950 (both in HICs) with 2018 (mostly in Asia, Africa and Latin America) shows the shift. Tokyo being largest shows the opposite — an HIC city at the top.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p3-q08",
            question: "Why are so many megacities on coasts or major rivers?",
            options: [
              "Because sea air keeps them cool",
              "Because coastal land is always flat and safe from floods",
              "Because nobody lives inland",
              "Because ports allowed trade and industry to grow, attracting workers",
            ],
            answerIndex: 3,
            hint: "Think of Shanghai, Mumbai, New York and Lagos.",
            explanation:
              "Ports brought trade, industry and jobs, which pulled in migrants. Coastal land is often NOT safe from floods — many coastal megacities face sea-level rise.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p3-q09",
            question: "Why has Tokyo's population stopped growing?",
            options: [
              "A war has emptied the city",
              "All migrants are banned",
              "Japan has an ageing population and a low birth rate",
              "It has run out of buildings",
            ],
            answerIndex: 2,
            hint: "Think about natural increase in Japan.",
            explanation:
              "Japan's low birth rate and ageing population mean deaths now outnumber births nationally, so Tokyo has peaked. Migration into Tokyo has not been banned — people still move there from the rest of Japan.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p3-q10",
            question: "Why do different sources give different answers for 'the world's largest city'?",
            options: [
              "Because cities change size every hour",
              "Because they draw city boundaries differently (city proper, urban area or metro region)",
              "Because some cities refuse to be counted",
              "Because the UN only counts capital cities",
            ],
            answerIndex: 1,
            hint: "Tokyo can be 14 million or 37 million people.",
            explanation:
              "The figure depends on where the boundary is drawn — a 2025 UN report using a wider method even put Jakarta first. The UN counts many non-capital cities, such as Shanghai and Mumbai.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p3-q11",
            question: "What is a 'favela'?",
            options: [
              "An informal settlement in Brazil",
              "A planned new town in Singapore",
              "A business park on the rural–urban fringe",
              "A type of skyscraper",
            ],
            answerIndex: 0,
            hint: "Rocinha in Rio de Janeiro is a famous one.",
            explanation:
              "Favela is the Brazilian name for an informal settlement, such as Rocinha in Rio or Paraisópolis in São Paulo. Singapore's planned new towns are HDB towns, the opposite of informal.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-mcq-p3-q12",
            question: "What is one main advantage of upgrading an informal settlement 'in place' rather than demolishing it?",
            options: [
              "It is always much faster",
              "It removes all hazards immediately",
              "It means nobody needs water or toilets",
              "Residents keep their homes, community and nearby jobs",
            ],
            answerIndex: 3,
            hint: "Think about a potter whose workshop is her home.",
            explanation:
              "Upgrading adds water, sanitation and legal tenure while people keep their livelihoods and networks. It is usually slower, not faster, than bulldozing.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-mcq-p3-q13",
            question: "Which of these is a job in the INFORMAL economy?",
            options: [
              "A teacher in a government school",
              "A bank clerk with a contract",
              "A street-food seller who pays no tax and has no contract",
              "An airport security officer",
            ],
            answerIndex: 2,
            hint: "Informal = not officially recorded, taxed or protected.",
            explanation:
              "Street selling without a contract or tax is informal work. A bank clerk with a contract is formal employment, with legal protection.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-mcq-p3-q14",
            question: "Roughly what share of Mumbai's population is estimated to live in slums or informal settlements?",
            options: ["About 1 in 100", "About 1 in 10", "About 4 in 10", "About 9 in 10"],
            answerIndex: 2,
            hint: "It is a large minority, not a majority.",
            explanation:
              "Estimates suggest around 40% (4 in 10) of Mumbai's people live in slums. 9 in 10 greatly overstates it — most of Mumbai is formal housing.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-mcq-p3-q15",
            question: "Using an estimate of 700,000 people living on 2.1 km², what is Dharavi's approximate population density?",
            options: ["About 333,000 per km²", "About 33,000 per km²", "About 3,300 per km²", "About 1.5 million per km²"],
            answerIndex: 0,
            hint: "700,000 ÷ 2.1.",
            explanation:
              "700,000 ÷ 2.1 ≈ 333,000 people per km² — about 40 times Singapore's density. 33,000 is ten times too small, a decimal-place slip.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-mcq-p3-q16",
            question: "Which two cities are usually ranked as the most globally connected 'Alpha++' world cities?",
            options: ["Tokyo and Shanghai", "Singapore and Hong Kong", "Paris and Dubai", "London and New York"],
            answerIndex: 3,
            hint: "One is on the Thames, one on the Hudson.",
            explanation:
              "London and New York top the GaWC world-city ranking. Singapore and Hong Kong are in the next tier (Alpha+), very important but just below.",
            guideRef: "world-cities",
          },
          {
            id: "city-mcq-p3-q17",
            question: "Why do few people live in the CBD?",
            options: [
              "Because it is the coldest part of the city",
              "Because offices and shops can afford the very high land prices, outbidding housing",
              "Because it is too far from jobs",
              "Because it is on the rural–urban fringe",
            ],
            answerIndex: 1,
            hint: "Who can pay the most for central land?",
            explanation:
              "Businesses earn the most from central, accessible sites, so they outbid housing. It is not far from jobs — the CBD is where many jobs ARE.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p3-q18",
            question: "Which is a typical land-use conflict on the rural–urban fringe?",
            options: [
              "Building new housing estates on greenfield farmland or green belt land",
              "Replacing department stores with offices in the CBD",
              "Converting inner-city warehouses into flats",
              "Adding extra floors to skyscrapers",
            ],
            answerIndex: 0,
            hint: "The fringe is where city and countryside meet.",
            explanation:
              "Developers want cheap greenfield land at the edge, while others want to protect farmland and countryside. Converting warehouses is inner-city regeneration on brownfield land.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p3-q19",
            question: "In many fast-growing African and Asian cities, roughly how much of the growth comes from natural increase?",
            options: ["Almost none", "About half or more", "Exactly 10%", "All of it"],
            answerIndex: 1,
            hint: "Migration is not the only story.",
            explanation:
              "In many such cities, natural increase causes around half or more of the growth, because the population is young. 'Almost none' is a common misconception that only migration matters.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-mcq-p3-q20",
            question: "Which of these is NOT needed for a city to be a world city?",
            options: [
              "A major international airport",
              "Headquarters of transnational corporations",
              "A population of over 10 million",
              "A major stock exchange or financial centre",
            ],
            answerIndex: 2,
            hint: "Remember Singapore's population.",
            explanation:
              "World-city status is about connections, not size: Singapore has about 6 million people. Airports, TNC HQs and finance are all typical world-city features.",
            guideRef: "world-cities",
          },
        ],
      },
      {
        id: "city-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "city-mcq-p4-q01",
            question: "Country X was 30% urban in 1990 and 45% urban in 2020. By what PERCENTAGE did its urban share increase?",
            options: ["15%", "50%", "45%", "150%"],
            answerIndex: 1,
            hint: "Change ÷ original × 100. Careful — 15 is the change in percentage POINTS.",
            explanation:
              "(45 − 30) ÷ 30 × 100 = 50%. The share rose by 15 percentage points, which is a common trap answer, but the percentage increase is 50%.",
            guideRef: "urbanisation",
          },
          {
            id: "city-mcq-p4-q02",
            question: "A student writes: 'Most megacities are in Asia, e.g. Delhi has about 30 million people.' What should the student add to complete a TEA description?",
            options: [
              "An explanation of why Asia has high birth rates",
              "A second example from Asia, such as Shanghai",
              "The history of Delhi",
              "An anomaly, such as Lima or Buenos Aires in the Southern Hemisphere",
            ],
            answerIndex: 3,
            hint: "They have T and E. What is missing?",
            explanation:
              "The student has a Trend and an Example, so they need an Anomaly — an exception like Lima. Adding an explanation would not earn description marks and wastes time.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p4-q03",
            question: "A geographer claims 'Lagos is growing mainly because of migration'. Which data would BEST test this claim?",
            options: [
              "Numbers of births, deaths and migrants arriving in Lagos each year",
              "The height of buildings in Lagos",
              "The number of megacities in Asia",
              "Lagos's average temperature",
            ],
            answerIndex: 0,
            hint: "You need to compare the two causes of growth.",
            explanation:
              "Comparing natural increase (births − deaths) with net migration shows which contributes more. Building heights tell you about land use, not the cause of growth.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-mcq-p4-q04",
            question: "You travel from Bluewater shopping centre into the City of London. Which order of zones do you pass through?",
            options: [
              "CBD → inner city → suburbs → rural–urban fringe",
              "Inner city → rural–urban fringe → CBD → suburbs",
              "Rural–urban fringe → outer suburbs → inner suburbs → inner city → CBD",
              "Suburbs → CBD → inner city → rural–urban fringe",
            ],
            answerIndex: 2,
            hint: "Bluewater is outside the M25; the City is the Square Mile.",
            explanation:
              "Travelling inwards you go fringe → outer suburbs → inner suburbs → inner city → CBD. Option A is the right zones but in the outward direction — the wrong way for this journey.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p4-q05",
            question: "Why is the UK's urbanisation now very slow?",
            options: [
              "Because UK cities are shrinking fast",
              "Because the UK is already about 84% urban, so there are few rural people left to move",
              "Because migration within the UK is illegal",
              "Because the UK has no cities over 1 million",
            ],
            answerIndex: 1,
            hint: "Think about how close to 100% it already is.",
            explanation:
              "With about 84% already urban, the share can only rise a little more. UK cities like London are still growing, not shrinking fast — so urban growth continues even though urbanisation is slow.",
            guideRef: "urbanisation",
          },
          {
            id: "city-mcq-p4-q06",
            question: "Which statement about the number of megacities is most accurate?",
            options: [
              "There are exactly 10 megacities and the number never changes",
              "There were more megacities in 1950 than today",
              "All megacities are in Europe",
              "There were about 33 in 2018 and more today, but the exact number depends on how boundaries are drawn",
            ],
            answerIndex: 3,
            hint: "Good geographers hedge with 'about'.",
            explanation:
              "The UN counted 33 in 2018 and projects about 43 by 2030; totals vary by method. There were only 2 in 1950, so the number has risen, not fallen.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p4-q07",
            question: "Which action would do MOST to reduce Singapore's urban heat island?",
            options: [
              "Planting more trees and adding green roofs and walls",
              "Building more car parks",
              "Replacing parks with dark tarmac",
              "Installing more air-conditioners outdoors",
            ],
            answerIndex: 0,
            hint: "What cools a surface naturally?",
            explanation:
              "Trees shade surfaces and cool the air by evapotranspiration; green roofs absorb less heat than concrete. More air-conditioners would pump out MORE waste heat into the streets.",
            guideRef: "city-life",
          },
          {
            id: "city-mcq-p4-q08",
            question: "Which list ranks countries from MOST to LEAST urbanised?",
            options: [
              "India > UK > Japan > Singapore",
              "UK > Singapore > India > Japan",
              "Singapore > Japan > UK > India",
              "Japan > India > Singapore > UK",
            ],
            answerIndex: 2,
            hint: "Singapore 100%, Japan about 92%, UK about 84%, India about 36%.",
            explanation:
              "Singapore (100%) > Japan (~92%) > UK (~84%) > India (~36%). India has the largest number of people but one of the lowest urban shares here.",
            guideRef: "urbanisation",
          },
          {
            id: "city-mcq-p4-q09",
            question: "Which is the best evidence that some pull factors are 'perceived' rather than real?",
            options: [
              "Cities have more hospitals than villages",
              "Many migrants end up in low-paid informal jobs and live in slums",
              "Cities have universities",
              "City wages are higher on average",
            ],
            answerIndex: 1,
            hint: "Perceived = what people expect, which may not come true.",
            explanation:
              "If many migrants end up in informal work and slums, their hopes of a better life were not fully met. Higher average city wages are real, which is why that option does not show a perceived factor.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-mcq-p4-q10",
            question: "Why is Delhi expected to overtake Tokyo as the world's largest city?",
            options: [
              "Delhi is increasing its area by reclaiming land from the sea",
              "Tokyo is being moved to a new site",
              "Delhi is the capital of a high-income country",
              "India has high natural increase and rural–urban migration, while Japan's population is ageing and shrinking",
            ],
            answerIndex: 3,
            hint: "Compare both causes of growth in each country.",
            explanation:
              "Delhi gains people through both natural increase and migration, while Tokyo has peaked because of Japan's low birth rate. Delhi is inland, so it cannot reclaim land from the sea, and India is an NEE, not an HIC.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p4-q11",
            question: "Which settlement is a UK city but would NOT count as a city under Japan's usual 50,000-person rule?",
            options: [
              "St Davids, Wales (under 2,000 people)",
              "Manchester",
              "Birmingham",
              "Glasgow",
            ],
            answerIndex: 0,
            hint: "Which one is famous for being tiny?",
            explanation:
              "St Davids has fewer than 2,000 people, far below 50,000, yet holds UK city status. Manchester, Birmingham and Glasgow all have hundreds of thousands of people, so they pass both definitions.",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-mcq-p4-q12",
            question: "Which city problem harms BOTH the environment and people's health most directly?",
            options: [
              "High house prices",
              "Long queues at shops",
              "Air pollution, such as Delhi's winter smog",
              "A shortage of university places",
            ],
            answerIndex: 2,
            hint: "Think about what you breathe.",
            explanation:
              "Air pollution damages ecosystems and causes breathing and heart diseases. High house prices are a serious social problem, but they do not directly harm the environment.",
            guideRef: "city-life",
          },
          {
            id: "city-mcq-p4-q13",
            question: "Building new flats on the site of London's old Docklands is an example of using what type of land?",
            options: ["Greenfield", "Brownfield", "Green belt", "Farmland"],
            answerIndex: 1,
            hint: "It has been built on before.",
            explanation:
              "Brownfield land has been used before (here, old docks). Greenfield land has never been built on — typical of the rural–urban fringe.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p4-q14",
            question: "Estimates of Kibera's population range from about 170,000 to over 700,000. What is the best explanation?",
            options: [
              "Kibera's population changes by 500,000 every day",
              "Nobody lives in Kibera",
              "Informal settlements are hard to count: homes are unofficial, people move often, and boundaries differ",
              "Kenya does not hold a census",
            ],
            answerIndex: 2,
            hint: "Think about counting homes that are not on any official map.",
            explanation:
              "Unregistered homes, frequent moves and different boundaries make counting hard — which is partly why young residents created Map Kibera in 2009. Kenya does hold censuses; the 2009 census gave the lower figure.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-mcq-p4-q15",
            question: "The UN counted 33 megacities in 2018 and projects about 43 by 2030. What is the approximate percentage increase?",
            options: ["10%", "30%", "43%", "76%"],
            answerIndex: 1,
            hint: "(43 − 33) ÷ 33 × 100.",
            explanation:
              "10 ÷ 33 × 100 ≈ 30%. 10% is just the change in number (10 cities), not the percentage change.",
            guideRef: "megacities",
          },
          {
            id: "city-mcq-p4-q16",
            question: "Which statement is TRUE?",
            options: [
              "Tokyo is both a megacity and a world city",
              "Every megacity is a world city",
              "No world city has fewer than 10 million people",
              "Singapore is a megacity",
            ],
            answerIndex: 0,
            hint: "Some cities are both; some are one but not the other.",
            explanation:
              "Tokyo has about 37 million people and huge global influence, so it is both. Singapore (about 6 million) shows world cities can be smaller than 10 million.",
            guideRef: "world-cities",
          },
          {
            id: "city-mcq-p4-q17",
            question: "Which push factor in Bangladesh is most closely linked to climate change?",
            options: [
              "Better schools in Dhaka",
              "Garment factory jobs",
              "Relatives living in the city",
              "River-bank erosion, flooding and stronger cyclones in rural and coastal areas",
            ],
            answerIndex: 3,
            hint: "It must be a PUSH factor and linked to weather or sea level.",
            explanation:
              "Floods, erosion and cyclones (made worse by climate change and sea-level rise) destroy rural homes and farmland. Schools, jobs and relatives in Dhaka are pull factors.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-mcq-p4-q18",
            question: "What is the main purpose of the green belt around London?",
            options: [
              "To grow food for London",
              "To provide sites for new airports",
              "To limit urban sprawl into the countryside",
              "To house informal settlements",
            ],
            answerIndex: 2,
            hint: "It is a protected ring of land around the city.",
            explanation:
              "The green belt restricts building to stop the city sprawling outwards. Some farming happens there, but food supply is not its purpose.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-mcq-p4-q19",
            question: "Why is the urban heat island usually strongest at NIGHT?",
            options: [
              "Because the sun is hotter at night",
              "Because buildings and roads release heat they stored during the day, while the countryside cools quickly",
              "Because cities have no wind",
              "Because people turn off their air-conditioners at night",
            ],
            answerIndex: 1,
            hint: "Think about touching a concrete wall after sunset.",
            explanation:
              "Concrete and tarmac slowly release stored heat after dark, while fields and forests cool fast. Turning off air-conditioners would REDUCE waste heat, so it cannot explain a stronger effect.",
            guideRef: "city-life",
          },
          {
            id: "city-mcq-p4-q20",
            question: "Which of these countries has the LOWEST percentage of its people living in urban areas?",
            options: ["Brazil", "China", "Nigeria", "Burundi"],
            answerIndex: 3,
            hint: "A small, mostly rural country in East Africa.",
            explanation:
              "Burundi is only about 14% urban. Nigeria is about 54% urban and Brazil about 88%, both far higher.",
            guideRef: "urbanisation",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "city-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "city-qa-p1-q01",
            question: "What is a megacity? Give one example.",
            marks: 2,
            hint: "State the population threshold, then name one.",
            modelAnswer: "A megacity is an urban area with a population of more than 10 million people, for example Tokyo (about 37 million).",
            markScheme: [
              { point: "More than 10 million people", keywords: ["10 million", "ten million", "10,000,000", "10m"] },
              { point: "Named megacity", keywords: ["tokyo", "delhi", "shanghai", "dhaka", "lagos", "mumbai"] },
            ],
            commonError: "Giving a city such as London or Singapore, which are below 10 million in most measures.",
            guideRef: "megacities",
          },
          {
            id: "city-qa-p1-q02",
            question: "Define urbanisation.",
            marks: 2,
            hint: "It is a share, not a number, and it is about a change.",
            modelAnswer: "Urbanisation is the increase in the proportion (percentage) of a population living in urban areas such as towns and cities.",
            markScheme: [
              { point: "An increase / growth over time", keywords: ["increase", "rise", "grow", "more"] },
              { point: "In the proportion/percentage living in urban areas", keywords: ["proportion", "percentage", "share", "%"] },
            ],
            commonError: "Writing 'cities getting bigger' — that is urban growth.",
            guideRef: "urbanisation",
          },
          {
            id: "city-qa-p1-q03",
            question: "Give two different ways that countries decide whether a settlement is a city or urban area.",
            marks: 2,
            hint: "Think of Denmark, India and the UK.",
            modelAnswer: "One way is a population threshold — for example, Denmark counts places with 200 people as urban. Another is official status — in the UK, city status is granted by the monarch. (Density and the types of jobs people do are also used.)",
            markScheme: [
              { point: "First criterion (population threshold or density)", keywords: ["population", "number of people", "threshold", "density", "per km"] },
              { point: "Second, different criterion (function/jobs or official status)", keywords: ["job", "function", "status", "monarch", "royal", "cathedral"] },
            ],
            commonError: "Giving the same criterion twice (e.g. two different population numbers).",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-qa-p1-q04",
            question: "Singapore has about 6,000,000 people and an area of about 735 km². Calculate its population density. Show your working.",
            marks: 2,
            hint: "Density = population ÷ area.",
            modelAnswer: "6,000,000 ÷ 735 = about 8,163 people per km² (roughly 8,200 per km²).",
            markScheme: [
              { point: "Correct method: population divided by area", keywords: ["÷", "divide", "/735", "/ 735", "6,000,000 / 735", "6000000/735"] },
              { point: "Correct answer with units (about 8,160–8,200 per km²)", keywords: ["8,163", "8163", "8,16", "8,200", "8200", "8,2"] },
            ],
            commonError: "Multiplying instead of dividing, or leaving out the units (people per km²).",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-qa-p1-q05",
            question: "Describe two positive characteristics of living in a city.",
            marks: 4,
            hint: "Two benefits, each with a little detail or example.",
            modelAnswer: "First, cities offer more jobs and higher wages, for example in offices, ports and factories, so people can earn more than in rural areas. Second, cities have better services such as hospitals, universities and public transport — Singapore's MRT lets people travel quickly and cheaply.",
            markScheme: [
              { point: "First positive identified (e.g. jobs)", keywords: ["job", "employment", "work", "wage"] },
              { point: "First positive developed with detail/example", keywords: ["higher", "office", "factory", "earn", "port"] },
              { point: "Second positive identified (e.g. services/culture/transport)", keywords: ["hospital", "school", "universit", "service", "culture", "transport"] },
              { point: "Second positive developed with detail/example", keywords: ["singapore", "mrt", "museum", "healthcare", "education", "quick"] },
            ],
            commonError: "Listing four one-word benefits without describing any of them.",
            guideRef: "city-life",
          },
          {
            id: "city-qa-p1-q06",
            question: "Describe two negative characteristics of cities.",
            marks: 4,
            hint: "Think about crowding: roads, air, homes and inequality.",
            modelAnswer: "One problem is traffic congestion: so many vehicles use the roads that journeys become slow, and exhaust fumes cause air pollution, as in Delhi's winter smog. Another problem is high housing costs: land is scarce, so rents and house prices are high and poorer people may be forced into overcrowded housing or slums.",
            markScheme: [
              { point: "First negative identified", keywords: ["congestion", "traffic", "pollution", "smog", "crime", "noise"] },
              { point: "First negative developed", keywords: ["slow", "fumes", "health", "delhi", "breath", "jam"] },
              { point: "Second negative identified", keywords: ["housing cost", "house price", "rent", "expensive", "inequality", "heat island"] },
              { point: "Second negative developed", keywords: ["scarce", "overcrowd", "poor", "gap", "warmer", "afford"] },
            ],
            commonError: "Describing problems with no detail, e.g. just 'pollution' and 'traffic'.",
            guideRef: "city-life",
          },
          {
            id: "city-qa-p1-q07",
            question: "What is the urban heat island effect? Explain one cause.",
            marks: 3,
            hint: "Define it, then give a 'because…'.",
            modelAnswer: "The urban heat island is when a city is warmer than the surrounding countryside, especially at night. One cause is that concrete, tarmac and buildings absorb heat from the sun during the day and release it slowly at night, keeping the city warm.",
            markScheme: [
              { point: "City warmer than surrounding rural area", keywords: ["warmer", "hotter", "higher temperature"] },
              { point: "Comparison with countryside / especially at night", keywords: ["countryside", "rural", "surround", "night"] },
              { point: "Explains a cause", keywords: ["concrete", "tarmac", "absorb", "air-con", "vehicle", "waste heat"] },
            ],
            commonError: "Thinking it has something to do with real islands, or giving a cause without saying HOW it adds heat.",
            guideRef: "city-life",
          },
          {
            id: "city-qa-p1-q08",
            question: "Name, in order from the centre outwards, four land-use zones of a city based on the Burgess model.",
            marks: 4,
            hint: "Can I See Rural Fields?",
            modelAnswer: "1. Central Business District (CBD); 2. Inner city (zone in transition); 3. Suburbs (inner and outer); 4. Rural–urban fringe (commuter zone).",
            markScheme: [
              { point: "CBD", keywords: ["cbd", "central business", "business district"] },
              { point: "Inner city / zone in transition", keywords: ["inner city", "transition", "inner-city"] },
              { point: "Suburbs", keywords: ["suburb", "residential", "commuter homes"] },
              { point: "Rural–urban fringe / commuter zone", keywords: ["fringe", "commuter", "rural-urban", "rural–urban"] },
            ],
            commonError: "Putting the suburbs before the inner city, or forgetting the rural–urban fringe.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-qa-p1-q09",
            question: "Give two push factors and two pull factors that cause rural–urban migration.",
            marks: 4,
            hint: "Push = about the countryside; pull = about the city.",
            modelAnswer: "Push factors: lack of jobs in the countryside; droughts or floods destroying crops. Pull factors: better-paid jobs in city factories and offices; better schools and hospitals in the city.",
            markScheme: [
              { point: "First push factor", keywords: ["lack of jobs", "few jobs", "unemployment", "low income", "poverty"] },
              { point: "Second push factor", keywords: ["drought", "flood", "crop", "mechanis", "conflict", "cyclone"] },
              { point: "First pull factor", keywords: ["better job", "more jobs", "factory", "wage", "office", "better-paid"] },
              { point: "Second pull factor", keywords: ["hospital", "school", "universit", "healthcare", "education", "family"] },
            ],
            commonError: "Mixing up push and pull, e.g. listing 'jobs in the city' as a push factor.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-qa-p1-q10",
            question: "A city has a birth rate of 35 per 1,000 and a death rate of 10 per 1,000. Calculate the natural increase and say what it means for the city.",
            marks: 3,
            hint: "Birth rate − death rate.",
            modelAnswer: "35 − 10 = 25 per 1,000 (2.5%). This means that, even without migration, the city grows by about 25 people for every 1,000 each year because there are more births than deaths.",
            markScheme: [
              { point: "Method: birth rate minus death rate", keywords: ["35 - 10", "35 − 10", "35-10", "minus", "subtract"] },
              { point: "Correct answer 25 per 1,000 / 2.5%", keywords: ["25", "2.5", "twenty-five"] },
              { point: "Meaning: population grows because births exceed deaths", keywords: ["more births", "grow", "increase", "without migration"] },
            ],
            commonError: "Adding the rates together (45) instead of subtracting.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-qa-p1-q11",
            question: "Name three megacities, each in a different continent.",
            marks: 3,
            hint: "Try Asia, Africa and South America.",
            modelAnswer: "Tokyo (Asia), Lagos (Africa) and São Paulo (South America).",
            markScheme: [
              { point: "Asian megacity", keywords: ["tokyo", "delhi", "shanghai", "dhaka", "mumbai", "jakarta"] },
              { point: "African megacity", keywords: ["lagos", "cairo", "kinshasa"] },
              { point: "Megacity in a third continent", keywords: ["são paulo", "sao paulo", "mexico city", "new york", "buenos aires", "moscow"] },
            ],
            commonError: "Naming three megacities all in Asia, or including non-megacities such as Nairobi or Singapore.",
            guideRef: "megacities",
          },
          {
            id: "city-qa-p1-q12",
            question: "What is a world city? Name two examples.",
            marks: 3,
            hint: "Think influence, not size.",
            modelAnswer: "A world city is a city with major influence on the global economy, politics and culture, acting as a hub for finance, TNC headquarters and transport. Examples: London and New York (Singapore is another).",
            markScheme: [
              { point: "Global influence / connections", keywords: ["influence", "global", "connect", "hub", "power"] },
              { point: "First named world city", keywords: ["london", "new york", "singapore", "tokyo", "paris", "hong kong"] },
              { point: "Second named world city", keywords: ["london", "new york", "singapore", "tokyo", "paris", "hong kong"] },
            ],
            commonError: "Defining it as 'a very big city' — that describes a megacity.",
            guideRef: "world-cities",
          },
          {
            id: "city-qa-p1-q13",
            question: "Describe four typical features of an informal settlement.",
            marks: 4,
            hint: "Think about homes, services, land and legal rights.",
            modelAnswer: "Homes are built from scrap materials such as corrugated iron, wood and plastic. There is little clean water or sanitation — many people share taps and toilets, and drains are open. Houses are overcrowded and close together. Residents usually have no legal right to the land, so they can be evicted, and settlements are often on hazardous land such as steep slopes or river banks.",
            markScheme: [
              { point: "Makeshift building materials", keywords: ["scrap", "corrugated", "tin", "wood", "plastic", "makeshift"] },
              { point: "Lack of water/sanitation", keywords: ["water", "toilet", "sanitation", "drain", "sewage"] },
              { point: "Overcrowding / high density", keywords: ["overcrowd", "crowded", "dense", "close together", "per room"] },
              { point: "No legal tenure or hazardous location", keywords: ["illegal", "tenure", "evict", "permission", "slope", "flood"] },
            ],
            commonError: "Writing only about poverty in general instead of describing physical features of the settlement.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-qa-p1-q14",
            question: "Study the data. Percentage of the world's population living in urban areas — 1950: 30%; 2007: 50%; 2023: 57%; 2050 (projected): 68%. Describe the trend shown.",
            marks: 3,
            hint: "Overall direction, then quote figures, then a key milestone.",
            modelAnswer: "The percentage of people living in urban areas is increasing steadily. It rose from 30% in 1950 to 57% in 2023, and is projected to reach 68% by 2050. A key milestone was 2007, when more than half of the world's people became urban for the first time.",
            markScheme: [
              { point: "Overall trend: increasing", keywords: ["increas", "rising", "rise", "grow", "upward"] },
              { point: "Quotes data from the table", keywords: ["30%", "57%", "68%", "1950", "2050"] },
              { point: "Notes milestone or rate (e.g. 50% in 2007, or 2 in 3 by 2050)", keywords: ["2007", "half", "50%", "two thirds", "2 in 3", "steadily"] },
            ],
            commonError: "Explaining why urbanisation happens instead of describing the data, or not quoting any figures.",
            guideRef: "urbanisation",
          },
          {
            id: "city-qa-p1-q15",
            question: "Explain why very few people live in the CBD.",
            marks: 2,
            hint: "Who can afford the land?",
            modelAnswer: "Land in the CBD is the most expensive in the city because it is the most accessible place. Offices and shops can pay the highest rents, so they outbid housing, leaving few homes in the centre.",
            markScheme: [
              { point: "Land is very expensive / high land value", keywords: ["expensive", "land value", "high rent", "cost", "price"] },
              { point: "Businesses outbid housing / accessibility", keywords: ["office", "shop", "business", "outbid", "accessib", "commercial"] },
            ],
            commonError: "Saying 'it's too noisy' without mentioning land value — the key geographical reason.",
            guideRef: "urban-land-use",
          },
        ],
      },
      {
        id: "city-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "city-qa-p2-q01",
            question: "Using Singapore as an example, explain the difference between urbanisation and urban growth.",
            marks: 4,
            hint: "Singapore's population has grown — but what about its urban percentage?",
            modelAnswer: "Urbanisation is an increase in the proportion of people living in urban areas, whereas urban growth is an increase in the number of urban people or the area of a city. Singapore has been 100% urban for decades, so it cannot urbanise any further. However, it has had huge urban growth: its population rose from about 1.6 million in 1960 to about 6 million today, and land reclamation has increased its area.",
            markScheme: [
              { point: "Defines urbanisation as proportion/percentage", keywords: ["proportion", "percentage", "share", "%"] },
              { point: "Defines urban growth as number/area", keywords: ["number", "area", "size", "more people"] },
              { point: "Singapore is 100% urban so no further urbanisation", keywords: ["100%", "100 per", "all urban", "cannot"] },
              { point: "Singapore shows urban growth with data", keywords: ["1.6 million", "6 million", "grown", "reclamation", "population rose"] },
            ],
            commonError: "Saying Singapore is 'urbanising' because it is growing — it is growing but its urban share is already 100%.",
            guideRef: "urbanisation",
          },
          {
            id: "city-qa-p2-q02",
            question: "For a named city in a lower-income country, explain why many people migrate there from rural areas.",
            marks: 4,
            hint: "Name the city, then explain at least one push and one pull factor.",
            modelAnswer: "Many people migrate to Dhaka in Bangladesh. In rural areas they are pushed away by river-bank erosion, floods and cyclones that destroy farmland, and by low, unreliable farm incomes. They are pulled to Dhaka by jobs in the garment industry, which employs about 4 million people in Bangladesh, and by better schools and hospitals. Family members already in the city help newcomers find work and housing.",
            markScheme: [
              { point: "Named city in LIC/NEE", keywords: ["dhaka", "lagos", "mumbai", "delhi", "kinshasa", "cairo"] },
              { point: "Push factor explained", keywords: ["flood", "erosion", "drought", "cyclone", "low income", "push"] },
              { point: "Pull factor explained", keywords: ["garment", "factory", "job", "wage", "pull"] },
              { point: "Further factor or development (services, family networks, data)", keywords: ["school", "hospital", "family", "relative", "4 million", "network"] },
            ],
            commonError: "Not naming a city, or listing factors with no explanation of why they make people move.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-qa-p2-q03",
            question: "Explain why natural increase is often high in fast-growing cities.",
            marks: 3,
            hint: "Think about who migrates and about healthcare.",
            modelAnswer: "Most rural–urban migrants are young adults of child-bearing age, so after moving they have children in the city, which raises the birth rate. At the same time, cities have better healthcare and clean water than rural areas, so the death rate is lower. Births therefore far outnumber deaths.",
            markScheme: [
              { point: "Migrants are young adults / child-bearing age", keywords: ["young", "child-bearing", "20s", "fertile", "reproductive"] },
              { point: "High birth rate in city", keywords: ["birth rate", "children", "babies", "births"] },
              { point: "Low death rate due to healthcare", keywords: ["healthcare", "hospital", "death rate", "medicine", "clean water"] },
            ],
            commonError: "Describing migration only, without linking it to births in the city.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-qa-p2-q04",
            question: "Describe how land use and buildings change as you travel from the CBD to the rural–urban fringe.",
            marks: 4,
            hint: "Think about height, land value, house type and green space.",
            modelAnswer: "In the CBD buildings are tall offices and shops on very expensive land. Moving out into the inner city there are older terraced houses and old factories, many now regenerated. The suburbs have newer, larger semi-detached and detached houses with gardens at a lower density. At the rural–urban fringe land is cheaper, with business parks, out-of-town shopping centres, airports and farmland. Overall, building height and land value fall, while houses get newer and green space increases.",
            markScheme: [
              { point: "CBD: tall offices/shops, high land value", keywords: ["tall", "office", "high-rise", "skyscraper", "expensive"] },
              { point: "Inner city: old terraced housing/factories", keywords: ["terrace", "factor", "old", "warehouse", "regenerat"] },
              { point: "Suburbs: larger/newer houses with gardens", keywords: ["semi-detached", "detached", "garden", "suburb", "lower density"] },
              { point: "Fringe: business parks, shopping centres, farmland / overall trend", keywords: ["business park", "out-of-town", "shopping centre", "farm", "airport", "falls"] },
            ],
            commonError: "Describing only two zones, or not describing any change in building type.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-qa-p2-q05",
            question: "Apply the urban land-use model to London: name a place or feature found in three different zones.",
            marks: 3,
            hint: "Think of the Square Mile, Docklands and Bluewater.",
            modelAnswer: "CBD: the City of London (the Square Mile) with its banks and offices. Inner city: the regenerated Docklands / Canary Wharf in Tower Hamlets. Rural–urban fringe: Bluewater shopping centre or Heathrow Airport near the M25.",
            markScheme: [
              { point: "CBD example", keywords: ["city of london", "square mile", "west end", "oxford street", "bank"] },
              { point: "Inner city example", keywords: ["docklands", "canary wharf", "tower hamlets", "east end", "inner city"] },
              { point: "Suburb or fringe example", keywords: ["bluewater", "heathrow", "m25", "green belt", "bromley", "suburb"] },
            ],
            commonError: "Naming zones but not real places, or putting Bluewater in the CBD.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-qa-p2-q06",
            question: "Study the data. Number of megacities — 1950: 2; 1975: 3; 1990: 10; 2018: 33; 2030 (projected): 43. (a) Describe the trend. (b) Calculate the percentage increase from 1990 to 2018.",
            marks: 4,
            hint: "(33 − 10) ÷ 10 × 100.",
            modelAnswer: "(a) The number of megacities has increased, slowly at first (from 2 in 1950 to 3 in 1975) and then very rapidly since 1975, reaching 33 in 2018 with 43 projected for 2030. (b) (33 − 10) ÷ 10 × 100 = 230% increase.",
            markScheme: [
              { point: "Overall increase", keywords: ["increas", "rise", "grow", "more"] },
              { point: "Rate: slow then rapid, with data", keywords: ["slow", "rapid", "fast", "accelerat", "1975", "since"] },
              { point: "Correct method", keywords: ["33 - 10", "33 − 10", "23", "÷ 10", "/10"] },
              { point: "Correct answer 230%", keywords: ["230", "2.3 times", "two hundred and thirty"] },
            ],
            commonError: "Giving 23% (dividing by 100) or 330% (dividing 33 by 10 without subtracting).",
            guideRef: "megacities",
          },
          {
            id: "city-qa-p2-q07",
            question: "Study the data. Megacities by region, 2018 — Asia: 20; Latin America: 6; Africa: 3; Europe: 2; North America: 2; Oceania: 0. Describe the distribution using TEA.",
            marks: 4,
            hint: "Trend, Example (quote data), Anomaly — and do not explain.",
            modelAnswer: "Most megacities are in Asia: 20 out of 33, which is about 61% (Trend). For example, Tokyo, Delhi, Shanghai, Dhaka and Mumbai are all Asian megacities (Example). Latin America is second with 6, such as São Paulo. However, Oceania has no megacities and Europe and North America have only 2 each, even though they are wealthy regions (Anomaly).",
            markScheme: [
              { point: "Trend: most in Asia", keywords: ["most", "majority", "asia"] },
              { point: "Quotes data", keywords: ["20", "61%", "6", "33"] },
              { point: "Named example", keywords: ["tokyo", "delhi", "shanghai", "dhaka", "mumbai", "são paulo"] },
              { point: "Anomaly", keywords: ["oceania", "none", "only 2", "europe", "north america", "however"] },
            ],
            commonError: "Explaining reasons (e.g. 'because of high birth rates') instead of describing the pattern.",
            guideRef: "megacities",
          },
          {
            id: "city-qa-p2-q08",
            question: "Explain two reasons why most new megacities are in Asia and Africa rather than in Europe or North America.",
            marks: 4,
            hint: "Think about how urban each region already is, and its population growth.",
            modelAnswer: "First, many countries in Asia and Africa are still urbanising rapidly: large rural populations are moving to cities for jobs, while Europe and North America are already about 75–85% urban, so few rural people are left to move. Second, Asia and Africa have higher natural increase because their populations are younger with higher birth rates, so cities like Lagos and Dhaka grow even without migration, whereas HICs have low birth rates and ageing populations.",
            markScheme: [
              { point: "Rapid rural–urban migration in Asia/Africa", keywords: ["migrat", "rural-urban", "rural–urban", "moving to cities"] },
              { point: "HICs already highly urban, few rural people left", keywords: ["already urban", "already", "84%", "few rural", "high income"] },
              { point: "Higher natural increase / young population", keywords: ["birth rate", "natural increase", "young", "youthful"] },
              { point: "Contrast with low birth rate/ageing in HICs, or named example", keywords: ["ageing", "aging", "low birth", "lagos", "dhaka", "kinshasa"] },
            ],
            commonError: "Giving one reason twice in different words, or describing where megacities are without explaining why.",
            guideRef: "megacities",
          },
          {
            id: "city-qa-p2-q09",
            question: "Explain why Singapore is described as a world city.",
            marks: 4,
            hint: "Finance, transport, companies — with evidence.",
            modelAnswer: "Singapore has huge global influence even though it has only about 6 million people. It is one of the world's top four financial centres, alongside New York, London and Hong Kong. Its port is one of the two busiest container ports in the world, and Changi Airport connects it to around 150 cities. Hundreds of transnational corporations have their Asia-Pacific headquarters there, so decisions made in Singapore affect the whole region.",
            markScheme: [
              { point: "World city = global influence/connections", keywords: ["influence", "global", "connect", "hub"] },
              { point: "Finance evidence", keywords: ["financ", "bank", "stock", "money"] },
              { point: "Transport evidence (port/Changi)", keywords: ["port", "changi", "airport", "shipping"] },
              { point: "TNC headquarters evidence", keywords: ["tnc", "headquarter", "company", "companies", "transnational", "multinational"] },
            ],
            commonError: "Arguing it is a world city because it is big or crowded.",
            guideRef: "world-cities",
          },
          {
            id: "city-qa-p2-q10",
            question: "Explain two problems faced by people living in informal settlements.",
            marks: 4,
            hint: "State the problem, then explain its effect on people.",
            modelAnswer: "First, there is little clean water or sanitation: many families share a toilet and drains are open, so diseases such as cholera and typhoid spread quickly. Second, homes are often built on hazardous land such as river banks and steep slopes, so they can be destroyed by floods or landslides, and because residents have no legal tenure they may also be evicted and lose everything.",
            markScheme: [
              { point: "Problem 1 identified (e.g. poor sanitation)", keywords: ["water", "sanitation", "toilet", "drain", "sewage"] },
              { point: "Problem 1 explained (disease)", keywords: ["disease", "cholera", "typhoid", "diarrhoea", "ill"] },
              { point: "Problem 2 identified (hazards/eviction/fire/informal jobs)", keywords: ["flood", "landslide", "fire", "evict", "tenure", "informal job"] },
              { point: "Problem 2 explained (effect on people)", keywords: ["destroy", "lose", "homeless", "injur", "unsafe", "death"] },
            ],
            commonError: "Naming problems without explaining their impact on residents.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-qa-p2-q11",
            question: "Explain why differences in the definition of 'urban' make it hard to compare countries' urbanisation rates.",
            marks: 3,
            hint: "Compare Denmark (200) and Japan (50,000).",
            modelAnswer: "Countries use different thresholds and criteria. Denmark counts a place with only 200 people as urban, while Japan normally needs about 50,000 for a city. So a village counted as urban in Denmark would be rural in Japan, which makes Denmark look more urbanised than it would under Japan's rules, even if life is similar.",
            markScheme: [
              { point: "Countries use different criteria/thresholds", keywords: ["different", "own rules", "threshold", "criteria", "definition"] },
              { point: "Example with data", keywords: ["200", "50,000", "denmark", "japan", "5,000", "1,000"] },
              { point: "Effect: the same place could be urban in one country and rural in another, distorting percentages", keywords: ["more urban", "less urban", "rural in", "higher percentage", "look", "unfair"] },
            ],
            commonError: "Saying definitions differ but not explaining the effect on the statistics.",
            guideRef: "what-is-a-city",
          },
          {
            id: "city-qa-p2-q12",
            question: "Choose one problem of city life and explain how Singapore's government tries to reduce it.",
            marks: 3,
            hint: "Congestion, housing costs or the heat island.",
            modelAnswer: "Traffic congestion is a major city problem. Singapore limits the number of cars using the Certificate of Entitlement (COE) system and charges drivers to use busy roads through Electronic Road Pricing (ERP). It also invests in the MRT, so more people use public transport instead of cars, which reduces jams and pollution.",
            markScheme: [
              { point: "Names a city problem", keywords: ["congestion", "traffic", "housing", "heat island", "pollution", "expensive"] },
              { point: "Names a Singapore policy", keywords: ["coe", "erp", "mrt", "hdb", "road pricing", "tree"] },
              { point: "Explains how the policy helps", keywords: ["fewer cars", "reduce", "afford", "cool", "public transport", "limit"] },
            ],
            commonError: "Describing the problem in detail but not explaining HOW the policy reduces it.",
            guideRef: "city-life",
          },
          {
            id: "city-qa-p2-q13",
            question: "City Y's population grew from 5 million in 1990 to 15 million in 2020. Calculate the percentage increase and state whether City Y is now a megacity.",
            marks: 3,
            hint: "(new − old) ÷ old × 100; check the megacity threshold.",
            modelAnswer: "(15 − 5) ÷ 5 × 100 = 200% increase. City Y is now a megacity because it has more than 10 million people.",
            markScheme: [
              { point: "Correct method", keywords: ["15 - 5", "15 − 5", "10 ÷ 5", "10/5", "÷ 5"] },
              { point: "Correct answer 200%", keywords: ["200", "tripled", "three times"] },
              { point: "Yes — over 10 million", keywords: ["10 million", "ten million", "yes", "megacity"] },
            ],
            commonError: "Answering 300% (dividing 15 by 5) instead of using the change.",
            guideRef: "megacities",
          },
          {
            id: "city-qa-p2-q14",
            question: "Explain why informal settlements often grow on hazardous land such as river banks and steep slopes.",
            marks: 3,
            hint: "Why is this land empty in the first place?",
            modelAnswer: "Migrants arrive faster than the city can build affordable housing, and they cannot afford to rent or buy formal homes. Hazardous land is unwanted by developers and owners, so it is left empty. Migrants can build there for free with less risk of being evicted, and it is often close to jobs in the city.",
            markScheme: [
              { point: "Migrants cannot afford formal housing / not enough housing", keywords: ["afford", "cheap", "not enough housing", "too expensive", "poor"] },
              { point: "Hazardous land is unwanted/empty", keywords: ["unwanted", "empty", "nobody", "no one", "unused"] },
              { point: "Free / less likely to be evicted / close to jobs", keywords: ["free", "evict", "close to", "near", "job"] },
            ],
            commonError: "Saying people choose hazardous land because they like it, rather than because they have no alternative.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-qa-p2-q15",
            question: "Describe the informal settlement of Dharavi.",
            marks: 4,
            hint: "Location, size, population and economy.",
            modelAnswer: "Dharavi is an informal settlement in Mumbai, India. It covers only about 2.1 km² but has an estimated 600,000 to 1 million people, so it is extremely densely populated. It has a huge informal economy, with thousands of small businesses in recycling, pottery, leather and garments, estimated to turn over roughly US$650 million–1 billion a year. Many homes lack private toilets and clean water.",
            markScheme: [
              { point: "Location: Mumbai, India", keywords: ["mumbai", "india", "bombay"] },
              { point: "Size/population figure", keywords: ["2.1", "2 km", "600,000", "1 million", "million people", "dense"] },
              { point: "Economy: recycling/small businesses", keywords: ["recycl", "pottery", "leather", "business", "industr", "economy"] },
              { point: "Living conditions or data on turnover", keywords: ["toilet", "water", "sanitation", "650", "billion", "overcrowd"] },
            ],
            commonError: "Describing Dharavi only as poor and forgetting its busy economy, or giving no figures.",
            guideRef: "informal-settlements",
          },
        ],
      },
      {
        id: "city-qa-p3",
        title: "Written Paper 3",
        questions: [
          {
            id: "city-qa-p3-q01",
            question: "'The benefits of living in a city outweigh the problems.' Do you agree? Use named examples in a PEEL-style answer.",
            marks: 6,
            hint: "Point, Evidence (named city/figure), Explanation, Link — and consider both sides.",
            modelAnswer: "I largely agree. Cities offer far more jobs and services than rural areas: in Singapore, the MRT, universities and hospitals are within easy reach of most residents, and wages are higher. This matters because it gives people better education, healthcare and incomes, improving their quality of life. However, cities also bring problems such as congestion, air pollution and high housing costs — Delhi's winter smog harms millions of people's health, and about 4 in 10 people in Mumbai live in slums. These problems are worst where cities grow faster than governments can plan. Overall, the benefits outweigh the problems when a city is well managed — as Singapore shows with HDB housing and the COE system — but for the poorest residents of fast-growing megacities, the problems can be greater than the benefits.",
            markScheme: [
              { point: "Point: states a benefit or a clear view", keywords: ["agree", "benefit", "advantage", "outweigh"] },
              { point: "Evidence: named city with a benefit", keywords: ["singapore", "mrt", "universit", "hospital", "london", "wage"] },
              { point: "Explanation of why the benefit improves lives", keywords: ["quality of life", "better", "income", "education", "healthcare", "because"] },
              { point: "Counter-point: a problem identified", keywords: ["however", "congestion", "pollution", "slum", "housing cost", "inequality"] },
              { point: "Evidence for the problem: named place/figure", keywords: ["delhi", "mumbai", "dharavi", "4 in 10", "smog", "lagos"] },
              { point: "Link/conclusion: judgement that depends on management or who you are", keywords: ["overall", "depends", "managed", "conclusion", "planned", "therefore"] },
            ],
            commonError: "Writing only one side, or giving a conclusion with no named evidence to support it.",
            guideRef: "city-life",
          },
          {
            id: "city-qa-p3-q02",
            question: "Explain why high-income countries such as the UK urbanised much earlier than many low-income countries.",
            marks: 4,
            hint: "Think about the Industrial Revolution.",
            modelAnswer: "The UK urbanised during the Industrial Revolution in the 1800s. New factories in cities such as Manchester created huge numbers of jobs, which pulled workers from the countryside. At the same time, new farm machinery meant fewer workers were needed on farms, pushing people out. Most low-income countries only began to industrialise in the late 20th century, so their rapid rural–urban migration is happening now.",
            markScheme: [
              { point: "Industrial Revolution in the 1800s", keywords: ["industrial revolution", "1800s", "19th century", "industrialis"] },
              { point: "Factory jobs pulled workers to cities", keywords: ["factor", "jobs", "pull", "industry"] },
              { point: "Farm mechanisation pushed workers out", keywords: ["machine", "mechanis", "fewer workers", "push"] },
              { point: "LICs industrialised later / urbanising now", keywords: ["later", "now", "recent", "20th century", "today", "since"] },
            ],
            commonError: "Saying HICs urbanised earlier 'because they are rich' without explaining industrialisation.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-qa-p3-q03",
            question: "Study the data. Percentage urban (approx.) — Japan: 92%; UK: 84%; China: 65%; Nigeria: 54%; India: 36%; Burundi: 14%. (a) Calculate the range. (b) Describe what the data shows about urbanisation and development.",
            marks: 4,
            hint: "Range = highest − lowest. Then link high/low values to HICs/LICs.",
            modelAnswer: "(a) 92 − 14 = 78 percentage points. (b) The high-income countries (Japan and the UK) are the most urbanised, at over 80%. The NEEs such as China, Nigeria and India are in the middle, between 36% and 65%, while the low-income country Burundi is only 14% urban. So, in general, more developed countries are more urbanised — although India is an anomaly, as it is less urban than Nigeria despite being a larger economy.",
            markScheme: [
              { point: "Correct method for range", keywords: ["92 - 14", "92 − 14", "92-14", "highest minus lowest"] },
              { point: "Correct range 78", keywords: ["78", "seventy-eight", "78 percentage"] },
              { point: "HICs most urbanised / LIC least", keywords: ["japan", "uk", "high-income", "hic", "burundi", "low-income"] },
              { point: "Link: more developed = more urban, with data or anomaly", keywords: ["develop", "richer", "wealth", "anomaly", "india", "nigeria"] },
            ],
            commonError: "Writing '78%' and then describing countries one by one without identifying the overall link with development.",
            guideRef: "urbanisation",
          },
          {
            id: "city-qa-p3-q04",
            question: "Explain two limitations of the Burgess concentric-zone model.",
            marks: 4,
            hint: "Think about rivers, transport routes, planning and modern cities.",
            modelAnswer: "First, real cities are not perfect circles: rivers, coasts and hills block growth in some directions, and transport routes such as railways stretch zones out into wedges, as Hoyt's sector model shows. Second, the model is based on one city (Chicago in the 1920s) and has one centre, but many modern cities have several centres — Singapore planned regional centres like Tampines and Jurong East — and out-of-town shopping has moved shops away from the CBD.",
            markScheme: [
              { point: "Limitation 1: physical features / transport distort rings", keywords: ["river", "coast", "hill", "transport", "railway", "road"] },
              { point: "Explains effect (wedges/sectors, not circles)", keywords: ["wedge", "sector", "hoyt", "not circle", "not a circle", "stretch"] },
              { point: "Limitation 2: based on one old city / one centre", keywords: ["chicago", "1920", "1925", "one centre", "single centre", "old"] },
              { point: "Explains with modern example", keywords: ["regional centre", "tampines", "jurong", "out-of-town", "several centres", "multiple"] },
            ],
            commonError: "Describing the model instead of criticising it.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-qa-p3-q05",
            question: "To what extent does Singapore fit the Burgess model?",
            marks: 4,
            hint: "Give one way it fits and one way it does not, then judge.",
            modelAnswer: "Singapore partly fits. Its CBD around Raffles Place and Marina Bay has the tallest buildings and highest land values, as the model predicts. However, it does not fit well beyond the centre: the government has planned HDB new towns all over the island and regional centres such as Tampines, Jurong East and Woodlands, so there are several centres of jobs and shops rather than neat rings. Overall, it fits only in the centre because planning, not just land value, decides land use.",
            markScheme: [
              { point: "Fits: CBD with tall buildings/high land value", keywords: ["raffles", "marina bay", "downtown", "cbd", "tall", "land value"] },
              { point: "Does not fit: planned regional centres/new towns", keywords: ["regional centre", "tampines", "jurong", "woodlands", "new town", "hdb"] },
              { point: "Explains role of planning", keywords: ["plan", "ura", "government", "decentralis"] },
              { point: "Judgement", keywords: ["partly", "overall", "to some extent", "only", "mostly"] },
            ],
            commonError: "Only saying 'it does not fit' without any evidence of where it does.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-qa-p3-q06",
            question: "Explain why the rural–urban fringe is under pressure from development.",
            marks: 3,
            hint: "What do developers, shoppers and commuters want?",
            modelAnswer: "Land at the edge of the city is cheaper than in the centre and there is lots of space, so developers want to build housing estates, business parks and out-of-town shopping centres there. It is also near motorways and ring roads, so it is easy to reach by car. This puts pressure on farmland and green belt land, causing conflict with people who want to protect the countryside.",
            markScheme: [
              { point: "Cheaper land / more space", keywords: ["cheap", "space", "lower cost", "large sites"] },
              { point: "Good road access", keywords: ["motorway", "ring road", "m25", "access", "car"] },
              { point: "Conflict with farmland/green belt", keywords: ["farmland", "green belt", "greenfield", "countryside", "conflict", "sprawl"] },
            ],
            commonError: "Describing the fringe without explaining why developers want the land.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-qa-p3-q07",
            question: "Explain the difference between a megacity and a world city, using examples.",
            marks: 4,
            hint: "One is about size; the other about influence. Use a city that is both and one that is only one.",
            modelAnswer: "A megacity is defined by size: an urban area with more than 10 million people, such as Dhaka. A world city is defined by its global influence in finance, business, transport and culture, such as London. Some cities are both — Tokyo has about 37 million people and is a global financial centre. Others are only one: Singapore is a world city with only about 6 million people, while Kinshasa is a megacity with less global influence.",
            markScheme: [
              { point: "Megacity = over 10 million people", keywords: ["10 million", "ten million", "size", "population"] },
              { point: "World city = global influence", keywords: ["influence", "global", "connect", "finance", "hub"] },
              { point: "Example of a megacity", keywords: ["dhaka", "lagos", "kinshasa", "delhi", "cairo", "mumbai"] },
              { point: "Example showing they differ (e.g. Singapore, or a city that is both)", keywords: ["singapore", "london", "new york", "both", "6 million"] },
            ],
            commonError: "Treating the two terms as meaning the same thing.",
            guideRef: "world-cities",
          },
          {
            id: "city-qa-p3-q08",
            question: "Explain why Tokyo's population has stopped growing while Lagos's population is increasing rapidly.",
            marks: 4,
            hint: "Compare natural increase and migration in Japan and Nigeria.",
            modelAnswer: "Japan has a low birth rate and an ageing population, so there are now more deaths than births and natural increase is negative. Japan is also already about 92% urban, so there are few rural people left to move to Tokyo. In contrast, Nigeria has a young population with a high birth rate, so natural increase in Lagos is high. Many young Nigerians also migrate from rural areas to Lagos for jobs, so the city grows from both causes.",
            markScheme: [
              { point: "Japan: low birth rate / ageing", keywords: ["low birth", "ageing", "aging", "elderly", "old"] },
              { point: "Japan already highly urban / little migration left", keywords: ["92%", "already urban", "few rural", "little migration"] },
              { point: "Nigeria: young population / high birth rate", keywords: ["young", "high birth", "natural increase", "youthful"] },
              { point: "Rural–urban migration to Lagos", keywords: ["migrat", "rural", "move to lagos", "jobs"] },
            ],
            commonError: "Explaining only one city and not making the comparison.",
            guideRef: "megacities",
          },
          {
            id: "city-qa-p3-q09",
            question: "Dhaka's population grew from about 7 million in 1990 to about 21 million in 2020. (a) Calculate the percentage increase. (b) Suggest two reasons for this growth.",
            marks: 4,
            hint: "(21 − 7) ÷ 7 × 100. Then one reason about migration and one about births.",
            modelAnswer: "(a) (21 − 7) ÷ 7 × 100 = 200% increase. (b) First, rural–urban migration: people are pushed from the countryside by floods and river-bank erosion and pulled by garment factory jobs. Second, natural increase: many migrants are young adults, so the birth rate is higher than the death rate.",
            markScheme: [
              { point: "Correct method", keywords: ["21 - 7", "21 − 7", "14 ÷ 7", "14/7", "÷ 7"] },
              { point: "Correct answer 200%", keywords: ["200", "tripled", "three times"] },
              { point: "Migration reason", keywords: ["migrat", "garment", "flood", "erosion", "jobs"] },
              { point: "Natural increase reason", keywords: ["natural increase", "birth", "young"] },
            ],
            commonError: "Calculating 300% by dividing 21 by 7 and forgetting to subtract the original.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-qa-p3-q10",
            question: "Explain two advantages of upgrading informal settlements instead of demolishing them.",
            marks: 4,
            hint: "Think about jobs, communities and cost.",
            modelAnswer: "First, upgrading lets residents stay close to their jobs and workshops: in Dharavi many people work from home in recycling or pottery, so demolition and moving them far away could destroy their income. Second, upgrading keeps communities together and is usually cheaper than building complete new estates, so money can be spent on water pipes, toilets, paved paths and legal land rights for many more people.",
            markScheme: [
              { point: "Advantage 1: keeps jobs/livelihoods", keywords: ["job", "income", "livelihood", "workshop", "work"] },
              { point: "Developed with example", keywords: ["dharavi", "kibera", "recycl", "pottery", "home"] },
              { point: "Advantage 2: keeps community / cheaper", keywords: ["community", "cheaper", "cost", "neighbour", "social"] },
              { point: "Developed: services and tenure added", keywords: ["water", "toilet", "sanitation", "tenure", "path", "electric"] },
            ],
            commonError: "Describing problems of slums instead of the advantages of upgrading.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-qa-p3-q11",
            question: "Explain how the urban heat island affects people in a tropical city such as Singapore, and suggest one way to reduce it.",
            marks: 4,
            hint: "Effects on health and energy, then a solution with a reason.",
            modelAnswer: "In an already hot, humid city, the extra heat at night makes it hard to sleep and increases the risk of heat stress, especially for elderly people and outdoor workers. It also makes people use more air-conditioning, which raises electricity bills and releases even more waste heat, making the problem worse. One solution is planting more trees and green roofs, because plants shade surfaces and cool the air through evapotranspiration.",
            markScheme: [
              { point: "Health effect", keywords: ["heat stress", "health", "sleep", "elderly", "heatstroke"] },
              { point: "Energy/air-conditioning effect", keywords: ["air-con", "air con", "electricity", "energy", "bill"] },
              { point: "Solution named", keywords: ["tree", "green roof", "greenery", "park", "cool roof", "reflective"] },
              { point: "Solution explained", keywords: ["shade", "evapo", "absorb less", "reflect", "cooler"] },
            ],
            commonError: "Explaining what causes the heat island instead of how it affects people.",
            guideRef: "city-life",
          },
          {
            id: "city-qa-p3-q12",
            question: "Estimates of Kibera's population range from about 170,000 to over 700,000. Suggest three reasons why it is so hard to count.",
            marks: 3,
            hint: "Think about official records, movement and boundaries.",
            modelAnswer: "First, homes are informal and not on official records or maps, so census takers may miss them. Second, people move in and out often, so the population keeps changing. Third, different organisations draw Kibera's boundary differently and may have reasons to give higher or lower numbers.",
            markScheme: [
              { point: "Homes not officially recorded/mapped", keywords: ["record", "map", "official", "register", "address"] },
              { point: "People move often / changing population", keywords: ["move", "migrat", "temporary", "chang"] },
              { point: "Different boundaries / methods / motives", keywords: ["boundar", "method", "definition", "different organis", "estimate"] },
            ],
            commonError: "Giving one reason three times in different words.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-qa-p3-q13",
            question: "Explain why airports and out-of-town shopping centres are usually located on the rural–urban fringe.",
            marks: 4,
            hint: "Space, cost, access and nuisance.",
            modelAnswer: "Both need very large areas of land, which is available and much cheaper at the edge of the city than in the CBD. They also need good road access for cars, lorries and passengers, and the fringe is close to motorways and ring roads. Airports are also noisy, so locating them away from the dense city centre reduces the number of people affected by noise.",
            markScheme: [
              { point: "Need large areas of land", keywords: ["large", "space", "big site", "lots of land"] },
              { point: "Land is cheaper", keywords: ["cheap", "lower land value", "low cost", "less expensive"] },
              { point: "Good road/motorway access", keywords: ["motorway", "road", "access", "car park", "m25"] },
              { point: "Away from dense housing / noise", keywords: ["noise", "fewer people", "away from", "pollution"] },
            ],
            commonError: "Only saying 'there is space' without explaining cost or access.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-qa-p3-q14",
            question: "Explain why natural increase can now be more important than migration in the growth of many African cities.",
            marks: 3,
            hint: "Who already lives in these cities?",
            modelAnswer: "Many African cities already have very large, young populations, partly because of earlier migration. These young adults have children in the city, and improving healthcare has lowered the death rate, so births far exceed deaths. As a result, natural increase can add more people each year than new migrants arriving.",
            markScheme: [
              { point: "Large young population already in cities", keywords: ["young", "youthful", "already live", "earlier migration"] },
              { point: "High birth rate", keywords: ["birth rate", "children", "births"] },
              { point: "Lower death rate from healthcare", keywords: ["death rate", "healthcare", "medicine", "hospital"] },
            ],
            commonError: "Saying migration has stopped — it continues, but natural increase may add more people.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-qa-p3-q15",
            question: "Explain why different sources disagree about which is the largest city in the world.",
            marks: 3,
            hint: "City proper vs metropolitan area — and new methods.",
            modelAnswer: "Sources draw a city's boundary in different ways: the city proper, the continuous urban area, or the whole metropolitan region. Tokyo, for example, can be about 14 million (Tokyo Metropolis) or about 37 million (Greater Tokyo). New methods also change rankings — a 2025 UN report using a wider definition placed Jakarta first. Data for fast-growing cities may also be estimates because censuses are old or miss informal settlements.",
            markScheme: [
              { point: "Different boundaries/definitions", keywords: ["boundar", "definition", "metro", "city proper", "agglomeration"] },
              { point: "Example with figures", keywords: ["tokyo", "14 million", "37 million", "jakarta"] },
              { point: "Methods/data quality issues", keywords: ["estimate", "census", "method", "informal", "out of date"] },
            ],
            commonError: "Assuming one source must be 'wrong' rather than using a different definition.",
            guideRef: "megacities",
          },
        ],
      },
      {
        id: "city-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "city-qa-p4-q01",
            question: "'Megacities are a good thing.' To what extent do you agree? Use named examples.",
            marks: 6,
            hint: "PEEL for, PEEL against, then a justified conclusion.",
            modelAnswer: "To some extent I agree. Megacities are engines of economic growth: Tokyo, with about 37 million people, is one of the world's largest urban economies, and in Mumbai, India's financial capital, wages are much higher than in rural India. Concentrating people also makes it cheaper to provide services like metro systems and hospitals. However, many megacities grow faster than they can be managed: around 4 in 10 Mumbai residents live in slums such as Dharavi, and Dhaka and Delhi suffer severe congestion and air pollution. Coastal megacities like Lagos and Shanghai also face flooding as sea levels rise. Overall, megacities can be good when they are well planned and governed, like Tokyo, but in fast-growing megacities in LICs and NEEs the problems often fall hardest on the poorest people.",
            markScheme: [
              { point: "Benefit identified (economic growth, jobs, services)", keywords: ["econom", "jobs", "wage", "services", "growth"] },
              { point: "Evidence for benefit: named megacity/figure", keywords: ["tokyo", "37 million", "mumbai", "shanghai", "financial"] },
              { point: "Problem identified (slums, congestion, pollution)", keywords: ["slum", "congestion", "pollution", "informal", "inequality", "flood"] },
              { point: "Evidence for problem: named place/figure", keywords: ["dharavi", "4 in 10", "dhaka", "delhi", "lagos", "kibera"] },
              { point: "Explanation of why (growth faster than management)", keywords: ["faster than", "manage", "plan", "govern", "cannot keep up"] },
              { point: "Justified conclusion", keywords: ["overall", "to some extent", "depends", "conclusion", "therefore"] },
            ],
            commonError: "A one-sided answer, or a conclusion that does not refer back to the evidence.",
            guideRef: "megacities",
          },
          {
            id: "city-qa-p4-q02",
            question: "'Informal settlements should be demolished and replaced with new flats.' Evaluate this statement, referring to Dharavi or Kibera.",
            marks: 6,
            hint: "Consider who gains and who loses; compare with upgrading.",
            modelAnswer: "Demolition and rebuilding could give residents safe, durable homes with private toilets and running water, removing the risks of disease, fire and flooding. The Dharavi redevelopment plan, awarded to the Adani Group in 2022, promises new flats for eligible residents. However, Dharavi is not just housing: its thousands of small businesses in recycling, pottery and leather are estimated to turn over hundreds of millions of US dollars a year, and many people live and work in the same building. High-rise flats may have no space for workshops, and residents who cannot prove they are eligible could be moved far away from their jobs. Upgrading — as Kenya's slum-upgrading programme has tried in Kibera — adds water, toilets, paths and legal tenure while keeping communities together. Overall, I think upgrading is usually fairer, with demolition only where land is truly hazardous, and residents should be involved in decisions.",
            markScheme: [
              { point: "Benefit of demolition/new flats", keywords: ["safe", "durable", "toilet", "running water", "disease", "fire"] },
              { point: "Named example of redevelopment", keywords: ["adani", "redevelop", "dharavi", "2022", "kensup", "kibera"] },
              { point: "Problem: loss of livelihoods/economy", keywords: ["business", "recycl", "pottery", "livelihood", "income", "workshop"] },
              { point: "Problem: displacement / community broken", keywords: ["eligible", "far from", "community", "evict", "displace", "moved"] },
              { point: "Alternative: upgrading explained", keywords: ["upgrad", "in-situ", "in situ", "tenure", "improve"] },
              { point: "Justified judgement", keywords: ["overall", "fairer", "conclusion", "i think", "depends", "therefore"] },
            ],
            commonError: "Only describing slum problems without evaluating the policy, or not reaching a judgement.",
            guideRef: "informal-settlements",
          },
          {
            id: "city-qa-p4-q03",
            question: "Using a named city in a lower-income country or NEE, explain the causes of its rapid growth.",
            marks: 6,
            hint: "Push, pull and natural increase — with named detail and figures.",
            modelAnswer: "Dhaka in Bangladesh has grown to over 20 million people. One cause is rural–urban migration. Many rural Bangladeshis are pushed out by river-bank erosion, floods and cyclones, which destroy farmland and homes and are getting worse with climate change; farming incomes are also low and unreliable. They are pulled to Dhaka by jobs, especially in the garment industry, which employs about 4 million people in Bangladesh, as well as by better schools and hospitals, and by relatives who already live there. Estimates suggest hundreds of thousands of people arrive every year. A second cause is natural increase: most migrants are young adults, so they have children in the city, and better healthcare lowers the death rate, so births exceed deaths. Together, migration and natural increase make Dhaka one of the fastest-growing megacities.",
            markScheme: [
              { point: "Named city with population figure", keywords: ["dhaka", "lagos", "mumbai", "delhi", "kinshasa", "million"] },
              { point: "Push factor explained", keywords: ["flood", "erosion", "cyclone", "drought", "low income", "push"] },
              { point: "Pull factor explained", keywords: ["garment", "factory", "jobs", "pull", "wage"] },
              { point: "Additional detail (services, family, scale of migration)", keywords: ["school", "hospital", "relative", "family", "400,000", "every year"] },
              { point: "Natural increase identified", keywords: ["natural increase", "birth rate", "births"] },
              { point: "Natural increase explained (young migrants, healthcare)", keywords: ["young", "healthcare", "death rate", "child-bearing"] },
            ],
            commonError: "Writing a generic answer with no named city or figures, or forgetting natural increase.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-qa-p4-q04",
            question: "Study the data for Country A. 1960: total population 10 million, 15% urban. 2020: total population 40 million, 45% urban. (a) Calculate the urban population in 1960 and in 2020. (b) Calculate the percentage increase in the urban population. (c) Explain how this shows both urbanisation and urban growth.",
            marks: 5,
            hint: "Urban population = total × urban % ÷ 100.",
            modelAnswer: "(a) 1960: 10 million × 15% = 1.5 million. 2020: 40 million × 45% = 18 million. (b) (18 − 1.5) ÷ 1.5 × 100 = 1,100% increase. (c) Urbanisation happened because the proportion of people in urban areas rose from 15% to 45%. Urban growth happened because the number of urban people rose from 1.5 million to 18 million.",
            markScheme: [
              { point: "1960 urban population 1.5 million", keywords: ["1.5 million", "1.5m", "1,500,000", "1.5"] },
              { point: "2020 urban population 18 million", keywords: ["18 million", "18m", "18,000,000"] },
              { point: "Percentage increase 1,100%", keywords: ["1,100", "1100", "1 100"] },
              { point: "Urbanisation: proportion rose 15% to 45%", keywords: ["proportion", "percentage", "15% to 45%", "share"] },
              { point: "Urban growth: number rose", keywords: ["number", "1.5 million to 18", "more people", "urban growth"] },
            ],
            commonError: "Calculating the change in percentage points (30) and calling it the increase in urban population.",
            guideRef: "urbanisation",
          },
          {
            id: "city-qa-p4-q05",
            question: "Describe how the distribution of megacities has changed from 1950 to 2018, and how it is expected to change by 2030.",
            marks: 4,
            hint: "Number, location and type of country — at each date.",
            modelAnswer: "In 1950 there were only 2 megacities, New York and Tokyo, both in high-income countries in the Northern Hemisphere. By 2018 there were 33, and most were in Asia (about 20), with others in Latin America (6) and Africa (3) — mainly in LICs and NEEs. By 2030 the UN expects about 43, with most of the new ones in Asia and Africa, such as Luanda and Dar es Salaam.",
            markScheme: [
              { point: "1950: 2 megacities in HICs (New York, Tokyo)", keywords: ["1950", "two", "2 megacities", "new york", "tokyo"] },
              { point: "2018: 33, mostly in Asia", keywords: ["33", "asia", "20"] },
              { point: "Shift to LICs/NEEs, Africa, Latin America", keywords: ["lic", "nee", "africa", "latin america", "developing", "shift"] },
              { point: "2030: about 43, new ones in Asia/Africa", keywords: ["43", "2030", "luanda", "dar es salaam"] },
            ],
            commonError: "Describing only one date, so no change is shown.",
            guideRef: "megacities",
          },
          {
            id: "city-qa-p4-q06",
            question: "Suggest why there is great inequality in a megacity such as Lagos or Mumbai.",
            marks: 4,
            hint: "Who benefits from the city's wealth, and who arrives faster than homes can be built?",
            modelAnswer: "Megacities attract both wealthy businesses and very poor migrants. High-paying jobs in finance, oil or business go to well-educated people, who can afford expensive housing in gated areas. Meanwhile, poor migrants arrive faster than affordable homes can be built, so many live in informal settlements and work in the informal economy for low, insecure wages. Because land is so expensive, the rich and poor often live side by side — luxury towers in Mumbai overlook slums such as Dharavi.",
            markScheme: [
              { point: "High-paid jobs for educated/wealthy", keywords: ["high-paying", "finance", "business", "educated", "rich", "wealthy"] },
              { point: "Poor migrants arrive faster than housing", keywords: ["migrant", "faster", "housing shortage", "not enough housing", "afford"] },
              { point: "Informal settlements/informal jobs", keywords: ["slum", "informal", "dharavi", "makoko", "low wage"] },
              { point: "Expensive land/side by side example", keywords: ["land", "side by side", "next to", "luxury", "tower", "gated"] },
            ],
            commonError: "Describing inequality without suggesting reasons for it.",
            guideRef: "city-life",
          },
          {
            id: "city-qa-p4-q07",
            question: "Explain how land value influences land use in a city.",
            marks: 5,
            hint: "Accessibility → competition → who can pay → building height → change outwards.",
            modelAnswer: "Land value is highest in the CBD because it is the most accessible point, where transport routes meet. Many businesses compete for this small area, pushing prices up. Only offices, banks and large shops earn enough to pay these prices, so they occupy the centre. To make the most of expensive land, they build upwards, creating skyscrapers. Further out, land is cheaper, so housing can afford it and houses become larger with gardens; at the edge, cheap land suits space-hungry uses such as out-of-town shopping centres and airports.",
            markScheme: [
              { point: "Highest land value in CBD because most accessible", keywords: ["accessib", "transport", "routes meet", "centre"] },
              { point: "Competition pushes prices up", keywords: ["compet", "demand", "bid", "prices up"] },
              { point: "Commercial uses can afford central land", keywords: ["office", "shop", "bank", "business", "commercial"] },
              { point: "Build upwards / high-rise", keywords: ["upward", "tall", "high-rise", "skyscraper"] },
              { point: "Cheaper land outward allows housing/large sites", keywords: ["cheaper", "suburb", "garden", "out-of-town", "airport", "fringe"] },
            ],
            commonError: "Saying 'land is expensive in the centre' without explaining WHY or how it changes the use.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-qa-p4-q08",
            question: "Explain how London is connected to the rest of the world as a world city.",
            marks: 4,
            hint: "Money, people, companies and culture.",
            modelAnswer: "London is one of the world's two leading financial centres, with the London Stock Exchange and hundreds of international banks, so money flows through it from all over the world. Heathrow is one of the world's busiest airports, linking London to cities on every continent. Many transnational corporations have headquarters or major offices there. London is also a global centre for media, universities and culture, with a very diverse population speaking hundreds of languages.",
            markScheme: [
              { point: "Finance connection", keywords: ["stock exchange", "bank", "financ", "money"] },
              { point: "Transport connection", keywords: ["heathrow", "airport", "flight", "eurostar"] },
              { point: "TNC headquarters", keywords: ["tnc", "headquarter", "transnational", "compan"] },
              { point: "Culture/people/media", keywords: ["culture", "media", "universit", "diverse", "language", "tourism"] },
            ],
            commonError: "Listing tourist attractions instead of global connections.",
            guideRef: "world-cities",
          },
          {
            id: "city-qa-p4-q09",
            question: "Singapore is 100% urban and its population is still growing. Suggest how it can provide space for more people.",
            marks: 4,
            hint: "Think up, out, down and across the island.",
            modelAnswer: "Singapore can build upwards, with high-rise HDB flats of 40 storeys or more, which house many people on little land. It can create new land through land reclamation, which has already increased its area by about a quarter since the 1960s. It can redevelop older or brownfield sites, and plan new towns such as Tengah and Punggol with regional centres so that jobs are spread across the island. It can also move some uses, such as storage and utilities, underground.",
            markScheme: [
              { point: "Build upwards / high-rise", keywords: ["high-rise", "upward", "tall", "storey", "hdb"] },
              { point: "Land reclamation", keywords: ["reclam", "new land", "sea"] },
              { point: "Planned new towns / regional centres / redevelopment", keywords: ["new town", "tengah", "punggol", "regional centre", "redevelop", "ura"] },
              { point: "Underground or other creative use of space", keywords: ["underground", "cavern", "rooftop", "mixed use", "brownfield"] },
            ],
            commonError: "Only suggesting 'build more houses' without saying where or how.",
            guideRef: "urbanisation",
          },
          {
            id: "city-qa-p4-q10",
            question: "What is counter-urbanisation, and why does it happen in some high-income countries?",
            marks: 3,
            hint: "It is the opposite of rural–urban migration.",
            modelAnswer: "Counter-urbanisation is the movement of people out of large cities to smaller towns, villages and rural areas. It happens in HICs because people want to escape city problems such as congestion, pollution, crime and high house prices, and because better roads, cars and the internet allow them to commute or work from home while living in the countryside.",
            markScheme: [
              { point: "Definition: movement out of cities to rural areas/smaller towns", keywords: ["out of", "leave", "move to rural", "countryside", "village"] },
              { point: "Push from city problems", keywords: ["congestion", "pollution", "crime", "house price", "noise", "stress"] },
              { point: "Enabled by transport/technology", keywords: ["internet", "work from home", "commut", "car", "road", "remote"] },
            ],
            commonError: "Confusing counter-urbanisation with suburbanisation within the same city, or with rural–urban migration.",
            guideRef: "urbanisation",
          },
          {
            id: "city-qa-p4-q11",
            question: "'Rural–urban migration benefits both the migrants and the city.' Assess this view.",
            marks: 6,
            hint: "Consider migrants, the city, and the places they leave — for and against.",
            modelAnswer: "Migration can benefit migrants because they can earn more in the city: a garment worker in Dhaka usually earns more than a landless farm labourer, and children get better access to schools and hospitals. Migrants also send money home to rural families. The city benefits too, because migrants provide workers for factories, construction and services, helping the economy grow. However, many migrants end up in informal settlements without clean water, and in insecure informal jobs, so their quality of life may not improve as much as they hoped. For the city, rapid migration can cause housing shortages, congestion and pollution if growth outpaces planning — as seen in Mumbai, where around 4 in 10 people live in slums. Overall, migration brings real economic benefits, but whether migrants and the city both gain depends on how well the city provides housing and services.",
            markScheme: [
              { point: "Benefit to migrants (income, services)", keywords: ["earn", "income", "wage", "school", "hospital"] },
              { point: "Benefit to city (labour, economy)", keywords: ["workers", "labour", "economy", "factory", "construction"] },
              { point: "Named example", keywords: ["dhaka", "mumbai", "lagos", "garment", "dharavi"] },
              { point: "Cost to migrants (slums, informal jobs)", keywords: ["slum", "informal", "insecure", "poor housing", "no clean water"] },
              { point: "Cost to city (housing shortage, congestion)", keywords: ["housing shortage", "congestion", "pollution", "pressure", "overcrowd"] },
              { point: "Justified conclusion", keywords: ["overall", "depends", "conclusion", "to some extent", "therefore"] },
            ],
            commonError: "Only considering migrants and ignoring the effects on the city, or vice versa.",
            guideRef: "causes-of-urbanisation",
          },
          {
            id: "city-qa-p4-q12",
            question: "A council plans 2,000 new homes on greenfield farmland on the rural–urban fringe. Give one advantage, one disadvantage and one alternative.",
            marks: 3,
            hint: "Greenfield vs brownfield.",
            modelAnswer: "Advantage: greenfield land is cheaper and quicker to build on because it does not need clearing or decontaminating. Disadvantage: it destroys farmland and wildlife habitats and adds to urban sprawl and traffic. Alternative: build on brownfield land, such as old factory or dock sites in the inner city, which reuses land and regenerates run-down areas.",
            markScheme: [
              { point: "Advantage of greenfield", keywords: ["cheaper", "quicker", "easier", "no clearing", "space"] },
              { point: "Disadvantage of greenfield", keywords: ["farmland", "habitat", "wildlife", "sprawl", "countryside", "traffic"] },
              { point: "Brownfield alternative", keywords: ["brownfield", "old factory", "regenerat", "inner city", "reuse"] },
            ],
            commonError: "Giving an alternative that is still greenfield, or confusing greenfield with green belt.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-qa-p4-q13",
            question: "Study the data. Approximate metro populations (millions) — Tokyo: 37; Delhi: 29; Shanghai: 26; São Paulo: 22; Mexico City: 22; Cairo: 20. (a) Calculate the mean. (b) Calculate the range. (c) Comment on one limitation of this data.",
            marks: 4,
            hint: "Mean = total ÷ number of cities. Range = largest − smallest.",
            modelAnswer: "(a) 37 + 29 + 26 + 22 + 22 + 20 = 156; 156 ÷ 6 = 26 million. (b) 37 − 20 = 17 million. (c) The figures are rounded estimates, and different sources draw city boundaries differently, so another source could give quite different numbers or a different ranking.",
            markScheme: [
              { point: "Correct total or method for mean", keywords: ["156", "÷ 6", "/6", "/ 6"] },
              { point: "Mean = 26 million", keywords: ["26", "26 million", "twenty-six"] },
              { point: "Range = 17 million", keywords: ["17", "17 million", "seventeen"] },
              { point: "Limitation: estimates/boundaries/date", keywords: ["estimate", "boundar", "round", "definition", "source", "out of date"] },
            ],
            commonError: "Dividing by the wrong number of cities, or giving the range as '20 to 37' rather than 17.",
            guideRef: "megacities",
          },
          {
            id: "city-qa-p4-q14",
            question: "Explain why the CBD usually has the tallest buildings in a city.",
            marks: 3,
            hint: "Link land price to building upwards.",
            modelAnswer: "Land in the CBD is the most expensive in the city because it is the most accessible. Because each square metre costs so much, businesses build upwards to fit as much floor space as possible onto a small plot. Offices and banks also want to be close to each other, so many crowd into a small area, creating a cluster of skyscrapers — such as around Raffles Place in Singapore.",
            markScheme: [
              { point: "Very high land values", keywords: ["expensive", "land value", "cost", "price"] },
              { point: "Build upwards to maximise floor space", keywords: ["upward", "floor space", "maximise", "more space", "vertical"] },
              { point: "Businesses cluster / example", keywords: ["cluster", "close to each other", "raffles", "office", "bank", "accessib"] },
            ],
            commonError: "Saying 'to look impressive' instead of linking height to land cost.",
            guideRef: "urban-land-use",
          },
          {
            id: "city-qa-p4-q15",
            question: "Compare the challenges of urban growth in Singapore with those in a fast-growing megacity in a lower-income country or NEE.",
            marks: 5,
            hint: "Use 'whereas' and 'both'. Housing, planning, land and services.",
            modelAnswer: "Both Singapore and a megacity such as Lagos face pressure on space, housing and transport as their populations grow. However, Singapore's main challenge is a shortage of land — it is a small island of about 735 km² — so it builds high-rise HDB flats and reclaims land from the sea. Whereas Lagos's main challenge is that it grows faster than the government can provide housing and services, so many people live in informal settlements such as Makoko without clean water or sanitation. Singapore also has a wealthy, well-funded government that plans the whole island through the URA, whereas Lagos has less money for roads, drains and public transport, leading to severe congestion and flooding.",
            markScheme: [
              { point: "Similarity: both face pressure on housing/transport/space", keywords: ["both", "similar", "pressure", "also"] },
              { point: "Singapore: land shortage, managed by high-rise/reclamation", keywords: ["land shortage", "735", "reclam", "high-rise", "hdb"] },
              { point: "Megacity: growth faster than housing/services", keywords: ["faster", "informal", "slum", "makoko", "dharavi", "kibera"] },
              { point: "Difference in money/planning", keywords: ["wealth", "money", "fund", "plan", "ura", "govern"] },
              { point: "Comparative language", keywords: ["whereas", "however", "in contrast", "unlike", "compared"] },
            ],
            commonError: "Writing two separate descriptions without making any direct comparison.",
            guideRef: "city-life",
          },
        ],
      },
    ],
  },
};
