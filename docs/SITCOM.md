# Writing a "Totally Raotional: Off The Map" episode (Season 2, Geography)

One animated, voiced sitcom episode per topic, shown on the topic's Watch tab. Everything is
generated locally from a Python script in `scripts/sitcom/episodes/<topic-id>.py`; read
`scripts/sitcom/README.md` for the pipeline and `scripts/sitcom/common.py` for the helpers.
The pilot, `episodes/coastal-landforms.py`, is the reference — copy its shape.

## Cast

| id | Who | Voice & comedy |
|----|-----|----------------|
| `tara` | Tara Rao, 12, Year 8. Deadpan, the only sane person in the house. Gets the answers right, often first. | Dry one-liners, never a pun. |
| `mum` | Mum. Deal hunter; has never paid full price for anything. Mangles concepts into bargains. | "Is there a discount?" energy. |
| `dad` | Vikram Rao, self-described genius (property, finance, everything). Confidently wrong, then sad, then smug again. | Bad plans, worse confidence. |
| `globo` | **The teacher.** Globo, a retired classroom globe who lives in the junk drawer. Grumpy, theatrical, British, slightly out of date ("I still have the Soviet Union on me"). Bushy eyebrows, white theatre gloves, brass meridian ring, tilted 23.4°. | Exasperated expert. Explains clearly, then insults Dad. Moods that suit him: `teach`, `bored`, `eyeroll`, `smug`, `shock`. |
| `teacher` | Ms Lim, Tara's teacher. | Use sparingly. |
| `uncle` | Uncle Hock, hawker (stand at x≈1000 on `hawker`). | |
| `cashier` | Kai, shop cashier (x≈1000 on `checkout`). | |

`centi` (Season 1's maths monster) still renders but is not in Season 2. Globo arrives with
`sfx("drawer")` + `poof("globo", x)`; he runs the holo-map board and voices the pause challenges
(`TEACHER = "globo"` in common.py).

## Sets

Existing: `living`, `kitchen` (has the junk drawer), `mall`, `checkout`, `classroom`, `hawker`, `park`.
Season 2: `beach` (chalk headland with arch, stack and stump, waves, swash, a groyne),
`desert` (dunes, heat haze, cacti), `polar` (ice, icebergs, penguins, snow), `mountain`
(snow-capped peaks, prayer flags, cairn), `megacity` (skyline, crane, go-slow traffic with yellow
danfo-style buses), `reef` (corals, fish, light rays, bubbles), `weatherdesk` (TV studio with
isobar map, H/L, fronts). Every character also has a confessional: `confess(who, caption)`.
Globo can "fly" the family anywhere (a scene change plays a whoosh) — say so in a scene caption,
e.g. `"THE JURASSIC COAST · Dorset, England · Flown In By Globo Airways"`.

Props (`prop=` on a line, shown while that character speaks): `phone tablet cushion book plate map
dice calculator compass paintroller globe umbrella sunglasses binoculars bucket`.

## Helpers

```python
EP = dict(topic="<topic-id>", logline="one or two sentences")
scene(set_id, [(who, x), ...], caption=None)   # x in 200..1080, ≥200 px apart
L(who, text, mood=, shot="close|two|wide", prop=, board=, boardClear=True, diagram=SVG, gap=, offstage=True)
sfx("ding|buzzer|scratch|trombone|poof|whoosh|tick|door|drawer")
freeze("TEXT", dur, narrator="Narrator: ...")    # comic freeze-frame
poof(who, x); confess(who, caption); card(text, sub, dur)
title(); challenge(n, q, a, work, spoken_q, spoken_a); end_card()
```

Board lines are ≤44 characters, max 5 per board (3 if a diagram is showing); use
`boardClear=True` to start a new board. Diagrams are inline SVG, `viewBox="0 0 520 H"` with
H 120–280, `xmlns` set, no images/links/scripts, `font-family="sans-serif"`, light colours on the
dark board.

## Rhythm (~6–8 minutes, 4,500–7,000 spoken characters, 45+ lines)

1. **Cold open** — a family problem from Singapore life that *is* the topic (a holiday deal, a
   haze day, a flooded void deck, an MRT ride, the class census). End on a `freeze()` and a Tara
   confessional.
2. **`title()`**
3. **Act 1** — Tara opens the drawer; Globo poofs in, complains, then teaches. One Globo
   confessional per episode is plenty.
4. **Acts 2–3** — new location (`card("MEANWHILE…")`), Mum and Dad each mangle a concept, Globo
   and Tara fix it on the board. One confessional each for Dad and/or Mum.
5. **Recap** — Globo's confessional, five numbered board lines.
6. **Button** — a short family scene that pays off the cold open; Globo heckles `offstage=True`.
7. **`card("PAUSE CHALLENGE", …)`** + exactly three `challenge()`s, then **`end_card()`**.

## Teaching rules

- Teach **every section** listed for the topic in `lib/topics/meta.ts`, in order, with at least one
  board line per section. The board is the revision note — key terms in CAPITALS, cause → effect.
- **Accuracy first.** Use the named examples from `meta.ts`. Hedge numbers that are estimates or
  change ("around", "about", "the government has said", "estimates vary") — never invent a
  statistic. If unsure, leave it out.
- Jokes come from the family's Singapore life: HDB flat, hawker centres, MRT, East Coast Park,
  school, Mum's deals, Dad's schemes. The household is **vegetarian** — food jokes are prata,
  thosai, chapatis, chips, teh; never meat or fish dishes.
- **British spelling** on boards and in captions (colour, metres, organise, centre).
- Kind humour: Dad is the butt of the jokes, never a real place, people or culture.

## Writing for text-to-speech (Kokoro)

- No digits or symbols in spoken text: "five metres", "seventy percent", "twenty one hundred".
  Digits and symbols are fine on the board. Spell out units (kilometres, not km).
- Say "zero", never "nought"; avoid "Hmm", "Ugh", "Pfft" — use real words.
- Short sentences land better; full stops make pauses. Split anything over ~300 characters.
- Run `python3 asr.py episodes/<topic>.py` after building to catch mispronunciations, then
  rephrase flagged lines (place names are the usual culprits).

## Checklist

```bash
cd scripts/sitcom
python3 lint_episode.py episodes/<topic>.py              # 0 errors
python3 build.py episodes/<topic>.py out/<topic>         # voices + timeline
python3 asr.py episodes/<topic>.py                       # speech QA
node render.mjs out/<topic> --stills 10,60,120,240       # LOOK at the stills
./make_episode.sh <topic>                                 # full render → public/videos/<topic>.mp4
python3 gen_manifest.py                                   # lib/sitcom.ts (rendered episodes only)
```
