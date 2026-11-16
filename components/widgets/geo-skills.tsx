"use client";
// Interactive explorables for "The Geographer's Toolkit" (geo-skills).
import { useState, type MouseEvent } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Grid-reference finder
// ---------------------------------------------------------------------------

const E0 = 44;
const N0 = 18;
const SQ = 5; // squares each way
const CELL = 56;
const LM = 36; // left margin
const TM = 10; // top margin
const VBW = LM + SQ * CELL + 12;
const VBH = TM + SQ * CELL + 34;

const p2 = (v: number) => String(v).padStart(2, "0");
const xOf = (e: number) => LM + (e - E0) * CELL;
const yOf = (n: number) => TM + SQ * CELL - (n - N0) * CELL;

interface MapFeature {
  name: string;
  e: number;
  n: number;
  kind: "church" | "camp" | "trig" | "school" | "pub" | "lighthouse" | "farm";
}

// Positions in grid units (tenths), all well inside a square so refs are unambiguous.
const MAP_FEATURES: MapFeature[] = [
  { name: "church", e: 45.4, n: 21.3, kind: "church" },
  { name: "campsite", e: 47.6, n: 19.7, kind: "camp" },
  { name: "trig point", e: 46.3, n: 22.6, kind: "trig" },
  { name: "school", e: 48.2, n: 21.5, kind: "school" },
  { name: "café", e: 44.7, n: 19.4, kind: "pub" },
  { name: "lighthouse", e: 44.3, n: 18.4, kind: "lighthouse" },
  { name: "farm", e: 47.4, n: 22.7, kind: "farm" },
];

function Symbol({ f }: { f: MapFeature }) {
  const x = xOf(f.e);
  const y = yOf(f.n);
  switch (f.kind) {
    case "church":
      return (
        <g>
          <circle cx={x} cy={y} r={5} fill="#1f2937" />
          <line x1={x} y1={y - 12} x2={x} y2={y - 4} stroke="#1f2937" strokeWidth={2} />
          <line x1={x - 4} y1={y - 9} x2={x + 4} y2={y - 9} stroke="#1f2937" strokeWidth={2} />
        </g>
      );
    case "camp":
      return <polygon points={`${x},${y - 7} ${x - 7},${y + 5} ${x + 7},${y + 5}`} fill="#c7d2fe" stroke="#1f2937" strokeWidth={1.5} />;
    case "trig":
      return (
        <g>
          <polygon points={`${x},${y - 7} ${x - 7},${y + 5} ${x + 7},${y + 5}`} fill="#2563eb" stroke="#1f2937" />
          <circle cx={x} cy={y} r={1.6} fill="#ffffff" />
        </g>
      );
    case "school":
      return (
        <g>
          <rect x={x - 7} y={y - 6} width={14} height={12} fill="#fde68a" stroke="#1f2937" strokeWidth={1.5} />
          <text x={x} y={y + 4} fontSize={10} textAnchor="middle" fill="#1f2937">S</text>
        </g>
      );
    case "pub":
      return (
        <g>
          <rect x={x - 7} y={y - 6} width={14} height={12} rx={3} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
          <text x={x} y={y + 4} fontSize={10} textAnchor="middle" fill="#1f2937">C</text>
        </g>
      );
    case "lighthouse":
      return (
        <g>
          <polygon points={`${x - 4},${y + 7} ${x + 4},${y + 7} ${x + 2},${y - 7} ${x - 2},${y - 7}`} fill="#fecaca" stroke="#1f2937" strokeWidth={1.5} />
          <circle cx={x} cy={y - 9} r={2.5} fill="#f59e0b" />
        </g>
      );
    case "farm":
      return (
        <g>
          <rect x={x - 6} y={y - 3} width={12} height={9} fill="#d6d3d1" stroke="#1f2937" strokeWidth={1.5} />
          <polygon points={`${x - 8},${y - 3} ${x},${y - 9} ${x + 8},${y - 3}`} fill="#d6d3d1" stroke="#1f2937" strokeWidth={1.5} />
        </g>
      );
  }
}

type GridMode = "four" | "six" | "find";

function GridRefFinder() {
  const [mode, setMode] = useState<GridMode>("four");
  // Marker position in tenths of a grid unit (integers, to avoid float noise).
  const [et, setEt] = useState(462);
  const [nt, setNt] = useState(206);
  const [target, setTarget] = useState(0);
  const [found, setFound] = useState<null | boolean>(null);

  const eSq = Math.floor(et / 10);
  const nSq = Math.floor(nt / 10);
  const four = `${p2(eSq)}${p2(nSq)}`;
  const six = `${p2(eSq)}${et % 10}${p2(nSq)}${nt % 10}`;

  const tf = MAP_FEATURES[target];
  const targetSquare = `${p2(Math.floor(tf.e))}${p2(Math.floor(tf.n))}`;

  const place = (e: number, n: number) => {
    setEt(e);
    setNt(n);
    if (mode === "find") setFound(`${p2(Math.floor(e / 10))}${p2(Math.floor(n / 10))}` === targetSquare);
  };

  const onTap = (ev: MouseEvent<SVGSVGElement>) => {
    const r = ev.currentTarget.getBoundingClientRect();
    const x = ((ev.clientX - r.left) / r.width) * VBW;
    const y = ((ev.clientY - r.top) / r.height) * VBH;
    const e = Math.round((E0 + (x - LM) / CELL) * 10);
    const n = Math.round((N0 + (TM + SQ * CELL - y) / CELL) * 10);
    const clampE = Math.min((E0 + SQ) * 10 - 1, Math.max(E0 * 10, e));
    const clampN = Math.min((N0 + SQ) * 10 - 1, Math.max(N0 * 10, n));
    place(clampE, clampN);
  };

  const newChallenge = () => {
    let t = target;
    while (t === target) t = Math.floor(Math.random() * MAP_FEATURES.length);
    setTarget(t);
    setFound(null);
  };

  const mx = xOf(et / 10);
  const my = yOf(nt / 10);
  const showSquare = mode !== "six";

  const aria =
    mode === "find"
      ? `Grid map, eastings ${E0} to ${E0 + SQ}, northings ${N0} to ${N0 + SQ}. Challenge: find the square containing the ${tf.name}. Marker in square ${four}.`
      : `Grid map, eastings ${E0} to ${E0 + SQ}, northings ${N0} to ${N0 + SQ}. Marker at ${mode === "six" ? `6-figure ${six}` : `square ${four}`}.`;

  return (
    <WidgetFrame
      title="Grid-reference finder"
      tryThis={[
        "Tap the **church**. Which two lines did you use for its 4-figure reference — the ones to the left and below, or right and above?",
        "Switch to 6-figure. Give the **trig point**'s reference in your head first, then tap it to check.",
        "In *Find it* mode, read the challenge and tap the right square. Can you get 5 in a row?",
        "Put the marker exactly on a grid line crossing. Why does a 6-figure reference end in 0 and 0 there?",
      ]}
      caption={
        mode === "find" ? (
          <p>
            Find the <b>{tf.name}</b>, then tap anywhere in its grid square. Remember: <b>along the corridor</b> (eastings, numbers along the bottom) <b>then up the stairs</b> (northings, numbers up the side).
            {found === true ? <> ✅ Yes — the {tf.name} is in square <b>{targetSquare}</b>.</> : null}
            {found === false ? <> ❌ That's square <b>{four}</b>. Is the {tf.name} to the right of easting {p2(eSq)} and above northing {p2(nSq)}?</> : null}
          </p>
        ) : mode === "four" ? (
          <p>
            The marker is in the square whose <b>bottom-left corner</b> is where easting <b>{p2(eSq)}</b> meets northing <b>{p2(nSq)}</b>, so its 4-figure reference is <b>{four}</b>. A 4-figure reference names a whole 1 km square on an OS map.
          </p>
        ) : (
          <p>
            Split the square into tenths. The marker is <b>{et % 10}</b> tenths east of line {p2(eSq)} and <b>{nt % 10}</b> tenths north of line {p2(nSq)}: {p2(eSq)}<b>{et % 10}</b> {p2(nSq)}<b>{nt % 10}</b> → <b>{six}</b>. On an OS map that pinpoints a spot to within about 100 m.
          </p>
        )
      }
    >
      <div className="space-y-3">
        <Segmented<GridMode>
          label="Grid reference mode"
          value={mode}
          onChange={(m) => {
            setMode(m);
            setFound(null);
          }}
          options={[
            { value: "four", label: "4-figure" },
            { value: "six", label: "6-figure" },
            { value: "find", label: "Find it" },
          ]}
        />
        {mode === "find" ? (
          <div className="flex flex-wrap items-center gap-3 rounded-xl bg-brand-soft p-3 text-sm font-bold text-ink">
            <span>
              Challenge: which square is the <span className="text-brand">{tf.name}</span> in? Tap it.
            </span>
            <button type="button" className="kbd min-h-[40px]" onClick={newChallenge}>
              New challenge
            </button>
          </div>
        ) : null}
        <svg viewBox={`0 0 ${VBW} ${VBH}`} className="h-auto w-full max-w-[460px] cursor-crosshair touch-manipulation select-none" role="img" aria-label={aria} onClick={onTap}>
          <rect x={0} y={0} width={VBW} height={VBH} className="fill-surface" />
          <rect x={LM} y={TM} width={SQ * CELL} height={SQ * CELL} fill="#ecfdf5" />
          {/* Sea in the south-west corner */}
          <path d={`M ${LM} ${TM + SQ * CELL - 70} C ${LM + 40} ${TM + SQ * CELL - 60}, ${LM + 70} ${TM + SQ * CELL - 30}, ${LM + 90} ${TM + SQ * CELL} L ${LM} ${TM + SQ * CELL} Z`} fill="#bae6fd" />
          {/* River */}
          <path d={`M ${LM + SQ * CELL} ${TM + 40} C ${LM + 200} ${TM + 70}, ${LM + 150} ${TM + 150}, ${LM + 60} ${TM + SQ * CELL - 55}`} fill="none" stroke="#7dd3fc" strokeWidth={5} />
          {/* Woodland */}
          {[0, 1, 2, 3, 4].map((i) => (
            <circle key={i} cx={LM + 232 + (i % 3) * 12} cy={TM + 246 + Math.floor(i / 3) * 12} r={6} fill="#86efac" stroke="#15803d" strokeWidth={1} />
          ))}
          {showSquare ? <rect x={xOf(eSq)} y={yOf(nSq + 1)} width={CELL} height={CELL} className="fill-brand" opacity={0.18} /> : null}
          {Array.from({ length: SQ + 1 }, (_, i) => (
            <g key={i}>
              <line x1={LM + i * CELL} y1={TM} x2={LM + i * CELL} y2={TM + SQ * CELL} stroke="#334155" strokeWidth={1} />
              <line x1={LM} y1={TM + i * CELL} x2={LM + SQ * CELL} y2={TM + i * CELL} stroke="#334155" strokeWidth={1} />
              <text x={LM + i * CELL} y={TM + SQ * CELL + 15} fontSize={12} textAnchor="middle" className="fill-ink">{p2(E0 + i)}</text>
              <text x={LM - 6} y={TM + SQ * CELL - i * CELL + 4} fontSize={12} textAnchor="end" className="fill-ink">{p2(N0 + i)}</text>
            </g>
          ))}
          {mode === "six"
            ? Array.from({ length: SQ * 10 }, (_, i) =>
                i % 10 === 0 ? null : (
                  <g key={`t${i}`}>
                    <line x1={LM + (i * CELL) / 10} y1={TM + SQ * CELL} x2={LM + (i * CELL) / 10} y2={TM + SQ * CELL - (i % 5 === 0 ? 6 : 3)} stroke="#334155" />
                    <line x1={LM} y1={TM + SQ * CELL - (i * CELL) / 10} x2={LM + (i % 5 === 0 ? 6 : 3)} y2={TM + SQ * CELL - (i * CELL) / 10} stroke="#334155" />
                  </g>
                ),
              )
            : null}
          {MAP_FEATURES.map((f) => (
            <g key={f.name}>
              <Symbol f={f} />
              <text x={xOf(f.e)} y={yOf(f.n) + 17} fontSize={10} textAnchor="middle" fill="#1f2937">{f.name}</text>
            </g>
          ))}
          {mode === "six" ? (
            <g>
              <line x1={mx} y1={my} x2={mx} y2={TM + SQ * CELL} className="stroke-brand" strokeDasharray="4 3" strokeWidth={1.5} />
              <line x1={LM} y1={my} x2={mx} y2={my} className="stroke-brand" strokeDasharray="4 3" strokeWidth={1.5} />
            </g>
          ) : null}
          <circle cx={mx} cy={my} r={6} className="fill-brand stroke-ink" strokeWidth={2} fillOpacity={0.85} />
          <text x={LM + (SQ * CELL) / 2} y={VBH - 3} fontSize={11} textAnchor="middle" className="fill-ink-2">Eastings → (then northings ↑)</text>
        </svg>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Stepper label="Move east / west" value={et} min={E0 * 10} max={(E0 + SQ) * 10 - 1} onChange={(v) => place(v, nt)} format={(v) => (v / 10).toFixed(1)} />
          <Stepper label="Move north / south" value={nt} min={N0 * 10} max={(N0 + SQ) * 10 - 1} onChange={(v) => place(et, v)} format={(v) => (v / 10).toFixed(1)} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <Readout label="Easting" value={mode === "six" ? `${p2(eSq)}${et % 10}` : p2(eSq)} tone="ink" />
          <Readout label="Northing" value={mode === "six" ? `${p2(nSq)}${nt % 10}` : p2(nSq)} tone="ink" />
          <Readout label={mode === "six" ? "6-figure ref" : "4-figure ref"} value={mode === "six" ? six : four} tone={mode === "find" ? (found ? "good" : found === false ? "bad" : "brand") : "brand"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Map-scale measurer
// ---------------------------------------------------------------------------

type ScaleKey = "10000" | "25000" | "50000" | "100000" | "250000";
const fmt = (v: number, dp = 2) => Number(v.toFixed(dp)).toLocaleString("en-GB", { maximumFractionDigits: dp });

function ScaleMeasurer() {
  const [scaleKey, setScaleKey] = useState<ScaleKey>("25000");
  const [cm, setCm] = useState(6);
  const scale = Number(scaleKey);
  const groundCm = cm * scale;
  const metres = groundCm / 100;
  const km = metres / 1000;
  const cmPerKm = 100000 / scale;
  const walkMin = Math.round((km / 5) * 60);
  const scaleLabel = `1:${scale.toLocaleString("en-GB").replace(/,/g, " ")}`;

  // Ruler: 1 map cm = 14 px; up to 20 cm.
  const PX = 14;
  const RW = 20 * PX + 40;
  // km ticks along the ruler for this scale
  const kmTicks: number[] = [];
  const kmStep = cmPerKm >= 2 ? 1 : cmPerKm >= 1 ? 2 : cmPerKm >= 0.4 ? 5 : 10;
  for (let k = 0; k * cmPerKm <= 20 + 1e-9; k += kmStep) kmTicks.push(k);

  const detail =
    scale <= 10000 ? "very detailed — individual buildings and paths" : scale <= 25000 ? "detailed — field boundaries and footpaths (great for walking)" : scale <= 50000 ? "a good overview — villages, roads and main paths" : "a big area with little detail — towns and main roads only";

  return (
    <WidgetFrame
      title="Map-scale measurer"
      tryThis={[
        "At 1:25 000, how many cm on the map make exactly 1 km? Slide until the real distance reads 1 km.",
        "Keep the map distance at 6 cm and switch from 1:25 000 to 1:50 000. What happens to the real distance — and why?",
        "Which scale shows the most detail? Which would you take to plan a 300 km road trip?",
        "A walk measures 9 cm on a 1:50 000 map. Predict the real distance and walking time before you check.",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <b>{scaleLabel}</b> means 1 cm on the map is {scale.toLocaleString("en-GB")} cm on the ground. So {fmt(cm, 1)} cm × {scale.toLocaleString("en-GB")} = {fmt(groundCm, 0)} cm = {fmt(metres, 0)} m = <b>{fmt(km)} km</b>.
          </p>
          <p>
            Bigger second number = <b>smaller scale</b>: each cm covers more ground, so you see a larger area in less detail. This scale is {detail}. Walking at about 5 km per hour on flat ground, {fmt(km)} km takes roughly <b>{walkMin} minutes</b> (straight-line distance — real paths wind, so allow longer).
          </p>
        </div>
      }
    >
      <div className="space-y-3">
        <Segmented<ScaleKey>
          label="Map scale"
          value={scaleKey}
          onChange={setScaleKey}
          options={[
            { value: "10000", label: "1:10 000" },
            { value: "25000", label: "1:25 000" },
            { value: "50000", label: "1:50 000" },
            { value: "100000", label: "1:100 000" },
            { value: "250000", label: "1:250 000" },
          ]}
        />
        <Slider label="Distance measured on the map" value={cm} min={0.5} max={20} step={0.5} onChange={setCm} format={(v) => `${v.toFixed(1)} cm`} />
        <svg viewBox={`0 0 ${RW} 96`} className="h-auto w-full" role="img" aria-label={`Ruler showing ${cm} cm on a ${scaleLabel} map, equal to ${fmt(km)} km on the ground`}>
          <rect x={0} y={0} width={RW} height={96} className="fill-surface" />
          {/* map ruler (cm) */}
          <rect x={20} y={14} width={20 * PX} height={22} fill="#fde68a" stroke="#334155" />
          <rect x={20} y={14} width={cm * PX} height={22} className="fill-brand" opacity={0.55} />
          {Array.from({ length: 21 }, (_, i) => (
            <g key={i}>
              <line x1={20 + i * PX} y1={14} x2={20 + i * PX} y2={i % 5 === 0 ? 28 : 22} stroke="#334155" />
              {i % 5 === 0 ? <text x={20 + i * PX} y={10} fontSize={9} textAnchor="middle" className="fill-ink-2">{i} cm</text> : null}
            </g>
          ))}
          {/* ground line scale (km) */}
          <line x1={20} y1={58} x2={20 + 20 * PX} y2={58} stroke="#334155" strokeWidth={2} />
          {kmTicks.map((k) => (
            <g key={k}>
              <line x1={20 + k * cmPerKm * PX} y1={52} x2={20 + k * cmPerKm * PX} y2={64} stroke="#334155" />
              <text x={20 + k * cmPerKm * PX} y={78} fontSize={9} textAnchor="middle" className="fill-ink-2">{k} km</text>
            </g>
          ))}
          <line x1={20 + cm * PX} y1={36} x2={20 + cm * PX} y2={66} className="stroke-bad" strokeWidth={2} />
          <text x={RW / 2} y={93} fontSize={9} textAnchor="middle" className="fill-ink-2">top: map ruler · bottom: line scale for {scaleLabel}</text>
        </svg>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Real distance" value={`${fmt(km)} km`} />
          <Readout label="In metres" value={`${fmt(metres, 0)} m`} tone="ink" />
          <Readout label="Map cm per km" value={fmt(cmPerKm, 2)} tone="ink" />
          <Readout label="Walk (≈5 km/h)" value={`${walkMin} min`} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "geo-skills-grid-ref-finder",
    title: "Grid-reference finder",
    blurb: "Tap the map to read 4- and 6-figure grid references, then take the find-it challenge.",
    Component: GridRefFinder,
  },
  {
    id: "geo-skills-scale-measurer",
    title: "Map-scale measurer",
    blurb: "Change the scale and the map distance and watch the real distance (and walking time) update.",
    Component: ScaleMeasurer,
  },
];
