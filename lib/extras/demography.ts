import type { TopicExtras } from "../types";

export const demographyExtras: TopicExtras = {
  hook:
    "Line up everyone in Niger from youngest to oldest and the person in the middle is about 15 years old; do the same in Japan and the middle person is nearly 49. How can two countries in the same century be so different — and which one is Singapore starting to look like?",
  didYouKnow: [
    "The world population passed 8 billion on 15 November 2022 (UN estimate) — it was only 4 billion in 1974.",
    "In 2023 India overtook China as the most populous country, with over 1.42 billion people (UN estimate).",
    "Singapore's resident total fertility rate fell to 0.97 in 2023 — the first time it dropped below 1 child per woman, far below the replacement level of 2.1.",
    "In Japan almost 3 in every 10 people (about 29%) are aged 65 or over — the highest share of any large country — and adult nappies outsell baby nappies there.",
    "Britain's first national census in 1801 counted about 8.9 million people in England and Wales; Singapore's Census 2020 mostly used government records instead of knocking on every door.",
  ],
  experiments: [
    {
      title: "Your family's own demographic transition",
      emoji: "👪",
      materials: ["Paper and pen (or a spreadsheet)", "Parents, grandparents or older relatives to interview"],
      steps: [
        "Ask each grandparent how many brothers and sisters they had, and whether any died as babies or children.",
        "Ask each parent the same question, then count your own siblings.",
        "Draw a bar chart: family size for the grandparent, parent and your own generation.",
        "Ask WHY families changed: cost of housing and school, mothers working, health care, HDB flat size, government campaigns such as 'Stop at Two' (1970s) and later 'Have Three or More (if you can afford it)'.",
        "Match each generation to a stage of the Demographic Transition Model.",
      ],
      science:
        "Most Singapore families show the DTM in miniature: grandparents often had 5–8 siblings (stage 2–3), parents 2–3 (stage 3–4) and today 1–2 (stage 4–5). Falling child deaths came first, then families chose to have fewer children — exactly the order the model predicts.",
      safety: "Be sensitive — some relatives may not want to talk about family members who died. Let them skip any question.",
    },
    {
      title: "Mini-census: build a class population pyramid",
      emoji: "📊",
      materials: ["Anonymous slips of paper or an online form (ask your teacher)", "Squared paper", "Two coloured pens"],
      steps: [
        "With your teacher's permission, ask each classmate to write the age and sex of everyone living in their home — no names.",
        "Tally the people into 10-year age bands (0–9, 10–19 … 80+) for males and females.",
        "Turn each tally into a percentage of the total, then draw a pyramid: males left, females right, youngest at the bottom.",
        "Work out the dependency ratio: (under-15s + over-64s) ÷ (15–64s) × 100.",
        "Compare your pyramid with Singapore's national one from SingStat. Is your sample's shape similar? Why might it differ?",
      ],
      science:
        "This is how a real census works: count everyone, group by age and sex, then look at the shape. Your pyramid will probably bulge at 10–19 (you and your classmates) and 40–59 (your parents) — a reminder that a sample can be biased. Real censuses try to count everyone to avoid that bias.",
      safety: "Keep the survey anonymous and voluntary, and never collect names, addresses or NRIC numbers.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Three pyramid shapes",
      svg: `<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three population pyramid shapes: expansive with a wide base, stationary with straight sides, constrictive with a narrow base" font-family="sans-serif"><rect x="8" y="130" width="52" height="15" fill="#93c5fd"/><rect x="60" y="130" width="52" height="15" fill="#f9a8d4"/><rect x="19" y="112" width="41" height="15" fill="#93c5fd"/><rect x="60" y="112" width="41" height="15" fill="#f9a8d4"/><rect x="29" y="94" width="31" height="15" fill="#93c5fd"/><rect x="60" y="94" width="31" height="15" fill="#f9a8d4"/><rect x="38" y="76" width="22" height="15" fill="#93c5fd"/><rect x="60" y="76" width="22" height="15" fill="#f9a8d4"/><rect x="46" y="58" width="14" height="15" fill="#93c5fd"/><rect x="60" y="58" width="14" height="15" fill="#f9a8d4"/><rect x="53" y="40" width="7" height="15" fill="#93c5fd"/><rect x="60" y="40" width="7" height="15" fill="#f9a8d4"/><line x1="60" y1="38" x2="60" y2="145" stroke="#475569" stroke-width="1"/><text x="60" y="163" text-anchor="middle" font-size="13" font-weight="700" fill="#e11d48">Expansive</text><text x="60" y="179" text-anchor="middle" font-size="11" fill="#475569">e.g. Niger</text><rect x="146" y="130" width="34" height="15" fill="#93c5fd"/><rect x="180" y="130" width="34" height="15" fill="#f9a8d4"/><rect x="146" y="112" width="34" height="15" fill="#93c5fd"/><rect x="180" y="112" width="34" height="15" fill="#f9a8d4"/><rect x="147" y="94" width="33" height="15" fill="#93c5fd"/><rect x="180" y="94" width="33" height="15" fill="#f9a8d4"/><rect x="149" y="76" width="31" height="15" fill="#93c5fd"/><rect x="180" y="76" width="31" height="15" fill="#f9a8d4"/><rect x="154" y="58" width="26" height="15" fill="#93c5fd"/><rect x="180" y="58" width="26" height="15" fill="#f9a8d4"/><rect x="165" y="40" width="15" height="15" fill="#93c5fd"/><rect x="180" y="40" width="15" height="15" fill="#f9a8d4"/><line x1="180" y1="38" x2="180" y2="145" stroke="#475569" stroke-width="1"/><text x="180" y="163" text-anchor="middle" font-size="13" font-weight="700" fill="#d97706">Stationary</text><text x="180" y="179" text-anchor="middle" font-size="11" fill="#475569">e.g. UK</text><rect x="278" y="130" width="22" height="15" fill="#93c5fd"/><rect x="300" y="130" width="22" height="15" fill="#f9a8d4"/><rect x="273" y="112" width="27" height="15" fill="#93c5fd"/><rect x="300" y="112" width="27" height="15" fill="#f9a8d4"/><rect x="269" y="94" width="31" height="15" fill="#93c5fd"/><rect x="300" y="94" width="31" height="15" fill="#f9a8d4"/><rect x="267" y="76" width="33" height="15" fill="#93c5fd"/><rect x="300" y="76" width="33" height="15" fill="#f9a8d4"/><rect x="270" y="58" width="30" height="15" fill="#93c5fd"/><rect x="300" y="58" width="30" height="15" fill="#f9a8d4"/><rect x="276" y="40" width="24" height="15" fill="#93c5fd"/><rect x="300" y="40" width="24" height="15" fill="#f9a8d4"/><line x1="300" y1="38" x2="300" y2="145" stroke="#475569" stroke-width="1"/><text x="300" y="163" text-anchor="middle" font-size="13" font-weight="700" fill="#0284c7">Constrictive</text><text x="300" y="179" text-anchor="middle" font-size="11" fill="#475569">e.g. Japan</text><text x="4" y="24" font-size="11" fill="#475569">Old ↑</text><text x="4" y="146" font-size="11" fill="#475569">Young</text><text x="180" y="18" text-anchor="middle" font-size="11" fill="#475569">blue = male · pink = female</text></svg>`,
      caption:
        "Expansive = high birth rate, short life expectancy (stage 2–3). Stationary = low birth and death rates, straight sides (stage 4). Constrictive = birth rate below replacement, many elderly (stage 5).",
    },
    {
      title: "The Demographic Transition Model",
      svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Demographic transition model: birth and death rates over five stages with total population rising then levelling off" font-family="sans-serif"><line x1="94" y1="20" x2="94" y2="150" stroke="#cbd5e1" stroke-dasharray="3 3"/><line x1="158" y1="20" x2="158" y2="150" stroke="#cbd5e1" stroke-dasharray="3 3"/><line x1="222" y1="20" x2="222" y2="150" stroke="#cbd5e1" stroke-dasharray="3 3"/><line x1="286" y1="20" x2="286" y2="150" stroke="#cbd5e1" stroke-dasharray="3 3"/><line x1="30" y1="150" x2="350" y2="150" stroke="#475569"/><line x1="30" y1="20" x2="30" y2="150" stroke="#475569"/><path d="M30,43 L38,39 L46,45 L54,47 L62,42 L70,39 L78,44 L86,47 L94,43 L158,43 Q190,62 222,110 Q254,116 286,119 Q318,125 350,129" fill="none" stroke="#e11d48" stroke-width="2.5"/><path d="M30,50 L38,41 L46,61 L54,46 L62,52 L70,62 L78,42 L86,58 L94,50 Q126,102 158,110 Q190,118 222,121 L286,119 Q318,116 350,113" fill="none" stroke="#0f172a" stroke-width="2.5"/><path d="M30,146 L94,145 Q126,132 158,96 Q190,56 222,40 Q254,34 286,33 Q318,37 350,45" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="6 3"/><text x="62" y="164" text-anchor="middle" font-size="11" fill="#334155">Stage 1</text><text x="126" y="164" text-anchor="middle" font-size="11" fill="#334155">Stage 2</text><text x="190" y="164" text-anchor="middle" font-size="11" fill="#334155">Stage 3</text><text x="254" y="164" text-anchor="middle" font-size="11" fill="#334155">Stage 4</text><text x="318" y="164" text-anchor="middle" font-size="11" fill="#334155">Stage 5</text><text x="26" y="14" font-size="11" fill="#64748b">per 1000</text><rect x="30" y="181" width="12" height="4" fill="#e11d48"/><text x="46" y="187" font-size="11" fill="#334155">Birth rate</text><rect x="120" y="181" width="12" height="4" fill="#0f172a"/><text x="136" y="187" font-size="11" fill="#334155">Death rate</text><rect x="212" y="181" width="12" height="4" fill="#7c3aed"/><text x="228" y="187" font-size="11" fill="#334155">Total population</text></svg>`,
      caption:
        "Death rate falls first (stage 2), then birth rate follows (stage 3). The gap between the lines is natural increase — that is when total population rises fastest. Idealised model: migration is ignored.",
    },
  ],
  interactives: ["demography:PyramidExplorer", "demography:DTMExplorer"],
};
