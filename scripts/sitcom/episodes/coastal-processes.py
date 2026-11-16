# "Off The Map" (a Claude Sitcom) S01E10 "Shore Thing" (Topic: Coastal Processes)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="coastal-processes",
    logline="Dad builds a sandcastle 'with foundations' at East Coast Park and swears it will last a week. Atlas spins the family to the crumbling Holderness coast, Mum and Nani race flip-flops by longshore drift, and Atlas fails Mr Tan's erosion quiz.",
    names={"guest": "DR MALIK"},
    display={"P U B": "PUB"},
)

WAVES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">'
    '<rect x="10" y="10" width="245" height="200" rx="12" fill="#14532d"/>'
    '<text x="132" y="40" text-anchor="middle" font-family="sans-serif" font-size="21" fill="#86efac">CONSTRUCTIVE</text>'
    '<text x="22" y="78" font-family="sans-serif" font-size="19" fill="#f8fafc">• low, long waves</text>'
    '<text x="22" y="110" font-family="sans-serif" font-size="19" fill="#f8fafc">• 6–8 per minute</text>'
    '<text x="22" y="142" font-family="sans-serif" font-size="19" fill="#fde047">• SWASH &gt; backwash</text>'
    '<text x="22" y="174" font-family="sans-serif" font-size="19" fill="#f8fafc">• BUILDS beaches</text>'
    '<rect x="265" y="10" width="245" height="200" rx="12" fill="#7f1d1d"/>'
    '<text x="387" y="40" text-anchor="middle" font-family="sans-serif" font-size="21" fill="#fca5a5">DESTRUCTIVE</text>'
    '<text x="277" y="78" font-family="sans-serif" font-size="19" fill="#f8fafc">• tall, steep waves</text>'
    '<text x="277" y="110" font-family="sans-serif" font-size="19" fill="#f8fafc">• 10–14 per minute</text>'
    '<text x="277" y="142" font-family="sans-serif" font-size="19" fill="#fde047">• BACKWASH &gt; swash</text>'
    '<text x="277" y="174" font-family="sans-serif" font-size="19" fill="#f8fafc">• ERODES beaches</text>'
    '</svg>'
)

LAND = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<text x="10" y="34" font-family="sans-serif" font-size="22" fill="#f8fafc">Singapore land area (km²)</text>'
    '<text x="10" y="82" font-family="sans-serif" font-size="20" fill="#f8fafc">1960s</text>'
    '<rect x="110" y="58" width="261" height="36" fill="#fca5a5"/>'
    '<text x="382" y="82" font-family="sans-serif" font-size="20" fill="#fca5a5">~581</text>'
    '<text x="10" y="132" font-family="sans-serif" font-size="20" fill="#f8fafc">Today</text>'
    '<rect x="110" y="108" width="330" height="36" fill="#86efac"/>'
    '<text x="450" y="132" font-family="sans-serif" font-size="20" fill="#86efac">~735</text>'
    '<text x="10" y="182" font-family="sans-serif" font-size="20" fill="#fde047">East Coast Park: ~15 km, all reclaimed</text>'
    '</svg>'
)

DRIFT = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">'
    '<rect x="0" y="0" width="520" height="40" fill="#166534"/>'
    '<rect x="0" y="40" width="520" height="70" fill="#a16207"/>'
    '<rect x="0" y="110" width="520" height="120" fill="#1e3a8a"/>'
    '<text x="80" y="28" font-family="sans-serif" font-size="18" fill="#fde047">swash: at an angle</text>'
    '<text x="280" y="28" font-family="sans-serif" font-size="18" fill="#fca5a5">backwash: straight down</text>'
    '<text x="10" y="64" font-family="sans-serif" font-size="18" fill="#fef3c7">BEACH</text>'
    '<polygon points="400,108 440,70 440,108" fill="#fde68a"/>'
    '<rect x="440" y="40" width="10" height="95" fill="#78350f" stroke="#fde68a"/>'
    '<text x="456" y="66" font-family="sans-serif" font-size="18" fill="#fef3c7">groyne</text>'
    '<line x1="110" y1="105" x2="157" y2="58" stroke="#fde047" stroke-width="4"/>'
    '<polygon points="160,55 146,58 157,69" fill="#fde047"/>'
    '<line x1="164" y1="58" x2="164" y2="96" stroke="#fca5a5" stroke-width="4"/>'
    '<polygon points="164,107 158,95 170,95" fill="#fca5a5"/>'
    '<line x1="170" y1="105" x2="217" y2="58" stroke="#fde047" stroke-width="4"/>'
    '<polygon points="220,55 206,58 217,69" fill="#fde047"/>'
    '<line x1="224" y1="58" x2="224" y2="96" stroke="#fca5a5" stroke-width="4"/>'
    '<polygon points="224,107 218,95 230,95" fill="#fca5a5"/>'
    '<line x1="230" y1="105" x2="277" y2="58" stroke="#fde047" stroke-width="4"/>'
    '<polygon points="280,55 266,58 277,69" fill="#fde047"/>'
    '<line x1="284" y1="58" x2="284" y2="96" stroke="#fca5a5" stroke-width="4"/>'
    '<polygon points="284,107 278,95 290,95" fill="#fca5a5"/>'
    '<line x1="290" y1="105" x2="337" y2="58" stroke="#fde047" stroke-width="4"/>'
    '<polygon points="340,55 326,58 337,69" fill="#fde047"/>'
    '<line x1="344" y1="58" x2="344" y2="96" stroke="#fca5a5" stroke-width="4"/>'
    '<polygon points="344,107 338,95 350,95" fill="#fca5a5"/>'
    '<line x1="110" y1="135" x2="382" y2="135" stroke="#86efac" stroke-width="5"/>'
    '<polygon points="398,135 380,126 380,144" fill="#86efac"/>'
    '<text x="200" y="170" font-family="sans-serif" font-size="20" fill="#86efac">sediment drifts along</text>'
    '<line x1="30" y1="220" x2="68" y2="182" stroke="#f8fafc" stroke-width="3"/>'
    '<polygon points="74,176 60,180 71,191" fill="#f8fafc"/>'
    '<text x="88" y="220" font-family="sans-serif" font-size="18" fill="#f8fafc">prevailing wind</text>'
    '<text x="460" y="220" font-family="sans-serif" font-size="18" fill="#7dd3fc">SEA</text>'
    '</svg>'
)

EROSION = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">'
    '<rect x="10" y="10" width="245" height="90" rx="10" fill="#1e3a8a"/>'
    '<text x="132" y="44" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#7dd3fc">HYDRAULIC ACTION</text>'
    '<text x="132" y="78" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">force + air in cracks</text>'
    '<rect x="265" y="10" width="245" height="90" rx="10" fill="#7f1d1d"/>'
    '<text x="387" y="44" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fca5a5">ABRASION</text>'
    '<text x="387" y="78" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">rocks thrown AT cliff</text>'
    '<rect x="10" y="108" width="245" height="90" rx="10" fill="#14532d"/>'
    '<text x="132" y="142" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#86efac">ATTRITION</text>'
    '<text x="132" y="176" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">rocks hit each other</text>'
    '<rect x="265" y="108" width="245" height="90" rx="10" fill="#713f12"/>'
    '<text x="387" y="142" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde68a">SOLUTION</text>'
    '<text x="387" y="176" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">acids dissolve chalk</text>'
    '<text x="260" y="230" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">Hungry Alligators Always Snap</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("park", [("dad", 330), ("priya", 640)], caption="EAST COAST PARK · Singapore · Saturday · Low tide")
L("dad", "Behold. The finest sandcastle in East Coast Park history. Four towers, a moat, and foundations.", mood="smug", shot="close")
L("priya", "Foundations.", mood="deadpan", shot="close")
L("dad", "I dug down almost a whole hand. This is engineering. This castle will last a week.", mood="excited", shot="close")
L("priya", "Dad, the tide comes in twice a day.", mood="deadpan", shot="close")
L("dad", "Then it gets fourteen chances to admire me.", mood="smug", shot="close")
freeze("LASTS A WEEK, HE SAYS", 2.6, narrator="Narrator: Estimated castle lifespan, until about teatime.")
confess("priya", "PRIYA · 12 · Has Read The Tide Table")
L("priya", "My dad thinks the sea is a swimming pool with bad manners. It's actually the biggest earth-moving machine on the planet.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WAVES ----------------
scene("park", [("dad", 300), ("priya", 600)])
L("priya", "Atlas. You can come out of the beach bag now.", mood="neutral", shot="wide")
sfx("whoosh")
poof("atlas", 900)
L("atlas", "Finally. I have been in there with a curry puff. I now smell of curry puff.", mood="annoyed", shot="close")
L("atlas", "Waves are made by wind blowing over the sea. Friction drags the surface into ripples that grow.", mood="teach", shot="close",
  boardClear=True, board="Waves = wind + FRICTION on the sea")
L("atlas", "Out at sea it is the energy that travels forward. The water itself mostly goes round in circles.", mood="teach", shot="close",
  board="Waves move ENERGY, not water")
L("dad", "So the water just spins on the spot? Like you?", mood="thinking", shot="close")
L("atlas", "I rotate. With dignity.", mood="smug", shot="close", gap=0.4)
L("atlas", "In shallow water, friction with the sea bed slows the bottom of the wave. The top keeps going and breaks.", mood="teach", shot="close",
  board="Shallow sea bed slows base → wave breaks")
L("priya", "Wave size depends on three things. Wind speed, how long the wind blows, and the fetch.", mood="thinking", shot="close",
  board="Size: wind SPEED + DURATION + FETCH")
L("dad", "Fetch! Like a dog. The wind throws the wave and the wave fetches it back.", mood="excited", shot="close")
L("atlas", "No. Fetch is the distance of open water the wind blows over. Longer fetch, bigger waves.", mood="eyeroll", shot="close",
  board="Fetch = distance of open water")
L("atlas", "Cornwall faces thousands of kilometres of Atlantic. Huge waves. Singapore is sheltered by Malaysia, Sumatra and the Riau Islands. Small waves.", mood="teach", shot="close",
  boardClear=True, board="Cornwall: Atlantic fetch → big waves")
L("priya", "Except in the Northeast Monsoon, roughly December to March, when the east coast gets rough.", mood="thinking", shot="close",
  board="SG: short fetch · rough in NE monsoon")
L("atlas", "When a wave breaks, water rushes up the beach. That is the swash. It drains back down. That is the backwash.", mood="teach", shot="close",
  board="Swash = up the beach · Backwash = back down")
L("atlas", "Constructive waves are low and long, six to eight a minute. Strong swash, weak backwash. They build beaches.", mood="teach", shot="close",
  boardClear=True, diagram=WAVES)
L("atlas", "Destructive waves are tall and steep, ten to fourteen a minute. Weak swash, strong backwash. They drag the beach out to sea.", mood="teach", shot="close")

confess("atlas", "ATLAS · Desk Globe · Waterproof (Allegedly)")
L("atlas", "Dropped eleven times. Usually on Australia. Once into a paddling pool. I landed on the Pacific. Appropriate.", mood="bored", gap=0.5)

# ---------------- ACT 2: HOLDERNESS ----------------
scene("park", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("dad", "Show me a coast that's actually losing.", mood="determined", shot="close")
L("atlas", "Careful what you wish for. Hold on to your bucket.", mood="smug", shot="close")
sfx("whoosh")
scene("beach", [("priya", 240), ("dad", 480), ("atlas", 780)], caption="HOLDERNESS COAST · East Yorkshire, UK · Mappleton · 9 °C")
L("dad", "It's freezing! And the cliff is made of mud?", mood="shock", shot="close")
sfx("door")
poof("guest", 1080)
L("guest", "Mind the edge! I'm Doctor Malik, coastal scientist. That's boulder clay, soft rock left by the last ice age.", mood="happy", shot="close")
L("guest", "It loses about one point eight metres a year, along sixty one kilometres. One of Europe's fastest.", mood="teach", shot="close",
  boardClear=True, board="Holderness: 61 km · ~1.8 m lost per year")
L("guest", "About twenty nine villages have been lost to the sea here since Roman times.", mood="sad", shot="close",
  board="~29 villages lost since Roman times")
L("guest", "First, weathering weakens the cliff. Rock breaks down in place. Nothing is carried away yet.", mood="teach", shot="close",
  boardClear=True, board="Weathering = breakdown IN PLACE")
L("atlas", "Erosion wears rock away and removes it, with waves. If it moves, it is erosion.", mood="teach", shot="close",
  board="Erosion = worn away AND removed")
L("guest", "In winter we get freeze thaw. Water in cracks freezes, expands by about nine percent, and widens the crack.", mood="teach", shot="close",
  board="Freeze–thaw: ice expands ~9%")
L("priya", "Singapore never freezes. Hot and wet means chemical weathering. Weak acid in rain dissolves limestone and chalk.", mood="thinking", shot="close",
  board="Hot + wet SG → CHEMICAL (carbonation)")
L("guest", "And biological weathering. Plant roots in cracks. Burrowing rabbits.", mood="teach", shot="close",
  board="Biological: roots + burrowing animals")
L("dad", "Rabbits are attacking this cliff?", mood="shock", shot="close")
L("guest", "Rabbits, puffins and rain. Mostly rain.", mood="deadpan", shot="close", gap=0.4)
L("guest", "Then gravity finishes the job. Mass movement. Rain makes clay heavy and slippery, and waves undercut it.", mood="teach", shot="close",
  boardClear=True, board="Mass movement = downhill under GRAVITY")
L("atlas", "Rockfall drops bits off a steep face. Slumping slides wet clay down a curved surface. Sliding moves a block down a flat plane.", mood="teach", shot="close",
  board="Rockfall · Slump (curved) · Slide (flat)")
L("guest", "The clay isn't gone. Longshore drift carries it south to build Spurn Head, a spit about five kilometres long.", mood="teach", shot="close",
  board="Eroded clay → drift south → Spurn Head")
L("guest", "At Mappleton, in nineteen ninety one, two million pounds bought two rock groynes and rock armour. But they trap sand, so cliffs further south erode faster.", mood="worried", shot="close",
  board="Mappleton 1991: £2m, 2 rock groynes + armour")
L("dad", "Doctor Malik, do you sell sandcastle insurance?", mood="worried", shot="close")
L("guest", "Sir, on this coast, even the car park has a moving date.", mood="deadpan", shot="close", gap=0.4)

confess("dad", "DAD · Self-Declared Explorer · Has Been To Forty Airports")
L("dad", "I have been to forty countries. Well. Forty airports. None of them were falling into the sea.", mood="smug", gap=0.6)

# ---------------- ACT 3: EAST COAST PARK ----------------
card("MEANWHILE, BACK AT EAST COAST PARK", "Mum has a stopwatch. Nani has a flip-flop. This is war.", 2.6)
scene("park", [("mum", 240), ("nani", 460), ("priya", 680)])
L("mum", "Official longshore drift race. One flip-flop each. First to the breakwater wins.", mood="determined", shot="close", prop="book")
L("nani", "Darling, I raced along this coast before it existed. In the sixties the sea came up to Marine Parade Road.", mood="smug", shot="close")
sfx("whoosh")
poof("atlas", 980)
L("atlas", "Quite right. East Coast Park is about fifteen kilometres of land reclaimed from the late nineteen sixties. ", mood="teach", shot="close",
  boardClear=True, diagram=LAND)
L("mum", "Fascinating. Throw!", mood="excited", shot="wide")
sfx("ding")
L("nani", "Look. Up at an angle. Straight back down. Up at an angle. Straight down.", mood="excited", shot="close")
L("atlas", "Longshore drift. The prevailing wind brings waves in at an angle, so the swash carries sediment up the beach at that angle.", mood="teach", shot="close",
  boardClear=True, diagram=DRIFT)
L("atlas", "The backwash runs straight down, at right angles, because of gravity. So it zig-zags along the coast.", mood="teach", shot="close")
L("mum", "Mine's stopped! Why has mine stopped?", mood="annoyed", shot="close")
L("priya", "It's in the calm, shallow water behind the breakwater. It lost energy. That's deposition.", mood="deadpan", shot="close",
  boardClear=True, board="Deposition = sea LOSES energy, drops load")
L("atlas", "Breakwaters make sheltered bays where waves drop their sand. That keeps this beach in place.", mood="teach", shot="close",
  board="Breakwaters → calm bays → sand deposited")
L("nani", "And mine wins. I aimed for the strong swash. Experience, darling.", mood="smug", shot="close")
L("atlas", "The sea carries its load four ways. Traction rolls. Saltation bounces. Suspension carries. Solution dissolves.", mood="teach", shot="close",
  board="TSSS: roll · bounce · carried · dissolved")
L("mum", "So my flip-flop was doing saltation?", mood="thinking", shot="close")
L("atlas", "Your flip-flop is litter. Pick it up.", mood="deadpan", shot="close", gap=0.4)
L("nani", "But this new land is only sand. What stops the sea taking it back?", mood="worried", shot="close")
L("atlas", "Armour. Over seventy percent of the coastline has seawalls or rock revetments, sloping boulders that soak up wave energy.", mood="teach", shot="close",
  boardClear=True, board="Over 70% of coast: seawalls + revetments")
L("priya", "And sea level could rise up to about one metre by twenty one hundred. Thirty percent of our land is under five metres above the sea.", mood="worried", shot="close",
  board="Sea level up to ~1 m higher by 2100")
L("atlas", "Since twenty twenty, P U B has been the coastal protection agency. The bill could be a hundred billion dollars or more.", mood="teach", shot="close",
  board="PUB: coastal agency since 2020 · S$100bn+")
L("mum", "My list. Higher seawalls, tidal gates, and Long Island, about eight hundred hectares off East Coast.", mood="determined", shot="close", prop="book",
  board="Long Island idea: ~800 ha off East Coast")

# ---------------- EXAM SKILL: EROSION PROCESSES ----------------
scene("classroom", [("teacher", 300), ("priya", 640), ("atlas", 940)])
L("teacher", "Quick quiz. The four processes of marine erosion. Hydraulic action?", mood="teach", shot="close",
  boardClear=True, board="Marine erosion: four processes")
L("atlas", "Easy. The waves throw rocks at the cliff.", mood="smug", shot="close")
sfx("buzzer")
L("teacher", "Wrong, globe. That's abrasion. The most common mix-up in the exam.", mood="annoyed", shot="close")
L("teacher", "Hydraulic action is the force of the water, plus air squashed into cracks that then expands explosively.", mood="teach", shot="close",
  board="Hydraulic: water force + air in cracks")
L("priya", "Abrasion is pebbles hurled at the cliff, like sandpaper. Attrition is rocks knocking into each other, getting smaller and rounder.", mood="thinking", shot="close",
  board="Abrasion: AT cliff · Attrition: EACH OTHER")
L("teacher", "And solution. Weak acids in seawater dissolve limestone and chalk. Hungry Alligators Always Snap.", mood="teach", shot="close",
  boardClear=True, diagram=EROSION)
L("teacher", "Who brought a globe to class? Again?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Still Slightly Sandy")
L("atlas", "Recap. First. Wave size depends on wind speed, wind duration and fetch.", mood="teach",
  boardClear=True, board="1. Waves: wind speed + duration + fetch")
L("atlas", "Second. Constructive waves build. Destructive waves erode.", mood="teach",
  board="2. Constructive builds · destructive erodes")
L("atlas", "Third. Weathering happens in place. Erosion removes. Gravity does mass movement.", mood="teach",
  board="3. Weathering in place · erosion removes")
L("atlas", "Fourth. Four erosion processes, then longshore drift and deposition.", mood="teach",
  board="4. H-A-A-S · longshore drift · deposition")
L("atlas", "Finally. Singapore's coast is armoured, and the sea is rising.", mood="smug",
  board="5. SG: 70%+ armoured · up to ~1 m by 2100", gap=0.5)

# ---------------- TAG ----------------
scene("park", [("dad", 260), ("priya", 540), ("atlas", 880)])
L("dad", "My castle. My beautiful castle. It's gone.", mood="sad", shot="close")
L("atlas", "Not gone. Longshore drift. Your towers are now deposited behind that breakwater.", mood="smug", shot="close")
L("dad", "So technically, my castle now covers the whole bay. Biggest castle in Singapore.", mood="excited", shot="close")
sfx("trombone")
L("priya", "It lasted until teatime.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Then he spins smugly.", 3.0)
challenge(1, "The Holderness coast erodes about 1.8 m per year. How much is lost in 10 years?", "About 18 m",
  "1.8 m × 10 years = 18 m",
  "Question one. Holderness erodes about one point eight metres a year. How much is lost in ten years?",
  "About eighteen metres. Always write the units.")
challenge(2, "Waves hurl pebbles against the foot of a cliff. Abrasion or attrition?", "Abrasion",
  "Rocks thrown AT the cliff = abrasion",
  "Question two. Waves hurl pebbles at a cliff. Abrasion or attrition?",
  "Abrasion. Rocks thrown at the cliff. Attrition is rocks hitting each other.")
challenge(3, "Singapore grew from about 581 km² to about 735 km². What is the percentage increase?", "About 26.5%",
  "(735 − 581) ÷ 581 × 100 ≈ 26.5%",
  "Question three. Singapore grew from about five hundred and eighty one square kilometres to seven hundred and thirty five. Percentage increase?",
  "About twenty six point five percent. Change, divided by original, times one hundred.")
end_card()
