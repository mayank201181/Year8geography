# "Off The Map" (a Claude Sitcom) S01E05 "One Is The Loneliest Number" (Topic: Over-, Under-population & Policies)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="population-policies",
    logline="Dad declares the family officially 'anti-natalist' because Priya is an only child. Nani remembers Singapore's 'Stop at Two' posters and the U-turn that followed, and Atlas spins everyone to Shanghai, where a demographer explains China's One Child Policy and the 4-2-1 problem.",
    names={"guest2": "DR LIU"},
    display={"T F R": "TFR", "C P F": "CPF", "Peel": "PEEL"},
)

OPTIMUM = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">'
    '<line x1="60" y1="190" x2="505" y2="190" stroke="#f8fafc" stroke-width="2"/>'
    '<line x1="60" y1="190" x2="60" y2="20" stroke="#f8fafc" stroke-width="2"/>'
    '<path d="M70,175 Q280,-40 490,175" fill="none" stroke="#7dd3fc" stroke-width="4"/>'
    '<line x1="280" y1="67" x2="280" y2="190" stroke="#86efac" stroke-width="2" stroke-dasharray="6 5"/>'
    '<circle cx="280" cy="67" r="7" fill="#86efac"/>'
    '<text x="280" y="50" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#86efac">OPTIMUM</text>'
    '<text x="120" y="92" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">UNDER</text>'
    '<text x="440" y="92" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fca5a5">OVER</text>'
    '<text x="280" y="218" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">Number of people (fixed resources) →</text>'
    '<text x="36" y="105" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc" transform="rotate(-90 36 105)">Living standard</text>'
    '</svg>'
)

CHINA_TFR = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 260">'
    '<rect x="143" y="30" width="291" height="190" fill="#fde047" fill-opacity="0.15"/>'
    '<text x="288" y="58" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fde047">One Child Policy 1980–2015</text>'
    '<line x1="60" y1="220" x2="505" y2="220" stroke="#f8fafc" stroke-width="2"/>'
    '<line x1="60" y1="220" x2="60" y2="30" stroke="#f8fafc" stroke-width="2"/>'
    '<line x1="60" y1="157" x2="505" y2="157" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>'
    '<text x="500" y="148" text-anchor="end" font-family="sans-serif" font-size="18" fill="#cbd5e1">replacement 2.1</text>'
    '<polyline points="60,46 135,139 226,151 309,172 392,172 442,166 500,190" fill="none" stroke="#fca5a5" stroke-width="4"/>'
    '<text x="74" y="50" font-family="sans-serif" font-size="20" fill="#fca5a5">5.8</text>'
    '<text x="132" y="176" text-anchor="end" font-family="sans-serif" font-size="20" fill="#fca5a5">2.7</text>'
    '<text x="505" y="212" text-anchor="end" font-family="sans-serif" font-size="20" fill="#fca5a5">1.0</text>'
    '<text x="60" y="248" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">1970</text>'
    '<text x="143" y="248" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">1980</text>'
    '<text x="434" y="248" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">2015</text>'
    '<text x="290" y="248" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#cbd5e1">China TFR</text>'
    '</svg>'
)

FOUR21 = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">'
    '<g stroke="#94a3b8" stroke-width="3">'
    '<line x1="90" y1="60" x2="130" y2="93"/><line x1="170" y1="60" x2="130" y2="93"/>'
    '<line x1="350" y1="60" x2="390" y2="93"/><line x1="430" y1="60" x2="390" y2="93"/>'
    '<line x1="130" y1="137" x2="260" y2="166"/><line x1="390" y1="137" x2="260" y2="166"/>'
    '</g>'
    '<circle cx="90" cy="40" r="20" fill="#e2e8f0"/><circle cx="170" cy="40" r="20" fill="#e2e8f0"/>'
    '<circle cx="350" cy="40" r="20" fill="#e2e8f0"/><circle cx="430" cy="40" r="20" fill="#e2e8f0"/>'
    '<circle cx="130" cy="115" r="22" fill="#fde047"/><circle cx="390" cy="115" r="22" fill="#fde047"/>'
    '<circle cx="260" cy="190" r="24" fill="#fca5a5"/>'
    '<text x="260" y="47" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">4 grandparents</text>'
    '<text x="260" y="122" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fde047">2 parents</text>'
    '<text x="296" y="198" font-family="sans-serif" font-size="20" fill="#fca5a5">1 child</text>'
    '<text x="224" y="198" text-anchor="end" font-family="sans-serif" font-size="18" fill="#f8fafc">supports all 6</text>'
    '</svg>'
)

SG_TIMELINE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 270">'
    '<line x1="40" y1="20" x2="40" y2="255" stroke="#94a3b8" stroke-width="3"/>'
    '<circle cx="40" cy="32" r="8" fill="#fca5a5"/><circle cx="40" cy="74" r="8" fill="#f8fafc"/>'
    '<circle cx="40" cy="116" r="8" fill="#fde047"/><circle cx="40" cy="158" r="8" fill="#7dd3fc"/>'
    '<circle cx="40" cy="200" r="8" fill="#86efac"/><circle cx="40" cy="242" r="8" fill="#fca5a5"/>'
    '<g font-family="sans-serif" font-size="20">'
    '<text x="62" y="39" fill="#fde047">1972</text><text x="130" y="39" fill="#fca5a5">‘Stop at Two’ (anti-natalist)</text>'
    '<text x="62" y="81" fill="#fde047">1975</text><text x="130" y="81" fill="#f8fafc">TFR down to 2.1</text>'
    '<text x="62" y="123" fill="#fde047">1984</text><text x="130" y="123" fill="#fde047">Graduate Mothers’ (axed 1985)</text>'
    '<text x="62" y="165" fill="#fde047">1987</text><text x="130" y="165" fill="#7dd3fc">‘Three or More’ (pro-natalist)</text>'
    '<text x="62" y="207" fill="#fde047">2001</text><text x="130" y="207" fill="#86efac">Baby Bonus (cash + savings)</text>'
    '<text x="62" y="249" fill="#fde047">2023</text><text x="130" y="249" fill="#fca5a5">Resident TFR 0.97</text>'
    '</g>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 300), ("priya", 600), ("nani", 900)])
L("dad", "Family meeting. I've designed us a flag. It says, One Is Plenty.", mood="smug", shot="close", prop="flag")
L("priya", "Is that about me?", mood="deadpan", shot="close")
L("dad", "Only child. That makes us, and I read this word in your homework, an anti-natalist household.", mood="excited", shot="close", prop="flag")
L("priya", "Anti-natalist is a government policy, Dad. Not a family motto.", mood="deadpan", shot="close")
L("nani", "In my day all of Singapore was anti-natalist. Posters everywhere. Stop at Two.", mood="smug", shot="close")
L("nani", "Fifteen years later, the government said, actually, have three. I needed a lie down.", mood="eyeroll", shot="close", gap=0.4)
freeze("NANI HAS RECEIPTS", 2.6, narrator="Narrator: She kept the poster. She keeps everything.")
confess("priya", "PRIYA · 12 · Only Child · Heir To Forty Fridge Magnets")
L("priya", "Being an only child is great. No bathroom queue. Nobody else to blame when the globe gets dropped.", mood="deadpan")
L("priya", "But Dad has picked a side in a whole geography topic without reading it.", mood="smug", gap=0.6)

title()

# ---------------- ACT 1: TOO MANY, TOO FEW ----------------
scene("living", [("priya", 220), ("dad", 440), ("nani", 660)])
L("priya", "Atlas! Population emergency. Dad has made a flag.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 980)
L("atlas", "A flag? I have a hundred and ninety five painted on me. Some are even up to date.", mood="smug", shot="close")
L("dad", "Atlas, Singapore is over-populated. Our lift had eleven people in it.", mood="annoyed", shot="close")
L("atlas", "Over-population is not a crowded lift. It compares people with resources and technology.", mood="teach", shot="close",
  boardClear=True, board="Compare PEOPLE with RESOURCES + TECH")
L("atlas", "Over-population: too many people for the resources to give a decent standard of living. Under-population: too few to use them.", mood="teach", shot="close",
  board="Over: too many for the resources")
L("priya", "And the optimum gives the highest standard of living per person.", mood="thinking", shot="close",
  board="Optimum = best living standard per person")
L("atlas", "Picture a hill. Add people and life improves, up to the peak. Keep adding and it slides downhill.", mood="teach", shot="close",
  boardClear=True, diagram=OPTIMUM)
L("dad", "So Singapore is over the hill.", mood="smug", shot="close")
L("atlas", "Singapore is dense, about eight thousand per square kilometre. But it is rich and trades for its food. Dense, not over-populated.", mood="teach", shot="close",
  board="Dense ≠ over-populated (Singapore)")
L("dad", "I know this bit. Malthus said food multiplies, and people just add up slowly.", mood="smug", shot="close")
L("priya", "Other way round.", mood="deadpan", shot="close", gap=0.3)
L("atlas", "Malthus, seventeen ninety eight. Population multiplies, food only adds. Then famine, disease and war.", mood="teach", shot="close",
  boardClear=True, board="Malthus 1798: people ×2, food +1 → crisis")
L("atlas", "Boserup, nineteen sixty five. Necessity is the mother of invention. Short of food? Invent better farming.", mood="teach", shot="close",
  board="Boserup 1965: necessity → invention")
L("priya", "So far Boserup is winning. The Green Revolution roughly doubled cereal yields in much of Asia.", mood="thinking", shot="close",
  board="Green Revolution backs Boserup")
L("atlas", "Now, policies. Anti-natalist policies cut the birth rate. Pro-natalist policies raise it.", mood="teach", shot="close",
  boardClear=True, board="ANTI-natalist = fewer births")
L("atlas", "The key number is the T F R, the total fertility rate. Replacement level is about two point one.", mood="teach", shot="close",
  board="PRO-natalist = more births")
L("nani", "In nineteen sixty five our T F R was about four point seven. So in nineteen seventy two, Stop at Two.", mood="teach", shot="close",
  board="Replacement TFR ≈ 2.1")
L("nani", "Higher hospital fees for extra babies. No paid maternity leave after the second.", mood="teach", shot="close",
  board="SG 1972 'Stop at Two': fees, no leave")
L("nani", "Your mother was my third. Bigger bill. Louder baby. Worth every cent.", mood="happy", shot="close", gap=0.4)
L("atlas", "And it worked. By nineteen seventy five, the T F R hit replacement level. Then it kept falling.", mood="teach", shot="close",
  board="TFR hit 2.1 by 1975, then kept falling")

confess("atlas", "ATLAS · Desk Globe · Population: One (Optimum)")
L("atlas", "I am an only globe. Highest standard of living per globe. That is the optimum.", mood="smug")
L("atlas", "There was once an inflatable globe. Dad sat on it. We do not speak of it.", mood="sad", gap=0.5)

# ---------------- ACT 2: SHANGHAI ----------------
scene("living", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("dad", "China did the famous one. The One Child Policy. I've been to China.", mood="smug", shot="close")
L("priya", "You've been to Beijing airport.", mood="deadpan", shot="close")
L("dad", "Terminal Three. It's practically a province.", mood="excited", shot="close")
L("atlas", "Then let us meet someone who studies it. Hold on. Not to Australia.", mood="smug", shot="close")
sfx("whoosh")
scene("city", [("priya", 220), ("dad", 440), ("atlas", 760)], caption="SHANGHAI · China · Evening rush hour")
poof("guest2", 1070)
L("guest2", "You must be the family with the talking globe. I'm Dr Liu, a demographer. I study population.", mood="happy", shot="close")
L("priya", "Why did China bring in the One Child Policy?", mood="neutral", shot="two")
L("guest2", "By the late nineteen seventies, China had about nine hundred and seventy million people, and it was still poor.", mood="teach", shot="close",
  boardClear=True, board="Late 1970s: ~970 million, still poor")
L("guest2", "So from nineteen eighty, most urban couples could have only one child.", mood="teach", shot="close",
  board="1980: one child (most urban couples)")
L("guest2", "Carrots, like bonuses for a one-child certificate. Sticks, like fines of several times a family's yearly income.", mood="teach", shot="close",
  board="Carrots: perks · Sticks: big fines")
L("guest2", "In some places there was coercion. Forced abortions and sterilisations. It is condemned as a human rights abuse, and families still carry that pain.", mood="sad", shot="close",
  board="Coercion: a human rights abuse")
L("dad", "I'm putting the flag away.", mood="sad", shot="close", gap=0.4)
L("guest2", "Thank you. Before nineteen eighty, a voluntary campaign had already cut the T F R from five point eight to two point seven.", mood="teach", shot="close",
  boardClear=True, diagram=CHINA_TFR)
L("guest2", "It then fell to about one point six. The government claims four hundred million births were prevented. Many experts doubt it.", mood="teach", shot="close",
  board="Claimed: 400 million births prevented")
L("atlas", "Always ask, would it have happened anyway? That question is worth marks.", mood="teach", shot="close",
  board="Ask: would it have fallen anyway?")
L("guest2", "The problems. First, gender imbalance. Many families preferred sons. By twenty twenty, about thirty five million more men than women.", mood="teach", shot="close",
  boardClear=True, board="2020: ~35 million more men than women")
L("guest2", "Second, the four two one problem. I know this one personally. I'm an only child.", mood="neutral", shot="close",
  boardClear=True, diagram=FOUR21)
L("guest2", "Four grandparents, two parents, one me. No siblings to share the costs or the hospital visits.", mood="teach", shot="close",
  board="4-2-1: one child supports six")
L("guest2", "I love them all. But I am in a great many family group chats.", mood="happy", shot="close", gap=0.4)
L("guest2", "Third, ageing. In twenty twenty three, about twenty one percent of people were sixty or over.", mood="teach", shot="close",
  board="2023: ~21% aged 60+ · fewer workers")
L("guest2", "So China U-turned. Two children from twenty sixteen, three from twenty twenty one. Births still fell, to about nine million in twenty twenty three.", mood="teach", shot="close",
  boardClear=True, board="2016 two-child · 2021 three-child")

confess("dad", "DAD · Explorer · Forty Airports · One Flag (Retired)")
L("dad", "I've been to forty countries. Well. Forty airports. Dr Liu says I'm welcome back, through the actual exit.", mood="smug")
L("dad", "Family size is a family's choice. A government stepping in is a very big deal.", mood="thinking", gap=0.6)

# ---------------- ACT 3: SINGAPORE'S U-TURN ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad has bought a demography book. At the airport.", 2.4)
scene("hawker", [("priya", 200), ("nani", 400), ("uncle", 1000)])
L("uncle", "Wah, Nani. Two kopi? I'm one of six, you know. Born before the posters.", mood="smug", shot="close")
L("nani", "By nineteen eighty six the T F R was one point four. So in nineteen eighty seven, have three or more, if you can afford it.", mood="teach", shot="close",
  boardClear=True, board="1987: 'Three or More, if you can afford it'")
L("priya", "In nineteen eighty four came the Graduate Mothers' Scheme. School priority for graduate mothers with three or more kids.", mood="thinking", shot="close",
  board="1984: Graduate Mothers' Scheme")
L("nani", "People called it unfair and elitist. Scrapped in nineteen eighty five.", mood="eyeroll", shot="close",
  board="Unpopular → scrapped 1985")
sfx("whoosh")
poof("atlas", 700)
L("atlas", "Then in two thousand and one, the Baby Bonus. Now eleven thousand dollars for each of the first two children.", mood="teach", shot="close",
  boardClear=True, diagram=SG_TIMELINE)
L("priya", "Resident T F R in twenty twenty three. Zero point nine seven.", mood="deadpan", shot="close",
  board="2023 resident TFR: 0.97")
L("uncle", "Less than one baby each? Like ordering half a plate of char kway teow.", mood="shock", shot="close", gap=0.3)
L("nani", "Money helps. But flats, tuition, long hours, marrying later. A cash gift is small next to all that.", mood="thinking", shot="close",
  board="Costs: housing, tuition, long hours")
L("atlas", "So pro-natalist policies cost a lot and do little. Immigration keeps the workforce growing.", mood="teach", shot="close",
  boardClear=True, board="Pro-natalist: costly, small effect")
L("atlas", "France does better, with family allowances and cheap childcare. Japan's T F R is about one point two.", mood="teach", shot="close",
  board="Japan: TFR ~1.2 · 29% aged 65+")
L("nani", "Ageing policies matter too. Work longer, C P F savings, and grants to live near elderly parents.", mood="teach", shot="close",
  board="Ageing: retire later, CPF, live nearby")
L("uncle", "That's why my son lives two blocks away. Free kopi.", mood="eyeroll", shot="close", gap=0.4)

# ---------------- PEEL DEBATE ----------------
scene("classroom", [("teacher", 260), ("priya", 560), ("atlas", 900)])
L("teacher", "Was the One Child Policy a success? Both sides, then a judgement. Use Peel. Like a banana.", mood="teach", shot="close",
  boardClear=True, board="PEEL: Point · Evidence · Explain · Link")
L("priya", "For. The T F R fell to about one point six, so more money per child. It met its short-term aim.", mood="determined", shot="close",
  board="FOR: TFR ~1.6 · more spent per child")
L("priya", "Against. Son preference plus a one-child limit left about thirty five million more men than women. The human cost was high.", mood="determined", shot="close",
  board="AGAINST: 35m more men · 4-2-1 · coercion")
L("atlas", "And remember, Kerala in India and Thailand cut births without force, by educating girls.", mood="teach", shot="close",
  board="Kerala + Thailand: fewer births, no force")
L("teacher", "Judgement? Partly successful. Births fell, at a very high human cost, and much of that would have happened anyway.", mood="teach", shot="close",
  board="Judge: 'partly, because…'")
L("teacher", "Who let a globe into my classroom?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Still The Only Globe")
L("atlas", "Recap. One. Over, under and optimum compare people with resources.", mood="teach",
  boardClear=True, board="1. Over/under/optimum: people vs resources")
L("atlas", "Two. Malthus predicted crisis. Boserup predicted invention.", mood="teach",
  board="2. Malthus: crisis · Boserup: invention")
L("atlas", "Three. China's policy cut births, with heavy costs.", mood="teach",
  board="3. China OCP 1980–2015: big costs")
L("atlas", "Four. Singapore went from Stop at Two to the Baby Bonus.", mood="teach",
  board="4. SG: Stop at Two (1972) → Baby Bonus")
L("atlas", "Five. Evaluate, then judge.", mood="smug",
  board="5. Would it happen anyway? Judge!", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("mum", 220), ("dad", 440), ("priya", 660)])
L("dad", "New family flag. It says, Optimum.", mood="smug", shot="close", prop="flag")
L("mum", "My checklist. A second child needs a bedroom, tuition money, and a husband who reads homework before making flags.", mood="smug", shot="close", prop="tablet")
L("nani", "Your mother was a third child. Worth every cent!", mood="happy", shot="close", offstage=True)
sfx("ding")
L("priya", "Policy review complete. Population stable.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Dr Liu would give you 3.", 3.0)
challenge(1, "Singapore's resident TFR was 0.97 in 2023. Above or below replacement level?", "Below (2.1 = replacement)",
  "Replacement TFR ≈ 2.1, and 0.97 < 2.1",
  "Question one. Singapore's fertility rate was zero point nine seven. Above or below replacement level?",
  "Below. Replacement is about two point one.")
challenge(2, "Is Singapore's Baby Bonus an anti-natalist or a pro-natalist policy?", "Pro-natalist",
  "It rewards families for having children",
  "Question two. Is the Baby Bonus anti-natalist or pro-natalist?",
  "Pro-natalist. It encourages births.")
challenge(3, "Give one problem caused by China's One Child Policy.", "Gender imbalance",
  "Son preference + one child → ~35m more men",
  "Question three. Give one problem caused by China's One Child Policy.",
  "Gender imbalance. Ageing, or the four two one problem, also score.")
end_card()
