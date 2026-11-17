"use client";
// Interactive explorables for "Cities & Megacities".
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, makePlane, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Urbanisation curve
// ---------------------------------------------------------------------------

// % of people living in urban areas, rounded from UN World Urbanization
// Prospects 2018 (values from 2020 on are projections).
const YEARS = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030, 2040, 2050];
const SERIES = [
  { key: "hic", label: "Higher-income regions", values: [55, 61, 67, 70, 72, 74, 77, 79, 81, 84, 87], cls: "stroke-good", dot: "fill-good" },
  { key: "world", label: "World", values: [30, 34, 37, 39, 43, 47, 52, 56, 60, 64, 68], cls: "stroke-brand", dot: "fill-brand" },
  { key: "lic", label: "Lower-income regions", values: [18, 22, 25, 29, 35, 40, 46, 52, 56, 61, 66], cls: "stroke-bad", dot: "fill-bad" },
] as const;
const LAST_DATA_YEAR = 2018;

function interp(values: readonly number[], year: number): number {
  if (year <= YEARS[0]) return values[0];
  for (let i = 0; i < YEARS.length - 1; i++) {
    if (year <= YEARS[i + 1]) {
      const t = (year - YEARS[i]) / (YEARS[i + 1] - YEARS[i]);
      return values[i] + t * (values[i + 1] - values[i]);
    }
  }
  return values[values.length - 1];
}

function UrbanisationCurve() {
  const [year, setYear] = useState(1950);
  const [show, setShow] = useState<"all" | "world">("all");
  const W = 460, H = 260;
  const plane = makePlane({ width: W, height: H, xMin: 1950, xMax: 2050, yMin: 0, yMax: 100, pad: 34 });
  const { px, py } = plane;
  const visible = show === "all" ? SERIES : SERIES.filter((s) => s.key === "world");
  const world = interp(SERIES[1].values, year);
  const hic = interp(SERIES[0].values, year);
  const lic = interp(SERIES[2].values, year);
  const projected = year > LAST_DATA_YEAR;
  const urbanMajority = world >= 50;
  const gap = hic - lic;

  const caption = (
    <>
      <p>
        In <b>{year}</b>{projected ? " (UN projection)" : ""}, about <b>{Math.round(world)}%</b> of the world&apos;s people lived in towns and cities.{" "}
        {urbanMajority
          ? "That is more than half — urban dwellers now outnumber rural ones (the world passed 50% around 2007)."
          : "That is less than half — most people still lived in the countryside."}
      </p>
      {show === "all" ? (
        <p className="mt-2">
          Higher-income regions were already about {Math.round(hic)}% urban, lower-income regions about {Math.round(lic)}% — a gap of about {Math.round(gap)} percentage points.{" "}
          {year >= 2000
            ? "Most of today's urbanisation is happening in lower-income countries in Asia and Africa: their curve is the steepest."
            : "Richer countries urbanised first, during industrialisation; lower-income countries are catching up fast."}
        </p>
      ) : null}
      <p className="mt-2 text-xs text-ink-2">Simplified: values rounded from UN World Urbanization Prospects 2018; each country defines &ldquo;urban&rdquo; differently, so figures are approximate.</p>
    </>
  );

  return (
    <WidgetFrame
      title="Urbanisation curve, 1950–2050"
      tryThis={[
        "Find the year when the world first became more than 50% urban.",
        "In which decade did lower-income regions overtake the 1950 level of higher-income regions (about 55%)?",
        "Which curve is steepest? What does a steep curve tell you about the rate of urbanisation?",
        "Do the curves ever reach 100%? Suggest why not (think about farmers and counter-urbanisation).",
      ]}
      caption={caption}
    >
      <div className="space-y-3">
        <Slider label="Year" value={year} min={1950} max={2050} step={1} onChange={setYear} />
        <Segmented
          label="Which lines to show"
          value={show}
          onChange={setShow}
          options={[
            { value: "all", label: "World + regions" },
            { value: "world", label: "World only" },
          ]}
        />
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Line graph of percentage of people living in urban areas, 1950 to 2050. In ${year}: world about ${Math.round(world)}%, higher-income regions about ${Math.round(hic)}%, lower-income regions about ${Math.round(lic)}%.`}>
          {/* projection shading */}
          <rect x={px(LAST_DATA_YEAR)} y={py(100)} width={px(2050) - px(LAST_DATA_YEAR)} height={py(0) - py(100)} className="fill-surface-2" />
          <text x={px(2034)} y={py(100) + 12} fontSize={10} textAnchor="middle" className="fill-ink-2">projection</text>
          {[0, 25, 50, 75, 100].map((v) => (
            <g key={v}>
              <line x1={px(1950)} x2={px(2050)} y1={py(v)} y2={py(v)} className={v === 50 ? "stroke-ink-2" : "stroke-line"} strokeWidth={v === 50 ? 1.2 : 1} strokeDasharray={v === 50 ? "4 3" : undefined} />
              <text x={px(1950) - 5} y={py(v) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">{v}%</text>
            </g>
          ))}
          {[1950, 1975, 2000, 2025, 2050].map((y) => (
            <text key={y} x={px(y)} y={py(0) + 14} fontSize={10} textAnchor="middle" className="fill-ink-2">{y}</text>
          ))}
          <text x={12} y={py(50)} fontSize={10} transform={`rotate(-90 12 ${py(50)})`} textAnchor="middle" className="fill-ink-2">% urban</text>
          {visible.map((s) => (
            <polyline
              key={s.key}
              fill="none"
              strokeWidth={2.5}
              className={s.cls}
              points={YEARS.map((y, i) => `${px(y)},${py(s.values[i])}`).join(" ")}
            />
          ))}
          <line x1={px(year)} x2={px(year)} y1={py(0)} y2={py(100)} className="stroke-ink" strokeWidth={1.5} />
          {visible.map((s) => (
            <circle key={s.key} cx={px(year)} cy={py(interp(s.values, year))} r={5} className={`${s.dot} stroke-surface`} strokeWidth={1.5} />
          ))}
        </svg>
        <div className="flex flex-wrap gap-3 text-xs font-semibold text-ink-2">
          {visible.map((s) => (
            <span key={s.key} className="flex items-center gap-1">
              <svg width="18" height="8" aria-hidden><line x1="0" x2="18" y1="4" y2="4" strokeWidth={3} className={s.cls} /></svg>
              {s.label}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="World urban" value={`≈ ${Math.round(world)}%`} />
          {show === "all" ? <Readout label="Higher-income" value={`≈ ${Math.round(hic)}%`} tone="good" /> : null}
          {show === "all" ? <Readout label="Lower-income" value={`≈ ${Math.round(lic)}%`} tone="bad" /> : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Megacity counter
// ---------------------------------------------------------------------------

type Continent = "Asia" | "Africa" | "South America" | "North America" | "Europe";
// UN World Urbanization Prospects 2018 estimates for 2018 (urban agglomerations), millions.
const CITIES: Array<{ name: string; pop: number; c: Continent }> = [
  { name: "Tokyo", pop: 37.5, c: "Asia" },
  { name: "Delhi", pop: 28.5, c: "Asia" },
  { name: "Shanghai", pop: 25.6, c: "Asia" },
  { name: "São Paulo", pop: 21.7, c: "South America" },
  { name: "Mexico City", pop: 21.6, c: "North America" },
  { name: "Cairo", pop: 20.1, c: "Africa" },
  { name: "Mumbai", pop: 20.0, c: "Asia" },
  { name: "Beijing", pop: 19.6, c: "Asia" },
  { name: "Dhaka", pop: 19.6, c: "Asia" },
  { name: "Osaka", pop: 19.3, c: "Asia" },
  { name: "New York", pop: 18.8, c: "North America" },
  { name: "Karachi", pop: 15.4, c: "Asia" },
  { name: "Buenos Aires", pop: 15.0, c: "South America" },
  { name: "Chongqing", pop: 14.8, c: "Asia" },
  { name: "Istanbul", pop: 14.8, c: "Asia" },
  { name: "Kolkata", pop: 14.7, c: "Asia" },
  { name: "Manila", pop: 13.5, c: "Asia" },
  { name: "Lagos", pop: 13.5, c: "Africa" },
  { name: "Rio de Janeiro", pop: 13.3, c: "South America" },
  { name: "Tianjin", pop: 13.2, c: "Asia" },
  { name: "Kinshasa", pop: 13.2, c: "Africa" },
  { name: "Guangzhou", pop: 12.6, c: "Asia" },
  { name: "Los Angeles", pop: 12.5, c: "North America" },
  { name: "Moscow", pop: 12.4, c: "Europe" },
  { name: "Shenzhen", pop: 11.9, c: "Asia" },
  { name: "Lahore", pop: 11.7, c: "Asia" },
  { name: "Bangalore", pop: 11.4, c: "Asia" },
  { name: "Paris", pop: 10.9, c: "Europe" },
  { name: "Bogotá", pop: 10.6, c: "South America" },
  { name: "Jakarta", pop: 10.5, c: "Asia" },
  { name: "Chennai", pop: 10.5, c: "Asia" },
  { name: "Lima", pop: 10.4, c: "South America" },
  { name: "Bangkok", pop: 10.2, c: "Asia" },
  { name: "Seoul", pop: 9.96, c: "Asia" },
  { name: "London", pop: 9.0, c: "Europe" },
  { name: "Singapore", pop: 5.8, c: "Asia" },
];
const CONTINENTS: Continent[] = ["Asia", "Africa", "South America", "North America", "Europe"];
const CONT_CLS: Record<Continent, string> = {
  Asia: "fill-brand",
  Africa: "fill-bad",
  "South America": "fill-good",
  "North America": "fill-accent",
  Europe: "fill-ink-2",
};

function MegacityCounter() {
  const [threshold, setThreshold] = useState(10);
  const [sort, setSort] = useState<"size" | "continent">("size");
  const qualifying = CITIES.filter((c) => c.pop >= threshold);
  const byCont = CONTINENTS.map((c) => ({ c, n: qualifying.filter((q) => q.c === c).length }));
  const asia = byCont[0].n;
  const asiaShare = qualifying.length ? Math.round((asia / qualifying.length) * 100) : 0;
  const list = sort === "size" ? CITIES : [...CITIES].sort((a, b) => CONTINENTS.indexOf(a.c) - CONTINENTS.indexOf(b.c) || b.pop - a.pop);

  const W = 460, rowH = 13, top = 6;
  const H = top + list.length * rowH + 8;
  const left = 96, maxPop = 40;
  const bx = (p: number) => left + (p / maxPop) * (W - left - 40);

  return (
    <WidgetFrame
      title="Megacity counter"
      tryThis={[
        "Set the threshold to the official 10 million. How many megacities are there, and what share are in Asia?",
        "Raise the threshold to 20 million. Which continents drop out first?",
        "London and Seoul are not on the list at 10 million. How close are they?",
        "Sort by continent. Why do you think so few megacities are in Europe today?",
      ]}
      caption={
        <>
          <p>
            At a threshold of <b>{threshold} million</b>, <b>{qualifying.length}</b> of these cities qualify
            {qualifying.length ? <>, and <b>{asia}</b> of them ({asiaShare}%) are in Asia</> : null}.
            {threshold === 10 ? " This is the official megacity definition: an urban area of 10 million people or more." : null}
          </p>
          <p className="mt-2">
            Most megacities are in Asia, and many are in lower- and middle-income countries (e.g. Dhaka, Karachi, Lagos, Kinshasa) where rural–urban migration and natural increase make cities grow very fast. In 1950 only Tokyo and New York had passed 10 million.
          </p>
          <p className="mt-2 text-xs text-ink-2">Simplified: UN estimates for 2018 (millions, rounded). Where you draw a city&apos;s boundary changes its population, so other sources give different rankings.</p>
        </>
      }
    >
      <div className="space-y-3">
        <Slider label="Megacity threshold" value={threshold} min={5} max={40} step={1} onChange={setThreshold} format={(v) => `${v} million`} />
        <Segmented
          label="Sort cities"
          value={sort}
          onChange={setSort}
          options={[
            { value: "size", label: "By size" },
            { value: "continent", label: "By continent" },
          ]}
        />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Cities over threshold" value={qualifying.length} />
          <Readout label="In Asia" value={`${asia} (${asiaShare}%)`} tone="ink" />
          <Readout label="Largest" value="Tokyo ≈ 37.5 m" tone="good" />
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-semibold text-ink-2">
          {byCont.map(({ c, n }) => (
            <span key={c} className="flex items-center gap-1 rounded-lg bg-surface-2 px-2 py-1">
              <svg width="10" height="10" aria-hidden><rect width="10" height="10" rx="2" className={CONT_CLS[c]} /></svg>
              {c}: {n}
            </span>
          ))}
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Bar chart of ${CITIES.length} large cities by population. ${qualifying.length} have at least ${threshold} million people, ${asia} of them in Asia.`}>
          {list.map((city, i) => {
            const y = top + i * rowH;
            const on = city.pop >= threshold;
            return (
              <g key={city.name} opacity={on ? 1 : 0.3}>
                <text x={left - 4} y={y + 9} fontSize={9.5} textAnchor="end" className="fill-ink">{city.name}</text>
                <rect x={left} y={y + 1} width={bx(city.pop) - left} height={rowH - 3} rx={2} className={CONT_CLS[city.c]} />
                <text x={bx(city.pop) + 3} y={y + 9} fontSize={9} className="fill-ink-2">{city.pop}</text>
              </g>
            );
          })}
          <line x1={bx(threshold)} x2={bx(threshold)} y1={0} y2={H} className="stroke-bad" strokeWidth={2} strokeDasharray="5 3" />
        </svg>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "urbanisation-curve",
    title: "Urbanisation curve",
    blurb: "Slide through 1950–2050 and watch the share of people living in cities rise — fastest in lower-income regions.",
    Component: UrbanisationCurve,
  },
  {
    id: "megacity-counter",
    title: "Megacity counter",
    blurb: "Move the population threshold and see which of the world's biggest cities count as megacities — and where they are.",
    Component: MegacityCounter,
  },
];
