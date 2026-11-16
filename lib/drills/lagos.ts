import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { num, big, roundTo, clean } from "./helpers.ts";

// ---------------------------------------------------------------------------
// Fact banks (retrieval drills). lvl 1 = core, 2 = typical, 3 = stretch.
// Tier 1 draws lvl 1–2, tier 2 draws everything, tier 3 draws lvl 2–3.
// Contested figures (e.g. Lagos's total population) are deliberately NOT drilled.
// ---------------------------------------------------------------------------

interface Fact {
  q: string[];
  a: string[];
  why: string;
  lvl: 1 | 2 | 3;
  trap?: { a: string[]; fb: string };
}

function fromBank(bank: Fact[], rng: Rng, tier: 1 | 2 | 3, hint: string): DrillItem {
  const pool = bank.filter((f) => (tier === 1 ? f.lvl <= 2 : tier === 2 ? true : f.lvl >= 2));
  const f = rng.pick(pool);
  const traps: Trap[] | undefined = f.trap ? [{ spec: { type: "text", accept: f.trap.a }, feedback: f.trap.fb }] : undefined;
  return {
    prompt: rng.pick(f.q),
    answer: { type: "text", accept: f.a, display: f.a[0] },
    solution: [f.why],
    hint,
    traps,
  };
}

const LOCATION: Fact[] = [
  { q: ["Lagos is the largest city of which African country?", "Name the country in which Lagos is found."], a: ["Nigeria"], why: "Lagos is in Nigeria, the African country with the largest population.", lvl: 1, trap: { a: ["Ghana"], fb: "Ghana is further west along the same coast (past Benin and Togo). Lagos is in Nigeria." } },
  { q: ["Which ocean do Lagos's beaches face?", "Which ocean lies directly south of Lagos?"], a: ["Atlantic", "Atlantic Ocean"], why: "Lagos is on the West African coast, facing the Atlantic Ocean to the south.", lvl: 1, trap: { a: ["Indian", "Indian Ocean"], fb: "The Indian Ocean is on Africa's EAST side. Lagos is on the west coast." } },
  { q: ["Lagos lies on the coast of which large gulf of West Africa?", "Name the gulf (a big curve in the coastline of West Africa) on which Lagos stands."], a: ["Gulf of Guinea", "Guinea", "Bight of Benin"], why: "Lagos sits on the Bight of Benin, part of the Gulf of Guinea in the Atlantic.", lvl: 2 },
  { q: ["Lagos is built around a large shallow body of water partly cut off from the sea. What type of water body is it?", "Name the body of water at the heart of Lagos that Makoko is built over."], a: ["Lagos Lagoon", "lagoon"], why: "Lagos is built around the Lagos Lagoon — a shallow lagoon separated from the Atlantic by sandbars and islands.", lvl: 1 },
  { q: ["In which part of Nigeria is Lagos? Give a compass direction (e.g. north-east).", "Using compass directions, describe where Lagos is within Nigeria."], a: ["south-west", "southwest", "south west", "SW", "south-western"], why: "Lagos is in the far south-west of Nigeria, close to the border with Benin.", lvl: 1, trap: { a: ["south-east", "southeast", "south east", "SE"], fb: "Lagos is near Nigeria's WESTERN border with Benin — the south-west, not the south-east." } },
  { q: ["Lagos is in which hemisphere — northern or southern?", "Is Lagos north or south of the Equator? Answer northern or southern hemisphere."], a: ["northern", "northern hemisphere", "north"], why: "Lagos is about 6° north of the Equator, so it is in the northern hemisphere.", lvl: 1, trap: { a: ["southern", "southern hemisphere", "south"], fb: "Lagos is a little NORTH of the Equator (about 6° N)." } },
  { q: ["Which city replaced Lagos as Nigeria's capital in 1991?", "Lagos is no longer Nigeria's capital. Name the city that took over the role in 1991."], a: ["Abuja"], why: "Abuja, a planned city near the centre of Nigeria, became the capital in 1991.", lvl: 2, trap: { a: ["Kano"], fb: "Kano is a big northern city, but the capital moved to Abuja." } },
  { q: ["In which year did Abuja officially replace Lagos as Nigeria's capital?"], a: ["1991"], why: "The government officially moved from Lagos to Abuja in December 1991.", lvl: 3, trap: { a: ["1960"], fb: "1960 is Nigeria's independence year. The capital moved later, in 1991." } },
  { q: ["In which year did Nigeria become independent?", "Nigeria gained independence from Britain in which year?"], a: ["1960"], why: "Nigeria became independent from Britain on 1 October 1960, with Lagos as its first capital.", lvl: 2, trap: { a: ["1991"], fb: "1991 is when the capital moved to Abuja. Independence came in 1960." } },
  { q: ["Nigeria became independent in 1960. Which country had ruled it as a colony?"], a: ["Britain", "United Kingdom", "UK", "Great Britain", "England"], why: "Nigeria was a British colony until independence in 1960 — which is why English is its official language.", lvl: 2 },
  { q: ["Nigeria is classed as an NEE. What does NEE stand for?", "Write out the full term for the abbreviation NEE used to describe Nigeria's economy."], a: ["newly emerging economy", "newly emerging economies"], why: "NEE = newly emerging economy: a country whose economy is growing and industrialising fast.", lvl: 2 },
  { q: ["The name 'Lagos' means 'lakes' in which European language?", "Sailors from which European country named Lagos in the 1400s? Give the language they spoke."], a: ["Portuguese"], why: "Portuguese sailors named the area Lagos ('lakes') in the 1400s after its lagoons.", lvl: 3 },
  { q: ["What is the traditional Yoruba name for Lagos (three letters)?"], a: ["Eko", "Èkó", "Ekó"], why: "Lagos is called Èkó in Yoruba — hence names like Eko Atlantic.", lvl: 3 },
  { q: ["Name the ethnic group whose homeland includes Lagos and south-west Nigeria.", "Which people's language is the main local language of Lagos?"], a: ["Yoruba"], why: "Lagos is in Yorubaland; Yoruba is widely spoken alongside English and many other Nigerian languages.", lvl: 3 },
  { q: ["What is the nickname of Nigeria's film industry, much of it based in Lagos?", "Lagos is the centre of which film industry, nicknamed like Hollywood?"], a: ["Nollywood"], why: "Nollywood — Nigeria's film industry — is one of the world's largest by number of films made.", lvl: 1 },
  { q: ["What do geographers call a city with more than 10 million people?", "Lagos is a ___: a city of over 10 million people."], a: ["megacity", "mega city", "mega-city"], why: "A megacity is an urban area of more than 10 million people.", lvl: 1, trap: { a: ["capital", "capital city"], fb: "A capital is the seat of government — Lagos isn't even the capital. Size makes it a megacity." } },
  { q: ["By area, is Lagos State the largest or the smallest of Nigeria's 36 states?"], a: ["smallest"], why: "Lagos State is the smallest state by area, yet one of the most populous — so it is extremely crowded.", lvl: 2, trap: { a: ["largest", "biggest"], fb: "Lagos has a huge population but is the SMALLEST state by area." } },
  { q: ["How many states does Nigeria have (not counting the Federal Capital Territory)?", "Lagos State is one of how many Nigerian states?"], a: ["36", "thirty-six", "thirty six"], why: "Nigeria has 36 states plus the Federal Capital Territory around Abuja.", lvl: 3 },
  { q: ["Which country has the largest population in Africa?"], a: ["Nigeria"], why: "Nigeria has the largest population of any African country.", lvl: 1, trap: { a: ["Egypt"], fb: "Egypt is large, but Nigeria has far more people." } },
  { q: ["Name the long bridge (about 12 km) that links Lagos Island to the mainland across the lagoon.", "Which bridge, opened in 1990, carries traffic about 12 km across the Lagos Lagoon?"], a: ["Third Mainland Bridge", "Third Mainland"], why: "The Third Mainland Bridge (opened 1990) is about 12 km long and is one of the busiest commuter routes in Lagos.", lvl: 2 },
  { q: ["Name the wealthy island district of Lagos, east of Lagos Island, packed with banks and offices.", "Which Lagos island district (V… I…) is the main business and banking hub?"], a: ["Victoria Island", "VI"], why: "Victoria Island is Lagos's main business district, home to banks, headquarters and hotels.", lvl: 2 },
  { q: ["Name the river that gives Nigeria its name.", "Which great West African river reaches the sea in Nigeria's delta and gives the country its name?"], a: ["Niger", "River Niger", "Niger River"], why: "Nigeria is named after the River Niger, which reaches the sea through the Niger Delta.", lvl: 2 },
  { q: ["Name the older port area of Lagos (it starts with A) whose roads are often jammed by lorries queuing for the docks."], a: ["Apapa"], why: "Apapa is Lagos's long-established port; lorry queues there cause notorious gridlock.", lvl: 3 },
  { q: ["Name the new deep-sea port that opened east of central Lagos in 2023.", "Which new port, opened in 2023 on the Lekki peninsula, can take much bigger container ships than the old docks?"], a: ["Lekki Deep Sea Port", "Lekki port", "Lekki", "Lekki Deep Seaport"], why: "Lekki Deep Sea Port began operating in 2023, able to take much larger ships than the older ports.", lvl: 3 },
  { q: ["Is Lagos closer to the Equator or to the Tropic of Cancer?"], a: ["Equator", "the Equator"], why: "Lagos is about 6° N; the Equator is 0° and the Tropic of Cancer is about 23.5° N, so it is much closer to the Equator.", lvl: 2, trap: { a: ["Tropic of Cancer", "Cancer"], fb: "Lagos is about 6° N — only 6° from the Equator but about 17° from the Tropic of Cancer." } },
];

const PUSH_FACTORS = [
  "crops failing after a drought",
  "no secondary school within walking distance",
  "attacks by armed groups in the north-east",
  "low and unreliable farm incomes",
  "no clinic or hospital nearby",
  "family farmland split into plots too small to live on",
  "desertification spreading into farmland in the far north",
  "few jobs apart from farming",
  "floods destroying the harvest",
  "no electricity supply in the village",
  "roads cut off for weeks in the rainy season",
  "falling prices paid for crops",
  "clashes over land and grazing between farmers and herders",
  "no clean piped water in the village",
];
const PULL_FACTORS = [
  "jobs in factories, offices and the port",
  "chances to earn money trading in the informal economy",
  "universities and plenty of secondary schools",
  "hospitals with specialist doctors",
  "relatives already living in the city who can help you settle",
  "the 'bright lights' — music, film and nightlife",
  "better mobile internet and more electricity",
  "higher wages than in farming",
  "a feeling of being safer than in areas with armed conflict",
  "busy markets where goods sell for higher prices",
  "work on construction sites for new roads and buildings",
  "more choice of shops and services",
  "jobs in banks and tech start-ups",
];

const TERMS: Fact[] = [
  { q: ["Give the term for people moving from the countryside to live in towns and cities.", "Name the type of migration from villages to cities that has helped Lagos grow."], a: ["rural-urban migration", "rural to urban migration", "rural urban migration"], why: "Rural-urban migration = moving from rural areas to urban areas.", lvl: 1, trap: { a: ["urbanisation", "urbanization"], fb: "Urbanisation is the RESULT (a growing share of people in cities). The movement itself is rural-urban migration." } },
  { q: ["What is the term for population growth when births are greater than deaths?", "Lagos also grows because more babies are born than people die. What is this called?"], a: ["natural increase"], why: "Natural increase = birth rate minus death rate (when births exceed deaths).", lvl: 1 },
  { q: ["What is the general term for a reason that drives people AWAY from where they live?"], a: ["push factor", "push"], why: "Push factors make people want to leave (e.g. drought, poverty, conflict).", lvl: 1, trap: { a: ["pull factor", "pull"], fb: "Pull factors ATTRACT people to a new place. Reasons to leave are push factors." } },
  { q: ["What is the general term for a reason that ATTRACTS people to a new place?"], a: ["pull factor", "pull"], why: "Pull factors attract people (e.g. jobs, schools, hospitals).", lvl: 1, trap: { a: ["push factor", "push"], fb: "Push factors drive people away. Attractions are pull factors." } },
  { q: ["What is the term for an increase in the PROPORTION of a country's people living in towns and cities?"], a: ["urbanisation", "urbanization"], why: "Urbanisation is a rising share (%) of the population living in urban areas.", lvl: 1, trap: { a: ["rural-urban migration", "rural urban migration"], fb: "Migration is one CAUSE. The rising urban share itself is urbanisation." } },
  { q: ["What do we call a person who moves to live in a different place?"], a: ["migrant"], why: "A migrant is anyone who moves home to a new area, within or between countries.", lvl: 1 },
  { q: ["Name the type of migration where people move within the same country, e.g. from Kano to Lagos."], a: ["internal migration", "internal"], why: "Internal migration happens within one country's borders.", lvl: 2, trap: { a: ["international migration", "international"], fb: "International migration crosses a border. Kano → Lagos stays inside Nigeria." } },
  { q: ["What is the term for moving INTO a country to live?"], a: ["immigration"], why: "Immigration = moving into a country; emigration = leaving it.", lvl: 2, trap: { a: ["emigration"], fb: "Emigration is LEAVING a country (E for Exit). Moving in is immigration." } },
  { q: ["What is the term for LEAVING a country to live elsewhere?"], a: ["emigration"], why: "Emigration = leaving a country (E for Exit).", lvl: 2, trap: { a: ["immigration"], fb: "Immigration is moving IN. Leaving is emigration (E for Exit)." } },
  { q: ["What is the number of people per km² called?"], a: ["population density", "density"], why: "Population density = total population ÷ area (people per km²).", lvl: 1, trap: { a: ["population distribution", "distribution"], fb: "Distribution is WHERE people are spread. People per km² is density." } },
  { q: ["Name the outward spread of a city's built-up area into the surrounding countryside."], a: ["urban sprawl", "sprawl"], why: "Urban sprawl is a city spreading outwards, often with unplanned housing on its edges.", lvl: 2 },
  { q: ["What is the term for money that migrants in Lagos send back to their families in the village?"], a: ["remittances", "remittance"], why: "Remittances are money sent home by migrants — a vital income for many rural families.", lvl: 2 },
  { q: ["Name the type of migration where people CHOOSE to move, e.g. for a better job."], a: ["voluntary migration", "voluntary"], why: "Voluntary migration is a free choice, usually driven by pull factors.", lvl: 2, trap: { a: ["forced migration", "forced"], fb: "Forced migration is when people have no real choice (war, disaster)." } },
  { q: ["Name the type of migration where people have no real choice but to move, e.g. fleeing conflict."], a: ["forced migration", "forced"], why: "Forced migration is caused by war, persecution or disaster.", lvl: 2, trap: { a: ["voluntary migration", "voluntary"], fb: "Voluntary migration is a free choice. Fleeing conflict is forced." } },
  { q: ["What is the number of live births per 1,000 people per year called?"], a: ["birth rate", "crude birth rate"], why: "Birth rate = live births per 1,000 people per year.", lvl: 2, trap: { a: ["fertility rate", "total fertility rate"], fb: "Fertility rate is the average number of children per woman. Births per 1,000 people is the birth rate." } },
  { q: ["What is the number of deaths per 1,000 people per year called?"], a: ["death rate", "crude death rate", "mortality rate"], why: "Death rate = deaths per 1,000 people per year.", lvl: 2 },
  { q: ["What do we call something that makes migrating harder, such as the cost of the journey or leaving family behind?"], a: ["intervening obstacle", "intervening obstacles", "obstacle"], why: "Intervening obstacles (Lee's model) stand between the push and pull — cost, distance, family ties.", lvl: 3 },
  { q: ["Name the pattern where migrants move in stages, e.g. village → small town → Lagos."], a: ["step migration", "stepwise migration"], why: "Step migration happens in stages, each move to a bigger settlement.", lvl: 3 },
  { q: ["What is the term for migrants moving from the city back to their home area?"], a: ["return migration"], why: "Return migration = going back to where you came from, e.g. to retire in the home village.", lvl: 3 },
  { q: ["What is the term for a city that is far larger and more important than any other in its country?"], a: ["primate city", "primate"], why: "A primate city dominates its country's urban system — Lagos is often described this way.", lvl: 3 },
  { q: ["Name the zone at the edge of a city where urban land meets the countryside."], a: ["rural-urban fringe", "rural urban fringe", "urban fringe"], why: "The rural-urban fringe is the transition zone where cities sprawl into farmland.", lvl: 3 },
  { q: ["Name a person forced to flee their home by conflict who stays inside their own country (give the full term)."], a: ["internally displaced person", "IDP", "internally displaced people"], why: "An internally displaced person (IDP) has fled but not crossed a border — unlike a refugee.", lvl: 3, trap: { a: ["refugee"], fb: "A refugee has crossed an international border. Someone who stays in their own country is an IDP." } },
  { q: ["Natural increase = birth rate minus which rate?", "To find the rate of natural increase, subtract which rate from the birth rate?"], a: ["death rate", "death", "crude death rate"], why: "Rate of natural increase = birth rate − death rate.", lvl: 2 },
  { q: ["Give the term for the basic systems a city needs — roads, water pipes, power lines and sewers.", "Roads, railways, drains and power lines together are a city's ___."], a: ["infrastructure"], why: "Infrastructure is the network of basic services; in Lagos it has not kept up with population growth.", lvl: 2 },
  { q: ["What is it called when too many people live in too little space, e.g. a family of eight sharing one room?", "Give the term for homes holding more people than they were built for."], a: ["overcrowding", "overcrowded"], why: "Overcrowding is common where housing supply can't keep up with migrants arriving.", lvl: 2 },
  { q: ["What do we call a person who moves mainly to find work or earn more money?", "A young man moves to Lagos purely to find a better-paid job. What type of migrant is he?"], a: ["economic migrant"], why: "Economic migrants move for work and income — the main reason people move to Lagos.", lvl: 2 },
  { q: ["What do we call a person forced to flee their country, crossing an international border to find safety?", "Someone escaping war who crosses into ANOTHER country is called a ___."], a: ["refugee"], why: "A refugee has crossed an international border to escape danger.", lvl: 2, trap: { a: ["internally displaced person", "IDP"], fb: "An IDP stays inside their own country. Crossing a border makes someone a refugee." } },
  { q: ["Name the loss of skilled, educated young people when they migrate away."], a: ["brain drain"], why: "Brain drain is when the most skilled people leave, weakening the area they leave behind.", lvl: 3 },
  { q: ["What is the term for migrants who move for part of each year (e.g. the dry season) and then go home?"], a: ["seasonal migration", "seasonal migrant", "seasonal"], why: "Seasonal migration follows the farming calendar — work in the city in the dry season, farm in the wet season.", lvl: 3 },
  { q: ["Lagos's migrants are mostly young adults. Their children are born in the city. Which part of population growth does this boost?"], a: ["natural increase"], why: "Young migrants raise the city's birth rate, so migration also boosts natural increase.", lvl: 3, trap: { a: ["rural-urban migration", "migration"], fb: "The migrants arrived by migration, but their BABIES add to natural increase." } },
];

const CHALLENGES: Fact[] = [
  { q: ["Name the informal settlement in Lagos built on stilts over the lagoon.", "Which Lagos community of wooden homes on stilts over the lagoon is sometimes called 'the Venice of Africa'?"], a: ["Makoko"], why: "Makoko is a large informal settlement of stilt houses on the Lagos Lagoon.", lvl: 1 },
  { q: ["Name the huge rubbish dump at Ojota, one of the largest in Africa, where a major fire broke out in 2018.", "Which Lagos landfill site is one of Africa's biggest dumps?"], a: ["Olusosun"], why: "Olusosun dump covers a vast area of mainland Lagos; a major fire there in 2018 spread toxic smoke.", lvl: 2 },
  { q: ["What do people in Lagos call a traffic jam?", "Lagos's long, crawling traffic jams have a local nickname. What is it?"], a: ["go-slow", "go slow", "goslow"], why: "A 'go-slow' is Lagos slang for a traffic jam — commuters can lose hours a day in them.", lvl: 1 },
  { q: ["What are the yellow minibuses that carry many Lagos commuters called?"], a: ["danfo", "danfos"], why: "Danfos are yellow minibuses, the backbone of informal public transport in Lagos.", lvl: 2, trap: { a: ["okada"], fb: "Okadas are motorcycle taxis. The yellow minibuses are danfos." } },
  { q: ["What are motorcycle taxis in Lagos called?"], a: ["okada", "okadas"], why: "Okadas are motorcycle taxis — fast in traffic but often dangerous; they have been banned on many major roads.", lvl: 2, trap: { a: ["danfo"], fb: "Danfos are minibuses. Motorcycle taxis are okadas." } },
  { q: ["What are the three-wheeled auto-rickshaw taxis in Lagos called?"], a: ["keke", "keke napep", "kekes"], why: "Kekes (keke NAPEP) are three-wheeled taxis used for short trips.", lvl: 3 },
  { q: ["Name the part of the economy made up of jobs that are not registered or taxed, like street selling.", "Street sellers weaving between cars stuck in traffic work in which sector of the economy?"], a: ["informal economy", "informal sector", "informal"], why: "The informal economy is unregistered, untaxed work — most Lagos workers earn a living this way.", lvl: 1, trap: { a: ["formal"], fb: "Formal jobs are registered and taxed with contracts. Street selling is informal." } },
  { q: ["What is the term for an area of homes built without official permission, often lacking services?"], a: ["informal settlement", "slum", "shanty town", "squatter settlement"], why: "Informal settlements are built without legal permission and often lack water, sanitation and power.", lvl: 1 },
  { q: ["Because the power grid often fails, many Lagos homes and businesses rely on which machines for electricity?"], a: ["generators", "generator"], why: "Frequent power cuts mean many people run noisy, polluting fuel generators.", lvl: 1 },
  { q: ["Which hazard hits low-lying parts of Lagos when heavy rain falls and drains are blocked by rubbish?"], a: ["flooding", "floods", "flood"], why: "Low land, heavy rain and drains blocked by waste combine to cause frequent flooding.", lvl: 1 },
  { q: ["Exhaust from vehicles stuck in go-slows and from diesel generators makes which type of pollution worse?"], a: ["air pollution", "air"], why: "Traffic fumes and generators release smoke and fine particles — air pollution.", lvl: 1 },
  { q: ["People in Makoko build their homes on what, to keep them above the water?"], a: ["stilts", "stilt", "wooden stilts", "poles", "wooden poles"], why: "Makoko's houses stand on wooden stilts driven into the lagoon bed.", lvl: 1 },
  { q: ["How do most children in Makoko travel to school and market?"], a: ["canoe", "canoes", "boat", "boats", "by canoe", "by boat"], why: "Makoko's 'streets' are water channels, so people travel by canoe.", lvl: 1 },
  { q: ["What has been the main traditional job of people living in Makoko?"], a: ["fishing", "fishermen", "fish", "fisherman"], why: "Makoko began as a fishing village; fishing and smoking fish are still key jobs.", lvl: 2 },
  { q: ["People who search rubbish dumps for items to sell or recycle are called waste ___ (one word)."], a: ["pickers", "picker", "waste pickers", "scavengers"], why: "Waste pickers earn a living sorting recyclables at sites like Olusosun — risky but useful work.", lvl: 2 },
  { q: ["Many homes in Makoko have no toilets connected to sewers, so waste goes into the lagoon. This is a problem of poor ___."], a: ["sanitation"], why: "Poor sanitation spreads water-borne diseases such as cholera.", lvl: 2 },
  { q: ["Much of Lagos is only a few metres above sea level. Which long-term global change threatens it?", "Why might parts of coastal Lagos be under water by 2100? Name the global change."], a: ["sea-level rise", "sea level rise", "rising sea levels", "rising sea level", "rising seas"], why: "Lagos is low-lying and coastal, so global sea-level rise increases flooding risk.", lvl: 2 },
  { q: ["Is the wettest month in Lagos usually June or December?"], a: ["June"], why: "Lagos's main rainy season peaks around June; December is in the dry season.", lvl: 2, trap: { a: ["December"], fb: "December is in Lagos's dry season. Rain peaks around June." } },
  { q: ["Small plastic bags of drinking water sold widely on Lagos streets are called ___ water."], a: ["sachet", "sachet water", "pure water", "pure"], why: "Without reliable piped water, many people drink 'sachet' (or 'pure') water — and the empty bags add to litter and blocked drains.", lvl: 3 },
  { q: ["What is the term for authorities forcibly removing people from an informal settlement, as at Otodo-Gbame in 2017?"], a: ["eviction", "forced eviction", "evictions"], why: "Forced evictions clear land for development but can leave thousands homeless.", lvl: 3 },
  { q: ["Too many vehicles for the road space, causing slow traffic, is called traffic ___.", "Give the general geographical term for roads overloaded with vehicles."], a: ["congestion", "traffic congestion"], why: "Congestion happens when road space can't keep up with the number of vehicles.", lvl: 2 },
  { q: ["A sudden loss of electricity from the grid is called a power ___ (one word).", "When the grid fails and the lights go out, Lagosians call it a power…?"], a: ["cut", "power cut", "outage", "power outage", "blackout", "failure"], why: "Frequent power cuts are why so many homes and businesses run generators.", lvl: 2 },
  { q: ["Many Lagos workers find only a few hours of casual work when they want a full-time job. What is this called?"], a: ["underemployment", "underemployed"], why: "Underemployment = having some work, but less than you need or want.", lvl: 3, trap: { a: ["unemployment"], fb: "Unemployment means NO work. Having some, but not enough, is underemployment." } },
  { q: ["Name the water-borne disease, beginning with C, that spreads where drinking water mixes with sewage."], a: ["cholera"], why: "Cholera spreads through water contaminated with sewage — a risk where sanitation is poor.", lvl: 2 },
  { q: ["People who travel each day between home and work are called what?", "Lagosians who travel every day from mainland homes to offices on the islands are called ___."], a: ["commuters", "commuter"], why: "Commuters make the daily journey that clogs Lagos's bridges at rush hour.", lvl: 2 },
  { q: ["A site where rubbish is piled up or buried, like Olusosun, is called a ___ site.", "What is the general term for a large rubbish dump where waste is buried or piled in the ground?"], a: ["landfill", "landfill site", "dump", "rubbish dump"], why: "Landfills like Olusosun release methane and leachate, polluting air and groundwater.", lvl: 2 },
  { q: ["Because so many migrants are young adults, does Lagos have a youthful or an ageing population?"], a: ["youthful", "young"], why: "Young migrants and high birth rates give Lagos a youthful population with a wide-based pyramid.", lvl: 3, trap: { a: ["ageing", "aging", "old"], fb: "Most migrants are young adults, and they have children in the city — so the population is youthful." } },
  { q: ["Gridlock at Apapa is caused mainly by lorries queuing for what?"], a: ["port", "the port", "docks", "the docks"], why: "Too many lorries queue on the roads to load and unload at Apapa's ports.", lvl: 3 },
  { q: ["Heavy rain floods Lagos streets partly because rubbish blocks what?", "Which part of the city's infrastructure gets blocked by plastic waste, making floods worse?"], a: ["drains", "drain", "gutters", "storm drains", "drainage"], why: "Plastic and other waste clog drains and canals, so rainwater cannot escape.", lvl: 2 },
  { q: ["Building new homes on wetlands and filling in creeks removes land that soaks up water. Which hazard does this increase?"], a: ["flooding", "floods", "flood"], why: "Wetlands store rainwater; building on them increases surface run-off and flooding.", lvl: 3 },
];

const SOLUTIONS: Fact[] = [
  { q: ["What does BRT stand for?", "Lagos runs a BRT scheme. Write out what BRT stands for."], a: ["bus rapid transit"], why: "BRT = Bus Rapid Transit: buses on dedicated lanes, with stations and fixed stops.", lvl: 1 },
  { q: ["In which year did the Lagos BRT bus scheme open?"], a: ["2008"], why: "The first Lagos BRT route opened in 2008, from Mile 12 towards Lagos Island.", lvl: 3 },
  { q: ["What colour is the Lagos Rail Mass Transit line that opened in 2023, starting at Marina?"], a: ["blue", "Blue Line"], why: "The Blue Line opened in 2023, running west from Marina on Lagos Island.", lvl: 2, trap: { a: ["red", "Red Line"], fb: "The Red Line opened in 2024. The 2023 line from Marina is the Blue Line." } },
  { q: ["What colour is the Lagos rail line that opened in 2024, running north from the city towards Agbado?"], a: ["red", "Red Line"], why: "The Red Line opened in 2024, mostly along the existing railway corridor to the north.", lvl: 2, trap: { a: ["blue", "Blue Line"], fb: "The Blue Line opened first, in 2023. The 2024 line is the Red Line." } },
  { q: ["In which year did the Lagos Blue Line rail open to passengers?"], a: ["2023"], why: "The Blue Line's first phase opened in 2023.", lvl: 3, trap: { a: ["2024"], fb: "2024 is the Red Line. The Blue Line opened in 2023." } },
  { q: ["Phase 1 of the Blue Line runs from Marina to which stop on the mainland?"], a: ["Mile 2", "Mile two"], why: "Phase 1 of the Blue Line runs from Marina to Mile 2.", lvl: 3 },
  { q: ["Name the new business district being built on land reclaimed from the Atlantic next to Victoria Island.", "Which planned 'new city' of luxury towers is rising on reclaimed land south of Victoria Island?"], a: ["Eko Atlantic", "Eko Atlantic City"], why: "Eko Atlantic is being built on land reclaimed from the Atlantic, protected by a sea wall.", lvl: 1 },
  { q: ["The sea wall protecting Eko Atlantic is nicknamed 'the Great Wall of ___'."], a: ["Lagos"], why: "The 'Great Wall of Lagos' is a sea wall of huge concrete blocks protecting Eko Atlantic from Atlantic storms.", lvl: 3 },
  { q: ["Creating new land by pumping sand into the sea, as at Eko Atlantic and in Singapore, is called land ___."], a: ["reclamation", "land reclamation"], why: "Land reclamation creates new land from the sea — Singapore has grown by about a quarter this way.", lvl: 1 },
  { q: ["Critics argue Eko Atlantic mainly benefits which group — the rich or the poor?"], a: ["rich", "the rich", "wealthy", "the wealthy", "rich people", "wealthy people"], why: "Its luxury flats and offices are far too expensive for most Lagosians, so critics say it mainly serves the wealthy.", lvl: 2, trap: { a: ["poor", "the poor", "poor people"], fb: "Its homes cost far more than most Lagosians earn — critics say it serves the rich." } },
  { q: ["Name the Lagos State agency responsible for collecting waste (an acronym beginning with L)."], a: ["LAWMA"], why: "LAWMA (Lagos Waste Management Authority) organises waste collection and recycling.", lvl: 3 },
  { q: ["Name the Lagos State agency (an acronym) that plans the BRT and the rail lines."], a: ["LAMATA"], why: "LAMATA (Lagos Metropolitan Area Transport Authority) runs the BRT and rail projects.", lvl: 3, trap: { a: ["LAWMA"], fb: "LAWMA handles waste. Transport is LAMATA." } },
  { q: ["Name the Lagos social enterprise, founded in 2012, that collected recyclables by cargo bicycle and rewarded households with points."], a: ["Wecyclers"], why: "Wecyclers paid families in reward points for sorted recyclables, cutting waste and creating jobs.", lvl: 3 },
  { q: ["Improving an informal settlement where it stands — adding toilets, drains and paths — instead of demolishing it is called in-situ ___."], a: ["upgrading", "slum upgrading", "in-situ upgrading"], why: "Upgrading keeps communities together and is usually cheaper and fairer than eviction.", lvl: 2 },
  { q: ["Projects planned and carried out by local residents themselves are described as ___-led."], a: ["community", "community-led"], why: "Community-led schemes use local knowledge, so they tend to meet real needs.", lvl: 2 },
  { q: ["A road lane that only buses may use, as on the Lagos BRT, is called a dedicated bus ___."], a: ["lane"], why: "Dedicated bus lanes let BRT buses bypass the go-slow.", lvl: 1 },
  { q: ["Turning waste such as plastic bottles into new products is called what?", "Wecyclers and LAWMA schemes collect plastic so it can be made into new products. What is this called?"], a: ["recycling"], why: "Recycling reduces the waste sent to dumps like Olusosun.", lvl: 1 },
  { q: ["Rotting rubbish in a landfill gives off a gas that can be captured to make electricity. Name the gas."], a: ["methane"], why: "Methane from landfill is a strong greenhouse gas — capturing it cuts emissions AND makes power.", lvl: 2, trap: { a: ["carbon dioxide", "CO2"], fb: "Rotting waste without oxygen mainly makes methane." } },
  { q: ["Name the stored-value smart card used to pay fares on Lagos BRT buses and trains, named after a shell once used as money."], a: ["Cowry", "Cowry card"], why: "The Cowry card lets passengers tap to pay, speeding up boarding.", lvl: 3 },
  { q: ["Lagos is expanding ferries across its lagoon and creeks. Which kind of transport is this?"], a: ["water transport", "water", "ferry", "ferries"], why: "Water transport uses the lagoon as a 'free road', taking pressure off jammed streets.", lvl: 2 },
  { q: ["Large projects planned and paid for by government, like the Blue Line, are called ___ schemes.", "Is a big government-led rail project a top-down or a bottom-up scheme?"], a: ["top-down", "top down"], why: "Top-down schemes are planned by governments or big organisations; they can be large but may ignore local needs.", lvl: 2, trap: { a: ["bottom-up", "bottom up"], fb: "Bottom-up schemes come from local communities. Government-led ones are top-down." } },
  { q: ["Small schemes started by local communities themselves are called ___ schemes.", "Is a community group building its own toilets and drains a top-down or a bottom-up scheme?"], a: ["bottom-up", "bottom up"], why: "Bottom-up schemes are led by local people, so they tend to fit real needs and cost less.", lvl: 2, trap: { a: ["top-down", "top down"], fb: "Top-down means government-led. A community-led scheme is bottom-up." } },
  { q: ["Linking buses, trains and ferries with shared stations and one payment card is called ___ transport.", "When different types of public transport connect smoothly with each other, the system is described as ___."], a: ["integrated", "integrated transport"], why: "Integrated transport makes switching between bus, rail and ferry easy, so more people leave their cars.", lvl: 2 },
  { q: ["Which salt-tolerant coastal trees, growing along lagoon shores, help protect against flooding and storms?", "Name the coastal forests whose tangled roots trap mud and absorb storm waves around Lagos's lagoons."], a: ["mangroves", "mangrove", "mangrove forest", "mangrove forests"], why: "Mangroves absorb wave energy and store floodwater — a natural flood defence.", lvl: 2 },
  { q: ["Eko Atlantic is built by private developers working with the state government. This is a public–___ partnership."], a: ["private"], why: "A public–private partnership (PPP) shares the cost and risk between government and companies.", lvl: 3 },
  { q: ["Making walking and cycling easier and safer — pavements, crossings, cycle lanes — encourages active ___."], a: ["travel", "active travel", "transport"], why: "Active travel cuts congestion and pollution for short trips.", lvl: 2 },
  { q: ["Which renewable energy source could replace diesel generators on sunny Lagos rooftops?"], a: ["solar", "solar power", "solar energy", "solar panels"], why: "Lagos is sunny all year, so rooftop solar could cut generator use and air pollution.", lvl: 1 },
  { q: ["Charging drivers to use busy roads at peak times (like Singapore's ERP) is called road ___."], a: ["pricing", "road pricing"], why: "Road pricing discourages unnecessary car trips, cutting congestion.", lvl: 2 },
  { q: ["A judgement of whether a solution helps social, economic AND environmental goals for the future is a test of whether it is ___.", "A scheme that meets people's needs today without harming future generations is called ___."], a: ["sustainable"], why: "A sustainable solution meets today's needs without harming future generations.", lvl: 2 },
];

// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  {
    id: "lagos.location-facts",
    topicId: "lagos",
    title: "Recall: where Lagos is and why it matters",
    level: 1,
    guideRef: "lagos-location-growth",
    generate(rng, tier) {
      return fromBank(LOCATION, rng, tier, "Picture the map: West African coast, Atlantic to the south, lagoon at the centre.");
    },
  },
  {
    id: "lagos.push-or-pull",
    topicId: "lagos",
    title: "Push factor or pull factor?",
    level: 1,
    guideRef: "push-pull",
    generate(rng, tier) {
      const isPush = rng.bool();
      const f = rng.pick(isPush ? PUSH_FACTORS : PULL_FACTORS);
      const name = rng.pick(["Tunde", "Aisha", "Chidi", "Amaka", "Ibrahim", "Ngozi", "Femi", "Zainab"]);
      const prompt =
        tier === 1
          ? `A family is thinking of moving from a rural village to Lagos. Is this a **push** or a **pull** factor: "${f}"?`
          : tier === 2
            ? `For someone moving from rural Nigeria to Lagos, classify this factor as push or pull: "${f}".`
            : `${name} is deciding whether to leave a village in northern Nigeria for Lagos. One reason is "${f}". Is that a push factor or a pull factor? (Ask: is it about the place being LEFT or the place being CHOSEN?)`;
      const ans = isPush ? "push" : "pull";
      return {
        prompt,
        answer: { type: "text", accept: [ans, `${ans} factor`], display: `${ans} factor` },
        solution: [
          isPush
            ? `This describes a problem in the **village** (the place being left), so it pushes people away — a **push factor**.`
            : `This describes an attraction of **Lagos** (the destination), so it pulls people in — a **pull factor**.`,
        ],
        hint: "Push = a problem where you live now. Pull = an attraction of where you might go.",
        traps: [
          {
            spec: { type: "text" as const, accept: [isPush ? "pull" : "push"] },
            feedback: isPush
              ? "Check WHERE it happens: this is a problem back in the village, so it pushes people out."
              : "Check WHERE it happens: this is something Lagos offers, so it pulls people in.",
          },
        ],
      };
    },
  },
  {
    id: "lagos.migration-terms",
    topicId: "lagos",
    title: "Key terms: migration and urban growth",
    level: 2,
    guideRef: "push-pull",
    generate(rng, tier) {
      return fromBank(TERMS, rng, tier, "Is it about a movement, a cause of moving, or a result of lots of people moving?");
    },
  },
  {
    id: "lagos.challenge-facts",
    topicId: "lagos",
    title: "Recall: challenges of life in Lagos",
    level: 2,
    guideRef: "lagos-challenges",
    generate(rng, tier) {
      return fromBank(CHALLENGES, rng, tier, "Think about housing, transport, waste, water and power, and flooding.");
    },
  },
  {
    id: "lagos.solution-facts",
    topicId: "lagos",
    title: "Recall: schemes to improve life in Lagos",
    level: 2,
    guideRef: "lagos-solutions",
    generate(rng, tier) {
      return fromBank(SOLUTIONS, rng, tier, "Sort the schemes: transport (BRT, rail), housing, waste, new land.");
    },
  },
  {
    id: "lagos.density",
    topicId: "lagos",
    title: "Calculate population density of a crowded district",
    level: 1,
    guideRef: "lagos-challenges",
    generate(rng, tier) {
      // Made-up districts: density = people ÷ area.
      const place = rng.pick(["a stilt-house settlement on a lagoon", "a crowded market district", "a riverside neighbourhood", "an informal settlement on the city edge", "a fishing community on a creek"]);
      if (tier === 1) {
        const area = rng.pick([2, 4, 5, 8, 10]);
        const d = rng.pick([5000, 8000, 10000, 12000, 15000, 20000, 25000]);
        const pop = area * d;
        return {
          prompt: `In a made-up example, ${place} has ${big(pop)} people living in ${area} km². Work out its population density in people per km².`,
          answer: { type: "number", value: d },
          solution: [`Density = population ÷ area`, `= ${big(pop)} ÷ ${area} = ${big(d)} people per km².`],
          hint: "Density = people ÷ area.",
          traps: area !== 1 ? [{ spec: { type: "number" as const, value: clean(area / pop) }, feedback: "You divided area by people. Density is PEOPLE ÷ AREA." }] : undefined,
        };
      }
      if (tier === 2) {
        const area = rng.pick([1.5, 2.5, 3.2, 0.8, 1.2, 4.5, 6.4]);
        const pop = rng.int(30, 160) * 1000;
        const d = roundTo(pop / area, 0);
        return {
          prompt: `Imagine ${place} with ${big(pop)} people in ${num(area)} km². Calculate its population density in people per km², to the nearest whole number.`,
          answer: { type: "number", value: d },
          solution: [`Density = ${big(pop)} ÷ ${num(area)}`, `= ${big(d)} people per km² (nearest whole number).`],
          hint: "Divide the number of people by the area in km².",
        };
      }
      // tier 3: area in hectares, compare with Singapore (≈ 8,000 per km²)
      const ha = rng.pick([40, 60, 75, 80, 120, 150, 250]);
      const pop = rng.int(20, 90) * 1000;
      const km2 = clean(ha / 100);
      const d = roundTo(pop / km2, 0);
      const times = roundTo(d / 8000, 1);
      return {
        prompt: `Imagine ${place} covering ${ha} hectares with ${big(pop)} residents. (100 hectares = 1 km².) Singapore's density is about 8,000 people per km². How many times denser than Singapore is the settlement? Give your answer to 1 decimal place.`,
        answer: { type: "number", value: times },
        solution: [
          `Area = ${ha} ÷ 100 = ${num(km2)} km².`,
          `Density = ${big(pop)} ÷ ${num(km2)} = ${big(d)} people per km² (nearest whole).`,
          `${big(d)} ÷ 8,000 = ${num(times)} times Singapore's density.`,
        ],
        hint: "Convert hectares to km² first, then find density, then compare by dividing.",
        traps: [{ spec: { type: "number" as const, value: roundTo(pop / ha / 8000, 1) }, feedback: "You used hectares as if they were km². Divide by 100 first." }].filter((t) => t.spec.value !== times),
      };
    },
  },
  {
    id: "lagos.average-speed",
    topicId: "lagos",
    title: "Calculate average speed in Lagos traffic",
    level: 1,
    guideRef: "lagos-challenges",
    generate(rng, tier) {
      const mode = rng.pick(["a danfo minibus", "a car", "a BRT bus", "a delivery van", "a taxi"]);
      if (tier === 1) {
        let v = 10, t = 60, d = 10;
        for (let i = 0; i < 50; i++) {
          v = rng.int(4, 30);
          t = rng.pick([20, 30, 40, 45, 60, 90, 120]);
          d = (v * t) / 60;
          if (Number.isInteger(d)) break;
        }
        if (!Number.isInteger(d)) { t = 60; d = v; }
        return {
          prompt: `In a go-slow, ${mode} travels ${d} km in ${t} minutes. What is its average speed in km/h?`,
          answer: { type: "number", value: v },
          solution: [`Time in hours = {{${t}/60}} h.`, `Speed = distance ÷ time = ${d} × 60 ÷ ${t} = ${v} km/h.`],
          hint: "Change the minutes into hours first, then speed = distance ÷ time.",
          traps: [{ spec: { type: "number" as const, value: roundTo(d / t, 2) }, feedback: "That's km per MINUTE. Convert the time to hours (÷ 60) first." }].filter((x) => x.spec.value !== v),
        };
      }
      if (tier === 2) {
        const d = rng.int(50, 250) / 10;
        const t = rng.pick([35, 50, 55, 70, 75, 80, 95, 100, 110, 130]);
        const v = roundTo((d * 60) / t, 1);
        return {
          prompt: `${mode[0].toUpperCase() + mode.slice(1)} takes ${t} minutes to cover ${num(d)} km of a Lagos commute. Work out its average speed in km/h, to 1 decimal place.`,
          answer: { type: "number", value: v },
          solution: [`Speed = distance ÷ time in hours = ${num(d)} ÷ {{${t}/60}}`, `= ${num(d)} × 60 ÷ ${t} = ${num(v)} km/h (1 d.p.).`],
          hint: "Speed (km/h) = distance × 60 ÷ minutes.",
        };
      }
      // tier 3: two-leg journey
      const walk = rng.int(10, 25);
      const walkKm = rng.pick([0.5, 1, 1.5]);
      const bus = rng.int(40, 110);
      const busKm = rng.int(80, 220) / 10;
      const totalKm = clean(walkKm + busKm);
      const totalMin = walk + bus;
      const v = roundTo((totalKm * 60) / totalMin, 1);
      return {
        prompt: `Amaka walks ${num(walkKm)} km to the bus stop (${walk} minutes), then rides ${num(busKm)} km on a bus (${bus} minutes). What is her average speed for the whole journey, in km/h to 1 decimal place?`,
        answer: { type: "number", value: v },
        solution: [
          `Total distance = ${num(walkKm)} + ${num(busKm)} = ${num(totalKm)} km.`,
          `Total time = ${walk} + ${bus} = ${totalMin} minutes = {{${totalMin}/60}} h.`,
          `Average speed = ${num(totalKm)} × 60 ÷ ${totalMin} = ${num(v)} km/h.`,
        ],
        hint: "Average speed = TOTAL distance ÷ TOTAL time. Don't average the two speeds.",
        traps: [
          { spec: { type: "number" as const, value: roundTo(((walkKm * 60) / walk + (busKm * 60) / bus) / 2, 1) }, feedback: "You averaged the two speeds. Use total distance ÷ total time instead." },
        ].filter((x) => Math.abs(x.spec.value - v) > 0.05),
      };
    },
  },
  {
    id: "lagos.commute-time",
    topicId: "lagos",
    title: "Commute time: go-slow versus BRT and rail",
    level: 2,
    guideRef: "lagos-challenges",
    generate(rng, tier) {
      if (tier === 1) {
        const v = rng.pick([6, 10, 12, 15, 20, 30]);
        const d = rng.int(3, 24);
        const mins = (d * 60) / v;
        return {
          prompt: `In a go-slow, traffic moves at an average of ${v} km/h. How many minutes does a ${d} km journey take?`,
          answer: { type: "number", value: mins },
          solution: [`Time = distance ÷ speed = ${d} ÷ ${v} = {{${d}/${v}}} hours.`, `× 60 = ${num(mins)} minutes.`],
          hint: "Time = distance ÷ speed gives hours; multiply by 60 for minutes.",
          traps: [{ spec: { type: "number" as const, value: roundTo(d / v, 2) }, feedback: "That's the time in HOURS. Multiply by 60 for minutes." }].filter((x) => x.spec.value !== mins),
        };
      }
      if (tier === 2) {
        const d = rng.int(8, 25);
        const slow = rng.pick([6, 8, 10, 12]);
        const fast = rng.pick([20, 24, 25, 30]);
        const saved = roundTo((d * 60) / slow - (d * 60) / fast, 0);
        return {
          prompt: `A ${d} km commute takes place at ${slow} km/h in a go-slow, or at ${fast} km/h on a BRT bus in its own lane. How many minutes does the BRT save on one trip? Give your answer to the nearest minute.`,
          answer: { type: "number", value: saved },
          solution: [
            `Go-slow: ${d} ÷ ${slow} × 60 = ${num(roundTo((d * 60) / slow, 1))} min.`,
            `BRT: ${d} ÷ ${fast} × 60 = ${num(roundTo((d * 60) / fast, 1))} min.`,
            `Saving ≈ ${saved} minutes.`,
          ],
          hint: "Work out each journey time in minutes, then subtract.",
        };
      }
      const d = rng.int(10, 30);
      const slow = rng.pick([6, 8, 10]);
      const fast = rng.pick([30, 35, 40]);
      const days = rng.pick([5, 6]);
      const perTrip = (d * 60) / slow - (d * 60) / fast;
      const hours = roundTo((perTrip * 2 * days) / 60, 1);
      return {
        prompt: `Femi commutes ${d} km each way, ${days} days a week. By road in the go-slow he averages ${slow} km/h; by the new rail line he would average ${fast} km/h (including waiting). How many hours a week would rail save him? Give your answer to 1 decimal place.`,
        answer: { type: "number", value: hours },
        solution: [
          `One trip by road: ${d} ÷ ${slow} × 60 = ${num(roundTo((d * 60) / slow, 2))} min; by rail: ${d} ÷ ${fast} × 60 = ${num(roundTo((d * 60) / fast, 2))} min.`,
          `Saving per trip = ${num(roundTo(perTrip, 2))} min.`,
          `Per week: × 2 trips × ${days} days = ${num(roundTo(perTrip * 2 * days, 1))} min = ${num(hours)} hours.`,
        ],
        hint: "Find the saving for one trip, then remember there are TWO trips a day.",
        traps: [{ spec: { type: "number" as const, value: roundTo((perTrip * days) / 60, 1) }, feedback: "Don't forget the journey home — that's 2 trips a day." }].filter((x) => x.spec.value !== hours),
      };
    },
  },
  {
    id: "lagos.percent-growth",
    topicId: "lagos",
    title: "Percentage growth of a fast-growing district",
    level: 2,
    guideRef: "lagos-location-growth",
    generate(rng, tier) {
      const where = rng.pick(["a suburb on the edge of a megacity", "a new town on the city fringe", "a lagoon-side district", "a growing market town", "a district near a new port"]);
      if (tier === 1) {
        const start = rng.pick([20, 40, 50, 80, 100, 200]) * 1000;
        const pct = rng.pick([10, 20, 25, 30, 40, 50, 60, 75, 100]);
        const end = (start * (100 + pct)) / 100;
        return {
          prompt: `Imagine ${where} that grew from ${big(start)} to ${big(end)} people. What is the percentage increase?`,
          answer: { type: "number", value: pct },
          solution: [`Increase = ${big(end)} − ${big(start)} = ${big(end - start)}.`, `% increase = ${big(end - start)} ÷ ${big(start)} × 100 = ${pct}%.`],
          hint: "% change = change ÷ ORIGINAL × 100.",
          traps: [{ spec: { type: "number" as const, value: end - start }, feedback: "That's the increase in people. Divide by the original and × 100 for a percentage." }],
        };
      }
      if (tier === 2) {
        const start = rng.int(30, 150) * 1000;
        const end = start + rng.int(5, 90) * 1000;
        const pct = roundTo(((end - start) / start) * 100, 1);
        const wrong = roundTo(((end - start) / end) * 100, 1);
        return {
          prompt: `In a made-up example, over ten years ${where} grew from ${big(start)} to ${big(end)} people. Calculate the percentage increase, to 1 decimal place.`,
          answer: { type: "number", value: pct },
          solution: [`Change = ${big(end - start)}.`, `${big(end - start)} ÷ ${big(start)} × 100 = ${num(pct)}% (1 d.p.).`],
          hint: "Divide the change by the STARTING population.",
          traps: wrong !== pct ? [{ spec: { type: "number" as const, value: wrong }, feedback: "You divided by the NEW population. Always divide by the original." }] : undefined,
        };
      }
      // tier 3: compound growth for n years
      const start = rng.int(20, 90) * 1000;
      const r = rng.pick([3, 4, 5, 6]);
      const n = rng.pick([2, 3]);
      const endRounded = roundTo(start * Math.pow(1 + r / 100, n), 0);
      const linear = start + (start * r * n) / 100;
      return {
        prompt: `Imagine ${where} of ${big(start)} people growing by ${r}% every year. What will its population be after ${n} years? Give your answer to the nearest whole number.`,
        answer: { type: "number", value: endRounded, tolerance: 1 },
        solution: [
          `Each year multiply by 1.0${r}.`,
          `${big(start)} × {{1.0${r}^${n}}} = ${big(endRounded)} people (nearest whole).`,
          `Growth compounds: each year's ${r}% is taken of a bigger number.`,
        ],
        hint: "Multiply by 1.0r once for each year — don't just add r% of the start each time.",
        traps: Math.abs(linear - endRounded) > 1 ? [{ spec: { type: "number" as const, value: linear }, feedback: "You added the same amount each year. Each year's growth is a % of the NEW, bigger total." }] : undefined,
      };
    },
  },
  {
    id: "lagos.doubling-time",
    topicId: "lagos",
    title: "Doubling time with the rule of 70",
    level: 3,
    guideRef: "lagos-location-growth",
    generate(rng, tier) {
      if (tier === 3 && rng.bool()) {
        const years = rng.pick([12, 14, 15, 16, 18, 20, 25, 28, 35]);
        const r = roundTo(70 / years, 1);
        return {
          prompt: `A city's population doubles in ${years} years. Using the rule of 70, estimate its annual growth rate as a percentage, to 1 decimal place.`,
          answer: { type: "number", value: r },
          solution: [`Rule of 70: doubling time ≈ 70 ÷ growth rate, so growth rate ≈ 70 ÷ doubling time.`, `70 ÷ ${years} = ${num(r)}% per year.`],
          hint: "Rearrange: rate = 70 ÷ doubling time.",
        };
      }
      const rates = tier === 1 ? [1, 2, 3.5, 5, 7, 10, 14] : [1.5, 2.5, 3, 3.5, 4, 4.5, 6, 8, 9];
      const r = rng.pick(rates);
      const t = roundTo(70 / r, 0);
      const ctx = rng.pick(["a fast-growing city", "an imaginary megacity", "a made-up coastal city", "a growing urban area"]);
      return {
        prompt: `${ctx[0].toUpperCase() + ctx.slice(1)} grows by ${num(r)}% a year. Using the rule of 70, about how many years will it take to double in size? ${Number.isInteger(70 / r) ? "" : "Give your answer to the nearest whole year."}`.trim(),
        answer: { type: "number", value: t },
        solution: [`Doubling time ≈ 70 ÷ growth rate (%)`, `= 70 ÷ ${num(r)} ≈ ${t} years.`],
        hint: "Divide 70 by the percentage growth rate.",
        traps: [{ spec: { type: "number" as const, value: roundTo(100 / r, 0) }, feedback: "Use 70, not 100 — growth compounds, so doubling comes sooner than 100 ÷ rate." }].filter((x) => x.spec.value !== t),
      };
    },
  },
  {
    id: "lagos.waste-tonnes",
    topicId: "lagos",
    title: "Waste: from kilograms per person to tonnes",
    level: 3,
    guideRef: "lagos-challenges",
    generate(rng, tier) {
      if (tier === 1) {
        const people = rng.pick([10, 20, 25, 40, 50, 80, 100, 200]) * 1000;
        const kg = rng.pick([0.5, 1, 1.5, 2]);
        const t = clean((people * kg) / 1000);
        return {
          prompt: `Imagine a district of ${big(people)} people, each producing ${num(kg)} kg of rubbish a day. How many tonnes of rubbish is that per day? (1 tonne = 1,000 kg)`,
          answer: { type: "number", value: t },
          solution: [`${big(people)} × ${num(kg)} = ${big(people * kg)} kg.`, `÷ 1,000 = ${big(t)} tonnes per day.`],
          hint: "Multiply people by kg each, then ÷ 1,000 to get tonnes.",
          traps: [{ spec: { type: "number" as const, value: clean(people * kg) }, feedback: "That's in kilograms. Divide by 1,000 for tonnes." }],
        };
      }
      const people = rng.int(50, 400) * 1000;
      const kg = rng.pick([0.4, 0.5, 0.6, 0.7, 0.8]);
      const pct = rng.pick([10, 15, 20, 25, 30, 40]);
      const perDay = clean((people * kg) / 1000);
      if (tier === 2) {
        const rec = roundTo((perDay * pct) / 100, 1);
        return {
          prompt: `Imagine a district of ${big(people)} people making ${num(kg)} kg of waste each per day. A recycling scheme collects ${pct}% of it. How many tonnes per day are recycled? Give your answer to 1 decimal place.`,
          answer: { type: "number", value: rec },
          solution: [`Total = ${big(people)} × ${num(kg)} ÷ 1,000 = ${num(perDay)} tonnes/day.`, `${pct}% of ${num(perDay)} = ${num(rec)} tonnes/day.`],
          hint: "Find the total tonnes first, then take the percentage.",
        };
      }
      const left = roundTo((perDay * (100 - pct) * 365) / 100, 0);
      return {
        prompt: `Imagine a district of ${big(people)} people making ${num(kg)} kg of waste each per day. ${pct}% is recycled and the rest goes to a dump. How many tonnes go to the dump in a 365-day year? Give your answer to the nearest tonne.`,
        answer: { type: "number", value: left, tolerance: 1 },
        solution: [
          `Per day: ${big(people)} × ${num(kg)} ÷ 1,000 = ${num(perDay)} tonnes.`,
          `To the dump: ${100 - pct}% of that = ${num(roundTo((perDay * (100 - pct)) / 100, 2))} tonnes/day.`,
          `× 365 = ${big(left)} tonnes a year.`,
        ],
        hint: "Daily total → share NOT recycled → × 365.",
        traps: [{ spec: { type: "number" as const, value: roundTo((perDay * pct * 365) / 100, 0) }, feedback: "That's the RECYCLED amount. The dump gets the rest (100% − recycled %)." }].filter((x) => Math.abs(x.spec.value - left) > 1),
      };
    },
  },
  {
    id: "lagos.buses-needed",
    topicId: "lagos",
    title: "Plan a BRT route: how many buses?",
    level: 3,
    guideRef: "lagos-solutions",
    generate(rng, tier) {
      const cap = rng.pick([60, 70, 80, 100]);
      if (tier === 1) {
        const buses = rng.int(5, 40);
        const extra = rng.int(1, cap - 1);
        const pax = (buses - 1) * cap + extra;
        return {
          prompt: `At rush hour, ${big(pax)} passengers want to board a BRT route in one hour. Each bus carries ${cap} people and makes one trip an hour. How many buses are needed so everyone can travel?`,
          answer: { type: "number", value: buses },
          solution: [`${big(pax)} ÷ ${cap} = ${num(roundTo(pax / cap, 2))}.`, `You can't run part of a bus, so round UP: ${buses} buses.`],
          hint: "Divide, then think: should you round up or down?",
          traps: [{ spec: { type: "number" as const, value: buses - 1 }, feedback: "Rounding down leaves some passengers stranded — round UP." }],
        };
      }
      const trips = tier === 2 ? rng.pick([2, 3]) : rng.pick([2, 3, 4]);
      const buses = rng.int(10, 60);
      const perBus = cap * trips;
      const pax = (buses - 1) * perBus + rng.int(1, perBus - 1);
      if (tier === 2) {
        return {
          prompt: `${big(pax)} passengers an hour use a BRT corridor at peak time. Each bus holds ${cap} people and can make ${trips} trips an hour. What is the smallest number of buses needed?`,
          answer: { type: "number", value: buses },
          solution: [`One bus carries ${cap} × ${trips} = ${perBus} people an hour.`, `${big(pax)} ÷ ${perBus} = ${num(roundTo(pax / perBus, 2))} → round up to ${buses} buses.`],
          hint: "First find how many people ONE bus carries in an hour.",
          traps: [{ spec: { type: "number" as const, value: Math.ceil(pax / cap) }, feedback: "Each bus makes several trips an hour — multiply capacity by trips first." }].filter((x) => x.spec.value !== buses),
        };
      }
      const cars = rng.pick([1.2, 1.5, 2]);
      const carCount = roundTo(pax / cars, 0);
      return {
        prompt: `${big(pax)} commuters an hour travel along a corridor. If they all drove, cars would carry ${num(cars)} people each on average. How many cars would that be, to the nearest whole number? (Compare this with the buses each holding ${cap}.)`,
        answer: { type: "number", value: carCount },
        solution: [`${big(pax)} ÷ ${num(cars)} = ${big(carCount)} cars (nearest whole).`, `The same people would fit in about ${Math.ceil(pax / perBus)} buses making ${trips} trips an hour — which is why BRT cuts congestion.`],
        hint: "Number of cars = people ÷ people per car.",
        traps: [{ spec: { type: "number" as const, value: roundTo(pax * cars, 0) }, feedback: "You multiplied. Fewer people per car means MORE cars: divide." }],
      };
    },
  },
];
