"use client";
// Interactive explorables — Living & Travelling in Extreme Environments.
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Expedition kit packer
// ---------------------------------------------------------------------------

type Env = "desert" | "arctic" | "himalaya";

const RISKS: Record<Env, { id: string; label: string }[]> = {
  desert: [
    { id: "dehydration", label: "Dehydration" },
    { id: "heat", label: "Heatstroke" },
    { id: "sun", label: "Sunburn & glare" },
    { id: "coldnight", label: "Freezing nights" },
    { id: "lost", label: "Getting lost" },
    { id: "emergency", label: "Emergency / injury" },
  ],
  arctic: [
    { id: "hypothermia", label: "Hypothermia" },
    { id: "frostbite", label: "Frostbite" },
    { id: "sun", label: "Snow blindness" },
    { id: "dehydration", label: "Dehydration (no liquid water)" },
    { id: "lost", label: "Whiteout / getting lost" },
    { id: "emergency", label: "Emergency / injury" },
  ],
  himalaya: [
    { id: "altitude", label: "Altitude sickness" },
    { id: "hypothermia", label: "Hypothermia" },
    { id: "frostbite", label: "Frostbite" },
    { id: "sun", label: "Sunburn & snow blindness" },
    { id: "ice", label: "Slipping on ice" },
    { id: "dehydration", label: "Dehydration" },
    { id: "lost", label: "Getting lost" },
    { id: "emergency", label: "Emergency / injury" },
  ],
};

interface Item {
  id: string;
  name: string;
  emoji: string;
  kg: number;
  covers: Partial<Record<Env, string[]>>;
  note?: string;
}

const ITEMS: Item[] = [
  { id: "water", name: "Water for 2 days (8 litres)", emoji: "💧", kg: 8, covers: { desert: ["dehydration", "heat"], himalaya: ["dehydration"] } },
  { id: "tabs", name: "Water purification tablets", emoji: "🧪", kg: 0.1, covers: { himalaya: ["dehydration"] }, note: "Only useful where there is stream water to treat." },
  { id: "stove", name: "Stove + fuel (melts snow)", emoji: "🔥", kg: 2, covers: { arctic: ["dehydration", "hypothermia"], himalaya: ["dehydration"] } },
  { id: "hat", name: "Wide hat + loose long sleeves", emoji: "👒", kg: 0.6, covers: { desert: ["sun", "heat"] } },
  { id: "glasses", name: "Sunscreen + dark glacier glasses", emoji: "🕶️", kg: 0.3, covers: { desert: ["sun"], arctic: ["sun"], himalaya: ["sun"] } },
  { id: "layers", name: "Base + mid + shell layers", emoji: "🧥", kg: 2.5, covers: { desert: ["coldnight"], arctic: ["hypothermia"], himalaya: ["hypothermia"] } },
  { id: "bag", name: "Sleeping bag rated to −30 °C", emoji: "🛏️", kg: 2.2, covers: { arctic: ["hypothermia"], himalaya: ["hypothermia"] }, note: "Far too hot for most desert nights." },
  { id: "mitts", name: "Insulated mitts + boots", emoji: "🧤", kg: 2.4, covers: { arctic: ["frostbite"], himalaya: ["frostbite"] } },
  { id: "crampons", name: "Crampons + ice axe", emoji: "⛏️", kg: 1.8, covers: { himalaya: ["ice"], arctic: [] } },
  { id: "nav", name: "Map, compass + GPS", emoji: "🧭", kg: 0.5, covers: { desert: ["lost"], arctic: ["lost"], himalaya: ["lost"] } },
  { id: "plb", name: "Satellite phone / locator beacon", emoji: "📡", kg: 0.4, covers: { desert: ["emergency"], arctic: ["emergency"], himalaya: ["emergency"] } },
  { id: "firstaid", name: "First-aid kit", emoji: "🩹", kg: 0.6, covers: { desert: ["emergency"], arctic: ["emergency"], himalaya: ["emergency"] } },
  { id: "acclim", name: "Acclimatisation rest days in the plan", emoji: "🗓️", kg: 0, covers: { himalaya: ["altitude"] }, note: "Weighs nothing — planning is kit too!" },
  { id: "cotton", name: "Thick cotton hoodie", emoji: "👕", kg: 1.2, covers: {}, note: "Cotton soaks up sweat and stays wet — 'cotton kills' in the cold." },
  { id: "speaker", name: "Bluetooth speaker", emoji: "🔊", kg: 0.8, covers: {}, note: "Fun, but heavy for zero safety benefit (and it disturbs wildlife)." },
];

const LIMIT = 18;

function KitPacker() {
  const [env, setEnv] = useState<Env>("desert");
  const [packed, setPacked] = useState<string[]>(["nav"]);
  const risks = RISKS[env];
  const chosen = ITEMS.filter((i) => packed.includes(i.id));
  const weight = Math.round(chosen.reduce((s, i) => s + i.kg, 0) * 10) / 10;
  const covered = new Set(chosen.flatMap((i) => i.covers[env] ?? []));
  const nCovered = risks.filter((r) => covered.has(r.id)).length;
  const over = weight > LIMIT;
  const useless = chosen.filter((i) => (i.covers[env] ?? []).length === 0);
  const allCovered = nCovered === risks.length;

  const toggle = (id: string) => setPacked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const barW = 300;
  const fill = Math.min(weight / 24, 1) * barW;
  const limX = (LIMIT / 24) * barW;

  let verdict: string;
  if (over) verdict = `Too heavy! At ${weight} kg you will tire fast, move slowly and be more likely to slip or get injured — which is itself a risk. Drop the items that protect against nothing here.`;
  else if (allCovered && useless.length === 0) verdict = `Expedition-ready: every ${env === "himalaya" ? "Himalayan" : env === "arctic" ? "Arctic" : "Sahara"} risk is covered and nothing is dead weight. Real teams also plan routes, timings and turn-back points in a risk assessment.`;
  else if (allCovered) verdict = `All risks covered, but ${useless.map((u) => u.name.toLowerCase()).join(" and ")} ${useless.length === 1 ? "does" : "do"} nothing here. Every gram counts on a long trek.`;
  else verdict = `Uncovered: ${risks.filter((r) => !covered.has(r.id)).map((r) => r.label.toLowerCase()).join(", ")}. Which item would reduce each of those risks?`;

  return (
    <WidgetFrame
      title="Expedition kit packer"
      tryThis={[
        "Pack for the **Sahara**. Why do you need warm layers in a hot desert?",
        "Switch to the **Himalaya**. Which 'item' protects against altitude sickness but weighs 0 kg?",
        "Can you cover **every** Himalayan risk and still stay under 18 kg?",
        "Why is 8 kg of water essential in the Sahara but not on an Arctic ice cap?",
      ]}
      caption={
        <p>
          <strong>{verdict}</strong> A packing list is really a risk assessment: each item is there because it reduces a named hazard. Simplified model — real kit lists are longer, and in the desert camels or vehicles often carry the water.
        </p>
      }
    >
      <div className="space-y-4">
        <Segmented<Env>
          label="Environment"
          value={env}
          onChange={setEnv}
          options={[
            { value: "desert", label: "🏜️ Sahara" },
            { value: "arctic", label: "🧊 Arctic ice cap" },
            { value: "himalaya", label: "🏔️ Himalaya" },
          ]}
        />
        <div className="grid gap-2 sm:grid-cols-2">
          {ITEMS.map((i) => {
            const on = packed.includes(i.id);
            const helps = (i.covers[env] ?? []).length > 0;
            return (
              <button
                key={i.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(i.id)}
                className={`flex min-h-[44px] items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm transition ${on ? "border-brand bg-brand-soft text-ink" : "border-line bg-surface text-ink-2"}`}
              >
                <span aria-hidden className="text-lg">{i.emoji}</span>
                <span className="flex-1">
                  <span className="font-bold">{i.name}</span>
                  <span className="block text-xs">
                    {i.kg} kg{on && !helps ? " · no use here" : ""}
                    {on && i.note ? ` · ${i.note}` : ""}
                  </span>
                </span>
                <span aria-hidden className="font-extrabold">{on ? "✓" : "+"}</span>
              </button>
            );
          })}
        </div>
        <svg viewBox="0 0 340 56" className="h-auto w-full" role="img" aria-label={`Pack weight ${weight} kilograms against an ${LIMIT} kilogram limit${over ? ", over the limit" : ""}`}>
          <rect x={20} y={14} width={barW} height={20} rx={6} className="fill-surface-2 stroke-line" />
          <rect x={20} y={14} width={fill} height={20} rx={6} className={over ? "fill-bad" : "fill-brand"} />
          <line x1={20 + limX} x2={20 + limX} y1={8} y2={40} className="stroke-ink" strokeWidth={2} strokeDasharray="4 3" />
          <text x={20 + limX} y={52} fontSize={11} textAnchor="middle" className="fill-ink">limit {LIMIT} kg</text>
          <text x={20} y={9} fontSize={11} className="fill-ink-2">0 kg</text>
          <text x={320} y={9} fontSize={11} textAnchor="end" className="fill-ink-2">24 kg</text>
        </svg>
        <div className="grid grid-cols-2 gap-2">
          <Readout label="Pack weight" value={`${weight} kg`} tone={over ? "bad" : "brand"} />
          <Readout label="Risks covered" value={`${nCovered} / ${risks.length}`} tone={allCovered ? "good" : "ink"} />
        </div>
        <ul className="flex flex-wrap gap-2 text-xs font-bold" aria-label="Risks">
          {risks.map((r) => (
            <li key={r.id} className={`rounded-full px-2.5 py-1 ${covered.has(r.id) ? "bg-good-soft text-good" : "bg-bad-soft text-bad"}`}>
              {covered.has(r.id) ? "✓ " : "✗ "}
              {r.label}
            </li>
          ))}
        </ul>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Antarctic landing site: carrying-capacity simulator
// ---------------------------------------------------------------------------

/** Illustrative seasonal "carrying capacity" of one small penguin-colony site (simplified model). */
const CAPACITY = 12000;

function CarryingCapacity() {
  const [ship, setShip] = useState(200);
  const [visits, setVisits] = useState(20);
  const [rules, setRules] = useState<"on" | "off">("on");

  const canLand = ship <= 500 || rules === "off";
  const landed = canLand ? ship : 0;
  const maxAshore = rules === "on" ? Math.min(100, landed) : landed;
  const groups = landed === 0 ? 0 : Math.ceil(landed / Math.max(maxAshore, 1));
  const guides = maxAshore === 0 ? 0 : Math.ceil(maxAshore / 20);
  const seasonVisitors = landed * visits;
  // Without rules each visitor does more harm (crowding, getting close to birds, seeds on boots).
  const harmPerVisitor = rules === "on" ? 1 : 2.5;
  const crowding = rules === "off" && maxAshore > 100 ? 1 + (maxAshore - 100) / 400 : 1;
  const impact = Math.round(((seasonVisitors * harmPerVisitor * crowding) / CAPACITY) * 100);
  const level = impact < 50 ? "Low" : impact < 100 ? "Moderate" : impact < 150 ? "Over capacity" : "Severe damage";
  const tone: "good" | "ink" | "bad" = impact < 50 ? "good" : impact < 100 ? "ink" : "bad";

  const W = 320;
  const pct = Math.min(impact, 200) / 200;
  const capX = 10 + W / 2;

  return (
    <WidgetFrame
      title="Antarctic landing site: how many visitors is too many?"
      tryThis={[
        "Set the ship to **800 passengers** with IAATO rules on. What happens to landings — and why?",
        "With rules on, find the most ship visits per season that keeps impact **below 100%** for a 200-passenger ship.",
        "Turn the rules **off**. How much faster does the site go over its carrying capacity?",
        "Each visitor could become an 'ambassador' for Antarctica. Is there a number that balances ambassadors and damage?",
      ]}
      caption={
        <p>
          {rules === "on" && ship > 500 ? (
            <>
              <strong>A {ship}-passenger ship may not land anyone</strong> under IAATO rules — passengers can only view Antarctica from the deck. Big ships bring the most people but the least impact ashore.{" "}
            </>
          ) : null}
          {landed > 0 ? (
            <>
              {rules === "on" ? (
                <>
                  With no more than 100 ashore at once, {landed} passengers need <strong>{groups} group{groups === 1 ? "" : "s"}</strong> and at least <strong>{guides} guide{guides === 1 ? "" : "s"}</strong> (1 per 20 ashore).{" "}
                </>
              ) : (
                <>
                  Without rules, all {landed} passengers pour ashore at once, nobody checks boots for seeds, and people crowd the penguins.{" "}
                </>
              )}
              Over the season about <strong>{seasonVisitors.toLocaleString("en-GB")}</strong> people visit this site — impact <strong>{impact}%</strong> of its carrying capacity ({level.toLowerCase()}).{" "}
            </>
          ) : null}
          Carrying capacity is the number of visitors a place can take before it is damaged. Simplified model: the capacity figure is illustrative, not a real measurement.
        </p>
      }
    >
      <div className="space-y-4">
        <Slider label="Passengers on the ship" value={ship} min={50} max={1000} step={10} onChange={setShip} />
        <Slider label="Ship visits to this site per season" value={visits} min={1} max={80} onChange={setVisits} />
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink-2">IAATO guidelines</span>
          <Segmented<"on" | "off">
            label="IAATO guidelines"
            value={rules}
            onChange={setRules}
            options={[
              { value: "on", label: "✅ Followed" },
              { value: "off", label: "🚫 Ignored" },
            ]}
          />
        </div>
        <svg viewBox="0 0 340 70" className="h-auto w-full" role="img" aria-label={`Impact meter at ${impact} percent of carrying capacity: ${level}`}>
          <rect x={10} y={18} width={W / 4} height={22} className="fill-good-soft" />
          <rect x={10 + W / 4} y={18} width={W / 4} height={22} className="fill-warn-soft" />
          <rect x={10 + W / 2} y={18} width={W / 2} height={22} className="fill-bad-soft" />
          <rect x={10} y={18} width={W} height={22} rx={3} fill="none" className="stroke-line" />
          <line x1={capX} x2={capX} y1={10} y2={48} className="stroke-ink" strokeWidth={2} />
          <text x={capX} y={60} fontSize={11} textAnchor="middle" className="fill-ink">carrying capacity (100%)</text>
          <text x={10} y={60} fontSize={11} className="fill-ink-2">0%</text>
          <text x={10 + W} y={60} fontSize={11} textAnchor="end" className="fill-ink-2">200%+</text>
          <polygon points={`${10 + pct * W - 7},6 ${10 + pct * W + 7},6 ${10 + pct * W},18`} className="fill-ink" />
        </svg>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Can land?" value={canLand ? "Yes" : "No"} tone={canLand ? "good" : "bad"} />
          <Readout label="Max ashore at once" value={maxAshore} tone="ink" />
          <Readout label="Visitors / season" value={seasonVisitors.toLocaleString("en-GB")} tone="ink" />
          <Readout label="Impact" value={`${impact}%`} tone={tone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "living-in-extremes-kit-packer",
    title: "Expedition kit packer",
    blurb: "Choose a destination and pack your rucksack: cover every hazard without going over the weight limit.",
    Component: KitPacker,
  },
  {
    id: "living-in-extremes-carrying-capacity",
    title: "Antarctic carrying-capacity simulator",
    blurb: "Change ship size, visit numbers and whether IAATO rules are followed — watch the impact on a penguin-colony landing site.",
    Component: CarryingCapacity,
  },
];
