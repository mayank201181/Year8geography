"use client";

import { useMemo, useState } from "react";
import { Choice, Frame, Slider, Stat } from "./kit";

/* ───────────────────────── 1. Population Pyramid Explorer ───────────────────────── */

const BANDS = ["0–9", "10–19", "20–29", "30–39", "40–49", "50–59", "60–69", "70–79", "80+"];

type CountryId = "niger" | "india" | "uk" | "japan" | "singapore" | "build";

/** Approximate % of the TOTAL population in each 10-year band (both sexes; each list sums to 100),
 *  rounded from UN World Population Prospects / national statistics, early 2020s.
 *  femaleShare = fraction of each band that is female. Simplified for teaching. */
const COUNTRIES: Record<Exclude<CountryId, "build">, { name: string; total: number[]; female: number[]; note: string }> = {
  niger: {
    name: "Niger",
    total: [36, 23, 14.5, 10.5, 7, 4.5, 2.8, 1.3, 0.4],
    female: [0.49, 0.49, 0.5, 0.51, 0.51, 0.5, 0.5, 0.52, 0.55],
    note: "about 6 children per woman and a median age near 15 — a classic wide-based pyramid",
  },
  india: {
    name: "India",
    total: [17, 18, 17.5, 15.5, 12, 9.5, 6.3, 3.2, 1],
    female: [0.48, 0.48, 0.48, 0.49, 0.49, 0.5, 0.51, 0.53, 0.56],
    note: "fertility has fallen to about 2 children per woman, so the base has stopped widening — India is moving from expansive towards stationary",
  },
  uk: {
    name: "UK",
    total: [11.5, 11.5, 12.5, 13.5, 12.5, 13.5, 11, 9, 5],
    female: [0.49, 0.49, 0.5, 0.5, 0.5, 0.51, 0.51, 0.53, 0.6],
    note: "low birth and death rates give fairly straight sides; the 50–59 bulge is the 1960s 'baby boom'",
  },
  japan: {
    name: "Japan",
    total: [7, 8.4, 10, 10.8, 14.6, 13.8, 12, 13.3, 10.1],
    female: [0.49, 0.49, 0.49, 0.49, 0.5, 0.5, 0.51, 0.54, 0.64],
    note: "about 1.2 children per woman and the world's oldest large population — almost 3 in 10 people are 65+",
  },
  singapore: {
    name: "Singapore",
    total: [8.5, 9.5, 12.5, 14.5, 15, 14.5, 13, 8.5, 4],
    female: [0.49, 0.49, 0.5, 0.51, 0.52, 0.51, 0.51, 0.53, 0.6],
    note: "resident fertility of about 1.0 child per woman (one of the lowest in the world) narrows the base fast",
  },
};

/** Simplified life table: one 'health' parameter s scales child, adult and old-age death risks. */
function survival(s: number): number[] {
  const child = 0.25 * Math.pow(0.004 / 0.25, s);
  const adult = 0.015 * Math.pow(0.0003 / 0.015, s);
  const g = 0.0004 * Math.pow(0.000015 / 0.0004, s);
  const l = [1];
  for (let a = 0; a < 101; a++) l.push(l[a] * Math.exp(-(child * Math.exp(-0.7 * a) + adult + g * Math.exp(0.1 * a))));
  return l;
}
const lifeExp = (l: number[]) => l.slice(0, 101).reduce((t, v, a) => t + (v + l[a + 1]) / 2, 0);

/** Long-run ("stable") population for a birth rate (per 1000) and life expectancy. */
function buildModel(birth: number, e0: number) {
  let lo = 0, hi = 1.6;
  for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (lifeExp(survival(m)) < e0) lo = m; else hi = m; }
  const l = survival((lo + hi) / 2);
  const L = l.slice(0, 101).map((v, a) => (v + l[a + 1]) / 2);
  const bOf = (r: number) => 1 / L.reduce((t, v, a) => t + v * Math.exp(-r * (a + 0.5)), 0);
  let rl = -0.08, rh = 0.1;
  for (let i = 0; i < 50; i++) { const m = (rl + rh) / 2; if (bOf(m) < birth / 1000) rl = m; else rh = m; }
  const r = (rl + rh) / 2;
  const p = L.map((v, a) => v * Math.exp(-r * (a + 0.5)));
  const T = p.reduce((x, y) => x + y, 0);
  const total = BANDS.map((_, k) => (100 * p.slice(k * 10, k === 8 ? 101 : k * 10 + 10).reduce((x, y) => x + y, 0)) / T);
  const young = (100 * p.slice(0, 15).reduce((x, y) => x + y, 0)) / T;
  const old = (100 * p.slice(65).reduce((x, y) => x + y, 0)) / T;
  return { total, young, old, growth: r * 100, death: birth - r * 1000 };
}

function shapeOf(total: number[]) {
  const idx = (total[0] + total[1]) / (total[2] + total[3]);
  if (idx > 1.15) return { label: "Expansive", tone: "rose" as const, why: "wide base, narrow top: many children, few elderly" };
  if (idx >= 0.85) return { label: "Stationary", tone: "amber" as const, why: "fairly straight sides: each generation is about the same size" };
  return { label: "Constrictive", tone: "sky" as const, why: "narrow base: fewer children than adults, more elderly" };
}

export function PyramidExplorer() {
  const [id, setId] = useState<CountryId>("niger");
  const [birth, setBirth] = useState(35);
  const [e0, setE0] = useState(60);

  const d = useMemo(() => {
    if (id === "build") {
      const m = buildModel(birth, e0);
      return { male: m.total.map((t) => t / 2), female: m.total.map((t) => t / 2), total: m.total, young: m.young, old: m.old, growth: m.growth, death: m.death };
    }
    const c = COUNTRIES[id];
    // With 10-year bands we approximate 0–14 as 0–9 + half of 10–19, and 65+ as half of 60–69 + 70+.
    const young = c.total[0] + c.total[1] / 2;
    const old = c.total[6] / 2 + c.total[7] + c.total[8];
    return { male: c.total.map((t, i) => t * (1 - c.female[i])), female: c.total.map((t, i) => t * c.female[i]), total: c.total, young, old, growth: null, death: null };
  }, [id, birth, e0]);

  const dep = (100 * (d.young + d.old)) / (100 - d.young - d.old);
  const shape = shapeOf(d.total);
  const maxX = Math.max(10, Math.ceil(Math.max(...d.male, ...d.female) / 5) * 5);
  const W = 360, cx = 180, half = 140, rowH = 22, top = 8;
  const sx = (v: number) => (v / maxX) * half;
  const replacement = Math.round(1000 / e0);

  return (
    <Frame
      title="Population Pyramid Explorer"
      caption={
        <p>
          <b>Notice:</b>{" "}
          {id === "build"
            ? `With a birth rate of ${birth} and life expectancy of ${e0}, this population ${d.growth! > 0.15 ? `grows about ${d.growth!.toFixed(1)}% a year` : d.growth! < -0.15 ? `shrinks about ${Math.abs(d.growth!).toFixed(1)}% a year` : "barely changes in size"} (death rate ≈ ${d.death!.toFixed(0)} per 1000). It stops growing when the birth rate ≈ 1000 ÷ life expectancy ≈ ${replacement}. ${shape.label}: ${shape.why}.`
            : `${COUNTRIES[id].name}: ${COUNTRIES[id].note}. Its dependency ratio is about ${dep.toFixed(0)}, so every 100 people of working age support about ${dep.toFixed(0)} children and elderly.`}
        </p>
      }
    >
      <Choice
        label="Choose a country — or build your own"
        value={id}
        onChange={setId}
        options={[
          { id: "niger", label: "Niger" }, { id: "india", label: "India" }, { id: "uk", label: "UK" },
          { id: "japan", label: "Japan" }, { id: "singapore", label: "Singapore" }, { id: "build", label: "🛠️ Build your own" },
        ]}
      />
      {id === "build" ? (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <Slider label="Birth rate (per 1000 per year)" min={7} max={50} value={birth} onChange={setBirth} color="#e11d48" />
          <Slider label="Life expectancy" min={35} max={85} value={e0} onChange={setE0} suffix=" yrs" color="#0284c7" />
          <p className="text-xs text-slate-500 sm:col-span-2">
            Predict first: if you drop the birth rate to 10, which bars shrink — the bottom or the top? Simplified model: the long-run shape once
            these rates stay fixed for a lifetime, no migration, men and women shown equal.
          </p>
        </div>
      ) : null}

      <svg viewBox={`0 0 ${W} ${top + rowH * 9 + 34}`} className="mt-3 w-full" role="img" aria-label={`Population pyramid, ${shape.label.toLowerCase()} shape`}>
        <text x={cx - 6} y={top + 2} textAnchor="end" fontSize="12" fontWeight="700" fill="#2563eb">◀ Male</text>
        <text x={cx + 6} y={top + 2} fontSize="12" fontWeight="700" fill="#db2777">Female ▶</text>
        {BANDS.map((b, i) => {
          const y = top + 8 + (8 - i) * rowH;
          return (
            <g key={b}>
              <rect x={cx - 16 - sx(d.male[i])} y={y} width={sx(d.male[i])} height={rowH - 4} rx="2" fill="#60a5fa" />
              <rect x={cx + 16} y={y} width={sx(d.female[i])} height={rowH - 4} rx="2" fill="#f472b6" />
              <text x={cx} y={y + rowH / 2 + 2} textAnchor="middle" fontSize="11" fill="#334155">{b}</text>
            </g>
          );
        })}
        {[0, maxX / 2, maxX].map((v) => (
          <g key={v} fontSize="11" fill="#64748b">
            <text x={cx - 16 - sx(v)} y={top + 8 + rowH * 9 + 12} textAnchor="middle">{v}%</text>
            <text x={cx + 16 + sx(v)} y={top + 8 + rowH * 9 + 12} textAnchor="middle">{v}%</text>
          </g>
        ))}
        <text x={cx} y={top + 8 + rowH * 9 + 25} textAnchor="middle" fontSize="11" fill="#64748b">% of total population in each age group</text>
      </svg>

      <div className="mt-2 grid grid-cols-3 gap-2">
        <Stat label="Shape" value={<span className="text-base">{shape.label}</span>} tone={shape.tone} />
        <Stat label="Dependency ratio" value={dep.toFixed(0)} tone="indigo" />
        <Stat label="Aged 65+" value={`${d.old.toFixed(0)}%`} tone="emerald" />
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Dependency ratio = (under-15s + over-64s) ÷ people aged 15–64 × 100.{id !== "build" ? " Country data are approximate (early 2020s, Singapore = residents) in 10-year bands, so the ratio is an estimate." : ""}
      </p>
    </Frame>
  );
}

/* ───────────────────────── 2. Demographic Transition Model Explorer ───────────────────────── */

const smooth = (t: number) => { const c = Math.min(1, Math.max(0, t)); return c * c * (3 - 2 * c); };
const lerp = (a: number, b: number, t: number) => a + (b - a) * smooth(t);

/** Simplified, idealised DTM rates (per 1000 per year) along x ∈ [0, 5] — stage n spans [n−1, n]. */
function deathRate(x: number) {
  if (x < 1) return 34 + 4 * Math.sin(x * 6 * Math.PI);
  if (x < 2) return lerp(34, 15, x - 1);
  if (x < 3) return lerp(15, 10, x - 2);
  if (x < 4) return 10;
  return lerp(10, 12, x - 4);
}
function birthRate(x: number) {
  if (x < 1) return 37 + 1.5 * Math.sin(x * 4 * Math.PI);
  if (x < 2) return 37;
  if (x < 3) return lerp(37, 15, x - 2);
  if (x < 4) return lerp(15, 12, x - 3);
  return lerp(12, 8, x - 4);
}

const STAGES = [
  { name: "High fluctuating", pop: "Low, steady", reasons: "Both rates high. Many births (no contraception, children work on farms) but many deaths from disease, famine and poor hygiene.", examples: "No country today; UK before about 1760; a few remote rainforest groups." },
  { name: "Early expanding", pop: "Rising very fast", reasons: "Death rate plunges thanks to clean water, vaccines, better food and medicine — but birth rate stays high, so natural increase is huge.", examples: "Niger, Chad, South Sudan (late stage 2); UK 1760–1880." },
  { name: "Late expanding", pop: "Still rising, more slowly", reasons: "Birth rate falls: contraception, girls' education, women working, fewer child deaths, cities where children cost money.", examples: "India, Kenya, Bangladesh; UK 1880–1940." },
  { name: "Low stationary", pop: "High, steady", reasons: "Both rates low. Families choose 1–2 children; good healthcare keeps death rate low.", examples: "UK, USA, Australia, Singapore (heading to stage 5)." },
  { name: "Declining", pop: "Slowly falling", reasons: "Birth rate drops below death rate: costly housing and childcare, careers, late marriage. An ageing population pushes the death rate up a little.", examples: "Japan, Italy, South Korea, Germany." },
];

export function DTMExplorer() {
  const [stage, setStage] = useState(1);
  const [guess, setGuess] = useState<string>("");

  const pts = useMemo(() => {
    const out: { x: number; b: number; d: number; p: number }[] = [];
    let pop = 1;
    for (let i = 0; i <= 200; i++) {
      const x = (i / 200) * 5;
      const b = birthRate(x), dr = deathRate(x);
      out.push({ x, b, d: dr, p: pop });
      pop *= Math.exp(((b - dr) / 1000) * 3.2); // each step ≈ a few years of growth (illustrative)
    }
    const max = Math.max(...out.map((o) => o.p));
    return out.map((o) => ({ ...o, p: o.p / max }));
  }, []);

  const W = 360, H = 210, L = 30, R = 330, T = 14, B = 170;
  const X = (x: number) => L + (x / 5) * (R - L);
  const Y = (v: number) => B - (v / 45) * (B - T);
  const line = (k: "b" | "d") => pts.map((o, i) => `${i ? "L" : "M"}${X(o.x).toFixed(1)},${Y(o[k]).toFixed(1)}`).join(" ");
  const popLine = pts.map((o, i) => `${i ? "L" : "M"}${X(o.x).toFixed(1)},${(B - o.p * (B - T - 6)).toFixed(1)}`).join(" ");
  const gap = pts.map((o) => `${X(o.x).toFixed(1)},${Y(o.b).toFixed(1)}`).join(" ") + " " + [...pts].reverse().map((o) => `${X(o.x).toFixed(1)},${Y(o.d).toFixed(1)}`).join(" ");
  const mid = pts[Math.round(((stage - 0.5) / 5) * 200)];
  const s = STAGES[stage - 1];
  const ni = mid.b - mid.d;

  return (
    <Frame
      title="Demographic Transition Model Explorer"
      caption={
        <p>
          <b>Notice:</b> in stage {stage} the birth rate is about {mid.b.toFixed(0)} and the death rate about {mid.d.toFixed(0)} per 1000, so natural increase is{" "}
          {ni > 0.5 ? `+${(ni / 10).toFixed(1)}% a year` : ni < -0.5 ? `${(ni / 10).toFixed(1)}% a year — the population shrinks` : "close to zero"}. The green gap between the lines is natural increase:
          the wider it is, the faster the total population (purple) climbs. Idealised model — real countries move at different speeds, and migration is ignored.
        </p>
      }
    >
      <div className="mb-3 rounded-xl bg-white p-3 ring-1 ring-slate-200">
        <Choice
          label="Predict first: in which stage is population growth fastest?"
          value={guess}
          onChange={setGuess}
          options={[1, 2, 3, 4, 5].map((n) => ({ id: String(n), label: `Stage ${n}` }))}
        />
        {guess ? (
          <p className="mt-2 text-sm text-slate-700">
            {guess === "2" || guess === "3" ? "✅ Yes! " : "❌ Not quite. "}
            Growth is fastest across late stage 2 and early stage 3: the death rate has already fallen but the birth rate is still high. Look for the widest green gap where the two stages meet.
          </p>
        ) : null}
      </div>

      <Slider label="Stage" min={1} max={5} value={stage} onChange={setStage} />

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full" role="img" aria-label={`DTM graph with stage ${stage} highlighted`}>
        <rect x={X(stage - 1)} y={T} width={X(stage) - X(stage - 1)} height={B - T} fill="#e0e7ff" />
        {[1, 2, 3, 4].map((n) => <line key={n} x1={X(n)} x2={X(n)} y1={T} y2={B} stroke="#cbd5e1" strokeDasharray="3 3" />)}
        {[0, 10, 20, 30, 40].map((v) => (
          <g key={v}>
            <line x1={L} x2={R} y1={Y(v)} y2={Y(v)} stroke="#f1f5f9" />
            <text x={L - 4} y={Y(v) + 4} textAnchor="end" fontSize="11" fill="#64748b">{v}</text>
          </g>
        ))}
        <polygon points={gap} fill="#10b981" opacity="0.18" />
        <path d={popLine} fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeDasharray="6 3" />
        <path d={line("b")} fill="none" stroke="#e11d48" strokeWidth="2.5" />
        <path d={line("d")} fill="none" stroke="#0f172a" strokeWidth="2.5" />
        {[1, 2, 3, 4, 5].map((n) => (
          <text key={n} x={X(n - 0.5)} y={B + 14} textAnchor="middle" fontSize="12" fontWeight={n === stage ? 700 : 400} fill={n === stage ? "#4338ca" : "#64748b"}>Stage {n}</text>
        ))}
        <circle cx={X(mid.x)} cy={Y(mid.b)} r="4" fill="#e11d48" />
        <circle cx={X(mid.x)} cy={Y(mid.d)} r="4" fill="#0f172a" />
        <g fontSize="11">
          <rect x={L} y={B + 24} width="12" height="4" fill="#e11d48" /><text x={L + 16} y={B + 30} fill="#334155">Birth rate</text>
          <rect x={L + 90} y={B + 24} width="12" height="4" fill="#0f172a" /><text x={L + 106} y={B + 30} fill="#334155">Death rate</text>
          <rect x={L + 182} y={B + 24} width="12" height="4" fill="#7c3aed" /><text x={L + 198} y={B + 30} fill="#334155">Total population</text>
        </g>
        <text x={8} y={T - 2} fontSize="11" fill="#64748b">per 1000</text>
      </svg>

      <div className="mt-2 grid grid-cols-3 gap-2">
        <Stat label="Birth rate" value={mid.b.toFixed(0)} tone="rose" />
        <Stat label="Death rate" value={mid.d.toFixed(0)} tone="indigo" />
        <Stat label="Population" value={<span className="text-sm">{s.pop}</span>} tone="sky" />
      </div>
      <div className="mt-3 rounded-xl bg-white p-3 text-sm text-slate-700 ring-1 ring-slate-200">
        <p className="font-bold text-indigo-700">Stage {stage}: {s.name}</p>
        <p className="mt-1"><b>Why:</b> {s.reasons}</p>
        <p className="mt-1"><b>Examples:</b> {s.examples}</p>
      </div>
    </Frame>
  );
}
