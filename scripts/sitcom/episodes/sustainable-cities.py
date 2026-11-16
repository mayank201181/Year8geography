# "Off The Map" (a Claude Sitcom) S01E15 "Green Day" (Topic: Sustainable Cities & Eco-City Design) — season finale
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="sustainable-cities",
    logline="Priya's class enters the inter-class Eco City competition and Dad volunteers his design: a car park with a fountain. Atlas spins the family to Curitiba and Freiburg, Nani remembers 1960s Singapore, and Mr Tan judges with the three pillars.",
    names={"guest": "RAFAEL", "guest2": "ANNA"},
    display={"New Water": "NEWater", "H D B": "HDB", "M R T": "MRT", "E R P": "ERP", "C O E": "COE",
             "S D G": "SDG", "B R T": "BRT", "U A E": "UAE"},
)

PILLARS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">'
    '<circle cx="210" cy="88" r="72" fill="#f87171" fill-opacity="0.45" stroke="#fca5a5" stroke-width="2"/>'
    '<circle cx="310" cy="88" r="72" fill="#60a5fa" fill-opacity="0.45" stroke="#7dd3fc" stroke-width="2"/>'
    '<circle cx="260" cy="162" r="72" fill="#4ade80" fill-opacity="0.45" stroke="#86efac" stroke-width="2"/>'
    '<text x="80" y="60" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#fca5a5">SOCIAL</text>'
    '<text x="80" y="86" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">people</text>'
    '<text x="445" y="60" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#7dd3fc">ECONOMIC</text>'
    '<text x="445" y="86" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">jobs, money</text>'
    '<text x="430" y="200" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#86efac">ENVIRONMENTAL</text>'
    '<text x="430" y="226" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">air, water, nature</text>'
    '<text x="260" y="122" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#fde047">SUSTAINABLE</text>'
    '</svg>'
)

GREEN = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170">'
    '<text x="10" y="32" font-family="sans-serif" font-size="22" fill="#f8fafc">Curitiba: green space per person</text>'
    '<text x="10" y="84" font-family="sans-serif" font-size="20" fill="#f8fafc">Early 1970s</text>'
    '<rect x="150" y="62" width="6" height="32" fill="#fca5a5"/>'
    '<text x="166" y="86" font-family="sans-serif" font-size="20" fill="#fca5a5">under 1 m²</text>'
    '<text x="10" y="138" font-family="sans-serif" font-size="20" fill="#f8fafc">Today</text>'
    '<rect x="150" y="116" width="350" height="32" fill="#86efac"/>'
    '<text x="490" y="140" text-anchor="end" font-family="sans-serif" font-size="20" fill="#14532d">about 50 m²</text>'
    '</svg>'
)

FOOTPRINT = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<text x="10" y="32" font-family="sans-serif" font-size="22" fill="#f8fafc">Global hectares (gha) per person</text>'
    '<text x="10" y="84" font-family="sans-serif" font-size="20" fill="#f8fafc">We use</text>'
    '<rect x="170" y="62" width="312" height="32" fill="#fca5a5"/>'
    '<text x="472" y="86" text-anchor="end" font-family="sans-serif" font-size="20" fill="#111827">about 2.6</text>'
    '<text x="10" y="138" font-family="sans-serif" font-size="20" fill="#f8fafc">Earth supplies</text>'
    '<rect x="170" y="116" width="192" height="32" fill="#86efac"/>'
    '<text x="352" y="140" text-anchor="end" font-family="sans-serif" font-size="20" fill="#111827">about 1.6</text>'
    '<text x="10" y="186" font-family="sans-serif" font-size="20" fill="#fde047">Overshoot: living like we have 1.7 Earths</text>'
    '</svg>'
)

MATRIX = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">'
    '<text x="10" y="30" font-family="sans-serif" font-size="20" fill="#fde047">Criterion (weight)</text>'
    '<text x="330" y="30" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#86efac">Class</text>'
    '<text x="455" y="30" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fca5a5">Dad</text>'
    '<line x1="10" y1="42" x2="510" y2="42" stroke="#f8fafc" stroke-width="2"/>'
    '<text x="10" y="74" font-family="sans-serif" font-size="19" fill="#f8fafc">Environment ×3</text>'
    '<text x="330" y="74" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">5 → 15</text>'
    '<text x="455" y="74" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">1 → 3</text>'
    '<text x="10" y="108" font-family="sans-serif" font-size="19" fill="#f8fafc">Social ×2</text>'
    '<text x="330" y="108" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">4 → 8</text>'
    '<text x="455" y="108" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">1 → 2</text>'
    '<text x="10" y="142" font-family="sans-serif" font-size="19" fill="#f8fafc">Economic ×2</text>'
    '<text x="330" y="142" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">4 → 8</text>'
    '<text x="455" y="142" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">3 → 6</text>'
    '<text x="10" y="176" font-family="sans-serif" font-size="19" fill="#f8fafc">Feasibility ×1</text>'
    '<text x="330" y="176" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">3 → 3</text>'
    '<text x="455" y="176" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">5 → 5</text>'
    '<line x1="10" y1="192" x2="510" y2="192" stroke="#f8fafc" stroke-width="2"/>'
    '<text x="10" y="226" font-family="sans-serif" font-size="20" fill="#fde047">TOTAL (out of 40)</text>'
    '<text x="330" y="226" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="#86efac">34</text>'
    '<text x="455" y="226" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="#fca5a5">16</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("mum", 260), ("dad", 560), ("priya", 860)])
L("dad", "Big news. Priya's class is in the Eco City competition, and I've volunteered my design.", mood="excited", shot="close", prop="tablet")
L("priya", "Nobody asked you.", mood="deadpan", shot="close")
L("mum", "I asked him. It was the only way to stop him helping with my checklist.", mood="smug", shot="close")
L("dad", "Behold. A giant car park. Six thousand spaces. And right in the middle...", mood="smug", shot="close", prop="tablet")
L("priya", "Please don't say fountain.", mood="worried", shot="close")
L("dad", "A fountain.", mood="excited", shot="close", gap=0.3)
freeze("DAD'S ECO CITY", 2.6, narrator="Narrator: The fountain is lit by forty floodlights. All diesel.")
confess("priya", "PRIYA · 12 · Class Eco Rep · Related To Dad")
L("priya", "Mr Tan is judging with a rubric. Dad's design would break the rubric.", mood="deadpan")
L("priya", "I need someone older, wiser and rounder than Dad. Luckily, he lives on our bookshelf.", mood="smug", gap=0.6)

title()

# ---------------- ACT 1: WHAT IS SUSTAINABLE? ----------------
scene("living", [("priya", 260), ("dad", 560)])
L("priya", "Atlas! Emergency. Dad has designed a city.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 880)
L("atlas", "A car park with a fountain. I have been dropped eleven times, and this hurts more.", mood="annoyed", shot="close")
L("dad", "But it's green! Well, it will be. I'm going to paint it.", mood="smug", shot="close")
L("atlas", "Green paint is not sustainability. Start with the Brundtland Report, nineteen eighty seven.", mood="teach", shot="close",
  boardClear=True, board="Brundtland Report (UN, 1987)")
L("atlas", "Meet the needs of the present without compromising the ability of future generations to meet their own needs.", mood="teach", shot="close",
  board="Meet needs NOW, without harming the FUTURE")
L("priya", "So use things today, but don't use them up. Unlike Dad and the last slice of cake.", mood="deadpan", shot="close")
L("dad", "That slice was compromised. By me.", mood="smug", shot="close", gap=0.4)
L("atlas", "We judge a city on three pillars. Social: people healthy, safe and housed. Economic: jobs and decent incomes.", mood="teach", shot="close",
  boardClear=True, diagram=PILLARS)
L("atlas", "Environmental: clean air and water, low carbon, green space. A sustainable city needs all three to overlap.", mood="teach", shot="close",
  board="All three pillars must overlap")
L("priya", "So a green city that only the rich can afford still fails.", mood="thinking", shot="close")
L("atlas", "Correct. And in twenty fifteen, the United Nations set S D G eleven: inclusive, safe, resilient, sustainable cities.", mood="teach", shot="close",
  board="SDG 11 (2015): inclusive, safe, resilient")
L("atlas", "Now score the car park. Social? Nobody lives there. Environmental? Six thousand cars.", mood="eyeroll", shot="close")
L("dad", "Economic? Parking fees!", mood="excited", shot="close")
L("atlas", "One pillar out of three. A stool with one leg. Sit on it and see what happens.", mood="deadpan", shot="close", gap=0.4)
L("atlas", "Planners use a toolkit. Public transport, cycling, green space, renewables, water recycling, less waste, affordable housing.", mood="teach", shot="close",
  boardClear=True, board="Transport · cycling · green · energy")
L("priya", "Most help more than one pillar. Cycling is low carbon, healthy and cheap.", mood="happy", shot="close",
  board="Water · waste · housing · community")

confess("atlas", "ATLAS · Desk Globe · Varnished For The Finale")
L("atlas", "It is the season finale, so I had a fresh coat of varnish. Then Dad sneezed on me. Twice.", mood="bored")
L("atlas", "Somewhere under that sneeze is Brazil. Let us go and find it.", mood="smug", gap=0.5)

# ---------------- ACT 2: CURITIBA AND VAUBAN ----------------
scene("living", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("dad", "Brazil? But only rich cities can afford eco stuff.", mood="thinking", shot="close")
L("atlas", "A myth. Hold on. Not to my equator. It is still wet.", mood="smug", shot="close")
sfx("whoosh")
scene("city", [("priya", 220), ("dad", 460), ("atlas", 760)], caption="CURITIBA · Brazil · Bus Rapid Transit")
sfx("door")
poof("guest", 1060)
L("guest", "Welcome to Curitiba! I'm Rafael, a transport planner. We couldn't afford a metro. So we made buses behave like one.", mood="happy", shot="close")
L("atlas", "Bus Rapid Transit. The world's first full system, nineteen seventy four, under Mayor Jaime Lerner.", mood="teach", shot="close",
  boardClear=True, board="Curitiba: world's first full BRT (1974)")
L("guest", "Own lanes. Tube stations from nineteen ninety one, where you pay first. Our longest buses carry about two hundred and fifty people.", mood="teach", shot="close",
  board="Own lanes · tube stations (1991) · 250")
L("guest", "Instead of concrete flood channels, we made river valleys into parks, with lakes that hold floodwater.", mood="teach", shot="close",
  boardClear=True, diagram=GREEN)
L("guest", "Green space rose from under one square metre per person to about fifty. Sheep mow some of the grass.", mood="smug", shot="close",
  board="Flood parks: <1 m² → ~50 m² per person")
L("atlas", "Sheep. Employed by a city. More useful than your fountain.", mood="deadpan", shot="close", gap=0.3)
L("guest", "And since nineteen ninety one, the Green Exchange. Four kilos of recycling gets you one kilo of fresh food.", mood="teach", shot="close",
  board="Green Exchange: 4 kg recycling = 1 kg food")
L("priya", "All three pillars. Cleaner streets, food for poorer families, business for farmers.", mood="excited", shot="close")
L("atlas", "Problems? Crowded buses at peak times. Always say so. Now, Germany.", mood="teach", shot="close")
sfx("whoosh")
scene("ecocity", [("priya", 220), ("dad", 460), ("atlas", 760)], caption="VAUBAN · Freiburg, Germany · Car-free district")
poof("guest2", 1060)
L("guest2", "Hello! I'm Anna, from Forum Vauban. Cars park at the edge, in an expensive solar garage. So about seventy percent of households have no car.", mood="smug", shot="close",
  boardClear=True, board="Vauban: about 70% of homes have no car")
L("guest2", "This was army barracks, a brownfield site. Now five and a half thousand people live here, some in houses making more power than they use.", mood="teach", shot="close",
  board="Brownfield · ~5,500 people · plus-energy")
L("guest2", "Our problem? Homes here are now expensive. That's the social pillar.", mood="neutral", shot="close", gap=0.3)

confess("dad", "DAD · Forty Airports · Zero Bus Lanes")
L("dad", "I have been to forty countries. Well. Forty airports. All of them had car parks. I thought that was culture.", mood="smug")
L("dad", "Anna lent me a cargo bike. I rode it into a very sustainable hedge.", mood="sad", gap=0.6)

# ---------------- ACT 3: SINGAPORE THEN AND NOW ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad's knees have filed a complaint.", 2.4)
scene("kitchen", [("nani", 220), ("priya", 440), ("dad", 660)])
L("nani", "In the nineteen sixties, our rivers smelled like old socks. Then in nineteen sixty seven, Lee Kuan Yew launched the Garden City. Now, City in Nature.", mood="smug", shot="close",
  boardClear=True, board="1967 Garden City → 2020 City in Nature")
L("nani", "And about seventy seven to eighty percent of us live in H D B flats, with the M R T close by.", mood="teach", shot="close",
  board="About 77–80% of residents live in HDB")
L("priya", "And Tengah, the forest town. A forest corridor about a hundred metres wide, and town centre roads underground.", mood="excited", shot="close",
  board="Tengah: ~100 m Forest Corridor")
L("dad", "Roads underground! That's my car park. Upside down.", mood="excited", shot="close")
L("nani", "No, beta. Yours had a fountain.", mood="deadpan", shot="close", gap=0.4)
sfx("whoosh")
poof("atlas", 980)
L("atlas", "Cars. Nineteen ninety, the C O E: a quota on owning a car. Nineteen ninety eight, E R P: you pay to use busy roads at busy times.", mood="teach", shot="close",
  boardClear=True, board="COE (1990) OWN · ERP (1998) USE")
L("priya", "And water has Four National Taps. Local catchment, imports from Malaysia, New Water, and desalination.", mood="thinking", shot="close",
  board="4 Taps: local · import · NEWater · desal")
L("dad", "New Water is just seawater with the salt taken out.", mood="smug", shot="close")
L("atlas", "That is desalination. New Water, from two thousand three, is recycled used water. Up to about forty percent of demand now.", mood="eyeroll", shot="close",
  board="NEWater (2003): ~40% now, ~55% by 2060")
L("nani", "And Marina Barrage, two thousand eight. Our fifteenth reservoir, flood control, and the best place to fly a kite.", mood="happy", shot="close",
  board="Marina Barrage (2008): 15th reservoir")
L("dad", "But Singapore is tiny. So our footprint is tiny.", mood="thinking", shot="close")
L("atlas", "Wonderfully wrong. The ecological footprint is the land and sea needed to supply us and absorb our waste, worldwide.", mood="teach", shot="close",
  boardClear=True, diagram=FOOTPRINT)
L("atlas", "We use about two point six global hectares each. Earth supplies about one point six. Carbon footprint is different: tonnes of greenhouse gas.", mood="worried", shot="close",
  board="Carbon footprint = tonnes CO₂e per year")
L("nani", "So the footprint is bigger than the foot. Like your father's opinions.", mood="smug", shot="close", gap=0.4)

# ---------------- THE JUDGING ----------------
scene("classroom", [("teacher", 220), ("priya", 440), ("dad", 660)])
L("teacher", "Eco City judging, with a weighted scoring matrix. Score out of five, times the weight, add up.", mood="teach", shot="close",
  boardClear=True, diagram=MATRIX)
L("teacher", "Entry one. A car park with a fountain. Sixteen out of forty. It only wins on feasibility.", mood="deadpan", shot="close")
L("dad", "Because it's brilliant?", mood="excited", shot="close")
L("teacher", "Because anyone could build it. That's the problem.", mood="deadpan", shot="close", gap=0.3)
L("priya", "We covered all seven themes, zoning to community. Industry downwind, floodplain kept as a park.", mood="determined", shot="close",
  board="7 themes · industry downwind")
L("teacher", "Exam skill: don't just list. Explain how. Trams carry many people on less energy per person than cars, so emissions fall.", mood="teach", shot="close",
  board="Don't list. Explain HOW it helps.")
L("teacher", "And weigh up trade offs. Masdar City in the U A E planned zero carbon, then built only a small part. Class design: thirty four. You win!", mood="happy", shot="close")
sfx("ding")
poof("atlas", 980)
L("teacher", "Also, who brought a globe to the judging?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Varnished, Sneezed On")
L("atlas", "Recap. First. Brundtland. Meet today's needs without wrecking the future's.", mood="teach",
  boardClear=True, board="1. Brundtland (1987): now AND future")
L("atlas", "Second. Social, economic, environmental. All three pillars must overlap.", mood="teach",
  board="2. Social + economic + environmental")
L("atlas", "Third. Curitiba, cheap and clever. Vauban, car free on a brownfield site.", mood="teach",
  board="3. Curitiba BRT · Vauban car-free")
L("atlas", "Fourth. Singapore. C O E for owning, E R P for using, and New Water.", mood="teach",
  board="4. SG: COE, ERP, NEWater, Barrage")
L("atlas", "And finally. Footprints measure impact. Judge with weighted criteria. Explain how.", mood="smug",
  board="5. Footprints · weighted matrix · HOW", gap=0.5)

# ---------------- TAG: THE FINALE PICNIC ----------------
scene("park", [("mum", 220), ("dad", 440), ("nani", 660), ("priya", 880)])
L("mum", "Winners' picnic. Checklist. Reusable cups, sandwiches, one globe.", mood="happy", shot="wide", prop="book")
L("atlas", "I am in the cooler bag. Very sustainable. Very cold.", mood="annoyed", offstage=True)
L("dad", "My entry for next year. No cars. Just the fountain, on New Water, with trees all around.", mood="excited", shot="close")
L("priya", "Dad. That's a park. We are sitting in it.", mood="deadpan", shot="close")
L("dad", "Then I've already won.", mood="smug", shot="close", gap=0.3)
sfx("trombone")
L("nani", "Somebody planned all this for you. Now it's your turn to plan for the next ones.", mood="happy", shot="close")
L("dad", "Forty airports. And the best place I've ever been is right here.", mood="happy", shot="wide")
L("uncle", "Delivery! Chicken rice for the winners. Reusable boxes, ah.", mood="happy", offstage=True)
L("teacher", "And full marks for the picnic. Nobody tell the rubric.", mood="happy", offstage=True)
L("priya", "Group photo. Atlas too. Everyone say three pillars.", mood="happy", shot="wide")
sfx("ding", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. From a cooler bag.", 3.0)
challenge(1, "In Singapore, what is the difference between ERP and COE?", "ERP: using · COE: owning",
  "ERP (1998) charges for busy roads; COE (1990) caps cars",
  "Question one. In Singapore, what is the difference between E R P and C O E?",
  "E R P charges you for using busy roads. C O E is a quota on owning a car.")
challenge(2, "Curitiba's green space rose from 0.5 m² to 50 m² per person. Calculate the % change.", "+9,900%",
  "(50 − 0.5) ÷ 0.5 × 100 = 9,900%",
  "Question two. Curitiba's green space rose from zero point five to fifty square metres per person. Calculate the percentage change.",
  "Up nine thousand nine hundred percent. Divide the change by the old value, then times one hundred.")
challenge(3, "Is NEWater the same as desalination? Explain.", "No: recycled wastewater",
  "Desalination treats seawater; NEWater treats used water",
  "Question three. Is New Water the same as desalination?",
  "No. Desalination takes salt out of seawater. New Water is recycled used water.")
end_card()
