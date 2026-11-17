# "Totally Raotional: Off The Map" S02E05 "Push Me, Pull You" (Topic: How and Why Do Populations Change?)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: birth-rate-factors, death-rate-factors, migration, significance-of-factors.

EP = dict(topic="population-change",
          logline="Dad buys a thousand prams because 'nobody in Singapore has babies any more'. Globo explains birth rates, "
                  "death rates, push and pull migration, and how to judge which of the four taps matters most.")

D_TFR = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<line x1="40" y1="190" x2="500" y2="190" stroke="#e2e8f0" stroke-width="2"/>
<rect x="55" y="40" width="50" height="150" fill="#fde68a"/>
<rect x="130" y="140" width="50" height="50" fill="#bbf7d0"/>
<rect x="205" y="155" width="50" height="35" fill="#c7d2fe"/>
<rect x="280" y="160" width="50" height="30" fill="#c7d2fe"/>
<rect x="355" y="166" width="50" height="24" fill="#fecaca"/>
<rect x="430" y="172" width="50" height="18" fill="#fecaca"/>
<line x1="40" y1="137" x2="500" y2="137" stroke="#fde047" stroke-width="2" stroke-dasharray="8 5"/>
<text x="496" y="130" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047" text-anchor="end">replacement 2.1</text>
<g font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">
<text x="80" y="34">≈6</text><text x="155" y="134">≈2.0</text><text x="230" y="149">≈1.4</text>
<text x="305" y="154">≈1.2</text><text x="380" y="160">0.97</text><text x="455" y="166">≈0.72</text></g>
<g font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">
<text x="80" y="208">Niger</text><text x="155" y="208">Bangladesh</text><text x="230" y="208">UK</text>
<text x="305" y="208">Japan</text><text x="380" y="208">Singapore</text><text x="455" y="208">S. Korea</text></g>
</svg>"""

D_DEATH = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170">
<rect width="520" height="170" fill="#0f172a"/>
<g fill="#38bdf8" stroke="#e2e8f0"><rect x="10" y="40" width="110" height="60" rx="8"/><rect x="140" y="40" width="110" height="60" rx="8"/>
<rect x="270" y="40" width="110" height="60" rx="8"/><rect x="400" y="40" width="110" height="60" rx="8"/></g>
<g font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">
<text x="65" y="66">Clean</text><text x="65" y="86">water</text><text x="195" y="66">Fewer</text><text x="195" y="86">diseases</text>
<text x="325" y="66">Fewer infant</text><text x="325" y="86">deaths</text><text x="455" y="66">Higher life</text><text x="455" y="86">expectancy</text></g>
<path d="M122 70 h14 M252 70 h14 M382 70 h14" stroke="#fde047" stroke-width="4"/>
<text x="260" y="26" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">ONE CHAIN OF CAUSE AND EFFECT</text>
<text x="260" y="140" font-family="sans-serif" font-size="15" fill="#bbf7d0" text-anchor="middle">World life expectancy: about 46 (1950) → about 73 (2023)</text>
</svg>"""

D_PUSHPULL = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<rect x="10" y="20" width="160" height="150" rx="14" fill="#7f1d1d"/>
<rect x="350" y="20" width="160" height="150" rx="14" fill="#14532d"/>
<text x="90" y="46" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fecaca" text-anchor="middle">PUSH (origin)</text>
<text x="430" y="46" font-family="sans-serif" font-size="17" font-weight="bold" fill="#bbf7d0" text-anchor="middle">PULL (destination)</text>
<g font-family="sans-serif" font-size="14" fill="#fff"><text x="22" y="76">• few jobs, low pay</text><text x="22" y="100">• war, persecution</text>
<text x="22" y="124">• drought, floods</text><text x="22" y="148">• poor schools</text>
<text x="362" y="76">• jobs, higher pay</text><text x="362" y="100">• safety, freedom</text>
<text x="362" y="124">• good hospitals</text><text x="362" y="148">• family there</text></g>
<path d="M180 80 H320" stroke="#fde047" stroke-width="10"/><path d="M340 80 l-24 -16 v32z" fill="#fde047"/>
<text x="260" y="66" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fde047" text-anchor="middle">MIGRATION</text>
<rect x="190" y="110" width="140" height="62" rx="6" fill="none" stroke="#e2e8f0" stroke-dasharray="5 4"/>
<g font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle"><text x="260" y="130" font-weight="bold">OBSTACLES</text>
<text x="260" y="148">cost, distance</text><text x="260" y="164">visas, language</text></g>
</svg>"""

D_TUBS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<line x1="260" y1="10" x2="260" y2="210" stroke="#475569" stroke-width="2"/>
<text x="130" y="26" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fff" text-anchor="middle">SINGAPORE</text>
<text x="390" y="26" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fff" text-anchor="middle">NIGER</text>
<g fill="#38bdf8"><rect x="42" y="110" width="176" height="56"/><rect x="302" y="110" width="176" height="56"/></g>
<g stroke="#e2e8f0" stroke-width="3" fill="none"><path d="M40 90 V168 H220 V90"/><path d="M300 90 V168 H480 V90"/></g>
<g fill="#4ade80"><rect x="84" y="44" width="5" height="56"/><rect x="164" y="44" width="22" height="56"/>
<rect x="342" y="44" width="24" height="56"/><rect x="448" y="44" width="3" height="56"/></g>
<g fill="#f87171"><rect x="76" y="170" width="6" height="26"/><rect x="170" y="170" width="10" height="26"/>
<rect x="334" y="170" width="10" height="26"/><rect x="448" y="170" width="4" height="26"/></g>
<g font-family="sans-serif" font-size="13" fill="#e2e8f0"><text x="78" y="60" text-anchor="end">births</text><text x="190" y="60">immig.</text>
<text x="336" y="60" font-weight="bold" fill="#4ade80" text-anchor="end">BIRTHS</text><text x="456" y="60">immig.</text>
<text x="46" y="210">deaths</text><text x="186" y="210">emig.</text><text x="300" y="210">deaths</text><text x="456" y="210">emig.</text></g>
<g font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">
<text x="130" y="143">grows via MIGRANTS</text><text x="390" y="143">grows via BIRTHS</text></g>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 280), ("mum", 640), ("dad", 980)])
L("dad", "Family. Nobody in Singapore has babies any more. So when the babies come back, they will need prams. I bought a thousand. Wholesale.", mood="smug", shot="close", prop="tablet")
L("mum", "At forty percent off! The man cried a little.", mood="smug", shot="close", prop="phone")
L("tara", "And where are a thousand prams right now?", mood="worried", shot="close")
L("dad", "The void deck. The neighbours think we are expecting. Very expecting.", mood="smug", shot="two", gap=0.4)
L("tara", "Dad. Singapore's population is still growing. Who do you think is building the new MRT line?", mood="deadpan", shot="close")
L("dad", "Not babies, surely. Babies have a terrible work ethic.", mood="thinking", shot="close")
freeze("A THOUSAND PRAMS", 2.4, narrator="Narrator: The prams are still in the void deck. One has been adopted by a cat.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My father bet on a baby boom. He did not check whether anyone was planning one.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: BIRTH RATES ----------------
scene("kitchen", [("tara", 360)])
L("tara", "Right. Time to open the drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who disturbs my nap? Oh. The Raos. Let me guess. Your father bought something.", mood="bored", shot="close")
L("globo", "He once tried to return me because Greenland looked too big.", mood="eyeroll", shot="close", gap=0.4)

scene("living", [("tara", 260), ("dad", 580), ("globo", 940)], "THE RAO FLAT · Now With Extra Holograms")
L("globo", "A population changes in four ways. Births minus deaths, plus immigrants minus emigrants.", mood="teach", shot="close",
  boardClear=True, board="CHANGE = (births − deaths)")
L("tara", "Births, immigrants coming in, deaths, emigrants going out. Bide. The first two fill the bathtub, the last two drain it.", mood="happy", shot="close",
  board="   + (immigrants − emigrants)")
L("globo", "The birth rate is births per thousand people per year. The total fertility rate is children per woman. About two point one is replacement level.", mood="teach", shot="close",
  boardClear=True, board="BIRTH RATE: births per 1,000 per year")
L("dad", "So Singapore is about two point one. Basically fine.", mood="smug", shot="close",
  board="TFR = children per woman · 2.1 = replace", diagram=D_TFR)
L("globo", "Singapore's residents were about zero point nine seven in twenty twenty three. One of the lowest on Earth. Niger is about six.", mood="eyeroll", shot="close",
  board="SG residents ≈ 0.97 (2023) · Niger ≈ 6")
L("globo", "No. Big families are a sensible choice there. Children help on the farm and care for parents in old age. And when many babies die young, parents have more.", mood="teach", shot="close",
  boardClear=True, board="HIGH: farm work · no pension")
L("globo", "Plus less contraception, and early marriage.", mood="teach", shot="close",
  board="HIGH: infant deaths · early marriage")
L("globo", "The key question. Is a child an economic asset, or a cost?", mood="teach", shot="close",
  board="Child = ASSET or COST?")
L("mum", "Cost! Have you seen the price of tuition?", mood="annoyed", shot="close", offstage=True)
L("globo", "Birth rates fall with girls, pills, bills and cities. Educated women, contraception, the cost of children, and city life.", mood="teach", shot="close",
  boardClear=True, board="FALL: Girls · Pills · Bills · Cities")
L("tara", "And falling infant mortality. If babies survive, parents have fewer.", mood="happy", shot="close",
  board="Women's education = most powerful")
L("globo", "Bangladesh went from about six or seven children per woman to about two, with girls in school and contraception brought to villages.", mood="teach", shot="close",
  board="Bangladesh: ≈6–7 → ≈2")
L("dad", "But Singapore has the Baby Bonus! Free money! Surely that fixes it.", mood="determined", shot="close")
L("globo", "Pro natalist, yet the rate stays below one. Costs, long hours, later marriage. China's One Child Policy was the opposite. Anti natalist.", mood="teach", shot="close",
  boardClear=True, board="PRO-natalist: SG Baby Bonus")
L("tara", "So the pram boom is not coming.", mood="deadpan", shot="close", board="ANTI-natalist: China 1980–2015")
sfx("trombone")

# ---------------- ACT 2: DEATH RATES ----------------
card("MEANWHILE, AT THE HAWKER CENTRE", "Dad is drowning his sorrows in teh", 2.4)
scene("hawker", [("tara", 220), ("dad", 460), ("uncle", 1000)])
L("uncle", "Two thosai and one teh, coming up. Why so sad, Vikram?", mood="happy", shot="close", prop="plate")
L("dad", "Uncle Hock, you're seventy eight and still flipping prata. People live forever now! The death rate must be zero!", mood="excited", shot="close")
poof("globo", 730)
L("globo", "The death rate is deaths per thousand people per year. It is not zero. Even for prata men.", mood="eyeroll", shot="close",
  boardClear=True, board="DEATH RATE: deaths per 1,000 per year")
L("globo", "Death rates fall with vaccines and healthcare, clean water and sewers, a reliable food supply, and better housing.", mood="teach", shot="close",
  boardClear=True, board="DOWN: vaccines · clean water · food", diagram=D_DEATH)
L("uncle", "In my kampong days, no proper toilets. Now, piped water and free jabs for the kids.", mood="thinking", shot="close",
  board="SG: infant deaths ≈ 2 per 1,000")
L("globo", "Infant mortality, babies dying before their first birthday, is now about two per thousand here. World life expectancy rose from about forty six to seventy three.", mood="smug", shot="close")
L("globo", "War, famine and pandemics push deaths up. The Covid nineteen pandemic caused an estimated fifteen million extra deaths.", mood="teach", shot="close",
  boardClear=True, board="UP: war · famine · pandemics · lifestyle")
L("globo", "A riddle. Japan has superb hospitals, yet its death rate is higher than Niger's. Why?", mood="smug", shot="close",
  board="Japan ≈ 13 per 1,000 · Niger < 10")
L("dad", "Their hospitals are secretly terrible?", mood="thinking", shot="close")
L("tara", "Japan's population is very old, and old people die even with great healthcare. Niger's is very young. Sorry, Uncle.", mood="happy", shot="close",
  board="AGEING population → death rate UP")

confess("dad", "VIKRAM RAO · Dad · Self-Described Demographic Genius")
L("dad", "Ageing population. Old people need something to lean on. Something with wheels. I see it now.", mood="smug", gap=0.6)

# ---------------- ACT 3: MIGRATION ----------------
card("THE NEXT DAY, AT THE MALL", "The Great Singapore Sale, final hour", 2.4)
scene("mall", [("mum", 300), ("tara", 620)])
L("mum", "Tara, I understand migration now. The sale pulls people in. The crowd pushes them out. Push and pull!", mood="excited", shot="close", prop="phone")
L("tara", "Mum, migration means moving somewhere to live, usually for at least a year.", mood="deadpan", shot="close")
L("mum", "I would live at this sale.", mood="smug", shot="close")
poof("globo", 960)
L("globo", "Net migration is immigrants minus emigrants. Moving within a country is internal. Crossing a border is international.", mood="teach", shot="close",
  boardClear=True, board="NET MIGRATION = immigrants − emigrants")
L("globo", "Push factors drive people away. Pull factors attract them. Social, economic, environmental or political. With obstacles in between.", mood="teach", shot="close",
  boardClear=True, board="SEEP: Social Economic Env. Political", diagram=D_PUSHPULL)
L("mum", "Like your great grandfather! He sailed here from India for work.", mood="happy", shot="close",
  board="OBSTACLES: cost · distance · visas")
L("globo", "A voluntary, economic migrant. Like Employment Pass, S Pass and Work Permit holders today. Roughly three in ten people here are non residents.", mood="teach", shot="close",
  boardClear=True, board="VOLUNTARY: SG ≈30% non-residents (2024)")
L("globo", "In China, nearly three hundred million rural migrant workers work outside farming, and many have moved to cities. Internal migration.", mood="teach", shot="close",
  board="INTERNAL: China ≈300m migrant workers")
L("globo", "Refugees are different. A refugee is forced to flee their country by persecution, war or violence. An asylum seeker is waiting for refugee protection.", mood="teach", shot="close",
  boardClear=True, board="FORCED: REFUGEE flees across a border")
L("globo", "An internally displaced person is forced from home, but stays inside their own country.", mood="teach", shot="close",
  board="ASYLUM SEEKER: waiting · IDP: own country")
L("tara", "Like people fleeing war in Syria and Ukraine. And nearly a million Rohingya in camps in Bangladesh.", mood="thinking", shot="close",
  board="Syria · Ukraine · Rohingya (≈1m)")
L("globo", "Over a hundred million people were forcibly displaced by twenty twenty three. Most stay in their own country, or the one next door.", mood="teach", shot="close",
  board=">100m displaced · most stay nearby")
L("globo", "Nobody chooses to be a refugee. And kindness costs nothing. Even you would not ask for a discount on it.", mood="teach", shot="close", gap=0.4)


# ---------------- ACT 4: WEIGHING UP THE FACTORS ----------------
card("BACK HOME, THAT EVENING", "Tara has a six-mark question. Dad has a thousand prams.", 2.6)
scene("living", [("tara", 260), ("dad", 580), ("globo", 940)])
L("tara", "Homework. Is migration the most significant factor in Singapore's population change?", mood="worried", shot="close", prop="book")
L("dad", "Easy. Write, all factors are equally important. Full marks.", mood="smug", shot="close")
L("globo", "Zero marks. Weigh them. Size, speed, duration, root cause, and place and time.", mood="eyeroll", shot="close",
  boardClear=True, board="Judge: size · speed · duration · root cause")
L("globo", "Two bathtubs. In Singapore, births trickle but migration pours in. In Niger, births gush, and migration hardly matters.", mood="teach", shot="close",
  boardClear=True, board="SG: NET MIGRATION drives growth", diagram=D_TUBS)
L("tara", "And Japan has more deaths than births, so it's been shrinking since around twenty ten.", mood="happy", shot="close",
  board="NIGER: NATURAL INCREASE drives growth")
L("globo", "Now use PEEL. Point, evidence, explain, link. Then a counter argument, then a judgement.", mood="teach", shot="close",
  board="PEEL → counter → JUDGEMENT")
L("tara", "I largely agree. Migration is the biggest tap. But only because the birth rate is so low, and it depends on government policy.", mood="determined", shot="close")

confess("globo", "GLOBO · Recap Globe · Spinning Slowly For Dad")
L("globo", "Recap. One. Births minus deaths, plus immigrants minus emigrants.", mood="teach", boardClear=True, board="1. (B − D) + (I − E)")
L("globo", "Two. Girls, pills, bills and cities cut birth rates.", mood="teach", board="2. Girls · Pills · Bills · Cities")
L("globo", "Three. Clean water cuts deaths. Ageing pushes them up.", mood="teach", board="3. Clean water down · ageing up")
L("globo", "Four. Voluntary migrants choose. Refugees are forced.", mood="teach", board="4. Push/pull · voluntary vs forced")
L("globo", "Five. Migration in Singapore. Births in Niger.", mood="smug", board="5. SG: migration · Niger: births", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "Good news. I sold every pram, to the seniors at the void deck. Shopping trolleys! Ageing population. Huge market.", mood="smug", shot="close")
L("mum", "At full price?", mood="shock", shot="close")
L("dad", "At full price.", mood="smug", shot="close")
L("tara", "That's actually a great plan.", mood="shock", shot="close")
sfx("ding")
L("globo", "Do not encourage him. Put me back in the drawer. Mind my Antarctica, it chips.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "What total fertility rate is replacement level?", "ABOUT 2.1", "enough children to replace both parents",
  "Question one. What total fertility rate is called replacement level?",
  "About two point one. Enough to replace both parents.")
challenge(2, "1,200 births, 900 deaths, 700 immigrants, 1,000 emigrants. Total change?", "ZERO", "(1200 − 900) + (700 − 1000) = 300 − 300",
  "Question two. Twelve hundred births, nine hundred deaths, seven hundred immigrants, and one thousand emigrants leave. Total change?",
  "Zero. Plus three hundred natural increase, minus three hundred net migration.")
challenge(3, "Forced from home by war, but still in their own country. What are they?", "IDP", "internally displaced person (not a refugee)",
  "Question three. Forced from home by war, but still in their own country. What are they called?",
  "An internally displaced person. A refugee has crossed a border.")
end_card()
