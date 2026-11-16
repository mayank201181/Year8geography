"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Zoning planner — simplified model of no-take zones, spillover and tourism
// ---------------------------------------------------------------------------
function zoningModel(green: number, yellow: number, heatwave: boolean) {
  const blue = 100 - green - yellow;
  // Fish stock as % of an unfished reef: protected area lets fish grow big and breed.
  const stock = Math.min(100, 30 + 0.9 * green + 0.4 * yellow);
  // Catch: fishable area × how many fish there are (spillover from green zones raises stock).
  const fishable = blue + 0.3 * yellow;
  const catchIdx = Math.round((fishable * stock) / 100);
  // Reef health: healthy fish (grazers, predators of starfish) help coral; a heatwave hits every zone.
  const health = Math.round(Math.max(5, (40 + 0.6 * stock) * (heatwave ? 0.55 : 1)));
  const tourism = Math.round(health);
  const protection = Math.round(green + 0.5 * yellow);
  return { blue, stock: Math.round(stock), catchIdx, health, tourism, protection };
}

function ZoningPlanner() {
  const [green, setGreen] = useState(5);
  const [yellow, setYellow] = useState(10);
  const [heat, setHeat] = useState<"off" | "on">("off");
  const y = Math.min(yellow, 100 - green);
  const m = zoningModel(green, y, heat === "on");
  // Find the green % that gives the biggest catch with this yellow share (for the caption).
  let best = 0;
  let bestCatch = -1;
  for (let g = 0; g <= 100 - y; g++) {
    const c = zoningModel(g, y, false).catchIdx;
    if (c > bestCatch) { bestCatch = c; best = g; }
  }
  const W = 320;
  const gw = (green / 100) * W;
  const yw = (y / 100) * W;
  const bw = W - gw - yw;
  const fishDots = Math.round(m.stock / 8);
  let caption: string;
  if (green < 10) caption = `With only ${green}% green zone, fishing boats can reach almost the whole reef. Fish stocks fall to ${m.stock}% of an unfished reef, so each boat catches less and big breeding fish are rare.`;
  else if (green > 60) caption = `${green}% green zone protects the reef strongly (fish stock ${m.stock}%), but fishers are squeezed into a small area, so the total catch falls. Expect conflict with the fishing industry.`;
  else caption = `${green}% green zone: fish grow big inside no-take areas and "spill over" into fished zones, so the catch (${m.catchIdx}) can stay high while protection rises. This is why the Great Barrier Reef was rezoned to about 33% green in 2004.`;
  if (heat === "on") caption += ` But the marine heatwave cuts reef health to ${m.health} in every zone — zoning cannot stop warm water. That is the limit of local management.`;
  return (
    <WidgetFrame
      title="Reef zoning planner"
      tryThis={[
        "Set green to 33% (the Great Barrier Reef since 2004). How does the catch compare with 5%?",
        `Find the green % that gives fishers the **biggest** catch. Is it 0%? Why not?`,
        "Push green to 90%. Who wins and who loses?",
        "Switch on the marine heatwave. Can any zoning plan keep reef health above 60?",
      ]}
      caption={<p>{caption} <span className="text-ink-2">(Simplified model — numbers are indices, not real tonnes or dollars.)</span></p>}
    >
      <div className="space-y-3">
        <Slider label="Green zone (no-take) %" value={green} min={0} max={100} onChange={(v) => { setGreen(v); if (yellow > 100 - v) setYellow(100 - v); }} format={(v) => `${v}%`} />
        <Slider label="Yellow zone (limited fishing) %" value={y} min={0} max={100 - green} onChange={setYellow} format={(v) => `${v}%`} />
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="font-semibold text-ink-2">Marine heatwave</span>
          <Segmented label="Marine heatwave" options={[{ value: "off", label: "Off" }, { value: "on", label: "On 🔥" }]} value={heat} onChange={setHeat} />
        </div>
        <svg viewBox="0 0 340 110" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" role="img" aria-label={`Reef strip: ${green}% green, ${y}% yellow, ${m.blue}% light-blue general use. Fish stock ${m.stock}% of unfished.`}>
          <rect x={10} y={20} width={gw} height={50} fill="#4ade80" stroke="#334155" />
          <rect x={10 + gw} y={20} width={yw} height={50} fill="#fde047" stroke="#334155" />
          <rect x={10 + gw + yw} y={20} width={bw} height={50} fill="#bae6fd" stroke="#334155" />
          {Array.from({ length: fishDots }, (_, i) => (
            <text key={i} x={18 + ((i * 37) % 300)} y={36 + ((i * 13) % 30)} fontSize={11}>🐟</text>
          ))}
          {heat === "on" ? <rect x={10} y={20} width={W} height={50} fill="#ffffff" opacity={0.45} /> : null}
          <text x={10} y={14} fontSize={11} className="fill-ink-2">Coast side → open sea (schematic)</text>
          <text x={10} y={88} fontSize={11} className="fill-ink">Green {green}%</text>
          <text x={130} y={88} fontSize={11} className="fill-ink">Yellow {y}%</text>
          <text x={240} y={88} fontSize={11} className="fill-ink">Light blue {m.blue}%</text>
          {heat === "on" ? <text x={170} y={104} fontSize={11} textAnchor="middle" className="fill-bad">Bleaching in every zone</text> : null}
        </svg>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Fish stock" value={`${m.stock}%`} tone={m.stock >= 60 ? "good" : m.stock < 45 ? "bad" : "brand"} />
          <Readout label="Fishing catch" value={m.catchIdx} tone={m.catchIdx >= bestCatch - 2 ? "good" : "ink"} />
          <Readout label="Tourism appeal" value={m.tourism} tone={m.tourism >= 70 ? "good" : m.tourism < 50 ? "bad" : "brand"} />
          <Readout label="Protection" value={`${m.protection}/100`} tone="brand" />
        </div>
        <p className="text-xs text-ink-2">Biggest catch with {y}% yellow: about {best}% green (no heatwave).</p>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Budget allocator — local threats vs a global one
// ---------------------------------------------------------------------------
type Key = "water" | "cots" | "patrol" | "restore" | "emissions";
const ITEMS: { key: Key; label: string; base: number; k: number }[] = [
  { key: "water", label: "Farm water quality (less run-off)", base: 18, k: 25 },
  { key: "cots", label: "Crown-of-thorns culling", base: 15, k: 15 },
  { key: "patrol", label: "Fishing patrols in green zones", base: 10, k: 12 },
  { key: "restore", label: "Coral restoration", base: 6, k: 60 },
  { key: "emissions", label: "Cutting Australia's emissions", base: 0, k: 1 },
];
const HEAT: Record<"low" | "mid" | "high", number> = { low: 10, mid: 25, high: 45 };

function BudgetAllocator() {
  const [spend, setSpend] = useState<Record<Key, number>>({ water: 20, cots: 20, patrol: 20, restore: 20, emissions: 20 });
  const [world, setWorld] = useState<"low" | "mid" | "high">("mid");
  const TOTAL = 100;
  const used = Object.values(spend).reduce((a, b) => a + b, 0);
  const left = TOTAL - used;
  // Local stresses fall with diminishing returns as money is spent.
  const stress: Record<Key, number> = { water: 0, cots: 0, patrol: 0, restore: 0, emissions: 0 };
  for (const it of ITEMS) if (it.key !== "emissions" && it.key !== "restore") stress[it.key] = it.base * Math.exp(-spend[it.key] / it.k);
  const localStress = stress.water + stress.cots + stress.patrol;
  // Australia emits about 1% of global CO2, so its own cuts barely change global heat stress.
  const heat = HEAT[world] * (1 - 0.01 * Math.min(1, spend.emissions / 100));
  const restoreBoost = ITEMS[3].base * (1 - Math.exp(-spend.restore / ITEMS[3].k));
  const health = Math.round(Math.max(0, Math.min(100, 100 - localStress - heat + restoreBoost - 6)));
  const localLeft = Math.round(localStress);
  const set = (k: Key, v: number) => setSpend((s) => {
    const others = Object.entries(s).reduce((a, [kk, vv]) => (kk === k ? a : a + vv), 0);
    return { ...s, [k]: Math.min(v, TOTAL - others) };
  });
  let caption = `You have spent $${used} million of $${TOTAL} million. Local stresses left: ${localLeft} points; heat stress from the world's emissions: ${Math.round(heat)} points.`;
  if (world === "high") caption += " With high global emissions, heat stress swamps everything — even a perfect local budget leaves the reef in poor shape.";
  else if (world === "low") caption += " With low global emissions, good local management really pays off: the reef can stay healthy and recover between disturbances.";
  else caption += " Spending on water quality and starfish control builds resilience, so coral recovers faster after bleaching — but it cannot prevent the bleaching itself.";
  if (spend.emissions >= 40) caption += " Notice that Australia's own emissions cuts hardly move the heat stress: Australia produces only about 1% of global CO₂, so reefs need worldwide action.";
  return (
    <WidgetFrame
      title="Reef budget allocator"
      tryThis={[
        "Put all $100 million into one item. Which single choice helps the reef most?",
        "Keep your budget the same and switch world emissions from Low to High. What happens to reef health?",
        "Can you get reef health above 70 with High world emissions?",
        "Why does spending more on crown-of-thorns culling stop helping after a while?",
      ]}
      caption={<p>{caption} <span className="text-ink-2">(Simplified model — scores show the pattern, not real measurements.)</span></p>}
    >
      <div className="space-y-3">
        {ITEMS.map((it) => (
          <Slider key={it.key} label={it.label} value={spend[it.key]} min={0} max={100} step={5} onChange={(v) => set(it.key, v)} format={(v) => `$${v}m`} />
        ))}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="font-semibold text-ink-2">World emissions path</span>
          <Segmented label="World emissions path" options={[{ value: "low", label: "Low" }, { value: "mid", label: "Medium" }, { value: "high", label: "High" }]} value={world} onChange={setWorld} />
        </div>
        <svg viewBox="0 0 340 90" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" role="img" aria-label={`Reef health ${health} out of 100. Local stress ${localLeft}, global heat stress ${Math.round(heat)}.`}>
          <text x={10} y={16} fontSize={12} className="fill-ink">Reef health</text>
          <rect x={10} y={24} width={320} height={22} rx={6} className="fill-surface-2 stroke-line" />
          <rect x={10} y={24} width={(320 * health) / 100} height={22} rx={6} fill={health >= 70 ? "#4ade80" : health >= 45 ? "#fde047" : "#f87171"} />
          <text x={170} y={40} fontSize={12} textAnchor="middle" fill="#1f2937">{health} / 100</text>
          <rect x={10} y={58} width={Math.min(320, localStress * 4)} height={10} fill="#a16207" />
          <text x={14 + Math.min(310, localStress * 4)} y={67} fontSize={10} className="fill-ink-2">local stress</text>
          <rect x={10} y={74} width={Math.min(320, heat * 4)} height={10} fill="#dc2626" />
          <text x={14 + Math.min(300, heat * 4)} y={83} fontSize={10} className="fill-ink-2">global heat stress</text>
        </svg>
        <div className="grid grid-cols-3 gap-2">
          <Readout label="Budget left" value={`$${left}m`} tone={left === 0 ? "good" : "ink"} />
          <Readout label="Local stress" value={localLeft} tone={localLeft <= 10 ? "good" : "bad"} />
          <Readout label="Reef health" value={health} tone={health >= 70 ? "good" : health < 45 ? "bad" : "brand"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "reef-zoning-planner", title: "Reef zoning planner", blurb: "Share the reef between green, yellow and light-blue zones and watch fish stocks, catch and tourism respond.", Component: ZoningPlanner },
  { id: "reef-budget-allocator", title: "Reef budget allocator", blurb: "Spend $100 million on reef threats — then see why global emissions decide the reef's future.", Component: BudgetAllocator },
];
