"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Push–pull balance: should a migrant move to Lagos?
// ---------------------------------------------------------------------------

type Side = "push" | "pull" | "stay";
interface Factor {
  id: string;
  side: Side;
  label: string;
  weight: number;
}

const FACTORS: Factor[] = [
  { id: "drought", side: "push", label: "Drought ruined this year's crops", weight: 3 },
  { id: "conflict", side: "push", label: "Armed attacks in nearby villages", weight: 3 },
  { id: "school", side: "push", label: "No secondary school nearby", weight: 2 },
  { id: "jobs", side: "push", label: "Few jobs apart from farming", weight: 2 },
  { id: "clinic", side: "push", label: "No clinic within a day's travel", weight: 2 },
  { id: "power", side: "push", label: "No electricity in the village", weight: 1 },
  { id: "work", side: "pull", label: "Work in trading or construction", weight: 3 },
  { id: "wages", side: "pull", label: "Higher wages than farming", weight: 3 },
  { id: "cousin", side: "pull", label: "A cousin in Lagos offers a place to sleep", weight: 2 },
  { id: "schools", side: "pull", label: "Schools and universities", weight: 2 },
  { id: "hospital", side: "pull", label: "Hospitals and specialist doctors", weight: 2 },
  { id: "lights", side: "pull", label: "'Bright lights': music, film, nightlife", weight: 1 },
  { id: "family", side: "stay", label: "Elderly parents need care at home", weight: 3 },
  { id: "land", side: "stay", label: "Owns farmland that would be left behind", weight: 2 },
  { id: "rent", side: "stay", label: "Fear of high rents and crowded housing", weight: 2 },
  { id: "traffic", side: "stay", label: "Hears about hours lost in go-slows", weight: 1 },
];

const PRESETS: { id: string; label: string; on: string[]; fare: number }[] = [
  { id: "farmer", label: "Farmer in the north-east", on: ["drought", "conflict", "jobs", "clinic", "family", "land", "wages"], fare: 3 },
  { id: "leaver", label: "School-leaver in a small town", on: ["school", "jobs", "power", "work", "cousin", "schools", "lights", "rent"], fare: 1 },
  { id: "settled", label: "Well-off trader at home", on: ["lights", "family", "land", "rent", "traffic"], fare: 2 },
];

function sideTotal(on: Set<string>, side: Side) {
  return FACTORS.filter((f) => f.side === side && on.has(f.id)).reduce((s, f) => s + f.weight, 0);
}

function PushPullBalance() {
  const [on, setOn] = useState<Set<string>>(() => new Set(PRESETS[1].on));
  const [fare, setFare] = useState(1);

  const push = sideTotal(on, "push");
  const pull = sideTotal(on, "pull");
  const stay = sideTotal(on, "stay") + fare;
  const move = push + pull;
  const diff = move - stay;
  const angle = Math.max(-18, Math.min(18, diff * 2.5)); // positive = tips towards "move" (right)
  const verdict = diff >= 3 ? "Likely to move to Lagos" : diff <= -3 ? "Likely to stay at home" : "Undecided — could go either way";
  const tone = diff >= 3 ? "good" : diff <= -3 ? "bad" : "ink";

  const toggle = (id: string) =>
    setOn((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  // Beam geometry (pivot at 240,110; arms 150 px).
  const rad = (angle * Math.PI) / 180;
  const lx = 240 - 150 * Math.cos(rad);
  const ly = 110 + 150 * Math.sin(rad);
  const rx = 240 + 150 * Math.cos(rad);
  const ry = 110 - 150 * Math.sin(rad);
  const block = (x: number, y: number, n: number, cls: string) =>
    Array.from({ length: Math.min(n, 14) }, (_, i) => (
      <rect key={i} x={x - 30 + (i % 5) * 12} y={y - 14 - Math.floor(i / 5) * 12} width={11} height={11} rx={2} className={cls} />
    ));

  const groups: { side: Side; title: string }[] = [
    { side: "push", title: "Push factors (village)" },
    { side: "pull", title: "Pull factors (Lagos)" },
    { side: "stay", title: "Reasons to stay / obstacles" },
  ];

  return (
    <WidgetFrame
      title="Push–pull balance: should they move to Lagos?"
      tryThis={[
        "Pick the **farmer** preset. Which single factor, if removed, would change the decision?",
        "Can you find a person who has strong pull factors but still stays? What holds them back?",
        "Turn every push factor off. Can pull factors alone tip the balance?",
      ]}
      caption={
        <>
          <p>
            Reasons to move: push {push} + pull {pull} = <b>{move}</b>. Reasons to stay: obstacles {stay - fare} + journey cost {fare} = <b>{stay}</b>.{" "}
            <b>{verdict}.</b>
          </p>
          <p className="mt-2">
            {push > pull
              ? "Here, problems at home (push) matter more than Lagos's attractions — typical of people fleeing drought or conflict in the north."
              : pull > push
                ? "Here, Lagos's attractions (pull) matter more than problems at home — typical of young people chasing jobs and education."
                : "Push and pull are evenly matched here."}{" "}
            Obstacles like cost, family ties and land can stop a move even when push and pull are strong. Simplified model: real people also weigh information from friends, age, money saved and risk.
          </p>
        </>
      }
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            className="min-h-10 rounded-lg border border-line bg-surface-2 px-3 text-sm font-bold text-ink"
            onClick={() => {
              setOn(new Set(p.on));
              setFare(p.fare);
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 480 230" className="h-auto w-full" role="img" aria-label={`Balance beam: reasons to move ${move}, reasons to stay ${stay}. ${verdict}.`}>
        <polygon points="240,110 220,170 260,170" className="fill-surface-2 stroke-ink" strokeWidth={1.5} />
        <line x1={lx} y1={ly} x2={rx} y2={ry} className="stroke-ink" strokeWidth={5} strokeLinecap="round" />
        <circle cx={240} cy={110} r={5} className="fill-ink" />
        {/* left pan: stay */}
        <line x1={lx} y1={ly} x2={lx} y2={ly + 20} className="stroke-ink-2" strokeWidth={1.5} />
        <rect x={lx - 34} y={ly + 20} width={68} height={6} rx={2} className="fill-bad" />
        <g transform={`translate(0 ${ly + 20})`}>{block(lx, 0, stay, "fill-bad")}</g>
        <text x={lx} y={ly + 44} fontSize={12} textAnchor="middle" className="fill-ink">Stay: {stay}</text>
        {/* right pan: move */}
        <line x1={rx} y1={ry} x2={rx} y2={ry + 20} className="stroke-ink-2" strokeWidth={1.5} />
        <rect x={rx - 34} y={ry + 20} width={68} height={6} rx={2} className="fill-good" />
        <g transform={`translate(0 ${ry + 20})`}>{block(rx, 0, move, "fill-good")}</g>
        <text x={rx} y={ry + 44} fontSize={12} textAnchor="middle" className="fill-ink">Move: {move}</text>
        <text x={240} y={224} fontSize={12} textAnchor="middle" className="fill-ink-2">Each square = 1 point of importance</text>
      </svg>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <Readout label="Push" value={push} />
        <Readout label="Pull" value={pull} />
        <Readout label="Verdict" value={diff >= 3 ? "Move" : diff <= -3 ? "Stay" : "Unsure"} tone={tone} />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {groups.map((g) => (
          <fieldset key={g.side}>
            <legend className="mb-2 text-sm font-extrabold text-ink">{g.title}</legend>
            <div className="space-y-1.5">
              {FACTORS.filter((f) => f.side === g.side).map((f) => {
                const active = on.has(f.id);
                return (
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggle(f.id)}
                    className={`flex min-h-10 w-full items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5 text-left text-sm ${
                      active ? (g.side === "stay" ? "border-bad bg-bad-soft text-ink" : "border-good bg-good-soft text-ink") : "border-line bg-surface text-ink-2"
                    }`}
                  >
                    <span>{f.label}</span>
                    <span className="shrink-0 font-bold tabular-nums">{"●".repeat(f.weight)}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
      <div className="mt-4">
        <Stepper label="Cost of the journey (obstacle)" value={fare} min={0} max={3} onChange={setFare} format={(v) => ["none", "low", "medium", "high"][v]} />
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Commute calculator: go-slow vs BRT vs rail
// ---------------------------------------------------------------------------

type Traffic = "clear" | "busy" | "goslow";
interface Mode {
  id: string;
  label: string;
  /** Assumed average moving speed (km/h) in each traffic condition. */
  speed: Record<Traffic, number>;
  /** Fixed minutes: walking to a stop, waiting, parking. */
  access: number;
  note: string;
}

const MODES: Mode[] = [
  { id: "car", label: "Car", speed: { clear: 45, busy: 20, goslow: 8 }, access: 5, note: "stuck in the same traffic as everyone else" },
  { id: "danfo", label: "Danfo minibus", speed: { clear: 35, busy: 16, goslow: 6 }, access: 10, note: "cheap, but stops often and sits in the go-slow" },
  { id: "okada", label: "Okada (motorbike)", speed: { clear: 40, busy: 25, goslow: 15 }, access: 3, note: "weaves through jams, but has a high accident risk and is banned on many roads" },
  { id: "brt", label: "BRT bus", speed: { clear: 30, busy: 26, goslow: 22 }, access: 15, note: "own lane, so the go-slow barely touches it" },
  { id: "rail", label: "Rail (Blue/Red Line)", speed: { clear: 40, busy: 40, goslow: 40 }, access: 20, note: "separate track: same speed whatever the roads are doing" },
];

const minutes = (m: Mode, km: number, t: Traffic) => Math.round((km / m.speed[t]) * 60 + m.access);

function CommuteCalculator() {
  const [km, setKm] = useState(15);
  const [traffic, setTraffic] = useState<Traffic>("goslow");
  const [days, setDays] = useState(5);
  const [pick, setPick] = useState("car");

  const times = MODES.map((m) => ({ m, t: minutes(m, km, traffic) }));
  const max = Math.max(...times.map((x) => x.t));
  const best = times.reduce((a, b) => (b.t < a.t ? b : a));
  const chosen = times.find((x) => x.m.id === pick) ?? times[0];
  const weekHours = Math.round(((chosen.t * 2 * days) / 60) * 10) / 10;
  const yearDays = Math.round(((chosen.t * 2 * days * 48) / 60 / 24) * 10) / 10;
  const car = times.find((x) => x.m.id === "car")!;
  const rail = times.find((x) => x.m.id === "rail")!;

  const W = 480, rowH = 34, top = 10, left = 130, barMax = 290;

  return (
    <WidgetFrame
      title="Commute calculator: go-slow vs BRT vs rail"
      tryThis={[
        "In **Busy** traffic, find the distance where rail first beats the car.",
        "Switch from **Clear** to **Go-slow**. Which bars grow and which don't? Why?",
        "How many full days a year does a 25 km go-slow commute by car eat up?",
      ]}
      caption={
        <>
          <p>
            For {km} km in {traffic === "clear" ? "clear roads" : traffic === "busy" ? "busy traffic" : "a rush-hour go-slow"}, the fastest option is <b>{best.m.label}</b> ({best.t} min). The {chosen.m.label.toLowerCase()} is {chosen.m.note}.
          </p>
          <p className="mt-2">
            {rail.t < car.t
              ? `Rail beats the car by ${car.t - rail.t} minutes: its fixed walk-and-wait time (${MODES[4].access} min) is outweighed by never meeting a jam.`
              : `The car beats rail by ${rail.t - car.t} minutes here: on short trips or clear roads, rail's fixed walk-and-wait time (${MODES[4].access} min) costs too much.`}{" "}
            This is why mass transit with its own lane or track is Lagos&apos;s main answer to congestion. Simplified model: speeds are illustrative assumptions, not measured Lagos data.
          </p>
        </>
      }
    >
      <div className="space-y-3">
        <Slider label="One-way distance" value={km} min={2} max={30} onChange={setKm} format={(v) => `${v} km`} />
        <Segmented<Traffic>
          label="Traffic"
          value={traffic}
          onChange={setTraffic}
          options={[
            { value: "clear", label: "Clear (5 a.m.)" },
            { value: "busy", label: "Busy" },
            { value: "goslow", label: "Go-slow" },
          ]}
        />
      </div>

      <svg viewBox={`0 0 ${W} ${top * 2 + rowH * MODES.length + 14}`} className="mt-4 h-auto w-full" role="img" aria-label={`One-way journey times for ${km} km: ${times.map((x) => `${x.m.label} ${x.t} minutes`).join(", ")}.`}>
        {times.map(({ m, t }, i) => {
          const y = top + i * rowH;
          const w = Math.max(2, (t / max) * barMax);
          const isPick = m.id === pick;
          return (
            <g key={m.id}>
              <text x={left - 8} y={y + 18} fontSize={12} textAnchor="end" className={isPick ? "fill-brand" : "fill-ink"} fontWeight={isPick ? 700 : 400}>{m.label}</text>
              <rect x={left} y={y + 4} width={(m.access / max) * barMax} height={20} rx={3} className="fill-line" />
              <rect x={left + (m.access / max) * barMax} y={y + 4} width={Math.max(0, w - (m.access / max) * barMax)} height={20} rx={3} className={m.id === best.m.id ? "fill-good" : isPick ? "fill-brand" : "fill-ink-2"} />
              <text x={left + w + 6} y={y + 18} fontSize={12} className="fill-ink">{t} min</text>
            </g>
          );
        })}
        <text x={left} y={top + rowH * MODES.length + 10} fontSize={11} className="fill-ink-2">Grey = walking/waiting time · green = fastest</text>
      </svg>

      <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Your mode of transport">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            role="radio"
            aria-checked={pick === m.id}
            onClick={() => setPick(m.id)}
            className={`min-h-10 rounded-lg border px-3 text-sm font-bold ${pick === m.id ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2"}`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div className="mt-3">
        <Stepper label="Work days per week" value={days} min={1} max={6} onChange={setDays} />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <Readout label="One way" value={`${chosen.t} min`} />
        <Readout label="Per week" value={`${weekHours} h`} tone="ink" />
        <Readout label="Per year*" value={`${yearDays} days`} tone={yearDays >= 15 ? "bad" : "good"} />
      </div>
      <p className="mt-2 text-xs text-ink-2">* Round trips × {days} days × 48 working weeks, shown as full 24-hour days.</p>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "lagos-push-pull-balance",
    title: "Push–pull balance",
    blurb: "Switch push factors, pull factors and obstacles on and off, and watch the balance decide whether a migrant moves to Lagos.",
    Component: PushPullBalance,
  },
  {
    id: "lagos-commute-calculator",
    title: "Commute calculator",
    blurb: "Change distance and traffic to compare car, danfo, okada, BRT and rail journey times — and see how much life a go-slow eats.",
    Component: CommuteCalculator,
  },
];
