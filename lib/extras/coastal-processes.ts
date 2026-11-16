import type { TopicExtras } from "../types";

export const coastalProcessesExtras: TopicExtras = {
  hook:
    "A wave twice as tall does not carry twice the energy, it carries four times as much. So why do the same few kilometres of English coast lose metres of cliff every year, while a calm Singapore beach can quietly vanish sideways, grain by grain?",
  didYouKnow: [
    "The Holderness coast in East Yorkshire is one of the fastest-eroding coastlines in Europe, retreating by an average of about 2 metres a year. More than 20 villages there have been lost to the sea since Roman times.",
    "Wave energy grows with the square of wave height: a 3 m wave carries about 9 times the energy of a 1 m wave, and a 10 m storm wave about 100 times as much.",
    "On 4 February 2013 a buoy in the North Atlantic between Iceland and the UK measured a significant wave height of 19 m, the highest the World Meteorological Organization has recorded from a buoy.",
    "Spurn Head, a sand and shingle spit about 5.5 km long at the mouth of the Humber, has been built by longshore drift carrying material eroded from the Holderness cliffs further north.",
    "Singapore has grown by about a quarter through land reclamation, from roughly 580 km² in the 1960s to about 735 km² today, so much of its coastline is human-made and protected by seawalls and rock.",
  ],
  experiments: [
    {
      title: "Beach profile survey at East Coast Park",
      emoji: "📏",
      materials: [
        "Two broom handles or poles marked every 10 cm with tape",
        "A 10 m measuring tape or string knotted every 1 m",
        "A phone with a free clinometer (angle) app, or a protractor and string",
        "Notebook, pencil and a small bag for a sand sample",
      ],
      steps: [
        "Check the tide table and go at low tide with an adult. Pick a spot between two breakwaters at East Coast Park (or Changi / Pasir Ris).",
        "Start at the water's edge. Stand the two poles 5 m apart up the beach, and use the clinometer app (or the difference in pole heights) to record the slope angle between them.",
        "Move the poles up the beach 5 m at a time until you reach the grass or seawall. Note any changes: wet sand, ridges (berms), shells, seaweed lines.",
        "Look at the breakwaters either side: is sand piled up more on one side than the other? Sketch which side and note the wind direction that day.",
        "Draw your profile as a cross-section on graph paper. If you can, repeat it in the NE monsoon (December to March) and compare.",
      ],
      science:
        "You are measuring how waves shape a beach. Constructive waves (calm weather) push sand up the beach and build a steeper profile with ridges called berms; destructive waves (rougher monsoon seas) drag sand back out and flatten the beach. Sand piled up on one side of a breakwater or groyne shows the direction of longshore drift: it builds up on the side the drift comes from. This is real primary fieldwork, the same method geographers use on any beach.",
      safety:
        "Always go with an adult, stay out of the water, check tide times before you go and watch for incoming tide. Wear a hat and sunscreen and drink water. Do not climb on breakwater rocks: they are slippery.",
    },
    {
      title: "Wave tank in a baking tray",
      emoji: "🌊",
      materials: [
        "A large baking tray or plastic storage box",
        "Sand (enough to make a sloping beach at one end)",
        "Water",
        "A ruler or flat spatula to make waves",
        "A few small coloured beads or painted pebbles",
        "A stopwatch (phone) and a lolly stick",
      ],
      steps: [
        "Pile damp sand at one end of the tray to make a gently sloping beach, then gently pour in water at the other end until it is about 2–3 cm deep.",
        "Constructive waves: push the ruler slowly and gently about 6–8 times a minute for 2 minutes. Watch where the sand goes and sketch the beach shape.",
        "Rebuild the beach. Destructive waves: push the ruler hard and fast about 12–14 times a minute for 2 minutes. Sketch the beach again and compare.",
        "Rebuild the beach and place a bead on the sand. Hold the ruler at an angle (about 45°) so the waves hit the beach diagonally. Track the bead along the beach after 10, 20 and 30 waves.",
        "Push a lolly stick into the sand at right angles to the beach as a 'groyne'. Repeat the angled waves and see where the sand piles up.",
      ],
      science:
        "Slow, gentle waves have strong swash and weak backwash, so they carry sand up the beach and build it up. Fast, powerful waves have strong backwash, and each one is met by the next wave, so sand is dragged back into the 'sea' and the beach is flattened. Angled waves show longshore drift: the bead zig-zags along the beach because the swash follows the angle of the waves but the backwash runs straight down the slope. The lolly-stick groyne traps sand on its up-drift side, just like groynes on a real beach.",
      safety: "Do this outside or on a towel, and wipe up spills straight away so nobody slips.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Wave energy grows with the square of height",
      svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart: relative wave energy is 0.25 for a 0.5 metre wave, 1 for 1 metre, 4 for 2 metres, 9 for 3 metres and 16 for 4 metres">
  <rect x="0" y="0" width="360" height="200" fill="#ffffff"/>
  <text x="180" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">Energy compared with a 1 m wave</text>
  <line x1="40" y1="165" x2="345" y2="165" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="55" y="163" width="40" height="2" fill="#7dd3fc"/>
  <text x="75" y="157" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">×0.25</text>
  <rect x="113" y="157" width="40" height="8" fill="#38bdf8"/>
  <text x="133" y="151" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">×1</text>
  <rect x="171" y="133" width="40" height="32" fill="#0ea5e9"/>
  <text x="191" y="127" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">×4</text>
  <rect x="229" y="93" width="40" height="72" fill="#0284c7"/>
  <text x="249" y="87" text-anchor="middle" font-size="12" font-weight="bold" fill="#075985">×9</text>
  <rect x="287" y="37" width="40" height="128" fill="#be123c"/>
  <text x="307" y="31" text-anchor="middle" font-size="12" font-weight="bold" fill="#9f1239">×16</text>
  <text x="75" y="181" text-anchor="middle" font-size="12" fill="#334155">0.5 m</text>
  <text x="133" y="181" text-anchor="middle" font-size="12" fill="#334155">1 m</text>
  <text x="191" y="181" text-anchor="middle" font-size="12" fill="#334155">2 m</text>
  <text x="249" y="181" text-anchor="middle" font-size="12" fill="#334155">3 m</text>
  <text x="307" y="181" text-anchor="middle" font-size="12" fill="#334155">4 m</text>
  <text x="192" y="197" text-anchor="middle" font-size="11" fill="#64748b">wave height</text>
  <text x="14" y="110" font-size="11" fill="#64748b" transform="rotate(-90 14 110)" text-anchor="middle">energy</text>
</svg>`,
      caption:
        "Wave energy is proportional to height squared (E = ρgH²/8). Doubling the height gives four times the energy, which is why a few storm days can do more erosion than months of calm weather.",
    },
    {
      title: "How a beach changes between calm and stormy seasons",
      svg: `<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two beach cross-sections. Calm season: constructive waves build a steep beach with a berm. Stormy season: destructive waves flatten the beach and move sand offshore into a sand bar">
  <rect x="0" y="0" width="360" height="210" fill="#ffffff"/>
  <text x="8" y="16" font-size="12" font-weight="bold" fill="#047857">Calm season: constructive waves</text>
  <rect x="0" y="55" width="200" height="40" fill="#bae6fd"/>
  <polygon points="0,95 150,90 250,40 290,36 360,34 360,100 0,100" fill="#fcd34d" stroke="#b45309"/>
  <text x="262" y="30" font-size="11" fill="#92400e">berm</text>
  <line x1="150" y1="70" x2="210" y2="48" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/>
  <polygon points="218,45 204,43 210,56" fill="#0284c7"/>
  <line x1="196" y1="66" x2="166" y2="77" stroke="#e11d48" stroke-width="2"/>
  <polygon points="160,79 168,72 170,80" fill="#e11d48"/>
  <text x="8" y="50" font-size="11" fill="#0369a1">strong swash, weak backwash</text>
  <text x="8" y="88" font-size="11" fill="#075985">sea</text>
  <text x="8" y="121" font-size="12" font-weight="bold" fill="#be123c">Stormy season: destructive waves</text>
  <rect x="0" y="150" width="250" height="45" fill="#bae6fd"/>
  <polygon points="0,195 50,190 75,182 100,190 160,180 300,150 360,146 360,205 0,205" fill="#fcd34d" stroke="#b45309"/>
  <text x="60" y="176" font-size="11" fill="#92400e">sand bar</text>
  <line x1="170" y1="168" x2="196" y2="159" stroke="#0284c7" stroke-width="2"/>
  <polygon points="202,157 192,155 196,163" fill="#0284c7"/>
  <line x1="236" y1="152" x2="140" y2="178" stroke="#e11d48" stroke-width="6" stroke-linecap="round"/>
  <polygon points="130,181 144,170 148,184" fill="#e11d48"/>
  <text x="8" y="142" font-size="11" fill="#be123c">weak swash, strong backwash</text>
  <text x="268" y="140" font-size="11" fill="#92400e">flatter beach</text>
</svg>`,
      caption:
        "In calm weather constructive waves push sand up the beach and build a steep profile with a berm (a ridge at the top of the swash). Storm waves drag sand offshore into a sand bar, leaving a flatter beach. When calm returns, the sand is slowly carried back.",
    },
  ],
  interactives: ["coastal-processes:WaveMaker", "coastal-processes:LongshoreDriftLab"],
};
