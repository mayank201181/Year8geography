// ---------------------------------------------------------------------------
// Key-term sprint: quick-fire recall of geography key terms and quick skills.
//
// Questions come from the procedural skill drills (lib/drills): a mode is a
// strand of the course (or "mixed"), and draws from that strand's level 1–2
// drills at tier 1, so every item is short and quick to answer.
//
// Pure (no React, no registry import) so it can be unit-tested directly by
// Node: callers pass in the drills (ALL_DRILLS in the app).
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./drills/types.ts";
import type { AnswerSpec, Strand, Trap } from "./types.ts";
import { displayAnswer } from "./answerCheck.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "skills" | "population" | "extreme" | "coasts" | "cities" | "mixed";
/** A mode tied to one strand (everything except "mixed"). */
export type SprintStrandMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["skills", "population", "extreme", "coasts", "cities", "mixed"];

/** Which strand each mode draws from. */
export const SPRINT_MODE_STRAND: Record<SprintStrandMode, Strand> = {
  skills: "Skills",
  population: "Population",
  extreme: "Extreme Environments",
  coasts: "Coasts",
  cities: "Cities",
};

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

/** Highest drill level used (1 = basics, 2 = core) — sprint items must be quick. */
export const SPRINT_MAX_LEVEL = 2;
/** Generation tier used for every sprint item (friendly numbers, core facts). */
export const SPRINT_TIER = 1;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  /** Two sample prompts (plain text). */
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  skills: {
    label: "Geography skills",
    icon: "🧭",
    description: "Compass directions, grid references, latitude and longitude, map scale and graph terms.",
    example: "Name the line of latitude at 0° · Which direction is opposite south-west?",
  },
  population: {
    label: "Population",
    icon: "👥",
    description: "Distribution and density, birth and death rates, the DTM, pyramids, migration and population policies.",
    example: "Give the term for moving into a country · Density = population ÷ what?",
  },
  extreme: {
    label: "Extreme environments",
    icon: "🏜️",
    description: "Hot desert, polar and mountain climates, extreme weather, adaptations and living in the extremes.",
    example: "Name the cold, treeless biome near the Arctic · What instrument measures air pressure?",
  },
  coasts: {
    label: "Coasts",
    icon: "🌊",
    description: "Waves, weathering and erosion, coastal landforms, longshore drift and coral reefs.",
    example: "Name the erosion process where rocks grind the cliff · What landform comes after an arch?",
  },
  cities: {
    label: "Cities",
    icon: "🏙️",
    description: "Urbanisation, megacities, push and pull factors, Lagos and sustainable cities.",
    example: "Give the term for a city of over 10 million people · Name Nigeria's largest city",
  },
  mixed: {
    label: "Mixed",
    icon: "🎲",
    description: "A bit of everything from the whole course — the truest test of recall.",
    example: "Key terms and quick skills from every unit",
  },
};

export interface SprintItem {
  /** Identity for repeat-avoidance, retries and the missed list. */
  key: string;
  /** Question shown to the learner (markdown-lite + {{maths}}). */
  prompt: string;
  /** How the answer is checked (lib/answerCheck.ts). */
  answer: AnswerSpec;
  /** The correct answer as display text (may contain {{maths}}). */
  answerText: string;
  /** Predictable wrong answers with targeted feedback (from the drill). */
  traps?: Trap[];
  /** Optional inline SVG from the drill. */
  diagram?: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

/** Personal-best key in ProgressDoc.bests. */
export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

/** Idempotency key for the once-per-mode-per-day star award. */
export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

/** Stars for a sprint score: 1 per 5 correct, at most 5. */
export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const STRAND_OF_TOPIC = new Map<string, Strand>(TOPIC_META.map((t) => [t.id, t.strand]));

/** The strand a topic belongs to (undefined for an unknown topic). */
export function strandOfTopic(topicId: string): Strand | undefined {
  return STRAND_OF_TOPIC.get(topicId);
}

/** The drills a mode draws from: level 1–2, in the mode's strand ("mixed": any known topic). */
export function sprintPool(mode: SprintMode, drills: readonly Drill[]): Drill[] {
  return drills.filter((d) => {
    if (d.level > SPRINT_MAX_LEVEL) return false;
    const strand = strandOfTopic(d.topicId);
    if (!strand) return false;
    return mode === "mixed" || strand === SPRINT_MODE_STRAND[mode];
  });
}

/** Number of drills each mode can draw from (0 = not available yet). */
export function sprintPoolSizes(drills: readonly Drill[]): Record<SprintMode, number> {
  const out = {} as Record<SprintMode, number>;
  for (const m of SPRINT_MODES) out[m] = sprintPool(m, drills).length;
  return out;
}

/** Build a sprint item from one drill, or null if the drill fails or gives an unusable item. */
function itemFrom(drill: Drill, rng: Rng): SprintItem | null {
  try {
    const it = drill.generate(rng, SPRINT_TIER);
    const prompt = typeof it?.prompt === "string" ? it.prompt.trim() : "";
    if (!prompt || !it.answer) return null;
    const answerText = displayAnswer(it.answer);
    if (!answerText) return null;
    return {
      key: `${drill.id}::${prompt}::${answerText}`,
      prompt,
      answer: it.answer,
      answerText,
      traps: it.traps?.length ? it.traps : undefined,
      diagram: it.diagram || undefined,
      drillId: drill.id,
      topicId: drill.topicId,
    };
  } catch {
    return null;
  }
}

/**
 * One quick item from a pool of drills. Topics are picked evenly first (so a
 * topic with many drills doesn't crowd out the rest), then a drill within it.
 * Items without a diagram are preferred — they're quicker to read. Returns
 * null only if the pool is empty or every drill keeps failing.
 */
export function sprintItem(pool: readonly Drill[], rng: Rng): SprintItem | null {
  if (!pool.length) return null;
  const byTopic = new Map<string, Drill[]>();
  for (const d of pool) {
    const list = byTopic.get(d.topicId);
    if (list) list.push(d);
    else byTopic.set(d.topicId, [d]);
  }
  const topics = [...byTopic.values()];
  let withDiagram: SprintItem | null = null;
  for (let i = 0; i < 12; i++) {
    const drill = rng.pick(rng.pick(topics));
    const item = itemFrom(drill, rng);
    if (!item) continue;
    if (!item.diagram) return item;
    withDiagram ??= item;
  }
  if (withDiagram) return withDiagram;
  // Last resort: try every drill once, in order.
  for (const d of pool) {
    const item = itemFrom(d, rng);
    if (item) return item;
  }
  return null;
}
