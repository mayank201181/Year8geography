"use client";
// The topic's Watch tab: this topic's "Off The Map" (Claude Sitcom) episode.
import Link from "next/link";
import type { Topic } from "@/lib/types";
import { sitcomEpisodeFor } from "@/lib/sitcom";
import { useStore } from "@/lib/store";
import { EpisodePlayer, SITCOM_STARS, formatDuration, sitcomKey } from "./EpisodePlayer";

export function LessonTab({ topic }: { topic: Topic }) {
  const ep = sitcomEpisodeFor(topic.id);
  const { hasAward } = useStore();
  if (!ep) {
    return (
      <p className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-500">
        This topic&apos;s Claude Sitcom episode is being made. Meanwhile, <Link href="/episodes" className="font-semibold text-sky-700 underline">watch the others</Link>!
      </p>
    );
  }
  const watched = hasAward(sitcomKey(topic.id));
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border-l-4 border-sky-400 bg-sky-50 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-sky-700">🎬 Claude Sitcom · Off The Map · Episode {ep.num}</p>
        <h2 className="mt-1 text-xl font-extrabold text-slate-900">&ldquo;{ep.title}&rdquo;</h2>
        <p className="mt-1 text-sm text-slate-700">{ep.logline}</p>
        <p className="mt-2 text-xs font-semibold text-slate-500">
          {formatDuration(ep.durationSec)} · captions on screen · ends with 3 pause challenges · {watched ? "Watched ✓" : `+${SITCOM_STARS} ⭐ when you finish`}
        </p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm sm:p-2">
        <EpisodePlayer episode={ep} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Link href={`/topic/${topic.id}?tab=quiz`} className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700">⚡ Now try the Quick Quiz</Link>
        <Link href={`/episodes?ep=${ep.num}`} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">📺 All episodes</Link>
      </div>
    </div>
  );
}
