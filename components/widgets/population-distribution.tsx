"use client";
// Interactive explorables for "Where Do People Live?" (population-distribution).
import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Density calculator with a 1 km² dot square
// ---------------------------------------------------------------------------

type PresetId = "custom" | "singapore" | "bangladesh" | "india" | "uk" | "australia" | "mongolia";

/** Rounded, approximate figures (mid-2020s). Densities are national averages. */
const PRESETS: Record<Exclude<PresetId, "custom">, { name: string; pop: number; area: number; note: string }> = {
  singapore: { name: "Singapore", pop: 6_000_000, area: 735, note: "A city-state: almost the whole country is urban, with high-rise HDB towns." },
  bangladesh: { name: "Bangladesh", pop: 172_000_000, area: 148_000, note: "A flat, fertile delta — one of the most crowded large countries on Earth." },
  india: { name: "India", pop: 1_440_000_000, area: 3_287_000, note: "Very crowded on the Ganges plain, but far emptier in the Thar Desert and Himalayas." },
  uk: { name: "United Kingdom", pop: 68_000_000, area: 244_000, note: "Dense in the south-east of England, sparse in the Scottish Highlands." },
  australia: { name: "Australia", pop: 27_000_000, area: 7_690_000, note: "The average hides a pattern: most people live on the south-east and east coasts; the Outback is nearly empty." },
  mongolia: { name: "Mongolia", pop: 3_500_000, area: 1_564_000, note: "Cold, dry steppe and desert — and about half the people live in one city, Ulaanbaatar." },
};

/** Log-slider helpers: slider value v ↦ 10^(v/10). */
const fromLog = (v: number) => Math.round(Math.pow(10, v / 10));
const toLog = (x: number) => Math.round(Math.log10(Math.max(1, x)) * 10);

function fmt(n: number): string {
  if (n >= 1e9) return (n / 1e9).toFixed(n >= 1e10 ? 0 : 2).replace(/\.?0+$/, "") + " billion";
  if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e8 ? 0 : 1).replace(/\.0$/, "") + " million";
  return Math.round(n).toLocaleString("en-GB");
}

function fmtDensity(d: number): string {
  if (d < 10) return d.toFixed(1);
  return Math.round(d).toLocaleString("en-GB");
}

/** Deterministic scatter positions (no Math.random). */
function scatter(i: number): [number, number] {
  const a = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  const b = Math.sin(i * 39.3468 + 11.135) * 24634.6345;
  return [a - Math.floor(a), b - Math.floor(b)];
}

function DensityExplorer() {
  const [preset, setPreset] = useState<PresetId>("singapore");
  const [pop, setPop] = useState(PRESETS.singapore.pop);
  const [area, setArea] = useState(PRESETS.singapore.area);

  const choose = (p: PresetId) => {
    setPreset(p);
    if (p !== "custom") {
      setPop(PRESETS[p].pop);
      setArea(PRESETS[p].area);
    }
  };

  const density = pop / area;
  // Choose people-per-dot so the 1 km² square shows at most ~400 dots.
  const perDot = [1, 10, 100, 1000].find((k) => density / k <= 400) ?? 1000;
  const dotCount = Math.round(density / perDot);
  const m2PerPerson = density > 0 ? 1_000_000 / density : Infinity;
  const perPitch = density * 0.00714; // a 105 m × 68 m football pitch ≈ 0.00714 km²
  const label = density >= 500 ? "very densely populated" : density >= 100 ? "densely populated" : density >= 10 ? "moderately populated" : "sparsely populated";
  const tone = density >= 100 ? "bad" : density >= 10 ? "ink" : "good";

  const S = 220;
  const dots = Array.from({ length: dotCount }, (_, i) => {
    const [u, v] = scatter(i + 1);
    return <circle key={i} cx={10 + u * (S - 20)} cy={10 + v * (S - 20)} r={dotCount > 200 ? 2.2 : 3.2} className="fill-brand" />;
  });

  return (
    <WidgetFrame
      title="Density calculator: what does one km² look like?"
      tryThis={[
        "Predict first: is Singapore's density about 10, 100 or 1,000 times Australia's? Then switch between them.",
        "Pick Custom. Keep the population fixed and **double** the area. What happens to the density?",
        "Australia's average is tiny — yet Sydney is crowded. Why can a single average hide the real **distribution**?",
        "Find a setting where each person has about one football pitch of space.",
      ]}
      caption={
        <>
          <p>
            <strong>Density = population ÷ area.</strong> {fmt(pop)} people ÷ {Math.round(area).toLocaleString("en-GB")} km² ≈{" "}
            <strong>{fmtDensity(density)} people per km²</strong>, so the green square (1 km × 1 km) holds about {fmtDensity(density)} people on average —
            {" "}{label}.
          </p>
          <p className="mt-2">
            {preset !== "custom" ? PRESETS[preset].note + " " : ""}
            A national density is an <em>average</em>: it tells you how crowded a country is overall, not <em>where</em> the people actually are. For that you need a
            distribution map. (Figures are rounded, mid-2020s; the size labels are rough guides, not official categories.)
          </p>
        </>
      }
    >
      <div className="space-y-4">
        <Segmented<PresetId>
          label="Choose a country"
          value={preset}
          onChange={choose}
          options={[
            { value: "singapore", label: "Singapore" },
            { value: "bangladesh", label: "Bangladesh" },
            { value: "india", label: "India" },
            { value: "uk", label: "UK" },
            { value: "australia", label: "Australia" },
            { value: "mongolia", label: "Mongolia" },
            { value: "custom", label: "Custom" },
          ]}
        />
        <Slider
          label="Population (people)"
          min={20}
          max={95}
          value={toLog(pop)}
          onChange={(v) => {
            setPreset("custom");
            setPop(fromLog(v));
          }}
          format={() => fmt(pop)}
        />
        <Slider
          label="Area (km²)"
          min={10}
          max={70}
          value={toLog(area)}
          onChange={(v) => {
            setPreset("custom");
            setArea(fromLog(v));
          }}
          format={() => Math.round(area).toLocaleString("en-GB") + " km²"}
        />
        <div className="grid gap-4 sm:grid-cols-[240px_1fr] sm:items-start">
          <svg
            viewBox={`0 0 ${S} ${S + 26}`}
            className="mx-auto h-auto w-full max-w-[260px]"
            role="img"
            aria-label={`One square kilometre containing ${dotCount} dots; each dot is ${perDot} ${perDot === 1 ? "person" : "people"}, so about ${fmtDensity(density)} people per square kilometre.`}
          >
            <rect x={0} y={0} width={S} height={S} fill="#bbf7d0" className="stroke-ink" strokeWidth={2} />
            {dots}
            <text x={S / 2} y={S + 18} textAnchor="middle" fontSize={12} className="fill-ink-2">
              1 km × 1 km · each dot = {perDot.toLocaleString("en-GB")} {perDot === 1 ? "person" : "people"}
            </text>
          </svg>
          <div className="grid grid-cols-2 gap-2">
            <Readout label="People per km²" value={fmtDensity(density)} tone={tone} />
            <Readout label="Space per person" value={m2PerPerson >= 10000 ? (m2PerPerson / 10000).toFixed(1) + " ha" : Math.round(m2PerPerson).toLocaleString("en-GB") + " m²"} tone="ink" />
            <Readout label="People per football pitch" value={perPitch < 1 ? perPitch.toFixed(2) : Math.round(perPitch).toLocaleString("en-GB")} tone="ink" />
            <Readout label="Rough label" value={<span className="text-base">{label}</span>} tone={tone} />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Settlement suitability mixer (physical + human factors, technology)
// ---------------------------------------------------------------------------

interface Choice {
  value: string;
  label: string;
  score: number;
  /** Score when modern technology (irrigation, desalination, air-con, heating) is available. */
  tech?: number;
  why: string;
}
interface Factor {
  id: string;
  name: string;
  kind: "physical" | "human";
  choices: Choice[];
}

const FACTORS: Factor[] = [
  { id: "relief", name: "Relief", kind: "physical", choices: [
    { value: "flat", label: "Flat", score: 2, why: "flat land is easy to build on and farm" },
    { value: "hilly", label: "Hilly", score: 0, why: "hills make building and transport harder" },
    { value: "mountains", label: "Mountains", score: -2, why: "steep, high slopes are hard to build on, farm or cross" },
  ] },
  { id: "climate", name: "Climate", kind: "physical", choices: [
    { value: "mild", label: "Mild", score: 2, why: "a mild climate has a long growing season" },
    { value: "humid", label: "Hot & wet", score: 0, why: "hot and humid — crops grow but heat and disease are a challenge" },
    { value: "dry", label: "Hot & dry", score: -2, tech: 0, why: "too hot and dry for most crops" },
    { value: "cold", label: "Very cold", score: -3, tech: -2, why: "freezing winters and a short growing season" },
  ] },
  { id: "water", name: "Water supply", kind: "physical", choices: [
    { value: "river", label: "River / lake", score: 2, why: "a reliable river or lake for drinking and irrigation" },
    { value: "wells", label: "Wells only", score: 0, why: "some groundwater, but limited" },
    { value: "none", label: "Very little", score: -3, tech: -1, why: "almost no fresh water" },
  ] },
  { id: "soil", name: "Soil", kind: "physical", choices: [
    { value: "fertile", label: "Fertile", score: 2, why: "fertile soil (e.g. river silt) feeds many people" },
    { value: "poor", label: "Poor", score: -1, tech: 0, why: "thin or poor soil limits farming" },
  ] },
  { id: "hazards", name: "Natural hazards", kind: "physical", choices: [
    { value: "low", label: "Low risk", score: 0, why: "few natural hazards" },
    { value: "floods", label: "Floods / storms", score: -1, why: "floods or tropical storms are a risk" },
    { value: "quakes", label: "Quakes / volcanoes", score: -1, why: "earthquakes or eruptions are a risk" },
  ] },
  { id: "jobs", name: "Jobs", kind: "human", choices: [
    { value: "many", label: "Many", score: 3, why: "plenty of jobs pull people in" },
    { value: "few", label: "Few", score: -2, why: "few jobs push people away" },
  ] },
  { id: "transport", name: "Transport links", kind: "human", choices: [
    { value: "good", label: "Good", score: 2, why: "good roads, rail or ports connect people to markets and work" },
    { value: "poor", label: "Poor", score: -2, why: "remote, with few roads" },
  ] },
  { id: "services", name: "Services", kind: "human", choices: [
    { value: "good", label: "Good", score: 1, why: "schools, hospitals and utilities attract families" },
    { value: "poor", label: "Poor", score: -1, why: "few schools or hospitals" },
  ] },
  { id: "stability", name: "Political stability", kind: "human", choices: [
    { value: "peace", label: "Peaceful", score: 1, why: "a stable, safe place to live" },
    { value: "conflict", label: "Conflict", score: -3, why: "war or conflict drives people out" },
  ] },
];

type Picks = Record<string, string>;

const PLACES: Record<string, { name: string; picks: Picks; note: string }> = {
  nile: { name: "Nile valley", note: "Egypt's Nile valley: desert climate, but the river and its silt make it one of the most crowded strips of land on Earth.", picks: { relief: "flat", climate: "dry", water: "river", soil: "fertile", hazards: "low", jobs: "many", transport: "good", services: "good", stability: "peace" } },
  sahara: { name: "Sahara interior", note: "The central Sahara: no river, little rain and few jobs or roads — very sparsely populated.", picks: { relief: "flat", climate: "dry", water: "none", soil: "poor", hazards: "low", jobs: "few", transport: "poor", services: "poor", stability: "peace" } },
  himalaya: { name: "High Himalayas", note: "Steep, cold and earthquake-prone, with few roads — only small villages in the valleys.", picks: { relief: "mountains", climate: "cold", water: "river", soil: "poor", hazards: "quakes", jobs: "few", transport: "poor", services: "poor", stability: "peace" } },
  amazon: { name: "Amazon interior", note: "Plenty of water, but poor soils, dense forest and almost no roads keep numbers low.", picks: { relief: "flat", climate: "humid", water: "river", soil: "poor", hazards: "floods", jobs: "few", transport: "poor", services: "poor", stability: "peace" } },
  singapore: { name: "Singapore", note: "Very little natural fresh water — but jobs, transport, planning and technology (NEWater, desalination) support about 8,000 people per km².", picks: { relief: "flat", climate: "humid", water: "none", soil: "poor", hazards: "low", jobs: "many", transport: "good", services: "good", stability: "peace" } },
  siberia: { name: "Northern Siberia", note: "Permafrost and long freezing winters: even with oil and gas jobs in a few towns, most of the land is nearly empty.", picks: { relief: "flat", climate: "cold", water: "river", soil: "poor", hazards: "low", jobs: "few", transport: "poor", services: "poor", stability: "peace" } },
};

function SuitabilityMixer() {
  const [picks, setPicks] = useState<Picks>(PLACES.nile.picks);
  const [tech, setTech] = useState<"off" | "on">("off");
  const [place, setPlace] = useState<string>("nile");

  const rows = FACTORS.map((f) => {
    const c = f.choices.find((x) => x.value === picks[f.id]) ?? f.choices[0];
    const score = tech === "on" && c.tech !== undefined ? c.tech : c.score;
    return { f, c, score, softened: tech === "on" && c.tech !== undefined };
  });
  const physical = rows.filter((r) => r.f.kind === "physical").reduce((s, r) => s + r.score, 0);
  const human = rows.filter((r) => r.f.kind === "human").reduce((s, r) => s + r.score, 0);
  const total = physical + human;
  const verdict = total >= 8 ? "Densely populated" : total >= 0 ? "Moderately populated" : "Sparsely populated";
  const tone = total >= 8 ? "good" : total >= 0 ? "ink" : "bad";
  const best = [...rows].sort((a, b) => b.score - a.score)[0];
  const worst = [...rows].sort((a, b) => a.score - b.score)[0];

  const W = 320, rowH = 22, mid = 200, unit = 18;
  const H = rows.length * rowH + 10;

  return (
    <WidgetFrame
      title="Settlement suitability mixer"
      tryThis={[
        "Load **Singapore** with technology off, then switch technology on. Which negative factors shrink?",
        "Start from the **Nile valley** and change only *Water supply* to \"Very little\". How far does the verdict fall?",
        "Can you make a place densely populated even with **mountains** and a **very cold** climate? Which human factors do you need?",
        "Load the **Amazon interior**. Which single change would help most — and is it physical or human?",
      ]}
      caption={
        <>
          <p>
            <strong>{verdict}</strong> (score {total > 0 ? "+" : ""}{total}: physical {physical > 0 ? "+" : ""}{physical}, human {human > 0 ? "+" : ""}{human}). The biggest help here is{" "}
            <strong>{best.f.name.toLowerCase()}</strong> ({best.c.why}); the biggest problem is <strong>{worst.f.name.toLowerCase()}</strong> ({worst.c.why}).
          </p>
          <p className="mt-2">
            {place !== "custom" ? PLACES[place].note + " " : ""}
            {tech === "on"
              ? "With modern technology — irrigation, desalination, air-conditioning, heating, fertilisers — harsh physical factors matter less, so human factors decide more."
              : "Without modern technology, physical factors such as water and climate limit where people can live."}
          </p>
          <p className="mt-2 text-ink-2">Simplified model: the scores are illustrative, not measured. Real places depend on many factors working together.</p>
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-ink-2">Load a place:</span>
          {Object.entries(PLACES).map(([id, p]) => (
            <button
              key={id}
              type="button"
              className={`btn btn-sm ${place === id ? "btn-primary" : "btn-secondary"}`}
              onClick={() => {
                setPlace(id);
                setPicks(p.picks);
              }}
            >
              {p.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink-2">Modern technology</span>
          <Segmented<"off" | "on">
            label="Modern technology"
            value={tech}
            onChange={setTech}
            options={[
              { value: "off", label: "Off" },
              { value: "on", label: "On" },
            ]}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {FACTORS.map((f) => (
            <div key={f.id} className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
                {f.name} <span className={f.kind === "physical" ? "text-good" : "text-brand"}>· {f.kind}</span>
              </div>
              <Segmented<string>
                label={f.name}
                value={picks[f.id]}
                onChange={(v) => {
                  setPlace("custom");
                  setPicks({ ...picks, [f.id]: v });
                }}
                options={f.choices.map((c) => ({ value: c.value, label: c.label }))}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-[1fr_200px] sm:items-center">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full"
            role="img"
            aria-label={`Bar chart of factor scores. ${rows.map((r) => `${r.f.name} ${r.score}`).join(", ")}. Total ${total}: ${verdict}.`}
          >
            <line x1={mid} x2={mid} y1={0} y2={H} className="stroke-ink-2" strokeWidth={1} />
            {rows.map((r, i) => {
              const y = 5 + i * rowH;
              const w = Math.abs(r.score) * unit;
              return (
                <g key={r.f.id}>
                  <text x={4} y={y + 14} fontSize={11} className="fill-ink">{r.f.name}{r.softened ? " *" : ""}</text>
                  {r.score !== 0 ? (
                    <rect x={r.score > 0 ? mid : mid - w} y={y + 3} width={w} height={rowH - 8} rx={3} className={r.score > 0 ? "fill-good" : "fill-bad"} />
                  ) : (
                    <rect x={mid - 1} y={y + 3} width={2} height={rowH - 8} className="fill-ink-2" />
                  )}
                  <text x={r.score >= 0 ? mid + w + 4 : mid - w - 4} y={y + 14} fontSize={10} textAnchor={r.score >= 0 ? "start" : "end"} className="fill-ink-2">
                    {r.score > 0 ? "+" : ""}{r.score}
                  </text>
                </g>
              );
            })}
          </svg>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            <Readout label="Suitability score" value={(total > 0 ? "+" : "") + total} tone={tone} />
            <Readout label="Prediction" value={<span className="text-base">{verdict}</span>} tone={tone} />
          </div>
        </div>
        {tech === "on" && rows.some((r) => r.softened) ? <p className="text-xs text-ink-2">* softened by modern technology</p> : null}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "density-dot-square",
    title: "Density calculator",
    blurb: "Change the population and area — or pick a country — and see how crowded one square kilometre really is.",
    Component: DensityExplorer,
  },
  {
    id: "settlement-suitability",
    title: "Settlement suitability mixer",
    blurb: "Mix physical and human factors (and modern technology) to predict whether a place will be densely or sparsely populated.",
    Component: SuitabilityMixer,
  },
];
