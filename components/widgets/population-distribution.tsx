"use client";

import { useMemo, useState } from "react";
import { Frame, Choice, Stat } from "./kit";

/* ------------------------------------------------------------------ */
/* Shared helpers                                                      */
/* ------------------------------------------------------------------ */

/** Deterministic pseudo-random number in [0, 1) from an integer seed (no Math.random). */
function hash(i: number): number {
  const s = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return s - Math.floor(s);
}

function fmtNum(n: number): string {
  if (n >= 1e9) return `${(n / 1e9).toFixed(n >= 1e10 ? 0 : 1)} billion`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(n >= 1e7 ? 0 : 1)} million`;
  if (n >= 1e4) return Math.round(n).toLocaleString("en-GB");
  if (n >= 100) return Math.round(n).toLocaleString("en-GB");
  if (n >= 10) return n.toFixed(0);
  if (n >= 1) return n.toFixed(1);
  return n.toFixed(2);
}

/* ------------------------------------------------------------------ */
/* Widget 1: Population density calculator & comparer                  */
/* ------------------------------------------------------------------ */

type Place = { id: string; name: string; pop: number; area: number; note: string };

// Approximate 2024 figures (rounded). Area = total land area in km².
const PLACES: Place[] = [
  { id: "mongolia", name: "Mongolia", pop: 3.5e6, area: 1_564_116, note: "Vast cold, dry steppe and desert. Nearly half of all Mongolians live in one city, Ulaanbaatar, so most of the land is almost empty." },
  { id: "australia", name: "Australia", pop: 27.2e6, area: 7_692_000, note: "Most Australians live along the wetter south-east and south-west coasts. The hot, dry interior (the Outback) is very sparsely populated." },
  { id: "world", name: "World (land)", pop: 8.1e9, area: 134_700_000, note: "The world average, using all land except Antarctica. Averages hide huge differences: some places are empty, others are packed." },
  { id: "bangladesh", name: "Bangladesh", pop: 173e6, area: 148_460, note: "Flat, fertile land on the Ganges–Brahmaputra delta plus monsoon rain lets farmland feed a huge population — one of the most crowded large countries on Earth." },
  { id: "hongkong", name: "Hong Kong", pop: 7.5e6, area: 1_110, note: "Steep hills and country parks cover most of Hong Kong, so people pack into high-rise towers on the small areas of flat land. Real density where people live is far higher than this average." },
  { id: "singapore", name: "Singapore", pop: 6.04e6, area: 735, note: "A city-state: almost the whole country is urban. Land is scarce, so about 8 in 10 residents live in high-rise HDB flats." },
  { id: "tampines", name: "Tampines HDB town", pop: 270_000, area: 20.9, note: "An HDB town (approximate figures for the whole planning area, including parks and industry). Housing estates are denser than Singapore's average because nature reserves, the airport and ports lower the national figure." },
  { id: "monaco", name: "Monaco", pop: 38_000, area: 2.08, note: "A tiny, wealthy city-state on the Mediterranean coast — the most densely populated country in the world." },
];

const PITCH_KM2 = 0.105 * 0.068; // a 105 m × 68 m football pitch ≈ 0.00714 km²

function LogSlider({ label, value, min, max, onChange, display }: { label: string; value: number; min: number; max: number; onChange: (n: number) => void; display: string }) {
  const lo = Math.log10(min), hi = Math.log10(max);
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-2 text-sm font-medium text-slate-700">
        <span>{label}</span>
        <span className="font-bold tabular-nums text-indigo-700">{display}</span>
      </span>
      <input type="range" min={0} max={1000} value={Math.round(((Math.log10(value) - lo) / (hi - lo)) * 1000)}
        onChange={(e) => onChange(Math.pow(10, lo + (+e.target.value / 1000) * (hi - lo)))}
        className="mt-1 w-full" style={{ accentColor: "#4f46e5" }} aria-label={label} />
    </label>
  );
}

export function DensityCalculator() {
  const [mode, setMode] = useState<"place" | "custom">("place");
  const [placeId, setPlaceId] = useState("singapore");
  const [pop, setPop] = useState(6.04e6);
  const [area, setArea] = useState(735);
  const [guess, setGuess] = useState<string | null>(null);

  const chosen: Place = mode === "place"
    ? PLACES.find((p) => p.id === placeId)!
    : { id: "custom", name: "Your place", pop, area, note: "" };
  const density = chosen.pop / chosen.area;
  const perPitch = density * PITCH_KM2;
  const world = 8.1e9 / 134_700_000;

  const rows = useMemo(() => {
    const list = PLACES.map((p) => ({ id: p.id, name: p.name, d: p.pop / p.area }));
    if (mode === "custom") list.push({ id: "custom", name: "Your place", d: pop / area });
    return list.sort((a, b) => a.d - b.d);
  }, [mode, pop, area]);

  // log scale: 1 → 100,000 people per km²
  const W = 340, X0 = 112, barW = W - X0 - 6, rowH = 22;
  const xOf = (d: number) => X0 + (Math.min(Math.max(Math.log10(Math.max(d, 1)), 0), 5) / 5) * barW;
  const H = rows.length * rowH + 26;

  const band = density < 10 ? "sparsely populated (fewer than 10 people per km²)"
    : density < 100 ? "moderately populated (10–100 people per km²)"
    : density < 1000 ? "densely populated (100–1,000 people per km²)"
    : "very densely populated (over 1,000 people per km² — city-like)";

  // dots on the pitch (capped for drawing)
  const dots = Math.min(Math.max(Math.round(perPitch), 1), 150);

  return (
    <Frame title="Population density: how crowded is it?" caption={
      <>
        <p><b>Density = number of people ÷ land area (km²).</b> {chosen.name} has about <b>{fmtNum(density)} people per km²</b>, so it is {band}.</p>
        {chosen.note ? <p className="mt-1">{chosen.note}</p> : null}
        <p className="mt-1">Notice: density is an <b>average</b>. It tells you how crowded a place is overall, but not how people are <b>distributed</b> inside it — Australia and Mongolia have big empty areas and a few crowded cities.</p>
      </>
    }>
      <div className="mb-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        <p className="font-semibold">Predict first: Bangladesh has about 6× as many people as Australia. How many times more crowded is it?</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {["About 6×", "About 30×", "About 300×"].map((g) => (
            <button key={g} type="button" onClick={() => setGuess(g)} className={`rounded-full px-3 py-1 font-semibold ring-1 ${guess === g ? "bg-amber-600 text-white ring-amber-600" : "bg-white ring-amber-300"}`}>{g}</button>
          ))}
        </div>
        {guess ? <p className="mt-2">{guess === "About 300×" ? "Yes! " : "Not quite — "}Bangladesh has ~1,170 people/km², Australia ~3.5, so it is <b>over 300× more crowded</b>. Bangladesh squeezes its people into an area about 1/50 the size of Australia.</p> : null}
      </div>

      <Choice label="Choose" value={mode} onChange={setMode} options={[{ id: "place", label: "Real places" }, { id: "custom", label: "Make your own" }]} />
      <div className="mt-3">
        {mode === "place" ? (
          <div className="flex flex-wrap gap-1.5">
            {PLACES.map((p) => (
              <button key={p.id} type="button" onClick={() => setPlaceId(p.id)} className={`rounded-lg px-2.5 py-1 text-xs font-semibold ring-1 ${placeId === p.id ? "bg-indigo-600 text-white ring-indigo-600" : "bg-white text-slate-700 ring-slate-200"}`}>{p.name}</button>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            <LogSlider label="Population" value={pop} min={1000} max={2e9} onChange={setPop} display={fmtNum(pop)} />
            <LogSlider label="Land area" value={area} min={1} max={1e7} onChange={setArea} display={`${fmtNum(area)} km²`} />
          </div>
        )}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Population" value={fmtNum(chosen.pop)} tone="sky" />
        <Stat label="Area (km²)" value={fmtNum(chosen.area)} tone="emerald" />
        <Stat label="People / km²" value={fmtNum(density)} tone="indigo" />
        <Stat label="× world average" value={`${fmtNum(density / world)}×`} tone="amber" />
      </div>

      <div className="mt-3 grid items-center gap-3 sm:grid-cols-[1fr_1.4fr]">
        <div>
          <svg viewBox="0 0 160 110" className="w-full" role="img" aria-label={`Football pitch with about ${fmtNum(perPitch)} people on it`}>
            <rect x="4" y="4" width="152" height="98" rx="3" fill="#4ade80" stroke="#fff" strokeWidth="2" />
            <line x1="80" y1="4" x2="80" y2="102" stroke="#fff" strokeWidth="1.5" />
            <circle cx="80" cy="53" r="13" fill="none" stroke="#fff" strokeWidth="1.5" />
            <rect x="4" y="33" width="20" height="40" fill="none" stroke="#fff" strokeWidth="1.5" />
            <rect x="136" y="33" width="20" height="40" fill="none" stroke="#fff" strokeWidth="1.5" />
            {Array.from({ length: dots }, (_, i) => (
              <circle key={i} cx={10 + hash(i * 3 + 1) * 140} cy={10 + hash(i * 7 + 2) * 86} r="2.4" fill="#1e293b" />
            ))}
          </svg>
          <p className="text-center text-sm text-slate-700">
            {perPitch >= 1
              ? <>≈ <b>{fmtNum(perPitch)} people</b> per football pitch{perPitch > 150 ? " (150 drawn)" : ""}</>
              : <>≈ <b>1 person</b> for every <b>{fmtNum(1 / perPitch)} football pitches</b></>}
          </p>
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Bar chart comparing population density on a log scale">
          {[1, 10, 100, 1000, 10000, 100000].map((t) => (
            <g key={t}>
              <line x1={xOf(t)} y1={4} x2={xOf(t)} y2={H - 18} stroke="#cbd5e1" strokeDasharray="2 3" />
              <text x={xOf(t)} y={H - 5} fontSize="11" textAnchor="middle" fill="#64748b">{t >= 1000 ? `${t / 1000}k` : t}</text>
            </g>
          ))}
          {rows.map((r, i) => {
            const y = 6 + i * rowH;
            const on = r.id === chosen.id;
            return (
              <g key={r.id}>
                <text x={X0 - 4} y={y + 13} fontSize="11" textAnchor="end" fill={on ? "#4338ca" : "#334155"} fontWeight={on ? 700 : 400}>{r.name}</text>
                <rect x={X0} y={y + 2} width={Math.max(xOf(r.d) - X0, 2)} height={rowH - 7} rx="3" fill={on ? "#4f46e5" : "#a5b4fc"} />
              </g>
            );
          })}
        </svg>
      </div>
      <p className="mt-1 text-xs text-slate-500">Chart uses a log scale: each grid line is 10× more crowded than the one before. Figures are rounded 2024 estimates.</p>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* Widget 2: "Where would you settle?" island explorer                  */
/* ------------------------------------------------------------------ */

type FactorId = "river" | "flat" | "soil" | "mountains" | "desert" | "port" | "jobs";
const FACTORS: { id: FactorId; label: string; kind: "physical" | "human"; why: string }[] = [
  { id: "river", label: "💧 River (fresh water)", kind: "physical", why: "a river gives drinking water, water for crops and a transport route" },
  { id: "flat", label: "🟩 Flat lowland", kind: "physical", why: "flat land is easy to build on, farm and run roads across" },
  { id: "soil", label: "🌾 Fertile soil", kind: "physical", why: "fertile floodplain soil grows plenty of food" },
  { id: "mountains", label: "⛰️ Steep mountains", kind: "physical", why: "steep, cold mountains with thin soils push people away" },
  { id: "desert", label: "🏜️ Desert", kind: "physical", why: "a dry desert with little water pushes people away" },
  { id: "port", label: "⚓ Port & trade", kind: "human", why: "a sheltered port brings trade, ships and shops" },
  { id: "jobs", label: "🏭 Jobs (factories & mine)", kind: "human", why: "jobs in factories and at the mine attract workers" },
];

const IW = 400, IH = 260, CX = 200, CY = 130, RX = 172, RY = 104;
const shape = (t: number) => 1 + 0.07 * Math.sin(3 * t + 0.5) + 0.05 * Math.cos(5 * t);
const coast = (t: number) => ({ x: CX + RX * shape(t) * Math.cos(t), y: CY + RY * shape(t) * Math.sin(t) });
const insideIsland = (x: number, y: number) => {
  const dx = (x - CX) / RX, dy = (y - CY) / RY;
  return Math.hypot(dx, dy) < shape(Math.atan2(dy, dx)) * 0.93;
};
const PORT = coast(1.4);
const MOUNT = { x: 118, y: 82 }, DESERT = { x: 305, y: 118 }, PLAIN = { x: 178, y: 170 };
const MINE = { x: 100, y: 74 }, FACTORY = { x: PORT.x + 30, y: PORT.y - 26 };
const RIVER = [{ x: 128, y: 92 }, { x: 150, y: 128 }, { x: 172, y: 160 }, { x: 186, y: 196 }, { x: PORT.x, y: PORT.y - 2 }];

function distToRiver(x: number, y: number) {
  let best = Infinity;
  for (let i = 0; i < RIVER.length - 1; i++) {
    const a = RIVER[i], b = RIVER[i + 1];
    const vx = b.x - a.x, vy = b.y - a.y;
    const t = Math.max(0, Math.min(1, ((x - a.x) * vx + (y - a.y) * vy) / (vx * vx + vy * vy)));
    best = Math.min(best, Math.hypot(x - a.x - t * vx, y - a.y - t * vy));
  }
  return best;
}
const near = (x: number, y: number, p: { x: number; y: number }, r: number) => Math.exp(-((x - p.x) ** 2 + (y - p.y) ** 2) / (r * r));

// Candidate settlement sites on a grid (fixed, deterministic)
const SITES = (() => {
  const out: { x: number; y: number; k: number }[] = [];
  let k = 0;
  for (let gy = 8; gy < IH; gy += 14) for (let gx = 8; gx < IW; gx += 14) {
    k++;
    const x = gx + (hash(k) - 0.5) * 6, y = gy + (hash(k + 999) - 0.5) * 6;
    if (insideIsland(x, y)) out.push({ x, y, k });
  }
  return out;
})();
const PEOPLE = 260;

export function SettlementIsland() {
  const [on, setOn] = useState<Record<FactorId, boolean>>({ river: false, flat: false, soil: false, mountains: false, desert: false, port: false, jobs: false });
  const toggle = (id: FactorId) => setOn((s) => ({ ...s, [id]: !s[id] }));

  const sim = useMemo(() => {
    const w = SITES.map(({ x, y }) => {
      const highland = near(x, y, MOUNT, 70);
      let s = 1;
      if (on.river) s *= 1 + 3 * Math.exp(-((distToRiver(x, y) / 16) ** 2));
      if (on.flat) s *= 0.3 + 0.7 * (1 - Math.min(1, near(x, y, MOUNT, 95) * 1.2));
      if (on.soil) s *= 1 + 2.5 * near(x, y, PLAIN, 45);
      if (on.mountains) s *= 1 - 0.93 * highland;
      if (on.desert) s *= 1 - 0.93 * near(x, y, DESERT, 62);
      if (on.port) s *= 1 + 6 * near(x, y, PORT, 32);
      if (on.jobs) s *= 1 + 7 * near(x, y, FACTORY, 26) + 5 * near(x, y, MINE, 16);
      return s;
    });
    const total = w.reduce((a, b) => a + b, 0);
    const expected = w.map((v) => (PEOPLE * v) / total);
    const counts = expected.map((e, i) => Math.floor(e) + (hash(SITES[i].k * 13) < e - Math.floor(e) ? 1 : 0));
    const sorted = [...expected].sort((a, b) => b - a);
    const top10 = sorted.slice(0, Math.ceil(sorted.length / 10)).reduce((a, b) => a + b, 0) / PEOPLE;
    const empty = counts.filter((c) => c === 0).length / counts.length;
    return { counts, top10, empty };
  }, [on]);

  const active = FACTORS.filter((f) => on[f.id]);
  const phys = active.filter((f) => f.kind === "physical").length, human = active.length - phys;
  const pattern = sim.top10 > 0.4 ? "very uneven: people crowd into a few dense clusters while large areas are sparse or empty"
    : sim.top10 > 0.2 ? "uneven: some areas are clearly denser than others"
    : "fairly even — but real populations are almost never spread like this";
  const outline = Array.from({ length: 73 }, (_, i) => coast((i / 72) * Math.PI * 2)).map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ") + "Z";

  return (
    <Frame title="Where would you settle? Island explorer" caption={
      <>
        <p>Distribution is <b>{pattern}</b>. The busiest 10% of the land holds <b>{Math.round(sim.top10 * 100)}%</b> of the people.</p>
        {active.length === 0
          ? <p className="mt-1">Notice: with no factors switched on, people spread out evenly. Switch on factors one at a time and watch the dots move.</p>
          : <p className="mt-1">Notice: {active.map((f) => f.why).join("; ")}.</p>}
        <p className="mt-1">{phys > 0 && human === 0 ? "So far only physical (natural) factors are shaping where people live — like early farming settlements." : null}
          {human > 0 && phys === 0 ? "Only human factors are on: jobs and trade can pull people even to places nature makes difficult (look at the mining town in the mountains!)." : null}
          {human > 0 && phys > 0 ? "Physical and human factors work together: today's big cities usually grow where good land, water and trade routes meet — like Singapore's port." : null}
          {" "}Simplified model: each dot ≈ a group of settlers; real places mix many more factors.</p>
      </>
    }>
      <p className="mb-2 rounded-xl bg-amber-50 p-2 text-sm text-amber-900"><b>Predict first:</b> if settlers care about water, flat land and good soil, which part of the island fills up — and which stays empty?</p>
      <div className="mb-2 flex flex-wrap gap-1.5">
        {FACTORS.map((f) => (
          <button key={f.id} type="button" aria-pressed={on[f.id]} onClick={() => toggle(f.id)}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 transition ${on[f.id] ? (f.kind === "physical" ? "bg-emerald-600 text-white ring-emerald-600" : "bg-violet-600 text-white ring-violet-600") : "bg-white text-slate-700 ring-slate-200"}`}>
            {f.label}
          </button>
        ))}
      </div>
      <p className="mb-2 text-xs text-slate-500"><span className="font-semibold text-emerald-700">Green = physical factors</span> · <span className="font-semibold text-violet-700">purple = human factors</span></p>

      <svg viewBox={`0 0 ${IW} ${IH}`} className="w-full rounded-xl" role="img" aria-label="Map of an island showing where settlers live">
        <rect width={IW} height={IH} fill="#bae6fd" />
        <path d={outline} fill="#d9f99d" stroke="#65a30d" strokeWidth="2" />
        <ellipse cx={DESERT.x} cy={DESERT.y} rx="58" ry="44" fill="#fde68a" opacity="0.9" />
        <ellipse cx={PLAIN.x} cy={PLAIN.y} rx="40" ry="28" fill="#4ade80" opacity="0.55" />
        {[[100, 70], [124, 60], [140, 84], [96, 98], [118, 100]].map(([x, y], i) => (
          <polygon key={i} points={`${x - 16},${y + 14} ${x},${y - 14} ${x + 16},${y + 14}`} fill="#a8a29e" stroke="#78716c" />
        ))}
        <polyline points={RIVER.map((p) => `${p.x},${p.y}`).join(" ")} fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text x={DESERT.x} y={DESERT.y - 26} fontSize="11" textAnchor="middle" fill="#92400e">Desert</text>
        <text x={MOUNT.x + 14} y={MOUNT.y - 44} fontSize="11" textAnchor="middle" fill="#57534e">Mountains</text>
        <text x={PLAIN.x - 44} y={PLAIN.y + 4} fontSize="11" textAnchor="end" fill="#166534">Fertile plain</text>
        <text x={PORT.x} y={PORT.y + 16} fontSize="12" textAnchor="middle">⚓</text>
        <text x={FACTORY.x + 12} y={FACTORY.y} fontSize="12" textAnchor="middle">🏭</text>
        <text x={MINE.x - 18} y={MINE.y - 8} fontSize="12" textAnchor="middle">⛏️</text>
        {SITES.map((s, i) => Array.from({ length: Math.min(sim.counts[i], 12) }, (_, j) => (
          <circle key={`${i}-${j}`} cx={s.x + (j === 0 ? 0 : (hash(s.k * 31 + j) - 0.5) * 12)} cy={s.y + (j === 0 ? 0 : (hash(s.k * 17 + j) - 0.5) * 12)} r="2.2" fill="#b91c1c" stroke="#fff" strokeWidth="0.5" />
        )))}
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="People on busiest 10% of land" value={`${Math.round(sim.top10 * 100)}%`} tone="rose" />
        <Stat label="Empty land" value={`${Math.round(sim.empty * 100)}%`} tone="amber" />
        <Stat label="Factors on (phys / human)" value={`${phys} / ${human}`} tone="emerald" />
      </div>
    </Frame>
  );
}
