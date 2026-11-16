import type { Subject } from "../types";

export interface TopicMeta {
  id: string;
  title: string;
  subject: Subject;
  icon: string;
  summary: string;
  /** Soft accent colour used on cards (tailwind class fragments). */
  accent: string;
}

// Year 8 Geography (Tanglin Trust School Middle School curriculum): four units, fifteen topics.
// Order here is the order shown on the home page.
export const TOPIC_META: TopicMeta[] = [
  // Unit 1: 8 Billion++
  { id: "population-distribution", title: "Where We Live: Distribution & Density", subject: "8 Billion++", icon: "🗺️", summary: "Why people crowd into some places and avoid others.", accent: "amber" },
  { id: "population-growth", title: "How the World Grew to 8 Billion", subject: "8 Billion++", icon: "📈", summary: "Birth rates, death rates and the population explosion.", accent: "amber" },
  { id: "demography", title: "Demography: Census, Pyramids & the DTM", subject: "8 Billion++", icon: "👥", summary: "How geographers study populations — and what the shapes tell us.", accent: "amber" },
  { id: "population-change", title: "Why Populations Change: Migration", subject: "8 Billion++", icon: "🧳", summary: "Births, deaths and migration — push and pull factors.", accent: "amber" },
  { id: "population-policies", title: "Over-, Under-population & Policies", subject: "8 Billion++", icon: "🏛️", summary: "Too many or too few? China's one-child policy and Singapore's answers.", accent: "amber" },
  // Unit 2: Extreme Environments
  { id: "extreme-environments", title: "Extreme Environments & Their Climates", subject: "Extreme Environments", icon: "🏜️", summary: "Hot deserts, polar lands and high mountains — and reading climate graphs.", accent: "rose" },
  { id: "extreme-weather", title: "Extreme Weather & Forecasting", subject: "Extreme Environments", icon: "🌪️", summary: "Tropical cyclones, blizzards, heatwaves — and how we predict them.", accent: "rose" },
  { id: "adaptations", title: "Surviving the Extremes: Adaptations", subject: "Extreme Environments", icon: "🐪", summary: "How plants, animals and people cope where life is hardest.", accent: "rose" },
  { id: "extreme-tourism", title: "Tourism & Expeditions in Extreme Places", subject: "Extreme Environments", icon: "🧭", summary: "Antarctica, Everest and the Sahara: can tourism be positive?", accent: "rose" },
  // Unit 3: Cracking Coasts
  { id: "coastal-processes", title: "Coastal Processes: Waves, Weathering & Erosion", subject: "Cracking Coasts", icon: "🌊", summary: "How waves, weathering and longshore drift reshape the coast.", accent: "sky" },
  { id: "coastal-landforms", title: "Coastal Landforms", subject: "Cracking Coasts", icon: "🪨", summary: "Headlands, caves, arches, stacks, beaches and spits.", accent: "sky" },
  { id: "coral-reefs", title: "Coral Reefs & the Great Barrier Reef", subject: "Cracking Coasts", icon: "🐠", summary: "Rainforests of the sea: how reefs form, what threatens them, how we protect them.", accent: "sky" },
  // Unit 4: Future Cities
  { id: "cities-megacities", title: "Cities, Urbanisation & Megacities", subject: "Future Cities", icon: "🏙️", summary: "What makes a city — and why the world's cities keep growing.", accent: "emerald" },
  { id: "lagos", title: "Lagos: A Megacity Case Study", subject: "Future Cities", icon: "🌆", summary: "Push, pull, problems and opportunities in Africa's biggest city.", accent: "emerald" },
  { id: "sustainable-cities", title: "Sustainable Cities & Eco-City Design", subject: "Future Cities", icon: "🌿", summary: "How cities like Singapore and Freiburg plan for the future.", accent: "emerald" },
];

export const SUBJECTS: Subject[] = ["8 Billion++", "Extreme Environments", "Cracking Coasts", "Future Cities"];
export const SUBJECT_ICON: Record<Subject, string> = {
  "8 Billion++": "🌏",
  "Extreme Environments": "🧊",
  "Cracking Coasts": "🏖️",
  "Future Cities": "🌇",
};

export const ACCENT: Record<string, { card: string; chip: string; bar: string; text: string; ring: string }> = {
  amber: { card: "from-amber-50 to-white border-amber-200", chip: "bg-amber-100 text-amber-800", bar: "bg-amber-500", text: "text-amber-700", ring: "ring-amber-300" },
  rose: { card: "from-rose-50 to-white border-rose-200", chip: "bg-rose-100 text-rose-700", bar: "bg-rose-500", text: "text-rose-700", ring: "ring-rose-300" },
  sky: { card: "from-sky-50 to-white border-sky-200", chip: "bg-sky-100 text-sky-700", bar: "bg-sky-500", text: "text-sky-700", ring: "ring-sky-300" },
  emerald: { card: "from-emerald-50 to-white border-emerald-200", chip: "bg-emerald-100 text-emerald-700", bar: "bg-emerald-500", text: "text-emerald-700", ring: "ring-emerald-300" },
  violet: { card: "from-violet-50 to-white border-violet-200", chip: "bg-violet-100 text-violet-700", bar: "bg-violet-500", text: "text-violet-700", ring: "ring-violet-300" },
};

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((m) => m.id === id);
}
