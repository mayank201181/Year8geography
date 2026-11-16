import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "The Great Barrier Reef is the largest structure on Earth built by living things — you can see it from space — yet its builders are animals smaller than your fingernail. So why can a few weeks of sea water just 1–2 °C too warm turn huge areas of it white?",

  didYouKnow: [
    "Coral reefs cover less than 1% of the ocean floor, yet about a quarter of all marine species depend on them at some point in their lives.",
    "A coral is an animal, not a plant — a colony of tiny polyps related to jellyfish and sea anemones. Most of its food, though, is made by algae living inside it, using sunlight.",
    "Much of the white sand on tropical beaches is parrotfish poo: they scrape algae off coral with beak-like teeth and grind the coral into fine sand.",
    "Singapore's waters, right next to one of the world's busiest ports, are home to more than 250 species of hard coral.",
    "On a few nights after a full moon in late spring, many corals on the Great Barrier Reef release their eggs and sperm at the same time — a mass spawning that looks like an underwater snowstorm.",
    "In the 2016 marine heatwave, roughly 30% of the Great Barrier Reef's shallow-water corals died, with the far north hit hardest.",
  ],

  activities: [
    {
      title: "The acid test: why acidic oceans worry coral scientists",
      emoji: "🥚",
      materials: [
        "Two clean eggshells (calcium carbonate, like coral skeletons)",
        "Two clear glasses or jars",
        "White vinegar and tap water",
        "Kitchen scales (optional) and a phone camera",
      ],
      steps: [
        "Rinse and dry the eggshells. If you have scales, weigh each one and write the mass down.",
        "Half-fill one glass with vinegar and the other with water. Label them.",
        "Drop one eggshell into each glass. Watch the vinegar glass closely for the first minute — what do you see forming on the shell?",
        "Leave both for 24 hours, then take photos. Rinse, dry and reweigh the shells.",
        "Work out the percentage change in mass for each shell: (new − old) ÷ old × 100.",
      ],
      maths:
        "The bubbles are carbon dioxide released as the acid dissolves calcium carbonate — the same material corals use to build their skeletons. Real sea water is NOT acidic like vinegar (its pH is about 8.1), and this is a strong exaggeration. But as the ocean absorbs CO₂ from burning fossil fuels its pH has slowly fallen from about 8.2, which makes it harder for corals to build skeletons. That's ocean acidification — a global threat no local reef manager can stop.",
    },
    {
      title: "Make a Secchi disc: how mud steals the light",
      emoji: "🔦",
      materials: [
        "A white plastic lid (a takeaway-tub lid works)",
        "A black marker and some string",
        "A tall clear container or bucket of water",
        "A few spoonfuls of garden soil",
        "A ruler or tape measure",
      ],
      steps: [
        "Colour two opposite quarters of the lid black, like a pie chart. Tie the string through a hole in the middle — this is a Secchi disc, the tool scientists use to measure water clarity.",
        "Lower the disc slowly into clear water and measure how deep it is when you can no longer see it (if your container isn't deep enough, note that you can still see it at the bottom).",
        "Stir in one spoonful of soil and repeat. Then two spoonfuls, then three. Record each depth in a table.",
        "Plot a line graph: spoonfuls of soil (x-axis) against depth at which the disc disappears (y-axis).",
        "Next time you visit East Coast Park or take a ferry to the Southern Islands, look at the colour of the sea. Is it clear blue or green-brown?",
      ],
      maths:
        "Sediment scatters and absorbs sunlight, so light fades much faster with depth in muddy water. Coral polyps rely on their zooxanthellae, which need light to photosynthesise — so murky water squeezes corals into a thinner and thinner shallow strip. That's why Singapore's corals, in water clouded by sediment from reclamation, dredging and shipping, mostly grow in shallow water, and why farm run-off of soil is such a threat to the Great Barrier Reef.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Darwin's theory: from fringing reef to atoll",
      caption:
        "As a volcanic island slowly sinks, the reef keeps growing upwards towards the light. A fringing reef becomes a barrier reef with a lagoon, and finally an atoll when the island disappears.",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three cross-sections showing a fringing reef around a volcanic island, a barrier reef with a lagoon around a smaller sinking island, and an atoll ring of reef with only a lagoon in the middle">
<rect x="0" y="0" width="480" height="300" fill="#ffffff"/>
<g font-family="sans-serif" font-size="12" fill="#1f2937">
<text x="80" y="22" text-anchor="middle" font-weight="bold">1. Fringing reef</text>
<text x="240" y="22" text-anchor="middle" font-weight="bold">2. Barrier reef</text>
<text x="400" y="22" text-anchor="middle" font-weight="bold">3. Atoll</text>
</g>
<rect x="5" y="110" width="150" height="150" fill="#bae6fd"/>
<rect x="165" y="110" width="150" height="150" fill="#bae6fd"/>
<rect x="325" y="110" width="150" height="150" fill="#bae6fd"/>
<line x1="5" y1="110" x2="155" y2="110" stroke="#334155" stroke-width="1.5"/>
<line x1="165" y1="110" x2="315" y2="110" stroke="#334155" stroke-width="1.5"/>
<line x1="325" y1="110" x2="475" y2="110" stroke="#334155" stroke-width="1.5"/>
<path d="M30 260 L80 50 L130 260 Z" fill="#d6d3d1" stroke="#334155" stroke-width="1.5"/>
<path d="M44 200 L36 110 L52 110 L58 200 Z" fill="#fecaca" stroke="#334155"/>
<path d="M116 200 L124 110 L108 110 L102 200 Z" fill="#fecaca" stroke="#334155"/>
<path d="M200 260 L240 90 L280 260 Z" fill="#d6d3d1" stroke="#334155" stroke-width="1.5"/>
<path d="M176 260 L180 110 L196 110 L198 260 Z" fill="#fecaca" stroke="#334155"/>
<path d="M304 260 L300 110 L284 110 L282 260 Z" fill="#fecaca" stroke="#334155"/>
<path d="M370 260 L400 150 L430 260 Z" fill="#d6d3d1" stroke="#334155" stroke-width="1.5"/>
<path d="M336 260 L340 110 L358 110 L362 260 Z" fill="#fecaca" stroke="#334155"/>
<path d="M464 260 L460 110 L442 110 L438 260 Z" fill="#fecaca" stroke="#334155"/>
<g font-family="sans-serif" font-size="11" fill="#1f2937">
<text x="80" y="104" text-anchor="middle">volcanic island</text>
<text x="240" y="84" text-anchor="middle">island sinking</text>
<text x="400" y="104" text-anchor="middle">lagoon</text>
<text x="218" y="128" text-anchor="middle">lagoon</text>
<text x="80" y="282" text-anchor="middle">reef hugs the shore</text>
<text x="240" y="282" text-anchor="middle">lagoon between reef and land</text>
<text x="400" y="282" text-anchor="middle">ring of reef, no island</text>
<text x="400" y="240" text-anchor="middle">old volcano</text>
</g>
<path d="M150 60 L176 60" stroke="#334155" stroke-width="2" marker-end="url(#a)"/>
<path d="M310 60 L336 60" stroke="#334155" stroke-width="2" marker-end="url(#a)"/>
<defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#334155"/></marker></defs>
<g font-family="sans-serif" font-size="10" fill="#334155">
<text x="163" y="52" text-anchor="middle">sinks</text>
<text x="323" y="52" text-anchor="middle">sinks</text>
</g>
</svg>`,
    },
    {
      title: "Inside a coral polyp",
      caption:
        "Each polyp sits in a cup of calcium carbonate it builds itself. Algae (zooxanthellae) in its tissue make sugar by photosynthesis; at night the tentacles catch plankton. Bleaching is when heat-stressed polyps expel these algae.",
      svg: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Labelled diagram of a coral polyp showing tentacles, mouth, tissue containing zooxanthellae algae, and the calcium carbonate skeleton cup it sits in">
<rect x="0" y="0" width="440" height="300" fill="#ffffff"/>
<rect x="110" y="200" width="160" height="80" fill="#d6d3d1" stroke="#334155" stroke-width="1.5"/>
<path d="M130 200 L130 120 Q190 100 250 120 L250 200 Z" fill="#fde68a" stroke="#334155" stroke-width="1.5"/>
<path d="M150 200 L150 170 L230 170 L230 200 Z" fill="#ffffff" stroke="#334155" stroke-dasharray="3 3"/>
<g stroke="#334155" stroke-width="7" stroke-linecap="round" fill="none" opacity="0.9">
<path d="M140 120 Q120 80 100 60" stroke="#fdba74"/>
<path d="M160 112 Q150 70 140 40" stroke="#fdba74"/>
<path d="M190 108 Q190 66 190 30" stroke="#fdba74"/>
<path d="M220 112 Q230 70 240 40" stroke="#fdba74"/>
<path d="M240 120 Q260 80 280 60" stroke="#fdba74"/>
</g>
<ellipse cx="190" cy="118" rx="12" ry="5" fill="#7c2d12"/>
<g fill="#65a30d">
<circle cx="145" cy="140" r="4"/><circle cx="160" cy="155" r="4"/><circle cx="175" cy="135" r="4"/><circle cx="205" cy="140" r="4"/><circle cx="220" cy="155" r="4"/><circle cx="238" cy="138" r="4"/><circle cx="190" cy="152" r="4"/>
</g>
<g stroke="#334155" stroke-width="1">
<line x1="280" y1="60" x2="320" y2="50"/>
<line x1="202" y1="118" x2="320" y2="100"/>
<line x1="238" y1="138" x2="320" y2="150"/>
<line x1="230" y1="185" x2="320" y2="200"/>
<line x1="270" y1="250" x2="320" y2="250"/>
</g>
<g font-family="sans-serif" font-size="12" fill="#1f2937">
<text x="324" y="54">tentacles with</text>
<text x="324" y="68">stinging cells</text>
<text x="324" y="104">mouth</text>
<text x="324" y="148">zooxanthellae</text>
<text x="324" y="162">(algae) in tissue</text>
<text x="324" y="204">stomach</text>
<text x="324" y="248">calcium carbonate</text>
<text x="324" y="262">skeleton (cup)</text>
<text x="20" y="40">sunlight →</text>
<text x="20" y="54">algae make sugar</text>
<text x="20" y="290">many reef-coral polyps are only a few millimetres across</text>
</g>
<g stroke="#f59e0b" stroke-width="2">
<line x1="60" y1="70" x2="120" y2="130"/>
<line x1="40" y1="80" x2="110" y2="150"/>
</g>
</svg>`,
    },
  ],

  history: {
    title: "Darwin's atoll puzzle",
    story:
      "In 1836, near the end of his voyage on HMS Beagle, the young Charles Darwin stepped ashore on the Cocos (Keeling) Islands in the Indian Ocean — a ring of low coral islands around a lagoon. How could corals, which only live in shallow, sunlit water, build a ring in the middle of a deep ocean? Darwin's answer, published in 1842, was bold: the corals first grew as a fringing reef around a volcanic island. As the island slowly sank, the corals kept growing upwards towards the light, becoming a barrier reef and finally an atoll once the island vanished. Many scientists doubted him for over a century. Then, in the early 1950s, engineers drilling on Enewetak atoll in the Pacific bored through more than 1,000 m of coral limestone — and hit volcanic rock. Darwin had been right.",
  },
};
