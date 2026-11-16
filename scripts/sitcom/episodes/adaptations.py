# "Off The Map" (a Claude Sitcom) S01E08 "Survival Of The Fluffiest" (Topic: Adaptations)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="adaptations",
    logline="Dad buys a documentary called Polar Bear Versus Penguin and insists they are neighbours. Atlas spins the family to Antarctica, where there are no bears at all, then to the Sahara, where the camel's hump is not what Dad thinks.",
    names={"guest": "MOUSSA", "guest2": "DR AROHA"},
    display={"C A M": "CAM"},
)

POLES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 232">'
    '<rect x="10" y="8" width="500" height="84" rx="12" fill="#1e3a8a"/>'
    '<text x="24" y="40" font-family="sans-serif" font-size="22" fill="#bfdbfe">ARCTIC · north · frozen OCEAN</text>'
    '<text x="24" y="76" font-family="sans-serif" font-size="19" fill="#f8fafc">Polar bears, Arctic foxes · NO penguins</text>'
    '<line x1="10" y1="104" x2="510" y2="104" stroke="#fca5a5" stroke-width="3" stroke-dasharray="10 6"/>'
    '<text x="260" y="128" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fca5a5">EQUATOR · too hot to cross in a fur coat</text>'
    '<rect x="10" y="140" width="500" height="84" rx="12" fill="#155e75"/>'
    '<text x="24" y="172" font-family="sans-serif" font-size="22" fill="#a5f3fc">ANTARCTICA · south · frozen LAND</text>'
    '<text x="24" y="208" font-family="sans-serif" font-size="19" fill="#f8fafc">Emperor penguins · NO polar bears</text>'
    '</svg>'
)

PERMAFROST = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">'
    '<text x="10" y="28" font-family="sans-serif" font-size="19" fill="#86efac">Tundra plants: low, small, shallow roots</text>'
    '<rect x="0" y="56" width="520" height="54" fill="#92400e"/>'
    '<ellipse cx="60" cy="54" rx="22" ry="8" fill="#22c55e"/>'
    '<ellipse cx="160" cy="54" rx="14" ry="9" fill="#22c55e"/>'
    '<ellipse cx="420" cy="54" rx="20" ry="8" fill="#22c55e"/>'
    '<ellipse cx="300" cy="58" rx="40" ry="6" fill="#7dd3fc"/>'
    '<line x1="60" y1="60" x2="60" y2="80" stroke="#fde68a" stroke-width="2"/>'
    '<line x1="160" y1="62" x2="160" y2="84" stroke="#fde68a" stroke-width="2"/>'
    '<line x1="420" y1="60" x2="420" y2="80" stroke="#fde68a" stroke-width="2"/>'
    '<text x="190" y="94" font-family="sans-serif" font-size="19" fill="#fde047">ACTIVE LAYER · thaws in summer</text>'
    '<rect x="0" y="110" width="520" height="96" fill="#334155"/>'
    '<line x1="0" y1="110" x2="520" y2="110" stroke="#7dd3fc" stroke-width="3" stroke-dasharray="8 5"/>'
    '<text x="10" y="146" font-family="sans-serif" font-size="20" fill="#7dd3fc">PERMAFROST · frozen 2+ years in a row</text>'
    '<text x="10" y="184" font-family="sans-serif" font-size="18" fill="#f8fafc">Water can\'t drain → boggy summer pools</text>'
    '</svg>'
)

CACTUS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250">'
    '<rect x="0" y="206" width="520" height="44" fill="#57300f"/>'
    '<rect x="80" y="36" width="44" height="172" rx="20" fill="#4d7c0f"/>'
    '<path d="M80 130 h-26 v-50 a12 12 0 0 1 24 0 v34 h2 Z" fill="#4d7c0f"/>'
    '<path d="M124 112 h24 v-40 a12 12 0 0 1 24 0 v52 h-48 Z" fill="#4d7c0f"/>'
    '<line x1="94" y1="44" x2="94" y2="204" stroke="#365314" stroke-width="2"/>'
    '<line x1="110" y1="44" x2="110" y2="204" stroke="#365314" stroke-width="2"/>'
    '<g stroke="#fef9c3" stroke-width="2">'
    '<line x1="80" y1="60" x2="70" y2="54"/><line x1="80" y1="90" x2="70" y2="84"/>'
    '<line x1="124" y1="70" x2="134" y2="64"/><line x1="124" y1="160" x2="134" y2="154"/>'
    '</g>'
    '<g stroke="#fde68a" stroke-width="2" fill="none">'
    '<path d="M102 208 C70 214 40 218 10 220"/><path d="M102 208 C130 214 160 218 180 220"/>'
    '</g>'
    '<text x="190" y="50" font-family="sans-serif" font-size="19" fill="#fde047">Spines = tiny leaves</text>'
    '<text x="190" y="76" font-family="sans-serif" font-size="19" fill="#f8fafc">→ less transpiration</text>'
    '<text x="190" y="112" font-family="sans-serif" font-size="19" fill="#86efac">Waxy skin seals in water</text>'
    '<text x="190" y="146" font-family="sans-serif" font-size="19" fill="#7dd3fc">Pleated stem stores water</text>'
    '<text x="190" y="180" font-family="sans-serif" font-size="19" fill="#fca5a5">Stomata open at NIGHT (CAM)</text>'
    '<text x="190" y="236" font-family="sans-serif" font-size="19" fill="#fde68a">Shallow wide roots ~10 cm deep</text>'
    '</svg>'
)

LAPSE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 236">'
    '<text x="10" y="28" font-family="sans-serif" font-size="21" fill="#fde047">Oxygen in each breath · −6.5 °C per 1,000 m</text>'
    '<text x="10" y="74" font-family="sans-serif" font-size="19" fill="#f8fafc">Sea level</text>'
    '<rect x="200" y="48" width="300" height="38" fill="#86efac"/>'
    '<text x="490" y="74" text-anchor="end" font-family="sans-serif" font-size="19" fill="#111827">100%</text>'
    '<text x="10" y="124" font-family="sans-serif" font-size="19" fill="#f8fafc">About 5,500 m</text>'
    '<rect x="200" y="98" width="150" height="38" fill="#7dd3fc"/>'
    '<text x="360" y="124" font-family="sans-serif" font-size="19" fill="#7dd3fc">about half</text>'
    '<text x="10" y="174" font-family="sans-serif" font-size="19" fill="#f8fafc">Everest 8,849 m</text>'
    '<rect x="200" y="148" width="100" height="38" fill="#fca5a5"/>'
    '<text x="310" y="174" font-family="sans-serif" font-size="19" fill="#fca5a5">about a third</text>'
    '<text x="10" y="220" font-family="sans-serif" font-size="18" fill="#f8fafc">Less oxygen → altitude sickness (2,500 m+)</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 340), ("priya", 700)])
L("dad", "Family! Tonight's documentary. Polar Bear Versus Penguin. Neighbours At War.", mood="excited", shot="close", prop="tablet")
L("priya", "Dad. Polar bears and penguins are not neighbours.", mood="deadpan", shot="close")
L("dad", "Of course they are. Both cold. Both black and white. They probably share a fridge.", mood="smug", shot="close")
freeze("DAD'S DOCUMENTARY", 2.6, narrator="Narrator: The two stars live at opposite ends of the Earth.")
confess("priya", "PRIYA · 12 · Has Never Shared A Fridge With A Bear")
L("priya", "They have never met. They will never meet. Unless Dad organises it.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: TWO POLES ----------------
scene("living", [("priya", 260), ("dad", 540)])
L("priya", "Atlas! Dad thinks polar bears eat penguins for breakfast.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 880)
L("atlas", "To catch a penguin, a polar bear would have to cross the equator. In a fur coat. Nobody is that hungry.", mood="bored", shot="close")
L("atlas", "Polar bears live only in the Arctic, a frozen ocean. Penguins live only in the southern hemisphere, mostly around Antarctica, a frozen continent.", mood="teach", shot="close",
  boardClear=True, diagram=POLES)
L("priya", "Exam trick. Arctic comes from the Greek word for bear. Antarctic means opposite the bear.", mood="smug", shot="close",
  board="Arktos = bear · Ant-arctic = anti-bear")
L("atlas", "So how does anything survive at either end? Adaptations. A feature or behaviour that helps a living thing survive.", mood="teach", shot="close",
  boardClear=True, board="Adaptation = feature or behaviour")
L("atlas", "Structural adaptations are body features, like thick fur. Behavioural ones are actions, like hunting at night.", mood="teach", shot="close",
  board="Structural = body · Behavioural = action")
L("dad", "So my belly is structural. For surviving buffets.", mood="smug", shot="close")
L("priya", "And the nap afterwards is behavioural.", mood="deadpan", shot="close", gap=0.4)
L("atlas", "Every extreme place throws five problems at you. Water, food, temperature, isolation, access.", mood="teach", shot="close",
  board="Will Food Travel In Antarctica?")
L("dad", "Will food travel in Antarctica? Excellent question. I'm packing snacks.", mood="determined", shot="close", gap=0.3)

confess("atlas", "ATLAS · Desk Globe · Both Poles Chipped")
L("atlas", "Both my poles are chipped. And I was dropped on Australia again. It now has a dent shaped like a flip-flop.", mood="bored", gap=0.5)

# ---------------- ACT 2A: ANTARCTICA ----------------
scene("living", [("priya", 260), ("dad", 540), ("atlas", 880)])
L("dad", "Take me to the iceberg where they both live. I'll film it.", mood="determined", shot="close", prop="phone")
L("atlas", "Wrap up warm. Not around me. I am not a radiator.", mood="smug", shot="close")
sfx("whoosh")
scene("polar", [("priya", 240), ("dad", 480), ("atlas", 780)], caption="ANTARCTICA · Emperor penguin colony · Winter · −40 °C")
L("dad", "Penguins! Where are the bears? My eyebrows have frozen.", mood="shock", shot="close", prop="binoculars")
L("atlas", "No bears. This is Antarctica, the largest desert on Earth. Deserts get under about two hundred and fifty millimetres of precipitation a year.", mood="smug", shot="close",
  boardClear=True, board="Desert = under ~250 mm precipitation/yr")
sfx("door")
poof("guest2", 1080)
L("guest2", "Hello! I'm Doctor Aroha. I study emperor penguins. And no, no polar bears.", mood="happy", shot="close")
L("dad", "Why are the penguins all squashed together? Is there a sale?", mood="thinking", shot="two")
L("guest2", "That's a huddle. Behavioural. Thousands pack together and shuffle, so everyone takes a turn on the cold outside.", mood="teach", shot="close",
  board="Huddle = BEHAVIOURAL adaptation")
L("guest2", "The air can fall below minus forty. Inside a huddle it can rise above twenty degrees.", mood="teach", shot="close",
  board="Air −40 °C · inside huddle 20 °C+")
L("guest2", "Blubber insulates them. Dense, overlapping feathers trap warm air. And the fathers hold the egg on their feet for two months, eating nothing.", mood="teach", shot="close",
  board="Blubber · dense feathers · egg on feet")
L("dad", "Two months without food.", mood="worried", shot="close")
L("priya", "You lasted forty minutes when the hawker centre was closed.", mood="deadpan", shot="close", gap=0.4)
L("dad", "So basically, it's survival of the fluffiest.", mood="smug", shot="close")
L("guest2", "Biologists say fittest. But fluffy helps. A polar bear's guard hairs are transparent and hollow, and its skin is black, to absorb heat.", mood="teach", shot="close",
  boardClear=True, board="Polar bear: clear hollow hairs, BLACK skin")
L("guest2", "Plus blubber up to about ten centimetres thick, small ears, and huge paws to spread its weight on thin ice.", mood="teach", shot="close",
  board="Blubber ~10 cm · small ears · huge paws")
L("atlas", "Small ears mean a small surface area, so less heat escapes. Remember that. It comes back in the desert, in reverse.", mood="teach", shot="close",
  board="Small surface area = less heat lost")
L("guest2", "Plants? Antarctica has just two native flowering plants. Try the Arctic tundra, on permafrost.", mood="teach", shot="close",
  boardClear=True, diagram=PERMAFROST)
L("atlas", "Permafrost stays frozen for at least two years in a row. Only the active layer on top thaws. So tundra plants grow low, with shallow roots, and flower fast in a fifty to sixty day growing season.", mood="teach", shot="close",
  board="Low · shallow roots · flower fast")

confess("dad", "DAD · Explorer · Has Been To Forty Airports")
L("dad", "Forty countries. Well, forty airports. One had a penguin keyring. Very lifelike.", mood="smug", gap=0.6)

# ---------------- ACT 2B: THE SAHARA ----------------
scene("polar", [("priya", 240), ("dad", 480), ("atlas", 780)])
L("atlas", "Now, from the coldest desert to a hot one. Hold on to your eyebrows.", mood="smug", shot="close")
sfx("whoosh")
scene("desert", [("priya", 240), ("dad", 480), ("atlas", 780)], caption="THE SAHARA · Niger · Midday · 44 °C")
L("dad", "My eyebrows have defrosted. Now they are cooking.", mood="shock", shot="close")
poof("guest", 1080)
L("guest", "Welcome! I'm Moussa. My family are Tuareg, camel herders for generations.", mood="happy", shot="close")
L("dad", "I know camels. The hump is a water tank.", mood="smug", shot="two")
L("guest", "Everybody says that. Everybody is wrong. The hump is fat, up to about thirty five kilograms. Energy for when food is scarce.", mood="teach", shot="close",
  boardClear=True, board="Camel hump = FAT (up to ~35 kg)")
L("guest", "A camel can lose about a quarter of its body weight in water and survive, then drink about a hundred litres in ten minutes.", mood="teach", shot="close",
  board="Loses ~25% · drinks ~100 L in ~10 min")
L("guest", "And look. Long double eyelashes against sand. Nostrils that close. Wide padded feet that don't sink.", mood="teach", shot="close",
  board="Lashes · closable nostrils · wide feet")
L("dad", "She has better eyelashes than me.", mood="sad", shot="close")
L("atlas", "She has better everything than you.", mood="smug", shot="close", gap=0.4)
L("atlas", "The fennec fox is the reverse. Ears up to fifteen centimetres long, with a big surface area to radiate heat. And it hunts at night.", mood="teach", shot="close",
  boardClear=True, board="Fennec fox: big ears radiate heat")
L("guest", "We move our herds between wells, so no place is drunk dry. Loose, layered robes trap cooler air, and the tagelmust veil stops sun and sand.", mood="teach", shot="close",
  board="Tuareg: nomadic herds · loose robes")
L("dad", "I'm wearing shorts and a T-shirt from Changi Airport.", mood="worried", shot="close")
L("guest", "Yes. Everybody noticed.", mood="deadpan", shot="close", gap=0.4)
L("dad", "At least that cactus is a local.", mood="smug", shot="close")
L("guest", "Planted. Wild cacti come from the Americas.", mood="teach", shot="close",
  boardClear=True, diagram=CACTUS)
L("atlas", "Spines are leaves shrunk to points, so less water is lost by transpiration. Waxy skin seals it in.", mood="teach", shot="close",
  board="Spines = tiny leaves → less water lost")
L("atlas", "Shallow, wide roots grab rain fast. The pleated stem swells to store it.", mood="teach", shot="close",
  board="Shallow wide roots · stem stores water")
L("priya", "And it opens its stomata at night, when it's cooler. That's C A M.", mood="smug", shot="close",
  board="CAM: stomata open at NIGHT")

# ---------------- ACT 3: SINGAPORE ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad has drunk three litres of water and asked for a camel.", 2.4)
scene("kitchen", [("priya", 220), ("dad", 440), ("nani", 660)])
L("dad", "Aircon on. Full blast. I survived two extreme environments today.", mood="determined", shot="close")
L("nani", "In the sixties we had no aircon. Your grandfather slept on the floor because the tiles were cool.", mood="smug", shot="close")
L("priya", "Nani, that's a behavioural adaptation.", mood="happy", shot="close")
L("nani", "That was a cheap adaptation.", mood="deadpan", shot="close", gap=0.3)
poof("atlas", 980)
L("atlas", "People can't grow fur, so we use culture, like Moussa's robes, and technology, like aircon and desalination.", mood="teach", shot="close",
  boardClear=True, board="People adapt: CULTURE + TECHNOLOGY")
L("priya", "Desalination is one of Singapore's Four National Taps.", mood="teach", shot="close",
  board="Desalination: 1 of SG's 4 National Taps")
L("nani", "And both eat electricity. The aircon blows its heat outside. Onto my laundry.", mood="annoyed", shot="close",
  board="Downside: uses lots of energy")
L("nani", "And Singapore? Heat plus humidity. Sweat can't evaporate, so you can't cool down. Heatstroke is when your core passes about forty degrees.", mood="worried", shot="close",
  boardClear=True, board="Heatstroke: core ~40 °C or more")
L("priya", "Normal is thirty seven. Hypothermia is below thirty five. Frostbite is when fingers and toes freeze.", mood="teach", shot="close",
  board="Hypothermia <35 °C · frostbite = freezing")

# ---------------- MR TAN: DESCRIBE AND EXPLAIN ----------------
scene("classroom", [("teacher", 260), ("priya", 560), ("atlas", 900)])
L("teacher", "Exam skill. The cactus has spines. One mark. Spines have a small surface area, which means that less water is lost. Two marks.", mood="teach", shot="close",
  boardClear=True, board="Describe + 'which means that…' = 2 marks")
L("teacher", "Priya. Snow leopard, then yak.", mood="neutral", shot="close")
L("priya", "Wide, furry paws, which means that they work like snowshoes on snow.", mood="determined", shot="close",
  board="Snow leopard: furry paws = snowshoes")
L("priya", "Shaggy hair and a woolly undercoat, which means that warm air is trapped. Big lungs and heart, for scarce oxygen.", mood="determined", shot="close",
  board="Yak: shaggy hair, big lungs and heart")
L("atlas", "It gets colder, about six point five degrees every thousand metres, and each breath holds less oxygen. On Everest's summit, a third.", mood="teach", shot="close",
  boardClear=True, diagram=LAPSE)
L("teacher", "Altitude sickness is caused by lack of oxygen, not cold. Climb slowly to acclimatise. The cure is to go down.", mood="teach", shot="close",
  board="Altitude sickness = LOW OXYGEN")
L("priya", "And Sherpa bodies have adapted over generations. Better blood flow, not thicker blood.", mood="smug", shot="close",
  board="Sherpa: better blood flow")
L("teacher", "Excellent. Who brought a globe to class?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Still Slightly Sandy")
L("atlas", "Recap. One. Adaptations are structural, or behavioural.", mood="teach",
  boardClear=True, board="1. Structural (body) vs behavioural")
L("atlas", "Two. Polar bears, Arctic only. Penguins, south only.", mood="teach",
  board="2. Bears = Arctic · penguins = south")
L("atlas", "Three. The camel's hump is fat. Cactus spines and C A M save water.", mood="teach",
  board="3. Hump = fat · cactus: spines, CAM")
L("atlas", "Four. Altitude sickness means too little oxygen. Descend.", mood="teach",
  board="4. Altitude sickness = low oxygen")
L("atlas", "Five. Describe, then explain. Which means that.", mood="smug",
  board="5. Describe + explain: 'which means…'", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("priya", 220), ("dad", 440), ("nani", 660)])
poof("atlas", 980)
L("dad", "The aircon is broken. Tonight we survive like emperor penguins. We huddle.", mood="determined", shot="close")
L("nani", "Fine. But we rotate. Your turn on the outside.", mood="smug", shot="close")
L("atlas", "Survival of the sweatiest.", mood="bored", shot="close")
sfx("trombone")
L("priya", "Behavioural adaptation. I'm going to the mall.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Then he spins smugly.", 3.0)
challenge(1, "A card shows a polar bear chasing a penguin. Why is that impossible?", "Opposite poles",
  "Bears: Arctic only · penguins: southern hemisphere",
  "Question one. A card shows a polar bear chasing a penguin. Why is that impossible?",
  "Opposite poles. Polar bears, Arctic. Penguins, southern hemisphere.")
challenge(2, "Explain how spines help a cactus survive in a hot desert.", "Less water lost",
  "Small surface area → less transpiration",
  "Question two. Explain how spines help a cactus survive.",
  "Spines have a small surface area, which means that less water is lost by transpiration.")
challenge(3, "A town at sea level is 25 °C. Using 6.5 °C per 1,000 m, what is it at 2,000 m?", "12 °C",
  "2 × 6.5 = 13 · 25 − 13 = 12 °C",
  "Question three. Sea level is twenty five degrees. What is it at two thousand metres?",
  "Twelve degrees. Twenty five minus thirteen.")
end_card()
