# "Off The Map" (a Claude Sitcom) S01E13 "Mega Problems" (Topic: Cities, Urbanisation & Megacities)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="cities-megacities",
    logline="Dad counts the same twelve neighbours in the lift all morning and declares their HDB block a megacity. Atlas spins the family to Tokyo to meet a real one, and to find out why the giant cities of the future are in Asia and Africa.",
    names={"guest": "DR SATO", "guest2": "DR RAHMAN"},
    display={"H D B": "HDB", "C B D": "CBD", "M R T": "MRT", "T E A": "TEA", "Sao Paulo": "São Paulo"},
)

URBAN_SHARE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250">'
    '<text x="10" y="28" font-family="sans-serif" font-size="22" fill="#f8fafc">Share of people living in urban areas</text>'
    '<text x="10" y="70" font-family="sans-serif" font-size="19" fill="#f8fafc">1950</text>'
    '<rect x="125" y="50" width="105" height="30" fill="#7dd3fc"/>'
    '<text x="240" y="72" font-family="sans-serif" font-size="19" fill="#7dd3fc">about 30%</text>'
    '<text x="10" y="110" font-family="sans-serif" font-size="19" fill="#f8fafc">2007</text>'
    '<rect x="125" y="90" width="175" height="30" fill="#7dd3fc"/>'
    '<text x="310" y="112" font-family="sans-serif" font-size="19" fill="#7dd3fc">50%</text>'
    '<text x="10" y="150" font-family="sans-serif" font-size="19" fill="#f8fafc">2023</text>'
    '<rect x="125" y="130" width="200" height="30" fill="#86efac"/>'
    '<text x="335" y="152" font-family="sans-serif" font-size="19" fill="#86efac">about 57%</text>'
    '<text x="10" y="190" font-family="sans-serif" font-size="19" fill="#f8fafc">2050*</text>'
    '<rect x="125" y="170" width="238" height="30" fill="#fde047"/>'
    '<text x="373" y="192" font-family="sans-serif" font-size="19" fill="#fde047">about 68%</text>'
    '<text x="10" y="230" font-family="sans-serif" font-size="19" fill="#f8fafc">Singapore</text>'
    '<rect x="125" y="210" width="350" height="30" fill="#fca5a5"/>'
    '<text x="465" y="232" text-anchor="end" font-family="sans-serif" font-size="19" fill="#111827">100%</text>'
    '</svg>'
)

MEGA_COUNT = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 260">'
    '<text x="10" y="24" font-family="sans-serif" font-size="22" fill="#f8fafc">Megacities (over 10 million)</text>'
    '<rect x="40" y="212" width="70" height="8" fill="#7dd3fc"/>'
    '<text x="75" y="204" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#f8fafc">2</text>'
    '<rect x="135" y="208" width="70" height="12" fill="#7dd3fc"/>'
    '<text x="170" y="200" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#f8fafc">3</text>'
    '<rect x="230" y="180" width="70" height="40" fill="#7dd3fc"/>'
    '<text x="265" y="172" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#f8fafc">10</text>'
    '<rect x="325" y="88" width="70" height="132" fill="#86efac"/>'
    '<text x="360" y="80" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#f8fafc">33</text>'
    '<rect x="420" y="48" width="70" height="172" fill="#fde047"/>'
    '<text x="455" y="70" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#111827">~43</text>'
    '<text x="75" y="246" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">1950</text>'
    '<text x="170" y="246" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">1975</text>'
    '<text x="265" y="246" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">1990</text>'
    '<text x="360" y="246" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">2018</text>'
    '<text x="455" y="246" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#fde047">2030*</text>'
    '</svg>'
)

PUSH_PULL = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">'
    '<rect x="10" y="10" width="240" height="200" rx="12" fill="#7f1d1d"/>'
    '<text x="130" y="40" text-anchor="middle" font-family="sans-serif" font-size="21" fill="#fca5a5">PUSH (rural)</text>'
    '<text x="22" y="78" font-family="sans-serif" font-size="19" fill="#f8fafc">• floods, cyclones</text>'
    '<text x="22" y="110" font-family="sans-serif" font-size="19" fill="#f8fafc">• river-bank erosion</text>'
    '<text x="22" y="142" font-family="sans-serif" font-size="19" fill="#f8fafc">• few jobs, low pay</text>'
    '<text x="22" y="174" font-family="sans-serif" font-size="19" fill="#f8fafc">• poor services</text>'
    '<rect x="270" y="10" width="240" height="200" rx="12" fill="#14532d"/>'
    '<text x="390" y="40" text-anchor="middle" font-family="sans-serif" font-size="21" fill="#86efac">PULL (Dhaka)</text>'
    '<text x="282" y="78" font-family="sans-serif" font-size="19" fill="#f8fafc">• garment jobs</text>'
    '<text x="282" y="110" font-family="sans-serif" font-size="19" fill="#f8fafc">• higher wages</text>'
    '<text x="282" y="142" font-family="sans-serif" font-size="19" fill="#f8fafc">• schools, hospitals</text>'
    '<text x="282" y="174" font-family="sans-serif" font-size="19" fill="#f8fafc">• family already there</text>'
    '</svg>'
)

BURGESS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 260">'
    '<circle cx="130" cy="130" r="120" fill="#14532d"/>'
    '<circle cx="130" cy="130" r="96" fill="#15803d"/>'
    '<circle cx="130" cy="130" r="72" fill="#0e7490"/>'
    '<circle cx="130" cy="130" r="48" fill="#a16207"/>'
    '<circle cx="130" cy="130" r="24" fill="#b91c1c"/>'
    '<text x="130" y="137" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">1</text>'
    '<text x="166" y="137" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">2</text>'
    '<text x="190" y="137" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">3</text>'
    '<text x="214" y="137" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">4</text>'
    '<text x="238" y="137" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">5</text>'
    '<text x="275" y="40" font-family="sans-serif" font-size="19" fill="#fca5a5">1 CBD</text>'
    '<text x="275" y="78" font-family="sans-serif" font-size="19" fill="#fde047">2 Inner city</text>'
    '<text x="275" y="116" font-family="sans-serif" font-size="19" fill="#7dd3fc">3 Inner suburbs</text>'
    '<text x="275" y="154" font-family="sans-serif" font-size="19" fill="#86efac">4 Outer suburbs</text>'
    '<text x="275" y="192" font-family="sans-serif" font-size="19" fill="#bbf7d0">5 Rural–urban fringe</text>'
    '<text x="275" y="240" font-family="sans-serif" font-size="18" fill="#fde047">Land value falls outwards →</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 330), ("priya", 640)])
L("dad", "Priya! Since six this morning, I've counted everyone in our lift. Three hundred people!", mood="excited", shot="close", prop="calculator")
L("priya", "Dad, that's the same twelve neighbours going up and down. Mrs Lim has been in it nine times.", mood="deadpan", shot="close")
L("dad", "Busy woman. Busy block. Our block is a megacity. I'm writing to the United Nations.", mood="smug", shot="close", prop="phone")
L("priya", "A megacity needs more than ten million people.", mood="deadpan", shot="close")
L("dad", "Then I'll count again tomorrow. Slower.", mood="determined", shot="close", gap=0.4)
freeze("DAD'S MEGACITY", 2.6, narrator="Narrator: Population, three hundred. Still needed, nine million, nine hundred and ninety nine thousand, seven hundred.")
confess("priya", "PRIYA · 12 · Lives In A Block, Not A Megacity")
L("priya", "Greater Tokyo has about thirty seven million people. Our block has three hundred. It's not close.", mood="deadpan")
L("priya", "But Dad never lets a fact stop a strongly worded letter.", mood="smug", gap=0.6)

title()

# ---------------- ACT 1: WHAT IS A CITY? ----------------
scene("living", [("priya", 220), ("dad", 440)])
L("priya", "Atlas! Dad says our block is a megacity.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 1000)
L("atlas", "Your block is not a megacity. It is a lift with ambitions.", mood="bored", shot="close")
L("dad", "Then what IS a city? Who decides?", mood="thinking", shot="two")
L("atlas", "Every country decides. There is no single world definition of a city.", mood="teach", shot="close",
  boardClear=True, board="No single world definition of a city")
L("atlas", "Denmark counts a place with just two hundred people as urban. Japan usually wants fifty thousand for a city.", mood="teach", shot="close",
  board="Denmark: 200 people = urban")
L("dad", "Two hundred! In Denmark, our LIFT is urban!", mood="excited", shot="close", board="Japan: usually 50,000 for a city")
L("priya", "In Britain, city status is a royal title. Saint Davids has under two thousand people, but it has a cathedral, so it's a city.", mood="thinking", shot="close",
  board="UK: St Davids (under 2,000) is a city")
L("dad", "So all I need is a cathedral.", mood="smug", shot="close")
L("priya", "And a letter from the King.", mood="deadpan", shot="close", gap=0.3)
L("atlas", "The settlement hierarchy. Hamlet, village, town, city, megacity. Going up: bigger, fewer, more services.", mood="teach", shot="close",
  boardClear=True, board="Hamlet → village → town → city → megacity")
L("atlas", "And a megacity has one clear rule. More than ten million people. No cathedral required.", mood="smug", shot="close",
  board="Megacity = more than 10 million people")
sfx("door")
poof("nani", 680)
L("nani", "In nineteen sixty, Singapore had about one point six million people. Now about six million, and all of us count as urban.", mood="happy", shot="close",
  boardClear=True, board="Singapore: 100% urban, about 6 million")
L("priya", "So Singapore can't urbanise any more. But it can still grow?", mood="thinking", shot="close")
L("atlas", "Precisely. Urbanisation is the rising percentage of people living in urban areas. It can never pass one hundred.", mood="teach", shot="close",
  board="Urbanisation = rising % in urban areas")
L("atlas", "Urban growth is the rising number of urban people, or the area a city covers.", mood="teach", shot="close",
  board="Urban growth = rising NUMBER or AREA")
L("nani", "Like your father. Not urbanising. Still growing.", mood="smug", shot="close", gap=0.3)
L("dad", "I am big boned.", mood="annoyed", shot="close", gap=0.3)
L("atlas", "World urban share. About thirty percent in nineteen fifty. Half by two thousand and seven. Fifty seven percent now. Sixty eight by twenty fifty.", mood="teach", shot="close",
  boardClear=True, diagram=URBAN_SHARE)
L("priya", "Two in every three people! And the fastest urbanisation is in Africa and Asia.", mood="shock", shot="close",
  board="Fastest urbanisation now: Africa, Asia")

confess("atlas", "ATLAS · Desk Globe · 100% Plastic, 0% Urban")
L("atlas", "Dropped on Australia again today. Canberra is now a hamlet.", mood="smug", gap=0.5)

# ---------------- ACT 2: TOKYO ----------------
scene("living", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("dad", "Fine. Show me a REAL megacity.", mood="determined", shot="close")
L("atlas", "Hold on. Not to me. I chip.", mood="smug", shot="close")
sfx("whoosh")
scene("city", [("priya", 240), ("dad", 480), ("atlas", 780)], caption="TOKYO · Japan · Shinjuku · about 37 million people")
L("dad", "Wow. The people. The trains. The people on trains.", mood="shock", shot="wide")
L("atlas", "Greater Tokyo. About thirty seven million people. The United Nations' largest city in twenty eighteen.", mood="teach", shot="close",
  boardClear=True, board="Greater Tokyo: about 37 million")
sfx("door")
poof("guest", 1080)
L("guest", "Welcome! I'm Doctor Sato, an urban planner. Shinjuku Station has over three million journeys a day.", mood="happy", shot="close",
  board="Shinjuku Station: 3 million+ trips a day")
L("dad", "Our lift did three hundred. On a good day.", mood="sad", shot="close", gap=0.4)
L("guest", "In nineteen fifty, only two megacities. Tokyo and New York. By twenty eighteen, thirty three. By twenty thirty, about forty three.", mood="teach", shot="close",
  boardClear=True, diagram=MEGA_COUNT, board="1950: only Tokyo and New York")
L("guest", "And the growth has shifted to Asia and Africa. Tokyo has actually peaked, because Japan is ageing.", mood="neutral", shot="close",
  board="Growth has shifted to Asia and Africa")
L("dad", "Doctor Sato, where's the toilet? Never mind, I'll find it. Back in two minutes!", mood="excited", shot="close")
L("atlas", "We will never see him again.", mood="deadpan", shot="close", gap=0.4)

scene("city", [("priya", 240), ("atlas", 560), ("guest", 860)])
sfx("door")
poof("guest2", 1080)
L("guest2", "Hello! I'm Doctor Nusrat Rahman. Dhaka has over twenty million people, and is growing fast.", mood="happy", shot="close",
  boardClear=True, board="Dhaka: over 20 million people")
L("guest2", "Rural to urban migration. About four hundred thousand a year. River bank erosion, floods and cyclones push them out of the countryside.", mood="teach", shot="close",
  boardClear=True, diagram=PUSH_PULL)
L("guest2", "And jobs pull them in. Our garment industry employs about four million people, many of them young women from rural areas.", mood="teach", shot="close")
L("priya", "Wait. This T-shirt might be from Dhaka.", mood="shock", shot="close")
L("atlas", "Push is the place you leave. Pull is the place you go. Mix them up and examiners weep.", mood="eyeroll", shot="close",
  board="Push = countryside · Pull = city")
L("guest2", "Then natural increase. Birth rate minus death rate. Young migrants start families here.", mood="teach", shot="close",
  board="Also: natural increase = births − deaths")
L("priya", "Where do all the new people live?", mood="worried", shot="close")
L("guest2", "Many in informal settlements, built without legal permission. Often no clean water, toilets, or right to stay.", mood="neutral", shot="close",
  boardClear=True, board="Informal settlement: no legal permission")
L("atlas", "About one point one billion people live in slums or informal settlements. One in four city dwellers.", mood="teach", shot="close",
  board="About 1.1 billion people · 1 in 4 urban")
L("atlas", "Dharavi, in Mumbai, packs six hundred thousand to a million people into about two point one square kilometres.", mood="teach", shot="close",
  board="Dharavi, Mumbai: 2.1 km², 0.6–1 million")
L("guest2", "But they're also full of businesses and recycling. Many experts now prefer upgrading them, not bulldozing them.", mood="determined", shot="close",
  board="Upgrade: add water, toilets, legal rights")

confess("dad", "DAD · Explorer · Lost Inside Shinjuku Station")
L("dad", "I've been to forty airports. None of them prepared me for this station.", mood="worried")
L("dad", "I've passed the same bakery six times. I think the bakery is following me.", mood="sad", gap=0.6)

# ---------------- ACT 3: KAYA TOAST BURGESS ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad is still looking for an exit.", 2.4)
scene("hawker", [("mum", 240), ("priya", 480), ("uncle", 1000)])
L("priya", "Mum, why have you ordered eleven slices of kaya toast?", mood="deadpan", shot="two")
L("mum", "Visual aid. The Burgess model. A city grows in rings. This egg in the middle is the C B D. Offices, shops and banks.", mood="teach", shot="close", prop="plate",
  boardClear=True, diagram=BURGESS, board="1 CBD: offices, shops, banks")
L("uncle", "My egg is a business district!", mood="happy", shot="close")
L("mum", "Then the inner city, old factories and packed housing. Then suburbs, newer and bigger. Then the rural urban fringe. Airports, business parks.", mood="teach", shot="close",
  board="2 inner city · 3 and 4 suburbs · 5 fringe")
L("priya", "Can I See Rural Fields.", mood="smug", shot="close", board="Can I See Rural Fields?")
sfx("whoosh")
poof("atlas", 760)
L("atlas", "The centre is most accessible, so land is priciest. Build upwards! Further out, land value and height fall.", mood="teach", shot="close",
  boardClear=True, board="Outwards: land value and height fall")
L("uncle", "Like my toast. Raffles Place, expensive. Here, very reasonable.", mood="smug", shot="close", gap=0.3)
L("priya", "But real cities aren't perfect rings. Singapore planned regional centres, like Jurong and Tampines.", mood="thinking", shot="close",
  board="Limits: real cities are not perfect rings")
L("mum", "Checklist. Cities give jobs, services, the M R T. But also traffic, pollution, high housing costs. Hence H D B flats for eight in ten of us.", mood="teach", shot="close",
  boardClear=True, board="+ jobs, services · − traffic, high costs")
L("atlas", "And the urban heat island. Concrete stores heat, so parts of Singapore can be about seven degrees warmer at night than green areas.", mood="teach", shot="close",
  board="Urban heat island: up to ~7 °C warmer")
L("atlas", "And Singapore? Not a megacity. But a world city, with global influence. Finance, a top container port, and Changi Airport.", mood="teach", shot="close",
  board="Singapore: a world city, not a megacity")
L("mum", "Your father's been through Changi forty times. He thinks it counts as travelling.", mood="eyeroll", shot="close", gap=0.4)

# ---------------- DESCRIBING A DISTRIBUTION ----------------
scene("classroom", [("teacher", 300), ("priya", 640), ("atlas", 940)])
L("teacher", "Exam skill. Describe the distribution of megacities on a map. Use T E A.", mood="teach", shot="close",
  boardClear=True, board="Describe the distribution: T · E · A")
L("teacher", "Trend. Most are in Asia, about twenty of thirty three in twenty eighteen. Mostly northern hemisphere, many on coasts.", mood="teach", shot="close",
  board="T: most in Asia (about 20 of 33, 2018)")
L("priya", "Example, with data. Tokyo, about thirty seven million people.", mood="thinking", shot="close",
  board="E: Tokyo, about 37 million")
L("teacher", "Anomaly. Sao Paulo and Lima, in the southern hemisphere. And none at all in Oceania.", mood="teach", shot="close",
  board="A: São Paulo, Lima · none in Oceania")
L("atlas", "Describe means what and where. Not why. Write because, and you're explaining.", mood="eyeroll", shot="close")
L("teacher", "Priya, why is there a globe in my class again?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Not Going Back For Dad")
L("atlas", "Recap. One. There is no single definition of a city.", mood="teach",
  boardClear=True, board="1. No single definition of a city")
L("atlas", "Two. Urbanisation is the rising percentage. Urban growth is the rising number.", mood="teach",
  board="2. Urbanisation = % · growth = number")
L("atlas", "Three. Cities grow by migration, with push and pull factors, and by natural increase.", mood="teach",
  board="3. Migration (push/pull) + natural increase")
L("atlas", "Four. Burgess. C B D, inner city, suburbs, rural urban fringe.", mood="teach",
  board="4. CBD → inner city → suburbs → fringe")
L("atlas", "Five. Megacities have over ten million people, mostly in Asia. Describe them with T E A.", mood="smug",
  board="5. Megacity = 10m+ · mostly Asia · TEA", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("priya", 220), ("nani", 460), ("atlas", 1000)])
sfx("door")
poof("dad", 720)
L("dad", "I'm back! I found an exit. It was in a different station. Next week I'm going back to count everyone in Shinjuku.", mood="excited", shot="close")
L("atlas", "Three million journeys a day.", mood="deadpan", shot="close")
L("dad", "Then I'll count slower.", mood="smug", shot="close")
sfx("trombone")
L("nani", "Take Mrs Lim. She's had the practice.", mood="smug", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Then he spins smugly.", 3.0)
challenge(1, "A city's population rose from 20 million to 30 million. What is the percentage change?", "A 50% increase",
  "(30 − 20) ÷ 20 × 100 = 50%",
  "Question one. A city grew from twenty million to thirty million people. What is the percentage change?",
  "Fifty percent. Ten million more, divided by the old twenty million, times one hundred.")
challenge(2, "Singapore is 100% urban, but its population is still rising. Urbanisation or urban growth?", "Urban growth",
  "The % can't pass 100; the NUMBER still rises",
  "Question two. Singapore is one hundred percent urban, but still growing. Urbanisation, or urban growth?",
  "Urban growth. The percentage can't pass one hundred, but the number of people can keep rising.")
challenge(3, "River-bank erosion in rural Bangladesh: a push or a pull factor for moving to Dhaka?", "Push factor",
  "It drives people AWAY from the countryside",
  "Question three. River bank erosion in rural Bangladesh. Push factor, or pull factor?",
  "A push factor. It drives people away from the place they leave. Jobs in Dhaka would be a pull.")
end_card()
