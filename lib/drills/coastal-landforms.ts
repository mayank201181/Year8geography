import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { num, big, roundTo, clean } from "./helpers.ts";

// ---------------------------------------------------------------------------
// Fact-bank machinery: each entry has accepted answers, 1–3 clue phrasings,
// a tier (1 = core, 2 = typical, 3 = stretch), a reason and optional traps.
// ---------------------------------------------------------------------------
interface Entry {
  a: string[];
  clues: string[];
  t: 1 | 2 | 3;
  why: string;
  hint?: string;
  traps?: { a: string[]; fb: string }[];
}

function fromBank(bank: Entry[], rng: Rng, tier: 1 | 2 | 3, stems: string[], hint: string): DrillItem {
  const pool = bank.filter((e) => (tier === 1 ? e.t === 1 : tier === 2 ? e.t <= 2 : e.t >= 2));
  const e = rng.pick(pool);
  const clue = rng.pick(e.clues);
  const stem = rng.pick(stems);
  const traps: Trap[] = (e.traps ?? []).map((tr) => ({ spec: { type: "text", accept: tr.a }, feedback: tr.fb }));
  return {
    prompt: stem ? `${stem} ${clue}` : clue,
    answer: { type: "text", accept: e.a },
    solution: [`**${e.a[0]}** — ${e.why}`],
    hint: e.hint ?? hint,
    traps: traps.length ? traps : undefined,
  };
}

const STEMS = ["", "Key term check:", "Knowledge Organiser recall:"];

// ---------------------------------------------------------------------------
// Banks
// ---------------------------------------------------------------------------
const HEADLAND_BANK: Entry[] = [
  {
    a: ["headland", "promontory"],
    t: 1,
    clues: [
      "Name the area of resistant rock that juts out into the sea, with water on three sides.",
      "On a discordant coast, what landform is left sticking out to sea where the hard rock is?",
    ],
    why: "hard rock erodes slowly, so it is left standing out as a headland while soft rock either side is cut back.",
    traps: [{ a: ["bay"], fb: "A bay is the inlet cut into SOFT rock. The part sticking out is made of hard rock." }],
  },
  {
    a: ["bay"],
    t: 1,
    clues: [
      "Name the curved inlet of sea between two headlands, where softer rock has been eroded back.",
      "On a discordant coast, what landform forms where a band of soft clay meets the sea?",
    ],
    why: "soft rock such as clay or sand erodes quickly, so the coast is cut back into a curved bay.",
    traps: [{ a: ["headland"], fb: "A headland sticks OUT and is made of hard rock — soft rock is worn back into a bay." }],
  },
  {
    a: ["discordant", "discordant coast", "discordant coastline"],
    t: 1,
    clues: [
      "What type of coastline has bands of hard and soft rock running at right angles to the sea?",
      "Name the type of coast where rock bands meet the sea end-on, producing alternating headlands and bays.",
    ],
    why: "the rock bands are perpendicular to the coast, so the sea meets hard and soft rock in turn.",
    traps: [{ a: ["concordant", "concordant coast"], fb: "Concordant means the bands run PARALLEL to the coast. Right angles = discordant." }],
  },
  {
    a: ["concordant", "concordant coast", "concordant coastline"],
    t: 1,
    clues: [
      "What type of coastline has bands of rock running parallel to the sea?",
      "Lulworth Cove sits on a coast where the hard limestone band runs alongside the shore. Name this type of coast.",
    ],
    why: "the rock bands run parallel to the shoreline, so the sea meets one rock type along the whole coast.",
    traps: [{ a: ["discordant", "discordant coast"], fb: "Discordant means the bands meet the coast at right angles. Parallel = concordant." }],
  },
  {
    a: ["differential erosion"],
    t: 1,
    clues: [
      "Name the idea that soft rock is worn away faster than neighbouring hard rock.",
      "Give the two-word term for different rocks eroding at different rates, which creates headlands and bays.",
    ],
    why: "differential erosion means rocks of different resistance erode at different speeds.",
  },
  {
    a: ["cliff"],
    t: 1,
    clues: [
      "Name the steep rock face where the land meets the sea, cut back by wave erosion.",
      "Old Harry Rocks and Durdle Door both stand in front of steep chalk or limestone faces. What is the general name for these steep coastal faces?",
    ],
    why: "waves erode the base of the land, which collapses and leaves a steep face — a cliff.",
  },
  {
    a: ["beach"],
    t: 2,
    clues: [
      "Bays are sheltered, so waves there lose energy and drop sand. Name the landform that builds up in the bay.",
      "What depositional landform is usually found in a bay, made of sand or shingle between low tide and the highest storm waves?",
    ],
    why: "in sheltered bays waves have less energy, so they deposit sand and shingle as a beach.",
  },
  {
    a: ["swanage bay", "swanage"],
    t: 2,
    clues: [
      "In Dorset, name the bay cut into soft clays and sands between the chalk of Ballard Point and the limestone of Peveril Point.",
      "Name the Dorset bay, with a seaside town of the same name, that lies just south of Studland Bay and is backed by soft Wealden clays.",
    ],
    why: "Swanage Bay is eroded into soft Wealden clays and sands between harder chalk to the north and limestone to the south.",
    traps: [{ a: ["studland bay", "studland"], fb: "Studland Bay is the one NORTH of Old Harry Rocks. The bay between Ballard Point and Peveril Point is Swanage Bay." }],
  },
  {
    a: ["studland bay", "studland"],
    t: 2,
    clues: [
      "Name the sandy Dorset bay just north of Old Harry Rocks, eroded into soft sands and clays.",
      "In the Isle of Purbeck example, which bay lies NORTH of the chalk headland with Old Harry Rocks?",
    ],
    why: "Studland Bay is cut into soft sands and clays north of the chalk headland at Handfast Point.",
    traps: [{ a: ["swanage bay", "swanage"], fb: "Swanage Bay is SOUTH of the chalk headland. North of Old Harry is Studland Bay." }],
  },
  {
    a: ["chalk"],
    t: 2,
    clues: [
      "Name the white, fairly resistant sedimentary rock that forms the headland at Old Harry Rocks.",
      "Ballard Down and Old Harry Rocks in Dorset are made of which white rock?",
    ],
    why: "the Purbeck headland at Old Harry Rocks is made of chalk, which resists erosion better than the clays and sands either side.",
  },
  {
    a: ["the foreland", "foreland", "handfast point"],
    t: 3,
    clues: [
      "Name the chalk headland, between Studland Bay and Swanage Bay, where Old Harry Rocks stand (two names are used).",
    ],
    why: "Old Harry Rocks stand off The Foreland, also called Handfast Point.",
  },
  {
    a: ["lulworth cove", "lulworth"],
    t: 3,
    clues: [
      "Name the almost circular Dorset cove where the sea broke through a narrow band of hard limestone and then scooped out the softer clays behind.",
      "Which famous Dorset cove, near Durdle Door, shows a gap in hard limestone with a round bay eroded in soft rock behind it?",
    ],
    why: "at Lulworth Cove the sea breached the limestone, then quickly eroded the soft clays behind into a round cove.",
  },
  {
    a: ["wave refraction", "refraction"],
    t: 3,
    clues: [
      "Name the process where waves bend as they approach an uneven coast, concentrating energy on headlands and spreading it out in bays.",
      "Why do headlands get the biggest waves while bays stay calmer? Name the process where wave fronts bend around the coast.",
    ],
    why: "wave refraction bends waves so their energy focuses on headlands and spreads out in bays.",
  },
  {
    a: ["resistant"],
    t: 3,
    clues: [
      "Give the single adjective geographers use for rock that is hard to erode, such as chalk or limestone compared with clay.",
    ],
    why: "resistant rocks (e.g. chalk, limestone, granite) wear away slowly; less resistant ones (clay, sand) wear away fast.",
  },
];

const EROSION_BANK: Entry[] = [
  {
    a: ["wave-cut notch", "wave cut notch", "notch"],
    t: 1,
    clues: [
      "Waves undercut the base of a cliff between high and low tide, carving a curved hollow. Name this feature.",
      "What is the hollow eroded into the foot of a cliff by hydraulic action and abrasion called?",
    ],
    why: "waves attack the cliff foot most, cutting a notch that leaves the rock above overhanging.",
    traps: [{ a: ["cave"], fb: "A cave forms from a crack in a headland. The long hollow along the base of a cliff is a wave-cut notch." }],
  },
  {
    a: ["wave-cut platform", "wave cut platform", "shore platform"],
    t: 1,
    clues: [
      "Name the gently sloping rocky surface left at the foot of a retreating cliff, exposed at low tide.",
      "After a cliff is undercut and collapses again and again, what flat rocky area is left between the high and low tide marks?",
    ],
    why: "as the notch-and-collapse cycle repeats, the cliff retreats and leaves a flat wave-cut platform behind.",
  },
  {
    a: ["cave", "sea cave"],
    t: 1,
    clues: [
      "A crack in a headland is widened by hydraulic action and abrasion into a hollow. Name the feature.",
      "In the erosion sequence of a headland, which landform comes straight after a crack is enlarged?",
    ],
    why: "waves widen the crack into a cave — the first landform in the crack → cave → arch → stack → stump sequence.",
    traps: [{ a: ["arch"], fb: "An arch needs the sea to cut right THROUGH the headland. A widened crack is first a cave." }],
  },
  {
    a: ["arch", "natural arch", "sea arch"],
    t: 1,
    clues: [
      "A cave is eroded right through a headland so the sea passes beneath a rock bridge. Name the landform.",
      "What landform is Durdle Door in Dorset?",
    ],
    why: "when a cave (or two back-to-back caves) breaks through the headland, an arch is formed.",
    traps: [{ a: ["stack"], fb: "A stack is a pillar left AFTER the arch roof collapses. Durdle Door still has its roof, so it is an arch." }],
  },
  {
    a: ["stack", "sea stack"],
    t: 1,
    clues: [
      "The roof of an arch collapses, leaving a tall pillar of rock cut off from the headland. Name this landform.",
      "Old Harry in Dorset is a tall column of chalk standing alone in the sea. What landform is it?",
    ],
    why: "the arch roof is weakened by erosion and weathering until it falls, leaving an isolated stack.",
    traps: [
      { a: ["stump"], fb: "A stump is low and covered at high tide. A tall pillar is a stack." },
      { a: ["arch"], fb: "An arch still has its roof. Once the roof falls the pillar is a stack." },
    ],
  },
  {
    a: ["stump", "sea stump"],
    t: 1,
    clues: [
      "A stack is undercut at its base until it collapses, leaving a low rock covered at high tide. Name it.",
      "Old Harry's Wife, next to Old Harry, collapsed in 1896 and is now a low remnant. What landform is it?",
    ],
    why: "the stack is notched at its base and collapses, leaving a stump — the last stage of the sequence.",
    traps: [{ a: ["stack"], fb: "A stack is still tall. Once it collapses to a low rock covered at high tide, it is a stump." }],
  },
  {
    a: ["hydraulic action", "hydraulic power", "hydraulic"],
    t: 2,
    clues: [
      "Name the erosion process where waves force air and water into cracks, compressing them and weakening the rock.",
      "Which erosion process uses the sheer force of the water and trapped air in cracks to prise rock apart?",
    ],
    why: "hydraulic action is the force of water and compressed air widening cracks.",
    traps: [{ a: ["abrasion"], fb: "Abrasion needs sand and pebbles as tools. Air squeezed into cracks is hydraulic action." }],
  },
  {
    a: ["abrasion", "corrasion"],
    t: 2,
    clues: [
      "Name the erosion process where waves hurl sand and pebbles at the cliff, wearing it away like sandpaper.",
      "Which erosion process uses the load carried by waves as tools to scrape and chip the cliff face?",
    ],
    why: "abrasion is the sea's load being thrown against the cliff, scraping it away.",
    traps: [{ a: ["attrition"], fb: "Attrition is rocks hitting EACH OTHER. Rocks hitting the cliff is abrasion." }],
  },
  {
    a: ["attrition"],
    t: 2,
    clues: [
      "Name the process where rocks carried by the waves knock into each other, becoming smaller and rounder.",
      "Why are beach pebbles smooth and rounded? Name the process where they collide and chip each other.",
    ],
    why: "attrition is the load colliding with itself, so pebbles get smaller and rounder.",
    traps: [{ a: ["abrasion"], fb: "Abrasion is rocks scraping the CLIFF. Rocks bumping into each other is attrition." }],
  },
  {
    a: ["solution", "corrosion"],
    t: 2,
    clues: [
      "Name the erosion process where seawater slowly dissolves rocks such as chalk and limestone.",
      "Which erosion process is chemical rather than physical, slowly dissolving calcium carbonate in the cliff?",
    ],
    why: "solution (corrosion) is the chemical dissolving of rock by seawater.",
  },
  {
    a: ["weathering"],
    t: 3,
    clues: [
      "Name the general term for rock breaking down in place, without being moved, such as the roof of an arch being weakened by rain and frost.",
    ],
    why: "weathering breaks rock down where it is; erosion wears it away and moves it.",
    traps: [{ a: ["erosion"], fb: "Erosion involves the rock being worn away AND moved. Breaking down in place is weathering." }],
  },
  {
    a: ["freeze-thaw", "freeze thaw", "freeze-thaw weathering", "frost shattering", "frost weathering", "ice wedging"],
    t: 3,
    clues: [
      "Water in a crack in an arch roof freezes, expands by about 9% and widens the crack. Name this type of weathering.",
      "Name the weathering process that repeatedly widens cracks as water turns to ice and back again.",
    ],
    why: "water expands by about 9% when it freezes, so repeated freezing and thawing prises cracks apart.",
  },
  {
    a: ["limestone", "portland limestone"],
    t: 3,
    clues: [
      "Durdle Door is carved from which hard rock?",
      "The narrow band of hard rock that the sea breached at Lulworth Cove and Durdle Door is made of which rock?",
    ],
    why: "Durdle Door and the entrance to Lulworth Cove are made of hard Portland limestone.",
    traps: [{ a: ["chalk"], fb: "Old Harry is chalk, but Durdle Door is carved from Portland limestone." }],
  },
  {
    a: ["rockfall", "rock fall", "rock-fall", "cliff fall", "cliff collapse"],
    t: 3,
    clues: [
      "Name the type of mass movement when the overhang above a wave-cut notch suddenly breaks off and drops.",
    ],
    why: "the unsupported overhang above the notch collapses under gravity — a rockfall.",
  },
  {
    a: ["joint", "joints", "crack", "fault"],
    t: 3,
    clues: [
      "Name the line of weakness in a headland that waves exploit first, starting the cave → arch → stack sequence.",
    ],
    why: "erosion starts where the rock is weakest — a joint, crack or fault in the headland.",
  },
];

const TRANSPORT_BANK: Entry[] = [
  {
    a: ["traction"],
    t: 1,
    clues: [
      "Large boulders are rolled along the sea bed by the waves. Name this transport process.",
      "Name the transport process for the heaviest load, which is pushed or rolled along the sea floor.",
    ],
    why: "traction moves the largest material by rolling it along the bed.",
    traps: [{ a: ["saltation"], fb: "Saltation is a hopping or bouncing motion. Rolling along the bed is traction." }],
  },
  {
    a: ["saltation"],
    t: 1,
    clues: [
      "Pebbles and coarse sand bounce along the sea bed in a series of hops. Name this transport process.",
      "Name the transport process where material is lifted briefly and dropped again, moving in a hopping motion.",
    ],
    why: "saltation is a hopping, bouncing movement of medium-sized material.",
    traps: [{ a: ["traction"], fb: "Traction is rolling. Bouncing or hopping is saltation." }],
  },
  {
    a: ["suspension"],
    t: 1,
    clues: [
      "Fine silt and clay are carried along within the water, making the sea look cloudy brown. Name this transport process.",
      "Name the transport process for the smallest grains, which are held up in the water and carried along.",
    ],
    why: "suspension carries fine particles within the water itself.",
    traps: [{ a: ["solution"], fb: "Solution is DISSOLVED material you can't see. Cloudy, muddy water shows suspension." }],
  },
  {
    a: ["solution"],
    t: 1,
    clues: [
      "Minerals are dissolved in seawater and carried along invisibly. Name this transport process.",
      "Name the transport process for chemicals such as calcium carbonate that have dissolved in the water.",
    ],
    why: "material carried in solution is dissolved, so you can't see it.",
    traps: [{ a: ["suspension"], fb: "Suspension is solid particles you CAN see. Dissolved material is carried in solution." }],
  },
  {
    a: ["swash"],
    t: 1,
    clues: [
      "Name the movement of water up the beach after a wave breaks.",
      "Which part of a breaking wave carries sediment up the beach at the angle of the prevailing wind?",
    ],
    why: "swash is the rush of water UP the beach, at the angle the waves arrive.",
    traps: [{ a: ["backwash"], fb: "Backwash flows back DOWN the beach. Up the beach is swash." }],
  },
  {
    a: ["backwash"],
    t: 1,
    clues: [
      "Name the movement of water back down the beach towards the sea.",
      "Which part of a wave drags sediment straight back down the beach, at right angles to the coast, because of gravity?",
    ],
    why: "backwash is the water draining back down the beach under gravity.",
    traps: [{ a: ["swash"], fb: "Swash goes UP the beach. Water returning down the beach is backwash." }],
  },
  {
    a: ["longshore drift", "long shore drift", "longshore-drift", "littoral drift"],
    t: 1,
    clues: [
      "Name the zig-zag movement of sediment along a coastline, caused by angled swash and straight backwash.",
      "Which process carries sand from the eroding Holderness cliffs south to build Spurn Head?",
    ],
    why: "longshore drift moves sediment along the coast in a zig-zag: angled swash up, straight backwash down.",
  },
  {
    a: ["prevailing wind", "the prevailing wind"],
    t: 2,
    clues: [
      "Name the most common wind direction at a place, which sets the angle at which waves approach the beach.",
      "Longshore drift usually moves sediment in the direction set by which wind?",
    ],
    why: "the prevailing wind is the dominant wind; it drives waves in at an angle and so sets the drift direction.",
  },
  {
    a: ["fetch"],
    t: 2,
    clues: [
      "Name the distance of open water over which the wind blows to build up waves.",
      "Waves reaching Cornwall from the Atlantic are big partly because of a very long ___. Fill the gap with one word.",
    ],
    why: "the longer the fetch, the more energy the wind can transfer, so the bigger the waves.",
  },
  {
    a: ["gravity"],
    t: 2,
    clues: [
      "What force pulls the backwash straight down the beach, at right angles to the coast?",
    ],
    why: "gravity pulls water down the steepest slope — straight down the beach.",
  },
  {
    a: ["groyne", "groynes", "groin"],
    t: 2,
    clues: [
      "Sand piles up on one side of a fence-like structure built across a beach, showing the direction of longshore drift. Name the structure.",
    ],
    why: "groynes trap sediment on their up-drift side, so the sand builds up on the side the drift comes from.",
  },
  {
    a: ["constructive", "constructive wave", "constructive waves"],
    t: 3,
    clues: [
      "Name the type of wave with a strong swash and weak backwash that builds beaches up.",
      "Low, gentle waves arriving about 6–8 times a minute deposit more than they remove. What type of wave are they?",
    ],
    why: "constructive waves have a stronger swash than backwash, so they add material to the beach.",
    traps: [{ a: ["destructive", "destructive wave"], fb: "Destructive waves have a strong BACKWASH that removes sand. Strong swash = constructive." }],
  },
  {
    a: ["destructive", "destructive wave", "destructive waves"],
    t: 3,
    clues: [
      "Name the type of wave with a strong backwash and weak swash that drags sand off the beach.",
      "Tall, steep storm waves arriving about 10–14 times a minute remove more than they add. What type of wave are they?",
    ],
    why: "destructive waves have a stronger backwash than swash, so they erode the beach.",
    traps: [{ a: ["constructive", "constructive wave"], fb: "Constructive waves have a strong SWASH that builds the beach. Strong backwash = destructive." }],
  },
  {
    a: ["saltation"],
    t: 3,
    clues: [
      "Dry sand grains are blown off the back of a beach in short hops to build dunes. Name this transport process (it has the same name as in water).",
    ],
    why: "wind moves sand grains by saltation — short hops along the surface.",
  },
];

const DEPOSITION_BANK: Entry[] = [
  {
    a: ["spit", "sand spit", "shingle spit"],
    t: 1,
    clues: [
      "Name the long, narrow ridge of sand or shingle joined to the land at one end, stretching out into the sea where the coast changes direction.",
      "Spurn Head, at the mouth of the Humber, is an example of which landform?",
    ],
    why: "longshore drift carries sediment past a bend in the coast and deposits it in a ridge that grows out to sea — a spit.",
    traps: [{ a: ["tombolo"], fb: "A tombolo joins the land to an ISLAND. A spit is attached at one end only." }],
  },
  {
    a: ["bar", "sand bar", "sandbar", "shingle bar", "baymouth bar", "barrier beach"],
    t: 1,
    clues: [
      "A spit grows right across a bay, joining two headlands and trapping a lagoon behind it. Name the landform.",
      "Slapton Sands in Devon, with the freshwater lake Slapton Ley behind it, is an example of which landform?",
    ],
    why: "when a spit grows all the way across a bay it becomes a bar, cutting off a lagoon.",
    traps: [{ a: ["spit"], fb: "A spit is open at one end. When it joins up across the whole bay it becomes a bar." }],
  },
  {
    a: ["tombolo"],
    t: 1,
    clues: [
      "Name the ridge of sand or shingle that connects the mainland to an island.",
      "Chesil Beach, linking the Isle of Portland to the Dorset mainland, is a famous example of which landform?",
    ],
    why: "a tombolo is a beach ridge that joins an island to the mainland.",
    traps: [{ a: ["spit"], fb: "A spit has one free end in the sea. When the ridge reaches an island it is a tombolo." }],
  },
  {
    a: ["lagoon"],
    t: 1,
    clues: [
      "Name the body of shallow, calm water trapped behind a bar.",
      "Slapton Ley in Devon is cut off from the sea by a shingle bar. What is this kind of water body called?",
    ],
    why: "a bar seals off the bay, leaving a lagoon of trapped water behind it.",
  },
  {
    a: ["beach"],
    t: 1,
    clues: [
      "Name the zone of sand and shingle deposited between the low tide mark and the reach of the highest storm waves.",
    ],
    why: "a beach is the store of deposited sand and shingle along the shore.",
  },
  {
    a: ["deposition"],
    t: 1,
    clues: [
      "Name the process where the sea drops the material it is carrying because it has lost energy.",
      "When waves slow down in a sheltered bay and drop sand, which coastal process is happening?",
    ],
    why: "deposition happens when waves or currents lose energy and can no longer carry their load.",
  },
  {
    a: ["salt marsh", "saltmarsh", "salt-marsh", "salt marshes"],
    t: 2,
    clues: [
      "Name the area of mud and salt-tolerant plants that forms in the sheltered water behind a spit.",
      "Behind Spurn Head, fine silt settles in calm water and plants colonise it. Name this wetland.",
    ],
    why: "the spit shelters the water behind it, so fine silt settles and plants colonise it, forming salt marsh.",
  },
  {
    a: ["recurved end", "hooked end", "hook", "recurved tip", "recurve", "curved end", "hooked tip"],
    t: 2,
    clues: [
      "The end of a spit curls round towards the land because the wind changes direction and waves refract. What is this curled tip called?",
    ],
    why: "a change in wind and wave direction, plus refraction, curls the end of the spit into a hook (recurved end).",
  },
  {
    a: ["sand dunes", "dunes", "sand dune", "dune"],
    t: 2,
    clues: [
      "Name the hills of sand blown inland from the back of a beach and trapped by plants such as marram grass.",
    ],
    why: "onshore winds blow dry sand inland, where vegetation traps it and it builds into dunes.",
  },
  {
    a: ["spurn head", "spurn", "spurn point"],
    t: 2,
    clues: [
      "Name the spit at the mouth of the Humber Estuary, at the southern end of the Holderness coast.",
    ],
    why: "Spurn Head is built from sediment carried south by longshore drift along the Holderness coast.",
  },
  {
    a: ["chesil beach", "chesil", "chesil bank"],
    t: 2,
    clues: [
      "Name the shingle tombolo that joins the Isle of Portland to the Dorset mainland.",
    ],
    why: "Chesil Beach is the long shingle ridge linking Portland to the mainland.",
  },
  {
    a: ["marram grass", "marram"],
    t: 3,
    clues: [
      "Name the tough grass whose long roots trap sand and help sand dunes grow and stabilise.",
    ],
    why: "marram grass has deep, spreading roots and grows up through fresh sand, binding dunes together.",
  },
  {
    a: ["holderness", "holderness coast"],
    t: 3,
    clues: [
      "Spurn Head is built from sediment eroded from the soft boulder-clay cliffs of which fast-eroding East Yorkshire coastline?",
    ],
    why: "the Holderness cliffs are soft boulder clay; eroded material drifts south to feed Spurn Head.",
  },
  {
    a: ["humber", "humber estuary", "river humber"],
    t: 3,
    clues: [
      "Spurn Head curves across the mouth of which estuary?",
    ],
    why: "Spurn Head grows across the mouth of the Humber Estuary.",
  },
  {
    a: ["isle of portland", "portland"],
    t: 3,
    clues: [
      "Chesil Beach is a tombolo linking the Dorset mainland to which 'island'?",
    ],
    why: "Chesil Beach connects the Isle of Portland to the mainland.",
  },
  {
    a: ["estuary"],
    t: 3,
    clues: [
      "Name the wide, tidal mouth of a river, where spits often grow across the gap (e.g. the Humber).",
    ],
    why: "spits often form at estuaries because the coast changes direction there and calm water allows deposition.",
  },
];

const MANAGEMENT_BANK: Entry[] = [
  {
    a: ["sea wall", "seawall", "recurved sea wall", "sea walls"],
    t: 1,
    clues: [
      "Name the concrete wall built along the coast to reflect wave energy back out to sea, often with a curved face.",
      "Which defence, often built along seaside promenades, is expensive (several thousand pounds per metre) and can make the beach in front of it lower over time because waves reflect off it?",
    ],
    why: "a sea wall reflects wave energy; it is effective but expensive, and reflected waves can scour the beach.",
  },
  {
    a: ["groyne", "groynes", "groin"],
    t: 1,
    clues: [
      "Name the wooden or rock barriers built at right angles to the beach to trap sediment moving by longshore drift.",
      "Which defence makes a wider beach on one side but can starve beaches further down the coast of sand?",
    ],
    why: "groynes trap longshore drift, building a wider beach — but they starve beaches down-drift.",
  },
  {
    a: ["rock armour", "rock armor", "rip rap", "riprap", "rip-rap"],
    t: 1,
    clues: [
      "Name the defence of large boulders piled at the foot of a cliff or in front of a sea wall to absorb wave energy.",
      "Which defence uses huge granite or limestone blocks, often brought in from other places, piled along the shore?",
    ],
    why: "rock armour (rip rap) is large boulders that break up waves and absorb their energy.",
    traps: [{ a: ["gabions", "gabion"], fb: "Gabions are small rocks in WIRE CAGES. Loose giant boulders are rock armour." }],
  },
  {
    a: ["gabions", "gabion"],
    t: 1,
    clues: [
      "Name the defence of wire cages filled with rocks, stacked at the base of a cliff.",
    ],
    why: "gabions are rock-filled wire cages that absorb wave energy cheaply but rust and break over time.",
    traps: [{ a: ["rock armour", "rip rap"], fb: "Rock armour is loose giant boulders. Rocks in wire cages are gabions." }],
  },
  {
    a: ["beach nourishment", "beach replenishment", "beach recharge"],
    t: 1,
    clues: [
      "Name the strategy where sand or shingle is pumped or dumped onto a beach to make it wider and higher.",
      "Which soft-engineering strategy keeps a beach looking natural but has to be repeated every few years?",
    ],
    why: "beach nourishment adds sediment so the wider beach absorbs wave energy — but the sea keeps removing it.",
  },
  {
    a: ["dune regeneration", "dune stabilisation", "dune stabilization", "dune management", "dune restoration"],
    t: 2,
    clues: [
      "Name the strategy where marram grass is planted, fences are put up and paths are made so sand dunes can build up.",
    ],
    why: "dune regeneration builds and protects dunes, which act as a natural buffer against the sea.",
  },
  {
    a: ["managed retreat", "managed realignment", "strategic realignment"],
    t: 2,
    clues: [
      "Name the strategy where low-value land is deliberately allowed to flood, so it becomes salt marsh that absorbs wave energy.",
      "Which strategy means removing or breaching old defences and letting the coastline move inland in a controlled way?",
    ],
    why: "managed retreat lets the sea in on purpose; the new salt marsh is a natural defence and habitat.",
  },
  {
    a: ["revetment", "revetments"],
    t: 3,
    clues: [
      "Name the sloping wooden or concrete slatted structures built across the top of a beach; waves break on them and lose energy, while sand can pass through the gaps.",
    ],
    why: "revetments are slatted, sloping barriers that break up waves and trap sand behind them.",
  },
  {
    a: ["offshore reef", "artificial reef", "offshore breakwater", "breakwater", "detached breakwater", "offshore breakwaters", "breakwaters"],
    t: 3,
    clues: [
      "Name the defence of large rocks or concrete blocks placed out at sea, parallel to the coast, so waves break before they reach the shore.",
    ],
    why: "an offshore breakwater (reef) makes waves break early, so less energy reaches the beach — East Coast Park has a line of them.",
  },
  {
    a: ["hold the line"],
    t: 3,
    clues: [
      "In UK Shoreline Management Plans, which policy means keeping the coastline where it is now by maintaining defences?",
    ],
    why: "Hold the line means defending the current coastline position.",
  },
  {
    a: ["no active intervention", "do nothing"],
    t: 3,
    clues: [
      "In UK Shoreline Management Plans, which policy means spending no money on defences and letting natural processes continue?",
    ],
    why: "No active intervention means no new defences are built or maintained.",
  },
  {
    a: ["advance the line"],
    t: 3,
    clues: [
      "In UK Shoreline Management Plans, which policy means building new defences seaward of today's coastline?",
    ],
    why: "Advance the line moves the coast out to sea with new defences or reclamation.",
  },
  {
    a: ["pub", "public utilities board", "pub singapore", "the national water agency"],
    t: 3,
    clues: [
      "Name the Singapore agency, already in charge of water, that became the national coastal protection agency in 2020.",
    ],
    why: "PUB, Singapore's national water agency, took on coastal protection in 2020 so flooding from rain and sea is managed together.",
  },
  {
    a: ["mangroves", "mangrove", "mangrove forest", "mangrove forests"],
    t: 3,
    clues: [
      "Name the salt-tolerant coastal trees, found at places like Sungei Buloh and Pulau Ubin, whose tangled roots trap mud and absorb wave energy.",
    ],
    why: "mangroves are a natural (soft) defence: their roots trap sediment and slow waves.",
  },
];

const HARD_SOFT: { name: string; desc: string; hard: boolean }[] = [
  { name: "a sea wall", desc: "a curved concrete wall along the promenade that reflects waves", hard: true },
  { name: "groynes", desc: "wooden barriers built across the beach at right angles to the sea", hard: true },
  { name: "rock armour", desc: "huge boulders piled at the foot of a cliff", hard: true },
  { name: "gabions", desc: "wire cages packed with rocks at the base of a cliff", hard: true },
  { name: "revetments", desc: "sloping slatted wooden barriers at the top of a beach", hard: true },
  { name: "an offshore breakwater", desc: "a line of concrete blocks placed out at sea to make waves break early", hard: true },
  { name: "a tidal barrier", desc: "huge movable gates across an estuary that close during storm surges", hard: true },
  { name: "a concrete seawall with a raised crest", desc: "making an existing concrete wall taller to cope with sea-level rise", hard: true },
  { name: "beach nourishment", desc: "pumping sand from the seabed onto a beach to widen it", hard: false },
  { name: "dune regeneration", desc: "planting marram grass and fencing off dunes so they can grow", hard: false },
  { name: "managed retreat", desc: "breaching an old embankment so farmland floods and turns into salt marsh", hard: false },
  { name: "mangrove planting", desc: "planting mangrove saplings along a muddy shore so their roots trap sediment", hard: false },
  { name: "beach reprofiling", desc: "using diggers to move sand from the lower beach back up to the top after a storm", hard: false },
  { name: "salt marsh creation", desc: "letting the tide spread mud and plants over low-lying land to absorb wave energy", hard: false },
];

// ---------------------------------------------------------------------------
// Longshore drift direction: coast faces a direction, wind blows onshore at an angle.
// ---------------------------------------------------------------------------
const COASTS: { faces: string; winds: { from: string; drift: string }[] }[] = [
  { faces: "south", winds: [{ from: "south-west", drift: "east" }, { from: "south-east", drift: "west" }] },
  { faces: "north", winds: [{ from: "north-west", drift: "east" }, { from: "north-east", drift: "west" }] },
  { faces: "east", winds: [{ from: "north-east", drift: "south" }, { from: "south-east", drift: "north" }] },
  { faces: "west", winds: [{ from: "north-west", drift: "south" }, { from: "south-west", drift: "north" }] },
];
const OPP: Record<string, string> = { east: "west", west: "east", north: "south", south: "north" };
const PEOPLE = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara"];

function dirAccept(d: string): string[] {
  return [d, `${d}ward`, `${d}wards`, `to the ${d}`, `towards the ${d}`, `${d} along the beach`];
}

export const drills: Drill[] = [
  {
    id: "coastal-landforms.headlands-bays-terms",
    topicId: "coastal-landforms",
    title: "Headlands, bays and rock types",
    level: 1,
    guideRef: "headlands-bays",
    generate(rng, tier) {
      return fromBank(HEADLAND_BANK, rng, tier, STEMS, "Think hard rock vs soft rock — which sticks out and which gets cut back?");
    },
  },
  {
    id: "coastal-landforms.erosion-landforms",
    topicId: "coastal-landforms",
    title: "Name the erosion process or landform",
    level: 1,
    guideRef: "cave-arch-stack",
    generate(rng, tier) {
      return fromBank(EROSION_BANK, rng, tier, STEMS, "Picture the sequence: crack → cave → arch → stack → stump. Where does this clue fit?");
    },
  },
  {
    id: "coastal-landforms.transport-processes",
    topicId: "coastal-landforms",
    title: "Transport processes and longshore drift terms",
    level: 1,
    guideRef: "longshore-drift",
    generate(rng, tier) {
      return fromBank(TRANSPORT_BANK, rng, tier, STEMS, "Think about the size of the material and how it moves: roll, bounce, float or dissolve?");
    },
  },
  {
    id: "coastal-landforms.hard-or-soft",
    topicId: "coastal-landforms",
    title: "Hard or soft engineering?",
    level: 1,
    guideRef: "coastal-management",
    generate(rng, tier) {
      const s = rng.pick(HARD_SOFT);
      const label = tier === 1 ? `**${s.name}**` : `${s.desc}`;
      const stem = rng.pick([
        tier === 1 ? `Is ${label} an example of hard engineering or soft engineering?` : `Is this an example of hard engineering or soft engineering: ${label}?`,
        `A council plans ${label}. Is this hard or soft engineering?`,
        `Classify this coastal defence as hard or soft engineering: ${label}.`,
      ]);
      const ans = s.hard ? "hard" : "soft";
      const other = s.hard ? "soft" : "hard";
      return {
        prompt: tier === 3 ? `${stem} Then think: why might it be chosen?` : stem,
        answer: { type: "text", accept: [ans, `${ans} engineering`], display: `${ans} engineering` },
        solution: [
          s.hard
            ? `**Hard engineering** — ${s.name} is an artificial structure built to block or absorb the sea's energy. Usually effective but expensive and can look unnatural.`
            : `**Soft engineering** — ${s.name} works with natural processes rather than building a barrier. Usually cheaper and better for wildlife, but needs repeating or gives up some land.`,
        ],
        hint: "Is it a built structure that fights the sea, or does it work with nature?",
        traps: [{ spec: { type: "text", accept: [other, `${other} engineering`] }, feedback: s.hard ? "It is a man-made structure that resists the sea — that's hard engineering." : "It works with natural processes (sand, plants, flooding) — that's soft engineering." }],
      };
    },
  },
  {
    id: "coastal-landforms.depositional-landforms",
    topicId: "coastal-landforms",
    title: "Name the depositional landform",
    level: 2,
    guideRef: "depositional-landforms",
    generate(rng, tier) {
      return fromBank(DEPOSITION_BANK, rng, tier, STEMS, "Ask: what is the ridge attached to — the land at one end, two headlands, or an island?");
    },
  },
  {
    id: "coastal-landforms.drift-direction",
    topicId: "coastal-landforms",
    title: "Work out the direction of longshore drift",
    level: 2,
    guideRef: "longshore-drift",
    generate(rng, tier) {
      const c = rng.pick(COASTS);
      const w = rng.pick(c.winds);
      const who = rng.pick(PEOPLE);
      const coastWord = c.faces === "south" || c.faces === "north" ? "west–east" : "north–south";
      let prompt: string;
      if (tier === 1) {
        prompt = `${who} is studying a straight beach that faces **${c.faces}** (it runs ${coastWord}). The prevailing wind blows from the **${w.from}**. In which compass direction does longshore drift move sand along the beach?`;
      } else if (tier === 2) {
        prompt = `${who} paints pebbles on a beach that faces ${c.faces}. Waves arrive from the ${w.from}, driven by the prevailing wind. In which compass direction will the painted pebbles move along the beach?`;
      } else {
        prompt = `On a coast facing ${c.faces}, ${who} notices that sand has piled up against one side of each groyne. The prevailing wind is from the ${w.from}. Towards which compass direction is longshore drift moving sediment (one word)?`;
      }
      return {
        prompt,
        answer: { type: "text", accept: dirAccept(w.drift), display: w.drift },
        solution: [
          `The wind from the ${w.from} pushes the swash up the beach at an angle, heading ${w.drift}ward along the shore.`,
          `The backwash returns straight down the beach (gravity), at right angles to the coast.`,
          `Each swash–backwash cycle shifts the sediment a little further, so drift is towards the **${w.drift}**.${tier === 3 ? ` Sand builds up on the ${OPP[w.drift]} (up-drift) side of each groyne.` : ""}`,
        ],
        hint: "Sketch the beach. Draw the swash going up the beach in the same direction the wind is blowing TO, then the backwash straight down.",
        traps: [{ spec: { type: "text", accept: dirAccept(OPP[w.drift]) }, feedback: `The wind comes FROM the ${w.from}, so it blows waves TOWARDS the opposite side. Sediment moves away from where the wind comes from.` }],
      };
    },
  },
  {
    id: "coastal-landforms.drift-rate",
    topicId: "coastal-landforms",
    title: "Calculate the rate of longshore drift",
    level: 2,
    guideRef: "longshore-drift",
    generate(rng, tier) {
      const who = rng.pick(PEOPLE);
      if (tier === 1) {
        const days = rng.int(2, 9);
        const rate = rng.pick([5, 6, 8, 10, 12, 15, 20, 25, 30]);
        const dist = rate * days;
        return {
          prompt: `${who} marks a pebble with paint. After ${days} days it has moved ${dist} m along the beach by longshore drift. What is the average rate of drift in metres per day?`,
          answer: { type: "number", value: rate, display: `${rate} m per day` },
          solution: [`Rate = distance ÷ time`, `= ${dist} ÷ ${days} = **${rate} m per day**`],
          hint: "Rate means 'how far in ONE day'.",
          traps: [{ spec: { type: "number", value: clean(days / dist) }, feedback: "You divided time by distance. Rate = distance ÷ time." }],
        };
      }
      if (tier === 2) {
        const mins = rng.pick([10, 15, 20, 30]);
        const dist = rng.int(7, 60);
        const per = roundTo(dist / mins, 1);
        return {
          prompt: `In a fieldwork experiment, ${who} drops a float into the surf. It is carried ${dist} m along the beach in ${mins} minutes. Calculate the average speed of the longshore current in metres per minute, to 1 decimal place.`,
          answer: { type: "number", value: per, tolerance: 0.05, display: `${num(per)} m per minute` },
          solution: [`Speed = distance ÷ time = ${dist} ÷ ${mins}`, `= ${num(roundTo(dist / mins, 3))}… ≈ **${num(per)} m per minute** (1 d.p.)`],
          hint: "Divide the distance by the number of minutes, then round.",
          traps: per !== roundTo(mins / dist, 1) ? [{ spec: { type: "number", value: roundTo(mins / dist, 1), tolerance: 0.05 }, feedback: "You divided time by distance. Speed = distance ÷ time." }] : undefined,
        };
      }
      // tier 3: rate → annual total in km, or time to reach a groyne
      if (rng.bool()) {
        const rate = rng.pick([4, 5, 6, 8, 10, 12, 15, 18, 20, 24]);
        const km = roundTo((rate * 365) / 1000, 1);
        return {
          prompt: `Sediment on a beach studied by ${who} moves by longshore drift at an average of ${rate} m per day. If this rate continued all year, how far would a pebble travel in one year (365 days)? Give your answer in **kilometres** to 1 decimal place.`,
          answer: { type: "number", value: km, tolerance: 0.05, display: `${num(km)} km` },
          solution: [`Distance = ${rate} × 365 = ${big(rate * 365)} m`, `÷ 1000 = ${num(clean((rate * 365) / 1000))} km ≈ **${num(km)} km** (1 d.p.)`, "In reality the rate changes with storms and wind direction — this is a simplified average."],
          hint: "Find the distance in metres first, then convert: 1 km = 1000 m.",
          traps: [{ spec: { type: "number", value: rate * 365 }, feedback: "That's in metres — convert to kilometres by dividing by 1000." }],
        };
      }
      const rate = rng.pick([3, 4, 5, 6, 8, 12, 15]);
      const days = rng.int(6, 40);
      const gap = rate * days;
      return {
        prompt: `Groynes on a beach are ${gap} m apart. ${who} measures longshore drift moving pebbles at ${rate} m per day. How many days would a pebble take to travel from one groyne to the next (assuming nothing stops it)?`,
        answer: { type: "number", value: days, display: `${days} days` },
        solution: [`Time = distance ÷ rate`, `= ${gap} ÷ ${rate} = **${days} days**`],
        hint: "How many lots of the daily distance fit into the gap?",
        traps: [{ spec: { type: "number", value: gap * rate }, feedback: "You multiplied. Time = distance ÷ rate." }],
      };
    },
  },
  {
    id: "coastal-landforms.management-strategies",
    topicId: "coastal-landforms",
    title: "Name the coastal management strategy",
    level: 2,
    guideRef: "coastal-management",
    generate(rng, tier) {
      return fromBank(MANAGEMENT_BANK, rng, tier, STEMS, "Picture what is built or done on the beach: wall, boulders, cages, fences across the sand, or adding sand?");
    },
  },
  {
    id: "coastal-landforms.defence-cost",
    topicId: "coastal-landforms",
    title: "Calculate the cost of coastal defences",
    level: 2,
    guideRef: "coastal-management",
    generate(rng, tier) {
      const opts = [
        { name: "a sea wall", rates: [5000, 6000, 8000, 10000] },
        { name: "rock armour", rates: [1000, 1500, 2000, 3000] },
        { name: "gabions", rates: [100, 200, 300, 500] },
        { name: "revetments", rates: [1000, 2000, 3000] },
      ];
      const o = rng.pick(opts);
      const r = rng.pick(o.rates);
      const town = rng.pick(["a seaside town", "a holiday village", "a fishing port", "a caravan park", "a cliff-top village"]);
      if (tier === 1) {
        const len = rng.pick([50, 100, 150, 200, 250, 300, 400, 500]);
        const total = r * len;
        return {
          prompt: `A council is quoted £${big(r)} per metre for ${o.name} in front of ${town}. How much will ${len} m cost? Give your answer in pounds (£).`,
          answer: { type: "number", value: total, display: `£${big(total)}` },
          solution: [`Cost = cost per metre × length`, `= £${big(r)} × ${len} = **£${big(total)}**`],
          hint: "Multiply the cost of one metre by the number of metres.",
          traps: [{ spec: { type: "number", value: r + len }, feedback: "Add? No — each metre costs the same, so multiply." }],
        };
      }
      if (tier === 2) {
        const km = rng.pick([0.5, 1.2, 1.5, 2, 2.5, 3, 0.8, 1.6]);
        const m = clean(km * 1000);
        const totalM = roundTo((r * m) / 1e6, 1);
        return {
          prompt: `Suppose building ${o.name} costs £${big(r)} per metre. A council wants to protect ${num(km)} km of coastline at ${town}. Calculate the total cost in **£ million**, to 1 decimal place.`,
          answer: { type: "number", value: totalM, tolerance: 0.05, display: `£${num(totalM)} million` },
          solution: [`${num(km)} km = ${big(m)} m`, `£${big(r)} × ${big(m)} = £${big(r * m)}`, `÷ 1,000,000 ≈ **£${num(totalM)} million**`],
          hint: "Convert km to m first (× 1000), multiply, then divide by 1,000,000 to get millions.",
          traps: [{ spec: { type: "number", value: clean((r * km) / 1e6) }, feedback: "You forgot to change kilometres into metres — multiply by 1000 first." }],
        };
      }
      // tier 3: compare two options over their lifespans → cost per year
      const wallRate = rng.pick([6000, 8000, 10000]);
      const wallLife = rng.pick([40, 50, 80, 100]);
      const nourRate = rng.pick([1000, 1500, 2000, 2500]);
      const nourLife = rng.pick([5, 8, 10]);
      const len = rng.pick([200, 400, 500, 1000]);
      const wallYear = (wallRate * len) / wallLife;
      const nourYear = (nourRate * len) / nourLife;
      if (wallYear === nourYear) {
        return {
          prompt: `A ${len} m sea wall costs £${big(wallRate)} per metre and lasts about ${wallLife} years. What is its cost per year, in £?`,
          answer: { type: "number", value: clean(wallYear), display: `£${big(wallYear)} per year` },
          solution: [`Total = £${big(wallRate)} × ${len} = £${big(wallRate * len)}`, `Per year = £${big(wallRate * len)} ÷ ${wallLife} = **£${big(wallYear)}**`],
          hint: "Find the total cost, then share it over the years it lasts.",
        };
      }
      const diff = clean(Math.abs(wallYear - nourYear));
      const cheaper = wallYear < nourYear ? "the sea wall" : "beach nourishment";
      return {
        prompt: `For ${len} m of beach at ${town}: a sea wall costs £${big(wallRate)} per metre and lasts about ${wallLife} years; beach nourishment costs £${big(nourRate)} per metre each time and must be repeated every ${nourLife} years. Work out the cost **per year** of each. By how many pounds per year is the cheaper option cheaper?`,
        answer: { type: "number", value: diff, display: `£${big(diff)} per year` },
        solution: [
          `Sea wall: £${big(wallRate)} × ${len} = £${big(wallRate * len)}; ÷ ${wallLife} = £${big(wallYear)} per year`,
          `Nourishment: £${big(nourRate)} × ${len} = £${big(nourRate * len)}; ÷ ${nourLife} = £${big(nourYear)} per year`,
          `Difference = **£${big(diff)} per year** — ${cheaper} is cheaper each year.`,
          "Cost isn't everything: nourishment keeps a natural beach for tourists; a wall can scour the beach away.",
        ],
        hint: "Total cost ÷ lifespan gives the cost per year for each option. Then subtract.",
        traps: [{ spec: { type: "number", value: Math.abs(wallRate * len - nourRate * len) }, feedback: "That's the difference in one-off build costs. Share each cost over its lifespan first." }],
      };
    },
  },
  {
    id: "coastal-landforms.platform-retreat",
    topicId: "coastal-landforms",
    title: "Wave-cut platforms and cliff retreat",
    level: 3,
    guideRef: "cave-arch-stack",
    generate(rng, tier) {
      if (tier === 3) {
        const years = rng.pick([2000, 2500, 4000, 5000, 6000, 8000]);
        const width = rng.int(6, 45) * 10;
        const cm = roundTo((width * 100) / years, 1);
        return {
          prompt: `A wave-cut platform is ${width} m wide. Geologists estimate the cliff has been retreating for about ${big(years)} years. What is the average rate of cliff retreat in **centimetres per year**, to 1 decimal place?`,
          answer: { type: "number", value: cm, tolerance: 0.05, display: `${num(cm)} cm per year` },
          solution: [`${width} m = ${big(width * 100)} cm`, `Rate = ${big(width * 100)} ÷ ${big(years)} = ${num(roundTo((width * 100) / years, 3))}${(width * 100) % years ? "…" : ""} ≈ **${num(cm)} cm per year**`, "The platform width shows how far the cliff has retreated (simplified model)."],
          hint: "Change metres to centimetres first, then divide by the number of years.",
          traps: [{ spec: { type: "number", value: roundTo(width / years, 3), tolerance: 0.0005 }, feedback: "That's in metres per year — the question wants centimetres (× 100)." }],
        };
      }
      const r = rng.pick(tier === 1 ? [2, 4, 5, 10, 20, 25] : [2, 4, 5, 8, 10, 20, 25, 40, 50]);
      const width = rng.int(tier === 1 ? 2 : 5, tier === 1 ? 20 : 50) * 10;
      const years = (width * 100) / r;
      const rock = rng.pick(["chalk", "limestone", "sandstone", "granite", "shale"]);
      return {
        prompt: `A ${rock} cliff has left a wave-cut platform ${width} m wide. If the cliff retreated at a steady ${r} cm per year, how many years did it take to form the platform?`,
        answer: { type: "number", value: years, display: `${big(years)} years` },
        solution: [`${width} m = ${big(width * 100)} cm`, `Years = ${big(width * 100)} ÷ ${r} = **${big(years)} years**`, "Real retreat is not steady — collapses happen in sudden rockfalls — so this is a simplified average."],
        hint: "Units first: the width is in metres but the rate is in centimetres.",
        traps: [{ spec: { type: "number", value: clean(width / r) }, feedback: "You forgot to convert metres to centimetres (× 100) before dividing." }],
      };
    },
  },
  {
    id: "coastal-landforms.cost-benefit",
    topicId: "coastal-landforms",
    title: "Is the defence worth it? Benefit–cost ratio",
    level: 3,
    guideRef: "coastal-management",
    generate(rng, tier) {
      const houses = rng.int(tier === 1 ? 10 : 20, tier === 1 ? 40 : 150);
      const value = rng.pick(tier === 1 ? [200000, 250000, 300000] : [180000, 220000, 250000, 275000, 320000, 350000]);
      const extra = tier === 3 ? rng.pick([1, 2, 3, 4, 5]) * 1000000 : 0;
      const benefit = houses * value + extra;
      const cost = rng.pick(tier === 1 ? [2, 4, 5, 8, 10] : [3, 4, 6, 7, 9, 12, 15, 18]) * 1000000;
      const ratio = roundTo(benefit / cost, 1);
      const worth = benefit > cost;
      const extraTxt = extra ? ` A coast road worth £${big(extra / 1000000)} million is also protected.` : "";
      return {
        prompt: `A defence scheme would protect ${houses} homes worth about £${big(value)} each.${extraTxt} The scheme costs £${big(cost / 1000000)} million. Calculate the benefit–cost ratio (value protected ÷ cost), to 1 decimal place.`,
        answer: { type: "number", value: ratio, tolerance: 0.05, display: num(ratio) },
        solution: [
          `Value protected = ${houses} × £${big(value)}${extra ? ` + £${big(extra)}` : ""} = £${big(benefit)}`,
          `Ratio = £${big(benefit)} ÷ £${big(cost)} ≈ **${num(ratio)}**`,
          worth ? "The ratio is above 1, so on money alone the scheme is worth building." : "The ratio is 1 or below, so on money alone the scheme is hard to justify — managed retreat or no active intervention might be chosen.",
          "Real decisions also weigh social and environmental factors (SEE).",
        ],
        hint: "Find the total value protected first, then divide by the cost (careful with millions).",
        traps: ratio !== roundTo(cost / benefit, 1) ? [{ spec: { type: "number", value: roundTo(cost / benefit, 1), tolerance: 0.05 }, feedback: "You divided cost by benefit. The ratio is value protected ÷ cost." }] : undefined,
      };
    },
  },
];
