"use client";

import { useMemo, useState } from "react";
import { Choice, Frame, Slider, Stat } from "./kit";

/* ------------------------------------------------------------------ */
/* 1. Lagos Commute Challenge: home + mode + time → journey to Lagos Island */
/* ------------------------------------------------------------------ */

type Home = "ikorodu" | "makoko" | "lekki" | "ikeja";
type Mode = "danfo" | "okada" | "brt" | "rail" | "car";
type Time = "early" | "rush" | "midday" | "evening";
type Range = [number, number] | null;

const HOMES: Record<Home, {
  label: string; km: number; free: number; s: number; access: number; accessHow: string;
  cost: Record<"danfo" | "brt" | "rail" | "car", Range>; route: [number, number][]; pin: [number, number];
}> = {
  ikorodu: { label: "Ikorodu", km: 35, free: 40, s: 1.2, access: 8, accessHow: "walk to the bus stop",
    cost: { danfo: [1000, 1500], brt: [700, 1000], rail: null, car: [4000, 7000] },
    route: [[300, 42], [230, 54], [170, 72], [140, 93], [122, 170], [124, 180]], pin: [300, 42] },
  makoko: { label: "Makoko", km: 8, free: 15, s: 0.9, access: 12, accessHow: "canoe to the shore, then walk",
    cost: { danfo: [300, 600], brt: [300, 500], rail: null, car: [1500, 3000] },
    route: [[113, 128], [100, 136], [97, 160], [110, 176], [121, 181]], pin: [113, 128] },
  lekki: { label: "Lekki (Ajah)", km: 25, free: 30, s: 1.2, access: 8, accessHow: "walk to the bus stop",
    cost: { danfo: [800, 1300], brt: null, rail: null, car: [3500, 6500] },
    route: [[290, 190], [230, 187], [178, 189], [152, 185], [128, 182]], pin: [290, 190] },
  ikeja: { label: "Ikeja", km: 22, free: 30, s: 1.1, access: 8, accessHow: "walk to the bus stop or station",
    cost: { danfo: [700, 1200], brt: [600, 900], rail: [1200, 1800], car: [3500, 6000] },
    route: [[60, 40], [95, 74], [140, 93], [122, 170], [124, 180]], pin: [60, 40] },
};

const TIMES: Record<Time, { label: string; tf: number; wait: number }> = {
  early: { label: "5 am (early)", tf: 1.0, wait: 8 },
  rush: { label: "7–9 am rush", tf: 2.6, wait: 25 },
  midday: { label: "Midday", tf: 1.6, wait: 12 },
  evening: { label: "6 pm", tf: 2.0, wait: 18 },
};

const MODE_LABEL: Record<Mode, string> = { danfo: "Danfo minibus", okada: "Okada motorbike", brt: "BRT bus", rail: "Metro rail", car: "Private car" };
const RAIL_PATH: [number, number][] = [[98, 148], [110, 170], [122, 181]]; // bus from Oyingbo station to the Island
const MIN_WAGE = 70000; // Nigeria's national minimum wage from 2024, naira per month

/** Journey time in minutes, or null if the mode is not possible from this home. Simplified model. */
function journey(home: Home, mode: Mode, time: Time): number | null {
  const h = HOMES[home], t = TIMES[time];
  const m = 1 + (t.tf - 1) * h.s; // road congestion multiplier on this corridor
  if (mode === "okada") return null; // banned on the Lagos Island end of every route since 2022
  if (mode === "car") return h.free * m + 5;
  if (mode === "danfo") return h.free * 1.2 * m + h.access + Math.round(t.wait * 0.6);
  if (mode === "brt") return h.cost.brt ? h.free * 1.1 * (1 + (t.tf - 1) * 0.35) + h.access + t.wait : null;
  // rail: only Ikeja is near a station (Red Line to Oyingbo), then a bus over the bridge to the Island
  return h.cost.rail ? h.access + 10 + 25 + 12 * (1 + (t.tf - 1)) : null;
}

const fmtTime = (min: number) => { const r = Math.round(min / 5) * 5; return r < 60 ? `${r} min` : `${Math.floor(r / 60)} h${r % 60 ? ` ${r % 60} min` : ""}`; };
const naira = (n: number) => `₦${(Math.round(n / 50) * 50).toLocaleString()}`;

function pointAt(pts: [number, number][], f: number): [number, number] {
  const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
  let d = f * seg.reduce((a, b) => a + b, 0);
  for (let i = 0; i < seg.length; i++) {
    if (d <= seg[i]) { const k = d / seg[i]; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * k, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * k]; }
    d -= seg[i];
  }
  return pts[pts.length - 1];
}

export function CommuteChallenge() {
  const [home, setHome] = useState<Home>("ikorodu");
  const [mode, setMode] = useState<Mode>("danfo");
  const [time, setTime] = useState<Time>("rush");
  const h = HOMES[home], t = TIMES[time];

  const mins = journey(home, mode, time);
  const m = 1 + (t.tf - 1) * h.s;
  const meter = Math.round(10 + 90 * Math.min(1, (m - 1) / 2.2));
  const meterColor = meter < 35 ? "#16a34a" : meter < 65 ? "#d97706" : "#dc2626";
  const all = useMemo(() => (["danfo", "brt", "rail", "car"] as Mode[])
    .map((md) => ({ md, v: journey(home, md, time) }))
    .filter((x): x is { md: Mode; v: number } => x.v !== null)
    .sort((a, b) => a.v - b.v), [home, time]);

  const peak = time === "rush" || time === "evening";
  const base = mode === "okada" ? null : h.cost[mode];
  const cost: Range = base ? (mode === "danfo" && peak ? [base[0] * 1.3, base[1] * 1.3] : mode === "car" ? [base[0] * (0.85 + 0.15 * m), base[1] * (0.85 + 0.15 * m)] : base) : null;
  const share = cost ? Math.round((((cost[0] + cost[1]) / 2) * 2 * 22) / MIN_WAGE * 100) : null;

  const pathD = (pts: [number, number][]) => pts.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
  const route: [number, number][] = mode === "rail" && h.cost.rail ? RAIL_PATH : h.route;
  const nCars = mode === "rail" && h.cost.rail ? 0 : Math.round(meter / 12) + 1;

  let why: string;
  if (mode === "okada") why = `Okadas cannot take you to Lagos Island: the state banned commercial motorbikes in 6 local government areas (including Lagos Island, Ikeja and Eti-Osa/Lekki) in June 2022 and in 4 more in September 2022, because of crashes and crime. ${home === "ikorodu" ? "In Ikorodu they are still used for the 'first mile' to a bus stop. " : ""}Thousands of riders lost their main income.`;
  else if (mins === null) why = mode === "brt" ? "There is no BRT lane on the Lekki–Epe Expressway yet, so Lekki commuters squeeze onto ordinary buses and danfos in the same traffic." : `No rail line serves ${h.label} yet. The Blue Line (2023) runs from Mile 2 to Marina and the Red Line (2024) from Agbado through Ikeja to Oyingbo: about 40 km of track for a city of 15–20+ million.`;
  else if (mode === "brt") why = "BRT buses run in their own lane (Lagos opened sub-Saharan Africa's first BRT in 2008), so they dodge most of the go-slow, but at rush hour the queue at the terminal can take longer than the ride.";
  else if (mode === "rail") why = "The Red Line train from Ikeja is never stuck in traffic, but it stops at Oyingbo on the mainland: the last few kilometres over the bridge are by bus, back in the go-slow. Rail works best when lines join up.";
  else if (mode === "car") why = "Most Lagosians cannot afford a car. A car usually carries one or two people, while a danfo, only about twice as long, squeezes in 14–18, so cars use road space least efficiently.";
  else why = "Danfos are cheap, go almost everywhere and need no timetable, but they stop anywhere to pick up passengers, which slows everyone, and conductors raise fares in go-slows and rain.";

  const best = all[0];
  return (
    <Frame title="Lagos Commute Challenge: get to Lagos Island" caption={
      <>
        <p><b>Notice:</b> {why}</p>
        {best && <p className="mt-1">From {h.label} at {t.label.toLowerCase()}, the fastest legal option is the <b>{MODE_LABEL[best.md].toLowerCase()}</b> (≈{fmtTime(best.v)}). {time === "rush" ? "Many Lagosians leave home before 5 am to beat the go-slow: try the early slot." : time === "early" ? "The roads are clear now, but by 7 am millions of commuters are funnelled onto a few bridges from the mainland to the islands." : ""}</p>}
        <p className="mt-1 text-xs text-slate-500">Simplified model: times and costs are rough estimates (2024–25 prices; Nigerian fares and fuel prices change fast). Real journeys vary with rain, crashes, police checks and fuel queues.</p>
      </>
    }>
      <p className="mb-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900"><b>Predict first:</b> from Ikorodu in the 7–9 am rush, which is fastest: a car, a danfo or the BRT?</p>
      <div className="space-y-2">
        <Choice label="Home" value={home} onChange={setHome} options={(Object.keys(HOMES) as Home[]).map((id) => ({ id, label: HOMES[id].label }))} />
        <Choice label="Travel mode" value={mode} onChange={setMode} options={(Object.keys(MODE_LABEL) as Mode[]).map((id) => ({ id, label: MODE_LABEL[id] }))} />
        <Choice label="Leave at" value={time} onChange={setTime} options={(Object.keys(TIMES) as Time[]).map((id) => ({ id, label: TIMES[id].label }))} />
      </div>

      <svg viewBox="0 0 360 240" className="mt-3 w-full rounded-xl" role="img" aria-label={`Sketch map of Lagos showing the route from ${h.label} to Lagos Island across the lagoon; go-slow traffic level ${meter} out of 100`}>
        <rect width="360" height="240" fill="#fef3c7" />
        <path d="M110,170 C105,140 110,110 135,95 C170,75 230,72 290,78 C320,80 345,72 360,70 L360,170 C320,172 260,170 220,172 C190,173 165,172 110,170 Z" fill="#bae6fd" />
        <path d="M94,166 L112,166 L112,192 L150,192 L150,172 L153,172 L153,206 L94,206 Z" fill="#bae6fd" />
        <rect x="0" y="206" width="360" height="34" fill="#7dd3fc" />
        <text x="250" y="228" fontSize="11" fill="#075985" fontStyle="italic">Atlantic Ocean</text>
        <text x="215" y="125" fontSize="11" fill="#075985" fontStyle="italic">Lagos Lagoon</text>
        <text x="8" y="120" fontSize="11" fill="#78350f">MAINLAND</text>
        <path d="M45,12 L60,40 L80,100 L98,148" fill="none" stroke="#dc2626" strokeWidth={mode === "rail" ? 3 : 1.5} strokeDasharray="5 3" opacity={mode === "rail" ? 1 : 0.55} />
        <path d="M30,186 L94,189 L122,184" fill="none" stroke="#2563eb" strokeWidth={mode === "rail" ? 3 : 1.5} strokeDasharray="5 3" opacity={mode === "rail" ? 1 : 0.55} />
        <text x="4" y="200" fontSize="11" fill="#1d4ed8">Blue Line</text>
        <text x="64" y="145" fontSize="11" fill="#b91c1c">Red Line</text>
        <line x1="140" y1="93" x2="122" y2="171" stroke="#475569" strokeWidth="3" />
        <text x="138" y="140" fontSize="11" fill="#334155">3rd Mainland Br.</text>
        <path d={pathD(route)} fill="none" stroke={mode === "okada" || mins === null ? "#94a3b8" : meterColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        {Array.from({ length: nCars }, (_, i) => { const [x, y] = pointAt(route, (i + 0.5) / nCars); return <rect key={i} x={x - 3} y={y - 2} width="6" height="4" rx="1" fill="#1e293b" />; })}
        <ellipse cx="128" cy="181" rx="16" ry="8" fill="#fde68a" stroke="#b45309" />
        <text x="104" y="203" fontSize="11" fontWeight="bold" fill="#7c2d12">Lagos Island</text>
        <text x="160" y="200" fontSize="11" fill="#78350f">V.I.</text>
        {(Object.keys(HOMES) as Home[]).map((id) => (
          <g key={id}>
            <circle cx={HOMES[id].pin[0]} cy={HOMES[id].pin[1]} r={id === home ? 6 : 4} fill={id === home ? "#4f46e5" : "#64748b"} stroke="#fff" strokeWidth="1.5" />
            <text x={HOMES[id].pin[0] + (id === "makoko" ? -60 : id === "lekki" ? -20 : 8)} y={HOMES[id].pin[1] + (id === "lekki" ? -8 : id === "ikorodu" ? -6 : 4)} fontSize="11" fontWeight={id === home ? "bold" : "normal"} fill="#1e293b">{HOMES[id].label}</text>
          </g>
        ))}
        <g transform="translate(8,208)">
          <text x="0" y="10" fontSize="11" fontWeight="bold" fill="#1e293b">Go-slow meter</text>
          <rect x="0" y="15" width="100" height="9" rx="4" fill="#e2e8f0" />
          <rect x="0" y="15" width={meter} height="9" rx="4" fill={meterColor} />
        </g>
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Journey time" value={mins === null ? "—" : `≈${fmtTime(mins)}`} tone={mins === null ? "rose" : "indigo"} />
        <Stat label="Cost (approx.)" value={cost ? `${naira(cost[0])}–${naira(cost[1])}` : "—"} tone="amber" />
        <Stat label="Go-slow" value={`${meter}/100`} tone={meter < 35 ? "emerald" : meter < 65 ? "amber" : "rose"} />
        <Stat label="Month vs min. wage" value={share === null ? "—" : `≈${share}%`} tone="sky" />
      </div>
      <p className="mt-2 text-xs text-slate-500">
        {h.label}: about {h.km} km by road; first you {h.accessHow}. &quot;Month vs min. wage&quot; = 22 working days × 2 trips, compared with the ₦70,000 national minimum wage (2024).
      </p>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Push–Pull to Lagos: a migrant's decision + Lagos growth since 1950 */
/* ------------------------------------------------------------------ */

type Factor = { id: string; label: string; w: number; note: string };
const PUSH: Factor[] = [
  { id: "drought", label: "Drought", w: 25, note: "rains failing and land turning to desert in the dry north" },
  { id: "conflict", label: "Conflict", w: 35, note: "Boko Haram attacks (since about 2009) have driven over 2 million people from their homes" },
  { id: "income", label: "Low farm income", w: 20, note: "small farms earn little and crop prices swing" },
  { id: "school", label: "No school", w: 15, note: "few secondary schools, clinics or electricity in the village" },
];
const PULL: Factor[] = [
  { id: "jobs", label: "Jobs", w: 30, note: "factories, markets, building sites and the huge informal economy" },
  { id: "port", label: "Port", w: 15, note: "Apapa, Tin Can and Lekki ports handle most of Nigeria's sea trade" },
  { id: "nolly", label: "Nollywood", w: 10, note: "the film and music industry promises creative work and fame" },
  { id: "family", label: "Family", w: 25, note: "relatives already in Lagos offer a bed and job tips (chain migration)" },
];
const OBSTACLE = 20; // distance (1,000+ km), bus fare, no housing waiting in Lagos

// Lagos urban area, millions. UN estimates (World Urbanization Prospects); lo/hi = spread of estimates
// (UN-type figures at the low end, Lagos State government figures at the high end). Approximate.
const POP: { y: number; un: number; lo: number; hi: number }[] = [
  { y: 1950, un: 0.33, lo: 0.3, hi: 0.35 }, { y: 1960, un: 0.76, lo: 0.7, hi: 0.8 }, { y: 1970, un: 1.4, lo: 1.3, hi: 1.5 },
  { y: 1980, un: 2.6, lo: 2.4, hi: 2.9 }, { y: 1990, un: 4.8, lo: 4.5, hi: 5.7 }, { y: 2000, un: 7.3, lo: 6.5, hi: 9 },
  { y: 2010, un: 10.4, lo: 9.5, hi: 15 }, { y: 2020, un: 14.4, lo: 13, hi: 21 }, { y: 2025, un: 17, lo: 15, hi: 22 },
];
const EVENTS: [number, string][] = [
  [1950, "Lagos is a colonial port town of about 300,000."], [1960, "Independence: Lagos is the capital; government jobs pull people in."],
  [1970, "Oil boom: oil money pours into Lagos; building and port jobs boom."], [1985, "Economic crisis: farm incomes fall, pushing rural people out."],
  [1991, "The capital moves to Abuja, yet Lagos keeps growing: jobs matter more than government."], [2005, "Mobile phones, banks and Nollywood boom."],
  [2009, "Boko Haram insurgency in the north-east forces millions from their homes."], [2020, "Tech start-ups, the Blue Line (2023) and Lekki Deep Sea Port (2023)."],
];

const fmtM = (v: number) => (v < 10 ? v.toFixed(1) : v.toFixed(0));

function popAt(year: number, key: "un" | "lo" | "hi") {
  const i = Math.max(0, POP.findIndex((p) => p.y >= year) - 1);
  const a = POP[i], b = POP[Math.min(i + 1, POP.length - 1)];
  if (a.y === b.y || year <= a.y) return a[key];
  return a[key] * Math.pow(b[key] / a[key], (year - a.y) / (b.y - a.y)); // geometric interpolation
}

export function PushPullLagos() {
  const [on, setOn] = useState<Record<string, boolean>>({ income: true, jobs: true });
  const [year, setYear] = useState(2025);
  const toggle = (id: string) => setOn((o) => ({ ...o, [id]: !o[id] }));

  const push = PUSH.filter((f) => on[f.id]).reduce((s, f) => s + f.w, 0);
  const pull = PULL.filter((f) => on[f.id]).reduce((s, f) => s + f.w, 0);
  const score = Math.min(100, Math.max(0, push + pull - OBSTACLE));
  const verdict = score >= 55 ? "Very likely to move to Lagos" : score >= 25 ? "Thinking about it" : "Likely to stay";
  const forced = on.conflict;

  let note: string;
  if (!push && !pull) note = "With nothing pushing or pulling, Musa stays. Most rural Nigerians never move: migration needs a reason strong enough to beat the obstacles.";
  else if (push && !pull) note = `Musa is pushed (${PUSH.filter((f) => on[f.id]).map((f) => f.note).join("; ")}) but nothing pulls him to Lagos, over 1,000 km away. He is more likely to go to a nearer town first (step migration)${forced ? " or a camp for internally displaced people (IDPs)" : ""}.`;
  else if (!push && pull) note = `Even with no push, Lagos pulls: ${PULL.filter((f) => on[f.id]).map((f) => f.note).join("; ")}. ${score < 25 ? "But the pull alone may not beat the cost and distance." : ""}`;
  else note = `Push and pull work together: the strongest migration happens when life at home gets harder AND the city offers something. ${on.family ? "Having family in Lagos is a big deal: a free bed and job tips lower the obstacles." : "Try turning on Family: who would Musa stay with on his first night?"}`;

  const W = 360, H = 190, L = 40, R = 350, T = 12, B = 160, maxP = 24;
  const x = (y: number) => L + ((y - 1950) / 75) * (R - L);
  const yy = (v: number) => B - (v / maxP) * (B - T);
  const band = [...POP.map((p) => `${x(p.y)},${yy(p.hi)}`), ...[...POP].reverse().map((p) => `${x(p.y)},${yy(p.lo)}`)].join(" ");
  const line = POP.map((p, i) => `${i ? "L" : "M"}${x(p.y)},${yy(p.un)}`).join(" ");
  const now = popAt(year, "un");
  const prev = popAt(Math.max(1950, year - 10), "un");
  const growth = year > 1950 ? (Math.pow(now / prev, 1 / Math.min(10, year - 1950)) - 1) * 100 : 0;
  const event = [...EVENTS].reverse().find(([y]) => y <= year)?.[1] ?? "";

  const chip = (f: Factor, kind: "push" | "pull") => (
    <button key={f.id} type="button" aria-pressed={!!on[f.id]} onClick={() => toggle(f.id)}
      className={`rounded-full px-3 py-1.5 text-sm font-semibold ring-1 transition ${on[f.id] ? (kind === "push" ? "bg-rose-600 text-white ring-rose-600" : "bg-emerald-600 text-white ring-emerald-600") : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50"}`}>
      {on[f.id] ? "✓ " : ""}{f.label}
    </button>
  );

  return (
    <Frame title="Push–Pull to Lagos: will Musa move?" caption={
      <>
        <p><b>Notice:</b> {note}</p>
        <p className="mt-1">{year > 1950 ? `Lagos grew about ${Math.round(now / 0.33)}× between 1950 and ${year}. ` : ""}{event}</p>
        <p className="mt-1 text-xs text-slate-500">Simplified model: factor weights are illustrative, not measured. Population figures are approximate: the UN estimates about 15–17 million for the urban area today, while the Lagos State government says over 20 million, so geographers quote a range (shaded).</p>
      </>
    }>
      <p className="mb-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900"><b>Predict first:</b> Musa, 18, farms with his family in north-east Nigeria. Which do you think matters more for his decision: a push at home or a pull in Lagos?</p>
      <p className="text-sm font-medium text-slate-700">Push factors (village)</p>
      <div className="mt-1 flex flex-wrap gap-2">{PUSH.map((f) => chip(f, "push"))}</div>
      <p className="mt-2 text-sm font-medium text-slate-700">Pull factors (Lagos)</p>
      <div className="mt-1 flex flex-wrap gap-2">{PULL.map((f) => chip(f, "pull"))}</div>

      <svg viewBox="0 0 360 120" className="mt-3 w-full" role="img" aria-label={`Migration diagram: push strength ${push}, pull strength ${pull}, obstacles ${OBSTACLE}; verdict: ${verdict}`}>
        <rect x="4" y="20" width="110" height="80" rx="10" fill="#fff1f2" stroke="#fda4af" />
        <text x="59" y="38" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#9f1239">Village</text>
        <text x="59" y="54" fontSize="11" textAnchor="middle" fill="#9f1239">north-east Nigeria</text>
        <text x="59" y="80" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#be123c">push {push}</text>
        <rect x="246" y="20" width="110" height="80" rx="10" fill="#ecfdf5" stroke="#6ee7b7" />
        <text x="301" y="38" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#065f46">Lagos</text>
        <text x="301" y="54" fontSize="11" textAnchor="middle" fill="#065f46">megacity</text>
        <text x="301" y="80" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#047857">pull {pull}</text>
        <line x1="118" y1="60" x2={score > 0 ? 232 : 140} y2="60" stroke={score >= 55 ? "#4f46e5" : score >= 25 ? "#a5b4fc" : "#cbd5e1"} strokeWidth={3 + score / 5} strokeLinecap="round" />
        {score > 0 && <polygon points="244,60 228,48 228,72" fill={score >= 55 ? "#4f46e5" : "#a5b4fc"} />}
        <rect x="176" y="36" width="8" height="48" fill="#78716c" />
        <text x="180" y="30" fontSize="11" textAnchor="middle" fill="#57534e">obstacles</text>
        <text x="180" y="100" fontSize="11" textAnchor="middle" fill="#57534e">1,000+ km, fares</text>
        <text x="180" y="116" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#3730a3">{verdict}</text>
      </svg>
      <div className="mt-1 grid grid-cols-2 gap-2">
        <Stat label="Decision score" value={`${score}/100`} tone={score >= 55 ? "indigo" : score >= 25 ? "amber" : "emerald"} />
        <Stat label="Type of migration" value={!push && !pull ? "—" : forced ? "Forced" : "Voluntary"} tone={forced ? "rose" : "sky"} />
      </div>

      <p className="mt-4 text-sm font-bold text-slate-700">Lagos population, 1950 → today (millions)</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-1 w-full" role="img" aria-label={`Line chart of Lagos population from about 0.3 million in 1950 to about 15–22 million in 2025; in ${year} about ${now.toFixed(1)} million`}>
        <line x1={L} y1={B} x2={R} y2={B} stroke="#94a3b8" />
        <line x1={L} y1={T} x2={L} y2={B} stroke="#94a3b8" />
        {[0, 5, 10, 15, 20].map((v) => (
          <g key={v}><line x1={L} y1={yy(v)} x2={R} y2={yy(v)} stroke="#e2e8f0" /><text x={L - 5} y={yy(v) + 4} fontSize="11" textAnchor="end" fill="#64748b">{v}</text></g>
        ))}
        {[1950, 1970, 1990, 2010, 2025].map((y) => <text key={y} x={x(y)} y={B + 15} fontSize="11" textAnchor="middle" fill="#64748b">{y}</text>)}
        <polygon points={band} fill="#c7d2fe" opacity="0.7" />
        <path d={line} fill="none" stroke="#4f46e5" strokeWidth="2.5" />
        <line x1={x(year)} y1={T} x2={x(year)} y2={B} stroke="#f59e0b" strokeDasharray="3 3" />
        <circle cx={x(year)} cy={yy(now)} r="5" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
        <text x={x(year) > 250 ? x(year) - 8 : x(year) + 8} y={yy(now) - 8} fontSize="11" fontWeight="bold" textAnchor={x(year) > 250 ? "end" : "start"} fill="#92400e">≈{now.toFixed(1)} m</text>
        <text x={L + 6} y={T + 12} fontSize="11" fill="#4338ca">— UN estimate</text>
        <text x={L + 6} y={T + 26} fontSize="11" fill="#6366f1">▒ range of estimates</text>
      </svg>
      <Slider label="Year" min={1950} max={2025} step={5} value={year} onChange={setYear} color="#d97706" />
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Stat label={`Population ${year}`} value={year >= 1990 ? `${fmtM(popAt(year, "lo"))}–${fmtM(popAt(year, "hi"))} m` : `≈${fmtM(now)} m`} tone="indigo" />
        <Stat label="Growth per year (last 10 yrs)" value={year > 1950 ? `≈${growth.toFixed(1)}%` : "—"} tone="amber" />
      </div>
    </Frame>
  );
}
