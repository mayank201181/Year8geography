// ---------------------------------------------------------------------------
// Topic registry: order, strand, icon and the fixed guide-section outline.
// Section ids here are the contract shared by guide authors (who must use
// them) and question / drill authors (whose guideRef must point at them).
// Pure data — safe to import from Node scripts.
//
// Source: Tanglin Trust School Middle School Curriculum Overview — Geography,
// Year 8 units: "8 Billion ++", "Extreme Environments", "Cracking Coasts",
// "Future Cities" (+ the Year 7 map/graph skills every unit relies on).
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** Year 9 / IGCSE look-ahead. */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Which Tanglin Year 8 unit / lesson questions this topic covers. */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = ["Skills", "Population", "Extreme Environments", "Coasts", "Cities"];

export const TOPIC_META: TopicMeta[] = [
  // ------------------------------- SKILLS ---------------------------------
  {
    id: "geo-skills",
    title: "The Geographer's Toolkit",
    strand: "Skills",
    icon: "🧭",
    curriculum: "Skills used in every Y8 unit (built on Y7 'Wonders of the World'): maps, grid references, scale, graphs, describing patterns",
    sections: [
      { id: "grid-references", heading: "Grid references & compass directions", covers: "8-point compass, 4-figure and 6-figure grid references (along the corridor, up the stairs), finding features on an OS-style map extract." },
      { id: "latitude-longitude", heading: "Latitude & longitude", covers: "Equator, Prime Meridian, tropics, Arctic/Antarctic circles, hemispheres, reading coordinates in degrees N/S/E/W, Singapore ≈ 1°N 104°E." },
      { id: "scale-distance", heading: "Scale & distance", covers: "Ratio scales (1:25 000, 1:50 000), line scales, measuring straight-line and winding distances, converting cm on map to km." },
      { id: "graphs-and-charts", heading: "Reading graphs & charts", covers: "Bar, line, pie, scatter, choropleth and proportional-symbol maps; reading values, range, totals, percentages, change and rate of change." },
      { id: "describing-patterns", heading: "Describing patterns & using data", covers: "TEA (Trend, Evidence, Anomaly) for graphs, describing distributions on maps (clustered, linear, sparse, CLOCC: continents, lines of latitude, oceans, countries, compass), primary vs secondary data, command words (describe, explain, suggest, evaluate)." },
    ],
  },
  // ----------------------------- POPULATION -------------------------------
  {
    id: "population-distribution",
    title: "Where Do People Live?",
    strand: "Population",
    icon: "🌏",
    curriculum: "8 Billion ++ — What factors affect where we live?",
    sections: [
      { id: "world-distribution", heading: "How people are spread around the world", covers: "Uneven world population distribution, densely vs sparsely populated regions, Asia ≈ 59% of people, describing a distribution map with evidence." },
      { id: "population-density", heading: "Population density", covers: "Density = population ÷ area (people per km²); worked calculations; comparing Singapore, Bangladesh, Australia, Mongolia; choropleth maps." },
      { id: "physical-factors", heading: "Physical factors", covers: "Relief, climate, water supply, soil fertility, natural resources, natural hazards — positive vs negative factors with examples (Nile valley, Sahara, Himalayas, Amazon)." },
      { id: "human-factors", heading: "Human factors", covers: "Jobs, transport links, services, political stability, history of settlement, government planning (e.g. Singapore HDB new towns)." },
      { id: "explaining-distribution", heading: "Explaining a distribution", covers: "Combining physical and human factors at global, national (Australia, Egypt, Brazil) and local scales; why factors change in importance with technology." },
    ],
  },
  {
    id: "population-growth",
    title: "How Has the World's Population Grown?",
    strand: "Population",
    icon: "📈",
    curriculum: "8 Billion ++ — How has the world's population grown?",
    sections: [
      { id: "growth-over-time", heading: "From 1 billion to 8 billion", covers: "Milestones (1 billion ≈ 1804, 2 billion 1927, 8 billion Nov 2022), the J-curve, shrinking doubling times, why growth exploded (farming, sanitation, medicine)." },
      { id: "birth-death-rates", heading: "Birth rates, death rates & natural increase", covers: "Birth and death rates per 1000 per year, natural increase/decrease, rate of natural increase (%) = (BR − DR) ÷ 10, total fertility rate, life expectancy, infant mortality." },
      { id: "demographic-transition", heading: "The Demographic Transition Model", covers: "Five stages, birth/death rate lines and total population, example countries for each stage (e.g. Niger, Bangladesh/India, UK, Japan), limitations of the model." },
      { id: "future-population", heading: "Future population", covers: "UN projections (peak around 10.3 billion in the 2080s), regional differences (sub-Saharan Africa growing; Europe, East Asia shrinking), uncertainty in projections." },
    ],
  },
  {
    id: "demography",
    title: "Studying Demography",
    strand: "Population",
    icon: "🧮",
    curriculum: "8 Billion ++ — How do we study demography? What does our class census tell us?",
    sections: [
      { id: "what-is-demography", heading: "What is demography?", covers: "Demography and demographers, what a census is and why governments run one (Singapore Census every 10 years, 2020), census vs survey vs sampling, limitations of data." },
      { id: "class-census", heading: "Running a class census", covers: "Designing questions, primary data collection, tallying and tabulating, ethics/privacy, turning results into charts, what a small sample can and can't tell us." },
      { id: "population-pyramids", heading: "Population pyramids", covers: "Reading age-sex pyramids (5-year cohorts, % or millions), shapes for youthful/ageing populations (Niger vs Japan vs Singapore), bulges and notches and their causes." },
      { id: "dependency-ratio", heading: "Dependency & the age structure", covers: "Young (0–14), working age (15–64), elderly (65+), dependency ratio = (young + elderly) ÷ working-age × 100, interpreting what a high ratio means." },
    ],
  },
  {
    id: "population-change",
    title: "How and Why Do Populations Change?",
    strand: "Population",
    icon: "🔄",
    curriculum: "8 Billion ++ — How and why do populations change? How significant are the factors involved in population change?",
    sections: [
      { id: "birth-rate-factors", heading: "Why birth rates rise and fall", covers: "Education and empowerment of women, contraception, cost of raising children, urbanisation, infant mortality, religion/culture, pensions, government policy." },
      { id: "death-rate-factors", heading: "Why death rates rise and fall", covers: "Healthcare and vaccination, clean water and sanitation, food supply, conflict, disease/pandemics, rising life expectancy." },
      { id: "migration", heading: "Migration", covers: "Immigration, emigration, net migration; push and pull factors; voluntary vs forced; economic migrants, refugees, internal vs international; Singapore's foreign workforce." },
      { id: "significance-of-factors", heading: "Weighing up the factors", covers: "Which factors matter most where and when; evaluating significance with evidence (e.g. Singapore's TFR around 1.0 and reliance on immigration; Niger's high TFR); reaching a supported judgement." },
    ],
  },
  {
    id: "population-problems",
    title: "Over-population, Under-population & Policies",
    strand: "Population",
    icon: "⚖️",
    curriculum: "8 Billion ++ — Over and under population; How do countries solve their population problems? China's OCP debate",
    sections: [
      { id: "over-under-population", heading: "Over-, under- and optimum population", covers: "Population vs resources and technology, carrying capacity, optimum population, why 'over-population' is debated (consumption vs numbers), examples." },
      { id: "ageing-youthful", heading: "Ageing and youthful populations", covers: "Problems and opportunities of ageing populations (Japan, Singapore) and youthful populations (Niger, Nigeria): pensions, healthcare, workforce, schools, jobs." },
      { id: "population-policies", heading: "Population policies", covers: "Pro-natalist (Singapore Baby Bonus, France), anti-natalist (China, India's past campaigns), immigration policies; how and why they succeed or fail." },
      { id: "china-one-child", heading: "China's One-Child Policy debate", covers: "OCP 1979–2015 (announced 1979, nationwide 1980), how it worked (incentives/penalties, exceptions), effects (slower growth, gender imbalance, 4-2-1 problem, ageing), two-child (2016) and three-child (2021) policies, arguments for and against." },
    ],
  },
  // ------------------------- EXTREME ENVIRONMENTS -------------------------
  {
    id: "extreme-climates",
    title: "Extreme Environments & Their Climates",
    strand: "Extreme Environments",
    icon: "🏜️",
    curriculum: "Extreme Environments — Introduction; Climate of extreme environments",
    sections: [
      { id: "what-is-extreme", heading: "What makes an environment extreme?", covers: "Definition, types (hot desert, polar, high mountain, also rainforest/volcanic), where they are on a world map, why they matter." },
      { id: "hot-desert-climate", heading: "Hot desert climates", covers: "Location 15–30° N/S, sinking air and high pressure, rainfall under 250 mm a year, large daily (diurnal) temperature range, examples (Sahara, Atacama, Arabian)." },
      { id: "polar-climate", heading: "Polar climates", covers: "Why poles are cold (low sun angle, spread-out energy, albedo of ice), polar day/night, polar deserts, Arctic vs Antarctica." },
      { id: "mountain-climate", heading: "Mountain climates", covers: "Temperature falls about 6.5 °C per 1000 m, thin air, relief rainfall vs rain shadow, aspect, examples (Himalayas, Andes)." },
      { id: "climate-graphs", heading: "Climate graphs", covers: "Reading and drawing climate graphs (rainfall bars, temperature line), annual range, total rainfall, comparing places, describing climate with figures." },
    ],
  },
  {
    id: "extreme-weather",
    title: "Extreme Weather & Forecasting",
    strand: "Extreme Environments",
    icon: "🌪️",
    curriculum: "Extreme Environments — Extreme Weather; Forecasting",
    sections: [
      { id: "types-of-extreme-weather", heading: "Types of extreme weather", covers: "Tropical storms, droughts, heatwaves, blizzards, sandstorms, flash floods, tornadoes; where and why they happen; Singapore's monsoons and Sumatra squalls." },
      { id: "tropical-storms", heading: "Tropical storms", covers: "Formation (sea above 26.5 °C, 5–30° from equator, low wind shear, Coriolis), structure (eye, eyewall, rain bands), names by region, Saffir–Simpson scale, impacts." },
      { id: "measuring-weather", heading: "Measuring the weather", covers: "Thermometer, rain gauge, barometer, anemometer, wind vane, hygrometer, Stevenson screen, satellites and radar; recording and averaging data." },
      { id: "forecasting", heading: "Forecasting & warnings", covers: "Weather maps, isobars, high vs low pressure, fronts and symbols, computer models, why forecasts get less certain further ahead, warnings that save lives (prediction, protection, preparation)." },
    ],
  },
  {
    id: "adaptations",
    title: "Plant & Animal Adaptations",
    strand: "Extreme Environments",
    icon: "🐪",
    curriculum: "Extreme Environments — Plant and animal adaptations",
    sections: [
      { id: "what-is-adaptation", heading: "What is an adaptation?", covers: "Structural, behavioural and physiological adaptations; adaptation linked to a specific challenge (heat, cold, drought, low oxygen); explaining how a feature helps survival." },
      { id: "desert-adaptations", heading: "Surviving the desert", covers: "Cacti (spines, waxy skin, swollen stems, wide shallow and deep tap roots), camels, fennec fox, kangaroo rat, desert plants' short life cycles." },
      { id: "polar-adaptations", heading: "Surviving the cold", covers: "Polar bear, emperor penguin (huddling), Arctic fox, seals and blubber, tundra plants (low-growing, short growing season), food chains with krill." },
      { id: "mountain-adaptations", heading: "Surviving high altitude", covers: "Yak, snow leopard, alpine plants, how people adapt to thin air (acclimatisation; Sherpa and Andean peoples), altitude sickness." },
    ],
  },
  {
    id: "living-in-extremes",
    title: "Living & Travelling in Extreme Environments",
    strand: "Extreme Environments",
    icon: "🧗",
    curriculum: "Extreme Environments — Difficulties living in an extreme environment; Tourism; Positive Tourism (Antarctica); Expedition to an extreme environment",
    sections: [
      { id: "difficulties-of-living", heading: "Difficulties of living in extreme places", covers: "Water, food, temperature, isolation, building on permafrost or sand, health; how indigenous peoples (Inuit, Bedouin/Tuareg, Sherpa) and modern technology (desalination, air-conditioning) respond." },
      { id: "extreme-tourism", heading: "Tourism in extreme environments", covers: "Why people visit (Everest, Sahara, Arctic), economic, social and environmental impacts — positive and negative, carrying capacity, litter on Everest." },
      { id: "antarctica-tourism", heading: "Positive tourism in Antarctica", covers: "Antarctic Treaty (1959), IAATO guidelines (e.g. no more than 100 visitors ashore at once, large ships may not land passengers, biosecurity), 'ambassador' effect, is it sustainable?" },
      { id: "planning-an-expedition", heading: "Planning an expedition", covers: "Choosing a route and season, kit and clothing layers, risk assessment, food and water, navigation and communication, Leave No Trace." },
    ],
  },
  // ------------------------------- COASTS ---------------------------------
  {
    id: "coastal-erosion",
    title: "Waves, Weathering & Erosion",
    strand: "Coasts",
    icon: "🌊",
    curriculum: "Cracking Coasts — Introduction to Coasts; Weathering and Erosion",
    sections: [
      { id: "intro-to-coasts", heading: "What is a coast?", covers: "The coastal zone, inputs/processes/outputs, why coasts matter (people, trade, tourism, Singapore's coastline and land reclamation)." },
      { id: "waves", heading: "Waves", covers: "How wind makes waves, fetch, swash and backwash, constructive vs destructive waves, prevailing wind." },
      { id: "weathering", heading: "Weathering", covers: "Mechanical (freeze–thaw, salt crystallisation), chemical (carbonation/solution of limestone), biological; weathering vs erosion." },
      { id: "erosion-processes", heading: "Coastal erosion processes", covers: "Hydraulic action, abrasion, attrition, solution (corrosion); factors affecting rate of erosion (rock type, wave energy, fetch)." },
      { id: "mass-movement", heading: "Mass movement", covers: "Rockfall, slumping (rotational slip), sliding; why saturated cliffs fail; example of cliff collapse." },
    ],
  },
  {
    id: "coastal-landforms",
    title: "Coastal Processes & Landforms",
    strand: "Coasts",
    icon: "🏖️",
    curriculum: "Cracking Coasts — Coastal Processes and Landforms",
    sections: [
      { id: "headlands-bays", heading: "Headlands and bays", covers: "Discordant vs concordant coastlines, differential erosion of hard and soft rock, example (Swanage Bay / Studland, Dorset)." },
      { id: "cave-arch-stack", heading: "Cliffs, caves, arches, stacks & stumps", covers: "Wave-cut notch and wave-cut platform, the crack → cave → arch → stack → stump sequence, Old Harry Rocks, Durdle Door." },
      { id: "longshore-drift", heading: "Transportation & longshore drift", covers: "Traction, saltation, suspension, solution; longshore drift with angled swash and straight backwash; direction of prevailing wind." },
      { id: "depositional-landforms", heading: "Depositional landforms", covers: "Why deposition happens, beaches, spits (Spurn Head; hooked end, salt marsh), bars, tombolos (Chesil Beach)." },
      { id: "coastal-management", heading: "Managing the coast", covers: "Hard engineering (sea wall, groynes, rock armour, gabions) vs soft engineering (beach nourishment, dune regeneration, managed retreat), costs and benefits, Singapore's coastal protection and sea-level rise." },
    ],
  },
  {
    id: "coral-reefs",
    title: "Coral Reefs & Their Threats",
    strand: "Coasts",
    icon: "🪸",
    curriculum: "Cracking Coasts — Coral Reefs; Threats to Coral Reefs",
    sections: [
      { id: "what-are-reefs", heading: "What is a coral reef?", covers: "Coral polyps, zooxanthellae (symbiotic algae), calcium carbonate skeletons, fringing reefs, barrier reefs and atolls." },
      { id: "where-reefs-grow", heading: "Where coral reefs grow", covers: "Conditions: warm (about 18–29 °C), shallow, clear, salty, sunlit water; distribution roughly 30°N–30°S, the Coral Triangle, Singapore's reefs." },
      { id: "value-of-reefs", heading: "Why reefs matter", covers: "Biodiversity (about a quarter of marine species on under 1% of the sea floor), food webs, coastal protection, tourism, fishing, medicine." },
      { id: "coral-bleaching", heading: "Coral bleaching & climate change", covers: "Marine heatwaves, polyps expelling algae, recovery vs death, mass bleaching events on the Great Barrier Reef (2016, 2017, 2020, 2022, 2024), ocean acidification." },
      { id: "local-threats", heading: "Local threats", covers: "Overfishing and blast fishing, sediment and farm run-off, sewage, crown-of-thorns starfish outbreaks, careless tourism, coastal development and land reclamation; natural vs human threats." },
    ],
  },
  {
    id: "protecting-reefs",
    title: "Protecting Coral Reefs: The Great Barrier Reef",
    strand: "Coasts",
    icon: "🐠",
    curriculum: "Cracking Coasts — Protecting Coral Reefs (GBR)",
    sections: [
      { id: "gbr-facts", heading: "The Great Barrier Reef", covers: "Location (Queensland, Australia), size (about 2,300 km, roughly 2,900 reefs), World Heritage Site (1981), value to Australia's economy and jobs, stakeholders." },
      { id: "management-strategies", heading: "How the reef is managed", covers: "Great Barrier Reef Marine Park (1975) and zoning (green no-take zones ~33% since 2004), crown-of-thorns control, water-quality rules for farms, tourism permits, Reef 2050 Plan, coral restoration." },
      { id: "evaluating-management", heading: "Is it working?", covers: "Evidence for and against success, local vs global threats, why climate change limits local management, sustainability, making a supported judgement." },
      { id: "protecting-reefs-elsewhere", heading: "Protecting reefs closer to home", covers: "Singapore's Sisters' Islands Marine Park, coral nurseries and transplanting, what individuals can do (reef-safe behaviour, sustainable seafood choices for others, cutting emissions)." },
    ],
  },
  // ------------------------------- CITIES ---------------------------------
  {
    id: "cities-megacities",
    title: "Cities & Megacities",
    strand: "Cities",
    icon: "🏙️",
    curriculum: "Future Cities — What is a City? Characteristics of a city (good/bad); What is a megacity?",
    sections: [
      { id: "what-is-a-city", heading: "What is a city?", covers: "Settlement hierarchy (hamlet → megacity), urban vs rural, definitions of a city, urbanisation (about 57% of people live in urban areas)." },
      { id: "characteristics-of-cities", heading: "The good and bad of city life", covers: "Opportunities (jobs, services, culture) and challenges (congestion, pollution, housing costs, inequality); land-use zones (CBD, inner city, suburbs, rural–urban fringe)." },
      { id: "megacities", heading: "Megacities", covers: "10 million+ people, how many there are and where (most in Asia), Tokyo, Delhi, Shanghai, Dhaka, Cairo; fast growth in lower-income countries." },
      { id: "causes-of-urbanisation", heading: "Why cities grow", covers: "Rural–urban migration (push and pull factors) plus natural increase of young migrants; urbanisation rates in HICs vs LICs/NEEs; counter-urbanisation." },
    ],
  },
  {
    id: "lagos",
    title: "Lagos: A Growing Megacity",
    strand: "Cities",
    icon: "🌆",
    curriculum: "Future Cities — Lagos: push/pull + problems; Lagos speech (optional)",
    sections: [
      { id: "lagos-location-growth", heading: "Where Lagos is and how it grew", covers: "Location (south-west Nigeria, Gulf of Guinea, lagoon), Nigeria as an NEE, rapid growth (population estimates vary widely, roughly 15–20+ million), importance (port, finance, Nollywood)." },
      { id: "push-pull", heading: "Push and pull factors", covers: "Push from rural Nigeria (poverty, conflict in the north, drought, few services); pull of Lagos (jobs, schools, healthcare, bright lights); natural increase." },
      { id: "lagos-challenges", heading: "Challenges in Lagos", covers: "Informal settlements (Makoko), traffic congestion ('go-slow'), waste (Olusosun dump), water and electricity shortages, informal economy, flooding." },
      { id: "lagos-solutions", heading: "Improving life in Lagos", covers: "BRT buses, Lagos Rail Mass Transit (Blue Line 2023, Red Line 2024), Eko Atlantic (and who benefits), waste recycling schemes, community-led upgrading; evaluating solutions." },
    ],
  },
  {
    id: "sustainable-cities",
    title: "Sustainable Cities of the Future",
    strand: "Cities",
    icon: "🌱",
    curriculum: "Future Cities — Las Vegas (optional); Sustainable Success; Inter-class Eco city competition",
    sections: [
      { id: "what-is-sustainable", heading: "What makes a city sustainable?", covers: "Sustainable development (meeting today's needs without harming future generations), social, economic and environmental pillars, ecological footprint." },
      { id: "singapore-success", heading: "Sustainable success: Singapore", covers: "Four National Taps (local catchment, imported water, NEWater, desalination), public transport and road pricing (ERP), HDB housing, City in Nature and park connectors, Singapore Green Plan 2030, Tengah eco-town." },
      { id: "las-vegas", heading: "A city in the desert: Las Vegas", covers: "Rapid growth in the Mojave Desert, reliance on Lake Mead and the Colorado River, drought, water-saving measures (turf removal, recycling), is it sustainable?" },
      { id: "eco-city-design", heading: "Designing an eco-city", covers: "Transport, energy, water, waste, housing, green space, community; examples (Curitiba, Copenhagen, Freiburg/Vauban, Masdar); criteria for judging a design; the eco-city competition." },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
