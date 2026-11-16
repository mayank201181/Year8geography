# Writing an "Off The Map" episode (a Claude Sitcom for Year 8 Geography)

You write ONE file: `scripts/sitcom/episodes/<topic-id>.py`. It is a Python script of beats that
`build.py` voices (Kokoro TTS) and `render.html` animates into a ~7–9 minute MP4. The reference
episode is `episodes/population-distribution.py` — read it fully first and copy its structure,
pacing and comedy style. Read `common.py` for the helpers, cast, sets, moods, props and SFX.

Audience: a 12–13-year-old in Singapore, watching for fun while eating. **Funny first, and every
fact exact.** Teach every key idea of the topic (read `lib/topics/<topic-id>.ts` — the guide
sections, keyPoints, examMistakes, misconceptions and case-study facts — and teach the same facts
with the same numbers; if that file is not there yet, use the topic brief in your task).

## The show
**OFF THE MAP.** Priya (12, deadpan, sharp, geography-mad), her Dad (overconfident "explorer"
who has been to "forty countries" — forty airports — and gets every geography fact gloriously
wrong), Mum (practical, organised, competitive, loves a checklist), Nani (Priya's grandmother,
warm, sharp, remembers Singapore in the 1960s, drops wisdom and burns), and **ATLAS** — a battered
old desk globe who lives on the bookshelf, has been dropped eleven times (usually on Australia),
is vain, dry and theatrical, and can spin the family anywhere on Earth (a `sfx("whoosh")` + a
scene change to a location set). Mr Tan is Priya's geography teacher (exam skills). Uncle Hock
runs the hawker stall. `guest` and `guest2` are one-off locals/experts you name per episode with
`EP["names"] = {"guest": "DR WANJIRU"}` (e.g. a reef ranger, a Lagos cousin, a weather forecaster,
an Antarctic guide, a Sherpa). Guests must be respectful, expert and NOT stereotyped; locals are
the experts, the family are the tourists. Running gags: Dad's forty airports; Atlas's injuries and
vanity; Priya's one-word deadpan; Nani topping everyone; "He followed me" (Atlas at school).

## Structure (copy the reference)
1. **Cold open** (~45 s): Dad has a terrible idea linked to the topic → `freeze()` gag → Priya
   confessional (`confess("priya", "PRIYA · 12 · <funny tag>")`).
2. `title()`.
3. **Act 1** (~2 min): Atlas poofs in (`sfx("whoosh")`, `poof("atlas", x)`), teaches the core
   ideas with the board. Atlas confessional with a running-gag joke.
4. **Act 2** (~2 min): Atlas spins them to a real place (location set + `caption="PLACE · Country ·
   detail"` on the scene). A guest expert. Case-study facts with numbers. Another confessional.
5. **Act 3** (~1.5 min): back in Singapore (hawker / park / classroom / kitchen) — apply to
   Singapore and/or Mr Tan teaching an exam skill (describe vs explain, TEA, PEEL, data, units).
6. **Recap** (Atlas confessional, 5 numbered board lines `1.` … `5.`).
7. **Tag scene** callback joke + `sfx(...)`.
8. `card("PAUSE CHALLENGE", "...", 3.0)` + exactly **3** `challenge(...)` (exam-style; answer `a`
   short, ≤ 26 chars) + `end_card()`.

Target 4,500–6,500 spoken characters, 55–80 dialogue lines. `python3 lint_episode.py
episodes/<topic-id>.py` must report **0 errors and 0 warnings**.

## Rules the linter and the renderer need
- Spoken text (`L` text, challenge `qs`/`as_`) has **no digits and no symbols** (% / ° = + <
  etc.): write numbers as words ("about eight thousand", "twenty six point five degrees").
  Board text, captions, freeze text and challenge `q`/`a`/`work` CAN use digits and symbols.
- Board lines ≤ 44 characters; max 5 text lines per board (3 if a diagram is on it); use
  `boardClear=True` to start a fresh board. Put a board line on most teaching lines.
- Diagrams: `diagram=SVG` on a line, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 H">`
  with H between 120 and 280; dark-background friendly colours (light text `#f8fafc`, accents
  `#fde047 #86efac #7dd3fc #fca5a5`), `font-family="sans-serif"`, text ≥ 18px, no images/links.
  Use 2–4 diagrams per episode (e.g. a mini climate graph, pyramid, DTM lines, wave/landform
  sequence, push–pull arrows, bar comparison). Build each as a module-level string constant.
- Positions x from 200 to 1080, at least 200 px apart; up to 4 people on stage. Atlas is wide —
  give him ~300 px clearance. On `hawker`, Uncle Hock stands at x 1000.
- Sets: living, kitchen, classroom, hawker, park, beach (cliff headland, arch/stack/stump, waves,
  groyne), desert (Sahara: dunes, cacti, camel), polar (Antarctica: ice, research station,
  penguins, snow), mountain (Himalaya: peaks, prayer flags, base camp sign 5,364 m), reef
  (underwater coral reef), city (generic megacity skyline + traffic), lagos (lagoon with Makoko
  stilt houses, bridge, yellow danfo buses in a go-slow, LAGOS sign), ecocity (green towers,
  wind turbines, elevated MRT, cycle lane). Confessionals: `confess(<who>, "NAME · tag")`.
- Moods: neutral happy excited deadpan annoyed shock smug thinking worried sad determined teach
  bored eyeroll. Shots: close (default), two, wide. Props: phone tablet book plate map compass
  binoculars suitcase umbrella thermometer flag calculator.
- SFX: ding buzzer scratch trombone poof whoosh tick door drawer.
- `L(..., gap=0.4)` after a punchline gives comic timing. `offstage=True` for a voice off-stage.
- Pronunciation: avoid sentence-initial words the TTS mangles; write abbreviations as you want
  them said ("H D B", "M R T", "I A A T O" or "the Antarctic tour operators"), place names
  phonetically only if needed — `EP["display"] = {"H D B": "HDB"}` maps spoken spellings back to
  normal spelling in the subtitles. Prefer "per cent" written as "percent" in speech.
- British English. No real brands' slogans; real places, organisations and facts are fine.
- Keep it kind: tease Dad, never mock a country, culture or real person.

## Check your work
```
cd scripts/sitcom && python3 lint_episode.py episodes/<topic-id>.py
```
Do NOT run build.py or render (the lead does that). Report back: episode title, approx spoken
length, and any fact you were unsure of.
