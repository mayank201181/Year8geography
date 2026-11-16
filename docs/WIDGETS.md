# Interactive widgets ("explorables") + engagement extras spec — Geography

## 1. Widgets — `components/widgets/<topicId>.tsx`

Each topic gets **2 genuinely useful interactive explorables** in its Interactive tab: the learner
changes inputs (sliders, steppers, toggles, taps) and watches a geographical model respond live,
with a caption that explains what they see — plus "Try this" challenges that make them predict and
test (AoPS discovery). Think "PhET for geography", not a toy. Ideas by topic:

- geo-skills: grid-reference finder (tap a square → 4/6-figure ref; or find the feature), map-scale
  measurer (change scale and map distance → real distance), lat/long globe-net plotter.
- population-distribution: density calculator with a dot-square visual; physical/human factor
  "settlement suitability" mixer.
- population-growth: birth/death-rate sliders → natural increase, growth curve and DTM stage;
  doubling-time explorer.
- demography: population-pyramid builder (sliders per age band → pyramid shape, dependency ratio,
  "youthful/ageing" label).
- population-change: population-change balance (births, deaths, immigration, emigration →
  change), push/pull factor sorter.
- population-problems: policy simulator (TFR slider over decades → pyramid / old-age share), 4-2-1
  family tree.
- extreme-climates: climate-graph builder (edit 12 months → graph, range, total, "desert?" test),
  altitude temperature (lapse-rate) slider.
- extreme-weather: tropical-storm ingredients checker (sea temp, latitude, wind shear → can it
  form? category from wind speed), isobar-spacing → wind-strength.
- adaptations: design-a-creature (pick environment + features → survival score with reasons),
  surface-area-to-volume ear/body explorer.
- living-in-extremes: expedition kit packer (weight limit vs risks), tourism carrying-capacity
  slider (visitors → impact meter).
- coastal-erosion: wave-type explorer (wave frequency/strength → constructive or destructive, beach
  builds or erodes), cliff-retreat timeline (rate × years, house-loss countdown).
- coastal-landforms: headland erosion time-lapse (step: crack → cave → arch → stack → stump),
  longshore-drift simulator (wind angle → zig-zag pebble path, groynes on/off).
- coral-reefs: bleaching thermometer (sea temp + days → healthy/bleached/dead), reef-conditions
  checker (temp, depth, clarity, salinity → can coral grow?).
- protecting-reefs: zoning planner (allocate % of reef to green/yellow/blue zones → fish stocks,
  tourism income, protection score), budget allocator for reef threats.
- cities-megacities: urbanisation curve (year slider → % urban, world vs region), megacity
  counter (threshold slider → which cities count).
- lagos: push–pull balance for a migrant, traffic/BRT commute time calculator.
- sustainable-cities: Four National Taps mixer (share of each tap → resilience/cost/energy),
  eco-city designer (choose features → social/economic/environmental scores).

### Rules
- Read `components/widgets/kit.tsx` (WidgetFrame, Slider, Stepper, Segmented, Readout, `M` for
  inline maths, `makePlane`/`PlaneGrid` for graph SVGs) and `app/globals.css` (tokens).
- Export: `export const widgets: WidgetDef[] = [{ id, title, blurb, Component }, …]`.
- Client component (`"use client";`), React 19, TypeScript strict, **no new dependencies**, no
  network, no `Math.random` during render (use useState initialisers or event handlers).
- Style with Tailwind utilities and the theme tokens: `bg-surface`, `bg-surface-2`, `text-ink`,
  `text-ink-2`, `border-line`, `text-brand`, `bg-brand`, `bg-brand-soft`, `text-good`,
  `bg-good-soft`, `text-bad`, `bg-bad-soft`, `text-accent`. In SVG use `className="fill-brand
  stroke-ink"` etc. so light/dark both work; small natural colours (sea blue, sand, land green)
  are fine inside maps/diagrams.
- Responsive: works at 360 px wide (SVG with viewBox and `className="w-full h-auto"`), touch
  friendly (no hover-only interactions; buttons ≥ 40 px).
- **Geographically honest**: models are simplified but must not teach anything false; label units
  (°C, mm, km, people per km²); say "simplified model" in the caption where relevant.
- Each widget's `WidgetFrame` gets 2–4 `tryThis` prompts and a live `caption` explaining the
  geography in plain words.
- Accessible: label every control; SVGs get `role="img"` and an `aria-label` describing the state.

Check: `node scripts/typecheck-file.mjs components/widgets/<topicId>.tsx` must pass.

## 2. Extras — `lib/extras/<topicId>.ts`

    import type { TopicExtras } from "../types.ts";
    export const extras: TopicExtras = { hook, didYouKnow, activities, bonusDiagrams, history };

- `hook`: 1–2 sentence curiosity hook (a surprising question or fact) for the top of the guide.
- `didYouKnow`: 4–6 surprising, TRUE facts (no myths; no invented stats; hedge with "about").
- `activities`: 2 hands-on activities to do at home or around Singapore with everyday items
  (`title, emoji, materials, steps, maths` — `maths` here explains **the geography** it shows),
  e.g. a beach-in-a-tray wave tank, a family census, mapping food miles, a balcony weather station.
- `bonusDiagrams`: 1–2 extra SVG diagrams (same SVG rules as docs/CONTENT.md).
- `history`: a short (80–150 words) true story from geography/exploration history related to the
  topic (e.g. Shackleton, the first census, John Snow's cholera map, Darwin's atoll theory).
Check with `node scripts/typecheck-file.mjs lib/extras/<topicId>.ts`.

Do NOT run `npm run build`, `next build` or `npm install` in the shared repo. Edit only your files.
