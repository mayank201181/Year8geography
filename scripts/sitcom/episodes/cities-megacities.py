# "Totally Raotional: Off The Map" S02E15 "Concrete Jungle Fever" (Topic: Cities & Megacities)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: what-is-a-city, characteristics-of-cities, megacities, causes-of-urbanisation.

EP = dict(topic="cities-megacities",
          logline="Dad decides Singapore should be a megacity and starts inviting people to move in. Globo, a grumpy globe from the junk drawer, "
                  "explains the settlement hierarchy, urbanisation, the good and bad of city life, megacities and why cities grow.")

D_HIER = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<polygon points="225,10 295,10 318,42 202,42" fill="#f87171"/>
<polygon points="202,42 318,42 341,74 179,74" fill="#a78bfa"/>
<polygon points="179,74 341,74 364,106 156,106" fill="#94a3b8"/>
<polygon points="156,106 364,106 387,138 133,138" fill="#38bdf8"/>
<polygon points="133,138 387,138 410,170 110,170" fill="#4ade80"/>
<polygon points="110,170 410,170 433,202 87,202" fill="#facc15"/>
<g font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">
<text x="260" y="32">MEGACITY</text><text x="260" y="64">CONURBATION</text><text x="260" y="96">CITY</text>
<text x="260" y="128">TOWN</text><text x="260" y="160">VILLAGE</text><text x="260" y="192">HAMLET</text></g>
<path d="M40 200 V24" stroke="#fde047" stroke-width="4"/><path d="M40 12 l-9 16 h18z" fill="#fde047"/>
<text x="58" y="120" font-family="sans-serif" font-size="13" fill="#fff" transform="rotate(-90 58 120)" text-anchor="middle">more people + services</text>
<path d="M480 24 V188" stroke="#7dd3fc" stroke-width="4"/><path d="M480 200 l-9 -16 h18z" fill="#7dd3fc"/>
<text x="462" y="110" font-family="sans-serif" font-size="13" fill="#fff" transform="rotate(90 462 110)" text-anchor="middle">more settlements</text>
</svg>"""

D_RINGS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<circle cx="140" cy="110" r="104" fill="#4ade80" stroke="#0f172a" stroke-width="2"/>
<circle cx="140" cy="110" r="76" fill="#818cf8" stroke="#0f172a" stroke-width="2"/>
<circle cx="140" cy="110" r="48" fill="#facc15" stroke="#0f172a" stroke-width="2"/>
<circle cx="140" cy="110" r="22" fill="#f87171" stroke="#0f172a" stroke-width="2"/>
<g font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">
<text x="140" y="115">CBD</text><text x="140" y="80">inner</text><text x="140" y="50">suburbs</text><text x="140" y="22">fringe</text></g>
<g font-family="sans-serif" font-size="15" fill="#fff">
<text x="270" y="40" font-weight="bold">Moving outwards:</text>
<text x="280" y="72">land values fall</text>
<text x="280" y="100">density falls</text>
<text x="280" y="128">buildings get newer</text>
<text x="280" y="156">more green space</text>
<text x="270" y="196" fill="#fde047">A MODEL, not a map</text></g>
</svg>"""

D_BARS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<text x="260" y="18" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Largest urban areas, 2018 (UN estimates, millions)</text>
<g font-family="sans-serif" font-size="14" fill="#fff" text-anchor="end">
<text x="110" y="47">Tokyo</text><text x="110" y="77">Delhi</text><text x="110" y="107">Shanghai</text>
<text x="110" y="137">São Paulo</text><text x="110" y="167">Cairo</text><text x="110" y="197">Dhaka</text></g>
<g fill="#38bdf8"><rect x="120" y="32" width="337" height="20" fill="#f87171"/><rect x="120" y="62" width="256" height="20"/>
<rect x="120" y="92" width="230" height="20"/><rect x="120" y="122" width="195" height="20"/>
<rect x="120" y="152" width="181" height="20"/><rect x="120" y="182" width="176" height="20"/></g>
<g font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff">
<text x="463" y="47">37.5</text><text x="382" y="77">28.5</text><text x="356" y="107">25.6</text>
<text x="321" y="137">21.7</text><text x="307" y="167">20.1</text><text x="302" y="197">19.6</text></g>
<path d="M210 26 V208" stroke="#fde047" stroke-width="2" stroke-dasharray="6 4"/>
<text x="214" y="224" font-family="sans-serif" font-size="13" fill="#fde047">10 million = megacity</text>
</svg>"""

D_PUSHPULL = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect x="8" y="10" width="170" height="180" rx="10" fill="#166534"/>
<rect x="342" y="10" width="170" height="180" rx="10" fill="#334155"/>
<g font-family="sans-serif" font-size="16" font-weight="bold" fill="#fde047" text-anchor="middle">
<text x="93" y="34">PUSH (rural)</text><text x="427" y="34">PULL (city)</text></g>
<g font-family="sans-serif" font-size="13" fill="#fff">
<text x="18" y="62">few jobs, low pay</text><text x="18" y="88">drought, crop failure</text>
<text x="18" y="114">poor healthcare</text><text x="18" y="140">few schools</text><text x="18" y="166">conflict</text>
<text x="352" y="62">jobs, better pay</text><text x="352" y="88">schools, universities</text>
<text x="352" y="114">hospitals</text><text x="352" y="140">water, electricity</text><text x="352" y="166">family, bright lights</text></g>
<polygon points="188,92 300,92 300,74 334,104 300,134 300,116 188,116" fill="#facc15"/>
<text x="260" y="62" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">migration</text>
<text x="260" y="156" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">mostly young adults</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "Deal alert! Megacity weekend! Three cities, two days, forty hours of layovers!", mood="excited", shot="close", prop="phone")
L("tara", "Mum. That's not a holiday. That's a hostage situation with peanuts.", mood="deadpan", shot="close")
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Why fly to a megacity? We live in one. Singapore is the greatest city on Earth. Greatest means mega.", mood="smug", shot="close", prop="tablet")
L("tara", "Dad, a megacity needs ten million people. Singapore has about six million.", mood="deadpan", shot="close")
L("dad", "So we're four million short. Easy. I've told my family group chat to move in.", mood="smug", shot="close")
freeze("FOUR MILLION SHORT", 2.4, narrator="Narrator: The group chat has eleven members. Three are Mum's old phones.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My father is trying to grow a country by group chat. He still can't leave the group chat.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WHAT IS A CITY? ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Time to open the drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("tara", "Globo, Dad wants to make Singapore a megacity. By inviting his cousins.", mood="worried", shot="two")


scene("kitchen", [("tara", 260), ("dad", 600), ("globo", 960)])
L("dad", "Globo! What is a city? I say any place with a food court.", mood="smug", shot="close")
L("globo", "Wrong, but tasty. Geographers rank settlements in a hierarchy, by population and range of services. Hamlet, village, town, city, conurbation, megacity.", mood="teach", shot="close",
  boardClear=True, board="SETTLEMENT HIERARCHY: size + services", diagram=D_HIER)
L("globo", "Going up, more people and more high order services, like hospitals. But fewer settlements at each level. A pyramid.", mood="teach", shot="close",
  board="Up: more people, services, fewer places")
L("tara", "Happy Villagers Take City Coaches Mostly.", mood="happy", shot="close",
  board="Happy Villagers Take City Coaches Mostly")
L("globo", "There's no single world wide definition of a city. Saint Davids, in Wales, has under two thousand people. It's a city because the monarch said so.", mood="teach", shot="close",
  boardClear=True, board="No single world-wide definition of CITY")
L("dad", "Our block has six hundred people. I'm writing to the King!", mood="excited", shot="close", prop="tablet",
  board="St Davids, Wales: < 2,000 people = a city")
L("globo", "Each country sets its own rules. Denmark counts two hundred people as urban.", mood="eyeroll", shot="close",
  board="Each country sets its own rules")
L("tara", "Urban means built up towns and cities. Rural is the countryside, with more farming.", mood="thinking", shot="close",
  board="URBAN: built-up · RURAL: countryside")
L("globo", "Next. Urbanisation is a rise in the proportion of people living in urban areas. The percentage, not just size.", mood="teach", shot="close",
  boardClear=True, board="URBANISATION: rising % living in urban")
L("tara", "Percent urban is urban population, divided by total population, times one hundred.", mood="happy", shot="close",
  board="% urban = urban ÷ total × 100")
L("globo", "In nineteen fifty, the world was about thirty percent urban. By twenty twenty three, about fifty seven percent.", mood="teach", shot="close",
  boardClear=True, board="1950 ~30% · 2007–08: 50% · 2023 ~57%")
L("tara", "So it rose by twenty seven percentage points. Not twenty seven percent.", mood="smug", shot="close",
  board="30% → 57% = +27 PERCENTAGE POINTS")
L("globo", "Correct. And Singapore is a city state. The whole country is one city. One hundred percent urban, about six million people.", mood="teach", shot="close",
  board="Singapore: CITY-STATE, 100% urban")

# ---------------- ACT 2: GOOD AND BAD OF CITIES, MEGACITIES ----------------
card("MEANWHILE, FAR FROM HOME", "Globo Airways: no peanuts, no refunds", 2.4)
scene("megacity", [("tara", 260), ("dad", 600), ("globo", 960)], "A MEGACITY · Ten Million Plus · Flown In By Globo Airways")
L("dad", "Look at it! Towers! Cranes! Buses! This could be Singapore with my cousins!", mood="excited", shot="close", prop="sunglasses")
L("tara", "We've been in this traffic jam for forty minutes. We've moved three metres.", mood="deadpan", shot="close")
L("globo", "Cities concentrate opportunities. Jobs, higher wages, hospitals, universities, culture, and the MRT.", mood="teach", shot="close",
  boardClear=True, board="GOOD: jobs, wages, services, culture")
L("globo", "They also concentrate problems. Congestion. Pollution, like Delhi's winter smog. High housing costs.", mood="teach", shot="close",
  board="BAD: congestion · pollution (Delhi smog)")
L("tara", "So newcomers can end up in informal settlements. The UN estimates over a billion people live in slums.", mood="thinking", shot="close",
  board="Housing costs → informal settlements")
L("globo", "Plus inequality, and the urban heat island. Concrete makes cities warmer.", mood="teach", shot="close",
  board="Inequality · URBAN HEAT ISLAND")
L("dad", "Heat island? I'm from Singapore. Everything is a heat island.", mood="smug", shot="close",
  board="Sort with SEE: social/economic/environment")
L("globo", "Now, land use. An old model, based on Chicago, says cities grow in rings. In the centre, the CBD. The Central Business District. Offices, shops, the highest land values.", mood="teach", shot="close",
  boardClear=True, board="CBD: offices, shops, highest land value", diagram=D_RINGS)
L("globo", "Then the inner city, with old, dense housing. Then suburbs, with gardens. Then the rural urban fringe. Retail parks, airports and farmland.", mood="teach", shot="close",
  board="Inner city → suburbs → rural–urban fringe")
L("tara", "Cats In Smart Raincoats. Moving out, land gets cheaper and greener.", mood="happy", shot="close",
  board="Cats In Smart Raincoats")
L("dad", "Then I'll buy a flat in the CBD. It's for businesses. I'm a business. Business Dad.", mood="smug", shot="close")
L("globo", "The CBD is the most expensive land there is. And it has hardly any homes.", mood="eyeroll", shot="close")
L("tara", "Our CBD is Raffles Place and Marina Bay. But Singapore bends the model.", mood="deadpan", shot="close",
  boardClear=True, board="SG CBD: Raffles Place + Marina Bay")
L("globo", "Yes. Planners built HDB new towns all round the island, like Jurong, each with its own town centre. A model, not a map.", mood="teach", shot="close",
  board="HDB new towns: many mini-centres")
sfx("trombone")

confess("dad", "VIKRAM RAO · Dad · Self-Described Urban Planner")
L("dad", "I didn't fail to buy a CBD flat. I strategically couldn't afford one. That's called planning.", mood="smug", gap=0.6)

scene("megacity", [("tara", 260), ("mum", 600), ("globo", 960)])
L("mum", "How many megacities are there? If there are lots, I want a bulk discount.", mood="thinking", shot="close", prop="phone")
L("globo", "A megacity has ten million people or more. The UN counted about ten in nineteen ninety, and about thirty three in twenty eighteen.", mood="teach", shot="close",
  boardClear=True, board="MEGACITY: 10 million+ people")
L("tara", "And most are in Asia. Roughly twenty of the thirty three.", mood="happy", shot="close",
  board="UN: ~10 (1990) → ~33 (2018) → ~43 (2030)")
L("globo", "In the UN's twenty eighteen estimates, Tokyo was first, at about thirty seven million. Then Delhi and Shanghai.", mood="teach", shot="close",
  board="Most in ASIA: ~20 of 33 (2018)")
L("globo", "But a newer UN report, in twenty twenty five, drew boundaries a different way. It put Jakarta first, then Dhaka, then Tokyo.", mood="teach", shot="close",
  boardClear=True, board="UN 2018: Tokyo ~37.5 m is No. 1", diagram=D_BARS)
L("mum", "So which is the biggest? I need to know where to book!", mood="annoyed", shot="close",
  board="UN 2025 method: Jakarta, Dhaka, Tokyo")
L("tara", "It depends where you draw the boundary. Quote the source and the year, and say about.", mood="deadpan", shot="close",
  board="Always: source + year + 'about'")
L("globo", "Megacities in rich countries, like Tokyo, grow slowly. Japan is ageing, so Tokyo may shrink slightly.", mood="teach", shot="close",
  boardClear=True, board="HIC megacities: SLOW (Tokyo, New York)")
L("globo", "The fast growing ones are in poorer countries and emerging economies. Delhi, Dhaka, Lagos.", mood="teach", shot="close",
  board="LIC/NEE megacities: FAST (Delhi, Dhaka)")
L("tara", "And big isn't important. Singapore isn't a megacity, but it's a world city.", mood="thinking", shot="close",
  board="Big ≠ important: SG is a world city")


# ---------------- ACT 3: WHY CITIES GROW ----------------
card("BACK HOME, AT THE HAWKER CENTRE", "Globo Airways regrets nothing", 2.2)
scene("hawker", [("tara", 260), ("dad", 560), ("uncle", 1000)])
L("dad", "Uncle Hock! One prata, please. Why do people move to big cities?", mood="happy", shot="close")
L("uncle", "One prata. Also, your cousin left the group chat.", mood="neutral", shot="close", prop="plate")
poof("globo", 800)
L("globo", "Cities grow in two ways. First, rural urban migration. People pushed out of the countryside, and pulled into the city.", mood="teach", shot="close",
  boardClear=True, board="1. RURAL–URBAN MIGRATION", diagram=D_PUSHPULL)
L("globo", "Push factors: few jobs, drought, crop failure, poor healthcare, conflict.", mood="teach", shot="close",
  board="PUSH: problems where you are")
L("tara", "Pull factors: jobs, schools, hospitals, family already there. And the bright lights.", mood="happy", shot="close",
  board="PULL: promises of where you're going")
L("globo", "Second, natural increase. More births than deaths. Migrants are mostly young adults, so they start families in the city.", mood="teach", shot="close",
  boardClear=True, board="2. NATURAL INCREASE: births > deaths")
L("globo", "Now compare. Around twenty twenty three, the UK was about eighty four percent urban. India, about thirty six.", mood="teach", shot="close",
  boardClear=True, board="Urban 2023: UK ~84% · India ~36%")
L("globo", "Rich countries urbanised long ago, so now they rise slowly. Poorer countries are urbanising fastest.", mood="teach", shot="close",
  board="HICs: slow now · LICs/NEEs: FASTEST")
L("dad", "Then I'll do the opposite. Leave the city. Buy a farm. Fresh air. Goats.", mood="determined", shot="close")
L("globo", "That's counter urbanisation. Leaving big cities for towns and villages. Escaping house prices and congestion, helped by remote working.", mood="teach", shot="close",
  boardClear=True, board="COUNTER-URBANISATION: city → countryside")
L("tara", "But Singapore has no countryside. We grow by natural increase and international migration.", mood="deadpan", shot="close",
  board="SG: natural increase + intl migration")

confess("globo", "GLOBO · Recap Globe · Spinning Slowly For Dad")
L("globo", "Recap. One. Hamlet to megacity.", mood="teach",
  boardClear=True, board="1. Hierarchy · urbanisation = rising %")
L("globo", "Two. Jobs, but congestion. CBD out to the fringe.", mood="teach",
  board="2. Good vs bad · CBD → fringe")
L("globo", "Three. A megacity has ten million or more. Most are in Asia.", mood="teach", board="3. Megacity: 10 m+ · most in Asia")
L("globo", "Four. Rankings depend on the boundary. Quote the source.", mood="teach", board="4. Rankings vary: source + year")
L("globo", "Five. Push, pull, natural increase. And no group chats.", mood="smug",
  board="5. Push + pull + natural increase", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "Big news. I've counter urbanised. I bought a hut on Pulau Ubin. Pure countryside.", mood="smug", shot="close", prop="map")
L("tara", "Dad. Pulau Ubin is in Singapore. One hundred percent urban. You've moved from the city to the city.", mood="deadpan", shot="close")
L("mum", "And it came with a free bicycle!", mood="excited", shot="close")
sfx("ding")
L("globo", "Put me back in the drawer. And remove the cousins. Gently.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "Singapore has about 6 million people. Is it a megacity?", "NO", "megacity = 10 million+ · SG ≈ 6 m",
  "Question one. Singapore has about six million people. Is it a megacity?",
  "No. A megacity needs ten million or more. Singapore is a world city, but not a megacity.")
challenge(2, "Drought and crop failure in the countryside: push or pull factor?", "PUSH", "push = problems where you are",
  "Question two. Drought and crop failure in the countryside. Push factor, or pull factor?",
  "Push. It drives people out of the place they leave.")
challenge(3, "The world was ~30% urban in 1950 and ~57% in 2023. By how much did it rise?", "27 POINTS", "57 − 30 = 27 percentage points",
  "Question three. The world was about thirty percent urban in nineteen fifty, and fifty seven percent in twenty twenty three. How much did it rise?",
  "Twenty seven percentage points. Not twenty seven percent.")
end_card()
