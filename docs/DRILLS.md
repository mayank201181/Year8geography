# Skill drills spec — Geography (unlimited retrieval + skills practice)

Drills give a learner **unlimited fresh practice** on one fine-grained skill, auto-marked, with a
worked solution. In geography there are two kinds — write both:

1. **Skills generators** — procedurally generated numbers/maps: population density, rate of natural
   increase, population change, dependency ratio, % change, range/mean from climate data, total
   rainfall, lapse-rate temperature at altitude, 4-/6-figure grid references on a generated grid
   SVG, map-scale distance, cliff-retreat rate, % urban, water-budget shares…
2. **Retrieval drills (fact banks)** — quick recall of key terms, processes, case-study facts,
   cause→effect links ("Name the process…", "Which stage of the DTM…", "Give the term for…",
   "Which landform forms when…", "In which year…"). These train Tanglin's Knowledge-Organiser
   self-quizzing. Build a bank array in the file and pick from it with the rng, optionally
   combined with 2–3 question templates per fact.

You write `lib/drills/<topicId>.ts`:

    import type { Drill } from "./types.ts";
    import { num, big, roundTo, clean } from "./helpers.ts";
    export const drills: Drill[] = [ … ];

Read `lib/drills/types.ts`, `lib/drills/helpers.ts`, `lib/drills/_example.ts` (maths example of the
shape), `lib/types.ts` (AnswerSpec), `lib/answerCheck.ts` (how `number` and `text` answers are
checked — text forgives case, leading "the", plurals and a one-letter typo) and `docs/CONTENT.md`.

## Requirements
- **8–12 drills per topic**, covering every section of the topic in `lib/topics/meta.ts` (set
  `guideRef` to the section id). At least 4 must be retrieval drills and, where the topic has any
  numeric skill, at least 2 skills generators. Order basic (`level: 1`) → harder (`level: 3`).
- `id`: `"<topicId>.<kebab-skill>"`; `topicId` set; a clear `title` ("Name the coastal erosion
  process", "Calculate population density").
- `generate(rng, tier)` must be **pure and deterministic** given the rng (only `rng.*` — never
  Math.random or Date). `tier` 1 = core facts / friendly numbers, 2 = typical Year 8, 3 = stretch
  (harder terms, multi-step, unfamiliar context).
- **Variety**: the validator demands ≥ 25 distinct prompts per 200 seeds per tier. For fact banks,
  include ≥ 25 bank entries per drill (or fewer entries × several phrasings), and make tier 3 use
  harder entries.
- Answers: `number` (with sensible `tolerance` only where rounding is stated) or `text` with
  **all** reasonable variants in `accept`. A retrieval prompt must have exactly one right term —
  avoid prompts where two different terms would both be correct.
- **Compute answers exactly.** Build decimals from integers (`clean`, `roundTo`). State rounding in
  the prompt ("to 1 decimal place", "to the nearest whole number").
- `solution` = 1–4 short steps/explanations with the real numbers or the reason. `hint` = one
  strategic nudge (not the answer). Add `traps` for the most common wrong answers with targeted
  feedback (e.g. attrition vs abrasion; emigration vs immigration; dividing area by population). A
  trap must never equal the correct answer — guard it.
- Grid-reference drills: draw an SVG grid (eastings along the bottom, northings up the side, a
  feature symbol placed so the 4- or 6-figure answer is unambiguous); same SVG rules as
  docs/CONTENT.md (no backticks or `${` inside the generated SVG string is fine since you build it
  with normal string concatenation in TS — but the final SVG must still have viewBox, xmlns,
  role="img", aria-label).
- Facts must be accurate (see docs/CONTENT.md reference figures); hedge nothing in a keyed answer —
  if a fact is contested, don't drill it.

## Validation (mandatory)

    node scripts/validate-drills.ts <topicId>
    node scripts/typecheck-file.mjs lib/drills/<topicId>.ts

The validator runs every drill 200× per tier and checks text, markup, answer self-consistency,
traps, float noise and variety. It prints a sample of each drill — **read the samples and answer a
few yourself** to confirm they're right. Fix everything before finishing.
Do NOT run `npm run build`, `next build` or `npm install`.
