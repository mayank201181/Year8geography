import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Antarctica is buried under ice up to about 4.8 km thick — yet geographers call it the largest desert on Earth. How can the iciest place in the world also be one of the driest?",

  didYouKnow: [
    "The lowest natural air temperature ever measured at ground level was **−89.2 °C**, at Russia's Vostok Station in Antarctica on 21 July 1983.",
    "The interior of Antarctica gets less than about 50 mm of precipitation a year — drier than much of the Sahara. Very cold air simply can't hold much water vapour.",
    "The Sahara covers about 9 million km² — roughly the size of China or the USA, and more than 12,000 times the size of Singapore.",
    "Parts of Chile's Atacama Desert receive on average only a few millimetres of rain a year. Its dry, rocky landscape is so Mars-like that NASA has tested rover equipment there.",
    "Mount Kinabalu in Sabah is only about 6° north of the equator, but its summit (4,095 m) is roughly 26 °C colder than the coast. Climbers can wake to frost on the summit trail.",
    "On the summit of Mount Everest (8,849 m) the air pressure is only about a third of the pressure at sea level, so each breath holds about a third as much oxygen.",
  ],

  activities: [
    {
      title: "Build your own climate graph",
      emoji: "📊",
      materials: [
        "A thermometer (a cheap digital one is fine)",
        "A clear plastic bottle, scissors and a ruler (to make a rain gauge)",
        "A notebook or spreadsheet",
        "Graph paper or a laptop",
      ],
      steps: [
        "Cut the top third off the bottle and turn it upside down into the bottom part to make a funnel. Tape a ruler to the side with 0 mm at the level of a flat base (add a little sand or pebbles so it doesn't blow over, then top up with water to the 0 line).",
        "Put the gauge in an open spot away from roofs and trees — a corridor ledge or garden. Keep the thermometer in the shade, about 1.2 m off the ground.",
        "Every day at the same time for two weeks, record the temperature and the rain in mm, then tip the extra water out back down to the 0 line.",
        "Draw a climate-style graph: rainfall as blue bars (left axis), temperature as a red line (right axis), days along the bottom.",
        "Work out your total rainfall and your temperature range. Compare them with a hot desert: how many days would it take your balcony to beat a desert's whole year of rain?",
      ],
      maths: "This is exactly how real climate graphs are built — but a real one averages each month over about 30 years. In Singapore you'll probably find a small temperature range but heavy, sudden rain from afternoon thunderstorms or Sumatra squalls. A hot desert is the opposite: under 250 mm of rain in a whole YEAR but a huge swing between day and night, because there are no clouds to hold the heat in after sunset.",
    },
    {
      title: "The albedo ice-cube race",
      emoji: "🧊",
      materials: [
        "Two ice cubes of the same size",
        "A sheet of white paper and a sheet of black paper (or dark cloth)",
        "Two saucers",
        "A sunny window ledge and a timer",
      ],
      steps: [
        "Lay the white paper and the black paper side by side in the same sunny spot.",
        "Put a saucer on each and an ice cube on each saucer at the same moment. Start the timer.",
        "Check every 5 minutes. Note which cube melts first and how much longer the other takes.",
        "Predict first, then try a third surface (foil, a green leaf, a grey cloth). Rank the surfaces from most to least reflective.",
      ],
      maths: "White surfaces reflect most sunlight (a high **albedo**); dark ones absorb it and warm up. Fresh snow reflects roughly 80–90% of sunlight, which is one reason polar regions stay so cold. When sea ice melts, the dark ocean beneath absorbs far more heat, which melts more ice — a positive feedback that helps explain why the Arctic is warming faster than the world average.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Why deserts and rainforests are where they are",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section from 30 degrees north to 30 degrees south showing air rising at the equator, forming rain clouds over rainforest, then flowing towards the tropics and sinking at about 30 degrees north and south over hot deserts with clear skies and high pressure"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><rect x="20" y="230" width="440" height="40" fill="#bbf7d0" stroke="#334155"/><rect x="20" y="230" width="90" height="40" fill="#fde68a" stroke="#334155"/><rect x="370" y="230" width="90" height="40" fill="#fde68a" stroke="#334155"/><rect x="195" y="230" width="90" height="40" fill="#86efac" stroke="#334155"/><text x="65" y="254" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Hot desert</text><text x="415" y="254" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Hot desert</text><text x="240" y="254" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Rainforest</text><text x="65" y="288" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">about 30° N</text><text x="240" y="288" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Equator 0°</text><text x="415" y="288" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">about 30° S</text><path d="M240 220 L240 70" stroke="#dc2626" stroke-width="3" fill="none"/><path d="M232 82 L240 66 L248 82 Z" fill="#dc2626"/><path d="M230 60 L80 60" stroke="#334155" stroke-width="2.5" fill="none"/><path d="M92 53 L78 60 L92 67 Z" fill="#334155"/><path d="M250 60 L400 60" stroke="#334155" stroke-width="2.5" fill="none"/><path d="M388 53 L402 60 L388 67 Z" fill="#334155"/><path d="M65 70 L65 215" stroke="#2563eb" stroke-width="3" fill="none"/><path d="M57 203 L65 219 L73 203 Z" fill="#2563eb"/><path d="M415 70 L415 215" stroke="#2563eb" stroke-width="3" fill="none"/><path d="M407 203 L415 219 L423 203 Z" fill="#2563eb"/><path d="M80 225 L225 225" stroke="#64748b" stroke-width="2" stroke-dasharray="6 4" fill="none"/><path d="M213 219 L227 225 L213 231 Z" fill="#64748b"/><path d="M400 225 L255 225" stroke="#64748b" stroke-width="2" stroke-dasharray="6 4" fill="none"/><path d="M267 219 L253 225 L267 231 Z" fill="#64748b"/><ellipse cx="240" cy="120" rx="40" ry="16" fill="#cbd5e1" stroke="#64748b"/><ellipse cx="258" cy="106" rx="26" ry="12" fill="#cbd5e1" stroke="#64748b"/><line x1="225" y1="140" x2="221" y2="160" stroke="#2563eb" stroke-width="2"/><line x1="240" y1="140" x2="236" y2="160" stroke="#2563eb" stroke-width="2"/><line x1="255" y1="140" x2="251" y2="160" stroke="#2563eb" stroke-width="2"/><text x="300" y="150" font-size="11" font-family="sans-serif" fill="#1f2937">Rising air cools:</text><text x="300" y="164" font-size="11" font-family="sans-serif" fill="#1f2937">clouds and heavy rain</text><text x="300" y="178" font-size="11" font-family="sans-serif" fill="#1f2937">(LOW pressure)</text><text x="80" y="110" font-size="11" font-family="sans-serif" fill="#1f2937">Sinking air warms:</text><text x="80" y="124" font-size="11" font-family="sans-serif" fill="#1f2937">clear skies, no rain</text><text x="80" y="138" font-size="11" font-family="sans-serif" fill="#1f2937">(HIGH pressure)</text><text x="240" y="40" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Hadley cells (simplified)</text><text x="240" y="216" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#475569">trade winds</text></svg>`,
      caption: "The sun heats the ground strongly at the equator, so air rises, cools and drops heavy rain on the rainforest. High up, the air spreads towards the tropics, then sinks at about 30° N and S. Sinking air warms and dries out, so clouds can't form — which is why the Sahara, the Arabian Desert and the Kalahari sit in these belts.",
    },
    {
      title: "Relief rainfall and the rain shadow",
      svg: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a mountain. Moist wind from the sea on the left rises up the windward slope, cools and forms clouds and rain. Dry air sinks down the leeward slope on the right, warming, creating a dry rain shadow"><rect x="0" y="0" width="480" height="280" fill="#ffffff"/><rect x="0" y="230" width="110" height="50" fill="#bae6fd"/><polygon points="90,240 250,60 420,240" fill="#d6d3d1" stroke="#334155" stroke-width="1.5"/><polygon points="226,87 250,60 276,90" fill="#e0f2fe" stroke="#94a3b8"/><rect x="90" y="240" width="390" height="40" fill="#bbf7d0"/><rect x="330" y="240" width="150" height="40" fill="#fde68a"/><text x="55" y="262" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Sea</text><path d="M20 200 L120 200 L170 140 L215 95" stroke="#2563eb" stroke-width="3" fill="none"/><path d="M204 96 L218 92 L214 106 Z" fill="#2563eb"/><path d="M285 95 L340 160 L440 205" stroke="#dc2626" stroke-width="3" fill="none"/><path d="M428 196 L443 207 L428 213 Z" fill="#dc2626"/><ellipse cx="170" cy="115" rx="40" ry="16" fill="#cbd5e1" stroke="#64748b"/><ellipse cx="195" cy="100" rx="28" ry="12" fill="#cbd5e1" stroke="#64748b"/><line x1="152" y1="134" x2="148" y2="156" stroke="#2563eb" stroke-width="2"/><line x1="166" y1="134" x2="162" y2="156" stroke="#2563eb" stroke-width="2"/><line x1="180" y1="134" x2="176" y2="156" stroke="#2563eb" stroke-width="2"/><text x="20" y="190" font-size="11" font-family="sans-serif" fill="#1f2937">Moist wind</text><text x="20" y="40" font-size="11" font-family="sans-serif" fill="#1f2937">1. Air forced to rise</text><text x="20" y="55" font-size="11" font-family="sans-serif" fill="#1f2937">2. Cools, condenses: cloud</text><text x="20" y="70" font-size="11" font-family="sans-serif" fill="#1f2937">3. Relief rainfall</text><text x="320" y="40" font-size="11" font-family="sans-serif" fill="#1f2937">4. Dry air sinks</text><text x="320" y="55" font-size="11" font-family="sans-serif" fill="#1f2937">and warms</text><text x="150" y="232" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Windward (wet)</text><text x="405" y="264" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Rain shadow (dry)</text><text x="370" y="232" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Leeward</text></svg>`,
      caption: "Moist air is forced up the windward slope, cools by about 6.5 °C per 1000 m and its water vapour condenses into cloud and rain. Having dropped its moisture, the air sinks down the leeward side and warms, so it rarely rains there. The Himalayas do this to the Indian monsoon, leaving the Tibetan Plateau much drier than north-east India.",
    },
  ],

  history: {
    title: "Humboldt climbs Chimborazo",
    story: "In June 1802 the Prussian scientist Alexander von Humboldt, with the French botanist Aimé Bonpland, climbed Chimborazo, a volcano in the Andes of Ecuador. Short of breath, with bleeding gums and frozen hands, they reached about 5,900 m — higher than any European was known to have climbed at the time — before a deep gully forced them back. All the way up Humboldt measured temperature and air pressure and noted which plants grew where. He saw that climbing a tropical mountain was like travelling from the equator towards the poles: rainforest gave way to farmland, then grassland, then bare rock and snow. In 1807 he published a famous drawing of the mountain, with plant names written at the heights where they grew. It was one of the first diagrams to show that climate changes with altitude.",
  },
};
