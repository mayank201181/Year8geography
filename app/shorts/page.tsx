import { Suspense } from "react";
import type { Metadata } from "next";
import { ShortsHub } from "@/components/ShortsHub";

export const metadata: Metadata = {
  title: "Concept Shorts — Year 8 Geography",
  description: "Bite-sized vertical 9:16 concept Shorts for every topic in Year 8 Geography.",
};

export default function ShortsPage() {
  return (
    <Suspense fallback={<p className="p-6">Loading Concept Shorts…</p>}>
      <ShortsHub subjectLabel="Year 8 Geography" />
    </Suspense>
  );
}
