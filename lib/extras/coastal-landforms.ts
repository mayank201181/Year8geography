import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Old Harry Rocks in Dorset once had a 'wife' — a second chalk stack that crashed into the sea in 1896. Every headland on a coast is somewhere on the same slow journey: crack, cave, arch, stack, stump. Which stage is Old Harry at now, and what will finish him off?",
  didYouKnow: [
    "Durdle Door and Old Harry Rocks are both on the **Jurassic Coast**, which became England's first natural World Heritage Site in 2001. Its cliffs record about 185 million years of Earth history.",
    "Chesil Beach is about 29 km long and its pebbles are **graded** by size — bigger at the Portland end, smaller towards the west. Local legend says smugglers landing at night could tell where they were just by feeling the size of the pebbles.",
    "The Holderness coast in East Yorkshire is one of the fastest-eroding coastlines in Europe, losing on average about 2 m of land a year. More than 20 villages recorded in medieval times have been lost to the sea.",
    "A storm surge in December 2013 broke through the neck of **Spurn Head**. Since then the spit can be cut off from the mainland at very high tides, so at times it behaves like a tidal island.",
    "**East Coast Park** sits entirely on reclaimed land. The line of offshore breakwaters you can see from the beach makes waves break early, which is why the shoreline is shaped into a series of small, sheltered bays.",
    "In 2019 Singapore's government said that protecting the island from rising sea levels could cost **S$100 billion or more over the next 100 years**. In 2020 PUB, the national water agency, also became the national coastal protection agency.",
  ],
  activities: [
    {
      title: "Beach-in-a-tray wave tank",
      emoji: "🌊",
      materials: [
        "a deep baking tray or plastic storage box",
        "2–3 cups of sand and a handful of small pebbles or aquarium gravel",
        "a jug of water",
        "a ruler or spatula to make waves",
        "lolly sticks (groynes) and a phone to film",
      ],
      steps: [
        "Pile the sand at one end of the tray to make a sloping beach. Press a few pebbles into it, and mark one with a felt-tip.",
        "Pour water in at the other end until it covers the bottom third of the beach.",
        "Make small, gentle waves by pushing the ruler at an ANGLE to the beach (about 45°), about once a second. Watch the marked pebble and the sand for 2 minutes.",
        "Now push in 3 lolly sticks across the beach at right angles to the water as groynes and repeat. Which side of each stick does sand pile up on?",
        "Finally make big, fast, steep waves straight at the beach. Does the beach build up or get dragged down?",
      ],
      maths: "Angled waves move sand in a zig-zag along the beach: the **swash** goes up at the angle of the waves, the **backwash** comes straight back down under gravity — that's **longshore drift**. Groynes trap the drift, so sand piles up on the up-drift side and beaches further along are starved. Gentle, infrequent waves are **constructive** (strong swash builds the beach); big frequent waves are **destructive** (strong backwash removes sand).",
    },
    {
      title: "Coastal defence survey at East Coast Park",
      emoji: "🗺️",
      materials: [
        "a printed map or phone map of East Coast Park",
        "a notebook and pencil",
        "a 30 m measuring tape (or count paces — measure your pace first)",
        "a stopwatch and a natural floating object such as a leaf",
        "a parent or carer — stay on the sand and never wade in to fetch the float",
      ],
      steps: [
        "Walk a 1 km stretch of the park. Mark on your map every breakwater, sea wall, rock slope and patch of planted vegetation you see.",
        "Classify each defence as **hard** or **soft** engineering, and note what it is protecting (path, car park, restaurants, beach).",
        "Measure the width of the beach at three points: right behind a breakwater, and halfway between two breakwaters. Where is it widest?",
        "From the water's edge, drop a leaf into the shallow surf. Time how long it takes to drift 10 m along the shore, and note which way it moves. Speed = 10 ÷ time (m per second).",
        "Write a short PEEL paragraph: are the defences here working, and what might sea-level rise change?",
      ],
      maths: "You are collecting primary data like a coastal engineer. Offshore breakwaters make waves break early and lose energy, so sand is deposited in their shelter — the beach is usually widest behind them, making curved mini-bays between. The leaf shows the direction of the longshore current, which is set by the direction the waves arrive from. Comparing hard and soft defences links to **costs and benefits**: hard defences are strong but expensive; soft ones look natural but need maintaining.",
    },
  ],
  bonusDiagrams: [
    {
      title: "How a spit forms",
      caption: "Longshore drift carries sediment along the coast. Where the coast changes direction at an estuary, the sediment keeps going and is deposited in a ridge — a spit. Changing winds curl the end into a hook, and salt marsh grows in the calm water behind (e.g. Spurn Head).",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of a spit growing across an estuary mouth, with longshore drift arrows, a recurved end and salt marsh behind it">
<rect x="0" y="0" width="480" height="300" fill="#bae6fd"/>
<path d="M0 0 L60 0 L220 180 L0 180 Z" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/>
<path d="M60 0 L79 0 L239 163 L220 180 Z" fill="#fde68a" stroke="#334155" stroke-width="1"/>
<path d="M0 240 L200 240 L215 300 L0 300 Z" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/>
<path d="M230 171 L288 236 Q300 256 268 262" fill="none" stroke="#b45309" stroke-width="18" stroke-linecap="round"/>
<path d="M230 171 L288 236 Q300 256 268 262" fill="none" stroke="#fde68a" stroke-width="14" stroke-linecap="round"/>
<path d="M222 196 L262 236 L232 241 L206 222 Z" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
<path d="M96 8 L96 35 L110 23 L110 50 L123 38 L123 65 L136 53 L136 80 L150 68 L149 94" fill="none" stroke="#7c3aed" stroke-width="2"/>
<path d="M160 104 L196 144 M186 142 L196 144 L194 134" fill="none" stroke="#1f2937" stroke-width="2.5"/>
<path d="M380 30 L380 90 M372 80 L380 92 L388 80" fill="none" stroke="#1f2937" stroke-width="3"/>
<path d="M340 290 L305 268 M310 278 L304 267 L316 266" fill="none" stroke="#1f2937" stroke-width="2"/>
<text x="392" y="56" font-size="12" font-family="sans-serif" fill="#1f2937">prevailing</text>
<text x="392" y="71" font-size="12" font-family="sans-serif" fill="#1f2937">wind</text>
<text x="160" y="70" font-size="12" font-family="sans-serif" fill="#1f2937">longshore drift</text>
<text x="300" y="200" font-size="12" font-family="sans-serif" fill="#1f2937">spit</text>
<text x="306" y="248" font-size="12" font-family="sans-serif" fill="#1f2937">recurved (hooked) end</text>
<text x="350" y="282" font-size="11" font-family="sans-serif" fill="#1f2937">secondary winds</text>
<text x="128" y="230" font-size="12" font-family="sans-serif" fill="#1f2937">salt marsh →</text>
<text x="60" y="214" font-size="12" font-family="sans-serif" fill="#0369a1">river estuary</text>
<text x="20" y="120" font-size="12" font-family="sans-serif" fill="#1f2937">land</text>
<text x="20" y="280" font-size="12" font-family="sans-serif" fill="#1f2937">land</text>
<text x="420" y="160" font-size="12" font-family="sans-serif" fill="#0369a1">sea</text>
</svg>`,
    },
    {
      title: "A discordant coast: the Isle of Purbeck, Dorset",
      caption: "Simplified plan of the Purbeck coast (north at the top). Bands of rock meet the sea at right angles, so the soft sands and clays have been eroded into Studland Bay and Swanage Bay, while the harder chalk and limestone stand out as headlands. Old Harry Rocks are stacks off the chalk headland.",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified map of a discordant coast in Dorset showing alternating bands of soft and hard rock forming Studland Bay, a chalk headland with Old Harry Rocks, Swanage Bay and a limestone headland">
<rect x="0" y="0" width="480" height="300" fill="#ffffff"/>
<rect x="0" y="0" width="480" height="90" fill="#fde68a"/>
<rect x="0" y="90" width="480" height="60" fill="#f1f5f9"/>
<rect x="0" y="150" width="480" height="82" fill="#fed7aa"/>
<rect x="0" y="232" width="480" height="68" fill="#d6d3d1"/>
<line x1="0" y1="90" x2="480" y2="90" stroke="#334155" stroke-width="1"/>
<line x1="0" y1="150" x2="480" y2="150" stroke="#334155" stroke-width="1"/>
<line x1="0" y1="232" x2="480" y2="232" stroke="#334155" stroke-width="1"/>
<path d="M480 0 L300 0 L295 20 Q272 55 305 90 L405 95 Q418 120 405 148 Q322 156 312 190 Q318 224 398 234 Q410 262 398 300 L480 300 Z" fill="#bae6fd" stroke="#334155" stroke-width="2"/>
<circle cx="428" cy="112" r="6" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
<circle cx="444" cy="124" r="4" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
<text x="10" y="40" font-size="12" font-family="sans-serif" fill="#1f2937">Sands and clays (soft)</text>
<text x="10" y="125" font-size="12" font-family="sans-serif" fill="#1f2937">Chalk (hard)</text>
<text x="10" y="195" font-size="12" font-family="sans-serif" fill="#1f2937">Clays and sands (soft)</text>
<text x="10" y="270" font-size="12" font-family="sans-serif" fill="#1f2937">Limestone (hard)</text>
<text x="190" y="55" font-size="12" font-weight="700" font-family="sans-serif" fill="#1f2937">Studland Bay</text>
<text x="250" y="125" font-size="12" font-weight="700" font-family="sans-serif" fill="#1f2937">The Foreland</text>
<text x="212" y="198" font-size="12" font-weight="700" font-family="sans-serif" fill="#1f2937">Swanage Bay</text>
<text x="250" y="270" font-size="12" font-weight="700" font-family="sans-serif" fill="#1f2937">limestone headland</text>
<text x="452" y="108" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Old Harry</text>
<text x="440" y="200" font-size="12" font-family="sans-serif" fill="#0369a1">sea</text>
<path d="M455 50 L455 20 M449 30 L455 18 L461 30" fill="none" stroke="#1f2937" stroke-width="2"/>
<text x="455" y="64" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">N</text>
</svg>`,
    },
  ],
  history: {
    title: "The village the sea took back: Hallsands, 1917",
    story:
      "In the 1890s, engineers expanding the naval dockyard at Plymouth needed huge amounts of gravel. They dredged it from the seabed just off Hallsands, a fishing village on the south Devon coast — about 650,000 tonnes in a few years. The villagers warned that their beach was disappearing, and they were right. Without the shingle bank in front of it, the beach dropped by several metres and waves began hitting the houses directly. In January 1917 a storm combined with very high tides smashed through the village. Almost every house was destroyed, though remarkably no one died. Today Hallsands is a ruin, and it is still used as a warning: a beach is part of a coastal system, and removing sediment in one place can cause erosion somewhere else.",
  },
};
