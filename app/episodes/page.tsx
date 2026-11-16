import { Suspense } from "react";
import type { Metadata } from "next";
import { EpisodesHub } from "@/components/EpisodesHub";

export const metadata: Metadata = {
  title: "Off The Map — a Claude Sitcom",
  description: "Animated sitcom episodes for every Year 8 Geography topic, with pause challenges.",
};

export default function EpisodesPage() {
  return (
    <Suspense fallback={<p className="p-6 text-slate-600">Loading episodes…</p>}>
      <EpisodesHub />
    </Suspense>
  );
}
