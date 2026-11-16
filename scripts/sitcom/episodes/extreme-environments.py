# "Off The Map" (a Claude Sitcom) S01E06 "Hot Stuff, Cold Feet" (Topic: Extreme Environments & Their Climates)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="extreme-environments",
    logline="Dad walks six minutes from the MRT and declares Singapore the most extreme environment on Earth. Atlas spins him to the Sahara, Vostok Station and Everest Base Camp to recalibrate, while Mum puts a climate graph on the fridge.",
    names={"guest": "DR NOUR", "guest2": "DR DOLMA"},
    display={"M R T": "MRT"},
)

FONT = 'font-family="sans-serif"'

# Five factors: T-P-A-L-R
FACTORS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 150">'
    + "".join(
        f'<rect x="{8 + i * 102}" y="10" width="96" height="128" rx="12" fill="{c}"/>'
        f'<text x="{56 + i * 102}" y="68" text-anchor="middle" {FONT} font-size="44" fill="#f8fafc">{l}</text>'
        f'<text x="{56 + i * 102}" y="114" text-anchor="middle" {FONT} font-size="18" fill="#f8fafc">{w}</text>'
        for i, (l, w, c) in enumerate([
            ("T", "Temp", "#7f1d1d"), ("P", "Precip", "#1e3a8a"), ("A", "Altitude", "#3f3f46"),
            ("L", "Light", "#713f12"), ("R", "Remote", "#14532d"),
        ])
    )
    + '</svg>'
)

# Hadley cell: up at the Equator, down at 30 degrees
HADLEY = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">'
    '<line x1="0" y1="190" x2="520" y2="190" stroke="#86efac" stroke-width="3"/>'
    '<g stroke="#fca5a5" stroke-width="4" fill="none">'
    '<line x1="260" y1="180" x2="260" y2="62"/>'
    '<line x1="260" y1="40" x2="80" y2="40"/><line x1="260" y1="40" x2="440" y2="40"/>'
    '<line x1="80" y1="40" x2="80" y2="160"/><line x1="440" y1="40" x2="440" y2="160"/>'
    '</g>'
    '<polygon points="248,66 260,46 272,66" fill="#fca5a5"/>'
    '<polygon points="68,156 80,176 92,156" fill="#fca5a5"/>'
    '<polygon points="428,156 440,176 452,156" fill="#fca5a5"/>'
    f'<text x="272" y="100" {FONT} font-size="20" fill="#7dd3fc">rises: LOW</text>'
    f'<text x="272" y="126" {FONT} font-size="20" fill="#7dd3fc">→ clouds, rain</text>'
    f'<text x="94" y="150" {FONT} font-size="20" fill="#fde047">sinks: HIGH</text>'
    f'<text x="426" y="150" text-anchor="end" {FONT} font-size="20" fill="#fde047">sinks: HIGH</text>'
    f'<text x="80" y="214" text-anchor="middle" {FONT} font-size="18" fill="#f8fafc">30°N desert</text>'
    f'<text x="260" y="214" text-anchor="middle" {FONT} font-size="18" fill="#f8fafc">Equator</text>'
    f'<text x="440" y="214" text-anchor="middle" {FONT} font-size="18" fill="#f8fafc">30°S desert</text>'
    '</svg>'
)

# Lapse rate: 6.5 C per 1,000 m from a 27 C sea level
_levels = [(0, "27"), (1000, "20.5"), (2000, "14"), (3000, "7.5"), (4000, "1"), (5000, "−5.5")]
LAPSE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">'
    '<polygon points="20,222 170,24 320,222" fill="#78716c"/>'
    '<polygon points="140,64 170,24 200,64 170,56" fill="#f8fafc"/>'
    + "".join(
        f'<line x1="20" y1="{222 - k * 36}" x2="500" y2="{222 - k * 36}" stroke="#94a3b8" stroke-dasharray="4 6"/>'
        f'<text x="336" y="{218 - k * 36}" {FONT} font-size="18" fill="#f8fafc">{h:,} m</text>'
        f'<text x="510" y="{218 - k * 36}" text-anchor="end" {FONT} font-size="18" fill="{"#fca5a5" if k < 3 else "#7dd3fc"}">{t} °C</text>'
        for k, (h, t) in enumerate(_levels)
    )
    + '</svg>'
)

# Mum's fridge climate graph: Cairo (approximate monthly averages)
_temps = [14, 15, 18, 21, 25, 27, 28, 28, 26, 23, 19, 15]
_rain = [5, 4, 4, 1, 1, 0, 0, 0, 0, 1, 3, 6]
_cx = [round(60 + 100 / 3 * (i + 0.5), 1) for i in range(12)]
CLIMATE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 260">'
    f'<text x="260" y="20" text-anchor="middle" {FONT} font-size="18" fill="#f8fafc">Cairo (30°N) · 25 mm a year</text>'
    '<line x1="60" y1="40" x2="60" y2="220" stroke="#fca5a5" stroke-width="2"/>'
    '<line x1="460" y1="40" x2="460" y2="220" stroke="#7dd3fc" stroke-width="2"/>'
    '<line x1="60" y1="220" x2="460" y2="220" stroke="#f8fafc" stroke-width="2"/>'
    + "".join(f'<text x="52" y="{226 - v * 6}" text-anchor="end" {FONT} font-size="18" fill="#fca5a5">{v}</text>' for v in (0, 10, 20))
    + "".join(f'<text x="468" y="{226 - v * 9}" {FONT} font-size="18" fill="#7dd3fc">{v}</text>' for v in (0, 10))
    + f'<text x="56" y="46" text-anchor="end" {FONT} font-size="18" fill="#fca5a5">30°C</text>'
    + f'<text x="466" y="46" {FONT} font-size="18" fill="#7dd3fc">20 mm</text>'
    + "".join(f'<rect x="{x - 11}" y="{220 - r * 9}" width="22" height="{r * 9}" fill="#7dd3fc"/>' for x, r in zip(_cx, _rain) if r)
    + '<polyline fill="none" stroke="#fca5a5" stroke-width="4" points="'
    + " ".join(f"{x},{220 - t * 6}" for x, t in zip(_cx, _temps)) + '"/>'
    + "".join(f'<text x="{x}" y="244" text-anchor="middle" {FONT} font-size="18" fill="#f8fafc">{m}</text>' for x, m in zip(_cx, "JFMAMJJASOND"))
    + '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 300), ("mum", 640), ("priya", 960)])
L("dad", "Six minutes from the M R T! Singapore is the most extreme environment on Earth. And I've been to forty countries.", mood="annoyed", shot="close")
L("mum", "Forty airports. And you walked under a covered walkway the whole way.", mood="eyeroll", shot="close")
L("dad", "The humidity followed me under it. My shirt is now a small, sad swimming pool.", mood="sad", shot="close")
L("priya", "Name one place stickier.", mood="deadpan", shot="two")
freeze("DAD, EXTREME EXPLORER", 2.6, narrator="Narrator: Singapore's temperature changes by about two degrees a year. Dad's changes more than that in a lift.")
confess("priya", "PRIYA · 12 · Has Read The Climate Data")
L("priya", "Singapore is hot and sticky. But extreme? You could set a clock by our thunderstorms.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: WHAT MAKES A PLACE EXTREME? ----------------
scene("living", [("priya", 240), ("dad", 480), ("mum", 720)])
L("priya", "Atlas! Dad thinks Singapore is the most extreme place on Earth.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 1040)
L("atlas", "I have been dropped on Australia eleven times, and I complain less than your father.", mood="bored", shot="close")
L("atlas", "An extreme environment is close to the limits where people, plants and animals can survive.", mood="teach", shot="close",
  boardClear=True, board="Extreme = near the limits of survival")
L("atlas", "Geographers check five factors. Temperature, precipitation, altitude, light, and remoteness.", mood="teach", shot="close",
  boardClear=True, diagram=FACTORS)
L("mum", "Ooh, a checklist. The Polar Air Looks Remote.", mood="excited", shot="close",
  board="The Polar Air Looks Remote")
L("atlas", "So, Singapore. About twenty seven degrees every month. An annual range of about two degrees. Steady.", mood="teach", shot="close",
  boardClear=True, board="Singapore: ~27 °C all year, range ~2 °C")
L("priya", "About two thousand four hundred millimetres of rain a year. That's water, not drought.", mood="thinking", shot="close",
  board="Rain: ~2,400 mm a year, every month")
L("atlas", "Sea level, twelve hours of daylight, hardly remote. Verdict? Challenging. Not extreme.", mood="smug", shot="close",
  board="Sea level · 12 h daylight · NOT remote")
L("dad", "Not extreme? Have you smelled my shirt?", mood="annoyed", shot="close")
L("mum", "Everyone in the lift has.", mood="deadpan", shot="close", gap=0.4)
L("atlas", "A desert gets less than about two hundred and fifty millimetres of precipitation a year. Heat is optional.", mood="teach", shot="close",
  boardClear=True, board="Desert = under 250 mm precipitation a year")
L("priya", "So Antarctica is a desert. The biggest one.", mood="thinking", shot="close",
  board="Antarctica = the world's largest desert")
L("nani", "In the nineteen sixties we had no air con. Your father is not extreme. He is soft.", mood="smug", offstage=True)

confess("atlas", "ATLAS · Desk Globe · Contains Every Desert On Earth")
L("atlas", "The Sahara is about nine million square kilometres. It is why I lean to one side. Sand. Not weight gain.", mood="smug", gap=0.5)

# ---------------- ACT 2a: THE SAHARA ----------------
scene("living", [("priya", 240), ("dad", 520), ("atlas", 860)])
L("dad", "Fine. Show me somewhere MORE extreme than my walk from the M R T.", mood="determined", shot="close")
L("atlas", "Three somewheres. Pack light. Then pack a duvet. Then pack oxygen.", mood="smug", shot="close")
sfx("whoosh")
scene("desert", [("priya", 240), ("dad", 480), ("atlas", 780)], caption="SAHARA DESERT · Egypt · near 30°N · 42 °C")
L("dad", "Ha! A dry heat. I can handle a dry heat. My eyebrows have gone crispy.", mood="shock", shot="close")
poof("guest", 1080)
L("guest", "Welcome! I'm Doctor Nour, a climate scientist in Cairo. Please, stand in the shade. Oh. There isn't any.", mood="happy", shot="close")
L("priya", "Why is it so dry here, when Singapore is so wet?", mood="neutral", shot="two")
L("guest", "At the Equator the Sun heats the ground. Warm air rises, cools, and forms clouds and rain. Low pressure.", mood="teach", shot="close",
  boardClear=True, diagram=HADLEY, board="Equator: rising air → low pressure → rain")
L("guest", "That air sinks again at about thirty degrees north and south. Sinking air warms and dries. High pressure. No clouds.", mood="teach", shot="close",
  board="30°N/S: sinking air → high pressure → dry")
L("atlas", "Up at the Equator, down at thirty. Down is dry. That loop is called a Hadley cell.", mood="teach", shot="close",
  board="Up at Equator, down at 30°. Down is dry.")
L("guest", "So Cairo gets about twenty five millimetres of rain a year. Clear skies, hot days, cold nights.", mood="neutral", shot="close",
  boardClear=True, board="Cairo ~25 mm a year · big daily range")
L("guest", "And this isn't even the driest. The Atacama in Chile is. Arica averages about one millimetre a year.", mood="smug", shot="close",
  board="Driest: Atacama, Chile · Arica ~1 mm/yr")
L("atlas", "High pressure, plus the cold Humboldt Current offshore, plus the Andes blocking moist air. Triple dry.", mood="teach", shot="close",
  board="+ cold Humboldt Current + Andes rain shadow")
L("dad", "One millimetre? I spilled more than that on my shirt this morning.", mood="thinking", shot="close")
L("guest", "Yes. I can see it from here.", mood="deadpan", shot="close", gap=0.4)

# ---------------- ACT 2b: VOSTOK ----------------
L("atlas", "Next stop. Cold feet, everyone.", mood="smug", shot="close")
sfx("whoosh")
scene("polar", [("priya", 240), ("dad", 480), ("atlas", 780)], caption="VOSTOK STATION · Antarctica · 3,500 m · average −55 °C")
L("dad", "My face. I can't feel my face. Is it still there?", mood="shock", shot="close")
L("priya", "Unfortunately.", mood="deadpan", shot="close", gap=0.3)
poof("guest2", 1080)
L("guest2", "Doctor Dolma, glaciologist. In nineteen eighty three, Vostok hit minus eighty nine point two degrees. A world record.", mood="happy", shot="close",
  boardClear=True, board="Vostok: −89.2 °C on 21 July 1983")
L("dad", "Is that because we're further from the Sun?", mood="thinking", shot="close")
L("guest2", "Classic mistake. It's the angle. Polar sunlight arrives low, spreads over a bigger area, and crosses more atmosphere.", mood="teach", shot="close",
  board="Low sun angle → heat spread out thin")
L("guest2", "And the Earth's tilt means the Sun vanishes at the South Pole for about six months. Polar night.", mood="teach", shot="close",
  board="Tilt 23.5° → polar night (~6 months)")
L("guest2", "White ice reflects eighty to ninety percent of sunlight. Albedo. And Vostok is high, and far inland.", mood="teach", shot="close",
  board="White ice reflects 80–90% (albedo)")
L("dad", "Look! Penguins!", mood="excited", shot="close")
L("guest2", "Those penguins are very lost. No penguin lives this far inland.", mood="worried", shot="close")
L("atlas", "They have your sense of direction, Dad.", mood="smug", shot="close", gap=0.4)

# ---------------- ACT 2c: EVEREST BASE CAMP ----------------
sfx("whoosh")
scene("mountain", [("priya", 240), ("dad", 480), ("atlas", 780)], caption="EVEREST BASE CAMP · Nepal · 5,364 m · ~28°N")
L("dad", "Why am I out of breath? I've only said one sentence.", mood="worried", shot="close")
poof("guest2", 1080)
L("priya", "Doctor Dolma? Didn't we just leave you in Antarctica?", mood="deadpan", shot="two")
L("guest2", "I study ice. Poles and mountains. And I grew up in the Khumbu valley, just down there.", mood="smug", shot="close")
L("atlas", "Air is heated from the ground up. Climb higher, and you are further from that heat, in thinner air.", mood="teach", shot="close",
  boardClear=True, diagram=LAPSE, board="Air is heated from the ground up")
L("guest2", "On average, temperature falls about six point five degrees for every thousand metres you climb. The lapse rate.", mood="teach", shot="close",
  board="Lapse rate: −6.5 °C per 1,000 m")
L("priya", "Kathmandu averages nineteen degrees. Base Camp is about four thousand metres higher. Nineteen take away twenty six. About minus seven.", mood="thinking", shot="close", prop="calculator",
  boardClear=True, board="19 − (4 × 6.5) = 19 − 26 ≈ −7 °C")
L("guest2", "Very close! The real average is about minus six. The lapse rate is only an average.", mood="happy", shot="close",
  board="SUBTRACT as you climb, never add")
L("dad", "But we're closer to the Sun up here!", mood="thinking", shot="close")
L("atlas", "The Sun is a hundred and fifty million kilometres away. A few more kilometres makes no difference.", mood="eyeroll", shot="close",
  board="Sun ~150 million km away: height ≠ heat")
L("guest2", "And at the summit, each breath has about one third of the oxygen.", mood="teach", shot="close",
  boardClear=True, board="Everest summit 8,849 m · ⅓ of the oxygen")
L("dad", "That explains my brain right now.", mood="worried", shot="close")
L("priya", "And at sea level?", mood="deadpan", shot="close", gap=0.4)

confess("dad", "DAD · Forty Airports · One Desert · One Freezer")
L("dad", "I take it back. Singapore is not extreme. Singapore is a spa. A sticky, sticky spa.", mood="happy", gap=0.6)

# ---------------- ACT 3: THE FRIDGE GRAPH ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad is hugging the air con. Mum has been busy.", 2.4)
scene("kitchen", [("mum", 240), ("dad", 460), ("nani", 680), ("priya", 900)])
L("mum", "While you were gallivanting, I drew a climate graph of Cairo. For the fridge.", mood="smug", shot="close",
  boardClear=True, diagram=CLIMATE, board="Climate graph: Cairo, Egypt (30°N)")
L("mum", "Months along the bottom. Rain as blue bars, in millimetres. Temperature as a red line, in degrees.", mood="teach", shot="close",
  board="Blue BARS = rain (mm) · red LINE = °C")
L("dad", "Why are the rain bars so tiny? Did you run out of blue pen?", mood="thinking", shot="close")
L("mum", "Cairo gets almost no rain! Check the scale on the right axis. It only goes up to twenty millimetres.", mood="annoyed", shot="close",
  board="Check WHICH axis, and its SCALE")
L("nani", "On that scale, Singapore's bars would go through the ceiling and into Mrs Lim's flat.", mood="deadpan", shot="close", gap=0.4)

# ---------------- CLASSROOM: CLIMATE GRAPH SKILLS ----------------
scene("classroom", [("teacher", 260), ("priya", 580), ("atlas", 920)])
L("teacher", "Three calculations. One. Annual range. Warmest month minus coldest. Cairo, twenty eight minus fourteen. Fourteen degrees.", mood="teach", shot="close",
  boardClear=True, board="1. Range: Cairo 28 − 14 = 14 °C")
L("priya", "Vostok, minus thirty two take away minus sixty eight. Minus a minus is a plus. Thirty six degrees.", mood="thinking", shot="close",
  board="Vostok: −32 − (−68) = 36 °C")
L("teacher", "Always positive. Two. Total rainfall, add all twelve bars. Three. The mean, add twelve temperatures, divide by twelve.", mood="teach", shot="close",
  board="2. Total rain = add all 12 months")
L("atlas", "Describe with data. Fourteen degrees in January, twenty eight in July, twenty five millimetres of rain.", mood="teach", shot="close",
  board="3. Mean = add 12 temps, then ÷ 12")
L("atlas", "Describe is what. Explain is why. High pressure is an explanation. Do not sneak it into a describe answer.", mood="eyeroll", shot="close",
  boardClear=True, board="Describe = WHAT + data · Explain = WHY")
L("teacher", "Compare in one sentence. Singapore gets about two thousand four hundred millimetres, whereas Cairo gets about twenty five.", mood="teach", shot="close",
  board="Compare: whereas · however · 100× more")
L("priya", "And if the line peaks in December or January, like a U, it's the Southern Hemisphere.", mood="thinking", shot="close",
  board="Peak in Dec–Jan (U shape) = S. Hemisphere")
L("teacher", "Who brought a globe to class? Again?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Still Defrosting")
L("atlas", "Recap. First. Extreme means near the limits of survival. Check all five factors.", mood="teach",
  boardClear=True, board="1. Extreme: T · P · A · L · R")
L("atlas", "Second. Deserts get under two hundred and fifty millimetres. Hot deserts sit near thirty degrees, under sinking air.", mood="teach",
  board="2. Desert < 250 mm · sinking air at 30°")
L("atlas", "Third. Poles are cold from the low sun angle, polar night and white ice.", mood="teach",
  board="3. Poles: low sun, polar night, albedo")
L("atlas", "Fourth. Climb a thousand metres, lose about six point five degrees.", mood="teach",
  board="4. −6.5 °C per 1,000 m climbed")
L("atlas", "And finally. Bars for rain, line for temperature. Range is warmest minus coldest.", mood="smug",
  board="5. Range = max − min · total = add 12", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("priya", 240), ("dad", 480), ("mum", 720)])
L("dad", "Next holiday, the Cameron Highlands. One and a half thousand metres up. Nearly ten degrees cooler. I did the lapse rate.", mood="smug", shot="close", prop="suitcase")
L("priya", "Dad. That was actually correct.", mood="shock", shot="close")
poof("atlas", 1040)
L("atlas", "And he subtracted. I'm so proud I could spin.", mood="happy", shot="close")
sfx("ding")
L("dad", "Pack the duvet. And the oxygen.", mood="determined", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Then he defrosts.", 3.0)
challenge(1, "Vostok's warmest month averages −32 °C and its coldest −68 °C. Calculate the annual temperature range.", "36 °C",
  "−32 − (−68) = −32 + 68 = 36",
  "Question one. Vostok's warmest month averages minus thirty two degrees, its coldest minus sixty eight. What is the annual range?",
  "Thirty six degrees. Warmest minus coldest. A range is always positive.")
challenge(2, "A town at sea level averages 27 °C. Estimate the temperature on a mountain 2,000 m above it.", "14 °C",
  "2 × 6.5 = 13 °C cooler; 27 − 13 = 14",
  "Question two. A town at sea level averages twenty seven degrees. Estimate the temperature two thousand metres higher.",
  "About fourteen degrees. Two times six point five is thirteen degrees cooler.")
challenge(3, "Explain why hot deserts such as the Sahara form at about 30°N and 30°S.", "Sinking air, high pressure",
  "Air sinks, warms, dries → no clouds → no rain",
  "Question three. Explain why hot deserts form at about thirty degrees north and south.",
  "Air sinks there, warming and drying. High pressure means no clouds, so it hardly ever rains.")
end_card()
