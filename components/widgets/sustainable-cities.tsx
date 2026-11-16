"use client";

import { useMemo, useState } from "react";
import { Choice, Frame, Slider, Stat } from "./kit";

/* ------------------------------------------------------------------ */
/* 1. Eco-City Designer: land, energy, transport, water → 3 pillars    */
/* ------------------------------------------------------------------ */

type Density = "low" | "mid" | "high";
type Transport = "car" | "mrt" | "cycle";

const DENSITY: Record<Density, { env: number; econ: number; soc: number; homes: number; label: string }> = {
  low: { env: -8, econ: -3, soc: 2, homes: 0.5, label: "Low-rise houses" },
  mid: { env: 3, econ: 2, soc: 6, homes: 1, label: "Mid-rise (6–12 storeys)" },
  high: { env: 6, econ: 3, soc: 2, homes: 1.6, label: "High-rise (HDB-style)" },
};
const TRANSPORT: Record<Transport, { env: number; econ: number; soc: number; label: string }> = {
  car: { env: -15, econ: 2, soc: -6, label: "Cars & roads" },
  mrt: { env: 8, econ: 4, soc: 8, label: "MRT/BRT spine" },
  cycle: { env: 14, econ: 3, soc: 12, label: "MRT/BRT + cycling" },
};

const clamp = (v: number) => Math.max(0, Math.min(100, Math.round(v)));

/** Spread k "yes" items evenly through n slots (deterministic). */
const spread = (idx: number, k: number, n: number) => n > 0 && Math.floor(((idx + 1) * k) / n) > Math.floor((idx * k) / n);

export function EcoCityDesigner() {
  const [housing, setHousing] = useState(40);
  const [green, setGreen] = useState(20);
  const [industry, setIndustry] = useState(15);
  const [density, setDensity] = useState<Density>("high");
  const [solar, setSolar] = useState(20);
  const [coal, setCoal] = useState(20);
  const [transport, setTransport] = useState<Transport>("car");
  const [newater, setNewater] = useState(false);
  const [desal, setDesal] = useState(false);
  const [recycle, setRecycle] = useState(30);

  const commerce = 100 - housing - green - industry;
  const gas = 100 - solar - coal;

  const r = useMemo(() => {
    const d = DENSITY[density], t = TRANSPORT[transport];
    const homes = housing * d.homes; // index: 40 = enough homes for the planned population
    const water = newater && desal ? 10 : newater || desal ? 6 : -8;
    const env = 50 + 0.8 * (green - 15) - 0.9 * industry + 0.35 * solar - 0.45 * coal + t.env + d.env
      + (newater ? 4 : 0) - (desal ? 4 : 0) + 0.25 * (recycle - 30);
    const econ = 45 + 1.4 * industry - 0.04 * industry * industry + 0.5 * (commerce - 20) - 0.25 * Math.max(0, solar - 25)
      + 0.08 * coal + t.econ + d.econ - (newater ? 2 : 0) - (desal ? 5 : 0) + (newater || desal ? 6 : 0)
      - 0.08 * (recycle - 30) - 0.3 * Math.max(0, green - 30) - (homes < 40 ? 0.3 * (40 - homes) : 0);
    const soc = 45 + 0.6 * (Math.min(green, 35) - 15) - 0.5 * industry - 0.15 * coal
      + (homes < 40 ? -0.8 * (40 - homes) : Math.min(10, 0.2 * (homes - 40))) + t.soc + d.soc + water;
    return { env: clamp(env), econ: clamp(econ), soc: clamp(soc), homes };
  }, [housing, green, industry, density, solar, coal, transport, newater, desal, recycle, commerce]);

  const overall = Math.round((r.env + r.econ + r.soc) / 3);
  const pillars = [
    { name: "Social", v: r.soc, color: "#f59e0b" },
    { name: "Economic", v: r.econ, color: "#0ea5e9" },
    { name: "Environmental", v: r.env, color: "#10b981" },
  ];
  const weakest = [...pillars].sort((a, b) => a.v - b.v)[0];

  const trades: string[] = [];
  if (industry >= 20) trades.push("Lots of industry: jobs and taxes (economic ↑) but air and noise pollution (environmental ↓, social ↓). Keep it downwind, buffered by green space.");
  if (industry <= 5) trades.push("Almost no industry: clean air, but few local jobs, so residents must commute out to work (economic ↓).");
  if (green >= 35) trades.push("Lots of green space: cooler, healthier and soaks up floodwater (environmental & social ↑), but less land for homes and jobs (economic ↓).");
  if (green < 12) trades.push("Little green space: a stronger urban heat island and more flash floods.");
  if (r.homes < 40) trades.push("Not enough homes for the population: housing becomes scarce and unaffordable (social ↓). Build higher or zone more housing.");
  if (density === "low") trades.push("Low-rise houses spread the city out (urban sprawl): more land used, longer trips, more car use.");
  if (coal >= 30) trades.push("Coal is cheap, but it is the dirtiest fuel: the most CO₂ and air pollution per unit of electricity.");
  if (solar >= 40) trades.push("High solar: clean power, but it needs lots of roof and land space plus batteries for night and cloudy days (cost ↑).");
  if (transport === "car") trades.push("Car-based transport: flexible, but brings congestion, emissions and leaves out people who cannot drive.");
  if (transport === "cycle") trades.push("MRT + cycling: low carbon and healthy, but in Singapore's heat the lanes need shade and safe crossings.");
  if (!newater && !desal) trades.push("No water recycling or desalination: the city depends on rain and imports, which is risky in a drought.");
  if (desal) trades.push("Desalination makes fresh water from the sea whatever the weather, but uses a lot of energy (environmental ↓, cost ↑).");
  if (recycle >= 60) trades.push("High recycling: less waste to landfill, but sorting and collection cost money and need everyone to join in.");
  if (recycle < 25) trades.push("Low recycling: more waste burned or landfilled. Singapore's only landfill (Semakau) may be full by about 2035.");

  // ---- city grid: 10 × 10 cells, 1 cell = 1% of the land ----
  const cells = useMemo(() => {
    const all = Array.from({ length: 100 }, (_, k) => ({ r: Math.floor(k / 10), c: k % 10 }));
    const dc = (p: { r: number; c: number }) => Math.hypot(p.r - 4.5, p.c - 4.5) + (p.r * 10 + p.c) * 1e-4;
    const byCentre = [...all].sort((a, b) => dc(a) - dc(b));
    const kind: string[] = Array(100).fill("home");
    const com = byCentre.slice(0, commerce);
    com.forEach((p) => (kind[p.r * 10 + p.c] = "com"));
    const rest = byCentre.slice(commerce);
    const dCorner = (p: { r: number; c: number }) => Math.hypot(p.r - 9, p.c - 9) + p.c * 1e-4;
    const ind = [...rest].sort((a, b) => dCorner(a) - dCorner(b)).slice(0, industry);
    ind.forEach((p) => (kind[p.r * 10 + p.c] = "ind"));
    const left = rest.filter((p) => kind[p.r * 10 + p.c] === "home");
    left.forEach((p, k) => { if (spread(k, green, left.length)) kind[p.r * 10 + p.c] = "green"; });
    return all.map((p, k) => ({ ...p, kind: kind[k] }));
  }, [commerce, industry, green]);

  const S = 24, X0 = 8, Y0 = 34;
  let homeIdx = 0;
  const smoke = coal >= 30 ? "#475569" : coal >= 10 ? "#94a3b8" : "#e2e8f0";
  const legend: [string, string][] = [["#fde68a", "Homes"], ["#bbf7d0", "Green space"], ["#cbd5e1", "Industry"], ["#c7d2fe", "Shops & offices"]];

  return (
    <Frame
      title="Eco-City Designer: plan a city for the Eco City competition"
      caption={<p><b>Notice:</b> your weakest pillar is <b>{weakest.name}</b> ({weakest.v}/100). A sustainable city needs all three pillars, now and for future generations, so a design that scores 90 on one pillar and 30 on another would lose to a balanced one. <i>Simplified scoring model: the numbers show the direction of each trade-off, not exact real values.</i></p>}
    >
      <p className="mb-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900"><b>Predict first:</b> switch transport from cars to MRT/BRT + cycling. Which pillar do you think rises most, and does any pillar lose?</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">1. Land use (shops & offices get the rest: {commerce}%)</p>
          <Slider label="Housing" min={15} max={60} value={housing} onChange={(v) => setHousing(Math.min(v, 95 - green - industry))} suffix="%" color="#d97706" />
          <Slider label="Green space & parks" min={5} max={50} value={green} onChange={(v) => setGreen(Math.min(v, 95 - housing - industry))} suffix="%" color="#16a34a" />
          <Slider label="Industry" min={0} max={30} value={industry} onChange={(v) => setIndustry(Math.min(v, 95 - housing - green))} suffix="%" color="#64748b" />
          <Choice label="Housing density" value={density} onChange={setDensity} options={(Object.keys(DENSITY) as Density[]).map((id) => ({ id, label: DENSITY[id].label }))} />
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">2. Electricity mix (gas makes up the rest: {gas}%)</p>
          <Slider label="Solar" min={0} max={60} value={solar} onChange={(v) => { setSolar(v); setCoal((c) => Math.min(c, 100 - v)); }} suffix="%" color="#ca8a04" />
          <Slider label="Coal" min={0} max={60} value={coal} onChange={(v) => setCoal(Math.min(v, 100 - solar))} suffix="%" color="#475569" />
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">3. Transport, water & waste</p>
          <Choice value={transport} onChange={setTransport} options={(Object.keys(TRANSPORT) as Transport[]).map((id) => ({ id, label: TRANSPORT[id].label }))} />
          <div className="flex flex-wrap gap-2 text-sm">
            {([["NEWater-style recycling", newater, setNewater], ["Desalination plant", desal, setDesal]] as const).map(([lbl, on, set]) => (
              <button key={lbl} type="button" aria-pressed={on} onClick={() => set(!on)} className={`rounded-full px-3 py-1.5 font-semibold ring-1 ${on ? "bg-sky-600 text-white ring-sky-600" : "bg-white text-slate-700 ring-slate-200"}`}>{on ? "✓ " : "+ "}{lbl}</button>
            ))}
          </div>
          <Slider label="Recycling rate" min={10} max={80} value={recycle} onChange={setRecycle} suffix="%" color="#059669" />
        </div>

        <div>
          <svg viewBox="0 0 360 284" className="w-full" role="img" aria-label={`City map: ${housing}% homes, ${green}% green space, ${industry}% industry, ${commerce}% shops and offices, transport ${TRANSPORT[transport].label}`}>
            <rect x={X0} y={8} width={S * 10} height={22} fill="#bae6fd" />
            <text x={X0 + 6} y={23} fontSize="11" fill="#0369a1">Sea</text>
            {newater && <g><rect x={X0 + 40} y={11} width={64} height={16} rx={3} fill="#7c3aed" /><text x={X0 + 72} y={23} fontSize="11" fill="#fff" textAnchor="middle">NEWater</text></g>}
            {desal && <g><rect x={X0 + 112} y={11} width={70} height={16} rx={3} fill="#0284c7" /><text x={X0 + 147} y={23} fontSize="11" fill="#fff" textAnchor="middle">Desal plant</text></g>}
            {cells.map((p) => {
              const x = X0 + p.c * S, y = Y0 + p.r * S;
              if (p.kind === "green") return <g key={`${p.r}-${p.c}`}><rect x={x} y={y} width={S} height={S} fill="#bbf7d0" stroke="#fff" /><circle cx={x + 12} cy={y + 11} r={6} fill="#16a34a" /><rect x={x + 11} y={y + 16} width={2} height={5} fill="#78350f" /></g>;
              if (p.kind === "ind") return <g key={`${p.r}-${p.c}`}><rect x={x} y={y} width={S} height={S} fill="#cbd5e1" stroke="#fff" /><rect x={x + 4} y={y + 12} width={16} height={9} fill="#64748b" /><rect x={x + 15} y={y + 5} width={3} height={8} fill="#475569" /><circle cx={x + 18} cy={y + 4} r={3} fill={smoke} /></g>;
              if (p.kind === "com") return <g key={`${p.r}-${p.c}`}><rect x={x} y={y} width={S} height={S} fill="#c7d2fe" stroke="#fff" /><rect x={x + 6} y={y + 5} width={12} height={16} fill="#6366f1" /></g>;
              const k = homeIdx++;
              const panel = spread(k, solar, 100) || (solar >= 50 && k % 2 === 0);
              const tall = density === "high" ? 17 : density === "mid" ? 11 : 6;
              return (
                <g key={`${p.r}-${p.c}`}>
                  <rect x={x} y={y} width={S} height={S} fill="#fde68a" stroke="#fff" />
                  {density === "low"
                    ? <><rect x={x + 3} y={y + 14} width={7} height={6} fill="#d97706" /><rect x={x + 14} y={y + 14} width={7} height={6} fill="#d97706" /></>
                    : <><rect x={x + 4} y={y + 21 - tall} width={7} height={tall} fill="#d97706" /><rect x={x + 13} y={y + 21 - tall + (density === "high" ? 3 : 0)} width={7} height={tall - (density === "high" ? 3 : 0)} fill="#b45309" /></>}
                  {panel && <rect x={x + 3} y={y + 2} width={10} height={4} fill="#1e3a8a" />}
                </g>
              );
            })}
            {transport === "car" && [3, 6].map((n) => (
              <g key={n} opacity={0.85}>
                <rect x={X0} y={Y0 + n * S - 2} width={S * 10} height={4} fill="#475569" />
                <rect x={X0 + n * S - 2} y={Y0} width={4} height={S * 10} fill="#475569" />
              </g>
            ))}
            {transport !== "car" && (
              <g>
                <line x1={X0} y1={Y0 + 5 * S} x2={X0 + 10 * S} y2={Y0 + 5 * S} stroke="#dc2626" strokeWidth={4} />
                <line x1={X0 + 5 * S} y1={Y0} x2={X0 + 5 * S} y2={Y0 + 10 * S} stroke="#dc2626" strokeWidth={4} />
                {[1.5, 5, 8.5].flatMap((a) => [[a, 5], [5, a]]).map(([cx, cy], i) => <circle key={i} cx={X0 + cx * S} cy={Y0 + cy * S} r={4} fill="#fff" stroke="#dc2626" strokeWidth={2} />)}
              </g>
            )}
            {transport === "cycle" && [2, 8].map((n) => (
              <g key={n}>
                <line x1={X0} y1={Y0 + n * S} x2={X0 + 10 * S} y2={Y0 + n * S} stroke="#15803d" strokeWidth={2.5} strokeDasharray="5 3" />
                <line x1={X0 + n * S} y1={Y0} x2={X0 + n * S} y2={Y0 + 10 * S} stroke="#15803d" strokeWidth={2.5} strokeDasharray="5 3" />
              </g>
            ))}
            <text x={X0 + 10 * S - 2} y={Y0 + 10 * S + 13} fontSize="11" textAnchor="end" fill="#64748b">industry kept in one corner, downwind</text>
            {legend.map(([c, l], i) => (
              <g key={l}><rect x={256} y={40 + i * 22} width={14} height={14} fill={c} /><text x={274} y={51 + i * 22} fontSize="11" fill="#334155">{l}</text></g>
            ))}
            <g><line x1={256} x2={270} y1={135} y2={135} stroke={transport === "car" ? "#475569" : "#dc2626"} strokeWidth={4} /><text x={274} y={139} fontSize="11" fill="#334155">{transport === "car" ? "Main roads" : "MRT/BRT line"}</text></g>
            {transport === "cycle" && <g><line x1={256} x2={270} y1={157} y2={157} stroke="#15803d" strokeWidth={2.5} strokeDasharray="5 3" /><text x={274} y={161} fontSize="11" fill="#334155">Cycle lanes</text></g>}
            <g><rect x={256} y={172} width={14} height={6} fill="#1e3a8a" /><text x={274} y={179} fontSize="11" fill="#334155">Solar roofs</text></g>
            <text x={256} y={204} fontSize="11" fill="#334155">♻ Recycling {recycle}%</text>
            <text x={256} y={222} fontSize="11" fill="#334155">⚡ {solar}% solar</text>
            <text x={256} y={238} fontSize="11" fill="#334155">{gas}% gas, {coal}% coal</text>
          </svg>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Stat label="Overall score" value={`${overall}/100`} tone={overall >= 65 ? "emerald" : overall >= 50 ? "amber" : "rose"} />
            <Stat label="Homes vs need" value={r.homes >= 40 ? "Enough" : "Short"} tone={r.homes >= 40 ? "sky" : "rose"} />
          </div>
          <div className="mt-2 space-y-1.5">
            {pillars.map((p) => (
              <div key={p.name} className="text-sm">
                <div className="flex justify-between font-semibold text-slate-700"><span>{p.name}</span><span className="tabular-nums">{p.v}</span></div>
                <div className="h-2.5 rounded-full bg-slate-200"><div className="h-2.5 rounded-full" style={{ width: `${p.v}%`, background: p.color }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-lg bg-white p-3 ring-1 ring-slate-200">
        <p className="mb-1 text-sm font-bold text-slate-700">Trade-offs in your design</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
          {(trades.length ? trades.slice(0, 4) : ["A balanced design: no big trade-off warnings. Can you explain each choice to the judges?"]).map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Ecological Footprint Calculator: lifestyle → gha → "Earths"      */
/* ------------------------------------------------------------------ */

const BIOCAP = 1.6; // Earth's biocapacity, global hectares per person (approx.)
const DIET = { vegan: { v: 0.7, l: "Vegan" }, veg: { v: 0.9, l: "Vegetarian" }, some: { v: 1.3, l: "Some meat" }, daily: { v: 1.8, l: "Meat every day" } };
const HOME = { hdb3: { v: 0.5, l: "HDB 3-room" }, hdb5: { v: 0.8, l: "HDB 5-room" }, condo: { v: 1.1, l: "Condo" }, landed: { v: 1.8, l: "Landed house" } };
const TRAVEL = { walk: { v: 0.05, l: "Walk / cycle" }, bus: { v: 0.25, l: "Bus & MRT" }, car: { v: 1.0, l: "Family car" } };
const WASTE = { low: { v: 0.4, l: "Low: buy little, recycle" }, avg: { v: 0.7, l: "Average" }, high: { v: 1.1, l: "High: lots of new stuff" } };
const SHARED = 1.5; // roads, schools, hospitals, government, imported goods: shared by everyone in Singapore
const COMPARE = [
  { l: "India", v: 1.0 }, { l: "World avg", v: 2.6 }, { l: "Singapore", v: 5.5 }, { l: "USA", v: 7.5 },
];

function earthWedge(cx: number, cy: number, r: number, f: number) {
  if (f >= 0.999) return null;
  const a = 2 * Math.PI * f - Math.PI / 2;
  const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
  return `M${cx},${cy} L${cx},${cy - r} A${r},${r} 0 ${f > 0.5 ? 1 : 0} 1 ${x.toFixed(2)},${y.toFixed(2)} Z`;
}

export function FootprintCalculator() {
  const [diet, setDiet] = useState<keyof typeof DIET>("some");
  const [home, setHome] = useState<keyof typeof HOME>("hdb5");
  const [travel, setTravel] = useState<keyof typeof TRAVEL>("bus");
  const [waste, setWaste] = useState<keyof typeof WASTE>("avg");
  const [shortF, setShortF] = useState(1);
  const [longF, setLongF] = useState(0);
  const [guess, setGuess] = useState<"" | "1" | "2" | "3-4" | "5+">("");

  // Simplified model. 1 return short-haul flight (e.g. SG–Bangkok) ≈ 0.5 t CO₂ ≈ 0.15 gha;
  // 1 return long-haul flight (e.g. SG–London) ≈ 2.5–3 t CO₂ ≈ 0.8 gha.
  const parts = [
    { l: "Food", v: DIET[diet].v, c: "#f59e0b" },
    { l: "Home energy", v: HOME[home].v, c: "#ef4444" },
    { l: "Transport", v: TRAVEL[travel].v, c: "#6366f1" },
    { l: "Flights", v: shortF * 0.15 + longF * 0.8, c: "#0ea5e9" },
    { l: "Stuff & waste", v: WASTE[waste].v, c: "#a855f7" },
    { l: "Shared services", v: SHARED, c: "#94a3b8" },
  ];
  const total = parts.reduce((s, p) => s + p.v, 0);
  const earths = total / BIOCAP;
  const biggest = parts.slice(0, 5).sort((a, b) => b.v - a.v)[0];

  const bars = [{ l: "You", v: total }, ...COMPARE];
  const W = 360, L = 34, B = 168, T = 18;
  const max = Math.max(9, Math.ceil(total));
  const yy = (v: number) => B - (v / max) * (B - T);
  const bw = 46, gap = (W - L - 8 - bw * bars.length) / bars.length;

  const nEarth = Math.min(8, Math.ceil(earths));
  const sgEarths = 5.5 / BIOCAP;

  return (
    <Frame
      title="Ecological Footprint Calculator: how many Earths?"
      caption={<p><b>Notice:</b> your biggest personal slice is <b>{biggest.l}</b> ({biggest.v.toFixed(1)} gha). Even with the greenest choices, the grey &quot;shared services&quot; slice stays: it depends on how the whole city is built and powered. That is why city design (try the Eco-City Designer) matters as much as personal choices. <i>Simplified model; country figures are approximate (Global Footprint Network data, recent years).</i></p>}
    >
      <div className="mb-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
        <p className="mb-1"><b>Predict first:</b> if everyone on Earth lived like the average Singaporean, how many Earths would we need?</p>
        <Choice value={guess} onChange={setGuess} options={[{ id: "1", label: "1" }, { id: "2", label: "2" }, { id: "3-4", label: "3–4" }, { id: "5+", label: "5+" }]} />
        {guess && <p className="mt-1">{guess === "3-4" ? "Correct! " : "Not quite. "}About 5.5 gha ÷ 1.6 gha ≈ <b>{sgEarths.toFixed(1)} Earths</b> (approximate).</p>}
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-3">
          <Choice label="Diet" value={diet} onChange={setDiet} options={(Object.keys(DIET) as (keyof typeof DIET)[]).map((id) => ({ id, label: DIET[id].l }))} />
          <Choice label="Home" value={home} onChange={setHome} options={(Object.keys(HOME) as (keyof typeof HOME)[]).map((id) => ({ id, label: HOME[id].l }))} />
          <Choice label="Daily travel" value={travel} onChange={setTravel} options={(Object.keys(TRAVEL) as (keyof typeof TRAVEL)[]).map((id) => ({ id, label: TRAVEL[id].l }))} />
          <Slider label="Short-haul return flights a year (≤ 4 h)" min={0} max={8} value={shortF} onChange={setShortF} color="#0ea5e9" />
          <Slider label="Long-haul return flights a year" min={0} max={4} value={longF} onChange={setLongF} color="#0369a1" />
          <Choice label="Shopping & waste" value={waste} onChange={setWaste} options={(Object.keys(WASTE) as (keyof typeof WASTE)[]).map((id) => ({ id, label: WASTE[id].l }))} />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Your footprint" value={`${total.toFixed(1)} gha`} tone={total <= 2.6 ? "emerald" : total <= 5 ? "amber" : "rose"} />
            <Stat label="Earths needed" value={earths.toFixed(1)} tone={earths <= 1.05 ? "emerald" : "rose"} />
          </div>
          <svg viewBox="0 0 360 62" className="mt-2 w-full" role="img" aria-label={`${earths.toFixed(1)} Earths would be needed if everyone lived like you`}>
            {Array.from({ length: nEarth }).map((_, i) => {
              const f = Math.min(1, earths - i), cx = 22 + i * 44, cy = 26;
              const wedge = earthWedge(cx, cy, 18, f);
              return (
                <g key={i}>
                  <circle cx={cx} cy={cy} r={18} fill={wedge ? "#e2e8f0" : "#38bdf8"} stroke="#0369a1" />
                  {wedge && <path d={wedge} fill="#38bdf8" />}
                  {!wedge && <path d={`M${cx - 9},${cy - 6} q6,-6 10,0 q-2,6 -8,8 z M${cx + 3},${cy + 4} q6,-2 7,4 q-5,4 -8,0 z`} fill="#22c55e" />}
                </g>
              );
            })}
            {earths > 8 && <text x={356} y={30} fontSize="12" textAnchor="end" fill="#be123c">+ more</text>}
            <text x={4} y={58} fontSize="11" fill="#64748b">Each globe = one Earth&apos;s worth of land and sea</text>
          </svg>
          <svg viewBox="0 0 360 46" className="mt-1 w-full" role="img" aria-label="Stacked bar showing your footprint broken down by category">
            {(() => { let x = 4; return parts.map((p) => { const w = (p.v / Math.max(total, 0.01)) * 352; const el = <rect key={p.l} x={x} y={4} width={w} height={14} fill={p.c} />; x += w; return el; }); })()}
            {parts.map((p, i) => (
              <g key={p.l}><rect x={4 + (i % 3) * 120} y={i < 3 ? 22 : 32} width={8} height={8} fill={p.c} /><text x={15 + (i % 3) * 120} y={i < 3 ? 30 : 40} fontSize="11" fill="#475569">{p.l} {p.v.toFixed(1)}</text></g>
            ))}
          </svg>
        </div>
      </div>
      <svg viewBox="0 0 360 196" className="mt-3 w-full" role="img" aria-label={`Bar chart comparing your ${total.toFixed(1)} gha footprint with India about 1.0, world average about 2.6, Singapore about 5.5 and USA about 7.5 gha; Earth's biocapacity is about 1.6 gha per person`}>
        <line x1={L} y1={B} x2={W - 4} y2={B} stroke="#94a3b8" />
        {[0, 3, 6, 9].filter((v) => v <= max).map((v) => <text key={v} x={L - 4} y={yy(v) + 4} fontSize="11" textAnchor="end" fill="#64748b">{v}</text>)}
        {bars.map((b, i) => {
          const x = L + gap / 2 + i * (bw + gap);
          return (
            <g key={b.l}>
              <rect x={x} y={yy(b.v)} width={bw} height={B - yy(b.v)} rx={3} fill={i === 0 ? "#6366f1" : b.v > BIOCAP ? "#fda4af" : "#86efac"} />
              <text x={x + bw / 2} y={yy(b.v) - 4} fontSize="11" fontWeight="bold" textAnchor="middle" fill="#1e293b">{i === 0 ? b.v.toFixed(1) : `≈${b.v.toFixed(1)}`}</text>
              <text x={x + bw / 2} y={B + 14} fontSize="11" textAnchor="middle" fill="#475569">{b.l}</text>
            </g>
          );
        })}
        <line x1={L} x2={W - 4} y1={yy(BIOCAP)} y2={yy(BIOCAP)} stroke="#15803d" strokeDasharray="5 4" strokeWidth={1.5} />
        <text x={W - 6} y={yy(BIOCAP) - 4} fontSize="11" textAnchor="end" fill="#15803d" stroke="#fff" strokeWidth={3} paintOrder="stroke">Earth&apos;s share ≈ 1.6 gha each</text>
        <text x={L} y={192} fontSize="11" fill="#64748b">gha per person (global hectares)</text>
      </svg>
    </Frame>
  );
}
