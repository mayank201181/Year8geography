# "Off The Map" (a Claude Sitcom) S01E12 "Bleached Out" (Topic: Coral Reefs & the Great Barrier Reef)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="coral-reefs",
    logline="Dad decides coral is a pretty rock and wants a lump of it for the living-room shelf. Atlas spins the family to the Great Barrier Reef, where a marine scientist explains that the 'rock' is an animal with flatmates, and that the white bits are not dead yet.",
    names={"guest": "DR LACHLAN"},
    display={"zoh-zan-thelly": "zooxanthellae", "N Parks": "NParks", "Reef twenty fifty Plan": "Reef 2050 Plan"},
)

POLYP = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 270">'
    '<g stroke="#fca5a5" stroke-width="7" stroke-linecap="round">'
    '<line x1="70" y1="70" x2="48" y2="28"/><line x1="90" y1="64" x2="84" y2="20"/>'
    '<line x1="110" y1="64" x2="116" y2="20"/><line x1="130" y1="70" x2="152" y2="28"/></g>'
    '<path d="M60,74 Q100,56 140,74 L134,150 L66,150 Z" fill="#f9a8d4"/>'
    '<g fill="#fde047"><circle cx="80" cy="100" r="5"/><circle cx="104" cy="118" r="5"/>'
    '<circle cx="122" cy="96" r="5"/><circle cx="90" cy="134" r="5"/><circle cx="118" cy="136" r="5"/></g>'
    '<rect x="40" y="150" width="120" height="44" fill="#e5e7eb"/>'
    '<text x="185" y="44" font-family="sans-serif" font-size="20" fill="#fca5a5">tentacles + mouth (animal)</text>'
    '<text x="185" y="110" font-family="sans-serif" font-size="20" fill="#fde047">algae living inside</text>'
    '<text x="185" y="180" font-family="sans-serif" font-size="20" fill="#e5e7eb">limestone skeleton (CaCO₃)</text>'
    '<text x="10" y="230" font-family="sans-serif" font-size="19" fill="#86efac">algae → coral: up to 90% of its food</text>'
    '<text x="10" y="260" font-family="sans-serif" font-size="19" fill="#7dd3fc">coral → algae: a home + CO₂ + nutrients</text>'
    '</svg>'
)

REEFTYPES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">'
    '<rect x="10" y="60" width="160" height="110" fill="#0c4a6e"/>'
    '<rect x="180" y="60" width="160" height="110" fill="#0c4a6e"/>'
    '<rect x="350" y="60" width="160" height="110" fill="#0c4a6e"/>'
    '<path d="M40,170 L90,30 L140,170 Z" fill="#a8a29e"/>'
    '<rect x="66" y="60" width="12" height="40" fill="#f9a8d4"/><rect x="102" y="60" width="12" height="40" fill="#f9a8d4"/>'
    '<path d="M236,170 L260,48 L284,170 Z" fill="#a8a29e"/>'
    '<rect x="188" y="60" width="12" height="110" fill="#f9a8d4"/><rect x="320" y="60" width="12" height="110" fill="#f9a8d4"/>'
    '<path d="M395,170 L430,138 L465,170 Z" fill="#57534e"/>'
    '<rect x="358" y="60" width="12" height="110" fill="#f9a8d4"/><rect x="490" y="60" width="12" height="110" fill="#f9a8d4"/>'
    '<line x1="10" y1="60" x2="510" y2="60" stroke="#7dd3fc" stroke-width="2" stroke-dasharray="6 4"/>'
    '<text x="90" y="196" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">FRINGING</text>'
    '<text x="260" y="196" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">BARRIER</text>'
    '<text x="430" y="196" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">ATOLL</text>'
    '<text x="90" y="222" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">hugs the coast</text>'
    '<text x="260" y="222" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">wide lagoon</text>'
    '<text x="430" y="222" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">ring, no island</text>'
    '<text x="430" y="110" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#7dd3fc">lagoon</text>'
    '</svg>'
)

BLEACH = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<text x="10" y="30" font-family="sans-serif" font-size="22" fill="#f8fafc">GBR mass bleaching years</text>'
    '<line x1="20" y1="115" x2="500" y2="115" stroke="#f8fafc" stroke-width="2"/>'
    '<g fill="#fca5a5"><circle cx="30" cy="115" r="7"/><circle cx="99" cy="115" r="7"/><circle cx="341" cy="115" r="7"/>'
    '<circle cx="358" cy="115" r="7"/><circle cx="411" cy="115" r="7"/><circle cx="445" cy="115" r="7"/><circle cx="480" cy="115" r="7"/></g>'
    '<g font-family="sans-serif" font-size="18" fill="#fde047" text-anchor="middle">'
    '<text x="30" y="96">1998</text><text x="341" y="96">2016</text><text x="411" y="96">2020</text><text x="480" y="96">2024</text>'
    '<text x="99" y="146">2002</text><text x="358" y="146">2017</text><text x="445" y="146">2022</text></g>'
    '<text x="10" y="186" font-family="sans-serif" font-size="20" fill="#86efac">5 events in 8 years · recovery takes 10–15</text>'
    '</svg>'
)

ZONES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">'
    '<rect x="10" y="12" width="40" height="36" rx="6" fill="#4ade80"/>'
    '<text x="64" y="38" font-family="sans-serif" font-size="20" fill="#f8fafc">GREEN: no-take (~33% of park)</text>'
    '<rect x="10" y="64" width="40" height="36" rx="6" fill="#fde047"/>'
    '<text x="64" y="90" font-family="sans-serif" font-size="20" fill="#f8fafc">YELLOW: limited fishing</text>'
    '<rect x="10" y="116" width="40" height="36" rx="6" fill="#60a5fa"/>'
    '<text x="64" y="142" font-family="sans-serif" font-size="20" fill="#f8fafc">BLUE: fishing, but no trawling</text>'
    '<rect x="10" y="168" width="40" height="36" rx="6" fill="#f9a8d4"/>'
    '<text x="64" y="194" font-family="sans-serif" font-size="20" fill="#f8fafc">PINK: science only, by permit</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 330), ("priya", 640)])
L("dad", "Behold. The new shelf. All it needs is a lump of coral. I'll snap a bit off a reef on holiday. It's just a rock.", mood="excited", shot="close", prop="phone")
L("priya", "Dad. Coral is an animal.", mood="deadpan", shot="close")
L("dad", "It doesn't move. It just sits there all day.", mood="annoyed", shot="close")
L("priya", "So do you, on Sundays. We still don't put you on a shelf.", mood="deadpan", shot="close", gap=0.4)
freeze("DAD'S NEW ORNAMENT", 2.6, narrator="Narrator: The ornament has a mouth, a stomach, and stinging tentacles.")
confess("priya", "PRIYA · 12 · Lives With A Rock Enthusiast")
L("priya", "Taking coral off a reef is like pulling a brick out of someone's house. While they're inside. Eating dinner.", mood="deadpan")
L("priya", "Dad says the law is a technicality. Atlas says Dad is a technicality.", mood="smug", gap=0.6)

title()

# ---------------- ACT 1: WHAT IS CORAL? ----------------
scene("living", [("priya", 240), ("mum", 460), ("dad", 680)])
L("mum", "Before anyone buys anything, I have a checklist. Does it match the cushions?", mood="determined", shot="close", prop="tablet")
L("priya", "Is it alive? Atlas!", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 1000)
L("atlas", "I was dreaming somebody had dusted me. Ah. The father. Let me guess. He thinks coral is a rock.", mood="bored", shot="close")
L("atlas", "Coral is an animal. A colony of thousands of tiny polyps, related to jellyfish. A mouth on top, and stinging tentacles.", mood="teach", shot="close",
  boardClear=True, board="Coral = an ANIMAL (a colony of polyps)")
L("atlas", "Hard corals take calcium carbonate from sea water and build limestone cups under themselves.", mood="teach", shot="close",
  board="Skeleton = calcium carbonate (limestone)")
L("priya", "And the skeletons pile up into a reef. Only a few millimetres to about two centimetres a year.", mood="thinking", shot="close",
  board="Grows a few mm to ~2 cm a year")
L("dad", "My fingernails are faster than that.", mood="annoyed", shot="close")
L("atlas", "Your fingernails do not shelter a quarter of all sea life. Now. The coral has flatmates.", mood="smug", shot="close",
  boardClear=True, diagram=POLYP)
L("atlas", "Tiny algae called zoh-zan-thelly live inside it. They use sunlight to photosynthesise.", mood="teach", shot="close",
  board="Algae inside: zooxanthellae")
L("mum", "Lodgers? How much rent do they pay?", mood="thinking", shot="close")
L("atlas", "Up to about ninety percent of its food, and its colour. Remember that. The coral gives them a home, carbon dioxide and nutrients.", mood="teach", shot="close",
  board="Algae give up to 90% of coral's food")
L("mum", "One flatmate cooks, one provides the flat, and both win. A symbiotic relationship! Did you hear that? They cook. Every day.", mood="excited", shot="close",
  board="Both benefit = SYMBIOSIS")
L("dad", "I made toast on Tuesday.", mood="worried", shot="close")
L("mum", "You made smoke on Tuesday.", mood="deadpan", shot="close", gap=0.4)
L("mum", "Right. What's on a coral's checklist?", mood="determined", shot="close",
  boardClear=True, board="✓ Warm water: 23–29 °C")
L("atlas", "Warm water, twenty three to twenty nine degrees. Shallow, usually under about fifty metres, so sunlight reaches the algae.", mood="teach", shot="close",
  board="✓ Shallow (< ~50 m) and sunny")
L("priya", "Clear, salty water with little sediment. So hardly any reefs near big muddy river mouths.", mood="thinking", shot="close",
  board="✓ Clear, salty, low sediment")
L("atlas", "So most reefs lie between about thirty degrees north and thirty south. Richest of all is the Coral Triangle, and Singapore sits on its edge.", mood="teach", shot="close",
  board="Mostly between 30°N and 30°S")
L("atlas", "Three types. Fringing reefs hug the coast. Barrier reefs sit behind a wide lagoon. An atoll is a ring of reef round a lagoon.", mood="teach", shot="close",
  boardClear=True, diagram=REEFTYPES)
L("atlas", "Reefs cover under one percent of the ocean floor, but hold about a quarter of all marine species.", mood="excited", shot="close",
  boardClear=True, board="<1% of ocean floor, ~25% of sea species")
L("priya", "And a healthy reef absorbs up to about ninety seven percent of wave energy. A free sea wall.", mood="thinking", shot="close",
  board="Absorbs up to ~97% of wave energy")
L("mum", "Plus fish, tourism jobs and medicines. That's not an ornament. That's an employee.", mood="smug", shot="close",
  board="Food · tourism · medicines · beaches")

confess("atlas", "ATLAS · Desk Globe · Dropped On Australia Eleven Times")
L("atlas", "I have been dropped on Australia eleven times. Every time, the Great Barrier Reef broke my fall.", mood="bored")
L("atlas", "Lovely reef. Very forgiving. Unlike the carpet.", mood="smug", gap=0.5)

# ---------------- ACT 2: THE GREAT BARRIER REEF ----------------
scene("living", [("priya", 240), ("dad", 520), ("atlas", 880)])
L("dad", "Fine. It's an animal. But I want to see one up close.", mood="determined", shot="close")
L("atlas", "Hold your breath. Actually, don't. Magic bubbles. Do not ask. I am a globe.", mood="smug", shot="close")
sfx("whoosh")
scene("reef", [("priya", 240), ("dad", 480), ("atlas", 800)], caption="GREAT BARRIER REEF · Queensland, Australia · ~2,300 km long")
L("atlas", "The Great Barrier Reef. About two thousand three hundred kilometres long, about three thousand reefs, and World Heritage since nineteen eighty one.", mood="teach", shot="close",
  boardClear=True, board="GBR: ~2,300 km · ~2,900–3,000 reefs")
L("dad", "It's a city. That fish is looking at me.", mood="shock", shot="close",
  board="World Heritage Site since 1981")
poof("guest", 1080)
L("guest", "Hi! I'm Lachlan, a marine scientist here. One rule. Look, don't touch.", mood="happy", shot="close")
L("dad", "Ooh, that white patch would match the cushions!", mood="excited", shot="close")
L("guest", "That's bleached coral. In a marine heatwave the coral evicts its algae flatmates. No algae, no colour, no food.", mood="sad", shot="close",
  boardClear=True, board="Marine heatwave → algae expelled → WHITE")
L("guest", "About one degree above the normal summer maximum, for around four weeks, can do it.", mood="teach", shot="close",
  board="~1 °C above summer max for ~4 weeks")
L("dad", "So it's dead. Then nobody minds if I take it.", mood="smug", shot="close")
L("guest", "Not dead yet! It's starving. If the water cools quickly, the algae come back. If the heat lasts, it dies.", mood="determined", shot="close",
  board="Bleached ≠ dead (yet)")
L("atlas", "And a whole reef needs about ten to fifteen years to recover. Lachlan, the dates.", mood="teach", shot="close",
  boardClear=True, diagram=BLEACH)
L("guest", "Mass bleaching in nineteen ninety eight, two thousand and two, twenty sixteen, seventeen, twenty, twenty two and twenty four. They never get time to recover.", mood="sad", shot="close",
  board="Recovery needs ~10–15 years")
L("guest", "In twenty sixteen alone, about thirty percent of shallow water corals died.", mood="sad", shot="close",
  board="2016: ~30% of shallow corals died")
L("atlas", "And the sea absorbs our carbon dioxide and turns more acidic. That weakens the skeletons.", mood="teach", shot="close",
  board="Acidification: CO₂ → weaker skeletons")
L("guest", "Local threats too. Crown of thorns starfish eat coral polyps.", mood="worried", shot="close",
  boardClear=True, board="LOCAL: crown-of-thorns starfish")
L("guest", "Farm fertiliser washes down rivers and feeds plankton. Plankton feed starfish larvae.", mood="teach", shot="close",
  board="Fertiliser → plankton → more starfish")
L("atlas", "Mud in run-off blocks sunlight for the algae. In the exam, say how it harms coral.", mood="eyeroll", shot="close",
  board="Sediment blocks sunlight for the algae")
L("priya", "Overfishing parrotfish lets seaweed take over. And tourists kick coral and take bits home.", mood="thinking", shot="close",
  board="Overfishing · tourists · anchors")
L("dad", "Tourists. Terrible people. Taking reef home for their shelves.", mood="annoyed", shot="close")
L("dad", "...Oh.", mood="worried", shot="close", gap=0.5)
L("guest", "So we zone the Marine Park. Each colour has its own rules.", mood="teach", shot="close",
  boardClear=True, diagram=ZONES)
L("guest", "Green zones are no-take. Since two thousand and four, about thirty three percent of the park.", mood="teach", shot="close",
  board="Green no-take ~33% since 2004 (was <5%)")
L("atlas", "Plus the Reef twenty fifty Plan, cleaner farm water, starfish culls and coral gardening.", mood="teach", shot="close",
  board="Reef 2050 Plan (2015) · culls · restoration")
L("dad", "Coral gardening? I could grow coral? Legally?", mood="excited", shot="close")
L("guest", "In a nursery, then back on the reef. Not on your shelf, mate.", mood="deadpan", shot="close", gap=0.4)

confess("dad", "DAD · Self-Declared Explorer · Has Been To Forty Airports")
L("dad", "I have been to forty countries. Well. Forty airports. Their gift shops sold coral. I feel bad about the gift shops.", mood="sad", gap=0.6)

# ---------------- ACT 3: SINGAPORE'S REEFS ----------------
card("MEANWHILE, BACK IN SINGAPORE", "The shelf is still empty. Mum has a new checklist.", 2.4)
scene("kitchen", [("nani", 240), ("mum", 480), ("dad", 720), ("priya", 960)])
L("dad", "Nani, Singapore is by the Coral Triangle! We should have reefs everywhere!", mood="excited", shot="close")
L("nani", "We did. In the nineteen sixties I walked on reef flats at low tide. Crabs in every pool.", mood="happy", shot="close")
L("priya", "Then we needed land. About sixty percent of Singapore's original reef area is gone, mainly to land reclamation.", mood="sad", shot="close",
  boardClear=True, board="~60% of SG reef area lost")
L("dad", "Why did nobody stop them?", mood="shock", shot="close")
L("nani", "People needed homes, ports and jobs. Geography is choices. Even you were a choice. My daughter's.", mood="smug", shot="close")
L("mum", "Some days I still check the receipt.", mood="deadpan", shot="close", gap=0.4)
L("priya", "But we still have over two hundred and fifty species of hard coral. Mostly on fringing reefs round the Southern Islands.", mood="excited", shot="close",
  board="250+ hard coral species · fringing reefs")
L("priya", "Sisters' Islands Marine Park. Singapore's first, from twenty fourteen. About forty hectares, run by N Parks, with coral nurseries.", mood="teach", shot="close",
  board="Sisters' Islands Marine Park: 2014, ~40 ha")

# ---------------- EVALUATING MANAGEMENT ----------------
scene("classroom", [("teacher", 300), ("priya", 640), ("atlas", 940)])
L("teacher", "Exam skill. How successful is zoning on the reef? Evaluate means strengths, weaknesses, then a judgement.", mood="teach", shot="close",
  boardClear=True, board="EVALUATE = strengths + limits + judgement")
L("priya", "Strength. Green zones cover about thirty three percent of the park, and surveys find more, bigger coral trout there than in fished zones.", mood="thinking", shot="close",
  board="+ Green zones: more, bigger coral trout")
L("priya", "Weakness, with a number. Zoning can't stop a heatwave. The reef still bleached five times from twenty sixteen to twenty twenty four.", mood="thinking", shot="close",
  board="– Can't stop heatwaves: 5 bleachings")
L("priya", "Judgement. Local management helps the reef recover, but its future depends on cutting greenhouse gas emissions.", mood="determined", shot="close",
  board="Verdict: helps, but emissions must fall")
L("teacher", "Who brought a globe to class? Again?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.3)
L("atlas", "I am a protected species.", mood="smug", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Smells Faintly Of Sea Water")
L("atlas", "Recap. First. Coral is an animal, with algae flatmates. Symbiosis.", mood="teach",
  boardClear=True, board="1. Coral = polyps (animal) + algae partners")
L("atlas", "Second. Reefs need warm, shallow, clear, salty water.", mood="teach",
  board="2. Warm, shallow, clear, salty water")
L("atlas", "Third. Bleaching is heat pushing the algae out. Bleached is not dead. Yet.", mood="teach",
  board="3. Bleached ≠ dead: heat expels the algae")
L("atlas", "Fourth. The Great Barrier Reef. World Heritage since nineteen eighty one, a third in green zones.", mood="teach",
  board="4. GBR: 2,300 km · 1981 · 33% green")
L("atlas", "Finally. Local action helps, but the world must cut emissions.", mood="smug",
  board="5. Evaluate: local action + cut emissions", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("priya", 240), ("dad", 520), ("atlas", 880)])
L("dad", "I have solved the shelf. It's a green zone. Nothing leaves it. Not my biscuits. And nobody drops Atlas on Australia ever again.", mood="smug", shot="close")
L("atlas", "That is the nicest thing anyone has ever said to me.", mood="sad", shot="close", gap=0.4)
L("mum", "I'm rezoning it. Yellow. One biscuit, one hand.", mood="smug", offstage=True)
sfx("ding")
L("priya", "That is literally how zoning works.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. He is in a no-take zone now.", 3.0)
challenge(1, "Coral polyps and zooxanthellae both benefit from living together. What is this relationship called?", "Symbiosis",
  "Algae give food; coral gives a home + CO₂",
  "Question one. Coral polyps and their algae both benefit. What is this relationship called?",
  "Symbiosis. The algae make food for the coral. The coral gives the algae a home.")
challenge(2, "Explain how sediment from farm run-off harms coral.", "Blocks sunlight for algae",
  "No light → algae can't photosynthesise → less food",
  "Question two. Explain how sediment from farm run-off harms coral.",
  "It blocks sunlight, so the algae cannot photosynthesise, and the coral loses food.")
challenge(3, "What percentage of the Great Barrier Reef Marine Park is green no-take zones?", "About 33%",
  "Rezoned in 2004 (was under 5%)",
  "Question three. What percentage of the Great Barrier Reef Marine Park is green zones?",
  "About thirty three percent, since two thousand and four.")
end_card()
