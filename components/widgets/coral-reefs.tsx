"use client";

import { useMemo, useState } from "react";
import { Frame, Slider, Choice, Stat } from "./kit";

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const mix = (a: string, b: string, t: number) => {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return "#" + pa.map((v, i) => Math.round(v + (pb[i] - v) * clamp(t, 0, 1)).toString(16).padStart(2, "0")).join("");
};

/* ------------------------------------------------------------------ */
/* 1. Reef Health Simulator                                            */
/* ------------------------------------------------------------------ */

type Level = "low" | "med" | "high";
const LV: Record<Level, number> = { low: 0, med: 1, high: 2 };
const LEVELS: { id: Level; label: string }[] = [
  { id: "low", label: "Low" },
  { id: "med", label: "Medium" },
  { id: "high", label: "High" },
];

const CORAL_X = [22, 50, 80, 108, 136, 164, 194, 222, 250, 278, 306, 334];
const CORAL_COL = ["#f97316", "#ec4899", "#a855f7", "#eab308", "#14b8a6", "#ef4444"];
// Fixed order in which corals are affected (so the picture is deterministic, not random).
const ORDER = [3, 8, 0, 11, 5, 9, 1, 6, 10, 2, 7, 4];
const FISH = [
  [40, 60], [120, 45], [200, 70], [290, 50], [70, 100], [250, 105], [160, 95], [320, 85], [30, 130], [215, 130],
];

type CState = "healthy" | "bleached" | "dead" | "young";

function Coral({ x, kind, state, color }: { x: number; kind: number; state: CState; color: string }) {
  const fill = state === "bleached" ? "#f8fafc" : state === "dead" ? "#a8a29e" : color;
  const stroke = state === "bleached" ? "#94a3b8" : state === "dead" ? "#57534e" : "#7c2d12";
  const s = state === "young" ? 0.55 : 1;
  const base = 182;
  return (
    <g transform={`translate(${x} ${base}) scale(${s}) translate(${-x} ${-base})`}>
      {kind === 0 ? (
        <g stroke={fill} strokeWidth={5} strokeLinecap="round">
          <line x1={x} y1={base} x2={x} y2={base - 34} />
          <line x1={x} y1={base - 14} x2={x - 11} y2={base - 30} />
          <line x1={x} y1={base - 18} x2={x + 11} y2={base - 36} />
        </g>
      ) : kind === 1 ? (
        <ellipse cx={x} cy={base - 12} rx={13} ry={12} fill={fill} stroke={stroke} strokeWidth={1} />
      ) : (
        <g>
          <rect x={x - 2} y={base - 20} width={4} height={20} fill={fill} />
          <ellipse cx={x} cy={base - 22} rx={15} ry={5} fill={fill} stroke={stroke} strokeWidth={1} />
        </g>
      )}
      {state === "dead" ? (
        <g fill="#65a30d">
          <circle cx={x - 6} cy={base - 20} r={3} />
          <circle cx={x + 5} cy={base - 26} r={3} />
          <circle cx={x + 2} cy={base - 12} r={3} />
        </g>
      ) : null}
    </g>
  );
}

function Cots({ x, y }: { x: number; y: number }) {
  const pts: string[] = [];
  for (let i = 0; i < 28; i++) {
    const r = i % 2 === 0 ? 9 : 4;
    const a = (i * Math.PI) / 14;
    pts.push(`${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`);
  }
  return <polygon points={pts.join(" ")} fill="#7c3aed" stroke="#3b0764" strokeWidth={0.8} />;
}

export function ReefHealthSimulator() {
  const [anom, setAnom] = useState(1.5);
  const [weeks, setWeeks] = useState(4);
  const [runoff, setRunoff] = useState<Level>("low");
  const [fishing, setFishing] = useState<Level>("low");
  const [cots, setCots] = useState<"no" | "yes">("no");
  const [noTake, setNoTake] = useState(33);
  const [when, setWhen] = useState<"now" | "later">("now");

  const m = useMemo(() => {
    // NOAA-style Degree Heating Weeks: only weeks >= 1 °C above the normal summer maximum count.
    const dhw = anom >= 1 ? anom * weeks : 0;
    const bleach = dhw >= 1 ? clamp((dhw - 1) * 14, 0, 100) : 0; // % of corals bleached
    const mortHeat = clamp((dhw - 5) * 9, 0, 95); // % of corals killed by heat
    const ro = LV[runoff], fi = LV[fishing];
    const runLoss = [0, 5, 12][ro];
    const cotsLoss = cots === "yes" ? 40 * (1 + 0.25 * ro) * (1 - noTake / 150) : 0;
    const cover = (100 - mortHeat) * (1 - runLoss / 100) * (1 - cotsLoss / 100);
    const fishBase = [100, 65, 35][fi];
    const fish = (fishBase + ((100 - fishBase) * noTake) / 100) * (0.4 + (0.6 * cover) / 100);
    const recCap = clamp(0.8 - 0.15 * ro - 0.12 * fi + (0.3 * noTake) / 60, 0.1, 0.95);
    const cover10 = cover + (100 - cover) * recCap;
    const liveBleach = mortHeat < 100 ? clamp((bleach - mortHeat) / (100 - mortHeat), 0, 1) : 0;
    let state: string, tone: "emerald" | "amber" | "rose" | "sky";
    if (when === "now") {
      if (mortHeat >= 30 || cover < 50) [state, tone] = ["Dead — algae taking over", "rose"];
      else if (bleach >= 40) [state, tone] = ["Bleached", "amber"];
      else if (bleach > 0 || cover < 85 || fi === 2) [state, tone] = ["Stressed", "amber"];
      else [state, tone] = ["Healthy", "emerald"];
    } else {
      if (cover10 >= 80) [state, tone] = ["Recovered", "emerald"];
      else if (cover10 >= 55) [state, tone] = ["Recovering", "sky"];
      else [state, tone] = ["Degraded (algae reef)", "rose"];
    }
    return { dhw, bleach, mortHeat, cover, cover10, fish, recCap, liveBleach, state, tone };
  }, [anom, weeks, runoff, fishing, cots, noTake, when]);

  const later = when === "later";
  const nDeadNow = Math.round((12 * (100 - m.cover)) / 100);
  const nDeadLater = Math.round((12 * (100 - m.cover10)) / 100);
  const nBleach = Math.round((12 - nDeadNow) * m.liveBleach);
  const states: CState[] = Array(12).fill("healthy");
  ORDER.forEach((idx, r) => {
    if (!later) states[idx] = r < nDeadNow ? "dead" : r < nDeadNow + nBleach ? "bleached" : "healthy";
    else states[idx] = r < nDeadLater ? "dead" : r < nDeadNow ? "young" : "healthy";
  });
  const fishShown = Math.round((clamp(later ? m.fish * (0.4 + (0.6 * m.cover10) / 100) / (0.4 + (0.6 * m.cover) / 100) : m.fish, 0, 100) / 100) * 10);
  const water = mix("#38bdf8", "#7c9a6b", LV[runoff] / 2);

  let science: string;
  if (!later && m.state.startsWith("Dead"))
    science = "Without their zooxanthellae for too long, the coral polyps starve and die. Seaweed and turf algae quickly cover the bare limestone skeletons, and fish that fed or sheltered in the coral leave.";
  else if (!later && m.bleach >= 40)
    science = "The water has stayed at least 1 °C above the normal summer maximum for weeks, so the zooxanthellae (tiny algae living inside the coral) start making harmful chemicals and the coral pushes them out. The coral turns white because you now see its limestone skeleton through clear tissue. It is not dead yet — it is starving. If the water cools within a few weeks it can take algae back in.";
  else if (later)
    science = "Ten years on (assuming no new heatwave): surviving corals have taken back their zooxanthellae, and new baby corals (larvae) have settled on bare rock. Fast-growing corals need roughly 10–15 years to recover, and they recover fastest where the water is clean and plenty of plant-eating fish keep the seaweed down.";
  else
    science = "Coral polyps are animals, but up to about 90% of their food comes from zooxanthellae — tiny algae living in their tissue. The algae photosynthesise in the sunlight and pass sugars to the coral (and give it its colour); the coral gives them shelter, carbon dioxide and nutrients. Both partners win: this is called mutualism.";

  const notice =
    m.dhw === 0 && anom > 0
      ? "warming of less than 1 °C above the normal summer maximum does not count as heat stress in this model — try 1 °C or more."
      : !later && m.dhw >= 8
        ? `${m.dhw.toFixed(0)} degree heating weeks is past the "severe bleaching, corals likely to die" level. Local actions like no-take zones cannot stop a marine heatwave — only cutting global warming can.`
        : runoff === "high"
          ? "farm run-off makes the water murky (less light for the algae) and its fertiliser feeds crown-of-thorns starfish larvae, so outbreaks are bigger."
          : fishing === "high" && noTake < 20
            ? "with heavy fishing there are few plant-eating fish, so after any damage seaweed wins the race for space and the reef recovers slowly."
            : "the reef is in good shape. Raise the temperature or the number of weeks and watch the colour drain away.";

  return (
    <Frame
      title="Reef Health Simulator"
      caption={
        <div className="space-y-1">
          <p><b>The coral–algae partnership:</b> {science}</p>
          <p><b>Notice:</b> {notice}</p>
          <p className="text-xs text-slate-500">Simplified model. Degree heating weeks (DHW) = °C above the normal summer maximum × weeks (only counting 1 °C or more), as used by NOAA Coral Reef Watch: about 4 DHW → significant bleaching, 8+ DHW → severe bleaching and widespread death likely.</p>
        </div>
      }
    >
      <p className="mb-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
        <b>Predict first:</b> which is worse for the reef — 2 °C too hot for 4 weeks, or 1 °C too hot for 8 weeks? Test both.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Sea temp above normal summer max" min={0} max={3} step={0.5} value={anom} onChange={setAnom} suffix=" °C" color="#dc2626" />
        <Slider label="How long it lasts" min={0} max={12} value={weeks} onChange={setWeeks} suffix=" weeks" color="#dc2626" />
        <Choice label="Farm run-off (mud & fertiliser)" options={LEVELS} value={runoff} onChange={setRunoff} />
        <Choice label="Fishing pressure" options={LEVELS} value={fishing} onChange={setFishing} />
        <Choice label="Crown-of-thorns starfish" options={[{ id: "no", label: "Normal" }, { id: "yes", label: "Outbreak" }]} value={cots} onChange={setCots} />
        <Slider label="No-take (green) zones" min={0} max={60} value={noTake} onChange={setNoTake} suffix="%" color="#059669" />
      </div>
      <div className="mt-3">
        <Choice options={[{ id: "now", label: "Right after the heatwave" }, { id: "later", label: "10 years later" }]} value={when} onChange={setWhen} />
      </div>

      <svg viewBox="0 0 360 215" className="mt-3 w-full rounded-xl" role="img" aria-label={`Reef cross-section: ${m.state}. ${fishShown} fish visible.`}>
        <rect width="360" height="215" fill={water} />
        <rect width="360" height="20" fill="#ffffff" opacity={0.25} />
        <text x="8" y="14" fontSize="11" fill="#0f172a">
          {later ? "10 years later" : `Heat stress: ${m.dhw.toFixed(0)} DHW`}
        </text>
        <path d="M0 182 Q90 172 180 180 T360 178 V215 H0 Z" fill="#fde68a" />
        {CORAL_X.map((x, i) => (
          <Coral key={i} x={x} kind={i % 3} state={states[i]} color={CORAL_COL[i % CORAL_COL.length]} />
        ))}
        {!later && cots === "yes" ? (
          <g>
            <Cots x={108} y={168} />
            <Cots x={194} y={160} />
            <Cots x={278} y={170} />
          </g>
        ) : null}
        {FISH.slice(0, fishShown).map(([fx, fy], i) => (
          <g key={i} transform={`translate(${fx} ${fy})`}>
            <ellipse cx={0} cy={0} rx={9} ry={5} fill={i % 2 ? "#facc15" : "#fb923c"} stroke="#78350f" strokeWidth={0.6} />
            <polygon points="-8,0 -15,-5 -15,5" fill={i % 2 ? "#facc15" : "#fb923c"} />
            <circle cx={4} cy={-1} r={1.2} fill="#0f172a" />
          </g>
        ))}
        <text x="352" y="14" fontSize="11" fill="#0f172a" textAnchor="end">{m.state}</text>
        <g fontSize="11" fill="#0f172a">
          <rect x="8" y="198" width="9" height="9" fill="#f97316" /><text x="20" y="206">healthy</text>
          <rect x="70" y="198" width="9" height="9" fill="#f8fafc" stroke="#94a3b8" /><text x="82" y="206">bleached</text>
          <rect x="140" y="198" width="9" height="9" fill="#a8a29e" /><text x="152" y="206">dead + algae</text>
          {cots === "yes" && !later ? <><Cots x={238} y={202} /><text x="250" y="206">crown-of-thorns</text></> : null}
        </g>
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Reef state" value={<span className="text-base">{m.state}</span>} tone={m.tone} />
        <Stat label="Corals bleached" value={later ? "0%" : `${Math.round(m.bleach)}%`} tone="amber" />
        <Stat label="Live coral left" value={`${Math.round(later ? m.cover10 : m.cover)}%`} tone="emerald" />
        <Stat label="Fish (relative)" value={`${fishShown * 10}%`} tone="sky" />
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Reef Types Time Machine (Darwin's subsidence theory)             */
/* ------------------------------------------------------------------ */

const SEA = 120; // sea level (y)
const M_PER_PX = 10; // vertical scale: 1 px = 10 m (vertical exaggeration)
const K = 1.1; // horizontal px per vertical px of the volcano's slope
const CX = 180;
const PEAK0 = 1000; // summit height above sea level at time 0 (m)
const SINK = 50; // subsidence, m per million years (≈ 0.05 mm/yr)
const SHORE0 = (PEAK0 / M_PER_PX) * K + 8; // half-width of island at sea level at time 0
const R_IN = SHORE0 - 4, R_OUT = SHORE0 + 16; // reef ring position (it grows straight up)

export function ReefTypesTimeMachine() {
  const [t, setT] = useState(0);
  const [keepUp, setKeepUp] = useState<"yes" | "no">("yes");

  const s = useMemo(() => {
    const sunk = SINK * t; // m
    const peak = PEAK0 - sunk; // m above sea level (negative = under water)
    const ys = SEA - peak / M_PER_PX;
    const shoreHalf = peak > 0 ? (peak / M_PER_PX) * K + 8 : 0;
    const lagoonPx = peak > 0 ? R_IN - shoreHalf : 2 * R_IN;
    const reefTopDepth = keepUp === "yes" ? 0 : sunk * 0.4; // slow coral only keeps up with 60% of the sinking
    const drowned = reefTopDepth > 60;
    let type: string;
    if (drowned) type = "Drowned reef";
    else if (peak <= 0) type = "Atoll";
    else if (lagoonPx < 12) type = "Fringing reef";
    else type = "Barrier reef";
    return { sunk, peak, ys, shoreHalf, lagoonPx, reefTopDepth, drowned, type };
  }, [t, keepUp]);

  const coneY = (dx: number) => s.ys + Math.max(0, Math.abs(dx) - 8) / K; // volcano surface at horizontal offset dx
  const reefTop = SEA + s.reefTopDepth / M_PER_PX;
  const volcano = `${CX - (300 - s.ys) * K - 8},300 ${CX - 8},${s.ys} ${CX + 8},${s.ys} ${CX + (300 - s.ys) * K + 8},300`;
  const reefPoly = (side: 1 | -1) => {
    const xi = CX + side * R_IN, xo = CX + side * R_OUT;
    return `${xi},${reefTop} ${xo},${reefTop + 3} ${xo + side * 6},${Math.max(reefTop + 6, coneY(R_OUT + 6))} ${xi},${Math.max(reefTop + 4, coneY(R_IN))}`;
  };
  const kmLagoon = Math.max(0, s.lagoonPx) * 0.05; // illustrative horizontal scale: 1 px ≈ 50 m

  const notice =
    s.type === "Fringing reef"
      ? "coral grows in the warm, sunny, shallow water right at the island's edge, so the reef is attached to the shore with little or no lagoon. Slide time forward."
      : s.type === "Barrier reef"
        ? `the island is sinking, but the coral grows upward fast enough to stay near the sunlit surface. The shoreline has moved inward, leaving a lagoon about ${kmLagoon.toFixed(1)} km wide between the island and the reef.`
        : s.type === "Atoll"
          ? "the volcano has disappeared below the sea, but the reef kept growing up. Only a ring of reef (with sandy islets) is left around a lagoon — an atoll."
          : "the coral could not grow upward as fast as the island sank. Once the reef was more than a few tens of metres deep there was too little light for the zooxanthellae, so the coral died. Many flat-topped seamounts (guyots) in the Pacific are drowned reefs like this.";

  return (
    <Frame
      title="Reef Types Time Machine"
      caption={
        <div className="space-y-1">
          <p><b>Notice:</b> {notice}</p>
          <p>Charles Darwin suggested this <b>subsidence theory</b> in 1842. It was confirmed in 1952 when drilling on Enewetak Atoll (Marshall Islands) went through about 1,300–1,400 m of coral limestone before hitting volcanic rock.</p>
          <p className="text-xs text-slate-500">Simplified cross-section: vertical scale exaggerated; sinking rate 0.05 mm per year (50 m per million years). The Great Barrier Reef is a different kind of barrier reef — it grew on the edge of Australia's continental shelf, not around a volcano.</p>
        </div>
      }
    >
      <p className="mb-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
        <b>Predict first:</b> if a volcanic island slowly sinks, does the coral reef around it sink and disappear too?
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Time" min={0} max={30} value={t} onChange={setT} suffix=" million years" color="#0369a1" />
        <Choice label="Coral growth" options={[{ id: "yes", label: "Keeps up with sinking" }, { id: "no", label: "Too slow" }]} value={keepUp} onChange={setKeepUp} />
      </div>

      <svg viewBox="0 0 360 240" className="mt-3 w-full rounded-xl" role="img" aria-label={`Cross-section after ${t} million years: ${s.type}`}>
        <rect width="360" height={SEA} fill="#e0f2fe" />
        <rect y={SEA} width="360" height={240 - SEA} fill="#38bdf8" />
        {/* lagoon-floor sediment (only shows in the water between the reef ring) */}
        <rect x={CX - R_IN} y={SEA + 4 + s.reefTopDepth / M_PER_PX} width={2 * R_IN} height={240} fill="#fef3c7" opacity={s.peak <= 0 || s.lagoonPx > 12 ? 1 : 0} />
        <polygon points={volcano} fill="#57534e" />
        {s.peak > 0 ? <polygon points={`${CX - s.shoreHalf},${SEA} ${CX - 8},${s.ys} ${CX + 8},${s.ys} ${CX + s.shoreHalf},${SEA}`} fill="#4d7c0f" /> : null}
        {([-1, 1] as const).map((side) => (
          <g key={side}>
            <polygon points={reefPoly(side)} fill="#e7e5e4" stroke="#a8a29e" />
            <rect x={side === 1 ? CX + R_IN : CX - R_OUT} y={reefTop - 2} width={R_OUT - R_IN} height={4} fill={s.drowned ? "#a8a29e" : "#f472b6"} />
            {s.type === "Atoll" ? <ellipse cx={CX + side * (R_IN + 10)} cy={SEA - 2} rx={8} ry={3.5} fill="#fde68a" /> : null}
          </g>
        ))}
        <line x1="0" y1={SEA} x2="360" y2={SEA} stroke="#0369a1" strokeWidth={1} strokeDasharray="4 3" />
        <text x="4" y={SEA - 4} fontSize="11" fill="#0369a1">sea level</text>
        <text x="352" y="16" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="end">{s.type}</text>
        <text x="8" y="16" fontSize="11" fill="#0f172a">{t} million years</text>
        {s.peak > 0 ? <text x={CX} y={Math.max(30, s.ys - 4)} fontSize="11" fill="#14532d" textAnchor="middle">volcanic island</text> : null}
        {!s.drowned ? <text x={CX + R_OUT} y={SEA - 8} fontSize="11" fill="#be185d" textAnchor="middle">reef</text> : <text x={CX + R_OUT} y={reefTop + 16} fontSize="11" fill="#0f172a" textAnchor="middle">dead reef</text>}
        {s.lagoonPx > 12 && !s.drowned ? (
          <text x={s.peak > 0 ? CX + (s.shoreHalf + R_IN) / 2 : CX} y={SEA + 16} fontSize="11" fill="#075985" textAnchor="middle">lagoon</text>
        ) : null}
        <text x="20" y="232" fontSize="11" fill="#f8fafc">open ocean</text>
        {s.sunk >= 400 && !s.drowned ? <text x={CX - R_OUT + 10} y={SEA + 34} fontSize="11" fill="#0f172a" textAnchor="middle">limestone</text> : null}
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Reef type" value={<span className="text-base">{s.type}</span>} tone="sky" />
        <Stat label="Island summit" value={s.peak > 0 ? `${s.peak} m` : "under water"} tone="emerald" />
        <Stat label="Lagoon width" value={s.drowned ? "—" : s.peak > 0 && s.lagoonPx < 12 ? "none" : `~${kmLagoon.toFixed(1)} km`} tone="indigo" />
        <Stat label="Coral limestone" value={`${(s.sunk - s.reefTopDepth).toFixed(0)} m thick`} tone="amber" />
      </div>
    </Frame>
  );
}
