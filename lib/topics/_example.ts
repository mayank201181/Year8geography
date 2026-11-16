// ---------------------------------------------------------------------------
// REFERENCE EXAMPLE for content authors — shows the exact shape of the three
// per-topic files. NOT imported by the app.
//
//   lib/topics/<id>/guide.ts     → export const guide: TopicGuide
//   lib/topics/<id>/mcq.ts       → export const mcqPapers: Paper[]      (3 papers × 15 MCQs)
//   lib/topics/<id>/practice.ts  → export const practice: TopicPractice (quiz 10, papers p1–p2 × 15, challenge 8)
//
// Import types with a .ts extension and `import type` (files are also loaded
// directly by Node for validation):  import type { … } from "../../types.ts";
// ---------------------------------------------------------------------------
import type { Paper, TopicGuide, TopicPractice } from "./../types.ts";

// ============================== guide.ts ===================================
export const guide: TopicGuide = {
  id: "example",
  title: "Example Topic",
  strand: "Population",
  icon: "🌏",
  summary: "Why 8 billion people crowd into a few places.",
  intro:
    "People are not spread evenly over the Earth. Learn to describe the pattern on a map, measure crowding with population density, and explain it using physical and human factors.",
  guide: [
    {
      id: "population-density",
      heading: "Population density",
      discovery: {
        problem:
          "Singapore has about 6 million people. Australia has about 27 million. Which country feels more crowded — and how could you prove it with one number?",
        idea:
          "Total population alone can't tell you. Divide people by **area**: Singapore squeezes about 8,000 people into each km², Australia about 3–4. That number is **population density**.",
      },
      body:
        "**Population density** is the average number of people living in each square kilometre.\n\n    density = population ÷ area (km²)\n\n- **Densely populated**: many people per km² (Singapore, Bangladesh).\n- **Sparsely populated**: few people per km² (Mongolia, Australia's interior).\n\n| Country | Population (2024, approx.) | Area (km²) | Density (per km²) |\n|---|---|---|---|\n| Singapore | 6,000,000 | 735 | about 8,160 |\n| Australia | 27,000,000 | 7,690,000 | about 3.5 |",
      diagram: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two equal squares: one packed with dots labelled dense, one with three dots labelled sparse"><rect x="20" y="15" width="120" height="80" fill="#e5e7eb" stroke="#334155"/><rect x="180" y="15" width="120" height="80" fill="#bbf7d0" stroke="#334155"/><g fill="#1f2937"><circle cx="35" cy="30" r="3"/><circle cx="55" cy="40" r="3"/><circle cx="75" cy="28" r="3"/><circle cx="95" cy="45" r="3"/><circle cx="115" cy="32" r="3"/><circle cx="40" cy="60" r="3"/><circle cx="62" cy="75" r="3"/><circle cx="85" cy="62" r="3"/><circle cx="105" cy="80" r="3"/><circle cx="125" cy="66" r="3"/><circle cx="210" cy="40" r="3"/><circle cx="260" cy="70" r="3"/><circle cx="285" cy="30" r="3"/></g><text x="80" y="112" font-size="12" text-anchor="middle" font-family="sans-serif">Densely populated</text><text x="240" y="112" font-size="12" text-anchor="middle" font-family="sans-serif">Sparsely populated</text></svg>`,
      diagramCaption: "Same area, different numbers of people — different densities.",
      workedExamples: [
        {
          title: "Calculating density",
          problem: "A district has 240,000 people living in 60 km². What is its population density?",
          steps: ["Density = population ÷ area.", "240,000 ÷ 60 = 4,000."],
          answer: "4,000 people per km²",
          yourTurn: {
            question: "Your turn: an island has 18,000 people and an area of 90 km². What is its population density, in people per km²?",
            answer: { type: "number", value: 200 },
            solution: "18,000 ÷ 90 = 200 people per km².",
          },
        },
      ],
      keyPoints: ["Density = people ÷ area.", "Units: people per km².", "High density ≠ poor — Singapore is dense and wealthy."],
      whyItWorks:
        "Dividing by area puts every place on the same footing — 'people in one typical square kilometre' — so a tiny city-state and a giant continent can be compared fairly.",
      strategies: ["Use figures from the source", "Compare and contrast"],
      thinkDeeper: "Australia's average density is very low, yet Sydney's suburbs are crowded. What does an average hide?",
    },
  ],
  learn: {
    flashcards: [{ front: "Population density", back: "The average number of people per km² (population ÷ area)." }],
    mustKnow: ["Calculate population density and give the units."],
    misconceptions: [{ wrong: "The country with the most people is the most crowded.", right: "Crowding depends on area too — compare densities, not totals." }],
    examMistakes: ["Forgetting the units (people per km²)."],
    mnemonics: [{ topic: "Describing a map pattern", device: "CLOCC", explanation: "Continents, Lines of latitude, Oceans, Countries, Compass directions." }],
    realWorld: [{ title: "HDB new towns", detail: "Singapore plans high-rise towns so millions can live densely but comfortably.", emoji: "🏢" }],
    videos: [{ title: "Population density explained", channel: "Time for Geography", url: "https://www.youtube.com/results?search_query=time+for+geography+population+density" }],
    formulas: [{ name: "Population density", formula: "Population ÷ area, in people per km²." }],
  },
};

// =============================== mcq.ts ====================================
export const mcqPapers: Paper[] = [
  {
    id: "example-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "example-m1-q01",
        question: "Which of these is a **physical** factor that encourages people to live in an area?",
        options: ["Flat, fertile land near a river", "Plenty of factory jobs", "Good motorway links", "A stable government"],
        answerIndex: 0,
        explanation:
          "Flat, fertile land by a river is part of the natural environment, so it is physical. Factory jobs, roads and government are made by people — human factors.",
        difficulty: "warmup",
        guideRef: "population-density",
        hints: ["Physical = nature; human = made by people."],
        strategy: "Eliminate options",
      },
    ],
  },
];

// ============================= practice.ts =================================
export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "example-quiz-q01",
      question: "What term means the average number of people living in each square kilometre?",
      answer: { type: "text", accept: ["population density", "density"] },
      solution: ["Population density = population ÷ area, measured in people per km²."],
      difficulty: "warmup",
      guideRef: "population-density",
      hints: ["It compares people with area."],
    },
  ],
  papers: [
    {
      id: "example-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "example-p1-q01",
          question: "Bangladesh has about 171 million people and an area of about 148,000 km². Calculate its population density to the nearest whole number of people per km².",
          answer: { type: "number", value: 1155, tolerance: 1 },
          solution: ["Density = population ÷ area.", "171,000,000 ÷ 148,000 ≈ 1,155.4", "≈ 1,155 people per km²."],
          commonError: "Dividing the area by the population (giving a tiny decimal).",
          traps: [{ spec: { type: "number", value: 0.000865, tolerance: 0.0001 }, feedback: "You divided area by population — it's people ÷ area." }],
          difficulty: "core",
          guideRef: "population-density",
          hints: ["Which goes on top: people or km²?", "Write both numbers in full before dividing.", "171,000,000 ÷ 148,000"],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "example-p1-q02",
          question: "Explain why Singapore can have a very high population density and still offer a high quality of life. [3 marks]",
          marks: 3,
          modelAnswer:
            "Singapore builds upwards: most people live in high-rise HDB flats, so many people fit on little land. Careful planning puts schools, hawker centres and MRT stations inside each new town, so services are close by. Investment in public transport and green spaces (park connectors, City in Nature) reduces congestion and keeps the city liveable.",
          markScheme: [
            { point: "High-rise housing / building upwards fits many people on little land", keywords: ["high-rise", "hdb", "flats", "upwards", "tall"] },
            { point: "Planned new towns with services close by", keywords: ["planning", "planned", "new town", "services", "schools", "hawker"] },
            { point: "Good public transport / green space reduce problems of crowding", keywords: ["mrt", "public transport", "bus", "park", "green", "erp"] },
          ],
          commonError: "Only describing that Singapore is crowded without explaining how it copes.",
          difficulty: "core",
          guideRef: "population-density",
          hints: ["Think about how homes are built.", "Think about how towns are planned and how people move around."],
          strategy: "PEEL paragraph",
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "written",
      id: "example-ch-q01",
      question:
        "'Countries with high population density are over-populated.' Using Singapore and one other country, to what extent do you agree? [4 marks]",
      marks: 4,
      modelAnswer:
        "I largely disagree. Singapore has a density of about 8,000 people per km² but has enough jobs, housing and water (through the Four National Taps) for its people, so it is not over-populated. Over-population depends on resources and technology, not density alone. However, some densely populated places with few resources, such as parts of rural Bangladesh at risk of flooding, can struggle to provide enough for everyone. So high density only becomes over-population when resources and technology cannot support the population.",
      markScheme: [
        { point: "Uses Singapore's density with a figure and shows it copes", keywords: ["8,000", "8000", "singapore", "copes", "enough"] },
        { point: "Defines over-population as population vs resources/technology", keywords: ["resources", "technology", "not enough", "support"] },
        { point: "Gives a contrasting example where density does cause problems", keywords: ["bangladesh", "flood", "struggle", "shortage"] },
        { point: "Reaches a justified conclusion", keywords: ["overall", "so", "therefore", "depends", "conclusion"] },
      ],
      difficulty: "challenge",
      guideRef: "population-density",
      hints: ["What does 'over-populated' really mean?", "Is Singapore short of resources?", "Find a case where crowding *does* cause shortages, then judge."],
      strategy: "Weigh both sides then judge",
    },
  ],
};
