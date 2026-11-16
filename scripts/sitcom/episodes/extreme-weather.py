# "Totally Raotional: Off The Map" S02E08 "Isobar None" (Topic: Extreme Weather & Forecasting)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: types-of-extreme-weather, tropical-storms, measuring-weather, forecasting.

EP = dict(topic="extreme-weather",
          logline="Dad launches Rao Weather, a forecasting channel run by looking out of the window, and a Sumatra squall soaks the laundry. "
                  "Globo explains extreme weather, Singapore's monsoons and squalls, how typhoons form, weather instruments, and how forecasts and warnings save lives.")

D_BELT = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0c4a6e"/>
<rect y="22" width="520" height="56" fill="#f87171" opacity="0.45"/>
<rect y="122" width="520" height="56" fill="#f87171" opacity="0.45"/>
<rect y="78" width="520" height="44" fill="#38bdf8" opacity="0.25"/>
<line x1="0" y1="100" x2="520" y2="100" stroke="#fde047" stroke-width="2" stroke-dasharray="8 5"/>
<text x="10" y="18" font-family="sans-serif" font-size="14" fill="#e2e8f0">30°N</text>
<text x="10" y="74" font-family="sans-serif" font-size="14" fill="#e2e8f0">5°N</text>
<text x="10" y="136" font-family="sans-serif" font-size="14" fill="#e2e8f0">5°S</text>
<text x="10" y="194" font-family="sans-serif" font-size="14" fill="#e2e8f0">30°S</text>
<text x="300" y="56" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fff" text-anchor="middle">STORM BELT: warm sea + spin</text>
<text x="300" y="156" font-family="sans-serif" font-size="17" font-weight="bold" fill="#fff" text-anchor="middle">STORM BELT: warm sea + spin</text>
<text x="470" y="96" font-family="sans-serif" font-size="14" fill="#fde047" text-anchor="end">Equator</text>
<circle cx="250" cy="97" r="7" fill="#22c55e" stroke="#fff" stroke-width="2"/>
<text x="262" y="116" font-family="sans-serif" font-size="14" font-weight="bold" fill="#bbf7d0">Singapore ~1°N: no spin</text>
</svg>"""

D_STORM = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">
<rect width="520" height="210" fill="#0f172a"/>
<rect y="170" width="520" height="40" fill="#0369a1"/>
<path d="M60 170 C60 120 90 100 110 110 C125 95 140 120 140 170Z" fill="#cbd5e1"/>
<path d="M380 170 C380 120 400 95 420 110 C440 100 460 120 460 170Z" fill="#cbd5e1"/>
<path d="M170 170 C165 90 190 40 230 36 L230 170Z" fill="#e2e8f0"/>
<path d="M350 170 C355 90 330 40 290 36 L290 170Z" fill="#e2e8f0"/>
<path d="M260 50 V150" stroke="#fde047" stroke-width="3" stroke-dasharray="6 4"/>
<path d="M260 160 l-7 -12 h14z" fill="#fde047"/>
<path d="M200 160 V70 M320 160 V70" stroke="#f87171" stroke-width="4"/>
<path d="M200 62 l-7 12 h14z M320 62 l-7 12 h14z" fill="#f87171"/>
<text x="260" y="22" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fde047" text-anchor="middle">EYE: calm, sinking air</text>
<text x="200" y="196" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">EYEWALL</text>
<text x="320" y="196" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">EYEWALL</text>
<text x="100" y="196" font-family="sans-serif" font-size="14" fill="#e0f2fe" text-anchor="middle">rain bands</text>
<text x="420" y="196" font-family="sans-serif" font-size="14" fill="#e0f2fe" text-anchor="middle">rain bands</text>
<text x="20" y="40" font-family="sans-serif" font-size="13" fill="#fca5a5">red = warm moist air rising</text>
</svg>"""

D_INSTR = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170">
<rect width="520" height="170" fill="#0f172a"/>
<rect y="130" width="520" height="40" fill="#166534"/>
<rect x="40" y="46" width="70" height="44" fill="#f8fafc"/>
<path d="M32 46 L75 28 L118 46Z" fill="#f8fafc"/>
<path d="M46 56 H104 M46 64 H104 M46 72 H104 M46 80 H104" stroke="#94a3b8" stroke-width="2"/>
<path d="M55 90 V130 M95 90 V130" stroke="#f8fafc" stroke-width="4"/>
<text x="75" y="160" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">Stevenson screen</text>
<path d="M190 78 L230 78 L218 92 L202 92Z" fill="#e2e8f0"/>
<rect x="200" y="92" width="20" height="38" fill="#bae6fd"/>
<text x="210" y="160" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">rain gauge</text>
<path d="M320 130 V60 M296 60 H344" stroke="#e2e8f0" stroke-width="4"/>
<circle cx="292" cy="56" r="9" fill="#a5b4fc"/><circle cx="348" cy="56" r="9" fill="#a5b4fc"/>
<text x="320" y="160" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">anemometer</text>
<path d="M440 130 V70 M405 70 H470" stroke="#e2e8f0" stroke-width="4"/>
<path d="M400 70 l14 -9 v18z" fill="#fde047"/><path d="M462 58 h14 v24 h-14z" fill="#a5b4fc"/>
<text x="440" y="160" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">wind vane</text>
<text x="440" y="44" font-family="sans-serif" font-size="12" fill="#fde047" text-anchor="middle">points INTO the wind</text>
</svg>"""

D_MAP = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">
<rect width="520" height="210" fill="#0f172a"/>
<g fill="none" stroke="#e2e8f0" stroke-width="2">
<ellipse cx="130" cy="100" rx="18" ry="14"/><ellipse cx="130" cy="100" rx="34" ry="27"/><ellipse cx="130" cy="100" rx="50" ry="40"/><ellipse cx="130" cy="100" rx="66" ry="53"/><ellipse cx="130" cy="100" rx="82" ry="66"/>
<ellipse cx="390" cy="100" rx="40" ry="30"/><ellipse cx="390" cy="100" rx="80" ry="62"/>
</g>
<text x="130" y="108" font-family="sans-serif" font-size="24" font-weight="bold" fill="#f87171" text-anchor="middle">L</text>
<text x="390" y="108" font-family="sans-serif" font-size="24" font-weight="bold" fill="#60a5fa" text-anchor="middle">H</text>
<text x="130" y="186" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">close isobars: STRONG wind</text>
<text x="390" y="186" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle">far apart: light wind</text>
<line x1="20" y1="202" x2="90" y2="202" stroke="#60a5fa" stroke-width="3"/>
<path d="M28 202 l6 -9 l6 9z M48 202 l6 -9 l6 9z M68 202 l6 -9 l6 9z" fill="#60a5fa"/>
<text x="96" y="206" font-family="sans-serif" font-size="12" fill="#bfdbfe">cold front</text>
<line x1="300" y1="202" x2="370" y2="202" stroke="#f87171" stroke-width="3"/>
<path d="M308 202 a6 6 0 0 1 12 0z M330 202 a6 6 0 0 1 12 0z M352 202 a6 6 0 0 1 12 0z" fill="#f87171"/>
<text x="376" y="206" font-family="sans-serif" font-size="12" fill="#fecaca">warm front</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)], "TAMPINES · Quarter To Six In The Morning · July")
L("mum", "Tara! The wind! My new towels are on the bamboo poles! Three for ten dollars!", mood="shock", shot="close")
L("tara", "I'm awake, Mum. The pigeons are awake.", mood="deadpan", shot="close")
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Relax. I checked my forecast. Last night I looked out of the window. Not one cloud. Sunny all week.", mood="smug", shot="close", prop="tablet")
L("dad", "That's why I've launched a weather channel. Rao Weather. Fifty two subscribers. Mostly your aunties.", mood="smug", shot="close")
L("tara", "Dad. You looked out of the window. At night. It was dark.", mood="deadpan", shot="close")
L("dad", "Exactly. Zero clouds visible.", mood="smug", shot="close")
sfx("whoosh")
freeze("\"SUNNY ALL WEEK\"", 2.4, narrator="Narrator: The towels were found two blocks away.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My father's weather forecast is a window. At night.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: TYPES OF EXTREME WEATHER + SINGAPORE ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Soggy towels, soggy Dad. Time to open the drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who wakes a globe at dawn? That squall rattled my Antarctica.", mood="bored", shot="close")
L("tara", "Globo, Dad's calling it extreme weather.", mood="worried", shot="two")
L("globo", "Extreme weather is much more severe than usual for that place and season, and causes harm. Thirty five degrees is normal in Dubai. In London, it's a heatwave.", mood="teach", shot="close",
  boardClear=True, board="EXTREME = much worse than usual there")
L("globo", "Seven types. Tropical storms, droughts, heatwaves, blizzards, sandstorms, flash floods, and tornadoes, like in the central United States.", mood="teach", shot="close",
  board="Storm · drought · heatwave · blizzard")
L("tara", "So rising air gives storms, and sinking air gives droughts and heatwaves.", mood="happy", shot="close",
  board="Sandstorm · flash flood · tornado")
L("globo", "Correct. In Singapore, the monsoons set the seasons. Northeast, December to early March, wet. Southwest, June to September, drier. In between, afternoon thunderstorms.", mood="teach", shot="close",
  boardClear=True, board="NE Monsoon: Dec–early Mar (wet)")
L("tara", "So what hit us this morning?", mood="thinking", shot="close", board="SW Monsoon: Jun–Sep (drier)")
L("globo", "A Sumatra squall. A line of storms that forms at night over the Strait of Malacca, sweeps east, and arrives before dawn, with gusts of about forty to eighty kilometres an hour.", mood="teach", shot="close",
  board="Inter-monsoons: afternoon storms")
L("globo", "Heavy rain on concrete causes flash floods, like Orchard Road in twenty ten. Rain must go somewhere. Usually your father's towels.", mood="teach", shot="close",
  board="SUMATRA SQUALL: before dawn, 40–80 km/h")
L("tara", "Hence the giant underground tank at Stamford.", mood="deadpan", shot="close", board="Concrete → flash floods (Orchard Rd)", gap=0.4)


# ---------------- ACT 2: TROPICAL STORMS ----------------
card("MEANWHILE, AT RAO WEATHER", "A studio rented by the hour. Mum got a deal.", 2.0)
scene("weatherdesk", [("dad", 300), ("mum", 640)], "RAO WEATHER STUDIO · Rented From A Karaoke Bar")
L("dad", "Breaking news. A typhoon. Right here. Next Tuesday.", mood="excited", shot="close")
L("mum", "Ooh. Will the shops have a typhoon sale?", mood="excited", shot="close")
poof("globo", 980)
L("globo", "Singapore is about one degree north of the Equator. Storms need spin, from the Coriolis effect, and within about five degrees of the Equator there's almost none.", mood="teach", shot="close",
  boardClear=True, board="SG ~1° N: almost NO Coriolis spin", diagram=D_BELT)
L("dad", "So what does a typhoon need? I'll order one.", mood="thinking", shot="close", board="No spin → (almost) no typhoons ✔")
L("globo", "Sea at least twenty six point five degrees. Five to thirty degrees from the Equator. Low wind shear, so it isn't torn apart. And the Coriolis effect, for spin.", mood="teach", shot="close",
  boardClear=True, board="Sea ≥ 26.5 °C · 5–30° from Equator")
L("globo", "Warm water evaporates, rises and condenses, releasing heat. Low pressure pulls in more air, which spirals. A heat engine. Over land, it runs out of fuel.", mood="teach", shot="close",
  board="Low shear · Coriolis → SPIN · weak on land")
L("globo", "Same storm, three names. Hurricane in the Atlantic, typhoon in the north west Pacific, cyclone in the Indian Ocean. A calm eye of sinking air. Around it, the eyewall, with the worst winds. Then rain bands.", mood="teach", shot="close",
  boardClear=True, board="Hurricane · typhoon · cyclone", diagram=D_STORM)
L("dad", "So I'll stand in the eye. Calm. Sunny.", mood="smug", shot="close", board="EYE calm · EYEWALL worst · rain bands")
L("globo", "Then the eye passes, and the eyewall hits you again from the other side. You'd be forecasting from Johor.", mood="eyeroll", shot="close", gap=0.3)
L("globo", "The Saffir Simpson scale rates wind. Category one starts at one hundred and nineteen kilometres an hour. Category five, two hundred and fifty two. But storm surge, the sea pushed onto the coast, is often the biggest killer.", mood="teach", shot="close",
  boardClear=True, board="Cat 1: 119–153 km/h · Cat 5: ≥252")
L("globo", "In twenty thirteen, Typhoon Haiyan, a category five, hit the Philippines. A surge of around five metres swept through Tacloban. About six thousand three hundred people died, and about four million were displaced.", mood="teach", shot="close",
  board="STORM SURGE: often the biggest killer")
L("mum", "Oh. Those poor families. No more typhoon sale jokes from me.", mood="sad", shot="close", board="HAIYAN 2013: Cat 5 · ~6,300 deaths")
L("globo", "Countries including Singapore sent aid. The rebuilding included stronger homes and new mangroves.", mood="teach", shot="close",
  board="~4 million displaced · aid + mangroves", gap=0.4)

confess("dad", "VIKRAM RAO · Dad · Self-Described Meteorology Genius")
L("dad", "I wasn't wrong. I was early. And about two thousand kilometres too far south.", mood="smug", gap=0.6)

# ---------------- ACT 3: MEASURING THE WEATHER ----------------
card("MEANWHILE, ON THE HDB CORRIDOR", "Mum's weather station kit. On sale, obviously.", 2.0)
scene("park", [("tara", 240), ("mum", 500), ("dad", 780)], "BLOCK TWO ONE FIVE · Corridor Weather Station")
L("mum", "A whole weather station kit. Seventy percent off! Box only slightly squashed!", mood="excited", shot="close", prop="bucket")
L("dad", "I taped the thermometer to the sunny wall. Forty one degrees! Rao Weather exclusive!", mood="excited", shot="close")
poof("globo", 1050)
L("tara", "Dad, you measured the wall. And the Sun. Air temperature goes in the shade.", mood="deadpan", shot="close",
  boardClear=True, board="Thermometer in SHADE, not on a wall", diagram=D_INSTR)
L("globo", "In a Stevenson screen. White, slatted, about one point two five metres above grass.", mood="teach", shot="close",
  board="STEVENSON SCREEN: white, slatted, 1.25 m")
L("globo", "A rain gauge measures rain in millimetres. A barometer, air pressure in hectopascals. An anemometer, wind speed. A hygrometer, humidity.", mood="teach", shot="close",
  board="Rain gauge: mm · Barometer: hPa")
L("dad", "The wind vane points north. So the wind is going north!", mood="smug", shot="close")
L("tara", "No. A wind vane points to where the wind comes from. That's a north wind, blowing from the north.", mood="deadpan", shot="close",
  boardClear=True, board="Anemometer: speed · Hygrometer: %")
L("globo", "Winds are named after where they come from. Unlike your father's ideas.", mood="smug", shot="close",
  board="WIND VANE: points to where wind is FROM")
L("globo", "Satellites track storms from space. Radar shows where it's raining now. And the mean is the total, divided by the number of readings.", mood="teach", shot="close",
  board="Satellites + radar · MEAN = total ÷ n")
L("mum", "Mean? This morning's rain was very mean. It took my towels.", mood="annoyed", shot="close", gap=0.4)


# ---------------- ACT 4: FORECASTING AND WARNINGS ----------------
card("RAO WEATHER · LIVE", "Episode two. Now with an actual map.", 2.2)
scene("weatherdesk", [("tara", 260), ("dad", 600), ("globo", 960)])
L("dad", "Tonight, my ninety day forecast. Day one, sunny. Day ninety, also sunny.", mood="smug", shot="close")
L("globo", "Stop. The map first. Low pressure, L, means rising air. Cloud, rain and wind. High pressure, H, means sinking air. Dry and settled.", mood="teach", shot="close",
  boardClear=True, board="L: rising air → cloud, rain, wind", diagram=D_MAP)
L("tara", "And isobars join places with the same pressure. Close together means strong winds.", mood="happy", shot="close",
  board="H: sinking air → dry, settled")
L("globo", "And fronts bring bands of rain. Cold fronts, blue triangles. Warm fronts, red semicircles.", mood="teach", shot="close",
  board="Close ISOBARS = strong winds")
L("dad", "Isobars? Never heard of them. Isobar none.", mood="smug", shot="close")
sfx("trombone")
L("globo", "Real forecasts use millions of observations and supercomputer models, run many times. If the runs agree, be confident.", mood="teach", shot="close",
  boardClear=True, board="Observe → model → ENSEMBLE → warn")
L("globo", "But the atmosphere is chaotic. Tiny errors grow every hour. Day by day detail has little skill beyond about two weeks.", mood="teach", shot="close",
  board="Chaos: errors grow → < ~2 weeks skill")
L("tara", "So Dad's ninety day forecast is guessing. With a microphone.", mood="deadpan", shot="close", gap=0.3)
L("globo", "Warnings save lives. The three Ps. Prediction, tracking the hazard. Protection, like shelters and drains. Preparation, like evacuation plans and phone alerts.", mood="teach", shot="close",
  boardClear=True, board="3 Ps: PREDICTION · PROTECTION")
L("globo", "In nineteen seventy, the Bhola cyclone killed an estimated three hundred thousand to half a million people in what is now Bangladesh.", mood="teach", shot="close",
  board="     · PREPARATION")
L("tara", "And for Cyclone Amphan in twenty twenty, about three million people were evacuated. Reported deaths were about one hundred and thirty.", mood="thinking", shot="close",
  board="Bhola 1970: ~300,000–500,000 deaths")
L("globo", "The storm can't be stopped. But people can move.", mood="teach", shot="close",
  board="Amphan 2020: ~3M evacuated · ~130 ✔", gap=0.4)

confess("globo", "GLOBO · Recap Globe · Spinning Slowly For Dad")
L("globo", "Recap. One. Monsoons and Sumatra squalls.", mood="teach", boardClear=True, board="1. Monsoons + Sumatra squalls (SG)")
L("globo", "Two. Warm sea, five to thirty degrees, low shear, spin.", mood="teach", board="2. ≥26.5 °C · 5–30° · low shear · spin")
L("globo", "Three. The eye is calm. Beware the eyewall and the surge.", mood="teach", board="3. Eye · eyewall · storm surge")
L("globo", "Four. Wind vanes point to where wind comes from.", mood="teach", board="4. Vane points FROM · Stevenson screen")
L("globo", "Five. Close isobars, strong winds. Three Ps save lives.", mood="smug", board="5. Close isobars = windy · 3 Ps", gap=0.5)

# ---------------- BUTTON ----------------
card("THE NEXT MORNING", "Five fifteen. The laundry is indoors.", 2.2)
scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("dad", "Rao Weather bulletin. Radar shows a Sumatra squall, arriving before dawn. Bring in your towels.", mood="determined", shot="close", prop="tablet")
L("mum", "Towels are in. And umbrellas. Ten for twenty dollars.", mood="smug", shot="close", prop="umbrella")
sfx("whoosh")
L("tara", "It's here. Right on time. Dad, you got one right.", mood="shock", shot="close")
L("dad", "I used radar. And the window. But this time, in the morning.", mood="smug", shot="close")
sfx("ding")
L("globo", "Fifty three subscribers. The new one is me. Purely to complain.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "Why does Singapore almost never get typhoons?", "NO SPIN", "~1° N → Coriolis almost zero within 5°",
  "Question one. Why does Singapore almost never get typhoons?",
  "Too close to the Equator. There's almost no Coriolis effect, so no spin.")
challenge(2, "A wind vane points north. Where is the wind coming from?", "THE NORTH", "vane points to where wind comes FROM",
  "Question two. A wind vane points north. Where is the wind coming from?",
  "From the north. A wind vane points into the wind.")
challenge(3, "On a weather map, isobars are packed close together. What does that mean?", "STRONG WINDS", "pressure changes fast over a short distance",
  "Question three. Isobars packed close together mean what?",
  "Strong winds.")
end_card()
