"use client";

import { useMemo, useState } from "react";
import { Choice, Frame, Slider, Stat } from "./kit";

/* ───────────────────────── 1. Climate Graph Lab ───────────────────────── */

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

type PlaceId = "singapore" | "cairo" | "arica" | "mcmurdo" | "vostok" | "lhasa" | "manaus";

/** Approximate long-term monthly means (rounded from national met services / WMO normals).
 *  Polar precipitation is given as water equivalent (melted snow). Simplified for teaching. */
const PLACES: Record<PlaceId, { name: string; where: string; temp: number[]; rain: number[]; note: string }> = {
  singapore: {
    name: "Singapore", where: "1°N, near sea level",
    temp: [26.5, 27.1, 27.5, 28.0, 28.3, 28.3, 27.9, 27.9, 27.6, 27.6, 27.0, 26.4],
    rain: [242, 162, 186, 179, 172, 162, 158, 176, 170, 194, 256, 288],
    note: "the Sun is high overhead all year, so every month is hot; rising warm, moist air brings rain in every month, heaviest in the north-east monsoon (Nov–Jan)",
  },
  cairo: {
    name: "Cairo, Egypt (Sahara)", where: "30°N, 23 m",
    temp: [14.0, 15.3, 17.6, 21.6, 25.1, 27.7, 28.4, 28.3, 26.5, 23.6, 19.1, 15.3],
    rain: [5, 4, 4, 1, 0.5, 0, 0, 0, 0, 1, 3, 6],
    note: "sinking air near the Tropic of Cancer stops clouds forming — a hot desert with a clear hot summer (June–August) and mild winter",
  },
  arica: {
    name: "Arica, Chile (Atacama)", where: "18°S, coast",
    temp: [22.4, 22.6, 21.8, 20.0, 18.4, 17.1, 16.5, 16.6, 17.2, 18.4, 19.8, 21.2],
    rain: [0.2, 0.1, 0.1, 0, 0, 0, 0.1, 0.1, 0.1, 0, 0, 0.1],
    note: "the cold Humboldt Current and the Andes rain shadow make it the driest non-polar place on Earth; the cold sea also keeps it surprisingly mild",
  },
  mcmurdo: {
    name: "McMurdo Station, Antarctica", where: "78°S, coast",
    temp: [-3.0, -9.6, -18.2, -20.9, -21.8, -23.1, -26.1, -26.6, -24.6, -19.0, -10.0, -3.4],
    rain: [13, 21, 18, 17, 16, 16, 15, 9, 10, 7, 8, 14],
    note: "a coastal polar site: below freezing in every month, with the 'warmest' months in December and January because it is in the Southern Hemisphere",
  },
  vostok: {
    name: "Vostok Station, Antarctica", where: "78°S, 3,488 m",
    temp: [-32.0, -44.3, -57.9, -64.9, -65.6, -65.2, -66.7, -67.4, -65.8, -57.0, -43.4, -32.3],
    rain: [1.5, 1.5, 2, 2, 2, 2, 2, 2, 2, 2, 1.5, 1.5],
    note: "high on the ice sheet, far from the sea and in months of polar night — the coldest inhabited place on Earth and a polar desert",
  },
  lhasa: {
    name: "Lhasa, Tibet (Himalaya)", where: "30°N, 3,650 m",
    temp: [-0.3, 2.9, 6.6, 9.7, 13.7, 17.2, 16.8, 16.0, 14.4, 9.6, 3.8, 0.1],
    rain: [0.9, 1.4, 3.3, 8.5, 31, 82, 133, 131, 63, 6.4, 1.6, 0.9],
    note: "the same latitude as Cairo but 3.6 km higher, so it is about 12°C colder; the summer monsoon brings almost all the rain from June to September",
  },
  manaus: {
    name: "Manaus, Brazil (Amazon)", where: "3°S, 92 m",
    temp: [26.1, 26.0, 26.1, 26.3, 26.6, 26.7, 27.0, 27.6, 28.0, 28.0, 27.6, 26.8],
    rain: [260, 288, 314, 300, 256, 114, 88, 58, 83, 126, 183, 217],
    note: "an equatorial rainforest climate like Singapore's, but with a drier spell from July to September",
  },
};
const IDS = Object.keys(PLACES) as PlaceId[];

const sum = (a: number[]) => a.reduce((x, y) => x + y, 0);
const fmt = (n: number) => (Math.abs(n) < 10 && n % 1 !== 0 ? n.toFixed(1) : Math.round(n).toString());

function describe(temp: number[], rain: number[]) {
  const total = sum(rain), max = Math.max(...temp), min = Math.min(...temp);
  const warm = temp.indexOf(max);
  const parts: string[] = [];
  if (max - min < 4) parts.push("the temperature hardly changes all year (a tiny annual range), a sign of a place near the Equator");
  else if (warm >= 4 && warm <= 7) parts.push(`the warmest month is ${MONTH_NAMES[warm]}, so this is the Northern Hemisphere`);
  else parts.push(`the warmest month is ${MONTH_NAMES[warm]}, so summer is around December, which means the Southern Hemisphere`);
  if (max < 0) parts.push("every month is below 0°C — a polar climate");
  if (total < 250) parts.push(`only ${fmt(total)} mm of precipitation falls in a year, so by definition (under 250 mm) it is a desert`);
  else if (total > 1500 && min > 18) parts.push(`it is hot and very wet (${Math.round(total).toLocaleString()} mm) — a tropical rainforest climate, not an extreme one`);
  return parts.join("; ");
}

export function ClimateGraphLab() {
  const [mode, setMode] = useState<"explore" | "guess">("explore");
  const [place, setPlace] = useState<PlaceId>("singapore");
  const [mystery, setMystery] = useState(4);
  const [guess, setGuess] = useState<PlaceId | null>(null);
  const [sameScale, setSameScale] = useState(false);

  const id = mode === "explore" ? place : IDS[mystery % IDS.length];
  const p = PLACES[id];

  const g = useMemo(() => {
    const max = Math.max(...p.temp), min = Math.min(...p.temp), total = sum(p.rain);
    const rMax = Math.max(...p.rain);
    let tLo: number, tHi: number, rHi: number;
    if (sameScale) { tLo = -80; tHi = 40; rHi = 360; }
    else {
      tLo = Math.min(0, Math.floor(min / 10) * 10);
      tHi = Math.max(0, Math.ceil(max / 10) * 10);
      if (tHi - tLo < 30) tHi = tLo + 30;
      rHi = [10, 20, 50, 100, 150, 200, 250, 300, 350].find((v) => v >= rMax) ?? 400;
    }
    const n = sameScale ? 6 : (tHi - tLo) / 10;
    return { max, min, total, range: max - min, wettest: p.rain.indexOf(rMax), tLo, tHi, rHi, n };
  }, [p, sameScale]);

  const X0 = 46, X1 = 314, Y0 = 196, Y1 = 26;
  const slot = (X1 - X0) / 12;
  const yT = (t: number) => Y0 - ((t - g.tLo) / (g.tHi - g.tLo)) * (Y0 - Y1);
  const yR = (r: number) => Y0 - (r / g.rHi) * (Y0 - Y1);
  const ticks = Array.from({ length: g.n + 1 }, (_, i) => i);
  const linePts = p.temp.map((t, i) => `${X0 + slot * (i + 0.5)},${yT(t)}`).join(" ");
  const revealed = mode === "explore" || guess !== null;

  return (
    <Frame
      title="Climate Graph Lab"
      caption={
        mode === "guess" && !revealed ? (
          <p><b>Detective clues:</b> Is any month below 0°C? Which months are warmest (June–August = northern summer, December–February = southern summer)? Is the yearly total under 250 mm (a desert)? Is the annual range tiny (near the Equator)?</p>
        ) : (
          <p>
            <b>Notice:</b> {describe(p.temp, p.rain)}. In {p.name}, {p.note}.
            {!sameScale && <> The axes rescale for each place — always read the numbers before comparing graphs (tick “same scale” to compare fairly).</>}
          </p>
        )
      }
    >
      <div className="space-y-3">
        <Choice<"explore" | "guess"> label="Mode" value={mode} onChange={(m) => { setMode(m); setGuess(null); }} options={[{ id: "explore", label: "Explore a place" }, { id: "guess", label: "Guess the place" }]} />
        {mode === "explore" ? (
          <Choice<PlaceId> label="Choose a place" value={place} onChange={setPlace} options={IDS.map((i) => ({ id: i, label: PLACES[i].name.split(",")[0] }))} />
        ) : (
          <div>
            <p className="mb-1 text-sm font-medium text-slate-700">Which place does this climate graph show? Predict, then pick:</p>
            <div className="flex flex-wrap gap-2">
              {IDS.map((i) => {
                const style = guess === null ? "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50" : i === id ? "bg-emerald-600 text-white ring-emerald-600" : i === guess ? "bg-rose-500 text-white ring-rose-500" : "bg-white text-slate-400 ring-slate-200";
                return (
                  <button key={i} type="button" disabled={guess !== null} onClick={() => setGuess(i)} className={`rounded-full px-3 py-1.5 text-sm font-semibold ring-1 ${style}`}>
                    {PLACES[i].name.split(",")[0]}
                  </button>
                );
              })}
            </div>
            {guess !== null && (
              <p className={`mt-2 text-sm font-bold ${guess === id ? "text-emerald-700" : "text-rose-600"}`}>
                {guess === id ? "Correct!" : `Not quite — it was ${p.name}.`}{" "}
                <button type="button" onClick={() => { setMystery((m) => m + 3); setGuess(null); }} className="ml-1 rounded-lg bg-indigo-600 px-2 py-1 text-xs font-bold text-white">Next mystery →</button>
              </p>
            )}
          </div>
        )}
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input type="checkbox" checked={sameScale} onChange={(e) => setSameScale(e.target.checked)} /> Same scale for every place (−80 to 40°C, 0–360 mm)
        </label>

        <svg viewBox="0 0 360 236" className="w-full rounded-xl bg-white" role="img" aria-label={`Climate graph for ${revealed ? p.name : "a mystery place"}: monthly rainfall bars and temperature line`} fontFamily="sans-serif">
          <text x="180" y="14" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">{revealed ? `${p.name} (${p.where})` : "Mystery place ?"}</text>
          {ticks.map((i) => {
            const t = g.tLo + ((g.tHi - g.tLo) * i) / g.n, r = (g.rHi * i) / g.n, y = yT(t);
            return (
              <g key={i}>
                <line x1={X0} x2={X1} y1={y} y2={y} stroke={t === 0 ? "#94a3b8" : "#e2e8f0"} strokeDasharray={t === 0 ? "4 3" : undefined} />
                <text x={X0 - 4} y={y + 4} textAnchor="end" fontSize="11" fill="#2563eb">{Number.isInteger(r) ? r : r.toFixed(1)}</text>
                <text x={X1 + 4} y={y + 4} fontSize="11" fill="#dc2626">{t}</text>
              </g>
            );
          })}
          {p.rain.map((r, i) => (
            <rect key={i} x={X0 + slot * i + 2} y={yR(r)} width={slot - 4} height={Math.max(0, Y0 - yR(r))} fill="#60a5fa" />
          ))}
          <polyline points={linePts} fill="none" stroke="#dc2626" strokeWidth="2.5" />
          {p.temp.map((t, i) => <circle key={i} cx={X0 + slot * (i + 0.5)} cy={yT(t)} r="2.8" fill="#dc2626" />)}
          <line x1={X0} x2={X0} y1={Y1} y2={Y0} stroke="#2563eb" />
          <line x1={X1} x2={X1} y1={Y1} y2={Y0} stroke="#dc2626" />
          <line x1={X0} x2={X1} y1={Y0} y2={Y0} stroke="#475569" />
          {MONTHS.map((m, i) => <text key={i} x={X0 + slot * (i + 0.5)} y={Y0 + 14} textAnchor="middle" fontSize="11" fill="#334155">{m}</text>)}
          <text x="4" y="230" fontSize="11" fill="#2563eb">■ Rainfall (mm, left)</text>
          <text x="356" y="230" textAnchor="end" fontSize="11" fill="#dc2626">● Temperature (°C, right)</text>
        </svg>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Stat label="Max temp" value={`${g.max.toFixed(1)}°C`} tone="rose" />
          <Stat label="Min temp" value={`${g.min.toFixed(1)}°C`} tone="sky" />
          <Stat label="Annual range" value={`${g.range.toFixed(1)}°C`} tone="amber" />
          <Stat label="Total rainfall" value={`${fmt(g.total)} mm`} tone="indigo" />
        </div>
        <p className="text-xs text-slate-500">Annual temperature range = warmest month − coldest month ({g.max.toFixed(1)} − ({g.min.toFixed(1)}) = {g.range.toFixed(1)}°C). Wettest month: {MONTH_NAMES[g.wettest]}. Approximate long-term averages.</p>
      </div>
    </Frame>
  );
}

/* ───────────────────────── 2. Climb the Mountain ───────────────────────── */

const EVEREST = 8849;
const LAPSE = 6.5; // °C per 1,000 m (average environmental lapse rate)

/** Simplified vegetation zones for the south side of the Himalaya (Nepal). Real boundaries vary by slope and aspect. */
const ZONES = [
  { from: 0, to: 1000, name: "Tropical & subtropical forest", color: "#4d7c0f", what: "sal forest, farms and rice terraces in the warm, wet foothills" },
  { from: 1000, to: 3000, name: "Temperate forest", color: "#65a30d", what: "oak, rhododendron and pine — like a cool, misty woodland" },
  { from: 3000, to: 4000, name: "Coniferous forest", color: "#166534", what: "fir, juniper and birch; trees get shorter towards the tree line (~4,000 m)" },
  { from: 4000, to: 5000, name: "Alpine meadow & shrubs", color: "#a3a35c", what: "low grasses, cushion plants and dwarf shrubs — summer yak pastures" },
  { from: 5000, to: 5600, name: "Bare rock & scree", color: "#9ca3af", what: "frost-shattered rock; only lichens survive" },
  { from: 5600, to: EVEREST + 1, name: "Permanent snow & ice", color: "#f1f5f9", what: "glaciers and snow that never melt — no plants at all" },
];

const STOPS = [
  { h: 0, label: "Sea level" }, { h: 1400, label: "Kathmandu" }, { h: 3440, label: "Namche Bazaar" },
  { h: 5364, label: "Base Camp" }, { h: 8000, label: "Death zone" }, { h: EVEREST, label: "Summit" },
];

/** Standard-atmosphere pressure ratio p/p0 for altitude h (m). */
const pressureRatio = (h: number) => Math.pow(1 - 2.25577e-5 * h, 5.25588);
/** Boiling point of water (°C) from the Clausius–Clapeyron equation. */
const boilingPoint = (ratio: number) => 1 / (1 / 373.15 - (8.314 * Math.log(ratio)) / 40660) - 273.15;

export function ClimbTheMountain() {
  const [h, setH] = useState(0);
  const [t0, setT0] = useState(26);
  const [pred, setPred] = useState<string | null>(null);

  const temp = t0 - (LAPSE * h) / 1000;
  const ratio = pressureRatio(h);
  const zone = ZONES.find((z) => h >= z.from && h < z.to) ?? ZONES[ZONES.length - 1];
  const freezing = (t0 / LAPSE) * 1000;
  const summitT = t0 - (LAPSE * EVEREST) / 1000;

  const BASE = 236, TOP = 30;
  const y = (alt: number) => BASE - (alt / EVEREST) * (BASE - TOP);
  const climberX = 60 + (180 * h) / EVEREST; // left slope runs (60,236) → (240,30), matching y(h)
  const mountain = "60,236 240,30 262,70 280,58 306,120 324,108 352,236";

  const raw = [{ v: "a", t: `${Math.round(t0 - 10)}°C` }, { v: "b", t: `${Math.round(summitT)}°C` }, { v: "c", t: `${Math.round(t0 - 90)}°C` }];
  const k = ((t0 % 3) + 3) % 3;
  const options = [...raw.slice(k), ...raw.slice(0, k)];

  return (
    <Frame
      title="Climb the Mountain"
      caption={
        <p>
          <b>Notice:</b> at {h.toLocaleString()} m it is about <b>{temp.toFixed(1)}°C</b> — {(t0 - temp).toFixed(1)}°C colder than sea level, because air expands and cools as it rises and is heated mostly by the ground below, not by the Sun directly.
          The air pressure is only {Math.round(ratio * 100)}% of sea level, so each breath holds about {Math.round(ratio * 100)}% as much oxygen
          (the air is still 21% oxygen — there is just less air). Vegetation: <b>{zone.name}</b> — {zone.what}.
          {h >= 8000 && " Above 8,000 m is the 'death zone': the body cannot adjust, so most climbers use bottled oxygen."}
          {" "}Simplified model: 6.5°C per 1,000 m and standard-atmosphere pressure; zones are typical of the Nepal Himalaya.
        </p>
      }
    >
      <div className="space-y-3">
        <Slider label="Temperature at sea level" min={-10} max={35} value={t0} onChange={(v) => { setT0(v); setPred(null); }} suffix="°C" color="#dc2626" />
        {pred === null ? (
          <div>
            <p className="mb-1 text-sm font-medium text-slate-700">Predict first: what will it be on the summit of Everest (8,849 m)?</p>
            <div className="flex flex-wrap gap-2">
              {options.map((o) => (
                <button key={o.v} type="button" onClick={() => { setPred(o.v); setH(EVEREST); }} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50">{o.t}</button>
              ))}
            </div>
          </div>
        ) : (
          <p className={`text-sm font-bold ${pred === "b" ? "text-emerald-700" : "text-rose-600"}`}>
            {pred === "b" ? "Correct! " : "Not quite. "}{t0} − 6.5 × 8.849 ≈ {summitT.toFixed(1)}°C on the summit.
          </p>
        )}
        <Slider label="Altitude" min={0} max={EVEREST} step={1} value={h} onChange={setH} suffix=" m" color="#0369a1" />
        <div className="flex flex-wrap gap-1.5">
          {STOPS.map((s) => (
            <button key={s.label} type="button" onClick={() => setH(s.h)} className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${h === s.h ? "bg-sky-600 text-white ring-sky-600" : "bg-white text-slate-600 ring-slate-200"}`}>{s.label} {s.h.toLocaleString()} m</button>
          ))}
        </div>

        <svg viewBox="0 0 360 250" className="w-full rounded-xl bg-sky-50" role="img" aria-label={`Mountain cross-section with vegetation zones; climber at ${h} metres in the ${zone.name} zone, ${temp.toFixed(1)} degrees Celsius`} fontFamily="sans-serif">
          <defs><clipPath id="ee-mountain-clip"><polygon points={mountain} /></clipPath></defs>
          <g clipPath="url(#ee-mountain-clip)">
            {ZONES.map((z) => <rect key={z.name} x="0" width="360" y={y(Math.min(z.to, EVEREST))} height={y(z.from) - y(Math.min(z.to, EVEREST))} fill={z.color} />)}
          </g>
          <polygon points={mountain} fill="none" stroke="#334155" strokeWidth="1.5" />
          {[0, 2000, 4000, 6000, 8000].map((a) => (
            <g key={a}>
              <line x1="40" x2="46" y1={y(a)} y2={y(a)} stroke="#475569" />
              <text x="38" y={y(a) + 4} textAnchor="end" fontSize="11" fill="#334155">{a / 1000}k</text>
            </g>
          ))}
          <line x1="44" x2="44" y1={TOP} y2={BASE} stroke="#475569" />
          <text x="6" y="22" fontSize="11" fill="#334155">metres</text>
          {freezing > 0 && freezing < EVEREST && (
            <g>
              <line x1="46" x2="356" y1={y(freezing)} y2={y(freezing)} stroke="#2563eb" strokeDasharray="5 4" strokeWidth="1.5" />
              <text x="354" y={y(freezing) - 4} textAnchor="end" fontSize="11" fill="#1d4ed8">0°C at ≈{Math.round(freezing / 10) * 10} m</text>
            </g>
          )}
          {freezing <= 0 && <text x="354" y="246" textAnchor="end" fontSize="11" fill="#1d4ed8">Below 0°C even at sea level</text>}
          <line x1="46" x2={climberX} y1={y(h)} y2={y(h)} stroke="#0369a1" strokeDasharray="2 3" />
          <circle cx={climberX} cy={y(h) - 6} r="6" fill="#f97316" stroke="#fff" strokeWidth="2" />
          <text x={Math.min(climberX + 10, 250)} y={Math.max(y(h) - 12, 14)} fontSize="12" fontWeight="700" fill="#0f172a">{temp.toFixed(1)}°C</text>
        </svg>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Stat label="Temperature" value={`${temp.toFixed(1)}°C`} tone={temp < 0 ? "sky" : "rose"} />
          <Stat label="Air pressure" value={`${Math.round(1013 * ratio)} hPa`} tone="indigo" />
          <Stat label="O₂ per breath" value={`${Math.round(ratio * 100)}%`} tone="emerald" />
          <Stat label="Water boils at" value={`${Math.round(boilingPoint(ratio))}°C`} tone="amber" />
        </div>
      </div>
    </Frame>
  );
}
