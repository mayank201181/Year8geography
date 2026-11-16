"use client";
// /episodes — every "Off The Map" episode in one place: a player plus a playlist,
// with an optional binge mode that rolls straight into the next episode.
import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SITCOM_EPISODES } from "@/lib/sitcom";
import { useStore } from "@/lib/store";
import { EpisodePlayer, formatDuration, sitcomKey } from "./EpisodePlayer";

export function EpisodesHub() {
  const router = useRouter();
  const params = useSearchParams();
  const { hasAward } = useStore();
  const [binge, setBinge] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  const eps = SITCOM_EPISODES;
  const watched = (topicId: string) => hasAward(sitcomKey(topicId));
  const requested = Number(params.get("ep"));
  const current = eps.find((e) => e.num === requested) ?? eps.find((e) => !watched(e.topicId)) ?? eps[0];
  const watchedCount = eps.filter((e) => watched(e.topicId)).length;
  const totalMin = Math.round(eps.reduce((s, e) => s + e.durationSec, 0) / 60);

  if (!current) {
    return <p className="mx-auto max-w-4xl p-6 text-slate-600">Episodes are on their way — check back soon.</p>;
  }

  const pick = (num: number, play: boolean) => {
    setAutoPlay(play);
    router.replace(`/episodes?ep=${num}`, { scroll: false });
    if (play) window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const next = eps[eps.indexOf(current) + 1];

  return (
    <div className="mx-auto max-w-5xl space-y-5 px-4 py-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="flex flex-wrap gap-2 text-xs font-bold">
            <span className="rounded-full bg-sky-100 px-2.5 py-1 text-sky-800">🎬 A Claude Sitcom · Season 1 · {eps.length} episode{eps.length === 1 ? "" : "s"} · {totalMin} min</span>
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-amber-800">⭐ {watchedCount}/{eps.length} watched</span>
          </div>
          <h1 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">Off The Map</h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Priya (12), her know-it-all Dad, Mum, Nani — and Atlas, a battered old desk globe who can spin the family anywhere on Earth.
            One episode per Year 8 Geography topic, each ending with three pause challenges.
          </p>
        </div>
        <label className="flex cursor-pointer items-center gap-2 text-sm font-bold text-slate-700">
          <input type="checkbox" checked={binge} onChange={(e) => setBinge(e.target.checked)} className="h-5 w-5" />
          Binge mode (auto-play next)
        </label>
      </header>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm sm:p-2">
        <EpisodePlayer episode={current} autoPlay={autoPlay} onEnded={() => (binge && next ? pick(next.num, true) : undefined)} />
        <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-1 pt-3">
          <div className="min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-sky-700">
              Episode {current.num} · {current.topicShort}
            </div>
            <h2 className="text-lg font-extrabold text-slate-900">&ldquo;{current.title}&rdquo;</h2>
            {current.logline ? <p className="text-sm text-slate-600">{current.logline}</p> : null}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href={`/topic/${current.topicId}?tab=quiz`} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">
              ⚡ Quiz this topic
            </Link>
            {next ? (
              <button type="button" className="rounded-xl bg-sky-600 px-3 py-2 text-sm font-bold text-white hover:bg-sky-700" onClick={() => pick(next.num, true)}>
                Next: Ep {next.num} →
              </button>
            ) : null}
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-extrabold text-slate-900">All episodes</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {eps.map((e) => (
            <button
              key={e.num}
              type="button"
              onClick={() => pick(e.num, true)}
              className={`overflow-hidden rounded-2xl border bg-white p-0 text-left shadow-sm transition-colors hover:border-sky-400 ${e.num === current.num ? "border-2 border-sky-500" : "border-slate-200"}`}
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={e.poster} alt="" width={640} height={360} loading="lazy" className="aspect-video w-full object-cover" />
                <span className="absolute bottom-2 right-2 rounded-md bg-black/75 px-1.5 py-0.5 text-xs font-bold text-white">{formatDuration(e.durationSec)}</span>
                {watched(e.topicId) ? <span className="absolute left-2 top-2 rounded-md bg-emerald-600 px-1.5 py-0.5 text-xs font-bold text-white">Watched ✓</span> : null}
              </div>
              <div className="p-3">
                <div className="text-xs font-bold text-sky-700">Ep {e.num} · {e.topicShort}</div>
                <div className="font-extrabold leading-snug text-slate-900">{e.title}</div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
