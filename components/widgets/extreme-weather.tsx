"use client";
// Interactive explorables for "Extreme Weather & Forecasting".
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Tropical-storm ingredients checker + Saffir–Simpson rating
// ---------------------------------------------------------------------------

type Basin = "atlantic" | "nwpacific" | "indian";
const BASIN_NAME: Record<Basin, string> = { atlantic: "hurricane", nwpacific: "typhoon", indian: "cyclone" };
const BASIN_LABEL: Record<Basin, string> = {
  atlantic: "Atlantic / NE Pacific",
  nwpacific: "NW Pacific",
  indian: "Indian Ocean / S Pacific",
};

function stormClass(kmh: number): { label: string; cat: number } {
  if (kmh >= 252) return { label: "Category 5", cat: 5 };
  if (kmh >= 209) return { label: "Category 4", cat: 4 };
  if (kmh >= 178) return { label: "Category 3", cat: 3 };
  if (kmh >= 154) return { label: "Category 2", cat: 2 };
  if (kmh >= 119) return { label: "Category 1", cat: 1 };
  if (kmh >= 63) return { label: "Tropical storm", cat: 0 };
  return { label: "Tropical depression", cat: -1 };
}

const BANDS = [
  { from: 0, to: 63, label: "TD" },
  { from: 63, to: 119, label: "TS" },
  { from: 119, to: 154, label: "1" },
  { from: 154, to: 178, label: "2" },
  { from: 178, to: 209, label: "3" },
  { from: 209, to: 252, label: "4" },
  { from: 252, to: 300, label: "5" },
];
const BAND_FILL = ["#e0f2fe", "#bae6fd", "#fde68a", "#fcd34d", "#fdba74", "#fb923c", "#f87171"];

function StormIngredients() {
  const [sea, setSea] = useState(28);
  const [lat, setLat] = useState(15);
  const [hemi, setHemi] = useState<"N" | "S">("N");
  const [shear, setShear] = useState<"low" | "high">("low");
  const [wind, setWind] = useState(140);
  const [basin, setBasin] = useState<Basin>("nwpacific");

  const warmOk = sea >= 26.5;
  const latOk = lat >= 5 && lat <= 30;
  const shearOk = shear === "low";
  const forms = warmOk && latOk && shearOk;
  const cls = stormClass(wind);
  const name = BASIN_NAME[basin];

  // Map strip: latitude 40°N (top) to 40°S (bottom).
  const W = 320, H = 200;
  const yOf = (l: number) => H / 2 - (l / 40) * (H / 2 - 10);
  const signedLat = hemi === "N" ? lat : -lat;
  const sy = yOf(signedLat);
  const spinSign = hemi === "N" ? -1 : 1; // anticlockwise in N, clockwise in S (screen coords)
  const size = forms ? 12 + Math.max(0, cls.cat + 1) * 4 : 8;
  const arms = [0, 120, 240].map((a) => {
    const r0 = 3, r1 = size;
    const pts: string[] = [];
    for (let i = 0; i <= 12; i++) {
      const t = i / 12;
      const ang = ((a + spinSign * t * 200) * Math.PI) / 180;
      const r = r0 + (r1 - r0) * t;
      pts.push(`${(160 + r * Math.cos(ang)).toFixed(1)},${(sy + r * Math.sin(ang)).toFixed(1)}`);
    }
    return pts.join(" ");
  });

  const missing: string[] = [];
  if (!warmOk) missing.push("the sea is too cool (needs at least about 26.5 °C)");
  if (!latOk) missing.push(lat < 5 ? "it is too close to the equator — the Coriolis effect is too weak to start the spin" : "it is outside the usual 5–30° belt — seas here are usually too cool for storms to form");
  if (!shearOk) missing.push("strong wind shear would tear the rising column of air apart");

  const scaleW = 320;
  const xOf = (v: number) => (Math.min(v, 300) / 300) * scaleW;

  return (
    <WidgetFrame
      title="Tropical-storm ingredients checker"
      tryThis={[
        "Keep the sea at 29 °C but slide the latitude to 2°. Why does the storm vanish even though the sea is warm?",
        "Find the lowest sea temperature that still lets a storm form.",
        "Switch to the southern hemisphere. Which way does the storm spin now?",
        "What wind speed turns a Category 2 into a 'major' Category 3?",
      ]}
      caption={
        forms ? (
          <span>
            All three ingredients are present: warm sea ({sea.toFixed(1)} °C), {lat}° {hemi === "N" ? "north" : "south"} of the equator and low wind shear. Warm, moist air rises, condenses and releases heat that powers the storm, and the Coriolis effect makes it spin{" "}
            <strong>{hemi === "N" ? "anticlockwise" : "clockwise"}</strong>. With sustained winds of {wind} km/h this is{" "}
            <strong>{cls.cat >= 1 ? `a ${cls.label} ${name}` : cls.cat === 0 ? "a named tropical storm (not yet a " + name + ")" : "only a tropical depression"}</strong>
            {cls.cat >= 3 ? " — a 'major' storm." : "."} The Saffir–Simpson scale is officially for the Atlantic and NE Pacific; other regions use similar scales. <em>Simplified model.</em>
          </span>
        ) : (
          <span>
            No tropical storm can form here: {missing.join("; and ")}. Real forecasters also check humidity and how deep the warm water goes. <em>Simplified model.</em>
          </span>
        )
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Slider label="Sea-surface temperature" value={sea} min={20} max={32} step={0.5} onChange={setSea} format={(v) => `${v.toFixed(1)} °C`} />
          <Slider label="Distance from equator (latitude)" value={lat} min={0} max={40} onChange={setLat} format={(v) => `${v}° ${hemi}`} />
          <div className="flex flex-wrap items-center gap-2">
            <Segmented label="Hemisphere" value={hemi} onChange={setHemi} options={[{ value: "N", label: "North" }, { value: "S", label: "South" }]} />
            <Segmented label="Wind shear" value={shear} onChange={setShear} options={[{ value: "low", label: "Low shear" }, { value: "high", label: "High shear" }]} />
          </div>
          <ul className="space-y-1 text-sm">
            {[
              { ok: warmOk, text: "Sea at least about 26.5 °C" },
              { ok: latOk, text: "Between about 5° and 30° from the equator" },
              { ok: shearOk, text: "Low wind shear" },
            ].map((c) => (
              <li key={c.text} className={`flex items-center gap-2 rounded-lg px-2 py-1 ${c.ok ? "bg-good-soft text-good" : "bg-bad-soft text-bad"}`}>
                <span aria-hidden>{c.ok ? "✓" : "✗"}</span>
                <span className="font-semibold">{c.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full rounded-xl border border-line"
          role="img"
          aria-label={`Latitude strip from 40 degrees north to 40 degrees south. The cloud cluster sits at ${lat} degrees ${hemi === "N" ? "north" : "south"}. ${forms ? `A storm forms and spins ${hemi === "N" ? "anticlockwise" : "clockwise"}.` : "No storm forms."}`}
        >
          <rect x={0} y={0} width={W} height={H} fill="#bae6fd" />
          <rect x={0} y={yOf(30)} width={W} height={yOf(5) - yOf(30)} fill="#fde68a" opacity={0.6} />
          <rect x={0} y={yOf(-5)} width={W} height={yOf(-30) - yOf(-5)} fill="#fde68a" opacity={0.6} />
          {[30, 5, 0, -5, -30].map((l) => (
            <g key={l}>
              <line x1={0} x2={W} y1={yOf(l)} y2={yOf(l)} stroke="#334155" strokeWidth={l === 0 ? 1.5 : 0.8} strokeDasharray={l === 0 ? undefined : "4 3"} />
              <text x={4} y={yOf(l) - 3} fontSize={10} fill="#1f2937">
                {l === 0 ? "Equator 0°" : `${Math.abs(l)}°${l > 0 ? "N" : "S"}`}
              </text>
            </g>
          ))}
          <text x={W - 4} y={yOf(17.5) + 4} fontSize={10} textAnchor="end" fill="#1f2937">storm belt</text>
          <text x={W - 4} y={yOf(-17.5) + 4} fontSize={10} textAnchor="end" fill="#1f2937">storm belt</text>
          {forms ? (
            <g>
              {arms.map((p, i) => (
                <polyline key={i} points={p} fill="none" stroke="#f8fafc" strokeWidth={3.5} strokeLinecap="round" />
              ))}
              <circle cx={160} cy={sy} r={2.5} fill="#1f2937" />
            </g>
          ) : (
            <g>
              <circle cx={152} cy={sy} r={6} fill="#f1f5f9" stroke="#334155" />
              <circle cx={162} cy={sy - 3} r={7} fill="#f1f5f9" stroke="#334155" />
              <circle cx={171} cy={sy} r={5} fill="#f1f5f9" stroke="#334155" />
            </g>
          )}
        </svg>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-ink-2">Ocean:</span>
          <Segmented label="Ocean region" value={basin} onChange={setBasin} options={(Object.keys(BASIN_LABEL) as Basin[]).map((b) => ({ value: b, label: BASIN_LABEL[b] }))} />
        </div>
        <Slider label="Sustained wind speed" value={wind} min={30} max={300} step={1} onChange={setWind} format={(v) => `${v} km/h`} />
        <svg viewBox={`0 0 ${scaleW} 46`} className="h-auto w-full" role="img" aria-label={`Saffir–Simpson scale bar with the marker at ${wind} kilometres per hour: ${cls.label}`}>
          {BANDS.map((b, i) => (
            <g key={b.label}>
              <rect x={xOf(b.from)} y={6} width={xOf(b.to) - xOf(b.from)} height={22} fill={BAND_FILL[i]} stroke="#334155" strokeWidth={0.5} />
              <text x={(xOf(b.from) + xOf(b.to)) / 2} y={21} fontSize={10} textAnchor="middle" fill="#1f2937">{b.label}</text>
            </g>
          ))}
          <polygon points={`${xOf(wind)},30 ${xOf(wind) - 5},40 ${xOf(wind) + 5},40`} className="fill-ink" />
          <text x={2} y={44} fontSize={8} className="fill-ink-2">0</text>
          <text x={scaleW - 2} y={44} fontSize={8} textAnchor="end" className="fill-ink-2">300 km/h</text>
        </svg>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Can it form?" value={forms ? "Yes" : "No"} tone={forms ? "good" : "bad"} />
          <Readout label="Rating" value={forms ? cls.label : "—"} tone="ink" />
          <Readout label="Local name" value={forms && cls.cat >= 1 ? name : "—"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Isobar spacing → wind strength
// ---------------------------------------------------------------------------

const OUTER = 1012;

function beaufort(kmh: number): { force: string; desc: string } {
  if (kmh < 12) return { force: "0–2", desc: "calm to light breeze" };
  if (kmh < 29) return { force: "3–4", desc: "gentle to moderate breeze" };
  if (kmh < 39) return { force: "5", desc: "fresh breeze" };
  if (kmh < 62) return { force: "6–7", desc: "strong wind" };
  if (kmh < 89) return { force: "8–9", desc: "gale" };
  if (kmh < 118) return { force: "10–11", desc: "storm" };
  return { force: "12", desc: "hurricane force" };
}

function IsobarWind() {
  const [kind, setKind] = useState<"low" | "high">("low");
  const [lowCentre, setLowCentre] = useState(984);
  const [highCentre, setHighCentre] = useState(1032);
  const [radius, setRadius] = useState(800);

  const centre = kind === "low" ? lowCentre : highCentre;
  const n = Math.abs(OUTER - centre) / 4; // number of isobars, every 4 hPa
  const values = Array.from({ length: n }, (_, i) => (kind === "low" ? centre + 4 * (i + 1) : centre - 4 * (i + 1)));
  const spacingKm = radius / n;
  const gradient = (Math.abs(OUTER - centre) / radius) * 100; // hPa per 100 km
  // Simplified mid-latitude geostrophic estimate, reduced to ~70% for friction near the ground.
  const rawWind = Math.round((gradient * 19) / 5) * 5;
  const windKmh = Math.min(rawWind, 250);
  const extreme = rawWind >= 150;
  const bf = beaufort(windKmh);

  const W = 360, H = 300, cx = 180, cy = 150;
  const maxR = 135; // px for the outermost isobar at 1500 km
  const pxPerKm = maxR / 1500;
  const rOf = (i: number) => ((i + 1) / n) * radius * pxPerKm;
  const outerR = radius * pxPerKm;
  // Wind arrows on the outer isobar: NH low = anticlockwise & slightly inwards; NH high = clockwise & slightly outwards.
  const arrows = [0, 60, 120, 180, 240, 300].map((deg) => {
    const a = (deg * Math.PI) / 180;
    const x = cx + outerR * Math.cos(a);
    const y = cy - outerR * Math.sin(a);
    // Tangent for anticlockwise motion on screen (y up = minus).
    const tx = -Math.sin(a), ty = -Math.cos(a);
    const dir = kind === "low" ? 1 : -1;
    const inward = kind === "low" ? -0.35 : 0.35;
    const rx = Math.cos(a), ry = -Math.sin(a);
    const dx = dir * tx + inward * rx, dy = dir * ty + inward * ry;
    const len = 14 + Math.min(26, windKmh / 4);
    const mag = Math.hypot(dx, dy);
    const ex = x + (dx / mag) * len, ey = y + (dy / mag) * len;
    return { x, y, ex, ey };
  });

  return (
    <WidgetFrame
      title="Isobar spacing and wind strength"
      tryThis={[
        "Make a deep low (960 hPa) and shrink its size. What happens to the isobars and the wind?",
        "Keep the centre at 996 hPa but make the system huge. Why does the wind drop?",
        "Switch to a high. Which way do the winds turn now, and why are highs usually calm?",
        "Can you make a gale (force 8+) with only three isobars?",
      ]}
      caption={
        <span>
          {kind === "low" ? "Low pressure (depression): air rises, cools and condenses — expect cloud and rain. " : "High pressure (anticyclone): air sinks and warms — expect clear, settled weather. "}
          There {n === 1 ? "is 1 isobar" : `are ${n} isobars`} (every 4 hPa) between the centre and {OUTER} hPa, about <strong>{Math.round(spacingKm)} km apart</strong>. The closer the isobars, the steeper the pressure difference and the <strong>stronger the wind</strong>: here about{" "}
          {windKmh} km/h, Beaufort force {bf.force} ({bf.desc}). In the northern hemisphere winds blow {kind === "low" ? "anticlockwise and slightly inwards around a low" : "clockwise and slightly outwards around a high"}. {extreme ? " Isobars this tightly packed are only found in the most violent storms, such as intense tropical storms — a UK-type depression almost never gets this steep. " : ""}<em>Simplified model of a mid-latitude (UK-like) system; real winds also depend on friction and the curve of the isobars.</em>
        </span>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Segmented label="Pressure system" value={kind} onChange={setKind} options={[{ value: "low", label: "Low (L)" }, { value: "high", label: "High (H)" }]} />
          {kind === "low" ? (
            <Slider label="Pressure at the centre" value={lowCentre} min={952} max={1008} step={4} onChange={setLowCentre} format={(v) => `${v} hPa`} />
          ) : (
            <Slider label="Pressure at the centre" value={highCentre} min={1016} max={1044} step={4} onChange={setHighCentre} format={(v) => `${v} hPa`} />
          )}
          <Slider label={`Distance from centre to the ${OUTER} hPa isobar`} value={radius} min={400} max={1500} step={50} onChange={setRadius} format={(v) => `${v} km`} />
          <div className="grid grid-cols-2 gap-2">
            <Readout label="Isobar spacing" value={`${Math.round(spacingKm)} km`} tone="ink" />
            <Readout label="Pressure gradient" value={`${gradient.toFixed(1)} hPa/100 km`} tone="ink" />
            <Readout label="Wind (approx.)" value={`${rawWind > 250 ? "250+" : windKmh} km/h`} tone={windKmh >= 62 ? "bad" : "brand"} />
            <Readout label="Beaufort" value={`F${bf.force}`} tone={windKmh >= 62 ? "bad" : "good"} />
          </div>
        </div>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full rounded-xl border border-line"
          role="img"
          aria-label={`Weather map of a ${kind === "low" ? "low" : "high"} pressure system with centre ${centre} hectopascals and ${n} isobars about ${Math.round(spacingKm)} kilometres apart. Estimated wind about ${windKmh} kilometres per hour.`}
        >
          <rect x={0} y={0} width={W} height={H} fill="#ffffff" />
          {values.map((v, i) => {
            const r = rOf(i);
            const lx = cx + r * 0.707, ly = cy + r * 0.707;
            const showLabel = n <= 7 || i % 2 === 1 || i === n - 1;
            return (
              <g key={v}>
                <circle cx={cx} cy={cy} r={r} fill="none" stroke="#334155" strokeWidth={1.3} />
                {showLabel ? (
                  <g>
                    <rect x={lx - 15} y={ly - 7} width={30} height={13} fill="#ffffff" />
                    <text x={lx} y={ly + 3.5} fontSize={10} textAnchor="middle" fill="#1f2937">{v}</text>
                  </g>
                ) : null}
              </g>
            );
          })}
          <text x={cx} y={cy + 7} fontSize={20} fontWeight="bold" textAnchor="middle" fill={kind === "low" ? "#b91c1c" : "#1d4ed8"}>{kind === "low" ? "L" : "H"}</text>
          <text x={cx} y={cy + 22} fontSize={10} textAnchor="middle" fill="#1f2937">{centre}</text>
          {arrows.map((a, i) => {
            const ang = Math.atan2(a.ey - a.y, a.ex - a.x);
            const hx1 = a.ex - 6 * Math.cos(ang - 0.45), hy1 = a.ey - 6 * Math.sin(ang - 0.45);
            const hx2 = a.ex - 6 * Math.cos(ang + 0.45), hy2 = a.ey - 6 * Math.sin(ang + 0.45);
            return (
              <g key={i}>
                <line x1={a.x} y1={a.y} x2={a.ex} y2={a.ey} stroke="#0369a1" strokeWidth={2} />
                <polygon points={`${a.ex},${a.ey} ${hx1},${hy1} ${hx2},${hy2}`} fill="#0369a1" />
              </g>
            );
          })}
          <line x1={14} x2={14 + 500 * pxPerKm} y1={H - 14} y2={H - 14} stroke="#1f2937" strokeWidth={2} />
          <text x={14} y={H - 20} fontSize={10} fill="#1f2937">500 km</text>
          <text x={W - 8} y={H - 10} fontSize={10} textAnchor="end" fill="#1f2937">isobars every 4 hPa</text>
        </svg>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "storm-ingredients",
    title: "Tropical-storm ingredients checker",
    blurb: "Change the sea temperature, latitude and wind shear to see whether a tropical storm can form — then rate it on the Saffir–Simpson scale.",
    Component: StormIngredients,
  },
  {
    id: "isobar-wind",
    title: "Isobars and wind strength",
    blurb: "Deepen a low or build a high, squeeze the isobars together and watch the wind strengthen.",
    Component: IsobarWind,
  },
];
