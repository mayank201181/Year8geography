import type { TopicPractice } from "../../types.ts";

// ----------------------------------------------------------------------------
// Resource diagrams
// ----------------------------------------------------------------------------

const CAMEL = `<svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side view of a dromedary camel on sand with three labels: a hump on its back, long double eyelashes and nostrils that can close on its head, and wide padded feet"><rect x="0" y="0" width="420" height="270" fill="#ffffff"/><rect x="0" y="232" width="420" height="38" fill="#fde68a"/><line x1="0" y1="232" x2="420" y2="232" stroke="#334155"/><ellipse cx="175" cy="96" rx="40" ry="30" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><ellipse cx="180" cy="130" rx="80" ry="34" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="248,118 272,62 288,64 266,134" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><ellipse cx="296" cy="60" rx="22" ry="11" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><circle cx="292" cy="56" r="2.5" fill="#1f2937"/><g stroke="#1f2937" stroke-width="1"><line x1="289" y1="52" x2="287" y2="47"/><line x1="292" y1="52" x2="292" y2="46"/><line x1="295" y1="52" x2="297" y2="47"/></g><line x1="313" y1="57" x2="316" y2="60" stroke="#1f2937" stroke-width="1.5"/><g fill="#fde68a" stroke="#1f2937" stroke-width="2"><rect x="120" y="155" width="11" height="72"/><rect x="142" y="158" width="11" height="69"/><rect x="208" y="158" width="11" height="69"/><rect x="228" y="155" width="11" height="72"/><ellipse cx="126" cy="229" rx="13" ry="4"/><ellipse cx="148" cy="229" rx="13" ry="4"/><ellipse cx="214" cy="229" rx="13" ry="4"/><ellipse cx="234" cy="229" rx="13" ry="4"/></g><path d="M100 128 Q88 150 94 172" fill="none" stroke="#1f2937" stroke-width="2"/><g stroke="#334155" stroke-width="1"><line x1="120" y1="40" x2="160" y2="72"/><line x1="326" y1="28" x2="300" y2="50"/><line x1="336" y1="90" x2="316" y2="62"/><line x1="290" y1="205" x2="240" y2="228"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="40" y="34">Hump</text><text x="330" y="18">Long double</text><text x="330" y="31">eyelashes</text><text x="340" y="104">Nostrils</text><text x="340" y="117">can close</text><text x="294" y="202">Wide, padded feet</text></g></svg>`;

const TUNDRA = `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the Arctic tundra in summer. Strong cold wind blows over the surface. Low cushion plants hug the ground. Their roots spread sideways in a thin top layer of soil that thaws in summer. Below it is a deep layer labelled X that stays frozen all year."><rect x="0" y="0" width="420" height="260" fill="#ffffff"/><rect x="0" y="110" width="420" height="40" fill="#d6d3d1" stroke="#334155"/><rect x="0" y="150" width="420" height="110" fill="#e0f2fe" stroke="#334155"/><g stroke="#334155" stroke-width="2" fill="none"><line x1="20" y1="40" x2="200" y2="40"/><polyline points="192,34 200,40 192,46"/><line x1="40" y1="68" x2="220" y2="68"/><polyline points="212,62 220,68 212,74"/></g><g fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5"><path d="M60 110 Q85 88 110 110 Z"/><path d="M200 110 Q230 84 260 110 Z"/><path d="M320 110 Q340 94 360 110 Z"/></g><g stroke="#7c2d12" stroke-width="2" fill="none"><path d="M85 110 Q70 128 50 136"/><path d="M85 110 Q100 130 125 138"/><path d="M230 110 Q210 130 190 140"/><path d="M230 110 Q250 128 275 138"/><path d="M340 110 Q330 126 315 134"/><path d="M340 110 Q352 126 368 134"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="230" y="44">Strong, freezing winds</text><text x="250" y="72">(little shelter: no trees)</text><text x="10" y="88">Low cushion plants</text><text x="12" y="170">Thin top layer (above): thaws in summer</text><text x="190" y="210" font-size="16" font-weight="bold">X</text><text x="210" y="210">frozen all year</text></g></svg>`;

const FENNEC = `<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side view of a fennec fox on desert sand with labels: very large ears, thick sandy-coloured fur, and fur on the soles of its feet. A note says it rests in a burrow by day and hunts at night."><rect x="0" y="0" width="420" height="250" fill="#ffffff"/><rect x="0" y="200" width="420" height="50" fill="#fde68a"/><line x1="0" y1="200" x2="420" y2="200" stroke="#334155"/><ellipse cx="180" cy="150" rx="60" ry="28" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M122 150 Q80 140 70 170 Q95 165 122 160 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><circle cx="250" cy="120" r="24" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="236,104 222,30 254,98" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="258,98 280,28 270,106" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="270,118 292,126 270,132" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><circle cx="258" cy="116" r="2.5" fill="#1f2937"/><g fill="#fde68a" stroke="#1f2937" stroke-width="2"><rect x="145" y="170" width="9" height="28"/><rect x="165" y="172" width="9" height="26"/><rect x="200" y="172" width="9" height="26"/><rect x="218" y="170" width="9" height="28"/></g><g fill="#d6d3d1" stroke="#1f2937"><ellipse cx="150" cy="199" rx="8" ry="3"/><ellipse cx="170" cy="199" rx="8" ry="3"/><ellipse cx="205" cy="199" rx="8" ry="3"/><ellipse cx="223" cy="199" rx="8" ry="3"/></g><g stroke="#334155" stroke-width="1"><line x1="310" y1="40" x2="278" y2="50"/><line x1="90" y1="100" x2="150" y2="135"/><line x1="300" y1="225" x2="228" y2="201"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="314" y="44">Very large ears</text><text x="20" y="96">Thick, sandy-coloured fur</text><text x="304" y="229">Fur on soles of feet</text><text x="10" y="20">Rests in a burrow by day; hunts at night</text></g></svg>`;

const ALTITUDE = `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mountain profile with lines at sea level, 3,000 m, 5,500 m and 8,849 m (Everest summit). Air pressure is about 100, 70, 50 and 33 per cent of sea level respectively. The air is about 21 per cent oxygen at every height."><rect x="0" y="0" width="420" height="260" fill="#ffffff"/><polygon points="20,230 150,20 280,230" fill="#d6d3d1" stroke="#1f2937" stroke-width="2"/><polygon points="150,20 132,50 168,50" fill="#e0f2fe" stroke="#1f2937"/><g stroke="#334155" stroke-dasharray="5 4"><line x1="20" y1="230" x2="300" y2="230"/><line x1="64" y1="159" x2="300" y2="159"/><line x1="101" y1="99" x2="300" y2="99"/><line x1="150" y1="20" x2="300" y2="20"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="305" y="234">0 m: 100%</text><text x="305" y="163">3,000 m: about 70%</text><text x="305" y="103">5,500 m: about 50%</text><text x="305" y="24">8,849 m: about 33%</text><text x="20" y="252">Air pressure as % of sea level · oxygen = about 21% of the air at all heights</text></g></svg>`;

const CUBES_TABLE =
  "| Cube side (cm) | Surface area (cm²) | Volume (cm³) | Surface area ÷ volume |\n|---|---|---|---|\n| 1 | 6 | 1 | 6 |\n| 2 | 24 | 8 | 3 |\n| 3 | 54 | 27 | 2 |";

// ----------------------------------------------------------------------------

export const practice: TopicPractice = {
  // ================================ QUIZ ====================================
  quiz: [
    {
      id: "adaptations-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "what-is-adaptation",
      question: "What name is given to the type of adaptation that is a **physical feature of the body**, such as thick fur or long eyelashes?",
      answer: { type: "text", accept: ["structural", "structural adaptation", "physical", "physical adaptation", "anatomical"], display: "Structural" },
      traps: [
        { spec: { type: "text", accept: ["behavioural", "behavioral"] }, feedback: "Behavioural adaptations are *actions* (like huddling). Fur is a body part." },
        { spec: { type: "text", accept: ["physiological"] }, feedback: "Physiological adaptations are processes *inside* the body (like making concentrated urine). Fur is a body part you can see." },
      ],
      solution: ["Body parts you can see or touch — fur, spines, ears, humps — are **structural** adaptations."],
      hints: ["It describes the *structure* of the body."],
    },
    {
      id: "adaptations-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "desert-adaptations",
      question: "What does a camel's hump mainly store?",
      answer: { type: "text", accept: ["fat", "fatty tissue", "fat tissue", "body fat", "lipid"], display: "Fat" },
      traps: [{ spec: { type: "text", accept: ["water"] }, feedback: "That's the famous myth! The hump stores **fat** — an energy reserve. Camels hold water in their blood and tissues, not in a hump tank." }],
      solution: ["The hump is a store of **fat** that the camel can use for energy when food is scarce."],
      commonError: "Saying 'water' — the most famous myth about camels.",
      hints: ["It is an energy store, not a water tank."],
    },
    {
      id: "adaptations-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "polar-adaptations",
      question: "Name the thick layer of fat under the skin of seals, whales and polar bears.",
      answer: { type: "text", accept: ["blubber"], display: "Blubber" },
      traps: [{ spec: { type: "text", accept: ["fur"] }, feedback: "Fur grows on top of the skin. The fat layer *under* the skin has its own name." }],
      solution: ["**Blubber** insulates the body against icy water and air and stores energy."],
      hints: ["It begins with B."],
    },
    {
      id: "adaptations-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "mountain-adaptations",
      question: "Which of these animals is adapted to life high on the Tibetan Plateau and in the Himalaya?",
      options: ["Fennec fox", "Yak", "Emperor penguin", "Kangaroo rat"],
      answerIndex: 1,
      explanation:
        "The **yak** has a long shaggy coat and large lungs and heart for the cold, thin air above 4,000 m. The fennec fox and kangaroo rat are desert animals; the emperor penguin lives in Antarctica.",
      hints: ["Which animal has a long shaggy coat and is herded by people in Tibet?"],
    },
    {
      id: "adaptations-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "what-is-adaptation",
      question: "A kangaroo rat's kidneys make extremely concentrated urine, so very little water is lost. What type of adaptation is this — structural, behavioural or physiological?",
      answer: { type: "text", accept: ["physiological", "physiological adaptation", "physiology"], display: "Physiological" },
      traps: [
        { spec: { type: "text", accept: ["structural", "structural adaptation"] }, feedback: "Kidneys are body parts, but the adaptation here is *what they do* — a process inside the body." },
        { spec: { type: "text", accept: ["behavioural", "behavioral"] }, feedback: "The rat does not choose to do this — it is a body process, not an action." },
      ],
      solution: ["Making concentrated urine is a **process** going on inside the body, so it is **physiological**."],
      commonError: "Calling it structural because kidneys are organs — the focus is the process.",
      hints: ["Is it a body part you can see, an action, or a process inside the body?", "Processes inside the body = physiological."],
    },
    {
      id: "adaptations-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "desert-adaptations",
      question: "Name the process by which plants lose water vapour, mainly through tiny pores in their leaves. (Cactus spines reduce this.)",
      answer: { type: "text", accept: ["transpiration", "transpiring"], display: "Transpiration" },
      traps: [{ spec: { type: "text", accept: ["evaporation"] }, feedback: "Close — water does evaporate, but when a plant loses water vapour through its leaves the process has a special name." }],
      solution: ["**Transpiration** is water loss from plants, mostly through stomata in the leaves. Turning leaves into spines leaves very little leaf surface for it."],
      hints: ["It sounds a bit like 'perspiration' (sweating).", "Trans-…"],
    },
    {
      id: "adaptations-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "what-is-adaptation",
      question:
        "A cube with sides of 2 cm has a surface area of 24 cm² and a volume of 8 cm³. Calculate its surface area ÷ volume.",
      answer: { type: "number", value: 3 },
      traps: [
        { spec: { type: "number", value: 6 }, feedback: "6 is the value for a 1 cm cube. Use 24 ÷ 8 for the 2 cm cube." },
        { spec: { type: "number", value: 0.333, tolerance: 0.01 }, feedback: "You divided volume by surface area. Do surface area ÷ volume." },
      ],
      solution: ["Surface area ÷ volume = 24 ÷ 8 = **3**.", "A 1 cm cube gives 6 ÷ 1 = 6, so the bigger cube has *less* surface per unit of volume — it loses heat more slowly."],
      hints: ["Divide the first number by the second.", "24 ÷ 8"],
      strategy: "Use figures from the source",
    },
    {
      id: "adaptations-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "polar-adaptations",
      question: "Name the ground beneath the Arctic tundra that stays frozen all year round.",
      answer: { type: "text", accept: ["permafrost", "perma frost", "perma-frost"], display: "Permafrost" },
      traps: [{ spec: { type: "text", accept: ["tundra"] }, feedback: "Tundra is the whole cold, treeless biome. The permanently frozen ground has its own name." }],
      solution: ["**Permafrost** is ground that stays frozen for at least two years in a row. Only a thin top layer thaws in summer, so roots stay shallow."],
      hints: ["Permanently frozen…", "Perma-…"],
    },
    {
      id: "adaptations-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "polar-adaptations",
      question: "Why do emperor penguins huddle together in the Antarctic winter?",
      options: [
        "To share their fat with weaker birds",
        "To hide from polar bears",
        "To reduce the area of each bird exposed to the wind and share body warmth",
        "Because huddling builds up their blubber",
      ],
      answerIndex: 2,
      explanation:
        "Packed tightly, each bird has less of its body exposed to the freezing wind and they share warmth, so each penguin uses less energy keeping warm. Birds take turns on the cold edge. There are no polar bears in Antarctica, and penguins cannot pass fat to each other.",
      hints: ["Think about standing close together at a cold bus stop.", "Which option is about heat loss?"],
    },
    {
      id: "adaptations-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "mountain-adaptations",
      question: "What is the word for a person's body gradually adjusting to the thin air at high altitude over days and weeks?",
      answer: { type: "text", accept: ["acclimatisation", "acclimatization", "acclimation", "acclimatising", "acclimatizing", "acclimatise", "acclimatize"], display: "Acclimatisation" },
      traps: [
        { spec: { type: "text", accept: ["adaptation", "evolution"] }, feedback: "Adaptations build up over many generations. This change happens within one person's lifetime — it has a special name." },
        { spec: { type: "text", accept: ["altitude sickness"] }, feedback: "Altitude sickness is what happens when the body has *not* adjusted yet." },
      ],
      solution: ["**Acclimatisation**: over days and weeks the body breathes faster and deeper and makes more red blood cells."],
      hints: ["Think 'getting used to the climate'.", "It starts with 'acclim…'"],
    },
  ],

  // =============================== PAPERS ===================================
  papers: [
    // ------------------------------ PAPER 1 ---------------------------------
    {
      id: "adaptations-p1",
      title: "Practice Paper 1",
      questions: [
        {
          id: "adaptations-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "what-is-adaptation",
          question: "Kangaroo rats and fennec foxes are mostly active at night. What word describes animals that are active at night?",
          answer: { type: "text", accept: ["nocturnal"], display: "Nocturnal" },
          traps: [{ spec: { type: "text", accept: ["diurnal"] }, feedback: "Diurnal animals are active in the *day*. You need the opposite." }],
          solution: ["**Nocturnal** animals are active at night — in the desert this avoids the heat and saves water."],
          hints: ["It comes from the Latin for 'night' (as in 'nocturne')."],
        },
        {
          id: "adaptations-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "desert-adaptations",
          question: "Cactus spines are modified (changed) versions of which part of a plant?",
          answer: { type: "text", accept: ["leaves", "leaf", "leafs"], display: "Leaves" },
          traps: [
            { spec: { type: "text", accept: ["stem", "stems"] }, feedback: "The stem is the swollen green part that stores water. Spines are a different plant part." },
            { spec: { type: "text", accept: ["thorns", "thorn"] }, feedback: "They look like thorns, but botanically cactus spines are modified versions of another plant part." },
          ],
          solution: ["Spines are **modified leaves**. A spine has a tiny surface area, so little water is lost by transpiration."],
          hints: ["Where does a normal plant lose most of its water?"],
        },
        {
          id: "adaptations-p1-q03",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "polar-adaptations",
          question: "Which feature helps a polar bear walk and hunt on slippery sea ice?",
          options: [
            "Large, wide paws with rough pads and fur on the soles",
            "Long double eyelashes",
            "Large, thin ears",
            "A hump of stored fat",
          ],
          answerIndex: 0,
          explanation:
            "Huge paws spread the bear's weight on thin ice and snow; small bumps on the pads and fur between them give **grip** and insulation. Eyelashes and a hump are camel features; large ears would lose heat.",
          hints: ["Which body part touches the ice?"],
        },
        {
          id: "adaptations-p1-q04",
          kind: "written",
          difficulty: "core",
          guideRef: "desert-adaptations",
          diagram: CAMEL,
          question: "Study the labelled diagram of a camel. Choose **two** labelled features and explain how each one helps the camel survive in a hot desert. (4 marks)",
          marks: 4,
          modelAnswer:
            "The camel has **wide, padded feet**. These spread its weight over a large area, so it does not sink into soft sand, and the tough pads protect it from the hot ground.\n\nIt also has a **hump** that stores fat. This is an energy reserve when food is scarce, and because the fat is kept in one place rather than spread under the skin, heat can escape easily from the rest of the body, helping the camel stay cool.",
          markScheme: [
            { point: "Identifies a first feature from the diagram (e.g. wide padded feet, hump, eyelashes, closable nostrils)", keywords: ["feet", "hump", "eyelashes", "nostrils", "padded"] },
            { point: "Explains how the first feature helps (e.g. feet spread weight so it does not sink into sand / protect from hot ground)", keywords: ["sink", "spread", "weight", "hot sand", "protect"] },
            { point: "Identifies a second, different feature from the diagram", keywords: ["hump", "fat", "eyelashes", "nostrils", "feet"] },
            { point: "Explains how the second feature helps (e.g. hump fat = energy store and lets heat escape from rest of body; eyelashes/nostrils keep sand out in sandstorms)", keywords: ["energy", "food", "heat", "sand", "sandstorm", "cool"] },
          ],
          commonError: "Saying the hump stores water, or naming features without explaining *how* they help.",
          hints: [
            "Use the labels — pick two you can explain fully.",
            "For each one: feature → what it does → why that helps survival.",
            "Remember the hump stores fat, not water.",
          ],
          strategy: "Use the command word",
        },
        {
          id: "adaptations-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "polar-adaptations",
          diagram: TUNDRA,
          question: "The diagram shows the Arctic tundra in summer. Name the layer labelled **X**, which stays frozen all year.",
          answer: { type: "text", accept: ["permafrost", "perma frost", "perma-frost"], display: "Permafrost" },
          traps: [
            { spec: { type: "text", accept: ["active layer"] }, feedback: "The active layer is the thin top layer that thaws in summer. X is the layer underneath." },
            { spec: { type: "text", accept: ["ice", "ice sheet", "glacier"] }, feedback: "It is frozen *ground* — soil and rock that stay below 0 °C — not an ice sheet. It has a special name." },
          ],
          solution: ["X is **permafrost**: ground that stays frozen all year. Only the thin layer above it (the active layer) thaws in summer."],
          hints: ["Read the label next to X.", "Permanently frozen ground…"],
          strategy: "Read the key first",
        },
        {
          id: "adaptations-p1-q06",
          kind: "written",
          difficulty: "core",
          guideRef: "polar-adaptations",
          diagram: TUNDRA,
          question: "Using the diagram, explain why most tundra plants are low-growing and have shallow roots. (3 marks)",
          marks: 3,
          modelAnswer:
            "The permafrost (X) stays frozen all year, so roots cannot grow down into it; instead they spread sideways through the thin top layer that thaws in summer. The plants grow low as cushions because there are no trees for shelter and the winds are strong and freezing — close to the ground the wind is weaker and the air slightly warmer, and in winter snow covers and insulates them.",
          markScheme: [
            { point: "Permafrost stays frozen, so roots cannot grow deep", keywords: ["permafrost", "frozen", "cannot grow", "x"] },
            { point: "Roots spread sideways in the thin layer that thaws in summer", keywords: ["thaw", "thin layer", "active layer", "sideways", "summer"] },
            { point: "Low growth shelters them from strong, freezing winds (warmer near ground / insulated by snow)", keywords: ["wind", "shelter", "warmer", "snow", "low"] },
          ],
          hints: [
            "Look at the layers under the ground and the arrows above it.",
            "One reason for the roots, one for the shape — then add detail.",
          ],
          strategy: "Cause → process → effect",
        },
        {
          id: "adaptations-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "mountain-adaptations",
          question:
            "A mountain village at 1,000 m has an air temperature of 20 °C. Temperature falls by about 6.5 °C for every 1,000 m you climb. Estimate the temperature at a pass 4,000 m above sea level. Give your answer in °C.",
          answer: { type: "number", value: 0.5, tolerance: 0.05, display: "0.5 °C" },
          traps: [
            { spec: { type: "number", value: -6 }, feedback: "You used 4,000 m of climbing, but the village is already at 1,000 m. You only climb 3,000 m." },
            { spec: { type: "number", value: 39.5, tolerance: 0.05 }, feedback: "Temperature *falls* as you climb — subtract, don't add." },
          ],
          solution: [
            "Height climbed = 4,000 − 1,000 = 3,000 m.",
            "Temperature drop = 3 × 6.5 = 19.5 °C.",
            "20 − 19.5 = **0.5 °C**.",
          ],
          commonError: "Using the full 4,000 m instead of the 3,000 m actually climbed.",
          hints: ["How many metres do you actually climb from the village?", "Each 1,000 m costs 6.5 °C. How many lots of 1,000 m?", "3 × 6.5 = 19.5 — now subtract from 20."],
          strategy: "Use figures from the source",
        },
        {
          id: "adaptations-p1-q08",
          kind: "written",
          difficulty: "core",
          guideRef: "what-is-adaptation",
          question: "Explain the difference between a **structural** and a **behavioural** adaptation. Give an example of each from a named animal. (4 marks)",
          marks: 4,
          modelAnswer:
            "A structural adaptation is a physical feature of an organism's body. For example, a polar bear has a thick layer of blubber that insulates it against the Arctic cold.\n\nA behavioural adaptation is something an organism does — an action or habit. For example, emperor penguins huddle together in the Antarctic winter to cut heat loss.",
          markScheme: [
            { point: "Structural = a physical feature / body part", keywords: ["body", "feature", "physical", "part"] },
            { point: "Correct structural example with named animal (e.g. polar bear blubber, cactus spines, fennec fox ears)", keywords: ["blubber", "fur", "ears", "hump", "spines", "feet"] },
            { point: "Behavioural = an action / something the organism does", keywords: ["action", "does", "behaviour", "behavior", "habit"] },
            { point: "Correct behavioural example with named animal (e.g. penguins huddling, kangaroo rat nocturnal / burrowing)", keywords: ["huddle", "nocturnal", "burrow", "migrate", "night"] },
          ],
          hints: [
            "One is about the body, one is about actions.",
            "For each, give a definition and then a named example.",
          ],
          strategy: "Compare and contrast",
        },
        {
          id: "adaptations-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "mountain-adaptations",
          question: "Which group of symptoms is most typical of altitude sickness?",
          options: [
            "Feeling very hungry and wanting to eat more",
            "Sunburn on the face and arms",
            "Headache, nausea, dizziness and poor sleep",
            "A runny nose from the cold air",
          ],
          answerIndex: 2,
          explanation:
            "**Headache, nausea, dizziness, tiredness and poor sleep** are classic altitude-sickness symptoms, caused by too little oxygen reaching the body. People often *lose* their appetite. Sunburn is common at altitude (strong UV) but is not altitude sickness.",
          hints: ["Altitude sickness is caused by a shortage of oxygen.", "Which symptoms come from inside the body, not from the weather?"],
        },
        {
          id: "adaptations-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "desert-adaptations",
          question: "Some desert plants, such as mesquite, have one long root that grows straight down to reach water deep underground. What is this type of root called?",
          answer: { type: "text", accept: ["tap root", "taproot", "tap-root", "tap roots"], display: "Tap root" },
          traps: [{ spec: { type: "text", accept: ["shallow root", "shallow roots"] }, feedback: "Shallow roots spread sideways near the surface. This one goes straight down." }],
          solution: ["A **tap root** grows straight down to reach water deeper in the ground."],
          hints: ["Think of turning on a water supply.", "It's a three-letter word + 'root'."],
        },
        {
          id: "adaptations-p1-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "polar-adaptations",
          question: "Explain how huddling helps emperor penguins survive the Antarctic winter. (4 marks)",
          marks: 4,
          modelAnswer:
            "In winter thousands of emperor penguins stand packed tightly together in a huddle. Because they are so close, each bird has much less of its body exposed to the freezing wind, so it loses less heat. They also share body warmth, so the centre of the huddle is much warmer than the open ice. The huddle slowly shuffles, so birds on the cold edge take turns moving into the middle. This saves energy, which matters because the males are going without food for weeks while they keep the eggs warm on their feet.",
          markScheme: [
            { point: "Penguins stand packed closely together in large groups", keywords: ["close", "together", "packed", "thousands", "group"] },
            { point: "Less of each bird's body is exposed to the wind / cold, so less heat is lost", keywords: ["exposed", "surface", "wind", "less heat", "shelter"] },
            { point: "They share body warmth so the centre is warmer", keywords: ["share", "warmth", "body heat", "centre", "center", "warmer"] },
            { point: "They rotate from edge to centre / saves energy (fat) while males fast", keywords: ["rotate", "turns", "shuffle", "energy", "fat", "fast", "food"] },
          ],
          hints: [
            "Think about what happens to a bird on its own versus one in the middle of a crowd.",
            "How do the birds on the edge get a fair share?",
            "Link to energy — the males are not eating.",
          ],
          strategy: "Cause → process → effect",
        },
        {
          id: "adaptations-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "what-is-adaptation",
          question: "In summer, an Arctic fox buries extra food to dig up and eat in winter. Is this a structural, behavioural or physiological adaptation?",
          answer: { type: "text", accept: ["behavioural", "behavioral", "behavioural adaptation", "behavioral adaptation", "behaviour", "behavior"], display: "Behavioural" },
          traps: [
            { spec: { type: "text", accept: ["structural"] }, feedback: "Structural adaptations are body parts. Burying food is an action." },
            { spec: { type: "text", accept: ["physiological"] }, feedback: "Physiological adaptations are processes inside the body. Burying food is something the fox *does*." },
          ],
          solution: ["Storing (caching) food is an **action**, so it is **behavioural**."],
          hints: ["Is this a body part, a body process or an action?", "Anything an animal *does* is behavioural."],
        },
        {
          id: "adaptations-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "mountain-adaptations",
          question: "Explain how a yak is adapted to the cold, thin air of the Tibetan Plateau. (3 marks)",
          marks: 3,
          modelAnswer:
            "A yak has a long, shaggy outer coat with a dense woolly undercoat, which traps air and insulates it against temperatures far below freezing. It has large lungs and a large heart, so it can take in and pump around enough oxygen even though each breath of thin air holds less oxygen. Its sturdy legs and hooves help it move safely on steep, rough and snowy ground.",
          markScheme: [
            { point: "Thick shaggy coat / dense undercoat traps air and insulates against the cold", keywords: ["coat", "fur", "hair", "undercoat", "insulat", "warm"] },
            { point: "Large lungs (and heart) to get enough oxygen from thin air", keywords: ["lungs", "heart", "oxygen", "thin air"] },
            { point: "A further valid feature with explanation (e.g. sturdy hooves/legs for steep, rocky or snowy ground; few sweat glands so keeps heat)", keywords: ["hooves", "legs", "steep", "rocky", "snow", "sweat"] },
          ],
          hints: [
            "There are two challenges in the question: cold and thin air.",
            "Give a feature for each, and say how it helps.",
          ],
          strategy: "Cause → process → effect",
        },
        {
          id: "adaptations-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "desert-adaptations",
          question: "Explain how a cactus is adapted to survive in a hot desert. (6 marks)",
          marks: 6,
          modelAnswer:
            "A cactus's biggest challenge is the lack of water, and almost every feature helps it collect, store or save water.\n\nIts leaves have been reduced to spines. Because spines have a tiny surface area, very little water is lost by transpiration; the spines also put off thirsty animals and, together, shade the stem and trap a layer of still air around it.\n\nThe stem is covered in a thick waxy cuticle, which is waterproof and cuts evaporation. The stem itself is swollen and fleshy, storing water after rain, and in many cacti it is pleated so it can expand and shrink like an accordion. The green stem photosynthesises, taking over the job of the leaves.\n\nFinally, the roots tap two sources of water: wide, shallow roots quickly absorb rain before it evaporates, while some cacti also have a deep tap root to reach water lower in the ground. Together these features let the cactus survive long droughts.",
          markScheme: [
            { point: "Spines are modified leaves with tiny surface area, so less water lost by transpiration", keywords: ["spines", "leaves", "surface area", "transpiration", "water loss"] },
            { point: "Spines also deter animals / shade the stem / trap still air", keywords: ["animals", "eaten", "shade", "protect", "still air"] },
            { point: "Waxy cuticle waterproofs the stem, reducing evaporation", keywords: ["wax", "waxy", "cuticle", "waterproof", "evaporation"] },
            { point: "Swollen fleshy stem stores water (can expand; photosynthesises instead of leaves)", keywords: ["stem", "store", "stores", "swollen", "fleshy", "expand"] },
            { point: "Wide, shallow roots absorb rain quickly before it evaporates", keywords: ["shallow", "wide", "quickly", "rain", "absorb"] },
            { point: "Deep tap root reaches water lower down", keywords: ["tap root", "taproot", "deep", "underground"] },
          ],
          commonError: "Listing features (spines, wax, roots) without explaining the chain: feature → how → why it helps survival.",
          hints: [
            "The challenge is water: think collect, store and save.",
            "Work from the outside in: spines, skin, stem, roots.",
            "For every feature, write 'this means…' and 'so the cactus…'.",
          ],
          strategy: "PEEL paragraph",
          solutions: [
            {
              label: "Organise by job",
              steps: ["Collect water: shallow roots, tap root.", "Store water: swollen, pleated stem.", "Save water: spines, waxy cuticle."],
            },
            {
              label: "Organise by plant part",
              steps: ["Leaves → spines.", "Skin → waxy cuticle.", "Stem → water store.", "Roots → shallow + tap root."],
            },
          ],
        },
        {
          id: "adaptations-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "what-is-adaptation",
          question:
            "Study the table, which models animals of different sizes as cubes.\n\n" +
            CUBES_TABLE +
            "\n\nUse the table to explain why a large, compact body helps a polar bear survive in the Arctic. (4 marks)",
          marks: 4,
          modelAnswer:
            "The table shows that as the cube gets bigger, its surface area ÷ volume falls — from 6 for a 1 cm cube to 2 for a 3 cm cube. An animal makes heat throughout its volume but loses heat through its surface. So a large animal has relatively little surface for its volume and loses heat more slowly. A polar bear is very large and compact, with small ears and a short tail, so it keeps a small surface area for its size and holds on to body heat in the Arctic.",
          markScheme: [
            { point: "As size increases, surface area ÷ volume decreases", keywords: ["decrease", "falls", "smaller", "goes down", "bigger"] },
            { point: "Uses figures from the table (e.g. 6 → 3 → 2)", keywords: ["6", "3", "2", "54", "27"] },
            { point: "Heat is made in the volume but lost through the surface, so large bodies lose heat more slowly", keywords: ["heat", "surface", "lose", "lost", "slowly"] },
            { point: "Applies to polar bear: large, compact body with small ears/tail keeps heat", keywords: ["polar bear", "large", "compact", "small ears", "tail"] },
          ],
          hints: [
            "Describe the pattern in the last column first, quoting numbers.",
            "Where is heat produced, and where is it lost?",
            "Finish by linking it to the polar bear's shape and size.",
          ],
          strategy: "Use figures from the source",
        },
      ],
    },

    // ------------------------------ PAPER 2 ---------------------------------
    {
      id: "adaptations-p2",
      title: "Practice Paper 2",
      questions: [
        {
          id: "adaptations-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "what-is-adaptation",
          question: "What type of adaptation is an **action** an animal does to help it survive, such as migrating or huddling?",
          answer: { type: "text", accept: ["behavioural", "behavioral", "behavioural adaptation", "behavioral adaptation", "behaviour", "behavior"], display: "Behavioural" },
          traps: [{ spec: { type: "text", accept: ["structural", "physical"] }, feedback: "Structural adaptations are body parts. You need the type for actions." }],
          solution: ["Actions and habits are **behavioural** adaptations."],
          hints: ["How an animal *behaves*…"],
        },
        {
          id: "adaptations-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "mountain-adaptations",
          question: "Name the big cat of the Himalaya and Central Asian mountains that has wide furry paws and a very long, thick tail.",
          answer: { type: "text", accept: ["snow leopard", "snow leopards", "ounce"], display: "Snow leopard" },
          traps: [{ spec: { type: "text", accept: ["leopard"] }, feedback: "Nearly — but it's a separate species adapted to snowy mountains. Give its full name." }],
          solution: ["The **snow leopard** lives on high, rocky mountain slopes."],
          hints: ["Its name tells you what it walks on."],
        },
        {
          id: "adaptations-p2-q03",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "desert-adaptations",
          question: "Which desert animal can survive without ever needing to drink water?",
          options: ["Kangaroo rat", "Camel", "Yak", "Snow leopard"],
          answerIndex: 0,
          explanation:
            "The **kangaroo rat** gets the water it needs from the dry seeds it eats (water released as food is broken down) and saves it with very efficient kidneys. Camels can go a long time without drinking, but they do need to drink — and then they drink a lot.",
          hints: ["It is a small rodent from North American deserts."],
        },
        {
          id: "adaptations-p2-q04",
          kind: "written",
          difficulty: "core",
          guideRef: "desert-adaptations",
          diagram: FENNEC,
          question: "Using the diagram, explain how **two** adaptations help the fennec fox survive in the Sahara. (4 marks)",
          marks: 4,
          modelAnswer:
            "The fennec fox has very large ears. They are thin and full of blood vessels, so they give a large surface area for heat to escape, helping the fox stay cool; they also help it hear insects moving under the sand when it hunts.\n\nIt also has fur on the soles of its feet. Desert sand gets extremely hot by day, so the fur insulates the feet and also helps the fox grip loose sand.",
          markScheme: [
            { point: "Identifies a first adaptation from the diagram (large ears, fur on soles, sandy fur, nocturnal/burrow)", keywords: ["ears", "soles", "feet", "fur", "sandy", "burrow", "night"] },
            { point: "Explains the first (e.g. large ears lose heat / hear prey underground)", keywords: ["heat", "cool", "surface area", "hear", "prey"] },
            { point: "Identifies a second, different adaptation from the diagram", keywords: ["ears", "soles", "feet", "fur", "sandy", "burrow", "night"] },
            { point: "Explains the second (e.g. furry soles protect from hot sand; sandy colour = camouflage; nocturnal avoids heat and saves water)", keywords: ["hot sand", "protect", "insulat", "camouflage", "grip", "avoid", "water"] },
          ],
          hints: [
            "Choose two labels you can explain fully.",
            "Feature → what it does → how that helps it survive.",
          ],
          strategy: "Read the key first",
        },
        {
          id: "adaptations-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "what-is-adaptation",
          question:
            "A cube with sides of 3 cm is used to model an animal. Calculate its surface area ÷ volume. (Surface area = 6 × side × side; volume = side × side × side.)",
          answer: { type: "number", value: 2 },
          traps: [
            { spec: { type: "number", value: 0.5, tolerance: 0.001 }, feedback: "You divided volume by surface area. Do surface area ÷ volume." },
            { spec: { type: "number", value: 6 }, feedback: "6 is the value for a 1 cm cube. Work out the surface area and volume of the 3 cm cube." },
          ],
          solution: [
            "Surface area = 6 × 3 × 3 = 54 cm².",
            "Volume = 3 × 3 × 3 = 27 cm³.",
            "54 ÷ 27 = **2**.",
          ],
          hints: ["Work out the surface area first: 6 faces, each 3 × 3.", "Volume = 3 × 3 × 3 = 27.", "Now divide surface area by volume."],
          strategy: "Sketch it",
        },
        {
          id: "adaptations-p2-q06",
          kind: "written",
          difficulty: "core",
          guideRef: "polar-adaptations",
          question: "Explain how blubber helps seals survive in icy polar seas. (3 marks)",
          marks: 3,
          modelAnswer:
            "Blubber is a thick layer of fat just under a seal's skin. Fat is a poor conductor of heat, so it insulates the seal and slows heat loss into the freezing water, which draws heat away from a body much faster than air does. Blubber is also an energy store the seal can use when food is scarce.",
          markScheme: [
            { point: "Blubber is a thick layer of fat under the skin", keywords: ["fat", "layer", "under the skin", "thick"] },
            { point: "Insulates / slows heat loss to the cold water", keywords: ["insulat", "heat loss", "warm", "slows", "keeps heat"] },
            { point: "Stores energy for when food is scarce (or helps the seal float)", keywords: ["energy", "store", "food", "float", "buoyan"] },
          ],
          hints: ["What is blubber made of?", "Give two jobs it does, and say what it is."],
        },
        {
          id: "adaptations-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "polar-adaptations",
          question: "An Arctic fox's coat changes colour with the seasons. What colour is it usually in **winter**?",
          answer: { type: "text", accept: ["white", "white fur"], display: "White" },
          traps: [{ spec: { type: "text", accept: ["brown", "grey", "gray", "brown or grey"] }, feedback: "That's its summer coat, when the snow has melted. In winter the landscape is covered in snow." }],
          solution: ["In winter the coat is usually **white**, camouflaging the fox against snow; in summer it turns brown or grey to match bare ground and rocks."],
          hints: ["What colour is the tundra in winter?", "The coat matches the landscape — camouflage."],
        },
        {
          id: "adaptations-p2-q08",
          kind: "written",
          difficulty: "core",
          guideRef: "mountain-adaptations",
          diagram: ALTITUDE,
          question: "Using the diagram, describe how the air changes as you climb a high mountain, and explain why climbers ascend slowly to acclimatise. (4 marks)",
          marks: 4,
          modelAnswer:
            "As you climb, air pressure falls — from 100% at sea level to about 50% at 5,500 m and only about 33% on the summit of Everest. The air is still about 21% oxygen, but because it is thinner, each breath contains fewer oxygen molecules. Climbers ascend slowly so their bodies have time to acclimatise: over days and weeks they breathe faster and deeper and make more red blood cells to carry oxygen, which reduces the risk of altitude sickness.",
          markScheme: [
            { point: "Air pressure falls with height", keywords: ["pressure", "falls", "decreases", "thinner", "lower"] },
            { point: "Uses figures from the diagram (e.g. about 50% at 5,500 m, about 33% at 8,849 m)", keywords: ["50", "33", "70", "5,500", "5500", "8,849"] },
            { point: "Oxygen is still about 21%, but each breath holds fewer oxygen molecules", keywords: ["21", "fewer", "less oxygen", "each breath", "molecules"] },
            { point: "Slow ascent gives time to acclimatise (faster breathing, more red blood cells), reducing altitude sickness", keywords: ["acclimatis", "acclimatiz", "red blood cells", "breathe", "altitude sickness", "slowly"] },
          ],
          commonError: "Saying the air has a lower percentage of oxygen at altitude — the percentage stays about 21%.",
          hints: [
            "Describe first: quote at least two figures from the diagram.",
            "Read the line at the bottom of the diagram carefully.",
            "Then explain: what does the body need time to do?",
          ],
          strategy: "Use figures from the source",
        },
        {
          id: "adaptations-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "mountain-adaptations",
          diagram: ALTITUDE,
          question: "Using the diagram, at roughly what height is air pressure about half of that at sea level? Give your answer in metres.",
          answer: { type: "number", value: 5500, tolerance: 300, display: "5,500 m" },
          traps: [{ spec: { type: "number", value: 8849 }, feedback: "At the summit of Everest the pressure is about a third, not a half. Read the line marked about 50%." }],
          solution: ["The diagram marks **5,500 m** as about 50% of sea-level air pressure."],
          hints: ["Half = 50%.", "Find 50% on the diagram and read off the height."],
          strategy: "Read the key first",
        },
        {
          id: "adaptations-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "polar-adaptations",
          question: "A polar bear's fur looks white. What colour is the skin underneath?",
          options: ["White", "Pink", "Black", "Brown"],
          answerIndex: 2,
          explanation:
            "Under its fur a polar bear's skin is **black**. The fur hairs themselves are not pigmented white — they look white because they scatter light, like snow — which gives the bear camouflage on the ice. Many people assume a white animal has white or pink skin.",
          hints: ["It is a surprising answer — the opposite of the fur colour.", "Look at a polar bear's nose."],
          strategy: "Spot the misconception",
        },
        {
          id: "adaptations-p2-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "what-is-adaptation",
          question: "Suggest why a polar bear moved to a hot desert would struggle to survive. (2 marks)",
          marks: 2,
          modelAnswer:
            "A polar bear's thick fur, blubber and large, compact body are adapted to keep heat in. In a hot desert it could not get rid of heat fast enough, so it would overheat — and its white coat would not camouflage it for hunting on sand with no seals to catch.",
          markScheme: [
            { point: "Its adaptations (thick fur, blubber, large body) keep heat in", keywords: ["fur", "blubber", "fat", "keep heat", "insulat", "large"] },
            { point: "So it would overheat / could not lose heat (or no suitable prey / camouflage)", keywords: ["overheat", "too hot", "lose heat", "prey", "seals", "camouflage"] },
          ],
          hints: ["Adaptations suit one environment — what are a polar bear's built for?", "What would those features do in 40 °C heat?"],
          strategy: "Cause → process → effect",
        },
        {
          id: "adaptations-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "desert-adaptations",
          question: "Name the type of desert plant whose seeds lie dormant for years, then germinate, flower and set seed within a few weeks after rain.",
          answer: { type: "text", accept: ["ephemeral", "ephemerals", "desert ephemeral", "desert ephemerals", "ephemeral plant", "ephemeral plants"], display: "Ephemeral" },
          traps: [{ spec: { type: "text", accept: ["cactus", "cacti", "succulent", "succulents"] }, feedback: "Cacti and succulents survive *through* drought by storing water. These plants escape drought by living for only a few weeks." }],
          solution: ["**Ephemerals** (meaning short-lived) complete their life cycle quickly after rain, leaving seeds that survive the dry years."],
          hints: ["The word means 'short-lived'.", "It begins with 'eph…'"],
        },
        {
          id: "adaptations-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "polar-adaptations",
          question: "Apart from huddling, explain how an emperor penguin's **body** is adapted to the extreme cold of Antarctica. (4 marks)",
          marks: 4,
          modelAnswer:
            "Emperor penguins have very dense, overlapping feathers that trap a layer of air and form a windproof, waterproof coat. Under the skin they have a thick layer of fat that insulates them and stores energy, important because they go without food for long periods. Blood flowing to the feet and flippers passes close to blood returning to the body, so heat is transferred back before it reaches the feet; the feet stay cold and little heat is lost to the ice. They are also the largest penguins, and a big body has a smaller surface area for its volume, so it loses heat more slowly.",
          markScheme: [
            { point: "Dense, overlapping feathers trap air / are windproof and waterproof", keywords: ["feathers", "dense", "overlap", "trap air", "waterproof", "windproof"] },
            { point: "Thick fat layer insulates and stores energy", keywords: ["fat", "blubber", "insulat", "energy"] },
            { point: "Heat exchange / reduced blood flow to feet and flippers cuts heat loss to the ice", keywords: ["blood", "feet", "flippers", "heat exchange", "counter"] },
            { point: "Large body size → smaller surface area to volume ratio, so slower heat loss", keywords: ["large", "size", "surface area", "volume", "ratio"] },
          ],
          hints: [
            "The question says *body* — so structural and physiological, not behavioural.",
            "Work from the outside in: feathers, fat, blood, size.",
            "Think about why their feet don't freeze to the ice.",
          ],
          strategy: "Use the command word",
        },
        {
          id: "adaptations-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "mountain-adaptations",
          question: "'Humans cannot adapt to living at high altitude.' To what extent do you agree with this statement? (6 marks)",
          marks: 6,
          modelAnswer:
            "I largely disagree. Lowland visitors can acclimatise: over days to weeks their bodies breathe faster and deeper and make more red blood cells, so they carry more oxygen. Climbers help this by ascending slowly and following the rule 'climb high, sleep low', which reduces altitude sickness.\n\nOver much longer timescales, peoples such as the Sherpa and Tibetans in the Himalaya and the Quechua and Aymara in the Andes have lived at altitude for thousands of years, and studies suggest they have inherited differences that help them cope with low oxygen — a true adaptation built up over many generations.\n\nHowever, there are real limits. Acclimatisation takes time, and if people climb too fast they can get altitude sickness, which in severe forms can kill; the only reliable cure is to descend. Above about 8,000 m — the 'death zone' — no one can acclimatise fully, and climbers usually rely on bottled oxygen.\n\nOverall, the statement is mostly wrong: humans clearly can adapt, both in one lifetime and over generations, but only up to a limit and only if given enough time.",
          markScheme: [
            { point: "Disagree: lowlanders acclimatise (faster/deeper breathing, more red blood cells)", keywords: ["acclimatis", "acclimatiz", "red blood cells", "breathe", "breathing"] },
            { point: "Disagree: slow ascent / 'climb high, sleep low' helps people adjust", keywords: ["slowly", "slow", "climb high", "sleep low", "gradual"] },
            { point: "Disagree: Sherpa/Tibetan or Andean peoples show inherited adaptations over generations (hedged)", keywords: ["sherpa", "tibetan", "andean", "andes", "generations", "inherited", "genetic"] },
            { point: "Agree: altitude sickness can still strike / can be fatal; descent is the cure", keywords: ["altitude sickness", "fatal", "die", "descend", "dangerous"] },
            { point: "Agree: limits — above about 8,000 m ('death zone') no one acclimatises fully; bottled oxygen", keywords: ["8,000", "8000", "death zone", "bottled oxygen", "limit"] },
            { point: "Justified overall judgement weighing both sides", keywords: ["overall", "conclusion", "to a large extent", "mostly", "partly", "i disagree", "i agree"] },
          ],
          commonError: "Only arguing one side, or ending without a clear, justified judgement.",
          hints: [
            "Think on two timescales: one person in weeks, and whole peoples over generations.",
            "Now find the limits — where does acclimatisation stop working?",
            "Finish with 'Overall…' and say *how far* you agree, with a reason.",
          ],
          strategy: "Weigh both sides then judge",
        },
        {
          id: "adaptations-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "desert-adaptations",
          question:
            "During the day a camel's body temperature can rise by several °C before it starts to sweat, and it cools down again in the cold desert night. Explain how this helps the camel save water, and name the type of adaptation. (3 marks)",
          marks: 3,
          modelAnswer:
            "Animals sweat to stop their bodies getting too hot, but sweating loses water. By letting its body temperature rise during the day, the camel delays sweating and so loses much less water. It then gets rid of the stored heat at night, when the desert is cold, without using water. This is a physiological adaptation because it is a process inside the body.",
          markScheme: [
            { point: "Sweating cools the body but loses water", keywords: ["sweat", "sweating", "lose water", "water loss"] },
            { point: "Letting temperature rise means it sweats less / later, saving water; heat lost at cold night", keywords: ["sweats less", "less sweat", "delay", "save", "night", "cool"] },
            { point: "Physiological adaptation (a body process)", keywords: ["physiological"] },
          ],
          hints: [
            "Why do animals sweat, and what does sweating cost?",
            "If the camel lets itself warm up, what does it not need to do as much?",
            "Is this a body part, action or body process?",
          ],
          strategy: "Cause → process → effect",
        },
      ],
    },
  ],

  // ============================== CHALLENGE =================================
  challenge: [
    {
      id: "adaptations-ch-q01",
      kind: "written",
      difficulty: "challenge",
      guideRef: "desert-adaptations",
      question:
        "Field notes on an unfamiliar animal:\n\n> A small mammal lives in the Gobi Desert, Mongolia. Rain is rare. Summer days can be above 40 °C, but winter nights can fall below −30 °C. The ground is gravel and sand with sparse, low plants.\n\nPredict **three** adaptations this animal is likely to have, and justify each one using the conditions described. (6 marks)",
      marks: 6,
      modelAnswer:
        "First, because rain is rare, it is likely to save water physiologically — for example with kidneys that make very concentrated urine — and to get much of its water from its food, like a kangaroo rat.\n\nSecond, because temperatures swing from above 40 °C to below −30 °C, it probably lives in a burrow. Underground the temperature stays much steadier, so the burrow shelters it from summer heat and winter cold; it may be active at night in summer and stay underground for long periods in winter.\n\nThird, to cope with the bitter winter it is likely to have thick fur (perhaps growing a thicker coat in winter), and its ears are probably smaller than a fennec fox's, because large ears would lose too much heat in winter. Its fur is likely to be sandy or grey-brown to camouflage it against gravel and sand.",
      markScheme: [
        { point: "Predicts a water-saving adaptation (concentrated urine / water from food / dry droppings)", keywords: ["urine", "kidneys", "water from food", "seeds", "dry droppings", "save water"] },
        { point: "Justifies it using rare rain", keywords: ["rain", "rare", "dry", "drought", "little water"] },
        { point: "Predicts burrowing / nocturnal / inactive in winter", keywords: ["burrow", "underground", "nocturnal", "night", "hibernat"] },
        { point: "Justifies it using the extreme range of temperature (burrow temperature steadier)", keywords: ["40", "−30", "-30", "steady", "range", "hot and cold", "both"] },
        { point: "Predicts thick (seasonal) fur and/or not-too-large ears", keywords: ["thick fur", "fur", "coat", "small ears", "ears"] },
        { point: "Justifies it using winter cold (or camouflage on gravel/sand)", keywords: ["cold", "winter", "heat loss", "camouflage", "sandy"] },
      ],
      commonError: "Assuming every desert is hot all year — the Gobi is a cold desert in winter, so 'huge ears and thin fur' would not work.",
      hints: [
        "List the challenges first: water, heat, cold, open ground.",
        "This animal faces both extreme heat and extreme cold. Which single behaviour helps with both?",
        "For each prediction: feature → how it works → which condition it solves.",
      ],
      strategy: "Cause → process → effect",
    },
    {
      id: "adaptations-ch-q02",
      kind: "written",
      difficulty: "challenge",
      guideRef: "what-is-adaptation",
      question:
        "Classify each kangaroo rat adaptation as **structural**, **behavioural** or **physiological**, with a reason:\n\n1. It plugs the entrance of its burrow with soil during the day.\n2. Its kidneys produce extremely concentrated urine.\n3. It has long, powerful back legs for hopping away from predators. (3 marks)",
      marks: 3,
      modelAnswer:
        "1. Plugging the burrow is **behavioural**, because it is an action the rat does (it keeps the burrow cool and humid, cutting water loss).\n2. Concentrated urine is **physiological**, because it is a process inside the body.\n3. Long back legs are **structural**, because they are a physical body feature.",
      markScheme: [
        { point: "Plugging the burrow = behavioural (an action)", keywords: ["behavioural", "behavioral", "action"] },
        { point: "Concentrated urine = physiological (a body process)", keywords: ["physiological", "process"] },
        { point: "Long back legs = structural (a body feature)", keywords: ["structural", "body part", "physical"] },
      ],
      commonError: "Calling the kidneys 'structural' — the adaptation is what the kidneys *do*, a physiological process.",
      hints: [
        "For each one ask: can I see it, does the animal do it, or does it happen inside the body?",
        "Kidneys are organs, but the adaptation is the job they do.",
      ],
      strategy: "Eliminate options",
    },
    {
      id: "adaptations-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "what-is-adaptation",
      question:
        "Two animals are modelled as cubes. Animal A has sides of 10 cm; Animal B has sides of 20 cm. Calculate surface area ÷ volume for **Animal B**. Give your answer as a decimal.",
      answer: { type: "number", value: 0.3, allowFraction: false },
      traps: [
        { spec: { type: "number", value: 0.6 }, feedback: "0.6 is Animal A (600 ÷ 1,000). Now do the 20 cm cube." },
        { spec: { type: "number", value: 3.333, tolerance: 0.01 }, feedback: "You divided volume by surface area. Do surface area ÷ volume." },
      ],
      solution: [
        "Surface area = 6 × 20 × 20 = 2,400 cm².",
        "Volume = 20 × 20 × 20 = 8,000 cm³.",
        "2,400 ÷ 8,000 = **0.3** (half of Animal A's 0.6).",
        "Doubling the size halves the ratio, so the bigger animal loses heat relatively more slowly — the reason cold-climate animals tend to be large and compact.",
      ],
      commonError: "Thinking the ratio doubles when size doubles. Surface area grows ×4 but volume grows ×8.",
      hints: [
        "One face is 20 × 20. How many faces does a cube have?",
        "Volume = 20 × 20 × 20.",
        "Divide surface area by volume.",
      ],
      strategy: "Sketch it",
    },
    {
      id: "adaptations-ch-q04",
      kind: "written",
      difficulty: "challenge",
      guideRef: "polar-adaptations",
      question:
        "The fennec fox of the Sahara has very large ears; the Arctic fox has small, rounded ears, a short muzzle and short legs. Use the idea of **surface area to volume** to explain these differences. (4 marks)",
      marks: 4,
      modelAnswer:
        "Ears, muzzles and legs stick out from the body, so they have a large surface area compared with their small volume, and heat escapes from them quickly. The fennec fox's ears are thin and full of blood vessels, so they act like radiators, letting it lose heat in the Sahara. The Arctic fox needs the opposite: by keeping its ears, muzzle and legs short, it reduces the surface area of its body compared with its volume, so it loses less heat and these parts are less likely to get frostbite.",
      markScheme: [
        { point: "Body parts that stick out have a large surface area compared with volume, so lose heat quickly", keywords: ["surface area", "volume", "stick out", "lose heat", "ratio"] },
        { point: "Fennec fox ears are thin with many blood vessels — radiate heat", keywords: ["blood", "vessels", "radiate", "thin", "release heat"] },
        { point: "So large ears help the fennec fox stay cool in the hot desert", keywords: ["cool", "hot", "desert", "sahara", "lose heat"] },
        { point: "Arctic fox's short ears/muzzle/legs reduce surface area, so less heat lost / less frostbite", keywords: ["short", "small", "less heat", "keep heat", "frostbite", "arctic"] },
      ],
      hints: [
        "Which parts of a body lose heat fastest — the round middle or the bits that stick out?",
        "Ears are thin and full of blood. What happens to warm blood flowing through them?",
        "One fox wants to lose heat; the other wants to keep it.",
      ],
      strategy: "Compare and contrast",
    },
    {
      id: "adaptations-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "mountain-adaptations",
      question:
        "Spot the myth. A poster says: 'At the top of Everest the air pressure is only about one-third of that at sea level, so the air is only about 7% oxygen.' What percentage of the air at the summit is actually oxygen? Give your answer to the nearest whole number.",
      answer: { type: "number", value: 21, tolerance: 0.5, display: "About 21%" },
      traps: [{ spec: { type: "number", value: 7 }, feedback: "That's the poster's myth. Lower pressure means fewer molecules in each breath — but the *mix* of gases stays the same." }],
      solution: [
        "Air is about **21%** oxygen at every height in the lower atmosphere.",
        "What changes is the pressure: at the summit each breath holds only about one-third as many molecules of everything, so about one-third as much oxygen per breath.",
        "So the poster confused the *percentage* with the *amount*.",
      ],
      commonError: "Thinking the percentage of oxygen falls with height — it is the total amount of air per breath that falls.",
      hints: [
        "Does the recipe of the air change as you go up, or just how much air there is?",
        "Think of a jug of squash diluted the same way but with less in the jug.",
      ],
      strategy: "Spot the misconception",
    },
    {
      id: "adaptations-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "polar-adaptations",
      question:
        "Wei Ling writes: 'A polar bear's fur is white so that it can absorb lots of sunlight and keep warm.'\n\nExplain what is wrong with her statement, and explain what really keeps a polar bear warm. (4 marks)",
      marks: 4,
      modelAnswer:
        "Wei Ling's science is back to front: white surfaces **reflect** most light rather than absorbing it, so the white appearance cannot be the main source of warmth. Its main job is **camouflage**, helping the bear creep up on seals across the snow and ice. What really keeps a polar bear warm is a dense coat in which the underfur and long guard hairs trap a layer of insulating air, plus a thick layer of blubber under the skin, which can be up to about 10 cm thick. Its large, compact body with small ears and a short tail also gives a small surface area for its volume, so it loses heat slowly.",
      markScheme: [
        { point: "White surfaces reflect light, not absorb it — so the statement is wrong", keywords: ["reflect", "not absorb", "doesn't absorb", "white reflects"] },
        { point: "White colour is really for camouflage when hunting seals", keywords: ["camouflage", "hunt", "seals", "blend", "hidden"] },
        { point: "Dense fur (underfur and guard hairs) traps insulating air", keywords: ["fur", "trap air", "dense", "underfur", "guard hairs", "insulat"] },
        { point: "Thick blubber and/or large compact body with small ears and tail", keywords: ["blubber", "fat", "large", "compact", "small ears", "surface area"] },
      ],
      commonError: "Agreeing that white absorbs heat — dark colours absorb more light; white reflects it.",
      hints: [
        "On a sunny day, would you feel hotter in a black T-shirt or a white one?",
        "If the white colour is not for warmth, what does it help the bear do?",
        "Now name the real insulation: what is under and within the fur?",
      ],
      strategy: "Spot the misconception",
    },
    {
      id: "adaptations-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "polar-adaptations",
      question:
        "Compare the adaptations of the **fennec fox** (Sahara) and the **Arctic fox** (Arctic tundra). Include at least one similarity and one difference, and explain each. (6 marks)",
      marks: 6,
      modelAnswer:
        "The two foxes share a body plan that has been adapted to opposite problems.\n\nThe clearest difference is their ears. The fennec fox has huge, thin ears that release heat and help it hear prey under the sand, while the Arctic fox has small, rounded ears, a short muzzle and short legs to reduce its surface area and keep heat in.\n\nTheir colouring differs too, but for the same reason — camouflage. The fennec fox is sandy all year to match the desert, while the Arctic fox is white in winter and brown or grey in summer as the snow comes and goes.\n\nSurprisingly, they share some features. Both have thick fur and fur on the soles of their feet: the Arctic fox's keeps out the cold and grips on ice, while the fennec fox's protects it from burning sand and the cold desert night.\n\nTheir behaviour differs: the fennec fox is nocturnal and rests in a burrow by day to avoid the heat, whereas the Arctic fox stores food for winter and may follow polar bears to scavenge.\n\nOverall, the same type of animal has been shaped by natural selection for very different environments, which is why the same features (ears, fur, colour) take opposite forms.",
      markScheme: [
        { point: "Difference: ear size — fennec large to lose heat / hear prey; Arctic small to keep heat", keywords: ["ears", "large", "small", "lose heat", "keep heat"] },
        { point: "Uses surface area idea (e.g. Arctic fox short muzzle/legs, compact body)", keywords: ["surface area", "volume", "compact", "short legs", "muzzle"] },
        { point: "Colour for camouflage: sandy vs seasonal white/brown", keywords: ["camouflage", "sandy", "white", "brown", "season"] },
        { point: "Similarity: both have thick fur and/or furry soles, explained for each environment", keywords: ["both", "soles", "feet", "thick fur", "similar"] },
        { point: "Behaviour difference: fennec nocturnal/burrows vs Arctic fox stores food/scavenges after polar bears", keywords: ["nocturnal", "burrow", "store", "cache", "scavenge", "polar bear"] },
        { point: "Overall comparative conclusion (same body plan adapted to opposite conditions)", keywords: ["overall", "opposite", "both", "whereas", "however", "natural selection"] },
      ],
      commonError: "Writing two separate descriptions with no comparison — use 'whereas', 'both' and 'however'.",
      hints: [
        "Draw a two-column table: ears, fur, colour, feet, behaviour.",
        "Look for a feature both foxes share — even though the reason is different.",
        "Use comparison words in every paragraph: both, whereas, however.",
      ],
      strategy: "Compare and contrast",
    },
    {
      id: "adaptations-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "mountain-adaptations",
      question:
        "Ravi uses the lapse rate to model temperatures for a snow leopard's habitat. A valley floor at 2,000 m has an air temperature of 12 °C. Temperature falls by about 6.5 °C for every 1,000 m. Estimate the temperature on a ridge at 5,400 m. Give your answer in °C to 1 decimal place.",
      answer: { type: "number", value: -10.1, tolerance: 0.05, allowFraction: false, display: "−10.1 °C" },
      traps: [
        { spec: { type: "number", value: 10.1, tolerance: 0.05 }, feedback: "Check your sign: 12 − 22.1 is below zero." },
        { spec: { type: "number", value: -23.1, tolerance: 0.05 }, feedback: "You used the full 5,400 m. The valley is already at 2,000 m — the climb is 3,400 m." },
      ],
      solution: [
        "Height climbed = 5,400 − 2,000 = 3,400 m.",
        "Temperature drop = 3.4 × 6.5 = 22.1 °C.",
        "12 − 22.1 = **−10.1 °C**.",
      ],
      commonError: "Using the full height of the ridge instead of the height climbed from the valley.",
      hints: [
        "How far do you climb from the valley to the ridge?",
        "3,400 m is 3.4 lots of 1,000 m.",
        "3.4 × 6.5 = 22.1 — subtract it from 12.",
      ],
      strategy: "Use figures from the source",
    },
  ],
};
