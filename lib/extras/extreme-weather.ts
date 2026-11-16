import type { TopicExtras } from "../types.ts";

const STORM_SECTION = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a tropical storm: warm sea at the bottom, air spiralling in at the surface, rising in towering eyewall clouds either side of a calm central eye where air sinks, flowing out at the top, with smaller rain band clouds further out">
<rect x="0" y="0" width="480" height="320" fill="#ffffff"/>
<rect x="0" y="262" width="480" height="58" fill="#bae6fd"/>
<text x="240" y="300" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Warm sea, at least about 26.5 °C: evaporation supplies heat and moisture</text>
<path d="M150 262 L150 120 Q160 70 190 64 Q205 58 215 66 L222 262 Z" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
<path d="M258 262 L265 66 Q275 58 290 64 Q320 70 330 120 L330 262 Z" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
<path d="M70 262 L72 190 Q85 165 105 172 Q118 160 128 182 L130 262 Z" fill="#e5e7eb" stroke="#334155" stroke-width="1.2"/>
<path d="M350 262 L352 182 Q362 160 375 172 Q395 165 408 190 L410 262 Z" fill="#e5e7eb" stroke="#334155" stroke-width="1.2"/>
<path d="M20 262 L22 222 Q32 208 46 216 L50 262 Z" fill="#e5e7eb" stroke="#334155" stroke-width="1"/>
<path d="M430 262 L434 216 Q448 208 458 222 L460 262 Z" fill="#e5e7eb" stroke="#334155" stroke-width="1"/>
<line x1="60" y1="250" x2="140" y2="250" stroke="#1f2937" stroke-width="2"/>
<polygon points="140,250 132,245 132,255" fill="#1f2937"/>
<line x1="420" y1="250" x2="340" y2="250" stroke="#1f2937" stroke-width="2"/>
<polygon points="340,250 348,245 348,255" fill="#1f2937"/>
<line x1="186" y1="240" x2="186" y2="96" stroke="#b91c1c" stroke-width="2.5"/>
<polygon points="186,90 180,100 192,100" fill="#b91c1c"/>
<line x1="294" y1="240" x2="294" y2="96" stroke="#b91c1c" stroke-width="2.5"/>
<polygon points="294,90 288,100 300,100" fill="#b91c1c"/>
<line x1="200" y1="44" x2="90" y2="44" stroke="#1f2937" stroke-width="2"/>
<polygon points="84,44 92,39 92,49" fill="#1f2937"/>
<line x1="280" y1="44" x2="390" y2="44" stroke="#1f2937" stroke-width="2"/>
<polygon points="396,44 388,39 388,49" fill="#1f2937"/>
<line x1="240" y1="90" x2="240" y2="200" stroke="#0369a1" stroke-width="2" stroke-dasharray="5 4"/>
<polygon points="240,208 234,198 246,198" fill="#0369a1"/>
<text x="240" y="232" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Eye</text>
<text x="240" y="246" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">calm, sinking air</text>
<text x="186" y="80" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Eyewall</text>
<text x="240" y="20" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Air flows out at the top (about 12–15 km up)</text>
<text x="100" y="150" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Rain band</text>
<text x="380" y="150" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Rain band</text>
<text x="400" y="100" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#b91c1c">Rising air</text>
<text x="400" y="114" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#b91c1c">condenses,</text>
<text x="400" y="128" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#b91c1c">releasing heat</text>
<text x="70" y="278" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Air spirals in</text>
</svg>`;

const FRONTS = `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Key to weather-map front symbols: a cold front is a blue line with triangles, a warm front is a red line with semicircles, an occluded front is a purple line with alternating triangles and semicircles">
<rect x="0" y="0" width="440" height="240" fill="#ffffff"/>
<text x="20" y="28" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937">Weather-map front symbols</text>
<line x1="20" y1="70" x2="170" y2="70" stroke="#1d4ed8" stroke-width="3"/>
<polygon points="35,70 45,56 55,70" fill="#1d4ed8"/>
<polygon points="80,70 90,56 100,70" fill="#1d4ed8"/>
<polygon points="125,70 135,56 145,70" fill="#1d4ed8"/>
<text x="185" y="66" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">Cold front</text>
<text x="185" y="82" font-size="11" font-family="sans-serif" fill="#334155">short burst of heavy rain, then cooler and clearer</text>
<line x1="20" y1="130" x2="170" y2="130" stroke="#dc2626" stroke-width="3"/>
<path d="M35 130 A10 10 0 0 1 55 130 Z" fill="#dc2626"/>
<path d="M80 130 A10 10 0 0 1 100 130 Z" fill="#dc2626"/>
<path d="M125 130 A10 10 0 0 1 145 130 Z" fill="#dc2626"/>
<text x="185" y="126" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">Warm front</text>
<text x="185" y="142" font-size="11" font-family="sans-serif" fill="#334155">thickening cloud and long spells of steady rain</text>
<line x1="20" y1="190" x2="170" y2="190" stroke="#7c3aed" stroke-width="3"/>
<polygon points="30,190 40,176 50,190" fill="#7c3aed"/>
<path d="M65 190 A10 10 0 0 1 85 190 Z" fill="#7c3aed"/>
<polygon points="100,190 110,176 120,190" fill="#7c3aed"/>
<path d="M135 190 A10 10 0 0 1 155 190 Z" fill="#7c3aed"/>
<text x="185" y="186" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">Occluded front</text>
<text x="185" y="202" font-size="11" font-family="sans-serif" fill="#334155">cold front has caught up with the warm front</text>
<text x="20" y="228" font-size="11" font-family="sans-serif" fill="#334155">The symbols point the way the front is moving.</text>
</svg>`;

export const extras: TopicExtras = {
  hook:
    "Singapore is surrounded by seas warm enough to fuel a typhoon all year round — so why has a typhoon almost never come near it? The answer lies in the spin of the Earth.",
  didYouKnow: [
    "Hurricanes, typhoons and cyclones are the same kind of storm. Only the name changes with the ocean: Atlantic and north-east Pacific → hurricane, north-west Pacific → typhoon, Indian Ocean and South Pacific → cyclone.",
    "In December 2001 Typhoon Vamei formed only about 1.5° north of the equator, in the South China Sea east of Singapore, and crossed the coast of southern Johor. It is the closest to the equator a tropical storm has ever been recorded — normally the Coriolis effect is far too weak there to start the spin.",
    "Tropical storm names come from lists kept by the World Meteorological Organization. When a storm is especially deadly its name is retired and never used again — Katrina (2005) and Haiyan (2013) are two examples.",
    "The eye of a tropical storm can be so calm that people step outside thinking the storm is over — then the other side of the eyewall arrives with winds blowing from the opposite direction.",
    "Singapore has one of the highest rates of lightning activity in the world, which is why outdoor school activities stop when a lightning alert is issued.",
    "The Beaufort wind scale was devised in 1805 by Francis Beaufort, a Royal Navy officer, to describe wind by its effect on a sailing ship. Today the same 0–12 scale describes effects on land and sea instead.",
  ],
  activities: [
    {
      title: "Build a balcony weather station",
      emoji: "🌧️",
      materials: [
        "A clear plastic bottle with straight sides",
        "Scissors and a ruler (or a strip of paper marked in mm)",
        "A few pebbles or marbles",
        "A thermometer",
        "A ribbon on a stick and a compass app on a phone",
        "A notebook for a 7-day record",
      ],
      steps: [
        "Ask an adult to cut the top third off the bottle. Turn the top upside down and push it into the base as a funnel. Put pebbles in the bottom so it doesn't blow over.",
        "Pour in a little water to cover the pebbles, then tape the ruler to the side with 0 mm at the water level.",
        "Place the gauge in the open, away from walls, roofs and trees, where rain can fall straight in.",
        "Every day at the same time, read the rainfall in mm, then tip the water out back to the 0 mark. Read the thermometer in the shade (never in direct sun) and note which way the ribbon blows from.",
        "After 7 days, work out the total rainfall, the mean daily rainfall and the temperature range. Compare your figures with the Meteorological Service Singapore readings for the nearest station.",
      ],
      maths:
        "Professional stations follow the same rules you used: same time every day, rain gauge in the open, thermometer shaded (that's what a Stevenson screen does). Fair, consistent readings let you calculate totals, means and ranges and compare places fairly. If your numbers differ from the official station, think about why — Singapore's showers are often very local, so it can pour in one town and stay dry a few kilometres away.",
    },
    {
      title: "Storm surge in a tray",
      emoji: "🌊",
      materials: [
        "A large baking tray or plastic storage box",
        "Sand or soil to make a sloping 'coast' at one end",
        "Water",
        "A handheld fan or a drinking straw",
        "Small blocks or vegetable pieces for 'houses' and a ruler",
      ],
      steps: [
        "Pile sand at one end of the tray to make a gentle beach rising to a flat 'coastal plain'. Put a few 'houses' on the plain.",
        "Pour water into the other end until it reaches the bottom of the beach. Mark the water level on the beach with a stick.",
        "Point the fan (or blow through the straw) across the water towards the beach, steadily, for 30 seconds. Watch the water level at the coast.",
        "Measure how far up the beach the water reaches. Try a steeper beach, a stronger fan, and a 'sea wall' made from a ruler.",
        "Note which set-up floods the houses most easily, and which protects them.",
      ],
      maths:
        "Strong winds blowing towards the coast pile water up against it — that is a storm surge. In a real tropical storm the very low pressure also lets the sea surface bulge upwards. Surges do most damage on flat, low-lying coasts such as the Irrawaddy delta (Cyclone Nargis, 2008) or Tacloban in the Philippines (Typhoon Haiyan, 2013), which is why warnings and evacuation (preparation) and sea walls (protection) save lives.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Inside a tropical storm",
      svg: STORM_SECTION,
      caption:
        "Warm, moist air spirals in over the sea, rises in the eyewall, condenses and releases heat that drives the storm. Air flows out at the top and some sinks in the eye, which is why the eye is calm and often clear.",
    },
    {
      title: "Reading fronts on a weather map",
      svg: FRONTS,
      caption: "Fronts are the boundaries between warm and cold air masses. The symbols sit on the side the front is moving towards.",
    },
  ],
  history: {
    title: "Robert FitzRoy and the first weather forecasts",
    story:
      "Robert FitzRoy is best known as captain of HMS Beagle, the ship that carried Charles Darwin around the world in the 1830s. In 1854 he was put in charge of a new government department to collect weather data at sea — the beginning of today's Met Office. In 1859 a violent storm wrecked the ship Royal Charter off the coast of Wales and hundreds of people died. FitzRoy was convinced that warning could have saved them. Using the new electric telegraph, he gathered weather reports from stations around Britain, drew some of the first weather charts and began issuing storm warnings to ports. From 1861 *The Times* printed his daily predictions, which he called \"forecasts\" — a word he helped make popular. Many scientists mocked them, but his idea that observation plus quick communication saves lives is exactly how warnings work today.",
  },
};
