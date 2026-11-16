# "Totally Raotional: Off The Map" S02E11 "Erosion Of Trust" (Topic: Waves, Weathering & Erosion)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: intro-to-coasts, waves, weathering, erosion-processes, mass-movement.

EP = dict(topic="coastal-erosion",
          logline="Dad builds a sandcastle at East Coast Park and bets Tara it will last a thousand years. Globo, a grumpy globe "
                  "from the junk drawer, explains the coastal zone, waves, weathering, the four erosion processes and why cliffs collapse.")

D_ZONES = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<path d="M0 40 L70 40 L90 150 L520 150 L520 200 L0 200Z" fill="#cbd5e1"/>
<path d="M90 150 L250 118 L520 118 L520 150Z" fill="#fcd34d" opacity="0.25"/>
<path d="M150 108 L520 108 L520 200 L150 200Z" fill="#0369a1" opacity="0.85"/>
<path d="M150 108 Q230 102 300 108" stroke="#7dd3fc" stroke-width="3" fill="none"/>
<path d="M120 96 L520 96" stroke="#fde047" stroke-width="2" stroke-dasharray="6 5"/>
<path d="M260 124 L520 124" stroke="#fda4af" stroke-width="2" stroke-dasharray="6 5"/>
<text x="470" y="90" font-family="sans-serif" font-size="13" fill="#fde047" text-anchor="end">high tide</text>
<text x="470" y="140" font-family="sans-serif" font-size="13" fill="#fda4af" text-anchor="end">low tide</text>
<path d="M0 20 H520" stroke="#334155" stroke-width="1"/>
<text x="45" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#e2e8f0" text-anchor="middle">BACKSHORE</text>
<text x="190" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fde047" text-anchor="middle">FORESHORE</text>
<text x="330" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#7dd3fc" text-anchor="middle">NEARSHORE</text>
<text x="460" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#a5b4fc" text-anchor="middle">OFFSHORE</text>
<text x="40" y="70" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">cliff</text>
<text x="330" y="180" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">waves break</text>
</svg>"""

D_WAVES = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">
<rect width="520" height="190" fill="#0f172a"/>
<path d="M10 150 L240 110 L240 170 L10 170Z" fill="#fcd34d"/>
<path d="M10 140 Q40 128 70 140 T130 140" stroke="#7dd3fc" stroke-width="4" fill="none"/>
<path d="M120 128 L210 112" stroke="#4ade80" stroke-width="9"/><path d="M222 110 l-16 -6 l4 14z" fill="#4ade80"/>
<path d="M200 128 L130 140" stroke="#f87171" stroke-width="3"/><path d="M122 142 l12 -8 l2 10z" fill="#f87171"/>
<path d="M280 170 L510 70 L510 170Z" fill="#a8a29e"/>
<path d="M280 130 Q300 60 330 110 Q345 80 360 120" stroke="#7dd3fc" stroke-width="4" fill="none"/>
<path d="M380 116 L430 96" stroke="#4ade80" stroke-width="3"/><path d="M438 93 l-12 -2 l4 10z" fill="#4ade80"/>
<path d="M450 104 L370 138" stroke="#f87171" stroke-width="9"/><path d="M358 143 l16 -14 l4 14z" fill="#f87171"/>
<text x="125" y="34" font-family="sans-serif" font-size="17" font-weight="bold" fill="#4ade80" text-anchor="middle">CONSTRUCTIVE</text>
<text x="125" y="56" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">low · 6–8 a minute</text>
<text x="125" y="186" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">strong SWASH → builds</text>
<text x="395" y="34" font-family="sans-serif" font-size="17" font-weight="bold" fill="#f87171" text-anchor="middle">DESTRUCTIVE</text>
<text x="395" y="56" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">tall, steep · 10–14 a minute</text>
<text x="395" y="186" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">strong BACKWASH → erodes</text>
</svg>"""

D_FREEZE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170">
<rect width="520" height="170" fill="#0f172a"/>
<rect x="15" y="30" width="110" height="100" fill="#a8a29e"/><path d="M70 30 L66 70" stroke="#38bdf8" stroke-width="5"/>
<rect x="140" y="30" width="110" height="100" fill="#a8a29e"/><path d="M195 30 L188 80 L202 80Z" fill="#e0f2fe"/>
<rect x="265" y="30" width="110" height="100" fill="#a8a29e"/><path d="M320 30 L312 100 L328 100Z" fill="#38bdf8"/>
<rect x="390" y="30" width="56" height="100" fill="#a8a29e"/><path d="M462 60 L500 60 L506 130 L456 130Z" fill="#a8a29e"/>
<text x="70" y="22" font-family="sans-serif" font-size="14" font-weight="bold" fill="#38bdf8" text-anchor="middle">water in</text>
<text x="195" y="22" font-family="sans-serif" font-size="14" font-weight="bold" fill="#e0f2fe" text-anchor="middle">freezes +9%</text>
<text x="320" y="22" font-family="sans-serif" font-size="14" font-weight="bold" fill="#38bdf8" text-anchor="middle">thaws deeper</text>
<text x="450" y="22" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047" text-anchor="middle">splits!</text>
<text x="260" y="158" font-family="sans-serif" font-size="15" fill="#e2e8f0" text-anchor="middle">repeat around 0 °C, hundreds of times</text>
</svg>"""

D_EROSION = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<rect x="10" y="40" width="40" height="120" fill="#a8a29e"/><path d="M50 100 L36 96" stroke="#0f172a" stroke-width="4"/>
<path d="M70 100 Q90 80 110 100" stroke="#7dd3fc" stroke-width="4" fill="none"/><path d="M62 98 h-8" stroke="#fde047" stroke-width="3"/>
<rect x="140" y="40" width="40" height="120" fill="#a8a29e"/>
<circle cx="200" cy="96" r="6" fill="#d6d3d1"/><circle cx="216" cy="112" r="5" fill="#d6d3d1"/><path d="M226 100 L192 96" stroke="#fde047" stroke-width="2"/>
<path d="M290 92 L306 84 L314 100 L298 108Z" fill="#d6d3d1"/><path d="M322 96 L338 88 L344 104 L328 110Z" fill="#d6d3d1"/>
<circle cx="350" cy="140" r="7" fill="#d6d3d1"/><circle cx="372" cy="140" r="6" fill="#d6d3d1"/>
<rect x="410" y="40" width="40" height="120" fill="#e7e5e4"/><circle cx="462" cy="80" r="2" fill="#7dd3fc"/><circle cx="470" cy="100" r="2" fill="#7dd3fc"/><circle cx="458" cy="118" r="2" fill="#7dd3fc"/>
<text x="65" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#7dd3fc" text-anchor="middle">HYDRAULIC</text>
<text x="190" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047" text-anchor="middle">ABRASION</text>
<text x="330" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#4ade80" text-anchor="middle">ATTRITION</text>
<text x="460" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#f0abfc" text-anchor="middle">SOLUTION</text>
<text x="65" y="185" font-family="sans-serif" font-size="12" fill="#e2e8f0" text-anchor="middle">air forced in cracks</text>
<text x="190" y="185" font-family="sans-serif" font-size="12" fill="#e2e8f0" text-anchor="middle">pebbles hit cliff</text>
<text x="330" y="185" font-family="sans-serif" font-size="12" fill="#e2e8f0" text-anchor="middle">rocks hit rocks</text>
<text x="460" y="185" font-family="sans-serif" font-size="12" fill="#e2e8f0" text-anchor="middle">chalk dissolves</text>
</svg>"""

D_SLUMP = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<path d="M0 50 L300 50 L300 50 Q290 150 440 180 L520 180 L520 200 L0 200Z" fill="#92400e"/>
<path d="M300 50 L330 50 L420 170" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 5" fill="none"/>
<path d="M200 50 Q190 140 400 180" stroke="#f87171" stroke-width="3" stroke-dasharray="8 6" fill="none"/>
<path d="M205 62 L290 74 Q300 140 400 176 Q260 160 214 120Z" fill="#b45309"/>
<rect x="430" y="176" width="90" height="24" fill="#0369a1"/>
<path d="M60 20 l-6 14 M90 14 l-6 14 M120 20 l-6 14 M150 14 l-6 14" stroke="#7dd3fc" stroke-width="3"/>
<text x="20" y="100" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047">rain soaks in →</text>
<text x="20" y="118" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047">heavier, weaker</text>
<text x="230" y="44" font-family="sans-serif" font-size="13" fill="#e2e8f0">scarp</text>
<text x="120" y="160" font-family="sans-serif" font-size="14" fill="#f87171">curved slip plane</text>
<text x="420" y="168" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="end">waves eat the toe</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("beach", [("tara", 260), ("mum", 560), ("dad", 900)], "EAST COAST PARK · Singapore · Saturday Picnic")
L("mum", "Picnic time! Thosai, chapatis, chips and teh. And I got this bucket half price, with a lifetime warranty!", mood="excited", shot="close", prop="bucket")
L("tara", "A lifetime warranty. On a bucket. Whose lifetime?", mood="deadpan", shot="close")
L("dad", "Behold. Castle Rao. Singapore piled sand into the sea to make new land. So did I. It will stand for a thousand years.", mood="smug", shot="close")
L("tara", "Dad. The tide comes in at four o'clock.", mood="deadpan", shot="close")
L("dad", "Then I bet you a plate of prata it's still standing tonight. Trust me.", mood="determined", shot="close", prop="plate")
freeze("\"TRUST ME.\"", 2.4, narrator="Narrator: Tara would be eating very well tonight.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My father thinks he can out-build the sea. With a bucket. That my mother bought on sale.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WHAT IS A COAST? WAVES ----------------
scene("beach", [("tara", 300), ("dad", 640)])
L("tara", "Good thing I packed the junk drawer in the cooler bag.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 980)
L("globo", "Sand. Sand in my Pacific. Who packs a globe next to the chips?", mood="annoyed", shot="close")
L("tara", "Globo, help. Dad thinks his sandcastle will last a thousand years.", mood="worried", shot="two", gap=0.3)
L("globo", "A coast is the zone where land meets sea. Not a line. The water's edge moves with the tides.", mood="teach", shot="close",
  boardClear=True, board="COAST = ZONE where land meets sea", diagram=D_ZONES)
L("globo", "Above high tide, the backshore. Between the tides, the foreshore. Where waves break, the nearshore. Then offshore.", mood="teach", shot="close",
  board="Backshore · foreshore · nearshore")
L("globo", "The coast is a system. Inputs, like wave energy and sediment. Processes, like weathering, erosion, transport and deposition. And outputs, the landforms.", mood="teach", shot="close",
  boardClear=True, board="INPUTS → PROCESSES → OUTPUTS")
L("globo", "Your father's castle is a temporary output. And coasts matter. Roughly forty percent of people live within about a hundred kilometres of the sea.", mood="teach", shot="close",
  board="~40% of people live near the sea")
L("globo", "Singapore built out into the sea. About five hundred and eighty square kilometres in the nineteen sixties. About seven hundred and thirty five today. Roughly a quarter more.", mood="teach", shot="close",
  board="SG: ~580 → ~735 km² (about ¼ more)")
L("tara", "So Dad isn't reclaiming land. He's lending it to the sea.", mood="deadpan", shot="close")
L("globo", "The government used enormous amounts of sand. He used a bucket.", mood="eyeroll", shot="close", gap=0.4)

L("globo", "Lesson two. Waves are made by wind blowing over the sea.", mood="teach", shot="close",
  boardClear=True, board="WAVES: wind blowing over the sea")
L("globo", "Their size depends on wind speed, how long it blows, and the fetch. The distance of open water the wind blows over.", mood="teach", shot="close",
  board="Size: wind speed · duration · FETCH")
L("tara", "Our strait looks across to islands about twenty kilometres away. Cornwall faces the whole Atlantic.", mood="thinking", shot="close",
  board="Short fetch (~20 km) → small waves")
L("globo", "Thousands of kilometres of fetch. Much bigger waves.", mood="smug", shot="close",
  board="Long fetch (Atlantic) → BIG waves")
L("globo", "In shallow water, friction slows the bottom of the wave. The top keeps going, and topples over.", mood="teach", shot="close",
  boardClear=True, board="Base slowed by friction → wave BREAKS")
L("globo", "Water rushes up the beach, the swash. Gravity pulls it back, the backwash.", mood="teach", shot="close",
  board="SWASH up · BACKWASH down (gravity)")
L("tara", "I counted. Seven waves a minute. Low and gentle.", mood="happy", shot="close", prop="phone")
L("globo", "Constructive waves. About six to eight a minute. Strong swash. They build beaches.", mood="teach", shot="close",
  boardClear=True, board="Constructive: strong swash → BUILD", diagram=D_WAVES)
L("globo", "Until a storm. Destructive waves are tall, steep, about ten to fourteen a minute. Strong backwash. They drag the beach away.", mood="teach", shot="close",
  board="Destructive: strong backwash → ERODE")
L("tara", "The prevailing wind, where it blows from most often, is south west in Britain. Ours follows the monsoons.", mood="thinking", shot="close",
  board="Prevailing wind: UK SW · SG monsoons")


# ---------------- ACT 2: WEATHERING ----------------
card("MEANWHILE, AT THE WEATHER DESK", "Mum has entered a TV competition. Prize: a rice cooker.", 2.6)
scene("weatherdesk", [("mum", 360), ("tara", 760)])
L("mum", "Good evening! Tomorrow's weathering. Light showers, and the rocks will feel a bit sad.", mood="excited", shot="close", prop="umbrella")
L("tara", "Mum. Weathering isn't the weather forecast.", mood="deadpan", shot="close", gap=0.3)
poof("globo", 1050)
L("globo", "Lesson three. Weathering is the breakdown of rock in place. Erosion is when rock is worn away and removed, by a moving force like waves.", mood="teach", shot="close",
  boardClear=True, board="WEATHERING: rock broken IN PLACE")
L("mum", "So weathering loosens it. Erosion takes it away.", mood="thinking", shot="close", board="EROSION: worn away AND REMOVED")
L("globo", "Mechanical weathering. Freeze thaw. Water in a crack freezes and expands by about nine percent. It thaws, seeps deeper, and freezes again. Hundreds of times.", mood="teach", shot="close",
  boardClear=True, board="FREEZE–THAW: ice expands ~9%", diagram=D_FREEZE)
L("mum", "Like when I froze a full bottle of water to save on ice, and it cracked!", mood="shock", shot="close",
  board="Needs temps swinging around 0 °C")
L("tara", "It needs temperatures around zero. So, not Singapore.", mood="deadpan", shot="close", gap=0.3)
L("globo", "Here, salt weathering. Sea spray soaks into cracks, the water evaporates, and salt crystals grow and force the rock apart.", mood="teach", shot="close",
  boardClear=True, board="SALT: crystals grow, force rock apart")
L("globo", "Chemical weathering. Carbonation. Rain absorbs carbon dioxide and becomes a weak carbonic acid. It dissolves the calcium carbonate in limestone and chalk.", mood="teach", shot="close",
  board="CARBONATION: rain dissolves limestone")
L("tara", "And chemical weathering is fastest in warm, wet places. Like here.", mood="thinking", shot="close",
  board="Chemical: fastest in warm, wet places")
L("globo", "Biological weathering. Roots in cracks, burrowing animals, even shellfish that bore into rock.", mood="teach", shot="close",
  board="BIOLOGICAL: roots, burrows, borers")
L("mum", "So, tomorrow. Freeze thaw in England, carbonation here, and a light drizzle of shellfish.", mood="smug", shot="close", gap=0.3)
L("globo", "That is, horrifyingly, nearly correct.", mood="shock", shot="close")


# ---------------- ACT 3: EROSION PROCESSES AND MASS MOVEMENT ----------------
card("THE HOLDERNESS COAST · East Yorkshire, England", "Flown In By Globo Airways. Economy. Very economy.", 2.6)
scene("beach", [("tara", 260), ("dad", 600), ("globo", 960)], "HOLDERNESS · Boulder Clay Cliffs · North Sea")
L("globo", "This is one of Europe's fastest eroding coasts. Roughly one to two metres a year, on average.", mood="teach", shot="close",
  boardClear=True, board="Holderness: ~1–2 m lost a year")
L("dad", "Erosion. Four processes. Hydraulic, Abrasive, Attraction and Dissolution. Like a law firm.", mood="smug", shot="close")
sfx("buzzer")
L("globo", "Hydraulic action. Water hits the cliff and squeezes air into cracks. The air expands, and blocks break off.", mood="teach", shot="close",
  boardClear=True, board="HYDRAULIC ACTION: water + air in cracks", diagram=D_EROSION)
L("tara", "Abrasion. Waves throw sand and pebbles at the cliff, and scrape it away like sandpaper.", mood="happy", shot="close",
  board="ABRASION: pebbles thrown at cliff")
L("dad", "Attraction! When two rocks fall in love.", mood="excited", shot="close", board="ATTRITION: rocks hit rocks → rounder")
L("globo", "Attrition. Rocks in the waves knock into each other, and get smaller and rounder.", mood="eyeroll", shot="close")
L("globo", "And solution, or corrosion. Seawater dissolves minerals, especially the calcium carbonate in chalk and limestone.", mood="teach", shot="close",
  boardClear=True, board="SOLUTION: seawater dissolves minerals")
L("globo", "Why so fast, when Land's End faces the Atlantic and hardly changes? Rock type. Holderness is boulder clay, soft and loose, dumped by glaciers. Land's End is hard granite.", mood="teach", shot="close",
  board="Rate depends on ROCK TYPE first")
L("globo", "Then wave energy, fetch, beach width, weather, and people.", mood="teach", shot="close",
  board="+ wave energy · fetch · beach · people")
L("dad", "So I'm basically granite. Hard. Strong. Unbothered.", mood="smug", shot="close")
L("tara", "You're boulder clay, Dad.", mood="deadpan", shot="close", gap=0.3)
sfx("trombone")

L("globo", "Mass movement. Material moving down a slope under gravity. Rockfall. Rock falls freely off a steep cliff.", mood="teach", shot="close",
  boardClear=True, board="MASS MOVEMENT: down a slope, by gravity")
L("globo", "Sliding. A block slides down a straight slip plane, dipping towards the sea.", mood="teach", shot="close",
  board="ROCKFALL: falls free from steep face")
L("globo", "And slumping, or rotational slip. Rain soaks the clay, making it heavier, with less friction. Waves eat the toe. It slides down a curved plane, tilting back.", mood="teach", shot="close",
  board="SLIDE: block on a straight slip plane")
L("dad", "Slumping. Tilting back. That's me on the sofa after your mother's chapatis.", mood="happy", shot="close",
  boardClear=True, board="SLUMP: saturated clay, curved plane", diagram=D_SLUMP)
L("globo", "For once, a perfect example.", mood="smug", shot="close",
  board="Wet = heavier + less friction")
L("tara", "Like Holbeck Hall Hotel in Scarborough. In nineteen ninety three, after heavy rain, the cliff slumped, and part of the hotel fell.", mood="thinking", shot="close",
  board="Holbeck Hall Hotel, Scarborough, 1993")
L("dad", "Globo. What time is it in Singapore?", mood="worried", shot="close")
L("globo", "Ten past four.", mood="smug", shot="close", gap=0.4)

confess("dad", "VIKRAM RAO · Dad · Self-Described Coastal Engineer")
L("dad", "My castle has not been eroded. It has been redistributed. Technically, I am now an input.", mood="smug", gap=0.6)

# ---------------- RECAP ----------------
confess("globo", "GLOBO · Recap Globe · Still Finding Sand In Greenland")
L("globo", "Recap. One. A coast is a zone.", mood="teach", boardClear=True, board="1. Coast = zone · inputs → outputs")
L("globo", "Two. Constructive waves build. Destructive waves erode.", mood="teach", board="2. Constructive build · destructive erode")
L("globo", "Three. Weathering breaks rock in place.", mood="teach", board="3. Weathering: in place, nothing moved")
L("globo", "Four. Hydraulic action, abrasion, attrition, solution.", mood="teach", board="4. Hydraulic, abrasion, attrition, solution")
L("globo", "Five. Wet clay slumps. And never trust a man with a bucket.", mood="smug", board="5. Rockfall · slide · slump", gap=0.5)

# ---------------- BUTTON ----------------
card("EAST COAST PARK · SIX O'CLOCK", "High tide. Castle status: unknown.", 2.4)
scene("beach", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "Where's the castle? It was right here. A thousand years!", mood="shock", shot="close")
L("tara", "Swash, backwash, a bit of attrition. Your castle has gone offshore.", mood="deadpan", shot="close")
L("mum", "Good news! The bucket washed away too. Its lifetime is over, so I'm claiming the warranty!", mood="excited", shot="close", prop="bucket")
L("tara", "And you owe me a plate of prata.", mood="happy", shot="close")
L("dad", "This is an erosion of trust.", mood="sad", shot="close")
sfx("ding")
L("globo", "Correct. Slow at first, then all at once. Exactly like a cliff.", mood="smug", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "Same wind, same day. Which beach gets bigger waves: Atlantic-facing Cornwall or Singapore's strait? Why?", "CORNWALL", "longer fetch → more energy → bigger waves",
  "Question one. Same wind, one beach facing the Atlantic, one on Singapore's strait. Which gets bigger waves, and why?",
  "The Atlantic beach. A much longer fetch, so the wind passes more energy to the water.")
challenge(2, "Rocks carried by waves knock into each other and become smaller and rounder. Which process?", "ATTRITION", "rock hits rock (abrasion = rock hits cliff)",
  "Question two. Rocks in the waves knock into each other and get rounder. Which process?",
  "Attrition. Rock hitting rock. Rock hitting the cliff is abrasion.")
challenge(3, "Why does a clay cliff often slump after heavy rain?", "SATURATED", "wet → heavier + less friction → gravity wins",
  "Question three. Why does a clay cliff often slump after heavy rain?",
  "The clay is saturated. Heavier, with less friction. Gravity wins.")
end_card()
