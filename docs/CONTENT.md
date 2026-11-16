# Year 8 Geography Lab — content authoring spec

You are writing content for a geography study app used by a **12–13-year-old (Year 8)** at
**Tanglin Trust School, Singapore** (British international school, KS3 → IGCSE pathway). The
topics follow Tanglin's Year 8 units: **8 Billion ++**, **Extreme Environments**, **Cracking
Coasts**, **Future Cities**, plus the map/graph skills every unit uses. A parent will hand this to
their child, so it must be **factually correct, clear, encouraging and genuinely good geography
teaching** — the standard of a strong KS3 department, with a stretch towards IGCSE.

Read first: `lib/types.ts` (the contract), `lib/topics/_example.ts` (exact shape of the files) and,
for your topic, its entry in `lib/topics/meta.ts` (title, strand, the **fixed section ids** and
what each section must cover).

## Pedagogy: Art of Problem Solving (AoPS) style, adapted for geography — non-negotiable

- **Problem first.** Every guide section opens with a `discovery` puzzle the learner tries BEFORE
  the explanation — a surprising map, data table or "why on earth…?" question (e.g. "Egypt has
  about 110 million people but almost all live on about 5% of the land. Why?"). `idea` reveals the
  insight afterwards.
- **Explain, don't just list.** Show the chain of reasoning (cause → process → effect). `whyItWorks`
  is the "Why does this happen?" box: the mechanism in plain words (why sinking air means no rain;
  why an arch becomes a stack).
- **Productive struggle.** Every core/challenge question has a **hint ladder** (`hints`, 2–4 rungs):
  rung 1 = a strategic nudge ("Look at the key — which colour means most people?"), middle rungs =
  bigger hints, last rung = the key idea. Hints never just state the answer.
- **Multiple paths / perspectives.** Where natural, give two ways to answer (`solutions`) — e.g. a
  physical-factor explanation and a human-factor one, or two stakeholders' views.
- **Name strategies.** Use `strategy` / `strategies` with names like: Read the key first ·
  Use the command word · TEA (Trend, Evidence, Anomaly) · CLOCC (Continents, Lines of latitude,
  Oceans, Countries, Compass) · PEEL paragraph · Cause → process → effect · Think at different
  scales · Compare and contrast · Look for the anomaly · Use figures from the source · Weigh both
  sides then judge · Sketch it · Work it out from the map · Eliminate options · Spot the
  misconception · Social / economic / environmental (SEE).
- **Mistakes are data.** Write `commonError` notes and MCQ distractors built from real
  misconceptions (e.g. "weathering and erosion are the same", "deserts are always hot", "more
  people always means more poverty", "longshore drift moves sand in the direction of the backwash").
- **Genuine challenge.** `challenge` difficulty means *hard for a strong 13-year-old*: unfamiliar
  data to interpret, multi-step calculations, evaluate/justify questions, spot-the-flaw in an
  argument, apply a model to a new place, decision-making exercises. IGCSE (Cambridge 0460 /
  Edexcel) flavour is right.

## Voice and context

- Warm, direct, second person, short sentences. Treat the learner as capable — **never babyish**.
  British spelling (colour, metre, organise, programme). No "Great job!!!" filler.
- **Singapore-first examples where natural** (HDB new towns, land reclamation, the Four National
  Taps, NEWater, monsoons, Sumatra squalls, MRT, Sisters' Islands Marine Park, Pulau Ubin,
  Singapore Census 2020, Baby Bonus, East Coast Park), mixed with classic UK/global case studies
  (Dorset coast, Holderness, Spurn Head, Sahara, Antarctica, Himalayas, Great Barrier Reef, Lagos,
  Las Vegas, China, Japan, Niger).
- Diverse names (Aisha, Wei Ling, Arjun, Priya, Marcus, Siti, Ethan, Mei, Ravi, Hana, Jun, Zara).
- **Food examples are vegetarian.** Metric units; °C; km; km².

## Facts: accuracy rules (most important)

- Use **well-established figures** a teacher/textbook would use. When a figure is an estimate or
  changes year to year, say "about" / "roughly" and give the year (e.g. "about 8.1 billion people
  (2024)"; "Lagos: estimates range from about 15 to over 20 million").
- Never invent statistics, quotes, dates, place names or studies. If unsure of an exact number, use
  a rounded, hedged one or leave it out. Prefer the textbook-standard version of a process.
- Reference figures you may rely on: world population 8 billion reached 15 Nov 2022 (UN);
  1 billion ≈ 1804, 2 bn 1927, 3 bn 1960, 4 bn 1974, 5 bn 1987, 6 bn 1999, 7 bn 2011; UN WPP 2024
  projects a peak of about 10.3 billion in the mid-2080s; about 57% of people live in urban areas
  (2023); Singapore ≈ 6.0 million people (2024), ≈ 735 km², density ≈ 8,000 per km², resident TFR
  ≈ 0.97 (2023); China OCP 1980–2015, two-child 2016, three-child 2021; China's population fell in
  2022 for the first time in about six decades; hot deserts < 250 mm rain/year; temperature falls
  ≈ 6.5 °C per 1000 m; tropical storms need sea surface ≥ 26.5 °C; Antarctic Treaty signed 1959;
  IAATO: max 100 visitors ashore at one site at a time, ships with > 500 passengers may not land
  people; Great Barrier Reef ≈ 2,300 km long, ≈ 2,900 reefs, Marine Park 1975, World Heritage 1981,
  ~33% green (no-take) zones since 2004, mass bleaching 2016, 2017, 2020, 2022, 2024; reefs cover
  < 1% of the ocean floor but support ~25% of marine species.

## Text format (every rendered string)

Markdown-lite (see the header of `lib/types.ts`):
- `**bold**`, `*italic*`, blank line = new paragraph, `- ` bullets, `1. ` numbered lines,
  `| a | b |` tables (great for data: birth/death rates, climate data, census results), `> ` callout,
  lines indented 4 spaces = a worked calculation block.
- `{{ … }}` renders maths: use it only for fractions/powers in calculations, e.g. `{{6000000/735}}`.
  Ordinary numbers stay plain text (8,000 people per km²).
- Use the real minus sign − for negatives (−40 °C) and the degree sign (°, °C).
- Inside TypeScript: use double-quoted strings; use a backtick template literal only for SVG. The
  **only** escapes allowed are `\n` (`\n` between bullet lines, `\n\n` between paragraphs) and
  `\"`. Never `\t`, `\f`, `\b`, never LaTeX.

## Diagrams (inline SVG) — geography needs lots of these

- A backtick string starting `<svg viewBox="…" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="…">`
  and ending `</svg>`. No `${`, no backticks inside, no scripts, no external images, no `<style>`.
- White background, dark strokes (#1f2937 / #334155) and soft fills: sea #bae6fd, land #bbf7d0,
  desert #fde68a, ice #e0f2fe, rock #d6d3d1, urban #e5e7eb, highlight #fecaca, purple #c7d2fe.
  font-size 11–14, font-family sans-serif. viewBox ≤ about 480×320; everything inside it.
- Good geography diagrams: annotated cross-sections (headland erosion sequence, wave-cut platform,
  spit formation, longshore drift zig-zag, tropical storm cross-section), simplified world maps with
  latitude lines (schematic shapes are fine, but positions must be roughly right: Sahara north of
  the equator, Australia south-east of Asia), population pyramids drawn from stated data, climate
  graphs drawn exactly from a stated data table, the DTM graph, grid-square map extracts with
  eastings/northings, push–pull diagrams, flow diagrams.
- **Data diagrams must match the numbers in the text exactly** (bar heights proportional, axes
  labelled with units, scale ticks correct).

## Question rules (MCQ / short / written)

- **Ids**: exactly as specified in your task (e.g. `coral-reefs-m2-q07`, `coral-reefs-p1-q14`,
  `coral-reefs-quiz-q03`, `coral-reefs-ch-q08`), zero-padded, in order.
- Every question: `difficulty` (`warmup` | `core` | `challenge`), `guideRef` (one of your topic's
  section ids — **every section must be practised**), `hints` (≥1 for warmup, 2–4 for
  core/challenge), `strategy` where natural.
- Mix question types the way a KS3/IGCSE paper does: recall of key terms, **interpreting a
  resource** (a table, an SVG map/graph/pyramid/climate graph you draw, a short case-study
  extract), calculation (density, % change, range, rate of natural increase, dependency ratio,
  grid references, scale distance), describe, explain, suggest, compare, and evaluate/"to what
  extent". **No near-duplicates.**
- **MCQ**: exactly 4 options, exactly one correct, distractors built from *real* misconceptions.
  Options are **shuffled at display time**, so never write "option A", "all/none of the above",
  "both A and B". The `explanation` says why the right answer is right and why a tempting
  distractor is wrong (name it by its content). Spread `answerIndex` evenly across 0–3.
- **Short (auto-marked)** — for answers with ONE checkable value:
  - `number` for calculations (put the unit in the question: "Give your answer in people per km²,
    to the nearest whole number"). If rounding is asked, `value` is the rounded value; you may set
    a small `tolerance` when reasonable readings from a graph differ (e.g. `tolerance: 1`).
  - `text` for key terms, place names, grid references and one-word answers. List **every
    reasonable variant** in `accept` (e.g. `["hydraulic action", "hydraulic power"]`,
    `["longshore drift", "long shore drift", "littoral drift"]`, `["4523", "45 23"]`). The checker
    also forgives case, a leading "the", plurals and a one-letter typo. Make the question
    unambiguous so only one term fits ("Name the process where waves throw sand and pebbles at the
    cliff, wearing it away like sandpaper.").
  - `solution`: clear worked steps / reasoning. `commonError` for the classic slip. Add 1–2 `traps`
    for predictable wrong answers (e.g. `{type:"text", accept:["attrition"]}` with feedback
    "Attrition is rocks hitting EACH OTHER — this is rocks hitting the cliff.").
- **Written** (describe / explain / compare / suggest / evaluate) — the main geography format,
  self-marked against a mark scheme: `marks` = number of `markScheme` points (2–6). Each point is
  one creditworthy idea; `keywords` are lower-case words a student would actually write (several
  synonyms each). `modelAnswer` is a complete answer a teacher would give full marks — for 4+ marks
  write it as connected PEEL prose using figures/place names. For "evaluate"/"to what extent"
  questions, the scheme must reward both sides **and** a justified conclusion.
- Every fact in a question, option or answer must be correct and consistent with the guide.

## Validation (mandatory before you finish)

Run, from the repo root:

    node scripts/validate-topic.ts <topicId>
    node scripts/typecheck-file.mjs lib/topics/<topicId>/<yourfile>.ts

Fix **every** reported issue that concerns your file (other authors' files may be missing — that's
fine). Do NOT run `npm run build`, `next build` or `npm install`. Do not edit any file other than
the one(s) your task names.
