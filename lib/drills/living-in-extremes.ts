// Skill drills — Living & Travelling in Extreme Environments.
// Retrieval fact banks (Knowledge-Organiser self-quizzing) + numeric skills generators.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { num, big, roundTo, clean } from "./helpers.ts";

const TOPIC = "living-in-extremes";

// ---------------------------------------------------------------------------
// Fact-bank helper
// ---------------------------------------------------------------------------

interface Fact {
  /** One or more phrasings of the same question (exactly one right term). */
  q: string[];
  /** Accepted answers; the first is shown as the answer. */
  a: string[];
  /** Why — becomes the solution. */
  why: string;
  /** 1 = core, 2 = typical, 3 = stretch. */
  lvl: 1 | 2 | 3;
  hint?: string;
  /** Predictable wrong answers. */
  traps?: { a: string; fb: string }[];
}

function fromBank(bank: Fact[], rng: Rng, tier: 1 | 2 | 3, defaultHint: string): DrillItem {
  const pool = bank.filter((f) => (tier === 1 ? f.lvl <= 2 : tier === 3 ? f.lvl >= 2 : true));
  const f = rng.pick(pool);
  const frame = rng.pick(["", "Quick recall — ", "Knowledge Organiser check: "]);
  const prompt = frame + rng.pick(f.q);
  const traps: Trap[] = (f.traps ?? [])
    .filter((t) => !f.a.some((x) => x.toLowerCase() === t.a.toLowerCase()))
    .map((t) => ({ spec: { type: "text", accept: [t.a] }, feedback: t.fb }));
  return {
    prompt,
    answer: { type: "text", accept: f.a, display: f.a[0] },
    solution: [`**${f.a[0]}**`, f.why],
    hint: f.hint ?? defaultHint,
    traps: traps.length ? traps : undefined,
  };
}

// ---------------------------------------------------------------------------
// Banks
// ---------------------------------------------------------------------------

const DIFFICULTIES: Fact[] = [
  { lvl: 1, q: ["Give the term for ground that stays frozen for at least two years in a row.", "Name the permanently frozen ground found under much of northern Canada, Alaska and Siberia."], a: ["permafrost"], why: "Permafrost is ground that stays at or below 0 °C for at least two consecutive years. If a heated building thaws it, the ground turns to mud and the building sinks or tilts.", traps: [{ a: "tundra", fb: "The tundra is the treeless *biome* on top — the frozen ground underneath is permafrost." }] },
  { lvl: 2, q: ["Name the top layer of soil above permafrost that thaws each summer and refreezes each winter."], a: ["active layer"], why: "The active layer thaws in summer and refreezes in winter, so it heaves and slumps — that is why roads and buildings crack in permafrost regions." },
  { lvl: 1, q: ["Give the process that removes salt from seawater to make drinking water (used in Gulf states and at Tuas in Singapore).", "Name the technology that turns seawater into fresh water — one of Singapore's Four National Taps."], a: ["desalination", "desalinisation", "desalinization"], why: "Desalination removes salt from seawater, usually by reverse osmosis. It works anywhere on the coast but uses a lot of energy, so it is expensive.", traps: [{ a: "condensation", fb: "Condensation is vapour turning to liquid. Removing salt from seawater is desalination." }] },
  { lvl: 1, q: ["Name a fertile green spot in a desert where underground water reaches the surface."], a: ["oasis", "oases"], why: "An oasis forms where groundwater from an aquifer reaches the surface, so palms and crops can grow — desert trade routes linked oases together." },
  { lvl: 2, q: ["Give the term for a layer of rock underground that stores water, which people in deserts reach with wells."], a: ["aquifer"], why: "An aquifer is porous rock (such as sandstone) that holds groundwater. Many desert towns rely on aquifers — but some hold 'fossil water' that soaked in thousands of years ago, so water pumped out faster than it is refilled will eventually run out." },
  { lvl: 1, q: ["Name the indigenous people of Arctic Canada, Greenland and Alaska who traditionally built snow houses and hunted from kayaks."], a: ["Inuit", "Inuk"], why: "The Inuit adapted to the Arctic with snow houses (igloos) for winter travel, fur parkas and kayaks. Today most live in modern settlements but keep many traditional skills.", traps: [{ a: "Eskimo", fb: "That is an outdated outsiders' word that many Inuit consider offensive — use the people's own name, Inuit." }] },
  { lvl: 1, q: ["Name the nomadic Arab people of the deserts of the Middle East and North Africa, famous for black goat-hair tents."], a: ["Bedouin", "Bedu", "Beduin"], why: "Bedouin herders traditionally moved with camels and goats between grazing and water. Their goat-hair tents are loosely woven, so hot air escapes, but the fibres swell to keep rain out.", traps: [{ a: "Tuareg", fb: "The Tuareg are Berber people of the central Sahara. The black goat-hair tents of Arabia belong to the Bedouin." }] },
  { lvl: 2, q: ["Name the Berber people of the central Sahara (Mali, Niger, Algeria) whose men traditionally wear an indigo-dyed veil to keep out sand and sun."], a: ["Tuareg", "Touareg", "Kel Tamasheq"], why: "Tuareg men wear the tagelmust — a long indigo cloth wrapped around the head and face against sun, wind and sand. They traditionally ran camel caravans across the Sahara.", traps: [{ a: "Bedouin", fb: "The Bedouin live mainly in Arabia. The indigo-veiled people of the central Sahara are the Tuareg." }] },
  { lvl: 1, q: ["Name the ethnic group of the Khumbu region of Nepal, famous as high-altitude mountain guides on Everest."], a: ["Sherpa", "Sherpas"], why: "Sherpa people have lived at high altitude for many generations, and their bodies use oxygen very efficiently — which is why they are outstanding mountain guides and porters." },
  { lvl: 1, q: ["Give the term for a way of life in which people move from place to place with their herds to find water and grazing."], a: ["nomadic", "nomadism", "nomadic pastoralism", "nomads", "pastoral nomadism"], why: "Nomadic pastoralists (such as Bedouin and Tuareg) move with their animals because no single place has enough water and grazing all year." },
  { lvl: 1, q: ["Name the dangerous condition when body temperature falls below 35 °C."], a: ["hypothermia"], why: "Hypothermia means the body is losing heat faster than it makes it. Wet clothes and wind make it far more likely.", traps: [{ a: "frostbite", fb: "Frostbite is freezing of skin and tissue (fingers, toes, nose). A dangerously low *core* body temperature is hypothermia." }, { a: "hyperthermia", fb: "Hyper- means too hot. A body temperature that is too LOW is hypo-thermia." }] },
  { lvl: 1, q: ["Name the injury where skin and the tissue under it freeze — most often fingers, toes and nose."], a: ["frostbite"], why: "In extreme cold the body cuts blood flow to the hands and feet to protect the core, so the tissue there can freeze.", traps: [{ a: "hypothermia", fb: "Hypothermia is the whole body getting too cold. Frozen skin and tissue is frostbite." }] },
  { lvl: 1, q: ["Name the condition when the body loses more water than it takes in — the biggest health risk in a hot desert."], a: ["dehydration"], why: "In a hot desert you sweat heavily, so you can lose several litres of water a day. Dehydration causes headaches and confusion and can lead to heatstroke." },
  { lvl: 2, q: ["Name the illness caused by climbing too high too quickly, with headache, nausea and breathlessness."], a: ["altitude sickness", "acute mountain sickness", "AMS", "mountain sickness"], why: "Air pressure falls with height, so each breath contains less oxygen. Going up slowly (acclimatisation) lets the body adjust." },
  { lvl: 2, q: ["Name the painful eye injury caused by strong sunlight reflecting off snow and ice."], a: ["snow blindness", "snowblindness", "photokeratitis"], why: "Snow reflects most of the Sun's ultraviolet light, which burns the surface of the eye. Inuit traditionally carved slit snow goggles to prevent it." },
  { lvl: 1, q: ["Name the traditional Inuit shelter built from blocks of snow."], a: ["igloo", "iglu"], why: "Snow is full of trapped air, so it is a good insulator: a small lamp or body heat can keep an igloo far warmer than the air outside." },
  { lvl: 2, q: ["Buildings in permafrost towns are raised above the ground so their heat cannot thaw it. What are these supports called?", "Name the posts driven into frozen ground that lift buildings above permafrost so air can flow underneath."], a: ["stilts", "piles", "piling", "pilings", "stilt"], why: "Raising buildings on stilts (piles) lets cold air flow underneath, so the heat from the building does not melt the permafrost and make it sink." },
  { lvl: 2, q: ["Name the long period of continuous darkness in winter north of the Arctic Circle (or south of the Antarctic Circle)."], a: ["polar night"], why: "Earth's axis is tilted, so in winter the polar regions are tilted away from the Sun and it does not rise for days or months. This affects mood, travel and work.", traps: [{ a: "midnight sun", fb: "The midnight sun is the opposite — 24-hour daylight in summer." }] },
  { lvl: 2, q: ["Name the period in polar summer when the Sun stays above the horizon for 24 hours."], a: ["midnight sun"], why: "In summer the pole is tilted towards the Sun, so it circles the sky without setting.", traps: [{ a: "polar night", fb: "Polar night is 24-hour darkness in winter — this is the summer opposite." }] },
  { lvl: 2, q: ["Give the one-word term for a place being far from other settlements, roads and services — a major difficulty of living in extreme environments."], a: ["isolation", "remoteness", "isolated", "remote"], why: "Isolation makes food, fuel and medicine expensive to bring in and makes emergencies far more dangerous because help is far away." },
  { lvl: 3, q: ["Name the traditional tower on desert buildings (e.g. in the Gulf and Iran) that catches breezes and funnels them down to cool the rooms."], a: ["wind tower", "windcatcher", "wind catcher", "barjeel", "badgir"], why: "A wind tower catches moving air high above the street and channels it down into the house — natural air-conditioning with no electricity." },
  { lvl: 3, q: ["Name the ancient underground channels that carry water by gravity from hills to desert farms (called foggara in the Sahara)."], a: ["qanat", "qanats", "foggara", "falaj", "karez", "kariz"], why: "Qanats are gently sloping tunnels that carry groundwater to the surface without pumps — and because they are underground, little water is lost to evaporation." },
  { lvl: 3, q: ["In the Atacama Desert, people hang fine mesh nets to collect drinking water from coastal mist. What are these called?"], a: ["fog nets", "fog net", "fog catcher", "fog catchers", "fog collector", "fog collectors", "fog harvesting"], why: "Tiny droplets in the fog hit the mesh, join together and drip into gutters — water from a place that gets almost no rain." },
  { lvl: 3, q: ["Name the insulated, above-ground box that carries water and sewage pipes between buildings in permafrost towns such as Inuvik, Canada."], a: ["utilidor"], why: "Pipes can't be buried in permafrost (the water would freeze and the warm pipes would thaw the ground), so they run above ground in an insulated, heated utilidor." },
  { lvl: 3, q: ["Name the slow process by which a person's body adjusts to lower oxygen at high altitude."], a: ["acclimatisation", "acclimatization", "acclimation"], why: "Over days and weeks the body makes more red blood cells and breathes more deeply, so climbers go up slowly ('climb high, sleep low')." },
  { lvl: 2, q: ["Which hooded, windproof outer jacket, now used worldwide, takes its name from a Greenlandic Inuit word?"], a: ["anorak", "anoraq"], why: "Anorak comes from the Greenlandic Inuit word *anoraq* — a hooded skin jacket so effective that the design is still used on every expedition.", traps: [{ a: "parka", fb: "Parka also comes from an Arctic word, but via Russian from the Nenets people of Siberia. The Greenlandic Inuit word is anorak." }] },
  { lvl: 3, q: ["Name the type of treeless, cold biome on top of permafrost, with mosses, lichens and short summers."], a: ["tundra"], why: "The tundra is too cold and windy, with too short a growing season, for trees. Underneath lies permafrost.", traps: [{ a: "permafrost", fb: "Permafrost is the frozen ground. The treeless biome on top is the tundra." }] },
];

const TOURISM: Fact[] = [
  { lvl: 1, q: ["Give the term for the maximum number of visitors a place can take before it is damaged or the visitor experience is spoiled.", "Name the idea of a 'visitor limit' beyond which a fragile environment starts to suffer."], a: ["carrying capacity"], why: "Carrying capacity can be physical (space), environmental (damage to soils, wildlife) or perceptual (it feels overcrowded). Fragile extreme environments have a LOW carrying capacity." },
  { lvl: 1, q: ["Give the term for tourism that aims to protect the environment and benefit local people, with small groups and low impact."], a: ["ecotourism", "eco tourism", "eco-tourism"], why: "Ecotourism uses local guides and lodges, keeps groups small and puts money into conservation.", traps: [{ a: "mass tourism", fb: "Mass tourism is the opposite — large numbers, package holidays and big impacts." }] },
  { lvl: 2, q: ["Give the term for when money spent by tourists flows out of the country — for example to foreign tour companies and airlines.", "Tourist money that ends up with overseas companies instead of local people is called…"], a: ["leakage", "economic leakage"], why: "If a trek is booked through a foreign company and supplies are imported, much of the money 'leaks' out, so local people gain less.", traps: [{ a: "multiplier effect", fb: "The multiplier effect is money circulating *within* the local economy. Money flowing out is leakage." }] },
  { lvl: 2, q: ["Tourists pay a lodge owner, who buys vegetables from a farmer, who pays a teacher… Name this knock-on effect of tourist spending."], a: ["multiplier effect", "multiplier", "positive multiplier"], why: "Each time money is re-spent locally it creates more income and jobs — the multiplier effect.", traps: [{ a: "leakage", fb: "Leakage is money flowing *out* of the area. Money being re-spent locally is the multiplier effect." }] },
  { lvl: 1, q: ["Name the world's highest mountain, which attracts hundreds of climbers each spring."], a: ["Everest", "Mount Everest", "Mt Everest", "Sagarmatha", "Chomolungma", "Qomolangma"], why: "Everest is 8,849 m high, on the border of Nepal and China (Tibet). Its Nepali name is Sagarmatha." },
  { lvl: 2, q: ["Name the national park in Nepal that contains Mount Everest (a UNESCO World Heritage Site)."], a: ["Sagarmatha National Park", "Sagarmatha"], why: "Sagarmatha National Park was made a World Heritage Site in 1979. Trekkers pay an entry fee that helps fund rubbish collection and conservation." },
  { lvl: 2, q: ["Name the small mountain airstrip where most Everest trekkers begin their walk to Base Camp."], a: ["Lukla", "Tenzing-Hillary Airport", "Tenzing Hillary Airport"], why: "Lukla's short, sloping runway at about 2,800 m is the gateway to the Khumbu — flights there are often cancelled by cloud." },
  { lvl: 3, q: ["Name the Sherpa trading town at about 3,400 m where Everest trekkers usually rest to acclimatise."], a: ["Namche Bazaar", "Namche"], why: "Namche Bazaar grew from a trading village into the tourist hub of the Khumbu, full of lodges, bakeries and gear shops." },
  { lvl: 2, q: ["Name the tough multi-day running race across the Sahara in southern Morocco, in which runners carry their own kit on their backs."], a: ["Marathon des Sables", "Marathon of the Sands", "MdS"], why: "The Marathon des Sables is a famous 'extreme' tourism event — runners cover roughly 250 km over about a week in desert heat." },
  { lvl: 1, q: ["Name the glowing curtains of light in the night sky that draw winter tourists to the Arctic (northern Norway, Finland, Iceland)."], a: ["northern lights", "aurora borealis", "aurora", "the aurora"], why: "The aurora forms when particles from the Sun hit gases high in the atmosphere near the magnetic poles. Dark Arctic winters are the best time to see it." },
  { lvl: 1, q: ["Name the animal traditionally used to carry loads on Everest treks, well adapted to thin air and cold."], a: ["yak", "yaks", "dzo", "dzopkyo"], why: "Yaks (and yak–cow crosses called dzo) carry trekking gear above about 3,000 m, earning money for local herders." },
  { lvl: 1, q: ["Name the animal that carries tourists and supplies on Sahara desert treks."], a: ["camel", "camels", "dromedary"], why: "Camels can go days without drinking and have wide feet for sand, so they are still used on desert treks — tourism now gives many herders their main income." },
  { lvl: 2, q: ["Give the term for a place that attracts very large numbers of tourists, putting it under pressure (e.g. Everest Base Camp)."], a: ["honeypot", "honeypot site", "honey pot"], why: "Honeypot sites attract visitors 'like bees to honey' — causing crowding, footpath erosion and litter, but also concentrating money." },
  { lvl: 2, q: ["Give the term for the wearing away of soil and vegetation along trails by large numbers of walkers."], a: ["footpath erosion", "trail erosion", "path erosion"], why: "In cold places plants grow very slowly, so a trampled trail can take decades to recover." },
  { lvl: 2, q: ["Give the term for the total greenhouse gas emissions caused by an activity — such as flying across the world to visit Antarctica."], a: ["carbon footprint"], why: "Long-haul flights and cruise ships burn a lot of fuel, so extreme tourism has a large carbon footprint even if visitors leave no litter." },
  { lvl: 2, q: ["Since 2014, Nepal has made each Everest expedition pay a refundable sum that is only returned if they bring rubbish back down. What is this called?"], a: ["deposit", "rubbish deposit", "garbage deposit", "litter deposit", "refundable deposit"], why: "The deposit scheme gives teams a money reason to carry rubbish down instead of leaving it on the mountain." },
  { lvl: 3, q: ["Name the dangerous, shifting area of glacier ice just above Everest Base Camp, crossed on ladders by climbers."], a: ["Khumbu Icefall", "Khumbu ice fall", "icefall"], why: "The Khumbu Icefall can move about a metre a day, so towers of ice (seracs) can collapse without warning — a big risk for Sherpa who cross it many times." },
  { lvl: 3, q: ["Give the term for tourism involving physical challenge and some risk, e.g. trekking, climbing or desert running."], a: ["adventure tourism", "adventure travel", "extreme tourism"], why: "Adventure tourism sells challenge and remoteness — which is why it is drawn to extreme environments." },
  { lvl: 3, q: ["Give the term for jobs that exist only for part of the year, e.g. when trekking or climbing seasons are open."], a: ["seasonal", "seasonal employment", "seasonal jobs", "seasonal work"], why: "Everest has two main trekking seasons (spring and autumn), so guides and lodge workers may have little income in the monsoon and winter." },
  { lvl: 3, q: ["Give the term for 'too many visitors' — when tourist numbers spoil a place for locals and visitors alike."], a: ["overtourism", "over-tourism", "over tourism"], why: "Overtourism shows a place is beyond its carrying capacity — e.g. queues of climbers near Everest's summit on good-weather days." },
  { lvl: 1, q: ["Name the type of tourism that brings huge numbers of visitors through package holidays and big cruise ships."], a: ["mass tourism"], why: "Mass tourism brings big incomes but big impacts — the opposite of ecotourism.", traps: [{ a: "ecotourism", fb: "Ecotourism is small-scale and low impact. Huge numbers and package holidays are mass tourism." }] },
  { lvl: 2, q: ["Name the high camp at about 5,360 m on the Nepal side of Everest that thousands of trekkers walk to each year."], a: ["Everest Base Camp", "Base Camp", "EBC", "South Base Camp"], why: "Everest Base Camp is the end of the classic Khumbu trek and the starting point for climbing teams — a classic honeypot." },
  { lvl: 1, q: ["Name the biggest hot desert in the world, visited by tourists in Morocco, Tunisia and Egypt."], a: ["Sahara", "Sahara Desert"], why: "The Sahara covers about 9 million km² of North Africa. Tourists visit its dunes (ergs) on camel treks and 4×4 tours." },
];

const SEE_ACCEPT: Record<"social" | "economic" | "environmental", string[]> = {
  social: ["social", "society"],
  economic: ["economic", "economy", "economical"],
  environmental: ["environmental", "environment"],
};
interface Impact { text: string; see: "social" | "economic" | "environmental"; sign: "positive" | "negative"; why: string }
const IMPACTS: Impact[] = [
  { text: "Sherpa guides on Everest can earn much more in one season than a year of farming would pay.", see: "economic", sign: "positive", why: "It is about money and jobs." },
  { text: "Tonnes of empty oxygen bottles, tents and food packaging are left high on Everest.", see: "environmental", sign: "negative", why: "It damages the physical environment (litter, pollution)." },
  { text: "Trekkers' human waste from Base Camp is carried down and dumped near villages, polluting streams.", see: "environmental", sign: "negative", why: "It pollutes water and land." },
  { text: "Many Sherpa have died in avalanches while carrying loads for paying climbers.", see: "social", sign: "negative", why: "It is about people's lives, safety, families and communities." },
  { text: "Tourist entry fees pay for schools and health clinics in Khumbu villages.", see: "social", sign: "positive", why: "The benefit is better education and health for people — a social gain (even though money pays for it)." },
  { text: "Lodges in Namche Bazaar buy vegetables and grain from local farmers.", see: "economic", sign: "positive", why: "Tourist spending creates income for local businesses — the multiplier effect." },
  { text: "Trees are cut down for fuel to cook food and heat water for trekkers.", see: "environmental", sign: "negative", why: "It is deforestation — damage to the natural environment." },
  { text: "Young people leave farming to work in tourism, and some traditional skills are lost.", see: "social", sign: "negative", why: "It changes the community's way of life and culture." },
  { text: "Most of the price of a desert tour is paid to a foreign travel company.", see: "economic", sign: "negative", why: "This is leakage — money flowing out of the local economy." },
  { text: "4×4 vehicles on dune tours crush desert plants and disturb wildlife.", see: "environmental", sign: "negative", why: "It damages vegetation and habitats." },
  { text: "Tuareg families earn money by guiding camel treks and selling silver jewellery.", see: "economic", sign: "positive", why: "It provides income and jobs." },
  { text: "Visitors to Antarctica return home as 'ambassadors' who campaign to protect it.", see: "social", sign: "positive", why: "It changes people's attitudes and actions — a social impact." },
  { text: "Cruise ships visiting the Arctic burn heavy fuel oil, releasing soot that darkens snow and ice.", see: "environmental", sign: "negative", why: "It is air pollution affecting ice — an environmental impact." },
  { text: "Trekking work is seasonal, so guides earn almost nothing during the monsoon.", see: "economic", sign: "negative", why: "It is about unreliable income." },
  { text: "Footpaths to Everest Base Camp are widened and eroded by thousands of boots.", see: "environmental", sign: "negative", why: "It is soil and vegetation damage." },
  { text: "Tourist money helps pay for rangers and rubbish clean-ups in Sagarmatha National Park.", see: "environmental", sign: "positive", why: "The benefit is protection of the natural environment." },
  { text: "Visitors learn about Inuit culture from Inuit-run tours, helping keep traditions alive.", see: "social", sign: "positive", why: "It helps culture and community pride." },
  { text: "Hotel and lodge building creates construction jobs in a remote mountain valley.", see: "economic", sign: "positive", why: "It creates jobs and income." },
  { text: "Rents and food prices rise in tourist towns, pushing up the cost of living for local families.", see: "economic", sign: "negative", why: "It is about prices and the cost of living." },
  { text: "Crowds of tourists photograph people in their homes, and some locals feel they have lost privacy.", see: "social", sign: "negative", why: "It affects people's quality of life and culture." },
  { text: "Visitors accidentally bring seeds on their boots that could let non-native plants invade Antarctica.", see: "environmental", sign: "negative", why: "Invasive species are a threat to ecosystems." },
  { text: "Nepal earns valuable foreign currency from climbing permit fees.", see: "economic", sign: "positive", why: "It is national income." },
  { text: "Rescue helicopters for sick trekkers mean better emergency care is now available for villagers too.", see: "social", sign: "positive", why: "It improves people's health and safety." },
  { text: "Penguins near busy landing sites are disturbed when visitors get too close during breeding.", see: "environmental", sign: "negative", why: "It disturbs wildlife." },
  { text: "Local Sahara guides set up a cooperative so that more tour money stays in their villages.", see: "economic", sign: "positive", why: "It reduces leakage and keeps income local." },
  { text: "New roads built for tourists also let villagers reach schools and hospitals more easily.", see: "social", sign: "positive", why: "It improves people's access to education and health care." },
];

const ANTARCTICA: Fact[] = [
  { lvl: 1, q: ["In which year was the Antarctic Treaty signed?", "The treaty that sets Antarctica aside for peace and science was signed in which year?"], a: ["1959"], why: "The Antarctic Treaty was signed in 1959 by 12 countries in Washington DC. It came into force in 1961.", traps: [{ a: "1961", fb: "1961 is when the Treaty came into force. It was signed in 1959." }, { a: "1991", fb: "1991 is the Madrid Protocol (and IAATO's founding). The Treaty was signed in 1959." }] },
  { lvl: 2, q: ["How many countries originally signed the Antarctic Treaty?"], a: ["12", "twelve"], why: "Twelve countries signed in 1959, including the UK, USA, USSR, Argentina, Australia and Chile. Many more have joined since." },
  { lvl: 1, q: ["Under IAATO guidelines, what is the maximum number of visitors allowed ashore at one landing site at one time?"], a: ["100", "one hundred"], why: "No more than 100 visitors may be ashore at one site at once, so wildlife and fragile ground are not overwhelmed.", traps: [{ a: "500", fb: "500 is the ship-size limit (ships carrying more than 500 passengers may not land anyone). At one site, the limit ashore is 100." }] },
  { lvl: 1, q: ["Under IAATO rules, ships carrying more than how many passengers are not allowed to land anyone ashore?"], a: ["500", "five hundred"], why: "Ships with more than 500 passengers may only cruise past — they cannot land passengers.", traps: [{ a: "100", fb: "100 is the limit of people ashore at one site at once. Ships over 500 passengers may not land anyone." }] },
  { lvl: 1, q: ["IAATO sets the rules for tourist trips to Antarctica. Complete its name: International Association of … Tour Operators."], a: ["Antarctica", "Antarctic"], why: "IAATO is the International Association of Antarctica Tour Operators — a self-regulating group of tour companies founded in 1991." },
  { lvl: 2, q: ["Give the term for the rules that stop visitors bringing in non-native seeds, soil or diseases (e.g. cleaning and checking boots and clothes)."], a: ["biosecurity", "bio-security", "bio security"], why: "Biosecurity matters because Antarctica's ecosystems have very few species — one invasive plant or disease could spread with nothing to stop it." },
  { lvl: 1, q: ["Visitors who return from Antarctica and campaign to protect it are said to become Antarctic … what?"], a: ["ambassadors", "ambassador"], why: "The 'ambassador effect' is the main argument that tourism there can be positive: people protect what they have seen and come to love." },
  { lvl: 2, q: ["Name the 1991 agreement (part of the Antarctic Treaty system) that bans mining and protects Antarctica's environment."], a: ["Madrid Protocol", "Protocol on Environmental Protection", "Environmental Protocol", "Madrid"], why: "The Madrid Protocol (Protocol on Environmental Protection to the Antarctic Treaty), signed in 1991, designates Antarctica 'a natural reserve devoted to peace and science' and bans mineral resource activities." },
  { lvl: 2, q: ["Which economic activity does the Madrid Protocol ban in Antarctica?"], a: ["mining", "mineral extraction", "mineral resource activities", "mineral mining"], why: "All mineral resource activity (other than scientific research) is banned, so Antarctica's rocks cannot be mined for profit." },
  { lvl: 1, q: ["The Antarctic Treaty reserves Antarctica for peace and for what other purpose?"], a: ["science", "scientific research", "research"], why: "The Treaty bans military activity and promotes free scientific research and the sharing of results." },
  { lvl: 2, q: ["Name the town at the southern tip of Argentina from which most Antarctic cruise ships sail."], a: ["Ushuaia"], why: "Ushuaia is only about 1,000 km from the Antarctic Peninsula across the Drake Passage, so most tourist ships leave from there." },
  { lvl: 2, q: ["Name the stormy stretch of ocean between South America and the Antarctic Peninsula that cruise ships must cross."], a: ["Drake Passage", "the Drake", "Drake"], why: "The Drake Passage is famous for rough seas — strong westerly winds blow all the way round Antarctica with no land to slow them." },
  { lvl: 2, q: ["Which part of Antarctica receives by far the most tourists, because it is closest to South America and mildest?"], a: ["Antarctic Peninsula", "the Peninsula", "Peninsula"], why: "The Antarctic Peninsula is the most northerly and accessible part of the continent, with ice-free coasts and lots of wildlife in summer." },
  { lvl: 1, q: ["In which season (in the Southern Hemisphere) do tourist trips to Antarctica take place?"], a: ["summer", "austral summer", "southern summer"], why: "Tours run roughly November to March, the Southern Hemisphere summer, when sea ice has broken up and there is daylight for most of the day.", traps: [{ a: "winter", fb: "In winter the sea freezes, it is dark almost all day and temperatures plunge — ships can't reach the coast. Trips are in summer." }] },
  { lvl: 2, q: ["Under IAATO wildlife guidelines, what is the minimum distance (in metres) visitors should usually keep from penguins and seals?"], a: ["5", "five", "5 m", "5 metres"], why: "Keeping at least 5 m away (more if animals react) avoids stressing wildlife — especially in the breeding season." },
  { lvl: 2, q: ["Under IAATO guidelines, how many visitors ashore may one guide supervise? (one guide for every … visitors)"], a: ["20", "twenty"], why: "A ratio of one guide per 20 visitors lets guides watch everyone and keep them on safe routes away from wildlife." },
  { lvl: 3, q: ["Name the tiny shrimp-like animal at the base of the Antarctic food web, eaten by whales, penguins and seals."], a: ["krill", "Antarctic krill"], why: "Krill feed on algae under the sea ice. Almost every large Antarctic animal depends on them — which is why fishing for krill is carefully limited." },
  { lvl: 3, q: ["Name the Russian Antarctic research station where the lowest air temperature ever measured at a weather station was recorded (−89.2 °C, 1983)."], a: ["Vostok", "Vostok Station"], why: "Vostok sits on the high East Antarctic ice sheet, more than 3,000 m up and far from the sea, so it is extremely cold." },
  { lvl: 3, q: ["Name the restored British base on the Antarctic Peninsula that is now a museum and post office visited by thousands of tourists."], a: ["Port Lockroy"], why: "Port Lockroy (Base A) is run by the UK Antarctic Heritage Trust; money from its shop helps conserve historic huts." },
  { lvl: 3, q: ["Name the ocean that surrounds Antarctica."], a: ["Southern Ocean", "Antarctic Ocean", "Southern"], why: "The Southern Ocean circles Antarctica; its cold current helps keep the continent isolated and cold." },
  { lvl: 3, q: ["Antarctic tour operators belong to a group that sets rules for its own members rather than a government doing so. Give the term for this kind of regulation."], a: ["self-regulation", "self regulation", "self-regulating", "self regulating", "voluntary"], why: "IAATO is self-regulating — critics ask whether rules written by tour companies are strict enough as numbers grow." },
  { lvl: 1, q: ["Antarctica counts as a desert even though it is icy. It is a desert because it receives very little … what? (one word)"], a: ["precipitation", "rain", "snow", "rainfall", "snowfall"], why: "Antarctica gets very little precipitation (much of the interior less than 50 mm a year), so it is technically the world's largest desert." },
];

const EXPEDITION: Fact[] = [
  { lvl: 1, q: ["Name the clothing layer worn next to the skin that 'wicks' sweat away from the body."], a: ["base layer", "baselayer", "base"], why: "A base layer (merino or synthetic) moves sweat away from the skin so you don't get cold and damp.", traps: [{ a: "outer layer", fb: "The outer (shell) layer keeps wind and rain out. The layer next to the skin is the base layer." }] },
  { lvl: 1, q: ["Name the clothing layer that traps warm air, such as a fleece or down jacket."], a: ["mid layer", "midlayer", "insulating layer", "insulation layer", "middle layer"], why: "The mid (insulating) layer traps still air, which is a poor conductor of heat — it keeps your warmth in." },
  { lvl: 1, q: ["Name the clothing layer that is waterproof and windproof, worn on top of everything else."], a: ["outer layer", "shell layer", "shell", "outer shell", "outer"], why: "The outer shell stops wind and rain getting in. Wind and wet are what make cold weather deadly." },
  { lvl: 1, q: ["Give the term for wearing several thin layers instead of one thick coat so you can add or remove them as conditions change."], a: ["layering", "layering system", "layers", "layer system"], why: "Layers trap air between them and let you control temperature — stopping you from sweating, then freezing." },
  { lvl: 1, q: ["Give the term for identifying hazards on an expedition, judging how likely and serious they are, and planning how to reduce them."], a: ["risk assessment", "risk analysis", "risk management"], why: "A risk assessment lists each hazard, its likelihood and severity, and the actions that reduce it (e.g. turn-back times)." },
  { lvl: 1, q: ["Name the set of seven outdoor principles that includes 'dispose of waste properly' and 'leave what you find'."], a: ["Leave No Trace", "LNT", "leave no trace principles"], why: "Leave No Trace aims to keep wild places as you found them: take rubbish home, stay on trails, respect wildlife." },
  { lvl: 1, q: ["Name the satellite navigation system that shows your position on a handheld device or phone."], a: ["GPS", "global positioning system", "satnav", "sat nav"], why: "GPS uses signals from satellites to fix your position — but batteries die in cold, so expeditions always carry a map and compass too." },
  { lvl: 2, q: ["Name the small device that sends an emergency signal with your location via satellite to rescue services."], a: ["personal locator beacon", "PLB", "emergency beacon", "locator beacon", "beacon", "EPIRB"], why: "A personal locator beacon sends your GPS position to search-and-rescue via satellites, even where there is no mobile signal." },
  { lvl: 2, q: ["Name the type of phone that works in remote places with no mobile network by linking directly to satellites."], a: ["satellite phone", "sat phone", "satphone"], why: "Satellite phones let expeditions call for help, get weather forecasts and report progress from anywhere on Earth." },
  { lvl: 2, q: ["Name the spiked metal frames fitted to boots for walking on ice."], a: ["crampons", "crampon"], why: "Crampons grip hard ice and snow; climbers also carry an ice axe to stop themselves if they slip." },
  { lvl: 2, q: ["Which fabric should you avoid on cold expeditions because it soaks up water and stays wet ('… kills')?"], a: ["cotton"], why: "Cotton absorbs water and loses almost all its insulation when wet, so it chills you fast. Wool and synthetics stay warm when damp." },
  { lvl: 2, q: ["Give the term for a short period of good weather that climbers wait for before a summit attempt."], a: ["weather window", "window"], why: "On Everest, summit pushes are timed for a weather window in May when the jet-stream winds briefly weaken." },
  { lvl: 2, q: ["In which season do most climbers attempt Everest from Nepal — before the monsoon arrives?"], a: ["spring", "pre-monsoon", "pre monsoon", "May", "April and May", "April to May"], why: "Most summits happen in May, after winter's fierce winds and before the summer monsoon brings heavy snow." },
  { lvl: 2, q: ["Name the back-up plan prepared in case the main plan fails (e.g. a different route or an earlier turn-back time)."], a: ["contingency plan", "contingency", "plan B", "backup plan", "back-up plan", "emergency plan"], why: "A contingency plan means you have already decided what to do if weather, illness or injury strike." },
  { lvl: 2, q: ["Give the term for written details of the planned route, timings and escape routes left with someone at home."], a: ["route card", "route plan", "trip plan", "itinerary"], why: "If you don't return on time, rescuers know where to look — this simple step saves lives." },
  { lvl: 2, q: ["Name the rule of thumb for walking time: 1 hour per 5 km plus 1 hour for every 600 m of climbing."], a: ["Naismith's rule", "Naismith rule", "Naismith", "Naismiths rule"], why: "Naismith's rule (from the Scottish climber William Naismith, 1892) helps plan how long a route will take." },
  { lvl: 2, q: ["Name the condition in snow and cloud where everything looks white and you can't see the horizon or the ground's shape."], a: ["whiteout", "white out", "white-out"], why: "In a whiteout you can walk off a cliff or into a crevasse without seeing it — expeditions stop and wait, or navigate strictly by compass and GPS." },
  { lvl: 2, q: ["Name the deep crack in a glacier, sometimes hidden by a snow bridge, that is a major hazard for polar and mountain expeditions."], a: ["crevasse", "crevasses"], why: "Crevasses form where glacier ice stretches and cracks. Teams rope together so one person's fall can be held." },
  { lvl: 3, q: ["Give the high-altitude climbing motto that means going up during the day but descending to sleep to help acclimatise."], a: ["climb high, sleep low", "climb high sleep low"], why: "Brief trips higher stimulate the body to adapt; sleeping lower lets it recover with more oxygen." },
  { lvl: 3, q: ["Name the instrument that, with a map, gives you a bearing when GPS batteries fail."], a: ["compass", "magnetic compass"], why: "A magnetic compass needs no batteries — near the poles it becomes unreliable, which is why polar teams also use sun position and GPS." },
  { lvl: 3, q: ["Name the light, warm insulation made from the soft under-feathers of ducks or geese, used in expedition jackets and sleeping bags."], a: ["down", "down feathers", "goose down", "duck down"], why: "Down traps lots of air for very little weight — but it loses its warmth when wet, so it is kept inside a waterproof layer." },
  { lvl: 3, q: ["Give the term for working in pairs on an expedition so each person watches the other for signs of cold, heat or altitude illness."], a: ["buddy system", "buddy"], why: "People often don't notice their own early hypothermia or confusion — a buddy will." },
  { lvl: 3, q: ["Name the lines on a topographic map that join places of equal height."], a: ["contour lines", "contours", "contour"], why: "Contours show slope steepness — close together means steep — which helps choose a safe route." },
  { lvl: 3, q: ["Give the term for adding chemical tablets, a filter or boiling to make stream or melted-snow water safe to drink."], a: ["water purification", "purification", "purifying", "water treatment", "sterilisation", "sterilization"], why: "Even clear mountain water can carry bacteria from animals or people, so expeditions always treat drinking water." },
  { lvl: 1, q: ["On a hot-desert expedition, at what time of day should you stop and rest in the shade rather than walk?"], a: ["midday", "noon", "middle of the day", "lunchtime", "around midday"], why: "Walk in the cooler early morning and evening, and rest in shade at midday, when the Sun is highest and the heat is greatest." },
];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // ---------- Retrieval: difficulties of living ----------
  {
    id: `${TOPIC}.difficulties-terms`,
    topicId: TOPIC,
    title: "Key terms: difficulties of living in extreme places",
    level: 1,
    guideRef: "difficulties-of-living",
    generate(rng, tier) {
      return fromBank(DIFFICULTIES, rng, tier, "Think: is it about water, cold, heat, altitude, buildings or people?");
    },
  },

  // ---------- Skills: daily temperature range ----------
  {
    id: `${TOPIC}.daily-range`,
    topicId: TOPIC,
    title: "Calculate the daily temperature range",
    level: 1,
    guideRef: "difficulties-of-living",
    generate(rng, tier) {
      const places = tier === 1
        ? [{ p: "a camp in the Sahara", max: [36, 46], min: [8, 20] }, { p: "a desert town in Niger", max: [34, 44], min: [12, 22] }, { p: "an oasis in Egypt", max: [32, 42], min: [10, 20] }]
        : tier === 2
          ? [{ p: "a Sahara dune camp in winter", max: [18, 28], min: [-4, 6] }, { p: "the Gobi Desert in spring", max: [10, 22], min: [-12, 2] }, { p: "the Atacama Desert at 2,400 m", max: [18, 28], min: [-4, 6] }, { p: "a Sahara camp in summer", max: [38, 47], min: [14, 26] }]
          : [{ p: "Everest Base Camp in May", max: [2, 12], min: [-18, -6] }, { p: "an Antarctic Peninsula research station in summer", max: [1, 6], min: [-8, -2] }, { p: "a Siberian town in March", max: [-14, -2], min: [-36, -20] }, { p: "a camp on the Greenland ice sheet", max: [-18, -6], min: [-40, -24] }, { p: "the Gobi Desert in winter", max: [-14, -2], min: [-34, -20] }];
      const pl = rng.pick(places);
      const max = rng.int(pl.max[0], pl.max[1]);
      let min = rng.int(pl.min[0], pl.min[1]);
      if (min >= max) min = max - 5;
      const range = max - min;
      const traps: Trap[] = [];
      if (min < 0 && max + min !== range) traps.push({ spec: { type: "number", value: max + min }, feedback: `Careful with the minus sign: ${num(max)} − (${num(min)}) is ${num(max)} + ${num(-min)}.` });
      if (min < 0 && max > 0 && max - -min !== range && max - -min !== max + min) traps.push({ spec: { type: "number", value: max - -min }, feedback: "You ignored the minus sign on the minimum. Count the degrees up to 0 °C, then on to the maximum." });
      if (min < 0 && max < 0 && Math.abs(min) + Math.abs(max) !== range) traps.push({ spec: { type: "number", value: Math.abs(min) + Math.abs(max) }, feedback: "Both temperatures are below zero, so you only count the gap between them — don't add their sizes." });
      return {
        prompt: `In ${pl.p}, the temperature reached a maximum of ${num(max)} °C in the day and fell to a minimum of ${num(min)} °C at night. Calculate the daily temperature range in °C.`,
        answer: { type: "number", value: range, display: `${num(range)} °C` },
        solution: [
          "Range = maximum − minimum.",
          `${num(max)} − ${min < 0 ? `(${num(min)})` : num(min)} = ${num(range)} °C.`,
          tier === 1 || pl.p.includes("Sahara") || pl.p.includes("Gobi") || pl.p.includes("Atacama")
            ? "Deserts have big daily ranges because clear skies and dry air let heat escape quickly at night."
            : "Even in 'summer' these places stay cold — clothing must cope with the whole range.",
        ],
        hint: "Range = highest − lowest. Think of a number line if one value is negative.",
        traps: traps.length ? traps : undefined,
      };
    },
  },

  // ---------- Skills: lapse rate ----------
  {
    id: `${TOPIC}.lapse-rate`,
    topicId: TOPIC,
    title: "Temperature at altitude (lapse rate)",
    level: 2,
    guideRef: "difficulties-of-living",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.4)) {
        // Freezing level.
        const k = rng.int(2, 9); // 2..9 half-kilometres
        const t = clean(3.25 * k);
        const h = 500 * k;
        return {
          prompt: `At sea level on a mountain coast the air temperature is ${num(t)} °C. Air cools by 6.5 °C for every 1,000 m of height. At what height (in metres) will the temperature reach 0 °C (the freezing level)?`,
          answer: { type: "number", value: h, display: `${big(h)} m` },
          solution: [
            `The temperature must fall by ${num(t)} °C.`,
            `Each 1,000 m gives a fall of 6.5 °C, so height = {{${num(t)}/6.5}} × 1,000 m.`,
            `= ${num(clean(t / 6.5))} × 1,000 = ${big(h)} m.`,
          ],
          hint: "How many lots of 6.5 °C fit into the temperature you need to lose?",
          traps: [{ spec: { type: "number", value: roundTo(t * 6.5, 2) }, feedback: "You multiplied by 6.5 — you need to divide the temperature drop by 6.5 °C per 1,000 m." }],
        };
      }
      const starts = [
        { name: "Kathmandu", h: 1400 },
        { name: "Lukla", h: 2800 },
        { name: "a coastal village", h: 0 },
        { name: "Namche Bazaar", h: 3400 },
        { name: "a valley town", h: 1000 },
        { name: "Moshi, at the foot of Kilimanjaro", h: 900 },
      ];
      const s = rng.pick(starts);
      const step = tier === 1 ? 1000 : tier === 2 ? 500 : 100;
      const climbs = tier === 1 ? [1000, 2000, 3000, 4000] : tier === 2 ? [1500, 2500, 3000, 3500, 4500] : [1200, 1700, 2300, 2600, 3100, 3800, 4400];
      const okClimbs = climbs.filter((c) => s.h + c <= 6000);
      let climb = rng.pick(okClimbs.length ? okClimbs : [1000]);
      climb = Math.round(climb / step) * step;
      const top = s.h + climb;
      const t0 = Math.round(28 - (6.5 * s.h) / 1000) + rng.int(-6, 2);
      const drop = clean((6.5 * climb) / 1000);
      const t1 = roundTo(t0 - drop, 1);
      const trapUp = roundTo(t0 + drop, 1);
      return {
        prompt: `In ${s.name} (${big(s.h)} m above sea level) the temperature is ${num(t0)} °C. Trekkers climb to a camp at ${big(top)} m. Air cools by about 6.5 °C for every 1,000 m you climb. Estimate the temperature at the camp in °C${tier === 1 ? "" : ", to 1 decimal place"}.`,
        // Tiers 2–3: key the exact value with ±0.05 so either rounding of a ...5 (e.g. −2.75 → −2.7 or −2.8) is accepted.
        answer: tier === 1 ? { type: "number", value: t1, display: `${num(t1)} °C` } : { type: "number", value: clean(t0 - drop), display: `${num(t1)} °C`, tolerance: 0.05 },
        solution: [
          `Height gained = ${big(top)} − ${big(s.h)} = ${big(climb)} m.`,
          `Cooling = {{${climb}/1000}} × 6.5 = ${num(drop)} °C.`,
          `Temperature = ${num(t0)} − ${num(drop)} = ${clean(t0 - drop) === t1 ? num(t1) : `${num(clean(t0 - drop))} ≈ ${t1.toFixed(1).replace("-", "−")}`} °C.`,
        ],
        hint: "First find the height GAINED (not the camp's height), then work out how many thousands of metres that is.",
        traps: [
          ...(trapUp !== t1 ? [{ spec: { type: "number", value: trapUp } as const, feedback: "Temperature FALLS as you climb — subtract the cooling." }] : []),
          ...(s.h > 0 && roundTo(t0 - (6.5 * top) / 1000, 1) !== t1
            ? [{ spec: { type: "number", value: roundTo(t0 - (6.5 * top) / 1000, 1) } as const, feedback: `You used the camp's full height. The start is already ${big(s.h)} m up — use the height gained.` }]
            : []),
        ],
      };
    },
  },

  // ---------- Retrieval: tourism ----------
  {
    id: `${TOPIC}.tourism-terms`,
    topicId: TOPIC,
    title: "Key terms and places: extreme tourism",
    level: 1,
    guideRef: "extreme-tourism",
    generate(rng, tier) {
      return fromBank(TOURISM, rng, tier, "Is it about numbers of visitors, money, damage — or a named place?");
    },
  },

  // ---------- Retrieval: classify impacts (SEE) ----------
  {
    id: `${TOPIC}.classify-impacts`,
    topicId: TOPIC,
    title: "Classify tourism impacts (social / economic / environmental)",
    level: 2,
    guideRef: "extreme-tourism",
    generate(rng, tier) {
      const imp = rng.pick(IMPACTS);
      const askSign = tier === 3 ? rng.bool(0.5) : tier === 2 ? rng.bool(0.3) : false;
      if (askSign) {
        const other = imp.sign === "positive" ? "negative" : "positive";
        return {
          prompt: `Tourism impact: *"${imp.text}"*\n\nIs this a **positive** or **negative** impact?`,
          answer: { type: "text", accept: [imp.sign], display: imp.sign },
          solution: [`**${imp.sign}** (${imp.see}).`, imp.why],
          hint: "Ask: who or what is better off — or worse off — because of it?",
          traps: [{ spec: { type: "text", accept: [other] }, feedback: `Look again at who gains or loses: ${imp.why}` }],
        };
      }
      const others = (["social", "economic", "environmental"] as const).filter((c) => c !== imp.see);
      return {
        prompt: `Tourism impact: *"${imp.text}"*\n\nIs this mainly a **social**, **economic** or **environmental** impact?`,
        answer: { type: "text", accept: SEE_ACCEPT[imp.see], display: imp.see },
        solution: [`**${imp.see}** (${imp.sign}).`, imp.why],
        hint: "SEE: Social = people's lives, health, culture · Economic = money and jobs · Environmental = land, water, air, wildlife.",
        traps: others.map((o) => ({
          spec: { type: "text", accept: [o] },
          feedback: o === "economic" ? "Money may be involved, but what is actually affected here? Look at the outcome, not just the cash." : o === "social" ? "Social impacts are about people's lives, health and culture. What is mainly affected here?" : "Environmental impacts are about land, water, air and wildlife. What is mainly affected here?",
        })),
      };
    },
  },

  // ---------- Skills: % change in visitors ----------
  {
    id: `${TOPIC}.visitor-change`,
    topicId: TOPIC,
    title: "Percentage change in tourist numbers",
    level: 3,
    guideRef: "extreme-tourism",
    generate(rng, tier) {
      const ctx = rng.pick([
        "trekking permits issued for a mountain national park",
        "visitors to a Sahara dune camp",
        "tourists landing on an Antarctic island",
        "climbers attempting a high peak",
        "visitors to an Arctic town in winter",
        "tourists on a desert camel-trek route",
      ]);
      let a: number, b: number;
      if (tier === 1) {
        a = rng.pick([1000, 2000, 4000, 5000, 10000, 20000]);
        const pct = rng.pick([10, 20, 25, 50, 75, 100, -10, -20, -25, -50]);
        b = (a * (100 + pct)) / 100;
      } else if (tier === 2) {
        a = rng.int(20, 90) * 100;
        const pct = rng.pick([5, 12, 15, 30, 35, 40, 60, 80, -5, -15, -30, -40]);
        b = (a * (100 + pct)) / 100;
      } else {
        a = rng.int(1500, 40000);
        b = Math.round(a * (rng.int(40, 260) / 100));
        if (b === a) b = a + 137;
      }
      a = Math.round(a);
      b = Math.round(b);
      const ch = b - a;
      const exact = (ch / a) * 100;
      const ans = roundTo(exact, 1);
      const y0 = rng.int(2005, 2015);
      const y1 = y0 + rng.int(4, 9);
      const wrongBase = roundTo((ch / b) * 100, 1);
      return {
        prompt: `Practice data: the number of ${ctx} ${b > a ? "rose" : "fell"} from ${big(a)} in ${y0} to ${big(b)} in ${y1}. Calculate the percentage change${tier === 1 ? "" : ", to 1 decimal place"}. Use a minus sign for a decrease.`,
        answer: { type: "number", value: ans, display: `${num(ans)}%` },
        solution: [
          `Change = ${big(b)} − ${big(a)} = ${big(ch)}.`,
          `% change = {{change/original}} × 100 = {{${ch}/${a}}} × 100.`,
          `= ${num(ans)}%${ch < 0 ? " (a decrease)" : " (an increase)"}.`,
        ],
        hint: "Divide the change by the ORIGINAL (earlier) number, then × 100.",
        traps: wrongBase !== ans ? [{ spec: { type: "number", value: wrongBase }, feedback: "You divided by the new number. Percentage change always uses the ORIGINAL (earlier) value." }] : undefined,
      };
    },
  },

  // ---------- Retrieval: Antarctica ----------
  {
    id: `${TOPIC}.antarctica-facts`,
    topicId: TOPIC,
    title: "Antarctic Treaty, IAATO and tourism facts",
    level: 1,
    guideRef: "antarctica-tourism",
    generate(rng, tier) {
      return fromBank(ANTARCTICA, rng, tier, "Recall the key rules: Treaty 1959, 100 ashore, 500-passenger ships, biosecurity, ambassadors.");
    },
  },

  // ---------- Skills: Antarctic landings ----------
  {
    id: `${TOPIC}.antarctic-landings`,
    topicId: TOPIC,
    title: "Plan Antarctic landings under IAATO rules",
    level: 2,
    guideRef: "antarctica-tourism",
    generate(rng, tier) {
      const mode = tier === 1 ? 0 : tier === 2 ? rng.pick([0, 1]) : rng.pick([1, 2, 3]);
      if (mode === 3) {
        const n = rng.pick([520, 600, 750, 900, 1200, 2000, 3000]);
        const ship = rng.pick(["A large cruise ship", "An ocean liner", "A big expedition cruise ship"]);
        return {
          prompt: `${ship} carrying ${big(n)} passengers visits Antarctica. Under IAATO rules, how many of its passengers may it land ashore at one site at one time?`,
          answer: { type: "number", value: 0, display: "0" },
          solution: ["Ships carrying more than 500 passengers may not land anyone ashore.", `${big(n)} > 500, so the answer is 0 — passengers can only view Antarctica from the deck ('cruise-only').`],
          hint: "Check the ship size rule before the 100-ashore rule.",
          traps: [{ spec: { type: "number", value: 100 }, feedback: "The 100-ashore limit only applies to ships allowed to land at all. Ships over 500 passengers can't land anyone." }],
        };
      }
      if (mode === 2) {
        const ashore = rng.int(2, 10) * 10 - rng.int(0, 9);
        const g = Math.ceil(ashore / 20);
        return {
          prompt: `IAATO guidelines require at least 1 guide for every 20 visitors ashore. How many guides are needed for a group of ${ashore} visitors?`,
          answer: { type: "number", value: g, display: String(g) },
          solution: [`{{${ashore}/20}} = ${num(clean(ashore / 20))}.`, ashore % 20 === 0 ? `That is exactly ${g} guides.` : `You can't have part of a guide, and rounding down would leave visitors unsupervised — round UP to ${g}.`],
          hint: "Divide by 20 — then think: can you round down here?",
          traps: ashore % 20 !== 0 && Math.floor(ashore / 20) !== g ? [{ spec: { type: "number", value: Math.floor(ashore / 20) }, feedback: "Rounding down leaves some visitors without a guide — always round UP for safety ratios." }] : undefined,
        };
      }
      const n = tier === 1 ? rng.int(11, 50) * 10 : rng.int(110, 500);
      const groups = Math.ceil(n / 100);
      if (mode === 0) {
        return {
          prompt: `An expedition ship carries ${n} passengers. No more than 100 visitors may be ashore at one site at one time. What is the smallest number of separate groups the passengers must be split into so that everyone can visit the site?`,
          answer: { type: "number", value: groups, display: String(groups) },
          solution: [`{{${n}/100}} = ${num(clean(n / 100))}.`, n % 100 === 0 ? `So ${groups} groups of 100.` : `A part-group still needs its own turn, so round UP to ${groups} groups.`],
          hint: "Divide by the 100-person limit and think about any people left over.",
          traps: n % 100 !== 0 ? [{ spec: { type: "number", value: Math.floor(n / 100) }, feedback: "Rounding down leaves some passengers who never get ashore — round UP." }] : undefined,
        };
      }
      const mins = rng.pick([45, 60, 75, 90, 120]);
      const total = groups * mins;
      return {
        prompt: `An expedition ship carries ${n} passengers and visits a penguin colony. Only 100 visitors may be ashore at once, and each group spends ${mins} minutes ashore (ignore boat transfers). What is the minimum total time, in minutes, needed for every passenger to visit?`,
        answer: { type: "number", value: total, display: `${total} minutes` },
        solution: [`Groups needed: {{${n}/100}} → round up to ${groups}.`, `Total time = ${groups} × ${mins} = ${total} minutes (${Math.floor(total / 60)} h${total % 60 ? ` ${total % 60} min` : ""}).`, "This is why landings take most of a day — and why only small ships can give everyone time ashore."],
        hint: "Find the number of groups first (round up), then multiply by the time each group spends ashore.",
        traps: [
          ...(n % 100 !== 0 ? [{ spec: { type: "number", value: Math.floor(n / 100) * mins } as const, feedback: "Rounding the groups down leaves some passengers out — round UP first." }] : []),
          ...(roundTo((n / 100) * mins, 2) !== total && n % 100 !== 0 ? [{ spec: { type: "number", value: roundTo((n / 100) * mins, 2) } as const, feedback: "You can't have a fraction of a group — round the number of groups up first." }] : []),
        ],
      };
    },
  },

  // ---------- Retrieval: expedition planning ----------
  {
    id: `${TOPIC}.expedition-terms`,
    topicId: TOPIC,
    title: "Expedition planning: kit, safety and navigation terms",
    level: 1,
    guideRef: "planning-an-expedition",
    generate(rng, tier) {
      return fromBank(EXPEDITION, rng, tier, "Think about the three layers, safety planning, navigation and Leave No Trace.");
    },
  },

  // ---------- Skills: water and food supplies ----------
  {
    id: `${TOPIC}.supplies`,
    topicId: TOPIC,
    title: "Calculate expedition water and food supplies",
    level: 2,
    guideRef: "planning-an-expedition",
    generate(rng, tier) {
      const kind = tier === 1 ? 0 : tier === 2 ? rng.pick([0, 1]) : rng.pick([1, 2]);
      const people = rng.int(tier === 1 ? 2 : 3, tier === 1 ? 6 : 12);
      const days = rng.int(tier === 1 ? 2 : 3, tier === 1 ? 7 : 14);
      if (kind === 0) {
        const l = tier === 1 ? rng.pick([4, 5, 6]) : rng.pick([4, 5, 6, 7, 8]);
        const total = people * days * l;
        return {
          prompt: `A team of ${people} people is crossing a hot desert for ${days} days. Each person needs about ${l} litres of water a day for drinking and cooking. How many litres of water does the team need in total?`,
          answer: { type: "number", value: total, display: `${big(total)} litres` },
          solution: [`Per day for the team: ${people} × ${l} = ${people * l} litres.`, `For ${days} days: ${people * l} × ${days} = ${big(total)} litres.`, "Water weighs about 1 kg per litre, so this is why desert expeditions use camels, vehicles or water caches."],
          hint: "people × days × litres per person per day.",
          traps: people * l !== total ? [{ spec: { type: "number", value: people * l }, feedback: "That is only ONE day's water. Multiply by the number of days too." }] : undefined,
        };
      }
      if (kind === 1) {
        const kcal = rng.pick([4000, 4500, 5000, 5500, 6000]);
        const total = people * days * kcal;
        return {
          prompt: `A polar sledging team of ${people} people will be out for ${days} days. Pulling sledges in extreme cold, each person needs about ${big(kcal)} kcal of food energy a day. How many kcal of food must the team carry in total?`,
          answer: { type: "number", value: total, display: `${big(total)} kcal` },
          solution: [`Per person: ${big(kcal)} × ${days} = ${big(kcal * days)} kcal.`, `Team: ${big(kcal * days)} × ${people} = ${big(total)} kcal.`, "That is about two to three times a normal adult's needs: the body burns energy to stay warm as well as to haul the sledge."],
          hint: "kcal per person per day × days × people.",
          traps: kcal * days !== total ? [{ spec: { type: "number", value: kcal * days }, feedback: "That's for one person — multiply by the number of people too." }] : undefined,
        };
      }
      const l = rng.pick([5, 6, 7, 8]);
      const reserve = rng.pick([10, 20, 25, 50]);
      const base = people * days * l;
      // Exact answer (it can have 2 decimal places, e.g. 131.25); ±0.05 also accepts it rounded to 1 d.p.
      const reserveL = clean((base * reserve) / 100);
      const total = clean(base + reserveL);
      return {
        prompt: `A team of ${people} people will spend ${days} days in a hot desert. Each person needs ${l} litres of water a day, and the leader adds an extra ${reserve}% as an emergency reserve. Water weighs 1 kg per litre. What is the total mass of water, in kg, the team must plan to carry or cache?`,
        answer: { type: "number", value: total, tolerance: 0.05, display: `${big(total)} kg` },
        solution: [
          `Basic need: ${people} × ${days} × ${l} = ${big(base)} litres.`,
          `Reserve: ${reserve}% of ${big(base)} = ${big(reserveL)} litres.`,
          `Total = ${big(base)} + ${big(reserveL)} = ${big(total)} litres = ${big(total)} kg.`,
        ],
        hint: "Work out the basic total first, then add the reserve percentage of it.",
        traps: base !== total ? [{ spec: { type: "number", value: base }, feedback: `That is the basic need — don't forget the ${reserve}% reserve.` }] : undefined,
      };
    },
  },

  // ---------- Skills: Naismith's rule ----------
  {
    id: `${TOPIC}.naismith`,
    topicId: TOPIC,
    title: "Estimate walking time with Naismith's rule",
    level: 3,
    guideRef: "planning-an-expedition",
    generate(rng, tier) {
      // Naismith: 1 h per 5 km (12 min/km) + 1 h per 600 m of ascent (10 min per 100 m).
      let km: number, up: number;
      if (tier === 1) {
        km = rng.pick([5, 10, 15, 20, 25, 30]);
        up = rng.pick([0, 300, 600, 900, 1200, 1800]);
      } else if (tier === 2) {
        km = rng.int(4, 18);
        up = rng.int(1, 9) * 150;
      } else {
        km = rng.int(6, 36) / 2;
        up = rng.int(3, 16) * 100;
      }
      const walk = clean(km * 12);
      const climb = clean(up / 10);
      const total = clean(walk + climb);
      const askHours = tier === 1;
      const ansVal = askHours ? clean(total / 60) : total;
      return {
        prompt: `Naismith's rule: allow 1 hour for every 5 km walked, plus 1 hour for every 600 m climbed. A route is ${num(km)} km long with ${big(up)} m of ascent. How long should it take, in ${askHours ? "hours" : "minutes"}?`,
        answer: { type: "number", value: ansVal, display: askHours ? `${num(ansVal)} hours` : `${num(total)} minutes` },
        solution: [
          `Distance: ${num(km)} km ÷ 5 km per hour = ${num(clean(km / 5))} h = ${num(walk)} min.`,
          `Climb: ${big(up)} m ÷ 600 m per hour = ${num(roundTo(up / 600, 3))} h = ${num(climb)} min.`,
          `Total = ${num(walk)} + ${num(climb)} = ${num(total)} min${askHours ? ` = ${num(ansVal)} hours` : ` (${Math.floor(total / 60)} h ${num(clean(total % 60))} min)`}.`,
          "Add extra time for rests, heavy packs, snow or altitude.",
        ],
        hint: askHours ? "Hours for distance (÷ 5) + hours for climbing (÷ 600)." : "Each km takes 12 minutes; each 100 m of climbing takes 10 minutes.",
        traps: up > 0 && clean(askHours ? km / 5 : walk) !== ansVal ? [{ spec: { type: "number", value: clean(askHours ? km / 5 : walk) }, feedback: "You've only timed the distance — add time for the climbing too." }] : undefined,
      };
    },
  },
];
