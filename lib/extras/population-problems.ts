import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "In 1972 Singapore told families to \"Stop at Two\". Fifteen years later it was begging them to \"Have Three or More\" — and today it pays parents a Baby Bonus. How can a country go from too many babies to too few in a single generation?",

  didYouKnow: [
    "Singapore's resident total fertility rate was about 0.97 in 2023 — roughly half of the replacement level of about 2.1, and one of the lowest in the world.",
    "Japan has more than 90,000 people aged 100 or over (2024), and nearly 3 in every 10 Japanese people are aged 65 or over.",
    "In Niger, about half the population is under 15 and women have about 6 children on average — one of the youngest populations and highest fertility rates on Earth.",
    "China's population fell in 2022 for the first time in about six decades, and UN estimates show India overtaking China as the world's most populous country in 2023.",
    "When Thomas Malthus warned in 1798 that population would outrun food, the world had fewer than 1 billion people. Today there are over 8 billion — and on average each person has more food than in Malthus's time.",
    "China's fertility rate had already fallen from nearly 6 children per woman to under 3 during the 1970s 'Later, Longer, Fewer' campaign — before the One-Child Policy even began in 1980.",
  ],

  activities: [
    {
      title: "Family tree census: are you a 4-2-1 family?",
      emoji: "🌳",
      materials: ["A large sheet of paper", "Coloured pens", "Your parents or grandparents to interview (in person or by video call)"],
      steps: [
        "Draw your family tree back to your great-grandparents if you can: you, your parents, grandparents, great-grandparents.",
        "For each couple, write how many children they had.",
        "Work out the average number of children per couple for each generation.",
        "Shade everyone aged 65 or over. Count how many older relatives there are for each person in your own generation (you, siblings and cousins).",
        "Compare your averages with Singapore's TFR: about 6 in the late 1950s, below 2.1 by the late 1970s, about 0.97 in 2023.",
      ],
      maths:
        "You are building a mini population pyramid from your own family. If the number of children per couple has fallen over the generations, your tree will be top-heavy — more elders than young people. That is exactly what an ageing population looks like, and why countries with very low fertility, like Singapore and China, worry about who will care for the elderly and pay for pensions.",
    },
    {
      title: "Beans and people: finding the optimum population",
      emoji: "🫘",
      materials: ["A bag of about 100 dried beans or chickpeas (the 'resources')", "Small cups or saucers (the 'people')", "A notebook"],
      steps: [
        "Decide that each person needs 10 beans to live well. Put out 2 cups and share the 100 beans. Are any resources unused because there are too few 'workers' to use them? (Rule: each cup can only collect up to 30 beans.)",
        "Add cups one at a time, sharing the beans each time. Record beans per person.",
        "Find the number of cups where every bean is used and each cup has at least 10 — that is your optimum population.",
        "Keep adding cups until each one gets fewer than 10 beans — the area is now over-populated.",
        "Now add 'technology': double the beans to 200. What happens to the optimum population?",
      ],
      maths:
        "The 30-bean limit stands for the work each person can do: with too few people, resources go unused (under-population). With too many, each person's share falls below what they need (over-population). In between is the optimum population, with the highest standard of living. Doubling the beans shows Boserup's idea: technology (like Singapore's NEWater and desalination) raises the carrying capacity, so the same place can support more people.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Under-, optimum and over-population",
      caption:
        "As population grows, the standard of living first rises (more people to use the resources), peaks at the optimum, then falls (too many people sharing the resources). New technology lifts the whole curve and moves the optimum to the right.",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of standard of living against population size. The curve rises through the under-population zone, peaks at the optimum population, then falls in the over-population zone. A dashed higher curve shows that new technology raises the peak and moves it to the right.">
  <rect x="0" y="0" width="480" height="300" fill="#ffffff"/>
  <rect x="60" y="30" width="127" height="220" fill="#bae6fd" opacity="0.5"/>
  <rect x="187" y="30" width="60" height="220" fill="#bbf7d0" opacity="0.7"/>
  <rect x="247" y="30" width="193" height="220" fill="#fecaca" opacity="0.5"/>
  <line x1="60" y1="250" x2="450" y2="250" stroke="#1f2937" stroke-width="2"/>
  <line x1="60" y1="250" x2="60" y2="25" stroke="#1f2937" stroke-width="2"/>
  <path d="M 60 230 C 140 40 280 40 420 245" fill="none" stroke="#1f2937" stroke-width="3"/>
  <path d="M 60 225 C 170 20 330 20 440 210" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="6 5"/>
  <line x1="217" y1="90" x2="217" y2="250" stroke="#334155" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="123" y="48" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Under-population</text>
  <text x="217" y="48" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Optimum</text>
  <text x="343" y="48" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Over-population</text>
  <text x="436" y="72" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">- - - with new technology</text>
  <text x="255" y="270" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Population size →</text>
  <text x="22" y="140" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 22 140)">Standard of living →</text>
</svg>`,
    },
    {
      title: "Two policy U-turns: Singapore and China",
      caption:
        "Both countries started by trying to cut births, then switched to encouraging them once fertility fell far below replacement level (about 2.1).",
      svg: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline from 1970 to 2025. Singapore: Stop at Two 1972, Graduate Mothers' Scheme 1984, Have Three or More 1987, Baby Bonus 2001. China: Later Longer Fewer in the 1970s, One-Child Policy 1980 to 2015, two-child policy 2016, three-child policy 2021. Anti-natalist policies are shaded red and pro-natalist policies green.">
  <rect x="0" y="0" width="480" height="280" fill="#ffffff"/>
  <line x1="30" y1="140" x2="460" y2="140" stroke="#1f2937" stroke-width="2"/>
  <line x1="40" y1="134" x2="40" y2="146" stroke="#1f2937" stroke-width="2"/>
  <line x1="115" y1="134" x2="115" y2="146" stroke="#1f2937" stroke-width="2"/>
  <line x1="190" y1="134" x2="190" y2="146" stroke="#1f2937" stroke-width="2"/>
  <line x1="265" y1="134" x2="265" y2="146" stroke="#1f2937" stroke-width="2"/>
  <line x1="340" y1="134" x2="340" y2="146" stroke="#1f2937" stroke-width="2"/>
  <line x1="415" y1="134" x2="415" y2="146" stroke="#1f2937" stroke-width="2"/>
  <text x="40" y="160" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1970</text>
  <text x="115" y="160" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1980</text>
  <text x="190" y="160" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1990</text>
  <text x="265" y="160" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2000</text>
  <text x="340" y="160" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2010</text>
  <text x="415" y="160" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2020</text>
  <text x="10" y="22" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937">Singapore</text>
  <rect x="45" y="30" width="80" height="34" rx="5" fill="#fecaca" stroke="#334155"/>
  <text x="85" y="44" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1972</text>
  <text x="85" y="58" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Stop at Two</text>
  <rect x="124" y="30" width="100" height="34" rx="5" fill="#c7d2fe" stroke="#334155"/>
  <text x="174" y="44" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1984 Graduate</text>
  <text x="174" y="58" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Mothers' Scheme</text>
  <rect x="150" y="72" width="110" height="34" rx="5" fill="#bbf7d0" stroke="#334155"/>
  <text x="205" y="86" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1987 Have Three</text>
  <text x="205" y="100" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">or More</text>
  <rect x="232" y="30" width="86" height="34" rx="5" fill="#bbf7d0" stroke="#334155"/>
  <text x="273" y="44" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2001</text>
  <text x="273" y="58" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Baby Bonus</text>
  <line x1="55" y1="64" x2="55" y2="134" stroke="#334155" stroke-dasharray="3 3"/>
  <line x1="145" y1="64" x2="145" y2="134" stroke="#334155" stroke-dasharray="3 3"/>
  <line x1="168" y1="106" x2="168" y2="134" stroke="#334155" stroke-dasharray="3 3"/>
  <line x1="272" y1="64" x2="272" y2="134" stroke="#334155" stroke-dasharray="3 3"/>
  <text x="10" y="186" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937">China</text>
  <rect x="18" y="196" width="90" height="34" rx="5" fill="#fecaca" stroke="#334155"/>
  <text x="63" y="210" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1970s Later,</text>
  <text x="63" y="224" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Longer, Fewer</text>
  <rect x="115" y="236" width="100" height="34" rx="5" fill="#fecaca" stroke="#334155"/>
  <text x="165" y="250" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1980–2015</text>
  <text x="165" y="264" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">One-Child Policy</text>
  <rect x="300" y="236" width="90" height="34" rx="5" fill="#bbf7d0" stroke="#334155"/>
  <text x="345" y="250" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2016</text>
  <text x="345" y="264" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Two children</text>
  <rect x="390" y="196" width="88" height="34" rx="5" fill="#bbf7d0" stroke="#334155"/>
  <text x="434" y="210" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2021 Three</text>
  <text x="434" y="224" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">children</text>
  <line x1="115" y1="146" x2="115" y2="236" stroke="#334155" stroke-dasharray="3 3"/>
  <line x1="385" y1="146" x2="385" y2="236" stroke="#334155" stroke-dasharray="3 3"/>
  <line x1="422" y1="146" x2="422" y2="196" stroke="#334155" stroke-dasharray="3 3"/>
  <rect x="390" y="10" width="14" height="10" fill="#fecaca" stroke="#334155"/>
  <text x="408" y="19" font-size="10" font-family="sans-serif" fill="#1f2937">Anti-natalist</text>
  <rect x="390" y="26" width="14" height="10" fill="#bbf7d0" stroke="#334155"/>
  <text x="408" y="35" font-size="10" font-family="sans-serif" fill="#1f2937">Pro-natalist</text>
  <rect x="390" y="42" width="14" height="10" fill="#c7d2fe" stroke="#334155"/>
  <text x="408" y="51" font-size="10" font-family="sans-serif" fill="#1f2937">Selective</text>
</svg>`,
    },
  ],

  history: {
    title: "The gloomy parson and the hopeful economist",
    story:
      "In 1798 an English clergyman, Thomas Malthus, published *An Essay on the Principle of Population*. He argued that population, left unchecked, grows geometrically (1, 2, 4, 8…) while food supply grows only arithmetically (1, 2, 3, 4…). Sooner or later, he said, people would outrun their food, and famine, disease and war would drag numbers back down. His essay shocked readers and shaped debates about the poor for decades.\n\nBut the world kept growing — from under 1 billion in his day to 8 billion in 2022 — and on average people now have more food, not less. In 1965 the Danish economist Ester Boserup offered the opposite view: population pressure pushes people to invent better ways of farming. The Green Revolution of the 1960s, with its high-yield crops and irrigation, seemed to prove her right. Geographers still argue about who was closer to the truth.",
  },
};
