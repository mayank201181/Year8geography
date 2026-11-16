import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In 1950 only two cities on Earth had 10 million people: Tokyo and New York. Today there are more than thirty such megacities — and most of them are in Asia. What changed, and why are cities in poorer countries now growing fastest?",
  didYouKnow: [
    "Around 2007, for the first time in human history, more people lived in towns and cities than in the countryside (UN estimate). By 2023 the figure was about 57%, and the UN projects about 68% by 2050.",
    "Singapore is counted as 100% urban — it is a city-state, so the whole country is one city. Even so, nearly half of its land is green cover such as parks, nature reserves and park connectors.",
    "There is no single world definition of 'urban'. Some countries count any settlement over a few thousand people as a town; others use much higher thresholds — so % urban figures are only roughly comparable.",
    "City rankings depend on where you draw the boundary. Using one method, Tokyo is the world's biggest urban area (about 37 million people in 2018); a 2025 UN report using a new, satellite-based method ranked Jakarta first.",
    "In many fast-growing cities, natural increase adds as many people as migration does — because migrants are mostly young adults who go on to start families in the city.",
    "Counter-urbanisation is real: in many high-income countries, people move out of big cities to smaller towns and villages, helped by cars, fast internet and working from home.",
  ],
  activities: [
    {
      title: "Map the zones of your neighbourhood",
      emoji: "🗺️",
      materials: ["A printed map or screenshot of your area (e.g. from OneMap)", "Coloured pencils", "A notebook", "Optional: a phone camera"],
      steps: [
        "Choose a route from a busy centre (e.g. a town centre or MRT interchange) out towards the edge of your area.",
        "Walk or ride it with an adult. Every few hundred metres, note the main land use: offices, shops, housing, industry, parks or open land.",
        "Also note building height (low / medium / high-rise) and how busy the streets are.",
        "Colour your map with a key: red = commercial (shops/offices), yellow = housing, purple = industry, green = parks/open space.",
        "Compare your map with the CBD → inner city → suburbs → rural–urban fringe model. Where does your area fit — and where does it NOT fit the model?",
      ],
      maths: "Land-use models say land values and building heights fall as you move away from the centre, because the centre is the most accessible place and everyone competes for it. Singapore is planned, so its pattern differs: HDB new towns each have their own town centre, a bit like mini-CBDs. Spotting where reality differs from the model is exactly what geographers do.",
    },
    {
      title: "Family migration interview",
      emoji: "🧳",
      materials: ["A family member or neighbour who has moved home, city or country", "A notebook or phone voice recorder", "A world map"],
      steps: [
        "Ask: Where did you (or your parents or grandparents) live before? Was it rural or urban?",
        "Ask: Why did you leave? List each reason under a PUSH heading.",
        "Ask: Why did you choose the new place? List each reason under a PULL heading.",
        "Ask: What was hard about moving (cost, distance, language, leaving family)? These are intervening obstacles.",
        "Plot the journey on the map and sort your reasons into social, economic and environmental.",
      ],
      maths: "Migration is usually explained with push factors (problems at the origin), pull factors (attractions of the destination) and obstacles in between. Real decisions mix several of each — and economic reasons (jobs, wages) are often the strongest. This is the same process that is driving the growth of megacities such as Dhaka and Lagos.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The settlement hierarchy",
      svg: `<svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Settlement hierarchy pyramid: hamlet at the bottom, then village, town, city, conurbation and megacity at the top. Arrows show that population and number of services increase going up, while the number of settlements decreases.">
  <rect x="0" y="0" width="440" height="280" fill="#ffffff"/>
  <polygon points="160,20 190,20 300,250 50,250" fill="#e5e7eb" stroke="#1f2937" stroke-width="1.5"/>
  <line x1="141" y1="58" x2="209" y2="58" stroke="#334155"/>
  <line x1="123" y1="96" x2="227" y2="96" stroke="#334155"/>
  <line x1="105" y1="135" x2="245" y2="135" stroke="#334155"/>
  <line x1="87" y1="173" x2="263" y2="173" stroke="#334155"/>
  <line x1="69" y1="212" x2="281" y2="212" stroke="#334155"/>
  <polygon points="160,20 190,20 209,58 141,58" fill="#fecaca" stroke="#1f2937"/>
  <text x="175" y="44" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#1f2937">Megacity</text>
  <text x="175" y="82" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1f2937">Conurbation</text>
  <text x="175" y="120" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1f2937">City</text>
  <text x="175" y="158" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1f2937">Town</text>
  <text x="175" y="197" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1f2937">Village</text>
  <text x="175" y="236" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1f2937">Hamlet</text>
  <line x1="330" y1="240" x2="330" y2="35" stroke="#1f2937" stroke-width="2"/>
  <polygon points="330,25 324,38 336,38" fill="#1f2937"/>
  <text x="342" y="80" font-family="sans-serif" font-size="11" fill="#1f2937">More people</text>
  <text x="342" y="96" font-family="sans-serif" font-size="11" fill="#1f2937">More services</text>
  <text x="342" y="112" font-family="sans-serif" font-size="11" fill="#1f2937">Bigger sphere</text>
  <text x="342" y="126" font-family="sans-serif" font-size="11" fill="#1f2937">of influence</text>
  <line x1="20" y1="35" x2="20" y2="240" stroke="#1f2937" stroke-width="2"/>
  <polygon points="20,250 14,237 26,237" fill="#1f2937"/>
  <text x="30" y="270" font-family="sans-serif" font-size="11" fill="#1f2937">More settlements of this type</text>
  <text x="300" y="270" font-family="sans-serif" font-size="11" fill="#1f2937">Megacity = 10 million+</text>
</svg>`,
      caption: "Going up the hierarchy, settlements have more people and more (and more specialised) services, but there are fewer of them. There are thousands of hamlets in a country — but only a few dozen megacities in the whole world.",
    },
    {
      title: "Urban land-use zones (simplified model)",
      svg: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concentric land-use model of a city: the CBD in the centre, surrounded by the inner city, then the suburbs, then the rural-urban fringe at the edge, with labels describing each zone.">
  <rect x="0" y="0" width="440" height="300" fill="#ffffff"/>
  <circle cx="150" cy="150" r="135" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="150" cy="150" r="100" fill="#e0f2fe" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="150" cy="150" r="62" fill="#e5e7eb" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="150" cy="150" r="28" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/>
  <text x="150" y="154" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">CBD</text>
  <text x="150" y="110" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#1f2937">Inner city</text>
  <text x="150" y="72" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#1f2937">Suburbs</text>
  <text x="150" y="35" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#1f2937">Rural–urban fringe</text>
  <text x="300" y="40" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">CBD</text>
  <text x="300" y="54" font-family="sans-serif" font-size="11" fill="#334155">offices, shops, tall buildings,</text>
  <text x="300" y="67" font-family="sans-serif" font-size="11" fill="#334155">highest land value</text>
  <text x="300" y="100" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">Inner city</text>
  <text x="300" y="114" font-family="sans-serif" font-size="11" fill="#334155">older dense housing,</text>
  <text x="300" y="127" font-family="sans-serif" font-size="11" fill="#334155">old industry, redevelopment</text>
  <text x="300" y="160" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">Suburbs</text>
  <text x="300" y="174" font-family="sans-serif" font-size="11" fill="#334155">newer housing, green space,</text>
  <text x="300" y="187" font-family="sans-serif" font-size="11" fill="#334155">commuters</text>
  <text x="300" y="220" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">Rural–urban fringe</text>
  <text x="300" y="234" font-family="sans-serif" font-size="11" fill="#334155">retail parks, farmland,</text>
  <text x="300" y="247" font-family="sans-serif" font-size="11" fill="#334155">lowest land value</text>
  <text x="300" y="280" font-family="sans-serif" font-size="11" fill="#334155">Land value falls outwards →</text>
</svg>`,
      caption: "A simplified model: land is most valuable at the accessible centre, so the CBD builds upwards; housing gets newer and less dense towards the edge. Real cities (especially planned ones like Singapore) only partly fit it.",
    },
  ],
  history: {
    title: "John Snow and the Broad Street pump",
    story: "In 1854 cholera swept through Soho, a crowded district of London — then the biggest city in the world. Most doctors believed disease spread through 'bad air'. Dr John Snow disagreed. He walked the streets, asked where victims had collected their water, and marked every death on a map. The deaths clustered around one public water pump on Broad Street. Snow persuaded the local council to remove the pump's handle, and the outbreak, which was already declining, faded away. His map was strong evidence that cholera spread through dirty water, not air. Over the following years, his ideas — together with the 'Great Stink' of 1858 — helped push London to build a modern sewer system, and his map became one of the founding stories of both epidemiology and geographical mapping — and a reminder that crowded, fast-growing cities need clean water and sanitation.",
  },
};
