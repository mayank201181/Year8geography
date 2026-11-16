"use client";

import { useMemo, useState } from "react";
import { Choice, Frame, Slider, Stat } from "./kit";

/* ------------------------------------------------------------------ */
/* 1. Urbanisation Curves                                              */
/* ------------------------------------------------------------------ */

// % of population living in urban areas, 1950–2050 every 10 years.
// Approximate values based on UN World Urbanization Prospects (2018); 2030–2050 are projections.
const U_YEARS = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030, 2040, 2050];

type CountryId = "world" | "uk" | "japan" | "china" | "india" | "nigeria" | "brazil" | "singapore";

const COUNTRIES: { id: CountryId; name: string; color: string; data: number[] }[] = [
  { id: "world", name: "World", color: "#0f172a", data: [30, 34, 37, 39, 43, 47, 52, 56, 60, 65, 68] },
  { id: "uk", name: "UK", color: "#2563eb", data: [79, 78, 77, 78, 78, 79, 81, 84, 86, 88, 89] },
  { id: "japan", name: "Japan", color: "#db2777", data: [53, 63, 72, 76, 77, 79, 91, 92, 93, 94, 95] },
  { id: "china", name: "China", color: "#dc2626", data: [12, 16, 17, 19, 26, 36, 49, 61, 71, 76, 80] },
  { id: "india", name: "India", color: "#ea580c", data: [17, 18, 20, 23, 26, 28, 31, 35, 40, 46, 53] },
  { id: "nigeria", name: "Nigeria", color: "#16a34a", data: [9, 15, 18, 22, 30, 35, 44, 52, 60, 66, 70] },
  { id: "brazil", name: "Brazil", color: "#ca8a04", data: [36, 46, 56, 66, 74, 81, 84, 87, 89, 91, 92] },
  { id: "singapore", name: "Singapore", color: "#7c3aed", data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100] },
];

function lerpSeries(years: number[], data: number[], year: number) {
  if (year <= years[0]) return data[0];
  for (let i = 1; i < years.length; i++) {
    if (year <= years[i]) {
      const t = (year - years[i - 1]) / (years[i] - years[i - 1]);
      return data[i - 1] + t * (data[i] - data[i - 1]);
    }
  }
  return data[data.length - 1];
}

/** First year (interpolated) a series reaches 50% urban, or null. */
function cross50(data: number[]) {
  if (data[0] >= 50) return "before 1950";
  for (let i = 1; i < data.length; i++) {
    if (data[i] >= 50) {
      const t = (50 - data[i - 1]) / (data[i] - data[i - 1]);
      return String(Math.round(U_YEARS[i - 1] + t * 10));
    }
  }
  return null;
}

export function UrbanisationCurves() {
  const [on, setOn] = useState<CountryId[]>(["world", "uk", "china", "nigeria"]);
  const [year, setYear] = useState(2020);
  const [reveal, setReveal] = useState(false);

  const W = 360, H = 230, L = 34, R = 10, T = 12, B = 30;
  const x = (yr: number) => L + ((yr - 1950) / 100) * (W - L - R);
  const y = (p: number) => T + (1 - p / 100) * (H - T - B);

  const shown = COUNTRIES.filter((c) => on.includes(c.id));
  const toggle = (id: CountryId) =>
    setOn((o) => (o.includes(id) ? (o.length > 1 ? o.filter((v) => v !== id) : o) : [...o, id]));

  const readouts = shown.map((c) => ({ ...c, now: lerpSeries(U_YEARS, c.data, year), rise: lerpSeries(U_YEARS, c.data, year) - c.data[0] }));

  const caption = useMemo(() => {
    if (readouts.length === 0) return null;
    const sorted = [...readouts].sort((a, b) => b.now - a.now);
    const fastest = [...readouts].sort((a, b) => b.rise - a.rise)[0];
    const top = sorted[0], low = sorted[sorted.length - 1];
    const anomalies: string[] = [];
    if (on.includes("singapore")) anomalies.push("Singapore is a flat line at 100%: it is a city-state, so the UN counts everyone as urban.");
    if (on.includes("uk")) anomalies.push("The UK barely changes: it urbanised in the 1800s during the Industrial Revolution, so by 1950 it was already about 80% urban.");
    if (on.includes("japan") && year >= 2000) anomalies.push("Japan jumps between 2000 and 2010 partly because towns were merged into cities, so the definition of 'urban' changed, not just where people live.");
    if (on.includes("india") && year >= 2020) anomalies.push("India is still mostly rural in 2020 (about 35% urban) and only passes 50% around 2050.");
    return (
      <>
        <p><b>T (trend):</b> {year === 1950 ? "Move the slider to see the trend." : `Every selected line is rising or roughly flat: the share of people living in towns and cities grows over time.`}</p>
        <p><b>E (example):</b> In {year}, {top.name} is about {Math.round(top.now)}% urban and {low.name} about {Math.round(low.now)}%. {fastest.rise > 1 ? `${fastest.name} has urbanised fastest since 1950 (+${Math.round(fastest.rise)} percentage points).` : ""}</p>
        <p><b>A (anomaly):</b> {anomalies[0] ?? "Look for a line that behaves differently: try adding Singapore, the UK or Japan."}</p>
        {year > 2020 ? <p className="mt-1 text-xs text-slate-500">After 2020 the lines are UN projections (shaded), not measurements.</p> : null}
      </>
    );
  }, [readouts, on, year]);

  return (
    <Frame title="Urbanisation curves: % of people living in urban areas" caption={caption}>
      <div className="mb-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        <b>Predict first:</b> in roughly which year did the world first have more people in cities than in the countryside?{" "}
        <button type="button" onClick={() => setReveal(!reveal)} className="ml-1 rounded-full bg-white px-2 py-0.5 text-xs font-bold ring-1 ring-amber-300">
          {reveal ? "Hide" : "Reveal"}
        </button>
        {reveal ? <span className="mt-1 block">About 2007. The World line crosses the dashed 50% line in the late 2000s. Find it on the chart!</span> : null}
      </div>

      <div className="mb-2 flex flex-wrap gap-1.5" role="group" aria-label="Choose countries to plot">
        {COUNTRIES.map((c) => {
          const active = on.includes(c.id);
          return (
            <button key={c.id} type="button" aria-pressed={active} onClick={() => toggle(c.id)}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 transition ${active ? "text-white" : "bg-white text-slate-600 ring-slate-200"}`}
              style={active ? { background: c.color, boxShadow: `0 0 0 1px ${c.color}` } : undefined}>
              {c.name}
            </button>
          );
        })}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`Line chart of percentage urban from 1950 to 2050 for ${shown.map((c) => c.name).join(", ")}`}>
        <rect x={x(2020)} y={T} width={x(2050) - x(2020)} height={H - T - B} fill="#f1f5f9" />
        <text x={x(2035)} y={T + 12} fontSize={11} textAnchor="middle" fill="#64748b">projection</text>
        {[0, 25, 50, 75, 100].map((p) => (
          <g key={p}>
            <line x1={L} x2={W - R} y1={y(p)} y2={y(p)} stroke={p === 50 ? "#f59e0b" : "#e2e8f0"} strokeWidth={p === 50 ? 1.5 : 1} strokeDasharray={p === 50 ? "5 4" : undefined} />
            <text x={L - 4} y={y(p) + 4} fontSize={11} textAnchor="end" fill="#64748b">{p}%</text>
          </g>
        ))}
        <text x={W - R - 2} y={y(50) - 4} fontSize={11} textAnchor="end" fill="#b45309">50% urban</text>
        {[1950, 1975, 2000, 2025, 2050].map((yr) => (
          <text key={yr} x={x(yr)} y={H - 10} fontSize={11} textAnchor="middle" fill="#64748b">{yr}</text>
        ))}
        {shown.map((c) => (
          <polyline key={c.id} fill="none" stroke={c.color} strokeWidth={2.5} strokeLinejoin="round"
            points={c.data.map((v, i) => `${x(U_YEARS[i])},${y(v)}`).join(" ")} />
        ))}
        <line x1={x(year)} x2={x(year)} y1={T} y2={H - B} stroke="#4f46e5" strokeWidth={1.5} />
        {readouts.map((c) => (
          <circle key={c.id} cx={x(year)} cy={y(c.now)} r={4} fill={c.color} stroke="#fff" strokeWidth={1.5} />
        ))}
      </svg>

      <Slider label="Year" min={1950} max={2050} step={1} value={year} onChange={setYear} />

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {readouts.map((c) => (
          <div key={c.id} className="rounded-xl bg-white px-3 py-2 ring-1 ring-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wide" style={{ color: c.color }}>{c.name}</p>
            <p className="text-lg font-extrabold tabular-nums text-slate-800">{Math.round(c.now)}%</p>
            <p className="text-[11px] text-slate-500">50% urban: {cross50(c.data) ?? "after 2050"}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500">Approximate figures based on UN World Urbanization Prospects (2018). Each country defines &quot;urban&quot; differently.</p>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Megacity Race                                                    */
/* ------------------------------------------------------------------ */

// Urban agglomeration populations in millions. Approximate UN WUP (2018) estimates; 2030/2035 projected.
const M_YEARS = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030, 2035];

type Continent = "Asia" | "N. America" | "S. America" | "Europe" | "Africa";
const CONT_COLOR: Record<Continent, string> = {
  Asia: "#dc2626", "N. America": "#2563eb", "S. America": "#ca8a04", Europe: "#7c3aed", Africa: "#16a34a",
};

const CITIES: { name: string; c: Continent; p: number[] }[] = [
  { name: "Tokyo", c: "Asia", p: [11.3, 16.7, 23.3, 28.5, 32.5, 34.4, 36.8, 37.4, 36.6, 36.0] },
  { name: "New York", c: "N. America", p: [12.3, 14.2, 16.2, 15.6, 16.1, 17.8, 18.4, 18.8, 19.9, 20.3] },
  { name: "Osaka", c: "Asia", p: [7.0, 10.6, 15.3, 17.0, 18.4, 18.7, 19.3, 19.2, 18.7, 18.3] },
  { name: "London", c: "Europe", p: [8.4, 8.2, 7.5, 6.8, 6.9, 7.3, 8.0, 9.3, 10.2, 10.6] },
  { name: "Paris", c: "Europe", p: [6.3, 7.4, 8.2, 8.7, 9.3, 9.7, 10.5, 11.0, 11.7, 12.0] },
  { name: "Moscow", c: "Europe", p: [5.4, 6.2, 7.1, 8.1, 9.0, 10.0, 11.5, 12.5, 12.8, 12.8] },
  { name: "Buenos Aires", c: "S. America", p: [5.2, 6.8, 8.4, 9.9, 11.1, 12.4, 14.2, 15.2, 16.5, 17.1] },
  { name: "Chicago", c: "N. America", p: [5.0, 6.2, 7.1, 7.2, 7.4, 8.3, 8.6, 8.9, 9.4, 9.6] },
  { name: "Kolkata", c: "Asia", p: [4.6, 5.7, 7.3, 9.0, 10.9, 13.1, 14.0, 14.9, 17.6, 19.6] },
  { name: "Shanghai", c: "Asia", p: [4.3, 6.8, 6.0, 6.0, 7.8, 13.6, 20.3, 27.1, 32.9, 34.3] },
  { name: "Los Angeles", c: "N. America", p: [4.0, 6.5, 8.4, 9.5, 10.9, 11.8, 12.2, 12.5, 13.2, 13.6] },
  { name: "Mexico City", c: "N. America", p: [3.4, 5.5, 8.8, 13.0, 15.6, 18.5, 20.1, 21.8, 24.1, 25.4] },
  { name: "São Paulo", c: "S. America", p: [2.3, 4.0, 7.6, 12.1, 14.8, 17.0, 19.7, 22.0, 23.8, 24.5] },
  { name: "Rio de Janeiro", c: "S. America", p: [3.0, 4.5, 6.8, 8.6, 9.7, 11.3, 12.4, 13.5, 14.4, 14.8] },
  { name: "Mumbai", c: "Asia", p: [2.9, 4.1, 5.8, 8.7, 12.4, 16.4, 18.3, 20.4, 24.6, 27.3] },
  { name: "Delhi", c: "Asia", p: [1.4, 2.3, 3.5, 5.6, 9.4, 15.7, 21.9, 30.3, 38.9, 43.3] },
  { name: "Seoul", c: "Asia", p: [1.0, 2.4, 5.3, 8.3, 10.5, 9.9, 9.7, 10.0, 10.2, 10.3] },
  { name: "Cairo", c: "Africa", p: [2.5, 3.7, 5.6, 7.3, 9.9, 13.6, 16.9, 20.9, 25.5, 28.5] },
  { name: "Beijing", c: "Asia", p: [1.7, 3.2, 4.4, 5.4, 6.8, 10.2, 16.4, 20.5, 24.3, 25.4] },
  { name: "Dhaka", c: "Asia", p: [0.3, 0.5, 1.4, 3.3, 6.6, 10.3, 14.7, 21.0, 28.1, 31.2] },
  { name: "Karachi", c: "Asia", p: [1.0, 1.9, 3.1, 5.0, 7.1, 9.8, 13.0, 16.1, 20.4, 23.1] },
  { name: "Lagos", c: "Africa", p: [0.3, 0.8, 1.4, 2.6, 4.8, 7.3, 10.4, 14.4, 20.6, 24.4] },
  { name: "Kinshasa", c: "Africa", p: [0.2, 0.4, 1.1, 2.1, 3.7, 6.1, 9.4, 14.3, 21.9, 26.7] },
  { name: "Manila", c: "Asia", p: [1.5, 2.3, 3.5, 5.9, 8.0, 10.0, 11.9, 13.9, 16.8, 18.6] },
  { name: "Istanbul", c: "Europe", p: [1.0, 1.5, 2.8, 4.4, 6.6, 8.7, 12.7, 15.2, 17.1, 17.7] },
];

// Number of megacities (10 million+) in the WHOLE world, approximate UN estimates/projections.
const MEGA_COUNT = [2, 3, 3, 5, 10, 17, 24, 34, 43, 48];

export function MegacityRace() {
  const [year, setYear] = useState(1950);
  const [guess, setGuess] = useState<"" | "tokyo" | "delhi" | "lagos" | "ny">("");

  const ranked = useMemo(
    () => CITIES.map((c) => ({ ...c, now: lerpSeries(M_YEARS, c.p, year) })).sort((a, b) => b.now - a.now).slice(0, 10),
    [year],
  );
  const megaCount = Math.round(lerpSeries(M_YEARS, MEGA_COUNT, year));
  const inTop: Record<Continent, number> = { Asia: 0, "N. America": 0, "S. America": 0, Europe: 0, Africa: 0 };
  ranked.forEach((c) => (inTop[c.c] += 1));
  const richWorld = ranked.filter((c) => ["Tokyo", "New York", "Osaka", "London", "Paris", "Moscow", "Chicago", "Los Angeles", "Seoul"].includes(c.name)).length;
  const africa = ranked.filter((c) => c.c === "Africa").map((c) => c.name);

  const W = 360, rowH = 22, top = 8, L = 98, R = 44;
  const H = top + rowH * 10 + 22;
  const maxP = 45;
  const bx = (v: number) => L + (v / maxP) * (W - L - R);

  const notice =
    year < 1975
      ? `Most of the biggest cities are in richer, industrialised countries (${richWorld} of the top 10 are in Japan, the USA or Europe). They grew first because factories pulled people from the countryside.`
      : year < 2005
        ? `Cities in poorer, fast-growing countries are racing up: Mexico City, São Paulo, Mumbai and Delhi. Rural-urban migration plus high birth rates (natural increase) drive this growth.`
        : `Asia dominates (${inTop.Asia} of the top 10). Older giants like New York and Osaka have stopped climbing, while ${africa.length ? africa.join(" and ") + " in Africa" : "Delhi, Dhaka and Shanghai"} ${africa.length === 1 ? "is" : "are"} growing fastest.`;

  return (
    <Frame
      title="Megacity race: the world's 10 largest urban areas"
      caption={
        <>
          <p><b>Notice:</b> {notice}</p>
          <p className="mt-1 text-xs text-slate-500">
            Approximate UN World Urbanization Prospects (2018) estimates for whole urban agglomerations{year > 2020 ? "; after 2020 these are projections" : ""}. Only about 25 big cities are tracked here, and city-boundary definitions vary.
          </p>
        </>
      }
    >
      <div className="mb-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        <Choice
          label="Predict first: which city does the UN expect to be the world's largest in 2035?"
          options={[{ id: "tokyo", label: "Tokyo" }, { id: "delhi", label: "Delhi" }, { id: "lagos", label: "Lagos" }, { id: "ny", label: "New York" }]}
          value={guess}
          onChange={setGuess}
        />
        {guess ? (
          <p className="mt-2">
            {guess === "delhi" ? "Correct! " : "Not quite. "}UN projections put Delhi top (about 43 million) as Tokyo&apos;s ageing population slowly shrinks. Drag the slider to 2035 to check.
          </p>
        ) : null}
      </div>

      <Slider label="Year" min={1950} max={2035} step={5} value={year} onChange={setYear} />

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 w-full" role="img" aria-label={`Bar chart of the ten largest cities in ${year}: ${ranked.map((c) => `${c.name} ${c.now.toFixed(1)} million`).join(", ")}`}>
        <line x1={bx(10)} x2={bx(10)} y1={top - 4} y2={top + rowH * 10} stroke="#f59e0b" strokeDasharray="4 3" strokeWidth={1.5} />
        {ranked.map((c, i) => {
          const yy = top + i * rowH;
          return (
            <g key={c.name}>
              <text x={L - 5} y={yy + 15} fontSize={11} textAnchor="end" fill="#334155">{i + 1}. {c.name}</text>
              <rect x={L} y={yy + 3} width={Math.max(1, bx(c.now) - L)} height={rowH - 6} rx={3} fill={CONT_COLOR[c.c]} opacity={c.now >= 10 ? 1 : 0.55} />
              <text x={bx(c.now) + 4} y={yy + 15} fontSize={11} fill="#334155" fontWeight="bold">{c.now.toFixed(1)}m</text>
            </g>
          );
        })}
        {[0, 10, 20, 30, 40].map((v) => (
          <text key={v} x={bx(v)} y={H - 6} fontSize={11} textAnchor="middle" fill={v === 10 ? "#b45309" : "#64748b"}>{v === 10 ? "10m" : `${v}m`}</text>
        ))}
      </svg>

      <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600">
        {(Object.keys(CONT_COLOR) as Continent[]).map((k) => (
          <span key={k} className="flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-sm" style={{ background: CONT_COLOR[k] }} /> {k} ({inTop[k]})
          </span>
        ))}
        <span className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded-sm bg-slate-400 opacity-55" /> paler = under 10m</span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Stat label="Megacities (10m+) worldwide" value={`≈ ${megaCount}`} tone="amber" />
        <Stat label={`Largest city in ${year}`} value={ranked[0].name} tone="indigo" />
      </div>
    </Frame>
  );
}
