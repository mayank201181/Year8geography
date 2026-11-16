import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Singapore's resident fertility rate is about 0.97 children per woman (2023) — less than half what a population needs to replace itself. So how did Singapore's population still grow to about 6 million? The answer is the other half of the population-change equation: migration.",

  didYouKnow: [
    "Smallpox is the only human disease ever wiped out. The World Health Organization declared it eradicated in 1980 — vaccination did it.",
    "South Korea's total fertility rate was about 0.72 in 2023, the lowest of any country in the world.",
    "About 281 million people — roughly 1 in every 30 people on Earth — were living outside the country they were born in (2020, UN estimate).",
    "More than 120 million people worldwide had been forced from their homes by conflict, violence or persecution by 2024 (UNHCR). Most of them are internally displaced — still inside their own country.",
    "Roughly 3 in every 10 people living in Singapore are non-residents: foreign workers, students and their families (2024).",
    "Global life expectancy has more than doubled since 1900, from roughly 32 years to about 73 today — mostly thanks to vaccines, clean water and better food.",
  ],

  activities: [
    {
      title: "Family migration detective",
      emoji: "🧳",
      materials: ["A notebook or phone", "A printed or online world map", "Coloured pens or map pins", "A parent, grandparent or older relative to interview"],
      steps: [
        "Interview an older relative: where were they born, and where were their parents and grandparents born?",
        "Mark each birthplace on the map and draw an arrow for every move your family made (city to city, or country to country).",
        "For each move, ask WHY. Write the reasons on sticky notes and sort them into push factors (problems at the old place), pull factors (attractions of the new place) and obstacles (what made moving hard).",
        "Label each move: internal or international? Voluntary or forced?",
        "Finish with a judgement: across your family's moves, were push factors or pull factors more important?",
      ],
      maths: "You are applying Lee's push–pull model to real people. Most family histories show that migration is rarely about one reason: jobs and family networks (pull) often combine with limited opportunities at home (push), and obstacles such as cost, visas or language decide when — or whether — people actually move. Classifying each move also practises the key migration terms you need for exams.",
    },
    {
      title: "Bean-jar population simulator",
      emoji: "🫘",
      materials: ["A jar and about 300 dried beans (or rice grains, buttons or paper clips)", "Two dice", "Paper for a results table", "Graph paper or a spreadsheet"],
      steps: [
        "Put 100 beans in the jar — this is your starting population.",
        "Each 'year': roll one die and ADD that many beans (births). Roll it again and REMOVE that many (deaths). Then roll the second die for migration: on 1–3 add that many beans (immigrants), on 4–6 remove (number − 3) beans (emigrants).",
        "Record births, deaths, immigrants, emigrants and the new total in a table. Play 15 years.",
        "Now change the rules to model a different country: e.g. births = two dice, deaths = one die (a youthful country), or births = half a die rounded down (an ageing country). Play again.",
        "Plot both populations on one line graph and compare them.",
      ],
      maths: "Each year you are using population change = (births − deaths) + (immigrants − emigrants). Tracking natural change and net migration separately lets you see which one drives the total — high-birth-rate rules make natural increase dominate (like Niger), while low-birth-rate rules make the population depend on migration (like Singapore or Japan). The dice show that real rates vary randomly from year to year, but the long-run trend follows the average rates.",
    },
  ],

  bonusDiagrams: [
    {
      title: "The population 'bathtub'",
      caption: "A population is like water in a bath: births and immigrants flow in, deaths and emigrants drain out. The level rises only if the inflows are bigger than the outflows.",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bathtub diagram: two taps labelled births and immigration pour water into a bath labelled population; two drains labelled deaths and emigration let water out.">
  <rect x="0" y="0" width="480" height="300" fill="#ffffff"/>
  <text x="240" y="22" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1f2937">Population change = (births − deaths) + (immigrants − emigrants)</text>
  <path d="M110 70 h40 v20 h-10 v12" fill="none" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <path d="M330 70 h40 v20 h-10 v12" fill="none" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <rect x="134" y="106" width="8" height="64" fill="#38bdf8"/>
  <rect x="354" y="106" width="8" height="64" fill="#38bdf8"/>
  <text x="110" y="60" font-family="sans-serif" font-size="13" fill="#15803d" font-weight="bold">BIRTHS in</text>
  <text x="312" y="60" font-family="sans-serif" font-size="13" fill="#15803d" font-weight="bold">IMMIGRANTS in</text>
  <path d="M70 120 L90 230 Q95 245 115 245 L365 245 Q385 245 390 230 L410 120" fill="#e0f2fe" stroke="#1f2937" stroke-width="3"/>
  <path d="M78 165 L402 165 L392 228 Q388 240 370 240 L110 240 Q92 240 88 228 Z" fill="#bae6fd"/>
  <text x="240" y="205" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="#1f2937">POPULATION</text>
  <rect x="150" y="245" width="14" height="22" fill="#334155"/>
  <rect x="316" y="245" width="14" height="22" fill="#334155"/>
  <path d="M157 267 v18" stroke="#38bdf8" stroke-width="6"/>
  <path d="M323 267 v18" stroke="#38bdf8" stroke-width="6"/>
  <text x="172" y="285" font-family="sans-serif" font-size="13" fill="#c2410c" font-weight="bold">DEATHS out</text>
  <text x="338" y="285" font-family="sans-serif" font-size="13" fill="#c2410c" font-weight="bold">EMIGRANTS out</text>
  <text x="20" y="110" font-family="sans-serif" font-size="11" fill="#334155">natural</text>
  <text x="20" y="124" font-family="sans-serif" font-size="11" fill="#334155">change</text>
  <text x="420" y="110" font-family="sans-serif" font-size="11" fill="#334155">net</text>
  <text x="420" y="124" font-family="sans-serif" font-size="11" fill="#334155">migration</text>
</svg>`,
    },
    {
      title: "Lee's push–pull model (1966)",
      caption: "Every place has pluses (+) that attract or hold people and minuses (−) that push them away. Between origin and destination lie intervening obstacles — distance, cost, visas, language — that a migrant must overcome.",
      svg: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lee's migration model: an origin circle and a destination circle, each containing plus and minus signs, with a row of obstacle bars between them and an arrow from origin to destination.">
  <rect x="0" y="0" width="480" height="280" fill="#ffffff"/>
  <circle cx="100" cy="135" r="80" fill="#fecaca" stroke="#1f2937" stroke-width="2"/>
  <circle cx="380" cy="135" r="80" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/>
  <text x="100" y="40" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1f2937">ORIGIN</text>
  <text x="380" y="40" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1f2937">DESTINATION</text>
  <g font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">
    <text x="70" y="105" fill="#c2410c">−</text><text x="110" y="95" fill="#c2410c">−</text><text x="140" y="130" fill="#c2410c">−</text>
    <text x="75" y="150" fill="#c2410c">−</text><text x="115" y="175" fill="#15803d">+</text><text x="85" y="195" fill="#c2410c">−</text>
    <text x="350" y="105" fill="#15803d">+</text><text x="395" y="95" fill="#15803d">+</text><text x="420" y="135" fill="#15803d">+</text>
    <text x="355" y="155" fill="#c2410c">−</text><text x="395" y="180" fill="#15803d">+</text><text x="365" y="195" fill="#15803d">+</text>
  </g>
  <rect x="215" y="85" width="12" height="100" fill="#d6d3d1" stroke="#334155"/>
  <rect x="235" y="85" width="12" height="100" fill="#d6d3d1" stroke="#334155"/>
  <rect x="255" y="85" width="12" height="100" fill="#d6d3d1" stroke="#334155"/>
  <path d="M170 215 Q240 255 310 215" fill="none" stroke="#4f46e5" stroke-width="4"/>
  <polygon points="310,215 296,214 304,226" fill="#4f46e5"/>
  <text x="241" y="75" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1f2937">intervening obstacles</text>
  <text x="240" y="268" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#4f46e5">migration</text>
  <text x="100" y="235" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#334155">mostly − : push factors</text>
  <text x="380" y="235" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#334155">mostly + : pull factors</text>
</svg>`,
    },
  ],

  history: {
    title: "John Graunt and the Bills of Mortality",
    story: "In 1662 a London haberdasher named John Graunt published a small book with a big idea. For decades, London parishes had printed weekly 'Bills of Mortality' listing burials and christenings. Graunt was the first to treat them as data. He counted and compared, and found patterns nobody had noticed: slightly more boys were born than girls, and some causes of death were remarkably steady from year to year. Most strikingly, London recorded more burials than christenings — so the city could only have grown because people kept moving in from the countryside. In other words, Graunt spotted that migration, not natural increase, was driving London's growth. He even estimated the city's population. His work earned him a place in the new Royal Society, and he is often called the founder of demography.",
  },
};
