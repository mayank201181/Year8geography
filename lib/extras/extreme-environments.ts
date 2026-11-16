import type { TopicExtras } from "../types";

export const extremeEnvironmentsExtras: TopicExtras = {
  hook:
    "Lhasa in Tibet and Cairo in Egypt sit on almost exactly the same line of latitude, 30°N — yet Cairo bakes at 28°C in July while Lhasa freezes in winter. And Antarctica, the iciest place on Earth, is officially a desert. What really makes a place 'extreme'?",
  didYouKnow: [
    "The lowest air temperature ever measured at a weather station was −89.2°C, at Russia's Vostok Station in Antarctica on 21 July 1983 — cold enough to freeze exhaled breath into ice crystals instantly.",
    "Arica, in Chile's Atacama Desert, averages only about 1 mm of rain a year. NASA has tested Mars rovers in the Atacama because its dry soil is so similar to the surface of Mars.",
    "Antarctica's ice sheet is on average about 2 km thick and holds roughly 70% of all the fresh water on Earth — yet inland it gets less than 50 mm of precipitation a year, less than the Sahara gets in many places.",
    "On the summit of Mount Everest (8,849 m) the air pressure is only about one-third of that at sea level, so each breath carries about a third of the oxygen — and water boils at only about 70°C, too cool to cook rice properly.",
    "In 2005 satellites measured a ground-surface temperature of 70.7°C in Iran's Lut Desert — hot enough to cook an egg on the sand — yet clear desert nights can drop by 20–30°C.",
  ],
  experiments: [
    {
      title: "Make your own climate graph: a two-week weather diary",
      emoji: "🌧️",
      materials: [
        "A clear plastic bottle with straight sides, scissors and a ruler",
        "Sticky tape and a few pebbles",
        "A thermometer (or a weather app for the temperature)",
        "Squared paper or a spreadsheet",
      ],
      steps: [
        "Cut the top third off the bottle, turn it upside-down and tape it into the bottom part as a funnel. Put pebbles in the bottom so it does not blow over, then add water until the level is just above the pebbles and mark that line as 0 on a ruler stuck to the side.",
        "Place the gauge in an open spot away from trees, roofs and HDB corridors (rain must fall straight in).",
        "Every day at the same time, record the rainfall in mm (rise above the 0 line), then pour water out back to the 0 line. Note the air temperature in the shade.",
        "After 14 days, draw a climate graph: rainfall as blue bars on the left axis, temperature as a red line on the right axis.",
        "Compare your total with the Meteorological Service Singapore monthly average for that month. Then compare your graph with Cairo's or Vostok's in the Climate Graph Lab.",
      ],
      science:
        "You have just done what weather stations do every day — climate is simply the average of weather measured over about 30 years. Singapore's graph will show hot, nearly flat temperatures and plenty of rain; a desert graph has almost no bars, and a polar graph has a line that stays below 0°C. Your two weeks are a tiny sample, so they may differ from the long-term average — that is why climatologists use 30-year means.",
      safety: "Ask an adult to help with the scissors, and stay indoors during thunderstorms — read the gauge afterwards.",
    },
    {
      title: "Why deserts are hot by day and cold by night",
      emoji: "🏜️",
      materials: [
        "Two identical small bowls or cups",
        "Dry sand and damp garden soil (or wet sand)",
        "Two thermometers",
        "A desk lamp with a filament or halogen bulb, or a sunny window ledge",
        "A timer",
      ],
      steps: [
        "Fill one bowl with dry sand and the other with damp soil to the same depth. Push a thermometer about 1 cm into each.",
        "Record both starting temperatures, then put both bowls the same distance under the lamp (or in direct sun).",
        "Record each temperature every 2 minutes for 20 minutes.",
        "Switch off the lamp (or move the bowls into the shade) and keep recording every 2 minutes for another 20 minutes — this is 'night'.",
        "Plot both sets of results as line graphs and work out each bowl's range (highest − lowest).",
      ],
      science:
        "The dry sand heats up and cools down faster, giving it a bigger range — just like a hot desert's large diurnal (day–night) temperature range of 20–30°C. Water in the damp soil stores heat and releases it slowly, like the moisture and cloud in Singapore's air, which act as a blanket and keep our nights warm (about 25°C).",
      safety: "Lamps get hot — do not touch the bulb, and keep water away from the plug and cable.",
    },
  ],
  bonusDiagrams: [
    {
      title: "How to read a climate graph",
      svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Annotated climate graph of Cairo: rainfall bars on the left axis in millimetres, temperature line on the right axis in degrees Celsius, with the annual temperature range marked" font-family="sans-serif"><line x1="50" y1="30" x2="50" y2="170" stroke="#2563eb"/><line x1="290" y1="30" x2="290" y2="170" stroke="#dc2626"/><line x1="50" y1="170" x2="290" y2="170" stroke="#475569"/><text x="46" y="174" font-size="11" text-anchor="end" fill="#2563eb">0</text><text x="46" y="104" font-size="11" text-anchor="end" fill="#2563eb">5</text><text x="46" y="34" font-size="11" text-anchor="end" fill="#2563eb">10</text><text x="294" y="174" font-size="11" fill="#dc2626">0</text><text x="294" y="104" font-size="11" fill="#dc2626">15</text><text x="294" y="34" font-size="11" fill="#dc2626">30</text><rect x="52" y="100" width="16" height="70" fill="#60a5fa"/><rect x="72" y="114" width="16" height="56" fill="#60a5fa"/><rect x="92" y="114" width="16" height="56" fill="#60a5fa"/><rect x="112" y="156" width="16" height="14" fill="#60a5fa"/><rect x="132" y="163" width="16" height="7" fill="#60a5fa"/><rect x="232" y="156" width="16" height="14" fill="#60a5fa"/><rect x="252" y="128" width="16" height="42" fill="#60a5fa"/><rect x="272" y="86" width="16" height="84" fill="#60a5fa"/><polyline points="60,105 80,99 100,88 120,69 140,53 160,41 180,37 200,38 220,46 240,60 260,81 280,99" fill="none" stroke="#dc2626" stroke-width="2.5"/><line x1="186" y1="37" x2="186" y2="105" stroke="#7c3aed" stroke-dasharray="3 2"/><line x1="56" y1="105" x2="192" y2="105" stroke="#7c3aed" stroke-dasharray="3 2"/><text x="192" y="80" font-size="11" fill="#6d28d9">annual range</text><text x="192" y="93" font-size="11" fill="#6d28d9">28 − 14 = 14°C</text><text x="56" y="186" font-size="11" fill="#334155">J</text><text x="176" y="186" font-size="11" fill="#334155">J (July)</text><text x="276" y="186" font-size="11" fill="#334155">D</text><text x="10" y="20" font-size="11" fill="#2563eb">Rainfall (mm) – bars</text><text x="350" y="20" font-size="11" text-anchor="end" fill="#dc2626">Temperature (°C) – line</text><text x="180" y="208" font-size="11" text-anchor="middle" fill="#0f172a">Cairo: total ≈ 25 mm a year → a hot desert</text></svg>`,
      caption:
        "Bars = rainfall, read on the LEFT axis; line = temperature, read on the RIGHT axis. Annual range = warmest month − coldest month. Total rainfall = add up all 12 bars. Always check the axis numbers: here the rainfall axis only goes to 10 mm, so the bars look big even though Cairo is a desert.",
    },
    {
      title: "Higher means colder: the lapse rate",
      svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mountain diagram: temperature falls about 6.5 degrees Celsius for every 1000 metres climbed, from 26 degrees at sea level to about minus 31.5 degrees at the summit of Everest" font-family="sans-serif"><rect width="360" height="220" fill="#f0f9ff"/><polygon points="40,200 200,24 230,60 250,50 320,200" fill="#a8a29e" stroke="#44403c"/><polygon points="164,64 200,24 230,60 250,50 262,76 236,68 214,80 190,70" fill="#ffffff" stroke="#44403c"/><polygon points="40,200 122,110 278,110 320,200" fill="#65a30d" opacity="0.85"/><polygon points="40,200 76,160 301,160 320,200" fill="#4d7c0f"/><line x1="20" y1="200" x2="20" y2="24" stroke="#475569"/><text x="24" y="204" font-size="11" fill="#334155">0 m</text><text x="24" y="114" font-size="11" fill="#334155">4,500 m</text><text x="24" y="28" font-size="11" fill="#334155">8,849 m</text><text x="330" y="196" font-size="12" font-weight="700" text-anchor="end" fill="#b91c1c">26°C</text><text x="330" y="106" font-size="12" font-weight="700" text-anchor="end" fill="#7c3aed">−3°C</text><text x="330" y="30" font-size="12" font-weight="700" text-anchor="end" fill="#1d4ed8">−31.5°C</text><text x="236" y="140" font-size="11" fill="#14532d">forest</text><text x="150" y="104" font-size="11" fill="#1c1917">tree line</text><text x="260" y="44" font-size="11" fill="#1e3a8a">snow &amp; ice</text><text x="180" y="216" font-size="11" text-anchor="middle" fill="#0f172a">≈ 6.5°C colder for every 1,000 m you climb</text></svg>`,
      caption:
        "Air is heated mainly by the ground and expands and cools as it rises, so temperature falls by about 6.5°C per 1,000 m (the average lapse rate). Thinner air also holds less oxygen per breath. Even a mountain on the Equator, like Kilimanjaro, can have snow on top. Simplified diagram, not to scale.",
    },
  ],
  interactives: ["extreme-environments:ClimateGraphLab", "extreme-environments:ClimbTheMountain"],
};
