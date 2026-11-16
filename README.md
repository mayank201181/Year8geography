# Year 8 Geography Lab

A complete Year 8 geography learning app for a learner at Tanglin Trust School, Singapore, following
the Year 8 units **8 Billion ++**, **Extreme Environments**, **Cracking Coasts** and **Future Cities**
plus the map and graph skills every unit uses — with Art of Problem Solving-style teaching throughout
(puzzle first, explain why, hint ladders, genuine challenge problems).

**Live:** https://year8geography.vercel.app

## What's inside

- **17 topics** (see `lib/topics/meta.ts`): Geographer's Toolkit · Where Do People Live? · Population
  Growth · Demography · Population Change · Over/Under-population & Policies (China's OCP) · Extreme
  Climates · Extreme Weather · Adaptations · Living & Travelling in Extreme Environments · Waves,
  Weathering & Erosion · Coastal Landforms · Coral Reefs · Protecting Reefs (GBR) · Cities &
  Megacities · Lagos · Sustainable Cities.
- **Lessons** with discovery puzzles, labelled diagrams, worked examples, "your turn" checks,
  "why does this happen?" boxes, key terms and revision cards.
- **~1,580 questions**: per topic a quick check, 3 MCQ papers, 2 practice papers (auto-marked short
  answers + self-marked written answers with mark schemes, incl. 6-mark evaluate questions) and an
  8-problem challenge set. Every topic was fact-checked by an independent audit pass.
- **Skill drills** (unlimited, generated): key-term retrieval and skills such as density, natural
  increase, dependency ratio, grid references, scale, climate-graph reading, lapse rate.
- **Big Exam**: four 30-question papers (People & Cities, Physical, Skills & Resources, End-of-Year).
- **Key-term sprint**, **Daily 5**, **spaced review**, **interactive explorables** for every topic,
  **Key terms & facts** sheet, certificates.
- **Watch**: animated sitcom *Totally Raotional: Off the Map* (one episode per topic; Globo the
  grumpy globe teaches the Rao family), plus Studio Masterclass whiteboards and a cartoon sitcom page.
- **Professor Atlas** AI tutor (hints, not answers; needs `ANTHROPIC_API_KEY`), family accounts with
  cloud sync and a PIN-protected parent dashboard (needs Vercel Blob), or guest mode on one device.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # unit + content tests
npm run validate   # every topic, drill set and exam paper
npm run build
```

Content specs: `docs/CONTENT.md`, `docs/AUDIT.md`, `docs/DRILLS.md`, `docs/WIDGETS.md`, `docs/SITCOM.md`.

| Variable | Purpose |
| --- | --- |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob — accounts and cloud progress |
| `AUTH_SECRET` | Signs session cookies (optional; otherwise derived from the Blob token) |
| `ANTHROPIC_API_KEY` | Professor Atlas tutor (optional) |
