import type { Paper } from "../../types.ts";

// ----------------------------------------------------------------------------
// Resource diagrams
// ----------------------------------------------------------------------------

const CACTUS = `<svg viewBox="0 0 360 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a desert cactus with four labelled features: A spines on the stem, B a swollen ribbed stem, C wide shallow roots just under the surface, D one long root growing straight down"><rect x="0" y="0" width="360" height="270" fill="#ffffff"/><rect x="0" y="170" width="360" height="100" fill="#fde68a"/><line x1="0" y1="170" x2="360" y2="170" stroke="#334155" stroke-width="2"/><path d="M200 112 H228 V72" fill="none" stroke="#bbf7d0" stroke-width="16" stroke-linecap="round"/><rect x="155" y="40" width="50" height="130" rx="25" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><g stroke="#334155" stroke-width="1"><line x1="170" y1="52" x2="170" y2="168"/><line x1="180" y1="44" x2="180" y2="168"/><line x1="190" y1="52" x2="190" y2="168"/></g><g stroke="#1f2937" stroke-width="1.5"><line x1="155" y1="70" x2="143" y2="64"/><line x1="155" y1="95" x2="143" y2="89"/><line x1="155" y1="120" x2="143" y2="114"/><line x1="205" y1="80" x2="217" y2="74"/><line x1="205" y1="140" x2="217" y2="134"/><line x1="160" y1="52" x2="150" y2="44"/></g><g stroke="#7c2d12" stroke-width="2.5" fill="none"><path d="M165 170 Q110 182 30 186"/><path d="M195 170 Q250 182 330 186"/><path d="M175 175 Q120 192 60 200"/><path d="M180 170 L180 258"/></g><g font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937"><text x="96" y="60">A</text><text x="262" y="150">B</text><text x="30" y="214">C</text><text x="192" y="252">D</text></g><g stroke="#1f2937" stroke-width="1"><line x1="108" y1="56" x2="141" y2="63"/><line x1="258" y1="146" x2="207" y2="140"/><line x1="42" y1="208" x2="58" y2="199"/><line x1="190" y1="248" x2="182" y2="240"/></g><text x="300" y="164" font-family="sans-serif" font-size="11" fill="#1f2937">ground</text></svg>`;

const FOXES = `<svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two fox heads drawn to the same scale. Fox X from the Sahara has very large ears. Fox Y from the Arctic tundra has small rounded ears and a shorter muzzle."><rect x="0" y="0" width="380" height="230" fill="#ffffff"/><polygon points="72,128 52,30 102,112" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="128,128 148,30 98,112" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><circle cx="100" cy="140" r="34" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="88,160 100,190 112,160" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><circle cx="88" cy="136" r="3" fill="#1f2937"/><circle cx="112" cy="136" r="3" fill="#1f2937"/><polygon points="258,124 260,100 278,116" fill="#e0f2fe" stroke="#1f2937" stroke-width="2"/><polygon points="302,124 300,100 282,116" fill="#e0f2fe" stroke="#1f2937" stroke-width="2"/><circle cx="280" cy="140" r="34" fill="#e0f2fe" stroke="#1f2937" stroke-width="2"/><polygon points="270,162 280,178 290,162" fill="#e0f2fe" stroke="#1f2937" stroke-width="2"/><circle cx="268" cy="136" r="3" fill="#1f2937"/><circle cx="292" cy="136" r="3" fill="#1f2937"/><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="100" y="212">Fox X: Sahara Desert</text><text x="280" y="212">Fox Y: Arctic tundra</text></g></svg>`;

const HUDDLE = `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bird's-eye view of an emperor penguin huddle. Wind blows from the left. Birds on the windward edge are labelled cold and exposed; birds in the centre are labelled sheltered and warmer. Curved arrows show birds slowly shuffling from the edge into the centre."><rect x="0" y="0" width="400" height="230" fill="#ffffff"/><ellipse cx="220" cy="115" rx="105" ry="80" fill="#e0f2fe" stroke="#334155" stroke-dasharray="4 3"/><g fill="#1f2937"><circle cx="140" cy="115" r="9"/><circle cx="150" cy="85" r="9"/><circle cx="150" cy="145" r="9"/><circle cx="175" cy="65" r="9"/><circle cx="175" cy="165" r="9"/><circle cx="205" cy="55" r="9"/><circle cx="205" cy="175" r="9"/><circle cx="240" cy="55" r="9"/><circle cx="240" cy="175" r="9"/><circle cx="272" cy="65" r="9"/><circle cx="272" cy="165" r="9"/><circle cx="296" cy="90" r="9"/><circle cx="296" cy="140" r="9"/><circle cx="305" cy="115" r="9"/></g><g fill="#fecaca" stroke="#1f2937"><circle cx="180" cy="100" r="9"/><circle cx="180" cy="130" r="9"/><circle cx="210" cy="85" r="9"/><circle cx="210" cy="115" r="9"/><circle cx="210" cy="145" r="9"/><circle cx="240" cy="85" r="9"/><circle cx="240" cy="115" r="9"/><circle cx="240" cy="145" r="9"/><circle cx="268" cy="100" r="9"/><circle cx="268" cy="130" r="9"/></g><g stroke="#334155" stroke-width="2" fill="none"><line x1="20" y1="80" x2="110" y2="80"/><line x1="20" y1="115" x2="110" y2="115"/><line x1="20" y1="150" x2="110" y2="150"/><polyline points="102,74 110,80 102,86"/><polyline points="102,109 110,115 102,121"/><polyline points="102,144 110,150 102,156"/><path d="M175 40 Q215 20 255 40"/><polyline points="247,34 255,40 246,44"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="20" y="66">Freezing wind</text><text x="20" y="200">Black = edge: cold, exposed</text><text x="200" y="215">Pink = centre: sheltered, warmer</text><text x="262" y="30">birds shuffle round</text></g></svg>`;

const ALTITUDE = `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mountain profile with lines at sea level, 3,000 m, 5,500 m and 8,849 m (Everest summit). Air pressure is about 100, 70, 50 and 33 per cent of sea level respectively. The air is about 21 per cent oxygen at every height."><rect x="0" y="0" width="420" height="260" fill="#ffffff"/><polygon points="20,230 150,20 280,230" fill="#d6d3d1" stroke="#1f2937" stroke-width="2"/><polygon points="150,20 132,50 168,50" fill="#e0f2fe" stroke="#1f2937"/><g stroke="#334155" stroke-dasharray="5 4"><line x1="20" y1="230" x2="300" y2="230"/><line x1="64" y1="159" x2="300" y2="159"/><line x1="101" y1="99" x2="300" y2="99"/><line x1="150" y1="20" x2="300" y2="20"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="305" y="234">0 m: 100%</text><text x="305" y="163">3,000 m: about 70%</text><text x="305" y="103">5,500 m: about 50%</text><text x="305" y="24">8,849 m: about 33%</text><text x="20" y="252">Air pressure as % of sea level · oxygen = about 21% of the air at all heights</text></g></svg>`;

const SKIN = `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section through the body covering of a polar bear with four layers from the outside in: A a layer of long hairs, B a thin dark layer, C a thick pale yellow layer, D a red layer deepest inside the body"><rect x="0" y="0" width="380" height="220" fill="#ffffff"/><text x="20" y="18" font-family="sans-serif" font-size="12" fill="#1f2937">Outside: freezing air and sea water</text><rect x="20" y="28" width="280" height="50" fill="#f8fafc" stroke="#334155"/><g stroke="#94a3b8"><line x1="40" y1="78" x2="46" y2="32"/><line x1="70" y1="78" x2="76" y2="32"/><line x1="100" y1="78" x2="106" y2="32"/><line x1="130" y1="78" x2="136" y2="32"/><line x1="160" y1="78" x2="166" y2="32"/><line x1="190" y1="78" x2="196" y2="32"/><line x1="220" y1="78" x2="226" y2="32"/><line x1="250" y1="78" x2="256" y2="32"/><line x1="280" y1="78" x2="286" y2="32"/></g><rect x="20" y="78" width="280" height="8" fill="#1f2937"/><rect x="20" y="86" width="280" height="78" fill="#fde68a" stroke="#334155"/><rect x="20" y="164" width="280" height="36" fill="#fecaca" stroke="#334155"/><g font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937"><text x="315" y="58">A</text><text x="315" y="87">B</text><text x="315" y="130">C</text><text x="315" y="187">D</text></g><text x="20" y="214" font-family="sans-serif" font-size="12" fill="#1f2937">Inside the body</text></svg>`;

// ----------------------------------------------------------------------------
// Papers
// ----------------------------------------------------------------------------

export const mcqPapers: Paper[] = [
  // ============================ PAPER 1 ====================================
  {
    id: "adaptations-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        id: "adaptations-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "what-is-adaptation",
        question: "Which is the best definition of an **adaptation**?",
        options: [
          "A feature or behaviour that helps a living thing survive and reproduce in its environment",
          "A change an animal decides to make during its own life to cope with a new place",
          "Any feature an animal has, whether or not it helps it survive",
          "Moving away from a habitat when conditions get worse",
        ],
        answerIndex: 0,
        explanation:
          "An adaptation is a feature (body part, behaviour or body process) that helps an organism survive and reproduce where it lives. Animals do not *decide* to change their bodies — adaptations build up over many generations because individuals with helpful features survive and breed more. Moving away (migration) can be one example of a behavioural adaptation, but it is not the definition.",
        hints: ["Which option says the feature must *help* the organism?"],
        strategy: "Spot the misconception",
      },
      {
        id: "adaptations-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "desert-adaptations",
        question: "What does a camel's hump mainly store?",
        options: ["Water", "Fat", "Air to keep it cool", "Undigested food"],
        answerIndex: 1,
        explanation:
          "The hump is a store of **fat**, an energy reserve for when food is scarce. 'Water' is the famous myth — camels hold water in their blood and body tissues like other mammals, and save it with very concentrated urine and dry dung, not in a hump tank.",
        hints: ["It is an energy store — think about what your body stores energy as."],
        strategy: "Spot the misconception",
      },
      {
        id: "adaptations-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "polar-adaptations",
        question: "Seals and whales have a thick layer of fat under their skin that keeps them warm in icy water. What is it called?",
        options: ["Fur", "Permafrost", "Blubber", "Cuticle"],
        answerIndex: 2,
        explanation:
          "**Blubber** is the thick fat layer that insulates seals, whales and polar bears and also stores energy. Permafrost is permanently frozen ground, and a cuticle is the waxy coat on a plant — neither is part of an animal.",
        hints: ["It is a layer of fat, not hair."],
      },
      {
        id: "adaptations-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "mountain-adaptations",
        question: "A trekker's body slowly gets used to the thin air at high altitude over several days and weeks. What is this called?",
        options: ["Evolution", "Hibernation", "Migration", "Acclimatisation"],
        answerIndex: 3,
        explanation:
          "**Acclimatisation** is one person's body adjusting during their own lifetime (breathing harder, making more red blood cells). Evolution is a change in a whole population over many generations — it cannot happen to one trekker in a fortnight.",
        hints: ["It happens within one person's life, in days or weeks — not over generations."],
      },
      {
        id: "adaptations-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "desert-adaptations",
        diagram: CACTUS,
        question: "Look at the cactus diagram. Label **A** points to the spines. What are cactus spines?",
        options: [
          "Thorns that grow out of the stem to store water",
          "Leaves that have been changed (modified) into thin, hard points",
          "Roots that grow above ground to catch dew",
          "Hairs that soak up water vapour from the air",
        ],
        answerIndex: 1,
        explanation:
          "Cactus spines are **modified leaves**. A spine has a tiny surface area, so very little water is lost from it by transpiration; spines also put off thirsty animals and shade the stem. The idea that spines store water is wrong — water is stored in the swollen stem (label B).",
        hints: [
          "Most plants lose water through their leaves. Where are the cactus's leaves?",
          "A spine is a leaf shrunk down to a point, so it has very little surface to lose water from.",
        ],
        strategy: "Read the key first",
      },
      {
        id: "adaptations-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "what-is-adaptation",
        question: "A kangaroo rat stays deep in its burrow during the hot day and comes out to feed at night. What type of adaptation is this?",
        options: ["Structural", "Physiological", "Behavioural", "It is not an adaptation — just a habit"],
        answerIndex: 2,
        explanation:
          "Staying underground by day and being **nocturnal** is something the animal *does*, so it is **behavioural**. It is a genuine adaptation because it helps the kangaroo rat avoid heat and save water. Structural would be a body part (such as its long back legs); physiological would be a body process (such as making very concentrated urine).",
        hints: [
          "Is this a body part, a process inside the body, or an action?",
          "Actions and habits that help survival count as behavioural adaptations.",
        ],
        strategy: "Use the command word",
      },
      {
        id: "adaptations-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "desert-adaptations",
        diagram: FOXES,
        question: "Fox X lives in the Sahara and Fox Y lives in the Arctic. Which is the best explanation for the difference in their ear size?",
        options: [
          "Fox X's large, thin ears give a big surface area for losing body heat; Fox Y's small ears lose less heat in the cold",
          "Fox X's large ears catch the wind to blow sand out of its eyes; Fox Y has no sand to deal with",
          "Fox Y's ears were once large but froze and shrank during its life",
          "Fox X needs large ears to collect water from the air at night",
        ],
        answerIndex: 0,
        explanation:
          "Ears are thin and full of blood vessels, so large ears give a big **surface area** for heat to escape — useful in the Sahara (large ears also help a fennec fox hear prey under the sand). Small ears give Fox Y less surface to lose heat from and less risk of frostbite. Ears do not shrink because they get cold — features like this are inherited, not acquired.",
        hints: [
          "Heat is lost through the skin's surface.",
          "Which fox wants to get rid of heat, and which wants to keep it?",
        ],
        strategy: "Compare and contrast",
      },
      {
        id: "adaptations-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polar-adaptations",
        diagram: HUDDLE,
        question: "The diagram shows an emperor penguin huddle in the Antarctic winter. Which statement about the huddle is correct?",
        options: [
          "The penguins huddle mainly to share their fat with each other",
          "The strongest penguins stay in the warm centre all winter while the weakest stay on the edge",
          "Huddling is a structural adaptation",
          "Birds take turns moving between the cold edge and the warm centre, so the whole group loses less heat",
        ],
        answerIndex: 3,
        explanation:
          "Packed together, each penguin has less of its body exposed to the wind, and the group shares warmth. The huddle slowly **shuffles**, so birds on the cold edge move inwards and every bird gets turns in the centre. Huddling is something penguins *do*, so it is **behavioural**, not structural; and they cannot pass fat to each other.",
        hints: [
          "Look at the curved arrow at the top of the diagram.",
          "Is huddling a body part or an action?",
        ],
        strategy: "Read the key first",
      },
      {
        id: "adaptations-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mountain-adaptations",
        question: "Which feature helps a yak survive in the thin air of the Tibetan Plateau, over 4,000 m above sea level?",
        options: [
          "Thin, short fur to avoid overheating in strong sunshine",
          "Small lungs, so that it needs less oxygen",
          "Large lungs and a large heart to take in and pump oxygen efficiently",
          "Being active only at night to avoid the cold days",
        ],
        answerIndex: 2,
        explanation:
          "Each breath of high-altitude air holds fewer oxygen molecules, so **large lungs** and a **large heart** help a yak take in and move enough oxygen. Small lungs would make the problem worse, and thin fur would be a disaster — the plateau is bitterly cold, which is why yaks have a long shaggy coat with a dense undercoat.",
        hints: [
          "The challenge here is getting enough oxygen.",
          "Which option helps the yak take in and move more oxygen?",
        ],
        strategy: "Eliminate options",
      },
      {
        id: "adaptations-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polar-adaptations",
        question: "Why do most tundra plants have shallow roots?",
        options: [
          "To reach water deep underground",
          "Permafrost lies not far below the surface, so roots cannot grow deep",
          "Shallow roots stop reindeer from eating them",
          "The soil deeper down is too salty",
        ],
        answerIndex: 1,
        explanation:
          "Below a thin **active layer** that thaws each summer lies **permafrost** — ground frozen all year — which roots cannot grow into. So tundra plants spread shallow roots in the thawed layer. 'To reach deep water' describes a desert tap root, the opposite situation.",
        hints: [
          "What is the ground like a little way below the surface in the tundra?",
          "Roots cannot grow into ground that stays frozen all year.",
        ],
      },
      {
        id: "adaptations-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "desert-adaptations",
        question: "A kangaroo rat can survive in the desert without ever needing to drink. Where does most of its water come from?",
        options: [
          "Water released inside its body as it breaks down the food from dry seeds, plus the small amount of moisture in its food",
          "Dew it licks off cactus spines each morning",
          "Water stored in a fatty hump",
          "Rainwater that collects in its burrow",
        ],
        answerIndex: 0,
        explanation:
          "When a kangaroo rat breaks down the food in dry seeds, the chemical reactions release water (**metabolic water**). Together with very efficient kidneys and a cool, humid burrow, this is enough. It has no hump — that is the camel, and even there the hump stores fat. Rain is far too rare to rely on.",
        hints: [
          "It eats dry seeds. What happens when food is broken down in the body?",
          "Respiration of food releases energy, carbon dioxide — and water.",
        ],
      },
      {
        id: "adaptations-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mountain-adaptations",
        diagram: ALTITUDE,
        question: "Using the diagram, why do climbers at 5,500 m feel short of breath?",
        options: [
          "The air there is only about 10% oxygen instead of 21%",
          "It is too cold for lungs to work properly",
          "There is much more carbon dioxide in the air at altitude",
          "Air pressure is about half that at sea level, so each breath holds about half as many oxygen molecules",
        ],
        answerIndex: 3,
        explanation:
          "The diagram shows oxygen is still about **21%** of the air at every height — but at 5,500 m the air pressure is only about **50%** of sea level. The air is 'thinner', so each lungful contains about half as many oxygen molecules. The '10% oxygen' option is the classic myth: the *percentage* stays the same, the *amount per breath* falls.",
        hints: [
          "Read the bottom line of the diagram — does the percentage of oxygen change?",
          "If the air is spread out more thinly, what happens to the number of molecules in each breath?",
        ],
        strategy: "Use figures from the source",
      },
      {
        id: "adaptations-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "what-is-adaptation",
        question: "Which of these is a **physiological** adaptation?",
        options: [
          "A camel's long double row of eyelashes",
          "A fennec fox sheltering in a burrow during the day",
          "A camel letting its body temperature rise by several °C during the day, so it sweats less",
          "The spines of a cactus",
        ],
        answerIndex: 2,
        explanation:
          "A physiological adaptation is a **process inside the body**. Letting body temperature drift up during the day (and cool at night) is a body process that saves water a camel would otherwise lose as sweat. Eyelashes and spines are body parts (structural); sheltering in a burrow is an action (behavioural).",
        hints: [
          "Sort each option: body part, action, or something the body's chemistry/organs do.",
          "Which one can you not see from the outside?",
        ],
        strategy: "Eliminate options",
      },
      {
        id: "adaptations-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "polar-adaptations",
        question: "Which statement is a **myth**?",
        options: [
          "Polar bears hunt penguins on the sea ice",
          "Emperor penguins breed during the Antarctic winter",
          "Arctic foxes sometimes follow polar bears to scavenge leftovers",
          "Seals rely on blubber to stay warm in icy water",
        ],
        answerIndex: 0,
        explanation:
          "Polar bears live in the **Arctic**; penguins (in the wild) live in the **Southern Hemisphere**, mostly around Antarctica. They never meet, so polar bears cannot hunt penguins — they mainly hunt seals. The other three are true: emperors breed through the Antarctic winter, Arctic foxes scavenge polar bear kills, and seals depend on blubber.",
        hints: [
          "Think about which pole each animal lives at.",
          "Can two animals at opposite ends of the Earth be predator and prey?",
        ],
        strategy: "Spot the misconception",
      },
      {
        id: "adaptations-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "desert-adaptations",
        question: "Storing fat in one hump, rather than spread under the skin all over its body, helps a camel in the desert. Why?",
        options: [
          "The hump acts as a sunshade that keeps the camel's stomach cool",
          "With fat concentrated in the hump, the rest of the body has little insulating fat, so heat escapes more easily",
          "Fat is lighter than water, so the camel can run faster",
          "The fat in the hump melts into water when the camel gets hot",
        ],
        answerIndex: 1,
        explanation:
          "Fat is a good insulator. A layer all over the body would trap heat — great for a seal, bad in the Sahara. Keeping the energy store in one hump leaves most of the skin free to lose heat. Fat does not 'melt into water': breaking fat down does release some water, but the hump is an energy store, not a water tank.",
        hints: [
          "What does a layer of fat do for a seal in icy water?",
          "Would a camel want that effect all over its body?",
          "Concentrating the fat in one place leaves the rest of the body uninsulated.",
        ],
        strategy: "Cause → process → effect",
      },
    ],
  },

  // ============================ PAPER 2 ====================================
  {
    id: "adaptations-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        id: "adaptations-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "what-is-adaptation",
        question: "A polar bear's thick fur is an example of which type of adaptation?",
        options: ["Behavioural", "Physiological", "Structural", "Seasonal"],
        answerIndex: 2,
        explanation:
          "Fur is a **body feature** you can see, so it is **structural**. Behavioural adaptations are actions (such as hunting at seal breathing holes); physiological ones are body processes. 'Seasonal' is not one of the three types.",
        hints: ["Is fur a body part, an action or a process?"],
      },
      {
        id: "adaptations-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "desert-adaptations",
        question: "Why are many hot-desert animals nocturnal (active at night)?",
        options: [
          "Nights are much cooler, so they avoid overheating and lose less water",
          "There is drinking water in the air at night",
          "Desert predators only hunt during the day",
          "Sunlight damages all animals' eyes",
        ],
        answerIndex: 0,
        explanation:
          "Clear desert skies mean nights are far cooler than days. Being active at night lets animals feed without overheating or losing water as sweat or through panting. Many desert predators, such as fennec foxes, actually hunt at night too.",
        hints: ["Hot deserts have cloudless skies — what happens to the temperature at night?"],
      },
      {
        id: "adaptations-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "polar-adaptations",
        question: "Most tundra plants grow low and close to the ground. What does this mainly protect them from?",
        options: ["Being eaten by penguins", "Flooding", "Too much sunlight", "Strong, freezing winds"],
        answerIndex: 3,
        explanation:
          "Near the ground, wind speed is lower and the air is a little warmer; in winter, snow also covers and insulates low plants. There are no wild penguins in the Arctic tundra, so that option is a geography trap.",
        hints: ["What is the weather like on an open, treeless plain near the Arctic?"],
      },
      {
        id: "adaptations-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "mountain-adaptations",
        question: "A snow leopard has a very long, thick tail — almost as long as its body. How does this help it?",
        options: [
          "It stores fat for the winter",
          "It helps it balance on steep, rocky slopes and can be wrapped round its face for warmth",
          "It is used to scare away yaks",
          "It helps it swim across icy rivers",
        ],
        answerIndex: 1,
        explanation:
          "The tail works as a **counterbalance** when the snow leopard leaps across steep, rocky ground, and it can be wrapped round the face and body like a scarf when resting. It is not a fat store like a camel's hump.",
        hints: ["Think about the ground it lives on and how cold the nights are."],
      },
      {
        id: "adaptations-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polar-adaptations",
        diagram: SKIN,
        question: "The diagram shows layers in a polar bear's body covering. One layer is **blubber**. Which layer is it?",
        options: ["Layer A", "Layer B", "Layer D", "Layer C"],
        answerIndex: 3,
        explanation:
          "From the outside in: **A** is the fur (long hairs trapping air), **B** is the thin black skin, **C** is the thick fatty **blubber** (pale yellow, up to about 10 cm thick in a well-fed bear) and **D** is muscle. Blubber lies *under* the skin, so it cannot be layer A.",
        hints: [
          "Blubber is fat, and it lies under the skin.",
          "The thin dark layer is the skin. What comes just inside it?",
        ],
        strategy: "Read the key first",
      },
      {
        id: "adaptations-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "desert-adaptations",
        question: "A cactus stem is covered in a thick, waxy layer (cuticle). How does this help the cactus survive?",
        options: [
          "It waterproofs the surface, so less water evaporates from the stem",
          "It makes the cactus taste bitter so animals leave it alone",
          "It absorbs water vapour from the air",
          "It stops the cactus photosynthesising in the heat",
        ],
        answerIndex: 0,
        explanation:
          "Wax is **waterproof**, so the cuticle seals water inside the stem and cuts evaporation in the dry, hot air. Wax does not soak up water, and the cactus still photosynthesises in its green stem — stopping photosynthesis would starve it.",
        hints: [
          "Think of a waxed jacket in the rain.",
          "The main problem in a desert is losing water.",
        ],
      },
      {
        id: "adaptations-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mountain-adaptations",
        question: "Some alpine plants, such as edelweiss, are covered in fine woolly hairs. What is the most likely benefit?",
        options: [
          "The hairs store water like a sponge for the dry season",
          "The hairs help the plant cling to rocks in the wind",
          "The hairs trap a layer of still air that cuts heat and water loss and helps shield the plant from strong UV light",
          "The hairs take in water from the soil like roots",
        ],
        answerIndex: 2,
        explanation:
          "A layer of hairs traps **still air** next to the leaf, which acts like a blanket against cold, drying winds, and pale hairs help reflect the intense **ultraviolet** light found at high altitude. The hairs are not roots and do not store water.",
        hints: [
          "Think about how a woolly jumper keeps you warm.",
          "Mountain tops are cold, windy and have strong sunlight.",
        ],
      },
      {
        id: "adaptations-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polar-adaptations",
        question: "An Arctic fox's coat is usually white in winter and brown or grey in summer. What does this mainly help it do?",
        options: [
          "Absorb more heat from the summer sun",
          "Stay camouflaged as the landscape changes from snow to bare ground, so it can hunt and hide",
          "Stay cool in winter",
          "Attract a mate in spring",
        ],
        answerIndex: 1,
        explanation:
          "In winter the tundra is white with snow; in summer the snow melts to brown and grey rock and plants. Changing coat colour keeps the fox **camouflaged** all year, helping it sneak up on prey such as lemmings and hide from predators. Warmth comes mainly from the thickness of its winter coat, not its colour.",
        hints: [
          "What colour is the tundra in winter, and in summer?",
          "Matching your background is called camouflage.",
        ],
      },
      {
        id: "adaptations-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "what-is-adaptation",
        question: "Zara writes: 'The camel grew wide feet because it needed to walk on sand.' What is wrong with this?",
        options: [
          "Individual animals do not grow features because they need them; over many generations, camels with wider feet survived and bred more, passing the feature on",
          "Camels actually have narrow, pointed feet",
          "Wide feet are a behavioural adaptation, not a body feature",
          "Nothing — this is exactly how adaptations happen",
        ],
        answerIndex: 0,
        explanation:
          "This is the commonest misconception about adaptation. An animal cannot grow a feature by needing it. Instead, individuals vary; those whose features suit the environment survive and have more young, so the feature becomes common over many generations (natural selection). Camels really do have wide, padded feet, and feet are structural, not behavioural.",
        hints: [
          "Could one camel make its own feet wider by trying?",
          "Think about parents passing features on to their young over many generations.",
        ],
        strategy: "Spot the misconception",
      },
      {
        id: "adaptations-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "desert-adaptations",
        question: "Desert ephemeral plants can survive years without rain. How do they do it?",
        options: [
          "They store water in a thick trunk for years",
          "They grow extremely long roots down to the water table",
          "They cover themselves in spines",
          "They survive as seeds in the soil, then sprout, flower and set seed within a few weeks after rain",
        ],
        answerIndex: 3,
        explanation:
          "Ephemerals 'escape' drought rather than endure it: their seeds lie dormant, sometimes for years, and after rain the plants race through their **whole life cycle in a few weeks**, leaving new seeds before the soil dries out. Water-storing trunks and spines are features of plants that survive *through* drought, like cacti.",
        hints: [
          "'Ephemeral' means short-lived.",
          "Which part of a plant can survive for years without water?",
        ],
      },
      {
        id: "adaptations-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polar-adaptations",
        question: "Which is the correct order of this Antarctic food chain?",
        options: [
          "Krill → phytoplankton → Adélie penguin → leopard seal",
          "Phytoplankton → krill → Adélie penguin → leopard seal",
          "Adélie penguin → krill → phytoplankton → leopard seal",
          "Phytoplankton → leopard seal → krill → Adélie penguin",
        ],
        answerIndex: 1,
        explanation:
          "Energy flows from the producer to the consumers. Tiny **phytoplankton** make food by photosynthesis; **krill** eat phytoplankton; Adélie penguins eat krill; **leopard seals** hunt penguins. Starting with krill is the common slip — krill are consumers, not producers.",
        hints: [
          "A food chain always starts with something that photosynthesises.",
          "Arrows point from the thing eaten to the thing that eats it.",
        ],
      },
      {
        id: "adaptations-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mountain-adaptations",
        question: "Hana is trekking at 4,000 m. She develops a headache and nausea that get worse overnight. What is the best action?",
        options: [
          "Climb higher quickly so the trek finishes sooner",
          "Drink cold water and carry on as planned",
          "Descend to a lower altitude",
          "Go for a run to warm up",
        ],
        answerIndex: 2,
        explanation:
          "Headache, nausea, dizziness and poor sleep are signs of **altitude sickness**. If symptoms get worse, the most important treatment is to **go down**, where the air holds more oxygen. Climbing higher or exercising hard makes it worse, and severe altitude sickness can be fatal.",
        hints: ["Her symptoms are getting worse. What is causing them?", "Her body is short of oxygen. Where is there more oxygen in each breath?"],
      },
      {
        id: "adaptations-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "polar-adaptations",
        question:
          "A cube with sides of 1 cm has a surface area of 6 cm² and a volume of 1 cm³, so its surface area to volume ratio is 6 : 1. What is the ratio for a cube with sides of 2 cm — and what does this suggest about large animals in cold places?",
        options: [
          "6 : 1 — size makes no difference to heat loss",
          "3 : 1 — bigger bodies have less surface per unit of volume, so they lose heat more slowly",
          "12 : 1 — bigger bodies have more surface per unit of volume, so they lose heat faster",
          "1.5 : 1 — bigger bodies lose heat faster",
        ],
        answerIndex: 1,
        explanation:
          "Surface area = 6 × 2 × 2 = 24 cm²; volume = 2 × 2 × 2 = 8 cm³; 24 : 8 = **3 : 1**. Doubling the side halves the ratio. Heat is made throughout the volume but lost through the surface, so a big, compact animal like a polar bear loses heat relatively slowly. The '12 : 1' answer forgets that volume grows faster than surface area.",
        hints: [
          "A cube has 6 faces. Find the area of one face first.",
          "Surface area = 6 × 4 = 24 cm². Volume = 2 × 2 × 2.",
          "Divide surface area by volume — then think about where heat escapes from.",
        ],
        strategy: "Sketch it",
      },
      {
        id: "adaptations-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mountain-adaptations",
        question: "Which statement about Sherpa people and high altitude is best supported by evidence?",
        options: [
          "Sherpa people never get altitude sickness",
          "Lowland visitors can never acclimatise above 3,000 m",
          "Visitors' bodies adjust fully within an hour of arriving",
          "Many Sherpa people seem to cope better with thin air than lowland visitors, partly because of inherited differences built up over many generations",
        ],
        answerIndex: 3,
        explanation:
          "Studies suggest Sherpa and Tibetan peoples, who have lived at altitude for thousands of years, have some **inherited** differences that help them cope with low oxygen — but they can still get altitude sickness, so 'never' is too strong. Lowlanders *can* acclimatise, but it takes days to weeks, not an hour.",
        hints: [
          "Watch out for absolute words like 'never' and 'fully'.",
          "The best-supported statement is usually the carefully hedged one.",
        ],
        strategy: "Eliminate options",
      },
      {
        id: "adaptations-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "desert-adaptations",
        question: "A desert shrub has a green stem and tiny leaves that it drops completely in the driest months. What is the best explanation?",
        options: [
          "Without leaves it loses far less water by transpiration, and its green stem can still photosynthesise",
          "Dropping leaves makes it look dead, so animals ignore it",
          "Its leaves would freeze during desert winters",
          "It drops leaves to let more sunlight reach its roots",
        ],
        answerIndex: 0,
        explanation:
          "Leaves are where most water is lost by **transpiration**. Shedding them in the driest months cuts water loss, while chlorophyll in the **green stem** keeps photosynthesis going — the same idea as a cactus, where the leaves have become spines. Roots underground do not need sunlight.",
        hints: [
          "Where does a plant lose most of its water?",
          "Why might the stem be green?",
        ],
        strategy: "Cause → process → effect",
      },
    ],
  },

  // ============================ PAPER 3 ====================================
  {
    id: "adaptations-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        id: "adaptations-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "polar-adaptations",
        question: "Which of these animals lives in the Arctic, not in Antarctica?",
        options: ["Emperor penguin", "Polar bear", "Leopard seal", "Adélie penguin"],
        answerIndex: 1,
        explanation:
          "**Polar bears** live only in the Arctic. Penguins and leopard seals are Southern Hemisphere animals. A handy memory hook: 'polar bears and penguins never meet'.",
        hints: ["Penguins are Southern Hemisphere birds."],
      },
      {
        id: "adaptations-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "desert-adaptations",
        question: "A fennec fox has fur on the soles of its feet. How does this help?",
        options: [
          "It helps it swim",
          "It stores fat",
          "It helps it climb trees",
          "It protects its feet from burning-hot sand and helps it grip loose sand",
        ],
        answerIndex: 3,
        explanation:
          "Desert sand can get far hotter than the air in the midday sun. Furry soles **insulate** the fennec fox's feet from the heat and help it move on loose sand.",
        hints: ["What is the ground like in the Sahara?"],
      },
      {
        id: "adaptations-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "what-is-adaptation",
        question: "Which of these is a **behavioural** adaptation?",
        options: [
          "Emperor penguins huddling together in winter",
          "A polar bear's thick layer of blubber",
          "A cactus's spines",
          "A kangaroo rat producing very concentrated urine",
        ],
        answerIndex: 0,
        explanation:
          "Huddling is something penguins **do**, so it is behavioural. Blubber and spines are body parts (structural); concentrated urine is a body process (physiological).",
        hints: ["Behavioural = an action."],
      },
      {
        id: "adaptations-m3-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "mountain-adaptations",
        question: "As you climb a mountain, how does the air temperature usually change?",
        options: [
          "It rises, because you are closer to the Sun",
          "It stays the same",
          "It falls, by roughly 6.5 °C for every 1,000 m",
          "It falls by about 1 °C for every 10 m",
        ],
        answerIndex: 2,
        explanation:
          "Temperature usually falls by about **6.5 °C per 1,000 m** of height (the lapse rate), because the air is heated mainly from the ground below, and air that rises expands and cools; thinner air higher up also holds less heat. Being 'closer to the Sun' makes no difference — a few kilometres is nothing compared with the 150 million km to the Sun. 1 °C per 10 m would be 100 °C per km — far too much.",
        hints: ["Why is there snow on high mountains even near the equator?"],
      },
      {
        id: "adaptations-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "desert-adaptations",
        question: "Which pair of camel features **both** protect it during sandstorms?",
        options: [
          "Long double eyelashes and nostrils it can close",
          "A fatty hump and wide, padded feet",
          "Thick fur on its back and very concentrated urine",
          "Wide, padded feet and a body temperature that can rise during the day",
        ],
        answerIndex: 0,
        explanation:
          "**Long double eyelashes** keep blowing sand out of the eyes, and **closable nostrils** stop sand being breathed in. The hump is an energy store, the feet stop it sinking into sand, and concentrated urine and a rising body temperature save water — useful, but not for sandstorms.",
        hints: [
          "In a sandstorm, which parts of the body need protecting?",
          "Both features in the pair must be about keeping sand out.",
        ],
        strategy: "Eliminate options",
      },
      {
        id: "adaptations-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polar-adaptations",
        question: "Polar bears have small ears and a short tail. Why does this help in the Arctic?",
        options: [
          "Small ears help them hear seals under the ice",
          "Small body parts that stick out have little surface area, so less heat is lost and there is less risk of frostbite",
          "A short tail makes them faster swimmers than seals",
          "Small ears and tail are easier to camouflage",
        ],
        answerIndex: 1,
        explanation:
          "Ears and tails stick out from the body and have a large surface compared with their volume, so they lose heat quickly and can freeze. Keeping them **small** reduces heat loss. Hearing and camouflage are not the reason small ears help in the cold.",
        hints: [
          "Where does an animal lose heat from?",
          "Compare a fennec fox's ears with a polar bear's.",
        ],
      },
      {
        id: "adaptations-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mountain-adaptations",
        question: "A snow leopard's paws are wide and covered in fur. How does this help it?",
        options: [
          "The paws keep it cool in summer",
          "The paws store fat",
          "The paws help it dig burrows in solid rock",
          "They spread its weight so it sinks less into soft snow, and the fur insulates against cold ground",
        ],
        answerIndex: 3,
        explanation:
          "Wide paws act like **snowshoes**: the same weight is spread over a bigger area, so the leopard sinks less into deep snow. Fur on the paws insulates them from the snow and rock. A polar bear's large paws work the same way on ice and snow.",
        hints: ["Why do people wear snowshoes?", "Spreading the same weight over a bigger area means less pressure on the snow."],
      },
      {
        id: "adaptations-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "desert-adaptations",
        diagram: CACTUS,
        question: "Label **C** shows the cactus's wide, shallow roots. Why are they useful in a hot desert?",
        options: [
          "They reach water stored deep underground",
          "They anchor the cactus against hurricanes",
          "When rare rain falls, they quickly soak up water over a wide area before it evaporates or drains away",
          "They store fat for the dry season",
        ],
        answerIndex: 2,
        explanation:
          "Desert rain is rare and often comes in short bursts. Roots spread widely **just below the surface** can absorb as much as possible before the hot sun evaporates it. Reaching deep water is the job of a long tap root (label D), not the shallow roots.",
        hints: [
          "How long does rainwater stay near the surface of hot sand?",
          "Shallow and wide = fast and over a big area.",
        ],
        strategy: "Read the key first",
      },
      {
        id: "adaptations-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polar-adaptations",
        question: "How does a male emperor penguin keep its egg warm through the Antarctic winter?",
        options: [
          "It buries the egg in deep snow",
          "It builds a nest of moss and stones",
          "It leaves the egg in a burrow",
          "It balances the egg on its feet, covered by a warm fold of skin called a brood pouch",
        ],
        answerIndex: 3,
        explanation:
          "There are no nest materials on the sea ice, and an egg left on the ice would freeze within minutes. The male **balances the egg on his feet** under a feathered fold of skin (the **brood pouch**) for around two months, going without food and huddling with other males.",
        hints: [
          "Emperor penguins breed on bare sea ice — what is there to build a nest with?",
          "The egg must never touch the ice.",
        ],
      },
      {
        id: "adaptations-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mountain-adaptations",
        question: "What happens in a lowland visitor's body as they acclimatise to high altitude over days and weeks?",
        options: [
          "Breathing becomes faster and deeper, and the body makes more red blood cells to carry oxygen",
          "The lungs shrink to save energy",
          "The heart slows down from the first hour",
          "The blood loses red blood cells to become thinner",
        ],
        answerIndex: 0,
        explanation:
          "To get more oxygen from thin air the body **breathes faster and deeper**, and over days to weeks it makes **more red blood cells**, which carry oxygen. In fact the heart usually beats *faster* at first, not slower.",
        hints: [
          "Which blood cells carry oxygen?",
          "If each breath holds less oxygen, what could the body do to compensate?",
        ],
      },
      {
        id: "adaptations-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "desert-adaptations",
        question: "Apart from losing heat, the fennec fox's huge ears also help it to…",
        options: [
          "store water",
          "collect dew from the air",
          "hear prey such as insects moving under the sand at night",
          "shade its back from the midday sun",
        ],
        answerIndex: 2,
        explanation:
          "Large ears gather more sound, so the fennec fox can **hear prey** like insects and small rodents moving under the sand when it hunts at night. Ears are thin flaps of skin — they cannot store water — and by day the fox rests in its burrow rather than relying on its ears for shade.",
        hints: ["Ears are for hearing as well as cooling.", "Bigger ears collect more sound. When and what does the fennec fox hunt?"],
      },
      {
        id: "adaptations-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polar-adaptations",
        question: "Arctic poppy flowers turn to follow the Sun across the sky. What is the most likely benefit?",
        options: [
          "It helps the flower avoid being buried by snow",
          "The dish-shaped flower focuses sunlight, warming its centre — attracting insects and helping seeds develop in the short summer",
          "It hides the flower from grazing caribou",
          "It reduces water loss in the dry air",
        ],
        answerIndex: 1,
        explanation:
          "By tracking the Sun, the bowl-shaped flower stays **warmer** than the air around it. Insects come to bask in the warmth and pollinate it, and the warmth speeds up seed development — vital when the growing season lasts only a couple of months.",
        hints: [
          "What is in short supply for a tundra plant in summer — warmth or water?",
          "Insects in the Arctic like to warm up too.",
        ],
      },
      {
        id: "adaptations-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "what-is-adaptation",
        question: "A newly discovered mammal lives on cold, windy mountain slopes above 4,000 m. Which set of features would you predict it has?",
        options: [
          "Large ears, thin fur and a nocturnal lifestyle",
          "Spines, a waxy skin and a water-storing body",
          "Bare skin, long thin legs and lots of sweating",
          "Small ears, thick dense fur, and large lungs and heart",
        ],
        answerIndex: 3,
        explanation:
          "Match each feature to the challenges: **cold and wind** → small ears (less surface to lose heat) and thick dense fur (traps insulating air); **thin air** → large lungs and heart to take in and move oxygen. Large ears and thin fur suit a hot desert; spines and a waxy skin are plant features for drought.",
        hints: [
          "List the challenges first: what is the weather like, and what is the air like?",
          "Pick the set where every feature fits the challenges.",
        ],
        strategy: "Cause → process → effect",
      },
      {
        id: "adaptations-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "desert-adaptations",
        diagram: CACTUS,
        question: "This cactus has both wide, shallow roots (C) and one long, deep root (D). What is the advantage of having both?",
        options: [
          "The deep root collects rain at the surface, while the shallow roots reach water deep underground",
          "Having two kinds of root lets the cactus store fat",
          "The shallow roots grab brief rain at the surface; the deep root reaches water held lower down when the surface is dry",
          "Both kinds of root are only for anchoring the cactus",
        ],
        answerIndex: 2,
        explanation:
          "The two root systems tap **two different water sources**: shallow roots catch short bursts of rain before it evaporates, and the long tap root reaches moisture deeper in the ground that lasts long after the surface has dried (and also helps anchor the plant). Saying the deep root collects surface rain has them the wrong way round — a root deep underground cannot catch rain at the surface.",
        hints: [
          "Where is water found just after rain? Where is it found weeks later?",
          "Match each root to the water it can reach.",
        ],
        strategy: "Read the key first",
      },
      {
        id: "adaptations-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "polar-adaptations",
        question: "Arjun says: 'Penguins don't get cold because they're used to it.' Which is the best correction?",
        options: [
          "Penguins do lose heat; they survive because dense feathers, fat, huddling and reduced blood flow to their feet all cut heat loss",
          "Penguins are cold-blooded, so they don't need to stay warm",
          "Penguins hibernate through the winter",
          "Antarctica is not actually very cold",
        ],
        answerIndex: 0,
        explanation:
          "Penguins are **warm-blooded** birds that must keep their bodies warm, so they *do* face heat loss. Being 'used to it' explains nothing. They survive because of structural (dense overlapping feathers, fat), behavioural (huddling) and physiological (reduced blood flow to the feet) adaptations. Emperors breed through the winter — the opposite of hibernating.",
        hints: [
          "Are birds warm-blooded or cold-blooded?",
          "A good correction names the real adaptations that stop heat loss.",
        ],
        strategy: "Spot the misconception",
      },
    ],
  },
];
