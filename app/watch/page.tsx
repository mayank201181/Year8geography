import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { WatchHub } from "@/components/WatchHub";

export const metadata: Metadata = {
  title: "Watch — Studio Masterclasses & Beast Sitcoms",
  description: "Interactive Studio Masterclass whiteboards, cartoon sitcoms and animated episodes for every Year 8 Geography topic.",
};

export default function WatchPage() {
  const items = TOPICS.map((t, idx) => ({
    id: t.id,
    num: idx + 1,
    title: t.title,
    icon: t.icon,
    strand: t.strand,
    summary: t.summary,
  }));
  return <WatchHub topics={items} />;
}
