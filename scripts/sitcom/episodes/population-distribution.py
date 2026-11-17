# "Totally Raotional: Off The Map" S02E02 "Location, Location, Population" (Topic: Where Do People Live?)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: world-distribution, population-density, physical-factors, human-factors, explaining-distribution.

EP = dict(topic="population-distribution",
          logline="Fed up with the packed MRT, Dad buys a cheap plot of land in the empty middle of Australia. Globo explains "
                  "where the world's people live, population density, physical and human factors, and why almost nobody lives on Dad's land.")

D_SHARES = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">
<rect width="520" height="210" fill="#0f172a"/>
<text x="260" y="22" font-family="sans-serif" font-size="16" font-weight="bold" fill="#e2e8f0" text-anchor="middle">Share of world population (approx., 2024)</text>
<g font-family="sans-serif" font-size="15" fill="#e2e8f0">
<text x="12" y="52">Asia</text><rect x="150" y="38" width="295" height="20" fill="#f87171"/><text x="452" y="53" font-weight="bold">59%</text>
<text x="12" y="80">Africa</text><rect x="150" y="66" width="90" height="20" fill="#fbbf24"/><text x="247" y="81">18%</text>
<text x="12" y="108">Europe</text><rect x="150" y="94" width="45" height="20" fill="#a3e635"/><text x="202" y="109">9%</text>
<text x="12" y="136">Latin America</text><rect x="150" y="122" width="40" height="20" fill="#34d399"/><text x="197" y="137">8%</text>
<text x="12" y="164">N. America</text><rect x="150" y="150" width="25" height="20" fill="#38bdf8"/><text x="182" y="165">5%</text>
<text x="12" y="192">Oceania</text><rect x="150" y="178" width="5" height="20" fill="#c084fc"/><text x="162" y="193">1%</text>
</g>
</svg>"""

D_DENSITY = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<text x="260" y="22" font-family="sans-serif" font-size="16" font-weight="bold" fill="#e2e8f0" text-anchor="middle">People per km² (approx., 2024)</text>
<g font-family="sans-serif" font-size="15" fill="#e2e8f0">
<rect x="20" y="40" width="34" height="30" fill="#b45309"/><text x="66" y="61">Singapore</text><text x="500" y="61" text-anchor="end" font-weight="bold">≈ 8,160</text>
<rect x="20" y="78" width="34" height="30" fill="#f59e0b"/><text x="66" y="99">Bangladesh</text><text x="500" y="99" text-anchor="end" font-weight="bold">≈ 1,170</text>
<rect x="20" y="116" width="34" height="30" fill="#fde047"/><text x="66" y="137">Australia</text><text x="500" y="137" text-anchor="end" font-weight="bold">≈ 3.5</text>
<rect x="20" y="154" width="34" height="30" fill="#fef9c3"/><text x="66" y="175">Mongolia (sparsest country)</text><text x="500" y="175" text-anchor="end" font-weight="bold">≈ 2.2</text>
</g>
</svg>"""

D_NILE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#fcd34d"/>
<path d="M240 200 C250 150 230 110 248 70 L210 20 L330 20 L290 70 C305 110 285 150 280 200Z" fill="#65a30d"/>
<path d="M262 200 C270 150 250 110 266 70 L262 20" stroke="#0284c7" stroke-width="6" fill="none"/>
<text x="95" y="90" font-family="sans-serif" font-size="20" font-weight="bold" fill="#78350f" text-anchor="middle">SAHARA</text>
<text x="95" y="114" font-family="sans-serif" font-size="14" fill="#78350f" text-anchor="middle">under 250 mm rain</text>
<text x="420" y="90" font-family="sans-serif" font-size="20" font-weight="bold" fill="#78350f" text-anchor="middle">SAHARA</text>
<text x="420" y="114" font-family="sans-serif" font-size="14" fill="#78350f" text-anchor="middle">almost empty</text>
<text x="270" y="44" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1a2e05" text-anchor="middle">delta</text>
<rect x="120" y="150" width="280" height="40" rx="6" fill="#0f172a"/>
<text x="260" y="176" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fde047" text-anchor="middle">~95% of people · ~5% of land</text>
</svg>"""

D_TOWN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">
<rect width="520" height="190" fill="#0f172a"/>
<rect x="20" y="40" width="40" height="110" fill="#cbd5e1"/><rect x="70" y="20" width="40" height="130" fill="#e2e8f0"/><rect x="120" y="50" width="40" height="100" fill="#cbd5e1"/>
<rect x="360" y="30" width="40" height="120" fill="#e2e8f0"/><rect x="410" y="55" width="40" height="95" fill="#cbd5e1"/><rect x="460" y="35" width="40" height="115" fill="#e2e8f0"/>
<rect x="190" y="105" width="150" height="45" fill="#f59e0b"/><text x="265" y="133" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">town centre</text>
<circle cx="265" cy="70" r="22" fill="#16a34a"/><text x="265" y="40" font-family="sans-serif" font-size="13" fill="#bbf7d0" text-anchor="middle">park</text>
<rect x="0" y="158" width="520" height="8" fill="#ef4444"/><rect x="236" y="152" width="58" height="20" rx="4" fill="#ef4444"/>
<text x="265" y="186" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fecaca" text-anchor="middle">MRT</text>
<text x="90" y="14" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">HDB high-rise</text>
<text x="430" y="22" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">HDB high-rise</text>
</svg>"""

D_AUS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0c4a6e"/>
<path d="M90 70 L150 40 L210 50 L240 20 L280 50 L330 30 L370 70 L420 110 L430 150 L400 190 L340 200 L300 180 L250 190 L200 170 L130 180 L80 160 L60 120Z" fill="#fcd34d" stroke="#1e293b" stroke-width="2"/>
<text x="240" y="115" font-family="sans-serif" font-size="18" font-weight="bold" fill="#78350f" text-anchor="middle">ARID INTERIOR</text>
<text x="240" y="137" font-family="sans-serif" font-size="14" fill="#78350f" text-anchor="middle">very few people</text>
<g fill="#dc2626"><circle cx="425" cy="128" r="7"/><circle cx="410" cy="170" r="9"/><circle cx="368" cy="194" r="9"/><circle cx="305" cy="182" r="6"/><circle cx="82" cy="150" r="7"/></g>
<g font-family="sans-serif" font-size="12" fill="#fff"><text x="438" y="126">Brisbane</text><text x="424" y="176">Sydney</text><text x="380" y="214">Melbourne</text><text x="262" y="210">Adelaide</text><text x="20" y="176">Perth</text></g>
<text x="12" y="22" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047">≈85% live within ~50 km of the coast</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 280), ("mum", 720)])
sfx("door")
L("mum", "That MRT! A man's elbow was in my ear for six stops!", mood="annoyed", shot="close")
L("tara", "Mum, it was rush hour. That's not a train. It's a group hug with a timetable.", mood="deadpan", shot="close")
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
L("dad", "Somebody has. I bought us land. Ten hectares, in the middle of Australia. Cheaper than our car park pass.", mood="smug", shot="close", prop="tablet")
L("tara", "Where is the nearest town?", mood="deadpan", shot="close")
L("dad", "A scenic six hour drive. And the water supply is, quote, seasonal.", mood="smug", shot="close")
L("tara", "Which season?", mood="deadpan", shot="close")
L("dad", "It didn't say. That's how you know it's exclusive.", mood="smug", shot="close")
freeze("\"EXCLUSIVE.\"", 2.4, narrator="Narrator: The last owner was a lizard. He also moved out.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My dad bought the one place in the world with fewer people than his WhatsApp group.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WORLD DISTRIBUTION ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Time to open the drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who disturbs my nap? Ah. The Raos. What has he bought this time?", mood="bored", shot="close")
L("tara", "Land in the middle of Australia. He says there's nobody there, so it's peaceful.", mood="worried", shot="two")
L("globo", "There's nobody there for a reason. Several, in fact.", mood="eyeroll", shot="close", gap=0.4)

scene("kitchen", [("tara", 300), ("dad", 620), ("globo", 960)])
L("globo", "Population distribution is how people are spread out. And it is very uneven. A few crowded regions, and huge, nearly empty ones.", mood="teach", shot="close",
  boardClear=True, board="DISTRIBUTION = where people are spread")
L("globo", "Of over eight billion people, about fifty nine percent live in Asia.", mood="teach", shot="close",
  board="Very UNEVEN · Asia ≈ 59% of people", diagram=D_SHARES)
L("globo", "Dense regions. East and South Asia, Europe, the north east of the U S A, and smaller clusters like the Nile valley.", mood="teach", shot="close",
  boardClear=True, board="DENSE: E + S Asia, Europe, NE USA")
L("globo", "Sparse regions. The Sahara, northern Canada, Siberia, the Amazon, the Himalayas, and Australia's interior.", mood="teach", shot="close",
  board="SPARSE: deserts, cold, mountains, forest")
L("globo", "Roughly ninety percent live north of the Equator, where most land is. And roughly forty percent live within about a hundred kilometres of the sea.", mood="teach", shot="close",
  board="~90% N. Hemisphere · ~40% near coast")
L("tara", "So describe means where, with named places, figures, and anomalies, like the Nile strip. Not why.", mood="thinking", shot="close",
  board="DESCRIBE = where, with evidence (CLOCC)", gap=0.3)

# ---------------- ACT 2: DENSITY AT THE HAWKER CENTRE ----------------
card("MEANWHILE, AT THE HAWKER CENTRE", "Lunch rush. Zero empty seats.", 2.0)
scene("hawker", [("mum", 300), ("tara", 600), ("uncle", 1000)])
L("mum", "Uncle Hock, six people at a table for four! It's far too crowded!", mood="annoyed", shot="close", prop="plate")
L("uncle", "Auntie, lunchtime. Even the chilli is sharing a seat.", mood="happy", shot="close")
poof("globo", 860)
L("globo", "Population density. People per square kilometre. Total population, divided by area.", mood="teach", shot="close",
  boardClear=True, board="DENSITY = population ÷ area")
L("mum", "Like a deal! More people, same space! Twenty percent extra, free!", mood="excited", shot="close")
L("globo", "It is the opposite of a deal. Ask anyone on the MRT.", mood="eyeroll", shot="close",
  board="Units: people per km²")
L("globo", "Singapore. About six million people, on about seven hundred and thirty five square kilometres. Around eight thousand per square kilometre.", mood="teach", shot="close",
  boardClear=True, board="Singapore ≈ 8,160 per km²", diagram=D_DENSITY)
L("tara", "Bangladesh, about eleven hundred and seventy. Australia, about three and a half. Mongolia, about two. The emptiest country of all.", mood="happy", shot="close",
  board="Bangladesh ≈ 1,170 · Australia ≈ 3.5")
L("uncle", "Three and a half people per square kilometre? Where does the half sit?", mood="thinking", shot="close", board="Mongolia ≈ 2.2: sparsest country")
L("globo", "Averages hide things. Most Australians live in a few coastal cities. And Singapore is dense, but wealthy. Dense does not mean poor.", mood="teach", shot="close",
  boardClear=True, board="Averages hide differences inside a country")
L("globo", "To map density, use a choropleth. Shade each area by class. Darker means denser, one colour family, no overlapping classes.", mood="teach", shot="close",
  board="CHOROPLETH: darker shade = denser")
L("mum", "Like Uncle's chilli! Darker red means more dangerous.", mood="excited", shot="close", board="One colour family · no overlapping classes")
L("uncle", "Auntie, my chilli has only one class. Dangerous.", mood="smug", shot="close", gap=0.4)

# ---------------- ACT 3: PHYSICAL FACTORS ON DAD'S LAND ----------------
card("THE NEXT DAY", "Dad wants to see his land", 1.8)
scene("desert", [("dad", 300), ("tara", 620), ("globo", 960)], "CENTRAL AUSTRALIA · Dad's Land · Flown In By Globo Airways")
L("dad", "Behold! My kingdom!", mood="excited", shot="close", prop="sunglasses")
L("tara", "Not one tree, not one tap, not one shop.", mood="deadpan", shot="close")
L("globo", "Physical factors. Natural features that attract people, or keep them away.", mood="teach", shot="close",
  boardClear=True, board="PHYSICAL factors = natural features")
L("globo", "Relief, meaning the shape and height of land. Climate. Water. Soil. Resources. Hazards.", mood="teach", shot="close",
  board="Relief · climate · water · soil")
L("tara", "Dad's land fails climate and water.", mood="deadpan", shot="close", board="Resources · hazards  (+ or −)")
L("globo", "Egypt. About ninety five percent of Egyptians live on about five percent of the land. The Nile valley and delta.", mood="teach", shot="close",
  boardClear=True, board="Egypt: ~95% on ~5% of the land", diagram=D_NILE)
L("globo", "The river gives water, and its floods spread fertile silt, called alluvium. The Sahara around it gets under two hundred and fifty millimetres of rain a year.", mood="teach", shot="close",
  board="Nile: WATER + fertile ALLUVIUM")
L("dad", "So I just need a Nile. How much is a Nile?", mood="thinking", shot="close", board="Sahara: under 250 mm rain → SPARSE")
L("globo", "More than your car park pass.", mood="smug", shot="close", gap=0.3)
L("globo", "The Himalayas are steep, with thin soils, and cold. About six and a half degrees colder for every thousand metres you climb.", mood="teach", shot="close",
  boardClear=True, board="Himalayas: steep, cold, thin soil")
L("tara", "And the Amazon's forest is hard to clear, and heavy rain washes nutrients out of its soil.", mood="thinking", shot="close",
  board="Amazon: dense forest, LEACHED soils")
L("globo", "Factors combine. Bangladesh floods often, but its delta soil is so fertile, it's one of the most crowded countries on Earth.", mood="teach", shot="close",
  board="Bangladesh: hazards, but very FERTILE")
L("dad", "Natural resources! What if there's gold under my land? Like Kalgoorlie!", mood="excited", shot="close", board="Resources attract: Kalgoorlie (gold)")
L("globo", "Then you'd be a mining town. Population, one man and a lizard.", mood="eyeroll", shot="close")
sfx("trombone")

confess("dad", "VIKRAM RAO · Dad · Self-Described Property Genius")
L("dad", "People say there's nothing on my land. Wrong. There's sand. Sand makes glass. I'm basically in windows.", mood="smug", gap=0.6)

# ---------------- ACT 4: HUMAN FACTORS IN SINGAPORE ----------------
card("BACK HOME", "Punggol Waterway Park", 1.8)
scene("park", [("tara", 260), ("mum", 560), ("globo", 960)])
L("mum", "Sixty years ago, Punggol was farms. Now, blocks, MRT, a mall. Same weather. Same soil.", mood="thinking", shot="close")
L("globo", "Human factors. Things people create. Jobs, transport, services, political stability, history, and planning.", mood="teach", shot="close",
  boardClear=True, board="HUMAN factors = made by people")
L("globo", "In nineteen sixty, Singapore set up the Housing and Development Board. It now houses over three quarters of resident households.", mood="teach", shot="close",
  board="Jobs · transport · services · stability")
L("tara", "Each new town is planned. An MRT station, a town centre, schools and parks, all close by.", mood="happy", shot="close",
  boardClear=True, board="HDB (1960) plans NEW TOWNS", diagram=D_TOWN)
L("globo", "Singapore even made land. Reclamation grew it from about five hundred and eighty square kilometres to about seven hundred and thirty five.", mood="teach", shot="close",
  board="Reclamation: ~580 km² → ~735 km²")
L("globo", "Governments can move people on purpose. In nineteen sixty, Brazil built a new capital inland, Brasilia, to draw people from the coast.", mood="teach", shot="close",
  boardClear=True, board="Brasília (1960): capital moved inland")
L("tara", "And old ports, like Singapore, kept growing because the jobs were already there.", mood="thinking", shot="close",
  board="History: old ports → jobs → more people", gap=0.3)

# ---------------- ACT 5: EXPLAINING A DISTRIBUTION ----------------
scene("living", [("tara", 260), ("dad", 600), ("globo", 960)])
L("dad", "So where are all the Australians?", mood="annoyed", shot="close")
L("globo", "On the coast. Roughly eighty five percent live within about fifty kilometres of it. Mostly in the south east, plus Perth.", mood="teach", shot="close",
  boardClear=True, board="Australia: coast dense, interior empty", diagram=D_AUS)
L("tara", "Physical: the interior is arid, the coasts are wetter. Human: settlers came by sea, so ports grew into cities, with the jobs.", mood="determined", shot="close",
  board="Physical: arid interior · wetter coast")
L("globo", "Always use both kinds of factor, a named place, a figure, and a judgement.", mood="smug", shot="close",
  board="Human: ports → cities → jobs")
L("globo", "Locally, nobody lives in our nature reserves. That's planning, not physics. Scale changes the answer.", mood="teach", shot="close",
  boardClear=True, board="Scale: global · national · local")
L("globo", "In rich countries, technology makes human factors matter more. Dams, air conditioning, desalination.", mood="teach", shot="close",
  board="Technology: dams · aircon · desalination")
L("tara", "But physical limits never vanish. Desert cities like Las Vegas still worry about water.", mood="thinking", shot="close",
  board="Physical limits never vanish completely")
L("dad", "So my land just needs a dam, aircon, desalination, a port, jobs, and sixty years of planning.", mood="worried", shot="close")
L("tara", "And a road.", mood="deadpan", shot="close", gap=0.5)

confess("globo", "GLOBO · Recap Globe · Spinning Slowly For Dad")
L("globo", "Recap. One. People are spread unevenly, mostly in Asia.", mood="teach", boardClear=True, board="1. Uneven · Asia ≈ 59% of people")
L("globo", "Two. Density is population divided by area.", mood="teach", board="2. Density = population ÷ area")
L("globo", "Three. Physical factors, like relief, climate, water and soil.", mood="teach", board="3. Physical: relief, climate, water, soil")
L("globo", "Four. Human factors, like jobs, transport and planning.", mood="teach", board="4. Human: jobs, transport, planning")
L("globo", "Five. Explain with both, at the right scale. And never buy land with a seasonal tap.", mood="smug", board="5. Explain with BOTH + judge", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "Good news. I sold the land. To someone who hates crowds.", mood="smug", shot="close")
L("mum", "Sold it to whom?", mood="thinking", shot="close")
L("dad", "A retired globe. Apparently he's moving out of the drawer.", mood="smug", shot="close")
sfx("ding")
L("globo", "Two point two people per square kilometre. Finally. Some peace and quiet.", mood="smug", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "A town has 45,000 people in 150 km². What is its population density?", "300 PER KM²", "45,000 ÷ 150 = 300 people per km²",
  "Question one. A town has forty five thousand people in one hundred and fifty square kilometres. What is its population density?",
  "Three hundred people per square kilometre. Forty five thousand, divided by one hundred and fifty.")
challenge(2, "Bangladesh floods often. Which physical factor still attracts so many people?", "FERTILE SOIL", "flood plain + delta → alluvium → rice",
  "Question two. Bangladesh floods often. Which physical factor still attracts so many people there?",
  "Fertile soil. The floods leave alluvium behind, so the delta grows huge amounts of rice.")
challenge(3, "Brazil built Brasília inland in 1960. Physical or human factor?", "HUMAN", "a government decision → political / planning",
  "Question three. Brazil built a new capital, Brasilia, inland in nineteen sixty. Is that a physical factor, or a human factor?",
  "Human. A government decision to pull people away from the crowded coast.")
end_card()
