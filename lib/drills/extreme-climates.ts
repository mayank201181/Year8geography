import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { num, big, roundTo, clean } from "./helpers.ts";

const T = "extreme-climates";

// ---------------------------------------------------------------------------
// Fact-bank helper
// ---------------------------------------------------------------------------

interface Fact {
  /** One or more phrasings; each must have exactly one right answer. */
  q: string[];
  /** Accepted answers; the first is the display answer. */
  a: string[];
  /** 1 = core, 2 = typical, 3 = stretch. */
  lvl: 1 | 2 | 3;
  why: string;
  hint?: string;
  trap?: { a: string[]; fb: string };
}

function askFact(rng: Rng, tier: 1 | 2 | 3, bank: Fact[], defaultHint: string): DrillItem {
  // Tier 1: core + typical facts. Tier 2: everything. Tier 3: half the time stretch facts only.
  const hard = bank.filter((f) => f.lvl === 3);
  const pool = tier === 1 ? bank.filter((f) => f.lvl <= 2) : tier === 3 && hard.length && rng.bool() ? hard : bank;
  const f = rng.pick(pool);
  const prompt = rng.pick(f.q);
  const traps: Trap[] | undefined = f.trap ? [{ spec: { type: "text", accept: f.trap.a }, feedback: f.trap.fb }] : undefined;
  return {
    prompt,
    answer: { type: "text", accept: f.a },
    solution: [`**${f.a[0]}**.`, f.why],
    hint: f.hint ?? defaultHint,
    traps,
  };
}

// ---------------------------------------------------------------------------
// Banks
// ---------------------------------------------------------------------------

const termsBank: Fact[] = [
  { q: ["Give the term for a place where conditions (temperature, rainfall, altitude) make it very hard for people, plants and animals to survive."], a: ["extreme environment", "extreme environments"], lvl: 1, why: "Hot deserts, polar regions and high mountains are the classic extreme environments." },
  { q: ["Give the word for the average weather of a place measured over a long period (usually about 30 years)."], a: ["climate"], lvl: 1, why: "Climate is the long-term average; weather is the day-to-day state of the atmosphere.", trap: { a: ["weather"], fb: "Weather is what happens today — climate is the long-term average (about 30 years)." } },
  { q: ["Give the word for the day-to-day condition of the atmosphere (temperature, rain, wind, cloud) at a place."], a: ["weather"], lvl: 1, why: "Weather changes hour by hour; climate is the 30-year average.", trap: { a: ["climate"], fb: "Climate is the long-term average — this is about today's conditions." } },
  { q: ["Name the imaginary line at 0° latitude that divides the Earth into northern and southern hemispheres.", "Name the line of latitude halfway between the North and South Poles."], a: ["equator", "the equator"], lvl: 1, why: "The equator is 0° latitude; the poles are at 90° N and 90° S." },
  { q: ["Name the line of latitude at about 23.5° N."], a: ["tropic of cancer", "cancer"], lvl: 1, why: "The Tropic of Cancer (23.5° N) runs through the Sahara and the Arabian Desert.", trap: { a: ["tropic of capricorn", "capricorn"], fb: "Capricorn is the southern tropic (23.5° S). Cancer is north." } },
  { q: ["Name the line of latitude at about 23.5° S."], a: ["tropic of capricorn", "capricorn"], lvl: 1, why: "The Tropic of Capricorn (23.5° S) crosses the Kalahari, the Atacama region and central Australia.", trap: { a: ["tropic of cancer", "cancer"], fb: "Cancer is the northern tropic (23.5° N). Capricorn is south." } },
  { q: ["Name the line of latitude at about 66.5° N, north of which there is at least one day a year when the sun does not set."], a: ["arctic circle"], lvl: 1, why: "North of the Arctic Circle (about 66.5° N) you get midnight sun in summer and polar night in winter.", trap: { a: ["antarctic circle"], fb: "The Antarctic Circle is in the south (66.5° S). This one is north." } },
  { q: ["Name the line of latitude at about 66.5° S."], a: ["antarctic circle"], lvl: 1, why: "The Antarctic Circle (about 66.5° S) surrounds almost all of Antarctica.", trap: { a: ["arctic circle"], fb: "The Arctic Circle is in the north (66.5° N)." } },
  { q: ["Give the term for imaginary lines that measure how far north or south of the equator a place is."], a: ["latitude", "lines of latitude"], lvl: 1, why: "Latitude runs east–west around the globe and is measured in degrees north or south of the equator.", trap: { a: ["longitude"], fb: "Longitude measures east–west from the Prime Meridian. North–south position is latitude." } },
  { q: ["Give the word for the height of land above sea level.", "Mount Everest is 8,849 m above sea level. Give the geographical word for this height above sea level."], a: ["altitude", "elevation", "height above sea level"], lvl: 1, why: "Altitude is measured in metres above sea level; temperature falls as altitude rises." },
  { q: ["Give the term for a dry area that receives less than 250 mm of precipitation a year.", "Antarctica and the Sahara are both examples of which type of environment, defined by very low precipitation?"], a: ["desert"], lvl: 1, why: "A desert is defined by low precipitation (under 250 mm a year), not by heat — so polar regions can be deserts too." },
  { q: ["Give the term for a large natural community of plants and animals that suits one climate, such as tropical rainforest or tundra."], a: ["biome", "ecosystem", "global ecosystem"], lvl: 2, why: "Biomes are large-scale ecosystems; each one matches a climate zone." },
  { q: ["Give the term for the treeless, cold region around the Arctic where only low plants such as mosses and lichens grow.", "Give the name of the cold biome in northern Canada and Siberia with no trees, frozen ground and mosses and lichens."], a: ["tundra"], lvl: 2, why: "The tundra has a short growing season and frozen ground, so trees cannot root." },
  { q: ["Give the term for ground that stays frozen for at least two years in a row.", "Name the permanently frozen ground found under much of Siberia and northern Canada."], a: ["permafrost"], lvl: 2, why: "Permafrost underlies much of the Arctic tundra and Siberia." },
  { q: ["Give the term for water falling from the sky in any form — rain, snow, sleet or hail.", "On a climate graph the bars show rainfall — or, more precisely, all ___ (rain, snow, sleet and hail). Give the term."], a: ["precipitation"], lvl: 1, why: "Climate graphs show precipitation as bars, usually in mm." },
  { q: ["Give the word for very dry conditions where evaporation is greater than precipitation."], a: ["arid", "aridity"], lvl: 2, why: "Arid areas lose more water to evaporation than they gain from rain." },
  { q: ["Give the term for the difference between the highest and lowest temperatures in a period (for example over a day or a year)."], a: ["temperature range", "range"], lvl: 1, why: "Range = highest − lowest. Deserts have a big daily range; polar regions a big annual range." },
  { q: ["A climate with a large annual temperature range, found deep inside large continents far from the sea, is called a ___ climate."], a: ["continental", "continental climate"], lvl: 3, why: "Land heats and cools quickly, so places far from the sea (e.g. Siberia) have very hot summers and very cold winters.", trap: { a: ["maritime"], fb: "Maritime climates are near the sea and have a SMALL range — the sea keeps them mild." } },
  { q: ["A climate near the sea with mild winters, cool summers and a small annual temperature range is called a ___ climate."], a: ["maritime", "oceanic", "maritime climate", "oceanic climate", "temperate maritime"], lvl: 3, why: "The sea heats up and cools down slowly, so it evens out the seasons for coastal places.", trap: { a: ["continental"], fb: "Continental climates are inland with a LARGE range." } },
  { q: ["Give the term for the gradual change of land into desert, often caused by overgrazing, deforestation and drought."], a: ["desertification"], lvl: 2, why: "Desertification is happening along the edge of the Sahara in the Sahel." },
  { q: ["Name the semi-arid belt of land along the southern edge of the Sahara."], a: ["sahel", "the sahel"], lvl: 3, why: "The Sahel stretches across Africa from Senegal to Sudan, between the Sahara and the savanna." },
  { q: ["Give the term for a hot, wet forest biome found near the equator with rain all year."], a: ["tropical rainforest", "rainforest", "rain forest", "tropical rain forest"], lvl: 1, why: "Rainforests are sometimes counted as extreme environments because of their constant heat and humidity." },
  { q: ["Besides deserts, polar regions and high mountains, name the type of extreme environment found on plate boundaries, where lava, ash and toxic gases make life difficult."], a: ["volcanic environment", "volcanic", "volcano", "volcanic area", "volcanic region"], lvl: 3, why: "Volcanic areas such as Iceland or Hawaii are extreme because of heat, toxic gases and eruptions." },
  { q: ["Give the term for changing how people build, dress or farm so that they can cope with an extreme environment."], a: ["adaptation", "adapting"], lvl: 2, why: "Adaptation means changing behaviour, buildings or technology to suit the environment." },
  { q: ["Name the imaginary lines that run from the North Pole to the South Pole and measure position east or west."], a: ["longitude", "lines of longitude", "meridians"], lvl: 2, why: "Longitude is measured east or west of the Prime Meridian (0°) at Greenwich.", trap: { a: ["latitude"], fb: "Latitude runs east–west and measures north–south. Pole-to-pole lines are longitude." } },
  { q: ["Give the word for the half of the Earth north or south of the equator.", "Singapore is about 1° north of the equator, so it is in the northern ___. Give the word."], a: ["hemisphere"], lvl: 1, why: "Singapore is just inside the northern hemisphere, about 1° N." },
  { q: ["Name the line of longitude at 0° that runs through Greenwich in London."], a: ["prime meridian", "greenwich meridian"], lvl: 2, why: "The Prime Meridian is the 0° line from which longitude is measured." },
];

interface Place {
  name: string;
  type: "hot desert" | "polar" | "high mountain";
  continent: string[];
  hemi?: "north" | "south";
  lvl: 1 | 2 | 3;
}

const places: Place[] = [
  { name: "the Sahara", type: "hot desert", continent: ["Africa"], hemi: "north", lvl: 1 },
  { name: "the Atacama Desert", type: "hot desert", continent: ["South America"], hemi: "south", lvl: 1 },
  { name: "the Arabian Desert", type: "hot desert", continent: ["Asia"], hemi: "north", lvl: 1 },
  { name: "the Namib Desert", type: "hot desert", continent: ["Africa"], hemi: "south", lvl: 2 },
  { name: "the Thar Desert", type: "hot desert", continent: ["Asia"], hemi: "north", lvl: 2 },
  { name: "the Mojave Desert", type: "hot desert", continent: ["North America"], hemi: "north", lvl: 3 },
  { name: "the Great Victoria Desert", type: "hot desert", continent: ["Australia", "Oceania", "Australasia"], hemi: "south", lvl: 3 },
  { name: "the Sonoran Desert", type: "hot desert", continent: ["North America"], hemi: "north", lvl: 3 },
  { name: "the Greenland ice sheet", type: "polar", continent: ["North America"], hemi: "north", lvl: 2 },
  { name: "Svalbard", type: "polar", continent: ["Europe"], hemi: "north", lvl: 3 },
  { name: "the Antarctic Peninsula", type: "polar", continent: ["Antarctica"], hemi: "south", lvl: 2 },
  { name: "the Siberian Arctic coast", type: "polar", continent: ["Asia"], hemi: "north", lvl: 3 },
  { name: "the Himalayas", type: "high mountain", continent: ["Asia"], hemi: "north", lvl: 1 },
  { name: "the Andes", type: "high mountain", continent: ["South America"], lvl: 1 },
  { name: "the Alps", type: "high mountain", continent: ["Europe"], hemi: "north", lvl: 1 },
  { name: "the Rocky Mountains", type: "high mountain", continent: ["North America"], hemi: "north", lvl: 2 },
  { name: "Mount Kilimanjaro", type: "high mountain", continent: ["Africa"], hemi: "south", lvl: 2 },
  { name: "the Atlas Mountains", type: "high mountain", continent: ["Africa"], hemi: "north", lvl: 3 },
  { name: "the Tibetan Plateau", type: "high mountain", continent: ["Asia"], hemi: "north", lvl: 2 },
  { name: "the Southern Alps of New Zealand", type: "high mountain", continent: ["Oceania", "Australasia", "Zealandia"], hemi: "south", lvl: 3 },
  { name: "Mount Everest", type: "high mountain", continent: ["Asia"], hemi: "north", lvl: 1 },
];

const typeAccept: Record<Place["type"], string[]> = {
  "hot desert": ["hot desert", "desert", "hot deserts"],
  polar: ["polar", "polar region", "polar environment", "cold polar", "ice sheet", "ice"],
  "high mountain": ["high mountain", "mountain", "mountains", "high mountains", "high altitude"],
};

const desertBank: Fact[] = [
  { q: ["Hot deserts receive less than how many millimetres of rain a year? (Give the number.)", "An area counts as a desert if it receives under ___ mm of precipitation a year. Give the number."], a: ["250", "250 mm", "250mm"], lvl: 1, why: "The usual definition of a desert is under 250 mm of precipitation a year." },
  { q: ["Most hot deserts lie between about 15° and ___° north and south of the equator. Give the missing number."], a: ["30", "30°"], lvl: 1, why: "Hot deserts sit in the belt of sinking air at about 15–30° N and S, around the tropics." },
  { q: ["Sinking air over hot deserts creates an area of ___ pressure. (high or low?)"], a: ["high", "high pressure"], lvl: 1, why: "Air sinking towards the ground presses down → high pressure → clear skies and no rain.", trap: { a: ["low", "low pressure"], fb: "Low pressure is rising air, which cools and forms clouds and rain. Deserts have sinking air → high pressure." } },
  { q: ["Air rises at the equator, travels towards the tropics and sinks at about 30°. Name this loop of circulating air."], a: ["hadley cell", "hadley"], lvl: 3, why: "The Hadley cell explains both rainforests (rising air at the equator) and hot deserts (sinking air at about 30°)." },
  { q: ["Give the term for the difference between the daytime maximum and night-time minimum temperature.", "A desert is 40 °C at 2 p.m. and 12 °C before dawn. Give the term for this 28 °C day-to-night difference."], a: ["diurnal range", "daily range", "diurnal temperature range", "daily temperature range"], lvl: 1, why: "Hot deserts have a big diurnal range because clear skies let heat in by day and out at night.", trap: { a: ["annual range"], fb: "Annual range compares the hottest and coldest MONTHS. Day vs night is the diurnal (daily) range." } },
  { q: ["Hot deserts get very cold at night because there are few of these in the sky to trap heat. Name them.", "In Singapore, a blanket of these keeps nights warm. Hot deserts have very few, so their nights are cold. Name them."], a: ["clouds", "cloud"], lvl: 1, why: "Clouds act like a blanket. Desert skies are clear, so heat radiates straight back into space after sunset." },
  { q: ["Name the largest hot desert in the world.", "Name the hot desert that covers much of North Africa, from the Atlantic to the Red Sea."], a: ["sahara", "sahara desert"], lvl: 1, why: "The Sahara covers about 9 million km² of North Africa.", trap: { a: ["antarctica", "antarctic"], fb: "Antarctica is the largest desert overall — but it's a cold polar desert, not a hot one." } },
  { q: ["Name the desert in northern Chile that is the driest non-polar desert in the world."], a: ["atacama", "atacama desert"], lvl: 1, why: "Parts of the Atacama receive on average only a few millimetres of rain a year." },
  { q: ["Name the hot desert that covers much of north-west India and eastern Pakistan."], a: ["thar", "thar desert", "great indian desert"], lvl: 2, why: "The Thar Desert lies near the Tropic of Cancer, east of the Indus valley." },
  { q: ["Name the coastal hot desert in south-west Africa, next to the Atlantic Ocean, famous for its huge red sand dunes."], a: ["namib", "namib desert"], lvl: 2, why: "The Namib is kept dry by sinking air and the cold Benguela Current offshore." },
  { q: ["Name the cold ocean current off the coast of Chile and Peru that helps keep the Atacama dry."], a: ["humboldt current", "humboldt", "peru current", "peru"], lvl: 3, why: "Cold water cools the air above it, so the air is stable and can't rise to form rain clouds." },
  { q: ["Name the cold ocean current off the coast of Namibia that helps keep the Namib Desert dry."], a: ["benguela current", "benguela"], lvl: 3, why: "Like the Humboldt Current, it chills the air, so fog forms but rain rarely does." },
  { q: ["Give the name for a dry river valley in a desert that only fills with water after rare heavy rain."], a: ["wadi", "arroyo", "dry wash"], lvl: 2, why: "Wadis can flood suddenly after storms because the baked ground can't soak up water fast enough." },
  { q: ["Give the term for a sudden, short-lived flood caused by intense rain falling on hard, dry ground.", "Rare desert storms can send a wall of water down a dry valley within minutes. Name this type of flood."], a: ["flash flood", "flash flooding"], lvl: 2, why: "Baked desert soil behaves like concrete, so rain runs straight off into wadis." },
  { q: ["Give the name for a green, fertile spot in a desert where underground water reaches the surface.", "Desert towns and date palms often grow around an ___: a spot where groundwater reaches the surface. Give the word."], a: ["oasis", "oases"], lvl: 1, why: "Oases have supported desert settlements and trade routes for thousands of years." },
  { q: ["Give the name for a crescent-shaped sand dune whose horns point downwind."], a: ["barchan", "barchan dune"], lvl: 3, why: "Barchans form where there is limited sand and wind from one main direction." },
  { q: ["Give the name for a hill or ridge of sand built up by the wind.", "Wind piles loose sand into hills and ridges. Name these landforms."], a: ["sand dune", "dune"], lvl: 1, why: "Wind is a key agent of erosion and deposition in deserts." },
  { q: ["Name the dry, dusty north-east trade wind that blows from the Sahara over West Africa in winter."], a: ["harmattan"], lvl: 3, why: "The Harmattan carries Saharan dust as far as the Gulf of Guinea." },
  { q: ["Near the tropics the midday sun is high in the sky, so its energy is ___ onto a small area. (concentrated or spread out?)"], a: ["concentrated", "focused", "focussed"], lvl: 2, why: "A high sun angle means each square metre receives more energy, so the ground heats up strongly.", trap: { a: ["spread out", "spread"], fb: "That's the poles, where the low sun spreads energy over a large area." } },
  { q: ["Name the hot desert that covers most of the Arabian Peninsula, including the Rub' al Khali (Empty Quarter).", "Saudi Arabia, Oman and the UAE are mostly covered by which hot desert?"], a: ["arabian desert", "arabian"], lvl: 2, why: "The Arabian Desert lies in the same belt of sinking air as the Sahara." },
  { q: ["Hot deserts have very low ___: the amount of water vapour in the air. Give the term."], a: ["humidity"], lvl: 2, why: "Dry air means few clouds — and fast evaporation from any water or skin." },
  { q: ["Give the term for a mountain range blocking moist winds, leaving a dry area behind it — one cause of some deserts, such as parts of the Atacama."], a: ["rain shadow", "rain shadow effect"], lvl: 3, why: "Air loses its moisture on the windward side, then sinks and warms on the leeward side." },
  { q: ["Which line of latitude passes through the Sahara: the Tropic of Cancer or the Tropic of Capricorn?"], a: ["tropic of cancer", "cancer"], lvl: 1, why: "The Sahara is north of the equator, and the Tropic of Cancer (23.5° N) crosses it.", trap: { a: ["tropic of capricorn", "capricorn"], fb: "Capricorn is in the southern hemisphere — the Sahara is north of the equator." } },
  { q: ["Which line of latitude passes through the Atacama region: the Tropic of Cancer or the Tropic of Capricorn?"], a: ["tropic of capricorn", "capricorn"], lvl: 2, why: "The Atacama is in northern Chile, south of the equator, close to 23.5° S.", trap: { a: ["tropic of cancer", "cancer"], fb: "Cancer is north of the equator; Chile is in the southern hemisphere." } },
  { q: ["Rain from sinking air is rare because sinking air ___ as it descends, so its water vapour can't condense. (warms or cools?)"], a: ["warms", "warms up", "heats up", "gets warmer"], lvl: 3, why: "Sinking air is compressed and warms, so it can hold more water vapour and clouds evaporate.", trap: { a: ["cools", "cools down"], fb: "RISING air cools and forms clouds. Sinking air warms, so clouds can't form." } },
  { q: ["Give the name for an illusion of a shimmering 'lake' in the desert caused by light bending through hot air near the ground."], a: ["mirage"], lvl: 2, why: "Light bends as it passes from cooler to very hot air above the sand." },
];

const polarBank: Fact[] = [
  { q: ["Give the term for how much sunlight a surface reflects (fresh snow reflects a lot).", "Fresh snow reflects about 80–90% of sunlight; open ocean reflects under 10%. Name this reflectiveness."], a: ["albedo"], lvl: 1, why: "Snow and ice have a high albedo, so they reflect most sunlight and stay cold." },
  { q: ["At the poles the sun is low in the sky, so its energy is ___ over a large area. (concentrated or spread out?)"], a: ["spread out", "spread", "spread over a large area"], lvl: 1, why: "A low sun angle spreads the same energy over more ground, so each square metre gets less heat.", trap: { a: ["concentrated"], fb: "Concentrated energy is the tropics, where the sun is high." } },
  { q: ["Give the term for the period in polar summer when the sun stays above the horizon for 24 hours."], a: ["midnight sun", "polar day"], lvl: 1, why: "Because the Earth is tilted about 23.5°, the pole facing the sun has constant daylight in summer.", trap: { a: ["polar night"], fb: "Polar night is the winter version — 24 hours of darkness." } },
  { q: ["Give the term for the period in polar winter when the sun does not rise for 24 hours or more."], a: ["polar night"], lvl: 1, why: "The pole tilted away from the sun stays dark in winter.", trap: { a: ["midnight sun", "polar day"], fb: "The midnight sun is summer — this is winter darkness." } },
  { q: ["Is the Arctic mainly an ocean surrounded by land, or land surrounded by ocean?"], a: ["ocean surrounded by land", "ocean", "an ocean", "frozen ocean", "ocean surrounded by continents"], lvl: 1, why: "The Arctic is a frozen ocean ringed by North America, Europe and Asia. Antarctica is the opposite: a continent surrounded by ocean.", trap: { a: ["land surrounded by ocean", "land", "continent"], fb: "That's Antarctica. The Arctic is mostly a frozen ocean." } },
  { q: ["Name the polar region that is a continent of land covered by a thick ice sheet."], a: ["antarctica", "antarctic"], lvl: 1, why: "Antarctica is land under ice up to about 4.8 km thick; the Arctic is mostly frozen sea.", trap: { a: ["arctic"], fb: "The Arctic is mainly frozen ocean, not a continent." } },
  { q: ["Name the ocean that surrounds Antarctica.", "Which ocean would a ship cross between the tip of South America and the Antarctic Peninsula?"], a: ["southern ocean", "antarctic ocean"], lvl: 2, why: "The Southern Ocean circles Antarctica, helping to isolate it from warmer air and water." },
  { q: ["Give the term for ice that forms when seawater freezes."], a: ["sea ice", "pack ice"], lvl: 1, why: "Sea ice covers much of the Arctic Ocean and grows and shrinks with the seasons.", trap: { a: ["ice sheet"], fb: "An ice sheet forms on LAND from compressed snow. Frozen seawater is sea ice." } },
  { q: ["Give the term for a huge mass of ice covering a large area of land, such as most of Greenland or Antarctica."], a: ["ice sheet", "ice cap"], lvl: 2, why: "Ice sheets form from snow piling up and compressing over thousands of years.", trap: { a: ["sea ice"], fb: "Sea ice is frozen seawater; this is ice on land." } },
  { q: ["Give the term for a floating sheet of ice still attached to the land, where an ice sheet flows out over the sea."], a: ["ice shelf"], lvl: 3, why: "Antarctica's Ross Ice Shelf is the largest; icebergs break off its edge." },
  { q: ["Give the term for a large piece of freshwater ice that has broken off a glacier or ice shelf and floats in the sea.", "The Titanic sank in 1912 after hitting one of these floating masses of glacier ice. Name it."], a: ["iceberg"], lvl: 1, why: "Breaking off is called calving. Most of an iceberg is below the surface." },
  { q: ["Give the term for a river of ice moving slowly downhill.", "Name a slowly moving mass of ice that flows downhill like a very slow river."], a: ["glacier"], lvl: 1, why: "Glaciers move under their own weight, eroding the land beneath them." },
  { q: ["The interior of Antarctica gets so little precipitation that it is classed as a ___. Give the term."], a: ["polar desert", "desert", "cold desert"], lvl: 2, why: "Under 250 mm a year makes a desert — cold air holds very little moisture." },
  { q: ["Give the term for ground that stays frozen for at least two years in a row."], a: ["permafrost"], lvl: 1, why: "Permafrost covers large parts of the Arctic. When it thaws, buildings and roads can sink." },
  { q: ["Give the term for the top layer of soil above permafrost that thaws each summer."], a: ["active layer"], lvl: 3, why: "The active layer becomes waterlogged in summer because meltwater can't drain through the frozen ground below." },
  { q: ["Name the Russian research station in Antarctica where the lowest natural air temperature (−89.2 °C, 1983) was measured."], a: ["vostok", "vostok station"], lvl: 3, why: "Vostok sits high on the East Antarctic ice sheet: high altitude, high latitude, long polar night." },
  { q: ["The Earth's axis is tilted by about how many degrees? (Give the number.)"], a: ["23.5", "23.5°", "23 1/2", "23.4", "23.44"], lvl: 2, why: "The tilt of about 23.5° causes the seasons, polar day and polar night." },
  { q: ["In which polar region do polar bears live in the wild: the Arctic or the Antarctic?"], a: ["arctic", "the arctic"], lvl: 1, why: "Polar bears live only in the Arctic; almost all penguins live in the southern hemisphere.", trap: { a: ["antarctic", "antarctica"], fb: "There are no polar bears in Antarctica — they're Arctic animals." } },
  { q: ["In which polar region do emperor penguins live in the wild: the Arctic or the Antarctic?"], a: ["antarctic", "antarctica", "the antarctic"], lvl: 1, why: "Emperor penguins breed on Antarctic sea ice in the middle of winter.", trap: { a: ["arctic"], fb: "There are no penguins in the Arctic." } },
  { q: ["Give the term for a strong, cold wind that flows downhill off an ice sheet under gravity, as in Antarctica."], a: ["katabatic wind", "katabatic"], lvl: 3, why: "Very cold, dense air slides down off the high ice plateau towards the coast." },
  { q: ["Give the term for a severe snowstorm with strong winds and very poor visibility.", "Name the type of storm with strong winds and blowing snow that can cut visibility to a few metres."], a: ["blizzard"], lvl: 1, why: "Blizzards are common in polar regions; blowing snow can cut visibility to almost nothing." },
  { q: ["In which year was the Antarctic Treaty signed?", "The treaty that keeps Antarctica for peaceful science was signed in which year?"], a: ["1959"], lvl: 2, why: "The Antarctic Treaty (1959) keeps Antarctica for peaceful science." },
  { q: ["Name the large, mostly ice-covered island that is part of the Kingdom of Denmark and holds the northern hemisphere's biggest ice sheet."], a: ["greenland"], lvl: 2, why: "The Greenland ice sheet is the second largest in the world after Antarctica's." },
  { q: ["At the poles, sunlight passes through ___ atmosphere before reaching the ground, so more energy is lost on the way. (more or less?)"], a: ["more"], lvl: 2, why: "Low-angle rays take a longer path through the atmosphere, so more energy is absorbed or scattered.", trap: { a: ["less"], fb: "Low sun = slanting rays = a LONGER path through the air." } },
  { q: ["Name the natural light display in the sky near the North Pole, also called the northern lights."], a: ["aurora borealis", "aurora", "northern lights"], lvl: 2, why: "Charged particles from the sun hit the upper atmosphere near the magnetic poles and make it glow." },
  { q: ["Name the treeless Arctic biome with low plants, permafrost and a very short summer growing season."], a: ["tundra"], lvl: 1, why: "Average summer temperatures stay below about 10 °C, too cold for trees." },
  { q: ["Melting ice exposes dark ocean that absorbs more heat, causing more melting. Give the term for this kind of self-reinforcing loop."], a: ["positive feedback", "feedback loop", "positive feedback loop", "ice-albedo feedback", "albedo feedback"], lvl: 3, why: "The ice–albedo feedback is one reason the Arctic is warming faster than the global average." },
];

const mountainBank: Fact[] = [
  { q: ["Temperature falls by about how many °C for every 1000 m you climb? (Give the number.)"], a: ["6.5", "6.5 °c", "6.5°c", "6.5 degrees"], lvl: 1, why: "This is the (normal) lapse rate: about 6.5 °C per 1000 m." },
  { q: ["Give the term for the rate at which temperature falls as altitude increases.", "The fall in temperature of about 6.5 °C per 1000 m of height is called the ___. Give the term."], a: ["lapse rate", "environmental lapse rate"], lvl: 1, why: "The usual lapse rate is about 6.5 °C per 1000 m." },
  { q: ["Give the term for rain formed when moist air is forced to rise over mountains, cools and condenses."], a: ["relief rainfall", "orographic rainfall", "relief rain", "orographic rain", "orographic precipitation"], lvl: 1, why: "Air rises, cools, water vapour condenses into cloud, and rain falls on the windward side.", trap: { a: ["convectional rainfall", "frontal rainfall"], fb: "Convectional rain is from the ground heating; frontal is where air masses meet. Air forced over mountains = relief rainfall." } },
  { q: ["Give the term for the dry area on the sheltered side of a mountain range.", "Air sinks and warms after crossing a mountain range, leaving a dry area behind it. Name this dry area."], a: ["rain shadow"], lvl: 1, why: "After losing its moisture on the windward side, air sinks and warms on the leeward side, so there's little rain." },
  { q: ["Give the term for the side of a mountain that faces the prevailing wind.", "The wet side of a mountain, where moist air is forced upwards, is called the ___ side. Give the term."], a: ["windward", "windward side", "windward slope"], lvl: 1, why: "The windward side gets the relief rainfall.", trap: { a: ["leeward", "leeward side"], fb: "Leeward is the sheltered side — the rain shadow." } },
  { q: ["Give the term for the sheltered side of a mountain, away from the prevailing wind.", "The dry, sheltered side of a mountain is called the ___ side. Give the term."], a: ["leeward", "leeward side", "lee", "lee side"], lvl: 1, why: "The leeward side is in the rain shadow.", trap: { a: ["windward", "windward side"], fb: "Windward faces the wind and gets the rain." } },
  { q: ["Give the term for the direction a slope faces (e.g. south-facing), which affects how much sunshine it gets."], a: ["aspect"], lvl: 2, why: "In the northern hemisphere, south-facing slopes get more sun, so they are warmer and farmed more." },
  { q: ["In the northern hemisphere, do south-facing or north-facing slopes receive more sunshine?"], a: ["south-facing", "south facing", "south", "southern"], lvl: 2, why: "The sun is in the southern half of the sky at midday north of the tropics.", trap: { a: ["north-facing", "north facing", "north"], fb: "North-facing slopes are in shadow more often in the northern hemisphere." } },
  { q: ["Give the term for the altitude above which snow lies on the ground all year round."], a: ["snow line", "snowline", "permanent snow line"], lvl: 2, why: "The snow line is generally much higher in the tropics and lower towards the poles.", trap: { a: ["tree line", "treeline"], fb: "The tree line is where trees stop growing — usually lower than the snow line." } },
  { q: ["Give the term for the altitude above which trees cannot grow because it is too cold and windy."], a: ["tree line", "treeline", "timberline", "timber line"], lvl: 2, why: "Above the tree line there are only low alpine plants, then bare rock and snow.", trap: { a: ["snow line", "snowline"], fb: "The snow line is higher — where snow lies all year." } },
  { q: ["Name the highest mountain on Earth above sea level.", "Name the 8,849 m peak on the border of Nepal and China."], a: ["everest", "mount everest", "mt everest", "sagarmatha", "chomolungma", "qomolangma"], lvl: 1, why: "Mount Everest is 8,849 m (2020 survey), on the Nepal–China border in the Himalayas." },
  { q: ["Name the mountain range that contains Mount Everest.", "Name the mountain range formed by India colliding with the rest of Asia."], a: ["himalayas", "himalaya", "the himalayas"], lvl: 1, why: "The Himalayas formed where the Indian plate collides with the Eurasian plate." },
  { q: ["Name the long mountain range running down the western side of South America.", "Which mountain range runs through Peru, Bolivia and Chile, close to the Pacific coast?"], a: ["andes", "the andes"], lvl: 1, why: "The Andes are the longest continental mountain range, about 7,000 km long." },
  { q: ["Name the highest mountain in Africa."], a: ["kilimanjaro", "mount kilimanjaro", "mt kilimanjaro"], lvl: 2, why: "Kilimanjaro (5,895 m) in Tanzania has snow near its summit even though it is close to the equator." },
  { q: ["Name the highest mountain in South America."], a: ["aconcagua"], lvl: 3, why: "Aconcagua, in the Andes of Argentina, is about 6,961 m high." },
  { q: ["Name the highest mountain in Malaysia, on the island of Borneo, about 4,095 m high."], a: ["kinabalu", "mount kinabalu", "gunung kinabalu", "mt kinabalu"], lvl: 2, why: "Mount Kinabalu is in Sabah. Its summit can be near freezing at night despite being only about 6° from the equator." },
  { q: ["As you climb higher, air pressure ___, so each breath contains less oxygen. (rises or falls?)"], a: ["falls", "decreases", "drops", "goes down"], lvl: 1, why: "There's less air above you pressing down, so air is 'thinner' at altitude.", trap: { a: ["rises", "increases", "goes up"], fb: "Pressure is greatest at sea level, with the most air above pressing down." } },
  { q: ["Air rising up a mountain ___ as it goes up, because it expands. (warms or cools?)"], a: ["cools", "cools down", "gets colder"], lvl: 2, why: "Rising air expands as pressure falls, and expanding air cools — so clouds form.", trap: { a: ["warms", "warms up"], fb: "SINKING air warms. Rising air expands and cools." } },
  { q: ["Name the warm, dry wind that blows down the leeward side of the Alps."], a: ["föhn", "fohn", "foehn", "föhn wind", "foehn wind"], lvl: 3, why: "Air that dropped its rain on the windward side warms quickly as it sinks down the other side." },
  { q: ["Name the warm, dry wind that blows down the eastern side of the Rocky Mountains, which can melt snow very fast."], a: ["chinook", "chinook wind"], lvl: 3, why: "Like the Föhn, it's air warming as it sinks in the rain shadow." },
  { q: ["The monsoon winds that bring heavy relief rain to the southern Himalayas blow in from which ocean?"], a: ["indian ocean", "indian"], lvl: 2, why: "Moist summer winds from the Indian Ocean are forced up the Himalayas, giving huge rainfall in north-east India." },
  { q: ["Name the high, dry plateau north of the Himalayas, often called 'the roof of the world'."], a: ["tibetan plateau", "tibet", "plateau of tibet", "qinghai-tibet plateau"], lvl: 2, why: "It lies partly in the Himalayan rain shadow, so it is much drier than the southern slopes." },
  { q: ["Give the term for when cold, dense air sinks into a valley at night so the valley floor is colder than the slopes above."], a: ["temperature inversion", "inversion"], lvl: 3, why: "Normally it gets colder with height; an inversion is the opposite, and often traps fog or smog in valleys." },
  { q: ["Give the term for the illness climbers may get above about 2,500 m, with headaches and sickness, caused by less oxygen."], a: ["altitude sickness", "acute mountain sickness", "mountain sickness", "ams"], lvl: 2, why: "Climbing slowly lets the body acclimatise to thinner air." },
  { q: ["Give the term for getting used to thinner air by climbing slowly and resting at each altitude."], a: ["acclimatisation", "acclimatization", "acclimatising", "acclimatizing"], lvl: 2, why: "Over days to weeks the body breathes faster and makes more red blood cells to carry oxygen." },
  { q: ["Give the term for the bands of different plants and farming at different heights on a mountain."], a: ["altitudinal zonation", "zonation", "altitude zones", "vertical zonation"], lvl: 3, why: "Each band of height has a different temperature, so different crops and plants suit each one." },
];

// ---------------------------------------------------------------------------
// Climate data helpers
// ---------------------------------------------------------------------------

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MON3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MON1 = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

type Kind = "desert" | "polar" | "temperate" | "rainforest" | "monsoon" | "mountain";

const kindLabel: Record<Kind, string> = {
  desert: "a hot desert station",
  polar: "a polar station",
  temperate: "a station in a temperate climate",
  rainforest: "a tropical rainforest station",
  monsoon: "a monsoon climate station",
  mountain: "a high mountain station",
};

/** Seasonal shape: 1 at the warmest month, −1 six months later. */
function season(m: number, south: boolean): number {
  const peak = south ? 0 : 6;
  return Math.cos((2 * Math.PI * (m - peak)) / 12);
}

function genTemps(rng: Rng, kind: Kind, south: boolean): number[] {
  const [mean, amp] =
    kind === "desert" ? [rng.int(22, 28), rng.int(7, 11)] :
    kind === "polar" ? [rng.int(-22, -10), rng.int(12, 18)] :
    kind === "temperate" ? [rng.int(9, 13), rng.int(5, 8)] :
    kind === "rainforest" ? [rng.int(26, 27), 1] :
    kind === "monsoon" ? [rng.int(26, 28), rng.int(2, 4)] :
    [rng.int(-2, 6), rng.int(4, 7)];
  return Array.from({ length: 12 }, (_, m) => Math.round(mean + amp * season(m, south)) + rng.int(-1, 1));
}

function genRain(rng: Rng, kind: Kind, south: boolean): number[] {
  return Array.from({ length: 12 }, (_, m) => {
    const s = season(m, south);
    switch (kind) {
      case "desert": return rng.int(0, 6) + (s < 0 ? rng.int(0, 8) : 0);
      case "polar": return rng.int(4, 14) + (s > 0.5 ? rng.int(5, 20) : 0);
      case "temperate": return rng.int(35, 75);
      case "rainforest": return rng.int(150, 320);
      case "monsoon": return s > 0.4 ? rng.int(250, 600) : rng.int(0, 40);
      default: return rng.int(20, 90) + (s > 0.3 ? rng.int(40, 140) : 0);
    }
  });
}

/** Nudge values so the single max (or min) is unique. */
function uniqueExtreme(arr: number[], which: "max" | "min"): number[] {
  const out = [...arr];
  const target = which === "max" ? Math.max(...out) : Math.min(...out);
  let first = true;
  for (let i = 0; i < out.length; i++) {
    if (out[i] === target) {
      if (first) first = false;
      else out[i] = which === "max" ? out[i] - 1 : out[i] + 1;
    }
  }
  return out;
}

function sgn(n: number): string {
  return num(n);
}

function tempRow(temps: number[]): string {
  return `| Month | ${MON3.join(" | ")} |\n|---|${MON3.map(() => "---").join("|")}|\n| Temp (°C) | ${temps.map(sgn).join(" | ")} |`;
}

function rainRow(rain: number[]): string {
  return `| Month | ${MON3.join(" | ")} |\n|---|${MON3.map(() => "---").join("|")}|\n| Rain (mm) | ${rain.join(" | ")} |`;
}

function climateGraphSvg(temps: number[], rain: number[], label: string): string {
  const L = 52, R = 372, TOP = 26, BOT = 216;
  const tMin = Math.min(...temps), tMax = Math.max(...temps);
  let tLo = Math.floor((tMin - 1) / 5) * 5;
  let tHi = Math.ceil((tMax + 1) / 5) * 5;
  while (tHi - tLo < 20) { tHi += 5; if (tHi - tLo < 20) tLo -= 5; }
  if (tLo > 0) { tHi -= tLo; tLo = 0; while (tHi < tMax + 1) tHi += 5; }
  const n = (tHi - tLo) / 5;
  const rMax = Math.max(...rain);
  const rStep = [5, 10, 20, 25, 50, 100, 150, 200].find((s) => s * n >= rMax + 1) ?? 200;
  const rHi = rStep * n;
  const h = BOT - TOP;
  const yT = (t: number) => clean(BOT - ((t - tLo) / (tHi - tLo)) * h);
  const yR = (r: number) => clean(BOT - (r / rHi) * h);
  const slot = (R - L) / 12;
  let s = `<svg viewBox="0 0 420 262" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for ${label}: monthly rainfall bars and a temperature line"><rect x="0" y="0" width="420" height="262" fill="#ffffff"/>`;
  for (let i = 0; i <= n; i++) {
    const y = clean(BOT - (i / n) * h);
    s += `<line x1="${L}" y1="${y}" x2="${R}" y2="${y}" stroke="#cbd5e1" stroke-width="1"/>`;
    s += `<text x="${L - 6}" y="${clean(y + 4)}" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1d4ed8">${rStep * i}</text>`;
    s += `<text x="${R + 6}" y="${clean(y + 4)}" font-size="11" font-family="sans-serif" fill="#b91c1c">${sgn(tLo + 5 * i)}</text>`;
  }
  rain.forEach((r, m) => {
    const x = clean(L + m * slot + 3);
    const y = yR(r);
    s += `<rect x="${x}" y="${y}" width="${clean(slot - 6)}" height="${clean(BOT - y)}" fill="#60a5fa" stroke="#1d4ed8" stroke-width="0.8"/>`;
    s += `<text x="${clean(L + m * slot + slot / 2)}" y="${BOT + 14}" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">${MON1[m]}</text>`;
  });
  const pts = temps.map((t, m) => `${clean(L + m * slot + slot / 2)},${yT(t)}`).join(" ");
  s += `<polyline points="${pts}" fill="none" stroke="#dc2626" stroke-width="2.5"/>`;
  temps.forEach((t, m) => { s += `<circle cx="${clean(L + m * slot + slot / 2)}" cy="${yT(t)}" r="3" fill="#dc2626"/>`; });
  s += `<line x1="${L}" y1="${TOP}" x2="${L}" y2="${BOT}" stroke="#1f2937"/><line x1="${R}" y1="${TOP}" x2="${R}" y2="${BOT}" stroke="#1f2937"/><line x1="${L}" y1="${BOT}" x2="${R}" y2="${BOT}" stroke="#1f2937"/>`;
  s += `<text x="12" y="16" font-size="11" font-family="sans-serif" fill="#1d4ed8">Rainfall (mm)</text>`;
  s += `<text x="408" y="16" font-size="11" font-family="sans-serif" text-anchor="end" fill="#b91c1c">Temperature (°C)</text>`;
  s += `<text x="${(L + R) / 2}" y="252" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Month</text>`;
  s += `</svg>`;
  return s;
}

function monthAccept(m: number): string[] {
  return [MONTHS[m], MON3[m]];
}

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  {
    id: `${T}.key-terms`,
    topicId: T,
    title: "Key terms: extreme environments and climate",
    level: 1,
    guideRef: "what-is-extreme",
    generate(rng, tier) {
      return askFact(rng, tier, termsBank, "Picture the Knowledge Organiser: which key word matches this definition exactly?");
    },
  },
  {
    id: `${T}.where-are-they`,
    topicId: T,
    title: "Locate extreme environments",
    level: 1,
    guideRef: "what-is-extreme",
    generate(rng, tier) {
      const pool = places.filter((p) => (tier === 1 ? p.lvl <= 2 : tier === 2 ? true : p.lvl >= 2));
      const p = rng.pick(pool);
      const templates: ("type" | "continent" | "hemi")[] = ["type", "continent"];
      if (p.hemi && p.continent[0] !== "Antarctica") templates.push("hemi");
      const t = rng.pick(templates);
      const Name = p.name.charAt(0).toUpperCase() + p.name.slice(1);
      if (t === "type") {
        const trapType = p.type === "hot desert" ? "high mountain" : p.type === "polar" ? "hot desert" : "polar";
        return {
          prompt: `What type of extreme environment is ${p.name}: hot desert, polar or high mountain?`,
          answer: { type: "text", accept: typeAccept[p.type] },
          solution: [`**${p.type}**.`, `${Name} is in ${p.continent[0]}${p.hemi ? `, in the ${p.hemi}ern hemisphere` : ""}.`],
          hint: "Think about its latitude and altitude — is it near the tropics, near a pole, or very high up?",
          traps: [{ spec: { type: "text", accept: [trapType] }, feedback: `Not quite — ${p.name} is a ${p.type} environment.` }],
        };
      }
      if (t === "continent") {
        return {
          prompt: `On which continent would you find ${p.name}?`,
          answer: { type: "text", accept: p.continent },
          solution: [`**${p.continent[0]}**.`, `${Name} is a ${p.type} environment.`],
          hint: "Use CLOCC: picture the continents on a world map and find it.",
          traps: p.continent[0] === "Oceania" ? [{ spec: { type: "text", accept: ["Australia"] }, feedback: "New Zealand is not part of the Australian landmass — it's in Oceania (Australasia)." }] : undefined,
        };
      }
      const right = p.hemi as "north" | "south";
      const wrong = right === "north" ? "south" : "north";
      return {
        prompt: `Is ${p.name} north or south of the equator?`,
        answer: { type: "text", accept: [right, `${right} of the equator`, `${right}ern hemisphere`, `${right}ern`] },
        solution: [`**${right[0].toUpperCase() + right.slice(1)}** of the equator.`, `${Name} is in ${p.continent[0]}.`],
        hint: "Picture the equator crossing Africa, South America and Indonesia — which side is it on?",
        traps: [{ spec: { type: "text", accept: [wrong] }, feedback: `Check the map again — ${p.name} is ${right} of the equator.` }],
      };
    },
  },
  {
    id: `${T}.hot-desert-facts`,
    topicId: T,
    title: "Hot desert climates: recall",
    level: 2,
    guideRef: "hot-desert-climate",
    generate(rng, tier) {
      return askFact(rng, tier, desertBank, "Think cause → process → effect: sinking air, high pressure, clear skies.");
    },
  },
  {
    id: `${T}.diurnal-range`,
    topicId: T,
    title: "Calculate the daily (diurnal) temperature range",
    level: 1,
    guideRef: "hot-desert-climate",
    generate(rng, tier) {
      const desert = rng.pick(["the Sahara", "the Arabian Desert", "the Thar Desert", "the Namib Desert", "the Great Victoria Desert"]);
      const name = rng.pick(["Aisha", "Arjun", "Wei Ling", "Marcus", "Siti", "Ravi", "Hana", "Zara"]);
      if (tier === 1) {
        const max = rng.int(30, 46);
        const min = max - rng.int(15, 28);
        const ans = max - min;
        return {
          prompt: `${name} records the temperature in ${desert} on one day. Maximum: ${max} °C. Minimum (just before dawn): ${min} °C. What is the diurnal (daily) temperature range, in °C?`,
          answer: { type: "number", value: ans },
          solution: [`Range = highest − lowest = ${max} − ${min} = **${ans} °C**.`, "Clear desert skies let heat in during the day and straight out again at night."],
          hint: "Range means highest minus lowest.",
          traps: [{ spec: { type: "number", value: max + min }, feedback: "You added them. Range is the DIFFERENCE: subtract the minimum from the maximum." }],
        };
      }
      if (tier === 2) {
        const max = rng.int(16, 28);
        const min = rng.int(-5, 4);
        const ans = max - min;
        const traps: Trap[] = [];
        if (min < 0) traps.push({ spec: { type: "number", value: max + min }, feedback: `Subtracting a negative: ${max} − (${sgn(min)}) = ${max} + ${-min}.` });
        return {
          prompt: `On a clear winter day in ${desert}, the maximum temperature is ${max} °C and the night-time minimum is ${sgn(min)} °C. Calculate the diurnal temperature range in °C.`,
          answer: { type: "number", value: ans },
          solution: [`Range = ${max} − ${min < 0 ? `(${sgn(min)})` : sgn(min)} = **${ans} °C**.`, min < 0 ? "When the minimum is below zero, count up from the minimum to 0, then on to the maximum." : "Clear, dry desert air lets heat escape fast at night, even in winter."],
          hint: "Range = maximum − minimum. Take extra care if the minimum is below zero.",
          traps: traps.length ? traps : undefined,
        };
      }
      if (rng.bool()) {
        const max = rng.int(24, 42);
        const range = rng.int(18, 34);
        const min = max - range;
        return {
          prompt: `A weather station in ${desert} has a diurnal range of ${range} °C on a day when the maximum is ${max} °C. What was the minimum temperature, in °C?`,
          answer: { type: "number", value: min },
          solution: [`Minimum = maximum − range = ${max} − ${range} = **${sgn(min)} °C**.`],
          hint: "Work backwards: the minimum is the range BELOW the maximum.",
          traps: [{ spec: { type: "number", value: max + range }, feedback: "That's above the maximum! The minimum must be lower — subtract the range." }],
        };
      }
      const dMax = rng.int(34, 45), dMin = dMax - rng.int(16, 25);
      const sMax = rng.int(30, 33), sMin = rng.int(24, 26);
      const diff = dMax - dMin - (sMax - sMin);
      return {
        prompt: `On one day, ${desert} has a maximum of ${dMax} °C and a minimum of ${dMin} °C. Singapore has a maximum of ${sMax} °C and a minimum of ${sMin} °C. How many degrees larger is the desert's diurnal range than Singapore's?`,
        answer: { type: "number", value: diff },
        solution: [`Desert range = ${dMax} − ${dMin} = ${dMax - dMin} °C.`, `Singapore range = ${sMax} − ${sMin} = ${sMax - sMin} °C.`, `Difference = ${dMax - dMin} − ${sMax - sMin} = **${diff} °C**.`, "Singapore's cloud and humid air act like a blanket at night; desert skies are clear and dry."],
        hint: "Find each range first, then compare them.",
        traps: dMax - sMax !== diff ? [{ spec: { type: "number", value: dMax - sMax }, feedback: "You compared the maximums. The question asks about the RANGES — work out each range first." }] : undefined,
      };
    },
  },
  {
    id: `${T}.polar-facts`,
    topicId: T,
    title: "Polar climates: recall",
    level: 2,
    guideRef: "polar-climate",
    generate(rng, tier) {
      return askFact(rng, tier, polarBank, "Think about the low sun angle, the tilt of the Earth and the white surface.");
    },
  },
  {
    id: `${T}.albedo`,
    topicId: T,
    title: "Albedo: how much sunlight is absorbed?",
    level: 2,
    guideRef: "polar-climate",
    generate(rng, tier) {
      const surfaces: { s: string; a: number }[] = [
        { s: "fresh snow", a: rng.pick([80, 85, 90]) },
        { s: "sea ice", a: rng.pick([50, 55, 60, 65]) },
        { s: "open ocean", a: rng.pick([5, 10]) },
        { s: "desert sand", a: rng.pick([30, 35, 40]) },
        { s: "grassland", a: rng.pick([20, 25]) },
        { s: "forest", a: rng.pick([10, 15]) },
      ];
      if (tier === 1) {
        const sf = rng.pick(surfaces);
        const n = rng.int(1, 5) * 100;
        const refl = (n * sf.a) / 100;
        const ans = n - refl;
        return {
          prompt: `In a simplified model, ${sf.s} reflects ${sf.a}% of the sunlight that reaches it (its albedo). If ${n} units of sunlight arrive, how many units are absorbed?`,
          answer: { type: "number", value: ans },
          solution: [`Reflected = ${sf.a}% of ${n} = ${refl} units.`, `Absorbed = ${n} − ${refl} = **${ans} units**.`, "Absorbed energy heats the surface; reflected energy bounces back to space."],
          hint: "Whatever isn't reflected is absorbed.",
          traps: refl !== ans ? [{ spec: { type: "number", value: refl }, feedback: "That's the amount REFLECTED. The question asks how much is absorbed." }] : undefined,
        };
      }
      if (tier === 2) {
        const sf = rng.pick(surfaces);
        const n = rng.int(5, 40) * 20;
        const ans = (n * (100 - sf.a)) / 100;
        return {
          prompt: `In a simplified model, ${sf.s} has an albedo of ${sf.a}% (it reflects ${sf.a}% of incoming sunlight). If ${big(n)} units of sunlight arrive, how many units are absorbed?`,
          answer: { type: "number", value: ans },
          solution: [`Absorbed share = 100% − ${sf.a}% = ${100 - sf.a}%.`, `${100 - sf.a}% of ${big(n)} = {{${100 - sf.a}/100}} × ${big(n)} = **${big(ans)} units**.`],
          hint: "Find the percentage NOT reflected, then take that percentage of the total.",
          traps: sf.a !== 50 ? [{ spec: { type: "number", value: (n * sf.a) / 100 }, feedback: "That's the reflected amount. Use 100% minus the albedo." }] : undefined,
        };
      }
      const snow = rng.pick([80, 85, 90]);
      const ocean = rng.pick([5, 10]);
      const n = rng.int(5, 40) * 20;
      const absSnow = (n * (100 - snow)) / 100;
      const absOcean = (n * (100 - ocean)) / 100;
      const ans = absOcean - absSnow;
      return {
        prompt: `Arctic sea ice covered in fresh snow reflects about ${snow}% of sunlight; when it melts, the open ocean underneath reflects only about ${ocean}%. If ${big(n)} units of sunlight arrive, how many MORE units are absorbed by the open ocean than by the snow? (Simplified model.)`,
        answer: { type: "number", value: ans },
        solution: [`Snow absorbs ${100 - snow}% of ${big(n)} = ${big(absSnow)} units.`, `Ocean absorbs ${100 - ocean}% of ${big(n)} = ${big(absOcean)} units.`, `Difference = ${big(absOcean)} − ${big(absSnow)} = **${big(ans)} units**.`, "More heat absorbed → more melting → even less ice: the ice–albedo feedback."],
        hint: "Work out what each surface absorbs (100% − albedo), then subtract.",
        traps: n === 100 ? undefined : [{ spec: { type: "number", value: snow - ocean }, feedback: "That's the difference in percentage points. Turn it into units of sunlight using the total that arrives." }],
      };
    },
  },
  {
    id: `${T}.mountain-facts`,
    topicId: T,
    title: "Mountain climates: recall",
    level: 2,
    guideRef: "mountain-climate",
    generate(rng, tier) {
      return askFact(rng, tier, mountainBank, "Picture air being pushed up one side of a mountain and sinking down the other.");
    },
  },
  {
    id: `${T}.lapse-rate`,
    topicId: T,
    title: "Temperature at altitude (lapse rate)",
    level: 2,
    guideRef: "mountain-climate",
    generate(rng, tier) {
      const rule = "Assume temperature falls by 6.5 °C for every 1000 m of height gained.";
      if (tier === 1) {
        const t0 = rng.int(12, 32);
        const k = rng.int(1, 6);
        const h = k * 1000;
        const drop = clean(6.5 * k);
        const ans = clean(t0 - drop);
        return {
          prompt: `It is ${t0} °C at sea level. What is the temperature at ${big(h)} m on a mountain directly above? ${rule} Give your answer in °C.`,
          answer: { type: "number", value: ans },
          solution: [`Height gained = ${big(h)} m = ${k} × 1000 m.`, `Fall = ${k} × 6.5 = ${num(drop)} °C.`, `Temperature = ${t0} − ${num(drop)} = **${num(ans)} °C**.`],
          hint: "How many lots of 1000 m is that? Multiply by 6.5.",
          traps: [{ spec: { type: "number", value: clean(t0 + drop) }, feedback: "It gets COLDER as you climb — subtract the fall." }],
        };
      }
      if (tier === 2) {
        const base = rng.int(0, 15) * 100;
        const t0 = rng.int(10, 30);
        const d = rng.int(2, 20) * 200;
        const top = base + d;
        const drop = roundTo((13 * d) / 2000, 1);
        const ans = roundTo(t0 - drop, 1);
        const traps: Trap[] = [{ spec: { type: "number", value: roundTo(t0 + drop, 1) }, feedback: "Temperature falls with height — subtract, don't add." }];
        if (base > 0) {
          const wrong = roundTo(t0 - (13 * top) / 2000, 2);
          if (Math.abs(wrong - ans) > 0.05) traps.push({ spec: { type: "number", value: wrong, tolerance: 0.05 }, feedback: `Use the height GAINED (${big(top)} − ${big(base)} = ${big(d)} m), not the summit's full height — the village isn't at sea level.` });
        }
        return {
          prompt: `A village at ${big(base)} m has a temperature of ${t0} °C. What is the temperature at the summit above it, at ${big(top)} m? ${rule} Give your answer in °C to 1 decimal place.`,
          answer: { type: "number", value: ans },
          solution: [`Height gained = ${big(top)} − ${big(base)} = ${big(d)} m.`, `Fall = {{${d}/1000}} × 6.5 = ${num(drop)} °C.`, `Summit temperature = ${t0} − ${num(drop)} = **${num(ans)} °C**.`],
          hint: "First find how much height is GAINED between the village and the summit.",
          traps,
        };
      }
      const mode = rng.pick(["freeze", "base", "freeze", "base", "named"]);
      if (mode === "freeze") {
        const t0 = rng.int(8, 32);
        const h = (2000 * t0) / 13;
        const ans = roundTo(h / 100, 0) * 100;
        return {
          prompt: `At sea level it is ${t0} °C. At roughly what altitude will the temperature reach 0 °C (the freezing level)? ${rule} Give your answer to the nearest 100 m.`,
          answer: { type: "number", value: ans },
          solution: [`The temperature must fall by ${t0} °C.`, `Height = {{${t0}/6.5}} × 1000 = ${big(roundTo(h, 1))} m.`, `To the nearest 100 m: **${big(ans)} m**.`],
          hint: "How many lots of 6.5 °C fit into the drop you need? Each lot is 1000 m.",
          traps: [{ spec: { type: "number", value: t0 * 1000 }, feedback: "Temperature falls 6.5 °C per 1000 m, not 1 °C. Divide the drop by 6.5 first." }],
        };
      }
      if (mode === "named") {
        const peak = rng.pick([
          { n: "Mount Kinabalu (Malaysia)", h: 4095 },
          { n: "Kilimanjaro (Tanzania)", h: 5895 },
          { n: "Mount Everest (Nepal–China)", h: 8849 },
          { n: "Mont Blanc (France–Italy)", h: 4806 },
          { n: "Mount Fuji (Japan)", h: 3776 },
        ]);
        const t0 = rng.int(15, 32);
        const drop = roundTo((6.5 * peak.h) / 1000, 1);
        const ans = roundTo(t0 - (6.5 * peak.h) / 1000, 1);
        return {
          prompt: `The summit of ${peak.n} is ${big(peak.h)} m above sea level. If it is ${t0} °C at sea level nearby, estimate the summit temperature. ${rule} Give your answer in °C to 1 decimal place.`,
          answer: { type: "number", value: ans, tolerance: 0.1 },
          solution: [`Fall = {{${peak.h}/1000}} × 6.5 = ${num(roundTo((6.5 * peak.h) / 1000, 3))} °C ≈ ${num(drop)} °C.`, `Summit ≈ ${t0} − ${num(roundTo((6.5 * peak.h) / 1000, 3))} = **${num(ans)} °C** (to 1 d.p.).`, "Real summits are often colder still, because of wind and night-time cooling."],
          hint: "Change the height into thousands of metres (e.g. 4,095 m = 4.095 × 1000 m), then multiply by 6.5.",
          traps: [{ spec: { type: "number", value: roundTo(t0 + (6.5 * peak.h) / 1000, 1), tolerance: 0.1 }, feedback: "It's colder at the top — subtract the fall." }],
        };
      }
      const top = rng.int(15, 45) * 100;
      const tTop = rng.int(-15, 5);
      const fall = (13 * top) / 2000;
      const ans = roundTo(tTop + fall, 2);
      return {
        prompt: `A climber measures ${sgn(tTop)} °C on a summit at ${big(top)} m. Estimate the temperature at sea level directly below. ${rule} Give your answer in °C to 2 decimal places if needed.`,
        answer: { type: "number", value: ans, tolerance: 0.01 },
        solution: [`Fall from sea level to the summit = {{${top}/1000}} × 6.5 = ${num(roundTo(fall, 2))} °C.`, `Sea level is WARMER: ${sgn(tTop)} + ${num(roundTo(fall, 2))} = **${num(ans)} °C**.`],
        hint: "Work backwards: going DOWN the mountain it gets warmer.",
        traps: [{ spec: { type: "number", value: roundTo(tTop - fall, 2), tolerance: 0.01 }, feedback: "Going down, the temperature RISES — add the change." }],
      };
    },
  },
  {
    id: `${T}.annual-range`,
    topicId: T,
    title: "Annual temperature range from climate data",
    level: 2,
    guideRef: "climate-graphs",
    generate(rng, tier) {
      if (tier < 3) {
        const kind: Kind = tier === 1 ? rng.pick(["desert", "temperate", "monsoon"] as const) : rng.pick(["polar", "mountain", "desert", "polar"] as const);
        const south = rng.bool(0.3);
        const temps = genTemps(rng, kind, south);
        const max = Math.max(...temps), min = Math.min(...temps);
        const ans = max - min;
        const traps: Trap[] = [];
        if (min < 0 && max + min !== ans) traps.push({ spec: { type: "number", value: max + min }, feedback: `Careful with the negative: ${sgn(max)} − (${sgn(min)}) = ${sgn(max)} + ${-min}.` });
        return {
          prompt: `Monthly mean temperatures for ${kindLabel[kind]}${south ? " in the southern hemisphere" : ""}:\n\n${tempRow(temps)}\n\nCalculate the annual temperature range in °C.`,
          answer: { type: "number", value: ans },
          solution: [`Warmest month: ${MONTHS[temps.indexOf(max)]}, ${sgn(max)} °C. Coldest month: ${MONTHS[temps.indexOf(min)]}, ${sgn(min)} °C.`, `Annual range = ${sgn(max)} − ${min < 0 ? `(${sgn(min)})` : sgn(min)} = **${ans} °C**.`],
          hint: "Find the warmest and coldest months, then subtract.",
          traps: traps.length ? traps : undefined,
        };
      }
      const a = genTemps(rng, "polar", rng.bool(0.4));
      const bKind = rng.pick(["rainforest", "monsoon", "temperate"] as const);
      const b = genTemps(rng, bKind, false);
      const ra = Math.max(...a) - Math.min(...a);
      const rb = Math.max(...b) - Math.min(...b);
      const ans = ra - rb;
      return {
        prompt: `Station A is a polar station; station B is ${kindLabel[bKind]}.\n\nStation A:\n\n${tempRow(a)}\n\nStation B:\n\n${tempRow(b)}\n\nHow many degrees larger is station A's annual temperature range than station B's?`,
        answer: { type: "number", value: ans },
        solution: [`A: ${sgn(Math.max(...a))} − (${sgn(Math.min(...a))}) = ${ra} °C.`, `B: ${sgn(Math.max(...b))} − ${sgn(Math.min(...b))} = ${rb} °C.`, `Difference = ${ra} − ${rb} = **${ans} °C**.`, "Polar places swing from polar day to polar night, so their annual range is huge; places near the equator get similar sunshine all year."],
        hint: "Work out each annual range separately before comparing.",
        traps: Math.max(...a) + Math.min(...a) - rb !== ans ? [{ spec: { type: "number", value: Math.max(...a) + Math.min(...a) - rb }, feedback: "Check station A's range: subtracting a negative means adding." }] : undefined,
      };
    },
  },
  {
    id: `${T}.rainfall-totals`,
    topicId: T,
    title: "Total and average rainfall from climate data",
    level: 2,
    guideRef: "climate-graphs",
    generate(rng, tier) {
      const kind: Kind = tier === 1 ? rng.pick(["desert", "polar", "temperate"] as const) : rng.pick(["rainforest", "monsoon", "temperate", "desert", "mountain"] as const);
      const rain = genRain(rng, kind, rng.bool(0.3));
      const total = rain.reduce((s, r) => s + r, 0);
      const table = rainRow(rain);
      if (tier < 3 || rng.bool(0.25)) {
        return {
          prompt: `Monthly rainfall for ${kindLabel[kind]}:\n\n${table}\n\nCalculate the total annual rainfall in mm.${tier === 1 ? " Then decide: is it under the 250 mm desert threshold?" : ""}`,
          answer: { type: "number", value: total },
          solution: [`Add all 12 months: ${rain.join(" + ")} = **${big(total)} mm**.`, total < 250 ? "That's under 250 mm a year — desert conditions." : "That's over 250 mm a year — not a desert by rainfall."],
          hint: "Add the months in pairs or groups of three to avoid slips.",
        };
      }
      if (rng.bool()) {
        const mean = roundTo(total / 12, 1);
        return {
          prompt: `Monthly rainfall for ${kindLabel[kind]}:\n\n${table}\n\nCalculate the mean monthly rainfall in mm, to 1 decimal place.`,
          answer: { type: "number", value: mean },
          solution: [`Total = ${big(total)} mm.`, `Mean = {{${total}/12}} = ${num(roundTo(total / 12, 4))} ≈ **${num(mean)} mm**.`],
          hint: "Total first, then divide by the number of months.",
          traps: Math.abs(total - mean) > 0.5 ? [{ spec: { type: "number", value: total }, feedback: "That's the total — now divide by 12 for the monthly mean." }] : undefined,
        };
      }
      const r = uniqueExtreme(rain, "max");
      const tot = r.reduce((s, x) => s + x, 0);
      const wet = Math.max(...r);
      const pct = roundTo((100 * wet) / tot, 0);
      return {
        prompt: `Monthly rainfall for ${kindLabel[kind]}:\n\n${rainRow(r)}\n\nWhat percentage of the year's rainfall falls in the wettest month? Give your answer to the nearest whole number.`,
        answer: { type: "number", value: pct },
        solution: [`Total = ${big(tot)} mm. Wettest month = ${MONTHS[r.indexOf(wet)]}, ${wet} mm.`, `{{${wet}/${tot}}} × 100 = ${num(roundTo((100 * wet) / tot, 2))}% ≈ **${pct}%**.`],
        hint: "Percentage = part ÷ whole × 100. The whole is the annual total.",
      };
    },
  },
  {
    id: `${T}.read-climate-graph`,
    topicId: T,
    title: "Read a climate graph",
    level: 2,
    guideRef: "climate-graphs",
    generate(rng, tier) {
      const kind: Kind = rng.pick(["desert", "polar", "temperate", "monsoon", "mountain"] as const);
      const south = rng.bool(0.35);
      const temps = uniqueExtreme(uniqueExtreme(genTemps(rng, kind, south), "max"), "min");
      const rain = uniqueExtreme(uniqueExtreme(genRain(rng, kind, south), "max"), "min");
      const label = kindLabel[kind];
      const diagram = climateGraphSvg(temps, rain, label);
      const lead = `The climate graph shows ${label}${south ? " in the southern hemisphere" : ""}. Bars = rainfall (left axis, mm); line = temperature (right axis, °C).`;
      const q = tier === 1 ? rng.pick(["wettest", "driest", "hottest", "coldest"] as const) : tier === 2 ? rng.pick(["hottest", "coldest", "readT", "readT", "wettest"] as const) : rng.pick(["range", "range", "readT", "driest"] as const);
      if (q === "wettest" || q === "driest" || q === "hottest" || q === "coldest") {
        const arr = q === "wettest" || q === "driest" ? rain : temps;
        const v = q === "wettest" || q === "hottest" ? Math.max(...arr) : Math.min(...arr);
        const m = arr.indexOf(v);
        const what = q === "wettest" ? "the wettest month (tallest bar)" : q === "driest" ? "the driest month (shortest bar)" : q === "hottest" ? "the warmest month (highest point on the line)" : "the coldest month (lowest point on the line)";
        return {
          diagram,
          prompt: `${lead}\n\nName ${what}.`,
          answer: { type: "text", accept: monthAccept(m) },
          solution: [`**${MONTHS[m]}**: ${q === "wettest" || q === "driest" ? `${v} mm of rain` : `${sgn(v)} °C`}.`, south && (q === "hottest" || q === "coldest") ? "In the southern hemisphere the seasons are reversed, so summer is around December–February." : "Read along the month axis to the bar or point you need."],
          hint: q === "wettest" || q === "driest" ? "Rainfall is the bars — read the left axis." : "Temperature is the line — read the right axis.",
        };
      }
      if (q === "readT") {
        const m = rng.int(0, 11);
        return {
          diagram,
          prompt: `${lead}\n\nWhat is the mean temperature in ${MONTHS[m]}? Give your answer in °C.`,
          answer: { type: "number", value: temps[m], tolerance: 1 },
          solution: [`Find ${MONTHS[m]} on the month axis, go up to the red line, then across to the RIGHT axis: about **${sgn(temps[m])} °C**.`],
          hint: "Use the right-hand axis for temperature, not the rainfall axis.",
        };
      }
      const range = Math.max(...temps) - Math.min(...temps);
      return {
        diagram,
        prompt: `${lead}\n\nUse the graph to work out the annual temperature range, in °C.`,
        answer: { type: "number", value: range, tolerance: 2 },
        solution: [`Highest point ≈ ${sgn(Math.max(...temps))} °C (${MONTHS[temps.indexOf(Math.max(...temps))]}); lowest ≈ ${sgn(Math.min(...temps))} °C (${MONTHS[temps.indexOf(Math.min(...temps))]}).`, `Range ≈ ${sgn(Math.max(...temps))} − ${Math.min(...temps) < 0 ? `(${sgn(Math.min(...temps))})` : sgn(Math.min(...temps))} = **${range} °C**.`],
        hint: "Find the highest and lowest points of the red line and read them on the right axis.",
      };
    },
  },
  {
    id: `${T}.classify-climate`,
    topicId: T,
    title: "Identify the extreme environment from climate data",
    level: 3,
    guideRef: "climate-graphs",
    generate(rng, tier) {
      const kinds = tier === 1 ? (["desert", "polar", "rainforest"] as const) : (["desert", "polar", "rainforest", "mountain"] as const);
      const k = rng.pick(kinds);
      const hemi = rng.pick(["N", "S"]);
      let rain = 0, warm = 0, cold = 0, alt = 0, lat = 0;
      if (k === "desert") { rain = rng.int(2, 40) * 5; warm = rng.int(30, 38); cold = rng.int(11, 21); alt = rng.int(1, 12) * 50; lat = rng.int(17, 30); }
      else if (k === "polar") { rain = rng.int(4, 50) * 5; warm = rng.int(-4, 6); cold = rng.int(-38, -20); alt = rng.int(0, 4) * 50; lat = rng.int(68, 82); }
      else if (k === "rainforest") { rain = rng.int(18, 35) * 100; warm = rng.int(27, 29); cold = warm - rng.int(1, 3); alt = rng.int(1, 6) * 25; lat = rng.int(0, 7); }
      else { rain = rng.int(8, 24) * 50; warm = rng.int(6, 11); cold = warm - rng.int(2, 5); alt = rng.int(30, 40) * 100; lat = rng.int(1, 18); }
      const latS = lat === 0 ? "0°" : `${lat}° ${hemi}`;
      const accept: Record<typeof k, string[]> = {
        desert: ["hot desert", "desert", "hot deserts"],
        polar: ["polar", "polar region", "polar environment", "polar desert", "cold polar", "tundra", "ice cap"],
        rainforest: ["tropical rainforest", "rainforest", "rain forest", "tropical rain forest"],
        mountain: ["high mountain", "mountain", "mountains", "high mountains", "high altitude"],
      };
      const reason: Record<typeof k, string> = {
        desert: `Under 250 mm of rain (${rain} mm) and hot (warmest month ${warm} °C) at about ${latS} — the hot desert belt.`,
        polar: `The warmest month is only ${sgn(warm)} °C and winters reach ${sgn(cold)} °C at ${latS}, near sea level — polar.${rain < 250 ? " It's dry enough to be a polar desert too." : ""}`,
        rainforest: `Very wet (${big(rain)} mm) and hot all year (${cold}–${warm} °C) close to the equator — tropical rainforest.`,
        mountain: `It's near the tropics (${latS}) yet cool all year (${sgn(cold)}–${warm} °C) — because it is ${big(alt)} m up. About ${num(roundTo((alt / 1000) * 6.5, 1))} °C colder than sea level.`,
      };
      const traps: Trap[] = [];
      if (k === "polar") traps.push({ spec: { type: "text", accept: ["hot desert"] }, feedback: "It may be dry, but look at the temperatures — this is a cold polar climate." });
      if (k === "mountain") traps.push({ spec: { type: "text", accept: ["polar"] }, feedback: `Cool, yes — but at ${latS} it's nowhere near a pole. Check the altitude.` });
      return {
        prompt: `A climate station records:\n\n| Measure | Value |\n|---|---|\n| Latitude | ${latS} |\n| Altitude | ${big(alt)} m |\n| Total annual rainfall | ${big(rain)} mm |\n| Warmest month mean | ${sgn(warm)} °C |\n| Coldest month mean | ${sgn(cold)} °C |\n\nWhich environment is it: hot desert, polar, ${tier === 1 ? "" : "high mountain, "}or tropical rainforest?`,
        answer: { type: "text", accept: accept[k] },
        solution: [`**${accept[k][0]}**.`, reason[k]],
        hint: "Check three things in turn: rainfall (under 250 mm?), temperature, then latitude and altitude.",
        traps: traps.length ? traps : undefined,
      };
    },
  },
];
