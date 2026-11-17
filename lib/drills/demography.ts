import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { big, num, roundTo, clean } from "./helpers.ts";

// ---------------------------------------------------------------------------
// Fact-bank machinery (retrieval drills)
// ---------------------------------------------------------------------------

interface Fact {
  /** One or more phrasings of the same question (each must have exactly one right term). */
  q: string[];
  /** Accepted answers; the first is shown as the model answer. */
  a: string[];
  /** 1 = core, 2 = typical, 3 = stretch. */
  tier: 1 | 2 | 3;
  /** Why the answer is right (solution step). */
  why: string;
  hint?: string;
  trap?: { accept: string[]; feedback: string };
}

function pool(bank: Fact[], tier: 1 | 2 | 3): Fact[] {
  if (tier === 1) return bank.filter((f) => f.tier === 1);
  if (tier === 2) return bank.filter((f) => f.tier <= 2);
  return bank.filter((f) => f.tier >= 2);
}

function factItem(rng: Rng, tier: 1 | 2 | 3, bank: Fact[], defaultHint: string): DrillItem {
  const f = rng.pick(pool(bank, tier));
  const prompt = rng.pick(f.q);
  const traps: Trap[] = f.trap ? [{ spec: { type: "text", accept: f.trap.accept }, feedback: f.trap.feedback }] : [];
  return {
    prompt,
    answer: { type: "text", accept: f.a },
    solution: [`**${f.a[0]}** — ${f.why}`],
    hint: f.hint ?? defaultHint,
    traps: traps.length ? traps : undefined,
  };
}

// --- What is demography? key terms ----------------------------------------
const KEY_TERMS: Fact[] = [
  { tier: 1, q: ["Give the term for the study of human populations — their size, structure, distribution and how they change.", "What is the name of the subject that studies human populations and how they change?"], a: ["demography"], why: "demography comes from Greek *demos* (people) + *graphy* (writing about).", trap: { accept: ["geography"], feedback: "Close — demography is the part of geography (and social science) that studies *populations* specifically." } },
  { tier: 1, q: ["What do we call a person whose job is to study populations?", "Give the job title of a scientist who studies birth rates, death rates and migration."], a: ["demographer"], why: "a demographer studies population data such as births, deaths and migration." },
  { tier: 1, q: ["Give the term for an official count of every person in a country at a set date.", "What is the name for a government's official count of the whole population, usually held every 10 years?"], a: ["census", "population census"], why: "a census tries to count *everyone*, not just a sample.", trap: { accept: ["survey"], feedback: "A survey asks only some people. The official count of *everyone* is a census." } },
  { tier: 1, q: ["Give the term for a smaller group of people chosen to represent a whole population.", "When you only question some people because you cannot ask everyone, what is that smaller group called?"], a: ["sample"], why: "a sample stands in for the whole population, so it should be chosen fairly." },
  { tier: 1, q: ["Give the term for data you collect yourself, first-hand.", "Your class census results, which you collected yourselves, are what type of data?"], a: ["primary data", "primary"], why: "primary data is collected by you, first-hand.", trap: { accept: ["secondary data", "secondary"], feedback: "Secondary data was collected by someone else. Data you gather yourself is primary." } },
  { tier: 1, q: ["Give the term for data collected by someone else, such as a census report from SingStat.", "Figures you download from a government census website are what type of data?"], a: ["secondary data", "secondary"], why: "secondary data has already been collected and published by someone else.", trap: { accept: ["primary data", "primary"], feedback: "Primary data is collected by you. Published census tables are secondary data." } },
  { tier: 1, q: ["Give the term for the number of live births per 1,000 people per year.", "What is the name for births per 1,000 of the population in one year?"], a: ["birth rate", "crude birth rate", "cbr"], why: "birth rate is measured per 1,000 people per year so countries of different sizes can be compared.", trap: { accept: ["fertility rate", "total fertility rate"], feedback: "Fertility rate is children per *woman*. Births per 1,000 *people* per year is the birth rate." } },
  { tier: 1, q: ["Give the term for the number of deaths per 1,000 people per year.", "What is the name for deaths per 1,000 of the population in one year?"], a: ["death rate", "crude death rate", "cdr", "mortality rate"], why: "death rate is deaths per 1,000 people per year.", trap: { accept: ["infant mortality rate", "infant mortality"], feedback: "Infant mortality counts only babies under 1. All deaths per 1,000 people is the death rate." } },
  { tier: 1, q: ["Give the term for the average number of years a newborn baby can expect to live.", "What is the name for the average age people in a country are expected to live to?"], a: ["life expectancy"], why: "life expectancy rises as healthcare, diet and sanitation improve." },
  { tier: 1, q: ["Give the term for the way people are spread out across an area.", "Describing where people live on a map — crowded in some places, empty in others — describes the population ____."], a: ["population distribution", "distribution"], why: "distribution is *where* people are; density is *how many* per km².", trap: { accept: ["population density", "density"], feedback: "Density is a number (people per km²). The pattern of where people live is distribution." } },
  { tier: 1, q: ["Give the term for the average number of people per square kilometre.", "What is the name for population ÷ area, measured in people per km²?"], a: ["population density", "density"], why: "density = population ÷ area, in people per km².", trap: { accept: ["population distribution", "distribution"], feedback: "Distribution is the spread/pattern. People per km² is density." } },
  { tier: 1, q: ["Give the term for the make-up of a population by age and sex.", "A population pyramid shows the population ____ (its age and sex make-up)."], a: ["population structure", "structure", "age-sex structure", "age structure"], why: "population structure is the number or % of males and females in each age group." },
  { tier: 1, q: ["Give the term for asking questions to only some of the population rather than everyone.", "Instead of a full census, a government might run a ____ of 1 in every 20 households."], a: ["survey", "sample survey", "sampling"], why: "a survey questions a sample, so it is quicker and cheaper than a census." },
  { tier: 2, q: ["Give the term for the average number of children a woman has in her lifetime.", "Singapore's resident figure for this was about 0.97 in 2023 — the average number of children per woman. Name the measure."], a: ["total fertility rate", "fertility rate", "tfr"], why: "TFR is children per woman; about 2.1 is replacement level.", trap: { accept: ["birth rate", "crude birth rate"], feedback: "Birth rate is births per 1,000 *people*. Children per *woman* is the total fertility rate." } },
  { tier: 2, q: ["Give the term for the number of babies who die before their first birthday, per 1,000 live births.", "Deaths of babies under one year old per 1,000 live births is called the ____."], a: ["infant mortality rate", "infant mortality", "imr"], why: "infant mortality rate is one of the best single measures of a country's healthcare.", trap: { accept: ["death rate", "crude death rate"], feedback: "Death rate counts everyone. Babies under 1 per 1,000 live births is infant mortality." } },
  { tier: 2, q: ["Give the term for birth rate minus death rate.", "If births outnumber deaths, the population grows by ____ (ignoring migration)."], a: ["natural increase", "rate of natural increase", "natural growth", "natural change"], why: "natural increase = birth rate − death rate; migration is counted separately." },
  { tier: 2, q: ["Give the term for people moving INTO a country to live.", "Workers arriving in Singapore from other countries to live and work are examples of ____."], a: ["immigration", "immigrant"], why: "*im*migration = moving *in*.", trap: { accept: ["emigration", "emigrant"], feedback: "Emigration is *exit*-ing a country. Moving in is immigration." } },
  { tier: 2, q: ["Give the term for people moving OUT of a country to live elsewhere.", "A family leaving their home country to settle abroad is an example of ____."], a: ["emigration", "emigrant"], why: "*e*migration = *exit*ing a country.", trap: { accept: ["immigration", "immigrant"], feedback: "Immigration is moving *in*. Leaving a country is emigration." } },
  { tier: 2, q: ["Give the term for immigration minus emigration.", "The difference between the number of people arriving and the number leaving a country is called ____."], a: ["net migration"], why: "net migration = immigrants − emigrants; it can be positive or negative." },
  { tier: 2, q: ["Every how many years does Singapore hold a full population census? Give a number.", "Singapore's censuses were held in 2000, 2010 and 2020. How many years apart are they?"], a: ["10", "ten", "10 years", "every 10 years"], why: "Singapore, like the UK, holds a census every 10 years (most recently 2020)." },
  { tier: 2, q: ["In which year was Singapore's most recent full census held?", "Give the year of Singapore's latest census (the one before the next due in 2030)."], a: ["2020"], why: "Census 2020 was Singapore's most recent census; they are held every 10 years." },
  { tier: 3, q: ["Since 2000, Singapore's census has combined government administrative records with a large sample survey instead of visiting every home. What is this type of census called?", "A census built mainly from existing government records (such as registrations of births and addresses) rather than door-to-door forms is called a ____ census."], a: ["register-based census", "register-based", "register based", "register based census", "register"], why: "Singapore's Censuses of 2000, 2010 and 2020 used a register-based approach plus a large-scale sample survey." },
  { tier: 3, q: ["In which year was the first modern census of Great Britain held?", "Give the year of Great Britain's first national census (it has been held every 10 years since, except 1941)."], a: ["1801"], why: "the first British census was in 1801; the 1941 census was cancelled because of the Second World War." },
  { tier: 3, q: ["In which year was the first modern census of Singapore taken (as part of the Straits Settlements)?", "Singapore's first modern census was taken in the 1870s. Give the exact year."], a: ["1871"], why: "the first modern census of Singapore was taken in 1871." },
  { tier: 3, q: ["UK census forms are kept secret for how many years before the public can read them? Give a number.", "The 1921 census of England and Wales was released to the public in 2022. Under the UK rule, how many years are census returns kept closed?"], a: ["100", "100 years", "one hundred"], why: "UK census returns are closed for 100 years to protect people's privacy." },
  { tier: 3, q: ["Give the term for a population that is neither growing nor shrinking because births and deaths balance out (ignoring migration).", "When birth rate equals death rate, the population is described as ____."], a: ["stable", "stable population", "stationary", "stationary population", "zero growth", "zero population growth"], why: "with no natural increase or decrease the population is stable (stationary)." },
  { tier: 3, q: ["Give the TFR (children per woman) needed to replace the parents' generation in the long run in a country with low death rates.", "What value of total fertility rate is called 'replacement level'?"], a: ["2.1"], why: "about 2.1 children per woman replaces both parents, with a little extra because some children die before adulthood and slightly more boys than girls are born." },
  { tier: 3, q: ["Give the term for a change in population caused only by births and deaths being unequal, where deaths are greater than births.", "When death rate is higher than birth rate, the population experiences natural ____."], a: ["natural decrease", "decrease", "natural decline"], why: "natural decrease = deaths > births, as in Japan since the late 2000s." },
];

// --- Running a class census ------------------------------------------------
const CENSUS_TERMS: Fact[] = [
  { tier: 1, q: ["Give the term for a question with a fixed set of answers to choose from (e.g. tick: walk / bus / MRT / car).", "\"How do you travel to school? Tick one: walk, bus, MRT, car\" is what type of question?"], a: ["closed question", "closed"], why: "closed questions are quick to answer and easy to tally and graph.", trap: { accept: ["open question", "open"], feedback: "An open question lets people write anything. Fixed tick-box answers make it closed." } },
  { tier: 1, q: ["Give the term for a question people can answer in their own words (e.g. \"What do you like about your neighbourhood?\").", "\"Describe your favourite place in Singapore\" is what type of question?"], a: ["open question", "open"], why: "open questions give rich detail but are harder to tally.", trap: { accept: ["closed question", "closed"], feedback: "Closed questions have fixed options. Free answers in your own words come from an open question." } },
  { tier: 1, q: ["Give the name of the set of questions handed out in a survey.", "A printed or online form of survey questions is called a ____."], a: ["questionnaire"], why: "a questionnaire is the list of questions used to collect survey data." },
  { tier: 1, q: ["Give the name of the chart where you record each answer with a stroke, grouping them in fives.", "Recording answers as |||| with a line through every fifth is called a ____ chart."], a: ["tally", "tally chart"], why: "tally marks in groups of five make counting fast and accurate." },
  { tier: 1, q: ["Give the term for a table showing how many times each answer occurs.", "A table with columns 'answer' and 'how many' is called a ____ table."], a: ["frequency", "frequency table"], why: "frequency means how often something occurs." },
  { tier: 1, q: ["Give the term for keeping people's names off the results so no one can be identified.", "Removing names so that answers cannot be traced to a person makes a census ____."], a: ["anonymous", "anonymity", "anonymised", "anonymized"], why: "anonymity protects privacy and makes people more likely to answer honestly." },
  { tier: 1, q: ["Give the term for agreeing to take part after being told what the survey is for.", "Before asking classmates questions, you should explain the purpose and get their informed ____."], a: ["consent", "informed consent"], why: "people must know what the data is for and choose freely to take part." },
  { tier: 1, q: ["Which type of graph is best for showing the proportion of a class using each transport mode as slices of a circle?", "A circle divided into slices showing shares of a whole is called a ____ chart."], a: ["pie chart", "pie"], why: "a pie chart shows parts of a whole; each slice angle = share × 360°." },
  { tier: 1, q: ["Give the average that is the most common value in a set of data.", "In a class census, the family size given most often is the ____."], a: ["mode", "modal", "modal value"], why: "the mode is the most frequent value.", trap: { accept: ["median"], feedback: "The median is the middle value. The most common value is the mode." } },
  { tier: 1, q: ["Give the average that is the middle value when data are put in order.", "Put the ages in order and take the middle one: this is the ____."], a: ["median"], why: "the median is the middle value of ordered data.", trap: { accept: ["mode"], feedback: "The mode is the most common value. The middle value is the median." } },
  { tier: 1, q: ["Give the term for the difference between the highest and lowest values.", "Largest family size minus smallest family size gives the ____."], a: ["range"], why: "range = highest − lowest; it shows the spread of data." },
  { tier: 1, q: ["Which type of graph uses separate bars with gaps between them to compare categories, such as how many students use each transport mode?", "Separate bars with gaps, one per category (walk, bus, MRT, car), make a ____ chart."], a: ["bar chart", "bar graph", "bar"], why: "bar charts compare separate categories; the gaps show the categories are not continuous.", trap: { accept: ["histogram"], feedback: "Histograms have no gaps and are for continuous data. Separate categories go on a bar chart." } },
  { tier: 1, q: ["Give the average you find by adding all the values and dividing by how many values there are.", "Add up every student's family size and divide by the number of students: this gives the ____."], a: ["mean", "average", "arithmetic mean"], why: "mean = total ÷ number of values.", trap: { accept: ["median"], feedback: "The median is the middle value. Total ÷ number of values is the mean." } },
  { tier: 1, q: ["Give the term for a question that pushes people towards a particular answer, e.g. \"Don't you agree that our school needs more green space?\"", "\"Surely you think the canteen should open earlier?\" is a ____ question — avoid these in a census."], a: ["leading question", "leading"], why: "leading questions bias the answers, so the data is not trustworthy." },
  { tier: 2, q: ["Give the term for testing your questionnaire on a few people first to find confusing questions.", "Trying out a survey on three friends before the real census is called a ____ survey."], a: ["pilot survey", "pilot", "pilot study", "pilot test"], why: "a pilot survey finds problems before you collect the real data." },
  { tier: 2, q: ["Give the term for keeping collected answers private and only sharing them with those who need them.", "Promising that individual answers will not be shown to anyone else is a promise of ____."], a: ["confidentiality", "confidential"], why: "confidentiality means personal data is kept private and secure." },
  { tier: 2, q: ["Give the term for when results are unfair or one-sided because of how the data was collected.", "Only asking students in the football club whether the school needs more sports pitches would give results with ____."], a: ["bias", "biased", "sampling bias"], why: "a biased sample does not represent the whole population." },
  { tier: 2, q: ["Give the term for a sample where every person has an equal chance of being chosen.", "Picking names out of a hat to choose who to survey is ____ sampling."], a: ["random", "random sampling"], why: "random sampling gives everyone an equal chance, reducing bias.", trap: { accept: ["systematic", "systematic sampling"], feedback: "Systematic means every nth person. Names from a hat is random." } },
  { tier: 2, q: ["Give the term for choosing every nth person from a list (e.g. every 10th name on the register).", "Asking every 5th person who walks out of the MRT station is ____ sampling."], a: ["systematic", "systematic sampling"], why: "systematic sampling picks at a regular interval.", trap: { accept: ["random", "random sampling"], feedback: "Random means equal chance by luck. A regular interval (every nth) is systematic." } },
  { tier: 2, q: ["Give the term for a sample split into groups in the same proportions as the whole population (e.g. 40% boys, 60% girls).", "Choosing a sample so each year group is represented in proportion to its size is ____ sampling."], a: ["stratified", "stratified sampling"], why: "stratified sampling makes sure every sub-group is fairly represented." },
  { tier: 2, q: ["Give the term for a value that is far away from all the others in a data set.", "One student reports a family of 19 when everyone else has 2–6 — that value is called an ____."], a: ["anomaly", "outlier", "anomalous result"], why: "an anomaly (outlier) should be checked — is it a mistake or a real unusual case?" },
  { tier: 2, q: ["Which type of graph is best for showing how a class's ages are spread across continuous groups such as 12.0–12.5, 12.5–13.0 years?", "A bar-style graph with no gaps between bars, used for continuous data, is called a ____."], a: ["histogram"], why: "histograms show continuous data, so the bars touch." },
  { tier: 3, q: ["Give the term for the people you actually manage to survey compared with all those you asked — as a percentage it is the ____ rate.", "If 18 of 25 people return your questionnaire, 72% is called the ____ rate."], a: ["response", "response rate"], why: "response rate = returned ÷ asked × 100; a low rate can create bias." },
  { tier: 3, q: ["Give the term for data that measure the same thing in the same way over time, so different censuses can be compared fairly.", "Census questions are kept the same each decade so results are ____ — the word means 'able to be compared'."], a: ["comparable", "comparability"], why: "if questions change, a change in results may come from the question, not the population." },
  { tier: 3, q: ["Give the term for when people give the answer they think sounds best rather than the truth (e.g. over-reporting how much they recycle).", "Answering surveys to look good rather than honestly is called social ____ bias."], a: ["desirability", "social desirability", "social desirability bias"], why: "anonymous questionnaires reduce social desirability bias." },
  { tier: 3, q: ["If you repeated your survey the same way and got very similar results, the method is described as ____.", "Give the term for data collection that gives consistent results when it is repeated."], a: ["reliable", "reliability", "consistent", "repeatable"], why: "reliable = consistent when repeated; it is not the same as being accurate (close to the true value)." },
  { tier: 3, q: ["Name the Singapore law, passed in 2012, that controls how organisations collect, use and protect people's personal data.", "Which Singapore Act (2012), often shortened to PDPA, protects personal data?"], a: ["Personal Data Protection Act", "PDPA", "Personal Data Protection Act 2012"], why: "the Personal Data Protection Act 2012 (PDPA) sets rules for collecting and using personal data in Singapore." },
  { tier: 3, q: ["Give the term for a sample chosen simply because the people were easy to reach (e.g. only your friends).", "Surveying whoever happens to be sitting near you is ____ sampling."], a: ["convenience", "convenience sampling", "opportunity", "opportunity sampling", "opportunistic", "opportunistic sampling"], why: "convenience (opportunity) sampling is quick but often biased." },
];

// --- Population pyramids -----------------------------------------------------
const PYRAMID_TERMS: Fact[] = [
  { tier: 1, q: ["Give the name of the graph showing the percentage of males and females in each age group.", "A back-to-back bar chart of age groups, males on one side and females on the other, is called a population ____."], a: ["population pyramid", "pyramid", "age-sex pyramid", "age sex pyramid"], why: "a population pyramid shows population structure by age and sex." },
  { tier: 1, q: ["On a population pyramid, what is shown on the vertical axis?", "The bars of a population pyramid are stacked in order of what — from youngest at the bottom to oldest at the top?"], a: ["age", "age groups", "age group", "age bands", "age cohorts"], why: "age groups go up the vertical axis; the horizontal axis shows % or number of people." },
  { tier: 1, q: ["Give the term for a population with a large percentage of children and young people.", "A pyramid with a very wide base and narrow top shows a ____ population."], a: ["youthful", "youthful population", "young", "young population"], why: "a wide base means many children — high birth rates.", trap: { accept: ["ageing", "ageing population", "aging"], feedback: "A wide base means lots of children: that's youthful. Ageing pyramids have a wide top." } },
  { tier: 1, q: ["Give the term for a population with a growing percentage of people aged 65 and over.", "Japan, with almost 3 in 10 people aged 65+, has an ____ population."], a: ["ageing", "ageing population", "aging", "aging population", "old", "elderly"], why: "an ageing population has a rising share of elderly people.", trap: { accept: ["youthful", "youthful population"], feedback: "Youthful means lots of children. Many people aged 65+ means ageing." } },
  { tier: 1, q: ["Niger or Japan: which country's pyramid has a very wide base?", "Which has the more youthful pyramid — Japan or Niger?"], a: ["Niger"], why: "Niger has one of the world's highest fertility rates — about half its people are under 15.", trap: { accept: ["Japan"], feedback: "Japan has a narrow base and a wide top: it is ageing." } },
  { tier: 1, q: ["Niger or Japan: which country's pyramid has a wide top and a narrow base?", "Which has the more ageing pyramid — Niger or Japan?"], a: ["Japan"], why: "Japan has low birth rates and very high life expectancy.", trap: { accept: ["Niger"], feedback: "Niger's pyramid has a wide base — very youthful." } },
  { tier: 1, q: ["Give the term for a sudden rise in births that later shows as a bulge on a pyramid.", "The bulge made by the many people born after the Second World War is called a baby ____."], a: ["baby boom", "boom"], why: "a baby boom adds a large cohort that moves up the pyramid over time." },
  { tier: 1, q: ["A pyramid's base is getting narrower each census. Are births rising or falling?", "If each new 0–4 bar is shorter than the 5–9 bar above it, are birth numbers rising or falling?"], a: ["falling", "fall", "decreasing", "declining", "dropping"], why: "fewer babies each year make the youngest bars shorter than the ones above.", trap: { accept: ["rising", "increasing"], feedback: "A shorter bottom bar means fewer recent babies — births are falling." } },
  { tier: 1, q: ["At the oldest ages (80+), which sex usually has the longer bar on a pyramid?", "In most countries, are there more men or more women aged 85 and over?"], a: ["female", "females", "women", "woman"], why: "women live longer than men on average in almost every country.", trap: { accept: ["male", "males", "men"], feedback: "Men have a lower life expectancy on average, so there are more women at the oldest ages." } },
  { tier: 1, q: ["Give the term for a group of people born in the same period, shown as one bar on a pyramid.", "Each 5-year age band on a pyramid (e.g. 10–14) represents one ____."], a: ["cohort", "age cohort", "age group", "age band"], why: "a cohort is a group born in the same period; it moves up the pyramid as it ages." },
  { tier: 1, q: ["Give the term for a short bar (an 'indent') cutting into the side of a pyramid.", "A gap where one age group is unusually small is called a ____ (or indent)."], a: ["notch", "indent", "indentation", "dent"], why: "a notch shows a smaller cohort — from war deaths, famine, a disease outbreak or a fall in births." },
  { tier: 1, q: ["Life expectancy rises. Does the top of the pyramid get wider or narrower?", "As healthcare improves and people live longer, what happens to the width of the oldest bars?"], a: ["wider", "wide", "widens", "broader"], why: "more people survive into old age, so the top bars grow.", trap: { accept: ["narrower", "narrows"], feedback: "Living longer means MORE old people — the top widens." } },
  { tier: 1, q: ["A very wide base on a pyramid means a high ____ rate.", "Which rate must be high for a pyramid to have a very wide base: birth rate or death rate?"], a: ["birth", "birth rate", "high birth rate"], why: "many babies being born each year make the bottom bars wide." },
  { tier: 1, q: ["Steeply sloping sides that narrow quickly up a pyramid show a high ____ rate.", "Which rate makes each bar much shorter than the one below it, giving a 'steep triangle' shape: birth rate or death rate?"], a: ["death", "death rate", "high death rate"], why: "if many people die at every age, fewer survive to fill the bars higher up." },
  { tier: 2, q: ["Singapore's resident TFR is about 1.0. Is that above or below replacement level?", "Is a TFR of 0.97 (Singapore, 2023) above or below the replacement level of 2.1?"], a: ["below", "below replacement", "lower"], why: "0.97 is less than half of 2.1, so each generation of residents is smaller than the last." },
  { tier: 2, q: ["What do the bars on the horizontal axis of a pyramid usually measure?", "The length of each bar on a pyramid shows the ____ of people in that age group (as a number or %)."], a: ["percentage", "percent", "%", "proportion", "number", "population", "share"], why: "bars show % of the total population (or numbers in thousands/millions)." },
  { tier: 2, q: ["A pyramid has a large bulge of young adults (about 20–35) because people have arrived from other countries. Name the process that caused it.", "A bulge of working-age adults caused by people moving in for jobs is caused by ____."], a: ["immigration", "in-migration", "in migration", "immigrants"], why: "migrant workers are mostly young adults, so they widen the 20–40 bars.", trap: { accept: ["emigration"], feedback: "Emigration (leaving) would make a notch. A bulge from arrivals is immigration." } },
  { tier: 2, q: ["A pyramid has many more males than females aged 20–40. Gulf states such as Qatar show this. What is the most likely cause?", "What explains a big male bulge aged 20–40 in a rich oil state such as Qatar?"], a: ["male migrant workers", "migrant workers", "immigration", "male immigration", "labour migration", "migrant labour", "male migrants", "migrants"], why: "large numbers of mostly male workers move there for construction and oil jobs." },
  { tier: 2, q: ["A rectangular, column-shaped pyramid (similar bar lengths at most ages) shows low birth rates and low ____ rates.", "Which rate must be low for most people to survive into old age, giving straight sides?"], a: ["death", "death rate", "low death rate", "mortality"], why: "low death rates mean most people survive to old age, so bars stay similar." },
  { tier: 2, q: ["Which falls first as a country develops, the birth rate or the death rate?", "As clean water and vaccinations arrive, which rate drops first, making the population grow fast?"], a: ["death rate", "death", "the death rate"], why: "healthcare cuts death rates quickly; birth rates fall later as attitudes and economies change." },
  { tier: 2, q: ["A pyramid narrows sharply at age 0–4 compared with 5–9 because of a government's strict limit on births. Name the Chinese policy (1980–2015).", "Which Chinese policy, from 1980 to 2015, made the base of China's pyramid narrow?"], a: ["one-child policy", "one child policy", "ocp", "one-child"], why: "the One-Child Policy (1980–2015) cut births, narrowing the base of China's pyramid." },
  { tier: 3, q: ["A notch in the 70–74 cohort of a pyramid drawn in 1990 for a European country matches people born 1916–1920. Name the event that cut births then.", "Which global conflict (1914–1918) explains a notch of low births for European cohorts born 1915–1919?"], a: ["First World War", "World War One", "World War 1", "WW1", "WWI", "Great War", "the First World War", "World War I"], why: "with millions of men away fighting or killed, far fewer babies were born." },
  { tier: 3, q: ["China's pyramid shows a notch for people born about 1959–1961. Name the event that caused it.", "Which event in China, about 1959–1961, led to a famine that left a notch on today's pyramid?"], a: ["Great Leap Forward", "Great Chinese Famine", "the Great Leap Forward", "great famine", "famine"], why: "the famine during the Great Leap Forward caused many deaths and far fewer births." },
  { tier: 3, q: ["China's pyramid has more boys than girls in young cohorts. Name the term for a population with unequal numbers of males and females.", "Give the term (two words) for an unequal ratio of males to females, as seen in China's younger cohorts."], a: ["gender imbalance", "sex imbalance", "skewed sex ratio", "sex ratio imbalance", "gender ratio imbalance", "unbalanced sex ratio", "imbalance"], why: "preference for sons under the One-Child Policy led to more boys than girls.", trap: { accept: ["sex ratio", "gender ratio"], feedback: "The sex ratio is the measure itself (males per 100 females). When it is unequal, the term is a gender (sex) imbalance." } },
  { tier: 3, q: ["Name the model that shows how birth rates and death rates change in stages as a country develops.", "Give the name of the model (often shortened to DTM) linking a country's development to its birth and death rates."], a: ["demographic transition model", "DTM", "demographic transition"], why: "the demographic transition model (DTM) shows births and deaths falling in stages as a country develops." },
  { tier: 3, q: ["Give the term for the number of males for every 100 females in a population.", "China's census reported about 105 males per 100 females in 2020. What is this measure called?"], a: ["sex ratio", "gender ratio", "male-female ratio", "male to female ratio"], why: "the sex ratio compares males with females; at birth it is naturally about 105 boys per 100 girls." },
  { tier: 3, q: ["Give the term for a pyramid whose youngest bars are SHORTER than the bars above them, giving a 'beehive' or 'urn' outline.", "A pyramid that is narrower at the base than in the middle is called a ____ (or contracting) pyramid."], a: ["constrictive", "constrictive pyramid", "contracting", "contracting pyramid", "declining", "declining pyramid", "urn", "beehive"], why: "a constrictive pyramid shows falling births — the population may start to shrink." },
  { tier: 3, q: ["Give the term for a pyramid with a wide base and steadily narrowing sides — a classic triangle shape.", "A pyramid shaped like a true triangle, showing a fast-growing population, is called an ____ pyramid."], a: ["expansive", "expansive pyramid", "expanding", "expanding pyramid", "progressive"], why: "expansive pyramids show high birth rates and a growing population." },
];

// --- Age-group classifier (dependency) ---------------------------------------
const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara"];
const REL_YOUNG = ["younger brother", "baby sister", "cousin", "neighbour's child", "younger sister"];
const REL_WORK = ["uncle", "aunt", "older cousin", "neighbour", "older brother", "family friend", "mother", "father"];
const REL_OLD = ["grandmother", "grandfather", "great-grandmother", "great-uncle", "elderly neighbour"];
const YOUNG = ["young dependent", "young dependents", "young", "child dependent", "youth dependent", "young dependant", "child"];
const WORKING = ["working age", "working-age", "working population", "economically active", "working age population", "independent", "working"];
const ELDERLY = ["elderly dependent", "elderly dependents", "elderly", "old-age dependent", "old age dependent", "elderly dependant", "old dependent", "old"];

function groupOf(age: number): { accept: string[]; label: string; band: string } {
  if (age <= 14) return { accept: YOUNG, label: "young dependent", band: "0–14" };
  if (age <= 64) return { accept: WORKING, label: "working age", band: "15–64" };
  return { accept: ELDERLY, label: "elderly dependent", band: "65 and over" };
}

// ---------------------------------------------------------------------------
// Pyramid SVG builder
// ---------------------------------------------------------------------------

const BANDS = ["0–9", "10–19", "20–29", "30–39", "40–49", "50–59", "60–69", "70+"];
const SHAPES: Record<string, { label: string; w: number[] }> = {
  youthful: { label: "youthful", w: [33, 24, 16, 11, 7, 5, 3, 1] },
  narrowing: { label: "narrowing-base", w: [8, 10, 13, 15, 16, 15, 12, 11] },
  ageing: { label: "ageing", w: [7, 8, 10, 12, 14, 15, 16, 18] },
  growing: { label: "steady-growth", w: [20, 18, 16, 14, 12, 9, 7, 4] },
};

/** 16 integer percentages (male[0..7], female[0..7]) that sum to exactly 100. */
function makePyramid(rng: Rng, shape: keyof typeof SHAPES): { m: number[]; f: number[] } {
  const w = SHAPES[shape].w;
  const raw: number[] = [];
  for (let i = 0; i < 8; i++) {
    const base = w[i] * (1 + rng.int(-12, 12) / 100);
    const femaleShare = 0.5 + (i >= 6 ? 0.06 : i >= 5 ? 0.02 : -0.01);
    raw.push(base * (1 - femaleShare));
    raw.push(base * femaleShare);
  }
  const sum = raw.reduce((a, b) => a + b, 0);
  const scaled = raw.map((r) => (r * 100) / sum);
  const ints = scaled.map((s) => Math.floor(s));
  let rem = 100 - ints.reduce((a, b) => a + b, 0);
  const order = scaled.map((s, i) => [s - Math.floor(s), i] as const).sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  for (let k = 0; rem > 0; k++, rem--) ints[order[k % 16][1]]++;
  // No empty bars.
  for (let i = 0; i < 16; i++) {
    if (ints[i] === 0) {
      ints[i] = 1;
      const j = ints.indexOf(Math.max(...ints));
      ints[j]--;
    }
  }
  const m: number[] = [], f: number[] = [];
  for (let i = 0; i < 8; i++) { m.push(ints[2 * i]); f.push(ints[2 * i + 1]); }
  return { m, f };
}

function pyramidSvg(m: number[], f: number[], title: string): string {
  const max = Math.max(...m, ...f);
  const scaleMax = max <= 10 ? 10 : max <= 14 ? 14 : max <= 18 ? 18 : 22;
  const unit = 160 / scaleMax;
  const cx = 230, gap = 24, top = 34, h = 28;
  let s = '<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Population pyramid of ' + title + ' in 10-year age groups, males on the left and females on the right, bars labelled with percentages of the total population">';
  s += '<rect x="0" y="0" width="460" height="300" fill="#ffffff"/>';
  s += '<text x="230" y="16" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">' + title + "</text>";
  s += '<text x="' + (cx - gap - 80) + '" y="30" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Males</text>';
  s += '<text x="' + (cx + gap + 80) + '" y="30" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Females</text>';
  for (let i = 0; i < 8; i++) {
    const y = top + (7 - i) * h;
    const mw = m[i] * unit, fw = f[i] * unit;
    s += '<rect x="' + clean(cx - gap - mw) + '" y="' + (y + 3) + '" width="' + clean(mw) + '" height="' + (h - 6) + '" fill="#bae6fd" stroke="#334155"/>';
    s += '<rect x="' + (cx + gap) + '" y="' + (y + 3) + '" width="' + clean(fw) + '" height="' + (h - 6) + '" fill="#fecaca" stroke="#334155"/>';
    s += '<text x="' + cx + '" y="' + (y + 18) + '" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">' + BANDS[i] + "</text>";
    s += '<text x="' + clean(cx - gap - mw - 4) + '" y="' + (y + 18) + '" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">' + m[i] + "</text>";
    s += '<text x="' + clean(cx + gap + fw + 4) + '" y="' + (y + 18) + '" font-size="11" font-family="sans-serif" fill="#1f2937">' + f[i] + "</text>";
  }
  s += '<line x1="40" y1="' + (top + 8 * h + 2) + '" x2="420" y2="' + (top + 8 * h + 2) + '" stroke="#334155"/>';
  s += '<text x="230" y="' + (top + 8 * h + 20) + '" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">% of total population (age in years in the centre)</text>';
  s += "</svg>";
  return s;
}

const PLACES = ["Country A", "Country B", "Country X", "Country Y", "Country P", "Country Q"];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // ---------------------------------------------------------------- level 1
  {
    id: "demography.key-terms",
    topicId: "demography",
    title: "Demography key terms",
    level: 1,
    guideRef: "what-is-demography",
    generate(rng, tier) {
      return factItem(rng, tier, KEY_TERMS, "Think about what is being counted, and per what (per 1,000 people? per woman? per km²?).");
    },
  },
  {
    id: "demography.census-methods",
    topicId: "demography",
    title: "Census and survey methods",
    level: 1,
    guideRef: "class-census",
    generate(rng, tier) {
      return factItem(rng, tier, CENSUS_TERMS, "Picture yourself running the class census: designing, collecting, recording or presenting?");
    },
  },
  {
    id: "demography.age-groups",
    topicId: "demography",
    title: "Classify people as young, working-age or elderly",
    level: 1,
    guideRef: "dependency-ratio",
    generate(rng, tier) {
      // Tier 3 targets the boundaries (14/15, 64/65) where most slips happen.
      const age = tier === 1 ? rng.pick([2, 5, 8, 11, 25, 30, 38, 45, 52, 70, 76, 83, 90])
        : tier === 2 ? rng.int(0, 95)
        : rng.pick([13, 14, 15, 16, 63, 64, 65, 66, 0, 1, 99]);
      const g = groupOf(age);
      const name = rng.pick(NAMES);
      // Relatives must be believable for the age (no 15-year-old "father", no 13-year-old "baby sister").
      const rel = rng.pick(
        age <= 3 ? ["baby sister", "baby brother", "cousin", "neighbour's child"]
          : age <= 14 ? REL_YOUNG.filter((r) => r !== "baby sister")
            : age <= 24 ? ["older brother", "older sister", "older cousin", "neighbour"]
              : age <= 59 ? REL_WORK
                : age <= 64 ? [...REL_WORK.slice(0, 2), "grandmother", "grandfather"]
                  : REL_OLD,
      );
      const form = rng.int(0, 2);
      const ageText = age === 0 ? "under 1 year old" : age === 1 ? "1 year old" : `${age} years old`;
      const prompt = form === 0
        ? `${name}'s ${rel} is ${ageText}. In population statistics, is this person a **young dependent**, **working age** or an **elderly dependent**?`
        : form === 1
          ? `A census records a person aged ${age === 0 ? "0" : age}. Which group are they counted in for the dependency ratio: young dependent, working age or elderly dependent?`
          : `In ${name}'s class census, a relative is ${ageText}. Using the standard age groups (0–14, 15–64, 65+), name their group: young dependent, working age or elderly dependent.`;
      const traps: Trap[] = [];
      if (age === 15 || age === 16) traps.push({ spec: { type: "text", accept: ["young dependent"] }, feedback: "Young dependents are 0–14. From 15 a person is counted as working age, even if they are still at school." });
      if (age === 64 || age === 63) traps.push({ spec: { type: "text", accept: ["elderly dependent"] }, feedback: "Elderly dependents are 65 and over; at 63–64 a person is still working age." });
      if (age === 65 || age === 66) traps.push({ spec: { type: "text", accept: ["working age"] }, feedback: "Working age is 15–64. From 65 a person counts as an elderly dependent, even if they still work." });
      if (age === 13 || age === 14) traps.push({ spec: { type: "text", accept: ["working age"] }, feedback: "Working age starts at 15. At 14 or younger a person is a young dependent." });
      return {
        prompt,
        answer: { type: "text", accept: g.accept, display: g.label },
        solution: [
          `Standard groups: young dependents 0–14, working age 15–64, elderly dependents 65+.`,
          `Age ${age} is in the ${g.band} group, so: **${g.label}**.`,
          `These are statistical groups — a 15-year-old at school still counts as working age, and a 70-year-old who works still counts as elderly.`,
        ],
        hint: "The boundaries are 15 and 65: 0–14, 15–64, 65+.",
        traps: traps.length ? traps : undefined,
      };
    },
  },
  {
    id: "demography.census-percentages",
    topicId: "demography",
    title: "Turn class-census tallies into percentages and pie-chart angles",
    level: 1,
    guideRef: "class-census",
    generate(rng, tier) {
      const topics = [
        { what: "travel to school by MRT", cat: "MRT" },
        { what: "travel to school by bus", cat: "bus" },
        { what: "walk to school", cat: "walk" },
        { what: "live in an HDB flat", cat: "HDB flat" },
        { what: "were born outside Singapore", cat: "born abroad" },
        { what: "have at least one grandparent living with them", cat: "grandparent at home" },
        { what: "speak more than two languages at home", cat: "3+ languages" },
        { what: "have no brothers or sisters", cat: "only child" },
        { what: "have lived in more than one country", cat: "lived abroad" },
      ];
      const t = rng.pick(topics);
      if (tier === 1) {
        const n = rng.pick([20, 25, 50]);
        const k = rng.int(2, n - 2);
        const pct = clean((k * 100) / n);
        return {
          prompt: `In a class census of ${n} students, ${k} ${t.what}. What percentage of the class is this?`,
          answer: { type: "number", value: pct },
          solution: [`Percentage = {{${k}/${n}}} × 100`, `= ${num(pct)}%`],
          hint: "Divide the part by the total, then multiply by 100.",
          traps: k !== pct ? [{ spec: { type: "number", value: k }, feedback: "That's the number of students, not the percentage — divide by the class size and multiply by 100." }] : undefined,
        };
      }
      if (tier === 2) {
        const n = rng.pick([22, 24, 26, 27, 28, 30, 32, 35]);
        let k = rng.int(2, n - 2);
        if ((k * 100) % n === 0) k = k + 1 < n ? k + 1 : k - 1;
        const pct = roundTo((k * 100) / n, 1);
        return {
          prompt: `${rng.pick(NAMES)} surveys ${n} students: ${k} ${t.what}. Calculate the percentage, to 1 decimal place.`,
          answer: { type: "number", value: pct, tolerance: 0.05 },
          solution: [`{{${k}/${n}}} × 100 = ${num(roundTo((k * 100) / n, 3))}…`, `= ${num(pct)}% to 1 d.p.`],
          hint: "Part ÷ total × 100, then round to 1 decimal place.",
          traps: [{ spec: { type: "number", value: k }, feedback: "That's the count, not the percentage — divide by the total and multiply by 100." }],
        };
      }
      // Tier 3: pie-chart angle.
      const n = rng.pick([18, 20, 24, 30, 36, 40, 45, 60]);
      let k = rng.int(2, n - 2);
      for (let i = 0; i < 20 && ((k * 360) % n !== 0); i++) k = rng.int(2, n - 2);
      const exact = (k * 360) % n === 0;
      const ang = exact ? (k * 360) / n : roundTo((k * 360) / n, 0);
      const pctWrong = roundTo((k * 100) / n, 1);
      return {
        prompt: `A class census of ${n} students finds ${k} ${t.what}. You draw a pie chart. What angle should the "${t.cat}" slice be, in degrees${exact ? "" : " (to the nearest degree)"}?`,
        answer: { type: "number", value: ang, tolerance: exact ? undefined : 0.5 },
        solution: [`Each student = {{360/${n}}} = ${num(roundTo(360 / n, 2))}°${(36000 % n) === 0 ? "" : " (2 d.p.)"}.`, `Angle = {{${k}/${n}}} × 360 = ${num(ang)}°${exact ? "" : " (nearest degree)"}.`, "Check: all the slice angles should add up to 360°."],
        hint: "A full circle is 360°. Find the fraction of the class and multiply by 360.",
        traps: Math.abs(pctWrong - ang) > 0.5 ? [{ spec: { type: "number", value: pctWrong }, feedback: "That's the percentage. For a pie chart, multiply the fraction by 360°, not 100." }] : undefined,
      };
    },
  },
  // ---------------------------------------------------------------- level 2
  {
    id: "demography.pyramid-features",
    topicId: "demography",
    title: "Read the shape of a population pyramid",
    level: 2,
    guideRef: "population-pyramids",
    generate(rng, tier) {
      return factItem(rng, tier, PYRAMID_TERMS, "Start at the base (births), then the sides (deaths), then the top (life expectancy).");
    },
  },
  {
    id: "demography.read-pyramid",
    topicId: "demography",
    title: "Read values from a population pyramid",
    level: 2,
    guideRef: "population-pyramids",
    generate(rng, tier) {
      const shape = rng.pick(["youthful", "narrowing", "ageing", "growing"] as const);
      const place = rng.pick(PLACES);
      const { m, f } = makePyramid(rng, shape);
      const diagram = pyramidSvg(m, f, place);
      if (tier === 1) {
        const i = rng.int(0, 7);
        const female = rng.bool();
        const v = female ? f[i] : m[i];
        const other = female ? m[i] : f[i];
        return {
          prompt: `Use the population pyramid of ${place}. What percentage of the total population are **${female ? "females" : "males"}** aged ${BANDS[i]}?`,
          answer: { type: "number", value: v },
          solution: [`Find the ${BANDS[i]} row, then the ${female ? "right-hand (female)" : "left-hand (male)"} bar.`, `It is labelled **${v}%**.`],
          hint: "Males are on the left, females on the right; age groups run up the middle.",
          traps: other !== v ? [{ spec: { type: "number", value: other }, feedback: `That's the ${female ? "male" : "female"} bar — check which side of the pyramid you are reading.` }] : undefined,
          diagram,
        };
      }
      if (tier === 2) {
        const kind = rng.int(0, 2);
        if (kind === 0) {
          const i = rng.int(0, 7);
          const v = m[i] + f[i];
          return {
            prompt: `Use the population pyramid of ${place}. What percentage of the whole population (males and females together) is aged ${BANDS[i]}?`,
            answer: { type: "number", value: v },
            solution: [`Males ${BANDS[i]}: ${m[i]}%. Females ${BANDS[i]}: ${f[i]}%.`, `Total = ${m[i]} + ${f[i]} = **${v}%**.`],
            hint: "Add the male bar and the female bar for that age group.",
            traps: m[i] !== v && f[i] !== v ? [{ spec: { type: "number", value: Math.max(m[i], f[i]) === v ? v + 100 : Math.max(m[i], f[i]) }, feedback: "You read only one side. The whole population means males + females." }] : undefined,
            diagram,
          };
        }
        const lo = kind === 1 ? 0 : 6;
        const label = kind === 1 ? "under 20 (0–19)" : "aged 60 and over";
        const v = m[lo] + f[lo] + m[lo + 1] + f[lo + 1];
        return {
          prompt: `Use the population pyramid of ${place}. What percentage of the whole population is ${label}?`,
          answer: { type: "number", value: v },
          solution: [`Add four bars: ${BANDS[lo]} (${m[lo]} + ${f[lo]}) and ${BANDS[lo + 1]} (${m[lo + 1]} + ${f[lo + 1]}).`, `= **${v}%**.`],
          hint: "Two age groups × two sexes = four bars to add.",
          diagram,
        };
      }
      // Tier 3: convert to people, or compare under-20 with 60+.
      if (rng.bool()) {
        const total = rng.pick([5, 8, 10, 12, 20, 25, 40, 50]);
        const i = rng.int(0, 7);
        const pct = m[i] + f[i];
        const people = roundTo((pct * total) / 100, 2);
        return {
          prompt: `${place} has a total population of ${total} million. Use the pyramid to work out how many million people are aged ${BANDS[i]}. Give your answer in millions.`,
          answer: { type: "number", value: people, display: `${num(people)} million` },
          solution: [`Aged ${BANDS[i]}: ${m[i]} + ${f[i]} = ${pct}% of the population.`, `${pct}% of ${total} million = {{${pct}/100}} × ${total} = **${num(people)} million**.`],
          hint: "First add the two bars for that age group, then find that percentage of the total.",
          traps: pct !== people ? [{ spec: { type: "number", value: pct }, feedback: "That's the percentage. Now find that percentage of the total population." }] : undefined,
          diagram,
        };
      }
      const young = m[0] + f[0] + m[1] + f[1];
      const old = m[6] + f[6] + m[7] + f[7];
      const diff = Math.abs(young - old);
      const bigger = young >= old ? "under 20" : "aged 60 and over";
      return {
        prompt: `Use the population pyramid of ${place}. How many percentage points bigger is the share of people ${bigger} than the share ${young >= old ? "aged 60 and over" : "under 20"}?`,
        answer: { type: "number", value: diff },
        solution: [`Under 20: ${m[0]} + ${f[0]} + ${m[1]} + ${f[1]} = ${young}%.`, `60 and over: ${m[6]} + ${f[6]} + ${m[7]} + ${f[7]} = ${old}%.`, `Difference = ${Math.max(young, old)} − ${Math.min(young, old)} = **${diff}** percentage points.`, young >= old ? "More young than old people suggests a youthful structure." : "More old than young people is a sign of an ageing population."],
        hint: "Add the four bars for 0–19 and the four bars for 60+, then subtract.",
        diagram,
      };
    },
  },
  {
    id: "demography.sampling",
    topicId: "demography",
    title: "Plan a sample: systematic and stratified",
    level: 2,
    guideRef: "what-is-demography",
    generate(rng, tier) {
      if (tier === 1 || (tier === 2 && rng.bool())) {
        const sample = rng.pick(tier === 1 ? [10, 20, 25, 50] : [12, 15, 30, 40, 60, 80]);
        const step = rng.int(tier === 1 ? 2 : 4, tier === 1 ? 10 : 25);
        const pop = sample * step;
        const where = rng.pick(["names on the school register", "flats in an HDB block list", "households on a street list", "passengers leaving an MRT station", "students in Year 8"]);
        return {
          prompt: `You want a systematic sample of ${sample} from ${big(pop)} ${where}. You choose every *n*th one. What is *n*?`,
          answer: { type: "number", value: step },
          solution: [`Interval = population ÷ sample size = ${big(pop)} ÷ ${sample} = **${step}**.`, `Pick a random start between 1 and ${step}, then take every ${ordinal(step)} one.`],
          hint: "How many groups of the sample size fit into the population?",
          traps: [{ spec: { type: "number", value: clean(sample / pop) === step ? step + 1000 : roundTo(sample / pop, 3) }, feedback: "You divided the wrong way round: population ÷ sample size." }],
        };
      }
      // Stratified sample.
      const total = rng.pick([200, 300, 400, 500, 600, 800, 1000, 1200]);
      const sample = rng.pick([20, 25, 40, 50, 60, 100]);
      const g = gcdSafe(total, sample);
      const unit = total / g; // people per sample-unit group
      const partsA = rng.int(1, g - 1);
      const a = partsA * unit;
      const groups = rng.pick([
        ["boys", "girls"],
        ["residents of HDB flats", "residents of private housing"],
        ["Year 7 students", "Year 8 students"],
        ["people under 40", "people aged 40 and over"],
      ]);
      const askFirst = rng.bool();
      const count = askFirst ? a : total - a;
      const ans = (count * sample) / total;
      return {
        prompt: `A school census area has ${big(total)} people: ${big(a)} ${groups[0]} and ${big(total - a)} ${groups[1]}. You take a **stratified** sample of ${sample}. How many ${askFirst ? groups[0] : groups[1]} should be in the sample?`,
        answer: { type: "number", value: ans },
        solution: [`Fraction who are ${askFirst ? groups[0] : groups[1]}: {{${count}/${total}}}.`, `{{${count}/${total}}} × ${sample} = **${num(ans)}**.`, `Check: the two groups should add up to ${sample}.`],
        hint: "The sample should have the same proportions as the population.",
        traps: sample - ans !== ans ? [{ spec: { type: "number", value: sample - ans }, feedback: "That's the number for the *other* group — check which group the question asks about." }] : undefined,
      };
    },
  },
  {
    id: "demography.census-change",
    topicId: "demography",
    title: "Calculate percentage change between two censuses",
    level: 2,
    guideRef: "what-is-demography",
    generate(rng, tier) {
      const groups = ["people aged 65 and over", "children aged 0–14", "people living alone", "people aged 85 and over", "households", "residents with a university degree", "people working from home"];
      const g = rng.pick(groups);
      const area = tier === 1 ? rng.pick(["a planning area", "a new town", "a district", "a small town"]) : rng.pick(["an island country", "a city region", "a large region", "a country"]);
      let a: number, b: number;
      if (tier === 1) {
        a = rng.pick([1000, 2000, 4000, 5000, 10000, 20000, 50000]);
        const pct = rng.pick([5, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100, -10, -20, -25]);
        b = a + (a * pct) / 100;
      } else if (tier === 2) {
        a = rng.int(120, 900) * 100;
        b = a + rng.nonZero(-40, 80) * rng.int(5, 30) * 10;
        if (b < a / 2) b = a + (a - b); // keep falls realistic (never down to zero)
      } else {
        a = rng.int(1500, 9000) * 100;
        b = Math.round(a * (rng.int(60, 220) / 100) / 100) * 100;
        if (b === a) b += 100;
      }
      const change = b - a;
      const exact = clean((change * 100) / a);
      const ans = tier === 1 ? exact : roundTo(exact, 1);
      const wrongBase = roundTo((change * 100) / b, 1);
      return {
        prompt: `In ${area}, the 2010 census counted ${big(a)} ${g}. The 2020 census counted ${big(b)}. Calculate the percentage change${tier === 1 ? "" : ", to 1 decimal place"}. Use a minus sign if it fell.`,
        answer: { type: "number", value: ans, tolerance: tier === 1 ? undefined : 0.05 },
        solution: [`Change = ${big(b)} − ${big(a)} = ${big(change)}.`, `% change = {{change/original}} × 100 = {{${change}/${a}}} × 100`, `= **${tier === 1 ? num(ans) : ans.toFixed(1).replace("-", "−")}%**${change < 0 ? " (a fall)" : " (a rise)"}.`],
        hint: "% change = (new − original) ÷ original × 100. The original is the 2010 figure.",
        traps: Math.abs(wrongBase - ans) > 0.05 ? [{ spec: { type: "number", value: wrongBase }, feedback: "You divided by the 2020 figure. Always divide by the ORIGINAL (2010) value." }] : undefined,
      };
    },
  },
  {
    id: "demography.dependency-ratio",
    topicId: "demography",
    title: "Calculate the dependency ratio",
    level: 2,
    guideRef: "dependency-ratio",
    generate(rng, tier) {
      let young: number, work: number, old: number, ratio: number;
      const unit = rng.pick(["thousand", "million"]);
      const place = rng.pick(PLACES);
      if (tier === 1) {
        work = rng.pick([100, 200, 400, 500]);
        const r = rng.int(15, 48) * 2;
        const dep = (r * work) / 100;
        young = rng.int(Math.ceil(dep * 0.2), Math.floor(dep * 0.8));
        old = dep - young;
        ratio = r;
      } else if (tier === 2) {
        young = rng.int(15, 90) * (unit === "million" ? 0.1 : 1) ;
        work = rng.int(80, 200) * (unit === "million" ? 0.1 : 1);
        old = rng.int(5, 60) * (unit === "million" ? 0.1 : 1);
        young = clean(young); work = clean(work); old = clean(old);
        ratio = roundTo(((young + old) * 100) / work, 1);
      } else {
        // Youthful vs ageing style numbers.
        const youthful = rng.bool();
        young = clean(rng.int(youthful ? 350 : 80, youthful ? 520 : 170) / 10);
        old = clean(rng.int(youthful ? 15 : 150, youthful ? 40 : 320) / 10);
        work = clean(rng.int(450, 700) / 10);
        ratio = roundTo(((young + old) * 100) / work, 1);
      }
      const exact = clean(((young + old) * 100) / work);
      const isExact = Math.abs(exact - ratio) < 1e-9;
      const total = clean(young + old + work);
      const wrongTotal = roundTo(((young + old) * 100) / total, 1);
      const wrongFlip = roundTo((work * 100) / (young + old), 1);
      const traps: Trap[] = [];
      if (Math.abs(wrongTotal - ratio) > 0.1) traps.push({ spec: { type: "number", value: wrongTotal }, feedback: "You divided by the TOTAL population. Divide dependents by the working-age population only." });
      if (Math.abs(wrongFlip - ratio) > 0.1) traps.push({ spec: { type: "number", value: wrongFlip }, feedback: "Upside down: it's dependents ÷ working age × 100." });
      return {
        prompt: `${place} has ${num(young)} ${unit} people aged 0–14, ${num(work)} ${unit} aged 15–64 and ${num(old)} ${unit} aged 65+. Calculate the dependency ratio${isExact ? "" : ", to 1 decimal place"}.`,
        answer: { type: "number", value: ratio, tolerance: isExact ? undefined : 0.05 },
        solution: [
          `Dependents = young + elderly = ${num(young)} + ${num(old)} = ${num(clean(young + old))} ${unit}.`,
          `Dependency ratio = {{dependents/working-age}} × 100 = {{${num(clean(young + old))}/${num(work)}}} × 100`,
          `= **${num(ratio)}**${isExact ? "" : " (1 d.p.)"} — about ${Math.round(ratio)} dependents for every 100 people of working age.`,
        ],
        hint: "(young + elderly) ÷ working age × 100.",
        traps: traps.length ? traps : undefined,
      };
    },
  },
  // ---------------------------------------------------------------- level 3
  {
    id: "demography.dependency-percentages",
    topicId: "demography",
    title: "Dependency ratio from age-structure percentages",
    level: 3,
    guideRef: "dependency-ratio",
    generate(rng, tier) {
      const place = rng.pick(PLACES);
      const youthful = rng.bool();
      let y: number, o: number;
      if (tier === 1) {
        // working age 50 or 60 or 75 etc. for friendly answers
        const w = rng.pick([50, 60, 75, 80]);
        const dep = 100 - w;
        y = youthful ? rng.int(Math.ceil(dep * 0.75), dep - 1) : rng.int(Math.ceil(dep * 0.35), Math.floor(dep * 0.55));
        o = dep - y;
      } else {
        y = youthful ? rng.int(35, 50) : rng.int(10, 20);
        o = youthful ? rng.int(2, 5) : rng.int(15, 30);
      }
      const w = 100 - y - o;
      const exact = clean(((y + o) * 100) / w);
      if (tier === 3 && rng.bool()) {
        // Reverse: dependents from working-age number.
        const workPop = rng.pick([2, 4, 5, 8, 10, 20, 30]);
        const r = roundTo(exact, 0);
        const deps = roundTo((r * workPop) / 100, 2);
        return {
          prompt: `${place} has a dependency ratio of ${r} and ${workPop} million people of working age (15–64). Roughly how many million dependents (young + elderly) are there? Give your answer in millions.`,
          answer: { type: "number", value: deps, display: `${num(deps)} million` },
          solution: [`Dependency ratio = dependents per 100 working-age people.`, `Dependents = {{${r}/100}} × ${workPop} million = **${num(deps)} million**.`],
          hint: "A ratio of 60 means 60 dependents for every 100 working-age people.",
          traps: [{ spec: { type: "number", value: roundTo(workPop * 100 / r, 2) === deps ? deps + 1000 : roundTo(workPop * 100 / r, 2) }, feedback: "Upside down — dependents = ratio ÷ 100 × working-age population." }],
        };
      }
      const ans = tier === 1 && Number.isInteger(exact) ? exact : roundTo(exact, 0);
      const wrongTotal = y + o; // divided by 100 (whole population)
      return {
        prompt: `In ${place}, ${y}% of people are aged 0–14 and ${o}% are aged 65+. Calculate the dependency ratio, to the nearest whole number.`,
        answer: { type: "number", value: ans, tolerance: 0.5 },
        solution: [
          `Working age = 100 − ${y} − ${o} = ${w}%.`,
          `Dependents = ${y} + ${o} = ${y + o}%.`,
          `Ratio = {{${y + o}/${w}}} × 100 ${Number.isInteger(exact) ? "=" : `= ${num(roundTo(exact, 2))} ≈`} **${num(ans)}**.`,
          y > o ? "Mostly young dependents — a youthful population needing schools and jobs." : "Mostly elderly dependents — an ageing population needing pensions and healthcare.",
        ],
        hint: "First find the working-age percentage: everything that is not 0–14 or 65+.",
        traps: Math.abs(wrongTotal - ans) > 0.5 ? [{ spec: { type: "number", value: wrongTotal }, feedback: `${y + o}% is the share of dependents in the whole population. Divide by the working-age share (${w}%), not by 100.` }] : undefined,
      };
    },
  },
];

function ordinal(n: number): string {
  const t = n % 100;
  if (t >= 11 && t <= 13) return `${n}th`;
  return `${n}${n % 10 === 1 ? "st" : n % 10 === 2 ? "nd" : n % 10 === 3 ? "rd" : "th"}`;
}

function gcdSafe(a: number, b: number): number {
  while (b) [a, b] = [b, a % b];
  return a;
}
