import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Singapore has almost no rivers, no lakes and no underground water — yet its taps never run dry. Meanwhile Las Vegas, in one of the driest deserts in North America, is home to more than two million people. How can a city survive where nature says it shouldn't — and can it last?",

  didYouKnow: [
    "Singapore ran the world's first congestion-charging scheme: from 1975, drivers had to buy a paper licence to enter the city centre at busy times. Electronic Road Pricing (ERP) replaced it in 1998.",
    "Most NEWater is not drunk at all — it is so pure that it is mainly piped to wafer-fabrication plants, factories and air-conditioning cooling towers. A small amount is added to reservoirs to top up drinking water.",
    "In 2022 Lake Mead, which supplies about 90% of Las Vegas's water, fell to its lowest level since it was first filled in the 1930s. Sunken boats that had been underwater for decades appeared on the shore.",
    "Humanity as a whole uses natural resources about as fast as 1.7 Earths could renew them (Global Footprint Network estimate) — that is why Earth Overshoot Day falls months before the end of the year.",
    "Curitiba in Brazil couldn't afford an underground railway, so in 1974 it gave buses their own lanes and later added tube-shaped stations where people pay before boarding. The idea, bus rapid transit (BRT), has since been copied by cities around the world.",
    "Tengah, HDB's 'forest town', is the first HDB town planned with a centralised cooling system, and its town centre puts roads underground so the surface is left for people on foot and on bikes.",
  ],

  activities: [
    {
      title: "Family water audit",
      emoji: "🚿",
      materials: ["Your home's water meter (or a recent PUB/SP utilities bill)", "Notebook or phone", "Calculator", "A 1-litre jug and a timer"],
      steps: [
        "Ask an adult to show you the water meter. Write down the reading (in m³) at the same time each day for a week. If you can't reach the meter, use the water figure on a monthly bill instead.",
        "Work out how much water the household used in the week: last reading − first reading. Change m³ to litres (1 m³ = 1,000 litres).",
        "Divide by the number of people and then by 7 to get litres per person per day. Compare it with Singapore's 2030 target of 130 litres.",
        "Time how long your shower runs, then use the jug and timer to find how many litres per minute the shower gives. How much water does one shower use?",
        "Choose two changes (e.g. a 5-minute shower timer, turning the tap off while brushing teeth, running the washing machine only when full). Repeat the audit for a second week and calculate the percentage saving.",
      ],
      maths:
        "This is exactly the data PUB uses to plan Singapore's water supply. Demand per person, multiplied by about 6 million people, sets how much the Four National Taps must deliver every day. Cutting demand is the cheapest 'fifth tap': every litre not used is a litre that doesn't need to be collected, imported, recycled or desalinated — saving energy and money as well as water.",
    },
    {
      title: "Sustainability audit of your neighbourhood",
      emoji: "🗺️",
      materials: ["A printed map of your estate or a screenshot from a map app", "Coloured pens (three colours)", "Clipboard or phone notes", "An adult to walk with you"],
      steps: [
        "Walk a loop of about 1 km around where you live (an HDB estate, condo area or town centre).",
        "Mark on the map anything that helps SOCIAL sustainability (e.g. playgrounds, clinics, community centres, ramps) in one colour, ECONOMIC (shops, hawker centres, offices, markets) in a second and ENVIRONMENTAL (recycling bins, park connectors, solar panels on HDB roofs, trees, rain gardens) in the third.",
        "Note the problems too: busy roads with no crossing, empty plots, litter, places with no shade.",
        "Give each pillar a score out of 10 and justify each score with at least two pieces of evidence from your map.",
        "Suggest ONE improvement for your weakest pillar, say who would pay for it and who would benefit — then present your idea as a mini eco-city competition pitch.",
      ],
      maths:
        "This is fieldwork: collecting primary data, mapping it and using it to judge a place against criteria. Using the three pillars (social, economic, environmental) stops you judging a place only on how green it looks — a truly sustainable neighbourhood has to work for people and for the economy too.",
    },
  ],

  bonusDiagrams: [
    {
      title: "The three pillars of sustainability",
      caption:
        "A sustainable city sits where all three circles overlap. A plan that is good for the economy but bad for people or nature (for example luxury towers on a wetland) falls outside the centre.",
      svg: `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram of three overlapping circles labelled social, economic and environmental, with sustainable city in the centre where all three overlap">
<rect x="0" y="0" width="420" height="300" fill="#ffffff"/>
<circle cx="160" cy="105" r="82" fill="#c7d2fe" fill-opacity="0.75" stroke="#334155" stroke-width="2"/>
<circle cx="260" cy="105" r="82" fill="#fde68a" fill-opacity="0.75" stroke="#334155" stroke-width="2"/>
<circle cx="210" cy="185" r="82" fill="#bbf7d0" fill-opacity="0.75" stroke="#334155" stroke-width="2"/>
<text x="120" y="80" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">SOCIAL</text>
<text x="120" y="98" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">homes, health,</text>
<text x="120" y="112" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">safety, community</text>
<text x="300" y="80" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">ECONOMIC</text>
<text x="300" y="98" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">jobs, income,</text>
<text x="300" y="112" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">affordable costs</text>
<text x="210" y="226" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">ENVIRONMENTAL</text>
<text x="210" y="242" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">clean air and water,</text>
<text x="210" y="256" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">energy, waste, wildlife</text>
<text x="210" y="134" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">SUSTAINABLE</text>
<text x="210" y="148" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">CITY</text>
</svg>`,
    },
    {
      title: "Singapore's water loop: the Four National Taps",
      caption:
        "Rain and imported water feed the reservoirs; used water is collected through the Deep Tunnel Sewerage System, cleaned and partly turned into NEWater; desalination adds water from the sea. Two taps depend on rain — two are weather-proof.",
      svg: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram of Singapore's water loop. Local catchment rain and imported water from Johor flow to reservoirs and waterworks, then to homes and industry. Used water goes to water reclamation plants, then NEWater factories which supply industry and top up reservoirs. Desalination plants turn seawater into drinking water.">
<rect x="0" y="0" width="460" height="300" fill="#ffffff"/>
<defs><marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#334155"/></marker></defs>
<rect x="10" y="20" width="120" height="44" rx="8" fill="#bae6fd" stroke="#334155"/>
<text x="70" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">1 Local catchment</text>
<text x="70" y="54" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">rain → drains</text>
<rect x="10" y="84" width="120" height="44" rx="8" fill="#bbf7d0" stroke="#334155"/>
<text x="70" y="102" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">2 Imported water</text>
<text x="70" y="118" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Johor, Malaysia</text>
<rect x="170" y="50" width="120" height="44" rx="8" fill="#e0f2fe" stroke="#334155"/>
<text x="230" y="68" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Reservoirs and</text>
<text x="230" y="84" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">waterworks</text>
<rect x="330" y="110" width="120" height="44" rx="8" fill="#e5e7eb" stroke="#334155"/>
<text x="390" y="128" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Homes and</text>
<text x="390" y="144" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">industry</text>
<rect x="330" y="200" width="120" height="44" rx="8" fill="#d6d3d1" stroke="#334155"/>
<text x="390" y="218" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Used water</text>
<text x="390" y="234" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">via Deep Tunnel</text>
<rect x="170" y="200" width="120" height="44" rx="8" fill="#c7d2fe" stroke="#334155"/>
<text x="230" y="218" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">3 NEWater</text>
<text x="230" y="234" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">membranes + UV</text>
<rect x="10" y="200" width="120" height="44" rx="8" fill="#fde68a" stroke="#334155"/>
<text x="70" y="218" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">4 Desalination</text>
<text x="70" y="234" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">seawater → fresh</text>
<line x1="130" y1="42" x2="168" y2="64" stroke="#334155" stroke-width="2" marker-end="url(#arr)"/>
<line x1="130" y1="106" x2="168" y2="84" stroke="#334155" stroke-width="2" marker-end="url(#arr)"/>
<line x1="290" y1="78" x2="340" y2="108" stroke="#334155" stroke-width="2" marker-end="url(#arr)"/>
<line x1="390" y1="154" x2="390" y2="198" stroke="#334155" stroke-width="2" marker-end="url(#arr)"/>
<line x1="330" y1="222" x2="292" y2="222" stroke="#334155" stroke-width="2" marker-end="url(#arr)"/>
<line x1="270" y1="200" x2="350" y2="156" stroke="#334155" stroke-width="2" marker-end="url(#arr)"/>
<line x1="220" y1="200" x2="225" y2="96" stroke="#334155" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#arr)"/>
<path d="M70,244 C70,285 330,285 380,156" fill="none" stroke="#334155" stroke-width="2" marker-end="url(#arr)"/>
<text x="198" y="150" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">top-up</text>
<text x="300" y="196" font-family="sans-serif" font-size="10" fill="#334155">to industry</text>
<text x="230" y="292" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">drinking water to homes</text>
</svg>`,
    },
  ],

  history: {
    title: "Curitiba's 72-hour street",
    story:
      "In 1971 Jaime Lerner, a young architect and planner, became mayor of Curitiba in southern Brazil. Car traffic was choking the old city centre, and he wanted to turn its main shopping street, Rua XV de Novembro, into a street for people on foot. Shopkeepers feared they would lose customers, so in 1972 his team ripped up the road and laid paving and flower beds over a single weekend — about 72 hours — before opponents could stop it. Takings went up, and shopkeepers on other streets soon asked for the same. When a group of motorists threatened to drive back in, the city covered the street with long rolls of paper for children to paint on. Two years later Curitiba opened express bus lanes — the start of the bus rapid transit system that cities around the world have copied.",
  },
};
