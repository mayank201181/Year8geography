import type { Metadata } from "next";
import { SprintRunner } from "@/components/SprintRunner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Key-term sprint",
  description: "Key-term sprint — quick-fire recall of geography key terms and skills from every Year 8 unit (population, extreme environments, coasts, cities and map skills), timed or untimed.",
};

export default function SprintPage() {
  return <SprintRunner />;
}
