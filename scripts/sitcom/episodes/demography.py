# "Totally Raotional: Off The Map" S02E04 "Census And Sensibility" (Topic: Studying Demography)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: what-is-demography, class-census, population-pyramids, dependency-ratio.

EP = dict(topic="demography",
          logline="Dad is outraged that nobody knocked on his door for Census 2020, so he runs his own census of the hawker centre. "
                  "Globo explains demography, register-based censuses and sampling, how to run a fair class census, population pyramids "
                  "and the dependency ratio.")

D_SAMPLE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170">
<rect width="520" height="170" fill="#0f172a"/>
<text x="87" y="24" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fde047" text-anchor="middle">RANDOM</text>
<text x="260" y="24" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fde047" text-anchor="middle">SYSTEMATIC</text>
<text x="433" y="24" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fde047" text-anchor="middle">STRATIFIED</text>
<g fill="#475569">
<circle cx="40" cy="50" r="7"/><circle cx="70" cy="50" r="7"/><circle cx="100" cy="50" r="7"/><circle cx="130" cy="50" r="7"/>
<circle cx="40" cy="80" r="7"/><circle cx="70" cy="80" r="7"/><circle cx="100" cy="80" r="7"/><circle cx="130" cy="80" r="7"/>
<circle cx="40" cy="110" r="7"/><circle cx="70" cy="110" r="7"/><circle cx="100" cy="110" r="7"/><circle cx="130" cy="110" r="7"/>
<circle cx="215" cy="50" r="7"/><circle cx="245" cy="50" r="7"/><circle cx="275" cy="50" r="7"/><circle cx="305" cy="50" r="7"/>
<circle cx="215" cy="80" r="7"/><circle cx="245" cy="80" r="7"/><circle cx="275" cy="80" r="7"/><circle cx="305" cy="80" r="7"/>
<circle cx="215" cy="110" r="7"/><circle cx="245" cy="110" r="7"/><circle cx="275" cy="110" r="7"/><circle cx="305" cy="110" r="7"/>
</g>
<g fill="#34d399"><circle cx="70" cy="50" r="7"/><circle cx="130" cy="80" r="7"/><circle cx="40" cy="110" r="7"/></g>
<g fill="#34d399"><circle cx="275" cy="50" r="7"/><circle cx="245" cy="80" r="7"/><circle cx="215" cy="110" r="7"/></g>
<rect x="380" y="40" width="106" height="44" fill="#1e3a8a"/><rect x="380" y="90" width="106" height="28" fill="#7c2d12"/>
<g fill="#60a5fa"><circle cx="396" cy="52" r="6"/><circle cx="416" cy="52" r="6"/><circle cx="436" cy="52" r="6"/><circle cx="456" cy="52" r="6"/><circle cx="396" cy="72" r="6"/><circle cx="416" cy="72" r="6"/></g>
<g fill="#fdba74"><circle cx="396" cy="104" r="6"/><circle cx="416" cy="104" r="6"/></g>
<g fill="#34d399"><circle cx="436" cy="72" r="6"/><circle cx="456" cy="72" r="6"/><circle cx="436" cy="104" r="6"/></g>
<text x="87" y="150" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">equal chance</text>
<text x="260" y="150" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">regular intervals</text>
<text x="433" y="150" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">in proportion</text>
</svg>"""

D_TALLY = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<text x="20" y="22" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fde047">Class 8C: main way to school (28 students)</text>
<path d="M40 175 H500" stroke="#94a3b8" stroke-width="2"/>
<rect x="60" y="85" width="56" height="90" fill="#38bdf8"/>
<rect x="150" y="105" width="56" height="70" fill="#34d399"/>
<rect x="240" y="115" width="56" height="60" fill="#fbbf24"/>
<rect x="330" y="135" width="56" height="40" fill="#f472b6"/>
<rect x="420" y="155" width="56" height="20" fill="#a78bfa"/>
<g font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">
<text x="88" y="78">9</text><text x="178" y="98">7</text><text x="268" y="108">6</text><text x="358" y="128">4</text><text x="448" y="148">2</text>
</g>
<g font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">
<text x="88" y="193">MRT</text><text x="178" y="193">Bus</text><text x="268" y="193">Walk/cycle</text><text x="358" y="193">Car</text><text x="448" y="193">Other</text>
</g>
<path d="M60 40 v24 M70 40 v24 M80 40 v24 M90 40 v24 M54 60 L96 44" stroke="#e2e8f0" stroke-width="3"/>
<text x="110" y="58" font-family="sans-serif" font-size="14" fill="#e2e8f0">= 5 (five-bar gate)</text>
</svg>"""

D_PYRAMIDS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<text x="130" y="20" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fde047" text-anchor="middle">NIGER-TYPE (youthful)</text>
<text x="390" y="20" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fde047" text-anchor="middle">JAPAN-TYPE (ageing)</text>
<g fill="#60a5fa">
<rect x="58" y="170" width="70" height="18"/><rect x="74" y="150" width="54" height="18"/><rect x="90" y="130" width="38" height="18"/>
<rect x="102" y="110" width="26" height="18"/><rect x="112" y="90" width="16" height="18"/><rect x="118" y="70" width="10" height="18"/><rect x="123" y="50" width="5" height="18"/>
<rect x="358" y="170" width="14" height="18"/><rect x="354" y="150" width="18" height="18"/><rect x="350" y="130" width="22" height="18"/>
<rect x="344" y="110" width="28" height="18"/><rect x="344" y="90" width="28" height="18"/><rect x="348" y="70" width="24" height="18"/><rect x="358" y="50" width="14" height="18"/>
</g>
<g fill="#f472b6">
<rect x="132" y="170" width="68" height="18"/><rect x="132" y="150" width="54" height="18"/><rect x="132" y="130" width="38" height="18"/>
<rect x="132" y="110" width="27" height="18"/><rect x="132" y="90" width="17" height="18"/><rect x="132" y="70" width="11" height="18"/><rect x="132" y="50" width="6" height="18"/>
<rect x="376" y="170" width="14" height="18"/><rect x="376" y="150" width="18" height="18"/><rect x="376" y="130" width="22" height="18"/>
<rect x="376" y="110" width="28" height="18"/><rect x="376" y="90" width="28" height="18"/><rect x="376" y="70" width="28" height="18"/><rect x="376" y="50" width="26" height="18"/>
</g>
<text x="130" y="208" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">wide base: many births</text>
<text x="390" y="208" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">narrow base, wide top</text>
<text x="30" y="60" font-family="sans-serif" font-size="13" fill="#60a5fa">M</text><text x="222" y="60" font-family="sans-serif" font-size="13" fill="#f472b6">F</text>
<text x="300" y="60" font-family="sans-serif" font-size="13" fill="#60a5fa">M</text><text x="470" y="60" font-family="sans-serif" font-size="13" fill="#f472b6">F</text>
<text x="260" y="186" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">0–9</text>
<text x="260" y="66" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">60+</text>
</svg>"""

D_DEPEND = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170">
<rect width="520" height="170" fill="#0f172a"/>
<text x="20" y="22" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fde047">Age structure, about 2023 (rounded)</text>
<text x="20" y="62" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff">Niger</text>
<rect x="90" y="44" width="196" height="28" fill="#38bdf8"/><rect x="286" y="44" width="192" height="28" fill="#34d399"/><rect x="478" y="44" width="12" height="28" fill="#f472b6"/>
<text x="188" y="64" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">0–14: 49%</text>
<text x="382" y="64" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">15–64: 48%</text>
<text x="20" y="112" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff">Japan</text>
<rect x="90" y="94" width="44" height="28" fill="#38bdf8"/><rect x="134" y="94" width="240" height="28" fill="#34d399"/><rect x="374" y="94" width="116" height="28" fill="#f472b6"/>
<text x="254" y="114" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">15–64: 60%</text>
<text x="432" y="114" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">65+: 29%</text>
<text x="90" y="152" font-family="sans-serif" font-size="14" fill="#38bdf8">■ young</text>
<text x="200" y="152" font-family="sans-serif" font-size="14" fill="#34d399">■ working age</text>
<text x="350" y="152" font-family="sans-serif" font-size="14" fill="#f472b6">■ elderly</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 280), ("dad", 700)])
L("dad", "Tara. I have just learned something shocking. Singapore ran a census in twenty twenty. And nobody came to count me.", mood="shock", shot="close", prop="tablet")
L("tara", "Most people weren't visited, Dad. It's not personal.", mood="deadpan", shot="close")
L("dad", "It feels personal. I am a very countable man. On a good day, I'm one and a half.", mood="annoyed", shot="close")
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("mum", "Good news! A survey company will pay us five dollars in vouchers for fifty questions!", mood="excited", shot="close", prop="phone")
L("tara", "That's ten cents a question, Mum.", mood="deadpan", shot="close")
L("mum", "Your father gives his opinions away for free!", mood="smug", shot="close")
L("dad", "Enough. If the government won't count me, I will count everyone. Starting with the hawker centre.", mood="determined", shot="close", prop="book")
freeze("THE RAO CENSUS", 2.4, narrator="Narrator: Population of the Rao Census so far: one. Him.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "I have a class census due on Friday. My father has made it his midlife crisis.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WHAT IS DEMOGRAPHY? ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Time to open the drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who dares open the drawer? Ah. The Raos. Is your father counting things again? He once counted to twenty and asked for a medal.", mood="bored", shot="close")
L("tara", "Globo, Dad's angry nobody counted him in the census.", mood="worried", shot="two")
L("globo", "Somebody did count him. He just didn't notice. Like most things.", mood="eyeroll", shot="close", gap=0.4)

confess("globo", "GLOBO · Retired Classroom Globe · Lives In The Junk Drawer")
L("globo", "Good evening. I am Globo. My label still says the world has five billion people. I have been wrong for decades. I'm at peace with it.", mood="smug", gap=0.5)

scene("living", [("tara", 260), ("dad", 600), ("globo", 960)])
L("globo", "Demography is the study of human populations. How many people, where, how old, and how that changes through births, deaths and migration.", mood="teach", shot="close",
  boardClear=True, board="DEMOGRAPHY = study of populations")
L("tara", "And a demographer collects that data so governments can plan. Schools, MRT lines, care homes.", mood="happy", shot="close",
  board="Change: BIRTHS · DEATHS · MIGRATION")
L("globo", "A census is an official count of everyone in a country, usually every ten years. It records ages, jobs and housing too.", mood="teach", shot="close",
  board="CENSUS: count EVERYONE, about every 10 yrs")
L("dad", "So why didn't they knock on my door?", mood="annoyed", shot="close")
L("globo", "Because the government already knows about you. Births, deaths, addresses. Singapore adds a large sample survey. A register based census.", mood="teach", shot="close",
  boardClear=True, board="SG Census 2020: REGISTER-BASED")
L("globo", "In twenty twenty, roughly one hundred and fifty thousand households were surveyed. It found about four point zero four million residents.", mood="teach", shot="close",
  board="Records + survey of ~150,000 households")
L("tara", "And the median age of residents rose from about thirty seven to about forty one and a half. Singapore is ageing.", mood="thinking", shot="close",
  board="~4.04 million residents · median age ~41.5")
L("globo", "Asking everyone is a census. Asking a fair few is a sample survey. Cheaper, but it must be representative.", mood="teach", shot="close",
  boardClear=True, board="SAMPLE: a few stand in for everyone", diagram=D_SAMPLE)
L("globo", "Random, everyone has an equal chance. Systematic, every tenth household on a list. Stratified, in proportion to groups, like age groups.", mood="teach", shot="close",
  board="Random · Systematic · Stratified")
L("tara", "And all data has limits. Some people get missed, some give wrong answers, and after ten years it's out of date.", mood="thinking", shot="close",
  board="Limits: missed · wrong answers · dated")
L("dad", "Then I shall fix this. With a clipboard.", mood="determined", shot="close", prop="book")

confess("dad", "VIKRAM RAO · Dad · Self-Described Data Genius")
L("dad", "Big data is the future. And I have the biggest clipboard in Toa Payoh.", mood="smug", gap=0.6)

# ---------------- ACT 2: RUNNING A CLASS CENSUS ----------------
card("MEANWHILE, AT THE HAWKER CENTRE", "The Rao Census, day one", 2.4)
scene("hawker", [("dad", 220), ("tara", 460), ("uncle", 1000)])
L("dad", "Uncle Hock! Question one. Don't you agree that I'm the most handsome man in this hawker centre?", mood="smug", shot="close", prop="book")
L("uncle", "Is that a question or a threat?", mood="deadpan", shot="close")
poof("globo", 720)
L("globo", "That is a leading question. It pushes people towards one answer. Your data is now a soggy chip.", mood="eyeroll", shot="close",
  boardClear=True, board="✘ LEADING question: pushes an answer")
L("dad", "Fine. Question two. How do you get here? He wrote, bus, sometimes walk, depends.", mood="thinking", shot="close")
L("tara", "Then you can't count it. Use a closed question. Main way here? Tick one box.", mood="teach", shot="close",
  board="✔ CLOSED: tick one box")
L("globo", "The boxes must cover everyone and not overlap. One person, one box.", mood="teach", shot="close",
  board="Boxes cover everyone, no overlaps")
L("dad", "Question three. What is your salary, your weight, and your Singpass password?", mood="excited", shot="close")
sfx("buzzer")
L("globo", "Ethics. Ask for consent. Let people skip. Keep it anonymous, and store it safely.", mood="shock", shot="close",
  boardClear=True, board="ETHICS: consent · anonymous · safe")

card("NEXT DAY, CLASS 8C", "Tara's census, done properly", 2.2)
scene("classroom", [("teacher", 300), ("tara", 640)])
L("teacher", "Tara, show us your class census. This is primary data. You collected it yourself.", mood="happy", shot="close",
  boardClear=True, board="PRIMARY = collect it · SECONDARY = published")
L("tara", "Twenty eight students. I counted with five bar gates. MRT nine, bus seven, walk six, car four, other two.", mood="teach", shot="close",
  board="Tally → frequency table → chart", diagram=D_TALLY)
L("tara", "Nine divided by twenty eight, times one hundred, is about thirty two point one percent who take the MRT.", mood="happy", shot="close",
  board="MRT: 9 ÷ 28 × 100 ≈ 32.1%")
poof("globo", 960)
L("globo", "And can you say that thirty two percent of all students in Singapore take the MRT?", mood="smug", shot="close")
L("tara", "No. Twenty eight people, one class, one day. A small sample can't be generalised to the whole school, let alone Singapore.", mood="deadpan", shot="close",
  boardClear=True, board="Small sample ≠ whole country")

# ---------------- ACT 3: PYRAMIDS AND DEPENDENCY ----------------
card("THAT EVENING", "Mum has discovered pyramids", 2.2)
scene("living", [("mum", 300), ("tara", 620), ("globo", 960)])
L("mum", "Tara, your homework says population pyramid. I know pyramids. I bought into one selling face cream.", mood="excited", shot="close", prop="tablet")
L("tara", "Mum. That's a pyramid scheme. This is a graph.", mood="deadpan", shot="close")
L("globo", "A population pyramid is two bar charts back to back. Males usually left, females right. Each bar is a five year age group, a cohort.", mood="teach", shot="close",
  boardClear=True, board="PYRAMID: age (up) · sex (left/right)")
L("globo", "Niger has an expansive pyramid. Wide base, narrow top. About half are under fifteen.", mood="teach", shot="close",
  boardClear=True, board="EXPANSIVE (youthful): Niger", diagram=D_PYRAMIDS)
L("tara", "Japan is constrictive. Narrow base, wide top. About twenty nine percent are sixty five or over.", mood="thinking", shot="close",
  board="CONSTRICTIVE (ageing): Japan, SG")
L("globo", "And Singapore is constrictive too. Its resident fertility rate was about zero point nine seven in twenty twenty three.", mood="teach", shot="close",
  board="SG resident TFR ~0.97 (2023)")
L("globo", "Then look for bulges and notches. A bulge is a baby boom, or immigration. Qatar has a huge bulge of male migrant workers.", mood="teach", shot="close",
  boardClear=True, board="BULGE: baby boom or immigration")
L("globo", "A notch comes from war, famine, emigration or a sudden drop in births. In Japan in nineteen sixty six, a superstition cut births by about a quarter.", mood="teach", shot="close",
  board="NOTCH: war · famine · emigration · births ↓")


scene("living", [("tara", 260), ("dad", 600), ("globo", 960)])
L("dad", "I've been thinking. I support this family. So I'm the dependant.", mood="smug", shot="close")
L("globo", "No. You're the one they all depend on. Or so you claim.", mood="eyeroll", shot="close")
L("globo", "Young dependants are aged zero to fourteen. Working age is fifteen to sixty four. Elderly dependants are sixty five and over.", mood="teach", shot="close",
  boardClear=True, board="Young 0–14 · Working 15–64 · Elderly 65+")
L("globo", "The dependency ratio is young plus elderly, divided by working age, times one hundred. Dependants per hundred workers.", mood="teach", shot="close",
  board="Ratio = (0–14 + 65+) ÷ (15–64) × 100")
L("tara", "So for Niger, forty nine plus three is fifty two. Divided by forty eight, times a hundred. About one hundred and eight.", mood="thinking", shot="close",
  boardClear=True, board="Niger: (49 + 3) ÷ 48 × 100 ≈ 108", diagram=D_DEPEND)
L("globo", "More dependants than workers. Japan's is about sixty seven. Lower, but mostly older people.", mood="teach", shot="close",
  board="Japan: (11 + 29) ÷ 60 × 100 ≈ 67")
L("tara", "Different problems. Niger needs schools and jobs. Japan needs pensions and carers.", mood="happy", shot="close",
  board="Young → schools · Old → pensions, care")
L("dad", "And Singapore?", mood="worried", shot="close")
L("globo", "Singapore is planning ahead. Around nineteen seventy, over ten working citizens for each older citizen. Now, about four.", mood="teach", shot="close",
  boardClear=True, board="SG: >10 workers per elderly → about 4")
L("globo", "So the retirement age rose to sixty three in twenty twenty two, sixty four in twenty twenty six, with sixty five planned by twenty thirty.", mood="teach", shot="close",
  board="Retirement age: 63 → 64 → 65 by 2030")
L("tara", "It's rough, though. Not every adult works, and many older people do.", mood="thinking", shot="close",
  board="Rough measure: not all 15–64s work")
L("dad", "Like Uncle Hock. He's been sixty five for about ten years.", mood="thinking", shot="close", gap=0.4)

confess("globo", "GLOBO · Recap Globe · Counting Down To The Drawer")
L("globo", "Recap. One. Demography studies populations. Singapore's census is register based.", mood="teach", boardClear=True, board="1. Census = everyone · SG register-based")
L("globo", "Two. A sample must be fair. Random, systematic or stratified.", mood="teach", board="2. Sample: random · systematic · stratified")
L("globo", "Three. Closed questions, consent, and small samples can't speak for everyone.", mood="teach", board="3. Closed Qs · ethics · small sample limits")
L("globo", "Four. Expansive pyramids are youthful, like Niger. Constrictive ones are ageing, like Japan and Singapore.", mood="teach", board="4. Expansive = Niger · Constrictive = Japan")
L("globo", "Five. Dependency ratio is young plus elderly, over working age, times a hundred.", mood="smug", board="5. (young + elderly) ÷ working × 100", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "The Rao Census is complete. One hundred percent of respondents agree I am handsome.", mood="smug", shot="close", prop="book")
L("tara", "How many respondents?", mood="deadpan", shot="close")
L("dad", "One.", mood="smug", shot="close")
L("mum", "And I got my five dollar voucher. It expired yesterday.", mood="sad", shot="close")
sfx("trombone")
L("globo", "A sample of one, and a voucher worth zero. This family is a demographer's nightmare.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "What is a register-based census?", "RECORDS+SURVEY", "births, deaths, IDs, addresses + survey (SG 2020)",
  "Question one. What is a register based census, like Singapore's in twenty twenty?",
  "One that uses government records, like births, deaths and addresses, plus a large sample survey.")
challenge(2, "A pyramid has a wide base and a narrow top. Youthful or ageing?", "YOUTHFUL", "many births, shorter lives → e.g. Niger",
  "Question two. A pyramid has a wide base and a narrow top. Is that population youthful, or ageing?",
  "Youthful. An expansive pyramid, like Niger.")
challenge(3, "3,000 aged 0–14, 10,000 aged 15–64, 2,000 aged 65+. Dependency ratio?", "50", "(3,000 + 2,000) ÷ 10,000 × 100 = 50",
  "Question three. A town has three thousand children, ten thousand people of working age, and two thousand people aged sixty five or over. What is its dependency ratio?",
  "Fifty. Five thousand dependants, divided by ten thousand, times one hundred.")
end_card()
