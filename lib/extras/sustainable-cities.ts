import type { TopicExtras } from "../types";

const todSvg = `<svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan of a transit-oriented eco-neighbourhood: an MRT station in the centre surrounded by mixed-use shops and offices, a 400 to 500 metre walking circle of homes, a park connector with cycle lanes, and industry placed downwind behind a green buffer">
  <defs><marker id="tod-wind" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L6,3.5 L0,7 Z" fill="#0369a1"/></marker></defs>
  <rect x="0" y="0" width="360" height="260" fill="#ffffff"/>
  <text x="180" y="18" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">A transit-oriented eco-neighbourhood</text>
  <rect x="10" y="28" width="250" height="226" fill="#fef3c7" stroke="#fcd34d"/>
  <line x1="196" y1="38" x2="254" y2="38" stroke="#0369a1" stroke-width="1.6" marker-end="url(#tod-wind)"/>
  <text x="225" y="35" font-size="9" text-anchor="middle" fill="#0369a1">prevailing wind</text>
  <circle cx="135" cy="139" r="92" fill="#fde68a" stroke="#d97706" stroke-dasharray="6 4"/>
  <text x="135" y="59" font-size="11" text-anchor="middle" fill="#92400e">400–500 m walk (5–10 min)</text>
  <circle cx="135" cy="139" r="40" fill="#c7d2fe" stroke="#6366f1"/>
  <text x="135" y="112" font-size="11" text-anchor="middle" fill="#3730a3">mixed-use core</text>
  <line x1="10" y1="139" x2="260" y2="139" stroke="#dc2626" stroke-width="5"/>
  <circle cx="135" cy="139" r="9" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
  <text x="135" y="166" font-size="11" text-anchor="middle" fill="#991b1b">MRT station</text>
  <rect x="10" y="212" width="250" height="15" fill="#bbf7d0"/>
  <line x1="10" y1="219.5" x2="260" y2="219.5" stroke="#15803d" stroke-width="2.5" stroke-dasharray="6 4"/>
  <text x="135" y="239" font-size="10.5" text-anchor="middle" fill="#166534">park connector + cycle lane</text>
  <text x="135" y="250" font-size="10" text-anchor="middle" fill="#166534">(flood-safe green corridor)</text>
  <rect x="30" y="70" width="16" height="30" fill="#d97706"/><rect x="50" y="62" width="16" height="38" fill="#b45309"/>
  <rect x="200" y="70" width="16" height="30" fill="#d97706"/><rect x="220" y="62" width="16" height="38" fill="#b45309"/>
  <text x="56" y="114" font-size="11" text-anchor="middle" fill="#92400e">high-rise homes</text>
  <rect x="272" y="28" width="80" height="80" fill="#bbf7d0"/>
  <circle cx="292" cy="56" r="9" fill="#16a34a"/><circle cx="314" cy="70" r="9" fill="#16a34a"/><circle cx="334" cy="52" r="9" fill="#16a34a"/>
  <text x="312" y="98" font-size="11" text-anchor="middle" fill="#166534">green buffer</text>
  <rect x="272" y="118" width="80" height="80" fill="#cbd5e1"/>
  <rect x="284" y="150" width="40" height="26" fill="#64748b"/><rect x="314" y="134" width="6" height="18" fill="#475569"/>
  <text x="312" y="192" font-size="11" text-anchor="middle" fill="#334155">industry</text>
  <text x="312" y="226" font-size="11" text-anchor="middle" fill="#334155">downwind,</text>
  <text x="312" y="240" font-size="11" text-anchor="middle" fill="#334155">away from homes</text>
</svg>`;

const hierarchySvg = `<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The waste hierarchy as an upside-down pyramid: reduce is the most preferred at the top, then reuse, recycle, recover energy, and landfill as the least preferred at the bottom">
  <rect x="0" y="0" width="360" height="230" fill="#ffffff"/>
  <text x="180" y="18" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">The waste hierarchy</text>
  <polygon points="40,30 320,30 296,68 64,68" fill="#059669"/>
  <text x="180" y="54" font-size="13" font-weight="bold" text-anchor="middle" fill="#ffffff">REDUCE: buy and waste less</text>
  <polygon points="66,72 294,72 270,110 90,110" fill="#10b981"/>
  <text x="180" y="96" font-size="13" font-weight="bold" text-anchor="middle" fill="#ffffff">REUSE: repair, share, refill</text>
  <polygon points="92,114 268,114 244,152 116,152" fill="#84cc16"/>
  <text x="180" y="138" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e293b">RECYCLE (blue bins)</text>
  <polygon points="118,156 242,156 218,192 142,192" fill="#f59e0b"/>
  <text x="180" y="178" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">RECOVER energy</text>
  <polygon points="144,196 216,196 196,222 164,222" fill="#ef4444"/>
  <text x="180" y="213" font-size="11" font-weight="bold" text-anchor="middle" fill="#ffffff">LANDFILL</text>
  <text x="8" y="50" font-size="11" fill="#059669">best</text>
  <text x="8" y="214" font-size="11" fill="#b91c1c">worst</text>
  <line x1="22" y1="60" x2="22" y2="198" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="17,196 27,196 22,204" fill="#64748b"/>
  <text x="352" y="96" font-size="11" text-anchor="end" fill="#475569">most</text>
  <text x="352" y="110" font-size="11" text-anchor="end" fill="#475569">sustainable</text>
  <text x="352" y="196" font-size="11" text-anchor="end" fill="#475569">least</text>
</svg>`;

export const sustainableCitiesExtras: TopicExtras = {
  hook:
    "Cities cover only a tiny slice of the planet's land, yet they use most of its energy. So if you could redesign one city from scratch, what would you change first: the buildings, the buses, the bins or the way people live?",
  didYouKnow: [
    "Cities cover less than 2% of Earth's land surface, but according to UN-Habitat they use about 78% of the world's energy and produce more than 60% of greenhouse gas emissions.",
    "Singapore's NEWater, launched in 2003, turns used water into ultra-clean water. It can already meet up to about 40% of the country's water demand, and the target is about 55% by 2060.",
    "The Tengeh Reservoir floating solar farm in Singapore, opened in 2021, has about 122,000 solar panels covering 45 hectares of water, roughly the size of 45 football fields, and can generate 60 megawatts at peak.",
    "Semakau, Singapore's only landfill, is built offshore from incineration ash and waste. At current rates it is expected to be full by about 2035, which is why Singapore is pushing its 'Zero Waste Nation' plans.",
    "Humanity uses nature's resources about 1.7 times faster than Earth can renew them. In 2025, Earth Overshoot Day (the day we have used up a whole year's worth of nature) fell on 24 July.",
  ],
  experiments: [
    {
      title: "15-minute neighbourhood audit",
      emoji: "🚶",
      materials: ["A printed or phone map of your estate (e.g. OneMap)", "A stopwatch or phone timer", "Coloured pens", "A notebook"],
      steps: [
        "Mark your HDB block or home on the map and draw a circle of about 500 m around it (roughly a 5–10 minute walk).",
        "Walk to the nearest MRT station or bus interchange, hawker centre or market, school, clinic and park. Time each walk.",
        "Colour each place: green if it is under 10 minutes on foot, amber for 10–15 minutes, red if you would need a car or bus.",
        "Score each walk for comfort: is there shade, a covered walkway, a safe crossing, a cycle path or park connector?",
        "Write three improvements a planner could make, and which of the three pillars (social, economic, environmental) each one helps.",
      ],
      science:
        "You are testing whether your area is a 'transit-oriented' or '15-minute' neighbourhood. When daily needs are within walking distance of homes and an MRT/BRT stop, people drive less, which cuts emissions and congestion (environmental), helps those who cannot drive such as children and elderly people (social), and supports local shops (economic). This is exactly the kind of evidence judges look for in the Eco City competition.",
      safety: "Walk with an adult or a friend, in daylight, and use proper crossings. Bring water: Singapore's heat can cause dehydration.",
    },
    {
      title: "One-week household waste audit",
      emoji: "♻️",
      materials: ["Kitchen scale or luggage scale", "Two bags: one for general waste, one for recyclables", "Rubber gloves", "A tally chart"],
      steps: [
        "For seven days, put clean recyclables (paper, plastic, metal, glass) in one bag and everything else in the other.",
        "Each evening, weigh both bags (or estimate by counting items) and record the totals on your tally chart.",
        "At the end of the week, work out your recycling rate: recyclables ÷ total waste × 100.",
        "Look at the general waste: which items could have been avoided (reduce), reused or recycled instead?",
        "Plan one change for next week, repeat the audit and compare the two recycling rates.",
      ],
      science:
        "You measure how your household fits the waste hierarchy (reduce, reuse, recycle, recover, landfill). Most of Singapore's general waste is burned in waste-to-energy plants and the ash goes to Semakau Landfill, so every kilogram you avoid saves landfill space and cuts emissions. Your recycling rate is a small-scale version of the indicator cities use to judge how sustainable they are.",
      safety: "Wear gloves, do not handle broken glass or sharp cans, and wash your hands afterwards. Rinse food containers before sorting.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Designing a transit-oriented eco-neighbourhood",
      svg: todSvg,
      caption:
        "Homes, shops and offices cluster within a 5–10 minute walk of an MRT station, a green corridor doubles as a cycle route and flood space, and industry sits downwind behind a green buffer. Use this layout as a starting point for your Eco City competition design.",
    },
    {
      title: "The waste hierarchy",
      svg: hierarchySvg,
      caption:
        "The higher up the pyramid, the more sustainable the option. Recycling is good, but avoiding waste in the first place (reduce) is better; landfill is the last resort, which matters in a land-scarce city like Singapore.",
    },
  ],
  interactives: ["sustainable-cities:EcoCityDesigner", "sustainable-cities:FootprintCalculator"],
};
