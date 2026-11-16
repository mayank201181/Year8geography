"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Design-a-creature: pick an environment and features → survival score.
// ---------------------------------------------------------------------------
type Env = "desert" | "polar" | "mountain";

interface Feature {
  id: string;
  label: string;
  /** Effect on survival in each environment (−2 … +2) with the reason. */
  fx: Record<Env, [number, string]>;
}

const FEATURES: Feature[] = [
  {
    id: "bigEars",
    label: "Large thin ears",
    fx: {
      desert: [2, "Large ears give off body heat to the air (like a fennec fox)."],
      polar: [-2, "Large ears lose precious heat and risk frostbite — Arctic foxes have small ears."],
      mountain: [-1, "Big ears lose heat in the cold mountain air."],
    },
  },
  {
    id: "thickFur",
    label: "Thick fur / woolly undercoat",
    fx: {
      desert: [-1, "Thick fur traps heat — though a light coat can shade the skin from the sun."],
      polar: [2, "Thick fur traps still air, a brilliant insulator."],
      mountain: [2, "A dense undercoat keeps out the cold (like a yak or snow leopard)."],
    },
  },
  {
    id: "blubber",
    label: "Layer of blubber",
    fx: {
      desert: [-2, "A fat layer all over would make overheating far more likely."],
      polar: [2, "Blubber insulates in freezing water and stores energy."],
      mountain: [0, "Some fat helps in the cold, but heavy blubber is a burden on steep slopes."],
    },
  },
  {
    id: "nocturnal",
    label: "Nocturnal (active at night)",
    fx: {
      desert: [2, "Avoids the scorching daytime heat."],
      polar: [-1, "Nights are the coldest time — and in winter there is little daylight anyway."],
      mountain: [-1, "Nights at altitude are bitterly cold."],
    },
  },
  {
    id: "burrow",
    label: "Shelters in a burrow or den",
    fx: {
      desert: [2, "Underground is cooler and more humid by day."],
      polar: [1, "A snow den shelters from wind (polar bear mothers dig one)."],
      mountain: [1, "A sheltered den protects from wind and cold."],
    },
  },
  {
    id: "wideFeet",
    label: "Wide, padded or furry feet",
    fx: {
      desert: [1, "Wide pads stop sinking into soft sand and protect from hot ground."],
      polar: [1, "Wide paws spread weight on snow and thin ice."],
      mountain: [2, "Big furry paws act like snowshoes and grip rocky slopes."],
    },
  },
  {
    id: "bigLungs",
    label: "Large lungs and heart",
    fx: {
      desert: [0, "No special advantage at low altitude."],
      polar: [0, "No special advantage at sea level."],
      mountain: [2, "Takes in and pumps more oxygen from thin air (like a yak)."],
    },
  },
  {
    id: "concUrine",
    label: "Kidneys that save water",
    fx: {
      desert: [2, "Very concentrated urine saves water (like a kangaroo rat)."],
      polar: [0, "Water is frozen, but saving it is less critical than keeping warm."],
      mountain: [0, "Little effect on the main mountain problems."],
    },
  },
  {
    id: "white",
    label: "White coat",
    fx: {
      desert: [0, "Pale colours reflect sunlight, but pure white stands out on sand."],
      polar: [2, "Camouflage against snow and ice."],
      mountain: [1, "Good camouflage in snow, less so on bare rock."],
    },
  },
  {
    id: "huddle",
    label: "Huddles with others",
    fx: {
      desert: [-1, "Huddling traps heat — the opposite of what you need."],
      polar: [2, "Huddling cuts each animal's exposed surface (like emperor penguins)."],
      mountain: [1, "Sharing body heat helps on freezing nights."],
    },
  },
];

const ENV_INFO: Record<Env, { name: string; problems: string; bg: string; ground: string }> = {
  desert: { name: "Hot desert", problems: "heat by day and very little water", bg: "#fef3c7", ground: "#fde68a" },
  polar: { name: "Polar", problems: "extreme cold, wind and a short summer", bg: "#e0f2fe", ground: "#f8fafc" },
  mountain: { name: "High mountain", problems: "thin air (low oxygen), cold and strong UV", bg: "#e0e7ff", ground: "#d6d3d1" },
};

function DesignCreature() {
  const [env, setEnv] = useState<Env>("polar");
  const [on, setOn] = useState<Record<string, boolean>>({ thickFur: true });
  const chosen = FEATURES.filter((f) => on[f.id]);
  const raw = chosen.reduce((s, f) => s + f.fx[env][0], 0);
  // Best possible: sum of positive scores for this environment.
  const best = FEATURES.reduce((s, f) => s + Math.max(0, f.fx[env][0]), 0);
  const score = Math.max(0, Math.round((100 * raw) / best));
  const verdict = score >= 75 ? "Thriving" : score >= 45 ? "Surviving" : score >= 20 ? "Struggling" : "Would not survive";
  const tone = score >= 75 ? "good" : score >= 45 ? "brand" : "bad";
  const info = ENV_INFO[env];
  const earR = on.bigEars ? 20 : 8;
  const coat = on.white ? "#f8fafc" : env === "desert" ? "#d6a35c" : "#a16207";
  const furW = on.thickFur ? 6 : 2;
  const goodOnes = chosen.filter((f) => f.fx[env][0] > 0);
  const badOnes = chosen.filter((f) => f.fx[env][0] < 0);
  const missing = FEATURES.filter((f) => !on[f.id] && f.fx[env][0] === 2);

  return (
    <WidgetFrame
      title="Design a creature"
      tryThis={[
        "Build the best possible desert animal. Then switch to Polar without changing anything — what happens to the score?",
        "Which single feature is helpful in all three environments?",
        "Large thin ears: in which environment are they a big advantage, and why are they a disadvantage elsewhere?",
      ]}
      caption={
        <>
          <p>
            <b>{info.name}:</b> the big problems here are {info.problems}. An adaptation is only &quot;good&quot; if it fits <i>this</i> environment — the same feature can help in one place and harm in another.
          </p>
          {missing.length ? (
            <p className="mt-2 text-ink-2">Still missing a strong adaptation for here: {missing.map((f) => f.label.toLowerCase()).join(", ")}.</p>
          ) : null}
          <p className="mt-2 text-xs text-ink-2">Simplified model: scores are for comparison, not real survival odds. Real adaptations evolve over many generations by natural selection — an animal cannot pick them.</p>
        </>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Environment"
          value={env}
          onChange={setEnv}
          options={[
            { value: "desert", label: "🏜️ Desert" },
            { value: "polar", label: "🧊 Polar" },
            { value: "mountain", label: "🏔️ Mountain" },
          ]}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <svg viewBox="0 0 240 170" className="h-auto w-full rounded-xl border border-line" role="img" aria-label={`Your creature in the ${info.name.toLowerCase()} environment, with ${chosen.length ? chosen.map((f) => f.label.toLowerCase()).join(", ") : "no special features"}. Survival score ${score} out of 100.`}>
            <rect x="0" y="0" width="240" height="170" fill={info.bg} />
            {env === "mountain" ? <polygon points="0,130 60,50 110,110 160,30 240,130" fill="#cbd5e1" /> : null}
            {env === "desert" ? <circle cx="205" cy="30" r="16" fill="#fbbf24" /> : null}
            <rect x="0" y="130" width="240" height="40" fill={info.ground} />
            {on.burrow ? <ellipse cx="200" cy="140" rx="22" ry="9" fill="#78350f" opacity="0.6" /> : null}
            {/* body */}
            <ellipse cx="110" cy="105" rx="48" ry="28" fill={coat} stroke="#334155" strokeWidth={furW} strokeDasharray={on.thickFur ? "3 2" : undefined} />
            {on.blubber ? <ellipse cx="110" cy="105" rx="40" ry="20" fill="none" stroke="#fbbf24" strokeWidth="4" opacity="0.8" /> : null}
            {/* head + ears */}
            <circle cx="160" cy="80" r="18" fill={coat} stroke="#334155" strokeWidth={furW / 2 + 1} />
            <ellipse cx={152} cy={62 - earR / 2} rx={earR / 2.2} ry={earR} fill={coat} stroke="#334155" strokeWidth="1.5" />
            <ellipse cx={170} cy={62 - earR / 2} rx={earR / 2.2} ry={earR} fill={coat} stroke="#334155" strokeWidth="1.5" />
            <circle cx="166" cy="78" r="2.5" fill="#1f2937" />
            {/* legs + feet */}
            {[80, 135].map((x) => (
              <g key={x}>
                <rect x={x - 4} y="125" width="8" height="12" fill={coat} stroke="#334155" />
                <ellipse cx={x} cy="138" rx={on.wideFeet ? 11 : 5} ry="3.5" fill="#334155" />
              </g>
            ))}
            {on.bigLungs ? <ellipse cx="125" cy="100" rx="12" ry="9" fill="#fca5a5" stroke="#b91c1c" strokeWidth="1" /> : null}
            {on.huddle ? (
              <g opacity="0.55">
                <ellipse cx="40" cy="112" rx="26" ry="18" fill={coat} stroke="#334155" />
                <ellipse cx="60" cy="122" rx="26" ry="16" fill={coat} stroke="#334155" />
              </g>
            ) : null}
            {on.nocturnal ? <text x="12" y="24" fontSize="18">🌙</text> : null}
          </svg>
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Readout label="Survival score" value={`${score}/100`} tone={tone} />
              <Readout label="Verdict" value={verdict} tone={tone} />
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-surface-2" aria-hidden>
              <div className={`h-full ${score >= 75 ? "bg-good" : score >= 45 ? "bg-brand" : "bg-bad"}`} style={{ width: `${score}%` }} />
            </div>
          </div>
        </div>
        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-ink-2">Choose features (tap to toggle)</legend>
          <div className="flex flex-wrap gap-2">
            {FEATURES.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={!!on[f.id]}
                onClick={() => setOn((o) => ({ ...o, [f.id]: !o[f.id] }))}
                className={`min-h-[40px] rounded-xl border px-3 py-2 text-sm font-bold transition ${on[f.id] ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2"}`}
              >
                {on[f.id] ? "✓ " : ""}
                {f.label}
              </button>
            ))}
          </div>
        </fieldset>
        {chosen.length ? (
          <ul className="space-y-1 text-sm">
            {goodOnes.map((f) => (
              <li key={f.id} className="rounded-lg bg-good-soft px-3 py-1.5 text-ink">
                <b className="text-good">+ {f.label}:</b> {f.fx[env][1]}
              </li>
            ))}
            {badOnes.map((f) => (
              <li key={f.id} className="rounded-lg bg-bad-soft px-3 py-1.5 text-ink">
                <b className="text-bad">− {f.label}:</b> {f.fx[env][1]}
              </li>
            ))}
            {chosen
              .filter((f) => f.fx[env][0] === 0)
              .map((f) => (
                <li key={f.id} className="rounded-lg bg-surface-2 px-3 py-1.5 text-ink-2">
                  <b>○ {f.label}:</b> {f.fx[env][1]}
                </li>
              ))}
          </ul>
        ) : (
          <p className="text-sm text-ink-2">Tap some features to build your creature.</p>
        )}
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Surface area to volume: body size + ears, and the penguin huddle.
// ---------------------------------------------------------------------------
function fmt(n: number, dp = 2): string {
  return Number(n.toFixed(dp)).toLocaleString("en-GB", { maximumFractionDigits: dp });
}

function SurfaceVolume() {
  const [mode, setMode] = useState<"body" | "huddle">("body");
  const [side, setSide] = useState(4);
  const [ear, setEar] = useState(1);
  const [rows, setRows] = useState(1);

  // Body mode: cube body of side s + two thin square ears of side e (both faces lose heat; ear volume ignored).
  const bodySA = 6 * side * side;
  const earSA = 2 * 2 * ear * ear;
  const vol = side * side * side;
  const ratio = (bodySA + earSA) / vol;
  const bodyOnly = bodySA / vol;
  const ratioMax = 7;

  // Huddle mode: n × n penguins, each a 1-unit cube standing on ice (bottom face not exposed).
  const n = rows;
  const count = n * n;
  const aloneEach = 5;
  const huddleTotal = n * n + 4 * n;
  const huddleEach = huddleTotal / count;
  const saving = Math.round(100 * (1 - huddleEach / aloneEach));

  const suited = ratio >= 2 ? "hot desert (loses heat fast)" : ratio <= 1 ? "polar cold (keeps heat in)" : "in between";

  const scale = 120 / 10; // px per cm in the body drawing (max side 10 cm)
  const s = side * scale;
  const e = ear * scale;
  const ox = 160 - s / 2;
  const oy = 200 - s;

  return (
    <WidgetFrame
      title="Surface area to volume: why size and ears matter"
      tryThis={
        mode === "body"
          ? [
              "Keep the ears small and shrink the body from 10 cm to 1 cm. What happens to SA : V?",
              "Make an animal with SA : V below 1. Which environment would it suit — and why are polar bears and musk oxen big?",
              "Give a 3 cm animal 3 cm ears. How much do the ears add to its SA : V? Think fennec fox.",
            ]
          : [
              "Predict: with 2 rows (4 penguins), how much exposed surface does each penguin have? Then check.",
              "How big must the huddle be for each penguin to lose less than half the heat it would alone?",
              "Why do penguins keep shuffling from the edge to the middle?",
            ]
      }
      caption={
        mode === "body" ? (
          <>
            <p>
              Heat is made throughout the body&apos;s <b>volume</b> but escapes through its <b>surface</b>. A bigger SA : V means heat escapes faster for the animal&apos;s size. When the side doubles, surface area becomes 4 times bigger but volume becomes 8 times bigger — so the ratio halves.
            </p>
            <p className="mt-2">
              Right now the body alone has SA : V = {fmt(bodyOnly)}; the ears push it to {fmt(ratio)}. That suits a <b>{suited}</b> environment. Big ears help a fennec fox shed heat in the Sahara; small ears help an Arctic fox keep it.
            </p>
            <p className="mt-2 text-xs text-ink-2">Simplified model: body = cube, ears = thin squares (both sides count, ear volume ignored). Units: cm² ÷ cm³.</p>
          </>
        ) : (
          <>
            <p>
              Alone, each penguin (modelled as a 1 × 1 × 1 cube on the ice) has <b>5</b> faces exposed to the wind. In a {n} × {n} huddle of {count}, only the tops and the outside edge are exposed: {n}² + 4 × {n} = {huddleTotal} faces, so about <b>{fmt(huddleEach)}</b> each — {saving}% less surface losing heat.
            </p>
            <p className="mt-2">Real emperor penguin huddles can contain thousands of birds, and they keep shuffling so everyone gets a turn in the warm middle and nobody stays on the windy edge for long.</p>
            <p className="mt-2 text-xs text-ink-2">Simplified model: real penguins are not cubes, but the idea — less exposed surface per animal — is the same.</p>
          </>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Model"
          value={mode}
          onChange={setMode}
          options={[
            { value: "body", label: "Body & ears" },
            { value: "huddle", label: "Penguin huddle" },
          ]}
        />
        {mode === "body" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3">
              <Slider label="Body size (side of cube)" value={side} min={1} max={10} onChange={setSide} format={(v) => `${v} cm`} />
              <Slider label="Ear size (side of each ear)" value={ear} min={0} max={4} step={0.5} onChange={setEar} format={(v) => `${v} cm`} />
              <div className="grid grid-cols-2 gap-2">
                <Readout label="Surface area" value={`${fmt(bodySA + earSA, 1)} cm²`} tone="ink" />
                <Readout label="Volume" value={`${vol} cm³`} tone="ink" />
                <Readout label="SA : V" value={fmt(ratio)} tone={ratio >= 2 ? "bad" : ratio <= 1 ? "good" : "brand"} />
                <Readout label="Best suited to" value={ratio >= 2 ? "Heat" : ratio <= 1 ? "Cold" : "Mild"} tone="ink" />
              </div>
            </div>
            <div className="space-y-2">
              <svg viewBox="0 0 320 230" className="h-auto w-full" role="img" aria-label={`A cube body of side ${side} cm with ears of side ${ear} cm. Surface area to volume ratio ${fmt(ratio)}.`}>
                <rect x="0" y="0" width="320" height="230" className="fill-surface-2" />
                {/* ears */}
                {ear > 0 ? (
                  <>
                    <polygon points={`${ox + s * 0.2},${oy} ${ox + s * 0.2 - e / 2},${oy - e} ${ox + s * 0.2 + e / 2},${oy - e}`} fill="#fdba74" stroke="#334155" />
                    <polygon points={`${ox + s * 0.8},${oy} ${ox + s * 0.8 - e / 2},${oy - e} ${ox + s * 0.8 + e / 2},${oy - e}`} fill="#fdba74" stroke="#334155" />
                  </>
                ) : null}
                {/* cube (simple 3D look) */}
                <polygon points={`${ox},${oy} ${ox + s * 0.25},${oy - s * 0.2} ${ox + s * 1.25},${oy - s * 0.2} ${ox + s},${oy}`} fill="#fde68a" stroke="#334155" />
                <polygon points={`${ox + s},${oy} ${ox + s * 1.25},${oy - s * 0.2} ${ox + s * 1.25},${oy + s * 0.8} ${ox + s},${oy + s}`} fill="#fcd34d" stroke="#334155" />
                <rect x={ox} y={oy} width={s} height={s} fill="#fef3c7" stroke="#334155" />
                <text x="160" y="222" fontSize="12" textAnchor="middle" className="fill-ink-2">Body side {side} cm · ears {ear} cm</text>
              </svg>
              <div aria-hidden className="space-y-1 text-xs text-ink-2">
                <div className="flex items-center gap-2">
                  <span className="w-20">Body only</span>
                  <div className="h-3 flex-1 rounded-full bg-surface-2">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${Math.min(100, (100 * bodyOnly) / ratioMax)}%` }} />
                  </div>
                  <span className="w-10 text-right tabular-nums">{fmt(bodyOnly)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-20">With ears</span>
                  <div className="h-3 flex-1 rounded-full bg-surface-2">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${Math.min(100, (100 * ratio) / ratioMax)}%` }} />
                  </div>
                  <span className="w-10 text-right tabular-nums">{fmt(ratio)}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3">
              <Stepper label="Rows in the huddle" value={rows} min={1} max={10} onChange={setRows} format={(v) => `${v} × ${v}`} />
              <div className="grid grid-cols-2 gap-2">
                <Readout label="Penguins" value={count} tone="ink" />
                <Readout label="Exposed faces each" value={fmt(huddleEach)} tone={huddleEach < 2.5 ? "good" : "brand"} />
                <Readout label="Alone, each" value={aloneEach} tone="ink" />
                <Readout label="Heat-loss surface saved" value={`${saving}%`} tone={saving >= 50 ? "good" : "brand"} />
              </div>
            </div>
            <svg viewBox="0 0 220 220" className="h-auto w-full" role="img" aria-label={`Top view of a ${n} by ${n} huddle of ${count} penguins. Edge penguins shown darker. Each has about ${fmt(huddleEach)} exposed faces compared with 5 alone.`}>
              <rect x="0" y="0" width="220" height="220" fill="#e0f2fe" />
              {Array.from({ length: count }, (_, i) => {
                const r = Math.floor(i / n);
                const c = i % n;
                const size = 200 / n;
                const edge = r === 0 || c === 0 || r === n - 1 || c === n - 1;
                return (
                  <circle
                    key={i}
                    cx={10 + c * size + size / 2}
                    cy={10 + r * size + size / 2}
                    r={size * 0.42}
                    fill={edge ? "#1f2937" : "#f59e0b"}
                    stroke="#f8fafc"
                    strokeWidth={1}
                  />
                );
              })}
            </svg>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "adaptations-design-creature",
    title: "Design a creature",
    blurb: "Choose an environment and give your animal features — see which adaptations help, which harm, and why.",
    Component: DesignCreature,
  },
  {
    id: "adaptations-surface-volume",
    title: "Surface area to volume explorer",
    blurb: "Change body size, ear size and huddle size to see why small ears, big bodies and huddling keep heat in.",
    Component: SurfaceVolume,
  },
];
