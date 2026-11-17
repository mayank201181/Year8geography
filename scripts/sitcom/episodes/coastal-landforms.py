# "Totally Raotional: Off The Map" S02E12 "Stack To The Future" (Topic: Coastal Processes & Landforms)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: headlands-bays, cave-arch-stack, longshore-drift, depositional-landforms, coastal-management.

EP = dict(topic="coastal-landforms",
          logline="Dad buys a clifftop cottage whose garden is already in the sea. Globo, a grumpy globe from the junk drawer, "
                  "explains headlands and bays, cave to stump, longshore drift, spits and tombolos, and how Singapore defends its coast.")

D_BAYS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">
<rect width="520" height="190" fill="#0c4a6e"/>
<path d="M0 70 Q60 64 110 70 L110 190 L0 190Z" fill="#cbd5e1"/>
<path d="M110 70 Q190 150 270 70 L270 190 L110 190Z" fill="#fcd34d"/>
<path d="M270 70 Q320 62 370 70 L370 190 L270 190Z" fill="#cbd5e1"/>
<path d="M370 70 Q445 150 520 70 L520 190 L370 190Z" fill="#fcd34d"/>
<path d="M10 30 q15 -8 30 0 t30 0 M200 40 q15 -8 30 0 t30 0 M400 34 q15 -8 30 0 t30 0" stroke="#7dd3fc" stroke-width="3" fill="none"/>
<text x="55" y="56" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fff" text-anchor="middle">HEADLAND</text>
<text x="320" y="56" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fff" text-anchor="middle">HEADLAND</text>
<text x="190" y="140" font-family="sans-serif" font-size="20" font-weight="bold" fill="#78350f" text-anchor="middle">BAY</text>
<text x="445" y="140" font-family="sans-serif" font-size="20" font-weight="bold" fill="#78350f" text-anchor="middle">BAY</text>
<text x="55" y="176" font-family="sans-serif" font-size="15" fill="#1e293b" text-anchor="middle">hard rock</text>
<text x="320" y="176" font-family="sans-serif" font-size="15" fill="#1e293b" text-anchor="middle">hard rock</text>
<text x="190" y="176" font-family="sans-serif" font-size="15" fill="#78350f" text-anchor="middle">soft rock</text>
<text x="445" y="176" font-family="sans-serif" font-size="15" fill="#78350f" text-anchor="middle">soft rock</text>
</svg>"""

D_STACK = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170">
<rect width="520" height="130" fill="#0c4a6e"/><rect y="118" width="520" height="52" fill="#0ea5e9"/>
<rect x="14" y="30" width="76" height="100" fill="#e7e5e4"/><path d="M52 130 L50 90 L55 70" stroke="#1e293b" stroke-width="3" fill="none"/>
<rect x="118" y="30" width="76" height="100" fill="#e7e5e4"/><path d="M136 130 Q156 80 176 130Z" fill="#1e293b"/>
<rect x="222" y="30" width="76" height="100" fill="#e7e5e4"/><path d="M236 130 Q260 66 284 130Z" fill="#0ea5e9"/>
<rect x="336" y="30" width="44" height="100" fill="#e7e5e4"/>
<rect x="438" y="96" width="44" height="34" fill="#e7e5e4"/>
<text x="52" y="160" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">crack</text>
<text x="156" y="160" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">cave</text>
<text x="260" y="160" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">arch</text>
<text x="358" y="160" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">stack</text>
<text x="460" y="160" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">stump</text>
<path d="M96 80 h14 M200 80 h14 M304 80 h22 M392 80 h34" stroke="#fde047" stroke-width="3"/>
</svg>"""

D_DRIFT = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="80" fill="#0369a1"/><rect y="80" width="520" height="120" fill="#fcd34d"/>
<path d="M20 20 L80 60" stroke="#fff" stroke-width="4"/><path d="M80 60 l-14 -2 l8 -10z" fill="#fff"/>
<text x="20" y="16" font-family="sans-serif" font-size="14" fill="#fff">prevailing wind</text>
<path d="M60 84 L150 150 L150 84 L240 150 L240 84 L330 150 L330 84 L420 150 L420 84" stroke="#1e293b" stroke-width="4" fill="none" stroke-dasharray="0"/>
<path d="M150 150 l-14 -2 l7 -10z M240 150 l-14 -2 l7 -10z M330 150 l-14 -2 l7 -10z M420 150 l-14 -2 l7 -10z" fill="#1e293b"/>
<path d="M150 84 l-6 12 h12z M240 84 l-6 12 h12z M330 84 l-6 12 h12z M420 84 l-6 12 h12z" fill="#dc2626"/>
<circle cx="60" cy="84" r="8" fill="#78716c"/>
<text x="92" y="140" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">swash</text>
<text x="158" y="122" font-family="sans-serif" font-size="15" font-weight="bold" fill="#dc2626">backwash</text>
<path d="M140 184 H470" stroke="#16a34a" stroke-width="5"/><path d="M470 184 l-14 -8 v16z" fill="#16a34a"/>
<text x="140" y="176" font-family="sans-serif" font-size="15" font-weight="bold" fill="#14532d">sand moves along the beach</text>
</svg>"""

D_SPIT = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0369a1"/>
<path d="M0 90 L250 90 L250 200 L0 200Z" fill="#a3e635"/>
<path d="M250 90 Q360 70 440 78 Q480 84 470 112 Q462 96 440 94 Q360 92 262 104Z" fill="#fcd34d"/>
<path d="M262 104 Q360 94 438 98 Q440 130 380 140 Q300 150 262 132Z" fill="#65a30d"/>
<path d="M300 200 Q290 150 262 120" stroke="#7dd3fc" stroke-width="10" fill="none"/>
<path d="M20 70 H220" stroke="#fff" stroke-width="4"/><path d="M220 70 l-14 -8 v16z" fill="#fff"/>
<text x="20" y="58" font-family="sans-serif" font-size="15" fill="#fff">longshore drift</text>
<text x="360" y="68" font-family="sans-serif" font-size="18" font-weight="bold" fill="#fde047" text-anchor="middle">SPIT</text>
<text x="478" y="136" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="end">hooked end</text>
<text x="350" y="128" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1a2e05" text-anchor="middle">salt marsh</text>
<text x="330" y="185" font-family="sans-serif" font-size="14" fill="#fff">river mouth</text>
<text x="110" y="150" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1a2e05" text-anchor="middle">LAND</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "Pack your bags! December deal! Four nights on the Jurassic Coast in England. Pay for three, get one free!", mood="excited", shot="close", prop="phone")
L("tara", "Mum. December. In England. On a beach. The free night is them letting you leave.", mood="deadpan", shot="close")
L("mum", "It's scenic! There are cliffs. And rocks with actual names!", mood="annoyed", shot="two")
L("tara", "Rocks with names. Finally, Dad will make some friends.", mood="deadpan", shot="close", gap=0.5)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Family. I have done something brilliant. I bought us a cottage. On a cliff top, in Dorset. Sea views from every room.", mood="smug", shot="close", prop="tablet")
L("dad", "Even from the garden. Because the garden is now in the sea. The seller said that's why it was so cheap. I said, his loss.", mood="smug", shot="close")
freeze("\"HIS LOSS.\"", 2.4, narrator="Narrator: It was, in fact, Dad's loss.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My father bought a house that is falling into the sea. On an app. During dinner.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: HEADLANDS, BAYS, CAVE TO STUMP ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Emergency. Time to open the drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who dares open the drawer? Ah. The Raos. Do you know what time it is? I'm a globe. It's every time, somewhere.", mood="bored", shot="close")
L("tara", "Globo, Dad bought a cottage on a cliff. The garden already fell into the sea.", mood="worried", shot="two")
L("globo", "Of course he did. Your father once asked me which way is up. I am a sphere. Every way is up.", mood="eyeroll", shot="close", gap=0.4)

confess("globo", "GLOBO · Retired Classroom Globe · Lives In The Junk Drawer")
L("globo", "Good evening. I am Globo. Thirty years in a classroom, spun by bored children. I still have the Soviet Union on me. Don't tell the Soviet Union.", mood="smug", gap=0.5)

scene("beach", [("tara", 300), ("dad", 620), ("globo", 960)], "THE JURASSIC COAST · Dorset, England · Flown In By Globo Airways")
L("dad", "Whoa. Where's my cottage?", mood="excited", shot="close", prop="sunglasses")
L("globo", "Next to the large crack. First, the coast. Bits sticking out into the sea are headlands. Bits curving in are bays.", mood="teach", shot="close",
  boardClear=True, board="Headland sticks out · Bay curves in")
L("globo", "Here, bands of hard and soft rock meet the sea at right angles. A discordant coastline. Soft rock, like clay and sand, erodes quickly into a bay. Hard rock, like chalk and limestone, resists, and is left as a headland.", mood="teach", shot="close",
  board="Discordant: rock bands at 90° to coast", diagram=D_BAYS)
L("tara", "Like Swanage Bay. Soft clays in the bay, chalk and limestone either side.", mood="happy", shot="close",
  board="Soft rock → BAY · Hard rock → HEADLAND ✔")
L("globo", "Correct. If the bands run parallel to the coast, it's concordant, with far fewer bays. Unless the sea breaks through, like at Lulworth Cove.", mood="smug", shot="close",
  boardClear=True, board="Concordant: bands PARALLEL to coast")
L("dad", "So my cottage is on hard rock. Rock solid!", mood="smug", shot="close")
L("globo", "Waves bend around headlands and pile their energy onto them. Your cottage is in the front row of a very long fight.", mood="eyeroll", shot="close",
  board="Waves bend → energy hits headlands")
L("globo", "Waves attack the cliff base, between high and low tide, carving a wave cut notch. The rock above collapses, the cliff retreats, and leaves a flat wave cut platform.", mood="teach", shot="close",
  boardClear=True, board="Notch → collapse → cliff retreats")
L("dad", "Collapses? With the cottage on it?", mood="shock", shot="close", board="Left behind: wave-cut platform")
L("globo", "Cliffs do not read the property listings.", mood="smug", shot="close", gap=0.3)
L("globo", "Now. Waves force water and air into a crack in the headland. Hydraulic action. The crack widens into a cave. The cave erodes right through into an arch, like Durdle Door.", mood="teach", shot="close",
  boardClear=True, board="Crack → CAVE → ARCH", diagram=D_STACK)
L("tara", "Then the arch roof is weathered and eroded until it falls in, leaving a stack.", mood="thinking", shot="close",
  board="Roof falls → STACK")
L("globo", "When the base of the stack is eroded, it collapses into a stump. Old Harry is a stack. His wife was too, until she collapsed in the eighteen nineties.", mood="teach", shot="close",
  board="Base eroded → STUMP")
L("tara", "Geography has the saddest love stories.", mood="deadpan", shot="close")
L("dad", "So which bit is my cottage on?", mood="worried", shot="two")
L("globo", "The crack.", mood="smug", shot="close")
sfx("trombone")

confess("dad", "VIKRAM RAO · Dad · Self-Described Property Genius")
L("dad", "I did not buy a cottage on a crack. I bought a future arch. Arches are very popular with tourists. So technically, I'm now in tourism.", mood="smug", gap=0.6)

# ---------------- ACT 2: LONGSHORE DRIFT AND DEPOSITION ----------------
card("MEANWHILE, FURTHER DOWN THE BEACH", "Mum has found a deal on deck chairs", 2.4)
scene("beach", [("mum", 330), ("tara", 640)])
L("mum", "Tara! I left my flip flop by the water, and now it's way over there! Somebody moved it!", mood="annoyed", shot="close", prop="bucket")
L("tara", "Mum, nobody is stealing an eleven dollar flip flop.", mood="deadpan", shot="close")
L("mum", "Nine. It was on sale.", mood="smug", shot="close")
poof("globo", 980)
L("globo", "The sea moved it. Longshore drift. The prevailing wind sends waves in at an angle, so the swash runs up the beach at that angle, carrying sand, pebbles and flip flops.", mood="teach", shot="close",
  boardClear=True, board="Swash: up the beach at an angle", diagram=D_DRIFT)
L("globo", "The backwash runs straight back down, because of gravity. Up at an angle, straight down. A zigzag along the coast.", mood="teach", shot="close",
  board="Backwash: straight down (gravity)")
L("tara", "So it goes the same way as the prevailing wind. We can track it!", mood="excited", shot="close", board="Zigzag in the direction of the wind")
L("globo", "Four ways the sea carries things. Traction, boulders rolled along. Saltation, pebbles bounced. Suspension, sand and silt carried in the water. Solution, minerals dissolved in it.", mood="teach", shot="close",
  boardClear=True, board="Traction: boulders ROLLED")
L("mum", "Saltation? I thought that's what Uncle Hock does to the chips.", mood="thinking", shot="close", board="Saltation: pebbles BOUNCED")
L("tara", "Rolled, bounced, carried, dissolved.", mood="happy", shot="close", board="Suspension: sand + silt CARRIED")
L("globo", "When waves lose energy, they drop their load. Deposition. In sheltered bays, under gentle constructive waves. That's how beaches build up.", mood="teach", shot="close",
  board="Solution: minerals DISSOLVED")
L("tara", "And if the coast bends, like at a river mouth, but the drift keeps going?", mood="thinking", shot="close",
  boardClear=True, board="Deposition: waves lose energy → drop load")
L("globo", "Then sand is dropped into the sea, in a long thin finger of land. A spit, like Spurn Head. Changing winds curve the end into a hook, and salt marsh grows in the calm water behind.", mood="teach", shot="close",
  board="SPIT: hooked end, salt marsh behind", diagram=D_SPIT)
L("globo", "A spit right across a bay is a bar, with a lagoon behind it, like Slapton Ley. One that joins an island to the mainland is a tombolo, like Chesil Beach and the Isle of Portland.", mood="teach", shot="close",
  boardClear=True, board="BAR: across a bay → lagoon behind")
L("mum", "Found it! My flip flop! At the end of the spit!", mood="excited", shot="wide", board="TOMBOLO: links an island to land")
L("tara", "Mum's flip flop has seen more of Dorset than we have.", mood="deadpan", shot="close", gap=0.4)

confess("mum", "MUM · Deal Hunter · Has Never Paid Full Price")
L("mum", "Nine dollars. Carried along a whole beach for free. Best deal of the holiday.", mood="smug", gap=0.5)

# ---------------- ACT 3: MANAGING THE COAST ----------------
card("BACK BELOW THE COTTAGE", "Garden status: still in the sea", 2.2)
scene("beach", [("tara", 260), ("dad", 600), ("globo", 980)])
L("dad", "I have a plan. A giant wall. The sea can't get me behind a wall.", mood="determined", shot="close")
L("globo", "Hard engineering. A sea wall reflects waves back out. Effective, very expensive. Rock armour boulders and gabions, wire cages of rocks, absorb wave energy instead.", mood="teach", shot="close",
  boardClear=True, board="HARD: sea wall · rock armour · gabions")
L("globo", "Groynes, like that one, trap sand moving by longshore drift. A wider beach soaks up the waves.", mood="teach", shot="close",
  board="Groynes: trap longshore drift")
L("tara", "But then the beaches further along get less sand.", mood="thinking", shot="close")
L("globo", "Exactly. When Mappleton, on the Holderness coast, was protected, the coast just south of it eroded faster.", mood="smug", shot="close",
  board="✘ Starves beaches further along")
L("dad", "What about soft engineering? I like soft things. Cushions. Your mother's chapatis.", mood="happy", shot="close")
L("globo", "Soft engineering works with nature. Beach nourishment, adding sand. Marram grass to hold dunes together. And managed retreat, letting the sea flood low value land into salt marsh.", mood="teach", shot="close",
  boardClear=True, board="SOFT: nourishment · dunes · retreat")
L("dad", "Is my cottage low value?", mood="worried", shot="close")
L("tara", "Dad. It's on a crack.", mood="deadpan", shot="close")
L("globo", "Always ask. Who pays, who benefits, and who loses out further along?", mood="teach", shot="close",
  board="Always ask: cost? benefit? who loses?", gap=0.3)

card("TWO WEEKS LATER", "Home. Hot. No cliffs.", 2.2)
scene("living", [("tara", 260), ("mum", 600), ("globo", 980)])
L("mum", "Ahh, home. No cliffs. Singapore is safe.", mood="happy", shot="close")
L("globo", "Is it? Around a third of Singapore is less than five metres above the sea. And scientists project the sea could rise up to about a metre by twenty one hundred.", mood="teach", shot="close",
  boardClear=True, board="About 30% of SG is < 5 m above the sea")
L("globo", "So, mostly hard engineering. Around seventy percent of the coast has sea walls or stone slopes. East Coast Park has rock breakwaters, with sandy bays between.", mood="teach", shot="close",
  board="Sea level: up to ~1 m higher by 2100")
L("tara", "Man made headlands and bays! That's why East Coast is all little curvy beaches.", mood="shock", shot="close", board="~70% of coast: sea walls + rock slopes")
L("globo", "Marina Barrage keeps the sea out of the city's reservoir. New land, like Changi Terminal Five, is built higher. And mangroves are soft engineering. Their roots trap mud and calm waves.", mood="teach", shot="close",
  board="Barrage · higher land · mangroves")
L("mum", "How much does all of that cost?", mood="worried", shot="close")
L("globo", "The government has said around a hundred billion dollars or more, over a hundred years.", mood="teach", shot="close", board="Cost: ~$100 billion+ over 100 years")
L("tara", "Mum. You can't get a sea wall at seventy percent off.", mood="deadpan", shot="close", gap=0.5)

confess("globo", "GLOBO · Recap Globe · Spinning Slowly For Dad")
L("globo", "Recap. One. Hard rock, headlands. Soft rock, bays.", mood="teach", boardClear=True, board="1. Hard → headland · soft → bay")
L("globo", "Two. Crack, cave, arch, stack, stump.", mood="teach", board="2. Crack → cave → arch → stack → stump")
L("globo", "Three. The swash goes up at an angle. The backwash comes straight down.", mood="teach", board="3. Swash at angle · backwash straight")
L("globo", "Four. Deposition builds beaches, spits, bars and tombolos.", mood="teach", board="4. Beach · spit · bar · tombolo")
L("globo", "Five. Hard engineering fights the sea, soft works with it. And never buy a house on a crack.", mood="smug", board="5. Hard vs soft: cost + who loses?", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("dad", "Good news. I sold the cottage. To a geography teacher. She's always wanted to watch an arch form in real time.", mood="smug", shot="close")
L("tara", "That's actually a great deal.", mood="shock", shot="close")
L("dad", "I know. I'm a genius.", mood="smug", shot="close")
sfx("ding")
L("globo", "Put me back in the drawer. Gently. I dent easily. Mostly in Asia.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "Which forms first: an arch or a stack?", "ARCH", "crack → cave → arch → stack → stump",
  "Question one. Which forms first? The arch, or the stack?",
  "The arch. A stack is what's left when the arch roof falls in. If you said stack, the roof has fallen on your answer.")
challenge(2, "The swash runs up the beach at an angle. How does the backwash return?", "STRAIGHT DOWN", "gravity → at 90° to the sea → zigzag",
  "Question two. The swash runs up the beach at an angle. How does the backwash come back?",
  "Straight down the beach, because of gravity. Up at an angle, straight down. That's the zigzag.")
challenge(3, "Groynes trap sand on one beach. What happens to beaches further along?", "LESS SAND", "starved of sand → narrower → more erosion",
  "Question three. On one beach, the groynes trap the sand. What happens to the beaches further along?",
  "They get less sand, so they shrink and erode faster. You just push the problem down the coast.")
end_card()
