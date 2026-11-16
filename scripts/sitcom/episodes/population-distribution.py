# "Off The Map" (a Claude Sitcom) S01E01 "Crowded House" (Topic: Population Distribution & Density)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="population-distribution",
    logline="Dad decides their HDB block is too crowded and plans a move to the emptiest place on Earth. Atlas spins the family to the Sahara to show why nobody lives there.",
    names={"guest": "AMADOU"},
)

DENSITY = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<text x="10" y="34" font-family="sans-serif" font-size="22" fill="#f8fafc">People per km²</text>'
    '<rect x="150" y="56" width="350" height="34" fill="#f87171"/>'
    '<text x="10" y="80" font-family="sans-serif" font-size="20" fill="#f8fafc">Singapore</text>'
    '<text x="490" y="80" text-anchor="end" font-family="sans-serif" font-size="20" fill="#111827">about 8,000</text>'
    '<rect x="150" y="106" width="60" height="34" fill="#fbbf24"/>'
    '<text x="10" y="130" font-family="sans-serif" font-size="20" fill="#f8fafc">Bangladesh</text>'
    '<text x="220" y="130" font-family="sans-serif" font-size="20" fill="#fde68a">about 1,300</text>'
    '<rect x="150" y="156" width="4" height="34" fill="#4ade80"/>'
    '<text x="10" y="180" font-family="sans-serif" font-size="20" fill="#f8fafc">Mongolia</text>'
    '<text x="165" y="180" font-family="sans-serif" font-size="20" fill="#86efac">about 2</text>'
    '</svg>'
)

FACTORS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">'
    '<rect x="10" y="10" width="240" height="190" rx="12" fill="#14532d"/>'
    '<text x="130" y="40" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#bbf7d0">PHYSICAL</text>'
    '<text x="24" y="76" font-family="sans-serif" font-size="19" fill="#f8fafc">• flat land (relief)</text>'
    '<text x="24" y="106" font-family="sans-serif" font-size="19" fill="#f8fafc">• mild climate</text>'
    '<text x="24" y="136" font-family="sans-serif" font-size="19" fill="#f8fafc">• fresh water</text>'
    '<text x="24" y="166" font-family="sans-serif" font-size="19" fill="#f8fafc">• fertile soil</text>'
    '<rect x="270" y="10" width="240" height="190" rx="12" fill="#1e3a8a"/>'
    '<text x="390" y="40" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#bfdbfe">HUMAN</text>'
    '<text x="284" y="76" font-family="sans-serif" font-size="19" fill="#f8fafc">• jobs and money</text>'
    '<text x="284" y="106" font-family="sans-serif" font-size="19" fill="#f8fafc">• transport, ports</text>'
    '<text x="284" y="136" font-family="sans-serif" font-size="19" fill="#f8fafc">• schools, hospitals</text>'
    '<text x="284" y="166" font-family="sans-serif" font-size="19" fill="#f8fafc">• peace, government</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 330), ("priya", 640)])
L("dad", "That's it. I have had enough. Our lift was full again. Eleven people. One of them was a dog.", mood="annoyed", shot="close")
L("priya", "It's an HDB block, Dad. Lifts have people in them. That's the point of lifts.", mood="deadpan", shot="close")
L("dad", "We are moving. Somewhere with space. Somewhere nobody else lives. I've found it.", mood="smug", shot="close", prop="phone")
L("priya", "Where?", mood="deadpan", shot="close")
L("dad", "The middle of the Sahara Desert. Huge. Empty. Not a single queue for chicken rice.", mood="excited", shot="close")
freeze("DAD'S DREAM HOME", 2.6, narrator="Narrator: Annual rainfall, less than one fridge of water.")
confess("priya", "PRIYA · 12 · Owns A Globe With Opinions")
L("priya", "There's a reason nobody lives in the middle of the Sahara. Several reasons. Most of them will kill you.", mood="deadpan")
L("priya", "But Dad doesn't listen to me. He only listens to things that are older than him. Luckily, we have one.", mood="smug", gap=0.6)

title()

# ---------------- ACT 1: DENSITY ----------------
scene("living", [("priya", 300), ("dad", 600)])
L("priya", "Atlas! Wake up. We need a geography intervention.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 900)
L("atlas", "I was asleep on the bookshelf, child. I am a globe. I have been spinning since your grandmother was in pigtails. What now?", mood="bored", shot="close")
L("priya", "Dad says Singapore is too crowded. He wants to move to the Sahara.", mood="deadpan", shot="two")
L("atlas", "Ah. A crowding complaint. Then let us measure it properly. Geographers use population density.", mood="teach", shot="close",
  boardClear=True, board="Population density = people ÷ area")
L("atlas", "Divide the number of people by the land area. The answer is people per square kilometre.", mood="teach", shot="close",
  board="Answer in people per km²")
L("priya", "Singapore has about six million people, on about seven hundred and thirty five square kilometres.", mood="thinking", shot="close",
  board="6,000,000 ÷ 735 ≈ 8,000 per km²")
L("atlas", "Roughly eight thousand people in every square kilometre. One of the most densely populated countries on the planet.", mood="teach", shot="close",
  boardClear=True, diagram=DENSITY)
L("atlas", "Bangladesh, about one thousand three hundred. Mongolia? About two. Two people per square kilometre. You could shout and nobody would complain.", mood="smug", shot="close")
L("dad", "Mongolia! Two people! I would be one of the two. Very exclusive.", mood="excited", shot="close")
L("priya", "Dad, the average temperature in Ulaanbaatar in January is about minus twenty.", mood="deadpan", shot="close")
L("dad", "...I'd be one of the two. Indoors.", mood="worried", shot="close", gap=0.4)
L("atlas", "Words matter in the exam. Densely populated means many people per square kilometre. Sparsely populated means very few.", mood="teach", shot="close",
  boardClear=True, board="Dense = many people per km²")
L("atlas", "And distribution is different from density. Distribution is the pattern. Where people are spread across a map.", mood="teach", shot="close",
  board="Sparse = few people per km²")
L("atlas", "Density is a number. Distribution is a pattern. Mix them up and your teacher will make a face like mine.", mood="eyeroll", shot="close",
  board="Distribution = the PATTERN on a map")

confess("atlas", "ATLAS · Desk Globe · Dropped Eleven Times")
L("atlas", "I have been dropped eleven times. Usually on Australia. It is why Australia is slightly flat.", mood="bored")
L("atlas", "Also, I still show a country that changed its name in nineteen ninety one. Nobody updates me. I am vintage.", mood="smug", gap=0.5)

# ---------------- ACT 2: THE SAHARA ----------------
scene("living", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("dad", "Fine. Numbers. But I want to SEE the Sahara. Real space. Real freedom.", mood="determined", shot="close")
L("atlas", "As you wish. Hold on to something. Not me. I bruise.", mood="smug", shot="close")
sfx("whoosh")
scene("desert", [("priya", 300), ("dad", 580), ("atlas", 900)], caption="THE SAHARA · Algeria · Afternoon · 46 °C")
L("dad", "It's... beautiful. So much space. My shoes are melting.", mood="shock", shot="close")
L("atlas", "Welcome to a sparsely populated region. Let us ask why. Physical factors first. These are natural.", mood="teach", shot="close",
  boardClear=True, board="PHYSICAL factors = natural")
L("priya", "Climate. It's far too hot and far too dry. Some places here get less than twenty five millimetres of rain a year.", mood="thinking", shot="close",
  board="Climate: too hot, too dry")
L("atlas", "No rain means no rivers, no crops, no water to drink. Water is the first thing a settlement needs.", mood="teach", shot="close",
  board="No water → no farming → few people")
L("priya", "And the soil is sand. You can't grow rice in sand. Or anything, really.", mood="deadpan", shot="close")
L("dad", "I could grow a cactus.", mood="smug", shot="close")
L("atlas", "You could. And eat it. Alone. Forever.", mood="deadpan", shot="close", gap=0.3)
sfx("door")
poof("guest", 1100)
L("guest", "Hello! Lost tourists again? I'm Amadou. I guide camel trips from the oasis, about ten kilometres that way.", mood="happy", shot="close")
L("priya", "Do many people live around here?", mood="neutral", shot="two")
L("guest", "Out here? Almost nobody. But at the oasis, where there is water under the ground, there's a whole town. Date palms, a market, a school.", mood="teach", shot="close")
L("atlas", "There it is. Even in a desert, people cluster where there is water. That makes the distribution uneven. Clustered, not spread out.", mood="excited", shot="close",
  boardClear=True, board="People cluster where there is WATER")
L("guest", "And the people who stay have jobs from tourism and trade. Without that, the young ones move to the cities.", mood="neutral", shot="close")
L("atlas", "Which brings us to human factors. Things people create. Jobs. Roads. Ports. Schools. Hospitals. Peace. A government that works.", mood="teach", shot="close",
  boardClear=True, diagram=FACTORS)
L("priya", "So physical factors are about nature, and human factors are about people and money.", mood="thinking", shot="close")
L("atlas", "Precisely. And in an exam answer, you name the factor AND explain how it attracts or repels people. Not just a list.", mood="teach", shot="close")
L("dad", "Amadou, is there a hawker centre nearby?", mood="worried", shot="close")
L("guest", "There is a man who sells tea. On Tuesdays.", mood="deadpan", shot="close", gap=0.4)

confess("dad", "DAD · Self-Declared Explorer · Has Been To Forty Airports")
L("dad", "I have been to forty countries. Well. Forty airports. The airports were very well populated.", mood="smug")
L("dad", "The desert taught me something. Space is overrated. Air conditioning is underrated.", mood="sad", gap=0.6)

# ---------------- ACT 3: WHY CROWDED SINGAPORE? ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad has drunk four litres of water and one teh peng.", 2.4)
scene("hawker", [("priya", 300), ("dad", 600), ("uncle", 1000)])
L("dad", "So if Singapore is so crowded, why do six million people want to live here? Physically, it is tiny.", mood="thinking", shot="close")
poof("atlas", 820)
L("uncle", "Wah. The globe is talking again. You want a teh?", mood="happy", shot="close")
L("atlas", "Two sugars. Now. Singapore's physical factors are not bad. Flat land, plenty of rain, a sheltered natural harbour.", mood="teach", shot="close",
  boardClear=True, board="Singapore: flat, wet, sheltered harbour")
L("priya", "But the big reasons are human. The port. Jobs. Trade. Good schools, safe streets, a stable government.", mood="thinking", shot="close",
  board="Human pull: port, jobs, trade, safety")
L("atlas", "Exactly. Location on one of the busiest shipping routes in the world, the Strait of Malacca. Human factors can beat physical limits.", mood="excited", shot="close",
  board="Location on a shipping route = jobs")
L("uncle", "And the food. Don't forget the food. My stall alone brings in thirty people a day.", mood="smug", shot="close")
L("priya", "Uncle Hock, where does your rice come from?", mood="neutral", shot="close")
L("uncle", "Thailand. Vegetables from Malaysia. Onions from India. Singapore imports more than ninety percent of our food.", mood="teach", shot="close",
  boardClear=True, board="Singapore imports over 90% of its food")
L("atlas", "So a dense country can survive with little farmland, if it is rich and well connected. Trade feeds the crowd.", mood="teach", shot="close")
L("dad", "So the crowd is here because of the jobs, and the food is here because of the crowd.", mood="thinking", shot="close")
L("priya", "Dad. That was actually geography.", mood="shock", shot="close", gap=0.3)

# ---------------- DESCRIBING A DISTRIBUTION ----------------
scene("classroom", [("teacher", 300), ("priya", 640), ("atlas", 940)])
L("teacher", "Exam skill, everyone. When a question says describe the distribution on a world map, use T E A.", mood="teach", shot="close",
  boardClear=True, board="Describe a distribution: T · E · A")
L("teacher", "T is the trend. The overall pattern. For example, most people live in the northern hemisphere, especially Asia.", mood="teach", shot="close",
  board="T = Trend (overall pattern)")
L("priya", "E is an example with data. Like, Bangladesh has about one thousand three hundred people per square kilometre.", mood="thinking", shot="close",
  board="E = Example + DATA")
L("teacher", "And A is the anomaly. The exception. Like a dense city in a sparse desert. Cairo, along the River Nile.", mood="teach", shot="close",
  board="A = Anomaly (the exception)")
L("atlas", "Describe means say what the pattern is. Explain means say why. Do not explain when they ask you to describe. You will waste minutes.", mood="eyeroll", shot="close")
L("teacher", "Who brought a globe to class?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Spinning Slowly For Dad")
L("atlas", "Recap. First. Population density is people divided by area. People per square kilometre.", mood="teach",
  boardClear=True, board="1. Density = people ÷ area")
L("atlas", "Second. Dense means many people per square kilometre. Sparse means few. Distribution is the pattern on the map.", mood="teach",
  board="2. Dense vs sparse · distribution = pattern")
L("atlas", "Third. Physical factors are natural. Climate, water, relief, soil. Human factors are made by people. Jobs, transport, services, peace.", mood="teach",
  board="3. Physical (natural) vs human (made)")
L("atlas", "Fourth. People cluster near water, flat land and jobs. Even in a desert.", mood="teach", board="4. People cluster near water and jobs")
L("atlas", "And finally. To describe a distribution, use T E A. Trend, example with data, anomaly.", mood="smug", board="5. Describe with T-E-A", gap=0.5)

scene("living", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("dad", "I have decided. We are not moving to the Sahara.", mood="neutral", shot="close")
L("priya", "Wise.", mood="deadpan", shot="close")
L("dad", "We are moving to the oasis. Water, dates, and a man who sells tea on Tuesdays.", mood="excited", shot="close")
L("atlas", "Population of the oasis, plus one. Density rises. Dad becomes the anomaly.", mood="smug", shot="close")
sfx("trombone")
L("priya", "He was always the anomaly.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Then he spins smugly.", 3.0)
challenge(1, "A country has 2 million people and an area of 10,000 km². What is its population density?", "200 per km²",
  "2,000,000 ÷ 10,000 = 200",
  "Question one. A country has two million people and an area of ten thousand square kilometres. What is its population density?",
  "Two hundred people per square kilometre. Two million divided by ten thousand. Do not forget the units. Units are free marks.")
challenge(2, "Is 'a lack of jobs' a physical or a human factor?", "Human factor",
  "Jobs are created by people, not nature",
  "Question two. Is a lack of jobs a physical factor or a human factor?",
  "A human factor. Jobs are made by people and businesses. Physical factors are natural things like climate, water and relief.")
challenge(3, "Why is the Sahara sparsely populated? Give one physical reason.", "Too dry",
  "Little rain → no water, no crops",
  "Question three. Give one physical reason why the Sahara is sparsely populated.",
  "It is too dry. Very little rain means no water for drinking or farming. Too hot, or poor sandy soil, would also score.")
end_card()
