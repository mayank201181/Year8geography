"use client";
// Plays one "Off The Map" (Claude Sitcom) episode. Watching 90% of it awards stars once
// (key `sitcom:<topicId>`), which also marks it watched on every device via the synced store.
import { useRef } from "react";
import type { SitcomEpisode } from "@/lib/sitcom";
import { useStore } from "@/lib/store";

export const SITCOM_STARS = 5;
export const sitcomKey = (topicId: string) => `sitcom:${topicId}`;

export function formatDuration(sec: number): string {
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
}

export function EpisodePlayer({ episode, autoPlay = false, onEnded }: { episode: SitcomEpisode; autoPlay?: boolean; onEnded?: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  const { award, hasAward } = useStore();
  const done = () => {
    if (!hasAward(sitcomKey(episode.topicId))) award(sitcomKey(episode.topicId), SITCOM_STARS);
  };
  return (
    <video
      ref={ref}
      key={episode.src}
      src={episode.src}
      poster={episode.poster}
      controls
      playsInline
      preload="metadata"
      autoPlay={autoPlay}
      className="aspect-video w-full rounded-xl bg-black"
      onTimeUpdate={() => {
        const v = ref.current;
        if (v && v.duration && v.currentTime / v.duration > 0.9) done();
      }}
      onEnded={() => {
        done();
        onEnded?.();
      }}
    >
      Your browser can&apos;t play this video.
    </video>
  );
}
