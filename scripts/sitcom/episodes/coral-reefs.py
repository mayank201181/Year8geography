# "Totally Raotional: Off The Map" S02E13 "Bleach, Please" (Topic: Coral Reefs & Their Threats)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: what-are-reefs, where-reefs-grow, value-of-reefs, coral-bleaching, local-threats.

EP = dict(topic="coral-reefs",
          logline="Dad buys a half-price water villa because the reef outside has gone 'premium white'. Globo explains polyps and "
                  "zooxanthellae, the three reef types, where reefs grow, why they matter, bleaching, acidification and local threats.")

D_POLYP = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0c4a6e"/>
<path d="M150 170 L150 110 Q150 96 164 96 L236 96 Q250 96 250 110 L250 170Z" fill="#fda4af"/>
<path d="M164 96 Q150 40 140 30 M182 96 Q176 36 172 20 M200 96 L200 18 M218 96 Q224 36 228 20 M236 96 Q250 40 260 30" stroke="#fda4af" stroke-width="7" fill="none" stroke-linecap="round"/>
<circle cx="170" cy="130" r="5" fill="#a16207"/><circle cx="196" cy="145" r="5" fill="#a16207"/><circle cx="226" cy="128" r="5" fill="#a16207"/><circle cx="210" cy="156" r="5" fill="#a16207"/><circle cx="184" cy="114" r="5" fill="#a16207"/>
<path d="M130 160 L130 190 L270 190 L270 160 L250 160 L250 172 L150 172 L150 160Z" fill="#f5f5f4"/>
<text x="290" y="40" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff">tentacles + mouth</text>
<text x="290" y="100" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fde047">ZOOXANTHELLAE</text>
<text x="290" y="120" font-family="sans-serif" font-size="14" fill="#fde047">algae: sunlight → food</text>
<text x="290" y="180" font-family="sans-serif" font-size="16" font-weight="bold" fill="#e7e5e4">limestone cup (CaCO₃)</text>
<path d="M286 96 L232 128" stroke="#fde047" stroke-width="2"/><path d="M286 176 L272 176" stroke="#e7e5e4" stroke-width="2"/>
</svg>"""

D_DARWIN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180">
<rect width="520" height="180" fill="#0369a1"/>
<path d="M30 120 L80 50 L130 120Z" fill="#78716c"/><rect x="22" y="112" width="116" height="10" fill="#fb7185"/>
<path d="M200 120 L250 80 L300 120Z" fill="#78716c"/><rect x="180" y="104" width="14" height="18" fill="#fb7185"/><rect x="306" y="104" width="14" height="18" fill="#fb7185"/>
<rect x="196" y="112" width="108" height="8" fill="#38bdf8"/>
<rect x="370" y="104" width="14" height="18" fill="#fb7185"/><rect x="476" y="104" width="14" height="18" fill="#fb7185"/><rect x="386" y="112" width="88" height="8" fill="#7dd3fc"/>
<path d="M0 108 H520" stroke="#e0f2fe" stroke-width="2" stroke-dasharray="6 6"/>
<text x="80" y="150" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">FRINGING</text>
<text x="250" y="150" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">BARRIER</text>
<text x="430" y="150" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">ATOLL</text>
<text x="250" y="172" font-family="sans-serif" font-size="13" fill="#e0f2fe" text-anchor="middle">island sinks · coral grows up · lagoon opens</text>
<path d="M150 80 h24 M330 80 h24" stroke="#fde047" stroke-width="3"/><path d="M174 80 l-8 -6 v12z M354 80 l-8 -6 v12z" fill="#fde047"/>
</svg>"""

D_MAP = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0c4a6e"/>
<rect x="0" y="60" width="520" height="80" fill="#155e75"/>
<path d="M0 60 H520 M0 140 H520" stroke="#fde047" stroke-width="2" stroke-dasharray="6 5"/>
<path d="M0 100 H520" stroke="#e0f2fe" stroke-width="1"/>
<text x="6" y="54" font-family="sans-serif" font-size="13" fill="#fde047">30°N</text>
<text x="6" y="156" font-family="sans-serif" font-size="13" fill="#fde047">30°S</text>
<text x="6" y="96" font-family="sans-serif" font-size="12" fill="#e0f2fe">Equator</text>
<circle cx="340" cy="100" r="30" fill="#f472b6" opacity="0.6"/>
<text x="340" y="104" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">CORAL △</text>
<g fill="#ef4444"><circle cx="150" cy="84" r="5"/><circle cx="170" cy="92" r="5"/><circle cx="250" cy="110" r="5"/><circle cx="270" cy="96" r="5"/><circle cx="320" cy="78" r="5"/><circle cx="370" cy="120" r="5"/><circle cx="400" cy="128" r="5"/><circle cx="440" cy="110" r="5"/><circle cx="300" cy="96" r="4"/></g>
<circle cx="322" cy="99" r="4" fill="#fde047"/><text x="322" y="88" font-family="sans-serif" font-size="11" fill="#fde047" text-anchor="middle">SG</text>
<path d="M95 150 Q90 120 100 80" stroke="#60a5fa" stroke-width="5" fill="none"/><path d="M100 80 l-8 8 h12z" fill="#60a5fa"/>
<text x="70" y="180" font-family="sans-serif" font-size="13" fill="#93c5fd">cold current → few reefs</text>
<text x="300" y="180" font-family="sans-serif" font-size="13" fill="#fecaca">● reefs: warm, clear, shallow</text>
</svg>"""

D_BLEACH = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">
<rect width="520" height="190" fill="#0c4a6e"/>
<circle cx="70" cy="80" r="38" fill="#fb923c"/><circle cx="230" cy="80" r="38" fill="#f8fafc"/>
<circle cx="420" cy="40" r="24" fill="#fb923c"/><circle cx="420" cy="130" r="24" fill="#4d7c0f"/>
<path d="M114 80 h66 M274 70 L380 44 M274 92 L380 126" stroke="#fde047" stroke-width="3"/>
<path d="M180 80 l-10 -6 v12z" fill="#fde047"/>
<text x="148" y="70" font-family="sans-serif" font-size="13" fill="#fde047" text-anchor="middle">heatwave</text>
<text x="70" y="140" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">healthy</text>
<text x="230" y="140" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">BLEACHED</text>
<text x="230" y="158" font-family="sans-serif" font-size="12" fill="#e0f2fe" text-anchor="middle">algae expelled · not dead yet</text>
<text x="456" y="44" font-family="sans-serif" font-size="13" fill="#bbf7d0">cools fast:</text>
<text x="456" y="60" font-family="sans-serif" font-size="13" fill="#bbf7d0">recovers</text>
<text x="456" y="134" font-family="sans-serif" font-size="13" fill="#fecaca">heat lasts:</text>
<text x="456" y="150" font-family="sans-serif" font-size="13" fill="#fecaca">dies</text>
</svg>"""

D_PLUME = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180">
<rect width="520" height="180" fill="#0369a1"/>
<rect width="170" height="180" fill="#65a30d"/>
<path d="M0 30 h30 v20 h-30z M40 30 h30 v20 h-30z M80 30 h30 v20 h-30z" fill="#a3e635"/>
<path d="M60 180 Q110 120 170 96" stroke="#92400e" stroke-width="10" fill="none"/>
<path d="M170 96 Q260 60 330 96 Q260 140 170 96Z" fill="#a16207" opacity="0.75"/>
<rect x="380" y="70" width="110" height="30" fill="#fb7185"/>
<text x="435" y="90" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">REEF</text>
<text x="85" y="22" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">farms</text>
<text x="250" y="54" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047" text-anchor="middle">river plume</text>
<text x="250" y="150" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">mud blocks light</text>
<text x="250" y="168" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">fertiliser feeds seaweed + starfish</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "Tara, look! A coral necklace. Seventy percent off!", mood="excited", shot="close", prop="phone")
L("tara", "Mum, it's plastic. It says plastic. On the necklace.", mood="deadpan", shot="close")
L("mum", "Rare plastic.", mood="smug", shot="two")
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Family. I bought us a water villa in the Maldives. Half price!", mood="smug", shot="close", prop="tablet")
L("dad", "The reef outside has gone completely white. I said, premium white! Like a condo lobby!", mood="smug", shot="close")
freeze("\"PREMIUM WHITE.\"", 2.4, narrator="Narrator: It was not premium.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My father thinks a dying reef is an interior design choice.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WHAT IS A REEF, WHERE REEFS GROW ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Time to open the drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who disturbs me? I was napping on the Pacific. It's my comfiest bit.", mood="bored", shot="close")
L("tara", "Globo, Dad bought a villa by a reef that's gone white. He thinks it's a feature.", mood="worried", shot="two")
L("globo", "Of course he does. Your father once tried to return a rainbow.", mood="eyeroll", shot="close", gap=0.4)

scene("reef", [("tara", 300), ("dad", 640), ("globo", 960)], "SISTERS' ISLANDS · Singapore · Flown In By Globo Submarines")
L("dad", "Lovely colourful rocks. And lovely plants.", mood="happy", shot="close", prop="sunglasses")
L("globo", "Not rocks. Not plants. Coral is an animal. Each blob is a polyp, a cousin of the jellyfish.", mood="teach", shot="close",
  boardClear=True, board="Coral = ANIMAL: a colony of POLYPS", diagram=D_POLYP)
L("globo", "Each polyp builds a cup of calcium carbonate. Limestone. Skeleton on skeleton, for thousands of years. That's a reef.", mood="teach", shot="close",
  board="Skeleton: CALCIUM CARBONATE (limestone)")
L("tara", "And inside the polyp live tiny algae. Zoh zan thelly.", mood="happy", shot="close",
  board="Inside: ZOOXANTHELLAE (algae)")
L("globo", "Correct. They use sunlight to make sugar, up to about ninety percent of the coral's food. The coral gives them shelter. Both win. Symbiosis.", mood="teach", shot="close",
  boardClear=True, board="Algae → up to ~90% of coral's food")
L("dad", "A lodger who pays for everything. My dream property.", mood="excited", shot="close",
  board="Coral → shelter + CO₂ = SYMBIOSIS")
L("globo", "Three kinds of reef. A fringing reef grows right against the shore, like here.", mood="teach", shot="close",
  boardClear=True, board="FRINGING: right next to the shore", diagram=D_DARWIN)
L("globo", "A barrier reef is offshore, behind a deep lagoon, like the Great Barrier Reef. An atoll is a ring of reef round a lagoon, no island in the middle. Like the Maldives.", mood="teach", shot="close",
  board="BARRIER: offshore, behind a lagoon")
L("tara", "In eighteen forty two, Darwin said it's one story. A volcanic island sinks, the coral keeps growing up. Fringing, barrier, atoll.", mood="thinking", shot="close",
  board="ATOLL: ring round a lagoon (Darwin)")
L("dad", "A sinking island. And they say my property sense is bad.", mood="smug", shot="close")
L("tara", "They don't say it, Dad. They scream it.", mood="deadpan", shot="close", gap=0.4)

L("globo", "Coral is fussy. Warm water, about eighteen to twenty nine degrees. Shallow and sunlit, mostly the top twenty five metres.", mood="teach", shot="close",
  boardClear=True, board="WARM: about 18–29 °C")
L("globo", "Clear, because mud blocks the sun. Salty. Low in nutrients. And something hard to stick to.", mood="teach", shot="close",
  board="SHALLOW + SUNLIT: top ~25 m")
L("tara", "Warm, shallow, clear, salty, clean. Basically a spa.", mood="deadpan", shot="close",
  board="CLEAR · SALTY · low nutrients · hard base")
L("globo", "So most reefs lie between about thirty degrees north and south. Few where cold currents chill west coasts, or at muddy river mouths like the Amazon.", mood="teach", shot="close",
  boardClear=True, board="Mostly between ~30°N and 30°S", diagram=D_MAP)
L("globo", "The richest is the Coral Triangle, around Indonesia and the Philippines. About three quarters of all reef building coral species.", mood="teach", shot="close",
  board="Gaps: cold currents · muddy rivers")
L("tara", "And Singapore sits right on its edge, at one degree north.", mood="happy", shot="close",
  board="CORAL TRIANGLE: ~¾ of coral species")
L("globo", "Reclamation buried much of its reef. Yet more than two hundred and fifty hard coral species survive, around Pulau Hantu, Kusu and the Sisters.", mood="teach", shot="close",
  boardClear=True, board="SG: 250+ hard coral species survive")
L("dad", "Tough. Like me.", mood="smug", shot="close",
  board="Fringing + patch reefs: Hantu, Kusu, Sisters")
L("globo", "No.", mood="eyeroll", shot="close")
sfx("trombone")


# ---------------- ACT 2: WHY REEFS MATTER ----------------
card("MEANWHILE, AT THE HAWKER CENTRE", "Mum is comparing prata prices", 2.4)
scene("hawker", [("mum", 260), ("tara", 520), ("uncle", 1000)])
L("mum", "Reefs cover less than one percent of the sea floor? Why the fuss?", mood="thinking", shot="close", prop="plate")
L("tara", "That one percent holds about a quarter of all sea species.", mood="deadpan", shot="close")
L("mum", "A quarter of everything for one percent of the space? Best deal ever!", mood="excited", shot="close")
poof("globo", 760)
L("globo", "For once, she's right. Rainforests of the sea. Branches, holes and caves. Thousands of homes in a tiny space.", mood="teach", shot="close",
  boardClear=True, board="<1% of sea floor → ~25% of marine species")
L("globo", "Food webs. Energy goes from producers, the algae, to grazers like parrotfish, then to predators like reef sharks.", mood="teach", shot="close",
  board="Producers → grazers → predators")
L("tara", "So overfish the parrotfish, and seaweed smothers the coral.", mood="thinking", shot="close",
  board="Lose parrotfish → seaweed smothers coral")
L("globo", "Yes. Parrotfish also grind up coral, and out the other end comes white sand. Many beaches are mostly parrotfish poo.", mood="smug", shot="close")
L("mum", "I paid to sit on fish poo?", mood="shock", shot="close")
L("tara", "Mum. You got it half price.", mood="deadpan", shot="close", gap=0.3)
L("globo", "People need reefs too. A healthy reef can absorb up to about ninety seven percent of a wave's energy.", mood="teach", shot="close",
  boardClear=True, board="Coast protection: up to ~97% wave energy")
L("globo", "Tourism and jobs. Food. Even medicine: a painkiller from cone snail venom.", mood="teach", shot="close",
  board="Tourism · jobs · food · MEDICINE")

confess("mum", "MUM · Deal Hunter · Has Never Paid Full Price")
L("mum", "A quarter of the species, one percent of the floor. If a reef was a shop, I'd queue overnight.", mood="smug", gap=0.5)

# ---------------- ACT 3: BLEACHING, ACIDIFICATION, LOCAL THREATS ----------------
card("THE MALDIVES", "Dad's 'premium white' water villa. Flown In By Globo Airways.", 2.6)
scene("reef", [("tara", 260), ("dad", 600), ("globo", 960)])
L("dad", "Behold. Premium white coral. Minimalist. Expensive looking.", mood="excited", shot="close", prop="sunglasses")
L("globo", "That is bleached coral. A marine heatwave kept the sea about one degree above its summer maximum, for weeks.", mood="teach", shot="close",
  boardClear=True, board="MARINE HEATWAVE: ~1 °C+ above max, weeks", diagram=D_BLEACH)
L("globo", "Heat damages the algae, so the polyp expels them. It loses its colour and most of its food. The white is its skeleton, showing through.", mood="teach", shot="close",
  board="Stressed polyp EXPELS its algae")
L("dad", "So it's dead. I bought a graveyard view.", mood="sad", shot="close")
L("tara", "Not yet. If the water cools quickly, the algae return and it recovers. If the heat lasts, it starves and dies.", mood="thinking", shot="close",
  board="Cools fast → RECOVERS · heat lasts → DIES")
L("globo", "Great Barrier Reef. Twenty sixteen, mass bleaching, roughly thirty percent of shallow corals died. Then twenty seventeen, back to back.", mood="teach", shot="close",
  boardClear=True, board="GBR mass bleaching: 2016 (~30% died), 2017")
L("globo", "Then twenty twenty, twenty twenty two, and twenty twenty four. Five in eight years.", mood="teach", shot="close",
  board="2020 · 2022 · 2024 (5th in 8 years)")
L("tara", "And in twenty twenty four, scientists declared the fourth global bleaching event.", mood="worried", shot="close",
  board="4th GLOBAL bleaching event: April 2024")
L("dad", "And carbon dioxide turns the sea into acid. Like swimming in lime juice!", mood="smug", shot="close")
L("globo", "Wrong. The ocean absorbs our carbon dioxide, making a weak acid. But the sea is still slightly alkaline.", mood="eyeroll", shot="close",
  boardClear=True, board="OCEAN ACIDIFICATION: sea absorbs CO₂")
L("globo", "Its P H fell from about eight point two to eight point one. Less alkaline, not acidic.", mood="teach", shot="close",
  board="pH ~8.2 → ~8.1: LESS ALKALINE, not acid")
L("tara", "So less carbonate for polyps to build skeletons. Weaker reefs.", mood="thinking", shot="close",
  board="Less carbonate → weaker skeletons")
L("dad", "Less alkaline. I was nearly right.", mood="smug", shot="close")
L("tara", "You were the opposite of right. Confidently.", mood="deadpan", shot="close", gap=0.4)

confess("dad", "VIKRAM RAO · Dad · Self-Described Property Genius")
L("dad", "I did not buy next to a bleached reef. It's a reef between colours. A fixer upper. A fixer underwater.", mood="smug", gap=0.6)

scene("reef", [("tara", 260), ("dad", 600), ("globo", 960)])
L("dad", "Look! I'm standing on the coral for a selfie!", mood="excited", shot="wide", prop="phone")
L("globo", "Get off! Careless tourism. Feet, anchors and souvenir hunters break coral. So do some sunscreen chemicals.", mood="shock", shot="close",
  boardClear=True, board="Careless TOURISM: feet, anchors, sunscreen")
L("globo", "Local threats. Overfishing. And illegal blast fishing, in parts of South East Asia. Bombs turn coral to rubble.", mood="teach", shot="close",
  board="OVERFISHING · illegal BLAST FISHING → rubble")
L("tara", "Some start on land. Rain washes soil and fertiliser off farms into rivers, and out to the reef in a plume.", mood="thinking", shot="close",
  boardClear=True, board="Farm RUN-OFF + SEWAGE in river plumes", diagram=D_PLUME)
L("globo", "Mud blocks light. Fertiliser feeds seaweed. Sewage adds nutrients and coral disease.", mood="teach", shot="close",
  board="Mud blocks light · nutrients feed seaweed")
L("globo", "Nutrients also feed baby crown of thorns starfish, which eat coral. They're natural, but outbreaks can strip a whole reef.", mood="teach", shot="close",
  board="CROWN-OF-THORNS starfish outbreaks")
L("tara", "And land reclamation and dredging bury reefs. Like much of Singapore's.", mood="worried", shot="close",
  boardClear=True, board="RECLAMATION + dredging bury reefs (SG)")
L("globo", "Some threats are natural, like cyclones and disease. Most are human. And several stresses at once make recovery far less likely.", mood="teach", shot="close",
  board="NATURAL: cyclones · disease · COTS")
L("dad", "Heat, mud, bombs, starfish and tourists. That's me at tax time.", mood="sad", shot="close",
  board="HUMAN: most · several at once = worse")
L("tara", "Dad, you're one of the tourists.", mood="deadpan", shot="close", gap=0.5)

confess("globo", "GLOBO · Recap Globe · Spinning Slowly For Dad")
L("globo", "Recap. One. Coral is an animal. Polyps build limestone; algae feed them.", mood="teach", boardClear=True, board="1. Polyps + zooxanthellae = symbiosis")
L("globo", "Two. Fringing, barrier, atoll. Warm, shallow, clear, salty water.", mood="teach", board="2. Fringing · barrier · atoll · 30°N–30°S")
L("globo", "Three. Reefs: under one percent of the sea floor, a quarter of sea species.", mood="teach", board="3. <1% of floor, ~25% of species")
L("globo", "Four. Bleached is not dead, yet. Acidification makes the sea less alkaline.", mood="teach", board="4. Bleached ≠ dead · pH falls, less alkaline")
L("globo", "Five. Local threats pile up. And never stand on coral.", mood="smug", board="5. Local threats pile up: fewer = better", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("dad", "Good news. I returned the villa. And I signed us up to help at a coral nursery off Sisters' Islands.", mood="smug", shot="close")
L("tara", "Dad. That's actually a good idea.", mood="shock", shot="close")
L("mum", "And it was free!", mood="excited", shot="close", prop="phone")
L("dad", "I know. I'm a genius.", mood="smug", shot="close")
sfx("ding")
L("globo", "Put me back in the drawer. And bin that necklace. The sea has enough plastic.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "What do zooxanthellae give the coral?", "FOOD", "photosynthesis → sugars → up to ~90% of food",
  "Question one. What do the algae inside a coral give it?",
  "Food. Sugars from photosynthesis, up to about ninety percent of its food.")
challenge(2, "A coral has just bleached. Is it dead?", "NOT YET", "cools fast → algae return → recovers",
  "Question two. A coral has just bleached. Is it dead?",
  "Not yet. If the water cools quickly, the algae return. If the heat lasts, it starves.")
challenge(3, "Ocean acidification: is sea water now acidic?", "NO", "pH ~8.2 → ~8.1: still alkaline, just LESS",
  "Question three. Is sea water now acidic?",
  "No. It's still slightly alkaline, just less alkaline than before.")
end_card()
