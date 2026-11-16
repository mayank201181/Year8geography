"use client";
// Interactive explorables for "Over-population, Under-population & Policies".
import { useMemo, useState } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Population policy simulator — a simplified 5-year cohort model
// ---------------------------------------------------------------------------

type Start = "ageing" | "youthful";

const BAND_LABELS = [
  "0–4", "5–9", "10–14", "15–19", "20–24", "25–29", "30–34", "35–39", "40–44",
  "45–49", "50–54", "55–59", "60–64", "65–69", "70–74", "75–79", "80–84", "85+",
];

/** Illustrative starting pyramids (relative numbers, not real census data). */
const STARTS: Record<Start, { label: string; bands: number[]; survive: number[]; infant: number; oldest: number; tfr: number }> = {
  ageing: {
    label: "Ageing start (shape like Singapore or Japan)",
    bands: [32, 35, 38, 42, 48, 55, 60, 62, 62, 60, 58, 57, 52, 42, 30, 20, 12, 9],
    // Chance of surviving from one 5-year band to the next (high-income country).
    survive: [0.998, 0.999, 0.998, 0.997, 0.997, 0.996, 0.995, 0.993, 0.99, 0.985, 0.977, 0.965, 0.947, 0.92, 0.87, 0.79, 0.66],
    infant: 0.997,
    oldest: 0.45,
    tfr: 1.0,
  },
  youthful: {
    label: "Youthful start (shape like Niger or Nigeria)",
    bands: [180, 150, 128, 108, 90, 74, 60, 49, 40, 32, 26, 21, 16, 12, 8, 5, 3, 1],
    // Higher death rates at every age (low-income country).
    survive: [0.95, 0.99, 0.99, 0.985, 0.98, 0.98, 0.975, 0.97, 0.965, 0.955, 0.94, 0.92, 0.89, 0.85, 0.78, 0.68, 0.55],
    infant: 0.93,
    oldest: 0.35,
    tfr: 6.0,
  },
};

/** Age bands 15–49 (indices 3..9) are the child-bearing years. */
function step(p: number[], s: (typeof STARTS)[Start], tfr: number, migPct: number): number[] {
  const women = p.slice(3, 10).reduce((a, b) => a + b, 0) / 2;
  const births = (women * tfr) / 7; // each woman has TFR children spread over 7 five-year bands
  const next = new Array<number>(18).fill(0);
  next[0] = births * s.infant;
  for (let i = 1; i < 17; i++) next[i] = p[i - 1] * s.survive[i - 1];
  next[17] = p[16] * s.survive[16] + p[17] * s.oldest;
  // Net migration: young adults aged 20–34 (bands 4–6), as most migrants are.
  const total = p.reduce((a, b) => a + b, 0);
  const migrants = (total * migPct) / 100;
  for (const i of [4, 5, 6]) next[i] += migrants / 3;
  return next;
}

function stats(p: number[]) {
  const total = p.reduce((a, b) => a + b, 0);
  const young = p[0] + p[1] + p[2];
  const old = p.slice(13).reduce((a, b) => a + b, 0);
  const work = total - young - old;
  return { total, youngPct: (young / total) * 100, oldPct: (old / total) * 100, dep: ((young + old) / work) * 100 };
}

function Pyramid({ bands, scaleMax, year }: { bands: number[]; scaleMax: number; year: number }) {
  const W = 360, H = 300, mid = W / 2, gap = 22, top = 24, rowH = (H - top - 20) / 18;
  const half = mid - gap - 8;
  const s = stats(bands);
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label={`Population pyramid in ${year}: ${s.youngPct.toFixed(0)}% under 15, ${s.oldPct.toFixed(0)}% aged 65 and over.`}
    >
      <text x={mid - gap - 4} y={14} fontSize={11} textAnchor="end" className="fill-ink-2">Males</text>
      <text x={mid + gap + 4} y={14} fontSize={11} className="fill-ink-2">Females</text>
      {bands.map((v, i) => {
        const y = top + (17 - i) * rowH;
        const w = ((v / 2) / scaleMax) * half;
        const cls = i <= 2 ? "fill-brand" : i >= 13 ? "fill-accent" : "fill-ink-2";
        return (
          <g key={i}>
            <rect x={mid - gap - w} y={y + 1} width={w} height={rowH - 2} className={cls} opacity={0.85} />
            <rect x={mid + gap} y={y + 1} width={w} height={rowH - 2} className={cls} opacity={0.85} />
            {i % 2 === 0 || i === 17 ? (
              <text x={mid} y={y + rowH - 3} fontSize={8} textAnchor="middle" className="fill-ink-2">{BAND_LABELS[i]}</text>
            ) : null}
          </g>
        );
      })}
      <text x={mid} y={H - 4} fontSize={11} textAnchor="middle" className="fill-ink">Year {year}</text>
    </svg>
  );
}

function PolicySimulator() {
  const [start, setStart] = useState<Start>("ageing");
  const [tfr, setTfr] = useState(1.0);
  const [years, setYears] = useState(30);
  const [mig, setMig] = useState(0);

  const base = STARTS[start];
  const result = useMemo(() => {
    let p = [...base.bands];
    for (let t = 0; t < years / 5; t++) p = step(p, base, tfr, mig);
    return p;
  }, [base, tfr, years, mig]);

  const s0 = stats(base.bands);
  const s = stats(result);
  const index = (s.total / s0.total) * 100;
  const scaleMax = Math.max(...base.bands, ...result) / 2;
  const shape = s.youngPct >= 30 ? "youthful" : s.oldPct >= 21 ? "super-aged" : s.oldPct >= 14 ? "ageing" : "fairly balanced";
  const year = 2025 + years;

  const chooseStart = (v: Start) => {
    setStart(v);
    setTfr(STARTS[v].tfr);
    setMig(0);
  };

  return (
    <WidgetFrame
      title="Population policy simulator"
      tryThis={[
        "Ageing start: keep TFR at 1.0 (Singapore's resident TFR was about 0.97 in 2023) and move 50 years ahead. What happens to the share aged 65+?",
        "Ageing start: what TFR keeps the population index near 100 after 50 years with no migration? Is it near replacement level (2.1)?",
        "Can immigration of young adults alone stop the ageing population shrinking? How many % per 5 years does it take?",
        "Youthful start: cut TFR from 6.0 to 2.1. Why does the population keep growing for decades? (Hint: look at the 15–49 bars.)",
      ]}
      caption={
        <>
          <p>
            <strong>Year {year}:</strong> population index <strong>{index.toFixed(0)}</strong> (2025 = 100), {s.youngPct.toFixed(1)}% under 15, {s.oldPct.toFixed(1)}% aged 65+, dependency ratio {s.dep.toFixed(0)}.
            This population is <strong>{shape}</strong>.
          </p>
          <p className="mt-2">
            {tfr < 2.1
              ? "TFR is below replacement level (about 2.1), so each generation of parents is smaller than the last. The base of the pyramid narrows, the old-age share climbs and fewer workers support more retirees — the problem pro-natalist policies like the Baby Bonus try to fix."
              : tfr > 2.6
                ? "TFR is well above replacement level, so each generation is bigger than the last. The wide base means huge future demand for schools and jobs — the reason governments try anti-natalist policies or invest in girls' education."
                : "TFR is close to replacement level, so in the long run the population levels off — though a lopsided starting pyramid keeps changing for decades (population momentum)."}
            {mig > 0 ? " Immigration adds young adults, which slows ageing — but migrants grow old too, so it is not a permanent fix on its own." : ""}
          </p>
          <p className="mt-2 text-ink-2">Simplified model: fixed death rates, no change in life expectancy, illustrative starting pyramids.</p>
        </>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Starting population"
          value={start}
          onChange={chooseStart}
          options={[
            { value: "ageing", label: "Ageing start" },
            { value: "youthful", label: "Youthful start" },
          ]}
        />
        <p className="text-xs text-ink-2">{base.label}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-4">
            <Slider label="Total fertility rate (children per woman)" value={tfr} min={0.8} max={7} step={0.1} onChange={setTfr} format={(v) => v.toFixed(1)} />
            <Slider label="Years ahead" value={years} min={0} max={60} step={5} onChange={setYears} format={(v) => `${v} years (${2025 + v})`} />
            <Slider label="Net immigration of young adults (% of population per 5 years)" value={mig} min={0} max={5} step={0.5} onChange={setMig} format={(v) => `${v.toFixed(1)}%`} />
            <div className="grid grid-cols-2 gap-2">
              <Readout label="Population index" value={index.toFixed(0)} tone={index < 95 ? "bad" : index > 105 ? "brand" : "good"} />
              <Readout label="Aged 65+" value={`${s.oldPct.toFixed(1)}%`} tone={s.oldPct >= 21 ? "bad" : "ink"} />
              <Readout label="Under 15" value={`${s.youngPct.toFixed(1)}%`} tone={s.youngPct >= 30 ? "bad" : "ink"} />
              <Readout label="Dependency ratio" value={s.dep.toFixed(0)} tone="ink" />
            </div>
          </div>
          <div>
            <Pyramid bands={result} scaleMax={scaleMax} year={year} />
            <p className="mt-1 text-center text-xs text-ink-2">
              <span className="font-bold text-brand">■</span> under 15 · <span className="font-bold text-ink-2">■</span> 15–64 · <span className="font-bold text-accent">■</span> 65+
            </p>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. 4-2-1 family tree — who cares for the elders?
// ---------------------------------------------------------------------------

function Dots({ n, y, cls, r, W, labelIdx }: { n: number; y: number; cls: string; r: number; W: number; labelIdx?: number }) {
  const gap = Math.min(2.6 * r, (W - 40) / Math.max(n, 1));
  const x0 = W / 2 - ((n - 1) * gap) / 2;
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <circle key={i} cx={x0 + i * gap} cy={y} r={r} className={i === labelIdx ? "fill-brand stroke-ink" : cls} strokeWidth={i === labelIdx ? 2 : 1} />
      ))}
    </g>
  );
}

function FamilyTree() {
  const [k, setK] = useState(1);
  const [greats, setGreats] = useState<"no" | "yes">("no");
  const [support, setSupport] = useState(300);

  // Elders you share with: parents (shared with your k−1 siblings), grandparents (shared with all k² grandchildren
  // of each grandparent couple), great-grandparents (shared with k³ great-grandchildren of each couple).
  const showGreats = greats === "yes";
  const eldersPerYoung = 2 / k + 4 / (k * k) + (showGreats ? 8 / (k * k * k) : 0);
  const cost = eldersPerYoung * support;
  const elders = 6 + (showGreats ? 8 : 0);
  const sameGen = k + 2 * (k - 1) * k; // you + siblings + cousins
  const parentsGen = 2 * k; // your parents + their brothers and sisters

  const W = 460, H = showGreats ? 250 : 200;
  const rows = showGreats
    ? [{ n: 8, label: "Great-grandparents" }, { n: 4, label: "Grandparents" }, { n: parentsGen, label: "Parents, aunts & uncles" }, { n: sameGen, label: "You, siblings & cousins" }]
    : [{ n: 4, label: "Grandparents" }, { n: parentsGen, label: "Parents, aunts & uncles" }, { n: sameGen, label: "You, siblings & cousins" }];
  const rowGap = (H - 30) / rows.length;

  return (
    <WidgetFrame
      title="The 4-2-1 family tree"
      tryThis={[
        "With 1 child per couple, how many elders does each young person support? Now switch on great-grandparents.",
        "Change to 2 children per couple. Why does the burden fall by much more than half?",
        "With $300 per elder per month, how much does an only child pay compared with someone from a 3-child family?",
      ]}
      caption={
        <>
          <p>
            With <strong>{k}</strong> child{k > 1 ? "ren" : ""} per couple in every generation, each young adult shares the care of {elders} elders with
            {k === 1 ? " nobody — there are no siblings or cousins" : ` ${k - 1} sibling${k > 2 ? "s" : ""} and ${2 * (k - 1) * k} cousins`}.
            That is about <strong>{eldersPerYoung.toFixed(2)} elders per young person</strong>, or about <strong>${Math.round(cost).toLocaleString("en-GB")}</strong> a month.
          </p>
          <p className="mt-2">
            {k === 1
              ? "This is China's 4-2-1 problem: after decades of the One-Child Policy (1980–2015), one adult may have to support two parents and four grandparents, often with no state pension big enough to cover care. It is one reason China moved to a two-child (2016) and three-child (2021) policy."
              : "With more children, the burden is shared between siblings AND cousins, so it falls very quickly — the number of grandchildren grows as k², while the number of grandparents stays at 4."}
          </p>
          <p className="mt-2 text-ink-2">Simplified model: everyone has a partner and the same number of children; all elders are alive and need equal support.</p>
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink-2">Children per couple</span>
          <Segmented
            label="Children per couple"
            value={String(k) as "1" | "2" | "3"}
            onChange={(v) => setK(Number(v))}
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
            ]}
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink-2">Great-grandparents alive?</span>
          <Segmented
            label="Great-grandparents alive"
            value={greats}
            onChange={setGreats}
            options={[
              { value: "no", label: "No" },
              { value: "yes", label: "Yes" },
            ]}
          />
        </div>
        <Stepper label="Support per elder ($ a month)" value={support} min={100} max={1000} step={50} onChange={setSupport} format={(v) => `$${v}`} />
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          role="img"
          aria-label={`Family tree: ${rows.map((r) => `${r.n} ${r.label.toLowerCase()}`).join(", ")}. About ${eldersPerYoung.toFixed(2)} elders per young person.`}
        >
          {rows.map((r, i) => {
            const y = 26 + i * rowGap + rowGap / 2;
            const isBottom = i === rows.length - 1;
            const isElder = i < rows.length - 2;
            const cls = isBottom ? "fill-good stroke-ink" : isElder ? "fill-accent stroke-ink" : "fill-surface-2 stroke-ink";
            return (
              <g key={r.label}>
                <text x={8} y={y - 16} fontSize={11} className="fill-ink-2">{r.label} ({r.n})</text>
                <Dots n={r.n} y={y} cls={cls} r={r.n > 12 ? 7 : 10} W={W} labelIdx={isBottom ? 0 : undefined} />
              </g>
            );
          })}
        </svg>
        <p className="text-center text-xs text-ink-2">
          <span className="font-bold text-accent">●</span> retired elders · <span className="font-bold text-ink-2">○</span> parents&apos; generation (your 2 parents are elders too in the sums) · <span className="font-bold text-brand">●</span> you
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Elders per young person" value={eldersPerYoung.toFixed(2)} tone={eldersPerYoung > 3 ? "bad" : eldersPerYoung > 1.5 ? "ink" : "good"} />
          <Readout label="Your monthly cost" value={`$${Math.round(cost).toLocaleString("en-GB")}`} tone={cost > 1000 ? "bad" : "ink"} />
          <Readout label="Grandchildren per grandparent couple" value={k * k} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "population-policy-simulator",
    title: "Population policy simulator",
    blurb: "Change the fertility rate and immigration, run the clock forward and watch the pyramid age or grow.",
    Component: PolicySimulator,
  },
  {
    id: "four-two-one-family",
    title: "The 4-2-1 family tree",
    blurb: "See how many elders each young person must support when every couple has 1, 2 or 3 children.",
    Component: FamilyTree,
  },
];
