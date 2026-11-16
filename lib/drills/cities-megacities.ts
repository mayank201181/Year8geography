// Skill drills for "Cities & Megacities" — retrieval fact banks + numeric skills.
import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { num, big, roundTo, clean } from "./helpers.ts";

const T = "cities-megacities";

// ---------------------------------------------------------------------------
// Fact banks
// ---------------------------------------------------------------------------

interface Term {
  term: string;
  accept: string[];
  /** Several clue phrasings for the same term. */
  clues: string[];
  /** true = harder term, used more at tier 3. */
  hard?: boolean;
}

const TERMS: Term[] = [
  { term: "settlement", accept: ["settlement"], clues: ["Give the term for any place where people live, from a single farm to a huge city.", "What is the general word for a place where people live and work?"] },
  { term: "urban", accept: ["urban"], clues: ["Give the word that describes built-up areas such as towns and cities.", "Which word describes a town or city area, the opposite of rural?"] },
  { term: "rural", accept: ["rural"], clues: ["Give the word that describes the countryside, with farms, villages and few buildings.", "Which word means 'countryside', the opposite of urban?"] },
  { term: "urbanisation", accept: ["urbanisation", "urbanization"], clues: ["Give the term for the increase in the PROPORTION (share) of a country's people living in towns and cities.", "What is the name for the process by which a growing share of people come to live in urban areas?"] },
  { term: "settlement hierarchy", accept: ["settlement hierarchy", "hierarchy of settlements", "hierarchy"], clues: ["Give the term for ranking settlements in order of size and number of services, from hamlet to megacity.", "What do geographers call the 'ladder' that orders settlements by population and services?"] },
  { term: "megacity", accept: ["megacity", "mega city", "mega-city"], clues: ["Give the term for an urban area with more than 10 million people.", "What do we call a city region whose population is over 10 million?"] },
  { term: "conurbation", accept: ["conurbation"], clues: ["Give the term for a large urban area formed when several towns and cities grow outwards and merge together.", "What is the name for a continuous built-up area made of neighbouring towns that have joined up?"], hard: true },
  { term: "hamlet", accept: ["hamlet"], clues: ["Give the name for the smallest type of settlement: a handful of houses, usually with no services at all.", "Above a single isolated farm, which is the smallest named settlement type on the hierarchy — just a few houses and no services?"] },
  { term: "services", accept: ["services", "service"], clues: ["Give the word for things such as shops, schools, hospitals and banks that a settlement provides for people.", "Larger settlements have more of these — shops, clinics, schools, banks. What are they called?"], hard: true },
  { term: "sphere of influence", accept: ["sphere of influence", "catchment area", "catchment"], clues: ["Give the term for the area around a settlement from which people travel in to use its services.", "What is the name for the surrounding area a city 'pulls' shoppers and workers from?"], hard: true },
  { term: "Central Business District", accept: ["central business district", "cbd"], clues: ["Give the name of the zone at the centre of a city with offices, banks, big shops and the highest land values.", "Which city zone has the tallest buildings, the most offices and the most expensive land?"] },
  { term: "suburbs", accept: ["suburbs", "suburb", "suburbia"], clues: ["Give the name of the mainly residential zone on the outer edge of a city, with newer housing and more green space.", "Which city zone, towards the edge, is mostly housing where many commuters live?"] },
  { term: "inner city", accept: ["inner city", "inner-city", "inner urban area"], clues: ["Give the name of the zone just outside the CBD, often with older, high-density housing and old factory sites.", "Which zone lies between the CBD and the suburbs and often has older terraced or high-density housing?"] },
  { term: "rural–urban fringe", accept: ["rural-urban fringe", "rural urban fringe", "rural–urban fringe", "urban fringe", "urban-rural fringe"], clues: ["Give the name of the zone at the very edge of a city where built-up land meets the countryside.", "Where do you find out-of-town retail parks, golf courses and farmland side by side at a city's edge?"], hard: true },
  { term: "rural–urban migration", accept: ["rural-urban migration", "rural urban migration", "rural–urban migration", "rural to urban migration"], clues: ["Give the term for the movement of people from the countryside into towns and cities.", "What is the name for people moving from villages to cities to find work?"] },
  { term: "natural increase", accept: ["natural increase", "natural growth"], clues: ["Give the term for population growth caused by births being higher than deaths.", "When a city grows because more babies are born than people die, what is this growth called?"] },
  { term: "push factor", accept: ["push factor", "push factors", "push"], clues: ["Give the term for a reason that makes people want to LEAVE where they live.", "Drought, poverty and conflict in the countryside are examples of which type of migration factor?"] },
  { term: "pull factor", accept: ["pull factor", "pull factors", "pull"], clues: ["Give the term for a reason that ATTRACTS people to move to a new place.", "Jobs, schools and hospitals in a city are examples of which type of migration factor?"] },
  { term: "counter-urbanisation", accept: ["counter-urbanisation", "counter urbanisation", "counterurbanisation", "counter-urbanization", "counter urbanization", "counterurbanization"], clues: ["Give the term for people moving OUT of large cities to smaller towns and villages in the countryside.", "In many high-income countries, people leave big cities for quieter rural areas. What is this called?"], hard: true },
  { term: "urban sprawl", accept: ["urban sprawl", "sprawl"], clues: ["Give the term for the unplanned spread of a city outwards into the surrounding countryside.", "What is it called when a city spreads outwards, swallowing farmland at its edge?"], hard: true },
  { term: "informal settlement", accept: ["informal settlement", "informal settlements", "slum", "shanty town", "squatter settlement"], clues: ["Give the term for an area of self-built homes, often without legal ownership, clean water or sanitation, common in fast-growing cities in LICs and NEEs.", "What is the general name for unplanned housing that migrants build themselves on spare land?"], hard: true },
  { term: "commuter", accept: ["commuter", "commuters"], clues: ["Give the word for a person who travels into a city to work each day from where they live, often the suburbs.", "What do we call someone who travels regularly between home and work, e.g. by MRT every morning?"] },
  { term: "traffic congestion", accept: ["traffic congestion", "congestion", "traffic jams", "traffic jam"], clues: ["Give the term for when too many vehicles are on the roads, so traffic slows or stops.", "Which city challenge is reduced by road pricing such as Singapore's ERP?"] },
  { term: "infrastructure", accept: ["infrastructure"], clues: ["Give the term for the basic systems a city needs to work: roads, railways, water pipes, sewers and power lines.", "What word covers a city's roads, rail, pipes and power networks all together?"], hard: true },
  { term: "brownfield site", accept: ["brownfield site", "brownfield", "brownfield land"], clues: ["Give the term for land in a city that has been built on before (e.g. an old factory site) and can be redeveloped.", "What is the opposite of a greenfield site — previously developed land ready to be reused?"], hard: true },
  { term: "greenfield site", accept: ["greenfield site", "greenfield", "greenfield land"], clues: ["Give the term for land that has never been built on, usually farmland at the edge of a city.", "What is the opposite of a brownfield site — undeveloped land, often in the countryside?"], hard: true },
];

const HIERARCHY = ["hamlet", "village", "town", "city", "conurbation", "megacity"] as const;
const HIER_ACCEPT: Record<string, string[]> = {
  hamlet: ["hamlet"],
  village: ["village"],
  town: ["town"],
  city: ["city"],
  conurbation: ["conurbation"],
  megacity: ["megacity", "mega city", "mega-city"],
};

interface Zone {
  name: string;
  accept: string[];
}
const ZONES: Record<string, Zone> = {
  cbd: { name: "Central Business District (CBD)", accept: ["cbd", "central business district"] },
  inner: { name: "inner city", accept: ["inner city", "inner-city", "inner urban area"] },
  suburbs: { name: "suburbs", accept: ["suburbs", "suburb", "suburbia"] },
  fringe: { name: "rural–urban fringe", accept: ["rural-urban fringe", "rural urban fringe", "rural–urban fringe", "urban fringe"] },
};
const ZONE_CLUES: Array<{ z: keyof typeof ZONES; clue: string; hard?: boolean }> = [
  { z: "cbd", clue: "the tallest buildings and most office blocks in the city" },
  { z: "cbd", clue: "the highest land values, so buildings go upwards rather than outwards" },
  { z: "cbd", clue: "the main banks, department stores, theatres and government offices" },
  { z: "cbd", clue: "very few people actually living there, but huge numbers arriving each weekday to work" },
  { z: "cbd", clue: "the point where most bus and rail lines meet, making it the most accessible place in the city" },
  { z: "cbd", clue: "Raffles Place and Marina Bay in Singapore", hard: true },
  { z: "inner", clue: "old, high-density housing built close together near the city centre" },
  { z: "inner", clue: "old factories and warehouses, some now empty or being turned into flats", hard: true },
  { z: "inner", clue: "the zone just outside the city centre, between the CBD and the suburbs" },
  { z: "inner", clue: "brownfield sites being redeveloped for new apartments and offices", hard: true },
  { z: "inner", clue: "a mix of older housing and industry, built when workers needed to live within walking distance of factories", hard: true },
  { z: "suburbs", clue: "mainly housing, with gardens or parks, on the outer edge of the built-up area" },
  { z: "suburbs", clue: "lower building density than the centre and lots of commuters" },
  { z: "suburbs", clue: "neighbourhood shopping parades, schools and parks serving people who live there" },
  { z: "suburbs", clue: "newer, more spacious housing built as transport links (trams, rail, cars) let people live further out" },
  { z: "suburbs", clue: "quiet residential streets from which people travel into the CBD each morning" },
  { z: "fringe", clue: "fields and farmland right next to brand-new housing estates, where the city meets the countryside" },
  { z: "fringe", clue: "golf courses, out-of-town retail parks and farmland side by side", hard: true },
  { z: "fringe", clue: "the lowest land values, so large, low buildings and car parks are affordable" },
  { z: "fringe", clue: "pressure from urban sprawl as new housing estates are built on greenfield sites", hard: true },
  { z: "fringe", clue: "sewage works, airports and landfill sites placed away from where most people live", hard: true },
];

const OPP_CHAL: Array<{ text: string; kind: "opportunity" | "challenge" }> = [
  { text: "a wide choice of jobs in offices, shops and factories", kind: "opportunity" },
  { text: "better-paid work than on small farms", kind: "opportunity" },
  { text: "access to universities and secondary schools", kind: "opportunity" },
  { text: "large hospitals with specialist doctors", kind: "opportunity" },
  { text: "museums, theatres, concerts and sports stadiums", kind: "opportunity" },
  { text: "frequent public transport such as metro and buses", kind: "opportunity" },
  { text: "fast internet and good mobile phone coverage", kind: "opportunity" },
  { text: "piped clean water and electricity in most homes", kind: "opportunity" },
  { text: "meeting people from many different cultures", kind: "opportunity" },
  { text: "many shops, markets and restaurants close together", kind: "opportunity" },
  { text: "a big market of customers for someone starting a small business", kind: "opportunity" },
  { text: "airports and ports linking the city to the rest of the world", kind: "opportunity" },
  { text: "traffic congestion that makes journeys slow", kind: "challenge" },
  { text: "air pollution from vehicles and factories", kind: "challenge" },
  { text: "very high rents and house prices", kind: "challenge" },
  { text: "overcrowded informal settlements without sanitation", kind: "challenge" },
  { text: "a widening gap between rich and poor neighbourhoods", kind: "challenge" },
  { text: "huge amounts of rubbish that must be collected and disposed of", kind: "challenge" },
  { text: "noise from traffic and construction late into the night", kind: "challenge" },
  { text: "the urban heat island effect making the city hotter than the countryside", kind: "challenge" },
  { text: "water and power supplies that cannot keep up with demand", kind: "challenge" },
  { text: "crime that is higher in some neighbourhoods", kind: "challenge" },
  { text: "loss of green space as land is built on", kind: "challenge" },
  { text: "flooding because concrete stops rain soaking into the ground", kind: "challenge" },
  { text: "long, crowded commutes at rush hour", kind: "challenge" },
  { text: "many people working in the informal economy with no job security", kind: "challenge" },
];

const MEGACITIES: Array<{ city: string; country: string[]; continent?: string[] }> = [
  { city: "Tokyo", country: ["Japan"], continent: ["Asia"] },
  { city: "Osaka", country: ["Japan"], continent: ["Asia"] },
  { city: "Delhi", country: ["India"], continent: ["Asia"] },
  { city: "Mumbai", country: ["India"], continent: ["Asia"] },
  { city: "Kolkata", country: ["India"], continent: ["Asia"] },
  { city: "Shanghai", country: ["China"], continent: ["Asia"] },
  { city: "Beijing", country: ["China"], continent: ["Asia"] },
  { city: "Chongqing", country: ["China"], continent: ["Asia"] },
  { city: "Guangzhou", country: ["China"], continent: ["Asia"] },
  { city: "Dhaka", country: ["Bangladesh"], continent: ["Asia"] },
  { city: "Karachi", country: ["Pakistan"], continent: ["Asia"] },
  { city: "Lahore", country: ["Pakistan"], continent: ["Asia"] },
  { city: "Manila", country: ["Philippines", "the Philippines"], continent: ["Asia"] },
  { city: "Jakarta", country: ["Indonesia"], continent: ["Asia"] },
  { city: "Bangkok", country: ["Thailand"], continent: ["Asia"] },
  { city: "Cairo", country: ["Egypt"], continent: ["Africa"] },
  { city: "Lagos", country: ["Nigeria"], continent: ["Africa"] },
  { city: "Kinshasa", country: ["DR Congo", "Democratic Republic of the Congo", "DRC", "Democratic Republic of Congo"], continent: ["Africa"] },
  { city: "São Paulo", country: ["Brazil"], continent: ["South America"] },
  { city: "Rio de Janeiro", country: ["Brazil"], continent: ["South America"] },
  { city: "Buenos Aires", country: ["Argentina"], continent: ["South America"] },
  { city: "Bogotá", country: ["Colombia"], continent: ["South America"] },
  { city: "Lima", country: ["Peru"], continent: ["South America"] },
  { city: "Mexico City", country: ["Mexico"], continent: ["North America"] },
  { city: "New York", country: ["USA", "United States", "United States of America", "America", "US"], continent: ["North America"] },
  { city: "Los Angeles", country: ["USA", "United States", "United States of America", "America", "US"], continent: ["North America"] },
  { city: "Moscow", country: ["Russia"], continent: ["Europe"] },
  { city: "Paris", country: ["France"], continent: ["Europe"] },
  { city: "Istanbul", country: ["Turkey", "Türkiye", "Turkiye"] },
];

const PUSH_PULL: Array<{ text: string; kind: "push" | "pull"; hard?: boolean }> = [
  { text: "drought has made crops fail in the village", kind: "push" },
  { text: "there are few jobs apart from farming in the countryside", kind: "push" },
  { text: "the nearest secondary school is a day's walk away", kind: "push" },
  { text: "there is no doctor or clinic in the village", kind: "push" },
  { text: "conflict and violence have broken out in the region", kind: "push" },
  { text: "farm wages are very low", kind: "push" },
  { text: "farm machinery has replaced many farm workers", kind: "push", hard: true },
  { text: "the family's land is too small to split between all the children", kind: "push", hard: true },
  { text: "floods keep destroying homes in the river valley", kind: "push" },
  { text: "there is no electricity or piped water in the village", kind: "push" },
  { text: "soil erosion has made the land less fertile", kind: "push", hard: true },
  { text: "a landowner has taken back the land the family farmed", kind: "push", hard: true },
  { text: "factories in the city are hiring workers", kind: "pull" },
  { text: "the city has universities and good secondary schools", kind: "pull" },
  { text: "big hospitals in the city offer better healthcare", kind: "pull" },
  { text: "relatives already living in the city can help newcomers settle", kind: "pull", hard: true },
  { text: "wages in the city are higher than on the farm", kind: "pull" },
  { text: "the 'bright lights' of the city: entertainment, shops and nightlife", kind: "pull" },
  { text: "the city has piped water and electricity", kind: "pull" },
  { text: "there are many ways to earn money in the informal economy, e.g. street selling", kind: "pull", hard: true },
  { text: "the city feels safer than the conflict zone back home", kind: "pull", hard: true },
  { text: "stories from friends who say life in the city is better", kind: "pull", hard: true },
  { text: "the city has better public transport and roads", kind: "pull" },
  { text: "there are more chances of finding a job in offices and shops in the city", kind: "pull" },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function textAnswer(accept: string[], display?: string) {
  return { type: "text" as const, accept, display: display ?? accept[0] };
}

const CITY_NAMES = ["Riverton", "Port Amara", "Kesu", "Nova Vale", "Ashbridge", "Laketon", "Selvia", "Mbara", "Torrin", "Ostava", "Kalam", "Brightwater"];
const COUNTRY_NAMES = ["Country A", "Country B", "Country C", "Country X", "Country Y", "Country Z"];

function pickTerm(rng: Rng, tier: 1 | 2 | 3): Term {
  const easy = TERMS.filter((t) => !t.hard);
  const hard = TERMS.filter((t) => t.hard);
  if (tier === 1) return rng.pick(easy);
  if (tier === 3) return rng.bool(0.7) ? rng.pick(hard) : rng.pick(TERMS);
  return rng.pick(TERMS);
}

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // ---- Level 1 ---------------------------------------------------------
  {
    id: `${T}.key-terms`,
    topicId: T,
    title: "Cities key terms",
    level: 1,
    guideRef: "what-is-a-city",
    generate(rng, tier) {
      const t = pickTerm(rng, tier);
      const clue = rng.pick(t.clues);
      const traps: Trap[] = [];
      if (t.term === "urbanisation") traps.push({ spec: { type: "text", accept: ["urban growth"] }, feedback: "Urban growth is the increase in the NUMBER of people in cities. Urbanisation is the increase in the PROPORTION (share) of people living in urban areas." });
      if (t.term === "megacity") traps.push({ spec: { type: "text", accept: ["conurbation"] }, feedback: "A conurbation is towns that have merged together; it can be any size. A megacity is defined by population: over 10 million." });
      if (t.term === "conurbation") traps.push({ spec: { type: "text", accept: ["megacity"] }, feedback: "A megacity is defined by size (10 million+). A conurbation is defined by towns merging into one built-up area." });
      if (t.term === "push factor") traps.push({ spec: { type: "text", accept: ["pull factor", "pull"] }, feedback: "Pull factors attract people TO a place. This one makes people want to leave." });
      if (t.term === "pull factor") traps.push({ spec: { type: "text", accept: ["push factor", "push"] }, feedback: "Push factors drive people AWAY from a place. This one attracts them." });
      if (t.term === "counter-urbanisation") traps.push({ spec: { type: "text", accept: ["urbanisation", "urbanization"] }, feedback: "Urbanisation is the growing share of people in cities. This is the opposite movement — out of cities." });
      return {
        prompt: clue,
        answer: textAnswer(t.accept, t.term),
        solution: [`The answer is **${t.term}**.`, `Definition: ${t.clues[0].replace(/^Give the (term|word|name) (for|of|that describes) /i, "")}`],
        hint: "Think about the key words in the Cities knowledge organiser — is it about a place, a zone, a process or a type of migration?",
        traps,
      };
    },
  },
  {
    id: `${T}.settlement-hierarchy`,
    topicId: T,
    title: "Order the settlement hierarchy",
    level: 1,
    guideRef: "what-is-a-city",
    generate(rng, tier) {
      const k = tier === 1 ? 3 : 4;
      // Conurbation vs megacity is a size-of-built-up-area vs population distinction, so never compare those two directly.
      let chosen = rng.shuffle([...HIERARCHY]).slice(0, k);
      for (let i = 0; i < 20 && chosen.includes("conurbation") && chosen.includes("megacity"); i++) chosen = rng.shuffle([...HIERARCHY]).slice(0, k);
      const mode = rng.pick(tier === 3 ? ["largest", "smallest", "most", "fewest", "second"] as const : ["largest", "smallest", "most", "fewest"] as const);
      const sorted = [...chosen].sort((a, b) => HIERARCHY.indexOf(a) - HIERARCHY.indexOf(b));
      let ans: string;
      let q: string;
      if (mode === "largest") { ans = sorted[sorted.length - 1]; q = "Which of these settlement types has the LARGEST population?"; }
      else if (mode === "smallest") { ans = sorted[0]; q = "Which of these settlement types has the SMALLEST population?"; }
      else if (mode === "most") { ans = sorted[sorted.length - 1]; q = "Which of these settlement types usually has the MOST services (shops, schools, hospitals)?"; }
      else if (mode === "fewest") { ans = sorted[0]; q = "Which of these settlement types usually has the FEWEST services?"; }
      else { ans = sorted[sorted.length - 2]; q = "Which of these settlement types is SECOND largest?"; }
      const wrong = mode === "largest" || mode === "most" ? sorted[0] : sorted[sorted.length - 1];
      return {
        prompt: `${q}\n\n${chosen.join(" · ")}`,
        answer: textAnswer(HIER_ACCEPT[ans], ans),
        solution: [
          "Settlement hierarchy (smallest → largest): hamlet → village → town → city → conurbation → megacity.",
          `In order these are: ${sorted.join(" → ")}. So the answer is **${ans}**.`,
          "As settlements get bigger they have more people AND more (and more specialised) services.",
        ],
        hint: "Put them in order from smallest to largest first — start from the hamlet end.",
        traps: wrong !== ans ? [{ spec: { type: "text", accept: HIER_ACCEPT[wrong] }, feedback: `That is at the wrong end of the hierarchy — read the question again (largest/smallest, most/fewest).` }] : [],
      };
    },
  },
  {
    id: `${T}.opportunity-or-challenge`,
    topicId: T,
    title: "City life: opportunity or challenge?",
    level: 1,
    guideRef: "characteristics-of-cities",
    generate(rng, tier) {
      const item = rng.pick(OPP_CHAL);
      const who = rng.pick(["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana"]);
      const frame = tier === 1
        ? `Is this an **opportunity** or a **challenge** of living in a big city?\n\n> ${item.text}`
        : `${who} lists features of life in a megacity. Classify this one as an **opportunity** or a **challenge**:\n\n> ${item.text}`;
      const other = item.kind === "opportunity" ? "challenge" : "opportunity";
      return {
        prompt: frame,
        answer: textAnswer(item.kind === "opportunity" ? ["opportunity", "opportunities", "good", "positive", "benefit", "advantage"] : ["challenge", "challenges", "bad", "negative", "problem", "disadvantage"], item.kind),
        solution: [
          `**${item.kind[0].toUpperCase() + item.kind.slice(1)}** — ${item.kind === "opportunity" ? "it is something that attracts people and improves their lives." : "it is a problem caused by many people and activities crowded into one place."}`,
          "Cities concentrate people: that creates opportunities (jobs, services, culture) AND challenges (congestion, pollution, housing costs, inequality).",
        ],
        hint: "Would this make someone want to move to the city, or make city life harder?",
        traps: [{ spec: { type: "text", accept: [other] }, feedback: item.kind === "opportunity" ? "This one benefits people — it is one of the reasons cities attract migrants." : "This one makes city life harder — it is a result of so many people in one place." }],
      };
    },
  },
  {
    id: `${T}.push-or-pull`,
    topicId: T,
    title: "Push or pull factor?",
    level: 1,
    guideRef: "causes-of-urbanisation",
    generate(rng, tier) {
      const pool = tier === 1 ? PUSH_PULL.filter((p) => !p.hard) : tier === 3 ? PUSH_PULL.filter((p) => p.hard || rng.bool(0.3)) : PUSH_PULL;
      const item = rng.pick(pool.length ? pool : PUSH_PULL);
      const who = rng.pick(["Ravi", "Zara", "Jun", "Siti", "Arjun", "Hana", "Marcus", "Priya"]);
      const prompt = tier === 1 && rng.bool()
        ? `Is this a **push** factor or a **pull** factor for rural–urban migration?\n\n> ${item.text}`
        : `${who} is thinking about moving from a village to a big city. Is this a **push** or a **pull** factor?\n\n> ${item.text}`;
      const other = item.kind === "push" ? "pull" : "push";
      return {
        prompt,
        answer: textAnswer(item.kind === "push" ? ["push", "push factor"] : ["pull", "pull factor"], `${item.kind} factor`),
        solution: [
          item.kind === "push"
            ? "It describes a problem in the place people LEAVE (the countryside) — so it pushes them away."
            : "It describes something good in the place people move TO (the city) — so it pulls them in.",
          "Push = reasons to leave the origin. Pull = attractions of the destination.",
        ],
        hint: "Is this describing the village (where they leave) or the city (where they go)?",
        traps: [{ spec: { type: "text", accept: [other, `${other} factor`] }, feedback: item.kind === "push" ? "Pull factors are attractions of the destination. This is a problem at home, in the countryside." : "Push factors are problems at home. This is an attraction of the city." }],
      };
    },
  },
  {
    id: `${T}.percent-urban`,
    topicId: T,
    title: "Calculate the % of people living in urban areas",
    level: 1,
    guideRef: "what-is-a-city",
    generate(rng, tier) {
      const name = rng.pick(COUNTRY_NAMES);
      if (tier === 1) {
        // Total a friendly number, urban a whole percentage of it.
        const total = rng.pick([10, 20, 40, 50, 80, 100, 200]) * 1_000_000;
        const pct = rng.int(2, 19) * 5;
        const urban = (total * pct) / 100;
        return {
          prompt: `${name} has ${big(total)} people. ${big(urban)} of them live in towns and cities. What percentage of the population is urban? Give your answer as a whole number.`,
          answer: { type: "number", value: pct, display: `${pct}%` },
          solution: [`% urban = urban population ÷ total population × 100`, `= ${big(urban)} ÷ ${big(total)} × 100 = **${pct}%**`],
          hint: "Divide the urban population by the TOTAL population, then multiply by 100.",
          traps: 100 - pct !== pct ? [{ spec: { type: "number", value: 100 - pct }, feedback: "That is the RURAL percentage. The question asks for urban." }] : [],
        };
      }
      if (tier === 2) {
        const rural = rng.int(12, 90) * 100_000;
        const urban = rng.int(12, 90) * 100_000;
        const total = rural + urban;
        const pct = roundTo((urban / total) * 100, 0);
        const wrong = roundTo((urban / rural) * 100, 0);
        return {
          prompt: `In ${name}, ${big(urban)} people live in urban areas and ${big(rural)} live in rural areas. What percentage of the population is urban? Give your answer to the nearest whole number.`,
          answer: { type: "number", value: pct, display: `${pct}%` },
          solution: [`Total population = ${big(urban)} + ${big(rural)} = ${big(total)}`, `% urban = ${big(urban)} ÷ ${big(total)} × 100 = ${num(roundTo((urban / total) * 100, 2))}… ≈ **${pct}%**`],
          hint: "First find the total population: urban + rural.",
          traps: wrong !== pct ? [{ spec: { type: "number", value: wrong }, feedback: "You divided urban by RURAL. Divide by the TOTAL population (urban + rural)." }] : [],
        };
      }
      // Tier 3: reverse — given % urban and total, find rural number (in millions, 1 dp).
      const totalM = rng.int(20, 300) / 2; // 10.0 – 150.0 million, halves
      const pct = rng.int(25, 92);
      const ruralM = roundTo((totalM * (100 - pct)) / 100, 1);
      const urbanM = roundTo((totalM * pct) / 100, 1);
      return {
        prompt: `${name} has ${num(totalM)} million people and is ${pct}% urban. How many people live in RURAL areas? Give your answer in millions to 1 decimal place.`,
        answer: { type: "number", value: ruralM, display: `${num(ruralM)} million` },
        solution: [`% rural = 100 − ${pct} = ${100 - pct}%`, `Rural population = ${num(totalM)} × ${100 - pct} ÷ 100 = ${num(clean((totalM * (100 - pct)) / 100))} ≈ **${num(ruralM)} million**`],
        hint: "If a share is urban, the rest is rural. Find the rural percentage first.",
        traps: urbanM !== ruralM ? [{ spec: { type: "number", value: urbanM }, feedback: "That is the URBAN population. Use 100 − % urban to find the rural share." }] : [],
      };
    },
  },
  // ---- Level 2 ---------------------------------------------------------
  {
    id: `${T}.land-use-zones`,
    topicId: T,
    title: "Identify the urban land-use zone",
    level: 2,
    guideRef: "characteristics-of-cities",
    generate(rng, tier) {
      const pool = tier === 1 ? ZONE_CLUES.filter((c) => !c.hard) : tier === 3 ? ZONE_CLUES.filter((c) => c.hard || rng.bool(0.25)) : ZONE_CLUES;
      const c = rng.pick(pool.length ? pool : ZONE_CLUES);
      const z = ZONES[c.z];
      const lead = rng.pick(["Name the urban zone that has", "Which zone of a city is known for", "In a typical city land-use model, which zone has"]);
      const confuse = c.z === "cbd" ? "inner" : c.z === "inner" ? "cbd" : c.z === "suburbs" ? "fringe" : "suburbs";
      return {
        prompt: `${lead} ${c.clue}?\n\nChoose from: CBD · inner city · suburbs · rural–urban fringe`,
        answer: textAnswer(z.accept, z.name),
        solution: [
          `**${z.name}**.`,
          "From the centre outwards: CBD → inner city → suburbs → rural–urban fringe. Land values and building density usually fall as you move out from the centre.",
        ],
        hint: "Picture walking from the city centre outwards. Where would this feature be — and why (land price, age of buildings, space)?",
        traps: [{ spec: { type: "text", accept: ZONES[confuse].accept }, feedback: `Not quite — the ${ZONES[confuse].name} is a neighbouring zone. Think about land value, building age and how much space there is.` }],
      };
    },
  },
  {
    id: `${T}.megacity-countries`,
    topicId: T,
    title: "Locate the megacity",
    level: 2,
    guideRef: "megacities",
    generate(rng, tier) {
      const m = rng.pick(MEGACITIES);
      const askContinent = tier !== 3 && !!m.continent && rng.bool(tier === 1 ? 0.5 : 0.35);
      if (askContinent && m.continent) {
        return {
          prompt: `${m.city} is one of the world's megacities (over 10 million people). On which continent is it?`,
          answer: textAnswer(m.continent, m.continent[0]),
          solution: [`${m.city} is in ${m.country[0]}, which is in **${m.continent[0]}**.`, "Most of the world's megacities are in Asia — and many of the fastest-growing are in lower-income countries in Asia and Africa."],
          hint: "Work out the country first, then the continent.",
        };
      }
      const lead = tier === 3 ? `${m.city} has a population of more than 10 million. Name the country it is in.` : `In which country is the megacity ${m.city}?`;
      return {
        prompt: lead,
        answer: textAnswer(m.country, m.country[0]),
        solution: [`${m.city} is in **${m.country[0]}**.`, "Use an atlas: find the city, then read the country it is in."],
        hint: "Think of the country's other famous cities — or picture it on a world map.",
      };
    },
  },
  {
    id: `${T}.percent-growth`,
    topicId: T,
    title: "Calculate the percentage growth of a city",
    level: 2,
    guideRef: "megacities",
    generate(rng, tier) {
      const city = rng.pick(CITY_NAMES);
      const y1 = rng.pick([1970, 1980, 1990, 2000]);
      const y2 = y1 + rng.pick([10, 20, 30]);
      let a: number, b: number, value: number, dpText: string;
      if (tier === 1) {
        a = rng.int(1, 10) * 1_000_000;
        const p = rng.pick([10, 20, 25, 40, 50, 60, 75, 80, 100, 150, 200]);
        b = (a * (100 + p)) / 100;
        value = p;
        dpText = "";
      } else {
        a = rng.int(15, 120) * 100_000;
        b = a + rng.int(3, 150) * 100_000;
        value = roundTo(((b - a) / a) * 100, tier === 2 ? 0 : 1);
        dpText = tier === 2 ? " Give your answer to the nearest whole number." : " Give your answer to 1 decimal place.";
      }
      const inc = b - a;
      const wrong = roundTo((inc / b) * 100, tier === 3 ? 1 : 0);
      const traps: Trap[] = wrong !== value ? [{ spec: { type: "number", value: wrong }, feedback: "You divided by the NEW population. Percentage change always divides by the ORIGINAL (starting) value." }] : [];
      return {
        prompt: `The population of ${city} grew from ${big(a)} in ${y1} to ${big(b)} in ${y2}. Calculate the percentage increase.${dpText}`,
        answer: { type: "number", value, display: `${num(value)}%` },
        solution: [
          `Increase = ${big(b)} − ${big(a)} = ${big(inc)}`,
          `% increase = increase ÷ original × 100 = ${big(inc)} ÷ ${big(a)} × 100`,
          `= **${num(value)}%**`,
        ],
        hint: "Find the increase first, then divide by the ORIGINAL population.",
        traps,
      };
    },
  },
  // ---- Level 3 ---------------------------------------------------------
  {
    id: `${T}.years-to-megacity`,
    topicId: T,
    title: "When will it become a megacity?",
    level: 3,
    guideRef: "megacities",
    generate(rng, tier) {
      const city = rng.pick(CITY_NAMES);
      const start = rng.pick([2020, 2022, 2024, 2025]);
      // Population in tenths of a million; growth in tenths of a million per year.
      const pop10 = tier === 1 ? rng.int(5, 9) * 10 : rng.int(50, 96);
      const g10 = tier === 1 ? rng.pick([1, 2, 5]) : tier === 2 ? rng.int(1, 6) : rng.int(2, 9);
      const gap10 = 100 - pop10;
      const years = Math.ceil(gap10 / g10);
      const year = start + years;
      const pop = pop10 / 10, g = g10 / 10, gap = gap10 / 10;
      if (tier === 3) {
        return {
          prompt: `In ${start}, ${city} had ${num(pop)} million people and was growing by about ${num(g)} million people per year. If this steady growth continues, in which year will it first reach 10 million people (megacity size)?`,
          answer: { type: "number", value: year, allowFraction: false },
          solution: [
            "A megacity has 10 million or more people.",
            `Gap = 10 − ${num(pop)} = ${num(gap)} million`,
            `Years needed = ${num(gap)} ÷ ${num(g)} ${gap10 % g10 === 0 ? "=" : "≈"} ${num(roundTo(gap10 / g10, 2))} → round UP to ${years} whole years (the threshold is only reached after the full number of years).`,
            `${start} + ${years} = **${year}**`,
          ],
          hint: "What population makes a megacity? Find the gap, then how many years of growth fill it.",
          traps: years > 0 ? [{ spec: { type: "number", value: years }, feedback: `${years} is the number of YEARS. Add it to ${start} to get the year.` }] : [],
        };
      }
      return {
        prompt: `${city} has ${num(pop)} million people and grows by ${num(g)} million people each year. How many whole years until it reaches 10 million (megacity size)?${gap10 % g10 !== 0 ? " Round up to the next whole year." : ""}`,
        answer: { type: "number", value: years },
        solution: [
          `Gap to megacity size = 10 − ${num(pop)} = ${num(gap)} million`,
          gap10 % g10 === 0 ? `Years = ${num(gap)} ÷ ${num(g)} = **${years}**` : `Years = ${num(gap)} ÷ ${num(g)} ≈ ${num(roundTo(gap10 / g10, 2))} → round up to **${years}**`,
        ],
        hint: "Find how many more millions it needs, then divide by the growth each year.",
      };
    },
  },
  {
    id: `${T}.migration-vs-natural-increase`,
    topicId: T,
    title: "Migration or natural increase? Share of city growth",
    level: 3,
    guideRef: "causes-of-urbanisation",
    generate(rng, tier) {
      const city = rng.pick(CITY_NAMES);
      // Growth in thousands of people per year.
      const totalK = tier === 1 ? rng.int(4, 40) * 10 : rng.int(120, 900);
      let migK: number;
      if (tier === 1) migK = (totalK * rng.pick([20, 30, 40, 50, 60, 70, 80])) / 100;
      else migK = rng.int(Math.round(totalK * 0.2), Math.round(totalK * 0.8));
      const natK = totalK - migK;
      const askNat = tier === 3 || rng.bool();
      const target = askNat ? natK : migK;
      const value = roundTo((target / totalK) * 100, tier === 3 ? 1 : 0);
      const otherV = roundTo(((totalK - target) / totalK) * 100, tier === 3 ? 1 : 0);
      const roundText = tier === 1 ? " Give your answer as a whole number." : tier === 2 ? " Give your answer to the nearest whole number." : " Give your answer to 1 decimal place.";
      const prompt = tier === 3
        ? `${city} grows by ${big(totalK * 1000)} people a year. Of this, ${big(migK * 1000)} is from people moving in from rural areas; the rest is natural increase (births minus deaths). What percentage of the growth is natural increase?${roundText}`
        : `${city} grows by ${big(totalK * 1000)} people a year. ${big(migK * 1000)} of these are rural–urban migrants and ${big(natK * 1000)} come from natural increase. What percentage of the growth is from ${askNat ? "natural increase" : "migration"}?${roundText}`;
      return {
        prompt,
        answer: { type: "number", value, display: `${num(value)}%` },
        solution: [
          tier === 3 ? `Natural increase = ${big(totalK * 1000)} − ${big(migK * 1000)} = ${big(natK * 1000)}` : `Total growth = ${big(totalK * 1000)}`,
          `% = ${big(target * 1000)} ÷ ${big(totalK * 1000)} × 100 = **${num(value)}%**`,
          "In many fast-growing cities, natural increase is large because migrants tend to be young adults who go on to have children in the city.",
        ],
        hint: "Part ÷ whole × 100 — the whole is the TOTAL growth.",
        traps: otherV !== value ? [{ spec: { type: "number", value: otherV }, feedback: `That is the share from ${askNat ? "migration" : "natural increase"}. Check which part the question asks for.` }] : [],
      };
    },
  },
];
