# "Totally Raotional: Off The Map" S02E10 "Base Camp Drama" (Topic: Living & Travelling in Extreme Environments)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: difficulties-of-living, extreme-tourism, antarctica-tourism, planning-an-expedition.

EP = dict(topic="living-in-extremes",
          logline="Dad announces he will conquer Everest in a cotton T-shirt with a tiffin of prata. Globo flies the family to the Arctic, "
                  "the Khumbu and Antarctica to teach life in extreme places, the impacts of tourism, IAATO's rules and how to plan an expedition properly.")

D_PILES = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">
<rect width="520" height="190" fill="#0f172a"/>
<line x1="260" y1="10" x2="260" y2="185" stroke="#64748b" stroke-dasharray="5 5"/>
<rect x="10" y="110" width="240" height="22" fill="#a8a29e"/><rect x="10" y="132" width="240" height="50" fill="#7dd3fc"/>
<path d="M60 110 Q130 175 200 110Z" fill="#a16207"/>
<rect x="70" y="72" width="120" height="38" fill="#fca5a5"/><path d="M60 72 L130 44 L200 72Z" fill="#e2e8f0"/>
<path d="M118 72 l8 12 l-7 10 l9 16" stroke="#0f172a" stroke-width="3" fill="none"/>
<rect x="270" y="110" width="240" height="22" fill="#a8a29e"/><rect x="270" y="132" width="240" height="50" fill="#7dd3fc"/>
<rect x="320" y="70" width="8" height="90" fill="#cbd5e1"/><rect x="452" y="70" width="8" height="90" fill="#cbd5e1"/>
<rect x="320" y="40" width="140" height="32" fill="#fca5a5"/><path d="M310 40 L390 14 L470 40Z" fill="#e2e8f0"/>
<path d="M340 92 H440" stroke="#fde047" stroke-width="3"/><path d="M440 92 l-12 -6 v12z" fill="#fde047"/>
<text x="130" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">ON THE GROUND</text>
<text x="130" y="128" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fde68a" text-anchor="middle">thawed mud</text>
<text x="130" y="165" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">PERMAFROST</text>
<text x="390" y="88" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fde047" text-anchor="middle">cold air gap</text>
<text x="390" y="165" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">stays FROZEN</text>
</svg>"""

D_EVEREST = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<path d="M20 180 L110 150 L180 138 L330 96 L470 20 L470 190 L20 190Z" fill="#334155"/>
<path d="M110 150 L180 138 L330 96" stroke="#86efac" stroke-width="5" fill="none"/>
<path d="M330 96 L470 20" stroke="#fca5a5" stroke-width="4" stroke-dasharray="6 5" fill="none"/>
<circle cx="110" cy="150" r="6" fill="#fff"/><circle cx="180" cy="138" r="6" fill="#fff"/><circle cx="330" cy="96" r="6" fill="#fff"/><circle cx="470" cy="20" r="7" fill="#fde047"/>
<text x="110" y="176" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">Lukla</text>
<text x="190" y="162" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">Namche</text>
<text x="330" y="122" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">Base Camp ~5,360 m</text>
<text x="458" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fde047" text-anchor="end">8,849 m</text>
<text x="40" y="40" font-family="sans-serif" font-size="15" font-weight="bold" fill="#86efac">TREKKERS: tens of thousands</text>
<text x="40" y="62" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fca5a5">CLIMBERS: a few hundred</text>
</svg>"""

D_IAATO = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170">
<rect width="520" height="170" fill="#0c4a6e"/>
<path d="M0 120 Q130 100 260 118 T520 112 L520 170 L0 170Z" fill="#e0f2fe"/>
<path d="M30 92 L210 92 L190 112 L50 112Z" fill="#f8fafc"/><rect x="80" y="70" width="90" height="22" fill="#cbd5e1"/>
<text x="120" y="60" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fca5a5" text-anchor="middle">over 500 aboard:</text>
<text x="120" y="42" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fca5a5" text-anchor="middle">NO LANDING</text>
<g fill="#fde047"><circle cx="300" cy="112" r="5"/><circle cx="316" cy="110" r="5"/><circle cx="332" cy="112" r="5"/><circle cx="348" cy="110" r="5"/><circle cx="364" cy="112" r="5"/></g>
<g fill="#0f172a"><ellipse cx="460" cy="108" rx="7" ry="12"/><ellipse cx="482" cy="110" rx="7" ry="12"/></g>
<path d="M376 140 H448" stroke="#0f172a" stroke-width="2"/><path d="M376 140 l8 -5 v10z M448 140 l-8 -5 v10z" fill="#0f172a"/>
<text x="412" y="160" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">5 m</text>
<text x="332" y="64" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">max 100 ashore</text>
<text x="332" y="84" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">1 guide per 20</text>
</svg>"""

D_LAYERS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170">
<rect width="520" height="170" fill="#0f172a"/>
<rect x="20" y="20" width="50" height="110" fill="#fca5a5"/>
<rect x="70" y="20" width="70" height="110" fill="#a5b4fc"/>
<rect x="140" y="20" width="150" height="110" fill="#fde68a"/>
<rect x="290" y="20" width="44" height="110" fill="#7dd3fc"/>
<g fill="#fff"><circle cx="170" cy="55" r="7"/><circle cx="210" cy="80" r="7"/><circle cx="250" cy="52" r="7"/><circle cx="190" cy="105" r="7"/><circle cx="262" cy="100" r="7"/></g>
<path d="M500 60 H346" stroke="#e2e8f0" stroke-width="3"/><path d="M340 60 l12 -6 v12z" fill="#e2e8f0"/>
<path d="M500 95 H346" stroke="#e2e8f0" stroke-width="3"/><path d="M340 95 l12 -6 v12z" fill="#e2e8f0"/>
<text x="470" y="50" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="end">wind + rain</text>
<text x="45" y="152" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">skin</text>
<text x="105" y="152" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">BASE</text>
<text x="215" y="152" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">MID: warm air</text>
<text x="312" y="152" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">SHELL</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "Tara! I won the mall lucky draw. Fifty percent off any adventure holiday!", mood="excited", shot="close", prop="phone")
L("tara", "Mum, you bought eleven tins of biscuits to enter.", mood="deadpan", shot="close")
L("mum", "They were on offer! Bali, Phuket, a nice beach.", mood="happy", shot="two")
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Cancel the beach. We are going to Everest. I've packed. Cotton T-shirts, lucky shorts, and a tiffin of prata.", mood="smug", shot="close", prop="tablet")
L("tara", "Dad. You get out of breath on the stairs at Bishan MRT.", mood="deadpan", shot="close")
L("dad", "At the top of Everest, prata can't go soggy. It's too cold. Science!", mood="determined", shot="close")
freeze("\"SCIENCE!\"", 2.4, narrator="Narrator: It was not science.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My father wants to climb the highest mountain on Earth. In shorts.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: DIFFICULTIES OF LIVING ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Time to open the drawer.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who disturbs my nap? Ah. Let me guess. Your father.", mood="bored", shot="close")
L("tara", "He wants to climb Everest. In cotton. With prata.", mood="worried", shot="two")
L("globo", "He once tried to find Everest on me by feeling for bumps. It is painted on.", mood="eyeroll", shot="close", gap=0.4)

scene("polar", [("tara", 300), ("dad", 620), ("globo", 960)], "THE CANADIAN ARCTIC · Nunavut · Flown In By Globo Airways")
L("dad", "Why the Arctic? Everest is in Asia. Even I know that.", mood="annoyed", shot="close", prop="sunglasses")
L("globo", "First, why extreme places are hard to live in. Temperature, water, food, building, health and isolation.", mood="teach", shot="close",
  boardClear=True, board="EXTREME: too hot, cold, dry or high")
L("tara", "Here, winters drop below minus thirty, water is locked up as ice, and winter means months of darkness.", mood="thinking", shot="close",
  board="Temp · water · food · health · isolation")
L("dad", "Building's easy. The ground is frozen solid. I'd build a heated bungalow.", mood="smug", shot="close")
L("globo", "It would sink. This is permafrost. Your heat leaks down, the ice in the soil melts, and the ground turns to mud.", mood="teach", shot="close",
  boardClear=True, board="PERMAFROST: frozen 2+ years", diagram=D_PILES)
L("tara", "So in towns like Iqaluit, buildings stand on piles. Cold air flows underneath, and the ground stays frozen.", mood="happy", shot="close",
  board="Heat → ice melts → house sinks, cracks")
L("globo", "The Inuit have lived here for thousands of years. They traditionally hunted seals and caribou, wore skin layers, and built igloos as hunting shelters.", mood="teach", shot="close",
  board="Fix: PILES + cold air gap")
L("tara", "Most now live in settlements and use snowmobiles. But hunting skills are still valued.", mood="neutral", shot="close",
  boardClear=True, board="INUIT: hunting · skin layers · igloos")

scene("desert", [("tara", 300), ("dad", 620), ("globo", 960)], "THE SAHARA · Forty Degrees In The Shade · There Is No Shade")
L("dad", "Who turned off the air con?", mood="shock", shot="close")
L("globo", "Deserts get under two hundred and fifty millimetres of rain a year. The Bedouin and Tuareg are nomadic herders, moving camels and goats between wells and oases.", mood="teach", shot="close",
  boardClear=True, board="BEDOUIN + TUAREG: nomadic herders")
L("tara", "Their long, loose robes and head wraps shade the skin and cut sweat loss.", mood="thinking", shot="close",
  board="Loose robes, head wraps: shade, less sweat")
L("globo", "Technology helps. Desalination, one of Singapore's taps, and air conditioning in Dubai. But it costs energy and money.", mood="teach", shot="close",
  board="TECH: desalination (an SG tap) · air-con")

scene("mountain", [("tara", 300), ("dad", 620), ("globo", 960)], "THE KHUMBU VALLEY · Nepal · Air Getting Thinner")
L("dad", "Why am I out of breath? I've only walked from the helicopter.", mood="worried", shot="close")
L("globo", "It's six point five degrees colder every thousand metres. And at the summit, each breath has about a third of the oxygen.", mood="teach", shot="close",
  boardClear=True, board="−6.5 °C per 1000 m · ⅓ oxygen at top")
L("globo", "The Sherpa have lived here for generations, so their bodies cope well with thin air. They grow barley, herd yaks, and many work as guides.", mood="teach", shot="close",
  board="SHERPA: thin air · barley · yaks · guides")
sfx("trombone")

# ---------------- ACT 2: EXTREME TOURISM ----------------
card("MEANWHILE, ON THE TRAIL TO BASE CAMP", "Mum has found a teahouse loyalty card", 2.4)
scene("mountain", [("mum", 330), ("tara", 640), ("globo", 960)])
L("mum", "It's busier than the Great Singapore Sale!", mood="shock", shot="close", prop="binoculars")
L("globo", "People come for challenge, scenery and wildlife. A few hundred climb Everest each spring. But tens of thousands trek to Base Camp.", mood="teach", shot="close",
  boardClear=True, board="Everest 8,849 m · WHY? challenge, scenery", diagram=D_EVEREST)
L("tara", "So the trekkers have the bigger total impact. Numbers times behaviour.", mood="thinking", shot="close",
  board="Impact = NUMBERS × BEHAVIOUR")
L("globo", "Sort impacts into social, economic and environmental. Social. Jobs for guides and porters, schools and clinics. But it's dangerous work. In twenty fourteen, an avalanche killed sixteen Nepali guides.", mood="teach", shot="close",
  boardClear=True, board="SOCIAL: jobs, schools · but danger")
L("mum", "Economic is my favourite. Permits, lodges, teahouses. Money!", mood="excited", shot="close",
  board="ECONOMIC: permits, lodges, teahouses")
L("tara", "But much of it flows out to tour firms abroad or in Kathmandu. Leakage. And it vanished after the twenty fifteen earthquake.", mood="neutral", shot="close",
  board="… but LEAKAGE · income can vanish")
L("mum", "Leakage? Like our kitchen ceiling every monsoon?", mood="annoyed", shot="close")
L("globo", "Different leakage. Same sad bucket.", mood="eyeroll", shot="close")
L("globo", "Environmental. Litter, waste, eroded trails. Rubbish barely rots in the cold. So climbers must bring eight kilos of rubbish down, or lose a deposit.", mood="teach", shot="close",
  boardClear=True, board="ENVIRONMENT: litter · 8 kg rubbish rule")
L("tara", "And since twenty twenty four, climbers carry their own poo down. In bags.", mood="deadpan", shot="close",
  board="2019 clean-up ~11 t · poo bags (2024)")
L("globo", "Carrying capacity. The most visitors a place can take before it's damaged or spoiled.", mood="teach", shot="close",
  board="CARRYING CAPACITY: max visitors")
L("mum", "Like me at a sale. Two bags in each hand, one in my teeth.", mood="smug", shot="close",
  board="2019 summit queue = capacity exceeded")

confess("dad", "VIKRAM RAO · Dad · Self-Described Mountaineer")
L("dad", "I didn't turn back because of altitude. The prata was getting cold. That's a risk assessment.", mood="smug", gap=0.6)

# ---------------- ACT 3: ANTARCTICA ----------------
card("ONE GLOBO FLIGHT LATER", "Mum has upgraded the voucher", 2.2)
scene("polar", [("mum", 300), ("tara", 620), ("globo", 960)], "THE ANTARCTIC PENINSULA · Summer · Still Freezing")
L("mum", "Antarctica! A giant cruise ship. Three thousand passengers, nine buffets, and we all get off to see penguins!", mood="excited", shot="close", prop="phone")
L("globo", "Nobody owns Antarctica. The Antarctic Treaty of nineteen fifty nine keeps it for peace and science. A later protocol bans mining.", mood="teach", shot="close",
  boardClear=True, board="TREATY 1959: peace + science · no mining")
L("globo", "And tour companies follow their own association's rules. Ships with more than five hundred passengers may not land anyone.", mood="teach", shot="close",
  boardClear=True, board="IAATO: ships over 500 → NO landing", diagram=D_IAATO)
L("mum", "Nine buffets and I can't touch a penguin?", mood="shock", shot="close")
L("globo", "Nobody touches penguins. One hundred visitors ashore at a time, one guide per twenty, five metres from wildlife.", mood="teach", shot="close",
  board="Max 100 ashore · 1 guide per 20 · 5 m")
L("tara", "And biosecurity. Boots scrubbed, bags vacuumed for seeds before every landing.", mood="neutral", shot="close",
  board="BIOSECURITY: scrub boots, vacuum bags")
L("mum", "They vacuum your bag? That's more cleaning than our flat gets.", mood="annoyed", shot="close")
L("globo", "Why call it positive tourism? The ambassador effect. Visitors go home as champions for protecting Antarctica.", mood="teach", shot="close",
  boardClear=True, board="POSITIVE: the AMBASSADOR effect")
L("tara", "But visitor numbers have more than doubled since two thousand and seven. Ships burn fuel, and seeds could hitch a ride.", mood="thinking", shot="close",
  board="~46,000 (2007–08) → ~122,000 (2023–24)")
L("globo", "But joining that association is voluntary. Weigh both sides, then judge.", mood="teach", shot="close",
  board="Sustainable? emissions · IAATO voluntary")

confess("mum", "MUM · Deal Hunter · Has Never Paid Full Price")
L("mum", "Okay. A small ship. A hundred people. I'll be an ambassador. For discounts.", mood="smug", gap=0.5)

# ---------------- ACT 4: PLANNING AN EXPEDITION ----------------
card("BACK HOME IN THE HDB FLAT", "Dad is planning Everest attempt number two", 2.2)
scene("living", [("tara", 260), ("dad", 600), ("globo", 980)])
L("dad", "Fine. I'll plan properly. Season, the June school holidays.", mood="determined", shot="close", prop="map")
L("globo", "June is the monsoon. Treks in the Himalayas go in October and November, or March to May.", mood="eyeroll", shot="close",
  boardClear=True, board="1 ROUTE + SEASON: Oct–Nov or Mar–May")
L("tara", "And climb slowly. Up high, sleep no more than about five hundred metres higher each night. Acclimatisation.", mood="teach", shot="close",
  board="ACCLIMATISE: ~500 m/night above 3000 m")
L("dad", "Kit. Cotton T-shirts. Comfy.", mood="smug", shot="close")
L("globo", "Cotton kills. It holds sweat on your skin, and chills you towards hypothermia.", mood="shock", shot="close",
  boardClear=True, board="2 KIT: COTTON KILLS", diagram=D_LAYERS)
L("tara", "Layers. A base layer wicks sweat, a fleece traps warm air, and a shell blocks wind and rain.", mood="happy", shot="close",
  board="Base wicks · mid traps air · shell")
L("globo", "Risk assessment. Score likelihood and severity from one to five, and multiply. Altitude sickness, three times five, fifteen. So climb slowly.", mood="teach", shot="close",
  boardClear=True, board="3 RISK = likelihood × severity")
L("dad", "Food. Prata, thosai and chapatis. With extra ghee.", mood="excited", shot="close",
  board="Altitude sickness 3 × 5 = 15 → go slow")
L("globo", "For once, ghee is sensible. Polar teams eat five to six thousand calories a day. And water is heavy. A litre weighs a kilo.", mood="teach", shot="close",
  board="4 FOOD ~5,000–6,000 kcal · 1 L = 1 kg")
L("tara", "Navigation. Map and compass, not just GPS. Batteries die in the cold.", mood="thinking", shot="close",
  board="5 NAV: map, compass, GPS, sat phone")
L("globo", "And Leave No Trace. Pack it in, pack it out. Leave what you find. Respect wildlife.", mood="teach", shot="close",
  board="6 LEAVE NO TRACE: pack it in, pack it out")
L("dad", "Even the prata?", mood="worried", shot="close")
L("globo", "Especially the prata.", mood="smug", shot="close", gap=0.3)

confess("globo", "GLOBO · Recap Globe · Spinning Slowly For Dad")
L("globo", "Recap. One. Arctic buildings stand on piles.", mood="teach", boardClear=True, board="1. Six problems · piles on permafrost")
L("globo", "Two. Indigenous peoples adapt. Technology costs energy.", mood="teach", board="2. Indigenous adaptation + technology")
L("globo", "Three. Tourism impacts. Social, economic, environmental.", mood="teach", board="3. SEE impacts · leakage · capacity")
L("globo", "Four. Antarctica's rules, and ambassadors.", mood="teach", board="4. Treaty · IAATO · ambassadors")
L("globo", "Five. Plan everything. And no prata.", mood="smug", board="5. Season · kit · risk · food · LNT", gap=0.5)

scene("park", [("tara", 260), ("mum", 560), ("dad", 840)], "BUKIT TIMAH HILL · 163 m · Expedition Day")
L("dad", "Team Rao. Layers on. Risk assessment done. Expedition begins.", mood="determined", shot="close", prop="compass")
L("mum", "And snacks. Buy one, get one free. Leave No Trace. I'm keeping the wrappers.", mood="happy", shot="close", prop="bucket")
L("tara", "Dad. It's Bukit Timah Hill. It's about a hundred and sixty metres high.", mood="deadpan", shot="close")
L("dad", "Acclimatisation, Tara. Next year, two hundred.", mood="smug", shot="close")
sfx("ding")
L("globo", "At that rate, he'll reach the summit in about forty four years. Wear a base layer.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "Why are Arctic buildings raised on piles?", "PERMAFROST", "cold air gap → ground stays frozen → no sinking",
  "Question one. Why are Arctic buildings raised on piles?",
  "To stop the permafrost thawing. The cold air gap keeps the ground frozen.")
challenge(2, "IAATO: maximum visitors ashore at one site at once?", "100", "ships with over 500 passengers can't land at all",
  "Question two. In Antarctica, how many tourists may be ashore at one site at a time?",
  "One hundred. And ships with over five hundred passengers can't land at all.")
challenge(3, "Likelihood 3, severity 4. What is the risk score?", "12", "risk = likelihood × severity = 3 × 4",
  "Question three. A hazard has a likelihood of three and a severity of four. What is its risk score?",
  "Twelve. Three times four.")
end_card()
