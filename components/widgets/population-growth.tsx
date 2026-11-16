"use client";

import { useMemo, useState } from "react";
import { Frame, Slider, Choice, Stat } from "./kit";

/* ------------------------------------------------------------------ */
/* 1. Growth Simulator: birth rate − death rate → growth & doubling    */
/* ------------------------------------------------------------------ */

type PresetId = "niger" | "india" | "uk" | "japan" | "singapore" | "custom";

// Approximate crude rates per 1,000 people (recent years, rounded; UN / national statistics).
const PRESETS: Record<Exclude<PresetId, "custom">, { name: string; cbr: number; cdr: number; pop: number }> = {
  niger: { name: "Niger", cbr: 45, cdr: 9, pop: 27 },
  india: { name: "India", cbr: 16, cdr: 7, pop: 1430 },
  uk: { name: "UK", cbr: 10, cdr: 9, pop: 68 },
  japan: { name: "Japan", cbr: 6, cdr: 13, pop: 124 },
  singapore: { name: "Singapore", cbr: 8, cdr: 6, pop: 6 },
};

function fmtPop(m: number): string {
  if (m >= 1000) return `${(m / 1000).toFixed(m >= 10000 ? 0 : 2)} bn`;
  if (m >= 100) return `${Math.round(m)} m`;
  return `${m.toFixed(1)} m`;
}

export function GrowthSimulator() {
  const [preset, setPreset] = useState<PresetId>("niger");
  const [cbr, setCbr] = useState(45);
  const [cdr, setCdr] = useState(9);
  const [pop0, setPop0] = useState(27);
  const [reveal, setReveal] = useState(false);

  const pick = (id: PresetId) => {
    setPreset(id);
    if (id !== "custom") {
      const p = PRESETS[id];
      setCbr(p.cbr);
      setCdr(p.cdr);
      setPop0(p.pop);
    }
  };

  const ni = cbr - cdr; // natural increase per 1,000
  const rate = ni / 10; // % per year
  const doubling = rate > 0 ? 70 / rate : null;
  const halving = rate < 0 ? 70 / -rate : null;

  const pts = useMemo(() => {
    const r = rate / 100;
    return Array.from({ length: 101 }, (_, t) => pop0 * Math.pow(1 + r, t));
  }, [rate, pop0]);
  const end = pts[100];
  const yMax = Math.max(...pts) * 1.08;

  const W = 360, H = 200, L = 46, R = 10, T = 12, B = 30;
  const x = (t: number) => L + (t / 100) * (W - L - R);
  const y = (v: number) => H - B - (v / yMax) * (H - T - B);
  const path = pts.map((v, t) => `${t === 0 ? "M" : "L"}${x(t).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const ticks = [0, 0.5, 1].map((f) => yMax * f / 1.08);

  // Doubling markers along the curve
  const doubleMarks: number[] = [];
  if (doubling) for (let k = 1; k * doubling <= 100 && k <= 8; k++) doubleMarks.push(k * doubling);

  let notice: string;
  if (ni >= 25) notice = `Births far outnumber deaths, so the population grows fast: it doubles roughly every ${doubling!.toFixed(0)} years. This is typical of countries early in the demographic transition (high birth rate, falling death rate), like Niger, where many families still have 6 or more children.`;
  else if (ni >= 5) notice = `Steady growth: the population doubles in about ${doubling!.toFixed(0)} years. Death rates have fallen a lot but birth rates are only starting to fall (like India).`;
  else if (ni > 0) notice = `Births only just beat deaths, so growth is very slow (doubling would take ${doubling!.toFixed(0)} years). Rich countries like the UK and Singapore are here; in real life, migration matters more than natural increase for them.`;
  else if (ni === 0) notice = "Births exactly equal deaths: zero natural increase. Without migration, the population would stay the same size.";
  else notice = `Deaths outnumber births, so the population shrinks by itself: it would halve in about ${halving!.toFixed(0)} years. This is natural decrease, happening now in Japan, where an ageing population means more deaths and fewer babies.`;

  return (
    <Frame
      title="Growth Simulator: births minus deaths"
      caption={
        <>
          <p><b>Notice:</b> {notice}</p>
          <p className="mt-1 text-xs text-slate-500">Simplified model: rates stay fixed for 100 years and migration is ignored. Real birth rates usually fall over time, so real projections are much lower. Rates are rounded recent values.</p>
        </>
      }
    >
      <div className="mb-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        <b>Predict first:</b> Niger grows by about 3.6% a year. Will its population double in more or less than 25 years?{" "}
        <button type="button" onClick={() => setReveal(!reveal)} className="ml-1 rounded-full bg-amber-200 px-2 py-0.5 text-xs font-bold">
          {reveal ? "Hide" : "Reveal"}
        </button>
        {reveal ? <span className="mt-1 block">Less! Rule of 70: 70 ÷ 3.6 ≈ 19 years. Small percentages add up fast because growth is compounded.</span> : null}
      </div>

      <Choice
        label="Country preset (or move the sliders)"
        value={preset}
        onChange={pick}
        options={[
          ...(Object.keys(PRESETS) as Exclude<PresetId, "custom">[]).map((id) => ({ id, label: PRESETS[id].name })),
          { id: "custom" as PresetId, label: "Custom" },
        ]}
      />

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Slider label="Birth rate (per 1,000 per year)" min={0} max={50} value={cbr} onChange={(n) => { setCbr(n); setPreset("custom"); }} color="#059669" />
        <Slider label="Death rate (per 1,000 per year)" min={0} max={30} value={cdr} onChange={(n) => { setCdr(n); setPreset("custom"); }} color="#e11d48" />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Natural increase" value={`${ni > 0 ? "+" : ""}${ni} /1,000`} tone={ni >= 0 ? "emerald" : "rose"} />
        <Stat label="Growth rate" value={`${rate > 0 ? "+" : ""}${rate.toFixed(1)}%`} tone="indigo" />
        <Stat label={halving ? "Halving time" : "Doubling time"} value={doubling ? `${doubling.toFixed(0)} yrs` : halving ? `${halving.toFixed(0)} yrs` : "never"} tone="amber" />
        <Stat label="After 100 years" value={fmtPop(end)} tone="sky" />
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full" role="img" aria-label={`Projected population over 100 years, from ${fmtPop(pop0)} to ${fmtPop(end)}`}>
        {ticks.map((v, i) => (
          <g key={i}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="#e2e8f0" />
            <text x={L - 4} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#64748b">{fmtPop(v)}</text>
          </g>
        ))}
        {[0, 25, 50, 75, 100].map((t) => (
          <text key={t} x={x(t)} y={H - B + 14} textAnchor="middle" fontSize="11" fill="#64748b">{t}</text>
        ))}
        <text x={(L + W - R) / 2} y={H - 3} textAnchor="middle" fontSize="11" fill="#475569">years from now</text>
        {doubleMarks.map((t, i) => (
          <g key={i}>
            <line x1={x(t)} x2={x(t)} y1={T} y2={H - B} stroke="#f59e0b" strokeDasharray="3 3" />
            <text x={x(t) + 2} y={T + 10} fontSize="11" fill="#b45309">×{2 ** (i + 1)}</text>
          </g>
        ))}
        <path d={path} fill="none" stroke={ni >= 0 ? "#4f46e5" : "#e11d48"} strokeWidth="3" />
        <circle cx={x(0)} cy={y(pop0)} r="4" fill="#4f46e5" />
      </svg>
      <p className="text-xs text-slate-500">Rule of 70: doubling time ≈ 70 ÷ growth rate (%). Orange lines mark each doubling.</p>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. World Population Timeline: the J-curve, 1700 → 2100              */
/* ------------------------------------------------------------------ */

// World population in billions (estimates: UN / Our World in Data; 2030+ = UN WPP 2024 medium projection).
const SERIES: [number, number][] = [
  [1700, 0.6], [1750, 0.79], [1804, 1.0], [1850, 1.26], [1900, 1.65], [1927, 2.0], [1950, 2.5],
  [1960, 3.0], [1974, 4.0], [1987, 5.0], [1999, 6.0], [2011, 7.0], [2022, 8.0], [2037, 9.0],
  [2050, 9.7], [2060, 10.0], [2084, 10.3], [2100, 10.2],
];
const BILLIONS: { bn: number; year: number; projected?: boolean }[] = [
  { bn: 1, year: 1804 }, { bn: 2, year: 1927 }, { bn: 3, year: 1960 }, { bn: 4, year: 1974 },
  { bn: 5, year: 1987 }, { bn: 6, year: 1999 }, { bn: 7, year: 2011 }, { bn: 8, year: 2022 },
  { bn: 9, year: 2037, projected: true }, { bn: 10, year: 2060, projected: true },
];

function popAt(year: number): number {
  for (let i = 1; i < SERIES.length; i++) {
    const [y1, p1] = SERIES[i];
    if (year <= y1) {
      const [y0, p0] = SERIES[i - 1];
      return p0 + ((year - y0) / (y1 - y0)) * (p1 - p0);
    }
  }
  return SERIES[SERIES.length - 1][1];
}

export function PopulationTimeline() {
  const [year, setYear] = useState(1950);
  const [reveal, setReveal] = useState(false);

  const pop = popAt(year);
  const growth = useMemo(() => {
    const a = popAt(Math.max(1700, year - 5));
    const b = popAt(Math.min(2100, year + 5));
    const span = Math.min(2100, year + 5) - Math.max(1700, year - 5);
    return ((Math.pow(b / a, 1 / span) - 1) * 100);
  }, [year]);

  const reached = BILLIONS.filter((m) => m.year <= year);
  const last = reached[reached.length - 1];
  const next = BILLIONS.find((m) => m.year > year);

  const W = 360, H = 210, L = 30, R = 10, T = 12, B = 28;
  const x = (yr: number) => L + ((yr - 1700) / 400) * (W - L - R);
  const y = (bn: number) => H - B - (bn / 11) * (H - T - B);
  const curve = (from: number, to: number) => {
    const d: string[] = [];
    for (let yr = from; yr <= to; yr += 2) d.push(`${d.length ? "L" : "M"}${x(yr).toFixed(1)},${y(popAt(yr)).toFixed(1)}`);
    return d.join(" ");
  };

  let notice: string;
  if (year < 1800) notice = "For most of history, birth rates AND death rates were high (disease, famine, poor medicine), so the population grew very slowly. It took all of human history until about 1804 to reach 1 billion.";
  else if (year < 1950) notice = "The Industrial and Agricultural Revolutions brought more food, clean water and better medicine, first in Europe. Death rates fell but birth rates stayed high, so growth sped up: the 2nd billion took 123 years.";
  else if (year < 1990) notice = "The fastest growth ever. After 1950, vaccines, antibiotics and the Green Revolution cut death rates across Asia, Africa and Latin America while families stayed large. Growth peaked at over 2% a year in the late 1960s, and a billion was added every 12–14 years.";
  else if (year <= 2022) notice = "Still adding a billion about every 12 years, but the growth RATE is falling as birth rates drop (education for girls, contraception, urbanisation). The curve is a huge base growing slowly, which still means big numbers.";
  else if (year < 2084) notice = "UN projection: growth keeps slowing as more countries' birth rates fall below replacement level (2.1 children per woman). Each new billion takes longer than the last; most growth will be in sub-Saharan Africa.";
  else notice = "UN projection: world population peaks at about 10.3 billion in the mid-2080s, then starts to fall slowly. The J-curve bends into an S-curve. (Projections are uncertain and could be higher or lower.)";

  const gaps = BILLIONS.slice(1).map((m, i) => ({ ...m, gap: m.year - BILLIONS[i].year }));
  const maxGap = 123;

  return (
    <Frame
      title="World Population Timeline: the J-curve"
      caption={<p><b>Notice:</b> {notice}</p>}
    >
      <div className="mb-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        <b>Predict first:</b> the 2nd billion took 123 years. How long did the 8th billion take?{" "}
        <button type="button" onClick={() => setReveal(!reveal)} className="ml-1 rounded-full bg-amber-200 px-2 py-0.5 text-xs font-bold">
          {reveal ? "Hide" : "Reveal"}
        </button>
        {reveal ? <span className="mt-1 block">Only 11 years (2011 → 2022). The bigger the population, the more people there are to have children, so each billion arrives faster even when the growth rate falls.</span> : null}
      </div>

      <Slider label="Year" min={1700} max={2100} value={year} onChange={setYear} />

      <div className="mt-3 grid grid-cols-3 gap-2">
        <Stat label="World pop." value={`${pop.toFixed(2)} bn`} tone="indigo" />
        <Stat label="Growth / yr" value={`${growth >= 0 ? "" : "−"}${Math.abs(growth).toFixed(2)}%`} tone={growth >= 0 ? "emerald" : "rose"} />
        <Stat label="Last billion" value={last ? `${last.bn}bn ${last.year}${last.projected ? "*" : ""}` : "< 1bn"} tone="amber" />
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full" role="img" aria-label={`World population curve from 1700 to 2100; in ${year} it was about ${pop.toFixed(1)} billion`}>
        {[0, 2, 4, 6, 8, 10].map((v) => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="#e2e8f0" />
            <text x={L - 4} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#64748b">{v}</text>
          </g>
        ))}
        {[1700, 1800, 1900, 2000, 2100].map((yr) => (
          <text key={yr} x={x(yr)} y={H - B + 14} textAnchor="middle" fontSize="11" fill="#64748b">{yr}</text>
        ))}
        <text x={L} y={T - 2} fontSize="11" fill="#475569">billions</text>
        <rect x={x(2022)} y={T} width={x(2100) - x(2022)} height={H - B - T} fill="#f1f5f9" />
        <text x={x(2061)} y={H - B - 6} textAnchor="middle" fontSize="11" fill="#64748b">UN projection</text>
        <path d={curve(1700, 2022)} fill="none" stroke="#4f46e5" strokeWidth="3" />
        <path d={curve(2022, 2100)} fill="none" stroke="#4f46e5" strokeWidth="3" strokeDasharray="5 4" />
        {BILLIONS.map((m) => (
          <circle key={m.bn} cx={x(m.year)} cy={y(m.bn)} r="3.5" fill={m.year <= year ? "#f59e0b" : "#fff"} stroke="#f59e0b" strokeWidth="1.5" />
        ))}
        <circle cx={x(2084)} cy={y(10.3)} r="3.5" fill="#e11d48" />
        <text x={x(2084)} y={y(10.3) - 7} textAnchor="middle" fontSize="11" fill="#be123c">peak ~10.3</text>
        <line x1={x(year)} x2={x(year)} y1={T} y2={H - B} stroke="#0f172a" strokeDasharray="2 3" />
        <circle cx={x(year)} cy={y(pop)} r="5" fill="#0f172a" />
      </svg>

      <p className="mb-1 mt-3 text-sm font-semibold text-slate-700">Years taken to add each billion</p>
      <div className="space-y-1">
        {gaps.map((g) => (
          <div key={g.bn} className="flex items-center gap-2 text-xs">
            <span className="w-24 shrink-0 text-slate-600">{g.bn - 1}→{g.bn}bn ({g.year}{g.projected ? "*" : ""})</span>
            <div className="h-3 flex-1 rounded bg-slate-100">
              <div
                className="h-3 rounded"
                style={{ width: `${(g.gap / maxGap) * 100}%`, background: g.year <= year ? (g.projected ? "#94a3b8" : "#f59e0b") : "#e2e8f0" }}
              />
            </div>
            <span className="w-12 text-right font-bold tabular-nums text-slate-700">{g.gap} yrs</span>
          </div>
        ))}
      </div>
      <p className="mt-1 text-xs text-slate-500">
        {next ? `Next milestone: ${next.bn} billion in ${next.year}${next.projected ? " (projected)" : ""}. ` : ""}
        * UN World Population Prospects 2024 medium projection. Earlier figures are estimates.
      </p>
    </Frame>
  );
}
