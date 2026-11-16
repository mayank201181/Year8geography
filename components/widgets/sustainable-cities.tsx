"use client";
// Interactive explorables for "Sustainable Cities of the Future".
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Four National Taps mixer
// ---------------------------------------------------------------------------

type TapKey = "catchment" | "imported" | "newater" | "desal";
type Scenario = "normal" | "dry" | "after2061" | "worst";

interface Tap {
  key: TapKey;
  name: string;
  /** Rough, illustrative energy to supply 1 m³ (kWh). */
  kwh: number;
  colour: string;
  weatherProof: boolean;
}

const TAPS: Tap[] = [
  { key: "catchment", name: "Local catchment", kwh: 0.3, colour: "#38bdf8", weatherProof: false },
  { key: "imported", name: "Imported (Johor)", kwh: 0.5, colour: "#a3e635", weatherProof: false },
  { key: "newater", name: "NEWater", kwh: 1.0, colour: "#818cf8", weatherProof: true },
  { key: "desal", name: "Desalination", kwh: 3.5, colour: "#f59e0b", weatherProof: true },
];

/** Fraction of each tap's planned share that is actually available in a scenario (simplified model). */
const AVAIL: Record<Scenario, Record<TapKey, number>> = {
  normal: { catchment: 1, imported: 1, newater: 1, desal: 1 },
  dry: { catchment: 0.4, imported: 0.7, newater: 1, desal: 1 },
  after2061: { catchment: 1, imported: 0, newater: 1, desal: 1 },
  worst: { catchment: 0.4, imported: 0, newater: 1, desal: 1 },
};

const SCENARIO_TEXT: Record<Scenario, string> = {
  normal: "A normal year: every tap delivers what was planned.",
  dry: "A long dry spell: reservoirs in Singapore and Johor run low (catchment 40%, imported 70% of normal in this model).",
  after2061: "After 2061: the water agreement with Malaysia ends, so in this model imported water drops to zero.",
  worst: "Worst case: a dry spell AND no imported water.",
};

/** NEWater is made from used water, and some water is always lost, so it cannot supply everything. */
const NEWATER_CAP = 60;

function TapsMixer() {
  const [w, setW] = useState<Record<TapKey, number>>({ catchment: 30, imported: 30, newater: 30, desal: 10 });
  const [scenario, setScenario] = useState<Scenario>("normal");

  const total = TAPS.reduce((a, t) => a + w[t.key], 0);
  const share = (k: TapKey) => (total === 0 ? 0 : (w[k] / total) * 100);
  const newaterShare = share("newater");
  const newaterUsable = Math.min(newaterShare, NEWATER_CAP);

  const delivered = TAPS.map((t) => {
    const planned = t.key === "newater" ? newaterUsable : share(t.key);
    return { t, planned: share(t.key), got: planned * AVAIL[scenario][t.key] };
  });
  const met = Math.min(100, delivered.reduce((a, d) => a + d.got, 0));
  const energy = TAPS.reduce((a, t) => a + (share(t.key) / 100) * t.kwh, 0);
  const proof = TAPS.filter((t) => t.weatherProof).reduce((a, t) => a + share(t.key), 0);

  const pct = (x: number) => `${Math.round(x)}%`;
  const W = 440;
  const barW = W - 40;

  let x = 20;
  const planBars = TAPS.map((t) => {
    const width = (share(t.key) / 100) * barW;
    const el = <rect key={t.key} x={x} y={40} width={width} height={34} fill={t.colour} className="stroke-ink" strokeWidth={0.5} />;
    x += width;
    return el;
  });
  let x2 = 20;
  const gotBars = delivered.map((d) => {
    const width = (d.got / 100) * barW;
    const el = <rect key={d.t.key} x={x2} y={118} width={width} height={34} fill={d.t.colour} className="stroke-ink" strokeWidth={0.5} />;
    x2 += width;
    return el;
  });

  const verdict =
    total === 0
      ? "Turn on at least one tap!"
      : met >= 99.5
        ? "Taps keep running: 100% of demand is met in this scenario."
        : met >= 85
          ? `Close: ${pct(met)} of demand is met — water restrictions would be needed.`
          : `Shortage: only ${pct(met)} of demand is met. Singapore's planners avoid relying on taps that fail together.`;

  return (
    <WidgetFrame
      title="Four National Taps mixer"
      tryThis={[
        "Set catchment and imported water high, then switch to **Worst case**. What happens — and why?",
        "Find a mix that meets 100% of demand in the **worst case**. What is the LOWEST energy (kWh per m³) you can manage?",
        "Push NEWater to 100%. Why can't a city run on recycled water alone?",
        "Desalination is drought-proof. Why doesn't Singapore just use it for everything?",
      ]}
      caption={
        <>
          <p>
            <strong>{SCENARIO_TEXT[scenario]}</strong> {verdict}
          </p>
          <p className="mt-2">
            Weather-proof taps (NEWater + desalination) make up <strong>{pct(proof)}</strong> of your plan. Rain-fed taps are cheap
            and low-energy but fail together in a drought; desalination never runs dry but uses the most energy (more cost and
            more carbon). That trade-off — resilience versus energy — is why Singapore uses <em>four</em> taps, not one.
            {newaterShare > NEWATER_CAP
              ? ` NEWater is made from used water and some water is always lost, so in this model it can supply at most ${NEWATER_CAP}% — the rest of your NEWater plan cannot be delivered.`
              : ""}
          </p>
          <p className="mt-2 text-xs text-ink-2">
            Simplified model with rough, illustrative energy values (kWh per m³): catchment 0.3, imported 0.5, NEWater 1.0,
            desalination 3.5. Real figures vary by plant and year.
          </p>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-3">
          {TAPS.map((t) => (
            <Slider
              key={t.key}
              label={
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden className="inline-block h-3 w-3 rounded-sm" style={{ background: t.colour }} />
                  {t.name}
                </span>
              }
              value={w[t.key]}
              min={0}
              max={100}
              step={5}
              onChange={(v) => setW((p) => ({ ...p, [t.key]: v }))}
              format={() => pct(share(t.key))}
            />
          ))}
          <p className="text-xs text-ink-2">Sliders set each tap&apos;s weight; shares are scaled so the plan always adds up to 100%.</p>
        </div>
        <div className="space-y-3">
          <Segmented<Scenario>
            label="Scenario"
            value={scenario}
            onChange={setScenario}
            options={[
              { value: "normal", label: "Normal year" },
              { value: "dry", label: "Dry spell" },
              { value: "after2061", label: "After 2061" },
              { value: "worst", label: "Worst case" },
            ]}
          />
          <div className="grid grid-cols-3 gap-2">
            <Readout label="Demand met" value={pct(met)} tone={met >= 99.5 ? "good" : "bad"} />
            <Readout label="kWh per m³" value={energy.toFixed(2)} tone={energy <= 1.5 ? "good" : energy <= 2.2 ? "ink" : "bad"} />
            <Readout label="Weather-proof" value={pct(proof)} tone="ink" />
          </div>
        </div>
      </div>
      <svg
        viewBox={`0 0 ${W} 190`}
        className="mt-4 h-auto w-full"
        role="img"
        aria-label={`Planned water mix: ${TAPS.map((t) => `${t.name} ${pct(share(t.key))}`).join(", ")}. Delivered in this scenario: ${pct(met)} of demand.`}
      >
        <text x={20} y={30} fontSize={13} className="fill-ink" fontWeight={700}>Planned supply (100% of demand)</text>
        <rect x={20} y={40} width={barW} height={34} className="fill-surface-2 stroke-line" />
        {planBars}
        <text x={20} y={108} fontSize={13} className="fill-ink" fontWeight={700}>Actually delivered in this scenario</text>
        <rect x={20} y={118} width={barW} height={34} className="fill-bad-soft stroke-line" />
        {gotBars}
        {met < 99.5 ? (
          <text x={20 + (met / 100) * barW + 6} y={140} fontSize={12} className="fill-bad" fontWeight={700}>
            shortfall {pct(100 - met)}
          </text>
        ) : null}
        <line x1={20 + barW} x2={20 + barW} y1={34} y2={160} className="stroke-ink" strokeDasharray="4 3" />
        <text x={20 + barW} y={176} fontSize={11} textAnchor="end" className="fill-ink-2">100% of demand</text>
      </svg>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Eco-city designer
// ---------------------------------------------------------------------------

interface Choice {
  id: string;
  label: string;
  /** Social, economic, environmental scores 0–3. */
  s: number;
  ec: number;
  en: number;
  cost: number;
  why: string;
}

interface Category {
  key: string;
  name: string;
  emoji: string;
  options: Choice[];
}

const CATS: Category[] = [
  {
    key: "transport", name: "Transport", emoji: "🚇",
    options: [
      { id: "car", label: "Wide roads + car parks", s: 1, ec: 2, en: 0, cost: 1, why: "Car-based roads mean congestion, air pollution and high emissions; people without cars are left out." },
      { id: "brt", label: "BRT + cycle lanes", s: 2, ec: 2, en: 2, cost: 2, why: "Bus rapid transit (as in Curitiba) is cheap to build and moves many people with low emissions per person." },
      { id: "mrt", label: "MRT + car-free centre", s: 3, ec: 3, en: 3, cost: 4, why: "Rail plus a car-free centre (like Tengah or Vauban) is clean, fast and safe — but expensive to build." },
    ],
  },
  {
    key: "energy", name: "Energy", emoji: "⚡",
    options: [
      { id: "gas", label: "Gas power station", s: 1, ec: 2, en: 0, cost: 1, why: "Gas is reliable and cheap to start, but burning a fossil fuel releases CO₂." },
      { id: "wte", label: "Waste-to-energy + some solar", s: 2, ec: 2, en: 2, cost: 2, why: "Burning rubbish for power shrinks landfill, and solar adds clean energy." },
      { id: "solar", label: "Rooftop & floating solar", s: 2, ec: 2, en: 3, cost: 3, why: "Solar panels on roofs and reservoirs make renewable electricity with no emissions while generating." },
    ],
  },
  {
    key: "housing", name: "Housing", emoji: "🏘️",
    options: [
      { id: "detached", label: "Low-density detached houses", s: 1, ec: 1, en: 0, cost: 2, why: "Spread-out houses cause urban sprawl: more land, longer trips and car dependence." },
      { id: "mixed", label: "Mixed-income high-rise with shops below", s: 3, ec: 2, en: 2, cost: 3, why: "Dense, mixed-use, mixed-income blocks (like HDB towns) save land and keep shops and services close." },
      { id: "luxury", label: "Luxury towers only", s: 0, ec: 3, en: 1, cost: 3, why: "Luxury towers earn money but price out ordinary families — not socially sustainable." },
    ],
  },
  {
    key: "water", name: "Water", emoji: "💧",
    options: [
      { id: "mains", label: "Mains water only", s: 1, ec: 1, en: 0, cost: 1, why: "Relying on one source wastes rain and leaves the city exposed in a drought." },
      { id: "harvest", label: "Rainwater harvesting + greywater reuse", s: 2, ec: 2, en: 3, cost: 2, why: "Catching rain and reusing greywater for toilets cuts demand on reservoirs." },
      { id: "desal", label: "Build a desalination plant", s: 2, ec: 1, en: 1, cost: 3, why: "Drought-proof, but desalination is costly and energy-hungry." },
    ],
  },
  {
    key: "waste", name: "Waste", emoji: "♻️",
    options: [
      { id: "landfill", label: "Send it all to landfill", s: 0, ec: 1, en: 0, cost: 1, why: "Landfill uses up land and can leak methane and polluted liquid." },
      { id: "incin", label: "Incinerate everything", s: 1, ec: 2, en: 1, cost: 2, why: "Incineration shrinks waste and can make electricity, but still releases CO₂." },
      { id: "recycle", label: "Recycling + composting", s: 2, ec: 2, en: 3, cost: 2, why: "Recycling and composting save resources and create local jobs." },
    ],
  },
  {
    key: "green", name: "Green space", emoji: "🌳",
    options: [
      { id: "none", label: "None — build on every plot", s: 0, ec: 2, en: 0, cost: 0, why: "Building on every plot earns more but makes the city hotter and unhealthy, with no habitats." },
      { id: "pocket", label: "Small pocket parks", s: 2, ec: 1, en: 1, cost: 1, why: "Pocket parks give people somewhere to relax and cool down." },
      { id: "corridor", label: "Green corridors + wetland park", s: 3, ec: 2, en: 3, cost: 3, why: "Linked green corridors (like Singapore's park connectors) support wildlife, cool the city and soak up floods." },
    ],
  },
];

const BUDGET = 14;
const MAX = CATS.length * 3;

function EcoCityDesigner() {
  const [pick, setPick] = useState<Record<string, string>>(() =>
    Object.fromEntries(CATS.map((c) => [c.key, c.options[0].id])),
  );

  const chosen = CATS.map((c) => c.options.find((o) => o.id === pick[c.key]) ?? c.options[0]);
  const S = chosen.reduce((a, o) => a + o.s, 0);
  const Ec = chosen.reduce((a, o) => a + o.ec, 0);
  const En = chosen.reduce((a, o) => a + o.en, 0);
  const cost = chosen.reduce((a, o) => a + o.cost, 0);
  const over = cost > BUDGET;
  const pct = (v: number) => Math.round((v / MAX) * 100);
  const pillars = [
    { name: "Social", v: S },
    { name: "Economic", v: Ec },
    { name: "Environmental", v: En },
  ];
  const weakest = pillars.reduce((a, b) => (b.v < a.v ? b : a));
  const minPct = pct(weakest.v);

  const verdict = over
    ? `Over budget by ${cost - BUDGET} credit${cost - BUDGET === 1 ? "" : "s"} — the council can't afford this plan. Make a trade-off.`
    : minPct >= 67
      ? "A balanced eco-city: every pillar scores at least two-thirds. The judges would be impressed."
      : `Weakest pillar: ${weakest.name} (${minPct}%). A city is only sustainable if it works for people, the economy AND the environment.`;

  const W = 440;
  const bx = 120;
  const bw = W - bx - 50;

  return (
    <WidgetFrame
      title="Eco-city designer"
      tryThis={[
        `Get **every** pillar to at least 67% while staying within the budget of ${BUDGET} credits.`,
        "Choose luxury towers. Which pillar goes up and which collapses? Why?",
        "Pick the best option in every category. What stops you building it — and what does that teach you about real city planning?",
        "Swap MRT for BRT. How much budget do you free up, and what could you spend it on?",
      ]}
      caption={
        <>
          <p><strong>{verdict}</strong></p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {chosen.map((o, i) => (
              <li key={o.id}>
                <strong>{CATS[i].name}:</strong> {o.why}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-ink-2">
            Simplified scoring model (0–3 per pillar per choice) — real plans are judged on far more detail, but the idea of
            balancing social, economic and environmental goals within a budget is exactly how planners and eco-city competition
            judges think.
          </p>
        </>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {CATS.map((c) => (
          <fieldset key={c.key} className="rounded-xl border border-line bg-surface p-3">
            <legend className="px-1 text-sm font-bold text-ink-2">
              <span aria-hidden>{c.emoji}</span> {c.name}
            </legend>
            <div className="flex flex-col gap-1.5" role="radiogroup" aria-label={c.name}>
              {c.options.map((o) => {
                const on = pick[c.key] === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setPick((p) => ({ ...p, [c.key]: o.id }))}
                    className={`flex min-h-[40px] items-center justify-between gap-2 rounded-lg border px-3 py-1.5 text-left text-sm font-semibold transition ${on ? "border-brand bg-brand-soft text-ink" : "border-line text-ink-2 hover:text-ink"}`}
                  >
                    <span>{o.label}</span>
                    <span className="shrink-0 text-xs tabular-nums text-ink-2">{o.cost} cr</span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Readout label="Budget used" value={`${cost} / ${BUDGET}`} tone={over ? "bad" : "good"} />
        <Readout label="Social" value={`${pct(S)}%`} tone="ink" />
        <Readout label="Economic" value={`${pct(Ec)}%`} tone="ink" />
        <Readout label="Environmental" value={`${pct(En)}%`} tone="ink" />
      </div>

      <svg
        viewBox={`0 0 ${W} 150`}
        className="mt-4 h-auto w-full"
        role="img"
        aria-label={`Sustainability scores: social ${pct(S)}%, economic ${pct(Ec)}%, environmental ${pct(En)}%. Budget ${cost} of ${BUDGET} credits.`}
      >
        {pillars.map((p, i) => {
          const y = 18 + i * 40;
          const good = pct(p.v) >= 67;
          return (
            <g key={p.name}>
              <text x={bx - 8} y={y + 17} fontSize={13} textAnchor="end" className="fill-ink" fontWeight={700}>{p.name}</text>
              <rect x={bx} y={y} width={bw} height={24} rx={4} className="fill-surface-2 stroke-line" />
              <rect x={bx} y={y} width={(p.v / MAX) * bw} height={24} rx={4} className={good ? "fill-good" : "fill-accent"} />
              <text x={bx + bw + 6} y={y + 17} fontSize={12} className="fill-ink">{pct(p.v)}%</text>
            </g>
          );
        })}
        <line x1={bx + (bw * 2) / 3} x2={bx + (bw * 2) / 3} y1={10} y2={138} className="stroke-ink" strokeDasharray="4 3" />
        <text x={bx + (bw * 2) / 3} y={148} fontSize={10} textAnchor="middle" className="fill-ink-2">target 67%</text>
      </svg>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "four-taps-mixer",
    title: "Four National Taps mixer",
    blurb: "Mix Singapore's four water sources, then test your plan in a drought and after 2061 — resilience versus energy.",
    Component: TapsMixer,
  },
  {
    id: "eco-city-designer",
    title: "Eco-city designer",
    blurb: "Pick transport, energy, housing, water, waste and green space within a budget and balance the three pillars.",
    Component: EcoCityDesigner,
  },
];
