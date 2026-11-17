import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "The Great Barrier Reef is the largest structure built by living things on Earth — yet the biggest threat to it comes from chimneys and car exhausts thousands of kilometres away. How do you protect something when the main danger is global?",
  didYouKnow: [
    "The Great Barrier Reef Marine Park covers about 344,400 km² — bigger than the United Kingdom, Switzerland and the Netherlands put together.",
    "When the Marine Park was rezoned in 2004, green no-take zones jumped from under 5% to about 33% of the park — at the time one of the biggest increases in marine protection anywhere in the world.",
    "Divers kill crown-of-thorns starfish with a single injection of household-strength vinegar or bile salts. A single female starfish can release tens of millions of eggs in one spawning season, which is why outbreaks build so fast.",
    "Singapore's waters hold over 250 species of hard coral — about a third of the world's hard coral species — in an area smaller than many single reefs on the Great Barrier Reef.",
    "Many visitors to the Great Barrier Reef pay a small Environmental Management Charge with their trip; the money helps fund reef research, education and management.",
  ],
  activities: [
    {
      title: "Zone your own 'reef' on the dining table",
      emoji: "🗺️",
      materials: ["A large sheet of paper (your reef)", "Green, yellow and blue pens or sticky notes", "Small dried beans or buttons (fish)", "A ruler", "A calculator"],
      steps: [
        "Draw a long reef shape on the paper and divide it into 10 equal strips — each strip is 10% of your marine park.",
        "Scatter 40 beans evenly across the reef: these are your fish.",
        "Colour 3 strips green (no-take), 2 yellow (limited fishing) and 5 blue (general use) — roughly the GBR pattern.",
        "Play 'fishing season': a family member 'fishes' by removing every bean from blue strips and half the beans from yellow strips. Green beans stay.",
        "Breeding: each strip with 3 or more beans gets 2 new beans, and 1 bean from every green strip 'spills over' into the next blue strip. Repeat for three seasons.",
        "Try again with 0 green strips and then 8 green strips. Record total beans caught each time and work out the percentage of the reef that was protected.",
      ],
      maths: "This models the idea behind zoning on the Great Barrier Reef: fish in no-take green zones grow, breed and spill over into fished areas. Too little protection and stocks collapse; too much and fishers have nowhere to fish. Managers look for a balance that is sustainable for both wildlife and people — the reason about a third of the reef became green zone in 2004.",
    },
    {
      title: "Reef-safe audit of your family's beach bag",
      emoji: "🧴",
      materials: ["Your family's sunscreen bottles", "Snorkelling or swimming kit", "A notebook", "Internet access with a parent (to look up ingredients)"],
      steps: [
        "Read the ingredient list on each sunscreen. Note whether it contains oxybenzone or octinoxate, two chemicals linked to coral damage.",
        "Check whether your swim kit includes a rash vest or long-sleeved swim top, which cuts how much sunscreen you need.",
        "List three reef rules for your next trip to Sisters' Islands, Pulau Ubin or a holiday reef (for example: never stand on coral, don't feed fish, take all rubbish home).",
        "Estimate your family's car or taxi trips to the beach in a year and think of one lower-carbon option (MRT plus walking, or car-pooling).",
        "Make a one-page 'Reef-safe family plan' and stick it on the fridge.",
      ],
      maths: "Local threats such as trampling, chemicals and litter can be cut by individual behaviour, just as rules on the Great Barrier Reef control anchoring and tourism. But the biggest threat, ocean warming, comes from greenhouse gas emissions worldwide — so cutting your own carbon footprint is part of protecting reefs too. This shows the difference between local and global action.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Local and global threats — and who can tackle them",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram sorting reef threats into local threats that Australian managers can control and global threats that need worldwide action, with management responses for each.">
<rect x="0" y="0" width="480" height="300" fill="#ffffff"/>
<text x="240" y="22" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Threats to the Great Barrier Reef</text>
<rect x="12" y="36" width="218" height="250" rx="10" fill="#bbf7d0" stroke="#334155"/>
<rect x="250" y="36" width="218" height="250" rx="10" fill="#fecaca" stroke="#334155"/>
<text x="121" y="58" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">LOCAL threats</text>
<text x="359" y="58" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">GLOBAL threats</text>
<text x="24" y="84" font-size="12" font-family="sans-serif" fill="#1f2937">• Farm run-off → water-quality rules</text>
<text x="24" y="108" font-size="12" font-family="sans-serif" fill="#1f2937">• Overfishing → green no-take zones</text>
<text x="24" y="132" font-size="12" font-family="sans-serif" fill="#1f2937">• Crown-of-thorns → culling</text>
<text x="24" y="156" font-size="12" font-family="sans-serif" fill="#1f2937">• Anchors → mooring buoys</text>
<text x="24" y="180" font-size="12" font-family="sans-serif" fill="#1f2937">• Tourists → permits, limits</text>
<text x="24" y="204" font-size="12" font-family="sans-serif" fill="#1f2937">• Ships → pilots, shipping lanes</text>
<text x="121" y="240" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">Australian managers</text>
<text x="121" y="256" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">CAN control these</text>
<text x="262" y="84" font-size="12" font-family="sans-serif" fill="#1f2937">• Warming seas → bleaching</text>
<text x="262" y="108" font-size="12" font-family="sans-serif" fill="#1f2937">• Marine heatwaves</text>
<text x="262" y="132" font-size="12" font-family="sans-serif" fill="#1f2937">• Ocean acidification</text>
<text x="262" y="156" font-size="12" font-family="sans-serif" fill="#1f2937">• Stronger cyclones</text>
<text x="262" y="196" font-size="12" font-family="sans-serif" fill="#1f2937">Cause: greenhouse gases</text>
<text x="262" y="212" font-size="12" font-family="sans-serif" fill="#1f2937">from every country</text>
<text x="359" y="240" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">Needs WORLDWIDE cuts</text>
<text x="359" y="256" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">in emissions</text>
</svg>`,
      caption: "Local management makes the reef more resilient, so it recovers faster after bleaching — but only global emissions cuts can stop the warming that causes mass bleaching.",
    },
    {
      title: "GBR zoning: what you can do where (simplified)",
      svg: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table of four Great Barrier Reef zones — green, yellow, light blue and pink — showing whether snorkelling, line fishing and trawling are allowed in each.">
<rect x="0" y="0" width="480" height="250" fill="#ffffff"/>
<text x="240" y="22" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Zoning rules (simplified)</text>
<text x="200" y="50" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Snorkel</text>
<text x="300" y="50" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Line fish</text>
<text x="400" y="50" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Trawl</text>
<rect x="12" y="62" width="120" height="36" fill="#4ade80" stroke="#334155"/>
<text x="72" y="84" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Green</text>
<text x="200" y="85" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#15803d">✔</text>
<text x="300" y="85" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#b91c1c">✘</text>
<text x="400" y="85" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#b91c1c">✘</text>
<rect x="12" y="104" width="120" height="36" fill="#fde047" stroke="#334155"/>
<text x="72" y="126" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Yellow</text>
<text x="200" y="127" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#15803d">✔</text>
<text x="300" y="127" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#a16207">limited</text>
<text x="400" y="127" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#b91c1c">✘</text>
<rect x="12" y="146" width="120" height="36" fill="#bae6fd" stroke="#334155"/>
<text x="72" y="168" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Light blue</text>
<text x="200" y="169" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#15803d">✔</text>
<text x="300" y="169" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#15803d">✔</text>
<text x="400" y="169" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#15803d">✔</text>
<rect x="12" y="188" width="120" height="36" fill="#f9a8d4" stroke="#334155"/>
<text x="72" y="210" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Pink</text>
<text x="300" y="211" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">No entry without a permit</text>
<text x="240" y="242" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Green = Marine National Park · Yellow = Conservation Park · Light blue = General Use · Pink = Preservation</text>
</svg>`,
      caption: "Green zones (about 33% of the park since 2004) are 'look but don't take'. The more damaging the activity, the fewer zones allow it.",
    },
  ],
  history: {
    title: "The oil-drilling fight that created the Marine Park",
    story: "In the late 1960s, companies applied to drill for oil on the Great Barrier Reef, and a plan was floated to mine coral limestone from Ellison Reef for fertiliser. A small group of campaigners, including the poet Judith Wright and the artist and conservationist John Büsst, fought back with the 'Save the Reef' campaign. Trade unions joined in, refusing to work on drilling rigs. Public anger grew further after the oil tanker Torrey Canyon spilled oil off England in 1967, showing what a disaster could do to a coast. A Royal Commission was set up, and in 1975 the Australian Parliament passed the Great Barrier Reef Marine Park Act, which banned oil drilling and mining on the reef. Six years later, in 1981, the reef became a World Heritage Site.",
  },
};
