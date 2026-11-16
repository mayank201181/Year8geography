// Future Cities — Lagos: A Megacity Case Study
// Location, growth, push and pull factors, natural increase, urban problems,
// solutions and opportunities, the persuasive 'Lagos speech' skill and an
// optional contrast with Las Vegas.

import type { Topic } from "../types";

export const lagos: Topic = {
  id: "lagos",
  title: "Lagos: A Megacity Case Study",
  subject: "Future Cities",
  icon: "🌆",
  summary: "Push, pull, problems and opportunities in Africa's biggest city.",
  intro:
    "In 1950 Lagos was a port town of about 300,000 people; today somewhere between 15 and 20+ million people live in and around it, making it one of the fastest-growing megacities on Earth. Lagos is a brilliant case study because it shows everything at once: why people move to cities, what happens when a city grows faster than its roads, pipes and power lines, and how creative people and governments try to fix it. By the end you will be able to explain Lagos's growth with push and pull factors, describe its problems with real named examples, and judge whether solutions like Eko Atlantic and the new rail lines really help everyone.",

  guide: [
    {
      id: "location",
      heading: "Where is Lagos?",
      discovery: {
        problem:
          "Look at a map of Nigeria. The capital, Abuja, is right in the middle of the country, but the biggest city, Lagos, is squeezed into the far south-west corner on the coast. Why might a country's biggest city grow on the coast rather than in the centre?",
        idea:
          "Coastal sites give access to the sea for trade. Lagos grew as a port, linking Nigeria to the rest of the world, so jobs, money and people gathered there. Abuja was chosen later as a planned, central and neutral capital.",
      },
      body:
        "**Lagos** is a city in **south-west Nigeria**, a country in **West Africa**. It sits on the coast of the **Gulf of Guinea**, on the stretch of coast called the **Bight of Benin** (a *bight* is a wide, gently curving bay). It is about 6.5° north of the Equator, so it has a hot, wet **tropical climate** with a rainy season from roughly April to October.\n\nLagos is built around the **Lagos Lagoon**, a large area of shallow, salty water cut off from the Atlantic Ocean by sandbars. Part of the city is on the **mainland** (districts such as Ikeja, Yaba and Surulere) and part is on **islands** such as **Lagos Island**, **Ikoyi** and **Victoria Island**. Long bridges, including the **Third Mainland Bridge** (about 11.8 km long), connect them.\n\nLagos was **Nigeria's capital city** from independence in 1960 until **1991**, when the government moved to **Abuja**, a planned city in the centre of the country. Abuja was chosen because it was more central, less crowded and seen as neutral between Nigeria's main ethnic and religious groups. Even so, Lagos is still Nigeria's **commercial capital**: the centre of business, banking, shipping and media.\n\n- **Site** = the land a settlement is built on (lagoon, islands, low-lying coast)\n- **Situation** = where it is in relation to things around it (on the Gulf of Guinea, near the border with Benin, gateway to Nigeria's 220+ million people)\n- **Megacity** = an urban area with more than **10 million** people",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map of Lagos showing the mainland, Lagos Lagoon, Lagos Island, Victoria Island, Makoko, Eko Atlantic and the Atlantic Ocean, with a north arrow and scale bar"><rect width="320" height="210" fill="#fef9c3"/><text x="70" y="40" font-size="11" fill="#78350f">MAINLAND</text><text x="70" y="54" font-size="10" fill="#78350f">Ikeja, Yaba, Surulere</text><path d="M0,95 Q80,80 160,92 T320,85 L320,140 L0,140 Z" fill="#93c5fd"/><text x="235" y="118" font-size="10" fill="#1e3a8a">Lagos Lagoon</text><ellipse cx="120" cy="128" rx="30" ry="9" fill="#fde68a" stroke="#92400e"/><text x="120" y="131" font-size="9" text-anchor="middle" fill="#78350f">Lagos Is.</text><rect x="0" y="140" width="320" height="22" fill="#fde68a"/><text x="200" y="155" font-size="10" fill="#78350f">Victoria Island / Lekki</text><line x1="95" y1="70" x2="112" y2="120" stroke="#374151" stroke-width="2"/><text x="20" y="78" font-size="9" fill="#374151">Third Mainland Bridge</text><circle cx="75" cy="100" r="4" fill="#dc2626"/><text x="30" y="112" font-size="9" fill="#991b1b">Makoko</text><rect x="150" y="162" width="40" height="10" fill="#d1d5db" stroke="#4b5563"/><text x="150" y="182" font-size="9" fill="#374151">Eko Atlantic</text><rect x="0" y="172" width="320" height="38" fill="#60a5fa" fill-opacity="0.6"/><text x="160" y="200" font-size="10" text-anchor="middle" fill="#1e3a8a">Atlantic Ocean (Bight of Benin)</text><line x1="290" y1="45" x2="290" y2="15" stroke="#111827" stroke-width="2" marker-end="url(#location-arrow)"/><text x="290" y="58" font-size="11" text-anchor="middle" fill="#111827">N</text><line x1="230" y1="30" x2="270" y2="30" stroke="#111827" stroke-width="2"/><text x="250" y="24" font-size="9" text-anchor="middle" fill="#111827">0 - 10 km</text><defs><marker id="location-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#111827"/></marker></defs></svg>`,
      diagramCaption:
        "Sketch map (not to exact scale): Lagos wraps around a lagoon, with the mainland to the north, islands in the middle and a sandbar coast facing the Atlantic.",
      keyPoints: [
        "Lagos is in south-west Nigeria on the Gulf of Guinea (Bight of Benin), built around Lagos Lagoon and several islands.",
        "It was Nigeria's capital until 1991, when Abuja took over, but it is still the country's commercial capital.",
        "A megacity has more than 10 million people.",
      ],
      thinkDeeper:
        "Abuja became the capital in 1991, yet Lagos kept growing faster. What does this tell you about whether people follow governments or jobs when they choose where to live?",
      caseStudy: {
        place: "Lagos, Nigeria",
        facts: [
          "Location: about 6.5° N, 3.4° E, on the Gulf of Guinea in south-west Nigeria.",
          "Capital of Nigeria 1960–1991; Abuja officially became the capital in December 1991.",
          "Lagos State is Nigeria's smallest state by area (about 3,500 km²) but one of its most populous.",
          "Third Mainland Bridge: about 11.8 km long, linking the mainland to Lagos Island.",
          "Its ports (Apapa, Tin Can Island and the new Lekki Deep Sea Port, opened 2023) handle most of Nigeria's sea trade.",
        ],
      },
      skill: "Describing location using site, situation, compass directions and a sketch map",
    },
    {
      id: "growth",
      heading: "How fast has Lagos grown?",
      discovery: {
        problem:
          "Lagos had about 0.3 million people in 1950 and roughly 14 million in 2020 (UN estimate). How many times bigger is that? If London took about 150 years to grow from 1 million to 7 million, what feels different about Lagos?",
        idea:
          "Lagos grew around 45 times bigger in 70 years. Growth this fast is called rapid urbanisation, and it is far quicker than European cities grew. Services such as water, housing and transport cannot be built fast enough to keep up.",
      },
      body:
        "**Urbanisation** is the increase in the *proportion* of a country's people living in towns and cities. **Urban growth** is the increase in the *number* of people or the area of a city. Lagos has experienced both, extremely quickly.\n\n**How big is Lagos?** Nobody knows exactly, because Nigeria's last full census was in **2006** and many people live in informal areas that are hard to count. The UN estimated about **14–15 million** in the urban area around 2020; the Lagos State government claims **over 20 million**. Geographers therefore give a **range: about 15–20+ million**. Either way it is a **megacity**, and many people call it Africa's biggest city (Cairo and Kinshasa are rivals for the title, depending on how you draw the boundary).\n\n**Two causes of growth:**\n\n- **Rural–urban migration**: people moving from the countryside (and from other countries in West Africa) into the city. This is explained by **push** and **pull factors** (next section).\n- **Natural increase**: more births than deaths. **Natural increase = birth rate − death rate.** Nigeria's population is very youthful (median age about 18) and the average woman has about **5 children**. Many migrants are young adults, so they go on to have children in Lagos, adding even more people.\n\nAs healthcare in Lagos improves, the **death rate falls** faster than the birth rate, so natural increase stays high. Today natural increase is thought to be roughly as important as migration in Lagos's growth.\n\n**Calculating percentage change:** (new − old) ÷ old × 100. From 1950 (0.3 million) to 2020 (14.4 million): (14.4 − 0.3) ÷ 0.3 × 100 = **4,700%**.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of Lagos population: 1950 about 0.3 million, 1970 about 1.4 million, 1990 about 4.8 million, 2010 about 10.4 million, 2020 about 14.4 million and a projection of about 20 million for 2030"><rect width="320" height="210" fill="#ffffff"/><line x1="40" y1="20" x2="40" y2="170" stroke="#374151"/><line x1="40" y1="170" x2="310" y2="170" stroke="#374151"/><text x="12" y="173" font-size="10" fill="#374151">0</text><text x="8" y="108" font-size="10" fill="#374151">10m</text><text x="8" y="43" font-size="10" fill="#374151">20m</text><line x1="40" y1="105" x2="310" y2="105" stroke="#dc2626" stroke-dasharray="4 3"/><text x="200" y="100" font-size="10" fill="#dc2626">Megacity = 10 million</text><rect x="55" y="168" width="30" height="2" fill="#f59e0b"/><rect x="98" y="161" width="30" height="9" fill="#f59e0b"/><rect x="141" y="139" width="30" height="31" fill="#f59e0b"/><rect x="184" y="102" width="30" height="68" fill="#f59e0b"/><rect x="227" y="76" width="30" height="94" fill="#f59e0b"/><rect x="270" y="36" width="30" height="134" fill="#fde68a" stroke="#f59e0b" stroke-dasharray="4 2"/><text x="70" y="185" font-size="10" text-anchor="middle" fill="#374151">1950</text><text x="113" y="185" font-size="10" text-anchor="middle" fill="#374151">1970</text><text x="156" y="185" font-size="10" text-anchor="middle" fill="#374151">1990</text><text x="199" y="185" font-size="10" text-anchor="middle" fill="#374151">2010</text><text x="242" y="185" font-size="10" text-anchor="middle" fill="#374151">2020</text><text x="285" y="185" font-size="10" text-anchor="middle" fill="#374151">2030?</text><text x="160" y="203" font-size="10" text-anchor="middle" fill="#374151">Population of Lagos urban area (UN estimates, rounded)</text><text x="242" y="72" font-size="10" text-anchor="middle" fill="#92400e">14.4m</text><text x="70" y="163" font-size="10" text-anchor="middle" fill="#92400e">0.3m</text></svg>`,
      diagramCaption:
        "Lagos grew from about 0.3 million (1950) to about 14.4 million (2020) on UN figures; the State government's estimate is higher, at 20 million or more. The dashed bar is a projection.",
      keyPoints: [
        "Lagos grew from about 300,000 people in 1950 to an estimated 15–20+ million today (sources disagree, so quote a range).",
        "Growth has two causes: rural–urban migration and natural increase (birth rate minus death rate).",
        "Percentage change = (new − old) ÷ old × 100.",
      ],
      thinkDeeper:
        "Why might the Lagos State government's population estimate be higher than the UN's? Think about money from the national government, political influence and how the city's boundary is drawn.",
      caseStudy: {
        place: "Lagos population growth",
        facts: [
          "1950: about 0.3 million people (UN estimate).",
          "1990: about 4.8 million; 2010: about 10.4 million; 2020: about 14.4 million (UN estimates).",
          "The Lagos State government estimates over 20 million in the wider metropolitan area.",
          "Nigeria's last full census was in 2006, so all recent figures are estimates.",
          "Nigeria's fertility rate is about 5 children per woman; its median age is about 18.",
        ],
      },
      skill: "Calculating percentage change and describing a trend from a bar chart",
    },
    {
      id: "push-pull",
      heading: "Why do people move to Lagos? Push and pull factors",
      discovery: {
        problem:
          "Ade is 19 and lives on a farm in northern Nigeria. Her family's harvest failed after another dry year, the nearest secondary school is 20 km away, and her cousin in Lagos says there is work in a market. List everything that might make Ade leave, and everything that might draw her to Lagos.",
        idea:
          "You have just sorted push factors (things that drive people away from where they live) from pull factors (things that attract them to a new place). Migration usually happens when both act together, and family networks make the move easier.",
      },
      body:
        "**Migration** is the movement of people from one place to another to live. **Rural–urban migration** is the movement from the countryside to towns and cities. Geographers explain it using **push factors** (the negatives that drive people away) and **pull factors** (the positives that attract people to a place).\n\n**Push factors from rural Nigeria:**\n\n- **Poverty and low farm incomes**: most rural families are **subsistence farmers** (growing food mainly to eat, not to sell), so a bad harvest can mean hunger and debt.\n- **Drought and desertification**: in the north, the Sahara is spreading south (**desertification** = fertile land turning into desert because of drought, overgrazing and deforestation). Lake Chad has shrunk dramatically since the 1960s.\n- **Conflict**: the **Boko Haram** insurgency in the **north-east** (since about 2009) has forced more than 2 million people from their homes; clashes between farmers and herders affect central Nigeria.\n- **Lack of services**: few good schools, hospitals, clean water supplies or electricity in many villages.\n\n**Pull factors to Lagos:**\n\n- **Jobs**: in the **port**, factories, banks, shops, construction and the huge **informal economy**. Even low-paid city work usually earns more than farming.\n- **Oil wealth**: oil is pumped in the Niger Delta, but many oil companies, banks and businesses that handle the money are based in Lagos.\n- **Nollywood**: Nigeria's film industry, centred on Lagos, makes thousands of films a year (by number it is often ranked second only to India's).\n- **'Yabacon Valley'**: a nickname for the tech hub around **Yaba**, home to start-ups such as **Paystack** (bought by the US firm Stripe in 2020 for over US$200 million) and Flutterwave.\n- **Education and healthcare**: universities such as the **University of Lagos** and better-equipped hospitals.\n- **Family networks**: relatives already in Lagos offer a place to stay and help finding work. This is called **chain migration**.\n- **The 'bright lights'**: the hope of a more exciting, modern life (even if reality is harder).\n\nRemember **natural increase** too: migration brings in young adults, who then have children in the city.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Push and pull diagram: push factors in rural Nigeria drive migrants towards Lagos, where pull factors attract them; obstacles in between"><rect width="320" height="200" fill="#ffffff"/><rect x="5" y="20" width="110" height="160" rx="8" fill="#fee2e2" stroke="#dc2626"/><text x="60" y="38" font-size="11" text-anchor="middle" font-weight="bold" fill="#991b1b">Rural Nigeria</text><text x="60" y="52" font-size="10" text-anchor="middle" fill="#991b1b">PUSH</text><text x="12" y="72" font-size="10" fill="#7f1d1d">poverty</text><text x="12" y="88" font-size="10" fill="#7f1d1d">drought</text><text x="12" y="104" font-size="10" fill="#7f1d1d">Boko Haram</text><text x="12" y="120" font-size="10" fill="#7f1d1d">few schools</text><text x="12" y="136" font-size="10" fill="#7f1d1d">poor healthcare</text><text x="12" y="152" font-size="10" fill="#7f1d1d">low farm income</text><rect x="205" y="20" width="110" height="160" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="260" y="38" font-size="11" text-anchor="middle" font-weight="bold" fill="#14532d">Lagos</text><text x="260" y="52" font-size="10" text-anchor="middle" fill="#14532d">PULL</text><text x="212" y="72" font-size="10" fill="#14532d">jobs, port</text><text x="212" y="88" font-size="10" fill="#14532d">oil money</text><text x="212" y="104" font-size="10" fill="#14532d">Nollywood</text><text x="212" y="120" font-size="10" fill="#14532d">Yabacon Valley</text><text x="212" y="136" font-size="10" fill="#14532d">universities</text><text x="212" y="152" font-size="10" fill="#14532d">family networks</text><line x1="118" y1="90" x2="200" y2="90" stroke="#1e3a8a" stroke-width="3" marker-end="url(#push-pull-arrow)"/><text x="160" y="82" font-size="10" text-anchor="middle" fill="#1e3a8a">migrants</text><rect x="135" y="115" width="50" height="45" rx="4" fill="#f3f4f6" stroke="#6b7280"/><text x="160" y="130" font-size="9" text-anchor="middle" fill="#374151">obstacles:</text><text x="160" y="142" font-size="9" text-anchor="middle" fill="#374151">cost, distance,</text><text x="160" y="154" font-size="9" text-anchor="middle" fill="#374151">leaving family</text><defs><marker id="push-pull-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#1e3a8a"/></marker></defs></svg>`,
      diagramCaption:
        "Push factors drive people out of rural Nigeria; pull factors attract them to Lagos. Obstacles such as cost and distance stand in the way.",
      keyPoints: [
        "Push factors: poverty, low farm incomes, drought/desertification, conflict (Boko Haram in the north-east), lack of schools and healthcare.",
        "Pull factors: jobs, the port, oil wealth, Nollywood, Yabacon Valley tech hub, education, family networks.",
        "Natural increase adds to growth because many migrants are young adults who start families in Lagos.",
      ],
      thinkDeeper:
        "Is 'lack of schools' a push factor or is 'universities in Lagos' a pull factor — or are they two sides of the same coin? Can you find a push and pull pair for every factor in the list?",
      caseStudy: {
        place: "Migration into Lagos",
        facts: [
          "Boko Haram's insurgency in north-east Nigeria (from about 2009) has displaced more than 2 million people.",
          "Lake Chad, on Nigeria's north-east border, has lost most of its surface area since the 1960s.",
          "Nollywood releases thousands of films a year, many made in Lagos.",
          "Paystack, founded in Lagos in 2015, was bought by Stripe in 2020 for over US$200 million.",
          "Nigeria's population is about 220–230 million and still growing quickly.",
        ],
      },
      skill: "Classifying push and pull factors and writing a PEEL paragraph to explain migration",
    },
    {
      id: "informal-settlements",
      heading: "Makoko and the informal city",
      discovery: {
        problem:
          "Thousands of people in Lagos live in wooden houses on stilts above the lagoon, travelling by canoe. Land on the shore is cheaper than in Singapore, so why would anyone build over the water?",
        idea:
          "Land in central Lagos is very expensive and controlled by others. Building over the water costs nothing to buy and keeps people close to fishing and to city jobs. Informal settlements grow where the poor can find space, not where planners intend.",
      },
      body:
        "An **informal settlement** (often called a **slum** or shanty town) is an area of housing built without legal permission, usually on land the residents do not own, and usually lacking proper services such as clean water, sewers and electricity. The UN estimates that a large share of Lagos's people (often quoted as more than half) live in informal or substandard housing.\n\n**Makoko** is Lagos's most famous informal settlement. It is a **'floating slum'**: thousands of wooden houses built on **stilts** over the **Lagos Lagoon**, beside the Third Mainland Bridge. It began in the 19th century as a fishing village, and many residents are Egun people whose families came from neighbouring Benin. Population estimates range widely, from about **40,000 to over 100,000**.\n\n**Life in Makoko:**\n\n- People travel by **canoe**; children may paddle to school.\n- **Fishing** and smoking fish, sawmilling and trading are the main jobs.\n- There is **no sewerage**: toilets drop waste straight into the water, so diseases such as cholera and diarrhoea spread easily.\n- Few homes have legal electricity or piped water.\n- Residents risk **eviction**: in **2012** the government demolished part of Makoko with little warning, and in **2017** around 30,000 people were evicted from **Otodo-Gbame**, another waterfront community.\n\n**The informal economy** is all the work that is not registered, taxed or protected by law: street hawkers selling drinks to drivers stuck in traffic, market traders, waste pickers, **danfo** minibus conductors, **okada** motorbike-taxi riders and tailors working from home. More than half of Lagos's workers are thought to work informally.\n\n- **Advantages**: easy to start, provides cheap goods and services, gives newcomers an income immediately.\n- **Disadvantages**: low and unreliable pay, no sick pay or pension, no protection from harassment or eviction, and the government collects no tax to spend on services.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a Makoko stilt house above the lagoon, with a canoe, waste dropping into the water and wooden stilts in the lagoon bed"><rect width="320" height="200" fill="#e0f2fe"/><rect x="0" y="120" width="320" height="60" fill="#60a5fa"/><rect x="0" y="180" width="320" height="20" fill="#a16207"/><text x="250" y="195" font-size="10" fill="#fef3c7">lagoon bed (mud)</text><polygon points="90,55 160,30 230,55" fill="#a8a29e" stroke="#57534e"/><rect x="95" y="55" width="130" height="45" fill="#d6a76c" stroke="#78350f"/><rect x="140" y="70" width="18" height="30" fill="#78350f"/><rect x="85" y="100" width="150" height="6" fill="#92400e"/><line x1="100" y1="106" x2="100" y2="182" stroke="#78350f" stroke-width="4"/><line x1="160" y1="106" x2="160" y2="182" stroke="#78350f" stroke-width="4"/><line x1="220" y1="106" x2="220" y2="182" stroke="#78350f" stroke-width="4"/><text x="240" y="45" font-size="10" fill="#374151">rusty metal roof</text><text x="232" y="80" font-size="10" fill="#374151">wooden walls</text><text x="5" y="150" font-size="10" fill="#1e3a8a">stilts driven into mud</text><path d="M20,125 Q45,140 70,125 Z" fill="#7c2d12"/><text x="12" y="118" font-size="10" fill="#374151">canoe</text><line x1="200" y1="106" x2="200" y2="135" stroke="#4b5563" stroke-dasharray="3 3"/><text x="205" y="140" font-size="10" fill="#7f1d1d">sewage into water</text><text x="160" y="16" font-size="11" text-anchor="middle" fill="#111827">Makoko stilt house (cross-section)</text></svg>`,
      diagramCaption:
        "A Makoko house: wooden stilts in the lagoon mud, a canoe for transport and no sewer, so waste goes straight into the water people fish in.",
      keyPoints: [
        "Informal settlement = housing built without legal permission, lacking basic services.",
        "Makoko is a floating slum on stilts on Lagos Lagoon; population estimates vary from about 40,000 to 100,000+.",
        "The informal economy (hawkers, okada riders, waste pickers) employs more than half of Lagos's workers but is unprotected and untaxed.",
      ],
      thinkDeeper:
        "The government says demolishing waterfront slums reduces disease and crime; residents say it destroys homes and jobs. Who should decide what happens to Makoko, and what evidence would you want before deciding?",
      caseStudy: {
        place: "Makoko, Lagos Lagoon",
        facts: [
          "Founded as a fishing village in the 19th century; many residents are Egun people with roots in Benin.",
          "Population estimates range from about 40,000 to over 100,000.",
          "Partly demolished by the Lagos State government in July 2012.",
          "No sewerage system: waste goes straight into the lagoon.",
          "Makoko Floating School (2013) was built on about 250 plastic barrels; it collapsed in a storm in 2016.",
        ],
      },
      skill: "Annotating a cross-section and weighing advantages against disadvantages",
    },
    {
      id: "urban-problems",
      heading: "Problems of a fast-growing megacity",
      discovery: {
        problem:
          "In Singapore the MRT arrives every few minutes, tap water is safe to drink and the lights almost never go out. Imagine a city of the same type but with roughly three times the people, a road network designed for a few million and little new investment for decades. Predict five problems before you read on.",
        idea:
          "When population grows faster than infrastructure (roads, pipes, drains, power stations, homes), shortages and overcrowding follow. Most Lagos problems are linked: one problem makes another worse.",
      },
      body:
        "**Infrastructure** means the basic services a city needs to work: roads, railways, water pipes, sewers, drains, power lines and waste collection. In Lagos, population has grown far faster than infrastructure.\n\n**1. Traffic 'go-slows'.** A **go-slow** is the Nigerian name for a traffic jam. Millions commute every day from the mainland to jobs on the islands across a few bridges. Journeys of 2–4 hours each way are common. Lost time, wasted fuel and **air pollution** from old vehicles and generators harm both the economy and health.\n\n**2. Waste.** Lagos produces well over 10,000 tonnes of rubbish a day. Much of it goes to **Olusosun landfill** in Ojota, one of Africa's largest dumps (about 40 hectares, opened in 1992). Thousands of **waste pickers** earn a living sorting plastics and metals there, but it releases toxic smoke and methane; a huge fire broke out in **2018**. Uncollected rubbish also **blocks drains**.\n\n**3. Water shortages.** Only a small minority of homes get piped water from the state water company. Most people dig **boreholes**, buy from **water vendors** or drink sachet 'pure water', which costs the poor far more per litre than the rich pay.\n\n**4. Electricity shortages.** Nigeria's national grid supplies only around **4,000–5,000 megawatts** for over 200 million people, so power cuts are daily. Homes and businesses rely on noisy, polluting **diesel and petrol generators**.\n\n**5. Flooding.** Much of Lagos is **low-lying** (often less than 2 m above sea level) and receives about 1,500 mm or more of rain a year, mostly in the rainy season. Blocked drains, building on **wetlands** and paved surfaces mean water cannot drain away. **Sea-level rise** and coastal erosion add to the risk.\n\n**6. Crime.** Poverty, unemployment and overcrowding are linked to robbery, gangs of 'area boys' and kidnapping in some areas, although most Lagosians are law-abiding and many neighbourhoods are safe.\n\nThese problems form a **vicious circle**: e.g. rubbish blocks drains → floods → disease and damaged roads → worse traffic.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spider diagram: rapid population growth in the centre linked to traffic, waste, water shortage, power cuts, flooding, informal housing and crime"><rect width="320" height="210" fill="#ffffff"/><ellipse cx="160" cy="105" rx="58" ry="24" fill="#fde68a" stroke="#b45309"/><text x="160" y="102" font-size="11" text-anchor="middle" fill="#78350f">Rapid growth</text><text x="160" y="115" font-size="10" text-anchor="middle" fill="#78350f">&gt; infrastructure</text><g stroke="#6b7280" stroke-width="1.5"><line x1="130" y1="85" x2="70" y2="40"/><line x1="190" y1="85" x2="250" y2="40"/><line x1="102" y1="105" x2="62" y2="105"/><line x1="218" y1="105" x2="258" y2="105"/><line x1="130" y1="126" x2="70" y2="170"/><line x1="190" y1="126" x2="250" y2="170"/><line x1="160" y1="129" x2="160" y2="180"/></g><rect x="20" y="22" width="100" height="22" rx="5" fill="#fee2e2"/><text x="70" y="37" font-size="10" text-anchor="middle" fill="#7f1d1d">Go-slows</text><rect x="200" y="22" width="100" height="22" rx="5" fill="#fee2e2"/><text x="250" y="37" font-size="10" text-anchor="middle" fill="#7f1d1d">Waste (Olusosun)</text><rect x="2" y="94" width="60" height="22" rx="5" fill="#dbeafe"/><text x="32" y="109" font-size="10" text-anchor="middle" fill="#1e3a8a">Water</text><rect x="258" y="94" width="60" height="22" rx="5" fill="#fef3c7"/><text x="288" y="109" font-size="10" text-anchor="middle" fill="#78350f">Power cuts</text><rect x="20" y="166" width="100" height="22" rx="5" fill="#dbeafe"/><text x="70" y="181" font-size="10" text-anchor="middle" fill="#1e3a8a">Flooding</text><rect x="200" y="166" width="100" height="22" rx="5" fill="#ede9fe"/><text x="250" y="181" font-size="10" text-anchor="middle" fill="#4c1d95">Crime</text><rect x="115" y="180" width="90" height="22" rx="5" fill="#f3f4f6"/><text x="160" y="195" font-size="10" text-anchor="middle" fill="#374151">Slums (Makoko)</text></svg>`,
      diagramCaption:
        "When a city grows faster than its infrastructure, many linked problems appear at once.",
      keyPoints: [
        "Infrastructure (roads, pipes, drains, power) has not kept up with population growth.",
        "Key problems: go-slows, waste (Olusosun landfill), water and electricity shortages, flooding, crime, informal housing.",
        "Problems are linked: blocked drains cause floods, floods damage roads and spread disease.",
      ],
      thinkDeeper:
        "Pick one problem and trace a chain of at least four consequences. Which single investment would break the most chains at once?",
      caseStudy: {
        place: "Olusosun landfill, Ojota, Lagos",
        facts: [
          "Opened in 1992; covers about 40 hectares.",
          "One of the largest landfill sites in Africa, receiving thousands of tonnes of waste a day.",
          "Thousands of informal waste pickers sort and sell recyclable plastic and metal.",
          "A major fire in March 2018 sent toxic smoke over nearby homes.",
        ],
      },
      skill: "Drawing a spider diagram of linked problems and explaining chains of cause and effect",
    },
    {
      id: "solutions",
      heading: "Opportunities and solutions: Eko Atlantic, BRT, rail and floating schools",
      discovery: {
        problem:
          "Lagos is short of land, so a developer pumped sand from the seabed to build a brand-new district in the Atlantic Ocean, protected by a giant sea wall. Singapore has also grown by reclaiming land. Who do you think will live in the new Lagos district, and who might lose out?",
        idea:
          "Big 'megaprojects' can bring investment and protection from the sea, but they can also create enclaves for the rich and push problems elsewhere. Good solutions must be judged by who benefits and who pays.",
      },
      body:
        "Lagos is not only a city of problems. It is also a city of **opportunity**: a young, entrepreneurial population, a booming tech and film scene and governments trying big new ideas. Here are the main **solutions** you need to know and **evaluate** (judge strengths and weaknesses).\n\n**Eko Atlantic** is a new city district being built on about **10 km²** of land **reclaimed** from the Atlantic Ocean next to Victoria Island. (**Land reclamation** = creating new land from sea or wetland, usually by pumping in sand.) It is protected by the **'Great Wall of Lagos'**, a sea wall about **8.5 km** long made from around 100,000 concrete blocks of about 5 tonnes each. Work began around **2008–2009**; it is planned for about 250,000 residents.\n\n- **Benefits**: protects Victoria Island from erosion and storm surges; attracts foreign investment; new offices and homes; its own power, water and drainage.\n- **Criticism**: luxury flats are far too expensive for ordinary Lagosians, so critics call it an **enclave for the rich** or 'climate apartheid'; the sea wall may increase **erosion** on neighbouring beaches; it does nothing for slums such as Makoko.\n\n**Bus Rapid Transit (BRT)**: in **2008** Lagos opened sub-Saharan Africa's first BRT scheme, with buses running in **dedicated lanes** (first route about 22 km from Mile 12 to CMS). At its peak it carried around 200,000 passengers a day, more cheaply and faster than danfos.\n\n**Lagos Rail Mass Transit**: a metro was first planned in the 1980s and then cancelled. Finally the **Blue Line** (Marina to Mile 2, about 13 km, 5 stations) opened in **2023**, and the **Red Line** (Agbado to Oyingbo, about 27 km) opened in **2024**. Electric trains cut journey times and pollution, though the lines are still short for a city this size.\n\n**Makoko Floating School**: designed by Nigerian architect **Kunlé Adeyemi** and built in **2013**, a three-storey A-frame school floating on about 250 recycled plastic barrels, with solar panels and rainwater collection. It showed a **low-cost, bottom-up** way to adapt to rising water. It collapsed in heavy rain in **2016**, but the design inspired later floating buildings worldwide.\n\n**Other opportunities**: Lekki Deep Sea Port (2023), recycling schemes that pay people for plastic, and the creative industries of Nollywood and Afrobeats.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Eko Atlantic: ocean waves hit the Great Wall sea wall, which protects reclaimed sand land with tall buildings, next to Victoria Island"><rect width="320" height="200" fill="#e0f2fe"/><rect x="0" y="130" width="90" height="70" fill="#3b82f6"/><text x="10" y="190" font-size="10" fill="#ffffff">Atlantic Ocean</text><path d="M0,130 Q10,122 20,130 T40,130 T60,130 T80,130" fill="none" stroke="#ffffff" stroke-width="2"/><polygon points="88,200 100,105 115,105 125,200" fill="#9ca3af" stroke="#374151"/><text x="62" y="98" font-size="10" fill="#111827">Great Wall</text><text x="62" y="86" font-size="9" fill="#374151">8.5 km sea wall</text><rect x="125" y="120" width="120" height="80" fill="#fcd34d"/><text x="140" y="175" font-size="10" fill="#78350f">reclaimed sand</text><text x="140" y="188" font-size="9" fill="#78350f">dredged from seabed</text><rect x="140" y="60" width="18" height="60" fill="#64748b"/><rect x="165" y="40" width="20" height="80" fill="#475569"/><rect x="192" y="70" width="16" height="50" fill="#64748b"/><rect x="214" y="55" width="20" height="65" fill="#475569"/><text x="185" y="32" font-size="10" text-anchor="middle" fill="#111827">Eko Atlantic towers</text><rect x="245" y="130" width="75" height="70" fill="#d6d3d1"/><text x="282" y="160" font-size="10" text-anchor="middle" fill="#292524">Victoria</text><text x="282" y="172" font-size="10" text-anchor="middle" fill="#292524">Island</text><rect x="255" y="110" width="12" height="20" fill="#a8a29e"/><rect x="275" y="115" width="12" height="15" fill="#a8a29e"/><line x1="40" y1="60" x2="95" y2="110" stroke="#1e3a8a" stroke-width="2" marker-end="url(#solutions-arrow)"/><text x="5" y="55" font-size="10" fill="#1e3a8a">storm waves</text><defs><marker id="solutions-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#1e3a8a"/></marker></defs></svg>`,
      diagramCaption:
        "Eko Atlantic: sand dredged from the seabed creates new land, protected from Atlantic storm waves by an 8.5 km sea wall.",
      keyPoints: [
        "Eko Atlantic: about 10 km² of reclaimed land with an 8.5 km sea wall — protects the coast and attracts investment, but criticised as an enclave for the rich.",
        "BRT (2008) and the Lagos Rail Mass Transit Blue Line (2023) and Red Line (2024) tackle go-slows.",
        "Makoko Floating School (2013) was a low-cost, community-scale idea for living with water.",
      ],
      thinkDeeper:
        "Top-down solutions (Eko Atlantic, rail lines) are planned by governments and big companies; bottom-up solutions (floating school, recycling co-operatives) start in communities. Which type helps the poorest Lagosians most quickly, and which changes the city most in the long run?",
      caseStudy: {
        place: "Lagos transport projects",
        facts: [
          "BRT-Lite opened in March 2008: about 22 km from Mile 12 to CMS, the first BRT in sub-Saharan Africa.",
          "Blue Line phase 1 (Marina–Mile 2, about 13 km, 5 stations) began passenger service in September 2023.",
          "Red Line (Agbado–Oyingbo, about 27 km) was opened in 2024.",
          "A Lagos metro was first planned in the early 1980s but cancelled in 1985.",
          "Eko Atlantic: about 10 km² reclaimed; planned for around 250,000 residents.",
        ],
      },
      skill: "Evaluating a solution: who benefits, who loses, short term vs long term",
    },
    {
      id: "lagos-speech",
      heading: "Skill: writing the persuasive 'Lagos speech' (optional)",
      discovery: {
        problem:
          "Two speakers address the Governor of Lagos. One says: 'Lagos has some traffic issues.' The other says: 'Every morning, millions of Lagosians sit in a go-slow for up to four hours — that is more than a whole working day lost every week. Would you accept that for your children?' Which is more persuasive, and exactly why?",
        idea:
          "Persuasive writing uses specific evidence, emotive language, rhetorical questions and direct address. Geography gives you the facts; rhetoric makes people care about them.",
      },
      body:
        "A **persuasive speech** tries to convince an audience to agree with a point of view and to act. In the optional **Lagos speech** you might speak as a resident, a planner or a campaigner, arguing for example that **'Lagos is a city of opportunity, not just problems'** or that **'the government must invest in Makoko, not just Eko Atlantic'**.\n\n**A strong structure:**\n\n- **Hook**: a striking fact, question or short story (e.g. *'In 1950, 300,000 people lived here. Today, more than 15 million do.'*).\n- **Position**: state clearly what you want your audience to believe or do.\n- **Three arguments**, each as a **PEEL** paragraph: **P**oint, **E**vidence (named place, figure or date), **E**xplanation (why it matters), **L**ink back to your position.\n- **Counter-argument and rebuttal**: admit what the other side says, then show why your view is still stronger.\n- **Call to action**: tell the audience exactly what to do next.\n\n**Persuasive techniques (remember 'AFOREST'):** **A**lliteration, **F**acts, **O**pinions, **R**hetorical questions, **E**motive language, **S**tatistics, **T**riples (rule of three). Also use **direct address** ('you', 'we') and **repetition**.\n\n**Geography still earns the marks**: a speech packed with passion but no Lagos-specific evidence (Makoko, Olusosun, BRT 2008, Blue Line 2023, Eko Atlantic) will not score highly. Aim for at least one accurate statistic per paragraph.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Speech structure ladder: hook, position, three PEEL arguments, counter-argument and rebuttal, call to action"><rect width="320" height="210" fill="#ffffff"/><rect x="60" y="8" width="200" height="24" rx="6" fill="#fde68a" stroke="#b45309"/><text x="160" y="24" font-size="11" text-anchor="middle" fill="#78350f">1 Hook: fact, question, story</text><rect x="60" y="40" width="200" height="24" rx="6" fill="#fef3c7" stroke="#b45309"/><text x="160" y="56" font-size="11" text-anchor="middle" fill="#78350f">2 Position: what you want</text><rect x="20" y="72" width="88" height="44" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="64" y="90" font-size="10" text-anchor="middle" fill="#14532d">Argument 1</text><text x="64" y="104" font-size="10" text-anchor="middle" fill="#14532d">PEEL</text><rect x="116" y="72" width="88" height="44" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="160" y="90" font-size="10" text-anchor="middle" fill="#14532d">Argument 2</text><text x="160" y="104" font-size="10" text-anchor="middle" fill="#14532d">PEEL</text><rect x="212" y="72" width="88" height="44" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="256" y="90" font-size="10" text-anchor="middle" fill="#14532d">Argument 3</text><text x="256" y="104" font-size="10" text-anchor="middle" fill="#14532d">PEEL</text><rect x="40" y="126" width="240" height="24" rx="6" fill="#ede9fe" stroke="#7c3aed"/><text x="160" y="142" font-size="11" text-anchor="middle" fill="#4c1d95">Counter-argument + rebuttal</text><rect x="60" y="160" width="200" height="24" rx="6" fill="#fee2e2" stroke="#dc2626"/><text x="160" y="176" font-size="11" text-anchor="middle" fill="#7f1d1d">Call to action</text><text x="160" y="202" font-size="10" text-anchor="middle" fill="#374151">Evidence in every paragraph: places, numbers, dates</text></svg>`,
      diagramCaption:
        "A persuasive speech ladder: hook the audience, state your position, prove it with three PEEL arguments, beat the counter-argument, then call for action.",
      keyPoints: [
        "Structure: hook, position, three PEEL arguments, counter-argument and rebuttal, call to action.",
        "Techniques: rhetorical questions, emotive language, statistics, rule of three, direct address.",
        "Accurate Lagos evidence (named places, figures, dates) is what turns a passionate speech into a top-mark geography answer.",
      ],
      thinkDeeper:
        "Write the strongest possible counter-argument to your own speech. If you cannot rebut it convincingly, should you change your position?",
      skill: "Writing a persuasive speech using PEEL paragraphs and rhetorical techniques",
    },
    {
      id: "las-vegas",
      heading: "Contrast (optional): Las Vegas, a city in the desert",
      discovery: {
        problem:
          "Lagos gets about 1,500 mm of rain a year and still struggles to supply water. Las Vegas gets only about 100 mm a year, yet over 2 million people live there with green lawns, fountains and swimming pools. Where could the water come from?",
        idea:
          "Las Vegas depends almost entirely on water brought from the Colorado River and stored in Lake Mead behind the Hoover Dam. A city's problems depend on investment and management as well as on its natural environment.",
      },
      body:
        "**Las Vegas** is in the state of **Nevada**, in the south-west **USA**, in the **Mojave Desert**. It receives only about **100 mm of rain a year** and summer temperatures often exceed 40 °C (a record of about 49 °C was set in July 2024).\n\n**Fast growth:** in 1950 the Las Vegas area had only tens of thousands of people; today the metropolitan area has about **2.3 million**. Pull factors include jobs in **tourism, casinos, hotels and construction**, cheaper housing than neighbouring California, no state income tax and a sunny climate attractive to **retirees**. Unlike Lagos, most growth is from migration within the USA, not natural increase.\n\n**Water:** about **90%** of the city's water comes from **Lake Mead**, a reservoir on the **Colorado River** created by the **Hoover Dam** (completed in the 1930s). A long **drought** since about 2000 has lowered Lake Mead dramatically; in 2022 it fell to its lowest level since it was first filled. Las Vegas built a deeper intake (the **'third straw'**, finished 2020) so it can still draw water if the lake keeps falling.\n\n**Sustainability concerns and responses:**\n\n- High water use per person, golf courses and fountains in a desert.\n- Huge energy use for **air-conditioning**; an **urban heat island** (city hotter than surrounding countryside).\n- Responses: paying people to rip out grass lawns ('cash for grass'), a 2021 Nevada law banning decorative (non-functional) grass by 2027, recycling almost all indoor water back into Lake Mead, and solar power.\n\n**Comparing with Lagos:** both cities grew fast and face water challenges, but Las Vegas has a rich government, strong planning and reliable infrastructure, so its main problem is long-term **sustainability**; Lagos's main problem is that infrastructure has not kept pace at all. Singapore, which also imports water (from Johor) and recycles it as **NEWater**, is a useful third comparison.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram of Las Vegas water supply: Colorado River to Lake Mead and Hoover Dam to intake to Las Vegas, with treated water returned to Lake Mead; inset bars compare annual rainfall of Lagos about 1500 mm and Las Vegas about 100 mm"><rect width="320" height="200" fill="#fffbeb"/><path d="M10,20 Q40,40 60,60" fill="none" stroke="#2563eb" stroke-width="5"/><text x="10" y="14" font-size="10" fill="#1e3a8a">Colorado River</text><ellipse cx="85" cy="80" rx="40" ry="20" fill="#93c5fd" stroke="#1d4ed8"/><text x="85" y="84" font-size="10" text-anchor="middle" fill="#1e3a8a">Lake Mead</text><rect x="122" y="70" width="8" height="25" fill="#6b7280"/><text x="108" y="112" font-size="9" fill="#374151">Hoover Dam</text><line x1="90" y1="100" x2="170" y2="150" stroke="#1d4ed8" stroke-width="2" marker-end="url(#las-vegas-arrow)"/><text x="98" y="140" font-size="9" fill="#1e3a8a">90% of supply</text><rect x="170" y="140" width="70" height="30" rx="5" fill="#fde68a" stroke="#b45309"/><text x="205" y="159" font-size="10" text-anchor="middle" fill="#78350f">Las Vegas</text><path d="M205,140 Q200,95 125,85" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#las-vegas-arrow2)"/><text x="170" y="100" font-size="9" fill="#166534">treated water returned</text><line x1="250" y1="180" x2="315" y2="180" stroke="#374151"/><rect x="258" y="40" width="22" height="140" fill="#3b82f6"/><rect x="290" y="171" width="22" height="9" fill="#f59e0b"/><text x="269" y="34" font-size="9" text-anchor="middle" fill="#1e3a8a">Lagos</text><text x="269" y="192" font-size="9" text-anchor="middle" fill="#374151">~1500</text><text x="301" y="165" font-size="9" text-anchor="middle" fill="#92400e">Vegas</text><text x="301" y="192" font-size="9" text-anchor="middle" fill="#374151">~100</text><text x="282" y="20" font-size="9" text-anchor="middle" fill="#374151">rain mm/yr</text><defs><marker id="las-vegas-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#1d4ed8"/></marker><marker id="las-vegas-arrow2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#16a34a"/></marker></defs></svg>`,
      diagramCaption:
        "Las Vegas takes about 90% of its water from Lake Mead on the Colorado River and returns treated indoor water to the lake. It gets about one-fifteenth of Lagos's rainfall.",
      keyPoints: [
        "Las Vegas is a fast-growing desert city in Nevada (about 100 mm of rain a year, metro population about 2.3 million).",
        "About 90% of its water comes from Lake Mead on the Colorado River, which has fallen sharply in a long drought.",
        "Its challenge is sustainability (water, heat, energy), while Lagos's is infrastructure keeping up with growth.",
      ],
      thinkDeeper:
        "Las Vegas has far less rain than Lagos but more reliable tap water. What does this tell you about whether physical geography or human decisions matter more for a city's water supply?",
      caseStudy: {
        place: "Las Vegas, Nevada, USA",
        facts: [
          "Located in the Mojave Desert; annual rainfall about 100 mm.",
          "Metropolitan population about 2.3 million, up from tens of thousands in 1950.",
          "About 90% of water comes from Lake Mead, created by the Hoover Dam on the Colorado River.",
          "Lake Mead reached its lowest level since first filling in 2022; a deeper 'third straw' intake was finished in 2020.",
          "A 2021 Nevada law bans decorative grass in the Las Vegas area by 2027.",
        ],
      },
      skill: "Comparing two cities using similarities and differences",
    },
  ],

  mnemonics: [
    {
      topic: "Push factors from rural Nigeria",
      device: "Poor Dry Countryside Lacks Schools (P-D-C-L-S)",
      explanation:
        "Poverty and low farm incomes; Drought and desertification; Conflict (Boko Haram in the north-east); Lack of healthcare; Schools are few.",
    },
    {
      topic: "Pull factors to Lagos",
      device: "'Just One New Exciting Start For You' — J-O-N-E-S-F-Y",
      explanation:
        "Jobs; Oil wealth handled by Lagos firms; Nollywood; Education (University of Lagos); Seaport (Apapa, Lekki); Family networks (chain migration); Yabacon Valley tech hub.",
    },
    {
      topic: "The main problems of Lagos",
      device: "'Terrible Waste Will Eventually Flood Cities' — Traffic, Waste, Water, Electricity, Flooding, Crime",
      explanation:
        "Traffic go-slows; Waste (Olusosun landfill); Water shortages; Electricity cuts; Flooding; Crime. Add 'slums (Makoko)' as the setting where they all meet.",
    },
    {
      topic: "Lagos transport timeline",
      device: "'Buses at 8, Blue at 23, Red at 24'",
      explanation:
        "BRT buses opened in 2008, the Blue Line rail opened in 2023 and the Red Line in 2024.",
    },
  ],

  examMistakes: [
    "Giving a single exact population figure for Lagos as if it were certain — say 'an estimated 15–20+ million' and mention that sources disagree.",
    "Mixing up push and pull factors: 'jobs in Lagos' is a pull factor; 'no jobs in the village' is a push factor.",
    "Forgetting natural increase: Lagos grows from births as well as migration.",
    "Saying Lagos is Nigeria's capital — Abuja has been the capital since 1991.",
    "Writing vague answers such as 'slums are bad' instead of naming Makoko and giving a specific problem (no sewerage, eviction in 2012).",
    "Describing Eko Atlantic only as a success — evaluation questions need both benefits and criticisms, plus a judgement.",
    "Listing problems without explaining the link to rapid growth (e.g. population grew faster than roads and drains could be built).",
    "In data questions, not quoting figures from the table or getting the percentage-change formula upside down (divide by the OLD value).",
  ],

  misconceptions: [
    {
      wrong: "Lagos is the capital of Nigeria.",
      right: "Lagos was the capital until 1991; Abuja is the capital now. Lagos remains the commercial capital and biggest city.",
    },
    {
      wrong: "Everyone in an informal settlement is unemployed.",
      right: "Most residents of places like Makoko work — fishing, trading, sawmilling, hawking — but in the informal economy, with low and unreliable pay.",
    },
    {
      wrong: "Lagos grows only because people migrate there.",
      right: "Natural increase (births minus deaths) is now roughly as important as migration, because the population is young and fertility is high.",
    },
    {
      wrong: "Megaprojects like Eko Atlantic solve the problems of ordinary Lagosians.",
      right: "Eko Atlantic protects part of the coast and attracts investment, but its homes are mostly for the wealthy and it does little for slums or traffic on the mainland.",
    },
    {
      wrong: "Desert cities must run out of water and rainy cities never do.",
      right: "Water supply depends on infrastructure and management: dry Las Vegas has reliable tap water from Lake Mead, while rainy Lagos has shortages because pipes and treatment have not kept up.",
    },
    {
      wrong: "Migrants move to Lagos because life there is easy.",
      right: "Life in Lagos can be very hard; people move because their chances of earning money and getting services are still better than in poor or unsafe rural areas.",
    },
  ],

  expertDebates: [
    {
      question: "Should informal settlements like Makoko be cleared or upgraded?",
      detail:
        "Some officials argue that waterfront slums are unsafe, unhealthy and block development, so residents should be moved. Many geographers and NGOs argue that eviction destroys livelihoods and communities, and that 'in-situ upgrading' (adding toilets, clean water, schools and legal land rights where people already live) is fairer and cheaper. Most experts now favour upgrading, but land in central Lagos is extremely valuable, so the debate continues.",
    },
    {
      question: "Is Eko Atlantic a model for climate-proof cities or 'climate apartheid'?",
      detail:
        "Supporters say it protects Victoria Island from Atlantic storm surges, creates jobs and shows that African cities can attract world-class investment. Critics say it builds a private, protected city for the rich while poorer coastal communities face more erosion and flooding. Both sides agree that sea-level rise is a real threat to Lagos; they disagree about who should be protected first.",
    },
    {
      question: "How many people really live in Lagos?",
      detail:
        "The UN estimates around 15 million in the urban area; the Lagos State government says over 20 million. Differences come from where the boundary is drawn, the lack of a census since 2006 and political and financial reasons for wanting a higher or lower count. Geographers therefore quote a range and name their source.",
    },
  ],

  realWorld: [
    {
      title: "Singapore's MRT vs the Lagos Blue Line",
      detail:
        "Singapore opened its first MRT line in 1987 and now has well over 200 km of rail. Lagos's Blue Line opened in 2023 with about 13 km — a reminder of how much Lagos still has to build, and why rail matters for a megacity.",
      emoji: "🚇",
    },
    {
      title: "Reclaimed land in Singapore and Lagos",
      detail:
        "Singapore has grown by about a quarter in area since the 1960s through land reclamation, including Marina Bay. Eko Atlantic uses the same technique of pumping sand from the seabed — compare who gets to live on the new land in each city.",
      emoji: "🏗️",
    },
    {
      title: "Nigerian music and films in your playlist",
      detail:
        "Afrobeats stars and Nollywood films on streaming services are products of Lagos's creative economy — a pull factor that brings young people to the city.",
      emoji: "🎬",
    },
    {
      title: "Paying by phone",
      detail:
        "Lagos fintech start-ups such as Paystack and Flutterwave process online payments across Africa, much as Singapore's PayNow and GrabPay do here. 'Yabacon Valley' is a real pull factor for skilled young Nigerians.",
      emoji: "📱",
    },
    {
      title: "Where does your rubbish go?",
      detail:
        "Singapore incinerates most waste and puts the ash on Pulau Semakau, an offshore landfill. Lagos sends much of its waste to open landfills like Olusosun, where waste pickers recycle by hand.",
      emoji: "🗑️",
    },
    {
      title: "Water from far away",
      detail:
        "Las Vegas pipes in water from Lake Mead; Singapore imports some water from Johor and recycles the rest as NEWater. Both show how cities can secure water by investment, not just rainfall.",
      emoji: "💧",
    },
  ],

  flashcards: [
    { front: "Where is Lagos?", back: "South-west Nigeria, West Africa, on the Gulf of Guinea (Bight of Benin), built around Lagos Lagoon and islands." },
    { front: "When did Lagos stop being Nigeria's capital?", back: "1991, when the capital moved to Abuja, a planned city in the centre of Nigeria." },
    { front: "Megacity", back: "An urban area with more than 10 million people." },
    { front: "Population of Lagos: 1950 vs today", back: "About 300,000 in 1950; an estimated 15–20+ million today (UN about 15 million; Lagos State government 20 million+)." },
    { front: "Rural–urban migration", back: "The movement of people from the countryside to towns and cities." },
    { front: "Push factor", back: "Something that drives people away from where they live, e.g. poverty, drought, conflict (Boko Haram), lack of schools." },
    { front: "Pull factor", back: "Something that attracts people to a place, e.g. jobs, the port, Nollywood, Yabacon Valley, universities, family." },
    { front: "Natural increase", back: "Birth rate minus death rate; population growth from more births than deaths." },
    { front: "Informal settlement", back: "Housing built without legal permission, usually lacking water, sewerage and electricity, e.g. Makoko." },
    { front: "Makoko", back: "A 'floating slum' of stilt houses on Lagos Lagoon; 40,000–100,000+ people; no sewerage; partly demolished in 2012." },
    { front: "Informal economy", back: "Work that is not registered, taxed or protected, e.g. street hawkers, okada riders, waste pickers." },
    { front: "Go-slow", back: "Nigerian term for a traffic jam; Lagos commuters may spend 2–4 hours each way." },
    { front: "Olusosun", back: "Huge landfill in Ojota, Lagos (about 40 ha, opened 1992); waste pickers; major fire in 2018." },
    { front: "Eko Atlantic", back: "New district on about 10 km² of land reclaimed from the Atlantic, protected by an 8.5 km sea wall; criticised as an enclave for the rich." },
    { front: "Lagos BRT and rail dates", back: "BRT buses 2008; Lagos Rail Mass Transit Blue Line 2023; Red Line 2024." },
    { front: "Las Vegas water source", back: "About 90% from Lake Mead, a reservoir on the Colorado River behind the Hoover Dam." },
  ],

  mustKnow: [
    "Describe the location of Lagos using Nigeria, the Gulf of Guinea, the lagoon and compass directions.",
    "State that Abuja replaced Lagos as capital in 1991 and explain why Lagos is still the commercial capital.",
    "Describe Lagos's growth using figures (about 0.3 million in 1950 to an estimated 15–20+ million) and explain why sources disagree.",
    "Calculate percentage change and natural increase from data.",
    "Explain at least three push factors and three pull factors with named Nigerian examples.",
    "Describe life in Makoko and explain the advantages and disadvantages of the informal economy.",
    "Explain how rapid growth causes go-slows, waste, water and power shortages, flooding and crime.",
    "Evaluate Eko Atlantic, BRT, the Blue and Red rail lines and the Makoko Floating School.",
    "Plan a persuasive speech with a hook, PEEL arguments, counter-argument and call to action.",
    "Compare Lagos with Las Vegas (optional) using water supply, growth and sustainability.",
  ],

  videos: [
    {
      title: "Lagos megacity case study",
      channel: "Time for Geography",
      url: "https://www.youtube.com/results?search_query=time+for+geography+lagos+megacity",
    },
    {
      title: "Lagos: urban growth, opportunities and challenges",
      channel: "Cool Geography",
      url: "https://www.youtube.com/results?search_query=cool+geography+lagos+urban+growth",
    },
    {
      title: "Makoko floating slum and floating school",
      channel: "BBC News",
      url: "https://www.youtube.com/results?search_query=bbc+makoko+lagos+floating+school",
    },
    {
      title: "Las Vegas and the Colorado River water crisis",
      channel: "Geography Hub",
      url: "https://www.youtube.com/results?search_query=las+vegas+lake+mead+water+crisis+geography",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "lagos-quiz-mcq-1",
        question: "Which city replaced Lagos as the capital of Nigeria in 1991?",
        options: ["Kano", "Ibadan", "Abuja", "Port Harcourt"],
        answerIndex: 2,
        hint: "It was a purpose-built, planned city chosen for its central position.",
        explanation:
          "Abuja, a planned city in the centre of Nigeria, became the capital in 1991. Kano and Ibadan are large cities but have never replaced Lagos as capital; Port Harcourt is the oil city of the Niger Delta.",
        guideRef: "location",
      },
      {
        id: "lagos-quiz-mcq-2",
        question: "Which of these is a PUSH factor causing people to leave rural northern Nigeria?",
        options: [
          "The Nollywood film industry",
          "Drought and desertification damaging farmland",
          "Universities such as the University of Lagos",
          "Family members already living in Lagos",
        ],
        answerIndex: 1,
        hint: "A push factor is something bad about the place people leave.",
        explanation:
          "Drought and desertification make farming in the north harder, pushing people away. Nollywood, universities and family in Lagos are all pull factors attracting people to the city.",
        guideRef: "push-pull",
      },
      {
        id: "lagos-quiz-mcq-3",
        question: "What is Makoko?",
        options: [
          "A floating informal settlement of stilt houses on Lagos Lagoon",
          "A landfill site in Ojota",
          "A new district built on reclaimed land",
          "Nigeria's largest container port",
        ],
        answerIndex: 0,
        hint: "Think canoes and stilts.",
        explanation:
          "Makoko is the 'floating slum' on Lagos Lagoon. The landfill is Olusosun, the reclaimed-land district is Eko Atlantic and the main ports are Apapa, Tin Can Island and Lekki.",
        guideRef: "informal-settlements",
      },
      {
        id: "lagos-quiz-mcq-4",
        question: "Which statement about Eko Atlantic is a CRITICISM rather than a benefit?",
        options: [
          "It protects Victoria Island from Atlantic storm surges.",
          "It attracts foreign investment to Lagos.",
          "It provides new offices and its own power supply.",
          "Its expensive homes make it an enclave for the wealthy.",
        ],
        answerIndex: 3,
        hint: "Ask: who can afford to live there?",
        explanation:
          "Critics argue Eko Atlantic is a protected enclave for the rich that does little for most Lagosians. The other three options are benefits claimed by its supporters.",
        guideRef: "solutions",
      },
    ],
    qa: [
      {
        id: "lagos-quiz-qa-1",
        question: "Describe the location of Lagos.",
        marks: 3,
        hint: "Use country, continent/region, coast and a physical feature of the site.",
        modelAnswer:
          "Lagos is in south-west Nigeria in West Africa. It lies on the coast of the Gulf of Guinea (the Bight of Benin), close to the border with Benin. It is built around the Lagos Lagoon, partly on the mainland and partly on islands such as Lagos Island and Victoria Island.",
        markScheme: [
          { point: "South-west Nigeria / West Africa", keywords: ["south-west", "southwest", "south west", "west africa", "nigeria"] },
          { point: "On the coast of the Gulf of Guinea / Bight of Benin / Atlantic", keywords: ["gulf of guinea", "bight of benin", "atlantic", "coast"] },
          { point: "Built around a lagoon and islands", keywords: ["lagoon", "island", "mainland"] },
        ],
        commonError: "Writing only 'in Nigeria' or 'in Africa' — location needs a direction within the country and a nearby physical feature.",
        guideRef: "location",
      },
      {
        id: "lagos-quiz-qa-2",
        question: "Explain two pull factors that attract migrants to Lagos.",
        marks: 4,
        hint: "Name each pull factor, then explain why it would make someone move.",
        modelAnswer:
          "One pull factor is jobs. Lagos has Nigeria's main port and many businesses, so even informal jobs like street trading pay more than subsistence farming. A second pull factor is the tech industry in 'Yabacon Valley', where start-ups such as Paystack offer well-paid work to educated young Nigerians, so ambitious graduates move there to build careers.",
        markScheme: [
          { point: "Names first pull factor (e.g. jobs / port)", keywords: ["job", "work", "employ", "port"] },
          { point: "Explains it (higher income than farming)", keywords: ["more money", "higher wage", "earn", "income", "better pay"] },
          { point: "Names second pull factor (Nollywood / Yabacon Valley / education / family)", keywords: ["nollywood", "yabacon", "tech", "universit", "family"] },
          { point: "Explains second factor's attraction", keywords: ["career", "opportunit", "qualification", "place to stay", "help find"] },
        ],
        commonError: "Listing pull factors without explaining why each one makes people move.",
        guideRef: "push-pull",
      },
      {
        id: "lagos-quiz-qa-3",
        question:
          "Lagos had about 4.8 million people in 1990 and about 14.4 million in 2020. Calculate the percentage increase. Show your working.",
        marks: 2,
        hint: "Percentage change = (new − old) ÷ old × 100.",
        modelAnswer: "(14.4 − 4.8) ÷ 4.8 × 100 = 9.6 ÷ 4.8 × 100 = 200%. The population tripled.",
        markScheme: [
          { point: "Correct working: difference 9.6 divided by 4.8", keywords: ["9.6", "÷ 4.8", "/4.8", "/ 4.8", "divided by 4.8"] },
          { point: "Correct answer 200%", keywords: ["200", "tripled", "three times"] },
        ],
        commonError: "Dividing by the new value (14.4) instead of the old value, giving about 67%.",
        guideRef: "growth",
      },
      {
        id: "lagos-quiz-qa-4",
        question: "Explain why flooding is a growing problem in Lagos.",
        marks: 4,
        hint: "Think about the site, the rainfall, what people do and what the climate is doing.",
        modelAnswer:
          "Much of Lagos is low-lying, often less than 2 m above sea level, and gets heavy rain (around 1,500 mm a year) in the rainy season. As the city has grown, wetlands have been built on and more ground has been covered in concrete, so rain runs off quickly instead of soaking in. Drains are often blocked by uncollected rubbish, so water backs up into streets. Sea-level rise and coastal erosion caused by climate change make flooding worse.",
        markScheme: [
          { point: "Low-lying site near sea level / lagoon", keywords: ["low-lying", "low lying", "sea level", "lagoon", "flat"] },
          { point: "Heavy rainfall / rainy season", keywords: ["heavy rain", "rainfall", "rainy season", "1,500", "1500"] },
          { point: "Blocked drains from waste or building on wetlands / concrete surfaces", keywords: ["drain", "rubbish", "waste", "wetland", "concrete", "impermeable"] },
          { point: "Sea-level rise / climate change", keywords: ["sea-level rise", "sea level rise", "rising sea", "climate change", "storm surge"] },
        ],
        commonError: "Only saying 'it rains a lot' without explaining the human factors that make flooding worse.",
        guideRef: "urban-problems",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "lagos-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "lagos-mcq-p1-q01",
            question: "On which body of water is Lagos located?",
            options: ["The Red Sea", "The Mediterranean Sea", "The Gulf of Guinea", "The Indian Ocean"],
            answerIndex: 2,
            hint: "Lagos is in West Africa, on the Atlantic side of the continent.",
            explanation:
              "Lagos lies on the Gulf of Guinea (the Bight of Benin), part of the Atlantic Ocean. The Mediterranean borders North Africa and the Red Sea and Indian Ocean are on Africa's east side.",
            guideRef: "location",
          },
          {
            id: "lagos-mcq-p1-q02",
            question: "What is a megacity?",
            options: [
              "An urban area with more than 10 million people",
              "An urban area with more than 1 million people",
              "Any capital city",
              "An urban area with more than 50 million people",
            ],
            answerIndex: 0,
            hint: "Lagos passed this threshold around 2010 on UN figures.",
            explanation:
              "A megacity has more than 10 million people. A city of 1 million is sometimes called a 'millionaire city', and being a capital has nothing to do with size — Abuja is a capital but not a megacity.",
            guideRef: "location",
          },
          {
            id: "lagos-mcq-p1-q03",
            question: "Roughly how many people lived in Lagos in 1950?",
            options: ["About 3 million", "About 30,000", "About 30 million", "About 300,000"],
            answerIndex: 3,
            hint: "It has grown around 45–60 times bigger since then.",
            explanation:
              "Lagos had about 300,000 people in 1950. 3 million is ten times too big — Lagos did not reach that until the 1980s.",
            guideRef: "growth",
          },
          {
            id: "lagos-mcq-p1-q04",
            question: "How is natural increase calculated?",
            options: [
              "Birth rate plus death rate",
              "Birth rate minus death rate",
              "Number of immigrants minus number of emigrants",
              "Death rate minus birth rate",
            ],
            answerIndex: 1,
            hint: "It is the growth that comes from births, not from people moving.",
            explanation:
              "Natural increase = birth rate − death rate. Immigrants minus emigrants is net migration, which is the other cause of population change.",
            guideRef: "growth",
          },
          {
            id: "lagos-mcq-p1-q05",
            question: "In which part of Nigeria has the Boko Haram insurgency forced the most people from their homes?",
            options: ["The south-west", "The north-east", "The Niger Delta in the south", "Lagos State"],
            answerIndex: 1,
            hint: "Think of the region near Lake Chad.",
            explanation:
              "Boko Haram has been most active in the north-east (especially Borno State) since about 2009, displacing over 2 million people. The Niger Delta has had separate conflicts linked to oil, not Boko Haram.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-mcq-p1-q06",
            question: "What is 'Yabacon Valley'?",
            options: [
              "A farming valley north of Lagos",
              "A floating settlement on the lagoon",
              "The nickname for Lagos's tech hub around Yaba",
              "A dam that supplies Lagos with water",
            ],
            answerIndex: 2,
            hint: "The name is a play on California's Silicon Valley.",
            explanation:
              "Yabacon Valley is the tech start-up cluster in the Yaba district of Lagos, a pull factor for skilled young people. The floating settlement is Makoko.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-mcq-p1-q07",
            question: "In Lagos, what is a 'go-slow'?",
            options: ["A traffic jam", "A slow-flowing river", "A type of industrial strike", "A yellow minibus"],
            answerIndex: 0,
            hint: "Millions of commuters experience one every morning.",
            explanation:
              "In Nigeria a go-slow is a traffic jam. In Britain the phrase can mean a type of industrial protest, which is why that option is tempting, but in the Lagos case study it means traffic. The yellow minibus is a danfo.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-mcq-p1-q08",
            question: "What is Olusosun?",
            options: ["A floating school", "A new rail line", "A bridge across the lagoon", "A huge landfill site"],
            answerIndex: 3,
            hint: "It is in Ojota and caught fire in 2018.",
            explanation:
              "Olusosun is one of Africa's largest landfill sites (about 40 ha, opened 1992). The floating school is in Makoko and the long bridge is the Third Mainland Bridge.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-mcq-p1-q09",
            question: "In which year did Lagos open its first Bus Rapid Transit (BRT) line?",
            options: ["1991", "2023", "2008", "2016"],
            answerIndex: 2,
            hint: "It came 15 years before the first metro line.",
            explanation:
              "The BRT opened in 2008, running in dedicated lanes from Mile 12 to CMS. 2023 is when the Blue Line rail opened, and 1991 is when Abuja became the capital.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p1-q10",
            question: "When did the Lagos Rail Mass Transit Blue Line begin carrying passengers?",
            options: ["2008", "2023", "1985", "2012"],
            answerIndex: 1,
            hint: "It is very recent — after the COVID-19 pandemic.",
            explanation:
              "The Blue Line (Marina to Mile 2) opened in 2023. 1985 is when the original 1980s metro plan was cancelled, and 2008 is the BRT.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p1-q11",
            question: "Eko Atlantic is being built on…",
            options: [
              "land reclaimed from the Atlantic Ocean",
              "former farmland north of Ikeja",
              "drained wetland where Makoko stands",
              "a hill overlooking the lagoon",
            ],
            answerIndex: 0,
            hint: "Its name gives a clue about where the land came from.",
            explanation:
              "Eko Atlantic sits on about 10 km² of land made by pumping sand from the seabed into the Atlantic beside Victoria Island. It is not on Makoko's site, which is on the lagoon.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p1-q12",
            question: "Where does Las Vegas get about 90% of its water?",
            options: [
              "Groundwater under the Sahara",
              "Desalinated water from the Pacific Ocean",
              "Rainwater collected on rooftops",
              "Lake Mead on the Colorado River",
            ],
            answerIndex: 3,
            hint: "It is a reservoir behind a famous 1930s dam.",
            explanation:
              "Lake Mead, created by the Hoover Dam on the Colorado River, supplies about 90% of Las Vegas's water. Rooftop rainwater could never supply a desert city that gets only about 100 mm of rain a year.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-mcq-p1-q13",
            question: "Which of these is an example of a job in the informal economy?",
            options: [
              "A manager at a registered bank",
              "A street hawker selling water to drivers in traffic",
              "A civil servant in the state government",
              "A teacher at a state school",
            ],
            answerIndex: 1,
            hint: "Which job has no contract, no tax and no pension?",
            explanation:
              "Street hawking is unregistered, untaxed and unprotected, so it is informal. The other jobs are formal: they have contracts, pay tax and usually come with benefits.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-mcq-p1-q14",
            question: "What does 'chain migration' mean?",
            options: [
              "Moving in stages: village, then town, then city",
              "Being forced to move by conflict",
              "Following relatives or friends who moved earlier",
              "Moving back to the village after retirement",
            ],
            answerIndex: 2,
            hint: "Think about the role of family networks as a pull factor.",
            explanation:
              "Chain migration is when migrants follow family or friends who have already moved and can help them settle. Moving in stages is called step migration, which is a different idea.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-mcq-p1-q15",
            question: "Which of these is a PULL factor for Lagos?",
            options: [
              "Few hospitals in rural areas",
              "Crop failure after drought",
              "Conflict in the north-east",
              "Jobs at the busy port",
            ],
            answerIndex: 3,
            hint: "A pull factor describes the destination, not the place people leave.",
            explanation:
              "Jobs at the port attract people to Lagos, so it is a pull factor. The other three describe problems in rural areas, so they are push factors.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-mcq-p1-q16",
            question: "Why was Abuja chosen as Nigeria's new capital?",
            options: [
              "It is central and was seen as neutral between Nigeria's main ethnic and religious groups",
              "It has a bigger port than Lagos",
              "It is the centre of Nigeria's oil industry",
              "It was already Nigeria's largest city",
            ],
            answerIndex: 0,
            hint: "Look at where Abuja is on a map of Nigeria.",
            explanation:
              "Abuja is in the centre of Nigeria and was planned as a neutral capital, away from the crowded coast. It is inland, so it has no port, and it was a new city, not the largest.",
            guideRef: "location",
          },
          {
            id: "lagos-mcq-p1-q17",
            question: "What has traditionally been the main way of earning a living in Makoko?",
            options: ["Oil drilling", "Banking", "Fishing", "Car manufacturing"],
            answerIndex: 2,
            hint: "The settlement is built over the lagoon itself.",
            explanation:
              "Makoko began as a fishing village and fishing and fish-smoking are still major jobs. Oil drilling happens far away in the Niger Delta.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-mcq-p1-q18",
            question: "Which problem is made worse when rubbish blocks the drains in Lagos?",
            options: ["Power cuts", "Flooding", "Earthquakes", "Desertification"],
            answerIndex: 1,
            hint: "What happens to heavy rain if it cannot drain away?",
            explanation:
              "Blocked drains stop rainwater escaping, so streets flood. Desertification affects the dry north of Nigeria, not the wet coast.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-mcq-p1-q19",
            question: "Why do so many Lagos homes and businesses use diesel or petrol generators?",
            options: [
              "Generators are cheaper than grid electricity",
              "The law requires every building to have one",
              "Lagos has no connection to the national grid at all",
              "The national grid is unreliable, with frequent power cuts",
            ],
            answerIndex: 3,
            hint: "Nigeria generates only around 4,000–5,000 MW for over 200 million people.",
            explanation:
              "Grid power is unreliable, so people buy generators as back-up. Lagos IS connected to the grid, and generator power is usually more expensive, not cheaper.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-mcq-p1-q20",
            question:
              "Lagos had about 0.3 million people in 1950 and about 14.4 million in 2020. What is the percentage increase?",
            options: ["About 4,700%", "About 480%", "About 1,440%", "About 47%"],
            answerIndex: 0,
            hint: "(new − old) ÷ old × 100.",
            explanation:
              "(14.4 − 0.3) ÷ 0.3 × 100 = 14.1 ÷ 0.3 × 100 = 4,700%. 47% comes from forgetting to multiply by 100 after dividing — the city grew 47 times, not by 47%.",
            guideRef: "growth",
          },
        ],
      },
      {
        id: "lagos-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          {
            id: "lagos-mcq-p2-q01",
            question: "In geography, the 'situation' of Lagos means…",
            options: [
              "the land it is built on, such as islands and lagoon shores",
              "its position relative to surrounding places and features",
              "its main function, such as being a port",
              "the size of its population",
            ],
            answerIndex: 1,
            hint: "Site and situation are different ideas.",
            explanation:
              "Situation describes where a place is in relation to other places and features (on the Gulf of Guinea, near Benin). The land it is built on is its site.",
            guideRef: "location",
          },
          {
            id: "lagos-mcq-p2-q02",
            question: "Which best describes the Lagos Lagoon?",
            options: [
              "A freshwater lake fed by glaciers",
              "A deep ocean trench just offshore",
              "The delta of the River Niger",
              "A shallow body of water separated from the sea by sandbars",
            ],
            answerIndex: 3,
            hint: "Makoko's stilts are pushed into its muddy bed.",
            explanation:
              "A lagoon is shallow water cut off from the sea by sandbars or islands. The Niger Delta is a separate feature hundreds of kilometres to the east.",
            guideRef: "location",
          },
          {
            id: "lagos-mcq-p2-q03",
            question: "Why do estimates of Lagos's population vary so much (from about 15 million to over 20 million)?",
            options: [
              "There has been no full census since 2006, and sources draw the city boundary differently",
              "People refuse to live in Lagos permanently",
              "The population is shrinking quickly",
              "Satellites cannot photograph Nigeria",
            ],
            answerIndex: 0,
            hint: "Think about when Nigeria last counted everyone, and what counts as 'Lagos'.",
            explanation:
              "Without a recent census, all figures are estimates, and some include the wider metropolitan area while others do not. Lagos is growing, not shrinking.",
            guideRef: "growth",
          },
          {
            id: "lagos-mcq-p2-q04",
            question: "Roughly how many children does the average woman in Nigeria have?",
            options: ["About 1", "About 2", "About 5", "About 9"],
            answerIndex: 2,
            hint: "It is more than double Singapore's rate several times over.",
            explanation:
              "Nigeria's fertility rate is about 5 children per woman, which keeps natural increase high. About 1 is closer to Singapore's very low rate.",
            guideRef: "growth",
          },
          {
            id: "lagos-mcq-p2-q05",
            question: "Which best explains why natural increase is high in Lagos?",
            options: [
              "The death rate is higher than the birth rate",
              "Most residents are over 65",
              "Many people emigrate from Lagos every year",
              "Many migrants are young adults who start families in the city",
            ],
            answerIndex: 3,
            hint: "Migration and natural increase are linked.",
            explanation:
              "Young adult migrants have children in Lagos, and better healthcare lowers the death rate, so births far exceed deaths. If deaths exceeded births there would be natural decrease.",
            guideRef: "growth",
          },
          {
            id: "lagos-mcq-p2-q06",
            question: "What is desertification?",
            options: [
              "Cutting down tropical rainforest",
              "Fertile land turning into desert because of drought, overgrazing and deforestation",
              "Flooding of desert areas after storms",
              "Building new cities in deserts",
            ],
            answerIndex: 1,
            hint: "It is a push factor in Nigeria's dry north.",
            explanation:
              "Desertification is the spread of desert-like conditions into once-fertile land. Deforestation can cause it, but cutting down trees is not the same as desertification itself.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-mcq-p2-q07",
            question: "Which of these is NOT a pull factor for Lagos?",
            options: ["The Nollywood film industry", "Jobs at the port", "Low farm incomes", "Universities"],
            answerIndex: 2,
            hint: "Which one describes the countryside rather than the city?",
            explanation:
              "Low farm incomes are a push factor from rural areas. Nollywood, the port and universities all attract people to Lagos.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-mcq-p2-q08",
            question: "What is Paystack?",
            options: [
              "A landfill site in Ojota",
              "A Lagos fintech start-up bought by Stripe in 2020",
              "A type of BRT bus",
              "A floating school",
            ],
            answerIndex: 1,
            hint: "It is a success story from Yabacon Valley.",
            explanation:
              "Paystack is an online-payments company founded in Lagos and bought by the US company Stripe in 2020 for over US$200 million — evidence of the tech pull factor. The landfill is Olusosun.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-mcq-p2-q09",
            question: "In which year did the Lagos State government demolish part of Makoko?",
            options: ["2012", "1960", "1991", "2023"],
            answerIndex: 0,
            hint: "It was a year after the city suffered major floods and a year before the floating school was built.",
            explanation:
              "Part of Makoko was demolished in July 2012, with very little warning. 1991 is when the capital moved to Abuja.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-mcq-p2-q10",
            question: "Which population estimate for Makoko is most accurate?",
            options: ["About 500", "About 5 million", "Exactly 85,840", "Somewhere from about 40,000 to over 100,000"],
            answerIndex: 3,
            hint: "Informal settlements are hard to count.",
            explanation:
              "Estimates range from about 40,000 to over 100,000 because nobody has done a reliable count. An exact figure would suggest a precision that does not exist.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-mcq-p2-q11",
            question: "Why is the informal economy a problem for the Lagos State government?",
            options: [
              "It creates too many pensions to pay",
              "It makes workers pay too much tax",
              "Little tax is collected, so there is less money for services",
              "It is illegal for anyone to work in Lagos",
            ],
            answerIndex: 2,
            hint: "Informal work is not registered.",
            explanation:
              "Informal workers usually pay no income tax, so the government has less money for roads, water and schools. Informal workers get no pensions at all, so the first option is the opposite of true.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-mcq-p2-q12",
            question: "In Lagos, what is an 'okada'?",
            options: ["A motorbike taxi", "A floating house", "A yellow minibus", "A rail station"],
            answerIndex: 0,
            hint: "They weave between cars in go-slows and were banned from major roads in 2020.",
            explanation:
              "An okada is a motorbike taxi, part of the informal transport economy. The yellow minibuses are danfos.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-mcq-p2-q13",
            question: "Which hazard is linked to the Olusosun landfill?",
            options: [
              "Avalanches",
              "Toxic smoke, methane gas and fires",
              "Volcanic eruptions",
              "Tsunamis caused by the rubbish",
            ],
            answerIndex: 1,
            hint: "Rotting rubbish produces a flammable gas.",
            explanation:
              "Decomposing waste releases methane, and Olusosun suffered a major fire in 2018 that sent toxic smoke over homes. Volcanoes and avalanches have nothing to do with landfill.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-mcq-p2-q14",
            question: "How do most Lagos households get their water?",
            options: [
              "Piped water from the state water company to every home",
              "Desalination plants on Victoria Island",
              "Water imported from Johor",
              "Boreholes, water vendors and sachet 'pure water'",
            ],
            answerIndex: 3,
            hint: "Only a small minority of homes have a piped supply.",
            explanation:
              "Most residents rely on private boreholes, vendors and sachets because the piped network reaches only a small share of homes. Water from Johor is how Singapore, not Lagos, gets some of its water.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-mcq-p2-q15",
            question: "Roughly how long is the 'Great Wall of Lagos' that protects Eko Atlantic?",
            options: ["About 8.5 km", "About 85 km", "About 850 m", "About 850 km"],
            answerIndex: 0,
            hint: "It is made of around 100,000 five-tonne concrete blocks.",
            explanation:
              "The sea wall is about 8.5 km long. 850 km would stretch most of the way along Nigeria's coast and beyond.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p2-q16",
            question: "Who designed the Makoko Floating School?",
            options: ["Zaha Hadid", "Wole Soyinka", "Kunlé Adeyemi", "Norman Foster"],
            answerIndex: 2,
            hint: "A Nigerian architect whose practice is called NLÉ.",
            explanation:
              "Kunlé Adeyemi designed the school in 2013. Wole Soyinka is a famous Nigerian writer, not an architect.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p2-q17",
            question: "When was the Lagos Red Line rail opened?",
            options: ["2008", "2016", "1985", "2024"],
            answerIndex: 3,
            hint: "It came one year after the Blue Line.",
            explanation:
              "The Red Line (Agbado to Oyingbo) opened in 2024, after the Blue Line in 2023. 2008 is the BRT.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p2-q18",
            question: "Roughly how much rain does Las Vegas get in a year?",
            options: ["About 100 mm", "About 1,000 mm", "About 1,500 mm", "About 2,400 mm"],
            answerIndex: 0,
            hint: "It is in a desert — far drier than Singapore's 2,400 mm or so.",
            explanation:
              "Las Vegas gets about 100 mm a year, making it a desert. About 1,500 mm is closer to Lagos's rainfall; about 2,400 mm is Singapore's.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-mcq-p2-q19",
            question: "Las Vegas is in which desert?",
            options: ["Sahara", "Gobi", "Mojave", "Atacama"],
            answerIndex: 2,
            hint: "It is in the south-west USA.",
            explanation:
              "Las Vegas is in the Mojave Desert in Nevada. The Sahara is in northern Africa — it is the desert spreading south towards northern Nigeria.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-mcq-p2-q20",
            question:
              "A Nigerian state has a birth rate of 35 per 1,000 people and a death rate of 11 per 1,000. What is its rate of natural increase as a percentage?",
            options: ["24%", "2.4%", "4.6%", "0.46%"],
            answerIndex: 1,
            hint: "Subtract first, then remember 'per 1,000' is not the same as 'per 100'.",
            explanation:
              "35 − 11 = 24 per 1,000. Dividing by 10 converts per 1,000 into per 100, giving 2.4%. 24% is the trap: it forgets that the rates are per thousand, not per hundred.",
            guideRef: "growth",
          },
        ],
      },
      {
        id: "lagos-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "lagos-mcq-p3-q01",
            question: "Which country borders Lagos State to the west?",
            options: ["Ghana", "Benin", "Cameroon", "Niger"],
            answerIndex: 1,
            hint: "The stretch of coast Lagos sits on is named after it.",
            explanation:
              "Benin borders Lagos State to the west, and the bay is called the Bight of Benin. Cameroon borders Nigeria far away in the east; Ghana does not border Nigeria at all.",
            guideRef: "location",
          },
          {
            id: "lagos-mcq-p3-q02",
            question: "Which best describes the climate of Lagos?",
            options: [
              "Polar, with long dark winters",
              "Mediterranean, with hot dry summers",
              "Tropical: hot all year with a rainy season roughly April to October",
              "Hot desert, with under 250 mm of rain a year",
            ],
            answerIndex: 2,
            hint: "Lagos is only about 6.5° north of the Equator.",
            explanation:
              "Lagos has a hot, wet tropical climate with a rainy season. A hot desert climate describes Las Vegas or northern Nigeria's Sahel edge, not the coast.",
            guideRef: "location",
          },
          {
            id: "lagos-mcq-p3-q03",
            question: "Which statement about Lagos State is correct?",
            options: [
              "It is Nigeria's largest state by area",
              "It is Nigeria's only landlocked state",
              "It is Nigeria's least populated state",
              "It is Nigeria's smallest state by area",
            ],
            answerIndex: 3,
            hint: "Lots of people, not much land.",
            explanation:
              "Lagos State is the smallest Nigerian state by area (about 3,500 km²) yet one of the most populous — which helps explain overcrowding and high land prices. It is on the coast, so it is not landlocked.",
            guideRef: "location",
          },
          {
            id: "lagos-mcq-p3-q04",
            question: "Which pair correctly matches a push factor with its matching pull factor?",
            options: [
              "Lack of healthcare in villages / better hospitals in Lagos",
              "Drought in the north / flooding in Lagos",
              "Jobs at the port / Nollywood films",
              "Boko Haram conflict / the Olusosun landfill",
            ],
            answerIndex: 0,
            hint: "One half must be a negative in the countryside, the other a matching positive in the city.",
            explanation:
              "Poor rural healthcare (push) is matched by better Lagos hospitals (pull). 'Jobs at the port / Nollywood' is tempting but both are pull factors, and flooding and landfill are problems, not attractions.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-mcq-p3-q05",
            question:
              "Lagos had about 10.4 million people in 2010 and about 14.4 million in 2020 (UN estimates). What is the percentage increase?",
            options: ["About 28%", "About 40%", "About 38%", "About 72%"],
            answerIndex: 2,
            hint: "Increase ÷ ORIGINAL value × 100.",
            explanation:
              "(14.4 − 10.4) ÷ 10.4 × 100 = 4 ÷ 10.4 × 100 ≈ 38%. 40% is the trap if you divide by 10 instead of 10.4; 28% comes from dividing by the new value (14.4).",
            guideRef: "growth",
          },
          {
            id: "lagos-mcq-p3-q06",
            question: "Why are there especially bad go-slows on the bridges between the mainland and the islands?",
            options: [
              "The bridges are closed at night",
              "Cars are banned on the islands",
              "The islands have no roads",
              "Millions live on the mainland but many jobs are on the islands, and only a few bridges connect them",
            ],
            answerIndex: 3,
            hint: "Think about where people sleep and where they work.",
            explanation:
              "Housing is cheaper on the mainland, but offices, banks and ports are on or near the islands, so huge numbers funnel across a few bridges every rush hour. The islands do have roads and cars.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-mcq-p3-q07",
            question: "Which sequence correctly shows a chain of linked problems in Lagos?",
            options: [
              "Uncollected rubbish → blocked drains → flooding → spread of disease",
              "Flooding → more electricity → fewer go-slows",
              "Power cuts → fewer generators → less air pollution",
              "New BRT lanes → more danfos → longer journeys for BRT passengers",
            ],
            answerIndex: 0,
            hint: "Each step should genuinely cause the next.",
            explanation:
              "Rubbish blocks drains, drains overflow in heavy rain, and floodwater mixed with sewage spreads diseases such as cholera. Power cuts actually lead to MORE generators and pollution, not fewer.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-mcq-p3-q08",
            question: "Why do the poorest Lagosians often pay MORE per litre for water than richer residents?",
            options: [
              "They use more water than rich people",
              "The government charges them a special tax",
              "They buy small amounts from vendors or as sachets, which costs far more per litre than a piped supply",
              "They live closer to the lagoon",
            ],
            answerIndex: 2,
            hint: "Compare buying in bulk through a pipe with buying a little at a time.",
            explanation:
              "Without piped water, poor households buy small quantities from vendors at high unit prices. Living near the lagoon does not help, because lagoon water is salty and polluted.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-mcq-p3-q09",
            question: "Roughly how much land is being reclaimed for Eko Atlantic?",
            options: ["About 1 km²", "About 10 km²", "About 100 km²", "About 1,000 km²"],
            answerIndex: 1,
            hint: "About 10 million square metres.",
            explanation:
              "Eko Atlantic covers about 10 km². 1,000 km² would be more than a quarter of the whole of Lagos State.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p3-q10",
            question: "Why can Lagos BRT buses move faster than ordinary traffic?",
            options: [
              "They are allowed to fly over junctions",
              "They are free, so nobody else drives",
              "All private cars were banned in 2008",
              "They run in dedicated lanes separated from other traffic",
            ],
            answerIndex: 3,
            hint: "Look at what 'Bus Rapid Transit' means on the road.",
            explanation:
              "BRT buses use their own lanes, so they avoid most go-slows. Private cars were never banned — that is why ordinary lanes are still jammed.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p3-q11",
            question: "Which is the best example of a 'bottom-up' solution in Lagos?",
            options: [
              "Eko Atlantic",
              "The Blue Line rail",
              "The Makoko Floating School",
              "Lekki Deep Sea Port",
            ],
            answerIndex: 2,
            hint: "Bottom-up projects are small-scale and work with a local community.",
            explanation:
              "The floating school was a small, low-cost, community-focused project. Eko Atlantic, the Blue Line and Lekki port are top-down: huge projects led by governments and large companies.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p3-q12",
            question: "The Makoko Floating School collapsed in 2016. Why is it still seen as important?",
            options: [
              "It showed a low-cost way to adapt buildings to rising water, and its design inspired later floating buildings",
              "It made Makoko residents legal owners of their land",
              "It ended flooding in Lagos",
              "It was the largest school in Africa",
            ],
            answerIndex: 0,
            hint: "Think about the idea, not just the building.",
            explanation:
              "Its value was as a prototype for living with water using cheap, recycled materials. It did not change land rights or stop flooding, and it was small (a three-storey A-frame).",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p3-q13",
            question: "Most of Las Vegas's population growth has come from…",
            options: [
              "high natural increase",
              "migration from elsewhere in the USA",
              "refugees fleeing conflict",
              "rural–urban migration from Nevada farms",
            ],
            answerIndex: 1,
            hint: "Think about retirees and job-seekers from neighbouring states such as California.",
            explanation:
              "Las Vegas grew mainly through people moving from other US states for jobs, cheaper housing and sunshine. Unlike Lagos, it does not have very high natural increase, and Nevada has few farms.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-mcq-p3-q14",
            question: "What is the 'third straw' in Las Vegas?",
            options: [
              "A ban on plastic drinking straws",
              "A third dam built on the Colorado River",
              "A pipeline bringing water from the Pacific Ocean",
              "A deeper intake that can draw water from Lake Mead even at very low levels",
            ],
            answerIndex: 3,
            hint: "Imagine drinking from a glass that keeps getting emptier.",
            explanation:
              "The third straw, finished in 2020, takes water from near the bottom of Lake Mead so the city can keep supplying water as levels fall. It is not a new dam or a Pacific pipeline.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-mcq-p3-q15",
            question: "Which sentence from a speech uses a rhetorical question?",
            options: [
              "Lagos has an estimated 15–20 million people.",
              "Firstly, I will discuss traffic.",
              "Would you accept a four-hour commute for your own children?",
              "In conclusion, Lagos is growing.",
            ],
            answerIndex: 2,
            hint: "It is a question that does not expect a spoken answer.",
            explanation:
              "A rhetorical question makes the audience think and feel, without expecting a reply. The first option uses a statistic, which is persuasive too, but it is not a question.",
            guideRef: "lagos-speech",
          },
          {
            id: "lagos-mcq-p3-q16",
            question: "In a PEEL paragraph, what do the letters stand for?",
            options: [
              "Point, Evidence, Explanation, Link",
              "Place, Example, Effect, Location",
              "Problem, Effect, Evaluate, List",
              "Push, Economy, Environment, Lagos",
            ],
            answerIndex: 0,
            hint: "It is a structure for any well-argued paragraph.",
            explanation:
              "PEEL = Point, Evidence, Explanation, Link. 'Place, Example…' sounds geographical but is not the structure.",
            guideRef: "lagos-speech",
          },
          {
            id: "lagos-mcq-p3-q17",
            question: "Which is the most serious long-term sustainability concern for Las Vegas?",
            options: [
              "Too much rainfall causing floods every week",
              "Falling water levels in Lake Mead during a long drought",
              "Shortage of land to build on",
              "A very high birth rate",
            ],
            answerIndex: 1,
            hint: "Think about its one main water source.",
            explanation:
              "A drought since about 2000 has lowered Lake Mead sharply; in 2022 it hit its lowest level since it was first filled. Las Vegas is a desert, so weekly floods are not the issue.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-mcq-p3-q18",
            question: "Which comparison of Lagos and Las Vegas is accurate?",
            options: [
              "Both cities get over 1,000 mm of rain a year",
              "Las Vegas is bigger than Lagos",
              "Lagos has more reliable tap water than Las Vegas",
              "Las Vegas gets far less rain than Lagos but has more reliable piped water",
            ],
            answerIndex: 3,
            hint: "Rainfall is not the same as water supply.",
            explanation:
              "Las Vegas gets about 100 mm of rain but has a well-funded supply from Lake Mead; Lagos gets about 1,500 mm but most homes lack piped water. Las Vegas (about 2.3 million) is much smaller than Lagos.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-mcq-p3-q19",
            question: "When did the Lekki Deep Sea Port open?",
            options: ["1991", "2023", "2008", "1960"],
            answerIndex: 1,
            hint: "The same year as the Blue Line.",
            explanation:
              "Lekki Deep Sea Port opened in 2023 to take larger ships and ease congestion at Apapa. 1960 is the year of Nigerian independence.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p3-q20",
            question:
              "Kinshasa (DR Congo) grew from about 0.2 million people in 1950 to an estimated 15+ million today, and many residents live in informal settlements. Using what you know about Lagos, which conclusion is best supported?",
            options: [
              "Its growth probably comes from both rural–urban migration and natural increase, with infrastructure struggling to keep up",
              "It must have grown only because it is a capital city",
              "Its informal settlements prove it has no economy",
              "It will stop growing as soon as it reaches 10 million",
            ],
            answerIndex: 0,
            hint: "Apply the same causes and consequences you learned for Lagos.",
            explanation:
              "Like Lagos, Kinshasa's rapid growth is driven by migration and high natural increase, and services lag behind. Being a capital is not enough on its own — Lagos kept growing even after it lost capital status in 1991.",
            guideRef: "growth",
          },
        ],
      },
      {
        id: "lagos-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "lagos-mcq-p4-q01",
            question: "Lagos lies on the 'Bight of Benin'. What is a bight?",
            options: ["A steep sea cliff", "A river mouth", "A coral reef", "A wide, gently curving bay"],
            answerIndex: 3,
            hint: "It is a shape of coastline.",
            explanation:
              "A bight is a long, gently curving indentation in a coastline, like a wide bay. A river mouth is an estuary, which is a different feature.",
            guideRef: "location",
          },
          {
            id: "lagos-mcq-p4-q02",
            question: "Which physical feature of its site helped Lagos grow into a major port?",
            options: [
              "High mountains protecting it from wind",
              "A sheltered lagoon giving access to the Atlantic",
              "A large desert behind the city",
              "Deep coal deposits under the city",
            ],
            answerIndex: 1,
            hint: "Ships need calm water and access to the sea.",
            explanation:
              "The lagoon provided sheltered water with an outlet to the ocean, ideal for a harbour. Lagos is low-lying, not mountainous.",
            guideRef: "location",
          },
          {
            id: "lagos-mcq-p4-q03",
            question:
              "Lagos had about 1.4 million people in 1970 and about 4.8 million in 1990. Roughly how many times bigger was it in 1990?",
            options: ["About 2 times", "About 6 times", "About 3.4 times", "About 4.8 times"],
            answerIndex: 2,
            hint: "Divide the later figure by the earlier figure.",
            explanation:
              "4.8 ÷ 1.4 ≈ 3.4, so the population more than tripled in 20 years. 4.8 is just the 1990 figure, not the multiplier.",
            guideRef: "growth",
          },
          {
            id: "lagos-mcq-p4-q04",
            question: "A student writes: 'Lagos has 21 million people.' What is the best way to improve this sentence?",
            options: [
              "Write 'Lagos has an estimated 15–20+ million people, depending on the source and boundary used'",
              "Change it to 'exactly 21,000,000 people'",
              "Remove all numbers from the answer",
              "Write 'Lagos has over 100 million people'",
            ],
            answerIndex: 0,
            hint: "Good geographers show uncertainty honestly.",
            explanation:
              "Because sources disagree and there has been no census since 2006, quoting a range with a source is most accurate. Removing numbers would lose evidence marks; 100 million is roughly half of Nigeria's whole population.",
            guideRef: "growth",
          },
          {
            id: "lagos-mcq-p4-q05",
            question: "Which group is most likely to migrate from rural Nigeria to Lagos?",
            options: ["People over 70", "Babies and toddlers", "Retired farmers", "Young adults aged roughly 15–30"],
            answerIndex: 3,
            hint: "Who is looking for work, education and a new start?",
            explanation:
              "Migration is selective: young adults are most likely to move for jobs and study. This is also why migration boosts natural increase — these migrants then have children in the city.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-mcq-p4-q06",
            question: "People fleeing Boko Haram violence are an example of…",
            options: [
              "voluntary economic migration",
              "forced migration",
              "retirement migration",
              "counter-urbanisation",
            ],
            answerIndex: 1,
            hint: "Did they have a real choice about leaving?",
            explanation:
              "Fleeing violence is forced migration — people move to stay alive. Voluntary economic migration is choosing to move for better pay, like many migrants to Lagos.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-mcq-p4-q07",
            question: "Which push factor is most directly linked to climate change and drought in north-east Nigeria?",
            options: [
              "The growth of Nollywood",
              "A lack of universities",
              "The shrinking of Lake Chad, reducing water for fishing and farming",
              "Traffic congestion in Kano",
            ],
            answerIndex: 2,
            hint: "Look for a change in a natural water source.",
            explanation:
              "Lake Chad has shrunk dramatically since the 1960s through drought and heavy water use, destroying livelihoods and adding to conflict. Nollywood is a pull factor in Lagos, not a push factor.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-mcq-p4-q08",
            question: "Why is the informal economy especially useful for newly arrived migrants?",
            options: [
              "It guarantees a pension",
              "It pays more than all formal jobs",
              "It is run by the government",
              "It needs no qualifications or permits, so people can start earning immediately",
            ],
            answerIndex: 3,
            hint: "Think about someone who arrives with no contacts and no certificates.",
            explanation:
              "Informal work is easy to enter, so it gives newcomers an income straight away. It does NOT provide pensions — that lack of protection is its biggest disadvantage.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-mcq-p4-q09",
            question: "In 2017, around 30,000 people were evicted from which Lagos waterfront community?",
            options: ["Otodo-Gbame", "Ikoyi", "Eko Atlantic", "Ikeja"],
            answerIndex: 0,
            hint: "It was an informal fishing community, like Makoko.",
            explanation:
              "Otodo-Gbame's residents were forcibly evicted in 2017. Ikoyi is a wealthy district, and Eko Atlantic is a new luxury development.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-mcq-p4-q10",
            question: "Which is the best EVALUATION of the Lagos BRT?",
            options: [
              "It is a bus.",
              "It has cut journey times for many commuters, but the network is still too small for a city of 15–20 million.",
              "It solved all of Lagos's traffic problems in 2008.",
              "It was a complete failure that nobody uses.",
            ],
            answerIndex: 1,
            hint: "An evaluation weighs strengths against weaknesses.",
            explanation:
              "A good evaluation gives a strength, a limitation and a judgement. Claiming it solved all traffic problems ignores the go-slows that still exist; calling it a failure ignores the roughly 200,000 daily passengers at its peak.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p4-q11",
            question: "Why do critics say Eko Atlantic's sea wall could increase erosion on neighbouring beaches?",
            options: [
              "It brings more rain to the area",
              "It makes the sea warmer",
              "It is made of sand that washes away",
              "It deflects wave energy and interrupts the movement of sand along the coast, starving nearby beaches",
            ],
            answerIndex: 3,
            hint: "Think about where sand would normally be carried by waves.",
            explanation:
              "Hard sea defences can push wave energy sideways and block longshore drift, so beaches 'downdrift' lose sand. The wall itself is made of concrete blocks, not sand.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p4-q12",
            question: "When critics call Eko Atlantic 'climate apartheid', what do they mean?",
            options: [
              "It has a different climate from the rest of Lagos",
              "It was built by the South African government",
              "The rich are protected from climate impacts while poorer people are left exposed",
              "Climate change does not affect Lagos",
            ],
            answerIndex: 2,
            hint: "Apartheid means separation.",
            explanation:
              "The phrase means separating who is kept safe from rising seas: wealthy residents behind a sea wall, poorer communities left to face flooding and erosion. It is a criticism of fairness, not a claim about weather.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p4-q13",
            question: "Which change would most directly reduce the number of diesel generators used in Lagos?",
            options: [
              "A more reliable grid electricity supply",
              "More BRT lanes",
              "A larger landfill site",
              "Another bridge to the islands",
            ],
            answerIndex: 0,
            hint: "Why do people buy generators in the first place?",
            explanation:
              "People use generators because grid power keeps cutting out, so reliable electricity removes the need. BRT lanes reduce traffic but do not affect power supply.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-mcq-p4-q14",
            question: "Las Vegas returns almost all of its treated indoor wastewater to Lake Mead. Why does this help?",
            options: [
              "It raises the temperature of the lake",
              "The returned water can be taken out and used again, stretching the supply",
              "It stops all evaporation",
              "It makes Las Vegas rainier",
            ],
            answerIndex: 1,
            hint: "Think of it as recycling, like Singapore's NEWater.",
            explanation:
              "Treated water returned to the lake can be withdrawn again, so each litre is used more than once. It cannot stop evaporation or change the rainfall.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-mcq-p4-q15",
            question: "Which sentence would be the strongest EVIDENCE in a persuasive speech about Lagos transport?",
            options: [
              "Transport in Lagos is really, really bad.",
              "Everyone hates traffic.",
              "I think buses are good.",
              "The BRT, opened in 2008, carried around 200,000 passengers a day at its peak.",
            ],
            answerIndex: 3,
            hint: "Evidence includes a named example, a date or a number.",
            explanation:
              "The BRT sentence gives a date and a statistic that proves public transport can work. 'Really, really bad' is emotive but has no evidence, so it would earn few geography marks.",
            guideRef: "lagos-speech",
          },
          {
            id: "lagos-mcq-p4-q16",
            question: "In a persuasive speech, what is a 'rebuttal'?",
            options: [
              "Repeating your main point three times",
              "Your opening hook",
              "Admitting the opposing view and then showing why your argument is still stronger",
              "Thanking the audience at the end",
            ],
            answerIndex: 2,
            hint: "It follows the counter-argument.",
            explanation:
              "A rebuttal answers the other side's best point. Repeating a point three times is the 'rule of three', a different technique.",
            guideRef: "lagos-speech",
          },
          {
            id: "lagos-mcq-p4-q17",
            question: "Which is the best explanation of why Lagos has water shortages despite heavy rainfall?",
            options: [
              "Pipes and treatment works have not kept up with rapid population growth",
              "Lagos gets no rain in the rainy season",
              "All the water flows to Abuja",
              "The lagoon is fresh water that cannot be used",
            ],
            answerIndex: 0,
            hint: "The problem is infrastructure, not nature.",
            explanation:
              "Lagos gets plenty of rain, but the piped network reaches only a small minority of homes. The lagoon is salty and polluted, not usable fresh water.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-mcq-p4-q18",
            question:
              "Lake Mead held about 30 km³ of water in 2000 and about 9 km³ in 2022 (rounded). What is the percentage decrease?",
            options: ["21%", "30%", "233%", "70%"],
            answerIndex: 3,
            hint: "(old − new) ÷ old × 100.",
            explanation:
              "(30 − 9) ÷ 30 × 100 = 21 ÷ 30 × 100 = 70%. 21% is the trap — 21 is the change in km³, not the percentage; 233% comes from dividing by the new value.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-mcq-p4-q19",
            question: "Which Singapore strategy is most similar to Eko Atlantic?",
            options: [
              "The Baby Bonus scheme",
              "Land reclamation, e.g. at Marina Bay",
              "Electronic Road Pricing",
              "NEWater recycling",
            ],
            answerIndex: 1,
            hint: "Eko Atlantic is built on new land made from the sea.",
            explanation:
              "Both Singapore's Marina Bay and Eko Atlantic were created by reclaiming land from the sea. NEWater is a water solution, more similar to Las Vegas's recycling.",
            guideRef: "solutions",
          },
          {
            id: "lagos-mcq-p4-q20",
            question:
              "A planner has money for ONE project that will help the largest number of poor Lagosians as quickly as possible. Which choice is best justified?",
            options: [
              "A golf course on Eko Atlantic, because it will attract tourists",
              "A new airport lounge, because business travellers bring money",
              "Clean water and toilets in informal settlements, because many Lagosians live in such areas and dirty water spreads disease",
              "Demolishing Makoko to build luxury flats, because land there is valuable",
            ],
            answerIndex: 2,
            hint: "Who benefits, how many of them, and how soon?",
            explanation:
              "Upgrading water and sanitation reaches large numbers of the poorest people quickly and cuts disease. Demolishing Makoko might raise land value but would make tens of thousands homeless and destroy livelihoods.",
            guideRef: "informal-settlements",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "lagos-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "lagos-qa-p1-q01",
            question: "What is a megacity? Is Lagos a megacity? Give evidence.",
            marks: 2,
            hint: "Give the population threshold, then compare Lagos with it.",
            modelAnswer:
              "A megacity is an urban area with more than 10 million people. Lagos is a megacity because it has an estimated 15–20+ million people.",
            markScheme: [
              { point: "Defines megacity as over 10 million people", keywords: ["10 million", "ten million", "10m", "10,000,000"] },
              { point: "Lagos is a megacity, with an estimate of 15–20+ million", keywords: ["15", "20 million", "14", "20m", "yes"] },
            ],
            commonError: "Defining a megacity as 'a very big city' without giving the 10 million threshold.",
            guideRef: "location",
          },
          {
            id: "lagos-qa-p1-q02",
            question: "Which city replaced Lagos as Nigeria's capital, and in which year?",
            marks: 2,
            hint: "It is a planned city in the middle of the country.",
            modelAnswer: "Abuja replaced Lagos as Nigeria's capital in 1991.",
            markScheme: [
              { point: "Abuja", keywords: ["abuja", "abuja city", "federal capital territory", "fct"] },
              { point: "1991", keywords: ["1991", "nineteen ninety-one", "nineteen ninety one", "'91"] },
            ],
            commonError: "Saying Lagos is still the capital, or giving 1960 (the year of independence).",
            guideRef: "location",
          },
          {
            id: "lagos-qa-p1-q03",
            question: "Describe the site of Lagos.",
            marks: 3,
            hint: "Site = the physical land the city is built on.",
            modelAnswer:
              "Lagos is built on low-lying, flat coastal land around the Lagos Lagoon. Part of the city is on the mainland and part is on islands such as Lagos Island and Victoria Island, joined by long bridges. It faces the Atlantic Ocean (Gulf of Guinea) behind a sandbar coast.",
            markScheme: [
              { point: "Built around a lagoon", keywords: ["lagoon", "shallow water", "lagos lagoon"] },
              { point: "On islands and the mainland, joined by bridges", keywords: ["island", "mainland", "bridge"] },
              { point: "Low-lying coastal land on the Atlantic / Gulf of Guinea", keywords: ["low-lying", "low lying", "coast", "atlantic", "gulf of guinea", "flat"] },
            ],
            commonError: "Describing situation (e.g. 'in south-west Nigeria near Benin') instead of the site itself.",
            guideRef: "location",
          },
          {
            id: "lagos-qa-p1-q04",
            question: "Define 'push factor' and 'pull factor'.",
            marks: 2,
            hint: "One drives people away; the other attracts them.",
            modelAnswer:
              "A push factor is something negative about where a person lives that makes them want to leave, such as poverty. A pull factor is something positive about another place that attracts people to move there, such as jobs.",
            markScheme: [
              { point: "Push factor: negative that makes people leave their home area", keywords: ["leave", "drive", "away", "negative", "makes people move out"] },
              { point: "Pull factor: positive that attracts people to a new place", keywords: ["attract", "draw", "positive", "towards", "come to"] },
            ],
            commonError: "Giving examples without defining the terms.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-qa-p1-q05",
            question: "Explain two push factors that cause people to leave rural Nigeria.",
            marks: 4,
            hint: "For each one: name it, then explain how it affects people's lives.",
            modelAnswer:
              "First, drought and desertification in northern Nigeria mean crops fail and land becomes less fertile, so subsistence farmers cannot grow enough food or earn money. Second, conflict such as the Boko Haram insurgency in the north-east since about 2009 has made villages unsafe and forced over 2 million people from their homes, so many flee to cities including Lagos.",
            markScheme: [
              { point: "Names first push factor (e.g. drought / desertification / poverty)", keywords: ["drought", "desertif", "poverty", "low income", "crop"] },
              { point: "Explains its effect (crop failure, hunger, no income)", keywords: ["fail", "hunger", "cannot grow", "no money", "less fertile"] },
              { point: "Names second push factor (e.g. conflict / Boko Haram / lack of services)", keywords: ["boko haram", "conflict", "violence", "school", "health"] },
              { point: "Explains its effect (unsafe, displaced, no education)", keywords: ["unsafe", "flee", "displac", "forced", "danger", "no education"] },
            ],
            commonError: "Writing about pull factors in Lagos instead of push factors in the countryside.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-qa-p1-q06",
            question: "Explain how natural increase contributes to the growth of Lagos.",
            marks: 3,
            hint: "Define it, then link it to the age of migrants and to healthcare.",
            modelAnswer:
              "Natural increase is when the birth rate is higher than the death rate. Many migrants to Lagos are young adults, so they go on to have children in the city, and Nigerian women have about 5 children on average. Better healthcare in Lagos also lowers the death rate, so births greatly exceed deaths and the population grows even without migration.",
            markScheme: [
              { point: "Defines natural increase (births exceed deaths)", keywords: ["birth rate", "more births", "births minus deaths", "minus death"] },
              { point: "Young migrants have children in the city / high fertility", keywords: ["young", "children", "fertility", "5 children", "families"] },
              { point: "Falling death rate due to healthcare", keywords: ["death rate fall", "healthcare", "hospital", "medicine", "lower death"] },
            ],
            commonError: "Only talking about migration and forgetting births and deaths.",
            guideRef: "growth",
          },
          {
            id: "lagos-qa-p1-q07",
            question: "Describe living conditions in Makoko.",
            marks: 4,
            hint: "Think about homes, transport, sanitation, jobs and security.",
            modelAnswer:
              "Makoko is a floating informal settlement where people live in wooden houses on stilts over Lagos Lagoon. People travel by canoe. There is no sewerage, so toilets drain straight into the water, spreading diseases like cholera. Most people work informally, for example in fishing and smoking fish, and residents live under threat of eviction, as in 2012 when part of Makoko was demolished.",
            markScheme: [
              { point: "Wooden stilt houses over the lagoon", keywords: ["stilt", "wooden", "lagoon", "floating", "on water"] },
              { point: "Transport by canoe", keywords: ["canoe", "boat", "paddle"] },
              { point: "No sewerage / disease", keywords: ["sewage", "sewerage", "toilet", "disease", "cholera"] },
              { point: "Informal jobs such as fishing / threat of eviction", keywords: ["fish", "informal", "evict", "demolish", "2012"] },
            ],
            commonError: "Writing 'it is a slum and it is poor' without specific detail about Makoko.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-qa-p1-q08",
            question:
              "A Nigerian state has a birth rate of 34 per 1,000 and a death rate of 12 per 1,000. Calculate the natural increase rate per 1,000 and as a percentage.",
            marks: 2,
            hint: "Subtract, then divide by 10 to change 'per 1,000' to 'per 100'.",
            modelAnswer: "34 − 12 = 22 per 1,000. As a percentage this is 22 ÷ 10 = 2.2%.",
            markScheme: [
              { point: "22 per 1,000", keywords: ["22 per", "22/1000", "22 per 1,000", "= 22"] },
              { point: "2.2%", keywords: ["2.2", "2,2", "2.2 per cent"] },
            ],
            commonError: "Writing 22% — forgetting the rates are per thousand, not per hundred.",
            guideRef: "growth",
          },
          {
            id: "lagos-qa-p1-q09",
            question: "Explain why traffic congestion ('go-slows') is such a serious problem in Lagos.",
            marks: 4,
            hint: "Give causes AND effects.",
            modelAnswer:
              "The population has grown far faster than roads and public transport have been built. Many people live on the mainland but work on the islands, so millions cross a few bridges such as the Third Mainland Bridge every day. As a result commuters can spend 2–4 hours each way in go-slows, wasting time and fuel and reducing productivity. Old vehicles and generators also cause serious air pollution that harms health.",
            markScheme: [
              { point: "Population growth faster than roads/transport", keywords: ["population", "growth", "too many", "not enough road", "infrastructure"] },
              { point: "Mainland–island commuting over few bridges", keywords: ["bridge", "mainland", "island", "commut"] },
              { point: "Effect: hours lost / economy", keywords: ["hours", "time", "late", "productiv", "econom"] },
              { point: "Effect: air pollution / health", keywords: ["pollut", "fumes", "exhaust", "health", "smog"] },
            ],
            commonError: "Only describing traffic as 'bad' without explaining why it happens or what its effects are.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-qa-p1-q10",
            question: "Using the example of Olusosun, describe how waste is a problem in Lagos.",
            marks: 3,
            hint: "Use facts about the landfill and its effects.",
            modelAnswer:
              "Lagos produces well over 10,000 tonnes of rubbish a day and much goes to Olusosun, a 40-hectare landfill in Ojota opened in 1992. Rotting waste releases methane and toxic smoke — a huge fire broke out in 2018. Rubbish that is not collected blocks drains, causing floods and spreading disease.",
            markScheme: [
              { point: "Large amount of waste / Olusosun is a huge landfill", keywords: ["landfill", "tonnes", "40 hectare", "dump", "huge"] },
              { point: "Pollution: methane, toxic smoke, fire (2018)", keywords: ["methane", "smoke", "fire", "2018", "toxic"] },
              { point: "Uncollected waste blocks drains / spreads disease", keywords: ["drain", "flood", "disease", "uncollected", "rat"] },
            ],
            commonError: "Not mentioning Olusosun by name, or giving no figures.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-qa-p1-q11",
            question: "Describe Eko Atlantic and give one benefit and one criticism of it.",
            marks: 4,
            hint: "What, where, how big — then one plus and one minus.",
            modelAnswer:
              "Eko Atlantic is a new city district being built on about 10 km² of land reclaimed from the Atlantic Ocean next to Victoria Island. It is protected by an 8.5 km sea wall called the 'Great Wall of Lagos'. One benefit is that the wall protects Victoria Island from storm surges and erosion. One criticism is that its homes are so expensive that it is an enclave for the rich, doing nothing for slums like Makoko.",
            markScheme: [
              { point: "Built on land reclaimed from the Atlantic / next to Victoria Island", keywords: ["reclaim", "atlantic", "victoria island", "sea", "sand"] },
              { point: "Size or sea wall detail (10 km², 8.5 km wall)", keywords: ["10 km", "8.5", "great wall", "sea wall", "250,000"] },
              { point: "Benefit: coastal protection / investment / jobs", keywords: ["protect", "investment", "jobs", "erosion", "storm"] },
              { point: "Criticism: for the rich / increases erosion elsewhere", keywords: ["rich", "wealthy", "expensive", "enclave", "apartheid", "erosion elsewhere"] },
            ],
            commonError: "Giving only benefits, or only criticisms, when the question asks for one of each.",
            guideRef: "solutions",
          },
          {
            id: "lagos-qa-p1-q12",
            question: "Explain how the Bus Rapid Transit (BRT) system helps reduce go-slows in Lagos.",
            marks: 3,
            hint: "What makes BRT different from an ordinary bus?",
            modelAnswer:
              "Since 2008 BRT buses have run in dedicated lanes, so they avoid jams and travel much faster than danfos or cars. Because they are cheaper and quicker, some people leave their cars or danfos and take the bus instead, reducing the number of vehicles on the road. At its peak the BRT carried around 200,000 passengers a day.",
            markScheme: [
              { point: "Dedicated / separate bus lanes", keywords: ["dedicated", "own lane", "separate lane", "bus lane"] },
              { point: "Faster/cheaper so people switch from cars or danfos, fewer vehicles", keywords: ["fewer car", "switch", "instead of", "less vehicles", "fewer vehicles", "cheap"] },
              { point: "Evidence: 2008 / around 200,000 passengers a day", keywords: ["2008", "200,000", "200 000", "passengers"] },
            ],
            commonError: "Saying the BRT 'solved' traffic; the question asks how it helps, and it has limits.",
            guideRef: "solutions",
          },
          {
            id: "lagos-qa-p1-q13",
            question: "Outline the structure of a persuasive speech about Lagos.",
            marks: 3,
            hint: "Beginning, middle and end — and what goes in each.",
            modelAnswer:
              "Start with a hook, such as a striking statistic or a rhetorical question, and state your position clearly. Then give several arguments, each as a PEEL paragraph with Lagos evidence, and include a counter-argument with a rebuttal. Finish with a call to action that tells the audience exactly what to do.",
            markScheme: [
              { point: "Hook and clear position at the start", keywords: ["hook", "opening", "position", "grab"] },
              { point: "PEEL arguments with evidence and counter-argument", keywords: ["peel", "argument", "evidence", "counter", "rebut"] },
              { point: "Call to action at the end", keywords: ["call to action", "action", "ask the audience", "urge"] },
            ],
            commonError: "Listing techniques (rhetorical questions etc.) instead of describing the structure.",
            guideRef: "lagos-speech",
          },
          {
            id: "lagos-qa-p1-q14",
            question: "Compare the water supply of Lagos with that of Las Vegas.",
            marks: 4,
            hint: "Use comparative words such as 'whereas' and 'however'.",
            modelAnswer:
              "Lagos receives about 1,500 mm of rain a year, whereas Las Vegas receives only about 100 mm. However, Las Vegas has a more reliable supply: about 90% of its water comes from Lake Mead on the Colorado River through a well-funded piped network. In Lagos only a small minority of homes have piped water, so most people use boreholes, vendors or sachet water. Both cities face pressure: Lagos from rapid growth outpacing pipes, Las Vegas from drought lowering Lake Mead.",
            markScheme: [
              { point: "Rainfall contrast (about 1,500 mm vs about 100 mm)", keywords: ["1,500", "1500", "100 mm", "more rain", "less rain", "desert"] },
              { point: "Las Vegas: Lake Mead / Colorado River / reliable piped supply", keywords: ["lake mead", "colorado", "hoover", "piped"] },
              { point: "Lagos: few piped connections; boreholes/vendors/sachets", keywords: ["borehole", "vendor", "sachet", "pure water", "minority"] },
              { point: "Comparative point (both under pressure / whereas / however)", keywords: ["whereas", "however", "both", "while", "unlike", "similar"] },
            ],
            commonError: "Describing each city separately without making direct comparisons.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-qa-p1-q15",
            question: "Explain why Lagos has grown so rapidly since 1950. Use PEEL and specific evidence.",
            marks: 6,
            hint: "Cover migration (push AND pull) and natural increase, with named examples and figures.",
            modelAnswer:
              "Lagos has grown from about 300,000 people in 1950 to an estimated 15–20+ million today. The first cause is rural–urban migration. People are pushed out of rural Nigeria by poverty, low farm incomes, drought and desertification in the north, and conflict such as the Boko Haram insurgency in the north-east. At the same time they are pulled to Lagos by jobs at the port and in businesses linked to oil wealth, the Nollywood film industry, the 'Yabacon Valley' tech hub and universities, often helped by relatives already living there. The second cause is natural increase: many migrants are young adults who have children in the city, Nigeria's fertility rate is about 5, and better healthcare has lowered the death rate. Together these mean that Lagos keeps growing faster than almost any other city.",
            markScheme: [
              { point: "Evidence of growth (about 300,000 in 1950 to 15–20+ million)", keywords: ["300,000", "0.3 million", "15", "20 million", "1950"] },
              { point: "Identifies rural–urban migration", keywords: ["rural-urban", "rural to urban", "rural–urban", "migrat"] },
              { point: "Explains a push factor with example", keywords: ["boko haram", "drought", "desertif", "poverty", "conflict"] },
              { point: "Explains a pull factor with example", keywords: ["job", "port", "nollywood", "yabacon", "oil", "universit"] },
              { point: "Natural increase explained", keywords: ["natural increase", "birth rate", "fertility", "children", "death rate"] },
              { point: "Link / conclusion combining causes", keywords: ["together", "therefore", "combination", "both", "as a result", "overall"] },
            ],
            commonError: "Describing the growth with numbers but never explaining the causes, or forgetting natural increase.",
            guideRef: "push-pull",
          },
        ],
      },
      {
        id: "lagos-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "lagos-qa-p2-q01",
            question: "What is an informal settlement? Name an example in Lagos.",
            marks: 2,
            hint: "Think about legal permission and services.",
            modelAnswer:
              "An informal settlement is housing built without legal permission, usually lacking services such as clean water, sewerage and electricity. An example in Lagos is Makoko, the floating slum on Lagos Lagoon.",
            markScheme: [
              { point: "Built without legal permission / lacks services", keywords: ["permission", "illegal", "without", "no service", "lack", "slum"] },
              { point: "Named example: Makoko (or Otodo-Gbame)", keywords: ["makoko", "otodo", "gbame"] },
            ],
            commonError: "Defining it only as 'poor housing' without mentioning its illegal or unplanned status.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-qa-p2-q02",
            question: "Give two pieces of evidence that Lagos is still Nigeria's commercial capital, even though it is no longer the political capital.",
            marks: 2,
            hint: "Think ports, money, media and technology.",
            modelAnswer:
              "Lagos's ports, such as Apapa and the new Lekki Deep Sea Port, handle most of Nigeria's sea trade. It is also home to Nigeria's main banks, oil company offices, the Nollywood film industry and the Yabacon Valley tech hub.",
            markScheme: [
              { point: "Ports handle most of Nigeria's trade", keywords: ["port", "apapa", "lekki", "trade", "shipping"] },
              { point: "Banks / businesses / Nollywood / tech hub based there", keywords: ["bank", "business", "nollywood", "yabacon", "tech", "oil compan"] },
            ],
            commonError: "Giving population size as evidence — being big does not by itself make a city a commercial capital.",
            guideRef: "location",
          },
          {
            id: "lagos-qa-p2-q03",
            question:
              "Study the data. Lagos population (UN estimates): 1950: 0.3 million; 1970: 1.4 million; 1990: 4.8 million; 2010: 10.4 million; 2020: 14.4 million. Describe the trend shown, using figures.",
            marks: 3,
            hint: "Use TEA: Trend, Example (data), Anomaly or change in rate.",
            modelAnswer:
              "The population of Lagos increased continuously between 1950 and 2020, from 0.3 million to 14.4 million. Growth speeded up over time: it rose by only 1.1 million between 1950 and 1970, but by 5.6 million between 1990 and 2010. Lagos became a megacity, passing 10 million, by about 2010.",
            markScheme: [
              { point: "Overall trend: continuous increase", keywords: ["increase", "grew", "rise", "rose", "went up"] },
              { point: "Quotes start and end data (0.3 million to 14.4 million)", keywords: ["0.3", "14.4", "300,000"] },
              { point: "Growth accelerates / passes 10 million (megacity) by 2010", keywords: ["faster", "accelerat", "speed", "megacity", "10 million", "exponential"] },
            ],
            commonError: "Explaining WHY it grew when the question only asks you to describe the trend.",
            guideRef: "growth",
          },
          {
            id: "lagos-qa-p2-q04",
            question: "Lagos had about 1.4 million people in 1970 and about 10.4 million in 2010. Calculate the percentage increase. Show your working.",
            marks: 2,
            hint: "(new − old) ÷ old × 100.",
            modelAnswer: "(10.4 − 1.4) ÷ 1.4 × 100 = 9 ÷ 1.4 × 100 ≈ 643%.",
            markScheme: [
              { point: "Correct working: 9 ÷ 1.4", keywords: ["9 ÷ 1.4", "9/1.4", "9 / 1.4", "9 divided by 1.4", "9.0"] },
              { point: "Answer about 643% (accept 640–643%)", keywords: ["643", "642", "640", "642.9"] },
            ],
            commonError: "Dividing by 10.4 instead of 1.4, giving about 87%.",
            guideRef: "growth",
          },
          {
            id: "lagos-qa-p2-q05",
            question: "Explain two economic pull factors that attract people to Lagos.",
            marks: 4,
            hint: "Economic = linked to money, jobs and industries.",
            modelAnswer:
              "One pull factor is oil wealth. Although oil is pumped in the Niger Delta, many oil companies, banks and service firms are based in Lagos, creating office, driving and security jobs. A second is the creative and tech economy: Nollywood makes thousands of films a year and Yabacon Valley start-ups such as Paystack, bought by Stripe in 2020, offer well-paid jobs, attracting young, educated Nigerians who want careers.",
            markScheme: [
              { point: "Names first economic pull factor (oil wealth / port / jobs)", keywords: ["oil", "port", "job", "bank"] },
              { point: "Explains how it creates jobs or income", keywords: ["create job", "employ", "work", "income", "wage", "money"] },
              { point: "Names second (Nollywood / Yabacon Valley / tech)", keywords: ["nollywood", "yabacon", "tech", "film", "paystack", "flutterwave"] },
              { point: "Explains why it attracts migrants (careers, higher pay, young people)", keywords: ["career", "young", "well-paid", "skilled", "opportunit", "higher pay"] },
            ],
            commonError: "Choosing non-economic factors such as family networks when the question asks for economic ones.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-qa-p2-q06",
            question: "Explain why conflict in north-east Nigeria has led people to migrate.",
            marks: 3,
            hint: "Name the conflict, then explain the effect on daily life and safety.",
            modelAnswer:
              "Since about 2009 the Boko Haram insurgency has attacked villages, schools and markets in north-east Nigeria. People are no longer safe and cannot farm or trade, so they lose their incomes. More than 2 million people have been forced to flee, and some move to cities such as Lagos where they hope to be safe and find work.",
            markScheme: [
              { point: "Names Boko Haram / insurgency in the north-east", keywords: ["boko haram", "insurgen", "terror", "north-east", "borno"] },
              { point: "Explains danger / loss of livelihood", keywords: ["unsafe", "attack", "kill", "cannot farm", "lose", "danger"] },
              { point: "Forced migration / over 2 million displaced / seek safety in cities", keywords: ["displac", "flee", "forced", "2 million", "safety", "refuge"] },
            ],
            commonError: "Not naming the conflict or the region.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-qa-p2-q07",
            question: "Explain the advantages and disadvantages of the informal economy for people in Lagos.",
            marks: 4,
            hint: "Two pluses and two minuses, each explained.",
            modelAnswer:
              "An advantage is that it is easy to enter, with no qualifications or permits needed, so new migrants can earn money straight away, for example as street hawkers. It also provides cheap goods and services such as okada rides. However, pay is low and unreliable, and workers have no sick pay, pension or protection from harassment or eviction. Also, because workers pay no tax, the government has less money for services such as water and roads.",
            markScheme: [
              { point: "Advantage: easy to start, immediate income", keywords: ["easy", "immediate", "no qualification", "start", "quick"] },
              { point: "Advantage: cheap goods/services or flexible work", keywords: ["cheap", "affordable", "flexible", "service"] },
              { point: "Disadvantage: low/unreliable pay, no protection", keywords: ["low pay", "unreliable", "no pension", "no sick", "no protection", "insecure"] },
              { point: "Disadvantage: no tax for government services", keywords: ["tax", "government", "revenue", "fund"] },
            ],
            commonError: "Giving only disadvantages — the informal economy has real benefits for poor families.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-qa-p2-q08",
            question: "Suggest why many residents do not want to leave Makoko, even though living conditions are poor.",
            marks: 3,
            hint: "Think about jobs, cost and community.",
            modelAnswer:
              "Makoko is close to the lagoon, where residents fish, and to city markets, so their jobs depend on living there. Housing on the water costs very little compared with renting land in central Lagos. Many families have lived there for generations, so they have strong community ties and support networks.",
            markScheme: [
              { point: "Jobs depend on location (fishing, near markets)", keywords: ["fish", "job", "work", "market", "close to"] },
              { point: "Cheap or free housing compared with elsewhere", keywords: ["cheap", "afford", "free", "rent", "cost"] },
              { point: "Community / family ties / generations", keywords: ["community", "family", "generation", "friends", "culture", "egun"] },
            ],
            commonError: "Assuming residents stay only because they have no choice; many value their community and jobs.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-qa-p2-q09",
            question: "Explain why Lagos suffers electricity shortages and describe the effects.",
            marks: 4,
            hint: "Cause (supply vs demand) then effects (people, business, environment).",
            modelAnswer:
              "Nigeria's national grid generates only around 4,000–5,000 MW for over 200 million people, and Lagos's demand has grown with its population, so there are frequent power cuts. As a result homes and businesses rely on diesel and petrol generators, which are expensive to run, noisy and polluting. Businesses lose money when machines stop, which discourages investment.",
            markScheme: [
              { point: "Supply far below demand / unreliable grid", keywords: ["grid", "megawatt", "mw", "not enough", "demand", "unreliable"] },
              { point: "Frequent power cuts", keywords: ["power cut", "blackout", "outage", "cut"] },
              { point: "Use of generators (expensive, noisy)", keywords: ["generator", "diesel", "petrol", "expensive", "noisy"] },
              { point: "Effects on business or pollution/health", keywords: ["business", "pollut", "fumes", "investment", "lose money"] },
            ],
            commonError: "Saying Lagos has 'no electricity' — it has a grid but supply is unreliable.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-qa-p2-q10",
            question: "Explain why water shortages in Lagos can harm people's health.",
            marks: 3,
            hint: "What do people drink and wash with if there is no safe piped supply?",
            modelAnswer:
              "Without piped water, many people use shallow boreholes or vendors whose water may be contaminated by sewage, especially where there is no proper sewerage, such as in Makoko. Drinking dirty water spreads diseases such as cholera and diarrhoea, which are dangerous for young children. Water is also expensive for the poor, so families may use less for washing, so hygiene suffers.",
            markScheme: [
              { point: "Water sources may be contaminated (boreholes, vendors, sewage)", keywords: ["contaminat", "dirty", "unsafe", "sewage", "polluted"] },
              { point: "Waterborne diseases such as cholera / diarrhoea", keywords: ["cholera", "diarrh", "typhoid", "disease", "infection"] },
              { point: "Cost reduces hygiene / children vulnerable", keywords: ["hygiene", "washing", "expensive", "children", "less water"] },
            ],
            commonError: "Saying only 'people get ill' without naming a disease or explaining how.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-qa-p2-q11",
            question: "Describe the Lagos Rail Mass Transit and explain how it could reduce the city's problems.",
            marks: 4,
            hint: "Give the two lines with dates, then explain at least two benefits.",
            modelAnswer:
              "The Blue Line opened in 2023 and runs about 13 km from Marina to Mile 2; the Red Line opened in 2024 and runs about 27 km from Agbado to Oyingbo. Electric trains can carry many more people than buses or cars, which could reduce go-slows and journey times. Because the trains are electric, they also reduce air pollution from vehicle exhausts. However, the lines are short for a city of 15–20 million, so their impact is limited so far.",
            markScheme: [
              { point: "Blue Line 2023 (Marina–Mile 2)", keywords: ["blue line", "2023", "marina", "mile 2"] },
              { point: "Red Line 2024 (Agbado–Oyingbo)", keywords: ["red line", "2024", "agbado", "oyingbo"] },
              { point: "Reduces congestion / journey times", keywords: ["congestion", "go-slow", "traffic", "journey time", "faster", "fewer cars"] },
              { point: "Reduces pollution / limited length (evaluation)", keywords: ["pollution", "electric", "emission", "short", "limited"] },
            ],
            commonError: "Confusing the BRT (buses, 2008) with the rail lines (2023–2024).",
            guideRef: "solutions",
          },
          {
            id: "lagos-qa-p2-q12",
            question: "Explain why the Makoko Floating School was seen as an innovative solution.",
            marks: 3,
            hint: "Think about materials, environment and the problem it addressed.",
            modelAnswer:
              "Designed by Kunlé Adeyemi and built in 2013, the school floated on about 250 recycled plastic barrels, so it rose and fell with the water instead of flooding. It used solar panels and collected rainwater, so it did not need the unreliable grid or piped supply. It gave children in an informal settlement a school and showed a cheap, low-tech way for communities to adapt to rising water.",
            markScheme: [
              { point: "Floats on recycled plastic barrels / rises with water", keywords: ["barrel", "float", "plastic", "rise", "recycled"] },
              { point: "Sustainable features: solar panels / rainwater collection", keywords: ["solar", "rainwater", "renewable", "sustainab"] },
              { point: "Low-cost / community adaptation / education for slum children", keywords: ["low-cost", "cheap", "community", "adapt", "education", "school"] },
            ],
            commonError: "Describing it only as 'a school on water' without explaining what made the design new (barrels, solar power, rainwater, low cost).",
            guideRef: "solutions",
          },
          {
            id: "lagos-qa-p2-q13",
            question:
              "Write the opening of a persuasive speech to the Governor of Lagos, arguing that the city must invest more in public transport.",
            marks: 4,
            hint: "Hook, statistic, clear position and at least one persuasive technique.",
            modelAnswer:
              "Governor, how many hours did you lose in traffic this week? For millions of Lagosians the answer is ten, fifteen, even twenty. In a city of an estimated 15–20 million people, the Blue Line runs just 13 km. I am here to argue that Lagos must invest urgently in more rail and BRT lanes — for our economy, our health and our children's future.",
            markScheme: [
              { point: "Hook (question, story or striking fact)", keywords: ["?", "imagine", "how many", "picture"] },
              { point: "Uses accurate Lagos evidence or statistic", keywords: ["million", "km", "2023", "2008", "blue line", "brt"] },
              { point: "Clear position stated", keywords: ["argue", "must", "should", "need to", "urge"] },
              { point: "Persuasive technique (rule of three, direct address, emotive language)", keywords: ["you", "our", "we", "children", "future"] },
            ],
            commonError: "Writing a balanced essay instead of a one-sided persuasive speech.",
            guideRef: "lagos-speech",
          },
          {
            id: "lagos-qa-p2-q14",
            question: "Explain why Las Vegas grew rapidly in the 20th and 21st centuries.",
            marks: 3,
            hint: "Think about jobs, cost of living and lifestyle.",
            modelAnswer:
              "Las Vegas offered many jobs in tourism, casinos, hotels and construction, attracting workers from across the USA. Housing was cheaper than in neighbouring California and Nevada has no state income tax. Its sunny climate attracted retirees, and the Hoover Dam supplied the water and electricity that made a desert city possible.",
            markScheme: [
              { point: "Jobs in tourism / casinos / construction", keywords: ["tourism", "casino", "hotel", "construction", "job"] },
              { point: "Cheaper housing / no state income tax", keywords: ["cheap", "housing", "tax", "california", "afford"] },
              { point: "Climate / retirees / Hoover Dam water and power", keywords: ["sun", "retire", "climate", "hoover", "warm"] },
            ],
            commonError: "Explaining Lagos's pull factors instead of Las Vegas's.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-qa-p2-q15",
            question: "'Eko Atlantic is a good solution to the problems of Lagos.' To what extent do you agree?",
            marks: 6,
            hint: "Give evidence for both sides, then a clear, justified judgement.",
            modelAnswer:
              "Eko Atlantic is a new district on about 10 km² of land reclaimed from the Atlantic, protected by an 8.5 km sea wall. On one hand, it is a good solution to some problems: the 'Great Wall of Lagos' protects Victoria Island from storm surges and erosion, it attracts foreign investment and jobs, and it has its own power, water and drainage, avoiding the city's shortages. On the other hand, its luxury flats and offices are far too expensive for most Lagosians, so critics call it an enclave for the rich or 'climate apartheid'. The sea wall may increase erosion on neighbouring beaches, and it does nothing for the mainland go-slows or for slums like Makoko. Overall, I only partly agree: Eko Atlantic helps protect valuable land and attract investment, but it does not tackle the problems faced by most of the city's 15–20 million people, so investment in rail, water and slum upgrading is more important.",
            markScheme: [
              { point: "Describes Eko Atlantic with evidence (10 km², 8.5 km wall, reclaimed)", keywords: ["reclaim", "10 km", "8.5", "sea wall", "great wall"] },
              { point: "Benefit: coastal protection", keywords: ["protect", "storm", "erosion", "surge", "flood"] },
              { point: "Benefit: investment / jobs / own services", keywords: ["investment", "jobs", "own power", "business", "econom"] },
              { point: "Criticism: for the rich / climate apartheid", keywords: ["rich", "wealthy", "expensive", "apartheid", "enclave"] },
              { point: "Criticism: erosion elsewhere / ignores slums and traffic", keywords: ["erosion elsewhere", "neighbouring", "makoko", "slum", "poor", "go-slow"] },
              { point: "Justified overall judgement", keywords: ["overall", "to some extent", "partly", "i agree", "i disagree", "conclusion"] },
            ],
            commonError: "Writing a one-sided answer or forgetting the final judgement — 'to what extent' always needs a conclusion.",
            guideRef: "solutions",
          },
        ],
      },
      {
        id: "lagos-qa-p3",
        title: "Written Paper 3",
        questions: [
          {
            id: "lagos-qa-p3-q01",
            question: "Explain the difference between urbanisation and urban growth.",
            marks: 2,
            hint: "One is about a proportion, the other about a number or area.",
            modelAnswer:
              "Urbanisation is an increase in the proportion (percentage) of a country's population living in towns and cities. Urban growth is an increase in the number of people living in a city or in the area it covers.",
            markScheme: [
              { point: "Urbanisation = increase in the proportion/percentage living in urban areas", keywords: ["proportion", "percentage", "share", "%"] },
              { point: "Urban growth = increase in number of people or area of a city", keywords: ["number", "area", "size", "spread", "more people"] },
            ],
            commonError: "Treating the two terms as identical.",
            guideRef: "growth",
          },
          {
            id: "lagos-qa-p3-q02",
            question: "Define natural increase and explain why it is high in Nigeria.",
            marks: 3,
            hint: "Definition first, then think about fertility and age structure.",
            modelAnswer:
              "Natural increase is the birth rate minus the death rate. It is high in Nigeria because women have about 5 children on average and the population is very young (median age about 18), so many people are of child-bearing age. Improved healthcare has also reduced the death rate.",
            markScheme: [
              { point: "Definition: birth rate minus death rate", keywords: ["birth rate minus", "births minus deaths", "more births than deaths", "minus death"] },
              { point: "High fertility (about 5 children per woman)", keywords: ["fertility", "5 children", "five children", "large families"] },
              { point: "Young population / falling death rate", keywords: ["young", "median age", "18", "death rate fall", "healthcare"] },
            ],
            commonError: "Defining natural increase as 'when the population increases naturally' — say births minus deaths.",
            guideRef: "growth",
          },
          {
            id: "lagos-qa-p3-q03",
            question: "Explain why Nigeria moved its capital from Lagos to Abuja in 1991.",
            marks: 3,
            hint: "Think about Lagos's problems and Abuja's position.",
            modelAnswer:
              "Lagos had become very crowded and congested, with little room to build government offices. Abuja is in the centre of Nigeria, so it is easier to reach from all regions. It was also seen as neutral ground between Nigeria's main ethnic and religious groups, helping to unite the country.",
            markScheme: [
              { point: "Lagos overcrowded / congested", keywords: ["crowd", "congest", "traffic", "no space", "overcrowd"] },
              { point: "Abuja is central / accessible", keywords: ["central", "centre", "middle", "access"] },
              { point: "Neutral between ethnic/religious groups / unity", keywords: ["neutral", "ethnic", "religio", "unit", "fair"] },
            ],
            commonError: "Saying Abuja was bigger or richer — it was a newly planned city.",
            guideRef: "location",
          },
          {
            id: "lagos-qa-p3-q04",
            question: "Explain why different sources give different population figures for Lagos.",
            marks: 3,
            hint: "Census, boundaries, informal areas, motives.",
            modelAnswer:
              "Nigeria has not held a full census since 2006, so all recent figures are estimates. Some sources count only the built-up urban area while others include the wider metropolitan area or the whole of Lagos State. Many people live in informal settlements that are hard to count, and the state government may have political or financial reasons to give a higher figure.",
            markScheme: [
              { point: "No census since 2006 / figures are estimates", keywords: ["census", "2006", "estimate"] },
              { point: "Different boundaries used", keywords: ["boundar", "metropolitan", "urban area", "lagos state", "where you draw"] },
              { point: "Informal areas hard to count / political motives", keywords: ["informal", "hard to count", "slum", "politic", "money", "funding"] },
            ],
            commonError: "Saying only 'people move around a lot' without a specific reason.",
            guideRef: "growth",
          },
          {
            id: "lagos-qa-p3-q05",
            question:
              "Chidi, 22, lives in a village in central Nigeria. His family's farm earns very little, clashes between farmers and herders have made the area unsafe, and his uncle runs a phone-repair stall in Lagos. Explain how push and pull factors work together to influence Chidi's decision.",
            marks: 4,
            hint: "Classify each detail, then explain how they combine.",
            modelAnswer:
              "Chidi is pushed by low farm incomes, which mean he cannot earn a living, and by farmer–herder conflict, which makes his home unsafe. He is pulled by the chance of work in Lagos, such as helping at his uncle's phone stall in the informal economy, which would earn more than farming. His uncle is also a family network who can give him somewhere to stay, making the move easier (chain migration). Together, the push and pull factors make migration very likely.",
            markScheme: [
              { point: "Identifies push factor: low farm income", keywords: ["low income", "earns little", "poverty", "farm", "poor"] },
              { point: "Identifies push factor: conflict / unsafe", keywords: ["conflict", "unsafe", "clash", "herder", "violence"] },
              { point: "Identifies pull factor: job / informal work in Lagos", keywords: ["job", "work", "phone", "stall", "informal"] },
              { point: "Family network / chain migration / factors combine", keywords: ["uncle", "family", "chain", "stay with", "together", "combine"] },
            ],
            commonError: "Listing the factors without saying which are push and which are pull.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-qa-p3-q06",
            question: "What is chain migration, and why does it help Lagos keep growing?",
            marks: 3,
            hint: "Think about relatives who already live in the city.",
            modelAnswer:
              "Chain migration is when people follow relatives or friends who have already moved. Those already in Lagos can offer newcomers a place to stay and help them find work, which reduces the cost and risk of moving. As each new migrant settles, they in turn help others, so the flow of migrants continues.",
            markScheme: [
              { point: "Definition: following family/friends who moved earlier", keywords: ["follow", "relative", "family", "friend", "already moved"] },
              { point: "Help with housing/jobs reduces risk", keywords: ["place to stay", "accommodation", "find work", "help", "risk"] },
              { point: "Self-sustaining flow: migrants attract more migrants", keywords: ["continue", "more migrants", "in turn", "cycle", "keeps"] },
            ],
            commonError: "Confusing chain migration with step migration (moving in stages).",
            guideRef: "push-pull",
          },
          {
            id: "lagos-qa-p3-q07",
            question: "Name two jobs in the informal economy of Lagos.",
            marks: 2,
            hint: "Think of people you might see during a go-slow.",
            modelAnswer: "Street hawker selling drinks to drivers; okada (motorbike taxi) rider. Others: waste picker, danfo conductor, market trader.",
            markScheme: [
              { point: "First informal job", keywords: ["hawker", "street seller", "vendor", "trader", "okada"] },
              { point: "Second informal job", keywords: ["waste picker", "scavenger", "danfo", "conductor", "fisher", "tailor"] },
            ],
            commonError: "Naming formal jobs such as teacher or bank clerk.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-qa-p3-q08",
            question: "Explain why the eviction of waterfront communities in Lagos is controversial.",
            marks: 4,
            hint: "Give the government's view and the residents' view, with named examples.",
            modelAnswer:
              "The government argues that settlements like Makoko are unsafe and unhealthy, with no sewerage, and that the land could be used for development. However, evictions such as part of Makoko in 2012 and Otodo-Gbame in 2017 (about 30,000 people) were carried out with little warning. Residents lost homes and fishing livelihoods and often received no compensation or new housing. Many experts argue that upgrading the settlements would be fairer than demolition.",
            markScheme: [
              { point: "Government view: unsafe, unhealthy or land needed", keywords: ["unsafe", "unhealthy", "sanitation", "develop", "valuable land"] },
              { point: "Named eviction (Makoko 2012 / Otodo-Gbame 2017)", keywords: ["2012", "2017", "otodo", "gbame", "makoko"] },
              { point: "Residents lose homes/livelihoods/no compensation", keywords: ["homeless", "lose", "livelihood", "compensat", "little warning"] },
              { point: "Alternative: upgrading / human rights", keywords: ["upgrad", "rights", "fairer", "improve instead", "in-situ"] },
            ],
            commonError: "Giving only one side — 'controversial' means people disagree, so show both views.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-qa-p3-q09",
            question: "Using a chain of at least three linked problems, explain how the problems of Lagos make each other worse.",
            marks: 4,
            hint: "Use arrows or 'which leads to…' to show each link.",
            modelAnswer:
              "Rapid population growth means waste collection cannot keep up, so rubbish is dumped in streets and canals. This rubbish blocks the drains, so during heavy rainy-season downpours water cannot escape and areas flood. Floodwater mixes with sewage, spreading diseases such as cholera, and it damages roads, which makes go-slows even worse.",
            markScheme: [
              { point: "Starting cause: growth outpacing services / uncollected waste", keywords: ["growth", "uncollected", "rubbish", "waste", "cannot keep up"] },
              { point: "Link: blocked drains", keywords: ["drain", "block", "canal"] },
              { point: "Link: flooding", keywords: ["flood", "water cannot", "overflow"] },
              { point: "Further consequence: disease or damaged roads / worse traffic", keywords: ["disease", "cholera", "road", "traffic", "go-slow"] },
            ],
            commonError: "Listing separate problems without showing how one causes the next.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-qa-p3-q10",
            question: "Explain why crime can increase when a city grows very rapidly.",
            marks: 3,
            hint: "Think about jobs, poverty and policing.",
            modelAnswer:
              "When a city grows faster than its economy, there are not enough formal jobs, so some young people turn to crime to earn money. Poverty and overcrowding in informal settlements can create tension. Police and services struggle to keep up with the population, so some areas are poorly policed and gangs such as 'area boys' can operate.",
            markScheme: [
              { point: "Unemployment / not enough jobs", keywords: ["unemploy", "no job", "not enough job", "jobless"] },
              { point: "Poverty / inequality / overcrowding", keywords: ["poverty", "poor", "inequal", "overcrowd", "rich and poor"] },
              { point: "Policing can't keep up / gangs", keywords: ["police", "gang", "area boys", "law enforcement", "security"] },
            ],
            commonError: "Suggesting migrants are criminals — the link is with poverty and lack of opportunity, not with migrants themselves.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-qa-p3-q11",
            question: "Compare top-down and bottom-up solutions in Lagos, using one example of each.",
            marks: 4,
            hint: "Define each type, then compare scale, cost and who benefits.",
            modelAnswer:
              "Top-down solutions are large projects planned by governments or big companies, such as the Blue Line rail (2023), which can move huge numbers of people but cost a lot and take decades. Bottom-up solutions start in communities, such as the Makoko Floating School (2013), which was cheap and directly helped poor children but only on a small scale. Top-down projects change the whole city more, whereas bottom-up projects can help the poorest more quickly.",
            markScheme: [
              { point: "Defines top-down (government/large companies)", keywords: ["government", "large", "big compan", "planned", "top-down"] },
              { point: "Top-down example (Blue/Red Line, BRT, Eko Atlantic)", keywords: ["blue line", "red line", "brt", "eko atlantic", "rail"] },
              { point: "Bottom-up example (Makoko Floating School / community recycling)", keywords: ["floating school", "makoko", "community", "recycl"] },
              { point: "Comparison of scale/cost/who benefits", keywords: ["whereas", "however", "cheaper", "small scale", "expensive", "poorest"] },
            ],
            commonError: "Describing two examples without comparing them.",
            guideRef: "solutions",
          },
          {
            id: "lagos-qa-p3-q12",
            question: "State two features of the design of the Makoko Floating School.",
            marks: 2,
            hint: "What did it float on, and how did it get power or water?",
            modelAnswer: "It floated on about 250 recycled plastic barrels, and it used solar panels (and collected rainwater).",
            markScheme: [
              { point: "Floated on recycled plastic barrels", keywords: ["barrel", "plastic", "float"] },
              { point: "Solar panels / rainwater collection / A-frame shape", keywords: ["solar", "rainwater", "a-frame", "triangle", "wood"] },
            ],
            commonError: "Writing about the school's location rather than its design.",
            guideRef: "solutions",
          },
          {
            id: "lagos-qa-p3-q13",
            question: "Name three persuasive techniques and give a Lagos example of each.",
            marks: 3,
            hint: "AFOREST may help.",
            modelAnswer:
              "Rhetorical question: 'Would you let your child drink lagoon water?' Statistic: 'Lagos has grown from 300,000 people in 1950 to over 15 million today.' Rule of three: 'Lagos needs cleaner water, faster trains and safer homes.'",
            markScheme: [
              { point: "First technique with example (e.g. rhetorical question)", keywords: ["rhetorical", "question", "?"] },
              { point: "Second technique with example (e.g. statistic/fact)", keywords: ["statistic", "fact", "million", "number"] },
              { point: "Third technique with example (e.g. rule of three, emotive language, direct address)", keywords: ["rule of three", "triple", "emotive", "direct address", "repetition", "alliteration"] },
            ],
            commonError: "Naming techniques without giving a Lagos example of each.",
            guideRef: "lagos-speech",
          },
          {
            id: "lagos-qa-p3-q14",
            question: "Explain the sustainability concerns facing Las Vegas and how the city is responding.",
            marks: 4,
            hint: "Two problems, two responses.",
            modelAnswer:
              "Las Vegas relies on Lake Mead for about 90% of its water, but a long drought has lowered the lake to record lows in 2022. The city also uses huge amounts of energy for air-conditioning in a desert where summers exceed 40 °C. In response, it pays residents to replace grass lawns, has banned decorative grass by 2027, recycles almost all indoor water back into Lake Mead and built a deeper 'third straw' intake. It is also expanding solar power.",
            markScheme: [
              { point: "Concern: water supply from shrinking Lake Mead / drought", keywords: ["lake mead", "drought", "water", "colorado"] },
              { point: "Concern: energy / heat / air-conditioning", keywords: ["energy", "air-condition", "air condition", "heat", "hot"] },
              { point: "Response: lawn removal / grass ban / water recycling", keywords: ["grass", "lawn", "recycl", "cash for grass", "2027"] },
              { point: "Response: third straw / solar power", keywords: ["third straw", "intake", "solar", "renewable"] },
            ],
            commonError: "Listing problems without the responses, or vice versa.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-qa-p3-q15",
            question: "'Lagos is a city of opportunity, not just problems.' Discuss this statement.",
            marks: 6,
            hint: "Opportunities with evidence, problems with evidence, then a judgement.",
            modelAnswer:
              "Lagos certainly has serious problems. Population has grown from about 300,000 in 1950 to an estimated 15–20+ million, far faster than infrastructure. Many people live in informal settlements such as Makoko, with no sewerage; commuters lose hours in go-slows; Olusosun landfill catches fire; and power cuts force people onto generators. However, Lagos is also a city of opportunity. It handles most of Nigeria's sea trade through ports such as Apapa and Lekki (2023), Nollywood and Afrobeats are world-famous, and Yabacon Valley start-ups such as Paystack, bought for over US$200 million in 2020, show its tech potential. New solutions such as the BRT (2008) and the Blue (2023) and Red (2024) rail lines show progress. Overall, I agree with the statement: the problems are real, but the energy of its young population and growing industries mean Lagos is a city of opportunity, as long as investment reaches the poorest areas too.",
            markScheme: [
              { point: "Problems with specific evidence (Makoko, go-slows, Olusosun, power)", keywords: ["makoko", "go-slow", "olusosun", "power cut", "flood", "slum"] },
              { point: "Growth evidence (300,000 to 15–20+ million)", keywords: ["300,000", "15", "20 million", "1950"] },
              { point: "Economic opportunity: port / oil / jobs", keywords: ["port", "apapa", "lekki", "trade", "oil", "job"] },
              { point: "Creative/tech opportunity: Nollywood / Yabacon / Paystack", keywords: ["nollywood", "yabacon", "paystack", "afrobeats", "tech"] },
              { point: "Solutions showing progress (BRT, Blue/Red Line)", keywords: ["brt", "blue line", "red line", "rail", "2023"] },
              { point: "Justified overall judgement", keywords: ["overall", "i agree", "i disagree", "conclusion", "to some extent", "on balance"] },
            ],
            commonError: "Writing only about problems — the statement asks you to weigh opportunity against problems.",
            guideRef: "lagos-speech",
          },
        ],
      },
      {
        id: "lagos-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "lagos-qa-p4-q01",
            question: "Explain how the site of Lagos helped it to grow into a major port.",
            marks: 2,
            hint: "What do ships need?",
            modelAnswer:
              "The Lagos Lagoon provided sheltered, calm water protected from Atlantic waves, ideal for a harbour. It also had an opening to the Gulf of Guinea, giving ships access to the ocean and world trade routes.",
            markScheme: [
              { point: "Sheltered lagoon / calm water for harbour", keywords: ["shelter", "calm", "harbour", "lagoon", "protected"] },
              { point: "Access to the ocean / trade routes", keywords: ["access", "ocean", "atlantic", "trade", "gulf of guinea"] },
            ],
            commonError: "Writing about the situation (near Benin) rather than the physical site.",
            guideRef: "location",
          },
          {
            id: "lagos-qa-p4-q02",
            question:
              "Study the data. Percentage of Nigerians living in urban areas (approximate): 1960: 16%; 1990: 30%; 2020: 52%. Describe the change and suggest one reason for it.",
            marks: 3,
            hint: "Describe with figures, then give a cause.",
            modelAnswer:
              "The percentage of Nigerians living in urban areas increased from about 16% in 1960 to about 52% in 2020, more than tripling. By 2020 over half of Nigerians lived in towns and cities. One reason is rural–urban migration, as people are pushed from the countryside by poverty and conflict and pulled to cities like Lagos by jobs.",
            markScheme: [
              { point: "Describes increase", keywords: ["increase", "rose", "grew", "went up", "more than tripled"] },
              { point: "Uses data / notes over half urban by 2020", keywords: ["16", "52", "half", "36"] },
              { point: "Reason: rural–urban migration / natural increase in cities", keywords: ["migrat", "job", "push", "pull", "natural increase"] },
            ],
            commonError: "Confusing urbanisation (a percentage) with urban growth (a number).",
            guideRef: "growth",
          },
          {
            id: "lagos-qa-p4-q03",
            question:
              "The UN estimated Lagos's urban population at about 14.4 million in 2020; the Lagos State government claims about 20 million. (a) Calculate the difference and express it as a percentage of the UN figure. (b) Suggest two reasons why the figures differ.",
            marks: 4,
            hint: "(a) difference ÷ UN figure × 100. (b) Think census and boundaries.",
            modelAnswer:
              "(a) 20 − 14.4 = 5.6 million. 5.6 ÷ 14.4 × 100 ≈ 39%. (b) Nigeria has had no census since 2006, so both figures are estimates; and the state government includes the wider metropolitan area or the whole of Lagos State, whereas the UN counts only the main urban area.",
            markScheme: [
              { point: "Difference 5.6 million", keywords: ["5.6", "5,600,000", "5.6 million"] },
              { point: "Percentage about 39%", keywords: ["39", "38.9", "38.8"] },
              { point: "Reason: no recent census / estimates", keywords: ["census", "2006", "estimate"] },
              { point: "Reason: different boundaries or political/financial motives", keywords: ["boundar", "metropolitan", "lagos state", "politic", "funding", "money"] },
            ],
            commonError: "Dividing by 20 instead of 14.4 (giving 28%) — the question says 'as a percentage of the UN figure'.",
            guideRef: "growth",
          },
          {
            id: "lagos-qa-p4-q04",
            question: "Explain why the death rate in Lagos has fallen faster than the birth rate, and what effect this has on population growth.",
            marks: 4,
            hint: "Healthcare changes quickly; family-size traditions change slowly.",
            modelAnswer:
              "The death rate has fallen because of better healthcare, vaccinations, hospitals and access to medicine in the city. The birth rate has stayed high because many families still want several children, the population is young, and it takes time for attitudes to family size to change. As a result the gap between births and deaths is large, so natural increase is high and the population grows quickly even without migration.",
            markScheme: [
              { point: "Death rate falls: healthcare / vaccines / hospitals", keywords: ["healthcare", "vaccin", "hospital", "medicine", "doctor"] },
              { point: "Birth rate stays high: tradition / young population / large families", keywords: ["tradition", "large famil", "young", "culture", "want children"] },
              { point: "Gap between births and deaths widens", keywords: ["gap", "difference", "more births than deaths", "widen"] },
              { point: "Effect: high natural increase / rapid growth", keywords: ["natural increase", "grow", "rapid", "increase"] },
            ],
            commonError: "Explaining the fall in the death rate but not why the birth rate stays high.",
            guideRef: "growth",
          },
          {
            id: "lagos-qa-p4-q05",
            question:
              "Dhaka in Bangladesh is another fast-growing megacity. Rural Bangladesh is low-lying, often flooded by monsoon rains and cyclones, and most families farm small plots. Suggest three push factors likely to drive people from rural Bangladesh to Dhaka.",
            marks: 3,
            hint: "Apply what you know about Lagos to the clues given.",
            modelAnswer:
              "Flooding and cyclones can destroy crops, homes and livestock, leaving families with nothing. Small farm plots provide low incomes, so families remain poor and cannot cope with bad years. Rural areas probably also lack good schools, hospitals and jobs outside farming.",
            markScheme: [
              { point: "Natural hazards: flooding / cyclones destroy crops and homes", keywords: ["flood", "cyclone", "storm", "destroy", "monsoon"] },
              { point: "Poverty / low farm incomes / small plots", keywords: ["poverty", "poor", "low income", "small plot", "little money"] },
              { point: "Lack of services or non-farm jobs", keywords: ["school", "hospital", "healthcare", "no jobs", "services"] },
            ],
            commonError: "Writing pull factors about Dhaka instead of push factors from the countryside.",
            guideRef: "push-pull",
          },
          {
            id: "lagos-qa-p4-q06",
            question:
              "In 2020 Lagos banned okada motorbike taxis from many major roads. Explain why the government introduced the ban and why it was controversial.",
            marks: 4,
            hint: "Reasons for: safety and order. Reasons against: jobs and transport for the poor.",
            modelAnswer:
              "The government said okadas caused many accidents and injuries, were sometimes used in crime, and added to chaotic traffic. However, the ban was controversial because hundreds of thousands of riders work in the informal economy and lost their main income overnight. Many poorer Lagosians also relied on okadas to weave through go-slows, so the ban made their journeys longer and more expensive.",
            markScheme: [
              { point: "Reason: accidents / safety", keywords: ["accident", "safety", "injur", "dangerous", "crash"] },
              { point: "Reason: crime or traffic disorder", keywords: ["crime", "robber", "chaos", "traffic", "disorder"] },
              { point: "Controversy: riders lose income (informal jobs)", keywords: ["income", "job", "livelihood", "unemploy", "riders"] },
              { point: "Controversy: poorer commuters lose cheap/fast transport", keywords: ["commuter", "transport", "longer", "expensive", "poor people"] },
            ],
            commonError: "Only giving the government's side; 'controversial' needs the opposing view too.",
            guideRef: "informal-settlements",
          },
          {
            id: "lagos-qa-p4-q07",
            question: "Explain how the Olusosun landfill creates both problems and opportunities for people in Lagos.",
            marks: 3,
            hint: "Think about health and environment, and about the people who work there.",
            modelAnswer:
              "Olusosun creates problems because rotting waste gives off methane and toxic smoke, especially during fires such as the one in 2018, harming the health of nearby residents. However, it also creates opportunities: thousands of informal waste pickers earn a living by collecting and selling plastics and metals, which also means more materials are recycled.",
            markScheme: [
              { point: "Problem: methane / toxic smoke / fire (2018)", keywords: ["methane", "smoke", "fire", "2018", "toxic"] },
              { point: "Problem: harms health / pollutes land and water", keywords: ["health", "pollut", "disease", "breath", "contaminat"] },
              { point: "Opportunity: waste pickers earn income / recycling", keywords: ["waste picker", "scavenger", "income", "recycl", "sell"] },
            ],
            commonError: "Only describing problems and missing the informal jobs it provides.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-qa-p4-q08",
            question:
              "A commuter travels from Ikorodu to Lagos Island 5 days a week. By danfo minibus each one-way journey takes 3 hours; by BRT it takes 1.5 hours (example figures). (a) Calculate how many hours a week the BRT saves. (b) Explain two wider benefits if many commuters switch to the BRT.",
            marks: 4,
            hint: "There are two journeys a day.",
            modelAnswer:
              "(a) Saving per journey = 3 − 1.5 = 1.5 hours. Two journeys a day × 5 days = 10 journeys. 1.5 × 10 = 15 hours a week. (b) Fewer vehicles on the road would reduce go-slows for everyone, and less fuel burned would reduce air pollution. People would also have more time to work, study or be with family, helping the economy.",
            markScheme: [
              { point: "Working: 1.5 hours saved per journey × 10 journeys", keywords: ["1.5", "10 journeys", "× 10", "x 10", "2 × 5"] },
              { point: "Answer: 15 hours a week", keywords: ["15 hours", "15 h", "= 15", "15hrs"] },
              { point: "Benefit: less congestion / fewer vehicles", keywords: ["congestion", "fewer car", "fewer vehicles", "go-slow", "traffic"] },
              { point: "Benefit: less pollution or more productive time", keywords: ["pollut", "emission", "productiv", "econom", "more time"] },
            ],
            commonError: "Forgetting the return journey and answering 7.5 hours.",
            guideRef: "solutions",
          },
          {
            id: "lagos-qa-p4-q09",
            question: "Explain why Eko Atlantic is unlikely to improve life for the residents of Makoko.",
            marks: 4,
            hint: "Compare who Eko Atlantic is for with what Makoko needs.",
            modelAnswer:
              "Eko Atlantic's flats and offices are very expensive, so Makoko's fishermen and traders could never afford to live there. Its jobs are mainly skilled office work rather than the informal work Makoko residents do. Makoko's main needs — clean water, sewerage, schools and secure land rights — are not addressed by a project on the far side of the lagoon. Critics also argue that money spent on luxury megaprojects could have been used to upgrade informal settlements.",
            markScheme: [
              { point: "Too expensive / for the wealthy", keywords: ["expensive", "rich", "wealthy", "afford", "luxury"] },
              { point: "Jobs don't match Makoko residents' skills", keywords: ["skill", "office", "qualif", "formal job", "not suited"] },
              { point: "Makoko's needs (water, sewerage, land rights) not addressed", keywords: ["sewerage", "sanitation", "clean water", "land rights", "school"] },
              { point: "Opportunity cost: money could upgrade slums", keywords: ["instead", "could have", "upgrad", "spent", "priorit"] },
            ],
            commonError: "Describing Eko Atlantic without linking it to Makoko's specific needs.",
            guideRef: "solutions",
          },
          {
            id: "lagos-qa-p4-q10",
            question: "Suggest three ways Lagos could reduce the risk of flooding.",
            marks: 3,
            hint: "Think about drains, land use and coastal defences.",
            modelAnswer:
              "Lagos could improve waste collection and clear drains regularly so rainwater can escape. It could stop building on wetlands and create green spaces that soak up rain. It could also build or strengthen coastal defences and enforce planning rules to keep homes off the most flood-prone land.",
            markScheme: [
              { point: "Clear drains / better waste collection", keywords: ["drain", "waste collection", "rubbish", "clear", "unblock"] },
              { point: "Protect wetlands / green spaces / permeable surfaces", keywords: ["wetland", "green", "park", "permeable", "trees", "mangrove"] },
              { point: "Sea defences / planning rules / early warnings", keywords: ["sea wall", "defence", "planning", "warning", "embankment", "levee"] },
            ],
            commonError: "Suggesting impossible solutions such as 'stop the rain'.",
            guideRef: "urban-problems",
          },
          {
            id: "lagos-qa-p4-q11",
            question:
              "A metro for Lagos was first planned in the early 1980s but the Blue Line did not open until 2023. Suggest reasons why large transport projects in Lagos take so long.",
            marks: 3,
            hint: "Think about money, politics and building in a crowded city.",
            modelAnswer:
              "Metro systems are extremely expensive, and funding has been hard to find, especially when oil prices fall. Changes of government can cancel projects, as happened when the original plan was scrapped in 1985. Building in a crowded, low-lying city is also difficult, because land must be cleared and the ground is often wet and soft.",
            markScheme: [
              { point: "High cost / lack of funding", keywords: ["cost", "expensive", "money", "fund", "afford"] },
              { point: "Political change / cancellation (1985)", keywords: ["government", "politic", "cancel", "1985", "military"] },
              { point: "Construction difficulty: crowded land, wet ground", keywords: ["crowd", "land", "swamp", "wet", "difficult", "space"] },
            ],
            commonError: "Giving one vague reason such as 'it is hard' without explaining.",
            guideRef: "solutions",
          },
          {
            id: "lagos-qa-p4-q12",
            question:
              "Write one persuasive PEEL paragraph for a speech to the Governor of Lagos arguing that the government should invest in upgrading Makoko rather than demolishing it.",
            marks: 6,
            hint: "Point, Evidence, Explanation, Link — plus persuasive techniques.",
            modelAnswer:
              "Governor, Makoko should be upgraded, not destroyed. Tens of thousands of people — some estimates say over 100,000 — live there, many of them fishing families whose roots go back to the 19th century. When part of Makoko was demolished in 2012, and when 30,000 people were evicted from Otodo-Gbame in 2017, families lost their homes and livelihoods overnight. Is that the Lagos we want? Upgrading — with clean water, toilets and a school like the floating school of 2013 — would cut disease, protect jobs and cost far less than rehousing everyone. That is why I urge you: invest in Makoko, and invest in its people.",
            markScheme: [
              { point: "Clear Point / position (upgrade, not demolish)", keywords: ["upgrade", "should", "must", "not demolish", "invest"] },
              { point: "Evidence: population or history of Makoko", keywords: ["100,000", "40,000", "fishing", "19th century", "tens of thousands"] },
              { point: "Evidence: past evictions (2012 / Otodo-Gbame 2017)", keywords: ["2012", "2017", "otodo", "evict", "demolish"] },
              { point: "Explanation: benefits of upgrading (health, jobs, cost)", keywords: ["disease", "health", "jobs", "cheaper", "cost", "sanitation"] },
              { point: "Persuasive technique (rhetorical question, emotive language, direct address)", keywords: ["?", "governor", "families", "we", "you"] },
              { point: "Link / call to action", keywords: ["urge", "that is why", "therefore", "call", "so i ask"] },
            ],
            commonError: "Writing emotionally without any Lagos evidence, or forgetting to link back to the main argument.",
            guideRef: "lagos-speech",
          },
          {
            id: "lagos-qa-p4-q13",
            question: "Compare the growth of Las Vegas with the growth of Lagos.",
            marks: 4,
            hint: "Compare size, speed and causes.",
            modelAnswer:
              "Both cities have grown very quickly since 1950: Las Vegas from tens of thousands to about 2.3 million, and Lagos from about 300,000 to an estimated 15–20+ million, so Lagos is far larger. Las Vegas grew mainly through migration from other parts of the USA, attracted by tourism and casino jobs, cheap housing and sunshine, whereas Lagos has grown through both rural–urban migration and high natural increase. Las Vegas's infrastructure largely kept up with growth, whereas Lagos's did not.",
            markScheme: [
              { point: "Similarity: both grew rapidly since 1950", keywords: ["both", "rapid", "quickly", "similar", "1950"] },
              { point: "Difference in size (2.3 million vs 15–20+ million)", keywords: ["2.3", "15", "20 million", "larger", "bigger"] },
              { point: "Different causes: domestic migration vs migration + natural increase", keywords: ["natural increase", "within the usa", "other states", "rural-urban", "rural–urban"] },
              { point: "Comparative language / infrastructure kept up vs did not", keywords: ["whereas", "however", "unlike", "infrastructure", "kept up"] },
            ],
            commonError: "Writing two separate descriptions without comparison words.",
            guideRef: "las-vegas",
          },
          {
            id: "lagos-qa-p4-q14",
            question: "Suggest how Lagos could learn from Singapore's approach to managing a growing city.",
            marks: 3,
            hint: "Think MRT, HDB and NEWater.",
            modelAnswer:
              "Lagos could expand its rail network like Singapore's MRT, which carries millions of passengers a day, to reduce go-slows. It could build large-scale affordable public housing like HDB flats to replace informal settlements with safe homes. It could invest in water recycling like NEWater and better drainage, as at the Marina Barrage, to improve water supply and reduce flooding.",
            markScheme: [
              { point: "Public transport: MRT-style rail expansion", keywords: ["mrt", "rail", "train", "public transport"] },
              { point: "Public housing: HDB-style affordable homes", keywords: ["hdb", "public housing", "affordable hous", "flats"] },
              { point: "Water management: NEWater / Marina Barrage / drainage", keywords: ["newater", "marina barrage", "recycl", "drainage", "water"] },
            ],
            commonError: "Ignoring the differences in wealth: a strong answer notes that Singapore's solutions are expensive and took decades.",
            guideRef: "solutions",
          },
          {
            id: "lagos-qa-p4-q15",
            question: "'Lagos will be able to solve its main problems by 2050.' To what extent do you agree? Use evidence from the whole case study.",
            marks: 6,
            hint: "Weigh the scale of the problems against the progress of solutions, then judge.",
            modelAnswer:
              "There are reasons for optimism. Lagos has begun major projects: the BRT since 2008, the Blue Line in 2023 and the Red Line in 2024, Lekki Deep Sea Port in 2023 and Eko Atlantic's sea wall. Its young population and booming industries, from Nollywood to Yabacon Valley, could create the wealth to pay for more. However, the scale of the challenge is enormous. The population, already an estimated 15–20+ million, may grow by millions more by 2050 through migration and natural increase. Most homes still lack piped water, power cuts are daily, and informal settlements such as Makoko lack sewerage. Rising sea levels will make flooding worse. Megaprojects like Eko Atlantic mostly benefit the rich. Overall, I only partly agree: Lagos can make big progress on transport and coastal protection by 2050, but unless investment reaches the poorest areas, problems such as housing, water and flooding are unlikely to be fully solved.",
            markScheme: [
              { point: "Progress: transport projects with dates (BRT 2008, Blue Line 2023, Red Line 2024)", keywords: ["brt", "blue line", "red line", "2008", "2023", "2024"] },
              { point: "Opportunity: young population / growing economy (Nollywood, Yabacon, ports)", keywords: ["young", "nollywood", "yabacon", "port", "econom"] },
              { point: "Scale: continued population growth (15–20+ million and rising)", keywords: ["15", "20 million", "grow", "natural increase", "migrat"] },
              { point: "Persisting problems: water, power, Makoko, flooding", keywords: ["water", "power", "makoko", "flood", "sewerage", "slum"] },
              { point: "Climate threat or inequality of solutions (sea-level rise, Eko Atlantic for rich)", keywords: ["sea-level", "sea level", "climate", "rich", "inequal"] },
              { point: "Justified judgement", keywords: ["overall", "partly", "i agree", "i disagree", "to some extent", "on balance"] },
            ],
            commonError: "Making a prediction without supporting evidence, or not reaching a clear judgement.",
            guideRef: "solutions",
          },
        ],
      },
    ],
  },
};
