import type { TopicExtras } from "../types";

export const populationChangeExtras: TopicExtras = {
  hook:
    "Japan has more people moving in than moving out, yet it loses the population of a whole city every year — while Singapore has one of the lowest birth rates on Earth and keeps growing. What is going on?",
  didYouKnow: [
    "About 304 million people — roughly 1 in every 27 people on Earth — were living outside the country where they were born in 2024 (UN DESA).",
    "Around 4 in 10 people living in Singapore are not Singapore citizens: in 2024 the total population was about 6.04 million, of whom about 3.64 million were citizens.",
    "In 2023 Japan recorded only about 727,000 births but about 1.58 million deaths — more than two deaths for every birth.",
    "Migrants sent home an estimated US$685 billion to low- and middle-income countries in 2024 (World Bank) — more than foreign aid and foreign investment to those countries combined. The Philippines alone receives over US$35 billion a year.",
    "By the end of 2024 more than 120 million people worldwide had been forced from their homes by war, violence or persecution (UNHCR) — and Syrians have been one of the largest displaced groups, with over 13 million forced to flee at the height of the crisis.",
  ],
  experiments: [
    {
      title: "Family migration map",
      emoji: "🗺️",
      materials: ["A blank world or Asia map (printed or drawn)", "Coloured pens", "A notebook", "Parents, grandparents or other relatives to interview"],
      steps: [
        "Ask 3–5 relatives: Where were you born? Where did you grow up? Where have you lived since?",
        "For every move, ask: Why did you leave? Why did you choose the new place? What made the move difficult?",
        "Draw an arrow on the map for each move, with the year beside it.",
        "Sort each reason into a table: push factor, pull factor, or intervening obstacle.",
        "Label each move as internal or international, and voluntary or forced.",
      ],
      science:
        "You find out that migration is part of almost every family's story. Most moves will be voluntary and economic (jobs, study, marriage), and you will probably spot chain migration — people moving to where relatives already live. This is Lee's model in real life: push and pull factors set up the move, but obstacles like cost, distance and visas decide when and where it happens.",
      safety: "Be respectful — some family moves were painful (war, poverty). Let relatives choose what to share.",
    },
    {
      title: "Signs of migration in your neighbourhood",
      emoji: "🔎",
      materials: ["Notebook or phone for photos", "A tally sheet with columns for languages and types of shop", "An adult to come with you"],
      steps: [
        "Choose a short route — e.g. your HDB town centre, a hawker centre, or an area such as Little India or Chinatown.",
        "Tally how many shop signs use English, Chinese, Malay, Tamil or other languages (e.g. Thai, Burmese, Tagalog, Bengali).",
        "Note shops that serve migrants: remittance (money transfer) shops, foreign food stores, phone-card sellers, agencies.",
        "If you can, visit on a weekday and on a Sunday and compare the number of people and the activities.",
        "Draw a simple bar chart of your tallies and write 3 sentences about what they show.",
      ],
      science:
        "Migration leaves visible evidence in a place: languages, food, services and the people using public spaces. Remittance shops show the economic link migrants keep with their home country, and busier Sundays reflect migrant workers' rest days. You are measuring the cultural and economic effects of migration on the receiving area.",
      safety: "Go with an adult, stay on public paths, and ask before photographing people.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Lee's model of migration (1966)",
      svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lee's migration model: an origin and a destination each containing plus and minus factors, with intervening obstacles shown as hills between them">
  <rect width="360" height="200" fill="#ffffff"/>
  <ellipse cx="70" cy="95" rx="58" ry="60" fill="#fee2e2" stroke="#e11d48" stroke-width="2"/>
  <ellipse cx="290" cy="95" rx="58" ry="60" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
  <text x="70" y="25" font-size="13" font-weight="700" text-anchor="middle" fill="#9f1239">ORIGIN</text>
  <text x="290" y="25" font-size="13" font-weight="700" text-anchor="middle" fill="#065f46">DESTINATION</text>
  <text x="45" y="75" font-size="16" font-weight="700" fill="#e11d48">− −</text>
  <text x="80" y="95" font-size="16" font-weight="700" fill="#059669">+</text>
  <text x="40" y="115" font-size="16" font-weight="700" fill="#64748b">0</text>
  <text x="75" y="130" font-size="16" font-weight="700" fill="#e11d48">−</text>
  <text x="265" y="75" font-size="16" font-weight="700" fill="#059669">+ +</text>
  <text x="300" y="95" font-size="16" font-weight="700" fill="#e11d48">−</text>
  <text x="270" y="115" font-size="16" font-weight="700" fill="#64748b">0</text>
  <text x="305" y="130" font-size="16" font-weight="700" fill="#059669">+</text>
  <path d="M 135 150 L 155 105 L 172 150 Z M 165 150 L 185 95 L 205 150 Z M 198 150 L 215 115 L 228 150 Z" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <text x="180" y="168" font-size="11" text-anchor="middle" fill="#92400e">intervening obstacles</text>
  <text x="180" y="181" font-size="11" text-anchor="middle" fill="#92400e">(distance, cost, borders, visas)</text>
  <path d="M 128 70 C 170 45, 200 45, 232 70" fill="none" stroke="#4f46e5" stroke-width="2.5"/>
  <polygon points="232,70 220,68 227,59" fill="#4f46e5"/>
  <text x="180" y="42" font-size="11" text-anchor="middle" fill="#3730a3">migration</text>
  <text x="70" y="172" font-size="11" text-anchor="middle" fill="#334155">− push factors</text>
  <text x="290" y="172" font-size="11" text-anchor="middle" fill="#334155">+ pull factors</text>
  <text x="180" y="196" font-size="11" text-anchor="middle" fill="#334155">+ personal factors (age, family, attitude to risk)</text>
</svg>`,
      caption:
        "Everyone weighs up good (+), bad (−) and neutral (0) things about where they live and where they could go. A person moves only if the reasons are strong enough to overcome the intervening obstacles and their own personal factors.",
    },
    {
      title: "The population change equation",
      svg: `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Population change equals births minus deaths, which is natural change, plus immigrants minus emigrants, which is net migration">
  <rect width="360" height="170" fill="#ffffff"/>
  <rect x="10" y="20" width="70" height="34" rx="8" fill="#d1fae5"/>
  <text x="45" y="42" font-size="13" font-weight="700" text-anchor="middle" fill="#065f46">Births</text>
  <text x="92" y="43" font-size="16" font-weight="700" text-anchor="middle" fill="#334155">−</text>
  <rect x="104" y="20" width="70" height="34" rx="8" fill="#ffe4e6"/>
  <text x="139" y="42" font-size="13" font-weight="700" text-anchor="middle" fill="#9f1239">Deaths</text>
  <text x="187" y="43" font-size="16" font-weight="700" text-anchor="middle" fill="#334155">+</text>
  <rect x="198" y="20" width="72" height="34" rx="8" fill="#e0f2fe"/>
  <text x="234" y="42" font-size="12" font-weight="700" text-anchor="middle" fill="#075985">Immigrants</text>
  <text x="280" y="43" font-size="16" font-weight="700" text-anchor="middle" fill="#334155">−</text>
  <rect x="288" y="20" width="66" height="34" rx="8" fill="#fef3c7"/>
  <text x="321" y="42" font-size="12" font-weight="700" text-anchor="middle" fill="#92400e">Emigrants</text>
  <path d="M 15 62 Q 92 82 170 62" fill="none" stroke="#059669" stroke-width="2"/>
  <text x="92" y="95" font-size="12" font-weight="700" text-anchor="middle" fill="#065f46">NATURAL CHANGE</text>
  <path d="M 202 62 Q 276 82 350 62" fill="none" stroke="#0284c7" stroke-width="2"/>
  <text x="276" y="95" font-size="12" font-weight="700" text-anchor="middle" fill="#075985">NET MIGRATION</text>
  <rect x="90" y="115" width="180" height="40" rx="10" fill="#4f46e5"/>
  <text x="180" y="140" font-size="14" font-weight="700" text-anchor="middle" fill="#ffffff">TOTAL POPULATION CHANGE</text>
</svg>`,
      caption:
        "A population changes in only four ways. Births and deaths give natural change; people moving in and out give net migration. Add the two together for the total change.",
    },
  ],
  interactives: ["population-change:PopulationChangeCalculator", "population-change:PushPullBalance"],
};
