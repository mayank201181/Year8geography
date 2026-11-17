"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Frame, Slider, Choice, Stat } from "./kit";

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

/** Arrow (line + triangular head) drawn without <marker> ids so many widgets can share a page. */
function Arrow({ x1, y1, x2, y2, w, color }: { x1: number; y1: number; x2: number; y2: number; w: number; color: string }) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  const head = 5 + w * 1.4;
  const bx = x2 - ux * head, by = y2 - uy * head;
  const px = -uy * (head * 0.6), py = ux * (head * 0.6);
  return (
    <g>
      <line x1={x1} y1={y1} x2={bx} y2={by} stroke={color} strokeWidth={w} strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${bx + px},${by + py} ${bx - px},${by - py}`} fill={color} />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Headland Time-Lapse: crack → cave → arch → stack → stump         */
/* ------------------------------------------------------------------ */

type Rock = "chalk" | "limestone" | "granite";
// rate = stages of the sequence per 1,000 years (illustrative); r0 = cliff retreat in m/yr on a bare cliff.
const ROCKS: Record<Rock, { name: string; rate: number; r0: number; fill: string; note: string }> = {
  chalk: { name: "Chalk (Old Harry)", rate: 1.0, r0: 0.25, fill: "#f5f5f4", note: "Chalk is fairly soft and full of joints, so waves find weaknesses quickly." },
  limestone: { name: "Limestone (Durdle Door)", rate: 0.7, r0: 0.1, fill: "#e7e5e4", note: "Portland limestone is harder than chalk, so each stage takes longer." },
  granite: { name: "Granite (Land's End)", rate: 0.12, r0: 0.005, fill: "#cbd5e1", note: "Granite is very resistant: erosion is measured in millimetres a year." },
};
type Stage = "none" | "crack" | "cave" | "arch" | "stack" | "stump";
const stageOf = (p: number): Stage => (p <= 0 ? "none" : p < 1 ? "crack" : p < 3 ? "cave" : p < 4.6 ? "arch" : p < 7.5 ? "stack" : "stump");
const PROCESS: Record<Stage, string> = {
  none: "The headland is solid rock, but it hides joints (vertical cracks) that are weaker than the rock around them.",
  crack: "Hydraulic action: each wave forces water into the joint and squeezes the air inside; when it pulls back the air expands and blasts the crack wider. Abrasion (pebbles thrown by waves) scrapes it too.",
  cave: "Hydraulic action and abrasion keep attacking the weakness at the waterline, hollowing the crack out into a cave.",
  arch: "The cave has broken right through the headland: an arch. Waves keep widening its base, while weathering (freeze–thaw, salt crystals, chemical weathering of chalk/limestone) weakens the roof from above.",
  stack: "The arch roof became too heavy and unsupported and collapsed under gravity, leaving an isolated stack. Now waves cut a wave-cut notch around its base.",
  stump: "The stack was undercut until it collapsed too, leaving a low stump that is covered at high tide (like Old Harry's Wife, which fell in 1896).",
};

const TOP = 45, SEA = 132, HT = 124, LT = 140, TIP0 = 334;
const JOINTS = [262, 182, 102];
const HALF = 26; // half-width of a fully grown arch

export function HeadlandTimeLapse() {
  const [rock, setRock] = useState<Rock>("chalk");
  const [years, setYears] = useState(3000);
  const R = ROCKS[rock];
  const p = (years / 1000) * R.rate;

  const features = useMemo(
    () => JOINTS.map((jx, k) => ({ jx, k, pk: p - 5.5 * k, stage: stageOf(p - 5.5 * k) })),
    [p],
  );
  // The headland ends at the inner side of the newest arch that has collapsed.
  let tip = TIP0;
  const prevTip: number[] = [];
  features.forEach((f) => { prevTip.push(tip); if (f.pk >= 4.6) tip = f.jx - HALF; });
  const lead = features[0];
  const newest = [...features].reverse().find((f) => f.stage !== "none" && f.k > 0);

  // Cliff retreat with a wave-cut platform: retreat slows as the platform widens (negative feedback).
  const W = 400;
  const retreat = W * (1 - Math.exp((-R.r0 * years) / W));
  const rateNow = R.r0 * Math.exp((-R.r0 * years) / W) * 100; // cm/yr
  const C0 = 110;
  const c = C0 + retreat * 0.55;
  const f = years === 0 ? 0 : (retreat / 12) % 1; // where we are in one notch → collapse cycle
  const notch = f * 16;
  const rubble = years > 0 && retreat > 1 && f < 0.3;

  return (
    <Frame
      title="Headland Time-Lapse: from crack to stump"
      caption={
        <>
          <p><b>Notice:</b> {PROCESS[lead.stage]}</p>
          {newest ? (
            <p className="mt-1">Meanwhile the cycle has started again further along the headland: a new {newest.stage} is forming at the next joint. Headlands are eaten back stage by stage, leaving a trail of stacks and stumps.</p>
          ) : null}
          <p className="mt-1">{R.note} The cliff below has retreated about <b>{Math.round(retreat)} m</b>, leaving a wave-cut platform. Retreat is now about {rateNow < 1 ? rateNow.toFixed(2) : rateNow.toFixed(0)} cm a year{years > 2000 && rock !== "granite" ? ": slower than at the start, because waves break and lose energy crossing the wider platform." : "."}</p>
          <p className="mt-1 text-xs text-slate-500">Simplified model: real timings vary hugely with joints, storms and wave energy, and two caves often meet from opposite sides of the headland. The order of the stages, the processes, and the effect of rock hardness are what matter.</p>
        </>
      }
    >
      <div className="mb-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        <b>Predict first:</b> after 10,000 years, which rock will have produced a stack: chalk, limestone or granite? Make your guess, then drag the time slider for each rock.
      </div>
      <Choice label="Rock type of the headland" value={rock} onChange={setRock}
        options={(Object.keys(ROCKS) as Rock[]).map((id) => ({ id, label: ROCKS[id].name }))} />
      <div className="mt-3">
        <Slider label="Time" min={0} max={15000} step={250} value={years} onChange={setYears} suffix=" years" color="#0369a1" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Stage" value={lead.stage === "none" ? "solid" : lead.stage} tone="indigo" />
        <Stat label="Years" value={years.toLocaleString()} tone="sky" />
        <Stat label="Cliff retreat" value={`${Math.round(retreat)} m`} tone="rose" />
        <Stat label="Retreat now" value={`${rateNow < 1 ? rateNow.toFixed(1) : Math.round(rateNow)} cm/yr`} tone="amber" />
      </div>

      {/* Side view of the headland, seen from the sea */}
      <svg viewBox="0 0 360 160" className="mt-3 w-full" role="img"
        aria-label={`Side view of a ${R.name} headland after ${years} years: the first joint has become a ${lead.stage}`}>
        <rect x="0" y="0" width="360" height="160" fill="#e0f2fe" />
        <text x="6" y="16" fontSize="12" fontWeight="bold" fill="#0c4a6e">Headland, seen side-on from the sea</text>
        <path d={`M0,${TOP} L${tip},${TOP} L${tip + 5},160 L0,160 Z`} fill={R.fill} stroke="#57534e" />
        {features.map((ft) => {
          const { jx, pk, stage, k } = ft;
          if (stage === "none") return null;
          const els: ReactNode[] = [];
          if (stage === "crack") {
            els.push(<line key="j" x1={jx} y1={TOP + 3} x2={jx} y2={SEA} stroke="#334155" strokeWidth={0.8 + 1.6 * pk} />);
            els.push(<ellipse key="n" cx={jx} cy={SEA} rx={3 + 4 * pk} ry={3 + 6 * pk} fill="#1e293b" />);
          } else if (stage === "cave") {
            const q = pk - 1;
            els.push(<line key="j" x1={jx} y1={TOP + 3} x2={jx} y2={SEA - 20} stroke="#334155" strokeWidth={2.4} />);
            els.push(<ellipse key="c" cx={jx} cy={SEA + 4} rx={7 + 5.5 * q} ry={9 + 14.5 * q} fill="#1e293b" />);
          } else if (stage === "arch") {
            const q = (pk - 3) / 1.6;
            const ry = 38 + 30 * q;
            els.push(<ellipse key="a" cx={jx} cy={SEA + 4} rx={18 + 8 * q} ry={ry} fill="#e0f2fe" stroke="#57534e" />);
            if (q > 0.3) {
              const roofY = SEA + 4 - ry;
              els.push(<path key="w" d={`M${jx - 8},${TOP + 2} l3,${(roofY - TOP) * 0.5} M${jx + 5},${TOP + 2} l-2,${(roofY - TOP) * 0.6}`} stroke="#78350f" strokeWidth="1.3" fill="none" />);
            }
          } else {
            const a = jx + HALF, b = prevTip[k];
            const dead = clamp((pk - 4.6) / 1.2, 0, 1);
            for (let i = 0; i < 5; i++) {
              if (dead < 1) els.push(<circle key={`r${i}`} cx={jx - 18 + i * 9} cy={SEA + 2 - (i % 2) * 3} r={4 - (i % 2)} fill="#78716c" opacity={1 - dead} />);
            }
            if (stage === "stack") {
              const n = 3 + (pk - 4.6) * 3;
              const top = TOP + (pk - 4.6) * 3;
              els.push(<path key="s" d={`M${a},${top} L${b},${top} L${b},${SEA - 14} L${b - n},${SEA - 4} L${b},${SEA + 6} L${b},160 L${a},160 L${a},${SEA + 6} L${a + n},${SEA - 4} L${a},${SEA - 14} Z`} fill={R.fill} stroke="#57534e" />);
            } else {
              const top = HT + 5 + clamp((pk - 7.5) * 2, 0, 6);
              els.push(<path key="st" d={`M${a + 4},${top} L${b - 4},${top} L${b - 2},160 L${a + 2},160 Z`} fill={R.fill} stroke="#57534e" />);
            }
          }
          const labelX = stage === "stack" || stage === "stump" ? (jx + HALF + prevTip[k]) / 2 : jx;
          const labelY = stage === "stump" ? HT - 6 : TOP - 6;
          els.push(<text key="t" x={labelX} y={labelY} fontSize="11" fontWeight="bold" textAnchor="middle" fill="#7c2d12">{stage}</text>);
          return <g key={jx}>{els}</g>;
        })}
        <rect x="0" y={SEA} width="360" height={160 - SEA} fill="#38bdf8" opacity="0.7" />
        <line x1="0" y1={HT} x2="360" y2={HT} stroke="#0369a1" strokeDasharray="5 3" />
        <line x1="0" y1={LT} x2="360" y2={LT} stroke="#0369a1" strokeDasharray="5 3" />
        <text x="4" y={HT - 3} fontSize="11" fill="#0369a1">high tide</text>
        <text x="4" y={LT + 12} fontSize="11" fill="#0c4a6e">low tide</text>
        <text x="40" y={TOP + 20} fontSize="11" fill="#44403c">mainland</text>
      </svg>

      {/* Cross-section through the cliff: notch, overhang, platform */}
      <svg viewBox="0 0 360 140" className="mt-2 w-full" role="img"
        aria-label={`Cross-section of the cliff: it has retreated ${Math.round(retreat)} metres, leaving a wave-cut platform`}>
        <rect x="0" y="0" width="360" height="140" fill="#f8fafc" />
        <text x="6" y="16" fontSize="12" fontWeight="bold" fill="#0c4a6e">Meanwhile: cross-section through the cliff</text>
        <path d={`M360,34 L${c},34 L${c},84 Q${c + notch * 1.9},93 ${c},101 L${C0},108 L0,124 L0,140 L360,140 Z`} fill={R.fill} stroke="#57534e" />
        <path d={`M0,98 L${c},98 L${c},101 L${C0},108 L0,124 Z`} fill="#38bdf8" opacity="0.55" />
        {rubble ? [0, 1, 2].map((i) => <circle key={i} cx={c - 5 - i * 6} cy={99 - (i % 2) * 2} r={3 - (i % 2)} fill="#78716c" />) : null}
        <line x1={C0} y1="30" x2={C0} y2="108" stroke="#57534e" strokeDasharray="4 3" />
        <text x={C0} y="28" fontSize="11" textAnchor="middle" fill="#57534e">original cliff</text>
        <line x1="0" y1="92" x2="360" y2="92" stroke="#0369a1" strokeDasharray="5 3" />
        <line x1="0" y1="112" x2="120" y2="112" stroke="#0369a1" strokeDasharray="5 3" />
        <text x="4" y="89" fontSize="11" fill="#0369a1">high tide</text>
        <text x="4" y="124" fontSize="11" fill="#0c4a6e">low tide</text>
        {notch > 4 ? <text x={c + 8} y="78" fontSize="11" fill="#7c2d12">{notch > 10 ? "overhang ↓" : "notch"}</text> : null}
        {retreat > 40 ? (
          <>
            <Arrow x1={C0 + 4} y1={116} x2={c - 4} y2={116} w={1.2} color="#7c2d12" />
            <Arrow x1={c - 4} y1={116} x2={C0 + 4} y2={116} w={1.2} color="#7c2d12" />
            <text x={(C0 + c) / 2} y="132" fontSize="11" textAnchor="middle" fill="#7c2d12">wave-cut platform ≈ {Math.round(retreat)} m</text>
          </>
        ) : null}
      </svg>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Spit Builder: longshore drift past a bend in the coast            */
/* ------------------------------------------------------------------ */

type River = "weak" | "moderate" | "strong";
const CHANNEL: Record<River, number> = { weak: 30, moderate: 55, strong: 90 }; // px of channel kept open
const BANK_W = 150, BANK_E = 330; // estuary banks (180 px ≈ 4 km)
const M_PER_PX = 4000 / (BANK_E - BANK_W);
const Y = 134; // line of the spit

export function SpitBuilder() {
  const [drift, setDrift] = useState(70);
  const [river, setRiver] = useState<River>("moderate");
  const [windChange, setWindChange] = useState(true);
  const [years, setYears] = useState(300);

  const rate = (0.45 * drift) / 100; // px per year (simplified)
  const Lmax = BANK_E - BANK_W - CHANNEL[river];
  const L = Math.min(Lmax, rate * years);
  const tipX = BANK_W + L;
  const full = L >= Lmax - 0.5;
  const tShelter = rate > 0 ? 40 / rate : Infinity;
  const m = clamp((years - tShelter) / 400, 0, 1) * (windChange ? 1 : 0.65);
  const hook = windChange ? Math.min(26, 6 + L * 0.15) : Math.min(5, L * 0.1);

  const recurves = useMemo(() => {
    const xs: number[] = [];
    if (windChange) for (let x = BANK_W + 40; x < tipX - 20; x += 40) xs.push(x);
    return xs;
  }, [windChange, tipX]);

  const marshW = Math.max(0, L - 10) * 0.85 * m;
  const marshD = 12 + 40 * m;
  const marshLabel = m <= 0 ? (L > 40 ? "mudflats starting" : "none") : m < 0.4 ? "young marsh" : m < 0.8 ? "growing marsh" : "mature marsh";
  const channelKm = ((BANK_E - tipX) * M_PER_PX) / 1000;

  let notice: string;
  if (drift < 10) notice = "Almost no sediment is moving along the coast, so nothing can build up. Spits need a big supply: Spurn Head is fed by the Holderness cliffs, which erode about 2 m a year.";
  else if (L < 20) notice = "Longshore drift carries sand and shingle east along the beach. At the bend the coast turns inland, but the drift keeps going straight on, dropping sediment in the more sheltered water of the estuary mouth.";
  else if (!full) notice = `The spit is growing out across the estuary (about ${Math.round(rate * M_PER_PX)} m a year in this model). Stronger drift means more sediment, so it grows faster.`;
  else notice = `The spit has stopped growing: the ${river} river current scours its channel and carries sediment out to sea, so the spit cannot close the estuary. ${river === "strong" ? "A strong river keeps a wide channel open." : "A stronger river would keep a wider channel open."}`;

  return (
    <Frame
      title="Spit Builder: longshore drift meets a bend in the coast"
      caption={
        <>
          <p><b>Notice:</b> {notice}</p>
          {L > 20 ? (
            <p className="mt-1">
              {windChange
                ? "A change in wind direction (a secondary wind) and waves bending (refracting) round the tip curve the end inwards: a recurved end. Each time the spit grows on, the old hook is left behind, so a row of old recurves records where the tip used to be (as at Hurst Castle Spit)."
                : "With only the prevailing wind, the spit grows almost straight; just a slight curl from waves refracting round the tip. Switch on the change in wind to see a hooked, recurved end."}
            </p>
          ) : null}
          {L > 40 ? <p className="mt-1">Behind the spit the water is calm and low-energy, so fine silt and mud settle out as mudflats. Salt-tolerant plants colonise them and trap more mud, building a salt marsh{windChange ? "" : " (smaller here, because a straight spit gives less shelter)"}.</p> : null}
          <p className="mt-1 text-xs text-slate-500">Simplified model of a spit like Hurst Castle Spit (Hampshire): sediment supply, growth rates and timings are illustrative, not measured.</p>
        </>
      }
    >
      <div className="mb-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        <b>Predict first:</b> if the river flow gets stronger, will the finished spit be longer or shorter? Set the time to 1,000 years and test your idea.
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Longshore drift (sediment supply)" min={0} max={100} step={5} value={drift} onChange={setDrift} suffix="%" color="#b45309" />
        <Slider label="Time" min={0} max={1000} step={25} value={years} onChange={setYears} suffix=" years" color="#0369a1" />
        <Choice label="River flow in the estuary" value={river} onChange={setRiver}
          options={[{ id: "weak", label: "Weak" }, { id: "moderate", label: "Moderate" }, { id: "strong", label: "Strong" }]} />
        <Choice label="Change in wind direction?" value={windChange ? "on" : "off"} onChange={(v) => setWindChange(v === "on")}
          options={[{ id: "off", label: "Prevailing wind only" }, { id: "on", label: "Secondary wind too" }]} />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Spit length" value={`${((L * M_PER_PX) / 1000).toFixed(1)} km`} tone="amber" />
        <Stat label="Channel open" value={`${channelKm.toFixed(1)} km`} tone="sky" />
        <Stat label="Salt marsh" value={marshLabel} tone="emerald" />
        <Stat label="Growing?" value={drift < 10 ? "no supply" : full ? "stopped" : "yes"} tone="indigo" />
      </div>

      <svg viewBox="0 0 360 250" className="mt-3 w-full" role="img"
        aria-label={`Plan view: a spit ${((L * M_PER_PX) / 1000).toFixed(1)} km long across a river estuary, ${windChange ? "with a recurved end" : "almost straight"}, salt marsh: ${marshLabel}`}>
        <rect x="0" y="0" width="360" height="250" fill="#bae6fd" />
        {/* Land */}
        <path d={`M0,0 H${BANK_W} V112 Q${BANK_W},130 132,130 H0 Z`} fill="#bbf7d0" stroke="#166534" />
        <path d={`M${BANK_E},0 H360 V152 H342 Q${BANK_E},152 ${BANK_E},140 Z`} fill="#bbf7d0" stroke="#166534" />
        <text x="12" y="60" fontSize="12" fontWeight="bold" fill="#14532d">LAND</text>
        <text x="190" y="20" fontSize="11" fill="#0c4a6e">river estuary</text>
        {/* River current */}
        <Arrow x1={BANK_E - CHANNEL[river] / 2} y1={40} x2={BANK_E - CHANNEL[river] / 2} y2={118} w={river === "strong" ? 4 : river === "moderate" ? 2.5 : 1.5} color="#0369a1" />
        <text x={BANK_E - 4} y="34" fontSize="11" textAnchor="end" fill="#0369a1">river</text>
        {/* Mudflats and salt marsh */}
        {L > 40 ? (
          <path d={`M${BANK_W},${Y - 4} L${BANK_W},${Y - 4 - marshD * 1.25} Q${BANK_W + (marshW + 14) * 0.6},${Y - 4 - marshD * 1.3} ${BANK_W + Math.max(20, marshW * 1.15 + 10)},${Y - 4} Z`} fill="#d6b98c" opacity="0.8" />
        ) : null}
        {m > 0 ? (
          <g>
            <path d={`M${BANK_W},${Y - 5} L${BANK_W},${Y - 5 - marshD} Q${BANK_W + marshW * 0.55},${Y - 5 - marshD * 1.05} ${BANK_W + marshW},${Y - 5} Z`} fill="#4ade80" stroke="#15803d" />
            <path d={`M${BANK_W + marshW * 0.5},${Y - 5} q-4,${-marshD * 0.4} ${-14 * m},${-marshD * 0.7} M${BANK_W + marshW * 0.5},${Y - 5 - marshD * 0.35} q6,-6 ${12 * m},${-marshD * 0.45}`} stroke="#0369a1" strokeWidth="1.2" fill="none" />
            {m > 0.3 ? <text x={BANK_W + 4} y={Y - 10 - marshD} fontSize="11" fill="#14532d">salt marsh</text> : null}
          </g>
        ) : null}
        {/* Beach and longshore drift */}
        <path d={`M0,${Y - 2} H122`} stroke="#fbbf24" strokeWidth="9" />
        {drift > 0 ? (
          <g opacity={0.35 + 0.65 * (drift / 100)}>
            <path d={`M8,152 ${[0, 1, 2, 3, 4, 5].map((i) => `L${22 + i * 16},140 L${22 + i * 16},152`).join(" ")}`} stroke="#0c4a6e" strokeWidth={1 + (2 * drift) / 100} fill="none" />
            <Arrow x1={104} y1={162} x2={140} y2={162} w={1 + (2 * drift) / 100} color="#b45309" />
            <text x="8" y="176" fontSize="11" fill="#78350f">longshore drift: swash up at an angle,</text>
            <text x="8" y="189" fontSize="11" fill="#78350f">backwash straight down</text>
          </g>
        ) : null}
        {/* Spit */}
        {L > 0 ? (
          <g>
            <path d={`M110,${Y} L${tipX},${Y} Q${tipX + 12},${Y} ${tipX + 10},${Y - hook}`} stroke="#fbbf24" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            {recurves.map((x) => (
              <path key={x} d={`M${x},${Y - 2} Q${x + 9},${Y - 3} ${x + 8},${Y - 14}`} stroke="#fbbf24" strokeWidth="5" fill="none" strokeLinecap="round" />
            ))}
            {L > 30 ? <text x={(BANK_W + tipX) / 2} y={Y + 20} fontSize="11" textAnchor="middle" fill="#78350f">spit</text> : null}
            {windChange && L > 40 ? <text x={tipX + 8} y={Y - hook - 6} fontSize="11" textAnchor="end" fill="#78350f">recurved end</text> : null}
          </g>
        ) : null}
        {/* Winds */}
        <Arrow x1={20} y1={238} x2={58} y2={204} w={2.5} color="#475569" />
        <text x="62" y="214" fontSize="11" fill="#334155">prevailing wind (SW)</text>
        {windChange ? (
          <>
            <Arrow x1={348} y1={238} x2={312} y2={206} w={2} color="#7c3aed" />
            <text x="306" y="244" fontSize="11" textAnchor="end" fill="#6d28d9">secondary wind</text>
          </>
        ) : null}
        <text x="200" y="232" fontSize="12" fontWeight="bold" fill="#0c4a6e">SEA</text>
        {/* North arrow and scale */}
        <Arrow x1={348} y1={190} x2={348} y2={166} w={1.5} color="#0c4a6e" />
        <text x="348" y="202" fontSize="11" textAnchor="middle" fill="#0c4a6e">N</text>
        <line x1="170" y1="200" x2={170 + 1000 / M_PER_PX} y2="200" stroke="#0c4a6e" strokeWidth="2" />
        <text x="170" y="195" fontSize="11" fill="#0c4a6e">1 km</text>
      </svg>
    </Frame>
  );
}
