import type { TopicExtras } from "../types";

export const citiesMegacitiesExtras: TopicExtras = {
  hook:
    "In 1950 only two cities on Earth, New York and Tokyo, had about 10 million people. Today there are more than 30 of these megacities, and most are in Asia, Africa and Latin America. Why did the world's biggest cities move?",
  didYouKnow: [
    "Around 2007 the world became more urban than rural for the first time in history. The UN expects about 68% of people to live in urban areas by 2050, up from about 56% in 2020.",
    "About 90% of the extra 2.5 billion urban dwellers expected by 2050 will be in Asia and Africa. India, China and Nigeria alone account for over a third of that growth (UN estimate).",
    "Greater Tokyo has about 37 million people, more than the whole population of Australia (about 27 million).",
    "Lagos grew from roughly 0.3 million people in 1950 to around 15 million by 2020, about 50 times bigger in 70 years (approximate UN estimates).",
    "The UN projects that Delhi will overtake Tokyo as the world's largest city around 2028, and that Kinshasa and Lagos will each pass 20 million by 2030.",
  ],
  experiments: [
    {
      title: "Land-use transect: from MRT station outwards",
      emoji: "🚇",
      materials: ["A map of your neighbourhood (printed or on a phone)", "Clipboard, paper and pencil", "A phone timer or step counter", "Coloured pencils"],
      steps: [
        "Pick an MRT station near you, such as a town centre station, and plan a straight-ish walk of about 1 km away from it.",
        "Every 100 m (about 130 steps), stop and record: the main land use (shops, offices, housing, park, school, industry), the tallest building's number of storeys, and how busy it is (count people passing in 1 minute).",
        "Colour each stop on your map: red = shops/commercial, yellow = housing, green = open space, blue = services, grey = industry.",
        "Draw a line graph of building height and people count against distance from the station.",
        "Write a TEA paragraph: what is the trend as you move away from the station? Give an example with numbers, and any anomaly.",
      ],
      science:
        "Land is most valuable and accessible near transport hubs, so you usually find shops, offices and the tallest, densest buildings there, with homes and open space further out. This is the same pattern as a city's CBD and its outer zones in urban land-use models. Singapore plans its towns this way on purpose: each HDB new town has a town centre around the MRT station.",
      safety: "Go with an adult or a friend, stay on pavements, use crossings and do not stop in the middle of busy walkways.",
    },
    {
      title: "Family migration story: kampong to city",
      emoji: "🏘️",
      materials: ["Notebook or voice recorder (with permission)", "A grandparent or older relative to interview", "A world or Southeast Asia map"],
      steps: [
        "Ask: where did you grow up? Was it a village (kampong), a small town or a big city? Mark it on the map.",
        "Ask: when did your family move, and where to? Draw an arrow on the map for each move.",
        "Ask: what made you leave (push factors) and what attracted you to the new place (pull factors)? Write them in two columns.",
        "Ask: what was housing, water, electricity and transport like before and after the move?",
        "Compare with classmates: which push and pull factors come up most often?",
      ],
      science:
        "Most city growth comes from rural-urban migration and natural increase. Push factors (few jobs, poor services, farming hardship) and pull factors (jobs, schools, hospitals, a better life) explain why people move. Many Singapore families moved from kampongs into HDB flats in the 1960s to 1980s; today the same process is happening very fast in cities such as Dhaka, Lagos and Delhi.",
      safety: "Be respectful: some memories can be sensitive, so let people skip any question they prefer not to answer.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Why people move to cities: push and pull factors",
      svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rural-urban migration: push factors from the countryside such as few jobs, poor services and crop failure push people out; pull factors in the city such as jobs, schools, hospitals and better pay pull people in">
  <rect x="0" y="0" width="360" height="200" fill="#ffffff"/>
  <rect x="10" y="30" width="130" height="150" rx="12" fill="#ecfdf5" stroke="#16a34a" stroke-width="2"/>
  <text x="75" y="52" text-anchor="middle" font-size="14" font-weight="bold" fill="#166534">Countryside</text>
  <text x="75" y="72" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">PUSH factors</text>
  <text x="20" y="94" font-size="11" fill="#334155">• Few jobs, low pay</text>
  <text x="20" y="112" font-size="11" fill="#334155">• Poor schools, clinics</text>
  <text x="20" y="130" font-size="11" fill="#334155">• Drought, crop failure</text>
  <text x="20" y="148" font-size="11" fill="#334155">• Farm machines</text>
  <text x="20" y="166" font-size="11" fill="#334155">• Conflict</text>
  <rect x="220" y="30" width="130" height="150" rx="12" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
  <text x="285" y="52" text-anchor="middle" font-size="14" font-weight="bold" fill="#3730a3">City</text>
  <text x="285" y="72" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">PULL factors</text>
  <text x="230" y="94" font-size="11" fill="#334155">• Factory, office jobs</text>
  <text x="230" y="112" font-size="11" fill="#334155">• Schools, hospitals</text>
  <text x="230" y="130" font-size="11" fill="#334155">• Higher wages</text>
  <text x="230" y="148" font-size="11" fill="#334155">• Water, electricity</text>
  <text x="230" y="166" font-size="11" fill="#334155">• Family already there</text>
  <line x1="145" y1="105" x2="210" y2="105" stroke="#f59e0b" stroke-width="5"/>
  <polygon points="214,105 202,97 202,113" fill="#f59e0b"/>
  <text x="180" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">migration</text>
  <text x="180" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">Rural-urban migration</text>
  <text x="180" y="138" text-anchor="middle" font-size="11" fill="#475569">+ natural</text>
  <text x="180" y="152" text-anchor="middle" font-size="11" fill="#475569">increase</text>
  <text x="180" y="166" text-anchor="middle" font-size="11" fill="#475569">= urban growth</text>
</svg>`,
      caption:
        "Cities grow in two ways: people move in from the countryside (rural-urban migration) and city populations have more births than deaths (natural increase). In fast-growing cities such as Lagos and Dhaka, both happen at once.",
    },
    {
      title: "The urbanisation S-curve",
      svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An S-shaped curve of percent urban against time with three stages: early stage below about 30 percent, acceleration stage with rapid growth, and terminal stage levelling off above about 75 percent. Example countries: Nigeria in acceleration, UK and Japan in terminal stage">
  <rect x="0" y="0" width="360" height="200" fill="#ffffff"/>
  <line x1="40" y1="165" x2="345" y2="165" stroke="#64748b" stroke-width="1.5"/>
  <line x1="40" y1="165" x2="40" y2="15" stroke="#64748b" stroke-width="1.5"/>
  <text x="192" y="190" text-anchor="middle" font-size="11" fill="#475569">Time</text>
  <text x="14" y="90" text-anchor="middle" font-size="11" fill="#475569" transform="rotate(-90 14 90)">% urban</text>
  <line x1="40" y1="120" x2="345" y2="120" stroke="#e2e8f0" stroke-dasharray="4 3"/>
  <line x1="40" y1="55" x2="345" y2="55" stroke="#e2e8f0" stroke-dasharray="4 3"/>
  <path d="M 45 155 C 120 152, 130 140, 160 115 S 220 50, 260 42 S 330 35, 340 34" fill="none" stroke="#4f46e5" stroke-width="3"/>
  <text x="85" y="122" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Early</text>
  <text x="85" y="135" text-anchor="middle" font-size="11" fill="#334155">mostly rural</text>
  <text x="200" y="128" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">Acceleration</text>
  <text x="200" y="141" text-anchor="middle" font-size="11" fill="#334155">e.g. Nigeria, India</text>
  <text x="295" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Terminal</text>
  <text x="295" y="81" text-anchor="middle" font-size="11" fill="#334155">e.g. UK, Japan</text>
  <text x="44" y="116" font-size="11" fill="#94a3b8">~30%</text>
  <text x="44" y="51" font-size="11" fill="#94a3b8">~75%</text>
</svg>`,
      caption:
        "Simplified model: most countries follow an S-shaped path. Urbanisation starts slowly, speeds up as industry and services grow, then levels off once most people already live in towns and cities. Use the Urbanisation Curves widget to see which stage each country is in.",
    },
  ],
  interactives: ["cities-megacities:UrbanisationCurves", "cities-megacities:MegacityRace"],
};
