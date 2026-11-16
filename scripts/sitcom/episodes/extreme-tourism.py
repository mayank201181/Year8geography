# "Off The Map" (a Claude Sitcom) S01E09 "Penguins Don't Do Selfies" (Topic: Extreme Tourism)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="extreme-tourism",
    logline="Dad books a 3,000-passenger cruise to Antarctica to take a selfie with a penguin. Atlas spins the family to the Antarctic Peninsula, where an expedition guide enforces the rules, then to Everest Base Camp, where a Sherpa guide hands Dad a poo bag.",
    names={"guest": "PEMBA", "guest2": "MARISOL"},
    display={"I A A T O": "IAATO", "W I P": "WIP"},
)

GROWTH = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">'
    '<text x="10" y="30" font-family="sans-serif" font-size="22" fill="#f8fafc">Antarctic visitors per season</text>'
    '<text x="10" y="76" font-family="sans-serif" font-size="20" fill="#f8fafc">1992–93</text>'
    '<rect x="120" y="54" width="16" height="32" fill="#7dd3fc"/>'
    '<text x="146" y="78" font-family="sans-serif" font-size="20" fill="#7dd3fc">about 6,700</text>'
    '<text x="10" y="124" font-family="sans-serif" font-size="20" fill="#f8fafc">2019–20</text>'
    '<rect x="120" y="102" width="176" height="32" fill="#86efac"/>'
    '<text x="306" y="126" font-family="sans-serif" font-size="20" fill="#86efac">about 74,000</text>'
    '<text x="10" y="172" font-family="sans-serif" font-size="20" fill="#f8fafc">2022–23</text>'
    '<rect x="120" y="150" width="250" height="32" fill="#fde047"/>'
    '<text x="380" y="174" font-family="sans-serif" font-size="20" fill="#fde047">105,000</text>'
    '<text x="10" y="220" font-family="sans-serif" font-size="20" fill="#f8fafc">2023–24</text>'
    '<rect x="120" y="198" width="290" height="32" fill="#fca5a5"/>'
    '<text x="420" y="222" font-family="sans-serif" font-size="20" fill="#fca5a5">122,000</text>'
    '</svg>'
)

IAATO = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">'
    '<text x="260" y="30" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#f8fafc">Antarctic landing rules (IAATO)</text>'
    '<rect x="10" y="48" width="160" height="120" rx="12" fill="#1e3a8a"/>'
    '<text x="90" y="104" text-anchor="middle" font-family="sans-serif" font-size="40" fill="#7dd3fc">100</text>'
    '<text x="90" y="140" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">max ashore</text>'
    '<rect x="180" y="48" width="160" height="120" rx="12" fill="#7f1d1d"/>'
    '<text x="260" y="104" text-anchor="middle" font-family="sans-serif" font-size="40" fill="#fca5a5">500+</text>'
    '<text x="260" y="140" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">ship: no landing</text>'
    '<rect x="350" y="48" width="160" height="120" rx="12" fill="#14532d"/>'
    '<text x="430" y="104" text-anchor="middle" font-family="sans-serif" font-size="40" fill="#86efac">5 m</text>'
    '<text x="430" y="140" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">from wildlife</text>'
    '<text x="260" y="208" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">Biosecurity: boots washed, bags vacuumed</text>'
    '</svg>'
)

LAYERS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">'
    '<text x="10" y="30" font-family="sans-serif" font-size="22" fill="#f8fafc">Layering: W-I-P (skin outwards)</text>'
    '<rect x="10" y="48" width="60" height="44" rx="6" fill="#fde047"/>'
    '<text x="40" y="78" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#111827">W</text>'
    '<text x="86" y="78" font-family="sans-serif" font-size="20" fill="#f8fafc">Base layer wicks sweat (no cotton)</text>'
    '<rect x="10" y="102" width="60" height="44" rx="6" fill="#fca5a5"/>'
    '<text x="40" y="132" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#111827">I</text>'
    '<text x="86" y="132" font-family="sans-serif" font-size="20" fill="#f8fafc">Mid layer insulates (traps air)</text>'
    '<rect x="10" y="156" width="60" height="44" rx="6" fill="#7dd3fc"/>'
    '<text x="40" y="186" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#111827">P</text>'
    '<text x="86" y="186" font-family="sans-serif" font-size="20" fill="#f8fafc">Shell protects: wind + waterproof</text>'
    '</svg>'
)

IMPACTS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250">'
    '<text x="232" y="30" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#86efac">Positive +</text>'
    '<text x="425" y="30" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#fca5a5">Negative −</text>'
    '<rect x="140" y="44" width="185" height="60" rx="8" fill="#14532d"/>'
    '<rect x="333" y="44" width="185" height="60" rx="8" fill="#7f1d1d"/>'
    '<rect x="140" y="112" width="185" height="60" rx="8" fill="#14532d"/>'
    '<rect x="333" y="112" width="185" height="60" rx="8" fill="#7f1d1d"/>'
    '<rect x="140" y="180" width="185" height="60" rx="8" fill="#14532d"/>'
    '<rect x="333" y="180" width="185" height="60" rx="8" fill="#7f1d1d"/>'
    '<text x="6" y="81" font-family="sans-serif" font-size="19" fill="#fde047">Economic</text>'
    '<text x="6" y="149" font-family="sans-serif" font-size="19" fill="#fde047">Environ.</text>'
    '<text x="6" y="217" font-family="sans-serif" font-size="19" fill="#fde047">Social</text>'
    '<text x="232" y="81" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">jobs, multiplier</text>'
    '<text x="425" y="81" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">leakage, seasonal</text>'
    '<text x="232" y="149" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">conservation fees</text>'
    '<text x="425" y="149" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">trampling, waste</text>'
    '<text x="232" y="217" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">schools, clinics</text>'
    '<text x="425" y="217" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">risk to guides</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 330), ("priya", 640)])
L("dad", "Priya. Pack your thermals. I've booked a luxury cruise. To Antarctica!", mood="excited", shot="close", prop="tablet")
L("priya", "Which ship?", mood="deadpan", shot="close")
L("dad", "The Floating Buffet. Three thousand passengers and an iceberg waterslide.", mood="smug", shot="close", prop="tablet")
L("priya", "And in Antarctica?", mood="deadpan", shot="close")
L("dad", "I walk up to a penguin, arm round him, selfie. Two tuxedos. Best friends.", mood="excited", shot="close", prop="phone")
freeze("DAD'S BUCKET LIST", 2.6, narrator="Narrator: The penguin has not agreed to this.")
confess("priya", "PRIYA · 12 · Has Read The Small Print")
L("priya", "Three thousand tourists and one selfie stick. That's not a holiday. That's an environmental incident.", mood="deadpan")
L("priya", "Luckily, I know someone who has Antarctica on his bottom.", mood="smug", gap=0.6)

title()

# ---------------- ACT 1: WHY GO, AND WHO IS IN CHARGE ----------------
scene("living", [("priya", 240), ("dad", 480), ("nani", 720)])
L("priya", "Atlas! Dad wants to hug a penguin.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 1020)
L("atlas", "I have had penguins on my underside for sixty years. Not one has asked to be hugged.", mood="bored", shot="close")
L("atlas", "Antarctica, Everest, the Sahara. Extreme environments. Too cold, too high or too dry. So why go?", mood="teach", shot="close",
  boardClear=True, board="Extreme = too cold, too high or too dry")
L("atlas", "Push factors: money, free time, adventure. Pull factors: wildlife, bucket lists, and last chance tourism, seeing glaciers before they melt.", mood="teach", shot="close",
  board="Push: wealth · Pull: wildlife, bucket lists")
L("priya", "Plus easier access. More ships, cheaper flights, social media. If you didn't post it, you didn't go.", mood="deadpan", shot="close",
  board="Access: ships, flights, social media")
L("atlas", "In nineteen ninety two to ninety three, about six thousand seven hundred people visited Antarctica.", mood="teach", shot="close",
  boardClear=True, diagram=GROWTH)
L("atlas", "In twenty twenty two to twenty three, over one hundred thousand for the first time. Then about one hundred and twenty two thousand.", mood="shock", shot="close",
  board="About 18 times more in 30 years")
L("nani", "In nineteen sixty five, my extreme tourism was the bus to Changi. Nobody posted it.", mood="smug", shot="close", gap=0.4)
L("dad", "So who owns Antarctica? Whoever planted a flag first?", mood="smug", shot="close")
L("atlas", "Nobody. Seven countries claim slices, but the Antarctic Treaty, signed by twelve countries in nineteen fifty nine, froze those claims. Peace and science only.", mood="teach", shot="close",
  boardClear=True, board="Treaty 1959 (12 countries): peace, science")
L("priya", "And the Madrid Protocol, nineteen ninety one, bans mining. Even tourism needs an environmental impact assessment.", mood="thinking", shot="close",
  board="Madrid Protocol 1991: bans mining")
L("atlas", "Fifty nine for peace, ninety one for no pits. Mine pits.", mood="eyeroll", shot="close",
  board="'59 for peace · '91 for no (mine) pits")

confess("atlas", "ATLAS · Desk Globe · Dropped Eleven Times")
L("atlas", "Eleven drops. Five on Australia, six on Antarctica. Under the Treaty, my dents are now protected historic sites.", mood="smug", gap=0.5)

# ---------------- ACT 2a: THE ANTARCTIC PENINSULA ----------------
scene("living", [("priya", 240), ("dad", 480), ("atlas", 820)])
L("atlas", "You want penguins? Hold on to something. Not my Antarctica. It is tender.", mood="smug", shot="close")
sfx("whoosh")
scene("polar", [("priya", 240), ("dad", 480), ("atlas", 760)], caption="ANTARCTIC PENINSULA · Antarctica · December · −2 °C")
L("dad", "Where's my ship? Where's my waterslide?", mood="shock", shot="close")
sfx("door")
poof("guest2", 1080)
L("guest2", "Out there, cruising. I'm Marisol, an expedition guide from Ushuaia, in Argentina, where most Antarctic trips start.", mood="happy", shot="close")
L("guest2", "Under the I A A T O rules, ships with over five hundred passengers can sail here, but land nobody.", mood="teach", shot="close",
  boardClear=True, board="Ship over 500 passengers = NO landings")
L("guest2", "Smaller ships land in groups. No more than one hundred people ashore at a site at one time.", mood="teach", shot="close",
  board="Max 100 ashore at a site at one time")
L("dad", "Excellent. I'll be number one hundred and one.", mood="smug", shot="close")
L("guest2", "Then you will be number one. Back on the ship.", mood="deadpan", shot="close", gap=0.4)
L("guest2", "Biosecurity. We scrub boots and vacuum bags and Velcro, so no seeds or diseases like bird flu arrive.", mood="teach", shot="close",
  boardClear=True, diagram=IAATO)
L("dad", "My jacket has fourteen Velcro pockets.", mood="worried", shot="close")
L("guest2", "I know. I've brought the big vacuum.", mood="deadpan", shot="close", gap=0.4)
L("dad", "Right! Penguin! Arm round him, big smile, and...", mood="excited", shot="close", prop="phone")
L("guest2", "Five metres, sir. Keep about five metres from wildlife. Never touch, never feed.", mood="determined", shot="close",
  board="About 5 m from wildlife · never touch")
L("priya", "Penguins don't do selfies, Dad.", mood="deadpan", shot="close", gap=0.4)
L("guest2", "And nothing left, nothing taken. Is that a pebble in your pocket?", mood="annoyed", shot="close",
  board="Nothing left behind, nothing taken")
L("dad", "He looked lonely.", mood="sad", shot="close", gap=0.4)
L("atlas", "Impacts. Negative: trampled moss, disturbed penguins, carbon from flights and ships.", mood="teach", shot="close",
  boardClear=True, board="− trampling, disturbance, emissions")
L("guest2", "Positive: jobs in gateway towns like Ushuaia, and visitors who go home as ambassadors for Antarctica.", mood="happy", shot="close",
  board="+ jobs in Ushuaia, 'ambassadors'")

confess("dad", "DAD · Self-Declared Explorer · Forty Airports, One Pebble")
L("dad", "I've been to forty countries. Well. Forty airports. Not one of them vacuumed my pockets.", mood="smug")
L("dad", "I gave the pebble back. Very emotional. For me. The pebble was fine.", mood="sad", gap=0.6)

# ---------------- ACT 2b: EVEREST BASE CAMP ----------------
scene("polar", [("priya", 240), ("dad", 480), ("atlas", 820)])
L("dad", "Forget penguins. I'll climb Everest. Everyone's doing it.", mood="determined", shot="close")
L("atlas", "Everyone IS doing it. That is the problem.", mood="eyeroll", shot="close")
sfx("whoosh")
scene("mountain", [("priya", 240), ("dad", 480), ("atlas", 780)], caption="EVEREST BASE CAMP · Nepal · 5,364 m")
L("dad", "Why is it so hard to breathe?", mood="shock", shot="close")
sfx("door")
poof("guest", 1080)
L("guest", "Namaste! Thin air up here. I'm Pemba. I guide climbers up Everest, all eight thousand eight hundred and forty nine metres of it.", mood="happy", shot="close",
  boardClear=True, board="Everest: 8,849 m")
L("priya", "Is Sherpa your job title?", mood="neutral", shot="two")
L("guest", "Sherpa is my people, an ethnic group from the Khumbu valley. Many of us are expert guides. We fix the ropes and lead the climbs.", mood="teach", shot="close",
  board="Sherpa = an ethnic group, not a job")
L("guest", "A guide earns four to ten thousand US dollars a season. The average yearly income in Nepal is about one thousand four hundred.", mood="teach", shot="close",
  board="Guide: US$4,000–10,000 a season")
L("guest", "But in twenty fourteen, an avalanche in the Khumbu Icefall killed sixteen Nepali guides.", mood="sad", shot="close",
  board="2014 Icefall avalanche: 16 guides died")
L("priya", "So it's a trade off. Income versus risk.", mood="thinking", shot="close",
  board="Sherpa dilemma: INCOME vs RISK")
L("guest", "In May the winds drop for a few days, so hundreds climb at once and queue in the death zone, above eight thousand metres.", mood="teach", shot="close",
  boardClear=True, board="May weather window → death-zone queues")
L("atlas", "In twenty nineteen, eleven people died. In twenty twenty three, a record of about four hundred and seventy eight permits.", mood="worried", shot="close",
  board="2019: 11 deaths · 2023: ~478 permits")
L("guest", "Each climber must bring down eight kilograms of rubbish, or the team loses a four thousand dollar deposit. And everyone carries poo bags.", mood="teach", shot="close",
  board="Bring down 8 kg or lose US$4,000 deposit")
L("guest", "So, sir. Here is your bag.", mood="smug", shot="close")
L("dad", "I have changed my mind about Everest.", mood="worried", shot="close", gap=0.5)

# ---------------- ACT 3: MUM'S RISK ASSESSMENT ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad has handed in eight kilograms of rubbish. Mostly brochures.", 2.4)
scene("kitchen", [("mum", 260), ("dad", 500), ("nani", 740), ("priya", 980)])
L("dad", "New plan. I'm skiing to the South Pole. Like Captain Scott.", mood="excited", shot="close")
L("mum", "Scott died, darling.", mood="deadpan", shot="close")
L("mum", "Risk assessment. Frostbite. Likelihood three, severity four. Three times four is twelve. High. Controls: mitts, a face mask, and buddy checks on each other's faces.", mood="determined", shot="close", prop="book",
  boardClear=True, board="Risk = likelihood × severity")
L("dad", "Who's my buddy?", mood="happy", shot="close",
  board="Frostbite: 3 × 4 = 12 → mitts, buddy")
L("nani", "Not me. I've seen your face.", mood="smug", shot="close", gap=0.5)
L("priya", "Kit. Layers. W I P. The base layer wicks sweat. The mid layer insulates. The outer shell protects from wind and water.", mood="teach", shot="close",
  boardClear=True, diagram=LAYERS)
L("mum", "And food. Pulling a sledge burns five to six thousand calories a day or more. Plus a satellite phone, because there's no signal.", mood="teach", shot="close",
  board="Sledge-hauling: 5,000–6,000+ kcal/day")
L("nani", "Amundsen planned better. Dogs, skis, furs and marked depots. He reached the Pole on the fourteenth of December, nineteen eleven.", mood="teach", shot="close",
  boardClear=True, board="Amundsen: Pole 14 Dec 1911 · dogs, skis")
L("nani", "Scott arrived on the seventeenth of January, nineteen twelve. His ponies failed, so they hauled the sledges. All five died on the way back.", mood="sad", shot="close",
  board="Scott: 17 Jan 1912 · ponies, man-hauling")
L("priya", "Shackleton's ship, Endurance, sank in nineteen fifteen. All twenty eight men survived. The wreck was found in twenty twenty two.", mood="thinking", shot="close",
  board="Endurance: sank 1915, found 2022")
L("nani", "Shackleton lost a whole ship and brought everyone home. Your father loses the remote in the sofa.", mood="smug", shot="close", gap=0.5)

# ---------------- EXAM SKILL: EVALUATE IMPACTS ----------------
scene("classroom", [("teacher", 300), ("priya", 640), ("atlas", 940)])
L("teacher", "Exam skill. To evaluate impacts, classify them. Economic, environmental or social. Positive or negative. And always name the place.", mood="teach", shot="close",
  boardClear=True, diagram=IMPACTS)
L("priya", "Economic positive: the multiplier effect, money re-spent locally. Economic negative: leakage, money flowing out to foreign companies.", mood="thinking", shot="close",
  board="Leakage: money flows out to foreign firms")
L("atlas", "The better way is ecotourism. Conserve nature, benefit local people, educate visitors. And stay within carrying capacity.", mood="teach", shot="close",
  boardClear=True, board="Ecotourism = conserve + locals + educate")
L("priya", "Finish with a judgement. Small, local and well managed, tourism can be positive.", mood="determined", shot="close",
  board="End with a clear JUDGEMENT")
L("teacher", "Who brought a globe to class? Again?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Freshly Vacuumed")
L("atlas", "Recap. First. Push, pull and access. Over one hundred thousand Antarctic visitors a season.", mood="teach",
  boardClear=True, board="1. Push, pull, access · 100,000+ a season")
L("atlas", "Second. Treaty, nineteen fifty nine, peace and science. Madrid, nineteen ninety one, no mining.", mood="teach",
  board="2. Treaty 1959 peace · Madrid 1991 mining")
L("atlas", "Third. One hundred ashore. No landings from ships over five hundred. Clean boots. Five metres.", mood="teach",
  board="3. 100 ashore · 500 ship limit · 5 m")
L("atlas", "Fourth. Everest. Income versus risk, crowding and waste.", mood="teach",
  board="4. Everest: income vs risk, queues, waste")
L("atlas", "And finally. Plan with layers and a risk assessment, and weigh both sides.", mood="smug",
  board="5. Plan: W-I-P, risk, calories · evaluate", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("dad", "I've rebooked. A small ship. Local guides. I'll even wash my boots. And I got my penguin selfie.", mood="smug", shot="close", prop="phone")
L("priya", "Dad. That's a dot.", mood="deadpan", shot="close")
L("dad", "A dot at a respectful five metres.", mood="smug", shot="close")
L("atlas", "Finest selfie in history. You can just about see the penguin's relief.", mood="smug", shot="close")
sfx("trombone")
L("priya", "Penguins don't do selfies. And Dad doesn't do focus.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Then he checks your boots for seeds.", 3.0)
challenge(1, "A cruise ship carries 3,000 passengers. Can it land them in Antarctica under IAATO rules?", "No: ships over 500 can't",
  "It may cruise and look, but cannot land anyone",
  "Question one. A ship carries three thousand passengers. Can it land them in Antarctica?",
  "No. Ships with more than five hundred passengers cannot land anyone. They can only cruise and look.")
challenge(2, "Which agreement banned mining in Antarctica, and in what year?", "Madrid Protocol, 1991",
  "Treaty 1959 = peace & science; Madrid 1991 = no mining",
  "Question two. Which agreement banned mining in Antarctica, and when?",
  "The Madrid Protocol, nineteen ninety one. Not the Treaty of nineteen fifty nine.")
challenge(3, "Hazard: frostbite. Likelihood 3, severity 4. What is the risk score?", "12 (high)",
  "Risk = likelihood × severity = 3 × 4",
  "Question three. Frostbite. Likelihood three, severity four. What is the risk score?",
  "Twelve. High. Risk is likelihood times severity.")
end_card()
