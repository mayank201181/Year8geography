"use client";

import { useMemo, useState } from "react";
import { Choice, Frame, Slider, Stat } from "./kit";

/* ------------------------------------------------------------------ */
/* 1. Population Change Calculator                                     */
/* ------------------------------------------------------------------ */

type PresetId = "singapore" | "japan" | "nigeria" | "village" | "custom";

interface Rates { births: number; deaths: number; immigrants: number; emigrants: number }

const PRESETS: Record<Exclude<PresetId, "custom">, Rates & { note: string }> = {
  singapore: { births: 7, deaths: 5, immigrants: 26, emigrants: 8, note: "Singapore-like (about 2024): few babies, but many people arrive to work and study." },
  japan: { births: 6, deaths: 13, immigrants: 3, emigrants: 1, note: "Japan-like (about 2023): deaths are roughly double births in an ageing society." },
  nigeria: { births: 36, deaths: 12, immigrants: 1, emigrants: 2, note: "Nigeria-like: a young population with many births, so natural increase is high." },
  village: { births: 6, deaths: 14, immigrants: 5, emigrants: 25, note: "A rural village losing young people to the city (made-up but typical numbers)." },
};

const fmt = (n: number) => (n > 0 ? `+${n}` : `${n}`);

export function PopulationChangeCalculator() {
  const [preset, setPreset] = useState<PresetId>("japan");
  const [r, setR] = useState<Rates>(PRESETS.japan);
  const [reveal, setReveal] = useState(false);

  const pick = (id: PresetId) => {
    setPreset(id);
    if (id !== "custom") setR(PRESETS[id]);
  };
  const set = (k: keyof Rates) => (v: number) => { setPreset("custom"); setR((o) => ({ ...o, [k]: v })); };

  const natural = r.births - r.deaths;
  const netMig = r.immigrants - r.emigrants;
  const total = natural + netMig;
  const pct = total / 10; // per 1,000 -> %
  const after10 = Math.round(10000 * Math.pow(1 + total / 1000, 10));

  // Waterfall bars: births, deaths, immigrants, emigrants, total (per 1,000)
  const bars = useMemo(() => {
    const steps = [
      { label: "Births", v: r.births, color: "#10b981" },
      { label: "Deaths", v: -r.deaths, color: "#f43f5e" },
      { label: "Immig.", v: r.immigrants, color: "#0ea5e9" },
      { label: "Emig.", v: -r.emigrants, color: "#f59e0b" },
    ];
    let run = 0;
    const out = steps.map((s) => {
      const from = run;
      run += s.v;
      return { ...s, from, to: run };
    });
    out.push({ label: "Total", v: run, color: run >= 0 ? "#4f46e5" : "#be123c", from: 0, to: run });
    return out;
  }, [r]);

  const lo = Math.min(0, ...bars.map((b) => Math.min(b.from, b.to)));
  const hi = Math.max(0, ...bars.map((b) => Math.max(b.from, b.to)));
  const span = Math.max(10, hi - lo);
  const top = 20, h = 170;
  const y = (v: number) => top + ((hi - v) / span) * h;

  let caption: string;
  if (natural < 0 && netMig > 0 && total >= 0) caption = "Notice: more people die than are born (natural decrease), but immigration more than makes up for it, so the population still grows.";
  else if (natural < 0 && netMig > 0) caption = "Notice: there is a natural decrease, and immigration slows the fall but cannot stop it — the population still shrinks.";
  else if (natural < 0 && netMig <= 0) caption = "Notice: natural decrease AND net out-migration push the same way. This is how villages and some regions empty out — and those who leave are usually young adults, so even fewer babies are born later.";
  else if (natural > 0 && netMig < 0) caption = "Notice: lots of babies, but people are leaving. Growth comes from natural increase; emigration only trims it.";
  else if (Math.abs(netMig) > Math.abs(natural)) caption = "Notice: migration is the bigger driver of change here — natural change is small compared with people moving in and out.";
  else caption = "Notice: natural increase (births minus deaths) is the main driver of growth here.";

  return (
    <Frame
      title="Population Change Calculator"
      caption={<p>{caption} <span className="text-slate-500">(Rates are per 1,000 people per year; simplified model with rounded figures.)</span></p>}
    >
      <Choice<PresetId>
        label="Choose a place (or drag the sliders)"
        value={preset}
        onChange={pick}
        options={[
          { id: "singapore", label: "Singapore-like" },
          { id: "japan", label: "Japan-like" },
          { id: "nigeria", label: "Nigeria-like" },
          { id: "village", label: "Rural village" },
          { id: "custom", label: "Custom" },
        ]}
      />
      {preset !== "custom" ? <p className="mt-2 text-xs text-slate-500">{PRESETS[preset].note}</p> : null}

      <div className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        <p className="font-semibold">Predict first: Japan has more immigrants than emigrants. Does its population still shrink?</p>
        <button type="button" onClick={() => setReveal((v) => !v)} className="mt-1 text-xs font-bold text-amber-700 underline">
          {reveal ? "Hide" : "Reveal"}
        </button>
        {reveal ? <p className="mt-1 text-xs">Yes. Net migration is only about +2 per 1,000, but natural decrease is about −7, so the total is about −5 per 1,000 (around −0.5% a year).</p> : null}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Slider label="Births per 1,000" min={0} max={50} value={r.births} onChange={set("births")} color="#059669" />
        <Slider label="Deaths per 1,000" min={0} max={30} value={r.deaths} onChange={set("deaths")} color="#e11d48" />
        <Slider label="Immigrants per 1,000" min={0} max={40} value={r.immigrants} onChange={set("immigrants")} color="#0284c7" />
        <Slider label="Emigrants per 1,000" min={0} max={40} value={r.emigrants} onChange={set("emigrants")} color="#d97706" />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Natural change" value={fmt(natural)} tone={natural >= 0 ? "emerald" : "rose"} />
        <Stat label="Net migration" value={fmt(netMig)} tone={netMig >= 0 ? "sky" : "amber"} />
        <Stat label="Total change" value={fmt(total)} tone={total >= 0 ? "indigo" : "rose"} />
        <Stat label="Growth rate" value={`${pct > 0 ? "+" : ""}${pct.toFixed(1)}%`} tone={total >= 0 ? "indigo" : "rose"} />
      </div>

      <svg viewBox="0 0 340 230" className="mt-3 w-full" role="img" aria-label={`Waterfall chart: births ${r.births}, deaths ${r.deaths}, immigrants ${r.immigrants}, emigrants ${r.emigrants}, total change ${total} per 1,000 people`}>
        <line x1="30" x2="330" y1={y(0)} y2={y(0)} stroke="#64748b" strokeWidth="1.5" />
        <text x="26" y={y(0) + 4} fontSize="11" textAnchor="end" fill="#475569">0</text>
        {bars.map((b, i) => {
          const x = 40 + i * 58;
          const y1 = y(Math.max(b.from, b.to));
          const hh = Math.max(1.5, Math.abs(y(b.from) - y(b.to)));
          const next = bars[i + 1];
          return (
            <g key={b.label}>
              <rect x={x} y={y1} width="40" height={hh} rx="3" fill={b.color} opacity={i === 4 ? 1 : 0.85} />
              {next && i < 3 ? <line x1={x + 40} x2={x + 58} y1={y(b.to)} y2={y(b.to)} stroke="#94a3b8" strokeDasharray="3 2" /> : null}
              <text x={x + 20} y={y1 - 4} fontSize="11" textAnchor="middle" fontWeight="700" fill="#334155">{fmt(b.v)}</text>
              <text x={x + 20} y="226" fontSize="11" textAnchor="middle" fill="#334155">{b.label}</text>
            </g>
          );
        })}
      </svg>

      <p className="mt-1 text-sm text-slate-700">
        A town of <b>10,000</b> people with these rates would have about <b>{after10.toLocaleString("en-GB")}</b> people after 10 years.
      </p>
      <p className="mt-1 text-xs text-slate-500">Total change = (births − deaths) + (immigrants − emigrants) = natural change + net migration.</p>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Push–Pull Decision Balance (Lee's model)                         */
/* ------------------------------------------------------------------ */

type Kind = "push" | "pull" | "obstacle";
interface Factor { id: string; kind: Kind; text: string; weight: number; danger?: boolean }
interface Persona { id: string; name: string; journey: string; forced: boolean; factors: Factor[] }

const PERSONAS: Persona[] = [
  {
    id: "farmer", name: "Farmer, rural Nigeria", journey: "Village in northern Nigeria → Lagos (internal, rural-to-urban)", forced: false,
    factors: [
      { id: "f1", kind: "push", text: "Drought and failing harvests", weight: 3 },
      { id: "f2", kind: "push", text: "Low, unreliable farm income", weight: 2 },
      { id: "f3", kind: "push", text: "Few secondary schools or clinics", weight: 1 },
      { id: "f4", kind: "pull", text: "Jobs in factories, markets and building sites", weight: 3 },
      { id: "f5", kind: "pull", text: "Cousin already lives in Lagos (chain migration)", weight: 2 },
      { id: "f6", kind: "pull", text: "Better schools and hospitals", weight: 1 },
      { id: "f7", kind: "obstacle", text: "Cost of the 1,000 km journey and city rent", weight: 2 },
      { id: "f8", kind: "obstacle", text: "Leaving family land and elderly parents", weight: 2 },
      { id: "f9", kind: "obstacle", text: "Fear of slum housing and no job at first", weight: 1 },
    ],
  },
  {
    id: "nurse", name: "Nurse, the Philippines", journey: "Manila → hospital job abroad, e.g. UK or Singapore (international)", forced: false,
    factors: [
      { id: "n1", kind: "push", text: "Low pay in local hospitals", weight: 3 },
      { id: "n2", kind: "push", text: "Long shifts, short-staffed wards", weight: 2 },
      { id: "n3", kind: "push", text: "Few chances of promotion", weight: 1 },
      { id: "n4", kind: "pull", text: "Salary several times higher", weight: 3 },
      { id: "n5", kind: "pull", text: "Can send remittances home to family", weight: 2 },
      { id: "n6", kind: "pull", text: "Overseas hospitals actively recruiting", weight: 2 },
      { id: "n7", kind: "obstacle", text: "Licensing exams and English test", weight: 2 },
      { id: "n8", kind: "obstacle", text: "Visa rules and agency fees", weight: 2 },
      { id: "n9", kind: "obstacle", text: "Leaving young children behind", weight: 3 },
    ],
  },
  {
    id: "syria", name: "Family, Syria", journey: "Aleppo → refugee in Türkiye or Germany (international, forced)", forced: true,
    factors: [
      { id: "s1", kind: "push", text: "Bombing and fighting in the city", weight: 3, danger: true },
      { id: "s2", kind: "push", text: "Home destroyed", weight: 3, danger: true },
      { id: "s3", kind: "push", text: "Shortages of food, water, medicine", weight: 2, danger: true },
      { id: "s4", kind: "pull", text: "Safety and the right to claim asylum", weight: 3 },
      { id: "s5", kind: "pull", text: "Relatives already in Türkiye", weight: 1 },
      { id: "s6", kind: "pull", text: "Children can go back to school", weight: 1 },
      { id: "s7", kind: "obstacle", text: "Closed or guarded borders", weight: 3 },
      { id: "s8", kind: "obstacle", text: "Dangerous sea crossing, smugglers' fees", weight: 2 },
      { id: "s9", kind: "obstacle", text: "Lost passports and documents", weight: 1 },
    ],
  },
];

const KIND_STYLE: Record<Kind, { label: string; on: string; color: string }> = {
  push: { label: "Push (at origin)", on: "bg-rose-100 ring-rose-300 text-rose-900", color: "#e11d48" },
  pull: { label: "Pull (at destination)", on: "bg-emerald-100 ring-emerald-300 text-emerald-900", color: "#059669" },
  obstacle: { label: "Intervening obstacles", on: "bg-amber-100 ring-amber-300 text-amber-900", color: "#d97706" },
};

export function PushPullBalance() {
  const [pid, setPid] = useState("farmer");
  const persona = PERSONAS.find((p) => p.id === pid) ?? PERSONAS[0];
  const [off, setOff] = useState<Record<string, boolean>>({});
  const [ties, setTies] = useState(2);

  const active = persona.factors.filter((f) => !off[f.id]);
  const sum = (k: Kind) => active.filter((f) => f.kind === k).reduce((a, f) => a + f.weight, 0);
  const push = sum("push"), pull = sum("pull"), obst = sum("obstacle");
  const move = push + pull;
  const stay = obst + ties;
  const diff = move - stay;
  const danger = active.some((f) => f.danger);
  const angle = Math.max(-18, Math.min(18, diff * 2.5)); // positive: right (MOVE) side goes down

  const rad = (angle * Math.PI) / 180;
  const cx = 170, cy = 70, arm = 110;
  const lx = cx - arm * Math.cos(rad), ly = cy - arm * Math.sin(rad);
  const rx = cx + arm * Math.cos(rad), ry = cy + arm * Math.sin(rad);

  const verdict = danger ? "Forced to move" : diff >= 3 ? "Likely to move" : diff <= -3 ? "Likely to stay" : "Torn — could go either way";

  let caption: string;
  if (persona.forced && danger) caption = "Notice: this is forced migration. The push factors threaten the family's lives, so they flee even though the obstacles are huge — the obstacles change HOW dangerous the journey is, not WHETHER they go. People forced across a border are refugees; those who flee within their own country are internally displaced people (IDPs).";
  else if (persona.forced) caption = "Notice: with the life-threatening push factors switched off, the family has a real choice again — the move would become voluntary, and the obstacles and ties start to matter much more.";
  else if (diff >= 3) caption = "Notice: this is voluntary migration — the person chooses to move. Push and pull together outweigh the obstacles and personal ties, so in Lee's model the move goes ahead.";
  else if (diff <= -3) caption = "Notice: the obstacles and personal ties outweigh the reasons to move, so the person stays. Try switching off an obstacle — e.g. cheaper travel or an easier visa — and watch the scale tip.";
  else caption = "Notice: the scale is nearly level. Real decisions are often this close; a small change — a relative's job offer, a bad harvest — can tip it.";

  const pan = (x: number, y0: number, label: string, val: number, color: string) => {
    const blocks = Math.min(val, 12);
    return (
      <g>
        <line x1={x} y1={y0} x2={x - 30} y2={y0 + 50} stroke="#64748b" />
        <line x1={x} y1={y0} x2={x + 30} y2={y0 + 50} stroke="#64748b" />
        <path d={`M ${x - 40} ${y0 + 50} h 80 l -10 12 h -60 z`} fill="#cbd5e1" stroke="#64748b" />
        {Array.from({ length: blocks }, (_, i) => (
          <rect key={i} x={x - 36 + (i % 6) * 12} y={y0 + 40 - Math.floor(i / 6) * 10} width="11" height="9" rx="1.5" fill={color} />
        ))}
        <text x={x} y={y0 + 78} fontSize="12" textAnchor="middle" fontWeight="700" fill="#334155">{label} {val}</text>
      </g>
    );
  };

  return (
    <Frame title="Push–Pull Decision Balance" caption={<p>{caption} <span className="text-slate-500">(Based on Lee&apos;s 1966 migration model: push factors at the origin, pull factors at the destination, intervening obstacles in between, plus personal factors. The weights are a simplified teaching model.)</span></p>}>
      <Choice
        label="Choose a migrant"
        value={pid}
        onChange={(v) => { setPid(v); setOff({}); }}
        options={PERSONAS.map((p) => ({ id: p.id, label: p.name }))}
      />
      <p className="mt-2 text-xs text-slate-500">{persona.journey}</p>
      <p className="mt-2 rounded-lg bg-amber-50 p-2 text-sm text-amber-900">Predict first: will this person move? Then switch factors on and off to test your idea.</p>

      <svg viewBox="0 0 340 190" className="mt-2 w-full" role="img" aria-label={`Balance scale: stay side ${stay}, move side ${move}. Verdict: ${verdict}`}>
        <polygon points={`${cx},${cy} ${cx - 18},180 ${cx + 18},180`} fill="#94a3b8" />
        <line x1={lx} y1={ly} x2={rx} y2={ry} stroke="#334155" strokeWidth="6" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="6" fill="#334155" />
        {pan(lx, ly, "STAY", stay, "#d97706")}
        {pan(rx, ry, "MOVE", move, "#4f46e5")}
        <text x={cx} y="18" fontSize="13" textAnchor="middle" fontWeight="800" fill={danger ? "#be123c" : "#3730a3"}>{verdict}</text>
      </svg>

      <div className="mt-2 grid grid-cols-3 gap-2">
        <Stat label="Push" value={push} tone="rose" />
        <Stat label="Pull" value={pull} tone="emerald" />
        <Stat label="Obstacles" value={obst} tone="amber" />
      </div>

      <div className="mt-3 space-y-3">
        {(["push", "pull", "obstacle"] as Kind[]).map((k) => (
          <div key={k}>
            <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color: KIND_STYLE[k].color }}>{KIND_STYLE[k].label}</p>
            <div className="flex flex-wrap gap-2">
              {persona.factors.filter((f) => f.kind === k).map((f) => {
                const on = !off[f.id];
                return (
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setOff((o) => ({ ...o, [f.id]: on }))}
                    className={`rounded-lg px-2.5 py-1.5 text-left text-xs font-medium ring-1 transition ${on ? KIND_STYLE[k].on : "bg-white text-slate-400 line-through ring-slate-200"}`}
                  >
                    {f.text} <span className="font-bold">×{f.weight}</span>{f.danger ? " ⚠️" : ""}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        <Slider label="Personal ties to home (family, friends, language)" min={0} max={5} value={ties} onChange={setTies} color="#d97706" />
      </div>
    </Frame>
  );
}
