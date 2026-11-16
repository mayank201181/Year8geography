import type { Topic } from "../types";
import { TOPIC_META } from "./_meta";

import { populationDistribution } from "./population-distribution";
import { populationGrowth } from "./population-growth";
import { demography } from "./demography";
import { populationChange } from "./population-change";
import { populationPolicies } from "./population-policies";
import { extremeEnvironments } from "./extreme-environments";
import { extremeWeather } from "./extreme-weather";
import { adaptations } from "./adaptations";
import { extremeTourism } from "./extreme-tourism";
import { coastalProcesses } from "./coastal-processes";
import { coastalLandforms } from "./coastal-landforms";
import { coralReefs } from "./coral-reefs";
import { citiesMegacities } from "./cities-megacities";
import { lagos } from "./lagos";
import { sustainableCities } from "./sustainable-cities";

const REGISTRY: Record<string, Topic> = {
  "population-distribution": populationDistribution,
  "population-growth": populationGrowth,
  "demography": demography,
  "population-change": populationChange,
  "population-policies": populationPolicies,
  "extreme-environments": extremeEnvironments,
  "extreme-weather": extremeWeather,
  "adaptations": adaptations,
  "extreme-tourism": extremeTourism,
  "coastal-processes": coastalProcesses,
  "coastal-landforms": coastalLandforms,
  "coral-reefs": coralReefs,
  "cities-megacities": citiesMegacities,
  "lagos": lagos,
  "sustainable-cities": sustainableCities,
};

/** All topics in curriculum order. */
export const ALL_TOPICS: Topic[] = TOPIC_META.map((m) => REGISTRY[m.id]).filter(Boolean);

export function getTopic(id: string): Topic | undefined {
  return REGISTRY[id];
}

export function topicIds(): string[] {
  return TOPIC_META.map((m) => m.id);
}
