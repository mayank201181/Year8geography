import type { TopicExtras } from "../types";
import { populationDistributionExtras } from "./population-distribution";
import { populationGrowthExtras } from "./population-growth";
import { demographyExtras } from "./demography";
import { populationChangeExtras } from "./population-change";
import { populationPoliciesExtras } from "./population-policies";
import { extremeEnvironmentsExtras } from "./extreme-environments";
import { extremeWeatherExtras } from "./extreme-weather";
import { adaptationsExtras } from "./adaptations";
import { extremeTourismExtras } from "./extreme-tourism";
import { coastalProcessesExtras } from "./coastal-processes";
import { coastalLandformsExtras } from "./coastal-landforms";
import { coralReefsExtras } from "./coral-reefs";
import { citiesMegacitiesExtras } from "./cities-megacities";
import { lagosExtras } from "./lagos";
import { sustainableCitiesExtras } from "./sustainable-cities";

export const EXTRAS: Record<string, TopicExtras> = {
  "population-distribution": populationDistributionExtras,
  "population-growth": populationGrowthExtras,
  "demography": demographyExtras,
  "population-change": populationChangeExtras,
  "population-policies": populationPoliciesExtras,
  "extreme-environments": extremeEnvironmentsExtras,
  "extreme-weather": extremeWeatherExtras,
  "adaptations": adaptationsExtras,
  "extreme-tourism": extremeTourismExtras,
  "coastal-processes": coastalProcessesExtras,
  "coastal-landforms": coastalLandformsExtras,
  "coral-reefs": coralReefsExtras,
  "cities-megacities": citiesMegacitiesExtras,
  "lagos": lagosExtras,
  "sustainable-cities": sustainableCitiesExtras,
};

const EMPTY: TopicExtras = {};
export function getExtras(id: string): TopicExtras {
  return EXTRAS[id] ?? EMPTY;
}
