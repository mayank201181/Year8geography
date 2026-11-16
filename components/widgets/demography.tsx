"use client";
import { useMemo, useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Population-pyramid builder (simplified cohort model)
// ---------------------------------------------------------------------------

const MAX_AGE = 100;
const BAND_LABELS = ["0–4", "5–9", "10–14", "15–19", "20–24", "25–29", "30–34", "35–39", "40–44", "45–49", "50–54", "55–59", "60–64", "65–69", "70–74", "75–79", "80–84", "85+"];
const BOOM_WIDTH = 10;
/** The births trend applies over this many recent years; earlier births were steady. */
const TREND_YEARS = 50;

/** Weibull-style survival curve with extra child mortality when life expectancy is low. */
function survivalCurve(lifeExp: number): number[] {
  const childLoss = Math.min(0.25, Math.max(0, (80 - lifeExp) / 140));
  const shape = 3.5 + Math.max(0, (lifeExp - 40) / 9);
  const curve = (k: number) => {
    const s: number[] = [];
    for (let a = 0; a <= MAX_AGE; a++) s.push((a >= 1 ? 1 - childLoss : 1) * Math.exp(-Math.pow(a / k, shape)));
    return s;
  };
  // Find the scale k so that the expected years lived ≈ the chosen life expectancy.
  let lo = 10, hi = 140;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    const e = curve(mid).reduce((x, y) => x + y, 0) - 0.5;
    if (e < lifeExp) lo = mid;
    else hi = mid;
  }
  return curve((lo + hi) / 2);
}

interface PyramidModel {
  male: number[]; // % of total population per band
  female: number[];
  young: number;
  working: number;
  old: number;
}

function buildPyramid(trend: number, lifeExp: number, boom: boolean, boomAgo: number): PyramidModel {
  const sm = survivalCurve(lifeExp - 2.5);
  const sf = survivalCurve(lifeExp + 2.5);
  const m: number[] = [], f: number[] = [];
  for (let a = 0; a <= MAX_AGE; a++) {
    // Births a years ago, relative to births this year.
    let births = Math.pow(1 + trend / 100, -Math.min(a, TREND_YEARS));
    if (boom && a >= boomAgo && a < boomAgo + BOOM_WIDTH) births *= 1.4;
    m.push(births * 0.512 * sm[a]);
    f.push(births * 0.488 * sf[a]);
  }
  const total = m.reduce((x, y) => x + y, 0) + f.reduce((x, y) => x + y, 0);
  const band = (arr: number[], i: number) => {
    const from = i * 5, to = i === 17 ? MAX_AGE : i * 5 + 4;
    let s = 0;
    for (let a = from; a <= to; a++) s += arr[a];
    return (s * 100) / total;
  };
  const male = BAND_LABELS.map((_, i) => band(m, i));
  const female = BAND_LABELS.map((_, i) => band(f, i));
  const range = (from: number, to: number) => {
    let s = 0;
    for (let a = from; a <= to; a++) s += m[a] + f[a];
    return (s * 100) / total;
  };
  return { male, female, young: range(0, 14), working: range(15, 64), old: range(65, MAX_AGE) };
}

type PresetKey = "niger" | "uk" | "japan" | "custom";
const PRESETS: Record<Exclude<PresetKey, "custom">, { trend: number; life: number; boom: boolean; boomAgo: number }> = {
  niger: { trend: 3.5, life: 62, boom: false, boomAgo: 20 },
  uk: { trend: 0, life: 81, boom: true, boomAgo: 58 },
  japan: { trend: -1.5, life: 85, boom: true, boomAgo: 72 },
};

function shapeLabel(p: PyramidModel): { text: string; tone: "good" | "bad" | "brand" } {
  if (p.young >= 35) return { text: "Youthful", tone: "brand" };
  if (p.old >= 20) return { text: "Strongly ageing", tone: "bad" };
  if (p.old >= 14) return { text: "Ageing", tone: "bad" };
  return { text: "In between", tone: "good" };
}

function PyramidBuilder() {
  const [preset, setPreset] = useState<PresetKey>("niger");
  const [trend, setTrend] = useState(PRESETS.niger.trend);
  const [life, setLife] = useState(PRESETS.niger.life);
  const [boom, setBoom] = useState(PRESETS.niger.boom);
  const [boomAgo, setBoomAgo] = useState(PRESETS.niger.boomAgo);

  const p = useMemo(() => buildPyramid(trend, life, boom, boomAgo), [trend, life, boom, boomAgo]);
  const ratio = ((p.young + p.old) / p.working) * 100;
  const label = shapeLabel(p);

  const choose = (k: PresetKey) => {
    setPreset(k);
    if (k === "custom") return;
    const v = PRESETS[k];
    setTrend(v.trend);
    setLife(v.life);
    setBoom(v.boom);
    setBoomAgo(v.boomAgo);
  };
  const custom = <T,>(set: (v: T) => void) => (v: T) => {
    set(v);
    setPreset("custom");
  };

  // SVG geometry
  const W = 360, rowH = 14, top = 22, cx = 180, gap = 22;
  const H = top + BAND_LABELS.length * rowH + 22;
  const maxPct = Math.max(...p.male, ...p.female);
  const scaleMax = Math.max(4, Math.ceil(maxPct));
  const unit = (cx - gap - 14) / scaleMax;

  const baseWide = p.male[0] + p.female[0];
  const topWide = p.male[13] + p.female[13] + p.male[14] + p.female[14];
  const trendText = trend > 0.4 ? "rising each year, so every new cohort is bigger than the one before — the base is wide" : trend < -0.4 ? "falling each year, so the youngest bars are shorter than the ones above them — the base narrows" : "roughly steady, so the bars shrink only because people die as they age";

  return (
    <WidgetFrame
      title="Population-pyramid builder"
      tryThis={[
        "Start on **Niger-like**. Which single slider turns the wide base into a narrow one?",
        "Switch the baby boom on at 20 years ago, then slide it to 60: watch the bulge climb the pyramid as that cohort ages.",
        "Set births to −2 %/yr and life expectancy to 85. Is the dependency ratio high or low? Who are the dependents now?",
        "Can you find a youthful AND an ageing pyramid with almost the same dependency ratio?",
      ]}
      caption={
        <>
          <p>
            <strong>{label.text} structure.</strong> Births are {trendText}. Life expectancy of about {life} years{" "}
            {life >= 78 ? "lets most people survive into old age, so the top of the pyramid is wide." : life <= 60 ? "means many people die young, so the sides slope in steeply." : "keeps the sides fairly steep."}{" "}
            {boom ? `The baby boom born ${boomAgo}–${boomAgo + BOOM_WIDTH - 1} years ago shows as a bulge at those ages.` : ""}
          </p>
          <p className="mt-2">
            0–14: {p.young.toFixed(1)}% · 15–64: {p.working.toFixed(1)}% · 65+: {p.old.toFixed(1)}%. Dependency ratio ≈ {ratio.toFixed(0)}: about {ratio.toFixed(0)} young or elderly people for every 100 of working age.
            {baseWide > topWide * 2 ? " Most dependents are children — schools and jobs for school-leavers are the big needs." : p.old > p.young ? " Most dependents are elderly — pensions and healthcare are the big needs." : ""}
          </p>
          <p className="mt-2 text-ink-2">
            Simplified model: no migration, no wars or famines, women live about 5 years longer than men. Real pyramids (e.g. Singapore&apos;s) are also shaped by immigration of working-age adults.
          </p>
        </>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Starting shape"
          value={preset}
          onChange={choose}
          options={[
            { value: "niger", label: "Niger-like" },
            { value: "uk", label: "UK-like" },
            { value: "japan", label: "Japan-like" },
            { value: "custom", label: "Custom" },
          ]}
        />
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Population pyramid: ${label.text.toLowerCase()} shape, ${p.young.toFixed(0)}% aged 0 to 14, ${p.old.toFixed(0)}% aged 65 and over, dependency ratio about ${ratio.toFixed(0)}`}>
          <text x={cx - gap - 60} y={14} fontSize={11} textAnchor="middle" className="fill-ink-2">Males</text>
          <text x={cx + gap + 60} y={14} fontSize={11} textAnchor="middle" className="fill-ink-2">Females</text>
          {BAND_LABELS.map((lab, i) => {
            const y = top + (BAND_LABELS.length - 1 - i) * rowH;
            const mw = p.male[i] * unit, fw = p.female[i] * unit;
            const tint = i < 3 ? "opacity-100" : i >= 13 ? "opacity-70" : "opacity-85";
            return (
              <g key={lab}>
                <rect x={cx - gap - mw} y={y + 1} width={mw} height={rowH - 2} className={`fill-brand ${tint}`} />
                <rect x={cx + gap} y={y + 1} width={fw} height={rowH - 2} className={`fill-accent ${tint}`} />
                <text x={cx} y={y + rowH - 3} fontSize={9} textAnchor="middle" className="fill-ink">{lab}</text>
              </g>
            );
          })}
          {/* dependency bands guide */}
          <line x1={10} x2={W - 10} y1={top + (BAND_LABELS.length - 3) * rowH} y2={top + (BAND_LABELS.length - 3) * rowH} className="stroke-line" strokeDasharray="3 3" />
          <line x1={10} x2={W - 10} y1={top + 5 * rowH} y2={top + 5 * rowH} className="stroke-line" strokeDasharray="3 3" />
          <text x={8} y={top + 5 * rowH - 3} fontSize={8} className="fill-ink-2">65+</text>
          <text x={8} y={top + (BAND_LABELS.length - 3) * rowH + 10} fontSize={8} className="fill-ink-2">0–14</text>
          {[Math.round(scaleMax / 2), scaleMax].map((v) => (
            <g key={v}>
              <text x={cx - gap - v * unit} y={H - 6} fontSize={8} textAnchor="middle" className="fill-ink-2">{v}</text>
              <text x={cx + gap + v * unit} y={H - 6} fontSize={8} textAnchor="middle" className="fill-ink-2">{v}</text>
            </g>
          ))}
          <text x={cx} y={H - 6} fontSize={8} textAnchor="middle" className="fill-ink-2">% of population</text>
        </svg>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Aged 0–14" value={`${p.young.toFixed(1)}%`} tone="ink" />
          <Readout label="Aged 65+" value={`${p.old.toFixed(1)}%`} tone="ink" />
          <Readout label="Dependency ratio" value={ratio.toFixed(0)} tone={ratio > 70 ? "bad" : "good"} />
          <Readout label="Shape" value={label.text} tone={label.tone} />
        </div>
        <Slider label="Births trend over the last 50 years (change per year)" value={trend} min={-3} max={4} step={0.5} onChange={custom(setTrend)} format={(v) => `${v > 0 ? "+" : v < 0 ? "−" : ""}${Math.abs(v)}%/yr`} />
        <Slider label="Life expectancy" value={life} min={45} max={88} onChange={custom(setLife)} format={(v) => `${v} years`} />
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => custom(setBoom)(!boom)}
            aria-pressed={boom}
            className={`min-h-10 rounded-xl border border-line px-3 py-2 text-sm font-bold ${boom ? "bg-brand-soft text-brand" : "bg-surface-2 text-ink-2"}`}
          >
            Baby boom: {boom ? "on" : "off"}
          </button>
        </div>
        {boom ? <Slider label="Baby boom happened … years ago" value={boomAgo} min={0} max={80} step={2} onChange={custom(setBoomAgo)} format={(v) => `${v}–${v + BOOM_WIDTH - 1} yrs`} /> : null}
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Dependency-ratio explorer (100-person grid)
// ---------------------------------------------------------------------------

type DepPreset = "niger" | "japan" | "singapore" | "uk" | "custom";
const DEP_PRESETS: Record<Exclude<DepPreset, "custom">, { young: number; old: number; note: string }> = {
  niger: { young: 49, old: 3, note: "Niger (about 49% under 15, about 3% aged 65+, early 2020s)" },
  japan: { young: 11, old: 29, note: "Japan (about 11% under 15, about 29% aged 65+, early 2020s)" },
  singapore: { young: 14, old: 19, note: "Singapore residents (about 14% under 15, about 19% aged 65+, early 2020s)" },
  uk: { young: 17, old: 19, note: "UK (about 17% under 15, about 19% aged 65+, early 2020s)" },
};

function DependencyExplorer() {
  const [preset, setPreset] = useState<DepPreset>("singapore");
  const [young, setYoung] = useState(DEP_PRESETS.singapore.young);
  const [old, setOld] = useState(DEP_PRESETS.singapore.old);

  const choose = (k: DepPreset) => {
    setPreset(k);
    if (k === "custom") return;
    setYoung(DEP_PRESETS[k].young);
    setOld(DEP_PRESETS[k].old);
  };
  const setY = (v: number) => {
    setYoung(Math.min(v, 85 - old));
    setPreset("custom");
  };
  const setO = (v: number) => {
    setOld(Math.min(v, 85 - young));
    setPreset("custom");
  };

  const working = 100 - young - old;
  const total = ((young + old) / working) * 100;
  const youthDR = (young / working) * 100;
  const oldDR = (old / working) * 100;
  const per10 = (total / 10).toFixed(1);

  const cells = Array.from({ length: 100 }, (_, i) => (i < young ? "young" : i < young + working ? "work" : "old"));
  const cls = { young: "fill-brand", work: "fill-line", old: "fill-accent" } as const;

  const verdict =
    total >= 80 ? "Very high: each worker supports a lot of dependents — heavy pressure on taxes and families." : total >= 60 ? "Fairly high: noticeable pressure on the working-age population." : total >= 45 ? "Moderate: a fairly balanced age structure." : "Low: lots of working-age people for each dependent — a possible 'demographic dividend' if there are enough jobs.";
  const mix = young > old * 2 ? "Most dependents are children, so the needs are schools, childcare, vaccinations and future jobs." : old > young * 1.3 ? "Most dependents are elderly, so the needs are pensions, healthcare and care homes — and fewer future workers." : "Dependents are a mix of children and elderly people.";

  return (
    <WidgetFrame
      title="Dependency-ratio explorer"
      tryThis={[
        "Compare the **Niger** and **Japan** presets. Both have high ratios — but who are the dependents in each?",
        "Make the dependency ratio as close to 50 as you can. What does 50 mean in words?",
        "Keep the ratio near 70 while switching the dependents from mostly young to mostly old.",
        "Why might the real burden be different from the ratio? (Think: 16-year-olds in school, 68-year-olds still working.)",
      ]}
      caption={
        <>
          <p>
            Dependency ratio = <strong>(0–14 + 65+) ÷ (15–64) × 100</strong> = ({young} + {old}) ÷ {working} × 100 ≈ <strong>{total.toFixed(1)}</strong>.
            That is about <strong>{per10}</strong> dependents for every 10 people of working age. {verdict}
          </p>
          <p className="mt-2">{mix}</p>
          <p className="mt-2 text-ink-2">
            {preset !== "custom" ? `Preset: ${DEP_PRESETS[preset].note}. Rounded figures. ` : ""}The ratio is a simplified measure: not everyone aged 15–64 has a job, and many people over 65 still work.
          </p>
        </>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Country preset"
          value={preset}
          onChange={choose}
          options={[
            { value: "niger", label: "Niger" },
            { value: "japan", label: "Japan" },
            { value: "singapore", label: "Singapore" },
            { value: "uk", label: "UK" },
            { value: "custom", label: "Custom" },
          ]}
        />
        <div className="grid gap-4 sm:grid-cols-[1fr_1fr] sm:items-center">
          <svg viewBox="0 0 210 210" className="mx-auto h-auto w-full max-w-[260px]" role="img" aria-label={`100 people: ${young} aged 0 to 14, ${working} aged 15 to 64, ${old} aged 65 and over. Dependency ratio about ${total.toFixed(0)}.`}>
            {cells.map((c, i) => (
              <rect key={i} x={5 + (i % 10) * 20} y={5 + Math.floor(i / 10) * 20} width={17} height={17} rx={4} className={cls[c]} />
            ))}
          </svg>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded bg-brand" aria-hidden /> Young dependents (0–14): <strong>{young}</strong></div>
            <div className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded bg-line" aria-hidden /> Working age (15–64): <strong>{working}</strong></div>
            <div className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded bg-accent" aria-hidden /> Elderly dependents (65+): <strong>{old}</strong></div>
            <p className="text-ink-2">Each square is 1% of the population (1 person in 100).</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <Readout label="Dependency ratio" value={total.toFixed(1)} tone={total >= 70 ? "bad" : "good"} />
          <Readout label="Youth part" value={youthDR.toFixed(1)} tone="ink" />
          <Readout label="Old-age part" value={oldDR.toFixed(1)} tone="ink" />
        </div>
        <Slider label="% aged 0–14" value={young} min={5} max={55} onChange={setY} format={(v) => `${v}%`} />
        <Slider label="% aged 65 and over" value={old} min={1} max={40} onChange={setO} format={(v) => `${v}%`} />
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "demography-pyramid-builder",
    title: "Population-pyramid builder",
    blurb: "Change birth trends, life expectancy and a baby boom — watch the pyramid reshape and the dependency ratio respond.",
    Component: PyramidBuilder,
  },
  {
    id: "demography-dependency-explorer",
    title: "Dependency-ratio explorer",
    blurb: "Set the share of children and elderly people in 100 people and see what the dependency ratio means.",
    Component: DependencyExplorer,
  },
];
