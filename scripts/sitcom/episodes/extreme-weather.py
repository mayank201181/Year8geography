# "Off The Map" (a Claude Sitcom) S01E07 "Under Pressure" (Topic: Extreme Weather & Forecasting)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="extreme-weather",
    logline="Dad appoints his left knee as the family weather forecaster and books a sunrise picnic in June. A Sumatra squall disagrees. Atlas spins the family to the typhoon coast of the Philippines to meet a real meteorologist.",
    names={"guest": "DR REYES"},
    display={"P S I": "PSI", "El Nino": "El Niño"},
)

CYCLONE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">'
    '<rect x="0" y="196" width="520" height="44" fill="#1d4ed8"/>'
    '<text x="260" y="226" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#f8fafc">warm sea, at least 26.5 °C</text>'
    '<path d="M70,192 Q80,130 150,118 Q170,62 230,66 L230,192 Z" fill="#64748b"/>'
    '<path d="M450,192 Q440,130 370,118 Q350,62 290,66 L290,192 Z" fill="#64748b"/>'
    '<line x1="190" y1="182" x2="190" y2="92" stroke="#fca5a5" stroke-width="5"/>'
    '<polygon points="180,96 200,96 190,78" fill="#fca5a5"/>'
    '<line x1="330" y1="182" x2="330" y2="92" stroke="#fca5a5" stroke-width="5"/>'
    '<polygon points="320,96 340,96 330,78" fill="#fca5a5"/>'
    '<line x1="260" y1="120" x2="260" y2="168" stroke="#7dd3fc" stroke-width="5"/>'
    '<polygon points="250,164 270,164 260,182" fill="#7dd3fc"/>'
    '<text x="260" y="108" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#7dd3fc">EYE</text>'
    '<line x1="12" y1="186" x2="70" y2="186" stroke="#fde047" stroke-width="4"/>'
    '<polygon points="66,178 66,194 82,186" fill="#fde047"/>'
    '<line x1="508" y1="186" x2="450" y2="186" stroke="#fde047" stroke-width="4"/>'
    '<polygon points="454,178 454,194 438,186" fill="#fde047"/>'
    '<text x="10" y="26" font-family="sans-serif" font-size="18" fill="#fca5a5">eye wall: rising air, worst winds</text>'
    '<text x="510" y="52" text-anchor="end" font-family="sans-serif" font-size="18" fill="#7dd3fc">eye: calm, sinking air</text>'
    '<text x="10" y="170" font-family="sans-serif" font-size="18" fill="#fde047">air in</text>'
    '<text x="510" y="170" text-anchor="end" font-family="sans-serif" font-size="18" fill="#fde047">air in</text>'
    '</svg>'
)

WARNINGS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<text x="10" y="32" font-family="sans-serif" font-size="22" fill="#f8fafc">Deaths: Bay of Bengal cyclones</text>'
    '<text x="10" y="84" font-family="sans-serif" font-size="20" fill="#f8fafc">Bhola 1970</text>'
    '<rect x="160" y="58" width="350" height="38" fill="#fca5a5"/>'
    '<text x="500" y="84" text-anchor="end" font-family="sans-serif" font-size="20" fill="#111827">300,000–500,000</text>'
    '<text x="10" y="138" font-family="sans-serif" font-size="20" fill="#f8fafc">Fani 2019</text>'
    '<rect x="160" y="112" width="4" height="38" fill="#86efac"/>'
    '<text x="176" y="138" font-family="sans-serif" font-size="20" fill="#86efac">fewer than 100 (Odisha)</text>'
    '<text x="10" y="186" font-family="sans-serif" font-size="20" fill="#fde047">Fani: about 1.2 million evacuated first</text>'
    '</svg>'
)

ISOBARS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">'
    '<g fill="none" stroke="#f8fafc" stroke-width="2">'
    '<ellipse cx="140" cy="100" rx="20" ry="16"/><ellipse cx="140" cy="100" rx="38" ry="30"/>'
    '<ellipse cx="140" cy="100" rx="56" ry="44"/><ellipse cx="140" cy="100" rx="74" ry="58"/>'
    '<ellipse cx="390" cy="104" rx="30" ry="24"/><ellipse cx="390" cy="104" rx="75" ry="52"/>'
    '<ellipse cx="390" cy="104" rx="118" ry="80"/>'
    '</g>'
    '<text x="140" y="110" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#fca5a5">L</text>'
    '<text x="390" y="114" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#86efac">H</text>'
    '<text x="140" y="200" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fca5a5">close = strong wind</text>'
    '<text x="390" y="212" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#86efac">far apart = calm</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("park", [("dad", 300), ("mum", 540), ("priya", 780), ("nani", 1020)])
L("dad", "Behold! The Sunrise Family Picnic. Six in the morning. Perfect blue skies.", mood="excited", shot="wide", prop="plate")
L("priya", "It's still dark, Dad. And it's June.", mood="deadpan", shot="close")
L("mum", "Mats, check. Sandwiches, check. Forecast?", mood="determined", shot="close")
L("dad", "I am the forecast. My left knee is never wrong. And it says... sunshine.", mood="smug", shot="close")
L("nani", "Your knee also said the durian was ripe. We had to evacuate the flat.", mood="deadpan", shot="close", gap=0.4)
L("priya", "June means the Southwest Monsoon. Sumatra squalls. They arrive before dawn.", mood="worried", shot="close")
L("dad", "Squalls are a myth invented by umbrella shops. Pass the egg sandwiches.", mood="smug", shot="close")
sfx("whoosh")
freeze("ZERO % CHANCE OF RAIN", 2.6, narrator="Narrator: The squall arrived four seconds later.")
confess("priya", "PRIYA · 12 · Brought Her Own Umbrella")
L("priya", "Dad's knee has a forecasting accuracy of zero. The egg sandwiches are now egg soup.", mood="deadpan")
L("priya", "Nani's knee is better. It only ever says one thing. Dad is wrong.", mood="smug", gap=0.6)

title()

# ---------------- ACT 1: WEATHER, CLIMATE, SINGAPORE ----------------
scene("living", [("priya", 220), ("dad", 460), ("nani", 700)])
L("dad", "A freak event. Singapore's climate today is clearly broken.", mood="annoyed", shot="close", prop="umbrella")
L("priya", "Atlas! Dad just mixed up weather and climate.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 1000)
L("atlas", "Why is everyone dripping on me? I am paper glued to a ball.", mood="annoyed", shot="close")
L("atlas", "Weather is the atmosphere right now. Rain, wind, temperature, pressure. It changes by the hour.", mood="teach", shot="close",
  boardClear=True, board="Weather = the atmosphere now")
L("atlas", "Climate is the average weather over about thirty years. Your climate isn't broken. Your morning was.", mood="smug", shot="close",
  board="Climate = average weather over ~30 years")
L("nani", "Singapore is equatorial. Hot all year, about twenty seven degrees, and wet. Very reliable. Unlike your knee.", mood="smug", shot="close",
  board="Singapore: equatorial · ~27 °C · wet")
L("priya", "That was a Sumatra squall. A line of thunderstorms that forms at night over Sumatra, then blows east to us.", mood="teach", shot="close",
  boardClear=True, board="Sumatra squall = line of thunderstorms")
L("atlas", "It arrives before dawn, with gusts of forty to eighty kilometres an hour. Exactly picnic time.", mood="teach", shot="close",
  board="Arrives pre-dawn · gusts 40–80 km/h")
L("atlas", "June to September is the Southwest Monsoon. December to early March, the Northeast. In between, the most lightning.", mood="teach", shot="close",
  board="SW Monsoon Jun–Sep · NE Monsoon Dec–Mar")
L("nani", "The Southwest Monsoon brings haze too. In twenty fifteen, Indonesian fires and El Nino pushed the P S I above three hundred. Schools shut for a day.", mood="sad", shot="close",
  board="2015 haze: PSI over 300 · schools shut")
L("dad", "Small stuff. My knee has survived worse.", mood="smug", shot="close")
L("atlas", "Has it? Tornadoes, over three hundred kilometres an hour. Blizzards. Heatwaves, forty point three degrees in the UK. And droughts, which creep up slowly.", mood="teach", shot="close",
  boardClear=True, board="Tornado · blizzard · heatwave · drought")
L("dad", "But a typhoon? I'd stand on the beach and laugh at it.", mood="smug", shot="close")
L("atlas", "Would you. Then hold on. Not to me. I'm damp.", mood="smug", shot="close", gap=0.3)

confess("atlas", "ATLAS · Desk Globe · Waterproof In Theory")
L("atlas", "I have been dropped eleven times. Usually on Australia. Today, Sumatra also got rained on.", mood="bored")
L("atlas", "Dad's knee has been wrong more often than I have been dropped. Mostly by Dad.", mood="smug", gap=0.5)

# ---------------- ACT 2: TYPHOON COAST ----------------
sfx("whoosh")
scene("beach", [("priya", 220), ("dad", 450), ("atlas", 760)], caption="LEYTE · The Philippines · Typhoon season")
L("dad", "The Philippines! Warm sea, lovely breeze. Bring on the typhoon!", mood="excited", shot="close")
sfx("door")
poof("guest", 1075)
L("guest", "Hello! I'm Doctor Reyes, a forecaster with the Philippine weather service. We get about twenty typhoons a year. Please don't say bring it on.", mood="happy", shot="close")
L("priya", "Our dad thinks his knee can forecast the weather.", mood="deadpan", shot="two")
L("guest", "Lovely. We use satellites. But the knee is welcome.", mood="happy", shot="close", gap=0.3)
L("guest", "Hurricane, typhoon, cyclone. Same storm, a tropical cyclone. Only the ocean changes the name.", mood="teach", shot="close",
  boardClear=True, board="Hurricane = typhoon = cyclone")
L("guest", "It needs a warm sea, at least twenty six point five degrees. That's the fuel.", mood="teach", shot="close",
  board="Sea at least 26.5 °C = the fuel")
L("guest", "And a latitude of about five to thirty degrees, where the Coriolis effect from the Earth's spin can make it rotate.", mood="teach", shot="close",
  board="5–30° from Equator · Coriolis = spin")
L("priya", "So Singapore, at one degree north, almost never gets hit.", mood="thinking", shot="close",
  board="Also: low wind shear, rising moist air")
L("atlas", "Warm moist air rises, making low pressure. It condenses into giant clouds and releases heat, so it rises faster. A self-feeding engine.", mood="teach", shot="close",
  boardClear=True, diagram=CYCLONE)
L("guest", "The eye is calm, with sinking air. The eye wall has the strongest winds and heaviest rain.", mood="teach", shot="close",
  board="Eye = calm · eye wall = worst winds")
L("dad", "So when the eye comes, I pop out for a selfie.", mood="excited", shot="close", prop="phone")
L("guest", "Please don't. The other side of the eye wall arrives soon after, with winds from the opposite direction.", mood="worried", shot="close",
  board="The eye passing ≠ the storm is over")
L("atlas", "On the Saffir Simpson scale, category one starts at one hundred and nineteen kilometres an hour. Category five, two hundred and fifty two or more.", mood="teach", shot="close",
  board="Saffir–Simpson: Cat 1 119 → Cat 5 252+")
L("guest", "Typhoon Haiyan. The eighth of November, twenty thirteen. Winds of about three hundred and fifteen kilometres an hour. But water killed more than wind.", mood="sad", shot="close",
  boardClear=True, board="Haiyan: 8 Nov 2013 · ~315 km/h winds")
L("guest", "A storm surge of five to seven metres swept into Tacloban, at the end of a narrowing bay.", mood="sad", shot="close",
  board="Storm surge 5–7 m at Tacloban")
L("atlas", "A surge is the sea bulging up under low pressure, with the wind piling it onto the coast. It usually causes most deaths.", mood="teach", shot="close",
  board="Surge = low pressure + wind push the sea")
L("guest", "About six thousand three hundred people died. Around four million were displaced. Heavy rain brought floods and landslides too.", mood="sad", shot="close",
  board="~6,300 deaths · ~4 million displaced")
L("guest", "The forecast was right, and about eight hundred thousand evacuated. But many didn't understand the words storm surge.", mood="sad", shot="close",
  board="Warnings must be UNDERSTOOD")
L("dad", "So a warning only works if people understand it.", mood="thinking", shot="close")
L("priya", "Dad said something true. Somebody write down the date.", mood="shock", shot="close", gap=0.3)
L("dad", "So how do you forecast? A really big knee?", mood="thinking", shot="close")
L("guest", "Observe, model, warn. Satellites, radar, ocean buoys and weather balloons measure the atmosphere.", mood="teach", shot="close",
  boardClear=True, board="1. OBSERVE: satellites, radar, buoys")
L("atlas", "Supercomputers use physics to run the forecast about fifty times. That's an ensemble. If the runs agree, be confident.", mood="teach", shot="close",
  board="2. MODEL: supercomputer ensembles")
L("dad", "My knee is an ensemble of one.", mood="smug", shot="close",
  board="3. WARN: people understand and act")
L("guest", "How confident is it?", mood="deadpan", shot="close")
L("dad", "Extremely. Wrongly, but extremely.", mood="worried", shot="close", gap=0.4)
L("guest", "Warnings save lives. In nineteen seventy the Bhola cyclone hit what is now Bangladesh with little warning. Up to half a million people died.", mood="sad", shot="close",
  boardClear=True, diagram=WARNINGS)
L("priya", "Now Bangladesh has over seventy thousand warning volunteers, and raised cyclone shelters.", mood="thinking", shot="close",
  board="Bangladesh: 70,000+ volunteers, shelters")
L("guest", "And Odisha, in India, moved about one point two million people before Cyclone Fani in twenty nineteen. Fewer than one hundred died.", mood="happy", shot="close",
  board="Better warnings = fewer deaths")

confess("dad", "DAD · Chief Forecaster (Self-Appointed) · Forty Airports")
L("dad", "I have been to forty countries. Well. Forty airports. Eleven flights delayed by weather. I blamed the pilots.", mood="sad")
L("dad", "My knee is retiring. It wants to spend more time with the other knee.", mood="sad", gap=0.6)

# ---------------- ACT 3: KITCHEN WEATHER STATION ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Mum has turned the kitchen into a weather station. Nobody asked.", 2.4)
scene("kitchen", [("mum", 220), ("nani", 450), ("priya", 680)])
L("mum", "If this family needs a forecaster, it will be a proper one. A kitchen weather station.", mood="determined", shot="wide", prop="thermometer")
L("mum", "Rain gauge. A funnel in a jam jar. Rainfall in millimetres.", mood="teach", shot="close",
  boardClear=True, board="Rain gauge → rainfall (mm)")
L("priya", "Wind vane, from a chopstick. Winds are named after where they come from.", mood="teach", shot="close",
  board="Wind vane → direction (named FROM)")
L("mum", "Paper cup anemometer for wind speed. Barometer for air pressure, in hectopascals.", mood="teach", shot="close",
  board="Anemometer → speed · Barometer → hPa")
L("nani", "A hygrometer for humidity? I don't need one. I have hair.", mood="smug", shot="close",
  board="Hygrometer → humidity (%)", gap=0.4)
poof("atlas", 990)
L("mum", "And the thermometer lives in a white, slatted box on legs, on the grass. A Stevenson screen!", mood="smug", shot="close",
  boardClear=True, board="Stevenson screen: white, louvred, 1.25 m")
L("atlas", "Splendid. About one point two five metres up, away from buildings, so you measure the air, not the sun.", mood="teach", shot="close",
  board="On grass, away from buildings")
L("priya", "Memory trick. The Rain Bucket Annoys Wet Hikers.", mood="smug", shot="close",
  board="The Rain Bucket Annoys Wet Hikers")
L("dad", "Has anyone seen the white shoe cupboard?", mood="worried", offstage=True)
L("mum", "No.", mood="deadpan", shot="close", gap=0.4)

# ---------------- SYNOPTIC CHART ----------------
scene("classroom", [("teacher", 260), ("priya", 560), ("atlas", 880)])
L("teacher", "Exam skill. Synoptic charts. Isobars are lines joining places of equal air pressure.", mood="teach", shot="close",
  boardClear=True, diagram=ISOBARS)
L("teacher", "Close together means strong winds. Far apart means light winds. Do not read it backwards.", mood="teach", shot="close",
  board="Close isobars = STRONG winds")
L("priya", "Lows have rising air, cloud and rain. Highs have sinking air and clear skies.", mood="thinking", shot="close",
  board="LOW: rising air, rain · HIGH: clear")
L("teacher", "In case studies, quote numbers. Not very windy. Three hundred and fifteen kilometres an hour.", mood="annoyed", shot="close",
  board="Case studies: quote the numbers")
L("teacher", "Why is there a damp globe at the back of my class?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Still Drying Out")
L("atlas", "Recap. First. Weather is now. Climate is the thirty year average.", mood="teach",
  boardClear=True, board="1. Weather = now · climate = 30-yr average")
L("atlas", "Second. Cyclones need a sea of at least twenty six point five degrees, five to thirty degrees from the Equator, and spin.", mood="teach",
  board="2. Sea ≥ 26.5 °C · 5–30° · Coriolis")
L("atlas", "Third. Storm surge usually kills the most.", mood="teach",
  board="3. Storm surge kills most (Haiyan 5–7 m)")
L("atlas", "Fourth. Observe, model, warn. And people must act.", mood="teach",
  board="4. Observe → model → warn → ACT")
L("atlas", "And finally. Close isobars mean strong winds.", mood="smug",
  board="5. Close isobars = strong winds", gap=0.5)

# ---------------- TAG ----------------
scene("park", [("dad", 300), ("priya", 560), ("atlas", 880)])
L("dad", "New system. Radar, satellites, and an ensemble. Fifty runs.", mood="smug", shot="close", prop="tablet")
L("priya", "And?", mood="deadpan", shot="close")
L("dad", "Forty nine say rain. One says sunshine. I'm going with that one.", mood="excited", shot="close")
L("atlas", "That one is his knee.", mood="deadpan", shot="close")
sfx("trombone")
L("priya", "Umbrella.", mood="deadpan", shot="wide", prop="umbrella", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Then he checks the radar.", 3.0)
challenge(1, "Give TWO conditions needed for a tropical cyclone to form.", "Sea ≥ 26.5 °C; 5–30° lat",
  "Also: Coriolis spin, low wind shear",
  "Question one. Give two conditions needed for a tropical cyclone to form.",
  "A sea of at least twenty six point five degrees, and a latitude of five to thirty degrees. Low wind shear also scores.")
challenge(2, "On a synoptic chart the isobars are very close together. What does this show?", "Strong winds",
  "Steep pressure gradient → strong wind",
  "Question two. The isobars are very close together. What does this show?",
  "Strong winds. Close isobars mean a steep pressure gradient.")
challenge(3, "Which tropical cyclone hazard usually causes the most deaths?", "Storm surge",
  "Haiyan 2013: 5–7 m surge at Tacloban",
  "Question three. Which cyclone hazard usually causes the most deaths?",
  "Storm surge. Water kills more than wind.")
end_card()
