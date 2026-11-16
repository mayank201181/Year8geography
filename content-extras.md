# Extras + interactive widget spec (for widget agents)

You build the **engagement layer** for ONE topic of the Year 8 Geography app in
/home/user/Year8geography (Next.js 16 App Router, React 19, TypeScript, Tailwind 4). The audited
topic content lives in `lib/topics/<id>.ts` (another agent may still be writing it — do NOT edit it).

## Files you write (and only these)
1. `components/widgets/<id>.tsx` — `"use client";` module that exports **2 interactive widgets**
   as named React components (no props), e.g. `export function PyramidBuilder() {…}`.
2. `lib/extras/<id>.ts` — `import type { TopicExtras } from "../types";`
   `export const <exportName>Extras: TopicExtras = { … }` (export name given in your task).

Do NOT edit any other file (a registry imports your exports: the keys are `"<id>:<ExportName>"`,
and you list them in `interactives`). Do not run `next build` (shared folder). Check your files with
`node scripts/tc.mjs components/widgets/<id>.tsx lib/extras/<id>.ts` (must print `tc: OK`). Use relative imports
`./kit` inside widgets so the check resolves.

## Widgets (the most important part)
Read `components/widgets/kit.tsx` and use its `Frame`, `Slider`, `Stepper`, `Choice`, `Stat`.
Each widget is a **parameter-driven explorable**: the learner changes inputs and watches an output
change live — a chart, map, diagram or number — with a caption that explains the geography in
plain words and changes with the state ("Notice: …"). Problem-first spirit: pose a small
"predict first" question in the widget where natural. Requirements:
- Pure React + inline SVG (viewBox, responsive `className="w-full"`), no external libs, no network,
  no `Math.random` at render (deterministic), no `window` at module scope.
- Accurate data and models (state simplifications honestly, e.g. "simplified model").
- Mobile-friendly (works at 360 px wide), accessible labels, text ≥ 11px in SVG.
- Use `useState`/`useMemo` only. Tailwind classes for layout. Keep each widget ~80–200 lines.
- Make them genuinely useful for understanding — not decoration. Ideas per topic are in your task.

## Extras fields (see `TopicExtras` in lib/types.ts)
- `hook`: a 1–2 sentence curiosity hook/mystery.
- `didYouKnow`: 5 surprising, TRUE facts (with numbers).
- `experiments`: 2 safe "Try this at home / fieldwork" activities: `{ title, emoji, materials[], steps[], science (= "The geography: what you find out and why"), safety? }` — e.g. mini-fieldwork in Singapore (HDB block census, East Coast Park beach profile, weather diary, food-miles audit of the fridge).
- `bonusDiagrams`: 1–2 `{ title, svg, caption }` inline SVGs (backtick strings, `role="img"`, `aria-label`, no `${`).
- `interactives`: the two widget keys, e.g. `["population-growth:GrowthSimulator", "population-growth:DoublingTime"]`.
