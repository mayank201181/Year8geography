# "Totally Raotional: Off The Map" S02E09 "Cactus Makes Perfect" (Topic: Plant & Animal Adaptations)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: what-is-adaptation, desert-adaptations, polar-adaptations, mountain-adaptations.

EP = dict(topic="adaptations",
          logline="Mum is drowning a bargain cactus and Dad wants to bottle 'camel hump water'. Globo flies the Raos to the "
                  "desert, the ice and the Himalayas to teach the three types of adaptation, and bust the hump myth for good.")

D_FOXES = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="260" height="200" fill="#78350f"/><rect x="260" width="260" height="200" fill="#0c4a6e"/>
<path d="M80 120 L60 30 L115 100Z M180 120 L200 30 L145 100Z" fill="#fcd34d"/>
<circle cx="130" cy="130" r="42" fill="#fcd34d"/><circle cx="115" cy="122" r="5" fill="#1e293b"/><circle cx="145" cy="122" r="5" fill="#1e293b"/>
<path d="M352 112 L358 88 L376 104Z M428 112 L422 88 L404 104Z" fill="#f1f5f9"/>
<circle cx="390" cy="130" r="42" fill="#f1f5f9"/><circle cx="375" cy="124" r="5" fill="#1e293b"/><circle cx="405" cy="124" r="5" fill="#1e293b"/>
<text x="130" y="22" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">FENNEC FOX · Sahara</text>
<text x="390" y="22" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">ARCTIC FOX · tundra</text>
<text x="130" y="192" font-family="sans-serif" font-size="14" fill="#fde68a" text-anchor="middle">big ears → LOSE heat</text>
<text x="390" y="192" font-family="sans-serif" font-size="14" fill="#bae6fd" text-anchor="middle">small ears → KEEP heat</text>
</svg>"""

D_CACTUS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="150" fill="#1e3a5f"/><rect y="150" width="520" height="70" fill="#a16207"/>
<rect x="90" y="30" width="44" height="122" rx="20" fill="#16a34a"/><rect x="40" y="70" width="22" height="50" rx="10" fill="#16a34a"/>
<rect x="40" y="108" width="52" height="16" rx="8" fill="#16a34a"/>
<path d="M100 40 v110 M112 36 v114 M124 40 v110" stroke="#14532d" stroke-width="2"/>
<path d="M88 60 l-8 -4 M136 60 l8 -4 M88 90 l-8 -4 M136 90 l8 -4" stroke="#fde68a" stroke-width="2"/>
<path d="M112 152 Q60 160 20 158 M112 152 Q170 162 230 158 M112 152 Q80 170 50 168 M112 152 Q150 172 200 170" stroke="#fde68a" stroke-width="3" fill="none"/>
<path d="M380 120 v90" stroke="#fde68a" stroke-width="4"/><circle cx="380" cy="100" r="26" fill="#65a30d"/>
<text x="160" y="56" font-family="sans-serif" font-size="14" fill="#fff">spines = LEAVES</text>
<text x="160" y="82" font-family="sans-serif" font-size="14" fill="#fff">waxy skin</text>
<text x="160" y="108" font-family="sans-serif" font-size="14" fill="#fff">pleated stem stores water</text>
<text x="20" y="208" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff">wide, shallow roots</text>
<text x="400" y="190" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff">deep TAP ROOT</text>
<text x="380" y="60" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">mesquite</text>
</svg>"""

D_HUDDLE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<circle cx="200" cy="100" r="84" fill="#1e3a8a"/><circle cx="200" cy="100" r="54" fill="#b45309"/><circle cx="200" cy="100" r="26" fill="#dc2626"/>
<text x="200" y="106" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">20°C+</text>
<path d="M200 10 A90 90 0 0 1 290 100" stroke="#fde047" stroke-width="3" fill="none"/><path d="M290 100 l-8 -12 l14 0z" fill="#fde047"/>
<path d="M500 40 H310 M500 100 H310 M500 160 H310" stroke="#7dd3fc" stroke-width="3" stroke-dasharray="10 8"/>
<text x="410" y="30" font-family="sans-serif" font-size="14" fill="#bae6fd" text-anchor="middle">icy wind</text>
<text x="200" y="196" font-family="sans-serif" font-size="14" fill="#fde047" text-anchor="middle">birds rotate: edge ↔ middle</text>
</svg>"""

D_AIR = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<rect x="40" y="40" width="80" height="140" fill="#38bdf8"/>
<rect x="160" y="89" width="80" height="91" fill="#38bdf8"/>
<rect x="280" y="110" width="80" height="70" fill="#38bdf8"/>
<rect x="400" y="134" width="80" height="46" fill="#38bdf8"/>
<text x="80" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">100%</text>
<text x="200" y="81" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">~65%</text>
<text x="320" y="102" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">~50%</text>
<text x="440" y="126" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">~33%</text>
<text x="80" y="200" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">Singapore 0 m</text>
<text x="200" y="200" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">La Paz 3,600 m</text>
<text x="320" y="200" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">5,500 m</text>
<text x="440" y="200" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">Everest 8,849 m</text>
<text x="260" y="216" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">air pressure, % of sea level</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "Tara! Three cactuses for the price of two! I water them morning, noon and night.", mood="excited", shot="close", prop="bucket")
L("tara", "Mum, it's a desert plant. You're watering it like it owes you money.", mood="deadpan", shot="close")
L("mum", "Everything in Singapore likes water!", mood="happy", shot="two")
L("tara", "This one's gone soft. I think it's trying to swim.", mood="deadpan", shot="close", gap=0.5)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Family. My next business. Camels store water in their humps, yes? So I'll bottle it. Raos' Hump Water. Slogan. It's been through a lot.", mood="smug", shot="close", prop="tablet")
freeze("\"BEEN THROUGH A LOT\"", 2.4, narrator="Narrator: So had the family.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "Mum is drowning a cactus. Dad wants to sell camel juice. Time to call the only adult in this flat. He lives in a drawer.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WHAT IS AN ADAPTATION? ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Time to open the drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who disturbs the drawer? Oh. The Raos. I was napping behind the takeaway menus.", mood="bored", shot="close")
L("tara", "Globo, Mum is drowning a cactus, and Dad thinks camel humps are full of water.", mood="worried", shot="two")
L("globo", "Of course he does. Your father once asked me which way is north. I am a globe. It is written on me.", mood="eyeroll", shot="close", gap=0.4)

confess("globo", "GLOBO · Retired Classroom Globe · Lives In The Junk Drawer")
L("globo", "I am Globo. I have survived every extreme environment. Including Year Eight on a Friday.", mood="smug", gap=0.5)

scene("kitchen", [("tara", 300), ("globo", 860)])
L("globo", "An adaptation is an inherited feature that helps a living thing survive and reproduce. It builds up over many generations, by natural selection. No animal decides to adapt.", mood="teach", shot="close",
  boardClear=True, board="ADAPTATION: an INHERITED feature")
L("globo", "Three types. Structural, a body part. Behavioural, what it does. Physiological, a process inside its body.", mood="teach", shot="close",
  board="STRUCTURAL: what it HAS (body part)")
L("tara", "So spines are structural. Huddling is behavioural. Making very concentrated wee is physiological.", mood="happy", shot="close",
  board="BEHAVIOURAL: what it DOES")
L("globo", "Correct, if graphic. Every adaptation beats a challenge. Heat, cold, drought, or low oxygen.", mood="smug", shot="close",
  board="PHYSIOLOGICAL: a process INSIDE it")
L("globo", "Two foxes. The fennec fox in the Sahara has enormous ears. The Arctic fox has tiny ones. Ears work like radiators.", mood="teach", shot="close",
  boardClear=True, board="Challenges: heat · cold · drought · low O₂", diagram=D_FOXES)
L("tara", "Big surface area loses heat fast. Good in a desert. Small ears keep heat in. Good in the cold.", mood="thinking", shot="close",
  board="Big surface area → loses heat fast")
L("globo", "In exams, write a chain. Feature, how it works, the challenge, so it survives. Now. Globo Airways is boarding.", mood="teach", shot="close",
  board="Feature → how → challenge → survives")

# ---------------- ACT 2: THE DESERT ----------------
scene("desert", [("tara", 260), ("dad", 600), ("globo", 960)], "THE SAHARA · North Africa · Flown In By Globo Airways")
L("dad", "The desert! Where are the camels? I brought a bucket, and a very small straw.", mood="excited", shot="close", prop="sunglasses")
L("globo", "Hot deserts get under two hundred and fifty millimetres of rain a year. Days top forty degrees, nights can be cold.", mood="teach", shot="close",
  boardClear=True, board="Hot desert: < 250 mm rain a year")
L("globo", "Take a cactus. Those spines are leaves. Modified leaves, with a tiny surface area, so very little water is lost by transpiration.", mood="teach", shot="close",
  boardClear=True, board="CACTUS: spines = modified leaves", diagram=D_CACTUS)
L("tara", "Waxy skin waterproofs it. The swollen, pleated stem stores water. Wide shallow roots grab rain fast, and some plants grow deep tap roots.", mood="happy", shot="close",
  board="Waxy skin · swollen stem stores water")
L("dad", "But the camel. My hump water empire!", mood="determined", shot="close", board="Wide shallow roots · deep tap roots")
sfx("tick")
L("globo", "The hump stores fat. Not water. Fat. An energy store for when food is scarce.", mood="teach", shot="close",
  boardClear=True, board="MYTH BUSTED: hump stores FAT, not water")
L("dad", "Fat? So my product is, hump fat?", mood="shock", shot="close")
sfx("trombone")
L("globo", "A camel can lose about a quarter of its body mass as water and survive, then reportedly drink over a hundred litres in ten to fifteen minutes.", mood="teach", shot="close",
  board="Survives losing ~¼ of body mass as water")
L("globo", "Its body temperature rises by day, so it sweats less. Its eyelashes and nostrils keep out sand. Wide feet stop it sinking.", mood="teach", shot="close",
  board="Eyelashes · closable nostrils · wide feet")
L("tara", "The fennec fox is nocturnal, and gets water from its food.", mood="happy", shot="close",
  boardClear=True, board="FENNEC FOX: nocturnal, water from food")
L("globo", "The kangaroo rat may never drink at all. It gets water from the seeds it eats.", mood="teach", shot="close",
  board="KANGAROO RAT: water from seeds")
L("globo", "And ephemeral plants wait for years as seeds. After rain, they flower and set seed within weeks.", mood="teach", shot="close",
  board="EPHEMERALS: seed → flower in weeks")

confess("dad", "VIKRAM RAO · Dad · Self-Described Business Genius")
L("dad", "All those labels, wasted. Unless. Raos' Hump Fat. Moisturiser. Your skin has been through a lot.", mood="smug", gap=0.6)

# ---------------- ACT 3: THE ICE ----------------
card("MEANWHILE, MUCH FURTHER SOUTH", "Mum packed one cardigan. It was on sale.", 2.4)
scene("polar", [("mum", 300), ("tara", 620), ("globo", 960)], "ANTARCTICA · Very Cold · Flown In By Globo Airways")
L("mum", "Where are the polar bears? I want a photo of a polar bear hugging a penguin.", mood="excited", shot="close", prop="phone")
L("globo", "Polar bears live in the Arctic. Penguins live in the south. They never meet. Your photo will be a penguin, alone, judging you.", mood="eyeroll", shot="close",
  boardClear=True, board="Polar bears: ARCTIC · penguins: SOUTH")
L("globo", "Antarctica holds the record low. Minus eighty nine point two degrees. Plus wind, darkness and little food.", mood="teach", shot="close",
  board="Record low: −89.2 °C, Vostok, 1983")
L("globo", "In the Arctic, the polar bear has black skin under its fur. The hairs are see-through and hollow. They scatter light, like snow.", mood="teach", shot="close",
  boardClear=True, board="POLAR BEAR: black skin, see-through hair")
L("tara", "Dense fur traps warm air. Blubber, up to about ten centimetres thick. Small ears, and huge paws for thin ice.", mood="happy", shot="close",
  board="Blubber up to ~10 cm · small ears")
L("globo", "Emperor penguins breed in winter. The dad holds the egg on his feet for about two months, eating nothing.", mood="teach", shot="close",
  boardClear=True, board="EMPEROR PENGUIN: dad holds egg ~2 months", diagram=D_HUDDLE)
L("globo", "They huddle. Thousands pack together, taking turns on the windy edge. Inside, it can top twenty degrees.", mood="teach", shot="close",
  board="HUDDLING (behavioural): centre 20 °C+")
L("mum", "Like the MRT at rush hour! Warm in the middle, freezing by the door.", mood="excited", shot="close")
L("tara", "Mum's right. Write that down. It may not happen again.", mood="shock", shot="close")
L("globo", "In their feet, warm blood flowing out heats the cold blood flowing back. Counter current heat exchange.", mood="teach", shot="close",
  board="Counter-current blood flow in feet")
L("tara", "Arctic foxes turn white in winter. Seals have blubber. Tundra plants grow low, with shallow roots above the permafrost.", mood="thinking", shot="close",
  boardClear=True, board="TUNDRA PLANTS: low · shallow roots")
L("globo", "And it all rests on krill. Krill eat phytoplankton. Penguins eat krill, seals eat penguins. Harm the krill, you harm them all.", mood="teach", shot="close",
  board="Phyto → KRILL → penguin → seal → orca")

confess("mum", "MUM · Deal Hunter · Has Never Paid Full Price")
L("mum", "The penguins share the warm middle. Everybody gets a turn. No queue jumping. Better than any sale I've been to.", mood="happy", gap=0.5)

# ---------------- ACT 4: THE MOUNTAINS ----------------
card("MEANWHILE, MUCH FURTHER UP", "Dad has decided to run.", 2.2)
scene("mountain", [("tara", 260), ("dad", 600), ("globo", 960)], "THE HIMALAYAS · Nepal · Flown In By Globo Airways")
L("dad", "Race you to the top! I am a mountain goat! Why is the mountain spinning?", mood="worried", shot="close")
L("globo", "Altitude sickness. Headache, nausea, dizziness. Usually above about two and a half thousand metres. The cure is to go down.", mood="teach", shot="close",
  boardClear=True, board="ALTITUDE SICKNESS: usually > ~2,500 m")
L("dad", "But there's still oxygen up here! Same percentage as Singapore!", mood="annoyed", shot="close", board="Cure: GO DOWN")
L("globo", "Half right. Air is still about twenty one percent oxygen. But the pressure drops. Near the top of Everest, each breath holds about a third as much.", mood="teach", shot="close",
  boardClear=True, board="Still ~21% O₂, but PRESSURE drops", diagram=D_AIR)
L("tara", "And it gets about six and a half degrees colder for every thousand metres.", mood="thinking", shot="close",
  board="Colder: ~6.5 °C per 1,000 m")
L("globo", "The yak has shaggy hair over a woolly undercoat, few sweat glands, and big lungs and a big heart.", mood="teach", shot="close",
  boardClear=True, board="YAK: shaggy hair · big lungs + heart")
L("tara", "Snow leopards have a long thick tail and snowshoe paws. Cushion plants grow in low domes, so the wind slides over.", mood="happy", shot="close",
  board="SNOW LEOPARD: tail · snowshoe paws")
L("dad", "Give me a weekend. I'll grow big lungs. I'll become a yak.", mood="determined", shot="close", board="CUSHION PLANTS: low domes · hairy leaves")
L("globo", "That's acclimatisation. Over days to weeks, you breathe faster and make extra red blood cells. Climb high, sleep low.", mood="teach", shot="close",
  boardClear=True, board="ACCLIMATISE: days–weeks, in ONE person")
L("globo", "True adaptation is inherited. Sherpa and Tibetan people tend to breathe more, without many extra red blood cells. Andean peoples tend to have more haemoglobin.", mood="teach", shot="close",
  board="INHERITED: Sherpa, Tibetan, Andean")
L("tara", "So Dad needs a few thousand years. And grandchildren who like mountains.", mood="deadpan", shot="close", gap=0.4)

confess("globo", "GLOBO · Recap Globe · Slightly Out Of Breath")
L("globo", "Recap. One. Adaptations are inherited. Structural, behavioural, physiological.", mood="teach", boardClear=True, board="1. Inherited: structural·behav.·physiol.")
L("globo", "Two. Cactus spines are leaves. The camel's hump is fat, not water.", mood="teach", board="2. Spines = leaves · hump = FAT")
L("globo", "Three. Polar bears have black skin and blubber. Penguins huddle.", mood="teach", board="3. Black skin + blubber · huddling")
L("globo", "Four. High up, the pressure drops, so each breath holds less oxygen.", mood="teach", board="4. Thin air: lower pressure, less O₂")
L("globo", "Five. Acclimatisation takes weeks. Adaptation takes generations.", mood="smug", board="5. Acclimatise: weeks · adapt: generations", gap=0.5)

# ---------------- BUTTON ----------------
card("BACK HOME", "One cactus survived. It is not speaking to Mum.", 2.4)
scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("mum", "New rule. The cactus gets water once a month. The Sahara Saver plan.", mood="happy", shot="close", prop="bucket")
L("dad", "And I've pivoted. Raos' Penguin Huddle. Group hugs at the void deck. Ten dollars. Warm in the middle.", mood="smug", shot="close", prop="tablet")
L("tara", "Dad. It's thirty two degrees. Nobody in Singapore wants to be warmer.", mood="deadpan", shot="close")
L("dad", "Fine. The windy edge costs extra.", mood="smug", shot="close")
sfx("ding")
L("globo", "Put me back in the drawer. Somewhere cool. I'm adapted to it.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "What does a camel's hump store?", "FAT", "fat = energy store · NOT water",
  "Question one. What does a camel's hump store?",
  "Fat, an energy store. If you said water, don't go into business with Dad.")
challenge(2, "Emperor penguins huddle. Structural, behavioural or physiological?", "BEHAVIOURAL", "huddling is something they DO",
  "Question two. Emperor penguins huddle. Structural, behavioural, or physiological?",
  "Behavioural. Huddling is something they do.")
challenge(3, "At the top of Everest, air is still ~21% oxygen. So what has changed?", "AIR PRESSURE", "lower pressure → less O₂ per breath",
  "Question three. At the top of Everest, air is still about twenty one percent oxygen. So what has changed?",
  "The air pressure. It drops, so each breath holds much less oxygen.")
end_card()
