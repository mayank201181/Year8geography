import type { TopicExtras } from "../types";

export const populationGrowthExtras: TopicExtras = {
  hook:
    "It took all of human history, around 200,000 years, to reach 1 billion people in about 1804. Then the world added its eighth billion in just 11 years. What changed?",
  didYouKnow: [
    "The UN named 15 November 2022 the 'Day of Eight Billion', the day world population was estimated to pass 8 billion, only 11 years after it passed 7 billion in 2011.",
    "World population growth peaked at about 2.1% a year in the late 1960s. Today it is under 1% a year, but because the base is so big, the world still adds about 70 million people a year.",
    "India overtook China as the world's most populous country in 2023, with roughly 1.43 billion people.",
    "Singapore's resident total fertility rate fell to 0.97 children per woman in 2023, the first time it dropped below 1. Replacement level is about 2.1.",
    "Japan's population has been shrinking since about 2010: in recent years it has recorded roughly twice as many deaths as births.",
  ],
  experiments: [
    {
      title: "Three-generation family survey",
      emoji: "👪",
      materials: ["Notebook or phone", "A grandparent, parent, aunt or uncle to interview", "Pencil and ruler for a bar chart"],
      steps: [
        "Ask a grandparent: how many brothers and sisters did you have? How many children did you have?",
        "Ask a parent (or aunt/uncle) the same two questions.",
        "Write down your own number of siblings.",
        "Make a bar chart: average family size for each generation. If you can, combine results with classmates.",
        "Ask each person why they think families got smaller (cost of living, flats, education, careers, healthcare).",
      ],
      science:
        "Most Singapore families show a big fall in family size over three generations. This is the demographic transition in action: as death rates fell and incomes, education and urban living rose, birth rates fell too. Singapore went from about 6 children per woman in 1957 to under 1 today. Your survey is real primary data on falling fertility.",
      safety: "Be respectful: some family questions can be sensitive, so let people skip any question they prefer not to answer.",
    },
    {
      title: "Rice-grain doubling: feel exponential growth",
      emoji: "🍚",
      materials: ["A cup of uncooked rice", "10 small paper cups or saucers", "A marker", "Kitchen scale (optional)"],
      steps: [
        "Label cups 1 to 10. Put 1 grain in cup 1, 2 grains in cup 2, 4 in cup 3, and keep doubling.",
        "Before you start, predict: how many grains will cup 10 need? Write it down.",
        "Count carefully as far as you can (cup 10 needs 512 grains). Weigh a cup if counting gets too slow.",
        "Each cup is one 'doubling time'. At 2% growth, the rule of 70 gives a doubling time of 35 years: work out how many years your 10 cups represent.",
        "Compare with adding the same number each time (1, 2, 3, 4 …). Which grows faster by cup 10?",
      ],
      science:
        "Population grows exponentially: each new generation has children too, so growth is a percentage of an ever-larger total. Steady doubling turns 1 into 512 in only 9 doublings. This is why world population curved upward into a J-shape, and why even a 'small' growth rate like 2% doubles a population in about 35 years (rule of 70: 70 ÷ 2 = 35).",
      safety: "Do not eat the uncooked rice; collect it afterwards so it can be cooked later.",
    },
  ],
  bonusDiagrams: [
    {
      title: "How a population changes",
      svg: `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Population change equals births minus deaths (natural change) plus immigrants minus emigrants (net migration)">
  <rect x="0" y="0" width="360" height="170" fill="#ffffff"/>
  <rect x="130" y="55" width="100" height="60" rx="10" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
  <text x="180" y="82" text-anchor="middle" font-size="13" font-weight="bold" fill="#3730a3">Population</text>
  <text x="180" y="99" text-anchor="middle" font-size="11" fill="#3730a3">of a country</text>
  <line x1="60" y1="40" x2="128" y2="68" stroke="#059669" stroke-width="3"/>
  <polygon points="128,68 116,68 122,58" fill="#059669"/>
  <text x="10" y="32" font-size="12" font-weight="bold" fill="#047857">+ Births</text>
  <line x1="232" y1="68" x2="300" y2="40" stroke="#e11d48" stroke-width="3"/>
  <polygon points="300,40 288,40 294,50" fill="#e11d48"/>
  <text x="290" y="32" font-size="12" font-weight="bold" fill="#be123c">− Deaths</text>
  <line x1="60" y1="130" x2="128" y2="102" stroke="#0284c7" stroke-width="3"/>
  <polygon points="128,102 116,102 122,112" fill="#0284c7"/>
  <text x="4" y="148" font-size="12" font-weight="bold" fill="#0369a1">+ Immigrants</text>
  <line x1="232" y1="102" x2="300" y2="130" stroke="#d97706" stroke-width="3"/>
  <polygon points="300,130 288,130 294,120" fill="#d97706"/>
  <text x="268" y="148" font-size="12" font-weight="bold" fill="#b45309">− Emigrants</text>
  <text x="180" y="20" text-anchor="middle" font-size="11" fill="#334155">Natural change = births − deaths</text>
  <text x="180" y="165" text-anchor="middle" font-size="11" fill="#334155">Net migration = immigrants − emigrants</text>
</svg>`,
      caption:
        "Population change = natural change (births − deaths) + net migration. For the whole world there is no migration, so only births and deaths matter. Singapore's resident population grows mainly through migration, because its natural increase is very small.",
    },
    {
      title: "Rule of 70: growth rate vs doubling time",
      svg: `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of doubling times: 0.5 percent growth doubles in 140 years, 1 percent in 70, 2 percent in 35, 3.5 percent in 20">
  <rect x="0" y="0" width="360" height="180" fill="#ffffff"/>
  <text x="180" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">Doubling time = 70 ÷ growth rate (%)</text>
  <text x="70" y="50" text-anchor="end" font-size="11" fill="#334155">0.5% / yr</text>
  <rect x="78" y="38" width="240" height="18" rx="4" fill="#c7d2fe"/>
  <text x="314" y="51" text-anchor="end" font-size="11" font-weight="bold" fill="#3730a3">140 yrs</text>
  <text x="70" y="82" text-anchor="end" font-size="11" fill="#334155">1% / yr</text>
  <rect x="78" y="70" width="120" height="18" rx="4" fill="#a5b4fc"/>
  <text x="204" y="83" font-size="11" font-weight="bold" fill="#3730a3">70 yrs</text>
  <text x="70" y="114" text-anchor="end" font-size="11" fill="#334155">2% / yr</text>
  <rect x="78" y="102" width="60" height="18" rx="4" fill="#818cf8"/>
  <text x="144" y="115" font-size="11" font-weight="bold" fill="#3730a3">35 yrs</text>
  <text x="70" y="146" text-anchor="end" font-size="11" fill="#334155">3.5% / yr</text>
  <rect x="78" y="134" width="34" height="18" rx="4" fill="#4f46e5"/>
  <text x="118" y="147" font-size="11" font-weight="bold" fill="#3730a3">20 yrs (like Niger)</text>
  <text x="180" y="174" text-anchor="middle" font-size="11" fill="#64748b">Faster growth means a much shorter doubling time</text>
</svg>`,
      caption:
        "Divide 70 by the yearly growth rate to estimate how long a population takes to double. A country growing at 3.5% a year doubles in about 20 years; one growing at 0.5% takes about 140 years.",
    },
  ],
  interactives: ["population-growth:GrowthSimulator", "population-growth:PopulationTimeline"],
};
