import type { TopicExtras } from "../types";

export const coralReefsExtras: TopicExtras = {
  hook:
    "In the middle of the Pacific there are rings of white sand and palm trees around calm turquoise lagoons, and more than a kilometre beneath them lies the top of a drowned volcano. How did animals smaller than your fingernail build all the way up from it, and why is the same coral now turning ghost-white?",
  didYouKnow: [
    "The Great Barrier Reef is about 2,300 km long and covers roughly 344,400 km², which is bigger than Italy. It is made of around 2,900 separate reefs and 900 islands, making it the largest structure on Earth built by living things.",
    "A healthy coral reef can absorb about 97% of the energy of incoming waves, so reefs act as natural breakwaters that protect coasts from erosion and storm surges.",
    "In 2004 the Great Barrier Reef Marine Park was rezoned, raising the share of strictly protected 'green' no-take zones from under 5% to about 33% of the park.",
    "A single adult crown-of-thorns starfish can eat roughly 6–10 m² of living coral a year, and a female can release tens of millions of eggs in one spawning season. That is why outbreaks can strip whole reefs.",
    "Singapore is estimated to have lost about 60% of its original coral reef area, mostly to land reclamation. Yet its remaining reefs still hold over 250 species of hard coral, and Sisters' Islands Marine Park, Singapore's first marine park, opened in 2014 to protect some of them.",
  ],
  experiments: [
    {
      title: "Murky water light test (make a mini Secchi disk)",
      emoji: "🫙",
      materials: [
        "A tall clear jar, vase or 1.5 L bottle with the top cut off",
        "A white plastic lid that fits inside, plus a black permanent marker",
        "Tap water",
        "A few teaspoons of garden soil or potting mix",
        "A ruler and a notebook",
      ],
      steps: [
        "Colour two opposite quarters of the white lid black, so it looks like a black-and-white pie. This is your Secchi disk, the same tool marine scientists use to measure how clear water is.",
        "Put the disk flat on the bottom of the jar and fill the jar with water. Measure the water depth with the ruler.",
        "Predict: how many teaspoons of soil will it take before you can no longer see the disk?",
        "Add one teaspoon of soil, stir, wait 10 seconds and look straight down. Can you still see the black and white quarters?",
        "Keep adding one teaspoon at a time and record when the disk becomes blurry and when it disappears. Leave the jar for an hour and see how much clearer it becomes as the mud settles.",
      ],
      science:
        "Mud washed off farms and building sites (run-off) makes sea water cloudy, so less sunlight reaches the zooxanthellae algae inside corals. With less light the algae make less food and the coral grows more slowly or dies, and mud can also smother the polyps. This is why river plumes after heavy rain harm inshore parts of the Great Barrier Reef, and why Singapore's reefs, in water clouded by dredging and reclamation, now grow mostly in the top few metres where light still reaches.",
      safety: "Do this outdoors or over a sink, and wash your hands after handling soil.",
    },
    {
      title: "Coral health check on a guided low-tide walk",
      emoji: "🪸",
      materials: [
        "A place on an NParks guided intertidal walk (e.g. Sisters' Islands Marine Park) or a low-tide visit to a rocky shore with an adult",
        "A printed CoralWatch Coral Health Chart (free to download from CoralWatch, University of Queensland), or your own 6-shade colour strip from pale to dark",
        "Clipboard, pencil and a recording table",
        "Covered shoes that can get wet, hat, sunscreen and water",
      ],
      steps: [
        "Check the tide table and go only at a low spring tide with your guide or an adult.",
        "Without touching it, hold the colour chart next to a coral and record the closest shade (1 = very pale, 6 = dark and healthy). Also note the coral's shape (branching, boulder or plate).",
        "Record 15–20 different corals along the path and note any that are completely white (bleached) or covered with fuzzy seaweed (dead).",
        "Back home, work out the average colour score and the percentage of pale or white corals.",
        "Look up the sea temperature for that month (e.g. NOAA Coral Reef Watch online) and discuss: was the water unusually warm? If you can, repeat the survey a few months later and compare.",
      ],
      science:
        "Coral colour comes mostly from the zooxanthellae living in its tissue, so a paler coral has lost some of its algae and is under stress, often from heat. Scientists around the world use exactly this colour chart to track bleaching, and Singapore's reefs bleached during the marine heatwaves of 1998, 2010, 2016 and 2024. Your survey turns a simple observation into data you can compare over time.",
      safety:
        "Only go with a guide or an adult and leave before the tide turns. Never step on, touch or collect corals or animals (it is illegal in a marine park and harms them); walk only on sand or bare rock. Wear covered shoes and protect yourself from the sun.",
    },
  ],
  bonusDiagrams: [
    {
      title: "From farm to reef: how run-off feeds crown-of-thorns outbreaks",
      svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow from sugarcane farms through a river flood plume to the reef, where extra nutrients feed plankton, crown-of-thorns starfish larvae survive and the starfish eat coral" font-family="sans-serif"><rect width="360" height="220" fill="#f8fafc"/><rect x="0" y="0" width="110" height="120" fill="#ecfccb"/><rect x="110" y="0" width="250" height="120" fill="#bae6fd"/><g stroke="#4d7c0f" stroke-width="3"><line x1="12" y1="80" x2="12" y2="50"/><line x1="24" y1="80" x2="24" y2="46"/><line x1="36" y1="80" x2="36" y2="52"/><line x1="48" y1="80" x2="48" y2="44"/></g><rect x="0" y="80" width="110" height="40" fill="#a16207"/><text x="8" y="18" font-size="11" font-weight="700" fill="#365314">Farms</text><text x="8" y="32" font-size="11" fill="#365314">fertiliser + soil</text><path d="M60 100 Q100 95 120 90 Q180 80 240 86" stroke="#8b5a2b" stroke-width="10" fill="none" opacity="0.55" stroke-linecap="round"/><text x="150" y="70" font-size="11" fill="#78350f">muddy flood plume</text><g fill="#16a34a"><circle cx="200" cy="40" r="3"/><circle cx="214" cy="30" r="3"/><circle cx="228" cy="44" r="3"/><circle cx="242" cy="34" r="3"/></g><text x="190" y="20" font-size="11" fill="#14532d">plankton bloom</text><g fill="#7c3aed"><circle cx="300" cy="96" r="7"/><circle cx="322" cy="104" r="7"/></g><path d="M276 120 q10 -14 20 0 q10 -14 20 0 q10 -14 20 0 q10 -14 20 0" fill="#f472b6"/><text x="278" y="80" font-size="11" fill="#4c1d95">starfish</text><rect x="6" y="132" width="80" height="44" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="46" y="150" font-size="11" text-anchor="middle" fill="#78350f">heavy rain,</text><text x="46" y="166" font-size="11" text-anchor="middle" fill="#78350f">run-off</text><rect x="96" y="132" width="80" height="44" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="136" y="150" font-size="11" text-anchor="middle" fill="#14532d">more</text><text x="136" y="166" font-size="11" text-anchor="middle" fill="#14532d">plankton</text><rect x="186" y="132" width="80" height="44" rx="6" fill="#ede9fe" stroke="#7c3aed"/><text x="226" y="150" font-size="11" text-anchor="middle" fill="#4c1d95">more COTS</text><text x="226" y="166" font-size="11" text-anchor="middle" fill="#4c1d95">larvae survive</text><rect x="276" y="132" width="78" height="44" rx="6" fill="#fee2e2" stroke="#dc2626"/><text x="315" y="150" font-size="11" text-anchor="middle" fill="#7f1d1d">coral</text><text x="315" y="166" font-size="11" text-anchor="middle" fill="#7f1d1d">eaten</text><g fill="#334155"><polygon points="94,154 88,150 88,158"/><polygon points="184,154 178,150 178,158"/><polygon points="274,154 268,150 268,158"/></g><text x="180" y="200" font-size="11" text-anchor="middle" fill="#0f172a">Fix: less fertiliser, fewer bare fields, cull starfish,</text><text x="180" y="214" font-size="11" text-anchor="middle" fill="#0f172a">no-take zones keep the fish that eat young starfish</text></svg>`,
      caption:
        "Nutrients from farm fertiliser wash into the sea in flood plumes and feed plankton, which is food for crown-of-thorns starfish (COTS) larvae. More larvae survive, adults swarm the reef and eat the coral. Cutting run-off tackles the cause; culling starfish treats the symptom.",
    },
    {
      title: "What a reef does for people",
      svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A coral reef in the centre with five benefits around it: coastal protection, food, tourism, medicines and biodiversity" font-family="sans-serif"><rect width="360" height="220" fill="#f0f9ff"/><ellipse cx="180" cy="112" rx="58" ry="34" fill="#f9a8d4" stroke="#db2777"/><text x="180" y="108" font-size="12" font-weight="700" text-anchor="middle" fill="#831843">Coral</text><text x="180" y="124" font-size="12" font-weight="700" text-anchor="middle" fill="#831843">reef</text><g stroke="#94a3b8" stroke-width="1.5"><line x1="150" y1="86" x2="96" y2="50"/><line x1="210" y1="86" x2="264" y2="50"/><line x1="124" y1="118" x2="96" y2="150"/><line x1="236" y1="118" x2="264" y2="150"/><line x1="180" y1="146" x2="180" y2="174"/></g><rect x="6" y="20" width="132" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7"/><text x="72" y="38" font-size="11" text-anchor="middle" fill="#075985">Coastal protection</text><text x="72" y="54" font-size="11" text-anchor="middle" fill="#075985">absorbs ~97% wave energy</text><rect x="222" y="20" width="132" height="44" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="288" y="38" font-size="11" text-anchor="middle" fill="#14532d">Food</text><text x="288" y="54" font-size="11" text-anchor="middle" fill="#14532d">fish for coastal families</text><rect x="6" y="140" width="132" height="44" rx="8" fill="#fef3c7" stroke="#d97706"/><text x="72" y="158" font-size="11" text-anchor="middle" fill="#78350f">Tourism (GBR)</text><text x="72" y="174" font-size="11" text-anchor="middle" fill="#78350f">~A$6.4 bn/yr, 64,000 jobs</text><rect x="222" y="140" width="132" height="44" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="288" y="158" font-size="11" text-anchor="middle" fill="#4c1d95">Medicines</text><text x="288" y="174" font-size="11" text-anchor="middle" fill="#4c1d95">new chemicals from reef life</text><rect x="110" y="176" width="140" height="40" rx="8" fill="#fce7f3" stroke="#db2777"/><text x="180" y="192" font-size="11" text-anchor="middle" fill="#831843">Biodiversity</text><text x="180" y="207" font-size="11" text-anchor="middle" fill="#831843">~25% of marine species</text></svg>`,
      caption:
        "Reefs are worth far more than their beauty: they shield coasts from waves (an important link to coastal erosion), feed hundreds of millions of people, earn billions from tourism and may hold future medicines. Tourism figures are a 2017 estimate for the Great Barrier Reef.",
    },
  ],
  interactives: ["coral-reefs:ReefHealthSimulator", "coral-reefs:ReefTypesTimeMachine"],
};
