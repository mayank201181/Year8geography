"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const fmt1 = (n: number) => (Math.round(n * 10) / 10).toString().replace("-", "−");
const fmt2 = (n: number) => (Math.round(n * 100) / 100).toString().replace("-", "−");
const big = (n: number) => Math.round(n).toLocaleString("en-GB");

/** A "nice" axis maximum ≥ v (1, 2, 2.5, 5 × 10^k). */
function niceMax(v: number): number {
  if (v <= 0) return 1;
  const p = Math.pow(10, Math.floor(Math.log10(v)));
  for (const m of [1, 2, 2.5, 5, 10]) if (m * p >= v - 1e-9) return m * p;
  return 10 * p;
}

/** Exact doubling time in years for a steady growth rate r % per year. */
const doublingExact = (r: number) => Math.log(2) / Math.log(1 + r / 100);

// ---------------------------------------------------------------------------
// Widget 1: birth & death rate lab
// ---------------------------------------------------------------------------

type Stage = { label: string; detail: string; tone: "brand" | "good" | "bad" | "ink" };

/** Simplified mapping from a pair of rates to the closest DTM stage. */
function closestStage(br: number, dr: number): Stage {
  const nat = br - dr;
  if (dr > br && dr >= 20)
    return { label: "No normal stage", detail: "A death rate this high above the birth rate means a crisis — famine, war or an epidemic — not a normal DTM stage.", tone: "bad" };
  if (br >= 30 && dr >= 25) return { label: "Stage 1", detail: "Both rates high and close together: births and deaths cancel out, so the population stays low and steady.", tone: "ink" };
  if (br >= 30) return { label: "Stage 2", detail: "Birth rate still high but the death rate has fallen: the gap is wide, so the population grows fast.", tone: "bad" };
  if (nat >= 5) return { label: "Stage 3", detail: "The birth rate is falling but is still well above the low death rate: growth continues, but more slowly.", tone: "brand" };
  if (nat < 0) return { label: "Stage 5", detail: "Births below deaths: natural decrease, and an ageing population.", tone: "bad" };
  return { label: "Stage 4", detail: "Both rates low and nearly equal: the population is high but roughly stable.", tone: "good" };
}

const PRESETS: { id: string; label: string; br: number; dr: number }[] = [
  { id: "s1", label: "Stage 1-style (38, 35)", br: 38, dr: 35 },
  { id: "niger", label: "Roughly Niger (45, 9)", br: 45, dr: 9 },
  { id: "s3", label: "Stage 3-style (22, 8)", br: 22, dr: 8 },
  { id: "uk", label: "Roughly UK (10, 9)", br: 10, dr: 9 },
  { id: "japan", label: "Roughly Japan (6, 13)", br: 6, dr: 13 },
];

function RatesLab() {
  const [br, setBr] = useState(38);
  const [dr, setDr] = useState(18);
  const nat = br - dr;
  const rni = nat / 10;
  const stage = closestStage(br, dr);
  const start = 10; // million
  const years = 100;
  const pop = (t: number) => start * Math.pow(1 + rni / 100, t);
  const end = pop(years);
  const dbl = rni > 0 ? doublingExact(rni) : null;
  const half = rni < 0 ? Math.log(0.5) / Math.log(1 + rni / 100) : null;

  // --- Bar chart (BR vs DR), 0–50 per 1000 ---
  const BW = 150, BH = 200, base = 175, top = 24;
  const by = (v: number) => base - ((base - top) * v) / 50;

  // --- Population curve ---
  const W = 320, H = 200, L = 44, R = 10, Tp = 22, B = 30;
  const yMax = niceMax(Math.max(start, end) * 1.02);
  const gx = (t: number) => L + ((W - L - R) * t) / years;
  const gy = (p: number) => H - B - ((H - B - Tp) * p) / yMax;
  const pts: string[] = [];
  for (let t = 0; t <= years; t += 2) pts.push(`${gx(t).toFixed(1)},${gy(pop(t)).toFixed(1)}`);
  const yTicks = [0, yMax / 4, yMax / 2, (3 * yMax) / 4, yMax];

  return (
    <WidgetFrame
      title="Birth & death rate lab"
      tryThis={[
        "Start at stage 1 (38, 35). Now cut ONLY the death rate to 10. What happens to the 100-year line — and which stage are you in?",
        "Find a pair of rates that makes the population exactly stable. What must be true about the two numbers?",
        "Set roughly Niger (45, 9). Predict the doubling time with the rule of 70, then check the readout.",
        "Make the population shrink without any crisis. Which stage is that?",
      ]}
      caption={
        <>
          <p>
            Births {br} − deaths {dr} = <strong>{nat > 0 ? "+" : ""}{fmt1(nat)} per 1000</strong>, so the rate of natural increase is ({br} − {dr}) ÷ 10 ={" "}
            <strong>{fmt1(rni)}%</strong> a year.{" "}
            {rni > 0
              ? `At that steady rate a population of 10 million doubles about every ${fmt1(dbl ?? 0)} years and reaches about ${big(end)} million after 100 years.`
              : rni < 0
                ? `At that steady rate a population of 10 million halves about every ${fmt1(half ?? 0)} years and falls to about ${fmt1(end)} million after 100 years.`
                : "Births exactly balance deaths, so (ignoring migration) the population stays the same."}
          </p>
          <p className="mt-2">
            <strong>Closest DTM stage: {stage.label}.</strong> {stage.detail} <em>Simplified model: real rates change every year, and migration is ignored.</em>
          </p>
        </>
      }
    >
      <div className="mb-3 flex flex-wrap gap-2" role="group" aria-label="Example rate presets">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`min-h-[40px] rounded-xl border px-3 py-1.5 text-sm font-bold transition ${p.br === br && p.dr === dr ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2 hover:text-ink"}`}
            onClick={() => {
              setBr(p.br);
              setDr(p.dr);
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Birth rate (per 1000 per year)" value={br} min={4} max={50} onChange={setBr} />
        <Slider label="Death rate (per 1000 per year)" value={dr} min={2} max={45} onChange={setDr} />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Readout label="Natural change" value={`${nat > 0 ? "+" : ""}${fmt1(nat)} /1000`} tone={nat > 0 ? "brand" : nat < 0 ? "bad" : "ink"} />
        <Readout label="Rate of natural increase" value={`${fmt1(rni)}%`} tone={nat > 0 ? "brand" : nat < 0 ? "bad" : "ink"} />
        <Readout label={rni < 0 ? "Halving time" : "Doubling time"} value={dbl ? `${fmt1(dbl)} yrs` : half ? `${fmt1(half)} yrs` : "never"} tone="ink" />
        <Readout label="Closest DTM stage" value={stage.label} tone={stage.tone} />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_2fr]">
        <svg viewBox={`0 0 ${BW} ${BH}`} className="mx-auto h-auto w-full max-w-[220px]" role="img" aria-label={`Bar chart: birth rate ${br} and death rate ${dr} per 1000; the gap is ${fmt1(nat)} per 1000.`}>
          {[0, 10, 20, 30, 40, 50].map((v) => (
            <g key={v}>
              <line x1={30} x2={BW - 6} y1={by(v)} y2={by(v)} className="stroke-line" strokeWidth={1} />
              <text x={26} y={by(v) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">{v}</text>
            </g>
          ))}
          <rect x={42} y={by(br)} width={36} height={base - by(br)} className="fill-brand" rx={3} />
          <rect x={96} y={by(dr)} width={36} height={base - by(dr)} className="fill-ink-2" rx={3} />
          {nat !== 0 ? (
            <line x1={60} x2={114} y1={by(br)} y2={by(br)} className={nat > 0 ? "stroke-brand" : "stroke-ink-2"} strokeDasharray="3 3" strokeWidth={1.5} />
          ) : null}
          <text x={60} y={base + 14} fontSize={11} textAnchor="middle" className="fill-ink">Births</text>
          <text x={114} y={base + 14} fontSize={11} textAnchor="middle" className="fill-ink">Deaths</text>
          <text x={6} y={10} fontSize={9} className="fill-ink-2">per 1000</text>
        </svg>
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Line graph: a population of 10 million growing at ${fmt1(rni)} percent a year reaches about ${fmt1(end)} million after 100 years.`}>
          {yTicks.map((v) => (
            <g key={v}>
              <line x1={L} x2={W - R} y1={gy(v)} y2={gy(v)} className="stroke-line" strokeWidth={1} />
              <text x={L - 4} y={gy(v) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">{fmt1(v)}</text>
            </g>
          ))}
          {[0, 25, 50, 75, 100].map((t) => (
            <text key={t} x={gx(t)} y={H - B + 14} fontSize={10} textAnchor="middle" className="fill-ink-2">{t}</text>
          ))}
          <line x1={L} x2={W - R} y1={gy(start)} y2={gy(start)} className="stroke-ink-2" strokeDasharray="4 3" strokeWidth={1} />
          <polyline points={pts.join(" ")} fill="none" className={rni >= 0 ? "stroke-brand" : "stroke-ink"} strokeWidth={2.5} />
          <text x={(L + W - R) / 2} y={H - 3} fontSize={10} textAnchor="middle" className="fill-ink-2">Years from now</text>
          <text x={4} y={9} fontSize={9} className="fill-ink-2">Population (millions)</text>
        </svg>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: doubling-time explorer
// ---------------------------------------------------------------------------

/** UN world population milestones (billions, year). */
const MILESTONES: [number, number][] = [
  [1, 1804],
  [2, 1927],
  [3, 1960],
  [4, 1974],
  [5, 1987],
  [6, 1999],
  [7, 2011],
  [8, 2022],
];

const DOUBLINGS = [
  { from: 1, to: 2, y1: 1804, y2: 1927 },
  { from: 2, to: 4, y1: 1927, y2: 1974 },
  { from: 4, to: 8, y1: 1974, y2: 2022 },
];

function DoublingExplorer() {
  const [mode, setMode] = useState<"explore" | "history">("explore");
  const [rate, setRate] = useState(2);
  const exact = doublingExact(rate);
  const r70 = 70 / rate;
  const horizon = 150;
  const startBn = 1;
  const pop = (t: number) => startBn * Math.pow(1 + rate / 100, t);
  const endP = pop(horizon);
  const doublingYears: number[] = [];
  for (let k = 1; k * exact <= horizon && k <= 12; k++) doublingYears.push(k * exact);

  // Curve geometry
  const W = 320, H = 210, L = 42, R = 10, Tp = 22, B = 30;
  const yMax = niceMax(endP * 1.02);
  const gx = (t: number) => L + ((W - L - R) * t) / horizon;
  const gy = (p: number) => H - B - ((H - B - Tp) * p) / yMax;
  const pts: string[] = [];
  for (let t = 0; t <= horizon; t += 2) pts.push(`${gx(t).toFixed(1)},${gy(pop(t)).toFixed(1)}`);

  // History geometry: J-curve from the milestones + UN 2024 projected peak.
  const HX0 = 1800, HX1 = 2100;
  const hx = (y: number) => L + ((W - L - R) * (y - HX0)) / (HX1 - HX0);
  const hy = (b: number) => H - B - ((H - B - Tp) * b) / 12;

  return (
    <WidgetFrame
      title="Doubling-time explorer"
      tryThis={[
        "Predict first: at 1% growth, how long to double? Use 70 ÷ rate, then move the slider to check.",
        "Double the growth rate from 1% to 2%. What happens to the doubling time?",
        "At 3.5% a year (fast for a country), how many times does the population double in 150 years?",
        "Switch to World history: why did the 4 → 8 billion doubling NOT happen faster than the 2 → 4 billion one?",
      ]}
      caption={
        mode === "explore" ? (
          <p>
            Growing at a steady <strong>{fmt1(rate)}%</strong> a year, a population doubles about every <strong>{fmt1(exact)} years</strong>. The rule of 70 gives 70 ÷ {fmt1(rate)} ={" "}
            <strong>{fmt1(r70)} years</strong> — very close. Each doubling adds more people than the one before, which is why steady % growth makes a{" "}
            <strong>J-curve</strong>: after 150 years the population is about {endP >= 100 ? big(endP) : fmt1(endP)} times its starting size. <em>Simplified model: real growth rates change over time.</em>
          </p>
        ) : (
          <p>
            The world went from 1 to 2 billion in <strong>123 years</strong> (1804–1927), then 2 to 4 billion in only <strong>47 years</strong> as death rates fell. But 4 to 8 billion
            took <strong>48 years</strong> — no faster — because the growth rate had peaked at just over 2% a year in the 1960s and then fell as birth rates dropped. Today it is
            under 1%, and the UN (2024) projects a peak of about <strong>10.3 billion</strong> in the mid-2080s, so world population may never double again.
          </p>
        )
      }
    >
      <Segmented
        label="Mode"
        value={mode}
        onChange={setMode}
        options={[
          { value: "explore", label: "Explore a growth rate" },
          { value: "history", label: "World history" },
        ]}
      />
      {mode === "explore" ? (
        <div className="mt-4 space-y-3">
          <Slider label="Growth rate (% per year)" value={rate} min={0.1} max={4} step={0.1} onChange={setRate} format={(v) => `${fmt1(v)}%`} />
          <div className="grid grid-cols-3 gap-2">
            <Readout label="Doubling time" value={`${fmt1(exact)} yrs`} />
            <Readout label="Rule of 70" value={`${fmt1(r70)} yrs`} tone="ink" />
            <Readout label="Doublings in 150 yrs" value={doublingYears.length} tone="good" />
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`J-curve: starting at 1, growing ${fmt1(rate)} percent a year, the population doubles every ${fmt1(exact)} years and reaches about ${fmt1(endP)} times its size after 150 years.`}>
            {[0, yMax / 4, yMax / 2, (3 * yMax) / 4, yMax].map((v) => (
              <g key={v}>
                <line x1={L} x2={W - R} y1={gy(v)} y2={gy(v)} className="stroke-line" strokeWidth={1} />
                <text x={L - 4} y={gy(v) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">{fmt2(v)}×</text>
              </g>
            ))}
            {[0, 50, 100, 150].map((t) => (
              <text key={t} x={gx(t)} y={H - B + 14} fontSize={10} textAnchor="middle" className="fill-ink-2">{t}</text>
            ))}
            {doublingYears.map((t, i) => (
              <g key={i}>
                <line x1={gx(t)} x2={gx(t)} y1={gy(0)} y2={gy(Math.pow(2, i + 1))} className="stroke-ink-2" strokeDasharray="3 3" strokeWidth={1} />
                <circle cx={gx(t)} cy={gy(Math.pow(2, i + 1))} r={3.5} className="fill-brand" />
              </g>
            ))}
            <polyline points={pts.join(" ")} fill="none" className="stroke-brand" strokeWidth={2.5} />
            <text x={(L + W - R) / 2} y={H - 3} fontSize={10} textAnchor="middle" className="fill-ink-2">Years</text>
            <text x={4} y={9} fontSize={9} className="fill-ink-2">Size (× starting population)</text>
          </svg>
          <div className="flex flex-wrap gap-1 text-xs" aria-label="Doubling timeline">
            {doublingYears.slice(0, 8).map((t, i) => (
              <span key={i} className="rounded-lg bg-brand-soft px-2 py-1 font-bold text-brand">
                year {Math.round(t)}: ×{Math.pow(2, i + 1)}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="J-curve of world population: 1 billion in 1804, 2 in 1927, 4 in 1974, 8 in 2022, then a projected peak of about 10.3 billion in the mid-2080s.">
            {[0, 2, 4, 6, 8, 10, 12].map((v) => (
              <g key={v}>
                <line x1={L} x2={W - R} y1={hy(v)} y2={hy(v)} className="stroke-line" strokeWidth={1} />
                <text x={L - 4} y={hy(v) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">{v}</text>
              </g>
            ))}
            {[1800, 1900, 2000, 2100].map((y) => (
              <text key={y} x={hx(y)} y={H - B + 14} fontSize={10} textAnchor="middle" className="fill-ink-2">{y}</text>
            ))}
            <polyline points={MILESTONES.map(([b, y]) => `${hx(y).toFixed(1)},${hy(b).toFixed(1)}`).join(" ")} fill="none" className="stroke-brand" strokeWidth={2.5} />
            <polyline points={`${hx(2022).toFixed(1)},${hy(8).toFixed(1)} ${hx(2050).toFixed(1)},${hy(9.7).toFixed(1)} ${hx(2085).toFixed(1)},${hy(10.3).toFixed(1)}`} fill="none" className="stroke-ink-2" strokeDasharray="4 3" strokeWidth={2} />
            {MILESTONES.map(([b, y]) => (
              <circle key={y} cx={hx(y)} cy={hy(b)} r={3} className="fill-brand" />
            ))}
            <text x={hx(2085)} y={hy(10.3) - 6} fontSize={9} textAnchor="middle" className="fill-ink-2">UN peak ≈10.3</text>
            <text x={(L + W - R) / 2} y={H - 3} fontSize={10} textAnchor="middle" className="fill-ink-2">Year</text>
            <text x={4} y={9} fontSize={9} className="fill-ink-2">World population (billions)</text>
          </svg>
          <div className="space-y-2" aria-label="Years each doubling took">
            {DOUBLINGS.map((d) => (
              <div key={d.from} className="flex items-center gap-2 text-sm">
                <span className="w-24 shrink-0 font-bold text-ink-2">{d.from} → {d.to} bn</span>
                <div className="h-5 flex-1 rounded bg-surface-2">
                  <div className="h-5 rounded bg-brand" style={{ width: `${((d.y2 - d.y1) / 130) * 100}%` }} />
                </div>
                <span className="w-28 shrink-0 text-right tabular-nums text-ink">{d.y2 - d.y1} yrs ({d.y1}–{d.y2})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "growth-rates-lab",
    title: "Birth & death rate lab",
    blurb: "Set the birth and death rates and watch natural increase, doubling time, the 100-year population line and the DTM stage respond.",
    Component: RatesLab,
  },
  {
    id: "doubling-time-explorer",
    title: "Doubling-time explorer",
    blurb: "Change the growth rate to see how fast a population doubles — then compare with how long the world's real doublings took.",
    Component: DoublingExplorer,
  },
];
