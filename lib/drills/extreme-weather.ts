// Skill drills for "Extreme Weather & Forecasting".
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { num, big, roundTo, clean } from "./helpers.ts";

const T = "extreme-weather";

// ---------------------------------------------------------------------------
// Fact-bank machinery
// ---------------------------------------------------------------------------

interface Fact {
  /** Clues: each must point to exactly one answer. */
  clues: string[];
  accept: string[];
  /** Number answer instead of text. */
  value?: number;
  /** Optional tolerance for a number answer. */
  tolerance?: number;
  /** 1 = core fact (all tiers), 3 = stretch only (tier 3, sometimes tier 2). */
  level: 1 | 2 | 3;
  why: string;
  traps?: Trap[];
}

function pool(bank: Fact[], tier: 1 | 2 | 3): Fact[] {
  if (tier === 1) return bank.filter((f) => f.level === 1);
  if (tier === 2) return bank.filter((f) => f.level <= 2);
  return bank.filter((f) => f.level >= 2);
}

function factItem(rng: Rng, bank: Fact[], tier: 1 | 2 | 3, templates: string[], hint: string): DrillItem {
  const f = rng.pick(pool(bank, tier));
  const clue = rng.pick(f.clues);
  const prompt = rng.pick(templates).replace("#", clue);
  const answer: AnswerSpec =
    f.value !== undefined ? { type: "number", value: f.value, ...(f.tolerance ? { tolerance: f.tolerance } : {}) } : { type: "text", accept: f.accept, display: f.accept[0] };
  return { prompt, answer, solution: [f.why], hint, traps: f.traps };
}

const tt = (accept: string[], feedback: string): Trap => ({ spec: { type: "text", accept }, feedback });

// ---------------------------------------------------------------------------
// 1. Types of extreme weather
// ---------------------------------------------------------------------------

const HAZARDS: Fact[] = [
  {
    clues: [
      "a huge spinning storm, hundreds of kilometres across, that forms over warm tropical seas and has a calm eye at its centre",
      "a giant low-pressure storm fed by warm ocean water, whose winds can exceed 119 km/h, with torrential rain and storm surges",
    ],
    accept: ["tropical storm", "tropical cyclone", "hurricane", "typhoon", "cyclone"],
    level: 1,
    why: "This is a **tropical storm** (called a hurricane, typhoon or cyclone depending on the ocean). It draws its energy from warm sea water above about 26.5 °C.",
  },
  {
    clues: [
      "a long period with much less rain than usual, so rivers, reservoirs and soils dry up and water runs short",
      "months or even years of below-average rainfall that leave crops failing and water supplies low",
    ],
    accept: ["drought"],
    level: 1,
    why: "A **drought** is a long spell of below-average rainfall that leads to a water shortage. It builds slowly, unlike most other hazards.",
  },
  {
    clues: [
      "several days in a row of unusually hot weather for that place and time of year",
      "a prolonged spell of extreme heat that puts elderly people and outdoor workers at risk of heatstroke",
    ],
    accept: ["heatwave", "heat wave"],
    level: 1,
    why: "A **heatwave** is a run of days that are unusually hot for that place — it is defined relative to what is normal there.",
  },
  {
    clues: [
      "a snowstorm with strong winds that blow the snow around until you can barely see a few metres",
      "heavy snow plus gale-force winds and freezing temperatures, causing white-out conditions",
    ],
    accept: ["blizzard"],
    level: 1,
    why: "A **blizzard** needs strong wind as well as snow — it is the blowing snow that cuts visibility.",
    traps: [tt(["snowstorm", "snow storm", "snow"], "Close — but the strong wind and white-out make it a *blizzard*, not just a snowstorm.")],
  },
  {
    clues: [
      "strong winds lift loose sand and dust from dry ground into a moving wall that can blot out the Sun",
      "a towering wall of dust sweeping across a desert, known in Sudan as a haboob",
    ],
    accept: ["sandstorm", "sand storm", "dust storm", "duststorm", "haboob"],
    level: 1,
    why: "This is a **sandstorm** (or dust storm). Strong winds pick up loose, dry particles where there is little vegetation to hold the ground together.",
  },
  {
    clues: [
      "water levels rise dangerously within a few hours of very intense rain, often in steep valleys or concrete-covered cities",
      "a sudden, fast-rising flood caused by a burst of heavy rain that the drains and ground cannot cope with",
    ],
    accept: ["flash flood", "flash flooding", "flashflood"],
    level: 1,
    why: "A **flash flood** happens within hours of intense rain. Concrete and steep slopes send water into channels very quickly.",
    traps: [tt(["storm surge"], "A storm surge is the SEA pushed onto the coast by a tropical storm. This is river or drain water rising after rain.")],
  },
  {
    clues: [
      "a narrow, violently spinning column of air that reaches down from a thundercloud to the ground",
      "a funnel-shaped whirlwind, often only tens or hundreds of metres wide, with some of the fastest winds on Earth",
    ],
    accept: ["tornado", "twister"],
    level: 1,
    why: "A **tornado** forms beneath a powerful thunderstorm (cumulonimbus) cloud. It is far narrower than a tropical storm.",
    traps: [tt(["tropical storm", "hurricane", "typhoon", "cyclone"], "Tropical storms are hundreds of kilometres wide and form over warm seas. This narrow funnel from a thundercloud is a tornado.")],
  },
  {
    clues: [
      "a line of thunderstorms that forms over Sumatra or the Strait of Malacca at night and sweeps across Singapore around dawn with gusty winds",
      "the pre-dawn line of storms that hits Singapore from the west, mostly during the south-west monsoon",
    ],
    accept: ["sumatra squall", "sumatras squall", "sumatra squalls", "squall line", "squall"],
    level: 1,
    why: "A **Sumatra squall** is a line of thunderstorms that develops over Sumatra or the Strait of Malacca and travels east to Singapore, usually overnight or in the early morning.",
  },
  {
    clues: [
      "a seasonal change in the main wind direction that brings a wetter season — Singapore has a north-east one and a south-west one",
      "the name for the big seasonal wind pattern that brings Singapore's wettest weather around December and January",
    ],
    accept: ["monsoon", "northeast monsoon", "north-east monsoon"],
    level: 1,
    why: "A **monsoon** is a seasonal reversal of the prevailing wind. Singapore's north-east monsoon (about December to early March) brings the wettest spells.",
  },
  {
    clues: [
      "balls of ice that grow inside a tall thundercloud as strong updrafts carry them up and down, then fall to the ground",
    ],
    accept: ["hail", "hailstones", "hailstone", "hailstorm"],
    level: 2,
    why: "This is **hail**. Each trip up into the freezing top of a cumulonimbus cloud adds another layer of ice.",
  },
  {
    clues: [
      "a giant electrical spark between a thundercloud and the ground, hotter than the surface of the Sun",
    ],
    accept: ["lightning", "lightning strike", "lightning bolt"],
    level: 2,
    why: "**Lightning** is a huge discharge of static electricity built up inside a thundercloud. Thunder is the sound of the air expanding as it is heated.",
    traps: [tt(["thunder"], "Thunder is the SOUND. The flash of electricity itself is lightning.")],
  },
  {
    clues: [
      "the smoky smog that sometimes drifts over Singapore from forest and peatland fires in Sumatra and Kalimantan, usually in the drier months",
    ],
    accept: ["haze", "transboundary haze", "smog"],
    level: 2,
    why: "This is the **haze** — smoke from land and peat fires carried across borders by the wind (so it is called *transboundary* haze).",
  },
  {
    clues: [
      "a tornado that forms over water, sometimes spotted off Singapore's coast",
    ],
    accept: ["waterspout", "water spout"],
    level: 2,
    why: "A **waterspout** is a spinning column of air over water — a tornado over the sea or a lake.",
  },
  {
    clues: [
      "a warming of the surface waters of the eastern and central Pacific Ocean that often brings drought to Indonesia and Australia",
    ],
    accept: ["el nino", "el niño", "el nino event"],
    level: 3,
    why: "**El Niño** shifts warm water and rising air eastwards across the Pacific, so South-east Asia and Australia often get less rain and a higher drought risk.",
    traps: [tt(["la nina", "la niña"], "La Niña is the opposite phase — it usually brings MORE rain to South-east Asia and Australia.")],
  },
  {
    clues: [
      "the region of the central USA where tornadoes are most common, because cold dry air from Canada meets warm moist air from the Gulf of Mexico",
    ],
    accept: ["tornado alley"],
    level: 3,
    why: "**Tornado Alley** in the US Great Plains is where contrasting air masses meet, creating the violent thunderstorms that spawn tornadoes.",
  },
  {
    clues: [
      "the scale that rates how strong a tornado was by surveying the damage it caused",
    ],
    accept: ["enhanced fujita scale", "fujita scale", "ef scale", "f scale", "enhanced fujita"],
    level: 3,
    why: "The **(Enhanced) Fujita scale** — EF0 to EF5 — estimates a tornado's wind speed from the damage it does.",
    traps: [tt(["saffir-simpson scale", "saffir simpson scale", "saffir-simpson"], "Saffir–Simpson rates hurricanes by measured wind speed. Tornadoes are rated from damage on the Fujita scale.")],
  },
  {
    clues: [
      "the period between Singapore's two monsoons (around April–May and October–November) when winds are light and afternoon thunderstorms are common",
    ],
    accept: ["inter-monsoon", "intermonsoon", "inter monsoon", "inter-monsoon period"],
    level: 3,
    why: "The **inter-monsoon** periods have light, variable winds. Strong afternoon heating then builds thunderstorms.",
  },
  {
    clues: [
      "the effect that makes cities several degrees warmer than the countryside, because concrete and roads store heat and air-conditioners pump it out",
    ],
    accept: ["urban heat island", "heat island", "urban heat island effect", "uhi"],
    level: 3,
    why: "The **urban heat island** makes heatwaves worse in cities. Singapore fights it with greenery, parks and cool roofs.",
  },
];

// ---------------------------------------------------------------------------
// 2. Tropical storm names by region
// ---------------------------------------------------------------------------

type StormName = "hurricane" | "typhoon" | "cyclone";
const PLACES: { place: string; name: StormName; ocean: string; level: 1 | 3 }[] = [
  { place: "the Philippines", name: "typhoon", ocean: "the north-west Pacific", level: 1 },
  { place: "Japan", name: "typhoon", ocean: "the north-west Pacific", level: 1 },
  { place: "Taiwan", name: "typhoon", ocean: "the north-west Pacific", level: 1 },
  { place: "Hong Kong", name: "typhoon", ocean: "the north-west Pacific", level: 1 },
  { place: "Vietnam", name: "typhoon", ocean: "the north-west Pacific (via the South China Sea)", level: 1 },
  { place: "South Korea", name: "typhoon", ocean: "the north-west Pacific", level: 3 },
  { place: "Guam", name: "typhoon", ocean: "the north-west Pacific", level: 3 },
  { place: "Florida", name: "hurricane", ocean: "the North Atlantic", level: 1 },
  { place: "Cuba", name: "hurricane", ocean: "the North Atlantic (Caribbean Sea)", level: 1 },
  { place: "the Bahamas", name: "hurricane", ocean: "the North Atlantic", level: 1 },
  { place: "Jamaica", name: "hurricane", ocean: "the North Atlantic (Caribbean Sea)", level: 1 },
  { place: "New Orleans", name: "hurricane", ocean: "the North Atlantic (Gulf of Mexico)", level: 1 },
  { place: "Puerto Rico", name: "hurricane", ocean: "the North Atlantic", level: 3 },
  { place: "the Pacific coast of Mexico", name: "hurricane", ocean: "the north-east Pacific", level: 3 },
  { place: "Hawaii", name: "hurricane", ocean: "the central North Pacific", level: 3 },
  { place: "Bangladesh", name: "cyclone", ocean: "the Indian Ocean (Bay of Bengal)", level: 1 },
  { place: "Myanmar", name: "cyclone", ocean: "the Indian Ocean (Bay of Bengal)", level: 1 },
  { place: "Mozambique", name: "cyclone", ocean: "the south-west Indian Ocean", level: 1 },
  { place: "Queensland in Australia", name: "cyclone", ocean: "the South Pacific (Coral Sea)", level: 1 },
  { place: "Madagascar", name: "cyclone", ocean: "the south-west Indian Ocean", level: 1 },
  { place: "Odisha on India's east coast", name: "cyclone", ocean: "the Indian Ocean (Bay of Bengal)", level: 3 },
  { place: "Fiji", name: "cyclone", ocean: "the South Pacific", level: 3 },
  { place: "Vanuatu", name: "cyclone", ocean: "the South Pacific", level: 3 },
  { place: "Oman", name: "cyclone", ocean: "the Indian Ocean (Arabian Sea)", level: 3 },
  { place: "Western Australia", name: "cyclone", ocean: "the south-east Indian Ocean", level: 3 },
];
const NAME_ACCEPT: Record<StormName, string[]> = {
  hurricane: ["hurricane", "hurricanes"],
  typhoon: ["typhoon", "typhoons", "super typhoon"],
  cyclone: ["cyclone", "tropical cyclone", "severe tropical cyclone", "cyclonic storm", "severe cyclonic storm"],
};

// ---------------------------------------------------------------------------
// 3. Tropical storm formation, structure, case studies
// ---------------------------------------------------------------------------

const STORM_FACTS: Fact[] = [
  { clues: ["the calm, often cloud-free centre of a tropical storm, where air sinks"], accept: ["eye", "the eye", "eye of the storm"], level: 1, why: "The **eye** is calm because air sinks there, warming and drying so clouds cannot form.", traps: [tt(["eyewall", "eye wall"], "The eyewall SURROUNDS the eye and has the fiercest winds. The calm centre itself is the eye.")] },
  { clues: ["the ring of towering cloud around the centre of a tropical storm, with the strongest winds and heaviest rain"], accept: ["eyewall", "eye wall"], level: 1, why: "The **eyewall** is where warm, moist air rises fastest, so it has the most violent winds and rain.", traps: [tt(["eye"], "The eye is the calm centre. The wall of cloud around it, with the strongest winds, is the eyewall.")] },
  { clues: ["the spiral arms of thunderstorms that curl outwards from the centre of a tropical storm"], accept: ["rain bands", "rainbands", "rain band", "spiral rain bands", "spiral bands", "spiral rainbands"], level: 1, why: "**Rain bands** spiral out from the eyewall and bring bursts of heavy rain and gusts between calmer gaps." },
  { clues: ["a dome of seawater pushed onto the coast by a tropical storm's winds and low pressure — often its deadliest hazard"], accept: ["storm surge", "surge"], level: 1, why: "A **storm surge** can raise sea level by several metres and flood low coasts, as in Typhoon Haiyan (2013).", traps: [tt(["flash flood", "flash flooding", "tsunami"], "A tsunami is caused by an earthquake, and a flash flood by rain. Sea pushed ashore by a storm's wind is a storm surge.")] },
  { clues: ["the effect of the Earth's rotation that makes a tropical storm spin", "the effect, caused by Earth's spin, that is almost zero at the equator — which is why storms rarely form within 5° of it"], accept: ["coriolis effect", "coriolis force", "coriolis"], level: 1, why: "The **Coriolis effect** deflects moving air because the Earth rotates. It is too weak near the equator to start a storm spinning." },
  { clues: ["a big change in wind speed or direction with height, which tears a developing tropical storm apart"], accept: ["wind shear", "vertical wind shear", "shear"], level: 2, why: "Strong **wind shear** tilts and rips apart the tall column of rising air, so storms need LOW wind shear to grow." },
  { clues: ["the moment the centre of a tropical storm crosses the coast onto land"], accept: ["landfall", "making landfall", "make landfall"], level: 2, why: "At **landfall** the worst winds and surge hit the coast. Afterwards the storm weakens because it is cut off from warm sea water." },
  { clues: ["the 1–5 scale used to rate hurricanes by their sustained wind speed"], accept: ["saffir-simpson scale", "saffir simpson scale", "saffir-simpson", "saffir simpson", "saffir-simpson hurricane wind scale"], level: 1, why: "The **Saffir–Simpson scale** runs from Category 1 (119–153 km/h) to Category 5 (252 km/h or more)." },
  { clues: ["the change of state as rising water vapour turns into cloud droplets, releasing the heat that powers a tropical storm"], accept: ["condensation", "condensing"], level: 2, why: "**Condensation** releases latent heat, warming the air so it rises even faster — the storm's engine.", traps: [tt(["evaporation", "evaporating"], "Evaporation takes water INTO the air from the warm sea. The heat is released when vapour turns back to droplets: condensation.")] },
  { clues: ["the process that takes huge amounts of water vapour from the warm ocean surface into the air, fuelling a tropical storm"], accept: ["evaporation", "evaporating"], level: 2, why: "**Evaporation** from sea water above about 26.5 °C supplies the moisture and energy the storm needs.", traps: [tt(["condensation"], "Condensation happens higher up, in the clouds. Water leaving the warm sea surface is evaporation.")] },
  { clues: ["the earliest stage of a tropical storm system, with sustained winds below about 63 km/h"], accept: ["tropical depression", "depression"], level: 3, why: "A **tropical depression** becomes a named tropical storm at about 63 km/h, and a hurricane/typhoon/cyclone at 119 km/h." },
  { clues: ["what happens to the name of a tropical storm that was so deadly or destructive that it will never be used again"], accept: ["retired", "it is retired", "retirement", "name is retired"], level: 3, why: "The World Meteorological Organization **retires** names of especially deadly storms, such as Katrina (2005) and Haiyan (2013)." },
  { clues: ["the direction a tropical storm spins in the northern hemisphere (clockwise or anticlockwise)"], accept: ["anticlockwise", "anti-clockwise", "counterclockwise", "counter-clockwise", "anti clockwise", "counter clockwise"], level: 2, why: "Northern-hemisphere storms spin **anticlockwise**; southern-hemisphere storms spin clockwise — both because of the Coriolis effect.", traps: [tt(["clockwise"], "That's the southern hemisphere. In the northern hemisphere air spirals in anticlockwise.")] },
  { clues: ["the direction a tropical cyclone spins in the southern hemisphere, for example near Australia (clockwise or anticlockwise)"], accept: ["clockwise"], level: 3, why: "Southern-hemisphere cyclones spin **clockwise**, the opposite way to northern-hemisphere storms.", traps: [tt(["anticlockwise", "anti-clockwise", "counterclockwise", "counter-clockwise"], "Anticlockwise is the northern hemisphere. The Coriolis effect reverses south of the equator.")] },
  { clues: ["the country hit by Typhoon Haiyan in November 2013, where a huge storm surge devastated the city of Tacloban"], accept: ["philippines", "the philippines"], level: 2, why: "Typhoon Haiyan hit the **Philippines** in 2013; more than 6,000 people died, many in the storm surge." },
  { clues: ["the US city where Hurricane Katrina (2005) broke the flood defences (levees), flooding about 80% of it"], accept: ["new orleans"], level: 2, why: "**New Orleans** lies largely below sea level; when Katrina's surge broke the levees, about 80% of the city flooded." },
  { clues: ["the country where Cyclone Nargis (2008) flooded the low Irrawaddy delta"], accept: ["myanmar", "burma"], level: 3, why: "Cyclone Nargis struck **Myanmar** in 2008; its storm surge swept across the flat, crowded Irrawaddy delta." },
  { clues: ["the African country where Cyclone Idai (2019) devastated the port city of Beira"], accept: ["mozambique"], level: 3, why: "Cyclone Idai hit **Mozambique** in March 2019, flattening much of Beira and flooding huge areas inland." },
  { clues: ["the minimum sea-surface temperature, in °C, generally needed for a tropical storm to form"], accept: [], value: 26.5, tolerance: 0.5, level: 1, why: "Sea water must be at least about **26.5 °C** (some textbooks round this to 26–27 °C) to supply enough heat and moisture." },
  { clues: ["the highest category on the Saffir–Simpson scale (give the number)"], accept: [], value: 5, level: 1, why: "**Category 5** is the top: sustained winds of 252 km/h or more." },
  { clues: ["the minimum distance from the equator, in degrees of latitude, where tropical storms usually form"], accept: [], value: 5, level: 2, why: "Storms usually form at least **5°** from the equator, where the Coriolis effect is strong enough to make them spin." },
  { clues: ["the sustained wind speed, in km/h, at which a tropical storm becomes a Category 1 hurricane"], accept: [], value: 119, level: 3, why: "**119 km/h** is the start of Category 1 on the Saffir–Simpson scale." },
];

// ---------------------------------------------------------------------------
// 4. Weather instruments
// ---------------------------------------------------------------------------

const INSTRUMENTS: Fact[] = [
  { clues: ["the instrument that measures air temperature, in °C", "a glass tube of liquid that expands up a scale as the air warms"], accept: ["thermometer", "max-min thermometer", "maximum-minimum thermometer", "digital thermometer"], level: 1, why: "A **thermometer** measures temperature in °C." },
  { clues: ["a funnel and measuring cylinder that collects rain, recorded in millimetres", "the instrument for measuring precipitation in mm — best sunk into open ground away from trees and buildings"], accept: ["rain gauge", "raingauge", "rain gage"], level: 1, why: "A **rain gauge** collects rainfall; you read the depth in mm, usually at the same time each day." },
  { clues: ["the instrument that measures air pressure, in hectopascals (millibars)", "an instrument whose falling readings warn that a depression and wet, windy weather may be on the way"], accept: ["barometer", "aneroid barometer", "barograph"], level: 1, why: "A **barometer** measures air pressure in hPa (= millibars). Falling pressure usually means unsettled weather.", traps: [tt(["anemometer"], "An anemometer measures wind SPEED. Air pressure is measured with a barometer.")] },
  { clues: ["the instrument that measures wind speed using spinning cups", "an instrument whose cups turn faster the stronger the wind, giving a reading in km/h"], accept: ["anemometer", "cup anemometer"], level: 1, why: "An **anemometer** measures wind speed; the cups spin faster in stronger wind.", traps: [tt(["barometer"], "A barometer measures air pressure. Wind speed needs an anemometer."), tt(["wind vane", "weather vane", "weathervane"], "A wind vane shows wind DIRECTION, not speed.")] },
  { clues: ["the instrument that shows wind direction by pointing to where the wind is blowing FROM", "an arrow on a pivot with compass points underneath it, showing which way the wind comes from"], accept: ["wind vane", "weather vane", "weathervane", "windvane"], level: 1, why: "A **wind vane** points into the wind, showing the direction it comes FROM (a 'westerly' blows from the west).", traps: [tt(["anemometer"], "An anemometer measures wind SPEED. Direction needs a wind vane."), tt(["windsock", "wind sock"], "A windsock streams AWAY from the wind (it points where the wind is going). The arrow that points to where the wind comes from is a wind vane.")] },
  { clues: ["the instrument that measures humidity (how much water vapour is in the air), as a percentage", "an instrument that uses a wet-bulb and a dry-bulb thermometer side by side to work out humidity"], accept: ["hygrometer", "wet and dry bulb thermometer", "wet-and-dry bulb thermometer", "psychrometer", "whirling hygrometer", "wet and dry bulb"], level: 1, why: "A **hygrometer** measures relative humidity (%). The bigger the gap between wet and dry bulbs, the drier the air." },
  { clues: ["a white, louvred box on legs that shades thermometers from direct sunlight but lets air flow through", "the standard shelter that makes temperature readings fair by keeping instruments out of the sun and rain"], accept: ["stevenson screen", "stevensons screen", "stevenson's screen", "weather screen"], level: 1, why: "A **Stevenson screen** is white to reflect sunlight and has slatted (louvred) sides so air can circulate." },
  { clues: ["the thermometer that records the highest and lowest temperatures since it was last reset", "a thermometer with small markers that stay at the day's extremes"], accept: ["max-min thermometer", "maximum-minimum thermometer", "maximum and minimum thermometer", "max min thermometer", "six's thermometer", "sixs thermometer", "minimum-maximum thermometer"], level: 2, why: "A **max-min thermometer** keeps markers at the highest and lowest temperatures, so you can read both once a day.", traps: [tt(["thermometer"], "Close — which special thermometer keeps a record of BOTH extremes since it was reset?")] },
  { clues: ["a spacecraft that takes pictures of clouds from orbit, used to spot and track tropical storms over the open ocean", "the source of the cloud images shown on TV weather maps, taken from hundreds or thousands of kilometres above Earth"], accept: ["weather satellite", "satellite", "satellites"], level: 2, why: "**Weather satellites** see storms long before they reach land, giving days of warning." },
  { clues: ["equipment that sends out radio waves that bounce off raindrops to show where it is raining right now, and how heavily", "the system Singapore's forecasters use to watch a Sumatra squall approach, by bouncing radio waves off rain"], accept: ["weather radar", "radar", "rain radar", "doppler radar"], level: 2, why: "**Weather radar** detects rain within a few hundred kilometres — ideal for tracking a Sumatra squall towards Singapore." },
  { clues: ["a gas-filled balloon carrying a small instrument pack (a radiosonde) high into the atmosphere to measure temperature, humidity and pressure at different heights", "the way forecasters measure the upper atmosphere directly, by releasing a large balloon twice a day"], accept: ["weather balloon", "balloon", "radiosonde"], level: 3, why: "**Weather balloons** are launched twice a day at hundreds of stations worldwide to feed computer models." },
  { clues: ["a glass ball that focuses the Sun's rays to burn a line on a card, measuring hours of sunshine", "the instrument that measures how many hours of bright sunshine there were in a day"], accept: ["sunshine recorder", "campbell-stokes recorder", "campbell stokes recorder", "campbell-stokes sunshine recorder"], level: 3, why: "A **Campbell–Stokes sunshine recorder** burns a trace only when the Sun is shining, so the burn length gives sunshine hours." },
  { clues: ["the 0–12 scale that estimates wind strength by looking at its effects (smoke, trees, waves) rather than using an instrument", "the wind scale on which force 12 means hurricane force and force 0 means calm"], accept: ["beaufort scale", "beaufort", "beaufort wind scale"], level: 3, why: "The **Beaufort scale** (devised in 1805) runs from 0 (calm) to 12 (hurricane force)." },
  { clues: ["the unit for cloud cover, where the sky is divided into eighths", "the unit used when an observer reports 8 of these for a completely overcast sky"], accept: ["okta", "oktas"], level: 3, why: "Cloud cover is estimated in **oktas**: 0 = clear sky, 8 = completely overcast." },
  { clues: ["the unit air pressure is measured in on weather maps, equal to a millibar", "the unit shown on isobar labels such as 1008 or 996 (abbreviation hPa)"], accept: ["hectopascal", "hectopascals", "hpa", "millibar", "millibars", "mb"], level: 3, why: "Pressure is given in **hectopascals (hPa)**; 1 hPa = 1 millibar. Average sea-level pressure is about 1013 hPa." },
];

// ---------------------------------------------------------------------------
// 5. Forecasting & warnings
// ---------------------------------------------------------------------------

const FORECAST_FACTS: Fact[] = [
  { clues: ["a line on a weather map joining places with equal air pressure", "the curved lines on a weather map labelled with numbers such as 1004 and 1008"], accept: ["isobar", "isobars"], level: 1, why: "**Isobars** join points of equal pressure, usually drawn every 4 hPa on UK charts.", traps: [tt(["isotherm"], "Isotherms join equal TEMPERATURE. Equal pressure lines are isobars.")] },
  { clues: ["an area of LOW pressure with rising air, cloud, rain and often strong winds", "the weather system marked L on a weather map, which usually brings unsettled, wet weather"], accept: ["depression", "low", "low pressure", "low pressure system", "area of low pressure", "mid-latitude cyclone"], level: 1, why: "In a **depression** air rises, cools and condenses into cloud and rain.", traps: [tt(["anticyclone", "high pressure", "high"], "Anticyclones are HIGH pressure with sinking air and settled weather.")] },
  { clues: ["an area of HIGH pressure with sinking air and usually clear, settled weather", "the weather system marked H on a weather map, which can bring heatwaves in summer and frost or fog in winter"], accept: ["anticyclone", "high", "high pressure", "high pressure system", "area of high pressure"], level: 1, why: "In an **anticyclone** air sinks and warms, so clouds struggle to form: clear skies, light winds.", traps: [tt(["depression", "low pressure", "low"], "Depressions are LOW pressure with rising air and rain.")] },
  { clues: ["the boundary where cold air pushes under warm air, drawn on weather maps as a blue line with triangles", "the front that brings a short burst of heavy rain followed by cooler, brighter weather"], accept: ["cold front"], level: 1, why: "A **cold front** brings a narrow band of heavy rain, then cooler, clearer weather.", traps: [tt(["warm front"], "Warm fronts are drawn with red semicircles. Blue triangles mean a cold front.")] },
  { clues: ["the boundary where warm air rises gently over cold air, drawn as a red line with semicircles", "the front that brings thickening cloud and long periods of steady drizzle or rain as it approaches"], accept: ["warm front"], level: 1, why: "A **warm front** brings thickening cloud and long periods of steady rain.", traps: [tt(["cold front"], "Cold fronts are blue triangles. Red semicircles mean a warm front.")] },
  { clues: ["the type of front where a cold front catches up with a warm front, drawn in purple with both triangles and semicircles"], accept: ["occluded front", "occlusion", "occluded"], level: 2, why: "An **occluded front** forms as the faster cold front overtakes the warm front, lifting the warm air off the ground." },
  { clues: ["the general name for the boundary between two air masses of different temperatures"], accept: ["front", "weather front"], level: 2, why: "A **front** is the boundary between air masses; weather changes quickly as it passes." },
  { clues: ["what isobars that are very close together on a weather map tell you about the wind (one word)", "the kind of wind you expect where isobars are tightly packed together (one word)"], accept: ["strong", "stronger", "strong winds", "windy", "very strong", "fast", "high winds"], level: 1, why: "Close isobars mean a steep pressure difference over a short distance, so **strong** winds.", traps: [tt(["weak", "light", "calm", "gentle"], "Widely spaced isobars mean light winds. CLOSE isobars mean strong winds.")] },
  { clues: ["whether air RISES or SINKS in the centre of a depression"], accept: ["rises", "rise", "rising"], level: 2, why: "Air **rises** in a depression, cools and condenses — which is why lows bring cloud and rain.", traps: [tt(["sinks", "sink", "sinking"], "Sinking air belongs to anticyclones (high pressure).")] },
  { clues: ["the direction wind blows around a depression in the northern hemisphere (clockwise or anticlockwise)"], accept: ["anticlockwise", "anti-clockwise", "counterclockwise", "counter-clockwise", "anti clockwise"], level: 2, why: "Winds blow **anticlockwise** (and slightly inwards) around a low in the northern hemisphere.", traps: [tt(["clockwise"], "Clockwise is how winds circle a HIGH in the northern hemisphere.")] },
  { clues: ["a line on a weather map joining places with the same temperature"], accept: ["isotherm", "isotherms"], level: 3, why: "**Isotherms** join equal temperatures (from the Greek *therm*, heat).", traps: [tt(["isobar"], "Isobars join equal PRESSURE. Equal temperature lines are isotherms.")] },
  { clues: ["a line on a map joining places that receive the same amount of rainfall"], accept: ["isohyet", "isohyets"], level: 3, why: "**Isohyets** join places of equal rainfall." },
  { clues: ["a set of many computer-model runs, each started with slightly different data, used to show how likely each outcome is"], accept: ["ensemble", "ensemble forecast", "ensemble forecasting", "ensemble prediction"], level: 3, why: "An **ensemble forecast** shows uncertainty: if most runs agree, forecasters are more confident." },
  { clues: ["the name for the idea that tiny errors in today's weather data grow until long-range forecasts become unreliable"], accept: ["butterfly effect", "chaos", "chaos theory"], level: 3, why: "The **butterfly effect** (chaos) is why forecasts are good for a few days but get less certain further ahead." },
  { clues: ["the agency that issues weather forecasts and heavy-rain warnings for Singapore"], accept: ["meteorological service singapore", "mss", "nea", "national environment agency", "met service singapore"], level: 2, why: "The **Meteorological Service Singapore (MSS)**, part of NEA, issues forecasts and warnings." },
  { clues: ["the UK's national weather service, which started the first public forecasts"], accept: ["met office", "uk met office", "meteorological office"], level: 3, why: "The **Met Office** was founded in 1854 under Robert FitzRoy." },
  { clues: ["the average air pressure at sea level, in hPa (to the nearest whole number)"], accept: [], value: 1013, level: 2, why: "Average sea-level pressure is about **1013 hPa**. Lower is 'low pressure', higher is 'high pressure'." },
  { clues: ["the usual interval, in hPa, between isobars on a UK Met Office surface pressure chart"], accept: [], value: 4, level: 3, why: "UK charts draw isobars every **4 hPa** (…, 1000, 1004, 1008, …)." },
];

const THREE_PS = ["prediction", "protection", "preparation"] as const;
const THREE_PS_ACCEPT: Record<(typeof THREE_PS)[number], string[]> = {
  prediction: ["prediction", "predicting", "predict", "forecasting"],
  protection: ["protection", "protecting", "protect"],
  preparation: ["preparation", "preparing", "prepare", "preparedness"],
};
const THREE_PS_WHY: Record<(typeof THREE_PS)[number], string> = {
  prediction: "**Prediction**: satellites, radar and computer models forecast where and when the hazard will strike.",
  protection: "**Protection**: building defences such as sea walls, storm shelters and stronger buildings.",
  preparation: "**Preparation**: evacuation plans, emergency kits and drills so people know what to do.",
};

// ---------------------------------------------------------------------------
// Helpers for numeric drills
// ---------------------------------------------------------------------------

const SS_TABLE =
  "| Category | Sustained wind (km/h) |\n|---|---|\n| 1 | 119–153 |\n| 2 | 154–177 |\n| 3 | 178–208 |\n| 4 | 209–251 |\n| 5 | 252 or more |";
const SS_BANDS: [number, number][] = [
  [119, 153],
  [154, 177],
  [178, 208],
  [209, 251],
  [252, 300],
];
function ssCategory(kmh: number): number {
  for (let i = SS_BANDS.length - 1; i >= 0; i--) if (kmh >= SS_BANDS[i][0]) return i + 1;
  return 0;
}

function isobarSvg(values: (number | null)[], centre: "L" | "H", qIndex: number): string {
  const cx = 200, cy = 160;
  const parts: string[] = [];
  parts.push('<rect x="0" y="0" width="420" height="320" fill="#ffffff"/>');
  values.forEach((v, i) => {
    const r = 26 * (i + 1);
    parts.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#334155" stroke-width="1.5"/>`);
    const lx = Math.round(cx + r * 0.707);
    const ly = Math.round(cy - r * 0.707);
    const label = i === qIndex ? "?" : v === null ? "" : String(v);
    if (label) {
      const w = label.length * 8 + 6;
      parts.push(`<rect x="${lx - w / 2}" y="${ly - 9}" width="${w}" height="16" fill="${i === qIndex ? "#fecaca" : "#ffffff"}"/>`);
      parts.push(`<text x="${lx}" y="${ly + 4}" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">${label}</text>`);
    }
  });
  parts.push(`<text x="${cx}" y="${cy + 7}" font-size="20" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1f2937">${centre}</text>`);
  parts.push('<text x="10" y="310" font-size="11" font-family="sans-serif" fill="#334155">Isobars in hPa, evenly spaced values</text>');
  return `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Weather map showing ${values.length} concentric isobars around a ${centre === "L" ? "low" : "high"} pressure centre; one isobar is labelled with a question mark">${parts.join("")}</svg>`;
}

const STATIONS = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function sum(xs: number[]): number {
  return xs.reduce((a, b) => a + b, 0);
}

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  {
    id: `${T}.name-the-hazard`,
    topicId: T,
    title: "Name the type of extreme weather",
    level: 1,
    guideRef: "types-of-extreme-weather",
    generate(rng, tier) {
      return factItem(
        rng,
        HAZARDS,
        tier,
        ["Name the type of extreme weather: #.", "Which weather hazard is this? *#*", "Give the term for #."],
        "Picture it: how big is it, how long does it last, and is it about wind, water, heat or cold?",
      );
    },
  },
  {
    id: `${T}.storm-names`,
    topicId: T,
    title: "Hurricane, typhoon or cyclone?",
    level: 1,
    guideRef: "tropical-storms",
    generate(rng, tier) {
      const choices = PLACES.filter((p) => (tier === 1 ? p.level === 1 : tier === 3 ? p.level === 3 || rng.bool(0.3) : true));
      const p = rng.pick(choices);
      const tmpl = rng.pick([
        `A tropical storm is heading for ${p.place}. What is this kind of storm called there: **hurricane**, **typhoon** or **cyclone**?`,
        `Forecasters in ${p.place} warn that a powerful tropical storm will make landfall tomorrow. Which name would they use for it — hurricane, typhoon or cyclone?`,
        `Which regional name is used for a tropical storm that strikes ${p.place}?`,
      ]);
      const others = (["hurricane", "typhoon", "cyclone"] as StormName[]).filter((n) => n !== p.name);
      return {
        prompt: tmpl,
        answer: { type: "text", accept: NAME_ACCEPT[p.name], display: p.name },
        solution: [
          `${p.place[0].toUpperCase() + p.place.slice(1)} is hit by storms from ${p.ocean}.`,
          "Atlantic and north-east Pacific → **hurricane**; north-west Pacific → **typhoon**; Indian Ocean and South Pacific → **cyclone**.",
          `So it is a **${p.name}** — the same weather system, just a different regional name.`,
        ],
        hint: "First work out which ocean the storm comes from — then match the ocean to the name.",
        traps: others.map((o) => ({ spec: { type: "text", accept: NAME_ACCEPT[o] } as AnswerSpec, feedback: `"${o[0].toUpperCase() + o.slice(1)}" is used for a different ocean. Which ocean is next to ${p.place}?` })),
      };
    },
  },
  {
    id: `${T}.instruments`,
    topicId: T,
    title: "Name the weather instrument",
    level: 1,
    guideRef: "measuring-weather",
    generate(rng, tier) {
      return factItem(
        rng,
        INSTRUMENTS,
        tier,
        ["Name the weather instrument or term: #.", "Weather-station quiz — what is this? *#*", "Your school is setting up a weather station. Give the name of the item or term described: #."],
        "Think about WHAT is being measured (temperature, rain, pressure, wind, humidity, sunshine, cloud) and the unit.",
      );
    },
  },
  {
    id: `${T}.storm-facts`,
    topicId: T,
    title: "Tropical storms: formation, structure and case studies",
    level: 2,
    guideRef: "tropical-storms",
    generate(rng, tier) {
      return factItem(
        rng,
        STORM_FACTS,
        tier,
        ["Tropical storms: give #.", "Recall: what is #?", "Knowledge-organiser check — name #."],
        "Picture a tropical storm cross-section: warm sea, rising air, eye, eyewall, rain bands — and what happens at the coast.",
      );
    },
  },
  {
    id: `${T}.saffir-simpson`,
    topicId: T,
    title: "Rate a storm on the Saffir–Simpson scale",
    level: 2,
    guideRef: "tropical-storms",
    generate(rng, tier) {
      const where = rng.pick(["approaching Florida", "crossing the Caribbean Sea", "heading for the Gulf of Mexico coast", "moving towards the Bahamas", "nearing Puerto Rico", "spinning off the Pacific coast of Mexico"]);
      if (tier === 3) {
        // Speed given in m/s; avoid values within 2 km/h of a category boundary.
        let ms = 40, kmh = 144;
        for (let i = 0; i < 100; i++) {
          ms = rng.int(34, 80);
          kmh = clean(ms * 3.6);
          const nearEdge = SS_BANDS.some(([lo, hi]) => Math.abs(kmh - lo) < 2 || (hi < 300 && Math.abs(kmh - hi) < 2));
          if (!nearEdge) break;
        }
        const cat = ssCategory(kmh);
        return {
          prompt: `A hurricane ${where} has sustained winds of **${ms} m/s**. (1 m/s = 3.6 km/h.)\n\n${SS_TABLE}\n\nWhat category is it on the Saffir–Simpson scale?`,
          answer: { type: "number", value: cat },
          solution: [`Convert: ${ms} × 3.6 = ${num(kmh)} km/h.`, `${num(kmh)} km/h lies in the band ${SS_BANDS[cat - 1][0]}${cat === 5 ? " km/h or more" : "–" + SS_BANDS[cat - 1][1] + " km/h"}.`, `So it is **Category ${cat}**.`],
          hint: "Change m/s into km/h first, then find the band in the table.",
        };
      }
      const cat = rng.int(1, 5);
      const [lo, hi] = SS_BANDS[cat - 1];
      let kmh = rng.int(lo, hi);
      if (tier === 1) kmh = Math.min(hi, Math.max(lo, Math.round(kmh / 5) * 5));
      const named = rng.pick(["A hurricane", "A tropical storm", "A powerful storm"]);
      return {
        prompt: `${named} ${where} has sustained winds of **${kmh} km/h**.\n\n${SS_TABLE}\n\nWhat category is it on the Saffir–Simpson scale?`,
        answer: { type: "number", value: cat },
        solution: [`${kmh} km/h is between ${lo} and ${cat === 5 ? "anything higher" : hi} km/h.`, `So it is **Category ${cat}**${cat >= 3 ? " — a 'major' hurricane" : ""}.`],
        hint: "Find the row whose range contains the wind speed — check both ends of the band.",
      };
    },
  },
  {
    id: `${T}.mean-range-totals`,
    topicId: T,
    title: "Weather station data: mean, range and totals",
    level: 2,
    guideRef: "measuring-weather",
    generate(rng, tier) {
      const who = rng.pick(STATIONS);
      const kind = rng.pick(["mean-temp", "range-temp", "total-rain", "mean-rain"] as const);
      if (kind === "mean-temp" || kind === "range-temp") {
        let temps: number[];
        let place: string;
        if (tier === 3) {
          place = rng.pick(["Chicago during a winter blizzard", "Moscow in January", "Harbin in northern China in winter", "Calgary in a cold snap"]);
          temps = DAYS.map(() => rng.int(-18, 4));
          if (Math.min(...temps) >= 0) temps[rng.int(0, 6)] = -rng.int(3, 15);
          if (Math.max(...temps) <= 0) temps[rng.int(0, 6)] = rng.int(1, 4);
        } else {
          place = rng.pick(["Singapore", "a school in Bukit Timah", "Changi", "Jurong West", "Tampines"]);
          temps = DAYS.map(() => (tier === 1 ? rng.int(29, 34) : rng.int(26, 35)));
        }
        const tableRow = `| Day | ${DAYS.join(" | ")} |\n|---|${DAYS.map(() => "---").join("|")}|\n| Max temp (°C) | ${temps.map(num).join(" | ")} |`;
        if (kind === "range-temp") {
          const mx = Math.max(...temps), mn = Math.min(...temps);
          const range = mx - mn;
          const traps: Trap[] = [];
          const wrong = Math.abs(mx + mn);
          if (mn < 0 && wrong !== range) traps.push({ spec: { type: "number", value: wrong }, feedback: `Subtracting a negative: ${num(mx)} − (${num(mn)}) = ${num(mx)} + ${num(-mn)}.` });
          return {
            prompt: `${who} recorded daily maximum temperatures in ${place}:\n\n${tableRow}\n\nWhat is the **range** of these temperatures, in °C?`,
            answer: { type: "number", value: range },
            solution: [`Highest = ${num(mx)} °C, lowest = ${num(mn)} °C.`, `Range = ${num(mx)} − ${mn < 0 ? "(" + num(mn) + ")" : num(mn)} = **${num(range)} °C**.`],
            hint: "Range = highest − lowest. Watch out for negative numbers.",
            traps,
          };
        }
        const total = sum(temps);
        const mean = roundTo(total / 7, 1);
        const traps: Trap[] = [];
        if (Math.abs(total - mean) > 0.5) traps.push({ spec: { type: "number", value: total }, feedback: "That's the total — now divide by the number of days." });
        return {
          prompt: `${who} recorded daily maximum temperatures in ${place}:\n\n${tableRow}\n\nWork out the **mean** daily maximum temperature in °C, to 1 decimal place.`,
          answer: { type: "number", value: mean },
          solution: [`Total = ${temps.map((t) => (t < 0 ? "(" + num(t) + ")" : num(t))).join(" + ")} = ${num(total)}.`, total % 7 === 0 ? `Mean = ${num(total)} ÷ 7 = **${num(mean)} °C**.` : `Mean = ${num(total)} ÷ 7 = ${num(clean(total / 7, 6))}… ≈ **${num(mean)} °C**.`],
          hint: "Add all seven values (careful with negatives), then divide by 7.",
          traps,
        };
      }
      // Rainfall
      const place = rng.pick(["a school in Singapore during the north-east monsoon", "Changi in December", "a school in Clementi", "Woodlands in the inter-monsoon season", "a community garden in Pasir Ris"]);
      const rain = DAYS.map(() => {
        const dry = rng.bool(0.3);
        if (dry) return 0;
        return tier === 1 ? rng.int(1, 40) : tier === 2 ? rng.int(1, 90) : roundTo(rng.int(5, 1200) / 10, 1);
      });
      if (sum(rain) === 0) rain[2] = tier === 3 ? 12.5 : 18;
      const total = clean(sum(rain));
      const tableRow = `| Day | ${DAYS.join(" | ")} |\n|---|${DAYS.map(() => "---").join("|")}|\n| Rain (mm) | ${rain.map(num).join(" | ")} |`;
      if (kind === "total-rain") {
        return {
          prompt: `${who} read the rain gauge each morning at ${place}:\n\n${tableRow}\n\nWhat was the **total** rainfall for the week, in mm?`,
          answer: { type: "number", value: total },
          solution: [`${rain.map(num).join(" + ")} = **${num(total)} mm**.`],
          hint: "Add up every day, including any 0 mm days.",
        };
      }
      const mean = roundTo(total / 7, 1);
      const wetDays = rain.filter((r) => r > 0).length;
      const traps: Trap[] = [];
      const wrong = roundTo(total / wetDays, 1);
      if (wetDays < 7 && wrong !== mean) traps.push({ spec: { type: "number", value: wrong }, feedback: "You divided by the number of WET days. Dry days count too — divide by 7." });
      return {
        prompt: `${who} read the rain gauge each morning at ${place}:\n\n${tableRow}\n\nWork out the **mean** daily rainfall for the week in mm, to 1 decimal place.`,
        answer: { type: "number", value: mean },
        solution: [`Total = ${num(total)} mm.`, `Mean = ${num(total)} ÷ 7 ≈ **${num(mean)} mm** per day (the 0 mm days still count).`],
        hint: "Total first, then divide by the number of days in the record.",
        traps,
      };
    },
  },
  {
    id: `${T}.forecasting-terms`,
    topicId: T,
    title: "Weather maps, fronts and warnings",
    level: 2,
    guideRef: "forecasting",
    generate(rng, tier) {
      // ~1 in 5: the three Ps of hazard management.
      if (rng.bool(0.2)) {
        const missing = rng.pick(THREE_PS);
        const shown = THREE_PS.map((p) => (p === missing ? "___" : p)).join(", ");
        return {
          prompt: `Warnings save lives through the "three Ps" of managing a hazard: ${shown}. Which P is missing?`,
          answer: { type: "text", accept: THREE_PS_ACCEPT[missing], display: missing },
          solution: [THREE_PS_WHY[missing], "The three Ps are prediction, protection and preparation."],
          hint: "Think: forecast it, defend against it, get people ready for it.",
        };
      }
      return factItem(
        rng,
        FORECAST_FACTS,
        tier,
        ["Weather maps: give #.", "Forecasting check — name #.", "What is #?"],
        "Sketch a weather map in your head: H and L centres, isobars around them, fronts with their symbols.",
      );
    },
  },
  {
    id: `${T}.read-isobars`,
    topicId: T,
    title: "Read an unlabelled isobar",
    level: 2,
    guideRef: "forecasting",
    generate(rng, tier) {
      const isHigh = tier === 1 ? false : rng.bool(0.5);
      const interval = tier === 3 ? rng.pick([2, 4]) : 4;
      const n = 5;
      // Values from the innermost ring outwards.
      const start = isHigh ? 1024 + interval * rng.int(0, 4) : 1000 - interval * rng.int(0, 8);
      const values = Array.from({ length: n }, (_, i) => (isHigh ? start - interval * i : start + interval * i));
      let a = 0, b = 1, q = 3;
      if (tier === 1) {
        a = rng.int(0, 1); b = a + 1; q = rng.pick([0, 1, 2, 3, 4].filter((i) => i !== a && i !== b));
      } else if (tier === 2) {
        a = rng.int(0, 3); b = a + 1; q = rng.pick([0, 1, 2, 3, 4].filter((i) => i !== a && i !== b));
      } else {
        const pairs: [number, number][] = [[0, 2], [0, 3], [1, 3], [1, 4], [0, 4], [2, 4]];
        [a, b] = rng.pick(pairs);
        q = rng.pick([0, 1, 2, 3, 4].filter((i) => i !== a && i !== b));
      }
      const shown = values.map((v, i) => (i === a || i === b ? v : null));
      const ans = values[q];
      const gap = Math.abs(values[b] - values[a]);
      const steps = b - a;
      const traps: Trap[] = [];
      // Classic error: assume the pressure keeps the wrong direction (e.g. rising towards a low's centre).
      const mirror = isHigh ? start + interval * q : start - interval * q;
      if (mirror !== ans && q !== 0) traps.push({ spec: { type: "number", value: mirror }, feedback: isHigh ? "In a HIGH, pressure is highest in the middle and falls outwards." : "In a LOW, pressure is lowest in the middle and rises outwards." });
      return {
        prompt: `The weather map shows isobars around a ${isHigh ? "high-pressure centre (H)" : "low-pressure centre (L)"}. Two isobars are labelled ${values[a]} hPa and ${values[b]} hPa, and the isobars are evenly spaced in value. What is the pressure, in hPa, of isobar number ${q + 1} counting out from the centre (marked **?**)?`,
        answer: { type: "number", value: ans },
        diagram: isobarSvg(shown, isHigh ? "H" : "L", q),
        solution: [
          `The labelled isobars are ${values[a]} and ${values[b]} hPa, ${steps} isobar${steps > 1 ? "s" : ""} apart, so each step is ${gap} ÷ ${steps} = ${interval} hPa.`,
          `Pressure ${isHigh ? "falls" : "rises"} as you move outwards from the ${isHigh ? "high" : "low"}.`,
          `Counting to the marked isobar gives **${ans} hPa**.`,
        ],
        hint: "Work out the interval between neighbouring isobars, then decide whether pressure goes up or down as you move outwards.",
        traps,
      };
    },
  },
  {
    id: `${T}.rainfall-percent`,
    topicId: T,
    title: "Drought and flood rainfall percentages",
    level: 3,
    guideRef: "types-of-extreme-weather",
    generate(rng, tier) {
      const who = rng.pick(STATIONS);
      if (tier === 1) {
        const avg = rng.pick([400, 500, 800, 1000, 1200, 2000, 2400]);
        const pct = rng.int(4, 18) * 5;
        const actual = (avg * pct) / 100;
        return {
          prompt: `During a drought, a farming region received ${big(actual)} mm of rain in a year. Its long-term average is ${big(avg)} mm. What **percentage of the average** rainfall fell?`,
          answer: { type: "number", value: pct },
          solution: [`Percentage = actual ÷ average × 100.`, `${big(actual)} ÷ ${big(avg)} × 100 = **${pct}%**.`],
          hint: "Put the actual amount over the average, then multiply by 100.",
          traps: pct !== 100 - pct ? [{ spec: { type: "number", value: 100 - pct }, feedback: "That's how far BELOW average it was. The question asks what percentage of the average fell." }] : [],
        };
      }
      const mode = tier === 2 ? "of-average" : rng.pick(["below-average", "day-share"] as const);
      if (mode === "of-average") {
        const avg = rng.int(30, 250) * 10;
        const actual = rng.int(Math.round(avg * 0.15), Math.round(avg * 0.9));
        const pct = roundTo((actual / avg) * 100, 0);
        return {
          prompt: `A drought hit ${rng.pick(["eastern Australia", "southern Africa", "Kalimantan", "central Thailand", "California"])}. One year ${big(actual)} mm of rain fell, compared with a long-term average of ${big(avg)} mm. What **percentage of the average** rainfall fell? Give your answer to the nearest whole number.`,
          answer: { type: "number", value: pct },
          solution: [`${big(actual)} ÷ ${big(avg)} × 100 = ${num(roundTo((actual / avg) * 100, 2))}…`, `≈ **${num(pct)}%** of the average.`],
          hint: "actual ÷ average × 100, then round.",
          traps: pct !== 100 - pct ? [{ spec: { type: "number", value: 100 - pct }, feedback: "That's how far BELOW average it was. The question asks what percentage of the average fell." }] : [],
        };
      }
      if (mode === "below-average") {
        const avg = rng.int(40, 250) * 10;
        const actual = rng.int(Math.round(avg * 0.1), Math.round(avg * 0.8));
        const below = roundTo(((avg - actual) / avg) * 100, 1);
        const pctOf = roundTo((actual / avg) * 100, 1);
        return {
          prompt: `In a drought year, ${who}'s town received ${big(actual)} mm of rain. The average is ${big(avg)} mm. By what **percentage below average** was the rainfall? Give your answer to 1 decimal place.`,
          answer: { type: "number", value: below },
          solution: [`Shortfall = ${big(avg)} − ${big(actual)} = ${big(avg - actual)} mm.`, `${big(avg - actual)} ÷ ${big(avg)} × 100 ≈ **${num(below)}%** below average.`],
          hint: "Find the shortfall first, then divide by the AVERAGE (not the actual) amount.",
          traps: pctOf !== below ? [{ spec: { type: "number", value: pctOf }, feedback: "That's the percentage OF the average that fell. Below average = 100% minus that." }] : [],
        };
      }
      const month = rng.int(15, 35) * 10;
      const day = rng.int(Math.round(month * 0.2), Math.round(month * 0.6));
      const hours = rng.pick([2, 3, 4, 5, 6]);
      const pct = roundTo((day / month) * 100, 0);
      return {
        prompt: `A flash flood in a city followed ${day} mm of rain in just ${hours} hours. The city's average rainfall for that whole month is ${month} mm. What percentage of a normal month's rain fell in those ${hours} hours? Give your answer to the nearest whole number.`,
        answer: { type: "number", value: pct },
        solution: [`${day} ÷ ${month} × 100 = ${num(roundTo((day / month) * 100, 2))}…`, `≈ **${num(pct)}%** of a month's rain in ${hours} hours — far more than drains are designed to carry at once.`],
        hint: "Compare the downpour with the monthly average: part ÷ whole × 100.",
        traps: roundTo(day / hours, 1) !== pct ? [{ spec: { type: "number", value: roundTo(day / hours, 1) }, feedback: "That's the rate in mm per hour. The question asks for a percentage of the monthly average." }] : [],
      };
    },
  },
  {
    id: `${T}.storm-ingredients`,
    topicId: T,
    title: "Can a tropical storm form here?",
    level: 3,
    guideRef: "tropical-storms",
    generate(rng, tier) {
      type Fail = "temperature" | "latitude" | "wind shear" | "none";
      const options: Fail[] = tier === 3 ? ["temperature", "latitude", "wind shear", "none"] : ["temperature", "latitude", "wind shear"];
      const fail = rng.pick(options);
      const sea = fail === "temperature" ? roundTo(rng.int(40, 51) / 2, 1) : roundTo(rng.int(55, 61) / 2, 1);
      // Each ocean with its hemisphere and a realistic latitude band for a developing storm.
      const OCEANS: { name: string; hemi: "N" | "S"; lo: number; hi: number }[] = [
        { name: "western Pacific", hemi: "N", lo: 1, hi: 25 },
        { name: "Bay of Bengal", hemi: "N", lo: 8, hi: 21 },
        { name: "Caribbean Sea", hemi: "N", lo: 10, hi: 21 },
        { name: "South Indian Ocean", hemi: "S", lo: 1, hi: 25 },
        { name: "Coral Sea", hemi: "S", lo: 10, hi: 25 },
        { name: "Arabian Sea", hemi: "N", lo: 8, hi: 22 },
        { name: "South China Sea", hemi: "N", lo: 7, hi: 21 },
      ];
      const oc = rng.pick(fail === "latitude" ? OCEANS.filter((o) => o.lo <= 1) : OCEANS);
      const lat = fail === "latitude" ? rng.int(1, 3) : rng.int(Math.max(7, oc.lo), oc.hi);
      const hemi = oc.hemi;
      const shearHigh = fail === "wind shear";
      const ocean = oc.name;
      const latText = tier === 3 ? `about ${big(lat * 111)} km from the equator (1° of latitude ≈ 111 km)` : `latitude ${lat}°${hemi}`;
      const shearText = shearHigh
        ? rng.pick(["strong wind shear — winds high up blow much faster than near the surface", "high wind shear: upper winds are fast and from a different direction to surface winds"])
        : rng.pick(["low wind shear — winds are similar at all heights", "light upper winds, so wind shear is low"]);
      const conds = rng.shuffle([`sea-surface temperature ${num(sea)} °C`, latText, shearText]);
      const accept: Record<Fail, string[]> = {
        temperature: ["temperature", "sea temperature", "sea surface temperature", "sea-surface temperature", "sst", "ocean temperature", "water temperature", "sea temp", "sea too cold", "too cold", "temp"],
        latitude: ["latitude", "too close to the equator", "close to the equator", "equator", "coriolis", "coriolis effect", "distance from the equator"],
        "wind shear": ["wind shear", "shear", "vertical wind shear", "high wind shear", "strong wind shear"],
        none: ["none", "nothing", "none of them", "it can form", "all met", "no problem"],
      };
      const why: Record<Fail, string> = {
        temperature: `The sea is only ${num(sea)} °C — below about 26.5 °C there isn't enough heat and moisture to fuel the storm.`,
        latitude: `It is only about ${lat}° from the equator. Storms usually need to be at least 5° away, because the Coriolis effect is too weak nearer the equator to make the air spin.`,
        "wind shear": "Strong wind shear tilts and tears apart the tall column of rising air, so the storm cannot organise.",
        none: `All three ingredients are present: sea ≥ 26.5 °C (${num(sea)} °C), at least 5° from the equator (about ${lat}°) and low wind shear — so a storm CAN form.`,
      };
      const traps: Trap[] = options.filter((o) => o !== fail).map((o) => ({ spec: { type: "text", accept: [accept[o][0]] } as AnswerSpec, feedback: o === "none" ? "Check each condition against the rules: sea ≥ 26.5 °C, at least 5° from the equator, low wind shear." : `The ${o} condition is fine here — check the other two again.` }));
      return {
        prompt: `Over the ${ocean}, a cluster of thunderstorms has: ${conds.join("; ")}.\n\nWhich ONE condition stops it becoming a tropical storm? Type **temperature**, **latitude** or **wind shear**${tier === 3 ? ", or **none** if it can form" : ""}.`,
        answer: { type: "text", accept: accept[fail], display: fail },
        solution: ["Rules: sea at least about 26.5 °C; at least 5° from the equator; low wind shear.", why[fail]],
        hint: "Test each condition in turn against the three rules for formation.",
        traps,
      };
    },
  },
];
