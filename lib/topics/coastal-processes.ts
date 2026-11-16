import type { Topic } from "../types";

export const coastalProcesses: Topic = {
  id: "coastal-processes",
  title: "Coastal Processes: Waves, Weathering & Erosion",
  subject: "Cracking Coasts",
  icon: "🌊",
  summary: "How waves, weathering and longshore drift reshape the coast.",
  intro:
    "Every wave that breaks on a beach is moving energy, sand and rock — sometimes gently building a beach, sometimes smashing a cliff apart. In this topic you will learn how waves form, how rocks are weakened by weathering and removed by erosion, how sediment is carried along the shore and dropped again, and why rock type decides the shape of a coastline. You will finish by looking at Singapore's own coast, where more than two-thirds of the shoreline is now armoured against the sea.",

  guide: [
    {
      id: "coast-and-waves",
      heading: "The coast as a zone, and how waves form",
      body:
        "The **coast** is the **zone** where the land meets the sea. It is not a thin line on a map but a strip of land and water that keeps changing. Geographers split it into the **backshore** (land above the reach of normal high tides, such as cliffs or sand dunes), the **foreshore** (the area between the high-tide and low-tide marks) and the **offshore** zone (beyond the low-tide mark). The **coastline** is simply the edge of the land at a given moment.\n\n**Waves** are created by **wind** blowing over the surface of the sea. **Friction** between the moving air and the water drags the surface into ripples, and the ripples grow into waves as more energy is transferred. Out at sea it is the **energy** that travels forward; the water itself mostly moves round in circles. When a wave reaches shallow water, friction with the sea bed slows the bottom of the wave, the top keeps going, the wave gets steeper and finally **breaks** onto the shore.\n\nThe size and power of a wave depend on three things:\n\n- **Wind speed** — faster winds pass on more energy\n- **Wind duration** — how long the wind has been blowing\n- **Fetch** — the distance of open water the wind has blown over\n\nKey wave words: the **crest** is the top of a wave, the **trough** is the low point between waves, **wave height** is the vertical distance from trough to crest and **wavelength** is the distance from one crest to the next.\n\nCornwall in south-west England faces the Atlantic Ocean, with a fetch of several thousand kilometres, so it receives large, powerful waves. Singapore is sheltered by Peninsular Malaysia, Sumatra and the Riau Islands, so its fetch is short and most waves are small. The exception is the **Northeast Monsoon** (roughly December to March), when steady winds from the South China Sea bring rougher seas to the east coast.",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wind blowing over a long fetch builds waves that break on the beach"><defs><marker id="cw-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs><rect width="320" height="170" fill="#f0f9ff"/><path d="M0,110 Q15,104 30,110 T60,110 T90,108 T120,106 T150,103 T180,100 T210,96 T240,92 L262,90 L262,170 L0,170 Z" fill="#7dd3fc"/><path d="M250,96 L320,66 L320,170 L250,170 Z" fill="#fde68a" stroke="#ca8a04"/><text x="292" y="120" font-size="10" text-anchor="middle" fill="#713f12">Beach</text><line x1="20" y1="40" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#cw-ah)"/><line x1="90" y1="40" x2="140" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#cw-ah)"/><line x1="160" y1="40" x2="210" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#cw-ah)"/><text x="115" y="28" font-size="11" text-anchor="middle" fill="#334155">Wind (speed + duration)</text><line x1="10" y1="80" x2="240" y2="80" stroke="#0f766e" stroke-width="1.5" marker-end="url(#cw-ah)"/><line x1="240" y1="80" x2="10" y2="80" stroke="#0f766e" stroke-width="1.5" marker-end="url(#cw-ah)"/><text x="125" y="74" font-size="11" text-anchor="middle" fill="#0f766e">FETCH (distance of open sea)</text><text x="180" y="94" font-size="10" fill="#1e3a8a">crest</text><text x="150" y="122" font-size="10" fill="#1e3a8a">trough</text><text x="236" y="86" font-size="10" fill="#1e3a8a">breaks</text><text x="60" y="150" font-size="10" fill="#0c4a6e">Waves grow bigger as fetch increases</text></svg>`,
      diagramCaption: "Wind blowing over the fetch transfers energy to the sea; longer fetch, stronger and longer-lasting winds make bigger waves.",
      keyPoints: [
        "The coast is a zone (backshore, foreshore, offshore), not a line.",
        "Waves are formed by friction between wind and the sea surface.",
        "Wave size depends on wind speed, wind duration and fetch.",
        "Waves break when friction with the shallow sea bed slows their base.",
      ],
      thinkDeeper:
        "If the wind at East Coast Park blew twice as hard but the fetch stayed only a few tens of kilometres, would the waves become as big as Cornwall's? Which of the three factors limits wave size most in Singapore — and how could you test your idea using a map?",
      discovery: {
        problem:
          "On the same stormy day, a beach in Cornwall and a beach at East Coast Park both feel winds of 50 km/h. Cornwall faces thousands of kilometres of open Atlantic; East Coast Park faces a strait with islands a few tens of kilometres away. Which beach gets the bigger waves, and why?",
        idea:
          "Fetch matters as much as wind speed. The longer the stretch of open water, the more time and distance the wind has to pass energy to the sea, so Cornwall's waves are far larger.",
      },
      skill: "Measuring fetch on a map using the scale bar",
    },
    {
      id: "wave-types",
      heading: "Constructive and destructive waves",
      body:
        "When a wave breaks, water rushes up the beach. This forward movement is the **swash**. The water then drains back down the beach towards the sea; this is the **backwash**. Whether a wave builds or destroys a beach depends on which of these is stronger.\n\n**Constructive waves** build beaches:\n\n- Low height (usually under about 1 m) and a long wavelength\n- Low frequency — about **6–8 waves per minute**\n- **Strong swash, weak backwash**, because the water has time to soak into the beach before the next wave arrives\n- They carry sand and shingle up the beach and leave it there (deposition)\n- Common in calm weather, or when waves arrive from storms far away\n\n**Destructive waves** remove material:\n\n- Tall and steep, with a short wavelength\n- High frequency — about **10–14 waves per minute**\n- **Weak swash, strong backwash**; they plunge down onto the beach, and each backwash meets the next incoming wave, dragging sediment out to sea\n- Common in storms, with strong local winds over a long fetch\n\nMost beaches see both types. In many places destructive storm waves strip sand from a beach in one season and constructive waves slowly rebuild it in calmer months, so the beach profile (its shape in cross-section) changes through the year.",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Constructive waves have strong swash and weak backwash; destructive waves have weak swash and strong backwash"><defs><marker id="wt-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e3a8a"/></marker><marker id="wt-ah2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b91c1c"/></marker></defs><rect width="320" height="170" fill="#ffffff"/><text x="80" y="16" font-size="12" text-anchor="middle" font-weight="bold" fill="#15803d">Constructive</text><text x="240" y="16" font-size="12" text-anchor="middle" font-weight="bold" fill="#b91c1c">Destructive</text><line x1="160" y1="22" x2="160" y2="165" stroke="#94a3b8" stroke-dasharray="4 3"/><path d="M5,120 L150,70 L150,160 L5,160 Z" fill="#fde68a"/><path d="M5,100 Q25,92 45,100 T85,100" fill="none" stroke="#0284c7" stroke-width="2"/><line x1="40" y1="112" x2="120" y2="84" stroke="#1e3a8a" stroke-width="5" marker-end="url(#wt-ah)"/><text x="98" y="78" font-size="10" fill="#1e3a8a">strong swash</text><line x1="120" y1="98" x2="60" y2="119" stroke="#b91c1c" stroke-width="1.5" marker-end="url(#wt-ah2)"/><text x="42" y="140" font-size="10" fill="#b91c1c">weak backwash</text><text x="80" y="155" font-size="10" text-anchor="middle" fill="#334155">low, long, 6–8 per min</text><path d="M165,120 L315,70 L315,160 L165,160 Z" fill="#fde68a"/><path d="M168,100 Q178,60 192,100 Q204,62 218,100" fill="none" stroke="#0284c7" stroke-width="2"/><line x1="205" y1="112" x2="260" y2="94" stroke="#1e3a8a" stroke-width="1.5" marker-end="url(#wt-ah)"/><text x="248" y="86" font-size="10" fill="#1e3a8a">weak swash</text><line x1="290" y1="98" x2="210" y2="125" stroke="#b91c1c" stroke-width="5" marker-end="url(#wt-ah2)"/><text x="200" y="140" font-size="10" fill="#b91c1c">strong backwash</text><text x="240" y="155" font-size="10" text-anchor="middle" fill="#334155">tall, steep, 10–14 per min</text></svg>`,
      diagramCaption: "Arrow thickness shows strength: constructive waves push sediment up the beach; destructive waves drag it back out to sea.",
      keyPoints: [
        "Swash = water up the beach; backwash = water back down to the sea.",
        "Constructive: low, long, 6–8 per minute, swash stronger than backwash — builds beaches.",
        "Destructive: tall, steep, 10–14 per minute, backwash stronger than swash — erodes beaches.",
      ],
      thinkDeeper:
        "Why does a high wave frequency make backwash more powerful? Think about what happens to the water from one wave when the next wave arrives only four or five seconds later.",
      discovery: {
        problem:
          "A family photographs the same resort beach in June and again in January. In January the beach is narrower, steeper at the top and has lost much of its sand. Nobody has dug the sand away. What has changed about the waves?",
        idea:
          "In the stormy season destructive waves, with powerful backwash, drag sand offshore. In calmer months constructive waves, with strong swash, slowly carry it back, so beaches change with the seasons.",
      },
    },
    {
      id: "weathering",
      heading: "Weathering: breaking rock down in place",
      body:
        "**Weathering** is the breakdown of rock **in place (in situ)** by the weather, by chemicals in rainwater and by living things. Nothing is carried away during weathering. **Erosion** is different: it is the wearing away of rock **and the removal** of the material by a moving force such as waves, rivers, wind or ice. A simple test: if the material moves, it is erosion. On the coast, weathering weakens cliffs from above while the sea erodes them from below.\n\n**Mechanical (physical) weathering** breaks rock into smaller pieces without changing what it is made of:\n\n- **Freeze–thaw**: rainwater seeps into cracks. At night the water freezes and **expands by about 9%**, pushing the crack wider. By day the ice melts and more water seeps in. Repeated many times, pieces break off. It needs temperatures that swing above and below 0 °C, so it is common on British cliffs in winter but impossible in Singapore.\n- **Salt crystallisation**: sea spray soaks into rock. When the water evaporates, salt crystals grow in pores and cracks and push the rock apart. It works best on porous rocks like sandstone and on warm, sunny coasts.\n\n**Chemical weathering** changes the minerals in the rock:\n\n- **Carbonation (solution)**: rainwater absorbs carbon dioxide from the air and becomes a weak **carbonic acid**. This reacts with the **calcium carbonate** in **limestone and chalk**, dissolving the rock and widening joints.\n- Chemical weathering is fastest in **hot, wet climates** like Singapore's; granite at Bukit Timah has been weathered into soft clay many metres deep.\n\n**Biological weathering** is caused by plants and animals:\n\n- **Plant roots** grow into cracks and force them apart as they thicken\n- **Burrowing animals** such as rabbits and nesting seabirds (puffins) loosen cliff-top soil; piddocks (shellfish) bore holes into soft rock\n- Rotting plants release organic acids that also attack rock",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Freeze-thaw weathering in three stages, with notes on chemical and biological weathering"><defs><marker id="we-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs><rect width="320" height="170" fill="#ffffff"/><text x="160" y="14" font-size="12" text-anchor="middle" font-weight="bold" fill="#334155">Freeze–thaw (mechanical)</text><rect x="10" y="24" width="80" height="60" fill="#d6d3d1" stroke="#57534e"/><path d="M50,24 L46,50 L50,62" fill="none" stroke="#1e293b" stroke-width="2"/><rect x="45" y="26" width="5" height="18" fill="#38bdf8"/><text x="50" y="98" font-size="10" text-anchor="middle" fill="#334155">1. Water in crack</text><line x1="94" y1="54" x2="114" y2="54" stroke="#334155" stroke-width="1.5" marker-end="url(#we-ah)"/><rect x="120" y="24" width="80" height="60" fill="#d6d3d1" stroke="#57534e"/><path d="M160,24 L152,52 L160,70" fill="none" stroke="#1e293b" stroke-width="2"/><path d="M152,26 L166,26 L158,50 Z" fill="#e0f2fe" stroke="#0284c7"/><text x="160" y="98" font-size="10" text-anchor="middle" fill="#334155">2. Freezes, +9%</text><line x1="204" y1="54" x2="224" y2="54" stroke="#334155" stroke-width="1.5" marker-end="url(#we-ah)"/><rect x="230" y="24" width="50" height="60" fill="#d6d3d1" stroke="#57534e"/><path d="M286,40 L304,46 L298,80 L284,78 Z" fill="#d6d3d1" stroke="#57534e"/><text x="270" y="98" font-size="10" text-anchor="middle" fill="#334155">3. Rock splits</text><rect x="10" y="112" width="145" height="50" rx="5" fill="#fef3c7" stroke="#d97706"/><text x="82" y="128" font-size="10" text-anchor="middle" fill="#78350f">Chemical: carbonic acid</text><text x="82" y="142" font-size="10" text-anchor="middle" fill="#78350f">dissolves limestone</text><text x="82" y="155" font-size="10" text-anchor="middle" fill="#78350f">and chalk</text><rect x="165" y="112" width="145" height="50" rx="5" fill="#dcfce7" stroke="#16a34a"/><text x="237" y="128" font-size="10" text-anchor="middle" fill="#14532d">Biological: roots widen</text><text x="237" y="142" font-size="10" text-anchor="middle" fill="#14532d">cracks; animals burrow</text><text x="237" y="155" font-size="10" text-anchor="middle" fill="#14532d">and loosen rock</text></svg>`,
      diagramCaption: "Freeze–thaw prises rock apart in repeated cycles; chemical and biological weathering also weaken cliffs without moving the pieces away.",
      keyPoints: [
        "Weathering happens in place; erosion involves removal and movement.",
        "Mechanical: freeze–thaw and salt crystallisation.",
        "Chemical: carbonation dissolves limestone and chalk (calcium carbonate).",
        "Biological: roots and burrowing animals break and loosen rock.",
      ],
      thinkDeeper:
        "Singapore never freezes, yet its rocks are often weathered far deeper than rocks in Britain. Which type of weathering wins in the tropics, and which two climate conditions speed it up?",
      discovery: {
        problem:
          "A cliff top in Yorkshire is covered in loose angular rock fragments after a cold, clear winter, even though storm waves never reach that high. What could have broken the rock — and is that erosion?",
        idea:
          "Freeze–thaw weathering shattered the rock in place. Because the pieces have not been moved by waves, it is weathering, not erosion — the sea only removes them later.",
      },
      skill: "Classifying processes into mechanical, chemical and biological weathering",
    },
    {
      id: "erosion-processes",
      heading: "Marine erosion: how the sea attacks the land",
      body:
        "**Erosion** is the wearing away of rock and the removal of the material by a moving force. On the coast, the sea erodes in four main ways:\n\n- **Hydraulic action**: the sheer **force of the water** smashing against the cliff. Waves also trap and **compress air in cracks**; when the wave pulls back, the air expands explosively. Repeated again and again, this widens cracks and breaks rock off.\n- **Abrasion (corrasion)**: waves pick up sand, pebbles and boulders and **hurl them at the cliff**, scraping and chipping it like sandpaper. This is usually the most effective process at the foot of a cliff.\n- **Attrition**: rocks and pebbles carried by the waves **knock into each other**, so they become **smaller, smoother and rounder** over time. Attrition erodes the load, not the cliff.\n- **Solution (corrosion)**: weak acids in seawater **dissolve** certain rocks, especially **limestone and chalk**, which contain calcium carbonate.\n\nHow fast a coast erodes depends on:\n\n- **Rock type** — soft clay erodes far faster than granite\n- **Wave energy** — destructive storm waves with a long fetch do most damage\n- **Beach width** — a wide beach absorbs wave energy and protects the cliff\n- **Human defences** — seawalls and rock armour slow erosion locally\n\nErosion at the base of a cliff creates a **wave-cut notch**. As the notch grows, the cliff above is left overhanging until it collapses — linking erosion to mass movement.",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a cliff showing hydraulic action, abrasion, attrition and solution"><defs><marker id="er-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e3a8a"/></marker></defs><rect width="320" height="170" fill="#f8fafc"/><path d="M200,20 L320,20 L320,170 L210,170 L210,135 L196,128 L210,118 Z" fill="#a8a29e" stroke="#57534e"/><path d="M0,120 Q30,112 60,120 T120,120 T180,120 L198,124 L210,135 L210,170 L0,170 Z" fill="#7dd3fc" opacity="0.85"/><line x1="140" y1="112" x2="192" y2="122" stroke="#1e3a8a" stroke-width="2" marker-end="url(#er-ah)"/><text x="98" y="100" font-size="10" fill="#1e3a8a">Hydraulic action</text><text x="98" y="110" font-size="9" fill="#1e3a8a">(force + air in cracks)</text><circle cx="160" cy="138" r="5" fill="#78716c"/><line x1="166" y1="136" x2="200" y2="130" stroke="#1e3a8a" stroke-width="2" marker-end="url(#er-ah)"/><text x="120" y="158" font-size="10" fill="#1e3a8a">Abrasion: rocks thrown</text><circle cx="50" cy="140" r="6" fill="#78716c"/><circle cx="62" cy="140" r="5" fill="#a8a29e"/><text x="20" y="128" font-size="10" fill="#1e3a8a">Attrition</text><text x="14" y="160" font-size="9" fill="#1e3a8a">rocks hit each other</text><text x="232" y="60" font-size="10" fill="#1c1917">Solution:</text><text x="232" y="72" font-size="9" fill="#1c1917">acids dissolve</text><text x="232" y="84" font-size="9" fill="#1c1917">chalk/limestone</text><text x="218" y="150" font-size="9" fill="#1c1917">wave-cut notch</text></svg>`,
      diagramCaption: "The four processes of marine erosion. Hydraulic action and abrasion attack the cliff foot, attrition wears down the load and solution dissolves calcium-carbonate rocks.",
      keyPoints: [
        "Hydraulic action = force of water and compressed air in cracks.",
        "Abrasion = material thrown against the cliff (sandpaper effect).",
        "Attrition = rocks hitting each other, becoming smaller and rounder.",
        "Solution = chemicals in seawater dissolving limestone and chalk.",
      ],
      thinkDeeper:
        "Attrition does not erode the cliff at all — so why does it matter for coasts? Think about what happens to beach pebbles over thousands of years and how that affects how far they can be carried.",
      discovery: {
        problem:
          "Pebbles collected from the foot of a cliff are sharp and angular. Pebbles from the same rock collected 5 km along the beach are smooth and round. What happened to them on the journey?",
        idea:
          "Attrition: as pebbles are moved by waves they knock against each other, chipping off corners until they become smaller and rounder.",
      },
      caseStudy: {
        place: "Holderness coast, East Yorkshire (UK)",
        facts: [
          "About 61 km long, from Flamborough Head south to Spurn Head.",
          "Erodes on average about 1.8 m per year — one of the fastest-eroding coastlines in Europe.",
          "Made of soft boulder clay (glacial till) left behind at the end of the last ice age.",
          "About 29 villages have been lost to the sea since Roman times.",
          "Mappleton was protected in 1991 by a £2 million scheme of two rock groynes and rock armour.",
        ],
      },
      skill: "Calculating an average rate of erosion (distance lost ÷ number of years)",
    },
    {
      id: "mass-movement",
      heading: "Mass movement: when cliffs collapse",
      body:
        "**Mass movement** is the downhill movement of rock, soil or mud under the influence of **gravity**. On the coast it happens when a cliff becomes too steep or too heavy to stay where it is.\n\n**What triggers it?**\n\n- **Undercutting** by waves eroding a wave-cut notch at the cliff foot, removing support\n- **Heavy or prolonged rain** soaking into the cliff — water adds weight and acts as a **lubricant**, reducing friction\n- **Weak or soft rock**, such as clay, which slips easily when wet\n- **Weathering** (for example freeze–thaw) loosening blocks of rock\n- **People**: building on cliff tops adds weight; leaking drains add water\n\n**Three types you must know:**\n\n- **Rockfall**: fragments of rock **break away from a steep cliff face and fall** to the bottom, often after freeze–thaw or undercutting. Common on hard-rock cliffs; fallen pieces pile up as **scree**.\n- **Slumping (rotational slip)**: saturated soft rock such as clay moves down along a **curved slip surface**, rotating as it goes. It leaves a stepped, terraced cliff.\n- **Sliding (landslide)**: a block of material slides down along a **flat (straight) slip plane**, often a layer of rock that slopes towards the sea.\n\nMass movement delivers a large amount of loose material to the cliff foot, where the sea can then erode and transport it. In this way mass movement and marine erosion work together.",
      diagram: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three types of mass movement: rockfall, slumping on a curved surface and sliding on a flat plane"><defs><marker id="mm-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b91c1c"/></marker></defs><rect width="320" height="160" fill="#ffffff"/><text x="52" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#334155">Rockfall</text><path d="M60,30 L100,30 L100,140 L60,140 Z" fill="#a8a29e" stroke="#57534e"/><rect x="48" y="44" width="10" height="10" fill="#78716c"/><line x1="52" y1="58" x2="44" y2="110" stroke="#b91c1c" stroke-width="1.5" marker-end="url(#mm-ah)"/><path d="M20,140 L60,140 L60,128 L40,132 Z" fill="#78716c"/><text x="34" y="154" font-size="9" fill="#334155">scree</text><text x="165" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#334155">Slumping</text><path d="M130,40 L210,40 L210,140 L120,140 L120,120 Z" fill="#d6c7a1" stroke="#78350f"/><path d="M150,40 Q195,70 140,130" fill="none" stroke="#b91c1c" stroke-width="2" stroke-dasharray="4 2"/><line x1="160" y1="66" x2="148" y2="104" stroke="#b91c1c" stroke-width="1.5" marker-end="url(#mm-ah)"/><text x="165" y="154" font-size="9" text-anchor="middle" fill="#334155">curved slip surface</text><text x="272" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#334155">Sliding</text><path d="M230,50 L310,50 L310,140 L230,140 Z" fill="#cbd5e1" stroke="#475569"/><line x1="240" y1="60" x2="300" y2="130" stroke="#b91c1c" stroke-width="2" stroke-dasharray="4 2"/><line x1="258" y1="68" x2="282" y2="96" stroke="#b91c1c" stroke-width="1.5" marker-end="url(#mm-ah)"/><text x="272" y="154" font-size="9" text-anchor="middle" fill="#334155">flat slip plane</text></svg>`,
      diagramCaption: "Rockfall drops fragments from a steep face; slumping rotates soft, wet rock on a curved surface; sliding moves a block along a straight plane.",
      keyPoints: [
        "Mass movement = downhill movement of material under gravity.",
        "Rain adds weight and lubricates; undercutting removes support.",
        "Rockfall (steep hard rock), slumping (curved surface, wet clay), sliding (flat plane).",
      ],
      thinkDeeper:
        "Why might a cliff collapse a few days AFTER a long spell of heavy rain rather than during the storm itself? Think about how water moves through clay.",
      discovery: {
        problem:
          "In June 1993 a hotel on a clay cliff top at Scarborough slid partly into the sea. The weather had been very wet for weeks, but there was no big storm on the day. What do you think caused the cliff to fail?",
        idea:
          "Rainwater soaked into the clay, making it heavy and slippery. The saturated cliff slumped along a curved slip surface — gravity, not waves, did the final damage.",
      },
      caseStudy: {
        place: "Holbeck Hall Hotel, Scarborough (North Yorkshire, UK)",
        facts: [
          "On 3–5 June 1993 the boulder-clay cliff below the hotel failed in a large rotational slump.",
          "About 1 million tonnes of material moved downslope towards the sea.",
          "Weeks of heavy rain had saturated the cliff, adding weight and lubricating the clay.",
          "Part of the four-star hotel collapsed and the rest had to be demolished; nobody was killed.",
        ],
      },
    },
    {
      id: "transport-and-drift",
      heading: "Transportation, longshore drift and deposition",
      body:
        "Once rock has been eroded, the sea **transports** (carries) it. There are four ways, from the biggest load to the smallest:\n\n- **Traction**: large boulders and pebbles are **rolled** along the sea bed\n- **Saltation**: smaller pebbles and coarse sand are **bounced** (hopped) along the sea bed\n- **Suspension**: fine sand, silt and clay are **carried within the water**, making it look cloudy or murky\n- **Solution**: minerals are **dissolved** in the water and carried invisibly\n\n**Longshore drift** is the movement of sediment **along** the coast:\n\n- The **prevailing wind** (the most common wind direction) drives waves towards the beach **at an angle**\n- The **swash** carries sand and pebbles **up the beach at the same angle** as the waves\n- The **backwash** pulls them **straight back down** the beach, at right angles to the shore, **under gravity** (the steepest route down)\n- Repeated thousands of times, sediment zig-zags along the coast in the direction of the prevailing wind\n\nPeople build **groynes** (low fences or walls at right angles to the beach) to trap sand moving by longshore drift. Sand piles up on the up-drift side, but beaches further along can be starved of sediment.\n\n**Deposition** is when the sea **loses energy** and drops the material it is carrying. The heaviest material is dropped first. Deposition happens:\n\n- In **sheltered bays**, where waves spread out and lose energy\n- Where **constructive waves** dominate (swash stronger than backwash)\n- Where the water is **shallow**, increasing friction with the sea bed\n- Where the **coast changes direction**, such as at a river mouth, so longshore drift runs into deeper, calmer water\n- Where there is little wind, or an obstacle such as a groyne\n- Where there is a **large supply of sediment** from eroding cliffs or rivers\n\nDeposition builds landforms such as **beaches** and **spits** (long ridges of sand or shingle that stick out from the coast where it changes direction).",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of longshore drift: swash at an angle, backwash straight down the beach, sediment moving along the coast"><defs><marker id="ld-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e3a8a"/></marker><marker id="ld-ah2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b91c1c"/></marker><marker id="ld-ah3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803d"/></marker></defs><rect width="320" height="170" fill="#7dd3fc"/><rect x="0" y="0" width="320" height="60" fill="#bbf7d0"/><rect x="0" y="60" width="320" height="45" fill="#fde68a"/><text x="10" y="20" font-size="10" fill="#14532d">LAND</text><text x="10" y="76" font-size="10" fill="#713f12">BEACH</text><text x="10" y="160" font-size="10" fill="#0c4a6e">SEA</text><line x1="40" y1="160" x2="90" y2="125" stroke="#334155" stroke-width="2" marker-end="url(#ld-ah)"/><text x="40" y="140" font-size="9" fill="#334155">prevailing</text><text x="40" y="150" font-size="9" fill="#334155">wind</text><line x1="90" y1="100" x2="130" y2="70" stroke="#1e3a8a" stroke-width="2" marker-end="url(#ld-ah)"/><line x1="132" y1="70" x2="132" y2="98" stroke="#b91c1c" stroke-width="2" marker-end="url(#ld-ah2)"/><line x1="134" y1="100" x2="174" y2="70" stroke="#1e3a8a" stroke-width="2" marker-end="url(#ld-ah)"/><line x1="176" y1="70" x2="176" y2="98" stroke="#b91c1c" stroke-width="2" marker-end="url(#ld-ah2)"/><line x1="178" y1="100" x2="218" y2="70" stroke="#1e3a8a" stroke-width="2" marker-end="url(#ld-ah)"/><line x1="220" y1="70" x2="220" y2="98" stroke="#b91c1c" stroke-width="2" marker-end="url(#ld-ah2)"/><rect x="262" y="56" width="5" height="62" fill="#78350f"/><text x="250" y="130" font-size="9" fill="#78350f">groyne</text><line x1="110" y1="120" x2="240" y2="120" stroke="#15803d" stroke-width="2.5" marker-end="url(#ld-ah3)"/><text x="130" y="135" font-size="10" fill="#14532d">movement of sediment</text><text x="150" y="52" font-size="9" fill="#1e3a8a">swash (at an angle)</text><text x="180" y="112" font-size="9" fill="#b91c1c">backwash (straight down)</text></svg>`,
      diagramCaption: "Longshore drift: swash moves sediment up the beach at the angle of the waves; backwash returns it straight down under gravity, so it zig-zags along the coast until trapped by a groyne.",
      keyPoints: [
        "Transport: traction (roll), saltation (bounce), suspension (carried), solution (dissolved).",
        "Longshore drift: swash at an angle, backwash at right angles under gravity.",
        "Deposition happens when the sea loses energy — sheltered bays, shallow water, constructive waves.",
      ],
      thinkDeeper:
        "If the prevailing wind on a coast swapped direction for a whole season, what would happen to the sand trapped against a groyne? Sketch the before and after.",
      discovery: {
        problem:
          "A wooden groyne on a beach has sand piled almost to its top on one side, and on the other side the sand is a metre lower. Which way is sand moving along this beach, and what is moving it?",
        idea:
          "Longshore drift carries sand along the beach in the direction of the prevailing wind; the groyne traps it on the up-drift side, so the high side faces where the sand comes from.",
      },
      caseStudy: {
        place: "Spurn Head, East Yorkshire (UK)",
        facts: [
          "A sand and shingle spit about 5 km long stretching across the mouth of the Humber Estuary.",
          "Built by longshore drift carrying sediment eroded from the Holderness cliffs southwards.",
          "Has a curved (recurved) tip where waves are refracted round the end.",
          "A storm surge in December 2013 breached the neck of the spit; it is now cut off at very high tides.",
        ],
      },
      skill: "Drawing and annotating a longshore drift diagram",
    },
    {
      id: "geology",
      heading: "Geology: hard rock, soft rock and the shape of the coast",
      body:
        "**Geology** means the rocks a place is made of and how they are arranged. It strongly controls how fast a coast erodes and what landforms appear.\n\n- **Hard (resistant) rocks** such as granite, limestone and chalk erode slowly and form high, steep cliffs and **headlands** (areas of land sticking out into the sea).\n- **Soft (less resistant) rocks** such as clay, sands and boulder clay erode quickly, forming **bays** (curved inlets of sea between headlands) and low, slumping cliffs.\n- **Joints and faults** (cracks and lines of weakness) let hydraulic action and abrasion attack even hard rock.\n\nThe direction of the rock bands compared with the coastline matters:\n\n- A **discordant coast** has bands of hard and soft rock running **at right angles (perpendicular)** to the coastline. The soft rock erodes back into bays while the hard rock is left standing out as headlands. This is **differential erosion** — different rocks eroding at different rates.\n- A **concordant coast** has bands of rock running **parallel** to the coastline. A band of hard rock along the front protects the softer rock behind it. If the sea breaks through the hard rock (often along a weakness), it can scoop out the soft rock behind to form a round **cove**.\n\nThe **Jurassic Coast** in Dorset (a UNESCO World Heritage Site since 2001, about 150 km long) shows both. Around **Swanage** the coast is discordant: chalk (Old Harry Rocks headland), soft clays and sands (Swanage Bay) and limestone (Durlston Head). About 20 km west at **Lulworth Cove** the coast is concordant: the sea broke through a narrow band of hard Portland limestone and scooped out the soft clays behind it, until it reached the harder chalk at the back.",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch maps comparing a discordant coast with headlands and bays and a concordant coast with a cove"><rect width="320" height="170" fill="#ffffff"/><text x="78" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#334155">Discordant</text><text x="238" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#334155">Concordant</text><rect x="5" y="20" width="150" height="140" fill="#7dd3fc"/><path d="M5,20 L45,20 L45,110 L5,110 Z" fill="#a8a29e"/><path d="M45,20 L95,20 L95,70 Q70,82 45,70 Z" fill="#fde68a"/><path d="M95,20 L155,20 L155,115 L95,115 Z" fill="#a8a29e"/><text x="25" y="64" font-size="9" text-anchor="middle" fill="#1c1917">hard</text><text x="70" y="50" font-size="9" text-anchor="middle" fill="#713f12">soft</text><text x="125" y="64" font-size="9" text-anchor="middle" fill="#1c1917">hard</text><text x="25" y="126" font-size="9" text-anchor="middle" fill="#0c4a6e">headland</text><text x="70" y="96" font-size="9" text-anchor="middle" fill="#0c4a6e">bay</text><text x="125" y="130" font-size="9" text-anchor="middle" fill="#0c4a6e">headland</text><rect x="165" y="20" width="150" height="140" fill="#7dd3fc"/><rect x="165" y="20" width="150" height="40" fill="#cbd5e1"/><rect x="165" y="60" width="150" height="40" fill="#fde68a"/><path d="M165,100 L315,100 L315,125 L250,125 L250,100 L230,100 L230,125 L165,125 Z" fill="#a8a29e"/><path d="M230,125 L230,85 Q240,62 250,85 L250,125 Z" fill="#7dd3fc"/><text x="290" y="44" font-size="9" text-anchor="middle" fill="#1c1917">chalk</text><text x="290" y="84" font-size="9" text-anchor="middle" fill="#713f12">soft clay</text><text x="290" y="117" font-size="9" text-anchor="middle" fill="#1c1917">hard limestone</text><text x="240" y="145" font-size="10" text-anchor="middle" fill="#0c4a6e">cove</text><text x="305" y="160" font-size="10" text-anchor="middle" fill="#334155">N↑</text></svg>`,
      diagramCaption: "Left: rock bands at right angles to the coast erode into headlands and bays. Right: bands parallel to the coast; once the hard outer band is breached, a cove forms in the soft rock behind.",
      keyPoints: [
        "Hard rocks (granite, chalk, limestone) form headlands and high cliffs; soft rocks (clay, sand) form bays.",
        "Discordant coast: rock bands perpendicular to the coast → headlands and bays.",
        "Concordant coast: rock bands parallel to the coast → hard rock protects; coves form if breached.",
        "Differential erosion = rocks eroding at different rates.",
      ],
      thinkDeeper:
        "Once headlands form on a discordant coast, waves bend round them and focus energy on the headlands while bays become sheltered. Does this mean a coastline eventually straightens out again? Explain your reasoning.",
      discovery: {
        problem:
          "Two coasts are made of exactly the same rocks — a band of chalk, a band of clay and a band of limestone. One coast is a series of headlands and bays; the other is almost straight with one round cove. What could be different?",
        idea:
          "The direction of the rock bands. When bands meet the sea at right angles, soft rock erodes into bays (discordant). When they run parallel, the outer hard band protects the rest until it is breached (concordant).",
      },
      caseStudy: {
        place: "Swanage and Lulworth Cove, Dorset (UK)",
        facts: [
          "Part of the Jurassic Coast, a UNESCO World Heritage Site since 2001, about 150 km long.",
          "Swanage Bay (discordant): soft Wealden clays and sands between chalk at Ballard Point / Old Harry Rocks and limestone at Durlston Head.",
          "Lulworth Cove (concordant): the sea breached a narrow band of Portland limestone and eroded the soft clays and sands behind.",
          "The cove is roughly 500 m across and is stopped at the back by more resistant chalk.",
        ],
      },
      skill: "Reading a geological sketch map",
    },
    {
      id: "singapore-coast",
      heading: "Singapore's coast: reclaimed land, seawalls and rising seas",
      body:
        "Singapore is a low-lying island nation, so coastal processes are not just theory here. About **30% of the land is less than 5 m above mean sea level**.\n\n**A coast built by people.** Through **land reclamation** (creating new land by filling the sea with sand and soil), Singapore has grown from about **581 km² in the 1960s to about 735 km² today** — an increase of roughly a quarter. **East Coast Park**, about **15 km long**, sits entirely on land reclaimed from the late 1960s onwards and opened in the 1970s. Marine Parade Road was once on the seafront; the shore is now hundreds of metres further out.\n\n**A coast armoured against the sea.** Reclaimed sand is loose and easily eroded by hydraulic action and backwash, so it must be protected. Today **more than 70% of Singapore's coastline** is lined with **seawalls** (vertical or sloping concrete walls) and **rock revetments** (sloping banks of large boulders that absorb wave energy). At East Coast Park, **offshore breakwaters** and short headland breakwaters create a string of small bays where waves lose energy and sand is deposited, keeping the beach in place. Elsewhere, especially on Pulau Ubin and in Sungei Buloh, **mangroves** act as a natural buffer.\n\n**The threat of sea-level rise.** As the climate warms, seawater expands and land ice melts. Singapore's Centre for Climate Research projects that mean sea level could rise by **up to about 1 m by 2100** (the 2024 projections give a range of roughly 0.2–1.15 m), and when high tides and storm surges are added, sea levels could reach **4–5 m above today's mean sea level**. Higher seas mean waves reach further inland, more erosion of reclaimed land and more flooding.\n\n**PUB's plans.** In 2020 **PUB**, Singapore's national water agency, became the **national coastal protection agency**. The government has estimated that protecting the coast could cost about **S$100 billion or more over 100 years**, and set up a **Coastal and Flood Protection Fund** (first S$5 billion) in 2020. PUB is carrying out site-by-site studies, starting with the **City–East Coast** stretch and the **North-West coast** (Lim Chu Kang and Sungei Kadut). Ideas include raising and extending seawalls, tidal gates and polders, and the **Long Island** concept — reclaiming about **800 hectares** off East Coast, which could protect the coast and create a new reservoir.",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of East Coast Park showing reclaimed land, rock revetment, breakwater and future sea level"><rect width="320" height="170" fill="#f0f9ff"/><path d="M0,95 L120,95 L150,120 L150,170 L0,170 Z" fill="#fde68a" stroke="#ca8a04"/><path d="M0,95 L60,95 L60,170 L0,170 Z" fill="#d9f99d" stroke="#65a30d"/><text x="30" y="88" font-size="9" text-anchor="middle" fill="#365314">old coast</text><text x="92" y="88" font-size="9" text-anchor="middle" fill="#713f12">park</text><text x="92" y="140" font-size="9" text-anchor="middle" fill="#713f12">reclaimed sand</text><path d="M120,95 L140,95 L172,132 L150,132 Z" fill="#78716c" stroke="#44403c"/><text x="168" y="108" font-size="9" fill="#44403c">rock revetment</text><rect x="150" y="132" width="170" height="38" fill="#7dd3fc"/><path d="M240,132 L252,116 L266,116 L278,132 Z" fill="#78716c" stroke="#44403c"/><text x="259" y="110" font-size="9" text-anchor="middle" fill="#44403c">breakwater</text><line x1="140" y1="132" x2="320" y2="132" stroke="#0369a1" stroke-width="1.5"/><text x="300" y="146" font-size="9" text-anchor="end" fill="#0c4a6e">today's sea level</text><line x1="130" y1="118" x2="320" y2="118" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5 3"/><text x="318" y="160" font-size="9" text-anchor="end" fill="#dc2626">+1 m by 2100 (up to)</text><line x1="0" y1="20" x2="40" y2="20" stroke="#334155"/><text x="45" y="24" font-size="10" fill="#334155">Not to scale</text></svg>`,
      diagramCaption: "East Coast Park sits on reclaimed sand protected by a rock revetment and offshore breakwaters; a sea-level rise of up to about 1 m by 2100 would let waves reach higher up the defences.",
      keyPoints: [
        "East Coast Park (about 15 km) is built on land reclaimed from the late 1960s.",
        "More than 70% of Singapore's coastline is protected by seawalls and rock revetments.",
        "Sea level could rise by up to about 1 m by 2100; 30% of land is under 5 m above sea level.",
        "PUB has been the national coastal protection agency since 2020; costs could reach S$100 billion over 100 years.",
      ],
      thinkDeeper:
        "Hard seawalls stop erosion directly behind them, but the backwash bouncing off a vertical wall can scour away the beach in front. Why might Singapore choose sloping rock revetments, breakwaters and mangroves instead of plain vertical walls in some places?",
      discovery: {
        problem:
          "Compare a 1960s map of Singapore with a modern one: the east coast has moved out to sea, and almost all the new shoreline is straight and lined with boulders. Where did the new land come from, and why would it need so much rock along its edge?",
        idea:
          "The land was reclaimed from the sea using sand. Loose sand is easily eroded by waves, so it has to be armoured with revetments and seawalls — especially as sea levels rise.",
      },
      caseStudy: {
        place: "East Coast Park and Singapore's coastline",
        facts: [
          "Land area grew from about 581 km² (1960s) to about 735 km² through reclamation.",
          "East Coast Park is about 15 km long, built on land reclaimed from the late 1960s, opened in the 1970s.",
          "More than 70% of the coastline is protected by seawalls or rock revetments.",
          "Mean sea level could rise by up to about 1 m by 2100; about 30% of land is less than 5 m above sea level.",
          "PUB became the national coastal protection agency in 2020; long-term protection may cost S$100 billion or more.",
        ],
      },
      skill: "Calculating percentage change (e.g. Singapore's land area 1960s → today)",
    },
  ],

  mnemonics: [
    {
      topic: "The four processes of marine erosion",
      device: "Hungry Alligators Always Snap",
      explanation:
        "Hydraulic action, Abrasion, Attrition, Solution. Remember: Abrasion attacks the cliff; Attrition attacks the rocks themselves.",
    },
    {
      topic: "The four ways the sea transports material (largest to smallest)",
      device: "Tortoises Slowly Swim Silently",
      explanation:
        "Traction (rolled), Saltation (bounced), Suspension (carried), Solution (dissolved). The words go from heaviest load to lightest.",
    },
    {
      topic: "What makes a wave big",
      device: "Wind needs SPEED, TIME and SPACE",
      explanation:
        "Speed = wind speed; Time = wind duration (how long it blows); Space = fetch (distance of open water).",
    },
    {
      topic: "Constructive vs destructive waves",
      device: "CONstructive = CONveyor up the beach; DEstructive = DEpart down the beach",
      explanation:
        "Constructive waves have a strong swash carrying sand up the beach; destructive waves have a strong backwash dragging it away. Constructive are also slower: 6–8 a minute vs 10–14.",
    },
  ],

  examMistakes: [
    "Mixing up abrasion and attrition: abrasion is rocks thrown AT the cliff; attrition is rocks hitting EACH OTHER and becoming smaller and rounder.",
    "Calling hydraulic action 'the waves hitting the cliff' without mentioning the force of water or air compressed in cracks.",
    "Using 'weathering' and 'erosion' as if they mean the same thing — weathering happens in place, erosion involves removal.",
    "Saying the backwash in longshore drift goes 'back at an angle' — it goes straight down the beach, at right angles to the shore, because of gravity.",
    "Listing only 'wind' as the cause of wave size instead of naming all three factors: wind speed, duration and fetch.",
    "Describing constructive and destructive waves without comparing swash and backwash strength, which is the key difference.",
    "Not quoting data in Singapore answers (e.g. over 70% of coastline armoured; up to about 1 m sea-level rise by 2100; S$100 billion).",
    "Confusing concordant and discordant coasts — discordant has bands at right angles to the coast and forms headlands and bays.",
  ],

  misconceptions: [
    {
      wrong: "Waves carry water across the ocean from one side to the other.",
      right: "Waves transfer energy. Out at sea the water mostly moves in circles; only when the wave breaks does water rush up the beach as swash.",
    },
    {
      wrong: "Weathering and erosion are the same thing.",
      right: "Weathering breaks rock down in place; erosion wears rock away AND removes it by a moving agent such as waves.",
    },
    {
      wrong: "Freeze–thaw weathering happens everywhere, including Singapore.",
      right: "Freeze–thaw needs temperatures to swing above and below 0 °C. Singapore never freezes, so chemical weathering dominates instead.",
    },
    {
      wrong: "Hard rocks like chalk cannot be eroded.",
      right: "Hard rocks erode more slowly, but joints and faults let hydraulic action and abrasion attack them, and chalk is also dissolved by solution.",
    },
    {
      wrong: "Seawalls solve coastal erosion permanently.",
      right: "Seawalls protect the land directly behind them, but they are expensive, need maintenance and can reflect wave energy, scouring the beach in front or increasing erosion further along.",
    },
    {
      wrong: "Deposition happens where the sea is strongest.",
      right: "Deposition happens where the sea LOSES energy — sheltered bays, shallow water, calm weather and constructive waves.",
    },
  ],

  expertDebates: [
    {
      question: "Hard walls or nature-based defences: how should Singapore protect its coast?",
      detail:
        "Seawalls and rock revetments give reliable, measurable protection for valuable land such as Marina Bay, Changi and East Coast Park, and they take up little space. But they are costly to raise as sea levels rise, offer little habitat and can increase erosion elsewhere. Mangroves and restored beaches absorb wave energy, store carbon and support wildlife, yet need space Singapore rarely has and may not keep up with the fastest sea-level rise. Most experts now favour a mix: 'hybrid' defences that combine engineering with nature.",
    },
    {
      question: "Should places like the Holderness coast be protected or allowed to erode?",
      detail:
        "Protecting every village would cost far more than the value of the land, and defences such as the groynes at Mappleton trap sediment and starve beaches further south, speeding up erosion there. Allowing 'managed retreat' saves money and lets natural sediment flow continue to feed Spurn Head, but it means families losing homes and farmland with little compensation. The debate is about fairness as well as cost.",
    },
    {
      question: "Is more land reclamation the answer to sea-level rise — or part of the problem?",
      detail:
        "Projects such as the Long Island concept could raise new land high enough to protect the east coast and add a reservoir. Critics point out that reclamation needs huge amounts of sand — several neighbouring countries have banned or restricted sand exports — and it buries sea-bed habitats such as seagrass and corals. Supporters argue Singapore has few alternatives for a low-lying, land-short city.",
    },
  ],

  realWorld: [
    {
      title: "East Coast Park breakwaters",
      detail:
        "Next time you cycle at East Coast Park, look out to sea: the lines of boulders offshore are breakwaters that make waves lose energy so sand is deposited in the small bays instead of being washed away.",
      emoji: "🚴",
    },
    {
      title: "Sentosa's sheltered beaches",
      detail:
        "Siloso, Palawan and Tanjong beaches are protected by artificial breakwaters and topped up with imported sand — a mix of constructive-wave conditions and beach nourishment.",
      emoji: "🏖️",
    },
    {
      title: "Mangroves at Sungei Buloh and Pulau Ubin",
      detail:
        "Mangrove roots slow the water, cause mud to be deposited and absorb wave energy — a natural form of coastal protection that also shelters wildlife.",
      emoji: "🌳",
    },
    {
      title: "Monsoon waves on the east coast",
      detail:
        "During the Northeast Monsoon (about December–March) winds blowing across the South China Sea bring rougher water to Changi and East Coast, which is when erosion of beaches is most noticeable.",
      emoji: "🌬️",
    },
    {
      title: "Cliff-top homes in the UK",
      detail:
        "On the Holderness coast houses and caravan parks have fallen into the sea; homeowners there face the reality of erosion of nearly 2 m per year.",
      emoji: "🏚️",
    },
  ],

  flashcards: [
    { front: "Fetch", back: "The distance of open water over which the wind blows. Longer fetch = bigger, more powerful waves." },
    { front: "Three factors controlling wave size", back: "Wind speed, wind duration (how long it blows) and fetch." },
    { front: "Swash and backwash", back: "Swash: water rushing up the beach after a wave breaks. Backwash: water draining back down to the sea." },
    { front: "Constructive wave", back: "Low, long wavelength, 6–8 per minute; strong swash, weak backwash; builds beaches." },
    { front: "Destructive wave", back: "Tall, steep, 10–14 per minute; weak swash, strong backwash; removes material from beaches." },
    { front: "Weathering vs erosion", back: "Weathering = breakdown of rock in place. Erosion = wearing away and removal by a moving agent (e.g. waves)." },
    { front: "Freeze–thaw weathering", back: "Water in cracks freezes, expands by about 9%, widens the crack; repeated cycles break off rock." },
    { front: "Carbonation", back: "Chemical weathering: rainwater + CO₂ forms weak carbonic acid, which dissolves calcium carbonate in limestone and chalk." },
    { front: "Hydraulic action", back: "Erosion by the force of water and air compressed into cracks in the cliff." },
    { front: "Abrasion (corrasion)", back: "Erosion when waves hurl sand and pebbles against the cliff, scraping it like sandpaper." },
    { front: "Attrition", back: "Rocks carried by waves knock into each other, becoming smaller, smoother and rounder." },
    { front: "Mass movement (3 types)", back: "Downhill movement under gravity: rockfall, slumping (curved slip surface), sliding (flat slip plane)." },
    { front: "Traction, saltation, suspension, solution", back: "Rolled; bounced; carried in the water; dissolved." },
    { front: "Longshore drift", back: "Swash carries sediment up the beach at the angle of the prevailing wind; backwash returns it straight down under gravity; sediment zig-zags along the coast." },
    { front: "Discordant vs concordant coast", back: "Discordant: rock bands at right angles to the coast → headlands and bays. Concordant: bands parallel → coves if breached." },
    { front: "Singapore's coast in numbers", back: "Over 70% armoured by seawalls/revetments; sea level up to about 1 m higher by 2100; ~30% of land under 5 m; PUB coastal agency since 2020; ~S$100 billion over 100 years." },
  ],

  mustKnow: [
    "Can you explain how waves form and name the three factors that control wave size?",
    "Can you compare constructive and destructive waves using swash, backwash, height and frequency?",
    "Can you define weathering and erosion and explain the difference?",
    "Can you describe freeze–thaw, salt crystallisation, carbonation and biological weathering?",
    "Can you explain the four erosion processes: hydraulic action, abrasion, attrition and solution?",
    "Can you name and describe rockfall, slumping and sliding, and explain what triggers mass movement?",
    "Can you draw and annotate a longshore drift diagram and list the four types of transportation?",
    "Can you explain why deposition happens and where it is most likely?",
    "Can you explain the difference between concordant and discordant coasts using Dorset as an example?",
    "Can you describe how Singapore's coast is protected and why sea-level rise is a threat, quoting figures?",
  ],

  videos: [
    {
      title: "Coastal erosion processes explained",
      channel: "Time for Geography",
      url: "https://www.youtube.com/results?search_query=time+for+geography+coastal+erosion+processes",
    },
    {
      title: "Constructive and destructive waves",
      channel: "Cool Geography",
      url: "https://www.youtube.com/results?search_query=cool+geography+constructive+destructive+waves",
    },
    {
      title: "Longshore drift and coastal transportation",
      channel: "BBC Bitesize",
      url: "https://www.youtube.com/results?search_query=bbc+bitesize+longshore+drift+coastal+transportation",
    },
    {
      title: "Weathering and mass movement at the coast",
      channel: "Internet Geography",
      url: "https://www.youtube.com/results?search_query=internet+geography+weathering+mass+movement+coasts",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "cproc-quiz-mcq-1",
        question: "Which three factors control how big and powerful a wave becomes?",
        options: [
          "Tide height, sea temperature and wind direction",
          "Rock type, beach width and wind speed",
          "Wind speed, wind duration and fetch",
          "Water depth, salinity and fetch",
        ],
        answerIndex: 2,
        hint: "Waves get their energy from the wind — think about how strong, how long and over how much water.",
        explanation:
          "Waves form when wind transfers energy to the sea, so stronger winds, blowing for longer, over a longer fetch, make bigger waves. Rock type and beach width affect erosion, not wave size out at sea.",
        guideRef: "coast-and-waves",
      },
      {
        id: "cproc-quiz-mcq-2",
        question: "In longshore drift, in which direction does the backwash move sediment?",
        options: [
          "Straight back down the beach, at right angles to the shore, because of gravity",
          "Back down the beach at the same angle as the prevailing wind",
          "Along the beach parallel to the shoreline",
          "Up the beach towards the cliffs",
        ],
        answerIndex: 0,
        hint: "Swash is pushed by the wind; backwash is pulled by something else.",
        explanation:
          "The backwash is pulled by gravity, so it takes the steepest route — straight down the beach. The swash, not the backwash, moves at the angle of the prevailing wind; together they create the zig-zag.",
        guideRef: "transport-and-drift",
      },
      {
        id: "cproc-quiz-mcq-3",
        question: "Which statement correctly describes abrasion?",
        options: [
          "Rocks carried by waves knock into each other and become rounder",
          "Air is trapped and compressed in cracks in the cliff",
          "Seawater dissolves chalk and limestone",
          "Waves pick up sand and pebbles and hurl them against the cliff",
        ],
        answerIndex: 3,
        hint: "Think of sandpaper.",
        explanation:
          "Abrasion (corrasion) is when material carried by the waves is thrown at the cliff, scraping it away. Rocks knocking into each other is attrition — a very common mix-up.",
        guideRef: "erosion-processes",
      },
      {
        id: "cproc-quiz-mcq-4",
        question: "A coast where bands of hard and soft rock run at right angles to the coastline is called…",
        options: [
          "a concordant coast",
          "a discordant coast",
          "a dalmatian coast",
          "a constructive coast",
        ],
        answerIndex: 1,
        hint: "When rock bands 'disagree' with the coastline's direction…",
        explanation:
          "A discordant coast has rock bands perpendicular to the coast, so the soft rock erodes into bays and the hard rock forms headlands. On a concordant coast the bands run parallel to the coastline.",
        guideRef: "geology",
      },
    ],
    qa: [
      {
        id: "cproc-quiz-qa-1",
        question: "Explain the difference between weathering and erosion.",
        marks: 2,
        hint: "One of them moves the material; one does not.",
        modelAnswer:
          "Weathering is the breakdown of rock in place (in situ) by the weather, chemicals or living things — the material is not moved. Erosion is the wearing away of rock and the removal of the material by a moving force such as waves.",
        markScheme: [
          { point: "Weathering is breakdown of rock in place / not moved", keywords: ["in place", "in situ", "not moved", "without moving", "stays", "no movement"] },
          { point: "Erosion involves wearing away and removal/movement by an agent such as waves", keywords: ["remov", "moved away", "carried away", "transport", "moving force", "by waves"] },
        ],
        commonError: "Writing that both 'break down rock' without stating that erosion involves movement.",
        guideRef: "weathering",
      },
      {
        id: "cproc-quiz-qa-2",
        question: "Compare constructive and destructive waves.",
        marks: 4,
        hint: "Compare swash vs backwash, height/shape, frequency and effect on the beach.",
        modelAnswer:
          "Constructive waves have a strong swash and a weak backwash, whereas destructive waves have a weak swash and a strong backwash. Constructive waves are low with a long wavelength, while destructive waves are tall and steep. Constructive waves are less frequent (about 6–8 per minute) than destructive waves (about 10–14 per minute). As a result, constructive waves build up beaches by depositing material, while destructive waves remove material and erode beaches.",
        markScheme: [
          { point: "Constructive: strong swash / weak backwash", keywords: ["strong swash", "swash is stronger", "swash stronger", "weak backwash"] },
          { point: "Destructive: strong backwash / weak swash", keywords: ["strong backwash", "backwash is stronger", "backwash stronger", "weak swash"] },
          { point: "Difference in frequency or height", keywords: ["frequen", "per minute", "tall", "steep", "wavelength", "10–14"] },
          { point: "Constructive build beaches; destructive remove material", keywords: ["build", "deposit", "remov", "erode", "drag"] },
        ],
        commonError: "Describing each wave separately without using comparative words such as 'whereas' or 'while'.",
        guideRef: "wave-types",
      },
      {
        id: "cproc-quiz-qa-3",
        question: "Explain how longshore drift moves sediment along a beach.",
        marks: 4,
        hint: "Start with the wind, then swash, then backwash, then repeat.",
        modelAnswer:
          "The prevailing wind drives waves towards the beach at an angle. The swash carries sand and pebbles up the beach at that same angle. The backwash then pulls the sediment straight back down the beach, at right angles to the shore, because of gravity. This process repeats, so sediment zig-zags along the coast in the direction of the prevailing wind.",
        markScheme: [
          { point: "Prevailing wind makes waves approach at an angle", keywords: ["prevailing wind", "at an angle", "diagonal", "oblique"] },
          { point: "Swash carries sediment up the beach at an angle", keywords: ["swash", "up the beach", "carries sediment up", "moves sediment up"] },
          { point: "Backwash returns sediment straight down / at right angles due to gravity", keywords: ["backwash", "straight down", "right angle", "gravity", "perpendicular", "90"] },
          { point: "Repeated, so sediment zig-zags along the coast", keywords: ["zig", "repeat", "along the coast", "along the beach", "over and over"] },
        ],
        commonError: "Saying the backwash goes back at an angle, or forgetting to say the process repeats.",
        guideRef: "transport-and-drift",
      },
      {
        id: "cproc-quiz-qa-4",
        question: "Explain why Singapore needs to protect its coastline. Use figures in your answer.",
        marks: 6,
        hint: "Think about how low the land is, what the coast is made of, and what is happening to sea levels. Give numbers.",
        modelAnswer:
          "Singapore is very low-lying: about 30% of its land is less than 5 m above mean sea level, so even a small rise in sea level puts a large area at risk. Much of the coast, such as East Coast Park, is built on reclaimed land made of loose sand, which is easily eroded by waves through hydraulic action and strong backwash. Sea level is projected to rise by up to about 1 m by 2100 as the climate warms, and with high tides and storm surges water levels could reach 4–5 m above today's mean sea level. This would let waves reach further inland, increasing erosion and flooding of homes, parks and infrastructure such as Changi Airport. That is why more than 70% of the coastline is already protected by seawalls and rock revetments, and PUB, the national coastal protection agency, is planning defences that could cost about S$100 billion over 100 years.",
        markScheme: [
          { point: "Low-lying land (about 30% under 5 m)", keywords: ["low-lying", "low lying", "30%", "5 m", "5m", "below 5"] },
          { point: "Reclaimed land made of loose sand is easily eroded", keywords: ["reclaim", "loose sand", "sand", "easily erod"] },
          { point: "Sea-level rise of up to about 1 m by 2100", keywords: ["1 m", "1m", "2100", "sea level rise", "sea-level rise", "rising sea"] },
          { point: "Storm surges / high tides could add more (4–5 m)", keywords: ["storm surge", "high tide", "4-5", "4–5", "surge"] },
          { point: "Consequence: flooding / erosion of valuable land or infrastructure", keywords: ["flood", "homes", "airport", "changi", "infrastructure", "valuable"] },
          { point: "Uses data on current/planned protection (70%, PUB, S$100 billion)", keywords: ["70%", "coastal protection agency", "100 billion", "seawall", "revetment"] },
        ],
        commonError: "Giving a general answer about 'climate change' without any Singapore figures or explaining why reclaimed land is vulnerable.",
        guideRef: "singapore-coast",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "cproc-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "cproc-mcq-p1-q01",
            question: "Which part of the coastal zone lies between the high-tide mark and the low-tide mark?",
            options: ["The backshore", "The offshore zone", "The foreshore", "The cliff top"],
            answerIndex: 2,
            hint: "It is the part covered and uncovered by the sea twice a day.",
            explanation:
              "The foreshore is the area between high and low tide. The backshore is above the reach of normal high tides, and the offshore zone is beyond the low-tide mark.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-mcq-p1-q02",
            question: "What is the fetch?",
            options: [
              "The distance of open water over which the wind blows",
              "The distance a wave travels up the beach",
              "The height of a wave from trough to crest",
              "The time between two waves breaking",
            ],
            answerIndex: 0,
            hint: "It is measured across the sea, not on the beach.",
            explanation:
              "Fetch is the distance of open water the wind blows over; a longer fetch gives the wind more space to transfer energy. The distance water travels up the beach is the swash, not the fetch.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-mcq-p1-q03",
            question: "What is the swash?",
            options: [
              "Water draining back down the beach",
              "The highest point of a wave",
              "A current running parallel to the coast",
              "Water rushing up the beach after a wave breaks",
            ],
            answerIndex: 3,
            hint: "Swash comes first, backwash second.",
            explanation:
              "Swash is the forward rush of water up the beach after a wave breaks. Water draining back down is the backwash; the highest point of a wave is the crest.",
            guideRef: "wave-types",
          },
          {
            id: "cproc-mcq-p1-q04",
            question: "About how many constructive waves break per minute?",
            options: ["1–2", "6–8", "10–14", "20–25"],
            answerIndex: 1,
            hint: "Constructive waves are the slower, gentler type.",
            explanation:
              "Constructive waves have a low frequency of about 6–8 per minute, giving water time to soak into the beach. 10–14 per minute is typical of destructive waves.",
            guideRef: "wave-types",
          },
          {
            id: "cproc-mcq-p1-q05",
            question: "Which conditions are needed for freeze–thaw weathering?",
            options: [
              "Constant high temperatures and heavy rain",
              "Temperatures that rise above and fall below 0 °C, plus water in cracks",
              "Strong winds carrying sand",
              "Salty sea spray and hot sunshine",
            ],
            answerIndex: 1,
            hint: "The name tells you what the water must keep doing.",
            explanation:
              "Water in cracks must freeze (expanding about 9%) and thaw repeatedly, so temperatures must swing around 0 °C. Salty spray and sunshine cause salt crystallisation, a different mechanical process.",
            guideRef: "weathering",
          },
          {
            id: "cproc-mcq-p1-q06",
            question: "Which erosion process involves air being trapped and compressed in cracks in a cliff?",
            options: ["Attrition", "Solution", "Abrasion", "Hydraulic action"],
            answerIndex: 3,
            hint: "It is all about the force of water itself.",
            explanation:
              "Hydraulic action is the force of water, including air forced into cracks and then released explosively. Abrasion needs rocks to be thrown at the cliff.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p1-q07",
            question: "What happens to pebbles as a result of attrition?",
            options: [
              "They become smaller, smoother and rounder",
              "They become larger as sand sticks to them",
              "They dissolve completely in seawater",
              "They become sharper and more angular",
            ],
            answerIndex: 0,
            hint: "Think about what happens when stones keep bumping into each other.",
            explanation:
              "In attrition pebbles knock into each other, chipping off corners so they become smaller and rounder. Angular pebbles are typical of freshly fallen rock that has not yet been worn down.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p1-q08",
            question: "Small pebbles bounced along the sea bed are being transported by…",
            options: ["traction", "suspension", "saltation", "solution"],
            answerIndex: 2,
            hint: "'Saltare' means 'to jump' in Latin.",
            explanation:
              "Saltation is the bouncing or hopping of small pebbles and coarse sand. Traction is the rolling of larger boulders.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p1-q09",
            question: "What is mass movement?",
            options: [
              "The movement of sand along a beach by waves",
              "The breakdown of rock by plants and animals",
              "The movement of large numbers of tourists to the coast",
              "The downhill movement of rock, soil or mud under gravity",
            ],
            answerIndex: 3,
            hint: "Which force pulls everything downhill?",
            explanation:
              "Mass movement is the downhill movement of material under the influence of gravity, such as rockfalls and slumps. Movement of sand along a beach by waves is longshore drift.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-mcq-p1-q10",
            question: "Why are chalk and limestone especially affected by solution and carbonation?",
            options: [
              "They are made of clay that turns to mud",
              "They contain calcium carbonate, which dissolves in weak acids",
              "They are full of iron, which rusts",
              "They are igneous rocks formed from lava",
            ],
            answerIndex: 1,
            hint: "Think about what reacts with weak carbonic acid.",
            explanation:
              "Chalk and limestone are mostly calcium carbonate, which reacts with and dissolves in weak acids in rain and seawater. Clay is soft but is eroded mainly by hydraulic action and slumping, not dissolving.",
            guideRef: "weathering",
          },
          {
            id: "cproc-mcq-p1-q11",
            question: "Deposition happens when the sea…",
            options: [
              "loses energy and drops the material it is carrying",
              "gains energy during a storm",
              "dissolves rock along the coast",
              "reaches its highest tide",
            ],
            answerIndex: 0,
            hint: "To drop a heavy bag, you have to run out of strength.",
            explanation:
              "Deposition happens when waves lose energy and can no longer carry their load. Storms give the sea more energy, so they usually cause erosion rather than deposition.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p1-q12",
            question: "What is the main purpose of a groyne?",
            options: [
              "To stop waves reaching the cliff top",
              "To give boats somewhere to moor",
              "To trap sand moved by longshore drift",
              "To dissolve harmful chemicals in seawater",
            ],
            answerIndex: 2,
            hint: "Groynes are built at right angles to the beach.",
            explanation:
              "Groynes are barriers built across the beach to trap sediment moving by longshore drift, keeping the beach wide. They do not stop waves reaching cliffs — that is the job of seawalls.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p1-q13",
            question: "East Coast Park in Singapore is built on…",
            options: [
              "an ancient sand spit",
              "a coral reef that grew above sea level",
              "land reclaimed from the sea",
              "a former mangrove swamp left untouched",
            ],
            answerIndex: 2,
            hint: "Singapore's land area has grown by about a quarter since the 1960s.",
            explanation:
              "East Coast Park sits on land reclaimed from the late 1960s onwards. It is not a natural spit; spits form by longshore drift where a coast changes direction.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-mcq-p1-q14",
            question: "Roughly what proportion of Singapore's coastline is protected by seawalls and rock revetments?",
            options: ["More than 70%", "About 10%", "About 35%", "100%"],
            answerIndex: 0,
            hint: "It is more than two-thirds.",
            explanation:
              "More than 70% of Singapore's coastline is lined with seawalls or rock revetments. It is not 100%, because some stretches are natural, such as mangroves on Pulau Ubin and at Sungei Buloh.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-mcq-p1-q15",
            question: "What landforms typically form on a discordant coast?",
            options: [
              "Long straight cliffs with no inlets",
              "Headlands and bays",
              "Coral reefs and lagoons",
              "Sand dunes and salt marshes only",
            ],
            answerIndex: 1,
            hint: "Soft rock and hard rock meet the sea side by side.",
            explanation:
              "On a discordant coast the soft rock erodes back into bays and the hard rock is left as headlands. Long straight cliffs are more typical of concordant coasts.",
            guideRef: "geology",
          },
          {
            id: "cproc-mcq-p1-q16",
            question: "Which type of mass movement moves along a curved slip surface?",
            options: ["Rockfall", "Sliding", "Saltation", "Slumping"],
            answerIndex: 3,
            hint: "It is also called rotational slip.",
            explanation:
              "Slumping (rotational slip) moves along a curved surface, typically in saturated clay. Sliding moves along a flat plane; saltation is a type of transport, not mass movement.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-mcq-p1-q17",
            question: "A cliff retreated 36 m in 20 years. What was its average rate of erosion?",
            options: ["1.8 m per year", "0.55 m per year", "3.6 m per year", "16 m per year"],
            answerIndex: 0,
            hint: "Rate = distance ÷ time.",
            explanation:
              "36 m ÷ 20 years = 1.8 m per year (similar to the Holderness coast). 0.55 comes from dividing the wrong way round (20 ÷ 36).",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p1-q18",
            question: "Which describes carbonation?",
            options: [
              "Roots growing into cracks and widening them",
              "Salt crystals growing in the pores of rock",
              "Waves forcing air into cracks",
              "Rainwater forming weak carbonic acid that dissolves limestone",
            ],
            answerIndex: 3,
            hint: "It is a chemical process involving carbon dioxide.",
            explanation:
              "Rainwater absorbs carbon dioxide to form weak carbonic acid, which dissolves calcium carbonate in limestone and chalk. Salt crystals growing in pores is salt crystallisation, a mechanical process.",
            guideRef: "weathering",
          },
          {
            id: "cproc-mcq-p1-q19",
            question: "Why does a wave break as it approaches the shore?",
            options: [
              "The wind suddenly stops blowing",
              "The water becomes saltier near the coast",
              "Friction with the shallow sea bed slows the base of the wave while the top keeps going",
              "The tide pulls the top of the wave backwards",
            ],
            answerIndex: 2,
            hint: "Think about what the bottom of the wave starts to touch.",
            explanation:
              "In shallow water friction slows the bottom of the wave, so the top overtakes it and topples over. Wind stopping would not make a wave break suddenly at the shore.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-mcq-p1-q20",
            question: "Salt crystallisation is an example of…",
            options: ["chemical weathering", "mechanical weathering", "biological weathering", "abrasion"],
            answerIndex: 1,
            hint: "The salt crystals physically push the rock apart.",
            explanation:
              "Growing salt crystals exert pressure that breaks rock apart without changing its minerals, so it is mechanical (physical) weathering. Abrasion is erosion by the sea, not weathering.",
            guideRef: "weathering",
          },
        ],
      },
      {
        id: "cproc-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          {
            id: "cproc-mcq-p2-q01",
            question: "Which part of the coast is above the reach of normal high tides?",
            options: ["The foreshore", "The backshore", "The offshore zone", "The surf zone"],
            answerIndex: 1,
            hint: "It is at the 'back' of the beach.",
            explanation:
              "The backshore lies above normal high tide and includes cliffs and dunes; it is reached only by storm waves. The foreshore is between high and low tide.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-mcq-p2-q02",
            question: "What is the trough of a wave?",
            options: [
              "The top of the wave",
              "The distance between two crests",
              "The point where the wave breaks",
              "The lowest point between two waves",
            ],
            answerIndex: 3,
            hint: "The opposite of the crest.",
            explanation:
              "The trough is the low point between waves; the crest is the top. The distance between two crests is the wavelength.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-mcq-p2-q03",
            question: "If the fetch and wind speed stay the same, what happens to waves when the wind blows for longer?",
            options: [
              "They become larger and more powerful",
              "They become smaller",
              "They stop breaking",
              "They change direction by 90°",
            ],
            answerIndex: 0,
            hint: "Duration is one of the three wave factors.",
            explanation:
              "The longer the wind blows, the more energy is transferred, so waves grow larger (up to a limit set by the fetch). Duration does not make waves smaller.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-mcq-p2-q04",
            question: "Which describes destructive waves?",
            options: [
              "Low, gentle, with a strong swash",
              "Infrequent, with a long wavelength",
              "Tall and steep, with a weak swash and a strong backwash",
              "Waves that only occur in Singapore",
            ],
            answerIndex: 2,
            hint: "Destructive waves take material away from the beach.",
            explanation:
              "Destructive waves are tall, steep and frequent, and their strong backwash drags material out to sea. Low, gentle waves with a strong swash are constructive.",
            guideRef: "wave-types",
          },
          {
            id: "cproc-mcq-p2-q05",
            question: "Which is an example of biological weathering?",
            options: [
              "Rabbits burrowing into a cliff top",
              "Ice expanding in a crack",
              "Seawater dissolving chalk",
              "Waves throwing pebbles at a cliff",
            ],
            answerIndex: 0,
            hint: "'Bio' means life.",
            explanation:
              "Burrowing animals loosen and break up rock and soil, which is biological weathering. Ice expanding in a crack is freeze–thaw, a mechanical process.",
            guideRef: "weathering",
          },
          {
            id: "cproc-mcq-p2-q06",
            question: "Which of these is erosion rather than weathering?",
            options: [
              "Rock splitting after repeated freezing at night",
              "Tree roots widening a crack",
              "Waves removing sand from the foot of a cliff",
              "Rainwater dissolving limestone on a cliff top",
            ],
            answerIndex: 2,
            hint: "Erosion needs a moving agent that takes material away.",
            explanation:
              "Erosion involves removal by a moving agent such as waves. The other three break down rock in place, so they are weathering — even dissolving limestone by rain is chemical weathering.",
            guideRef: "weathering",
          },
          {
            id: "cproc-mcq-p2-q07",
            question: "Which rock is most affected by the erosion process of solution (corrosion)?",
            options: ["Granite", "Clay", "Sandstone", "Chalk"],
            answerIndex: 3,
            hint: "Look for a rock made of calcium carbonate.",
            explanation:
              "Chalk is made of calcium carbonate, which dissolves in weak acids in seawater. Granite is very resistant to solution; clay is soft but erodes mainly by hydraulic action and slumping.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p2-q08",
            question: "Large boulders rolled along the sea bed are moved by…",
            options: ["saltation", "traction", "suspension", "solution"],
            answerIndex: 1,
            hint: "Think of a tractor pulling something heavy.",
            explanation:
              "Traction is the rolling of the largest material along the sea bed. Saltation is bouncing, which only happens to smaller pebbles and sand.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p2-q09",
            question: "After a storm the sea near a clay cliff looks brown and cloudy. Which transport process explains this?",
            options: ["Traction", "Suspension", "Saltation", "Attrition"],
            answerIndex: 1,
            hint: "The fine particles are being held up within the water.",
            explanation:
              "Fine clay and silt are carried within the water in suspension, making it cloudy. Attrition is an erosion process, not a type of transport.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p2-q10",
            question: "What is the prevailing wind?",
            options: [
              "The most common wind direction in an area",
              "The strongest wind ever recorded in an area",
              "A wind that only blows at night",
              "The wind that blows during a storm surge",
            ],
            answerIndex: 0,
            hint: "To prevail means to be most widespread.",
            explanation:
              "The prevailing wind is the direction the wind blows from most often; it controls the direction of longshore drift. It is not necessarily the strongest wind.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p2-q11",
            question: "Rockfall is most likely on…",
            options: [
              "a gently sloping sandy beach",
              "a low, saturated clay cliff",
              "a mangrove shore",
              "a steep cliff of hard, jointed rock",
            ],
            answerIndex: 3,
            hint: "Pieces must be able to fall freely from a steep face.",
            explanation:
              "Rockfalls happen when blocks break away from steep cliffs of hard, jointed rock, often helped by freeze–thaw. Saturated clay cliffs are more likely to slump.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-mcq-p2-q12",
            question: "Why does heavy rain make mass movement more likely?",
            options: [
              "It cools the cliff so it shrinks",
              "It washes the beach away completely",
              "It adds weight and lubricates the material, reducing friction",
              "It makes the waves smaller",
            ],
            answerIndex: 2,
            hint: "Think of a wet, heavy, slippery slope.",
            explanation:
              "Water soaking into a cliff adds weight and acts as a lubricant, so material can slip more easily. Rain does not significantly shrink rock by cooling it.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-mcq-p2-q13",
            question: "Lulworth Cove in Dorset is a famous example of…",
            options: [
              "a discordant coast",
              "a spit formed by longshore drift",
              "a coral atoll",
              "a concordant coast",
            ],
            answerIndex: 3,
            hint: "The rock bands there run parallel to the coastline.",
            explanation:
              "At Lulworth Cove the rock bands run parallel to the coast; the sea breached the hard limestone and scooped out the soft rock behind. Swanage Bay, about 20 km east, is the discordant example.",
            guideRef: "geology",
          },
          {
            id: "cproc-mcq-p2-q14",
            question: "Which of these is a resistant (hard) rock?",
            options: ["Boulder clay", "Granite", "Sand", "Mud"],
            answerIndex: 1,
            hint: "It is an igneous rock used for kitchen worktops.",
            explanation:
              "Granite is a very resistant igneous rock that erodes slowly. Boulder clay, the rock of the Holderness coast, is soft and erodes very quickly.",
            guideRef: "geology",
          },
          {
            id: "cproc-mcq-p2-q15",
            question: "Which organisation became Singapore's national coastal protection agency in 2020?",
            options: ["PUB", "HDB", "LTA", "NParks"],
            answerIndex: 0,
            hint: "It is also the national water agency that runs Marina Barrage.",
            explanation:
              "PUB, the national water agency, took on coastal protection in 2020 so that coastal and inland flood protection are planned together. HDB builds public housing.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-mcq-p2-q16",
            question: "By about how much could Singapore's mean sea level rise by 2100, according to Singapore's climate projections?",
            options: ["About 1 cm", "About 10 cm", "Up to about 1 m", "About 10 m"],
            answerIndex: 2,
            hint: "It is measured in metres, not centimetres — but only just.",
            explanation:
              "Projections suggest a rise of up to about 1 m by 2100 under high emissions. Storm surges and high tides could push water levels to 4–5 m above today's mean, but mean sea level itself is not expected to rise 10 m this century.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-mcq-p2-q17",
            question: "Why is freeze–thaw weathering not found in Singapore?",
            options: [
              "Singapore has no cliffs at all",
              "Temperatures never fall to 0 °C",
              "Singapore's rocks have no cracks",
              "It rains too little in Singapore",
            ],
            answerIndex: 1,
            hint: "What must water do in the crack?",
            explanation:
              "Freeze–thaw needs water to freeze, but Singapore's temperatures rarely fall below about 21 °C. Singapore actually has heavy rainfall, which speeds up chemical weathering instead.",
            guideRef: "weathering",
          },
          {
            id: "cproc-mcq-p2-q18",
            question: "A wave-cut notch at the foot of a cliff is formed mainly by…",
            options: [
              "hydraulic action and abrasion between high and low tide",
              "longshore drift",
              "deposition by constructive waves",
              "attrition of pebbles on the beach",
            ],
            answerIndex: 0,
            hint: "Which processes attack the cliff itself?",
            explanation:
              "Hydraulic action and abrasion attack the cliff foot where waves hit it, cutting a notch. Attrition wears down the pebbles, not the cliff.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p2-q19",
            question: "Spurn Head, a 5 km spit at the mouth of the Humber, was formed by…",
            options: [
              "tectonic uplift",
              "freeze–thaw weathering",
              "land reclamation",
              "longshore drift carrying sediment from the Holderness coast",
            ],
            answerIndex: 3,
            hint: "Where does all the eroded boulder clay go?",
            explanation:
              "Longshore drift carries eroded Holderness sediment south; where the coast changes direction at the Humber it is deposited, building the spit. It is natural, not reclaimed land.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p2-q20",
            question: "Weathering is said to happen 'in situ'. What does this mean?",
            options: [
              "Under the sea",
              "Very quickly",
              "In place, without the material being moved",
              "Only in cold places",
            ],
            answerIndex: 2,
            hint: "Latin for 'in its original position'.",
            explanation:
              "In situ means in place: weathered material stays where it is until something else moves it. Weathering can happen in all climates, not just cold ones.",
            guideRef: "weathering",
          },
        ],
      },
      {
        id: "cproc-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "cproc-mcq-p3-q01",
            question: "A beach in Cornwall faces south-west across the Atlantic, with a fetch of several thousand kilometres. A beach on Singapore's south coast faces islands about 20 km away. With the same wind speed, which statement is most accurate?",
            options: [
              "Both beaches get the same size waves because the wind speed is the same",
              "Singapore gets bigger waves because the water is warmer",
              "Singapore gets bigger waves because the islands reflect the waves back",
              "Cornwall gets bigger waves because the longer fetch lets the wind transfer more energy",
            ],
            answerIndex: 3,
            hint: "Wind speed is only one of the three factors.",
            explanation:
              "A longer fetch gives the wind more distance to pass energy to the sea, so Cornwall's waves are far larger. Wind speed alone does not decide wave size, and water temperature does not significantly affect it.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-mcq-p3-q02",
            question: "A student counts 13 waves breaking per minute on a beach during a storm. What type of wave is this, and what is it most likely doing to the beach?",
            options: [
              "Constructive — building up the beach",
              "Destructive — removing sediment from the beach",
              "Constructive — removing sediment from the beach",
              "Destructive — building up the beach",
            ],
            answerIndex: 1,
            hint: "Compare 13 with 6–8 and 10–14.",
            explanation:
              "13 per minute is within the destructive range (10–14). Their strong backwash drags sediment offshore. Constructive waves (6–8 per minute) would build the beach.",
            guideRef: "wave-types",
          },
          {
            id: "cproc-mcq-p3-q03",
            question: "Singapore's land area grew from about 581 km² to about 735 km². What is the approximate percentage increase?",
            options: ["21%", "154%", "26.5%", "79%"],
            answerIndex: 2,
            hint: "% change = (new − old) ÷ old × 100.",
            explanation:
              "(735 − 581) ÷ 581 × 100 = 154 ÷ 581 × 100 ≈ 26.5%. 21% comes from dividing by the new value (735) instead of the original value.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-mcq-p3-q04",
            question: "Which erosion process is important on a chalk coast but has almost no effect on a granite coast?",
            options: ["Solution", "Hydraulic action", "Abrasion", "Attrition"],
            answerIndex: 0,
            hint: "Which process depends on what the rock is made of chemically?",
            explanation:
              "Solution dissolves calcium carbonate, which chalk is made of but granite is not. Hydraulic action and abrasion affect both rocks, though granite resists them better.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p3-q05",
            question: "Along a north-facing beach, sand is piled much higher on the EAST side of every groyne. In which direction is longshore drift moving sediment?",
            options: [
              "From west to east",
              "Straight out to sea",
              "From east to west",
              "It cannot be moving at all",
            ],
            answerIndex: 2,
            hint: "Sand builds up on the side it is coming FROM.",
            explanation:
              "Groynes trap sand on their up-drift side. Sand piled on the east side shows it is arriving from the east and moving westwards. West to east is the common reversed answer.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p3-q06",
            question: "As waves entering a bay gradually lose energy, which material is deposited first?",
            options: [
              "Dissolved minerals",
              "The finest clay particles",
              "Silt",
              "The largest, heaviest pebbles and boulders",
            ],
            answerIndex: 3,
            hint: "What does the sea struggle to carry first as it slows down?",
            explanation:
              "The heaviest material needs the most energy to move, so it is dropped first as energy falls. Fine clay stays in suspension until the water is very calm, and dissolved minerals are not deposited this way.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p3-q07",
            question: "Which combination is MOST likely to lead to rockfall?",
            options: [
              "A gentle clay slope in a hot, dry climate",
              "A steep cliff of jointed limestone with frequent winter freeze–thaw",
              "A sandy beach with constructive waves",
              "A mangrove coast with thick mud",
            ],
            answerIndex: 1,
            hint: "Rockfall needs a steep face and loosened blocks.",
            explanation:
              "Freeze–thaw prises blocks apart along joints in a steep hard-rock cliff until they fall. A gentle clay slope is more likely to slump when wet, not suffer rockfall.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-mcq-p3-q08",
            question: "If a cliff erodes at an average of 1.8 m per year, how far would it retreat in 50 years?",
            options: ["90 m", "36 m", "27.8 m", "180 m"],
            answerIndex: 0,
            hint: "Distance = rate × time.",
            explanation:
              "1.8 m × 50 years = 90 m. 27.8 comes from dividing 50 by 1.8, which gives years per metre, not distance.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p3-q09",
            question: "Why does a wide beach slow down erosion of the cliff behind it?",
            options: [
              "Waves lose much of their energy crossing the beach before reaching the cliff",
              "Sand makes the seawater less acidic",
              "Beaches make the fetch shorter",
              "Wide beaches stop the tide coming in",
            ],
            answerIndex: 0,
            hint: "Think of the beach as a shock absorber.",
            explanation:
              "Waves break and lose energy as they cross a wide beach, so less energy reaches the cliff. A beach does not change the fetch, which is measured out at sea.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p3-q10",
            question: "Which of these is NOT a reason why deposition happens?",
            options: [
              "Waves enter a sheltered bay",
              "The water becomes shallow, increasing friction",
              "Strong destructive storm waves arrive",
              "The coastline changes direction at a river mouth",
            ],
            answerIndex: 2,
            hint: "Deposition needs a LOSS of energy.",
            explanation:
              "Destructive storm waves have high energy and strong backwash, so they erode rather than deposit. Sheltered bays, shallow water and changes in coastline direction all reduce energy.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p3-q11",
            question: "Why can a vertical concrete seawall make the beach in front of it lose sand?",
            options: [
              "Concrete releases chemicals that dissolve sand",
              "It reflects wave energy back, increasing backwash that scours the beach",
              "It increases the fetch",
              "It stops longshore drift completely along the whole coast",
            ],
            answerIndex: 1,
            hint: "What happens to a wave that hits a hard vertical surface?",
            explanation:
              "Wave energy bounces off a vertical wall, strengthening the backwash, which drags sand away from the wall's base. The wall does not change the fetch, which is out at sea.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-mcq-p3-q12",
            question: "Why are sloping rock revetments often used instead of vertical walls along Singapore's coast?",
            options: [
              "They are invisible from the beach",
              "They are made of reclaimed sand",
              "They stop sea levels rising",
              "The gaps and slope break up waves and absorb their energy",
            ],
            answerIndex: 3,
            hint: "Compare a pile of boulders to a smooth wall.",
            explanation:
              "Revetments of large boulders break up and absorb wave energy rather than reflecting it, reducing scour. No defence stops sea levels rising; they only reduce its effects.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-mcq-p3-q13",
            question: "Why are most waves reaching Singapore relatively small?",
            options: [
              "The surrounding land masses keep the fetch short",
              "Singapore has no wind",
              "The sea around Singapore is too warm to form waves",
              "Coral reefs absorb all wave energy",
            ],
            answerIndex: 0,
            hint: "Look at what surrounds Singapore on a map.",
            explanation:
              "Peninsular Malaysia, Sumatra and the Riau Islands shelter Singapore, limiting fetch. Singapore does have winds — including the Northeast Monsoon, which brings rougher seas.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-mcq-p3-q14",
            question: "Why is the swash of a constructive wave stronger than its backwash?",
            options: [
              "Constructive waves are taller than destructive waves",
              "Gravity does not act on constructive waves",
              "The backwash flows uphill",
              "With long gaps between waves, much of the water soaks into the beach before it can flow back",
            ],
            answerIndex: 3,
            hint: "Constructive waves arrive only 6–8 times a minute.",
            explanation:
              "Low frequency gives each wave time to drain into the sand, so less water returns as backwash. Constructive waves are actually lower, not taller, than destructive waves.",
            guideRef: "wave-types",
          },
          {
            id: "cproc-mcq-p3-q15",
            question: "Calcium carbonate dissolved from chalk cliffs is carried away by the sea in…",
            options: ["traction", "saltation", "solution", "suspension"],
            answerIndex: 2,
            hint: "Dissolved material is invisible in the water.",
            explanation:
              "Dissolved minerals are transported in solution. Suspension carries solid particles that make the water cloudy; dissolved material does not.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p3-q16",
            question: "Slumping is most likely to happen on…",
            options: [
              "a granite cliff in a dry season",
              "a clay cliff saturated after weeks of rain",
              "a chalk cliff during freezing weather",
              "a beach with constructive waves",
            ],
            answerIndex: 1,
            hint: "Slumping needs soft, wet, heavy material.",
            explanation:
              "Saturated clay becomes heavy and slippery and moves along a curved slip surface. Chalk cliffs in freezing weather are more likely to suffer rockfall.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-mcq-p3-q17",
            question: "What is the main difference between sliding and slumping?",
            options: [
              "Sliding only happens underwater",
              "Slumping involves only single boulders",
              "Sliding is caused by people; slumping is natural",
              "Sliding moves along a flat plane; slumping moves along a curved surface",
            ],
            answerIndex: 3,
            hint: "Think about the shape of the surface the material moves on.",
            explanation:
              "Sliding moves material along a straight slip plane; slumping rotates it along a curved surface. Both can be natural or made worse by people.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-mcq-p3-q18",
            question: "Which statement best describes differential erosion?",
            options: [
              "The sea erodes faster at night than during the day",
              "Erosion happens only on discordant coasts",
              "Rocks of different resistance erode at different rates",
              "Weathering and erosion happen at exactly the same time",
            ],
            answerIndex: 2,
            hint: "'Differential' = different rates.",
            explanation:
              "Differential erosion is when softer rocks erode faster than harder rocks, producing features like headlands and bays. It happens on concordant coasts too, for example when a cove is scooped out.",
            guideRef: "geology",
          },
          {
            id: "cproc-mcq-p3-q19",
            question: "Pebbles become steadily smaller and rounder with distance along a beach away from an eroding cliff. Which process explains this?",
            options: ["Attrition", "Abrasion", "Carbonation", "Slumping"],
            answerIndex: 0,
            hint: "Which process wears down the load itself?",
            explanation:
              "Attrition makes pebbles smaller and rounder as they knock into each other while being transported. Abrasion wears down the cliff or sea bed, not mainly the pebbles.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p3-q20",
            question: "Why did erosion at Lulworth Cove stop widening the cove at its back wall?",
            options: [
              "The sea level fell",
              "It reached a band of more resistant chalk",
              "Longshore drift filled it with sand",
              "People built a seawall there in Roman times",
            ],
            answerIndex: 1,
            hint: "Look at the order of rock bands from the sea inland.",
            explanation:
              "The soft clays and sands behind the limestone eroded quickly, but the more resistant chalk at the back erodes slowly, limiting the cove's growth. It is a geological control, not a human one.",
            guideRef: "geology",
          },
        ],
      },
      {
        id: "cproc-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "cproc-mcq-p4-q01",
            question: "Beach A: fetch 200 km, wind 40 km/h for 6 hours. Beach B: fetch 4,000 km, wind 40 km/h for 6 hours. Which is likely to receive higher-energy waves?",
            options: [
              "Beach B, because the fetch is twenty times longer",
              "Beach A, because a short fetch concentrates energy",
              "Both the same, because wind speed and duration are equal",
              "Neither, because 40 km/h is too slow to make waves",
            ],
            answerIndex: 0,
            hint: "Only one variable differs between the beaches.",
            explanation:
              "With wind speed and duration equal, the longer fetch at Beach B allows more energy transfer, so waves are bigger. A short fetch limits wave growth rather than concentrating energy.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-mcq-p4-q02",
            question: "Which pair are BOTH types of weathering?",
            options: [
              "Abrasion and freeze–thaw",
              "Hydraulic action and carbonation",
              "Freeze–thaw and carbonation",
              "Attrition and salt crystallisation",
            ],
            answerIndex: 2,
            hint: "Remove any process that needs the sea to move material.",
            explanation:
              "Freeze–thaw (mechanical) and carbonation (chemical) both break rock down in place. Abrasion, hydraulic action and attrition are erosion processes, so every other option contains one.",
            guideRef: "weathering",
          },
          {
            id: "cproc-mcq-p4-q03",
            question: "Surveys of a UK beach show it is narrower and lower in February than in August. The most likely explanation is…",
            options: [
              "more tourists remove sand in winter",
              "winter storms bring destructive waves that drag sand offshore",
              "constructive waves are more common in winter",
              "longshore drift stops in winter",
            ],
            answerIndex: 1,
            hint: "When are storms most frequent in the UK?",
            explanation:
              "Winter storms produce destructive waves whose strong backwash removes sand; calmer summer constructive waves rebuild it. Constructive waves are more typical of calm summer conditions, not winter.",
            guideRef: "wave-types",
          },
          {
            id: "cproc-mcq-p4-q04",
            question: "During the Northeast Monsoon (about December–March), which part of Singapore's coast usually experiences the roughest seas?",
            options: [
              "The north-west coast facing the Strait of Johor",
              "The coast of Jurong Island",
              "The Kranji reservoir shore",
              "The east coast, such as Changi and East Coast Park",
            ],
            answerIndex: 3,
            hint: "Which coast faces the direction the wind is coming from?",
            explanation:
              "North-easterly winds blowing across the South China Sea drive larger waves onto the east-facing coast. The north-west coast is sheltered from north-easterly winds by the rest of the island and by Johor.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-mcq-p4-q05",
            question: "Puffins dig nesting burrows into the soil at the top of a sea cliff, loosening it. This is…",
            options: [
              "hydraulic action",
              "chemical weathering",
              "mass movement",
              "biological weathering",
            ],
            answerIndex: 3,
            hint: "A living thing is breaking down the material in place.",
            explanation:
              "Animals burrowing and loosening material is biological weathering. It may later lead to mass movement, but the burrowing itself is weathering.",
            guideRef: "weathering",
          },
          {
            id: "cproc-mcq-p4-q06",
            question: "The 'Long Island' concept for Singapore's east coast involves…",
            options: [
              "reclaiming about 800 hectares of new land offshore to protect the coast",
              "removing all seawalls to let mangroves grow back",
              "moving East Coast residents to Pulau Ubin",
              "building a bridge to Indonesia",
            ],
            answerIndex: 0,
            hint: "Singapore often answers coastal challenges with reclamation.",
            explanation:
              "The concept would reclaim around 800 ha of land off East Coast, raised above future sea levels, possibly with a new reservoir. It does not involve removing seawalls or moving residents.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-mcq-p4-q07",
            question: "After rock groynes were built at Mappleton (Holderness) in 1991, erosion increased at cliffs just south of the village. Why?",
            options: [
              "The groynes increased the fetch",
              "The rocks in the groynes were dissolved by solution",
              "The groynes trapped sediment moving south by longshore drift, starving beaches down-drift",
              "The groynes caused freeze–thaw weathering",
            ],
            answerIndex: 2,
            hint: "Where would the sand have gone without the groynes?",
            explanation:
              "Trapping sand at Mappleton meant less sand reached the beaches to the south, so their cliffs were less protected and eroded faster. Groynes do not affect fetch.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p4-q08",
            question: "Waves hit a cliff, forcing air into a crack; as the wave retreats the air expands violently. Repeated over years, the crack widens into a cave. Which process is this?",
            options: ["Abrasion", "Hydraulic action", "Solution", "Freeze–thaw"],
            answerIndex: 1,
            hint: "No rocks are being thrown and nothing is freezing.",
            explanation:
              "Compressing and releasing air in cracks is part of hydraulic action. Abrasion requires sediment to be thrown at the cliff; freeze–thaw requires freezing temperatures.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p4-q09",
            question: "Which change would be MOST likely to increase deposition on a beach?",
            options: [
              "An increase in storm frequency",
              "Removing all the groynes",
              "Building an offshore breakwater that shelters the beach from waves",
              "A stronger, more frequent backwash",
            ],
            answerIndex: 2,
            hint: "Deposition needs calmer, lower-energy water.",
            explanation:
              "Breakwaters make waves lose energy before they reach the beach, so sand is deposited — this is how East Coast Park's small bays work. More storms and stronger backwash increase erosion.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p4-q10",
            question: "Which order lists transport processes from the LARGEST to the SMALLEST material carried?",
            options: [
              "Suspension, saltation, traction, solution",
              "Solution, suspension, saltation, traction",
              "Saltation, traction, solution, suspension",
              "Traction, saltation, suspension, solution",
            ],
            answerIndex: 3,
            hint: "Rolled, bounced, carried, dissolved.",
            explanation:
              "Traction moves boulders, saltation pebbles and coarse sand, suspension fine particles and solution dissolved minerals. 'Solution, suspension, saltation, traction' is the correct list but in reverse order.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-mcq-p4-q11",
            question: "In which conditions would freeze–thaw weathering be MOST effective?",
            options: [
              "A UK cliff in winter where temperatures rise above and fall below 0 °C most days",
              "An Antarctic cliff where temperatures stay below −20 °C all year",
              "A tropical cliff at 30 °C",
              "A desert cliff with no rainfall",
            ],
            answerIndex: 0,
            hint: "It needs repeated cycles, not just cold.",
            explanation:
              "Freeze–thaw depends on many cycles of freezing and thawing plus water. Permanently frozen Antarctic rock rarely thaws, so cycles are few — the tempting 'coldest is best' answer is wrong.",
            guideRef: "weathering",
          },
          {
            id: "cproc-mcq-p4-q12",
            question: "A house is 120 m from a cliff edge that is retreating 2.4 m per year. Roughly how long before the cliff edge reaches the house?",
            options: ["20 years", "50 years", "288 years", "122 years"],
            answerIndex: 1,
            hint: "Time = distance ÷ rate.",
            explanation:
              "120 ÷ 2.4 = 50 years. 288 comes from multiplying 120 by 2.4 instead of dividing.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p4-q13",
            question: "Which statement about the Holderness coast is correct?",
            options: [
              "It is made of hard granite and barely erodes",
              "It is made of soft boulder clay and erodes about 1.8 m per year on average",
              "It is protected by seawalls along its entire length",
              "It is a concordant coast of chalk and limestone",
            ],
            answerIndex: 1,
            hint: "It is one of Europe's fastest-eroding coasts.",
            explanation:
              "Holderness is mostly soft boulder clay left by glaciers, eroding about 1.8 m a year. Only short stretches (e.g. Mappleton, Hornsea, Withernsea) are defended, not the whole coast.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p4-q14",
            question: "On a concordant coast, what usually happens after the sea breaks through the outer band of hard rock?",
            options: [
              "The coast becomes a series of headlands and bays",
              "Erosion stops completely",
              "The softer rock behind is eroded rapidly to form a cove",
              "A spit forms immediately",
            ],
            answerIndex: 2,
            hint: "Think of Lulworth Cove.",
            explanation:
              "Once the hard outer band is breached, waves scoop out the softer rock behind, forming a rounded cove. A series of headlands and bays is the typical result of a discordant coast.",
            guideRef: "geology",
          },
          {
            id: "cproc-mcq-p4-q15",
            question: "Abrasion is likely to be MOST powerful when…",
            options: [
              "constructive waves arrive on a calm day",
              "the sea is carrying no sediment",
              "the tide is at its lowest point",
              "large storm waves carry lots of pebbles and boulders",
            ],
            answerIndex: 3,
            hint: "Abrasion needs both energy and 'ammunition'.",
            explanation:
              "Abrasion relies on waves throwing material at the cliff, so high-energy waves with plenty of sediment do the most damage. With no sediment there is no abrasion, only hydraulic action.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-mcq-p4-q16",
            question: "How do mangroves, such as those at Sungei Buloh, help protect the coast?",
            options: [
              "Their roots slow the water, absorb wave energy and trap sediment",
              "They increase the fetch so waves break further out",
              "They dissolve rocks to make sand",
              "They raise the sea level around them",
            ],
            answerIndex: 0,
            hint: "Picture a thick tangle of roots in the water.",
            explanation:
              "Mangrove roots create friction that slows waves and currents, causing mud to be deposited. They do not change fetch, which is the distance of open water out at sea.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-mcq-p4-q17",
            question: "Why is the backwash of destructive waves so strong?",
            options: [
              "Destructive waves only occur at low tide",
              "The wind blows the water back out to sea",
              "Destructive waves have a long wavelength",
              "Waves arrive so often that the beach is saturated and water cannot soak in, so it drains back powerfully",
            ],
            answerIndex: 3,
            hint: "10–14 waves a minute leaves little time between waves.",
            explanation:
              "High frequency means the beach is already saturated, so most water returns as backwash, and it also interferes with the next wave's swash. Destructive waves have a SHORT wavelength, not a long one.",
            guideRef: "wave-types",
          },
          {
            id: "cproc-mcq-p4-q18",
            question: "Which human action is most likely to TRIGGER mass movement on a clay cliff?",
            options: [
              "Planting grass on the cliff top",
              "Building heavy hotels and leaking drains on the cliff top",
              "Building groynes on the beach in front",
              "Banning cars from the cliff-top road",
            ],
            answerIndex: 1,
            hint: "Think about weight and water.",
            explanation:
              "Buildings add weight and leaking drains add water, both reducing the cliff's stability — factors at Holbeck Hall, Scarborough. Planting vegetation usually stabilises slopes rather than triggering movement.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-mcq-p4-q19",
            question: "How does weathering of a cliff make erosion by the sea faster?",
            options: [
              "Weathering makes rock harder",
              "Weathering increases the fetch",
              "Weathered rock is weaker and broken up, so waves can remove it more easily",
              "Weathering stops longshore drift",
            ],
            answerIndex: 2,
            hint: "Weathering breaks rock; erosion carries it away.",
            explanation:
              "Weathering weakens and loosens rock in place, so waves need less energy to erode and remove it. Weathering never makes rock harder.",
            guideRef: "weathering",
          },
          {
            id: "cproc-mcq-p4-q20",
            question: "When rising sea levels combine with high tides and storm surges, how high could water levels in Singapore reach, according to official estimates?",
            options: [
              "About 4–5 m above today's mean sea level",
              "About 0.1 m above today's mean sea level",
              "About 20 m above today's mean sea level",
              "No higher than today",
            ],
            answerIndex: 0,
            hint: "It is several times higher than the mean sea-level rise alone.",
            explanation:
              "Official estimates suggest extreme sea levels could reach 4–5 m above today's mean sea level by 2100 when surges and high tides combine with mean sea-level rise of up to about 1 m. 20 m is far beyond any projection for this century.",
            guideRef: "singapore-coast",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "cproc-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "cproc-qa-p1-q01",
            question: "Define the term 'fetch' and state how it affects waves.",
            marks: 2,
            hint: "One mark for the definition, one for its effect.",
            modelAnswer:
              "Fetch is the distance of open water over which the wind blows. The longer the fetch, the bigger and more powerful the waves, because the wind has more distance to transfer energy to the sea.",
            markScheme: [
              { point: "Distance of open water the wind blows over", keywords: ["distance", "open water", "open sea", "over which the wind"] },
              { point: "Longer fetch gives bigger/more powerful waves", keywords: ["longer", "bigger", "larger", "more powerful", "more energy", "stronger"] },
            ],
            commonError: "Defining fetch as the distance a wave travels up the beach.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-qa-p1-q02",
            question: "State three factors that affect the size and energy of a wave.",
            marks: 3,
            hint: "All three are about the wind.",
            modelAnswer:
              "Wave size depends on (1) the wind speed, (2) the duration of the wind — how long it has been blowing — and (3) the fetch, the distance of open water the wind blows over.",
            markScheme: [
              { point: "Wind speed / strength", keywords: ["wind speed", "speed", "strength of the wind", "strong wind"] },
              { point: "Wind duration / how long it blows", keywords: ["duration", "how long", "length of time", "time the wind"] },
              { point: "Fetch", keywords: ["fetch", "distance of open", "distance over"] },
            ],
            commonError: "Writing 'wind' once and counting it as three factors, or listing the tide.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-qa-p1-q03",
            question: "Describe the process of freeze–thaw weathering.",
            marks: 3,
            hint: "Water in, freeze, expand, repeat.",
            modelAnswer:
              "Rainwater seeps into cracks in the rock. When temperatures fall below 0 °C the water freezes and expands by about 9%, putting pressure on the rock and widening the crack. When the ice thaws, more water enters, and after many cycles pieces of rock break off.",
            markScheme: [
              { point: "Water enters cracks in rock", keywords: ["crack", "seeps", "joint", "enters"] },
              { point: "Water freezes and expands (about 9%), exerting pressure", keywords: ["expand", "9%", "pressure", "ice"] },
              { point: "Repeated cycles widen crack until rock breaks off", keywords: ["repeat", "cycle", "break off", "breaks off", "over and over", "widen"] },
            ],
            commonError: "Forgetting that it needs repeated cycles of freezing AND thawing.",
            guideRef: "weathering",
          },
          {
            id: "cproc-qa-p1-q04",
            question: "Explain how hydraulic action erodes a cliff.",
            marks: 2,
            hint: "Mention the water itself and the air in cracks.",
            modelAnswer:
              "Hydraulic action is the sheer force of waves hitting the cliff. Water forces air into cracks and compresses it; when the wave retreats the air expands explosively, weakening the rock and widening the cracks until pieces break off.",
            markScheme: [
              { point: "Force of water hitting the cliff", keywords: ["force", "power of the water", "pressure of water", "smash"] },
              { point: "Air compressed in cracks, expands and widens them", keywords: ["air", "compress", "crack", "expand"] },
            ],
            commonError: "Describing rocks being thrown at the cliff, which is abrasion.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-qa-p1-q05",
            question: "Describe three characteristics of constructive waves.",
            marks: 3,
            hint: "Think about height, frequency and swash/backwash.",
            modelAnswer:
              "Constructive waves are low in height with a long wavelength. They have a low frequency of about 6–8 waves per minute. Their swash is stronger than their backwash, so they carry material up the beach and deposit it, building the beach up.",
            markScheme: [
              { point: "Low height / long wavelength", keywords: ["low height", "low in height", "long wavelength", "gentle", "flat"] },
              { point: "Low frequency (6–8 per minute)", keywords: ["6-8", "6–8", "low frequency", "infrequent", "per minute"] },
              { point: "Strong swash, weak backwash / build beaches", keywords: ["strong swash", "weak backwash", "swash is stronger", "build", "deposit"] },
            ],
            commonError: "Stating features of destructive waves by mistake (e.g. 'strong backwash').",
            guideRef: "wave-types",
          },
          {
            id: "cproc-qa-p1-q06",
            question: "Name and describe the four ways in which the sea transports material.",
            marks: 4,
            hint: "Roll, bounce, carry, dissolve.",
            modelAnswer:
              "Traction: large boulders are rolled along the sea bed. Saltation: smaller pebbles and sand are bounced along the sea bed. Suspension: fine particles such as silt and clay are carried within the water. Solution: minerals are dissolved in the water and carried along.",
            markScheme: [
              { point: "Traction — rolling large material", keywords: ["traction", "roll", "rolled", "rolling"] },
              { point: "Saltation — bouncing smaller material", keywords: ["saltation", "bounc", "hop"] },
              { point: "Suspension — carried in the water", keywords: ["suspension", "suspended", "carried in", "float"] },
              { point: "Solution — dissolved", keywords: ["solution", "dissolv", "invisible", "chemically carried"] },
            ],
            commonError: "Confusing traction and saltation, or listing erosion processes such as attrition.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-qa-p1-q07",
            question: "Explain why deposition often takes place in sheltered bays.",
            marks: 2,
            hint: "What happens to wave energy in a bay?",
            modelAnswer:
              "In a sheltered bay waves spread out and lose energy because they are protected by headlands and the water is shallower. With less energy, the waves can no longer carry their load, so they deposit sand and shingle, forming a beach.",
            markScheme: [
              { point: "Waves lose energy / are weaker in a bay", keywords: ["lose energy", "less energy", "loses energy", "weaker", "calm", "spread out"] },
              { point: "So they cannot carry their load and drop it", keywords: ["drop", "deposit", "cannot carry", "can't carry", "load"] },
            ],
            commonError: "Saying deposition happens because the bay is 'calm' without linking it to losing energy and dropping the load.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-qa-p1-q08",
            question: "Explain how carbonation weathers chalk cliffs.",
            marks: 3,
            hint: "Rain + carbon dioxide → ? Then what reacts?",
            modelAnswer:
              "Rainwater absorbs carbon dioxide from the air, forming a weak carbonic acid. Chalk is made of calcium carbonate, which reacts with the acid. The rock slowly dissolves, widening joints and weakening the cliff so it is more easily eroded.",
            markScheme: [
              { point: "Rain absorbs CO2 to form weak carbonic acid", keywords: ["carbonic acid", "carbon dioxide", "co2", "weak acid", "acid"] },
              { point: "Chalk contains calcium carbonate which reacts", keywords: ["calcium carbonate", "react", "chalk is made"] },
              { point: "Rock dissolves / weakens", keywords: ["dissolv", "weaken", "widen", "breaks down"] },
            ],
            commonError: "Describing seawater erosion (solution by waves) rather than rainwater weathering.",
            guideRef: "weathering",
          },
          {
            id: "cproc-qa-p1-q09",
            question: "Describe what happens in a rockfall and explain one cause.",
            marks: 3,
            hint: "Where does the rock come from, where does it go, and what loosened it?",
            modelAnswer:
              "In a rockfall, fragments of rock break away from a steep cliff face and fall to the bottom, collecting as scree. One cause is freeze–thaw weathering: water in cracks freezes and expands, gradually loosening blocks until gravity pulls them down. Undercutting by waves can also remove support.",
            markScheme: [
              { point: "Rock fragments break from steep cliff", keywords: ["break away", "breaks off", "fragments", "steep", "detach"] },
              { point: "Fall to the base under gravity / form scree", keywords: ["fall", "gravity", "scree", "bottom", "base"] },
              { point: "Valid cause explained (freeze–thaw / undercutting)", keywords: ["freeze", "undercut", "notch", "loosen", "weathering"] },
            ],
            commonError: "Describing a slump (curved movement of wet clay) instead of a rockfall.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-qa-p1-q10",
            question: "Explain the difference between abrasion and attrition.",
            marks: 2,
            hint: "What is being worn away in each?",
            modelAnswer:
              "Abrasion is when waves hurl sand and pebbles against the cliff, wearing the cliff away like sandpaper. Attrition is when the rocks carried by the waves knock into each other, becoming smaller and rounder — it wears down the load, not the cliff.",
            markScheme: [
              { point: "Abrasion: material thrown against cliff", keywords: ["thrown", "hurl", "against the cliff", "sandpaper", "scrap"] },
              { point: "Attrition: rocks hit each other, become smaller/rounder", keywords: ["each other", "smaller", "rounder", "smoother", "collide"] },
            ],
            commonError: "Swapping the two definitions.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-qa-p1-q11",
            question: "Explain one way in which biological weathering affects coastal cliffs.",
            marks: 2,
            hint: "Plants or animals — and what they do to the rock.",
            modelAnswer:
              "Plant roots grow into cracks in the cliff. As the roots grow thicker, they push the crack apart, breaking the rock and making the cliff weaker.",
            markScheme: [
              { point: "Names a living agent (roots / burrowing animals)", keywords: ["root", "plant", "burrow", "rabbit", "animal", "puffin"] },
              { point: "Explains how it breaks/loosens rock", keywords: ["push", "widen", "loosen", "break", "apart", "force"] },
            ],
            commonError: "Naming the agent without explaining how the rock is broken.",
            guideRef: "weathering",
          },
          {
            id: "cproc-qa-p1-q12",
            question: "A farmhouse on the Holderness coast is 54 m from the cliff edge. The cliff retreats at about 1.8 m per year. Calculate how many years it will be before the cliff edge reaches the farmhouse. Show your working.",
            marks: 2,
            hint: "Time = distance ÷ rate.",
            modelAnswer: "54 ÷ 1.8 = 30. The cliff edge will reach the farmhouse in about 30 years.",
            markScheme: [
              { point: "Correct method: distance divided by rate", keywords: ["54 ÷ 1.8", "54/1.8", "54 / 1.8", "divide", "divided by"] },
              { point: "Correct answer: 30 years", keywords: ["30 years", "30 yrs", "= 30", "thirty"] },
            ],
            commonError: "Multiplying 54 × 1.8 (97.2) instead of dividing.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-qa-p1-q13",
            question: "Describe what is meant by a discordant coast, and name the landforms it produces.",
            marks: 3,
            hint: "Direction of rock bands, different rates of erosion, resulting landforms.",
            modelAnswer:
              "A discordant coast has alternating bands of hard and soft rock running at right angles (perpendicular) to the coastline. The soft rock erodes faster than the hard rock (differential erosion), so it forms bays, while the resistant rock sticks out as headlands — for example Swanage Bay in Dorset.",
            markScheme: [
              { point: "Bands of rock at right angles to the coast", keywords: ["right angle", "perpendicular", "90", "at angles to"] },
              { point: "Soft rock erodes faster than hard (differential erosion)", keywords: ["soft rock erodes", "faster", "differential", "different rates", "less resistant"] },
              { point: "Forms headlands and bays", keywords: ["headland", "bay", "inlet", "jut out"] },
            ],
            commonError: "Saying the rock bands are parallel to the coast (that is concordant).",
            guideRef: "geology",
          },
          {
            id: "cproc-qa-p1-q14",
            question: "Explain how waves form and why they break when they reach the shore.",
            marks: 4,
            hint: "Wind, friction, energy, then shallow water.",
            modelAnswer:
              "Waves form when wind blows over the sea surface. Friction between the wind and the water transfers energy, creating ripples that grow into waves. As a wave approaches the shore the water becomes shallower, so friction with the sea bed slows the bottom of the wave. The top keeps moving faster, the wave becomes steeper and topples over, so it breaks.",
            markScheme: [
              { point: "Wind blows over the sea surface", keywords: ["wind", "blows over", "air moving", "breeze"] },
              { point: "Friction transfers energy to the water", keywords: ["friction", "energy", "transfer", "drag"] },
              { point: "Shallow water / sea bed slows base of wave", keywords: ["shallow", "sea bed", "seabed", "base slows", "bottom slows"] },
              { point: "Top moves faster, wave topples / breaks", keywords: ["topple", "top", "overtake", "steeper", "falls over", "breaks"] },
            ],
            commonError: "Saying waves break because they 'hit the beach' without explaining the friction with the sea bed.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-qa-p1-q15",
            question: "Describe how the coastline at East Coast Park in Singapore is protected from erosion.",
            marks: 4,
            hint: "Think about what you would see on the shore and out at sea.",
            modelAnswer:
              "East Coast Park is built on reclaimed land, so its edge is protected by rock revetments — sloping banks of large boulders that absorb wave energy. Offshore breakwaters and short headland breakwaters make waves lose energy before reaching the shore, creating small bays where sand is deposited and the beach stays in place. Seawalls protect some stretches, and beaches can be topped up with sand. Across Singapore more than 70% of the coastline is protected in similar ways.",
            markScheme: [
              { point: "Rock revetments / boulders absorb wave energy", keywords: ["revetment", "boulder", "rock armour", "rock slope", "absorb"] },
              { point: "Breakwaters reduce wave energy offshore", keywords: ["breakwater", "offshore", "reduce wave"] },
              { point: "Small bays / sand deposited, keeping the beach", keywords: ["bays", "deposit", "trap sand", "keep the beach", "beach stays"] },
              { point: "Seawalls / beach top-ups / data (over 70%)", keywords: ["seawall", "sea wall", "70%", "nourish", "top up", "topped up"] },
            ],
            commonError: "Writing about groynes in general terms without describing what is actually used at East Coast Park.",
            guideRef: "singapore-coast",
          },
        ],
      },
      {
        id: "cproc-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "cproc-qa-p2-q01",
            question: "Explain the difference between swash and backwash.",
            marks: 2,
            hint: "Up the beach vs down the beach — and what drives each.",
            modelAnswer:
              "Swash is the water that rushes up the beach after a wave breaks, pushed by the wave's energy. Backwash is the water that drains back down the beach towards the sea, pulled by gravity.",
            markScheme: [
              { point: "Swash moves up the beach after a wave breaks", keywords: ["up the beach", "rushes up", "moves up", "forward"] },
              { point: "Backwash returns down the beach (gravity)", keywords: ["back down", "down the beach", "drains", "gravity", "towards the sea"] },
            ],
            commonError: "Reversing the two terms.",
            guideRef: "wave-types",
          },
          {
            id: "cproc-qa-p2-q02",
            question: "Explain why destructive waves erode beaches.",
            marks: 3,
            hint: "Think about frequency, backwash and where the sediment goes.",
            modelAnswer:
              "Destructive waves are tall, steep and frequent (about 10–14 per minute). They plunge down onto the beach, so the swash is weak but the backwash is strong. Because waves arrive so frequently, the backwash meets the next incoming wave and drags sand and shingle out to sea, so the beach loses material.",
            markScheme: [
              { point: "High frequency / tall and steep", keywords: ["frequen", "10-14", "10–14", "tall", "steep", "plunge"] },
              { point: "Backwash stronger than swash", keywords: ["strong backwash", "backwash is strong", "backwash stronger", "weak swash", "swash is weak"] },
              { point: "Sediment dragged offshore / removed", keywords: ["drag", "offshore", "out to sea", "remov", "carried out"] },
            ],
            commonError: "Saying destructive waves erode because they are 'strong' without mentioning backwash.",
            guideRef: "wave-types",
          },
          {
            id: "cproc-qa-p2-q03",
            question: "Describe how salt crystallisation weathers rock on the coast.",
            marks: 3,
            hint: "Where does the salt come from, and what happens when water evaporates?",
            modelAnswer:
              "Sea spray containing salt soaks into pores and cracks in the rock. When the water evaporates, salt crystals are left behind and grow. The growing crystals exert pressure on the rock, which eventually breaks apart. It is most effective on porous rocks like sandstone in warm, sunny conditions.",
            markScheme: [
              { point: "Salty seawater/spray enters pores or cracks", keywords: ["spray", "seawater", "salt water", "pores", "crack"] },
              { point: "Water evaporates leaving salt crystals that grow", keywords: ["evaporat", "crystal", "grow"] },
              { point: "Crystals exert pressure and break rock", keywords: ["pressure", "break", "push", "apart", "flake"] },
            ],
            commonError: "Describing the salt dissolving the rock (chemical) — salt crystallisation is mechanical.",
            guideRef: "weathering",
          },
          {
            id: "cproc-qa-p2-q04",
            question: "Explain why chemical weathering is especially rapid in Singapore.",
            marks: 3,
            hint: "Think about Singapore's climate and how chemical reactions work.",
            modelAnswer:
              "Singapore has a hot, wet equatorial climate, with temperatures around 25–32 °C all year and over 2,000 mm of rain. Chemical reactions happen faster at higher temperatures, and there is plenty of water to carry acids into the rock. Decaying vegetation also adds organic acids, so rocks such as Bukit Timah granite are weathered many metres deep.",
            markScheme: [
              { point: "High temperatures all year", keywords: ["hot", "high temperature", "warm", "30", "27"] },
              { point: "Heavy rainfall / lots of water", keywords: ["rain", "wet", "water", "humid", "2,000", "2000"] },
              { point: "Reactions faster in heat / acids from vegetation", keywords: ["faster", "speed", "quicker", "organic acid", "react"] },
            ],
            commonError: "Mentioning freeze–thaw, which cannot happen in Singapore.",
            guideRef: "weathering",
          },
          {
            id: "cproc-qa-p2-q05",
            question: "Describe the four processes of marine erosion.",
            marks: 4,
            hint: "Hungry Alligators Always Snap.",
            modelAnswer:
              "Hydraulic action is the force of the water and air compressed in cracks. Abrasion is when waves throw sand and pebbles against the cliff, wearing it away. Attrition is when rocks carried by the sea hit each other, becoming smaller and rounder. Solution (corrosion) is when weak acids in seawater dissolve rocks such as chalk and limestone.",
            markScheme: [
              { point: "Hydraulic action — force of water / air in cracks", keywords: ["hydraulic", "force of", "air in", "compress"] },
              { point: "Abrasion — material thrown at cliff", keywords: ["abrasion", "corrasion", "thrown", "hurl", "sandpaper"] },
              { point: "Attrition — rocks hit each other", keywords: ["attrition", "each other", "smaller and round", "rounder"] },
              { point: "Solution — dissolving rock", keywords: ["solution", "corrosion", "dissolv"] },
            ],
            commonError: "Naming the processes without describing them, or mixing in transport processes like saltation.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-qa-p2-q06",
            question: "Explain why a long period of heavy rain can trigger slumping on a clay cliff.",
            marks: 4,
            hint: "Weight, lubrication, curved surface.",
            modelAnswer:
              "Clay absorbs rainwater and becomes saturated. The water adds weight to the cliff and acts as a lubricant, reducing friction between particles. Eventually the cliff becomes unstable and a mass of material moves downhill under gravity along a curved slip surface, rotating as it goes. If waves have also undercut the base, the cliff fails more easily.",
            markScheme: [
              { point: "Clay becomes saturated with water", keywords: ["saturat", "absorb", "soak", "waterlogged"] },
              { point: "Water adds weight", keywords: ["weight", "heavier", "heavy"] },
              { point: "Water lubricates / reduces friction", keywords: ["lubric", "friction", "slippery", "slide"] },
              { point: "Moves down a curved slip surface under gravity", keywords: ["curved", "rotat", "slip surface", "gravity", "slump"] },
            ],
            commonError: "Saying the rain 'washes the cliff away' — that is erosion, not mass movement.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-qa-p2-q07",
            question: "Explain how a groyne affects the movement of sediment along a beach.",
            marks: 3,
            hint: "What does a groyne block, and what happens on each side?",
            modelAnswer:
              "Longshore drift moves sediment along the beach in the direction of the prevailing wind. A groyne is a barrier built at right angles to the beach, so it traps the sediment, which builds up on the up-drift side and makes the beach wider there. However, less sediment reaches the down-drift side, so beaches further along become narrower and can erode faster.",
            markScheme: [
              { point: "Longshore drift moves sediment along the beach", keywords: ["longshore drift", "along the beach", "along the coast", "prevailing"] },
              { point: "Groyne traps sediment on up-drift side", keywords: ["trap", "build up", "builds up", "up-drift", "updrift", "one side"] },
              { point: "Down-drift beaches starved / erode", keywords: ["starv", "down-drift", "downdrift", "other side", "narrower", "less sediment"] },
            ],
            commonError: "Saying groynes stop waves from reaching the beach.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-qa-p2-q08",
            question: "Approximate average rates of cliff retreat: Land's End granite (Cornwall): about 0.001 m per year; Dorset chalk: about 0.3 m per year; Holderness boulder clay: about 1.8 m per year. Describe and explain the pattern shown by these data.",
            marks: 4,
            hint: "Describe with numbers first, then explain using rock resistance.",
            modelAnswer:
              "The softer the rock, the faster the cliff retreats. Holderness boulder clay retreats about 1.8 m per year, which is six times faster than Dorset chalk (0.3 m) and about 1,800 times faster than Land's End granite (0.001 m). This is because granite is a very hard, resistant igneous rock with few weaknesses, so hydraulic action and abrasion have little effect. Chalk is fairly resistant but is weakened by solution and has joints. Boulder clay is soft and unconsolidated, so it is easily eroded and also slumps when wet.",
            markScheme: [
              { point: "Describes pattern: softer rock retreats faster", keywords: ["softer", "faster", "fastest", "slowest", "pattern"] },
              { point: "Uses data / comparison with figures", keywords: ["1.8", "0.3", "0.001", "six times", "1,800", "1800"] },
              { point: "Explains granite is hard/resistant", keywords: ["granite is hard", "resistant", "hard rock", "igneous"] },
              { point: "Explains clay is soft / easily eroded / slumps", keywords: ["clay is soft", "soft clay", "easily eroded", "slump", "unconsolidated"] },
            ],
            commonError: "Describing the data without explaining it, or explaining without quoting any figures.",
            guideRef: "geology",
          },
          {
            id: "cproc-qa-p2-q09",
            question: "Explain how a cove forms on a concordant coast. You may refer to Lulworth Cove.",
            marks: 4,
            hint: "Bands parallel → hard outer layer → breach → soft rock eroded → stopped by hard rock behind.",
            modelAnswer:
              "On a concordant coast the rock bands run parallel to the coastline. At Lulworth Cove a narrow band of hard Portland limestone faces the sea and protects softer clays and sands behind it. The sea exploited a weakness and broke through the limestone. Waves then rapidly eroded the soft rock behind by hydraulic action and abrasion, spreading out in a circular shape. Erosion slowed when the waves reached the more resistant chalk at the back, leaving a round cove with a narrow entrance.",
            markScheme: [
              { point: "Rock bands parallel to the coast", keywords: ["parallel", "concordant", "same direction as the coast"] },
              { point: "Hard outer band breached (along a weakness)", keywords: ["breach", "break through", "broke through", "weakness", "gap"] },
              { point: "Soft rock behind eroded quickly", keywords: ["soft", "clay", "erode quickly", "eroded rapidly", "scoop"] },
              { point: "Erosion slowed by resistant rock at back / round shape", keywords: ["chalk", "at the back", "round", "circular", "resistant"] },
            ],
            commonError: "Describing headlands and bays (discordant) instead of a cove.",
            guideRef: "geology",
          },
          {
            id: "cproc-qa-p2-q10",
            question: "Explain how marine erosion and mass movement work together to make cliffs retreat.",
            marks: 4,
            hint: "Think of a cycle: notch → collapse → removal → notch again.",
            modelAnswer:
              "Waves erode the base of the cliff by hydraulic action and abrasion, forming a wave-cut notch. This undercuts the cliff, removing support, so the rock above becomes unstable. Mass movement such as a rockfall or slump then brings material down to the foot of the cliff under gravity. The sea erodes and transports this debris away, exposing the cliff foot again, and the cycle repeats, so the cliff retreats inland.",
            markScheme: [
              { point: "Waves erode base / wave-cut notch", keywords: ["notch", "base", "foot", "undercut"] },
              { point: "Cliff above unstable / loses support", keywords: ["unstable", "support", "overhang", "weaken"] },
              { point: "Mass movement brings material down under gravity", keywords: ["collapse", "rockfall", "slump", "mass movement", "gravity"] },
              { point: "Sea removes debris and cycle repeats", keywords: ["remov", "transport", "repeat", "cycle", "again", "carried away"] },
            ],
            commonError: "Treating erosion and mass movement as separate, unconnected processes.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-qa-p2-q11",
            question: "Give two reasons why reclaimed land along Singapore's coast needs protection.",
            marks: 2,
            hint: "Think about what it is made of and how high it is.",
            modelAnswer:
              "Reclaimed land is made of loose sand, which is easily eroded by waves and backwash. It is also low-lying, so rising sea levels and storm surges could flood it.",
            markScheme: [
              { point: "Loose sand is easily eroded", keywords: ["loose", "sand", "easily erod", "unconsolidated"] },
              { point: "Low-lying / threatened by sea-level rise or flooding", keywords: ["low-lying", "sea level", "sea-level", "flood", "storm surge"] },
            ],
            commonError: "Giving two versions of the same reason.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-qa-p2-q12",
            question: "A 30 km stretch of coastline has 22 km protected by seawalls and revetments. Calculate the percentage of this coastline that is protected. Show your working and give your answer to one decimal place.",
            marks: 2,
            hint: "Part ÷ whole × 100.",
            modelAnswer: "22 ÷ 30 × 100 = 73.3%. About 73.3% of this coastline is protected — similar to the national figure of over 70%.",
            markScheme: [
              { point: "Correct method (22 ÷ 30 × 100)", keywords: ["22 ÷ 30", "22/30", "22 / 30", "× 100", "x 100"] },
              { point: "Correct answer 73.3%", keywords: ["73.3", "73.33", "73%", "73 %"] },
            ],
            commonError: "Dividing 30 by 22, giving 136%.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-qa-p2-q13",
            question: "Explain why waves lose energy as they enter a bay.",
            marks: 2,
            hint: "Think about how waves bend and the depth of the water.",
            modelAnswer:
              "As waves enter a bay they bend (refract) and spread out over a wider area, so their energy is spread more thinly. The water in bays is also shallower, so friction with the sea bed slows the waves, reducing their energy.",
            markScheme: [
              { point: "Waves spread out / refract", keywords: ["spread", "refract", "bend", "wider area"] },
              { point: "Shallow water / friction with sea bed", keywords: ["shallow", "friction", "sea bed", "seabed", "sheltered"] },
            ],
            commonError: "Simply saying 'bays are calm' without a reason.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-qa-p2-q14",
            question: "Explain why Singapore's east coast experiences rougher seas during the Northeast Monsoon.",
            marks: 3,
            hint: "Wind direction, fetch and which way the coast faces.",
            modelAnswer:
              "During the Northeast Monsoon, from about December to March, steady winds blow from the north-east for weeks at a time. They blow across the South China Sea, which gives a much longer fetch than at other times of year. The east coast faces into these winds, so it receives larger, more powerful waves that can erode beaches.",
            markScheme: [
              { point: "Steady north-east winds for a long duration", keywords: ["from the north-east", "north-easterly", "northeasterly", "steady", "duration", "weeks"] },
              { point: "Longer fetch across South China Sea", keywords: ["fetch", "south china sea", "open water", "longer distance"] },
              { point: "East coast faces the wind so gets bigger waves", keywords: ["faces", "exposed", "bigger waves", "larger waves", "more powerful"] },
            ],
            commonError: "Confusing the monsoon with tropical cyclones; Singapore is too close to the equator for typhoons to hit.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-qa-p2-q15",
            question: "'Seawalls are the best way to protect Singapore's coastline.' To what extent do you agree? Use evidence in your answer.",
            marks: 6,
            hint: "Give arguments for, arguments against, Singapore evidence, and a justified conclusion.",
            modelAnswer:
              "I partly agree. Seawalls and rock revetments give reliable protection for valuable, low-lying reclaimed land: more than 70% of Singapore's coastline is already protected this way, guarding places such as Marina Bay, Changi Airport and East Coast Park. They take up little space, which matters in a small, crowded country. However, they are expensive — coastal protection may cost about S$100 billion over 100 years — and they will need raising as sea level rises by up to about 1 m by 2100. Vertical walls can also reflect wave energy, scouring the beach in front, and they provide little habitat. Nature-based options such as mangroves at Sungei Buloh absorb wave energy and trap sediment while supporting wildlife, but they need space and may not keep pace with rapid sea-level rise. Overall, seawalls are essential for the most valuable areas, but a mix of hard defences, breakwaters and nature-based solutions is the best approach.",
            markScheme: [
              { point: "Advantage of seawalls: reliable protection of valuable land", keywords: ["reliable", "valuable", "airport", "marina", "changi"] },
              { point: "Evidence: over 70% coastline already protected / space-saving", keywords: ["70%", "little space", "land-short", "space"] },
              { point: "Disadvantage: cost (S$100 billion) / need raising", keywords: ["cost", "expensive", "100 billion", "raise", "maintenance"] },
              { point: "Disadvantage: reflect energy, scour beach, little habitat", keywords: ["reflect", "scour", "habitat", "beach loss", "wildlife"] },
              { point: "Alternative: mangroves / breakwaters / nature-based", keywords: ["mangrove", "nature", "breakwater", "soft engineering", "hybrid"] },
              { point: "Justified conclusion", keywords: ["overall", "conclusion", "to a large extent", "partly agree", "in conclusion"] },
            ],
            commonError: "Arguing only one side, or ending without a clear, justified judgement.",
            guideRef: "singapore-coast",
          },
        ],
      },
      {
        id: "cproc-qa-p3",
        title: "Written Paper 3",
        questions: [
          {
            id: "cproc-qa-p3-q01",
            question: "Define 'mass movement' and name one type found on coasts.",
            marks: 2,
            hint: "Which force is responsible?",
            modelAnswer:
              "Mass movement is the downhill movement of rock, soil or mud under the influence of gravity. One coastal type is slumping (rotational slip); others are rockfall and sliding.",
            markScheme: [
              { point: "Downhill movement of material under gravity", keywords: ["downhill", "down slope", "downslope", "gravity"] },
              { point: "Names a type (rockfall, slumping, sliding)", keywords: ["rockfall", "rock fall", "slump", "slide", "sliding", "landslide"] },
            ],
            commonError: "Confusing mass movement with longshore drift (movement of sediment along the beach).",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-qa-p3-q02",
            question: "Compare rockfall and slumping.",
            marks: 4,
            hint: "Compare rock type, how the material moves, the trigger and the result.",
            modelAnswer:
              "Rockfall happens on steep cliffs of hard, jointed rock, whereas slumping happens on cliffs of soft rock such as clay. In a rockfall, fragments break off and fall freely, while in a slump a large mass moves down a curved slip surface and rotates. Rockfalls are often triggered by freeze–thaw or undercutting, whereas slumps are usually triggered by heavy rain saturating the clay. Rockfalls leave scree at the cliff foot, whereas slumps leave a stepped, terraced cliff.",
            markScheme: [
              { point: "Rock type: hard jointed rock vs soft clay", keywords: ["hard", "jointed", "clay", "soft"] },
              { point: "Movement: free fall vs curved slip surface/rotation", keywords: ["fall", "curved", "rotat", "slip surface"] },
              { point: "Trigger: freeze–thaw/undercutting vs saturation by rain", keywords: ["freeze", "undercut", "rain", "saturat"] },
              { point: "Result: scree vs stepped/terraced cliff", keywords: ["scree", "terrace", "stepped", "steps"] },
            ],
            commonError: "Writing two separate descriptions without comparative words like 'whereas'.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-qa-p3-q03",
            question: "Pebbles at the foot of a cliff are large and angular, but 3 km along the beach they are smaller and rounded. Explain why.",
            marks: 3,
            hint: "Which process acts on the pebbles as they are moved?",
            modelAnswer:
              "The pebbles at the foot of the cliff have only just fallen from the cliff, so they are still large and angular. As longshore drift moves them along the beach, they knock into each other by attrition. Their sharp edges are chipped off, so further along they are smaller, smoother and rounder.",
            markScheme: [
              { point: "Fresh material near cliff is angular", keywords: ["just fallen", "recently", "fresh", "not yet", "near the cliff"] },
              { point: "Transported along the beach (longshore drift)", keywords: ["longshore", "transport", "moved along", "carried along"] },
              { point: "Attrition knocks off edges, making them rounder", keywords: ["attrition", "knock", "each other", "collide", "chip"] },
            ],
            commonError: "Saying abrasion makes pebbles rounder — abrasion wears the cliff.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-qa-p3-q04",
            question: "Explain why a wide beach can protect the cliff behind it from erosion.",
            marks: 2,
            hint: "Where do the waves lose their energy?",
            modelAnswer:
              "Waves break on the beach and lose much of their energy crossing it, so they have less energy left when they reach the cliff. This reduces hydraulic action and abrasion at the cliff foot.",
            markScheme: [
              { point: "Waves lose energy crossing / breaking on beach", keywords: ["lose energy", "absorb", "less energy", "energy is reduced", "dissipat"] },
              { point: "Less erosion of cliff foot", keywords: ["less erosion", "protect", "fewer waves reach", "reduces hydraulic", "reduces abrasion", "erodes less"] },
            ],
            commonError: "Saying the beach 'blocks' the sea without mentioning energy.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-qa-p3-q05",
            question: "A student counted waves per minute on one beach for five days: Monday 7; Tuesday 8; Wednesday 13; Thursday 12; Friday 6. Identify the days with destructive waves and explain the likely effect on the beach on those days.",
            marks: 4,
            hint: "Use the 6–8 and 10–14 ranges.",
            modelAnswer:
              "Wednesday (13 per minute) and Thursday (12 per minute) had destructive waves, because they fall in the 10–14 range; the other days (6–8) had constructive waves. On Wednesday and Thursday the backwash would be stronger than the swash, so sand would be dragged offshore and the beach would become narrower and lose material. On the other days constructive waves would start to rebuild it.",
            markScheme: [
              { point: "Identifies Wednesday and Thursday", keywords: ["wednesday", "thursday", "wed", "thurs"] },
              { point: "Uses frequency range 10–14 as justification", keywords: ["10-14", "10–14", "13", "12", "more than 10"] },
              { point: "Strong backwash", keywords: ["backwash", "strong backwash", "backwash stronger"] },
              { point: "Beach loses sand / sediment taken offshore", keywords: ["offshore", "remov", "lose", "narrower", "erode", "out to sea"] },
            ],
            commonError: "Picking the days correctly but not using the figures to justify the choice.",
            guideRef: "wave-types",
          },
          {
            id: "cproc-qa-p3-q06",
            question: "Explain how geology affects the rate of coastal erosion.",
            marks: 4,
            hint: "Rock hardness, chemistry and weaknesses.",
            modelAnswer:
              "Hard, resistant rocks such as granite erode slowly, whereas soft rocks such as clay and boulder clay erode quickly — Holderness's boulder clay retreats about 1.8 m a year. Rocks containing calcium carbonate, like chalk and limestone, are also attacked by solution. Joints, faults and bedding planes are lines of weakness that hydraulic action and abrasion can exploit, speeding up erosion even in hard rock. Where hard and soft rocks alternate, differential erosion produces headlands and bays.",
            markScheme: [
              { point: "Hard rock erodes slowly / soft rock quickly", keywords: ["hard", "soft", "resistant", "slowly", "quickly"] },
              { point: "Example or data (e.g. Holderness 1.8 m/yr)", keywords: ["holderness", "1.8", "granite", "boulder clay", "clay"] },
              { point: "Chemical composition: calcium carbonate dissolved", keywords: ["calcium carbonate", "solution", "dissolv", "chalk", "limestone"] },
              { point: "Joints/faults as weaknesses exploited", keywords: ["joint", "fault", "weakness", "crack", "bedding"] },
            ],
            commonError: "Only saying 'hard rock erodes slowly' without explaining weaknesses or chemistry.",
            guideRef: "geology",
          },
          {
            id: "cproc-qa-p3-q07",
            question: "Explain why deposition occurs where the coastline changes direction, using Spurn Head as an example.",
            marks: 4,
            hint: "Longshore drift keeps going, but the coast doesn't.",
            modelAnswer:
              "Longshore drift carries sediment eroded from the Holderness cliffs south along the coast. At the mouth of the Humber Estuary the coastline changes direction, but longshore drift continues in the same direction out into the estuary. Here the water is more sheltered and deeper, and the river's flow meets the sea, so waves lose energy and drop their load. Over time the deposited sand and shingle built up a spit about 5 km long — Spurn Head.",
            markScheme: [
              { point: "Longshore drift carries sediment along the coast", keywords: ["longshore drift", "carried south", "along the coast", "holderness"] },
              { point: "Coast changes direction but drift continues", keywords: ["changes direction", "continues", "keeps going", "estuary", "humber"] },
              { point: "Water loses energy (sheltered/river meets sea)", keywords: ["lose energy", "loses energy", "sheltered", "calm", "less energy"] },
              { point: "Sediment deposited building a spit (~5 km)", keywords: ["spit", "deposit", "5 km", "builds up", "built up"] },
            ],
            commonError: "Describing what Spurn Head looks like without explaining why deposition happens there.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-qa-p3-q08",
            question: "Describe the Holderness coast case study, using at least three facts.",
            marks: 4,
            hint: "Location, rock type, rate of erosion, villages lost, defences.",
            modelAnswer:
              "The Holderness coast is in East Yorkshire, running about 61 km from Flamborough Head to Spurn Head. It is made of soft boulder clay left by glaciers in the last ice age. It erodes on average about 1.8 m per year, one of the fastest rates in Europe, and about 29 villages have been lost since Roman times. Some places, such as Mappleton, are protected — a £2 million scheme in 1991 built two rock groynes and rock armour.",
            markScheme: [
              { point: "Location (East Yorkshire / 61 km)", keywords: ["yorkshire", "61", "flamborough", "east coast of england"] },
              { point: "Soft boulder clay", keywords: ["boulder clay", "clay", "till", "soft"] },
              { point: "Rate about 1.8 m per year", keywords: ["1.8", "2 m", "fastest", "per year"] },
              { point: "Villages lost / Mappleton defences", keywords: ["29", "villages", "mappleton", "groyne", "rock armour"] },
            ],
            commonError: "Writing general points about erosion without the specific Holderness facts.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-qa-p3-q09",
            question: "Explain how the prevailing wind determines the direction of longshore drift.",
            marks: 2,
            hint: "Which way do the waves approach, and what follows them?",
            modelAnswer:
              "The prevailing wind drives waves towards the beach at an angle from its direction. The swash carries sediment up the beach at that angle, so each zig-zag moves sediment along the coast in the same direction that the prevailing wind is blowing.",
            markScheme: [
              { point: "Waves approach at angle set by prevailing wind", keywords: ["angle", "direction of the wind", "diagonal", "oblique"] },
              { point: "Swash moves sediment in that direction along the coast", keywords: ["swash", "same direction", "along the coast", "zig"] },
            ],
            commonError: "Stating the direction without explaining the role of the angled swash.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-qa-p3-q10",
            question: "Singapore's land area was about 581 km² in the 1960s and is about 735 km² today. Calculate the percentage increase. Show your working.",
            marks: 3,
            hint: "Increase ÷ original × 100.",
            modelAnswer:
              "Increase = 735 − 581 = 154 km². Percentage increase = 154 ÷ 581 × 100 ≈ 26.5%. Singapore's land area has grown by about a quarter, mostly through land reclamation.",
            markScheme: [
              { point: "Calculates the increase: 154", keywords: ["154", "735 - 581", "735 − 581", "735-581"] },
              { point: "Divides by original (581) and multiplies by 100", keywords: ["÷ 581", "/581", "/ 581", "÷581", "x 100", "× 100"] },
              { point: "Correct answer about 26.5%", keywords: ["26.5", "26.51", "27%", "26%"] },
            ],
            commonError: "Dividing by 735 (the new value) and getting 21%.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-qa-p3-q11",
            question: "Explain how sea-level rise could increase erosion along East Coast Park.",
            marks: 4,
            hint: "Think about where waves will reach and how deep the water is.",
            modelAnswer:
              "Sea level in Singapore could rise by up to about 1 m by 2100. Deeper water near the shore means waves lose less energy through friction before they break, so more powerful waves reach the coast. Waves will also reach higher up the beach and the revetments, attacking loose reclaimed sand that is currently out of reach. During storm surges and high tides, water levels could be 4–5 m above today's mean, so hydraulic action and backwash could strip sand and undermine defences, which would need to be raised.",
            markScheme: [
              { point: "Data: up to about 1 m by 2100", keywords: ["1 m", "1m", "2100", "metre"] },
              { point: "Deeper water so waves keep more energy", keywords: ["deeper", "more energy", "less friction", "more powerful"] },
              { point: "Waves reach further inland / higher up defences", keywords: ["higher", "further inland", "reach", "overtop", "inland"] },
              { point: "Reclaimed sand eroded / storm surges / defences undermined", keywords: ["reclaimed", "sand", "surge", "undermin", "backwash"] },
            ],
            commonError: "Only saying 'there will be more flooding' without linking to erosion processes.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-qa-p3-q12",
            question: "Explain why freeze–thaw weathering is common on cliffs in northern England but does not occur in Singapore.",
            marks: 3,
            hint: "What temperatures does freeze–thaw need?",
            modelAnswer:
              "Freeze–thaw needs water in cracks and temperatures that repeatedly rise above and fall below 0 °C. In northern England, winter temperatures often fall below freezing at night and rise above it in the day, so many cycles occur. Singapore's temperature stays around 25–32 °C all year and never reaches 0 °C, so water never freezes and freeze–thaw cannot happen.",
            markScheme: [
              { point: "Needs temperatures fluctuating around 0 °C", keywords: ["0°c", "0 °c", "zero", "freezing point", "fluctuat", "above and below"] },
              { point: "England has winter freeze-thaw cycles", keywords: ["winter", "cold", "below freezing", "night", "many cycles"] },
              { point: "Singapore is always warm, never freezes", keywords: ["never", "always warm", "hot", "25", "30", "equatorial"] },
            ],
            commonError: "Saying Singapore has no freeze–thaw because it has no rain — it is the temperature that matters.",
            guideRef: "weathering",
          },
          {
            id: "cproc-qa-p3-q13",
            question: "Using a named example, explain how differential erosion forms headlands and bays.",
            marks: 4,
            hint: "Name the rocks at Swanage.",
            modelAnswer:
              "On a discordant coast such as Swanage in Dorset, bands of hard and soft rock meet the sea at right angles. The soft Wealden clays and sands erode quickly by hydraulic action and abrasion, forming Swanage Bay. The more resistant chalk (Ballard Point and Old Harry Rocks) and limestone (Durlston Head) erode more slowly, so they are left jutting out as headlands. This difference in the rate of erosion is called differential erosion.",
            markScheme: [
              { point: "Named example (Swanage / Dorset)", keywords: ["swanage", "dorset", "jurassic", "old harry", "durlston"] },
              { point: "Bands of rock at right angles to the coast", keywords: ["right angle", "perpendicular", "discordant", "90"] },
              { point: "Soft rock erodes faster to form a bay", keywords: ["soft", "clay", "faster", "quickly", "bay"] },
              { point: "Hard rock erodes slowly, left as headland", keywords: ["hard", "resistant", "chalk", "limestone", "headland"] },
            ],
            commonError: "Giving no named example or naming a concordant example such as Lulworth Cove.",
            guideRef: "geology",
          },
          {
            id: "cproc-qa-p3-q14",
            question: "Explain why the process of solution is important on the Dorset coast.",
            marks: 2,
            hint: "What are chalk and limestone made of?",
            modelAnswer:
              "Much of the Dorset coast is chalk and limestone, which are made of calcium carbonate. Weak acids in seawater dissolve calcium carbonate, so solution weakens these rocks and widens joints, helping other processes erode them.",
            markScheme: [
              { point: "Dorset has chalk/limestone (calcium carbonate)", keywords: ["chalk", "limestone", "calcium carbonate"] },
              { point: "Weak acids dissolve these rocks", keywords: ["acid", "dissolv", "corrosion", "carbonic"] },
            ],
            commonError: "Saying solution affects all rocks equally.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-qa-p3-q15",
            question: "Explain why the Holderness coast is retreating so quickly. Write a PEEL paragraph.",
            marks: 6,
            hint: "Point, Evidence (figures), Explanation (processes), Link.",
            modelAnswer:
              "The Holderness coast retreats quickly mainly because it is made of soft boulder clay (Point). It erodes on average about 1.8 m per year, among the fastest rates in Europe, and about 29 villages have been lost since Roman times (Evidence). Boulder clay is soft and unconsolidated, so hydraulic action and abrasion from powerful North Sea destructive waves erode the cliff foot easily, especially during winter storms with a long fetch from the north-east. When it rains, the clay becomes saturated, heavy and slippery, so the undercut cliffs slump. Longshore drift then carries the eroded material south towards Spurn Head, so beaches stay narrow and give little protection (Explanation). Therefore, a combination of weak geology, powerful waves, mass movement and narrow beaches explains the rapid retreat (Link).",
            markScheme: [
              { point: "Point: soft boulder clay", keywords: ["boulder clay", "soft", "clay", "till"] },
              { point: "Evidence: about 1.8 m/yr or 29 villages lost", keywords: ["1.8", "29", "villages", "fastest"] },
              { point: "Explains marine erosion (hydraulic action/abrasion, destructive waves)", keywords: ["hydraulic", "abrasion", "destructive", "storm", "north sea"] },
              { point: "Explains mass movement / slumping when saturated", keywords: ["slump", "saturat", "mass movement", "rain"] },
              { point: "Narrow beaches due to longshore drift removing sediment", keywords: ["narrow", "longshore", "spurn", "little protection", "carried south"] },
              { point: "Link back to the question", keywords: ["therefore", "so the coast", "this explains", "which is why", "overall"] },
            ],
            commonError: "Listing facts without explaining the processes, or forgetting the linking sentence.",
            guideRef: "erosion-processes",
          },
        ],
      },
      {
        id: "cproc-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "cproc-qa-p4-q01",
            question: "Explain why geographers describe the coast as a 'zone' rather than a line.",
            marks: 2,
            hint: "Think about tides and the different parts of the coast.",
            modelAnswer:
              "The edge of the sea moves constantly with the tides and waves, so there is no single fixed line. The coast includes a strip of land and sea — the backshore, foreshore and offshore zone — where coastal processes all interact.",
            markScheme: [
              { point: "Water's edge moves with tides/waves", keywords: ["tide", "moves", "changes", "not fixed"] },
              { point: "Includes backshore, foreshore and offshore areas", keywords: ["backshore", "foreshore", "offshore", "strip", "land and sea"] },
            ],
            commonError: "Defining the coastline instead of explaining why the coast is a zone.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-qa-p4-q02",
            question: "Three beaches experience the same wind speed and duration. Beach X: fetch 50 km. Beach Y: fetch 900 km. Beach Z: fetch 6,000 km. Rank the beaches from highest to lowest wave energy and explain your ranking.",
            marks: 3,
            hint: "Only one factor is changing.",
            modelAnswer:
              "The ranking is Z, Y, X. Z (6,000 km) has the most energetic waves, then Y (900 km), then X (50 km). Since wind speed and duration are the same, fetch is the only difference. A longer fetch gives the wind a greater distance over which to transfer energy to the water, so waves grow larger and more powerful.",
            markScheme: [
              { point: "Correct ranking Z, Y, X", keywords: ["z y x", "z then y then x", "z has the most", "z is the highest", "z highest", "zyx"] },
              { point: "Recognises fetch is the only variable", keywords: ["only difference", "only variable", "only thing", "same wind", "fetch is the difference", "controlled"] },
              { point: "Longer fetch = more energy transferred", keywords: ["more energy", "longer distance", "transfer", "bigger waves", "larger waves"] },
            ],
            commonError: "Ranking correctly but not explaining why fetch increases energy.",
            guideRef: "coast-and-waves",
          },
          {
            id: "cproc-qa-p4-q03",
            question: "Explain how human activity can increase the risk of mass movement on coastal cliffs.",
            marks: 3,
            hint: "Weight, water and removing support.",
            modelAnswer:
              "Building houses and hotels on cliff tops adds weight, putting extra stress on the cliff. Leaking drains, swimming pools and garden watering add water, which saturates the rock and lubricates it. Removing vegetation or building defences that starve beaches further along can also reduce stability, as at Holbeck Hall in Scarborough where weight and water contributed to the 1993 slump.",
            markScheme: [
              { point: "Buildings add weight", keywords: ["weight", "building", "heavy", "load"] },
              { point: "Drains/water saturate and lubricate", keywords: ["drain", "water", "saturat", "lubric", "leak"] },
              { point: "Removing vegetation / starving beaches / example", keywords: ["vegetation", "trees", "starv", "holbeck", "scarborough"] },
            ],
            commonError: "Only writing 'people damage the cliff' without saying how.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-qa-p4-q04",
            question: "Explain why the shape and size of a beach may change between seasons.",
            marks: 4,
            hint: "Which waves dominate in stormy seasons and in calm seasons?",
            modelAnswer:
              "In stormy seasons (winter in the UK, or the Northeast Monsoon in Singapore) strong winds over long fetches create destructive waves. Their strong backwash drags sand offshore, so the beach becomes narrower and lower. In calmer seasons constructive waves dominate; their strong swash carries sand back up the beach and deposits it, so the beach becomes wider again. So the beach profile changes through the year.",
            markScheme: [
              { point: "Stormy season brings destructive waves", keywords: ["storm", "winter", "monsoon", "destructive"] },
              { point: "Strong backwash removes sand offshore", keywords: ["backwash", "offshore", "remov", "drag", "narrower"] },
              { point: "Calm season brings constructive waves", keywords: ["calm", "summer", "constructive"] },
              { point: "Strong swash deposits sand, rebuilding beach", keywords: ["swash", "deposit", "rebuild", "wider", "builds"] },
            ],
            commonError: "Describing only one season.",
            guideRef: "wave-types",
          },
          {
            id: "cproc-qa-p4-q05",
            question: "Suggest why PUB, Singapore's national water agency, was made responsible for coastal protection in 2020.",
            marks: 3,
            hint: "How are sea flooding and rain flooding linked?",
            modelAnswer:
              "Coastal flooding and inland flooding are linked: if heavy rain falls during a high tide or storm surge, drains cannot empty into the sea, so floods are worse. PUB already manages drains, canals and the Marina Barrage, which keeps the sea out of Marina Reservoir, so it has the right expertise. Putting one agency in charge means coastal and flood defences can be planned together over the long term, which matters as sea levels rise.",
            markScheme: [
              { point: "Coastal and inland flooding are linked", keywords: ["linked", "together", "rain", "high tide", "drain"] },
              { point: "PUB has existing expertise (drains, Marina Barrage)", keywords: ["marina barrage", "expertise", "drains", "canal", "experience"] },
              { point: "Joined-up, long-term planning for sea-level rise", keywords: ["plan", "long-term", "long term", "one agency", "co-ordinat", "coordinat"] },
            ],
            commonError: "Describing what PUB does with drinking water without linking it to the coast.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-qa-p4-q06",
            question: "'Weathering is more important than erosion in causing cliffs to retreat.' To what extent do you agree?",
            marks: 6,
            hint: "Define both, give examples of each at work, show how they interact, then judge.",
            modelAnswer:
              "Weathering breaks rock down in place, while erosion wears it away and removes it. Weathering is important because freeze–thaw, salt crystallisation and carbonation weaken the cliff face and widen joints, and biological weathering by roots and burrowing animals loosens cliff tops. On chalk and limestone coasts carbonation can be significant. However, weathering alone cannot make a cliff retreat, because the weathered material must be removed. Marine erosion by hydraulic action and abrasion cuts a notch at the cliff foot and removes fallen debris; on soft coasts like Holderness, erosion drives retreat of about 1.8 m per year. Mass movement links the two: weathered, undercut cliffs collapse and waves carry the debris away. Overall I disagree: erosion is more important because it removes material, but weathering speeds it up by making the rock weaker.",
            markScheme: [
              { point: "Defines weathering vs erosion", keywords: ["in place", "in situ", "removal", "remov", "moving"] },
              { point: "Explains a weathering process weakening cliffs", keywords: ["freeze", "salt", "carbonation", "root", "burrow"] },
              { point: "Explains erosion processes at cliff foot", keywords: ["hydraulic", "abrasion", "notch", "undercut"] },
              { point: "Uses evidence (e.g. Holderness 1.8 m/yr)", keywords: ["holderness", "1.8", "dorset", "chalk", "boulder clay"] },
              { point: "Shows interaction / mass movement link", keywords: ["together", "interact", "mass movement", "collapse", "weaker"] },
              { point: "Justified judgement", keywords: ["overall", "disagree", "agree", "conclusion", "on balance"] },
            ],
            commonError: "Treating weathering and erosion as the same thing, or giving no final judgement.",
            guideRef: "weathering",
          },
          {
            id: "cproc-qa-p4-q07",
            question: "Explain how coastal defences that interrupt longshore drift can cause problems further along the coast. Use an example.",
            marks: 4,
            hint: "Think about Mappleton and the cliffs to its south.",
            modelAnswer:
              "Longshore drift naturally carries sediment along the coast, feeding beaches down-drift. At Mappleton on the Holderness coast, two rock groynes built in 1991 trapped sediment moving south. The beach at Mappleton became wider, but less sand reached the beaches to the south. These narrower beaches absorbed less wave energy, so the cliffs south of Mappleton eroded faster than before.",
            markScheme: [
              { point: "Longshore drift supplies sediment to beaches down-drift", keywords: ["longshore", "supply", "down-drift", "downdrift", "along the coast"] },
              { point: "Defences (groynes) trap sediment", keywords: ["groyne", "trap", "build up", "hold"] },
              { point: "Beaches further along starved / narrower", keywords: ["starv", "narrower", "less sand", "less sediment", "thinner"] },
              { point: "Faster erosion down-drift with example (Mappleton)", keywords: ["mappleton", "holderness", "faster erosion", "erode faster", "increased erosion"] },
            ],
            commonError: "Explaining what groynes do without saying what happens further along the coast.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-qa-p4-q08",
            question: "The Cliffs of Moher in western Ireland rise over 200 m from the Atlantic Ocean and are made of layers of sandstone and shale. Suggest why they experience powerful waves and frequent rockfalls.",
            marks: 4,
            hint: "Apply what you know about fetch and about how cliffs fail.",
            modelAnswer:
              "The cliffs face west across the Atlantic, so the fetch is several thousand kilometres; combined with strong prevailing south-westerly winds, this creates large, powerful destructive waves. These waves attack the cliff foot by hydraulic action and abrasion, undercutting it. The softer shale layers erode faster than the sandstone, leaving overhanging blocks. Winter freeze–thaw and salt spray loosen these blocks along joints, so pieces break away and fall as rockfalls from the very steep, high cliff face.",
            markScheme: [
              { point: "Long Atlantic fetch / strong westerly winds", keywords: ["fetch", "atlantic", "westerl", "prevailing", "strong wind"] },
              { point: "Waves undercut cliff foot", keywords: ["undercut", "hydraulic", "abrasion", "notch", "foot"] },
              { point: "Shale erodes faster than sandstone / overhangs", keywords: ["shale", "softer", "overhang", "different rates", "differential"] },
              { point: "Weathering loosens blocks that fall from steep face", keywords: ["freeze", "salt", "joint", "loosen", "steep"] },
            ],
            commonError: "Not applying knowledge to this place — e.g. ignoring the Atlantic fetch or the mixed rock layers.",
            guideRef: "mass-movement",
          },
          {
            id: "cproc-qa-p4-q09",
            question: "In 1990 a house was 210 m from a cliff edge. In 2020 it was 150 m from the edge. (a) Calculate the average rate of erosion. (b) If this rate continues, in what year will the cliff edge reach the house?",
            marks: 3,
            hint: "Distance lost ÷ years; then remaining distance ÷ rate.",
            modelAnswer:
              "(a) Distance lost = 210 − 150 = 60 m over 30 years. Rate = 60 ÷ 30 = 2 m per year. (b) 150 ÷ 2 = 75 years, so 2020 + 75 = the year 2095.",
            markScheme: [
              { point: "60 m lost over 30 years", keywords: ["60", "30 years", "210 - 150", "210 − 150"] },
              { point: "Rate = 2 m per year", keywords: ["2 m per year", "2m per year", "2 m/yr", "2m/yr", "2 metres"] },
              { point: "Year = 2095 (75 years)", keywords: ["2095", "75 years", "75"] },
            ],
            commonError: "Dividing 150 by 30 instead of using the distance lost (60 m).",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-qa-p4-q10",
            question: "Explain how the offshore breakwaters at East Coast Park encourage deposition.",
            marks: 3,
            hint: "Breakwater → wave energy → load.",
            modelAnswer:
              "Waves hit the breakwaters offshore and break there, losing much of their energy before reaching the beach. Behind the breakwaters the water is calmer, and waves bend round them into small bays. With less energy the waves cannot carry their load, so sand is deposited and the beach is kept in place.",
            markScheme: [
              { point: "Waves break on breakwater / lose energy", keywords: ["lose energy", "loses energy", "break on", "absorb", "less energy"] },
              { point: "Calmer, sheltered water behind / bays", keywords: ["calm", "sheltered", "behind", "bay", "bend"] },
              { point: "Load dropped so sand deposited", keywords: ["deposit", "drop", "cannot carry", "sand builds", "load"] },
            ],
            commonError: "Saying breakwaters 'stop' waves without linking reduced energy to deposition.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-qa-p4-q11",
            question: "Compare mechanical and chemical weathering, giving one coastal example of each.",
            marks: 4,
            hint: "Does the rock's chemistry change? Where is each most active?",
            modelAnswer:
              "Mechanical weathering breaks rock into smaller pieces without changing its chemical make-up, whereas chemical weathering changes or dissolves the minerals in the rock. An example of mechanical weathering is freeze–thaw, where ice expands in cracks; an example of chemical weathering is carbonation, where carbonic acid in rain dissolves chalk and limestone. Mechanical weathering such as freeze–thaw is most active in cold places with temperatures around 0 °C, whereas chemical weathering is fastest in hot, wet climates like Singapore's.",
            markScheme: [
              { point: "Mechanical: breaks rock without chemical change", keywords: ["without changing", "physical", "smaller pieces", "no chemical", "breaks"] },
              { point: "Chemical: changes/dissolves minerals", keywords: ["dissolv", "changes the minerals", "react", "chemical change", "decompos"] },
              { point: "Correct examples of each", keywords: ["freeze", "salt", "carbonation", "carbonic", "solution"] },
              { point: "Contrasting climates (cold vs hot and wet)", keywords: ["cold", "hot and wet", "warm", "climate", "singapore"] },
            ],
            commonError: "Using erosion examples (e.g. abrasion) instead of weathering.",
            guideRef: "weathering",
          },
          {
            id: "cproc-qa-p4-q12",
            question: "Explain why abrasion is often the most effective process of erosion at the foot of a cliff.",
            marks: 3,
            hint: "Where does the 'ammunition' collect?",
            modelAnswer:
              "Pebbles and sand collect at the foot of the cliff, especially after rockfalls. Breaking waves pick up this material and hurl it repeatedly against the base of the cliff, acting like sandpaper. Because the impact is concentrated between high and low tide, it cuts a wave-cut notch faster than hydraulic action alone, especially in storms when waves carry larger stones.",
            markScheme: [
              { point: "Plenty of loose material at cliff foot", keywords: ["pebbles", "sediment", "loose material", "debris", "sand"] },
              { point: "Waves hurl material against the cliff repeatedly", keywords: ["hurl", "thrown", "throw", "repeated", "sandpaper"] },
              { point: "Energy concentrated at base → notch / storms", keywords: ["concentrat", "notch", "base", "storm", "high tide"] },
            ],
            commonError: "Describing attrition (stones hitting each other) instead.",
            guideRef: "erosion-processes",
          },
          {
            id: "cproc-qa-p4-q13",
            question: "Evaluate whether Singapore should rely more on nature-based defences, such as mangroves, to protect its coast.",
            marks: 6,
            hint: "Benefits, limits, evidence from Singapore, and a clear judgement.",
            modelAnswer:
              "Nature-based defences have clear benefits. Mangroves, such as those at Sungei Buloh and on Pulau Ubin, slow waves, absorb energy and trap sediment, so the shore can build up naturally as sea level rises. They also store carbon, provide habitats for wildlife and are cheaper to maintain than concrete. However, Singapore is land-short and more than 70% of its coast is already lined with seawalls and revetments protecting valuable land such as Changi Airport and Marina Bay, where there is no room for wide mangrove belts. Mangroves take years to grow and may not protect against the 4–5 m extreme sea levels possible by 2100. Hard defences give more certain protection for high-value areas, but cost billions (around S$100 billion over 100 years). Overall, Singapore should use more nature-based defences where space allows, such as the north-west coast, but combine them with hard defences in hybrid schemes for the most valuable areas.",
            markScheme: [
              { point: "Benefit: mangroves absorb energy / trap sediment", keywords: ["absorb", "slow", "trap", "sediment", "energy"] },
              { point: "Benefit: habitat / carbon / lower maintenance", keywords: ["habitat", "wildlife", "carbon", "cheaper", "biodiversity"] },
              { point: "Limit: lack of space / valuable land already walled (70%)", keywords: ["space", "land-short", "70%", "valuable", "airport"] },
              { point: "Limit: slow to grow / may not cope with extreme sea levels", keywords: ["take years", "slow to grow", "4-5", "4–5", "extreme"] },
              { point: "Uses Singapore evidence (Sungei Buloh, Pulau Ubin, S$100 billion)", keywords: ["sungei buloh", "pulau ubin", "100 billion", "north-west", "east coast"] },
              { point: "Justified judgement / hybrid approach", keywords: ["overall", "hybrid", "combine", "mix", "conclusion"] },
            ],
            commonError: "Listing advantages of mangroves without weighing them against Singapore's lack of space.",
            guideRef: "singapore-coast",
          },
          {
            id: "cproc-qa-p4-q14",
            question: "Explain how the type of transport depends on wave energy and the size of the material.",
            marks: 4,
            hint: "Bigger particles need more energy to move — how do they move?",
            modelAnswer:
              "The bigger the particle, the more energy is needed to move it. Large boulders can only be rolled along the sea bed by traction, and only in high-energy storm waves. Smaller pebbles and coarse sand can be lifted briefly and bounced by saltation. Fine silt and clay need little energy and stay in suspension within the water. Dissolved minerals are carried in solution regardless of wave energy. As energy falls, the largest material stops moving first.",
            markScheme: [
              { point: "Larger material needs more energy", keywords: ["more energy", "bigger", "larger", "heavier", "high energy"] },
              { point: "Traction for boulders / saltation for pebbles", keywords: ["traction", "saltation", "roll", "bounc"] },
              { point: "Suspension for fine particles", keywords: ["suspension", "fine", "silt", "clay"] },
              { point: "Solution for dissolved material / largest dropped first", keywords: ["solution", "dissolv", "dropped first", "deposited first"] },
            ],
            commonError: "Listing the four processes without linking them to energy.",
            guideRef: "transport-and-drift",
          },
          {
            id: "cproc-qa-p4-q15",
            question: "Explain how wave type, rock type and weathering combine to determine how fast a coastline erodes.",
            marks: 6,
            hint: "Take each factor in turn, then show how they interact. Use examples.",
            modelAnswer:
              "Wave type matters because destructive waves, formed by strong winds over a long fetch, have strong backwash and high energy, so they erode cliffs and remove beach sediment; constructive waves build beaches that protect cliffs. Rock type matters because soft rocks like the boulder clay of Holderness (about 1.8 m per year) erode far faster than hard rocks like granite, and chalk and limestone are also attacked by solution. Joints and faults create weaknesses for hydraulic action. Weathering weakens rocks before the sea attacks them: freeze–thaw and salt crystallisation break rock apart, and carbonation dissolves chalk and limestone. The factors combine: a soft, weathered cliff facing a long fetch with frequent destructive waves and a narrow beach, like Holderness, retreats very quickly, whereas a granite cliff sheltered by a wide beach retreats very slowly. Therefore the fastest erosion occurs where all three factors work together.",
            markScheme: [
              { point: "Destructive waves/high energy increase erosion", keywords: ["destructive", "backwash", "high energy", "storm", "fetch"] },
              { point: "Soft rock erodes faster than hard rock", keywords: ["soft", "hard", "resistant", "clay", "granite"] },
              { point: "Weaknesses or chemistry (joints, calcium carbonate)", keywords: ["joint", "fault", "calcium carbonate", "solution", "weakness"] },
              { point: "Weathering weakens rock before erosion", keywords: ["freeze", "salt", "carbonation", "weaken", "weathering"] },
              { point: "Uses example/data (Holderness 1.8 m/yr)", keywords: ["holderness", "1.8", "dorset", "boulder clay", "cornwall"] },
              { point: "Shows how factors interact / conclusion", keywords: ["combine", "together", "interact", "therefore", "overall"] },
            ],
            commonError: "Explaining each factor separately without showing how they work together.",
            guideRef: "erosion-processes",
          },
        ],
      },
    ],
  },
};
