"use client";

import { useMemo, useState } from "react";
import { Choice, Frame, Slider, Stat, Stepper } from "./kit";

/* ───────────────────────── 1. Antarctic Landing Planner ───────────────────────── */

/** Simplified model. Rules from IAATO guidelines (rounded for teaching):
 *  ships carrying > 500 passengers may not land anyone; ≤ 100 people ashore at one site at a time;
 *  keep about 5 m from wildlife; ~1 guide per 20 passengers ashore; biosecurity cleaning before every landing.
 *  Timing: each group spends ~1 h ashore + ~15 min zodiac change-over = 1.25 h per shift. */
const SHIFT_H = 1.25;
const DAY_H = 12;

export function LandingPlanner() {
  const [pax, setPax] = useState(200);
  const [sites, setSites] = useState(2);
  const [group, setGroup] = useState(100);
  const [dist, setDist] = useState(5);
  const [bio, setBio] = useState<"yes" | "no">("yes");

  const r = useMemo(() => {
    const cruiseOnly = pax > 500;
    const shifts = Math.ceil(pax / group);
    const hours = cruiseOnly ? 0 : sites * shifts * SHIFT_H;
    const guides = Math.ceil(group / 20);
    const rules = [
      { ok: !cruiseOnly, text: `Ship size: ${pax} passengers ${cruiseOnly ? "> 500 — cruise only, nobody may land" : "≤ 500 — landings allowed"}` },
      { ok: group <= 100, text: `${group} people ashore at once ${group <= 100 ? "≤ 100 limit" : "— breaks the 100-person limit"}` },
      { ok: dist >= 5, text: `${dist} m from penguins ${dist >= 5 ? "≥ about 5 m" : "— too close (keep about 5 m)"}` },
      { ok: bio === "yes", text: bio === "yes" ? "Boots scrubbed, clothes vacuumed (biosecurity)" : "No biosecurity — seeds, soil or bird flu could be carried in" },
      { ok: cruiseOnly || hours <= DAY_H, text: cruiseOnly ? "Timetable: no landings to fit in" : `Timetable: ${hours.toFixed(1)} h of landings ${hours <= DAY_H ? `fits in a ${DAY_H} h working day` : `— longer than a ${DAY_H} h working day`}` },
    ];
    const crowd = (Math.min(group, 150) / 100) * 20;
    const close = dist >= 5 ? 10 * (5 / dist) : 10 + (5 - dist) * 8;
    const foot = Math.min(20, (pax * sites) / 50);
    const impact = cruiseOnly ? 8 : Math.min(100, Math.round(crowd + close + foot + (bio === "no" ? 30 : 0)));
    const level = impact < 40 ? { label: "Low", tone: "emerald" as const, fill: "#10b981" } : impact < 65 ? { label: "Medium", tone: "amber" as const, fill: "#f59e0b" } : { label: "High", tone: "rose" as const, fill: "#e11d48" };
    return { cruiseOnly, shifts, hours, guides, rules, impact, level, broken: rules.filter((x) => !x.ok).length };
  }, [pax, sites, group, dist, bio]);

  // Scene geometry: penguin colony starts at x=300; 7 px per metre.
  const peopleEnd = 300 - dist * 7;
  const dots = r.cruiseOnly ? 0 : Math.min(30, Math.ceil(group / 5));
  const shipW = 34 + (Math.min(pax, 3000) / 3000) * 56;

  let caption: string;
  if (r.cruiseOnly) caption = `A ${pax}-passenger cruise ship is too big to land anyone, so passengers only see Antarctica from the deck. That keeps footprints off the ice, but the ship still burns fuel and risks oil spills.`;
  else if (r.broken === 0) caption = `This plan follows every IAATO rule. ${pax} passengers in groups of ${group} need ${r.shifts} shift${r.shifts > 1 ? "s" : ""} at each of ${sites} site${sites > 1 ? "s" : ""} — ${r.hours.toFixed(1)} hours of landings — with about ${r.guides} guides ashore. Self-regulation works when every operator sticks to it.`;
  else caption = `${r.broken} rule${r.broken > 1 ? "s" : ""} broken. ${group > 100 ? "Bigger groups trample moss and lichen and crowd the beach. " : ""}${dist < 5 ? "Penguins that feel crowded stop feeding chicks and may flee the nest, leaving eggs to skuas. " : ""}${bio === "no" ? "Without boot-washing, one grass seed or virus could spread in an ecosystem with almost no competitors. " : ""}${r.hours > DAY_H ? "Too many shifts: this is why big ships make fewer, shorter landings." : ""}`;

  return (
    <Frame title="Antarctic Landing Planner" caption={<p><b>Notice:</b> {caption}</p>}>
      <p className="mb-2 text-xs text-slate-500">
        Predict first: a 400-passenger ship lands 100 people at a time at 2 sites. How many shifts per site, and how many hours in total? (Each shift ≈ 1¼ h.)
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Ship size (passengers)" min={50} max={3000} step={50} value={pax} onChange={setPax} color="#0284c7" />
        <Slider label="Visitors ashore per landing group" min={20} max={150} step={10} value={group} onChange={setGroup} color="#7c3aed" />
        <Slider label="Distance kept from penguins" min={1} max={15} value={dist} onChange={setDist} suffix=" m" color="#e11d48" />
        <Stepper label="Landing sites visited today" value={sites} min={1} max={4} onChange={setSites} />
        <div className="sm:col-span-2">
          <Choice label="Biosecurity (boot-wash + vacuum) done?" value={bio} onChange={setBio} options={[{ id: "yes", label: "✓ Yes" }, { id: "no", label: "✗ Skipped" }]} />
        </div>
      </div>

      <svg viewBox="0 0 360 190" className="mt-3 w-full" role="img" aria-label={`Landing scene: ${r.cruiseOnly ? "cruise only, no landing" : `${group} visitors ashore, ${dist} metres from penguins`}; impact ${r.level.label}`}>
        <rect x="0" y="0" width="360" height="150" fill="#e0f2fe" />
        <path d="M110,0 Q100,75 118,150 L360,150 L360,0 Z" fill="#f1f5f9" stroke="#94a3b8" />
        {/* ship */}
        <path d={`M${10},${40} h${shipW} l-8,14 h${-shipW + 16} Z`} fill="#334155" />
        <rect x={18} y={30} width={shipW * 0.5} height={10} fill="#f8fafc" stroke="#334155" />
        <text x={10} y={70} fontSize="11" fill="#0f172a">{pax} pax</text>
        {/* boot-wash */}
        {!r.cruiseOnly && (
          <g>
            <rect x="120" y="112" width="26" height="16" rx="3" fill={bio === "yes" ? "#bbf7d0" : "#fecdd3"} stroke={bio === "yes" ? "#16a34a" : "#e11d48"} />
            <text x="133" y="124" textAnchor="middle" fontSize="11" fill="#0f172a">{bio === "yes" ? "✓" : "✗"}</text>
            <text x="133" y="142" textAnchor="middle" fontSize="11" fill="#475569">boot wash</text>
          </g>
        )}
        {/* people */}
        {Array.from({ length: dots }, (_, i) => (
          <circle key={i} cx={peopleEnd - 4 - (i % 6) * 8} cy={52 + Math.floor(i / 6) * 9} r="3" fill={group > 100 ? "#e11d48" : "#7c3aed"} />
        ))}
        {r.cruiseOnly && <text x="210" y="80" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0369a1">Cruise only — no landing</text>}
        {/* 5 m rule line + distance arrow */}
        <line x1="265" y1="30" x2="265" y2="110" stroke="#64748b" strokeDasharray="4 3" />
        <text x="265" y="24" textAnchor="middle" fontSize="11" fill="#475569">5 m line</text>
        {!r.cruiseOnly && (
          <g>
            <line x1={peopleEnd} y1="104" x2="300" y2="104" stroke={dist >= 5 ? "#16a34a" : "#e11d48"} strokeWidth="2" />
            <text x={(peopleEnd + 300) / 2} y="100" textAnchor="middle" fontSize="11" fontWeight="700" fill={dist >= 5 ? "#16a34a" : "#e11d48"}>{dist} m</text>
          </g>
        )}
        {/* penguins */}
        {Array.from({ length: 12 }, (_, i) => (
          <g key={i} transform={`translate(${306 + (i % 4) * 12},${50 + Math.floor(i / 4) * 16})`}>
            <ellipse cx="0" cy="0" rx="4" ry="6" fill="#0f172a" />
            <ellipse cx="0" cy="1" rx="2.3" ry="4" fill="#fff" />
          </g>
        ))}
        <text x="324" y="112" textAnchor="middle" fontSize="11" fill="#475569">penguins</text>
        {/* impact meter */}
        <text x="8" y="168" fontSize="11" fontWeight="700" fill="#334155">Impact</text>
        <rect x="56" y="159" width="296" height="12" rx="6" fill="#e2e8f0" />
        <rect x="56" y="159" width={(296 * r.impact) / 100} height="12" rx="6" fill={r.level.fill} />
        <text x="56" y="185" fontSize="11" fill="#64748b">low</text>
        <text x="352" y="185" textAnchor="end" fontSize="11" fill="#64748b">high</text>
      </svg>

      <ul className="mt-2 space-y-1 text-sm">
        {r.rules.map((x) => (
          <li key={x.text} className={x.ok ? "text-emerald-700" : "font-semibold text-rose-700"}>{x.ok ? "✓" : "✗"} {x.text}</li>
        ))}
      </ul>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <Stat label="Shifts per site" value={r.cruiseOnly ? "–" : r.shifts} tone="sky" />
        <Stat label="Hours of landings" value={r.cruiseOnly ? "–" : r.hours.toFixed(1)} tone="indigo" />
        <Stat label="Impact" value={<span className="text-base">{r.level.label}</span>} tone={r.level.tone} />
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Simplified model: rules rounded from IAATO guidelines; every passenger lands at every site; impact score combines group size, distance, total
        footfall and biosecurity (for comparison only, not a real measurement).
      </p>
    </Frame>
  );
}

/* ───────────────────────── 2. Expedition Kit Planner ───────────────────────── */

type Dest = "antarctic" | "everest" | "sahara";

/** Rounded planning figures for teaching (per person per day). kcalPerG = energy density of the food carried. */
const DEST: Record<Dest, {
  name: string; range: string; kcal: number; kcalPerG: number; water: number; temp: string; waterSource: string;
  layers: { name: string; job: string; color: string }[]; risks: string[]; why: string;
}> = {
  antarctic: {
    name: "Antarctic coast (ski + sledge)", range: "−20 to 0 °C", kcal: 5500, kcalPerG: 5, water: 4, temp: "about −20 °C to 0 °C, wind chill far colder",
    waterSource: "melted from snow — needs about 0.25 L of stove fuel per person per day",
    layers: [
      { name: "Base layer", job: "wicks sweat off skin", color: "#bae6fd" },
      { name: "Fleece mid layer", job: "traps warm air", color: "#93c5fd" },
      { name: "Down jacket", job: "extra warmth at camp", color: "#60a5fa" },
      { name: "Windproof shell", job: "blocks wind & snow", color: "#2563eb" },
    ],
    risks: ["Hypothermia (core below 35 °C)", "Frostbite on fingers, toes, face", "Crevasses hidden under snow", "Whiteout — no horizon to navigate by", "Sunburn and snow blindness (UV off the ice)"],
    why: "Your body burns huge amounts of energy keeping warm while hauling a heavy sledge, so food is fatty and light (nuts, chocolate, butter, dried meals).",
  },
  everest: {
    name: "Everest Base Camp trek (5,364 m)", range: "−15 to +15 °C", kcal: 4000, kcalPerG: 4, water: 4.5, temp: "about −15 °C at night to +15 °C in sun",
    waterSource: "streams and teahouses — must be boiled or purified",
    layers: [
      { name: "Base layer", job: "wicks sweat on climbs", color: "#bbf7d0" },
      { name: "Fleece mid layer", job: "insulates at night", color: "#86efac" },
      { name: "Waterproof shell", job: "keeps out wind & snow", color: "#16a34a" },
    ],
    risks: ["Altitude sickness (thin air: about half the oxygen of sea level at base camp)", "Avalanche and rockfall", "Cold nights and frostbite", "Stomach bugs from unsafe water", "Twisted ankles on rocky trails far from help"],
    why: "Walking uphill in thin, cold, dry air burns energy and loses water with every breath — yet altitude kills appetite, so trekkers must eat and drink on purpose.",
  },
  sahara: {
    name: "Sahara camel trek", range: "5 to 40 °C", kcal: 3000, kcalPerG: 4, water: 6, temp: "about 40 °C by day, can fall below 10 °C at night",
    waterSource: "carried (by camel or vehicle) or from rare wells and oases",
    layers: [
      { name: "Loose, light top", job: "reflects sun, lets air in", color: "#fde68a" },
      { name: "Cheche headscarf", job: "shade + keeps out sand", color: "#fbbf24" },
      { name: "Warm night fleece", job: "clear nights get cold", color: "#d97706" },
    ],
    risks: ["Dehydration and heatstroke", "Sunburn", "Getting lost — few landmarks in a sand sea", "Sandstorms", "Cold nights under clear skies"],
    why: "You sweat away litres of water in the heat, so water — not food — is the biggest and heaviest thing to plan for.",
  },
};
const HOME_KCAL = 2250;

export function ExpeditionKitPlanner() {
  const [dest, setDest] = useState<Dest>("antarctic");
  const [days, setDays] = useState(14);
  const [team, setTeam] = useState(4);
  const d = DEST[dest];

  const r = useMemo(() => {
    const foodKgDay = d.kcal / d.kcalPerG / 1000;
    const carryKgDay = foodKgDay + (dest === "antarctic" ? 0.25 * 0.75 : dest === "sahara" ? d.water : 0);
    const extra: string[] = [];
    if (team === 1) extra.push("Travelling solo: nobody to help if you are injured — carry a satellite phone or beacon");
    if (dest === "everest" && days < 12) extra.push(`Only ${days} days: too fast to acclimatise — most treks take about 12–14 days there and back`);
    if (days > 20) extra.push("Over 20 days: supplies get heavy — plan resupply drops or depots");
    return {
      totalKcal: d.kcal * days * team, foodKg: foodKgDay * days * team, waterL: d.water * days * team,
      carryPerPerson: carryKgDay * days, carryKgDay, risks: [...d.risks, ...extra],
    };
  }, [d, dest, days, team]);

  const maxK = 6000, bx = 20, bw = 150;
  const bar = (k: number) => (k / maxK) * bw;

  return (
    <Frame
      title="Expedition Kit Planner"
      caption={
        <p>
          <b>Notice:</b> Expect {d.temp}. {d.why} Each person needs about {d.kcal.toLocaleString()} kcal a day — {(d.kcal / HOME_KCAL).toFixed(1)}× a normal day at home —
          and {d.water} L of water, {d.waterSource}. {dest === "sahara"
            ? `Water adds ${d.water} kg per person per day, so this ${days}-day trek means about ${Math.round(r.carryPerPerson)} kg each to carry — that is why Saharan treks use camels or vehicles.`
            : dest === "antarctic"
              ? `Water comes from snow, so you carry fuel instead: about ${r.carryKgDay.toFixed(1)} kg of food and fuel per person per day, pulled on a sledge.`
              : "Teahouses along the trail sell meals, so trekkers carry less food — but must climb slowly to let their bodies adjust to the thin air."}
        </p>
      }
    >
      <Choice label="Destination" value={dest} onChange={setDest} options={[{ id: "antarctic", label: "🧊 Antarctic coast" }, { id: "everest", label: "🏔️ Everest base camp" }, { id: "sahara", label: "🏜️ Sahara" }]} />
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Slider label="Length of trip" min={1} max={30} value={days} onChange={setDays} suffix=" days" color="#0284c7" />
        <Stepper label="Team size" value={team} min={1} max={12} onChange={setTeam} />
      </div>
      <p className="mt-2 text-xs text-slate-500">Predict first: which trip has the heaviest load per person per day — the frozen one or the hot one?</p>

      <svg viewBox="0 0 360 170" className="mt-3 w-full" role="img" aria-label={`${d.name}: ${d.kcal} kcal per person per day compared with ${HOME_KCAL} at home, and ${d.layers.length} clothing layers`}>
        <text x={bx} y="14" fontSize="12" fontWeight="700" fill="#334155">Energy per person per day</text>
        <rect x={bx} y="24" width={bar(HOME_KCAL)} height="18" rx="3" fill="#cbd5e1" />
        <text x={bx + bar(HOME_KCAL) + 4} y="37" fontSize="11" fill="#475569">Home {HOME_KCAL.toLocaleString()}</text>
        <rect x={bx} y="50" width={bar(d.kcal)} height="18" rx="3" fill="#f97316" />
        <text x={bar(d.kcal) >= 90 ? bx + 4 : bx + bar(d.kcal) + 4} y="63" fontSize="11" fontWeight="700" fill={bar(d.kcal) >= 90 ? "#fff" : "#9a3412"}>Trip {d.kcal.toLocaleString()} kcal</text>
        <text x={bx} y="92" fontSize="12" fontWeight="700" fill="#334155">Load per person per day</text>
        <rect x={bx} y="100" width={(r.carryKgDay / 7) * bw} height="18" rx="3" fill={dest === "sahara" ? "#d97706" : "#0ea5e9"} />
        <text x={(r.carryKgDay / 7) * bw >= 60 ? bx + 4 : bx + (r.carryKgDay / 7) * bw + 4} y="113" fontSize="11" fontWeight="700" fill={(r.carryKgDay / 7) * bw >= 60 ? "#fff" : "#0f172a"}>{r.carryKgDay.toFixed(1)} kg</text>
        <text x={bx} y="136" fontSize="11" fill="#64748b">{dest === "sahara" ? "food + carried water" : dest === "antarctic" ? "food + stove fuel" : "food (water from streams)"}</text>
        <text x={bx} y="156" fontSize="11" fill="#64748b">Temperature: {d.range}</text>
        {/* clothing layers: outermost on top */}
        <text x="205" y="14" fontSize="12" fontWeight="700" fill="#334155">Clothing layers</text>
        {[...d.layers].reverse().map((l, i) => (
          <g key={l.name}>
            <rect x={205 + i * 4} y={24 + i * 34} width={150 - i * 8} height="30" rx="5" fill={l.color} />
            <text x={212 + i * 4} y={37 + i * 34} fontSize="11" fontWeight="700" fill="#0f172a">{l.name}</text>
            <text x={212 + i * 4} y={50 + i * 34} fontSize="11" fill="#1e293b">{l.job}</text>
          </g>
        ))}
      </svg>

      <div className="mt-2 grid grid-cols-3 gap-2">
        <Stat label="Team food energy" value={`${(r.totalKcal / 1000).toFixed(r.totalKcal < 100000 ? 1 : 0)}k kcal`} tone="amber" />
        <Stat label="Food to pack" value={`${Math.round(r.foodKg)} kg`} tone="emerald" />
        <Stat label="Water needed" value={`${Math.round(r.waterL)} L`} tone="sky" />
      </div>
      <div className="mt-3 rounded-xl bg-rose-50 p-3">
        <p className="text-sm font-bold text-rose-700">Risk list — {d.name}</p>
        <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
          {r.risks.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Simplified planning figures (rounded): home ≈ 2,000–2,500 kcal a day; man-hauling in Antarctica 5,000–6,000+; hot-desert water 4–6+ L a day.
        Food weight assumes high-energy dried food (~4–5 kcal per gram). Real needs vary with body size, effort and weather.
      </p>
    </Frame>
  );
}
