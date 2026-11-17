import type { QA } from "./types";

export type Verdict = "correct" | "partial" | "incorrect";

export interface QAResult {
  coverage: number; // 0..1
  verdict: Verdict;
  creditedPoints: boolean[]; // per mark point: was it credited?
  hitCount: number;
  total: number;
}

const NON_ANSWER_RE =
  /^(?:i\s+)?(?:do\s+not|don\s*t)\s+know$|^idk$|^no\s+idea$|^not\s+sure$|^unsure$|^nothing$|^none$|^n\s*a$|^pass$|^skip$|^because(?:\s+geography)?$/;

/**
 * Normalise answer text and keywords the same way: lower case, accents off,
 * "1,300" → "1300", "%" → "percent", leading minus signs ("−32", "-32") → "minus 32".
 */
export function normalizeForGrading(raw: string): string {
  return raw
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/(\d),(?=\d{3}\b)/g, "$1")
    .replace(/%/g, " percent ")
    .replace(/(^|[\s(])[-\u2212](?=\d)/g, "$1minus ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Strip verbatim runs (>= minRun words) copied directly from the question stem,
 * and reject answers that are merely a contiguous substring of the question stem.
 */
function stripCopiedStem(qNorm: string, aNorm: string, minRun = 6): string {
  if (!aNorm) return "";
  if (!qNorm) return aNorm;
  const aWords = aNorm.split(" ").filter(Boolean);
  if (qNorm === aNorm || (aWords.length >= 2 && ` ${qNorm} `.includes(` ${aNorm} `))) {
    return "";
  }
  const qWords = qNorm.split(" ").filter(Boolean);
  if (qWords.length < minRun || aWords.length < minRun) return aNorm;

  const keep = new Array<boolean>(aWords.length).fill(true);
  for (let i = 0; i <= aWords.length - minRun; i++) {
    for (let j = 0; j <= qWords.length - minRun; j++) {
      let k = 0;
      while (
        i + k < aWords.length &&
        j + k < qWords.length &&
        aWords[i + k] === qWords[j + k]
      ) {
        k++;
      }
      if (k >= minRun) {
        for (let m = 0; m < k; m++) keep[i + m] = false;
      }
    }
  }
  return aWords.filter((_, idx) => keep[idx]).join(" ");
}

function matchesKeyword(paddedText: string, normalizedKeyword: string): boolean {
  if (!normalizedKeyword) return false;
  const escaped = normalizedKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Keywords ending in a digit must match a whole number ("69" does not match "690").
  // Short single-word keywords (<= 3 chars) match whole words (with optional plural -s/-es)
  // so "war" does not match "warm", "pub" does not match "public", and "pea" does not match "peak".
  let endBound = "";
  if (/\d$/.test(normalizedKeyword)) {
    endBound = "(?=\\s)";
  } else if (!normalizedKeyword.includes(" ") && normalizedKeyword.length <= 3) {
    endBound = "(?:s|es)?(?=\\s)";
  }
  const negGuard = /^(?:no|not|never|non|neither)\b/.test(normalizedKeyword)
    ? ""
    : "(?<!\\b(?:not|never|no|not a|not an|not the)\\s)";
  return new RegExp(`(?<=\\s)${negGuard}${escaped}${endBound}`).test(paddedText);
}

/**
 * Auto-assess a typed written answer against a mark scheme by keyword
 * coverage. Runs fully client-side (no LLM needed).
 */
export function gradeQA(qa: QA, answer: string): QAResult {
  const total = qa.markScheme.length || 1;
  const emptyResult = (): QAResult => ({
    coverage: 0,
    verdict: "incorrect",
    creditedPoints: qa.markScheme.map(() => false),
    hitCount: 0,
    total,
  });

  if (answer.trim().length < 3) return emptyResult();

  const rawNorm = normalizeForGrading(answer);
  if (!rawNorm || NON_ANSWER_RE.test(rawNorm)) return emptyResult();

  const cleanNorm = stripCopiedStem(normalizeForGrading(qa.question ?? ""), rawNorm);
  if (!cleanNorm) return emptyResult();

  const text = ` ${cleanNorm} `;
  const credited = qa.markScheme.map((mp) =>
    mp.keywords.some((kw) => matchesKeyword(text, normalizeForGrading(kw))),
  );
  const hitCount = credited.filter(Boolean).length;
  const coverage = hitCount / total;
  let verdict: Verdict = "incorrect";
  if (coverage >= 0.75) verdict = "correct";
  else if (coverage >= 0.34) verdict = "partial";
  return { coverage, verdict, creditedPoints: credited, hitCount, total };
}

export const VERDICT_META: Record<Verdict, { label: string; emoji: string; className: string }> = {
  correct: { label: "Correct!", emoji: "✅", className: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  partial: { label: "Partially right", emoji: "🟡", className: "text-amber-700 bg-amber-50 border-amber-200" },
  incorrect: { label: "Needs work", emoji: "🔴", className: "text-rose-700 bg-rose-50 border-rose-200" },
};
