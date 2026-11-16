import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "coastal-erosion",
  title: "Waves, Weathering & Erosion",
  strand: "Coasts",
  icon: "🌊",
  summary: "How wind-made waves, weather and gravity work together to eat away the edge of the land.",
  intro:
    "The coast is one of the fastest-changing places on Earth. Some cliffs lose a metre or two a year; others barely change in a lifetime; Singapore has built roughly a quarter of its land out into the sea. In this topic you will learn how wind makes waves, why some waves build beaches while others destroy them, how rock is weakened in place by **weathering**, worn away and removed by **erosion**, and finally pulled down by gravity in **mass movement**. Keep asking the geographer's question: what is the cause, what is the process, and what is the effect?",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "intro-to-coasts",
      heading: "What is a coast?",
      discovery: {
        problem:
          "Singapore's land area is about 735 km² today. In the 1960s it was only about 580 km². No volcano erupted and no island rose out of the sea. Where did the extra land come from — and why might a country that has built out into the sea need to worry *more* than most about waves and rising sea levels?",
        idea:
          "The new land was **reclaimed**: sand and rock were piled into shallow sea until it rose above the water. Roughly a quarter of today's Singapore was sea in the 1960s. So a coast is not a fixed line — it is a **zone that changes**, through natural processes and human action. New land at the water's edge is low-lying and has to be protected from the same waves and rising seas that shape every other coast.",
      },
      body:
        "A **coast** is the zone where the land meets the sea. It is not a single line on a map: the water's edge moves twice a day with the tides, and over years as cliffs are worn back and beaches grow or shrink.\n\n**The zones of the coast**\n\n- **Backshore** — above the normal high tide mark; only reached by waves in big storms (cliffs, sand dunes).\n- **Foreshore** — between the high and low tide marks; the area waves work on most.\n- **Nearshore** — shallow water beyond the low tide mark, where waves break.\n- **Offshore** — deeper water beyond where waves break; waves hardly touch the seabed here.\n\n**The coast as a system**\n\nGeographers treat the coast as a **system** with inputs, processes and outputs:\n\n| Inputs | Processes | Outputs |\n|---|---|---|\n| Energy from waves, wind and tides | Weathering, erosion, mass movement | Erosional landforms (cliffs, caves, stacks) |\n| Sediment from rivers, eroded cliffs and the seabed | Transportation (e.g. longshore drift) | Depositional landforms (beaches, spits) |\n| Human inputs (sea walls, reclaimed land) | Deposition | Sediment carried out to sea |\n\nChange one input and the outputs change, sometimes far away along the coast.\n\n**Why coasts matter**\n\n- **People**: roughly 40% of the world's population lives within about 100 km of a coast, including huge cities such as Lagos, Mumbai, Jakarta and Singapore.\n- **Trade**: around 80% of world trade by volume travels by sea, and Singapore is one of the world's busiest container ports.\n- **Tourism and leisure**: beaches, coral reefs and parks such as East Coast Park.\n- **Wildlife and protection**: mangroves, salt marshes and reefs are rich habitats and also act as natural sea defences.\n\n**Singapore's changing coastline**\n\nSingapore has reshaped its coast more than almost any country. Its land area grew from about 580 km² in the 1960s to about 735 km² today — **roughly a quarter more**. Marina Bay, much of Changi Airport, East Coast Park and Jurong Island (made by joining seven small islands) all stand on reclaimed land. Because so much of the coast is low-lying and artificial, most of it is protected by sea walls and rock slopes, and the government is planning for sea levels that could rise by up to about 1 m by 2100.\n\n> A coast changes because energy — mainly from waves — moves material. The rest of this topic explains how.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a coast from a cliff to the open sea, labelled with the backshore, foreshore, nearshore and offshore zones, the high and low tide marks and breaking waves, above a strip showing coastal inputs, processes and outputs" font-family="sans-serif"><defs><marker id="cz-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1f2937"/></marker></defs><rect width="480" height="320" fill="#ffffff"/><polygon points="0,150 122,150 330,205 480,225 480,250 0,250" fill="#fde68a" stroke="#334155"/><polygon points="0,80 110,80 122,150 0,150" fill="#d6d3d1" stroke="#334155"/><rect x="0" y="75" width="110" height="5" fill="#bbf7d0" stroke="#334155"/><polygon points="190,168 480,168 480,225 330,205" fill="#bae6fd"/><line x1="190" y1="168" x2="480" y2="168" stroke="#1f2937" stroke-width="1.5"/><line x1="273" y1="190" x2="480" y2="190" stroke="#334155" stroke-dasharray="5 3"/><path d="M326,168 C336,150 354,146 364,158 C357,154 351,159 353,168" fill="#bae6fd" stroke="#1f2937" stroke-width="1.5"/><g stroke="#94a3b8" stroke-dasharray="3 3"><line x1="190" y1="48" x2="190" y2="168"/><line x1="273" y1="48" x2="273" y2="190"/><line x1="380" y1="48" x2="380" y2="168"/></g><path d="M10,40 V48 M10,44 H187 M187,40 V48 M193,40 V48 M193,44 H270 M270,40 V48 M276,40 V48 M276,44 H377 M377,40 V48 M383,40 V48 M383,44 H474 M474,40 V48" stroke="#1f2937" fill="none"/><g font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="98" y="34">Backshore</text><text x="231" y="34">Foreshore</text><text x="326" y="34">Nearshore</text><text x="428" y="34">Offshore</text></g><g font-size="12" fill="#1f2937"><text x="34" y="120">Cliff</text><text x="140" y="182">Beach</text><text x="430" y="214">Sea</text></g><g font-size="11" fill="#1f2937"><text x="476" y="162" text-anchor="end">High tide mark</text><text x="476" y="185" text-anchor="end">Low tide mark</text><text x="282" y="120">Waves break</text></g><line x1="310" y1="124" x2="338" y2="150" stroke="#1f2937" marker-end="url(#cz-ah)"/><rect x="4" y="258" width="146" height="58" rx="6" fill="#e0f2fe" stroke="#334155"/><rect x="167" y="258" width="146" height="58" rx="6" fill="#fecaca" stroke="#334155"/><rect x="330" y="258" width="146" height="58" rx="6" fill="#bbf7d0" stroke="#334155"/><line x1="151" y1="287" x2="165" y2="287" stroke="#1f2937" stroke-width="1.5" marker-end="url(#cz-ah)"/><line x1="314" y1="287" x2="328" y2="287" stroke="#1f2937" stroke-width="1.5" marker-end="url(#cz-ah)"/><g font-size="11" fill="#1f2937" text-anchor="middle"><text x="77" y="272" font-weight="bold">INPUTS</text><text x="77" y="285">Energy: waves, wind,</text><text x="77" y="297">tides. Sediment from</text><text x="77" y="309">rivers and cliffs</text><text x="240" y="272" font-weight="bold">PROCESSES</text><text x="240" y="285">Weathering, erosion,</text><text x="240" y="297">mass movement,</text><text x="240" y="309">transport, deposition</text><text x="403" y="272" font-weight="bold">OUTPUTS</text><text x="403" y="285">Landforms such as</text><text x="403" y="297">cliffs and beaches;</text><text x="403" y="309">sediment lost offshore</text></g></svg>`,
      diagramCaption:
        "The coastal zone in cross-section. The foreshore lies between the high and low tide marks; waves break in the nearshore zone. Below: the coast as a system of inputs, processes and outputs.",
      workedExamples: [
        {
          title: "Reading the resource: how much has Singapore grown?",
          problem:
            "Singapore's land area was about 580 km² in the 1960s and is about 735 km² today. By roughly what percentage has its land area grown?",
          steps: [
            "Find the increase: 735 − 580 = 155 km².",
            "Divide by the ORIGINAL area (the 1960s figure): {{155/580}} ≈ 0.267.",
            "Multiply by 100 to get a percentage: about 27%.",
            "Sense-check: the guide says 'roughly a quarter' (25%). 27% fits — both figures are rounded estimates.",
          ],
          answer: "About 27% — roughly a quarter more land than in the 1960s.",
          yourTurn: {
            question:
              "Your turn: a reclaimed island grew from 40 km² to 50 km². What is the percentage increase in its area? Give a whole number.",
            answer: { type: "number", value: 25, display: "25%" },
            solution: "Increase = 50 − 40 = 10 km². Percentage increase = 10 ÷ 40 × 100 = 25%.",
          },
        },
        {
          title: "Inputs, processes or outputs?",
          problem:
            "Classify each as an input, a process or an output of the coastal system: (a) a river carrying sand to the sea; (b) waves wearing away a cliff; (c) a beach.",
          steps: [
            "Ask one question of each: is it *coming into* the coast (input), *happening at* the coast (process), or the *result* (output)?",
            "(a) Sand delivered by a river is arriving at the coast → **input** (sediment).",
            "(b) Waves wearing away rock is something happening → **process** (erosion).",
            "(c) A beach is what deposition builds → **output** (a depositional landform).",
          ],
          answer: "(a) input, (b) process, (c) output.",
          yourTurn: {
            question:
              "Your turn: in the coastal system, is **energy from the wind blowing over the sea** an input, a process or an output? Type one word.",
            answer: { type: "text", accept: ["input", "an input", "inputs"], display: "Input" },
            solution:
              "Wind energy comes into the coastal system from outside (the atmosphere) and drives the waves, so it is an **input**.",
          },
        },
      ],
      keyPoints: [
        "A coast is the zone where land meets sea — it moves with the tides and changes over time.",
        "Zones: backshore (above high tide), foreshore (between tides), nearshore (where waves break), offshore.",
        "The coast is a system: inputs (energy, sediment) → processes (weathering, erosion, transport, deposition) → outputs (landforms).",
        "Coasts matter for people, trade, tourism and wildlife — roughly 40% of people live within about 100 km of the sea.",
        "Singapore's land area has grown by roughly a quarter since the 1960s through land reclamation.",
      ],
      whyItWorks:
        "Why do coasts change at all? Because they sit where energy arrives. Wind passes energy to waves; waves carry it to the shore; tides move the water level up and down so waves attack different heights of the cliff and beach. Energy does work: when wave energy is high, more material is removed than is delivered, so the coast retreats. When energy is low, material is dropped and the coast builds out. Thinking of the coast as a system lets you track where material comes from and where it goes — change one input (dam a river that used to bring sand, or reclaim land) and the outputs change somewhere else.",
      strategies: ["Cause → process → effect", "Use figures from the source", "Think at different scales"],
      thinkDeeper:
        "Land reclamation needs enormous amounts of sand, much of it historically imported. Where does that sand come from — and whose coastline might lose out when another country gains land?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "waves",
      heading: "Waves",
      discovery: {
        problem:
          "Beach A in Cornwall faces the open Atlantic Ocean. Beach B on Singapore's southern shore looks across the Singapore Strait to Indonesian islands about 20 km away. The same strength of wind blows at both beaches for a whole day. Which beach gets the bigger waves — and why?",
        idea:
          "Beach A. Wave size depends on **wind speed**, how **long** the wind blows, and the **fetch** — the distance of open water the wind blows over. Thousands of kilometres of Atlantic give the wind a long run-up to pass energy to the water and build big waves; about 20 km of strait does not.",
      },
      body:
        "**How waves form**\n\nWaves are made by **wind blowing over the sea**. Friction between the moving air and the water surface drags the water into ripples, which grow into waves. Three things control how big they get:\n\n1. **Wind speed** — stronger wind passes more energy to the water.\n2. **Duration** — how long the wind blows.\n3. **Fetch** — the distance of open water the wind blows over.\n\nOut at sea, the water in a wave mainly moves round in a **circle** (an orbit). The *energy* travels forward but the water itself hardly moves forward — which is why a floating ball bobs up and down instead of racing to the shore.\n\n**Why waves break**\n\nAs a wave reaches shallow water, the bottom of the wave drags on the seabed (friction) and slows down. The top keeps going, so the wave gets taller and steeper, leans forward and topples over — it **breaks**.\n\n- **Swash**: the water rushing *up* the beach after a wave breaks.\n- **Backwash**: the water running back *down* the beach under gravity.\n\n**Constructive and destructive waves**\n\n| | Constructive waves | Destructive waves |\n|---|---|---|\n| Shape | Low, gentle, long wavelength | Tall, steep, short wavelength |\n| Frequency (common textbook figure) | about 6–8 a minute | about 10–14 a minute |\n| Swash and backwash | **Strong swash**, weak backwash | Weak swash, **strong backwash** |\n| How they break | Spill gently up the beach | Plunge down onto the beach |\n| Effect | Deposit material — **build** beaches | Drag material away — **erode** beaches |\n| Beach they make | Wide and gently sloping | Steep and narrower |\n\nTextbooks quote slightly different frequency ranges; what matters is that destructive waves arrive more often and are steeper.\n\n**Prevailing wind**\n\nThe **prevailing wind** is the direction the wind blows *from* most often. In the UK it is the **south-west**, off the Atlantic, so south-west-facing coasts such as Cornwall get the biggest waves. Singapore's winds follow the **monsoons**: the north-east monsoon (roughly December to March) and the south-west monsoon (roughly June to September), with sudden **Sumatra squalls** in between. Because Singapore is sheltered by Peninsular Malaysia, Sumatra and the Riau Islands, most of its coast has a short fetch, so its waves are usually small compared with those on open-ocean coasts.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top: a wave profile labelled with crest, trough, wave height, wavelength, wind direction and fetch. Bottom left: a low constructive wave on a gently sloping beach with a thick swash arrow and thin backwash arrow. Bottom right: a tall plunging destructive wave on a steep beach with a thin swash arrow and thick backwash arrow" font-family="sans-serif"><defs><marker id="wv-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1f2937"/></marker><marker id="wv-big" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="13" markerHeight="13" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1f2937"/></marker></defs><rect width="480" height="320" fill="#ffffff"/><line x1="20" y1="14" x2="100" y2="14" stroke="#1f2937" stroke-width="2" marker-end="url(#wv-ah)"/><text x="106" y="18" font-size="12" fill="#1f2937">Wind</text><path d="M20,80 Q55,30 90,80 Q125,130 160,80 Q195,30 230,80 Q265,130 300,80 Q335,30 370,80 Q405,130 440,80 L440,130 L20,130 Z" fill="#bae6fd" stroke="#1f2937" stroke-width="1.5"/><line x1="55" y1="55" x2="195" y2="55" stroke="#334155" stroke-dasharray="3 3"/><line x1="125" y1="58" x2="125" y2="102" stroke="#1f2937" marker-start="url(#wv-ah)" marker-end="url(#wv-ah)"/><line x1="195" y1="30" x2="195" y2="54" stroke="#94a3b8" stroke-dasharray="2 2"/><line x1="335" y1="30" x2="335" y2="54" stroke="#94a3b8" stroke-dasharray="2 2"/><line x1="198" y1="30" x2="332" y2="30" stroke="#1f2937" marker-start="url(#wv-ah)" marker-end="url(#wv-ah)"/><g font-size="11" fill="#1f2937" text-anchor="middle"><text x="55" y="46">Crest</text><text x="125" y="46">Wave height</text><text x="265" y="24">Wavelength</text><text x="265" y="122">Trough</text></g><line x1="22" y1="142" x2="438" y2="142" stroke="#1f2937" marker-start="url(#wv-ah)" marker-end="url(#wv-ah)"/><text x="230" y="158" font-size="11" fill="#1f2937" text-anchor="middle">Fetch: the distance of open water the wind blows over</text><line x1="0" y1="166" x2="480" y2="166" stroke="#cbd5e1"/><line x1="240" y1="170" x2="240" y2="318" stroke="#cbd5e1"/><g text-anchor="middle" fill="#1f2937"><text x="118" y="184" font-size="13" font-weight="bold">Constructive wave</text><text x="118" y="199" font-size="11">Low and long; about 6–8 a minute</text><text x="118" y="212" font-size="11">Builds up the beach</text><text x="362" y="184" font-size="13" font-weight="bold">Destructive wave</text><text x="362" y="199" font-size="11">Tall and steep; about 10–14 a minute</text><text x="362" y="212" font-size="11">Erodes the beach</text></g><polygon points="10,316 230,262 230,318 10,318" fill="#fde68a" stroke="#334155"/><polygon points="10,290 116,290 10,316" fill="#bae6fd"/><path d="M12,290 Q32,281 52,290 Q72,281 92,290" fill="none" stroke="#1f2937" stroke-width="1.5"/><line x1="122" y1="280" x2="192" y2="263" stroke="#1f2937" stroke-width="5" marker-end="url(#wv-big)"/><line x1="192" y1="250" x2="130" y2="265" stroke="#1f2937" stroke-width="1.5" marker-end="url(#wv-ah)"/><g font-size="11" fill="#1f2937" text-anchor="end"><text x="228" y="300">Strong swash</text><text x="228" y="313">Weak backwash</text></g><polygon points="300,318 470,232 470,318" fill="#fde68a" stroke="#334155"/><polygon points="248,284 367,284 300,318 248,318" fill="#bae6fd"/><path d="M250,284 C280,282 292,252 308,240 C320,231 334,236 334,247 C328,242 320,245 320,255 C320,266 326,278 334,284" fill="#bae6fd" stroke="#1f2937" stroke-width="1.5"/><line x1="375" y1="272" x2="412" y2="254" stroke="#1f2937" stroke-width="1.5" marker-end="url(#wv-ah)"/><line x1="440" y1="226" x2="384" y2="252" stroke="#1f2937" stroke-width="5" marker-end="url(#wv-big)"/><g font-size="11" fill="#1f2937" text-anchor="end"><text x="466" y="294">Weak swash</text><text x="466" y="309">Strong backwash</text></g></svg>`,
      diagramCaption:
        "Top: the parts of a wave. Bottom: constructive waves have a strong swash (thick arrow) and build gentle beaches; destructive waves have a strong backwash (thick arrow) and erode steep beaches.",
      workedExamples: [
        {
          title: "Counting waves: constructive or destructive?",
          problem:
            "On a field trip, Wei Ling counts 21 waves breaking in 3 minutes. How many waves is that per minute, and are they more likely to be constructive or destructive?",
          steps: [
            "Wave frequency = number of waves ÷ number of minutes.",
            "21 ÷ 3 = 7 waves per minute.",
            "Compare with the textbook ranges: constructive about 6–8 a minute; destructive about 10–14 a minute.",
            "7 is in the constructive range — look for other evidence too: a wide, gently sloping beach and low, spilling waves would back this up.",
          ],
          answer: "7 waves per minute — most likely constructive waves.",
          yourTurn: {
            question:
              "Your turn: during a storm, Arjun counts 36 waves breaking in 3 minutes. How many waves per minute is that?",
            answer: { type: "number", value: 12, display: "12 waves per minute" },
            solution:
              "36 ÷ 3 = 12 waves per minute. That is in the 10–14 range, so these are probably destructive waves.",
          },
        },
        {
          title: "Building a model answer: why do waves break?",
          problem: "Explain why waves break as they approach the shore. (3 marks)",
          steps: [
            "Point 1 (cause): as the sea gets shallower, the base of the wave touches the seabed and is slowed by **friction**.",
            "Point 2 (process): the top of the wave is not slowed, so it keeps moving forward faster than the base; the wave becomes taller and steeper.",
            "Point 3 (effect): the crest becomes unstable, leans forward and topples over — the wave breaks and the water rushes up the beach as swash.",
            "Link the points with 'so' and 'because' to show a chain of reasoning, not a list.",
          ],
          answer:
            "As a wave enters shallow water, its base drags on the seabed and is slowed by friction. The top of the wave keeps moving, so the wave grows taller and steeper until the crest topples forward and the wave breaks, sending swash up the beach.",
          yourTurn: {
            question: "Your turn: name the movement of water back down the beach, under gravity, after a wave has broken.",
            answer: { type: "text", accept: ["backwash", "back wash", "back-wash"], display: "Backwash" },
            solution: "This is the **backwash**. The swash is the water going up the beach; the backwash runs back down it.",
          },
        },
      ],
      keyPoints: [
        "Waves are made by wind; their size depends on wind speed, duration and fetch.",
        "Waves break because friction with the seabed slows the base while the top keeps going.",
        "Swash goes up the beach; backwash comes back down under gravity.",
        "Constructive waves: low, about 6–8 a minute, strong swash → build beaches.",
        "Destructive waves: tall and steep, about 10–14 a minute, strong backwash → erode beaches.",
        "The prevailing wind in the UK is from the south-west; Singapore's winds follow the monsoons.",
      ],
      whyItWorks:
        "Why does a strong backwash erode? Destructive waves are steep and plunge downwards onto a steep beach, so most of their energy pushes *down* rather than up the beach — the swash is weak. Gravity then pulls the backwash hard down the steep slope, dragging sand and pebbles offshore. Because the waves arrive so often, each new wave breaks on top of the returning backwash, cutting its swash short. Constructive waves do the opposite: they spill gently up a gentle beach, much of the swash soaks into the sand, so the backwash is weak and the sediment is left behind — the beach grows.",
      strategies: ["Cause → process → effect", "Compare and contrast", "Use figures from the source", "Sketch it"],
      thinkDeeper:
        "A beach is often steeper in winter and gentler in summer. Using what you know about constructive and destructive waves, suggest why — and what this might mean for a cliff behind the beach in winter.",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "weathering",
      heading: "Weathering",
      discovery: {
        problem:
          "In a British churchyard, a limestone gravestone carved in 1850 is so worn you can hardly read the letters. A granite gravestone beside it, carved the same year, still looks sharp. No waves reach the churchyard and nobody has scrubbed the stones. What has worn away the limestone — and why not the granite?",
        idea:
          "**Weathering** — the breakdown of rock *in place*. Rainwater is a very weak acid (carbonic acid). It slowly reacts with the calcium carbonate in limestone and dissolves it, but has far less effect on granite. Nothing had to move the stone for this to happen — that is the key difference between weathering and erosion.",
      },
      body:
        "**Weathering vs erosion — learn this difference first**\n\n| | Weathering | Erosion |\n|---|---|---|\n| What happens | Rock is broken down or dissolved | Material is worn away **and removed** |\n| Does anything move it? | No — it happens **in place** (in situ) | Yes — a moving force: waves, rivers, wind or ice |\n| At the coast | Weakens cliff tops and cliff faces | Waves attack the foot of the cliff |\n\nWeathering *prepares* the rock; erosion and mass movement *take it away*.\n\n**1. Mechanical (physical) weathering** — rock breaks into pieces but its chemistry does not change.\n\n- **Freeze–thaw**: water seeps into a crack. At night it freezes and **expands by about 9%**, pushing the sides of the crack apart. By day the ice melts and the water seeps deeper into the widened crack. Repeated many times, pieces of rock break off. It needs temperatures that swing **above and below 0 °C** — common on British cliffs in winter, but it never happens at sea level in Singapore.\n- **Salt weathering (salt crystallisation)**: sea spray soaks into cracks and pores in the rock. When the water evaporates, salt crystals grow and press outwards until the rock crumbles. It is very effective on coasts — including warm ones.\n\n**2. Chemical weathering** — rock is changed or dissolved by chemical reactions.\n\n- **Carbonation**: rain absorbs carbon dioxide from the air and becomes a weak **carbonic acid**. This reacts with **calcium carbonate** in limestone and chalk, forming a soluble compound that is washed away. Chalk cliffs, like those in Dorset and at Dover, are attacked in this way.\n- Chemical weathering is fastest in **warm, wet climates** like Singapore's, where rock can be rotted many metres below the surface.\n\n**3. Biological weathering** — living things break down rock.\n\n- Plant **roots** grow into cracks and prise them apart.\n- **Burrowing animals**, and rock-boring shellfish such as piddocks in soft rock, weaken cliffs.\n- Seaweeds and lichens give off weak acids — this is biological *and* chemical.\n\n| Type | Example processes | Best conditions |\n|---|---|---|\n| Mechanical | Freeze–thaw; salt weathering | Temperatures around 0 °C; salt spray |\n| Chemical | Carbonation | Warm and wet; limestone and chalk |\n| Biological | Roots; burrowing animals | Vegetation on cliffs; soft rock |\n\n> Exam tip: if your answer says the rock is *carried away*, you are describing erosion, not weathering.",
      diagram: `<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step freeze-thaw sequence: water enters a crack in a rock; the water freezes and expands, widening the crack; the ice melts and water seeps deeper; after many cycles a piece of rock breaks off" font-family="sans-serif"><defs><marker id="ft-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1f2937"/></marker></defs><rect width="480" height="240" fill="#ffffff"/><g font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="60" y="22">Day: above 0 °C</text><text x="180" y="22">Night: below 0 °C</text><text x="300" y="22">Day: above 0 °C</text><text x="420" y="22">After many cycles</text></g><line x1="0" y1="154" x2="480" y2="154" stroke="#334155"/><rect x="15" y="34" width="90" height="120" fill="#d6d3d1" stroke="#334155"/><polygon points="56,34 64,34 60,95" fill="#ffffff" stroke="#334155"/><polygon points="57.5,55 62.5,55 60,92" fill="#7dd3fc"/><rect x="135" y="34" width="90" height="120" fill="#d6d3d1" stroke="#334155"/><polygon points="173,34 187,34 180,105" fill="#e0f2fe" stroke="#1f2937"/><line x1="174" y1="60" x2="150" y2="60" stroke="#1f2937" stroke-width="2" marker-end="url(#ft-ah)"/><line x1="186" y1="60" x2="210" y2="60" stroke="#1f2937" stroke-width="2" marker-end="url(#ft-ah)"/><text x="180" y="125" font-size="11" fill="#1f2937" text-anchor="middle">ice</text><rect x="255" y="34" width="90" height="120" fill="#d6d3d1" stroke="#334155"/><polygon points="290,34 310,34 300,125" fill="#ffffff" stroke="#334155"/><polygon points="292.5,50 307.5,50 300,122" fill="#7dd3fc"/><polygon points="375,34 410,34 418,128 418,154 375,154" fill="#d6d3d1" stroke="#334155"/><polygon points="436,62 466,56 470,154 432,154" fill="#d6d3d1" stroke="#334155"/><polygon points="420,154 424,146 429,154" fill="#d6d3d1" stroke="#334155"/><line x1="106" y1="94" x2="132" y2="94" stroke="#1f2937" stroke-width="2" marker-end="url(#ft-ah)"/><line x1="226" y1="94" x2="252" y2="94" stroke="#1f2937" stroke-width="2" marker-end="url(#ft-ah)"/><line x1="346" y1="94" x2="372" y2="94" stroke="#1f2937" stroke-width="2" marker-end="url(#ft-ah)"/><g font-size="11" fill="#1f2937" text-anchor="middle"><text x="60" y="172">1. Rain or spray</text><text x="60" y="185">seeps into a crack</text><text x="60" y="198">in the rock.</text><text x="180" y="172">2. Water freezes</text><text x="180" y="185">and expands (about</text><text x="180" y="198">9%), widening crack.</text><text x="300" y="172">3. Ice melts; water</text><text x="300" y="185">seeps deeper into</text><text x="300" y="198">the wider crack.</text><text x="420" y="172">4. Repeated many</text><text x="420" y="185">times, pieces of</text><text x="420" y="198">rock break off.</text></g><text x="240" y="228" font-size="11" fill="#1f2937" text-anchor="middle">Freeze–thaw needs temperatures that swing above and below 0 °C</text></svg>`,
      diagramCaption:
        "Freeze–thaw weathering: water freezes in a crack, expands by about 9% and widens it; after many freeze–thaw cycles the rock splits. The rock breaks in place — nothing has carried it away yet.",
      workedExamples: [
        {
          title: "Reading the data: how many freeze–thaw cycles?",
          problem:
            "A weather station on a cliff top records these daily temperatures (°C):\n\n| Day | 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n|---|---|---|---|---|---|---|---|\n| Maximum | 4 | 6 | 2 | −1 | 3 | 5 | 8 |\n| Minimum | −3 | 1 | −5 | −6 | −2 | −1 | 2 |\n\nOn how many days could a freeze–thaw cycle happen?",
          steps: [
            "A freeze–thaw cycle needs the temperature to go **below 0 °C** (freeze) **and above 0 °C** (thaw) on the same day: minimum below 0 and maximum above 0.",
            "Day 1: −3 to 4 ✓. Day 2: 1 to 6 — never freezes ✗. Day 3: −5 to 2 ✓.",
            "Day 4: −6 to −1 — stays frozen all day ✗ (no thaw!). Day 5: −2 to 3 ✓. Day 6: −1 to 5 ✓.",
            "Day 7: 2 to 8 — never freezes ✗.",
            "Count the ticks: days 1, 3, 5 and 6.",
          ],
          answer: "4 days. Note that the coldest day (day 4) gives no cycle, because the ice never melts.",
          yourTurn: {
            question:
              "Your turn: over five days the maximum and minimum temperatures (°C) were: day 1, 3 and −4; day 2, −2 and −8; day 3, 1 and −1; day 4, 7 and 3; day 5, 4 and −2. On how many days could a freeze–thaw cycle happen?",
            answer: { type: "number", value: 3, display: "3 days" },
            solution:
              "Look for a minimum below 0 °C AND a maximum above 0 °C. Day 1 ✓, day 2 ✗ (never thaws), day 3 ✓, day 4 ✗ (never freezes), day 5 ✓. That makes 3 days.",
          },
        },
        {
          title: "Building a model answer: carbonation",
          problem: "Explain how chemical weathering weakens a chalk cliff. (3 marks)",
          steps: [
            "Name the process: **carbonation**.",
            "Cause: rainwater absorbs carbon dioxide from the air, making it a weak carbonic acid.",
            "Process: the acid reacts with the calcium carbonate that chalk is made of, forming a soluble compound.",
            "Effect: this is washed away in solution, widening joints and cracks so the cliff is weakened and easier for waves to erode.",
          ],
          answer:
            "Chalk is weakened by carbonation. Rainwater absorbs carbon dioxide and becomes a weak carbonic acid, which reacts with the calcium carbonate in the chalk. The product dissolves and is washed away, so joints and cracks widen and the cliff becomes weaker and easier to erode.",
          yourTurn: {
            question:
              "Your turn: name the type of chemical weathering in which weak carbonic acid in rainwater reacts with the calcium carbonate in limestone or chalk.",
            answer: {
              type: "text",
              accept: ["carbonation", "carbonation weathering", "carbonation-solution", "carbonation solution"],
              display: "Carbonation",
            },
            solution:
              "This is **carbonation**, a type of chemical weathering. It only works well on rocks made of calcium carbonate, such as limestone and chalk.",
          },
        },
      ],
      keyPoints: [
        "Weathering = breakdown of rock in place; erosion = wearing away AND removal by a moving force.",
        "Freeze–thaw: water expands by about 9% when it freezes; needs temperatures swinging around 0 °C.",
        "Salt weathering: salt crystals grow as seawater evaporates and force rock apart.",
        "Carbonation: weak carbonic acid in rain dissolves the calcium carbonate in limestone and chalk.",
        "Biological weathering: roots, burrowing animals and rock-boring creatures break rock.",
        "Chemical weathering is fastest in warm, wet climates such as Singapore's.",
      ],
      whyItWorks:
        "Why does freezing water split rock? Most liquids shrink when they become solid, but water is unusual: ice takes up about 9% more space than the water it came from. Trapped in a crack, the ice has nowhere to go but outwards, so it pushes on the rock walls. One freeze does very little — but the crack widens a tiny amount each time, more water gets in, and over hundreds of cycles the rock is wedged apart. Chemical weathering speeds up in heat and moisture because chemical reactions run faster when it is warmer and there must be water for them to happen at all — so hot, wet Singapore weathers chemically, while cold British cliffs suffer more from freeze–thaw.",
      strategies: ["Spot the misconception", "Cause → process → effect", "Use figures from the source", "Compare and contrast"],
      thinkDeeper:
        "Freeze–thaw is often described as a 'cold-climate' process, yet places that are frozen all winter (like parts of Antarctica) may have less freeze–thaw than a mild British cliff. Use the worked example to explain why.",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "erosion-processes",
      heading: "Coastal erosion processes",
      discovery: {
        problem:
          "The Holderness coast in East Yorkshire faces the North Sea and loses roughly 1–2 m of cliff a year on average — one of the fastest-eroding coastlines in Europe. The granite cliffs at Land's End in Cornwall face the full force of Atlantic waves, yet hardly change in a human lifetime. Why does the coast with the more sheltered sea lose more land?",
        idea:
          "**Rock type.** Holderness cliffs are made of **boulder clay** (till) — soft, loose material dumped by glaciers in the last ice age, which waves can easily wear away and wash out. Granite is a hard, crystalline rock that resists erosion. The rate of erosion depends on how strong the rock is, not just how strong the waves are.",
      },
      body:
        "**Erosion** is the wearing away **and removal** of material by a moving force — at the coast, mainly waves. There are four processes:\n\n1. **Hydraulic action** — the sheer force of the water hitting the cliff. Waves also trap and **compress air** in cracks; when the wave pulls back, the air expands suddenly. Repeated over and over, this widens cracks and breaks off blocks of rock.\n2. **Abrasion** (also called corrasion) — waves pick up sand and pebbles and **hurl them at the cliff**, scraping and chipping it like sandpaper. Usually the most effective process, especially in storms.\n3. **Attrition** — rocks and pebbles carried by the waves **knock into each other**, breaking into smaller, smoother, more rounded pieces. Attrition wears down the *load*, not the cliff — this is why beaches are made of rounded pebbles and sand.\n4. **Solution** (also called corrosion) — seawater **dissolves** some minerals in the rock, especially the calcium carbonate in chalk and limestone.\n\n> Abrasion = rock hits *cliff*. Attrition = rock hits *rock*.\n\n**What controls the rate of erosion?**\n\n| Factor | Erosion is faster when… |\n|---|---|\n| Rock type | The rock is weak, e.g. clay, sand, boulder clay |\n| Rock structure | The rock has many joints, faults or cracks |\n| Wave energy | Waves are big: strong winds, blowing for a long time |\n| Fetch and exposure | The coast faces the prevailing wind across open sea |\n| Beach | There is little or no beach to absorb wave energy |\n| Weather | Storms, heavy rain and freeze–thaw weaken the cliff |\n| People | Defences further along the coast trap sediment, starving beaches here |\n\n**Rock type controls the long-term rate**\n\n| Rock | Resistance | Typical rate of change |\n|---|---|---|\n| Granite (e.g. Land's End, Cornwall) | Very resistant | Very slow — little visible change in a lifetime |\n| Chalk and limestone (e.g. Dorset) | Moderate | Slow, punctuated by rockfalls |\n| Boulder clay (Holderness) | Weak | Fast — roughly 1–2 m a year on average |\n\n**Case study: the Holderness coast.** About 60 km of low cliffs of boulder clay, between Flamborough Head and Spurn Head, face the North Sea. The clay is soft and easily washed out, and waves driven from the north and north-east cross hundreds of kilometres of open sea. With average losses of roughly 1–2 m a year (and far more at some places in stormy years), it is often called one of the fastest-eroding coastlines in Europe. Textbooks often state that around 29 villages have been lost to the sea since Roman times.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four panels showing the coastal erosion processes: hydraulic action with waves forcing air into a crack in the cliff; abrasion with waves hurling pebbles at the cliff; attrition with angular rocks knocking together and becoming smaller and rounder; solution with seawater dissolving minerals from a chalk cliff" font-family="sans-serif"><defs><marker id="ep-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1f2937"/></marker><marker id="ep-big" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1f2937"/></marker></defs><rect width="480" height="320" fill="#ffffff"/><rect x="2" y="2" width="236" height="156" rx="6" fill="#ffffff" stroke="#94a3b8"/><rect x="242" y="2" width="236" height="156" rx="6" fill="#ffffff" stroke="#94a3b8"/><rect x="2" y="162" width="236" height="156" rx="6" fill="#ffffff" stroke="#94a3b8"/><rect x="242" y="162" width="236" height="156" rx="6" fill="#ffffff" stroke="#94a3b8"/><g font-size="13" font-weight="bold" fill="#1f2937"><text x="12" y="20">1. Hydraulic action</text><text x="252" y="20">2. Abrasion</text><text x="12" y="180">3. Attrition</text><text x="252" y="180">4. Solution</text></g><polygon points="4,92 168,92 166,156 4,156" fill="#bae6fd"/><polygon points="170,30 236,30 236,156 166,156" fill="#d6d3d1" stroke="#334155"/><polygon points="168,106 168,120 210,113" fill="#ffffff" stroke="#334155"/><line x1="172" y1="113" x2="196" y2="113" stroke="#1f2937" marker-end="url(#ep-ah)"/><text x="200" y="100" font-size="11" fill="#1f2937">air</text><line x1="40" y1="113" x2="160" y2="113" stroke="#1f2937" stroke-width="4" marker-end="url(#ep-big)"/><text x="80" y="140" font-size="11" fill="#1f2937" text-anchor="middle">force of water</text><g font-size="11" fill="#1f2937"><text x="12" y="38">Force of waves hits the</text><text x="12" y="51">cliff; air in cracks is</text><text x="12" y="64">compressed, then bursts</text><text x="12" y="77">out as the wave retreats.</text></g><polygon points="244,92 408,92 406,156 244,156" fill="#bae6fd"/><polygon points="410,30 476,30 476,156 406,156" fill="#d6d3d1" stroke="#334155"/><g fill="#a8a29e" stroke="#334155"><circle cx="300" cy="120" r="5"/><circle cx="330" cy="106" r="4"/><circle cx="352" cy="126" r="6"/><circle cx="376" cy="112" r="4"/></g><line x1="336" y1="106" x2="402" y2="104" stroke="#1f2937" stroke-width="1.5" marker-end="url(#ep-ah)"/><line x1="359" y1="126" x2="402" y2="128" stroke="#1f2937" stroke-width="1.5" marker-end="url(#ep-ah)"/><path d="M408,110 l6,3 M408,120 l6,-2 M408,132 l6,3" stroke="#1f2937"/><text x="310" y="148" font-size="11" fill="#1f2937" text-anchor="middle">sand and pebbles thrown</text><g font-size="11" fill="#1f2937"><text x="252" y="38">Waves hurl sand and</text><text x="252" y="51">pebbles at the cliff,</text><text x="252" y="64">scraping it away like</text><text x="252" y="77">sandpaper.</text></g><g font-size="11" fill="#1f2937"><text x="12" y="198">Rocks carried by waves</text><text x="12" y="211">knock into each other.</text></g><rect x="4" y="222" width="232" height="94" fill="#bae6fd"/><g fill="#a8a29e" stroke="#334155"><polygon points="20,252 42,242 52,258 38,272 22,264"/><polygon points="84,246 104,252 100,272 80,270 72,256"/><circle cx="172" cy="250" r="9"/><circle cx="200" cy="262" r="7"/><circle cx="178" cy="278" r="6"/><circle cx="212" cy="242" r="5"/></g><line x1="54" y1="257" x2="69" y2="257" stroke="#1f2937" stroke-width="1.5" marker-end="url(#ep-ah)"/><line x1="115" y1="262" x2="152" y2="262" stroke="#1f2937" stroke-width="3" marker-end="url(#ep-big)"/><g font-size="11" fill="#1f2937" text-anchor="middle"><text x="133" y="252">over time</text><text x="62" y="296">angular</text><text x="190" y="300">smaller, rounder</text></g><g font-size="11" fill="#1f2937"><text x="252" y="198">Seawater dissolves</text><text x="252" y="211">calcium carbonate in</text><text x="252" y="224">chalk and limestone.</text></g><polygon points="244,232 408,232 406,316 244,316" fill="#bae6fd"/><polygon points="410,190 476,190 476,316 406,316" fill="#f5f5f4" stroke="#334155"/><text x="442" y="214" font-size="11" fill="#1f2937" text-anchor="middle">chalk</text><g fill="#1f2937"><circle cx="396" cy="250" r="2"/><circle cx="386" cy="262" r="2"/><circle cx="372" cy="254" r="2"/><circle cx="362" cy="270" r="2"/><circle cx="394" cy="282" r="2"/><circle cx="378" cy="292" r="2"/><circle cx="352" cy="286" r="2"/><circle cx="366" cy="302" r="2"/></g><line x1="345" y1="270" x2="305" y2="270" stroke="#1f2937" stroke-width="1.5" marker-end="url(#ep-ah)"/><g font-size="11" fill="#1f2937" text-anchor="middle"><text x="290" y="290">dissolved</text><text x="290" y="303">minerals</text></g></svg>`,
      diagramCaption:
        "The four processes of coastal erosion. Hydraulic action and abrasion attack the cliff; attrition wears down the rocks the waves carry; solution dissolves rocks such as chalk and limestone.",
      workedExamples: [
        {
          title: "Calculating a rate of cliff retreat",
          problem:
            "A house was 52 m from the cliff edge in 1994. In 2024 it was 22 m from the edge. (a) What is the average rate of cliff retreat? (b) If this rate continues, in roughly which year will the cliff edge reach the house?",
          steps: [
            "Distance lost = 52 − 22 = 30 m.",
            "Time taken = 2024 − 1994 = 30 years.",
            "Rate of retreat = distance ÷ time = 30 ÷ 30 = **1 m per year**.",
            "Time left = 22 m ÷ 1 m per year = 22 years.",
            "2024 + 22 = **2046**.",
            "Evaluate: this is only an estimate — real cliffs retreat unevenly (a single slump or storm can remove several metres at once), and rising sea levels could speed retreat up.",
          ],
          answer: "(a) 1 m per year. (b) Around 2046 — but treat it as a rough estimate, not a date.",
          yourTurn: {
            question:
              "Your turn: a coastal road was 80 m from the cliff edge in 2004 and 56 m from it in 2016. What was the average rate of cliff retreat, in metres per year?",
            answer: { type: "number", value: 2, display: "2 m per year" },
            solution: "Distance lost = 80 − 56 = 24 m. Time = 2016 − 2004 = 12 years. Rate = 24 ÷ 12 = 2 m per year.",
          },
        },
        {
          title: "Building a model answer: abrasion vs attrition",
          problem: "Explain the difference between abrasion and attrition. (4 marks)",
          steps: [
            "Define abrasion: waves pick up sand and pebbles and throw them against the cliff.",
            "Give its effect: the cliff is scraped and chipped away, like sandpaper — it erodes the **cliff**.",
            "Define attrition: rocks and pebbles carried by the waves hit **each other**.",
            "Give its effect: the load becomes smaller and more rounded — it erodes the **load**, not the cliff.",
            "Finish with a clear comparison word: 'whereas' or 'however'.",
          ],
          answer:
            "Abrasion is when waves pick up sand and pebbles and hurl them at the cliff, scraping and wearing the cliff away like sandpaper. Attrition, however, is when the rocks carried by the waves knock into each other, so they break into smaller, smoother and more rounded pieces. So abrasion erodes the cliff, whereas attrition wears down the load.",
          yourTurn: {
            question:
              "Your turn: name the erosion process in which rocks carried by the waves knock into each other and become smaller and more rounded.",
            answer: { type: "text", accept: ["attrition"], display: "Attrition" },
            solution:
              "This is **attrition** — rock hitting rock. (Abrasion is rock hitting the cliff.)",
          },
        },
      ],
      keyPoints: [
        "Four erosion processes: hydraulic action, abrasion, attrition, solution.",
        "Hydraulic action = force of water plus compressed air in cracks.",
        "Abrasion = sand and pebbles thrown at the cliff; attrition = rocks hitting each other.",
        "Solution = seawater dissolving minerals, especially in chalk and limestone.",
        "Rate of erosion depends on rock type and structure, wave energy, fetch, beach width, weather and people.",
        "Rate of retreat = distance lost ÷ time taken (metres per year). Holderness: roughly 1–2 m a year on average.",
      ],
      whyItWorks:
        "Why do storms do so much more damage? A bigger wave carries far more energy — wave energy rises with the *square* of wave height, so a wave twice as tall carries about four times the energy. That energy lets the wave lift heavier stones and throw them harder (more abrasion) and slam into cracks with more force (more hydraulic action). Hydraulic action works because air is easy to squeeze: each wave crams air into a crack under pressure, and when the wave retreats the pressure is suddenly released. Repeated thousands of times a day, this push-and-release weakens the rock like bending a paperclip back and forth until it snaps.",
      strategies: ["Cause → process → effect", "Use figures from the source", "Compare and contrast", "Spot the misconception"],
      thinkDeeper:
        "A sea wall is built to stop erosion at one village on a soft-rock coast. A few years later, erosion speeds up at the next village along. Suggest why, using the idea that waves need sediment to build a protective beach.",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "mass-movement",
      heading: "Mass movement",
      discovery: {
        problem:
          "In June 1993, the Holbeck Hall Hotel stood on top of a boulder clay cliff in Scarborough, North Yorkshire. After a very wet spell, a huge section of the cliff slid away in a curved slab and the part of the hotel nearest the sea collapsed with it. Nobody pushed the cliff. So what made it give way at that moment?",
        idea:
          "**Water and gravity.** Rain soaked into the clay, making it heavier and weaker until the force of **gravity** pulling it downhill was greater than the friction holding it in place. This is **mass movement** — the movement of material down a slope under gravity. Over time, waves removing material from the foot of a cliff make it steeper and less supported; heavy rain is often the final trigger.",
      },
      body:
        "**Mass movement** is the downhill movement of material (rock, soil, clay) under the pull of **gravity**. On the coast it happens when cliffs have been undercut by waves, weakened by weathering, or loaded with water.\n\n**Three types you need**\n\n| Type | What happens | Typical rock | Speed |\n|---|---|---|---|\n| **Rockfall** | Pieces of rock break away from a steep cliff face and fall freely to the bottom | Hard, jointed rock such as chalk, limestone, granite | Sudden, very fast |\n| **Slumping (rotational slip)** | Saturated material slides down a **curved slip plane**; the block **rotates** and tilts back as it moves | Soft rock — clay, boulder clay | Can be sudden or slow |\n| **Sliding (landslide)** | A block slides down a **straight** slip plane, often a rock layer (bedding plane) that dips towards the sea | Layered rock that dips seawards | Sudden, fast |\n\nRockfalls often happen after freeze–thaw has loosened blocks, or when waves have cut a notch at the foot of the cliff, leaving the rock above unsupported.\n\n**Why saturated cliffs fail**\n\n1. Rain soaks into permeable rock, or into cracks in clay.\n2. The cliff becomes **heavier** — water adds weight.\n3. Water fills the spaces between particles and pushes them apart, **reducing friction** — it acts like a lubricant.\n4. If an impermeable layer stops the water draining, the water builds up along it and a slip plane forms.\n5. Meanwhile waves erode the **foot (toe)** of the cliff, removing support and steepening the slope.\n\nWhen the forces pulling material down (gravity, extra weight) become greater than the forces holding it up (friction, the strength of the rock), the cliff fails.\n\n**After a slump**, the cliff has a stepped profile: a steep, bare **scarp** at the top and tilted blocks below. Waves then remove the slumped material from the toe, the cliff steepens again, and the cycle repeats. This is a major reason why clay cliffs such as Holderness keep retreating.\n\n**Example: Holbeck Hall, Scarborough (June 1993).** A large rotational slip (slump) in the boulder clay cliff, after heavy rain, carried away the ground beneath the hotel's seaward side. That part of the building collapsed down the slope and the rest had to be demolished. Rockfalls are common on Dorset's Jurassic Coast too, where signs warn walkers to keep away from both the cliff edge and the cliff foot.\n\n> Weathering weakens → waves erode the toe → gravity brings the cliff down. Three processes, one retreating cliff.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a slump (rotational slip) in a clay cliff: rain soaks into the clay, a block slides down a curved slip plane and tilts back, leaving a scarp at the top, while waves erode the toe; the original cliff line is shown dashed" font-family="sans-serif"><defs><marker id="sl-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1f2937"/></marker></defs><rect width="480" height="300" fill="#ffffff"/><g stroke="#38bdf8" stroke-width="1.5"><line x1="30" y1="40" x2="24" y2="58"/><line x1="60" y1="46" x2="54" y2="64"/><line x1="90" y1="40" x2="84" y2="58"/><line x1="120" y1="46" x2="114" y2="64"/><line x1="150" y1="40" x2="144" y2="58"/><line x1="180" y1="46" x2="174" y2="64"/><line x1="210" y1="40" x2="204" y2="58"/></g><text x="120" y="28" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Heavy rain</text><polygon points="369,232 480,232 480,270" fill="#bae6fd"/><path d="M405,232 Q415,225 425,232 Q435,225 445,232" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M0,90 L230,90 C238,160 280,205 352,226 L480,270 L480,300 L0,300 Z" fill="#d6d3d1" stroke="#334155"/><path d="M242,138 L305,124 C318,150 345,196 378,235 L352,226 Q271,202 242,138 Z" fill="#fecaca" stroke="#334155"/><path d="M230,90 C238,160 280,205 352,226" fill="none" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="6 4"/><path d="M230,90 L300,90 L348,226" fill="none" stroke="#334155" stroke-dasharray="4 3"/><line x1="60" y1="96" x2="60" y2="128" stroke="#1f2937" stroke-width="1.5" marker-end="url(#sl-ah)"/><line x1="140" y1="96" x2="140" y2="128" stroke="#1f2937" stroke-width="1.5" marker-end="url(#sl-ah)"/><path d="M286,108 Q330,118 350,160" fill="none" stroke="#1f2937" stroke-width="1.5" marker-end="url(#sl-ah)"/><g font-size="11" fill="#1f2937"><text x="12" y="160">Rain soaks in: the clay becomes</text><text x="12" y="174">saturated, heavier and weaker</text><text x="12" y="250">Clay cliff (e.g. boulder clay)</text><text x="100" y="222">Curved slip plane</text><text x="246" y="114">Scarp</text><text x="304" y="84">Original cliff</text><text x="360" y="140">Slumped block tilts</text><text x="360" y="154">back as it slides</text><text x="478" y="220" text-anchor="end">Waves erode the toe</text></g><line x1="196" y1="218" x2="272" y2="194" stroke="#1f2937" marker-end="url(#sl-ah)"/></svg>`,
      diagramCaption:
        "A slump (rotational slip). Saturated clay slides down a curved slip plane (red dashes) and the block rotates, tilting back and leaving a bare scarp. Waves then remove the toe, so the cliff steepens and the cycle repeats.",
      workedExamples: [
        {
          title: "Building a model answer: why do clay cliffs slump?",
          problem: "Explain why slumping happens on clay cliffs such as those on the Holderness coast. (4 marks)",
          steps: [
            "Start with the trigger: heavy or long-lasting rain soaks into the clay through cracks.",
            "Explain effect 1: the clay becomes saturated, so it is **heavier**.",
            "Explain effect 2: water between the particles reduces friction, so the clay is **weaker** and slippery; it cannot drain away quickly.",
            "Add the waves: waves erode the toe of the cliff, removing support and steepening the slope.",
            "Finish with the failure: gravity overcomes friction and the clay slides down a curved slip plane, rotating as it goes.",
          ],
          answer:
            "After heavy rain, water soaks into the clay through cracks. The clay becomes saturated, which makes it heavier, and the water between the particles reduces friction, so it becomes weaker. At the same time waves erode the toe of the cliff, removing its support and making it steeper. Eventually gravity is greater than the friction holding the clay, so a mass of clay slides down a curved slip plane and rotates — a slump.",
          yourTurn: {
            question:
              "Your turn: name the type of mass movement in which saturated soft rock slides down a curved slip plane and rotates as it moves.",
            answer: {
              type: "text",
              accept: [
                "slumping",
                "slump",
                "rotational slip",
                "rotational slump",
                "rotational slumping",
                "rotational landslide",
                "rotational landslip",
              ],
              display: "Slumping (rotational slip)",
            },
            solution:
              "This is **slumping**, also called a **rotational slip**. A *slide* moves along a straight slip plane instead, and a *rockfall* drops freely from a steep face.",
          },
        },
        {
          title: "Reading the data: what does an average hide?",
          problem:
            "Measurements of how far a clay cliff retreated each year (m) over 10 years were: 1, 1, 0, 2, 9, 1, 0, 1, 2, 1. Calculate the mean rate of retreat and comment on the pattern.",
          steps: [
            "Add the values: 1 + 1 + 0 + 2 + 9 + 1 + 0 + 1 + 2 + 1 = 18 m.",
            "Divide by the number of years: 18 ÷ 10 = **1.8 m per year**.",
            "Look for the anomaly: one year lost 9 m — half of the total — probably a single slump after heavy rain.",
            "Comment: the mean hides the fact that retreat happens in sudden events, not as a steady crawl.",
          ],
          answer:
            "Mean = 1.8 m per year, but most of the loss came in one year (9 m), showing that mass movement makes cliff retreat sudden and uneven.",
          yourTurn: {
            question:
              "Your turn: a cliff retreated 2, 1, 0, 8, 1, 0, 1 and 3 m in eight successive years. What was the mean rate of retreat, in metres per year?",
            answer: { type: "number", value: 2, display: "2 m per year" },
            solution:
              "Total = 2 + 1 + 0 + 8 + 1 + 0 + 1 + 3 = 16 m. Mean = 16 ÷ 8 = 2 m per year. Notice that one year (8 m) accounts for half the total.",
          },
        },
      ],
      keyPoints: [
        "Mass movement = movement of material down a slope under gravity.",
        "Rockfall: rock falls freely from a steep, jointed cliff face.",
        "Slumping (rotational slip): saturated soft rock slides on a curved slip plane and rotates.",
        "Sliding: a block slides along a straight slip plane, such as a bedding plane dipping seawards.",
        "Rain makes cliffs heavier and reduces friction; waves remove the toe — together they trigger failure.",
        "Example: Holbeck Hall Hotel, Scarborough, collapsed in a rotational slip in June 1993.",
      ],
      whyItWorks:
        "Think of a cliff as a tug of war. Pulling material down: gravity, which gets stronger as the cliff gets heavier with water, and harder to resist as waves steepen the slope by eating away its toe. Holding it up: friction between particles and the strength of the rock. Water helps the 'down' team twice at once — it adds weight *and* pushes the particles apart, so there is less friction. Clay is especially risky because it lets water in through cracks but drains very slowly, so it stays saturated. In soft, fairly uniform material, the easiest path for failure is a curved, spoon-shaped surface, so the block swings round (rotates) as it slides — which is why a slump leaves its top tilted back towards the land.",
      strategies: ["Cause → process → effect", "Look for the anomaly", "Use figures from the source", "Sketch it"],
      thinkDeeper:
        "Engineers sometimes stop a clay cliff slumping by draining water out of it rather than by building a sea wall. Explain why removing water could be as effective as stopping the waves — and why the best schemes often do both.",
    },
  ],
  learn: {
    flashcards: [
      { front: "Coast", back: "The zone where the land meets the sea. Its position changes with the tides and over time." },
      { front: "Fetch", back: "The distance of open water over which the wind blows. A longer fetch gives bigger, more powerful waves." },
      { front: "Swash", back: "The rush of water up the beach after a wave breaks." },
      { front: "Backwash", back: "The water flowing back down the beach under gravity after a wave breaks." },
      { front: "Constructive wave", back: "A low, gentle wave with a long wavelength (about 6–8 a minute) with a strong swash and weak backwash. It builds up beaches." },
      { front: "Destructive wave", back: "A tall, steep wave (about 10–14 a minute) with a weak swash and strong backwash. It erodes beaches." },
      { front: "Prevailing wind", back: "The direction the wind blows from most often. In the UK it is the south-west." },
      { front: "Why do waves break?", back: "In shallow water, friction with the seabed slows the base of the wave; the top keeps going, so the wave steepens and topples over." },
      { front: "Weathering", back: "The breakdown of rock in place (in situ) by weather, chemicals or living things. Nothing is moved away." },
      { front: "Erosion", back: "The wearing away and removal of material by a moving force such as waves." },
      { front: "Freeze–thaw weathering", back: "Water in a crack freezes and expands by about 9%, widening the crack; it thaws and seeps deeper; repeated cycles break the rock." },
      { front: "Salt weathering", back: "Seawater in cracks evaporates; salt crystals grow and force the rock apart." },
      { front: "Carbonation", back: "Chemical weathering: rainwater (weak carbonic acid) reacts with calcium carbonate in limestone and chalk, which is dissolved and washed away." },
      { front: "Biological weathering", back: "Breakdown of rock by living things — plant roots in cracks, burrowing animals, rock-boring shellfish." },
      { front: "Hydraulic action", back: "Erosion by the force of the water hitting the cliff and compressing air in cracks, which then expands and breaks the rock." },
      { front: "Abrasion", back: "Erosion when waves throw sand and pebbles at the cliff, wearing it away like sandpaper." },
      { front: "Attrition", back: "Rocks carried by waves knock into each other and become smaller and more rounded." },
      { front: "Solution (coastal erosion)", back: "Seawater dissolving minerals in the rock, especially calcium carbonate in chalk and limestone." },
      { front: "Mass movement", back: "The movement of material down a slope under the influence of gravity." },
      { front: "Rockfall", back: "Pieces of rock break away from a steep cliff face and fall freely to the bottom." },
      { front: "Slumping (rotational slip)", back: "Saturated soft rock such as clay slides down a curved slip plane, rotating and tilting back as it moves." },
      { front: "Sliding (landslide)", back: "A block of rock slides down a straight slip plane, such as a bedding plane dipping towards the sea." },
    ],
    mustKnow: [
      "Can you define a coast and name the backshore, foreshore, nearshore and offshore zones?",
      "Can you describe the coast as a system of inputs, processes and outputs, with examples of each?",
      "Can you explain how wind makes waves and name the three factors that control wave size (wind speed, duration, fetch)?",
      "Can you explain why waves break and define swash and backwash?",
      "Can you compare constructive and destructive waves (shape, frequency, swash and backwash, effect on the beach)?",
      "Can you explain the difference between weathering (in place) and erosion (removal by a moving force)?",
      "Can you describe freeze–thaw and salt weathering step by step?",
      "Can you explain carbonation and say which rocks it affects?",
      "Can you name and explain the four erosion processes without mixing up abrasion and attrition?",
      "Can you explain why rock type, wave energy and fetch affect the rate of erosion, using Holderness as an example?",
      "Can you calculate a rate of cliff retreat (distance ÷ time) and use it to make a cautious prediction?",
      "Can you describe rockfall, slumping and sliding, and explain why saturated cliffs fail?",
      "Can you give a Singapore example of coastal change, such as land reclamation adding roughly a quarter to its land area?",
    ],
    misconceptions: [
      { wrong: "Weathering and erosion are the same thing.", right: "Weathering breaks rock down in place; erosion wears material away AND removes it using a moving force such as waves." },
      { wrong: "The water in a wave travels all the way across the ocean to the beach.", right: "Out at sea, the water mainly moves in circles; it is the energy that travels forward. Water only surges forward once the wave breaks." },
      { wrong: "Freeze–thaw happens anywhere that is very cold.", right: "It needs temperatures that swing above AND below 0 °C. If rock stays frozen all the time, the ice never melts and refreezes." },
      { wrong: "Abrasion and attrition both mean rocks wearing away the cliff.", right: "Abrasion is rocks thrown at the cliff; attrition is rocks hitting each other, wearing down the load, not the cliff." },
      { wrong: "Destructive waves are simply big waves, and constructive waves are small ones.", right: "The difference is the balance of swash and backwash: destructive waves are steep and frequent with a strong backwash; constructive waves have a strong swash." },
      { wrong: "Mass movement is caused by the waves.", right: "Mass movement is caused by gravity. Waves can undercut the cliff and rain can trigger failure, but gravity moves the material." },
      { wrong: "Hard rock does not erode.", right: "All rock erodes; hard rock like granite simply erodes very slowly, often along joints and cracks." },
      { wrong: "Singapore has small waves, so it has no coastal problems.", right: "Much of Singapore's coast is low-lying reclaimed land, so it must be protected, especially as sea levels rise." },
    ],
    examMistakes: [
      "Writing 'erosion' when describing freeze–thaw or carbonation — these are weathering processes because nothing is carried away.",
      "Saying 'attrition wears away the cliff' — attrition wears down the rocks the waves carry, not the cliff.",
      "Describing hydraulic action as 'water dissolving the rock' — that is solution; hydraulic action is force and compressed air.",
      "Mixing up which wave has the strong swash: constructive = strong swash, destructive = strong backwash.",
      "Leaving out units in a rate of retreat — always write metres per year (m per year).",
      "Dividing the wrong way round in a retreat calculation — rate = distance lost ÷ time taken.",
      "Listing processes in an 'explain' question without saying HOW they work — use 'because' and 'so' to build a chain.",
      "Saying 'longer fetch means stronger wind' — fetch is a distance of open water, not a wind speed.",
    ],
    mnemonics: [
      {
        topic: "The four erosion processes",
        device: "HAAS — Hungry Animals Attack Sandcastles",
        explanation: "Hydraulic action, Abrasion, Attrition, Solution.",
      },
      {
        topic: "The three types of weathering",
        device: "My Cliff's Breaking (MCB)",
        explanation: "Mechanical (physical), Chemical, Biological — and remember: weathering happens in place.",
      },
      {
        topic: "Constructive vs destructive waves",
        device: "Constructive = Swash Strong; Destructive = Drags it back",
        explanation: "Constructive waves have a strong swash that builds the beach; destructive waves have a strong backwash that drags material away.",
      },
      {
        topic: "Abrasion vs attrition",
        device: "aTTrition = Two rocks Touching",
        explanation: "Attrition is rock hitting rock. Abrasion is rock hitting the cliff — like sandpaper.",
      },
    ],
    realWorld: [
      {
        title: "Singapore's reclaimed coastline",
        detail:
          "Singapore's land area has grown from about 580 km² in the 1960s to about 735 km² today — roughly a quarter more — by reclaiming land from the sea. Marina Bay, East Coast Park, much of Changi Airport and Jurong Island (formed by joining seven small islands) are all on reclaimed land.",
        emoji: "🏗️",
      },
      {
        title: "Singapore and rising seas",
        detail:
          "Much of Singapore is only a few metres above sea level, and sea levels around it could rise by up to about 1 m by 2100. In 2019 the government said protecting the coast could cost about S$100 billion or more over the next 100 years, and ideas such as a 'Long Island' of reclaimed land off the East Coast have been proposed.",
        emoji: "🌊",
      },
      {
        title: "Holderness, East Yorkshire",
        detail:
          "About 60 km of soft boulder clay cliffs facing the North Sea retreat by roughly 1–2 m a year on average, making this one of the fastest-eroding coastlines in Europe. Textbooks often say around 29 villages have been lost since Roman times.",
        emoji: "🏚️",
      },
      {
        title: "Holbeck Hall Hotel, Scarborough",
        detail:
          "In June 1993, after heavy rain, a rotational slip in the boulder clay cliff carried away the ground beneath this cliff-top hotel. The seaward part collapsed and the rest of the building had to be demolished — a classic example of slumping.",
        emoji: "🏨",
      },
      {
        title: "Land's End, Cornwall",
        detail:
          "Hard granite cliffs face the full force of Atlantic waves driven by the south-westerly prevailing wind over a long fetch, yet erode very slowly — proof that rock type matters as much as wave energy.",
        emoji: "🪨",
      },
      {
        title: "Dorset's Jurassic Coast",
        detail:
          "Chalk, limestone and clay cliffs along this World Heritage coast experience regular rockfalls and landslides, which is why signs warn walkers to keep away from both the cliff edge and the cliff foot.",
        emoji: "⚠️",
      },
    ],
    videos: [
      {
        title: "Coastal erosion processes: hydraulic action, abrasion, attrition, solution",
        channel: "YouTube search",
        url: "https://www.youtube.com/results?search_query=coastal+erosion+processes+hydraulic+action+abrasion+attrition+solution",
      },
      {
        title: "Constructive and destructive waves",
        channel: "YouTube search",
        url: "https://www.youtube.com/results?search_query=constructive+and+destructive+waves+geography",
      },
      {
        title: "Freeze–thaw, salt and chemical weathering",
        channel: "YouTube search",
        url: "https://www.youtube.com/results?search_query=freeze+thaw+weathering+coasts+geography",
      },
      {
        title: "Mass movement at the coast: rockfall, slumping and sliding",
        channel: "YouTube search",
        url: "https://www.youtube.com/results?search_query=coastal+mass+movement+slumping+rockfall+geography",
      },
      {
        title: "Holderness coast erosion",
        channel: "YouTube search",
        url: "https://www.youtube.com/results?search_query=holderness+coast+erosion",
      },
      {
        title: "Singapore land reclamation",
        channel: "YouTube search",
        url: "https://www.youtube.com/results?search_query=singapore+land+reclamation+history",
      },
    ],
    formulas: [
      { name: "Coast", formula: "The zone where the land meets the sea." },
      { name: "Fetch", formula: "The distance of open water over which the wind blows; longer fetch → bigger waves." },
      { name: "Swash / backwash", formula: "Swash: water rushing up the beach after a wave breaks. Backwash: water flowing back down the beach under gravity." },
      { name: "Constructive wave", formula: "Low, long wave, about 6–8 a minute; strong swash, weak backwash; builds beaches.", note: "Frequency ranges vary slightly between textbooks." },
      { name: "Destructive wave", formula: "Tall, steep wave, about 10–14 a minute; weak swash, strong backwash; erodes beaches.", note: "Frequency ranges vary slightly between textbooks." },
      { name: "Prevailing wind", formula: "The direction from which the wind most often blows (south-west in the UK)." },
      { name: "Weathering", formula: "The breakdown of rock in place by weather, chemicals or living things." },
      { name: "Erosion", formula: "The wearing away and removal of material by a moving force such as waves." },
      { name: "Freeze–thaw", formula: "Water in cracks freezes and expands by about 9%, widening the crack; repeated cycles above and below 0 °C break the rock." },
      { name: "Salt weathering", formula: "Salt crystals grow in cracks as seawater evaporates and force the rock apart." },
      { name: "Carbonation", formula: "Weak carbonic acid in rainwater reacts with calcium carbonate in limestone and chalk, dissolving it." },
      { name: "Hydraulic action", formula: "The force of waves hitting a cliff, compressing air in cracks so the rock breaks apart." },
      { name: "Abrasion", formula: "Waves throw sand and pebbles at the cliff, wearing it away like sandpaper (also called corrasion)." },
      { name: "Attrition", formula: "Rocks carried by waves hit each other and become smaller and more rounded." },
      { name: "Solution", formula: "Seawater dissolves minerals in rock, especially calcium carbonate (also called corrosion)." },
      { name: "Mass movement", formula: "The movement of material down a slope under gravity: rockfall, slumping (rotational slip) or sliding." },
      { name: "Rate of cliff retreat", formula: "Distance lost ÷ time taken, in metres per year.", note: "Holderness: roughly 1–2 m a year on average." },
      { name: "Singapore land reclamation", formula: "Land area grew from about 580 km² (1960s) to about 735 km² today — roughly a quarter more." },
    ],
  },
};
