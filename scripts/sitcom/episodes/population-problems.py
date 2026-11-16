# "Totally Raotional: Off The Map" S02E06 "One Child, Many Opinions" (Topic: Over-population, Under-population & Policies)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: over-under-population, ageing-youthful, population-policies, china-one-child.

EP = dict(topic="population-problems",
          logline="Mum treats the Baby Bonus like a cashback deal and Dad plans twelve more children for his retirement. Globo explains "
                  "over-, under- and optimum population, ageing and youthful populations, Singapore's policy U-turn and the One-Child Policy debate.")

D_OPT = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<path d="M60 20 V180 H500" stroke="#e2e8f0" stroke-width="3" fill="none"/>
<path d="M70 170 Q190 40 290 170" stroke="#fde047" stroke-width="5" fill="none"/>
<path d="M90 168 Q260 -10 420 168" stroke="#7dd3fc" stroke-width="4" fill="none" stroke-dasharray="10 8"/>
<path d="M180 104 V180" stroke="#86efac" stroke-width="2" stroke-dasharray="4 4"/>
<text x="180" y="98" font-family="sans-serif" font-size="16" font-weight="bold" fill="#86efac" text-anchor="middle">OPTIMUM</text>
<text x="110" y="200" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fca5a5" text-anchor="middle">under</text>
<text x="250" y="200" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fca5a5" text-anchor="middle">over</text>
<text x="360" y="60" font-family="sans-serif" font-size="15" fill="#7dd3fc">better technology</text>
<text x="280" y="214" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">population size →</text>
<text x="20" y="110" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle" transform="rotate(-90 20 110)">living standard per person</text>
</svg>"""

D_AGE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">
<text x="20" y="62" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fff">JAPAN</text>
<rect x="100" y="40" width="44" height="34" fill="#7dd3fc"/><rect x="144" y="40" width="240" height="34" fill="#86efac"/><rect x="384" y="40" width="116" height="34" fill="#fca5a5"/>
<text x="122" y="63" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">11</text>
<text x="264" y="63" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">60</text>
<text x="442" y="63" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">29</text>
<text x="20" y="124" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fff">NIGER</text>
<rect x="100" y="102" width="196" height="34" fill="#7dd3fc"/><rect x="296" y="102" width="192" height="34" fill="#86efac"/><rect x="488" y="102" width="12" height="34" fill="#fca5a5"/>
<text x="198" y="125" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">49</text>
<text x="392" y="125" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">48</text>
<text x="494" y="94" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fca5a5" text-anchor="middle">3</text>
<rect x="100" y="158" width="16" height="16" fill="#7dd3fc"/><text x="122" y="172" font-family="sans-serif" font-size="14" fill="#e2e8f0">0–14</text>
<rect x="200" y="158" width="16" height="16" fill="#86efac"/><text x="222" y="172" font-family="sans-serif" font-size="14" fill="#e2e8f0">15–64</text>
<rect x="310" y="158" width="16" height="16" fill="#fca5a5"/><text x="332" y="172" font-family="sans-serif" font-size="14" fill="#e2e8f0">65+  (% rounded)</text>
</svg>"""

D_SGTFR = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect x="128" y="20" width="98" height="180" fill="#fca5a5" fill-opacity="0.18"/>
<path d="M60 20 V200 H500" stroke="#e2e8f0" stroke-width="3" fill="none"/>
<path d="M60 141 H500" stroke="#86efac" stroke-width="2" stroke-dasharray="8 6"/>
<text x="496" y="134" font-family="sans-serif" font-size="14" fill="#86efac" text-anchor="end">replacement ~2.1</text>
<polyline points="60,38 128,113 196,150 264,150 332,155 400,166 468,169 488,173" stroke="#fde047" stroke-width="5" fill="none"/>
<circle cx="488" cy="173" r="6" fill="#fde047"/>
<text x="74" y="36" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047">5.8</text>
<text x="472" y="194" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047">0.97</text>
<text x="177" y="40" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fca5a5" text-anchor="middle">STOP AT TWO</text>
<path d="M245 150 V60" stroke="#7dd3fc" stroke-width="2"/><text x="250" y="58" font-family="sans-serif" font-size="13" fill="#7dd3fc">1987 Have Three</text>
<path d="M339 155 V86" stroke="#7dd3fc" stroke-width="2"/><text x="344" y="84" font-family="sans-serif" font-size="13" fill="#7dd3fc">2001 Baby Bonus</text>
<text x="60" y="220" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">1960</text>
<text x="264" y="220" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">1990</text>
<text x="468" y="220" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">2020</text>
<text x="18" y="110" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle" transform="rotate(-90 18 110)">SG resident TFR</text>
</svg>"""

D_421 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<g stroke="#94a3b8" stroke-width="3">
<line x1="80" y1="40" x2="180" y2="100"/><line x1="180" y1="40" x2="180" y2="100"/>
<line x1="340" y1="40" x2="340" y2="100"/><line x1="440" y1="40" x2="340" y2="100"/>
<line x1="180" y1="100" x2="260" y2="160"/><line x1="340" y1="100" x2="260" y2="160"/>
</g>
<g fill="#7dd3fc"><circle cx="80" cy="40" r="20"/><circle cx="180" cy="40" r="20"/><circle cx="340" cy="40" r="20"/><circle cx="440" cy="40" r="20"/></g>
<g fill="#86efac"><circle cx="180" cy="100" r="20"/><circle cx="340" cy="100" r="20"/></g>
<circle cx="260" cy="160" r="22" fill="#fde047"/>
<text x="505" y="46" font-family="sans-serif" font-size="22" font-weight="bold" fill="#7dd3fc" text-anchor="end">4</text>
<text x="420" y="106" font-family="sans-serif" font-size="22" font-weight="bold" fill="#86efac">2</text>
<text x="300" y="168" font-family="sans-serif" font-size="22" font-weight="bold" fill="#fde047">1</text>
<text x="20" y="106" font-family="sans-serif" font-size="14" fill="#e2e8f0">grandparents</text>
<text x="20" y="126" font-family="sans-serif" font-size="14" fill="#e2e8f0">parents</text>
<text x="20" y="166" font-family="sans-serif" font-size="14" fill="#fde047">one only child</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "Tara! Best deal ever. The government gives you eleven thousand dollars. For a baby!", mood="excited", shot="close", prop="phone")
L("tara", "Mum. That's the Baby Bonus. It's not a cashback offer.", mood="deadpan", shot="close", prop="book")
L("mum", "And from the third child, about thirteen thousand! The price goes up with volume!", mood="excited", shot="two", gap=0.3)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Family. I've run the numbers. Twelve more children. The bonuses buy a bigger flat, and the children pay for my retirement.", mood="smug", shot="close", prop="tablet")
L("tara", "Dad, my homework asks if Singapore is over-populated.", mood="deadpan", shot="close")
L("dad", "Easy. Yes. Have you seen the train at eight in the morning? I was folded like a chapati.", mood="annoyed", shot="close")
L("tara", "So the country has too many people. And your plan is twelve more. In our flat.", mood="deadpan", shot="two")
freeze("TWELVE MORE.", 2.4, narrator="Narrator: Mum was already pricing twelve school bags.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My dad thinks the country is too crowded. His solution is to personally add twelve people.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: OVER, UNDER, OPTIMUM ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Population emergency. Time for the drawer.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who opens the drawer at dinner time? Oh. The Raos. Let me guess. Your father has a plan.", mood="bored", shot="close")
L("tara", "Twelve more children, for the Baby Bonus. And he says Singapore is over-populated.", mood="worried", shot="two")
L("globo", "Both at once? Your father once looked for Singapore on me with a magnifying glass. He found a crumb.", mood="eyeroll", shot="close", gap=0.4)

confess("globo", "GLOBO · Retired Classroom Globe · Lives In The Junk Drawer")
L("globo", "Good evening. I am Globo. My population is one. Me. Which is the optimum.", mood="smug", gap=0.5)

scene("hawker", [("tara", 260), ("dad", 480), ("globo", 720), ("uncle", 1000)], "THE HAWKER CENTRE · Saturday · Prata Rush Hour")
L("dad", "Look at this queue. Over-populated. I rest my case.", mood="annoyed", shot="close")
L("globo", "Crowded is not over-populated. Singapore has about eight thousand people per square kilometre. Niger, about twenty. Which one struggles more to feed its people?", mood="teach", shot="close",
  boardClear=True, board="Density ≠ over-population")
L("tara", "Niger. Droughts, poor soils, less technology. Singapore buys food abroad and makes NEWater.", mood="thinking", shot="close",
  board="Judge people vs RESOURCES + TECHNOLOGY")
L("globo", "Correct. Over-population means too many people for the resources and technology. Under-population, too few to use them, like Canada or Australia.", mood="teach", shot="close",
  board="OVER: too many · UNDER: too few (Canada)")
L("uncle", "Like my stall at three o'clock. Twenty pratas. One customer. Him.", mood="deadpan", shot="close")
L("globo", "In between is the optimum. The population that gives the highest standard of living per person.", mood="teach", shot="close",
  boardClear=True, board="OPTIMUM: best living standard per person", diagram=D_OPT)
L("globo", "Technology, like irrigation or desalination, is a bigger griddle. More food, so the optimum rises. Carrying capacity is the most people an area can support sustainably.", mood="teach", shot="close",
  board="Better technology → the optimum rises")
L("uncle", "My new griddle. Ten pratas at once!", mood="happy", shot="close", board="CARRYING CAPACITY: most, sustainably")
L("globo", "In seventeen ninety eight, Malthus said population outgrows food, until famine, disease or war checks it. In nineteen sixty five, Boserup said pressure makes people invent better farming.", mood="teach", shot="close",
  boardClear=True, board="MALTHUS 1798: food can't keep up → checks")
L("tara", "Malthus means misery. Boserup means brains. And the Green Revolution sided with Boserup.", mood="happy", shot="close",
  board="BOSERUP 1965: pressure → invention")
L("globo", "Globally, so far. One more twist. An average American emits roughly fourteen to fifteen tonnes of carbon dioxide a year. Someone in Niger, roughly zero point one.", mood="teach", shot="close",
  board="CO₂/person: USA ~14–15 t · Niger ~0.1 t")
L("tara", "So it's not just how many people. It's how much each person consumes.", mood="thinking", shot="close",
  boardClear=True, board="Numbers × CONSUMPTION × technology")
L("dad", "Then I'll consume less. Uncle, cancel my fourth prata.", mood="sad", shot="close")
L("uncle", "Already cooked. No refund.", mood="deadpan", shot="close")
sfx("trombone")

confess("dad", "VIKRAM RAO · Dad · Self-Described Demographer")
L("dad", "I'm not over-populated. I'm under-populated. There aren't enough of me for all my brilliant ideas.", mood="smug", gap=0.6)

# ---------------- ACT 2: YOUTHFUL AND AGEING ----------------
card("MEANWHILE, ACROSS THE PLANET", "Globo Airways: no snacks, no refunds", 2.4)
scene("megacity", [("tara", 300), ("mum", 620), ("globo", 960)], "LAGOS, NIGERIA · Flown In By Globo Airways")
L("mum", "So many young people! In twenty years, think of the shopping!", mood="excited", shot="close", prop="sunglasses")
L("globo", "Nigeria is very young. Next door in Niger, about half the people are under fifteen, and women have about six children each.", mood="teach", shot="close",
  boardClear=True, board="YOUTHFUL: Niger ~half under 15")
L("tara", "So the problems are schools, jobs and food.", mood="thinking", shot="close",
  board="Problems: SCHOOLS · JOBS · FOOD")
L("globo", "Plus healthcare for mothers and babies. But if young people are educated and employed, there's a demographic dividend. Fast growth. Lagos has a booming tech and music scene.", mood="teach", shot="close",
  board="Opportunity: DEMOGRAPHIC DIVIDEND", gap=0.3)

scene("park", [("tara", 260), ("mum", 560), ("globo", 960)], "EAST COAST PARK · 7 a.m. · Tai Chi O'Clock")
L("mum", "Back home! Everyone doing tai chi is over sixty. And faster than me.", mood="annoyed", shot="close")
L("globo", "Ageing. Japan has about twenty nine percent aged sixty five plus, and a falling population. Low birth rates, plus long lives.", mood="teach", shot="close",
  boardClear=True, board="AGEING: Japan ~29% aged 65+ (2024)", diagram=D_AGE)
L("tara", "So, the three Ps. Pensions, patients, and fewer producers.", mood="happy", shot="close",
  board="3 Ps: Pensions · Patients · fewer Producers")
L("mum", "And the silver economy! Is there a gold tier?", mood="excited", shot="close", prop="phone")
L("globo", "No tiers. Goods and services for older people. Japan also uses work visas and care robots. Singapore raises retirement ages, to sixty four and sixty nine in twenty twenty six.", mood="eyeroll", shot="close",
  board="SILVER ECONOMY · SG retire 64, rehire 69")
L("tara", "Dependency ratio. Japan's under fifteens plus over sixty fives, divided by working age, times a hundred. About sixty seven. Niger, about one hundred and eight.", mood="thinking", shot="close", prop="calculator",
  boardClear=True, board="(0–14 + 65+) ÷ 15–64 × 100")
L("globo", "Japan's dependants are mostly old. Niger's are mostly young.", mood="smug", shot="close",
  board="Japan ≈ 67 (old) · Niger ≈ 108 (young)", gap=0.3)

confess("mum", "MUM · Deal Hunter · Silver Economy Gold Member")
L("mum", "When I turn sixty five, I'm going to be the silver economy. Seniors' discount on everything.", mood="smug", gap=0.5)

# ---------------- ACT 3: POLICIES AND THE ONE-CHILD POLICY ----------------
card("MONDAY · YEAR 8 GEOGRAPHY", "Parent Helper Day. Dad volunteered. Nobody asked.", 2.6)
scene("classroom", [("teacher", 240), ("tara", 480), ("dad", 720)])
L("teacher", "Today, population policies. Plans to change the size or structure of a population.", mood="teach", shot="close")
poof("globo", 980)
L("teacher", "Tara. Is that a talking globe?", mood="shock", shot="close")
L("tara", "He came in my bag. Long story.", mood="deadpan", shot="close")
L("globo", "Anti-natalist policies reduce births. Pro-natalist policies increase them. Immigration policies fill labour gaps.", mood="teach", shot="close",
  boardClear=True, board="ANTI-: fewer births · PRO-: more births")
L("dad", "Pro-natalist. Pro, like me.", mood="smug", shot="close", board="IMMIGRATION: fill labour gaps")
L("globo", "Singapore did both. Stop at Two in the nineteen seventies, with higher hospital fees for third children. It worked too well. Fertility fell below the replacement level of about two point one.", mood="teach", shot="close",
  boardClear=True, board="SG 1970s: STOP AT TWO (anti-natalist)", diagram=D_SGTFR)
L("globo", "So, nineteen eighty seven, Have Three or More. And from two thousand and one, the Baby Bonus.", mood="teach", shot="close",
  board="1987: HAVE THREE OR MORE · 2001: BONUS")
L("tara", "But fertility was about zero point nine seven in twenty twenty three. Cash rarely beats the real cost of housing and tuition. So we rely on immigration too.", mood="deadpan", shot="close",
  board="TFR ~0.97 (2023) · cash < real costs")
L("globo", "France pays family allowances and subsidises crèches. India's Emergency sterilisations, many under pressure, caused a backlash. Kerala cut births with girls' education instead.", mood="teach", shot="close",
  boardClear=True, board="FRANCE: allowances, crèches (pro)")
L("tara", "So policies work best with social change, not against it.", mood="thinking", shot="close",
  board="INDIA 1975–77: forced → backlash")
L("teacher", "Now, today's debate. Was China's One-Child Policy a success?", mood="teach", shot="close", board="KERALA: girls' education, no force ✔", gap=0.4)
L("globo", "This is about real families, so I'll save my jokes for your father. From nineteen eighty, families with one child got cash, housing and school priority. Extra children meant fines or job loss.", mood="teach", shot="close",
  boardClear=True, board="OCP 1980–2015: incentives + penalties")
L("globo", "Some areas saw forced abortions and sterilisations. Exceptions included rural families whose first child was a girl, and many ethnic minorities.", mood="teach", shot="close",
  board="Exceptions: rural (1st a girl), minorities")
L("tara", "Effects. About one hundred and eighteen boys born per hundred girls by twenty ten. Naturally, it's about one hundred and five.", mood="thinking", shot="close",
  board="Sex ratio ~118 : 100 (natural ~105)")
L("globo", "And the four two one problem. One child may support two parents and four grandparents.", mood="teach", shot="close",
  boardClear=True, board="4-2-1: one child, six older relatives", diagram=D_421)
L("dad", "Six? I can barely support myself.", mood="shock", shot="close")
L("globo", "China aged fast. It allowed two children from twenty sixteen, and three from twenty twenty one. Even so, its population has fallen since twenty twenty two.", mood="teach", shot="close",
  board="2016: two · 2021: three · falling from 2022")
L("teacher", "Mr Rao. One argument for.", mood="teach", shot="close")
L("dad", "It slowed growth when China was poor, and eased pressure on food and jobs.", mood="thinking", shot="close",
  boardClear=True, board="FOR: slowed growth · eased pressure")
L("globo", "That's actually a fair point.", mood="shock", shot="close")
L("tara", "Against. Fertility had already fallen from about six to under three in the nineteen seventies, before it began. And Thailand and Kerala cut births without force.", mood="determined", shot="close",
  board="AGAINST: already falling · abuses · 4-2-1")
L("globo", "Now judge. Did it meet its aim? At what cost? Was there a better way? People weigh it differently. Just back your judgement with evidence.", mood="teach", shot="close",
  board="JUDGE: aim? cost? alternative? → evidence")
L("teacher", "Well argued. Mr Rao, I'm surprised.", mood="happy", shot="close")
L("dad", "So am I.", mood="shock", shot="close", gap=0.5)

confess("globo", "GLOBO · Recap Globe · Still Has The Soviet Union On Him")
L("globo", "Recap. One. Over and under-population compare people with resources and technology.", mood="teach", boardClear=True, board="1. Over/under: people vs resources + tech")
L("globo", "Two. Ageing means the three Ps. Youthful means schools, jobs and food.", mood="teach", board="2. Ageing: 3 Ps · Youthful: schools, jobs")
L("globo", "Three. Anti-natalist cuts births. Pro-natalist raises them.", mood="teach", board="3. Anti- vs pro-natalist · immigration")
L("globo", "Four. Singapore went from Stop at Two to the Baby Bonus.", mood="teach", board="4. SG: Stop at Two → Baby Bonus")
L("globo", "Five. The One-Child Policy. Judge it with evidence.", mood="smug", board="5. OCP 1980–2015: judge with evidence", gap=0.5)

# ---------------- BUTTON ----------------
scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("dad", "Revised plan. A child costs far more than the Baby Bonus. So we already have the optimum population. Three.", mood="smug", shot="close", prop="calculator")
L("tara", "Dad. That's actually correct.", mood="shock", shot="close")
L("mum", "But can I still claim the eleven thousand?", mood="thinking", shot="close", prop="phone")
L("tara", "Mum. You have to have the baby first.", mood="deadpan", shot="close")
sfx("ding")
L("globo", "Put me back in the drawer. Somewhere with low population density.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "Singapore is very crowded. Does that make it over-populated?", "NO", "compare people with resources + technology",
  "Question one. Singapore is very crowded. Is it over-populated?",
  "No. Over-population compares people with resources and technology.")
challenge(2, "Japan: 0–14 = 11%, 65+ = 29%, 15–64 = 60%. Dependency ratio?", "≈ 67", "(11 + 29) ÷ 60 × 100 ≈ 66.7",
  "Question two. What is Japan's dependency ratio?",
  "About sixty seven. Forty, divided by sixty, times one hundred.")
challenge(3, "A cash gift for every new baby. Pro-natalist or anti-natalist?", "PRO-NATALIST", "it encourages births · natal = birth",
  "Question three. A cash gift for every baby. Pro-natalist or anti-natalist?",
  "Pro-natalist. It promotes births. Even if Mum thinks it's cashback.")
end_card()
