"use client";

import { useMemo, useState } from "react";
import { Choice, Frame, Slider, Stat } from "./kit";

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/* ───────────────────────── 1. Cyclone Builder ───────────────────────── */

/** Saffir–Simpson scale (sustained wind, km/h) plus weaker stages. Surge heights are the rough
 *  historical guide the US National Hurricane Center used before 2010 — real surge depends on
 *  the shape of the coast and sea floor. */
const STAGES = [
  { min: 0, name: "No cyclone", short: "None", tone: "sky" as const, hazards: "Heavy showers and thunderstorms only — like a normal Singapore afternoon." },
  { min: 40, name: "Tropical depression", short: "TD", tone: "sky" as const, hazards: "Heavy rain and local flash floods." },
  { min: 63, name: "Tropical storm", short: "TS", tone: "amber" as const, hazards: "Torrential rain (often 100+ mm), river floods, landslides on steep slopes, a small storm surge." },
  { min: 119, name: "Category 1", short: "Cat 1", tone: "amber" as const, hazards: "Damage to roofs and trees, power cuts for days; storm surge roughly 1–1.5 m." },
  { min: 154, name: "Category 2", short: "Cat 2", tone: "amber" as const, hazards: "Major roof damage, many trees uprooted, near-total power loss; surge roughly 2 m." },
  { min: 178, name: "Category 3 (major)", short: "Cat 3", tone: "rose" as const, hazards: "Devastating: well-built houses lose roofs, roads blocked for days; surge roughly 3 m." },
  { min: 209, name: "Category 4 (major)", short: "Cat 4", tone: "rose" as const, hazards: "Catastrophic: houses lose walls, area unliveable for weeks; surge roughly 4–5 m." },
  { min: 252, name: "Category 5 (major)", short: "Cat 5", tone: "rose" as const, hazards: "Catastrophic: many homes destroyed, months without power; surge 5 m+ (Haiyan, ~315 km/h, ~5–7 m at Tacloban)." },
];

/** Points of one spiral rain band (log spiral), in storm-centred coordinates. NH bands wind in anticlockwise. */
function band(R: number, offset: number, hemi: "N" | "S") {
  const pts: string[] = [];
  for (let i = 0; i <= 40; i++) {
    const phi = (i / 40) * 1.6 * Math.PI;
    const r = R * Math.exp(-0.38 * phi);
    const a = phi + offset;
    pts.push(`${(r * Math.cos(a)).toFixed(1)},${((hemi === "N" ? -1 : 1) * r * Math.sin(a)).toFixed(1)}`);
  }
  return "M" + pts.join(" L");
}

export function CycloneBuilder() {
  const [sst, setSst] = useState(27);
  const [lat, setLat] = useState(15);
  const [shear, setShear] = useState(15);
  const [surface, setSurface] = useState<"sea" | "land">("sea");
  const [hemi, setHemi] = useState<"N" | "S">("N");

  const m = useMemo(() => {
    const warm = sst >= 26.5, latOk = lat >= 5 && lat <= 30, calm = shear < 36, sea = surface === "sea";
    // Simplified model: warmer sea = more fuel; spin needs Coriolis; shear tears the tower; land cuts off the fuel.
    const fuel = warm ? Math.min(320, 65 + (sst - 26.5) * 58) : 20 + (sst - 22) * 8;
    const spin = lat < 3 ? 0 : lat < 5 ? (lat - 3) / 2 : lat <= 30 ? 1 : clamp(1 - (lat - 30) / 12, 0.2, 1);
    const shearF = clamp(1 - (shear - 15) / 50, 0.1, 1);
    const wind = Math.round(Math.max(15, fuel * spin * shearF * (sea ? 1 : 0.4)));
    const stage = [...STAGES].reverse().find((s) => wind >= s.min)!;
    return { warm, latOk, calm, sea, wind, stage, score: [warm, latOk, calm, sea].filter(Boolean).length };
  }, [sst, lat, shear, surface]);

  const o = clamp(m.wind / 220, 0.12, 1);
  const R = 34 + (Math.min(m.wind, 300) / 300) * 66;
  const dur = Math.max(1.6, 14 - m.wind / 22);
  const organised = m.wind >= 40;

  let notice: string;
  if (lat < 5) notice = `At ${lat}° the Coriolis effect is too weak to make the in-rushing air spin, so thunderstorms never organise into a cyclone. That is why Singapore (1°N) is almost never hit — Typhoon Vamei (2001), which formed at about 1.5°N just east of Singapore, is the famous rare exception.`;
  else if (!m.warm) notice = `At ${sst}°C the sea is too cool (below 26.5°C) to supply enough warm, moist air. Less evaporation means less condensation and less latent heat — the storm's engine stalls.`;
  else if (!m.sea) notice = "Over land the storm is cut off from its fuel — warm, moist sea air — and friction from the rough ground slows the wind. It weakens after landfall, but its rain can still cause deadly floods and landslides inland.";
  else if (!m.calm) notice = `Wind shear of ${shear} km/h is strong: winds high up blow faster than winds below, tilting and tearing the tall tower of cloud apart so heat escapes. Strong shear is why many storms fizzle out.`;
  else if (lat > 30) notice = "Beyond about 30° the storm usually meets cooler water and fast upper winds and weakens. (Simplified: in this model latitude and sea temperature are separate sliders so you can test each condition; in reality high latitudes also mean cooler seas.)";
  else notice = `All four conditions are met. Every extra degree of sea warmth means more evaporation and more latent heat released as the air rises and condenses — so the storm grows stronger. Try raising the sea temperature by 1°C and watch the category jump.`;

  return (
    <Frame title="Cyclone Builder" caption={<p><b>Notice:</b> {notice}</p>}>
      <p className="mb-3 rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-900">
        <b>Predict first:</b> the sea around Singapore is about 29°C — warm enough. Set the latitude to 1°. Will a cyclone form? Why or why not?
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Sea surface temperature" min={22} max={31} step={0.5} value={sst} onChange={setSst} suffix="°C" color="#e11d48" />
        <Slider label="Latitude (distance from the Equator)" min={0} max={40} value={lat} onChange={setLat} suffix="°" color="#0284c7" />
        <Slider label="Wind shear (change in wind with height)" min={0} max={90} step={3} value={shear} onChange={setShear} suffix=" km/h" color="#7c3aed" />
        <div className="flex flex-col gap-2">
          <Choice label="Storm is over…" value={surface} onChange={setSurface} options={[{ id: "sea", label: "🌊 Warm ocean" }, { id: "land", label: "🏝️ Land (after landfall)" }]} />
          <Choice label="Hemisphere" value={hemi} onChange={setHemi} options={[{ id: "N", label: "North" }, { id: "S", label: "South" }]} />
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_1.2fr]">
        <ul className="space-y-1 text-sm" aria-label="Conditions checklist">
          {[
            [m.warm, `Sea at least 26.5°C (now ${sst}°C)`],
            [m.latOk, `About 5–30° from the Equator (now ${lat}°)`],
            [m.calm, `Low wind shear, under ~36 km/h (now ${shear})`],
            [m.sea, "Over warm ocean, not land"],
          ].map(([ok, text]) => (
            <li key={text as string} className={`flex items-start gap-2 rounded-lg px-2 py-1 ${ok ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}>
              <span aria-hidden>{ok ? "✅" : "❌"}</span>
              <span>{text as string}<span className="sr-only">{ok ? " — met" : " — not met"}</span></span>
            </li>
          ))}
        </ul>

        <svg viewBox="0 0 360 220" className="w-full rounded-xl" role="img" aria-label={`${m.stage.name}: sustained winds about ${m.wind} km/h, spinning ${hemi === "N" ? "anticlockwise" : "clockwise"}`}>
          <style>{`@keyframes cyc-ccw{to{transform:rotate(-360deg)}}@keyframes cyc-cw{to{transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){.cyc-spin{animation:none!important}}`}</style>
          <rect width="360" height="220" fill={m.sea ? "#1e6fb8" : "#5b8c3a"} />
          {!m.sea ? <path d="M0,170 Q90,150 180,175 T360,165 L360,220 L0,220 Z" fill="#7aa64f" /> : null}
          <g transform="translate(180 105)">
            {organised ? (
              <g className="cyc-spin" style={{ animation: `${hemi === "N" ? "cyc-ccw" : "cyc-cw"} ${dur.toFixed(1)}s linear infinite` }}>
                {[0, 1, 2, 3].map((k) => (
                  <path key={k} d={band(R, (k * Math.PI) / 2, hemi)} fill="none" stroke="#f8fafc" strokeLinecap="round" strokeWidth={5 + 10 * o} opacity={0.35 + 0.5 * o} />
                ))}
                <circle r={R * 0.38} fill="#f8fafc" opacity={0.6 + 0.35 * o} />
              </g>
            ) : (
              <g fill="#f8fafc" opacity="0.75">
                {[[-60, -30, 16], [40, -45, 12], [-20, 30, 14], [70, 25, 10], [5, -5, 9]].map(([x, y, r]) => <circle key={`${x}${y}`} cx={x} cy={y} r={r} />)}
              </g>
            )}
            {m.wind >= 119 ? <circle r={4 + o * 5} fill={m.sea ? "#1e6fb8" : "#5b8c3a"} stroke="#cbd5e1" strokeWidth="1.5" /> : null}
          </g>
          {m.wind >= 119 ? <text x="192" y="98" fontSize="11" fill="#0f172a" stroke="#fff" strokeWidth="3" paintOrder="stroke" fontWeight="700">eye</text> : null}
          <text x="8" y="16" fontSize="12" fill="#fff" fontWeight="700">{m.stage.name}</text>
          <text x="8" y="212" fontSize="11" fill="#fff">
            {organised ? `Spins ${hemi === "N" ? "anticlockwise (N. Hemisphere)" : "clockwise (S. Hemisphere)"}` : "Not organised: scattered thunderstorms"}
          </text>
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <Stat label="Sustained wind" value={`${m.wind} km/h`} tone="indigo" />
        <Stat label="Strength" value={<span className="text-base">{m.stage.short}</span>} tone={m.stage.tone} />
        <Stat label="Conditions met" value={`${m.score} / 4`} tone={m.score === 4 ? "emerald" : "amber"} />
      </div>
      <p className="mt-2 rounded-xl bg-white px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200">
        <b>Hazards to expect:</b> {m.stage.hazards}
      </p>
      <p className="mt-2 text-xs text-slate-500">
        Simplified model for learning — real forecasters use supercomputers. Saffir–Simpson scale: Cat 1 = 119–153, Cat 2 = 154–177, Cat 3 = 178–208,
        Cat 4 = 209–251, Cat 5 = 252+ km/h. Surge heights are rough guides: a funnel-shaped bay or shallow sea floor makes the surge much higher.
      </p>
    </Frame>
  );
}

/* ───────────────────────── 2. Forecast Desk ───────────────────────── */

type Sys = "low" | "high";
type Season = "summer" | "winter";
type Fc = "gales" | "showers" | "sunny" | "frost" | "breezy";

const FORECASTS: { id: Fc; icon: string; label: string; needs: string }[] = [
  { id: "gales", icon: "🌀", label: "Gales and heavy rain", needs: "a deep low: very low pressure, tightly packed isobars, strong rising air" },
  { id: "showers", icon: "🌧️", label: "Cloudy, rain at times, breezy", needs: "a low with moderately spaced isobars: rising air makes cloud and rain, but winds below gale force" },
  { id: "breezy", icon: "🌬️", label: "Dry and bright but windy", needs: "high pressure (sinking air, no rain) but with closer isobars than usual" },
  { id: "sunny", icon: "☀️", label: "Sunny, hot and dry", needs: "a summer high: sinking air warms and clears the cloud, light winds, long sunny days" },
  { id: "frost", icon: "🌫️", label: "Clear, calm and cold — frost or fog", needs: "a winter high: clear skies at night let heat escape, so it turns very cold; calm air lets fog form" },
];

function beaufort(k: number) {
  if (k < 12) return "Light air";
  if (k < 29) return "Gentle breeze";
  if (k < 39) return "Fresh breeze";
  if (k < 62) return "Strong breeze";
  if (k < 89) return "Gale";
  return "Storm";
}

export function ForecastDesk() {
  const [sys, setSys] = useState<Sys>("low");
  const [spacing, setSpacing] = useState(150);
  const [season, setSeason] = useState<Season>("winter");
  const [pick, setPick] = useState<{ key: string; id: Fc } | null>(null);
  const key = `${sys}-${spacing}-${season}`;
  const chosen = pick && pick.key === key ? pick.id : null;

  const d = useMemo(() => {
    const n = clamp(Math.round(500 / spacing), 1, 8); // isobars inside a 500 km radius, every 4 hPa
    const rings = Array.from({ length: n }, (_, i) => (sys === "low" ? 1012 - 4 * (n - 1 - i) : 1016 + 4 * (n - 1 - i)));
    const centre = sys === "low" ? rings[0] - 2 : rings[0] + 2;
    // Simplified: mid-latitude geostrophic wind from the gradient (4 hPa per isobar), × ~0.65 for surface friction.
    const wind = Math.round(7800 / spacing);
    const rain = sys === "low" ? Math.round(3 + (1012 - centre) * 0.6) : 0;
    const answer: Fc = sys === "low" ? (wind >= 62 ? "gales" : "showers") : wind >= 39 ? "breezy" : season === "summer" ? "sunny" : "frost";
    return { n, rings, centre, wind, rain, answer };
  }, [sys, spacing, season]);

  const cx = 180, cy = 128, px = 4; // 1 px = 4 km
  const baroAngle = (-120 + ((clamp(d.centre, 950, 1050) - 950) / 100) * 240) * (Math.PI / 180);
  const arrows = [0, 1, 2, 3, 4, 5].map((k) => {
    const phi = (k * Math.PI) / 3 + 0.4;
    const r = Math.min(110, (d.n * spacing) / px) * 0.62;
    const x = cx + r * Math.cos(phi), y = cy - r * Math.sin(phi);
    const s = 20 * Math.PI / 180, L = clamp(8 + d.wind / 4, 10, 30);
    // Northern Hemisphere: anticlockwise + inward round a low; clockwise + outward round a high (SVG y points down).
    const [tx, ty] = sys === "low" ? [-Math.sin(phi), -Math.cos(phi)] : [Math.sin(phi), Math.cos(phi)];
    const [ix, iy] = sys === "low" ? [-Math.cos(phi), Math.sin(phi)] : [Math.cos(phi), -Math.sin(phi)];
    const dx = tx * Math.cos(s) + ix * Math.sin(s), dy = ty * Math.cos(s) + iy * Math.sin(s);
    const ex = x + dx * L, ey = y + dy * L;
    return { x, y, ex, ey, h: `${ex},${ey} ${ex - dx * 7 - dy * 4},${ey - dy * 7 + dx * 4} ${ex - dx * 7 + dy * 4},${ey - dy * 7 - dx * 4}` };
  });

  const right = chosen === d.answer;
  const ans = FORECASTS.find((f) => f.id === d.answer)!;
  const mine = FORECASTS.find((f) => f.id === chosen);
  const readings = `the barometer reads ${d.centre} hPa${sys === "low" ? " and falling" : " and steady"}, the anemometer ${d.wind} km/h (${beaufort(d.wind).toLowerCase()}) and the rain gauge ${d.rain} mm`;

  return (
    <Frame
      title="Forecast Desk"
      caption={
        <p>
          <b>Notice:</b> isobars {spacing <= 100 ? "packed" : spacing >= 250 ? "spread" : "spaced"} {spacing} km apart give a pressure gradient of 4 hPa per {spacing} km, so the wind is about{" "}
          {d.wind} km/h. Halve the spacing and the wind roughly doubles. {sys === "low" ? "Round a low the air rises, cools and condenses — cloud and rain." : "Round a high the air sinks and warms — clouds evaporate, so it stays dry."}
          {sys === "high" && spacing < 150 ? " (Real highs rarely have isobars this close — they are usually wide and gentle.)" : ""}
        </p>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Choice label="Pressure system over the station" value={sys} onChange={setSys} options={[{ id: "low", label: "L — Low (depression)" }, { id: "high", label: "H — High (anticyclone)" }]} />
        <Choice label="Season (mid-latitudes, e.g. UK)" value={season} onChange={setSeason} options={[{ id: "summer", label: "Summer" }, { id: "winter", label: "Winter" }]} />
        <div className="sm:col-span-2">
          <Slider label="Distance between isobars" min={60} max={400} step={10} value={spacing} onChange={setSpacing} suffix=" km" color="#0284c7" />
        </div>
      </div>

      <svg viewBox="0 0 360 256" className="mt-3 w-full rounded-xl bg-sky-50" role="img" aria-label={`Synoptic chart: ${sys === "low" ? "low" : "high"} pressure centre of ${d.centre} hPa with isobars ${spacing} km apart`}>
        {d.rings.map((p, i) => {
          const r = ((i + 1) * spacing) / px;
          const show = d.n <= 4 || i % 2 === d.n % 2 || i === d.n - 1;
          return (
            <g key={p}>
              <ellipse cx={cx} cy={cy} rx={Math.min(r * 1.25, 400)} ry={r * 0.9} fill="none" stroke="#334155" strokeWidth="1.3" />
              {show && r * 0.9 < 120 ? <text x={cx} y={cy - r * 0.9 - 2} textAnchor="middle" fontSize="11" fill="#334155" stroke="#f0f9ff" strokeWidth="3" paintOrder="stroke">{p}</text> : null}
            </g>
          );
        })}
        {sys === "low" ? (
          <g>
            <line x1={cx} y1={cy} x2={cx - 140} y2={cy + 120} stroke="#2563eb" strokeWidth="2.5" />
            {[0.3, 0.5, 0.7].map((t) => {
              const x = cx - 140 * t, y = cy + 120 * t; // triangles point the way the front moves (south-east)
              return <polygon key={t} points={`${x + 4.5},${y - 3.9} ${x - 4.5},${y + 3.9} ${x + 5.5},${y + 6.4}`} fill="#2563eb" />;
            })}
            <text x={cx - 128} y={cy + 115} fontSize="11" fill="#1d4ed8">cold front</text>
          </g>
        ) : null}
        {arrows.map((a, k) => (
          <g key={k} stroke="#be123c" fill="#be123c">
            <line x1={a.x} y1={a.y} x2={a.ex} y2={a.ey} strokeWidth="2" />
            <polygon points={a.h} stroke="none" />
          </g>
        ))}
        <text x={cx} y={cy + 9} textAnchor="middle" fontSize="26" fontWeight="800" fill={sys === "low" ? "#be123c" : "#1d4ed8"}>{sys === "low" ? "L" : "H"}</text>
        <line x1="12" y1="244" x2={12 + 100 / px} y2="244" stroke="#0f172a" strokeWidth="2" />
        <text x={18 + 100 / px} y="248" fontSize="11" fill="#0f172a">100 km</text>
        <text x="348" y="248" textAnchor="end" fontSize="11" fill="#be123c">→ wind (N. Hemisphere)</text>
      </svg>

      <svg viewBox="0 0 360 132" className="mt-2 w-full" role="img" aria-label={`Instruments: ${readings}`}>
        <g transform="translate(62 60)">
          <circle r="50" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
          {[["Stormy", 960], ["Rain", 980], ["Change", 1000], ["Fair", 1020], ["Dry", 1040]].map(([t, p]) => {
            const a = (-120 + (((p as number) - 950) / 100) * 240) * (Math.PI / 180);
            return <text key={t} x={36 * Math.sin(a)} y={-36 * Math.cos(a) + 4} textAnchor="middle" fontSize="11" fill="#475569">{t}</text>;
          })}
          <line x1="0" y1="0" x2={30 * Math.sin(baroAngle)} y2={-30 * Math.cos(baroAngle)} stroke="#be123c" strokeWidth="3" strokeLinecap="round" />
          <circle r="4" fill="#0f172a" />
          <text y="64" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">Barometer {d.centre} hPa</text>
        </g>
        <g transform="translate(180 56)">
          <style>{`@keyframes fd-spin{to{transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){.fd-spin{animation:none!important}}`}</style>
          <line x1="0" y1="0" x2="0" y2="50" stroke="#475569" strokeWidth="3" />
          <g className="fd-spin" style={{ animation: `fd-spin ${Math.max(0.25, 30 / d.wind).toFixed(2)}s linear infinite` }}>
            {[0, 120, 240].map((a) => (
              <g key={a} transform={`rotate(${a})`}>
                <line x1="0" y1="0" x2="26" y2="0" stroke="#475569" strokeWidth="2" />
                <path d="M26,-7 a7,7 0 0 1 0,14 z" fill="#0284c7" />
              </g>
            ))}
          </g>
          <text y="66" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">Anemometer {d.wind} km/h</text>
        </g>
        <g transform="translate(300 10)">
          <rect x="-16" y="0" width="32" height="80" rx="3" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
          <rect x="-14" y={78 - Math.min(76, (d.rain / 30) * 76)} width="28" height={Math.min(76, (d.rain / 30) * 76)} fill="#38bdf8" />
          {[10, 20, 30].map((v) => <line key={v} x1="-16" x2="-8" y1={78 - (v / 30) * 76} y2={78 - (v / 30) * 76} stroke="#475569" />)}
          <text y="112" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">Rain {d.rain} mm/day</text>
        </g>
      </svg>

      <p className="mt-2 text-sm font-semibold text-slate-700">Read the instruments, then issue your forecast:</p>
      <div className="mt-1 flex flex-wrap gap-2">
        {FORECASTS.map((f) => (
          <button key={f.id} type="button" onClick={() => setPick({ key, id: f.id })} aria-pressed={chosen === f.id}
            className={`rounded-full px-3 py-1.5 text-sm font-semibold ring-1 transition ${chosen === f.id ? (right ? "bg-emerald-600 text-white ring-emerald-600" : "bg-rose-600 text-white ring-rose-600") : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50"}`}>
            <span aria-hidden>{f.icon}</span> {f.label}
          </button>
        ))}
      </div>
      {mine ? (
        <p className={`mt-2 rounded-xl px-3 py-2 text-sm ${right ? "bg-emerald-50 text-emerald-900" : "bg-rose-50 text-rose-900"}`} aria-live="polite">
          {right
            ? <><b>Spot on.</b> Here {readings}. That fits {ans.needs}.</>
            : <><b>Not quite.</b> &ldquo;{mine.label}&rdquo; needs {mine.needs}. But here {readings} — that points to <b>{ans.label.toLowerCase()}</b>: {ans.needs}.</>}
        </p>
      ) : null}
      <div className="mt-2 grid grid-cols-3 gap-2">
        <Stat label="Centre pressure" value={`${d.centre}`} tone={sys === "low" ? "rose" : "sky"} />
        <Stat label="Wind" value={<span className="text-base">{beaufort(d.wind)}</span>} tone="indigo" />
        <Stat label="Cloud" value={<span className="text-base">{sys === "low" ? "Overcast" : "Clear"}</span>} tone="amber" />
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Simplified model: isobars every 4 hPa; wind estimated from the pressure gradient for the mid-latitudes and reduced for friction near the ground.
        Real forecasts also use fronts, humidity, satellite and radar.
      </p>
    </Frame>
  );
}
