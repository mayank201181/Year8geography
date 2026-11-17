import type { TopicExtras } from "../types";

export const coastalLandformsExtras: TopicExtras = {
  hook:
    "In January 1990 two tourists walked out across a natural rock bridge on the coast of Victoria, Australia. Minutes later the bridge fell into the sea behind them, and they had to be rescued from the top of a brand-new island by helicopter. How can solid rock that has stood for thousands of years vanish in an afternoon?",
  didYouKnow: [
    "The inner span of Australia's London Bridge (a double arch in Victoria) collapsed on 15 January 1990, stranding two visitors on the newly isolated outer arch — now called London Arch — until a helicopter lifted them off.",
    "Malta's famous Azure Window, a 28 m-high limestone arch on the island of Gozo, collapsed into the sea during a storm on 8 March 2017.",
    "The Twelve Apostles were never twelve: there were only nine stacks when they were named, and one about 50 m tall collapsed in July 2005, leaving eight.",
    "The rocks of the Jurassic Coast in Dorset and East Devon record about 185 million years of Earth history, from the Triassic, through the Jurassic, to the Cretaceous.",
    "Durdle Door gets its name from the Old English word 'thirl', meaning to pierce or drill: a fitting name for an arch drilled through Portland limestone laid down roughly 145 million years ago.",
  ],
  experiments: [
    {
      title: "Headlands and bays in a baking tray",
      emoji: "🏖️",
      materials: [
        "A large baking tray or plastic storage box",
        "Damp sand (soft rock)",
        "4–6 flat stones, bricks of modelling clay or old Lego bricks (hard rock)",
        "Water and a plastic ruler or flat lid to make waves",
        "A phone to take before-and-after photos",
      ],
      steps: [
        "Tilt the tray slightly so the water collects at one end (the 'sea').",
        "Build a straight 'coastline' across the tray from alternating blocks: packed damp sand, then a stone or clay block, then sand, then stone. The bands should run at right angles to the shore, like a discordant coast.",
        "Pour in water until it just reaches the foot of your coastline. Photograph it from above.",
        "Predict: after 100 waves, where will the coastline be most worn back?",
        "Make 100 gentle waves by moving the ruler back and forth in the water at the far end. Photograph again, then make 100 more.",
        "Compare the photos. Mark where the coast has retreated and where it has stood firm. Look for sand washing into the gaps.",
      ],
      science:
        "The soft sand is worn back much faster than the hard blocks, so the straight coastline turns into a zig-zag of bays (soft rock) and headlands (hard rock): differential erosion. You may also see the waves bending round the hard blocks and sand being dropped in the calmer bays, just as beaches form between real headlands such as at Swanage Bay. Real erosion takes thousands of years and also involves hydraulic action and abrasion, which a tray can only hint at.",
      safety: "Do this outdoors or over a sink, and wipe up spilt water so nobody slips.",
    },
    {
      title: "Track longshore drift at East Coast Park",
      emoji: "🧭",
      materials: [
        "A tape measure (at least 10 m) or a pre-measured length of string",
        "Something that floats and is safe to leave, such as an orange or a short piece of wood (take it home afterwards)",
        "A stopwatch (phone) and a compass app",
        "Notebook or phone for a field sketch",
      ],
      steps: [
        "At East Coast Park or Changi Beach, choose a stretch of beach between two of the rock breakwaters. Use the compass to note which way the coast faces and which way the wind is blowing.",
        "Measure 10 m along the shoreline and mark the start and end with sticks pushed into the sand.",
        "Place the float in the water at the start marker where the waves break. Time how long it takes to drift 10 m along the shore. Repeat three times and work out the average speed in metres per minute.",
        "Watch the waves: do they arrive straight-on or at an angle? Which way does the float zig-zag?",
        "Walk along to a breakwater and sketch the beach on both sides. Is the sand wider or higher on one side?",
      ],
      science:
        "If the waves arrive at an angle, the float zig-zags along the shore in the direction of the wind: that is longshore drift, the same process that builds spits such as Hurst Castle Spit and Spurn Head. East Coast Park's offshore breakwaters act like artificial headlands: the beaches between them are curved bays where sand is trapped, and where sand piles up against one side of a breakwater it shows which way the drift is moving.",
      safety: "Go with an adult, stay in the shallows only, never go out on the breakwater rocks, and check the weather for lightning before you go.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Wave refraction: why headlands take the hardest hits",
      svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of wave crests bending around a headland so that wave energy converges on the headland and spreads out in the bays" font-family="sans-serif"><rect width="360" height="220" fill="#bae6fd"/><path d="M0 220 V150 Q60 150 100 120 Q130 60 180 55 Q230 60 260 120 Q300 150 360 150 V220 Z" fill="#bbf7d0" stroke="#166534"/><text x="180" y="95" font-size="12" font-weight="bold" text-anchor="middle" fill="#14532d">HEADLAND</text><text x="14" y="143" font-size="12" font-weight="bold" fill="#0c4a6e">BAY</text><text x="325" y="143" font-size="12" font-weight="bold" fill="#0c4a6e">BAY</text><path d="M0 18 H360" stroke="#0369a1" stroke-width="2" fill="none"/><path d="M0 36 Q180 30 360 36" stroke="#0369a1" stroke-width="2" fill="none"/><path d="M0 70 Q90 66 130 46 Q180 30 230 46 Q270 66 360 70" stroke="#0369a1" stroke-width="2" fill="none"/><path d="M0 120 Q60 116 95 100 Q130 48 180 44 Q230 48 265 100 Q300 116 360 120" stroke="#0369a1" stroke-width="2" fill="none"/><line x1="150" y1="5" x2="168" y2="44" stroke="#dc2626" stroke-width="2"/><line x1="210" y1="5" x2="192" y2="44" stroke="#dc2626" stroke-width="2"/><line x1="60" y1="5" x2="40" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="300" y1="5" x2="320" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/><text x="180" y="14" font-size="11" text-anchor="middle" fill="#7f1d1d">energy converges</text><text x="8" y="100" font-size="11" fill="#7f1d1d">energy spreads</text><text x="352" y="100" font-size="11" text-anchor="end" fill="#7f1d1d">energy spreads</text><text x="352" y="30" font-size="11" text-anchor="end" fill="#0c4a6e">wave crests</text></svg>`,
      caption:
        "Waves slow down in shallow water, so the part of each crest nearest the headland slows first and the crest bends (refracts) to wrap around it. Energy (red lines) is focused onto the headland, which is eroded into cliffs, caves, arches and stacks, while it is spread out in the bays, where sand is deposited as beaches.",
    },
    {
      title: "Spit, bar or tombolo? Spot the difference",
      svg: `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three small plan-view maps comparing a spit attached at one end, a bar joining two headlands with a lagoon behind, and a tombolo joining an island to the mainland" font-family="sans-serif"><rect width="360" height="170" fill="#bae6fd"/><line x1="120" y1="0" x2="120" y2="170" stroke="#ffffff" stroke-width="3"/><line x1="240" y1="0" x2="240" y2="170" stroke="#ffffff" stroke-width="3"/><text x="60" y="16" font-size="12" font-weight="bold" text-anchor="middle" fill="#0c4a6e">SPIT</text><text x="180" y="16" font-size="12" font-weight="bold" text-anchor="middle" fill="#0c4a6e">BAR</text><text x="300" y="16" font-size="12" font-weight="bold" text-anchor="middle" fill="#0c4a6e">TOMBOLO</text><path d="M0 30 H40 V100 H0 Z" fill="#bbf7d0" stroke="#166534"/><path d="M85 30 H118 V120 H85 Z" fill="#bbf7d0" stroke="#166534"/><path d="M40 98 H70 Q78 98 76 88" stroke="#fbbf24" stroke-width="7" fill="none" stroke-linecap="round"/><text x="8" y="120" font-size="11" fill="#78350f">joined at one</text><text x="8" y="133" font-size="11" fill="#78350f">end only</text><text x="8" y="158" font-size="11" fill="#0c4a6e">Hurst Castle</text><path d="M122 30 H160 V110 H122 Z" fill="#bbf7d0" stroke="#166534"/><path d="M200 30 H238 V110 H200 Z" fill="#bbf7d0" stroke="#166534"/><path d="M160 30 H200 V104 H160 Z" fill="#7dd3fc"/><path d="M160 106 H200" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/><text x="180" y="70" font-size="11" text-anchor="middle" fill="#0c4a6e">lagoon</text><text x="128" y="133" font-size="11" fill="#78350f">closes a bay</text><text x="128" y="158" font-size="11" fill="#0c4a6e">Slapton Sands</text><path d="M242 120 H358 V140 H242 Z" fill="#bbf7d0" stroke="#166534"/><circle cx="300" cy="55" r="20" fill="#bbf7d0" stroke="#166534"/><path d="M300 76 V119" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/><text x="300" y="59" font-size="11" text-anchor="middle" fill="#14532d">island</text><text x="248" y="133" font-size="11" fill="#14532d">mainland</text><text x="248" y="158" font-size="11" fill="#0c4a6e">St Ninian's</text></svg>`,
      caption:
        "All three are ridges of sand or shingle built by longshore drift and deposition. A spit is attached to land at one end only; a bar grows right across a bay, trapping a lagoon; a tombolo joins an island to the mainland.",
    },
  ],
  interactives: ["coastal-landforms:HeadlandTimeLapse", "coastal-landforms:SpitBuilder"],
};
