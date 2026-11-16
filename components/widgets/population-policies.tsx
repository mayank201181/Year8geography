"use client";

import { useMemo, useState } from "react";
import { Choice, Frame, Slider, Stat } from "./kit";

/* ------------------------------------------------------------------ */
/* 1. Fertility Future: what a total fertility rate does in 3 generations */
/* ------------------------------------------------------------------ */

const PRESETS: { id: string; label: string; tfr: number }[] = [
  { id: "sg", label: "Singapore ~1.0", tfr: 1.0 },
  { id: "cn", label: "China OCP ~1.6", tfr: 1.6 },
  { id: "rep", label: "Replacement 2.1", tfr: 2.1 },
  { id: "ne", label: "Niger ~6.7", tfr: 6.7 },
];

const GEN_LABELS: [string, string][] = [["Adults", "(today)"], ["Children", "(gen 1)"], ["Grand-", "children"], ["Great-grand-", "children"]];

export function FertilityFuture() {
  const [tfr, setTfr] = useState(1.6);
  const [view, setView] = useState<"gens" | "tree">("gens");

  // Simplified model: 100 adults = 50 couples; each woman has `tfr` children,
  // so each generation is (tfr / 2) times the one before. No child deaths, no migration.
  const gens = useMemo(() => [0, 1, 2, 3].map((n) => 100 * Math.pow(tfr / 2, n)), [tfr]);
  const ratio = tfr / 2;
  const maxBar = Math.max(110, gens[3]);

  // 4-2-1 family pyramid generalised: 4 grandparents : 2f parents : f^2 children
  const tiers = [
    { name: "Grandparents", n: 4, color: "#94a3b8" },
    { name: "Parents", n: 2 * tfr, color: "#6366f1" },
    { name: "Children", n: tfr * tfr, color: "#f59e0b" },
  ];

  const W = 360, H = 220, left = 44, bottom = 190, top = 16;
  const barW = 56, gap = (W - left - 10 - barW * 4) / 4;
  const y = (v: number) => bottom - (Math.min(v, maxBar) / maxBar) * (bottom - top);

  const fmt = (v: number) => (v >= 100 ? Math.round(v).toLocaleString() : v >= 10 ? v.toFixed(0) : v.toFixed(1));

  let note: string;
  if (Math.abs(tfr - 2.1) < 0.05)
    note = "At about 2.1 each generation roughly replaces itself: the population stays stable in the long run (the extra 0.1 covers children who die young and the fact that slightly more boys than girls are born).";
  else if (tfr < 2.1)
    note = `Each generation is only ${Math.round(ratio * 100)}% the size of the one before, so ${Math.round(gens[3])} great-grandchildren replace 100 adults. Fewer workers will support more elderly people: an ageing, shrinking population, the problem Singapore and China face today.`;
  else
    note = `Each generation is ${ratio.toFixed(1)}× bigger than the last: 100 adults become about ${fmt(gens[3])} great-grandchildren. Rapid growth like this means a very young population that needs schools, jobs and food, the challenge Niger faces.`;

  return (
    <Frame
      title="Fertility Future: what happens in 3 generations?"
      caption={
        <>
          <p><b>Notice:</b> {note}</p>
          <p className="mt-1 text-xs text-slate-500">
            Simplified model: every adult pairs up, every child survives to have children, no migration. Real populations also keep growing
            for a while after fertility falls (population momentum), because there are already many young people.
          </p>
        </>
      }
    >
      <p className="mb-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
        <b>Predict first:</b> if every woman has 1.5 children, how many great-grandchildren will 100 adults have? More or less than half?
      </p>
      <Slider label="Total fertility rate (children per woman)" min={0.8} max={7} step={0.1} value={tfr} onChange={setTfr} color={tfr < 2.05 ? "#e11d48" : tfr > 2.15 ? "#059669" : "#4f46e5"} />
      <div className="mt-2 flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button key={p.id} type="button" onClick={() => setTfr(p.tfr)}
            className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${Math.abs(tfr - p.tfr) < 0.01 ? "bg-indigo-600 text-white ring-indigo-600" : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50"}`}>
            {p.label}
          </button>
        ))}
      </div>
      <div className="mt-3">
        <Choice label="Show as" value={view} onChange={setView} options={[{ id: "gens", label: "Generation sizes" }, { id: "tree", label: "Family pyramid (4-2-1)" }]} />
      </div>

      {view === "gens" ? (
        <svg viewBox={`0 0 ${W} ${H + 14}`} className="mt-3 w-full" role="img"
          aria-label={`Bar chart: 100 adults, then ${fmt(gens[1])} children, ${fmt(gens[2])} grandchildren and ${fmt(gens[3])} great-grandchildren at a fertility rate of ${tfr}`}>
          <line x1={left} y1={bottom} x2={W - 6} y2={bottom} stroke="#94a3b8" />
          <line x1={left} y1={top} x2={left} y2={bottom} stroke="#94a3b8" />
          {[0, 0.5, 1].map((f) => (
            <text key={f} x={left - 4} y={bottom - f * (bottom - top) + 4} fontSize="11" textAnchor="end" fill="#64748b">{Math.round(maxBar * f)}</text>
          ))}
          {gens.map((g, i) => {
            const x = left + gap / 2 + i * (barW + gap);
            return (
              <g key={i}>
                <rect x={x} y={y(g)} width={barW} height={bottom - y(g)} rx={4} fill={i === 0 ? "#94a3b8" : tfr < 2.05 ? "#fb7185" : tfr > 2.15 ? "#34d399" : "#818cf8"} />
                <text x={x + barW / 2} y={y(g) - 4} fontSize="12" fontWeight="bold" textAnchor="middle" fill="#1e293b">{fmt(g)}</text>
                <text x={x + barW / 2} y={bottom + 14} fontSize="11" textAnchor="middle" fill="#475569">{GEN_LABELS[i][0]}</text>
                <text x={x + barW / 2} y={bottom + 27} fontSize="11" textAnchor="middle" fill="#94a3b8">{GEN_LABELS[i][1]}</text>
              </g>
            );
          })}
          {/* replacement line: 100 people per generation */}
          <line x1={left} x2={W - 6} y1={y(100)} y2={y(100)} stroke="#4f46e5" strokeDasharray="5 4" strokeWidth={1.5} />
          <text x={W - 8} y={y(100) - 4} fontSize="11" textAnchor="end" fill="#4f46e5">replacement (TFR 2.1)</text>
        </svg>
      ) : (
        <svg viewBox="0 0 360 230" className="mt-3 w-full" role="img"
          aria-label={`Family pyramid: for every 4 grandparents there are ${fmt(tiers[1].n)} parents and ${fmt(tiers[2].n)} children`}>
          {tiers.map((t, ti) => {
            const count = Math.round(t.n);
            const perRow = 16;
            const r = count > 32 ? 4.5 : 7;
            const step = r * 2 + 3;
            const baseY = 30 + ti * 70;
            return (
              <g key={t.name}>
                <text x={8} y={baseY - 14} fontSize="12" fontWeight="bold" fill="#334155">{t.name}: {fmt(t.n)}</text>
                {Array.from({ length: count }).map((_, k) => {
                  const row = Math.floor(k / perRow);
                  const inRow = Math.min(perRow, count - row * perRow);
                  const col = k % perRow;
                  const cx = 180 - ((inRow - 1) * step) / 2 + col * step;
                  const cy = baseY + row * (step - 1);
                  return <circle key={k} cx={cx} cy={cy} r={r} fill={t.color} />;
                })}
                {count === 0 && <text x={180} y={baseY + 4} fontSize="11" textAnchor="middle" fill="#94a3b8">(less than one)</text>}
              </g>
            );
          })}
          <text x={180} y={224} fontSize="11" textAnchor="middle" fill="#64748b">Each dot = one person in one extended family (rounded)</text>
        </svg>
      )}

      <div className="mt-2 grid grid-cols-3 gap-2">
        <Stat label="Children per woman" value={tfr.toFixed(1)} tone="indigo" />
        <Stat label="Change per gen." value={`${ratio >= 1 ? "+" : ""}${Math.round((ratio - 1) * 100)}%`} tone={tfr < 2.05 ? "rose" : tfr > 2.15 ? "emerald" : "indigo"} />
        <Stat label="Great-grandchildren" value={fmt(gens[3])} tone="amber" />
      </div>
      {view === "tree" && (
        <p className="mt-2 text-sm text-slate-600">
          {Math.abs(tfr - 1) < 0.05
            ? "This is China's 4-2-1 problem: under the one-child policy, one child may one day have to care for 2 parents and 4 grandparents."
            : `For every 4 grandparents there are ${fmt(tiers[1].n)} parents and ${fmt(tiers[2].n)} children. Try 1.0 to see the 4-2-1 "inverted pyramid".`}
        </p>
      )}
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Malthus vs Boserup: population vs food supply over time          */
/* ------------------------------------------------------------------ */

const INVENTIONS = ["Irrigation & better ploughs", "Chemical fertiliser", "Green Revolution high-yield seeds"];
const YEARS = 100;
const YMAX = 1700;

type Pt = { t: number; pop: number; food: number; raw: number };

function simulate(mode: "malthus" | "boserup") {
  const pts: Pt[] = [];
  const jumps: { t: number; label: string }[] = [];
  let food = 200;
  for (let t = 0; t <= YEARS; t++) {
    const raw = 100 * Math.pow(2, t / 25); // population doubles every 25 years (Malthus's own assumption)
    if (mode === "malthus") {
      food = 200 + 4 * t; // arithmetic: +100 units every 25 years
      pts.push({ t, raw, food, pop: Math.min(raw, food) }); // positive checks hold population at the food limit
    } else {
      if (t > 0) food += 1; // slow improvement between big breakthroughs
      if (raw >= 0.85 * food) {
        food *= 2; // pressure → innovation
        jumps.push({ t, label: INVENTIONS[Math.min(jumps.length, INVENTIONS.length - 1)] });
      }
      pts.push({ t, raw, food, pop: raw });
    }
  }
  return { pts, jumps };
}

export function MalthusBoserup() {
  const [mode, setMode] = useState<"malthus" | "boserup">("malthus");
  const [year, setYear] = useState(30);
  const { pts, jumps } = useMemo(() => simulate(mode), [mode]);

  const W = 360, H = 220, L = 46, R = 10, T = 12, B = 186;
  const x = (t: number) => L + (t / YEARS) * (W - L - R);
  const y = (v: number) => B - (Math.min(v, YMAX * 1.05) / YMAX) * (B - T);
  const shown = pts.slice(0, year + 1);
  const path = (k: keyof Pt) => shown.map((p, i) => `${i ? "L" : "M"}${x(p.t).toFixed(1)},${y(p[k]).toFixed(1)}`).join(" ");
  const now = pts[year];
  const perPerson = now.food / now.raw;
  const crisis = mode === "malthus" && now.raw > now.food;
  const jumpsSoFar = jumps.filter((j) => j.t <= year);

  let note: string;
  if (mode === "malthus") {
    note = year < 50
      ? `Population (doubling every 25 years) is racing towards the food line, which only adds the same amount each year. Food per person is falling: ${perPerson.toFixed(2)} units each.`
      : `Crisis point reached at year 50! Malthus argued "positive checks" (famine, disease, war) would then push population back down to what the food can feed. The dashed line shows the ${Math.round(now.raw - now.food)} extra people who could not be fed.`;
  } else {
    note = jumpsSoFar.length === 0
      ? "Population is growing towards the food limit. Boserup said this pressure is exactly what pushes farmers to find new ways to grow more. Keep sliding…"
      : `Each time population pressed on the food supply, people innovated (latest: ${jumpsSoFar[jumpsSoFar.length - 1].label}) and food jumped up. Food per person: ${perPerson.toFixed(2)} units. "Necessity is the mother of invention."`;
  }

  return (
    <Frame
      title="Malthus vs Boserup: will we run out of food?"
      caption={
        <>
          <p><b>Notice:</b> {note}</p>
          <p className="mt-1 text-xs text-slate-500">
            Honest caption: this is a made-up, simplified model to show the two ideas. Since Malthus wrote in 1798, world population has grown about
            8 times and food per person has still risen, so history so far looks more like Boserup. But famines still happen locally (often because
            of war, poverty or unfair distribution, not a global shortage), and soil, water and climate may set limits. Neither theory is the whole truth.
          </p>
        </>
      }
    >
      <p className="mb-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
        <b>Predict first:</b> population doubles every 25 years; food adds the same amount each year. In which year does the population outgrow the food?
      </p>
      <Choice value={mode} onChange={setMode} options={[{ id: "malthus", label: "Malthus (1798)" }, { id: "boserup", label: "Boserup (1965)" }]} />
      <div className="mt-3">
        <Slider label="Year" min={0} max={YEARS} value={year} onChange={setYear} suffix=" yrs" />
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full" role="img"
        aria-label={`${mode === "malthus" ? "Malthus" : "Boserup"} graph at year ${year}: population ${Math.round(now.pop)}, food supply for ${Math.round(now.food)}`}>
        <defs>
          <clipPath id="mb-plot"><rect x={L} y={T} width={W - L - R} height={B - T} /></clipPath>
        </defs>
        <line x1={L} y1={B} x2={W - R} y2={B} stroke="#94a3b8" />
        <line x1={L} y1={T} x2={L} y2={B} stroke="#94a3b8" />
        {[0, 500, 1000, 1500].map((v) => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="#e2e8f0" />
            <text x={L - 4} y={y(v) + 4} fontSize="11" textAnchor="end" fill="#64748b">{v}</text>
          </g>
        ))}
        {[0, 25, 50, 75, 100].map((t) => (
          <text key={t} x={x(t)} y={B + 14} fontSize="11" textAnchor="middle" fill="#64748b">{t}</text>
        ))}
        <text x={(L + W - R) / 2} y={B + 28} fontSize="11" textAnchor="middle" fill="#475569">years</text>
        <text x={12} y={(T + B) / 2} fontSize="11" textAnchor="middle" fill="#475569" transform={`rotate(-90 12 ${(T + B) / 2})`}>people (millions)</text>

        <g clipPath="url(#mb-plot)">
          {mode === "malthus" && year > 50 && (
            <path d={`${pts.slice(50, year + 1).map((p, i) => `${i ? "L" : "M"}${x(p.t).toFixed(1)},${y(p.raw).toFixed(1)}`).join(" ")} ${pts.slice(50, year + 1).reverse().map((p) => `L${x(p.t).toFixed(1)},${y(p.food).toFixed(1)}`).join(" ")} Z`} fill="#fecdd3" opacity={0.6} />
          )}
          <path d={path("food")} fill="none" stroke="#059669" strokeWidth={2.5} />
          {mode === "malthus" && <path d={path("raw")} fill="none" stroke="#e11d48" strokeWidth={1.5} strokeDasharray="5 4" />}
          <path d={path("pop")} fill="none" stroke="#e11d48" strokeWidth={2.5} />
          {mode === "malthus" && year >= 50 && <circle cx={x(50)} cy={y(400)} r={5} fill="#e11d48" stroke="white" strokeWidth={1.5} />}
          {mode === "boserup" && jumpsSoFar.map((j) => (
            <g key={j.t}>
              <line x1={x(j.t)} x2={x(j.t)} y1={T} y2={B} stroke="#f59e0b" strokeDasharray="3 3" />
              <text x={x(j.t) + 3} y={T + 12} fontSize="11" fill="#b45309">💡{j.t}</text>
            </g>
          ))}
        </g>
        {mode === "malthus" && year >= 50 && (
          <text x={x(50) + 6} y={y(400) + 16} fontSize="11" fontWeight="bold" fill="#be123c">crisis point</text>
        )}
        {now.food > YMAX && <text x={W - R - 2} y={T + 26} fontSize="11" textAnchor="end" fill="#047857">food ↑ off chart</text>}
        <g fontSize="11">
          <rect x={L + 8} y={T + 30} width={10} height={4} fill="#059669" />
          <text x={L + 22} y={T + 35} fill="#047857">food supply (people it can feed)</text>
          <rect x={L + 8} y={T + 44} width={10} height={4} fill="#e11d48" />
          <text x={L + 22} y={T + 49} fill="#be123c">population</text>
        </g>
      </svg>

      <div className="mt-2 grid grid-cols-3 gap-2">
        <Stat label="Population" value={Math.round(mode === "malthus" ? now.pop : now.raw)} tone="rose" />
        <Stat label="Food supply" value={Math.round(now.food)} tone="emerald" />
        <Stat label={crisis ? "Status" : "Food / person"} value={crisis ? "Crisis" : perPerson.toFixed(2)} tone={crisis || perPerson < 1.1 ? "amber" : "sky"} />
      </div>
      {mode === "boserup" && jumpsSoFar.length > 0 && (
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
          {jumpsSoFar.map((j) => <li key={j.t}>Year {j.t}: {j.label}, food supply doubles</li>)}
        </ul>
      )}
    </Frame>
  );
}
