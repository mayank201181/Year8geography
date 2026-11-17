# "Totally Raotional: Off The Map" S02E16 "Go-Slow, Go Lagos" (Topic: Lagos: A Growing Megacity)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: lagos-location-growth, push-pull, lagos-challenges, lagos-solutions.

EP = dict(topic="lagos",
          logline="Dad decides to 'bring films to Lagos', home of Nollywood. Globo flies the Raos in to learn where Lagos is and why it grew, "
                  "push and pull factors, the go-slow, Makoko and Olusosun, and how BRT, the new rail lines and Eko Atlantic measure up.")

D_MAP = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0c4a6e"/>
<path d="M60 40 L380 30 L470 70 L480 150 L420 190 L300 168 L210 176 L120 182 L80 120 Z" fill="#a3e635" opacity="0.85"/>
<text x="260" y="70" font-family="sans-serif" font-size="20" font-weight="bold" fill="#1a2e05" text-anchor="middle">NIGERIA</text>
<circle cx="290" cy="112" r="8" fill="#fde047"/>
<text x="302" y="118" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1a2e05">Abuja (capital)</text>
<circle cx="108" cy="176" r="10" fill="#f97316"/>
<text x="126" y="166" font-family="sans-serif" font-size="17" font-weight="bold" fill="#7c2d12">LAGOS</text>
<text x="200" y="210" font-family="sans-serif" font-size="15" fill="#fff" text-anchor="middle">Gulf of Guinea (Bight of Benin)</text>
<text x="20" y="30" font-family="sans-serif" font-size="13" fill="#fff">Benin</text>
<path d="M60 40 L60 200" stroke="#fff" stroke-width="2" stroke-dasharray="5 4"/>
<text x="508" y="210" font-family="sans-serif" font-size="13" fill="#cbd5e1" text-anchor="end">~6.5°N</text>
</svg>"""

D_GROWTH = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<path d="M40 170 H500" stroke="#94a3b8" stroke-width="2"/>
<rect x="60" y="167" width="60" height="3" fill="#38bdf8"/>
<rect x="150" y="155" width="60" height="15" fill="#38bdf8"/>
<rect x="240" y="122" width="60" height="48" fill="#38bdf8"/>
<rect x="330" y="66" width="60" height="104" fill="#38bdf8"/>
<rect x="420" y="26" width="60" height="144" fill="#f97316"/>
<text x="90" y="160" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">0.3m</text>
<text x="180" y="148" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">1.4m</text>
<text x="270" y="115" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">4.8m</text>
<text x="360" y="59" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">10.4m</text>
<text x="450" y="19" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">14.4m</text>
<text x="90" y="190" font-family="sans-serif" font-size="14" fill="#cbd5e1" text-anchor="middle">1950</text>
<text x="180" y="190" font-family="sans-serif" font-size="14" fill="#cbd5e1" text-anchor="middle">1970</text>
<text x="270" y="190" font-family="sans-serif" font-size="14" fill="#cbd5e1" text-anchor="middle">1990</text>
<text x="360" y="190" font-family="sans-serif" font-size="14" fill="#cbd5e1" text-anchor="middle">2010</text>
<text x="450" y="190" font-family="sans-serif" font-size="14" fill="#cbd5e1" text-anchor="middle">2020</text>
<text x="50" y="40" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fde047">UN estimates (approx.)</text>
</svg>"""

D_PUSHPULL = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<rect x="14" y="20" width="200" height="160" rx="12" fill="#7c2d12"/>
<rect x="306" y="20" width="200" height="160" rx="12" fill="#14532d"/>
<text x="114" y="46" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fed7aa" text-anchor="middle">RURAL NIGERIA</text>
<text x="406" y="46" font-family="sans-serif" font-size="17" font-weight="bold" fill="#bbf7d0" text-anchor="middle">LAGOS</text>
<text x="30" y="78" font-family="sans-serif" font-size="14" fill="#fff">PUSH: poverty</text>
<text x="30" y="102" font-family="sans-serif" font-size="14" fill="#fff">drought (Sahel)</text>
<text x="30" y="126" font-family="sans-serif" font-size="14" fill="#fff">floods · conflict</text>
<text x="30" y="150" font-family="sans-serif" font-size="14" fill="#fff">few services</text>
<text x="322" y="78" font-family="sans-serif" font-size="14" fill="#fff">PULL: jobs, wages</text>
<text x="322" y="102" font-family="sans-serif" font-size="14" fill="#fff">schools · hospitals</text>
<text x="322" y="126" font-family="sans-serif" font-size="14" fill="#fff">family already there</text>
<text x="322" y="150" font-family="sans-serif" font-size="14" fill="#fff">'bright lights'</text>
<path d="M222 100 H292" stroke="#fde047" stroke-width="6"/><path d="M298 100 l-16 -10 v20z" fill="#fde047"/>
<text x="260" y="88" font-family="sans-serif" font-size="13" fill="#fde047" text-anchor="middle">migrants</text>
</svg>"""

D_STILTS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">
<rect width="520" height="190" fill="#0f172a"/>
<rect y="120" width="520" height="70" fill="#0369a1"/>
<path d="M0 104 H520" stroke="#7dd3fc" stroke-width="2" stroke-dasharray="6 5"/>
<text x="510" y="98" font-family="sans-serif" font-size="13" fill="#7dd3fc" text-anchor="end">flood / storm surge</text>
<g fill="#a16207"><rect x="30" y="50" width="90" height="40"/><rect x="150" y="56" width="90" height="34"/><rect x="270" y="48" width="90" height="42"/></g>
<g stroke="#fcd34d" stroke-width="4"><path d="M40 90 V180 M110 90 V180 M160 90 V180 M230 90 V180 M280 90 V180 M350 90 V180"/></g>
<path d="M20 50 L75 26 L130 50Z M140 56 L195 32 L250 56Z M260 48 L315 24 L370 48Z" fill="#94a3b8"/>
<path d="M390 140 q20 10 40 0" stroke="#fde047" stroke-width="5" fill="none"/>
<text x="410" y="164" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">canoe</text>
<text x="510" y="184" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="end">Lagos Lagoon</text>
<text x="510" y="60" font-family="sans-serif" font-size="14" fill="#fecaca" text-anchor="end">no mains sewer</text>
</svg>"""

D_CHAIN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170">
<rect width="520" height="170" fill="#0f172a"/>
<rect x="10" y="20" width="150" height="56" rx="10" fill="#1d4ed8"/>
<rect x="185" y="20" width="150" height="56" rx="10" fill="#b45309"/>
<rect x="360" y="20" width="150" height="56" rx="10" fill="#b91c1c"/>
<text x="85" y="44" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">Rubbish not</text>
<text x="85" y="64" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">collected</text>
<text x="260" y="44" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">Drains</text>
<text x="260" y="64" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">blocked</text>
<text x="435" y="44" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">Heavy rain</text>
<text x="435" y="64" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">→ FLOODS</text>
<path d="M162 48 H180 M337 48 H355" stroke="#fde047" stroke-width="4"/>
<text x="260" y="118" font-family="sans-serif" font-size="16" fill="#fde047" text-anchor="middle">Growth faster than infrastructure</text>
<text x="260" y="146" font-family="sans-serif" font-size="14" fill="#cbd5e1" text-anchor="middle">low-lying coast · building on wetlands</text>
</svg>"""

D_JUDGE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">
<rect width="520" height="210" fill="#0f172a"/>
<text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fde047">Scheme</text>
<text x="220" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fde047">Who benefits?</text>
<text x="400" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fde047">Limit</text>
<path d="M14 40 H506" stroke="#475569" stroke-width="2"/>
<g font-family="sans-serif" font-size="14" fill="#fff">
<text x="20" y="66">BRT (2008)</text><text x="220" y="66">ordinary commuters</text><text x="400" y="66">crowded</text>
<text x="20" y="96">Blue + Red Lines</text><text x="220" y="96">those corridors</text><text x="400" y="96">small network</text>
<text x="20" y="126">Eko Atlantic</text><text x="220" y="126">wealthy, investors</text><text x="400" y="126">excludes most</text>
<text x="20" y="156">Recycling</text><text x="220" y="156">households, pickers</text><text x="400" y="156">some areas</text>
<text x="20" y="186">Community upgrade</text><text x="220" y="186">low-income residents</text><text x="400" y="186">small scale</text>
</g>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 260), ("mum", 600), ("dad", 960)])
L("mum", "Three months of Nigerian films for the price of one! We're a Nollywood family now.", mood="excited", shot="close", prop="tablet")
L("dad", "And I have a vision. Lagos. Lovely little town. Capital of Nigeria.", mood="smug", shot="close")
L("tara", "Dad, Lagos is not little. And it is not the capital.", mood="deadpan", shot="close")
L("dad", "Details. I'll open a film studio there. Bring them the magic of cinema.", mood="excited", shot="close", prop="phone")
L("mum", "Vikram. We are watching a film from Lagos. Right now. You cried twice.", mood="annoyed", shot="two", gap=0.3)
freeze("\"THE MAGIC OF CINEMA.\"", 2.6, narrator="Narrator: Nollywood is one of the biggest film industries on Earth, by number of films made.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My father wants to bring films to the home of Nollywood. Next week, he's bringing rain to Singapore.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WHERE LAGOS IS AND HOW IT GREW ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Before Dad books a flight. The drawer.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who disturbs the drawer? Oh. The Raos.", mood="bored", shot="close")
L("tara", "Globo, Dad wants to open a film studio in Lagos. To introduce films.", mood="worried", shot="two")
L("globo", "To Nollywood. Of course. Last year he tried to sell me sand. I am seventy percent ocean.", mood="eyeroll", shot="close", gap=0.4)

scene("megacity", [("tara", 280), ("dad", 600), ("globo", 960)], "LAGOS · South-West Nigeria · Flown In By Globo Airways")
L("dad", "Whoa. This is a lot of city.", mood="shock", shot="close", prop="sunglasses")
L("globo", "Lagos. South west Nigeria, on the Gulf of Guinea. Built around a lagoon, on islands and the mainland.", mood="teach", shot="close",
  boardClear=True, board="LAGOS: south-west Nigeria, Gulf of Guinea", diagram=D_MAP)
L("tara", "So the lagoon is a sheltered harbour. Perfect for a port. That's why the city grew here.", mood="thinking", shot="close",
  board="Lagoon = sheltered harbour → PORT")
L("dad", "And it's the capital. Which I am standing in.", mood="smug", shot="close")
L("globo", "It was the capital until nineteen ninety one. Then Abuja, a planned city in the centre, took over. But Lagos is still the business capital.", mood="teach", shot="close",
  board="Capital until 1991 → ABUJA. Still the $ hub")
sfx("trombone")
L("globo", "Nigeria, Africa's most populous country, is a newly emerging economy. Growing fast, but wealth is shared very unequally.", mood="teach", shot="close",
  boardClear=True, board="Nigeria: NEE · ~220–230 million people")
L("dad", "So how many people live in Lagos? Exactly. For my spreadsheet.", mood="determined", shot="close", prop="calculator")
L("globo", "Nobody knows. Estimates range from about fifteen million to over twenty million.", mood="smug", shot="close",
  board="Megacity: estimates ~15 to 20+ million")
L("tara", "That's almost a whole Singapore. Just missing.", mood="deadpan", shot="close")
L("globo", "Boundaries. An old census, from two thousand and six. Informal settlements that are hard to count. And politics.", mood="teach", shot="close",
  board="Why? boundaries · old census (2006)")
L("tara", "So you always give a range, and say who made the estimate.", mood="happy", shot="close",
  board="informal homes · politics → give a RANGE")
L("globo", "But it grew fast. UN estimates. Point three of a million in nineteen fifty. About fourteen million by twenty twenty.", mood="teach", shot="close",
  boardClear=True, board="UN: 0.3m (1950) → 14.4m (2020)", diagram=D_GROWTH)
L("tara", "About forty eight times bigger. Better than Dad's investments.", mood="shock", shot="close", board="≈ 48 times bigger in 70 years")
L("globo", "And it's a hub for the continent. Nollywood, Afrobeats, fashion, markets, tech start ups.", mood="teach", shot="close",
  board="Nollywood · Afrobeats · markets · tech")


# ---------------- ACT 2: PUSH AND PULL ----------------
card("MEANWHILE, IN THE GO-SLOW", "Mum's ride is moving at walking pace.", 2.4)
scene("megacity", [("mum", 300), ("tara", 620), ("globo", 960)])
L("mum", "Why is everyone coming to Lagos? Is there a sale?", mood="thinking", shot="close", prop="phone")
L("globo", "Rural urban migration. Push factors drive people out of the countryside. Pull factors attract them to the city.", mood="teach", shot="close",
  boardClear=True, board="RURAL–URBAN MIGRATION", diagram=D_PUSHPULL)
L("globo", "Push factors. Poverty. Few schools or clinics. Drought in the north. Floods. And conflict.", mood="teach", shot="close",
  board="PUSH: poverty · drought · conflict")
L("tara", "And the pull is jobs. Better pay than farming, plus schools and hospitals.", mood="thinking", shot="close",
  board="PULL: jobs · wages · schools · hospitals")
L("mum", "So push is the old shop's high prices, and pull is the new shop's better offer!", mood="excited", shot="close")
L("tara", "That's actually right. Don't get used to it.", mood="deadpan", shot="close")
L("globo", "Add family. A cousin finds you a room and a job. Chain migration. And the bright lights, the hope of a better life.", mood="teach", shot="close",
  boardClear=True, board="Family help = CHAIN MIGRATION")
L("mum", "Like Auntie Priya moving to Singapore. Then her sister. Then her whole badminton team.", mood="smug", shot="close",
  board="'Bright lights': hope of a better life")
L("globo", "And migrants are mostly young, so they start families. Natural increase, about two point four percent a year.", mood="teach", shot="close",
  board="NATURAL INCREASE ≈ 2.4% a year")
L("tara", "So Lagos would keep growing even if nobody else moved in.", mood="thinking", shot="close",
  board="~400,000 extra people a year (2010–20)")

# ---------------- ACT 2B: CHALLENGES ----------------
card("STILL IN THE GO-SLOW", "Forty minutes later. Same lamp post.", 2.4)
scene("megacity", [("dad", 300), ("tara", 620), ("globo", 960)])
L("dad", "Forty minutes, not moving. I've bought a hat, a charger and plantain chips through the window!", mood="excited", shot="close", prop="plate")
L("dad", "My business idea! Selling to people in traffic!", mood="smug", shot="close")
L("tara", "Dad. The people who sold you all that had your idea first. And they're better at it.", mood="deadpan", shot="close")
L("globo", "The go-slow. Only three main bridges join the mainland to Lagos Island. Millions of vehicles.", mood="teach", shot="close",
  boardClear=True, board="GO-SLOW: traffic · 3 main bridges")
L("globo", "And those traders are the informal economy. Work that isn't registered or taxed.", mood="teach", shot="close",
  board="INFORMAL ECONOMY: not registered/taxed")
L("tara", "Good, it gives millions of people jobs. Bad, there's no sick pay, and no tax for services.", mood="thinking", shot="close",
  board="✔ jobs, enterprise ✘ no security, no tax")
L("dad", "No tax? I love it.", mood="happy", shot="close")
L("tara", "Dad, tax pays for roads. Which is why we're not moving.", mood="deadpan", shot="close", gap=0.3)

scene("megacity", [("tara", 280), ("mum", 600), ("globo", 960)], "THE LAGOS LAGOON · Makoko")
L("mum", "Look! Houses on stilts in the water! Children paddling canoes to school!", mood="shock", shot="close", prop="binoculars")
L("globo", "Makoko. A fishing community over a century old, with homes on stilts over the lagoon.", mood="teach", shot="close",
  boardClear=True, board="MAKOKO: stilt homes on the lagoon", diagram=D_STILTS)
L("globo", "Housing can't keep up, so estimates often say well over half of Lagosians live in informal settlements. Makoko has no mains sewer. In twenty twelve, it was partly demolished.", mood="teach", shot="close",
  board="Informal settlements: often over half")
L("mum", "Where does all the rubbish go?", mood="worried", shot="close", board="No sewer · partly demolished 2012")
L("globo", "Dumps like Olusosun, one of Africa's largest. Waste pickers earn a living there, but it pollutes, and caught fire in twenty eighteen.", mood="teach", shot="close",
  boardClear=True, board="OLUSOSUN: huge dump · jobs + pollution")
L("tara", "And uncollected rubbish blocks the drains. So when heavy rain falls, the water can't escape, and streets flood.", mood="thinking", shot="close",
  board="Waste → blocked drains → FLOODS", diagram=D_CHAIN)
L("globo", "Plus little piped water, and power cuts, so people use generators. All linked. Growth beats infrastructure.", mood="teach", shot="close",
  board="Water + power cuts → generators")

confess("dad", "VIKRAM RAO · Dad · Self-Described Business Genius")
L("dad", "I came to teach Lagos about business. A man sold me four things in under a minute. I've been out-businessed. Respectfully.", mood="sad", gap=0.6)

# ---------------- ACT 3: IMPROVING LIFE IN LAGOS ----------------
card("LATER, ON VICTORIA ISLAND", "Dad has a new plan. It has a sea view.", 2.4)
scene("megacity", [("tara", 260), ("mum", 560), ("dad", 820), ("globo", 1060)])
L("dad", "Forget films. I'm buying a flat in Eko Atlantic. Very exclusive.", mood="smug", shot="close", prop="tablet")
L("globo", "Eko Atlantic. Land reclaimed from the sea, behind a sea wall. Planned for roughly two hundred and fifty thousand people.", mood="teach", shot="close",
  boardClear=True, board="EKO ATLANTIC: land reclaimed from sea")
L("globo", "It protects the coast and brings investment. But critics say it's an enclave for the wealthy.", mood="teach", shot="close",
  board="✔ sea wall, investment ✘ for the wealthy")
L("tara", "A quarter of a million people, in a city of maybe fifteen to twenty million. It helps very few.", mood="thinking", shot="close",
  board="~250,000 residents vs 15–20+ million")
L("dad", "Exactly. Very few. That's what exclusive means.", mood="smug", shot="close")
L("tara", "Dad. That's the problem, not the selling point.", mood="deadpan", shot="close", gap=0.3)
L("globo", "Bus Rapid Transit opened in two thousand and eight, with its own lanes. But the buses are crowded.", mood="teach", shot="close",
  boardClear=True, board="BRT (2008): own lanes ✘ crowded")
L("globo", "Then rail. The Blue Line in twenty twenty three, the Red Line in twenty twenty four. No traffic, but a small network so far.", mood="teach", shot="close",
  board="RAIL: Blue Line 2023 · Red Line 2024")
L("dad", "A train that ignores traffic? Lagos has an MRT?", mood="shock", shot="close")
L("tara", "Yes, Dad. And ferries on the lagoon.", mood="deadpan", shot="close")
L("globo", "Recycling. A social enterprise called Wecyclers collects it by cargo bike, and rewards families with points.", mood="teach", shot="close",
  board="RECYCLING: Wecyclers bikes · points")
L("mum", "Points? For rubbish? Sign me up. Your father alone is worth a fortune.", mood="excited", shot="close")
L("globo", "And community led upgrading. Residents in Makoko drew up their own plans for water, toilets and schools. Cheaper, but small.", mood="teach", shot="close",
  board="COMMUNITY-LED upgrading: bottom-up")
L("tara", "So to judge a scheme, ask. Who benefits? How many? Who pays? Does it fix the cause, or just the symptom?", mood="determined", shot="close",
  boardClear=True, board="JUDGE: who benefits? how many?", diagram=D_JUDGE)
L("globo", "Not just, it looks shiny.", mood="eyeroll", shot="close",
  board="cost · sustainable? cause or symptom?", gap=0.3)

confess("mum", "MUM · Deal Hunter · Has Never Paid Full Price")
L("mum", "At Balogun market, a trader out-bargained me. Three fabrics I didn't need, and I said thank you. I've met my hero.", mood="happy", gap=0.5)

# ---------------- RECAP ----------------
confess("globo", "GLOBO · Recap Globe · Spinning Slowly For Dad")
L("globo", "Recap. One. Lagos. A lagoon port, not the capital. Estimates vary, fifteen to over twenty million.", mood="teach", boardClear=True, board="1. Lagoon port · NOT capital · 15–20m+")
L("globo", "Two. Push, pull, and natural increase.", mood="teach", board="2. Push + pull + natural increase")
L("globo", "Three. Makoko, the go-slow, Olusosun, floods.", mood="teach", board="3. Makoko · go-slow · Olusosun · floods")
L("globo", "Four. The informal economy. Jobs, but no security.", mood="teach", board="4. Informal economy: jobs vs security")
L("globo", "Five. Buses, trains, Eko Atlantic. Always ask who benefits.", mood="smug", board="5. Judge schemes: who benefits?", gap=0.5)

# ---------------- BUTTON ----------------
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("mum", "Dinner! Vegetarian jollof rice and fried plantain. From a free cooking video.", mood="happy", shot="close", prop="plate")
L("dad", "Announcement. Rao Enterprises has made its first investment in Nollywood.", mood="smug", shot="close")
L("tara", "You bought a film?", mood="shock", shot="close")
L("dad", "I bought a ticket. To a film. At full price.", mood="smug", shot="close")
L("mum", "Full price?", mood="shock", shot="two")
sfx("ding")
L("globo", "A Rao paid full price. Mark the date. I'll be in the drawer, recovering.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "A cousin finds Tunde a market job in Lagos. Push or pull?", "PULL", "attracts him TO the city · chain migration",
  "Question one. Tunde's cousin finds him a job on a market stall in Lagos. Push factor, or pull factor?",
  "Pull. It attracts him to the city. And family helping is chain migration.")
challenge(2, "Why can uncollected rubbish make floods worse in Lagos?", "BLOCKS DRAINS", "rubbish → drains blocked → rain can't escape",
  "Question two. Why can uncollected rubbish make flooding worse in Lagos?",
  "It blocks the drains, so heavy rain can't flow away, and low lying streets flood.")
challenge(3, "Which scheme mainly benefits the wealthy?", "EKO ATLANTIC", "reclaimed land · ~250,000 people · expensive",
  "Question three. Which mainly benefits the wealthy? BRT buses, or Eko Atlantic?",
  "Eko Atlantic. Homes most Lagosians could never afford.")
end_card()
