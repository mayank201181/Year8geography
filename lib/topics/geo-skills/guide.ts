import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "geo-skills",
  title: "The Geographer's Toolkit",
  strand: "Skills",
  icon: "🧭",
  summary: "Pin any place on Earth, measure any route and make any graph tell its story.",
  intro:
    "Every geography unit you study this year — population, extreme environments, coasts, cities — uses the same toolkit. In this topic you will learn to locate a feature with a 4- or 6-figure grid reference, find anywhere on the planet with latitude and longitude, turn centimetres on a map into kilometres on the ground, read values and changes from graphs and maps, and describe what you see the way an examiner wants: trend, evidence, anomaly. These skills are worth easy marks in every exam, so practise them until they feel automatic.",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "grid-references",
      heading: "Grid references & compass directions",
      discovery: {
        problem:
          "Wei Ling texts Arjun: 'Meet me at the church on the map.' But the map has three churches on it. Using **only numbers**, how could she tell him exactly which church — and could she get him to within about 100 metres of the door?",
        idea:
          "Maps are covered in a numbered grid. The lines going across the bottom (**eastings**) and up the side (**northings**) let you name any square with **four figures** — and, by imagining each square split into tenths, any point with **six figures**. Wei Ling's church becomes 463217: one place, no confusion.",
      },
      body:
        "Ordnance Survey (OS) maps of Great Britain, and Singapore's own maps, are covered by a grid of blue lines. On OS maps the lines are **1 km apart**, so every grid square is 1 km × 1 km.\n\n- **Eastings** are the vertical lines. Their numbers run along the bottom and top of the map and **increase towards the east**.\n- **Northings** are the horizontal lines. Their numbers run up the sides and **increase towards the north**.\n\n> Always give the easting first: **along the corridor, then up the stairs.**\n\n**4-figure grid references** name a whole square. Find the easting line on the **left** edge of the square, then the northing line along its **bottom** edge. The square is named after its bottom-left corner.\n\n    church square: easting 46, northing 21 → 4621\n\n**6-figure grid references** name a point. Imagine each side of the square divided into 10 tenths. Count how many tenths across the feature is, then how many tenths up, and slip each extra digit after its two-figure number.\n\n    46 + 3 tenths → 463 ;  21 + 7 tenths → 217 → 463217\n\nOn an OS map each tenth is 100 m, so a 6-figure reference pins a feature to within about 100 m.\n\n| Reference | What it gives | Use it for |\n|---|---|---|\n| 4-figure (e.g. 4520) | one 1 km square | an area: a wood, a village, a lake |\n| 6-figure (e.g. 463217) | a point to about 100 m | a building, a bridge, a spot height |\n\n**Compass directions.** The **8-point compass** is N, NE, E, SE, S, SW, W, NW. Directions are always given *from* one place *to* another. On the map extract, the campsite is **north-east** of the church — so the church is **south-west** of the campsite. North is the top of the map unless a north arrow says otherwise.\n\nIn Singapore, the Singapore Land Authority's **OneMap** uses a national grid called **SVY21**, which works on exactly the same principle: eastings and northings, measured in metres.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OS-style map extract. Eastings 45 to 49 run along the bottom and northings 20 to 24 up the side. A church is at 463217 in square 4621, a school at 475224 in square 4722, a campsite at 482236 in square 4823, woodland fills square 4520, and a road crosses a river at a bridge in square 4822. A key and an 8-point compass rose are on the right."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="50" y="12" width="264" height="264" fill="#f8fafc" stroke="#1f2937" stroke-width="1.5"/><path d="M58 222 Q70 214 86 218 Q106 214 110 232 Q114 252 104 266 Q84 274 66 268 Q54 256 58 222 Z" fill="#bbf7d0" stroke="#15803d"/><text x="84" y="248" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#14532d">Wood</text><path d="M292 12 C286 50 278 80 281 111 C284 150 250 200 232 276" fill="none" stroke="#0284c7" stroke-width="4"/><path d="M50 182 L130 180 C170 178 190 132 210 130 L281 111 L314 102" fill="none" stroke="#b45309" stroke-width="3"/><path d="M273 107 L289 103 M273 119 L289 115" stroke="#1f2937" stroke-width="2"/><g stroke="#64748b" stroke-width="1"><line x1="116" y1="12" x2="116" y2="276"/><line x1="182" y1="12" x2="182" y2="276"/><line x1="248" y1="12" x2="248" y2="276"/><line x1="50" y1="210" x2="314" y2="210"/><line x1="50" y1="144" x2="314" y2="144"/><line x1="50" y1="78" x2="314" y2="78"/></g><circle cx="135.8" cy="163.8" r="4.5" fill="#1f2937"/><path d="M135.8 151 V159 M132 154.5 H139.6" stroke="#1f2937" stroke-width="1.6"/><text x="143" y="167" font-size="11" font-family="sans-serif" fill="#1f2937">Church</text><rect x="211" y="113.6" width="8" height="8" fill="#1f2937"/><text x="215" y="108" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Sch</text><polygon points="261.2,31.4 254.6,43.4 267.8,43.4" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="261" y="57" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Campsite</text><g font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="50" y="291">45</text><text x="116" y="291">46</text><text x="182" y="291">47</text><text x="248" y="291">48</text><text x="314" y="291">49</text></g><g font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="44" y="280">20</text><text x="44" y="214">21</text><text x="44" y="148">22</text><text x="44" y="82">23</text><text x="44" y="16">24</text></g><text x="182" y="310" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">Eastings (along the corridor first) →</text><text x="14" y="144" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155" transform="rotate(-90 14 144)">Northings (then up the stairs) →</text><text x="330" y="24" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">Key</text><g font-size="11" font-family="sans-serif" fill="#1f2937"><circle cx="338" cy="43" r="4" fill="#1f2937"/><text x="352" y="47">Church</text><rect x="334" y="58" width="8" height="8" fill="#1f2937"/><text x="352" y="66">School (Sch)</text><polygon points="338,76 332,87 344,87" fill="#fde68a" stroke="#1f2937"/><text x="352" y="86">Campsite</text><rect x="331" y="96" width="14" height="11" fill="#bbf7d0" stroke="#15803d"/><text x="352" y="106">Woodland</text><line x1="330" y1="122" x2="346" y2="122" stroke="#0284c7" stroke-width="4"/><text x="352" y="126">River</text><line x1="330" y1="142" x2="346" y2="142" stroke="#b45309" stroke-width="3"/><text x="352" y="146">Road</text><path d="M330 158 H346 M330 168 H346" stroke="#1f2937" stroke-width="2"/><text x="352" y="167">Bridge</text><text x="330" y="188">Grid lines 1 km apart</text></g><g stroke="#1f2937" stroke-width="1.5"><line x1="405" y1="215" x2="405" y2="275"/><line x1="375" y1="245" x2="435" y2="245"/><line x1="388" y1="228" x2="422" y2="262"/><line x1="422" y1="228" x2="388" y2="262"/></g><polygon points="405,213 400,226 410,226" fill="#1f2937"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="405" y="208" font-weight="bold">N</text><text x="405" y="290">S</text><text x="446" y="249">E</text><text x="364" y="249">W</text><text x="433" y="224">NE</text><text x="377" y="224">NW</text><text x="433" y="274">SE</text><text x="377" y="274">SW</text></g></svg>`,
      diagramCaption:
        "A map extract with 1 km grid squares. The church is in square 4621 (6-figure 463217), the school at 475224, the campsite at 482236 and the bridge in square 4822. The wood fills square 4520.",
      workedExamples: [
        {
          title: "A 4-figure grid reference",
          problem: "Give the 4-figure grid reference of the square that contains the church on the map extract.",
          steps: [
            "Go **along the corridor**: find the easting line on the left-hand edge of the church's square. It is **46**.",
            "Then go **up the stairs**: find the northing line along the bottom edge of the same square. It is **21**.",
            "Write the easting first, then the northing, with no gap needed: 46 then 21.",
          ],
          answer: "4621",
          yourTurn: {
            question: "Your turn: give the 4-figure grid reference of the square that contains the campsite.",
            answer: { type: "text", accept: ["4823", "48 23", "48-23"] },
            solution: "The line on the left of the campsite's square is easting 48; the line along its bottom is northing 23. Along the corridor, then up the stairs: 4823.",
          },
        },
        {
          title: "A 6-figure grid reference",
          problem: "Give the 6-figure grid reference of the church.",
          steps: [
            "Start with the square: easting 46, northing 21.",
            "Imagine the square's bottom edge split into 10 tenths. The church is **3 tenths** of the way across from line 46, so the easting becomes **463**.",
            "Imagine the left edge split into 10 tenths. The church is **7 tenths** of the way up from line 21, so the northing becomes **217**.",
            "Easting first, then northing: 463 then 217.",
          ],
          answer: "463217",
          yourTurn: {
            question: "Your turn: the school (Sch) is exactly halfway across its square and 4 tenths of the way up. Give its 6-figure grid reference.",
            answer: { type: "text", accept: ["475224", "475 224", "475-224"] },
            solution: "Its square is 4722. Halfway across = 5 tenths, so 475. Four tenths up = 4, so 224. Answer: 475224.",
          },
        },
      ],
      keyPoints: [
        "Eastings (vertical lines, numbered along the bottom) come first; northings (horizontal lines, numbered up the side) second.",
        "A 4-figure reference names the square by its bottom-left corner.",
        "A 6-figure reference adds tenths across and tenths up, locating a point to about 100 m on an OS map.",
        "The 8-point compass: N, NE, E, SE, S, SW, W, NW — directions are always from one place to another.",
        "OS grid squares are 1 km × 1 km on both 1:25 000 and 1:50 000 maps.",
      ],
      whyItWorks:
        "A grid reference is just a coordinate, like (x, y) in maths: across first, then up. Because everyone uses the same order and names each square after its bottom-left corner, one reference always means one place. Splitting each 1 km side into 10 equal parts makes each part 100 m, so the extra digit in a 6-figure reference shrinks the search area from a 1 km × 1 km square to a 100 m × 100 m box — one hundred times smaller.",
      strategies: ["Work it out from the map", "Read the key first", "Sketch it"],
      thinkDeeper:
        "In which direction is the church from the campsite? Now try this: why would a 6-figure grid reference be a poor way to describe where the whole wood is — and what would you give instead?",
    },
    // ------------------------------------------------------------------
    {
      id: "latitude-longitude",
      heading: "Latitude & longitude",
      discovery: {
        problem:
          "Singapore is at about 1°N, 104°E. Place P is at 1°N, 30°E. Place Q is at 40°N, 104°E (in northern China). Without a map: which place is closer to Singapore?",
        idea:
          "Q is closer. P is 74 degrees of longitude away along the Equator (about 74 × 111 ≈ 8,200 km); Q is 39 degrees of latitude away (about 39 × 111 ≈ 4,300 km). Latitude and longitude are a **global grid** — and because one degree near the Equator is about 111 km, you can even estimate distances with them.",
      },
      body:
        "Grid references only work on one map. To locate anywhere on Earth, geographers use a global grid measured in **degrees (°)**.\n\n**Latitude** lines run east–west around the globe, parallel to each other (so they are also called **parallels**). Latitude measures how far **north or south of the Equator** a place is, from 0° at the Equator to 90°N (North Pole) and 90°S (South Pole).\n\n**Longitude** lines run north–south from pole to pole (they are called **meridians**). Longitude measures how far **east or west of the Prime Meridian** a place is, from 0° to 180°E or 180°W.\n\n| Key line | Degrees | Why it matters |\n|---|---|---|\n| Equator | 0° latitude | splits the Northern and Southern Hemispheres |\n| Tropic of Cancer | about 23.5°N | furthest north the midday Sun is ever directly overhead |\n| Tropic of Capricorn | about 23.5°S | furthest south the midday Sun is ever directly overhead |\n| Arctic Circle | about 66.5°N | north of it there is at least one day of 24-hour daylight each year |\n| Antarctic Circle | about 66.5°S | the same, in the south |\n| Prime Meridian | 0° longitude | runs through Greenwich, London; splits Eastern and Western Hemispheres |\n\n**Writing a location.** Give latitude first, then longitude, each with its letter: Singapore is about **1°N, 104°E** (more precisely about 1°17′N, 103°50′E — each degree splits into 60 minutes, written ′). London is about 51.5°N, 0°. Sydney is about 34°S, 151°E.\n\nSingapore sits only about 1.3° north of the Equator — roughly 140–150 km. That is why it has no real winter: the midday Sun is high in the sky all year.\n\n**Using degrees for distance.** Lines of latitude are parallel, so 1° of latitude is always about **111 km**. Lines of longitude meet at the poles, so 1° of longitude is about 111 km only at the Equator and shrinks to zero at the poles.\n\nThe Prime Meridian was agreed at an international conference in Washington, D.C. in **1884**, which chose the line through the Royal Observatory at Greenwich.",
      diagram: `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified world map with the Equator at 0 degrees, the Tropics of Cancer and Capricorn at about 23.5 degrees north and south, the Arctic and Antarctic Circles at about 66.5 degrees, and the Prime Meridian at 0 degrees longitude through Greenwich. Singapore is marked at about 1 degree north, 104 degrees east."><rect x="0" y="0" width="480" height="290" fill="#ffffff"/><rect x="12" y="33" width="336" height="234" fill="#bae6fd" stroke="#334155"/><g fill="#bbf7d0" stroke="#334155" stroke-width="0.8"><polygon points="25.1,61.6 26,72 40,72 54,74.6 63.3,86.3 64.3,98 70.8,108.4 77.3,120.1 82,124 91.3,129.2 100.7,137 108.1,139.6 102.5,130.5 98.8,122.7 96,122.7 89.5,116.2 96,111 103.5,112.3 105.3,117.5 104.4,109.7 109.1,104.5 114.7,95.4 124,90.2 128.7,82.4 124,74.6 119.3,72 105.3,68.1 96,59 68,59 49.3,59 30.7,57.7"/><polygon points="133.3,72 140.8,72 161.3,59 161.3,43.4 124,43.4 114.7,49.9 128.7,61.6"/><polygon points="108.1,139.6 112.8,134.4 124,137 133.3,150 147.3,156.5 143.6,169.5 135.2,182.5 125.9,199.4 119.3,208.5 116.5,220.2 111.9,215 111.9,202 113.7,189 114.7,173.4 109.1,168.2 104.4,156.5 105.3,148.7"/><polygon points="170.7,111 174.4,103.2 189.3,101.9 198.7,108.4 209.9,109.7 212.7,113.6 220.1,134.4 227.6,135.7 217.3,156.5 217.3,169.5 212.7,182.5 198.7,195.5 196.8,189 191.2,156.5 188.4,144.8 172.5,144.8 164.1,130.5 164.1,122.7"/><polygon points="171.6,101.9 171.6,94.1 176.3,87.6 184.7,81.1 187.5,75.9 184.7,69.4 194,60.3 208,57.7 236,59 254.7,55.1 282.7,51.2 310.7,56.4 348,61.6 348,69.4 329.3,72 310.7,79.8 306,94.1 293.9,98 292,111 282.7,124 281.7,134.4 278,138.3 277.1,148.3 273.3,139.6 271.5,130.5 267.7,127.9 264,121.4 254.7,130.5 251.9,139.6 248.1,124 242.5,117.5 235.1,121.4 233.2,117.5 228.5,118.8 222,133.1 212.7,113.6 209.9,109.7 213.6,103.2 206.1,96.7 198.7,98 194,100.6 191.2,92.8 182.8,94.1 175.3,103.2"/><polygon points="175.3,85 180.9,83.7 180,81.1 178.1,77.2 177.2,73.8 174.4,74.6 175.3,78.5"/><polygon points="281.7,148.7 289.2,140.9 291.1,148.7 288.3,155.2 282.7,153.9"/><polygon points="268.7,142.8 273.3,147.4 278.9,157.5 275.2,156.5 269.6,146.1"/><polygon points="301.3,109.7 306,105.8 310.7,103.2 312.5,98 311.6,91.5 309.7,98 304.1,104.5"/><polygon points="285.5,178.6 287.3,194.2 293.9,194.2 302.3,190.3 308.8,195.5 316.3,200.7 320,198.1 322.8,186.4 316.3,174.7 312.5,164.3 306.9,165.6 301.3,165.6 293.9,172.1"/></g><polygon points="12,243.6 40,247.5 68,243.6 96,243.6 124,233.2 142.7,250.1 180,241 217.3,238.4 254.7,237.1 292,235.8 329.3,241 348,243.6 348,267 12,267" fill="#e0f2fe" stroke="#334155" stroke-width="0.8"/><g fill="none" stroke-width="1.4"><line x1="12" y1="63.5" x2="348" y2="63.5" stroke="#1d4ed8" stroke-dasharray="6 4"/><line x1="12" y1="119.5" x2="348" y2="119.5" stroke="#b45309" stroke-dasharray="6 4"/><line x1="12" y1="150" x2="348" y2="150" stroke="#b91c1c" stroke-width="2"/><line x1="12" y1="180.6" x2="348" y2="180.6" stroke="#b45309" stroke-dasharray="6 4"/><line x1="12" y1="236.4" x2="348" y2="236.4" stroke="#1d4ed8" stroke-dasharray="6 4"/><line x1="180" y1="33" x2="180" y2="267" stroke="#7c3aed" stroke-width="2"/></g><circle cx="180" cy="83" r="2.5" fill="#1f2937"/><line x1="276.9" y1="152" x2="276" y2="205" stroke="#dc2626" stroke-width="1"/><circle cx="276.9" cy="148.3" r="3.5" fill="#dc2626" stroke="#ffffff" stroke-width="1"/><text x="300" y="216" font-size="11" font-family="sans-serif" text-anchor="end" fill="#7f1d1d">Singapore ≈ 1°N, 104°E</text><text x="180" y="25" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#5b21b6">Prime Meridian 0° (Greenwich)</text><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="354" y="61">Arctic Circle</text><text x="354" y="74">about 66.5°N</text><text x="354" y="117">Tropic of Cancer</text><text x="354" y="130">about 23.5°N</text><text x="354" y="154" font-weight="bold" fill="#b91c1c">Equator 0°</text><text x="354" y="179">Tropic of Capricorn</text><text x="354" y="192">about 23.5°S</text><text x="354" y="234">Antarctic Circle</text><text x="354" y="247">about 66.5°S</text></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="12" y="282">180°</text><text x="96" y="282">90°W</text><text x="180" y="282">0°</text><text x="264" y="282">90°E</text><text x="348" y="282">180°</text></g></svg>`,
      diagramCaption:
        "The key lines of latitude (horizontal) and the Prime Meridian (vertical, 0° longitude). North of the Equator is the Northern Hemisphere; east of the Prime Meridian is the Eastern Hemisphere. Singapore sits just north of the Equator, about 104° east.",
      workedExamples: [
        {
          title: "Using degrees of latitude to estimate distance",
          problem: "Using 1° of latitude ≈ 111 km, estimate how far the Tropic of Cancer (about 23.5°N) is from the Equator.",
          steps: [
            "The Equator is 0°, the Tropic of Cancer is 23.5°N, so the difference is 23.5°.",
            "Lines of latitude are parallel, so every degree is about the same distance: 111 km.",
            "    23.5 × 111 = 2,608.5 km",
            "Round sensibly, because 111 km is already an approximation.",
          ],
          answer: "About 2,600 km",
          yourTurn: {
            question: "Your turn: using 1° of latitude ≈ 111 km, how far north of the Equator is a place at 10°N? Give your answer in km.",
            answer: { type: "number", value: 1110 },
            solution: "10 − 0 = 10 degrees of latitude. 10 × 111 = 1,110 km.",
          },
        },
        {
          title: "Identify a place from its coordinates",
          problem: "A city lies at about 34°S, 151°E. Use the world map to work out which continent it is on.",
          steps: [
            "Latitude first: 34°**S** means south of the Equator — and further south than the Tropic of Capricorn (23.5°S).",
            "Longitude second: 151°**E** means east of the Prime Meridian, and well beyond 90°E.",
            "South of the Tropic of Capricorn and between 90°E and 180° → the only large land mass there is Australia.",
            "34°S puts it on the south-east coast: this is Sydney.",
          ],
          answer: "Australia (Sydney)",
          yourTurn: {
            question: "Your turn: a large city on the River Nile lies at about 30°N, 31°E. Name the country it is in.",
            answer: { type: "text", accept: ["Egypt", "Arab Republic of Egypt"] },
            solution: "30°N is north of the Tropic of Cancer; 31°E is a little east of the Prime Meridian. That is north-east Africa, on the Nile: Egypt (the city is Cairo).",
          },
        },
      ],
      keyPoints: [
        "Latitude = degrees north or south of the Equator (0°–90°); longitude = degrees east or west of the Prime Meridian (0°–180°).",
        "Write latitude first, then longitude, always with N/S and E/W: Singapore ≈ 1°N, 104°E.",
        "Key lines: Equator 0°, Tropics about 23.5°N/S, Arctic/Antarctic Circles about 66.5°N/S, Prime Meridian 0° through Greenwich.",
        "1° of latitude ≈ 111 km everywhere; 1° of longitude ≈ 111 km only at the Equator.",
        "1 degree = 60 minutes (′).",
      ],
      whyItWorks:
        "The special lines are not random. Earth's axis is tilted by about 23.5°, so as Earth orbits the Sun, the place where the midday Sun is directly overhead moves between about 23.5°N and 23.5°S — those limits are the Tropics. The Arctic and Antarctic Circles are 90° − 23.5° = 66.5° from the Equator: beyond them, the tilt means the Sun can stay above (or below) the horizon for a whole day. Longitude lines meet at the poles, which is why a degree of longitude gets shorter as you travel away from the Equator.",
      strategies: ["CLOCC (Continents, Lines of latitude, Oceans, Countries, Compass)", "Work it out from the map", "Eliminate options"],
      thinkDeeper:
        "Earth turns 360° in 24 hours, so every 15° of longitude is about one hour of time. At 104°E, Singapore 'should' be about 7 hours ahead of Greenwich — yet since 1982 its clocks have been 8 hours ahead (UTC+8). Why might a country choose a time zone that doesn't match its longitude?",
    },
    // ------------------------------------------------------------------
    {
      id: "scale-distance",
      heading: "Scale & distance",
      discovery: {
        problem:
          "Priya's hiking map says **1:50 000**. The route from the car park to the waterfall measures 7 cm on the map. Is this a ten-minute stroll or a proper hike? And what if the map said 1:25 000 instead?",
        idea:
          "1:50 000 means every 1 cm on the map is 50,000 cm in real life — that's 0.5 km. So 7 cm is 3.5 km: a proper hike (and the winding path will be longer still). On a 1:25 000 map the same 7 cm would be only 1.75 km.",
      },
      body:
        "A map is the real world shrunk down. The **scale** tells you by how much.\n\n**Ratio scale** (also called a representative fraction), e.g. **1:50 000**: 1 unit on the map represents 50,000 of the same units on the ground. The units must match, so 1 cm on the map = 50,000 cm on the ground.\n\n    100 cm = 1 m   and   1,000 m = 1 km   so   100,000 cm = 1 km\n    1:50 000 → 1 cm = 50,000 cm = 500 m = 0.5 km\n    1:25 000 → 1 cm = 25,000 cm = 250 m = 0.25 km\n\n**Line scale**: a bar drawn on the map, marked in km. Lay your ruler or paper edge against it and read the distance directly — handy if the map has been enlarged or shrunk when photocopied.\n\n| Scale | 1 cm on the map = | 1 km on the ground = | OS grid square |\n|---|---|---|---|\n| 1:25 000 | 250 m | 4 cm on the map | 4 cm × 4 cm |\n| 1:50 000 | 500 m | 2 cm on the map | 2 cm × 2 cm |\n\nA 1:25 000 map is a **larger scale** than 1:50 000: things look bigger and you see more detail (individual field boundaries and footpaths), but each sheet covers less ground. Ordnance Survey's Explorer maps are 1:25 000; its Landranger maps are 1:50 000.\n\n**Measuring distance**\n\n1. **Straight-line distance** (as the crow flies): measure with a ruler from point to point, then convert.\n1. **Winding distance** (along a road, river or path): use the **paper-edge method**. Mark the start on the edge of a sheet of paper, line the edge up with the first straight stretch, mark the end of it, then pivot the paper at each bend and keep marking. Finally, measure the total length on the paper strip and convert. A piece of string laid along the route works too.\n\n**Count grid squares for a quick check.** On OS maps each grid square is 1 km across, so a route crossing about three squares is roughly 3 km.\n\nScale also explains why world maps can't show Singapore's streets: the main island is roughly 50 km from east to west, which on a 1:50 000 map would be about 100 cm — a map a whole metre wide.",
      diagram: `<svg viewBox="0 0 480 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top: a 1:50 000 line scale from 0 to 3 km above a ruler from 0 to 6 cm, showing 2 cm equals 1 km. Bottom: a winding road from A to B made of three straight stretches of 2.0, 1.5 and 2.5 centimetres, marked on a paper strip totalling 6 centimetres, which is 3 kilometres. A dashed straight line from A to B measures 4 centimetres, which is 2 kilometres."><rect x="0" y="0" width="480" height="310" fill="#ffffff"/><text x="70" y="20" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">Line scale — 1:50 000</text><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="70" y="39">0 km</text><text x="150" y="39">1</text><text x="230" y="39">2</text><text x="310" y="39">3 km</text></g><rect x="70" y="44" width="80" height="10" fill="#1f2937"/><rect x="150" y="44" width="80" height="10" fill="#ffffff" stroke="#1f2937"/><rect x="230" y="44" width="80" height="10" fill="#1f2937"/><rect x="66" y="58" width="252" height="28" fill="#fde68a" stroke="#334155"/><g stroke="#1f2937" stroke-width="1.2"><line x1="70" y1="58" x2="70" y2="68"/><line x1="110" y1="58" x2="110" y2="68"/><line x1="150" y1="58" x2="150" y2="68"/><line x1="190" y1="58" x2="190" y2="68"/><line x1="230" y1="58" x2="230" y2="68"/><line x1="270" y1="58" x2="270" y2="68"/><line x1="310" y1="58" x2="310" y2="68"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="70" y="80">0</text><text x="110" y="80">1</text><text x="150" y="80">2</text><text x="190" y="80">3</text><text x="230" y="80">4</text><text x="270" y="80">5</text><text x="304" y="80">6 cm</text></g><g font-size="12" font-family="sans-serif" fill="#1f2937"><text x="334" y="40">1:50 000 means</text><text x="334" y="56">1 cm = 50 000 cm</text><text x="334" y="72">= 500 m = 0.5 km,</text><text x="334" y="88">so 2 cm = 1 km</text></g><line x1="10" y1="104" x2="470" y2="104" stroke="#cbd5e1"/><text x="20" y="124" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">Measuring a winding road (paper-edge method)</text><line x1="70" y1="215" x2="228.4" y2="237.35" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/><polyline points="70,215 118,151 178,151 228.4,237.35" fill="none" stroke="#b45309" stroke-width="3"/><circle cx="70" cy="215" r="3.5" fill="#1f2937"/><circle cx="228.4" cy="237.35" r="3.5" fill="#1f2937"/><circle cx="118" cy="151" r="2.5" fill="#1f2937"/><circle cx="178" cy="151" r="2.5" fill="#1f2937"/><g font-size="12" font-family="sans-serif" fill="#1f2937"><text x="58" y="219" text-anchor="end" font-weight="bold">A</text><text x="236" y="248" font-weight="bold">B</text><text x="88" y="184" text-anchor="end">2.0 cm</text><text x="148" y="144" text-anchor="middle">1.5 cm</text><text x="212" y="192">2.5 cm</text></g><text x="140" y="250" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#475569">straight line: 4 cm = 2 km</text><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="268" y="150">1. Mark A on a paper edge.</text><text x="268" y="168">2. Pivot at each bend,</text><text x="268" y="184">marking as you go.</text><text x="268" y="202">3. Measure the strip;</text><text x="268" y="218">then convert.</text></g><rect x="70" y="262" width="240" height="16" fill="#fef9c3" stroke="#334155"/><g stroke="#1f2937" stroke-width="1.5"><line x1="70" y1="258" x2="70" y2="282"/><line x1="150" y1="258" x2="150" y2="282"/><line x1="210" y1="258" x2="210" y2="282"/><line x1="310" y1="258" x2="310" y2="282"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="110" y="274">2.0</text><text x="180" y="274">1.5</text><text x="260" y="274">2.5</text><text x="70" y="296" font-weight="bold">A</text><text x="310" y="296" font-weight="bold">B</text></g><g font-size="12" font-family="sans-serif" fill="#1f2937"><text x="322" y="270">Total = 6.0 cm</text><text x="322" y="287">6 × 0.5 km = 3 km</text></g></svg>`,
      diagramCaption:
        "Drawn to scale: 1 cm on the ruler is the same length on the road and on the paper strip. Along the road, A to B is 2.0 + 1.5 + 2.5 = 6.0 cm = 3 km at 1:50 000; in a straight line it is only 4 cm = 2 km.",
      workedExamples: [
        {
          title: "Straight-line distance at 1:50 000",
          problem: "On a 1:50 000 map, a youth hostel and a lighthouse are 7 cm apart in a straight line. How far apart are they on the ground, in km?",
          steps: [
            "Work out what 1 cm stands for: 1:50 000 → 1 cm = 50,000 cm.",
            "Convert to km: 50,000 cm ÷ 100,000 = 0.5 km. So 1 cm = 0.5 km.",
            "Multiply by the map distance:",
            "    7 × 0.5 = 3.5 km",
            "Check: 2 cm = 1 km at this scale, and 7 cm is three and a half lots of 2 cm → 3.5 km. ✓",
          ],
          answer: "3.5 km",
          yourTurn: {
            question: "Your turn: on a 1:50 000 map, two villages are 9 cm apart in a straight line. How far apart are they on the ground? Give your answer in km.",
            answer: { type: "number", value: 4.5 },
            solution: "At 1:50 000, 1 cm = 0.5 km. 9 × 0.5 = 4.5 km.",
          },
        },
        {
          title: "A winding road and a 1:25 000 map",
          problem: "Using the diagram: the road from A to B is made of straight stretches of 2.0 cm, 1.5 cm and 2.5 cm on a 1:50 000 map. How long is the road on the ground? How much further is it than the straight line (4 cm)?",
          steps: [
            "Add the stretches (this is what the paper strip does for you): 2.0 + 1.5 + 2.5 = 6.0 cm.",
            "Convert: 6.0 × 0.5 = 3.0 km along the road.",
            "Straight line: 4 × 0.5 = 2.0 km.",
            "Difference: 3.0 − 2.0 = 1.0 km further by road.",
          ],
          answer: "3 km by road — 1 km further than the 2 km straight line",
          yourTurn: {
            question: "Your turn: on a 1:25 000 map, how many centimetres represent a real distance of 2 km?",
            answer: { type: "number", value: 8 },
            solution: "At 1:25 000, 1 cm = 25,000 cm = 0.25 km, so 1 km = 4 cm. 2 km = 2 × 4 = 8 cm.",
          },
        },
      ],
      keyPoints: [
        "1:50 000 → 1 cm = 0.5 km (2 cm = 1 km). 1:25 000 → 1 cm = 0.25 km (4 cm = 1 km).",
        "Real distance = map distance × scale denominator; then divide cm by 100,000 to get km.",
        "Use a ruler for straight-line distance and the paper-edge (or string) method for winding routes.",
        "Larger scale (1:25 000) = more detail, smaller area covered.",
        "Always give units (km or m) in your answer.",
      ],
      whyItWorks:
        "A ratio scale is a multiplier. '1:50 000' says every length on the map has been divided by 50,000, so to undo it you multiply by 50,000. The only tricky part is units: there are 100 cm in a metre and 1,000 m in a kilometre, so 100 × 1,000 = 100,000 cm in a kilometre. Dividing 50,000 by 100,000 gives 0.5 — which is why 1 cm on a 1:50 000 map is half a kilometre.",
      strategies: ["Work it out from the map", "Use figures from the source", "Sketch it"],
      thinkDeeper:
        "Ethan measures a mountain path as 4 cm on a 1:50 000 map and plans a 2 km walk. It takes him much longer than he expected. Give two reasons why the real walking distance could be longer than the map measurement.",
    },
    // ------------------------------------------------------------------
    {
      id: "graphs-and-charts",
      heading: "Reading graphs & charts",
      discovery: {
        problem:
          "The world reached 1 billion people in about 1804 and 2 billion in 1927. It reached 7 billion in 2011 and 8 billion in 2022. The *same* extra billion took 123 years once and 11 years later. If you plotted these on a line graph, what shape would the line make?",
        idea:
          "A curve that starts almost flat and then shoots upwards — a **J-curve**. A graph turns a list of numbers into a shape your eye can read instantly. Your job is to read the shape *and* pull out exact values, changes and rates.",
      },
      body:
        "Choosing and reading the right graph is half the battle.\n\n| Graph or map | Best for | Watch out for |\n|---|---|---|\n| Bar chart | comparing separate categories (rainfall each month, visitors per site) | read across from the top of the bar to the axis |\n| Line graph | change over time (continuous data) | check the scale on both axes — are the gaps even? |\n| Pie chart | parts of a whole (%) | 100% = 360°, so each 1% = 3.6° |\n| Scatter graph | the relationship between two variables | positive, negative or no correlation; correlation is not cause |\n| Choropleth map | a value per area, shown by shading | darker usually = higher; hides differences inside each area |\n| Proportional symbol map | a value shown by the size of a symbol | compare symbol sizes using the key |\n\nA **climate graph** combines two: **bars** for monthly rainfall (mm) and a **line** for temperature (°C), with an axis on each side.\n\n**Reading values.** Use a ruler. Go up from the x-axis to the line or bar, then straight across to the y-axis. Check what one small square is worth before you read it.\n\n**The key calculations**\n\n    range = highest value − lowest value\n    mean = total of the values ÷ number of values\n    change = new value − old value\n    % change = (new − old) ÷ old × 100\n    rate of change = change ÷ time taken\n\n**Worked from the graph:** from 3 billion (1960) to 8 billion (2022), the change is +5 billion. As a percentage of the starting value:\n\n    {{(8-3)/3}} × 100 = 166.7%  (to 1 d.p.)\n\nSo the world's population increased by about 167% in 62 years — it rather more than doubled.\n\n**Choropleth vs proportional symbols.** A choropleth map might shade each of Singapore's planning areas by population density, darkest where it is highest. A proportional symbol map might put a circle on each MRT interchange, sized by daily passengers. Both need a key — read it first.\n\n**Be suspicious of the axes.** A y-axis that starts at, say, 2 billion instead of 0 makes the rise look far steeper than it is. Always check where the scale starts.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of world population milestones: 1 billion in 1804, 2 billion in 1927, 3 billion in 1960, 4 billion in 1974, 5 billion in 1987, 6 billion in 1999, 7 billion in 2011 and 8 billion in 2022, forming a J-shaped curve. The x-axis runs from 1800 to 2040 and the y-axis from 0 to 9 billion."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="35" x2="450" y2="35"/><line x1="60" y1="60" x2="450" y2="60"/><line x1="60" y1="85" x2="450" y2="85"/><line x1="60" y1="110" x2="450" y2="110"/><line x1="60" y1="135" x2="450" y2="135"/><line x1="60" y1="160" x2="450" y2="160"/><line x1="60" y1="185" x2="450" y2="185"/><line x1="60" y1="210" x2="450" y2="210"/><line x1="60" y1="235" x2="450" y2="235"/><line x1="141.25" y1="35" x2="141.25" y2="260"/><line x1="222.5" y1="35" x2="222.5" y2="260"/><line x1="303.75" y1="35" x2="303.75" y2="260"/><line x1="385" y1="35" x2="385" y2="260"/></g><g stroke="#1f2937" stroke-width="1.5"><line x1="60" y1="260" x2="450" y2="260"/><line x1="60" y1="260" x2="60" y2="30"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="54" y="264">0</text><text x="54" y="239">1</text><text x="54" y="214">2</text><text x="54" y="189">3</text><text x="54" y="164">4</text><text x="54" y="139">5</text><text x="54" y="114">6</text><text x="54" y="89">7</text><text x="54" y="64">8</text><text x="54" y="39">9</text></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="60" y="276">1800</text><text x="141.25" y="276">1850</text><text x="222.5" y="276">1900</text><text x="303.75" y="276">1950</text><text x="385" y="276">2000</text></g><text x="255" y="294" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">Year</text><text x="18" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155" transform="rotate(-90 18 147)">World population (billions)</text><polyline points="66.5,235 266.375,210 320,185 342.75,160 363.875,135 383.375,110 402.875,85 420.75,60" fill="none" stroke="#1d4ed8" stroke-width="2.5"/><g fill="#1d4ed8"><circle cx="66.5" cy="235" r="3.5"/><circle cx="266.375" cy="210" r="3.5"/><circle cx="320" cy="185" r="3.5"/><circle cx="342.75" cy="160" r="3.5"/><circle cx="363.875" cy="135" r="3.5"/><circle cx="383.375" cy="110" r="3.5"/><circle cx="402.875" cy="85" r="3.5"/><circle cx="420.75" cy="60" r="3.5"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="74" y="222">1 bn (1804)</text><text x="260" y="205" text-anchor="end">2 bn (1927)</text><text x="314" y="180" text-anchor="end">3 bn (1960)</text><text x="337" y="155" text-anchor="end">4 bn (1974)</text><text x="358" y="130" text-anchor="end">5 bn (1987)</text><text x="377" y="105" text-anchor="end">6 bn (1999)</text><text x="397" y="80" text-anchor="end">7 bn (2011)</text><text x="414" y="55" text-anchor="end">8 bn (2022)</text></g></svg>`,
      diagramCaption:
        "World population milestones (UN figures; 1804 is an estimate). Points are joined with straight lines, so values between milestones are only approximate. Notice the J-curve: each extra billion arrived faster.",
      workedExamples: [
        {
          title: "Reading a change and a rate from a graph",
          problem: "Use the graph. How many years did the world take to grow from 7 billion to 8 billion, and what was the average rate of growth per year?",
          steps: [
            "Read the two points: 7 billion in **2011**, 8 billion in **2022**.",
            "Time taken: 2022 − 2011 = **11 years**.",
            "Change: 8 − 7 = 1 billion = 1,000 million people.",
            "Rate of change = change ÷ time:",
            "    1,000 million ÷ 11 ≈ 91 million people per year",
          ],
          answer: "11 years; about 91 million people per year on average",
          yourTurn: {
            question: "Your turn: use the graph. How many years did the world take to grow from 1 billion (1804) to 2 billion (1927)?",
            answer: { type: "number", value: 123 },
            solution: "1927 − 1804 = 123 years — more than ten times as long as the jump from 7 to 8 billion.",
          },
        },
        {
          title: "Percentage change",
          problem: "Calculate the percentage increase in world population from 4 billion (1974) to 6 billion (1999).",
          steps: [
            "Change = new − old = 6 − 4 = 2 billion.",
            "Divide by the **old** (starting) value: 2 ÷ 4 = 0.5.",
            "Multiply by 100:",
            "    0.5 × 100 = 50%",
          ],
          answer: "A 50% increase",
          yourTurn: {
            question: "Your turn: calculate the percentage increase in world population from 5 billion (1987) to 8 billion (2022). Give your answer as a percentage.",
            answer: { type: "number", value: 60 },
            solution: "Change = 8 − 5 = 3 billion. 3 ÷ 5 = 0.6. 0.6 × 100 = 60%. (If you got 37.5%, you divided by the new value instead of the old one.)",
          },
        },
      ],
      keyPoints: [
        "Match the graph to the data: bars for categories, lines for change over time, pies for parts of a whole, scatter for relationships.",
        "Read values with a ruler, and check what each small square is worth.",
        "Range = highest − lowest; % change = (new − old) ÷ old × 100; rate = change ÷ time.",
        "Choropleth maps shade areas by value; proportional symbol maps size symbols by value — read the key first.",
        "Check where the axes start: a cut-off axis exaggerates change.",
      ],
      whyItWorks:
        "Why does the population line curve upwards instead of rising in a straight line? Because growth builds on itself. If a population grows by roughly the same percentage each year, a bigger population adds more people every year — like interest on savings. One per cent of 1 billion is 10 million; one per cent of 7 billion is 70 million. Percentage change works for the same reason: it measures change relative to the starting size, so you can fairly compare a village with a megacity.",
      strategies: ["Read the key first", "Use figures from the source", "Look for the anomaly", "Spot the misconception"],
      thinkDeeper:
        "Hana draws the same population data with a y-axis running from 6 to 8 billion. Her graph shows only 1999–2022 and looks like a steep cliff. Is her graph wrong? What would a reader wrongly conclude from it?",
    },
    // ------------------------------------------------------------------
    {
      id: "describing-patterns",
      heading: "Describing patterns & using data",
      discovery: {
        problem:
          "Two students describe the same bar chart of pedestrian counts.\n\nMarcus: 'It goes down.'\n\nSiti: 'Pedestrian numbers generally fall as distance from the MRT station increases, from 120 at Site 1 to 25 at Site 6. However, Site 4 is an anomaly: 88 people, more than Site 3 (70) even though it is further away.'\n\nBoth are 'right'. Why would Siti score 3 marks and Marcus 1 at most?",
        idea:
          "Siti used **TEA**: a **Trend** (the overall pattern), **Evidence** (figures with units, quoted from the resource) and an **Anomaly** (the odd one out). Examiners reward exactly these three things when you 'describe'.",
      },
      body:
        "**Describing a graph: TEA**\n\n- **T – Trend**: the overall pattern. Use words like *increases, decreases, fluctuates, peaks, levels off*.\n- **E – Evidence**: quote figures from the resource, with units — the start and end values, the highest and lowest, or the change.\n- **A – Anomaly**: point out anything that doesn't fit the trend, with its figure.\n\n| Site | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|\n| Distance from MRT (km) | 0.2 | 0.4 | 0.6 | 0.8 | 1.0 | 1.2 |\n| Pedestrians in 10 minutes | 120 | 95 | 70 | 88 | 40 | 25 |\n\n**Describing a distribution on a map**\n\nA **distribution** is how something is spread out. Useful words: **clustered** (grouped together), **linear** (in a line, often along a river, road or coast), **dispersed** (spread out, fairly evenly), **sparse** (very few), **dense** (many, close together). Locate the pattern using **CLOCC**:\n\n- **C**ontinents · **L**ines of latitude · **O**ceans · **C**ountries · **C**ompass directions\n\n**Primary and secondary data**\n\n| | Primary data | Secondary data |\n|---|---|---|\n| What it is | data you collect yourself | data someone else collected |\n| Examples | pedestrian counts, questionnaires, beach profiles, field sketches | Singapore Census 2020, UN population figures, newspaper articles, OneMap |\n| Strength | you know exactly how it was collected | often covers bigger areas or longer periods |\n| Weakness | time-consuming; small samples | may be out of date or collected for another purpose |\n\n**Command words: what the question really wants**\n\n| Command word | What to do |\n|---|---|\n| Identify / State | give a short fact, no explanation |\n| Describe | say what you see — patterns and figures (TEA, CLOCC) — **no reasons** |\n| Explain | give reasons: *because… this means that…* |\n| Suggest | use your knowledge to offer sensible reasons for something unfamiliar |\n| Compare | similarities and differences — use *whereas*, *higher than* |\n| Evaluate / To what extent | weigh up both sides, then make a justified judgement |\n\n> The commonest lost marks: explaining when the question says describe, and describing without a single figure.",
      diagram: `<svg viewBox="0 0 480 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top: three panels showing a clustered dot pattern, a linear pattern of dots along a river, and a dispersed pattern. Bottom: bar chart of pedestrians counted at six sites moving away from an MRT station: 120, 95, 70, 88, 40 and 25. Site 4 is highlighted as the anomaly, with labels for Trend, Evidence and Anomaly."><rect x="0" y="0" width="480" height="310" fill="#ffffff"/><g fill="#f8fafc" stroke="#334155"><rect x="15" y="12" width="140" height="100"/><rect x="170" y="12" width="140" height="100"/><rect x="325" y="12" width="140" height="100"/></g><g fill="#1f2937"><circle cx="70" cy="55" r="3"/><circle cx="78" cy="50" r="3"/><circle cx="64" cy="64" r="3"/><circle cx="82" cy="62" r="3"/><circle cx="72" cy="70" r="3"/><circle cx="88" cy="54" r="3"/><circle cx="60" cy="50" r="3"/><circle cx="76" cy="42" r="3"/><circle cx="90" cy="68" r="3"/><circle cx="66" cy="76" r="3"/><circle cx="84" cy="76" r="3"/><circle cx="56" cy="60" r="3"/></g><path d="M170 72 C 210 48, 250 96, 310 62" fill="none" stroke="#0284c7" stroke-width="3"/><g fill="#1f2937"><circle cx="180" cy="62" r="3"/><circle cx="196" cy="56" r="3"/><circle cx="212" cy="58" r="3"/><circle cx="228" cy="66" r="3"/><circle cx="244" cy="74" r="3"/><circle cx="260" cy="76" r="3"/><circle cx="276" cy="72" r="3"/><circle cx="292" cy="62" r="3"/><circle cx="204" cy="68" r="3"/><circle cx="252" cy="86" r="3"/></g><g fill="#1f2937"><circle cx="345" cy="30" r="3"/><circle cx="378" cy="32" r="3"/><circle cx="411" cy="28" r="3"/><circle cx="444" cy="31" r="3"/><circle cx="347" cy="61" r="3"/><circle cx="380" cy="59" r="3"/><circle cx="413" cy="63" r="3"/><circle cx="442" cy="60" r="3"/><circle cx="344" cy="92" r="3"/><circle cx="377" cy="90" r="3"/><circle cx="410" cy="94" r="3"/><circle cx="445" cy="91" r="3"/></g><g font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="85" y="128">Clustered</text><text x="240" y="128">Linear (along a river)</text><text x="395" y="128">Dispersed (spread out)</text></g><text x="60" y="152" font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937">Pedestrians counted at 6 sites (Year 8 fieldwork)</text><g stroke="#e5e7eb"><line x1="60" y1="238" x2="300" y2="238"/><line x1="60" y1="198" x2="300" y2="198"/></g><g fill="#c7d2fe" stroke="#334155"><rect x="67" y="182" width="26" height="96"/><rect x="107" y="202" width="26" height="76"/><rect x="147" y="222" width="26" height="56"/><rect x="227" y="246" width="26" height="32"/><rect x="267" y="258" width="26" height="20"/></g><rect x="187" y="207.6" width="26" height="70.4" fill="#fecaca" stroke="#334155"/><line x1="75" y1="190" x2="290" y2="262" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/><g stroke="#1f2937" stroke-width="1.5"><line x1="60" y1="278" x2="300" y2="278"/><line x1="60" y1="278" x2="60" y2="170"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="54" y="282">0</text><text x="54" y="242">50</text><text x="54" y="202">100</text></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="80" y="178">120</text><text x="120" y="198">95</text><text x="160" y="218">70</text><text x="200" y="203">88</text><text x="240" y="242">40</text><text x="280" y="254">25</text><text x="80" y="292">1</text><text x="120" y="292">2</text><text x="160" y="292">3</text><text x="200" y="292">4</text><text x="240" y="292">5</text><text x="280" y="292">6</text></g><text x="180" y="306" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Site (1 = nearest the MRT station)</text><text x="22" y="224" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155" transform="rotate(-90 22 224)">Pedestrians</text><line x1="306" y1="250" x2="216" y2="212" stroke="#b91c1c" stroke-width="1.5"/><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="310" y="176"><tspan font-weight="bold">T:</tspan> falls as distance</text><text x="310" y="190">from the MRT grows</text><text x="310" y="210"><tspan font-weight="bold">E:</tspan> 120 at Site 1,</text><text x="310" y="224">25 at Site 6</text><text x="310" y="248" fill="#b91c1c"><tspan font-weight="bold">A:</tspan> Site 4 (88) is</text><text x="310" y="262" fill="#b91c1c">higher than Site 3</text></g></svg>`,
      diagramCaption:
        "Top: three common distributions. Bottom: the pedestrian data from the table, drawn to scale (0.8 px per person). The dashed line shows the trend; Site 4 sits above it — the anomaly.",
      workedExamples: [
        {
          title: "Building a TEA answer, step by step",
          problem: "Describe the pattern shown by the pedestrian count data. [3 marks]",
          steps: [
            "**T – Trend.** Look at the whole chart first: the bars mostly get shorter to the right. Write: 'The number of pedestrians generally decreases as distance from the MRT station increases.'",
            "**E – Evidence.** Quote the first and last values with units: 'It falls from 120 people at Site 1 (0.2 km) to 25 at Site 6 (1.2 km), a fall of 95.'",
            "**A – Anomaly.** Find the bar that breaks the pattern: 'However, Site 4 is an anomaly, with 88 pedestrians — more than Site 3 (70), even though it is further away.'",
            "Check the command word: *describe* — so no reasons are needed. (If the question had said *suggest a reason for the anomaly*, you might say Site 4 is next to a bus stop or a hawker centre.)",
          ],
          answer:
            "The number of pedestrians generally decreases with distance from the MRT station, from 120 at Site 1 to 25 at Site 6. However, Site 4 is an anomaly: 88 pedestrians, more than Site 3 (70) although it is further away.",
          yourTurn: {
            question: "Your turn: calculate the range of the six pedestrian counts.",
            answer: { type: "number", value: 95 },
            solution: "Range = highest − lowest = 120 − 25 = 95 pedestrians.",
          },
        },
        {
          title: "Describing a distribution with CLOCC",
          problem: "Describe the global distribution of hot deserts. [4 marks]",
          steps: [
            "**Lines of latitude:** 'Most hot deserts lie between about 15° and 30° north and south of the Equator, close to the Tropics of Cancer and Capricorn.'",
            "**Continents and countries:** 'The largest, the Sahara, stretches across northern Africa. Others include the Arabian Desert in south-west Asia, the Thar Desert in India and Pakistan, and large deserts in central Australia.'",
            "**Oceans and compass:** 'Several lie along the west coasts of continents, beside an ocean — the Atacama in western South America beside the Pacific, and the Namib in south-west Africa beside the Atlantic.'",
            "**Anomaly / overall:** 'There are no hot deserts in Europe or close to the Equator itself.' Notice: no reasons — the question says *describe*.",
          ],
          answer:
            "Hot deserts are found in bands roughly 15–30° north and south of the Equator, near the Tropics. The largest is the Sahara in northern Africa; others include the Arabian, Thar and Australian deserts. Several, such as the Atacama (Pacific coast of South America) and the Namib (Atlantic coast of south-west Africa), lie on the west coasts of continents.",
          yourTurn: {
            question: "Your turn: name the line of latitude that runs through the Sahara Desert.",
            answer: { type: "text", accept: ["Tropic of Cancer", "the Tropic of Cancer", "Cancer", "23.5N", "23.5°N"] },
            solution: "The Sahara lies north of the Equator, roughly between 15°N and 30°N, so the Tropic of Cancer (about 23.5°N) runs right through it.",
          },
        },
      ],
      keyPoints: [
        "TEA for graphs: Trend, Evidence (figures with units), Anomaly.",
        "CLOCC for maps: Continents, Lines of latitude, Oceans, Countries, Compass directions.",
        "Distribution words: clustered, linear, dispersed, dense, sparse.",
        "Primary data you collect yourself; secondary data was collected by someone else.",
        "Describe = what and where (no reasons); explain = why; suggest = sensible reasons for something unfamiliar.",
      ],
      whyItWorks:
        "Mark schemes for 'describe' questions award separate marks for the general pattern, for supporting data and for exceptions — so TEA lines your answer up with the way it is marked. Figures make your claim checkable: 'it falls' could mean anything, but '120 to 25' proves it. Pointing out an anomaly shows you have looked at every value, not just the ends — and anomalies are often where the most interesting geography hides.",
      strategies: ["TEA (Trend, Evidence, Anomaly)", "CLOCC (Continents, Lines of latitude, Oceans, Countries, Compass)", "Use the command word", "Use figures from the source", "Look for the anomaly"],
      thinkDeeper:
        "Is the Site 4 anomaly a mistake in counting, or a real feature of the place? Describe two things you could do to find out — one using primary data and one using secondary data.",
    },
  ],
  learn: {
    flashcards: [
      { front: "Easting", back: "A vertical grid line, numbered along the bottom of the map; the numbers increase towards the east. Always given first." },
      { front: "Northing", back: "A horizontal grid line, numbered up the side of the map; the numbers increase towards the north. Always given second." },
      { front: "4-figure grid reference", back: "Names one grid square by the easting and northing of its bottom-left corner, e.g. 4621." },
      { front: "6-figure grid reference", back: "Names a point by adding tenths across and tenths up, e.g. 463217 — accurate to about 100 m on an OS map." },
      { front: "Along the corridor and up the stairs", back: "The rule for grid references: eastings (across) first, then northings (up)." },
      { front: "8-point compass", back: "N, NE, E, SE, S, SW, W, NW." },
      { front: "Latitude", back: "Distance north or south of the Equator in degrees, from 0° to 90°N or 90°S. Lines of latitude run east–west." },
      { front: "Longitude", back: "Distance east or west of the Prime Meridian in degrees, from 0° to 180°E or 180°W. Lines of longitude run pole to pole." },
      { front: "Equator", back: "0° latitude; divides the Northern and Southern Hemispheres." },
      { front: "Prime Meridian", back: "0° longitude, through Greenwich, London (agreed in 1884); divides the Eastern and Western Hemispheres." },
      { front: "Tropics of Cancer and Capricorn", back: "About 23.5°N and 23.5°S: the furthest north and south the midday Sun is ever directly overhead." },
      { front: "Singapore's latitude and longitude", back: "About 1°N, 104°E — just north of the Equator, in the Northern and Eastern Hemispheres." },
      { front: "1:50 000 scale", back: "1 cm on the map = 50,000 cm = 0.5 km on the ground (2 cm = 1 km)." },
      { front: "1:25 000 scale", back: "1 cm on the map = 25,000 cm = 0.25 km on the ground (4 cm = 1 km)." },
      { front: "Paper-edge method", back: "Measuring a winding route by marking each straight stretch along a paper edge, pivoting at bends, then measuring the strip and converting with the scale." },
      { front: "Choropleth map", back: "A map that shades areas according to a value — usually darker = higher." },
      { front: "Proportional symbol map", back: "A map where the size of each symbol is proportional to the value it shows." },
      { front: "TEA", back: "Trend, Evidence, Anomaly — the structure for describing a graph." },
      { front: "CLOCC", back: "Continents, Lines of latitude, Oceans, Countries, Compass — the checklist for describing a distribution on a map." },
      { front: "Primary vs secondary data", back: "Primary: collected by you (counts, surveys). Secondary: collected by someone else (census, UN data, maps)." },
    ],
    mustKnow: [
      "Can you give a 4-figure grid reference, eastings first, naming the square by its bottom-left corner?",
      "Can you give a 6-figure grid reference by estimating tenths across and tenths up?",
      "Can you use the 8-point compass to say in which direction one place is from another?",
      "Can you define latitude and longitude and say which lines run which way?",
      "Can you name and give the degrees of the Equator, both Tropics, the Arctic and Antarctic Circles and the Prime Meridian?",
      "Can you give Singapore's approximate position (about 1°N, 104°E) and name its hemispheres?",
      "Can you convert a map distance into km at 1:25 000 and 1:50 000?",
      "Can you measure a winding distance using the paper-edge method?",
      "Can you choose the right graph for a set of data and read values accurately?",
      "Can you calculate range, mean, change, percentage change and rate of change?",
      "Can you describe a graph using TEA, with figures and units?",
      "Can you describe a distribution on a map using CLOCC and words like clustered, linear and sparse?",
      "Can you explain the difference between primary and secondary data, with an example of each?",
      "Can you tell what a command word (describe, explain, suggest, compare, evaluate) is asking you to do?",
    ],
    misconceptions: [
      { wrong: "In a grid reference you give the northing first, because north is the most important direction.", right: "Eastings always come first: along the corridor, then up the stairs." },
      { wrong: "A 4-figure grid reference names the square by its top-right corner (or by the line nearest the feature).", right: "A square is always named by the lines at its bottom-left corner." },
      { wrong: "Lines of latitude run north to south.", right: "Lines of latitude run east–west around the globe; they measure how far north or south you are. Longitude lines run north–south." },
      { wrong: "The Prime Meridian and the Equator are the same kind of line.", right: "The Equator is 0° latitude (east–west line); the Prime Meridian is 0° longitude (north–south line through Greenwich)." },
      { wrong: "1:50 000 means 1 cm on the map is 50 km.", right: "It means 1 cm is 50,000 cm, which is 500 m or 0.5 km." },
      { wrong: "A 1:50 000 map is a larger scale than 1:25 000 because 50,000 is a bigger number.", right: "1:25 000 is the larger scale: features appear bigger and more detailed. The bigger the denominator, the smaller the scale." },
      { wrong: "A degree of longitude is always about 111 km, just like latitude.", right: "Only at the Equator. Longitude lines meet at the poles, so a degree of longitude shrinks to zero there." },
      { wrong: "Percentage change is the difference divided by the new value.", right: "Always divide the change by the original (old) value, then multiply by 100." },
      { wrong: "Describing a graph means explaining why it changes.", right: "Describe = what the pattern is, with figures. Only give reasons when asked to explain or suggest." },
    ],
    examMistakes: [
      "Writing the northing before the easting in a grid reference.",
      "Giving a 4-figure grid reference when the question asks for a 6-figure one (or the other way round).",
      "Forgetting N/S or E/W after a latitude or longitude, e.g. writing '1°, 104°'.",
      "Leaving units off a distance or graph reading — always write km, m, mm or °C.",
      "Measuring a winding road with a straight ruler line instead of the paper-edge method.",
      "Dividing by the new value instead of the old value in a percentage change.",
      "Describing a graph with no figures from the source — 'it goes up' rarely scores more than one mark.",
      "Explaining reasons when the command word is 'describe', wasting time and gaining no marks.",
      "Misreading the y-axis because they didn't check what each small square is worth.",
    ],
    mnemonics: [
      { topic: "Order of a grid reference", device: "Along the corridor, then up the stairs", explanation: "You must walk along the corridor (eastings) before you can climb the stairs (northings)." },
      { topic: "Compass points in order", device: "Naughty Elephants Squirt Water", explanation: "North, East, South, West — clockwise from the top." },
      { topic: "Latitude vs longitude", device: "LATitude lies FLAT; LONGitude lines are LONG", explanation: "Latitude lines lie flat (east–west) like the rungs of a ladder; longitude lines are long, running all the way from pole to pole." },
      { topic: "Describing a graph", device: "TEA", explanation: "Trend (overall pattern), Evidence (figures with units), Anomaly (the odd one out)." },
      { topic: "Describing a distribution on a map", device: "CLOCC", explanation: "Continents, Lines of latitude, Oceans, Countries, Compass directions — tick them off as you write." },
    ],
    realWorld: [
      { title: "OneMap and SVY21", detail: "The Singapore Land Authority's OneMap is Singapore's national map. Its SVY21 grid uses eastings and northings measured in metres — the same idea as a 6-figure grid reference, but even more precise.", emoji: "🗺️" },
      { title: "Satellite navigation", detail: "Your phone's GPS works out your latitude and longitude from satellite signals. Ride-hailing apps, ships entering the Port of Singapore and aircraft at Changi all rely on these coordinates.", emoji: "🛰️" },
      { title: "Singapore's time zone", detail: "At about 104°E, Singapore would naturally be about 7 hours ahead of Greenwich, but since 1982 it has used UTC+8 — longitude sets natural time, but governments choose clock time.", emoji: "🕗" },
      { title: "Ordnance Survey maps", detail: "Great Britain's national mapping agency publishes Explorer (1:25 000) and Landranger (1:50 000) maps with 1 km grid squares — the standard maps in UK geography exams.", emoji: "🥾" },
      { title: "The Prime Meridian at Greenwich", detail: "In 1884 an international conference in Washington, D.C. chose the meridian through the Royal Observatory, Greenwich, as 0° longitude. Visitors can stand with one foot in each hemisphere.", emoji: "🌐" },
      { title: "John Snow's cholera map", detail: "In 1854 the doctor John Snow mapped cholera deaths in Soho, London, as dots. They clustered around one water pump on Broad Street — a famous early use of a distribution map to solve a real problem.", emoji: "📍" },
    ],
    videos: [
      { title: "Grid references explained", channel: "Time for Geography (search)", url: "https://www.youtube.com/results?search_query=time+for+geography+grid+references" },
      { title: "Latitude and longitude", channel: "Time for Geography (search)", url: "https://www.youtube.com/results?search_query=time+for+geography+latitude+and+longitude" },
      { title: "Map scale and measuring distance", channel: "BBC Bitesize (search)", url: "https://www.youtube.com/results?search_query=bbc+bitesize+geography+map+scale+distance" },
      { title: "Choropleth and proportional symbol maps", channel: "Time for Geography (search)", url: "https://www.youtube.com/results?search_query=time+for+geography+choropleth+maps" },
      { title: "Describing graphs with TEA", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=geography+describe+graph+trend+evidence+anomaly" },
    ],
    formulas: [
      { name: "4-figure grid reference", formula: "Easting (left edge of square) then northing (bottom edge), e.g. 4621." },
      { name: "6-figure grid reference", formula: "Easting + tenths across, then northing + tenths up, e.g. 463217 (accurate to about 100 m on OS maps)." },
      { name: "Latitude", formula: "Degrees north or south of the Equator (0°–90°N/S)." },
      { name: "Longitude", formula: "Degrees east or west of the Prime Meridian (0°–180°E/W)." },
      { name: "Equator", formula: "0° latitude; the line dividing the Northern and Southern Hemispheres." },
      { name: "Prime Meridian", formula: "0° longitude, through Greenwich, London." },
      { name: "Tropics", formula: "Cancer about 23.5°N; Capricorn about 23.5°S." },
      { name: "Arctic and Antarctic Circles", formula: "About 66.5°N and 66.5°S (90° − 23.5°)." },
      { name: "Distance from latitude", formula: "1° of latitude ≈ 111 km.", note: "Works anywhere for latitude; for longitude only at the Equator." },
      { name: "Longitude and time", formula: "360° ÷ 24 hours = 15° of longitude per hour." },
      { name: "Real distance", formula: "Map distance × scale denominator; then ÷ 100,000 to turn cm into km." },
      { name: "1:50 000", formula: "1 cm = 0.5 km; 2 cm = 1 km." },
      { name: "1:25 000", formula: "1 cm = 0.25 km; 4 cm = 1 km." },
      { name: "Range", formula: "Highest value − lowest value." },
      { name: "Mean", formula: "Total of the values ÷ number of values." },
      { name: "Percentage change", formula: "{{(new - old)/old}} × 100" },
      { name: "Rate of change", formula: "Change ÷ time taken, e.g. people per year." },
      { name: "Pie chart angle", formula: "Percentage × 3.6 = angle in degrees (because 360° ÷ 100 = 3.6°)." },
      { name: "Choropleth map", formula: "A map that shades areas by value — darker usually means higher." },
      { name: "Primary data", formula: "Data you collect yourself, e.g. pedestrian counts, questionnaires." },
      { name: "Secondary data", formula: "Data collected by someone else, e.g. Singapore Census 2020, UN figures." },
    ],
  },
};
