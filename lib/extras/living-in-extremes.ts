import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Every year thousands of people pay to visit places that could kill them in a day — the summit of Everest, the middle of the Sahara, the Antarctic ice. Why do people choose to go, how do others manage to *live* there all year round, and can tourism ever be good for such fragile places?",

  didYouKnow: [
    "Antarctica is officially a desert: much of its interior gets less than 50 mm of precipitation a year — less than many parts of the Sahara.",
    "The lowest air temperature ever measured at a weather station was −89.2 °C, at Russia's Vostok Station in Antarctica in July 1983.",
    "Under IAATO guidelines, ships carrying more than 500 passengers may not land anyone in Antarctica, and no more than 100 visitors may be ashore at one site at the same time.",
    "Since 2014 Nepal has made Everest expeditions pay a refundable rubbish deposit, returned only if climbers bring rubbish back down the mountain.",
    "Sherpa people's bodies use oxygen unusually efficiently — an adaptation built up over many generations of living at high altitude in the Himalaya.",
    "In permafrost towns such as Yakutsk in Siberia, many buildings stand on piles (stilts) so that heat from the building can't thaw the frozen ground and make it sink.",
  ],

  activities: [
    {
      title: "Layering test: which outfit keeps the heat in?",
      emoji: "🧥",
      materials: [
        "3 identical jars or mugs",
        "Hot tap water (ask an adult)",
        "A thermometer (kitchen or aquarium type)",
        "An old cotton T-shirt, a fleece or wool sock, and a plastic bag (the 'shell')",
        "A fan or a breezy HDB corridor",
        "A timer",
      ],
      steps: [
        "Fill all three jars with the same amount of hot water and measure the starting temperature.",
        "Jar A: wrap in the cotton T-shirt that you have dampened slightly (a sweaty walker). Jar B: wrap in the fleece/wool layer. Jar C: fleece/wool layer **plus** the plastic bag on top as a windproof shell.",
        "Put all three in front of the fan (the 'wind').",
        "Record each jar's temperature every 5 minutes for 30 minutes in a table.",
        "Draw a line graph with time on the x-axis and temperature on the y-axis. Which jar cooled fastest?",
      ],
      maths: "This is exactly why expeditions use **layers**: the insulating mid layer traps still air, and the windproof shell stops wind from stripping that warm air away. Damp cotton loses heat quickly — water conducts heat away far faster than air — which is why mountaineers say 'cotton kills'. Wind chill is a major cause of hypothermia in polar and mountain environments.",
    },
    {
      title: "Plan a 'mini-expedition' around Singapore",
      emoji: "🗺️",
      materials: [
        "A map of a route, e.g. the MacRitchie Reservoir trails or a Pulau Ubin cycle loop (OneMap or a park map)",
        "Paper for a risk assessment table",
        "A water bottle and a kitchen scale",
      ],
      steps: [
        "Measure the route length on the map and estimate the walking time using **Naismith's rule** (1 hour per 5 km, plus 1 hour per 600 m of climbing — almost zero climbing in Singapore!).",
        "Make a risk assessment table with columns: Hazard · Who could be harmed · Likelihood (1–3) · Severity (1–3) · Risk score (likelihood × severity) · How we reduce it. Include heat exhaustion, a Sumatra squall or thunderstorm, getting lost and insect bites.",
        "Work out how much water each family member needs (about 0.5–1 litre per hour of walking in Singapore's heat) and weigh it — 1 litre weighs about 1 kg.",
        "Choose the best time of day to go, and write a short 'route card' to leave with someone at home.",
        "After the walk, compare your estimated time with the real time. Was Naismith's rule accurate on flat, hot ground?",
      ],
      maths: "Real expeditions to Everest or the Sahara are planned in exactly this way: route and season first, then a **risk assessment** that scores hazards and plans how to reduce them, then water and food calculations, then a route card so rescuers know where to look. Singapore's heat and humidity make dehydration and heat exhaustion real risks even on a short walk.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Why buildings in permafrost stand on stilts",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two cross-sections comparing a heated building sitting on permafrost, which thaws the ground and sinks, with a building raised on piles that lets cold air flow underneath so the ground stays frozen">
  <rect x="0" y="0" width="480" height="300" fill="#ffffff"/>
  <text x="120" y="22" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Built on the ground</text>
  <text x="360" y="22" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Raised on piles</text>
  <line x1="240" y1="34" x2="240" y2="290" stroke="#334155" stroke-dasharray="4 4"/>
  <rect x="10" y="150" width="220" height="140" fill="#e0f2fe" stroke="#334155"/>
  <rect x="10" y="150" width="220" height="22" fill="#d6d3d1" stroke="#334155"/>
  <text x="13" y="165" font-size="10" font-family="sans-serif" fill="#1f2937">active layer</text>
  <text x="20" y="280" font-size="11" font-family="sans-serif" fill="#1f2937">permafrost</text>
  <path d="M60 172 Q120 240 180 172 Z" fill="#fde68a" stroke="#334155"/>
  <text x="120" y="201" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">thawed mud</text>
  <polygon points="66,160 176,176 172,108 62,92" fill="#e5e7eb" stroke="#1f2937" stroke-width="2"/>
  <polygon points="62,92 117,62 172,108" fill="#fecaca" stroke="#1f2937" stroke-width="2"/>
  <text x="118" y="135" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">heated house</text>
  <path d="M100 175 L100 186 M120 177 L120 189 M140 175 L140 186" stroke="#dc2626" stroke-width="2"/>
  <text x="120" y="250" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">heat flows down</text>
  <text x="120" y="264" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">ground thaws, house tilts</text>
  <rect x="250" y="150" width="220" height="140" fill="#e0f2fe" stroke="#334155"/>
  <rect x="250" y="150" width="220" height="22" fill="#d6d3d1" stroke="#334155"/>
  <text x="256" y="165" font-size="10" font-family="sans-serif" fill="#1f2937">active layer</text>
  <text x="260" y="280" font-size="11" font-family="sans-serif" fill="#1f2937">permafrost stays frozen</text>
  <rect x="310" y="70" width="120" height="44" fill="#e5e7eb" stroke="#1f2937" stroke-width="2"/>
  <polygon points="310,70 370,40 430,70" fill="#fecaca" stroke="#1f2937" stroke-width="2"/>
  <text x="370" y="97" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">heated house</text>
  <line x1="322" y1="114" x2="322" y2="240" stroke="#1f2937" stroke-width="5"/>
  <line x1="370" y1="114" x2="370" y2="240" stroke="#1f2937" stroke-width="5"/>
  <line x1="418" y1="114" x2="418" y2="240" stroke="#1f2937" stroke-width="5"/>
  <text x="428" y="215" font-size="11" font-family="sans-serif" fill="#1f2937">piles</text>
  <path d="M262 128 L455 128" stroke="#0284c7" stroke-width="2"/>
  <polygon points="455,123 465,128 455,133" fill="#0284c7"/>
  <rect x="300" y="134" width="140" height="14" fill="#ffffff"/>
  <text x="370" y="145" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#0284c7">cold air flows underneath</text>
</svg>`,
      caption: "A heated building sitting directly on permafrost thaws the ground beneath it, so it sinks and tilts. Raising it on piles driven deep into the permafrost lets freezing air flow underneath, keeping the ground frozen and solid.",
    },
    {
      title: "Antarctic tourism: costs and benefits",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A balance diagram weighing the benefits of Antarctic tourism against its costs, with IAATO rules shown as the pivot that keeps them in balance">
  <rect x="0" y="0" width="480" height="300" fill="#ffffff"/>
  <text x="240" y="24" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Is Antarctic tourism positive?</text>
  <polygon points="240,240 210,280 270,280" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/>
  <text x="240" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">IAATO rules + Antarctic Treaty</text>
  <line x1="60" y1="232" x2="420" y2="248" stroke="#1f2937" stroke-width="4"/>
  <rect x="20" y="44" width="200" height="182" rx="8" fill="#bbf7d0" stroke="#334155"/>
  <text x="120" y="64" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Benefits</text>
  <text x="32" y="88" font-size="11" font-family="sans-serif" fill="#1f2937">• 'Ambassador' effect: visitors</text>
  <text x="42" y="102" font-size="11" font-family="sans-serif" fill="#1f2937">campaign to protect it</text>
  <text x="32" y="124" font-size="11" font-family="sans-serif" fill="#1f2937">• Ships can help carry scientists</text>
  <text x="42" y="138" font-size="11" font-family="sans-serif" fill="#1f2937">and supplies</text>
  <text x="32" y="160" font-size="11" font-family="sans-serif" fill="#1f2937">• Shop income helps conserve</text>
  <text x="42" y="174" font-size="11" font-family="sans-serif" fill="#1f2937">historic huts (Port Lockroy)</text>
  <text x="32" y="196" font-size="11" font-family="sans-serif" fill="#1f2937">• Jobs for guides and crews</text>
  <rect x="260" y="44" width="200" height="182" rx="8" fill="#fecaca" stroke="#334155"/>
  <text x="360" y="64" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Costs</text>
  <text x="272" y="88" font-size="11" font-family="sans-serif" fill="#1f2937">• Disturbance to penguins</text>
  <text x="282" y="102" font-size="11" font-family="sans-serif" fill="#1f2937">and seals while breeding</text>
  <text x="272" y="124" font-size="11" font-family="sans-serif" fill="#1f2937">• Non-native seeds or disease</text>
  <text x="282" y="138" font-size="11" font-family="sans-serif" fill="#1f2937">carried on boots and clothes</text>
  <text x="272" y="160" font-size="11" font-family="sans-serif" fill="#1f2937">• Fuel spills and ship accidents</text>
  <text x="272" y="182" font-size="11" font-family="sans-serif" fill="#1f2937">• Big carbon footprint from</text>
  <text x="282" y="196" font-size="11" font-family="sans-serif" fill="#1f2937">flights and cruising</text>
  <text x="272" y="218" font-size="11" font-family="sans-serif" fill="#1f2937">• Trampled moss at busy sites</text>
</svg>`,
      caption: "Tourism in Antarctica brings real benefits and real costs. Rules such as no more than 100 visitors ashore at one site, no landings from ships with more than 500 passengers, and strict biosecurity try to keep the balance. Whether it stays sustainable as visitor numbers rise is a good 'to what extent' question.",
    },
  ],

  history: {
    title: "Tenzing Norgay, Edmund Hillary and the summit of Everest",
    story: "On 29 May 1953, Tenzing Norgay, a Sherpa mountaineer, and Edmund Hillary, a beekeeper from New Zealand, became the first people confirmed to stand on the summit of Mount Everest. Their British expedition, led by John Hunt, was planned like a military operation: hundreds of porters carried tonnes of food, tents and oxygen bottles up the Khumbu valley, and the team set up a chain of camps so climbers could acclimatise step by step. Tenzing had already tried to climb Everest six times before. The success made Everest world-famous — and opened the door to the tourism that followed. Today hundreds of climbers reach the summit in a good season, and thousands of trekkers walk to Base Camp, bringing income to Sherpa communities but also crowds and litter to the mountain.",
  },
};
