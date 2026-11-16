"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

const MON3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MON1 = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function fmt(n: number, dp = 0): string {
  const s = n.toFixed(dp);
  const v = Number(s) === 0 ? (0).toFixed(dp) : s;
  return v.startsWith("-") ? "−" + v.slice(1) : v;
}

function big(n: number): string {
  return Math.round(n).toLocaleString("en-GB");
}

// ---------------------------------------------------------------------------
// 1. Climate-graph builder
// ---------------------------------------------------------------------------

type PresetId = "desert" | "polar" | "rainforest" | "temperate";

// Simplified, rounded "typical" values — illustrative, not one real station.
const PRESETS: Record<PresetId, { label: string; temps: number[]; rain: number[] }> = {
  desert: {
    label: "Hot desert",
    temps: [13, 16, 20, 25, 29, 33, 35, 34, 31, 26, 19, 14],
    rain: [5, 4, 3, 2, 1, 0, 0, 1, 1, 3, 5, 6],
  },
  polar: {
    label: "Polar",
    temps: [-28, -29, -27, -20, -8, 1, 4, 3, -3, -13, -22, -26],
    rain: [8, 7, 7, 6, 8, 10, 22, 25, 15, 12, 9, 8],
  },
  rainforest: {
    label: "Rainforest",
    temps: [26, 27, 27, 28, 28, 28, 27, 27, 27, 27, 26, 26],
    rain: [250, 160, 190, 180, 170, 140, 150, 160, 160, 190, 260, 320],
  },
  temperate: {
    label: "Temperate (UK-style)",
    temps: [5, 5, 7, 9, 12, 15, 17, 17, 15, 11, 8, 6],
    rain: [55, 40, 40, 45, 50, 45, 45, 50, 50, 65, 60, 55],
  },
};

const T_LO = -40, T_HI = 40, R_HI = 400;

function classify(total: number, mean: number, warmest: number): { label: string; tone: "good" | "bad" | "brand" | "ink"; why: string } {
  if (warmest < 10) {
    return {
      label: "Polar",
      tone: "brand",
      why: `Even the warmest month is only ${fmt(warmest)} °C — below 10 °C, too cold for trees. ${total < 250 ? `With just ${big(total)} mm of precipitation it is also a **polar desert**.` : ""}`,
    };
  }
  if (total < 250 && mean >= 18) {
    return { label: "Hot desert", tone: "bad", why: `Under 250 mm a year (${big(total)} mm) and a mean temperature of ${fmt(mean, 1)} °C — hot and dry.` };
  }
  if (total < 250) {
    return { label: "Cold desert", tone: "ink", why: `Under 250 mm a year (${big(total)} mm), but the mean temperature (${fmt(mean, 1)} °C) is too low for a hot desert — like the Gobi.` };
  }
  return { label: "Not a desert", tone: "good", why: `${big(total)} mm a year is more than the 250 mm desert limit.` };
}

function ClimateGraphBuilder() {
  const [temps, setTemps] = useState<number[]>(PRESETS.desert.temps);
  const [rain, setRain] = useState<number[]>(PRESETS.desert.rain);
  const [month, setMonth] = useState(6);
  const [preset, setPreset] = useState<PresetId | "custom">("desert");

  const total = rain.reduce((s, r) => s + r, 0);
  const mean = temps.reduce((s, t) => s + t, 0) / 12;
  const tMax = Math.max(...temps), tMin = Math.min(...temps);
  const range = tMax - tMin;
  const wettest = rain.indexOf(Math.max(...rain));
  const cls = classify(total, mean, tMax);

  const W = 420, H = 260, L = 50, R = 370, TOP = 22, BOT = 222;
  const h = BOT - TOP;
  const slot = (R - L) / 12;
  const yT = (t: number) => BOT - ((t - T_LO) / (T_HI - T_LO)) * h;
  const yR = (r: number) => BOT - (Math.min(r, R_HI) / R_HI) * h;
  const ticks = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const load = (id: PresetId) => {
    setPreset(id);
    setTemps(PRESETS[id].temps);
    setRain(PRESETS[id].rain);
  };
  const setT = (v: number) => {
    setPreset("custom");
    setTemps((old) => old.map((t, i) => (i === month ? v : t)));
  };
  const setR = (v: number) => {
    setPreset("custom");
    setRain((old) => old.map((r, i) => (i === month ? v : r)));
  };

  return (
    <WidgetFrame
      title="Climate-graph builder"
      tryThis={[
        "Load **Hot desert**. Raise one month's rain until the station stops being a desert. How much rain did it take?",
        "Load **Polar**. Can you make it stop being polar by warming just ONE month?",
        "Make a climate with a big annual range but a small total rainfall. Where in the world might it be?",
        "Load **Rainforest**: why is the temperature line almost flat?",
      ]}
      caption={
        <>
          <p>
            <strong>{cls.label}.</strong> {cls.why.replace(/\*\*/g, "")}
          </p>
          <p className="mt-2">
            Annual range = warmest − coldest = {fmt(tMax)} − {tMin < 0 ? `(${fmt(tMin)})` : fmt(tMin)} = <strong>{fmt(range)} °C</strong>.{" "}
            {range >= 30
              ? "A huge range like this comes from a long, dark winter and a sunny summer — typical of high latitudes."
              : range <= 5
                ? "A tiny range: the sun is high all year, so every month is about as warm as the last — typical near the equator."
                : "A moderate range: there are clear seasons."}
          </p>
          <p className="mt-2 text-ink-2">
            Simplified model: the label uses rough rules (under 250 mm a year = desert; mean 18 °C or more = hot; warmest month under 10 °C = polar). The presets are rounded, typical values, not one real station.
          </p>
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {(Object.keys(PRESETS) as PresetId[]).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => load(id)}
              className={`min-h-[40px] rounded-xl border px-3 text-sm font-bold ${preset === id ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2"}`}
            >
              {PRESETS[id].label}
            </button>
          ))}
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`Climate graph. Total rainfall ${big(total)} millimetres, temperatures from ${fmt(tMin)} to ${fmt(tMax)} degrees Celsius. Classified as ${cls.label}. ${MON3[month]} selected.`}
        >
          {ticks.map((i) => {
            const y = BOT - (i / 8) * h;
            return (
              <g key={i}>
                <line x1={L} x2={R} y1={y} y2={y} className="stroke-line" strokeWidth={1} />
                <text x={L - 6} y={y + 4} fontSize={10} textAnchor="end" fill="#2563eb">{(R_HI / 8) * i}</text>
                <text x={R + 6} y={y + 4} fontSize={10} fill="#dc2626">{fmt(T_LO + 10 * i)}</text>
              </g>
            );
          })}
          <line x1={L} x2={R} y1={yT(0)} y2={yT(0)} stroke="#dc2626" strokeWidth={1} strokeDasharray="4 3" opacity={0.6} />
          {rain.map((r, m) => (
            <rect
              key={m}
              x={L + m * slot + 3}
              y={yR(r)}
              width={slot - 6}
              height={BOT - yR(r)}
              fill="#60a5fa"
              stroke={m === month ? "#1e3a8a" : "#2563eb"}
              strokeWidth={m === month ? 2.5 : 0.8}
              onClick={() => setMonth(m)}
            />
          ))}
          <polyline points={temps.map((t, m) => `${L + m * slot + slot / 2},${yT(t)}`).join(" ")} fill="none" stroke="#dc2626" strokeWidth={2.5} />
          {temps.map((t, m) => (
            <circle key={m} cx={L + m * slot + slot / 2} cy={yT(t)} r={m === month ? 5 : 3} fill="#dc2626" onClick={() => setMonth(m)} />
          ))}
          {MON1.map((c, m) => (
            <text key={m} x={L + m * slot + slot / 2} y={BOT + 14} fontSize={11} textAnchor="middle" className={m === month ? "fill-brand" : "fill-ink-2"} fontWeight={m === month ? 800 : 400}>
              {c}
            </text>
          ))}
          <line x1={L} x2={L} y1={TOP} y2={BOT} className="stroke-ink" />
          <line x1={R} x2={R} y1={TOP} y2={BOT} className="stroke-ink" />
          <line x1={L} x2={R} y1={BOT} y2={BOT} className="stroke-ink" />
          <text x={6} y={14} fontSize={10} fill="#2563eb">Rainfall (mm)</text>
          <text x={W - 6} y={14} fontSize={10} textAnchor="end" fill="#dc2626">Temp (°C)</text>
          <text x={(L + R) / 2} y={H - 6} fontSize={10} textAnchor="middle" className="fill-ink-2">Month (tap a bar to edit it)</text>
        </svg>

        <div>
          <div className="mb-1 text-sm font-semibold text-ink-2">Month to edit</div>
          <div role="radiogroup" aria-label="Month to edit" className="grid grid-cols-6 gap-1 sm:grid-cols-12">
            {MON3.map((mName, m) => (
              <button
                key={mName}
                type="button"
                role="radio"
                aria-checked={m === month}
                onClick={() => setMonth(m)}
                className={`min-h-[40px] rounded-lg text-xs font-bold ${m === month ? "bg-brand text-white" : "bg-surface-2 text-ink-2"}`}
              >
                {mName}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider label={`${MON3[month]} mean temperature`} value={temps[month]} min={T_LO} max={T_HI} onChange={setT} format={(v) => `${fmt(v)} °C`} />
          <Slider label={`${MON3[month]} rainfall`} value={rain[month]} min={0} max={R_HI} step={5} onChange={setR} format={(v) => `${v} mm`} />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Total rainfall" value={`${big(total)} mm`} tone={total < 250 ? "bad" : "brand"} />
          <Readout label="Annual range" value={`${fmt(range)} °C`} tone="ink" />
          <Readout label="Mean temp" value={`${fmt(mean, 1)} °C`} tone="ink" />
          <Readout label="Wettest month" value={MON3[wettest]} tone="brand" />
        </div>
        <Readout label="Simplified verdict" value={cls.label} tone={cls.tone} />
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Climb the mountain: lapse rate, thin air and rain shadow
// ---------------------------------------------------------------------------

const PEAKS = [
  { id: "timah", name: "Bukit Timah Hill", h: 163 },
  { id: "fuji", name: "Mount Fuji", h: 3776 },
  { id: "kinabalu", name: "Mount Kinabalu", h: 4095 },
  { id: "kili", name: "Kilimanjaro", h: 5895 },
  { id: "everest", name: "Mount Everest", h: 8849 },
] as const;

const LAPSE = 6.5; // °C per 1000 m

function MountainClimb() {
  const [seaT, setSeaT] = useState(27);
  const [alt, setAlt] = useState(4095);
  const [wind, setWind] = useState<"west" | "east">("west");

  const tAlt = seaT - (LAPSE * alt) / 1000;
  const freezeAlt = seaT > 0 ? (seaT / LAPSE) * 1000 : 0;
  // Simplified pressure model: roughly halves every ~5.5 km.
  const pressure = Math.round(100 * Math.exp(-alt / 8000));

  const W = 420, H = 280, BASE = 250, TOP = 30, MAXH = 9000;
  const y = (m: number) => BASE - (m / MAXH) * (BASE - TOP);
  const peakX = 210;
  const mountain = `40,${BASE} ${peakX},${y(8849)} 380,${BASE}`;
  // Climber on the windward slope.
  const windward = wind === "west" ? -1 : 1;
  const frac = alt / 8849;
  const cx = peakX + windward * (170 * (1 - frac));
  const cy = y(alt);
  const fy = y(Math.min(freezeAlt, MAXH));
  const cloudX = peakX + windward * 120;

  return (
    <WidgetFrame
      title="Climb the mountain"
      tryThis={[
        "Start at 27 °C (a Singapore afternoon). At what height do you first reach freezing?",
        "Pick **Mount Kinabalu**. Why can its summit be near freezing even though it's only about 6° from the equator?",
        "Switch the wind direction. Which side gets the rain now, and which side is in the rain shadow?",
        "At roughly what height does the air pressure fall to about half of sea level?",
      ]}
      caption={
        <>
          <p>
            Climbing {big(alt)} m makes it about {fmt((LAPSE * alt) / 1000, 1)} °C colder ({fmt(LAPSE, 1)} °C per 1000 m), so it is about{" "}
            <strong>{fmt(tAlt, 1)} °C</strong> here. {tAlt <= 0 ? "You are above the freezing level — snow and ice can last here." : "You are still below the freezing level."}
          </p>
          <p className="mt-2">
            Why? Air is heated mainly from the ground, and the air higher up is thinner (about {pressure}% of sea-level pressure here), so it holds less heat — and less oxygen in each breath.
          </p>
          <p className="mt-2">
            The wind blows from the {wind}. Moist air is forced up the {wind}ern (windward) slope, cools and condenses: <strong>relief rainfall</strong>. Having lost its moisture, the air sinks and warms down the other (leeward) side, leaving a dry <strong>rain shadow</strong>.
          </p>
          <p className="mt-2 text-ink-2">Simplified model: real lapse rates vary with weather, and the pressure figure is a rough approximation.</p>
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {PEAKS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setAlt(p.h)}
              className={`min-h-[40px] rounded-xl border px-3 text-sm font-bold ${alt === p.h ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2"}`}
            >
              {p.name} ({big(p.h)} m)
            </button>
          ))}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Mountain cross-section. Climber at ${big(alt)} metres where it is about ${fmt(tAlt, 1)} degrees Celsius. Freezing level at about ${big(freezeAlt)} metres. Wind from the ${wind}; rain on the ${wind}ern side, rain shadow on the other side.`}>
          <rect x={0} y={0} width={W} height={BASE} fill="#e0f2fe" opacity={0.5} />
          {[0, 2000, 4000, 6000, 8000].map((m) => (
            <g key={m}>
              <line x1={30} x2={W - 10} y1={y(m)} y2={y(m)} className="stroke-line" strokeWidth={1} />
              <text x={4} y={y(m) + 4} fontSize={10} className="fill-ink-2">{m === 0 ? "0" : `${m / 1000} km`}</text>
            </g>
          ))}
          <polygon points={mountain} fill="#d6d3d1" stroke="#334155" strokeWidth={1.5} />
          {freezeAlt < 8849 ? (
            <polygon
              points={`${peakX - 170 * (1 - freezeAlt / 8849)},${fy} ${peakX},${y(8849)} ${peakX + 170 * (1 - freezeAlt / 8849)},${fy}`}
              fill="#ffffff"
              stroke="#94a3b8"
            />
          ) : null}
          {freezeAlt > 0 && freezeAlt < MAXH ? (
            <g>
              <line x1={30} x2={W - 10} y1={fy} y2={fy} stroke="#2563eb" strokeWidth={1.5} strokeDasharray="6 4" />
              <text x={W - 12} y={fy - 4} fontSize={10} textAnchor="end" fill="#2563eb">0 °C freezing level ≈ {big(freezeAlt)} m</text>
            </g>
          ) : null}
          {/* Cloud and rain on the windward side */}
          <g>
            <ellipse cx={cloudX} cy={y(2600)} rx={42} ry={16} fill="#94a3b8" />
            <ellipse cx={cloudX + 22} cy={y(3100)} rx={28} ry={13} fill="#94a3b8" />
            {[-24, -8, 8, 24].map((dx) => (
              <line key={dx} x1={cloudX + dx} y1={y(2600) + 16} x2={cloudX + dx - 4} y2={y(2600) + 40} stroke="#2563eb" strokeWidth={2} />
            ))}
            <text x={cloudX} y={y(2600) + 56} fontSize={11} textAnchor="middle" className="fill-ink">Relief rain</text>
          </g>
          <text x={peakX - windward * 120} y={BASE - 14} fontSize={11} textAnchor="middle" fill="#b45309" fontWeight={700}>Rain shadow (dry)</text>
          {/* Wind arrow */}
          <g>
            <line x1={wind === "west" ? 40 : W - 40} x2={wind === "west" ? 80 : W - 80} y1={y(1000)} y2={y(1000)} stroke="#334155" strokeWidth={2.5} />
            <polygon points={wind === "west" ? `80,${y(1000) - 6} 92,${y(1000)} 80,${y(1000) + 6}` : `${W - 80},${y(1000) - 6} ${W - 92},${y(1000)} ${W - 80},${y(1000) + 6}`} fill="#334155" />
            <text x={wind === "west" ? 40 : W - 40} y={y(1000) - 8} fontSize={10} textAnchor={wind === "west" ? "start" : "end"} className="fill-ink">Moist wind</text>
          </g>
          {/* Climber */}
          <circle cx={cx} cy={cy} r={7} className="fill-brand" stroke="#ffffff" strokeWidth={2} />
          <text x={cx + (windward < 0 ? -10 : 10)} y={cy - 10} fontSize={11} textAnchor={windward < 0 ? "end" : "start"} className="fill-ink" fontWeight={700}>
            {fmt(tAlt, 1)} °C
          </text>
          <text x={W / 2} y={H - 8} fontSize={10} textAnchor="middle" className="fill-ink-2">Simplified cross-section (not to scale horizontally)</text>
        </svg>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider label="Temperature at sea level" value={seaT} min={-10} max={40} onChange={setSeaT} format={(v) => `${fmt(v)} °C`} />
          <Slider label="Your altitude" value={alt} min={0} max={8849} step={1} onChange={setAlt} format={(v) => `${big(v)} m`} />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink-2">Wind blows from the</span>
          <Segmented
            label="Wind direction"
            value={wind}
            onChange={setWind}
            options={[
              { value: "west", label: "West →" },
              { value: "east", label: "← East" },
            ]}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Temp here" value={`${fmt(tAlt, 1)} °C`} tone={tAlt <= 0 ? "brand" : "bad"} />
          <Readout label="Colder by" value={`${fmt((LAPSE * alt) / 1000, 1)} °C`} tone="ink" />
          <Readout label="Freezing level" value={seaT > 0 ? `${big(freezeAlt)} m` : "sea level"} tone="brand" />
          <Readout label="Air pressure" value={`≈ ${pressure}%`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "climate-graph-builder",
    title: "Climate-graph builder",
    blurb: "Edit 12 months of rainfall and temperature, watch the climate graph redraw, and test whether your station is a desert or polar.",
    Component: ClimateGraphBuilder,
  },
  {
    id: "mountain-lapse-rate",
    title: "Climb the mountain",
    blurb: "Change the height and sea-level temperature to see the lapse rate, the freezing level, thinner air and the rain shadow in action.",
    Component: MountainClimb,
  },
];
