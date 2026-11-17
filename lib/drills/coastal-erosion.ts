import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { num, big, roundTo, clean } from "./helpers.ts";

const T = "coastal-erosion";
const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara"];

/** A fact-bank entry. lvl 1 = core, 2 = typical, 3 = harder wording. */
interface Fact<K extends string> {
  lvl: 1 | 2 | 3;
  d: string;
  k: K;
}

/** Tier 1 → lvl 1–2, tier 2 → everything, tier 3 → lvl 2–3 (harder entries). */
function pool<F extends { lvl: number }>(bank: readonly F[], tier: 1 | 2 | 3): F[] {
  if (tier === 1) return bank.filter((f) => f.lvl <= 2);
  if (tier === 3) return bank.filter((f) => f.lvl >= 2);
  return [...bank];
}

function textTraps<K extends string>(right: K, wrong: Partial<Record<K, { accept: string[]; feedback: string }>>): Trap[] {
  const out: Trap[] = [];
  for (const [k, v] of Object.entries(wrong) as [K, { accept: string[]; feedback: string } | undefined][]) {
    if (k === right || !v) continue;
    out.push({ spec: { type: "text", accept: v.accept }, feedback: v.feedback });
  }
  return out;
}

// ---------------------------------------------------------------------------
// 1. Coastal system: input, process or output
// ---------------------------------------------------------------------------
type Sys = "input" | "process" | "output";
const SYSTEM: Fact<Sys>[] = [
  { lvl: 1, d: "energy from waves", k: "input" },
  { lvl: 1, d: "energy from the wind blowing over the sea", k: "input" },
  { lvl: 1, d: "sediment carried to the coast by rivers", k: "input" },
  { lvl: 2, d: "energy from the tides", k: "input" },
  { lvl: 3, d: "sand brought in by lorries and spread on a beach (beach nourishment)", k: "input" },
  { lvl: 3, d: "sand washed onshore from the sea bed", k: "input" },
  { lvl: 1, d: "erosion of the cliffs by waves", k: "process" },
  { lvl: 1, d: "weathering of the cliff rock", k: "process" },
  { lvl: 1, d: "transportation of sand along the shore", k: "process" },
  { lvl: 1, d: "deposition of sand where the waves lose energy", k: "process" },
  { lvl: 2, d: "longshore drift", k: "process" },
  { lvl: 2, d: "mass movement of the cliff face", k: "process" },
  { lvl: 2, d: "abrasion of the cliff foot", k: "process" },
  { lvl: 3, d: "slumping of a saturated clay cliff", k: "process" },
  { lvl: 3, d: "freeze–thaw weathering in cliff-top cracks", k: "process" },
  { lvl: 1, d: "a sandy beach", k: "output" },
  { lvl: 2, d: "a spit", k: "output" },
  { lvl: 2, d: "a sea stack", k: "output" },
  { lvl: 2, d: "a cave in a headland", k: "output" },
  { lvl: 3, d: "sediment carried away into deep water and lost from the coast", k: "output" },
  { lvl: 3, d: "a wave-cut platform", k: "output" },
];
const SYS_INFO: Record<Sys, { accept: string[]; feedback: string; why: string }> = {
  input: { accept: ["input"], feedback: "Inputs are what goes INTO the coast: energy (waves, wind, tides) and sediment.", why: "It is energy or material entering the coastal system." },
  process: { accept: ["process"], feedback: "A process is something that HAPPENS — erosion, weathering, transportation, deposition, mass movement.", why: "It is something happening that changes the coast." },
  output: { accept: ["output"], feedback: "Outputs are the RESULTS: landforms (beaches, caves, stacks) and sediment lost from the system.", why: "It is a result of the processes — a landform or material leaving the system." },
};

// ---------------------------------------------------------------------------
// 2. Wave key terms
// ---------------------------------------------------------------------------
interface Term {
  lvl: 1 | 2 | 3;
  d: string;
  a: string[];
  trap?: { accept: string[]; feedback: string };
  why: string;
}
const WAVE_TERMS: Term[] = [
  { lvl: 1, d: "the rush of water up the beach after a wave breaks", a: ["swash"], trap: { accept: ["backwash"], feedback: "Backwash flows back DOWN the beach. Up the beach is swash." }, why: "Swash moves up the beach, carrying sand and pebbles with it." },
  { lvl: 1, d: "the water that flows back down the beach towards the sea, pulled by gravity", a: ["backwash", "back wash"], trap: { accept: ["swash"], feedback: "Swash goes UP the beach. Water returning to the sea is backwash." }, why: "Backwash always runs straight down the beach because of gravity." },
  { lvl: 1, d: "the distance of open water over which the wind blows to make waves", a: ["fetch"], why: "The longer the fetch, the more energy the wind can give the waves." },
  { lvl: 1, d: "the direction from which the wind blows most often", a: ["prevailing wind", "prevailing winds"], why: "In the UK the prevailing wind is from the south-west." },
  { lvl: 1, d: "the highest point of a wave", a: ["crest", "wave crest"], trap: { accept: ["trough"], feedback: "The trough is the LOWEST point. The top is the crest." }, why: "The crest is the top of the wave." },
  { lvl: 1, d: "the lowest point of a wave, between two crests", a: ["trough", "wave trough"], trap: { accept: ["crest"], feedback: "The crest is the TOP of the wave. The low point is the trough." }, why: "The trough is the dip between crests." },
  { lvl: 2, d: "the vertical distance from the trough to the crest of a wave", a: ["wave height", "height"], trap: { accept: ["wavelength"], feedback: "Wavelength is measured sideways, crest to crest. Up-and-down is wave height." }, why: "Wave height is measured up and down, trough to crest." },
  { lvl: 2, d: "the horizontal distance from one crest to the next", a: ["wavelength", "wave length"], trap: { accept: ["wave height"], feedback: "Wave height is measured up and down. Crest to crest sideways is the wavelength." }, why: "Wavelength is measured horizontally between crests." },
  { lvl: 2, d: "the number of waves reaching the shore each minute", a: ["wave frequency", "frequency"], why: "Constructive waves have a low frequency (about 6–8 a minute); destructive waves a high one (about 10–14)." },
  { lvl: 2, d: "the regular rise and fall of sea level, caused mainly by the pull of the Moon's gravity", a: ["tide", "tides"], why: "Most coasts, including Singapore's, have two high tides and two low tides a day." },
  { lvl: 2, d: "the difference in height between high tide and low tide", a: ["tidal range"], why: "The tidal range decides how much of the shore the waves can reach." },
  { lvl: 3, d: "a seasonal reversal of the prevailing wind, like the north-east and south-west winds that affect Singapore", a: ["monsoon", "monsoons", "monsoon wind", "monsoon winds"], why: "Singapore has a north-east monsoon (about December–March) and a south-west monsoon (about June–September)." },
  { lvl: 3, d: "a wave that topples over near the shore because friction with the sea bed slows its base", a: ["breaker", "breaking wave", "breakers"], why: "Friction slows the bottom of the wave, the top keeps going and the wave breaks." },
  { lvl: 3, d: "a rise in sea level caused by very low air pressure and strong winds pushing water onto the coast", a: ["storm surge"], why: "Storm surges let big waves reach higher up the coast than usual." },
  { lvl: 3, d: "long, regular waves that have travelled far from the storm that formed them", a: ["swell"], why: "Swell can cross whole oceans before breaking on a beach." },
  { lvl: 3, d: "the extra-large tidal range that happens when the Sun and Moon line up", a: ["spring tide", "spring tides"], trap: { accept: ["neap tide"], feedback: "Neap tides are the SMALLEST range, when the Sun and Moon pull at right angles." }, why: "Spring tides come around new moon and full moon." },
  { lvl: 3, d: "the smallest tidal range, when the Sun and Moon pull at right angles to each other", a: ["neap tide", "neap tides"], trap: { accept: ["spring tide"], feedback: "Spring tides are the LARGEST range, when the Sun and Moon line up." }, why: "Neap tides come around the first and last quarter of the Moon." },
  { lvl: 3, d: "the time in seconds between two wave crests passing the same point", a: ["wave period", "period"], trap: { accept: ["wave frequency"], feedback: "Frequency is waves per minute. The time between two crests is the wave period." }, why: "A wave period of 6 seconds means 10 waves a minute." },
];

// ---------------------------------------------------------------------------
// 3. Constructive or destructive
// ---------------------------------------------------------------------------
type Wave = "constructive" | "destructive";
const WAVES: Fact<Wave>[] = [
  { lvl: 1, d: "Low waves that break gently, with a strong swash and a weak backwash.", k: "constructive" },
  { lvl: 1, d: "Waves that build up the beach by depositing sand and shingle.", k: "constructive" },
  { lvl: 1, d: "Long, low waves arriving only about 6–8 times a minute.", k: "constructive" },
  { lvl: 2, d: "The swash is stronger than the backwash, so more sand is pushed up the beach than is dragged back.", k: "constructive" },
  { lvl: 2, d: "Waves that spill gently onto the beach in calm weather.", k: "constructive" },
  { lvl: 2, d: "Waves with a long wavelength and a small height that add a ridge of sand (a berm) to the top of the beach.", k: "constructive" },
  { lvl: 3, d: "After weeks of calm weather the beach is wider and higher than before.", k: "constructive" },
  { lvl: 3, d: "Waves whose energy mostly carries sediment up the beach rather than taking it away.", k: "constructive" },
  { lvl: 1, d: "Tall, steep waves that crash down onto the beach.", k: "destructive" },
  { lvl: 1, d: "Waves with a strong backwash and a weak swash.", k: "destructive" },
  { lvl: 1, d: "Waves arriving about 10–14 times a minute during a storm.", k: "destructive" },
  { lvl: 2, d: "The backwash is stronger than the swash, so sand and pebbles are dragged back out to sea.", k: "destructive" },
  { lvl: 2, d: "Waves that plunge down onto the beach and remove material from it.", k: "destructive" },
  { lvl: 2, d: "High-energy waves that erode the beach and attack the foot of the cliffs.", k: "destructive" },
  { lvl: 3, d: "After a winter storm the beach is narrower and much of its sand has been pulled offshore.", k: "destructive" },
  { lvl: 3, d: "Waves with a short wavelength that break so often that each backwash runs into the next incoming wave and weakens its swash.", k: "destructive" },
];

// ---------------------------------------------------------------------------
// 4. Erosion processes
// ---------------------------------------------------------------------------
type Proc = "hydraulic" | "abrasion" | "attrition" | "solution";
const PROCESSES: Fact<Proc>[] = [
  { lvl: 1, d: "Waves smash into a cliff and force air and water into its cracks. The squeezed air blasts the rock apart.", k: "hydraulic" },
  { lvl: 1, d: "The sheer force of the water hitting the cliff breaks pieces off it.", k: "hydraulic" },
  { lvl: 2, d: "Air trapped in a joint is compressed by each wave, then expands suddenly as the wave pulls back, widening the joint.", k: "hydraulic" },
  { lvl: 2, d: "During a storm, the pressure of breaking waves alone prises loose blocks out of a heavily jointed cliff.", k: "hydraulic" },
  { lvl: 3, d: "A granite cliff has no beach and no loose pebbles in front of it, yet its cracks keep widening as storm waves pound it.", k: "hydraulic" },
  { lvl: 3, d: "Each breaking wave traps and compresses air behind the joints of an old sea wall, slowly forcing the blocks apart.", k: "hydraulic" },
  { lvl: 1, d: "Waves pick up sand and pebbles and hurl them at the cliff, wearing it away like sandpaper.", k: "abrasion" },
  { lvl: 1, d: "Rocks carried by the waves scrape and grind against the cliff face.", k: "abrasion" },
  { lvl: 2, d: "The foot of a cliff is scratched and smoothed by sand and shingle that the waves drag back and forth across it.", k: "abrasion" },
  { lvl: 2, d: "A concrete sea wall is scoured and pitted by shingle flung against it by storm waves.", k: "abrasion" },
  { lvl: 3, d: "A wave-cut platform is slowly scoured lower as waves drag boulders across its surface.", k: "abrasion" },
  { lvl: 3, d: "A wooden groyne on a shingle beach is worn thinner each year as storm waves fling stones at it.", k: "abrasion" },
  { lvl: 1, d: "Rocks and pebbles carried by the waves knock into each other and break into smaller pieces.", k: "attrition" },
  { lvl: 1, d: "Stones in the sea bump into each other and become smaller, smoother and rounder.", k: "attrition" },
  { lvl: 2, d: "Angular boulders that fell from a cliff become rounded pebbles, then sand, as the waves roll them against one another.", k: "attrition" },
  { lvl: 2, d: "Sediment wears itself down by colliding with other sediment as the waves move it.", k: "attrition" },
  { lvl: 3, d: "Pebbles at the far end of a beach are much smaller and rounder than the jagged blocks at the foot of the cliff they came from, because they have been knocking together for longer.", k: "attrition" },
  { lvl: 3, d: "The load carried by the waves gets finer over time — not because it hits the cliff, but because the pieces hit each other.", k: "attrition" },
  { lvl: 1, d: "Sea water slowly dissolves rocks such as chalk and limestone, carrying the dissolved minerals away.", k: "solution" },
  { lvl: 1, d: "Sea water reacts chemically with the cliff rock and dissolves it.", k: "solution" },
  { lvl: 2, d: "Calcium carbonate in a limestone cliff is slowly dissolved by sea water and carried away.", k: "solution" },
  { lvl: 2, d: "A chalk cliff loses material chemically, without any pieces being knocked off.", k: "solution" },
  { lvl: 3, d: "Sea water gradually dissolves the chalk of a sea stack, carrying the minerals away in the water.", k: "solution" },
  { lvl: 3, d: "Rock pools in a limestone platform slowly deepen as sea water chemically eats into the rock.", k: "solution" },
];
const PROC_INFO: Record<Proc, { accept: string[]; feedback: string; why: string }> = {
  hydraulic: { accept: ["hydraulic action", "hydraulic power", "hydraulic", "hydraulic pressure"], feedback: "Hydraulic action is the force of the WATER (and squeezed air) — no rocks are thrown here.", why: "It is the force of the water and compressed air in cracks — **hydraulic action**." },
  abrasion: { accept: ["abrasion", "corrasion"], feedback: "Abrasion is rocks thrown AT THE CLIFF. Here the rocks are not hitting the cliff.", why: "The waves' load is thrown against the cliff and wears it like sandpaper — **abrasion**." },
  attrition: { accept: ["attrition"], feedback: "Attrition is rocks hitting EACH OTHER — this is something wearing the cliff (or dissolving it) instead.", why: "The load knocks against itself, so the pieces get smaller and rounder — **attrition**." },
  solution: { accept: ["solution", "corrosion"], feedback: "Solution (corrosion) is a chemical process — dissolving. This is a physical, mechanical action.", why: "The rock is dissolved chemically by sea water — **solution** (also called corrosion)." },
};

// ---------------------------------------------------------------------------
// 5. Weathering type
// ---------------------------------------------------------------------------
type WType = "mechanical" | "chemical" | "biological";
const WEATHERING: Fact<WType>[] = [
  { lvl: 1, d: "Water seeps into a crack, freezes and expands, forcing the crack wider.", k: "mechanical" },
  { lvl: 1, d: "Sea spray evaporates in tiny holes in the rock, and the salt crystals that grow there push the rock apart.", k: "mechanical" },
  { lvl: 2, d: "Repeated freezing and thawing of water in joints on a cliff top breaks off sharp, angular fragments.", k: "mechanical" },
  { lvl: 2, d: "Rock breaks into smaller pieces without any change to the minerals it is made of.", k: "mechanical" },
  { lvl: 3, d: "On a cold coast, ice forms in cracks overnight and melts by day, slowly loosening blocks on the cliff face.", k: "mechanical" },
  { lvl: 3, d: "Salt left behind by drying spray grows crystals inside a sandstone cliff, so its surface crumbles into loose grains.", k: "mechanical" },
  { lvl: 1, d: "Rainwater, which is a weak carbonic acid, reacts with limestone and dissolves it.", k: "chemical" },
  { lvl: 1, d: "The minerals in the rock are changed by a chemical reaction, which weakens it.", k: "chemical" },
  { lvl: 2, d: "Iron minerals in a cliff react with oxygen and water and rust, so the rock crumbles.", k: "chemical" },
  { lvl: 2, d: "Slightly acidic rain slowly dissolves the chalk at the top of a cliff.", k: "chemical" },
  { lvl: 3, d: "Carbon dioxide dissolved in rainwater reacts with the calcium carbonate in the rock.", k: "chemical" },
  { lvl: 3, d: "A limestone gravestone near the coast has lost its sharp lettering because rain has slowly reacted with the stone.", k: "chemical" },
  { lvl: 1, d: "Plant roots grow into cracks in the rock and force them apart.", k: "biological" },
  { lvl: 1, d: "Rabbits dig burrows into the top of a cliff, loosening the rock and soil.", k: "biological" },
  { lvl: 2, d: "A seed lands in a crack in a cliff; as the tree grows, its roots widen the crack.", k: "biological" },
  { lvl: 2, d: "Living things — plants and animals — break down the rock.", k: "biological" },
  { lvl: 3, d: "Piddocks, a kind of shellfish, bore holes into soft chalk on the shore.", k: "biological" },
  { lvl: 3, d: "Nesting seabirds dig burrows into the soft soil and rock of a cliff top.", k: "biological" },
];
const WTYPE_INFO: Record<WType, { accept: string[]; feedback: string; why: string }> = {
  mechanical: { accept: ["mechanical", "physical", "mechanical weathering", "physical weathering"], feedback: "Mechanical (physical) weathering breaks rock by force — ice, salt crystals — without changing the minerals.", why: "The rock is broken by physical force (ice or salt crystals); its minerals are not changed — **mechanical** weathering." },
  chemical: { accept: ["chemical", "chemical weathering"], feedback: "Chemical weathering changes or dissolves the minerals — look for acids, reactions or rusting.", why: "A chemical reaction changes or dissolves the rock's minerals — **chemical** weathering." },
  biological: { accept: ["biological", "biological weathering", "organic weathering"], feedback: "Biological weathering is caused by living things — roots, burrowing animals, boring shellfish.", why: "Living things (plants or animals) break the rock — **biological** weathering." },
};

// ---------------------------------------------------------------------------
// 6. Weathering, erosion or mass movement?
// ---------------------------------------------------------------------------
type WEM = "weathering" | "erosion" | "mass";
const WEM_BANK: Fact<WEM>[] = [
  { lvl: 1, d: "Ice forms in a crack in a cliff and widens it — the rock stays where it is.", k: "weathering" },
  { lvl: 1, d: "Rain slowly dissolves limestone at the top of a cliff, where it sits.", k: "weathering" },
  { lvl: 2, d: "Plant roots split a boulder on the cliff top, but the pieces do not move.", k: "weathering" },
  { lvl: 2, d: "Salt crystals growing in the rock make the cliff face crumbly.", k: "weathering" },
  { lvl: 3, d: "A sandstone cliff top, far above the reach of the waves, slowly crumbles as salt spray dries on it.", k: "weathering" },
  { lvl: 3, d: "The rock is broken down in place by the weather; nothing has carried it away yet.", k: "weathering" },
  { lvl: 1, d: "Waves throw pebbles at the foot of a cliff, wearing it away.", k: "erosion" },
  { lvl: 1, d: "Waves force air into cracks in a cliff and break pieces off.", k: "erosion" },
  { lvl: 2, d: "Pebbles carried by the waves knock together and become smaller.", k: "erosion" },
  { lvl: 2, d: "Sea water dissolves the chalk at the base of a cliff and carries it away.", k: "erosion" },
  { lvl: 3, d: "Storm waves scoop out a notch at the base of a cliff between high and low tide.", k: "erosion" },
  { lvl: 3, d: "Material is worn away and removed by a moving force such as the waves.", k: "erosion" },
  { lvl: 1, d: "A huge block of rock suddenly falls from the cliff face onto the beach.", k: "mass" },
  { lvl: 1, d: "After heavy rain, a section of a clay cliff slips downwards in one mass.", k: "mass" },
  { lvl: 2, d: "Saturated soil and rock slide down the cliff under gravity.", k: "mass" },
  { lvl: 2, d: "The cliff top tilts backwards as it slumps down a curved surface.", k: "mass" },
  { lvl: 3, d: "Material moves downhill because of gravity, not because the waves carried it.", k: "mass" },
  { lvl: 3, d: "A house at the top of a clay cliff ends up on the beach after the cliff beneath it gives way.", k: "mass" },
];
const WEM_INFO: Record<WEM, { accept: string[]; feedback: string; why: string }> = {
  weathering: { accept: ["weathering"], feedback: "Weathering breaks rock down IN PLACE — nothing is moved away. Look for whether the material moves.", why: "The rock is broken down where it is, by the weather, plants or animals, with no movement — **weathering**." },
  erosion: { accept: ["erosion"], feedback: "Erosion needs a moving force — here the waves wear the rock away and remove it.", why: "A moving force (the waves) wears the rock away and removes it — **erosion**." },
  mass: { accept: ["mass movement", "mass wasting"], feedback: "Mass movement is material moving DOWNHILL under gravity — rockfall, slumping, sliding.", why: "Material moves down the cliff under gravity — **mass movement**." },
};

// ---------------------------------------------------------------------------
// 7. Type of mass movement
// ---------------------------------------------------------------------------
type MM = "rockfall" | "slump" | "slide";
const MASS: Fact<MM>[] = [
  { lvl: 1, d: "Pieces of rock break off a steep cliff face and fall freely to the beach below.", k: "rockfall" },
  { lvl: 1, d: "Blocks loosened by freeze–thaw drop straight down from a steep, hard-rock cliff.", k: "rockfall" },
  { lvl: 2, d: "A wave-cut notch undercuts a steep chalk cliff until the overhanging rock above it collapses and drops.", k: "rockfall" },
  { lvl: 2, d: "A pile of broken rock (scree) builds up at the foot of a steep cliff as fragments break off and fall.", k: "rockfall" },
  { lvl: 3, d: "A sudden, fast movement in which loose rock free-falls from a near-vertical face.", k: "rockfall" },
  { lvl: 1, d: "A soft clay cliff, saturated by rain, slips down along a curved surface.", k: "slump" },
  { lvl: 1, d: "A chunk of cliff moves down and tilts backwards as it slips, leaving a step in the cliff.", k: "slump" },
  { lvl: 2, d: "Rain soaks into permeable sand that sits on top of impermeable clay; the heavy, wet mass rotates down a curved slip plane.", k: "slump" },
  { lvl: 2, d: "The cliff top drops in a series of curved terraces, each tilted back towards the land.", k: "slump" },
  { lvl: 3, d: "In June 1993, after heavy rain, the wet clay cliff beneath the Holbeck Hall Hotel in Scarborough gave way and rotated downhill on a curved surface.", k: "slump" },
  { lvl: 1, d: "A block of rock slides downhill in a straight line along a flat surface.", k: "slide" },
  { lvl: 2, d: "Layers of rock that dip towards the sea slide down along a bedding plane after heavy rain.", k: "slide" },
  { lvl: 2, d: "Material moves down the slope in one block along a straight (not curved) slip surface.", k: "slide" },
  { lvl: 3, d: "A mass of rock and soil moves rapidly downslope along a flat plane, staying mostly in one piece without rotating.", k: "slide" },
];
const MASS_INFO: Record<MM, { accept: string[]; feedback: string; why: string }> = {
  rockfall: { accept: ["rockfall", "rock fall", "rockfalls"], feedback: "A rockfall is rock dropping freely from a steep face — no slipping along a surface.", why: "Rock breaks off a steep face and falls freely — a **rockfall**." },
  slump: { accept: ["slumping", "slump", "rotational slip", "rotational slump"], feedback: "Slumping moves along a CURVED surface and the block tilts back (rotational slip).", why: "Saturated material slips and rotates along a curved surface — **slumping** (rotational slip)." },
  slide: { accept: ["sliding", "slide", "landslide", "translational slide"], feedback: "A slide moves along a FLAT, straight surface without rotating.", why: "Material moves in one block along a flat, straight surface — **sliding** (a landslide)." },
};

/** Generic fact-bank drill body. */
function bankItem<K extends string>(
  rng: Rng,
  tier: 1 | 2 | 3,
  bank: readonly Fact<K>[],
  info: Record<K, { accept: string[]; feedback: string; why: string }>,
  frames: ((d: string) => string)[],
  hint: string,
  extra?: (k: K) => string,
) {
  const f = rng.pick(pool(bank, tier));
  const frame = rng.pick(frames);
  const wrong: Partial<Record<K, { accept: string[]; feedback: string }>> = {};
  for (const k of Object.keys(info) as K[]) wrong[k] = { accept: [info[k].accept[0]], feedback: info[k].feedback };
  const traps = textTraps(f.k, wrong);
  const solution = [info[f.k].why];
  if (extra) solution.push(extra(f.k));
  return { prompt: frame(f.d), answer: { type: "text" as const, accept: info[f.k].accept }, solution, hint, traps };
}

// ---------------------------------------------------------------------------
// Cliff-comparison factors
// ---------------------------------------------------------------------------
interface Factor {
  lvl: 1 | 2;
  fast: (rng: Rng) => string;
  slow: (rng: Rng) => string;
  why: string;
}
const FACTORS: Factor[] = [
  { lvl: 1, fast: () => "is made of soft boulder clay", slow: () => "is made of hard granite", why: "Rock type: soft clay is eroded far faster than resistant granite." },
  { lvl: 1, fast: () => "has no beach in front of it", slow: () => "is protected by a wide sandy beach", why: "A beach absorbs wave energy before the waves reach the cliff." },
  { lvl: 2, fast: () => "faces the prevailing wind", slow: () => "is sheltered from the prevailing wind", why: "Facing the prevailing wind means bigger, more frequent waves hit it." },
  { lvl: 2, fast: (r) => `faces open ocean with a fetch of about ${big(r.pick([1500, 2000, 3000, 4000, 5000]))} km`, slow: (r) => `faces a narrow channel with a fetch of only ${r.pick([10, 15, 20, 30, 40])} km`, why: "A longer fetch lets the wind build bigger, more powerful waves." },
  { lvl: 2, fast: () => "is cut by many joints and faults", slow: () => "is solid rock with very few cracks", why: "Cracks give hydraulic action weaknesses to attack." },
  { lvl: 2, fast: () => "is hit mostly by destructive waves", slow: () => "is hit mostly by constructive waves", why: "Destructive waves have more energy and a strong backwash that removes material." },
  { lvl: 2, fast: () => "is made of soft sands and clays", slow: () => "is made of hard limestone", why: "Rock type: soft sands and clays are much less resistant than hard limestone." },
  { lvl: 2, fast: () => "has nothing protecting its base", slow: () => "has rock armour along its base", why: "Rock armour absorbs wave energy before it reaches the cliff." },
];

export const drills: Drill[] = [
  // ---------------------------------------------------------------- level 1
  {
    id: `${T}.coastal-system`,
    topicId: T,
    title: "Input, process or output in the coastal system",
    level: 1,
    guideRef: "intro-to-coasts",
    generate(rng, tier) {
      return bankItem(
        rng,
        tier,
        SYSTEM,
        SYS_INFO,
        [
          (d) => `In the coastal system, is **${d}** an input, a process or an output?`,
          (d) => `A geographer models the coast as a system. Classify **${d}** as an input, process or output.`,
          (d) => `Input, process or output? **${d}**`,
        ],
        "Ask: is it going INTO the coast, HAPPENING at the coast, or a RESULT of what happens?",
        () => "Inputs → processes → outputs: energy and sediment go in, processes act on them, landforms (and lost sediment) come out.",
      );
    },
  },
  {
    id: `${T}.wave-terms`,
    topicId: T,
    title: "Wave key terms",
    level: 1,
    guideRef: "waves",
    generate(rng, tier) {
      const t = rng.pick(pool(WAVE_TERMS, tier));
      const frame = rng.pick([
        (d: string) => `Give the term for ${d}.`,
        (d: string) => `What is the name for ${d}?`,
        (d: string) => `Key term: ${d}.`,
      ]);
      return {
        prompt: frame(t.d),
        answer: { type: "text", accept: t.a },
        solution: [`**${t.a[0]}** — ${t.d}.`, t.why],
        hint: "Picture a wave arriving at a beach and think about which part or measurement is being described.",
        traps: t.trap ? [{ spec: { type: "text", accept: t.trap.accept }, feedback: t.trap.feedback }] : undefined,
      };
    },
  },
  {
    id: `${T}.wave-type`,
    topicId: T,
    title: "Constructive or destructive wave?",
    level: 1,
    guideRef: "waves",
    generate(rng, tier) {
      const f = rng.pick(pool(WAVES, tier));
      const frame = rng.pick([
        (d: string) => `Constructive or destructive waves? ${d}`,
        (d: string) => `Which type of wave is described — constructive or destructive? ${d}`,
        (d: string) => `${d} Name the type of wave.`,
      ]);
      const c = f.k === "constructive";
      return {
        prompt: frame(f.d),
        answer: { type: "text", accept: c ? ["constructive", "constructive wave", "constructive waves"] : ["destructive", "destructive wave", "destructive waves"] },
        solution: [
          c
            ? "**Constructive** waves are low and gentle (about 6–8 a minute) with a strong swash and weak backwash, so they BUILD the beach."
            : "**Destructive** waves are high and steep (about 10–14 a minute) with a strong backwash, so they REMOVE material and erode the beach.",
        ],
        hint: "Compare the swash and the backwash: which one wins, and does the beach gain or lose sand?",
        traps: [
          c
            ? { spec: { type: "text", accept: ["destructive"] }, feedback: "Destructive waves have a strong BACKWASH and remove sand. These build the beach or are gentle — constructive." }
            : { spec: { type: "text", accept: ["constructive"] }, feedback: "Constructive waves have a strong SWASH and build the beach. These are powerful and remove material — destructive." },
        ],
      };
    },
  },
  {
    id: `${T}.erosion-process`,
    topicId: T,
    title: "Name the coastal erosion process",
    level: 1,
    guideRef: "erosion-processes",
    generate(rng, tier) {
      return bankItem(
        rng,
        tier,
        PROCESSES,
        PROC_INFO,
        [
          (d) => `Name the coastal erosion process. ${d}`,
          (d) => `Which erosion process is described here? ${d}`,
          (d) => `${d} Which of the four erosion processes is this?`,
        ],
        "Ask: is it the water itself, rocks hitting the cliff, rocks hitting each other, or a chemical reaction?",
        () => "The four processes: hydraulic action (water force), abrasion (load hits cliff), attrition (load hits load), solution (dissolving).",
      );
    },
  },
  // ---------------------------------------------------------------- level 2
  {
    id: `${T}.waves-per-minute`,
    topicId: T,
    title: "Wave frequency from a wave count",
    level: 2,
    guideRef: "waves",
    generate(rng, tier) {
      const who = rng.pick(NAMES);
      const place = rng.pick(["East Coast Park", "Changi Beach", "a beach in Dorset", "a beach in Cornwall", "Sentosa's Palawan Beach", "a pebble beach in Norfolk"]);
      const typeOf = (r: number) =>
        r <= 8 ? "about 6–8 a minute or fewer, so these are probably **constructive** waves" : "about 10 or more a minute, so these are probably **destructive** waves";
      if (tier === 3) {
        // Wave period → number of waves in a time window.
        let p = 5, m = 4, perMin = 12, total = 48;
        for (let i = 0; i < 50; i++) {
          p = rng.pick([4, 5, 6, 7.5, 8, 10]);
          m = rng.int(2, 10);
          perMin = clean(60 / p);
          total = clean(perMin * m);
          if (Number.isInteger(total)) break;
        }
        const traps: { spec: { type: "number"; value: number }; feedback: string }[] = [];
        if (clean(p * m) !== total) traps.push({ spec: { type: "number", value: clean(p * m) }, feedback: "You multiplied the period by the minutes. First find waves per minute: 60 ÷ period." });
        return {
          prompt: `At ${place}, ${who} times the waves: one wave breaks every ${num(p)} seconds. How many waves will break in ${m} minutes?`,
          answer: { type: "number", value: total },
          solution: [
            `Waves per minute = 60 ÷ ${num(p)} = ${num(perMin)}.`,
            `In ${m} minutes: ${num(perMin)} × ${m} = ${num(total)} waves.`,
            `${num(perMin)} a minute is ${typeOf(perMin)}.`,
          ],
          hint: "There are 60 seconds in a minute — how many wave periods fit into one minute?",
          traps,
        };
      }
      const r = rng.pick([6, 7, 8, 10, 11, 12, 13, 14]);
      let secs = 60, n = r;
      if (tier === 1) {
        const mins = rng.int(1, 5);
        secs = mins * 60;
        n = r * mins;
      } else {
        for (let i = 0; i < 50; i++) {
          secs = rng.pick([30, 90, 120, 150, 180, 240, 300]);
          if ((r * secs) % 60 === 0) break;
        }
        if ((r * secs) % 60 !== 0) secs = 120;
        n = (r * secs) / 60;
      }
      const timeText = tier === 1 ? `${secs / 60} minute${secs === 60 ? "" : "s"}` : `${secs} seconds`;
      const traps: { spec: { type: "number"; value: number }; feedback: string }[] = [];
      const wrong = clean(n * (tier === 1 ? secs / 60 : secs));
      if (wrong !== r) traps.push({ spec: { type: "number", value: wrong }, feedback: "You multiplied — divide the number of waves by the time instead." });
      return {
        prompt: `${who} counts ${n} waves breaking at ${place} in ${timeText}. What is the wave frequency in waves per minute?`,
        answer: { type: "number", value: r },
        solution: [
          tier === 1 ? `${n} ÷ ${secs / 60} = ${r} waves per minute.` : `${secs} seconds = ${clean(secs / 60)} minutes, so ${n} ÷ ${clean(secs / 60)} = ${r} waves per minute.`,
          `${r} a minute is ${typeOf(r)}.`,
        ],
        hint: tier === 1 ? "Frequency = number of waves ÷ number of minutes." : "Change the seconds into minutes first.",
        traps,
      };
    },
  },
  {
    id: `${T}.weathering-type`,
    topicId: T,
    title: "Mechanical, chemical or biological weathering?",
    level: 2,
    guideRef: "weathering",
    generate(rng, tier) {
      return bankItem(
        rng,
        tier,
        WEATHERING,
        WTYPE_INFO,
        [
          (d) => `Which type of weathering is this — mechanical, chemical or biological? ${d}`,
          (d) => `Name the type of weathering. ${d}`,
          (d) => `${d} Is this mechanical, chemical or biological weathering?`,
        ],
        "Ask: is the rock broken by force, changed by a reaction, or attacked by something alive?",
      );
    },
  },
  {
    id: `${T}.weathering-erosion-mass`,
    topicId: T,
    title: "Weathering, erosion or mass movement?",
    level: 2,
    guideRef: "weathering",
    generate(rng, tier) {
      return bankItem(
        rng,
        tier,
        WEM_BANK,
        WEM_INFO,
        [
          (d) => `Is this weathering, erosion or mass movement? ${d}`,
          (d) => `${d} Weathering, erosion or mass movement?`,
          (d) => `Classify this as weathering, erosion or mass movement: ${d}`,
        ],
        "Does the material stay put (broken in place), get worn away by moving water, or fall/slip downhill under gravity?",
        () => "Weathering = breakdown in place; erosion = wearing away and removal by a moving force; mass movement = downhill movement under gravity.",
      );
    },
  },
  {
    id: `${T}.mass-movement-type`,
    topicId: T,
    title: "Name the type of mass movement",
    level: 2,
    guideRef: "mass-movement",
    generate(rng, tier) {
      return bankItem(
        rng,
        tier,
        MASS,
        MASS_INFO,
        [
          (d) => `Name the type of mass movement. ${d}`,
          (d) => `Which type of mass movement is described? ${d}`,
          (d) => `Rockfall, slumping or sliding? ${d}`,
        ],
        "Look at HOW it moves: free fall from a steep face, rotating on a curved surface, or moving straight along a flat surface?",
      );
    },
  },
  {
    id: `${T}.cliff-retreat-rate`,
    topicId: T,
    title: "Calculate a cliff-retreat rate",
    level: 2,
    guideRef: "erosion-processes",
    generate(rng, tier) {
      const rock = rng.pick(["boulder clay", "soft clay", "sand and clay", "glacial till", "soft mudstone"]);
      if (tier === 1) {
        const r = rng.int(1, 5);
        const y = rng.pick([5, 10, 20, 25, 40, 50]);
        const d = r * y;
        const traps = [];
        if (clean(y / d) !== r) traps.push({ spec: { type: "number" as const, value: clean(y / d) }, feedback: "You divided the years by the distance — the rate is distance ÷ time." });
        return {
          prompt: `A ${rock} cliff has retreated ${d} m in ${y} years. What is the average rate of retreat, in metres per year?`,
          answer: { type: "number", value: r },
          solution: [`Rate = distance ÷ time = ${d} ÷ ${y} = ${r} m per year.`],
          hint: "Rate = distance ÷ time.",
          traps,
        };
      }
      if (tier === 2) {
        let d = 30, y = 16;
        for (let i = 0; i < 50; i++) {
          d = rng.int(8, 90);
          y = rng.int(6, 40);
          if (d % y !== 0 && d / y >= 0.3 && d / y <= 5) break;
        }
        const exact = d / y;
        const ans = roundTo(exact, 1);
        const traps = [];
        const inv = roundTo(y / d, 1);
        if (inv !== ans) traps.push({ spec: { type: "number" as const, value: inv }, feedback: "You divided the years by the distance — the rate is distance ÷ time." });
        return {
          prompt: `Surveys show a ${rock} cliff lost ${d} m of land in ${y} years. Work out the average rate of cliff retreat in metres per year, to 1 decimal place.`,
          answer: { type: "number", value: ans },
          solution: [`Rate = ${d} ÷ ${y} = ${num(roundTo(exact, 4))}…`, `To 1 decimal place: ${num(ans)} m per year.`],
          hint: "Divide the distance lost by the number of years, then round.",
          traps,
        };
      }
      // tier 3: two dated measurements from a fixed point
      const who = rng.pick(NAMES);
      const feature = rng.pick(["a church", "a farmhouse", "a lighthouse", "a caravan park gate", "a road junction"]);
      let y1 = 1970, y2 = 2020, d1 = 140, d2 = 80;
      for (let i = 0; i < 50; i++) {
        y1 = rng.int(1950, 2000);
        y2 = rng.int(2010, 2024);
        const lost = rng.int(15, 140);
        d2 = rng.int(20, 150);
        d1 = d2 + lost;
        if (lost / (y2 - y1) <= 4 && lost / (y2 - y1) >= 0.4) break;
      }
      const yrs = y2 - y1;
      const loss = d1 - d2;
      const ans = roundTo(loss / yrs, 1);
      const traps = [];
      const wrong1 = roundTo(d1 / yrs, 1);
      if (wrong1 !== ans) traps.push({ spec: { type: "number" as const, value: wrong1 }, feedback: `${d1} m is how far the edge WAS from ${feature}, not the land lost. Subtract first: ${d1} − ${d2}.` });
      return {
        prompt: `${who} uses old maps of a ${rock} coast. In ${y1} the cliff edge was ${d1} m from ${feature}; in ${y2} it was ${d2} m away. What was the average rate of retreat, in metres per year, to 1 decimal place?`,
        answer: { type: "number", value: ans },
        solution: [
          `Land lost = ${d1} − ${d2} = ${loss} m.`,
          `Time = ${y2} − ${y1} = ${yrs} years.`,
          `Rate = ${loss} ÷ ${yrs} = ${num(roundTo(loss / yrs, 4))}… ≈ ${num(ans)} m per year.`,
        ],
        hint: "Find the land lost and the number of years first, then divide.",
        traps,
      };
    },
  },
  // ---------------------------------------------------------------- level 3
  {
    id: `${T}.which-cliff-erodes-faster`,
    topicId: T,
    title: "Which cliff erodes faster? (factors affecting erosion)",
    level: 3,
    guideRef: "erosion-processes",
    generate(rng, tier) {
      const h = rng.pick([12, 15, 18, 20, 25, 30, 35, 40, 45, 50, 60]);
      const pool1 = tier === 1 ? FACTORS.filter((f) => f.lvl === 1) : tier === 2 ? FACTORS : FACTORS.filter((f) => f.lvl === 2);
      const northFast = rng.bool();
      const picks = tier === 3 ? rng.shuffle(pool1).slice(0, 2) : [rng.pick(pool1)];
      const fastText = picks.map((f) => f.fast(rng)).join(" and ");
      const slowText = picks.map((f) => f.slow(rng)).join(" and ");
      const nText = northFast ? fastText : slowText;
      const sText = northFast ? slowText : fastText;
      const right = northFast ? "north" : "south";
      const wrong = northFast ? "south" : "north";
      return {
        prompt: `Two cliffs on the same stretch of coast are both ${h} m high. The North cliff ${nText}. The South cliff ${sText}. Which cliff will probably erode faster — North or South?`,
        answer: { type: "text", accept: [right, `${right} cliff`, `${right}ern cliff`] },
        solution: [`The **${right[0].toUpperCase() + right.slice(1)}** cliff.`, ...picks.map((f) => f.why)],
        hint: "Think about wave energy reaching the cliff and how resistant the rock is.",
        traps: [{ spec: { type: "text", accept: [wrong] }, feedback: `Look again: which cliff has weaker rock, more wave energy or less protection? That is the one that erodes faster.` }],
      };
    },
  },
  {
    id: `${T}.years-until-lost`,
    topicId: T,
    title: "Cliff collapse countdown: when is the house lost?",
    level: 3,
    guideRef: "mass-movement",
    generate(rng, tier) {
      const who = rng.pick(NAMES);
      const rock = rng.pick(["boulder clay", "soft clay", "sand and clay"]);
      if (tier === 1) {
        const r = rng.pick([1, 2, 3, 4, 5]);
        const k = rng.int(4, 40);
        const d = r * k;
        const traps = [];
        if (d * r !== k) traps.push({ spec: { type: "number" as const, value: d * r }, feedback: "You multiplied. Years = distance ÷ rate." });
        return {
          prompt: `A house stands ${d} m from the edge of a ${rock} cliff that retreats about ${r} m per year. If the rate stays the same, how many years until the cliff edge reaches the house?`,
          answer: { type: "number", value: k },
          solution: [`Years = distance ÷ rate = ${d} ÷ ${r} = ${k} years.`, "In reality a single storm or slump can remove many metres at once, so it could happen sooner."],
          hint: "How many lots of the yearly loss fit into the distance?",
          traps,
        };
      }
      if (tier === 2) {
        const r = rng.pick([0.5, 1, 1.5, 2, 2.5, 3]);
        const k = rng.int(4, 60);
        const d = clean(r * k);
        const now = rng.int(2020, 2026);
        const traps = [];
        if (k !== now + k) traps.push({ spec: { type: "number" as const, value: k }, feedback: `${k} is the number of YEARS — add it to ${now} to get the year.` });
        return {
          prompt: `In ${now}, ${who}'s grandparents' bungalow is ${num(d)} m from the edge of a ${rock} cliff. The cliff retreats about ${num(r)} m per year. In which year will the edge reach the bungalow if this rate continues?`,
          answer: { type: "number", value: now + k },
          solution: [`Years = ${num(d)} ÷ ${num(r)} = ${k} years.`, `${now} + ${k} = ${now + k}.`],
          hint: "Work out how many years first, then add on to the starting year.",
          traps,
        };
      }
      // tier 3: rate from past data, with a safety buffer
      const r = rng.pick([1, 1.5, 2, 2.5, 3, 4]);
      let n = 20;
      for (let i = 0; i < 20; i++) {
        n = rng.pick([10, 12, 16, 20, 24, 30, 40]);
        if (Number.isInteger(r * n)) break;
      }
      const lost = clean(r * n);
      const y2 = rng.int(2018, 2025);
      const y1 = y2 - n;
      const buffer = rng.pick([5, 10, 15, 20]);
      const k = rng.int(5, 40);
      const d = clean(buffer + r * k);
      const traps = [];
      const ignoreBuffer = y2 + clean(d / r);
      if (Number.isInteger(ignoreBuffer) && ignoreBuffer !== y2 + k) traps.push({ spec: { type: "number" as const, value: ignoreBuffer }, feedback: `That is when the edge reaches the house itself. The council acts when the edge is ${buffer} m away — use ${num(d)} − ${buffer}.` });
      return {
        prompt: `Between ${y1} and ${y2} a ${rock} cliff retreated ${num(lost)} m. In ${y2} a house is ${num(d)} m from the edge. The council will demolish the house when the edge is ${buffer} m away. Assuming the same average rate, in which year will that happen?`,
        answer: { type: "number", value: y2 + k },
        solution: [
          `Rate = ${num(lost)} ÷ ${n} = ${num(r)} m per year.`,
          `Distance before demolition = ${num(d)} − ${buffer} = ${num(clean(d - buffer))} m.`,
          `Years = ${num(clean(d - buffer))} ÷ ${num(r)} = ${k}, so ${y2} + ${k} = ${y2 + k}.`,
        ],
        hint: "Three steps: find the rate, find the distance that can be lost before the deadline, then the years.",
        traps,
      };
    },
  },
];
