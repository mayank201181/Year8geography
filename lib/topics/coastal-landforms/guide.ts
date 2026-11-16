import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "coastal-landforms",
  title: "Coastal Processes & Landforms",
  strand: "Coasts",
  icon: "🏖️",
  summary: "How waves carve headlands, arches and stacks, build spits and tombolos — and how we try to hold the line.",
  intro:
    "The coast is a battleground between land and sea. Waves erode some rocks in a few decades and barely scratch others in thousands of years; they pick up sand in one place and drop it kilometres away. In this topic you will learn how erosion turns hard and soft rock into **headlands and bays**, how a crack in a cliff becomes a **cave, arch, stack and stump**, how **longshore drift** moves sediment along the coast, how that sediment builds **beaches, spits, bars and tombolos**, and how people — from Dorset to Singapore — decide whether, and how, to defend the coastline. Classic examples come from the Dorset coast (Swanage Bay, Old Harry Rocks, Durdle Door, Chesil Beach) and the Holderness coast (Spurn Head), alongside Singapore's almost completely defended shoreline.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "headlands-bays",
      heading: "Headlands and bays",
      discovery: {
        problem:
          "Look at the coast near Swanage in Dorset. In a few kilometres it juts out into the sea at Handfast Point, curves inland at Swanage Bay, then juts out again at Durlston Head. The same waves hit the whole stretch of coast. So why isn't the coastline a straight line?",
        idea:
          "The waves are the same, but the **rocks** are not. Chalk and limestone are hard and resist erosion, so they are left sticking out as **headlands**. The sands and clays between them are soft and are worn back into **bays**. This is called **differential erosion** — different rocks eroding at different rates.",
      },
      body:
        "Coasts are shaped by **erosion** (the sea wearing rock away and removing it), **transportation** and **deposition**. This section is about how erosion picks out weak and strong rocks.\n\n**Four processes of marine erosion**\n\n| Process | What happens |\n|---|---|\n| Hydraulic action | Waves smash into the cliff and force air and water into cracks. The pressure widens the cracks and breaks off rock. |\n| Abrasion | Waves hurl sand and pebbles at the cliff, scraping it like sandpaper. Often the most effective process. |\n| Attrition | Rocks and pebbles carried by the sea knock into **each other**, becoming smaller and rounder. |\n| Solution (corrosion) | Seawater slowly dissolves minerals from some rocks, especially chalk and limestone (calcium carbonate). |\n\n**Hard rock and soft rock**\n\n- **Resistant (hard) rocks** such as chalk, limestone and granite erode slowly.\n- **Less resistant (soft) rocks** such as clay and sand erode quickly.\n\nWhere bands of hard and soft rock meet the sea, the soft rock is worn back faster. It forms a **bay** — a curved inlet, usually with a beach. The hard rock is left sticking out as a **headland**, often with steep cliffs.\n\n**Discordant and concordant coastlines**\n\n- **Discordant**: bands of rock run at **right angles** to the coast, so the sea meets hard and soft rock in turn → alternating headlands and bays.\n- **Concordant**: bands of rock run **parallel** to the coast, so the sea meets one rock type along its length → a fairly straight coastline. If the sea breaks through the hard outer band, it can scoop out the softer rock behind to make a rounded **cove**, such as Lulworth Cove in Dorset.\n\n**Case study: Swanage, Dorset — a discordant coast**\n\nOn the Isle of Purbeck the rock bands run roughly west to east and meet the east-facing coast at right angles. From north to south:\n\n1. **Studland Bay** — soft sands and clays.\n2. **Handfast Point** — a chalk headland, home of the stacks called Old Harry Rocks.\n3. **Swanage Bay** — soft Wealden clays and sands.\n4. **Durlston Head** — a headland of hard Purbeck and Portland limestone.\n\n> Once a headland sticks out, waves **refract** (bend) around it. Their energy is concentrated on the headland and spread out across the bay. So headlands keep being attacked — producing caves, arches and stacks — while bays become sheltered places where sand is deposited as beaches.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of the discordant coast near Swanage, Dorset. Bands of rock run west to east and meet the sea at right angles. Hard chalk at Handfast Point and hard limestone at Durlston Head stick out as headlands; soft sands and clays have been worn back into Studland Bay and Swanage Bay."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="0" y="0" width="480" height="300" fill="#bae6fd"/><path d="M0,0 L305,0 Q205,45 325,95 L0,95 Z" fill="#fde68a" stroke="#334155"/><path d="M0,95 L325,95 L398,104 L402,118 L396,140 L320,152 L0,152 Z" fill="#f3f4f6" stroke="#334155"/><path d="M0,152 L320,152 Q205,195 330,240 L0,240 Z" fill="#fde68a" stroke="#334155"/><path d="M0,240 L330,240 L378,250 L382,280 L368,300 L0,300 Z" fill="#d6d3d1" stroke="#334155"/><circle cx="415" cy="113" r="5" fill="#f3f4f6" stroke="#334155"/><circle cx="427" cy="124" r="3" fill="#f3f4f6" stroke="#334155"/><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="12" y="50">Sands and clays (soft)</text><text x="12" y="128" font-weight="bold">Chalk (hard)</text><text x="12" y="200">Wealden clays and sands (soft)</text><text x="12" y="275" font-weight="bold">Limestone (hard)</text><text x="270" y="50" font-style="italic">Studland Bay</text><text x="474" y="90" text-anchor="end" font-weight="bold">Handfast Point</text><text x="474" y="168" text-anchor="end">Old Harry Rocks (stacks)</text><text x="275" y="200" font-style="italic">Swanage Bay</text><text x="474" y="272" text-anchor="end" font-weight="bold">Durlston Head</text><text x="420" y="222" text-anchor="middle" fill="#0369a1">English Channel</text><text x="10" y="314">Rock bands meet the coast at right angles = discordant coastline</text></g><line x1="430" y1="128" x2="440" y2="156" stroke="#334155" stroke-dasharray="3 2"/><line x1="440" y1="40" x2="440" y2="20" stroke="#1f2937" stroke-width="2"/><polygon points="440,8 435,20 445,20" fill="#1f2937"/><text x="452" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">N</text></svg>`,
      diagramCaption:
        "The Swanage coast (simplified, north at the top). Hard chalk and limestone form headlands; soft sands and clays have been eroded back into Studland Bay and Swanage Bay.",
      workedExamples: [
        {
          title: "Calculation: how far back does the bay erode?",
          problem:
            "On a made-up coastline, a band of clay erodes at about 0.8 m per year and the band of chalk next to it erodes at about 0.05 m per year. Both started in a straight line. After 500 years, how much further inland is the clay coast than the chalk coast?",
          steps: [
            "Clay retreat = 0.8 × 500 = 400 m.",
            "Chalk retreat = 0.05 × 500 = 25 m.",
            "Difference = 400 − 25 = 375 m.",
            "So the clay has been worn back into a bay set about 375 m behind the chalk headland.",
          ],
          answer: "About 375 m — the clay forms a bay and the chalk forms a headland.",
          yourTurn: {
            question:
              "A band of sand erodes at 1.2 m per year and a band of limestone next to it erodes at 0.2 m per year. Starting from a straight coastline, how many metres further back will the sand coast be after 300 years?",
            answer: { type: "number", value: 300, display: "300 m" },
            solution: "Sand: 1.2 × 300 = 360 m. Limestone: 0.2 × 300 = 60 m. Difference: 360 − 60 = 300 m, so the bay is set back 300 m behind the headland.",
          },
        },
        {
          title: "Model answer: Explain how headlands and bays form. [4]",
          problem: "Explain how headlands and bays form. [4 marks]",
          steps: [
            "Point 1 — the geology: 'Headlands and bays form on a discordant coastline, where bands of hard and soft rock meet the coast at right angles.'",
            "Point 2 — the soft rock: 'Soft rock such as clay is eroded quickly by hydraulic action and abrasion, so it is worn back to form a bay.'",
            "Point 3 — the hard rock: 'Hard rock such as chalk is more resistant, so it erodes more slowly and is left sticking out into the sea as a headland.'",
            "Point 4 — an example or developed point: 'For example, at Swanage in Dorset, soft Wealden clays have been eroded into Swanage Bay, while chalk forms the headland of Handfast Point.'",
            "Check: each sentence explains **why** (rock strength, erosion rate), not just **what** the landform looks like.",
          ],
          answer:
            "Four linked points: discordant geology → soft rock eroded quickly into a bay → hard rock resists and is left as a headland → named example (Swanage Bay and Handfast Point).",
        },
      ],
      keyPoints: [
        "Differential erosion: soft rock erodes faster than hard rock.",
        "Soft rock → bay; hard rock → headland.",
        "Discordant coast = rock bands at right angles to the coast; concordant = rock bands parallel to it.",
        "Four erosion processes: hydraulic action, abrasion, attrition and solution.",
        "Swanage Bay (soft clays) lies between Handfast Point (chalk) and Durlston Head (limestone).",
      ],
      whyItWorks:
        "How fast a rock erodes depends on how strong it is. Chalk and limestone are strong, well-cemented rocks; clay and sand are only loosely held together, so hydraulic action and abrasion break them apart quickly. Give the same waves the same amount of time and the soft rock simply loses more ground, so the coast becomes a zig-zag of headlands and bays. The pattern then reinforces itself: waves bend round the headlands and focus their energy there, while the bays become sheltered and collect beaches.",
      strategies: ["Cause → process → effect", "Use the command word", "Sketch it"],
      thinkDeeper:
        "Waves concentrate their energy on headlands, while bays become sheltered behind their beaches. What should happen to a headland-and-bay coastline over many thousands of years? Could it eventually become straighter again?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "cave-arch-stack",
      heading: "Cliffs, caves, arches, stacks & stumps",
      discovery: {
        problem:
          "Old Harry is a tall pillar of white chalk standing in the sea just off Handfast Point in Dorset, cut off from the cliffs. Nobody built it and nobody moved it. How did a column of rock end up standing on its own in the sea?",
        idea:
          "Old Harry used to be part of the headland. The sea found a weakness — a crack — and over thousands of years widened it into a cave, broke through to make an arch, and then the arch roof collapsed. The pillar left behind is a **stack**. Its neighbour, Old Harry's Wife, collapsed in the late 1800s and is now a low **stump**.",
      },
      body:
        "**Cliffs, notches and wave-cut platforms**\n\nWaves attack the foot of a cliff hardest between the high- and low-tide levels.\n\n1. Hydraulic action and abrasion cut a **wave-cut notch** at the base of the cliff.\n2. The notch gets deeper, leaving an **overhang** of rock above it.\n3. **Weathering** weakens the cliff from above — for example **freeze–thaw** (water in cracks freezes, expands by about 9% and prises the rock apart), salt crystals growing in cracks, or plant roots.\n4. The overhang becomes too heavy and collapses. Waves wash the fallen rock away, and the process starts again.\n5. As the cliff **retreats** inland, it leaves behind a gently sloping, rocky **wave-cut platform**, exposed at low tide.\n\n**From crack to stump**\n\nHeadlands are attacked from both sides because waves bend around them.\n\n| Stage | What happens | Main processes |\n|---|---|---|\n| 1 Crack | A joint or fault is a line of weakness in the headland. | Hydraulic action |\n| 2 Cave | The crack is widened and deepened into a cave. | Hydraulic action, abrasion |\n| 3 Arch | The cave is eroded right through the headland (or two caves back-to-back meet). | Abrasion, hydraulic action |\n| 4 Stack | The base of the arch is widened, weathering weakens the roof, and it collapses — leaving an isolated pillar. | Erosion below, weathering above |\n| 5 Stump | The stack is undercut at its base and collapses, leaving a low stump covered at high tide. | Erosion, weathering |\n\n**Weathering is not erosion.** Weathering is the breakdown of rock **in place** by the weather, chemicals or living things. Erosion is the wearing away **and removal** of rock by a moving force such as waves. Arches lose their roofs through both: erosion from below and weathering from above.\n\n**Examples on the Dorset coast** (part of the Jurassic Coast World Heritage Site)\n\n- **Old Harry Rocks**, Handfast Point: chalk stacks. Old Harry's Wife, once a stack, collapsed in the late 1800s (usually dated to 1896) and is now a stump.\n- **Durdle Door**, near Lulworth: a famous natural **arch** of Portland limestone. One day its roof is expected to collapse, leaving a stack.\n\nOther famous examples: the Needles (chalk stacks, Isle of Wight) and the Twelve Apostles (limestone stacks, Victoria, Australia).",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top: a headland seen from the side showing five stages, a crack, a cave, an arch, a stack and a stump that is covered at high tide. Bottom: cross-section of a cliff with a wave-cut notch and overhang at high-tide level, a wave-cut platform exposed at low tide, and a dashed line showing where the cliff used to be."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="0" y="150" width="480" height="35" fill="#bae6fd"/><path d="M0,185 L0,40 L140,40 L140,185 Z" fill="#d6d3d1" stroke="#334155"/><polyline points="45,40 50,60 44,80 50,100 46,118" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M95,185 L95,150 Q112,118 129,150 L129,185 Z" fill="#78716c" stroke="#334155"/><path d="M165,185 L165,52 L265,52 L265,185 L238,185 L238,140 Q215,104 192,140 L192,185 Z" fill="#d6d3d1" stroke="#334155"/><path d="M298,185 L300,66 L312,60 L330,64 L332,185 Z" fill="#d6d3d1" stroke="#334155"/><path d="M372,185 L374,160 L404,158 L406,185 Z" fill="#d6d3d1" stroke="#334155"/><line x1="0" y1="150" x2="480" y2="150" stroke="#0369a1" stroke-dasharray="5 3"/><line x1="0" y1="170" x2="480" y2="170" stroke="#0369a1" stroke-dasharray="2 3"/><line x1="389" y1="34" x2="389" y2="155" stroke="#334155" stroke-dasharray="3 3"/><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold"><text x="47" y="30">1 Crack</text><text x="112" y="30">2 Cave</text><text x="215" y="30">3 Arch</text><text x="315" y="30">4 Stack</text><text x="389" y="30">5 Stump</text></g><g font-family="sans-serif" font-size="11" fill="#0369a1" text-anchor="end"><text x="476" y="146">high tide</text><text x="476" y="166">low tide</text></g><line x1="0" y1="196" x2="480" y2="196" stroke="#94a3b8"/><text x="10" y="214" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">Cross-section of a retreating cliff</text><rect x="180" y="262" width="300" height="58" fill="#bae6fd"/><path d="M0,225 L200,225 L200,250 L184,262 L200,274 L206,282 L480,298 L480,320 L0,320 Z" fill="#d6d3d1" stroke="#334155"/><line x1="180" y1="262" x2="480" y2="262" stroke="#0369a1" stroke-dasharray="5 3"/><line x1="206" y1="292" x2="480" y2="292" stroke="#0369a1" stroke-dasharray="2 3"/><polyline points="200,225 262,225 262,285" fill="none" stroke="#334155" stroke-dasharray="4 3"/><line x1="300" y1="246" x2="216" y2="246" stroke="#b91c1c" stroke-width="2"/><polygon points="208,246 218,241 218,251" fill="#b91c1c"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="268" y="236">old cliff line</text><text x="304" y="250" fill="#b91c1c">cliff retreats inland</text><text x="178" y="248" text-anchor="end">overhang</text><text x="178" y="270" text-anchor="end">wave-cut notch</text><text x="340" y="313" text-anchor="middle">wave-cut platform</text><text x="476" y="259" text-anchor="end" fill="#0369a1">HT</text><text x="476" y="289" text-anchor="end" fill="#0369a1">LT</text></g></svg>`,
      diagramCaption:
        "Top: a headland is eroded from crack to cave, arch, stack and stump (Old Harry is a stack; Durdle Door is an arch). Bottom: undercutting at high-tide level forms a notch; collapse makes the cliff retreat and leaves a wave-cut platform.",
      workedExamples: [
        {
          title: "Model answer: Explain the formation of a stack. [4]",
          problem: "Explain the formation of a stack. [4 marks]",
          steps: [
            "Point 1 — the weakness: 'Waves attack a line of weakness, such as a crack or joint, in a headland.'",
            "Point 2 — the cave: 'Hydraulic action forces water and air into the crack and abrasion scrapes at it, widening it into a cave.'",
            "Point 3 — the arch: 'The cave is eroded right through the headland to form an arch, such as Durdle Door in Dorset.'",
            "Point 4 — the stack: 'The base of the arch is eroded and weathering such as freeze–thaw weakens the roof until it collapses, leaving an isolated pillar of rock called a stack, such as Old Harry.'",
            "Check: every step names a **process**. 'The cave turns into an arch' scores less than 'abrasion erodes the cave right through the headland'.",
          ],
          answer:
            "Crack → widened into a cave by hydraulic action and abrasion → eroded through into an arch → the arch roof collapses (erosion below, weathering above) → stack.",
          yourTurn: {
            question:
              "A stack is undercut by the waves until it collapses, leaving a low block of rock that is covered by the sea at high tide. What is this landform called?",
            answer: { type: "text", accept: ["stump", "a stump", "sea stump", "stumps"] },
            solution: "It is a **stump** — the last stage of crack → cave → arch → stack → stump. Old Harry's Wife in Dorset is an example.",
          },
        },
        {
          title: "Calculation: how old is the wave-cut platform?",
          problem:
            "A wave-cut platform in front of a chalk cliff is about 200 m wide. If the cliff has retreated at an average of about 0.4 m per year, roughly how long has the platform taken to form?",
          steps: [
            "The width of the platform ≈ the distance the cliff has retreated.",
            "Time = distance ÷ rate = 200 ÷ 0.4.",
            "200 ÷ 0.4 = 500 years.",
          ],
          answer: "About 500 years — only a rough estimate, because real retreat rates change from year to year.",
          yourTurn: {
            question:
              "A wave-cut platform is 150 m wide and the cliff behind it has retreated at about 0.25 m per year. Roughly how many years has the platform taken to form?",
            answer: { type: "number", value: 600, display: "600 years" },
            solution: "Time = distance ÷ rate = 150 ÷ 0.25 = 600 years.",
          },
        },
      ],
      keyPoints: [
        "Wave-cut notch → overhang → collapse → cliff retreats, leaving a wave-cut platform.",
        "Sequence: crack → cave → arch → stack → stump.",
        "Hydraulic action and abrasion do the erosion; weathering (e.g. freeze–thaw) weakens arch roofs and cliff tops.",
        "Weathering breaks rock down in place; erosion wears it away and removes it.",
        "Old Harry Rocks = chalk stacks (Handfast Point); Durdle Door = limestone arch.",
      ],
      whyItWorks:
        "Why does an arch become a stack? An arch is a bridge of rock with nothing underneath it. The sea keeps eroding its base and widening the gap, while rain, frost and salt weaken the roof from above. Eventually the roof cannot support its own weight and falls — and the part left standing on its own is a stack. The same idea, undercut and then collapse, explains how a notch makes a cliff retreat and how a stack becomes a stump.",
      strategies: ["Cause → process → effect", "Use the command word", "Sketch it", "PEEL paragraph"],
      thinkDeeper:
        "Durdle Door is limestone; Old Harry is chalk. Both are 'hard' rocks, yet arches and stacks form in both. What does that tell you about how important cracks and joints are, compared with the type of rock?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "longshore-drift",
      heading: "Transportation & longshore drift",
      discovery: {
        problem:
          "On many British beaches, wooden fences called groynes run down the beach into the sea. Look closely and you'll see sand piled high on one side of each groyne and much lower on the other. If waves just wash up and down a beach, why would sand pile up on only one side?",
        idea:
          "Waves don't just go straight up and down — they usually arrive at an **angle**, pushed by the prevailing wind. Each wave nudges sand a little way **along** the beach, so sediment travels sideways in a zig-zag. That is **longshore drift**. A groyne blocks it, so sand piles up on the side the drift is coming from.",
      },
      body:
        "**How the sea transports material**\n\n| Process | What moves | How |\n|---|---|---|\n| Traction | Large boulders | Rolled along the sea bed |\n| Saltation | Pebbles and coarse sand | Bounced along the sea bed |\n| Suspension | Fine sand, silt and clay | Carried along within the water (this makes the sea look murky) |\n| Solution | Dissolved minerals, e.g. from chalk and limestone | Carried invisibly, dissolved in the water |\n\nThe more energy the waves have, the larger the material they can move. Storm waves can roll boulders; calm waves move only sand.\n\n**Longshore drift: step by step**\n\n1. The **prevailing wind** (the most common wind direction — in southern Britain, from the south-west) drives waves towards the coast **at an angle**.\n2. The **swash** (water rushing up the beach after a wave breaks) carries sand and shingle up the beach **at the same angle**.\n3. The **backwash** (water draining back) flows **straight back down** the beach, at right angles to the coastline, because **gravity** pulls it down the steepest slope.\n4. The sediment ends up a little further along the beach than where it started.\n5. This repeats with every wave — thousands a day — so sediment moves along the coast in a **zig-zag**.\n\n> The **swash** follows the wind; the **backwash** follows gravity. Overall, sediment moves along the coast in the direction the swash points — never in the direction of the backwash.\n\n**Evidence of longshore drift**\n\n- Sand and shingle piled up on one side of **groynes** (the updrift side).\n- **Spits** growing out across river mouths in the direction of the drift.\n- Fieldwork: paint or tag some pebbles, place them on the beach and measure how far along they have moved after a few hours.\n\n**Example: the Holderness coast, Yorkshire**\n\nHolderness is made of soft **boulder clay** (till) and is one of the fastest-eroding coastlines in Europe — on average roughly 1.5–2 m a year. Waves arriving mainly from the north-east, across the open North Sea, drive longshore drift **southwards**. Much of the eroded sand and shingle is carried to **Spurn Head**, a spit at the mouth of the Humber estuary. Some of the finest clay is carried away in suspension, out to sea.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top: plan view of a beach with land at the top and sea at the bottom. The prevailing wind blows from the south-west. Swash arrows go up the beach at an angle, backwash arrows go straight back down, so a pebble zig-zags to the right along the beach. Bottom: four transport processes, traction rolling a boulder, saltation bouncing a pebble, suspension carrying fine particles and solution carrying dissolved minerals."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="0" y="0" width="480" height="40" fill="#bbf7d0"/><rect x="0" y="40" width="480" height="70" fill="#fde68a"/><rect x="0" y="110" width="480" height="85" fill="#bae6fd"/><text x="12" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">Net movement of sand and shingle along the coast</text><line x1="335" y1="21" x2="458" y2="21" stroke="#1f2937" stroke-width="2.5"/><polygon points="470,21 458,15 458,27" fill="#1f2937"/><g stroke="#1d4ed8" stroke-width="2"><line x1="40" y1="100" x2="85" y2="60"/><line x1="90" y1="100" x2="135" y2="60"/><line x1="140" y1="100" x2="185" y2="60"/><line x1="190" y1="100" x2="235" y2="60"/></g><g fill="#1d4ed8"><polygon points="90,55 86,64 80.6,58"/><polygon points="140,55 136,64 130.6,58"/><polygon points="190,55 186,64 180.6,58"/><polygon points="240,55 236,64 230.6,58"/></g><g stroke="#b91c1c" stroke-width="2" stroke-dasharray="4 3"><line x1="90" y1="57" x2="90" y2="88"/><line x1="140" y1="57" x2="140" y2="88"/><line x1="190" y1="57" x2="190" y2="88"/><line x1="240" y1="57" x2="240" y2="88"/></g><g fill="#b91c1c"><polygon points="90,96 86,87 94,87"/><polygon points="140,96 136,87 144,87"/><polygon points="190,96 186,87 194,87"/><polygon points="240,96 236,87 244,87"/></g><circle cx="40" cy="101" r="4" fill="#57534e"/><circle cx="240" cy="101" r="4" fill="#57534e"/><g font-family="sans-serif" font-size="11"><text x="262" y="62" fill="#1d4ed8" font-weight="bold">Swash: up the beach at an angle,</text><text x="262" y="75" fill="#1d4ed8">pushed by the breaking wave</text><text x="262" y="92" fill="#b91c1c" font-weight="bold">Backwash: straight back down,</text><text x="262" y="105" fill="#b91c1c">pulled by gravity</text><text x="6" y="98" fill="#1f2937">start</text></g><g stroke="#0369a1" stroke-width="2"><line x1="110" y1="118" x2="165" y2="173"/><line x1="150" y1="118" x2="205" y2="173"/><line x1="190" y1="118" x2="245" y2="173"/></g><text x="120" y="190" font-family="sans-serif" font-size="11" fill="#0369a1">wave crests arrive at an angle</text><line x1="290" y1="182" x2="337" y2="137" stroke="#1f2937" stroke-width="2.5"/><polygon points="345,130 341,140.5 334.3,133.3" fill="#1f2937"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="352" y="150" font-weight="bold">Prevailing wind</text><text x="352" y="164">(from the south-west)</text></g><line x1="30" y1="178" x2="30" y2="146" stroke="#1f2937" stroke-width="2"/><polygon points="30,136 25,147 35,147" fill="#1f2937"/><text x="40" y="150" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">N</text><line x1="0" y1="200" x2="480" y2="200" stroke="#94a3b8"/><text x="10" y="216" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">Four ways the sea transports material</text><rect x="0" y="222" width="480" height="70" fill="#bae6fd"/><rect x="0" y="292" width="480" height="28" fill="#d6d3d1"/><g stroke="#64748b" stroke-dasharray="3 3"><line x1="120" y1="222" x2="120" y2="320"/><line x1="240" y1="222" x2="240" y2="320"/><line x1="360" y1="222" x2="360" y2="320"/></g><circle cx="60" cy="278" r="14" fill="#a8a29e" stroke="#334155"/><path d="M38,262 Q60,244 82,262" fill="none" stroke="#1f2937" stroke-width="1.5"/><polygon points="84,264 80.3,255.8 75.3,262" fill="#1f2937"/><path d="M140,292 Q153,258 166,292 Q179,266 192,292 Q203,274 214,292" fill="none" stroke="#1f2937" stroke-dasharray="3 2"/><circle cx="214" cy="286" r="6" fill="#a8a29e" stroke="#334155"/><g fill="#57534e"><circle cx="262" cy="250" r="1.8"/><circle cx="280" cy="262" r="1.8"/><circle cx="298" cy="248" r="1.8"/><circle cx="316" cy="270" r="1.8"/><circle cx="334" cy="254" r="1.8"/><circle cx="270" cy="278" r="1.8"/><circle cx="290" cy="284" r="1.8"/><circle cx="308" cy="258" r="1.8"/><circle cx="326" cy="282" r="1.8"/><circle cx="344" cy="272" r="1.8"/><circle cx="256" cy="266" r="1.8"/><circle cx="302" cy="274" r="1.8"/></g><g font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="60" y="240">Traction</text><text x="180" y="240">Saltation</text><text x="300" y="240">Suspension</text><text x="420" y="240">Solution</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="420" y="262">minerals dissolved</text><text x="420" y="276">in the water</text><text x="60" y="310">boulders roll</text><text x="180" y="310">pebbles bounce</text><text x="300" y="310">silt and clay carried</text><text x="420" y="310">e.g. chalk, limestone</text></g></svg>`,
      diagramCaption:
        "Longshore drift: swash goes up the beach at the angle of the prevailing wind; backwash runs straight back down under gravity, so sediment zig-zags along the coast. Below: the four ways material is transported.",
      workedExamples: [
        {
          title: "Read the resource: which way is the drift?",
          problem:
            "A field sketch of a south-facing beach shows groynes running down to the sea. Sand is piled up high on the **west** side of each groyne and is much lower on the east side. The prevailing wind is from the south-west. In which direction is longshore drift moving sediment?",
          steps: [
            "Strategy — work it out from the map: sand builds up on the side the drift **arrives from**, because the groyne blocks it there.",
            "Sand is trapped on the west side, so it was travelling from the west and was stopped by the groyne.",
            "Check with the wind: a south-west wind drives the swash up the beach towards the north-east. On a south-facing beach, the along-the-beach part of that movement is towards the east. ✓",
          ],
          answer: "From west to east (eastwards).",
          yourTurn: {
            question:
              "On another beach, sand is piled up on the **east** side of every groyne. In which direction is longshore drift moving sediment? (Answer like 'north to south'.)",
            answer: {
              type: "text",
              accept: ["east to west", "from east to west", "westwards", "westward", "west", "towards the west", "to the west", "e to w", "east-west", "east → west", "east-to-west"],
            },
            solution: "Sand piles up on the side the drift comes from. It is trapped on the east side, so it is moving from **east to west**.",
          },
        },
        {
          title: "Fieldwork calculation: tracer pebbles",
          problem:
            "Wei Ling paints 10 pebbles and places them at the water's edge. After 3 hours, their average position is 36 m further along the beach. What is the average rate of longshore drift in metres per hour?",
          steps: ["Rate = distance ÷ time.", "36 ÷ 3 = 12.", "So the pebbles moved about 12 m per hour along the beach."],
          answer: "About 12 m per hour.",
          yourTurn: {
            question:
              "Arjun's painted pebbles moved an average of 45 m along the beach in 2.5 hours. What was the average rate of longshore drift, in metres per hour?",
            answer: { type: "number", value: 18, display: "18 m per hour" },
            solution: "Rate = distance ÷ time = 45 ÷ 2.5 = 18 m per hour.",
          },
        },
      ],
      keyPoints: [
        "Transport: traction (roll), saltation (bounce), suspension (carried in the water), solution (dissolved).",
        "Swash goes up the beach at an angle, in the direction of the prevailing wind.",
        "Backwash goes straight back down the beach, at right angles to the coast, because of gravity.",
        "Net movement is along the coast in the direction of the swash — never the backwash.",
        "Evidence: sand piled on the updrift side of groynes; spits; tracer pebbles.",
        "Holderness: longshore drift carries eroded clay-cliff sediment south to Spurn Head.",
      ],
      whyItWorks:
        "Two different forces act in each wave cycle. The swash is driven forward by the energy of the breaking wave, so it keeps the angle at which the wind pushed the wave in. The backwash has no wave energy left — it is just water running downhill — so gravity pulls it straight down the steepest slope of the beach, at right angles to the shore. Up at an angle, back down straight: each cycle leaves a pebble slightly further along. Add up thousands of waves a day and sediment can travel kilometres.",
      strategies: ["Sketch it", "Spot the misconception", "Work it out from the map"],
      thinkDeeper:
        "If the wind blew straight onto the beach, at right angles to it, what would happen to longshore drift? What would happen if, for a few weeks, it blew from the opposite direction to the usual prevailing wind?",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "depositional-landforms",
      heading: "Depositional landforms",
      discovery: {
        problem:
          "Spurn Head is a narrow strip of sand and shingle, roughly 5 km long, curving out across the mouth of the Humber estuary in Yorkshire. Much of it is made of material that was once part of the cliffs further up the coast. How can a beach end up stretching out into the sea with no solid rock underneath it?",
        idea:
          "Longshore drift keeps carrying eroded sediment south along the Holderness coast. Where the coast suddenly turns inland at the Humber, the drift carries on in a straight line into calmer water, where the waves drop their load. Layer after layer, the deposit grows out across the estuary mouth: a **spit**.",
      },
      body:
        "**Why deposition happens**\n\nThe sea drops (deposits) material when it **loses energy** — for example:\n\n- in **sheltered** places such as bays, where wave energy is spread out;\n- where the water is **calmer or deeper**, e.g. where the coastline changes direction or a river meets the sea;\n- when waves are **constructive** rather than destructive;\n- when there is a **large supply** of sediment from eroding cliffs, rivers or longshore drift.\n\n| | Constructive waves | Destructive waves |\n|---|---|---|\n| Height | Low | High |\n| Frequency | Fewer — roughly 6–8 a minute | More — roughly 10–14 a minute |\n| Swash and backwash | Strong swash, weak backwash | Weak swash, strong backwash |\n| Effect | **Build up** beaches | **Erode** beaches and cliffs |\n\n**Depositional landforms**\n\n- **Beach**: a store of sand and shingle between the low-tide line and the reach of the highest storm waves. Sandy beaches are gently sloping; shingle beaches are steeper, because water soaks quickly into the pebbles and the backwash is weak.\n- **Spit**: a long, narrow ridge of sand or shingle joined to the land at one end, sticking out into the sea or across a river mouth. It often has a **hooked (recurved) end** and a **salt marsh** behind it. Example: **Spurn Head**, roughly 5 km long. A storm surge in December 2013 broke through its narrow neck, so the tip can now be cut off from the mainland at very high tides.\n- **Bar**: a spit that grows right across a bay, joining two headlands and trapping a **lagoon** behind it. Example: **Slapton Sands** in Devon, with the freshwater lagoon of Slapton Ley behind.\n- **Tombolo**: a ridge of sand or shingle that links the mainland to an island. Example: **Chesil Beach**, Dorset — a shingle ridge roughly 29 km long that joins the Isle of Portland to the mainland, with the Fleet Lagoon behind it. It is commonly called a tombolo (also described as a barrier beach). Its pebbles are graded: largest at the Portland end, getting smaller towards the west.\n\n**How a spit forms**\n\n1. Longshore drift moves sand and shingle along the coast.\n2. Where the coastline changes direction (e.g. at a river mouth), the drift carries material on in the same direction.\n3. In the calmer, deeper water, sediment is deposited and builds up, so the spit grows out from the coast.\n4. Changes in wind and wave direction curve the end round into a **hook**.\n5. The spit shelters the water behind it. Mud and silt settle, plants colonise them, and a **salt marsh** forms.\n6. The river's current stops the spit from growing right across the estuary — otherwise it would become a bar.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of spit formation, such as Spurn Head. Land is at the top left with the sea to the right. Longshore drift arrows run down the coast. Where the coast turns inland at a river estuary, a narrow spit grows on in the same direction, with a hooked end and a salt marsh in the sheltered water behind it. Numbered steps one to five explain the sequence."><rect x="0" y="0" width="480" height="320" fill="#bae6fd"/><path d="M0,0 L180,0 L184,80 L178,165 L0,165 Z" fill="#bbf7d0" stroke="#334155"/><path d="M0,285 L150,285 Q200,290 230,320 L0,320 Z" fill="#bbf7d0" stroke="#334155"/><path d="M108,168 L166,168 L170,236 Q150,246 122,234 Q100,205 108,168 Z" fill="#86efac" stroke="#166534"/><g stroke="#166534" stroke-width="1"><path d="M120,185 l3,-5 l3,5"/><path d="M145,180 l3,-5 l3,5"/><path d="M115,225 l3,-5 l3,5"/><path d="M158,234 l3,-5 l3,5"/></g><path d="M166,165 L182,165 L189,240 Q186,262 150,263 L136,257 Q160,250 171,238 Z" fill="#fde68a" stroke="#334155"/><g stroke="#1f2937" stroke-width="2"><line x1="205" y1="15" x2="205" y2="52"/><line x1="205" y1="72" x2="205" y2="109"/><line x1="205" y1="129" x2="205" y2="166"/><line x1="207" y1="186" x2="209" y2="223"/></g><g fill="#1f2937"><polygon points="205,60 200,50 210,50"/><polygon points="205,117 200,107 210,107"/><polygon points="205,174 200,164 210,164"/><polygon points="209,231 204,221 214,221"/></g><line x1="320" y1="30" x2="258" y2="86" stroke="#334155" stroke-width="2" stroke-dasharray="6 3"/><polygon points="250,93 254.6,82.2 261.3,89.6" fill="#334155"/><text x="326" y="34" font-family="sans-serif" font-size="11" fill="#1f2937">Prevailing wind and waves</text><line x1="20" y1="222" x2="88" y2="222" stroke="#0369a1" stroke-width="2"/><polygon points="98,222 88,217 88,227" fill="#0369a1"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="12" y="208" fill="#0369a1">River estuary</text><text x="12" y="240" fill="#0369a1">river current</text><text x="140" y="203" text-anchor="middle">salt marsh</text><text x="12" y="308">opposite shore</text><text x="40" y="90">LAND</text><text x="474" y="14" text-anchor="end" font-style="italic">e.g. Spurn Head, Holderness</text></g><g font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle"><circle cx="226" cy="40" r="8" fill="#ffffff" stroke="#1f2937"/><text x="226" y="44">1</text><circle cx="160" cy="150" r="8" fill="#ffffff" stroke="#1f2937"/><text x="160" y="154">2</text><circle cx="228" cy="205" r="8" fill="#ffffff" stroke="#1f2937"/><text x="228" y="209">3</text><circle cx="200" cy="268" r="8" fill="#ffffff" stroke="#1f2937"/><text x="200" y="272">4</text><circle cx="140" cy="222" r="8" fill="#ffffff" stroke="#1f2937"/><text x="140" y="226">5</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="268" y="120"><tspan font-weight="bold">1</tspan> Longshore drift carries sand and</text><text x="280" y="133">shingle along the coast.</text><text x="268" y="152"><tspan font-weight="bold">2</tspan> The coast turns inland at a river</text><text x="280" y="165">mouth, but the drift carries on.</text><text x="268" y="184"><tspan font-weight="bold">3</tspan> In calmer water sediment is</text><text x="280" y="197">deposited: the spit grows.</text><text x="268" y="216"><tspan font-weight="bold">4</tspan> Changing winds and waves curve</text><text x="280" y="229">the end into a hook.</text><text x="268" y="248"><tspan font-weight="bold">5</tspan> Sheltered water behind the spit:</text><text x="280" y="261">mud settles, salt marsh forms.</text><text x="268" y="284" font-style="italic">The river current stops the spit</text><text x="268" y="297" font-style="italic">crossing the whole estuary.</text></g></svg>`,
      diagramCaption:
        "How a spit forms: drift carries sediment past a bend in the coast into calmer water, where it is deposited. Shifting winds hook the end; salt marsh grows in the sheltered water behind. Spurn Head on the Holderness coast formed like this.",
      workedExamples: [
        {
          title: "Model answer: Explain the formation of a spit. [4]",
          problem: "Explain the formation of a spit. [4 marks]",
          steps: [
            "Point 1 — the transport: 'Longshore drift moves sand and shingle along the coast in the direction of the prevailing wind.'",
            "Point 2 — the trigger: 'Where the coastline changes direction, for example at a river mouth, the drift carries material on in the same direction into the sea.'",
            "Point 3 — the deposition: 'The water there is calmer and deeper, so the waves lose energy and deposit the sediment, which builds up over time into a long ridge — a spit, such as Spurn Head.'",
            "Point 4 — the features: 'Changes in wind and wave direction curve the end into a hook, and the sheltered water behind the spit lets mud settle to form a salt marsh.'",
            "Check: the answer explains **why deposition happens** (loss of energy), not just that 'sand builds up'.",
          ],
          answer:
            "Longshore drift → coast changes direction → drift continues into calmer water → loss of energy → deposition builds the spit → hooked end and salt marsh (e.g. Spurn Head).",
          yourTurn: {
            question:
              "Name the depositional landform where a ridge of sand or shingle joins an island to the mainland, as at Chesil Beach, which links the Isle of Portland to the Dorset coast.",
            answer: { type: "text", accept: ["tombolo", "a tombolo", "tombolos"] },
            solution: "A **tombolo**. Chesil Beach is commonly described as a tombolo (or barrier beach) joining Portland to the mainland.",
          },
        },
        {
          title: "Calculation: how fast is the spit growing?",
          problem:
            "Old maps show that a spit was 1.2 km long in 1900 and 1.8 km long in 2020. What was its average growth rate, in metres per year?",
          steps: [
            "Growth = 1.8 km − 1.2 km = 0.6 km = 600 m.",
            "Time = 2020 − 1900 = 120 years.",
            "Rate = 600 ÷ 120 = 5 m per year.",
          ],
          answer: "About 5 m per year.",
          yourTurn: {
            question:
              "A spit grew from 800 m long to 1.4 km long over 150 years. What was its average growth rate, in metres per year?",
            answer: { type: "number", value: 4, display: "4 m per year" },
            solution: "Convert first: 1.4 km = 1,400 m. Growth = 1,400 − 800 = 600 m. Rate = 600 ÷ 150 = 4 m per year.",
          },
        },
      ],
      keyPoints: [
        "Deposition happens when waves lose energy — sheltered, calm or deep water, constructive waves.",
        "Constructive waves (strong swash) build beaches; destructive waves (strong backwash) erode them.",
        "Spit = ridge joined to the land at one end; often a hooked end and salt marsh (Spurn Head).",
        "Bar = spit that joins two headlands, trapping a lagoon (Slapton Sands and Slapton Ley).",
        "Tombolo = ridge joining an island to the mainland (Chesil Beach links Portland to Dorset).",
      ],
      whyItWorks:
        "Moving water can carry a load only while it has enough energy, and heavier particles need more energy to keep moving. When waves slow down — in a sheltered bay, in deeper water beyond a bend in the coast, or behind a spit — they can no longer carry everything, so the heaviest material drops first and the finest last. That is why the exposed side of a spit is sand and shingle, while the very calm water behind it collects fine mud that becomes salt marsh.",
      strategies: ["Cause → process → effect", "Sketch it", "Compare and contrast"],
      thinkDeeper:
        "Chesil Beach's pebbles get smaller from Portland towards the west. Suggest how differences in wave energy along the beach could sort the pebbles by size. (Geographers still debate the full explanation — and how Chesil formed as sea levels rose after the last ice age.)",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "coastal-management",
      heading: "Managing the coast",
      discovery: {
        problem:
          "A seaside town spends millions on a concrete sea wall. Years later, the beach in front of the wall has almost disappeared — and a village a few kilometres down the coast is eroding faster than before. How can protecting the coast make things worse?",
        idea:
          "Defences change how wave energy and sediment move. A sea wall reflects wave energy, which scours away the beach in front of it; groynes trap sand that would have drifted on to the next beach. Every defence has **costs and benefits** — and some of the costs land on other people.",
      },
      body:
        "**Why manage the coast?** Erosion and flooding threaten homes, roads, farmland, tourism and wildlife. Global average sea level rose roughly 20 cm between 1901 and 2018, and the rise is speeding up. Planners choose between four broad options: **hold the line** (keep the coastline where it is), **advance the line** (build out into the sea, e.g. land reclamation), **managed retreat**, or **do nothing**.\n\n**Hard engineering** — building artificial structures to resist the sea.\n\n| Method | How it works | Rough cost* | Main drawback |\n|---|---|---|---|\n| Sea wall | Concrete wall, often with a curved (recurved) face, reflects waves back out to sea | roughly £5,000–£10,000 per metre | Very expensive; reflected waves scour the beach |\n| Rock armour (rip-rap) | Large boulders at the foot of a cliff or wall absorb wave energy | roughly £1,000–£3,000 per metre | Rock often shipped in; can look out of place |\n| Groynes | Timber or rock barriers down the beach trap sand moved by longshore drift | roughly £5,000–£10,000 each (timber) | Starve beaches further along the coast |\n| Gabions | Wire cages filled with rocks absorb wave energy | cheap — a few hundred pounds per metre or less | Wire rusts; short life |\n\n**Soft engineering** — working with natural processes.\n\n| Method | How it works | Rough cost* | Main drawback |\n|---|---|---|---|\n| Beach nourishment | Sand or shingle, often dredged offshore, is added to widen the beach so it absorbs wave energy | roughly £2,000–£5,000 per metre, repeated every few years | Must keep being redone |\n| Dune regeneration | Planting marram grass and fencing to trap sand and stabilise dunes | roughly £200–£2,000 per 100 m | Slow; areas fenced off |\n| Managed retreat | Let low-value land flood or erode, often creating salt marsh that absorbs waves | low building cost, but land is lost | Owners lose land and may need compensation |\n\n*Typical textbook estimates — real costs vary a lot by site and year.\n\n**Cost–benefit analysis**: a scheme is usually only funded if the value of what it protects is greater than what it costs. Benefit ÷ cost gives a **benefit–cost ratio**; above 1 means the benefits outweigh the costs.\n\n**Example: Mappleton, Holderness.** In 1991 about £2 million was spent on two rock groynes and rock armour to protect the village and its main road. Mappleton was protected, but the groynes trapped sediment moving south, and erosion of the cliffs just south of the scheme increased.\n\n**Singapore: a coast that is almost all defended**\n\n- Much of Singapore's coastline — often estimated at around 70% or more — is protected by hard defences such as **sea walls** and sloping **rock revetments** (rock armour).\n- **East Coast Park** is built on **reclaimed land**; offshore rock **breakwaters** shelter a series of small bays that hold the sandy beaches in place.\n- Reclamation has increased Singapore's land area by roughly a quarter since the 1960s. New reclaimed land must now be built at least about 4 m above mean sea level.\n- Mean sea level around Singapore could rise by up to about 1 m by 2100. The government has said protecting the coast could cost **S$100 billion or more** over about a century, and **PUB** has been the national coastal protection agency since 2020. Projects include a **polder** at Pulau Tekong (land protected by a dyke, as in the Netherlands) and the **Long Island** idea — reclaiming land off East Coast Park to protect the coast and create a new reservoir — which is being studied.\n- Soft approaches matter too: **mangroves**, at places such as Sungei Buloh and Pulau Ubin, trap sediment and absorb wave energy.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: cross-section of a recurved concrete sea wall with rock armour at its foot. An incoming wave hits the curved face and its energy is reflected back out to sea. Right: plan view of a beach with three groynes. Longshore drift moves sand from left to right, and sand builds up on the updrift side of each groyne, leaving beaches further along with less sand."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="8" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">Hard: recurved sea wall (section)</text><rect x="166" y="175" width="70" height="125" fill="#bae6fd"/><path d="M0,110 L150,110 L150,300 L0,300 Z" fill="#bbf7d0" stroke="#334155"/><rect x="25" y="72" width="34" height="38" fill="#e5e7eb" stroke="#334155"/><polygon points="22,72 42,56 62,72" fill="#fecaca" stroke="#334155"/><path d="M150,110 L176,110 Q186,112 188,120 Q166,128 166,165 L172,250 L150,250 Z" fill="#cbd5e1" stroke="#334155"/><polygon points="172,250 236,270 236,300 150,300 150,250" fill="#fde68a" stroke="#334155"/><g fill="#a8a29e" stroke="#334155"><circle cx="190" cy="232" r="8"/><circle cx="182" cy="245" r="9"/><circle cx="199" cy="250" r="9"/><circle cx="214" cy="258" r="8"/></g><line x1="166" y1="175" x2="236" y2="175" stroke="#0369a1" stroke-dasharray="5 3"/><line x1="232" y1="150" x2="182" y2="150" stroke="#1d4ed8" stroke-width="2"/><polygon points="174,150 184,145 184,155" fill="#1d4ed8"/><path d="M186,126 Q200,100 222,116" fill="none" stroke="#b91c1c" stroke-width="2"/><polygon points="230,119 225.4,111.3 221.1,118.1" fill="#b91c1c"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="234" y="96" text-anchor="end" fill="#b91c1c">wave energy reflected</text><text x="234" y="144" text-anchor="end" fill="#1d4ed8">wave</text><text x="234" y="186" text-anchor="end" fill="#0369a1">high tide</text><text x="94" y="104" text-anchor="middle">promenade</text><text x="144" y="160" text-anchor="end">concrete</text><text x="144" y="174" text-anchor="end">sea wall</text><text x="232" y="286" text-anchor="end">rock armour</text><text x="232" y="298" text-anchor="end">absorbs energy</text></g><line x1="242" y1="6" x2="242" y2="314" stroke="#94a3b8"/><text x="250" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">Hard: groynes (plan view)</text><rect x="246" y="26" width="234" height="44" fill="#bbf7d0"/><rect x="246" y="70" width="234" height="90" fill="#fde68a"/><rect x="246" y="160" width="234" height="154" fill="#bae6fd"/><g fill="#fde68a"><polygon points="246,160 290,160 290,196 246,170"/><polygon points="296,160 360,160 360,196"/><polygon points="366,160 430,160 430,196"/></g><rect x="436" y="138" width="44" height="22" fill="#bae6fd"/><g fill="#78716c" stroke="#334155"><rect x="290" y="80" width="6" height="125"/><rect x="360" y="80" width="6" height="125"/><rect x="430" y="80" width="6" height="125"/></g><line x1="262" y1="250" x2="440" y2="250" stroke="#1f2937" stroke-width="2.5"/><polygon points="452,250 440,244 440,256" fill="#1f2937"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="350" y="243" text-anchor="middle" font-weight="bold">longshore drift</text><text x="370" y="220">groyne</text><text x="254" y="274">Sand builds up on the updrift side.</text><text x="254" y="290">Beaches further along get less sand,</text><text x="254" y="304">so they erode faster.</text><text x="300" y="52">promenade / land</text><text x="300" y="120">beach</text></g></svg>`,
      diagramCaption:
        "Two hard-engineering methods. A recurved sea wall reflects wave energy back to sea (rock armour at its foot absorbs some). Groynes trap sand moving by longshore drift — widening the beach updrift but starving beaches further along.",
      workedExamples: [
        {
          title: "Cost–benefit calculation",
          problem:
            "A council wants to protect 500 m of seafront. A sea wall costs roughly £6,000 per metre. The homes, roads and businesses it would protect are worth about £12 million. Work out the cost and the benefit–cost ratio. Is the scheme worth it?",
          steps: [
            "Cost = 500 × £6,000 = £3,000,000 (£3 million).",
            "Benefit–cost ratio = benefit ÷ cost = 12,000,000 ÷ 3,000,000 = 4.",
            "A ratio of 4 means every £1 spent protects about £4 of property. It is above 1, so on these figures the scheme is good value.",
            "Then weigh up what the numbers leave out: maintenance costs, loss of the beach in front of the wall, and possible extra erosion further along the coast.",
          ],
          answer:
            "Cost £3 million; benefit–cost ratio 4, so the scheme is economically justified — but its social and environmental effects still need weighing up.",
          yourTurn: {
            question:
              "Rock armour costs roughly £2,500 per metre. A council would need 400 m of it to protect property worth about £3.5 million. What is the benefit–cost ratio? Give your answer to 1 decimal place.",
            answer: { type: "number", value: 3.5, allowFraction: false },
            solution: "Cost = 400 × £2,500 = £1,000,000. Ratio = 3,500,000 ÷ 1,000,000 = 3.5. Above 1, so the benefits outweigh the costs.",
          },
        },
        {
          title: "Model answer: 'Soft engineering is better than hard engineering.' Do you agree? [6]",
          problem: "'Soft engineering is better than hard engineering.' To what extent do you agree? [6 marks]",
          steps: [
            "Case for hard engineering: 'Hard engineering such as a sea wall gives strong, reliable protection for high-value places such as a town centre, and can last for decades.'",
            "Develop with a drawback: 'However, it is very expensive — roughly £5,000–£10,000 per metre for a sea wall — and can cause problems elsewhere. At Mappleton, rock groynes protected the village but increased erosion further south.'",
            "Case for soft engineering: 'Soft engineering such as beach nourishment or dune regeneration works with natural processes, is usually cheaper and keeps a natural-looking beach for tourists and wildlife.'",
            "Develop with a drawback: 'But it needs repeating — nourished sand is gradually washed away — and managed retreat means some people lose land and homes.'",
            "Judgement that depends on the place: 'Overall I partly agree. Soft engineering is often better value and more sustainable, but where very valuable land is at risk — as in Singapore, where much of the coast is built up — hard defences are still needed, ideally combined with soft methods such as mangroves.'",
          ],
          answer:
            "A balanced answer: strengths and weaknesses of both, with figures and named examples, ending in a justified conclusion that the best choice depends on what is being protected.",
        },
      ],
      keyPoints: [
        "Hard engineering (sea walls, rock armour, groynes, gabions) resists the sea; soft engineering (beach nourishment, dune regeneration, managed retreat) works with natural processes.",
        "Hard defences are usually more expensive and can increase erosion elsewhere.",
        "Benefit–cost ratio = value protected ÷ cost; above 1 = worth it on economic grounds.",
        "Mappleton (Holderness): about £2 million of rock groynes and armour in 1991 protected the village but increased erosion to the south.",
        "Singapore: much of the coast (often estimated at 70% or more) has sea walls or rock revetments; sea-level rise of up to about 1 m by 2100 is planned for.",
      ],
      whyItWorks:
        "Coastal defences all work by dealing with wave energy. Hard defences either reflect it (sea walls) or absorb it (rock armour and gabions — water loses energy as it swirls through the gaps). Soft defences enlarge nature's own shock absorbers: a wide beach, a dune or a salt marsh makes waves break further out and lose energy before they reach anything valuable. But energy and sediment don't vanish. Trap sand in one place and the next beach gets less; reflect waves off a wall and the beach in front is scoured away. That is why defending one place can increase erosion somewhere else.",
      strategies: ["Weigh both sides then judge", "Social / economic / environmental (SEE)", "Use figures from the source", "Think at different scales"],
      thinkDeeper:
        "Singapore cannot retreat from its coast — there is nowhere to move to. A farming village on the Holderness coast could. Should the same rules decide who gets protected? And who should pay: the people who live there, or the whole country?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Hydraulic action", back: "Erosion by the force of waves hitting the cliff, compressing air and water into cracks and breaking the rock apart." },
      { front: "Abrasion", back: "Erosion when waves throw sand and pebbles at the cliff, scraping it like sandpaper." },
      { front: "Attrition", back: "Rocks and pebbles carried by the sea knock into each other, becoming smaller and rounder." },
      { front: "Solution (corrosion)", back: "Seawater slowly dissolves minerals from some rocks, especially chalk and limestone." },
      { front: "Differential erosion", back: "Different rocks eroding at different rates — soft rock faster than hard rock." },
      { front: "Discordant coastline", back: "Bands of hard and soft rock run at right angles to the coast → headlands and bays (e.g. Swanage)." },
      { front: "Concordant coastline", back: "Bands of rock run parallel to the coast → a fairly straight coast; coves form if the sea breaks through (e.g. Lulworth Cove)." },
      { front: "Wave-cut notch", back: "An undercut at the base of a cliff, eroded between high- and low-tide levels by hydraulic action and abrasion." },
      { front: "Wave-cut platform", back: "A gently sloping rocky surface left behind as a cliff retreats; exposed at low tide." },
      { front: "Sequence of headland erosion", back: "Crack → cave → arch → stack → stump." },
      { front: "Stack", back: "An isolated pillar of rock left when an arch collapses (e.g. Old Harry, Dorset)." },
      { front: "Stump", back: "The low remains of a collapsed stack, covered at high tide (e.g. Old Harry's Wife)." },
      { front: "Swash and backwash", back: "Swash: water rushing up the beach (at an angle). Backwash: water draining straight back down under gravity." },
      { front: "Longshore drift", back: "The zig-zag movement of sediment along the coast: swash at an angle, backwash straight down." },
      { front: "Traction and saltation", back: "Traction: large boulders rolled along the sea bed. Saltation: pebbles bounced along the sea bed." },
      { front: "Suspension and solution (transport)", back: "Suspension: fine particles carried in the water. Solution: minerals carried dissolved in the water." },
      { front: "Spit", back: "A long, narrow ridge of sand or shingle joined to the land at one end, often with a hooked end and salt marsh (e.g. Spurn Head)." },
      { front: "Bar", back: "A ridge of sand or shingle that grows across a bay, joining two headlands and trapping a lagoon (e.g. Slapton Sands)." },
      { front: "Tombolo", back: "A ridge of sand or shingle joining an island to the mainland (e.g. Chesil Beach linking Portland to Dorset)." },
      { front: "Constructive vs destructive waves", back: "Constructive: low, strong swash, build beaches. Destructive: high, frequent, strong backwash, erode beaches." },
      { front: "Hard vs soft engineering", back: "Hard: artificial structures that resist the sea (sea walls, groynes). Soft: working with nature (beach nourishment, dunes, managed retreat)." },
      { front: "Managed retreat", back: "Deliberately allowing low-value land to flood or erode, often creating salt marsh that absorbs wave energy." },
      { front: "Freeze–thaw weathering", back: "Water in cracks freezes, expands by about 9% and prises the rock apart; repeated cycles weaken cliffs and arch roofs." },
      { front: "Singapore's coastal defences", back: "Much of the coast (often estimated at 70% or more) has sea walls or rock revetments; East Coast Park is on reclaimed land; plans for sea-level rise of up to about 1 m by 2100." },
    ],
    mustKnow: [
      "Can you name and explain the four processes of marine erosion?",
      "Can you explain how differential erosion forms headlands and bays on a discordant coastline, using Swanage as an example?",
      "Can you tell a discordant coastline from a concordant one?",
      "Can you explain how a wave-cut notch and wave-cut platform form as a cliff retreats?",
      "Can you explain the sequence crack → cave → arch → stack → stump, naming the processes at each stage?",
      "Can you give examples: Old Harry Rocks (chalk stacks) and Durdle Door (limestone arch)?",
      "Can you name and describe traction, saltation, suspension and solution?",
      "Can you draw and explain a longshore drift diagram with the prevailing wind, angled swash and straight backwash?",
      "Can you explain why and where deposition happens, and compare constructive and destructive waves?",
      "Can you explain the formation of a spit, including the hooked end and salt marsh (Spurn Head)?",
      "Can you define a bar and a tombolo, with examples (Slapton Sands, Chesil Beach)?",
      "Can you compare hard and soft engineering methods, with rough costs, benefits and drawbacks?",
      "Can you calculate a benefit–cost ratio and use it in a judgement?",
      "Can you describe how Singapore protects its coast and plans for sea-level rise?",
    ],
    misconceptions: [
      { wrong: "Weathering and erosion are the same thing.", right: "Weathering breaks rock down in place (e.g. freeze–thaw). Erosion wears rock away and removes it by a moving force such as waves." },
      { wrong: "Longshore drift moves sediment in the direction of the backwash.", right: "The backwash runs straight back down the beach. Sediment moves along the coast in the direction of the swash, which follows the prevailing wind." },
      { wrong: "The backwash goes back down the beach at the same angle as the swash.", right: "The backwash is pulled by gravity straight down the steepest slope, at right angles to the coastline." },
      { wrong: "Attrition is rocks being thrown at the cliff.", right: "That is abrasion. Attrition is rocks and pebbles hitting each other, becoming smaller and rounder." },
      { wrong: "Hard rock does not erode, so headlands last for ever.", right: "Hard rock erodes more slowly, not never. Headlands are attacked by focused wave energy and are eroded into caves, arches, stacks and stumps." },
      { wrong: "An arch collapses because the sea erodes it from the top.", right: "Waves erode the base of the arch; weathering (rain, frost, salt) weakens the roof from above until it collapses under its own weight." },
      { wrong: "A spit is made by the river depositing sand.", right: "A spit is built mainly from sediment carried by longshore drift. The river current actually stops the spit growing right across the estuary." },
      { wrong: "Groynes and sea walls stop erosion.", right: "They reduce erosion in one place but can increase it elsewhere — groynes starve beaches further along; sea walls scour the beach in front." },
      { wrong: "Soft engineering means doing nothing.", right: "Soft engineering is active management that works with natural processes, e.g. beach nourishment and dune regeneration. 'Do nothing' is a separate option." },
    ],
    examMistakes: [
      "Describing the landform instead of explaining its formation — name the processes (hydraulic action, abrasion) at each stage.",
      "Drawing the backwash at an angle in a longshore drift diagram — it must go straight down the beach.",
      "Forgetting to label the prevailing wind direction on a longshore drift diagram.",
      "Mixing up abrasion (rocks hitting the cliff) and attrition (rocks hitting each other).",
      "Missing out the arch stage, or not explaining why the arch roof collapses, in 'explain the formation of a stack'.",
      "Saying deposition happens because 'the sand stops' instead of explaining that waves lose energy.",
      "Calling Chesil Beach a spit and not linking it to Portland — it joins an island to the mainland, so it is described as a tombolo.",
      "In 'evaluate' questions, only giving one side or no conclusion — weigh hard and soft engineering, then make a justified judgement.",
      "Quoting costs with false precision — say 'roughly £5,000–£10,000 per metre' and remember real costs vary.",
    ],
    mnemonics: [
      { topic: "Erosion processes", device: "HAAS — Hard Attacks Are Sneaky", explanation: "Hydraulic action, Abrasion, Attrition, Solution." },
      { topic: "Headland sequence", device: "Can Cats Always Stay Seated?", explanation: "Crack → Cave → Arch → Stack → Stump, in order." },
      { topic: "Transport processes (largest to smallest load)", device: "Tractor, Skip, Swim, Sugar", explanation: "Traction (boulders roll like a tractor), Saltation (pebbles skip and bounce), Suspension (fine particles swim in the water), Solution (minerals dissolve like sugar)." },
      { topic: "Longshore drift", device: "Swash follows the wind; backwash follows gravity.", explanation: "Swash goes up the beach at the wind's angle; backwash goes straight back down the steepest slope." },
    ],
    realWorld: [
      { title: "East Coast Park, Singapore", detail: "A popular beach park built on reclaimed land. Offshore rock breakwaters create a string of small sheltered bays that hold the sand in place — a human-made version of headlands and bays.", emoji: "🌴" },
      { title: "Singapore and sea-level rise", detail: "With sea level around Singapore possibly rising by up to about 1 m by 2100, PUB leads coastal protection. Plans include higher platform levels for new reclaimed land, a polder at Pulau Tekong and the Long Island reclamation idea off East Coast Park; costs could reach S$100 billion or more over about a century.", emoji: "🌊" },
      { title: "Holderness, Yorkshire", detail: "Soft boulder-clay cliffs retreat on average roughly 1.5–2 m a year. Rock groynes at Mappleton (1991, about £2 million) protected the village but increased erosion further south — a classic case of defences moving the problem along the coast.", emoji: "🏚️" },
      { title: "Old Harry Rocks and Durdle Door, Dorset", detail: "On the Jurassic Coast World Heritage Site you can see the whole erosion sequence: Durdle Door is a limestone arch; Old Harry is a chalk stack and Old Harry's Wife a stump.", emoji: "🪨" },
      { title: "The Sand Motor, Netherlands", detail: "In 2011 the Dutch built a huge hook-shaped peninsula of sand — roughly 20 million m³ — off the coast near The Hague. Waves and longshore drift spread the sand along the coast over many years: beach nourishment that lets nature do the work.", emoji: "🇳🇱" },
      { title: "Maldives", detail: "Most of the Maldives' islands lie only about 1–2 m above sea level. The capital, Malé, is ringed by a sea wall, showing how low-lying island nations face the same choices as Singapore.", emoji: "🏝️" },
    ],
    videos: [
      { title: "Longshore drift explained", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=longshore+drift+explained+geography" },
      { title: "Formation of caves, arches, stacks and stumps", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=cave+arch+stack+stump+formation+geography" },
      { title: "How a spit forms (Spurn Head)", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=spit+formation+spurn+head+geography" },
      { title: "Hard and soft coastal engineering", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=hard+and+soft+engineering+coastal+management+gcse" },
      { title: "Singapore coastal protection and sea-level rise", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=singapore+coastal+protection+sea+level+rise" },
    ],
    formulas: [
      { name: "Erosion", formula: "The wearing away and removal of rock by a moving force such as waves." },
      { name: "Weathering", formula: "The breakdown of rock in place by the weather, chemicals or living things (e.g. freeze–thaw)." },
      { name: "Hydraulic action", formula: "Waves forcing air and water into cracks, building pressure that breaks the rock." },
      { name: "Abrasion", formula: "Sand and pebbles thrown by waves scraping the cliff, like sandpaper." },
      { name: "Attrition", formula: "Rocks carried by the sea colliding with each other, becoming smaller and rounder." },
      { name: "Solution", formula: "Erosion: seawater dissolving rocks such as chalk and limestone. Transport: minerals carried dissolved in the water." },
      { name: "Differential erosion", formula: "Rocks of different strength eroding at different rates, producing headlands (hard rock) and bays (soft rock)." },
      { name: "Discordant / concordant coast", formula: "Discordant: rock bands at right angles to the coast. Concordant: rock bands parallel to the coast." },
      { name: "Longshore drift", formula: "Movement of sediment along the coast: swash at an angle (prevailing wind), backwash straight down (gravity)." },
      { name: "Traction / saltation / suspension", formula: "Boulders rolled / pebbles bounced / fine particles carried within the water." },
      { name: "Spit", formula: "A ridge of deposited sand or shingle joined to the land at one end, extending into the sea (e.g. Spurn Head)." },
      { name: "Tombolo", formula: "A ridge of deposited sand or shingle joining an island to the mainland (e.g. Chesil Beach)." },
      { name: "Bar", formula: "A ridge of sand or shingle across a bay, joining two headlands and trapping a lagoon (e.g. Slapton Sands)." },
      { name: "Benefit–cost ratio", formula: "Value of what is protected ÷ cost of the scheme. Above 1 = the benefits outweigh the costs." },
      { name: "Hard vs soft engineering", formula: "Hard: artificial structures resisting the sea. Soft: methods working with natural processes." },
      { name: "Managed retreat", formula: "Allowing the sea to flood or erode low-value land, often creating salt marsh as a natural defence." },
    ],
  },
};
