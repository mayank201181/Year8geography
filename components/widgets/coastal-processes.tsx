"use client";

import { useMemo, useState } from "react";
import { Frame, Slider, Choice, Stat } from "./kit";

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

/** Arrow (line + triangular head) drawn without <marker> ids so many widgets can share a page. */
function Arrow({ x1, y1, x2, y2, w, color }: { x1: number; y1: number; x2: number; y2: number; w: number; color: string }) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  const head = 6 + w * 1.4;
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
/* 1. Wave Maker: wind speed, fetch, duration -> wave height & energy */
/* ------------------------------------------------------------------ */

type WavePreset = "calm" | "monsoon" | "cornwall" | "custom";
const WAVE_PRESETS: Record<Exclude<WavePreset, "custom">, { name: string; wind: number; fetch: number; hours: number }> = {
  calm: { name: "Calm day, Singapore", wind: 15, fetch: 30, hours: 6 },
  monsoon: { name: "NE monsoon, East Coast", wind: 25, fetch: 60, hours: 24 },
  cornwall: { name: "Atlantic storm, Cornwall", wind: 75, fetch: 2000, hours: 36 },
};

// Fetch slider runs on a log scale: 5 km -> 3,000 km.
const F_MIN = 5, F_MAX = 3000;
const fetchFromPos = (p: number) => Math.round(F_MIN * Math.pow(F_MAX / F_MIN, p / 100));
const posFromFetch = (f: number) => Math.round((100 * Math.log(f / F_MIN)) / Math.log(F_MAX / F_MIN));

/**
 * Simplified JONSWAP wave-forecasting formulas (deep water, significant wave height):
 *  fetch-limited   g·H/U² = 0.0016·(g·F/U²)^0.5
 *  duration-limited: the wind only "uses" the fetch it can cross in the time it has blown,
 *                  g·t/U = 68.8·(g·F/U²)^(2/3)
 *  fully developed g·H/U² ≤ 0.243 (more fetch or time makes no difference)
 */
function forecast(windKmh: number, fetchKm: number, hours: number) {
  const g = 9.81;
  const U = windKmh / 3.6;
  const F = fetchKm * 1000;
  const t = hours * 3600;
  const Fdur = ((U * U) / g) * Math.pow((g * t) / U / 68.8, 1.5);
  const Feff = Math.min(F, Fdur);
  let hStar = 0.0016 * Math.sqrt((g * Feff) / (U * U));
  let limit: "fetch" | "duration" | "wind" = Fdur < F ? "duration" : "fetch";
  if (hStar >= 0.243) { hStar = 0.243; limit = "wind"; }
  const H = (hStar * U * U) / g;
  return { H, limit, FdurKm: Fdur / 1000 };
}

export function WaveMaker() {
  const [preset, setPreset] = useState<WavePreset>("monsoon");
  const [wind, setWind] = useState(25);
  const [fetchKm, setFetchKm] = useState(60);
  const [hours, setHours] = useState(24);
  const [reveal, setReveal] = useState(false);

  const pick = (id: WavePreset) => {
    setPreset(id);
    if (id !== "custom") {
      const p = WAVE_PRESETS[id];
      setWind(p.wind); setFetchKm(p.fetch); setHours(p.hours);
    }
  };

  const { H, limit, FdurKm } = useMemo(() => forecast(wind, fetchKm, hours), [wind, fetchKm, hours]);
  const energyKJ = (1025 * 9.81 * H * H) / 8 / 1000; // kJ per m² of sea surface
  const vsOneMetre = H * H; // energy relative to a 1 m wave
  const wpm = clamp(Math.round(5.5 + 2.2 * H), 6, 14); // textbook-style link, not physics
  const d = clamp((H - 0.8) / 1.2, 0, 1); // 0 = constructive, 1 = destructive
  const type = H < 1 ? "Constructive" : H < 1.8 ? "In-between" : "Destructive";
  const swashW = 8 - 5.5 * d, backW = 2.5 + 5.5 * d;

  // Relative strength (0..1) of each erosion process (qualitative, simplified).
  const s = clamp(H / 4, 0, 1);
  const processes = [
    { name: "Hydraulic action", v: Math.pow(s, 1.4), color: "#2563eb", note: "force of water + air squeezed into cracks" },
    { name: "Abrasion", v: H < 0.3 ? 0.05 : clamp(0.1 + 0.95 * s, 0, 1), color: "#d97706", note: "pebbles hurled at the cliff" },
    { name: "Attrition", v: 0.15 + 0.6 * s, color: "#78716c", note: "pebbles knock each other smaller and rounder" },
    { name: "Solution", v: 0.3, color: "#059669", note: "acids dissolve chalk/limestone (set by rock type, not wave size)" },
  ];
  const top = [...processes].sort((a, b) => b.v - a.v)[0];

  // SVG geometry: wave train (top) and beach cross-section (bottom).
  const amp = clamp(4 + 13 * Math.sqrt(H), 5, 40);
  const lambda = 170 - 80 * d;
  const wavePath = useMemo(() => {
    const pts: string[] = [];
    for (let x = 0; x <= 360; x += 3) {
      const ph = (2 * Math.PI * x) / lambda;
      // Sharpened crests / flat troughs (more so for steep waves), like real wind waves.
      const c = Math.cos(ph);
      const yv = -amp * (c + 0.35 * d * (c * c - 0.5));
      pts.push(`${x === 0 ? "M" : "L"}${x},${(66 + yv).toFixed(1)}`);
    }
    return pts.join(" ") + " L360,118 L0,118 Z";
  }, [amp, lambda, d]);
  const crestX = lambda; // a crest sits at x = lambda
  const crestY = 66 - amp * (1 + 0.35 * d * 0.5);
  const troughY = 66 + amp * (1 - 0.35 * d * 0.5);

  const S0 = { x: 140, y: 196 }, S1 = { x: 352, y: 132 };
  const along = (t: number, off: number) => {
    const ux = S1.x - S0.x, uy = S1.y - S0.y, L = Math.hypot(ux, uy);
    return { x: S0.x + ux * t + (uy / L) * off, y: S0.y + uy * t - (ux / L) * off };
  };
  const sw0 = along(0.12, 12), sw1 = along(0.72, 12);
  const bw0 = along(0.68, 30), bw1 = along(0.08, 30);
  const swL = along(0.5, -14), bwL = along(0.45, 42);
  const waterX = S0.x + ((S0.y - 175) / (S0.y - S1.y)) * (S1.x - S0.x);

  const limitText =
    limit === "fetch"
      ? `Fetch is the limit here: the wind runs out of open water. Lengthen the fetch and the waves grow.`
      : limit === "duration"
        ? `Duration is the limit here: in ${hours} h the wind has only had time to build waves over about ${Math.round(FdurKm)} km of sea, so extra fetch makes no difference. Let it blow for longer.`
        : `The sea is "fully developed": waves are as big as this wind speed can make them, so more fetch or time adds nothing. Only a stronger wind makes bigger waves.`;

  let notice: string;
  if (type === "Constructive") notice = `Small, gentle waves (about ${wpm} a minute). The swash is stronger than the backwash, and water soaks into the beach before the next wave, so sand and shingle are left behind: these waves BUILD the beach. Erosion is weak.`;
  else if (type === "In-between") notice = `Medium waves: swash and backwash are fairly evenly matched, so the beach is neither built up much nor stripped much. A few more hours of stronger wind would tip them towards destructive.`;
  else notice = `Tall, steep, frequent waves (about ${wpm} a minute). Each strong backwash is met by the next breaking wave, so sand is dragged out to sea: these waves ERODE the beach. ${top.name} dominates, and the wave carries ${vsOneMetre.toFixed(0)}× the energy of a 1 m wave.`;

  return (
    <Frame
      title="Wave Maker: wind, fetch and time build waves"
      caption={
        <>
          <p><b>Notice:</b> {notice}</p>
          <p className="mt-1">{limitText}</p>
          <p className="mt-1 text-xs text-slate-500">Simplified model: height is the &quot;significant wave height&quot; in deep, open water from the JONSWAP forecasting formulas. Waves shrink or break as they reach shallow water, and real coasts also get swell from distant storms. Waves per minute and the erosion bars follow the textbook pattern, not exact physics. Energy = ρgH²/8.</p>
        </>
      }
    >
      <div className="mb-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        <b>Predict first:</b> the NE monsoon blows over Singapore&apos;s east coast for days. Why are its waves still far smaller than Cornwall&apos;s storm waves?{" "}
        <button type="button" onClick={() => setReveal(!reveal)} className="ml-1 rounded-full bg-amber-200 px-2 py-0.5 text-xs font-bold">
          {reveal ? "Hide" : "Reveal"}
        </button>
        {reveal ? <span className="mt-1 block">Mostly fetch (plus a weaker wind). Singapore is sheltered by Malaysia, Sumatra and the Riau Islands, so the wind crosses only tens of km of open sea. Try the monsoon preset, then drag fetch up to 2,000 km and watch the height jump.</span> : null}
      </div>

      <Choice
        label="Preset (or move the sliders)"
        value={preset}
        onChange={pick}
        options={[
          ...(Object.keys(WAVE_PRESETS) as Exclude<WavePreset, "custom">[]).map((id) => ({ id, label: WAVE_PRESETS[id].name })),
          { id: "custom" as WavePreset, label: "Custom" },
        ]}
      />

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <Slider label="Wind speed" min={5} max={100} value={wind} suffix=" km/h" onChange={(n) => { setWind(n); setPreset("custom"); }} color="#0284c7" />
        <label className="block">
          <span className="flex items-center justify-between gap-2 text-sm font-medium text-slate-700">
            <span>Fetch</span>
            <span className="font-bold tabular-nums" style={{ color: "#4f46e5" }}>{fetchKm.toLocaleString()} km</span>
          </span>
          <input type="range" min={0} max={100} value={posFromFetch(fetchKm)} aria-label="Fetch in kilometres"
            onChange={(e) => { setFetchKm(fetchFromPos(+e.target.value)); setPreset("custom"); }} className="mt-1 w-full" style={{ accentColor: "#4f46e5" }} />
        </label>
        <Slider label="Wind duration" min={1} max={48} value={hours} suffix=" h" onChange={(n) => { setHours(n); setPreset("custom"); }} color="#0d9488" />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Wave height" value={`${H < 1 ? H.toFixed(2) : H.toFixed(1)} m`} tone="sky" />
        <Stat label="Energy per m²" value={`${energyKJ < 10 ? energyKJ.toFixed(1) : Math.round(energyKJ)} kJ`} tone="amber" />
        <Stat label="Waves per min" value={`≈ ${wpm}`} tone="indigo" />
        <Stat label="Wave type" value={type} tone={type === "Constructive" ? "emerald" : type === "Destructive" ? "rose" : "amber"} />
      </div>

      <svg viewBox="0 0 360 215" className="mt-3 w-full" role="img"
        aria-label={`Wave profile ${H.toFixed(1)} metres high, ${type.toLowerCase()} wave; beach cross-section with swash ${swashW > backW ? "stronger" : "weaker"} than backwash`}>
        <rect x="0" y="0" width="360" height="120" fill="#f0f9ff" />
        <path d={wavePath} fill="#7dd3fc" stroke="#0369a1" strokeWidth="2" />
        <line x1={crestX + 14} x2={crestX + 14} y1={crestY} y2={troughY} stroke="#0f172a" strokeWidth="1.5" />
        <line x1={crestX + 8} x2={crestX + 20} y1={crestY} y2={crestY} stroke="#0f172a" />
        <line x1={crestX + 8} x2={crestX + 20} y1={troughY} y2={troughY} stroke="#0f172a" />
        <text x={crestX + 24} y={(crestY + troughY) / 2 + 4} fontSize="12" fontWeight="bold" fill="#0f172a">H = {H < 1 ? H.toFixed(2) : H.toFixed(1)} m</text>
        <text x="6" y="14" fontSize="11" fill="#0369a1">Out at sea</text>
        <text x="352" y="14" fontSize="11" fill="#0369a1" textAnchor="end">energy ≈ {vsOneMetre < 10 ? vsOneMetre.toFixed(1) : Math.round(vsOneMetre)}× a 1 m wave</text>

        {/* Beach cross-section */}
        <rect x="0" y="120" width="360" height="95" fill="#ffffff" />
        <polygon points={`0,175 ${waterX.toFixed(1)},175 ${S0.x},${S0.y} 0,206`} fill="#bae6fd" />
        <polygon points={`0,206 ${S0.x},${S0.y} ${S1.x},${S1.y} 360,${S1.y} 360,215 0,215`} fill="#fcd34d" stroke="#b45309" />
        <Arrow x1={sw0.x} y1={sw0.y} x2={sw1.x} y2={sw1.y} w={swashW} color="#0284c7" />
        <Arrow x1={bw0.x} y1={bw0.y} x2={bw1.x} y2={bw1.y} w={backW} color="#e11d48" />
        <text x={swL.x} y={swL.y} fontSize="11" fontWeight="bold" fill="#0369a1" textAnchor="middle">swash ↗</text>
        <text x={bwL.x} y={bwL.y} fontSize="11" fontWeight="bold" fill="#be123c" textAnchor="middle">↙ backwash</text>
        <text x="6" y="136" fontSize="11" fill="#334155">At the beach:</text>
        <text x="6" y="150" fontSize="11" fill="#334155">{swashW > backW + 1 ? "sand pushed UP the beach" : backW > swashW + 1 ? "sand dragged OUT to sea" : "little net change"}</text>
        <text x="6" y="194" fontSize="11" fill="#0c4a6e">Arrow thickness = strength</text>
      </svg>

      <div className="mt-2 space-y-1.5">
        <p className="text-sm font-semibold text-slate-700">Which erosion processes are working hardest?</p>
        {processes.map((p) => (
          <div key={p.name} className="text-xs text-slate-600">
            <div className="flex justify-between"><span className="font-semibold text-slate-700">{p.name}</span><span>{p.note}</span></div>
            <div className="mt-0.5 h-2.5 w-full rounded-full bg-slate-100" role="img" aria-label={`${p.name}: ${Math.round(p.v * 100)} percent relative strength`}>
              <div className="h-2.5 rounded-full" style={{ width: `${Math.round(p.v * 100)}%`, background: p.color }} />
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Longshore Drift Lab: wind angle + groynes -> pebble zig-zag      */
/* ------------------------------------------------------------------ */

const COMPASS = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
const GROYNES = [120, 240];
const SHORE_Y = 112; // shoreline (sea is below, i.e. to the south)
const SWASH = 52; // swash run in px (= 10 m)
const M_PER_PX = 10 / SWASH;
const N_WAVES = 5;

export function LongshoreDriftLab() {
  const [angle, setAngle] = useState(40); // + = wind from SW (towards NE), − = from SE
  const [groynes, setGroynes] = useState(false);
  const [reveal, setReveal] = useState(false);

  const rad = (angle * Math.PI) / 180;
  const sinA = Math.sin(rad), cosA = Math.cos(rad);
  const dir = Math.sign(angle);
  const fromBearing = 180 + angle;
  const fromName = COMPASS[Math.round(((fromBearing % 360) / 22.5)) % 16];

  const { segs, start, end, trapped } = useMemo(() => {
    const x0 = dir < 0 ? 330 : 30;
    let x = x0;
    let stuck = false;
    const out: { x1: number; y1: number; x2: number; y2: number; kind: "swash" | "back" }[] = [];
    for (let i = 0; i < N_WAVES; i++) {
      let nx = x + SWASH * sinA;
      let ny = SHORE_Y - SWASH * cosA;
      if (groynes && dir !== 0) {
        const wall = GROYNES.find((g) => (dir > 0 ? x < g - 3 && nx > g - 6 : x > g + 3 && nx < g + 6));
        if (wall !== undefined || stuck) {
          const lim = wall !== undefined ? wall - 6 * dir : x;
          const f = Math.abs(nx - x) > 0 ? Math.abs(lim - x) / Math.abs(nx - x) : 0;
          ny = SHORE_Y - SWASH * cosA * Math.max(f, 0.6);
          nx = lim;
          stuck = true;
        }
      }
      out.push({ x1: x, y1: SHORE_Y - 4, x2: nx, y2: ny, kind: "swash" });
      out.push({ x1: nx, y1: ny, x2: nx, y2: SHORE_Y - 4, kind: "back" });
      x = nx;
    }
    return { segs: out, start: x0, end: x, trapped: stuck };
  }, [sinA, cosA, dir, groynes]);

  // Shoreline: straight without groynes; with groynes sand piles up on the up-drift side of each.
  const shoreline = useMemo(() => {
    const k = groynes ? 20 * Math.abs(sinA) : 0;
    const bounds = [0, ...GROYNES, 360];
    const pts: string[] = [];
    for (let i = 0; i < bounds.length - 1; i++) {
      const a = bounds[i], b = bounds[i + 1];
      const aIsGroyne = GROYNES.includes(a), bIsGroyne = GROYNES.includes(b);
      // drift east (dir>0): up-drift end of compartment = a (starved if a groyne), down-drift end = b (piled up)
      const yA = dir > 0 ? (aIsGroyne ? SHORE_Y - k : SHORE_Y) : dir < 0 ? (aIsGroyne ? SHORE_Y + k : SHORE_Y) : SHORE_Y;
      const yB = dir > 0 ? (bIsGroyne ? SHORE_Y + k : SHORE_Y) : dir < 0 ? (bIsGroyne ? SHORE_Y - k : SHORE_Y) : SHORE_Y;
      pts.push(`${a + (i ? 3 : 0)},${yA.toFixed(1)}`, `${b - (bIsGroyne ? 3 : 0)},${yB.toFixed(1)}`);
    }
    return pts;
  }, [groynes, sinA, dir]);

  const moved = Math.abs(end - start) * M_PER_PX;
  const perWave = SWASH * Math.abs(sinA) * M_PER_PX;
  const driftName = dir > 0 ? "west → east" : dir < 0 ? "east → west" : "none";

  // Wind arrow & wave crests in the sea
  const wc = { x: 70, y: 180 };
  const crest = (cx: number, cy: number) => ({ x1: cx - 34 * cosA, y1: cy - 34 * sinA, x2: cx + 34 * cosA, y2: cy + 34 * sinA });

  let notice: string;
  if (dir === 0) notice = "The wind blows straight onshore, so the swash runs straight up the beach and the backwash runs straight back down. The pebble just goes up and down: there is no longshore drift.";
  else if (groynes && trapped) notice = `Swash carries the pebble ${driftName.split(" → ")[1]}wards at the angle of the wind, but the groyne blocks it. Sand piles up on the up-drift side of each groyne, making the beach wider there, while the down-drift side is starved and narrower. Groynes protect this beach, but beaches further ${driftName.split(" → ")[1]} get less sand.`;
  else notice = `Swash runs up the beach at the angle of the wind (from the ${fromName}), but backwash always runs straight back down the slope under gravity. Each wave shifts the pebble about ${perWave.toFixed(1)} m ${driftName.split(" → ")[1]}wards: after ${N_WAVES} waves it has moved ${moved.toFixed(0)} m. Thousands of waves a day move huge amounts of sediment along the coast.`;

  return (
    <Frame
      title="Longshore Drift Lab: follow one pebble"
      caption={
        <>
          <p><b>Notice:</b> {notice}</p>
          <p className="mt-1 text-xs text-slate-500">Simplified model (plan view): every swash runs 10 m in the wind&apos;s direction, every backwash runs straight down the beach. Real waves bend (refract) as they reach shallow water, so they meet the beach at a smaller angle than the wind, and drift is slower. Sediment pile-up is drawn to show the pattern, not to scale.</p>
        </>
      }
    >
      <div className="mb-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        <b>Predict first:</b> if the wind blows straight onto the beach (0°), which way will the pebble end up? And where will sand pile up against a groyne?{" "}
        <button type="button" onClick={() => setReveal(!reveal)} className="ml-1 rounded-full bg-amber-200 px-2 py-0.5 text-xs font-bold">
          {reveal ? "Hide" : "Reveal"}
        </button>
        {reveal ? <span className="mt-1 block">At 0° it goes nowhere along the coast, just up and down. Sand piles up on the up-drift side of a groyne, the side the drift is coming FROM. Test both with the slider and toggle.</span> : null}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Wind angle to the beach (− from SE, + from SW)" min={-60} max={60} step={5} value={angle} onChange={setAngle} suffix="°" color="#0284c7" />
        <Choice
          label="Groynes"
          value={groynes ? "on" : "off"}
          onChange={(v) => setGroynes(v === "on")}
          options={[{ id: "off", label: "No groynes" }, { id: "on", label: "Build groynes" }]}
        />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <Stat label="Wind from" value={angle === 0 ? "S" : fromName} tone="sky" />
        <Stat label="Net drift" value={dir === 0 ? "none" : dir > 0 ? "→ east" : "← west"} tone={dir === 0 ? "amber" : "indigo"} />
        <Stat label={trapped ? "Trapped after" : `Moved (${N_WAVES} waves)`} value={`${moved.toFixed(0)} m`} tone={trapped ? "rose" : "emerald"} />
      </div>

      <svg viewBox="0 0 360 230" className="mt-3 w-full" role="img"
        aria-label={`Plan view of a beach. Wind from the ${fromName}. Pebble zig-zags ${driftName}${groynes ? ", groynes trap sand on their up-drift side" : ""}.`}>
        <rect x="0" y="0" width="360" height="230" fill="#38bdf8" />
        <rect x="0" y="0" width="360" height="30" fill="#86efac" />
        <text x="6" y="19" fontSize="11" fill="#14532d" fontWeight="bold">LAND (cliffs / dunes)</text>
        <text x="354" y="19" fontSize="11" fill="#14532d" textAnchor="end">N↑</text>
        <polygon points={`0,30 360,30 ${[...shoreline].reverse().join(" ")}`} fill="#fde68a" />
        <polyline points={shoreline.join(" ")} fill="none" stroke="#b45309" strokeWidth="1.5" />
        <text x="6" y="44" fontSize="11" fill="#92400e">BEACH</text>
        <text x="354" y="224" fontSize="11" fill="#0c4a6e" fontWeight="bold" textAnchor="end">SEA (south)</text>
        <text x="6" y={SHORE_Y + 32} fontSize="11" fill="#0c4a6e">W</text>
        <text x="354" y={SHORE_Y + 32} fontSize="11" fill="#0c4a6e" textAnchor="end">E</text>

        {/* wave crests (perpendicular to the wind) and wind arrow */}
        {[{ x: 190, y: 160 }, { x: 250, y: 190 }, { x: 140, y: 205 }].map((c, i) => {
          const l = crest(c.x, c.y);
          return <line key={i} {...l} stroke="#e0f2fe" strokeWidth="3" strokeLinecap="round" opacity="0.9" />;
        })}
        <Arrow x1={wc.x - 26 * sinA} y1={wc.y + 26 * cosA} x2={wc.x + 26 * sinA} y2={wc.y - 26 * cosA} w={4} color="#0f172a" />
        <text x={wc.x} y="224" fontSize="11" fill="#0f172a" fontWeight="bold" textAnchor="middle">wind</text>

        {groynes ? GROYNES.map((g) => (
          <g key={g}>
            <rect x={g - 2.5} y="34" width="5" height="112" fill="#78350f" />
            <text x={g} y="160" fontSize="11" fill="#451a03" textAnchor="middle" fontWeight="bold">groyne</text>
          </g>
        )) : null}

        {/* pebble path */}
        {segs.map((s, i) => s.kind === "swash" ? (
          <Arrow key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} w={2.5} color="#1d4ed8" />
        ) : (
          <g key={i}>
            <line x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2 - 6} stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 3" />
            <polygon points={`${s.x2},${s.y2} ${s.x2 - 4},${s.y2 - 7} ${s.x2 + 4},${s.y2 - 7}`} fill="#e11d48" />
          </g>
        ))}
        <circle cx={start} cy={SHORE_Y - 4} r="5" fill="none" stroke="#334155" strokeWidth="2" />
        <circle cx={end} cy={SHORE_Y - 4} r="5.5" fill="#475569" stroke="#0f172a" />

        {dir !== 0 ? (
          <g>
            <Arrow x1={180 - 50 * dir} y1={44} x2={180 + 50 * dir} y2={44} w={5} color="#7c3aed" />
            <text x="250" y="19" fontSize="11" fill="#5b21b6" textAnchor="middle" fontWeight="bold">net longshore drift</text>
          </g>
        ) : (
          <text x="250" y="19" fontSize="11" fill="#5b21b6" textAnchor="middle" fontWeight="bold">no net drift</text>
        )}
      </svg>
      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
        <span><b className="text-blue-700">━▶</b> swash (at the wind&apos;s angle)</span>
        <span><b className="text-rose-600">╍▼</b> backwash (straight down, gravity)</span>
        <span>○ start ● pebble now</span>
      </div>
    </Frame>
  );
}
