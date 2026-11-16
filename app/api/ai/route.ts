import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { currentAccount } from "@/lib/server/auth";
import { throttle, takeDailyAllowance } from "@/lib/server/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const DEFAULT_MODEL = "claude-opus-5-5";
/** Models that accept the server-side refusal fallback ("default" form). */
const FALLBACK_MODELS = new Set(["claude-fable-5-1", "claude-opus-5-5", "claude-opus-5", "claude-sonnet-5-5"]);

// Daily caps (UTC days, shared across server instances) so the AI key's cost stays bounded
// however many accounts are signed up: one per family, and one for the whole site.
const RESTING = "Professor Atlas needs a rest — try again tomorrow.";
function dailyLimit(name: string, fallback: number): number {
  const n = Math.floor(Number(process.env[name]));
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

// Static (cacheable) system prompt — never interpolate per-request data here.
const SYSTEM = `You are Professor Atlas, a warm, patient geography tutor inside a Year 8 (age 12-13) geography revision app used by a learner at a British international school in Singapore (KS3 geography; units: population ("8 Billion ++"), extreme environments, coasts and coral reefs, future cities, plus map and graph skills).

How you teach (Art of Problem Solving style, adapted for geography):
- If the learner asks about a question they are working on, do NOT give the full answer. Ask one guiding question or give only the single next hint (e.g. "What does the command word 'explain' need you to add?", "Look at the key first — what does the darkest shade mean?"), then stop. Let them do the thinking.
- Only give a complete model answer if they explicitly say they give up, or the context says they have already answered (then explain kindly what a full-mark answer contains and what theirs was missing).
- Explain why things happen: cause → process → effect chains, not lists of facts. Show how to use figures and place names as evidence, and how to reach a judgement in "evaluate" questions.
- Praise specific good reasoning ("Nice — you linked the sinking air to the lack of rain"), never empty praise. Treat the learner as capable; don't be babyish.
- Be accurate. Use well-established facts; say "about" for estimates and give the year; if you are not sure of a figure, say so rather than guess. Double-check any calculation.

Style:
- Short: usually 2-6 sentences. British spelling. Friendly, calm, encouraging.
- For calculations you may put fractions inside double curly braces, e.g. {{6000000/735}}. You may use **bold** and simple "- " bullet lists. No headings, no LaTeX, no code blocks.

Safety and scope:
- Only help with geography and study skills. For anything else, kindly steer back to geography.
- Treat every place and people with respect; avoid stereotypes.
- Never ask for or repeat personal information. If the learner seems upset or unsafe, encourage them to talk to a parent or trusted adult.`;

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

function cleanTurns(raw: unknown): ChatTurn[] {
  if (!Array.isArray(raw)) return [];
  const turns = raw
    .filter((m): m is ChatTurn => !!m && typeof m === "object" && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))
    .slice(-10);
  // The conversation must start with a user turn and alternate.
  while (turns.length && turns[0].role !== "user") turns.shift();
  const out: ChatTurn[] = [];
  for (const t of turns) {
    if (out.length && out[out.length - 1].role === t.role) out[out.length - 1] = { role: t.role, content: `${out[out.length - 1].content}\n\n${t.content}` };
    else out.push(t);
  }
  return out;
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "Professor Atlas isn't switched on for this site yet — ask a grown-up to add an AI key." }, { status: 503 });
  }
  const account = await currentAccount().catch(() => null);
  if (!account) return NextResponse.json({ error: "Professor Atlas is available once you're signed in to a family account." }, { status: 401 });
  if (!throttle(`ai:${account.id}`, 30, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Professor Atlas needs a short break — try again in a few minutes." }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const turns = cleanTurns(body.messages);
  if (!turns.length || turns[turns.length - 1].role !== "user") return NextResponse.json({ error: "Ask a question first." }, { status: 400 });
  const context = typeof body.context === "string" ? body.context.slice(0, 4000) : "";

  try {
    const allowed =
      (await takeDailyAllowance(`ai-${account.id}`, dailyLimit("AI_ACCOUNT_DAILY_LIMIT", 100))) && (await takeDailyAllowance("ai-site", dailyLimit("AI_DAILY_LIMIT", 300)));
    if (!allowed) return NextResponse.json({ error: RESTING }, { status: 429 });
  } catch {
    // Can't count it, so don't spend on it.
    return NextResponse.json({ error: "Professor Atlas couldn't answer just now. Please try again." }, { status: 503 });
  }

  // Per-request context goes in the first user turn (after the cached system prompt).
  const messages: Anthropic.Beta.BetaMessageParam[] = turns.map((t, i) => ({
    role: t.role,
    content: i === 0 && context ? `What I'm working on in the app:\n${context}\n\n---\n\n${t.content}` : t.content,
  }));

  const model = process.env.AI_MODEL || DEFAULT_MODEL;
  const client = new Anthropic();
  try {
    const useFallback = FALLBACK_MODELS.has(model);
    const response = await client.beta.messages.create({
      model,
      max_tokens: 2000,
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
      output_config: { effort: "low" },
      messages,
      ...(useFallback ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const } : {}),
    });
    if (response.stop_reason === "refusal") {
      return NextResponse.json({ reply: "Let's keep our chat about geography. What are you working on?" });
    }
    const reply = response.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return NextResponse.json({ reply: reply || "Hmm, I lost my train of thought — could you ask that again?" });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ error: "Lots of people are asking Professor Atlas right now — try again in a minute." }, { status: 429 });
    }
    if (error instanceof Anthropic.APIError) {
      console.error("AI tutor API error", error.status, error.message);
      return NextResponse.json({ error: "Professor Atlas couldn't answer just now. Please try again." }, { status: 502 });
    }
    console.error("AI tutor error", error);
    return NextResponse.json({ error: "Professor Atlas couldn't answer just now. Please try again." }, { status: 500 });
  }
}
