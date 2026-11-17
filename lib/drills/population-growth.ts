import type { Drill, Rng, DrillItem } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { num, big, roundTo, clean } from "./helpers.ts";

const T = "population-growth";

// ---------------------------------------------------------------------------
// Shared data
// ---------------------------------------------------------------------------

/** World population milestones (UN): [billions, year]. */
const MILESTONES: Array<[number, number]> = [
  [1, 1804],
  [2, 1927],
  [3, 1960],
  [4, 1974],
  [5, 1987],
  [6, 1999],
  [7, 2011],
  [8, 2022],
];

const MILESTONE_TABLE =
  "| Billions | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|---|---|---|---|---|---|---|---|---|\n| Year reached | 1804 | 1927 | 1960 | 1974 | 1987 | 1999 | 2011 | 2022 |";

/** A fact-bank entry: several phrasings of one clue, one keyed answer. */
interface Fact {
  /** 1 = core, 2 = typical, 3 = harder. */
  tier: 1 | 2 | 3;
  clues: string[];
  answer: AnswerSpec;
  why: string;
  traps?: Trap[];
}

/** Tier 1 → tier-1 entries; tier 2 → tiers 1–2; tier 3 → tiers 2–3 (harder entries). */
function pool(bank: Fact[], tier: 1 | 2 | 3): Fact[] {
  if (tier === 1) {
    const core = bank.filter((f) => f.tier === 1);
    return core.length >= 9 ? core : bank.filter((f) => f.tier <= 2);
  }
  if (tier === 2) return bank.filter((f) => f.tier <= 2);
  return bank.filter((f) => f.tier >= 2);
}

function factItem(rng: Rng, tier: 1 | 2 | 3, bank: Fact[], templates: Array<(clue: string) => string>, hint: string): DrillItem {
  const f = rng.pick(pool(bank, tier));
  const clue = rng.pick(f.clues);
  const tpl = rng.pick(templates);
  return {
    prompt: tpl(clue),
    answer: f.answer,
    solution: [f.why],
    hint,
    traps: f.traps,
  };
}

const text = (display: string, ...more: string[]): AnswerSpec => ({ type: "text", accept: [display, ...more], display });
const textTrap = (words: string[], feedback: string): Trap => ({ spec: { type: "text", accept: words }, feedback });

// ---------------------------------------------------------------------------
// Fact banks
// ---------------------------------------------------------------------------

const BR = (): AnswerSpec => text("birth rate", "crude birth rate", "BR");
const DR = (): AnswerSpec => text("death rate", "crude death rate", "DR");

/** Which rate does this change mainly lower? (why growth exploded, then slowed) */
const RATE_BANK: Fact[] = [
  // ---- lowers the DEATH rate ----
  ...[
    ["vaccinating children against diseases such as measles", 1],
    ["piped clean drinking water reaching every home", 1],
    ["building sewers so human waste is carried safely away", 1],
    ["antibiotics such as penicillin becoming widely available", 1],
    ["more hospitals, doctors and nurses", 1],
    ["more reliable harvests, so famines become rare", 1],
    ["sleeping under insecticide-treated mosquito nets to stop malaria", 2],
    ["oral rehydration salts for children with severe diarrhoea", 2],
    ["the Green Revolution's high-yield crops and irrigation", 2],
    ["handwashing with soap becoming a daily habit", 2],
    ["trained midwives attending births", 3],
    ["the worldwide eradication of smallpox (declared in 1980)", 3],
    ["refrigerators keeping food fresh and safe to eat", 3],
  ].map(([c, t]): Fact => ({
    tier: t as 1 | 2 | 3,
    clues: [c as string],
    answer: DR(),
    why: `This keeps people alive for longer — fewer deaths from disease, hunger or dirty water — so it lowers the **death rate**. Falling death rates are what made population growth explode (DTM stage 2).`,
    traps: [textTrap(["birth rate"], "Ask: does this stop people DYING, or stop babies being BORN? It keeps people alive, so it's the death rate.")],
  })),
  // ---- lowers the BIRTH rate ----
  ...[
    ["cheap, easy-to-get contraception", 1],
    ["girls staying in education for longer", 1],
    ["more women having careers outside the home", 1],
    ["people getting married later in life", 1],
    ["the high cost of housing and raising children in cities", 1],
    ["Singapore's 1970s \"Stop at Two\" campaign", 2],
    ["China's one-child policy (1980–2015)", 2],
    ["machines replacing children's work on family farms", 2],
    ["laws banning child labour and making school compulsory", 2],
    ["state pensions, so parents no longer rely on their children in old age", 3],
    ["parents being confident their babies will survive, so they stop having extra children 'just in case'", 3],
    ["more people moving from the countryside to small city flats", 3],
  ].map(([c, t]): Fact => ({
    tier: t as 1 | 2 | 3,
    clues: [c as string],
    answer: BR(),
    why: `This makes families choose (or be able) to have fewer children, so it lowers the **birth rate**. Falling birth rates are what slow growth down in DTM stage 3.`,
    traps: [textTrap(["death rate"], "This doesn't keep anyone alive for longer — it changes how many children families have. That's the birth rate.")],
  })),
];

/** Key terms for birth rates, death rates and natural increase. */
const TERM_BANK: Fact[] = [
  {
    tier: 1,
    clues: ["the number of live births per 1000 people per year", "how many babies are born each year for every 1000 people"],
    answer: text("birth rate", "crude birth rate", "BR"),
    why: "The **birth rate** = live births per 1000 people per year (e.g. about 45 in Niger, under 10 in Japan).",
    traps: [textTrap(["fertility rate", "total fertility rate"], "Fertility rate counts children per WOMAN in her lifetime. Per 1000 people per year is the birth rate.")],
  },
  {
    tier: 1,
    clues: ["the number of deaths per 1000 people per year", "how many people die each year for every 1000 people"],
    answer: text("death rate", "crude death rate", "DR"),
    why: "The **death rate** = deaths per 1000 people per year.",
    traps: [textTrap(["infant mortality rate", "infant mortality"], "Infant mortality only counts babies under 1. This counts deaths of people of every age.")],
  },
  {
    tier: 1,
    clues: ["the population growth that happens when the birth rate is higher than the death rate", "more births than deaths, so a population grows (ignoring migration)"],
    answer: text("natural increase", "natural growth"),
    why: "When births outnumber deaths the population grows by **natural increase** (natural = from births and deaths, not migration).",
  },
  {
    tier: 1,
    clues: ["the average number of children a woman would have in her lifetime", "the average number of babies born per woman"],
    answer: text("total fertility rate", "TFR", "fertility rate"),
    why: "The **total fertility rate (TFR)** is children per woman — about 2.1 keeps a population stable in the long run.",
    traps: [textTrap(["birth rate"], "The birth rate is per 1000 PEOPLE per year. Children per woman is the total fertility rate.")],
  },
  {
    tier: 1,
    clues: ["the average number of years a newborn baby can expect to live", "how long, on average, a person born today is expected to live"],
    answer: text("life expectancy", "life expectancy at birth"),
    why: "**Life expectancy** is the average number of years a person born now can expect to live.",
  },
  {
    tier: 1,
    clues: ["the number of babies who die before their first birthday per 1000 live births", "deaths of babies under 1 year old per 1000 live births"],
    answer: text("infant mortality rate", "infant mortality", "IMR"),
    why: "The **infant mortality rate** counts deaths under age 1 per 1000 live births — a sensitive measure of healthcare and clean water.",
    traps: [textTrap(["death rate"], "The death rate counts deaths at ALL ages per 1000 people. Babies under 1 per 1000 live births is infant mortality.")],
  },
  {
    tier: 1,
    clues: ["the movement of people into or out of a country — the other way, besides births and deaths, that its population changes", "people moving to live somewhere else, whether arriving in or leaving a country (one general word)"],
    answer: text("migration", "international migration"),
    why: "Population changes through births, deaths and **migration**. *Natural* increase ignores migration.",
  },
  {
    tier: 2,
    clues: ["the natural increase written as a percentage, worked out as (birth rate − death rate) ÷ 10", "the yearly % growth of a population from births minus deaths alone"],
    answer: text("rate of natural increase", "RNI", "natural increase rate"),
    why: "**Rate of natural increase (%)** = (BR − DR) ÷ 10, because rates are per 1000 and a percentage is per 100.",
    traps: [textTrap(["natural increase"], "Close — but the PERCENTAGE version is the *rate* of natural increase.")],
  },
  {
    tier: 2,
    clues: ["the total fertility rate of about 2.1 needed to keep a population the same size in the long run (without migration)", "about 2.1 children per woman — enough for each couple to replace themselves"],
    answer: text("replacement level", "replacement-level fertility", "replacement level fertility", "replacement fertility", "replacement rate"),
    why: "**Replacement level** is a TFR of about 2.1: two children replace the parents, and the extra 0.1 covers children who die young (and slightly more boys than girls being born).",
  },
  {
    tier: 2,
    clues: ["the study of human populations — their size, structure and how they change", "the science of births, deaths and migration in a population"],
    answer: text("demography", "demographics"),
    why: "**Demography** is the study of populations; the people who do it are demographers.",
  },
  {
    tier: 3,
    clues: ["deaths of women from pregnancy or childbirth, usually given per 100,000 live births", "how many mothers die from causes linked to pregnancy or giving birth"],
    answer: text("maternal mortality rate", "maternal mortality", "maternal mortality ratio", "MMR"),
    why: "**Maternal mortality** measures mothers' deaths linked to pregnancy and birth — trained midwives and clinics cut it sharply.",
    traps: [textTrap(["infant mortality rate", "infant mortality"], "Infant mortality is about BABIES under 1. This is about the mothers.")],
  },
  {
    tier: 3,
    clues: ["a fall in a country's total population, whatever the cause (fewer births, more deaths or people leaving), as in Japan today", "a fall in the total number of people living in a country, from any cause"],
    answer: text("population decline", "depopulation", "declining population", "population decrease", "shrinking population"),
    why: "When a country's total number of people falls it has **population decline** — Japan's population has been falling since about 2010. (Natural decrease is only one cause: deaths outnumbering births.)",
    traps: [textTrap(["natural decrease"], "Natural decrease is only one cause (deaths outnumbering births). The general term for any fall in total population is population decline.")],
  },
  {
    tier: 3,
    clues: ["growth in which the amount added each year keeps getting bigger because the population it grows from keeps getting bigger", "growth that speeds up because each year's increase is a percentage of an ever-larger total"],
    answer: text("exponential growth", "exponential", "geometric growth"),
    why: "**Exponential growth**: a steady % growth rate adds more people each year because the base keeps growing — it gives a J-curve.",
  },
];

/** DTM stage descriptions → stage number. */
const STAGE_WORDS = ["", "one", "two", "three", "four", "five"];
const stageAns = (n: number): AnswerSpec => ({
  type: "text",
  accept: [String(n), `stage ${n}`, STAGE_WORDS[n], `stage ${STAGE_WORDS[n]}`],
  display: `Stage ${n}`,
});
const stageTrap = (n: number, feedback: string): Trap => ({ spec: { type: "text", accept: [String(n), `stage ${n}`] }, feedback });
const STAGE_WHY: Record<number, string> = {
  1: "**Stage 1 (high fluctuating):** birth and death rates are both high and cancel out, so the total population is low and steady. No country is in stage 1 today.",
  2: "**Stage 2 (early expanding):** the death rate falls fast (clean water, food, vaccines) but the birth rate stays high, so the population grows rapidly — e.g. Niger.",
  3: "**Stage 3 (late expanding):** the birth rate now falls fast (contraception, education, city life) and the death rate keeps falling slowly, so growth slows — e.g. India, Bangladesh.",
  4: "**Stage 4 (low stationary):** birth and death rates are both low, so the population is high but fairly stable — e.g. the UK.",
  5: "**Stage 5 (declining):** the birth rate falls below the death rate, so there is natural decrease and an ageing population — e.g. Japan.",
};
const DTM_BANK: Fact[] = [
  // Stage 1
  ...[
    [1, 1, "Birth rate and death rate are both high, so the total population stays low."],
    [1, 1, "Births and deaths are both around 35–40 per 1000 and cancel each other out."],
    [1, 2, "Disease, famine and poor hygiene keep the death rate high and jumping up and down."],
    [1, 3, "No country is in this stage today — only a few isolated tribal groups might be."],
    // Stage 2
    [2, 1, "The death rate falls rapidly but the birth rate stays high."],
    [2, 1, "The population starts to grow very quickly — the population explosion begins."],
    [2, 2, "The gap between the high birth rate and the falling death rate gets wider and wider."],
    [2, 2, "Clean water, better food and vaccines cut deaths, but families are still very large."],
    [2, 3, "Niger, with about 6 children per woman and a falling death rate, is the usual example."],
    // Stage 3
    [3, 1, "The birth rate falls rapidly while the death rate keeps falling slowly."],
    [3, 2, "The population is still growing, but the rate of growth is slowing down."],
    [3, 2, "Contraception, girls' education and moving to cities make families smaller."],
    [3, 2, "The gap between birth rate and death rate is narrowing."],
    [3, 3, "India and Bangladesh, where fertility has fallen fast since the 1970s, are typical examples."],
    // Stage 4
    [4, 1, "Birth rate and death rate are both low, so the population is high but fairly stable."],
    [4, 2, "Both rates are low (around 10 per 1000) and natural increase is close to zero."],
    [4, 2, "The birth rate is low but may rise and fall with the economy — for example a baby boom."],
    [4, 3, "The UK, with low birth and death rates and very slow natural increase, is the usual example."],
    // Stage 5
    [5, 1, "The birth rate falls below the death rate, so the population starts to shrink."],
    [5, 2, "There is natural decrease and a large, growing share of elderly people."],
    [5, 2, "Fertility has been far below 2.1 for decades, and now deaths outnumber births every year."],
    [5, 3, "Japan, whose population has been falling since about 2010, is the usual example."],
    [5, 3, "This stage was added later — the original model had only four stages."],
  ].map(([n, t, c]): Fact => {
    const s = n as number;
    const trapStage = s === 1 ? 2 : s === 5 ? 4 : s === 2 ? 3 : s === 3 ? 2 : 5;
    const feedback =
      s === 2
        ? "In stage 3 it's the BIRTH rate that falls fast. Here the death rate is falling and births are still high — that's stage 2."
        : s === 3
          ? "In stage 2 only the death rate is falling. Here the birth rate is falling too — that's stage 3."
          : s === 4
            ? "Stage 5 needs births BELOW deaths. Here both are low and roughly balanced — stage 4."
            : s === 5
              ? "Stage 4 has births and deaths roughly balanced. A shrinking population (births below deaths) is stage 5."
              : "Stage 2 has a FALLING death rate. Here both rates are high — stage 1.";
    return { tier: t as 1 | 2 | 3, clues: [c as string], answer: stageAns(s), why: STAGE_WHY[s], traps: [stageTrap(trapStage, feedback)] };
  }),
];

/** Future population and today's big numbers. */
const FUTURE_BANK: Fact[] = [
  {
    tier: 1,
    clues: ["About how many billion people do UN projections (2024) expect at the world's peak population? Give a number of billions to 1 decimal place.", "The UN's 2024 projection says world population will peak at about how many billion? (1 decimal place)"],
    answer: { type: "number", value: 10.3, display: "about 10.3 billion" },
    why: "UN World Population Prospects 2024 projects a peak of about **10.3 billion** in the mid-2080s, then a slow decline.",
  },
  {
    tier: 1,
    clues: ["In which year did the world's population reach 8 billion, according to the UN?", "The UN marked the birth of the world's 8 billionth person in which year?"],
    answer: { type: "number", value: 2022, display: "2022" },
    why: "The UN marked **15 November 2022** as the day world population reached 8 billion.",
    traps: [{ spec: { type: "number", value: 2011 }, feedback: "2011 is when we reached 7 billion. 8 billion came 11 years later." }],
  },
  {
    tier: 1,
    clues: ["Which country overtook China in 2023 to become the most populous country in the world?", "Which country has had the world's largest population since about 2023?"],
    answer: text("India", "Republic of India"),
    why: "UN estimates show **India** overtaking China in 2023 (both have about 1.4 billion people).",
    traps: [textTrap(["China"], "China WAS the most populous — but India overtook it in 2023.")],
  },
  {
    tier: 1,
    clues: ["Which continent is projected to have most of the world's population growth between now and 2100?", "On which continent are populations projected to keep growing fastest this century?"],
    answer: text("Africa", "sub-Saharan Africa"),
    why: "**Africa**, especially sub-Saharan Africa, still has high fertility and a very young population, so it is projected to grow the most.",
    traps: [textTrap(["Asia"], "Asia has the most people today, but its growth is slowing. Most FUTURE growth is in Africa.")],
  },
  {
    tier: 1,
    clues: ["What total fertility rate (children per woman) is called replacement level? Give your answer to 1 decimal place.", "About how many children per woman keep a population stable in the long run? (1 decimal place)"],
    answer: { type: "number", value: 2.1, display: "about 2.1" },
    why: "Replacement level is a TFR of about **2.1** — two to replace the parents plus a little extra for children who die young.",
    traps: [{ spec: { type: "number", value: 2 }, feedback: "Close — but it's about 2.1, because some children die before they grow up to have children of their own." }],
  },
  {
    tier: 1,
    clues: ["In which decade does the UN (2024) expect world population to peak? Give the first year of the decade, e.g. 2050.", "World population is projected to peak in the 20__s. Give the first year of that decade, e.g. 2050."],
    answer: { type: "text", accept: ["2080", "2080s", "the 2080s", "mid-2080s"], display: "2080 (the 2080s)" },
    why: "The UN's 2024 projections put the peak in the **mid-2080s**.",
    traps: [textTrap(["2100", "2100s"], "Earlier projections went to 2100 still rising, but the 2024 projections peak in the 2080s.")],
  },
  {
    tier: 2,
    clues: ["In which year did China's population fall for the first time in about six decades?", "China's population started shrinking in which year?"],
    answer: { type: "number", value: 2022 },
    why: "China's population fell in **2022** for the first time in about six decades — the result of decades of very low fertility.",
  },
  {
    tier: 2,
    clues: ["Singapore's resident total fertility rate fell below 1 for the first time in 2023. To 2 decimal places, what was it?", "What was Singapore's resident TFR in 2023, to 2 decimal places?"],
    answer: { type: "number", value: 0.97, display: "about 0.97" },
    why: "Singapore's resident TFR was about **0.97** in 2023 — less than half of replacement level.",
  },
  {
    tier: 2,
    clues: ["Which East Asian country had the world's lowest total fertility rate in 2023, about 0.7 children per woman?", "Name the country whose TFR of about 0.72 in 2023 was the lowest in the world."],
    answer: text("South Korea", "Korea", "Republic of Korea"),
    why: "**South Korea**'s TFR was about 0.72 in 2023, the lowest in the world.",
    traps: [textTrap(["Singapore"], "Singapore's is very low (about 0.97) — but South Korea's (about 0.72) is lower still.")],
  },
  {
    tier: 2,
    clues: ["Which continent's population is projected to shrink this century even though the world total grows?", "On which continent have many countries (such as Italy and Germany) got more deaths than births already?"],
    answer: text("Europe"),
    why: "**Europe** has low fertility and an ageing population, so its population is projected to shrink.",
  },
  {
    tier: 2,
    clues: ["Which West African country, the usual DTM stage 2 example, has one of the highest fertility rates in the world (about 6 children per woman)?", "Name the Sahel country with one of the world's youngest, fastest-growing populations (TFR about 6)."],
    answer: text("Niger"),
    why: "**Niger** has a TFR of about 6 and a very young population, so it is still growing fast.",
    traps: [textTrap(["Nigeria"], "Nigeria is its huge neighbour — but the usual example with a TFR of about 6 is Niger.")],
  },
  {
    tier: 3,
    clues: ["The UN gives a range of projections. Name its central, most likely projection.", "UN projections come as low, medium and high versions. What is the middle one called?"],
    answer: text("medium variant", "medium projection", "medium"),
    why: "The **medium variant** is the UN's central projection; the low and high variants show the uncertainty, mainly from future fertility.",
  },
  {
    tier: 3,
    clues: ["Which ONE factor causes the biggest uncertainty in long-term population projections: future fertility, mortality or migration?", "Future world population projections are most sensitive to which factor: fertility, mortality or migration?"],
    answer: text("fertility", "future fertility", "fertility rate", "birth rate", "TFR"),
    why: "Small changes in **fertility** compound over generations (fewer mothers → even fewer babies), so it drives most of the uncertainty.",
    traps: [textTrap(["migration"], "Migration moves people between countries but doesn't change the WORLD total. Fertility drives the uncertainty.")],
  },
  {
    tier: 3,
    clues: ["About what percentage a year is the world's population growing today: 0.9%, 2.1% or 3.5%?", "Which is closest to today's world population growth rate per year: 0.9%, 2.1% or 3.5%?"],
    answer: { type: "number", value: 0.9, display: "about 0.9%" },
    why: "World growth peaked at just over **2%** a year in the 1960s and has fallen to **under 1%** today (about 0.9%).",
    traps: [{ spec: { type: "number", value: 2.1 }, feedback: "That was the 1960s peak. Growth has more than halved since then." }],
  },
  {
    tier: 3,
    clues: ["Which DTM stage are Japan and South Korea in, with more deaths than births? Give the number.", "Countries with natural decrease, like Japan, are in which DTM stage? Give the number."],
    answer: stageAns(5),
    why: STAGE_WHY[5],
  },
];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // ======================= growth-over-time =======================
  {
    id: `${T}.milestone-years`,
    topicId: T,
    title: "Recall the world population milestones",
    level: 1,
    guideRef: "growth-over-time",
    generate(rng, tier) {
      const i = rng.int(0, MILESTONES.length - 1);
      const [b, y] = MILESTONES[i];
      const mode = tier === 3 ? rng.pick(["year", "billion", "added"]) : rng.pick(["year", "billion"]);
      if (mode === "added") {
        let j = rng.int(0, MILESTONES.length - 1);
        while (j === i) j = rng.int(0, MILESTONES.length - 1);
        const [lo, hi] = i < j ? [MILESTONES[i], MILESTONES[j]] : [MILESTONES[j], MILESTONES[i]];
        return {
          prompt: `Without a table: how many billion people were added to the world's population between ${lo[1]} and ${hi[1]}?`,
          answer: { type: "number", value: hi[0] - lo[0] },
          solution: [`${lo[1]} = ${lo[0]} billion; ${hi[1]} = ${hi[0]} billion.`, `${hi[0]} − ${lo[0]} = **${hi[0] - lo[0]} billion** added.`],
          hint: "Recall which billion each year marks, then subtract.",
          traps: hi[1] - lo[1] !== hi[0] - lo[0] ? [{ spec: { type: "number", value: hi[1] - lo[1] }, feedback: "That's the number of YEARS. The question asks how many BILLION people." }] : undefined,
        };
      }
      if (mode === "year") {
        const p = rng.pick([
          `In about which year did the world's population first reach **${b} billion**?`,
          `World population hit ${b} billion in about which year?`,
        ]);
        const traps: Trap[] = [];
        if (i > 0) traps.push({ spec: { type: "number", value: MILESTONES[i - 1][1] }, feedback: `${MILESTONES[i - 1][1]} is when it reached ${MILESTONES[i - 1][0]} billion — one milestone too early.` });
        if (i < MILESTONES.length - 1) traps.push({ spec: { type: "number", value: MILESTONES[i + 1][1] }, feedback: `${MILESTONES[i + 1][1]} is when it reached ${MILESTONES[i + 1][0]} billion — one milestone too late.` });
        return {
          prompt: p,
          answer: { type: "number", value: y },
          solution: [`${b} billion was reached in about **${y}**.`, "Milestones: 1 bn 1804 · 2 bn 1927 · 3 bn 1960 · 4 bn 1974 · 5 bn 1987 · 6 bn 1999 · 7 bn 2011 · 8 bn 2022."],
          hint: "Anchor on 8 billion in 2022, 7 billion in 2011 and 1 billion in about 1804.",
          traps,
        };
      }
      const p = rng.pick([
        `The world's population first reached about how many **billion** in ${y}?`,
        `Which billion milestone did world population pass in ${y}? Give the number of billions.`,
      ]);
      const traps: Trap[] = [];
      if (b > 1) traps.push({ spec: { type: "number", value: b - 1 }, feedback: `${b - 1} billion was reached earlier, in ${MILESTONES[i - 1][1]}.` });
      if (b < 8) traps.push({ spec: { type: "number", value: b + 1 }, feedback: `${b + 1} billion came later, in ${MILESTONES[i + 1][1]}.` });
      return {
        prompt: p,
        answer: { type: "number", value: b, display: `${b} billion` },
        solution: [`In ${y} the world reached **${b} billion** people.`, "Milestones: 1 bn 1804 · 2 bn 1927 · 3 bn 1960 · 4 bn 1974 · 5 bn 1987 · 6 bn 1999 · 7 bn 2011 · 8 bn 2022."],
        hint: "Since 1960 a new billion has arrived roughly every 11–14 years.",
        traps,
      };
    },
  },
  {
    id: `${T}.which-rate-falls`,
    topicId: T,
    title: "Birth rate or death rate? Why growth exploded",
    level: 1,
    guideRef: "growth-over-time",
    generate(rng, tier) {
      return factItem(
        rng,
        tier,
        RATE_BANK,
        [
          (c) => `Which does this change mainly lower — the **birth rate** or the **death rate**?\n\n*${c}*`,
          (c) => `*${c[0].toUpperCase() + c.slice(1)}.* Does this mainly reduce the birth rate or the death rate?`,
          (c) => `Cause and effect: ${c}. Which rate falls as a result — birth rate or death rate?`,
        ],
        "Does it keep people alive for longer, or lead families to have fewer children?",
      );
    },
  },
  {
    id: `${T}.years-between-billions`,
    topicId: T,
    title: "Calculate the time to add each billion",
    level: 2,
    guideRef: "growth-over-time",
    generate(rng, tier) {
      if (tier === 3) {
        // Average number of people added per year between two milestones.
        const i = rng.int(0, 6);
        let j = rng.int(i + 1, 7);
        if (rng.bool(0.5)) j = i + 1;
        const [bi, yi] = MILESTONES[i];
        const [bj, yj] = MILESTONES[j];
        const yrs = yj - yi;
        const per = roundTo((1000 * (bj - bi)) / yrs, 0);
        return {
          prompt: `Use the table.\n\n${MILESTONE_TABLE}\n\nOn average, how many **million** people were added to the world each year between ${bi} billion (${yi}) and ${bj} billion (${yj})? Give your answer to the nearest million.`,
          answer: { type: "number", value: per, display: `${per} million per year` },
          solution: [
            `People added: ${bj} − ${bi} = ${bj - bi} billion = ${big(1000 * (bj - bi))} million.`,
            `Years taken: ${yj} − ${yi} = ${yrs} years.`,
            `${big(1000 * (bj - bi))} ÷ ${yrs} = ${num(roundTo((1000 * (bj - bi)) / yrs, 2))} ≈ **${per} million per year**.`,
          ],
          hint: "Change billions into millions (1 billion = 1000 million), then divide by the number of years.",
          traps: yrs !== per ? [{ spec: { type: "number", value: yrs }, feedback: "That's the number of years. Now divide the people added by the years." }] : undefined,
        };
      }
      const adjacent = tier === 1 || rng.bool(0.4);
      const i = adjacent ? rng.int(0, 6) : rng.int(0, 5);
      const j = adjacent ? i + 1 : rng.int(i + 2, 7);
      const [bi, yi] = MILESTONES[i];
      const [bj, yj] = MILESTONES[j];
      const d = yj - yi;
      const prompt =
        tier === 1
          ? rng.pick([
              `World population reached ${bi} billion in ${yi} and ${bj} billion in ${yj}. How many years did it take to add that billion?`,
              `How many years did it take the world to grow from ${bi} billion (${yi}) to ${bj} billion (${yj})?`,
              `${bi} billion in ${yi}; ${bj} billion in ${yj}. How many years apart are these milestones?`,
              `It was ${yi} when the world reached ${bi} billion and ${yj} when it reached ${bj} billion. How long did that billion take, in years?`,
            ])
          : rng.pick([
              `Use the table.\n\n${MILESTONE_TABLE}\n\nHow many years did it take world population to grow from ${bi} billion to ${bj} billion?`,
              `Use the table.\n\n${MILESTONE_TABLE}\n\nHow long, in years, did the world take to go from ${bi} to ${bj} billion people?`,
            ]);
      return {
        prompt,
        answer: { type: "number", value: d, display: `${d} years` },
        solution: [
          `${yj} − ${yi} = **${d} years**.`,
          i === 0 && j === 1 ? "The first billion-to-two-billion step took over a century; recent billions have taken only about 12 years each." : "Notice how the time to add a billion shrank from over a century to only about 12 years.",
        ],
        hint: "Subtract the earlier year from the later year.",
        traps: bj - bi !== d ? [{ spec: { type: "number", value: bj - bi }, feedback: "That's how many billion were added. The question asks for the number of YEARS." }] : undefined,
      };
    },
  },
  {
    id: `${T}.doubling-time`,
    topicId: T,
    title: "Estimate doubling time with the rule of 70",
    level: 3,
    guideRef: "growth-over-time",
    generate(rng, tier) {
      const place = rng.pick(["A country", "A city", "A region", "An island nation", "A town"]);
      if (tier === 3) {
        let br = 20, dr = 10;
        for (let k = 0; k < 50; k++) {
          br = rng.int(14, 46);
          dr = rng.int(4, 16);
          if (br - dr >= 3) break;
        }
        const rni = clean((br - dr) / 10);
        const exact = 70 / rni;
        const ans = roundTo(exact, 0);
        const traps: Trap[] = [];
        const t100 = roundTo(100 / rni, 0);
        if (t100 !== ans) traps.push({ spec: { type: "number", value: t100 }, feedback: "You used 100. The rule of thumb is the rule of **70**: 70 ÷ growth rate (%)." });
        const tRaw = roundTo(70 / (br - dr), 0);
        if (tRaw !== ans) traps.push({ spec: { type: "number", value: tRaw }, feedback: "Turn the natural increase per 1000 into a percentage first: divide by 10." });
        return {
          prompt: `${place} has a birth rate of ${br} per 1000 and a death rate of ${dr} per 1000 (no migration). Use the rule of 70 to estimate how many years its population will take to double. Give your answer to the nearest year.`,
          answer: { type: "number", value: ans, display: `about ${ans} years` },
          solution: [
            `Rate of natural increase = (${br} − ${dr}) ÷ 10 = ${num(rni)}%.`,
            `Doubling time ≈ 70 ÷ ${num(rni)} = ${num(roundTo(exact, 2))} ≈ **${ans} years**.`,
          ],
          hint: "First turn birth and death rates into a % growth rate, then use 70 ÷ rate.",
          traps,
        };
      }
      const r =
        tier === 1
          ? rng.pick([0.5, 0.7, 1, 1.4, 2, 2.5, 3.5, 1.75, 0.25, 1.25, 2.8, 0.35, 0.2])
          : clean(rng.int(3, 39) / 10);
      const exact = 70 / r;
      const ans = roundTo(exact, 0);
      const traps: Trap[] = [];
      const t100 = roundTo(100 / r, 0);
      if (t100 !== ans) traps.push({ spec: { type: "number", value: t100 }, feedback: "You used 100. The rule of thumb is the rule of **70**." });
      const times = clean(70 * r);
      if (Math.abs(times - ans) > 0.5) traps.push({ spec: { type: "number", value: times }, feedback: "Divide 70 BY the rate — faster growth must give a SHORTER doubling time." });
      return {
        prompt:
          tier === 1
            ? `${place}'s population grows by ${num(r)}% a year. Use the rule of 70 to estimate its doubling time in years.`
            : `${place}'s population grows by ${num(r)}% a year. Using the rule of 70, estimate how many years it takes to double. Give your answer to the nearest year.`,
        answer: { type: "number", value: ans, display: `about ${ans} years` },
        solution: [
          "Rule of 70: doubling time (years) ≈ 70 ÷ growth rate (%).",
          `70 ÷ ${num(r)} = ${num(roundTo(exact, 2))}${roundTo(exact, 2) === ans ? "" : ` ≈ ${ans}`} → **about ${ans} years**.`,
          "It is an estimate that assumes the growth rate stays the same.",
        ],
        hint: "Doubling time ≈ 70 ÷ the % growth rate.",
        traps,
      };
    },
  },

  // ======================= birth-death-rates =======================
  {
    id: `${T}.key-terms`,
    topicId: T,
    title: "Name the population key term",
    level: 1,
    guideRef: "birth-death-rates",
    generate(rng, tier) {
      return factItem(
        rng,
        tier,
        TERM_BANK,
        [
          (c) => `Give the key term for: **${c}**.`,
          (c) => `What is the geographical term for ${c}?`,
          (c) => `Name the term: ${c}.`,
        ],
        "Think about what is being counted — per 1000 people, per woman, per 1000 live births, or something else?",
      );
    },
  },
  {
    id: `${T}.rate-of-natural-increase`,
    topicId: T,
    title: "Calculate the rate of natural increase (%)",
    level: 1,
    guideRef: "birth-death-rates",
    generate(rng, tier) {
      // Work in tenths so every answer is exact.
      let b10 = 300, d10 = 100;
      if (tier === 1) {
        b10 = rng.int(12, 48) * 10;
        d10 = rng.int(4, 18) * 10;
        if (d10 >= b10) d10 = b10 - 50;
      } else if (tier === 2) {
        b10 = rng.int(100, 480);
        d10 = rng.int(40, 180);
        if (d10 >= b10) d10 = b10 - rng.int(20, 60);
      } else {
        // Low rates; about half give a natural decrease (stage 5).
        b10 = rng.int(55, 140);
        d10 = rng.int(70, 150);
        if (d10 === b10) d10 += 7;
      }
      const brv = clean(b10 / 10), drv = clean(d10 / 10);
      const diff = clean((b10 - d10) / 10);
      const rni = clean((b10 - d10) / 100);
      const traps: Trap[] = [];
      if (Math.abs(diff - rni) > 1e-9) traps.push({ spec: { type: "number", value: diff }, feedback: `${num(diff)} is the natural change per 1000 people. Divide by 10 to make it a percentage.` });
      if (rni !== 0) traps.push({ spec: { type: "number", value: -rni }, feedback: "Check the sign: it's birth rate MINUS death rate." });
      const plus = clean((b10 + d10) / 100);
      if (Math.abs(plus - rni) > 1e-9 && Math.abs(plus + rni) > 1e-9) traps.push({ spec: { type: "number", value: plus }, feedback: "Subtract the death rate from the birth rate — don't add them." });
      return {
        prompt: `A country has a birth rate of ${num(brv)} per 1000 and a death rate of ${num(drv)} per 1000. Calculate its rate of natural increase as a percentage.${tier === 3 ? " (Give a negative answer if the population is naturally decreasing.)" : ""}`,
        answer: { type: "number", value: rni, allowFraction: false, display: `${num(rni)}%` },
        solution: [
          `Natural change = ${num(brv)} − ${num(drv)} = ${num(diff)} per 1000.`,
          `Rate of natural increase = ${num(diff)} ÷ 10 = **${num(rni)}%**.`,
          rni < 0 ? "It's negative: deaths outnumber births, so this is a **natural decrease** (like Japan, DTM stage 5)." : "Per 1000 ÷ 10 = per 100, which is a percentage.",
        ],
        hint: "(Birth rate − death rate) ÷ 10.",
        traps,
      };
    },
  },
  {
    id: `${T}.crude-rates`,
    topicId: T,
    title: "Calculate a birth or death rate per 1000",
    level: 2,
    guideRef: "birth-death-rates",
    generate(rng, tier) {
      const isBirth = rng.bool(0.5);
      const word = isBirth ? "births" : "deaths";
      const rateName = isBirth ? "birth rate" : "death rate";
      let pop: number, events: number, ans: number, exactStr: string;
      if (tier === 1) {
        pop = rng.pick([10000, 20000, 40000, 50000, 100000, 200000, 500000, 1000000]);
        const r = isBirth ? rng.int(8, 45) : rng.int(5, 16);
        events = (r * pop) / 1000;
        ans = r;
        exactStr = num(r);
      } else if (tier === 2) {
        pop = rng.int(2, 90) * 100000;
        const r10 = isBirth ? rng.int(70, 450) : rng.int(50, 160);
        events = (r10 * pop) / 10000;
        ans = clean(r10 / 10);
        exactStr = num(ans);
      } else {
        pop = rng.int(150, 9800) * 1000;
        const approx = isBirth ? rng.int(60, 440) : rng.int(50, 150);
        events = Math.round((approx * pop) / 10000) + rng.int(-499, 499);
        const exact = (events / pop) * 1000;
        ans = roundTo(exact, 1);
        exactStr = num(roundTo(exact, 4));
      }
      const pct = roundTo((events / pop) * 100, tier === 3 ? 1 : 2);
      const traps: Trap[] = [];
      if (Math.abs(pct - ans) > 0.05) traps.push({ spec: { type: "number", value: pct }, feedback: "You multiplied by 100 (a percentage). Birth and death rates are per **1000**." });
      return {
        prompt: `A country of ${big(pop)} people had ${big(events)} ${word} last year. Calculate its ${rateName} per 1000 people${tier === 3 ? ", to 1 decimal place" : ""}.`,
        answer: { type: "number", value: ans, display: `${num(ans)} per 1000` },
        solution: [
          `${rateName[0].toUpperCase() + rateName.slice(1)} = ${word} ÷ population × 1000.`,
          `${big(events)} ÷ ${big(pop)} × 1000 = ${exactStr}${tier === 3 ? ` ≈ **${num(ans)}**` : ""}${tier === 3 ? "" : ` → **${num(ans)}**`} per 1000.`,
        ],
        hint: `Divide the ${word} by the population, then multiply by 1000.`,
        traps,
      };
    },
  },
  {
    id: `${T}.natural-change-people`,
    topicId: T,
    title: "Calculate natural change in people",
    level: 2,
    guideRef: "birth-death-rates",
    generate(rng, tier) {
      if (tier === 1) {
        const births = rng.int(12, 95) * 100;
        let deaths = rng.int(8, 60) * 100;
        if (deaths === births) deaths -= 100;
        const n = births - deaths;
        return {
          prompt: `A town recorded ${big(births)} births and ${big(deaths)} deaths in one year. Ignoring migration, by how many people did its population change? (Use a negative number for a fall.)`,
          answer: { type: "number", value: n, display: `${n < 0 ? "−" : "+"}${big(Math.abs(n))} people` },
          solution: [`Natural change = births − deaths = ${big(births)} − ${big(deaths)} = **${n < 0 ? "−" : ""}${big(Math.abs(n))}**.`, n < 0 ? "More deaths than births: a natural decrease." : "More births than deaths: a natural increase."],
          hint: "Births minus deaths.",
          traps: [{ spec: { type: "number", value: births + deaths }, feedback: "Deaths take people AWAY — subtract them." }],
        };
      }
      if (tier === 2) {
        const popM = rng.int(2, 60);
        const br = rng.int(8, 42);
        let dr = rng.int(5, 15);
        if (dr === br) dr -= 1;
        const n = ((br - dr) * popM * 1000000) / 1000;
        const traps: Trap[] = [{ spec: { type: "number", value: (br - dr) * popM * 10000 }, feedback: "Rates are per 1000, not per 100 — divide by 1000." }];
        return {
          prompt: `A country of ${popM} million people has a birth rate of ${br} per 1000 and a death rate of ${dr} per 1000. Ignoring migration, how many people are added to (or lost from) its population in a year? (Use a negative number for a fall.)`,
          answer: { type: "number", value: n, display: `${n < 0 ? "−" : ""}${big(Math.abs(n))} people` },
          solution: [
            `Natural change = ${br} − ${dr} = ${br - dr} per 1000 people.`,
            `${big(popM * 1000000)} ÷ 1000 = ${big(popM * 1000)} groups of 1000.`,
            `${big(popM * 1000)} × ${br - dr} = **${n < 0 ? "−" : ""}${big(Math.abs(n))} people**.`,
          ],
          hint: "Find the change per 1000, then count how many 1000s are in the population.",
          traps,
        };
      }
      const popM = rng.int(3, 220) / 2;
      const rni10 = rng.pick([-5, -4, -3, -2, -1, 1, 2, 3, 5, 6, 8, 12, 15, 18, 22, 25, 28, 31, 36]);
      const rni = clean(rni10 / 10);
      const n = Math.round((popM * 1000000 * rni10) / 1000);
      return {
        prompt: `A country of ${num(popM)} million people has a rate of natural increase of ${num(rni)}%. Ignoring migration, by how many people does its population change in one year? (Negative for a fall.)`,
        answer: { type: "number", value: n, display: `${n < 0 ? "−" : ""}${big(Math.abs(n))} people` },
        solution: [
          `${num(rni)}% of ${big(popM * 1000000)} = ${num(rni)} ÷ 100 × ${big(popM * 1000000)}.`,
          `= **${n < 0 ? "−" : ""}${big(Math.abs(n))} people**${n < 0 ? " (a natural decrease)" : ""}.`,
        ],
        hint: "The rate of natural increase is a percentage — find that percentage of the population.",
        traps: [{ spec: { type: "number", value: Math.round((popM * 1000000 * rni10) / 100) }, feedback: "Careful with the decimal: " + num(rni) + "% means " + num(rni) + " ÷ 100." }],
      };
    },
  },

  // ======================= demographic-transition =======================
  {
    id: `${T}.dtm-stage`,
    topicId: T,
    title: "Identify the stage of the Demographic Transition Model",
    level: 2,
    guideRef: "demographic-transition",
    generate(rng, tier) {
      return factItem(
        rng,
        tier,
        DTM_BANK,
        [
          (c) => `Which stage of the Demographic Transition Model (DTM) fits this description? Give the stage number.\n\n*${c}*`,
          (c) => `DTM detective: *${c}* — which stage (1–5) is this?`,
          (c) => `Read the clue and name the DTM stage number (1–5): ${c}`,
        ],
        "Picture the DTM graph: which line is falling — the death rate, the birth rate, or neither?",
      );
    },
  },

  // ======================= future-population =======================
  {
    id: `${T}.future-facts`,
    topicId: T,
    title: "Recall future population facts and projections",
    level: 2,
    guideRef: "future-population",
    generate(rng, tier) {
      return factItem(rng, tier, FUTURE_BANK, [(c) => c, (c) => `Quick recall: ${c}`, (c) => `Future population: ${c}`], "Think about where fertility is still high (and where it has fallen below 2.1).");
    },
  },
  {
    id: `${T}.projection-change`,
    topicId: T,
    title: "Calculate the % change in a population projection",
    level: 3,
    guideRef: "future-population",
    generate(rng, tier) {
      let start: number, end: number, ans: number;
      const y1 = rng.pick([2020, 2023, 2025]);
      const y2 = rng.pick([2050, 2070, 2100]);
      if (tier === 1) {
        start = rng.pick([10, 20, 25, 40, 50, 80, 100, 200]);
        const pct = rng.pick([-50, -25, -20, -10, 10, 20, 25, 50, 75, 100, 150]);
        end = clean((start * (100 + pct)) / 100);
        ans = pct;
      } else {
        start = rng.int(12, 240);
        const pct10 = tier === 2 ? rng.int(-350, 900) : rng.int(-300, 300);
        end = Math.max(2, Math.round((start * (1000 + pct10)) / 1000));
        if (end === start) end += 3;
        ans = roundTo(((end - start) / start) * 100, 1);
      }
      const diff = clean(end - start);
      const traps: Trap[] = [];
      const wrongBase = roundTo((diff / end) * 100, 1);
      if (Math.abs(wrongBase - ans) > 0.05) traps.push({ spec: { type: "number", value: wrongBase }, feedback: "Divide by the ORIGINAL (starting) population, not the new one." });
      if (Math.abs(diff - ans) > 0.05) traps.push({ spec: { type: "number", value: diff }, feedback: "That's the change in millions. Divide by the starting population and × 100 for a percentage." });
      return {
        prompt: `A UN-style projection says a country's population will change from ${num(start)} million in ${y1} to ${num(end)} million in ${y2}. Calculate the percentage change${tier === 1 ? "" : ", to 1 decimal place"}. (Use a negative number for a decrease.)`,
        answer: { type: "number", value: ans, display: `${num(ans)}%` },
        solution: [
          `Change = ${num(end)} − ${num(start)} = ${num(diff)} million.`,
          `% change = ${num(diff)} ÷ ${num(start)} × 100 = ${tier === 1 ? "" : num(roundTo((diff / start) * 100, 3)) + " ≈ "}**${num(ans)}%**.`,
          ans < 0 ? "Negative = the population is projected to shrink (low fertility, ageing — like much of Europe and East Asia)." : "Positive = projected growth (high fertility, young population — like much of sub-Saharan Africa).",
        ],
        hint: "% change = (new − original) ÷ original × 100.",
        traps,
      };
    },
  },
];
