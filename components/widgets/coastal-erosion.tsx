"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Wave-type explorer
// ---------------------------------------------------------------------------

/** Simplified "how destructive" index: 0 is the tipping point between building and eroding. */
function destructiveIndex(freq: number, height: number) {
  return (freq - 9) / 3 + (height - 1.5);
}

function WaveExplorer() {
  const [freq, setFreq] = useState(7);
  const [height, setHeight] = useState(0.8);
  const [tides, setTides] = useState(10);

  const D = destructiveIndex(freq, height);
  const pSwash = 1 / (1 + Math.exp(D)); // share of energy in the swash
  const type = D < -0.4 ? "Constructive" : D > 0.4 ? "Destructive" : "In between";
  const tone = type === "Constructive" ? "good" : type === "Destructive" ? "bad" : "ink";
  const perTideCm = -D * 3; // + builds the beach, − removes sand (model units)
  const totalCm = Math.max(-150, Math.min(150, Math.round(perTideCm * tides)));

  // ---- SVG geometry (viewBox 480 × 230)
  const seaLevel = 120;
  const wavelength = 600 / freq; // px: more waves per minute → closer together
  const amp = Math.min(26, height * 6.5);
  const pts: string[] = [];
  for (let x = 0; x <= 250; x += 4) {
    const y = seaLevel - amp * Math.cos((2 * Math.PI * x) / wavelength);
    pts.push(`${x},${y.toFixed(1)}`);
  }
  const wavePath = `M0,230 L${pts.join(" L")} L250,230 Z`;
  const shift = (totalCm / 150) * 28; // beach top rises (builds) or falls (erodes)
  const beachTopY = 92 - shift;
  const beach = `M150,230 L220,${seaLevel + 6} L330,${beachTopY.toFixed(1)} L480,${(beachTopY - 4).toFixed(1)} L480,230 Z`;
  const swashLen = 30 + 80 * pSwash;
  const backLen = 30 + 80 * (1 - pSwash);

  const presets: { label: string; f: number; h: number }[] = [
    { label: "Calm day", f: 6, h: 0.6 },
    { label: "Breezy", f: 9, h: 1.5 },
    { label: "Winter storm", f: 14, h: 3.5 },
  ];

  return (
    <WidgetFrame
      title="Wave-type explorer"
      tryThis={[
        "Start on **Calm day**. Which arrow is longer — swash or backwash? What happens to the beach after 20 tides?",
        "Raise the frequency one wave at a time. At what point do the waves stop building the beach?",
        "Press **Winter storm** and run 20 tides. Why is a UK beach often thinner and more pebbly after winter?",
        "Can you keep the waves constructive with a height of 2 m? What must the frequency be?",
      ]}
      caption={
        <>
          <p>
            <strong>{type} waves.</strong>{" "}
            {type === "Constructive"
              ? "Low, gentle waves spill onto the beach. The swash is stronger than the backwash, so more sand is carried up the beach than is dragged back — the beach builds up."
              : type === "Destructive"
                ? "Tall, frequent waves plunge down. The backwash is stronger than the swash and each backwash meets the next wave, so sand is dragged offshore — the beach is eroded."
                : "Swash and backwash are roughly balanced, so the beach changes very little."}
          </p>
          <p className="mt-2 text-ink-2">
            Simplified model: real beaches also depend on the sediment size, the beach slope and the tide. Typical figures: constructive about 6–8
            waves a minute, destructive about 10–14.
          </p>
        </>
      }
    >
      <div className="flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p.label}
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setFreq(p.f);
              setHeight(p.h);
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <Slider label="Wave frequency" value={freq} min={4} max={16} onChange={setFreq} format={(v) => `${v} per min`} />
        <Slider label="Wave height" value={height} min={0.5} max={4} step={0.1} onChange={setHeight} format={(v) => `${v.toFixed(1)} m`} />
        <Slider label="Tides that pass" value={tides} min={0} max={20} onChange={setTides} format={(v) => `${v}`} />
      </div>
      <svg
        viewBox="0 0 480 230"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`${type} waves: ${freq} per minute, ${height.toFixed(1)} metres high. Swash ${Math.round(pSwash * 100)} percent of the energy. After ${tides} tides the top of the beach has ${totalCm >= 0 ? "gained" : "lost"} about ${Math.abs(totalCm)} centimetres of sand.`}
        className="mt-4 h-auto w-full rounded-xl border border-line"
      >
        <rect x="0" y="0" width="480" height="230" fill="#e0f2fe" />
        <path d={beach} fill="#fde68a" stroke="#a16207" strokeWidth={1.5} />
        <path d={wavePath} fill="#7dd3fc" fillOpacity={0.85} stroke="#0369a1" strokeWidth={1.5} />
        {/* swash arrow (up the beach) */}
        <line x1={225} y1={seaLevel - 6} x2={225 + swashLen} y2={seaLevel - 6 - swashLen * 0.24} stroke="#15803d" strokeWidth={4} />
        <polygon
          points={`${225 + swashLen},${seaLevel - 6 - swashLen * 0.24} ${215 + swashLen},${seaLevel - 13 - swashLen * 0.24} ${217 + swashLen},${seaLevel + 1 - swashLen * 0.24}`}
          fill="#15803d"
        />
        <text x={232} y={seaLevel - 30 - swashLen * 0.12} fontSize={12} fill="#15803d" fontWeight={700}>
          swash
        </text>
        {/* backwash arrow (down the beach) */}
        <line x1={245 + backLen} y1={seaLevel + 14 - backLen * 0.24} x2={245} y2={seaLevel + 14} stroke="#c2410c" strokeWidth={4} />
        <polygon points={`245,${seaLevel + 14} 255,${seaLevel + 7} 255,${seaLevel + 21}`} fill="#c2410c" />
        <text x={262} y={seaLevel + 36} fontSize={12} fill="#c2410c" fontWeight={700}>
          backwash
        </text>
        <text x={8} y={18} fontSize={12} fill="#0f172a">
          Sea
        </text>
        <text x={400} y={beachTopY - 10} fontSize={12} fill="#0f172a">
          Beach
        </text>
        <line x1={330} x2={480} y1={92} y2={88} stroke="#334155" strokeDasharray="4 4" strokeWidth={1} />
        <text x={340} y={84 - (shift > 0 ? 18 : 0)} fontSize={10} fill="#334155">
          starting beach level
        </text>
      </svg>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Readout label="Wave type" value={type} tone={tone} />
        <Readout label="Swash : backwash" value={`${Math.round(pSwash * 100)} : ${100 - Math.round(pSwash * 100)}`} tone="ink" />
        <Readout label="Per tide" value={`${perTideCm >= 0 ? "+" : "−"}${Math.abs(perTideCm).toFixed(1)} cm`} tone={perTideCm >= 0 ? "good" : "bad"} />
        <Readout label={`After ${tides} tides`} value={`${totalCm >= 0 ? "+" : "−"}${Math.abs(totalCm)} cm`} tone={totalCm >= 0 ? "good" : "bad"} />
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Cliff-retreat timeline
// ---------------------------------------------------------------------------

type Rock = "clay" | "sandclay" | "chalk";
const ROCKS: Record<Rock, { label: string; rate: number; note: string }> = {
  clay: { label: "Boulder clay", rate: 2, note: "Soft boulder clay, like the Holderness coast in Yorkshire, retreats on average about 2 m a year." },
  sandclay: { label: "Sands & clays", rate: 1, note: "Weak sands and clays slump easily when saturated; about 1 m a year is a typical model value." },
  chalk: { label: "Chalk", rate: 0.3, note: "Chalk is much more resistant; a few tens of centimetres a year is typical, though big rockfalls happen suddenly." },
};
const HOUSES = [20, 50, 90, 140, 200]; // metres from today's cliff edge

function CliffRetreat() {
  const [rock, setRock] = useState<Rock>("clay");
  const [rate, setRate] = useState(2);
  const [years, setYears] = useState(25);
  const [defence, setDefence] = useState<"none" | "armour">("none");

  const effRate = defence === "armour" ? rate / 4 : rate;
  const retreat = effRate * years;
  const lost = HOUSES.filter((d) => d <= retreat).length;
  const nextHouse = HOUSES.find((d) => d > retreat);
  const yearsToNext = nextHouse !== undefined ? Math.ceil((nextHouse - retreat) / effRate) : null;

  // SVG plan view (viewBox 480 × 220): sea on the left, 2 px per metre of land.
  const x0 = 30;
  const scale = 2;
  const edgeX = Math.min(480, x0 + retreat * scale);

  return (
    <WidgetFrame
      title="Cliff-retreat countdown"
      tryThis={[
        "On **boulder clay** at 2 m a year, how many years until the house 50 m from the edge is lost? Check your answer with the years slider.",
        "Switch to **chalk**. How long does the 20 m house now survive?",
        "Turn on **rock armour**. How many extra years does it buy the third house (90 m) on boulder clay?",
        "Why might a real house be lost much sooner than the countdown says?",
      ]}
      caption={
        <>
          <p>
            At <strong>{effRate.toFixed(2).replace(/\.?0+$/, "")} m per year</strong>, after {years} years the cliff edge has moved back{" "}
            <strong>{retreat.toFixed(1).replace(/\.0$/, "")} m</strong> (distance = rate × time). {ROCKS[rock].note}
          </p>
          <p className="mt-2 text-ink-2">
            Simplified model: real cliffs retreat in sudden jumps — a single storm, rockfall or slump can remove several metres at once, especially when the
            cliff is saturated after heavy rain. {defence === "armour" ? "In this model rock armour cuts the rate to a quarter; real defences slow erosion but cost money and need maintenance, and can starve beaches further along the coast." : ""}
          </p>
        </>
      }
    >
      <div className="flex flex-wrap items-center gap-3">
        <Segmented<Rock>
          label="Rock type"
          value={rock}
          onChange={(r) => {
            setRock(r);
            setRate(ROCKS[r].rate);
          }}
          options={(Object.keys(ROCKS) as Rock[]).map((r) => ({ value: r, label: ROCKS[r].label }))}
        />
        <Segmented<"none" | "armour">
          label="Sea defences"
          value={defence}
          onChange={setDefence}
          options={[
            { value: "none", label: "No defences" },
            { value: "armour", label: "Rock armour" },
          ]}
        />
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Slider label="Natural retreat rate" value={rate} min={0.1} max={5} step={0.1} onChange={setRate} format={(v) => `${v.toFixed(1)} m/yr`} />
        <Slider label="Years from now" value={years} min={0} max={100} onChange={setYears} format={(v) => `${v} yr`} />
      </div>
      <svg
        viewBox="0 0 480 220"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Plan view. After ${years} years the cliff edge has retreated ${retreat.toFixed(1)} metres and ${lost} of 5 houses have been lost.`}
        className="mt-4 h-auto w-full rounded-xl border border-line"
      >
        <rect x="0" y="0" width="480" height="220" fill="#bbf7d0" />
        <rect x="0" y="0" width={edgeX} height="220" fill="#bae6fd" />
        {defence === "armour" ? (
          <g>
            {Array.from({ length: 11 }, (_, i) => (
              <circle key={i} cx={edgeX - 5} cy={10 + i * 20} r={6} fill="#a8a29e" stroke="#57534e" strokeWidth={1} />
            ))}
          </g>
        ) : null}
        <line x1={x0} x2={x0} y1={0} y2={220} stroke="#334155" strokeDasharray="5 4" strokeWidth={1.5} />
        <text x={x0 + 4} y={212} fontSize={10} fill="#334155">
          edge today
        </text>
        <line x1={edgeX} x2={edgeX} y1={0} y2={220} stroke="#7c2d12" strokeWidth={3} />
        {/* road */}
        <rect x={x0} y={150} width={480 - x0} height={10} fill="#e5e7eb" />
        {HOUSES.map((d, i) => {
          const hx = x0 + d * scale;
          const gone = d <= retreat;
          const hy = 40 + (i % 2) * 50;
          return (
            <g key={d}>
              <rect x={hx - 9} y={hy} width={18} height={16} fill={gone ? "#fecaca" : "#f8fafc"} stroke={gone ? "#b91c1c" : "#1f2937"} strokeWidth={1.5} />
              <polygon points={`${hx - 11},${hy} ${hx},${hy - 10} ${hx + 11},${hy}`} fill={gone ? "#fca5a5" : "#94a3b8"} stroke={gone ? "#b91c1c" : "#1f2937"} strokeWidth={1} />
              {gone ? (
                <text x={hx} y={hy + 13} fontSize={13} textAnchor="middle" fill="#b91c1c" fontWeight={700}>
                  ✕
                </text>
              ) : null}
              <text x={hx} y={hy + 30} fontSize={10} textAnchor="middle" fill="#1f2937">
                {d} m
              </text>
            </g>
          );
        })}
        <text x={6} y={16} fontSize={12} fill="#0c4a6e">
          Sea
        </text>
        <text x={440} y={16} fontSize={12} fill="#14532d">
          Land
        </text>
        <line x1={300} x2={400} y1={190} y2={190} stroke="#1f2937" strokeWidth={2} />
        <text x={350} y={204} fontSize={10} textAnchor="middle" fill="#1f2937">
          50 m
        </text>
      </svg>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Readout label="Land lost" value={`${retreat.toFixed(1).replace(/\.0$/, "")} m`} tone="bad" />
        <Readout label="Houses lost" value={`${lost} / ${HOUSES.length}`} tone={lost ? "bad" : "good"} />
        <Readout label="Next house" value={nextHouse !== undefined ? `${nextHouse} m` : "none left"} tone="ink" />
        <Readout label="Years until next loss" value={yearsToNext !== null ? `${yearsToNext}` : "—"} tone="brand" />
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "wave-type-explorer",
    title: "Wave-type explorer",
    blurb: "Change how often waves arrive and how tall they are — watch the swash and backwash, and see the beach build up or wash away.",
    Component: WaveExplorer,
  },
  {
    id: "cliff-retreat-countdown",
    title: "Cliff-retreat countdown",
    blurb: "Pick a rock type and a rate of retreat, then slide through the years to see which cliff-top houses are lost and when.",
    Component: CliffRetreat,
  },
];
