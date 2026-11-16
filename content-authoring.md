# Content authoring spec (for content agents)

You are writing **one** topic data file for a Year 8 (age 12–13) **Geography** web app for a
student at Tanglin Trust School, Singapore (British-curriculum international school, KS3 →
IGCSE pathway). The school's Year 8 units are: **8 Billion++** (population), **Extreme
Environments**, **Cracking Coasts** and **Future Cities**. Your task names your topic and the
curriculum bullet points it must cover.

## Hard rules
1. **Write exactly one file**: `lib/topics/<id>.ts`. Do not touch any other file.
2. The file must `import type { Topic } from "../types";` and
   `export const <exportName>: Topic = { ... };` — names given in your task.
3. **Read first**: `lib/types.ts` (the contract) and `lib/topics/_example.ts` (the exact shape,
   escaping, and an example SVG diagram). Match that shape exactly. `subject` must be the unit
   name given in your task.
4. **Do NOT run `npm run build` / `next build`** (other agents share this folder). Type-check your file with
   `node scripts/tc.mjs lib/topics/<id>.ts` (must print `tc: OK`).
5. Content must be **geographically accurate and up to date** (use figures you are confident
   of; round sensibly and say "about"; prefer stable facts: e.g. world population passed
   8 billion in November 2022; Lagos population ~15–17 million city / 20m+ metro — give
   ranges where sources disagree). Define every key term the first time it is used.
   British English (colour, metres, programme). Singapore examples wherever natural — the
   learner lives there (HDB, URA, Marina Barrage, East Coast Park seawalls, Sungei Buloh,
   haze, monsoons, Baby Bonus, Changi, MRT, food imports, Pulau Ubin, Sisters' Islands reefs).

## String / escaping rules (to avoid syntax errors)
- Use **double quotes** for normal strings. An apostrophe inside is fine: `"it's"`.
- For any string containing double quotes — **especially `diagram` SVG markup** — use a
  **backtick template literal**. SVG has no backticks, so this is safe. Never put `${` inside.
- SVGs: small and valid, `viewBox`, `xmlns="http://www.w3.org/2000/svg"`, `role="img"`,
  `aria-label`. Use simple shapes, labels (font-size ≥ 10 in a ~320-wide viewBox) and arrows.
  Geography diagrams: sketch maps with compass/scale, cross-sections, population pyramids,
  climate graphs (bars for rainfall, line for temperature, two y-axes), flow diagrams, labelled
  landform sequences, annotated photos-as-drawings. Every guide section SHOULD have one.
  Marker ids inside an SVG must be unique across the whole topic (prefix with the section id).

## Required content (fill EVERY field of Topic)
- `intro`: 2–3 sentence motivating paragraph.
- `guide`: **6–8 sections**, covering ALL the curriculum bullets in your task. Each: unique `id`
  (kebab-case), `heading`, a rich multi-paragraph `body` (`**bold**`, blank lines between
  paragraphs, `- ` bullets), a `diagram` (inline SVG), `diagramCaption`, 2–4 `keyPoints`, a
  `thinkDeeper` reasoning prompt, and a **`discovery`** opener `{ problem, idea }`: a puzzle the
  learner tries BEFORE reading (a map/data/photo-style question, "why would…?") and the idea it
  reveals. Where a real place illustrates the section, add a **`caseStudy`** `{ place, facts }`
  with 3–6 hard facts (numbers, dates, names). Add `skill` where a geographical skill is
  practised (climate graph, population pyramid, grid reference, describing a distribution
  using "TEA" = Trend–Example–Anomaly, PEEL paragraph, choropleth map, calculating
  density/natural increase/percentage change).
- `mnemonics`: 2–4 genuinely helpful memory devices.
- `examMistakes`: 5–8 specific mistakes that lose marks (e.g. describing instead of explaining,
  no data quoted, "hydraulic action" confused with "abrasion").
- `misconceptions`: 4–6 `{ wrong, right }` pairs.
- `expertDebates`: 2–3 real debates (honest, age-appropriate, both sides).
- `realWorld`: 4–6 real-life connections, each with an `emoji`.
- `flashcards`: 12–16 `{ front, back }` covering key terms and case-study facts.
- `mustKnow`: 6–10 "can you do this?" statements.
- `videos`: 3–4 links as **YouTube search URLs** (`https://www.youtube.com/results?search_query=...`)
  naming good channels (Time for Geography, Cool Geography, BBC Bitesize, Geography Hub, Internet Geography).
- `quiz`: exactly **4 MCQ + 4 QA**.
- `questionBank`:
  - `mcqPapers`: **4 papers** titled "MCQ Paper 1".."MCQ Paper 4", **20 questions each**.
  - `qaPapers`: **4 papers** titled "Written Paper 1".."Written Paper 4", **15 questions each**.

## Question quality
- Every MCQ: 4 plausible options, exactly one correct (`answerIndex` 0–3 — check
  `options[answerIndex]` literally), a non-giveaway `hint`, an `explanation` saying why the
  right answer is right AND why a tempting distractor is wrong. Do not always key the same
  position — spread answers across 0–3.
- Every QA: realistic `marks` (2–6), a `hint`, a full `modelAnswer`, a `markScheme` of exactly
  `marks` points — each with **3–6 lower-case `keywords`/synonyms** a student might write (a
  point is credited if any keyword appears; prefer short stems like "erod", "migrat"), and a
  `commonError`. Include longer "explain", "describe the pattern", "to what extent / evaluate"
  and data-response questions (give the data in the question text: a small table written as
  lines, e.g. "Year 1950: 2.5 billion; 2000: 6.1 billion"). PEEL-style 6-mark questions should
  reward Point, Evidence (named place/figure), Explanation, Link.
- Mix: recall, definitions, explain-why, apply to a new place, interpret data/graph/map
  descriptions, calculate (density, natural increase, % change, range), compare, evaluate.
- Set `guideRef` on most questions to the `id` of the guide section tested.
- Every question needs a **unique `id`** using the pattern in your task. No duplicate questions.
- Tier difficulty: roughly 30% warm-up, 50% core, 20% genuine challenge (multi-step data
  reasoning, unfamiliar place, evaluation).

Aim for genuinely useful, exam-style material a parent would be proud to hand their child.
