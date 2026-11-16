"use client";
// Interactive explorables for "How and Why Do Populations Change?"
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Population change balance
// ---------------------------------------------------------------------------

type PresetId = "custom" | "youthful" | "ageing" | "immigration" | "emigration";

const PRESETS: Record<Exclude<PresetId, "custom">, { label: string; br: number; dr: number; im: number; em: number; note: string }> = {
  youthful: { label: "Youthful", br: 44, dr: 8, im: 1, em: 2, note: "Roughly like Niger: very high birth rate, low death rate, little migration." },
  ageing: { label: "Ageing", br: 6, dr: 13, im: 3, em: 1, note: "Roughly like Japan: very low birth rate, rising death rate from an old population, a little immigration." },
  immigration: { label: "Low births + immigration", br: 7, dr: 5, im: 18, em: 8, note: "A Singapore-style pattern: fertility far below replacement, with immigration making up the difference (illustrative numbers — Singapore's migration changes a lot from year to year)." },
  emigration: { label: "Emigration", br: 9, dr: 14, im: 3, em: 8, note: "A pattern seen in some Eastern European countries: more deaths than births AND more people leaving than arriving." },
};

const START = 1_000_000;

function fmt(n: number): string {
  const s = Math.round(n).toLocaleString("en-GB");
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}

function signed(n: number, dp = 0): string {
  const v = dp ? n.toFixed(dp) : String(Math.round(n));
  if (Number(v) === 0) return dp ? (0).toFixed(dp) : "0";
  return n > 0 ? `+${v}` : `−${v.replace("-", "")}`;
}

function BalanceWidget() {
  const [br, setBr] = useState(20);
  const [dr, setDr] = useState(8);
  const [im, setIm] = useState(5);
  const [em, setEm] = useState(5);
  const [preset, setPreset] = useState<PresetId>("custom");

  const apply = (p: PresetId) => {
    setPreset(p);
    if (p === "custom") return;
    const v = PRESETS[p];
    setBr(v.br);
    setDr(v.dr);
    setIm(v.im);
    setEm(v.em);
  };
  const edit = (set: (v: number) => void) => (v: number) => {
    set(v);
    setPreset("custom");
  };

  const nat = br - dr;
  const net = im - em;
  const total = nat + net;
  const pct = total / 10;
  const gains = br + im;
  const losses = dr + em;
  const after = (years: number) => START * Math.pow(1 + total / 1000, years);
  const p25 = after(25);
  const p50 = after(50);

  // Driver: which component is bigger in size?
  const driver = Math.abs(nat) === Math.abs(net) ? "both equally" : Math.abs(nat) > Math.abs(net) ? "natural change" : "net migration";

  // Seesaw geometry. SVG rotate(θ) is clockwise; gains on the LEFT, so more gains → negative θ.
  const cx = 180, cy = 190, L = 130, u = 1.5;
  const theta = -Math.max(-14, Math.min(14, (gains - losses) * 0.5));
  const rad = (theta * Math.PI) / 180;
  const lx = cx - L * Math.cos(rad), ly = cy - L * Math.sin(rad);
  const rx = cx + L * Math.cos(rad), ry = cy + L * Math.sin(rad);
  const bw = 52;

  // Projection chart (0–50 years).
  const W = 360, H = 150, pl = 46, pr = 12, pt = 12, pb = 26;
  const pts = Array.from({ length: 51 }, (_, y) => after(y));
  const maxP = Math.max(START * 1.2, ...pts);
  const minP = Math.min(START * 0.8, ...pts);
  const X = (y: number) => pl + (y / 50) * (W - pl - pr);
  const Y = (p: number) => pt + (1 - (p - minP) / (maxP - minP)) * (H - pt - pb);
  const path = pts.map((p, y) => `${y === 0 ? "M" : "L"}${X(y).toFixed(1)},${Y(p).toFixed(1)}`).join(" ");
  const ticks = [minP, START, maxP];

  const presetNote = preset !== "custom" ? PRESETS[preset].note : null;

  return (
    <WidgetFrame
      title="Population change balance"
      tryThis={[
        "Make the population **shrink** even though births are higher than deaths. What did you have to change?",
        "Pick **Ageing**. Which component is pulling the population down — and how big would immigration need to be to stop the fall?",
        "Pick **Youthful**, then set immigration and emigration to 0. Does migration matter much here? Why not?",
        "Find a setting where the population stays almost exactly the same, but with lots of people arriving AND leaving.",
      ]}
      caption={
        <>
          <p>
            <b>Population change = (births − deaths) + (immigrants − emigrants).</b> Here, natural change is{" "}
            <b>{signed(nat)}</b> per 1,000 and net migration is <b>{signed(net)}</b> per 1,000, so the population changes by{" "}
            <b>{signed(total)}</b> per 1,000 people a year ({signed(pct, 1)}%).{" "}
            {total > 0 ? "The gains side is heavier, so the population grows." : total < 0 ? "The losses side is heavier, so the population shrinks." : "Gains and losses balance exactly, so the population stays the same size."}
          </p>
          <p className="mt-2">
            The bigger driver right now is <b>{driver}</b>.
            {nat < 0 && net > 0 && total >= 0 ? " Immigration is fully making up for the natural decrease — just what Singapore relies on." : ""}
            {nat < 0 && net <= 0 ? " Both components are negative — the population is being squeezed from both sides." : ""}
            {nat > 20 ? " Very high natural increase like this is typical of youthful countries in Stage 2–3 of the DTM." : ""}
          </p>
          {presetNote ? <p className="mt-2 text-ink-2">{presetNote}</p> : null}
          <p className="mt-2 text-ink-2">Simplified model: the projection keeps every rate fixed for 50 years. Real rates change over time (e.g. as countries develop, birth rates fall).</p>
        </>
      }
    >
      <div className="space-y-4">
        <Segmented<PresetId>
          label="Example patterns"
          value={preset}
          onChange={apply}
          options={[
            { value: "custom", label: "Custom" },
            ...(Object.keys(PRESETS) as Exclude<PresetId, "custom">[]).map((k) => ({ value: k, label: PRESETS[k].label })),
          ]}
        />

        <svg viewBox="0 0 360 260" className="h-auto w-full" role="img" aria-label={`Balance: gains ${gains} per 1,000 (births ${br}, immigrants ${im}) against losses ${losses} per 1,000 (deaths ${dr}, emigrants ${em}). The ${total > 0 ? "gains side is heavier: the population grows" : total < 0 ? "losses side is heavier: the population shrinks" : "two sides balance: no change"}.`}>
          {/* fulcrum */}
          <polygon points={`${cx},${cy} ${cx - 22},${cy + 50} ${cx + 22},${cy + 50}`} className="fill-surface-2 stroke-ink-2" strokeWidth={1.5} />
          <line x1={20} x2={340} y1={cy + 50} y2={cy + 50} className="stroke-line" strokeWidth={2} />
          {/* beam */}
          <line x1={lx} y1={ly} x2={rx} y2={ry} className="stroke-ink" strokeWidth={5} strokeLinecap="round" />
          <circle cx={cx} cy={cy} r={5} className="fill-ink" />
          {/* left stack: gains */}
          <rect x={lx - bw / 2} y={ly - br * u} width={bw} height={br * u} fill="#22c55e" stroke="#14532d" strokeWidth={1} />
          <rect x={lx - bw / 2} y={ly - (br + im) * u} width={bw} height={im * u} fill="#38bdf8" stroke="#075985" strokeWidth={1} />
          {/* right stack: losses */}
          <rect x={rx - bw / 2} y={ry - dr * u} width={bw} height={dr * u} fill="#f87171" stroke="#7f1d1d" strokeWidth={1} />
          <rect x={rx - bw / 2} y={ry - (dr + em) * u} width={bw} height={em * u} fill="#fbbf24" stroke="#78350f" strokeWidth={1} />
          <text x={lx} y={ly + 18} fontSize={12} textAnchor="middle" className="fill-ink" fontWeight={700}>GAINS {gains}</text>
          <text x={rx} y={ry + 18} fontSize={12} textAnchor="middle" className="fill-ink" fontWeight={700}>LOSSES {losses}</text>
          {/* legend */}
          <g fontSize={11} className="fill-ink-2">
            <rect x={8} y={8} width={10} height={10} fill="#22c55e" /><text x={22} y={17}>births</text>
            <rect x={70} y={8} width={10} height={10} fill="#38bdf8" /><text x={84} y={17}>immigrants</text>
            <rect x={170} y={8} width={10} height={10} fill="#f87171" /><text x={184} y={17}>deaths</text>
            <rect x={232} y={8} width={10} height={10} fill="#fbbf24" /><text x={246} y={17}>emigrants</text>
            <text x={8} y={34}>(all per 1,000 people per year)</text>
          </g>
        </svg>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider label="Birth rate (per 1,000)" value={br} min={0} max={50} onChange={edit(setBr)} />
          <Slider label="Death rate (per 1,000)" value={dr} min={0} max={30} onChange={edit(setDr)} />
          <Slider label="Immigration (per 1,000)" value={im} min={0} max={30} onChange={edit(setIm)} />
          <Slider label="Emigration (per 1,000)" value={em} min={0} max={30} onChange={edit(setEm)} />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Natural change /1,000" value={signed(nat)} tone={nat >= 0 ? "good" : "bad"} />
          <Readout label="Net migration /1,000" value={signed(net)} tone={net >= 0 ? "good" : "bad"} />
          <Readout label="Change per year" value={`${signed(pct, 1)}%`} tone={total >= 0 ? "good" : "bad"} />
          <Readout label="1 million → in 25 yrs" value={fmt(p25)} tone="ink" />
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Projection: a population of 1,000,000 becomes about ${fmt(p25)} after 25 years and ${fmt(p50)} after 50 years if rates stay the same.`}>
          {ticks.map((t) => (
            <g key={t}>
              <line x1={pl} x2={W - pr} y1={Y(t)} y2={Y(t)} className="stroke-line" strokeWidth={1} />
              <text x={pl - 4} y={Y(t) + 4} fontSize={10} textAnchor="end" className="fill-ink-2">{(t / 1e6).toFixed(2)}m</text>
            </g>
          ))}
          {[0, 10, 20, 30, 40, 50].map((y) => (
            <text key={y} x={X(y)} y={H - 8} fontSize={10} textAnchor="middle" className="fill-ink-2">{y}</text>
          ))}
          <text x={W - pr} y={H - 8} fontSize={10} textAnchor="end" className="fill-ink-2">years</text>
          <path d={path} fill="none" className={total >= 0 ? "stroke-good" : "stroke-bad"} strokeWidth={2.5} />
          <circle cx={X(50)} cy={Y(p50)} r={3.5} className={total >= 0 ? "fill-good" : "fill-bad"} />
        </svg>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Push–pull factor sorter (simplified Lee model)
// ---------------------------------------------------------------------------

type Kind = "push" | "pull" | "obstacle";

interface Card {
  id: string;
  text: string;
  kind: Kind;
  weight: 1 | 2 | 3;
  why: string;
}

interface Scenario {
  id: string;
  label: string;
  story: string;
  type: string;
  cards: Card[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "bihar",
    label: "Bihar → Mumbai",
    story: "Priya, 19, lives in a farming village in Bihar, India. She is thinking about moving to Mumbai.",
    type: "Voluntary, internal (rural–urban) migration.",
    cards: [
      { id: "b1", text: "Farm work in the village only pays in harvest season", kind: "push", weight: 3, why: "A problem at home (origin) — it pushes her away." },
      { id: "b2", text: "Factory and service jobs in Mumbai pay all year round", kind: "pull", weight: 3, why: "An attraction at the destination." },
      { id: "b3", text: "Her cousin already lives in Mumbai and can help her settle", kind: "pull", weight: 2, why: "Family networks at the destination are a strong pull." },
      { id: "b4", text: "The train journey costs more than a month's wages", kind: "obstacle", weight: 1, why: "A cost of moving that sits between origin and destination." },
      { id: "b5", text: "There is no college near her village", kind: "push", weight: 2, why: "Lack of services at home pushes young people out." },
      { id: "b6", text: "Housing in Mumbai is very expensive and she may have to live in a crowded settlement", kind: "obstacle", weight: 2, why: "A difficulty that makes the move harder, not a reason to go." },
      { id: "b7", text: "She does not speak Marathi, the local language in Mumbai", kind: "obstacle", weight: 1, why: "A language barrier is an intervening obstacle." },
    ],
  },
  {
    id: "manila",
    label: "Philippines → Singapore",
    story: "Marco is a trained nurse in the Philippines. A hospital in Singapore has advertised jobs.",
    type: "Voluntary, international (economic) migration.",
    cards: [
      { id: "m1", text: "Nurses in Singapore earn several times more than at home", kind: "pull", weight: 3, why: "Higher wages at the destination pull workers abroad." },
      { id: "m2", text: "Nursing jobs at home are scarce and contracts are short", kind: "push", weight: 2, why: "Lack of secure work at home pushes him out." },
      { id: "m3", text: "He needs a work pass and his nursing qualification must be recognised", kind: "obstacle", weight: 2, why: "Visa and registration rules are classic intervening obstacles." },
      { id: "m4", text: "He could send money home to support his parents", kind: "pull", weight: 2, why: "The chance to send remittances is an attraction of working abroad." },
      { id: "m5", text: "He would have to leave his family behind", kind: "obstacle", weight: 2, why: "Personal ties at home hold people back — an obstacle to moving." },
      { id: "m6", text: "Singapore is safe and has modern hospitals", kind: "pull", weight: 1, why: "Safety and good working conditions attract migrants." },
      { id: "m7", text: "Typhoons often damage his home town", kind: "push", weight: 1, why: "Hazards at home push people away." },
    ],
  },
  {
    id: "sudan",
    label: "Sudan → Chad",
    story: "In 2023 fighting reached Amina's town in Darfur, Sudan. The border with Chad is a few days' walk away.",
    type: "Forced, international migration (she would become a refugee).",
    cards: [
      { id: "s1", text: "Armed groups are attacking homes in her town", kind: "push", weight: 3, why: "Conflict is a very strong push factor — it forces people out." },
      { id: "s2", text: "The market and clinic have been destroyed", kind: "push", weight: 3, why: "Loss of food and healthcare at home pushes people away." },
      { id: "s3", text: "Refugee camps in Chad offer shelter, water and food aid", kind: "pull", weight: 2, why: "Safety and aid at the destination pull refugees." },
      { id: "s4", text: "The journey is on foot through dangerous country", kind: "obstacle", weight: 2, why: "A dangerous journey is an obstacle between origin and destination." },
      { id: "s5", text: "Neighbours from her town have already reached the camps", kind: "pull", weight: 1, why: "Knowing people at the destination makes it more attractive." },
      { id: "s6", text: "She is caring for her elderly grandmother, who cannot walk far", kind: "obstacle", weight: 2, why: "Family responsibilities make moving harder." },
    ],
  },
];

const KIND_LABEL: Record<Kind, string> = { push: "Push", pull: "Pull", obstacle: "Obstacle" };

function SorterBoard({ sc }: { sc: Scenario }) {
  const [picks, setPicks] = useState<Record<string, Kind | undefined>>({});
  const [checked, setChecked] = useState(false);

  const done = sc.cards.filter((c) => picks[c.id]).length;
  const correct = sc.cards.filter((c) => picks[c.id] === c.kind).length;
  // Meter uses the learner's own sorting, so mis-sorting gives a misleading decision.
  const reasons = sc.cards.reduce((s, c) => (picks[c.id] === "push" || picks[c.id] === "pull" ? s + c.weight : s), 0);
  const obstacles = sc.cards.reduce((s, c) => (picks[c.id] === "obstacle" ? s + c.weight : s), 0);
  const balance = reasons - obstacles;
  const verdict = done === 0 ? "Sort some cards first" : balance >= 4 ? "Likely to move" : balance >= 1 ? "Leaning towards moving" : balance === 0 ? "Finely balanced" : "Likely to stay (for now)";
  const maxSide = sc.cards.reduce((s, c) => s + c.weight, 0);
  const W = 320;
  const mid = W / 2;
  const scale = (W / 2 - 10) / maxSide;

  return (
    <div className="space-y-3">
      <p className="text-sm text-ink">{sc.story}</p>
      <ul className="space-y-2">
        {sc.cards.map((c) => {
          const pick = picks[c.id];
          const ok = checked && pick === c.kind;
          const bad = checked && pick !== undefined && pick !== c.kind;
          return (
            <li key={c.id} className={`rounded-xl border p-3 ${ok ? "border-good bg-good-soft" : bad ? "border-bad bg-bad-soft" : "border-line bg-surface"}`}>
              <div className="text-sm font-semibold text-ink">{c.text}</div>
              <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label={`Sort: ${c.text}`}>
                {(["push", "pull", "obstacle"] as Kind[]).map((k) => (
                  <button
                    key={k}
                    type="button"
                    role="radio"
                    aria-checked={pick === k}
                    onClick={() => {
                      setPicks((p) => ({ ...p, [c.id]: k }));
                      setChecked(false);
                    }}
                    className={`min-h-[40px] rounded-lg border px-3 text-sm font-bold transition ${pick === k ? "border-brand bg-brand text-brand-ink" : "border-line bg-surface-2 text-ink-2 hover:text-ink"}`}
                  >
                    {KIND_LABEL[k]}
                  </button>
                ))}
              </div>
              {checked && pick !== undefined ? (
                <p className={`mt-2 text-xs ${ok ? "text-good" : "text-bad"}`}>
                  {ok ? "✓ " : `✗ It's a ${KIND_LABEL[c.kind].toLowerCase()} factor. `}
                  {c.why}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className="btn btn-primary min-h-[40px]" onClick={() => setChecked(true)} disabled={done === 0}>
          Check my sorting
        </button>
        <button
          type="button"
          className="btn btn-secondary min-h-[40px]"
          onClick={() => {
            setPicks({});
            setChecked(false);
          }}
        >
          Reset
        </button>
        {checked ? (
          <span className={`text-sm font-bold ${correct === sc.cards.length ? "text-good" : "text-ink"}`}>
            {correct} / {sc.cards.length} correct{done < sc.cards.length ? ` (${sc.cards.length - done} not sorted)` : ""}
          </span>
        ) : null}
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Readout label="Reasons to move" value={reasons} tone="good" />
        <Readout label="Obstacles" value={obstacles} tone="bad" />
        <Readout label="Decision" value={<span className="text-base">{verdict}</span>} tone="ink" />
      </div>

      <svg viewBox={`0 0 ${W} 60`} className="h-auto w-full" role="img" aria-label={`Decision meter: reasons to move score ${reasons}, obstacles score ${obstacles}. ${verdict}.`}>
        <rect x={mid - obstacles * scale} y={14} width={obstacles * scale} height={20} className="fill-bad" rx={3} />
        <rect x={mid} y={14} width={reasons * scale} height={20} className="fill-good" rx={3} />
        <line x1={mid} x2={mid} y1={6} y2={42} className="stroke-ink" strokeWidth={2} />
        <text x={8} y={54} fontSize={11} className="fill-ink-2">← stay</text>
        <text x={W - 8} y={54} fontSize={11} textAnchor="end" className="fill-ink-2">move →</text>
      </svg>

      {checked && correct === sc.cards.length ? (
        <p className="rounded-xl bg-good-soft p-3 text-sm text-ink">
          <b>All sorted!</b> {sc.type}
        </p>
      ) : null}
    </div>
  );
}

function PushPullWidget() {
  const [sid, setSid] = useState(SCENARIOS[0].id);
  const sc = SCENARIOS.find((s) => s.id === sid) ?? SCENARIOS[0];
  return (
    <WidgetFrame
      title="Push, pull or obstacle?"
      tryThis={[
        "Sort every card, then check. Which cards were hardest to decide — and why?",
        "Deliberately label an **obstacle** as a pull factor. What happens to the decision meter? Why is mis-sorting dangerous in an exam answer?",
        "Compare **Sudan → Chad** with **Philippines → Singapore**. Which kind of factor dominates in forced migration?",
      ]}
      caption={
        <>
          <p>
            <b>Push factors</b> are problems at the place people leave (origin). <b>Pull factors</b> are attractions of the destination.{" "}
            <b>Intervening obstacles</b> sit in between — cost, distance, visas, language, family ties — and can stop a move even when the reasons to go are strong.
          </p>
          <p className="mt-2">
            This follows Everett Lee&apos;s push–pull model (1966). The meter adds up the strength of each card <i>as you sorted it</i>: reasons to move on one side, obstacles on the other.
            In <b>forced</b> migration the push factors are so strong that people move even when the obstacles are huge.
          </p>
          <p className="mt-2 text-ink-2">Simplified model: real decisions also depend on personal feelings, information and luck — the weights here are just a guide.</p>
        </>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Choose a migrant"
          value={sid}
          onChange={setSid}
          options={SCENARIOS.map((s) => ({ value: s.id, label: s.label }))}
        />
        <SorterBoard key={sc.id} sc={sc} />
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "population-change-balance",
    title: "Population change balance",
    blurb: "Set births, deaths, immigration and emigration — watch the balance tip and the population grow or shrink over 50 years.",
    Component: BalanceWidget,
  },
  {
    id: "push-pull-sorter",
    title: "Push, pull or obstacle?",
    blurb: "Sort a migrant's reasons into push factors, pull factors and obstacles, then see whether they are likely to move.",
    Component: PushPullWidget,
  },
];
