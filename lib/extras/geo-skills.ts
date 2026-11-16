import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Singapore sits only about 140 km north of the Equator. With just two numbers (about 1° N, 104° E) you can point to it on any globe in the world. How do two numbers do that?",

  didYouKnow: [
    "The Prime Meridian runs through Greenwich in London because 25 countries agreed it at the International Meridian Conference in Washington DC in 1884. The 0° line used by GPS today actually lies about 100 metres east of the famous brass strip at Greenwich.",
    "One degree of latitude is always about 111 km, but one degree of longitude shrinks as you head towards the poles: about 111 km at the Equator, about 56 km at 60° N, and zero at the poles where all the meridians meet.",
    "Great Britain's Ordnance Survey began in 1791. It is called 'Ordnance' because it started as part of the Board of Ordnance, which looked after the army's weapons and equipment.",
    "Singapore's highest natural point, Bukit Timah Hill, is only about 163 m above sea level — on a 1:25 000 map with 5 m contours that is about 32 contour lines from the coast to the summit.",
    "A 6-figure grid reference on a UK Ordnance Survey map pinpoints a spot to within 100 m, and an 8-figure reference to within 10 m — mountain rescue teams ask lost walkers for exactly these numbers.",
  ],

  activities: [
    {
      title: "Grid your own neighbourhood",
      emoji: "🗺️",
      materials: ["A printout or tracing of your estate from OneMap or another online map", "Ruler and pencil", "Coloured pens", "A family member to quiz"],
      steps: [
        "Print or trace a map of the area around your home (your HDB block, the nearest MRT station, a park, a school, a hawker centre).",
        "Rule a grid of 2 cm squares over it. Number the vertical lines along the bottom (eastings) starting at 10, and the horizontal lines up the side (northings) starting at 30.",
        "Draw a simple symbol for each feature and add a key.",
        "Write 4-figure grid references for five places, then 6-figure references for three small features (a bus stop, a playground, a letterbox).",
        "Swap: give a family member a grid reference and see if they can find the feature. Do they go along the corridor before up the stairs?",
      ],
      maths: "A grid reference is a coordinate system for maps: eastings first, then northings. A 4-figure reference names a whole square; splitting the square into tenths gives a 6-figure reference ten times more precise in each direction. This is exactly how Ordnance Survey maps — and the coordinates on your phone — locate places.",
    },
    {
      title: "Pace it out: straight-line vs real distance",
      emoji: "👣",
      materials: ["Measuring tape (at least 10 m) or a 1 m ruler", "Notebook", "An online map with a measuring tool (e.g. OneMap)", "Squared paper"],
      steps: [
        "Measure 10 m along a void deck or corridor. Walk it normally and count your steps. Your pace length = 10 m ÷ number of steps.",
        "Walk from your block to the nearest bus stop or MRT exit, counting steps. Multiply by your pace length to get the walking distance in metres.",
        "On the online map, measure the straight-line distance between the same two points.",
        "Work out how much longer the real route is: walking distance ÷ straight-line distance.",
        "Draw your route on squared paper at a scale of 1:2000 (1 cm = 20 m) and add a line scale.",
      ],
      maths: "Map scale links map distance to real distance. Straight-line ('as the crow flies') distance is always the shortest; real routes wind around buildings and roads, so they are longer. Geographers measure winding distances on maps with a piece of string or by adding up short straight sections — the same idea you just used on foot.",
    },
  ],

  bonusDiagrams: [
    {
      title: "The globe as a grid: key lines of latitude and longitude",
      svg: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangular world grid showing the Equator, the tropics, the polar circles and the Prime Meridian, with Singapore, London and Sydney plotted">
<rect x="0" y="0" width="480" height="280" fill="#ffffff"/>
<rect x="20" y="20" width="440" height="220" fill="#bae6fd" stroke="#334155"/>
<line x1="20" y1="38.7" x2="460" y2="38.7" stroke="#334155" stroke-dasharray="5 4"/>
<line x1="20" y1="101.3" x2="460" y2="101.3" stroke="#b45309" stroke-dasharray="5 4"/>
<line x1="20" y1="130" x2="460" y2="130" stroke="#dc2626" stroke-width="2"/>
<line x1="20" y1="158.7" x2="460" y2="158.7" stroke="#b45309" stroke-dasharray="5 4"/>
<line x1="20" y1="221.3" x2="460" y2="221.3" stroke="#334155" stroke-dasharray="5 4"/>
<line x1="240" y1="20" x2="240" y2="240" stroke="#15803d" stroke-width="2"/>
<text x="24" y="35" font-size="11" font-family="sans-serif" fill="#1f2937">Arctic Circle 66.5° N</text>
<text x="24" y="98" font-size="11" font-family="sans-serif" fill="#1f2937">Tropic of Cancer 23.5° N</text>
<text x="24" y="126" font-size="11" font-family="sans-serif" fill="#dc2626">Equator 0°</text>
<text x="24" y="155" font-size="11" font-family="sans-serif" fill="#1f2937">Tropic of Capricorn 23.5° S</text>
<text x="24" y="236" font-size="11" font-family="sans-serif" fill="#1f2937">Antarctic Circle 66.5° S</text>
<text x="244" y="256" font-size="11" font-family="sans-serif" fill="#15803d">Prime Meridian 0°</text>
<text x="20" y="256" font-size="11" font-family="sans-serif" fill="#334155">180° W</text>
<text x="460" y="256" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">180° E</text>
<circle cx="240" cy="67" r="4" fill="#1f2937"/>
<text x="246" y="64" font-size="11" font-family="sans-serif" fill="#1f2937">London ≈ 51° N, 0°</text>
<circle cx="367" cy="128" r="4.5" fill="#dc2626" stroke="#1f2937"/>
<text x="455" y="147" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Singapore ≈ 1° N, 104° E</text>
<circle cx="425" cy="172" r="4" fill="#1f2937"/>
<text x="420" y="186" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Sydney ≈ 34° S, 151° E</text>
<text x="240" y="272" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">West of 0° = Western Hemisphere · East of 0° = Eastern Hemisphere</text>
</svg>`,
      caption: "Latitude lines run across (measured north or south of the Equator); longitude lines run pole to pole (measured east or west of the Prime Meridian). Singapore is just above the Equator, deep in the Eastern Hemisphere. Positions are plotted to scale on this simple rectangular grid.",
    },
    {
      title: "Building a 6-figure grid reference",
      svg: `<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="One grid square from easting 46 to 47 and northing 20 to 21 split into tenths, with a church 3 tenths across and 7 tenths up, giving grid reference 463207">
<rect x="0" y="0" width="360" height="300" fill="#ffffff"/>
<rect x="60" y="30" width="200" height="200" fill="#ecfdf5" stroke="#334155" stroke-width="2"/>
<g stroke="#94a3b8" stroke-width="1">
<line x1="80" y1="30" x2="80" y2="230"/><line x1="100" y1="30" x2="100" y2="230"/><line x1="120" y1="30" x2="120" y2="230"/><line x1="140" y1="30" x2="140" y2="230"/><line x1="160" y1="30" x2="160" y2="230"/><line x1="180" y1="30" x2="180" y2="230"/><line x1="200" y1="30" x2="200" y2="230"/><line x1="220" y1="30" x2="220" y2="230"/><line x1="240" y1="30" x2="240" y2="230"/>
<line x1="60" y1="50" x2="260" y2="50"/><line x1="60" y1="70" x2="260" y2="70"/><line x1="60" y1="90" x2="260" y2="90"/><line x1="60" y1="110" x2="260" y2="110"/><line x1="60" y1="130" x2="260" y2="130"/><line x1="60" y1="150" x2="260" y2="150"/><line x1="60" y1="170" x2="260" y2="170"/><line x1="60" y1="190" x2="260" y2="190"/><line x1="60" y1="210" x2="260" y2="210"/>
</g>
<line x1="120" y1="90" x2="120" y2="230" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/>
<line x1="60" y1="90" x2="120" y2="90" stroke="#2563eb" stroke-width="2" stroke-dasharray="5 3"/>
<circle cx="120" cy="90" r="7" fill="#1f2937"/>
<line x1="120" y1="72" x2="120" y2="83" stroke="#1f2937" stroke-width="2"/>
<line x1="115" y1="77" x2="125" y2="77" stroke="#1f2937" stroke-width="2"/>
<text x="60" y="248" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">46</text>
<text x="260" y="248" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">47</text>
<text x="120" y="248" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#dc2626">3 tenths</text>
<text x="52" y="234" font-size="13" text-anchor="end" font-family="sans-serif" fill="#1f2937">20</text>
<text x="52" y="34" font-size="13" text-anchor="end" font-family="sans-serif" fill="#1f2937">21</text>
<text x="52" y="94" font-size="12" text-anchor="end" font-family="sans-serif" fill="#2563eb">7 tenths</text>
<text x="272" y="80" font-size="13" font-family="sans-serif" fill="#1f2937">Church</text>
<text x="272" y="110" font-size="12" font-family="sans-serif" fill="#1f2937">Along: 46 + 3</text>
<text x="272" y="128" font-size="12" font-family="sans-serif" fill="#1f2937">→ 463</text>
<text x="272" y="152" font-size="12" font-family="sans-serif" fill="#1f2937">Up: 20 + 7</text>
<text x="272" y="170" font-size="12" font-family="sans-serif" fill="#1f2937">→ 207</text>
<text x="272" y="200" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937">463207</text>
<text x="180" y="280" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#334155">4-figure square 4620 · 6-figure point 463207</text>
</svg>`,
      caption: "Imagine the 4-figure square split into a 10 × 10 grid. Count tenths across from the easting (3), then tenths up from the northing (7). Easting digits first, northing digits second: 46**3** 20**7**.",
    },
  ],

  history: {
    title: "Measuring India — and finding the world's highest mountain",
    story: "In 1802 the surveyor William Lambton began the Great Trigonometrical Survey of India, measuring the land with giant brass instruments and chains of triangles stretching from the southern tip of India towards the Himalayas. The work took decades. George Everest, who led it from 1823, insisted on extreme accuracy. Around 1852, the Bengali mathematician Radhanath Sikdar, working through the survey's measurements of distant peaks, calculated that a mountain known simply as 'Peak XV' was the highest on Earth. Its height was announced in 1856 as 29,002 feet (about 8,840 m) — remarkably close to today's figure of 8,848.86 m. In 1865 it was named Mount Everest, even though Everest himself had objected and local names such as Chomolungma (Tibetan) already existed. Every map you read today relies on the same idea: careful measurement, a grid and a scale.",
  },
};
