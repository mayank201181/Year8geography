// Skill drills for "How and Why Do Populations Change?"
// Retrieval fact banks (terms, cause → effect, push/pull, migration types, case-study facts)
// plus numeric skills generators (rates per 1,000, natural increase, the population-change
// equation, weighing natural change against net migration).
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { big, num, roundTo, clean } from "./helpers.ts";

const T = "population-change";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

interface Fact {
  /** Definition (noun phrase) or full question. */
  d: string;
  a: string[];
  why: string;
  hard?: boolean;
  hint?: string;
  traps?: Trap[];
}

function pickFact(rng: Rng, tier: 1 | 2 | 3, bank: Fact[]): Fact {
  const easy = bank.filter((f) => !f.hard);
  const hard = bank.filter((f) => f.hard);
  if (tier === 1) return rng.pick(easy);
  if (tier === 3 && hard.length && rng.bool(0.6)) return rng.pick(hard);
  return rng.pick(bank);
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function letterHint(term: string): string {
  const words = term.split(/\s+/).length;
  return `It starts with “${term.charAt(0).toUpperCase()}” and is ${words === 1 ? "one word" : `${words} words`}.`;
}

function termItem(rng: Rng, tier: 1 | 2 | 3, bank: Fact[]): DrillItem {
  const f = pickFact(rng, tier, bank);
  const templates = [
    (d: string) => `Give the key term for this definition: ${d}.`,
    (d: string) => `Which term means ${d}?`,
    (d: string) => `Name the term: ${d}.`,
  ];
  return {
    prompt: rng.pick(templates)(f.d),
    answer: { type: "text", accept: f.a, display: cap(f.a[0]) },
    solution: [`**${cap(f.a[0])}** — ${f.why}`],
    hint: f.hint ?? letterHint(f.a[0]),
    traps: f.traps,
  };
}

const HIGHER = ["higher", "high", "rise", "rises", "increase", "increases", "up", "goes up", "raise", "raises", "more", "higher birth rate", "higher death rate"];
const LOWER = ["lower", "low", "fall", "falls", "decrease", "decreases", "down", "goes down", "drop", "drops", "less", "reduce", "reduces", "lower birth rate", "lower death rate"];

interface Effect {
  s: string;
  up: boolean;
  why: string;
  hard?: boolean;
}

function effectItem(rng: Rng, tier: 1 | 2 | 3, bank: Effect[], rate: "birth rate" | "death rate"): DrillItem {
  const easy = bank.filter((f) => !f.hard);
  const hard = bank.filter((f) => f.hard);
  const e = tier === 1 ? rng.pick(easy) : tier === 3 && rng.bool(0.6) ? rng.pick(hard) : rng.pick(bank);
  const templates = [
    (s: string) => `Does this tend to make a country's **${rate}** higher or lower?\n\n> ${s}`,
    (s: string) => `${s} Would you expect this to push the ${rate} **higher** or **lower**?`,
    (s: string) => `Cause → effect: “${s}” Does the ${rate} tend to go higher or lower? Answer *higher* or *lower*.`,
  ];
  const right = e.up ? "higher" : "lower";
  return {
    prompt: rng.pick(templates)(e.s),
    answer: { type: "text", accept: e.up ? HIGHER : LOWER, display: right },
    solution: [`**${cap(right)}** — ${e.why}`],
    hint:
      rate === "birth rate"
        ? "Ask: does this make children more useful/affordable to a family, or does it give people (especially women) more choice and fewer reasons to have many children?"
        : "Ask: does this help people survive (health, water, food, peace), or put more people at risk of dying?",
    traps: [{ spec: { type: "text", accept: e.up ? LOWER : HIGHER }, feedback: `Not quite — think it through: ${e.why}` }],
  };
}

const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara"];

// ---------------------------------------------------------------------------
// Fact banks
// ---------------------------------------------------------------------------

const DEMO_TERMS: Fact[] = [
  { d: "the number of live births per 1,000 people in a year", a: ["birth rate", "crude birth rate"], why: "measured per 1,000 people per year so that places of different sizes can be compared.", traps: [{ spec: { type: "text", accept: ["fertility rate", "total fertility rate"] }, feedback: "Fertility rate is children per WOMAN; births per 1,000 PEOPLE is the birth rate." }] },
  { d: "the number of deaths per 1,000 people in a year", a: ["death rate", "crude death rate", "mortality rate"], why: "deaths per 1,000 people per year." },
  { d: "the growth in population when the birth rate is higher than the death rate", a: ["natural increase"], why: "births minus deaths, when births are greater. It ignores migration." },
  { d: "the fall in population when the death rate is higher than the birth rate", a: ["natural decrease"], why: "more deaths than births — happening now in Japan and several European countries." },
  { d: "the average number of children a woman is expected to have in her lifetime", a: ["total fertility rate", "fertility rate", "TFR"], why: "the TFR. Singapore's resident TFR was about 0.97 in 2023.", traps: [{ spec: { type: "text", accept: ["birth rate", "crude birth rate"] }, feedback: "Birth rate is births per 1,000 PEOPLE; children per WOMAN is the (total) fertility rate." }] },
  { d: "the fertility rate of about 2.1 children per woman that a population needs to replace itself in the long run, ignoring migration", a: ["replacement level", "replacement level fertility", "replacement-level fertility", "replacement rate", "replacement fertility"], why: "about 2.1 — two children replace the parents, and the extra 0.1 covers children who die young." },
  { d: "the number of babies per 1,000 live births who die before their first birthday", a: ["infant mortality rate", "infant mortality", "IMR"], why: "a strong indicator of healthcare, clean water and mothers' education." },
  { d: "the average number of years a newborn baby can expect to live", a: ["life expectancy"], why: "it rises as healthcare, diet, water and sanitation improve." },
  { d: "methods people use to prevent pregnancy, such as the pill or condoms", a: ["contraception", "contraceptives", "contraceptive", "birth control"], why: "easy access to contraception lets couples choose how many children to have, so birth rates fall." },
  { d: "a government policy that encourages people to have more children", a: ["pro-natalist policy", "pronatalist policy", "pro-natalist", "pronatalist", "pro natalist policy"], why: "e.g. Singapore's Baby Bonus or France's family allowances.", traps: [{ spec: { type: "text", accept: ["anti-natalist policy", "antinatalist policy", "anti-natalist"] }, feedback: "Anti-natalist policies try to REDUCE births (like China's one-child policy). 'Pro' means for more births." }] },
  { d: "a government policy that aims to reduce the number of children people have", a: ["anti-natalist policy", "antinatalist policy", "anti-natalist", "antinatalist", "anti natalist policy"], why: "e.g. China's one-child policy (1980–2015).", traps: [{ spec: { type: "text", accept: ["pro-natalist policy", "pronatalist policy", "pro-natalist"] }, feedback: "Pro-natalist policies ENCOURAGE births. 'Anti' means against more births." }] },
  { d: "a disease outbreak that spreads across many countries or the whole world", a: ["pandemic"], why: "e.g. COVID-19, declared a pandemic in 2020.", traps: [{ spec: { type: "text", accept: ["epidemic"] }, feedback: "An epidemic is a large outbreak in one area; when it spreads across the world it becomes a pandemic." }] },
  { d: "the safe disposal of sewage and provision of clean toilets", a: ["sanitation"], why: "good sanitation stops diseases like cholera spreading, so death rates fall." },
  { d: "giving people a vaccine so their body becomes immune to a disease", a: ["vaccination", "immunisation", "immunization", "vaccine", "vaccinations"], why: "vaccination against measles, polio and other diseases has cut child deaths worldwide." },
  { d: "a serious, widespread shortage of food that causes many deaths", a: ["famine"], why: "famine raises death rates sharply.", traps: [{ spec: { type: "text", accept: ["drought"] }, feedback: "Drought is a shortage of WATER. It can cause a famine, but the food shortage itself is the famine." }] },
  { d: "a regular payment made to people after they retire", a: ["pension", "state pension", "pensions"], why: "where people have pensions they rely less on their children in old age, which helps birth rates fall." },
  { d: "the growth in the share of a country's people living in towns and cities", a: ["urbanisation", "urbanization"], why: "in cities children cost more and are not needed as farm workers, so birth rates usually fall." },
  { d: "the model showing how birth rates and death rates change as a country develops", a: ["demographic transition model", "DTM", "demographic transition"], why: "the DTM: death rates fall first, then birth rates, so population grows fast in the middle stages." },
  { d: "an official count of every person living in a country, held at regular intervals", a: ["census"], why: "Singapore and the UK each hold one every 10 years (Singapore's most recent: 2020)." },
  { d: "the number of women per 100,000 live births who die from causes linked to pregnancy or childbirth", a: ["maternal mortality rate", "maternal mortality", "maternal mortality ratio", "MMR"], why: "it falls when trained midwives and hospitals are available.", hard: true },
  { d: "a population with a large and growing share of people aged 65 and over", a: ["ageing population", "aging population", "greying population"], why: "caused by low birth rates plus long life expectancy — e.g. Japan, Singapore.", hard: true },
  { d: "a population with a large share of children under 15", a: ["youthful population", "young population"], why: "caused by high birth rates — e.g. Niger, where about half the population is under 15.", hard: true },
  { d: "a disease that is always present in a particular region, such as malaria in parts of sub-Saharan Africa", a: ["endemic", "endemic disease"], why: "endemic diseases keep death rates (especially for young children) high.", hard: true },
  { d: "a sudden rise in the number of births over a few years, such as in many countries after 1945", a: ["baby boom"], why: "e.g. the post-war baby boom in the UK and USA.", hard: true },
  { d: "the number of young (under 15) and old (65 and over) people compared with the number of working age (15–64)", a: ["dependency ratio"], why: "dependants ÷ working-age × 100.", hard: true },
  { d: "the study of human populations: their size, structure and how they change", a: ["demography"], why: "demographers study births, deaths and migration.", hard: true },
];

const MIG_TERMS: Fact[] = [
  { d: "moving into a country to live there", a: ["immigration"], why: "I for In — immigration is arriving.", traps: [{ spec: { type: "text", accept: ["emigration"] }, feedback: "Emigration is LEAVING (E for Exit). Moving IN is immigration (I for In)." }] },
  { d: "leaving your country to live in another one", a: ["emigration"], why: "E for Exit — emigration is leaving.", traps: [{ spec: { type: "text", accept: ["immigration"] }, feedback: "Immigration is ARRIVING (I for In). Leaving is emigration (E for Exit)." }] },
  { d: "a person who moves into a country to live", a: ["immigrant"], why: "an immigrant arrives (I for In).", traps: [{ spec: { type: "text", accept: ["emigrant"] }, feedback: "An emigrant is someone LEAVING. Someone arriving is an immigrant." }] },
  { d: "a person who leaves their country to live in another", a: ["emigrant"], why: "an emigrant exits (E for Exit).", traps: [{ spec: { type: "text", accept: ["immigrant"] }, feedback: "An immigrant is someone ARRIVING. Someone leaving is an emigrant." }] },
  { d: "the number of immigrants minus the number of emigrants", a: ["net migration"], why: "positive if more people arrive than leave, negative if more leave." },
  { d: "a person forced to flee their country because of war or persecution, who has been given protection in another country", a: ["refugee"], why: "a refugee has crossed a border and been granted protection.", traps: [{ spec: { type: "text", accept: ["asylum seeker", "asylum-seeker"] }, feedback: "An asylum seeker is still WAITING for a decision; once protection is granted they are a refugee." }] },
  { d: "a person who has fled their country and applied for protection in another, but is still waiting for a decision", a: ["asylum seeker", "asylum-seeker"], why: "if the claim is accepted, they become a refugee.", traps: [{ spec: { type: "text", accept: ["refugee"] }, feedback: "Close — but they are still waiting for a decision, so they are an asylum seeker, not yet a refugee." }] },
  { d: "a person who moves to another place mainly to find work or earn more money", a: ["economic migrant"], why: "economic migrants move voluntarily for jobs and higher wages." },
  { d: "the movement of people from one place to another within the same country", a: ["internal migration"], why: "no border is crossed.", traps: [{ spec: { type: "text", accept: ["international migration"] }, feedback: "International migration crosses a border between countries. Within one country it is internal migration." }] },
  { d: "the movement of people from one country to another", a: ["international migration"], why: "a national border is crossed.", traps: [{ spec: { type: "text", accept: ["internal migration"] }, feedback: "Internal migration stays inside one country. Between countries it is international migration." }] },
  { d: "the movement of people from the countryside to towns and cities", a: ["rural-urban migration", "rural to urban migration", "rural urban migration", "rural-to-urban migration"], why: "the main cause of fast city growth in places like Lagos and Dhaka.", traps: [{ spec: { type: "text", accept: ["urbanisation", "urbanization"] }, feedback: "Urbanisation is the RESULT (a growing urban share); the movement of people itself is rural–urban migration." }] },
  { d: "a person forced to flee their home who stays inside their own country", a: ["internally displaced person", "IDP", "internally displaced"], why: "an IDP has not crossed an international border.", traps: [{ spec: { type: "text", accept: ["refugee"] }, feedback: "A refugee has crossed an international border. Someone displaced inside their own country is an internally displaced person (IDP)." }] },
  { d: "a negative thing about a place that makes people want to leave it", a: ["push factor", "push"], why: "e.g. unemployment, conflict or poor services where you live now.", traps: [{ spec: { type: "text", accept: ["pull factor", "pull"] }, feedback: "A pull factor ATTRACTS people to a new place. Something that drives people AWAY is a push factor." }] },
  { d: "a positive thing about a place that attracts people to move there", a: ["pull factor", "pull"], why: "e.g. jobs, safety, good schools at the destination.", traps: [{ spec: { type: "text", accept: ["push factor", "push"] }, feedback: "A push factor drives people AWAY. Something that ATTRACTS them is a pull factor." }] },
  { d: "money that migrants send back to their families in their home country", a: ["remittances", "remittance"], why: "remittances are a major source of income for countries such as the Philippines and Bangladesh." },
  { d: "the loss of skilled, educated workers when they emigrate", a: ["brain drain"], why: "e.g. doctors and nurses leaving for higher-paid jobs abroad." },
  { d: "migration in which people choose to move", a: ["voluntary migration", "voluntary"], why: "e.g. moving for a better job.", traps: [{ spec: { type: "text", accept: ["forced migration", "forced"] }, feedback: "Forced migration is when people have no real choice. Choosing to move is voluntary migration." }] },
  { d: "migration in which people have no real choice but to move, for example because of war or disaster", a: ["forced migration", "forced"], why: "e.g. people fleeing conflict or a volcanic eruption.", traps: [{ spec: { type: "text", accept: ["voluntary migration", "voluntary"] }, feedback: "Voluntary migration is a free choice. Having no real choice makes it forced migration." }] },
  { d: "the long-term movement of people from one place to another to live", a: ["migration"], why: "migration is one of the two components of population change (with natural change)." },
  { d: "the movement of people out of cities into smaller towns and the countryside", a: ["counter-urbanisation", "counterurbanisation", "counter-urbanization", "counterurbanization", "counter urbanisation"], why: "common in richer countries, helped by cars, the internet and working from home.", hard: true },
  { d: "migration that happens at the same time each year, for example to help with a harvest", a: ["seasonal migration"], why: "it is temporary and repeats every year.", hard: true },
  { d: "things that make migration harder, such as distance, travel costs or visa rules, in Lee's push–pull model", a: ["intervening obstacles", "intervening obstacle"], why: "Everett Lee (1966) showed obstacles between origin and destination can stop a move.", hard: true },
  { d: "moving in a series of smaller moves, for example village → town → city", a: ["step migration", "stepwise migration"], why: "each step is a short move to a slightly bigger place.", hard: true },
  { d: "the movement of migrants back to the country they originally came from", a: ["return migration"], why: "e.g. migrants retiring to their home country.", hard: true },
  { d: "the difference between immigration and emigration per 1,000 people per year", a: ["net migration rate"], why: "per 1,000 people makes it a RATE, so countries can be compared.", hard: true, traps: [{ spec: { type: "text", accept: ["net migration"] }, feedback: "Close — but 'per 1,000 people per year' makes it a RATE: the net migration rate." }] },
];

const BIRTH_EFFECTS: Effect[] = [
  { s: "More girls stay in school until they are 18.", up: false, why: "educated women tend to marry later, know more about contraception and have careers, so they usually choose to have fewer children." },
  { s: "More women have careers outside the home.", up: false, why: "women with careers often delay having children and have fewer of them." },
  { s: "Contraception becomes cheap and easy to get.", up: false, why: "couples can choose how many children to have, so unplanned births fall." },
  { s: "Infant mortality falls, so parents expect their children to survive.", up: false, why: "parents no longer need to have extra children 'in case' some die young." },
  { s: "Families move from farms to cities, where children cost more to raise.", up: false, why: "in cities children are not needed as farm workers and housing and schooling cost more." },
  { s: "The government introduces a state pension, so parents rely less on their children in old age.", up: false, why: "children are no longer needed as a pension, so families have fewer." },
  { s: "Housing and school fees become much more expensive.", up: false, why: "the higher cost of raising each child leads families to have fewer." },
  { s: "The government fines couples who have more than one child.", up: false, why: "this is an anti-natalist policy (like China's one-child policy) designed to cut births." },
  { s: "Women marry later, often in their late twenties or thirties.", up: false, why: "fewer child-bearing years after marriage means fewer children on average." },
  { s: "Family-planning clinics open in rural villages.", up: false, why: "access to advice and contraception lets couples have fewer children if they wish — Bangladesh cut its fertility rate this way." },
  { s: "Child labour is banned and school becomes compulsory, so children no longer earn money for the family.", up: false, why: "children become a cost rather than a source of income." },
  { s: "Couples worry about long working hours and the high cost of raising a child in a big city.", up: false, why: "this is a key reason given for very low fertility in Singapore, South Korea and Japan.", hard: true },
  { s: "The economy shifts from farming to offices and factories.", up: false, why: "children are no longer needed to work the land, and education becomes more important and costly.", hard: true },
  { s: "Women gain the right to decide for themselves about marriage and family size.", up: false, why: "where women have more control, they usually choose smaller families.", hard: true },
  { s: "Many babies die before their first birthday, so parents have more children to make sure some survive.", up: true, why: "high infant mortality is linked with high birth rates." },
  { s: "Families need children to help work on the farm.", up: true, why: "children are an economic asset, so families have more." },
  { s: "Girls often leave school early and marry young.", up: true, why: "early marriage means more child-bearing years and less access to education and jobs." },
  { s: "Contraception is hard to get or very expensive.", up: true, why: "couples cannot easily control family size." },
  { s: "There is no state pension, so parents rely on their children in old age.", up: true, why: "children act as the family's 'pension', so having several is a safety net." },
  { s: "The government pays a large cash bonus for each new baby.", up: true, why: "this is a pro-natalist incentive (like Singapore's Baby Bonus). The effect is often small, but it pushes towards more births." },
  { s: "Religious or cultural traditions value large families.", up: true, why: "social expectations encourage couples to have more children." },
  { s: "Having many children is seen as a sign of status in the community.", up: true, why: "families gain respect from having many children, so they have more." },
  { s: "Most people live in rural villages and farm the land.", up: true, why: "rural farming families tend to have more children (extra workers, lower costs, less access to contraception)." },
  { s: "The government offers longer paid parental leave, cheaper childcare and priority for family housing.", up: true, why: "these are pro-natalist policies that make having children easier and cheaper.", hard: true },
  { s: "Women have little access to education or paid jobs.", up: true, why: "without education or careers, women tend to marry earlier and have more children.", hard: true },
  { s: "A war ends and soldiers return home, leading to many marriages.", up: true, why: "this caused the post-1945 'baby boom' in countries like the UK and USA.", hard: true },
];

const DEATH_EFFECTS: Effect[] = [
  { s: "A national vaccination programme protects children against measles and polio.", up: false, why: "vaccines prevent deadly diseases, especially among young children." },
  { s: "Clean piped water reaches every village.", up: false, why: "clean water stops water-borne diseases such as cholera and diarrhoea." },
  { s: "Sewers and toilets are built across the city.", up: false, why: "good sanitation stops sewage spreading disease." },
  { s: "More doctors and nurses are trained.", up: false, why: "more people can get treatment when they are ill." },
  { s: "Antibiotics become cheap and widely available.", up: false, why: "infections that used to kill can now be cured." },
  { s: "Better farming methods give reliable harvests and enough food.", up: false, why: "a reliable food supply prevents famine and malnutrition." },
  { s: "Mosquito nets are given out in areas with malaria.", up: false, why: "nets cut malaria infections, which kill many young children." },
  { s: "New health clinics are built in rural areas.", up: false, why: "people no longer have to travel far for treatment." },
  { s: "Schools teach handwashing and hygiene.", up: false, why: "simple hygiene stops many infections spreading." },
  { s: "A long civil war ends.", up: false, why: "fewer people are killed and health services can recover." },
  { s: "Trained midwives help with most births.", up: false, why: "fewer mothers and babies die during childbirth." },
  { s: "Treatment for HIV becomes cheap and widely available.", up: false, why: "life expectancy in southern Africa recovered once HIV treatment spread.", hard: true },
  { s: "Fewer people smoke after cigarette taxes rise.", up: false, why: "less smoking means fewer deaths from heart disease and cancer.", hard: true },
  { s: "War breaks out across the country.", up: true, why: "conflict kills people directly and destroys hospitals, water supplies and food supplies." },
  { s: "A drought destroys harvests and causes famine.", up: true, why: "starvation and malnutrition raise the death rate." },
  { s: "A new pandemic disease spreads before there is a vaccine.", up: true, why: "e.g. COVID-19 raised death rates in many countries in 2020–21." },
  { s: "Drinking water becomes contaminated with sewage, causing cholera.", up: true, why: "water-borne diseases spread quickly and kill." },
  { s: "Hospitals run out of medicines.", up: true, why: "treatable illnesses become deadly." },
  { s: "Many people cannot afford to see a doctor.", up: true, why: "illnesses go untreated." },
  { s: "An earthquake destroys homes and hospitals.", up: true, why: "people are killed directly and healthcare is disrupted." },
  { s: "Malaria spreads into new areas.", up: true, why: "malaria is one of the biggest killers of young children in the tropics." },
  { s: "The population becomes much older, with a large share of people aged over 80.", up: true, why: "even with excellent healthcare, an older population has more deaths per 1,000 people — this is why Japan's death rate has risen.", hard: true },
  { s: "Rates of obesity and type 2 diabetes rise sharply.", up: true, why: "these lifestyle diseases increase deaths from heart disease and stroke.", hard: true },
  { s: "Air pollution in a fast-growing city gets much worse.", up: true, why: "polluted air causes lung and heart disease.", hard: true },
  { s: "Health spending is cut and many rural clinics close.", up: true, why: "people lose access to treatment and vaccination.", hard: true },
  { s: "HIV/AIDS spreads widely and treatment is not available.", up: true, why: "in the 1990s this cut life expectancy sharply in several southern African countries.", hard: true },
];

interface PushPullFactor {
  text: string;
  push: boolean;
}

const PP_FACTORS: PushPullFactor[] = [
  { text: "the family's small shop in {o} closed down", push: true },
  { text: "wages for their kind of work in {o} are low", push: true },
  { text: "there was no secondary school near their home in {o}", push: true },
  { text: "their home in {o} was damaged in a flood", push: true },
  { text: "the nearest hospital to their home in {o} was hours away", push: true },
  { text: "they felt unsafe because of rising crime near their home in {o}", push: true },
  { text: "their house in {o} was badly overcrowded", push: true },
  { text: "they could not find steady work in {o}", push: true },
  { text: "the harvest on their land in {o} failed", push: true },
  { text: "they faced discrimination in {o}", push: true },
  { text: "a cousin in {d} offered them a place to stay", push: false },
  { text: "a job with higher pay was waiting in {d}", push: false },
  { text: "there are good schools for the children in {d}", push: false },
  { text: "there are better hospitals in {d}", push: false },
  { text: "there is steady, year-round work in {d}", push: false },
  { text: "they heard that {d} is safe and peaceful", push: false },
  { text: "the eldest child was offered a university place in {d}", push: false },
  { text: "friends from home already live in {d}", push: false },
  { text: "electricity and clean water are more reliable in {d}", push: false },
  { text: "a company in {d} offered a work visa", push: false },
];

const PP_MOVES: { from: string; o: string; d: string }[] = [
  { from: "a farming village in Bihar, India", o: "the village", d: "Mumbai" },
  { from: "rural Vietnam", o: "rural Vietnam", d: "Ho Chi Minh City" },
  { from: "the Philippines", o: "the Philippines", d: "Singapore" },
  { from: "rural Sichuan, China", o: "Sichuan", d: "Shenzhen" },
  { from: "a village in northern Nigeria", o: "the village", d: "Lagos" },
  { from: "Poland", o: "Poland", d: "the UK" },
  { from: "Myanmar", o: "Myanmar", d: "Thailand" },
  { from: "Bangladesh", o: "Bangladesh", d: "Malaysia" },
  { from: "a small town in Scotland", o: "the town", d: "London" },
  { from: "Mexico", o: "Mexico", d: "the USA" },
];

interface MoveScenario {
  s: string;
  forced: boolean;
  internal: boolean;
  why: string;
}

const MOVES: MoveScenario[] = [
  { s: "Ravi moves from a village in Tamil Nadu to Chennai to work in a car factory.", forced: false, internal: true, why: "he chose to move for work, and Tamil Nadu and Chennai are both in India." },
  { s: "A family flees the fighting in Syria and crosses into Turkey.", forced: true, internal: false, why: "war gave them no real choice, and they crossed a border." },
  { s: "Mei moves from Malaysia to Singapore for a nursing job.", forced: false, internal: false, why: "she chose to move for work and crossed a border." },
  { s: "Villagers in China were moved out of their homes because the Three Gorges Dam flooded their valley, and resettled elsewhere in China.", forced: true, internal: true, why: "they had no choice (their land was flooded) but stayed in China — over a million people were relocated." },
  { s: "In 2017 Rohingya families fled violence in Myanmar and crossed into Bangladesh.", forced: true, internal: false, why: "violence forced them out and they crossed a border." },
  { s: "A retired couple moves from London to Spain to enjoy the sunshine.", forced: false, internal: false, why: "a free choice that crosses a border (retirement migration)." },
  { s: "Aisha's family moves from Lagos to Abuja because her mother got a government job.", forced: false, internal: true, why: "a chosen move for work, within Nigeria." },
  { s: "People escape a volcanic eruption and move to a safer town in the same country.", forced: true, internal: true, why: "the eruption forced them out, but they stayed in their own country." },
  { s: "Arjun, a software engineer from India, takes a job in Singapore on an Employment Pass.", forced: false, internal: false, why: "a chosen move for work across a border." },
  { s: "After Hurricane Katrina in 2005, many families from New Orleans resettled in Houston, Texas.", forced: true, internal: true, why: "the hurricane destroyed their homes, and they stayed within the USA." },
  { s: "In 2022 Ukrainian families fled the war and crossed into Poland.", forced: true, internal: false, why: "war forced them out, and they crossed a border." },
  { s: "Wei Ling leaves Singapore to study at a university in the UK.", forced: false, internal: false, why: "a free choice that crosses a border." },
  { s: "Families near Fukushima were evacuated after the 2011 nuclear accident and moved to other parts of Japan.", forced: true, internal: true, why: "they were ordered out for their safety but stayed within Japan." },
  { s: "Jun leaves his village in rural Sichuan to work in a factory in Shenzhen.", forced: false, internal: true, why: "a chosen move for work within China (rural–urban migration)." },
  { s: "A Filipino woman moves to Hong Kong to work as a domestic helper.", forced: false, internal: false, why: "she chose to move for work and crossed from one country to another." },
  { s: "In 2023 families fled fighting in Sudan and crossed into Chad.", forced: true, internal: false, why: "conflict forced them out, and they crossed a border." },
  { s: "Families in Sudan flee fighting in their city and shelter in another Sudanese town.", forced: true, internal: true, why: "conflict forced them out, but they stayed in Sudan (internally displaced people)." },
  { s: "Marcus, a builder from Poland, moves to the UK for higher wages.", forced: false, internal: false, why: "a chosen move for work across a border." },
  { s: "Hana leaves a village in the Scottish Highlands to work in Glasgow.", forced: false, internal: true, why: "a chosen move for work within the UK." },
  { s: "A couple from Mumbai retire to a quiet town in Kerala.", forced: false, internal: true, why: "a free choice within India." },
  { s: "Siti's family moves from a flat in Tampines to a new HDB flat in Punggol.", forced: false, internal: true, why: "a chosen move within Singapore." },
  { s: "Families fled conflict in Afghanistan and crossed into Pakistan.", forced: true, internal: false, why: "conflict forced them out, and they crossed a border." },
  { s: "In the late 1990s, volcanic eruptions forced thousands of people to leave Montserrat in the Caribbean for the UK.", forced: true, internal: false, why: "the eruptions destroyed their homes, and they left the island for another country." },
  { s: "A cyclone destroys a coastal village in Bangladesh and the survivors move to Dhaka.", forced: true, internal: true, why: "the disaster forced them out, but they stayed in Bangladesh." },
  { s: "Zara, a Japanese engineer, accepts a transfer to her company's office in Germany.", forced: false, internal: false, why: "a chosen move for work across a border." },
  { s: "Ethan's family moves from Manchester to a village in Cornwall for a quieter life.", forced: false, internal: true, why: "a free choice within England (counter-urbanisation)." },
];

const CASE_FACTS: Fact[] = [
  { d: "Which landlocked West African country, whose capital is Niamey, has one of the highest fertility rates in the world?", a: ["Niger"], why: "Niger's TFR is roughly 6 children per woman, and about half its people are under 15.", hint: "It shares its name with a great West African river." },
  { d: "In 2023 Singapore's resident total fertility rate fell below which whole number for the first time?", a: ["1", "one"], why: "it was about 0.97 — far below the replacement level of about 2.1.", hint: "It is less than half of replacement level (2.1)." },
  { d: "What is the name of Singapore's cash gift to parents of newborn babies, part of its pro-natalist policy?", a: ["Baby Bonus", "Baby Bonus scheme"], why: "the Baby Bonus gives cash gifts and savings support to encourage births.", hint: "Two words: who it is for, and a word meaning an extra reward." },
  { d: "In which year did China's one-child policy begin?", a: ["1980"], why: "it ran from 1980 to 2015.", hint: "The start of a decade." },
  { d: "In which year did China's two-child policy come into effect, replacing the one-child policy?", a: ["2016"], why: "the one-child policy ended in 2015; the two-child policy began in 2016.", hint: "It came into force on 1 January, in the middle of the 2010s." },
  { d: "In which year did China move to a three-child policy?", a: ["2021"], why: "births kept falling under the two-child policy, so China allowed three children from 2021.", hint: "It was announced soon after China's 2020 census showed births still falling." },
  { d: "Which East Asian country had the world's lowest total fertility rate in 2023, at about 0.72?", a: ["South Korea", "Korea", "Republic of Korea"], why: "South Korea's TFR of about 0.72 was the lowest of any country.", hint: "Its capital is Seoul." },
  { d: "Which South Asian country cut its total fertility rate from about 6 children per woman in the 1970s to about 2 today, helped by village family-planning workers?", a: ["Bangladesh"], why: "door-to-door family-planning workers and girls' education helped fertility fall fast.", hint: "Its capital is Dhaka.", hard: true },
  { d: "Which Indian state is famous for low birth rates linked to high female literacy, even though it is not one of India's richest states?", a: ["Kerala"], why: "Kerala shows that educating women can cut birth rates even without great wealth.", hint: "A state on India's south-west (Malabar) coast.", hard: true },
  { d: "Which disease, carried by mosquitoes, is a major cause of child deaths in sub-Saharan Africa?", a: ["malaria"], why: "mosquito nets and medicines have cut malaria deaths, but it still kills many young children.", hint: "Its name comes from Italian for 'bad air'." },
  { d: "Which water-borne disease did John Snow trace to a public water pump in London in 1854?", a: ["cholera"], why: "Snow mapped cholera deaths around the Broad Street pump — evidence that clean water lowers death rates.", hint: "It spreads through water contaminated with sewage." },
  { d: "In which year did the World Health Organization declare smallpox eradicated?", a: ["1980"], why: "smallpox is the only human disease to have been eradicated, thanks to vaccination.", hint: "It was declared at the start of a decade, a few years after the last natural case (Somalia, 1977)." },
  { d: "Who developed the first smallpox vaccine, in 1796?", a: ["Edward Jenner", "Jenner"], why: "Jenner used cowpox to protect people against smallpox — the start of vaccination.", hint: "An English country doctor from Gloucestershire." },
  { d: "Which disease, caused by a virus first identified in the 1980s, cut life expectancy sharply in several southern African countries in the 1990s and 2000s?", a: ["HIV/AIDS", "AIDS", "HIV", "HIV AIDS"], why: "life expectancy recovered once antiretroviral treatment became widely available.", hint: "Four letters, often written with the virus that causes it.", hard: true },
  { d: "In which year did the World Health Organization declare COVID-19 a pandemic?", a: ["2020"], why: "COVID-19 was declared a pandemic in March 2020.", hint: "Think of the year schools around the world first closed for lockdowns." },
  { d: "Which United Nations agency protects and supports refugees?", a: ["UNHCR", "UN Refugee Agency", "United Nations High Commissioner for Refugees"], why: "UNHCR, the UN Refugee Agency.", hint: "Its initials start with UN; the rest stand for the job title of the official who leads it." },
  { d: "Which country, where a civil war began in 2011, was the origin of the largest number of refugees in the world for much of the 2010s?", a: ["Syria"], why: "millions fled to Turkey, Lebanon, Jordan and Europe.", hint: "Its capital is Damascus.", hard: true },
  { d: "In 2017 hundreds of thousands of Rohingya people fled Myanmar. Which neighbouring country did most of them flee to?", a: ["Bangladesh"], why: "most now live in camps around Cox's Bazar in Bangladesh.", hint: "Myanmar's neighbour to the west." },
  { d: "Which Singapore work pass is for lower-skilled foreign workers in sectors such as construction?", a: ["Work Permit"], why: "Work Permit holders are a big part of Singapore's foreign workforce.", hint: "Two words — it is the pass below the S Pass, for jobs in construction, shipyards and manufacturing." },
  { d: "Which Singapore work pass is for foreign professionals, managers and executives?", a: ["Employment Pass", "EP"], why: "the Employment Pass (EP) is for higher-paid professionals.", hint: "Two words — it is the top tier of pass, above the S Pass." },
  { d: "Which ship's arrival in 1948 is remembered as the start of large-scale Caribbean migration to the UK?", a: ["Empire Windrush", "Windrush", "HMT Empire Windrush"], why: "the 'Windrush generation' was invited to help fill labour shortages after the Second World War.", hint: "Its name includes a type of weather and a word for 'hurry'.", hard: true },
  { d: "Which European country's population fell by around a fifth through deaths and emigration after the potato famine of the 1840s?", a: ["Ireland"], why: "about a million people died and more than a million emigrated, many to the USA and Britain.", hint: "The Emerald Isle.", hard: true },
  { d: "In which year did world population reach 8 billion, according to the UN?", a: ["2022"], why: "the UN marked 15 November 2022 as the day the world reached 8 billion.", hint: "It was in the early 2020s — the UN picked a date in November." },
  { d: "Which Asian country, with a median age of about 49, has had more deaths than births every year since the late 2000s?", a: ["Japan"], why: "Japan has very low fertility and very high life expectancy, so its population is shrinking.", hint: "Its capital is Tokyo.", hard: true },
  { d: "What name is given to the 14th-century plague pandemic that killed perhaps a third or more of Europe's people?", a: ["Black Death", "bubonic plague", "plague"], why: "the Black Death (from 1347) shows how disease can make death rates soar.", hint: "Two words: a colour and what it brought.", hard: true },
  { d: "The 1918 influenza pandemic is often known by what name?", a: ["Spanish flu", "Spanish influenza", "1918 flu"], why: "it killed tens of millions worldwide — more than the First World War.", hint: "Named (unfairly) after a European country." },
];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  {
    id: `${T}.population-key-terms`,
    topicId: T,
    title: "Name the population key term",
    level: 1,
    guideRef: "birth-rate-factors",
    generate(rng, tier) {
      return termItem(rng, tier, DEMO_TERMS);
    },
  },
  {
    id: `${T}.migration-key-terms`,
    topicId: T,
    title: "Name the migration key term",
    level: 1,
    guideRef: "migration",
    generate(rng, tier) {
      return termItem(rng, tier, MIG_TERMS);
    },
  },
  {
    id: `${T}.birth-rate-cause-effect`,
    topicId: T,
    title: "Birth rate: higher or lower?",
    level: 1,
    guideRef: "birth-rate-factors",
    generate(rng, tier) {
      return effectItem(rng, tier, BIRTH_EFFECTS, "birth rate");
    },
  },
  {
    id: `${T}.death-rate-cause-effect`,
    topicId: T,
    title: "Death rate: higher or lower?",
    level: 1,
    guideRef: "death-rate-factors",
    generate(rng, tier) {
      return effectItem(rng, tier, DEATH_EFFECTS, "death rate");
    },
  },
  {
    id: `${T}.push-or-pull`,
    topicId: T,
    title: "Push factor or pull factor?",
    level: 1,
    guideRef: "migration",
    generate(rng) {
      const name = rng.pick(NAMES);
      const mv = rng.pick(PP_MOVES);
      const f = rng.pick(PP_FACTORS);
      const text = f.text.replace("{o}", mv.o).replace("{d}", mv.d);
      const PUSH = ["push", "push factor"];
      const PULL = ["pull", "pull factor"];
      return {
        prompt: `${name}'s family moves from ${mv.from} to ${mv.d}. Is this a **push** or a **pull** factor for their move?\n\n> ${cap(text)}.`,
        answer: { type: "text", accept: f.push ? PUSH : PULL, display: f.push ? "push factor" : "pull factor" },
        solution: f.push
          ? [`**Push factor** — it is a problem at the place they are LEAVING (${mv.o}), so it pushes them away.`]
          : [`**Pull factor** — it is an attraction at the DESTINATION (${mv.d}), so it pulls them towards it.`],
        hint: "Is this about the place they are leaving, or the place they are going to?",
        traps: [
          {
            spec: { type: "text", accept: f.push ? PULL : PUSH },
            feedback: f.push
              ? `Check where it happens: ${mv.o} is where they are LEAVING. Problems at the origin push people out.`
              : `Check where it happens: ${mv.d} is where they are GOING. Attractions at the destination pull people in.`,
          },
        ],
      };
    },
  },
  {
    id: `${T}.classify-migration`,
    topicId: T,
    title: "Classify the migration",
    level: 2,
    guideRef: "migration",
    generate(rng, tier) {
      const m = rng.pick(MOVES);
      const askForced = tier === 1 ? true : tier === 2 ? rng.bool() : rng.bool(0.4);
      if (askForced) {
        const VOL = ["voluntary", "voluntary migration"];
        const FOR = ["forced", "forced migration", "involuntary"];
        return {
          prompt: `${m.s}\n\nIs this **voluntary** or **forced** migration?`,
          answer: { type: "text", accept: m.forced ? FOR : VOL, display: m.forced ? "forced" : "voluntary" },
          solution: [`**${m.forced ? "Forced" : "Voluntary"}** — ${m.why}`],
          hint: "Did they have a real choice about whether to move?",
          traps: [{ spec: { type: "text", accept: m.forced ? VOL : FOR }, feedback: m.forced ? "Did they really have a choice? War, persecution and disasters FORCE people to move." : "Nobody made them go — moving for work, study or a better life is a free choice, so it is voluntary." }],
        };
      }
      const INT = ["internal", "internal migration"];
      const INTL = ["international", "international migration"];
      return {
        prompt: `${m.s}\n\nIs this **internal** or **international** migration?`,
        answer: { type: "text", accept: m.internal ? INT : INTL, display: m.internal ? "internal" : "international" },
        solution: [`**${m.internal ? "Internal" : "International"}** — ${m.why}`],
        hint: "Did they cross a border between two countries?",
        traps: [{ spec: { type: "text", accept: m.internal ? INTL : INT }, feedback: m.internal ? "Check the map: both places are in the SAME country, so no border is crossed." : "Check the map: they ended up in a DIFFERENT country, so a border was crossed." }],
      };
    },
  },
  {
    id: `${T}.rates-per-thousand`,
    topicId: T,
    title: "Calculate a birth or death rate per 1,000",
    level: 2,
    guideRef: "birth-rate-factors",
    generate(rng, tier) {
      const isBirth = rng.bool();
      const ev = isBirth ? "births" : "deaths";
      const rateName = isBirth ? "birth rate" : "death rate";
      const place = tier === 3 ? rng.pick(["A city", "A region", "A small country", "A province", "A large island"]) : rng.pick(["A town", "A district", "An island", "A city suburb", "A rural region", "A new town"]);
      if (tier === 1) {
        const k = rng.int(8, 90);
        const r = isBirth ? rng.int(8, 42) : rng.int(5, 16);
        const P = k * 1000;
        const E = r * k;
        return {
          prompt: `${place} has ${big(P)} people. In one year there were ${big(E)} ${ev}. Calculate the ${rateName} per 1,000 people.`,
          answer: { type: "number", value: r },
          solution: [`${cap(rateName)} = ${ev} ÷ population × 1,000`, `= ${big(E)} ÷ ${big(P)} × 1,000 = ${r} per 1,000`],
          hint: "Divide the number of events by the population, then multiply by 1,000.",
          traps: [
            { spec: { type: "number", value: clean(r / 10) }, feedback: "You multiplied by 100 (a percentage). Rates are given per 1,000 people — multiply by 1,000." },
          ],
        };
      }
      if (tier === 3 && rng.bool()) {
        // Reverse: rate and population → number of events.
        const m = rng.int(12, 90) * 100; // thousands of people, e.g. 2,400 thousand
        const P = m * 1000;
        const r10 = isBirth ? rng.int(55, 300) : rng.int(45, 130); // rate × 10
        const r = clean(r10 / 10);
        const E = clean((r10 * m) / 10);
        if (!Number.isInteger(E)) {
          // Force a whole number of events by making m a multiple of 10.
          const m2 = m + (10 - (m % 10)) % 10;
          const P2 = m2 * 1000;
          const E2 = clean((r10 * m2) / 10);
          return reverseItem(place, P2, r, E2, ev, rateName);
        }
        return reverseItem(place, P, r, E, ev, rateName);
      }
      const P = tier === 2 ? rng.int(12, 400) * 1000 + rng.int(1, 9) * 100 : rng.int(15, 120) * 100000 + rng.int(1, 9) * 1000;
      const target = isBirth ? rng.int(6, 40) : rng.int(5, 15);
      const E = Math.round((P * target) / 1000) + rng.int(-Math.floor(P / 4000), Math.floor(P / 4000));
      const ans = roundTo((E / P) * 1000, 1);
      const pct = roundTo((E / P) * 100, 2);
      return {
        prompt: `${place} has ${big(P)} people. In one year there were ${big(E)} ${ev}. Calculate the ${rateName} per 1,000 people, to 1 decimal place.`,
        answer: { type: "number", value: ans, allowFraction: false },
        solution: [`${cap(rateName)} = ${ev} ÷ population × 1,000`, `= ${big(E)} ÷ ${big(P)} × 1,000 = ${num(roundTo((E / P) * 1000, 4))}…`, `= ${ans.toFixed(1)} per 1,000 (1 d.p.)`],
        hint: "Events ÷ population × 1,000, then round at the very end.",
        traps: [{ spec: { type: "number", value: pct, tolerance: 0.05 }, feedback: "That is a percentage (× 100). Birth and death rates are per 1,000 people — multiply by 1,000." }],
      };
    },
  },
  {
    id: `${T}.natural-increase`,
    topicId: T,
    title: "Calculate the rate of natural increase",
    level: 2,
    guideRef: "death-rate-factors",
    generate(rng, tier) {
      if (tier === 3 && rng.bool()) {
        // Reverse: NIR % and death rate → birth rate.
        const dr = rng.int(4, 14);
        const ni = rng.int(-6, 32); // per 1,000
        const nir = clean(ni / 10);
        const br = dr + ni;
        if (br <= 0 || ni === 0) {
          return natItem(rng, 2);
        }
        return {
          prompt: `A country's rate of natural increase is ${num(nir)}% and its death rate is ${dr} per 1,000. What is its birth rate per 1,000?`,
          answer: { type: "number", value: br },
          solution: [`Convert the percentage to per 1,000: ${num(nir)}% = ${num(nir)} × 10 = ${num(ni)} per 1,000`, `Birth rate − death rate = natural increase, so birth rate = ${num(ni)} + ${dr} = ${br} per 1,000`],
          hint: "First turn the percentage back into 'per 1,000' (× 10).",
          traps: clean(nir + dr) !== br ? [{ spec: { type: "number", value: clean(nir + dr) }, feedback: "You added a percentage to a rate per 1,000. Convert the % to per 1,000 first (× 10)." }] : undefined,
        };
      }
      return natItem(rng, tier);
    },
  },
  {
    id: `${T}.population-change-equation`,
    topicId: T,
    title: "Use the population change equation",
    level: 2,
    guideRef: "migration",
    generate(rng, tier) {
      const step = tier === 1 ? 10 : 1;
      const P = tier === 1 ? rng.int(20, 90) * 1000 : rng.int(30, 900) * 1000 + rng.int(0, 999);
      const scale = P / 1000;
      const B = Math.round((rng.int(7, 35) * scale) / step) * step;
      const D = Math.round((rng.int(5, tier === 1 ? 12 : 16) * scale) / step) * step;
      const I = Math.round((rng.int(1, 14) * scale) / step) * step;
      let E = Math.round((rng.int(1, 14) * scale) / step) * step;
      if (E === I) E += step * 7;
      const nat = B - D;
      const net = I - E;
      const change = nat + net;
      const kinds = tier === 1 ? ["change", "net", "natural"] : tier === 2 ? ["change", "net", "natural", "new"] : ["new", "change", "pct", "pct"];
      const kind = rng.pick(kinds);
      const table = `| Births | Deaths | Immigrants | Emigrants |\n|---|---|---|---|\n| ${big(B)} | ${big(D)} | ${big(I)} | ${big(E)} |`;
      const intro = `A town had ${big(P)} people at the start of the year. During the year:\n\n${table}\n\n`;
      const steps = [`Natural change = births − deaths = ${big(B)} − ${big(D)} = ${big(nat)}`, `Net migration = immigrants − emigrants = ${big(I)} − ${big(E)} = ${big(net)}`];
      const neg = " (use a minus sign if it is negative)";
      if (kind === "net") {
        return {
          prompt: `${intro}Calculate the **net migration**${neg}.`,
          answer: { type: "number", value: net },
          solution: [steps[1]],
          hint: "Net migration = people arriving − people leaving.",
          traps: [{ spec: { type: "number", value: -net }, feedback: "Wrong way round: net migration = immigrants − emigrants (arrivals minus departures)." }],
        };
      }
      if (kind === "natural") {
        return {
          prompt: `${intro}Calculate the **natural change** (births minus deaths)${neg}.`,
          answer: { type: "number", value: nat },
          solution: [steps[0], "Migration is not part of natural change."],
          hint: "Natural change uses births and deaths only.",
          traps: nat !== 0 ? [{ spec: { type: "number", value: -nat }, feedback: "Wrong way round: natural change = births − deaths." }] : undefined,
        };
      }
      const wrongMig = nat + I + E;
      const swapMig = nat - I + E;
      if (kind === "change") {
        const traps: Trap[] = [];
        if (wrongMig !== change) traps.push({ spec: { type: "number", value: wrongMig }, feedback: "Emigrants LEAVE, so they are subtracted, not added." });
        if (swapMig !== change && swapMig !== wrongMig) traps.push({ spec: { type: "number", value: swapMig }, feedback: "Immigrants ARRIVE (+) and emigrants LEAVE (−) — you have them the wrong way round." });
        return {
          prompt: `${intro}Calculate the **total population change** for the year${neg}.`,
          answer: { type: "number", value: change },
          solution: [...steps, `Population change = ${big(nat)} + ${net < 0 ? `(${big(net)})` : big(net)} = ${big(change)}`],
          hint: "Population change = (births − deaths) + (immigrants − emigrants).",
          traps,
        };
      }
      if (kind === "new") {
        const traps: Trap[] = [];
        if (P + wrongMig !== P + change) traps.push({ spec: { type: "number", value: P + wrongMig }, feedback: "Emigrants LEAVE the town, so subtract them." });
        if (change !== 0) traps.push({ spec: { type: "number", value: change }, feedback: "That is the change. Add it to the starting population to get the new population." });
        return {
          prompt: `${intro}What is the town's population at the **end** of the year?`,
          answer: { type: "number", value: P + change },
          solution: [...steps, `Change = ${big(change)}`, `New population = ${big(P)} + ${change < 0 ? `(${big(change)})` : big(change)} = ${big(P + change)}`],
          hint: "Work out the total change first, then apply it to the starting population.",
          traps,
        };
      }
      // pct
      let pct = roundTo((change / P) * 100, 1);
      let ch = change;
      let EE = E;
      if (pct === 0) {
        EE = E + Math.round(scale * 3);
        ch = nat + I - EE;
        pct = roundTo((ch / P) * 100, 1);
      }
      const table2 = `| Births | Deaths | Immigrants | Emigrants |\n|---|---|---|---|\n| ${big(B)} | ${big(D)} | ${big(I)} | ${big(EE)} |`;
      const pm = roundTo((ch / P) * 1000, 1);
      return {
        prompt: `A town had ${big(P)} people at the start of the year. During the year:\n\n${table2}\n\nCalculate the **percentage change** in population over the year, to 1 decimal place (use a minus sign for a fall).`,
        answer: { type: "number", value: pct, allowFraction: false },
        solution: [`Change = (${big(B)} − ${big(D)}) + (${big(I)} − ${big(EE)}) = ${big(ch)}`, `% change = change ÷ starting population × 100 = ${big(ch)} ÷ ${big(P)} × 100`, `= ${pct.toFixed(1).replace("-", "−")}% (1 d.p.)`],
        hint: "Find the total change first, then divide by the STARTING population and × 100.",
        traps: pm !== pct ? [{ spec: { type: "number", value: pm, tolerance: 0.05 }, feedback: "That is per 1,000 (× 1,000). A percentage is × 100." }] : undefined,
      };
    },
  },
  {
    id: `${T}.which-factor-matters-most`,
    topicId: T,
    title: "Weigh up: natural change or migration?",
    level: 3,
    guideRef: "significance-of-factors",
    generate(rng, tier) {
      const letter = rng.pick(["A", "B", "C", "D", "E", "F", "G", "H", "K", "M", "P", "R", "S", "T", "X", "Z"]);
      const profile = tier === 1 ? rng.pick(["young", "mixed"]) : rng.pick(["young", "ageing", "mixed", "emigration"]);
      let br = 0, dr = 0, mig = 0;
      for (let i = 0; i < 50; i++) {
        if (profile === "young") { br = rng.int(28, 46); dr = rng.int(6, 12); mig = rng.int(-4, 3); }
        else if (profile === "ageing") { br = rng.int(6, 10); dr = rng.int(8, 14); mig = rng.int(3, 12); }
        else if (profile === "emigration") { br = rng.int(9, 16); dr = rng.int(9, 14); mig = rng.int(-12, -4); }
        else { br = rng.int(9, 25); dr = rng.int(6, 12); mig = rng.int(-10, 12); }
        if (Math.abs(Math.abs(br - dr) - Math.abs(mig)) >= 3 && br !== dr && mig !== 0) break;
      }
      const nat = br - dr;
      const total = nat + mig;
      const table = `| Country ${letter} | per 1,000 people per year |\n|---|---|\n| Birth rate | ${br} |\n| Death rate | ${dr} |\n| Net migration rate | ${num(mig)} |`;
      const natBigger = Math.abs(nat) > Math.abs(mig);
      const steps = [`Natural change = ${br} − ${dr} = ${num(nat)} per 1,000`, `Net migration = ${num(mig)} per 1,000`];
      const kind = tier === 1 ? "which" : tier === 2 ? rng.pick(["which", "which", "total"]) : rng.pick(["which", "total", "pct"]);
      if (kind === "which" || total === 0) {
        const NAT = ["natural change", "natural increase", "natural decrease", "natural", "births and deaths", "natural population change"];
        const MIG = ["net migration", "migration", mig > 0 ? "immigration" : "emigration"];
        return {
          prompt: `${table}\n\nWhich component had the **bigger effect** on Country ${letter}'s population this year (in either direction): **natural change** or **net migration**?`,
          answer: { type: "text", accept: natBigger ? NAT : MIG, display: natBigger ? "natural change" : "net migration" },
          solution: [...steps, `Compare sizes, ignoring the sign: ${Math.abs(nat)} vs ${Math.abs(mig)} → **${natBigger ? "natural change" : "net migration"}** mattered more.`, natBigger ? "Typical of a youthful country with high birth rates (e.g. Niger)." : mig > 0 ? "Typical of a low-fertility country that relies on immigration (e.g. Singapore)." : "Emigration is the bigger force — the country is losing people to other countries."],
          hint: "Work out natural change (BR − DR), then compare its size with the net migration rate.",
          traps: [{ spec: { type: "text", accept: natBigger ? MIG : NAT }, feedback: `Compare the sizes: natural change is ${num(nat)} and net migration is ${num(mig)} per 1,000.` }],
        };
      }
      if (kind === "total") {
        const traps: Trap[] = [];
        if (br + dr + mig !== total) traps.push({ spec: { type: "number", value: br + dr + mig }, feedback: "Deaths REDUCE population — subtract the death rate." });
        if (nat !== total) traps.push({ spec: { type: "number", value: nat }, feedback: "You left out migration. Total change = natural change + net migration." });
        return {
          prompt: `${table}\n\nCalculate Country ${letter}'s **overall population change per 1,000 people** this year (use a minus sign for a fall).`,
          answer: { type: "number", value: total },
          solution: [...steps, `Total = ${num(nat)} + ${mig < 0 ? `(${num(mig)})` : num(mig)} = ${num(total)} per 1,000`],
          hint: "Total change = (birth rate − death rate) + net migration rate.",
          traps,
        };
      }
      const pct = clean(total / 10);
      return {
        prompt: `${table}\n\nBy what **percentage** did Country ${letter}'s population change this year? (Use a minus sign for a fall.)`,
        answer: { type: "number", value: pct },
        solution: [...steps, `Total = ${num(total)} per 1,000`, `÷ 10 to turn per 1,000 into a percentage: ${num(pct)}%`],
        hint: "Find the total change per 1,000, then ÷ 10 to get a percentage.",
        traps: [{ spec: { type: "number", value: total }, feedback: "That is per 1,000. Divide by 10 to get a percentage." }],
      };
    },
  },
  {
    id: `${T}.case-study-evidence`,
    topicId: T,
    title: "Recall the case-study evidence",
    level: 3,
    guideRef: "significance-of-factors",
    generate(rng, tier) {
      const easy = CASE_FACTS.filter((f) => !f.hard);
      const hard = CASE_FACTS.filter((f) => f.hard);
      const f = tier === 1 ? (rng.bool(0.7) ? rng.pick(easy) : rng.pick(CASE_FACTS)) : tier === 3 && rng.bool(0.6) ? rng.pick(hard) : rng.pick(CASE_FACTS);
      const lead = rng.pick(["", "Evidence check: ", "Case-study recall: "]);
      return {
        prompt: `${lead}${f.d}`,
        answer: { type: "text", accept: f.a, display: f.a[0] },
        solution: [`**${f.a[0]}** — ${f.why}`],
        hint: f.hint,
        traps: f.traps,
      };
    },
  },
];

// ---------------------------------------------------------------------------
// Item builders used above
// ---------------------------------------------------------------------------

function reverseItem(place: string, P: number, r: number, E: number, ev: string, rateName: string): DrillItem {
  const k = clean(P / 1000);
  return {
    prompt: `${place} has ${big(P)} people and a ${rateName} of ${num(r)} per 1,000. How many ${ev} would you expect in one year?`,
    answer: { type: "number", value: E },
    solution: [`Number of thousands of people = ${big(P)} ÷ 1,000 = ${big(k)}`, `${ev} = ${num(r)} × ${big(k)} = ${big(E)}`],
    hint: `A rate of ${num(r)} per 1,000 means ${num(r)} ${ev} for every 1,000 people.`,
    traps: [{ spec: { type: "number", value: clean(r * P) }, feedback: "You forgot the 'per 1,000': divide the population by 1,000 first." }],
  };
}

function natItem(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  let br: number, dr: number;
  const decimals = tier === 3;
  do {
    if (tier === 1) {
      br = rng.int(14, 46);
      dr = rng.int(5, 13);
    } else if (decimals) {
      br = clean(rng.int(55, 420) / 10);
      dr = clean(rng.int(45, 140) / 10);
    } else {
      br = rng.int(6, 42);
      dr = rng.int(5, 16);
    }
  } while (br === dr);
  const ni = clean(br - dr);
  const nir = clean(ni / 10);
  const country = rng.pick(["A country", "Country X", "Country Y", "A developing country", "A small island nation", "A country in Europe", "A country in sub-Saharan Africa", "A country in South-East Asia"]);
  const traps: Trap[] = [{ spec: { type: "number", value: ni }, feedback: `${num(ni)} is the natural increase per 1,000. To get a percentage, divide by 10.` }];
  if (-nir !== nir) traps.push({ spec: { type: "number", value: -nir }, feedback: "Check the sign: natural increase = birth rate − death rate. A negative answer means natural decrease." });
  return {
    prompt: `${country} has a birth rate of ${num(br)} per 1,000 and a death rate of ${num(dr)} per 1,000. Calculate its **rate of natural increase** as a percentage${tier === 1 ? "" : " (give a negative answer for a natural decrease)"}.`,
    answer: { type: "number", value: nir },
    solution: [`Natural increase = birth rate − death rate = ${num(br)} − ${num(dr)} = ${num(ni)} per 1,000`, `Per 1,000 → percentage: ÷ 10 → ${num(nir)}%`, nir < 0 ? "Negative, so this is a natural decrease: without immigration the population would shrink." : "Positive, so the population grows naturally (ignoring migration)."],
    hint: "Subtract the death rate from the birth rate, then ÷ 10 to turn 'per 1,000' into a %.",
    traps,
  };
}
