"use client";
import { useEffect, useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// Natural diagram colours (fixed so the "photo-like" scene reads the same in light/dark).
const SKY = "#f0f9ff";
const SEA = "#bae6fd";
const ROCK = "#d6d3d1";
const LAND = "#bbf7d0";
const SAND = "#fde68a";
const INK = "#1f2937";
const EDGE = "#334155";

// ---------------------------------------------------------------------------
// Widget 1: headland erosion time-lapse + cliff retreat / wave-cut platform
// ---------------------------------------------------------------------------
const STAGES = [
  {
    name: "Crack",
    label: "crack (joint) in the headland",
    caption:
      "Waves attack a **line of weakness** — a joint or crack — in the hard-rock headland. **Hydraulic action** forces air and water into the crack; **abrasion** hurls sand and pebbles at it. Wave refraction focuses energy on headlands, so they are attacked hardest.",
  },
  {
    name: "Cave",
    label: "cave at high-tide level",
    caption:
      "The crack is widened into a **cave** at the base of the headland, where waves hit hardest (around high-tide level). Erosion is still mostly hydraulic action and abrasion.",
  },
  {
    name: "Arch",
    label: "arch — like Durdle Door",
    caption:
      "The cave is eroded right through the headland (often two caves meet back-to-back), leaving a rock bridge: an **arch**, like **Durdle Door** in Dorset. Waves keep eroding the base of the arch.",
  },
  {
    name: "Stack",
    label: "stack — like Old Harry",
    caption:
      "Waves undercut the arch while **weathering** (rain, salt, freeze-thaw) weakens the roof from above. Eventually the roof collapses, leaving an isolated pillar: a **stack**, like **Old Harry** at Handfast Point. Notice the mainland cliff has retreated too.",
  },
  {
    name: "Stump",
    label: "stump — covered at high tide",
    caption:
      "A wave-cut notch forms at the base of the stack until it collapses, leaving a low **stump** that is covered at high tide — like **Old Harry's Wife**, which collapsed in 1896. The whole sequence takes hundreds to thousands of years.",
  },
] as const;

function HeadlandScene({ stage }: { stage: number }) {
  const s = STAGES[stage];
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`Side view of a headland at stage ${stage + 1} of 5: ${s.label}`} className="h-auto w-full rounded-xl">
      <rect x="0" y="0" width="480" height="280" fill={SKY} />
      {/* land surface */}
      {stage <= 2 ? (
        <path d="M0 70 L430 78 L430 250 L0 250 Z" fill={ROCK} stroke={EDGE} strokeWidth="2" />
      ) : stage === 3 ? (
        <>
          <path d="M0 70 L312 75 L312 250 L0 250 Z" fill={ROCK} stroke={EDGE} strokeWidth="2" />
          <path d="M368 92 L430 96 L430 250 L368 250 Z" fill={ROCK} stroke={EDGE} strokeWidth="2" />
          <circle cx="340" cy="244" r="6" fill={ROCK} stroke={EDGE} />
          <circle cx="352" cy="246" r="4" fill={ROCK} stroke={EDGE} />
        </>
      ) : (
        <>
          <path d="M0 70 L290 74 L290 250 L0 250 Z" fill={ROCK} stroke={EDGE} strokeWidth="2" />
          <path d="M372 214 L425 216 L425 250 L372 250 Z" fill={ROCK} stroke={EDGE} strokeWidth="2" />
          <circle cx="310" cy="245" r="5" fill={ROCK} stroke={EDGE} />
        </>
      )}
      {/* grass on top */}
      <path d={stage <= 2 ? "M0 70 L430 78" : stage === 3 ? "M0 70 L312 75" : "M0 70 L290 74"} stroke="#16a34a" strokeWidth="5" fill="none" />
      {stage === 3 ? <path d="M368 92 L430 96" stroke="#16a34a" strokeWidth="5" fill="none" /> : null}
      {stage === 0 ? <path d="M340 205 L344 180 L339 160 L343 140" stroke={INK} strokeWidth="3" fill="none" /> : null}
      {stage === 1 ? <path d="M318 250 V200 Q340 158 362 200 V250 Z" fill="#64748b" stroke={EDGE} /> : null}
      {stage === 2 ? <path d="M314 250 V178 Q340 126 366 178 V250 Z" fill={SKY} stroke={EDGE} strokeWidth="2" /> : null}
      {/* sea (drawn over the rock so submerged parts look under water) */}
      <rect x="0" y="200" width="480" height="80" fill={SEA} fillOpacity="0.8" />
      <rect x="0" y="250" width="480" height="30" fill="#e7d3a8" />
      <line x1="0" y1="200" x2="480" y2="200" stroke="#0369a1" strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="8" y="196" fontSize="11" fill="#0369a1" fontFamily="sans-serif">high tide</text>
      {/* waves arriving */}
      <path d="M472 215 L446 215 M454 209 L446 215 L454 221" stroke="#0369a1" strokeWidth="2.5" fill="none" />
      <path d="M472 232 L446 232 M454 226 L446 232 L454 238" stroke="#0369a1" strokeWidth="2.5" fill="none" />
      <text x="8" y="40" fontSize="13" fontWeight="700" fill={INK} fontFamily="sans-serif">
        {`Stage ${stage + 1}: ${s.label}`}
      </text>
      <text x="8" y="58" fontSize="11" fill={INK} fontFamily="sans-serif">hard rock headland (e.g. chalk) — side view from the sea</text>
    </svg>
  );
}

function CliffRetreatScene({ widthM }: { widthM: number }) {
  // 0–3000 m mapped to 0–330 px; beyond that the drawing is capped.
  const MAX = 3000;
  const px = Math.min(widthM, MAX) * (330 / MAX);
  const cliffX = 420 - px;
  const notch = `M${cliffX} 150 L${cliffX - 14} 172 L${cliffX} 196`;
  return (
    <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`Cross-section of a retreating cliff with a wave-cut platform about ${Math.round(widthM)} metres wide`} className="h-auto w-full rounded-xl">
      <rect x="0" y="0" width="480" height="260" fill={SKY} />
      {/* land + cliff with notch */}
      <path d={`M0 60 L${cliffX} 60 L${cliffX} 150 L${cliffX - 14} 172 L${cliffX} 196 L${cliffX} 200 L420 206 L480 210 L480 260 L0 260 Z`} fill={ROCK} stroke={EDGE} strokeWidth="2" />
      <path d={`M0 60 L${cliffX} 60`} stroke="#16a34a" strokeWidth="5" />
      <path d={notch} fill="none" stroke={INK} strokeWidth="2" />
      {/* original cliff (ghost) */}
      <line x1="420" y1="60" x2="420" y2="206" stroke={EDGE} strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="416" y="54" fontSize="11" textAnchor="end" fill={INK} fontFamily="sans-serif">original cliff</text>
      {/* sea */}
      <rect x="0" y="190" width="480" height="70" fill={SEA} fillOpacity="0.75" />
      <line x1="0" y1="190" x2="480" y2="190" stroke="#0369a1" strokeDasharray="6 4" />
      <text x="474" y="186" fontSize="11" textAnchor="end" fill="#0369a1" fontFamily="sans-serif">high tide</text>
      {/* platform measure */}
      {px > 6 ? (
        <>
          <line x1={cliffX} y1="232" x2="420" y2="232" stroke={INK} strokeWidth="1.5" />
          <line x1={cliffX} y1="226" x2={cliffX} y2="238" stroke={INK} />
          <line x1="420" y1="226" x2="420" y2="238" stroke={INK} />
          <text x={(cliffX + 420) / 2} y="250" fontSize="12" textAnchor="middle" fill={INK} fontFamily="sans-serif">
            {widthM > MAX ? "wave-cut platform (off the scale!)" : "wave-cut platform"}
          </text>
        </>
      ) : null}
      {cliffX > 120 ? (
        <text x={cliffX - 20} y="170" fontSize="11" textAnchor="end" fill={INK} fontFamily="sans-serif">notch</text>
      ) : null}
    </svg>
  );
}

function HeadlandExplorer() {
  const [mode, setMode] = useState<"headland" | "cliff">("headland");
  const [stage, setStage] = useState(0);
  const [rate, setRate] = useState(20); // cm per year
  const [years, setYears] = useState(1000);
  const widthM = (rate * years) / 100;

  return (
    <WidgetFrame
      title="Headland erosion time-lapse"
      tryThis={
        mode === "headland"
          ? [
              "Before you press Next: which stage comes after the arch, and what has to fail for it to happen?",
              "At which stage does Durdle Door belong? Old Harry? Old Harry's Wife?",
              "Watch the mainland cliff as you step through. Why does it move back too?",
            ]
          : [
              "Holderness's soft boulder clay retreats about 1–2 m (100–200 cm) a year. Set the rate as high as it goes — how wide a platform after 2,000 years?",
              "Hard rock like granite may retreat only millimetres a year. Set 1 cm per year: how long to make a 50 m platform?",
              "Halve the rate and double the years. What happens to the platform width — why?",
            ]
      }
      caption={
        mode === "headland" ? (
          <span>{renderCaption(STAGES[stage].caption)}</span>
        ) : (
          <span>
            Waves cut a <b>notch</b> at the cliff foot; the overhang above collapses in a rockfall and the cliff moves back. Repeat for centuries and a gently sloping <b>wave-cut platform</b> is left behind, exposed at low tide. At {rate} cm per year for {years.toLocaleString("en-GB")} years the cliff retreats{" "}
            <b>{widthM.toLocaleString("en-GB", { maximumFractionDigits: 1 })} m</b>. <i>Simplified model:</i> real cliffs retreat in sudden collapses, and wide platforms absorb wave energy before waves reach the cliff — so retreat slows down and platforms rarely grow more than a few hundred metres wide.
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="View"
          value={mode}
          onChange={setMode}
          options={[
            { value: "headland", label: "Headland: crack → stump" },
            { value: "cliff", label: "Cliff: notch → platform" },
          ]}
        />
        {mode === "headland" ? (
          <>
            <HeadlandScene stage={stage} />
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Erosion stage">
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setStage((s) => Math.max(0, s - 1))} disabled={stage === 0}>
                ◀ Back
              </button>
              {STAGES.map((st, i) => (
                <button
                  key={st.name}
                  type="button"
                  aria-pressed={i === stage}
                  onClick={() => setStage(i)}
                  className={`btn btn-sm ${i === stage ? "btn-primary" : "btn-ghost"}`}
                >
                  {i + 1}. {st.name}
                </button>
              ))}
              <button type="button" className="btn btn-primary btn-sm" onClick={() => setStage((s) => Math.min(STAGES.length - 1, s + 1))} disabled={stage === STAGES.length - 1}>
                Next ▶
              </button>
            </div>
          </>
        ) : (
          <>
            <CliffRetreatScene widthM={widthM} />
            <div className="grid gap-3 sm:grid-cols-2">
              <Slider label="Retreat rate" value={rate} min={1} max={200} onChange={setRate} format={(v) => `${v} cm per year`} />
              <Slider label="Time" value={years} min={100} max={5000} step={100} onChange={setYears} format={(v) => `${v.toLocaleString("en-GB")} years`} />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Readout label="Cliff retreat" value={`${widthM.toLocaleString("en-GB", { maximumFractionDigits: 1 })} m`} />
              <Readout label="In km" value={`${(widthM / 1000).toLocaleString("en-GB", { maximumFractionDigits: 2 })} km`} tone="ink" />
            </div>
          </>
        )}
      </div>
    </WidgetFrame>
  );
}

/** Tiny **bold** renderer for captions (keeps the widget self-contained). */
function renderCaption(text: string) {
  return text.split("**").map((part, i) => (i % 2 === 1 ? <b key={i}>{part}</b> : <span key={i}>{part}</span>));
}

// ---------------------------------------------------------------------------
// Widget 2: longshore drift simulator (plan view, beach facing south)
// ---------------------------------------------------------------------------
const BEACH_M = 120; // beach length shown, metres
const PX_PER_M = 4; // 120 m → 480 px
const START_M = 45;
const GROYNES_M = [30, 60, 90];
const SWASH_M = 4; // distance travelled up-beach by each swash (simplified)

function simulate(angleDeg: number, waves: number, groynes: boolean) {
  const along = -Math.sin((angleDeg * Math.PI) / 180) * SWASH_M; // +ve = east
  let x = START_M;
  const pts: { x: number; top: boolean }[] = [{ x, top: false }];
  let blocked = false;
  for (let i = 0; i < waves; i++) {
    let nx = x + along;
    if (groynes) {
      for (const g of GROYNES_M) {
        if (x < g && nx >= g) { nx = g - 0.6; blocked = true; }
        if (x > g && nx <= g) { nx = g + 0.6; blocked = true; }
      }
    }
    nx = Math.max(1, Math.min(BEACH_M - 1, nx));
    pts.push({ x: nx, top: true });
    pts.push({ x: nx, top: false });
    x = nx;
  }
  return { x, pts, blocked, along };
}

function windLabel(a: number) {
  if (a === 0) return "from due south (straight onshore)";
  return `from ${Math.abs(a)}° ${a < 0 ? "west" : "east"} of south (${a < 0 ? "SW" : "SE"} side)`;
}

function LongshoreDrift() {
  const [angle, setAngle] = useState(-40); // −ve = wind from SW, +ve = from SE
  const [groynes, setGroynes] = useState<"off" | "on">("off");
  const [waves, setWaves] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setWaves((w) => (w >= 60 ? w : w + 1)), 450);
    return () => clearInterval(id);
  }, [playing]);

  const g = groynes === "on";
  const sim = simulate(angle, waves, g);
  const moved = sim.x - START_M;
  const dir = Math.abs(moved) < 0.05 ? (angle === 0 ? "none (no drift)" : "—") : moved > 0 ? "east →" : "← west";
  const driftEast = angle < 0;
  const TOP = 70; // swash limit (y)
  const BOT = 150; // backwash limit (y)
  const path = sim.pts.map((p, i) => `${i === 0 ? "M" : "L"}${(p.x * PX_PER_M).toFixed(1)} ${p.top ? TOP : BOT}`).join(" ");
  // sand wedges against the up-drift side of each groyne grow with waves (simplified)
  const wedge = Math.min(30, waves * 0.9) * Math.min(1, Math.abs(Math.sin((angle * Math.PI) / 180)) * 1.6);
  const arrowLen = 46;
  const rad = (angle * Math.PI) / 180;
  // wind blows TOWARDS: from south (bottom) to north (top), tilted
  const ax = 400, ay = 235;
  const tx = ax - Math.sin(rad) * arrowLen, ty = ay - Math.cos(rad) * arrowLen;
  // unit vector pointing back from the arrow head towards the tail
  const ux = Math.sin(rad), uy = Math.cos(rad);

  const caption =
    angle === 0
      ? "With waves arriving head-on, the swash goes straight up the beach and the backwash comes straight back down — the pebble just moves up and down. Longshore drift needs waves to arrive at an angle."
      : `The prevailing wind blows ${windLabel(angle)}, so each **swash** carries the pebble up the beach at an angle, and gravity pulls the **backwash** straight back down. The result is a zig-zag drift towards the **${driftEast ? "east" : "west"}**.${
          g
            ? ` Groynes block the drift: sand piles up on the ${driftEast ? "west" : "east"} (up-drift) side of each groyne, making a wider beach there — but beaches further ${driftEast ? "east" : "west"} are starved of sand.`
            : " Turn the groynes on to see how they trap sediment."
        } Simplified model: real swash distances vary with every wave.`;

  return (
    <WidgetFrame
      title="Longshore drift simulator"
      tryThis={[
        "Predict first: with the wind from the south-west, which way will the pebble travel? Then press Play.",
        "Set the wind to 0° (straight onshore). Does the pebble move along the beach at all?",
        "Try 20° then 40°. Does doubling the angle double the drift per wave? (Check the readout.)",
        "Turn groynes on. Which side of each groyne does sand pile up on — and what happens further along the coast?",
      ]}
      caption={<span>{renderCaption(caption)}</span>}
    >
      <div className="space-y-4">
        <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`Plan view of a south-facing beach. Wind ${windLabel(angle)}. After ${waves} waves the pebble has moved ${Math.abs(moved).toFixed(1)} metres ${moved >= 0 ? "east" : "west"}. Groynes ${groynes}.`} className="h-auto w-full rounded-xl">
          <rect x="0" y="0" width="480" height="50" fill={LAND} />
          <rect x="0" y="50" width="480" height="110" fill={SAND} />
          <rect x="0" y="160" width="480" height="120" fill={SEA} />
          <text x="8" y="30" fontSize="12" fill={INK} fontFamily="sans-serif">land (north)</text>
          <text x="8" y="272" fontSize="12" fill={INK} fontFamily="sans-serif">sea (south)</text>
          <text x="472" y="30" fontSize="12" textAnchor="end" fill={INK} fontFamily="sans-serif">W ← → E</text>
          {g
            ? GROYNES_M.map((gm) => {
                const gx = gm * PX_PER_M;
                const side = driftEast ? -1 : 1; // up-drift side
                return (
                  <g key={gm}>
                    {angle !== 0 && wedge > 0 ? <path d={`M${gx} 160 L${gx} ${160 + wedge * 0.6} L${gx + side * wedge * 2} 160 Z`} fill={SAND} stroke="#b45309" strokeWidth="1" /> : null}
                    <rect x={gx - 3} y="55" width="6" height="130" fill="#92400e" />
                  </g>
                );
              })
            : null}
          <path d={path} fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinejoin="round" />
          <circle cx={START_M * PX_PER_M} cy={BOT} r="4" fill="none" stroke={INK} strokeWidth="1.5" />
          <circle cx={sim.x * PX_PER_M} cy={BOT} r="7" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
          <text x={START_M * PX_PER_M} y={BOT + 18} fontSize="11" textAnchor="middle" fill={INK} fontFamily="sans-serif">start</text>
          {/* wind arrow */}
          <line x1={ax} y1={ay} x2={tx} y2={ty} stroke={INK} strokeWidth="3" />
          <path d={`M${tx} ${ty} L${tx + 10 * ux - 6 * uy} ${ty + 10 * uy + 6 * ux} L${tx + 10 * ux + 6 * uy} ${ty + 10 * uy - 6 * ux} Z`} fill={INK} />
          <text x={ax} y={ay + 22} fontSize="11" textAnchor="middle" fill={INK} fontFamily="sans-serif">wind &amp; waves</text>
          {/* scale bar */}
          <line x1="20" y1="215" x2={20 + 20 * PX_PER_M} y2="215" stroke={INK} strokeWidth="2" />
          <text x={20 + 10 * PX_PER_M} y="230" fontSize="11" textAnchor="middle" fill={INK} fontFamily="sans-serif">20 m</text>
        </svg>

        <Slider label="Prevailing wind direction" value={angle} min={-60} max={60} step={5} onChange={setAngle} format={(v) => (v === 0 ? "S (onshore)" : `${Math.abs(v)}° ${v < 0 ? "W of S (SW)" : "E of S (SE)"}`)} />
        <div className="flex flex-wrap items-center gap-2">
          <Segmented
            label="Groynes"
            value={groynes}
            onChange={setGroynes}
            options={[
              { value: "off", label: "Groynes off" },
              { value: "on", label: "Groynes on" },
            ]}
          />
          <button type="button" className="btn btn-primary btn-sm" onClick={() => setPlaying((p) => !p)}>
            {playing ? "⏸ Pause" : "▶ Play"}
          </button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => setWaves((w) => Math.min(60, w + 1))}>
            +1 wave
          </button>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => { setWaves(0); setPlaying(false); }}>
            Reset
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Waves" value={`${waves}`} tone="ink" />
          <Readout label="Drift per wave" value={`${Math.abs(sim.along).toFixed(1)} m`} />
          <Readout label="Pebble moved" value={`${Math.abs(moved).toFixed(1)} m`} />
          <Readout label="Direction" value={dir} tone={sim.blocked ? "bad" : "good"} />
        </div>
        {sim.blocked ? <p className="text-sm font-semibold text-bad">The pebble is trapped against a groyne — that's exactly how groynes build up the beach.</p> : null}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "headland-erosion-timelapse",
    title: "Headland erosion time-lapse",
    blurb: "Step a headland from crack to stump, then watch a cliff retreat and leave a wave-cut platform.",
    Component: HeadlandExplorer,
  },
  {
    id: "longshore-drift-simulator",
    title: "Longshore drift simulator",
    blurb: "Change the wind angle, send in waves and watch a pebble zig-zag along the beach — then add groynes.",
    Component: LongshoreDrift,
  },
];
