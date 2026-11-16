import type { TopicExtras } from "../types";

const bridgeFunnelSvg = `<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of why Lagos jams: millions of homes on the mainland, a few bridges across the lagoon, and jobs concentrated on Lagos Island, Ikoyi and Victoria Island, so traffic is funnelled into bottlenecks">
  <rect width="360" height="230" fill="#ffffff"/>
  <text x="180" y="18" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">Why Lagos jams: the bridge bottleneck</text>
  <rect x="10" y="32" width="120" height="160" rx="10" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="70" y="52" font-size="12" font-weight="bold" text-anchor="middle" fill="#78350f">MAINLAND</text>
  <text x="70" y="70" font-size="11" text-anchor="middle" fill="#78350f">where most</text>
  <text x="70" y="84" font-size="11" text-anchor="middle" fill="#78350f">people live</text>
  <g fill="#b45309"><rect x="28" y="100" width="14" height="14"/><rect x="50" y="100" width="14" height="14"/><rect x="72" y="100" width="14" height="14"/><rect x="94" y="100" width="14" height="14"/><rect x="28" y="122" width="14" height="14"/><rect x="50" y="122" width="14" height="14"/><rect x="72" y="122" width="14" height="14"/><rect x="94" y="122" width="14" height="14"/><rect x="28" y="144" width="14" height="14"/><rect x="50" y="144" width="14" height="14"/><rect x="72" y="144" width="14" height="14"/><rect x="94" y="144" width="14" height="14"/></g>
  <text x="70" y="182" font-size="11" text-anchor="middle" fill="#78350f">Ikeja, Ikorodu, Yaba</text>
  <rect x="130" y="32" width="100" height="160" fill="#bae6fd"/>
  <text x="180" y="186" font-size="11" text-anchor="middle" font-style="italic" fill="#075985">Lagos Lagoon</text>
  <g stroke="#475569" stroke-width="6"><line x1="130" y1="62" x2="230" y2="62"/><line x1="130" y1="110" x2="230" y2="110"/><line x1="130" y1="152" x2="230" y2="152"/></g>
  <g font-size="11" text-anchor="middle" fill="#0f172a"><text x="180" y="54">Third Mainland</text><text x="180" y="102">Carter Bridge</text><text x="180" y="144">Eko Bridge</text></g>
  <g fill="#dc2626"><rect x="138" y="58" width="8" height="8"/><rect x="152" y="58" width="8" height="8"/><rect x="166" y="58" width="8" height="8"/><rect x="180" y="58" width="8" height="8"/><rect x="194" y="58" width="8" height="8"/><rect x="208" y="58" width="8" height="8"/><rect x="146" y="106" width="8" height="8"/><rect x="162" y="106" width="8" height="8"/><rect x="178" y="106" width="8" height="8"/><rect x="194" y="106" width="8" height="8"/><rect x="152" y="148" width="8" height="8"/><rect x="170" y="148" width="8" height="8"/><rect x="188" y="148" width="8" height="8"/></g>
  <rect x="230" y="32" width="120" height="160" rx="10" fill="#e0e7ff" stroke="#6366f1"/>
  <text x="290" y="52" font-size="12" font-weight="bold" text-anchor="middle" fill="#3730a3">THE ISLANDS</text>
  <text x="290" y="70" font-size="11" text-anchor="middle" fill="#3730a3">many offices,</text>
  <text x="290" y="84" font-size="11" text-anchor="middle" fill="#3730a3">banks and markets</text>
  <g fill="#4f46e5"><rect x="252" y="120" width="14" height="60"/><rect x="272" y="100" width="16" height="80"/><rect x="294" y="112" width="14" height="68"/><rect x="314" y="130" width="14" height="50"/></g>
  <text x="180" y="214" font-size="12" text-anchor="middle" fill="#334155">Millions of trips each morning squeeze onto a few crossings</text>
</svg>`;

const transportSvg = `<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of Lagos transport solutions: metro planned 1983 and cancelled 1985, BRT opened 2008, okada ban 2022, Blue Line rail 2023, Red Line rail 2024">
  <rect width="360" height="230" fill="#ffffff"/>
  <text x="180" y="18" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">Lagos transport: 40 years of trying</text>
  <line x1="20" y1="120" x2="340" y2="120" stroke="#94a3b8" stroke-width="3"/>
  <g font-size="11" fill="#334155" text-anchor="middle">
    <circle cx="40" cy="120" r="7" fill="#94a3b8"/><text x="40" y="104" font-weight="bold">1983</text><text x="40" y="142">Metro</text><text x="40" y="156">planned,</text><text x="40" y="170">cancelled</text><text x="40" y="184">1985</text>
    <circle cx="110" cy="120" r="7" fill="#f59e0b"/><text x="110" y="104" font-weight="bold">2008</text><text x="110" y="142">BRT buses:</text><text x="110" y="156">own lanes,</text><text x="110" y="170">Mile 12–CMS</text>
    <circle cx="180" cy="120" r="7" fill="#dc2626"/><text x="180" y="104" font-weight="bold">2022</text><text x="180" y="142">Okada</text><text x="180" y="156">motorbike</text><text x="180" y="170">taxis banned</text><text x="180" y="184">on many routes</text>
    <circle cx="250" cy="120" r="7" fill="#2563eb"/><text x="250" y="104" font-weight="bold">2023</text><text x="250" y="142">Blue Line</text><text x="250" y="156">Mile 2–Marina</text><text x="250" y="170">about 13 km</text>
    <circle cx="320" cy="120" r="7" fill="#b91c1c"/><text x="320" y="104" font-weight="bold">2024</text><text x="320" y="142">Red Line</text><text x="320" y="156">Agbado–</text><text x="320" y="170">Oyingbo</text><text x="320" y="184">about 27 km</text>
  </g>
  <rect x="20" y="40" width="320" height="40" rx="8" fill="#f1f5f9"/>
  <text x="180" y="57" font-size="11" text-anchor="middle" fill="#334155">Most trips are still by danfo minibus, private car or on foot.</text>
  <text x="180" y="72" font-size="11" text-anchor="middle" fill="#334155">About 40 km of metro rail serves a city of 15–20+ million.</text>
  <text x="180" y="214" font-size="11" text-anchor="middle" fill="#64748b">Dates from Lagos State transport projects (approximate lengths)</text>
</svg>`;

export const lagosExtras: TopicExtras = {
  hook:
    "Every morning, millions of Lagosians leave home before 5 am to beat the 'go-slow', and some still spend 3–4 hours a day stuck in traffic. How did a port town of about 300,000 people in 1950 become a megacity of 15–20+ million that its roads can barely hold, and why do people keep coming?",
  didYouKnow: [
    "Lagos State is the smallest of Nigeria's 36 states by area (about 3,600 km², roughly 0.4% of the country), yet it holds one of the largest populations of any state.",
    "Lagos has grown about 50-fold since 1950, from roughly 0.3 million to an estimated 15–20+ million. The UN and the Lagos State government disagree by several million, so geographers quote a range.",
    "The Third Mainland Bridge, opened in 1990, is about 11.8 km long. It is one of the longest bridges in Africa and carries a huge share of the daily traffic from the mainland to Lagos Island.",
    "In 2008 Lagos opened sub-Saharan Africa's first Bus Rapid Transit (BRT) line, about 22 km from Mile 12 to CMS. At its peak it carried around 200,000 passengers a day.",
    "Lagos waited about 40 years for its metro: one was planned in the early 1980s and cancelled in 1985. The Blue Line finally opened in 2023 (about 13 km, 5 stations) and the Red Line in 2024 (about 27 km).",
  ],
  experiments: [
    {
      title: "Commute challenge: Singapore vs Lagos",
      emoji: "🚌",
      materials: ["A watch or phone stopwatch", "Notebook or a simple table", "A map app to measure distance", "An adult to travel with"],
      steps: [
        "Pick one regular journey, for example home to school or to a shopping centre.",
        "On different days, time the same journey by different modes: walking, bus, MRT and car (if your family has one). Try one trip in the morning rush and one at a quiet time.",
        "Record the distance, the total time (including waiting and walking to the stop) and the fare.",
        "Work out the average speed for each trip: distance (km) ÷ time (hours).",
        "Compare your fastest and slowest speeds with the Lagos Commute Challenge widget for a similar distance.",
        "List the things that keep Singapore traffic moving (MRT network, ERP road charges, COE limits on car numbers, bus lanes) and decide which could work in Lagos.",
      ],
      science:
        "You will usually find that rush-hour speeds drop much less in Singapore than in Lagos, and that rail is the most reliable. A dense rail network, limits on car numbers and road pricing spread traffic out. Lagos has many people, few bridges, short rail lines and lots of cars and danfos sharing the same roads, so congestion multiplies journey times. Your data show that transport solutions work best as a joined-up system.",
      safety: "Travel with an adult, take care near roads and at crossings, and never use a phone while crossing.",
    },
    {
      title: "Migration story interview",
      emoji: "🧭",
      materials: ["A willing family member, neighbour or family friend", "Prepared questions on paper", "A world or regional map", "Coloured pens (red for push, green for pull)"],
      steps: [
        "Ask someone you know who moved to Singapore, or to a new city, if they will share their migration story. Many Singapore families have moved from China, India, Malaysia, Indonesia or elsewhere.",
        "Ask: Where did you (or your parents or grandparents) live before? What made you want to leave? What attracted you here? What made the move difficult?",
        "Write each reason on a sticky note or list: red for push factors, green for pull factors, black for obstacles.",
        "Draw an arrow on the map from the old home to the new one and label it with the main reasons.",
        "Decide whether the move was voluntary or forced, and whether it happened in one step or several steps.",
        "Compare your answers with the push and pull factors in the Push–Pull to Lagos widget. What is the same and what is different?",
      ],
      science:
        "Almost every migration story mixes push factors (problems at home), pull factors (opportunities in the city) and obstacles (cost, distance, paperwork). Family networks often matter as much as jobs: people go where someone can help them settle, which geographers call chain migration. Comparing Singapore stories with Lagos shows that the same push–pull model explains migration all over the world.",
      safety: "Ask permission before interviewing or recording anyone, and respect it if a question is too personal to answer.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Why Lagos jams: the bridge bottleneck",
      svg: bridgeFunnelSvg,
      caption:
        "Most people live on the mainland but many jobs are on the islands, so millions of trips are squeezed onto a few bridges across the lagoon. That is why Lagos's go-slows are so long, and why rail lines and ferries that avoid the bridges matter.",
    },
    {
      title: "Lagos transport solutions timeline",
      svg: transportSvg,
      caption:
        "Lagos has tried top-down transport solutions for decades. Each one helps, but the rail lines are still short for a megacity of this size, so most people still rely on danfos and roads.",
    },
  ],
  interactives: ["lagos:CommuteChallenge", "lagos:PushPullLagos"],
};
