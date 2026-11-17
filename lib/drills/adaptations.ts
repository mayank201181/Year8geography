import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { num, roundTo, clean } from "./helpers.ts";

// ---------------------------------------------------------------------------
// Fact-bank helper: each fact has 1+ phrasings, accepted answers, a level
// (1 = core, 2 = typical, 3 = stretch) and a one-line reason.
// Tier 1 draws levels 1–2, tier 2 draws everything, tier 3 draws levels 2–3.
// ---------------------------------------------------------------------------
interface Fact {
  q: string[];
  a: string[];
  lvl: 1 | 2 | 3;
  why: string;
  hint?: string;
  traps?: { a: string[]; fb: string }[];
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Tier 1 mostly draws easier facts, tier 3 mostly harder ones; every fact can appear in every tier. */
function tierPick<T extends { lvl: 1 | 2 | 3 }>(bank: T[], rng: Rng, tier: 1 | 2 | 3): T {
  const preferred = bank.filter((f) => (tier === 1 ? f.lvl <= 2 : tier === 3 ? f.lvl >= 2 : true));
  return rng.next() < 0.8 ? rng.pick(preferred) : rng.pick(bank);
}

function fromBank(bank: Fact[], rng: Rng, tier: 1 | 2 | 3, defaultHint: string, prefix = ""): DrillItem {
  const f = tierPick(bank, rng, tier);
  const q = rng.pick(f.q);
  const traps: Trap[] | undefined = f.traps?.map((t) => ({ spec: { type: "text", accept: t.a }, feedback: t.fb }));
  return {
    prompt: prefix + q,
    answer: { type: "text", accept: f.a, display: cap(f.a[0]) },
    solution: [`Answer: **${cap(f.a[0])}**.`, f.why],
    hint: f.hint ?? defaultHint,
    traps,
  };
}

// ---------------------------------------------------------------------------
// Banks
// ---------------------------------------------------------------------------
type AType = "structural" | "behavioural" | "physiological";
const TYPE_ACCEPT: Record<AType, string[]> = {
  structural: ["structural", "structural adaptation", "physical", "anatomical"],
  behavioural: ["behavioural", "behavioral", "behaviour", "behavior", "behavioural adaptation"],
  physiological: ["physiological", "physiological adaptation", "functional"],
};
const TYPE_WHY: Record<AType, string> = {
  structural: "It is a **body part or physical feature** the organism is born with — something you could see or touch.",
  behavioural: "It is something the organism **does** — an action or habit, not a body part.",
  physiological: "It happens **inside the body** — a chemical or body process you cannot see from the outside.",
};
const TYPE_BANK: { d: string; t: AType; lvl: 1 | 2 | 3 }[] = [
  { d: "A polar bear has a thick layer of blubber under its skin.", t: "structural", lvl: 1 },
  { d: "A cactus has sharp spines instead of broad, flat leaves.", t: "structural", lvl: 1 },
  { d: "A fennec fox has very large ears.", t: "structural", lvl: 1 },
  { d: "A camel has two rows of long eyelashes.", t: "structural", lvl: 1 },
  { d: "An Arctic fox has small, rounded ears.", t: "structural", lvl: 1 },
  { d: "A snow leopard has large, fur-covered paws.", t: "structural", lvl: 1 },
  { d: "A cactus has a thick, waxy coating on its stem.", t: "structural", lvl: 2 },
  { d: "A camel has wide, padded feet.", t: "structural", lvl: 1 },
  { d: "An emperor penguin has densely packed, overlapping feathers.", t: "structural", lvl: 2 },
  { d: "A yak has a long, shaggy coat with a woolly undercoat.", t: "structural", lvl: 2 },
  { d: "Many alpine plants are covered in fine hairs.", t: "structural", lvl: 2 },
  { d: "A cactus has a swollen, pleated stem that stores water.", t: "structural", lvl: 2 },
  { d: "Emperor penguins huddle together in large groups during the Antarctic winter.", t: "behavioural", lvl: 1 },
  { d: "A fennec fox sleeps in its burrow by day and hunts at night.", t: "behavioural", lvl: 1 },
  { d: "A kangaroo rat plugs the entrance of its burrow during the day.", t: "behavioural", lvl: 2 },
  { d: "A snow leopard wraps its long tail around its face when it rests.", t: "behavioural", lvl: 2 },
  { d: "A pregnant polar bear digs a den in the snow to give birth in winter.", t: "behavioural", lvl: 2 },
  { d: "Emperor penguins take turns moving from the cold edge of a huddle to the warmer middle.", t: "behavioural", lvl: 2 },
  { d: "Caribou migrate south to sheltered forests when winter comes.", t: "behavioural", lvl: 1 },
  { d: "A desert lizard moves between sun and shade to control its body temperature.", t: "behavioural", lvl: 2 },
  { d: "An Arctic ground squirrel digs a burrow below the frozen surface and stays in it all winter.", t: "behavioural", lvl: 3 },
  { d: "Mountaineers follow the rule \"climb high, sleep low\".", t: "behavioural", lvl: 3 },
  { d: "A kangaroo rat's kidneys produce very concentrated urine, saving water.", t: "physiological", lvl: 2 },
  { d: "A camel can let its body temperature rise by several degrees during the day before it starts to sweat.", t: "physiological", lvl: 2 },
  { d: "A kangaroo rat makes water inside its body by breaking down the dry seeds it eats.", t: "physiological", lvl: 3 },
  { d: "After a few weeks at high altitude, a climber's body makes extra red blood cells.", t: "physiological", lvl: 2 },
  { d: "A yak's blood picks up oxygen very efficiently from thin mountain air.", t: "physiological", lvl: 2 },
  { d: "During hibernation, an Arctic ground squirrel's body temperature can drop below 0 °C without it freezing.", t: "physiological", lvl: 3 },
  { d: "Many cacti open their stomata only at night, when it is cooler, so they lose less water.", t: "physiological", lvl: 3 },
  { d: "A camel produces very dry dung, so little water is lost.", t: "physiological", lvl: 2 },
  { d: "Sherpa people's bodies use oxygen very efficiently at high altitude.", t: "physiological", lvl: 3 },
  { d: "Alaskan wood frogs survive being partly frozen in winter because sugar in their cells acts like antifreeze.", t: "physiological", lvl: 3 },
];

type Challenge = "heat" | "cold" | "drought" | "low oxygen";
const CH_ACCEPT: Record<Challenge, string[]> = {
  heat: ["heat", "high temperature", "high temperatures", "hot", "hot temperatures", "overheating"],
  cold: ["cold", "low temperature", "low temperatures", "freezing", "the cold"],
  drought: ["drought", "lack of water", "water shortage", "dryness", "no water", "shortage of water", "dry"],
  "low oxygen": ["low oxygen", "thin air", "lack of oxygen", "less oxygen", "hypoxia", "oxygen"],
};
// `also`: a second challenge the same feature genuinely helps with — accepted too, so the prompt stays fair.
const CH_BANK: { d: string; c: Challenge; also?: Challenge; lvl: 1 | 2 | 3; why: string }[] = [
  { d: "a fennec fox's huge ears, full of blood vessels", c: "heat", lvl: 1, why: "Blood flowing through the thin ears gives off heat to the air, cooling the fox." },
  { d: "a polar bear's thick layer of blubber", c: "cold", lvl: 1, why: "Fat is a good insulator, so body heat stays in." },
  { d: "a cactus's thick, waxy skin", c: "drought", lvl: 1, why: "The wax seals the surface so less water escapes by transpiration." },
  { d: "a yak's large lungs and heart", c: "low oxygen", lvl: 1, why: "Bigger lungs take in more air per breath and a big heart pumps oxygen round faster." },
  { d: "an Arctic fox's small, rounded ears", c: "cold", lvl: 1, why: "Small ears have less surface area, so less heat is lost from them." },
  { d: "a cactus storing water in its swollen stem", c: "drought", lvl: 1, why: "Stored water keeps the plant alive through long dry spells." },
  { d: "emperor penguins huddling together", c: "cold", lvl: 1, why: "Each penguin has less body surface exposed to the wind, so it loses less heat." },
  { d: "a kangaroo rat's very concentrated urine", c: "drought", lvl: 2, why: "Its kidneys remove waste using very little water, so water is saved." },
  { d: "a climber's body making extra red blood cells", c: "low oxygen", lvl: 2, why: "More red blood cells can carry more oxygen from each thin breath." },
  { d: "a fennec fox being nocturnal", c: "heat", also: "drought", lvl: 2, why: "Hunting at night avoids the hottest part of the day (and so it also loses less water)." },
  { d: "the dense, woolly undercoat of an Arctic fox", c: "cold", lvl: 1, why: "Fur traps a layer of still air, which insulates the body." },
  { d: "the wide, shallow roots of a cactus", c: "drought", lvl: 2, why: "They soak up rain quickly from a large area before it evaporates or drains away." },
  { d: "a cactus's leaves being reduced to spines", c: "drought", lvl: 2, why: "Spines have a tiny surface area, so far less water is lost by transpiration than from broad leaves." },
  { d: "a camel storing fat in its hump instead of all over its body", c: "heat", lvl: 3, why: "With fat concentrated in one place, the rest of the body is not insulated, so heat can escape easily." },
  { d: "a camel letting its body temperature rise during the day", c: "drought", also: "heat", lvl: 3, why: "It copes with the daytime heat by starting to sweat later — which mainly saves water that would otherwise be lost as sweat." },
  { d: "a seal's blubber", c: "cold", lvl: 1, why: "Blubber insulates the seal in near-freezing water." },
  { d: "Andean peoples' larger chests and lung capacity", c: "low oxygen", lvl: 2, why: "Bigger lungs take in more air, and so more oxygen, with each breath." },
  { d: "a snow leopard's enlarged nasal cavity", c: "cold", also: "low oxygen", lvl: 3, why: "A large nasal cavity warms the very cold air before it reaches the lungs (and helps it breathe in plenty of thin mountain air)." },
  { d: "desert ephemeral seeds staying dormant until rain falls", c: "drought", lvl: 2, why: "The seeds wait out dry years and only grow when there is water to complete the life cycle." },
  { d: "a polar bear's black skin under its fur", c: "cold", lvl: 2, why: "Dark skin is thought to help absorb heat; together with fur and blubber it keeps the bear warm." },
  { d: "a kangaroo rat staying in a cool burrow during the day", c: "heat", also: "drought", lvl: 2, why: "Underground it is much cooler (and more humid) than the scorching surface, so it also loses less water." },
  { d: "a yak's blood picking up oxygen very efficiently", c: "low oxygen", lvl: 2, why: "Its blood loads oxygen even when there is little in each breath." },
  { d: "tundra plants growing low to the ground", c: "cold", lvl: 2, why: "Close to the ground they shelter from freezing winds and are insulated by snow in winter." },
  { d: "a desert lizard standing high on its legs on hot sand", c: "heat", lvl: 3, why: "Lifting its body off the sand reduces the heat it picks up from the hot ground." },
  { d: "Sherpa people's bodies using oxygen very efficiently", c: "low oxygen", lvl: 3, why: "Their bodies get more energy out of the limited oxygen in thin air." },
  { d: "the counter-current blood flow in a penguin's legs", c: "cold", lvl: 3, why: "Warm blood flowing to the feet heats the cold blood coming back, so little heat is lost through the feet." },
  { d: "a camel producing very dry dung", c: "drought", lvl: 2, why: "Almost all the water is taken back into the body before waste leaves it." },
];

const DESERT: Fact[] = [
  { q: ["What are a cactus's leaves reduced to, cutting water loss and keeping animals away?"], a: ["spines", "spine", "needles", "prickles"], lvl: 1, why: "Spines have a tiny surface area, so much less water is lost than from broad leaves, and they deter thirsty animals." },
  { q: ["Name the thick, waxy outer layer on a cactus stem that reduces water loss."], a: ["waxy cuticle", "cuticle", "wax", "waxy layer", "waxy skin", "waxy coating", "wax layer"], lvl: 2, why: "The waxy cuticle seals the surface so water cannot easily evaporate." },
  { q: ["Name the long root that grows straight down to reach water deep underground."], a: ["tap root", "taproot", "tap roots"], lvl: 1, why: "A tap root reaches groundwater far below the dry surface." },
  { q: ["Name the process by which plants lose water vapour from their leaves and stems."], a: ["transpiration", "transpiring"], lvl: 1, why: "Transpiration is water loss from a plant; desert plants have many features to reduce it.", traps: [{ a: ["evaporation"], fb: "Close — but when a plant loses water vapour, the special term is transpiration." }] },
  { q: ["What name is given to plants that store water in swollen, fleshy stems or leaves?"], a: ["succulents", "succulent", "succulent plants"], lvl: 2, why: "Succulents such as cacti store water in fleshy tissue to survive drought." },
  { q: ["Name the desert plants whose seeds lie dormant until rain falls, then grow, flower and set seed within a few weeks."], a: ["ephemerals", "ephemeral", "desert ephemerals", "ephemeral plants"], lvl: 2, why: "Ephemerals complete their whole life cycle in the short wet spell, then survive as seeds." },
  { q: ["What does a camel's hump store?", "A camel's hump is NOT a water tank. What does it actually store?"], a: ["fat", "fatty tissue", "fat store"], lvl: 1, why: "The hump stores fat, which can be broken down for energy when food is scarce.", traps: [{ a: ["water"], fb: "This is the classic misconception — the hump stores fat, not water." }] },
  { q: ["Give the term for animals that are active at night and rest during the day."], a: ["nocturnal"], lvl: 1, why: "Being nocturnal avoids the extreme daytime heat of the desert." },
  { q: ["Name the small fox of the Sahara with enormous ears that help it lose heat."], a: ["fennec fox", "fennec", "fennecs"], lvl: 1, why: "The fennec fox's large ears radiate heat and help it hear prey moving under the sand." },
  { q: ["Name the small North American desert rodent that can survive without ever drinking water."], a: ["kangaroo rat", "kangaroo rats"], lvl: 1, why: "Kangaroo rats get the water they need from their food and make very concentrated urine." },
  { q: ["Name the large desert mammal that has two rows of eyelashes, can close its nostrils and has wide padded feet."], a: ["camel", "dromedary", "dromedary camel", "bactrian camel", "camels"], lvl: 1, why: "All of these camel features protect it from sand and heat." },
  { q: ["Name the tiny pores on a plant through which water vapour escapes."], a: ["stomata", "stoma", "stomates"], lvl: 3, why: "Fewer stomata, or stomata that open only at night, means less water lost by transpiration." },
  { q: ["What is the name for water that a kangaroo rat makes inside its body by breaking down its food?"], a: ["metabolic water"], lvl: 3, why: "Breaking down food (especially fats and starches in seeds) releases water inside the body." },
  { q: ["Many desert animals shelter underground by day. What is this underground home called?"], a: ["burrow", "burrows"], lvl: 1, why: "A burrow is much cooler and more humid than the surface." },
  { q: ["Which part of a camel's face can it close to keep out blowing sand?"], a: ["nostrils", "nostril", "nose"], lvl: 2, why: "Closable nostrils stop sand being breathed in during sandstorms." },
  { q: ["A camel's eyes are protected from blowing sand by two rows of long what?"], a: ["eyelashes", "eyelash", "lashes"], lvl: 1, why: "The double row of lashes acts as a sand screen." },
  { q: ["Name the giant cactus of the Sonoran Desert (USA and Mexico) whose pleated stem swells after rain."], a: ["saguaro", "saguaro cactus", "saguaros"], lvl: 3, why: "The saguaro's pleats open out like an accordion to hold water after rain." },
  { q: ["What name is given to plants adapted to survive in very dry conditions?"], a: ["xerophytes", "xerophyte", "xerophytic plants"], lvl: 3, why: "Xerophytes (from Greek *xeros*, dry) include cacti and other drought-tolerant plants." },
  { q: ["A kangaroo rat's kidneys save water by making very concentrated what?"], a: ["urine", "wee", "pee"], lvl: 2, why: "Very concentrated urine gets rid of waste using as little water as possible." },
  { q: ["What part of a camel is wide and padded so it does not sink into soft sand?"], a: ["feet", "foot", "pads", "foot pads", "toes"], lvl: 1, why: "Wide feet spread the camel's weight over a bigger area, like snowshoes on snow." },
  { q: ["Fennec foxes have huge ears full of blood vessels. What do these ears help them get rid of?"], a: ["heat", "body heat", "excess heat"], lvl: 1, why: "Warm blood in the thin ears loses heat to the air." },
  { q: ["Cactus roots often spread out wide just below the surface. What word describes roots like these?"], a: ["shallow", "shallow roots", "shallow root", "surface roots"], lvl: 2, why: "Shallow, wide roots soak up rain quickly before it evaporates." },
  { q: ["A cactus has no proper leaves. Which process for making food does its green stem carry out instead?"], a: ["photosynthesis", "photosynthesising"], lvl: 2, why: "The green stem contains chlorophyll, so it takes over the job of photosynthesis." },
  { q: ["Give the term for when an animal becomes inactive, often underground, through the hottest and driest season."], a: ["aestivation", "estivation", "aestivating", "estivating", "aestivate"], lvl: 3, why: "Aestivation is like hibernation, but to survive heat and drought rather than cold.", traps: [{ a: ["hibernation", "hibernate"], fb: "Hibernation is for surviving winter cold. The hot-season version is aestivation." }] },
  { q: ["A hot desert receives less than how many millimetres of rain a year?"], a: ["250", "250 mm", "250mm"], lvl: 2, why: "The usual definition of a desert is less than 250 mm of precipitation a year." },
  { q: ["Name the largest hot desert in the world, home of the fennec fox."], a: ["sahara", "sahara desert"], lvl: 1, why: "The Sahara covers much of North Africa." },
  { q: ["Folds in a cactus stem let it expand to hold more water after rain. What are these folds called?"], a: ["pleats", "pleat", "ribs", "folds", "ridges"], lvl: 3, why: "The pleats open out like an accordion as the stem fills with water, then shrink back." },
];

const POLAR: Fact[] = [
  { q: ["Name the thick layer of fat under the skin of seals, whales and polar bears."], a: ["blubber"], lvl: 1, why: "Blubber is an insulating layer of fat that keeps body heat in." },
  { q: ["What do emperor penguins do together in groups to keep warm in winter storms?"], a: ["huddle", "huddling", "huddles"], lvl: 1, why: "In a huddle each penguin has less body surface exposed to the wind." },
  { q: ["Name the Arctic predator that has black skin, a thick fat layer and fur that looks white."], a: ["polar bear", "polar bears"], lvl: 1, why: "Black skin absorbs heat; fur and blubber insulate." },
  { q: ["Name the largest penguin, which breeds on Antarctic sea ice during the winter."], a: ["emperor penguin", "emperor", "emperor penguins"], lvl: 1, why: "Emperor penguins breed in the dark Antarctic winter, when temperatures can fall below −40 °C." },
  { q: ["Name the small shrimp-like animals that are a key food for whales, seals and penguins in the Southern Ocean."], a: ["krill", "antarctic krill"], lvl: 1, why: "Krill sit near the base of the Antarctic food chain." },
  { q: ["Antarctic krill mainly feed on tiny drifting ocean plants. What are these called?"], a: ["phytoplankton", "algae", "plankton"], lvl: 2, why: "Food chain: phytoplankton → krill → penguins/seals/whales.", traps: [{ a: ["zooplankton"], fb: "Zooplankton are tiny animals — krill eat the tiny plants, phytoplankton." }] },
  { q: ["Name the cold, treeless biome around the Arctic Ocean, with frozen ground beneath."], a: ["tundra", "arctic tundra"], lvl: 1, why: "The tundra is too cold and windy, with too short a summer, for trees to grow." },
  { q: ["What is the name for ground that stays frozen for at least two years in a row?"], a: ["permafrost"], lvl: 1, why: "Permafrost stops roots growing deep and stops water draining away." },
  { q: ["An Arctic fox's ears are small to reduce the loss of what?"], a: ["heat", "body heat"], lvl: 1, why: "Small ears have less surface area, so less heat escapes." },
  { q: ["What colour is an Arctic fox's coat usually in winter?"], a: ["white"], lvl: 1, why: "A white winter coat camouflages the fox against snow." },
  { q: ["What colour does an Arctic fox's coat usually turn in summer?"], a: ["brown", "grey-brown", "greybrown", "brownish", "grey brown", "brown-grey"], lvl: 2, why: "When the snow melts, a brown coat matches the rocks and plants of the tundra." },
  { q: ["An Arctic fox's coat changes colour with the seasons so it can hide from prey. What is this kind of disguise called?"], a: ["camouflage", "camouflaged"], lvl: 1, why: "Camouflage helps the fox sneak up on prey such as lemmings." },
  { q: ["Where does a male emperor penguin hold the egg to keep it off the ice?"], a: ["on his feet", "feet", "his feet", "on its feet", "on feet", "on top of his feet", "foot"], lvl: 2, why: "The egg rests on his feet, covered by a warm fold of skin, through the winter." },
  { q: ["Name the warm fold of feathered skin that covers an emperor penguin's egg."], a: ["brood pouch", "pouch", "brood patch"], lvl: 3, why: "The brood pouch keeps the egg warm while the male stands on the ice for weeks." },
  { q: ["Name the ocean that surrounds Antarctica."], a: ["southern ocean", "antarctic ocean"], lvl: 2, why: "The Southern Ocean is home to krill, seals, whales and penguins." },
  { q: ["Some tundra plants grow in low, rounded clumps that trap warm air. What are they called?"], a: ["cushion plants", "cushion plant", "cushion", "cushions"], lvl: 2, why: "A dense, low cushion shelters from the wind and stays warmer inside." },
  { q: ["Arctic poppy flowers turn during the day to follow what?"], a: ["the sun", "sun", "sunlight"], lvl: 3, why: "Tracking the sun warms the centre of the flower, attracting insects and helping seeds develop." },
  { q: ["Some Arctic mammals spend the winter in a deep sleep with a very low body temperature. What is this called?"], a: ["hibernation", "hibernate", "hibernating"], lvl: 2, why: "Hibernation saves energy when food is scarce and it is bitterly cold." },
  { q: ["Name the large deer of the Arctic tundra that travels south in huge herds each autumn."], a: ["caribou", "reindeer"], lvl: 2, why: "Caribou migrate to sheltered forests where they can find food in winter." },
  { q: ["What is the term for animals moving to a different area each season, then returning?"], a: ["migration", "migrate", "migrating"], lvl: 1, why: "Migration lets animals escape the worst conditions and find food." },
  { q: ["Name the seabird that flies from the Arctic to the Antarctic and back every year."], a: ["arctic tern", "arctic terns"], lvl: 3, why: "The Arctic tern has the longest yearly migration of any animal, enjoying two polar summers." },
  { q: ["What is a polar bear's main prey?"], a: ["seals", "seal", "ringed seal", "ringed seals"], lvl: 2, why: "Polar bears hunt seals from the sea ice, often at breathing holes." },
  { q: ["Small animals lose heat faster than large animals of the same shape. Which ratio explains this?"], a: ["surface area to volume ratio", "surface area to volume", "sa:v", "sa:v ratio", "surface area:volume", "surface area : volume ratio", "sa to v", "sa/v"], lvl: 3, why: "A small body has more surface area for each unit of volume, so heat escapes faster." },
  { q: ["In which polar region do polar bears live in the wild?"], a: ["arctic", "the arctic", "north pole"], lvl: 1, why: "Polar bears live only in the Arctic; almost all penguins live in the Southern Hemisphere.", traps: [{ a: ["antarctic", "antarctica"], fb: "No — polar bears are only found in the Arctic (far north)." }] },
  { q: ["On which continent do emperor penguins breed?"], a: ["antarctica", "antarctic"], lvl: 1, why: "Emperor penguins breed only on and around Antarctica.", traps: [{ a: ["arctic"], fb: "No wild penguins live in the Arctic — emperors breed in Antarctica." }] },
  { q: ["In a penguin's legs, warm blood heading to the feet heats cold blood coming back. What is this system called?"], a: ["counter-current heat exchange", "countercurrent heat exchange", "counter current heat exchange", "counter-current", "countercurrent", "counter current", "countercurrent exchange", "counter-current exchange"], lvl: 3, why: "Heat passes from outgoing to returning blood, so very little is lost through the feet." },
  { q: ["An Arctic fox curls up and wraps which bushy body part around its face to keep warm?"], a: ["tail", "its tail"], lvl: 2, why: "The bushy tail acts like a blanket over the nose and feet." },
];

const MOUNTAIN: Fact[] = [
  { q: ["Name the large, long-haired cattle of the Himalaya and Tibetan Plateau."], a: ["yak", "yaks"], lvl: 1, why: "Yaks have thick coats and big lungs and hearts for thin, cold mountain air." },
  { q: ["Name the big cat of the high mountains of Central Asia, with thick fur, large paws and a very long tail."], a: ["snow leopard", "snow leopards"], lvl: 1, why: "Its tail helps it balance on rocky slopes and keeps its face warm." },
  { q: ["What is the term for the body slowly getting used to thin air over days and weeks?"], a: ["acclimatisation", "acclimatization", "acclimatising", "acclimatizing", "acclimation"], lvl: 1, why: "Acclimatisation includes breathing faster and making more red blood cells." },
  { q: ["Name the illness, with headache, nausea and tiredness, caused by climbing too high too fast."], a: ["altitude sickness", "acute mountain sickness", "ams", "mountain sickness"], lvl: 1, why: "It happens when the body has not had time to adjust to low oxygen." },
  { q: ["What is the most important treatment for serious altitude sickness?", "A trekker has severe altitude sickness. What must they do straight away?"], a: ["descend", "descending", "go down", "descent", "going down", "move lower", "go lower", "go to a lower altitude"], lvl: 2, why: "Going down to a lower altitude, where there is more oxygen per breath, is the key treatment." },
  { q: ["Which cells in the blood carry oxygen, and are made in greater numbers after time at altitude?"], a: ["red blood cells", "red blood cell", "rbc", "rbcs", "erythrocytes", "red cells"], lvl: 1, why: "More red blood cells can carry more oxygen from each thin breath." },
  { q: ["Name the protein in red blood cells that carries oxygen."], a: ["haemoglobin", "hemoglobin"], lvl: 3, why: "Haemoglobin picks up oxygen in the lungs and releases it in the body's tissues." },
  { q: ["Name the people of Nepal's Everest region who are famous as high-altitude guides."], a: ["sherpa", "sherpas", "sherpa people"], lvl: 1, why: "Sherpa people's bodies use oxygen very efficiently after generations living at altitude." },
  { q: ["Quechua and Aymara peoples live high in which South American mountain range?"], a: ["andes", "andes mountains"], lvl: 2, why: "Many Andean people have large chests and lungs and lots of haemoglobin." },
  { q: ["Name the highest mountain in the world."], a: ["everest", "mount everest", "mt everest", "chomolungma", "sagarmatha", "qomolangma"], lvl: 1, why: "Everest is about 8,849 m high, on the Nepal–China border." },
  { q: ["\"Thin air\" at altitude has fewer oxygen molecules per breath. This is because what is lower?"], a: ["air pressure", "pressure", "atmospheric pressure"], lvl: 2, why: "Oxygen is still about 21% of the air, but lower pressure means fewer molecules in each breath.", traps: [{ a: ["oxygen percentage", "percentage of oxygen"], fb: "The percentage of oxygen stays about the same — it is the air pressure that falls." }] },
  { q: ["What is the medical term for the body's tissues not getting enough oxygen?"], a: ["hypoxia", "hypoxic"], lvl: 3, why: "Hypoxia is the danger at high altitude." },
  { q: ["What is the name for the height above which trees cannot grow on a mountain?"], a: ["tree line", "treeline", "timberline", "timber line"], lvl: 2, why: "Above the tree line it is too cold and windy, with too short a growing season, for trees." },
  { q: ["Many alpine plants are covered in fine what, which trap warmth and shield them from strong sunlight?"], a: ["hairs", "hair", "fuzz"], lvl: 2, why: "Hairs trap a layer of still air and help reflect strong UV light." },
  { q: ["Complete the mountaineers' rule for acclimatising: \"climb high, sleep ...\""], a: ["low", "lower"], lvl: 2, why: "Climbing high in the day then sleeping lower helps the body adjust safely." },
  { q: ["A snow leopard's large, furry paws work like natural what, stopping it sinking into snow?"], a: ["snowshoes", "snowshoe", "snow shoes", "snow shoe"], lvl: 2, why: "Big paws spread the leopard's weight over a larger area." },
  { q: ["Under its long outer hair, a yak has a dense, woolly layer. What is this layer called?"], a: ["undercoat", "under coat", "under-coat", "wool", "down"], lvl: 2, why: "The undercoat traps air and insulates the yak from the cold." },
  { q: ["Yaks have unusually large hearts and which other large organs, which help them take in more oxygen?"], a: ["lungs", "lung"], lvl: 1, why: "Big lungs take in more air with each breath." },
  { q: ["Name the high plateau in Asia, often called \"the roof of the world\", where yaks are herded."], a: ["tibetan plateau", "tibet", "plateau of tibet", "qinghai-tibet plateau", "qinghai tibet plateau"], lvl: 2, why: "Much of the Tibetan Plateau is over 4,000 m above sea level." },
  { q: ["Name the highest mountain in the Andes."], a: ["aconcagua"], lvl: 3, why: "Aconcagua, in Argentina, is about 6,961 m high — the highest peak outside Asia." },
  { q: ["Name the type of radiation from the sun that is much stronger high on mountains, burning skin and eyes."], a: ["ultraviolet", "uv", "uv radiation", "ultra violet", "ultraviolet radiation", "uv light", "ultraviolet light"], lvl: 2, why: "Thinner air filters out less UV, so sunburn and snow blindness are real risks." },
  { q: ["Name the wild relative of the alpaca that lives high in the Andes and has very oxygen-efficient blood."], a: ["vicuna", "vicuña", "vicunas", "vicuñas"], lvl: 3, why: "Vicuñas live at around 3,500–5,000 m and their blood loads oxygen very efficiently." },
  { q: ["Climbers on the highest peaks often carry bottles of which gas?"], a: ["oxygen", "o2"], lvl: 1, why: "Bottled oxygen makes up for the thin air near the summit." },
  { q: ["What nickname is given to altitudes above about 8,000 m, where the body cannot acclimatise?"], a: ["death zone", "the death zone"], lvl: 3, why: "Above about 8,000 m the body gets steadily weaker, however long you stay." },
  { q: ["Name the goose that migrates over the Himalaya, flying higher than most birds."], a: ["bar-headed goose", "bar headed goose", "barheaded goose", "bar-headed geese", "bar headed geese"], lvl: 3, why: "Bar-headed geese have large lungs and very efficient haemoglobin." },
  { q: ["Many Andean people have unusually large chests. Which organs inside give them a greater capacity for air?"], a: ["lungs", "lung"], lvl: 3, why: "A large chest and lungs take in more air, and so more oxygen, per breath." },
  { q: ["Mountain temperatures drop as you climb. Name the steady rate at which temperature falls with height."], a: ["lapse rate", "environmental lapse rate", "the lapse rate"], lvl: 3, why: "On average, temperature falls by about 6.5 °C for every 1000 m you climb." },
];

const TRUEFALSE: { s: string; v: boolean; lvl: 1 | 2 | 3; why: string }[] = [
  { s: "Camels store water in their humps.", v: false, lvl: 1, why: "The hump stores **fat**, not water." },
  { s: "A camel's hump stores fat that can be used for energy.", v: true, lvl: 1, why: "When food is short, the fat is broken down for energy." },
  { s: "All deserts are hot.", v: false, lvl: 1, why: "A desert is defined by low rainfall, not heat — Antarctica and the Gobi are cold deserts." },
  { s: "Polar bears live in Antarctica.", v: false, lvl: 1, why: "Polar bears live only in the Arctic." },
  { s: "Wild penguins live in the Arctic.", v: false, lvl: 1, why: "Almost all wild penguins live in the Southern Hemisphere (Galápagos penguins only just cross the equator) — none live in the Arctic." },
  { s: "Polar bears have black skin under their fur.", v: true, lvl: 2, why: "Under the pale fur the skin is black, which is thought to help absorb heat." },
  { s: "Cactus spines are modified leaves.", v: true, lvl: 2, why: "Over many generations, leaves became spines that lose far less water." },
  { s: "An animal can develop a new adaptation during its own lifetime because it needs it.", v: false, lvl: 2, why: "Adaptations evolve over many generations by natural selection — individuals cannot choose them." },
  { s: "Adaptations develop over many generations through natural selection.", v: true, lvl: 2, why: "Individuals with helpful features survive and breed more, passing those features on." },
  { s: "An Arctic fox's small ears help it lose less heat.", v: true, lvl: 1, why: "Smaller ears have less surface area for heat to escape from." },
  { s: "A fennec fox's large ears help it lose heat.", v: true, lvl: 1, why: "Blood in the large, thin ears gives off heat to the air." },
  { s: "A large animal has a larger surface area to volume ratio than a small animal of the same shape.", v: false, lvl: 3, why: "Larger animals have a *smaller* SA:V ratio, so they lose heat more slowly." },
  { s: "A small animal loses heat faster, for its size, than a large animal of the same shape.", v: true, lvl: 3, why: "Small bodies have more surface area per unit of volume." },
  { s: "Emperor penguins breed during the Antarctic winter.", v: true, lvl: 2, why: "They lay eggs as winter begins so chicks are ready when food is plentiful in summer." },
  { s: "Male emperor penguins keep the egg warm on their feet.", v: true, lvl: 2, why: "The male balances the egg on his feet under a fold of skin for about two months." },
  { s: "Kangaroo rats must drink water every day.", v: false, lvl: 2, why: "They get water from their food and can survive without drinking." },
  { s: "The body can fully acclimatise to high altitude in a few hours.", v: false, lvl: 2, why: "Acclimatisation takes days to weeks." },
  { s: "There is less oxygen in each breath at high altitude because the air pressure is lower.", v: true, lvl: 2, why: "Lower pressure means fewer oxygen molecules in each lungful." },
  { s: "At high altitude the air contains a much lower percentage of oxygen.", v: false, lvl: 3, why: "Oxygen is still about 21% of the air — there is just less air (lower pressure) in each breath." },
  { s: "Going down to a lower altitude is the main treatment for serious altitude sickness.", v: true, lvl: 2, why: "Lower down there is more oxygen per breath." },
  { s: "Tundra plants grow tall to reach more sunlight.", v: false, lvl: 1, why: "They grow low to shelter from freezing winds." },
  { s: "Permafrost stops tundra plants from growing deep roots.", v: true, lvl: 2, why: "Roots cannot push into permanently frozen ground." },
  { s: "Krill are an important food for penguins, seals and whales in the Southern Ocean.", v: true, lvl: 1, why: "Krill are a key link in the Antarctic food chain." },
  { s: "Blubber is a thick layer of fat.", v: true, lvl: 1, why: "Blubber is fat under the skin that insulates the body." },
  { s: "Desert ephemerals can complete their whole life cycle within a few weeks after rain.", v: true, lvl: 3, why: "They grow, flower and set seed quickly while water lasts." },
  { s: "A behavioural adaptation is a physical feature of the body.", v: false, lvl: 2, why: "Behavioural adaptations are things an organism *does*; body features are structural." },
  { s: "Snow leopards use their long tails to help them balance.", v: true, lvl: 2, why: "The tail helps them balance on steep, rocky slopes." },
  { s: "Cacti have broad, flat leaves to catch as much sunlight as possible.", v: false, lvl: 1, why: "Broad leaves would lose too much water — cacti have spines and a green stem instead." },
  { s: "Wide, shallow roots let a cactus soak up rain quickly before it evaporates.", v: true, lvl: 2, why: "Desert rain is short and rare, so roots near the surface catch it fast." },
  { s: "Antarctica is the largest desert in the world.", v: true, lvl: 3, why: "It receives very little precipitation, so it counts as a (cold) desert." },
  { s: "Yaks are adapted to hot, humid lowland forests.", v: false, lvl: 1, why: "Yaks live in the cold, high Himalaya and Tibetan Plateau." },
];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------
export const drills: Drill[] = [
  {
    id: "adaptations.adaptation-type",
    topicId: "adaptations",
    title: "Structural, behavioural or physiological?",
    level: 1,
    guideRef: "what-is-adaptation",
    generate(rng, tier) {
      const f = tierPick(TYPE_BANK, rng, tier);
      const others = (Object.keys(TYPE_ACCEPT) as AType[]).filter((t) => t !== f.t);
      const fb: Record<AType, string> = {
        structural: "Structural means a body part you could see — is this a feature, or something it does or something inside the body?",
        behavioural: "Behavioural means an action. Is the organism *doing* something here?",
        physiological: "Physiological means a hidden process inside the body. Is this happening inside, or can you see it?",
      };
      return {
        prompt: `Is this a **structural**, **behavioural** or **physiological** adaptation?\n\n> ${f.d}`,
        answer: { type: "text", accept: TYPE_ACCEPT[f.t], display: cap(f.t) },
        solution: [`**${cap(f.t)}.**`, TYPE_WHY[f.t]],
        hint: "Ask: is it a body part (structural), an action (behavioural) or a process inside the body (physiological)?",
        traps: others.map((t) => ({ spec: { type: "text" as const, accept: [t] }, feedback: fb[t] })),
      };
    },
  },
  {
    id: "adaptations.desert-recall",
    topicId: "adaptations",
    title: "Desert adaptations: key terms and organisms",
    level: 1,
    guideRef: "desert-adaptations",
    generate(rng, tier) {
      return fromBank(DESERT, rng, tier, "Think about the desert's two big problems: heat and lack of water.");
    },
  },
  {
    id: "adaptations.polar-recall",
    topicId: "adaptations",
    title: "Cold-environment adaptations: key terms and organisms",
    level: 1,
    guideRef: "polar-adaptations",
    generate(rng, tier) {
      return fromBank(POLAR, rng, tier, "Think about how polar organisms keep heat in, find food and survive a short summer.");
    },
  },
  {
    id: "adaptations.mountain-recall",
    topicId: "adaptations",
    title: "High-altitude adaptations: key terms and organisms",
    level: 2,
    guideRef: "mountain-adaptations",
    generate(rng, tier) {
      return fromBank(MOUNTAIN, rng, tier, "Think about the mountain problems: thin air (low oxygen), cold and strong sunlight.");
    },
  },
  {
    id: "adaptations.which-challenge",
    topicId: "adaptations",
    title: "Link a feature to the challenge it solves",
    level: 2,
    guideRef: "what-is-adaptation",
    generate(rng, tier) {
      const f = tierPick(CH_BANK, rng, tier);
      const traps: Trap[] = [];
      if (f.c === "drought" && f.also !== "heat") traps.push({ spec: { type: "text", accept: ["heat"] }, feedback: "Deserts are hot too — but this feature is about saving or finding *water*." });
      if (f.c === "heat" && f.also !== "drought") traps.push({ spec: { type: "text", accept: ["drought"] }, feedback: "This feature is about getting rid of, or avoiding, *heat* rather than saving water." });
      const accept = f.also ? [...CH_ACCEPT[f.c], ...CH_ACCEPT[f.also]] : CH_ACCEPT[f.c];
      return {
        prompt: `Which challenge does this feature mainly help with: **heat**, **cold**, **drought** or **low oxygen**?\n\n> ${cap(f.d)}`,
        answer: { type: "text", accept, display: cap(f.c) },
        solution: [`**${cap(f.c)}.**${f.also ? ` (${cap(f.also)} is also accepted — this feature helps with both.)` : ""}`, f.why],
        hint: "Use cause → process → effect: what does the feature actually do to heat, water or oxygen?",
        traps: traps.length ? traps : undefined,
      };
    },
  },
  {
    id: "adaptations.sa-to-volume",
    topicId: "adaptations",
    title: "Calculate surface area to volume ratio",
    level: 2,
    guideRef: "polar-adaptations",
    generate(rng, tier) {
      if (tier === 1) {
        // Cube model of an animal's body.
        const s = rng.int(1, 10);
        const sa = 6 * s * s, v = s * s * s;
        const kind = rng.pick(["sa", "v", "ratio"] as const);
        const animal = rng.pick(["a mouse", "a lemming", "a hare", "a fox", "a seal pup", "a penguin chick"]);
        const intro = `A simplified model shows ${animal}'s body as a cube with sides of ${s} cm.`;
        if (kind === "sa") {
          return {
            prompt: `${intro} Calculate its **surface area** in cm².`,
            answer: { type: "number", value: sa },
            solution: [`A cube has 6 square faces.`, `Surface area = 6 × ${s} × ${s} = ${sa} cm².`],
            hint: "How many faces does a cube have, and what is the area of one face?",
            traps: s !== 6 && s * s !== sa ? [{ spec: { type: "number", value: s * s }, feedback: "That is the area of just one face — a cube has 6 faces." }] : undefined,
          };
        }
        if (kind === "v") {
          return {
            prompt: `${intro} Calculate its **volume** in cm³.`,
            answer: { type: "number", value: v },
            solution: [`Volume of a cube = side × side × side.`, `${s} × ${s} × ${s} = ${v} cm³.`],
            hint: "Volume of a cube = length × width × height.",
            traps: s !== 3 && 3 * s !== v ? [{ spec: { type: "number", value: 3 * s }, feedback: "You multiplied by 3 — you need side × side × side." }] : undefined,
          };
        }
        const r = clean(6 / s);
        const rr = roundTo(6 / s, 2);
        return {
          prompt: `${intro} Calculate its **surface area to volume ratio** (surface area ÷ volume). Give your answer to 2 decimal places where needed.`,
          answer: { type: "number", value: rr, tolerance: 0.005 },
          solution: [`Surface area = 6 × ${s}² = ${sa} cm²; volume = ${s}³ = ${v} cm³.`, `SA : V = ${sa} ÷ ${v} = ${num(rr)}${r !== rr ? " (to 2 d.p.)" : ""}.`, s <= 3 ? "A high ratio — this small body loses heat quickly." : "A lower ratio — this bigger body holds on to heat better."],
          hint: "Work out the surface area and the volume first, then divide surface area by volume.",
          traps: roundTo(v / sa, 2) !== rr ? [{ spec: { type: "number", value: roundTo(v / sa, 2), tolerance: 0.005 }, feedback: "You divided volume by surface area — the ratio is surface area ÷ volume." }] : undefined,
        };
      }
      if (tier === 2) {
        // Cuboid body.
        let l = 4, w = 2, h = 2;
        for (let i = 0; i < 20; i++) {
          l = rng.int(2, 12); w = rng.int(1, 6); h = rng.int(1, 6);
          if (!(l === w && w === h)) break;
        }
        const sa = 2 * (l * w + l * h + w * h), v = l * w * h;
        const rr = roundTo(sa / v, 2);
        const animal = rng.pick(["an Arctic hare", "a seal", "a fennec fox", "a kangaroo rat", "a yak calf", "a snow leopard cub"]);
        return {
          prompt: `A simplified model shows ${animal}'s body as a cuboid ${l} cm long, ${w} cm wide and ${h} cm high. Calculate its surface area to volume ratio (surface area ÷ volume), to 2 decimal places.`,
          answer: { type: "number", value: rr, tolerance: 0.005 },
          solution: [
            `Surface area = 2 × (${l}×${w} + ${l}×${h} + ${w}×${h}) = 2 × ${l * w + l * h + w * h} = ${sa} cm².`,
            `Volume = ${l} × ${w} × ${h} = ${v} cm³.`,
            `SA : V = ${sa} ÷ ${v} = ${num(rr)} (to 2 d.p.).`,
          ],
          hint: "A cuboid has three pairs of matching faces: add the three different face areas, then double.",
          traps: (() => {
            const half = roundTo((l * w + l * h + w * h) / v, 2);
            return half !== rr ? [{ spec: { type: "number", value: half, tolerance: 0.005 }, feedback: "You counted only three faces — each face has a matching pair, so double it." }] : undefined;
          })(),
        };
      }
      // Tier 3: compare two cube-shaped animals.
      const a = rng.int(1, 4);
      const k = rng.int(2, 5);
      const b = a * k;
      const ask = rng.pick(["times", "small", "large"] as const);
      const ra = clean(6 / a), rb = roundTo(6 / b, 2);
      const names = rng.pick([["an Arctic hare", "a polar bear"], ["a lemming", "a musk ox"], ["a penguin chick", "an adult emperor penguin"], ["a kangaroo rat", "a camel"], ["a pika", "a yak"]]);
      const intro = `Model ${names[0]} as a cube of side ${a} cm and ${names[1]} as a cube of side ${b} cm.`;
      if (ask === "times") {
        return {
          prompt: `${intro} How many times larger is the first animal's surface area to volume ratio than the second's?`,
          answer: { type: "number", value: k },
          solution: [`For a cube, SA : V = 6s² ÷ s³ = 6 ÷ s.`, `First: 6 ÷ ${a} = ${num(ra)}. Second: 6 ÷ ${b}${clean(6 / b) !== rb ? " ≈ " : " = "}${num(rb)}.`, `Ratio comparison: (6 ÷ ${a}) ÷ (6 ÷ ${b}) = ${b} ÷ ${a} = ${k}: the smaller animal has ${k} times more surface per unit of volume, so it loses heat ${k} times faster for its size.`],
          hint: "Find a shortcut: for a cube, surface area ÷ volume simplifies to 6 ÷ side.",
          traps: [{ spec: { type: "number", value: k * k * k }, feedback: `That is how many times bigger the *volume* is (${k}³). Compare the ratios instead.` }],
        };
      }
      const side = ask === "small" ? a : b;
      const val = roundTo(6 / side, 2);
      return {
        prompt: `${intro} Calculate the surface area to volume ratio of ${ask === "small" ? names[0] : names[1]} (surface area ÷ volume), to 2 decimal places where needed.`,
        answer: { type: "number", value: val, tolerance: 0.005 },
        solution: [`Surface area = 6 × ${side}² = ${6 * side * side} cm²; volume = ${side}³ = ${side * side * side} cm³.`, `SA : V = ${6 * side * side} ÷ ${side * side * side} = ${num(val)}.`, ask === "small" ? "The smaller animal has the bigger ratio, so it loses heat faster — one reason small animals struggle in polar winters." : "The bigger animal has the smaller ratio, so it keeps heat in better — one reason many polar animals are large."],
        hint: "For a cube, surface area ÷ volume simplifies to 6 ÷ side length.",
      };
    },
  },
  {
    id: "adaptations.lapse-rate",
    topicId: "adaptations",
    title: "Temperature at altitude (lapse rate)",
    level: 2,
    guideRef: "mountain-adaptations",
    generate(rng, tier) {
      // Temperature falls about 6.5 °C per 1000 m. Work in tenths of a degree to stay exact.
      if (tier === 1) {
        const base = rng.int(15, 32);
        const km = rng.int(1, 6);
        const t = roundTo(base - 6.5 * km, 1);
        return {
          prompt: `Temperature falls by about 6.5 °C for every 1000 m you climb. At sea level it is ${base} °C. What is the temperature ${km * 1000} m higher up? Give your answer in °C.`,
          answer: { type: "number", value: t, tolerance: 0.05 },
          solution: [`Height gained: ${km * 1000} m = ${km} × 1000 m.`, `Drop: ${km} × 6.5 = ${num(roundTo(6.5 * km, 1))} °C.`, `${base} − ${num(roundTo(6.5 * km, 1))} = ${num(t)} °C.`],
          hint: "How many lots of 1000 m have you climbed? Multiply that by 6.5.",
          traps: roundTo(base + 6.5 * km, 1) !== t ? [{ spec: { type: "number", value: roundTo(base + 6.5 * km, 1), tolerance: 0.05 }, feedback: "Temperature *falls* as you climb — subtract the drop." }] : undefined,
        };
      }
      if (tier === 2) {
        const base = rng.int(10, 30);
        const h0 = rng.int(0, 6) * 500;
        const gain = rng.int(2, 9) * 500;
        const drop = roundTo((65 * gain) / 10000, 2);
        const t = roundTo(base - drop, 2);
        return {
          prompt: `A trekking route starts at ${h0.toLocaleString("en-GB")} m, where it is ${base} °C. The pass is at ${(h0 + gain).toLocaleString("en-GB")} m. Using a lapse rate of 6.5 °C per 1000 m, what is the temperature at the pass? Give your answer in °C, to 2 decimal places where needed.`,
          answer: { type: "number", value: t, tolerance: 0.005 },
          solution: [`Height gained = ${(h0 + gain).toLocaleString("en-GB")} − ${h0.toLocaleString("en-GB")} = ${gain.toLocaleString("en-GB")} m.`, `Drop = ${gain} ÷ 1000 × 6.5 = ${num(drop)} °C.`, `${base} − ${num(drop)} = ${num(t)} °C.`],
          hint: "Find the height *gained* first — not the height of the pass.",
          traps: h0 > 0 ? [{ spec: { type: "number", value: roundTo(base - (65 * (h0 + gain)) / 10000, 2), tolerance: 0.005 }, feedback: "You used the full height of the pass. Only the height gained from the start counts." }] : undefined,
        };
      }
      // Tier 3: real peaks, or work backwards to the freezing level.
      const peaks: [string, number][] = [["Mount Kinabalu (Malaysia)", 4095], ["Mount Fuji (Japan)", 3776], ["Kilimanjaro (Tanzania)", 5895], ["Mount Everest", 8849], ["Aconcagua (Argentina)", 6961], ["Ben Nevis (UK)", 1345], ["Mount Kenya", 5199], ["Denali (USA)", 6190]];
      if (rng.bool()) {
        const [name, h] = rng.pick(peaks);
        const base = rng.int(12, 30);
        const drop = (65 * h) / 10000;
        const t = roundTo(base - drop, 1);
        return {
          prompt: `It is ${base} °C at sea level near ${name}, which is ${h.toLocaleString("en-GB")} m high. Using a lapse rate of 6.5 °C per 1000 m, estimate the temperature at the summit, in °C to 1 decimal place.`,
          answer: { type: "number", value: t, tolerance: 0.05 },
          solution: [`Drop = ${h} ÷ 1000 × 6.5 = ${num(roundTo(drop, 4))} °C.`, `${base} − ${num(roundTo(drop, 4))} = ${num(roundTo(base - drop, 4))} ≈ ${num(t)} °C.`, "This is a simplified model — real summit temperatures also depend on wind, season and weather."],
          hint: "Change the height into thousands of metres, then multiply by 6.5.",
          traps: [{ spec: { type: "number", value: roundTo(-drop, 1), tolerance: 0.05 }, feedback: "That is just the temperature *drop* (as a negative). Take it away from the sea-level temperature." }],
        };
      }
      // Freezing level: base temperature chosen as a multiple of 1.3 so the answer is a whole 200 m step.
      const steps = rng.int(5, 22); // 1.3 °C per 200 m
      const base = roundTo(steps * 1.3, 1);
      const h = steps * 200;
      return {
        prompt: `At sea level it is ${num(base)} °C. Using a lapse rate of 6.5 °C per 1000 m, at what height (in metres) would you expect the temperature to reach 0 °C?`,
        answer: { type: "number", value: h, tolerance: 1 },
        solution: [`You need a drop of ${num(base)} °C.`, `Each metre the temperature falls by 6.5 ÷ 1000 = 0.0065 °C.`, `Height = ${num(base)} ÷ 0.0065 = ${h.toLocaleString("en-GB")} m.`],
        hint: "Work backwards: how many lots of 6.5 °C fit into the temperature you need to lose?",
        traps: [{ spec: { type: "number", value: roundTo(base / 6.5, 2) }, feedback: "That is the height in *thousands* of metres. Multiply by 1000." }],
      };
    },
  },
  {
    id: "adaptations.true-or-false",
    topicId: "adaptations",
    title: "True or false? Spot the misconception",
    level: 3,
    guideRef: "what-is-adaptation",
    generate(rng, tier) {
      const f = tierPick(TRUEFALSE, rng, tier);
      return {
        prompt: `True or false?\n\n> ${f.s}`,
        answer: { type: "text", accept: f.v ? ["true", "t", "yes"] : ["false", "f", "no"], display: f.v ? "True" : "False" },
        solution: [`**${f.v ? "True" : "False"}.**`, f.why],
        hint: "Watch out for popular myths — test the statement against what you know about how the feature works.",
        traps: [{ spec: { type: "text", accept: [f.v ? "false" : "true"] }, feedback: f.v ? "It sounds surprising, but it is actually true — read the explanation." : "This is a common misconception — check the explanation." }],
      };
    },
  },
];
