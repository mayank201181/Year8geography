// Skill drills for "Where Do People Live?" (population-distribution).
// Retrieval fact banks + numeric density / percentage generators.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { big, num, roundTo } from "./helpers.ts";

const T = "population-distribution";

// ---------------------------------------------------------------------------
// Fact-bank machinery
// ---------------------------------------------------------------------------

interface Fact {
  q: string;
  a: string[];
  /** 1 = core, 2 = typical, 3 = stretch. */
  lvl: 1 | 2 | 3;
  why: string;
  trap?: { a: string[]; fb: string };
}

/** tier 1 → level 1–2 facts, tier 2 → all, tier 3 → level 2–3 facts. */
function pool<F extends { lvl: 1 | 2 | 3 }>(bank: readonly F[], tier: 1 | 2 | 3): F[] {
  if (tier === 1) return bank.filter((f) => f.lvl <= 2);
  if (tier === 3) return bank.filter((f) => f.lvl >= 2);
  return [...bank];
}

function factItem(rng: Rng, tier: 1 | 2 | 3, bank: readonly Fact[], frames: readonly string[], hint: string): DrillItem {
  const f = rng.pick(pool(bank, tier));
  const traps: Trap[] = f.trap ? [{ spec: { type: "text", accept: f.trap.a }, feedback: f.trap.fb }] : [];
  return {
    prompt: rng.pick(frames) + f.q,
    answer: { type: "text", accept: f.a },
    solution: [`**${f.a[0]}**`, f.why],
    hint,
    traps,
  };
}

// ---------------------------------------------------------------------------
// Banks
// ---------------------------------------------------------------------------

const KEY_TERMS: Fact[] = [
  { lvl: 1, q: "Give the term for the way people are spread out across an area.", a: ["population distribution", "distribution"], why: "Distribution describes the *pattern* — where people are and where they are not.", trap: { a: ["population density", "density"], fb: "Density is a number (people per km²). The *pattern* of where people live is the distribution." } },
  { lvl: 1, q: "Give the term for the average number of people living in each square kilometre.", a: ["population density", "density"], why: "Population density = population ÷ area, measured in people per km².", trap: { a: ["population distribution", "distribution"], fb: "Distribution is the pattern on a map. The *number* of people per km² is density." } },
  { lvl: 1, q: "Give the term for an area with many people per km², such as Singapore or the Ganges valley.", a: ["densely populated", "dense", "densely-populated", "high density"], why: "Densely populated areas have a high population density.", trap: { a: ["sparsely populated", "sparse"], fb: "Sparse means few people. Lots of people per km² is *densely* populated." } },
  { lvl: 1, q: "Give the term for an area with few people per km², such as the Sahara or Mongolia.", a: ["sparsely populated", "sparse", "sparsely-populated", "low density"], why: "Sparsely populated areas have a low population density.", trap: { a: ["densely populated", "dense"], fb: "Dense means crowded. Few people per km² is *sparsely* populated." } },
  { lvl: 1, q: "Name the type of map that shades areas in darker colours where values (such as population density) are higher.", a: ["choropleth map", "choropleth", "choropleth maps"], why: "A choropleth map uses graded shading — the darker the shade, the higher the value.", trap: { a: ["dot map"], fb: "A dot map uses dots for a fixed number of people. Graded *shading* is a choropleth map." } },
  { lvl: 1, q: "Name the type of map where each dot stands for a fixed number of people.", a: ["dot map", "dot distribution map", "dot maps"], why: "On a dot map, clusters of dots show where many people live.", trap: { a: ["choropleth map", "choropleth"], fb: "A choropleth uses shaded areas. Dots that each represent a number of people make a dot map." } },
  { lvl: 1, q: "Give the term for natural features, such as relief, climate and soil, that affect where people live.", a: ["physical factors", "physical factor", "physical"], why: "Physical factors come from the natural environment.", trap: { a: ["human factors", "human factor", "human"], fb: "Human factors are made by people (jobs, transport). Relief, climate and soil are natural — physical factors." } },
  { lvl: 1, q: "Give the term for factors made by people, such as jobs, transport and services, that affect where people live.", a: ["human factors", "human factor", "human", "socio-economic factors"], why: "Human factors come from people's activities — the economy, government and history.", trap: { a: ["physical factors", "physical factor", "physical"], fb: "Physical factors are natural. Jobs, transport and services are made by people — human factors." } },
  { lvl: 1, q: "Give the term for the height and shape of the land, for example flat plains or steep mountains.", a: ["relief", "topography"], why: "Relief describes how high and how steep the land is." },
  { lvl: 1, q: "Give the term for a place where people live, from a hamlet to a megacity.", a: ["settlement", "settlements"], why: "A settlement is any place where people live." },
  { lvl: 1, q: "Give the term for useful materials found in nature, such as coal, oil, gold and timber.", a: ["natural resources", "resources", "raw materials"], why: "Natural resources can attract people because they create jobs (mining, forestry)." },
  { lvl: 2, q: "Give the term for a natural event, such as an earthquake, flood or volcanic eruption, that threatens people.", a: ["natural hazard", "hazard", "natural hazards"], why: "Areas at high risk of hazards can put people off settling there." },
  { lvl: 2, q: "Give the term for supplying water to crops through channels, pipes or sprinklers.", a: ["irrigation"], why: "Irrigation lets people farm — and so live — in dry places such as the Nile valley." },
  { lvl: 2, q: "Give the term for a fertile spot in a desert where underground water reaches the surface.", a: ["oasis", "oases"], why: "Oases are tiny islands of settlement in otherwise empty deserts." },
  { lvl: 2, q: "Give the term for the flat land beside a river that is covered with water when the river floods.", a: ["floodplain", "flood plain", "floodplains"], why: "Floods leave fertile silt on floodplains, so they often attract farmers." },
  { lvl: 2, q: "Give the term for the flat, often triangular area of silt that builds up where a river meets the sea.", a: ["delta", "river delta"], why: "Deltas such as the Ganges–Brahmaputra and the Nile are flat and fertile, so they are densely populated." },
  { lvl: 2, q: "Give the term for a city with more than 10 million people.", a: ["megacity", "mega city", "megacities"], why: "Megacities such as Tokyo, Delhi and Shanghai are the densest clusters on a world population map." },
  { lvl: 2, q: "Give the term for areas in towns and cities (as opposed to the countryside).", a: ["urban", "urban areas", "urban area"], why: "About 57% of the world's people lived in urban areas in 2023.", trap: { a: ["rural"], fb: "Rural means the countryside. Towns and cities are urban." } },
  { lvl: 2, q: "Give the term for areas in the countryside (as opposed to towns and cities).", a: ["rural", "rural areas", "rural area"], why: "Rural areas usually have lower population densities than urban areas.", trap: { a: ["urban"], fb: "Urban means towns and cities. The countryside is rural." } },
  { lvl: 2, q: "Give the term for the official count of every person in a country, held in Singapore every 10 years.", a: ["census", "population census"], why: "Censuses give the population figures used to work out density." },
  { lvl: 3, q: "Give the term for rock and soil in places like northern Siberia that stays frozen all year round.", a: ["permafrost"], why: "Permafrost makes building and farming very difficult, so these areas are sparsely populated." },
  { lvl: 3, q: "Give the term for a layer of underground rock that stores water which can be pumped up by wells.", a: ["aquifer", "aquifers"], why: "Aquifers let towns exist in dry places, such as parts of inland Australia." },
  { lvl: 3, q: "Give the term for removing salt from seawater to make drinking water.", a: ["desalination"], why: "Desalination helps cities such as Dubai — and Singapore's Fourth National Tap — overcome a shortage of fresh water." },
  { lvl: 3, q: "Give the term for the fine, fertile silt deposited by rivers.", a: ["alluvium", "alluvial soil", "silt", "alluvial silt"], why: "Alluvium makes river valleys and deltas excellent for farming." },
  { lvl: 3, q: "Give the term for building new land by filling in shallow sea, as Singapore has done along its coast.", a: ["land reclamation", "reclamation"], why: "Singapore has grown from about 580 km² in the 1960s to about 735 km² today, largely through land reclamation." },
  { lvl: 3, q: "Give the term for a large urban area formed when several towns or cities grow and merge together.", a: ["conurbation", "conurbations"], why: "Conurbations such as the West Midlands show up as large dense patches on a population map." },
];

const WORLD_PLACES: Fact[] = [
  { lvl: 1, q: "Which continent is home to about 59% of the world's people?", a: ["Asia"], why: "Asia has about 4.8 billion of the world's roughly 8 billion people.", trap: { a: ["Africa"], fb: "Africa is second (about 1.5 billion). Asia has far more — about 59% of everyone." } },
  { lvl: 1, q: "Which continent has no permanent population at all?", a: ["Antarctica"], why: "Antarctica is covered by an ice sheet; only scientists and support staff stay there, for months at a time." },
  { lvl: 1, q: "Which country overtook China in 2023 to become the most populous in the world (UN estimate)?", a: ["India"], why: "Both have about 1.4 billion people; India passed China in 2023.", trap: { a: ["China"], fb: "China was the most populous for decades, but India overtook it in 2023." } },
  { lvl: 1, q: "Which huge hot desert covers much of North Africa and is very sparsely populated?", a: ["Sahara", "Sahara Desert"], why: "Under 250 mm of rain a year and extreme heat make most of the Sahara almost empty." },
  { lvl: 1, q: "Which city-state in South-East Asia has about 8,000 people per km²?", a: ["Singapore"], why: "About 6 million people on about 735 km² gives roughly 8,000 people per km²." },
  { lvl: 1, q: "Which is the most populous country in Africa?", a: ["Nigeria"], why: "Nigeria has over 200 million people — more than any other African country." },
  { lvl: 1, q: "Which continent has the second-largest population, after Asia?", a: ["Africa"], why: "Africa has about 1.5 billion people and is growing faster than any other continent.", trap: { a: ["Europe"], fb: "Europe has about 750 million people — Africa has about twice as many." } },
  { lvl: 1, q: "In which hemisphere — Northern or Southern — do nearly 90% of the world's people live?", a: ["Northern", "Northern Hemisphere", "north"], why: "Most of the world's land, including Asia, Europe and North America, is north of the equator.", trap: { a: ["Southern", "Southern Hemisphere", "south"], fb: "The Southern Hemisphere is mostly ocean. Most land — and people — are in the north." } },
  { lvl: 1, q: "Which mountain range, home to Mount Everest, is very sparsely populated at high altitude?", a: ["Himalayas", "Himalaya", "the Himalayas"], why: "Steep slopes, thin air and cold make the high Himalayas hard to live in." },
  { lvl: 1, q: "Which South Asian river-delta country has about 170 million people packed into a small area?", a: ["Bangladesh"], why: "Bangladesh is one of the most densely populated large countries — flat, fertile delta land supports many farmers." },
  { lvl: 1, q: "Which is the most populous country in South America?", a: ["Brazil"], why: "Brazil has over 200 million people, mostly near the Atlantic coast." },
  { lvl: 2, q: "Which Asian country, between China and Russia, has only about 2 people per km² — one of the lowest densities in the world?", a: ["Mongolia"], why: "Mongolia's cold, dry steppe and desert climate supports few people outside the capital, Ulaanbaatar." },
  { lvl: 2, q: "Which country — the largest in the world by area — has most of its people in the west, nearest Europe?", a: ["Russia", "Russian Federation"], why: "Siberia, in the east, is cold with permafrost, so most Russians live in the milder west." },
  { lvl: 2, q: "Which island, part of Denmark's kingdom, is mostly covered by an ice sheet and has only about 57,000 people?", a: ["Greenland"], why: "Ice covers about four-fifths of Greenland, so people live on the narrow ice-free coast." },
  { lvl: 2, q: "Which Indonesian island holds over half of Indonesia's people?", a: ["Java"], why: "Java's fertile volcanic soils, rice farming and big cities such as Jakarta make it one of the most crowded islands on Earth." },
  { lvl: 2, q: "Which huge river plain in northern India and Bangladesh is one of the most densely populated farming regions on Earth?", a: ["Ganges", "Ganges plain", "Ganga", "Indo-Gangetic plain", "Ganges valley", "Gangetic plain"], why: "Flat land, fertile alluvial soil and plentiful water support hundreds of millions of people." },
  { lvl: 2, q: "Which South American rainforest is very sparsely populated across most of its area?", a: ["Amazon", "Amazon rainforest", "Amazonia"], why: "Dense forest, poor soils, heavy rain and few roads make the interior hard to settle." },
  { lvl: 2, q: "Most Canadians live within about 160 km of the border with which country?", a: ["United States", "USA", "US", "United States of America", "America", "the USA"], why: "The south of Canada is warmer, flatter and better connected than the frozen north." },
  { lvl: 2, q: "Which continent has the north-east USA megalopolis — Boston to Washington DC — as one of its densest areas?", a: ["North America"], why: "The Boston–New York–Washington corridor is one of the world's great urban clusters." },
  { lvl: 3, q: "Which Chinese river delta, with Guangzhou and Shenzhen, is one of the densest urban regions in the world?", a: ["Pearl River Delta", "Pearl River", "Pearl"], why: "Factories, ports and jobs pulled tens of millions of people to the Pearl River Delta after 1980." },
  { lvl: 3, q: "Which flat region of China, crossed by the Yellow River, supports hundreds of millions of people?", a: ["North China Plain", "Yellow River plain", "Huabei Plain"], why: "Flat land, fertile alluvial soil and irrigation make it one of China's core farming regions." },
  { lvl: 3, q: "Which very cold region of Russia, east of the Ural Mountains, has vast areas with almost no people?", a: ["Siberia"], why: "Long freezing winters and permafrost make Siberia one of the emptiest regions of the Northern Hemisphere." },
  { lvl: 3, q: "Which country's interior, called the Outback, is very sparsely populated?", a: ["Australia"], why: "The Outback is hot and dry; most Australians live on the cooler, wetter south-east and east coasts." },
  { lvl: 3, q: "Which island country in East Asia has most people on narrow coastal plains because about three-quarters of the land is mountainous?", a: ["Japan"], why: "Tokyo, Osaka and Nagoya sit on the few flat coastal plains." },
  { lvl: 3, q: "Which European country, about a quarter of whose land lies below sea level, is one of the most densely populated in Europe?", a: ["Netherlands", "the Netherlands", "Holland"], why: "Flat land, good transport and a strong economy support over 500 people per km²." },
];

const PHYSICAL: { d: string; cat: string; lvl: 1 | 2 | 3; plus: boolean }[] = [
  { lvl: 1, cat: "relief", plus: false, d: "The high Himalayas have steep slopes and thin air, so it is hard to build homes, roads or farms." },
  { lvl: 1, cat: "relief", plus: true, d: "Flat lowland plains make it easy to build cities, lay railways and farm with machines." },
  { lvl: 2, cat: "relief", plus: true, d: "In the Swiss Alps, villages cluster on flat valley floors while the steep slopes above stay almost empty." },
  { lvl: 3, cat: "relief", plus: false, d: "In Nepal, terraces must be cut into hillsides before crops can be grown, which limits how many people the land can feed." },
  { lvl: 1, cat: "climate", plus: false, d: "Antarctica's temperatures stay far below 0 °C for most of the year, so almost nobody lives there permanently." },
  { lvl: 2, cat: "climate", plus: true, d: "Western Europe's mild temperatures and long growing season help farming and support many people." },
  { lvl: 2, cat: "climate", plus: false, d: "Northern Canada's long, dark, freezing winters keep its population very small." },
  { lvl: 3, cat: "climate", plus: false, d: "In the Sahara, summer daytime temperatures often pass 40 °C, making outdoor work exhausting and dangerous." },
  { lvl: 1, cat: "water supply", plus: true, d: "Settlements in the Sahara grow up at oases, where underground water reaches the surface." },
  { lvl: 1, cat: "water supply", plus: true, d: "Early villages were often built beside a spring or river so people could collect fresh drinking water." },
  { lvl: 2, cat: "water supply", plus: true, d: "In dry inland Australia, farms and towns depend on wells drilled into underground aquifers." },
  { lvl: 3, cat: "water supply", plus: false, d: "A desert town cannot grow any larger because its only well is already pumping out all the fresh water it can." },
  { lvl: 1, cat: "soil", plus: true, d: "Fertile soil made from weathered volcanic ash lets farmers on Java grow rich harvests of rice." },
  { lvl: 2, cat: "soil", plus: false, d: "Thin, nutrient-poor soils in much of the Amazon lose their fertility within a few years of the forest being cleared." },
  { lvl: 2, cat: "soil", plus: true, d: "Each year the Nile flood used to leave a fresh layer of fertile black silt on the fields, keeping crops productive." },
  { lvl: 3, cat: "soil", plus: true, d: "Ukraine's deep, dark chernozem (\"black earth\") is among the most fertile farmland in the world." },
  { lvl: 1, cat: "natural resources", plus: true, d: "A mining town grows up in a remote desert because iron ore lies under the ground." },
  { lvl: 2, cat: "natural resources", plus: true, d: "Kalgoorlie in Western Australia grew rapidly in the 1890s after gold was discovered there." },
  { lvl: 2, cat: "natural resources", plus: true, d: "In the 1800s, coal deposits drew huge numbers of workers to Germany's Ruhr valley." },
  { lvl: 3, cat: "natural resources", plus: true, d: "Discoveries of North Sea oil in the 1970s made Aberdeen in Scotland a busy, growing city." },
  { lvl: 1, cat: "natural hazards", plus: false, d: "Lava flows and ash clouds make the land close to an active volcano's crater dangerous to live on." },
  { lvl: 2, cat: "natural hazards", plus: false, d: "Low-lying coasts often struck by tropical cyclones and storm surges are risky places to build homes." },
  { lvl: 2, cat: "natural hazards", plus: false, d: "Strong earthquakes along a plate boundary can destroy buildings, which can put people off living nearby." },
  { lvl: 3, cat: "natural hazards", plus: false, d: "After the Soufrière Hills volcano began erupting in 1995, much of southern Montserrat was evacuated and is still largely empty." },
];

const PHYS_ACCEPT: Record<string, string[]> = {
  relief: ["relief", "topography", "relief of the land", "altitude", "height of the land", "slope", "gradient"],
  climate: ["climate", "temperature", "temperatures"],
  "water supply": ["water supply", "water", "fresh water", "freshwater", "water availability", "access to water"],
  soil: ["soil", "soil fertility", "fertile soil", "soils", "soil quality", "fertility"],
  "natural resources": ["natural resources", "resources", "raw materials", "minerals", "mineral resources"],
  "natural hazards": ["natural hazards", "hazards", "natural hazard", "hazard", "natural disasters", "disasters"],
};

const HUMAN: { d: string; cat: string; lvl: 1 | 2 | 3; plus: boolean }[] = [
  { lvl: 1, cat: "jobs", plus: true, d: "Millions of people moved from the countryside to Shenzhen because its factories offered work." },
  { lvl: 1, cat: "jobs", plus: true, d: "Technology companies in Silicon Valley attract people with well-paid work." },
  { lvl: 2, cat: "jobs", plus: false, d: "When car factories closed, many people left Detroit to look for work elsewhere." },
  { lvl: 2, cat: "jobs", plus: true, d: "Migrants from across India move to Mumbai hoping to earn money in its businesses and factories." },
  { lvl: 1, cat: "transport", plus: true, d: "New housing grows up around a new railway station because people can travel to work quickly." },
  { lvl: 2, cat: "transport", plus: true, d: "A new motorway cuts journey times, and housing estates spring up near its junctions." },
  { lvl: 2, cat: "transport", plus: false, d: "Mountain villages with no road access find it hard to get goods in and out, so young people leave." },
  { lvl: 3, cat: "transport", plus: true, d: "A town grows where several main roads meet at a bridge across a river — a natural route centre." },
  { lvl: 1, cat: "services", plus: true, d: "Families move to a town because it has good schools and a hospital nearby." },
  { lvl: 2, cat: "services", plus: false, d: "Remote Highland villages in Scotland lose people when the local school and doctor's surgery close." },
  { lvl: 2, cat: "services", plus: true, d: "Older people move closer to the city so they can reach specialist hospitals." },
  { lvl: 3, cat: "services", plus: true, d: "Piped water, electricity and fast internet in a city attract people from villages that lack them." },
  { lvl: 1, cat: "political stability", plus: false, d: "Civil war in Syria from 2011 forced millions of people to flee the country." },
  { lvl: 2, cat: "political stability", plus: true, d: "Families and businesses prefer countries with a stable government, little crime and no war." },
  { lvl: 2, cat: "political stability", plus: false, d: "After full-scale war began in Ukraine in 2022, millions of people left for other European countries." },
  { lvl: 1, cat: "history", plus: true, d: "Places that were settled first often stay large, because homes, roads and families are already there." },
  { lvl: 2, cat: "history", plus: true, d: "European colonists first landed on Australia's south-east coast, so the first cities grew there — and still dominate today." },
  { lvl: 3, cat: "history", plus: true, d: "Singapore grew from a British East India Company trading post set up in 1819." },
  { lvl: 1, cat: "government planning", plus: true, d: "Singapore's Housing and Development Board builds whole new towns, such as Punggol, so people can live away from the crowded city centre." },
  { lvl: 2, cat: "government planning", plus: true, d: "Brazil built a new capital, Brasília, inland in 1960 to draw people away from the crowded coast." },
  { lvl: 2, cat: "government planning", plus: true, d: "After the Second World War, the UK government built new towns such as Milton Keynes to take people out of crowded London." },
  { lvl: 3, cat: "government planning", plus: false, d: "China's hukou registration system restricted where people could officially live, slowing migration into cities." },
  { lvl: 3, cat: "government planning", plus: true, d: "Indonesia has been building a new capital, Nusantara, on Borneo to take pressure off Jakarta." },
];

const HUM_ACCEPT: Record<string, string[]> = {
  jobs: ["jobs", "employment", "work", "job opportunities", "economic opportunities", "economy", "job"],
  transport: ["transport", "transport links", "communications", "transport and communications", "accessibility", "infrastructure", "routes"],
  services: ["services", "amenities", "schools and hospitals", "healthcare and education", "public services", "facilities", "utilities"],
  "political stability": ["political stability", "stability", "conflict", "war", "peace", "politics", "political factors", "safety"],
  history: ["history", "history of settlement", "historical factors", "early settlement", "historical", "colonial history"],
  "government planning": ["government planning", "government policy", "planning", "government", "policy", "government policies"],
};

const CASES: Fact[] = [
  { lvl: 1, q: "Roughly 95% of Egypt's people live on about 5% of its land. Along which river?", a: ["Nile", "River Nile", "the Nile"], why: "The Nile brings water and fertile silt through the desert; the land either side is almost empty." },
  { lvl: 1, q: "Which country's people mostly live on its south-east and east coasts, leaving an almost empty interior called the Outback?", a: ["Australia"], why: "The coasts are cooler and wetter, with ports and jobs; the interior is hot and dry." },
  { lvl: 1, q: "Which city became Brazil's capital in 1960, built inland to spread people away from the coast?", a: ["Brasília", "Brasilia"], why: "Brasília was a government-planning decision — a human factor — to open up the interior.", trap: { a: ["Rio de Janeiro", "Rio"], fb: "Rio was the capital until 1960. The new inland capital was Brasília." } },
  { lvl: 1, q: "Name the scale at which you explain why most of the world's people live in Asia and Europe rather than in Antarctica.", a: ["global", "global scale", "world", "world scale"], why: "Comparing continents and the whole Earth is the global scale." },
  { lvl: 1, q: "Name the scale at which you explain why most Egyptians live along the Nile rather than in the desert.", a: ["national", "national scale", "country", "country scale"], why: "Patterns *within one country* are at the national scale." },
  { lvl: 1, q: "Name the scale at which you explain why more people live near an MRT station than on Pulau Ubin.", a: ["local", "local scale"], why: "Patterns within a town, city or small region are at the local scale." },
  { lvl: 1, q: "Name the technology that brings river or well water to fields so crops can grow in dry places.", a: ["irrigation"], why: "Irrigation turned dry land along the Nile and in parts of India into crowded farmland." },
  { lvl: 2, q: "Name the process that turns seawater into drinking water, helping desert cities such as Dubai to grow.", a: ["desalination"], why: "Technology can overcome a negative physical factor (no fresh water)." },
  { lvl: 2, q: "Which invention made hot-desert cities such as Phoenix and Dubai comfortable to live in all year?", a: ["air conditioning", "air conditioner", "air-conditioning", "aircon", "air con"], why: "Technology reduces the importance of a harsh climate." },
  { lvl: 2, q: "Which dam on the Nile, completed in 1970, controls floods and stores water for Egypt?", a: ["Aswan High Dam", "Aswan Dam", "Aswan", "High Dam"], why: "The dam made the Nile valley safer from floods and allowed year-round irrigation." },
  { lvl: 2, q: "Many Egyptians live in a flat, fan-shaped area of fertile silt where the Nile meets the Mediterranean. Name this landform.", a: ["delta", "Nile Delta", "river delta"], why: "The Nile Delta is flat, fertile and well watered — ideal for farming and cities." },
  { lvl: 2, q: "Most Brazilians live near which ocean?", a: ["Atlantic", "Atlantic Ocean"], why: "Brazil's big cities — São Paulo, Rio de Janeiro, Salvador — are on or near the Atlantic coast.", trap: { a: ["Pacific", "Pacific Ocean"], fb: "Brazil doesn't touch the Pacific — its whole coast faces the Atlantic." } },
  { lvl: 2, q: "Which region of Brazil holds the most people, including São Paulo and Rio de Janeiro?", a: ["South-East", "Southeast", "South East", "SE"], why: "The South-East has jobs, ports, industry and a milder climate on the coastal plateau." },
  { lvl: 2, q: "Nearly 80% of Singapore residents live in public flats built by which government agency?", a: ["HDB", "Housing and Development Board", "Housing & Development Board"], why: "Planned HDB new towns spread Singapore's people across the island — government planning in action." },
  { lvl: 2, q: "Singapore's land area grew by about a quarter after independence. What process created the new land?", a: ["land reclamation", "reclamation"], why: "Reclaiming land from the sea let Singapore house more people and build Changi Airport and the port." },
  { lvl: 2, q: "Which Chinese city grew from a small town into a megacity after becoming a Special Economic Zone in 1980?", a: ["Shenzhen"], why: "Factory jobs (a human factor) pulled tens of millions of migrants to Shenzhen." },
  { lvl: 3, q: "Which Indonesian island, with fertile volcanic soils and the capital Jakarta, holds over half of Indonesia's people?", a: ["Java"], why: "Fertile soil, rice farming and big-city jobs combine to make Java very densely populated." },
  { lvl: 3, q: "Most of Japan's people live on narrow coastal plains. Which physical factor makes the interior unattractive?", a: ["relief", "mountains", "mountainous relief", "steep relief", "mountainous", "topography"], why: "About three-quarters of Japan is mountainous, so people squeeze onto the flat coasts." },
  { lvl: 3, q: "Egypt's Western Desert is almost empty. Which physical factor is most to blame?", a: ["water supply", "lack of water", "water", "no water", "shortage of water", "climate", "rainfall", "low rainfall"], why: "With almost no rain and no river, there is no water for farming or drinking (a dry climate gives no water supply)." },
  { lvl: 3, q: "The Amazon has lots of rain and a river network, yet few people. Which human factor most limits settlement in the interior?", a: ["transport", "transport links", "accessibility", "roads", "lack of roads", "poor transport", "remoteness"], why: "With few roads, it is hard to reach markets, jobs and services, so people stay away." },
  { lvl: 3, q: "Give the term for using machines, irrigation or desalination to overcome difficult physical conditions — the reason the importance of factors changes over time.", a: ["technology", "technological change", "technological development", "new technology"], why: "As technology improves, harsh physical factors matter less and human factors matter more." },
  { lvl: 3, q: "Most Canadians live in the far south of the country. Name the main physical factor that keeps the north almost empty.", a: ["climate", "cold climate", "temperature", "cold"], why: "The north has long, freezing winters and permafrost; the south is milder and better for farming." },
];

// ---------------------------------------------------------------------------
// Numeric helpers
// ---------------------------------------------------------------------------

const PLACES = ["Island A", "District P", "Region K", "Town Q", "Province M", "Valley R", "County S", "Country Z"];

function numTrap(value: number, answer: number, feedback: string, tol?: number): Trap[] {
  if (!Number.isFinite(value) || Math.abs(value - answer) <= (tol ?? 0) + 1e-9) return [];
  return [{ spec: { type: "number", value }, feedback }];
}

function dotSquareSvg(rng: Rng, n: number, side: number, perDot: number): string {
  const cells = rng.shuffle(Array.from({ length: 100 }, (_, i) => i)).slice(0, n);
  let dots = "";
  for (const c of cells) {
    const cx = 30 + (c % 10) * 20 + 10 + rng.int(-4, 4);
    const cy = 30 + Math.floor(c / 10) * 20 + 10 + rng.int(-4, 4);
    dots += '<circle cx="' + cx + '" cy="' + cy + '" r="4" fill="#1f2937"/>';
  }
  return (
    '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square area ' +
    side + ' km by ' + side + ' km containing ' + n + ' dots; each dot represents ' + perDot + ' people">' +
    '<rect x="0" y="0" width="400" height="260" fill="#ffffff"/>' +
    '<rect x="30" y="30" width="200" height="200" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/>' +
    dots +
    '<text x="130" y="22" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">' + side + ' km</text>' +
    '<text x="18" y="134" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 18 134)">' + side + ' km</text>' +
    '<circle cx="258" cy="60" r="4" fill="#1f2937"/>' +
    '<text x="270" y="64" font-size="12" font-family="sans-serif" fill="#1f2937">= ' + big(perDot) + ' people</text>' +
    '<text x="250" y="100" font-size="12" font-family="sans-serif" fill="#334155">Key</text>' +
    '<text x="250" y="120" font-size="11" font-family="sans-serif" fill="#334155">Count the dots,</text>' +
    '<text x="250" y="136" font-size="11" font-family="sans-serif" fill="#334155">then find the area.</text>' +
    '</svg>'
  );
}

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  {
    id: `${T}.key-terms`,
    topicId: T,
    title: "Give the key term",
    level: 1,
    guideRef: "world-distribution",
    generate(rng, tier) {
      return factItem(rng, tier, KEY_TERMS, ["", "Knowledge Organiser check: "], "Read the definition slowly — which single key term does it describe?");
    },
  },
  {
    id: `${T}.world-pattern`,
    topicId: T,
    title: "Where in the world? Dense and sparse places",
    level: 1,
    guideRef: "world-distribution",
    generate(rng, tier) {
      return factItem(rng, tier, WORLD_PLACES, ["", "World map recall: "], "Picture a world population map: where are the dark clusters, and where are the empty spaces?");
    },
  },
  {
    id: `${T}.physical-or-human`,
    topicId: T,
    title: "Physical or human factor?",
    level: 1,
    guideRef: "human-factors",
    generate(rng, tier) {
      const human = rng.bool();
      const bank = human ? HUMAN : PHYSICAL;
      const f = rng.pick(pool(bank, tier));
      const right = human ? "human" : "physical";
      const wrong = human ? "physical" : "human";
      return {
        prompt: `Is this a **physical** or a **human** factor affecting where people live?\n\n> ${f.d}`,
        answer: { type: "text", accept: [right, `${right} factor`, `${right} factors`] },
        solution: [
          `**${right}** — the factor here is *${f.cat}*.`,
          human ? "It comes from people's decisions, the economy, government or history." : "It comes from the natural environment, not from people.",
        ],
        hint: "Ask: did nature make this, or did people?",
        traps: [{ spec: { type: "text", accept: [wrong] }, feedback: human ? `Look again — ${f.cat} is something people create or decide, so it is a human factor.` : `Look again — ${f.cat} is part of the natural environment, so it is a physical factor.` }],
      };
    },
  },
  {
    id: `${T}.density-calc`,
    topicId: T,
    title: "Calculate population density",
    level: 1,
    guideRef: "population-density",
    generate(rng, tier) {
      const place = rng.pick(PLACES);
      if (tier === 1) {
        const area = rng.pick([10, 20, 25, 40, 50, 80, 100, 200, 250, 500]);
        const d = rng.pick([3, 5, 8, 12, 15, 20, 30, 40, 60, 75, 120, 150, 300, 450, 800, 1200]);
        const pop = d * area;
        return {
          prompt: `${place} has a population of ${big(pop)} people and an area of ${big(area)} km². Calculate its population density in people per km².`,
          answer: { type: "number", value: d },
          solution: [`Density = population ÷ area`, `= ${big(pop)} ÷ ${big(area)} = **${big(d)} people per km²**`],
          hint: "Density = population ÷ area. Which number goes on top?",
          traps: numTrap(roundTo(area / pop, 3), d, "You divided area by population. Density is *people* ÷ *area*."),
        };
      }
      if (tier === 2) {
        const area = rng.int(12, 950);
        const pop = rng.int(30, 900) * 100 + rng.int(0, 99);
        const ans = roundTo(pop / area, 0);
        return {
          prompt: `${place} has ${big(pop)} people living on ${big(area)} km². Calculate the population density in people per km², to the nearest whole number.`,
          answer: { type: "number", value: ans },
          solution: [`Density = population ÷ area = ${big(pop)} ÷ ${big(area)}`, `= ${num(roundTo(pop / area, 3))}…`, `≈ **${big(ans)} people per km²** (nearest whole number)`],
          hint: "Divide the number of people by the area, then round.",
          traps: numTrap(roundTo(area / pop, 2), ans, "You divided area by population. Density is *people* ÷ *area*."),
        };
      }
      // tier 3: population in millions, large area, answer to 1 dp
      const tenths = rng.int(12, 480); // 1.2 – 48.0 million
      const millions = tenths / 10;
      const area = rng.int(60, 2400) * 1000 + rng.pick([0, 250, 500, 750]);
      const pop = tenths * 100000;
      const ans = roundTo(pop / area, 1);
      return {
        prompt: `${place} has ${num(millions)} million people and an area of ${big(area)} km². Calculate its population density in people per km², to 1 decimal place.`,
        answer: { type: "number", value: ans },
        solution: [`${num(millions)} million = ${big(pop)} people`, `Density = ${big(pop)} ÷ ${big(area)} = ${num(roundTo(pop / area, 4))}…`, `≈ **${ans.toFixed(1)} people per km²** (1 d.p.)`],
        hint: "Write the population out in full first (1 million = 1,000,000).",
        traps: numTrap(roundTo(millions / area, 1), ans, "You divided the number of *millions* by the area. Convert to the full number of people first."),
      };
    },
  },
  {
    id: `${T}.dot-square-density`,
    topicId: T,
    title: "Density from a dot map square",
    level: 2,
    guideRef: "population-density",
    generate(rng, tier) {
      const n = tier === 1 ? rng.int(5, 16) : tier === 2 ? rng.int(10, 28) : rng.int(18, 40);
      const side = tier === 1 ? rng.pick([2, 5, 10]) : tier === 2 ? rng.pick([2, 4, 5, 10]) : rng.pick([3, 4, 6, 8, 12]);
      const perDot = tier === 1 ? rng.pick([100, 500, 1000]) : rng.pick([50, 100, 200, 250, 500, 1000]);
      const area = side * side;
      const pop = n * perDot;
      const exact = pop / area;
      const ans = roundTo(exact, 0);
      const isExact = Number.isInteger(exact);
      return {
        prompt: `The dot map square below shows part of ${rng.pick(["a farming region", "a river valley", "a mountain district", "a coastal plain", "a new town", "a desert oasis area", "a delta", "an island"])}. It covers ${side} km × ${side} km. Each dot represents ${big(perDot)} people. Calculate the population density in people per km²${isExact ? "" : ", to the nearest whole number"}.`,
        diagram: dotSquareSvg(rng, n, side, perDot),
        answer: { type: "number", value: ans },
        solution: [
          `Count the dots: ${n}. Population = ${n} × ${big(perDot)} = ${big(pop)} people.`,
          `Area = ${side} × ${side} = ${area} km².`,
          `Density = ${big(pop)} ÷ ${area} = ${isExact ? "" : num(roundTo(exact, 2)) + (roundTo(exact, 2) === exact ? " ≈ " : "… ≈ ")}**${big(ans)} people per km²**`,
        ],
        hint: "Two steps: people = dots × people per dot; area = length × width.",
        traps: [
          ...numTrap(roundTo(pop / side, 0), ans, `You divided by ${side} km, the length of one side. The area is ${side} × ${side} = ${area} km².`),
          ...numTrap(roundTo(n / area, 2), ans, "That is dots per km². Multiply the dots by the people each dot represents first."),
        ],
      };
    },
  },
  {
    id: `${T}.density-rearrange`,
    topicId: T,
    title: "Use density to find population or area",
    level: 2,
    guideRef: "population-density",
    generate(rng, tier) {
      const place = rng.pick(PLACES);
      const findPop = tier === 1 ? true : rng.bool();
      const d = tier === 1 ? rng.pick([5, 10, 20, 25, 40, 50, 100, 150, 200, 500]) : rng.pick([8, 12, 35, 64, 85, 120, 240, 375, 640, 1250, 2400, 8000]);
      const area = tier === 1 ? rng.pick([20, 30, 40, 60, 80, 120, 250]) : tier === 2 ? rng.int(15, 400) : rng.int(400, 9000);
      const pop = d * area;
      if (findPop) {
        return {
          prompt: `${place} covers ${big(area)} km² and has a population density of ${big(d)} people per km². How many people live there?`,
          answer: { type: "number", value: pop },
          solution: [`Density = population ÷ area, so population = density × area.`, `= ${big(d)} × ${big(area)} = **${big(pop)} people**`],
          hint: "If density = population ÷ area, rearrange to get population on its own.",
          traps: numTrap(roundTo(area / d, 2), pop, "You divided. Each km² holds the density's worth of people, so *multiply* density by area."),
        };
      }
      return {
        prompt: `${place} has ${big(pop)} people and a population density of ${big(d)} people per km². What is its area in km²?`,
        answer: { type: "number", value: area },
        solution: [`Density = population ÷ area, so area = population ÷ density.`, `= ${big(pop)} ÷ ${big(d)} = **${big(area)} km²**`],
        hint: "Rearrange density = population ÷ area to make area the subject.",
        traps: numTrap(pop * d, area, "You multiplied. Area = population ÷ density."),
      };
    },
  },
  {
    id: `${T}.name-physical-factor`,
    topicId: T,
    title: "Name the physical factor",
    level: 2,
    guideRef: "physical-factors",
    generate(rng, tier) {
      const f = rng.pick(pool(PHYSICAL, tier));
      const frame = rng.pick(["", "Case file: "]);
      return {
        prompt: `${frame}${f.d}\n\nName the **physical factor** being described (relief, climate, water supply, soil, natural resources or natural hazards).`,
        answer: { type: "text", accept: PHYS_ACCEPT[f.cat] },
        solution: [`**${f.cat}**`, `This is a ${f.plus ? "positive factor — it encourages people to settle" : "negative factor — it discourages people from settling"}.`],
        hint: "Is the key idea about height and slope, temperature, water, the ground's fertility, things to mine, or danger?",
        traps: f.cat !== "climate" && f.cat !== "water supply" ? [] : [{ spec: { type: "text", accept: f.cat === "climate" ? ["water supply"] : ["climate"] }, feedback: f.cat === "climate" ? "The description is about temperature, not where fresh water comes from — that's climate." : "The description is about a source of fresh water (a river, spring, well or aquifer) — that's water supply." }],
      };
    },
  },
  {
    id: `${T}.name-human-factor`,
    topicId: T,
    title: "Name the human factor",
    level: 2,
    guideRef: "human-factors",
    generate(rng, tier) {
      const f = rng.pick(pool(HUMAN, tier));
      const frame = rng.pick(["", "Case file: "]);
      return {
        prompt: `${frame}${f.d}\n\nName the **human factor** at work (jobs, transport, services, political stability, history or government planning).`,
        answer: { type: "text", accept: HUM_ACCEPT[f.cat] },
        solution: [`**${f.cat}**`, `This ${f.plus ? "pulls people towards" : "pushes people away from"} the place.`],
        hint: "Is it about earning money, getting around, schools and hospitals, safety, the past, or a government decision?",
        traps: f.cat === "government planning" ? [{ spec: { type: "text", accept: ["services"] }, feedback: "Services may follow, but the trigger here is a deliberate government decision — government planning." }] : [],
      };
    },
  },
  {
    id: `${T}.percent-share`,
    topicId: T,
    title: "What percentage of people live there?",
    level: 2,
    guideRef: "explaining-distribution",
    generate(rng, tier) {
      const place = rng.pick(["the river valley", "the coastal strip", "the capital city region", "the delta", "the southern lowlands", "the oasis belt"]);
      if (tier === 1) {
        const total = rng.pick([10, 20, 25, 40, 50]);
        const pct = rng.pick([20, 40, 60, 80, 90]);
        const part = (total * pct) / 100;
        return {
          prompt: `A country has ${total} million people. ${num(part)} million of them live in ${place}. What percentage of the country's people live in ${place}?`,
          answer: { type: "number", value: pct },
          solution: [`Percentage = part ÷ whole × 100`, `= ${num(part)} ÷ ${total} × 100 = **${pct}%**`],
          hint: "Part ÷ whole, then × 100.",
          traps: numTrap(roundTo((total / part) * 100, 1), pct, "You divided the whole by the part. It's part ÷ whole × 100."),
        };
      }
      if (tier === 2) {
        const total = rng.int(12, 95);
        const part = roundTo(rng.int(20, Math.max(21, total * 9)) / 10, 1);
        const safePart = part >= total ? roundTo(total * 0.6, 1) : part;
        const ans = roundTo((safePart / total) * 100, 0);
        return {
          prompt: `A country has ${total} million people. ${num(safePart)} million live in ${place}. What percentage of the people live in ${place}? Give your answer to the nearest whole number.`,
          answer: { type: "number", value: ans },
          solution: [`= ${num(safePart)} ÷ ${total} × 100`, `= ${num(roundTo((safePart / total) * 100, 2))}… ≈ **${ans}%**`],
          hint: "Part ÷ whole × 100, then round.",
          traps: numTrap(roundTo((total / safePart) * 100, 0), ans, "You divided the whole by the part. It's part ÷ whole × 100."),
        };
      }
      // tier 3: how many times denser is the crowded zone than the rest?
      const landPct = rng.pick([4, 5, 8, 10, 12, 15, 20]);
      const peoplePct = rng.pick([60, 70, 75, 80, 85, 90, 95]);
      const ratio = (peoplePct / landPct) / ((100 - peoplePct) / (100 - landPct));
      const ans = roundTo(ratio, 0);
      return {
        prompt: `In a desert country, ${peoplePct}% of the people live in ${place}, an area covering only ${landPct}% of the land. How many times greater is the population density in ${place} than in the rest of the country? Give your answer to the nearest whole number.`,
        answer: { type: "number", value: ans },
        solution: [
          `Density is proportional to (% of people) ÷ (% of land).`,
          `In ${place}: ${peoplePct} ÷ ${landPct} = ${num(roundTo(peoplePct / landPct, 3))}. Rest: ${100 - peoplePct} ÷ ${100 - landPct} = ${num(roundTo((100 - peoplePct) / (100 - landPct), 4))}.`,
          `Ratio = ${num(roundTo(peoplePct / landPct, 3))} ÷ ${num(roundTo((100 - peoplePct) / (100 - landPct), 4))} ${Number.isInteger(ratio) ? "=" : "≈ " + num(roundTo(ratio, 2)) + "… ≈"} **${ans} times**`,
        ],
        hint: "Compare (share of people ÷ share of land) for the crowded zone and for the rest.",
        traps: numTrap(roundTo(peoplePct / landPct, 0), ans, "That compares the zone with the *national average*, not with the rest of the country. Work out the rest's share of people ÷ share of land too."),
      };
    },
  },
  {
    id: `${T}.compare-density`,
    topicId: T,
    title: "How many times more crowded?",
    level: 3,
    guideRef: "population-density",
    generate(rng, tier) {
      const [a, b] = rng.shuffle(PLACES).slice(0, 2);
      if (tier === 1) {
        const dB = rng.pick([2, 4, 5, 10, 20, 25, 40]);
        const k = rng.pick([3, 4, 5, 6, 8, 10, 20, 50, 100]);
        const dA = dB * k;
        return {
          prompt: `${a} has a population density of ${big(dA)} people per km². ${b} has ${big(dB)} people per km². How many times more densely populated is ${a} than ${b}?`,
          answer: { type: "number", value: k },
          solution: [`Divide the higher density by the lower: ${big(dA)} ÷ ${big(dB)} = **${k} times**`],
          hint: "\"How many times\" means divide, not subtract.",
          traps: numTrap(dA - dB, k, "You subtracted — that's the *difference*. \"How many times\" means divide."),
        };
      }
      const areaA = tier === 2 ? rng.pick([10, 20, 40, 50, 80]) : rng.int(30, 900);
      const areaB = tier === 2 ? rng.pick([100, 200, 400, 500, 1000]) : rng.int(2000, 60000);
      const dA = tier === 2 ? rng.pick([300, 400, 600, 900, 1200]) : rng.int(150, 9000);
      const dB = tier === 2 ? rng.pick([3, 5, 6, 10, 15]) : rng.int(2, 60);
      const popA = dA * areaA + (tier === 3 ? rng.int(0, areaA - 1) : 0);
      const popB = dB * areaB + (tier === 3 ? rng.int(0, areaB - 1) : 0);
      const densA = popA / areaA;
      const densB = popB / areaB;
      const ans = roundTo(densA / densB, 0);
      const exact = Number.isInteger(densA / densB);
      return {
        prompt: `${a}: ${big(popA)} people on ${big(areaA)} km². ${b}: ${big(popB)} people on ${big(areaB)} km². How many times more densely populated is ${a} than ${b}?${exact ? "" : " Give your answer to the nearest whole number."}`,
        answer: { type: "number", value: ans },
        solution: [
          `${a}: ${big(popA)} ÷ ${big(areaA)} = ${num(roundTo(densA, 2))} people per km²`,
          `${b}: ${big(popB)} ÷ ${big(areaB)} = ${num(roundTo(densB, 2))} people per km²`,
          `${num(roundTo(densA, 2))} ÷ ${num(roundTo(densB, 2))} ${exact ? "=" : "≈"} **${ans} times**${exact ? "" : " (using the unrounded densities)"}`,
        ],
        hint: "Find each density first, then divide the bigger by the smaller.",
        traps: numTrap(roundTo(popA / popB, 0), ans, "Comparing populations ignores area. Work out each *density* first."),
      };
    },
  },
  {
    id: `${T}.case-study-recall`,
    topicId: T,
    title: "Explain the pattern: case-study recall",
    level: 3,
    guideRef: "explaining-distribution",
    generate(rng, tier) {
      return factItem(rng, tier, CASES, ["", "Case study check: "], "Think of the place's physical geography first, then the human decisions made there.");
    },
  },
];
