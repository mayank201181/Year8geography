import type { TopicExtras } from "../types";

const familyPyramidSvg = `<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The 4-2-1 family: four grandparents at the top, two parents in the middle and one child at the bottom, forming an upside-down pyramid">
  <rect x="0" y="0" width="360" height="230" fill="#ffffff"/>
  <text x="180" y="20" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">The 4-2-1 family (one-child policy)</text>
  <polygon points="40,40 320,40 210,200 150,200" fill="#eef2ff" stroke="#c7d2fe"/>
  <g fill="#94a3b8"><circle cx="90" cy="65" r="13"/><circle cx="150" cy="65" r="13"/><circle cx="210" cy="65" r="13"/><circle cx="270" cy="65" r="13"/></g>
  <text x="180" y="97" font-size="12" text-anchor="middle" fill="#334155">4 grandparents (retired)</text>
  <g fill="#6366f1"><circle cx="150" cy="122" r="13"/><circle cx="210" cy="122" r="13"/></g>
  <text x="180" y="154" font-size="12" text-anchor="middle" fill="#334155">2 parents (working, then retiring)</text>
  <circle cx="180" cy="178" r="13" fill="#f59e0b"/>
  <text x="180" y="215" font-size="12" font-weight="bold" text-anchor="middle" fill="#b45309">1 child may have to support all 6 adults</text>
</svg>`;

const malthusBoserupSvg = `<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two sketch graphs. Malthus: an exponential population curve crosses a straight food line at a crisis point. Boserup: food supply rises in steps that stay above the population curve.">
  <rect x="0" y="0" width="360" height="230" fill="#ffffff"/>
  <text x="90" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Malthus (1798)</text>
  <text x="270" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Boserup (1965)</text>
  <g stroke="#94a3b8" stroke-width="1.5"><line x1="20" y1="190" x2="170" y2="190"/><line x1="20" y1="30" x2="20" y2="190"/><line x1="200" y1="190" x2="350" y2="190"/><line x1="200" y1="30" x2="200" y2="190"/></g>
  <line x1="20" y1="150" x2="165" y2="95" stroke="#059669" stroke-width="3"/>
  <path d="M20,175 C70,172 105,155 125,115 C138,88 148,60 155,35" fill="none" stroke="#e11d48" stroke-width="3"/>
  <circle cx="123" cy="111" r="5" fill="#e11d48"/>
  <text x="100" y="135" font-size="11" fill="#be123c" text-anchor="end">crisis point</text>
  <text x="90" y="206" font-size="11" text-anchor="middle" fill="#475569">time</text>
  <path d="M200,150 L240,145 L240,110 L285,104 L285,70 L330,63 L330,40 L348,38" fill="none" stroke="#059669" stroke-width="3"/>
  <path d="M200,178 C250,170 285,145 305,110 C320,85 335,65 345,48" fill="none" stroke="#e11d48" stroke-width="3"/>
  <text x="240" y="104" font-size="11" text-anchor="middle" fill="#b45309">new tech</text>
  <text x="285" y="64" font-size="11" text-anchor="middle" fill="#b45309">new tech</text>
  <text x="275" y="206" font-size="11" text-anchor="middle" fill="#475569">time</text>
  <g font-size="11"><rect x="60" y="214" width="12" height="4" fill="#e11d48"/><text x="76" y="220" fill="#be123c">population</text><rect x="170" y="214" width="12" height="4" fill="#059669"/><text x="186" y="220" fill="#047857">food supply</text></g>
</svg>`;

export const populationPoliciesExtras: TopicExtras = {
  hook:
    "In 1798 Thomas Malthus warned that people would soon breed faster than farms could feed them. There were about 1 billion of us then and over 8 billion now, so was he wrong, or just early? And why is Singapore paying parents to have MORE babies while Niger's women average around six children each?",
  didYouKnow: [
    "Singapore's resident total fertility rate fell to 0.97 in 2023, the first time it dropped below 1 child per woman and far below the replacement level of 2.1.",
    "In the 1970s Singapore's slogan was \"Stop at Two\"; by 1987 it had switched to \"Have Three or More, if you can afford it\" because births had fallen too far.",
    "China's one-child policy ran from 1979 to 2015. It was replaced by a two-child policy in 2016 and a three-child policy in 2021 as China's population began to age and shrink.",
    "China's population fell in 2022 for the first time in about 60 years, and India overtook it as the world's most populous country in 2023.",
    "Between 1961 and 2020 world cereal production more than tripled while the world's population grew about 2.5 times, which is the kind of innovation Ester Boserup predicted.",
  ],
  experiments: [
    {
      title: "Family fertility time machine",
      emoji: "👵",
      materials: ["Notebook or phone notes", "Willing family members (grandparents, parents, aunts, uncles)", "Calculator"],
      steps: [
        "Politely ask your grandparents how many brothers and sisters they had, and how many children they had.",
        "Ask your parents, aunts and uncles the same: how many siblings, and how many children do they have?",
        "For each generation, work out the average number of children per family (total children ÷ number of families).",
        "Draw a simple bar chart: great-grandparents' generation, grandparents' generation, parents' generation.",
        "Compare your family's numbers with Singapore's total fertility rate: about 5.8 in 1960, about 1.8 in 1980, and 0.97 in 2023.",
      ],
      science:
        "You will probably see family size shrink across the generations, just like Singapore's national figures. As countries get richer, more children survive, more women study and work, raising children costs more and housing is small, so families choose fewer children. That is why Singapore went from anti-natalist (\"Stop at Two\") to pro-natalist policies like the Baby Bonus.",
      safety: "Family size can be a sensitive topic (some people could not have children, or lost a child). Only ask people who are happy to talk, and never share names.",
    },
    {
      title: "Malthus vs Boserup bean game",
      emoji: "🫘",
      materials: ["A bag of dried beans (people)", "A bag of rice and a small cup (food)", "Two plates", "Paper to record each round"],
      steps: [
        "Round 0: put 2 beans (people) on one plate and 4 cups of rice (food) on the other. Rule: each bean needs 1 cup of rice.",
        "Malthus game: each round, DOUBLE the beans but add only 2 more cups of rice. Record both numbers for 5 rounds.",
        "Circle the round where there are more beans than cups of rice: that is Malthus's crisis point. Remove beans until they match the food (his positive checks).",
        "Boserup game: start again with the same rules, but whenever the beans reach three-quarters of the rice cups, play an \"invention card\" (e.g. irrigation, fertiliser, new seeds) that doubles the rice.",
        "Plot both games on one line graph (rounds along the bottom, number up the side) and compare.",
      ],
      science:
        "Doubling (exponential growth) always overtakes adding a fixed amount (arithmetic growth), which is the heart of Malthus's argument. Boserup's version shows how technology like irrigation, fertiliser and high-yield seeds can raise food supply in jumps. In real life world food per person has risen since 1960, but hunger still exists where war, poverty or poor transport stop food reaching people.",
      safety: "Do not eat the dried beans or uncooked rice; tidy up so small children or pets cannot swallow them.",
    },
  ],
  bonusDiagrams: [
    {
      title: "China's 4-2-1 family",
      svg: familyPyramidSvg,
      caption:
        "Under the one-child policy (1979–2015) many Chinese children grew up with no siblings. When everyone has only one child, one adult may have to look after two parents and four grandparents: an ageing population with fewer workers to support it.",
    },
    {
      title: "Two theories of population and food",
      svg: malthusBoserupSvg,
      caption:
        "Malthus: population grows exponentially, food grows arithmetically, so a crisis (famine, disease, war) is inevitable. Boserup: population pressure pushes people to invent new farming methods, so food supply jumps up and keeps ahead. Simplified sketches, not real data.",
    },
  ],
  interactives: ["population-policies:FertilityFuture", "population-policies:MalthusBoserup"],
};
