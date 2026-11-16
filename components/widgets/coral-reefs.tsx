"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Bleaching thermometer — sea temperature + duration → degree heating weeks
// ---------------------------------------------------------------------------

function mix(a: [number, number, number], b: [number, number, number], t: number): string {
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}

function BleachingThermometer() {
  const [mmm, setMmm] = useState<"27" | "28" | "29">("28");
  const [temp, setTemp] = useState(29.5);
  const [weeks, setWeeks] = useState(4);
  const usual = Number(mmm);
  const excess = Math.round((temp - usual) * 10) / 10;
  const counts = excess >= 1;
  const dhw = counts ? Math.round(excess * weeks * 10) / 10 : 0;
  const stage =
    dhw >= 8 ? "severe" : dhw >= 4 ? "bleaching" : counts && weeks > 0 ? "stress" : "healthy";
  const label: Record<string, string> = {
    healthy: "Healthy",
    stress: "Heat stress building",
    bleaching: "Significant bleaching likely",
    severe: "Severe bleaching — deaths likely",
  };
  const tone = stage === "healthy" ? "good" : stage === "stress" ? "brand" : "bad";
  const pale = Math.min(dhw / 8, 1);
  const coral = mix([194, 120, 60], [245, 245, 240], pale);

  // DHW build-up chart: weeks 0..12 on x, DHW 0..24 on y
  const W = 300, H = 170, L = 34, R = 10, T = 12, B = 28;
  const maxW = 12, maxD = 24;
  const px = (w: number) => L + (w / maxW) * (W - L - R);
  const py = (d: number) => H - B - (Math.min(d, maxD) / maxD) * (H - T - B);
  const pts = Array.from({ length: weeks + 1 }, (_, w) => `${px(w)},${py(counts ? excess * w : 0)}`).join(" ");

  return (
    <WidgetFrame
      title="Bleaching thermometer"
      tryThis={[
        "Set the sea just **0.5 °C** above the usual maximum and leave it for 12 weeks. Why does nothing bleach?",
        "Find two different heatwaves that both give **exactly 8 °C-weeks** — one short and hot, one long and mild.",
        "Is 2 °C above normal for 2 weeks worse or better than 1 °C above normal for 6 weeks? Predict, then test.",
      ]}
      caption={
        <>
          {counts ? (
            <>
              The sea is <b>{excess.toFixed(1)} °C</b> above this reef&apos;s usual summer maximum. Each week at least 1 °C too hot adds heat stress:{" "}
              {excess.toFixed(1)} °C × {weeks} week{weeks === 1 ? "" : "s"} = <b>{dhw.toFixed(1)} °C-weeks</b>.{" "}
            </>
          ) : (
            <>
              The sea is {excess > 0 ? `only ${excess.toFixed(1)} °C above` : excess === 0 ? "at" : `${Math.abs(excess).toFixed(1)} °C below`} the usual summer maximum, so no heat stress builds up — corals are adapted to this.{" "}
            </>
          )}
          {stage === "stress" && "Polyps are stressed, but this is below the 4 °C-week level where widespread bleaching usually starts."}
          {stage === "bleaching" && "Past about 4 °C-weeks, many polyps expel their zooxanthellae and turn white. If the water cools soon, the algae can return and the coral can recover."}
          {stage === "severe" && "Past about 8 °C-weeks, bleaching is severe and many corals starve and die — this is what happened on parts of the Great Barrier Reef in 2016."}
          {stage === "healthy" && " Keep the algae, keep the colour."}{" "}
          <i>Simplified model: real degree heating weeks use daily satellite temperatures over 12 weeks.</i>
        </>
      }
    >
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="text-sm font-semibold text-ink-2">This reef&apos;s usual summer maximum</div>
          <Segmented
            label="Usual summer maximum sea temperature"
            value={mmm}
            onChange={setMmm}
            options={[
              { value: "27", label: "27 °C" },
              { value: "28", label: "28 °C" },
              { value: "29", label: "29 °C" },
            ]}
          />
        </div>
        <Slider label="Heatwave sea temperature" value={temp} min={25} max={33} step={0.1} onChange={setTemp} format={(v) => `${v.toFixed(1)} °C`} />
        <Slider label="How long it lasts" value={weeks} min={0} max={12} onChange={setWeeks} format={(v) => `${v} week${v === 1 ? "" : "s"}`} />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Above usual max" value={`${excess > 0 ? "+" : excess < 0 ? "−" : ""}${Math.abs(excess).toFixed(1)} °C`} tone="ink" />
          <Readout label="Heat stress (DHW)" value={`${dhw.toFixed(1)} °C-wk`} tone={tone} />
          <div className="col-span-2 sm:col-span-1">
            <Readout label="Coral" value={label[stage]} tone={tone} />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <svg viewBox="0 0 200 150" className="h-auto w-full rounded-xl border border-line" role="img" aria-label={`Coral colony looking ${label[stage].toLowerCase()}`}>
            <rect x="0" y="0" width="200" height="150" fill="#bae6fd" />
            <rect x="0" y="128" width="200" height="22" fill="#fde68a" />
            <g fill={coral}>
              <path d="M100 128 L100 80 M100 95 L78 62 M100 88 L124 55 M78 62 L70 40 M78 62 L88 38 M124 55 L118 32 M124 55 L140 36 M100 80 L100 50" stroke={coral} strokeWidth={11} strokeLinecap="round" fill="none" />
              <ellipse cx="44" cy="120" rx="30" ry="18" />
              <ellipse cx="160" cy="118" rx="26" ry="20" />
            </g>
            {stage === "severe" ? (
              <g fill="#65a30d" opacity={0.75}>
                <circle cx="36" cy="108" r="5" />
                <circle cx="52" cy="112" r="4" />
                <circle cx="152" cy="104" r="5" />
                <circle cx="168" cy="110" r="4" />
              </g>
            ) : null}
            <text x="8" y="16" fontSize="11" fill="#1f2937" fontFamily="sans-serif">
              {stage === "severe" ? "White skeletons, seaweed moving in" : stage === "bleaching" ? "Algae expelled: coral turning white" : "Algae inside polyps give colour"}
            </text>
          </svg>

          <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Graph of heat stress building to ${dhw.toFixed(1)} degree heating weeks after ${weeks} weeks`}>
            <rect x={L} y={py(maxD)} width={W - L - R} height={py(8) - py(maxD)} className="fill-bad-soft" />
            <rect x={L} y={py(8)} width={W - L - R} height={py(4) - py(8)} className="fill-accent-soft" />
            {[0, 4, 8, 12, 16, 20, 24].map((d) => (
              <g key={d}>
                <line x1={L} x2={W - R} y1={py(d)} y2={py(d)} className="stroke-line" strokeWidth={1} />
                <text x={L - 4} y={py(d) + 3} fontSize={9} textAnchor="end" className="fill-ink-2">{d}</text>
              </g>
            ))}
            {[0, 2, 4, 6, 8, 10, 12].map((w) => (
              <text key={w} x={px(w)} y={H - B + 12} fontSize={9} textAnchor="middle" className="fill-ink-2">{w}</text>
            ))}
            <text x={(L + W - R) / 2} y={H - 3} fontSize={10} textAnchor="middle" className="fill-ink-2">weeks of heatwave</text>
            <text x={10} y={(T + H - B) / 2} fontSize={10} textAnchor="middle" className="fill-ink-2" transform={`rotate(-90 10 ${(T + H - B) / 2})`}>°C-weeks</text>
            <text x={W - R - 4} y={py(4) - 3} fontSize={9} textAnchor="end" className="fill-ink-2">4: bleaching likely</text>
            <text x={W - R - 4} y={py(8) - 3} fontSize={9} textAnchor="end" className="fill-ink-2">8: deaths likely</text>
            <polyline points={pts} fill="none" className="stroke-brand" strokeWidth={2.5} />
            <circle cx={px(weeks)} cy={py(dhw)} r={4} className="fill-brand" />
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Reef-conditions checker — temperature, depth, clarity, salinity
// ---------------------------------------------------------------------------

type Check = { name: string; ok: boolean; warn?: boolean; why: string };

const PRESETS = {
  lagoon: { temp: 27, depth: 8, vis: 25, sal: 35, label: "Clear tropical lagoon" },
  murky: { temp: 29, depth: 12, vis: 3, sal: 32, label: "Murky tropical port" },
  river: { temp: 28, depth: 6, vis: 2, sal: 15, label: "Tropical river mouth" },
  slope: { temp: 26, depth: 90, vis: 30, sal: 35, label: "Deep ocean slope" },
  cold: { temp: 13, depth: 10, vis: 15, sal: 35, label: "Coast with a cold current" },
} as const;
type PresetKey = keyof typeof PRESETS;

function ReefConditions() {
  const [temp, setTemp] = useState(27);
  const [depth, setDepth] = useState(8);
  const [vis, setVis] = useState(25);
  const [sal, setSal] = useState(35);

  // Light reaching the sea bed: simplified Beer–Lambert decay, with the
  // attenuation estimated from visibility (k ≈ 1.7 ÷ visibility in m).
  const k = 1.7 / Math.max(vis, 0.5);
  const lightPct = 100 * Math.exp(-k * depth);
  const lightOk = lightPct >= 5;

  const checks: Check[] = [
    temp < 18
      ? { name: "Temperature", ok: false, why: `${temp} °C is below about 18 °C — too cold for reef-building corals.` }
      : temp > 31
        ? { name: "Temperature", ok: false, why: `${temp} °C all year is too hot — corals would be permanently bleached.` }
        : temp > 29
          ? { name: "Temperature", ok: true, warn: true, why: `${temp} °C is warm enough, but close to the limit: a small heatwave could cause bleaching.` }
          : { name: "Temperature", ok: true, why: `${temp} °C is in the 18–29 °C comfort zone.` },
    sal < 32
      ? { name: "Salinity", ok: false, why: `${sal} parts per thousand is too fresh — like water near a river mouth.` }
      : sal > 42
        ? { name: "Salinity", ok: false, why: `${sal} parts per thousand is too salty.` }
        : { name: "Salinity", ok: true, why: `${sal} parts per thousand is normal sea water (about 32–42).` },
    vis < 2
      ? { name: "Sediment", ok: false, why: `Seeing less than 2 m down means so much mud that it smothers the polyps.` }
      : { name: "Sediment", ok: true, why: `Visibility of ${vis} m — not enough mud to smother polyps.` },
    lightOk
      ? { name: "Sunlight on the sea bed", ok: true, why: `About ${lightPct >= 10 ? Math.round(lightPct) : lightPct.toFixed(1)}% of surface light reaches ${depth} m — enough for the algae to photosynthesise.` }
      : { name: "Sunlight on the sea bed", ok: false, why: `Only about ${lightPct < 0.1 ? "0" : lightPct.toFixed(1)}% of surface light reaches ${depth} m — too dark for the algae.` },
  ];
  const canGrow = checks.every((c) => c.ok);
  const fails = checks.filter((c) => !c.ok).map((c) => c.name.toLowerCase());

  // Deepest depth with ≥ 5% light at this clarity
  const maxDepth = Math.log(100 / 5) / k;

  const applyPreset = (p: PresetKey) => {
    const s = PRESETS[p];
    setTemp(s.temp);
    setDepth(s.depth);
    setVis(s.vis);
    setSal(s.sal);
  };

  // Cross-section: 0–150 m depth mapped to y 24..206
  const yOf = (d: number) => 24 + (Math.min(d, 150) / 150) * 182;
  const bedY = yOf(depth);
  const murk = Math.min(0.85, Math.max(0, (12 - vis) / 12) * 0.85);
  const rayEnd = yOf(Math.min(150, maxDepth));

  return (
    <WidgetFrame
      title="Can coral grow here?"
      tryThis={[
        "Start with the clear lagoon. How deep can you push the sea bed before the coral dies? Now make the water murkier — what happens to that depth?",
        "Singapore's water is often murky (visibility 2–4 m). Use the sliders to explain why most of its corals grow in shallow water, less than about 10 m deep.",
        "Pick the river-mouth preset. Which TWO problems does a river cause at once?",
      ]}
      caption={
        canGrow ? (
          <>
            ✅ <b>Reef-building corals can grow here.</b> The water is warm, salty, clear and shallow enough for sunlight to reach the zooxanthellae. With this clarity,
            enough light reaches down to about <b>{Math.round(maxDepth)} m</b>. <i>Simplified model: real limits vary between coral species and places.</i>
          </>
        ) : (
          <>
            ❌ <b>No reef here</b> — the problem{fails.length > 1 ? "s are" : " is"} <b>{fails.join(" and ")}</b>. Corals need all four conditions at once: if one fails, the reef
            can&apos;t form. Light depends on depth <i>and</i> clarity: at this visibility, enough light only reaches about {Math.round(maxDepth)} m.{" "}
            <i>Simplified model.</i>
          </>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {(Object.keys(PRESETS) as PresetKey[]).map((p) => (
            <button key={p} type="button" onClick={() => applyPreset(p)} className="min-h-[40px] rounded-lg border border-line bg-surface-2 px-3 text-sm font-bold text-ink hover:bg-brand-soft">
              {PRESETS[p].label}
            </button>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Slider label="Average sea temperature" value={temp} min={8} max={34} onChange={setTemp} format={(v) => `${v} °C`} />
          <Slider label="Depth of sea bed" value={depth} min={1} max={150} onChange={setDepth} format={(v) => `${v} m`} />
          <Slider label="Water clarity (visibility)" value={vis} min={0.5} max={40} step={0.5} onChange={setVis} format={(v) => `${v} m`} />
          <Slider label="Salinity (parts per thousand)" value={sal} min={0} max={45} onChange={setSal} format={(v) => `${v}`} />
        </div>

        <div className="grid gap-3 sm:grid-cols-[1fr_1fr]">
          <svg viewBox="0 0 240 220" className="h-auto w-full rounded-xl border border-line" role="img" aria-label={`Cross-section: sea bed at ${depth} metres, ${canGrow ? "coral growing" : "no coral"}`}>
            <rect x="0" y="0" width="240" height="24" fill="#f0f9ff" />
            <circle cx="210" cy="12" r="8" fill="#fbbf24" />
            <rect x="0" y="24" width="240" height="196" fill="#bae6fd" />
            <rect x="0" y="24" width="240" height="196" fill="#92400e" opacity={murk * 0.5} />
            {[40, 90, 140, 190].map((x) => (
              <line key={x} x1={x} y1={24} x2={x - 20} y2={rayEnd} stroke="#fde047" strokeWidth={3} opacity={0.6} />
            ))}
            {[0, 50, 100, 150].map((d) => (
              <g key={d}>
                <line x1={0} x2={8} y1={yOf(d)} y2={yOf(d)} stroke="#1f2937" />
                <text x={10} y={yOf(d) + 4} fontSize="10" fill="#1f2937" fontFamily="sans-serif">{d} m</text>
              </g>
            ))}
            <line x1="50" x2="240" y1={yOf(Math.min(150, maxDepth))} y2={yOf(Math.min(150, maxDepth))} stroke="#1f2937" strokeDasharray="4 3" />
            <text x="236" y={Math.min(214, yOf(Math.min(150, maxDepth)) - 3)} fontSize="9" textAnchor="end" fill="#1f2937" fontFamily="sans-serif">
              light limit ≈ {Math.round(maxDepth)} m
            </text>
            <rect x="60" y={bedY} width="180" height={Math.max(0, 220 - bedY)} fill="#fde68a" stroke="#334155" />
            {canGrow ? (
              <g fill="#f97316" stroke="#7c2d12" strokeWidth={1}>
                <ellipse cx="110" cy={bedY - 6} rx="16" ry="9" />
                <ellipse cx="160" cy={bedY - 8} rx="12" ry="11" />
                <path d={`M200 ${bedY} L200 ${bedY - 22} M200 ${bedY - 12} L190 ${bedY - 26} M200 ${bedY - 14} L212 ${bedY - 28}`} stroke="#f97316" strokeWidth={5} strokeLinecap="round" fill="none" />
              </g>
            ) : (
              <text x="150" y={Math.min(212, bedY + 14)} fontSize="11" textAnchor="middle" fill="#334155" fontFamily="sans-serif">bare sea bed</text>
            )}
          </svg>

          <ul className="space-y-2">
            {checks.map((c) => (
              <li key={c.name} className={`rounded-xl px-3 py-2 text-sm ${!c.ok ? "bg-bad-soft" : c.warn ? "bg-accent-soft" : "bg-good-soft"}`}>
                <div className={`font-extrabold ${!c.ok ? "text-bad" : c.warn ? "text-ink" : "text-good"}`}>
                  {!c.ok ? "✗" : c.warn ? "!" : "✓"} {c.name}
                </div>
                <div className="text-ink">{c.why}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "coral-reefs-bleaching-thermometer",
    title: "Bleaching thermometer",
    blurb: "Turn up the heat and stretch out the heatwave — watch heat stress build in degree heating weeks and see when corals bleach.",
    Component: BleachingThermometer,
  },
  {
    id: "coral-reefs-conditions-checker",
    title: "Can coral grow here?",
    blurb: "Change temperature, depth, clarity and salinity to find out where a reef can and can't form.",
    Component: ReefConditions,
  },
];
