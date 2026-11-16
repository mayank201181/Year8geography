# "Totally Raotional: Off The Map" S02E01 "Six Figures And Still Lost" (Topic: The Geographer's Toolkit)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: grid-references, latitude-longitude, scale-distance, graphs-and-charts, describing-patterns.

EP = dict(topic="geo-skills",
          logline="Dad, a self-declared six-figure man, leads the family on a 'ten-minute stroll' with a paper map and gets them gloriously lost. "
                  "Globo, a grumpy globe from the junk drawer, teaches grid references, latitude and longitude, scale, graphs and how to describe a pattern.")

D_GRID = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250">
<rect width="520" height="250" fill="#0f172a"/>
<rect x="60" y="20" width="240" height="200" fill="#1e3a2f" stroke="#94a3b8" stroke-width="1.5"/>
<rect x="120" y="120" width="60" height="50" fill="#fde047" fill-opacity="0.25" stroke="#fde047" stroke-width="3"/>
<path d="M120 20 V220 M180 20 V220 M240 20 V220 M60 70 H300 M60 120 H300 M60 170 H300" stroke="#60a5fa" stroke-width="1.5"/>
<g font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">
<text x="60" y="240">45</text><text x="120" y="240">46</text><text x="180" y="240">47</text><text x="240" y="240">48</text><text x="300" y="240">49</text>
</g>
<g font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="end">
<text x="52" y="225">20</text><text x="52" y="175">21</text><text x="52" y="125">22</text><text x="52" y="75">23</text><text x="52" y="25">24</text>
</g>
<path d="M138 140 l-7 12 h14z M136 128 h4 v-8 h-4z" fill="#f8fafc"/>
<circle cx="138" cy="135" r="3" fill="#ef4444"/>
<rect x="203" y="93" width="14" height="12" fill="#f472b6"/>
<path d="M252 32 l-8 12 h16z" fill="#4ade80"/>
<g font-family="sans-serif" font-size="13" font-weight="bold" fill="#f8fafc">
<text x="146" y="160">Church 463217</text><text x="214" y="90" text-anchor="middle">School</text><text x="262" y="56">Camp</text>
</g>
<g transform="translate(420 120)" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047" text-anchor="middle">
<path d="M0 -62 V62 M-62 0 H62 M-40 -40 L40 40 M40 -40 L-40 40" stroke="#fde047" stroke-width="2"/>
<text y="-68">N</text><text y="80">S</text><text x="74" y="5">E</text><text x="-74" y="5">W</text>
<text x="52" y="-46">NE</text><text x="52" y="58">SE</text><text x="-52" y="58">SW</text><text x="-52" y="-46">NW</text>
</g>
<text x="180" y="14" font-family="sans-serif" font-size="12" fill="#cbd5e1" text-anchor="middle">eastings → along · northings ↑ up</text>
</svg>"""

D_GLOBE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">
<rect width="520" height="240" fill="#0c4a6e"/>
<g stroke-width="2" fill="none">
<path d="M26 120 H494" stroke="#fde047" stroke-width="3"/>
<path d="M26 91 H494 M26 149 H494" stroke="#fb923c" stroke-dasharray="8 6"/>
<path d="M26 39 H494 M26 201 H494" stroke="#7dd3fc" stroke-dasharray="4 6"/>
<path d="M260 10 V230" stroke="#f472b6" stroke-width="3"/>
</g>
<g font-family="sans-serif" font-size="13" font-weight="bold">
<text x="30" y="114" fill="#fde047">Equator 0°</text>
<text x="30" y="86" fill="#fb923c">Tropic of Cancer ~23.5°N</text>
<text x="30" y="165" fill="#fb923c">Tropic of Capricorn ~23.5°S</text>
<text x="30" y="34" fill="#7dd3fc">Arctic Circle ~66.5°N</text>
<text x="30" y="217" fill="#7dd3fc">Antarctic Circle ~66.5°S</text>
<text x="266" y="24" fill="#f472b6">Prime Meridian 0°</text>
</g>
<circle cx="395" cy="119" r="7" fill="#ef4444" stroke="#fff" stroke-width="2"/>
<text x="404" y="140" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff">Singapore ~1°N 104°E</text>
</svg>"""

D_SCALE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<g font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">
<rect x="40" y="30" width="80" height="12" fill="#f8fafc"/><rect x="120" y="30" width="80" height="12" fill="#334155" stroke="#f8fafc"/>
<rect x="200" y="30" width="80" height="12" fill="#f8fafc"/>
<text x="40" y="60">0</text><text x="120" y="60">1 km</text><text x="200" y="60">2 km</text><text x="280" y="60">3 km</text>
<text x="160" y="22" font-weight="bold" fill="#fde047">1:50 000 · 2 cm on map = 1 km</text>
</g>
<path d="M50 160 L120 110 L170 150 L250 100 L300 140" stroke="#4ade80" stroke-width="5" fill="none"/>
<path d="M50 160 L300 140" stroke="#f472b6" stroke-width="3" stroke-dasharray="8 6"/>
<g font-family="sans-serif" font-size="14" font-weight="bold">
<text x="40" y="182" fill="#fff">A</text><text x="306" y="146" fill="#fff">B</text>
<text x="330" y="110" fill="#4ade80">winding: paper edge</text>
<text x="330" y="160" fill="#f472b6">straight: ruler</text>
</g>
</svg>"""

D_GRAPH = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<path d="M60 20 V190 H500" stroke="#e2e8f0" stroke-width="2" fill="none"/>
<g fill="#38bdf8">
<rect x="75" y="22" width="50" height="168"/><rect x="145" y="57" width="50" height="133"/><rect x="215" y="92" width="50" height="98"/>
<rect x="285" y="67" width="50" height="123" fill="#ef4444"/><rect x="355" y="134" width="50" height="56"/><rect x="425" y="155" width="50" height="35"/>
</g>
<g font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">
<text x="100" y="206">0.2</text><text x="170" y="206">0.4</text><text x="240" y="206">0.6</text><text x="310" y="206">0.8</text><text x="380" y="206">1.0</text><text x="450" y="206">1.2</text>
<text x="280" y="224">distance from MRT (km)</text>
</g>
<g font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">
<text x="100" y="40">120</text><text x="170" y="75">95</text><text x="240" y="110">70</text><text x="310" y="60" fill="#fca5a5">88 ?!</text><text x="380" y="128">40</text><text x="450" y="149">25</text>
</g>
<text x="20" y="110" font-family="sans-serif" font-size="12" fill="#cbd5e1" transform="rotate(-90 20 110)" text-anchor="middle">pedestrians</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 280), ("mum", 640), ("dad", 980)])
L("dad", "Family! Saturday. Nature walk. No phones. Just me, a paper map, and genius.", mood="excited", shot="close", prop="map")
L("mum", "I packed thosai, and chips. Two for one at the petrol station.", mood="happy", shot="close", prop="bucket")
L("tara", "Dad. Last week you got lost in a car park. On the level you parked on.", mood="deadpan", shot="close")
L("dad", "That car park moved. Look, Tara, I am a six figure man.", mood="smug", shot="close")
L("tara", "Six figure salary, or six figure grid reference?", mood="deadpan", shot="close")
L("dad", "What's a grid reference?", mood="thinking", shot="close", gap=0.4)
freeze("SIX FIGURES", 2.4, narrator="Narrator: He had neither.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My father bought that map at a garage sale. It has a curry stain shaped like Malaysia.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: GRID REFERENCES, COMPASS, LATITUDE AND LONGITUDE ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Before we lose Dad in a forest. The drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who disturbs my rest? Ah. The Raos. Let me guess. Your father has a map.", mood="bored", shot="close")
L("globo", "Your father once asked me where north was. I was face down in a drawer.", mood="eyeroll", shot="close", gap=0.4)

confess("globo", "GLOBO · Retired Classroom Globe · Lives In The Junk Drawer")
L("globo", "I am Globo. Thirty years on a teacher's desk. Spun, dropped, once used as a football.", mood="smug", gap=0.5)

scene("park", [("tara", 260), ("mum", 560), ("dad", 820)], "THE NATURE WALK · Saturday, 9 a.m. · Already Lost")
L("dad", "The picnic spot is here. Next to this little church.", mood="smug", shot="close", prop="map")
L("mum", "There are three churches on that map.", mood="annoyed", shot="two")
scene("park", [("tara", 260), ("dad", 600), ("globo", 960)])
sfx("poof")
L("globo", "Which is why we use grid references. The blue lines are one kilometre apart, so each square is one kilometre by one kilometre.", mood="teach", shot="close",
  boardClear=True, board="OS grid squares: 1 km × 1 km", diagram=D_GRID)
L("globo", "Eastings are the lines going up, numbered along the bottom. Northings go across, numbered up the side.", mood="teach", shot="close",
  board="EASTINGS first, then NORTHINGS")
L("tara", "Along the corridor, then up the stairs.", mood="happy", shot="close", board="Along the corridor, up the stairs")
L("globo", "The church square's bottom left corner is easting forty six, northing twenty one. Four six two one.", mood="teach", shot="close",
  boardClear=True, board="4-figure: 4621 = a whole 1 km square", diagram=D_GRID)
L("globo", "Split each side into tenths. The church is three tenths across and seven up. Six figures. Four six three, two one seven.", mood="teach", shot="close",
  board="6-figure: 463217 = a point")
L("tara", "Each tenth is a hundred metres. So six figures gets you within about a hundred metres.", mood="thinking", shot="close",
  board="Each tenth = 100 m → within ~100 m")
L("dad", "That's the six figures! I knew I had six figures!", mood="smug", shot="close")
L("globo", "You had zero figures. You had a stain shaped like Malaysia.", mood="eyeroll", shot="close", gap=0.3)
L("globo", "The eight point compass. North. North east. East. South east. South. South west. West. North west. Always from one place to another.", mood="teach", shot="close",
  boardClear=True, board="8-point compass: N NE E SE S SW W NW", diagram=D_GRID)
L("tara", "The campsite is north east of the church. So the church is south west of the campsite.", mood="happy", shot="close",
  board="Camp is NE of church → church SW of camp")
L("globo", "North is the top of the map, unless an arrow says otherwise.", mood="teach", shot="close",
  board="North = top of map, unless an arrow says")
sfx("ding")

card("MEANWHILE, AT THE PICNIC MAT", "Mum has opened the thosai early", 2.4)
scene("park", [("mum", 300), ("tara", 620), ("globo", 960)])
L("globo", "Grid references only work on one map. For the whole planet, latitude and longitude, in degrees.", mood="teach", shot="close",
  boardClear=True, board="Global grid: measured in DEGREES", diagram=D_GLOBE)
L("mum", "Latitude is a late check out. Longitude is a long holiday. I know these words.", mood="smug", shot="close")
L("tara", "No. Latitude is how far north or south of the Equator. Zero there, up to ninety at the poles.", mood="deadpan", shot="close",
  board="LATITUDE: N or S of Equator, 0 to 90")
L("globo", "Longitude is east or west of the Prime Meridian, which runs through Greenwich, in London. Up to one hundred and eighty.", mood="teach", shot="close",
  board="LONGITUDE: E or W of Greenwich, 0 to 180")
L("globo", "The Tropics are at about twenty three and a half degrees north and south. The Arctic and Antarctic Circles, about sixty six and a half.", mood="teach", shot="close",
  boardClear=True, board="Tropics ~23.5° · Polar circles ~66.5°", diagram=D_GLOBE)
L("tara", "Latitude first. Singapore is about one degree north, one hundred and four degrees east.", mood="happy", shot="close",
  board="Latitude FIRST: Singapore ≈ 1°N, 104°E")
L("globo", "About a hundred and forty kilometres from the Equator. So, no winter. Just your father, sweating.", mood="smug", shot="close",
  board="1° of latitude ≈ 111 km")
confess("mum", "MUM · Deal Hunter · Has Never Paid Full Price")
L("mum", "One degree of latitude is a hundred and eleven kilometres. I asked for a bulk discount on degrees. He said no. Rude.", mood="annoyed", gap=0.5)

# ---------------- ACT 2: SCALE AND DISTANCE ----------------
card("BACK IN THE PARK", "Dad has found the route. Allegedly.", 2.2)
scene("park", [("tara", 260), ("dad", 600), ("globo", 960)])
L("dad", "The waterfall is only seven centimetres away on the map. A ten minute stroll.", mood="smug", shot="close", prop="map")
L("globo", "Read the scale. One to fifty thousand. One centimetre on the map is fifty thousand centimetres on the ground.", mood="teach", shot="close",
  boardClear=True, board="1:50 000 → 1 cm = 50 000 cm", diagram=D_SCALE)
L("tara", "A hundred thousand centimetres make a kilometre. So one centimetre is half a kilometre.", mood="thinking", shot="close",
  board="= 0.5 km · so 2 cm = 1 km")
L("tara", "Seven times a half. Three and a half kilometres, Dad. That's a hike.", mood="deadpan", shot="close",
  board="7 cm × 0.5 = 3.5 km")
L("globo", "And the path curves. Use a ruler for straight lines, and a paper edge for winding routes, pivoting at every bend.", mood="teach", shot="close",
  boardClear=True, board="Straight: ruler · Winding: PAPER EDGE", diagram=D_SCALE)
L("globo", "One to twenty five thousand is a larger scale. Four centimetres make a kilometre. More detail, less ground.", mood="eyeroll", shot="close",
  board="1:25 000 → 1 cm = 0.25 km (4 cm = 1 km)")
sfx("trombone")

confess("dad", "VIKRAM RAO · Dad · Self-Described Navigation Genius")
L("dad", "We did not get lost. We took the scenic route. Winding. On purpose.", mood="smug", gap=0.6)

# ---------------- ACT 3: GRAPHS, CHARTS, AND DESCRIBING PATTERNS ----------------
card("THAT EVENING", "The hawker centre. Dad has a chart.", 2.4)
scene("hawker", [("tara", 260), ("dad", 560), ("uncle", 1000)])
L("dad", "Uncle Hock, invest in my business. Look at my sales graph. Through the roof!", mood="excited", shot="close", prop="tablet")
L("uncle", "Your axis starts at nine hundred and ninety eight. You sold three more chapatis.", mood="deadpan", shot="close")
scene("hawker", [("tara", 260), ("dad", 560), ("globo", 820)])
sfx("poof")
L("globo", "Check where the axis starts. A cut off axis makes tiny changes look huge.", mood="teach", shot="close",
  boardClear=True, board="Cut-off axis EXAGGERATES change")
L("globo", "Line graphs show change over time. Bars compare categories. Pies, parts of a whole. Scatter graphs, a relationship.", mood="teach", shot="close",
  board="LINE: time · BAR: groups · PIE: parts")
L("tara", "A choropleth map shades areas by value, like population density. A proportional symbol map uses sizes, like circles on MRT stations.", mood="happy", shot="close",
  board="CHOROPLETH: shading · PROPORTIONAL: size")
L("globo", "Read the key first. Range is highest minus lowest. Rate of change is change divided by time.", mood="teach", shot="close",
  boardClear=True, board="Range = highest − lowest")
L("globo", "The world hit seven billion in twenty eleven, and eight billion in twenty twenty two. About ninety one million a year.", mood="teach", shot="close",
  board="Rate = change ÷ time: 1 bn ÷ 11 yr ≈ 91 m/yr")
L("dad", "Percentage change! Four billion to six billion. Divide the change by six.", mood="smug", shot="close")
L("tara", "By the old value, Dad. Two divided by four is zero point five. Times a hundred. Fifty percent.", mood="deadpan", shot="close",
  board="% change = (new − old) ÷ OLD × 100")
L("globo", "Divide by the old one. Never by your father. That gives you zero.", mood="smug", shot="close", board="4 bn → 6 bn = +50%")
sfx("trombone")

scene("hawker", [("tara", 260), ("mum", 560), ("globo", 860)])
L("mum", "I counted people at six spots, walking away from the MRT. My graph says, lots, then less.", mood="happy", shot="close", prop="book")
L("globo", "That's not a description. That's a mood. Use TEA. Trend, evidence, anomaly.", mood="eyeroll", shot="close",
  boardClear=True, board="TEA: TREND · EVIDENCE · ANOMALY", diagram=D_GRAPH)
L("tara", "Trend. Pedestrians fall as you go further from the MRT. Evidence. From a hundred and twenty, down to twenty five.", mood="happy", shot="close",
  board="Falls from 120 (0.2 km) to 25 (1.2 km)")
L("tara", "Anomaly. Site four had eighty eight. More than site three.", mood="thinking", shot="close",
  board="Anomaly: site 4 = 88, higher than site 3")
L("mum", "Site four had a bubble tea shop. Half price.", mood="excited", shot="close")
L("globo", "That is explaining. Describe means what you see, with figures. Explain gives reasons. Evaluate means weigh both sides, then judge.", mood="teach", shot="close",
  boardClear=True, board="DESCRIBE: what + figures · EXPLAIN: why")
L("globo", "Your counts are primary data. The Census is secondary. Someone else collected it.", mood="teach", shot="close",
  board="PRIMARY: you collect · SECONDARY: others")
L("globo", "On maps, describe the spread. Clustered, linear, dispersed, sparse. Then place it with clock. Continents, lines of latitude, oceans, countries, compass.", mood="teach", shot="close",
  boardClear=True, board="Clustered · linear · dispersed · sparse")
L("tara", "Like hawker centres. Clustered near housing estates.", mood="happy", shot="close",
  board="CLOCC: Continents, Lines of latitude,")
L("globo", "Now the recap. Spin me. Not you, Vikram.", mood="smug", shot="close",
  board="Oceans, Countries, Compass", gap=0.3)

confess("globo", "GLOBO · Recap Globe · Still Smells Of Thosai")
L("globo", "Recap. One. Along the corridor, then up the stairs. Four figures for a square, six for a point.", mood="teach", boardClear=True, board="1. Easting first · 4-fig square, 6-fig point")
L("globo", "Two. Latitude, north or south. Longitude, east or west. Latitude first.", mood="teach", board="2. Lat (N/S) first, then long (E/W)")
L("globo", "Three. At one to fifty thousand, two centimetres is one kilometre.", mood="teach", board="3. 1:50 000 → 2 cm = 1 km")
L("globo", "Four. For a change in percent, divide by the old value. Check the axis.", mood="teach", board="4. % change ÷ OLD · check the axis")
L("globo", "Five. Describe with TEA and clock. And never follow a man with a garage sale map.", mood="smug", board="5. TEA for graphs · CLOCC for maps", gap=0.5)

# ---------------- BUTTON ----------------
scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("dad", "Next Saturday, I've given everyone a six figure grid reference for the picnic.", mood="smug", shot="close", prop="map")
L("tara", "That's actually correct. Eastings first and everything.", mood="shock", shot="close")
L("mum", "Wait. That square is the thosai shop.", mood="thinking", shot="close")
L("dad", "I said picnic. Not outdoors. Six figures. Within a hundred metres of air con.", mood="smug", shot="close")
sfx("ding")
L("globo", "Put me back in the drawer. Eastings first. I'm sore on the Pacific side.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "The church is 3 tenths across and 7 tenths up in square 4621. Six-figure grid reference?", "463217", "46 + 3 → 463 · 21 + 7 → 217",
  "Question one. The church is in square four six two one, three tenths across and seven tenths up. Six figure grid reference?",
  "Four six three, two one seven. Along the corridor first, then up the stairs.")
challenge(2, "On a 1:50 000 map, two villages are 9 cm apart. How far apart on the ground?", "4.5 KM", "1 cm = 0.5 km → 9 × 0.5 = 4.5 km",
  "Question two. On a one to fifty thousand map, two villages are nine centimetres apart. How far is that on the ground?",
  "Four and a half kilometres. Nine times a half. And don't forget the units.")
challenge(3, "World population grew from 5 billion to 8 billion. What is the percentage increase?", "60%", "(8 − 5) ÷ 5 = 0.6 → × 100 = 60%",
  "Question three. The world's population grew from five billion to eight billion. What is the percentage increase?",
  "Sixty percent. The change is three. Divide by the old value, five. Zero point six. Thirty seven and a half means you divided by the new one.")
end_card()
