// Skill drills for "Over-population, Under-population & Policies".
// Retrieval fact banks (key terms, classification, case-study facts) + numeric skills generators.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { num, big, roundTo, clean } from "./helpers.ts";

const T = "population-problems";

/** Show a value rounded to 1 d.p. with its trailing zero (73 → "73.0"), using a real minus sign. */
const dp1 = (v: number): string => v.toFixed(1).replace("-", "−");

// ---------------------------------------------------------------------------
// Shared helpers for fact-bank drills
// ---------------------------------------------------------------------------

interface TermEntry {
  /** First accept string is the display form. */
  accept: string[];
  /** Two or more different clues for the same term. */
  clues: string[];
  /** 1 = core, 2 = typical, 3 = stretch. */
  level: 1 | 2 | 3;
  /** Short explanation shown in the solution. */
  why: string;
  /** Confusable terms with feedback. */
  traps?: { accept: string[]; feedback: string }[];
}

/** Tier 1 → level ≤ 2, tier 2 → everything, tier 3 → level ≥ 2 (harder entries). */
function poolFor<E extends { level: 1 | 2 | 3 }>(bank: readonly E[], tier: 1 | 2 | 3): E[] {
  if (tier === 1) return bank.filter((e) => e.level <= 2);
  if (tier === 3) return bank.filter((e) => e.level >= 2);
  return [...bank];
}

function mkTraps(list: { accept: string[]; feedback: string }[] | undefined): Trap[] | undefined {
  if (!list || list.length === 0) return undefined;
  return list.map((t) => ({ spec: { type: "text", accept: t.accept }, feedback: t.feedback }));
}

function termItem(rng: Rng, tier: 1 | 2 | 3, bank: readonly TermEntry[], templates: readonly string[], hint: string): DrillItem {
  const e = rng.pick(poolFor(bank, tier));
  const clue = rng.pick(e.clues);
  const tpl = rng.pick(templates);
  return {
    prompt: tpl.replace("CLUE", clue),
    answer: { type: "text", accept: e.accept },
    solution: [`**${e.accept[0]}**`, e.why],
    hint,
    traps: mkTraps(e.traps),
  };
}

interface ClassEntry {
  text: string;
  /** Key into the category table. */
  cat: string;
  level: 1 | 2 | 3;
  why: string;
}

interface Category {
  accept: string[];
  wrongFeedback: string;
}

function classItem(
  rng: Rng,
  tier: 1 | 2 | 3,
  bank: readonly ClassEntry[],
  cats: Record<string, Category>,
  questions: readonly string[],
  hint: string,
): DrillItem {
  const e = rng.pick(poolFor(bank, tier));
  const right = cats[e.cat];
  const traps: Trap[] = Object.entries(cats)
    .filter(([k]) => k !== e.cat)
    .map(([, c]) => ({ spec: { type: "text", accept: c.accept }, feedback: c.wrongFeedback }));
  return {
    prompt: `${rng.pick(questions)}\n\n> ${e.text}`,
    answer: { type: "text", accept: right.accept },
    solution: [`**${right.accept[0]}**`, e.why],
    hint,
    traps,
  };
}

// ---------------------------------------------------------------------------
// 1. Key terms: over-, under- and optimum population
// ---------------------------------------------------------------------------

const OVER_UNDER_TERMS: TermEntry[] = [
  {
    accept: ["over-population", "overpopulation", "over population", "overpopulated", "over-populated"],
    clues: [
      "when there are too many people for the resources and technology available to keep a good standard of living",
      "a situation where the population is greater than the resources of an area can support at a decent standard of living",
    ],
    level: 1,
    why: "Over-population is about people compared with *resources and technology*, not just a large number of people.",
    traps: [{ accept: ["under-population", "underpopulation", "under population"], feedback: "Under-population is the opposite — too FEW people to make full use of the resources." }],
  },
  {
    accept: ["under-population", "underpopulation", "under population", "underpopulated", "under-populated"],
    clues: [
      "when there are too few people to make full use of the resources available",
      "a situation where an area could support more people without the standard of living falling — in fact it would rise",
    ],
    level: 1,
    why: "Under-populated places (Canada and Australia are classic textbook examples) have more resources than their people can fully develop.",
    traps: [{ accept: ["over-population", "overpopulation", "over population"], feedback: "Over-population means too MANY people for the resources — this is the opposite." }],
  },
  {
    accept: ["optimum population", "optimal population", "optimum"],
    clues: [
      "the number of people that gives the highest standard of living for the resources and technology available",
      "the 'just right' population — neither too many nor too few people for the resources",
    ],
    level: 1,
    why: "At the optimum population, resources are used fully and efficiently and living standards are at their highest.",
  },
  {
    accept: ["carrying capacity"],
    clues: [
      "the maximum number of people an area can support sustainably with its resources",
      "the largest population an environment can keep supporting without being damaged",
    ],
    level: 1,
    why: "Carrying capacity is a ceiling: go beyond it and resources are used up faster than they are replaced.",
  },
  {
    accept: ["resources", "resource", "natural resources", "natural resource"],
    clues: [
      "things people use to meet their needs, such as water, food, land, energy and minerals",
      "the supplies (food, water, fuel, land, minerals) that a population depends on",
    ],
    level: 1,
    why: "Whether a place is over- or under-populated depends on its people compared with its resources.",
  },
  {
    accept: ["standard of living", "living standards", "living standard"],
    clues: [
      "how well off people are, measured by things like income, housing, healthcare and education",
      "the level of wealth, comfort and access to services that people in a place have",
    ],
    level: 1,
    why: "Over-population shows up as a falling standard of living; optimum population gives the highest one.",
  },
  {
    accept: ["technology"],
    clues: [
      "the knowledge and machines (irrigation, fertilisers, desalination) that let people get more out of the same resources",
      "the factor that can RAISE the carrying capacity of an area, e.g. NEWater recycling in Singapore",
    ],
    level: 2,
    why: "Better technology lets the same land and water support more people, so the optimum population can rise over time.",
  },
  {
    accept: ["sustainable", "sustainability", "sustainable development"],
    clues: [
      "meeting the needs of people today without damaging the ability of future generations to meet their needs",
      "using resources at a rate that can carry on for ever because they are not used up faster than they are replaced",
    ],
    level: 2,
    why: "Living within carrying capacity means living sustainably.",
  },
  {
    accept: ["Malthus", "Thomas Malthus", "Thomas Robert Malthus"],
    clues: [
      "the English clergyman who argued in 1798 that population grows faster than food supply, so famine, disease and war would follow",
      "the thinker who said population grows geometrically (2, 4, 8, 16) but food only arithmetically (1, 2, 3, 4)",
    ],
    level: 2,
    why: "Thomas Malthus wrote *An Essay on the Principle of Population* (1798) — the classic pessimistic view.",
    traps: [{ accept: ["Boserup", "Ester Boserup"], feedback: "Boserup was the OPTIMIST — she said people invent new ways to grow more food." }],
  },
  {
    accept: ["Boserup", "Ester Boserup"],
    clues: [
      "the Danish economist (1965) who argued that population pressure makes people invent better farming methods",
      "the optimist whose idea is summed up as 'necessity is the mother of invention'",
    ],
    level: 2,
    why: "Ester Boserup argued that more people push farmers to find ways to produce more food.",
    traps: [{ accept: ["Malthus", "Thomas Malthus"], feedback: "Malthus was the pessimist who predicted famine — this is the opposite view." }],
  },
  {
    accept: ["ecological footprint", "footprint"],
    clues: [
      "the area of land and water needed to supply everything a person uses and absorb their waste",
      "a measure of a person's or country's demand on nature, usually given in global hectares per person",
    ],
    level: 2,
    why: "Ecological footprints show that a few high-consuming people can put more pressure on resources than many low-consuming people.",
  },
  {
    accept: ["consumption", "over-consumption", "overconsumption"],
    clues: [
      "the amount of resources each person uses — critics say this, not population size, is the real problem",
      "the use of goods and resources by people; it is much higher per person in rich countries than in poor ones",
    ],
    level: 3,
    why: "The 'over-population' debate: a rich person uses many times more resources than a poor person, so numbers alone don't tell the story.",
  },
  {
    accept: ["famine"],
    clues: [
      "a widespread, severe shortage of food in an area, causing hunger and deaths",
      "the food-shortage 'check' that Malthus predicted when population outgrew food supply",
    ],
    level: 2,
    why: "Famine is a classic symptom of a population exceeding the food resources available.",
  },
  {
    accept: ["food security"],
    clues: [
      "when all people always have access to enough safe, nutritious food",
      "the term for a population reliably having enough affordable food (Singapore imports over 90% of its food, so it works hard at this)",
    ],
    level: 3,
    why: "Food security is the opposite of food shortage; it depends on supply, access and affordability.",
  },
  {
    accept: ["renewable resource", "renewable resources", "renewable"],
    clues: [
      "a resource that is naturally replaced and will not run out if used carefully, such as solar energy or fresh water",
      "a resource like wind, sunlight or forests that can be replenished",
    ],
    level: 2,
    why: "Renewables raise long-term carrying capacity because they are not used up.",
    traps: [{ accept: ["non-renewable resource", "non-renewable", "nonrenewable"], feedback: "Non-renewables (oil, coal) run out — this one is naturally replaced." }],
  },
  {
    accept: ["non-renewable resource", "non-renewable resources", "non-renewable", "nonrenewable", "finite resource"],
    clues: [
      "a resource such as oil, coal or natural gas that will eventually run out",
      "a finite resource that cannot be replaced once used",
    ],
    level: 2,
    why: "Relying on non-renewables lowers long-term carrying capacity.",
    traps: [{ accept: ["renewable resource", "renewable"], feedback: "Renewables are naturally replaced — this one runs out." }],
  },
  {
    accept: ["population pressure"],
    clues: [
      "the strain placed on land, water, housing and services when a population grows faster than resources",
      "the stress on an environment caused by too many people demanding its resources",
    ],
    level: 3,
    why: "Population pressure can lead to soil erosion, deforestation and overcrowding — or, in Boserup's view, to innovation.",
  },
  {
    accept: ["Malthusian catastrophe", "Malthusian crisis", "Malthusian check", "Malthusian checks"],
    clues: [
      "the predicted collapse (through famine, disease or war) when population overtakes food supply",
      "the term for the 'crisis point' in Malthus's theory where food runs out",
    ],
    level: 3,
    why: "Malthus thought these 'positive checks' would push the population back down to what food could support.",
  },
  {
    accept: ["Green Revolution"],
    clues: [
      "the spread of high-yield crop varieties, fertilisers and irrigation from the 1960s that greatly increased food production",
      "the farming change, especially in India and Mexico from the 1960s, that is often used as evidence for Boserup's view",
    ],
    level: 3,
    why: "The Green Revolution raised food output so fast that Malthus's predicted famines did not happen on the scale he expected.",
  },
  {
    accept: ["desalination"],
    clues: [
      "removing salt from seawater to make fresh water — one of Singapore's Four National Taps",
      "a technology that turns seawater into drinking water, raising the carrying capacity of dry or small countries",
    ],
    level: 3,
    why: "Desalination is a clear example of technology increasing the resources available to a population.",
  },
];

// ---------------------------------------------------------------------------
// 2. Over- or under-populated? (classification)
// ---------------------------------------------------------------------------

const OVER_UNDER_CATS: Record<string, Category> = {
  over: {
    accept: ["over-populated", "overpopulated", "over populated", "over-population", "overpopulation"],
    wrongFeedback: "Over-populated means too MANY people for the resources — look again at whether resources are short or going unused.",
  },
  under: {
    accept: ["under-populated", "underpopulated", "under populated", "under-population", "underpopulation"],
    wrongFeedback: "Under-populated means too FEW people to use the resources — look again at whether resources are short or going unused.",
  },
};

const OVER_UNDER_SCENES: ClassEntry[] = [
  { text: "Farmland is being divided into smaller and smaller plots, and many families cannot grow enough to eat.", cat: "over", level: 1, why: "Land per person is too small to feed everyone — too many people for the land." },
  { text: "Rich mineral deposits lie undeveloped because there are not enough workers to mine them.", cat: "under", level: 1, why: "Resources are going unused for lack of people." },
  { text: "Shanty towns are spreading, unemployment is high and schools have 60 pupils per class.", cat: "over", level: 1, why: "Housing, jobs and services cannot keep up with the number of people." },
  { text: "The government is advertising abroad to attract farmers to settle on huge areas of fertile land.", cat: "under", level: 1, why: "There are too few people to farm the land, so the country needs more." },
  { text: "Forests are cleared for firewood faster than they can grow back and soil is eroding.", cat: "over", level: 1, why: "Resources are used faster than they are replaced — population is above carrying capacity." },
  { text: "Hospitals cannot be staffed because there are too few doctors and nurses, even though the country is wealthy.", cat: "under", level: 2, why: "A shortage of workers, not a shortage of resources, is holding the country back." },
  { text: "Wells are running dry and water has to be rationed to a few hours a day.", cat: "over", level: 1, why: "Demand for water is greater than the supply — too many people for this resource." },
  { text: "Factories are closing because they cannot find enough workers, so the country offers visas to foreign workers.", cat: "under", level: 2, why: "Too few workers to make full use of the economy's resources." },
  { text: "Food has to be given out as emergency aid every year because harvests feed only two-thirds of the people.", cat: "over", level: 1, why: "Food resources support fewer people than actually live there." },
  { text: "Remote towns are losing their shops and bus services because there are too few customers to keep them open.", cat: "under", level: 2, why: "Services need a minimum number of users — too few people to keep them going." },
  { text: "Overgrazing by growing herds is turning grassland into desert.", cat: "over", level: 2, why: "More people and animals than the land can sustainably support." },
  { text: "Vast forests and fishing grounds could support far more people, and living standards would rise if more people lived there.", cat: "under", level: 2, why: "This is the definition of under-population: more people would raise living standards." },
  { text: "Traffic jams, overcrowded housing and a shortage of clean water are getting worse every year as the city grows.", cat: "over", level: 2, why: "Infrastructure and resources can't keep up with the population." },
  { text: "Hydro-electric power potential is huge but unused because the small population needs little electricity and there are too few engineers.", cat: "under", level: 3, why: "An unused resource held back by too few people." },
  { text: "Young people are leaving because there are not enough jobs, and remaining land is too small to divide between children.", cat: "over", level: 2, why: "Jobs and land are too scarce for the number of people." },
  { text: "A farming region has so few people that crops are left unharvested at the end of the season.", cat: "under", level: 2, why: "Labour shortage means resources go to waste." },
  { text: "Fish stocks in the nearby sea are collapsing because too many boats are fishing to feed the growing population.", cat: "over", level: 2, why: "A resource is being used faster than it can recover." },
  { text: "The country has plenty of oil and land but needs more people to build roads and railways to reach them.", cat: "under", level: 2, why: "Resources exist but there are too few people to develop them." },
  { text: "Rising food prices mean many families spend most of their income on basic grains.", cat: "over", level: 3, why: "Demand for food outstrips supply, pushing prices up and living standards down." },
  { text: "Schools in rural villages are merging or closing because there are not enough children to fill them.", cat: "under", level: 3, why: "Too few people to keep services running efficiently." },
  { text: "Farmers are forced to plough steep slopes and marginal land to grow enough food, causing landslides.", cat: "over", level: 3, why: "Using poorer land is a sign that population pressure has passed what good land can support." },
  { text: "Iron ore and timber are exported unprocessed because there are too few workers to build factories at home.", cat: "under", level: 3, why: "A small workforce cannot add value to the country's resources." },
  { text: "Electricity cuts happen every evening because power stations cannot meet demand from a rapidly growing population.", cat: "over", level: 3, why: "Energy demand from too many people exceeds supply." },
  { text: "Universities report a shortage of researchers, and new technology firms move abroad to find staff.", cat: "under", level: 3, why: "Too few skilled people to use the country's economic potential." },
  { text: "Groundwater is pumped out faster than rain can refill it, so the water table drops each year.", cat: "over", level: 3, why: "Using water beyond its replacement rate — population above carrying capacity." },
  { text: "Rich farmland lies idle because the population is too small to farm it, so the government offers free land to settlers.", cat: "under", level: 1, why: "Resources unused for lack of people — under-population." },
  { text: "Rubbish piles up in the streets because the collection service cannot cope with the number of people.", cat: "over", level: 1, why: "Services are overwhelmed by too many people." },
  { text: "The economy could grow much faster, but there are not enough workers to fill the jobs available.", cat: "under", level: 1, why: "A labour shortage — too few people for the opportunities." },
];

// ---------------------------------------------------------------------------
// 3. Ageing or youthful?
// ---------------------------------------------------------------------------

const AGE_CATS: Record<string, Category> = {
  ageing: {
    accept: ["ageing", "aging", "ageing population", "aging population", "an ageing population"],
    wrongFeedback: "A youthful population has lots of children — think about which age group is causing this.",
  },
  youthful: {
    accept: ["youthful", "youthful population", "young", "young population", "a youthful population"],
    wrongFeedback: "An ageing population has lots of over-65s — think about which age group is causing this.",
  },
};

const AGE_SCENES: ClassEntry[] = [
  { text: "The government must spend more on pensions every year.", cat: "ageing", level: 1, why: "Pensions are paid to older, retired people." },
  { text: "Thousands of new primary schools are needed every year.", cat: "youthful", level: 1, why: "Lots of children need lots of school places." },
  { text: "Demand for care homes and nursing staff is rising fast.", cat: "ageing", level: 1, why: "Care homes look after elderly people." },
  { text: "Vaccination programmes and maternity clinics are stretched.", cat: "youthful", level: 1, why: "Babies, young children and mothers need these services." },
  { text: "The workforce is shrinking, so there are fewer taxpayers.", cat: "ageing", level: 1, why: "As more people retire and fewer young people join, the working-age group shrinks." },
  { text: "Millions of young people enter the job market each year, and not enough jobs are created.", cat: "youthful", level: 1, why: "A large young generation reaching working age needs jobs." },
  { text: "The country is raising its retirement age.", cat: "ageing", level: 2, why: "Keeping older people working longer eases pension costs and worker shortages." },
  { text: "The country has a large future workforce that could drive economic growth if educated — a 'demographic dividend'.", cat: "youthful", level: 2, why: "A youthful population can become a large working-age population — an opportunity." },
  { text: "Healthcare costs are rising because of more cases of dementia, arthritis and heart disease.", cat: "ageing", level: 2, why: "These conditions are much more common in older people." },
  { text: "The population pyramid has a very wide base and narrows quickly towards the top.", cat: "youthful", level: 1, why: "A wide base means a high proportion of children." },
  { text: "The population pyramid is narrow at the base and wide near the top.", cat: "ageing", level: 1, why: "Few children and many older people — the shape of an ageing population." },
  { text: "Robots are being developed to help care for the elderly, as in Japan.", cat: "ageing", level: 2, why: "Japan has one of the oldest populations in the world and too few carers." },
  { text: "The median age is about 15, as in Niger.", cat: "youthful", level: 2, why: "Half the people are under 15 — a very young population." },
  { text: "Over-65s make up about 29% of the population, as in Japan.", cat: "ageing", level: 2, why: "Nearly three in ten people aged 65+ is a very old population." },
  { text: "Rural villages are emptying of young people and many houses stand abandoned.", cat: "ageing", level: 3, why: "When young people leave, the population left behind ages (as in rural Japan)." },
  { text: "Retired people volunteer, look after grandchildren and spend savings — the 'grey pound' or silver economy.", cat: "ageing", level: 3, why: "An opportunity of an ageing population: older people's spending and unpaid work." },
  { text: "High youth unemployment could lead to social unrest and young adults emigrating to find work.", cat: "youthful", level: 3, why: "A big young generation without jobs is a risk of a youthful population." },
  { text: "Total fertility rate is about 6 children per woman.", cat: "youthful", level: 2, why: "High fertility keeps adding large numbers of children." },
  { text: "The old-age dependency ratio is rising sharply.", cat: "ageing", level: 2, why: "More over-65s for each working-age person." },
  { text: "The young dependency ratio is very high.", cat: "youthful", level: 2, why: "Many under-15s for each working-age person." },
  { text: "Singapore introduced the Silver Support Scheme and is building more eldercare centres.", cat: "ageing", level: 3, why: "Both are responses to Singapore's rapidly ageing population." },
  { text: "Demand for baby food, nappies and children's clothing is booming.", cat: "youthful", level: 1, why: "Lots of babies and young children." },
  { text: "Housing must be adapted with ramps, grab rails and lifts on every floor.", cat: "ageing", level: 2, why: "Older people need accessible housing." },
  { text: "Schools are closing and being turned into community centres for older residents.", cat: "ageing", level: 3, why: "Fewer children and more older people." },
  { text: "Life expectancy is high and the birth rate has been below replacement level for decades.", cat: "ageing", level: 3, why: "Long lives plus few births make a population older." },
  { text: "Almost half the population is under 18, as in Nigeria.", cat: "youthful", level: 3, why: "A very large share of children and teenagers." },
  { text: "Girls' education is being expanded, partly to reduce the very high birth rate.", cat: "youthful", level: 3, why: "Very high birth rates create a youthful population; education tends to lower fertility." },
];

// ---------------------------------------------------------------------------
// 4. Policy type
// ---------------------------------------------------------------------------

const POLICY_CATS: Record<string, Category> = {
  pro: {
    accept: ["pro-natalist", "pronatalist", "pro natalist", "pro-natalist policy", "pronatalist policy"],
    wrongFeedback: "Pro-natalist policies ENCOURAGE people to have more children — check whether this policy aims to raise or lower births.",
  },
  anti: {
    accept: ["anti-natalist", "antinatalist", "anti natalist", "anti-natalist policy", "antinatalist policy"],
    wrongFeedback: "Anti-natalist policies DISCOURAGE births — check whether this policy aims to raise or lower births.",
  },
  imm: {
    accept: ["immigration", "immigration policy", "migration policy", "migration"],
    wrongFeedback: "Immigration policies control who can move INTO a country — check whether this is about births or about migrants.",
  },
};

const POLICY_SCENES: ClassEntry[] = [
  { text: "Singapore's Baby Bonus gives parents cash gifts and savings top-ups for each child.", cat: "pro", level: 1, why: "Money for having children encourages more births." },
  { text: "China's One-Child Policy limited most urban couples to one child.", cat: "anti", level: 1, why: "It aimed to reduce births." },
  { text: "France gives families with three or more children reduced train fares and bigger tax cuts.", cat: "pro", level: 1, why: "Rewards for large families encourage more births." },
  { text: "Singapore's 'Stop at Two' campaign of the 1970s.", cat: "anti", level: 1, why: "It told families to have no more than two children." },
  { text: "A country uses a points system so that skilled workers can apply to live there.", cat: "imm", level: 1, why: "It controls who can move into the country." },
  { text: "Government-funded childcare places so that both parents can work.", cat: "pro", level: 2, why: "Making children more affordable encourages couples to have them." },
  { text: "Free contraception and family-planning clinics in every village.", cat: "anti", level: 2, why: "It helps people have fewer children." },
  { text: "Longer paid maternity and paternity leave.", cat: "pro", level: 2, why: "It makes it easier to have children while working." },
  { text: "India's sterilisation campaigns in the 1970s.", cat: "anti", level: 2, why: "Sterilisation stops people having more children." },
  { text: "Singapore's 'Have Three or More (if you can afford it)' campaign of 1987.", cat: "pro", level: 2, why: "It reversed 'Stop at Two' to encourage more births." },
  { text: "Russia's 'maternity capital' payment to mothers who have a second child.", cat: "pro", level: 2, why: "A large payment for a second child encourages births." },
  { text: "Fines (a 'social maintenance fee') for couples who have more children than allowed.", cat: "anti", level: 2, why: "Penalties discourage extra births." },
  { text: "A country issues work passes so that foreign workers can fill jobs in construction and healthcare.", cat: "imm", level: 2, why: "It brings in people from abroad to fill labour shortages." },
  { text: "Offering citizenship to foreign-born professionals to boost the workforce.", cat: "imm", level: 2, why: "It adds people through migration, not births." },
  { text: "Campaigns encouraging people to marry later and wait longer between children.", cat: "anti", level: 3, why: "Later marriage and wider spacing reduce the number of births." },
  { text: "Priority HDB flat allocation for married couples with young children.", cat: "pro", level: 3, why: "Easier housing for families encourages couples to marry and have children." },
  { text: "Government-organised speed-dating and social events for single graduates.", cat: "pro", level: 3, why: "Helping people meet partners aims to lead to marriage and births (Singapore's SDU did this)." },
  { text: "Tax relief for working mothers based on how many children they have.", cat: "pro", level: 3, why: "Tax rewards for each child encourage births." },
  { text: "Free education and priority health care for single-child families.", cat: "anti", level: 3, why: "Rewards for having only one child discourage further births." },
  { text: "Setting a yearly cap on the number of new permanent residents.", cat: "imm", level: 3, why: "It controls how many people can settle from abroad." },
  { text: "Losing priority for school places if parents have a third child.", cat: "anti", level: 3, why: "Penalising larger families discourages births." },
  { text: "Paid IVF (fertility treatment) for couples struggling to conceive.", cat: "pro", level: 3, why: "It helps people who want children to have them." },
  { text: "Visa schemes that let retired foreigners settle are tightened, while young skilled workers are welcomed.", cat: "imm", level: 3, why: "It controls the age and skills of people moving in." },
  { text: "A Child Development Account where the government matches parents' savings.", cat: "pro", level: 1, why: "Free money for each child encourages births." },
  { text: "Posters and TV adverts telling couples that 'small families are happy families'.", cat: "anti", level: 1, why: "Messages promoting small families discourage births." },
  { text: "A country offers visas to people from abroad to fill a shortage of nurses.", cat: "imm", level: 1, why: "It brings in migrants to fill jobs." },
];

// ---------------------------------------------------------------------------
// 5. Policy & China facts (retrieval)
// ---------------------------------------------------------------------------

const POLICY_TERMS: TermEntry[] = [
  {
    accept: ["pro-natalist policy", "pro-natalist", "pronatalist", "pronatalist policy", "pro natalist"],
    clues: ["a policy that encourages people to have more children", "a government plan to RAISE the birth rate"],
    level: 1,
    why: "'Pro' = for, 'natal' = birth. Singapore and France use these.",
    traps: [{ accept: ["anti-natalist", "antinatalist", "anti-natalist policy"], feedback: "Anti-natalist policies REDUCE births — this one raises them." }],
  },
  {
    accept: ["anti-natalist policy", "anti-natalist", "antinatalist", "antinatalist policy", "anti natalist"],
    clues: ["a policy that discourages people from having children", "a government plan to LOWER the birth rate"],
    level: 1,
    why: "'Anti' = against, 'natal' = birth. China's One-Child Policy is the most famous example.",
    traps: [{ accept: ["pro-natalist", "pronatalist", "pro-natalist policy"], feedback: "Pro-natalist policies RAISE births — this one lowers them." }],
  },
  {
    accept: ["Baby Bonus", "Baby Bonus Scheme"],
    clues: ["the Singapore scheme, started in 2001, that gives parents cash gifts and savings top-ups for each child", "Singapore's main cash incentive for having children"],
    level: 1,
    why: "The Baby Bonus is Singapore's flagship pro-natalist incentive.",
  },
  {
    accept: ["Stop at Two"],
    clues: ["Singapore's 1970s anti-natalist slogan", "the family-planning campaign Singapore launched in 1972 to limit families to two children"],
    level: 2,
    why: "It worked so well that by the late 1970s Singapore's fertility had fallen below replacement level.",
  },
  {
    accept: ["One-Child Policy", "one child policy", "OCP"],
    clues: ["China's policy from 1980 to 2015 that limited most couples to a single child", "the policy China replaced with a two-child policy in 2016"],
    level: 1,
    why: "China's One-Child Policy (1980–2015) is the world's best-known anti-natalist policy.",
  },
  {
    accept: ["4-2-1 problem", "4-2-1", "421", "4 2 1", "four-two-one problem", "4-2-1 family"],
    clues: [
      "the problem where one adult child may have to support two parents and four grandparents",
      "the name for China's top-heavy family structure created by generations of only children",
    ],
    level: 1,
    why: "Four grandparents → two parents → one child: a heavy care burden on a single person.",
  },
  {
    accept: ["little emperors", "little emperor", "little emperor syndrome"],
    clues: ["the nickname for only children in China said to be spoiled by two parents and four grandparents", "the term for pampered single children in China"],
    level: 2,
    why: "Critics said only children got all the family's attention and money.",
  },
  {
    accept: ["replacement level", "replacement level fertility", "replacement rate", "replacement fertility"],
    clues: [
      "a total fertility rate of about 2.1 children per woman, which keeps a population stable in the long run",
      "the fertility level at which each generation exactly replaces itself",
    ],
    level: 1,
    why: "About 2.1, not 2.0, because some children die before they have children of their own.",
  },
  {
    accept: ["total fertility rate", "TFR", "fertility rate"],
    clues: ["the average number of children a woman is expected to have in her lifetime", "the measure that was about 0.97 for Singapore residents in 2023"],
    level: 1,
    why: "TFR is the key measure for population policies; below 2.1 a population will eventually shrink without migration.",
    traps: [{ accept: ["birth rate", "crude birth rate"], feedback: "Birth rate is births per 1,000 people per year — this measure is children per woman." }],
  },
  {
    accept: ["sex ratio", "gender ratio", "sex ratio at birth"],
    clues: ["the number of males for every 100 females in a population", "the measure that rose well above the natural level of about 105 boys per 100 girls at birth in China"],
    level: 2,
    why: "A strong preference for sons under the One-Child Policy pushed China's sex ratio at birth far above normal.",
  },
  {
    accept: ["social maintenance fee", "fine", "fines"],
    clues: ["the name of the fine Chinese couples paid for having children outside the rules", "the penalty, often several times a year's income, for an extra child in China"],
    level: 3,
    why: "The social maintenance fee was the main financial penalty of the One-Child Policy.",
  },
  {
    accept: ["Graduate Mothers' Scheme", "Graduate Mothers Scheme", "Graduate Mother Scheme"],
    clues: ["Singapore's controversial 1984 scheme that gave school-place priority to children of mothers with degrees", "the 1984 Singapore policy that encouraged graduate women to have more children"],
    level: 3,
    why: "It was very unpopular and was dropped in 1985 — an example of a policy failing because people opposed it.",
  },
  {
    accept: ["Have Three or More", "Have Three or More (if you can afford it)", "Have Three or More if you can afford it"],
    clues: ["Singapore's 1987 slogan that replaced 'Stop at Two'", "the pro-natalist campaign Singapore launched in 1987"],
    level: 2,
    why: "By 1987 Singapore's fertility had fallen well below 2.1, so the policy switched from anti- to pro-natalist.",
  },
  {
    accept: ["immigration policy", "immigration", "migration policy"],
    clues: ["a policy controlling who can come to live and work in a country", "a way to grow the workforce without raising the birth rate, by attracting people from abroad"],
    level: 2,
    why: "Ageing countries such as Singapore and Canada use immigration to top up their workforce.",
  },
  {
    accept: ["Code de la Famille", "Code de la famille", "Family Code"],
    clues: ["France's 1939 law that brought in family allowances to encourage births", "the French 'family code' at the heart of its pro-natalist policy"],
    level: 3,
    why: "France has encouraged births for decades and has one of the highest fertility rates in Europe.",
  },
  {
    accept: ["maternity capital"],
    clues: ["Russia's large payment (from 2007) to mothers who have a second child", "the Russian pro-natalist cash scheme for second children"],
    level: 3,
    why: "Russia's population was shrinking, so it pays families to have a second child.",
  },
  {
    accept: ["sterilisation", "sterilization", "forced sterilisation", "forced sterilization"],
    clues: ["the surgical method India pushed (sometimes by force) in its 1970s family-planning drive", "an operation that permanently prevents a person having children, used in India's 1975–77 campaign"],
    level: 3,
    why: "India's forced sterilisations during the Emergency (1975–77) caused anger and set back family planning for years.",
  },
  {
    accept: ["Later, Longer, Fewer", "later longer fewer"],
    clues: ["China's 1970s slogan: marry later, wait longer between children, have fewer children", "the Chinese campaign before the One-Child Policy that already cut fertility sharply"],
    level: 3,
    why: "China's fertility fell from nearly 6 to under 3 in the 1970s — BEFORE the One-Child Policy began.",
  },
];

// China facts: numeric (year) and text answers
interface ChinaFact {
  prompt: string[];
  answer: { kind: "year"; value: number } | { kind: "text"; accept: string[] };
  level: 1 | 2 | 3;
  why: string;
  trapYears?: { value: number; feedback: string }[];
}

const CHINA_FACTS: ChinaFact[] = [
  { prompt: ["In which year did China's One-Child Policy begin?", "China introduced the One-Child Policy in which year?"], answer: { kind: "text", accept: ["1979", "1980", "1979-1980", "1979–1980"] }, level: 1, why: "The One-Child Policy was announced in 1979 and rolled out nationwide in 1980 (running until 2015).", trapYears: [{ value: 2015, feedback: "2015 is when the policy ENDED (announced) — it started in 1979–1980." }] },
  { prompt: ["In which year was China's One-Child Policy officially ended (announced)?", "China announced the end of its One-Child Policy in which year?"], answer: { kind: "year", value: 2015 }, level: 1, why: "It was announced in 2015 and replaced by the two-child policy from 2016.", trapYears: [{ value: 2016, feedback: "2016 is when the two-child policy came into force; the end was announced in 2015." }] },
  { prompt: ["In which year did China's universal two-child policy come into force?", "From which year were all Chinese couples allowed two children?"], answer: { kind: "year", value: 2016 }, level: 1, why: "The two-child policy came into force in 2016.", trapYears: [{ value: 2021, feedback: "2021 is the three-child policy." }] },
  { prompt: ["In which year did China announce its three-child policy?", "China moved to a three-child policy in which year?", "Only five years after allowing two children, China raised the limit to three. In which year?"], answer: { kind: "year", value: 2021 }, level: 2, why: "The three-child policy was announced in 2021.", trapYears: [{ value: 2016, feedback: "2016 is the two-child policy." }] },
  { prompt: ["In which year did China's population fall for the first time in about six decades?", "China's population first shrank (for the first time in about 60 years) in which year?", "Official figures showed China's population falling for the first time since about the early 1960s. In which year did this fall happen?"], answer: { kind: "year", value: 2022 }, level: 3, why: "China's population fell in 2022 for the first time in about six decades." },
  { prompt: ["What total fertility rate (children per woman) is called 'replacement level'? Give your answer to 1 decimal place.", "Replacement-level fertility is about how many children per woman? (1 decimal place)"], answer: { kind: "year", value: 2.1 }, level: 1, why: "About 2.1 — slightly above 2 because some children die before they become parents.", trapYears: [{ value: 2, feedback: "Close — it's 2.1, a little above 2, because not every child survives to become a parent." }] },
  { prompt: ["Under China's three-child policy, how many children may a couple have?", "China's 2021 policy change raised the limit to how many children per couple?"], answer: { kind: "year", value: 3 }, level: 1, why: "The 2021 policy allows three children." },
  { prompt: ["Under the policy that came in from 2016, how many children could every Chinese couple have?", "How many children per couple did China's universal policy of 2016 allow?"], answer: { kind: "year", value: 2 }, level: 1, why: "The universal two-child policy began in 2016." },
  { prompt: ["Roughly what is the natural sex ratio at birth (boys per 100 girls)? Give a whole number.", "Without son preference, about how many boys are born for every 100 girls?"], answer: { kind: "year", value: 105 }, level: 2, why: "About 105 boys are born for every 100 girls naturally; China's ratio rose far above this.", trapYears: [{ value: 100, feedback: "Slightly more boys than girls are born naturally — about 105 per 100." }] },
  { prompt: ["In which year did India overtake China as the world's most populous country, according to UN estimates?", "According to the UN, India's population passed China's in which year?"], answer: { kind: "year", value: 2023 }, level: 3, why: "UN estimates put India ahead of China in 2023." },
  { prompt: ["How many children were most urban Chinese couples allowed under the One-Child Policy? Give a number.", "Under the 1980 rules, how many children could a typical urban Han Chinese couple have?"], answer: { kind: "year", value: 1 }, level: 1, why: "Most urban couples were limited to one child." },
  { prompt: ["What is the name of the problem where one child must support 2 parents and 4 grandparents?", "Give the three-number name for China's 'one child, two parents, four grandparents' family structure.", "An inverted family tree with four grandparents, two parents and one child is called the ____ problem."], answer: { kind: "text", accept: ["4-2-1 problem", "4-2-1", "421", "4 2 1", "four-two-one"] }, level: 1, why: "The 4-2-1 problem — an inverted family tree." },
  { prompt: ["Which non-Han groups in China were exempt from the One-Child Policy and allowed more children? (Give the two-word group.)", "Which kind of minority in China was usually allowed more than one child?", "Apart from many rural families, which non-Han groups were usually allowed more than one child under the One-Child Policy?"], answer: { kind: "text", accept: ["ethnic minorities", "ethnic minority", "minorities", "minority groups"] }, level: 2, why: "Ethnic minorities were usually allowed two or more children." },
  { prompt: ["In many rural areas, couples could have a second child if their first child was a ____. (boy or girl?)", "Rural Chinese families were often allowed a second child if the first was of which sex?", "The rural '1.5-child' rule let farming families try again for a son if their first child was a boy or a girl?"], answer: { kind: "text", accept: ["girl", "a girl", "female", "daughter"] }, level: 2, why: "The '1.5-child' rule in many rural areas allowed a second child if the first was a girl." },
  { prompt: ["Because of a strong preference for sons, China's population now has more of which sex among young adults?", "The One-Child Policy left China with a surplus of young men or young women?", "China's high sex ratio means that millions of which group may struggle to find a marriage partner — young men or young women?"], answer: { kind: "text", accept: ["men", "males", "male", "boys", "young men"] }, level: 2, why: "Son preference led to many more boys than girls being born — tens of millions of 'missing women'." },
  { prompt: ["What nickname is given to the pampered only children of the One-Child era?", "Spoiled only children in China were nicknamed 'little ____'.", "Only children doted on by two parents and four grandparents were nicknamed what?"], answer: { kind: "text", accept: ["little emperors", "little emperor", "emperors", "emperor"] }, level: 2, why: "'Little emperors' — doted on by two parents and four grandparents." },
  { prompt: ["What name is given to the fine for having a child outside China's rules?", "China's One-Child penalty was called the 'social ____ fee'.", "Name the fee, often several times a year's income, charged for an 'out-of-plan' birth in China."], answer: { kind: "text", accept: ["social maintenance fee", "maintenance fee", "maintenance"] }, level: 3, why: "The social maintenance fee — often several times a household's yearly income." },
  { prompt: ["Before the One-Child Policy, China ran a 1970s campaign with which three-word slogan?", "Name China's 1970s family-planning slogan that urged couples to marry late and space children.", "China's fertility fell sharply in the 1970s under which three-word campaign, before the One-Child Policy began?"], answer: { kind: "text", accept: ["Later, Longer, Fewer", "later longer fewer"] }, level: 3, why: "'Later, Longer, Fewer' already cut fertility sharply in the 1970s." },
];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

const TERM_TEMPLATES = [
  "Give the key term for: CLUE.",
  "Which key term matches this description? CLUE.",
  "Name the term: CLUE.",
];

export const drills: Drill[] = [
  // ---------- Level 1: retrieval ----------
  {
    id: `${T}.over-under-terms`,
    topicId: T,
    title: "Name the key term: over-, under- and optimum population",
    level: 1,
    guideRef: "over-under-population",
    generate(rng, tier) {
      return termItem(rng, tier, OVER_UNDER_TERMS, TERM_TEMPLATES, "Think about people compared with RESOURCES — too many, too few, or just right?");
    },
  },
  {
    id: `${T}.over-or-under`,
    topicId: T,
    title: "Over-populated or under-populated?",
    level: 1,
    guideRef: "over-under-population",
    generate(rng, tier) {
      return classItem(
        rng,
        tier,
        OVER_UNDER_SCENES,
        OVER_UNDER_CATS,
        [
          "Is this a sign that the area is **over-populated** or **under-populated**?",
          "Read the description. Is the place **over-populated** or **under-populated**?",
          "Classify this place: **over-populated** or **under-populated**?",
        ],
        "Are resources running short (too many people) or going unused (too few people)?",
      );
    },
  },
  {
    id: `${T}.ageing-or-youthful`,
    topicId: T,
    title: "Ageing or youthful population?",
    level: 1,
    guideRef: "ageing-youthful",
    generate(rng, tier) {
      return classItem(
        rng,
        tier,
        AGE_SCENES,
        AGE_CATS,
        [
          "Is this a problem or feature of an **ageing** population or a **youthful** population?",
          "Which kind of population does this describe: **ageing** or **youthful**?",
          "Would you expect this in a country with an **ageing** or a **youthful** population?",
        ],
        "Which age group — under-15s or over-65s — is this mainly about?",
      );
    },
  },
  {
    id: `${T}.policy-type`,
    topicId: T,
    title: "Pro-natalist, anti-natalist or immigration policy?",
    level: 1,
    guideRef: "population-policies",
    generate(rng, tier) {
      return classItem(
        rng,
        tier,
        POLICY_SCENES,
        POLICY_CATS,
        [
          "Is this a **pro-natalist**, **anti-natalist** or **immigration** policy?",
          "Classify the policy: **pro-natalist**, **anti-natalist** or **immigration**?",
          "What type of population policy is this — **pro-natalist**, **anti-natalist** or **immigration**?",
        ],
        "Does it try to raise births, lower births, or bring in people from abroad?",
      );
    },
  },
  // ---------- Level 2: retrieval + core skills ----------
  {
    id: `${T}.policy-terms`,
    topicId: T,
    title: "Name the population-policy term",
    level: 2,
    guideRef: "population-policies",
    generate(rng, tier) {
      return termItem(rng, tier, POLICY_TERMS, TERM_TEMPLATES, "Is the clue about raising births, lowering births, or a named scheme or campaign?");
    },
  },
  {
    id: `${T}.china-facts`,
    topicId: T,
    title: "China's One-Child Policy: key facts and dates",
    level: 2,
    guideRef: "china-one-child",
    generate(rng, tier) {
      const f = rng.pick(poolFor(CHINA_FACTS, tier));
      const prompt = rng.pick(f.prompt);
      if (f.answer.kind === "year") {
        const v = f.answer.value;
        const traps: Trap[] | undefined = f.trapYears
          ?.filter((t) => t.value !== v)
          .map((t) => ({ spec: { type: "number", value: t.value }, feedback: t.feedback }));
        return {
          prompt,
          answer: { type: "number", value: v },
          solution: [`**${v}**`, f.why],
          hint: "Put the story in order: 'Later, Longer, Fewer' → One-Child Policy (about 35 years) → two-child → three-child → the first population fall.",
          traps: traps && traps.length ? traps : undefined,
        };
      }
      const textTraps: Trap[] | undefined = f.trapYears?.map((t) => ({ spec: { type: "text", accept: [String(t.value)] }, feedback: t.feedback }));
      return {
        prompt,
        answer: { type: "text", accept: f.answer.accept },
        solution: [`**${f.answer.accept[0]}**`, f.why],
        hint: "Think about how the policy worked (rewards, penalties, exceptions) and what it did to families.",
        traps: textTraps && textTraps.length ? textTraps : undefined,
      };
    },
  },
  {
    id: `${T}.dependency-ratio`,
    topicId: T,
    title: "Calculate the dependency ratio",
    level: 2,
    guideRef: "ageing-youthful",
    generate(rng, tier) {
      // Populations in thousands (tier 1) or millions (tiers 2–3).
      const unit = tier === 1 ? "thousand" : "million";
      let young = 0, old = 0, work = 0;
      if (tier === 1) {
        work = rng.pick([200, 400, 500, 800, 1000]);
        young = rng.int(2, 16) * (work / 20);
        old = rng.int(1, 8) * (work / 20);
      } else {
        work = rng.int(20, 600) / 10;
        young = roundTo((work * rng.int(tier === 2 ? 15 : 10, tier === 2 ? 80 : 90)) / 100, 1);
        old = roundTo((work * rng.int(5, tier === 2 ? 30 : 55)) / 100, 1);
        if (young <= 0) young = 0.1;
        if (old <= 0) old = 0.1;
      }
      const deps = clean(young + old);
      const exact = (deps / work) * 100;
      const ans = roundTo(exact, 1);
      const ask = tier === 3 ? rng.pick(["total", "old", "young"] as const) : "total";
      const traps: Trap[] = [];
      let prompt: string, answerVal: number, solution: string[];
      const table = `| Age group | Population (${unit}s) |\n| --- | --- |\n| 0–14 | ${big(young)} |\n| 15–64 | ${big(work)} |\n| 65+ | ${big(old)} |`;
      if (ask === "total") {
        answerVal = ans;
        prompt = `Use the table to work out the **dependency ratio** (dependants per 100 people of working age). Give your answer to 1 decimal place.\n\n${table}`;
        solution = [
          `Dependants = 0–14 + 65+ = ${big(young)} + ${big(old)} = ${big(deps)} ${unit}.`,
          `Dependency ratio = {{${deps}/${work}}} × 100 = ${num(roundTo(exact, 4))}${roundTo(exact, 4) === exact ? "" : "…"}`,
          `= **${dp1(ans)}** dependants per 100 working-age people.`,
        ];
        const inv = roundTo((work / deps) * 100, 1);
        if (inv !== ans) traps.push({ spec: { type: "number", value: inv }, feedback: "You divided the wrong way round — it is dependants ÷ working-age population." });
        const total = clean(young + old + work);
        const wrongShare = roundTo((deps / total) * 100, 1);
        if (wrongShare !== ans) traps.push({ spec: { type: "number", value: wrongShare }, feedback: "You divided by the WHOLE population — divide by the 15–64 group only." });
      } else {
        const part = ask === "old" ? old : young;
        answerVal = roundTo((part / work) * 100, 1);
        prompt = `Use the table to work out the **${ask === "old" ? "old-age" : "young"} dependency ratio** (${ask === "old" ? "over-65s" : "under-15s"} per 100 people aged 15–64). Give your answer to 1 decimal place.\n\n${table}`;
        solution = [
          `${ask === "old" ? "Old-age" : "Young"} dependency ratio = {{${part}/${work}}} × 100.`,
          `= **${dp1(answerVal)}** per 100 working-age people.`,
        ];
        if (ans !== answerVal) traps.push({ spec: { type: "number", value: ans }, feedback: `That's the TOTAL dependency ratio — use only the ${ask === "old" ? "65+" : "0–14"} group.` });
      }
      return {
        prompt,
        answer: { type: "number", value: answerVal, tolerance: 0.05 },
        solution,
        hint: "Dependants are the 0–14 and 65+ groups; divide by the 15–64 group and multiply by 100.",
        traps: traps.length ? traps : undefined,
      };
    },
  },
  {
    id: `${T}.old-age-share`,
    topicId: T,
    title: "Calculate the percentage of the population aged 65+",
    level: 2,
    guideRef: "ageing-youthful",
    generate(rng, tier) {
      const places = ["Country A", "Country B", "Island X", "Region P", "Country Q", "Town Z"];
      const place = rng.pick(places);
      let total: number, old: number;
      if (tier === 1) {
        total = rng.pick([1000, 2000, 4000, 5000, 10000]);
        old = rng.int(1, 30) * (total / 100);
      } else if (tier === 2) {
        total = rng.int(20, 150) * 1000;
        old = rng.int(3000, Math.floor(total * 0.35));
      } else {
        total = rng.int(200, 990) * 10000;
        old = rng.int(50, Math.floor(total * 0.33 / 1000)) * 1000 + rng.int(0, 9) * 100;
      }
      const pct = roundTo((old / total) * 100, 1);
      const label = pct >= 21 ? "super-aged (21% or more aged 65+)" : pct >= 14 ? "aged (14% to under 21% aged 65+)" : pct >= 7 ? "ageing (7% to under 14% aged 65+)" : "not yet ageing (under 7% aged 65+)";
      const traps: Trap[] = [];
      const inv = roundTo(total / old, 1);
      if (Math.abs(inv - pct) > 0.05) traps.push({ spec: { type: "number", value: inv }, feedback: "You divided the total by the over-65s — divide the over-65s by the total, then × 100." });
      const rest = roundTo(100 - pct, 1);
      if (Math.abs(rest - pct) > 0.05) traps.push({ spec: { type: "number", value: rest }, feedback: "That's the percentage UNDER 65 — the question asks for the share aged 65+." });
      return {
        prompt: `${place} has a population of ${big(total)}, of whom ${big(old)} are aged 65 or over. What percentage of the population is aged 65+? Give your answer to 1 decimal place.`,
        answer: { type: "number", value: pct, tolerance: 0.05 },
        solution: [
          `% aged 65+ = {{${old}/${total}}} × 100`,
          `= **${dp1(pct)}%**`,
          `Using commonly used labels, this population is ${label}.`,
        ],
        hint: "Part ÷ whole × 100.",
        traps: traps.length ? traps : undefined,
      };
    },
  },
  {
    id: `${T}.sex-ratio`,
    topicId: T,
    title: "Calculate a sex ratio (males per 100 females)",
    level: 2,
    guideRef: "china-one-child",
    generate(rng, tier) {
      let girls: number, boys: number;
      if (tier === 1) {
        girls = rng.pick([1000, 2000, 5000, 10000]);
        boys = (rng.int(100, 125) * girls) / 100;
      } else {
        girls = rng.int(300, 990) * (tier === 2 ? 10 : 1000);
        boys = Math.round(girls * rng.int(1000, 1250) / 1000) + rng.int(0, 9);
      }
      const ratio = roundTo((boys / girls) * 100, 1);
      const what = rng.pick(["babies born in a city in one year", "children aged 0–4 in a province", "births recorded in a county"]);
      const traps: Trap[] = [];
      const inv = roundTo((girls / boys) * 100, 1);
      if (inv !== ratio) traps.push({ spec: { type: "number", value: inv }, feedback: "You worked out females per 100 males — the sex ratio is MALES per 100 females." });
      return {
        prompt: `Among ${what}, there were ${big(boys)} boys and ${big(girls)} girls. Calculate the sex ratio (boys per 100 girls)${tier === 1 ? "" : " to 1 decimal place"}.`,
        answer: { type: "number", value: ratio, tolerance: tier === 1 ? 0 : 0.05 },
        solution: [
          `Sex ratio = {{${boys}/${girls}}} × 100 = **${tier === 1 ? num(ratio) : dp1(ratio)}** boys per 100 girls.`,
          ratio > 107
            ? "The natural sex ratio at birth is about 105 — this is well above it, a sign of son preference like that seen in China during the One-Child era."
            : ratio >= 103
              ? "The natural sex ratio at birth is about 105 boys per 100 girls, so this is close to normal."
              : "The natural sex ratio at birth is about 105 boys per 100 girls, so this is a little below the usual figure — no sign of son preference.",
        ],
        hint: "Boys ÷ girls × 100.",
        traps: traps.length ? traps : undefined,
      };
    },
  },
  // ---------- Level 3: multi-step / stretch ----------
  {
    id: `${T}.percent-change`,
    topicId: T,
    title: "Percentage change in births after a policy",
    level: 3,
    guideRef: "population-policies",
    generate(rng, tier) {
      const country = rng.pick(["Country A", "Country B", "Country C", "an island nation", "a city-state"]);
      const policy = rng.pick(["a cash Baby Bonus", "free childcare", "longer parental leave", "a two-child limit", "free family-planning clinics", "a 'stop at two' campaign"]);
      const pro = ["a cash Baby Bonus", "free childcare", "longer parental leave"].includes(policy);
      let before: number, after: number;
      if (tier === 1) {
        before = rng.int(2, 20) * 1000;
        const pc = rng.pick([5, 10, 15, 20, 25, 30]) * (pro ? 1 : -1);
        after = before + (before * pc) / 100;
      } else {
        before = rng.int(10000, 90000);
        const pc = rng.int(1, 35) * (rng.bool(0.8) === pro ? 1 : -1);
        after = Math.round(before * (1 + pc / 100)) + rng.int(-40, 40);
        if (after === before) after += 17;
      }
      const ch = roundTo(((after - before) / before) * 100, 1);
      const rise = after > before;
      const traps: Trap[] = [];
      const wrongBase = roundTo(((after - before) / after) * 100, 1);
      if (Math.abs(wrongBase - ch) > 0.05) traps.push({ spec: { type: "number", value: wrongBase }, feedback: "You divided by the NEW value — percentage change uses the ORIGINAL value." });
      if (ch !== 0) traps.push({ spec: { type: "number", value: -ch }, feedback: rise ? "Births went UP, so the change is positive." : "Births went DOWN, so the change is negative — include the minus sign." });
      const success = pro === rise;
      return {
        prompt: `After ${country} introduced ${policy}, yearly births changed from ${big(before)} to ${big(after)}. Calculate the percentage change in births${tier === 1 ? "" : " to 1 decimal place"}. Use a minus sign for a fall.`,
        answer: { type: "number", value: ch, tolerance: tier === 1 ? 0 : 0.05 },
        solution: [
          `Change = ${big(after)} − ${big(before)} = ${big(after - before)}`,
          `% change = {{${after - before}/${before}}} × 100 = **${tier === 1 ? num(ch) : dp1(ch)}%**`,
          `This is ${pro ? "a pro-natalist" : "an anti-natalist"} policy, so ${success ? "births moved the way the government wanted" : "births moved the OPPOSITE way to what the government wanted — policies often struggle against wider social and economic trends"}.`,
        ],
        hint: "(new − original) ÷ original × 100.",
        traps: traps.length ? traps : undefined,
      };
    },
  },
  {
    id: `${T}.four-two-one`,
    topicId: T,
    title: "The 4-2-1 problem: count the generations",
    level: 3,
    guideRef: "china-one-child",
    generate(rng, tier) {
      const name = rng.pick(["Wei Ling", "Jun", "Mei", "Hana", "Ethan", "Zara", "Arjun", "Priya"]);
      const mode = tier === 1 ? rng.pick(["count", "workers"] as const) : rng.pick(["count", "ratio", "workers"] as const);
      if (mode === "count") {
        const gens = tier === 1 ? rng.pick([1, 2, 3]) : rng.pick([2, 3, 4, 5]);
        const word = ["", "parents", "grandparents", "great-grandparents", "great-great-grandparents", "great-great-great-grandparents"][gens];
        const ans = Math.pow(2, gens);
        const traps: Trap[] = [];
        if (2 * gens !== ans) traps.push({ spec: { type: "number", value: 2 * gens }, feedback: "The number doubles each generation back (2, 4, 8…), it doesn't go up by 2." });
        return {
          prompt: `${name} is an only child, and every parent and grandparent in the family tree was also an only child. How many ${word} does ${name} have (assuming they are all alive)?`,
          answer: { type: "number", value: ans },
          solution: [`Each person has 2 parents, so the number doubles every generation back.`, `${gens} generation${gens > 1 ? "s" : ""} back: {{2^${gens}}} = **${ans}**.`, "This is why one child at the bottom of a 4-2-1 tree can face a huge care burden."],
          hint: "Every person has 2 parents — double each generation.",
          traps: traps.length ? traps : undefined,
        };
      }
      if (mode === "ratio") {
        const gp = rng.pick([150, 200, 250, 300, 350, 400, 450, 500]);
        const pa = rng.pick([100, 200, 300, 400, 500, 600]);
        const total = 4 * gp + 2 * pa;
        const traps: Trap[] = [];
        if (2 * gp + 2 * pa !== total) traps.push({ spec: { type: "number", value: 2 * gp + 2 * pa }, feedback: "There are FOUR grandparents in a 4-2-1 family, not two." });
        if (gp + pa !== total) traps.push({ spec: { type: "number", value: gp + pa }, feedback: "Multiply by the number of people: 4 grandparents and 2 parents." });
        return {
          prompt: `${name} is the only child in a 4-2-1 family. In a simplified model, each of the 4 grandparents needs $${gp} a month of support and each of the 2 parents (now retired) needs $${pa} a month. How many dollars a month must ${name} provide in total?`,
          answer: { type: "number", value: total },
          solution: [`Grandparents: 4 × $${gp} = $${big(4 * gp)}`, `Parents: 2 × $${pa} = $${big(2 * pa)}`, `Total = **$${big(total)}** a month — one worker carrying six elders shows why the 4-2-1 structure worries Chinese families.`],
          hint: "4 grandparents and 2 parents — multiply each by their amount, then add.",
          traps: traps.length ? traps : undefined,
        };
      }
      // workers: next generation size with TFR
      const start = tier === 1 ? rng.pick([1000, 2000, 4000, 10000]) : rng.int(10, 99) * 1000;
      const tfr = tier === 1 ? rng.pick([1, 1.5, 3]) : tier === 2 ? rng.pick([1, 1.2, 1.4, 1.5, 1.6, 1.8, 2.5, 3]) : rng.pick([0.8, 0.9, 1.1, 1.3, 1.7]);
      const gens = tier === 3 ? 2 : 1;
      // Simplified: each generation of women = previous × TFR / 2 (half of children are girls; no deaths)
      let size = start;
      const steps: string[] = [];
      for (let g = 1; g <= gens; g++) {
        const nextExact = (size * tfr) / 2;
        steps.push(`Generation ${g}: ${big(size)} × ${num(tfr)} ÷ 2 = ${big(roundTo(nextExact, 1))}`);
        size = nextExact;
      }
      const ans = roundTo(size, 0);
      return {
        prompt: `Simplified model: ${big(start)} women each have ${num(tfr)} children on average (TFR = ${num(tfr)}); half the children are girls, and nobody dies young. How many women will there be in the ${gens === 1 ? "next generation" : "generation after next (2 generations on)"}? Give your answer to the nearest whole number.`,
        answer: { type: "number", value: ans },
        solution: [
          "Each generation of women = previous × TFR ÷ 2 (only half the babies are girls).",
          ...steps,
          `Answer: **${big(ans)}** women — ${tfr < 2 ? "fewer than before, so the population shrinks: this is why a TFR below replacement worries governments." : tfr > 2 ? "more than before, so the population grows." : "the same size."}`,
        ],
        hint: "Multiply by the TFR, then halve (only girls become the next generation's mothers).",
        traps: (() => {
          const noHalf = roundTo(start * Math.pow(tfr, gens), 0);
          return noHalf !== ans ? [{ spec: { type: "number" as const, value: noHalf }, feedback: "Only HALF the children are girls — divide by 2 each generation." }] : undefined;
        })(),
      };
    },
  },
];
