import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Egypt has over 100 million people, yet if you flew across it you would see almost nobody — about 95% of Egyptians live on roughly 5% of the land. Where are they all hiding, and why?",
  didYouKnow: [
    "About 59% of the world's people live in Asia — more than in every other continent put together.",
    "Nearly 90% of all people live in the Northern Hemisphere, because that is where most of the world's land is.",
    "Mongolia has only about 2 people per km², while Singapore has about 8,000 per km² — roughly 4,000 times as crowded.",
    "Roughly three in four Canadians live within about 160 km of the border with the USA, where the climate is mildest.",
    "Antarctica has no permanent population at all: only scientists and support staff, a few thousand in summer and around 1,000 through the winter.",
    "Singapore has grown from about 580 km² in the 1960s to about 735 km² today, mostly through land reclamation — new land for homes, the port and Changi Airport.",
  ],
  activities: [
    {
      title: "Rice-grain density squares",
      emoji: "🍚",
      materials: ["Uncooked rice or lentils", "Squared paper (1 cm squares)", "A ruler and pencil", "A calculator"],
      steps: [
        "Draw three 5 cm × 5 cm squares and label them Singapore, United Kingdom and Australia.",
        "Let each grain stand for 400 people and each 1 cm square stand for 1 km². That makes each big square 25 km².",
        "Singapore has about 8,000 people per km², so it needs 8,000 × 25 ÷ 400 = 500 grains. The UK (about 280 per km²) needs about 18 grains. Australia (about 3.5 per km²) needs… less than one grain!",
        "Count the grains into each square (weigh 500 grains instead of counting, if you like). Photograph the three squares side by side.",
        "Now pour Australia's grains into one corner of a large map of Australia — the south-east coast. Notice how an average hides where people really are.",
      ],
      maths: "Population density is just population ÷ area, but seeing it makes the difference real: the same-sized square can be crowded or almost empty. The final step shows the difference between **density** (a single average number) and **distribution** (the pattern of where people actually live) — Australia's density is tiny, yet its south-east coast has big, busy cities.",
    },
    {
      title: "How dense is my HDB block?",
      emoji: "🏢",
      materials: ["A notebook", "Your phone's map app (to measure an area)", "A calculator"],
      steps: [
        "Pick your block (or a friend's). Count the floors and the number of flats on one floor (look at the letterboxes or the lift lobby).",
        "Total flats = floors × flats per floor. Estimate the people: Singapore households average about 3 people, so people ≈ flats × 3.",
        "Use the map app's measure tool to find the area of the block plus its car park and green space, in m². Convert to km² by dividing by 1,000,000.",
        "Work out the density: people ÷ area in km². Compare it with Singapore's average of about 8,000 per km², then with a landed-housing estate nearby.",
        "Explain the difference using human factors: land shortage, government planning (HDB), and the MRT station nearby.",
      ],
      maths: "This is population density at the **local** scale. High-rise housing lets a small area hold many people — a human solution to Singapore's shortage of land. Your result will be far above the national average, because the national figure includes reservoirs, nature reserves, the port and the airport where almost nobody lives.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Egypt: a ribbon of people in the desert",
      caption: "Simplified sketch map (not to scale). Roughly 95% of Egyptians live along the Nile valley and delta — about 5% of the land. The river brings water and fertile silt through the desert; the Western and Eastern Deserts either side are almost empty.",
      svg: `<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map of Egypt showing a narrow green strip of dense population along the River Nile and a dense delta in the north, with empty desert to the west and east">
<rect x="0" y="0" width="360" height="300" fill="#ffffff"/>
<rect x="0" y="0" width="360" height="40" fill="#bae6fd"/>
<text x="110" y="24" font-size="12" font-family="sans-serif" fill="#1f2937">Mediterranean Sea</text>
<polygon points="0,40 360,40 360,90 310,90 255,300 0,300" fill="#fde68a" stroke="#334155" stroke-width="1"/>
<polygon points="310,90 360,90 360,300 255,300" fill="#bae6fd"/>
<text x="318" y="230" font-size="12" font-family="sans-serif" fill="#1f2937" transform="rotate(-75 318 230)">Red Sea</text>
<polygon points="140,40 240,40 196,108 186,108" fill="#bbf7d0" stroke="#334155" stroke-width="1"/>
<path d="M 186 108 L 182 150 L 194 200 L 200 240 L 210 280 L 222 280 L 212 240 L 206 200 L 194 150 L 196 108 Z" fill="#bbf7d0" stroke="#334155" stroke-width="1"/>
<path d="M 191 108 L 188 150 L 200 200 L 206 240 L 216 280" fill="none" stroke="#0369a1" stroke-width="2.5"/>
<path d="M 191 108 L 160 42 M 191 108 L 222 42" fill="none" stroke="#0369a1" stroke-width="1.5"/>
<circle cx="165" cy="52" r="2.5" fill="#1f2937"/><circle cx="178" cy="50" r="2.5" fill="#1f2937"/><circle cx="192" cy="54" r="2.5" fill="#1f2937"/><circle cx="206" cy="50" r="2.5" fill="#1f2937"/><circle cx="220" cy="52" r="2.5" fill="#1f2937"/>
<circle cx="172" cy="64" r="2.5" fill="#1f2937"/><circle cx="186" cy="66" r="2.5" fill="#1f2937"/><circle cx="199" cy="64" r="2.5" fill="#1f2937"/><circle cx="212" cy="62" r="2.5" fill="#1f2937"/>
<circle cx="182" cy="78" r="2.5" fill="#1f2937"/><circle cx="194" cy="80" r="2.5" fill="#1f2937"/><circle cx="204" cy="76" r="2.5" fill="#1f2937"/><circle cx="190" cy="92" r="2.5" fill="#1f2937"/>
<circle cx="191" cy="108" r="5" fill="#c2410c" stroke="#1f2937" stroke-width="1"/>
<circle cx="186" cy="128" r="2.5" fill="#1f2937"/><circle cx="187" cy="150" r="2.5" fill="#1f2937"/><circle cx="194" cy="172" r="2.5" fill="#1f2937"/><circle cx="200" cy="196" r="2.5" fill="#1f2937"/><circle cx="204" cy="220" r="2.5" fill="#1f2937"/><circle cx="208" cy="244" r="2.5" fill="#1f2937"/><circle cx="214" cy="266" r="2.5" fill="#1f2937"/>
<text x="140" y="112" font-size="12" font-family="sans-serif" fill="#1f2937">Cairo</text>
<text x="244" y="66" font-size="11" font-family="sans-serif" fill="#1f2937">Nile Delta</text>
<text x="222" y="172" font-size="11" font-family="sans-serif" fill="#0369a1">River Nile</text>
<text x="170" y="286" font-size="11" font-family="sans-serif" fill="#1f2937">Aswan</text>
<text x="30" y="180" font-size="13" font-family="sans-serif" fill="#334155">Western Desert</text>
<text x="40" y="198" font-size="11" font-family="sans-serif" fill="#334155">almost empty</text>
<text x="206" y="128" font-size="11" font-family="sans-serif" fill="#334155">Eastern Desert</text>
<rect x="12" y="234" width="12" height="12" fill="#bbf7d0" stroke="#334155" stroke-width="1"/>
<text x="30" y="244" font-size="11" font-family="sans-serif" fill="#1f2937">farmland: about 5% of land</text>
<circle cx="18" cy="262" r="2.5" fill="#1f2937"/>
<text x="30" y="266" font-size="11" font-family="sans-serif" fill="#1f2937">many people</text>
<text x="12" y="288" font-size="11" font-family="sans-serif" fill="#1f2937">N ↑   Not to scale</text>
</svg>`,
    },
    {
      title: "Positive and negative factors",
      caption: "Physical factors (green) come from nature; human factors (purple) come from people. A place becomes densely populated when the positive factors outweigh the negative ones — and technology can shift the balance.",
      svg: `<svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-column diagram: factors that attract people on the left, factors that discourage people on the right, each split into physical and human">
<rect x="0" y="0" width="440" height="280" fill="#ffffff"/>
<text x="110" y="22" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">Attract people (+)</text>
<text x="330" y="22" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">Discourage people (−)</text>
<line x1="220" y1="8" x2="220" y2="272" stroke="#334155" stroke-width="1.5"/>
<rect x="12" y="34" width="196" height="112" rx="8" fill="#bbf7d0" stroke="#334155" stroke-width="1"/>
<text x="22" y="54" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1f2937">Physical</text>
<text x="22" y="74" font-size="12" font-family="sans-serif" fill="#1f2937">• flat, low land</text>
<text x="22" y="92" font-size="12" font-family="sans-serif" fill="#1f2937">• mild climate</text>
<text x="22" y="110" font-size="12" font-family="sans-serif" fill="#1f2937">• reliable fresh water</text>
<text x="22" y="128" font-size="12" font-family="sans-serif" fill="#1f2937">• fertile soil, resources</text>
<rect x="12" y="156" width="196" height="112" rx="8" fill="#c7d2fe" stroke="#334155" stroke-width="1"/>
<text x="22" y="176" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1f2937">Human</text>
<text x="22" y="196" font-size="12" font-family="sans-serif" fill="#1f2937">• plenty of jobs</text>
<text x="22" y="214" font-size="12" font-family="sans-serif" fill="#1f2937">• good transport links</text>
<text x="22" y="232" font-size="12" font-family="sans-serif" fill="#1f2937">• schools, hospitals</text>
<text x="22" y="250" font-size="12" font-family="sans-serif" fill="#1f2937">• peace, good planning</text>
<rect x="232" y="34" width="196" height="112" rx="8" fill="#bbf7d0" stroke="#334155" stroke-width="1"/>
<text x="242" y="54" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1f2937">Physical</text>
<text x="242" y="74" font-size="12" font-family="sans-serif" fill="#1f2937">• steep mountains</text>
<text x="242" y="92" font-size="12" font-family="sans-serif" fill="#1f2937">• too hot, dry or cold</text>
<text x="242" y="110" font-size="12" font-family="sans-serif" fill="#1f2937">• little fresh water</text>
<text x="242" y="128" font-size="12" font-family="sans-serif" fill="#1f2937">• poor soil, hazards</text>
<rect x="232" y="156" width="196" height="112" rx="8" fill="#c7d2fe" stroke="#334155" stroke-width="1"/>
<text x="242" y="176" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1f2937">Human</text>
<text x="242" y="196" font-size="12" font-family="sans-serif" fill="#1f2937">• few jobs</text>
<text x="242" y="214" font-size="12" font-family="sans-serif" fill="#1f2937">• remote, few roads</text>
<text x="242" y="232" font-size="12" font-family="sans-serif" fill="#1f2937">• few services</text>
<text x="242" y="250" font-size="12" font-family="sans-serif" fill="#1f2937">• war or conflict</text>
</svg>`,
    },
  ],
  history: {
    title: "Brasília: building a capital to move a country",
    story: "For centuries almost all Brazilians lived near the Atlantic coast, where the Portuguese had first settled, while the vast interior stayed nearly empty. In the 1950s President Juscelino Kubitschek decided to change that pattern on purpose. He ordered a brand-new capital to be built on a high, empty plateau in the middle of the country. The planner Lúcio Costa laid out the city in a shape often compared to an aeroplane, and the architect Oscar Niemeyer designed its striking modern buildings. Thousands of workers built it in under four years, and Brasília became the capital on 21 April 1960. Today its metropolitan area has several million people — a reminder that government planning, a human factor, can reshape where people live, although most Brazilians still live near the coast.",
  },
};
