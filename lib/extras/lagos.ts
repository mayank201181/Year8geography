import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Lagos State is the smallest of Nigeria's 36 states by area — yet so many people live there that nobody agrees on the number (estimates range from about 15 to over 20 million). Why would millions of people choose to move somewhere so crowded?",
  didYouKnow: [
    "The name **Lagos** comes from the Portuguese word for \"lakes\", given by Portuguese sailors in the 1400s. In Yoruba the city is called **Èkó** — which is where the name Eko Atlantic comes from.",
    "Lagos was Nigeria's capital from independence in 1960 until 1991, when the government moved to **Abuja**, a new city built in the centre of the country. Lagos stayed the country's business and cultural heart.",
    "The **Third Mainland Bridge**, opened in 1990, is about 12 km long — one of the longest bridges in Africa. It carries commuters across the Lagos Lagoon from the mainland to Lagos Island.",
    "**Eko Atlantic** is being built on land reclaimed from the Atlantic using sand dredged from the seabed — the same technique that has made Singapore about a quarter bigger since the 1960s. A sea wall of huge concrete blocks, nicknamed the \"Great Wall of Lagos\", protects it from storm waves.",
    "**Makoko** began as a fishing village on the lagoon. Its homes stand on wooden stilts and its 'streets' are water channels, so children paddle canoes to school.",
    "**Nollywood**, Nigeria's film industry centred on Lagos, is one of the biggest in the world by number of films made — many shot in just days on small budgets.",
  ],
  activities: [
    {
      title: "Family commute survey: MRT vs go-slow",
      emoji: "🚇",
      materials: ["A notebook or spreadsheet", "A phone map app (for distances)", "Your family's usual journeys to school or work"],
      steps: [
        "List each family member's usual one-way journey: where from, where to, and the mode (MRT, bus, car, walking, cycling).",
        "Use a map app to find each distance in km, and ask (or time) how many minutes each trip really takes, door to door.",
        "Work out each average speed: distance × 60 ÷ minutes = km/h.",
        "Now imagine the same distance in a Lagos go-slow at about 8 km/h. How many minutes would each trip take? How many extra hours a week is that for the whole family?",
        "Discuss: which parts of Singapore's transport system (MRT on its own tracks, bus lanes, road pricing) stop jams from building up — and which of these is Lagos now copying?",
      ],
      maths:
        "Congestion is really a speed problem: when too many vehicles share road space, average speed collapses and journey time rises sharply. Transport that has its own track or lane (MRT, BRT, the Lagos Blue and Red Lines) keeps its speed whatever the traffic, which is why cities from Singapore to Lagos invest in mass transit rather than just more roads.",
    },
    {
      title: "Push–pull interview: why did we move?",
      emoji: "🧳",
      materials: ["Sticky notes in three colours", "A large sheet of paper", "A relative, neighbour or family friend who has moved city or country"],
      steps: [
        "Interview someone who has moved — perhaps a grandparent who came to Singapore, or a family friend who moved for work. Ask: what made you want to leave? What attracted you here? What nearly stopped you?",
        "Write each reason on a sticky note: one colour for push factors (problems at the old home), one for pull factors (attractions of the new place), one for obstacles (cost, family, distance, paperwork).",
        "Draw a big balance on the paper. Stick 'reasons to move' (push + pull) on one side and obstacles on the other. Ask your interviewee to rank how important each was.",
        "Compare their story with a migrant moving from rural Nigeria to Lagos. Which reasons are the same everywhere? Which are different?",
      ],
      maths:
        "Geographers explain migration with push factors, pull factors and intervening obstacles. Almost every move has a mix of all three, and the balance — not any single reason — decides whether someone goes. Collecting first-hand stories (qualitative data) is real fieldwork: it shows the human side behind migration statistics.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Sketch map of central Lagos",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic sketch map of central Lagos showing the mainland to the north and west, the Lagos Lagoon in the centre and east, Lagos Island and Victoria Island at the lagoon mouth, the Atlantic Ocean to the south, Eko Atlantic on reclaimed land, the Third Mainland Bridge, Makoko, Apapa port, Olusosun dump and the Blue Line rail">
<rect x="0" y="0" width="480" height="300" fill="#bbf7d0"/>
<path d="M0 252 L120 248 L200 246 L260 250 L340 246 L480 240 L480 300 L0 300 Z" fill="#bae6fd" stroke="#334155" stroke-width="1.2"/>
<path d="M222 60 C280 50 360 56 470 64 L470 206 C400 204 330 206 280 200 L250 196 C232 190 222 178 220 160 C218 120 218 90 222 60 Z" fill="#bae6fd" stroke="#334155" stroke-width="1.2"/>
<path d="M160 200 C190 192 220 192 250 196 L262 246 L200 246 C185 230 170 215 160 200 Z" fill="#bae6fd" stroke="#334155" stroke-width="1.2"/>
<ellipse cx="236" cy="208" rx="20" ry="9" fill="#e5e7eb" stroke="#334155" stroke-width="1.2"/>
<path d="M266 212 L480 208 L480 238 L340 244 L268 244 Z" fill="#e5e7eb" stroke="#334155" stroke-width="1.2"/>
<rect x="280" y="246" width="54" height="16" fill="#fde68a" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/>
<line x1="236" y1="200" x2="232" y2="70" stroke="#92400e" stroke-width="3" stroke-dasharray="6 3"/>
<path d="M226 212 L160 214 L60 222" fill="none" stroke="#2563eb" stroke-width="3"/>
<circle cx="60" cy="222" r="4" fill="#2563eb"/>
<circle cx="224" cy="170" r="4" fill="#dc2626"/>
<circle cx="140" cy="96" r="5" fill="#78716c"/>
<rect x="46" y="236" width="10" height="8" fill="#334155"/>
<g font-family="sans-serif" fill="#1f2937">
<text x="60" y="40" font-size="13" font-weight="bold">MAINLAND</text>
<text x="70" y="64" font-size="11">Ikeja (airport) to the north</text>
<text x="132" y="100" font-size="11" text-anchor="end">Olusosun dump</text>
<text x="330" y="130" font-size="13" font-weight="bold">Lagos Lagoon</text>
<text x="146" y="174" font-size="11">Makoko</text>
<text x="242" y="120" font-size="11">Third Mainland</text>
<text x="242" y="133" font-size="11">Bridge</text>
<text x="190" y="190" font-size="10">Lagos Island</text>
<text x="300" y="226" font-size="11">Victoria Island</text>
<text x="400" y="226" font-size="11">Lekki →</text>
<text x="340" y="259" font-size="11">Eko Atlantic (reclaimed)</text>
<text x="60" y="244" font-size="11">Apapa port</text>
<text x="40" y="210" font-size="11" fill="#1d4ed8">Mile 2</text>
<text x="96" y="208" font-size="10" fill="#1d4ed8">Blue Line rail</text>
<text x="160" y="285" font-size="13" font-weight="bold">ATLANTIC OCEAN</text>
<text x="452" y="30" font-size="12" font-weight="bold">N</text>
<line x1="456" y1="54" x2="456" y2="34" stroke="#1f2937" stroke-width="2"/>
<polygon points="456,30 451,40 461,40" fill="#1f2937"/>
<text x="8" y="294" font-size="10">Schematic, not to scale</text>
</g>
</svg>`,
      caption:
        "Lagos grew outwards from Lagos Island at the mouth of the lagoon. The wealthy business districts (Lagos Island, Victoria Island, Eko Atlantic) sit on the islands and coast; most people live on the crowded mainland and commute across bridges like the Third Mainland Bridge — which is why the go-slow is so bad.",
    },
    {
      title: "Why Lagos keeps growing",
      svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram: push factors in rural Nigeria and pull factors in Lagos drive rural-urban migration past obstacles; together with natural increase this makes Lagos grow">
<rect x="0" y="0" width="480" height="260" fill="#ffffff"/>
<g font-family="sans-serif" fill="#1f2937">
<rect x="10" y="20" width="150" height="130" rx="8" fill="#fecaca" stroke="#334155"/>
<text x="85" y="40" font-size="13" font-weight="bold" text-anchor="middle">Rural Nigeria</text>
<text x="85" y="56" font-size="11" text-anchor="middle">PUSH factors</text>
<text x="20" y="78" font-size="11">• drought, poor harvests</text>
<text x="20" y="96" font-size="11">• conflict in the north</text>
<text x="20" y="114" font-size="11">• few jobs or services</text>
<text x="20" y="132" font-size="11">• low farm incomes</text>
<rect x="320" y="20" width="150" height="130" rx="8" fill="#bbf7d0" stroke="#334155"/>
<text x="395" y="40" font-size="13" font-weight="bold" text-anchor="middle">Lagos</text>
<text x="395" y="56" font-size="11" text-anchor="middle">PULL factors</text>
<text x="330" y="78" font-size="11">• jobs, higher wages</text>
<text x="330" y="96" font-size="11">• schools, universities</text>
<text x="330" y="114" font-size="11">• hospitals</text>
<text x="330" y="132" font-size="11">• family, bright lights</text>
<line x1="165" y1="85" x2="308" y2="85" stroke="#1f2937" stroke-width="3"/>
<polygon points="316,85 304,79 304,91" fill="#1f2937"/>
<text x="240" y="76" font-size="11" text-anchor="middle">rural–urban migration</text>
<rect x="180" y="100" width="120" height="44" rx="6" fill="#e5e7eb" stroke="#334155" stroke-dasharray="4 3"/>
<text x="240" y="118" font-size="11" text-anchor="middle">obstacles: cost,</text>
<text x="240" y="134" font-size="11" text-anchor="middle">family ties, distance</text>
<rect x="320" y="175" width="150" height="40" rx="8" fill="#c7d2fe" stroke="#334155"/>
<text x="395" y="192" font-size="11" text-anchor="middle">natural increase</text>
<text x="395" y="207" font-size="11" text-anchor="middle">(migrants&#39; children)</text>
<rect x="60" y="180" width="200" height="56" rx="8" fill="#fde68a" stroke="#334155"/>
<text x="160" y="203" font-size="13" font-weight="bold" text-anchor="middle">Lagos grows fast</text>
<text x="160" y="222" font-size="11" text-anchor="middle">migration + natural increase</text>
<line x1="395" y1="150" x2="395" y2="170" stroke="#1f2937" stroke-width="2"/>
<polygon points="395,175 390,166 400,166" fill="#1f2937"/>
<line x1="318" y1="200" x2="270" y2="205" stroke="#1f2937" stroke-width="2"/>
<polygon points="262,206 272,200 272,211" fill="#1f2937"/>
</g>
</svg>`,
      caption:
        "Two engines drive Lagos's growth. Migration brings mostly young adults; because they are young, they also raise the city's birth rate — so migration feeds natural increase too.",
    },
  ],
  history: {
    title: "The capital that moved away",
    story:
      "In 1975 Nigeria's government asked a panel a bold question: should Lagos stay the capital? Lagos was already crowded and congested, squeezed between lagoon and ocean, and sat in the far south-west of a huge, diverse country. The panel recommended building a brand-new capital near the centre of Nigeria, on land not dominated by any one of the largest ethnic groups. In 1976 the Federal Capital Territory was created and work began on **Abuja**, a planned city with wide roads and space to grow. In December 1991 the government officially moved there. Yet Lagos did not shrink. The port, banks, markets, music and film stayed — and so did the jobs. Losing the title of capital barely slowed the flow of migrants, a reminder that cities grow where economic opportunity is, not just where governments sit.",
  },
};
