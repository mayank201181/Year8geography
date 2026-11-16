// Skill drills for "Sustainable Cities of the Future" (Future Cities unit).
// Retrieval fact banks (Knowledge-Organiser self-quizzing) + numeric skills generators.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { num, big, roundTo, clean } from "./helpers.ts";

const T = "sustainable-cities";

// ---------------------------------------------------------------------------
// Fact-bank machinery
// ---------------------------------------------------------------------------

interface Fact {
  /** The clue (no question frame). */
  q: string;
  /** Accepted answers; the first is the display answer. */
  a: string[];
  /** 1 = core, 2 = typical, 3 = stretch. */
  lvl: 1 | 2 | 3;
  /** Why the answer is right (solution line). */
  why: string;
  hint?: string;
  /** A predictable wrong answer + feedback. */
  trap?: { a: string[]; fb: string };
}

/** Tier 1 → levels 1–2, tier 2 → all, tier 3 → levels 2–3. */
function poolFor(bank: readonly Fact[], tier: 1 | 2 | 3): Fact[] {
  if (tier === 1) return bank.filter((f) => f.lvl <= 2);
  if (tier === 3) return bank.filter((f) => f.lvl >= 2);
  return [...bank];
}

/** Proper display case for answers that are names or acronyms (checking ignores case anyway). */
const DISPLAY: Record<string, string> = {
  "four national taps": "Four National Taps", newater: "NEWater", malaysia: "Malaysia", erp: "ERP (Electronic Road Pricing)",
  hdb: "HDB (Housing and Development Board)", mrt: "MRT", pub: "PUB", "marina barrage": "Marina Barrage",
  coe: "COE (Certificate of Entitlement)", "singapore green plan 2030": "Singapore Green Plan 2030", tengah: "Tengah",
  "park connector network": "Park Connector Network", "city in nature": "City in Nature", "area licensing scheme": "Area Licensing Scheme",
  "semakau landfill": "Semakau Landfill", "green mark": "Green Mark", "tengeh reservoir": "Tengeh Reservoir",
  "deep tunnel sewerage system": "Deep Tunnel Sewerage System (DTSS)", mojave: "Mojave Desert", "lake mead": "Lake Mead",
  "colorado river": "Colorado River", nevada: "Nevada", "hoover dam": "Hoover Dam", mexico: "Mexico", "rocky mountains": "Rocky Mountains",
  "southern nevada water authority": "Southern Nevada Water Authority (SNWA)", curitiba: "Curitiba", vauban: "Vauban",
  masdar: "Masdar City", copenhagen: "Copenhagen", "bus rapid transit": "bus rapid transit (BRT)", "brundtland report": "Brundtland Report",
  see: "SEE", "earth overshoot day": "Earth Overshoot Day", "green exchange": "Green Exchange (Câmbio Verde)",
};

function retrieval(bank: readonly Fact[], frames: readonly string[], defaultHint: string) {
  return (rng: Rng, tier: 1 | 2 | 3): DrillItem => {
    const f = rng.pick(poolFor(bank, tier));
    const frame = rng.pick(frames);
    const traps: Trap[] | undefined = f.trap ? [{ spec: { type: "text", accept: f.trap.a }, feedback: f.trap.fb }] : undefined;
    return {
      prompt: frame.replace("@", f.q),
      answer: { type: "text", accept: f.a, display: DISPLAY[f.a[0]] ?? f.a[0] },
      solution: [`**${DISPLAY[f.a[0]] ?? f.a[0]}**. ${f.why}`],
      hint: f.hint ?? defaultHint,
      traps,
    };
  };
}

const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara"] as const;

// ---------------------------------------------------------------------------
// 1. Social / economic / environmental pillar
// ---------------------------------------------------------------------------

type Pillar = "social" | "economic" | "environmental";
const PILLARS: Pillar[] = ["social", "economic", "environmental"];
const PILLAR_WHY: Record<Pillar, string> = {
  social: "Social sustainability is about **people**: health, safety, housing, education, community and fairness.",
  economic: "Economic sustainability is about **money and jobs**: a city that can keep paying its way and give people work.",
  environmental: "Environmental sustainability is about **nature and resources**: air, water, energy, wildlife and waste.",
};

const PILLAR_BANK: { s: string; p: Pillar; lvl: 1 | 2 | 3 }[] = [
  { s: "Planting native trees along a river to give birds and insects a habitat", p: "environmental", lvl: 1 },
  { s: "Building a community centre where neighbours of all ages can meet", p: "social", lvl: 1 },
  { s: "Attracting new companies so that local people can find well-paid jobs", p: "economic", lvl: 1 },
  { s: "Fitting solar panels to roofs to cut carbon dioxide emissions from power stations", p: "environmental", lvl: 1 },
  { s: "Making sure every child lives within walking distance of a school", p: "social", lvl: 1 },
  { s: "Keeping shop rents low so small family businesses can make a profit", p: "economic", lvl: 1 },
  { s: "Recycling glass and paper so less rubbish is sent to landfill", p: "environmental", lvl: 1 },
  { s: "Providing clinics so that residents can see a doctor quickly", p: "social", lvl: 1 },
  { s: "Collecting rainwater from roofs to reduce the amount taken from rivers", p: "environmental", lvl: 2 },
  { s: "Building affordable flats so low-income families have a safe home", p: "social", lvl: 2 },
  { s: "Training residents for jobs in a new green-technology industry", p: "economic", lvl: 2 },
  { s: "Adding well-lit footpaths so people feel safe walking at night", p: "social", lvl: 2 },
  { s: "Lowering the city's spending on imported fuel so its budget balances", p: "economic", lvl: 2 },
  { s: "Creating a wetland park that filters polluted run-off before it reaches the sea", p: "environmental", lvl: 2 },
  { s: "Encouraging tourists to visit so hotels and restaurants earn more income", p: "economic", lvl: 2 },
  { s: "Ramps and lifts at every station so wheelchair users can travel independently", p: "social", lvl: 2 },
  { s: "Reducing air pollution from traffic so fewer lichens and street trees are damaged", p: "environmental", lvl: 3 },
  { s: "Lowering the cost of running a business by cutting time lost in traffic jams", p: "economic", lvl: 3 },
  { s: "Giving residents a vote on how a new park is designed", p: "social", lvl: 3 },
  { s: "Linking parks with green corridors so wildlife can move between them", p: "environmental", lvl: 3 },
  { s: "A port and airport that let the city trade goods with the rest of the world", p: "economic", lvl: 3 },
  { s: "Mixing different income groups in the same estate so no area is left behind", p: "social", lvl: 3 },
  { s: "Protecting mangroves so they keep storing carbon and sheltering young fish", p: "environmental", lvl: 3 },
  { s: "Keeping the city's taxes and costs low enough that companies stay instead of moving away", p: "economic", lvl: 3 },
];

const PILLAR_FRAMES = [
  "Which pillar of sustainability does this mainly help — **social**, **economic** or **environmental**?\n\n> @",
  "SEE check. A city plan says: *@.* Is this mainly a social, economic or environmental benefit?",
];

// ---------------------------------------------------------------------------
// 2. Key terms
// ---------------------------------------------------------------------------

const TERMS: Fact[] = [
  { q: "Development that meets the needs of people today without stopping future generations from meeting their own needs.", a: ["sustainable development", "sustainability"], lvl: 1, why: "This is the classic definition from the 1987 Brundtland Report." },
  { q: "The area of land and sea needed to supply everything a person uses and to absorb their waste.", a: ["ecological footprint", "eco footprint", "eco-footprint"], lvl: 1, why: "It is measured in global hectares (gha) per person.", trap: { a: ["carbon footprint"], fb: "A carbon footprint only counts greenhouse gases. This one counts ALL the land and sea a person needs." } },
  { q: "The total amount of greenhouse gases released by a person's or a city's activities.", a: ["carbon footprint"], lvl: 1, why: "Usually given in tonnes of CO₂ (or CO₂-equivalent) per year.", trap: { a: ["ecological footprint"], fb: "The ecological footprint counts land and sea area. This one only counts greenhouse gases." } },
  { q: "The uncontrolled spread of a city outwards into the surrounding countryside.", a: ["urban sprawl", "sprawl"], lvl: 1, why: "Sprawl eats farmland and makes people depend on cars." },
  { q: "Land that has been built on before and can be cleared and reused.", a: ["brownfield site", "brownfield", "brownfield land"], lvl: 1, why: "Reusing brownfield land protects the countryside.", trap: { a: ["greenfield site", "greenfield"], fb: "Greenfield land has NEVER been built on. Previously-used land is brownfield." } },
  { q: "Land that has never been built on, often farmland at the edge of a city.", a: ["greenfield site", "greenfield", "greenfield land"], lvl: 1, why: "Building here is cheaper but destroys countryside.", trap: { a: ["brownfield site", "brownfield"], fb: "Brownfield land has been built on before. Never-built-on land is greenfield." } },
  { q: "Energy from sources that will not run out, such as sunlight, wind and moving water.", a: ["renewable energy", "renewables", "renewable"], lvl: 1, why: "Renewables release little or no carbon dioxide when they generate electricity." },
  { q: "The variety of plant and animal life in an area.", a: ["biodiversity"], lvl: 1, why: "Green space, corridors and wetlands raise a city's biodiversity." },
  { q: "Coal, oil and natural gas, formed from the remains of ancient plants and animals.", a: ["fossil fuels", "fossil fuel"], lvl: 1, why: "Burning them releases carbon dioxide, so they are not sustainable." },
  { q: "Buses, trains and trams that anyone can pay to use, carrying many people at once.", a: ["public transport", "public transportation", "mass transit"], lvl: 1, why: "Moving many people per vehicle cuts congestion and emissions per person." },
  { q: "When a city is noticeably warmer than the countryside around it, because concrete and tarmac store heat.", a: ["urban heat island", "heat island", "urban heat island effect"], lvl: 2, why: "Trees, parks, water and pale roofs reduce the urban heat island." },
  { q: "An increase in the proportion of a country's people who live in towns and cities.", a: ["urbanisation", "urbanization"], lvl: 2, why: "It is a proportion, not just a bigger city population.", trap: { a: ["urban sprawl"], fb: "Urban sprawl is the city spreading outwards. A rising SHARE of people in cities is urbanisation." } },
  { q: "Turning waste materials such as glass, paper and metal into new products.", a: ["recycling", "recycle"], lvl: 2, why: "Recycling saves raw materials and landfill space." },
  { q: "A large hole in the ground where rubbish is buried.", a: ["landfill", "landfill site", "tip", "dump"], lvl: 2, why: "Landfill uses land and can leak methane and polluted liquid." },
  { q: "Burning waste, often to generate electricity.", a: ["incineration", "waste to energy", "waste-to-energy", "incinerating"], lvl: 2, why: "It shrinks the volume of waste hugely but still releases some carbon dioxide." },
  { q: "An area of land where rainwater is collected and drains into a reservoir or river.", a: ["catchment", "water catchment", "catchment area"], lvl: 2, why: "About two-thirds of Singapore's land area is water catchment." },
  { q: "A protected ring of countryside around a city where new building is restricted.", a: ["green belt", "greenbelt"], lvl: 2, why: "Green belts are used in the UK to stop urban sprawl." },
  { q: "A gas such as carbon dioxide or methane that traps heat in the atmosphere.", a: ["greenhouse gas", "greenhouse gases"], lvl: 2, why: "More greenhouse gas means more heat trapped and global warming." },
  { q: "How good people's lives are, including health, housing, safety, income and happiness.", a: ["quality of life", "standard of living", "wellbeing", "well-being"], lvl: 2, why: "Social sustainability aims to raise quality of life for everyone." },
  { q: "Releasing no more carbon dioxide overall than is removed or offset.", a: ["carbon neutral", "net zero", "carbon neutrality"], lvl: 3, why: "Cities aim for this by cutting emissions and balancing the rest." },
  { q: "The date each year when humanity has used up all the natural resources Earth can renew in that year.", a: ["earth overshoot day", "overshoot day"], lvl: 3, why: "It shows our global ecological footprint is bigger than one Earth." },
  { q: "The unit used to measure ecological footprints: one hectare with world-average ability to produce resources.", a: ["global hectare", "gha", "global hectares"], lvl: 3, why: "Using a standard hectare lets footprints be compared between countries." },
  { q: "Building homes, shops and offices together so that people can live close to work and services.", a: ["mixed-use development", "mixed use", "mixed-use", "mixed use development"], lvl: 3, why: "Shorter trips mean more walking and cycling and fewer car journeys." },
  { q: "The 1987 UN report that gave the best-known definition of sustainable development.", a: ["brundtland report", "brundtland", "our common future"], lvl: 3, why: "Its full title was *Our Common Future*." },
  { q: "The three pillars of sustainability (give the 3-letter memory aid made from their first letters).", a: ["see", "s.e.e.", "s e e"], lvl: 3, why: "**S**ocial, **E**conomic, **E**nvironmental." },
];

// ---------------------------------------------------------------------------
// 4. Singapore facts
// ---------------------------------------------------------------------------

const SG: Fact[] = [
  { q: "Singapore's water strategy of four supplies: local catchment, imported water, NEWater and desalination.", a: ["four national taps", "4 national taps", "national taps"], lvl: 1, why: "Having four different sources makes the supply resilient — if one is hit, the others keep flowing." },
  { q: "High-grade reclaimed water made by cleaning used water with membranes and ultraviolet light.", a: ["newater", "new water"], lvl: 1, why: "NEWater can meet up to about 40% of Singapore's current water demand.", trap: { a: ["desalination", "desalinated water"], fb: "Desalination cleans SEAWATER. Recycling USED water gives NEWater." } },
  { q: "The process of removing salt from seawater to make drinking water.", a: ["desalination", "desalinisation", "desalinization"], lvl: 1, why: "It is reliable in a drought but uses a lot of energy." },
  { q: "The country that supplies Singapore's imported water, from the Johor River.", a: ["malaysia"], lvl: 1, why: "The 1962 water agreement with Malaysia runs until 2061." },
  { q: "Singapore's system that charges drivers electronically for using busy roads at busy times.", a: ["erp", "electronic road pricing"], lvl: 1, why: "Charges are higher when roads are more crowded, so some drivers change time, route or mode." },
  { q: "The government board that builds the public flats that about 80% of Singapore residents live in.", a: ["hdb", "housing and development board", "housing & development board"], lvl: 1, why: "HDB new towns are planned with schools, shops, parks and MRT links." },
  { q: "Singapore's rail network, whose lines are being extended through the 2020s and 2030s.", a: ["mrt", "mass rapid transit"], lvl: 1, why: "A dense rail network gives people a fast alternative to cars." },
  { q: "The tap that collects rain from drains, canals and rivers into reservoirs.", a: ["local catchment", "local catchment water", "catchment"], lvl: 1, why: "About two-thirds of Singapore's land area is water catchment.", trap: { a: ["imported water"], fb: "Imported water comes from Johor in Malaysia. Rain collected in Singapore is the local catchment tap." } },
  { q: "Singapore's national water agency.", a: ["pub", "public utilities board"], lvl: 2, why: "PUB manages the whole water loop: catchment, supply, used water and drainage." },
  { q: "The dam across Marina Channel, completed in 2008, that turned the city-centre basin into a freshwater reservoir.", a: ["marina barrage", "the marina barrage"], lvl: 2, why: "It also helps prevent flooding in low-lying city areas." },
  { q: "Singapore's car-ownership scheme where buyers must bid for a 10-year right to own a vehicle.", a: ["coe", "certificate of entitlement"], lvl: 2, why: "Limiting car numbers keeps roads less congested.", trap: { a: ["erp", "electronic road pricing"], fb: "ERP charges for USING roads. The 10-year permit to OWN a car is the COE." } },
  { q: "Singapore's national sustainability plan, launched in 2021, with targets for the end of the decade.", a: ["singapore green plan 2030", "green plan 2030", "green plan", "singapore green plan"], lvl: 2, why: "It includes planting a million more trees and greener transport and buildings." },
  { q: "HDB's 'forest town' in western Singapore, planned with a car-free town centre and a forest corridor.", a: ["tengah"], lvl: 2, why: "Roads run underground at the centre so the surface is safe for walking and cycling." },
  { q: "The network of green paths linking parks across Singapore for walkers, runners and cyclists.", a: ["park connector network", "park connectors", "park connector", "pcn"], lvl: 2, why: "It links green spaces so people (and some wildlife) can move between them." },
  { q: "Singapore's vision that replaced 'City in a Garden' — bringing nature right into the city.", a: ["city in nature"], lvl: 2, why: "It means more parks, nature corridors and restored habitats." },
  { q: "The tap that can currently meet up to about 40% of Singapore's water demand.", a: ["newater", "new water"], lvl: 2, why: "PUB plans for NEWater to meet up to about 55% of demand by 2060." },
  { q: "The year Singapore's water agreement with Malaysia expires.", a: ["2061"], lvl: 3, why: "It was signed in 1962 for 99 years — one reason Singapore built NEWater and desalination." },
  { q: "The year the first NEWater plants opened.", a: ["2003"], lvl: 3, why: "NEWater turned used water into a new 'tap'." },
  { q: "The year Electronic Road Pricing (ERP) began in Singapore.", a: ["1998"], lvl: 3, why: "It replaced the paper-licence Area Licensing Scheme of 1975." },
  { q: "Singapore's 1975 scheme — the world's first congestion charge — where drivers bought a paper licence to enter the city centre.", a: ["area licensing scheme", "als"], lvl: 3, why: "It was replaced by ERP in 1998." },
  { q: "Singapore's offshore landfill, made by enclosing the sea between two small islands.", a: ["semakau landfill", "semakau", "pulau semakau"], lvl: 3, why: "Only ash from incineration and waste that cannot be burned goes there." },
  { q: "The rating scheme that scores Singapore's buildings on energy, water and environmental performance.", a: ["green mark", "bca green mark"], lvl: 3, why: "It is run by the Building and Construction Authority (BCA)." },
  { q: "The reservoir in western Singapore covered by a large floating solar farm that opened in 2021.", a: ["tengeh reservoir", "tengeh"], lvl: 3, why: "Floating panels use water space in a land-scarce country (don't mix it up with Tengah, the forest town)." },
  { q: "The tunnel system that carries Singapore's used water by gravity to large water reclamation plants.", a: ["deep tunnel sewerage system", "dtss", "deep tunnel"], lvl: 3, why: "It frees up land and feeds the NEWater plants." },
  { q: "Singapore's target for household water use per person per day by 2030, in litres.", a: ["130", "130 litres", "130 l"], lvl: 3, why: "Use was about 140 litres a day in the early 2020s, so households need to save around 10 litres each." },
];

// ---------------------------------------------------------------------------
// 7. Las Vegas facts
// ---------------------------------------------------------------------------

const LV: Fact[] = [
  { q: "The desert in which Las Vegas is built.", a: ["mojave", "mojave desert"], lvl: 1, why: "It is a hot desert — rainfall is well under 250 mm a year." },
  { q: "The reservoir that supplies about 90% of Las Vegas's water.", a: ["lake mead"], lvl: 1, why: "It was formed behind Hoover Dam on the Colorado River." },
  { q: "The river that feeds Lake Mead.", a: ["colorado river", "colorado"], lvl: 1, why: "It is shared by seven US states and Mexico." },
  { q: "The US state Las Vegas is in.", a: ["nevada"], lvl: 1, why: "Nevada has the smallest share of Colorado River water of the states that use it." },
  { q: "A long period of below-average rainfall.", a: ["drought"], lvl: 1, why: "The Colorado River basin has had a long drought since about 2000." },
  { q: "The dam on the Colorado River, completed in 1936, that created Lake Mead.", a: ["hoover dam", "hoover"], lvl: 1, why: "It also generates hydroelectric power." },
  { q: "Replacing grass lawns with gravel, rocks and desert plants that need little water.", a: ["xeriscaping", "xeriscape", "desert landscaping"], lvl: 1, why: "Las Vegas pays residents to remove grass ('cash for grass')." },
  { q: "The main industry that brings money and visitors to Las Vegas.", a: ["tourism", "tourists", "gambling", "casinos", "entertainment"], lvl: 1, why: "Tens of millions of visitors a year stay in hotels that use water and energy." },
  { q: "What the Southern Nevada Water Authority pays homeowners to remove from their gardens.", a: ["grass", "lawn", "lawns", "turf"], lvl: 2, why: "Grass needs heavy watering in a desert; desert plants need far less." },
  { q: "The process by which a lot of Lake Mead's water is lost straight into the hot, dry air.", a: ["evaporation"], lvl: 2, why: "High temperatures and dry air mean evaporation is high." },
  { q: "The type of electricity generated by Hoover Dam.", a: ["hydroelectric power", "hydroelectricity", "hydroelectric", "hydropower", "hydro"], lvl: 2, why: "Falling water turns turbines — but less water in Lake Mead means less power." },
  { q: "The country the Colorado River flows into near its mouth.", a: ["mexico"], lvl: 2, why: "So much water is taken upstream that the river often fails to reach the sea." },
  { q: "The mountain range where the Colorado River begins.", a: ["rocky mountains", "rockies"], lvl: 2, why: "Snowmelt from the Rockies supplies most of the river's water." },
  { q: "The agency, formed in 1991, that manages water for the Las Vegas area.", a: ["southern nevada water authority", "snwa"], lvl: 2, why: "It runs grass-removal rebates, watering limits and recycling." },
  { q: "Which kind of water use — indoor or outdoor — Las Vegas can treat and return to Lake Mead.", a: ["indoor", "indoor water", "indoor use"], lvl: 2, why: "Water from sinks, showers and toilets is treated and returned; water sprayed on gardens is lost.", trap: { a: ["outdoor"], fb: "Outdoor water soaks in or evaporates and cannot be collected. Indoor water goes down drains and can be treated." } },
  { q: "The year Lake Mead fell to its lowest level since it was first filled.", a: ["2022"], lvl: 3, why: "Old boats and the 'bathtub ring' on the rocks were exposed." },
  { q: "The nickname of the deep intake pipe, finished in 2015, that can draw water even if Lake Mead falls very low.", a: ["third straw", "third intake", "intake 3"], lvl: 3, why: "Las Vegas built it so taps keep running even in a severe drought." },
  { q: "The effect that makes the Mojave dry because mountains such as the Sierra Nevada block moist air from the Pacific.", a: ["rain shadow", "rain shadow effect"], lvl: 3, why: "Air loses its moisture as it rises over the mountains, so it is dry on the far side." },
  { q: "The US unit of water volume equal to the water needed to cover one acre one foot deep.", a: ["acre-foot", "acre foot", "acre-feet", "acre feet"], lvl: 3, why: "River shares are given in acre-feet; one is about 1,233 m³." },
  { q: "The credits Las Vegas earns when it returns treated wastewater to Lake Mead, letting it take out more water.", a: ["return-flow credits", "return flow credits", "return flow", "return-flow credit"], lvl: 3, why: "This is why indoor water use is far less of a problem than outdoor use." },
  { q: "The type of grass that a 2021 Nevada law says must stop being watered with Colorado River water by 2027 (e.g. road verges, office lawns).", a: ["non-functional turf", "nonfunctional turf", "non functional turf", "non-functional grass"], lvl: 3, why: "Grass nobody walks or plays on wastes water in a desert." },
  { q: "The term for the white mineral band on Lake Mead's rocks that shows how far the water has fallen.", a: ["bathtub ring", "bath tub ring"], lvl: 3, why: "It is minerals left behind on rock that used to be underwater." },
];

// ---------------------------------------------------------------------------
// 9. Eco-city examples & design features
// ---------------------------------------------------------------------------

const ECO: Fact[] = [
  { q: "The Brazilian city famous for its cheap, fast bus rapid transit system, opened in 1974.", a: ["curitiba"], lvl: 1, why: "Buses run in their own lanes and passengers board from raised tube stations." },
  { q: "The car-free, solar-powered district in Freiburg, Germany, built on old army barracks.", a: ["vauban"], lvl: 1, why: "Residents walk, cycle or take the tram; parking is in a garage at the edge." },
  { q: "The low-carbon city being built in the desert near Abu Dhabi since 2008.", a: ["masdar", "masdar city"], lvl: 1, why: "Narrow, shaded streets and solar power aim to cut energy use." },
  { q: "The Danish capital known for its cycle superhighways and a ski slope on top of a waste-to-energy plant.", a: ["copenhagen"], lvl: 1, why: "Cycling is made safer and faster than driving for many trips." },
  { q: "Buses that run in their own dedicated lanes with metro-style stations.", a: ["bus rapid transit", "brt"], lvl: 1, why: "They are much cheaper to build than an underground railway." },
  { q: "Panels that turn sunlight directly into electricity.", a: ["solar panels", "solar panel", "photovoltaic panels", "photovoltaic", "solar pv", "pv", "solar cells"], lvl: 1, why: "A renewable source with no emissions while generating." },
  { q: "A machine whose blades are turned by moving air to generate electricity.", a: ["wind turbine", "wind turbines"], lvl: 1, why: "Wind is a renewable energy source." },
  { q: "Turning food and garden waste into a natural fertiliser.", a: ["composting", "compost"], lvl: 1, why: "It keeps food waste out of landfill and feeds gardens and farms." },
  { q: "A roof covered with plants that insulates the building and soaks up rainwater.", a: ["green roof", "green roofs", "living roof", "sky garden"], lvl: 1, why: "It cools the building and slows flood water." },
  { q: "Collecting rain from roofs and storing it for later use.", a: ["rainwater harvesting", "rain water harvesting", "rainwater collection"], lvl: 2, why: "It cuts the demand on reservoirs and mains water." },
  { q: "Plants grown up the outside walls of a building.", a: ["green wall", "green walls", "living wall", "vertical garden", "vertical greenery"], lvl: 2, why: "They cool walls, clean air and add habitat in a dense city." },
  { q: "Paving that lets rainwater soak through into the ground below.", a: ["permeable paving", "porous paving", "permeable pavement", "porous pavement"], lvl: 2, why: "Less water rushes into drains, so flash-flood risk falls." },
  { q: "Used water from sinks, showers and washing machines, reused for flushing toilets.", a: ["greywater", "grey water", "graywater", "gray water"], lvl: 2, why: "Toilets do not need drinking-quality water." },
  { q: "A strip of habitat linking parks so that wildlife can move between them.", a: ["green corridor", "wildlife corridor", "ecological corridor", "nature corridor", "eco corridor"], lvl: 2, why: "Linked habitats support more species than isolated patches." },
  { q: "A scheme where members rent shared cars by the hour instead of owning one.", a: ["car sharing", "car-sharing", "car club", "car share", "carshare"], lvl: 2, why: "Fewer cars are needed, freeing parking space for homes or parks." },
  { q: "A scheme with bikes you can unlock from docks or apps around a city.", a: ["bike sharing", "bike-sharing", "bike share", "bicycle sharing", "cycle hire"], lvl: 2, why: "It makes short trips easy without a car." },
  { q: "Closing streets to traffic so that they are only for people on foot.", a: ["pedestrianisation", "pedestrianization", "pedestrianised", "pedestrian zone"], lvl: 2, why: "Safer, quieter streets with cleaner air." },
  { q: "Pipes carrying chilled water from a central plant to cool many buildings at once, as in Marina Bay.", a: ["district cooling", "district cooling system"], lvl: 3, why: "One efficient central plant uses less energy than many separate air-conditioners." },
  { q: "The idea that homes, shops, schools and parks should all be within a short walk or cycle ride.", a: ["15-minute city", "15 minute city", "fifteen minute city", "fifteen-minute city"], lvl: 3, why: "If daily needs are close, people do not need cars." },
  { q: "Curitiba's scheme that lets families swap bags of recyclable rubbish for food or bus tickets.", a: ["green exchange", "cambio verde", "câmbio verde"], lvl: 3, why: "It cleaned up poorer areas and helped low-income families — social AND environmental." },
  { q: "Vauban was built on former army barracks. What type of site is this?", a: ["brownfield", "brownfield site", "brownfield land"], lvl: 3, why: "Reusing previously built-on land protects the countryside.", trap: { a: ["greenfield", "greenfield site"], fb: "Greenfield land has never been built on. Old barracks are previously developed — brownfield." } },
  { q: "A house that generates more energy than it uses in a year, as in Freiburg's Solar Settlement.", a: ["plus-energy house", "plusenergy house", "plus energy house", "energy-plus house", "plusenergy", "plus energy", "energy plus"], lvl: 3, why: "Solar roofs and super-insulation turn homes into small power stations." },
  { q: "A building designed to need almost no heating or cooling, using thick insulation, airtightness and careful shading.", a: ["passive house", "passivhaus", "passive design"], lvl: 3, why: "Good design cuts energy demand before any panels are added." },
  { q: "Homes priced so that people on low incomes can rent or buy them.", a: ["affordable housing", "affordable homes", "public housing", "social housing"], lvl: 3, why: "A sustainable city must be fair, not only green." },
];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // ---- what-is-sustainable --------------------------------------------------
  {
    id: `${T}.see-pillar`,
    topicId: T,
    title: "Social, economic or environmental?",
    level: 1,
    guideRef: "what-is-sustainable",
    generate(rng, tier) {
      const pool = PILLAR_BANK.filter((x) => (tier === 1 ? x.lvl <= 2 : tier === 3 ? x.lvl >= 2 : true));
      const it = rng.pick(pool);
      const frame = rng.pick(PILLAR_FRAMES);
      const others = PILLARS.filter((p) => p !== it.p);
      return {
        prompt: frame.replace("@", it.s),
        answer: { type: "text", accept: [it.p, it.p === "environmental" ? "environment" : it.p === "economic" ? "economy" : "society"], display: it.p },
        solution: [`**${it.p[0].toUpperCase() + it.p.slice(1)}.** ${PILLAR_WHY[it.p]}`, "Many features help more than one pillar — here, ask what the MAIN benefit is."],
        hint: "Ask: who or what benefits most — people (social), money and jobs (economic), or nature and resources (environmental)?",
        traps: others.map((o) => ({ spec: { type: "text", accept: [o] }, feedback: `Not mainly ${o}. ${PILLAR_WHY[it.p]}` })),
      };
    },
  },
  {
    id: `${T}.key-terms`,
    topicId: T,
    title: "Sustainable-city key terms",
    level: 1,
    guideRef: "what-is-sustainable",
    generate: retrieval(TERMS, ["Give the key term.\n\n> @", "Which key term matches this definition? @"], "Think of the knowledge-organiser word list — which term fits EXACTLY?"),
  },
  {
    id: `${T}.footprint-earths`,
    topicId: T,
    title: "Ecological footprint: how many Earths?",
    level: 2,
    guideRef: "what-is-sustainable",
    generate(rng, tier) {
      const who = rng.pick(NAMES);
      const BIO = 1.6;
      if (tier === 1) {
        const k = rng.int(1, 8);
        const f = clean(BIO * k);
        return {
          prompt: `${who} works out that their family's ecological footprint is ${num(f)} global hectares (gha) per person. Suppose Earth can supply ${num(BIO)} gha per person. How many Earths would we need if everyone lived like ${who}'s family?`,
          answer: { type: "number", value: k },
          solution: [`Earths needed = footprint ÷ what Earth supplies per person.`, `${num(f)} ÷ ${num(BIO)} = ${k}`],
          hint: "Divide the footprint by what one Earth can supply per person.",
          traps: [{ spec: { type: "number", value: roundTo(f * BIO, 2) }, feedback: "You multiplied. Divide the footprint by 1.6 to see how many 'Earth-shares' it uses." }],
        };
      }
      if (tier === 2) {
        const f10 = rng.int(20, 99);
        const f = f10 / 10;
        const ans = roundTo(f / BIO, 1);
        const inv = roundTo(BIO / f, 1);
        const traps: Trap[] = inv !== ans ? [{ spec: { type: "number", value: inv }, feedback: "Upside down — divide the footprint by 1.6, not 1.6 by the footprint." }] : [];
        return {
          prompt: `The average ecological footprint in a city is ${num(f)} gha per person. Suppose Earth can supply ${num(BIO)} gha per person. How many Earths would be needed if everyone lived like this? Give your answer to 1 decimal place.`,
          answer: { type: "number", value: ans },
          solution: [`Earths needed = ${num(f)} ÷ ${num(BIO)} = ${num(clean(f / BIO))}…`, `To 1 d.p.: **${num(ans)} Earths**.`, ans > 1 ? "More than 1 Earth means this lifestyle is not sustainable for everyone." : "1 Earth or fewer: this lifestyle could be shared by everyone."],
          hint: "Footprint ÷ Earth's supply per person.",
          traps,
        };
      }
      // tier 3: % cut needed to fit within one Earth
      const f10 = rng.int(24, 96);
      const f = f10 / 10;
      const pct = roundTo(((f10 - 16) / f10) * 100, 0);
      const wrong = roundTo(((f10 - 16) / 16) * 100, 0);
      return {
        prompt: `A city's average footprint is ${num(f)} gha per person. To live within one Earth, it must fall to ${num(BIO)} gha per person. By what percentage must the footprint be cut? Give your answer to the nearest whole number.`,
        answer: { type: "number", value: pct, display: `${num(pct)}%` },
        solution: [`Cut needed = ${num(f)} − ${num(BIO)} = ${num(clean(f - BIO))} gha.`, `Percentage cut = ${num(clean(f - BIO))} ÷ ${num(f)} × 100 = ${num(roundTo(((f10 - 16) / f10) * 100, 2))}…`, `≈ **${num(pct)}%**`],
        hint: "Percentage change = change ÷ ORIGINAL × 100. The original is the current footprint.",
        traps: wrong !== pct ? [{ spec: { type: "number", value: wrong }, feedback: "You divided by the target (1.6). Percentage cut is out of the ORIGINAL footprint." }] : [],
      };
    },
  },

  // ---- singapore-success ---------------------------------------------------
  {
    id: `${T}.singapore-facts`,
    topicId: T,
    title: "Sustainable Singapore: recall the facts",
    level: 1,
    guideRef: "singapore-success",
    generate: retrieval(SG, ["Singapore recall: @", "Name it.\n\n> @"], "Think about Singapore's water, transport, housing and green plans."),
  },
  {
    id: `${T}.water-taps-share`,
    topicId: T,
    title: "Four National Taps: water-budget shares",
    level: 2,
    guideRef: "singapore-success",
    generate(rng, tier) {
      const TAPS = ["local catchment", "imported water", "NEWater", "desalination"] as const;
      let v: number[];
      if (tier === 1) {
        // Friendly: percentages × total/100 give whole volumes
        const p = [rng.int(2, 4) * 5, rng.int(4, 8) * 5, rng.int(6, 8) * 5];
        p.push(100 - p[0] - p[1] - p[2]);
        if (p[3] <= 0) { p[1] = 30; p[2] = 30; p[0] = 20; p[3] = 20; }
        const total = rng.pick([200, 400, 500, 800, 1000]);
        v = p.map((x) => (x * total) / 100);
      } else {
        v = [rng.int(150, 450), rng.int(200, 500), rng.int(250, 600), rng.int(100, 400)];
      }
      const total = v.reduce((a, b) => a + b, 0);
      const table = `| Tap | Supply (thousand m³ per day) |\n|---|---|\n${TAPS.map((t, i) => `| ${t} | ${big(v[i])} |`).join("\n")}`;
      const k = rng.int(0, 3);
      if (tier < 3) {
        const exact = (v[k] / total) * 100;
        const ans = tier === 1 ? roundTo(exact, 0) : roundTo(exact, 1);
        const wrongTotal = v.reduce((a, b, i) => (i === k ? a : a + b), 0);
        const trapV = tier === 1 ? roundTo((v[k] / wrongTotal) * 100, 0) : roundTo((v[k] / wrongTotal) * 100, 1);
        return {
          prompt: `A water planner models a city's daily supply from four taps (simplified, made-up figures):\n\n${table}\n\nWhat percentage of the total supply comes from **${TAPS[k]}**? ${tier === 1 ? "Give your answer as a whole number." : "Give your answer to 1 decimal place."}`,
          answer: { type: "number", value: ans, display: `${num(ans)}%` },
          solution: [`Total = ${v.map(big).join(" + ")} = ${big(total)} thousand m³.`, `${TAPS[k]}: ${big(v[k])} ÷ ${big(total)} × 100 = ${num(roundTo(exact, 3))}…`, `= **${num(ans)}%**`],
          hint: "Add all four taps first — the share is out of the TOTAL.",
          traps: trapV !== ans ? [{ spec: { type: "number", value: trapV }, feedback: "You divided by the other three taps only. Divide by the total of ALL four." }] : [],
        };
      }
      // tier 3: demand grows, the extra all comes from NEWater
      const g = rng.pick([10, 15, 20, 25, 30]);
      const extra = roundTo((total * g) / 100, 1);
      const nNew = clean(v[2] + extra);
      const tNew = clean(total + extra);
      const ans = roundTo((nNew / tNew) * 100, 1);
      const old = roundTo((v[2] / total) * 100, 1);
      return {
        prompt: `A city's daily water supply (simplified, made-up figures):\n\n${table}\n\nDemand rises by ${g}% and **all** of the extra water comes from new NEWater plants. What percentage of the new total will NEWater supply? Give your answer to 1 decimal place.`,
        answer: { type: "number", value: ans, display: `${num(ans)}%` },
        solution: [
          `Old total = ${big(total)}; extra = ${g}% of ${big(total)} = ${big(extra)} thousand m³.`,
          `New NEWater = ${big(v[2])} + ${big(extra)} = ${big(nNew)}; new total = ${big(tNew)}.`,
          `${big(nNew)} ÷ ${big(tNew)} × 100 = **${num(ans)}%** (up from ${num(old)}%).`,
          "This is Singapore's plan in miniature: grow the weather-proof taps (NEWater, desalination) as demand rises.",
        ],
        hint: "Work out the extra water, add it to BOTH NEWater and the total, then find the share.",
        traps: old !== ans ? [{ spec: { type: "number", value: old }, feedback: "That's NEWater's OLD share. Add the extra water to NEWater and to the total first." }] : [],
      };
    },
  },
  {
    id: `${T}.water-per-person`,
    topicId: T,
    title: "Household water use per person per day",
    level: 2,
    guideRef: "singapore-success",
    generate(rng, tier) {
      const who = rng.pick(NAMES);
      const n = rng.int(2, 6);
      if (tier === 1) {
        const L = rng.int(110, 170);
        const w = L * n * 7;
        return {
          prompt: `${who}'s household of ${n} people uses ${big(w)} litres of water in one week. How many litres is that per person per day?`,
          answer: { type: "number", value: L },
          solution: [`Per person per week: ${big(w)} ÷ ${n} = ${big(w / n)} litres.`, `Per day: ${big(w / n)} ÷ 7 = **${L} litres**.`],
          hint: "Two divisions: by the number of people, then by the number of days.",
          traps: [
            { spec: { type: "number", value: w / n }, feedback: "That's per person per WEEK. Divide by 7 as well." },
            { spec: { type: "number", value: w / 7 }, feedback: "That's for the whole household per day. Divide by the number of people too." },
          ],
        };
      }
      if (tier === 2) {
        const days = rng.pick([7, 14, 30, 31]);
        const w = rng.int(110, 175) * n * days + rng.int(-60, 60);
        const ans = roundTo(w / (n * days), 0);
        return {
          prompt: `A water bill shows ${who}'s household of ${n} people used ${big(w)} litres in ${days} days. Work out the water use per person per day, to the nearest whole litre. Is it above or below Singapore's 2030 target of 130 litres?`,
          answer: { type: "number", value: ans, display: `${ans} litres` },
          solution: [`${big(w)} ÷ (${n} × ${days}) = ${big(w)} ÷ ${n * days} = ${num(roundTo(w / (n * days), 2))}…`, `≈ **${ans} litres per person per day** — ${ans > 130 ? "above" : ans < 130 ? "below" : "exactly on"} the 130-litre target.`],
          hint: `Divide by people × days (${n} × ${days}).`,
          traps: [{ spec: { type: "number", value: roundTo(w / days, 0) }, feedback: "That's the whole household per day — divide by the number of people too." }],
        };
      }
      // tier 3: litres per week to save to reach 130 L/person/day
      const L = rng.int(136, 180);
      const w = L * n * 7;
      const save = w - 130 * n * 7;
      return {
        prompt: `${who}'s household of ${n} people uses ${big(w)} litres a week. Singapore's target is 130 litres per person per day by 2030. How many litres a week must the household save to meet the target exactly?`,
        answer: { type: "number", value: save, display: `${big(save)} litres` },
        solution: [`Target for the household per week = 130 × ${n} × 7 = ${big(130 * n * 7)} litres.`, `Saving = ${big(w)} − ${big(130 * n * 7)} = **${big(save)} litres a week**.`, `(Check: current use is ${L} litres per person per day — ${L - 130} litres too many, × ${n} people × 7 days.)`],
        hint: "Find what the household WOULD use at 130 litres per person per day, then subtract.",
        traps: [{ spec: { type: "number", value: L - 130 }, feedback: "That's the saving per person per DAY. The question asks for the whole household per week." }],
      };
    },
  },

  // ---- las-vegas -------------------------------------------------------------
  {
    id: `${T}.las-vegas-facts`,
    topicId: T,
    title: "Las Vegas: a city in the desert",
    level: 1,
    guideRef: "las-vegas",
    generate: retrieval(LV, ["Las Vegas recall: @", "Name it.\n\n> @"], "Think about where Las Vegas gets its water and how it is trying to save it."),
  },
  {
    id: `${T}.las-vegas-water-maths`,
    topicId: T,
    title: "Desert-city water maths",
    level: 3,
    guideRef: "las-vegas",
    generate(rng, tier) {
      const mode = tier === 1 ? rng.pick(["full", "turf"] as const) : tier === 2 ? rng.pick(["full", "turf", "growth"] as const) : "total";
      if (mode === "full") {
        const cap = 32;
        const vol10 = tier === 1 ? 32 * rng.int(1, 9) : rng.int(80, 300);
        const vol = vol10 / 10;
        const ans = tier === 1 ? roundTo((vol / cap) * 100, 0) : roundTo((vol / cap) * 100, 1);
        return {
          prompt: `A desert reservoir can hold about ${cap} km³ of water. After years of drought it holds ${num(vol)} km³ (simplified figures). What percentage full is it? ${tier === 1 ? "Give a whole number." : "Give your answer to 1 decimal place."}`,
          answer: { type: "number", value: ans, display: `${num(ans)}%` },
          solution: [`% full = volume ÷ capacity × 100`, `${num(vol)} ÷ ${cap} × 100 = **${num(ans)}%**`],
          hint: "Volume now ÷ full capacity × 100.",
          traps: (() => {
            const empty = roundTo(100 - (vol / cap) * 100, tier === 1 ? 0 : 1);
            return empty !== ans ? [{ spec: { type: "number" as const, value: empty }, feedback: "That's the percentage EMPTY. The question asks how full it is." }] : [];
          })(),
        };
      }
      if (mode === "turf") {
        const area = rng.int(tier === 1 ? 2 : 3, tier === 1 ? 10 : 25) * (tier === 1 ? 10 : 4);
        const grass = rng.pick([1800, 2000, 2200, 2400]);
        const desert = rng.pick([300, 400, 500, 600]);
        const save = area * (grass - desert);
        return {
          prompt: `A family in Las Vegas replaces ${area} m² of lawn with desert plants and gravel. Assume the lawn needed ${big(grass)} litres of water per m² per year and the desert garden needs ${desert} litres per m² per year. How many litres of water a year does the family save?`,
          answer: { type: "number", value: save, display: `${big(save)} litres` },
          solution: [`Saving per m² = ${big(grass)} − ${desert} = ${big(grass - desert)} litres.`, `× ${area} m² = **${big(save)} litres a year**.`],
          hint: "Find the saving for 1 m² first, then scale up by the area.",
          traps: [{ spec: { type: "number", value: area * grass }, feedback: "That's how much the lawn USED. The desert garden still needs some water — subtract it." }],
        };
      }
      if (mode === "growth") {
        const p1 = rng.int(40, 140) * 10000;
        const p2 = p1 + rng.int(10, 120) * 10000;
        const ans = roundTo(((p2 - p1) / p1) * 100, 1);
        const wrong = roundTo(((p2 - p1) / p2) * 100, 1);
        return {
          prompt: `A desert city grew from ${big(p1)} people to ${big(p2)} people (made-up figures). Work out the percentage increase, to 1 decimal place.`,
          answer: { type: "number", value: ans, display: `${num(ans)}%` },
          solution: [`Increase = ${big(p2)} − ${big(p1)} = ${big(p2 - p1)}.`, `${big(p2 - p1)} ÷ ${big(p1)} × 100 = **${num(ans)}%**`],
          hint: "Percentage change = change ÷ ORIGINAL × 100.",
          traps: wrong !== ans ? [{ spec: { type: "number", value: wrong }, feedback: "You divided by the NEW population. Divide by the original." }] : [],
        };
      }
      // tier 3: per-person use falls while population grows — total change?
      const p1 = rng.int(15, 20) * 100000;
      const p2 = p1 + rng.int(2, 6) * 100000;
      const l1 = rng.int(85, 105) * 10;
      const l2 = l1 - rng.int(15, 40) * 10;
      const t1 = p1 * l1;
      const t2 = p2 * l2;
      const ans = roundTo(((t2 - t1) / t1) * 100, 1);
      return {
        prompt: `Made-up figures for a desert city: the population grew from ${big(p1)} to ${big(p2)}, but water-saving rules cut use from ${l1} to ${l2} litres per person per day. By what percentage did the city's TOTAL daily water use change? Give your answer to 1 decimal place, using a minus sign for a fall.`,
        answer: { type: "number", value: ans, display: `${num(ans)}%` },
        solution: [
          `Before: ${big(p1)} × ${l1} = ${big(t1)} litres a day.`,
          `After: ${big(p2)} × ${l2} = ${big(t2)} litres a day.`,
          `Change = ${big(t2 - t1)} ÷ ${big(t1)} × 100 = **${num(ans)}%**.`,
          ans < 0 ? "Total use FELL even though the city grew — conservation can outpace growth." : "Total use still ROSE — conservation slowed, but did not beat, the growth.",
        ],
        hint: "Total use = people × litres per person. Work out the total before and after, then the percentage change.",
        traps: (() => {
          const perPerson = roundTo(((l2 - l1) / l1) * 100, 1);
          return perPerson !== ans ? [{ spec: { type: "number", value: perPerson }, feedback: "That's only the change in use PER PERSON. The population grew too — compare the totals." }] : [];
        })(),
      };
    },
  },

  // ---- eco-city-design -------------------------------------------------------
  {
    id: `${T}.eco-city-features`,
    topicId: T,
    title: "Eco-city examples and design features",
    level: 2,
    guideRef: "eco-city-design",
    generate: retrieval(ECO, ["Eco-city designer: @", "Name the eco-city example or feature.\n\n> @"], "Think about transport, energy, water, waste, housing and green space."),
  },
  {
    id: `${T}.commute-carbon`,
    topicId: T,
    title: "Carbon saved by switching from car to public transport",
    level: 3,
    guideRef: "eco-city-design",
    generate(rng, tier) {
      const car = rng.pick([150, 160, 170, 180]);
      const bus = rng.pick([30, 40, 50, 60]);
      const d = rng.pick(tier === 1 ? [10, 20] : [12, 16, 18, 24, 30]);
      if (tier === 1) {
        const n = rng.int(1, 9) * 100;
        const kg = (n * d * (car - bus)) / 1000;
        return {
          prompt: `In an eco-town, ${n} commuters switch from driving to the bus. Each travels ${d} km a day. Assume a car emits ${car} g of CO₂ per passenger-km and a bus ${bus} g. How many kilograms of CO₂ are saved each day?`,
          answer: { type: "number", value: kg, display: `${big(kg)} kg` },
          solution: [`Saving per km = ${car} − ${bus} = ${car - bus} g.`, `Total = ${n} × ${d} × ${car - bus} = ${big(n * d * (car - bus))} g.`, `÷ 1,000 = **${big(kg)} kg** a day.`],
          hint: "Saving per km × km per person × people, then grams → kilograms (÷ 1,000).",
          traps: [{ spec: { type: "number", value: n * d * (car - bus) }, feedback: "That's in GRAMS. Divide by 1,000 for kilograms." }, { spec: { type: "number", value: (n * d * car) / 1000 }, feedback: "The bus still emits some CO₂ — use the DIFFERENCE between car and bus." }],
        };
      }
      if (tier === 2) {
        const n = rng.int(2, 30) * 100;
        const days = 250;
        const t = roundTo((n * d * (car - bus) * days) / 1000000, 1);
        return {
          prompt: `${big(n)} residents of a new town switch from car to MRT for a ${d} km daily commute, on ${days} working days a year. Assume ${car} g CO₂ per passenger-km by car and ${bus} g by train. How many **tonnes** of CO₂ are saved per year? Give your answer to 1 decimal place.`,
          answer: { type: "number", value: t, display: `${big(t)} tonnes` },
          solution: [`Per day: ${big(n)} × ${d} × (${car} − ${bus}) = ${big(n * d * (car - bus))} g.`, `Per year: × ${days} = ${big(n * d * (car - bus) * days)} g.`, `1 tonne = 1,000,000 g, so ≈ **${big(t)} tonnes**.`],
          hint: "Work in grams, then divide by 1,000,000 to get tonnes.",
          traps: [{ spec: { type: "number", value: roundTo((n * d * (car - bus) * days) / 1000, 1) }, feedback: "That's kilograms. 1 tonne = 1,000 kg." }],
        };
      }
      const s = rng.pick([10, 15, 20, 25, 30, 35, 40]);
      const ans = roundTo((s * (car - bus)) / car, 1);
      return {
        prompt: `In a city, every commuter currently drives (${car} g CO₂ per passenger-km). A new BRT line persuades ${s}% of them to switch to buses (${bus} g per passenger-km), travelling the same distance. By what percentage do total commuting emissions fall? Give your answer to 1 decimal place.`,
        answer: { type: "number", value: ans, display: `${num(ans)}%` },
        solution: [
          "Imagine 100 commuters each travelling 1 km.",
          `Before: 100 × ${car} = ${big(100 * car)} g.  After: ${100 - s} × ${car} + ${s} × ${bus} = ${big((100 - s) * car + s * bus)} g.`,
          `Fall = ${big(s * (car - bus))} ÷ ${big(100 * car)} × 100 = **${num(ans)}%**.`,
          "Emissions fall by less than the share who switch, because buses still emit some CO₂.",
        ],
        hint: "Imagine 100 commuters each going 1 km. Find total grams before and after.",
        traps: [{ spec: { type: "number", value: s }, feedback: `Not quite — the ${s}% who switch still produce some CO₂ on the bus, so the fall is smaller.` }],
      };
    },
  },
];
