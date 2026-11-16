import type { TopicExtras } from "../types";

export const extremeTourismExtras: TopicExtras = {
  hook:
    "Antarctica has no hotels, no shops and no permanent residents — yet more than 100,000 tourists a year now pay thousands of dollars to go there. Why would anyone holiday in the coldest, windiest place on Earth, and how do you stop that many visitors from spoiling it?",
  didYouKnow: [
    "Antarctic tourist numbers (IAATO counts) grew from about 6,700 in 1992–93 to about 122,000 in 2023–24 — roughly 18 times as many.",
    "Ships carrying more than 500 passengers are not allowed to land anyone in Antarctica, and no more than 100 people may be ashore at one landing site at a time.",
    "Mount Everest is 8,849 m high; in 2023 Nepal issued a record of about 478 climbing permits, and each foreign climber paid a US$11,000 permit fee.",
    "Since 2024 climbers on Everest must carry 'poo bags' above Base Camp and bring their human waste back down — it barely rots in the freezing cold.",
    "A polar explorer pulling a sledge can burn 5,000–6,000+ kcal a day — more than twice the 2,000–2,500 kcal most people need at home.",
  ],
  experiments: [
    {
      title: "Pack an expedition rucksack — and weigh it",
      emoji: "🎒",
      materials: ["A school bag or rucksack", "Bathroom or luggage scale", "Water bottles", "Snacks with nutrition labels", "Spare clothes (base layer, jumper, rain jacket)"],
      steps: [
        "Choose a 2-day trek: the Sahara or Everest Base Camp. Write a kit list for ONE day: water, food, clothing layers, first aid, sun or cold protection.",
        "Read the food labels and add up the kcal. Keep packing snacks until you reach about 3,000 kcal (Sahara) or 4,000 kcal (Everest).",
        "Fill bottles with the water you would need for one day (Sahara: 6 litres; Everest: about 4 litres) and put them in the bag.",
        "Weigh the full bag. Then take out the water and weigh it again.",
        "Work out what fraction of the load is water. How would a 10-day trek change your plan? Who or what would carry it?",
      ],
      science:
        "Water weighs 1 kg per litre, so in a hot desert it is usually the heaviest thing you carry — far heavier than food. That is why Saharan treks use camels or vehicles and plan routes between wells and oases, and why expedition food is chosen for the most energy per gram (nuts, chocolate, dried meals).",
      safety: "Do not try to carry a very heavy bag far — just weigh it. Ask an adult before using water bottles or food.",
    },
    {
      title: "Wear-test clothing layers in Singapore's air-con",
      emoji: "🧥",
      materials: ["A thermometer (or a weather app)", "A T-shirt, a fleece or jumper, a rain jacket", "A notebook", "An air-conditioned room and a shady spot outdoors"],
      steps: [
        "Record the temperature in an air-conditioned room (often 20–24 °C) and outdoors in the shade (often 30–33 °C in Singapore).",
        "In the air-con room, sit still for 5 minutes in a T-shirt (base layer). Score how warm you feel from 1 (cold) to 5 (hot).",
        "Add the fleece (mid layer), wait 5 minutes and score again. Then add the rain jacket (outer shell) and score again.",
        "Stand in front of a fan with and without the jacket. Which layer stops the 'wind chill' best?",
        "Outdoors, compare a dark T-shirt and a light-coloured, loose long-sleeved shirt in the shade for 5 minutes each.",
      ],
      science:
        "Each layer has a job: the base layer moves sweat away, the mid layer traps warm air, and the shell blocks wind. The fan shows wind chill — moving air strips heat from your body, which is why polar explorers need windproof shells. Loose light clothing works in the Sahara because it reflects sunlight and lets air move over your skin.",
      safety: "Stay in the shade outdoors, drink water, and stop if you feel dizzy or too hot.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Ushuaia to the Antarctic Peninsula",
      svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map: tourist ships sail about 1,000 km from Ushuaia at the tip of South America across the Drake Passage to the Antarctic Peninsula" font-family="sans-serif"><rect x="0" y="0" width="320" height="200" fill="#bfdbfe"/><path d="M40,0 L95,0 L88,30 L80,55 L70,75 L58,72 L50,50 L42,25 Z" fill="#bbf7d0" stroke="#166534"/><text x="12" y="20" font-size="11" fill="#14532d">South</text><text x="12" y="33" font-size="11" fill="#14532d">America</text><circle cx="72" cy="70" r="4" fill="#dc2626"/><text x="80" y="88" font-size="11" font-weight="700" fill="#7f1d1d">Ushuaia</text><path d="M150,200 L170,170 L190,150 L215,135 L232,128 L240,138 L228,152 L215,170 L210,200 Z" fill="#f8fafc" stroke="#64748b"/><path d="M0,200 L0,190 L150,190 L150,200 Z" fill="#f8fafc"/><text x="246" y="160" font-size="11" font-weight="700" fill="#334155">Antarctic</text><text x="246" y="173" font-size="11" font-weight="700" fill="#334155">Peninsula</text><text x="20" y="185" font-size="11" fill="#334155">ANTARCTICA</text><path d="M76,74 Q150,95 222,134" fill="none" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="7 4"/><text x="128" y="78" font-size="12" font-weight="700" fill="#1e3a8a">Drake Passage</text><text x="128" y="118" font-size="11" fill="#1e3a8a">~1,000 km</text><text x="128" y="131" font-size="11" fill="#1e3a8a">about 2 days</text><text x="300" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">N</text><path d="M300,28 L295,42 L300,38 L305,42 Z" fill="#0f172a"/></svg>`,
      caption:
        "Most Antarctic tourists sail from Ushuaia, Argentina, across the stormy Drake Passage to the Antarctic Peninsula — the closest and mildest part of the continent — during the southern summer (about November to March). Sketch map, not to scale.",
    },
    {
      title: "Benefits and costs of extreme tourism",
      svg: `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balance diagram: benefits of extreme tourism such as jobs, money for conservation and awareness on one side; costs such as pollution, wildlife disturbance, invasive species and waste on the other" font-family="sans-serif"><rect x="0" y="0" width="340" height="190" fill="#ffffff"/><path d="M170,175 L155,190 L185,190 Z" fill="#475569"/><line x1="170" y1="40" x2="170" y2="175" stroke="#475569" stroke-width="3"/><line x1="30" y1="46" x2="310" y2="46" stroke="#475569" stroke-width="3"/><rect x="10" y="52" width="150" height="112" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="85" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#166534">Benefits</text><text x="20" y="90" font-size="11" fill="#14532d">• Jobs: Sherpa guides,</text><text x="30" y="104" font-size="11" fill="#14532d">porters, ship crews</text><text x="20" y="120" font-size="11" fill="#14532d">• Permit fees fund clean-ups</text><text x="20" y="136" font-size="11" fill="#14532d">• Visitors become</text><text x="30" y="150" font-size="11" fill="#14532d">'ambassadors' for nature</text><rect x="180" y="52" width="150" height="112" rx="8" fill="#ffe4e6" stroke="#e11d48"/><text x="255" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#9f1239">Costs</text><text x="190" y="90" font-size="11" fill="#881337">• Ship fuel, emissions,</text><text x="200" y="104" font-size="11" fill="#881337">oil-spill risk</text><text x="190" y="120" font-size="11" fill="#881337">• Disturbed wildlife</text><text x="190" y="136" font-size="11" fill="#881337">• Invasive seeds, disease</text><text x="190" y="152" font-size="11" fill="#881337">• Waste and crowding</text><text x="170" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Which side is heavier? Rules tip the balance.</text></svg>`,
      caption:
        "Extreme tourism brings money and jobs to remote places and can build support for protecting them — but it also brings pollution, crowding and the risk of invasive species. Rules such as IAATO's landing limits and Everest's waste rules try to keep the benefits while cutting the costs.",
    },
  ],
  interactives: ["extreme-tourism:LandingPlanner", "extreme-tourism:ExpeditionKitPlanner"],
};
