# "Totally Raotional: Off The Map" S02E07 "Hot Desert, Cold Shoulder" (Topic: Extreme Environments & Their Climates)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: what-is-extreme, hot-desert-climate, polar-climate, mountain-climate, climate-graphs.

EP = dict(topic="extreme-climates",
          logline="Mum books a bargain 'Three Extremes' tour: the Sahara, Antarctica and the Himalayas, with one suitcase. "
                  "Globo explains what makes a place extreme, why deserts are dry, why the poles are cold, why mountains get colder, "
                  "and how to read a climate graph.")

D_MAP = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0c4a6e"/>
<rect y="0" width="520" height="34" fill="#e0f2fe"/><rect y="186" width="520" height="34" fill="#e0f2fe"/>
<rect y="56" width="520" height="30" fill="#f59e0b" opacity="0.85"/><rect y="134" width="520" height="30" fill="#f59e0b" opacity="0.85"/>
<path d="M0 110 H520" stroke="#fde047" stroke-width="2" stroke-dasharray="8 6"/>
<path d="M300 150 L320 70 L340 150Z M120 130 L132 60 L144 130Z" fill="#a8a29e"/>
<path d="M314 84 L320 70 L326 84Z M128 74 L132 60 L136 74Z" fill="#fff"/>
<circle cx="400" cy="110" r="5" fill="#f43f5e"/>
<text x="10" y="24" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0c4a6e">POLAR · beyond 66.5°</text>
<text x="10" y="76" font-family="sans-serif" font-size="15" font-weight="bold" fill="#451a03">HOT DESERTS · 15–30° N</text>
<text x="10" y="154" font-family="sans-serif" font-size="15" font-weight="bold" fill="#451a03">HOT DESERTS · 15–30° S</text>
<text x="10" y="106" font-family="sans-serif" font-size="14" fill="#fde047">Equator</text>
<text x="350" y="60" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff">MOUNTAINS:</text>
<text x="350" y="78" font-family="sans-serif" font-size="13" fill="#fff">plate boundaries</text>
<text x="410" y="126" font-family="sans-serif" font-size="13" fill="#fecdd3">Singapore ~1° N</text>
<text x="10" y="210" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0c4a6e">POLAR · beyond 66.5°</text>
</svg>"""

D_HADLEY = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<rect y="160" width="520" height="40" fill="#a16207"/>
<rect x="40" y="160" width="140" height="40" fill="#15803d"/>
<path d="M110 150 V40 H390 V150" stroke="#fde047" stroke-width="5" fill="none"/>
<path d="M102 56 L110 40 L118 56Z" fill="#fde047"/><path d="M382 134 L390 150 L398 134Z" fill="#fde047"/>
<path d="M370 170 H140" stroke="#7dd3fc" stroke-width="4"/><path d="M152 162 L140 170 L152 178Z" fill="#7dd3fc"/>
<ellipse cx="80" cy="80" rx="40" ry="18" fill="#94a3b8"/><path d="M60 100 l-6 14 M80 100 l-6 14 M100 100 l-6 14" stroke="#38bdf8" stroke-width="3"/>
<circle cx="450" cy="70" r="20" fill="#facc15"/>
<text x="60" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff">EQUATOR: air RISES</text>
<text x="20" y="194" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff">rain · rainforest</text>
<text x="300" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff">~30°: air SINKS</text>
<text x="400" y="110" font-family="sans-serif" font-size="14" fill="#fde047">warms · no clouds</text>
<text x="400" y="194" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff">HIGH · DESERT</text>
<text x="190" y="155" font-family="sans-serif" font-size="13" fill="#7dd3fc">trade winds</text>
</svg>"""

D_ANGLE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<rect x="20" y="20" width="60" height="120" fill="#fde047" opacity="0.6"/>
<rect x="20" y="140" width="60" height="16" fill="#f97316"/>
<path d="M200 20 L260 20 L470 150 L250 150Z" fill="#fde047" opacity="0.35"/>
<rect x="250" y="150" width="220" height="16" fill="#e0f2fe"/>
<path d="M300 140 l20 -50 M400 140 l20 -50" stroke="#fff" stroke-width="3"/>
<path d="M314 98 l6 -8 l2 10z M414 98 l6 -8 l2 10z" fill="#fff"/>
<text x="50" y="182" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fdba74" text-anchor="middle">EQUATOR</text>
<text x="50" y="198" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">small, hot patch</text>
<text x="360" y="186" font-family="sans-serif" font-size="15" font-weight="bold" fill="#bae6fd" text-anchor="middle">POLE: same energy, BIG area</text>
<text x="440" y="80" font-family="sans-serif" font-size="13" fill="#fff" text-anchor="middle">ice reflects</text>
</svg>"""

D_SHADOW = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">
<rect width="520" height="200" fill="#0f172a"/>
<path d="M0 180 L170 180 L260 50 L350 180 L520 180 L520 200 L0 200Z" fill="#78716c"/>
<path d="M240 79 L260 50 L280 79Z" fill="#fff"/>
<rect y="180" width="120" height="20" fill="#0369a1"/>
<path d="M20 160 L120 160 Q200 120 240 60" stroke="#7dd3fc" stroke-width="4" fill="none"/>
<path d="M280 60 Q330 120 420 160 L500 160" stroke="#fdba74" stroke-width="4" fill="none"/>
<path d="M490 152 L504 160 L490 168Z" fill="#fdba74"/>
<ellipse cx="190" cy="70" rx="38" ry="15" fill="#94a3b8"/><path d="M175 88 l-6 16 M195 88 l-6 16 M215 88 l-6 16" stroke="#38bdf8" stroke-width="3"/>
<text x="10" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#7dd3fc">WINDWARD: rises,</text>
<text x="10" y="48" font-family="sans-serif" font-size="15" font-weight="bold" fill="#7dd3fc">cools → RELIEF RAIN</text>
<text x="340" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fdba74">LEEWARD: sinks,</text>
<text x="340" y="48" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fdba74">warms → RAIN SHADOW</text>
<text x="10" y="196" font-family="sans-serif" font-size="13" fill="#fff">moist sea air</text>
</svg>"""

# Climate graph: Singapore bars (0–350 mm left) vs Sahara line, drawn from the guide's tables.
_SG_R = [240, 115, 175, 165, 170, 155, 155, 170, 145, 170, 255, 320]
_SG_T = [26.5, 27.0, 27.5, 28.0, 28.5, 28.5, 28.0, 28.0, 27.5, 27.5, 27.0, 26.5]
_SA_T = [12, 15, 19, 24, 29, 33, 36, 35, 32, 26, 18, 13]
def _graph():
    x0, w, base, h = 60, 34, 220, 180   # rain 0..350 mm over h px; temp 0..40 °C over h px
    bars = "".join(f'<rect x="{x0 + i*w + 5}" y="{base - r/350*h:.1f}" width="{w-10}" height="{r/350*h:.1f}" fill="#38bdf8"/>' for i, r in enumerate(_SG_R))
    def line(ts, col):
        pts = " ".join(f"{x0 + i*w + w/2:.1f},{base - t/40*h:.1f}" for i, t in enumerate(ts))
        return f'<polyline points="{pts}" fill="none" stroke="{col}" stroke-width="4"/>'
    months = "".join(f'<text x="{x0 + i*w + w/2:.1f}" y="238" font-family="sans-serif" font-size="12" fill="#cbd5e1" text-anchor="middle">{m}</text>' for i, m in enumerate("JFMAMJJASOND"))
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250">
<rect width="520" height="250" fill="#0f172a"/>
<path d="M{x0} 40 V{base} H{x0 + 12*w} V40" stroke="#94a3b8" stroke-width="2" fill="none"/>
{bars}{line(_SG_T, "#f87171")}{line(_SA_T, "#fbbf24")}{months}
<text x="54" y="44" font-family="sans-serif" font-size="12" fill="#38bdf8" text-anchor="end">350</text>
<text x="54" y="{base}" font-family="sans-serif" font-size="12" fill="#38bdf8" text-anchor="end">0 mm</text>
<text x="{x0 + 12*w + 6}" y="44" font-family="sans-serif" font-size="12" fill="#f87171">40 °C</text>
<text x="{x0 + 12*w + 6}" y="{base}" font-family="sans-serif" font-size="12" fill="#f87171">0 °C</text>
<text x="70" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">bars = SG rain</text>
<text x="200" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#f87171">line = SG temp</text>
<text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fbbf24">line = Sahara temp</text>
</svg>"""
D_GRAPH = _graph()

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "Pack your bags! The Three Extremes Tour. The Sahara, Antarctica and the Himalayas. One week, one price, one suitcase!", mood="excited", shot="close", prop="phone")
L("tara", "One suitcase. For the hottest, coldest and highest places on Earth.", mood="deadpan", shot="close")
L("mum", "Carry on only. That's how they keep it cheap.", mood="smug", shot="two", gap=0.4)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Relax. I've packed shorts, sunglasses and one thermal sock. For emergencies.", mood="smug", shot="close", prop="sunglasses")
L("dad", "Antarctica gets twenty four hours of sunshine in summer. Double Singapore. So it's basically double Sentosa.", mood="smug", shot="close")
freeze("\"DOUBLE SENTOSA.\"", 2.4, narrator="Narrator: It was not double Sentosa.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My father is going to Antarctica with one sock. I've started writing his speech for the penguins.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WHAT IS EXTREME + HOT DESERTS ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Emergency. Time to open the drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who disturbs the drawer? Ah. The Raos. I was napping next to the rubber bands.", mood="bored", shot="close")
L("tara", "Globo, Mum booked the Sahara, Antarctica and the Himalayas. Dad packed shorts.", mood="worried", shot="two")
L("globo", "Of course he did. Your father once looked for the Equator with a metal detector.", mood="eyeroll", shot="close", gap=0.4)
L("globo", "An extreme environment is where heat, cold, dryness, height or darkness sit at the limits of what life can cope with.", mood="teach", shot="close",
  boardClear=True, board="EXTREME: conditions at the LIMITS of life")
L("globo", "The big three. Hot deserts, in a belt about fifteen to thirty degrees north and south. Polar regions, beyond the polar circles. And high mountains, which ignore latitude, and rise where tectonic plates push land up.", mood="teach", shot="close",
  boardClear=True, board="Hot desert · polar · high mountain", diagram=D_MAP)
L("tara", "They matter. Ice cores hold ancient air. There's oil, minerals, solar power, and people like the Inuit and Sherpa.", mood="happy", shot="close",
  board="Matter: science · resources · people")
L("globo", "And melting ice warns us about climate change. Good. We're flying.", mood="smug", shot="close",
  board="Ice + glaciers = early warning")

scene("desert", [("tara", 300), ("dad", 620), ("globo", 960)], "THE SAHARA · North Africa · Flown In By Globo Airways")
L("dad", "Ha! Sunshine! Shorts were the right call.", mood="excited", shot="close", prop="sunglasses")
L("globo", "A hot desert gets under two hundred and fifty millimetres of rain a year. And the Sahara is mostly rock and gravel, not dunes.", mood="teach", shot="close",
  boardClear=True, board="HOT DESERT: < 250 mm rain a year")
L("tara", "But Singapore gets loads of sun too, and it rains every afternoon. Why is it dry here?", mood="thinking", shot="close")
L("globo", "The air. At the Equator, hot moist air rises and rains. At about thirty degrees, it sinks. That loop is a Hadley cell.", mood="teach", shot="close",
  boardClear=True, board="Equator: air RISES → rain", diagram=D_HADLEY)
L("globo", "Sinking air warms, so water vapour can't condense. No clouds, no rain. High pressure, clear skies.", mood="teach", shot="close",
  board="~30°: SINKS → warms → no cloud → HIGH")
L("globo", "Extra drying. Chile's Atacama has a rain shadow and a cold ocean current. Some stations get under one millimetre a year.", mood="teach", shot="close",
  board="Extra: rain shadow · cold current · far")
card("SIX HOURS LATER", "The Sun has set. Dad's shorts have not.", 2.2)
scene("desert", [("tara", 300), ("dad", 620), ("globo", 960)])
L("dad", "Why is it freezing? This is a hot desert! I want to speak to the manager.", mood="shock", shot="close")
L("globo", "No clouds. In the day, nothing blocks the Sun. At night, nothing traps the heat. So the daily temperature range is often fifteen to twenty degrees or more.", mood="teach", shot="close",
  boardClear=True, board="No cloud → big DIURNAL (daily) range")
L("tara", "Dad, put on your sock.", mood="deadpan", shot="close")
L("dad", "I only have one.", mood="sad", shot="close")
sfx("trombone")

confess("dad", "VIKRAM RAO · Dad · Self-Described Travel Genius")
L("dad", "I packed for half the day. That's efficiency. The other half is the desert's fault.", mood="smug", gap=0.6)

# ---------------- ACT 2: POLAR CLIMATES ----------------
card("MEANWHILE, AT THE BOTTOM OF THE WORLD", "Mum has found a deal on blankets", 2.4)
scene("polar", [("mum", 300), ("tara", 620), ("globo", 960)], "ANTARCTICA · Flown In By Globo Airways · Summer, Apparently")
L("mum", "The sun is out, and it's still freezing. I want a refund on the sunshine.", mood="annoyed", shot="close", prop="umbrella")
L("globo", "Angle, Atmosphere, Albedo. Angle. Earth is curved, so sunlight arrives here at a slant. The same energy is spread over a bigger area, so each square metre warms less.", mood="teach", shot="close",
  boardClear=True, board="1. ANGLE: energy spread over big area", diagram=D_ANGLE)
L("tara", "Like a torch. Straight down, a small bright circle. Tilt it, a big dim oval.", mood="happy", shot="close")
L("globo", "Atmosphere. A slanting beam takes a longer path through the air, losing energy. Albedo. Fresh snow reflects up to about eighty or ninety percent of sunlight. Dark ocean, under about ten.", mood="teach", shot="close",
  board="2. ATMOSPHERE · 3. ALBEDO (ice reflects)")
L("mum", "So the snow is returning the sunshine. Without a receipt.", mood="annoyed", shot="close")
L("globo", "Earth's axis tilts about twenty three and a half degrees. During summer, the pole leans sunwards, and the Sun never sets. Polar day. In winter, no sunrise. Polar night.", mood="teach", shot="close",
  boardClear=True, board="Tilt 23.5° → POLAR DAY / POLAR NIGHT")
L("tara", "So lots of hours of sun, but weak sun. Sorry, Dad. Not double Sentosa.", mood="deadpan", shot="close")
L("globo", "And Antarctica is a desert. Cold air holds little water vapour, so the interior gets under about fifty millimetres a year.", mood="smug", shot="close",
  board="POLAR DESERT: interior < ~50 mm a year")
L("globo", "The Arctic is a frozen ocean, ringed by land where millions live. Antarctica is a high, icy continent with no permanent residents, and far colder.", mood="teach", shot="close",
  boardClear=True, board="ARCTIC: frozen OCEAN · people live there")
L("tara", "The record is minus eighty nine point two degrees, at Vostok Station, in nineteen eighty three.", mood="shock", shot="close",
  board="ANTARCTICA: high CONTINENT · −89.2 °C")

confess("mum", "MUM · Deal Hunter · Has Never Paid Full Price")
L("mum", "Six months of free daylight, then six months of free darkness. The longest buy one get one free in the world.", mood="smug", gap=0.5)

# ---------------- ACT 3: MOUNTAIN CLIMATES ----------------
card("STOP THREE: THE HIMALAYAS", "Dad is now wearing a tablecloth", 2.4)
scene("mountain", [("tara", 260), ("dad", 600), ("globo", 960)], "THE HIMALAYAS · Nepal · Flown In By Globo Airways")
L("dad", "Mountains are closer to the Sun. So it'll be warmer up here. Science.", mood="smug", shot="close")
L("globo", "The opposite. Temperature falls about six point five degrees for every thousand metres you climb. The lapse rate. Air is heated from below, by the ground.", mood="eyeroll", shot="close",
  boardClear=True, board="LAPSE RATE: −6.5 °C per 1,000 m up")
L("tara", "So a village at fourteen hundred metres is twenty degrees. A pass four thousand metres higher is four times six point five, twenty six degrees colder. Minus six.", mood="thinking", shot="close",
  board="20 °C − (4 × 6.5) = −6 °C")
L("dad", "Minus six. In a tablecloth.", mood="sad", shot="close")
L("globo", "And thin air. At about five and a half thousand metres, pressure is roughly half. Less oxygen, stronger ultraviolet.", mood="teach", shot="close",
  board="THIN AIR: ~½ pressure at 5,500 m")
L("globo", "Moist monsoon winds are forced up, cool and rain. Relief rainfall. Over the top, the air sinks, warms and dries. A rain shadow, like the Tibetan Plateau.", mood="teach", shot="close",
  boardClear=True, board="WINDWARD: rise → cool → RELIEF RAIN", diagram=D_SHADOW)
L("tara", "Same wind, totally different weather, depending on which side you're on.", mood="happy", shot="close",
  board="LEEWARD: sink → warm → RAIN SHADOW")
L("globo", "Aspect matters too. In the northern hemisphere, south facing slopes get more sun, so they're warmer.", mood="teach", shot="close",
  board="ASPECT: south-facing = warmer (N. hem.)")
L("dad", "So I should face south. Which way is south?", mood="thinking", shot="close", prop="compass")
L("globo", "You're holding a compass, Vikram. Upside down.", mood="eyeroll", shot="close")
sfx("trombone")

# ---------------- CLIMATE GRAPHS (BACK HOME) ----------------
card("BACK IN SINGAPORE", "Dad has defrosted. Mostly.", 2.2)
scene("living", [("tara", 260), ("mum", 600), ("globo", 980)])
L("mum", "Home. Hot and raining. Why does Singapore never change?", mood="happy", shot="close", prop="plate")
L("globo", "A climate graph shows why. Bars are monthly rainfall, in millimetres. The line is temperature. Check which axis is which.", mood="teach", shot="close",
  boardClear=True, board="BARS = rainfall (mm) · LINE = temp (°C)", diagram=D_GRAPH)
L("tara", "Singapore's line is almost flat. Highest minus lowest, the annual range, is just two degrees.", mood="thinking", shot="close",
  board="Range = highest − lowest (SG: 2.0 °C)")
L("globo", "The Sahara station climbs from twelve degrees in January to thirty six in July. A range of twenty four.", mood="teach", shot="close",
  board="Sahara: 36 − 12 = 24 °C")
L("tara", "Total rainfall means adding all twelve bars. Singapore, about two thousand two hundred millimetres. The Sahara station, twenty.", mood="happy", shot="close",
  boardClear=True, board="TOTAL rain: SG ~2,235 mm · Sahara ~20 mm")
L("tara", "Antarctica. Warmest minus three, coldest minus twenty six. Minus three take away minus twenty six is twenty three.", mood="thinking", shot="close",
  board="Antarctic: −3 − (−26) = 23 °C")
L("globo", "Describe it with TEA. Trend, Evidence with figures, and Anomaly.", mood="teach", shot="close",
  board="TEA: Trend · Evidence · Anomaly")
L("mum", "TEA! Finally, a geography rule I can follow. Teh tarik for everyone.", mood="excited", shot="close", gap=0.5)

confess("globo", "GLOBO · Recap Globe · Still Slightly Sandy")
L("globo", "Recap. One. Extreme means at the limits of life.", mood="teach", boardClear=True, board="1. Extreme = at the limits of life")
L("globo", "Two. Deserts. Sinking air, no clouds.", mood="teach", board="2. Desert: sinking air → no cloud → dry")
L("globo", "Three. Poles are cold because of angle, atmosphere and albedo.", mood="teach", board="3. Poles: Angle · Atmosphere · Albedo")
L("globo", "Four. Mountains. Colder as you climb.", mood="teach", board="4. Mountains: −6.5 °C / 1,000 m")
L("globo", "Five. Graphs. Add the bars, find the range.", mood="smug", board="5. Graphs: total rain + annual range", gap=0.5)

# ---------------- BUTTON ----------------
scene("living", [("tara", 260), ("mum", 560), ("dad", 840)])
L("mum", "Next trip! An extreme mountain, five minutes away. Bukit Timah Hill.", mood="excited", shot="close", prop="phone")
L("tara", "It's about a hundred and sixty metres high, Mum. That's one degree cooler.", mood="deadpan", shot="close")
L("dad", "One degree! I'm bringing the sock.", mood="determined", shot="close")
sfx("ding")
L("globo", "Put me back in the drawer. Gently. Some of me is still in Antarctica.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Globo gives you 5 seconds. Then he sulks.", 3.0)
challenge(1, "It is 30 °C at sea level. Roughly how warm is it at 2,000 m?", "ABOUT 17 °C", "2 × 6.5 = 13 °C cooler → 30 − 13 = 17",
  "Question one. It's thirty degrees at sea level. Roughly how warm is it at two thousand metres?",
  "About seventeen degrees. Thirteen degrees cooler.")
challenge(2, "Why do hot deserts get so cold at night?", "NO CLOUDS", "no cloud → heat escapes to space → big daily range",
  "Question two. Why do hot deserts get so cold at night?",
  "No clouds to trap the heat. And Dad needed two socks.")
challenge(3, "Warmest month −3 °C, coldest −26 °C. Annual range?", "23 °C", "−3 − (−26) = −3 + 26 = 23 °C",
  "Question three. Warmest month, minus three. Coldest, minus twenty six. What's the annual range?",
  "Twenty three degrees. If you said twenty nine, the negatives got you.")
end_card()
