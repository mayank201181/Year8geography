import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "It took the whole of human history until about 1804 for the world to reach 1 billion people — yet the eighth billion arrived in just 11 years, between 2011 and 2022. What changed?",

  didYouKnow: [
    "India overtook China in 2023 to become the world's most populous country, according to UN estimates — both have about 1.4 billion people.",
    "World population growth peaked at just over 2% a year in the 1960s. Today it is under 1% a year, which is why the UN expects the total to peak at about 10.3 billion in the mid-2080s.",
    "South Korea had the lowest total fertility rate in the world in 2023, about 0.72 children per woman — roughly a third of the 2.1 needed to replace the population.",
    "Singapore's resident total fertility rate fell below 1 for the first time in 2023, to about 0.97, despite incentives such as the Baby Bonus.",
    "China's population fell in 2022 for the first time in about six decades, and Japan's has been shrinking since about 2010 — both are examples of natural decrease.",
    "Niger has one of the highest fertility rates in the world, about 6 children per woman, and half of its people are under about 15 years old.",
  ],

  activities: [
    {
      title: "Your family's demographic transition",
      emoji: "🌳",
      materials: ["Paper and pen (or a spreadsheet)", "A phone or video call with grandparents or older relatives"],
      steps: [
        "Draw a family tree going back to your grandparents (and great-grandparents if anyone remembers them).",
        "For each couple, write down how many children they had. Ask relatives — it makes a great conversation.",
        "Work out the average number of children per couple in each generation: total children ÷ number of couples.",
        "Plot the averages on a simple bar chart, oldest generation on the left.",
        "Draw a line across at 2.1 (replacement level) and another at about 1 (Singapore's resident TFR in 2023). Where does each generation sit?",
      ],
      maths:
        "Most families find that the number of children per couple has fallen from one generation to the next — the same fall in birth rate that moves a country from DTM stage 2 into stages 3, 4 and 5. Ask your relatives WHY they had fewer children (school, jobs, cost of housing, healthier babies) and you have collected primary data on the causes of a falling birth rate. A single family is a tiny sample, so compare with friends' results before drawing conclusions.",
    },
    {
      title: "Doubling on a page with dried lentils",
      emoji: "🫘",
      materials: ["A cup of dried lentils or rice", "A sheet of paper ruled into 10 boxes", "A timer"],
      steps: [
        "Label the boxes 1 to 10. Each box is one 'doubling time' — say 35 years for a population growing at 2% a year.",
        "Put 1 lentil in box 1, 2 in box 2, 4 in box 3, and keep doubling.",
        "Time how long it takes to count out each box. When does counting start to feel impossible?",
        "Box 10 needs 512 lentils. Estimate how many years have passed (10 doublings × 35 years).",
        "Now halve the growth rate to 1% (doubling time about 70 years). How many boxes would you fill in the same number of years?",
      ],
      maths:
        "This is exponential growth: a steady percentage growth rate adds more each time because the base keeps getting bigger, giving the J-curve of world population. The rule of 70 (doubling time ≈ 70 ÷ growth rate %) shows why a small change in the growth rate matters so much. The world's own doublings took 123 years (1 → 2 billion) and then only 47 years (2 → 4 billion) as death rates fell.",
    },
  ],

  bonusDiagrams: [
    {
      title: "The Demographic Transition Model",
      caption: "A schematic DTM: the death rate falls first (stage 2), then the birth rate (stage 3). The gap between the lines is natural increase, and the total population rises fastest when the gap is widest. In stage 5 births fall below deaths.",
      svg: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Demographic Transition Model with five stages: birth rate and death rate lines, and a total population line that rises through stages 2 and 3, levels off in stage 4 and dips in stage 5.">
<rect x="0" y="0" width="460" height="300" fill="#ffffff"/>
<rect x="50" y="30" width="78" height="220" fill="#f1f5f9"/>
<rect x="128" y="30" width="78" height="220" fill="#ffffff"/>
<rect x="206" y="30" width="78" height="220" fill="#f1f5f9"/>
<rect x="284" y="30" width="78" height="220" fill="#ffffff"/>
<rect x="362" y="30" width="78" height="220" fill="#f1f5f9"/>
<line x1="50" y1="250" x2="440" y2="250" stroke="#1f2937" stroke-width="1.5"/>
<line x1="50" y1="30" x2="50" y2="250" stroke="#1f2937" stroke-width="1.5"/>
<text x="89" y="22" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Stage 1</text>
<text x="167" y="22" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Stage 2</text>
<text x="245" y="22" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Stage 3</text>
<text x="323" y="22" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Stage 4</text>
<text x="401" y="22" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Stage 5</text>
<path d="M50,70 L66,62 L82,74 L98,64 L114,72 L128,68 L150,66 L180,70 L206,72 L230,110 L255,150 L284,180 L310,186 L336,178 L362,190 L400,205 L440,212" fill="none" stroke="#2563eb" stroke-width="2.5"/>
<path d="M50,78 L64,66 L80,90 L96,70 L112,96 L128,80 L150,110 L180,150 L206,170 L230,182 L255,190 L284,194 L310,195 L336,194 L362,192 L400,190 L440,186" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<path d="M50,236 L128,234 L170,226 L206,206 L245,172 L284,146 L323,136 L362,134 L400,137 L440,142" fill="none" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/>
<text x="140" y="60" font-size="11" font-family="sans-serif" fill="#2563eb">Birth rate</text>
<text x="60" y="118" font-size="11" font-family="sans-serif" fill="#dc2626">Death rate</text>
<text x="300" y="128" font-size="11" font-family="sans-serif" fill="#1f2937">Total population</text>
<text x="160" y="96" font-size="11" font-family="sans-serif" fill="#334155">natural increase</text>
<text x="89" y="266" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">High, steady</text>
<text x="167" y="266" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Early growth</text>
<text x="245" y="266" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Late growth</text>
<text x="323" y="266" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Low, steady</text>
<text x="401" y="266" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Decline</text>
<text x="167" y="282" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">e.g. Niger</text>
<text x="245" y="282" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">e.g. India</text>
<text x="323" y="282" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">e.g. UK</text>
<text x="401" y="282" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">e.g. Japan</text>
<text x="18" y="140" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 18 140)">Rate per 1000 / population</text>
<text x="245" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Time →</text>
</svg>`,
    },
    {
      title: "World population milestones: the J-curve",
      caption: "Each dot is a UN milestone: 1 billion (about 1804), 2 (1927), 3 (1960), 4 (1974), 5 (1987), 6 (1999), 7 (2011) and 8 billion (2022). The gaps between dots shrink from 123 years to about 12 — that steep climb is the J-curve.",
      svg: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of world population milestones from 1 billion in 1804 to 8 billion in 2022, drawn to scale, forming a J-curve.">
<rect x="0" y="0" width="460" height="300" fill="#ffffff"/>
<line x1="50" y1="234.4" x2="440" y2="234.4" stroke="#e5e7eb"/>
<line x1="50" y1="183.3" x2="440" y2="183.3" stroke="#e5e7eb"/>
<line x1="50" y1="132.2" x2="440" y2="132.2" stroke="#e5e7eb"/>
<line x1="50" y1="81.1" x2="440" y2="81.1" stroke="#e5e7eb"/>
<line x1="50" y1="30" x2="440" y2="30" stroke="#e5e7eb"/>
<line x1="50" y1="260" x2="440" y2="260" stroke="#1f2937" stroke-width="1.5"/>
<line x1="50" y1="30" x2="50" y2="260" stroke="#1f2937" stroke-width="1.5"/>
<text x="44" y="264" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">0</text>
<text x="44" y="238" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">1</text>
<text x="44" y="187" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">3</text>
<text x="44" y="136" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">5</text>
<text x="44" y="85" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">7</text>
<text x="44" y="34" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">9</text>
<text x="50" y="276" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">1800</text>
<text x="134.8" y="276" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">1850</text>
<text x="219.6" y="276" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">1900</text>
<text x="304.3" y="276" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">1950</text>
<text x="389.1" y="276" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">2000</text>
<polyline points="56.8,234.4 265.3,208.9 321.3,183.3 345.0,157.8 367.1,132.2 387.4,106.7 407.8,81.1 426.4,55.6" fill="none" stroke="#2563eb" stroke-width="2.5"/>
<circle cx="56.8" cy="234.4" r="4" fill="#2563eb"/>
<circle cx="265.3" cy="208.9" r="4" fill="#2563eb"/>
<circle cx="321.3" cy="183.3" r="4" fill="#2563eb"/>
<circle cx="345.0" cy="157.8" r="4" fill="#2563eb"/>
<circle cx="367.1" cy="132.2" r="4" fill="#2563eb"/>
<circle cx="387.4" cy="106.7" r="4" fill="#2563eb"/>
<circle cx="407.8" cy="81.1" r="4" fill="#2563eb"/>
<circle cx="426.4" cy="55.6" r="4" fill="#2563eb"/>
<text x="62" y="226" font-size="11" font-family="sans-serif" fill="#1f2937">1 bn (1804)</text>
<text x="200" y="200" font-size="11" font-family="sans-serif" fill="#1f2937">2 bn (1927)</text>
<text x="160" y="252" font-size="11" font-family="sans-serif" fill="#334155">123 years</text>
<text x="352" y="48" font-size="11" font-family="sans-serif" fill="#1f2937">8 bn (2022)</text>
<text x="300" y="72" font-size="11" font-family="sans-serif" fill="#334155">7 → 8 bn: 11 years</text>
<text x="18" y="145" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 18 145)">World population (billions)</text>
<text x="245" y="294" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Year</text>
</svg>`,
    },
  ],

  history: {
    title: "Thomas Malthus and the race between people and food",
    story:
      "In 1798, when the world had roughly 1 billion people, an English clergyman called Thomas Malthus published *An Essay on the Principle of Population*. He argued that population tends to grow geometrically (1, 2, 4, 8 …) while food supply grows only arithmetically (1, 2, 3, 4 …), so famine, disease and war would always act as 'checks' on growth. His idea shocked readers and influenced Charles Darwin. Yet the world has since grown to more than 8 billion. Malthus could not foresee new farming methods — from crop rotation and fertilisers to the Green Revolution's high-yield seeds — or that families would choose to have fewer children as countries developed. Today geographers still debate his question: can resources keep pace with people?",
  },
};
