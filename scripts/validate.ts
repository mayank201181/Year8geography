// Content validator: run with `npx tsx scripts/validate.ts`. Exits 1 on any error.
import { ALL_TOPICS } from "../lib/topics/index";
import { EXTRAS } from "../lib/extras/index";
import { TOPIC_META } from "../lib/topics/_meta";
import { COMPREHENSIVE } from "../lib/comprehensive";
import { gradeQA } from "../lib/grade";
import type { MCQ, QA, Paper } from "../lib/types";

const errs: string[] = [];
const warns: string[] = [];
const ids = new Set<string>();
const seen = (id: string, where: string) => { if (ids.has(id)) errs.push(`duplicate id ${id} (${where})`); ids.add(id); };

function checkMCQ(q: MCQ, where: string) {
  seen(q.id, where);
  if (q.options.length !== 4) errs.push(`${q.id}: ${q.options.length} options`);
  if (new Set(q.options).size !== q.options.length) errs.push(`${q.id}: duplicate options`);
  if (!(q.answerIndex >= 0 && q.answerIndex < q.options.length)) errs.push(`${q.id}: bad answerIndex`);
  if (!q.explanation || !q.hint) errs.push(`${q.id}: missing hint/explanation`);
}
function checkQA(q: QA, where: string) {
  seen(q.id, where);
  if (q.marks !== q.markScheme.length) errs.push(`${q.id}: marks ${q.marks} != ${q.markScheme.length} points`);
  for (const mp of q.markScheme) if (mp.keywords.length < 1) errs.push(`${q.id}: point without keywords`);
  const r = gradeQA(q, q.modelAnswer);
  if (r.hitCount < r.total) warns.push(`${q.id}: model answer earns ${r.hitCount}/${r.total}`);
  if (gradeQA(q, "I don't know").hitCount > 0) warns.push(`${q.id}: "I don't know" earns marks`);
}

if (ALL_TOPICS.length !== TOPIC_META.length) errs.push(`registered ${ALL_TOPICS.length} topics, meta has ${TOPIC_META.length}`);
for (const t of ALL_TOPICS) {
  const secs = new Set(t.guide.map((s) => s.id));
  const refOk = (r: string | undefined, id: string) => { if (r && !secs.has(r)) errs.push(`${id}: guideRef ${r} not a section`); };
  t.quiz.mcq.forEach((q) => { checkMCQ(q, t.id); refOk(q.guideRef, q.id); });
  t.quiz.qa.forEach((q) => { checkQA(q, t.id); refOk(q.guideRef, q.id); });
  const papers = [...t.questionBank.mcqPapers, ...t.questionBank.qaPapers] as Paper<MCQ | QA>[];
  for (const p of papers) seen(p.id, t.id);
  t.questionBank.mcqPapers.forEach((p) => p.questions.forEach((q) => { checkMCQ(q, t.id); refOk(q.guideRef, q.id); }));
  t.questionBank.qaPapers.forEach((p) => p.questions.forEach((q) => { checkQA(q, t.id); refOk(q.guideRef, q.id); }));
  if (t.questionBank.mcqPapers.length !== 4 || t.questionBank.qaPapers.length !== 4) errs.push(`${t.id}: paper counts`);
  const ex = EXTRAS[t.id];
  if (!ex) errs.push(`${t.id}: no extras`);
  else if (!(ex.interactives ?? []).length) errs.push(`${t.id}: no interactives`);
}
COMPREHENSIVE.mcqPapers.forEach((p) => { seen(p.id, "exam"); p.questions.forEach((q) => checkMCQ(q, "exam")); });
COMPREHENSIVE.qaPapers.forEach((p) => { seen(p.id, "exam"); p.questions.forEach((q) => checkQA(q, "exam")); });

const n = ALL_TOPICS.reduce((s, t) => s + t.quiz.mcq.length + t.quiz.qa.length + t.questionBank.mcqPapers.reduce((a, p) => a + p.questions.length, 0) + t.questionBank.qaPapers.reduce((a, p) => a + p.questions.length, 0), 0);
console.log(`${ALL_TOPICS.length} topics, ${n} topic questions, exam ${COMPREHENSIVE.mcqPapers.length}+${COMPREHENSIVE.qaPapers.length} papers`);
for (const w of warns.slice(0, 40)) console.log("WARN ", w);
if (warns.length > 40) console.log(`... ${warns.length - 40} more warnings`);
for (const e of errs) console.log("ERROR", e);
console.log(`${errs.length} errors, ${warns.length} warnings`);
process.exit(errs.length ? 1 : 0);
