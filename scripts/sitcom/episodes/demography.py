# "Off The Map" (a Claude Sitcom) S01E03 "Pyramid Scheme" (Topic: Demography)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="demography",
    logline="Dad joins a 'pyramid scheme' and Mum runs a household census that Nani refuses to answer. Atlas spins them to the Pyramids of Giza, where a demographer draws the only pyramids worth investing in: population pyramids.",
    names={"guest": "DR LAYLA HASSAN"},
    display={"H D B": "HDB", "D T M": "DTM", "U K": "UK", "A B S T": "ABST"},
)

PYRAMID = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 260">'
    '<text x="140" y="26" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#7dd3fc">Males</text>'
    '<text x="380" y="26" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fca5a5">Females</text>'
    '<g fill="#7dd3fc">'
    '<rect x="110" y="200" width="150" height="18"/><rect x="125" y="180" width="135" height="18"/>'
    '<rect x="140" y="160" width="120" height="18"/><rect x="120" y="140" width="140" height="18"/>'
    '<rect x="165" y="120" width="95" height="18"/><rect x="188" y="100" width="72" height="18"/>'
    '<rect x="210" y="80" width="50" height="18"/><rect x="232" y="60" width="28" height="18"/>'
    '<rect x="248" y="40" width="12" height="18"/></g>'
    '<g fill="#fca5a5">'
    '<rect x="260" y="200" width="148" height="18"/><rect x="260" y="180" width="133" height="18"/>'
    '<rect x="260" y="160" width="119" height="18"/><rect x="260" y="140" width="138" height="18"/>'
    '<rect x="260" y="120" width="96" height="18"/><rect x="260" y="100" width="75" height="18"/>'
    '<rect x="260" y="80" width="54" height="18"/><rect x="260" y="60" width="32" height="18"/>'
    '<rect x="260" y="40" width="16" height="18"/></g>'
    '<line x1="100" y1="222" x2="420" y2="222" stroke="#94a3b8" stroke-width="2"/>'
    '<text x="50" y="215" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#cbd5e1">0–4</text>'
    '<text x="50" y="55" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#cbd5e1">80+</text>'
    '<text x="414" y="215" font-family="sans-serif" font-size="18" fill="#fde047">← wide base</text>'
    '<text x="404" y="155" font-family="sans-serif" font-size="18" fill="#fde047">← bulge</text>'
    '<text x="284" y="55" font-family="sans-serif" font-size="18" fill="#fde047">← apex (elderly)</text>'
    '<text x="260" y="250" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">% of total population</text>'
    '</svg>'
)

RATIO = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<rect x="10" y="10" width="160" height="70" rx="10" fill="#78350f"/>'
    '<text x="90" y="42" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#fde68a">0–14</text>'
    '<text x="90" y="68" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fde68a">young</text>'
    '<rect x="180" y="10" width="160" height="70" rx="10" fill="#14532d"/>'
    '<text x="260" y="42" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#bbf7d0">15–64</text>'
    '<text x="260" y="68" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#bbf7d0">working age</text>'
    '<rect x="350" y="10" width="160" height="70" rx="10" fill="#4c1d95"/>'
    '<text x="430" y="42" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#ddd6fe">65+</text>'
    '<text x="430" y="68" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#ddd6fe">elderly</text>'
    '<text x="240" y="118" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#f8fafc">(0–14) + (65+)</text>'
    '<line x1="130" y1="130" x2="350" y2="130" stroke="#f8fafc" stroke-width="3"/>'
    '<text x="240" y="156" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#f8fafc">(15–64)</text>'
    '<text x="370" y="138" font-family="sans-serif" font-size="22" fill="#fde047">× 100</text>'
    '<text x="260" y="190" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#86efac">= dependants per 100 working-age people</text>'
    '</svg>'
)

SHAPES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">'
    '<g stroke-width="2">'
    '<polygon points="10,150 55,30 100,150" fill="#fde047" stroke="#fef9c3"/>'
    '<polygon points="115,150 125,100 140,55 160,30 180,55 195,100 205,150" fill="#fdba74" stroke="#ffedd5"/>'
    '<polygon points="227,150 225,90 231,50 253,30 277,30 299,50 305,90 303,150" fill="#7dd3fc" stroke="#e0f2fe"/>'
    '<polygon points="345,150 335,100 328,60 345,30 395,30 412,60 405,100 395,150" fill="#c4b5fd" stroke="#ede9fe"/>'
    '<polygon points="448,150 430,105 426,70 442,30 498,30 514,70 510,105 492,150" fill="#fca5a5" stroke="#fee2e2"/>'
    '</g>'
    '<g font-family="sans-serif" font-size="19" fill="#f8fafc" text-anchor="middle">'
    '<text x="55" y="178">Niger</text><text x="160" y="178">India</text><text x="265" y="178">UK</text>'
    '<text x="370" y="178">Japan</text><text x="470" y="178">Singapore</text></g>'
    '<g font-family="sans-serif" font-size="18" fill="#86efac" text-anchor="middle">'
    '<text x="55" y="206">TFR ~6</text><text x="160" y="206">TFR ~2</text><text x="265" y="206">~1.4</text>'
    '<text x="370" y="206">~1.2</text><text x="470" y="206">&lt;1</text></g>'
    '</svg>'
)

DTM = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 260">'
    '<line x1="40" y1="20" x2="40" y2="200" stroke="#94a3b8" stroke-width="2"/>'
    '<line x1="40" y1="200" x2="510" y2="200" stroke="#94a3b8" stroke-width="2"/>'
    '<g stroke="#475569" stroke-dasharray="4,4"><line x1="134" y1="20" x2="134" y2="200"/>'
    '<line x1="228" y1="20" x2="228" y2="200"/><line x1="322" y1="20" x2="322" y2="200"/>'
    '<line x1="416" y1="20" x2="416" y2="200"/></g>'
    '<g font-family="sans-serif" font-size="18" fill="#f8fafc" text-anchor="middle">'
    '<text x="87" y="222">1</text><text x="181" y="222">2</text><text x="275" y="222">3</text>'
    '<text x="369" y="222">4</text><text x="463" y="222">5</text></g>'
    '<path d="M40,50 L62,40 L87,52 L110,42 L134,48 L228,48 Q262,95 322,160 L416,164 L450,178 L510,184" fill="none" stroke="#7dd3fc" stroke-width="4"/>'
    '<path d="M40,46 L62,58 L87,40 L110,56 L134,50 Q181,140 228,155 L322,168 L416,170 L450,168 L510,170" fill="none" stroke="#fca5a5" stroke-width="4"/>'
    '<path d="M40,190 L134,186 Q228,170 290,110 L416,80 L510,92" fill="none" stroke="#86efac" stroke-width="3" stroke-dasharray="8,5"/>'
    '<text x="181" y="92" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">GAP</text>'
    '<line x1="40" y1="246" x2="62" y2="246" stroke="#7dd3fc" stroke-width="4"/>'
    '<text x="68" y="252" font-family="sans-serif" font-size="18" fill="#f8fafc">Birth rate</text>'
    '<line x1="180" y1="246" x2="202" y2="246" stroke="#fca5a5" stroke-width="4"/>'
    '<text x="208" y="252" font-family="sans-serif" font-size="18" fill="#f8fafc">Death rate</text>'
    '<line x1="330" y1="246" x2="352" y2="246" stroke="#86efac" stroke-width="3" stroke-dasharray="8,5"/>'
    '<text x="358" y="252" font-family="sans-serif" font-size="18" fill="#f8fafc">Population</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("mum", 240), ("dad", 480), ("priya", 720), ("nani", 960)])
L("dad", "Family. Your father is about to become rich. I have joined a pyramid.", mood="excited", shot="close", prop="phone")
L("priya", "A pyramid scheme.", mood="deadpan", shot="close")
L("dad", "Exactly! I recruit two friends, they recruit two friends. Like a pyramid. Ancient. Solid.", mood="smug", shot="close")
L("priya", "Dad, those always collapse. The people at the bottom pay for the people at the top.", mood="deadpan", shot="close")
L("dad", "Then I shall be at the top. Like a pharaoh.", mood="smug", shot="close", gap=0.3)
L("mum", "Nobody invests in anything until I finish my household census. Name, age, sex. Nani, you first.", mood="determined", shot="close", prop="tablet")
L("nani", "Write classified.", mood="deadpan", shot="close")
L("mum", "Nani, I need a number.", mood="annoyed", shot="close")
L("nani", "Thirty nine. I have been thirty nine since nineteen eighty.", mood="smug", shot="close")
freeze("NANI'S AGE: CLASSIFIED", 2.6, narrator="Narrator: Nani has been thirty nine for forty six years.")
confess("priya", "PRIYA · 12 · Only Honest Census Respondent")
L("priya", "Dad is investing in a pyramid, and Mum is running a census my grandmother is lying to.", mood="deadpan")
L("priya", "Luckily, we own a globe who only cares about one kind of pyramid.", mood="smug", gap=0.6)

title()

# ---------------- ACT 1: WHAT IS A CENSUS? ----------------
scene("living", [("priya", 260), ("mum", 520)])
L("priya", "Atlas! Mum is doing a census and Nani won't cooperate.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 900)
L("atlas", "A census! At last, standards. It's an official count of every person in a country, on one day, with information about them.", mood="teach", shot="close",
  boardClear=True, board="CENSUS = count of everyone, on one day")
L("atlas", "Age, sex, household, jobs, how you travel, housing. H D B flat, condo, or landed.", mood="teach", shot="close",
  board="Age · sex · household · jobs · housing")
L("mum", "And why does the government need all that? Apart from being nosy.", mood="thinking", shot="close")
L("atlas", "Planning. Count the three year olds today, and you know how many Primary One places you need in four years.", mood="teach", shot="close",
  board="WHY? Plan schools, hospitals, housing")
L("priya", "Singapore's is run by SingStat, the Department of Statistics. Every ten years. Latest, Census twenty twenty.", mood="thinking", shot="close",
  boardClear=True, board="Singapore: SingStat, every 10 years")
L("atlas", "The first was in eighteen seventy one. Since two thousand, it uses government records plus a big sample survey.", mood="teach", shot="close",
  board="Registers + a large sample survey")
L("atlas", "Problems? Expensive, soon out of date, people get missed, and some give wrong answers.", mood="teach", shot="close",
  board="Problems: cost, out of date, missed people")
L("nani", "Thirty nine.", mood="smug", shot="close", offstage=True)
L("atlas", "Case in point.", mood="eyeroll", shot="close", gap=0.4)
L("priya", "Census twenty twenty found the median age of residents rose from thirty seven point four to forty one point five.", mood="thinking", shot="close",
  boardClear=True, board="Median age: 37.4 (2010) → 41.5 (2020)")
L("atlas", "And those aged sixty five and over went from about nine percent to about fifteen. Singapore is getting older. Fast.", mood="teach", shot="close",
  board="Aged 65+: about 9% → about 15%")

confess("atlas", "ATLAS · Desk Globe · Dropped Eleven Times")
L("atlas", "In every census, I am listed as furniture. Once as a lamp. A lamp has never been dropped on Australia eleven times.", mood="bored", gap=0.5)

# ---------------- ACT 2: GIZA ----------------
scene("living", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("dad", "Enough counting. I want real pyramids. With money in them.", mood="determined", shot="close")
L("atlas", "Fine. Hold on to something. Not me. I bruise.", mood="smug", shot="close")
sfx("whoosh")
scene("desert", [("priya", 260), ("dad", 520), ("atlas", 820)], caption="THE PYRAMIDS OF GIZA · Egypt · Wrong kind of pyramid")
L("dad", "Now THAT is a pyramid. How much to buy in?", mood="shock", shot="close")
L("atlas", "You are about four and a half thousand years too late.", mood="deadpan", shot="close", gap=0.3)
sfx("door")
poof("guest", 1080)
L("guest", "Hello! I'm Dr Layla Hassan, a demographer from Cairo. These are only the second most useful pyramids.", mood="happy", shot="close")
L("priya", "What are the most useful?", mood="neutral", shot="two")
L("guest", "Population pyramids. Males on the left, females on the right. Young people at the bottom, old at the top.", mood="teach", shot="close",
  boardClear=True, diagram=PYRAMID)
L("guest", "Each bar is a cohort, usually five years wide. And check the axis first. Percentage, or real numbers?", mood="teach", shot="close",
  board="Males left · females right · 5-yr cohorts")
L("guest", "Percentage shows structure, not size.", mood="teach", shot="close",
  board="CHECK THE AXIS: % or numbers?")
L("atlas", "I call it A B S T. Axis, base, sides, top. Then hunt for bulges and indents.", mood="smug", shot="close",
  board="A·B·S·T = Axis, Base, Sides, Top")
L("guest", "Wide base, high birth rate. Sides sloping in fast, high death rate. Wide top, an ageing population.", mood="teach", shot="close",
  boardClear=True, board="Wide base = high birth rate")
L("guest", "A bulge is a baby boom, or many young immigrants. An indent is a missing group. War, famine, or falling births.", mood="teach", shot="close",
  board="Wide top = long lives, ageing")
L("dad", "So a bulge is good? Like a bulging wallet?", mood="excited", shot="close",
  board="Bulge = baby boom · Indent = war, famine")
L("guest", "A bulge just moves up, five years at a time. Today's baby boomers are tomorrow's pensioners.", mood="neutral", shot="close")
L("guest", "Real countries. Niger is a true pyramid. About six children per woman, and about half the people under fifteen.", mood="teach", shot="close",
  boardClear=True, diagram=SHAPES)
L("guest", "India, about one point four billion, the most populous country since twenty twenty three. Fertility about two. A beehive.", mood="teach", shot="close")
L("priya", "The U K is a column. Narrow base, straight sides, about nineteen percent aged sixty five plus.", mood="thinking", shot="close")
L("guest", "Japan is top heavy. Fertility about one point two, about twenty nine percent over sixty five, and shrinking since about twenty ten.", mood="teach", shot="close")
L("atlas", "Singapore is a vase. Resident fertility, zero point nine seven in twenty twenty four. Below one child per woman.", mood="teach", shot="close")
L("dad", "So fewer people join at the bottom, and more need supporting at the top.", mood="thinking", shot="close")
L("priya", "Dad. You just explained why your scheme collapses.", mood="shock", shot="close", gap=0.4)

# ---------------- THE DTM ----------------
L("guest", "The shapes change over time. That is the Demographic Transition Model. The D T M.", mood="teach", shot="close",
  boardClear=True, diagram=DTM)
L("guest", "Stage one, births and deaths both high. Stage two, deaths fall with clean water and vaccines, births stay high. Rapid growth. Niger.", mood="teach", shot="close",
  board="1 Both high · 2 Deaths fall · 3 Births fall")
L("atlas", "D before B. Say the birth rate falls in stage two and the examiner weeps.", mood="eyeroll", shot="close")
L("guest", "Stage three, births fall too. Education, jobs for women, contraception, cities. India. Stage four, both low. The U K.", mood="teach", shot="close",
  board="4 Both low · 5 Births below deaths")
L("guest", "Stage five, births fall below deaths. The population shrinks and ages. Japan.", mood="teach", shot="close",
  board="Niger 2 · India 3 · UK 4 · Japan 5")
L("guest", "It's only a model. Based on Europe, no migration, no timescale. The U K took two hundred years. Singapore, about fifty.", mood="happy", shot="close")

confess("dad", "DAD · Explorer · Has Been To Forty Airports")
L("dad", "I have been to forty countries. Well. Forty airports. Every stage of the D T M. Mostly duty free.", mood="smug", gap=0.6)

# ---------------- ACT 3: CLASS CENSUS ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad has sand in places no census asks about.", 2.4)
scene("classroom", [("teacher", 260), ("priya", 560)])
L("teacher", "Class census. First, a hypothesis you can test. Then a questionnaire with closed questions. Easy to count.", mood="teach", shot="close",
  boardClear=True, board="Hypothesis → questionnaire (closed Qs)")
L("priya", "Open questions give detail but are hard to analyse. No leading questions. Keep it anonymous.", mood="thinking", shot="close",
  board="Not leading · keep it anonymous")
L("teacher", "Sampling. Random, names from a hat. Systematic, every third name. Stratified, groups in the right proportions.", mood="teach", shot="close",
  board="Sample: random, systematic, stratified")
sfx("whoosh")
poof("atlas", 940)
L("teacher", "Who brought a globe to class?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)
L("teacher", "Your households, one hundred people. Thirty aged zero to fourteen, ten aged sixty five plus, sixty aged fifteen to sixty four.", mood="teach", shot="close",
  boardClear=True, diagram=RATIO)
L("atlas", "Dependency ratio. Kids plus grandparents, over the parents, times one hundred.", mood="teach", shot="close",
  board="(30 + 10) ÷ 60 × 100")
L("priya", "Forty divided by sixty, times one hundred. Sixty six point seven.", mood="thinking", shot="close", prop="calculator",
  board="= 66.7 dependants per 100 workers")
L("teacher", "Sixty seven dependants per hundred workers. Never put the workers on top.", mood="teach", shot="close")
L("priya", "And one class is a small sample. It can't represent all of Singapore.", mood="deadpan", shot="close")
L("teacher", "That is evaluation. Free marks.", mood="happy", shot="close", gap=0.3)

# ---------------- AGEING (HAWKER) ----------------
scene("hawker", [("priya", 260), ("nani", 520), ("uncle", 1000)])
poof("atlas", 760)
L("uncle", "Ten years ago my regulars were office workers. Now half are uncles and aunties.", mood="happy", shot="close")
L("atlas", "Ageing. Fewer births, longer lives, about eighty three years. One in five residents is now sixty five plus.", mood="teach", shot="close",
  boardClear=True, board="Ageing = fewer births + longer lives")
L("priya", "And about one in four citizens by twenty thirty.", mood="worried", shot="close",
  board="65+: 1 in 5 residents · 1 in 4 citizens 2030")
L("priya", "Challenges. Healthcare, fewer workers, pensions. Responses. Work longer, the Baby Bonus, and immigration.", mood="thinking", shot="close",
  board="Work longer · Baby Bonus · immigration")
L("nani", "And opportunities. Who minds the grandchildren? Who volunteers? Who spends at hawker stalls? We are the silver economy.", mood="smug", shot="close")
L("uncle", "Correct. Aunty, your kopi is on the house.", mood="happy", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Not A Lamp")
L("atlas", "Recap. First. A census counts everyone on one day, usually every ten years, to plan services.", mood="teach",
  boardClear=True, board="1. Census: all, one day, every 10 years")
L("atlas", "Second. Check the axis. Wide base, high birth rate. Wide top, ageing.", mood="teach",
  board="2. Pyramid: axis, base, sides, top")
L("atlas", "Third. Dependency ratio. Young plus elderly, over working age, times one hundred.", mood="teach",
  board="3. (0–14 + 65+) ÷ (15–64) × 100")
L("atlas", "Fourth. The D T M. Deaths fall in stage two, births in stage three.", mood="teach",
  board="4. DTM: D before B · Niger 2 → Japan 5")
L("atlas", "And finally. Ageing brings challenges and opportunities. Ask any grandmother. Carefully.", mood="smug",
  board="5. Ageing: challenges AND opportunities", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("mum", 240), ("dad", 480), ("nani", 720), ("atlas", 1000)])
L("mum", "One box left. Nani. Your age. Final answer.", mood="determined", shot="close", prop="tablet")
L("nani", "Thirty nine.", mood="smug", shot="close")
L("atlas", "You told me thirty nine when the Beatles were still together.", mood="deadpan", shot="close")
L("nani", "Censuses have problems. Some people give wrong answers.", mood="smug", shot="close")
L("dad", "Good news. I've cancelled the pyramid scheme. I'm investing in a vase.", mood="excited", shot="close")
sfx("trombone")
L("mum", "Write that down. Data quality issue.", mood="eyeroll", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Nani gives you her age. It is 39.", 3.0)
challenge(1, "A country has 40% aged 0–14, 5% aged 65+ and 55% aged 15–64. Calculate the dependency ratio.", "About 81.8",
  "(40 + 5) ÷ 55 × 100 = 81.8",
  "Question one. Forty percent aged zero to fourteen, five percent sixty five plus, fifty five percent fifteen to sixty four. What is the dependency ratio?",
  "About eighty one point eight. Forty five divided by fifty five, times one hundred.")
challenge(2, "In which DTM stage does the death rate fall rapidly while the birth rate stays high?", "Stage 2",
  "D before B: deaths fall first",
  "Question two. In which stage of the D T M does the death rate fall fast while the birth rate stays high?",
  "Stage two. Deaths fall first. Births only fall in stage three.")
challenge(3, "A pyramid has a very wide base. What does it tell you about the birth rate?", "High birth rate",
  "Wide base = many young children",
  "Question three. A population pyramid has a very wide base. What does that tell you about the birth rate?",
  "It is high. Lots of young children at the bottom of the pyramid.")
end_card()
