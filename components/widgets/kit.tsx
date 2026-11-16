"use client";

// Shared building blocks for the per-topic interactive widgets (components/widgets/<topic>.tsx).
// Every widget is self-contained: local state from sliders/steppers/toggles → compute → render
// the result (SVG/numbers) + a plain-language caption explaining the geography.

import type { ReactNode } from "react";

export function Frame({ title, children, caption }: { title: string; children: ReactNode; caption?: ReactNode }) {
  return (
    <div className="my-3 rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/70 to-white p-4">
      <p className="mb-3 flex items-center gap-2 text-sm font-bold text-indigo-700">
        <span>🕹️</span> {title}
      </p>
      <div className="widget-body">{children}</div>
      {caption ? <div className="mt-3 text-sm text-slate-600">{caption}</div> : null}
    </div>
  );
}

export function Slider({
  label, min, max, step = 1, value, onChange, suffix = "", color = "#4f46e5",
}: { label: string; min: number; max: number; step?: number; value: number; onChange: (n: number) => void; suffix?: string; color?: string }) {
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-2 text-sm font-medium text-slate-700">
        <span>{label}</span>
        <span className="tabular-nums font-bold" style={{ color }}>{value}{suffix}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} className="mt-1 w-full" style={{ accentColor: color }} />
    </label>
  );
}

export function Stepper({ label, value, min, max, step = 1, onChange, color = "#4f46e5" }: { label: string; value: number; min: number; max: number; step?: number; onChange: (n: number) => void; color?: string }) {
  return (
    <div className="flex items-center justify-between gap-2 text-sm font-medium text-slate-700">
      <span>{label}</span>
      <div className="flex items-center gap-2">
        <button type="button" aria-label={`Decrease ${label}`} onClick={() => onChange(Math.max(min, +(value - step).toFixed(6)))} className="grid h-8 w-8 place-items-center rounded-lg bg-white font-bold text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50">−</button>
        <span className="min-w-10 text-center text-base font-bold tabular-nums" style={{ color }}>{value}</span>
        <button type="button" aria-label={`Increase ${label}`} onClick={() => onChange(Math.min(max, +(value + step).toFixed(6)))} className="grid h-8 w-8 place-items-center rounded-lg bg-white font-bold text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50">+</button>
      </div>
    </div>
  );
}

/** A row of mutually exclusive choice buttons. */
export function Choice<T extends string>({ options, value, onChange, label }: { options: { id: T; label: string }[]; value: T; onChange: (v: T) => void; label?: string }) {
  return (
    <div>
      {label ? <p className="mb-1 text-sm font-medium text-slate-700">{label}</p> : null}
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            className={`rounded-full px-3 py-1.5 text-sm font-semibold ring-1 transition ${value === o.id ? "bg-indigo-600 text-white ring-indigo-600" : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50"}`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/** A big readout number with a label. */
export function Stat({ label, value, tone = "indigo" }: { label: string; value: ReactNode; tone?: "indigo" | "emerald" | "rose" | "amber" | "sky" }) {
  const c = { indigo: "text-indigo-700 bg-indigo-50", emerald: "text-emerald-700 bg-emerald-50", rose: "text-rose-700 bg-rose-50", amber: "text-amber-800 bg-amber-50", sky: "text-sky-700 bg-sky-50" }[tone];
  return (
    <div className={`rounded-xl px-3 py-2 ${c}`}>
      <p className="text-[11px] font-bold uppercase tracking-wide opacity-80">{label}</p>
      <p className="text-xl font-extrabold tabular-nums">{value}</p>
    </div>
  );
}
