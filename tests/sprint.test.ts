import test from "node:test";
import assert from "node:assert/strict";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_MODE_STRAND,
  isSprintMode,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
} from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { Drill } from "../lib/drills/types.ts";

/** A tiny fake fact-bank drill for a topic. */
function bankDrill(topicId: string, level: 1 | 2 | 3, slug = "terms"): Drill {
  const bank = [
    ["Name the erosion process where waves force air into cracks", "hydraulic action"],
    ["Give the term for people moving into a country", "immigration"],
    ["Name the line of latitude at 0°", "Equator"],
    ["Give the term for a city of over 10 million people", "megacity"],
  ] as const;
  return {
    id: `${topicId}.${slug}`,
    topicId,
    title: "Fake drill",
    level,
    generate(rng, tier) {
      assert.equal(tier, 1, "sprints always generate at tier 1");
      const [prompt, term] = rng.pick(bank);
      return { prompt: `${prompt} (${topicId})`, answer: { type: "text", accept: [term] }, solution: [term] };
    },
  };
}

function numberDrill(topicId: string): Drill {
  return {
    id: `${topicId}.density`,
    topicId,
    title: "Fake density drill",
    level: 1,
    generate(rng) {
      const area = rng.int(2, 9);
      const d = rng.int(10, 90);
      return { prompt: `Population ${area * d}, area ${area} km². Density?`, answer: { type: "number", value: d }, solution: [`${area * d} ÷ ${area} = ${d}`] };
    },
  };
}

const firstTopic = (strand: string) => TOPIC_META.find((t) => t.strand === strand)!.id;

test("modes are the five strands plus mixed, with info and storage keys", () => {
  assert.deepEqual([...SPRINT_MODES], ["skills", "population", "extreme", "coasts", "cities", "mixed"]);
  for (const m of SPRINT_MODES) {
    assert.ok(isSprintMode(m));
    assert.ok(SPRINT_MODE_INFO[m].label && SPRINT_MODE_INFO[m].icon);
    assert.equal(sprintBestKey(m), `sprint:${m}`);
    assert.equal(sprintAwardKey(m, "2026-01-02"), `sprint:2026-01-02:${m}`);
  }
  for (const strand of Object.values(SPRINT_MODE_STRAND)) assert.ok(TOPIC_META.some((t) => t.strand === strand), strand);
  assert.ok(!isSprintMode("tables"));
  assert.ok(!isSprintMode(undefined));
});

test("stars: 1 per 5 correct, capped at 5", () => {
  assert.deepEqual([0, 4, 5, 12, 25, 99].map(sprintStars), [0, 0, 1, 2, 5, 5]);
});

test("no drills: every pool is empty and sprintItem returns null", () => {
  const sizes = sprintPoolSizes([]);
  for (const m of SPRINT_MODES) assert.equal(sizes[m], 0);
  assert.equal(sprintItem([], makeRng(1)), null);
});

test("pools: strand modes take their strand's level 1–2 drills; mixed takes all", () => {
  const coasts = firstTopic("Coasts");
  const cities = firstTopic("Cities");
  const drills = [bankDrill(coasts, 1), bankDrill(coasts, 3, "hard"), bankDrill(cities, 2), bankDrill("not-a-topic", 1)];
  assert.deepEqual(sprintPool("coasts", drills).map((d) => d.id), [`${coasts}.terms`]);
  assert.deepEqual(sprintPool("cities", drills).map((d) => d.id), [`${cities}.terms`]);
  assert.equal(sprintPool("population", drills).length, 0);
  assert.deepEqual(sprintPool("mixed", drills).map((d) => d.id).sort(), [`${cities}.terms`, `${coasts}.terms`].sort());
});

test("items carry a checkable answer and a display of the correct answer", () => {
  const pop = firstTopic("Population");
  const pool = sprintPool("mixed", [bankDrill(pop, 1), numberDrill(pop)]);
  const rng = makeRng(42);
  const keys = new Set<string>();
  for (let i = 0; i < 200; i++) {
    const it = sprintItem(pool, rng)!;
    assert.ok(it, "always produces an item");
    assert.ok(it.prompt && it.answerText && it.key);
    keys.add(it.key);
    if (it.answer.type === "text") {
      assert.equal(it.answerText, it.answer.accept[0]);
      assert.equal(checkAnswer(it.answer, it.answer.accept[0].toUpperCase()).status, "correct");
    } else if (it.answer.type === "number") {
      assert.equal(it.answerText, String(it.answer.value));
      assert.equal(checkAnswer(it.answer, String(it.answer.value)).status, "correct");
    }
  }
  assert.ok(keys.size > 10, "varied items");
});

test("a drill that throws is skipped, not fatal", () => {
  const sk = firstTopic("Skills");
  const broken: Drill = { id: `${sk}.broken`, topicId: sk, title: "Broken", level: 1, generate() { throw new Error("boom"); } };
  const pool = sprintPool("skills", [broken, bankDrill(sk, 1)]);
  const rng = makeRng(7);
  for (let i = 0; i < 50; i++) assert.ok(sprintItem(pool, rng));
  assert.equal(sprintItem(sprintPool("skills", [broken]), makeRng(3)), null);
});
