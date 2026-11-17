import type { Topic } from "../types";

export const sustainableCities: Topic = {
  id: "sustainable-cities",
  title: "Sustainable Cities & Eco-City Design",
  subject: "Future Cities",
  icon: "🌿",
  summary: "How cities like Singapore and Freiburg plan for the future.",
  intro:
    "More than half of the world's people already live in cities, and by 2050 it will be about two-thirds. Whether those cities are polluted, car-choked and unequal — or green, fair and liveable — is one of the biggest choices of your lifetime. In this topic you will learn what makes a city sustainable, study real cities from Singapore to Freiburg, measure a city's impact with footprints, and use it all to design and judge your own eco-city for the inter-class Eco City competition.",

  guide: [
    {
      id: "what-makes-sustainable",
      heading: "What makes a city sustainable?",
      discovery: {
        problem:
          "A city builds a huge new motorway. Traffic flows faster, shops get deliveries on time and jobs are created. But air pollution rises and a park is lost. Is the motorway a 'success'? Who would say yes, and who would say no?",
        idea:
          "A decision can be good for the economy but bad for the environment or for people's health. A sustainable city tries to balance all three — social, economic and environmental — now AND for future generations.",
      },
      body:
        "**Sustainability** means meeting our needs today without damaging the chances of future generations to meet theirs. The most famous definition comes from the **Brundtland Report** (*Our Common Future*, United Nations, **1987**): sustainable development is *\"development that meets the needs of the present without compromising the ability of future generations to meet their own needs.\"*\n\nA **sustainable city** is one where people can live good lives without using up resources faster than they can be replaced, and without harming the environment for people who come later. Geographers usually split sustainability into **three pillars** (sometimes called the **triple bottom line**):\n\n- **Social** — people are healthy, safe and included: affordable housing, good schools and healthcare, low crime, a voice in decisions.\n- **Economic** — people have jobs and decent incomes, businesses can thrive, and the city can pay for its services over the long term.\n- **Environmental** — clean air and water, low carbon emissions, green spaces, wildlife habitats and little waste.\n\nA city is only truly sustainable when **all three overlap**. A city with great jobs but toxic air fails the environmental test; a beautiful green city that only the rich can afford fails the social test.\n\nIn **2015** all UN member states agreed 17 **Sustainable Development Goals (SDGs)** to reach by 2030. **SDG 11 — Sustainable Cities and Communities** — aims to *\"make cities and human settlements inclusive, safe, resilient and sustainable.\"* Its targets include safe affordable housing, sustainable transport, better waste management, cleaner air and access to green public spaces for everyone.\n\n**Resilient** means a city can cope with and bounce back from shocks such as floods, heatwaves or disease outbreaks — increasingly important as the climate changes.",
      diagram: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram of the three pillars of sustainability"><rect width="320" height="220" fill="#f8fafc"/><circle cx="125" cy="85" r="62" fill="#fca5a5" fill-opacity="0.55" stroke="#dc2626"/><circle cx="195" cy="85" r="62" fill="#93c5fd" fill-opacity="0.55" stroke="#2563eb"/><circle cx="160" cy="145" r="62" fill="#86efac" fill-opacity="0.55" stroke="#16a34a"/><text x="100" y="60" font-size="12" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Social</text><text x="100" y="74" font-size="10" text-anchor="middle" fill="#7f1d1d">housing, health</text><text x="222" y="60" font-size="12" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Economic</text><text x="222" y="74" font-size="10" text-anchor="middle" fill="#1e3a8a">jobs, income</text><text x="160" y="190" font-size="12" text-anchor="middle" fill="#14532d" font-weight="bold">Environmental</text><text x="160" y="203" font-size="10" text-anchor="middle" fill="#14532d">air, water, nature</text><text x="160" y="110" font-size="10" text-anchor="middle" fill="#111827" font-weight="bold">SUSTAINABLE</text><text x="160" y="122" font-size="10" text-anchor="middle" fill="#111827">CITY</text></svg>`,
      diagramCaption:
        "The three pillars of sustainability. A truly sustainable city sits in the centre where all three overlap.",
      keyPoints: [
        "Brundtland (1987): meet the needs of the present without compromising the ability of future generations to meet their own needs.",
        "Three pillars: social, economic and environmental — all three must be met together.",
        "UN SDG 11 (2015): make cities inclusive, safe, resilient and sustainable by 2030.",
      ],
      thinkDeeper:
        "Can a city ever be 100% sustainable if it imports almost all its food and energy, as Singapore does? Does sustainability have to be measured inside the city boundary, or across the whole world?",
      skill: "Classifying evidence into the social, economic and environmental pillars",
    },
    {
      id: "features-of-sustainable-cities",
      heading: "Features of a sustainable city",
      discovery: {
        problem:
          "Two neighbourhoods each house 10,000 people. In Neighbourhood A, homes, shops, school and offices are in separate zones linked by a highway. In Neighbourhood B they are mixed together along a tram line. Which one probably has lower carbon emissions per person — and why?",
        idea:
          "Where things are placed matters as much as what is built. Mixed-use, compact neighbourhoods let people walk, cycle or take public transport, cutting car use, emissions and costs.",
      },
      body:
        "Planners use a toolkit of features to make cities more sustainable. Each feature usually helps more than one pillar.\n\n- **Public transport** — metros, trams and **Bus Rapid Transit (BRT)** move many people using far less energy and space per person than cars. Example: Singapore's MRT.\n- **Cycling and walking** — safe cycle lanes, shaded footpaths and car-free streets. **Active travel** (walking and cycling) is zero-carbon and improves health.\n- **Green spaces** — parks, street trees, green roofs and nature corridors. They cool the city, soak up rainwater, give wildlife habitats and improve mental health. They reduce the **urban heat island** (cities being warmer than the surrounding countryside).\n- **Renewable energy** — solar panels, wind, geothermal and waste-to-energy replace fossil fuels. **Energy-efficient buildings** (insulation, shading, passive design) cut demand in the first place.\n- **Water conservation and recycling** — collecting rainwater, fixing leaks, water-saving taps and **recycling wastewater** (like NEWater).\n- **Waste reduction and recycling** — the **waste hierarchy**: Reduce, Reuse, Recycle, then recover energy, and landfill only as a last resort.\n- **Mixed-use and affordable housing** — homes, shops, offices and services side by side, at prices ordinary people can afford. A **15-minute city** is one where daily needs are within a 15-minute walk or cycle.\n- **Community involvement** — residents help plan and run their neighbourhood. People look after places they helped design.\n\nA **brownfield site** is land that has been built on before (e.g. old factories or barracks); building there saves the countryside. A **greenfield site** has never been built on.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spider diagram of the features of a sustainable city"><rect width="320" height="210" fill="#f0fdf4"/><g stroke="#16a34a" stroke-width="1.5"><line x1="160" y1="105" x2="60" y2="30"/><line x1="160" y1="105" x2="260" y2="30"/><line x1="160" y1="105" x2="40" y2="105"/><line x1="160" y1="105" x2="280" y2="105"/><line x1="160" y1="105" x2="60" y2="180"/><line x1="160" y1="105" x2="260" y2="180"/><line x1="160" y1="105" x2="160" y2="20"/><line x1="160" y1="105" x2="160" y2="192"/></g><ellipse cx="160" cy="105" rx="52" ry="22" fill="#16a34a"/><text x="160" y="101" font-size="11" text-anchor="middle" fill="#fff" font-weight="bold">Sustainable</text><text x="160" y="114" font-size="11" text-anchor="middle" fill="#fff" font-weight="bold">city</text><g font-size="10" fill="#14532d" text-anchor="middle"><text x="60" y="24">Public transport</text><text x="262" y="24">Cycling and walking</text><text x="160" y="14">Green spaces</text><text x="36" y="100">Renewable</text><text x="36" y="112">energy</text><text x="284" y="100">Water</text><text x="284" y="112">recycling</text><text x="60" y="194">Waste reduction</text><text x="262" y="194">Mixed-use housing</text><text x="160" y="206">Community involvement</text></g></svg>`,
      diagramCaption:
        "Eight features of a sustainable city. Strong eco-city designs combine several features so they support each other.",
      keyPoints: [
        "Transport, green space, energy, water, waste, housing and community are the core features.",
        "Most features help more than one pillar (e.g. cycling cuts emissions AND improves health AND saves money).",
        "Compact, mixed-use neighbourhoods reduce the need to travel by car.",
      ],
      thinkDeeper:
        "Green spaces take up land that could be used for housing. In a land-scarce city, how could you have BOTH more homes and more nature? (Think: up, down, and on roofs.)",
    },
    {
      id: "singapore-city-in-nature",
      heading: "Case study: Singapore — from Garden City to City in Nature",
      discovery: {
        problem:
          "Singapore is only about 730 km², has almost no rivers or lakes big enough to supply water, and about 6 million people. Yet it ranks as one of Asia's greenest cities and has some of the least congested roads for a city its size. How could a crowded island with so few natural resources pull this off?",
        idea:
          "Long-term planning by a strong government: pricing car use, building public transport and public housing, recycling water, and treating greenery as essential infrastructure — not decoration.",
      },
      body:
        "**Greenery.** In **1967** Prime Minister Lee Kuan Yew launched the **Garden City** vision, planting thousands of roadside trees to make the city cleaner, cooler and more attractive to investors. This became the **City in a Garden** idea and, since 2020, **City in Nature** — bringing nature back into the city through nature parks, park connectors and corridors. Examples: **Gardens by the Bay** (opened 2012), **Sungei Buloh Wetland Reserve**, and the **Park Connector Network** linking parks for walkers and cyclists.\n\n**Water — the Four National Taps.** Singapore gets water from (1) local catchment (reservoirs), (2) imported water from Malaysia, (3) **NEWater** and (4) desalination.\n\n- **NEWater** (launched **2003**) is ultra-clean recycled wastewater, treated by microfiltration, reverse osmosis and ultraviolet disinfection. It can meet up to about **40%** of today's water demand, rising to about **55% by 2060**.\n- **Marina Barrage** (opened **2008**) dams the mouth of the Marina Channel to create Singapore's 15th reservoir (a freshwater reservoir in the city centre), controls flooding in low-lying areas and is a place for recreation.\n\n**Transport.** Singapore was the first city in the world to charge drivers to enter the centre: the **Area Licensing Scheme (1975)**, replaced by **Electronic Road Pricing (ERP)** in **1998**, which charges more at busy times. Since **1990** the **Certificate of Entitlement (COE)** caps the number of cars — buyers must bid for a 10-year licence, often costing over S$100,000. Meanwhile the **MRT** network keeps expanding.\n\n**Housing.** About **77–80%** of Singapore residents live in **HDB** (Housing & Development Board) public flats, and most own them. HDB towns are planned with schools, hawker centres, clinics and MRT stations close by. **Tengah**, the newest, is a **'forest town'** with a roughly 100 m-wide **Forest Corridor**, car-free town centre (roads run underground) and centralised cooling.\n\n**Singapore Green Plan 2030** (launched 2021) sets targets such as planting **1 million more trees**, every household within a 10-minute walk of a park, more solar energy, more cycle paths and **30% less waste sent to landfill per person per day**. Challenges remain: almost all food and energy is imported, air-conditioning use is high, and the only landfill, **Semakau**, is expected to be full by about 2035.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map of Singapore showing Marina Barrage, Tengah and NEWater"><defs><marker id="sg-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e3a8a"/></marker></defs><rect width="320" height="210" fill="#e0f2fe"/><path d="M40,95 C60,55 120,45 170,52 C220,48 270,60 290,90 C298,120 270,140 230,145 C190,152 160,150 130,148 C90,150 50,135 40,95 Z" fill="#bbf7d0" stroke="#15803d"/><circle cx="185" cy="128" r="9" fill="#60a5fa" stroke="#1d4ed8"/><text x="185" y="166" font-size="10" text-anchor="middle" fill="#1e3a8a">Marina Barrage (2008)</text><line x1="185" y1="156" x2="185" y2="139" stroke="#1e3a8a" marker-end="url(#sg-arrow)"/><rect x="78" y="82" width="22" height="16" fill="#166534"/><text x="88" y="76" font-size="10" text-anchor="middle" fill="#14532d">Tengah forest town</text><circle cx="250" cy="105" r="6" fill="#0ea5e9"/><text x="250" y="96" font-size="10" text-anchor="middle" fill="#0c4a6e">NEWater plant</text><path d="M140,49 L140,22" stroke="#7c2d12" stroke-width="2" stroke-dasharray="4 3"/><text x="145" y="20" font-size="10" fill="#7c2d12">Pipeline from Malaysia</text><text x="295" y="30" font-size="12" text-anchor="middle" font-weight="bold">N</text><line x1="295" y1="50" x2="295" y2="34" stroke="#111827" stroke-width="2" marker-end="url(#sg-arrow)"/><line x1="20" y1="195" x2="80" y2="195" stroke="#111827" stroke-width="2"/><text x="50" y="190" font-size="10" text-anchor="middle">about 10 km</text><text x="312" y="190" font-size="10" text-anchor="end" fill="#334155">ERP gantries ring the city centre</text></svg>`,
      diagramCaption:
        "Simplified sketch map of Singapore: Marina Barrage in the city centre, Tengah forest town in the west, a NEWater plant and the water pipeline from Malaysia.",
      keyPoints: [
        "Garden City (1967) → City in a Garden → City in Nature (2020); Green Plan 2030 targets 1 million more trees.",
        "Four National Taps: local catchment, imported water, NEWater (2003, up to ~40% of demand) and desalination; Marina Barrage (2008).",
        "Car control: Area Licensing Scheme 1975 → ERP 1998; COE vehicle quota since 1990.",
        "About 77–80% of residents live in HDB flats; Tengah is a car-free-centre 'forest town'.",
      ],
      caseStudy: {
        place: "Singapore",
        facts: [
          "Garden City vision launched by Lee Kuan Yew in 1967; renamed 'City in Nature' in 2020.",
          "NEWater launched in 2003; can meet up to about 40% of water demand, target about 55% by 2060.",
          "Marina Barrage opened in 2008 — 15th reservoir, flood control and recreation.",
          "Area Licensing Scheme 1975 (world first) → Electronic Road Pricing 1998; COE vehicle quota since 1990.",
          "About 77–80% of residents live in HDB flats; Tengah forest town has a ~100 m-wide Forest Corridor.",
          "Green Plan 2030: 1 million more trees and 30% less waste to landfill per person per day.",
        ],
      },
      thinkDeeper:
        "COE prices make car ownership very expensive. This cuts traffic and pollution — but is it socially fair? Who gains and who loses?",
      skill: "Drawing and annotating a sketch map (with north arrow and scale)",
    },
    {
      id: "curitiba-brt-recycling",
      heading: "Case study: Curitiba, Brazil — cheap, clever solutions",
      discovery: {
        problem:
          "In the 1970s Curitiba was growing fast but was too poor to build an underground metro. A metro can cost over US$100 million per kilometre. What could a city do instead to move a million people a day, cheaply?",
        idea:
          "Make buses behave like a metro: give them their own lanes, raised 'tube' stations where you pay before boarding, and huge articulated buses. This is Bus Rapid Transit (BRT) — a fraction of the cost of a metro.",
      },
      body:
        "**Curitiba** is a city of about **1.8–2 million people** (about 3.5 million in the metropolitan area) in southern **Brazil**, an emerging economy. From **1971** the architect-mayor **Jaime Lerner** and his team showed that a city does not need to be rich to be sustainable — it needs to be clever.\n\n**Transport — the original BRT.** In **1974** Curitiba opened the world's first full **Bus Rapid Transit** system: buses run in dedicated lanes along 'structural axes', and high-density housing and offices were zoned along these routes so people live near the buses. From **1991** distinctive glass **tube stations** let passengers pay before boarding and step onto the bus level with the floor, so stops take seconds. Bi-articulated buses carry around **250 passengers**. BRT has since been copied by more than 150 cities worldwide (e.g. Bogotá's TransMilenio).\n\n**Green spaces.** Curitiba turned flood-prone river valleys into **parks with lakes** that hold floodwater instead of building expensive concrete channels — green space per person rose from under 1 m² in the early 1970s to around **50 m²** (one of the highest in Latin America). Sheep have been used to mow some park grass!\n\n**Waste — the Green Exchange.** In **1991** Curitiba began the **'Câmbio Verde' (Green Exchange)**: people from poorer areas can swap bags of recyclables for **fresh fruit and vegetables** (about 4 kg of recyclables for 1 kg of food). This cleans up neighbourhoods that bin lorries struggle to reach, cuts landfill, gives poorer families food and supports local farmers — all three pillars at once. Around 70% of residents recycle.\n\n**Pedestrianisation.** In 1972 the main shopping street, Rua XV de Novembro, became one of Brazil's first pedestrian streets — reportedly in about 72 hours.\n\n**Problems today:** the buses are now overcrowded at peak times, car ownership has grown, and informal settlements (favelas) on the outskirts have poorer access to services.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of Curitiba bus rapid transit structural axes"><defs><marker id="cu-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b91c1c"/></marker></defs><rect width="320" height="200" fill="#fefce8"/><circle cx="160" cy="100" r="22" fill="#fde68a" stroke="#ca8a04"/><text x="160" y="104" font-size="10" text-anchor="middle">CBD</text><g stroke="#dc2626" stroke-width="4"><line x1="160" y1="78" x2="160" y2="12"/><line x1="160" y1="122" x2="160" y2="188"/><line x1="138" y1="100" x2="30" y2="100"/><line x1="182" y1="100" x2="290" y2="100"/><line x1="176" y1="84" x2="250" y2="25"/></g><g fill="#94a3b8"><rect x="166" y="30" width="10" height="30"/><rect x="144" y="40" width="10" height="20"/><rect x="200" y="86" width="30" height="8"/><rect x="60" y="106" width="30" height="8"/><rect x="166" y="140" width="10" height="28"/></g><circle cx="80" cy="45" r="14" fill="#86efac"/><text x="80" y="49" font-size="10" text-anchor="middle">park</text><circle cx="250" cy="160" r="14" fill="#86efac"/><text x="250" y="164" font-size="10" text-anchor="middle">park</text><text x="250" y="60" font-size="10" fill="#b91c1c">BRT lane</text><line x1="245" y1="64" x2="222" y2="50" stroke="#b91c1c" marker-end="url(#cu-arrow)"/><text x="10" y="185" font-size="10" fill="#334155">grey = high-rise housing along routes</text></svg>`,
      diagramCaption:
        "Curitiba's 'structural axes': BRT lanes radiate from the centre, with high-density buildings zoned along them, and flood parks in river valleys.",
      keyPoints: [
        "World's first full BRT system (1974): dedicated lanes, tube stations (1991), pay before boarding.",
        "Flood-plain parks raised green space to around 50 m² per person.",
        "Green Exchange (1991): recyclables swapped for fresh food — helps all three pillars.",
      ],
      caseStudy: {
        place: "Curitiba, Brazil",
        facts: [
          "Population about 1.8–2 million (about 3.5 million metro area); mayor Jaime Lerner from 1971.",
          "BRT opened 1974; tube stations from 1991; bi-articulated buses carry about 250 people.",
          "Green space rose from under 1 m² to about 50 m² per person.",
          "Green Exchange (Câmbio Verde) from 1991: about 4 kg of recyclables = 1 kg of fresh food.",
          "Rua XV de Novembro pedestrianised in 1972.",
        ],
      },
      thinkDeeper:
        "Curitiba's ideas were cheap. Why might cheap, simple solutions spread to other cities more easily than expensive high-tech ones like Masdar's driverless pods?",
    },
    {
      id: "freiburg-vauban",
      heading: "Case study: Freiburg and the Vauban district, Germany",
      discovery: {
        problem:
          "In Vauban, Freiburg, most families have chosen not to own a car — even though they are wealthy enough to. What would a neighbourhood have to offer to make you happy to live without a car?",
        idea:
          "Make car-free living easier and cheaper than driving: shops and schools within walking distance, a tram every few minutes, safe streets for children, car-sharing for occasional trips — and parking that is expensive and far away.",
      },
      body:
        "**Freiburg im Breisgau** is a city of about **230,000 people** in south-west Germany, one of the sunniest parts of the country. It is often called Germany's 'Green City'. Its strong environmental movement grew in the 1970s, when local people successfully protested against a planned nuclear power station nearby.\n\n**Transport.** Freiburg has an extensive **tram** network, cheap regional travel passes and over 400 km of cycle routes. Roughly **a third of trips are made by bicycle**, and car use is low for a German city.\n\n**Vauban** is a district built on a **brownfield site** — former French army barracks — from the late **1990s**. About **5,500 people** live there. Key features:\n\n- **Car-free and parking-free streets.** Residents may not park outside their homes. Car owners must buy a space in a **solar-roofed multi-storey garage** at the edge of the district, which is expensive. Around **70%** of households have no car. Streets are play spaces for children.\n- **Tram line** (opened 2006) to the city centre about 15 minutes away; car-sharing clubs for occasional trips.\n- **Energy.** Homes are built to low-energy or **passive house** standards (so well insulated they need almost no heating). The **Solar Settlement (Solarsiedlung)** has **'plus-energy' houses** that produce more electricity from solar panels than they use, selling the surplus to the grid. A woodchip combined heat-and-power plant heats much of the district.\n- **Water and green space.** Rainwater soaks into green strips and swales instead of drains; mature trees from the barracks were kept.\n- **Community involvement.** Residents' group **Forum Vauban** helped plan the district, and many homes were built by **Baugruppen** — groups of future neighbours who design and build together.\n\n**Criticisms:** Vauban is mostly middle-class and housing is now expensive, so it may not be socially sustainable for lower-income families; and many trips outside the city still need a car.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan of the Vauban district with tram, solar garage and car-free streets"><rect width="320" height="200" fill="#f1f5f9"/><rect x="20" y="20" width="240" height="160" fill="#dcfce7" stroke="#15803d"/><line x1="20" y1="100" x2="300" y2="100" stroke="#dc2626" stroke-width="4"/><text x="290" y="92" font-size="10" text-anchor="end" fill="#b91c1c">Tram to city centre</text><g fill="#fde68a" stroke="#a16207"><rect x="40" y="35" width="30" height="20"/><rect x="85" y="35" width="30" height="20"/><rect x="130" y="35" width="30" height="20"/><rect x="40" y="120" width="30" height="20"/><rect x="85" y="120" width="30" height="20"/><rect x="130" y="120" width="30" height="20"/></g><text x="100" y="70" font-size="10" text-anchor="middle" fill="#14532d">Car-free play streets</text><rect x="190" y="125" width="55" height="40" fill="#cbd5e1" stroke="#334155"/><g stroke="#0369a1"><line x1="192" y1="125" x2="243" y2="125" stroke-width="4"/></g><text x="217" y="143" font-size="10" text-anchor="middle">Solar</text><text x="217" y="156" font-size="10" text-anchor="middle">garage</text><g fill="#16a34a"><circle cx="200" cy="45" r="8"/><circle cx="225" cy="55" r="8"/><circle cx="240" cy="35" r="8"/></g><text x="222" y="78" font-size="10" text-anchor="middle" fill="#14532d">Kept old trees</text><text x="80" y="195" font-size="10" fill="#334155">yellow = homes with solar roofs</text></svg>`,
      diagramCaption:
        "Simplified plan of Vauban: car-free residential streets, homes with solar roofs, a tram line through the middle and cars kept in a solar garage at the edge.",
      keyPoints: [
        "Vauban: brownfield ex-barracks, about 5,500 people, around 70% of households car-free.",
        "Plus-energy solar houses make more energy than they use; passive houses need almost no heating.",
        "Residents helped plan it (Forum Vauban, Baugruppen) — strong community involvement.",
      ],
      caseStudy: {
        place: "Freiburg (Vauban district), Germany",
        facts: [
          "Freiburg population about 230,000; roughly a third of trips by bicycle.",
          "Vauban built on former French army barracks (brownfield) from the late 1990s; about 5,500 residents.",
          "Around 70% of Vauban households do not own a car; cars parked in edge-of-district solar garages.",
          "Tram line to the city centre opened in 2006.",
          "Solar Settlement 'plus-energy' houses produce more energy than they consume.",
        ],
      },
      thinkDeeper:
        "Vauban works well for its residents, but house prices there are high. Can a neighbourhood be called 'sustainable' if most people can't afford to live in it?",
    },
    {
      id: "masdar-city",
      heading: "Case study: Masdar City, UAE — ambition vs reality",
      discovery: {
        problem:
          "In 2006 Abu Dhabi announced a brand-new desert city that would be zero-carbon, zero-waste and car-free, housing about 50,000 people by 2016. Years later only a small part has been built. What might make it harder to build a sustainable city from scratch than to improve an existing one?",
        idea:
          "Brand-new eco-cities are expensive, rely on untested technology and need people to choose to move there. Improving existing cities step by step (like Curitiba or Singapore) is often more realistic.",
      },
      body:
        "**Masdar City** is a planned eco-city near Abu Dhabi airport in the **United Arab Emirates (UAE)**, an oil-rich country with a hot desert climate. It was launched in **2006** by the government-owned company Masdar and designed by architects **Foster + Partners**.\n\n**The original vision:**\n\n- A **zero-carbon, zero-waste, car-free** city of about **6 km²** for around **40,000–50,000 residents** and 50,000 daily commuters, finished by about 2016.\n- Powered entirely by **renewable energy**, especially solar (a 10 MW solar farm was built early on).\n- **Traditional Arab design** for cooling: narrow, shaded streets angled to catch breezes, buildings raised on a podium, and a modern **wind tower** that draws cooler air down into a public square — so streets can be several degrees cooler than the open desert.\n- Driverless electric **Personal Rapid Transit (PRT)** pods running underneath the city instead of cars.\n\n**What actually happened:** after the 2008 global financial crisis, funding was cut. The **zero-carbon** target was dropped for 'low carbon', the PRT stopped after a short pilot line with only a couple of stations, and the completion date slipped to the 2030s. Only a small fraction has been built, with a few thousand residents plus students and workers — critics have called it a 'green ghost town' or an **eco-enclave** for the wealthy. On the positive side, it hosts the headquarters of **IRENA** (the International Renewable Energy Agency), a university and many clean-tech companies, and it has been a testing ground for green building ideas.\n\n**Lesson:** Masdar shows the gap between **ambitious design** and **delivery**. It scores well on environmental design but weaker on the social pillar (who can afford to live there?) and the economic pillar (huge costs, slow progress).",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a Masdar City street showing wind tower, shade and podium"><defs><marker id="ma-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0284c7"/></marker></defs><rect width="320" height="200" fill="#fff7ed"/><circle cx="290" cy="25" r="14" fill="#fbbf24"/><rect x="0" y="160" width="320" height="40" fill="#d6d3d1"/><text x="160" y="185" font-size="10" text-anchor="middle">Raised podium (PRT pods ran underneath)</text><rect x="30" y="70" width="80" height="90" fill="#fed7aa" stroke="#9a3412"/><rect x="210" y="70" width="80" height="90" fill="#fed7aa" stroke="#9a3412"/><text x="70" y="115" font-size="10" text-anchor="middle">Building</text><text x="250" y="115" font-size="10" text-anchor="middle">Building</text><rect x="110" y="70" width="100" height="6" fill="#64748b"/><text x="160" y="66" font-size="10" text-anchor="middle">Shading screen</text><rect x="150" y="20" width="20" height="56" fill="#e2e8f0" stroke="#475569"/><text x="140" y="16" font-size="10" text-anchor="middle">Wind tower</text><line x1="160" y1="40" x2="160" y2="145" stroke="#0284c7" stroke-width="2" marker-end="url(#ma-arrow)"/><text x="160" y="155" font-size="10" text-anchor="middle" fill="#0369a1">cool air sinks</text><text x="160" y="100" font-size="10" text-anchor="middle" fill="#334155">narrow shaded street</text></svg>`,
      diagramCaption:
        "Cross-section of a Masdar street: narrow and shaded, with a wind tower pulling cooler air down and buildings on a raised podium.",
      keyPoints: [
        "Launched 2006; planned as zero-carbon, zero-waste and car-free for about 40,000–50,000 residents.",
        "Uses traditional passive cooling (narrow streets, wind tower) plus solar power.",
        "Largely unfulfilled: zero-carbon goal dropped, PRT pods abandoned, only a small fraction built.",
      ],
      caseStudy: {
        place: "Masdar City, Abu Dhabi, UAE",
        facts: [
          "Launched in 2006; designed by Foster + Partners; planned area about 6 km².",
          "Original target: about 40,000–50,000 residents and completion around 2016 — now pushed into the 2030s.",
          "Early 10 MW solar farm; wind tower cools the public square.",
          "Driverless PRT pods: only a short pilot line built before the plan was dropped.",
          "Hosts the headquarters of IRENA (International Renewable Energy Agency).",
        ],
      },
      thinkDeeper:
        "Is Masdar a failure, or a useful experiment? Could a city that never reaches its targets still help the world become more sustainable?",
    },
    {
      id: "measuring-sustainability",
      heading: "Measuring sustainability: ecological and carbon footprints",
      discovery: {
        problem:
          "Singapore has only about 730 km² of land, but its people eat food grown in dozens of countries, burn imported gas for electricity and fly all over the world. How much land would Singapore REALLY need to support its lifestyle?",
        idea:
          "Far more land than the city itself covers. The ecological footprint adds up all the land and sea needed to supply what people use and absorb their waste — wherever in the world that land is.",
      },
      body:
        "To compare cities fairly we need to **measure** sustainability. Two common measures are footprints.\n\n**Ecological footprint** — the area of **biologically productive land and sea** needed to supply all the resources a person (or city or country) uses — food, timber, fibres, built-up land — and to **absorb its waste**, especially carbon dioxide. It is measured in **global hectares (gha)** per person. One hectare = 100 m × 100 m.\n\n- The world average footprint is about **2.6 gha per person**, but the Earth can only supply (its **biocapacity**) about **1.5–1.6 gha per person**. So humanity uses resources about **1.7 times faster** than the Earth can renew them — like living on '1.7 Earths'.\n- **Earth Overshoot Day** marks the date each year when humanity has used up a whole year's worth of nature's resources — recently around **late July or early August**.\n- High-income countries like the USA have footprints several times larger than low-income countries.\n- Cities have footprints hundreds of times their own area because they import food, water, energy and materials. Singapore's biocapacity is tiny, so almost all of its footprint lies overseas.\n\n**Carbon footprint** — the total **greenhouse gases** (measured in tonnes of **carbon dioxide equivalent, CO₂e**) caused by a person, product, organisation or city, each year. The world average is about **4–5 tonnes CO₂ per person** from fossil fuels; Singapore's is around **8–9 tonnes** because of high energy use (air-conditioning, industry and refining).\n\n**Other indicators** of a sustainable city include: % of trips by public transport, walking or cycling; air quality (e.g. PM2.5 levels); green space per person (m²); % of waste recycled; water use per person (litres per day); % of energy from renewables; and % of people in affordable housing. Using a **range of indicators** across all three pillars gives a fairer picture than one number.\n\n**Calculating percentage change:** (new − old) ÷ old × 100. For example, if Curitiba's green space rose from 0.5 m² to 50 m² per person, the increase is (50 − 0.5) ÷ 0.5 × 100 = **9,900%**.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart comparing ecological footprints with world biocapacity"><rect width="320" height="210" fill="#ffffff"/><line x1="50" y1="20" x2="50" y2="170" stroke="#111827"/><line x1="50" y1="170" x2="300" y2="170" stroke="#111827"/><g font-size="10" text-anchor="end" fill="#111827"><text x="45" y="173">0</text><text x="45" y="133">2</text><text x="45" y="93">4</text><text x="45" y="53">6</text><text x="45" y="23">7.5</text></g><text x="14" y="100" font-size="10" transform="rotate(-90 14 100)" text-anchor="middle">gha per person</text><rect x="70" y="150" width="40" height="20" fill="#86efac"/><rect x="130" y="118" width="40" height="52" fill="#fcd34d"/><rect x="190" y="20" width="40" height="150" fill="#f87171"/><rect x="250" y="138" width="40" height="32" fill="#93c5fd"/><g font-size="10" text-anchor="middle"><text x="90" y="185">India</text><text x="150" y="185">World</text><text x="210" y="185">USA</text><text x="270" y="185">Biocapacity</text><text x="90" y="145">~1</text><text x="150" y="113">~2.6</text><text x="210" y="15">~7.5+</text><text x="270" y="152">~1.6</text></g><line x1="50" y1="138" x2="300" y2="138" stroke="#2563eb" stroke-dasharray="5 3"/><text x="298" y="134" font-size="10" text-anchor="end" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" paint-order="stroke">Earth's biocapacity per person</text><text x="160" y="203" font-size="10" text-anchor="middle" fill="#334155">Approximate figures, rounded</text></svg>`,
      diagramCaption:
        "Approximate ecological footprints per person. Bars above the dashed biocapacity line are using more than their 'fair Earth share'.",
      keyPoints: [
        "Ecological footprint = productive land and sea needed to supply resources and absorb waste, in global hectares (gha).",
        "World average about 2.6 gha per person vs Earth's biocapacity of about 1.6 gha — we are in 'overshoot'.",
        "Carbon footprint = greenhouse gases emitted, in tonnes of CO₂ equivalent per year.",
        "Use several indicators across all three pillars to judge a city fairly.",
      ],
      thinkDeeper:
        "If a city moves its polluting factories to another country, its own carbon footprint falls. Has it really become more sustainable? How could footprints be measured to stop this 'exporting' of pollution?",
      skill: "Interpreting a bar chart and calculating percentage change",
    },
    {
      id: "designing-eco-city",
      heading: "Designing an eco-city: the inter-class Eco City competition",
      discovery: {
        problem:
          "You have a blank 4 km² site by a river for 40,000 people. Where would you put the factory, the homes, the school and the solar farm? What would you do first — draw roads or draw where people need to go?",
        idea:
          "Good eco-city design starts with people's daily journeys and the site's natural features (river, slope, sun, wind), then uses zoning so homes, jobs and services are close together and polluting land uses are kept downwind and away from homes.",
      },
      body:
        "In the **Eco City competition** your class designs a sustainable city and other classes judge it. A strong design covers **seven themes** and explains *why* each choice is sustainable.\n\n- **Zoning** — dividing land into uses (residential, commercial, industrial, green space). Use **mixed-use zoning** in the centre and around transit stops (**transit-oriented development**); keep heavy industry **downwind** (in Singapore the prevailing winds are the monsoons) and away from homes and water supplies. Protect floodplains as parks.\n- **Energy** — rooftop solar, solar farms, wind turbines where windy, waste-to-energy plants; energy-efficient buildings with shading, natural ventilation and green roofs; district cooling in hot climates.\n- **Transport** — a spine of trams, MRT or BRT; every home within about 400–500 m (5–10 minutes' walk) of a stop; protected cycle lanes; car-free centre; road pricing or limited parking.\n- **Water** — rainwater harvesting, reservoirs, wetlands that clean water naturally, **sustainable drainage** (permeable surfaces, swales), recycled water like NEWater.\n- **Waste** — follow the waste hierarchy: reduce, reuse, recycle, compost food waste, recover energy; easy-to-use recycling points; schemes like Curitiba's Green Exchange.\n- **Housing** — compact, **affordable**, mixed-income housing (like HDB), built to high energy standards; mid-rise and high-rise to save land.\n- **Community** — schools, clinics, markets and community centres within a 15-minute walk; residents involved in planning; community gardens.\n\n**Evaluating designs with criteria.** Judges should use clear **criteria** (standards) linked to the three pillars, for example: emissions, green space per person, affordability, access to transport, resilience to floods and heat, cost and **feasibility** (can it really be built?). A **weighted scoring matrix** gives each criterion a weight (how important it is) and scores each design out of 5 or 10. Multiply score × weight and add up.\n\nA good evaluation also states **trade-offs** (e.g. more parkland means fewer homes) and **who benefits**, and reaches a **justified conclusion** — just like the real judges of Singapore's Tengah or Masdar.",
      diagram: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Zoning plan for an eco-city with prevailing wind arrow"><defs><marker id="eco-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#111827"/></marker></defs><rect width="320" height="220" fill="#f8fafc"/><path d="M0,190 C80,175 160,200 320,182 L320,220 L0,220 Z" fill="#7dd3fc"/><text x="160" y="212" font-size="10" text-anchor="middle">River (floodplain kept as park)</text><rect x="20" y="150" width="280" height="28" fill="#bbf7d0"/><text x="160" y="168" font-size="10" text-anchor="middle">Wetland park and floodplain</text><rect x="90" y="60" width="140" height="80" fill="#fde68a" stroke="#a16207"/><text x="160" y="95" font-size="10" text-anchor="middle">Mixed-use centre</text><text x="160" y="108" font-size="10" text-anchor="middle">homes + shops + offices</text><rect x="20" y="60" width="60" height="80" fill="#fecaca" stroke="#b91c1c"/><text x="50" y="96" font-size="10" text-anchor="middle">Housing</text><rect x="240" y="60" width="60" height="80" fill="#fecaca" stroke="#b91c1c"/><text x="270" y="96" font-size="10" text-anchor="middle">Housing</text><rect x="240" y="15" width="60" height="35" fill="#cbd5e1" stroke="#334155"/><text x="270" y="36" font-size="10" text-anchor="middle">Industry</text><rect x="20" y="15" width="70" height="35" fill="#fef9c3" stroke="#ca8a04"/><text x="55" y="36" font-size="10" text-anchor="middle">Solar farm</text><line x1="20" y1="125" x2="300" y2="125" stroke="#dc2626" stroke-width="3"/><text x="160" y="137" font-size="10" text-anchor="middle" fill="#b91c1c">Tram / BRT spine</text><line x1="120" y1="32" x2="225" y2="32" stroke="#111827" stroke-width="2" marker-end="url(#eco-arrow)"/><text x="172" y="26" font-size="10" text-anchor="middle">prevailing wind</text></svg>`,
      diagramCaption:
        "A simple eco-city zoning plan: mixed-use centre on a tram spine, industry downwind, floodplain kept as wetland park and a solar farm on the edge.",
      keyPoints: [
        "Cover all seven themes: zoning, energy, transport, water, waste, housing, community.",
        "Put industry downwind and away from homes; keep floodplains as parks; build dense mixed-use around transit.",
        "Evaluate with criteria linked to the three pillars — use a weighted scoring matrix and state trade-offs.",
      ],
      thinkDeeper:
        "Your design scores 10/10 for environment but would cost twice the budget. Should judges reward ambition or feasibility more? How would you weight the criteria — and why?",
      skill: "Evaluating designs using criteria and a weighted scoring matrix",
    },
  ],

  mnemonics: [
    {
      topic: "The three pillars of sustainability",
      device: "SEE the future — Social, Economic, Environmental",
      explanation:
        "A sustainable city lets us SEE a good future: S = Social (people), E = Economic (jobs, money), E = Environmental (nature, climate). Check every idea against all three.",
    },
    {
      topic: "Singapore's Four National Taps",
      device: "'Locals Import New Drinks' — Local catchment, Imported water, NEWater, Desalination",
      explanation:
        "The four sources of Singapore's water: rain caught in reservoirs (local catchment), water piped from Malaysia (imported), recycled wastewater (NEWater) and treated seawater (desalination).",
    },
    {
      topic: "Seven themes of eco-city design",
      device: "'Zany Eco Towns Will Win Hearts Collectively' — Zoning, Energy, Transport, Water, Waste, Housing, Community",
      explanation:
        "Run through Z-E-T-W-W-H-C to make sure your Eco City competition design covers every theme the judges will look for.",
    },
    {
      topic: "Key Singapore dates",
      device: "'67 Garden, '75 Licence, '90 COE, '98 ERP, '03 NEW, '08 Barrage",
      explanation:
        "1967 Garden City; 1975 Area Licensing Scheme; 1990 Certificate of Entitlement; 1998 Electronic Road Pricing; 2003 NEWater; 2008 Marina Barrage — in time order.",
    },
  ],

  examMistakes: [
    "Listing features of a sustainable city without explaining HOW each one makes the city more sustainable (e.g. 'it has trams' instead of 'trams carry many people using less energy per person than cars, cutting CO₂ emissions').",
    "Only discussing the environmental pillar and ignoring social and economic sustainability.",
    "Giving no named place or figure — write 'NEWater, launched 2003, can meet up to about 40% of Singapore's water demand', not 'Singapore recycles water'.",
    "Mixing up ERP (1998, charging to use roads) and COE (1990, a quota on owning cars).",
    "Confusing ecological footprint (land and sea area in global hectares) with carbon footprint (greenhouse gases in tonnes of CO₂e).",
    "In 'evaluate' or 'to what extent' questions, giving only one side or no final judgement — always weigh up successes and problems and reach a conclusion.",
    "Calling Masdar City a complete success — it is a famous example of an eco-city that has NOT met its original targets.",
    "Getting percentage change the wrong way round — divide the change by the ORIGINAL (old) value, not the new one.",
  ],

  misconceptions: [
    {
      wrong: "Sustainable just means 'environmentally friendly'.",
      right: "Sustainability has three pillars — social, economic and environmental. A green city that is unaffordable or has no jobs is not truly sustainable.",
    },
    {
      wrong: "Planting more trees is the main way to make a city sustainable.",
      right: "Trees help, but transport, energy, housing, water and waste usually matter more for emissions and quality of life. Sustainability needs a whole system.",
    },
    {
      wrong: "Only rich cities can afford to be sustainable.",
      right: "Curitiba, in a middle-income country, used cheap ideas like BRT and the Green Exchange. Some of the most expensive projects, like Masdar City, have struggled.",
    },
    {
      wrong: "A city with a small area has a small ecological footprint.",
      right: "A city's footprint includes all the land and sea used worldwide to supply it. Singapore covers about 730 km² but its footprint is many times larger because it imports almost everything.",
    },
    {
      wrong: "NEWater is just seawater with the salt removed.",
      right: "That is desalination. NEWater is treated used water (wastewater) purified by microfiltration, reverse osmosis and UV disinfection.",
    },
    {
      wrong: "High-rise housing is always unsustainable.",
      right: "Well-planned high-rise housing like HDB uses less land per person, makes public transport viable and keeps green space free — if it is energy-efficient and well-served by amenities.",
    },
  ],

  expertDebates: [
    {
      question: "Should cities build new eco-cities from scratch or retrofit existing ones?",
      detail:
        "New eco-cities like Masdar or Tengah can be designed perfectly from day one, but they are costly and may stay half-empty. Retrofitting old cities (adding cycle lanes, insulating buildings, like Freiburg) helps millions of existing residents but is slow and messy. Most experts say we need both — but since most of the cities of 2050 already exist, retrofitting matters hugely.",
    },
    {
      question: "Is it fair to make driving very expensive, as Singapore does with COE and ERP?",
      detail:
        "Supporters say pricing cuts congestion and pollution and pays for public transport, and that Singapore's excellent MRT gives everyone an alternative. Critics say it turns cars into a luxury for the rich, and can be hard on tradespeople, the elderly or disabled people who rely on a car. The debate is about balancing the environmental pillar with social fairness.",
    },
    {
      question: "Are footprints a fair way to compare cities?",
      detail:
        "Ecological and carbon footprints are simple and powerful, but they can hide things: a city that imports goods made elsewhere may look 'cleaner' than the factory city that made them. Some experts prefer consumption-based footprints (counting what people buy), while others argue cities should only be judged on what they control.",
    },
  ],

  realWorld: [
    {
      title: "Your water bottle might be NEWater",
      detail:
        "Most NEWater goes to factories (such as wafer-fabrication plants that need ultra-pure water) and air-conditioning cooling towers, but some is added to reservoirs in dry periods — so it can end up in your tap.",
      emoji: "💧",
    },
    {
      title: "ERP 2.0 on Singapore's cars",
      detail:
        "Singapore is moving to satellite-based Electronic Road Pricing with new on-board units in every car — one day charges could be based on distance travelled rather than gantries.",
      emoji: "🚗",
    },
    {
      title: "Tengah — a new forest town",
      detail:
        "Families started moving into Tengah in 2022. Its town centre puts traffic underground, and its Forest Corridor lets wildlife move between the Western Catchment and the Central Catchment.",
      emoji: "🌳",
    },
    {
      title: "Recycling at home",
      detail:
        "Singapore's domestic recycling rate is only about 12%. Contamination (food or liquid in the blue bin) is a big problem — rinsing containers makes recycling actually work.",
      emoji: "♻️",
    },
    {
      title: "BRT around the world",
      detail:
        "Curitiba's 1970s idea now runs in over 150 cities, from Bogotá to Jakarta to Guangzhou, carrying tens of millions of passengers a day.",
      emoji: "🚌",
    },
    {
      title: "Eco City competition",
      detail:
        "Architects and planners use exactly the same tools you will — zoning maps, criteria and scoring matrices — when they compete to design new towns and districts.",
      emoji: "🏆",
    },
  ],

  flashcards: [
    { front: "Sustainable development (Brundtland, 1987)", back: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs." },
    { front: "Three pillars of sustainability", back: "Social, economic and environmental — a sustainable city meets all three together." },
    { front: "UN SDG 11", back: "Sustainable Cities and Communities: make cities inclusive, safe, resilient and sustainable (agreed 2015, target 2030)." },
    { front: "NEWater", back: "Singapore's ultra-clean recycled wastewater, launched 2003; up to about 40% of water demand now, about 55% by 2060." },
    { front: "Four National Taps", back: "Local catchment, imported water (Malaysia), NEWater and desalination." },
    { front: "Marina Barrage (2008)", back: "Dam across the Marina Channel: Singapore's 15th reservoir, flood control for low-lying areas and a recreation space." },
    { front: "ERP vs COE", back: "ERP (1998, replaced the 1975 Area Licensing Scheme) charges to use busy roads; COE (1990) is a quota on owning cars — you bid for a 10-year licence." },
    { front: "HDB", back: "Housing & Development Board: builds Singapore's public flats, home to about 77–80% of residents." },
    { front: "Tengah", back: "Singapore's 'forest town': ~100 m-wide Forest Corridor, car-free town centre with roads underground, centralised cooling." },
    { front: "Curitiba BRT", back: "World's first full Bus Rapid Transit (1974): dedicated lanes, tube stations (1991) where you pay before boarding." },
    { front: "Green Exchange (Câmbio Verde)", back: "Curitiba scheme (1991): swap recyclables for fresh fruit and vegetables — about 4 kg of recyclables for 1 kg of food." },
    { front: "Vauban, Freiburg", back: "Car-free district on ex-army barracks, about 5,500 people, around 70% of households car-free, plus-energy solar houses." },
    { front: "Masdar City", back: "UAE eco-city launched 2006, planned zero-carbon and car-free for ~40,000–50,000 people; largely unfulfilled." },
    { front: "Ecological footprint", back: "Area of productive land and sea needed to supply a population's resources and absorb its waste, in global hectares (gha) per person." },
    { front: "Carbon footprint", back: "Total greenhouse gases caused by a person, product or place, in tonnes of CO₂ equivalent per year." },
    { front: "Weighted scoring matrix", back: "Evaluation tool: score each design against criteria, multiply by each criterion's weight, and total the results." },
  ],

  mustKnow: [
    "I can quote the Brundtland (1987) definition of sustainable development and explain the three pillars.",
    "I can state the aim of UN SDG 11.",
    "I can explain how at least six features (transport, green space, energy, water, waste, housing, community) make a city more sustainable.",
    "I can describe Singapore's strategies with dates: Garden City 1967, ALS 1975, COE 1990, ERP 1998, NEWater 2003, Marina Barrage 2008, Green Plan 2030.",
    "I can compare Curitiba, Freiburg (Vauban) and Masdar City, using facts from each.",
    "I can define ecological footprint and carbon footprint and interpret footprint data.",
    "I can calculate percentage change and use data as evidence in an answer.",
    "I can design an eco-city covering zoning, energy, transport, water, waste, housing and community.",
    "I can evaluate designs using criteria and a weighted scoring matrix and reach a justified conclusion.",
  ],

  videos: [
    { title: "What is a sustainable city?", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=bbc+bitesize+sustainable+cities+geography" },
    { title: "Curitiba sustainable city case study", channel: "Time for Geography", url: "https://www.youtube.com/results?search_query=time+for+geography+curitiba+sustainable+city" },
    { title: "Vauban Freiburg car-free district", channel: "Geography Hub", url: "https://www.youtube.com/results?search_query=vauban+freiburg+car+free+sustainable+district" },
    { title: "Singapore NEWater and Marina Barrage", channel: "Cool Geography", url: "https://www.youtube.com/results?search_query=singapore+newater+marina+barrage+water+sustainability" },
  ],

  quiz: {
    mcq: [
      {
        id: "sus-quiz-mcq-1",
        question: "Which report, published in 1987, gave the most widely used definition of sustainable development?",
        options: ["The Paris Agreement", "The Kyoto Protocol", "The Brundtland Report (Our Common Future)", "The Singapore Green Plan"],
        answerIndex: 2,
        hint: "It is named after the Norwegian Prime Minister who led the UN commission.",
        explanation:
          "The Brundtland Report (1987) defined sustainable development as meeting the needs of the present without compromising future generations. The Paris Agreement (2015) and Kyoto Protocol (1997) are climate treaties, not the source of the definition.",
        guideRef: "what-makes-sustainable",
      },
      {
        id: "sus-quiz-mcq-2",
        question: "What is NEWater?",
        options: [
          "Seawater with the salt removed",
          "Highly purified recycled wastewater",
          "Rainwater collected from HDB roofs",
          "Water piped from Johor in Malaysia",
        ],
        answerIndex: 1,
        hint: "It turns used water into something ultra-clean.",
        explanation:
          "NEWater (2003) is used water treated by microfiltration, reverse osmosis and UV. Removing salt from seawater is desalination — a separate National Tap.",
        guideRef: "singapore-city-in-nature",
      },
      {
        id: "sus-quiz-mcq-3",
        question: "Curitiba's 'Green Exchange' scheme lets residents swap recyclable waste for…",
        options: ["bus tickets only", "cash payments", "fresh fruit and vegetables", "free electricity"],
        answerIndex: 2,
        hint: "It helps poorer families eat well AND supports local farmers.",
        explanation:
          "Câmbio Verde swaps about 4 kg of recyclables for 1 kg of fresh produce, helping social, economic and environmental pillars. Some Curitiba schemes have also offered bus tokens, but the Green Exchange is famous for food.",
        guideRef: "curitiba-brt-recycling",
      },
      {
        id: "sus-quiz-mcq-4",
        question: "An ecological footprint is measured in…",
        options: ["tonnes of CO₂ per year", "global hectares per person", "litres per person per day", "kilometres of cycle lane"],
        answerIndex: 1,
        hint: "It is an AREA of land and sea.",
        explanation:
          "The ecological footprint is the land and sea area needed, measured in global hectares (gha). Tonnes of CO₂ measures a carbon footprint instead.",
        guideRef: "measuring-sustainability",
      },
    ],
    qa: [
      {
        id: "sus-quiz-qa-1",
        question: "Name the three pillars of sustainability and give one example of a sustainable city feature for each.",
        marks: 3,
        hint: "People, money, nature.",
        modelAnswer:
          "Social — e.g. affordable public housing such as HDB flats so everyone has a decent home. Economic — e.g. jobs and businesses near homes in mixed-use areas. Environmental — e.g. renewable solar energy or green spaces that cut pollution and cool the city.",
        markScheme: [
          { point: "Social pillar with a valid example", keywords: ["housing", "health", "communit", "school", "afford"] },
          { point: "Economic pillar with a valid example", keywords: ["jobs", "employment", "income", "business", "workplace"] },
          { point: "Environmental pillar with a valid example", keywords: ["solar", "green space", "recycl", "pollution", "renewable", "tree"] },
        ],
        commonError: "Naming only environmental features, or naming the pillars with no examples.",
        guideRef: "what-makes-sustainable",
      },
      {
        id: "sus-quiz-qa-2",
        question: "Explain how Electronic Road Pricing (ERP) helps make Singapore more sustainable.",
        marks: 3,
        hint: "What does charging drivers at busy times change?",
        modelAnswer:
          "ERP, introduced in 1998, charges drivers to use busy roads, with higher charges at peak times. This discourages unnecessary car trips and encourages people to use the MRT or buses, so congestion falls. Fewer cars in jams means less air pollution and lower CO₂ emissions, and the time saved also helps the economy.",
        markScheme: [
          { point: "ERP charges drivers to use busy roads / more at peak times", keywords: ["charge", "pay", "price", "toll", "fee"] },
          { point: "Discourages driving / encourages public transport", keywords: ["public transport", "mrt", "bus", "fewer cars", "discourag", "less driving"] },
          { point: "Reduces congestion, pollution or emissions", keywords: ["congestion", "pollution", "emission", "co2", "traffic", "carbon"] },
        ],
        commonError: "Confusing ERP with COE (the car ownership quota).",
        guideRef: "singapore-city-in-nature",
      },
      {
        id: "sus-quiz-qa-3",
        question: "Describe two features of the Vauban district in Freiburg that make it sustainable.",
        marks: 4,
        hint: "Think about cars and energy.",
        modelAnswer:
          "First, Vauban is largely car-free: residents cannot park outside their homes, and cars are kept in solar garages at the edge, so around 70% of households do not own a car and people use the tram (opened 2006), bikes and walking instead. Second, many homes are passive houses or 'plus-energy' solar houses that produce more electricity than they use, cutting carbon emissions.",
        markScheme: [
          { point: "Identifies car-free / parking-free streets", keywords: ["car-free", "car free", "no car", "parking", "garage"] },
          { point: "Develops with data or tram/bike use", keywords: ["70", "tram", "bike", "cycl", "walk"] },
          { point: "Identifies solar / energy-efficient homes", keywords: ["solar", "passive", "plus-energy", "plus energy", "insulat"] },
          { point: "Develops: produce more energy than they use / lower emissions", keywords: ["more energy", "surplus", "emission", "carbon", "grid"] },
        ],
        commonError: "Writing about Freiburg in general without any specific Vauban facts.",
        guideRef: "freiburg-vauban",
      },
      {
        id: "sus-quiz-qa-4",
        question: "Explain why Masdar City is often described as only partly successful.",
        marks: 4,
        hint: "Compare the 2006 plan with what exists now.",
        modelAnswer:
          "Masdar was planned in 2006 as a zero-carbon, car-free city for about 40,000–50,000 people by 2016. However, after the 2008 financial crisis funding was cut, the zero-carbon target was dropped to 'low carbon', the driverless pod (PRT) system was abandoned after a short pilot, and only a small fraction has been built, with completion pushed into the 2030s. It does have successes, such as passive cooling design, solar power and hosting IRENA's headquarters, so it is a useful experiment but has not met its original goals.",
        markScheme: [
          { point: "States original ambitious targets", keywords: ["zero-carbon", "zero carbon", "50,000", "40,000", "car-free", "2016"] },
          { point: "Targets dropped or delayed", keywords: ["dropped", "delay", "2030", "low carbon", "financial crisis", "funding"] },
          { point: "Only partly built / few residents / PRT abandoned", keywords: ["fraction", "few thousand", "pod", "prt", "ghost", "small part"] },
          { point: "Recognises some successes", keywords: ["irena", "solar", "wind tower", "cooling", "shade", "experiment"] },
        ],
        commonError: "Describing Masdar's design without saying how reality differs from the plan.",
        guideRef: "masdar-city",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "sus-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "sus-mcq-p1-q01",
            question: "Which of these best describes a sustainable city?",
            options: [
              "A city that grows as fast as possible to create jobs",
              "A city that produces all of its own food",
              "A city with no cars at all",
              "A city that meets residents' needs now without harming future generations' ability to meet theirs",
            ],
            answerIndex: 3,
            hint: "Think of the Brundtland idea of 'now and the future'.",
            explanation:
              "Sustainability is about meeting present needs without compromising the future. Being car-free or self-sufficient in food can help, but neither is the definition — a city could be car-free and still unsustainable.",
            guideRef: "what-makes-sustainable",
          },
          {
            id: "sus-mcq-p1-q02",
            question: "In which year was the Brundtland Report, 'Our Common Future', published?",
            options: [
              "1967",
              "2003",
              "1987",
              "2015",
            ],
            answerIndex: 2,
            hint: "It was in the late 1980s.",
            explanation:
              "The Brundtland Report was published by the UN in 1987. 2015 is when the Sustainable Development Goals were agreed; 1967 is Singapore's Garden City launch.",
            guideRef: "what-makes-sustainable",
          },
          {
            id: "sus-mcq-p1-q03",
            question: "Which pillar of sustainability is MOST directly improved by building affordable public housing?",
            options: [
              "Environmental",
              "Social",
              "Economic",
              "Technological",
            ],
            answerIndex: 1,
            hint: "Who benefits from having a decent home they can afford?",
            explanation:
              "Affordable housing improves people's quality of life and fairness — the social pillar. It can help the economy too, but its most direct benefit is social. 'Technological' is not one of the three pillars.",
            guideRef: "what-makes-sustainable",
          },
          {
            id: "sus-mcq-p1-q04",
            question: "UN Sustainable Development Goal 11 is about…",
            options: [
              "Clean water and sanitation",
              "Zero hunger",
              "Life below water",
              "Sustainable cities and communities",
            ],
            answerIndex: 3,
            hint: "It aims to make settlements inclusive, safe, resilient and sustainable.",
            explanation:
              "SDG 11 is 'Sustainable Cities and Communities'. Clean water is SDG 6, life below water SDG 14 and zero hunger SDG 2 — all linked to cities, but not Goal 11.",
            guideRef: "what-makes-sustainable",
          },
          {
            id: "sus-mcq-p1-q05",
            question: "Which feature of a sustainable city most directly reduces the urban heat island effect?",
            options: [
              "Street trees and green roofs",
              "More car parks",
              "Wider roads",
              "Glass-walled skyscrapers",
            ],
            answerIndex: 0,
            hint: "What shades surfaces and cools the air by giving off water vapour?",
            explanation:
              "Trees and green roofs shade surfaces and cool the air through evapotranspiration. Roads, car parks and glass buildings absorb or trap heat and make the heat island worse.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-mcq-p1-q06",
            question: "In what year did Singapore launch its Garden City vision?",
            options: [
              "1959",
              "1967",
              "1965",
              "1975",
            ],
            answerIndex: 1,
            hint: "Just two years after independence.",
            explanation:
              "Lee Kuan Yew launched the Garden City vision in 1967. 1965 was independence; 1975 was the Area Licensing Scheme.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p1-q07",
            question: "Which of these is NOT one of Singapore's Four National Taps?",
            options: [
              "Desalinated water",
              "NEWater",
              "Groundwater from deep wells",
              "Imported water",
            ],
            answerIndex: 2,
            hint: "The four are local catchment, imported, NEWater and desalination.",
            explanation:
              "Singapore's Four National Taps are local catchment, imported water, NEWater and desalination. Groundwater is not a national tap — Singapore has very limited usable groundwater.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p1-q08",
            question: "Singapore's Area Licensing Scheme of 1975 was important because it was…",
            options: [
              "the first metro line in Southeast Asia",
              "the world's first congestion charge for entering a city centre",
              "a ban on all private cars",
              "a scheme to plant trees along every road",
            ],
            answerIndex: 1,
            hint: "Drivers had to buy a paper licence to enter the centre.",
            explanation:
              "The 1975 ALS was the world's first urban congestion charge. It did not ban cars — it priced them — and it was replaced by ERP in 1998. The MRT only opened in 1987.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p1-q09",
            question: "Approximately what percentage of Singapore residents live in HDB flats?",
            options: [
              "About 30%",
              "About 50%",
              "About 98%",
              "About 77–80%",
            ],
            answerIndex: 3,
            hint: "It is a large majority, but not everyone.",
            explanation:
              "About 77–80% of residents live in HDB flats. 98% is far too high — many people live in condominiums and landed houses.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p1-q10",
            question: "Curitiba is a city in which country?",
            options: [
              "Brazil",
              "Argentina",
              "Mexico",
              "Colombia",
            ],
            answerIndex: 0,
            hint: "It is in the south of South America's largest country.",
            explanation:
              "Curitiba is in southern Brazil. Bogotá in Colombia copied Curitiba's BRT idea with TransMilenio, which is why Colombia is a tempting distractor.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-mcq-p1-q11",
            question: "Why did Curitiba choose Bus Rapid Transit (BRT) rather than an underground metro?",
            options: [
              "Residents refused to travel underground",
              "The ground was too hard to tunnel",
              "BRT is much cheaper and quicker to build",
              "Metros were not invented in the 1970s",
            ],
            answerIndex: 2,
            hint: "Curitiba was a fast-growing city without a huge budget.",
            explanation:
              "BRT costs a small fraction of a metro per kilometre and can be built quickly. Metros certainly existed in the 1970s (London's opened in 1863), so that option is wrong.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-mcq-p1-q12",
            question: "What was the Vauban district in Freiburg built on?",
            options: [
              "A former landfill site",
              "Farmland (a greenfield site)",
              "Reclaimed land from the sea",
              "A former army barracks (a brownfield site)",
            ],
            answerIndex: 3,
            hint: "French soldiers used to be stationed there.",
            explanation:
              "Vauban was built on former French army barracks — a brownfield site, which avoids building on countryside. It was not farmland or reclaimed land.",
            guideRef: "freiburg-vauban",
          },
          {
            id: "sus-mcq-p1-q13",
            question: "A 'plus-energy' house in Freiburg's Solar Settlement…",
            options: [
              "uses double the energy of a normal house",
              "produces more energy than it uses",
              "runs only on wood fires",
              "is connected to a nuclear power station",
            ],
            answerIndex: 1,
            hint: "The 'plus' refers to a surplus.",
            explanation:
              "Plus-energy houses generate more electricity from their solar roofs than they consume and sell the surplus to the grid. Freiburg's green movement actually began by opposing a nuclear power station.",
            guideRef: "freiburg-vauban",
          },
          {
            id: "sus-mcq-p1-q14",
            question: "Masdar City is located in…",
            options: [
              "Saudi Arabia",
              "Qatar",
              "the United Arab Emirates",
              "Oman",
            ],
            answerIndex: 2,
            hint: "It is near Abu Dhabi.",
            explanation:
              "Masdar City is beside Abu Dhabi, capital of the UAE. Qatar and Saudi Arabia are neighbouring Gulf states with their own new-city projects, such as Saudi Arabia's NEOM.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-mcq-p1-q15",
            question: "Which part of Masdar City's original plan was abandoned after only a short pilot?",
            options: [
              "Driverless Personal Rapid Transit (PRT) pods",
              "The wind tower",
              "Narrow shaded streets",
              "The solar farm",
            ],
            answerIndex: 0,
            hint: "It was meant to replace cars entirely.",
            explanation:
              "The PRT pod network was scrapped after a short pilot line. The narrow streets, wind tower and solar farm were actually built.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-mcq-p1-q16",
            question: "The world average ecological footprint is about 2.6 gha per person, but Earth's biocapacity is about 1.6 gha per person. This means humanity is…",
            options: [
              "living within the planet's limits",
              "using exactly one Earth",
              "in ecological overshoot",
              "reducing its footprint every year",
            ],
            answerIndex: 2,
            hint: "Compare demand with supply.",
            explanation:
              "Demand (2.6) is greater than supply (1.6), so humanity is in overshoot — using roughly 1.6–1.7 Earths. 'Living within limits' would need the footprint to be below biocapacity.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-mcq-p1-q17",
            question: "Which unit is used for a carbon footprint?",
            options: [
              "Tonnes of CO₂ equivalent",
              "Kilowatts",
              "Square metres per person",
              "Global hectares",
            ],
            answerIndex: 0,
            hint: "It measures greenhouse gases, by mass.",
            explanation:
              "A carbon footprint is measured in tonnes of CO₂ equivalent (CO₂e). Global hectares are used for the ecological footprint.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-mcq-p1-q18",
            question: "In an eco-city design, where is the best place to put heavy industry?",
            options: [
              "Upwind of the housing",
              "On the river floodplain",
              "In the middle of the mixed-use centre",
              "Downwind and away from homes and water supplies",
            ],
            answerIndex: 3,
            hint: "Which way will smoke and smells blow?",
            explanation:
              "Industry should be downwind so pollution blows away from homes, and away from water supplies. Upwind would blow pollution over homes; floodplains risk flooding and polluting the river.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-mcq-p1-q19",
            question: "What is 'mixed-use' zoning?",
            options: [
              "Separating homes, offices and factories into different areas",
              "Combining homes, shops, offices and services in the same area",
              "Using land for farming in summer and housing in winter",
              "Building only high-rise towers",
            ],
            answerIndex: 1,
            hint: "Think of a block with flats above shops.",
            explanation:
              "Mixed-use zoning puts homes, shops and workplaces together so people can walk to them. Separating uses into zones is single-use zoning, which encourages car travel.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-mcq-p1-q20",
            question: "In the Eco City competition, judges give 'Transport' a weight of 3 and a design scores 4 out of 5 for transport. What is its weighted score for transport?",
            options: [
              "12",
              "7",
              "4",
              "15",
            ],
            answerIndex: 0,
            hint: "Weighted score = score × weight.",
            explanation:
              "4 × 3 = 12. Adding them (4 + 3 = 7) is a common error; 15 would be the maximum possible (5 × 3).",
            guideRef: "designing-eco-city",
          },
        ],
      },
      {
        id: "sus-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          {
            id: "sus-mcq-p2-q01",
            question: "Which word means a city can cope with and recover quickly from shocks such as floods or heatwaves?",
            options: [
              "Dense",
              "Resilient",
              "Inclusive",
              "Urbanised",
            ],
            answerIndex: 1,
            hint: "It appears in SDG 11 alongside 'inclusive' and 'safe'.",
            explanation:
              "Resilient means able to withstand and bounce back from shocks. 'Inclusive' means everyone is included — also in SDG 11, but a different idea.",
            guideRef: "what-makes-sustainable",
          },
          {
            id: "sus-mcq-p2-q02",
            question: "A city creates thousands of factory jobs but the factories pollute the river. Which pillars are in conflict?",
            options: [
              "Social and social",
              "Environmental and environmental",
              "Economic and environmental",
              "None — this is fully sustainable",
            ],
            answerIndex: 2,
            hint: "Jobs vs. a clean river.",
            explanation:
              "Jobs boost the economic pillar while pollution damages the environmental pillar. It is not fully sustainable because one pillar is harmed.",
            guideRef: "what-makes-sustainable",
          },
          {
            id: "sus-mcq-p2-q03",
            question: "What is a 'brownfield site'?",
            options: [
              "Land that has never been built on",
              "Land that has been built on before and can be reused",
              "Farmland with brown soil",
              "A desert area",
            ],
            answerIndex: 1,
            hint: "Old factories, docks or barracks.",
            explanation:
              "Brownfield land has been previously developed. Land never built on is a greenfield site. Using brownfield land protects the countryside.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-mcq-p2-q04",
            question: "Which order shows the waste hierarchy from MOST to LEAST sustainable?",
            options: [
              "Landfill, recycle, reuse, reduce",
              "Recycle, reduce, reuse, landfill",
              "Reuse, landfill, reduce, recycle",
              "Reduce, reuse, recycle, landfill",
            ],
            answerIndex: 3,
            hint: "The best waste is waste that is never created.",
            explanation:
              "Reducing waste is best, then reusing, then recycling (which still uses energy), with landfill last. Many people put recycling first, but it is better not to create the waste at all.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-mcq-p2-q05",
            question: "A '15-minute city' is one where…",
            options: [
              "most daily needs can be reached within a 15-minute walk or cycle",
              "every train arrives within 15 minutes",
              "the whole city can be crossed by car in 15 minutes",
              "rubbish is collected every 15 minutes",
            ],
            answerIndex: 0,
            hint: "It is about distance to everyday services.",
            explanation:
              "The 15-minute city puts shops, schools, clinics and parks within a 15-minute walk or cycle, reducing car use. It is not about train frequency or driving.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-mcq-p2-q06",
            question: "Which of these is the main purpose of the Certificate of Entitlement (COE) introduced in 1990?",
            options: [
              "To charge drivers for using busy roads",
              "To give drivers free parking",
              "To limit the number of vehicles on Singapore's roads",
              "To pay for NEWater plants",
            ],
            answerIndex: 2,
            hint: "It is a quota system — you must bid for one.",
            explanation:
              "The COE caps vehicle numbers: buyers bid for a 10-year right to own a car. Charging to use busy roads is ERP, a common mix-up.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p2-q07",
            question: "Marina Barrage, opened in 2008, has three main purposes. Which is NOT one of them?",
            options: [
              "Water supply (a reservoir)",
              "Flood control",
              "Recreation",
              "Generating nuclear power",
            ],
            answerIndex: 3,
            hint: "Remember 'water supply, flood control, lifestyle'.",
            explanation:
              "Marina Barrage creates a reservoir, controls floods in low-lying areas and is a recreation space. Singapore has no nuclear power station.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p2-q08",
            question: "NEWater could meet up to about 40% of Singapore's current water demand. What is the target share by 2060?",
            options: [
              "About 10%",
              "About 55%",
              "About 25%",
              "About 100%",
            ],
            answerIndex: 1,
            hint: "More than half.",
            explanation:
              "NEWater is planned to meet up to about 55% of demand by 2060. 100% is unrealistic because some used water is lost and other taps are still needed.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p2-q09",
            question: "Tengah is described as Singapore's 'forest town'. Which feature supports this label?",
            options: [
              "It is built inside the Central Catchment Nature Reserve",
              "All homes are built of wood",
              "A Forest Corridor about 100 m wide running through the town",
              "Trees replace all roads",
            ],
            answerIndex: 2,
            hint: "It links nature areas so wildlife can move.",
            explanation:
              "Tengah's ~100 m-wide Forest Corridor connects the western and central catchment areas for wildlife. It is not inside the nature reserve, and it still has roads (some underground).",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p2-q10",
            question: "Who was the architect-mayor most associated with Curitiba's sustainable planning from 1971?",
            options: [
              "Jaime Lerner",
              "Lee Kuan Yew",
              "Norman Foster",
              "Gro Harlem Brundtland",
            ],
            answerIndex: 0,
            hint: "He later became governor of Paraná state.",
            explanation:
              "Jaime Lerner led Curitiba's transformation. Norman Foster's firm designed Masdar City; Brundtland chaired the 1987 UN commission.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-mcq-p2-q11",
            question: "What is the purpose of Curitiba's raised glass 'tube stations'?",
            options: [
              "To keep buses cool in summer",
              "To store recycling",
              "To let passengers pay before boarding and step straight on, so stops are very quick",
              "To act as flood shelters",
            ],
            answerIndex: 2,
            hint: "Think about why bus stops are usually slow.",
            explanation:
              "Paying before boarding and level boarding make each stop take seconds, so BRT works like a metro. The tubes are not for recycling or flood shelter.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-mcq-p2-q12",
            question: "How did Curitiba use its river valleys to deal with flooding?",
            options: [
              "Turned floodplains into parks with lakes that store floodwater",
              "Lined the rivers with concrete channels",
              "Built houses on stilts over the rivers",
              "Diverted the rivers into the sea",
            ],
            answerIndex: 0,
            hint: "It is cheaper and greener than concrete.",
            explanation:
              "Curitiba made floodplains into parks with lakes that hold floodwater, adding green space too. Concrete channels are expensive and move the flood problem downstream.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-mcq-p2-q13",
            question: "Roughly what share of households in Vauban do not own a car?",
            options: [
              "About 10%",
              "About 30%",
              "100%",
              "About 70%",
            ],
            answerIndex: 3,
            hint: "A large majority — but car ownership is allowed.",
            explanation:
              "About 70% of Vauban households are car-free. It is not 100% because residents may own a car if they buy a space in the edge-of-district garage.",
            guideRef: "freiburg-vauban",
          },
          {
            id: "sus-mcq-p2-q14",
            question: "What are 'Baugruppen' in Vauban?",
            options: [
              "Solar panel factories",
              "Groups of future neighbours who design and build homes together",
              "Tram drivers' unions",
              "Recycling collection lorries",
            ],
            answerIndex: 1,
            hint: "It is an example of community involvement.",
            explanation:
              "Baugruppen are building groups of residents who plan and build homes together, giving them a voice and often cheaper homes. They are not companies or vehicles.",
            guideRef: "freiburg-vauban",
          },
          {
            id: "sus-mcq-p2-q15",
            question: "Masdar City's narrow, shaded streets and wind tower are examples of…",
            options: [
              "passive cooling based on traditional Arab design",
              "nuclear-powered air-conditioning",
              "flood defences",
              "waste-to-energy technology",
            ],
            answerIndex: 0,
            hint: "They cool the city without using energy.",
            explanation:
              "These are passive cooling methods inspired by traditional desert towns: shade and moving air make streets cooler with no energy use. They are not powered systems.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-mcq-p2-q16",
            question: "Which international organisation has its headquarters in Masdar City?",
            options: [
              "The World Bank",
              "The World Health Organization",
              "UNESCO",
              "IRENA (International Renewable Energy Agency)",
            ],
            answerIndex: 3,
            hint: "It fits the city's renewable energy theme.",
            explanation:
              "IRENA is headquartered in Masdar City. The World Bank is in Washington DC, UNESCO in Paris and WHO in Geneva.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-mcq-p2-q17",
            question: "Earth Overshoot Day has recently fallen in late July or early August. What does this tell us?",
            options: [
              "Humanity is using fewer resources than Earth can renew",
              "The Earth's resources will run out next August",
              "Humanity uses about one year's worth of Earth's resources in about seven months",
              "Overshoot only happens in summer",
            ],
            answerIndex: 2,
            hint: "Count the months from January to late July.",
            explanation:
              "By about late July we have used a whole year's renewable resources, so the rest of the year runs on 'overdraft'. It does not mean resources disappear next August.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-mcq-p2-q18",
            question: "Why is Singapore's ecological footprint much larger than its land area?",
            options: [
              "It has very large national parks",
              "It imports most of its food, energy and materials from other countries",
              "Its land is measured in global hectares",
              "Its population is shrinking",
            ],
            answerIndex: 1,
            hint: "Where does Singapore's food come from?",
            explanation:
              "Singapore imports over 90% of its food and almost all its energy, so the land needed to supply it lies overseas. Parks would not increase its footprint.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-mcq-p2-q19",
            question: "Using the guideline that homes should be within a 5–10 minute walk of public transport, about how far should the furthest home be from a tram stop?",
            options: [
              "About 50 m",
              "About 20 km",
              "About 5 km",
              "About 400–500 m",
            ],
            answerIndex: 3,
            hint: "People walk at roughly 5 km per hour.",
            explanation:
              "At about 5 km/h, 5–10 minutes is roughly 400–800 m, so planners often use 400–500 m. 5 km would take an hour to walk.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-mcq-p2-q20",
            question: "In judging Eco City designs, what does 'feasibility' mean?",
            options: [
              "Whether the design could realistically be built and paid for",
              "How attractive the design looks",
              "How many trees it contains",
              "How tall its buildings are",
            ],
            answerIndex: 0,
            hint: "Masdar City scored badly on this.",
            explanation:
              "Feasibility asks whether a design can actually be built with the money, technology and time available. A beautiful design can still be unfeasible.",
            guideRef: "designing-eco-city",
          },
        ],
      },
      {
        id: "sus-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "sus-mcq-p3-q01",
            question: "A student writes: 'Cycle lanes are sustainable because they are good.' What is the best way to improve this answer?",
            options: [
              "Repeat the word 'sustainable'",
              "Add a drawing of a bicycle",
              "Explain the effect, e.g. cycling produces no emissions and improves health",
              "Say that cars are bad",
            ],
            answerIndex: 2,
            hint: "Examiners want the 'because… which means…' chain.",
            explanation:
              "Good answers explain HOW a feature helps (zero emissions, health, cheaper travel). Simply saying cars are bad still doesn't explain the benefit of cycle lanes.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-mcq-p3-q02",
            question: "Which feature helps all three pillars of sustainability at once?",
            options: [
              "A new eight-lane motorway",
              "A luxury gated community",
              "An airport expansion",
              "A cheap, frequent public transport system",
            ],
            answerIndex: 3,
            hint: "Which option is affordable, creates access to jobs and cuts emissions?",
            explanation:
              "Cheap public transport gives everyone access (social), connects people to jobs (economic) and cuts emissions (environmental). A motorway helps the economy but harms the environment.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-mcq-p3-q03",
            question: "Since 2020, Singapore's greening vision has been called…",
            options: [
              "Garden City",
              "City in Nature",
              "City in a Garden",
              "Smart Nation",
            ],
            answerIndex: 1,
            hint: "It is the third stage in the sequence.",
            explanation:
              "The sequence is Garden City (1967) → City in a Garden → City in Nature (2020). Smart Nation is Singapore's digital technology programme, not its greening vision.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p3-q04",
            question: "Which processes are used to purify NEWater?",
            options: [
              "Boiling and freezing",
              "Adding salt and chlorine only",
              "Microfiltration, reverse osmosis and ultraviolet disinfection",
              "Letting it settle in reservoirs for one year",
            ],
            answerIndex: 2,
            hint: "Three stages: filter, membrane, light.",
            explanation:
              "NEWater uses microfiltration, reverse osmosis and UV disinfection. Simple settling or boiling could not make used water ultra-clean.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p3-q05",
            question: "In which year did Electronic Road Pricing (ERP) replace the Area Licensing Scheme?",
            options: [
              "1998",
              "1990",
              "1975",
              "2008",
            ],
            answerIndex: 0,
            hint: "Late 1990s.",
            explanation:
              "ERP began in 1998. 1975 was the ALS itself, 1990 the COE and 2008 the Marina Barrage.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p3-q06",
            question: "Which is a target of the Singapore Green Plan 2030?",
            options: [
              "Close Changi Airport",
              "Ban all air-conditioning",
              "Plant 1 million more trees",
              "Double the number of private cars",
            ],
            answerIndex: 2,
            hint: "It fits the City in Nature pillar.",
            explanation:
              "The Green Plan aims to plant 1 million more trees between 2020 and 2030. Banning air-conditioning or closing Changi are not realistic or planned.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p3-q07",
            question: "Semakau Landfill is a challenge for Singapore's sustainability because…",
            options: [
              "it is expected to be full by about 2035",
              "it is located in the city centre",
              "it only accepts plastic",
              "it produces NEWater",
            ],
            answerIndex: 0,
            hint: "Singapore has very little land for new landfills.",
            explanation:
              "Semakau, Singapore's only landfill (offshore), is expected to fill up by about 2035, which is why reducing waste matters. It is offshore, not in the city centre.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p3-q08",
            question: "In what year did Curitiba's Bus Rapid Transit begin?",
            options: [
              "1964",
              "2004",
              "1991",
              "1974",
            ],
            answerIndex: 3,
            hint: "Three years after Jaime Lerner became mayor.",
            explanation:
              "Curitiba's BRT began in 1974. 1991 is when the tube stations and the Green Exchange began — a tempting distractor.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-mcq-p3-q09",
            question: "Green space in Curitiba rose to about 50 m² per person. What does this figure measure?",
            options: [
              "The size of an average home",
              "The area of parks and green space divided by the population",
              "The area each bus covers",
              "The amount of recycling per person",
            ],
            answerIndex: 1,
            hint: "It is a 'per person' indicator.",
            explanation:
              "Green space per person = total green area ÷ population. It is an indicator of environmental and social sustainability, not housing size.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-mcq-p3-q10",
            question: "Which is a current problem for Curitiba's transport system?",
            options: [
              "Buses are overcrowded at peak times and car ownership has risen",
              "There are no buses at all",
              "The BRT lanes have been turned into motorways",
              "Trains have replaced all buses",
            ],
            answerIndex: 0,
            hint: "Success can bring its own problems.",
            explanation:
              "The popular BRT is overcrowded at peak times and car ownership has grown as people get richer. The BRT still runs; it hasn't been replaced.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-mcq-p3-q11",
            question: "Freiburg's strong environmental movement began in the 1970s with protests against…",
            options: [
              "a new airport",
              "a motorway through Vauban",
              "a coal mine",
              "a planned nuclear power station",
            ],
            answerIndex: 3,
            hint: "It was planned at nearby Wyhl.",
            explanation:
              "Local people successfully protested against a planned nuclear power station, which helped build Freiburg's green and solar identity.",
            guideRef: "freiburg-vauban",
          },
          {
            id: "sus-mcq-p3-q12",
            question: "Where must Vauban residents who own a car park it?",
            options: [
              "Outside their front door",
              "In the city centre of Freiburg",
              "In a multi-storey garage at the edge of the district",
              "On the tram tracks",
            ],
            answerIndex: 2,
            hint: "Streets are kept as play spaces.",
            explanation:
              "Cars must be kept in edge-of-district garages (one has a solar roof), and spaces are expensive. Parking outside homes is not allowed.",
            guideRef: "freiburg-vauban",
          },
          {
            id: "sus-mcq-p3-q13",
            question: "Which is the strongest criticism of Vauban's social sustainability?",
            options: [
              "It has too many trams",
              "Housing has become expensive and residents are mostly middle-class",
              "It has no solar panels",
              "It was built on farmland",
            ],
            answerIndex: 1,
            hint: "Who can afford to live there?",
            explanation:
              "High house prices limit who can live in Vauban, weakening the social pillar. It does have solar panels and was built on brownfield land.",
            guideRef: "freiburg-vauban",
          },
          {
            id: "sus-mcq-p3-q14",
            question: "Masdar City was launched in…",
            options: [
              "1987",
              "1998",
              "2016",
              "2006",
            ],
            answerIndex: 3,
            hint: "Two years before the global financial crisis.",
            explanation:
              "Masdar was launched in 2006. 2016 was the original target completion date — which was missed.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-mcq-p3-q15",
            question: "What major event led to Masdar City's funding being cut back?",
            options: [
              "The 2008 global financial crisis",
              "A volcanic eruption",
              "A tsunami",
              "The discovery of more oil",
            ],
            answerIndex: 0,
            hint: "It hit property and investment worldwide.",
            explanation:
              "The 2008 global financial crisis reduced investment and slowed construction. The UAE is not affected by volcanic eruptions.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-mcq-p3-q16",
            question: "Critics sometimes call Masdar City an 'eco-enclave'. What do they mean?",
            options: [
              "It is a nature reserve",
              "It is a green area mainly for wealthy people, cut off from the wider city",
              "It is an island",
              "It is a type of recycling plant",
            ],
            answerIndex: 1,
            hint: "An enclave is a separate area surrounded by something different.",
            explanation:
              "'Eco-enclave' means a small, exclusive green area that does little for the wider (and less wealthy) population — a social pillar criticism.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-mcq-p3-q17",
            question: "A city's green space rises from 2 m² to 10 m² per person. What is the percentage increase?",
            options: [
              "80%",
              "500%",
              "400%",
              "8%",
            ],
            answerIndex: 2,
            hint: "(new − old) ÷ old × 100.",
            explanation:
              "(10 − 2) ÷ 2 × 100 = 400%. 500% is the new value as a percentage of the old (10 ÷ 2 × 100), and 80% divides by the new value instead of the old.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-mcq-p3-q18",
            question: "Which indicator would best measure the SOCIAL sustainability of a city?",
            options: [
              "Tonnes of CO₂ per person",
              "Percentage of households in affordable, adequate housing",
              "Number of solar panels",
              "Litres of NEWater produced",
            ],
            answerIndex: 1,
            hint: "Social = people's quality of life and fairness.",
            explanation:
              "Affordable housing access measures social wellbeing. CO₂, solar panels and NEWater are mainly environmental indicators.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-mcq-p3-q19",
            question: "Why should an eco-city keep its river floodplain as a park rather than building homes on it?",
            options: [
              "Parks are cheaper to clean",
              "Parks attract more tourists than homes",
              "Homes cannot be built near water",
              "Floodplains flood, so parks can store water safely and protect homes",
            ],
            answerIndex: 3,
            hint: "Think of Curitiba's lakes.",
            explanation:
              "Floodplains naturally flood; parks and wetlands store water safely, reducing risk to homes and adding green space. Homes can be near water — just not on the floodplain.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-mcq-p3-q20",
            question: "Which planning approach builds dense housing, offices and shops around public transport stations?",
            options: [
              "Transit-oriented development",
              "Urban sprawl",
              "Ribbon development",
              "Counter-urbanisation",
            ],
            answerIndex: 0,
            hint: "The clue is in the word 'transit'.",
            explanation:
              "Transit-oriented development (TOD) concentrates activity near stations, as Curitiba did along its BRT axes. Urban sprawl is low-density spread that depends on cars.",
            guideRef: "designing-eco-city",
          },
        ],
      },
      {
        id: "sus-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "sus-mcq-p4-q01",
            question: "City X has the following data — Population: 1 million; Green space: 20 km². What is the green space per person in m²? (1 km² = 1,000,000 m²)",
            options: [
              "2 m²",
              "50 m²",
              "20 m²",
              "200 m²",
            ],
            answerIndex: 2,
            hint: "Convert km² to m², then divide by population.",
            explanation:
              "20 km² = 20,000,000 m²; ÷ 1,000,000 people = 20 m² per person. 2 m² comes from forgetting a zero in the conversion.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-mcq-p4-q02",
            question: "Data — Country A footprint: 1.2 gha per person; Country B: 7.0 gha per person; Earth's biocapacity: 1.6 gha per person. Which statement is correct?",
            options: [
              "Only Country B uses more than its fair share",
              "Both countries are in overshoot",
              "Only Country A uses more than its fair share",
              "Neither country is in overshoot",
            ],
            answerIndex: 0,
            hint: "Compare each footprint with 1.6.",
            explanation:
              "Country B (7.0) is far above 1.6; Country A (1.2) is below it. So only B exceeds the fair Earth share.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-mcq-p4-q03",
            question: "If everyone lived like people in a country with a footprint of 8 gha per person, and Earth's biocapacity is 1.6 gha per person, about how many Earths would we need?",
            options: [
              "About 1.6",
              "About 3",
              "About 8",
              "About 5",
            ],
            answerIndex: 3,
            hint: "Divide footprint by biocapacity.",
            explanation:
              "8 ÷ 1.6 = 5 Earths. Choosing 8 forgets to divide by the biocapacity.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-mcq-p4-q04",
            question: "A city cuts its carbon footprint by moving its steelworks to another country but keeps importing the same amount of steel. Which statement is best?",
            options: [
              "The world's emissions have fallen by the same amount",
              "Global emissions may not fall — the pollution has just moved elsewhere",
              "The city is now fully sustainable",
              "Carbon footprints cannot be measured for cities",
            ],
            answerIndex: 1,
            hint: "Where are the emissions now?",
            explanation:
              "The emissions have been 'exported' to another country, so global emissions may not fall. This is why consumption-based footprints are sometimes preferred.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-mcq-p4-q05",
            question: "Data — Trips in a city: Car 60%, Bus 15%, Walk 15%, Cycle 10%. What percentage of trips are by sustainable modes (public transport and active travel)?",
            options: [
              "40%",
              "25%",
              "10%",
              "60%",
            ],
            answerIndex: 0,
            hint: "Add bus, walk and cycle.",
            explanation:
              "15 + 15 + 10 = 40%. 60% is the share by car — the unsustainable mode.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-mcq-p4-q06",
            question: "A new town is planned in a hot, humid tropical climate like Singapore's. Which energy-saving feature is MOST appropriate?",
            options: [
              "Thick insulation to keep heat in during winter",
              "Underfloor heating",
              "Large south-facing windows to capture winter sun",
              "Shaded, naturally ventilated buildings and district cooling",
            ],
            answerIndex: 3,
            hint: "The problem in the tropics is heat, not cold.",
            explanation:
              "In the tropics the challenge is cooling, so shading, cross-ventilation and efficient district cooling (as in Tengah) save most energy. Winter-sun windows and heating suit cold climates like Freiburg.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-mcq-p4-q07",
            question: "Which statement about Singapore's sustainability is the most balanced?",
            options: [
              "Singapore is perfectly sustainable in every way",
              "Singapore has no sustainable policies",
              "Singapore has excellent transport, water and greening policies, but relies heavily on imported food and energy",
              "Singapore's only problem is too many trees",
            ],
            answerIndex: 2,
            hint: "Look for an answer with both strengths and weaknesses.",
            explanation:
              "A balanced view recognises strengths (ERP, NEWater, HDB, greening) and weaknesses (imports, high energy use, landfill pressure). The extreme answers ignore evidence.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p4-q08",
            question: "Singapore imports water from Malaysia under an agreement that expires in 2061. Which strategy most directly reduces this dependence?",
            options: [
              "Building more car parks",
              "Expanding NEWater and desalination capacity",
              "Raising COE prices",
              "Planting more roadside trees",
            ],
            answerIndex: 1,
            hint: "Which taps are 'weather-resistant' and home-grown?",
            explanation:
              "NEWater and desalination produce water within Singapore, independent of rainfall and imports. COE prices and car parks are transport policies.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p4-q09",
            question: "Why does pricing roads (ERP) work better in Singapore than it might in a city with poor public transport?",
            options: [
              "Singapore drivers enjoy paying charges",
              "ERP is free on weekdays",
              "Singapore has no traffic lights",
              "Singapore's extensive MRT and bus network gives people a real alternative to driving",
            ],
            answerIndex: 3,
            hint: "If people can't drive, how else do they get to work?",
            explanation:
              "Road pricing only shifts people out of cars if there is a good alternative. Without public transport, charges would simply make travel more costly, hurting the social pillar.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-mcq-p4-q10",
            question: "Which feature of Curitiba's planning is an example of transit-oriented development?",
            options: [
              "High-density buildings zoned along the BRT structural axes",
              "The Green Exchange",
              "Sheep mowing park grass",
              "Pedestrianising Rua XV de Novembro",
            ],
            answerIndex: 0,
            hint: "Where did Curitiba put its tallest buildings?",
            explanation:
              "Curitiba zoned dense housing and offices along BRT routes so many people live near fast buses. The Green Exchange is a waste scheme, not land-use planning.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-mcq-p4-q11",
            question: "Why does Curitiba's Green Exchange help the SOCIAL pillar in particular?",
            options: [
              "It reduces carbon emissions from buses",
              "It gives poorer families free healthy food and cleaner neighbourhoods",
              "It increases land prices",
              "It creates profits for large supermarkets",
            ],
            answerIndex: 1,
            hint: "Who mostly uses the scheme?",
            explanation:
              "Low-income residents gain nutritious food and cleaner, healthier streets — social benefits. Supporting local farmers is the economic gain; less landfill is environmental.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-mcq-p4-q12",
            question: "A poor city in a lower-income country wants to become more sustainable on a small budget. Which city is the most useful model?",
            options: [
              "Masdar City",
              "Vauban",
              "Curitiba",
              "Tengah",
            ],
            answerIndex: 2,
            hint: "Which city focused on cheap, simple solutions?",
            explanation:
              "Curitiba used low-cost ideas (BRT, flood parks, Green Exchange) in a middle-income country. Masdar and Tengah are expensive, purpose-built projects in wealthy countries.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-mcq-p4-q13",
            question: "Compare Vauban and Masdar City. Which statement is most accurate?",
            options: [
              "Both are fully finished and met all targets",
              "Vauban was built with strong resident involvement; Masdar was a top-down project that fell short of its targets",
              "Masdar is car-free and Vauban allows parking on every street",
              "Both were built on greenfield desert land",
            ],
            answerIndex: 1,
            hint: "Who planned each place?",
            explanation:
              "Vauban's residents (Forum Vauban, Baugruppen) shaped it; Masdar was a government-led project that missed its targets. Vauban is a brownfield site in Germany, not desert.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-mcq-p4-q14",
            question: "Which is the best reason that retrofitting existing cities is important for global sustainability?",
            options: [
              "New cities are never built any more",
              "Old buildings are always more efficient",
              "Retrofitting costs nothing",
              "Most of the buildings and cities that will exist in 2050 already exist today",
            ],
            answerIndex: 3,
            hint: "Where will most people live in 2050?",
            explanation:
              "Most of tomorrow's urban fabric already exists, so improving it reaches far more people than new eco-cities. Retrofitting still costs money, and old buildings are often inefficient.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-mcq-p4-q15",
            question: "Scoring matrix — Criteria weights: Emissions ×3, Affordability ×2, Cost ×1. Design P scores 5, 2, 2. Design Q scores 3, 4, 3. Which has the higher weighted total?",
            options: [
              "Design P, 21 to 20",
              "They tie",
              "Design Q, 10 to 9",
              "Design Q, 21 to 20",
            ],
            answerIndex: 0,
            hint: "P = 5×3 + 2×2 + 2×1; Q = 3×3 + 4×2 + 3×1.",
            explanation:
              "P = 15 + 4 + 2 = 21; Q = 9 + 8 + 3 = 20, so P wins narrowly. Without weights Q would win 10 to 9 — which shows how weighting emissions heavily changes the result.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-mcq-p4-q16",
            question: "A design team places its waste-to-energy plant upwind of the housing area. What is the best criticism?",
            options: [
              "It will be too far from the rubbish",
              "Waste-to-energy plants are not sustainable at all",
              "Smoke and smells would blow over homes",
              "It should be in the middle of the park",
            ],
            answerIndex: 2,
            hint: "Which way does the wind carry emissions?",
            explanation:
              "Upwind siting would blow emissions and odours over homes. Waste-to-energy is better than landfill, so it is not 'not sustainable at all' — the problem is where it is placed.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-mcq-p4-q17",
            question: "Which eco-city water feature is an example of sustainable drainage?",
            options: [
              "Concrete storm drains straight to the sea",
              "Pumping groundwater out faster",
              "Covering parks with tarmac",
              "Permeable pavements and swales that let rain soak into the ground",
            ],
            answerIndex: 3,
            hint: "It slows water down instead of speeding it up.",
            explanation:
              "Permeable surfaces and swales slow and store rainwater, reducing flood risk and recharging groundwater, as in Vauban. Concrete drains speed water away and increase flood peaks downstream.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-mcq-p4-q18",
            question: "Which group of features gives the most COMPLETE eco-city design?",
            options: [
              "Solar panels, wind turbines and electric cars",
              "Mixed-use zoning, tram spine, solar energy, rainwater harvesting, recycling hubs, affordable housing and community centres",
              "Parks, trees and green roofs",
              "Wide roads, large car parks and an airport",
            ],
            answerIndex: 1,
            hint: "Count how many of the seven themes each option covers.",
            explanation:
              "Only this option covers zoning, transport, energy, water, waste, housing and community. The solar/wind/electric-car option covers only energy and cars, the parks option only green space, and wide roads, car parks and an airport are unsustainable.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-mcq-p4-q19",
            question: "Singapore has a domestic recycling rate of only about 12%. Which change would most likely raise it?",
            options: [
              "Building a second offshore landfill",
              "Raising ERP charges",
              "Clear labelling, convenient recycling chutes and education to cut contamination",
              "Selling more bottled water",
            ],
            answerIndex: 2,
            hint: "Why do recyclables get rejected?",
            explanation:
              "Contaminated or confusing recycling is a key problem, so convenience and education help most. A new landfill would encourage dumping, not recycling.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-mcq-p4-q20",
            question: "Which statement best evaluates the Brundtland definition of sustainable development?",
            options: [
              "It is useful and widely agreed, but vague — it does not say exactly what 'needs' are or how to measure them",
              "It is perfect and needs no further explanation",
              "It only applies to rich countries",
              "It was replaced by the Paris Agreement and is no longer used",
            ],
            answerIndex: 0,
            hint: "A good evaluation gives a strength and a limitation.",
            explanation:
              "The definition is widely used but broad — it does not define 'needs' or set measurable targets, which is why tools like the SDGs and footprints were developed. It is still used today.",
            guideRef: "what-makes-sustainable",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "sus-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "sus-qa-p1-q01",
            question: "Define 'sustainable development' using the Brundtland definition.",
            marks: 2,
            hint: "Two time frames: now and the future.",
            modelAnswer:
              "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland Report, 1987).",
            markScheme: [
              { point: "Meets the needs of the present / people today", keywords: ["present", "today", "now", "current"] },
              { point: "Without harming future generations' ability to meet their needs", keywords: ["future", "generation", "compromis", "later"] },
            ],
            commonError: "Saying only 'being environmentally friendly' without the present/future idea.",
            guideRef: "what-makes-sustainable",
          },
          {
            id: "sus-qa-p1-q02",
            question: "State the aim of UN Sustainable Development Goal 11 and give two of its targets.",
            marks: 3,
            hint: "Inclusive, safe, ___ and sustainable.",
            modelAnswer:
              "SDG 11 aims to make cities and human settlements inclusive, safe, resilient and sustainable. Targets include access to safe, affordable housing for all, and sustainable transport systems; others include better waste management, cleaner air and green public spaces for all.",
            markScheme: [
              { point: "Aim: inclusive, safe, resilient and sustainable cities", keywords: ["inclusive", "safe", "resilient", "sustainable cit"] },
              { point: "Target 1, e.g. affordable housing", keywords: ["housing", "affordable", "slum", "home"] },
              { point: "Target 2, e.g. transport / waste / air / green space", keywords: ["transport", "waste", "air quality", "clean air", "green space", "public space"] },
            ],
            commonError: "Confusing SDG 11 with other goals such as clean water (SDG 6).",
            guideRef: "what-makes-sustainable",
          },
          {
            id: "sus-qa-p1-q03",
            question: "Explain how green spaces help to make a city more sustainable. Refer to at least two pillars of sustainability.",
            marks: 4,
            hint: "Think about heat, water, wildlife, health.",
            modelAnswer:
              "Environmentally, trees and parks shade surfaces and cool the air, reducing the urban heat island, and soak up rainwater, lowering flood risk; they also provide habitats for wildlife. Socially, parks give people places to exercise and relax, which improves physical and mental health. For example, Curitiba's floodplain parks both store floodwater and give residents about 50 m² of green space each.",
            markScheme: [
              { point: "Cooling / reduces urban heat island", keywords: ["cool", "heat island", "shade", "temperature"] },
              { point: "Absorbs rainwater / reduces flooding", keywords: ["flood", "rainwater", "absorb", "soak", "runoff"] },
              { point: "Social benefit: health, exercise, wellbeing", keywords: ["health", "exercise", "mental", "wellbeing", "relax", "recreation"] },
              { point: "Named example or wildlife/biodiversity benefit", keywords: ["curitiba", "singapore", "wildlife", "habitat", "biodiversity", "tengah"] },
            ],
            commonError: "Saying 'green spaces are nice' without explaining the process or effect.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-qa-p1-q04",
            question: "Describe Singapore's Four National Taps.",
            marks: 4,
            hint: "Local, imported, recycled, sea.",
            modelAnswer:
              "1) Local catchment: rain collected in reservoirs and drains — about two-thirds of Singapore is water catchment. 2) Imported water: piped from Johor, Malaysia, under an agreement lasting to 2061. 3) NEWater: used water purified by microfiltration, reverse osmosis and UV, launched in 2003. 4) Desalination: seawater with the salt removed.",
            markScheme: [
              { point: "Local catchment / reservoirs", keywords: ["catchment", "reservoir", "rain"] },
              { point: "Imported water from Malaysia", keywords: ["import", "malaysia", "johor"] },
              { point: "NEWater / recycled used water", keywords: ["newater", "recycl", "used water", "wastewater"] },
              { point: "Desalination of seawater", keywords: ["desalin", "seawater", "salt"] },
            ],
            commonError: "Describing NEWater as desalinated seawater.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-qa-p1-q05",
            question: "Explain the difference between Singapore's ERP and COE schemes.",
            marks: 4,
            hint: "One controls USING cars, the other OWNING them.",
            modelAnswer:
              "ERP (Electronic Road Pricing, 1998) charges drivers each time they pass gantries on busy roads, with higher charges at peak times — it controls car USE. The COE (Certificate of Entitlement, 1990) is a quota on the number of vehicles: people must bid for a 10-year right to own a car, often costing over S$100,000 — it controls car OWNERSHIP. Together they reduce congestion and emissions.",
            markScheme: [
              { point: "ERP charges for using busy roads", keywords: ["erp", "road pricing", "gantr", "charge", "toll"] },
              { point: "ERP varies with time / congestion", keywords: ["peak", "rush hour", "time of day", "busy time", "busier"] },
              { point: "COE limits the number of cars / quota", keywords: ["quota", "limit", "number of car", "number of vehicle", "ownership", "owning"] },
              { point: "COE requires bidding / is expensive / lasts 10 years", keywords: ["bid", "10-year", "10 year", "expensive", "100,000", "auction"] },
            ],
            commonError: "Treating ERP and COE as the same thing.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-qa-p1-q06",
            question: "Describe the features of Curitiba's Bus Rapid Transit system.",
            marks: 4,
            hint: "Lanes, stations, buses, land use.",
            modelAnswer:
              "Curitiba's BRT (started 1974) has dedicated bus lanes along structural axes, so buses avoid traffic. Raised glass tube stations (from 1991) let passengers pay before boarding and step on level with the floor. Large bi-articulated buses carry about 250 passengers each. High-density housing and offices were zoned along the routes so many people live near a stop.",
            markScheme: [
              { point: "Dedicated / separate bus lanes", keywords: ["dedicated", "lane", "separate", "own lane"] },
              { point: "Tube stations / pay before boarding", keywords: ["tube", "pay before", "level board", "boarding", "glass station"] },
              { point: "Large articulated buses / capacity", keywords: ["articulated", "250", "large bus", "capacity"] },
              { point: "Dense development along routes / date 1974", keywords: ["dense", "density", "axes", "axis", "structural", "1974"] },
            ],
            commonError: "Only writing 'Curitiba has good buses' without specific features.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-qa-p1-q07",
            question: "Explain how the Green Exchange in Curitiba supports all three pillars of sustainability.",
            marks: 3,
            hint: "One point per pillar.",
            modelAnswer:
              "Environmental: recyclables are collected instead of being dumped, reducing litter and landfill. Social: poorer families receive fresh fruit and vegetables (about 1 kg per 4 kg of recyclables), improving diet and health and cleaning their neighbourhoods. Economic: the city buys surplus produce from local farmers, supporting their incomes, and saves on waste collection costs.",
            markScheme: [
              { point: "Environmental: less landfill / litter / more recycling", keywords: ["landfill", "litter", "recycl", "dump", "clean"] },
              { point: "Social: food for poorer families / health", keywords: ["food", "poor", "health", "diet", "famil"] },
              { point: "Economic: supports local farmers / saves money", keywords: ["farmer", "money", "cost", "income", "local produce"] },
            ],
            commonError: "Only explaining the environmental benefit.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-qa-p1-q08",
            question: "Describe how Vauban reduces car use.",
            marks: 3,
            hint: "Parking, alternatives, layout.",
            modelAnswer:
              "Residents cannot park outside their homes; anyone owning a car must buy an expensive space in a garage at the edge of the district. A tram line (2006) runs through the district to the city centre, and there are cycle paths and car-sharing clubs. Shops and schools are within walking distance. As a result, about 70% of households have no car.",
            markScheme: [
              { point: "Parking restricted / edge garages / expensive", keywords: ["parking", "parked", "garage", "expensive", "edge"] },
              { point: "Alternatives: tram / cycling / car-share", keywords: ["tram", "cycl", "bike", "car-shar", "car shar"] },
              { point: "Services nearby / data e.g. 70% car-free", keywords: ["walk", "70", "nearby", "shops", "school"] },
            ],
            commonError: "Claiming cars are completely banned in Vauban.",
            guideRef: "freiburg-vauban",
          },
          {
            id: "sus-qa-p1-q09",
            question: "Define 'ecological footprint' and give its unit.",
            marks: 2,
            hint: "It is an area.",
            modelAnswer:
              "The ecological footprint is the area of biologically productive land and sea needed to provide the resources a person or population uses and to absorb its waste (including CO₂). It is measured in global hectares (gha), usually per person.",
            markScheme: [
              { point: "Area of land/sea needed for resources and waste", keywords: ["land", "area", "resource", "absorb", "waste"] },
              { point: "Unit: global hectares", keywords: ["global hectare", "gha", "hectare"] },
            ],
            commonError: "Giving tonnes of CO₂ as the unit (that is the carbon footprint).",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-qa-p1-q10",
            question: "Curitiba's green space per person rose from about 0.5 m² in 1970 to about 50 m² today. Calculate the percentage increase. Show your working.",
            marks: 2,
            hint: "(new − old) ÷ old × 100.",
            modelAnswer:
              "Change = 50 − 0.5 = 49.5 m². Percentage increase = 49.5 ÷ 0.5 × 100 = 9,900%.",
            markScheme: [
              { point: "Correct method: change ÷ original × 100", keywords: ["49.5", "divided by 0.5", "over 0.5"] },
              { point: "Correct answer 9,900%", keywords: ["9900", "9,900", "9 900"] },
            ],
            commonError: "Dividing by the new value (50) or giving 10,000% (50 ÷ 0.5 × 100).",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-qa-p1-q11",
            question: "Describe what was originally planned for Masdar City.",
            marks: 3,
            hint: "Carbon, waste, cars, people, date.",
            modelAnswer:
              "Launched in 2006 near Abu Dhabi, Masdar City was planned as a zero-carbon, zero-waste, car-free city of about 6 km² for 40,000–50,000 residents and 50,000 commuters, to be completed around 2016. It would run on renewable energy, mainly solar, and use driverless PRT pods instead of cars.",
            markScheme: [
              { point: "Zero-carbon / zero-waste", keywords: ["zero-carbon", "zero carbon", "zero waste", "zero-waste", "carbon neutral"] },
              { point: "Car-free / PRT pods", keywords: ["car-free", "car free", "pod", "prt", "driverless"] },
              { point: "Scale or date: 40,000–50,000 people / 2016 / renewable energy", keywords: ["50,000", "40,000", "2016", "solar", "renewable"] },
            ],
            commonError: "Describing what exists now instead of the original plan.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-qa-p1-q12",
            question: "Explain why industry should be placed downwind of housing in an eco-city design.",
            marks: 2,
            hint: "Where does pollution go?",
            modelAnswer:
              "The prevailing wind carries smoke, dust and smells away from the industrial area. If industry is downwind, pollution blows away from homes rather than over them, protecting residents' health and air quality.",
            markScheme: [
              { point: "Wind carries pollution / smoke / smells", keywords: ["wind", "blow", "carr"] },
              { point: "Away from homes, protecting health / air quality", keywords: ["away from home", "health", "air quality", "residents", "away from"] },
            ],
            commonError: "Mixing up upwind and downwind.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-qa-p1-q13",
            question: "Suggest three criteria that judges could use to evaluate designs in the Eco City competition, and say which pillar each relates to.",
            marks: 3,
            hint: "One criterion for each pillar.",
            modelAnswer:
              "1) Carbon emissions per person or % renewable energy — environmental. 2) Percentage of homes that are affordable / access to schools and clinics within a 15-minute walk — social. 3) Construction and running cost / number of local jobs — economic.",
            markScheme: [
              { point: "Environmental criterion (emissions, green space, renewables)", keywords: ["emission", "carbon", "renewable", "green space", "pollution"] },
              { point: "Social criterion (affordability, access to services)", keywords: ["afford", "access", "housing", "school", "health"] },
              { point: "Economic criterion (cost, jobs, feasibility)", keywords: ["cost", "jobs", "employment", "feasib", "budget"] },
            ],
            commonError: "Listing features (e.g. 'solar panels') rather than criteria to judge by.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-qa-p1-q14",
            question: "Explain two ways that HDB housing contributes to Singapore's sustainability.",
            marks: 4,
            hint: "Think about land, transport and affordability.",
            modelAnswer:
              "First, HDB flats are affordable public housing for about 77–80% of residents, and most residents own their flats, which supports the social pillar by giving people secure homes. Second, high-rise HDB towns are compact and planned with MRT stations, schools, hawker centres and clinics nearby, so people can walk or use public transport, reducing car use and saving scarce land for green space.",
            markScheme: [
              { point: "Affordable homes / high home ownership", keywords: ["afford", "ownership", "own their", "cheap", "subsid"] },
              { point: "Data: about 77–80% of residents", keywords: ["77", "78", "79", "80%", "80 %", "most residents"] },
              { point: "High-density / saves land", keywords: ["high-rise", "high rise", "dense", "density", "land", "compact"] },
              { point: "Services and MRT nearby reduce car use", keywords: ["mrt", "transport", "amenit", "hawker", "walk", "school"] },
            ],
            commonError: "Saying HDB is sustainable 'because it is government housing' without explaining why.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-qa-p1-q15",
            question: "'Curitiba is a more useful model of a sustainable city than Masdar City.' To what extent do you agree? (PEEL)",
            marks: 6,
            hint: "Compare cost, success, who benefits, and transferability. End with a judgement.",
            modelAnswer:
              "I largely agree. Curitiba used cheap, simple solutions that have worked for decades: its BRT (1974) moves huge numbers of people at a fraction of the cost of a metro and has been copied by over 150 cities, and the Green Exchange (1991) swaps recyclables for food, helping poorer residents. This matters because most growing cities are in lower- and middle-income countries with limited budgets, so Curitiba's ideas are transferable. In contrast, Masdar City (2006) planned to be zero-carbon and car-free for about 50,000 people, but it dropped its zero-carbon target, abandoned its PRT pods and only a small part has been built, showing expensive top-down eco-cities can fail. However, Masdar's passive cooling and solar experiments are useful for hot desert cities, and Curitiba now has overcrowded buses and rising car use. Overall, Curitiba is the more useful model for most of the world because it is affordable and proven, while Masdar is a useful laboratory rather than a model.",
            markScheme: [
              { point: "Point: clear view stated", keywords: ["agree", "more useful", "better model", "disagree"] },
              { point: "Evidence from Curitiba (BRT 1974, Green Exchange, parks)", keywords: ["brt", "1974", "green exchange", "bus", "50 m"] },
              { point: "Explanation: cheap / transferable to poorer cities", keywords: ["cheap", "low cost", "afford", "transfer", "copied", "150"] },
              { point: "Evidence from Masdar (targets missed, PRT dropped)", keywords: ["zero-carbon", "zero carbon", "prt", "pod", "small fraction", "2016"] },
              { point: "Counter-argument: Masdar successes or Curitiba problems", keywords: ["however", "overcrowd", "cooling", "wind tower", "car ownership", "irena"] },
              { point: "Link / justified conclusion", keywords: ["overall", "conclusion", "therefore", "to a large extent", "in conclusion"] },
            ],
            commonError: "Describing both cities separately without comparing them or making a final judgement.",
            guideRef: "curitiba-brt-recycling",
          },
        ],
      },
      {
        id: "sus-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "sus-qa-p2-q01",
            question: "Name the three pillars of sustainability and explain why a city must meet all three to be truly sustainable.",
            marks: 4,
            hint: "What happens if one pillar fails?",
            modelAnswer:
              "The three pillars are social, economic and environmental. A city must meet all three because they depend on each other: a city with strong jobs but polluted air harms people's health, and a green city that only rich people can afford excludes many residents. If any pillar fails, the city cannot last for future generations.",
            markScheme: [
              { point: "Names social pillar", keywords: ["social", "society", "people"] },
              { point: "Names economic pillar", keywords: ["econom", "jobs", "money"] },
              { point: "Names environmental pillar", keywords: ["environment", "nature", "ecolog"] },
              { point: "Explains interdependence / example of one failing", keywords: ["depend", "balance", "all three", "overlap", "if one", "fail"] },
            ],
            commonError: "Naming the pillars but not explaining why all three are needed.",
            guideRef: "what-makes-sustainable",
          },
          {
            id: "sus-qa-p2-q02",
            question: "Explain how renewable energy and energy-efficient buildings make a city more sustainable.",
            marks: 4,
            hint: "Supply side and demand side.",
            modelAnswer:
              "Renewable energy such as solar panels and wind turbines generates electricity without burning fossil fuels, so it produces far fewer greenhouse gas emissions and less air pollution. Energy-efficient buildings, with insulation, shading and natural ventilation, need less energy in the first place, cutting both emissions and household bills. For example, Vauban's plus-energy houses produce more electricity than they use, and Singapore's Green Plan aims to expand rooftop solar.",
            markScheme: [
              { point: "Renewables replace fossil fuels", keywords: ["fossil", "solar", "wind turbine", "wind power", "coal"] },
              { point: "Fewer emissions / less pollution", keywords: ["emission", "co2", "carbon", "pollution", "greenhouse"] },
              { point: "Efficient buildings reduce demand / bills", keywords: ["insulat", "less energy", "bill", "demand", "shad", "ventilat"] },
              { point: "Named example", keywords: ["vauban", "freiburg", "plus-energy", "masdar", "green plan", "singapore"] },
            ],
            commonError: "Only describing solar panels without explaining the effect on emissions.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-qa-p2-q03",
            question: "Explain why mixed-use zoning is more sustainable than separating homes, shops and workplaces into different zones.",
            marks: 3,
            hint: "Think about the journeys people make.",
            modelAnswer:
              "In mixed-use areas, homes, shops, schools and offices are close together, so journeys are short and people can walk, cycle or take public transport instead of driving. This cuts carbon emissions and congestion. It also makes streets livelier and safer and supports local businesses, whereas single-use zoning forces long car journeys.",
            markScheme: [
              { point: "Services / jobs close to homes", keywords: ["close to", "near", "short journey", "shorter", "walking distance"] },
              { point: "Less car use, more walking/cycling/public transport", keywords: ["walk", "cycl", "fewer car", "car use", "less driving", "public transport"] },
              { point: "Fewer emissions / congestion OR social/economic benefit", keywords: ["emission", "congestion", "carbon", "lively", "business", "safe"] },
            ],
            commonError: "Defining mixed-use without explaining why it is sustainable.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-qa-p2-q04",
            question: "Describe how Singapore's approach to greenery has changed since 1967.",
            marks: 3,
            hint: "Three names in sequence.",
            modelAnswer:
              "In 1967 Lee Kuan Yew launched the Garden City vision, mainly planting roadside trees to make Singapore clean and green. This developed into the 'City in a Garden', with more parks and park connectors. Since 2020 the vision is 'City in Nature', which goes further by restoring natural habitats and nature corridors (like Tengah's Forest Corridor) and planting 1 million more trees by 2030 under the Green Plan.",
            markScheme: [
              { point: "Garden City, 1967 / roadside trees", keywords: ["garden city", "roadside", "street tree", "lee kuan yew"] },
              { point: "City in a Garden / park connectors", keywords: ["city in a garden", "park connector", "parks"] },
              { point: "City in Nature (2020) / restoring nature / 1 million trees", keywords: ["city in nature", "2020", "million trees", "corridor", "habitat"] },
            ],
            commonError: "Only mentioning one stage without showing change over time.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-qa-p2-q05",
            question: "Explain the three purposes of Marina Barrage.",
            marks: 3,
            hint: "Water, floods, people.",
            modelAnswer:
              "Water supply: the barrage, opened in 2008, keeps seawater out so the Marina Basin became a freshwater reservoir, Singapore's 15th, with a large catchment. Flood control: during heavy rain at high tide, gates and pumps release water to the sea, protecting low-lying areas like Chinatown. Lifestyle: the calm reservoir and green roof are used for recreation such as kayaking and picnics.",
            markScheme: [
              { point: "Water supply / reservoir", keywords: ["reservoir", "water supply", "freshwater", "15th"] },
              { point: "Flood control in low-lying areas", keywords: ["flood", "pump", "low-lying", "tide"] },
              { point: "Recreation / lifestyle", keywords: ["recreation", "leisure", "lifestyle", "kayak", "picnic", "tourism"] },
            ],
            commonError: "Thinking the barrage is mainly for sea defence against storm surges.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-qa-p2-q06",
            question: "Describe Tengah's sustainable features.",
            marks: 4,
            hint: "Forest, cars, cooling, homes.",
            modelAnswer:
              "Tengah is HDB's 'forest town' in western Singapore, with about 42,000 homes planned. A Forest Corridor about 100 m wide runs through it, linking nature areas for wildlife. The town centre is car-free, with roads running underground so the surface is for walking and cycling. Homes use centralised cooling, which is more efficient than individual air-conditioners, and there are community farming spaces.",
            markScheme: [
              { point: "Forest Corridor / nature links", keywords: ["forest corridor", "corridor", "100 m", "wildlife", "forest"] },
              { point: "Car-free town centre / roads underground", keywords: ["car-free", "car free", "underground", "pedestrian"] },
              { point: "Centralised cooling / energy efficiency", keywords: ["centralised cooling", "centralized cooling", "cooling", "solar", "efficien"] },
              { point: "Public HDB housing / community features", keywords: ["hdb", "community", "farm", "42,000", "public housing"] },
            ],
            commonError: "Confusing Tengah with older HDB towns or with a nature reserve.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-qa-p2-q07",
            question: "Explain why Curitiba's sustainable ideas have been copied by many other cities.",
            marks: 3,
            hint: "Cost, simplicity, results.",
            modelAnswer:
              "Curitiba's ideas are cheap compared with metros or high-tech systems, so cities with limited budgets can afford them. They are simple and quick to build — BRT lanes and tube stations need no tunnelling. They have a proven track record since 1974, carrying large numbers of passengers, so other cities such as Bogotá copied BRT — now in over 150 cities.",
            markScheme: [
              { point: "Low cost / affordable", keywords: ["cheap", "low cost", "afford", "budget", "inexpensive"] },
              { point: "Simple / quick to build", keywords: ["simple", "quick", "easy", "no tunnel"] },
              { point: "Proven success / example of a copying city", keywords: ["proven", "bogot", "150", "successful", "transmilenio", "jakarta"] },
            ],
            commonError: "Describing Curitiba's features without explaining why they are transferable.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-qa-p2-q08",
            question: "Explain how Vauban demonstrates community involvement in planning.",
            marks: 3,
            hint: "Forum Vauban and Baugruppen.",
            modelAnswer:
              "Residents formed Forum Vauban, a citizens' association that took part in planning the district with the city council, shaping ideas like car-free streets. Many homes were built by Baugruppen — groups of future neighbours who designed and built homes together, often more cheaply. This gave people ownership of the neighbourhood, so they look after it and support its rules.",
            markScheme: [
              { point: "Forum Vauban / residents involved in planning", keywords: ["forum vauban", "residents group", "residents association", "citizen", "consult"] },
              { point: "Baugruppen / building groups", keywords: ["baugruppen", "building group", "neighbours", "self-build", "co-op"] },
              { point: "Effect: ownership / pride / supports car-free rules", keywords: ["ownership", "pride", "look after", "commit", "follow the rules", "sense of community"] },
            ],
            commonError: "Not giving any specific example of how residents were involved.",
            guideRef: "freiburg-vauban",
          },
          {
            id: "sus-qa-p2-q09",
            question: "Describe how Masdar City's design keeps streets cool without using much energy.",
            marks: 3,
            hint: "Traditional desert towns did this too.",
            modelAnswer:
              "Streets are narrow and oriented to create shade from surrounding buildings and catch cooling breezes. A modern wind tower draws air down and pushes cooler air into a public square. Buildings sit on a raised podium and use shading screens, so streets can be several degrees cooler than the open desert.",
            markScheme: [
              { point: "Narrow, shaded streets", keywords: ["narrow", "shade", "shadow"] },
              { point: "Wind tower / catching breezes", keywords: ["wind tower", "breeze", "air flow", "airflow", "catch the wind"] },
              { point: "Raised podium / screens / cooler than desert", keywords: ["podium", "raised", "screen", "cooler", "degrees"] },
            ],
            commonError: "Saying Masdar keeps cool using air-conditioning powered by solar.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-qa-p2-q10",
            question: "Define 'carbon footprint' and suggest two ways a Singapore family could reduce theirs.",
            marks: 3,
            hint: "Think about air-con, transport and food.",
            modelAnswer:
              "A carbon footprint is the total amount of greenhouse gases (in tonnes of CO₂ equivalent) produced by a person, family or activity. A Singapore family could set air-conditioning to 25°C or use fans instead, and travel by MRT, bus or bicycle rather than by car or taxi. Eating less imported meat and wasting less food would also help.",
            markScheme: [
              { point: "Definition: total greenhouse gases / CO₂", keywords: ["greenhouse", "co2", "carbon dioxide", "emission"] },
              { point: "Reduction 1 (e.g. less air-con / energy saving)", keywords: ["air-con", "aircon", "air con", "fan", "electricity", "save energy"] },
              { point: "Reduction 2 (e.g. public transport / diet / waste)", keywords: ["mrt", "bus", "cycl", "walk", "meat", "waste"] },
            ],
            commonError: "Confusing carbon footprint with ecological footprint (land area).",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-qa-p2-q11",
            question: "Study the data. Ecological footprint (gha per person): USA 7.5; UK 4.0; China 3.6; India 1.0. Earth's biocapacity: 1.6. Describe the pattern shown, using data.",
            marks: 3,
            hint: "Trend – Example – Anomaly.",
            modelAnswer:
              "Footprints vary greatly: richer countries have larger footprints — the USA's is highest at 7.5 gha, almost 5 times the 1.6 gha biocapacity and 7.5 times India's 1.0 gha. Three of the four countries (USA, UK, China) exceed the biocapacity, so they are in overshoot. India is the exception, below 1.6 gha.",
            markScheme: [
              { point: "General trend: higher income → higher footprint / big variation", keywords: ["rich", "higher income", "wealth", "develop", "vary", "range"] },
              { point: "Uses data, e.g. USA 7.5 vs India 1.0", keywords: ["7.5", "1.0", "4.0", "3.6"] },
              { point: "Compares with biocapacity / identifies anomaly (India below 1.6)", keywords: ["1.6", "biocapacity", "overshoot", "exception", "below"] },
            ],
            commonError: "Listing every figure without describing an overall pattern.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-qa-p2-q12",
            question: "Using the data in the previous question, calculate how many times larger the USA's footprint is than India's, and how many Earths would be needed if everyone lived like the average US resident.",
            marks: 2,
            hint: "Two divisions: 7.5 ÷ 1.0 and 7.5 ÷ 1.6.",
            modelAnswer:
              "USA ÷ India = 7.5 ÷ 1.0 = 7.5 times larger. Earths needed = 7.5 ÷ 1.6 ≈ 4.7 Earths (about 5).",
            markScheme: [
              { point: "7.5 times larger", keywords: ["7.5 times", "7.5x", "7.5 x", "seven and a half times"] },
              { point: "About 4.7 Earths", keywords: ["4.7", "4.69", "about 5", "nearly 5", "4.6"] },
            ],
            commonError: "Subtracting instead of dividing.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-qa-p2-q13",
            question: "For the Eco City competition, describe a transport plan for a new city of 40,000 people.",
            marks: 4,
            hint: "Spine, walking distance, bikes, cars.",
            modelAnswer:
              "A tram or BRT line would form a spine through the city, with stops so every home is within about 400–500 m (a 5–10 minute walk). Protected, shaded cycle lanes and footpaths would connect homes to schools and the centre. The city centre would be car-free, with limited, expensive parking at the edge (like Vauban) and road pricing (like ERP) to discourage driving. Car-sharing and electric buses would cover remaining trips.",
            markScheme: [
              { point: "Public transport spine (tram/BRT/MRT)", keywords: ["tram", "brt", "mrt", "bus", "metro"] },
              { point: "Homes within walking distance of stops", keywords: ["400", "500", "walking distance", "5 minute", "10 minute", "minute walk"] },
              { point: "Cycling and walking routes", keywords: ["cycl", "bike", "footpath", "walk", "pedestrian"] },
              { point: "Measures to limit cars (car-free centre, parking limits, pricing)", keywords: ["car-free", "car free", "parking", "pricing", "erp", "car shar"] },
            ],
            commonError: "Just listing 'buses and bikes' without explaining layout or how car use is reduced.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-qa-p2-q14",
            question: "Explain one trade-off that designers face when planning an eco-city.",
            marks: 3,
            hint: "Gaining one thing often means losing another.",
            modelAnswer:
              "One trade-off is between green space and housing. Adding more parks improves cooling, flood control and wellbeing (environmental and social benefits), but uses land that could provide more homes, which may make housing scarcer and more expensive. Designers can reduce this trade-off by building higher-density housing and using green roofs and vertical greenery.",
            markScheme: [
              { point: "Identifies a trade-off (e.g. green space vs housing; cost vs ambition)", keywords: ["green space", "housing", "cost", "trade-off", "versus"] },
              { point: "Explains the benefit of one side", keywords: ["cool", "flood", "wellbeing", "health", "emission", "habitat"] },
              { point: "Explains the cost/loss on the other side or a way to reduce it", keywords: ["expensive", "fewer homes", "less land", "high-rise", "green roof", "budget"] },
            ],
            commonError: "Naming two features without explaining why gaining one means losing the other.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-qa-p2-q15",
            question: "Evaluate how successful Singapore has been in becoming a sustainable city. (6 marks)",
            marks: 6,
            hint: "Successes in transport, water, housing, greenery — then the challenges. Finish with a judgement.",
            modelAnswer:
              "Singapore has been very successful in several areas. Its transport policies — the world's first congestion charge in 1975, ERP since 1998 and the COE quota since 1990 — keep traffic flowing and encourage MRT use. Its water strategy, the Four National Taps, includes NEWater (2003), which can meet up to about 40% of demand, and the Marina Barrage (2008), reducing reliance on Malaysia. About 77–80% of residents live in affordable HDB flats, supporting the social pillar, and greening from the 1967 Garden City to the City in Nature makes the city cooler and healthier. However, there are important weaknesses: Singapore imports over 90% of its food and almost all its energy, so its ecological footprint lies mostly overseas; carbon emissions per person (about 8–9 tonnes) are above the world average because of air-conditioning and industry; domestic recycling is only about 12%; and Semakau Landfill could be full by 2035. Overall, Singapore is highly successful at managing a dense city within its borders, but less sustainable when its global footprint is considered — the Green Plan 2030 shows it recognises this.",
            markScheme: [
              { point: "Transport success with evidence (ERP 1998 / COE 1990 / ALS 1975 / MRT)", keywords: ["erp", "coe", "1975", "1998", "mrt", "road pricing"] },
              { point: "Water success with evidence (NEWater 2003 / Marina Barrage 2008)", keywords: ["newater", "marina barrage", "2003", "2008", "four national taps"] },
              { point: "Social success: HDB housing / greenery", keywords: ["hdb", "77", "80%", "garden city", "city in nature", "housing"] },
              { point: "Weakness: imports / footprint / emissions", keywords: ["import", "footprint", "emission", "8 tonnes", "90%"] },
              { point: "Weakness: waste / recycling / landfill", keywords: ["semakau", "landfill", "12%", "recycling rate", "air-con"] },
              { point: "Justified overall judgement", keywords: ["overall", "conclusion", "to a large extent", "largely", "therefore"] },
            ],
            commonError: "Writing only about successes with no weaknesses or final judgement.",
            guideRef: "singapore-city-in-nature",
          },
        ],
      },
      {
        id: "sus-qa-p3",
        title: "Written Paper 3",
        questions: [
          {
            id: "sus-qa-p3-q01",
            question: "Singapore's Park Connector Network links parks with paths for walking and cycling. Give one social, one economic and one environmental benefit of this network.",
            marks: 3,
            hint: "People, money, nature — one each.",
            modelAnswer:
              "Social: residents get safe, shaded routes for exercise and recreation, improving physical and mental health. Economic: people can cycle to work or to MRT stations cheaply, saving transport costs, and attractive green routes raise property values and tourism. Environmental: the green corridors give wildlife a way to move between parks and encourage cycling instead of driving, reducing emissions.",
            markScheme: [
              { point: "Social benefit: health, exercise, recreation, safety", keywords: ["health", "exercise", "recreation", "leisure", "safe", "wellbeing"] },
              { point: "Economic benefit: cheaper travel, tourism, property value", keywords: ["cheap", "save money", "cost", "tourism", "property", "fare"] },
              { point: "Environmental benefit: wildlife corridors, fewer car emissions", keywords: ["wildlife", "habitat", "emission", "pollution", "corridor", "biodiversity"] },
            ],
            commonError: "Giving three environmental benefits and calling one of them 'social'.",
            guideRef: "what-makes-sustainable",
          },
          {
            id: "sus-qa-p3-q02",
            question: "Explain why public transport is more sustainable than private cars.",
            marks: 4,
            hint: "Energy, space, emissions, fairness.",
            modelAnswer:
              "A bus or train carries many people at once, so it uses far less fuel or energy per passenger than cars, producing fewer carbon emissions and less air pollution. It also takes up much less road space per person, reducing congestion. Public transport is cheaper for users than owning a car, so it gives everyone — including people who cannot drive — access to jobs and services. For example, Singapore's MRT and Curitiba's BRT carry huge numbers of people daily.",
            markScheme: [
              { point: "Carries many people / less energy per person", keywords: ["many people", "per person", "per passenger", "capacity", "more people"] },
              { point: "Fewer emissions / less air pollution", keywords: ["emission", "pollution", "co2", "carbon"] },
              { point: "Less congestion / road space", keywords: ["congestion", "traffic", "space", "jam"] },
              { point: "Social/economic: cheaper, accessible to all / example", keywords: ["cheap", "afford", "access", "everyone", "mrt", "brt"] },
            ],
            commonError: "Saying buses produce no pollution at all.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-qa-p3-q03",
            question: "Explain how water recycling and conservation help make a city sustainable. Use an example.",
            marks: 4,
            hint: "Supply and demand for water.",
            modelAnswer:
              "Water recycling treats used water so it can be used again, increasing supply without taking more from rivers or importing it. For example, Singapore's NEWater (2003) can meet up to about 40% of demand. Conservation — water-saving taps, fixing leaks, rainwater harvesting — reduces demand. Together they make the city more resilient to droughts and less dependent on other countries, so there is enough water for future generations.",
            markScheme: [
              { point: "Recycling reuses wastewater / increases supply", keywords: ["reuse", "used again", "used water", "wastewater", "treat", "supply"] },
              { point: "Conservation reduces demand / waste", keywords: ["water-saving", "water saving", "leak", "demand", "harvest", "shorter shower"] },
              { point: "Benefit: resilience to drought / less dependence on imports", keywords: ["drought", "resilien", "import", "depend", "secure"] },
              { point: "Named example with data", keywords: ["newater", "40%", "2003", "four national taps", "marina barrage"] },
            ],
            commonError: "Not distinguishing between increasing supply and reducing demand.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-qa-p3-q04",
            question: "Explain how NEWater is produced and why it is important to Singapore.",
            marks: 4,
            hint: "Three treatment stages, then reasons.",
            modelAnswer:
              "Used water is first treated at a water reclamation plant, then purified in three stages: microfiltration removes small particles and bacteria, reverse osmosis forces water through membranes to remove dissolved salts and contaminants, and ultraviolet light disinfects it. NEWater is important because Singapore has little land to collect rain and depends partly on imports from Malaysia; NEWater is weather-resistant and can meet up to about 40% of demand (55% by 2060), improving water security.",
            markScheme: [
              { point: "Microfiltration", keywords: ["microfiltration", "micro-filtration", "filter"] },
              { point: "Reverse osmosis and UV disinfection", keywords: ["reverse osmosis", "ultraviolet", "uv", "membrane"] },
              { point: "Reduces reliance on imports / limited land", keywords: ["import", "malaysia", "limited land", "depend", "little land"] },
              { point: "Data: up to 40% now / 55% by 2060 / weather-resistant", keywords: ["40%", "55%", "2060", "2065", "weather", "drought"] },
            ],
            commonError: "Saying NEWater is made from seawater.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-qa-p3-q05",
            question: "Suggest why the COE system could be seen as socially unfair.",
            marks: 3,
            hint: "Who can afford S$100,000?",
            modelAnswer:
              "COE prices often exceed S$100,000, so owning a car becomes a luxury mainly for the wealthy. Lower-income families who need a car — for example tradespeople, shift workers or people caring for elderly or disabled relatives — may struggle to afford one. This means the environmental benefits are gained partly at the cost of fairness, though excellent public transport reduces the problem.",
            markScheme: [
              { point: "COE is very expensive", keywords: ["expensive", "100,000", "cost", "price"] },
              { point: "Only the wealthy can afford cars", keywords: ["rich", "wealth", "luxury", "afford", "high income"] },
              { point: "Groups who need cars are disadvantaged", keywords: ["elderly", "disab", "tradespeople", "shift", "low-income", "poor"] },
            ],
            commonError: "Explaining how COE works without saying who is disadvantaged.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-qa-p3-q06",
            question: "Explain how Curitiba used parks to solve two problems at once.",
            marks: 3,
            hint: "Water and people.",
            modelAnswer:
              "Instead of building costly concrete flood channels, Curitiba turned flood-prone river valleys into parks with lakes. When it rains heavily, the lakes and grassland store floodwater, protecting homes. At the same time, the parks gave residents much more green space — rising to around 50 m² per person — for recreation and wildlife.",
            markScheme: [
              { point: "Parks on floodplains / lakes store floodwater", keywords: ["flood", "lake", "store", "floodplain"] },
              { point: "Cheaper than concrete channels", keywords: ["cheap", "concrete", "cost", "instead"] },
              { point: "More green space / recreation (e.g. ~50 m² per person)", keywords: ["green space", "50", "recreation", "leisure", "wildlife"] },
            ],
            commonError: "Only mentioning recreation, not flood control.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-qa-p3-q07",
            question: "Describe two problems that Curitiba faces today.",
            marks: 2,
            hint: "Success has brought challenges.",
            modelAnswer:
              "First, the BRT buses are overcrowded at peak times and car ownership has risen as incomes grew. Second, informal settlements (favelas) on the outskirts have poorer access to services and transport.",
            markScheme: [
              { point: "Overcrowded buses / rising car use", keywords: ["overcrowd", "crowded", "car ownership", "more cars", "car use"] },
              { point: "Favelas / inequality / poor services on outskirts", keywords: ["favela", "informal", "inequal", "outskirt", "slum", "poor"] },
            ],
            commonError: "Writing about Curitiba's successes instead of its problems.",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-qa-p3-q08",
            question: "Explain why Freiburg is a good location for solar energy and how the city uses it.",
            marks: 3,
            hint: "Climate, then examples.",
            modelAnswer:
              "Freiburg lies in south-west Germany and is one of the sunniest cities in the country, so solar panels generate more electricity there. The city uses solar on many roofs: Vauban's Solar Settlement has plus-energy houses that produce more energy than they use, and even the multi-storey car garage has a solar roof. Its anti-nuclear history also encouraged support for renewables.",
            markScheme: [
              { point: "Sunny climate / south-west Germany", keywords: ["sunn", "sunshine", "south", "climate"] },
              { point: "Solar Settlement / plus-energy houses", keywords: ["plus-energy", "plus energy", "solar settlement", "solarsiedlung", "more energy"] },
              { point: "Other example (solar garage, roofs) or anti-nuclear history", keywords: ["garage", "roof", "nuclear", "stadium", "panel"] },
            ],
            commonError: "Not explaining why the location suits solar power.",
            guideRef: "freiburg-vauban",
          },
          {
            id: "sus-qa-p3-q09",
            question: "Explain why Masdar City has been criticised as an 'eco-enclave'.",
            marks: 3,
            hint: "Who lives there, and who benefits?",
            modelAnswer:
              "Masdar is a small, high-tech development separate from the rest of Abu Dhabi. It has only a few thousand residents, many of them wealthy professionals or students, and housing is expensive. Critics say it benefits a small elite while the wider city continues high-energy, car-based lifestyles, so it does little for the social pillar or for overall emissions.",
            markScheme: [
              { point: "Separate / isolated from the wider city", keywords: ["separate", "isolated", "cut off", "gated", "apart from"] },
              { point: "Mostly for wealthy / few residents", keywords: ["wealthy", "rich", "elite", "expensive", "few thousand"] },
              { point: "Does little for the wider population / social pillar", keywords: ["wider", "rest of", "social", "abu dhabi", "most people"] },
            ],
            commonError: "Not explaining what 'enclave' means.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-qa-p3-q10",
            question: "Suggest four indicators that could be used to measure the sustainability of a city.",
            marks: 4,
            hint: "Try to cover all three pillars.",
            modelAnswer:
              "1) Carbon emissions per person (tonnes CO₂e). 2) Green space per person (m²). 3) Percentage of trips by public transport, walking or cycling. 4) Percentage of households in affordable housing. Others: recycling rate, air quality (PM2.5), water use per person, unemployment rate.",
            markScheme: [
              { point: "Emissions / footprint indicator", keywords: ["emission", "carbon", "footprint", "co2"] },
              { point: "Green space / air quality indicator", keywords: ["green space", "air quality", "pm2.5", "pollution", "trees"] },
              { point: "Transport / recycling / water indicator", keywords: ["public transport", "trips", "recycl", "water use", "cycl"] },
              { point: "Social or economic indicator", keywords: ["housing", "afford", "unemploy", "income", "health", "crime"] },
            ],
            commonError: "Listing features (e.g. 'parks') rather than measurable indicators.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-qa-p3-q11",
            question: "Study the data on water use per person per day: 1995: 172 litres; 2010: 154 litres; 2023: 141 litres (approximate, Singapore). Calculate the percentage change from 1995 to 2023 and suggest one reason for the change.",
            marks: 3,
            hint: "(new − old) ÷ old × 100. Then think about campaigns and appliances.",
            modelAnswer:
              "Change = 141 − 172 = −31 litres. Percentage change = −31 ÷ 172 × 100 ≈ −18% (an 18% decrease). One reason is water conservation campaigns and the water efficiency labelling scheme, encouraging water-saving taps, shower heads and washing machines, plus water pricing.",
            markScheme: [
              { point: "Correct method / change of −31 litres", keywords: ["31", "divided by 172", "over 172"] },
              { point: "Answer about 18% decrease", keywords: ["18%", "18 %", "-18", "18.0", "18 per"] },
              { point: "Valid reason (campaigns, efficient appliances, pricing)", keywords: ["campaign", "efficien", "label", "price", "tax", "saving"] },
            ],
            commonError: "Dividing by 141 instead of the original 172.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-qa-p3-q12",
            question: "Describe the waste hierarchy and explain why recycling is not at the top.",
            marks: 3,
            hint: "Reduce comes first.",
            modelAnswer:
              "The waste hierarchy ranks waste options from best to worst: reduce, reuse, recycle, recover energy, and finally landfill. Recycling is not at the top because collecting, sorting and reprocessing materials still uses energy and resources, and some material is lost; reducing waste avoids those impacts completely.",
            markScheme: [
              { point: "Correct order: reduce, reuse, recycle …landfill", keywords: ["reduce", "reuse", "landfill"] },
              { point: "Recycling uses energy / resources", keywords: ["energy", "transport", "process", "resource", "sort"] },
              { point: "Reducing avoids waste entirely", keywords: ["avoid", "never", "not created", "no waste", "prevent"] },
            ],
            commonError: "Putting recycling first.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-qa-p3-q13",
            question: "Your Eco City design has a river running through the site. Describe how you would use and protect the river in your design.",
            marks: 4,
            hint: "Water supply, flooding, nature, people.",
            modelAnswer:
              "I would keep the floodplain free of buildings and turn it into a wetland park, which stores floodwater (like Curitiba's parks) and cleans water naturally. I would build a small reservoir or barrage for water supply, like Marina Barrage. Industry and landfill would be kept well away from the river to prevent pollution. Riverside walking and cycling paths would let residents enjoy it.",
            markScheme: [
              { point: "Floodplain kept as park / wetland", keywords: ["floodplain", "wetland", "park", "no building"] },
              { point: "Water supply / reservoir / barrage", keywords: ["reservoir", "supply", "barrage", "drinking"] },
              { point: "Protect from pollution (industry away)", keywords: ["pollut", "industry away", "away from", "no dumping", "contaminat"] },
              { point: "Recreation / nature / example used", keywords: ["recreation", "path", "wildlife", "curitiba", "marina"] },
            ],
            commonError: "Building homes on the floodplain or using the river for waste disposal.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-qa-p3-q14",
            question: "Explain why community involvement is important when designing a sustainable neighbourhood.",
            marks: 3,
            hint: "Think about Vauban.",
            modelAnswer:
              "Residents know their own needs best, so involving them leads to designs that actually work for them. People who help plan a place feel ownership, so they are more likely to follow rules (like car-free streets) and look after it. For example, Forum Vauban and the Baugruppen helped make Vauban's car-free design successful.",
            markScheme: [
              { point: "Residents know local needs", keywords: ["needs", "know best", "local knowledge", "what they want"] },
              { point: "Ownership / support for rules / look after place", keywords: ["ownership", "pride", "look after", "follow", "accept", "stick to"] },
              { point: "Example (Vauban / Forum Vauban / Baugruppen)", keywords: ["vauban", "forum", "baugruppen", "freiburg"] },
            ],
            commonError: "Saying 'it's good to involve people' without explaining why.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-qa-p3-q15",
            question: "'Building brand-new eco-cities is the best way to make urban areas sustainable.' Discuss this statement using examples. (6 marks)",
            marks: 6,
            hint: "New-build (Masdar, Tengah) vs retrofitting (Freiburg, Curitiba, Singapore). Conclude.",
            modelAnswer:
              "New eco-cities can be designed sustainably from the start. Tengah in Singapore has a 100 m-wide Forest Corridor, a car-free town centre and centralised cooling, which would be very hard to add to an old town. However, new eco-cities are expensive and risky: Masdar City, launched in 2006 for about 50,000 people, dropped its zero-carbon target, abandoned its PRT pods and only a small part has been built. Improving existing cities can be cheaper and helps far more people, because most of the urban areas of 2050 already exist. Curitiba transformed itself with BRT from 1974 and the Green Exchange, and Freiburg redeveloped a brownfield barracks into Vauban, where about 70% of households are car-free. Overall, I disagree that new eco-cities are the best way: they are useful experiments, but retrofitting and redeveloping existing cities has a bigger, more affordable impact.",
            markScheme: [
              { point: "Advantage of new eco-cities", keywords: ["from scratch", "from the start", "blank", "designed from", "planned from"] },
              { point: "Evidence: Tengah or Masdar features", keywords: ["tengah", "forest corridor", "masdar", "wind tower", "car-free town"] },
              { point: "Disadvantage of new eco-cities (cost / Masdar unfulfilled)", keywords: ["expensive", "cost", "unfinished", "dropped", "prt", "small part"] },
              { point: "Retrofitting reaches more people / most cities already exist", keywords: ["retrofit", "existing", "already exist", "improv", "more people"] },
              { point: "Evidence of retrofitting success (Curitiba / Vauban)", keywords: ["curitiba", "vauban", "freiburg", "brt", "brownfield", "70%"] },
              { point: "Justified conclusion", keywords: ["overall", "conclusion", "disagree", "agree", "therefore"] },
            ],
            commonError: "Only describing one eco-city without weighing up alternatives.",
            guideRef: "masdar-city",
          },
        ],
      },
      {
        id: "sus-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "sus-qa-p4-q01",
            question: "What is meant by a 'resilient' city? Give one example of how Singapore is making itself more resilient.",
            marks: 2,
            hint: "Coping with shocks such as floods and rising seas.",
            modelAnswer:
              "A resilient city can withstand and recover quickly from shocks such as floods, heatwaves or disease outbreaks. For example, Singapore built the Marina Barrage (2008) to control floods in low-lying areas, and is planning coastal defences against sea-level rise.",
            markScheme: [
              { point: "Definition: copes with / recovers from shocks", keywords: ["cope", "recover", "bounce back", "withstand", "shock"] },
              { point: "Valid Singapore example", keywords: ["marina barrage", "seawall", "sea wall", "flood", "coastal", "newater"] },
            ],
            commonError: "Confusing resilient with 'rich' or 'large'.",
            guideRef: "what-makes-sustainable",
          },
          {
            id: "sus-qa-p4-q02",
            question: "Explain how cycling and walking infrastructure supports the social and environmental pillars of sustainability.",
            marks: 4,
            hint: "Two points per pillar.",
            modelAnswer:
              "Environmentally, walking and cycling produce no exhaust emissions, so replacing car trips cuts carbon emissions and air pollution; they also reduce noise. Socially, active travel improves physical fitness and mental health, and it is cheap, so people who cannot afford a car can still reach jobs and services. Safe, shaded cycle lanes and footpaths, like Singapore's Park Connector Network, make these choices attractive.",
            markScheme: [
              { point: "No / fewer emissions", keywords: ["emission", "zero carbon", "co2", "no fuel"] },
              { point: "Less air or noise pollution / fewer cars", keywords: ["pollution", "noise", "fewer car", "congestion", "air quality"] },
              { point: "Health / fitness benefits", keywords: ["health", "fit", "exercise", "obesity", "mental"] },
              { point: "Cheap / accessible to all / example", keywords: ["cheap", "afford", "access", "free", "park connector", "vauban"] },
            ],
            commonError: "Only writing about the environment.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-qa-p4-q03",
            question: "Explain what is meant by the urban heat island effect and suggest two ways a sustainable city can reduce it.",
            marks: 4,
            hint: "Why are cities warmer than the countryside?",
            modelAnswer:
              "The urban heat island is when a city is warmer than the surrounding countryside, because concrete and tarmac absorb heat by day and release it at night, and air-conditioners, vehicles and buildings give off waste heat. A city can reduce it by planting street trees and parks, which shade surfaces and cool the air, and by adding green roofs or light-coloured 'cool' roofs that reflect sunlight.",
            markScheme: [
              { point: "Definition: city warmer than surrounding rural area", keywords: ["warmer", "hotter", "higher temperature", "countryside", "rural"] },
              { point: "Cause: concrete/tarmac absorb heat or waste heat", keywords: ["concrete", "tarmac", "absorb", "air-con", "waste heat", "vehicles"] },
              { point: "Solution 1: trees / parks / shade", keywords: ["tree", "park", "shade", "green space"] },
              { point: "Solution 2: green roofs / cool roofs / water features / ventilation", keywords: ["green roof", "cool roof", "reflect", "water feature", "ventilat", "breeze"] },
            ],
            commonError: "Saying the heat island is caused by global warming.",
            guideRef: "features-of-sustainable-cities",
          },
          {
            id: "sus-qa-p4-q04",
            question: "Study the data. Singapore vehicle population: 1990: about 520,000; 2023: about 990,000. Population: 1990: 3.0 million; 2023: 5.9 million. Calculate vehicles per 1,000 people in each year and comment on what this suggests about the COE system.",
            marks: 4,
            hint: "Vehicles ÷ population × 1,000.",
            modelAnswer:
              "1990: 520,000 ÷ 3,000,000 × 1,000 ≈ 173 vehicles per 1,000 people. 2023: 990,000 ÷ 5,900,000 × 1,000 ≈ 168 vehicles per 1,000 people. Although the total number of vehicles almost doubled, vehicles per person stayed about the same (even fell slightly), even though Singaporeans became much richer. This suggests the COE quota has successfully controlled car ownership — in many cities car ownership rises sharply as incomes grow.",
            markScheme: [
              { point: "1990 ≈ 173 per 1,000", keywords: ["173", "170", "17.3"] },
              { point: "2023 ≈ 168 per 1,000", keywords: ["168", "167", "16.8"] },
              { point: "Observes rate stayed roughly the same / fell slightly", keywords: ["same", "similar", "fell", "stable", "slightly", "decreas"] },
              { point: "Links to COE controlling ownership despite rising wealth", keywords: ["coe", "quota", "control", "limit", "richer", "income"] },
            ],
            commonError: "Only comparing total vehicle numbers, which ignores population growth.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-qa-p4-q05",
            question: "Describe the aims of the Singapore Green Plan 2030.",
            marks: 4,
            hint: "Trees, parks, waste, energy, transport.",
            modelAnswer:
              "The Green Plan 2030, launched in 2021, aims to plant 1 million more trees and make sure every household is within a 10-minute walk of a park (City in Nature). It aims to cut the amount of waste sent to landfill per person per day by 30% (Sustainable Living), increase solar energy (Energy Reset), and expand cycling paths and the rail network while encouraging cleaner vehicles. Its overall goal is to move towards net-zero emissions.",
            markScheme: [
              { point: "1 million more trees / parks within 10-minute walk", keywords: ["million trees", "1 million", "10-minute", "10 minute", "park"] },
              { point: "Reduce waste to landfill by 30%", keywords: ["30%", "waste", "landfill"] },
              { point: "More solar / renewable energy", keywords: ["solar", "renewable", "energy reset", "clean energy"] },
              { point: "Greener transport / net zero", keywords: ["cycl", "rail", "mrt", "electric", "net zero", "net-zero"] },
            ],
            commonError: "Giving vague aims like 'make Singapore greener' with no targets.",
            guideRef: "singapore-city-in-nature",
          },
          {
            id: "sus-qa-p4-q06",
            question: "Compare the transport strategies of Singapore and Curitiba.",
            marks: 4,
            hint: "One similarity, one or two differences, with facts.",
            modelAnswer:
              "Both cities prioritise public transport over cars and plan dense housing near transit — Curitiba along its BRT axes, Singapore around MRT stations in HDB towns. However, Curitiba relied on cheap Bus Rapid Transit (from 1974) because it could not afford a metro, whereas wealthy Singapore built an expensive underground and elevated MRT network. Singapore also uses strong pricing and quotas to limit cars — ERP (1998) and COE (1990) — while Curitiba did not restrict car ownership, which has risen.",
            markScheme: [
              { point: "Similarity: both prioritise public transport / transit-oriented", keywords: ["both", "similar", "public transport", "transit"] },
              { point: "Curitiba: cheap BRT, 1974", keywords: ["brt", "bus rapid", "1974", "cheap"] },
              { point: "Singapore: MRT network", keywords: ["mrt", "metro", "rail", "train"] },
              { point: "Difference: Singapore restricts cars (ERP/COE), Curitiba does not", keywords: ["erp", "coe", "restrict", "pricing", "quota", "car ownership"] },
            ],
            commonError: "Writing two separate descriptions with no comparative words (both, whereas, however).",
            guideRef: "curitiba-brt-recycling",
          },
          {
            id: "sus-qa-p4-q07",
            question: "Explain why Vauban might not be a model that works everywhere.",
            marks: 3,
            hint: "Cost, culture, climate, population.",
            modelAnswer:
              "Vauban is small (about 5,500 people) and mostly middle-class, so its car-free lifestyle may not work for poorer or larger populations. Housing there is now expensive. It also depends on Germany's cool, sunny climate, strong environmental culture and an existing tram network — conditions not found in every city, for example in hot tropical cities or places without public transport funding.",
            markScheme: [
              { point: "Small scale / about 5,500 people", keywords: ["small", "5,500", "5500", "scale"] },
              { point: "Expensive / mostly middle-class", keywords: ["expensive", "middle-class", "middle class", "wealthy", "afford"] },
              { point: "Depends on local conditions (climate, culture, tram funding)", keywords: ["climate", "culture", "tram", "germany", "funding", "condition"] },
            ],
            commonError: "Listing Vauban's features without explaining limitations.",
            guideRef: "freiburg-vauban",
          },
          {
            id: "sus-qa-p4-q08",
            question: "Describe what Masdar City has achieved, despite missing its original targets.",
            marks: 3,
            hint: "Organisations, technology, design.",
            modelAnswer:
              "Masdar hosts the headquarters of IRENA, the International Renewable Energy Agency, a university and many clean-technology companies. Its narrow shaded streets and wind tower show that passive cooling can make streets several degrees cooler than the desert. It built an early 10 MW solar farm and acts as a testing ground for green building technologies used elsewhere.",
            markScheme: [
              { point: "Hosts IRENA / university / clean-tech firms", keywords: ["irena", "university", "institute", "companies", "clean-tech", "clean tech"] },
              { point: "Passive cooling success", keywords: ["cool", "shade", "wind tower", "narrow street"] },
              { point: "Solar farm / testing ground for green technology", keywords: ["solar", "10 mw", "test", "experiment", "laboratory"] },
            ],
            commonError: "Only listing Masdar's failures when the question asks for achievements.",
            guideRef: "masdar-city",
          },
          {
            id: "sus-qa-p4-q09",
            question: "Explain the difference between an ecological footprint and a carbon footprint.",
            marks: 4,
            hint: "What does each measure, and in what unit?",
            modelAnswer:
              "An ecological footprint measures the area of productive land and sea needed to supply all the resources a population uses and absorb its waste; it is measured in global hectares. A carbon footprint measures only the greenhouse gases produced, in tonnes of CO₂ equivalent. So the ecological footprint is broader — it includes food, timber and built-up land as well as the land needed to absorb carbon — whereas the carbon footprint focuses on climate impact.",
            markScheme: [
              { point: "Ecological footprint = land/sea area for resources and waste", keywords: ["land", "area", "resource", "sea"] },
              { point: "Measured in global hectares", keywords: ["global hectare", "gha", "hectare"] },
              { point: "Carbon footprint = greenhouse gases emitted, tonnes CO₂e", keywords: ["greenhouse", "co2", "tonnes", "carbon dioxide", "emission"] },
              { point: "Ecological footprint is broader / includes carbon", keywords: ["broader", "includes", "wider", "more than", "food", "part of"] },
            ],
            commonError: "Using the two terms as if they mean the same thing.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-qa-p4-q10",
            question: "Study the data on percentage of trips made by car: City A 2010: 55%, 2024: 40%; City B 2010: 30%, 2024: 35%. Describe the changes and suggest which city is becoming more sustainable.",
            marks: 3,
            hint: "Quote the figures and calculate the changes.",
            modelAnswer:
              "In City A, car trips fell by 15 percentage points, from 55% to 40%. In City B, car trips rose by 5 percentage points, from 30% to 35%. Although City B still has a lower share of car trips, City A is becoming more sustainable because it is moving in the right direction — more people are using public transport, walking or cycling.",
            markScheme: [
              { point: "City A fell 15 percentage points (55% → 40%)", keywords: ["15", "fell", "decreas", "55"] },
              { point: "City B rose 5 percentage points (30% → 35%)", keywords: ["5 percentage", "rose", "increas", "30% to 35%", "5%"] },
              { point: "Judgement: A improving though B still lower", keywords: ["city a", "improv", "direction", "trend", "still lower"] },
            ],
            commonError: "Saying City B is more sustainable just because its figure is lower, ignoring the trend.",
            guideRef: "measuring-sustainability",
          },
          {
            id: "sus-qa-p4-q11",
            question: "Describe an energy plan for your Eco City competition design in a tropical location like Singapore.",
            marks: 4,
            hint: "Generate clean energy AND reduce demand.",
            modelAnswer:
              "I would put solar panels on every rooftop and build floating solar on the reservoir (like Tengeh Reservoir in Singapore). A waste-to-energy plant downwind would turn non-recyclable rubbish into electricity. Buildings would be designed to need less energy: shaded windows, cross-ventilation, green roofs and light-coloured walls. A district cooling system, as in Tengah, would cool homes more efficiently than individual air-conditioners.",
            markScheme: [
              { point: "Rooftop / floating solar", keywords: ["solar", "rooftop", "floating", "panel"] },
              { point: "Other renewable / waste-to-energy", keywords: ["waste-to-energy", "waste to energy", "biogas", "biomass", "incinerat"] },
              { point: "Passive design to cut demand (shade, ventilation, green roofs)", keywords: ["shade", "ventilat", "green roof", "insulat", "passive", "reflect"] },
              { point: "Efficient cooling (district cooling) / smart meters", keywords: ["district cooling", "centralised cooling", "efficien", "smart", "led light"] },
            ],
            commonError: "Suggesting large wind farms or heating systems unsuited to Singapore's calm, hot climate.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-qa-p4-q12",
            question: "Describe a waste plan for your Eco City design.",
            marks: 3,
            hint: "Follow the waste hierarchy.",
            modelAnswer:
              "Following the waste hierarchy, I would reduce waste with a ban on single-use plastics and repair cafés to encourage reuse. Every block would have separate recycling chutes and food-waste composting, with a Curitiba-style scheme swapping recyclables for food or transport credits. Remaining waste would go to a waste-to-energy plant, with landfill used only for ash.",
            markScheme: [
              { point: "Reduce / reuse measures", keywords: ["reduce", "reuse", "single-use", "repair", "ban"] },
              { point: "Recycling / composting facilities or incentives", keywords: ["recycl", "compost", "chute", "green exchange", "incentive"] },
              { point: "Waste-to-energy / landfill last", keywords: ["waste-to-energy", "waste to energy", "incinerat", "landfill", "last resort"] },
            ],
            commonError: "Only writing 'lots of recycling bins'.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-qa-p4-q13",
            question: "Two Eco City designs are being judged. Design X: 60% green space, 2,000 homes, very high cost. Design Y: 35% green space, 5,000 affordable homes, moderate cost, tram line. Which design is more sustainable? Justify your answer.",
            marks: 4,
            hint: "Judge against all three pillars, not just green space.",
            modelAnswer:
              "Design X scores highly on the environmental pillar with 60% green space, but its very high cost and only 2,000 homes make it weak economically and socially. Design Y has less green space (35%) but provides 5,000 affordable homes — supporting the social pillar — at a moderate cost, and its tram line cuts car use and emissions. Overall, Design Y is more sustainable because it balances all three pillars, whereas X focuses mainly on the environment.",
            markScheme: [
              { point: "Recognises X's environmental strength (60% green space)", keywords: ["60%", "green space", "environment"] },
              { point: "Identifies X's weaknesses (cost, few homes)", keywords: ["expensive", "high cost", "2,000", "few homes", "fewer homes"] },
              { point: "Recognises Y's social/economic strengths (5,000 affordable homes, moderate cost, tram)", keywords: ["5,000", "affordable", "moderate", "tram"] },
              { point: "Justified conclusion based on balance of pillars", keywords: ["balance", "three pillars", "overall", "all three", "therefore"] },
            ],
            commonError: "Choosing X just because it has more green space.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-qa-p4-q14",
            question: "Explain how zoning can make an eco-city safer and healthier for residents.",
            marks: 3,
            hint: "Where you put things affects pollution, floods and travel.",
            modelAnswer:
              "Zoning keeps polluting industry downwind and away from homes, schools and water supplies, protecting air and water quality. Keeping floodplains as parks instead of housing reduces flood risk to residents. Mixed-use zones around transit let people walk and cycle, improving fitness and reducing traffic accidents and pollution.",
            markScheme: [
              { point: "Industry separated / downwind → cleaner air", keywords: ["industry", "downwind", "separat", "air quality", "away from"] },
              { point: "Floodplain kept free → less flood risk", keywords: ["flood", "floodplain", "wetland"] },
              { point: "Mixed-use → walking / cycling / health", keywords: ["mixed-use", "mixed use", "walk", "cycl", "health", "exercise"] },
            ],
            commonError: "Defining zoning without explaining its effects on safety or health.",
            guideRef: "designing-eco-city",
          },
          {
            id: "sus-qa-p4-q15",
            question: "Using Freiburg (Vauban) and at least one other city, evaluate which features are most important in making a city sustainable. (6 marks)",
            marks: 6,
            hint: "Pick 2–3 features, give evidence from named cities, compare their importance, conclude.",
            modelAnswer:
              "Transport is arguably the most important feature, because cars are a major source of emissions and congestion. In Vauban, car-free streets, a tram line opened in 2006 and expensive edge-of-district parking mean about 70% of households have no car; in Singapore, ERP (1998) and the COE quota (1990), backed by the MRT, keep traffic low despite rising wealth. Energy is also vital: Vauban's plus-energy solar houses generate more electricity than they use, cutting carbon emissions directly. However, housing affordability matters for the social pillar — Vauban's homes are now expensive, whereas about 77–80% of Singaporeans live in affordable HDB flats. Overall, transport is the most important single feature because it affects emissions, health and access to jobs together, but a city is only truly sustainable when transport, energy and affordable housing work together.",
            markScheme: [
              { point: "Identifies a key feature with reasoning (e.g. transport)", keywords: ["transport", "car", "emission", "public transit"] },
              { point: "Vauban evidence (70% car-free, tram 2006, plus-energy)", keywords: ["vauban", "70%", "tram", "plus-energy", "plus energy", "2006"] },
              { point: "Evidence from another named city", keywords: ["singapore", "curitiba", "erp", "coe", "brt", "hdb"] },
              { point: "Considers another feature (energy, housing, water)", keywords: ["energy", "solar", "housing", "afford", "water"] },
              { point: "Weighs up / compares importance", keywords: ["however", "whereas", "more important", "less important", "compared"] },
              { point: "Justified conclusion", keywords: ["overall", "conclusion", "therefore", "on balance", "together"] },
            ],
            commonError: "Describing features from each city without judging which matters most.",
            guideRef: "freiburg-vauban",
          },
        ],
      },
    ],
  },
};
