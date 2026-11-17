# "Totally Raotional: Off The Map" S02E17 "Turn On All Four Taps" (Topic: Sustainable Cities) — SEASON FINALE
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: what-is-sustainable, singapore-success, las-vegas, eco-city-design.

EP = dict(topic="sustainable-cities",
          logline="Dad enters Tara's eco-city competition with 'Vikram Vegas', a desert city of lawns and fountains. Globo explains "
                  "the three pillars, Singapore's Four National Taps, why Las Vegas pays people to rip up lawns, and how to score an eco-city.")

D_PILLARS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<circle cx="200" cy="80" r="66" fill="#f472b6" fill-opacity="0.45"/>
<circle cx="320" cy="80" r="66" fill="#fbbf24" fill-opacity="0.45"/>
<circle cx="260" cy="130" r="66" fill="#4ade80" fill-opacity="0.45"/>
<text x="168" y="62" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fff" text-anchor="middle">SOCIAL</text>
<text x="356" y="62" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fff" text-anchor="middle">ECONOMIC</text>
<text x="260" y="182" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fff" text-anchor="middle">ENVIRONMENTAL</text>
<text x="260" y="104" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">SUSTAINABLE</text>
<text x="70" y="150" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">people</text>
<text x="450" y="150" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">money</text>
<text x="450" y="190" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">all three at once</text>
</svg>"""

D_TAPS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">
<text x="10" y="22" font-family="sans-serif" font-size="16" font-weight="bold" fill="#e0f2fe">THE FOUR NATIONAL TAPS</text>
<text x="10" y="62" font-family="sans-serif" font-size="15" fill="#fff">1 Local catchment</text>
<text x="200" y="62" font-family="sans-serif" font-size="14" fill="#7dd3fc">rain → drains → 17 reservoirs</text>
<text x="10" y="98" font-family="sans-serif" font-size="15" fill="#fff">2 Imported water</text>
<text x="200" y="98" font-family="sans-serif" font-size="14" fill="#7dd3fc">Johor · agreement to 2061</text>
<text x="10" y="134" font-family="sans-serif" font-size="15" fill="#fff">3 NEWater</text>
<rect x="200" y="120" width="240" height="18" fill="#22d3ee"/>
<text x="448" y="134" font-family="sans-serif" font-size="14" fill="#fff">≤ ~40%</text>
<text x="10" y="170" font-family="sans-serif" font-size="15" fill="#fff">4 Desalination</text>
<rect x="200" y="156" width="150" height="18" fill="#a78bfa"/>
<text x="358" y="170" font-family="sans-serif" font-size="14" fill="#fff">≤ ~25%</text>
<text x="10" y="200" font-family="sans-serif" font-size="13" fill="#fde047">Taps 3 + 4 don't need rain → drought-proof</text>
</svg>"""

D_LOOP = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">
<rect x="10" y="140" width="170" height="56" rx="10" fill="#0369a1"/>
<text x="95" y="166" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">LAKE MEAD</text>
<text x="95" y="186" font-family="sans-serif" font-size="13" fill="#e0f2fe" text-anchor="middle">~90% of the water</text>
<rect x="300" y="20" width="200" height="50" rx="10" fill="#334155"/>
<text x="400" y="50" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">LAS VEGAS</text>
<path d="M120 140 Q150 50 296 44" stroke="#7dd3fc" stroke-width="4" fill="none"/>
<path d="M296 44 l-14 -6 l2 14z" fill="#7dd3fc"/>
<path d="M360 72 Q300 160 186 168" stroke="#4ade80" stroke-width="4" fill="none"/>
<path d="M186 168 l14 -8 l0 14z" fill="#4ade80"/>
<text x="250" y="120" font-family="sans-serif" font-size="14" font-weight="bold" fill="#4ade80">INDOOR: treated, returned</text>
<path d="M450 72 Q470 110 450 150" stroke="#f87171" stroke-width="4" fill="none" stroke-dasharray="6 5"/>
<text x="505" y="176" font-family="sans-serif" font-size="14" font-weight="bold" fill="#f87171" text-anchor="end">OUTDOOR: evaporates</text>
<text x="505" y="196" font-family="sans-serif" font-size="14" font-weight="bold" fill="#f87171" text-anchor="end">= LOST</text>
</svg>"""

D_RUBRIC = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">
<text x="10" y="22" font-family="sans-serif" font-size="16" font-weight="bold" fill="#e0f2fe">8 CRITERIA × 0–3 = /24</text>
<g font-family="sans-serif" font-size="15" fill="#fff">
<text x="10" y="58">Transport</text><text x="140" y="58">Energy</text><text x="270" y="58">Water</text><text x="400" y="58">Waste</text>
<text x="10" y="94">Housing</text><text x="140" y="94">Green space</text><text x="270" y="94">Community</text><text x="400" y="94">Economy</text>
</g>
<g font-family="sans-serif" font-size="14" fill="#fde047">
<text x="10" y="130">0 not addressed · 1 vague · 2 explained</text>
<text x="10" y="154">3 linked + real example + trade-off</text>
<text x="10" y="180">% = score ÷ 24 × 100</text>
</g>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("tara", "Mum. The eco city competition is on Friday. My team needs a city that doesn't waste water.", mood="determined", shot="close", prop="tablet")
L("mum", "Perfect! The water bill has a rebate if we use ten percent less. A discount, for using less!", mood="excited", shot="close", prop="phone")
L("tara", "Mum. That is just a smaller bill.", mood="deadpan", shot="close", gap=0.4)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Family. I'm entering the competition too. Parents' category. My city is called Vikram Vegas.", mood="smug", shot="close", prop="map")
L("dad", "It's in a desert. Every home gets a lawn, a fountain and a pool.", mood="smug", shot="close")
L("tara", "Where does the water come from?", mood="deadpan", shot="close")
L("dad", "The tap, Tara. Honestly. What do they teach you?", mood="smug", shot="close")
freeze("\"THE TAP, TARA.\"", 2.4, narrator="Narrator: The tap would like to be left out of this.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "Season finale. And my father is designing a desert full of lawns.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WHAT MAKES A CITY SUSTAINABLE? ----------------
scene("kitchen", [("tara", 380)])
L("tara", "One last time. Opening the drawer.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "The season finale, and you still need me. Also, who keeps leaving chapati crumbs in my drawer?", mood="bored", shot="close")
L("tara", "Globo, Dad's eco city is a desert full of lawns.", mood="worried", shot="two")
L("globo", "Sustainable development. The Brundtland Report, nineteen eighty seven. Meeting the needs of the present, without compromising the ability of future generations to meet their own needs.", mood="teach", shot="close",
  boardClear=True, board="SUSTAINABLE: meet today's needs without")
L("tara", "Live well today, without leaving a mess for later.", mood="thinking", shot="close", board="harming future generations (Brundtland 1987)")
L("globo", "Three pillars. Social, economic and environmental. People, money and nature. A sustainable city passes all three at once.", mood="teach", shot="close",
  boardClear=True, board="3 PILLARS: social · economic · environmental", diagram=D_PILLARS)
sfx("door")
scene("kitchen", [("tara", 260), ("globo", 640), ("dad", 980)])
L("dad", "Vikram Vegas passes economic. A giant motorway. No traffic jams!", mood="smug", shot="close")
L("globo", "For two years. Then more people drive and the jams come back worse. One pillar out of three is not sustainable.", mood="eyeroll", shot="close",
  board="One pillar only → NOT sustainable")
L("globo", "About fifty seven percent of people now live in urban areas. And UN estimates suggest cities produce roughly seventy percent of carbon dioxide emissions.", mood="teach", shot="close",
  boardClear=True, board="~57% of people urban (2023)")
L("tara", "Fix the cities, and you fix the planet.", mood="happy", shot="close", board="Cities: ~70% of CO₂ (UN estimate)")
L("globo", "Your ecological footprint is the land and sea needed to supply what you use and absorb your waste. Humanity uses roughly one point seven Earths a year.", mood="teach", shot="close",
  board="Footprint ÷ biocapacity: we use ~1.7 Earths")
L("dad", "One point seven Earths? Is there a discount on the second one?", mood="happy", shot="close")
L("tara", "Dad. There is no second one.", mood="deadpan", shot="close")
sfx("trombone")

confess("globo", "GLOBO · Retired Classroom Globe · Season Finale Guest Of Honour")
L("globo", "I am the only Earth in this house. And they keep me with the takeaway menus.", mood="smug", gap=0.5)

# ---------------- ACT 2: SINGAPORE ----------------
card("MEANWHILE, AT MARINA BARRAGE", "Mum has found a free water refill station", 2.4)
scene("park", [("mum", 300), ("tara", 620), ("globo", 960)], "MARINA BARRAGE · Singapore · Flown In By Globo Airways")
L("mum", "It rains here every afternoon! How can Singapore be short of water?", mood="thinking", shot="close", prop="umbrella")
L("globo", "Rain only helps if you can store it. Singapore is tiny, with no big rivers or lakes. So P U B spread the risk across four sources.", mood="teach", shot="close",
  boardClear=True, board="FOUR NATIONAL TAPS (PUB)", diagram=D_TAPS)
L("tara", "Tap one, local catchment. Rain flows through drains into reservoirs, like this one.", mood="happy", shot="close",
  board="1 Catchment · 2 Imported from Johor")
L("globo", "Tap two, water imported from Johor, in Malaysia. The agreement from nineteen sixty two runs until twenty sixty one.", mood="teach", shot="close")
L("mum", "Four taps? Buy three, get the fourth free?", mood="excited", shot="close")
L("globo", "Tap three, new water. Used water, cleaned with membranes and ultraviolet light. Up to about forty percent of demand.", mood="teach", shot="close",
  board="3 NEWater ~40% · 4 Desalination ~25%")
L("mum", "Used water? From the toilet?", mood="shock", shot="close")
L("globo", "Cleaner than your tea, madam. Tap four, desalination, taking salt out of seawater. Up to about twenty five percent, but energy hungry.", mood="smug", shot="close")
L("tara", "And those two don't need rain, so they protect us in a drought.", mood="excited", shot="close")
L("globo", "Transport. Electronic Road Pricing, since nineteen ninety eight. Busy road, busy time, the gantry charges you. And to own a car, you must win a pricey Certificate of Entitlement.", mood="teach", shot="close",
  boardClear=True, board="ERP (1998): pay at gantries at busy times")
L("mum", "Something I can't get a discount on? Fine. MRT it is.", mood="sad", shot="close", board="COE: bid to own a car → fewer cars")
L("globo", "Price signals. And around eighty percent of residents live in H D B flats, in planned towns with schools, hawker centres and an MRT station.", mood="teach", shot="close",
  board="~80% in HDB flats · planned new towns")
L("tara", "And City in Nature. Over three hundred kilometres of park connectors.", mood="happy", shot="close",
  board="City in Nature: 300+ km park connectors")
L("globo", "The Green Plan twenty thirty wants a million more trees. And Tengah, the Forest Town, has a car free centre.", mood="teach", shot="close",
  boardClear=True, board="Green Plan 2030: +1 million trees")
L("globo", "But Singapore is not finished. It still imports most of its food and energy.", mood="teach", shot="close",
  board="Tengah: car-free centre · ✘ imports food")

confess("mum", "MUM · Deal Hunter · Has Never Paid Full Price")
L("mum", "Toilet water you can drink. The ultimate second hand bargain.", mood="smug", gap=0.5)

# ---------------- ACT 3: LAS VEGAS ----------------
card("MEANWHILE, IN THE DESERT", "Dad is scouting land for Vikram Vegas", 2.4)
scene("desert", [("dad", 300), ("tara", 620), ("globo", 960)], "LAS VEGAS · Mojave Desert, Nevada, USA · Flown In By Globo Airways")
L("dad", "Las Vegas! Fountains and pools, in a desert. My inspiration.", mood="excited", shot="close", prop="sunglasses")
L("globo", "About a hundred millimetres of rain a year, summers over forty degrees, and over two million people.", mood="teach", shot="close",
  boardClear=True, board="Mojave Desert: ~100 mm rain/yr, 40 °C+")
L("tara", "So where does the water come from?", mood="thinking", shot="close", board="Fast growth: now 2 million+ people")
L("globo", "About ninety percent from Lake Mead, behind the Hoover Dam, on the Colorado River. Which is in a record drought.", mood="teach", shot="close",
  board="~90% of water from LAKE MEAD")
L("tara", "In July twenty twenty two, Lake Mead was only about a quarter full.", mood="worried", shot="close",
  boardClear=True, board="Drought: record low, July 2022")
L("dad", "Then my plan is simple. More lawns. Green is eco.", mood="determined", shot="close")
L("globo", "They pay people to rip lawns out and plant desert plants instead.", mood="eyeroll", shot="close",
  boardClear=True, board="Rebates to rip out lawns", diagram=D_LOOP)
L("tara", "Because indoor water is treated and returned to Lake Mead. Lawn water just evaporates.", mood="excited", shot="close",
  board="Indoor water returned · outdoor LOST")
L("dad", "So, is Las Vegas sustainable?", mood="worried", shot="close")
L("globo", "Better than before, but still at serious risk. One shrinking river, and everyone drives.", mood="teach", shot="close",
  board="Better, but still at serious risk")
sfx("trombone")

confess("dad", "VIKRAM RAO · Dad · Self-Described Urban Visionary")
L("dad", "Vikram Vegas, version two. No lawns. Just one fountain. That you're not allowed to turn on.", mood="smug", gap=0.6)

# ---------------- ACT 4: DESIGNING AN ECO-CITY ----------------
card("FRIDAY", "The Inter-Class Eco-City Competition", 2.4)
scene("classroom", [("tara", 240), ("teacher", 500), ("dad", 780)])
L("teacher", "Each design scores zero to three on eight criteria, from transport and energy to housing and community.", mood="happy", shot="close",
  boardClear=True, board="8 criteria × 0–3 → total /24", diagram=D_RUBRIC)
L("dad", "Vikram Vegas has solar panels and a car park under every block.", mood="smug", shot="close")
L("tara", "Dad, your city still makes everyone drive. Features must work together.", mood="deadpan", shot="close")
poof("globo", 1040)
L("globo", "Real examples. Curitiba, in Brazil, built one of the first bus rapid transit systems. And people swap recycling for fruit and vegetables.", mood="teach", shot="close",
  boardClear=True, board="CURITIBA: bus rapid transit · Green Exchange")
L("dad", "Free vegetables? Your mother would move there tomorrow.", mood="excited", shot="close")
L("globo", "In Copenhagen, about half of trips to work or study are by bike. Vauban, in Freiburg, sits on old army barracks, a brownfield site.", mood="teach", shot="close",
  board="COPENHAGEN: bikes · VAUBAN: brownfield")
L("tara", "And Masdar City was scaled back after the two thousand eight crash. Fixing old cities often helps more.", mood="thinking", shot="close",
  board="MASDAR: scaled back after 2008")
L("teacher", "Results. Tara's team, eighteen out of twenty four.", mood="happy", shot="close",
  boardClear=True, board="Tara's team: 18 ÷ 24 × 100 = 75%")
L("tara", "Seventy five percent. Next, we fix our weakest one, waste.", mood="happy", shot="close")
L("teacher", "And Vikram Vegas, four out of twenty four.", mood="neutral", shot="close", board="Vikram Vegas: 4/24 ≈ 17%")
L("dad", "Four points! A personal best.", mood="excited", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("globo", "GLOBO · Recap Globe · Spinning Slowly For Dad, One Last Time")
L("globo", "Recap. One. Sustainable means all three pillars, now and for the future.", mood="teach", boardClear=True, board="1. Brundtland + 3 pillars, all at once")
L("globo", "Two. Humanity's footprint is roughly one point seven Earths.", mood="teach", board="2. Footprint: humanity ≈ 1.7 Earths")
L("globo", "Three. Singapore's Four National Taps, road pricing and H D B towns.", mood="teach", board="3. 4 Taps · ERP + COE · HDB · nature")
L("globo", "Four. Las Vegas drinks from one shrinking lake. Water on lawns is lost.", mood="teach", board="4. Las Vegas: Lake Mead · rip out lawns")
L("globo", "Five. A good eco city links its features. Use real examples.", mood="smug", board="5. Eco-city: 8 criteria · link features", gap=0.5)

# ---------------- BUTTON ----------------
card("THAT EVENING", "Back home. All four taps accounted for.", 2.2)
scene("living", [("tara", 260), ("mum", 600), ("dad", 940)])
L("mum", "We used twelve percent less water. We get the rebate!", mood="excited", shot="close", prop="phone")
L("dad", "That was me. I turned off my fountain.", mood="smug", shot="close")
L("tara", "Dad, the fountain was never on. It's a drawing.", mood="deadpan", shot="close")
L("dad", "Exactly. Zero water, maximum vision.", mood="smug", shot="close")
sfx("ding")
L("globo", "And that's the season. Back in the drawer. And somebody, please, clear out the chapati crumbs.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks all holiday.", 3.0)
challenge(1, "Which TWO National Taps don't depend on rain?", "NEWATER+DESAL", "both make water without rain → drought-proof",
  "Question one. Which two of the Four National Taps do not depend on rain?",
  "New water and desalination. They keep running in a drought.")
challenge(2, "Why does Las Vegas pay people to rip out lawns?", "OUTDOOR = LOST", "indoor water → treated → back to Lake Mead",
  "Question two. Why does Las Vegas pay people to rip out their lawns?",
  "Lawn water evaporates and is lost. Indoor water is cleaned and returned to Lake Mead.")
challenge(3, "An eco-city design scores 18 out of 24. What percentage is that?", "75%", "18 ÷ 24 = 0.75 → × 100 = 75%",
  "Question three. An eco city design scores eighteen out of twenty four. What percentage is that?",
  "Seventy five percent. Eighteen divided by twenty four is zero point seven five.")
end_card()
