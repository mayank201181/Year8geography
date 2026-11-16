import type { Topic } from "../types";

export const coastalLandforms: Topic = {
  id: "coastal-landforms",
  title: "Coastal Landforms",
  subject: "Cracking Coasts",
  icon: "🪨",
  summary: "Headlands, caves, arches, stacks, beaches and spits.",
  intro:
    "Coastlines never stand still. Waves pound headlands into caves, arches and stacks, while calmer water drops sand and shingle to build beaches, spits and tombolos. In this topic you will learn to explain how each landform forms step by step, spot landforms on an OS map, and judge how places from Dorset to Singapore's East Coast Park protect their shores.",

  guide: [
    {
      id: "headlands-bays",
      heading: "Headlands and bays: when rocks erode at different speeds",
      discovery: {
        problem:
          "On a map of the Dorset coast near Swanage, the shoreline zig-zags: bands of chalk and limestone stick out into the sea, while bands of clay curve inwards. If the same waves hit the whole coast, why doesn't it wear back into a straight line?",
        idea:
          "Different rocks erode at different rates (differential erosion). Weak rock retreats to form bays; strong rock is left sticking out as headlands.",
      },
      body:
        "A **headland** is a piece of high land that juts out into the sea, with water on three sides. A **bay** is a curved inlet of the sea between two headlands, usually with a beach at its back.\n\nHeadlands and bays form on a **discordant coastline**: a coast where bands of **resistant (hard) rock**, such as chalk or limestone, and **less resistant (soft) rock**, such as clay and sand, run **at right angles (perpendicular)** to the shoreline. Because the rocks erode at different speeds, we call this **differential erosion**:\n\n- The soft rock is worn away quickly by **hydraulic action** (the force of water, and air trapped and compressed in cracks) and **abrasion** (rocks carried by waves scraping and grinding the land). It retreats to form a **bay**.\n- The hard rock erodes more slowly and is left sticking out as a **headland**.\n\nOnce the coastline is uneven, the waves change too. Waves **refract** (bend) as they move into shallower water, so their energy is **concentrated on the headlands** and **spread out in the bays**. Headlands therefore become the main places of erosion (cliffs, caves, arches and stacks), while the calmer bays become places of **deposition**, where sand builds up into beaches.\n\nOn a **concordant coastline** the bands of rock run **parallel** to the coast. A hard outer band protects the softer rock behind it, unless the sea breaks through. At **Lulworth Cove** in Dorset the sea broke through a narrow band of Portland limestone and then scooped out the soft clays and sands behind it, making an almost circular cove backed by chalk.",
      diagram: `<svg viewBox="0 0 320 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of a discordant coastline: bands of hard and soft rock at right angles to the coast form headlands and bays"><defs><marker id="hb-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0c4a6e"/></marker></defs><rect x="0" y="0" width="320" height="215" fill="#bae6fd"/><text x="5" y="9" font-size="10" fill="#0c4a6e">Discordant coast: rock bands at right angles to the sea</text><path d="M0 12 H228 Q244 34 228 56 H0 Z" fill="#a8a29e"/><path d="M0 56 H200 Q150 81 200 106 H0 Z" fill="#d6b98c"/><path d="M200 56 Q150 81 200 106 Q166 81 200 56 Z" fill="#fde047"/><path d="M0 106 H228 Q244 128 228 150 H0 Z" fill="#a8a29e"/><path d="M0 150 H200 Q150 175 200 200 H0 Z" fill="#d6b98c"/><path d="M200 150 Q150 175 200 200 Q166 175 200 150 Z" fill="#fde047"/><text x="105" y="31" font-size="11" font-weight="bold" text-anchor="middle" fill="#1c1917">HEADLAND</text><text x="105" y="46" font-size="10" text-anchor="middle" fill="#1c1917">hard rock e.g. chalk</text><text x="80" y="78" font-size="11" font-weight="bold" text-anchor="middle" fill="#422006">BAY</text><text x="80" y="93" font-size="10" text-anchor="middle" fill="#422006">soft rock e.g. clay, sand</text><text x="105" y="125" font-size="11" font-weight="bold" text-anchor="middle" fill="#1c1917">HEADLAND</text><text x="105" y="140" font-size="10" text-anchor="middle" fill="#1c1917">hard rock e.g. limestone</text><text x="80" y="172" font-size="11" font-weight="bold" text-anchor="middle" fill="#422006">BAY</text><text x="80" y="187" font-size="10" text-anchor="middle" fill="#422006">soft rock</text><text x="196" y="96" font-size="10" fill="#713f12">beach</text><line x1="318" y1="34" x2="250" y2="34" stroke="#0c4a6e" stroke-width="2" marker-end="url(#hb-arr)"/><line x1="318" y1="128" x2="250" y2="128" stroke="#0c4a6e" stroke-width="2" marker-end="url(#hb-arr)"/><line x1="318" y1="70" x2="215" y2="78" stroke="#0c4a6e" stroke-width="1" stroke-dasharray="4 3" marker-end="url(#hb-arr)"/><text x="252" y="24" font-size="10" fill="#0c4a6e">energy focused</text><text x="236" y="66" font-size="10" fill="#0c4a6e">energy spread</text><line x1="300" y1="190" x2="300" y2="165" stroke="#0c4a6e" stroke-width="2" marker-end="url(#hb-arr)"/><text x="300" y="160" font-size="10" text-anchor="middle" fill="#0c4a6e">N</text><line x1="240" y1="205" x2="280" y2="205" stroke="#0c4a6e" stroke-width="2"/><text x="240" y="200" font-size="10" fill="#0c4a6e">0 — 1 km</text></svg>`,
      diagramCaption:
        "A discordant coast in plan view. Soft clay and sand are eroded back into bays (with beaches); hard chalk and limestone stand out as headlands, where wave energy is focused.",
      keyPoints: [
        "Discordant coast = hard and soft rock bands at right angles to the coast → headlands and bays.",
        "Soft rock (clay, sand) erodes faster → bay; hard rock (chalk, limestone) resists → headland.",
        "Wave refraction focuses energy on headlands (erosion) and spreads it in bays (deposition → beaches).",
        "Concordant coast = rock bands parallel to the coast → coves such as Lulworth Cove.",
      ],
      thinkDeeper:
        "Once headlands form, wave refraction attacks them hardest while bays become sheltered. Could a zig-zag discordant coast slowly become straighter again over thousands of years? Explain the 'feedback' that would cause this.",
      caseStudy: {
        place: "Swanage Bay and the Foreland, Isle of Purbeck, Dorset (UK)",
        facts: [
          "Swanage Bay is cut into soft Wealden clays and sands, so it has retreated to form a wide bay with a sandy beach.",
          "To the north, the Foreland (Handfast Point) is a chalk headland; Old Harry Rocks stand at its tip.",
          "To the south, Peveril Point and Durlston Head are made of resistant Purbeck and Portland limestone.",
          "North of the Foreland, Studland Bay is cut into softer sands and clays, with sand dunes behind its beach.",
          "This coast is the eastern end of the Jurassic Coast, England's first natural World Heritage Site (2001), about 150 km long from Exmouth to Studland.",
        ],
      },
      skill: "Annotating a sketch map of a discordant coastline (with north arrow and scale)",
    },
    {
      id: "cliffs-platforms",
      heading: "Cliffs and wave-cut platforms: how a coast retreats",
      discovery: {
        problem:
          "At low tide below some chalk cliffs you can walk out over a flat, rocky shelf hundreds of metres wide. Where did that flat rock surface come from, and why is it lower than the land behind?",
        idea:
          "The shelf is where the cliff used to be. The cliff has been undercut and has collapsed again and again, retreating inland and leaving its eroded base behind as a wave-cut platform.",
      },
      body:
        "A **cliff** is a steep rock face along the coast. A **wave-cut platform** is a wide, gently sloping, flat rocky surface at the foot of a cliff, which is covered at high tide and exposed at low tide.\n\nThey form together, in a sequence:\n\n- **Destructive waves** (tall, steep, frequent waves with a strong backwash) attack the base of the cliff between the high-tide and low-tide lines.\n- **Hydraulic action** and **abrasion** erode a curved hollow at the base called a **wave-cut notch**.\n- As the notch deepens, the rock above is left hanging as an **overhang**.\n- The overhang is no longer supported, so eventually it **collapses** under gravity (a rockfall).\n- The waves break up and carry away the fallen rock (by **attrition**, rocks knocking into each other, and transport), and the process repeats. Each time, the cliff **retreats** further inland.\n- The flat base left behind is the **wave-cut platform**.\n\nThe cliff top is weakened by **weathering** too: the breakdown of rock in place. Rain is a weak acid, so chalk and limestone suffer **chemical weathering** (carbonation); in cold climates **freeze-thaw** splits rock; heavy rain soaks into cliffs, making them heavier and more likely to slip.\n\nWave-cut platforms rarely grow more than a few hundred metres wide. As the platform widens, waves break further out and lose energy crossing the shallow rock, so they reach the cliff with less power and erosion slows. This is a **negative feedback**: the landform slows its own growth.\n\nThe type of rock matters. Hard rock forms tall, steep cliffs that retreat slowly; soft rock such as the boulder clay of Holderness in Yorkshire slumps and retreats on average about **2 m per year**, one of the fastest rates in Europe.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a retreating cliff with a wave-cut notch, overhang and wave-cut platform"><defs><marker id="cp-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7f1d1d"/></marker></defs><rect x="0" y="0" width="320" height="200" fill="#f8fafc"/><rect x="0" y="140" width="215" height="60" fill="#bae6fd"/><path d="M200 40 H320 V200 H0 V185 L200 158 L224 147 L200 134 Z" fill="#a8a29e" stroke="#57534e"/><line x1="150" y1="40" x2="150" y2="165" stroke="#57534e" stroke-dasharray="4 3"/><line x1="100" y1="40" x2="100" y2="172" stroke="#57534e" stroke-dasharray="4 3"/><text x="125" y="55" font-size="10" text-anchor="middle" fill="#57534e">old cliff positions</text><line x1="120" y1="90" x2="192" y2="90" stroke="#7f1d1d" stroke-width="2" marker-end="url(#cp-arr)"/><text x="155" y="84" font-size="10" text-anchor="middle" fill="#7f1d1d">cliff retreats</text><line x1="0" y1="140" x2="215" y2="140" stroke="#0369a1" stroke-dasharray="5 3"/><text x="4" y="136" font-size="10" fill="#0369a1">High tide</text><line x1="0" y1="178" x2="52" y2="178" stroke="#0369a1" stroke-dasharray="5 3"/><text x="4" y="174" font-size="10" fill="#0369a1">Low tide</text><text x="232" y="128" font-size="10" fill="#1c1917">overhang</text><text x="232" y="152" font-size="10" fill="#1c1917">wave-cut notch</text><text x="105" y="155" font-size="10" text-anchor="middle" fill="#0c4a6e">hydraulic action + abrasion</text><circle cx="190" cy="157" r="3" fill="#57534e"/><circle cx="183" cy="159" r="2.5" fill="#57534e"/><text x="70" y="196" font-size="10" fill="#1c1917">wave-cut platform (exposed at low tide)</text><text x="260" y="70" font-size="11" font-weight="bold" fill="#1c1917">CLIFF</text></svg>`,
      diagramCaption:
        "Undercutting at the notch, collapse of the overhang and removal of the rubble make the cliff retreat inland, leaving a wave-cut platform at its old base.",
      keyPoints: [
        "Sequence: notch → overhang → collapse → retreat → wave-cut platform.",
        "Erosion happens between high- and low-tide level, mostly by hydraulic action and abrasion.",
        "Weathering (chemical, freeze-thaw) weakens the cliff from above.",
        "Wide platforms slow erosion because waves lose energy crossing them.",
      ],
      thinkDeeper:
        "If sea level rose by 1 m, where would the next wave-cut notch be cut, and what would happen to an existing wave-cut platform? Would cliff retreat speed up or slow down? Justify both.",
      caseStudy: {
        place: "Seven Sisters and Birling Gap, East Sussex (UK)",
        facts: [
          "The Seven Sisters are chalk cliffs; the highest, Haven Brow, is about 77 m high.",
          "A broad chalk wave-cut platform is exposed below the cliffs at low tide.",
          "The cliffs retreat on average roughly half a metre per year, but the loss comes in sudden collapses, often after stormy or very wet winters.",
          "At Birling Gap the National Trust has chosen not to build defences, so a row of coastguard cottages built in the late 1800s is being lost as the cliff edge moves inland.",
          "For comparison, Holderness (Yorkshire), made of soft boulder clay, retreats about 2 m per year on average.",
        ],
      },
    },
    {
      id: "caves-arches-stacks",
      heading: "Caves, arches, stacks and stumps",
      discovery: {
        problem:
          "Off the tip of the Foreland in Dorset stands Old Harry: a tall pillar of chalk completely surrounded by sea. Nobody carried it there. How can a pillar of rock end up standing on its own, separated from the cliffs?",
        idea:
          "It was once part of the headland. Erosion along cracks turned the headland into a cave, then an arch; when the arch roof fell, the end of the headland was left isolated as a stack.",
      },
      body:
        "Because wave energy is focused on headlands, they are worn away in a typical sequence. To explain it in an exam, **name the process at each stage** and use sequence words (first, then, as a result, eventually).\n\n- **1. Lines of weakness.** Headlands contain **joints** (small vertical cracks) and **faults** (larger fractures where rock has moved). These are weaker than the solid rock around them.\n- **2. Cave.** Waves attack the weakness. **Hydraulic action** forces water and air into the crack, compressing the air and widening the crack; **abrasion** scrapes it larger. Over time the crack grows into a **cave**.\n- **3. Arch.** The cave is eroded further back until it breaks right through the headland (often when two caves on opposite sides meet), forming an **arch**. Durdle Door in Dorset is a famous limestone arch.\n- **4. Stack.** The sea keeps eroding the base of the arch, while **weathering** (freeze-thaw, salt and chemical weathering) weakens the roof. Eventually the roof is too heavy and unsupported, and it **collapses**, leaving an isolated pillar of rock: a **stack**.\n- **5. Stump.** Waves cut a notch into the base of the stack until it too collapses, leaving a low **stump** that is covered at high tide.\n\n**Old Harry Rocks** (Handfast Point, Dorset) show the whole sequence in chalk: caves and small arches along the headland, the stack called Old Harry, and a stump that is all that remains of **Old Harry's Wife**, a stack that collapsed in **1896**.\n\n**How to write the 6-mark 'Explain how a stack forms' answer:** follow the stages in order; name the processes (hydraulic action, abrasion, weathering, gravity/collapse); use the key terms (joint, fault, cave, arch, stack); include a named example; and if you can, add a simple **sequence diagram** of 3–4 labelled sketches. Describing what a stack looks like earns very little; explaining *how* each stage leads to the next earns the marks.",
      diagram: `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sequence diagram showing a headland eroded from crack and cave, to arch, to stack, to stump"><rect x="0" y="0" width="320" height="150" fill="#f8fafc"/><text x="160" y="14" font-size="11" font-weight="bold" text-anchor="middle" fill="#1c1917">Erosion of a headland over time</text><rect x="0" y="105" width="320" height="45" fill="#bae6fd"/><rect x="5" y="40" width="70" height="72" fill="#d6d3d1" stroke="#57534e"/><line x1="40" y1="60" x2="40" y2="100" stroke="#1c1917" stroke-width="1.5"/><path d="M30 112 Q40 88 50 112 Z" fill="#475569"/><rect x="85" y="40" width="70" height="72" fill="#d6d3d1" stroke="#57534e"/><path d="M103 112 Q120 66 137 112 Z" fill="#bae6fd"/><rect x="163" y="40" width="30" height="72" fill="#d6d3d1" stroke="#57534e"/><rect x="210" y="52" width="20" height="60" fill="#d6d3d1" stroke="#57534e"/><circle cx="200" cy="110" r="3" fill="#57534e"/><circle cx="205" cy="112" r="2" fill="#57534e"/><rect x="243" y="40" width="30" height="72" fill="#d6d3d1" stroke="#57534e"/><rect x="290" y="98" width="18" height="14" fill="#d6d3d1" stroke="#57534e"/><text x="40" y="34" font-size="10" text-anchor="middle" fill="#1c1917">1 crack → cave</text><text x="120" y="34" font-size="10" text-anchor="middle" fill="#1c1917">2 arch</text><text x="200" y="34" font-size="10" text-anchor="middle" fill="#1c1917">3 stack</text><text x="280" y="34" font-size="10" text-anchor="middle" fill="#1c1917">4 stump</text><text x="40" y="132" font-size="10" text-anchor="middle" fill="#0c4a6e">hydraulic action</text><text x="120" y="132" font-size="10" text-anchor="middle" fill="#0c4a6e">cave breaks through</text><text x="200" y="132" font-size="10" text-anchor="middle" fill="#0c4a6e">roof collapses</text><text x="280" y="132" font-size="10" text-anchor="middle" fill="#0c4a6e">covered at high tide</text><text x="299" y="94" font-size="10" text-anchor="middle" fill="#1c1917">stump</text></svg>`,
      diagramCaption:
        "A sequence diagram: a crack is widened into a cave, the cave breaks through to make an arch, the arch roof collapses to leave a stack, and the stack is undercut until only a stump remains.",
      keyPoints: [
        "Order: crack (joint/fault) → cave → arch → stack → stump.",
        "Hydraulic action and abrasion widen cracks; weathering weakens arch roofs; gravity causes collapse.",
        "Examples: Old Harry Rocks (chalk stack and stump), Durdle Door (limestone arch), the Twelve Apostles (limestone stacks, Australia).",
        "In a 6-mark answer, explain each stage and name processes and an example; a sequence diagram helps.",
      ],
      thinkDeeper:
        "Old Harry is chalk and the Twelve Apostles are softer limestone. Which would you expect to lose its stacks faster, and what other factors (wave energy, storms, joints) could make your prediction wrong?",
      caseStudy: {
        place: "The Twelve Apostles, Port Campbell National Park, Victoria (Australia)",
        facts: [
          "A group of limestone stacks beside the Great Ocean Road, rising up to about 45 m out of the Southern Ocean.",
          "The coast faces powerful waves driven across thousands of kilometres of open ocean, so erosion at the base of the cliffs and stacks is rapid (roughly 2 cm per year).",
          "Despite the name, there have never been twelve stacks; the group was renamed 'The Apostles' in the 1920s to attract tourists (it had been called the Sow and Piglets).",
          "In July 2005 one stack collapsed suddenly, leaving eight standing.",
          "Nearby, 'London Bridge', a double arch, lost the span joining it to the mainland in January 1990, stranding two tourists who were rescued by helicopter; it is now called London Arch.",
        ],
      },
      skill: "Explaining a landform in sequence (4–6 mark answer) using a labelled sequence diagram",
    },
    {
      id: "beaches",
      heading: "Beaches: sand, shingle and berms",
      discovery: {
        problem:
          "Walk barefoot down a sandy beach on Sentosa and it is almost flat. Walk down a pebble beach in Dorset and you scramble down a steep bank. Why would bigger stones make a steeper beach?",
        idea:
          "On pebbles, water from each wave soaks (percolates) into the gaps, so the backwash is weak and cannot drag the stones back down; they pile up into a steep slope. On sand, water runs back over the surface and spreads the sand out gently.",
      },
      body:
        "A **beach** is a build-up of **sand** (small grains) or **shingle** (rounded pebbles) along the coast, between the low-tide line and the highest point reached by storm waves. Beaches are **depositional landforms**: they form where waves **lose energy** and drop the sediment they carry.\n\nBeaches build up mainly in **bays**, where wave refraction spreads wave energy out, and where **constructive waves** are common. Constructive waves are low, flat and gentle (about 6–8 per minute); they have a **strong swash** (the water rushing up the beach) and a **weak backwash** (water flowing back down), so more sediment is pushed up the beach than is dragged back. Sediment arrives from eroded cliffs, rivers and the sea bed, and is moved along the coast by **longshore drift**.\n\n**Sand vs shingle:**\n\n- **Sand beaches** have a **gentle slope**. Sand grains pack tightly, so little water soaks in; the backwash flows back over the surface with enough power to carry sand back down, spreading it out.\n- **Shingle beaches** have a **steep slope**. Water **percolates** (soaks) into the big gaps between pebbles, so the backwash is weak and the pebbles stay near the top.\n\n**Beach features:** a **berm** is a ridge of sand or shingle running parallel to the shore, marking a high-tide level; a beach may have several. At the very top, the largest material thrown up by storm waves forms a **storm beach** (storm ridge). The **backshore** lies above normal high tide; the **foreshore** lies between high and low tide.\n\nBeaches change with the **seasons**: gentle summer waves build berms, while winter storm (destructive) waves drag sand offshore, making the beach lower and narrower.\n\nIn **Singapore**, most beaches are **artificial**. East Coast Park and Sentosa's beaches were built with placed sand on reclaimed land, and rock **breakwaters** stick out to act like mini headlands, creating calm little bays where the sand stays put.",
      diagram: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Beach profile cross-section showing foreshore, berm, storm beach and backshore, with swash and backwash"><defs><marker id="be-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0c4a6e"/></marker></defs><rect x="0" y="0" width="320" height="180" fill="#f8fafc"/><rect x="0" y="122" width="150" height="58" fill="#bae6fd"/><path d="M0 160 L120 130 L150 120 L175 118 L195 106 L215 96 L235 101 L260 82 L320 72 V180 H0 Z" fill="#fde68a" stroke="#a16207"/><line x1="0" y1="122" x2="160" y2="122" stroke="#0369a1" stroke-dasharray="5 3"/><text x="4" y="118" font-size="10" fill="#0369a1">High tide</text><line x1="0" y1="150" x2="40" y2="150" stroke="#0369a1" stroke-dasharray="5 3"/><text x="4" y="146" font-size="10" fill="#0369a1">Low tide</text><text x="162" y="112" font-size="10" fill="#713f12">berm</text><text x="200" y="88" font-size="10" fill="#713f12">storm beach</text><text x="268" y="68" font-size="10" fill="#713f12">dunes/cliff</text><line x1="40" y1="174" x2="150" y2="174" stroke="#713f12"/><text x="95" y="170" font-size="10" text-anchor="middle" fill="#713f12">foreshore</text><line x1="160" y1="174" x2="260" y2="174" stroke="#713f12"/><text x="210" y="170" font-size="10" text-anchor="middle" fill="#713f12">backshore</text><line x1="60" y1="108" x2="130" y2="96" stroke="#0c4a6e" stroke-width="2.5" marker-end="url(#be-arr)"/><text x="40" y="92" font-size="10" fill="#0c4a6e">strong swash</text><line x1="130" y1="104" x2="85" y2="112" stroke="#0c4a6e" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#be-arr)"/><text x="70" y="40" font-size="10" fill="#1c1917">Sand: gentle slope (backwash carries sand back)</text><text x="70" y="54" font-size="10" fill="#1c1917">Shingle: steep slope (water soaks in, weak backwash)</text></svg>`,
      diagramCaption:
        "A beach profile. Constructive waves (strong swash, weak backwash) push sediment up the beach, building berms; the largest material is thrown up into a storm beach.",
      keyPoints: [
        "Beaches form by deposition where waves lose energy, especially in bays with constructive waves.",
        "Sand beaches are gentle; shingle beaches are steep because water percolates and the backwash is weak.",
        "Berms are ridges at high-tide levels; the storm beach is the highest ridge of the largest material.",
        "Beaches change seasonally: built up in calm conditions, cut back by storms.",
      ],
      thinkDeeper:
        "East Coast Park's sand is held in place by breakwaters. If they were removed, where would the sand go, and what process would move it? What would that mean for the reclaimed land behind?",
      caseStudy: {
        place: "East Coast Park, Singapore",
        facts: [
          "The park stretches for about 15 km along Singapore's south-east coast, between Marina East and Changi.",
          "It is built on land reclaimed from the sea from the late 1960s and 1970s, so its beach is artificial.",
          "A series of rock breakwaters juts into the sea, creating small sheltered bays where the placed sand is held in place.",
          "Waves in the Singapore Strait are usually low-energy; stronger waves come mainly during the north-east monsoon (roughly December to March).",
          "Stone revetments (sloping rock walls) protect parts of the shoreline from erosion.",
        ],
      },
      skill: "Drawing and labelling a beach profile (cross-section)",
    },
    {
      id: "spits",
      heading: "Spits: beaches that grow out to sea",
      discovery: {
        problem:
          "At the mouth of the River Humber, a thin finger of sand and shingle called Spurn Head stretches about 5 km across the estuary, curling at its tip. What could carry so much sediment out to sea in a straight line, and why does the end curl?",
        idea:
          "Longshore drift carries sediment along the coast. Where the coast suddenly changes direction, the drift keeps going and drops sediment into the sheltered water, building a spit; changing winds and wave refraction curl its end.",
      },
      body:
        "A **spit** is a long, narrow ridge of sand or shingle that is **attached to the land at one end** and sticks out into the sea or across a river mouth. Spits are made by **deposition**.\n\n**How a spit forms:**\n\n- **Longshore drift** moves sediment along the coast. The **prevailing wind** (the most common wind direction) makes waves approach at an angle: the **swash** carries sediment up the beach at that angle, and the **backwash** drags it straight back down the slope under gravity. Repeated, this zig-zag moves sediment along the shore.\n- Where the coastline **changes direction** (for example at a bend or a river estuary), longshore drift continues in the same direction, carrying sediment out into the sea.\n- In the more **sheltered, shallower water**, waves lose energy and **deposit** the sediment. Over many years a ridge builds up and grows longer.\n- A **change in wind direction** (a secondary wind) and **wave refraction** around the tip bend the end inwards, forming a **recurved (hooked) end**. Several old recurves can show earlier positions of the tip.\n- Behind the spit the water is calm and low-energy, so fine **silt and mud** settle out. Salt-tolerant plants colonise it, forming a **salt marsh**.\n- A spit cannot grow all the way across an estuary, because the **river's current** carries sediment out to sea.\n\n**Hurst Castle Spit** (Hampshire) is a shingle spit about 2 km long, fed by longshore drift from west to east along Christchurch Bay. Its recurved end points into the western Solent, and the Keyhaven salt marshes lie behind it. Henry VIII built Hurst Castle at its tip in 1544 to guard the Solent; in February 2021 part of the castle's east wing collapsed after the sea undermined its foundations. After storm damage in 1989, rock armour was added and shingle recharged in the 1990s to keep the spit in place.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of a spit growing across an estuary, with longshore drift, a recurved end and salt marsh behind"><defs><marker id="sp-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0c4a6e"/></marker></defs><rect x="0" y="0" width="320" height="210" fill="#bae6fd"/><path d="M0 120 L150 120 L170 210 L0 210 Z" fill="#bbf7d0" stroke="#166534"/><path d="M245 210 L255 178 L320 172 L320 210 Z" fill="#bbf7d0" stroke="#166534"/><ellipse cx="205" cy="142" rx="30" ry="10" fill="#4ade80"/><text x="205" y="146" font-size="10" text-anchor="middle" fill="#14532d">salt marsh</text><path d="M150 120 Q210 110 255 122 Q272 132 262 152" fill="none" stroke="#eab308" stroke-width="9" stroke-linecap="round"/><text x="200" y="100" font-size="10" text-anchor="middle" fill="#713f12">spit (sand/shingle)</text><text x="272" y="150" font-size="10" fill="#713f12">recurved</text><text x="272" y="162" font-size="10" fill="#713f12">end</text><path d="M10 112 L22 100 L30 112 L42 100 L50 112 L62 100 L70 112 L82 100 L90 112 L102 100 L110 112 L122 100 L130 112" fill="none" stroke="#0c4a6e" stroke-width="1.5" marker-end="url(#sp-arr)"/><text x="20" y="92" font-size="10" fill="#0c4a6e">longshore drift →</text><line x1="15" y1="25" x2="60" y2="65" stroke="#0c4a6e" stroke-width="2" marker-end="url(#sp-arr)"/><text x="15" y="18" font-size="10" fill="#0c4a6e">prevailing wind (SW)</text><text x="60" y="170" font-size="11" font-weight="bold" fill="#14532d">LAND</text><text x="205" y="196" font-size="10" text-anchor="middle" fill="#0c4a6e">river</text><line x1="205" y1="185" x2="205" y2="160" stroke="#0c4a6e" stroke-width="1.5" marker-end="url(#sp-arr)"/><line x1="300" y1="50" x2="300" y2="22" stroke="#0c4a6e" stroke-width="2" marker-end="url(#sp-arr)"/><text x="300" y="62" font-size="10" text-anchor="middle" fill="#0c4a6e">N</text></svg>`,
      diagramCaption:
        "Longshore drift carries sediment past the bend in the coast; it is deposited in sheltered water to build a spit. Changing winds curve the end, and mud settles into a salt marsh behind.",
      keyPoints: [
        "Spit = ridge of sand/shingle attached to land at one end, built by longshore drift and deposition.",
        "It forms where the coast changes direction, in sheltered, shallow water.",
        "A recurved end is caused by changing wind direction and wave refraction.",
        "Salt marsh forms in the calm, low-energy water behind; river currents stop the spit closing the estuary.",
      ],
      thinkDeeper:
        "Spurn Head is fed by sediment eroded from the Holderness cliffs. If Holderness were completely protected by sea walls, what would happen to Spurn Head over the next century? Who wins and who loses?",
      caseStudy: {
        place: "Spurn Head, East Yorkshire (UK)",
        facts: [
          "A curved sand and shingle spit about 5 km (3.5 miles) long across the mouth of the Humber Estuary; in places it is only about 50 m wide.",
          "Its sediment comes mainly from the Holderness coast to the north, where soft boulder-clay cliffs erode about 2 m per year on average and longshore drift carries material south.",
          "Its tip is recurved into the estuary, and mudflats and salt marsh have built up in the sheltered water behind it.",
          "The December 2013 storm surge breached the narrow 'neck', so Spurn is now cut off from the mainland at the highest tides (a tidal island).",
          "It is a nature reserve managed by the Yorkshire Wildlife Trust and a key stopover for migrating birds.",
        ],
      },
    },
    {
      id: "bars-tombolos",
      heading: "Bars and tombolos: Chesil Beach and St Ninian's",
      discovery: {
        problem:
          "Fishermen landing on Chesil Beach in thick fog were said to know exactly where they were just by picking up a pebble. How could the size of a stone tell you your position along a 29 km beach?",
        idea:
          "The pebbles on Chesil Beach are graded: they get steadily larger from west (pea-sized) to east (fist-sized) because of how waves and drift sort the material. Depositional landforms like bars and tombolos often show this sorting.",
      },
      body:
        "When longshore drift keeps depositing sediment, a spit can keep growing until it joins up with other land.\n\nA **bar** forms when a spit grows **right across a bay**, joining two headlands. The water trapped behind it becomes a **lagoon** (a shallow body of still water). Lagoons slowly fill with sediment and plants. Examples: **Slapton Sands** and Slapton Ley in Devon; **Loe Bar** and Loe Pool in Cornwall. Some bars also form when rising sea levels push offshore sediment landwards.\n\nA **tombolo** is a bar or spit that **joins the mainland to an island**. Waves refract (bend) around both sides of the island and meet in its shelter, where they lose energy and deposit sediment; longshore drift adds more until a ridge links the two.\n\n- **St Ninian's tombolo** (Shetland, Scotland) is a sand ridge about 500 m long linking St Ninian's Isle to the Shetland mainland; it is the largest active sand tombolo in the UK. At very high tides with big waves it can be washed over.\n- **Chesil Beach** (Dorset) is a huge shingle ridge (barrier beach) that links the Isle of Portland to the mainland, so it is often described as a tombolo. Behind it lies the **Fleet Lagoon**.\n\n**How Chesil formed:** at the end of the last ice age (from about 10,000 years ago), melting ice raised sea levels and waves pushed a great ridge of shingle landwards until it rested against the coast. Today little new shingle arrives, so it is a 'relic' landform. Its pebbles are graded by size along its length: small at West Bay in the west, large at Portland in the east.",
      diagram: `<svg viewBox="0 0 320 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan views of a bar with a lagoon behind it, and a tombolo joining an island to the mainland"><defs><marker id="bt-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0c4a6e"/></marker></defs><rect x="0" y="0" width="320" height="175" fill="#bae6fd"/><path d="M0 0 H155 V90 H130 Q78 20 25 90 H0 Z" fill="#bbf7d0" stroke="#166534"/><path d="M25 88 Q78 20 130 88 Z" fill="#67e8f9"/><line x1="22" y1="89" x2="133" y2="89" stroke="#eab308" stroke-width="7"/><text x="78" y="72" font-size="10" text-anchor="middle" fill="#0c4a6e">lagoon</text><text x="78" y="108" font-size="10" text-anchor="middle" fill="#713f12">bar</text><text x="78" y="122" font-size="10" text-anchor="middle" fill="#1c1917">e.g. Slapton Sands</text><text x="78" y="20" font-size="10" text-anchor="middle" fill="#14532d">land</text><line x1="160" y1="0" x2="160" y2="175" stroke="#0c4a6e"/><rect x="165" y="0" width="155" height="48" fill="#bbf7d0" stroke="#166534"/><text x="242" y="22" font-size="10" text-anchor="middle" fill="#14532d">mainland</text><rect x="237" y="46" width="10" height="58" fill="#eab308"/><circle cx="242" cy="120" r="18" fill="#bbf7d0" stroke="#166534"/><text x="242" y="124" font-size="10" text-anchor="middle" fill="#14532d">island</text><text x="252" y="76" font-size="10" fill="#713f12">tombolo</text><path d="M195 150 Q205 100 232 92" fill="none" stroke="#0c4a6e" stroke-width="1.5" marker-end="url(#bt-arr)"/><path d="M292 150 Q282 100 252 92" fill="none" stroke="#0c4a6e" stroke-width="1.5" marker-end="url(#bt-arr)"/><text x="78" y="160" font-size="11" font-weight="bold" text-anchor="middle" fill="#1c1917">BAR</text><text x="242" y="160" font-size="11" font-weight="bold" text-anchor="middle" fill="#1c1917">TOMBOLO</text><text x="242" y="172" font-size="10" text-anchor="middle" fill="#1c1917">waves bend round the island</text></svg>`,
      diagramCaption:
        "Left: a bar joins two headlands and traps a lagoon. Right: waves refract around an island and deposit sediment in its shelter, building a tombolo that links it to the mainland.",
      keyPoints: [
        "Bar = ridge of sediment across a bay joining two headlands, with a lagoon behind (Slapton Sands).",
        "Tombolo = ridge joining an island to the mainland (St Ninian's, Shetland; Chesil Beach to Portland).",
        "Both are depositional landforms built by longshore drift, wave refraction and rising sea levels.",
        "Chesil Beach's pebbles are graded: small in the west, large in the east near Portland.",
      ],
      thinkDeeper:
        "Chesil Beach receives very little new shingle today. Using what you know about storms and sea-level rise, predict how Chesil and the Fleet Lagoon might change by 2100.",
      caseStudy: {
        place: "Chesil Beach and the Fleet Lagoon, Dorset (UK)",
        facts: [
          "A shingle barrier beach about 29 km (18 miles) long, up to about 15 m high and up to about 200 m wide.",
          "It links the Isle of Portland to the mainland, so it is often classed as a tombolo.",
          "Pebbles are graded from roughly pea-sized at West Bay in the west to fist-sized at Portland in the east.",
          "Behind it lies the Fleet, a shallow saltwater (brackish) lagoon about 13 km long, home to the Abbotsbury Swannery.",
          "It formed as rising sea levels after the last ice age pushed shingle landwards, and it is part of the Jurassic Coast World Heritage Site.",
        ],
      },
    },
    {
      id: "os-map-skills",
      heading: "OS map skills for coasts",
      discovery: {
        problem:
          "A friend texts: 'Meet me at grid reference 245 425.' You are standing at 250 430 on a 1:25,000 map. Without looking at the map, can you tell which direction your friend is in, and roughly how far?",
        idea:
          "Grid references encode position: eastings first (245 is less than 250, so west), northings second (425 is less than 430, so south). Each grid square is 1 km, so 0.5 km west and 0.5 km south is about 0.7 km to the south-west.",
      },
      body:
        "Ordnance Survey (**OS**) maps are Britain's detailed official maps; in Singapore, the **Singapore Land Authority** (SLA) produces maps such as OneMap. Exams test the same core skills.\n\n**Grid references.** Blue **grid lines** divide the map into squares (each 1 km × 1 km on 1:25,000 and 1:50,000 maps).\n\n- **Eastings** are the vertical lines; their numbers increase towards the east. **Northings** are the horizontal lines; their numbers increase towards the north.\n- Always give **eastings first, then northings**: 'along the corridor, then up the stairs'.\n- A **4-figure grid reference** names a whole square using the lines at its **bottom-left corner**, e.g. 2542.\n- A **6-figure grid reference** pinpoints a spot to within 100 m: imagine each square divided into tenths. A lighthouse 4/10 of the way across square 2542 and 6/10 of the way up is at **254 426**.\n\n**Height.** **Contour lines** (brown) join places of equal height above sea level. **Close together = steep**; far apart = gentle. Where the land is too steep for contours, OS maps use a black **cliff symbol**. **Spot heights** give exact heights.\n\n**Scale.** At **1:25,000**, 4 cm on the map = 1 km on the ground; at **1:50,000**, 2 cm = 1 km. Measure straight lines with a ruler; for curved coasts, lay a strip of paper or string along the route.\n\n**Coastal symbols to know:** sand (yellow stipple), shingle (pebble dots), mud, rock outcrops, the **Mean High Water** and **Mean Low Water** lines (the area between them is the foreshore), cliffs, lighthouses, slipways, viewpoints, car parks and marsh symbols for salt marsh.\n\n**Recognising landforms on a map:** a headland is land jutting out with a cliff symbol; a stack is a small isolated rock symbol in the sea just off a headland; a bay is a curved inlet with sand symbols; a spit is a narrow finger of sand or shingle attached at one end, often across an estuary with marsh symbols behind.",
      diagram: `<svg viewBox="0 0 335 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified map extract with grid lines numbered 23 to 26 east and 41 to 44 north, showing a headland with a lighthouse, a stack, a beach, a church and contours"><rect x="0" y="0" width="335" height="250" fill="#ffffff"/><rect x="40" y="10" width="210" height="210" fill="#bae6fd"/><path d="M40 10 H190 L195 60 L210 95 L228 112 L205 130 L195 170 L215 220 H40 Z" fill="#f0fdf4" stroke="#166534"/><path d="M196 150 L205 175 L212 218 L200 218 L192 175 Z" fill="#fde047"/><path d="M210 95 L228 112 L205 130" fill="none" stroke="#1c1917" stroke-width="3" stroke-dasharray="2 2"/><circle cx="238" cy="113" r="4" fill="#1c1917"/><path d="M208 99 L211 105 L217 105 L212 109 L214 115 L208 111 L202 115 L204 109 L199 105 L205 105 Z" fill="#dc2626"/><circle cx="75" cy="60" r="4" fill="#1c1917"/><line x1="75" y1="52" x2="75" y2="47" stroke="#1c1917" stroke-width="2"/><path d="M60 220 Q150 140 150 10" fill="none" stroke="#a16207" stroke-width="1.2"/><text x="122" y="120" font-size="10" fill="#a16207">50</text><path d="M40 200 Q100 120 100 10" fill="none" stroke="#a16207" stroke-width="1.2"/><text x="78" y="120" font-size="10" fill="#a16207">100</text><g stroke="#2563eb" stroke-width="1"><line x1="40" y1="10" x2="40" y2="220"/><line x1="110" y1="10" x2="110" y2="220"/><line x1="180" y1="10" x2="180" y2="220"/><line x1="250" y1="10" x2="250" y2="220"/><line x1="40" y1="10" x2="250" y2="10"/><line x1="40" y1="80" x2="250" y2="80"/><line x1="40" y1="150" x2="250" y2="150"/><line x1="40" y1="220" x2="250" y2="220"/></g><g font-size="10" fill="#2563eb"><text x="40" y="233" text-anchor="middle">23</text><text x="110" y="233" text-anchor="middle">24</text><text x="180" y="233" text-anchor="middle">25</text><text x="250" y="233" text-anchor="middle">26</text><text x="34" y="14" text-anchor="end">44</text><text x="34" y="84" text-anchor="end">43</text><text x="34" y="154" text-anchor="end">42</text><text x="34" y="224" text-anchor="end">41</text></g><g font-size="10" fill="#1c1917"><text x="258" y="22" font-weight="bold">KEY</text><path d="M264 30 L266 34 L270 34 L267 37 L268 41 L264 38 L260 41 L261 37 L258 34 L262 34 Z" fill="#dc2626"/><text x="274" y="40">lighthouse</text><line x1="258" y1="54" x2="270" y2="54" stroke="#1c1917" stroke-width="3" stroke-dasharray="2 2"/><text x="274" y="58">cliff</text><circle cx="264" cy="72" r="4" fill="#1c1917"/><text x="274" y="76">stack</text><rect x="258" y="86" width="12" height="8" fill="#fde047"/><text x="274" y="94">sand</text><circle cx="264" cy="110" r="4" fill="#1c1917"/><line x1="264" y1="104" x2="264" y2="100" stroke="#1c1917" stroke-width="2"/><text x="274" y="114">church</text><line x1="258" y1="130" x2="270" y2="130" stroke="#a16207"/><text x="274" y="134">contour</text></g><line x1="300" y1="195" x2="300" y2="165" stroke="#1c1917" stroke-width="2"/><path d="M296 170 L300 160 L304 170 Z" fill="#1c1917"/><text x="300" y="208" font-size="10" text-anchor="middle" fill="#1c1917">N</text><text x="40" y="246" font-size="10" fill="#1c1917">Each grid square = 1 km. Lighthouse: 254 426. Stack: 258 425.</text></svg>`,
      diagramCaption:
        "A simplified coastal map. The lighthouse is in square 2542 at 254 426; the stack lies just off the headland at 258 425; the church is at 235 432; the beach is in square 2541. Contours get closer towards the cliffs.",
      keyPoints: [
        "Eastings first, then northings: 'along the corridor, then up the stairs'.",
        "4-figure = a square (bottom-left corner); 6-figure = a point to within 100 m.",
        "Contours close together = steep; cliffs have their own black symbol.",
        "1:25,000 → 4 cm = 1 km; 1:50,000 → 2 cm = 1 km.",
      ],
      thinkDeeper:
        "Two students give the same lighthouse as 254 426 and 426 254. Only one is right. Apart from 'eastings first', what simple check on the map would catch the mistake straight away?",
      skill: "Giving 4- and 6-figure grid references, reading contours and using scale on an OS map",
    },
    {
      id: "coastal-management",
      heading: "Managing the coast: hard and soft engineering (and Singapore)",
      discovery: {
        problem:
          "A town builds a row of wooden fences (groynes) across its beach. Its beach gets wider, but a village 2 km further along the coast starts losing its beach and its cliffs begin to collapse. How can protecting one place damage another?",
        idea:
          "Coastal management changes natural processes. Groynes trap sediment moving by longshore drift, so less sediment reaches places down-drift; their beaches shrink and erosion speeds up. Every scheme has costs and benefits, and winners and losers.",
      },
      body:
        "**Coastal management** means protecting the coast from erosion and flooding. In England, councils follow **Shoreline Management Plans** with four options: **hold the line** (keep the coast where it is), **advance the line** (build out to sea), **managed realignment** (let the sea in, in a controlled way) or **no active intervention** (let nature take its course).\n\n**Hard engineering** uses built structures to resist the power of the sea. Approximate costs are only a rough guide:\n\n- **Sea wall**: a concrete wall, often curved to reflect waves back out to sea (roughly £5,000–£10,000+ per metre). *For*: strong, long-lasting, protects promenades. *Against*: very expensive; reflected waves can scour away the beach in front; looks unnatural.\n- **Groynes**: timber or rock barriers built at right angles to the beach. They trap sediment carried by longshore drift, building a wider beach that absorbs wave energy. *For*: fairly cheap; a bigger beach helps tourism. *Against*: starve beaches **down-drift**, increasing erosion further along; can look ugly.\n- **Rock armour (rip-rap)**: large boulders piled at the foot of a cliff or in front of a sea wall to absorb wave energy (roughly £1,000–£3,000 per metre). *For*: cheaper than a sea wall; quick to build. *Against*: rock is often imported; can be moved by big storms; awkward for beach users.\n- **Revetments**: sloping structures of timber, concrete or rock that break up waves.\n\n**Soft engineering** works with natural processes:\n\n- **Beach nourishment (recharge)**: adding sand or shingle (often dredged from offshore) to widen the beach. *For*: looks natural; good for tourism. *Against*: must be repeated every few years; dredging can harm sea-bed habitats.\n- **Dune regeneration**: planting marram grass, fencing and boardwalks to rebuild sand dunes. *For*: cheap; creates habitats. *Against*: slow; limited protection in big storms; access is restricted.\n- **Managed retreat (realignment)**: deliberately letting low-value land flood, creating salt marsh that absorbs wave energy. *For*: cheap in the long term; creates wildlife habitat. *Against*: farmers lose land and may need compensation. At **Medmerry** (West Sussex), completed in 2013 for about £28 million, the sea was let in behind new inland embankments, creating about 180 hectares of new intertidal habitat.\n\n**Singapore's coastline protection.** About **30%** of Singapore's land is less than 5 m above mean sea level, sea levels around Singapore could rise by up to about 1 m by 2100, and roughly 70–80% of its coastline is already protected by hard structures such as seawalls and rock slopes (revetments), for example along East Coast Park. In 2019 the government said protecting Singapore from sea-level rise could cost **S$100 billion or more over 100 years**, and in 2020 **PUB** became the national coastal protection agency. New reclaimed land must now be at least **4 m above mean sea level** (raised from 3 m in 2011). Singapore also uses softer and 'hybrid' approaches: restoring **mangroves** (which trap mud and absorb wave energy), building a Dutch-style **polder** at Pulau Tekong, and the **Marina Barrage** (2008), which helps keep high tides out of the city's low-lying centre. Because Singapore is small and land is precious, retreat is rarely an option, which is why hard engineering dominates.",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of groynes trapping sand from longshore drift, and a cross-section of a curved sea wall with rock armour"><defs><marker id="cm-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0c4a6e"/></marker></defs><rect x="0" y="0" width="320" height="170" fill="#bae6fd"/><rect x="0" y="0" width="168" height="40" fill="#bbf7d0"/><rect x="0" y="40" width="168" height="26" fill="#fde68a"/><polygon points="12,66 40,66 40,86" fill="#fde68a"/><polygon points="62,66 90,66 90,86" fill="#fde68a"/><polygon points="112,66 140,66 140,86" fill="#fde68a"/><rect x="38" y="34" width="4" height="60" fill="#78350f"/><rect x="88" y="34" width="4" height="60" fill="#78350f"/><rect x="138" y="34" width="4" height="60" fill="#78350f"/><line x1="10" y1="115" x2="150" y2="115" stroke="#0c4a6e" stroke-width="2" marker-end="url(#cm-arr)"/><text x="80" y="110" font-size="10" text-anchor="middle" fill="#0c4a6e">longshore drift</text><text x="84" y="22" font-size="10" text-anchor="middle" fill="#14532d">LAND</text><text x="80" y="132" font-size="10" text-anchor="middle" fill="#1c1917">sand builds up on the</text><text x="80" y="144" font-size="10" text-anchor="middle" fill="#1c1917">up-drift side of each groyne</text><text x="84" y="162" font-size="11" font-weight="bold" text-anchor="middle" fill="#1c1917">Groynes (plan)</text><line x1="170" y1="0" x2="170" y2="170" stroke="#0c4a6e"/><rect x="170" y="0" width="150" height="100" fill="#f8fafc"/><path d="M262 150 L262 60 Q262 42 246 36 L250 30 L320 30 L320 150 Z" fill="#94a3b8" stroke="#334155"/><rect x="270" y="30" width="50" height="120" fill="#d6d3d1"/><text x="295" y="70" font-size="10" text-anchor="middle" fill="#1c1917">town</text><circle cx="250" cy="142" r="8" fill="#78716c"/><circle cx="236" cy="145" r="6" fill="#78716c"/><circle cx="244" cy="130" r="6" fill="#78716c"/><line x1="180" y1="115" x2="238" y2="108" stroke="#0c4a6e" stroke-width="2" marker-end="url(#cm-arr)"/><path d="M252 50 Q215 40 195 70" fill="none" stroke="#0c4a6e" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#cm-arr)"/><text x="178" y="20" font-size="10" fill="#1c1917">waves reflected</text><text x="180" y="96" font-size="10" fill="#1c1917">curved sea wall</text><text x="178" y="140" font-size="10" fill="#1c1917">rock armour</text><text x="245" y="164" font-size="11" font-weight="bold" text-anchor="middle" fill="#1c1917">Sea wall (section)</text></svg>`,
      diagramCaption:
        "Left: groynes trap sand moving by longshore drift, widening the beach up-drift but starving it down-drift. Right: a curved sea wall reflects wave energy, with rock armour at its foot absorbing more.",
      keyPoints: [
        "Hard engineering (sea walls, groynes, rock armour, revetments) resists the sea: effective but costly and can harm other places.",
        "Soft engineering (beach nourishment, dune regeneration, managed retreat) works with nature: cheaper and greener but needs upkeep.",
        "Always weigh costs and benefits, and consider who wins and who loses (including places down-drift).",
        "Singapore: about 30% of land is under 5 m above sea level; most of the coast is hard-protected; PUB leads coastal protection; mangroves add nature-based defence.",
      ],
      thinkDeeper:
        "Singapore cannot easily 'retreat' from its coast, but the UK sometimes does (Medmerry, Birling Gap). What is it about Singapore's size, land value and population that changes the best answer? Is there any place in Singapore where a softer approach would make sense?",
      caseStudy: {
        place: "Singapore's coastline protection",
        facts: [
          "About 30% of Singapore's land lies less than 5 m above mean sea level.",
          "Roughly 70–80% of the coastline is protected by hard structures such as seawalls and stone revetments.",
          "In 2019 the government estimated that coastal protection against sea-level rise could cost S$100 billion or more over 100 years.",
          "PUB became Singapore's national coastal protection agency in 2020; since 2011, new reclaimed land must be at least 4 m above mean sea level.",
          "Nature-based and hybrid defences include mangrove restoration and a polder of about 800 hectares at Pulau Tekong; Marina Barrage (2008) helps keep high tides out of the city centre.",
        ],
      },
      skill: "Evaluating costs and benefits of coastal management strategies",
    },
  ],

  mnemonics: [
    {
      topic: "Order of headland erosion",
      device: "Clever Cats Always Sleep Soundly",
      explanation: "Crack → Cave → Arch → Stack → Stump. Every stage needs a process: hydraulic action/abrasion widen the crack; weathering and gravity bring down the roof.",
    },
    {
      topic: "Forming a wave-cut platform",
      device: "Never Overhang Cliffs Recklessly (N-O-C-R)",
      explanation: "Notch → Overhang → Collapse → Retreat, leaving the wave-cut platform behind.",
    },
    {
      topic: "Grid references",
      device: "Along the corridor, then up the stairs",
      explanation: "Read eastings (along, left to right) first, then northings (up). Always use the bottom-left corner of the square.",
    },
    {
      topic: "How a spit forms",
      device: "S-P-I-T-S",
      explanation: "Sediment moved by longshore drift; Prevailing wind sets the direction; Into sheltered water where the coast bends; Turns at the tip (recurved end); Salt marsh forms behind.",
    },
  ],

  examMistakes: [
    "Describing what an arch or stack looks like instead of explaining how it forms: 'explain' questions need processes and a sequence.",
    "Writing just 'erosion' or 'the waves wear it away' without naming the process (hydraulic action, abrasion).",
    "Mixing up the erosion processes: abrasion is rocks scraping the cliff; attrition is rocks hitting each other and getting smaller.",
    "Skipping a stage (going straight from cave to stack) or forgetting that a stump is the final stage.",
    "Leaving out a named example (Old Harry Rocks, Durdle Door, Spurn Head) in a 6-mark answer.",
    "Saying spits, bars and beaches form by erosion: they are depositional landforms, built by longshore drift and deposition.",
    "Giving grid references with northings first, or reading from the wrong corner of the square.",
    "In management questions, listing advantages only, or claiming groynes 'stop erosion' without mentioning that down-drift beaches are starved.",
  ],

  misconceptions: [
    {
      wrong: "Headlands are made of soft rock because they stick out where the waves hit.",
      right: "Headlands are made of hard, resistant rock. They stick out because the softer rock either side has been eroded faster into bays.",
    },
    {
      wrong: "Arches collapse because waves smash into the top of them.",
      right: "Waves erode the base and sides; the roof is weakened by weathering (freeze-thaw, salt, chemical) until gravity makes it collapse.",
    },
    {
      wrong: "A spit is formed when the sea erodes a channel through the land.",
      right: "A spit is a depositional landform: longshore drift carries sediment past a bend in the coast and drops it in sheltered water.",
    },
    {
      wrong: "The Twelve Apostles still has twelve stacks.",
      right: "There have never been twelve; the name was a 1920s tourism rebrand, and after a stack collapsed in 2005 eight remain.",
    },
    {
      wrong: "Hard engineering always gives better protection than soft engineering.",
      right: "Hard engineering can be strong locally but is expensive and can increase erosion elsewhere; soft engineering is often more sustainable. The best choice depends on the value of the land and the cost.",
    },
    {
      wrong: "A beach stays the same shape all year.",
      right: "Beaches are dynamic: calm conditions build berms, while storm (destructive) waves drag sediment offshore and cut the beach back.",
    },
  ],

  expertDebates: [
    {
      question: "Should we 'hold the line' everywhere, or let some coasts retreat?",
      detail:
        "Defending every metre of coast is unaffordable and can starve beaches elsewhere, so English plans choose 'no active intervention' or managed realignment in some places, such as Birling Gap. Supporters say this is realistic and creates habitats. Critics point out that people lose homes and farmland, often with little compensation, and ask whether it is fair that some communities are defended and others are not.",
    },
    {
      question: "Should Singapore keep relying on seawalls and reclamation, or invest more in nature-based defences?",
      detail:
        "Seawalls and raised reclaimed land give reliable protection for very valuable land, which matters on a small island. But mangroves and coastal wetlands absorb wave energy, store carbon and support wildlife, and they can keep up with gradual sea-level rise by trapping mud. They need space, which Singapore lacks, so many experts argue for 'hybrid' designs that combine the two.",
    },
    {
      question: "Should famous landforms such as Old Harry Rocks or the Twelve Apostles be protected from collapse?",
      detail:
        "These features attract huge numbers of tourists and bring money to local economies. But they exist only because of erosion, and protecting them would stop the natural processes that create new stacks and arches. Most geologists and park managers argue for letting nature run its course while keeping visitors safe.",
    },
  ],

  realWorld: [
    { title: "Jurassic Coast tourism", detail: "Durdle Door, Lulworth Cove and Old Harry Rocks attract visitors from around the world, supporting local jobs, but crowds also cause path erosion and litter.", emoji: "🏖️" },
    { title: "East Coast Park weekends", detail: "The artificial beach and breakwaters you cycle past at East Coast Park are coastal engineering in action, holding sand in place on reclaimed land.", emoji: "🚲" },
    { title: "The Great Ocean Road", detail: "Australia's Twelve Apostles are a major tourist draw; rangers move viewing platforms and paths as cliffs retreat and stacks collapse.", emoji: "🇦🇺" },
    { title: "Homes on the edge", detail: "On fast-eroding coasts such as Holderness, houses can lose value and become uninsurable as the cliff edge approaches.", emoji: "🏚️" },
    { title: "Guarding the Humber", detail: "Spurn Head shelters the Humber Estuary and its busy ports; a lifeboat station has long operated near its tip.", emoji: "🚢" },
    { title: "Marina Barrage", detail: "Singapore's barrage across the Marina Channel keeps high tides out of the low-lying city centre while also creating a freshwater reservoir.", emoji: "🌊" },
  ],

  flashcards: [
    { front: "Headland", back: "An area of hard rock jutting out into the sea, with water on three sides." },
    { front: "Bay", back: "A curved inlet of the sea between two headlands, formed in softer rock; often has a beach." },
    { front: "Discordant coastline", back: "Bands of hard and soft rock at right angles to the coast → headlands and bays (e.g. Swanage, Dorset)." },
    { front: "Concordant coastline", back: "Bands of rock run parallel to the coast → coves where the hard band is breached (e.g. Lulworth Cove)." },
    { front: "Wave-cut notch", back: "A curved hollow eroded at the base of a cliff, between high- and low-tide level, by hydraulic action and abrasion." },
    { front: "Wave-cut platform", back: "A flat, gently sloping rocky surface at the foot of a retreating cliff, exposed at low tide." },
    { front: "Stack", back: "An isolated pillar of rock left standing in the sea when an arch roof collapses (e.g. Old Harry)." },
    { front: "Stump", back: "The low remains of a collapsed stack, covered at high tide (e.g. Old Harry's Wife, fell 1896)." },
    { front: "Berm", back: "A ridge of sand or shingle parallel to the shore, marking a high-tide level on a beach." },
    { front: "Why are shingle beaches steep?", back: "Water percolates into the gaps between pebbles, so the backwash is weak and cannot drag pebbles back down." },
    { front: "Spit", back: "A long, narrow ridge of sand/shingle attached to land at one end, built by longshore drift (e.g. Spurn Head, Hurst Castle Spit)." },
    { front: "Bar", back: "A ridge of sediment across a bay joining two headlands, trapping a lagoon behind (e.g. Slapton Sands)." },
    { front: "Tombolo", back: "A ridge of sediment joining an island to the mainland (e.g. St Ninian's, Shetland; Chesil Beach to Portland)." },
    { front: "Chesil Beach: key facts", back: "Shingle ridge about 29 km long, up to about 15 m high; pebbles graded small (west) to large (Portland, east); Fleet Lagoon behind." },
    { front: "4-figure vs 6-figure grid reference", back: "4-figure = a 1 km square (bottom-left corner lines); 6-figure = a point to within 100 m. Eastings first." },
    { front: "Managed retreat", back: "Letting low-value land flood in a controlled way to create salt marsh that absorbs wave energy (e.g. Medmerry, 2013)." },
  ],

  mustKnow: [
    "Explain how headlands and bays form on a discordant coast, using a named example (Swanage Bay and the Foreland).",
    "Explain the formation of a wave-cut platform in order: notch, overhang, collapse, retreat.",
    "Write a 6-mark answer explaining how a stack forms, naming processes and an example (Old Harry, Twelve Apostles).",
    "Explain why sand beaches are gentle and shingle beaches are steep, and label a beach profile with berms.",
    "Explain how a spit forms, including the recurved end and salt marsh, using Spurn Head or Hurst Castle Spit.",
    "Distinguish a spit, a bar and a tombolo, with an example of each (Chesil Beach, St Ninian's, Slapton Sands).",
    "Give 4- and 6-figure grid references, interpret contours and use scale on an OS map of a coast.",
    "Evaluate hard and soft engineering strategies, including costs, benefits and effects down-drift.",
    "Explain why Singapore relies mainly on hard engineering and how it is adding nature-based defences.",
  ],

  videos: [
    { title: "Caves, arches, stacks and stumps", channel: "Time for Geography", url: "https://www.youtube.com/results?search_query=time+for+geography+caves+arches+stacks+stumps" },
    { title: "How does a spit form?", channel: "Cool Geography", url: "https://www.youtube.com/results?search_query=cool+geography+spit+formation" },
    { title: "Headlands and bays", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=bbc+bitesize+headlands+and+bays" },
    { title: "Hard and soft engineering on the coast", channel: "Internet Geography", url: "https://www.youtube.com/results?search_query=internet+geography+coastal+management+hard+soft+engineering" },
  ],

  quiz: {
    mcq: [
      {
        id: "cland-quiz-mcq-1",
        question: "Which arrangement of rocks is most likely to produce a coastline of headlands and bays?",
        options: [
          "Bands of hard and soft rock running parallel to the coast",
          "Alternating bands of hard and soft rock running at right angles to the coast",
          "A single, uniform type of hard rock",
          "A single, uniform type of soft clay",
        ],
        answerIndex: 1,
        hint: "Think about which arrangement lets the sea reach the soft rock directly in several places.",
        explanation:
          "Bands at right angles (a discordant coast) expose both rock types to the sea, so the soft rock erodes into bays and the hard rock is left as headlands. Bands parallel to the coast (concordant) tend to produce coves only where the outer hard band is breached.",
        guideRef: "headlands-bays",
      },
      {
        id: "cland-quiz-mcq-2",
        question: "Which is the correct order of landforms as a headland is eroded?",
        options: [
          "Arch → cave → stump → stack",
          "Cave → stack → arch → stump",
          "Stack → arch → cave → stump",
          "Cave → arch → stack → stump",
        ],
        answerIndex: 3,
        hint: "Each stage is the previous one after a bit more erosion; the last stage is the smallest.",
        explanation:
          "A crack is widened into a cave, the cave breaks through to form an arch, the arch roof collapses to leave a stack, and the stack collapses to a stump. 'Cave → stack → arch' is tempting but impossible: a stack cannot turn back into an arch.",
        guideRef: "caves-arches-stacks",
      },
      {
        id: "cland-quiz-mcq-3",
        question: "Why are shingle beaches usually steeper than sandy beaches?",
        options: [
          "Water soaks into the gaps between pebbles, so the backwash is weak and pebbles stay at the top",
          "Pebbles are lighter than sand grains, so waves throw them higher",
          "Shingle beaches only form where destructive waves have a strong backwash",
          "Sand is eroded by hydraulic action but pebbles are not",
        ],
        answerIndex: 0,
        hint: "Think about what happens to the water after a wave rushes up a pebble beach.",
        explanation:
          "Percolation through the large gaps weakens the backwash, so it cannot drag pebbles back down, and they pile up steeply. Pebbles are heavier, not lighter, than sand grains, so the second option is wrong.",
        guideRef: "beaches",
      },
      {
        id: "cland-quiz-mcq-4",
        question: "A lighthouse has the six-figure grid reference 254 426. In which four-figure grid square is it?",
        options: ["4226", "2642", "2542", "2543"],
        answerIndex: 2,
        hint: "Take the first two digits of each half of the six-figure reference.",
        explanation:
          "The easting is 25(4) and the northing is 42(6), so the square is 2542, named by the lines at its bottom-left corner. 2543 is a common slip: 426 is 6/10 of the way up square 42, not inside square 43.",
        guideRef: "os-map-skills",
      },
    ],
    qa: [
      {
        id: "cland-quiz-qa-1",
        question: "State two differences between a stack and a stump.",
        marks: 2,
        hint: "Compare their height and when you can see them.",
        modelAnswer:
          "A stack is a tall, isolated pillar of rock that stands above the sea even at high tide, while a stump is a low remnant that is covered by the sea at high tide. A stump forms later in the sequence, when the base of a stack has been undercut and the stack has collapsed.",
        markScheme: [
          { point: "Stack is tall / stands above high tide; stump is low / covered at high tide", keywords: ["high tide", "covered", "taller", "low", "short", "submerged"] },
          { point: "Stump forms later, when a stack collapses", keywords: ["collapse", "later", "after", "remains of a stack", "falls"] },
        ],
        commonError: "Saying a stump is 'a small stack' without explaining that it is covered at high tide or forms when a stack collapses.",
        guideRef: "caves-arches-stacks",
      },
      {
        id: "cland-quiz-qa-2",
        question: "Explain how a stack forms. Refer to a named example in your answer.",
        marks: 6,
        hint: "Start with a line of weakness in a headland and work through every stage, naming a process each time.",
        modelAnswer:
          "Headlands such as the chalk Foreland in Dorset contain lines of weakness such as joints and faults. Waves attack these by hydraulic action, forcing water and compressed air into the cracks, and by abrasion, as rocks scrape the cliff. The crack is widened into a cave. The cave is eroded further until it breaks through the headland to form an arch. Waves keep eroding the base of the arch while weathering weakens its roof, until the roof becomes unsupported and collapses under gravity. This leaves an isolated pillar of rock called a stack, such as Old Harry Rocks.",
        markScheme: [
          { point: "Line of weakness (joint/fault/crack) in a headland", keywords: ["joint", "fault", "crack", "weakness"] },
          { point: "Names an erosion process (hydraulic action or abrasion) and how it works", keywords: ["hydraulic", "abrasion", "compress", "scrap", "corrasion"] },
          { point: "Crack widened into a cave", keywords: ["cave", "enlarg", "widen", "hollow"] },
          { point: "Cave erodes through the headland to form an arch", keywords: ["arch", "break through", "breaks through", "other side"] },
          { point: "Arch roof weakened (weathering) and collapses under gravity", keywords: ["roof", "collapse", "gravity", "weather", "falls"] },
          { point: "Leaves an isolated stack; named example", keywords: ["old harry", "twelve apostles", "apostle", "isolated", "durdle"] },
        ],
        commonError: "Describing what a stack looks like instead of explaining each stage, or writing 'erosion' without naming hydraulic action or abrasion.",
        guideRef: "caves-arches-stacks",
      },
      {
        id: "cland-quiz-qa-3",
        question: "Explain how a tombolo forms and name an example.",
        marks: 3,
        hint: "Think about what waves do as they pass an island close to the shore.",
        modelAnswer:
          "Waves refract (bend) around an island near the coast and meet in the sheltered water behind it, where they lose energy and deposit sediment. Longshore drift adds more sand or shingle until a ridge builds up that joins the island to the mainland. An example is St Ninian's tombolo in Shetland (or Chesil Beach, linking Portland to the mainland).",
        markScheme: [
          { point: "Waves refract around the island / lose energy in its shelter", keywords: ["refract", "bend", "shelter", "lose energy", "low energy"] },
          { point: "Deposition (with longshore drift) builds a ridge joining island to mainland", keywords: ["deposit", "longshore", "join", "connect", "link"] },
          { point: "Named example", keywords: ["ninian", "chesil", "portland", "shetland"] },
        ],
        commonError: "Confusing a tombolo with a bar: a bar joins two headlands across a bay; a tombolo joins an island to the mainland.",
        guideRef: "bars-tombolos",
      },
      {
        id: "cland-quiz-qa-4",
        question: "Evaluate the use of rock armour to protect the base of a cliff.",
        marks: 4,
        hint: "Give benefits and drawbacks, then reach a judgement.",
        modelAnswer:
          "Rock armour is large boulders piled at the foot of a cliff. It absorbs and breaks up wave energy, so less erosion happens at the cliff base and the notch is not cut so quickly. It is relatively cheap compared with a sea wall (roughly £1,000–£3,000 per metre) and quick to build. However, the rock is often imported and looks out of place, it can be shifted by large storms and needs maintenance, and it can make the beach dangerous or hard to use. Overall it is a good-value short-to-medium-term option where a whole sea wall would be too expensive.",
        markScheme: [
          { point: "How it works: absorbs/breaks wave energy, reducing erosion at the base", keywords: ["absorb", "energy", "break", "reduce erosion", "dissipat"] },
          { point: "Benefit: cheaper than a sea wall / quick to build", keywords: ["cheap", "cost", "quick", "£"] },
          { point: "Drawback: ugly / imported / moved by storms / access problems", keywords: ["ugly", "unnatural", "import", "storm", "moved", "access"] },
          { point: "Reaches a judgement", keywords: ["overall", "conclusion", "worth", "good value", "effective", "depends"] },
        ],
        commonError: "Only describing rock armour, with no drawback and no final judgement: 'evaluate' needs both sides and a conclusion.",
        guideRef: "coastal-management",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "cland-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "cland-mcq-p1-q01",
            question: "What is a headland?",
            options: [
              "A curved inlet of the sea between two areas of high land",
              "An area of land jutting out into the sea, with water on three sides",
              "A flat rocky area at the foot of a cliff, exposed at low tide",
              "A ridge of sand joining an island to the mainland",
            ],
            answerIndex: 1,
            hint: "Picture the shape on a map: which feature points out into the sea?",
            explanation:
              "A headland sticks out into the sea and is surrounded by water on three sides. The first option describes a bay, which is the curved inlet between headlands.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p1-q02",
            question: "On a discordant coast, in which rock type is a bay most likely to form?",
            options: ["Granite", "Chalk", "Clay", "Limestone"],
            answerIndex: 2,
            hint: "Bays form where the sea can erode quickly.",
            explanation:
              "Clay is soft and less resistant, so it is eroded back into a bay. Chalk and limestone are resistant enough to form headlands (as at the Foreland and Durlston Head in Dorset).",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p1-q03",
            question: "What does 'differential erosion' mean?",
            options: [
              "Different rock types are eroded at different rates",
              "Erosion is different in summer and winter",
              "Rivers and the sea erode in different directions",
              "Erosion happens only at high tide",
            ],
            answerIndex: 0,
            hint: "The word 'differential' refers to the rocks themselves.",
            explanation:
              "Differential erosion means rocks of different strength wear away at different speeds, which is why soft rock forms bays and hard rock forms headlands. Seasonal changes in waves are real but are not what the term means.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p1-q04",
            question: "As waves approach an uneven coastline they refract (bend). What effect does this have?",
            options: [
              "Wave energy is spread evenly along the whole coast",
              "Wave energy is concentrated in the bays",
              "Wave energy is concentrated on the headlands",
              "Wave energy is cancelled out completely",
            ],
            answerIndex: 2,
            hint: "Which parts of the coast are hit first and hardest as waves reach shallow water?",
            explanation:
              "Refraction focuses wave energy on headlands, which is why caves, arches and stacks form there. In the bays energy is spread out, so deposition (beaches) happens instead of rapid erosion.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p1-q05",
            question: "Swanage Bay in Dorset has formed in which kind of rock?",
            options: [
              "Hard chalk",
              "Soft clays and sands",
              "Granite",
              "Portland limestone",
            ],
            answerIndex: 1,
            hint: "The bay has retreated further than the land either side of it.",
            explanation:
              "Swanage Bay is cut into soft Wealden clays and sands. Chalk forms the Foreland headland to the north and Portland/Purbeck limestone forms Durlston Head and Peveril Point to the south.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p1-q06",
            question: "Where is a wave-cut notch formed?",
            options: [
              "At the top of the cliff, by freeze-thaw weathering",
              "On the beach, by deposition",
              "In the middle of the wave-cut platform",
              "At the base of the cliff, between high- and low-tide level",
            ],
            answerIndex: 3,
            hint: "The notch is cut where waves actually reach the cliff.",
            explanation:
              "Waves attack the cliff between high and low tide, cutting a notch by hydraulic action and abrasion. Freeze-thaw affects the cliff face and top but does not cut the notch.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p1-q07",
            question: "Why does the overhang above a wave-cut notch eventually collapse?",
            options: [
              "It is no longer supported from below, so gravity pulls it down",
              "Waves break over the top of the cliff and push it over",
              "Plants growing on the cliff top become too heavy",
              "The tide lifts it up and drops it",
            ],
            answerIndex: 0,
            hint: "Think about what has been removed underneath it.",
            explanation:
              "As the notch deepens, the rock above loses its support and falls under gravity. Waves erode the base; they do not normally break over the top of a cliff.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p1-q08",
            question: "When can you normally see a wave-cut platform?",
            options: [
              "Only during storms",
              "At high tide",
              "Never: it is always underwater",
              "At low tide",
            ],
            answerIndex: 3,
            hint: "It lies between the high- and low-tide lines.",
            explanation:
              "A wave-cut platform is covered at high tide and exposed at low tide, because it is the eroded base of the old cliff lying in the intertidal zone.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p1-q09",
            question: "Which lines of weakness in a headland are widened by waves to begin forming a cave?",
            options: [
              "Joints and faults",
              "Berms and cusps",
              "Contours and spot heights",
              "Swash and backwash",
            ],
            answerIndex: 0,
            hint: "These are cracks in the rock itself.",
            explanation:
              "Joints (small cracks) and faults (larger fractures) are weaker than the surrounding rock, so hydraulic action and abrasion widen them into caves. Berms and cusps are beach features, not weaknesses in rock.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p1-q10",
            question: "Durdle Door in Dorset is a famous example of which landform?",
            options: ["Stack", "Stump", "Arch", "Spit"],
            answerIndex: 2,
            hint: "You can see the sea through it.",
            explanation:
              "Durdle Door is a limestone arch. Old Harry, not Durdle Door, is the well-known Dorset stack.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p1-q11",
            question: "Old Harry Rocks are made of which rock?",
            options: ["Chalk", "Clay", "Basalt", "Sandstone"],
            answerIndex: 0,
            hint: "The same white rock forms the Foreland headland and the cliffs of the Seven Sisters.",
            explanation:
              "Old Harry is a chalk stack at the end of the chalk Foreland (Handfast Point). Clay is too weak to stand as a tall stack.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p1-q12",
            question: "What is a stump?",
            options: [
              "A cave that has broken through a headland",
              "The low remains of a collapsed stack, covered at high tide",
              "A tall pillar of rock standing in the sea",
              "A ridge of shingle at the top of a beach",
            ],
            answerIndex: 1,
            hint: "It is the final stage of the headland sequence.",
            explanation:
              "When a stack is undercut and collapses, a low stump is left, covered at high tide. A tall pillar is a stack, not a stump.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p1-q13",
            question: "Which description fits a constructive wave?",
            options: [
              "Tall and steep with a strong backwash",
              "Very frequent, about 13–15 per minute",
              "Mainly erodes cliffs during storms",
              "Low and flat with a strong swash and a weak backwash",
            ],
            answerIndex: 3,
            hint: "'Constructive' waves build beaches up.",
            explanation:
              "Constructive waves have a strong swash that pushes sediment up the beach and a weak backwash that leaves it there. Tall, steep, frequent waves with a strong backwash are destructive waves.",
            guideRef: "beaches",
          },
          {
            id: "cland-mcq-p1-q14",
            question: "What is a berm?",
            options: [
              "A curved hollow at the base of a cliff",
              "A ridge of sand or shingle parallel to the shore, marking a high-tide level",
              "A wooden barrier built at right angles to the beach",
              "The water that runs back down the beach after a wave",
            ],
            answerIndex: 1,
            hint: "It is a beach feature, built by deposition.",
            explanation:
              "Berms are ridges deposited at high-tide levels and run parallel to the coast. A wooden barrier at right angles to the beach is a groyne.",
            guideRef: "beaches",
          },
          {
            id: "cland-mcq-p1-q15",
            question: "Which process is mainly responsible for building spits?",
            options: ["Hydraulic action", "Freeze-thaw weathering", "Longshore drift and deposition", "Abrasion"],
            answerIndex: 2,
            hint: "Spits are depositional landforms: what moves sediment along the coast?",
            explanation:
              "Longshore drift carries sediment along the coast and deposits it where the coast changes direction. Hydraulic action and abrasion are erosion processes, which remove material rather than build landforms up.",
            guideRef: "spits",
          },
          {
            id: "cland-mcq-p1-q16",
            question: "Why does salt marsh often form behind a spit?",
            options: [
              "The water there is sheltered and low-energy, so fine mud and silt settle out",
              "Strong waves there deposit large pebbles",
              "The river erodes a deep channel there",
              "Longshore drift is strongest behind the spit",
            ],
            answerIndex: 0,
            hint: "Think about how calm the water is on the landward side of the spit.",
            explanation:
              "The spit shelters the water behind it, so it is calm enough for fine silt and mud to settle; salt-tolerant plants then colonise it. Strong waves would carry fine mud away, not deposit it.",
            guideRef: "spits",
          },
          {
            id: "cland-mcq-p1-q17",
            question: "What is a tombolo?",
            options: [
              "A ridge of sediment across a bay, trapping a lagoon",
              "A spit with a hooked end",
              "A low remnant of a stack",
              "A ridge of sediment joining an island to the mainland",
            ],
            answerIndex: 3,
            hint: "St Ninian's Isle in Shetland is linked to the mainland by one.",
            explanation:
              "A tombolo links an island to the mainland. A ridge across a bay trapping a lagoon is a bar, a different landform.",
            guideRef: "bars-tombolos",
          },
          {
            id: "cland-mcq-p1-q18",
            question: "What is the name of the lagoon behind Chesil Beach?",
            options: ["Slapton Ley", "Loe Pool", "The Fleet", "The Solent"],
            answerIndex: 2,
            hint: "It is home to the Abbotsbury Swannery.",
            explanation:
              "The Fleet lies behind Chesil Beach. Slapton Ley is behind the bar at Slapton Sands in Devon, and Loe Pool is behind Loe Bar in Cornwall.",
            guideRef: "bars-tombolos",
          },
          {
            id: "cland-mcq-p1-q19",
            question: "In a grid reference, which number is always given first?",
            options: ["The northing", "The easting", "The height", "The scale"],
            answerIndex: 1,
            hint: "Along the corridor, then up the stairs.",
            explanation:
              "Eastings (the numbers along the bottom, increasing eastwards) come first, then northings. Giving the northing first is one of the most common map-skill mistakes.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-mcq-p1-q20",
            question: "Which of these is a soft engineering strategy?",
            options: ["Beach nourishment", "Groynes", "Rock armour", "Sea wall"],
            answerIndex: 0,
            hint: "Soft engineering works with natural processes rather than building structures.",
            explanation:
              "Beach nourishment adds sand or shingle to a beach, working with nature. Groynes, rock armour and sea walls are all built structures, so they are hard engineering.",
            guideRef: "coastal-management",
          },
        ],
      },
      {
        id: "cland-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          {
            id: "cland-mcq-p2-q01",
            question: "On a concordant coastline, the bands of rock run…",
            options: [
              "at right angles to the coast",
              "in random patches",
              "parallel to the coast",
              "only vertically downwards",
            ],
            answerIndex: 2,
            hint: "'Concordant' means 'in agreement' with the line of the coast.",
            explanation:
              "On a concordant coast the rock bands run parallel to the shoreline, as at Lulworth Cove. Bands at right angles make a discordant coast.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p2-q02",
            question: "How did Lulworth Cove in Dorset form?",
            options: [
              "A river cut a deep valley that was then flooded",
              "A spit grew across a bay and trapped a lagoon",
              "Waves eroded a cave that collapsed into a stack",
              "The sea broke through a band of hard limestone, then rapidly eroded the soft clays and sands behind it",
            ],
            answerIndex: 3,
            hint: "It is on a concordant coast with hard rock on the outside.",
            explanation:
              "Once the outer Portland limestone was breached, the softer rocks behind were scooped out into an almost circular cove, stopped at the back by harder chalk. A spit trapping a lagoon would make a bar, not a cove.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p2-q03",
            question: "Which chalk headland separates Swanage Bay from Studland Bay?",
            options: [
              "The Foreland (Handfast Point)",
              "Durlston Head",
              "Portland Bill",
              "Spurn Head",
            ],
            answerIndex: 0,
            hint: "Old Harry Rocks stand at its tip.",
            explanation:
              "The Foreland (Handfast Point) lies between Swanage Bay to the south and Studland Bay to the north. Durlston Head is the limestone headland south of Swanage Bay.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p2-q04",
            question: "What is abrasion?",
            options: [
              "Rocks carried by the sea knocking into each other and becoming smaller and rounder",
              "Rocks and pebbles thrown by waves scraping and grinding away the cliff",
              "Chemicals in seawater dissolving the rock",
              "Air trapped in cracks being compressed by waves",
            ],
            answerIndex: 1,
            hint: "Think of sandpaper.",
            explanation:
              "Abrasion is the sandpaper effect of material hurled at the cliff. Rocks knocking into each other is attrition; compressed air in cracks is part of hydraulic action.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p2-q05",
            question: "As a cliff retreats over thousands of years, what happens to the wave-cut platform?",
            options: [
              "It gets narrower until it disappears",
              "It gets wider, which eventually slows the cliff's retreat because waves lose energy crossing it",
              "It stays the same width",
              "It rises above high-tide level",
            ],
            answerIndex: 1,
            hint: "The platform marks the ground the cliff has given up.",
            explanation:
              "The platform widens as the cliff retreats, and waves lose energy crossing the shallow rock, so erosion at the cliff slows (negative feedback). It does not rise above high tide; it stays in the intertidal zone.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p2-q06",
            question: "What rock are the Seven Sisters cliffs in East Sussex made of?",
            options: ["Clay", "Granite", "Sandstone", "Chalk"],
            answerIndex: 3,
            hint: "The cliffs are bright white.",
            explanation:
              "The Seven Sisters are white chalk cliffs with a chalk wave-cut platform below them. Clay would slump into gentle slopes rather than form tall vertical cliffs.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p2-q07",
            question: "The Holderness coast retreats about 2 m per year on average, much faster than the chalk cliffs of Dorset. What is the main reason?",
            options: [
              "Holderness has no waves",
              "Holderness is in a hotter climate",
              "Holderness is made of soft boulder clay, which is easily eroded",
              "Holderness has many groynes",
            ],
            answerIndex: 2,
            hint: "Think about rock resistance.",
            explanation:
              "Soft boulder clay is weak and slumps easily, so it retreats very fast. Groynes reduce erosion where they are built; they are not the reason Holderness erodes so quickly.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p2-q08",
            question: "What finally causes the roof of an arch to collapse, forming a stack?",
            options: [
              "Erosion at the base and weathering of the roof weaken it until gravity brings it down",
              "Longshore drift removes the roof",
              "Deposition makes the roof too heavy",
              "The tide rises above the roof and lifts it off",
            ],
            answerIndex: 0,
            hint: "Two things weaken it, and one force brings it down.",
            explanation:
              "Waves widen the arch from below while freeze-thaw, salt and chemical weathering weaken the roof; when it can no longer support itself it collapses under gravity. Longshore drift moves sediment along beaches; it does not remove rock roofs.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p2-q09",
            question: "Where are the Twelve Apostles?",
            options: ["New South Wales, Australia", "Victoria, Australia", "Dorset, England", "Cornwall, England"],
            answerIndex: 1,
            hint: "They are beside the Great Ocean Road.",
            explanation:
              "The Twelve Apostles are in Port Campbell National Park, Victoria, beside the Great Ocean Road. Dorset has its own stacks (Old Harry) but not the Apostles.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p2-q10",
            question: "What rock are the Twelve Apostles made of?",
            options: ["Chalk", "Granite", "Basalt", "Limestone"],
            answerIndex: 3,
            hint: "It is a sedimentary rock, softer than the chalk of Old Harry.",
            explanation:
              "The Apostles are limestone stacks, which erode relatively quickly under the powerful Southern Ocean waves. Chalk is the rock of Old Harry, not the Apostles.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p2-q11",
            question: "In January 1990, what happened to 'London Bridge' near the Twelve Apostles?",
            options: [
              "It was demolished to build a viewing platform",
              "It was protected by a sea wall",
              "The span joining it to the mainland collapsed, leaving the outer arch standing alone",
              "It was buried by a growing spit",
            ],
            answerIndex: 2,
            hint: "It is now called London Arch.",
            explanation:
              "The inner span collapsed, leaving the outer part isolated as London Arch (two tourists were stranded and rescued by helicopter). No sea wall protects these features; managers let natural erosion continue.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p2-q12",
            question: "Why do sandy beaches usually have a gentle slope?",
            options: [
              "Little water soaks into packed sand, so the backwash runs back over the surface and spreads sand down the beach",
              "Sand grains are heavier than pebbles",
              "Only destructive waves reach sandy beaches",
              "Sandy beaches are never affected by tides",
            ],
            answerIndex: 0,
            hint: "Compare what the backwash can do on sand and on shingle.",
            explanation:
              "Packed sand lets little water percolate, so the backwash stays strong enough to carry sand back down, giving a gentle profile. Sand grains are lighter, not heavier, than pebbles.",
            guideRef: "beaches",
          },
          {
            id: "cland-mcq-p2-q13",
            question: "What is a storm beach?",
            options: [
              "A beach that only exists in winter",
              "A beach made entirely of mud",
              "The area between low tide and the sea bed",
              "A ridge of the largest material thrown to the top of a beach by storm waves",
            ],
            answerIndex: 3,
            hint: "It is the highest ridge on the beach profile.",
            explanation:
              "Big storm waves throw large pebbles and boulders right to the top of the beach, forming a storm beach (storm ridge) above normal berms.",
            guideRef: "beaches",
          },
          {
            id: "cland-mcq-p2-q14",
            question: "Why is the beach at East Coast Park, Singapore, described as artificial?",
            options: [
              "It is made of plastic sand",
              "It was built with placed sand on reclaimed land and is held in place by breakwaters",
              "It formed naturally from eroded cliffs",
              "It is a spit created by longshore drift",
            ],
            answerIndex: 1,
            hint: "Think about where the land itself came from.",
            explanation:
              "East Coast Park sits on land reclaimed from the late 1960s–1970s; its sand was placed there and rock breakwaters keep it from drifting away. There are no eroding cliffs nearby to supply it naturally.",
            guideRef: "beaches",
          },
          {
            id: "cland-mcq-p2-q15",
            question: "What causes the recurved (hooked) end of a spit?",
            options: [
              "A river eroding the tip",
              "Freeze-thaw weathering",
              "A change in wind direction and wave refraction around the tip",
              "Constructive waves building a berm",
            ],
            answerIndex: 2,
            hint: "Something must push sediment in a new direction at the end.",
            explanation:
              "Secondary winds and waves bending around the end of the spit carry sediment inwards, curving the tip. A river current limits how far a spit grows but does not curve it.",
            guideRef: "spits",
          },
          {
            id: "cland-mcq-p2-q16",
            question: "Where does most of the sediment that builds Spurn Head come from?",
            options: [
              "Eroded boulder-clay cliffs of the Holderness coast",
              "Coral reefs offshore",
              "Sand blown from the Sahara",
              "Sediment carried down the River Thames",
            ],
            answerIndex: 0,
            hint: "It is moved south along the Yorkshire coast by longshore drift.",
            explanation:
              "Holderness's rapidly eroding clay cliffs supply sediment that longshore drift carries south to Spurn. The Thames reaches the sea far to the south, in the Thames Estuary.",
            guideRef: "spits",
          },
          {
            id: "cland-mcq-p2-q17",
            question: "Where is Hurst Castle Spit?",
            options: [
              "Yorkshire, at the mouth of the Humber",
              "Dorset, attached to the Isle of Portland",
              "Shetland, joining an island to the mainland",
              "Hampshire, at the western entrance to the Solent",
            ],
            answerIndex: 3,
            hint: "Henry VIII built a castle on its tip to guard a stretch of water.",
            explanation:
              "Hurst Castle Spit is in Hampshire, built by longshore drift from Christchurch Bay; its castle guarded the Solent. The Humber spit is Spurn Head.",
            guideRef: "spits",
          },
          {
            id: "cland-mcq-p2-q18",
            question: "Which is an example of a bar with a lagoon behind it?",
            options: ["Spurn Head", "Slapton Sands, Devon", "Durdle Door", "Old Harry Rocks"],
            answerIndex: 1,
            hint: "The lagoon is called a 'ley'.",
            explanation:
              "Slapton Sands is a shingle bar with the freshwater lagoon Slapton Ley behind it. Spurn Head is a spit, attached at one end only.",
            guideRef: "bars-tombolos",
          },
          {
            id: "cland-mcq-p2-q19",
            question: "On a 1:25,000 map, how many centimetres represent 1 km on the ground?",
            options: ["1 cm", "2 cm", "4 cm", "25 cm"],
            answerIndex: 2,
            hint: "1 km = 100,000 cm. Divide by 25,000.",
            explanation:
              "100,000 ÷ 25,000 = 4, so 4 cm = 1 km (and each grid square is 4 cm wide). 2 cm = 1 km is the 1:50,000 scale.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-mcq-p2-q20",
            question: "What is the main disadvantage of building groynes?",
            options: [
              "They starve beaches further down-drift of sediment, increasing erosion there",
              "They make the beach narrower where they are built",
              "They speed up longshore drift",
              "They have to be replaced every week",
            ],
            answerIndex: 0,
            hint: "Think about where the trapped sand would otherwise have gone.",
            explanation:
              "Groynes trap sand, widening the local beach but cutting the supply to places down-drift, which then erode faster. They make the local beach wider, not narrower.",
            guideRef: "coastal-management",
          },
        ],
      },
      {
        id: "cland-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "cland-mcq-p3-q01",
            question: "Which pairing of rock and landform is correct on a discordant coast?",
            options: [
              "Clay → headland; chalk → bay",
              "Sand → headland; limestone → bay",
              "Limestone → bay; clay → bay",
              "Chalk → headland; clay → bay",
            ],
            answerIndex: 3,
            hint: "The resistant rock is left standing out.",
            explanation:
              "Resistant chalk is left as a headland and weak clay is eroded into a bay. The first option has them the wrong way round, a very common slip.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p3-q02",
            question: "A coastline has alternating bands of granite (very hard) and clay, running at right angles to the sea. What would you predict?",
            options: [
              "A straight cliffed coast with no bays",
              "Granite headlands separated by clay bays",
              "Clay headlands separated by granite bays",
              "A large spit growing out from the granite",
            ],
            answerIndex: 1,
            hint: "Apply differential erosion to a new place.",
            explanation:
              "This is a discordant coast, so the clay will erode back into bays, leaving granite headlands. A straight coast would be expected only if the rocks were equally resistant.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p3-q03",
            question: "Which rock forms Peveril Point and Durlston Head at the southern end of Swanage Bay?",
            options: [
              "Purbeck and Portland limestone",
              "Chalk",
              "Wealden clay",
              "Boulder clay",
            ],
            answerIndex: 0,
            hint: "It is the same family of rock as the outer band breached at Lulworth Cove.",
            explanation:
              "The southern headlands are resistant Purbeck and Portland limestone. Wealden clay is the soft rock that Swanage Bay is cut into.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p3-q04",
            question: "Which statement best describes hydraulic action?",
            options: [
              "Pebbles rubbing against each other until they become rounded",
              "Seawater dissolving chalk and limestone",
              "The force of waves forcing water and air into cracks, compressing the air and widening the cracks",
              "Sand blown by the wind scouring the cliff face",
            ],
            answerIndex: 2,
            hint: "It is about the power of the water itself, not the rocks it carries.",
            explanation:
              "Hydraulic action is the sheer force of water, including air compressed in cracks, which weakens and widens them. Pebbles rubbing together is attrition.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p3-q05",
            question: "A cliff-top path was 120 m from the cliff edge in 2006 and 84 m from it in 2024. What was the average rate of cliff retreat?",
            options: ["1.5 m per year", "2 m per year", "3 m per year", "36 m per year"],
            answerIndex: 1,
            hint: "Work out the total retreat, then divide by the number of years.",
            explanation:
              "120 − 84 = 36 m over 2024 − 2006 = 18 years, so 36 ÷ 18 = 2 m per year. 36 m is the total retreat, not the yearly rate.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p3-q06",
            question: "Which type of weathering particularly affects chalk and limestone cliffs, because rainwater is slightly acidic?",
            options: [
              "Onion-skin weathering",
              "Attrition",
              "Hydraulic action",
              "Carbonation (chemical weathering)",
            ],
            answerIndex: 3,
            hint: "Two of the options are not weathering at all.",
            explanation:
              "Rain absorbs carbon dioxide to become a weak carbonic acid that slowly dissolves calcium carbonate in chalk and limestone. Attrition and hydraulic action are erosion processes, not weathering.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p3-q07",
            question: "Why do wave-cut platforms rarely grow more than a few hundred metres wide?",
            options: [
              "As the platform widens, waves break further out and lose energy before reaching the cliff, so erosion slows",
              "The platform is quickly covered by sand dunes",
              "Platforms are destroyed by freeze-thaw every winter",
              "The tide range always stops at 300 m",
            ],
            answerIndex: 0,
            hint: "Think of the platform as a shock absorber.",
            explanation:
              "A wide, shallow platform makes waves break early and lose energy (negative feedback), slowing further cliff retreat. Tides do not have a fixed 300 m limit.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p3-q08",
            question: "Two caves are eroded back-to-back on opposite sides of a narrow headland. What is most likely to form next?",
            options: ["A stump", "A spit", "An arch", "A berm"],
            answerIndex: 2,
            hint: "What happens when the two hollows meet?",
            explanation:
              "When the caves meet they break through the headland, forming an arch. A stump comes much later, after a stack has collapsed.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p3-q09",
            question: "'Old Harry's Wife' was a chalk stack near Old Harry. What is she today?",
            options: [
              "An arch",
              "A stump, after the stack collapsed in 1896",
              "A cave in the Foreland headland",
              "Part of Chesil Beach",
            ],
            answerIndex: 1,
            hint: "Think about the final stage of the sequence.",
            explanation:
              "Old Harry's Wife collapsed in 1896, leaving only a stump. A stack cannot turn back into an arch or a cave.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p3-q10",
            question: "Which statement about the number of stacks at the Twelve Apostles is accurate?",
            options: [
              "There are exactly twelve, all protected by rock armour",
              "There were twelve until a storm in 1990",
              "There are over thirty, but only twelve are visible",
              "There have never been twelve; about eight remain after one collapsed in 2005",
            ],
            answerIndex: 3,
            hint: "The name was chosen for marketing, not counting.",
            explanation:
              "The 1920s tourism name never matched the number of stacks, and a collapse in July 2005 left eight. The 1990 event was the collapse of London Bridge's inner span, not the loss of an Apostle.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p3-q11",
            question: "Which feature would most improve a 6-mark answer to 'Explain how a stack forms'?",
            options: [
              "Linking each stage with sequence words and naming the process responsible at each step",
              "A detailed description of the stack's colour and height",
              "A list of all the tourist attractions nearby",
              "Writing the definition of a stack three times",
            ],
            answerIndex: 0,
            hint: "'Explain' means show how and why one stage leads to the next.",
            explanation:
              "Examiners reward a logical sequence with named processes (hydraulic action, abrasion, weathering, collapse) and an example. Describing appearance earns little in an 'explain' question.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-mcq-p3-q12",
            question: "Beach A has a slope of about 1 in 4 and is made of 6 cm pebbles. Beach B has a slope of about 1 in 40 and is fine sand. What best explains the difference?",
            options: [
              "Beach A has stronger backwash, which piles pebbles up",
              "Beach B is only affected by destructive waves",
              "On Beach A, water percolates between the pebbles, weakening the backwash; on Beach B, backwash runs over the surface and spreads sand out",
              "Pebbles are carried further by longshore drift than sand",
            ],
            answerIndex: 2,
            hint: "Link particle size to how much water soaks in.",
            explanation:
              "Large gaps between pebbles let water drain in, so backwash is weak and the beach is steep; packed sand keeps the backwash on the surface, so the beach is gentle. A stronger backwash would drag pebbles down, not pile them up.",
            guideRef: "beaches",
          },
          {
            id: "cland-mcq-p3-q13",
            question: "During winter storms, destructive waves usually…",
            options: [
              "build up large berms at the top of the beach",
              "drag sediment offshore, making the beach lower and narrower",
              "form new spits within a few days",
              "have no effect on beaches",
            ],
            answerIndex: 1,
            hint: "Destructive waves have a strong backwash.",
            explanation:
              "The strong backwash of storm waves pulls sand offshore, cutting the beach back; gentle summer waves then rebuild it. Berms are built by constructive waves.",
            guideRef: "beaches",
          },
          {
            id: "cland-mcq-p3-q14",
            question: "Why were rock breakwaters built along Singapore's East Coast Park?",
            options: [
              "To act like mini headlands, creating sheltered bays where the placed sand stays in place",
              "To stop ships entering the Singapore Strait",
              "To form a tombolo to Pulau Ubin",
              "To speed up longshore drift",
            ],
            answerIndex: 0,
            hint: "Think about where beaches naturally form on a coast of headlands and bays.",
            explanation:
              "The breakwaters copy natural headlands: they reduce wave energy and longshore drift so sand settles in the bays between them. Speeding up longshore drift would carry the sand away.",
            guideRef: "beaches",
          },
          {
            id: "cland-mcq-p3-q15",
            question: "Why can a spit not usually grow all the way across a river estuary?",
            options: [
              "The salt marsh behind it stops it",
              "Longshore drift reverses at the estuary",
              "Spits stop growing after 100 years",
              "The river's current carries sediment out to sea, keeping a channel open",
            ],
            answerIndex: 3,
            hint: "What else is flowing through the estuary?",
            explanation:
              "The flow of the river (and tidal currents) sweeps sediment away from the channel, so the spit cannot close the estuary. Salt marsh forms behind the spit; it does not stop its growth.",
            guideRef: "spits",
          },
          {
            id: "cland-mcq-p3-q16",
            question: "What happened to Spurn Head in the storm surge of December 2013?",
            options: [
              "It doubled in length",
              "It was protected by a new sea wall",
              "Its narrow neck was breached, so it is now cut off at the highest tides",
              "It joined the opposite side of the Humber, becoming a bar",
            ],
            answerIndex: 2,
            hint: "Spurn is now sometimes called a tidal island.",
            explanation:
              "The 2013 surge broke through the narrowest part, so at high spring tides Spurn is cut off from the mainland. It has not crossed the Humber, so it is still a spit, not a bar.",
            guideRef: "spits",
          },
          {
            id: "cland-mcq-p3-q17",
            question: "How do the pebbles on Chesil Beach change along its length?",
            options: [
              "They are the same size everywhere",
              "They get larger from west (West Bay) to east (Portland)",
              "They get smaller from west to east",
              "They are sand in the middle and boulders at both ends",
            ],
            answerIndex: 1,
            hint: "Fishermen in fog could tell where they had landed.",
            explanation:
              "Chesil is graded from pea-sized pebbles at West Bay to fist-sized ones near Portland in the east. 'Smaller from west to east' reverses the real pattern.",
            guideRef: "bars-tombolos",
          },
          {
            id: "cland-mcq-p3-q18",
            question: "Which combination of processes best explains the formation of a tombolo?",
            options: [
              "Wave refraction around an island plus deposition by longshore drift in its shelter",
              "Hydraulic action and abrasion of the island",
              "A river depositing a delta",
              "Freeze-thaw weathering of the mainland",
            ],
            answerIndex: 0,
            hint: "Tombolos are depositional, and islands change the way waves move.",
            explanation:
              "Waves bend around the island and lose energy in its shelter, depositing sediment that longshore drift adds to until a ridge links the island to the land. Hydraulic action and abrasion are erosional and would not build a ridge.",
            guideRef: "bars-tombolos",
          },
          {
            id: "cland-mcq-p3-q19",
            question: "A point lies 3/10 of the way east across the square between eastings 24 and 25, and 7/10 of the way north between northings 31 and 32. What is its six-figure grid reference?",
            options: ["317243", "243713", "243317", "2431"],
            answerIndex: 2,
            hint: "Easting digits first (24 and 3 tenths), then northing digits (31 and 7 tenths).",
            explanation:
              "Easting 24 + 3 tenths = 243; northing 31 + 7 tenths = 317, giving 243317. 317243 puts the northing first, and 2431 is only a four-figure square reference.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-mcq-p3-q20",
            question: "What is managed retreat?",
            options: [
              "Building a sea wall further inland",
              "Allowing low-value land to flood in a controlled way, creating salt marsh that absorbs wave energy",
              "Moving sand from one beach to another by lorry",
              "Removing all people from the coast",
            ],
            answerIndex: 1,
            hint: "Medmerry in West Sussex is an example.",
            explanation:
              "Managed retreat lets the sea in behind new, set-back defences, and the resulting salt marsh soaks up wave energy. Moving sand onto a beach is beach nourishment.",
            guideRef: "coastal-management",
          },
        ],
      },
      {
        id: "cland-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "cland-mcq-p4-q01",
            question: "Which landform is most typical of a concordant coastline?",
            options: ["A spit", "A wave-cut platform", "A cove", "A tombolo"],
            answerIndex: 2,
            hint: "Think of Lulworth.",
            explanation:
              "On a concordant coast the sea breaches the outer hard band and scoops out the soft rock behind, forming a cove. Wave-cut platforms can form on almost any cliffed coast, so they are not typical of concordant coasts in particular.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p4-q02",
            question: "Why do beaches usually form in bays rather than on headlands?",
            options: [
              "Wave refraction spreads energy out in bays, so waves lose energy and deposit sediment",
              "Bays are made of sand, so they are already beaches",
              "Headlands have no waves",
              "Bays are always above high-tide level",
            ],
            answerIndex: 0,
            hint: "Link wave energy to erosion and deposition.",
            explanation:
              "In bays, refracted waves have less energy, so deposition beats erosion and beaches build up. Headlands do have waves, in fact the most powerful ones, which is why they erode.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-mcq-p4-q03",
            question: "If sea level rose by 1 m, where would a new wave-cut notch most likely be cut?",
            options: [
              "1 m lower down the cliff",
              "On the wave-cut platform only",
              "In the bay behind the cliff",
              "About 1 m higher up the cliff",
            ],
            answerIndex: 3,
            hint: "The notch forms where the waves hit, between the tide lines.",
            explanation:
              "Higher sea level raises the zone between high and low tide, so waves attack the cliff higher up. The old platform would then be under deeper water, letting more wave energy reach the cliff.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-mcq-p4-q04",
            question: "On an OS map, contour lines along a stretch of coast are drawn very close together. What does this show?",
            options: [
              "A flat sandy beach",
              "Steeply rising land, such as a cliff or steep slope",
              "A salt marsh",
              "Deep water offshore",
            ],
            answerIndex: 1,
            hint: "Contours join points of equal height.",
            explanation:
              "Closely spaced contours mean height changes quickly over a short distance, so the land is steep. A beach or salt marsh is flat, with few or widely spaced contours.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-mcq-p4-q05",
            question: "On an OS map you see a small isolated rock symbol in the sea just off the tip of a headland. What is it most likely to be?",
            options: ["A bay", "A spit", "A stack", "A berm"],
            answerIndex: 2,
            hint: "It is separated from the land by water.",
            explanation:
              "An isolated rock just off a headland fits a stack (or stump). A spit would be attached to the land at one end.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-mcq-p4-q06",
            question: "A church has the six-figure grid reference 235432. Which statement is correct?",
            options: [
              "It is in grid square 2343",
              "It is in grid square 3243",
              "It is in grid square 2344",
              "Its easting is 432",
            ],
            answerIndex: 0,
            hint: "Split the six figures into two halves of three.",
            explanation:
              "Easting 235 and northing 432 put it in square 2343 (bottom-left lines 23 and 43). 2344 is a common slip: 432 is 2/10 of the way up square 43.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-mcq-p4-q07",
            question: "On a 1:50,000 map, two headlands are 6 cm apart. What is the real distance between them?",
            options: ["0.3 km", "1.2 km", "6 km", "3 km"],
            answerIndex: 3,
            hint: "At 1:50,000, 2 cm = 1 km.",
            explanation:
              "6 cm × 50,000 = 300,000 cm = 3 km (or 6 ÷ 2 = 3 km). 6 km wrongly treats each centimetre as 1 km, and 0.3 km comes from dropping a zero in the conversion.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-mcq-p4-q08",
            question: "You walk from grid reference 250420 to 240430. In which direction are you travelling?",
            options: ["North-east", "North-west", "South-west", "South-east"],
            answerIndex: 1,
            hint: "Compare the eastings, then the northings.",
            explanation:
              "The easting falls from 250 to 240 (west) and the northing rises from 420 to 430 (north), so you travel north-west. North-east would need the easting to increase.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-mcq-p4-q09",
            question: "Which is a disadvantage of a sea wall?",
            options: [
              "It is cheap and quick to build",
              "It absorbs wave energy like a beach",
              "Reflected waves can scour away the beach in front, and it is very expensive",
              "It increases the amount of sand on the beach",
            ],
            answerIndex: 2,
            hint: "Think about what happens to the energy the wall reflects.",
            explanation:
              "Sea walls cost roughly £5,000–£10,000+ per metre, and the energy they reflect can strip the beach in front of them. They are not cheap, so the first option is wrong.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-mcq-p4-q10",
            question: "Which statement about rock armour is correct?",
            options: [
              "Large boulders absorb wave energy; it is cheaper than a sea wall but rock is often imported and can be moved by storms",
              "It is a type of soft engineering that uses plants",
              "It works by trapping sand moving by longshore drift",
              "It is built by dredging sand from offshore",
            ],
            answerIndex: 0,
            hint: "It is also called rip-rap.",
            explanation:
              "Rock armour (roughly £1,000–£3,000 per metre) breaks up waves before they reach the cliff or wall. Trapping sand from longshore drift is the job of groynes.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-mcq-p4-q11",
            question: "What does dune regeneration usually involve?",
            options: [
              "Building concrete walls in front of the dunes",
              "Removing all vegetation so sand can move freely",
              "Dredging the sea bed",
              "Planting marram grass, fencing areas and building boardwalks",
            ],
            answerIndex: 3,
            hint: "Plant roots hold sand together.",
            explanation:
              "Marram grass roots bind the sand, and fences and boardwalks keep trampling feet off. Removing vegetation would make dunes blow away.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-mcq-p4-q12",
            question: "Roughly what share of Singapore's land is less than 5 m above mean sea level?",
            options: ["About 5%", "About 30%", "About 70%", "About 95%"],
            answerIndex: 1,
            hint: "It is a large minority of the island.",
            explanation:
              "About 30% of Singapore lies below 5 m above mean sea level, which is why sea-level rise is a national priority. About 70–80% is instead the share of the coastline protected by hard structures.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-mcq-p4-q13",
            question: "Which agency became Singapore's national coastal protection agency in 2020?",
            options: ["URA", "HDB", "PUB", "NEA"],
            answerIndex: 2,
            hint: "It already managed water supply and drainage.",
            explanation:
              "PUB, the national water agency, took on coastal protection, linking it with flood management. URA plans land use but is not the coastal protection agency.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-mcq-p4-q14",
            question: "Since 2011, how high above mean sea level must new reclaimed land in Singapore be built?",
            options: ["At least 4 m", "At least 1 m", "At least 10 m", "Exactly at mean sea level"],
            answerIndex: 0,
            hint: "It was raised by 1 m from the old standard of 3 m.",
            explanation:
              "The minimum level was raised from 3 m to 4 m above mean sea level in 2011 to allow for sea-level rise. Building at mean sea level would flood at every high tide.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-mcq-p4-q15",
            question: "Medmerry in West Sussex (completed 2013) is an example of which strategy?",
            options: ["Groynes", "Sea wall", "Beach nourishment", "Managed realignment (retreat)"],
            answerIndex: 3,
            hint: "New banks were built inland and the sea was let in.",
            explanation:
              "At Medmerry the sea was allowed to flood farmland behind new embankments, creating about 180 hectares of intertidal habitat. No new sea wall was built on the old shoreline.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-mcq-p4-q16",
            question: "In a Shoreline Management Plan, what does 'hold the line' mean?",
            options: [
              "Let the sea flood the land",
              "Keep the coastline in its current position using defences",
              "Build new land out into the sea",
              "Do nothing and let nature take its course",
            ],
            answerIndex: 1,
            hint: "The 'line' is the present shoreline.",
            explanation:
              "Hold the line means maintaining the existing coastline with defences such as sea walls. Building out into the sea is 'advance the line'.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-mcq-p4-q17",
            question: "Groynes are built at Town A. Longshore drift moves sediment from west to east. Which place is most at risk of increased erosion?",
            options: [
              "The beach immediately west of Town A",
              "Town A's own beach",
              "The coast immediately east of Town A",
              "Places 100 km inland",
            ],
            answerIndex: 2,
            hint: "Which side is 'down-drift'?",
            explanation:
              "Sediment drifts west to east, so the groynes trap it at Town A and starve the coast to the east (down-drift). The west side is up-drift and still receives sediment.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-mcq-p4-q18",
            question: "A coastal scheme costs £8 million and protects property worth £20 million. What is its benefit–cost ratio?",
            options: ["0.4", "12", "28", "2.5"],
            answerIndex: 3,
            hint: "Divide the benefit by the cost.",
            explanation:
              "£20 m ÷ £8 m = 2.5, so every £1 spent protects £2.50 of property. 0.4 is the cost divided by the benefit, the wrong way round.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-mcq-p4-q19",
            question: "About how long is Chesil Beach?",
            options: ["About 3 km", "About 29 km", "About 290 km", "About 0.5 km"],
            answerIndex: 1,
            hint: "It is about 18 miles.",
            explanation:
              "Chesil Beach runs about 29 km (18 miles) from West Bay to Portland. About 0.5 km is the length of St Ninian's tombolo.",
            guideRef: "bars-tombolos",
          },
          {
            id: "cland-mcq-p4-q20",
            question: "Which best describes St Ninian's tombolo?",
            options: [
              "A shingle spit across the Humber Estuary",
              "A limestone arch in Dorset",
              "A sand ridge about 500 m long linking an island to the Shetland mainland",
              "A lagoon behind a bar in Cornwall",
            ],
            answerIndex: 2,
            hint: "It is in the far north of Scotland.",
            explanation:
              "St Ninian's is a sand tombolo about 500 m long, the largest active one in the UK. The spit across the Humber is Spurn Head.",
            guideRef: "bars-tombolos",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "cland-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "cland-qa-p1-q01",
            question: "Define the term 'headland'.",
            marks: 2,
            hint: "Describe its shape and what it is made of.",
            modelAnswer:
              "A headland is an area of land that juts out into the sea, with water on three sides. It is usually made of hard, resistant rock such as chalk or limestone.",
            markScheme: [
              { point: "Land jutting / sticking out into the sea", keywords: ["jut", "stick", "protrud", "out into the sea", "extend"] },
              { point: "Water on three sides / made of resistant (hard) rock", keywords: ["three sides", "3 sides", "resistant", "hard rock", "harder"] },
            ],
            commonError: "Describing a bay instead (a curved inlet) or saying headlands are made of soft rock.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-qa-p1-q02",
            question: "What is meant by a discordant coastline?",
            marks: 2,
            hint: "Two ideas: what the rock bands are like, and which way they run.",
            modelAnswer:
              "A discordant coastline has alternating bands of hard (resistant) and soft (less resistant) rock that run at right angles to the coastline, such as the coast around Swanage in Dorset.",
            markScheme: [
              { point: "Alternating bands of hard and soft rock", keywords: ["hard", "soft", "alternat", "resistant", "band"] },
              { point: "Bands run at right angles / perpendicular to the coast", keywords: ["right angle", "perpendicular", "90", "across the coast", "at an angle"] },
            ],
            commonError: "Saying the bands run parallel to the coast; that is a concordant coastline.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-qa-p1-q03",
            question: "Explain how headlands and bays form.",
            marks: 4,
            hint: "Start with the geology, then explain why each rock type behaves differently.",
            modelAnswer:
              "Headlands and bays form on a discordant coast, where bands of hard and soft rock run at right angles to the sea. The soft rock, such as clay, is less resistant, so it is eroded quickly by hydraulic action and abrasion and retreats to form a bay, such as Swanage Bay. The hard rock, such as chalk, resists erosion and is left jutting out as a headland, such as the Foreland. This is called differential erosion.",
            markScheme: [
              { point: "Discordant coast: bands of rock at right angles to the coast", keywords: ["discordant", "right angle", "perpendicular", "alternat"] },
              { point: "Soft rock eroded faster, retreats to form a bay", keywords: ["bay", "eroded faster", "erodes faster", "erode quickly", "retreat"] },
              { point: "Hard rock resists erosion and forms a headland", keywords: ["headland", "resist", "hard rock", "chalk", "limestone"] },
              { point: "Names an erosion process or 'differential erosion'", keywords: ["hydraulic", "abrasion", "corrasion", "differential"] },
            ],
            commonError: "Only saying 'soft rock erodes and hard rock doesn't'. Hard rock does erode, just more slowly; name the processes too.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-qa-p1-q04",
            question: "Describe a wave-cut notch and where it is found.",
            marks: 2,
            hint: "Shape, then location on the cliff.",
            modelAnswer:
              "A wave-cut notch is a curved hollow undercut into the base of a cliff. It is found between the high-tide and low-tide levels, where waves attack the cliff.",
            markScheme: [
              { point: "Curved hollow / undercut in the cliff", keywords: ["hollow", "undercut", "indent", "dent", "curved", "groove"] },
              { point: "At the base of the cliff, between high and low tide", keywords: ["high tide", "low tide", "tide", "base", "bottom", "foot"] },
            ],
            commonError: "Placing the notch at the top of the cliff, or confusing it with a cave formed along a joint.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-qa-p1-q05",
            question: "Explain how a wave-cut platform forms.",
            marks: 6,
            hint: "N-O-C-R: Notch, Overhang, Collapse, Retreat. Name processes at each step.",
            modelAnswer:
              "Destructive waves attack the base of a cliff between the high- and low-tide levels. Hydraulic action and abrasion erode the rock, cutting a wave-cut notch. As the notch gets deeper, the rock above becomes an overhang. Eventually the overhang is unsupported and collapses under gravity. The waves wash the fallen rock away and the process repeats, so the cliff retreats inland. The flat, gently sloping rock left behind at the old cliff base is the wave-cut platform, exposed at low tide, for example below the Seven Sisters.",
            markScheme: [
              { point: "Waves attack the cliff base between high and low tide", keywords: ["destructive", "base", "between high", "foot", "tide"] },
              { point: "Erosion by hydraulic action and/or abrasion", keywords: ["hydraulic", "abrasion", "corrasion", "scrap"] },
              { point: "A wave-cut notch forms", keywords: ["notch", "undercut", "hollow"] },
              { point: "Overhang develops above the notch", keywords: ["overhang", "unsupported", "hanging"] },
              { point: "Overhang collapses under gravity", keywords: ["collapse", "gravity", "falls", "rockfall"] },
              { point: "Cliff retreats, leaving the platform behind", keywords: ["retreat", "moves back", "inland", "left behind", "leaves behind"] },
            ],
            commonError: "Forgetting the repeated cycle and retreat: the platform is what is left after the cliff has moved back many times.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-qa-p1-q06",
            question: "Explain why caves often form along joints or faults in a headland.",
            marks: 2,
            hint: "Why would the sea attack these places first?",
            modelAnswer:
              "Joints and faults are weaknesses: the rock there is cracked and less resistant than the solid rock around it. Waves can force water and air into the cracks by hydraulic action, and abrasion scrapes them wider, so they are enlarged into caves.",
            markScheme: [
              { point: "Joints/faults are lines of weakness, easier to erode", keywords: ["weak", "less resistant", "easier", "crack"] },
              { point: "Hydraulic action/abrasion widen the crack into a cave", keywords: ["hydraulic", "abrasion", "widen", "enlarg", "compress"] },
            ],
            commonError: "Saying waves 'make' the crack. The joints and faults are already in the rock; the waves exploit and widen them.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-qa-p1-q07",
            question: "Explain the formation of an arch, such as Durdle Door.",
            marks: 4,
            hint: "Arches start as cracks. Take it one step at a time.",
            modelAnswer:
              "A headland has lines of weakness such as joints or faults. Waves erode these by hydraulic action, forcing air and water into the cracks, and by abrasion. The crack is enlarged into a cave. The cave keeps being eroded backwards until it breaks right through the headland (sometimes meeting a cave from the other side), forming an arch such as Durdle Door in Dorset.",
            markScheme: [
              { point: "Line of weakness (joint/fault/crack)", keywords: ["joint", "fault", "crack", "weakness"] },
              { point: "Erosion process named and explained", keywords: ["hydraulic", "abrasion", "compress", "scrap"] },
              { point: "Crack enlarged into a cave", keywords: ["cave", "enlarg", "hollow"] },
              { point: "Cave breaks through the headland to form the arch", keywords: ["break through", "breaks through", "through the headland", "other side", "both sides", "meet"] },
            ],
            commonError: "Going straight from crack to arch without the cave stage, or continuing on to stacks (not asked).",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-qa-p1-q08",
            question: "Use evidence from the Twelve Apostles area to show that it is a rapidly changing coastline.",
            marks: 3,
            hint: "Think of dated events and the rate of erosion.",
            modelAnswer:
              "In July 2005 one of the limestone stacks suddenly collapsed, leaving eight standing. In January 1990 the span of London Bridge joining it to the mainland collapsed, leaving London Arch isolated. Powerful Southern Ocean waves erode the base of the soft limestone cliffs by roughly 2 cm a year, so new stacks are forming as others fall.",
            markScheme: [
              { point: "A stack collapsed in 2005 (eight remain)", keywords: ["2005", "eight", "stack collapsed", "one collapsed"] },
              { point: "London Bridge collapsed in 1990", keywords: ["london", "1990", "bridge", "arch collapsed"] },
              { point: "Powerful waves erode the soft limestone base (about 2 cm per year)", keywords: ["2 cm", "southern ocean", "powerful", "limestone", "undercut"] },
            ],
            commonError: "Giving general statements ('it erodes a lot') without dates or figures as evidence.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-qa-p1-q09",
            question: "Explain why shingle beaches are usually steeper than sandy beaches.",
            marks: 3,
            hint: "Follow the water from one wave on a pebble beach.",
            modelAnswer:
              "Shingle is made of large pebbles with big gaps between them. When a wave breaks, much of the water percolates (soaks) down into these gaps instead of flowing back over the surface. This makes the backwash weak, so it cannot drag the pebbles back down, and they pile up into a steep slope.",
            markScheme: [
              { point: "Pebbles are large with big gaps between them", keywords: ["large", "gaps", "spaces", "coarse", "big"] },
              { point: "Water percolates / soaks into the gaps", keywords: ["percolat", "soak", "drain", "infiltrat", "seep"] },
              { point: "Weak backwash leaves pebbles at the top, so the slope is steep", keywords: ["weak backwash", "backwash is weak", "less backwash", "backwash weak", "pile", "stay"] },
            ],
            commonError: "Saying pebbles are 'lighter' or that waves are stronger on shingle beaches. The key is percolation weakening the backwash.",
            guideRef: "beaches",
          },
          {
            id: "cland-qa-p1-q10",
            question: "Define the term 'berm'.",
            marks: 2,
            hint: "It is a beach feature; think shape and position.",
            modelAnswer:
              "A berm is a ridge of sand or shingle running parallel to the shoreline, deposited at a high-tide level by constructive waves.",
            markScheme: [
              { point: "A ridge of sand/shingle parallel to the coast", keywords: ["ridge", "mound", "bank", "parallel"] },
              { point: "Marks a high-tide level", keywords: ["high tide", "high-tide", "tide level", "tide mark"] },
            ],
            commonError: "Confusing a berm with a groyne (a wooden barrier built at right angles to the beach).",
            guideRef: "beaches",
          },
          {
            id: "cland-qa-p1-q11",
            question: "Explain how a spit forms.",
            marks: 4,
            hint: "S-P-I-T-S: Sediment, Prevailing wind, Into sheltered water, Turns, Salt marsh.",
            modelAnswer:
              "Longshore drift moves sediment along the coast: swash carries it up the beach at an angle set by the prevailing wind, and backwash drags it straight back down. Where the coastline changes direction, for example at a river estuary, the drift carries on and deposits sediment in the sheltered, shallower water, building a ridge out to sea. A change in wind direction and wave refraction curve the end, forming a recurved hook, and salt marsh forms in the calm water behind.",
            markScheme: [
              { point: "Longshore drift moves sediment along the coast", keywords: ["longshore", "drift", "zig", "swash"] },
              { point: "Coastline changes direction (bend/estuary)", keywords: ["changes direction", "bend", "estuary", "river mouth", "coast turns"] },
              { point: "Deposition in sheltered/shallow water builds the ridge", keywords: ["deposit", "shelter", "lose energy", "calm", "shallow"] },
              { point: "Change in wind direction/refraction forms a recurved end", keywords: ["recurv", "hook", "curve", "wind direction", "secondary wind", "refract"] },
            ],
            commonError: "Saying a spit forms by erosion, or leaving out why the spit starts where the coast changes direction.",
            guideRef: "spits",
          },
          {
            id: "cland-qa-p1-q12",
            question: "Explain why a salt marsh often forms behind a spit.",
            marks: 3,
            hint: "Water energy → what is deposited → what grows.",
            modelAnswer:
              "The spit shelters the water behind it from waves, so it is calm and low-energy. In these conditions fine silt and mud settle out of the water and build up into mudflats. Salt-tolerant plants such as cordgrass colonise the mud, trapping more sediment and forming a salt marsh.",
            markScheme: [
              { point: "Water behind the spit is sheltered / low energy", keywords: ["shelter", "calm", "low energy", "protected", "still"] },
              { point: "Fine silt/mud is deposited", keywords: ["mud", "silt", "fine", "deposit"] },
              { point: "Salt-tolerant plants colonise and trap sediment", keywords: ["plant", "vegetation", "halophyte", "colonis", "grass", "salt-tolerant"] },
            ],
            commonError: "Not linking the marsh to the low energy of the water: fine mud can only settle where waves are weak.",
            guideRef: "spits",
          },
          {
            id: "cland-qa-p1-q13",
            question: "A stack has the six-figure grid reference 258425. Give the four-figure reference of the square it lies in, and state which part of the reference is given first.",
            marks: 2,
            hint: "Take the first two digits of each half.",
            modelAnswer:
              "The stack lies in grid square 2542. The easting (the number along the bottom of the map) is always given first, then the northing.",
            markScheme: [
              { point: "Correct square 2542", keywords: ["2542", "25 42", "25/42"] },
              { point: "Easting given first", keywords: ["easting", "along the corridor", "across first", "first"] },
            ],
            commonError: "Writing 4225 (northing first) or 2543 (rounding 425 up instead of using the bottom-left line).",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-qa-p1-q14",
            question: "Explain how groynes help to protect a coastline.",
            marks: 3,
            hint: "What do they trap, and what does that do for the coast?",
            modelAnswer:
              "Groynes are barriers of timber or rock built at right angles to the beach. They trap sediment being moved along the coast by longshore drift, so sand builds up on their up-drift side. This creates a wider beach, which absorbs wave energy before waves reach the cliffs or sea front, reducing erosion.",
            markScheme: [
              { point: "Barriers built at right angles to the beach", keywords: ["right angle", "perpendicular", "across the beach", "fence", "barrier"] },
              { point: "Trap sediment moved by longshore drift", keywords: ["trap", "longshore", "drift", "catch", "builds up"] },
              { point: "Wider beach absorbs wave energy, reducing erosion", keywords: ["wider", "absorb", "energy", "bigger beach", "reduce erosion"] },
            ],
            commonError: "Saying groynes 'block the waves'. They mainly trap sand; the bigger beach does the protecting.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-qa-p1-q15",
            question: "A cliff-top footpath was measured from the cliff edge. 2005: 50 m; 2015: 34 m; 2025: 22 m. (a) Calculate the total retreat. (b) Calculate the average rate of retreat per year. (c) Describe how the rate changed.",
            marks: 3,
            hint: "Total ÷ years for (b); compare 2005–2015 with 2015–2025 for (c).",
            modelAnswer:
              "(a) 50 − 22 = 28 m of retreat. (b) 28 m ÷ 20 years = 1.4 m per year. (c) The rate slowed down: 16 m in the first decade (1.6 m per year) but only 12 m in the second decade (1.2 m per year).",
            markScheme: [
              { point: "Total retreat 28 m", keywords: ["28", "twenty-eight", "twenty eight"] },
              { point: "Average rate 1.4 m per year", keywords: ["1.4", "1.40", "one point four"] },
              { point: "Rate slowed (1.6 then 1.2 m per year)", keywords: ["slow", "1.6", "1.2", "decreas", "less"] },
            ],
            commonError: "Dividing by the wrong number of years, or describing the change without quoting figures.",
            guideRef: "cliffs-platforms",
          },
        ],
      },
      {
        id: "cland-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "cland-qa-p2-q01",
            question: "What is a bay?",
            marks: 2,
            hint: "Shape, and where it sits relative to headlands.",
            modelAnswer:
              "A bay is a curved inlet of the sea between two headlands. It forms in softer, less resistant rock such as clay, and often has a beach.",
            markScheme: [
              { point: "A curved inlet / indentation of the coast", keywords: ["inlet", "curved", "indent", "cove", "sweep"] },
              { point: "Between two headlands / in softer rock", keywords: ["between", "two headlands", "soft", "less resistant", "clay"] },
            ],
            commonError: "Defining a bay only as 'where the beach is' without its shape or position.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-qa-p2-q02",
            question: "Explain why headlands are eroded more rapidly than bays once they have formed.",
            marks: 3,
            hint: "Think about what happens to waves as they approach an uneven coast.",
            modelAnswer:
              "As waves approach an uneven coastline they refract (bend) in the shallower water near the headlands. This concentrates wave energy on the headlands, so erosion by hydraulic action and abrasion is focused there. In the bays the wave energy is spread out, so waves are weaker and tend to deposit sediment instead of eroding.",
            markScheme: [
              { point: "Waves refract / bend", keywords: ["refract", "bend", "bending", "change direction"] },
              { point: "Energy is concentrated on headlands", keywords: ["concentrat", "focus", "converg", "more energy"] },
              { point: "Energy spread out in bays, so deposition happens there", keywords: ["spread", "diverg", "deposit", "less energy", "weaker"] },
            ],
            commonError: "Saying headlands erode faster because they are soft. They are hard rock, but they receive the most wave energy.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-qa-p2-q03",
            question: "Compare a discordant coastline with a concordant coastline, using a named example of each.",
            marks: 4,
            hint: "Direction of rock bands, and the landforms each produces.",
            modelAnswer:
              "On a discordant coast the bands of hard and soft rock run at right angles to the coast, so the soft rock is eroded into bays and the hard rock forms headlands, as at Swanage Bay and the Foreland in Dorset. On a concordant coast the bands run parallel to the coast, so a hard outer band protects the soft rock; where it is breached, the soft rock behind is scooped out into a cove, as at Lulworth Cove.",
            markScheme: [
              { point: "Discordant: rock bands at right angles to the coast", keywords: ["right angle", "perpendicular", "across", "90"] },
              { point: "Concordant: rock bands parallel to the coast", keywords: ["parallel", "same direction", "along the coast", "concordant"] },
              { point: "Discordant produces headlands and bays, e.g. Swanage", keywords: ["swanage", "foreland", "studland", "old harry", "headlands and bays"] },
              { point: "Concordant produces coves where breached, e.g. Lulworth", keywords: ["lulworth", "cove", "breach", "stair hole"] },
            ],
            commonError: "Swapping the definitions, or giving examples without saying which landforms each type of coast produces.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-qa-p2-q04",
            question: "Explain why cliff collapses often happen suddenly after storms or periods of heavy rain.",
            marks: 3,
            hint: "Think about what water does inside the cliff, and what storm waves do at its base.",
            modelAnswer:
              "Heavy rain soaks into the cliff and saturates the rock, making it much heavier. Water in the pores and cracks also lubricates and weakens the rock, so it slips more easily. At the same time, storm (destructive) waves undercut the base of the cliff, removing support, so the weakened cliff collapses suddenly.",
            markScheme: [
              { point: "Rain saturates the cliff, adding weight", keywords: ["saturat", "heavier", "weight", "soak"] },
              { point: "Water lubricates / weakens the rock so it slips", keywords: ["lubricat", "slip", "weaken", "pore", "slide"] },
              { point: "Storm waves undercut the base, removing support", keywords: ["storm", "undercut", "notch", "destructive", "base"] },
            ],
            commonError: "Only mentioning waves and forgetting the effect of rainwater inside the cliff (or the other way round).",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-qa-p2-q05",
            question: "Describe the cliffs at the Seven Sisters and Birling Gap, and suggest why the National Trust has chosen not to defend them.",
            marks: 3,
            hint: "Rock type and height, rate of change, and then cost versus value.",
            modelAnswer:
              "The Seven Sisters are white chalk cliffs up to about 77 m high at Haven Brow, with a wave-cut platform below. They retreat on average roughly half a metre a year, in sudden collapses. The National Trust does not defend them because defences would be very expensive compared with the small number of buildings at risk, and it wants to let natural processes continue on this protected landscape.",
            markScheme: [
              { point: "Chalk cliffs, up to about 77 m high", keywords: ["chalk", "77", "haven brow", "white"] },
              { point: "Retreating (about 0.5 m a year) through sudden collapses", keywords: ["retreat", "0.5", "half a metre", "collapse", "erod"] },
              { point: "Not defended: too costly / low value / natural process", keywords: ["cost", "expensive", "natural", "value", "not worth", "few"] },
            ],
            commonError: "Saying the cliffs are 'not important'. Give the real reasons: cost compared with value, and a policy of letting nature run.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-qa-p2-q06",
            question: "Explain why arches eventually collapse.",
            marks: 3,
            hint: "Attack from below, weakening from above, and a force that finishes the job.",
            modelAnswer:
              "Waves keep eroding the base and sides of the arch by hydraulic action and abrasion, widening the gap. Meanwhile the roof is weakened by weathering, such as freeze-thaw, salt weathering and chemical weathering. Eventually the roof is too thin and unsupported to hold its own weight, and it collapses under gravity, leaving a stack.",
            markScheme: [
              { point: "Waves erode / widen the base of the arch", keywords: ["base", "widen", "undercut", "hydraulic", "abrasion"] },
              { point: "Roof weakened by weathering", keywords: ["weather", "freeze", "salt", "carbonation", "chemical"] },
              { point: "Roof collapses under gravity when unsupported", keywords: ["gravity", "unsupported", "weight", "heavy", "collapse"] },
            ],
            commonError: "Saying waves hit the top of the arch. They erode the base; weathering attacks the roof.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-qa-p2-q07",
            question: "Explain how a stack becomes a stump.",
            marks: 3,
            hint: "Stacks erode in the same way that cliffs do.",
            modelAnswer:
              "Waves attack the base of the stack between high and low tide. Hydraulic action and abrasion cut a wave-cut notch around its base. Eventually the stack is undercut so much that it collapses, leaving a low stump that is covered by the sea at high tide, like the stump of Old Harry's Wife.",
            markScheme: [
              { point: "Waves erode a notch at the base of the stack", keywords: ["notch", "base", "undercut", "bottom"] },
              { point: "Names hydraulic action or abrasion", keywords: ["hydraulic", "abrasion", "corrasion"] },
              { point: "Stack collapses leaving a low stump covered at high tide", keywords: ["collapse", "high tide", "covered", "low", "stump"] },
            ],
            commonError: "Saying the stack 'wears down from the top'. It is undercut at the base and topples.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-qa-p2-q08",
            question: "You are drawing an annotated sketch of Old Harry Rocks. Suggest four annotations that would explain the landform.",
            marks: 4,
            hint: "Rock type, the landforms visible, processes, and a piece of history.",
            modelAnswer:
              "1) 'Made of chalk, a resistant rock'. 2) 'Old Harry: a stack, an isolated pillar left when an arch roof collapsed'. 3) 'Wave-cut notch at the base, eroded by hydraulic action and abrasion; the stack will eventually topple'. 4) 'Stump: the remains of Old Harry's Wife, a stack that collapsed in 1896; the Foreland headland behind still has caves and arches'.",
            markScheme: [
              { point: "Identifies the rock as chalk", keywords: ["chalk", "white rock", "cretaceous"] },
              { point: "Identifies the stack and how it formed (arch collapse)", keywords: ["stack", "pillar", "isolated", "arch collapsed"] },
              { point: "Notes erosion at the base (notch, hydraulic action/abrasion)", keywords: ["notch", "hydraulic", "abrasion", "undercut", "base"] },
              { point: "Notes the stump (Old Harry's Wife, 1896) or the Foreland headland", keywords: ["stump", "wife", "1896", "foreland", "handfast", "headland"] },
            ],
            commonError: "Writing labels (just names) instead of annotations (labels that explain a process or give a fact).",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-qa-p2-q09",
            question: "Explain how a beach forms in a bay.",
            marks: 4,
            hint: "Energy → wave type → deposition → where the sediment comes from.",
            modelAnswer:
              "In a bay, wave refraction spreads wave energy out, so waves are weaker and the water is more sheltered. Constructive waves are common: their strong swash carries sediment up the beach and their weak backwash leaves it behind. As the waves lose energy, they deposit sand or shingle, which builds up over time. The sediment comes from eroded cliffs and headlands, rivers and the sea bed, and is brought into the bay by longshore drift.",
            markScheme: [
              { point: "Bays are sheltered / low energy (refraction spreads energy)", keywords: ["refract", "low energy", "spread", "shelter", "calm", "less energy"] },
              { point: "Constructive waves: strong swash, weak backwash", keywords: ["constructive", "strong swash", "weak backwash", "swash"] },
              { point: "Sediment is deposited and builds up", keywords: ["deposit", "drop", "build up", "accumulat"] },
              { point: "Source of sediment (cliffs, rivers, longshore drift)", keywords: ["longshore", "river", "cliff", "supply", "eroded material"] },
            ],
            commonError: "Not mentioning deposition at all, or saying beaches form where waves are strongest.",
            guideRef: "beaches",
          },
          {
            id: "cland-qa-p2-q10",
            question: "Contrast constructive and destructive waves.",
            marks: 4,
            hint: "Shape, frequency, swash/backwash, and effect on the beach.",
            modelAnswer:
              "Constructive waves are low and flat, while destructive waves are tall and steep. Constructive waves are less frequent (about 6–8 per minute) than destructive waves (about 13–15 per minute). Constructive waves have a strong swash and weak backwash, but destructive waves have a weak swash and a strong backwash. As a result constructive waves build beaches up by deposition, while destructive waves remove sediment and erode the coast.",
            markScheme: [
              { point: "Shape: low/flat vs tall/steep", keywords: ["low", "flat", "tall", "steep", "high"] },
              { point: "Frequency: about 6–8 vs 13–15 per minute", keywords: ["per minute", "frequen", "6-8", "13-15", "fewer"] },
              { point: "Strong swash/weak backwash vs weak swash/strong backwash", keywords: ["swash", "backwash", "runs up", "runs back"] },
              { point: "Effect: build/deposit vs remove/erode", keywords: ["build", "deposit", "erode", "remove", "destroy"] },
            ],
            commonError: "Describing each wave separately without using comparative words (whereas, while, but).",
            guideRef: "beaches",
          },
          {
            id: "cland-qa-p2-q11",
            question: "Using Spurn Head as an example, describe the main features of a spit.",
            marks: 4,
            hint: "Location, size, where its sediment comes from, and its shape or recent changes.",
            modelAnswer:
              "Spurn Head is a sand and shingle spit across the mouth of the Humber Estuary in East Yorkshire. It is about 5 km long but in places only about 50 m wide. Its sediment comes from the rapidly eroding boulder-clay cliffs of Holderness and is carried south by longshore drift. It has a recurved end curving into the estuary, with salt marsh behind it, and since the December 2013 storm surge breached its neck it is cut off at the highest tides.",
            markScheme: [
              { point: "Location: mouth of the Humber, East Yorkshire", keywords: ["humber", "yorkshire", "estuary"] },
              { point: "Size: about 5 km long, narrow", keywords: ["5 km", "5km", "3.5 miles", "50 m", "narrow"] },
              { point: "Sediment from Holderness by longshore drift", keywords: ["holderness", "longshore", "drift", "boulder clay"] },
              { point: "Recurved end / salt marsh / 2013 breach", keywords: ["2013", "breach", "tidal island", "recurv", "salt marsh", "hook"] },
            ],
            commonError: "Writing about spits in general with no Spurn-specific facts or figures.",
            guideRef: "spits",
          },
          {
            id: "cland-qa-p2-q12",
            question: "What is a lagoon, and how is it linked to a bar?",
            marks: 2,
            hint: "Think about what is trapped when a ridge closes off a bay.",
            modelAnswer:
              "A lagoon is a shallow body of still or calm water. It forms when a bar grows across a bay and joins two headlands, trapping the water behind it, as at Slapton Ley behind Slapton Sands.",
            markScheme: [
              { point: "A shallow body of still water", keywords: ["shallow", "still", "calm", "body of water", "lake", "pool"] },
              { point: "Trapped behind a bar that joins two headlands", keywords: ["trapped", "behind", "cut off", "two headlands", "across the bay"] },
            ],
            commonError: "Confusing a lagoon with a salt marsh, or forgetting to explain the bar's role.",
            guideRef: "bars-tombolos",
          },
          {
            id: "cland-qa-p2-q13",
            question: "On a 1:25,000 map, contour lines are very close together and end at a black cliff symbol. Below the cliff, yellow stipple is shown between the Mean High Water and Mean Low Water lines. Describe what this stretch of coast looks like.",
            marks: 3,
            hint: "Translate each symbol into a landscape feature.",
            modelAnswer:
              "The land rises very steeply to high cliffs, shown by the close contours and cliff symbol. At the foot of the cliffs there is a sandy beach (yellow stipple). The beach lies in the foreshore, so it is covered at high tide and exposed at low tide.",
            markScheme: [
              { point: "Steep land / high cliffs", keywords: ["steep", "cliff", "high"] },
              { point: "A sandy beach below the cliffs", keywords: ["sand", "beach", "yellow"] },
              { point: "Beach is in the foreshore: covered at high tide, exposed at low tide", keywords: ["low tide", "foreshore", "intertidal", "covered at high", "between the tide"] },
            ],
            commonError: "Listing the symbols ('there are brown lines') instead of describing the landscape they show.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-qa-p2-q14",
            question: "Explain the advantages and disadvantages of beach nourishment.",
            marks: 4,
            hint: "How it works, one or two benefits, one or two problems.",
            modelAnswer:
              "Beach nourishment adds sand or shingle, often dredged from offshore, to widen a beach so that it absorbs more wave energy. It looks natural and a wider beach attracts tourists. However, the new sediment is gradually washed away, so the work must be repeated every few years, which is costly over time. Dredging can also damage sea-bed habitats where the sand is taken from.",
            markScheme: [
              { point: "How it works: adds sediment, wider beach absorbs energy", keywords: ["add", "wider", "absorb", "energy", "dredg"] },
              { point: "Advantage: natural appearance / tourism", keywords: ["natural", "touris", "attract", "looks"] },
              { point: "Disadvantage: must be repeated / ongoing cost", keywords: ["repeat", "replen", "ongoing", "every few years", "washed away"] },
              { point: "Disadvantage: dredging harms sea-bed habitats", keywords: ["habitat", "sea bed", "seabed", "ecosystem", "wildlife", "marine"] },
            ],
            commonError: "Calling beach nourishment 'hard engineering' or claiming it is a permanent fix.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-qa-p2-q15",
            question: "Explain why Singapore invests heavily in coastal protection.",
            marks: 4,
            hint: "Height of the land, future threat, what is at risk, and why it cannot simply move back.",
            modelAnswer:
              "About 30% of Singapore's land is less than 5 m above mean sea level, so it is very vulnerable to flooding. Sea levels around Singapore could rise by up to about 1 m by 2100, and storm surges and high tides add to the risk. Very valuable areas lie on the coast, such as the city centre around Marina Bay, Changi Airport and the industries on Jurong Island. Singapore is small and land is scarce, so it cannot retreat inland; it has to defend its coast, which is why it plans to spend S$100 billion or more over 100 years.",
            markScheme: [
              { point: "Low-lying: about 30% under 5 m above sea level", keywords: ["30", "low-lying", "low lying", "5 m", "below 5"] },
              { point: "Threat of sea-level rise (up to about 1 m by 2100)", keywords: ["sea level", "sea-level", "rise", "2100", "1 m"] },
              { point: "Valuable land/infrastructure at risk (Changi, CBD, Jurong)", keywords: ["changi", "cbd", "marina", "airport", "jurong", "valuable"] },
              { point: "Small, land-scarce island: cannot retreat", keywords: ["small", "scarce", "no space", "cannot retreat", "limited land", "can't retreat"] },
            ],
            commonError: "Writing generally about 'climate change' without Singapore-specific facts such as the 30% figure or named places at risk.",
            guideRef: "coastal-management",
          },
        ],
      },
      {
        id: "cland-qa-p3",
        title: "Written Paper 3",
        questions: [
          {
            id: "cland-qa-p3-q01",
            question: "What is a stack?",
            marks: 2,
            hint: "What it looks like, and how it came to be there.",
            modelAnswer:
              "A stack is a tall, isolated pillar of rock standing in the sea, separated from the headland. It forms when the roof of an arch collapses.",
            markScheme: [
              { point: "Isolated pillar/column of rock in the sea", keywords: ["pillar", "column", "isolated", "tower", "separate"] },
              { point: "Forms when an arch roof collapses", keywords: ["arch", "collapse", "roof"] },
            ],
            commonError: "Calling a stack 'a big rock in the sea' without linking it to the collapse of an arch.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-qa-p3-q02",
            question: "What is a spit?",
            marks: 2,
            hint: "Shape and material, then how it is connected to the land.",
            modelAnswer:
              "A spit is a long, narrow ridge of sand or shingle that is attached to the land at one end and extends out into the sea or across a river mouth, such as Spurn Head.",
            markScheme: [
              { point: "Long, narrow ridge of sand/shingle", keywords: ["ridge", "narrow", "sand", "shingle", "long"] },
              { point: "Attached to land at one end, extending into the sea/estuary", keywords: ["attached", "one end", "joined", "into the sea", "estuary", "river mouth"] },
            ],
            commonError: "Forgetting that a spit is attached at only one end (attached at both ends would be a bar or tombolo).",
            guideRef: "spits",
          },
          {
            id: "cland-qa-p3-q03",
            question: "Name two processes of erosion that widen cracks in a headland, and explain how one of them works.",
            marks: 3,
            hint: "One uses the water itself; the other uses what the water carries.",
            modelAnswer:
              "Hydraulic action and abrasion. Hydraulic action is the force of waves: as a wave hits the cliff it forces water and air into a crack, compressing the air; when the wave pulls back the air expands explosively, gradually widening the crack.",
            markScheme: [
              { point: "Names hydraulic action", keywords: ["hydraulic", "water pressure", "force of the water"] },
              { point: "Names abrasion", keywords: ["abrasion", "corrasion", "sandpaper"] },
              { point: "Explains one correctly", keywords: ["compress", "air", "scrap", "grind", "pressure", "expand"] },
            ],
            commonError: "Naming attrition, which wears down the rocks being carried, not the headland.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-qa-p3-q04",
            question: "Explain why a wave-cut platform slows down its own growth.",
            marks: 3,
            hint: "Think about where waves break when the platform is wide.",
            modelAnswer:
              "As the cliff retreats, the wave-cut platform gets wider. Waves now have to cross a wide area of shallow rock, so they break further out from the cliff. Friction with the platform makes them lose energy, so they reach the cliff with less power. This means less erosion at the cliff base, so the cliff retreats more slowly: a negative feedback.",
            markScheme: [
              { point: "Wider platform makes waves break further out / in shallow water", keywords: ["break", "further out", "shallow", "offshore", "earlier"] },
              { point: "Waves lose energy (friction) crossing it", keywords: ["lose energy", "friction", "less energy", "weaker"] },
              { point: "Less erosion at the cliff, so retreat slows (negative feedback)", keywords: ["slow", "less erosion", "negative feedback", "feedback", "reduce"] },
            ],
            commonError: "Saying the platform 'protects' the cliff without explaining how it removes wave energy.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-qa-p3-q05",
            question: "Explain how weathering, as well as erosion, helps a cliff to retreat.",
            marks: 3,
            hint: "Weathering breaks rock down in place; think of rain, frost and salt.",
            modelAnswer:
              "Rainwater is a weak acid, so chemical weathering (carbonation) slowly dissolves chalk and limestone. In cold climates freeze-thaw splits rock as water freezes and expands in cracks, and salt crystals growing in cracks do the same. This weakens and loosens the cliff face and top, so rock falls more easily, and the loose material is then removed by the waves.",
            markScheme: [
              { point: "Chemical weathering / carbonation dissolves rock", keywords: ["carbonation", "chemical", "acid", "dissolv"] },
              { point: "Freeze-thaw or salt weathering splits rock", keywords: ["freeze", "thaw", "salt", "frost", "expand"] },
              { point: "Weakens the cliff so it collapses / falls more easily", keywords: ["weaken", "loosen", "collapse", "falls", "slip", "unstable"] },
            ],
            commonError: "Mixing up weathering (breakdown in place) with erosion (wearing away and removal by waves).",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-qa-p3-q06",
            question: "The base of a stack is being undercut by about 2 cm per year. Engineers estimate it will collapse when the notch is 3 m deep. (a) Estimate how many years until it collapses. (b) Give one reason why your estimate might be wrong.",
            marks: 2,
            hint: "Convert metres to centimetres first.",
            modelAnswer:
              "(a) 3 m = 300 cm; 300 ÷ 2 = 150 years. (b) Erosion does not happen at a steady rate: a single big storm could remove a lot of rock at once, or weathering of joints could make it collapse much sooner.",
            markScheme: [
              { point: "150 years", keywords: ["150", "one hundred and fifty", "hundred and fifty"] },
              { point: "Reason: rate not constant (storms, weathering, joints)", keywords: ["storm", "not constant", "vary", "weathering", "joint", "sudden"] },
            ],
            commonError: "Forgetting to convert 3 m into 300 cm and answering 1.5 years.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-qa-p3-q07",
            question: "Explain how Chesil Beach formed and why its pebbles are graded.",
            marks: 4,
            hint: "Think about the end of the last ice age, and about the pattern of pebble sizes along it.",
            modelAnswer:
              "At the end of the last ice age, melting ice made sea levels rise. Waves pushed a huge ridge of shingle landwards until it rested against the coast, linking the Isle of Portland to the mainland and trapping the Fleet Lagoon behind it. The pebbles are graded, from small at West Bay in the west to large near Portland in the east, because waves and drift sort material by size along the beach.",
            markScheme: [
              { point: "Sea levels rose after the last ice age", keywords: ["ice age", "sea level", "sea-level", "melt", "rising"] },
              { point: "Waves pushed shingle landwards / onshore", keywords: ["pushed", "landward", "onshore", "roll", "swept"] },
              { point: "Links Portland; Fleet Lagoon behind", keywords: ["portland", "fleet", "lagoon", "tombolo"] },
              { point: "Pebbles graded: small in the west, large in the east", keywords: ["graded", "grading", "larger", "bigger", "west", "east"] },
            ],
            commonError: "Explaining Chesil only as an ordinary spit, missing the role of rising sea levels after the ice age.",
            guideRef: "bars-tombolos",
          },
          {
            id: "cland-qa-p3-q08",
            question: "Explain how a bar forms.",
            marks: 4,
            hint: "A bar starts life as a spit.",
            modelAnswer:
              "Longshore drift carries sediment along the coast. Where the coast curves into a bay, the sediment is deposited and a spit grows out across the bay. If there is no strong river current to keep a channel open, the spit keeps growing until it joins the headland on the other side, forming a bar. The water trapped behind it becomes a lagoon, as at Slapton Sands and Slapton Ley in Devon.",
            markScheme: [
              { point: "Longshore drift carries sediment", keywords: ["longshore", "drift", "swash"] },
              { point: "A spit grows out across the bay", keywords: ["spit", "grows", "across", "extends"] },
              { point: "Joins two headlands", keywords: ["two headlands", "headland", "joins", "connect", "other side"] },
              { point: "Traps a lagoon behind", keywords: ["lagoon", "trap", "ley", "cut off"] },
            ],
            commonError: "Describing a bar as joining an island to the mainland; that is a tombolo.",
            guideRef: "bars-tombolos",
          },
          {
            id: "cland-qa-p3-q09",
            question: "A student draws a beach profile from the sea to the land. Name and briefly describe three features they should label.",
            marks: 3,
            hint: "Work up the beach from low tide to the top.",
            modelAnswer:
              "Foreshore: the zone between low and high tide, washed by waves. Berm: a ridge of sand or shingle parallel to the shore, marking a high-tide level. Storm beach: the highest ridge of the largest material, thrown up by storm waves, at the top of the backshore before the dunes or cliff.",
            markScheme: [
              { point: "Foreshore (between low and high tide)", keywords: ["foreshore", "intertidal", "between high and low", "low tide"] },
              { point: "Berm (ridge at a high-tide level)", keywords: ["berm", "ridge", "high-tide level", "high tide level"] },
              { point: "Storm beach / backshore / dunes at the top", keywords: ["storm beach", "storm ridge", "backshore", "dune", "largest"] },
            ],
            commonError: "Naming features without saying where they are or what they are.",
            guideRef: "beaches",
          },
          {
            id: "cland-qa-p3-q10",
            question: "Explain why breakwaters are needed at East Coast Park in Singapore.",
            marks: 3,
            hint: "Where did the beach come from, and what would happen to it without help?",
            modelAnswer:
              "East Coast Park is built on reclaimed land with an artificial beach of placed sand, so without protection the sand and the reclaimed land would be eroded. The rock breakwaters act like mini headlands, reducing wave energy and creating sheltered bays. They also stop longshore drift from carrying the sand away, so the beach stays in place.",
            markScheme: [
              { point: "Reclaimed land / artificial beach would erode", keywords: ["reclaim", "artificial", "man-made", "placed sand", "erode"] },
              { point: "Breakwaters act like headlands, reducing wave energy", keywords: ["headland", "reduce energy", "less energy", "shelter", "break waves", "calm"] },
              { point: "Stop longshore drift removing sand / hold sand in bays", keywords: ["longshore", "drift", "hold", "trap", "keep sand", "stay"] },
            ],
            commonError: "Saying breakwaters are for boats or swimmers, rather than explaining their role in holding the beach.",
            guideRef: "beaches",
          },
          {
            id: "cland-qa-p3-q11",
            question: "Explain how longshore drift moves sediment along a coast.",
            marks: 4,
            hint: "Swash and backwash do different things.",
            modelAnswer:
              "The prevailing wind makes waves approach the beach at an angle. The swash carries sediment up the beach at that same angle. The backwash then drags it straight back down the beach, at right angles to the shore, under gravity. This is repeated wave after wave, so the sediment moves along the coast in a zig-zag.",
            markScheme: [
              { point: "Prevailing wind makes waves approach at an angle", keywords: ["prevailing wind", "angle", "oblique", "diagonal"] },
              { point: "Swash carries sediment up the beach at an angle", keywords: ["swash", "up the beach", "carries up"] },
              { point: "Backwash returns straight down under gravity", keywords: ["backwash", "gravity", "straight down", "perpendicular", "right angle"] },
              { point: "Repeated zig-zag moves sediment along the coast", keywords: ["zig", "along the coast", "along the beach", "sideways", "repeat"] },
            ],
            commonError: "Saying the backwash also goes back at an angle. It runs straight down the slope under gravity.",
            guideRef: "spits",
          },
          {
            id: "cland-qa-p3-q12",
            question: "Explain how to give a six-figure grid reference.",
            marks: 3,
            hint: "Three steps: order, which square, then the extra digits.",
            modelAnswer:
              "First find the grid square using the easting and northing lines at its bottom-left corner, giving the easting first ('along the corridor, then up the stairs'). Then imagine the square divided into tenths in each direction. Add the number of tenths east after the easting, and the number of tenths north after the northing, e.g. 254 426.",
            markScheme: [
              { point: "Eastings first, then northings", keywords: ["easting", "along the corridor", "across", "first"] },
              { point: "Use the bottom-left corner lines of the square", keywords: ["bottom left", "bottom-left", "corner", "square"] },
              { point: "Divide the square into tenths and add the extra digit to each", keywords: ["tenth", "10 parts", "ten parts", "estimate", "divide"] },
            ],
            commonError: "Forgetting to estimate the tenths, so the answer is just a four-figure reference.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-qa-p3-q13",
            question: "On a 1:25,000 map, a spit measures 7 cm long. How long is it in real life? Show your working.",
            marks: 2,
            hint: "At 1:25,000, 4 cm = 1 km.",
            modelAnswer:
              "7 cm × 25,000 = 175,000 cm = 1,750 m = 1.75 km (or 7 ÷ 4 = 1.75 km).",
            markScheme: [
              { point: "Correct working shown", keywords: ["175,000", "175000", "7 x 25", "7 × 25", "7 ÷ 4", "7/4"] },
              { point: "Answer 1.75 km", keywords: ["1.75", "1750", "1 750"] },
            ],
            commonError: "Using the 1:50,000 conversion (2 cm = 1 km) and answering 3.5 km.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-qa-p3-q14",
            question: "Evaluate managed retreat as a way of managing the coast. Refer to Medmerry in your answer.",
            marks: 4,
            hint: "How it works, the example, a benefit and a drawback.",
            modelAnswer:
              "Managed retreat means deliberately letting the sea flood low-value land behind new, set-back defences, creating salt marsh that absorbs wave energy. At Medmerry in West Sussex, completed in 2013 for about £28 million, the sea was let in behind new inland embankments, creating about 180 hectares of intertidal habitat. It is cheaper than holding the line in the long term and creates habitats for birds. However, farmers lose land and may need compensation, and some people dislike 'giving land to the sea'. Overall it is sensible where the land is low-value.",
            markScheme: [
              { point: "How it works: controlled flooding creates salt marsh", keywords: ["flood", "let the sea", "salt marsh", "realign", "breach"] },
              { point: "Medmerry detail (2013, £28m, about 180 ha)", keywords: ["medmerry", "2013", "28", "180", "sussex"] },
              { point: "Advantage: cheaper long-term / new habitat", keywords: ["cheap", "habitat", "wildlife", "bird", "sustainable"] },
              { point: "Disadvantage: loss of farmland / compensation", keywords: ["farm", "lose land", "compensat", "loss of land", "unpopular"] },
            ],
            commonError: "Describing managed retreat as 'doing nothing'; that is no active intervention, a different option.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-qa-p3-q15",
            question: "'Erosion is more important than weathering in the formation of a stack.' To what extent do you agree?",
            marks: 6,
            hint: "PEEL: what erosion does, what weathering does, a named example, then a judgement.",
            modelAnswer:
              "Erosion is the main driver. Hydraulic action and abrasion widen joints and faults in a headland into a cave, and then erode the cave right through to form an arch, as at the Foreland in Dorset. Without wave erosion there would be no cave or arch at all. However, weathering also matters at the key moment: freeze-thaw, salt weathering and carbonation weaken the roof of the arch from above while waves undercut it from below, until it collapses under gravity, leaving a stack such as Old Harry. Overall I mostly agree: erosion does most of the work, but stacks form because erosion and weathering act together.",
            markScheme: [
              { point: "Erosion processes named (hydraulic action/abrasion)", keywords: ["hydraulic", "abrasion", "corrasion"] },
              { point: "Erosion forms the cave and arch", keywords: ["cave", "arch", "breaks through", "widen"] },
              { point: "Weathering weakens the arch roof (freeze-thaw/salt/carbonation)", keywords: ["freeze", "salt", "carbonation", "chemical", "weathering"] },
              { point: "Collapse under gravity needs both working together", keywords: ["gravity", "collapse", "together", "both", "combination"] },
              { point: "Named example", keywords: ["old harry", "twelve apostles", "apostle", "durdle", "foreland"] },
              { point: "Clear judgement", keywords: ["overall", "more important", "to some extent", "conclusion", "mostly", "agree"] },
            ],
            commonError: "Explaining the sequence without ever weighing erosion against weathering or reaching a judgement.",
            guideRef: "caves-arches-stacks",
          },
        ],
      },
      {
        id: "cland-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "cland-qa-p4-q01",
            question: "What is a wave-cut notch?",
            marks: 2,
            hint: "Shape and position.",
            modelAnswer:
              "A wave-cut notch is a curved hollow eroded into the base (foot) of a cliff between the high- and low-tide levels.",
            markScheme: [
              { point: "A curved hollow / undercut", keywords: ["hollow", "undercut", "indent", "dent", "groove", "curved"] },
              { point: "At the base of a cliff, between high and low tide", keywords: ["base", "foot", "bottom", "high tide", "tide"] },
            ],
            commonError: "Confusing a notch with a cave: a notch runs along the cliff base; a cave cuts deep into a line of weakness.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-qa-p4-q02",
            question: "What is a salt marsh?",
            marks: 2,
            hint: "What it is made of and what grows there.",
            modelAnswer:
              "A salt marsh is an area of flat, low-lying mud and silt in a sheltered coastal area (for example behind a spit), flooded by the tide and colonised by salt-tolerant plants.",
            markScheme: [
              { point: "Flat area of mud/silt (wetland)", keywords: ["mud", "silt", "wetland", "flat", "marsh"] },
              { point: "Colonised by salt-tolerant plants / in sheltered water", keywords: ["salt-tolerant", "salt tolerant", "plant", "vegetation", "halophyte", "sheltered"] },
            ],
            commonError: "Describing it as a lagoon (open water) rather than a vegetated mudflat.",
            guideRef: "spits",
          },
          {
            id: "cland-qa-p4-q03",
            question: "Explain what is meant by differential erosion and how it shapes a coastline.",
            marks: 3,
            hint: "Define it, then say what happens to each rock type.",
            modelAnswer:
              "Differential erosion is when different rock types are eroded at different rates. Soft, less resistant rock such as clay erodes quickly and retreats to form bays. Hard, resistant rock such as chalk or limestone erodes slowly and is left jutting out as headlands.",
            markScheme: [
              { point: "Different rocks erode at different rates", keywords: ["different rates", "different speed", "faster", "slower", "differential"] },
              { point: "Soft rock erodes quickly to form bays", keywords: ["soft", "clay", "bay", "less resistant", "weak"] },
              { point: "Hard rock resists to form headlands", keywords: ["hard", "resistant", "headland", "chalk", "limestone"] },
            ],
            commonError: "Defining the term but not applying it to explain the landforms.",
            guideRef: "headlands-bays",
          },
          {
            id: "cland-qa-p4-q04",
            question: "Compare Old Harry Rocks (Dorset) with the Twelve Apostles (Australia).",
            marks: 4,
            hint: "One similarity and several differences: rock, wave energy, dated collapses.",
            modelAnswer:
              "Both are stacks formed by the erosion of headlands through the cave–arch–stack sequence. Old Harry is made of chalk, whereas the Apostles are limestone. The Apostles face powerful waves from the open Southern Ocean, while Old Harry faces the more sheltered English Channel, so the Apostles change faster. Both have lost stacks: Old Harry's Wife collapsed in 1896, while one of the Apostles fell in 2005.",
            markScheme: [
              { point: "Similarity: both stacks formed by the same sequence", keywords: ["both", "similar", "same sequence", "cave", "arch"] },
              { point: "Rock: chalk vs limestone", keywords: ["chalk", "limestone", "rock type", "geology"] },
              { point: "Wave energy: Southern Ocean vs English Channel", keywords: ["southern ocean", "channel", "powerful", "energy", "open ocean"] },
              { point: "Collapse dates: 1896 vs 2005", keywords: ["1896", "2005", "wife", "collapse"] },
            ],
            commonError: "Writing two separate descriptions without comparison words (both, whereas, while).",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-qa-p4-q05",
            question: "Explain why many spits have a recurved end.",
            marks: 3,
            hint: "Something changes the direction sediment travels at the tip.",
            modelAnswer:
              "At the end of the spit, a change in wind direction (a secondary wind) makes waves approach from a different angle. Waves also refract (bend) around the tip of the spit. Both carry sediment inwards, so the end curves round into a hook; old hooks may mark earlier positions of the tip.",
            markScheme: [
              { point: "Change in wind direction / secondary wind", keywords: ["wind direction", "secondary wind", "change in wind", "different wind", "wind changes"] },
              { point: "Wave refraction around the tip", keywords: ["refract", "bend", "wrap", "curve round"] },
              { point: "Sediment carried inwards, making a hook", keywords: ["hook", "recurv", "inward", "landward", "curl"] },
            ],
            commonError: "Saying the river 'bends' the spit: rivers limit its length but do not form the hook.",
            guideRef: "spits",
          },
          {
            id: "cland-qa-p4-q06",
            question: "Explain why a spit cannot usually grow all the way across a river estuary.",
            marks: 2,
            hint: "What else moves through the estuary?",
            modelAnswer:
              "The river's current (and tidal currents) flow out through the estuary. They carry sediment away and stop it being deposited in the channel, so the spit cannot close the river mouth.",
            markScheme: [
              { point: "River (or tidal) current flows through the estuary", keywords: ["river", "current", "flow", "tidal"] },
              { point: "It carries sediment away / keeps a channel open", keywords: ["carr", "wash away", "channel", "remove", "prevent"] },
            ],
            commonError: "Saying the spit 'runs out of sand' with no mention of the river's current.",
            guideRef: "spits",
          },
          {
            id: "cland-qa-p4-q07",
            question: "Using the Twelve Apostles, explain why stacks erode faster on some coasts than on others.",
            marks: 4,
            hint: "Rock, waves, weather and weaknesses.",
            modelAnswer:
              "The Apostles are made of limestone, which is less resistant than harder rocks such as granite, so it is eroded more quickly. They face the open Southern Ocean, where winds blow over a long fetch (distance of open water) and create very powerful waves. Frequent storms and heavy rain add to the erosion and weathering. The limestone also has many joints and faults, which hydraulic action can exploit, so notches and collapses happen faster.",
            markScheme: [
              { point: "Rock type: limestone is relatively weak", keywords: ["limestone", "soft", "less resistant", "rock type", "geology"] },
              { point: "Powerful waves / long fetch of the Southern Ocean", keywords: ["fetch", "southern ocean", "powerful", "open ocean", "energy"] },
              { point: "Storms / weather add to erosion and weathering", keywords: ["storm", "weather", "rain", "wind"] },
              { point: "Joints/faults act as weaknesses", keywords: ["joint", "fault", "crack", "weakness"] },
            ],
            commonError: "Only giving one factor (usually 'big waves') when the question invites several.",
            guideRef: "caves-arches-stacks",
          },
          {
            id: "cland-qa-p4-q08",
            question: "Sand depth was measured either side of a groyne. West side: 3.5 m. East side: 1.2 m. Longshore drift runs from west to east. Explain these results.",
            marks: 3,
            hint: "Which side is up-drift? Quote the difference.",
            modelAnswer:
              "The west side is up-drift, so sand carried by longshore drift is trapped against the groyne and builds up to 3.5 m. The east side is down-drift, so it is starved of sand and only has 1.2 m, a difference of 2.3 m. The thinner beach on the east side gives less protection, so erosion there may increase.",
            markScheme: [
              { point: "West (up-drift) side traps sand", keywords: ["trap", "up-drift", "updrift", "builds up", "blocked", "west"] },
              { point: "Quotes the 2.3 m difference", keywords: ["2.3", "2.30", "2,3"] },
              { point: "East (down-drift) side starved, more erosion", keywords: ["starv", "down-drift", "downdrift", "less sand", "eros"] },
            ],
            commonError: "Describing the numbers without explaining the link to longshore drift, or not using the data.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-qa-p4-q09",
            question: "A council must protect 500 m of coast. Sea wall: £6,000 per metre (lasts 50+ years). Rock armour: £2,000 per metre (lasts about 20 years). Beach nourishment: £3,000 per metre (must be repeated about every 10 years). Calculate the cost of each for 500 m and recommend one option.",
            marks: 4,
            hint: "Multiply each cost by 500, then think about how long each lasts.",
            modelAnswer:
              "Sea wall: 500 × £6,000 = £3 million. Rock armour: 500 × £2,000 = £1 million. Beach nourishment: 500 × £3,000 = £1.5 million, but repeated every 10 years that is about £7.5 million over 50 years. I recommend rock armour: even replaced once after 20 years it costs about £2–3 million over 50 years, less than the sea wall, and it is far cheaper than repeated nourishment, although it looks less natural.",
            markScheme: [
              { point: "Sea wall £3 million", keywords: ["3 million", "3,000,000", "3000000", "£3m", "3m"] },
              { point: "Rock armour £1 million", keywords: ["1 million", "1,000,000", "1000000", "£1m", "1m"] },
              { point: "Nourishment £1.5 million each time (more over time)", keywords: ["1.5 million", "1,500,000", "1500000", "1.5m", "7.5"] },
              { point: "Justified recommendation", keywords: ["recommend", "best", "choose", "because", "value"] },
            ],
            commonError: "Comparing only the first payment and ignoring how long each option lasts.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-qa-p4-q10",
            question: "Describe how a spit would appear on an OS map.",
            marks: 3,
            hint: "Shape, symbols, and what is next to it.",
            modelAnswer:
              "It would appear as a long, narrow finger of land shown with sand (yellow stipple) or shingle symbols. It would be attached to the coast at one end and stretch out across a river mouth or estuary. Marsh or mud symbols would show salt marsh behind it, and its tip may curve round in a recurved hook.",
            markScheme: [
              { point: "Narrow finger of sand/shingle symbols", keywords: ["narrow", "finger", "sand", "shingle", "yellow"] },
              { point: "Attached at one end, across an estuary/river mouth", keywords: ["attached", "one end", "estuary", "river mouth", "across"] },
              { point: "Marsh symbols behind / recurved tip", keywords: ["marsh", "mud", "recurv", "hook", "curve"] },
            ],
            commonError: "Describing how a spit forms instead of what it looks like on the map.",
            guideRef: "os-map-skills",
          },
          {
            id: "cland-qa-p4-q11",
            question: "Explain how dune regeneration helps to protect a coast.",
            marks: 3,
            hint: "Plants, people and the dunes' role as a barrier.",
            modelAnswer:
              "Marram grass is planted because its long roots bind the sand together and its leaves trap blown sand, so the dunes grow. Fences and boardwalks keep people off, reducing trampling that would kill the plants. Healthy dunes act as a natural barrier and sand store, absorbing wave energy and protecting the land behind from flooding during storms.",
            markScheme: [
              { point: "Marram grass roots bind the sand", keywords: ["marram", "roots", "bind", "plant", "grass"] },
              { point: "Fencing/boardwalks reduce trampling", keywords: ["fenc", "boardwalk", "trampl", "path", "keep people"] },
              { point: "Dunes act as a barrier / absorb wave energy", keywords: ["barrier", "absorb", "flood", "buffer", "protect"] },
            ],
            commonError: "Not explaining how the dunes actually protect the coast once they are rebuilt.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-qa-p4-q12",
            question: "Explain why many modern sea walls are curved.",
            marks: 2,
            hint: "Where does a curved face send the wave's energy?",
            modelAnswer:
              "A curved face reflects wave energy back out to sea instead of absorbing the full force. It also stops waves from overtopping the wall, so the promenade and buildings behind stay drier and safer.",
            markScheme: [
              { point: "Reflects wave energy back out to sea", keywords: ["reflect", "back out", "back to sea", "redirect", "deflect"] },
              { point: "Reduces overtopping / flooding behind", keywords: ["overtop", "over the top", "spray", "flood", "promenade"] },
            ],
            commonError: "Saying the curve 'absorbs' energy: it mainly reflects it, which can scour the beach in front.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-qa-p4-q13",
            question: "'Singapore should rely mainly on hard engineering to protect its coast.' To what extent do you agree?",
            marks: 6,
            hint: "PEEL both sides with Singapore facts, then a clear judgement.",
            modelAnswer:
              "I largely agree. Singapore already protects roughly 70–80% of its coastline with seawalls and stone revetments, because about 30% of its land is less than 5 m above sea level and very valuable places such as the CBD and Changi Airport lie near the coast. As a small, densely populated island with scarce land, it cannot retreat inland, so strong, reliable defences make sense, even at a cost of S$100 billion or more over 100 years. However, hard engineering is expensive, must be raised as sea levels rise, and destroys habitats. Nature-based solutions such as restored mangroves and the Pulau Tekong polder can absorb wave energy, adapt to rising seas and support wildlife. Overall, hard engineering should remain the backbone, but the best approach is a hybrid that adds nature-based defences wherever space allows.",
            markScheme: [
              { point: "Hard engineering already dominant (seawalls/revetments, 70–80%)", keywords: ["seawall", "sea wall", "revetment", "70", "80", "hard engineering"] },
              { point: "Evidence: low-lying (30% under 5 m) / S$100 billion", keywords: ["30", "5 m", "100 billion", "s$100", "$100"] },
              { point: "Explains why retreat is impossible: small, dense, land-scarce", keywords: ["small", "dense", "scarce", "cannot retreat", "limited land", "no space"] },
              { point: "Counter-argument: nature-based options (mangroves, polder)", keywords: ["mangrove", "polder", "tekong", "nature-based", "nature based", "soft"] },
              { point: "Drawbacks of hard engineering (cost, habitat loss, raising)", keywords: ["cost", "expensive", "habitat", "maintain", "raise"] },
              { point: "Clear judgement (e.g. hybrid approach)", keywords: ["hybrid", "combination", "both", "overall", "to a large extent", "conclusion"] },
            ],
            commonError: "Arguing only one side, or using UK examples without any Singapore-specific facts.",
            guideRef: "coastal-management",
          },
          {
            id: "cland-qa-p4-q14",
            question: "Explain how a rise in sea level could affect coastal landforms.",
            marks: 4,
            hint: "Consider erosional landforms and depositional landforms separately.",
            modelAnswer:
              "Wave-cut notches would be cut higher up cliffs, and deeper water over wave-cut platforms would let bigger waves reach the cliffs, so cliffs would retreat faster. Beaches and salt marshes could be drowned or squeezed between the rising sea and sea walls behind them (coastal squeeze). Spits, bars and tombolos such as Spurn Head and Chesil Beach would be breached or washed over more often during storms.",
            markScheme: [
              { point: "Notches cut higher / cliffs erode faster", keywords: ["higher", "notch", "more erosion", "faster", "retreat"] },
              { point: "Deeper water over platforms lets more energy reach cliffs", keywords: ["platform", "deeper", "more energy", "larger waves", "bigger waves"] },
              { point: "Beaches/salt marsh drowned or squeezed", keywords: ["squeeze", "drown", "submerge", "narrower", "lost"] },
              { point: "Spits/bars/tombolos breached or overwashed", keywords: ["breach", "overwash", "spit", "tombolo", "chesil", "spurn"] },
            ],
            commonError: "Only saying 'more flooding' without linking the change to specific landforms.",
            guideRef: "cliffs-platforms",
          },
          {
            id: "cland-qa-p4-q15",
            question: "Explain the formation of Spurn Head.",
            marks: 6,
            hint: "Source of sediment → transport → where and why it is deposited → shape → what lies behind.",
            modelAnswer:
              "Spurn Head is made from sediment eroded from the soft boulder-clay cliffs of Holderness, which retreat about 2 m a year. Longshore drift, driven by waves from the north-east, carries this sand and shingle south along the coast. At the mouth of the Humber the coastline changes direction, but the drift continues, depositing sediment in the more sheltered, shallower water and building a ridge about 5 km long. Changes in wind direction and wave refraction curve its tip into a recurved hook pointing into the estuary. The river's current stops the spit crossing the Humber, and in the calm water behind it mud settles to form mudflats and salt marsh. Storms still reshape it: the 2013 surge breached its neck.",
            markScheme: [
              { point: "Sediment from eroding Holderness cliffs", keywords: ["holderness", "boulder clay", "clay", "cliff"] },
              { point: "Longshore drift carries it south", keywords: ["longshore", "drift", "south", "swash"] },
              { point: "Coast changes direction at the Humber mouth", keywords: ["humber", "estuary", "changes direction", "bend", "turn"] },
              { point: "Deposition in sheltered water builds the ridge (about 5 km)", keywords: ["deposit", "shelter", "5 km", "ridge", "lose energy"] },
              { point: "Recurved end from wind change / refraction", keywords: ["recurv", "hook", "curve", "wind direction", "refract"] },
              { point: "Salt marsh behind / river current / 2013 breach", keywords: ["salt marsh", "mud", "2013", "breach", "river current", "marsh"] },
            ],
            commonError: "Writing a general spit answer without Spurn's source (Holderness), location (Humber) or any figures.",
            guideRef: "spits",
          },
        ],
      },
    ],
  },
};
