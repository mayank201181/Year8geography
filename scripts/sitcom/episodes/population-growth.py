# "Totally Raotional: Off The Map" S02E03 "The J-Curve Strikes Back" (Topic: Population Growth)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: growth-over-time, birth-death-rates, demographic-transition, future-population.

EP = dict(topic="population-growth",
          logline="Dad buys ten thousand prams because 'the population only goes up'. Globo, the grumpy globe from the junk drawer, "
                  "explains the J-curve, birth and death rates, the Demographic Transition Model and why the world may peak at about 10.3 billion.")

D_JCURVE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<line x1="50" y1="190" x2="500" y2="190" stroke="#94a3b8" stroke-width="2"/>
<line x1="50" y1="190" x2="50" y2="20" stroke="#94a3b8" stroke-width="2"/>
<polyline points="58,170 290,151 357,132 385,113 412,94 436,75 461,56 483,37" fill="none" stroke="#fde047" stroke-width="4"/>
<g fill="#fde047"><circle cx="58" cy="170" r="5"/><circle cx="290" cy="151" r="5"/><circle cx="357" cy="132" r="5"/><circle cx="483" cy="37" r="6"/></g>
<g font-family="sans-serif" font-size="14" fill="#fff">
<text x="66" y="162">1 bn · 1804</text>
<text x="200" y="140">2 bn · 1927</text>
<text x="262" y="122">3 bn · 1960</text>
<text x="352" y="34">8 bn · 2022</text>
<text x="56" y="208">1800</text><text x="460" y="208">2022</text>
</g>
<text x="150" y="70" font-family="sans-serif" font-size="22" font-weight="bold" fill="#7dd3fc">THE J-CURVE</text>
</svg>"""

D_RATES = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<line x1="30" y1="160" x2="500" y2="160" stroke="#94a3b8" stroke-width="2"/>
<rect x="60" y="25" width="40" height="135" fill="#7dd3fc"/><rect x="104" y="133" width="40" height="27" fill="#fca5a5"/>
<rect x="185" y="109" width="40" height="51" fill="#7dd3fc"/><rect x="229" y="136" width="40" height="24" fill="#fca5a5"/>
<rect x="310" y="130" width="40" height="30" fill="#7dd3fc"/><rect x="354" y="133" width="40" height="27" fill="#fca5a5"/>
<rect x="400" y="142" width="40" height="18" fill="#7dd3fc"/><rect x="444" y="121" width="40" height="39" fill="#fca5a5"/>
<g font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">
<text x="102" y="180">Niger</text><text x="227" y="180">World</text><text x="352" y="180">UK</text><text x="442" y="180">Japan</text>
<text x="102" y="196">+3.6%</text><text x="227" y="196">+0.9%</text><text x="352" y="196">+0.1%</text><text x="442" y="196">−0.7%</text>
</g>
<rect x="300" y="20" width="14" height="14" fill="#7dd3fc"/><text x="320" y="32" font-family="sans-serif" font-size="14" fill="#fff">births per 1,000</text>
<rect x="300" y="44" width="14" height="14" fill="#fca5a5"/><text x="320" y="56" font-family="sans-serif" font-size="14" fill="#fff">deaths per 1,000</text>
</svg>"""

D_DTM = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<g stroke="#475569" stroke-dasharray="4 4"><line x1="122" y1="30" x2="122" y2="190"/><line x1="214" y1="30" x2="214" y2="190"/><line x1="306" y1="30" x2="306" y2="190"/><line x1="398" y1="30" x2="398" y2="190"/></g>
<polygon points="122,50 168,50 214,56 260,100 306,160 306,172 260,166 214,152 168,120 122,62" fill="#facc15" opacity="0.35"/>
<polyline points="30,52 60,40 90,60 122,50 168,50 214,56 260,100 306,160 352,166 398,162 450,176 500,180" fill="none" stroke="#7dd3fc" stroke-width="4"/>
<polyline points="30,60 60,48 90,70 122,62 168,120 214,152 260,166 306,172 352,170 398,172 450,166 500,162" fill="none" stroke="#fca5a5" stroke-width="4"/>
<g font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">
<text x="76" y="24">1</text><text x="168" y="24">2</text><text x="260" y="24">3</text><text x="352" y="24">4</text><text x="450" y="24">5</text>
</g>
<g font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">
<text x="76" y="208">none today</text><text x="168" y="208">Niger</text><text x="260" y="208">India</text><text x="352" y="208">UK</text><text x="450" y="208">Japan</text>
</g>
<text x="208" y="122" font-family="sans-serif" font-size="13" fill="#fde047" text-anchor="middle">natural increase</text>
<text x="30" y="225" font-family="sans-serif" font-size="13" fill="#7dd3fc">— birth rate</text>
<text x="140" y="225" font-family="sans-serif" font-size="13" fill="#fca5a5">— death rate</text>
</svg>"""

D_FUTURE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">
<rect width="520" height="210" fill="#0f172a"/>
<line x1="40" y1="180" x2="500" y2="180" stroke="#94a3b8" stroke-width="2"/>
<polygon points="200,92 330,58 420,40 490,30 490,118 420,96 330,82" fill="#818cf8" opacity="0.35"/>
<polyline points="50,150 110,135 160,115 200,92" fill="none" stroke="#fde047" stroke-width="4"/>
<polyline points="200,92 330,70 420,64 490,66" fill="none" stroke="#fde047" stroke-width="4" stroke-dasharray="10 6"/>
<g fill="#fde047"><circle cx="200" cy="92" r="5"/><circle cx="330" cy="70" r="5"/><circle cx="420" cy="64" r="6"/></g>
<g font-family="sans-serif" font-size="14" fill="#fff">
<text x="120" y="86">8 bn (2022)</text>
<text x="280" y="108">~9.7 bn (2050)</text>
<text x="350" y="30">peak ~10.3 bn (2080s)</text>
<text x="56" y="200">1960</text><text x="190" y="200">2022</text><text x="460" y="200">2100</text>
</g>
<text x="300" y="150" font-family="sans-serif" font-size="13" fill="#c7d2fe">shaded = uncertainty</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "Tara! The prata shop downstairs gave me a family card. Buy ten pratas, get one free. For a family of eight!", mood="excited", shot="close", prop="phone")
L("tara", "Mum. There are three of us.", mood="deadpan", shot="close")
L("mum", "For now! The world keeps growing. I'm buying ahead.", mood="smug", shot="two")
L("tara", "You can't bulk buy relatives.", mood="deadpan", shot="close", gap=0.5)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Family. Big news. I bought ten thousand prams. The population only goes up, so babies are the safest investment in history.", mood="smug", shot="close", prop="tablet")
L("tara", "Dad. Where are ten thousand prams going to live?", mood="worried", shot="close")
L("dad", "The void deck. Temporarily. The town council doesn't know yet.", mood="smug", shot="close")
freeze("10,000 PRAMS", 2.4, narrator="Narrator: The town council found out at about seven fifteen the next morning.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "In Singapore, the average woman has fewer than one child. My father has bought ten thousand prams.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: FROM 1 BILLION TO 8 BILLION ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Emergency. Time to open the drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who disturbs the drawer? Oh, the Raos. I smell rubber wheels. Your father has invested again.", mood="bored", shot="close")
L("tara", "Globo, Dad says the world's population only goes up. So he bought ten thousand prams.", mood="worried", shot="two")

scene("living", [("tara", 260), ("dad", 600), ("globo", 960)], "THE RAO FLAT · Living Room · Now A Lecture Theatre")
L("globo", "For most of history, population grew very slowly. Lots of babies, but lots of deaths, from famine and disease.", mood="teach", shot="close",
  boardClear=True, board="For centuries: high births, high deaths")
L("globo", "One billion in about eighteen oh four. Two billion in nineteen twenty seven, a hundred and twenty three years later.", mood="teach", shot="close",
  boardClear=True, board="1 bn ≈ 1804 · 2 bn 1927 (123 years)", diagram=D_JCURVE)
L("globo", "But seven billion to eight billion took just eleven years, to November twenty twenty two. Plot it, and you get a J. The J-curve.", mood="teach", shot="close",
  board="7 bn 2011 → 8 bn 2022 (11 years)")
L("globo", "And no, people did not suddenly have more babies. Growth exploded because death rates fell, while birth rates stayed high.", mood="teach", shot="close",
  boardClear=True, board="Growth exploded because DEATH RATES FELL")
L("globo", "Better farming, so fewer famines. Clean water and sewers, so less cholera. Vaccines, and then antibiotics like penicillin.", mood="teach", shot="close",
  board="Farming → food · sanitation → less disease")
L("tara", "So more children survived, grew up, and had children of their own. It grows on itself.", mood="happy", shot="close",
  board="Medicine: vaccines + antibiotics")
L("globo", "Like interest on savings. Which your father would know about, if he had any. Doubling time shrank too. Two billion to four billion took just forty seven years.", mood="smug", shot="close",
  board="Doubling time: 123 yrs → 47 yrs")
L("globo", "But the growth rate peaked at a little over two percent a year, in the nineteen sixties. Today it is below one percent.", mood="eyeroll", shot="close",
  boardClear=True, board="Growth RATE: ~2%+ (1960s) → under 1% now")
L("dad", "Slowing down? Nobody told the prams.", mood="sad", shot="close")
sfx("trombone")

# ---------------- ACT 2: BIRTH RATES, DEATH RATES, NATURAL INCREASE ----------------
card("MEANWHILE, AT THE HAWKER CENTRE", "Mum is redeeming her prata card", 2.4)
scene("hawker", [("mum", 240), ("tara", 480), ("uncle", 1000)])
L("uncle", "Two prata kosong, one egg prata, one teh. Your card says family of eight?", mood="happy", shot="close")
L("mum", "Yes. Some of them are coming later. In maybe twenty years.", mood="smug", shot="close", prop="plate")
poof("globo", 740)
L("globo", "Your mother is making a population projection. Badly. Geographers use rates per thousand people, per year.", mood="teach", shot="close",
  boardClear=True, board="BIRTH RATE: live births per 1,000 per year")
L("globo", "Births higher than deaths is natural increase. Deaths higher than births is natural decrease.", mood="teach", shot="close",
  board="DEATH RATE: deaths per 1,000 per year")
L("mum", "Niger's birth rate is about forty five? So it grows forty five percent a year? Better than my card!", mood="excited", shot="close",
  board="Births > deaths = NATURAL INCREASE")
L("tara", "No, Mum. It's per thousand, not per hundred. You take away the death rate, then divide by ten.", mood="deadpan", shot="close",
  boardClear=True, board="RNI (%) = (birth rate − death rate) ÷ 10", diagram=D_RATES)
L("globo", "Correct. Niger, about forty five births and nine deaths. Thirty six, divided by ten. About three point six percent a year.", mood="teach", shot="close",
  board="Niger: (45 − 9) ÷ 10 ≈ +3.6%")
L("globo", "Japan, in twenty twenty three, about six births and thirteen deaths. Minus zero point seven percent. A natural decrease.", mood="teach", shot="close",
  board="Japan 2023: (6 − 13) ÷ 10 ≈ −0.7%")
L("globo", "Natural change ignores migration. Total change adds immigrants, minus emigrants.", mood="teach", shot="close",
  boardClear=True, board="Change = (births − deaths) + net migration")
L("globo", "Total fertility rate is the average number of children a woman would have. About two point one is replacement level.", mood="teach", shot="close",
  board="TFR ≈ 2.1 = REPLACEMENT LEVEL")
L("mum", "Why the extra point one? Is that the service charge?", mood="thinking", shot="close")
L("tara", "It's because not every child survives to adulthood, and slightly more boys are born than girls.", mood="deadpan", shot="close")
L("globo", "Singapore's resident rate was zero point nine seven in twenty twenty three. Immigration keeps the population growing.", mood="teach", shot="close",
  board="Singapore resident TFR: 0.97 (2023)")
L("globo", "Also, life expectancy. And infant mortality, baby deaths before age one, per thousand births. Singapore's is about two.", mood="teach", shot="close",
  board="Life expectancy · infant mortality")

confess("mum", "MUM · Deal Hunter · Has Never Paid Full Price")
L("mum", "Replacement level, two point one. With Tara, we are halfway there. And she was full price.", mood="smug", gap=0.5)

# ---------------- ACT 3: THE DEMOGRAPHIC TRANSITION MODEL ----------------
card("THE NEXT DAY, AT SCHOOL", "Dad has come to collect the prams from the void deck. Via school.", 2.4)
scene("classroom", [("teacher", 240), ("tara", 700), ("dad", 960)])
L("teacher", "Today, the Demographic Transition Model. How birth and death rates change as a country develops.", mood="teach", shot="close")
L("dad", "Five stages? Like a business plan! I'll take stage two. Sounds like growth.", mood="excited", shot="close", prop="book")
poof("globo", 470)
L("globo", "I'll take it from here, Ms Lim. Stage one. High birth rate, high death rate. Population low and steady. No countries today.", mood="teach", shot="close",
  boardClear=True, board="1 HIGH STATIONARY: both high", diagram=D_DTM)
L("globo", "Stage two. The death rate falls fast. Births stay high. Population booms. Niger is often placed here.", mood="teach", shot="close",
  board="2 EARLY EXPANDING: death rate falls")
L("tara", "Stage three. The birth rate falls. Fewer babies die, girls stay in school longer, and city children are expensive. India is late stage three.", mood="happy", shot="close",
  board="3 LATE EXPANDING: birth rate falls")
L("globo", "Stage four. Both rates low. The population is high and stable, like the UK and the USA.", mood="teach", shot="close",
  boardClear=True, board="4 LOW STATIONARY: both low (UK, USA)")
L("globo", "Stage five. The birth rate drops below the death rate, and the population slowly falls. Japan is the usual example.", mood="teach", shot="close",
  board="5 DECLINING: births < deaths (Japan)")
L("globo", "It's only a model, based on Europe. It ignores migration. Speed varies. The UK took around two hundred years. South Korea, a few decades.", mood="teach", shot="close",
  boardClear=True, board="LIMITS: based on Europe · ignores migration")
L("globo", "Policies, like China's One Child Policy, or disease, can bend the lines.", mood="teach", shot="close",
  board="Speed varies · policy + disease disrupt it")
L("tara", "Happy Elephants Love Lazy Days. High, early, late, low, declining.", mood="happy", shot="close",
  board="Gap in stages 2–3 = natural increase")

# ---------------- ACT 4: FUTURE POPULATION ----------------
card("FLOWN IN BY GLOBO AIRWAYS", "Dad is looking for pram customers", 2.2)
scene("megacity", [("tara", 260), ("dad", 600), ("globo", 960)], "LAGOS, NIGERIA · A Very Young City · Flown In By Globo Airways")
L("dad", "Now this is more like it! Look at all these people!", mood="excited", shot="close", prop="sunglasses")
L("globo", "The United Nations projects about nine point seven billion by twenty fifty. Then a peak of about ten point three billion, in the twenty eighties.", mood="teach", shot="close",
  boardClear=True, board="UN 2024: ~9.7 bn by 2050", diagram=D_FUTURE)
L("tara", "So the world stops growing. Like the Rao family.", mood="deadpan", shot="close", board="Peak ~10.3 bn in mid-2080s, then fall")
L("globo", "Sub-Saharan Africa, including Nigeria, is expected to provide most future growth. Fertility is high and people are young, so there's momentum.", mood="teach", shot="close",
  boardClear=True, board="Growing: SUB-SAHARAN AFRICA (young)")
L("globo", "East Asia and Europe are shrinking, or close to it. China's population fell in twenty twenty two, and India overtook it, the UN estimates.", mood="teach", shot="close",
  board="Shrinking: EUROPE + EAST ASIA")
L("dad", "So I sell the prams here. Perfect plan.", mood="smug", shot="close", board="India overtook China (2023, UN est.)")
L("globo", "But projections rest on fertility assumptions. Another study projected a lower, earlier peak. And pandemics or wars change things.", mood="teach", shot="close",
  boardClear=True, board="Projections = ASSUMPTIONS, not facts")
L("tara", "So it's what happens if the assumptions hold. Not a promise.", mood="happy", shot="close", board="IHME 2020: ~9.7 bn peak, 2060s")
L("globo", "Exactly. Say projected to be about. Never will be.", mood="smug", shot="close", board="Say \"projected to be ABOUT…\"", gap=0.3)

confess("globo", "GLOBO · Recap Globe · Spinning Slowly For Dad")
L("globo", "Recap. One. The J-curve. Growth exploded because death rates fell.", mood="teach", boardClear=True, board="1. J-curve: 1 bn 1804 → 8 bn 2022")
L("globo", "Two. Rate of natural increase is birth rate minus death rate, divided by ten.", mood="teach", board="2. RNI % = (BR − DR) ÷ 10")
L("globo", "Three. Replacement level fertility is about two point one.", mood="teach", board="3. Replacement TFR ≈ 2.1")
L("globo", "Four. In the model, death rate falls first, birth rate follows. Five stages.", mood="teach", board="4. DTM: death rate falls FIRST")
L("globo", "Five. The UN projects a peak of about ten point three billion. And never buy prams by the ten thousand.", mood="smug", board="5. UN peak ~10.3 bn, 2080s (projected)", gap=0.5)

# ---------------- BUTTON ----------------
card("ONE WEEK LATER", "Void deck status: clear", 2.2)
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "Good news. I sold every single pram.", mood="smug", shot="close", prop="phone")
L("tara", "To who?", mood="shock", shot="close")
L("dad", "Japan. An ageing population. They're using them as shopping trolleys. Stage five, baby!", mood="excited", shot="close")
L("mum", "Did you at least make a profit?", mood="thinking", shot="close")
L("dad", "I sold them at a discount.", mood="sad", shot="close")
L("mum", "Finally. He's learning.", mood="happy", shot="close")
sfx("ding")
L("globo", "Put me back in the drawer. Gently. My population is very fragile.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "Birth rate 32, death rate 7 (per 1,000). RNI?", "2.5%", "(32 − 7) ÷ 10 = 2.5%",
  "Question one. Birth rate thirty two, death rate seven, per thousand. What is the rate of natural increase?",
  "Two point five percent. Twenty five, divided by ten. If you said twenty five percent, drop a zero.")
challenge(2, "In the DTM, which falls first: birth rate or death rate?", "DEATH RATE", "stage 2: death rate falls · stage 3: birth rate",
  "Question two. In the Demographic Transition Model, which falls first? The birth rate, or the death rate?",
  "The death rate, in stage two. The birth rate follows in stage three. Death departs first, births behind.")
challenge(3, "What TFR is replacement level?", "ABOUT 2.1", "2 parents + extra for children who don't survive",
  "Question three. What total fertility rate is replacement level?",
  "About two point one. Two to replace both parents, plus a little extra.")
end_card()
