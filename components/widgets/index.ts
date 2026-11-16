// Registry of every topic's interactive widgets. Each module in this folder exports its widgets as
// named components; the key a topic lists in `extras.interactives` is "<topic-id>:<ExportName>".
import type { FC } from "react";
import * as populationDistribution from "./population-distribution";
import * as populationGrowth from "./population-growth";
import * as demography from "./demography";
import * as populationChange from "./population-change";
import * as populationPolicies from "./population-policies";
import * as extremeEnvironments from "./extreme-environments";
import * as extremeWeather from "./extreme-weather";
import * as adaptations from "./adaptations";
import * as extremeTourism from "./extreme-tourism";
import * as coastalProcesses from "./coastal-processes";
import * as coastalLandforms from "./coastal-landforms";
import * as coralReefs from "./coral-reefs";
import * as citiesMegacities from "./cities-megacities";
import * as lagos from "./lagos";
import * as sustainableCities from "./sustainable-cities";

const MODULES: Record<string, Record<string, unknown>> = {
  "population-distribution": populationDistribution,
  "population-growth": populationGrowth,
  demography,
  "population-change": populationChange,
  "population-policies": populationPolicies,
  "extreme-environments": extremeEnvironments,
  "extreme-weather": extremeWeather,
  adaptations,
  "extreme-tourism": extremeTourism,
  "coastal-processes": coastalProcesses,
  "coastal-landforms": coastalLandforms,
  "coral-reefs": coralReefs,
  "cities-megacities": citiesMegacities,
  lagos,
  "sustainable-cities": sustainableCities,
};

export const WIDGETS: Record<string, FC> = {};
for (const [topic, mod] of Object.entries(MODULES)) {
  for (const [name, comp] of Object.entries(mod)) {
    if (typeof comp === "function" && /^[A-Z]/.test(name)) WIDGETS[`${topic}:${name}`] = comp as FC;
  }
}
