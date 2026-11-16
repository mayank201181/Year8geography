# "Off The Map" (a Claude Sitcom) S01E14 "Go-Slow Your Roll" (Topic: Lagos, a megacity case study)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="lagos",
    logline="Priya volunteers for the optional Lagos speech, and Dad claims he can cross Lagos in ten minutes. Atlas spins them into a go-slow, where a Yaba tech founder and a Makoko teacher show them the city's problems and its energy.",
    names={"guest": "TOLU", "guest2": "MRS AGBO"},
    display={"B R T": "BRT", "new water": "NEWater", "Kunle": "Kunlé", "U S dollars": "US dollars"},
)

GROWTH = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">'
    '<line x1="20" y1="200" x2="510" y2="200" stroke="#f8fafc" stroke-width="2"/>'
    '<line x1="20" y1="115" x2="510" y2="115" stroke="#fca5a5" stroke-width="2" stroke-dasharray="8 6"/>'
    '<text x="20" y="108" font-family="sans-serif" font-size="18" fill="#fca5a5">megacity: 10 million</text>'
    '<rect x="30" y="197" width="60" height="3" fill="#fde047"/>'
    '<text x="60" y="190" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fde047">0.3m</text>'
    '<rect x="110" y="188" width="60" height="12" fill="#fde047"/>'
    '<text x="140" y="180" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fde047">1.4m</text>'
    '<rect x="190" y="159" width="60" height="41" fill="#fde047"/>'
    '<text x="220" y="151" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fde047">4.8m</text>'
    '<rect x="270" y="112" width="60" height="88" fill="#fde047"/>'
    '<text x="300" y="104" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fde047">10.4m</text>'
    '<rect x="350" y="78" width="60" height="122" fill="#fde047"/>'
    '<text x="380" y="70" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fde047">14.4m</text>'
    '<rect x="430" y="30" width="60" height="170" fill="none" stroke="#86efac" stroke-width="3" stroke-dasharray="6 4"/>'
    '<text x="460" y="22" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#86efac">15-20m+</text>'
    '<text x="60" y="226" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">1950</text>'
    '<text x="140" y="226" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">1970</text>'
    '<text x="220" y="226" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">1990</text>'
    '<text x="300" y="226" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">2010</text>'
    '<text x="380" y="226" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">2020</text>'
    '<text x="460" y="226" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#86efac">now?</text>'
    '</svg>'
)

PUSHPULL = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">'
    '<rect x="5" y="10" width="215" height="210" rx="12" fill="#7f1d1d"/>'
    '<text x="112" y="40" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fca5a5">PUSH: rural Nigeria</text>'
    '<text x="16" y="80" font-family="sans-serif" font-size="18" fill="#f8fafc">poverty, low pay</text>'
    '<text x="16" y="114" font-family="sans-serif" font-size="18" fill="#f8fafc">drought</text>'
    '<text x="16" y="148" font-family="sans-serif" font-size="18" fill="#f8fafc">Boko Haram conflict</text>'
    '<text x="16" y="182" font-family="sans-serif" font-size="18" fill="#f8fafc">few schools, clinics</text>'
    '<text x="260" y="110" text-anchor="middle" font-family="sans-serif" font-size="40" fill="#fde047">→</text>'
    '<text x="260" y="140" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fde047">people</text>'
    '<rect x="300" y="10" width="215" height="210" rx="12" fill="#14532d"/>'
    '<text x="407" y="40" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#86efac">PULL: Lagos</text>'
    '<text x="311" y="80" font-family="sans-serif" font-size="18" fill="#f8fafc">jobs, the port</text>'
    '<text x="311" y="114" font-family="sans-serif" font-size="18" fill="#f8fafc">oil money, banks</text>'
    '<text x="311" y="148" font-family="sans-serif" font-size="18" fill="#f8fafc">Nollywood films</text>'
    '<text x="311" y="182" font-family="sans-serif" font-size="18" fill="#f8fafc">Yaba tech start-ups</text>'
    '</svg>'
)

CHAIN = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">'
    '<rect x="10" y="20" width="130" height="50" rx="10" fill="#1e3a8a"/>'
    '<text x="75" y="52" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">Rubbish</text>'
    '<text x="160" y="54" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#fde047">→</text>'
    '<rect x="180" y="20" width="160" height="50" rx="10" fill="#1e3a8a"/>'
    '<text x="260" y="52" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">Blocked drains</text>'
    '<text x="360" y="54" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#fde047">→</text>'
    '<rect x="380" y="20" width="130" height="50" rx="10" fill="#7f1d1d"/>'
    '<text x="445" y="52" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">Floods</text>'
    '<text x="445" y="104" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#fde047">↓</text>'
    '<rect x="380" y="120" width="130" height="50" rx="10" fill="#7f1d1d"/>'
    '<text x="445" y="152" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">Disease</text>'
    '<text x="360" y="154" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#fde047">←</text>'
    '<rect x="180" y="120" width="160" height="50" rx="10" fill="#7f1d1d"/>'
    '<text x="260" y="152" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">Broken roads</text>'
    '<text x="160" y="154" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#fde047">←</text>'
    '<rect x="10" y="120" width="130" height="50" rx="10" fill="#7f1d1d"/>'
    '<text x="75" y="152" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">Go-slows</text>'
    '</svg>'
)

SPEECH = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">'
    '<rect x="40" y="8" width="440" height="36" rx="8" fill="#854d0e"/>'
    '<text x="260" y="33" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#fde047">HOOK: a fact, question or story</text>'
    '<rect x="40" y="52" width="440" height="36" rx="8" fill="#854d0e"/>'
    '<text x="260" y="77" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#fde047">POSITION: what you want</text>'
    '<rect x="40" y="96" width="440" height="36" rx="8" fill="#14532d"/>'
    '<text x="260" y="121" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#86efac">3 × PEEL arguments</text>'
    '<rect x="40" y="140" width="440" height="36" rx="8" fill="#1e3a8a"/>'
    '<text x="260" y="165" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#7dd3fc">COUNTER-ARGUMENT + rebuttal</text>'
    '<rect x="40" y="184" width="440" height="36" rx="8" fill="#7f1d1d"/>'
    '<text x="260" y="209" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#fca5a5">CALL TO ACTION</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("priya", 330), ("dad", 640)])
L("priya", "Ladies and gentlemen. Lagos. A city of twenty million dreams. My speech. It's optional.", mood="determined", shot="close", prop="book")
L("dad", "Optional means you don't have to do it.", mood="smug", shot="close")
L("priya", "Optional means I get to do it.", mood="deadpan", shot="close", gap=0.3)
L("dad", "I've been to Lagos. Well. The airport. Lovely shiny floor. Small place. I could cross it in ten minutes.", mood="smug", shot="close")
L("priya", "Ten minutes.", mood="deadpan", shot="close")
L("dad", "Eight, if I skip the snacks.", mood="excited", shot="close")
freeze("DAD'S 10-MINUTE PLAN", 2.6, narrator="Narrator: One bridge alone is nearly twelve kilometres long.")
confess("priya", "PRIYA · 12 · Optional Means Mandatory")
L("priya", "Dad also thinks Lagos is the capital of Nigeria. It hasn't been since nineteen ninety one.", mood="deadpan")
L("priya", "Luckily, I know a globe.", mood="smug", gap=0.6)

title()

# ---------------- ACT 1: WHERE, AND HOW BIG? ----------------
scene("living", [("priya", 300), ("dad", 600)])
L("priya", "Atlas! Geography emergency. Dad wants to cross Lagos in ten minutes.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 900)
L("atlas", "Lagos? Splendid. West Africa is on my good side. Australia took all the dents.", mood="smug", shot="close")
L("atlas", "Lagos is in south west Nigeria, in West Africa, on the Gulf of Guinea. That stretch of coast is the Bight of Benin.", mood="teach", shot="close",
  boardClear=True, board="Lagos: SW Nigeria, Gulf of Guinea")
L("dad", "The Bite of Benin. Sounds painful.", mood="worried", shot="close")
L("atlas", "Bight. A curving bay. Nobody gets bitten. The city wraps around Lagos Lagoon, with a mainland and islands like Victoria Island.", mood="eyeroll", shot="close",
  board="Built around Lagos Lagoon + islands")
L("priya", "Joined by bridges. The Third Mainland Bridge is about eleven point eight kilometres long.", mood="thinking", shot="close",
  board="Third Mainland Bridge ≈ 11.8 km")
L("dad", "And of course, it's the capital.", mood="smug", shot="close")
sfx("buzzer")
L("atlas", "Wrong. Lagos was the capital until nineteen ninety one. Then the government moved to Abuja, a planned city in the centre.", mood="teach", shot="close",
  board="Capital until 1991 → now ABUJA")
L("priya", "But Lagos is still the commercial capital. Banks, shipping, business.", mood="neutral", shot="close",
  board="Still the COMMERCIAL capital")
L("atlas", "Growth. In nineteen fifty, Lagos had about three hundred thousand people.", mood="teach", shot="close",
  boardClear=True, diagram=GROWTH)
L("atlas", "Today, estimates range from about fifteen to over twenty million. The last full census was in two thousand and six.", mood="teach", shot="close",
  board="Today: est. 15–20+ million")
L("priya", "So quote a range, and say sources disagree. Over ten million makes it a megacity.", mood="thinking", shot="close",
  board="Megacity = over 10 million people")
L("dad", "Is it called a megacity because it's mega?", mood="thinking", shot="close")
L("atlas", "Yes. Annoyingly, yes.", mood="bored", shot="close", gap=0.4)
L("atlas", "Two causes. First, rural to urban migration. Second, natural increase. Birth rate minus death rate.", mood="teach", shot="close",
  boardClear=True, board="1. Rural–urban migration")
L("priya", "Nigeria's median age is about eighteen, and women have about five children on average. Migrants are young, so they start families in Lagos.", mood="thinking", shot="close",
  board="2. Natural increase = births − deaths")

confess("atlas", "ATLAS · Desk Globe · Dropped Eleven Times")
L("atlas", "Nobody knows the exact population of Lagos. Much like my age. Distinguished. Uncountable.", mood="smug", gap=0.5)

# ---------------- ACT 2: LAGOS ----------------
scene("living", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("dad", "Take me there, Atlas. Ten minutes. Start the clock.", mood="determined", shot="close", prop="phone")
L("atlas", "Hold on to something. Not my equator. It's ticklish.", mood="smug", shot="close")
sfx("whoosh")
scene("lagos", [("priya", 260), ("dad", 520), ("atlas", 800)], caption="LAGOS · Nigeria · Rush hour on the mainland")
L("dad", "Clock's running! Why is nothing moving?", mood="shock", shot="close")
sfx("door")
poof("guest", 1080)
L("guest", "Welcome to a go-slow! A traffic jam. I'm Tolu, Funmi's cousin. She didn't mention the talking globe.", mood="happy", shot="close")
L("guest", "Millions live on the mainland and work on the islands. Two to four hours each way is normal.", mood="teach", shot="close",
  boardClear=True, board="Go-slow: 2–4 hours each way")
L("dad", "I've already bought a cold drink, a phone charger and plantain chips through a car window.", mood="worried", shot="close")
L("guest", "The informal economy. Work that isn't registered or taxed. Hawkers, traders, okada riders. Over half of Lagos workers. Easy to start, but low pay and no pension.", mood="teach", shot="close",
  board="Informal economy: over half of workers")
L("guest", "And me? I build payment apps in Yaba. Yabacon Valley! A Lagos start-up called Paystack sold for over two hundred million U S dollars.", mood="smug", shot="close",
  board="Yabacon Valley: tech start-ups")
L("priya", "Pull factors. Jobs, the port, oil money in the banks, Nollywood, universities.", mood="thinking", shot="close",
  boardClear=True, diagram=PUSHPULL)
L("guest", "And push factors in rural Nigeria. Poor farms. Drought. The Boko Haram conflict in the north east has displaced over two million people.", mood="sad", shot="close")
L("guest", "My uncle's village had no secondary school. Lagos had a cousin, a sofa and a job. Chain migration.", mood="happy", shot="close",
  board="Family networks = chain migration")
L("guest", "The catch? Lagos grew faster than its pipes and power lines. So, daily power cuts and generators, and most homes use boreholes or buy sachets of water.", mood="teach", shot="close",
  boardClear=True, board="Power cuts · boreholes, sachet water")
L("priya", "And waste. Olusosun landfill, about forty hectares, had a huge fire in twenty eighteen.", mood="teach", shot="close",
  board="Olusosun landfill: ~40 ha, fire 2018")
L("guest", "And floods. Much of Lagos is less than two metres above sea level.", mood="worried", shot="close",
  board="Low-lying (<2 m) → flooding")
L("atlas", "All linked. Rubbish blocks drains, floods spread disease and break roads. A vicious circle.", mood="teach", shot="close",
  boardClear=True, diagram=CHAIN)
L("dad", "Ten minutes are up. Where are we?", mood="determined", shot="close", prop="phone")
L("priya", "About two hundred metres from where we started.", mood="deadpan", shot="close")
L("guest", "Honestly? For rush hour, that's a good day.", mood="happy", shot="close", gap=0.4)

scene("lagos", [("priya", 220), ("dad", 460), ("guest", 720), ("guest2", 1000)], caption="MAKOKO · Lagos Lagoon · Homes on stilts")
L("guest2", "Mind the plank! Welcome to Makoko. I'm Mrs Agbo. I taught at the floating school.", mood="happy", shot="close")
L("guest2", "Makoko began as a fishing village. Now between forty thousand and over a hundred thousand people live here, on stilts.", mood="teach", shot="close",
  boardClear=True, board="Makoko: est. 40,000 to 100,000+")
L("dad", "So nobody here has a job, then?", mood="thinking", shot="close")
L("guest2", "Everybody works. Fishing, sawmills, trading. Informal work, with low pay.", mood="annoyed", shot="close")
L("dad", "A child just overtook me in a canoe.", mood="shock", shot="close")
L("guest2", "That's Kemi. She's late for school.", mood="deadpan", shot="close", gap=0.4)
L("guest2", "No sewers, so waste goes into the water and cholera spreads. And in twenty twelve, part of Makoko was demolished.", mood="sad", shot="close",
  board="No sewers · part demolished 2012")
L("guest2", "The floating school, by architect Kunle Adeyemi, opened in twenty thirteen on about two hundred and fifty plastic barrels.", mood="happy", shot="close",
  board="Floating School 2013: ~250 barrels")
L("guest2", "A storm wrecked it in twenty sixteen. But the cheap, community idea spread worldwide.", mood="determined", shot="close",
  board="Collapsed 2016 · the idea spread")
L("guest", "Bottom up! Top down, we've had the B R T bus lanes since two thousand and eight. The Blue Line trains opened in twenty twenty three.", mood="excited", shot="close",
  boardClear=True, board="BRT 2008 · Blue Line 2023 · Red 2024")
L("guest", "And by the sea, Eko Atlantic. Ten square kilometres of land reclaimed from the ocean, behind an eight point five kilometre sea wall.", mood="teach", shot="close",
  board="Eko Atlantic: ~10 km², 8.5 km sea wall")
L("priya", "It protects the coast and brings investment. But the flats are mostly for the rich.", mood="thinking", shot="close",
  board="+ protection, investment · − for the rich")
L("guest2", "And it does nothing for Makoko.", mood="neutral", shot="close")
L("guest", "That's Lagos. Big problems, bigger energy.", mood="smug", shot="close", gap=0.4)

confess("dad", "DAD · Explorer · Forty Airports, One Canoe")
L("dad", "I've now been to Lagos twice. Once to the airport. Once to everywhere else, very slowly.", mood="smug")
L("dad", "Tolu gave me a lift on an okada. A motorbike taxi. I screamed all the way to the lagoon.", mood="worried", gap=0.6)

# ---------------- ACT 3: SINGAPORE ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad is still holding the plantain chips.", 2.4)
scene("hawker", [("priya", 300), ("nani", 600), ("uncle", 1000)])
L("priya", "Lagos gets about fifteen hundred millimetres of rain and runs short of water. Las Vegas gets about a hundred.", mood="thinking", shot="close",
  boardClear=True, board="Rain: Lagos ~1,500 mm · Las Vegas ~100 mm")
L("priya", "About ninety percent of its water comes from Lake Mead, behind the Hoover Dam.", mood="teach", shot="close",
  board="Vegas: ~90% of water from Lake Mead")
L("nani", "When I was a girl, we queued at a standpipe. Now we have reservoirs and new water. Water is about investment, not just rain.", mood="smug", shot="close",
  board="Water = investment, not just rain")
L("uncle", "So Lagos needs pipes, and Las Vegas needs rain.", mood="thinking", shot="close")
L("nani", "And your stall needs a fan.", mood="deadpan", shot="close", gap=0.4)

scene("classroom", [("teacher", 300), ("priya", 640), ("atlas", 940)])
L("teacher", "A persuasive speech. Hook, position, three PEEL paragraphs, a counter argument, a call to action.", mood="teach", shot="close",
  boardClear=True, diagram=SPEECH)
L("priya", "In nineteen fifty, three hundred thousand people lived in Lagos. Today, perhaps twenty million. A problem, or a promise?", mood="determined", shot="close")
L("priya", "My point. Lagos is a city of opportunity.", mood="determined", shot="close",
  boardClear=True, board="P: a city of opportunity")
L("priya", "Evidence. Yaba's tech hub, Nollywood, and the Blue Line, opened in twenty twenty three.", mood="teach", shot="close",
  board="E: Yaba tech · Nollywood · Blue Line 2023")
L("priya", "Explanation. Jobs and transport give young Lagosians a future.", mood="thinking", shot="close",
  board="E: jobs + transport = a future")
L("priya", "Some say Eko Atlantic is only for the rich. True. So invest in Makoko too. Opportunity must be for everyone.", mood="determined", shot="close",
  board="L: invest in Makoko too")
L("teacher", "Excellent. Who brought a globe?", mood="happy", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Stuck In A Go-Slow")
L("atlas", "Recap. First. Lagos, south west Nigeria, around a lagoon. Capital until nineteen ninety one.", mood="teach",
  boardClear=True, board="1. SW Nigeria, lagoon · capital to 1991")
L("atlas", "Second. Three hundred thousand in nineteen fifty. An estimated fifteen to twenty million or more today.", mood="teach",
  board="2. 300,000 (1950) → est. 15–20+ million")
L("atlas", "Third. Push, pull, and natural increase.", mood="teach",
  board="3. Push + pull + natural increase")
L("atlas", "Fourth. Growth outran infrastructure. Go-slows, waste, water, power, floods.", mood="teach",
  board="4. Go-slow, waste, water, power, floods")
L("atlas", "Finally. Solutions. Give a benefit and a criticism.", mood="smug",
  board="5. BRT, rail, Eko Atlantic, floating school", gap=0.5)

scene("living", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("dad", "Ladies and gentlemen. Lagos. I have been to its airport.", mood="determined", shot="close", prop="book")
L("atlas", "Hook, weak. Evidence, none.", mood="eyeroll", shot="close")
sfx("trombone")
L("priya", "It's optional, Dad. Means you don't have to.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Then he gets stuck in a go-slow.", 3.0)
challenge(1, "Lagos had 0.3 million people in 1950 and 14.4 million in 2020. Calculate the % change.", "4,700%",
  "(14.4 − 0.3) ÷ 0.3 × 100 = 4,700%",
  "Question one. Lagos grew from zero point three million in nineteen fifty to fourteen point four million in twenty twenty. Percentage change?",
  "Four thousand seven hundred percent. New minus old, divided by old, times one hundred.")
challenge(2, "Is 'drought in northern Nigeria' a push or a pull factor?", "Push factor",
  "It drives people away from the countryside",
  "Question two. Is drought in northern Nigeria a push or a pull factor?",
  "A push factor. It drives people away. Jobs in Lagos are a pull.")
challenge(3, "Give one benefit and one criticism of Eko Atlantic.", "Protects coast; for rich",
  "Benefit + criticism, then a judgement",
  "Question three. Give one benefit and one criticism of Eko Atlantic.",
  "It protects the coast, but its homes are mostly for the rich.")
end_card()
