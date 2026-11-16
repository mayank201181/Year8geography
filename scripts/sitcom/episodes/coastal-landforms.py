# "Off The Map" (a Claude Sitcom) S01E11 "Stack To The Future" (Topic: Coastal Landforms)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="coastal-landforms",
    logline="Dad buys a 'holiday home with sea views on every side' from an online ad. It is a chalk stack. Atlas spins the family to Old Harry Rocks in Dorset, Nani narrates the cave-to-stump sequence like a soap opera, and Mr Tan drills the six-mark answer and the six-figure grid reference.",
    names={"guest": "DR OKAFOR"},
)

COAST = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">'
    '<rect x="0" y="0" width="520" height="230" fill="#1e3a8a"/>'
    '<rect x="0" y="10" width="400" height="60" fill="#94a3b8"/>'
    '<rect x="0" y="70" width="290" height="70" fill="#a16207"/>'
    '<rect x="290" y="70" width="18" height="70" fill="#fde68a"/>'
    '<rect x="0" y="140" width="400" height="60" fill="#94a3b8"/>'
    '<text x="16" y="48" font-family="sans-serif" font-size="20" fill="#0f172a">HEADLAND · hard chalk</text>'
    '<text x="16" y="112" font-family="sans-serif" font-size="20" fill="#fef3c7">BAY · soft clay and sand</text>'
    '<text x="16" y="178" font-family="sans-serif" font-size="20" fill="#0f172a">HEADLAND · hard limestone</text>'
    '<text x="318" y="100" font-family="sans-serif" font-size="18" fill="#fde68a">beach</text>'
    '<line x1="510" y1="40" x2="420" y2="40" stroke="#fca5a5" stroke-width="5"/>'
    '<polygon points="406,40 422,31 422,49" fill="#fca5a5"/>'
    '<line x1="510" y1="170" x2="420" y2="170" stroke="#fca5a5" stroke-width="5"/>'
    '<polygon points="406,170 422,161 422,179" fill="#fca5a5"/>'
    '<line x1="510" y1="122" x2="330" y2="122" stroke="#7dd3fc" stroke-width="2" stroke-dasharray="6 5"/>'
    '<text x="10" y="222" font-family="sans-serif" font-size="18" fill="#f8fafc">Waves bend: energy focused on headlands</text>'
    '</svg>'
)

SEQ = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">'
    '<rect x="10" y="70" width="110" height="100" fill="#cbd5e1"/>'
    '<line x1="65" y1="80" x2="65" y2="125" stroke="#334155" stroke-width="3"/>'
    '<path d="M45 170 Q65 118 85 170 Z" fill="#334155"/>'
    '<rect x="140" y="70" width="110" height="100" fill="#cbd5e1"/>'
    '<path d="M165 170 Q195 100 225 170 Z" fill="#1e3a8a"/>'
    '<rect x="270" y="70" width="50" height="100" fill="#cbd5e1"/>'
    '<rect x="345" y="85" width="30" height="85" fill="#cbd5e1"/>'
    '<rect x="400" y="70" width="50" height="100" fill="#cbd5e1"/>'
    '<rect x="476" y="142" width="30" height="28" fill="#cbd5e1"/>'
    '<rect x="0" y="158" width="520" height="62" fill="#1e3a8a" opacity="0.9"/>'
    '<text x="65" y="50" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">1 cave</text>'
    '<text x="195" y="50" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">2 arch</text>'
    '<text x="325" y="50" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">3 stack</text>'
    '<text x="455" y="50" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">4 stump</text>'
    '<text x="65" y="202" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">crack grows</text>'
    '<text x="195" y="202" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">cuts through</text>'
    '<text x="325" y="202" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fca5a5">roof falls</text>'
    '<text x="455" y="202" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">undercut</text>'
    '</svg>'
)

DEP = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">'
    '<rect x="0" y="0" width="520" height="230" fill="#1e3a8a"/>'
    '<rect x="5" y="20" width="60" height="130" fill="#166534"/>'
    '<ellipse cx="102" cy="72" rx="26" ry="12" fill="#86efac"/>'
    '<path d="M65 40 L140 40 Q158 46 150 74" fill="none" stroke="#fde047" stroke-width="10" stroke-linecap="round"/>'
    '<rect x="180" y="20" width="160" height="30" fill="#166534"/>'
    '<rect x="180" y="50" width="25" height="100" fill="#166534"/>'
    '<rect x="315" y="50" width="25" height="100" fill="#166534"/>'
    '<rect x="205" y="50" width="110" height="85" fill="#7dd3fc"/>'
    '<line x1="205" y1="138" x2="315" y2="138" stroke="#fde047" stroke-width="10"/>'
    '<rect x="355" y="20" width="160" height="40" fill="#166534"/>'
    '<rect x="428" y="60" width="14" height="42" fill="#fde047"/>'
    '<circle cx="435" cy="124" r="25" fill="#166534"/>'
    '<line x1="172" y1="10" x2="172" y2="160" stroke="#f8fafc" stroke-width="1"/>'
    '<line x1="348" y1="10" x2="348" y2="160" stroke="#f8fafc" stroke-width="1"/>'
    '<text x="85" y="186" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">SPIT</text>'
    '<text x="260" y="186" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">BAR</text>'
    '<text x="435" y="186" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">TOMBOLO</text>'
    '<text x="85" y="214" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">Spurn Head</text>'
    '<text x="260" y="214" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">Slapton Sands</text>'
    '<text x="435" y="214" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">Chesil Beach</text>'
    '</svg>'
)

GRID = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250">'
    '<rect x="80" y="20" width="200" height="200" fill="#0f172a" stroke="#7dd3fc" stroke-width="3"/>'
    '<g stroke="#7dd3fc" stroke-width="2">'
    '<line x1="100" y1="220" x2="100" y2="210"/><line x1="120" y1="220" x2="120" y2="210"/>'
    '<line x1="140" y1="220" x2="140" y2="210"/><line x1="160" y1="220" x2="160" y2="204"/>'
    '<line x1="80" y1="200" x2="90" y2="200"/><line x1="80" y1="180" x2="90" y2="180"/>'
    '<line x1="80" y1="160" x2="90" y2="160"/><line x1="80" y1="140" x2="90" y2="140"/>'
    '<line x1="80" y1="120" x2="90" y2="120"/><line x1="80" y1="100" x2="96" y2="100"/>'
    '</g>'
    '<line x1="160" y1="220" x2="160" y2="100" stroke="#fde047" stroke-width="2" stroke-dasharray="5 4"/>'
    '<line x1="80" y1="100" x2="160" y2="100" stroke="#fde047" stroke-width="2" stroke-dasharray="5 4"/>'
    '<circle cx="160" cy="100" r="9" fill="#fca5a5"/>'
    '<text x="80" y="244" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#7dd3fc">25</text>'
    '<text x="280" y="244" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#7dd3fc">26</text>'
    '<text x="70" y="226" text-anchor="end" font-family="sans-serif" font-size="20" fill="#7dd3fc">42</text>'
    '<text x="70" y="28" text-anchor="end" font-family="sans-serif" font-size="20" fill="#7dd3fc">43</text>'
    '<text x="300" y="60" font-family="sans-serif" font-size="20" fill="#f8fafc">Square 2542</text>'
    '<text x="300" y="100" font-family="sans-serif" font-size="20" fill="#fde047">along 4/10 → 254</text>'
    '<text x="300" y="140" font-family="sans-serif" font-size="20" fill="#fde047">up 6/10 → 426</text>'
    '<text x="300" y="190" font-family="sans-serif" font-size="22" fill="#86efac">= 254 426</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 330), ("priya", 640)])
L("dad", "Priya, pack a jumper. I've bought us a holiday home in England. Sea views on every side.", mood="excited", shot="close", prop="tablet")
L("priya", "Every side?", mood="deadpan", shot="close")
L("dad", "No neighbours. No noise. Private access by a natural stone bridge. Look.", mood="smug", shot="close", prop="tablet")
L("priya", "Dad, that's a pillar of chalk in the sea. And under the bridge it says, artist's impression.", mood="deadpan", shot="close")
L("dad", "The seller says the bridge has had a small renovation.", mood="happy", shot="close")
freeze("DAD'S HOLIDAY HOME", 2.6, narrator="Narrator: The renovation was the roof falling into the sea.")
confess("priya", "PRIYA · 12 · Reads The Small Print")
L("priya", "My dad has bought a rock. Not a house on a rock. Just the rock. Geographers call it a stack.", mood="deadpan")
L("priya", "And that bridge was an arch. Arches don't get renovated. They fall down.", mood="smug", gap=0.6)

title()

# ---------------- ACT 1: HEADLANDS, BAYS AND CLIFFS ----------------
scene("living", [("priya", 260), ("dad", 520)])
L("priya", "Atlas! Dad's bought a stack.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 900)
L("atlas", "A stack of what? Pancakes? Parking fines?", mood="bored", shot="close")
L("dad", "Rock. In Dorset. With a view.", mood="smug", shot="two")
L("atlas", "Ah. The Jurassic Coast. A World Heritage Site since two thousand and one.", mood="teach", shot="close",
  boardClear=True, board="Jurassic Coast: World Heritage Site, 2001")
L("atlas", "Near Swanage, the rocks run in bands at right angles to the sea. A discordant coast.", mood="teach", shot="close",
  boardClear=True, diagram=COAST, board="Discordant = rock bands at 90° to coast")
L("atlas", "Soft clay and sand erode fast, into bays. Hard chalk and limestone stick out as headlands. Differential erosion.", mood="teach", shot="close",
  board="Soft → bay · hard → headland")
L("dad", "So headlands are the soft bits. Squishy. Like me.", mood="thinking", shot="close")
L("priya", "Other way round. Headlands are hard. The soft rock either side got eroded away.", mood="deadpan", shot="close",
  board="Differential erosion")
L("atlas", "Waves bend round headlands. Refraction. Energy focuses on headlands and spreads out in bays, so bays get beaches.", mood="teach", shot="close",
  boardClear=True, board="Refraction: energy hits headlands")
L("priya", "And if the bands run parallel, it's concordant. The sea breaks through and scoops out a cove. Lulworth Cove.", mood="thinking", shot="close",
  board="Concordant (parallel) → Lulworth Cove")
L("atlas", "Now, cliffs. Hydraulic action and abrasion cut a notch at the base, between high and low tide.", mood="teach", shot="close",
  boardClear=True, board="Notch → overhang → collapse → retreat")
L("atlas", "The rock above overhangs, collapses, and the cliff retreats, leaving a flat wave cut platform.", mood="teach", shot="close",
  board="Leaves a WAVE-CUT PLATFORM")
L("priya", "Never Overhang Cliffs Recklessly.", mood="smug", shot="close",
  board="N-O-C-R: Never Overhang Cliffs Recklessly")
L("dad", "So my stack will retreat? Towards England? Free upgrade!", mood="excited", shot="close")
L("atlas", "Towards the bottom of the sea.", mood="deadpan", shot="close", gap=0.4)

confess("atlas", "ATLAS · Desk Globe · Dropped Eleven Times")
L("atlas", "Dropped eleven times. Usually on Australia. I now have a wave cut notch in the Great Australian Bight.", mood="bored")
L("atlas", "It is not damage. Collectors call it patina.", mood="smug", gap=0.5)

# ---------------- ACT 2: OLD HARRY ROCKS, DORSET ----------------
scene("living", [("priya", 260), ("dad", 520), ("atlas", 880)])
L("nani", "If anyone's going to England to see this rock, I'm coming. I've got my cardigan.", mood="happy", shot="close", offstage=True)
L("atlas", "Hold on, everyone. Not to me. I chip.", mood="smug", shot="close")
sfx("whoosh")
scene("beach", [("priya", 260), ("dad", 500), ("nani", 740)], caption="OLD HARRY ROCKS · Dorset, England · chalk headland")
L("dad", "There it is! My stack!", mood="excited", shot="close", prop="binoculars")
L("atlas", "I'm in Nani's handbag. With three mints and receipts from nineteen eighty seven.", mood="bored", shot="close", offstage=True)
L("nani", "Stay in there. It's windy, and you roll.", mood="smug", shot="close")
sfx("door")
poof("guest", 1000)
L("guest", "Morning! Doctor Okafor, geologist. You must be the man who bought Old Harry.", mood="happy", shot="close")
L("guest", "It's a World Heritage Site, sir. Nobody can sell it. That picture shows it long ago, still joined on by an arch.", mood="neutral", shot="close")
L("guest", "Every stack starts with a weakness. Joints are small cracks. Faults are bigger fractures.", mood="teach", shot="close",
  boardClear=True, board="1. Joints and faults = weaknesses")
L("guest", "Hydraulic action forces water and air into the crack. Abrasion scrapes it wider. A cave.", mood="teach", shot="close",
  board="2. Hydraulic action + abrasion → cave")
L("nani", "Previously, on Headland. Crack was small and lonely. Then the waves moved in.", mood="smug", shot="close")
L("guest", "The cave breaks right through the headland. That's an arch, like Durdle Door, along the coast.", mood="teach", shot="close",
  board="3. Breaks through → arch (Durdle Door)")
L("guest", "Waves erode the base, weathering weakens the roof, and gravity wins.", mood="teach", shot="close",
  boardClear=True, diagram=SEQ, board="4. Roof collapses → stack")
L("nani", "Tonight's episode. The roof collapses! And the end of the headland is left all alone. A stack.", mood="excited", shot="close")
L("guest", "Then the stack is undercut and falls to a stump, covered at high tide. Old Harry's Wife fell in eighteen ninety six.", mood="sad", shot="close",
  board="5. Stump: Old Harry's Wife, fell 1896")
L("nani", "Poor Harry. Still standing there, waiting for her to come back up.", mood="sad", shot="close")
L("priya", "Crack, cave, arch, stack, stump. Clever Cats Always Sleep Soundly.", mood="smug", shot="close",
  board="Clever Cats Always Sleep Soundly")
L("dad", "How long until my stack becomes a stump?", mood="worried", shot="close")
L("guest", "Nobody knows. One of Australia's Twelve Apostles fell in two thousand and five. Eight are left.", mood="teach", shot="close",
  boardClear=True, board="Twelve Apostles: 1 fell in 2005, 8 left")
L("priya", "And there were never twelve. They were renamed in the nineteen twenties, to attract tourists.", mood="smug", shot="close",
  board="Never 12! Renamed in the 1920s")
L("dad", "Fine. I'll buy a beach. Beaches don't fall down.", mood="determined", shot="close")
L("guest", "Beaches are built by deposition, where waves lose energy. Shingle beaches are steep, because water soaks between the pebbles and the backwash is weak.", mood="teach", shot="close",
  boardClear=True, board="Beach = deposition · shingle = steep")
L("priya", "And where the coast bends, longshore drift keeps going and drops sediment in sheltered water. A spit.", mood="thinking", shot="close",
  boardClear=True, diagram=DEP, board="Spit: attached to land at one end")
L("guest", "Spurn Head is about five kilometres long. Changing winds curl its tip into a recurved end, and salt marsh forms behind.", mood="teach", shot="close",
  board="Recurved end + salt marsh behind")
L("guest", "A spit right across a bay is a bar, with a lagoon behind. A ridge joining an island to the mainland is a tombolo.", mood="teach", shot="close",
  board="Bar → lagoon · tombolo → island")
L("guest", "Chesil Beach is twenty nine kilometres of shingle, linking Portland to the mainland. Pebbles go from pea sized in the west to fist sized in the east.", mood="teach", shot="close",
  boardClear=True, board="Chesil Beach: 29 km, pebbles graded")

confess("dad", "DAD · Self-Declared Explorer · Owns Zero Stacks")
L("dad", "Forty countries. Well. Forty airports. None of them fell into the sea.", mood="smug")
L("dad", "Doctor Okafor says I can't own Old Harry. But I can visit. Like everyone else.", mood="sad", gap=0.6)

# ---------------- ACT 3: SINGAPORE'S COAST ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad is on the phone asking for his £99 back.", 2.4)
scene("park", [("mum", 240), ("priya", 480), ("atlas", 840)], caption="EAST COAST PARK · Singapore · reclaimed land")
L("dad", "Hello? Yes, I'd like a refund. On a rock.", mood="annoyed", shot="close", offstage=True)
L("mum", "Right. What protects our coast? Checklist. Hard engineering versus soft.", mood="determined", shot="close")
L("atlas", "Hard engineering resists the sea. Sea walls, rock armour, and groynes.", mood="teach", shot="close",
  boardClear=True, board="HARD: sea walls · rock armour · groynes")
L("priya", "Groynes trap sand from longshore drift. This beach grows, but beaches further down drift get starved.", mood="thinking", shot="close",
  board="Groynes starve beaches down-drift!")
L("mum", "Protect yourself, ruin the neighbours. Like Dad's karaoke.", mood="eyeroll", shot="close")
L("atlas", "Soft engineering works with nature. Adding sand, planting dunes, or managed retreat, letting low value land flood.", mood="teach", shot="close",
  board="SOFT: nourishment · dunes · retreat")
L("priya", "We can't let the sea in. No room. About thirty percent of our land is under five metres above sea level.", mood="worried", shot="close",
  boardClear=True, board="SG: ~30% of land < 5 m above sea")
L("mum", "And most of our coast already has seawalls or rock slopes. I counted.", mood="smug", shot="close",
  board="Most of SG coast = hard engineering")
L("atlas", "New reclaimed land must be at least four metres above mean sea level. The bill? A hundred billion dollars or more, over a century.", mood="teach", shot="close",
  board="New land ≥ 4 m · S$100 bn+ / 100 yrs")
L("mum", "But we're adding soft bits. Mangroves calm the waves. And Marina Barrage keeps high tides out of the city.", mood="smug", shot="close",
  board="Mangroves · Marina Barrage = hybrid")

# ---------------- EXAM SKILLS ----------------
scene("classroom", [("teacher", 300), ("priya", 640), ("atlas", 940)])
L("teacher", "Six marks. Explain how a stack forms. Most of you write, the waves wear it away. That's zero processes.", mood="teach", shot="close",
  boardClear=True, board="6 marks: Explain how a stack forms")
L("teacher", "Stages in order, with sequence words. First, then, eventually.", mood="teach", shot="close",
  board="1. Stages in order + sequence words")
L("priya", "Name a process at every stage. Add a named example, and a sequence diagram.", mood="thinking", shot="close",
  board="2. A process at EVERY stage + example")
L("teacher", "Map skills. Six figure grid reference for this lighthouse. Along the corridor, then up the stairs.", mood="teach", shot="close",
  boardClear=True, diagram=GRID, board="Eastings first, then northings")
L("teacher", "The bottom left corner gives the square. Two five four two.", mood="teach", shot="close",
  board="4-figure: 2542 (bottom-left corner)")
L("priya", "Four tenths along, two five four. Six tenths up, four two six. Two five four, four two six.", mood="smug", shot="close",
  board="6-figure: 254 426 (within 100 m)")
L("teacher", "Correct. Accurate to a hundred metres. Who brought a globe to class? Again?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Smells Of Nani's Handbag")
L("atlas", "Recap. First. Soft rock erodes into bays. Hard rock stays as headlands.", mood="teach",
  boardClear=True, board="1. Hard rock headlands, soft rock bays")
L("atlas", "Second. Notch, overhang, collapse, retreat. That leaves a wave cut platform.", mood="teach",
  board="2. Notch → overhang → collapse → platform")
L("atlas", "Third. Crack, cave, arch, stack, stump. Name a process at every stage.", mood="teach",
  board="3. Crack → cave → arch → stack → stump")
L("atlas", "Fourth. Beaches, spits, bars and tombolos are built by deposition.", mood="teach",
  board="4. Spits, bars, tombolos = deposition")
L("atlas", "And finally. Hard engineering resists the sea, soft works with it. And eastings first. Always.", mood="smug",
  board="5. Hard vs soft · eastings first", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("dad", "I've learned my lesson. No more stacks.", mood="neutral", shot="close")
L("priya", "Wise.", mood="deadpan", shot="close")
L("dad", "I've bought a stump instead. Cheaper. Under water at high tide. Free swimming pool.", mood="excited", shot="close", prop="tablet")
L("atlas", "Give it a few thousand years, and it will be nothing at all.", mood="smug", shot="close")
L("dad", "Then finally. Sea views on every side.", mood="smug", shot="close")
sfx("trombone")
L("priya", "Stack to the future, Dad. And the future is wet.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Nani gives you 3.", 3.0)
challenge(1, "A crack in a headland grows. Put in order: arch, stump, cave, stack.", "Cave, arch, stack, stump",
  "Cave breaks through → arch; roof falls → stack",
  "Question one. Put these in order. Arch, stump, cave, stack.",
  "Cave, arch, stack, stump. The cave breaks through into an arch. The roof falls, leaving a stack.")
challenge(2, "A church is 3/10 across and 2/10 up square 2341. Give its 6-figure grid reference.", "233 412",
  "Eastings 23 + 3 tenths → 233; northings 41 + 2 → 412",
  "Question two. A church is three tenths across and two tenths up square two three four one. Give its six figure grid reference.",
  "Two three three, four one two. Along the corridor, then up the stairs.")
challenge(3, "Groynes make one beach wider. Give one problem they cause.", "Starve beaches down-drift",
  "They trap sediment moving by longshore drift",
  "Question three. Groynes make one beach wider. Give one problem they cause.",
  "They starve beaches further down drift of sand, so those beaches erode faster.")
end_card()
