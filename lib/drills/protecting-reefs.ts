import type { Drill, DrillItem, Rng } from "./types.ts";
import { num, big, roundTo, clean, money } from "./helpers.ts";
import type { AnswerSpec, Trap } from "../types.ts";

const T = "protecting-reefs";

// ---------------------------------------------------------------------------
// Fact-bank machinery: each entry has 1–3 phrasings and a difficulty (1–3).
// Tier 1 draws from d ≤ 1… tier 2 from d ≤ 2, tier 3 from d ≥ 2.
// ---------------------------------------------------------------------------
interface Fact {
  d: 1 | 2 | 3;
  q: string[];
  answer: AnswerSpec;
  why: string;
  hint: string;
  traps?: Trap[];
}

function text(...accept: string[]): AnswerSpec {
  return { type: "text", accept };
}
function year(y: number): AnswerSpec {
  return { type: "number", value: y, allowFraction: false };
}
function trap(feedback: string, ...accept: string[]): Trap {
  return { spec: { type: "text", accept }, feedback };
}

function pool(bank: Fact[], tier: 1 | 2 | 3): Fact[] {
  if (tier === 1) return bank.filter((f) => f.d === 1);
  if (tier === 2) return bank.filter((f) => f.d <= 2);
  return bank.filter((f) => f.d >= 2);
}

const LEADS = ["", "Quick recall:", "Knowledge Organiser check:", "From memory:", "Key fact:"];

function fromBank(bank: Fact[], rng: Rng, tier: 1 | 2 | 3, lead?: string): DrillItem {
  const f = rng.pick(pool(bank, tier));
  const l = lead ?? rng.pick(LEADS);
  const prompt = (l ? l + " " : "") + rng.pick(f.q);
  return { prompt, answer: f.answer, solution: [f.why], hint: f.hint, traps: f.traps };
}

// ---------------------------------------------------------------------------
// 1. GBR key facts
// ---------------------------------------------------------------------------
const GBR_FACTS: Fact[] = [
  { d: 1, q: ["In which Australian state is the Great Barrier Reef found?", "The Great Barrier Reef lies off the coast of which Australian state?"], answer: text("Queensland", "QLD"), why: "The reef runs along the north-east coast of Australia, off **Queensland**.", hint: "It is the state in the north-east of Australia.", traps: [trap("New South Wales is further south — the reef is off the north-east coast.", "New South Wales", "NSW")] },
  { d: 1, q: ["Off which country's coast is the Great Barrier Reef?", "The Great Barrier Reef belongs to which country?"], answer: text("Australia"), why: "The Great Barrier Reef lies off north-east **Australia**.", hint: "Think of the country south-east of Asia." },
  { d: 1, q: ["Roughly how long is the Great Barrier Reef, in km? (Give the usual textbook figure.)", "The Great Barrier Reef stretches for about how many kilometres?"], answer: { type: "number", value: 2300, tolerance: 100 }, why: "It is about **2,300 km** long, visible from space as a chain of reefs.", hint: "It is between 2,000 and 2,500 km." },
  { d: 1, q: ["In which year did the Great Barrier Reef become a UNESCO World Heritage Site?", "The Great Barrier Reef was listed as World Heritage in which year?"], answer: year(1981), why: "It was inscribed on the World Heritage List in **1981**.", hint: "It was six years after the Marine Park was created (1975).", traps: [{ spec: year(1975), feedback: "1975 is when the Marine Park was created — World Heritage came later." }] },
  { d: 1, q: ["In which year was the Great Barrier Reef Marine Park created by law?", "The Great Barrier Reef Marine Park Act was passed in which year?"], answer: year(1975), why: "The Great Barrier Reef Marine Park Act was passed in **1975**.", hint: "It was the mid-1970s, before World Heritage listing.", traps: [{ spec: year(1981), feedback: "1981 is World Heritage listing — the Marine Park came first." }] },
  { d: 1, q: ["Which ocean is the Great Barrier Reef in? (Name the ocean.)", "The Coral Sea, where the Great Barrier Reef lies, is part of which ocean?"], answer: text("Pacific", "Pacific Ocean", "South Pacific"), why: "The reef lies in the Coral Sea, part of the **Pacific Ocean**.", hint: "It is the largest ocean, east of Australia.", traps: [trap("The Indian Ocean is off Australia's west coast — the reef is on the east.", "Indian", "Indian Ocean")] },
  { d: 1, q: ["The Great Barrier Reef lies in which sea?", "Name the sea that the Great Barrier Reef is part of."], answer: text("Coral Sea", "the Coral Sea"), why: "The reef lies in the **Coral Sea**, off Queensland.", hint: "The sea is named after what the reef is made of." },
  { d: 1, q: ["About how many individual reefs make up the Great Barrier Reef?", "The Great Barrier Reef is made of roughly how many separate reefs?"], answer: { type: "number", value: 2900, tolerance: 100 }, why: "It is a system of about **2,900** individual reefs (plus hundreds of islands).", hint: "It is just under 3,000." },
  { d: 2, q: ["What name is given to the government agency that manages the Great Barrier Reef Marine Park? (Give the full name or its initials.)", "Which Australian government body manages the Marine Park? (initials are fine)"], answer: text("Great Barrier Reef Marine Park Authority", "GBRMPA", "the Marine Park Authority", "Marine Park Authority"), why: "The **Great Barrier Reef Marine Park Authority (GBRMPA)** manages the Marine Park.", hint: "Its name is the park's name plus the word 'Authority'." },
  { d: 2, q: ["What word describes a person or group with an interest in how the reef is used (e.g. fishers, tour operators, farmers)?", "Give the geography term for anyone affected by, or with a say in, a decision about the reef."], answer: text("stakeholder", "stakeholders"), why: "A **stakeholder** is anyone with an interest in the reef — tourism firms, fishers, farmers, Traditional Owners, scientists, government.", hint: "They hold a 'stake' in it." },
  { d: 2, q: ["Which large starfish eats coral polyps and has outbreaks on the reef?", "Name the coral-eating starfish whose outbreaks damage the Great Barrier Reef."], answer: text("crown-of-thorns starfish", "crown of thorns starfish", "crown-of-thorns", "crown of thorns", "COTS"), why: "The **crown-of-thorns starfish** eats coral; outbreaks can strip large areas of reef.", hint: "It is named after its spiky, thorn-like appearance." },
  { d: 2, q: ["Which industry earns the most money from the Great Barrier Reef each year?", "Which economic activity supports the most reef-related jobs in Queensland?"], answer: text("tourism", "reef tourism", "tourist industry", "the tourism industry"), why: "**Tourism** is the reef's biggest earner — millions of visitors come to dive, snorkel and sail.", hint: "Think of divers, snorkellers and boat trips.", traps: [trap("Fishing matters, but it earns far less than visitors do.", "fishing", "commercial fishing")] },
  { d: 2, q: ["Which coastal city is often called the 'gateway to the Great Barrier Reef'? (Its airport serves many reef trips.)", "Name the Queensland city in the far north from which many reef day-trips leave."], answer: text("Cairns"), why: "**Cairns** in far north Queensland is the main tourist gateway to the reef.", hint: "It begins with C." },
  { d: 2, q: ["Which group of people have cared for Sea Country on the reef for tens of thousands of years? (Give the term used in Australia.)", "Who are the Aboriginal and Torres Strait Islander groups with connections to reef areas called in reef management? (two words)"], answer: text("Traditional Owners", "Traditional Owner", "First Nations", "First Nations peoples", "Aboriginal and Torres Strait Islander peoples"), why: "**Traditional Owners** — Aboriginal and Torres Strait Islander groups — have connections to Sea Country and help manage it.", hint: "They are the original custodians of the land and sea." },
  { d: 3, q: ["What type of reef is the Great Barrier Reef mostly made of: fringing, barrier or atoll?", "Is the Great Barrier Reef chiefly a fringing reef, a barrier reef or an atoll?"], answer: text("barrier", "barrier reef", "barrier reefs"), why: "It is mainly a system of **barrier** reefs, separated from the mainland by a lagoon.", hint: "The answer is in its name.", traps: [trap("Fringing reefs grow right against the shore — most of the GBR lies offshore beyond a lagoon.", "fringing", "fringing reef")] },
  { d: 3, q: ["Since 2004, roughly what percentage of the Marine Park has been in green (no-take) zones?", "About what percentage of the Marine Park became no-take green zones in the 2004 rezoning?"], answer: { type: "number", value: 33, tolerance: 1 }, why: "The 2004 rezoning raised green zones to about **33%** (one-third) of the Marine Park.", hint: "It is about one-third.", traps: [{ spec: { type: "number" as const, value: 5 }, feedback: "About 5% was the old figure before 2004 — the rezoning raised it a lot." }] },
  { d: 3, q: ["In which year did the big rezoning of the Marine Park raise green zones to about one-third?", "The Marine Park's Zoning Plan that greatly expanded green zones came into force in which year?"], answer: year(2004), why: "The **2004** Zoning Plan raised no-take green zones to about 33%.", hint: "Early 2000s." },
  { d: 3, q: ["Name the long-term plan (to 2050) agreed by the Australian and Queensland governments to protect the reef.", "What is the name of the joint government plan for the reef's long-term sustainability?"], answer: text("Reef 2050 Plan", "Reef 2050", "Reef 2050 Long-Term Sustainability Plan", "Reef 2050 Long Term Sustainability Plan"), why: "The **Reef 2050 Plan** (Long-Term Sustainability Plan) sets targets for water quality, biodiversity and more.", hint: "It is named after its target year." },
  { d: 3, q: ["In which year did a mass bleaching event first hit the reef in back-to-back years, starting the run 2016, 2017…? (Give the first year.)", "The first of the back-to-back mass bleaching events in the 2010s happened in which year?"], answer: year(2016), why: "Mass bleaching hit in **2016** and again in 2017 — the first back-to-back events — then 2020, 2022 and 2024.", hint: "Mid-2010s, a strong El Niño year." },
];

// ---------------------------------------------------------------------------
// 2. Management terms
// ---------------------------------------------------------------------------
const TERMS: Fact[] = [
  { d: 1, q: ["Give the term for dividing a marine park into areas where different activities are allowed.", "What is it called when a marine park is split into colour-coded areas with different rules?"], answer: text("zoning"), why: "**Zoning** separates uses so that some areas are fully protected while others can be fished.", hint: "The areas are called zones." },
  { d: 1, q: ["What colour are the no-take zones on the Great Barrier Reef zoning map?", "Marine National Park zones, where no fishing or collecting is allowed, are shown in which colour?"], answer: text("green"), why: "**Green** zones (Marine National Park Zones) are no-take: you may look but not take.", hint: "Think 'go green' — the most protected everyday zone.", traps: [trap("Pink zones are even stricter (no entry without a permit), but the no-take Marine National Park zones are green.", "pink")] },
  { d: 1, q: ["What term describes an area where no fishing or collecting of any kind is allowed?", "Give the two-word term (hyphenated) for a zone where nothing may be taken."], answer: text("no-take zone", "no take zone", "no-take", "no take", "no-take area"), why: "A **no-take zone** bans fishing and collecting; on the GBR these are green zones.", hint: "You can 'look but not ___'." },
  { d: 1, q: ["What is it called when stressed coral expels its algae and turns white?", "Name the process that turns corals white when the sea is too warm."], answer: text("coral bleaching", "bleaching"), why: "**Coral bleaching**: heat-stressed corals expel their zooxanthellae algae, losing colour and their main food supply.", hint: "It is named after what happens to the colour." },
  { d: 1, q: ["Give the term for a place of outstanding value to humanity, listed by UNESCO.", "The Great Barrier Reef has been one since 1981 — what kind of site is it?"], answer: text("World Heritage Site", "World Heritage", "UNESCO World Heritage Site", "World Heritage Area"), why: "A **World Heritage Site** is listed by UNESCO for outstanding universal value.", hint: "UNESCO keeps a list of these." },
  { d: 1, q: ["What word describes meeting today's needs without harming the ability of future generations to meet theirs?", "Give the term for using the reef in a way that can carry on long into the future."], answer: text("sustainable", "sustainability", "sustainable development"), why: "**Sustainable** use meets present needs without stopping future generations meeting theirs.", hint: "It begins with 'sustain'." },
  { d: 1, q: ["Fertiliser and soil washing off farms into rivers and the sea is called agricultural ___.", "Give the term for water flowing over the land surface into rivers, carrying soil and chemicals."], answer: text("run-off", "runoff", "run off", "surface run-off", "surface runoff", "overland flow"), why: "Farm **run-off** carries sediment and nutrients to the reef, clouding water and feeding crown-of-thorns larvae.", hint: "The water 'runs ___' the fields.", traps: [trap("Leaching is water moving down through the soil — this is water flowing over the surface.", "leaching")] },
  { d: 2, q: ["Growing small coral fragments on frames or 'trees' before planting them back on a reef is called a coral ___.", "What is the name for an underwater 'garden' where coral fragments are grown before transplanting?"], answer: text("nursery", "coral nursery", "coral nurseries", "coral garden", "coral gardening"), why: "A **coral nursery** grows fragments until they are big enough to transplant.", hint: "Plant growers use the same word for baby plants." },
  { d: 2, q: ["Fixed floats that boats tie up to, so they do not drop anchors on coral, are called ___.", "What do reef managers install so that boats do not need to anchor on coral?"], answer: text("mooring buoys", "moorings", "mooring buoy", "mooring", "public moorings"), why: "**Mooring buoys** stop anchors and chains smashing coral.", hint: "Boats 'moor' to them." },
  { d: 2, q: ["Name the fish-trawling method banned in green zones that drags a net along the sea floor.", "What fishing method drags a heavy net along the sea bed, damaging habitats?"], answer: text("trawling", "bottom trawling", "trawl", "trawl fishing"), why: "**Trawling** drags nets over the sea bed; it is banned in most zones except General Use.", hint: "A boat that does this is a 'trawler'." },
  { d: 2, q: ["Excess nutrients (e.g. from fertiliser) causing algae to bloom is called ___.", "Give the term for water becoming over-rich in nutrients so algae grow out of control."], answer: text("eutrophication"), why: "**Eutrophication**: extra nitrogen and phosphorus feed algal blooms that smother coral and cut light.", hint: "It starts 'eu-'." },
  { d: 3, q: ["Taking out crown-of-thorns starfish by injecting them with vinegar or bile salts is a type of ___ programme.", "Give the term for deliberately killing pest animals to reduce their numbers."], answer: text("culling", "cull", "control", "COTS control"), why: "Divers **cull** crown-of-thorns starfish with a single injection of vinegar or bile salts.", hint: "Farmers use the same word for reducing animal numbers." },
  { d: 3, q: ["The process where the ocean becomes less alkaline because it absorbs carbon dioxide is called ocean ___.", "As the sea absorbs CO₂ its pH falls. What is this called?"], answer: text("acidification", "ocean acidification"), why: "**Ocean acidification** makes it harder for corals to build their calcium carbonate skeletons.", hint: "pH falling = more ___." },
  { d: 3, q: ["What name is given to the tiny algae living inside coral polyps that give coral its colour and food?", "Name the symbiotic algae that corals expel when they bleach."], answer: text("zooxanthellae", "zooxanthella", "symbiotic algae", "zooxanthellae algae"), why: "**Zooxanthellae** live in coral tissue, photosynthesise and pass up to about 90% of their food to the coral.", hint: "It begins 'zoo-'." },
  { d: 3, q: ["A long period of unusually warm sea temperature that can trigger mass bleaching is called a marine ___.", "Give the term for a spell of abnormally hot ocean water lasting days to months."], answer: text("heatwave", "marine heatwave", "heat wave"), why: "A **marine heatwave** can push water 1–2 °C above the summer maximum for weeks — enough to bleach coral.", hint: "Same word we use for a very hot spell on land." },
];

// ---------------------------------------------------------------------------
// 3. Zones: is an activity allowed?
// Green = Marine National Park; Yellow = Conservation Park; Light blue = General Use;
// Pink = Preservation (no entry without a permit). Simplified, ignoring permits.
// ---------------------------------------------------------------------------
type Zone = { name: string; colour: string };
const ZONES: Zone[] = [
  { name: "Marine National Park Zone", colour: "green" },
  { name: "Conservation Park Zone", colour: "yellow" },
  { name: "General Use Zone", colour: "light blue" },
  { name: "Preservation Zone", colour: "pink" },
];
type Act = { label: string; verb: string; ok: [boolean, boolean, boolean, boolean]; reason: string };
const ACTS: Act[] = [
  { label: "snorkelling from a tourist boat", verb: "snorkel from a tourist boat", ok: [true, true, true, false], reason: "Looking is fine in most zones; only pink Preservation Zones are closed to entry without a permit." },
  { label: "line fishing with one rod and one hook", verb: "go line fishing with one rod and one hook", ok: [false, true, true, false], reason: "Green and pink zones are no-take; yellow allows limited line fishing; light blue allows most fishing." },
  { label: "trawling with a net dragged on the sea bed", verb: "trawl with a net dragged on the sea bed", ok: [false, false, true, false], reason: "Trawling is the most damaging method, so it is only allowed in General Use (light blue) zones." },
  { label: "sailing a boat through the area", verb: "sail a boat through the area", ok: [true, true, true, false], reason: "Boating is allowed everywhere except pink Preservation Zones." },
  { label: "breaking off a piece of living coral to take home", verb: "break off a piece of living coral to take home", ok: [false, false, false, false], reason: "Collecting coral needs a special commercial permit even in General Use areas, and is banned outright in green and pink zones — so for a tourist the answer is no." },
];

// ---------------------------------------------------------------------------
// 4. Strategy → threat it tackles
// ---------------------------------------------------------------------------
const STRATS: Fact[] = [
  { d: 1, q: ["Divers inject crown-of-thorns starfish with vinegar or bile salts. Which threat does this tackle?"], answer: text("crown-of-thorns starfish", "crown of thorns starfish", "crown-of-thorns", "crown of thorns", "COTS", "starfish outbreaks", "crown-of-thorns outbreaks"), why: "The culling programme removes coral-eating **crown-of-thorns starfish** from high-value reefs.", hint: "What is being injected?" },
  { d: 1, q: ["Green no-take zones cover about a third of the Marine Park. Which threat do they mainly tackle?", "Banning fishing in a third of the park mainly reduces which threat?"], answer: text("overfishing", "over-fishing", "fishing", "over fishing"), why: "No-take zones let fish stocks recover from **overfishing**.", hint: "What is banned in a green zone?" },
  { d: 1, q: ["Mooring buoys are installed at popular dive sites. Which threat do they reduce?", "Boats tie up to fixed buoys instead of dropping anchor. What damage does this prevent?"], answer: text("anchor damage", "anchoring", "anchors", "damage from anchors", "anchor"), why: "Buoys stop **anchors** and chains smashing coral.", hint: "What would the boat otherwise drop?" },
  { d: 1, q: ["Farmers in reef catchments must limit fertiliser use. Which threat does this tackle?", "Rules on fertiliser and pesticide use on sugar-cane farms tackle which threat to the reef?"], answer: text("run-off", "runoff", "farm run-off", "agricultural run-off", "water pollution", "poor water quality", "nutrient run-off", "pollution"), why: "Fertiliser limits reduce nutrient **run-off** that clouds the water and feeds algae and crown-of-thorns larvae.", hint: "Where does unused fertiliser go when it rains?" },
  { d: 2, q: ["Australia's commitment to net-zero emissions by 2050 is the only long-term answer to which threat to the reef?", "Cutting greenhouse gas emissions tackles which global threat to coral?"], answer: text("climate change", "global warming", "bleaching", "coral bleaching", "rising sea temperatures", "warming seas"), why: "Only cutting emissions slows **climate change**, which drives marine heatwaves and bleaching.", hint: "This threat is global, not local." },
  { d: 2, q: ["Ships must use set shipping lanes and some must carry a local expert pilot. Which threat does this reduce?", "Compulsory pilots for big ships in the reef's inner route reduce which threat?"], answer: text("ship groundings", "groundings", "shipping accidents", "ship grounding", "oil spills", "shipwrecks", "shipping"), why: "Pilots and shipping lanes cut the risk of **ship groundings** and oil spills.", hint: "What might happen if a big ship strays onto a reef?" },
  { d: 2, q: ["Tour operators need permits and some sites have visitor limits. Which threat does this manage?", "Limiting how many tourist boats can visit a reef site manages which pressure?"], answer: text("tourism", "tourist damage", "overcrowding", "too many tourists", "mass tourism", "visitor pressure"), why: "Permits spread out and cap **tourism** pressure (trampling, anchoring, litter).", hint: "Who are the permits for?" },
  { d: 2, q: ["Planting trees along riverbanks in reef catchments mainly reduces which input to the reef?", "Restoring wetlands and gullies near the coast traps which material before it reaches the reef?"], answer: text("sediment", "sediments", "soil", "silt", "mud", "soil erosion"), why: "Vegetation traps **sediment** that would otherwise cloud the water and smother coral.", hint: "Roots hold this in place." },
  { d: 3, q: ["Scientists breed heat-tolerant corals and spread coral larvae on damaged reefs. Which damage are they trying to repair?", "Coral restoration (larval reseeding, nurseries) mainly tries to repair reefs damaged by which event?"], answer: text("bleaching", "coral bleaching", "mass bleaching", "marine heatwaves", "climate change"), why: "Restoration aims to help reefs recover from **bleaching**, though it works only at small scales.", hint: "Why would scientists want heat-tolerant corals?" },
  { d: 3, q: ["Banning dumping of dredged sea-bed material inside the Marine Park (2015) reduces which threat?", "A ban on dumping capital dredge spoil in the Marine Park protects coral from which problem?"], answer: text("sediment", "sedimentation", "smothering", "dredging", "silt", "turbidity"), why: "Dumped spoil adds **sediment** that clouds water and smothers coral.", hint: "Dredge spoil is mostly mud and sand." },
];

// ---------------------------------------------------------------------------
// 5. Local or global threat?
// ---------------------------------------------------------------------------
const LOCAL = ["fertiliser run-off from sugar-cane farms", "overfishing of coral trout", "anchors dropped on coral by tourist boats", "crown-of-thorns starfish outbreaks", "a cargo ship running aground on a reef", "sediment washed down rivers after land clearing", "dredging to deepen a port near the reef", "snorkellers standing on and breaking coral", "pesticides washing off farms into the lagoon", "coastal development destroying mangroves"];
const GLOBAL = ["rising average sea temperatures", "ocean acidification from absorbed CO₂", "marine heatwaves caused by climate change", "greenhouse gas emissions from around the world", "sea-level rise linked to global warming", "stronger tropical cyclones in a warming climate"];

// ---------------------------------------------------------------------------
// 6. Evidence: does it suggest management is working?
// ---------------------------------------------------------------------------
const EVIDENCE: Array<{ e: string; works: boolean; why: string }> = [
  { e: "Coral trout numbers are higher inside green zones than in nearby fished zones.", works: true, why: "More fish where fishing is banned shows no-take zones help stocks recover." },
  { e: "Mass bleaching hit the reef in 2016, 2017, 2020, 2022 and 2024.", works: false, why: "Repeated bleaching shows local management cannot stop global warming." },
  { e: "Crown-of-thorns culling has protected coral cover on high-value tourist reefs.", works: true, why: "Local culling helps where divers can reach — it supports success at small scales." },
  { e: "UNESCO has repeatedly considered listing the reef as World Heritage 'in danger'.", works: false, why: "International concern suggests protection is not yet enough." },
  { e: "Water-quality targets for nutrient and sediment run-off from farms have mostly been missed.", works: false, why: "Missed targets mean the local threat of run-off is still not under control." },
  { e: "Fewer ship groundings have happened since compulsory pilots were introduced.", works: true, why: "A clear fall in accidents suggests the shipping rules work." },
  { e: "Corals have regrown on reefs where green zones and culling reduced other stresses.", works: true, why: "Healthier reefs recover faster, suggesting local action builds resilience." },
  { e: "More than half of the coral colonies on the reef were lost between 1995 and 2017.", works: false, why: "A big long-term loss suggests management has not prevented decline." },
  { e: "Tourism permits have kept visitor numbers at sites within set limits while jobs remain.", works: true, why: "Using the reef while capping pressure is a sign of sustainable management." },
  { e: "Sea temperatures keep rising, even though Queensland farms have cut fertiliser use.", works: false, why: "Local improvements cannot offset a global threat." },
  { e: "Green zones are linked to fewer crown-of-thorns outbreaks on some reefs than fished reefs.", works: true, why: "More predators in no-take zones may help keep starfish in check." },
  { e: "Illegal fishing has been found inside green zones during patrols.", works: false, why: "Rules only work if they are obeyed and enforced." },
  { e: "Coral restoration has replanted coral on only a tiny fraction of the 2,300 km reef.", works: false, why: "Restoration cannot match the scale of damage — it is too small to save the whole reef." },
];

// ---------------------------------------------------------------------------
// 7. Singapore / closer to home
// ---------------------------------------------------------------------------
const SG: Fact[] = [
  { d: 1, q: ["What is the name of Singapore's first marine park?", "Name the marine park off Singapore's southern islands opened to protect reefs."], answer: text("Sisters' Islands Marine Park", "Sisters Islands Marine Park", "Sisters' Islands", "Sisters Islands", "Sisters Island Marine Park"), why: "**Sisters' Islands Marine Park** is Singapore's first marine park.", hint: "It is named after two small islands that look like a pair of siblings." },
  { d: 1, q: ["In which year was Sisters' Islands Marine Park announced?", "Singapore's first marine park was set up in which year?"], answer: year(2014), why: "Sisters' Islands Marine Park was announced in **2014**.", hint: "Mid-2010s." },
  { d: 1, q: ["Which Singapore government agency manages Sisters' Islands Marine Park? (initials are fine)", "Name the agency that looks after Singapore's parks and its marine park."], answer: text("NParks", "National Parks Board", "National Parks", "the National Parks Board"), why: "The **National Parks Board (NParks)** manages the marine park.", hint: "It also runs the Botanic Gardens." },
  { d: 1, q: ["What everyday product should snorkellers choose 'reef-safe' versions of, because some chemicals harm coral?", "Some ingredients such as oxybenzone can harm coral. Which product that you put on your skin contains them?"], answer: text("sunscreen", "sun cream", "suncream", "sunblock", "sun screen"), why: "Choose **reef-safe sunscreen** (or wear a rash vest) to avoid chemicals like oxybenzone.", hint: "You put it on before swimming in the sun." },
  { d: 1, q: ["Moving coral fragments from a nursery or a threatened site to a healthy reef is called coral ___.", "Corals rescued from a reclamation site were moved to Sisters' Islands. What is this process called?"], answer: text("transplanting", "transplantation", "transplant", "relocation", "coral transplanting"), why: "**Transplanting** moves corals to a safer site so they can keep growing.", hint: "Gardeners do this to seedlings." },
  { d: 2, q: ["Singapore's waters contain over 250 species of what kind of coral (the reef builders)?", "Singapore has about a third of the world's species of which reef-building coral type? (one word)"], answer: text("hard", "hard coral", "hard corals", "stony", "stony coral", "stony corals"), why: "Singapore has over 250 species of **hard (stony) coral** — about a third of the world's total.", hint: "The opposite of soft coral." },
  { d: 2, q: ["What is the main reason Singapore's reefs get little sunlight, even though the water is warm?", "Land reclamation and dredging around Singapore stir up what, which blocks sunlight from coral?"], answer: text("sediment", "sedimentation", "silt", "turbidity", "murky water", "cloudy water", "mud"), why: "Reclamation and shipping stir up **sediment**, making the water murky so coral gets less light.", hint: "It makes the water look cloudy." },
  { d: 2, q: ["Which offshore island in Singapore has a landfill but also thriving reefs and mangroves?", "Name the Singapore island used as an offshore landfill that also has rich intertidal reefs."], answer: text("Semakau", "Pulau Semakau", "Semakau Landfill"), why: "**Pulau Semakau** is an offshore landfill with healthy reefs and mangroves nearby.", hint: "Pulau S___." },
  { d: 2, q: ["What should you never do with your feet when snorkelling over a reef?", "Snorkellers break coral most often by doing what on it?"], answer: text("stand on it", "stand", "standing", "step on it", "standing on coral", "stand on coral", "touch it", "kick it"), why: "**Standing** (or kicking) breaks fragile coral — float, and keep fins up.", hint: "Your feet should never touch the bottom." },
  { d: 3, q: ["Which global action by individuals (e.g. taking public transport, saving electricity) most helps reefs in the long term?", "Coral bleaching is driven by global warming. What should people cut to help reefs everywhere?"], answer: text("cutting emissions", "cut emissions", "carbon emissions", "emissions", "reduce emissions", "reducing carbon emissions", "carbon footprint", "greenhouse gas emissions", "reducing our carbon footprint"), why: "Cutting **greenhouse gas emissions** slows warming — the biggest threat to every reef.", hint: "Think about what causes global warming." },
  { d: 3, q: ["The Sisters' Islands Marine Park includes the Sisters' Islands and the western reefs of which two islands? Name ONE.", "Name one of the two islands whose western reefs are also part of Sisters' Islands Marine Park."], answer: text("St John's Island", "St Johns Island", "St John's", "St Johns", "Pulau Tekukor", "Tekukor"), why: "The park includes the western reefs of **St John's Island** and **Pulau Tekukor**.", hint: "One is named after a saint." },
  { d: 3, q: ["Divers record which fish, corals and invertebrates live at a reef so changes can be tracked. What is this ongoing checking called?", "Volunteers survey reefs every year to track coral cover. Give the term for this regular checking."], answer: text("monitoring", "reef monitoring", "surveying", "reef survey", "reef check"), why: "**Monitoring** shows whether management is working over time.", hint: "Regular checking = ___ing." },
];

export const drills: Drill[] = [
  {
    id: `${T}.gbr-key-facts`,
    topicId: T,
    title: "Recall Great Barrier Reef key facts",
    level: 1,
    guideRef: "gbr-facts",
    generate(rng, tier) {
      return fromBank(GBR_FACTS, rng, tier);
    },
  },
  {
    id: `${T}.management-terms`,
    topicId: T,
    title: "Give the reef-management key term",
    level: 1,
    guideRef: "management-strategies",
    generate(rng, tier) {
      return fromBank(TERMS, rng, tier);
    },
  },
  {
    id: `${T}.sg-reefs`,
    topicId: T,
    title: "Recall facts about protecting Singapore's reefs",
    level: 1,
    guideRef: "protecting-reefs-elsewhere",
    generate(rng, tier) {
      return fromBank(SG, rng, tier);
    },
  },
  {
    id: `${T}.zone-rules`,
    topicId: T,
    title: "Is this activity allowed in this zone?",
    level: 2,
    guideRef: "management-strategies",
    generate(rng, tier) {
      // Tier 1: green vs light blue only; tier 2+: all four zones; tier 3 names the zone by its official name.
      const zi = tier === 1 ? rng.int(0, 2) : rng.int(0, 3);
      const a = rng.pick(ACTS);
      const z = ZONES[zi];
      const ok = a.ok[zi];
      const where = tier === 3 ? `a ${z.name}` : `a ${z.colour} zone (${z.name})`;
      const prompt = rng.pick([
        `On the Great Barrier Reef zoning map, is **${a.label}** allowed in ${where}? Answer yes or no.`,
        `Someone wants to ${a.verb} in ${where}. Is it allowed? (yes / no)`,
      ]);
      return {
        prompt,
        answer: ok ? text("yes", "y", "allowed") : text("no", "n", "not allowed"),
        solution: [`${z.colour[0].toUpperCase() + z.colour.slice(1)} = ${z.name}.`, a.reason, `So the answer is **${ok ? "yes" : "no"}** (simplified — some activities need permits).`],
        hint: "Green = look but don't take; yellow = limited fishing; light blue = most uses; pink = keep out.",
        traps: [{ spec: ok ? text("no", "not allowed") : text("yes", "allowed"), feedback: ok ? "Check again — this zone does allow it." : "Not here — check what this colour zone protects against." }],
      };
    },
  },
  {
    id: `${T}.strategy-threat`,
    topicId: T,
    title: "Match a management strategy to the threat it tackles",
    level: 2,
    guideRef: "management-strategies",
    generate(rng, tier) {
      const lead = rng.pick(["Strategy check:", "Reef manager's notebook:", "Cause → effect:", "Think like GBRMPA:"]);
      return fromBank(STRATS, rng, tier, lead);
    },
  },
  {
    id: `${T}.local-or-global`,
    topicId: T,
    title: "Classify a threat as local or global",
    level: 2,
    guideRef: "evaluating-management",
    generate(rng, tier) {
      const isLocal = rng.bool(0.5);
      const t = rng.pick(isLocal ? LOCAL : GLOBAL);
      const stem = tier === 3
        ? rng.pick([`Could Australian reef managers tackle **${t}** with local rules alone? Answer **local** (yes, it can be managed locally) or **global** (no, it needs worldwide action).`, `A reef manager says: \"We can fix ${t} with Queensland rules.\" Is this threat **local** or **global**?`])
        : rng.pick([`Is this a local or a global threat to the Great Barrier Reef: **${t}**?`, `Classify this threat to the reef as local or global: **${t}**.`]);
      return {
        prompt: stem,
        answer: isLocal ? text("local") : text("global"),
        solution: isLocal
          ? [`"${t[0].toUpperCase() + t.slice(1)}": the cause starts in or near the reef, so Australian rules (zoning, farm limits, permits) can control it — a **local** threat.`]
          : [`"${t[0].toUpperCase() + t.slice(1)}": the cause is greenhouse gases released all over the world, so no local rule can stop it — a **global** threat.`, "This is why climate change limits what local management can achieve."],
        hint: "Ask: does the cause start in Queensland, or from emissions all over the world?",
        traps: [{ spec: isLocal ? text("global") : text("local"), feedback: isLocal ? "The cause starts in or near the reef, so local rules can reach it." : "Australia alone cannot stop this — it comes from worldwide emissions." }],
      };
    },
  },
  {
    id: `${T}.evidence-for-against`,
    topicId: T,
    title: "Does this evidence show management is working?",
    level: 2,
    guideRef: "evaluating-management",
    generate(rng) {
      const ev = rng.pick(EVIDENCE);
      const q = rng.pick([
        "Does this evidence suggest reef management is **working** or **not working**?",
        "Is this evidence FOR success (answer **working**) or AGAINST it (answer **not working**)?",
      ]);
      return {
        prompt: `> ${ev.e}\n\n${q}`,
        answer: ev.works ? text("working", "for", "yes", "it is working", "success") : text("not working", "against", "no", "it is not working", "failing"),
        solution: [ev.why, "A good evaluation weighs both kinds of evidence before making a judgement."],
        hint: "Is the reef better off because of a rule here, or is it still being damaged?",
        traps: [{ spec: ev.works ? text("not working") : text("working"), feedback: ev.works ? "This shows an improvement linked to a management rule." : "This shows damage continuing despite management." }],
      };
    },
  },
  {
    id: `${T}.zone-percentages`,
    topicId: T,
    title: "Calculate zone areas and percentages",
    level: 2,
    guideRef: "management-strategies",
    generate(rng, tier) {
      if (tier === 1) {
        // Friendly: total a multiple of 100, green a whole percent.
        const total = rng.pick([2000, 4000, 5000, 8000, 10000, 20000, 25000, 40000, 50000]);
        const p = rng.pick([10, 20, 25, 30, 40, 50, 60]);
        const green = (total * p) / 100;
        return {
          prompt: `A marine park covers ${big(total)} km². Of this, ${big(green)} km² is green (no-take) zone. What **percentage** of the park is green zone?`,
          answer: { type: "number", value: p },
          solution: [`Percentage = part ÷ whole × 100`, `    ${big(green)} ÷ ${big(total)} × 100 = ${p}%`],
          hint: "Divide the green area by the total area, then × 100.",
          traps: [{ spec: { type: "number" as const, value: clean(green / total) }, feedback: "You found the fraction — now multiply by 100 to make a percentage." }],
        };
      }
      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // GBR real total: 344,400 km²; ask green area from a percentage.
          const p = rng.pick([10, 15, 20, 25, 30, 33, 35, 40, 45]);
          const total = rng.pick([344400, 120000, 86000, 64000, 15000, 9200, 4800]);
          const ans = clean((total * p) / 100);
          const name = total === 344400 ? "The Great Barrier Reef Marine Park covers about 344,400 km²." : `A reef park covers ${big(total)} km².`;
          return {
            prompt: `${name} If ${p}% of it is zoned green (no-take), what area is that in km²? Give an exact answer.`,
            answer: { type: "number", value: ans },
            solution: [`${p}% of ${big(total)} = ${p} ÷ 100 × ${big(total)}`, `    = ${big(ans)} km²`],
            hint: `Find 1% first (÷ 100), then multiply by ${p}.`,
            traps: total / p !== ans ? [{ spec: { type: "number" as const, value: clean(total / p) }, feedback: "You divided by the percentage — find 1% (÷ 100) then × the percentage." }] : undefined,
          };
        }
        const total = rng.int(30, 300) * 100;
        const green = rng.int(Math.round(total * 0.1), Math.round(total * 0.6));
        const ans = roundTo((green / total) * 100, 1);
        return {
          prompt: `A reef park is ${big(total)} km². Green zones cover ${big(green)} km². What percentage is green zone? Give your answer to 1 decimal place.`,
          answer: { type: "number", value: ans, tolerance: 0.05 },
          solution: [`${big(green)} ÷ ${big(total)} × 100 = ${num(roundTo((green / total) * 100, 4))}…`, `= ${num(ans)}% (1 d.p.)`],
          hint: "Part ÷ whole × 100, then round.",
          traps: [{ spec: { type: "number" as const, value: roundTo((total / green) * 100, 1) }, feedback: "You divided the wrong way round — it's green ÷ total." }].filter((t) => Math.abs(t.spec.value - ans) > 0.1),
        };
      }
      // Tier 3: multiple zones; find the remaining zone's share.
      const total = rng.int(40, 400) * 100;
      const g = rng.int(20, 40), y = rng.int(5, 20), pk = rng.int(1, 5);
      const blue = 100 - g - y - pk;
      const blueArea = clean((total * blue) / 100);
      return {
        prompt: `A ${big(total)} km² marine park is zoned: green ${g}%, yellow ${y}%, pink ${pk}%, and the rest is light-blue General Use. What **area** in km² is General Use? Give an exact answer.`,
        answer: { type: "number", value: blueArea },
        solution: [`General Use % = 100 − ${g} − ${y} − ${pk} = ${blue}%`, `${blue}% of ${big(total)} = ${blue} ÷ 100 × ${big(total)} = ${big(blueArea)} km²`],
        hint: "All the zones add up to 100%. Find the missing percentage first.",
        traps: [{ spec: { type: "number" as const, value: blue }, feedback: `${blue} is the percentage — now find ${blue}% of the area.` }],
      };
    },
  },
  {
    id: `${T}.budget-shares`,
    topicId: T,
    title: "Work out shares of a reef protection budget",
    level: 2,
    guideRef: "evaluating-management",
    generate(rng, tier) {
      const items = ["improving farm water quality", "crown-of-thorns control", "coral restoration", "reef monitoring and science", "compliance patrols"];
      const k = tier === 1 ? 3 : tier === 2 ? 4 : 5;
      const chosen = rng.shuffle(items).slice(0, k);
      const unit = tier === 1 ? 10 : 5;
      // Random split that sums to the total.
      let parts: number[] = [];
      let total = 0;
      for (let i = 0; i < 40; i++) {
        parts = chosen.map(() => rng.int(1, tier === 1 ? 8 : 20) * unit);
        total = parts.reduce((a, b) => a + b, 0);
        if (total >= (tier === 1 ? 30 : 60)) break;
      }
      const idx = rng.int(0, k - 1);
      const share = roundTo((parts[idx] / total) * 100, 1);
      const table = "| Spending area | $ million |\n| --- | --- |\n" + chosen.map((c, i) => `| ${c} | ${parts[i]} |`).join("\n");
      const exact = clean((parts[idx] / total) * 100) === share;
      return {
        prompt: `A reef protection fund of $${total} million is split like this:\n\n${table}\n\nWhat **percentage** of the fund goes to **${chosen[idx]}**? ${exact ? "" : "Give your answer to 1 decimal place."}`.trim(),
        answer: exact ? { type: "number", value: share } : { type: "number", value: share, tolerance: 0.05 },
        solution: [`${parts[idx]} ÷ ${total} × 100 = ${exact ? num(share) : num(roundTo((parts[idx] / total) * 100, 4)) + "…"}`, `= ${num(share)}%`, tier === 3 ? "Notice how little goes to cutting emissions — no local budget can fix global warming." : "Bigger shares usually go to the threats managers think they can control."],
        hint: "This item ÷ the whole fund × 100.",
        traps: [{ spec: { type: "number" as const, value: parts[idx] }, feedback: "That's the dollar amount, not the percentage." }].filter((t) => Math.abs(t.spec.value - share) > 0.1),
      };
    },
  },
  {
    id: `${T}.tourism-value`,
    topicId: T,
    title: "Calculate money raised from reef tourism",
    level: 3,
    guideRef: "gbr-facts",
    generate(rng, tier) {
      const visitors = tier === 1 ? rng.int(2, 9) * 100 : tier === 2 ? rng.int(12, 99) * 50 : rng.int(100, 900) * 20;
      const charge = tier === 1 ? rng.pick([5, 6, 8, 10]) : rng.pick([5.5, 6.5, 7, 7.5, 8.5, 9]);
      const raised = clean(visitors * charge);
      if (tier < 3) {
        return {
          prompt: `Suppose every reef visitor pays a management charge of ${money(charge)} per day. A boat company takes ${big(visitors)} visitor-days in a month. How much do they pay in charges, in dollars?`,
          answer: { type: "number", value: raised },
          solution: [`${big(visitors)} × ${money(charge)} = $${big(raised)}`, "Charges like this help pay for reef research, patrols and education."],
          hint: "Total = number of visitor-days × charge per day.",
          traps: [{ spec: { type: "number" as const, value: clean(visitors + charge) }, feedback: "You added — each visitor-day pays the charge, so multiply." }],
        };
      }
      const ticket = rng.pick([120, 150, 180, 200, 240, 250]);
      const pct = roundTo((charge / ticket) * 100, 1);
      return {
        prompt: `A reef trip costs $${ticket}, which includes a management charge of ${money(charge)}. What **percentage** of the ticket price is the charge? Give your answer to 1 decimal place.`,
        answer: { type: "number", value: pct, tolerance: 0.05 },
        solution: [`${num(charge)} ÷ ${ticket} × 100 = ${num(roundTo((charge / ticket) * 100, 4))}…`, `= ${num(pct)}% — a small share, so the charge rarely puts tourists off.`],
        hint: "Charge ÷ ticket price × 100.",
        traps: [{ spec: { type: "number" as const, value: roundTo((ticket / charge) * 100, 1) }, feedback: "Upside down — divide the charge by the ticket price." }],
      };
    },
  },
  {
    id: `${T}.coral-cover-change`,
    topicId: T,
    title: "Calculate percentage change in coral cover or fish numbers",
    level: 3,
    guideRef: "evaluating-management",
    generate(rng, tier) {
      const fish = rng.bool(0.4);
      let a: number, b: number;
      if (fish) {
        a = tier === 1 ? rng.int(2, 9) * 10 : rng.int(20, 120);
        b = tier === 1 ? a * 2 : rng.int(a + 5, a * 2 + 20);
      } else if (tier === 1) {
        a = rng.pick([20, 40, 60, 80]);
        b = a + (a * rng.pick([-50, -25, -20, -10, 10, 20, 25, 50])) / 100;
      } else {
        a = rng.int(10, 45);
        do { b = rng.int(5, 50); } while (b === a);
      }
      const ch = roundTo(((b - a) / a) * 100, 1);
      const exact = clean(((b - a) / a) * 100) === ch;
      const what = fish
        ? `A survey counted ${a} coral trout per hectare on a reef before it became a green zone, and ${b} per hectare some years later.`
        : `Average hard coral cover on a section of reef changed from ${a}% to ${b}% between two surveys.`;
      return {
        prompt: `${what} Calculate the **percentage change**. ${exact ? "" : "Give your answer to 1 decimal place."} (Use a minus sign for a decrease.)`.replace("  ", " ").trim(),
        answer: { type: "number", value: ch, tolerance: exact ? undefined : 0.05 },
        solution: [`% change = (new − old) ÷ old × 100`, `    (${b} − ${a}) ÷ ${a} × 100 = ${exact ? num(ch) : num(roundTo(((b - a) / a) * 100, 4)) + "…"}`, `= ${num(ch)}%${ch < 0 ? " (a decrease)" : " (an increase)"}`, fish ? "More fish inside a green zone is evidence that no-take zones work." : "Coral cover changes with bleaching, cyclones and crown-of-thorns — one survey is not the whole story."],
        hint: "Change ÷ ORIGINAL value × 100.",
        traps: [
          { spec: { type: "number" as const, value: b - a }, feedback: "That's the change in units — divide by the original and × 100." },
          { spec: { type: "number" as const, value: roundTo(((b - a) / b) * 100, 1) }, feedback: "Divide by the ORIGINAL (old) value, not the new one." },
        ].filter((t) => Math.abs(t.spec.value - ch) > 0.1),
      };
    },
  },
];
