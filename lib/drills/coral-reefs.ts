import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { num, roundTo, clean } from "./helpers.ts";

// ---------------------------------------------------------------------------
// Fact-bank helper (retrieval drills)
// ---------------------------------------------------------------------------

interface Fact {
  /** One or more phrasings of the same question. */
  q: string[];
  /** Accepted text answers, or a full AnswerSpec for numeric facts. */
  a: string[] | AnswerSpec;
  /** One-line explanation used as the worked solution. */
  why: string;
  /** 1 = core fact, 2 = typical Year 8, 3 = stretch. */
  lvl: 1 | 2 | 3;
  hint?: string;
  traps?: Array<[string[], string]>;
}

function fromBank(rng: Rng, tier: 1 | 2 | 3, facts: Fact[], defaultHint: string): DrillItem {
  let pool: Fact[];
  if (tier === 1) pool = facts.filter((f) => f.lvl <= 2);
  else if (tier === 2) pool = facts;
  else pool = rng.bool(0.5) ? facts.filter((f) => f.lvl >= 2) : facts;
  const f = rng.pick(pool);
  const prompt = rng.pick(f.q);
  const answer: AnswerSpec = Array.isArray(f.a) ? { type: "text", accept: f.a } : f.a;
  const traps: Trap[] | undefined = f.traps?.map(([accept, feedback]) => ({ spec: { type: "text", accept }, feedback }));
  return { prompt, answer, solution: [f.why], hint: f.hint ?? defaultHint, traps };
}

// ---------------------------------------------------------------------------
// Banks
// ---------------------------------------------------------------------------

const KEY_TERMS: Fact[] = [
  {
    q: ["Name the tiny, soft-bodied animal that builds a coral reef.", "Coral is not a plant or a rock — it is a colony of thousands of tiny animals. What is each animal called?"],
    a: ["polyp", "coral polyp", "polyps"],
    why: "A coral is a colony of **polyps** — tiny animals, each with a mouth ringed by tentacles, sitting in a limestone cup.",
    lvl: 1,
    traps: [[["plankton"], "Plankton is what polyps EAT — the reef-building animal itself is the polyp."]],
  },
  {
    q: ["Name the microscopic algae that live inside coral polyps and make food by photosynthesis.", "What are the tiny algae that give corals most of their colour called?"],
    a: ["zooxanthellae", "zooxanthella", "zooxanthelae", "zooxanthellea"],
    why: "**Zooxanthellae** live in the polyp's tissue, photosynthesise and pass most of the sugar they make to the coral. They also give corals their colour.",
    lvl: 1,
    traps: [[["plankton", "phytoplankton"], "Plankton drifts in the water outside the coral. The algae living INSIDE polyps are zooxanthellae."]],
  },
  {
    q: ["What substance do coral polyps use to build their hard skeletons?", "Coral skeletons are made of the same mineral as limestone and chalk. Name it."],
    a: ["calcium carbonate", "CaCO3", "aragonite"],
    why: "Polyps take calcium and carbonate out of sea water and build skeletons of **calcium carbonate** — layer upon layer, these become the reef.",
    lvl: 1,
  },
  {
    q: ["Coral polyps give algae shelter; the algae give the polyps food. What is this kind of two-way, win-win relationship called?", "Give the scientific word for a close relationship between two species in which both benefit, like corals and their algae."],
    a: ["symbiosis", "symbiotic relationship", "symbiotic", "mutualism", "mutualistic relationship", "mutualistic"],
    why: "This is **symbiosis** (more exactly, mutualism): the polyp gets food and colour, the algae get shelter, carbon dioxide and nutrients.",
    lvl: 2,
    traps: [[["parasitism", "parasite", "parasitic"], "In parasitism one side is harmed. Here BOTH partners benefit."]],
  },
  {
    q: ["By which process do the algae inside corals make sugar using sunlight?", "Reef-building corals need sunlight because their algae carry out which process?"],
    a: ["photosynthesis"],
    why: "The algae use sunlight, carbon dioxide and water to make sugar by **photosynthesis** — the main reason reefs need shallow, clear water.",
    lvl: 1,
    traps: [[["respiration"], "Respiration releases energy from food; the algae MAKE food by photosynthesis."]],
  },
  {
    q: ["Which body parts, armed with stinging cells, do coral polyps use to catch food?", "At night polyps stretch out arm-like parts to grab passing plankton. What are these parts called?"],
    a: ["tentacles", "tentacle", "stinging tentacles"],
    why: "Each polyp has a ring of **tentacles** with stinging cells around its mouth, used to catch plankton.",
    lvl: 1,
  },
  {
    q: ["What tiny drifting organisms do coral polyps catch for food, mostly at night?", "Corals get extra food by catching small drifting animals from the water. What are these called?"],
    a: ["plankton", "zooplankton"],
    why: "Polyps catch **plankton** (especially zooplankton) with their tentacles — a top-up to the sugar from their algae.",
    lvl: 1,
  },
  {
    q: ["Name the type of reef that grows right next to the shore, with little or no lagoon.", "Which is the most common type of reef — the kind found hugging the shores of Singapore's Southern Islands?"],
    a: ["fringing reef", "fringing", "fringe reef"],
    why: "A **fringing reef** grows directly from the shore, with at most a narrow, shallow channel behind it.",
    lvl: 1,
    traps: [[["barrier reef", "barrier"], "A barrier reef is separated from land by a WIDE, deep lagoon."], [["atoll"], "An atoll is a ring of reef around a lagoon, with no island in the middle."]],
  },
  {
    q: ["Name the type of reef separated from the mainland by a wide, deep lagoon.", "The reef off Queensland in Australia lies far offshore with a broad lagoon behind it. What type of reef is it?"],
    a: ["barrier reef", "barrier"],
    why: "A **barrier reef** runs parallel to the coast but is separated from it by a wide, deep lagoon.",
    lvl: 1,
    traps: [[["fringing reef", "fringing"], "Fringing reefs grow right against the shore — this one has a wide lagoon in between."]],
  },
  {
    q: ["Name the ring-shaped reef that surrounds a lagoon, often where a volcanic island has sunk.", "The Maldives are made up of rings of coral islands around lagoons. What is each ring called?"],
    a: ["atoll", "coral atoll", "atolls"],
    why: "An **atoll** is a ring (or horseshoe) of reef and low islands around a central lagoon — the island it once surrounded has sunk.",
    lvl: 1,
    traps: [[["barrier reef", "barrier"], "A barrier reef runs along a coast. A ring of reef with no land in the middle is an atoll."]],
  },
  {
    q: ["What is the sheltered area of shallow water between a barrier reef and the coast called?", "What is the area of calm water in the middle of an atoll called?"],
    a: ["lagoon"],
    why: "A **lagoon** is calm, shallow water sheltered behind a reef — between a barrier reef and the coast, or inside an atoll.",
    lvl: 1,
  },
  {
    q: ["A single coral 'head' is made of thousands of genetically identical polyps joined together. What is this group called?", "Corals that live joined together, sharing tissue and building one skeleton, form a ___. Fill in the gap."],
    a: ["colony", "coral colony", "colonies"],
    why: "Polyps divide again and again, so one coral is a **colony** of identical polyps sharing one skeleton.",
    lvl: 2,
  },
  {
    q: ["Corals belong to the same animal group as jellyfish and sea anemones. Name this group.", "Stinging cells on the tentacles are a feature of which animal group that includes corals and jellyfish?"],
    a: ["cnidarians", "cnidaria", "cnidarian"],
    why: "Corals are **cnidarians**, like jellyfish and sea anemones — soft-bodied animals with stinging cells.",
    lvl: 3,
  },
  {
    q: ["On a few nights after a full moon, many corals on the Great Barrier Reef release eggs and sperm at the same time. What is this event called?", "Name the yearly event when huge numbers of corals reproduce together, filling the water with eggs and sperm."],
    a: ["mass spawning", "spawning", "coral spawning", "mass coral spawning"],
    why: "This is **mass spawning** — releasing eggs and sperm together raises the chance they meet. On the Great Barrier Reef it happens after a full moon in late spring.",
    lvl: 3,
  },
  {
    q: ["Which kind of coral — hard or soft — builds reefs from calcium carbonate skeletons?", "Reef-building corals are also called stony corals. Are they hard corals or soft corals?"],
    a: ["hard", "hard coral", "hard corals", "stony coral", "stony"],
    why: "**Hard (stony) corals** lay down calcium carbonate skeletons, which build up into reefs. Soft corals do not build reefs.",
    lvl: 2,
    traps: [[["soft", "soft coral", "soft corals"], "Soft corals sway like plants and have no solid skeleton — they don't build reefs."]],
  },
  {
    q: ["Darwin's theory: a fringing reef grows round a volcanic island, then the island slowly ___ while the reef grows upward. What does the island do?", "Name the slow downward movement of a volcanic island that, according to Darwin, turns a fringing reef into a barrier reef and then an atoll."],
    a: ["sinks", "sinking", "subsides", "subsidence", "sank", "sink"],
    why: "The island **sinks (subsides)** while corals keep growing up towards the light, so fringing → barrier → atoll.",
    lvl: 3,
  },
  {
    q: ["Who first explained how atolls form, after sailing round the world on HMS Beagle?", "Which naturalist, better known for evolution, published a theory of coral atolls in 1842?"],
    a: ["Charles Darwin", "Darwin"],
    why: "**Charles Darwin** proposed the subsidence theory of atolls; drilling on Enewetak atoll in the 1950s found volcanic rock deep below the coral, supporting him.",
    lvl: 3,
  },
  {
    q: ["What rock forms over thousands of years from old coral skeletons piled up and cemented together?", "Ancient coral reefs can be found on land today as which type of rock?"],
    a: ["limestone", "coral limestone", "reef limestone"],
    why: "Dead coral skeletons and shell fragments get cemented together into **limestone**.",
    lvl: 2,
  },
];

const CONDITIONS: Fact[] = [
  {
    q: ["Reef-building corals need warm water. Below about what temperature, in °C, can they not survive long-term?", "Give the lower temperature limit (in °C) usually quoted for reef-building corals."],
    a: { type: "number", value: 18, tolerance: 1 },
    why: "Reef-building corals need water of roughly **18–29 °C**; below about 18 °C they cannot build reefs.",
    lvl: 1,
  },
  {
    q: ["Most coral reefs lie between about 30°N and ___°S of the equator. Fill in the number.", "Coral reefs are found in a belt from about 30° north to about how many degrees south of the equator?"],
    a: { type: "number", value: 30 },
    why: "Reefs grow in a belt roughly **30°N to 30°S**, where the sea stays warm enough all year.",
    lvl: 1,
  },
  {
    q: ["Corals need clear, shallow water so that enough ___ reaches their algae. Fill in the gap.", "Why can't reef-building corals live in deep water? Name what runs out as the water gets deeper."],
    a: ["sunlight", "light", "sun", "sun light"],
    why: "The algae inside polyps need **sunlight** to photosynthesise, and light fades quickly with depth and in murky water.",
    lvl: 1,
  },
  {
    q: ["Reefs are usually missing near which coastal feature, where fresh, muddy water pours into the sea?", "Fresh water lowers salinity and brings mud. Near what kind of place on a coast are reefs usually absent for this reason?"],
    a: ["river mouth", "river mouths", "estuary", "estuaries", "delta", "river", "rivers"],
    why: "At a **river mouth** the water is too fresh and full of sediment for reef-building corals.",
    lvl: 2,
  },
  {
    q: ["Name the region of ocean between Indonesia, Malaysia, the Philippines and Papua New Guinea with the world's greatest variety of corals.", "Which area of South-east Asia and the western Pacific is called the 'Amazon of the seas' for its coral diversity?"],
    a: ["Coral Triangle"],
    why: "The **Coral Triangle** holds about three-quarters of the world's reef-building coral species.",
    lvl: 1,
  },
  {
    q: ["The Coral Triangle holds about what fraction of the world's reef-building coral species: a quarter, a half or three-quarters?"],
    a: ["three-quarters", "three quarters", "3/4", "75%", "75", "three quarter"],
    why: "About **three-quarters** (roughly 75%) of reef-building coral species are found in the Coral Triangle.",
    lvl: 3,
    traps: [[["a quarter", "quarter", "25%", "1/4"], "A quarter is the share of all MARINE species that rely on reefs — the Coral Triangle holds about three-quarters of coral species."]],
  },
  {
    q: ["In which Australian state is the Great Barrier Reef?", "The Great Barrier Reef runs along the coast of which state of Australia?"],
    a: ["Queensland", "QLD"],
    why: "The Great Barrier Reef lies off the coast of **Queensland**, north-east Australia.",
    lvl: 1,
  },
  {
    q: ["Name the sea, part of the Pacific Ocean, in which the Great Barrier Reef lies.", "The Great Barrier Reef lies in which sea off north-east Australia?"],
    a: ["Coral Sea"],
    why: "The Great Barrier Reef lies in the **Coral Sea**, part of the south-west Pacific.",
    lvl: 2,
  },
  {
    q: ["Cold ocean water keeps reefs away from the coast of Peru. Name the cold current there.", "Which cold current flows north along the west coast of South America, keeping the sea too cool for reefs?"],
    a: ["Humboldt Current", "Humboldt", "Peru Current", "Peru"],
    why: "The cold **Humboldt (Peru) Current** — plus cold upwelling — keeps the sea off western South America too cool for reefs.",
    lvl: 3,
  },
  {
    q: ["Few corals grow off Namibia in south-west Africa because of which cold current?", "Name the cold current that flows north along the west coast of southern Africa."],
    a: ["Benguela Current", "Benguela"],
    why: "The cold **Benguela Current** keeps the water off south-west Africa well below 18 °C.",
    lvl: 3,
  },
  {
    q: ["Shallow reefs are rare near the mouths of huge rivers like the Amazon. Name the material the river carries that clouds the water.", "Rivers wash mud and silt into the sea, blocking light and smothering corals. Give one word for this material."],
    a: ["sediment", "silt", "mud", "sediments"],
    why: "Rivers carry **sediment** that clouds the water and settles on corals, blocking light.",
    lvl: 2,
  },
  {
    q: ["Singapore's coral reefs are mostly which type of reef, growing along the shores of the Southern Islands?"],
    a: ["fringing reef", "fringing", "fringe reef"],
    why: "Singapore's reefs are mainly **fringing reefs** around the Southern Islands (plus some small patch reefs).",
    lvl: 2,
    traps: [[["barrier reef", "barrier"], "Singapore has no big offshore barrier reef — its reefs fringe the islands."]],
  },
  {
    q: ["Name Singapore's first marine park, set up in 2014 around two small islands south of the main island.", "Which Singapore marine park, south of Sentosa, protects reefs around a pair of small islands?"],
    a: ["Sisters' Islands Marine Park", "Sisters Islands Marine Park", "Sisters' Islands", "Sisters Islands", "Sister Islands", "Sisters Island"],
    why: "**Sisters' Islands Marine Park** (2014) was Singapore's first marine park.",
    lvl: 2,
  },
  {
    q: ["Despite its busy port, Singapore's waters are home to more than 250 species of which reef-building animal?"],
    a: ["hard coral", "hard corals", "coral", "corals", "stony corals", "stony coral"],
    why: "Singapore has **more than 250 species of hard coral** — remarkable for such a small, busy stretch of sea.",
    lvl: 3,
  },
  {
    q: ["Name the line of latitude at 0° that runs through the middle of the world's coral reef belt.", "Coral reefs are concentrated either side of which line of latitude?"],
    a: ["equator", "the equator"],
    why: "Reefs lie in a belt either side of the **Equator** (0°), roughly 30°N–30°S.",
    lvl: 1,
  },
  {
    q: ["In which ocean are the atolls of the Maldives?", "Name the ocean that contains the Maldives and the Chagos atolls."],
    a: ["Indian Ocean", "Indian"],
    why: "The Maldives are a chain of atolls in the **Indian Ocean**, south-west of India.",
    lvl: 2,
  },
  {
    q: ["Which ocean has the most coral reefs, including the Coral Triangle and the Great Barrier Reef: Pacific, Atlantic or Indian?"],
    a: ["Pacific", "Pacific Ocean"],
    why: "The **Pacific** (especially the western Pacific and Coral Triangle) has the most reefs.",
    lvl: 2,
  },
  {
    q: ["In which Central American country is the long barrier reef that forms part of the Mesoamerican Reef?", "The longest barrier reef in the northern hemisphere lies off which small Central American country?"],
    a: ["Belize"],
    why: "The **Belize** Barrier Reef is part of the Mesoamerican Reef, the largest reef system in the Atlantic region.",
    lvl: 3,
  },
  {
    q: ["Corals need salty water. What word describes how salty sea water is?", "Give the term for the amount of salt dissolved in sea water."],
    a: ["salinity"],
    why: "**Salinity** is how salty the water is; reef corals need roughly normal sea-water salinity (about 32–42 parts per thousand).",
    lvl: 1,
  },
  {
    q: ["Which country is home to the world's largest coral reef system?", "The Great Barrier Reef, about 2,300 km long, belongs to which country?"],
    a: ["Australia"],
    why: "The Great Barrier Reef, off **Australia**, is the world's largest reef system — about 2,300 km long.",
    lvl: 1,
  },
];

const VALUE: Fact[] = [
  {
    q: ["Coral reefs cover less than about what percentage of the ocean floor?", "What percentage of the sea floor do coral reefs cover — less than about 1%, 10% or 25%? Give the number."],
    a: { type: "number", value: 1 },
    why: "Reefs cover **less than 1%** of the ocean floor, yet support about a quarter of all marine species.",
    lvl: 1,
    traps: [[["25", "25%"], "25% is the share of marine SPECIES reefs support — the area they cover is under 1%."]],
  },
  {
    q: ["Roughly what share of all marine species depend on coral reefs? (Give a fraction or percentage.)", "Reefs support about what percentage of all species living in the sea?"],
    a: ["a quarter", "quarter", "one quarter", "25%", "25", "1/4", "25 percent"],
    why: "About **a quarter (25%)** of marine species depend on reefs at some stage of life.",
    lvl: 1,
    traps: [[["1", "1%"], "1% is roughly the area of sea floor reefs cover — the share of species is far bigger."]],
  },
  {
    q: ["Coral reefs are often called the '___ of the sea' because of their huge variety of life.", "Which land ecosystem are reefs compared with, because both are so rich in species?"],
    a: ["rainforests", "rainforest", "rain forests", "rain forest", "rainforests of the sea", "tropical rainforest"],
    why: "Reefs are nicknamed the **rainforests of the sea** for their biodiversity.",
    lvl: 1,
  },
  {
    q: ["What word means the variety of different living things in an area?", "Reefs have very high ___ — thousands of species of fish, corals, molluscs and more. Fill in the gap."],
    a: ["biodiversity", "biological diversity"],
    why: "**Biodiversity** is the variety of life; reefs are among the most biodiverse places on Earth.",
    lvl: 1,
  },
  {
    q: ["Reefs break up waves before they reach the shore. Which process that wears away the coast do they reduce?", "By absorbing wave energy, reefs protect beaches and villages from which kind of erosion?"],
    a: ["erosion", "coastal erosion"],
    why: "Reefs act as natural breakwaters, absorbing wave energy and reducing **coastal erosion** (and flooding).",
    lvl: 1,
  },
  {
    q: ["Name the industry that earns money from divers, snorkellers and glass-bottom boat trips on reefs.", "Which industry brings visitors from all over the world to the Great Barrier Reef?"],
    a: ["tourism", "tourist industry", "tourism industry", "reef tourism"],
    why: "**Tourism** is the reef's biggest earner — on the Great Barrier Reef it supports tens of thousands of jobs.",
    lvl: 1,
  },
  {
    q: ["Many young reef fish shelter among corals until they are big enough for open water. What is a habitat where young animals grow up called?", "Reefs and mangroves act as a ___ for young fish. Fill in the gap."],
    a: ["nursery", "nursery ground", "nursery grounds", "nursery habitat"],
    why: "Reefs act as a **nursery**: the maze of coral hides young fish from predators.",
    lvl: 2,
  },
  {
    q: ["Chemicals found in reef sponges, snails and other animals are being researched to make new ___. Fill in the gap.", "Why do scientists collect reef sponges and sea snails for laboratories? To develop new what?"],
    a: ["medicines", "medicine", "drugs", "medical drugs"],
    why: "Reef animals make powerful chemicals that are being studied as new **medicines**.",
    lvl: 1,
  },
  {
    q: ["Which reef fish crunches up coral and algae and excretes fine white sand that helps build tropical beaches?"],
    a: ["parrotfish", "parrot fish", "parrotfishes"],
    why: "**Parrotfish** scrape algae off coral with beak-like teeth and excrete the ground-up coral as sand.",
    lvl: 2,
  },
  {
    q: ["Many linked food chains on a reef — plankton, small fish, bigger fish, sharks — together form a what?"],
    a: ["food web", "foodweb"],
    why: "Interlinked food chains form a **food web**; losing corals breaks links all through it.",
    lvl: 2,
    traps: [[["food chain"], "A food chain is ONE line of feeding links. Many chains joined together make a food web."]],
  },
  {
    q: ["Social, economic or environmental benefit? 'Reefs provide jobs for dive instructors and boat crews.'"],
    a: ["economic", "economy"],
    why: "Jobs and income are an **economic** benefit.",
    lvl: 2,
  },
  {
    q: ["Social, economic or environmental benefit? 'Reefs are home to thousands of species of fish, corals and molluscs.'"],
    a: ["environmental", "environment"],
    why: "Habitat and biodiversity are an **environmental** benefit.",
    lvl: 2,
  },
  {
    q: ["Social, economic or environmental benefit? 'The reef is part of the culture and traditions of Aboriginal and Torres Strait Islander peoples.'"],
    a: ["social", "cultural", "society"],
    why: "Culture, traditions and identity are a **social** benefit.",
    lvl: 2,
  },
  {
    q: ["Social, economic or environmental benefit? 'Reefs give sea turtles places to feed and shelter.'"],
    a: ["environmental", "environment"],
    why: "Supporting wildlife habitats is an **environmental** benefit.",
    lvl: 2,
  },
  {
    q: ["Social, economic or environmental benefit? 'Reef tourism brings billions of dollars a year into Queensland.'"],
    a: ["economic", "economy"],
    why: "Money flowing into a region is an **economic** benefit.",
    lvl: 2,
  },
  {
    q: ["Social, economic or environmental benefit? 'Families and school groups enjoy snorkelling trips and learn about marine life.'"],
    a: ["social", "society"],
    why: "Recreation, wellbeing and education are **social** benefits.",
    lvl: 2,
  },
  {
    q: ["Which United Nations organisation lists World Heritage Sites such as the Great Barrier Reef?"],
    a: ["UNESCO"],
    why: "**UNESCO** lists World Heritage Sites; the Great Barrier Reef was listed in 1981.",
    lvl: 3,
  },
  {
    q: ["In which year did the Great Barrier Reef become a World Heritage Site?"],
    a: { type: "number", value: 1981 },
    why: "The Great Barrier Reef was listed as a World Heritage Site in **1981**.",
    lvl: 3,
    traps: [[["1975"], "1975 is when the Great Barrier Reef Marine Park was set up. World Heritage listing came in 1981."]],
  },
  {
    q: ["What term means the free benefits people get from nature — like coastal protection, food and clean water?"],
    a: ["ecosystem services", "ecosystem service"],
    why: "These are **ecosystem services**: reefs provide coastal protection, fisheries, tourism and medicines.",
    lvl: 3,
  },
  {
    q: ["A painkiller called ziconotide was developed from the venom of which reef-dwelling sea snail?"],
    a: ["cone snail", "cone snails", "cone shell", "cone shells"],
    why: "Ziconotide is based on a toxin from a **cone snail** — an example of medicine from reef animals.",
    lvl: 3,
  },
  {
    q: ["Using reefs to meet people's needs today without damaging them for future generations is called ___ use. Fill in the gap."],
    a: ["sustainable", "sustainability"],
    why: "**Sustainable** use meets today's needs without harming the reef for the future.",
    lvl: 3,
  },
  {
    q: ["Reefs absorb the force of waves. Name the coastal hazard during storms, besides erosion, that this protection reduces.", "Reefs lower storm waves before they reach the shore, protecting low-lying land from what?"],
    a: ["flooding", "floods", "flood", "coastal flooding", "storm surge"],
    why: "By breaking waves offshore, reefs reduce **flooding** of low coasts during storms.",
    lvl: 2,
  },
];

const BLEACHING: Fact[] = [
  {
    q: ["When corals are stressed by hot water and expel their algae, turning white, what is this called?", "Name the process in which corals lose their colour because their algae leave."],
    a: ["coral bleaching", "bleaching", "bleached"],
    why: "This is **coral bleaching**: stressed polyps expel their zooxanthellae and turn white.",
    lvl: 1,
  },
  {
    q: ["During bleaching, what do the stressed polyps push out of their tissues?", "A bleached coral has lost the tiny living things that gave it colour. What has it lost?"],
    a: ["zooxanthellae", "algae", "symbiotic algae", "their algae", "zooxanthella"],
    why: "The polyps expel their **zooxanthellae (algae)**, losing both colour and most of their food.",
    lvl: 1,
  },
  {
    q: ["Why does a bleached coral look white? Name what is showing through the see-through tissue.", "A bleached coral's tissue is clear, so you see its white ___. Fill in the gap."],
    a: ["skeleton", "calcium carbonate skeleton", "white skeleton", "skeletons"],
    why: "Without algae the tissue is transparent, so you see the white calcium carbonate **skeleton** underneath.",
    lvl: 2,
  },
  {
    q: ["If bleaching goes on for too long, what happens to the coral?", "Bleached corals are still alive. What happens if the sea stays too hot for many weeks?"],
    a: ["it dies", "dies", "death", "die", "starves", "it starves", "starvation", "starve", "starves to death"],
    why: "Without its algae the coral **starves and dies**; then seaweed grows over the dead skeleton.",
    lvl: 1,
  },
  {
    q: ["A long spell of unusually hot sea water — like a heatwave on land — is called a marine ___. Fill in the gap.", "In 2016 the sea off northern Queensland stayed unusually hot for weeks. What is such an ocean heat event called?"],
    a: ["heatwave", "heat wave", "marine heatwave"],
    why: "A **marine heatwave** is the main trigger of mass bleaching.",
    lvl: 1,
  },
  {
    q: ["Between 2016 and 2024, the Great Barrier Reef had mass bleaching in 2016, 2017, 2020, 2022 and which other year?"],
    a: { type: "number", value: 2024 },
    why: "Mass bleaching hit the Great Barrier Reef in 2016, 2017, 2020, 2022 and **2024** — five events in nine years.",
    lvl: 2,
  },
  {
    q: ["Between 2016 and 2024, the Great Barrier Reef had mass bleaching in 2016, 2017, 2022, 2024 and which other year?"],
    a: { type: "number", value: 2020 },
    why: "The five events were 2016, 2017, **2020**, 2022 and 2024.",
    lvl: 2,
  },
  {
    q: ["The Great Barrier Reef had back-to-back mass bleaching for the first time in 2016 and which year?"],
    a: { type: "number", value: 2017 },
    why: "Bleaching struck in 2016 and again in **2017** — the first time in consecutive years, giving reefs no time to recover.",
    lvl: 2,
  },
  {
    q: ["Counting 2016 itself, how many mass bleaching events did the Great Barrier Reef suffer from 2016 to 2024?"],
    a: { type: "number", value: 5 },
    why: "**Five**: 2016, 2017, 2020, 2022 and 2024.",
    lvl: 2,
  },
  {
    q: ["Oceans absorb carbon dioxide from the air, lowering the water's pH (making it less alkaline). What is this called?", "Name the threat to corals caused by sea water becoming less alkaline as it absorbs CO₂."],
    a: ["ocean acidification", "acidification"],
    why: "**Ocean acidification**: CO₂ dissolves to form carbonic acid, lowering the ocean's pH.",
    lvl: 2,
  },
  {
    q: ["Ocean acidification makes it harder for corals to build skeletons from which substance?"],
    a: ["calcium carbonate", "CaCO3", "aragonite"],
    why: "More acidic water leaves less carbonate available, so corals struggle to build **calcium carbonate** skeletons.",
    lvl: 3,
  },
  {
    q: ["Which gas, released by burning fossil fuels, both warms the planet and makes the oceans more acidic?", "Ocean acidification happens because sea water absorbs which gas from the air?"],
    a: ["carbon dioxide", "CO2", "CO₂"],
    why: "**Carbon dioxide** traps heat in the atmosphere and dissolves in sea water as carbonic acid.",
    lvl: 1,
  },
  {
    q: ["Average ocean surface pH has fallen from about 8.2 to about what since the Industrial Revolution? Give one decimal place."],
    a: { type: "number", value: 8.1 },
    why: "Surface pH has dropped from about 8.2 to about **8.1** — about 30% more acidic, because pH is a logarithmic scale.",
    lvl: 3,
  },
  {
    q: ["Bleaching usually starts when the sea stays at least how many °C above its usual summer maximum for several weeks?"],
    a: { type: "number", value: 1 },
    why: "Just **1 °C** above the usual summer maximum, lasting several weeks, is enough to start bleaching.",
    lvl: 2,
  },
  {
    q: ["Name the measure used by coral scientists that adds up how hot and for how long the sea has been above its usual maximum, in °C-weeks.", "What does the abbreviation DHW stand for in coral heat-stress forecasts?"],
    a: ["degree heating weeks", "degree heating week", "DHW", "DHWs"],
    why: "**Degree heating weeks (DHW)** combine how much and how long water is too hot; about 4 °C-weeks means significant bleaching is likely, about 8 means severe bleaching and deaths.",
    lvl: 3,
  },
  {
    q: ["In which year did scientists confirm that the world's fourth global coral bleaching event was under way?"],
    a: { type: "number", value: 2024 },
    why: "NOAA and partners confirmed the fourth global bleaching event in **2024**.",
    lvl: 3,
  },
  {
    q: ["Which climate pattern, which warms the central and eastern Pacific every few years, drove the first global bleaching event in 1998?"],
    a: ["El Nino", "El Niño", "ENSO"],
    why: "A very strong **El Niño** in 1997–98 heated tropical seas and caused the first global bleaching event.",
    lvl: 3,
  },
  {
    q: ["What is the main long-term cause of more frequent marine heatwaves?", "Give the two-word name for the long-term warming of Earth caused by greenhouse gases, which is the biggest threat to reefs."],
    a: ["climate change", "global warming", "global heating"],
    why: "**Climate change** (global warming) from greenhouse gases makes marine heatwaves more frequent and intense.",
    lvl: 1,
  },
  {
    q: ["True or false: a bleached coral is already dead.", "True or false: once a coral turns white, it can never recover."],
    a: ["false"],
    why: "Bleached corals are **stressed but alive**; they can recover if temperatures fall soon enough for the algae to return.",
    lvl: 1,
  },
  {
    q: ["Without their algae, bleached corals are short of what? (Think about what the algae make by photosynthesis.)", "Why does a long bleaching event kill corals? Because they lose their main supply of what?"],
    a: ["food", "energy", "sugar", "sugars", "food and energy", "glucose"],
    why: "The algae supply most of the coral's **food (sugar/energy)**, so a bleached coral is starving.",
    lvl: 2,
  },
  {
    q: ["After the 2016 marine heatwave, about what percentage of the Great Barrier Reef's shallow-water corals died: about 3%, 30% or 90%?"],
    a: { type: "number", value: 30 },
    why: "Surveys found about **30%** of shallow-water corals died in 2016, with the far north hit worst.",
    lvl: 3,
  },
];

const THREATS: Fact[] = [
  {
    q: ["Name the illegal fishing method that uses explosives to stun or kill fish, shattering coral.", "Fishers throw home-made bombs into the water and collect the dead fish. What is this called?"],
    a: ["blast fishing", "dynamite fishing", "bomb fishing", "fish bombing", "blast-fishing"],
    why: "**Blast (dynamite) fishing** turns coral into rubble that can take decades to recover.",
    lvl: 1,
  },
  {
    q: ["Which poison do some fishers squirt onto reefs to stun live fish for aquariums and restaurants?", "Name the chemical used in an illegal fishing method to stun colourful reef fish so they can be caught alive."],
    a: ["cyanide", "sodium cyanide", "cyanide fishing"],
    why: "**Cyanide** stuns fish for capture but also kills polyps and other reef life.",
    lvl: 2,
  },
  {
    q: ["Catching fish faster than they can breed is called what?", "Removing so many fish that populations collapse is called ___. Fill in the gap."],
    a: ["overfishing", "over-fishing", "over fishing"],
    why: "**Overfishing** removes grazers like parrotfish, so seaweed can overgrow the coral.",
    lvl: 1,
  },
  {
    q: ["Name the coral-eating starfish whose population outbreaks strip large areas of the Great Barrier Reef.", "Which spiny starfish turns its stomach inside out over corals to digest the polyps?"],
    a: ["crown-of-thorns starfish", "crown of thorns starfish", "crown-of-thorns", "crown of thorns", "COTS"],
    why: "**Crown-of-thorns starfish** eat coral polyps; outbreaks can kill much of the coral on a reef.",
    lvl: 1,
  },
  {
    q: ["Mud and silt washed off the land after forest clearance or construction smothers coral and blocks light. Give one word for it.", "Clearing mangroves and building on coasts sends what into the sea, clouding the water over reefs?"],
    a: ["sediment", "silt", "sedimentation", "mud", "sediments"],
    why: "**Sediment** smothers polyps and blocks the light their algae need.",
    lvl: 1,
  },
  {
    q: ["Fertiliser washed into the sea feeds fast-growing seaweed and algae that smother corals. What is this nutrient overload called?"],
    a: ["eutrophication", "nutrient pollution"],
    why: "Excess nutrients cause **eutrophication**: algae bloom and outcompete or smother corals.",
    lvl: 3,
    traps: [[["algal bloom", "algal blooms", "algae bloom"], "An algal bloom is the RESULT. The name for the nutrient-overload process is eutrophication."]],
  },
  {
    q: ["Fertiliser and soil washing off farmland into rivers and the sea is called agricultural ___. Fill in the gap.", "Sugar-cane farms in Queensland send nutrients and sediment into the reef lagoon. What is this washing-off called?"],
    a: ["run-off", "runoff", "run off", "agricultural run-off", "farm run-off"],
    why: "Farm **run-off** carries nutrients, pesticides and sediment to the reef.",
    lvl: 2,
  },
  {
    q: ["Name the activity — very common in Singapore — where new land is built by filling in shallow sea, burying reefs.", "Singapore has grown by about a quarter since 1960 by building land out into the sea. What is this called?"],
    a: ["land reclamation", "reclamation", "reclaiming land", "reclaimed land"],
    why: "**Land reclamation** buries reefs and stirs up sediment; much of Singapore's original reef area has been lost this way.",
    lvl: 1,
  },
  {
    q: ["Dropping and dragging a boat's ___ across a reef breaks off coral branches. Name the object.", "Which part of a boat, dropped onto a reef, can smash corals? (That's why reefs have mooring buoys.)"],
    a: ["anchor", "anchors"],
    why: "**Anchors** break corals; mooring buoys let boats tie up without dropping one.",
    lvl: 1,
  },
  {
    q: ["Waste water from toilets and drains, which adds nutrients and germs to the sea, is called what?", "Untreated waste from coastal hotels and towns pours onto some reefs. What is this waste water called?"],
    a: ["sewage", "sewerage", "waste water", "wastewater", "untreated sewage"],
    why: "**Sewage** adds nutrients (feeding algae) and disease-causing microbes.",
    lvl: 1,
  },
  {
    q: ["Digging up the sea bed to deepen shipping channels, which stirs up clouds of sediment, is called what?", "Ports scoop mud from the sea floor so big ships can pass. Name this activity."],
    a: ["dredging", "dredge"],
    why: "**Dredging** throws sediment into the water, which can drift onto nearby reefs.",
    lvl: 2,
  },
  {
    q: ["Which giant sea snail, a natural predator of crown-of-thorns starfish, was over-collected for its beautiful shell?"],
    a: ["giant triton", "triton", "triton snail", "giant triton snail", "Charonia tritonis", "triton shell"],
    why: "The **giant triton** eats crown-of-thorns starfish; collecting its shell removed a natural control.",
    lvl: 3,
  },
  {
    q: ["Natural or human threat? A tropical cyclone smashes branching corals on a reef."],
    a: ["natural", "natural threat"],
    why: "Cyclones are a **natural** threat (though climate change may make the strongest ones stronger).",
    lvl: 2,
  },
  {
    q: ["Natural or human threat? A boat drops its anchor onto a reef."],
    a: ["human", "human threat", "man-made", "human-made", "anthropogenic"],
    why: "Anchor damage is caused by people — a **human** threat.",
    lvl: 2,
  },
  {
    q: ["Natural or human threat? An extremely low tide leaves corals exposed to air and hot sun for hours."],
    a: ["natural", "natural threat"],
    why: "Very low tides are a **natural** stress on shallow reefs.",
    lvl: 2,
  },
  {
    q: ["Natural or human threat? Sand is dumped into shallow sea to build a new port."],
    a: ["human", "human threat", "man-made", "human-made", "anthropogenic"],
    why: "Land reclamation is a **human** threat.",
    lvl: 2,
  },
  {
    q: ["Natural or human threat? Fishers use explosives to catch reef fish."],
    a: ["human", "human threat", "man-made", "human-made", "anthropogenic"],
    why: "Blast fishing is a **human** threat.",
    lvl: 2,
  },
  {
    q: ["Which of these is a GLOBAL threat rather than a local one: overfishing, sewage or climate change?"],
    a: ["climate change", "global warming"],
    why: "**Climate change** is global — no single country can stop it by managing its own reef.",
    lvl: 2,
    traps: [[["overfishing", "sewage"], "That threat comes from activities near the reef — it can be managed locally. The global threat is climate change."]],
  },
  {
    q: ["Snorkellers who stand on corals and kick them with their fins cause which kind of damage?", "Name the damage done when visitors walk across a reef flat at low tide."],
    a: ["trampling", "trampled", "trampling damage", "physical damage"],
    why: "**Trampling** breaks fragile coral; reef-safe snorkellers float and never stand on coral.",
    lvl: 2,
  },
  {
    q: ["Name the sunscreen chemical, banned in Hawaii from 2021, that is thought to harm young corals."],
    a: ["oxybenzone", "benzophenone-3"],
    why: "**Oxybenzone** is thought to damage coral larvae; Hawaii banned sunscreens containing it (and octinoxate) from 2021.",
    lvl: 3,
  },
  {
    q: ["Farm nutrients feed the plankton that young crown-of-thorns starfish eat. What are these young drifting starfish called?"],
    a: ["larvae", "larva", "starfish larvae"],
    why: "More plankton means more crown-of-thorns **larvae** survive — one reason outbreaks are linked to farm run-off.",
    lvl: 3,
  },
  {
    q: ["Scientists found that corals tangled in plastic are far more likely to suffer what?"],
    a: ["disease", "diseases", "infection", "coral disease"],
    why: "Plastic scratches tissue and carries microbes, making corals much more likely to get **disease**.",
    lvl: 3,
  },
];

// ---------------------------------------------------------------------------
// Generators
// ---------------------------------------------------------------------------

type ReefType = "fringing" | "barrier" | "atoll";
const REEF_ACCEPT: Record<ReefType, string[]> = {
  fringing: ["fringing reef", "fringing", "fringe reef"],
  barrier: ["barrier reef", "barrier"],
  atoll: ["atoll", "coral atoll"],
};
const REEF_DESCS: Record<ReefType, string[]> = {
  fringing: [
    "grows right up against the shoreline, attached to the land",
    "starts at the beach and extends out in a narrow, shallow band, with no wide lagoon behind it",
    "hugs the coast so closely that you can snorkel straight out to it from the sand",
    "fringes the shore with only a narrow, shallow channel between reef and land",
  ],
  barrier: [
    "runs parallel to the coast but is separated from the mainland by a wide, deep lagoon",
    "lies many kilometres offshore, with a broad lagoon between it and the land",
    "forms a long wall of reef far out from the shore, sheltering a wide lagoon behind it",
  ],
  atoll: [
    "is a ring of reef and low sandy islands around a central lagoon, with no high land in the middle",
    "forms a circle around a lagoon in the open ocean, where a volcanic island once stood",
    "is a loop of low coral islands, only a few metres above sea level, enclosing a lagoon",
  ],
};
const REEF_PLACES: Record<ReefType, string[]> = {
  fringing: ["Around Singapore's Southern Islands", "Along the Red Sea coast of Egypt", "Around the volcanic islands of Hawaii"],
  barrier: ["Off the coast of Queensland, Australia", "Off the coast of Belize in Central America", "Around the island of New Caledonia in the Pacific"],
  atoll: ["In the Maldives, in the Indian Ocean", "At Funafuti in Tuvalu", "At Aldabra in the Seychelles"],
};
const DARWIN: Array<[string, ReefType]> = [
  ["Darwin's theory, stage 1: a reef grows right against the shore of a young volcanic island. Which type of reef is it?", "fringing"],
  ["Darwin's theory: the volcanic island has slowly sunk while the reef kept growing upward, so a wide lagoon now separates reef and island. Which type of reef is it now?", "barrier"],
  ["Darwin's theory, final stage: the volcanic island has sunk completely out of sight; only a ring of reef around a lagoon is left. What is it now?", "atoll"],
  ["A volcanic island sinks over millions of years while its reef keeps growing up towards the light. A fringing reef turns into which type of reef BEFORE becoming an atoll?", "barrier"],
  ["Drilling on a ring-shaped Pacific reef found volcanic rock more than 1,000 m below the coral. Which reef type was being drilled?", "atoll"],
];
const REEF_FEEDBACK: Record<ReefType, string> = {
  fringing: "A fringing reef is attached to the shore with little or no lagoon.",
  barrier: "A barrier reef is separated from the land by a wide, deep lagoon.",
  atoll: "An atoll is a ring of reef around a lagoon with no island left in the middle.",
};

type Factor = "temperature" | "depth" | "salinity" | "clarity";
const FACTOR_ACCEPT: Record<Factor, string[]> = {
  temperature: ["temperature", "sea temperature", "water temperature", "temp", "too cold", "cold"],
  depth: ["depth", "water depth", "too deep", "deep"],
  salinity: ["salinity", "salt", "saltiness", "too fresh", "not salty enough", "salt content"],
  clarity: ["clarity", "water clarity", "visibility", "sediment", "murky", "muddy", "too muddy", "turbidity"],
};

export const drills: Drill[] = [
  {
    id: "coral-reefs.reef-key-terms",
    topicId: "coral-reefs",
    title: "Name the coral reef key term",
    level: 1,
    guideRef: "what-are-reefs",
    generate(rng, tier) {
      return fromBank(rng, tier, KEY_TERMS, "Picture a single polyp: its tentacles, its skeleton and the algae living inside it.");
    },
  },
  {
    id: "coral-reefs.reef-type",
    topicId: "coral-reefs",
    title: "Fringing, barrier or atoll?",
    level: 1,
    guideRef: "what-are-reefs",
    generate(rng, tier) {
      let type: ReefType;
      let prompt: string;
      if (tier === 3 && rng.bool(0.5)) {
        const [p, t] = rng.pick(DARWIN);
        type = t;
        prompt = p + " Answer fringing, barrier or atoll.";
      } else {
        type = rng.pick(["fringing", "barrier", "atoll"] as const);
        const desc = rng.pick(REEF_DESCS[type]);
        prompt =
          tier === 1
            ? `${rng.pick(["A reef", "In a satellite photo, a reef", "On a sea chart, a reef"])} ${desc}. Which type of reef is it: fringing, barrier or atoll?`
            : `${rng.pick(REEF_PLACES[type])}, there is a reef that ${desc}. Is it a fringing reef, a barrier reef or an atoll?`;
      }
      const others = (["fringing", "barrier", "atoll"] as const).filter((t) => t !== type);
      return {
        prompt,
        answer: { type: "text", accept: REEF_ACCEPT[type], display: type === "atoll" ? "atoll" : `${type} reef` },
        solution: [
          "Look at two clues: how far the reef is from land, and whether there is a lagoon.",
          REEF_FEEDBACK[type],
          "Darwin's sequence: fringing → barrier → atoll as a volcanic island slowly sinks.",
        ],
        hint: "Is there land behind the reef? If so, is there a wide lagoon between them?",
        traps: others.map((o) => ({ spec: { type: "text", accept: [REEF_ACCEPT[o][0]] }, feedback: `Not quite. ${REEF_FEEDBACK[o]} Check the clues again.` })),
      };
    },
  },
  {
    id: "coral-reefs.growing-conditions",
    topicId: "coral-reefs",
    title: "Where reefs grow: recall the conditions and places",
    level: 1,
    guideRef: "where-reefs-grow",
    generate(rng, tier) {
      return fromBank(rng, tier, CONDITIONS, "Think warm, shallow, clear, salty — and where on the globe that happens.");
    },
  },
  {
    id: "coral-reefs.reef-value",
    topicId: "coral-reefs",
    title: "Why reefs matter: recall the benefits",
    level: 1,
    guideRef: "value-of-reefs",
    generate(rng, tier) {
      return fromBank(rng, tier, VALUE, "Sort reef benefits into social, economic and environmental — which one fits?");
    },
  },
  {
    id: "coral-reefs.can-coral-grow",
    topicId: "coral-reefs",
    title: "Spot the condition that stops coral growing",
    level: 2,
    guideRef: "where-reefs-grow",
    generate(rng, tier) {
      const bad = rng.pick(["temperature", "depth", "salinity", "clarity"] as const);
      let temp = rng.int(23, 28);
      let depth = rng.pick([3, 5, 8, 10, 12, 15, 20, 25]);
      let sal = rng.int(33, 37);
      let vis = rng.pick([8, 10, 12, 15, 20, 25, 30]);
      if (bad === "temperature") temp = tier === 1 ? rng.int(8, 12) : tier === 2 ? rng.int(11, 15) : rng.int(14, 16);
      if (bad === "depth") depth = tier === 1 ? rng.pick([150, 200, 250, 300]) : tier === 2 ? rng.pick([90, 100, 120, 140]) : rng.pick([70, 75, 80, 85]);
      if (bad === "salinity") sal = tier === 1 ? rng.int(5, 12) : tier === 2 ? rng.int(12, 20) : rng.int(20, 26);
      if (bad === "clarity") vis = tier === 1 ? 0.3 : rng.pick([0.4, 0.5, 0.6, 0.8]);
      const rules = tier === 1 ? "\n\nRules of thumb: about 18–29 °C, less than about 50 m deep, salinity about 32–42 parts per thousand, clear water." : "";
      const prompt =
        `Scientists survey a tropical coast for a possible reef site.\n\n| Factor | Measurement |\n|---|---|\n| Coldest-month sea temperature | ${temp} °C |\n| Depth of sea bed | ${depth} m |\n| Salinity | ${sal} parts per thousand |\n| Water clarity (how far down you can see) | ${num(vis)} m |\n\n` +
        `Which ONE factor stops reef-building corals growing here? Answer temperature, depth, salinity or clarity.` +
        rules;
      const reason: Record<Factor, string> = {
        temperature: `${temp} °C is below about 18 °C — too cold for reef-building corals.`,
        depth: `${depth} m is far deeper than about 50 m — too little sunlight reaches the algae to photosynthesise.`,
        salinity: `${sal} parts per thousand is much less salty than normal sea water (about 35) — fresh water, e.g. near a river mouth, stresses and kills coral.`,
        clarity: `Seeing only ${num(vis)} m down means the water is full of sediment — it blocks sunlight and smothers polyps.`,
      };
      const okText: Record<Factor, string> = {
        temperature: `${temp} °C is within the warm range corals need.`,
        depth: `${depth} m is shallow enough for sunlight to reach.`,
        salinity: `${sal} parts per thousand is normal sea-water salinity.`,
        clarity: `${num(vis)} m visibility is clear enough for light to reach the coral.`,
      };
      const others = (["temperature", "depth", "salinity", "clarity"] as const).filter((f) => f !== bad);
      return {
        prompt,
        answer: { type: "text", accept: FACTOR_ACCEPT[bad], display: bad },
        solution: [
          "Check each measurement against the conditions corals need: warm (about 18–29 °C), shallow (under about 50 m), salty (about 32–42 parts per thousand) and clear.",
          ...others.map((f) => okText[f]),
          `The problem is **${bad}**: ${reason[bad]}`,
        ],
        hint: "Go down the table one row at a time and ask: is this inside the range corals need?",
        traps: others.map((f) => ({ spec: { type: "text", accept: [f] }, feedback: `Look again — ${okText[f]}` })),
      };
    },
  },
  {
    id: "coral-reefs.coral-growth-rate",
    topicId: "coral-reefs",
    title: "Calculate how long a coral takes to grow",
    level: 2,
    guideRef: "what-are-reefs",
    generate(rng, tier) {
      if (tier === 1) {
        const r = rng.pick([10, 12, 15, 20]);
        const years = rng.int(2, 9);
        const len = r * years;
        return {
          prompt: `A branching staghorn coral grows about ${r} cm a year. How many years would it take to grow ${len} cm?`,
          answer: { type: "number", value: years },
          solution: [`Years = length ÷ growth per year`, `= ${len} ÷ ${r} = **${years} years**.`, "Branching corals are among the fastest-growing — which helps reefs recover, but only if disturbances are rare."],
          hint: "How many lots of the yearly growth fit into the total length?",
          traps: len * r !== years ? [{ spec: { type: "number", value: len * r }, feedback: "You multiplied — divide the total length by the growth per year." }] : undefined,
        };
      }
      if (tier === 2) {
        let r = 10, years = 50, dCm = 50;
        for (let i = 0; i < 50; i++) {
          r = rng.pick([5, 6, 8, 10, 12, 15]);
          years = rng.int(10, 80);
          if ((years * r) % 10 === 0) break;
        }
        dCm = (years * r) / 10;
        if ((years * r) % 10 !== 0) {
          r = 10;
          dCm = years;
        }
        const wrong = clean(dCm / r);
        return {
          prompt: `A massive (boulder) coral grows outwards by about ${r} mm a year. How many years would it take to grow ${dCm} cm outwards from where it started?`,
          answer: { type: "number", value: years },
          solution: [`Convert to the same unit: ${dCm} cm = ${dCm * 10} mm.`, `Years = ${dCm * 10} ÷ ${r} = **${years} years**.`, "Boulder corals grow slowly, so big ones can be centuries old — and very hard to replace."],
          hint: "Change the centimetres into millimetres first (1 cm = 10 mm).",
          traps: wrong !== years ? [{ spec: { type: "number", value: wrong }, feedback: "Units! You divided centimetres by millimetres — convert cm to mm first (× 10)." }] : undefined,
        };
      }
      // tier 3: age of a colony from its size in metres
      // Massive (boulder) corals typically grow about 5–15 mm a year.
      const r = rng.pick([5, 6, 8, 10, 12, 15]);
      let years = 100;
      let sizeM = 1;
      for (let i = 0; i < 50; i++) {
        years = rng.int(4, 40) * 10;
        if ((years * r) % 100 === 0) break;
      }
      if ((years * r) % 100 !== 0) years = 100;
      const mm = years * r;
      sizeM = clean(mm / 1000);
      const wrongCm = clean((sizeM * 100) / r);
      return {
        prompt: `Divers find a boulder coral that has grown ${num(sizeM)} m upwards. Cores from similar corals show they grow about ${r} mm a year. Estimate its age in years.`,
        answer: { type: "number", value: years },
        solution: [`${num(sizeM)} m = ${num(sizeM * 1000)} mm.`, `Age ≈ ${num(sizeM * 1000)} ÷ ${r} = **${years} years**.`, "Growth bands in coral cores are read like tree rings, which is how scientists know these rates."],
        hint: "1 m = 1,000 mm. Get both measurements into millimetres.",
        traps: wrongCm !== years ? [{ spec: { type: "number", value: wrongCm }, feedback: "You converted metres to centimetres, but the growth rate is in millimetres — 1 m = 1,000 mm." }] : undefined,
      };
    },
  },
  {
    id: "coral-reefs.bleaching-recall",
    topicId: "coral-reefs",
    title: "Coral bleaching and climate change: recall",
    level: 2,
    guideRef: "coral-bleaching",
    generate(rng, tier) {
      return fromBank(rng, tier, BLEACHING, "Follow the chain: hot water → stressed polyp → algae expelled → white coral → recover or die.");
    },
  },
  {
    id: "coral-reefs.coral-cover-change",
    topicId: "coral-reefs",
    title: "Calculate the change in coral cover",
    level: 2,
    guideRef: "coral-bleaching",
    generate(rng, tier) {
      const who = rng.pick(["Marine scientists", "A survey team", "Reef divers", "A school research trip"]);
      if (tier === 1) {
        const a = rng.int(25, 60);
        const b = rng.int(5, a - 5);
        return {
          prompt: `${who} recorded hard coral cover at a survey site of ${a}% before a marine heatwave and ${b}% after it. By how many percentage points did coral cover fall?`,
          answer: { type: "number", value: a - b },
          solution: [`Percentage-point fall = before − after`, `= ${a} − ${b} = **${a - b} percentage points**.`],
          hint: "A percentage-point change is just the difference between the two percentages.",
        };
      }
      if (tier === 2) {
        const a = rng.int(20, 60);
        const b = rng.int(4, a - 6);
        const pct = roundTo(((a - b) / a) * 100, 0);
        return {
          prompt: `${who} found hard coral cover fell from ${a}% to ${b}% of the reef after a bleaching event. Calculate the **percentage decrease** in coral cover. Give your answer to the nearest whole number.`,
          answer: { type: "number", value: pct },
          solution: [`Change = ${a} − ${b} = ${a - b} percentage points.`, `Percentage decrease = {{${a - b}/${a}}} × 100 = ${num(roundTo(((a - b) / a) * 100, 2))}…`, `= **${pct}%** (nearest whole number).`],
          hint: "Percentage change = change ÷ ORIGINAL value × 100.",
          traps:
            a - b !== pct
              ? [{ spec: { type: "number", value: a - b }, feedback: "That's the fall in percentage POINTS. For percentage decrease divide the fall by the original cover and × 100." }]
              : undefined,
        };
      }
      if (rng.bool(0.5)) {
        const a = rng.int(25, 50);
        const b = rng.int(5, a - 10);
        const r = rng.pick([2, 3, 4, 5]);
        const years = Math.ceil((a - b) / r);
        const floorYears = Math.floor((a - b) / r);
        return {
          prompt: `After mass bleaching, coral cover on a reef fell from ${a}% to ${b}%. If cover recovers by ${r} percentage points a year and nothing else goes wrong, how many whole years will it take to get back to at least ${a}%?`,
          answer: { type: "number", value: years },
          solution: [
            `Cover to regain = ${a} − ${b} = ${a - b} percentage points.`,
            (a - b) % r === 0 ? `${a - b} ÷ ${r} = **${years} years**.` : `${a - b} ÷ ${r} = ${num(roundTo((a - b) / r, 2))}, so round UP: **${years} years**.`,
            "On the Great Barrier Reef bleaching struck in 2016, 2017, 2020, 2022 and 2024 — often only 2–3 years apart, too soon for full recovery.",
          ],
          hint: "Find the gap to make up, divide by the yearly recovery, then think about rounding.",
          traps: floorYears !== years ? [{ spec: { type: "number", value: floorYears }, feedback: "Rounding down leaves cover still below the starting level — round UP to a whole year." }] : undefined,
        };
      }
      let a = 40, p = 25;
      for (let i = 0; i < 50; i++) {
        a = rng.pick([20, 24, 28, 30, 32, 36, 40, 44, 48, 50, 60]);
        p = rng.pick([10, 15, 20, 25, 30, 40, 50, 60, 75]);
        if ((a * p) % 100 === 0) break;
      }
      if ((a * p) % 100 !== 0) {
        a = 40;
        p = 25;
      }
      const after = clean(a - (a * p) / 100);
      const wrong = a - p;
      return {
        prompt: `A reef had ${a}% hard coral cover. A heatwave then killed ${p}% of the coral that was there. What is the new coral cover, as a percentage of the reef?`,
        answer: { type: "number", value: after },
        solution: [`${p}% of ${a} = {{${p}/100}} × ${a} = ${num((a * p) / 100)} percentage points lost.`, `New cover = ${a} − ${num((a * p) / 100)} = **${num(after)}%**.`],
        hint: `"${p}% of the coral" means ${p}% OF ${a}, not ${p} percentage points.`,
        traps: wrong !== after && wrong > 0 ? [{ spec: { type: "number", value: wrong }, feedback: `You took away ${p} percentage points. The heatwave killed ${p}% OF the ${a}% cover.` }] : undefined,
      };
    },
  },
  {
    id: "coral-reefs.threats-recall",
    topicId: "coral-reefs",
    title: "Name the local threat to reefs",
    level: 2,
    guideRef: "local-threats",
    generate(rng, tier) {
      return fromBank(rng, tier, THREATS, "Ask: where does the damage come from — the boat, the farm, the fisher, the builder or the climate?");
    },
  },
  {
    id: "coral-reefs.degree-heating-weeks",
    topicId: "coral-reefs",
    title: "Calculate degree heating weeks (heat stress)",
    level: 3,
    guideRef: "coral-bleaching",
    generate(rng, tier) {
      const mmm10 = rng.pick([270, 280, 290]); // usual summer maximum in tenths of °C
      const weeks = tier === 1 ? 6 : tier === 2 ? 8 : 10;
      const excess10: number[] = [];
      for (let w = 0; w < weeks; w++) {
        if (tier === 1) excess10.push(rng.pick([-10, 0, 10, 10, 20, 20, 30]));
        else if (tier === 2) excess10.push(rng.pick([-5, 0, 5, 10, 15, 20, 25, 30]));
        else excess10.push(rng.pick([-3, 2, 6, 8, 10, 12, 14, 17, 21, 24, 28, 31]));
      }
      if (!excess10.some((e) => e >= 10)) excess10[rng.int(0, weeks - 1)] = 20;
      const temps = excess10.map((e) => num((mmm10 + e) / 10));
      const counted = excess10.filter((e) => e >= 10);
      const dhw = clean(counted.reduce((s, e) => s + e, 0) / 10);
      const allPositive = clean(excess10.filter((e) => e > 0).reduce((s, e) => s + e, 0) / 10);
      const hotWeeks = counted.length;
      const mmm = num(mmm10 / 10);
      const level =
        dhw >= 8 ? "8 or more: severe bleaching and widespread coral death are likely." : dhw >= 4 ? "4 or more: significant bleaching is likely." : "below 4: some stress, but widespread bleaching is less likely.";
      const header = "| Week | " + excess10.map((_, i) => String(i + 1)).join(" | ") + " |";
      const sep = "|---|" + excess10.map(() => "---").join("|") + "|";
      const row = "| Sea temp (°C) | " + temps.join(" | ") + " |";
      const traps: Trap[] = [];
      if (allPositive !== dhw) traps.push({ spec: { type: "number", value: allPositive }, feedback: "Only weeks at least 1 °C above the usual maximum count — leave out the weeks that are only slightly warm." });
      if (hotWeeks !== dhw) traps.push({ spec: { type: "number", value: hotWeeks }, feedback: "That's the NUMBER of hot weeks. DHW adds up HOW MUCH each hot week was above the usual maximum." });
      return {
        prompt:
          `A reef's usual summer maximum sea temperature is ${mmm} °C. Weekly average sea temperatures during a heatwave were:\n\n${header}\n${sep}\n${row}\n\n` +
          `Simplified rule: for every week at least 1 °C above the usual maximum, add (temperature − ${mmm}). Weeks less than 1 °C above count as zero. Calculate the degree heating weeks (DHW) in °C-weeks.`,
        answer: { type: "number", value: dhw, display: `${num(dhw)} °C-weeks` },
        solution: [
          `Excess each week: ${excess10.map((e) => num(e / 10)).join(", ")} °C.`,
          `Weeks counted (excess ≥ 1 °C): ${counted.map((e) => num(e / 10)).join(" + ")} = **${num(dhw)} °C-weeks**.`,
          `Heat-stress guide: DHW ${level}`,
        ],
        hint: "Work out each week's temperature minus the usual maximum, cross out anything under 1, then add up the rest.",
        traps: traps.length ? traps : undefined,
      };
    },
  },
];
