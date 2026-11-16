# "Off The Map" (a Claude Sitcom) S01E02 "Eight Billion And One" (Topic: Population Growth)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="population-growth",
    logline="Dad buys fifty glitter cards to personally welcome every new person on Earth. Atlas spins the family to Lagos, where a demographer explains why the world grew so fast and where it is growing fastest now.",
    names={"guest": "DR ADA OKAFOR"},
    display={"U N": "UN", "H D B": "HDB", "M R T": "MRT"},
)

MILESTONES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250">'
    '<text x="10" y="26" font-family="sans-serif" font-size="20" fill="#f8fafc">World population (billions)</text>'
    '<line x1="60" y1="212" x2="505" y2="212" stroke="#94a3b8" stroke-width="2"/>'
    '<line x1="60" y1="212" x2="60" y2="40" stroke="#94a3b8" stroke-width="2"/>'
    '<text x="60" y="238" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#cbd5e1">1800</text>'
    '<text x="258" y="238" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#cbd5e1">1900</text>'
    '<text x="456" y="238" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#cbd5e1">2000</text>'
    '<polyline points="60,190 68,188 312,165 377,143 405,120 431,98 454,75 478,53 500,30" fill="none" stroke="#7dd3fc" stroke-width="4"/>'
    '<g fill="#fde047"><circle cx="68" cy="188" r="6"/><circle cx="312" cy="165" r="6"/><circle cx="377" cy="143" r="6"/>'
    '<circle cx="405" cy="120" r="6"/><circle cx="431" cy="98" r="6"/><circle cx="454" cy="75" r="6"/>'
    '<circle cx="478" cy="53" r="6"/><circle cx="500" cy="30" r="6"/></g>'
    '<text x="78" y="180" font-family="sans-serif" font-size="18" fill="#fde047">1bn 1804</text>'
    '<text x="300" y="186" text-anchor="end" font-family="sans-serif" font-size="18" fill="#fde047">2bn 1927</text>'
    '<text x="365" y="140" text-anchor="end" font-family="sans-serif" font-size="18" fill="#fde047">3bn 1960</text>'
    '<text x="488" y="34" text-anchor="end" font-family="sans-serif" font-size="18" fill="#86efac">8bn 2022</text>'
    '</svg>'
)

GAP = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">'
    '<line x1="40" y1="190" x2="500" y2="190" stroke="#94a3b8" stroke-width="2"/>'
    '<line x1="40" y1="190" x2="40" y2="20" stroke="#94a3b8" stroke-width="2"/>'
    '<path d="M40,50 L300,56 Q400,64 495,150" fill="none" stroke="#7dd3fc" stroke-width="5"/>'
    '<path d="M40,64 Q110,70 170,130 Q220,170 495,170" fill="none" stroke="#fca5a5" stroke-width="5"/>'
    '<text x="60" y="40" font-family="sans-serif" font-size="20" fill="#7dd3fc">Birth rate stays high</text>'
    '<text x="300" y="212" font-family="sans-serif" font-size="20" fill="#fca5a5">Death rate falls</text>'
    '<text x="205" y="112" font-family="sans-serif" font-size="22" fill="#fde047">GAP = growth</text>'
    '<line x1="250" y1="62" x2="250" y2="88" stroke="#fde047" stroke-width="3"/>'
    '<line x1="250" y1="122" x2="250" y2="160" stroke="#fde047" stroke-width="3"/>'
    '</svg>'
)

TFR = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 260">'
    '<g font-family="sans-serif" font-size="19" fill="#f8fafc" text-anchor="end">'
    '<text x="130" y="40">Niger</text><text x="130" y="76">Nigeria</text><text x="130" y="112">World</text>'
    '<text x="130" y="148">India</text><text x="130" y="184">China</text><text x="130" y="220">Singapore</text></g>'
    '<rect x="140" y="20" width="300" height="26" fill="#fca5a5"/>'
    '<rect x="140" y="56" width="250" height="26" fill="#fca5a5"/>'
    '<rect x="140" y="92" width="115" height="26" fill="#cbd5e1"/>'
    '<rect x="140" y="128" width="100" height="26" fill="#86efac"/>'
    '<rect x="140" y="164" width="50" height="26" fill="#7dd3fc"/>'
    '<rect x="140" y="200" width="48" height="26" fill="#7dd3fc"/>'
    '<g font-family="sans-serif" font-size="19" fill="#f8fafc">'
    '<text x="448" y="40">~6</text><text x="398" y="76">~5</text><text x="263" y="112">~2.3</text>'
    '<text x="252" y="148">~2.0</text><text x="198" y="184">~1.0</text><text x="196" y="220">0.97</text></g>'
    '<line x1="245" y1="12" x2="245" y2="232" stroke="#fde047" stroke-width="3" stroke-dasharray="8 6"/>'
    '<text x="245" y="254" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fde047">replacement 2.1</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 330), ("priya", 640), ("nani", 950)])
L("dad", "Big news. In November twenty twenty two, the world reached eight billion people.", mood="excited", shot="close", prop="phone")
L("priya", "And?", mood="deadpan", shot="close")
L("dad", "Nobody welcomed number eight billion and one. So I will. I've bought fifty welcome cards. With glitter.", mood="determined", shot="close")
L("priya", "Dad, the world adds about seventy million people a year. That's more than two every second.", mood="deadpan", shot="close")
L("dad", "Then I shall write very fast.", mood="worried", shot="close", gap=0.4)
freeze("DAD'S CARDS: 50", 2.6, narrator="Narrator: Fifty cards. About twenty two seconds of world population growth.")
confess("priya", "PRIYA · 12 · Counts Faster Than Dad Writes")
L("priya", "Dad thinks population growth is a party. It's actually maths. Very fast maths.", mood="deadpan")
L("priya", "Luckily, my grandmother has watched five billion people arrive.", mood="smug", gap=0.6)

title()

# ---------------- ACT 1: THE J-CURVE ----------------
scene("living", [("priya", 220), ("nani", 460), ("dad", 680)])
L("nani", "When I was ten, in nineteen sixty, there were three billion people in the whole world.", mood="thinking", shot="close",
  boardClear=True, board="1960: 3 billion people")
L("priya", "Five billion more people since then, and you still get a seat on the M R T. Atlas! We need the timeline.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 1000)
L("atlas", "Population? It took all of history to reach one billion, around eighteen oh four. Two billion took another hundred and twenty three years.", mood="teach", shot="close",
  boardClear=True, diagram=MILESTONES, board="1bn 1804 · 2bn 1927 (123 years)")
L("atlas", "Three billion in nineteen sixty. Then one more roughly every twelve to fourteen years.", mood="teach", shot="close",
  board="3bn 1960 · 4bn 1974 · 5bn 1987")
L("atlas", "Eight billion in twenty twenty two. The gap shrank from a hundred and twenty three years to about twelve.", mood="teach", shot="close",
  board="6bn 1999 · 7bn 2011 · 8bn Nov 2022")
L("dad", "A billion every twelve years? My cards will need a warehouse.", mood="shock", shot="close")
L("atlas", "Flat for thousands of years, a bend around seventeen fifty, then straight up. The J curve.", mood="teach", shot="close",
  boardClear=True, board="J-curve: flat → bend c.1750 → steep rise")
L("atlas", "Exponential growth. Today's babies become tomorrow's parents, so it grows by a percentage of itself.", mood="teach", shot="close",
  board="Exponential = same % growth each year")
L("priya", "So is the world growing faster than ever?", mood="thinking", shot="close")
L("atlas", "No. Classic trap. The growth rate peaked at just over two percent a year in the nineteen sixties. Now it is under one percent. Still, that adds about seventy million a year.", mood="teach", shot="close",
  board="Growth rate: ~2% (1960s) → under 1% now")
L("dad", "So the explosion happened because everyone had loads more babies. Obviously.", mood="smug", shot="close")
L("nani", "Wrong. My grandmother had eight children. Only five grew up. Not more babies. Fewer babies died.", mood="sad", shot="close")
L("atlas", "Exactly. Death rates fell, while birth rates stayed high. The gap between the two lines is the growth.", mood="teach", shot="close",
  boardClear=True, diagram=GAP, board="Death rate FELL, birth rate stayed high")
L("atlas", "Remember FISH. Food, from better farming. Industry, bringing wealth. Sanitation, clean water and sewers. Health care, like vaccines and antibiotics.", mood="teach", shot="close",
  board="F·I·S·H: Food, Industry, Sanitation, Health")
L("nani", "World life expectancy was about forty six in nineteen fifty. Now about seventy three. I intend to beat it.", mood="smug", shot="close",
  board="Life expectancy: ~46 (1950) → ~73 now")

confess("atlas", "ATLAS · Desk Globe · Older Than Six Billion People")
L("atlas", "I was made in nineteen twenty seven, the year of the second billion. Since then, six billion more people.", mood="smug")
L("atlas", "Eleven of them have dropped me. Usually on Australia.", mood="bored", gap=0.5)

# ---------------- ACT 2: LAGOS ----------------
scene("living", [("priya", 260), ("dad", 560), ("atlas", 900)])
L("dad", "So where are all these new people being born? I need addresses.", mood="determined", shot="close")
L("atlas", "Then hold on. Not to my Pacific. It is fragile.", mood="smug", shot="close")
sfx("whoosh")
scene("lagos", [("priya", 240), ("dad", 500), ("atlas", 820)], caption="LAGOS · Nigeria · Makoko, on the lagoon")
L("dad", "Buses, boats, people everywhere. It's like forty airports at once.", mood="excited", shot="close")
L("atlas", "Lagos, Nigeria. Africa's most populous country. Roughly two hundred and twenty to two hundred and thirty million people.", mood="teach", shot="close",
  boardClear=True, board="Nigeria: ~220–230 million people")
sfx("door")
poof("guest", 1080)
L("guest", "Welcome! I'm Doctor Ada Okafor. I'm a demographer. I study how populations change.", mood="happy", shot="close")
L("priya", "My dad wants to send a card to every new baby.", mood="deadpan", shot="two")
L("guest", "Then he needs stamps. Here, a woman has about five children on average. That's the total fertility rate. By twenty fifty, we could reach about three hundred and seventy five million.", mood="smug", shot="close",
  board="TFR = children per woman. Nigeria ~5")
L("dad", "So why so many children? Is it just tradition?", mood="thinking", shot="close",
  board="Projected: ~375 million by 2050")
L("guest", "It's not that people don't know better. A big family often makes sense. In the countryside, children help on the farm.", mood="teach", shot="close",
  boardClear=True, board="Children help on farms")
L("guest", "Few people have pensions, so children care for you in old age. Where many children die young, parents have more.", mood="sad", shot="close",
  board="Few pensions · high child mortality")
L("guest", "When girls stay in school longer and contraception is easy to get, families get smaller.", mood="teach", shot="close",
  board="Girls' education → smaller families")
L("atlas", "Remember CHEAP. Contraception. Health, fewer child deaths. Education of girls. Affordability. Places, meaning cities.", mood="teach", shot="close",
  board="CHEAP: Contraception, Health, Education,")
L("dad", "Cheap. Like my cards.", mood="smug", shot="close",
  board="Affordability, Places (cities)")
L("guest", "Growth is fastest in sub Saharan Africa. Next door in Niger, women have about six children each. Growth is about three and a half percent a year.", mood="teach", shot="close",
  boardClear=True, diagram=TFR, board="Fastest growth: sub-Saharan Africa")
L("guest", "Rule of seventy. Seventy divided by three point five is twenty. Niger's twenty seven million people would double in about twenty years.", mood="teach", shot="close",
  board="Niger: 70 ÷ 3.5 = 20 years to double")
L("priya", "And half the people in Niger are under about fifteen.", mood="shock", shot="close",
  board="Median age in Niger: about 15")
L("dad", "India's on the chart! I've been to Delhi airport. Very full. That's how I knew.", mood="smug", shot="close")
L("atlas", "In twenty twenty three, India overtook China as the most populous country. About one point four three billion people.", mood="teach", shot="close",
  boardClear=True, board="2023: India overtook China (~1.43 bn)")
L("guest", "Mainly because India kept growing. China's population fell a little in twenty twenty two, the first time since nineteen sixty one.", mood="teach", shot="close",
  board="China fell in 2022, first time since 1961")
L("atlas", "India's fertility is below replacement, but so many young people will become parents that it keeps growing. Population momentum.", mood="teach", shot="close",
  board="Momentum: young people → keeps growing")
L("guest", "By the way, you'll need a new pack of cards every few seconds.", mood="smug", shot="close", gap=0.4)

confess("dad", "DAD · Explorer · Owner Of Forty Nine Cards")
L("dad", "Forty countries. Well. Forty airports. I gave one card to the taxi driver. He was very moved.", mood="smug")
L("dad", "I have one child. She corrects me. For free.", mood="sad", gap=0.6)

# ---------------- ACT 3: SINGAPORE ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad has 49 cards left. Mum has a checklist.", 2.4)
scene("kitchen", [("mum", 240), ("nani", 480), ("dad", 720), ("priya", 960)])
L("mum", "Checklist. Singapore's fertility rate in twenty twenty three, zero point nine seven. First time ever below one.", mood="determined", shot="close", prop="book",
  boardClear=True, board="Singapore TFR: 0.97 (2023)")
L("nani", "In nineteen sixty, about five point eight. Then babies stopped dying, girls like me went to work, and children got expensive.", mood="annoyed", shot="close",
  board="1960: about 5.8 children per woman")
L("nani", "In nineteen seventy two the government said Stop at Two. So I stopped at two.", mood="neutral", shot="close",
  board="1972: Stop at Two (anti-natalist)")
L("mum", "And in nineteen eighty seven it became Have Three or More, if you can afford it.", mood="teach", shot="close",
  board="1987: Have Three or More (pro-natalist)")
L("nani", "By then I was too tired. And you were enough trouble.", mood="smug", shot="close", gap=0.4)
L("dad", "So why is Singapore's population still growing?", mood="thinking", shot="close")
L("mum", "Immigration. We grow mainly because people move here.", mood="teach", shot="close",
  board="Singapore grows mainly by immigration")
L("priya", "The world won't grow forever, either. The U N projects a peak of about ten point three billion in the mid twenty eighties.", mood="thinking", shot="close",
  boardClear=True, board="UN: ~9.7bn 2050 · peak ~10.3bn mid-2080s")
L("mum", "Projected. Not promised. In the exam, write is projected to.", mood="determined", shot="close", gap=0.3)

# ---------------- EXAM SKILL: CALCULATING GROWTH ----------------
scene("classroom", [("teacher", 300), ("priya", 640), ("atlas", 940)])
L("teacher", "Exam skill. Birth and death rates are per thousand people, per year. Not percent.", mood="teach", shot="close",
  boardClear=True, board="Birth & death rates: per 1,000 per year")
L("teacher", "World birth rate, about seventeen per thousand. Death rate, about eight. Natural increase is birth rate minus death rate.", mood="teach", shot="close",
  board="17 − 8 = 9 per 1,000 (natural increase)")
L("priya", "Nine per thousand. Divide by ten for a percentage. Zero point nine percent a year.", mood="thinking", shot="close",
  board="9 ÷ 10 = 0.9% growth a year")
L("teacher", "Doubling time? Seventy divided by the growth rate in percent. Never the other way round.", mood="teach", shot="close",
  board="Doubling time = 70 ÷ growth rate (%)")
L("priya", "Seventy divided by zero point nine. About seventy eight years.", mood="excited", shot="close",
  board="70 ÷ 0.9 ≈ 78 years")
L("teacher", "Last trap. Birth rate forty, death rate thirty five, grows by five. Birth rate twenty, death rate five, grows by fifteen.", mood="teach", shot="close",
  boardClear=True, board="40 − 35 = 5 · 20 − 5 = 15 → the GAP")
L("atlas", "It is the gap that matters. And fertility rate is different. That is children per woman.", mood="teach", shot="close",
  board="Birth rate ≠ fertility rate (per woman)")
L("teacher", "Who brought a globe to class? Again?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Counting Since 1927")
L("atlas", "Recap. One billion in eighteen oh four, eight billion in twenty twenty two. A J curve.", mood="teach",
  boardClear=True, board="1. 1bn 1804 → 8bn 2022: a J-curve")
L("atlas", "Second. Death rates fell while birth rates stayed high. FISH.", mood="teach",
  board="2. Death rates fell first: F·I·S·H")
L("atlas", "Third. Birth rates fall later. CHEAP.", mood="teach",
  board="3. Birth rates fall: C·H·E·A·P")
L("atlas", "Fourth. Birth rate minus death rate. Divide by ten for percent. Seventy divided by that is the doubling time.", mood="teach",
  board="4. BR − DR; ÷ 10 = %; 70 ÷ % = doubling")
L("atlas", "Finally. Growth is fastest in sub Saharan Africa, like Niger.", mood="smug",
  board="5. Fastest: sub-Saharan Africa", gap=0.5)

scene("living", [("priya", 260), ("dad", 560), ("nani", 860)])
L("dad", "New plan. I'll just welcome every new baby in our H D B block.", mood="determined", shot="close")
L("nani", "The last baby born in this block was the Lim twins.", mood="deadpan", shot="close")
L("dad", "Wonderful! When?", mood="excited", shot="close")
L("nani", "They're doing National Service.", mood="smug", shot="close")
sfx("trombone")
L("dad", "Then I'll send a welcome card anyway. Nineteen years late.", mood="worried", shot="close")
L("priya", "That's called a birthday card, Dad.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Dad uses them to write one card.", 3.0)
challenge(1, "Birth rate 30 per 1,000, death rate 10 per 1,000. What is the growth rate in %?", "2% a year",
  "30 − 10 = 20 per 1,000; 20 ÷ 10 = 2%",
  "Question one. Birth rate thirty per thousand, death rate ten. What is the growth rate as a percentage?",
  "Two percent a year. Thirty minus ten is twenty per thousand. Divide by ten.")
challenge(2, "A population grows by 2% a year. Use the rule of 70 to find its doubling time.", "35 years",
  "70 ÷ 2 = 35",
  "Question two. Growth is two percent a year. Use the rule of seventy for the doubling time.",
  "Thirty five years. Seventy divided by two.")
challenge(3, "Give the main reason world population grew so fast after 1800.", "Death rates fell",
  "Births stayed high; food, water, medicine",
  "Question three. Why did world population grow so fast after eighteen hundred?",
  "Death rates fell, while birth rates stayed high. Not more babies.")
end_card()
