// Skill drills for "The Geographer's Toolkit" (geo-skills).
// Retrieval fact banks + procedurally generated map/graph skills.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { num, big, roundTo, clean } from "./helpers.ts";

const T = "geo-skills";

// ---------------------------------------------------------------------------
// Fact-bank machinery
// ---------------------------------------------------------------------------

interface Fact {
  /** 1 = core, 2 = typical, 3 = stretch. */
  lv: 1 | 2 | 3;
  /** One or more phrasings; each must have exactly one right answer. */
  q: string[];
  a: AnswerSpec;
  why: string;
  hint?: string;
  traps?: Trap[];
}

const txt = (...accept: string[]): AnswerSpec => ({ type: "text", accept });
const n = (value: number, tolerance?: number): AnswerSpec => (tolerance ? { type: "number", value, tolerance } : { type: "number", value });
const trap = (feedback: string, ...accept: string[]): Trap => ({ spec: { type: "text", accept }, feedback });

function pool(bank: Fact[], tier: 1 | 2 | 3): Fact[] {
  return tier === 1 ? bank.filter((f) => f.lv <= 2) : tier === 2 ? bank : bank.filter((f) => f.lv >= 2);
}

function factItem(rng: Rng, tier: 1 | 2 | 3, bank: Fact[], frames: string[], defaultHint: string): DrillItem {
  const f = rng.pick(pool(bank, tier));
  const q = rng.pick(f.q);
  const frame = rng.pick(frames);
  return {
    prompt: frame ? `${frame} ${q}` : q,
    answer: f.a,
    solution: [f.why],
    hint: f.hint ?? defaultHint,
    traps: f.traps,
  };
}

const RECALL_FRAMES = ["", "Knowledge Organiser check:", "Quick recall —"];

// ---------------------------------------------------------------------------
// Banks
// ---------------------------------------------------------------------------

const LATLONG: Fact[] = [
  { lv: 1, q: ["Name the line of latitude at 0°.", "Which line of latitude divides the Earth into the Northern and Southern Hemispheres?"], a: txt("Equator"), why: "The **Equator** is 0° latitude, halfway between the North and South Poles.", traps: [trap("The Prime Meridian is 0° *longitude* — it divides east from west, not north from south.", "prime meridian", "greenwich meridian")] },
  { lv: 1, q: ["Name the line of longitude at 0°.", "Which line of longitude divides the Earth into the Eastern and Western Hemispheres?"], a: txt("Prime Meridian", "Greenwich Meridian", "meridian of Greenwich"), why: "The **Prime Meridian** (0° longitude) runs through Greenwich in London.", traps: [trap("The Equator is 0° *latitude* — it splits north from south.", "equator")] },
  { lv: 1, q: ["Name the line of latitude at about 23.5° N.", "Which tropic lies north of the Equator?"], a: txt("Tropic of Cancer"), why: "The **Tropic of Cancer** is at about 23.5° N. (Remember: C**an**cer is **n**orth, C**a**pricorn is **a**ustral/south.)", traps: [trap("Capricorn is the southern tropic (about 23.5° S).", "tropic of capricorn", "capricorn")] },
  { lv: 1, q: ["Name the line of latitude at about 23.5° S.", "Which tropic lies south of the Equator?"], a: txt("Tropic of Capricorn"), why: "The **Tropic of Capricorn** is at about 23.5° S.", traps: [trap("Cancer is the northern tropic (about 23.5° N).", "tropic of cancer", "cancer")] },
  { lv: 2, q: ["Name the line of latitude at about 66.5° N."], a: txt("Arctic Circle"), why: "The **Arctic Circle** is at about 66.5° N.", traps: [trap("The Antarctic Circle is in the south (about 66.5° S).", "antarctic circle")] },
  { lv: 2, q: ["Name the line of latitude at about 66.5° S."], a: txt("Antarctic Circle"), why: "The **Antarctic Circle** is at about 66.5° S.", traps: [trap("The Arctic Circle is in the north (about 66.5° N).", "arctic circle")] },
  { lv: 1, q: ["Singapore is at about 1° N, 104° E. Is it in the Northern or the Southern Hemisphere?"], a: txt("Northern", "Northern Hemisphere", "north"), why: "1° **N** means 1° north of the Equator, so Singapore is (just!) in the **Northern Hemisphere**.", traps: [trap("N stands for north — Singapore is about 1° north of the Equator.", "southern", "southern hemisphere", "south")] },
  { lv: 1, q: ["Singapore is at about 1° N, 104° E. Is it in the Eastern or the Western Hemisphere?"], a: txt("Eastern", "Eastern Hemisphere", "east"), why: "104° **E** means 104° east of the Prime Meridian, so Singapore is in the **Eastern Hemisphere**.", traps: [trap("E stands for east of the Prime Meridian.", "western", "western hemisphere", "west")] },
  { lv: 1, q: ["Lines of latitude measure how far north or south a place is from which line?"], a: txt("Equator"), why: "Latitude is measured in degrees north or south of the **Equator**." },
  { lv: 1, q: ["Lines of longitude measure how far east or west a place is from which line?"], a: txt("Prime Meridian", "Greenwich Meridian", "meridian of Greenwich"), why: "Longitude is measured in degrees east or west of the **Prime Meridian**." },
  { lv: 1, q: ["What is the latitude of the North Pole, in degrees?", "How many degrees of latitude are there from the Equator to the South Pole?"], a: n(90), why: "The poles are at **90°** N and 90° S — a quarter-turn round the Earth from the Equator." },
  { lv: 2, q: ["What is the largest possible value of longitude, in degrees (east or west)?"], a: n(180), why: "Longitude runs from 0° to **180°** east and 0° to 180° west; 180° E and 180° W are the same line.", traps: [{ spec: n(90), feedback: "90° is the biggest *latitude*. Longitude goes half-way round the Earth: 180°." }, { spec: n(360), feedback: "Longitude is counted 0–180° east and 0–180° west, so the maximum is 180°." }] },
  { lv: 2, q: ["The International Date Line roughly follows which line of longitude (in degrees)?"], a: n(180), why: "The Date Line roughly follows **180°** longitude (it zig-zags round some islands).", traps: [{ spec: n(0), feedback: "0° is the Prime Meridian. The Date Line is on the opposite side of the Earth." }] },
  { lv: 2, q: ["Which line of latitude is the longest?", "Which is the only line of latitude that is a 'great circle' around the Earth's widest part?"], a: txt("Equator"), why: "Lines of latitude get shorter towards the poles; the **Equator** goes round the Earth's widest part (about 40,000 km)." },
  { lv: 2, q: ["Lines of latitude are also called *parallels*. What are lines of longitude also called?"], a: txt("meridians", "meridian"), why: "Lines of longitude are **meridians** — they all run from pole to pole." },
  { lv: 2, q: ["Lines of longitude are also called *meridians*. What are lines of latitude also called?"], a: txt("parallels", "parallel"), why: "Lines of latitude are **parallels** — they never meet." },
  { lv: 2, q: ["In which district of London does the Prime Meridian pass through the Royal Observatory?"], a: txt("Greenwich"), why: "The Prime Meridian passes through the Royal Observatory at **Greenwich**, London." },
  { lv: 2, q: ["When you give a location as coordinates, which comes first: latitude or longitude?"], a: txt("latitude"), why: "Coordinates are written **latitude first**, then longitude — e.g. Singapore ≈ 1° N, 104° E.", traps: [trap("Longitude comes second, e.g. 1° N, 104° E.", "longitude")] },
  { lv: 2, q: ["What name is given to the warm zone between the Tropic of Cancer and the Tropic of Capricorn?"], a: txt("the tropics", "tropics", "tropical zone", "torrid zone"), why: "The zone between about 23.5° N and 23.5° S is **the tropics**. Singapore is inside it." },
  { lv: 2, q: ["All lines of longitude meet at two points. Name either one."], a: txt("North Pole", "South Pole", "poles", "the poles", "north and south poles"), why: "Meridians run from the **North Pole** to the **South Pole** and meet at both." },
  { lv: 3, q: ["Which South American country is named after the line of latitude that crosses it?"], a: txt("Ecuador"), why: "**Ecuador** is Spanish for 'equator' — the Equator crosses the country just north of Quito." },
  { lv: 3, q: ["Name the only continent crossed by both the Equator and the Prime Meridian.", "The Equator and the Prime Meridian cross each other in the sea off which continent?"], a: txt("Africa"), why: "Both lines cross **Africa**; they meet at 0°, 0° in the Gulf of Guinea, off West Africa." },
  { lv: 3, q: ["The tropics lie at about 23.5° because the Earth's axis is tilted by about how many degrees?"], a: n(23.5, 0.1), why: "The Earth's axis is tilted by about **23.5°**, so the overhead midday sun can reach at most 23.5° N or S." },
  { lv: 3, q: ["One degree is split into how many minutes of arc (as in 1° 17′ N)?"], a: n(60), why: "1° = **60** minutes (′). Singapore's centre is at about 1° 17′ N." },
  { lv: 3, q: ["Above which line of latitude (north) can you get 24 hours of daylight on the June solstice?"], a: txt("Arctic Circle"), why: "North of the **Arctic Circle** (about 66.5° N) the sun doesn't set on the June solstice.", traps: [trap("The Tropic of Cancer is where the sun is overhead at noon in June — not where it never sets.", "tropic of cancer")] },
  { lv: 3, q: ["About how many kilometres is one degree of latitude? (Give the usual rounded figure.)"], a: n(111, 1), why: "The Earth's circumference ≈ 40,000 km, so 1° ≈ 40,000 ÷ 360 ≈ **111 km**." },
];

const MAPTERMS: Fact[] = [
  { lv: 1, q: ["Name the vertical grid lines on a map, numbered along the bottom and increasing towards the east.", "In a grid reference you go 'along the corridor' first. Which set of grid lines is that?"], a: txt("eastings", "easting"), why: "**Eastings** are the vertical lines; their numbers increase eastwards. Read them first.", traps: [trap("Northings are the horizontal lines — they come second ('up the stairs').", "northings", "northing")] },
  { lv: 1, q: ["Name the horizontal grid lines on a map, numbered up the side and increasing towards the north.", "In a grid reference you go 'up the stairs' second. Which set of grid lines is that?"], a: txt("northings", "northing"), why: "**Northings** are the horizontal lines; their numbers increase northwards. Read them second.", traps: [trap("Eastings are the vertical lines — they come first ('along the corridor').", "eastings", "easting")] },
  { lv: 1, q: ["What is the box on a map that explains what the symbols and colours mean?"], a: txt("key", "legend"), why: "The **key** (or legend) explains every symbol — always read it first." },
  { lv: 1, q: ["Name the line on a map that joins points of equal height above sea level."], a: txt("contour line", "contour", "contours"), why: "A **contour line** joins places at the same height; the height is written on it in metres." },
  { lv: 1, q: ["Name the compass direction exactly halfway between north and east."], a: txt("north-east", "north east", "northeast", "NE"), why: "Halfway between N and E is **north-east** (NE). North/south always comes first." },
  { lv: 1, q: ["Name the compass direction exactly halfway between south and west."], a: txt("south-west", "south west", "southwest", "SW"), why: "Halfway between S and W is **south-west** (SW). North/south always comes first." },
  { lv: 1, q: ["What do we call the ratio or bar on a map that tells you how distance on the map relates to distance on the ground?"], a: txt("scale", "map scale"), why: "The **scale** lets you convert map distances into real distances." },
  { lv: 1, q: ["What do we call the symbol showing N, E, S and W (and often NE, SE, SW, NW) on a map?"], a: txt("compass rose", "compass", "north arrow"), why: "A **compass rose** shows the directions; most maps put north at the top." },
  { lv: 1, q: ["How many points does the compass used in KS3 geography have: N, NE, E, SE, S, SW, W, NW?"], a: n(8), why: "That is the **8-point compass**." },
  { lv: 2, q: ["What name is given to a dot on a map with a number next to it showing the exact height of that point in metres?"], a: txt("spot height"), why: "A **spot height** is a dot with a height in metres beside it.", traps: [trap("A trig point is a blue triangle marking a concrete survey pillar, usually on a hilltop.", "trig point", "triangulation pillar")] },
  { lv: 2, q: ["What is the name of the blue triangle symbol on an Ordnance Survey map marking a concrete survey pillar, often on a hilltop?"], a: txt("triangulation pillar", "trig point", "triangulation point", "trig pillar"), why: "A **triangulation pillar** (trig point) was used by surveyors to measure the land." },
  { lv: 2, q: ["What word describes the height and shape of the land?"], a: txt("relief", "topography"), why: "**Relief** = the height and shape of the land, shown by contours, spot heights and colour." },
  { lv: 2, q: ["A scale written as 1:50 000 is called what type of scale?"], a: txt("ratio scale", "ratio", "representative fraction", "RF"), why: "1:50 000 is a **ratio scale**: 1 cm on the map is 50 000 cm on the ground.", traps: [trap("A line scale is the drawn bar marked in km — 1:50 000 is written as a ratio.", "line scale", "bar scale")] },
  { lv: 2, q: ["What is the name of the drawn bar, divided into kilometres, used to measure distance on a map?"], a: txt("line scale", "bar scale", "linear scale", "scale bar"), why: "A **line scale** is a ruler-like bar; you can lay a strip of paper against it." },
  { lv: 2, q: ["Distance measured 'as the crow flies' is called what kind of distance?"], a: txt("straight-line distance", "straight line", "straight-line"), why: "**Straight-line distance** ignores bends. Roads and rivers give a longer *winding* distance." },
  { lv: 2, q: ["Contour lines drawn very close together show what kind of slope?"], a: txt("steep", "steep slope", "steep gradient"), why: "Close contours mean the height changes quickly over a short distance — a **steep** slope.", traps: [trap("Gentle slopes have contours far apart.", "gentle", "gentle slope", "flat")] },
  { lv: 2, q: ["Contour lines drawn far apart show what kind of slope?"], a: txt("gentle", "gentle slope", "gentle gradient", "shallow"), why: "Widely spaced contours mean the height changes slowly — a **gentle** slope.", traps: [trap("Steep slopes have contours close together.", "steep", "steep slope")] },
  { lv: 2, q: ["How many centimetres on a 1:25 000 map represent 1 km on the ground?"], a: n(4), why: "1 km = 100 000 cm, and 100 000 ÷ 25 000 = **4 cm**.", traps: [{ spec: n(2), feedback: "2 cm per km is the 1:50 000 scale. 1:25 000 is twice as detailed." }] },
  { lv: 2, q: ["How many centimetres on a 1:50 000 map represent 1 km on the ground?"], a: n(2), why: "1 km = 100 000 cm, and 100 000 ÷ 50 000 = **2 cm**.", traps: [{ spec: n(4), feedback: "4 cm per km is the 1:25 000 scale." }] },
  { lv: 2, q: ["On UK Ordnance Survey 1:25 000 and 1:50 000 maps, how many kilometres wide is each grid square?"], a: n(1), why: "Each OS grid square is **1 km** by 1 km — handy for estimating distance and area." },
  { lv: 2, q: ["What is the name of Great Britain's national mapping agency, whose maps use eastings and northings?"], a: txt("Ordnance Survey", "OS"), why: "The **Ordnance Survey** has mapped Great Britain since 1791." },
  { lv: 3, q: ["What is the name for the difference in height between neighbouring contour lines?"], a: txt("contour interval", "vertical interval"), why: "The **contour interval** is often 5 m on 1:25 000 maps and 10 m on 1:50 000 maps." },
  { lv: 3, q: ["Which shows more detail of a small area: a 1:10 000 map or a 1:250 000 map? (Type the scale.)"], a: txt("1:10 000", "1:10000", "1 10000", "10000", "10 000"), why: "**1:10 000** is a *larger* scale: each cm covers only 100 m, so more detail fits in.", traps: [trap("1:250 000 is a small scale — 1 cm covers 2.5 km, so detail is lost.", "1:250 000", "1:250000", "250000", "250 000")] },
  { lv: 3, q: ["A map drawn as if looking straight down from above is called what kind of view?"], a: txt("plan view", "plan", "bird's-eye view", "birds eye view", "aerial view", "vertical view"), why: "Maps are drawn in **plan view** — from directly overhead." },
  { lv: 3, q: ["What is the name for showing height on a map with bands of colour (e.g. green for low, brown for high)?"], a: txt("layer colouring", "layer coloring", "layer shading", "layer tinting", "layer tints", "colour layering", "hypsometric tinting"), why: "**Layer colouring** shades height bands in different colours — common on atlas maps." },
  { lv: 3, q: ["Name the short lines drawn on old maps (and some cliffs on modern ones) pointing down a steep slope."], a: txt("hachures", "hachure", "hatchures"), why: "**Hachures** are short tapering lines that point downslope; thicker lines mean steeper slopes." },
  { lv: 3, q: ["A 6-figure grid reference pinpoints a place to within about how many metres on an OS map?"], a: n(100), why: "Each 1 km square is split into tenths, so a 6-figure reference is accurate to about **100 m**.", traps: [{ spec: n(1000), feedback: "1000 m (1 km) is the precision of a 4-figure reference — one whole grid square." }] },
];

const GRAPHS: Fact[] = [
  { lv: 1, q: ["Which graph shows parts of a whole as slices of a circle?"], a: txt("pie chart", "pie graph", "pie"), why: "A **pie chart** shows proportions; 1% = 3.6° of the 360° circle." },
  { lv: 1, q: ["Which graph is best for showing how one value changes continuously over time, e.g. world population 1800–2020?"], a: txt("line graph", "line chart", "line"), why: "A **line graph** joins points over time so you can see the trend." },
  { lv: 1, q: ["Which graph uses separate bars to compare categories, e.g. rainfall in five different cities?"], a: txt("bar chart", "bar graph", "bar"), why: "A **bar chart** compares separate categories." },
  { lv: 1, q: ["Which graph plots two variables as dots to see if they are related, e.g. GDP per person against life expectancy?"], a: txt("scatter graph", "scatter plot", "scattergraph", "scatter diagram", "scatter"), why: "A **scatter graph** shows whether two variables are correlated." },
  { lv: 1, q: ["Which graph combines monthly rainfall bars with a monthly temperature line?"], a: txt("climate graph", "climograph", "climate chart"), why: "A **climate graph** shows temperature (line, °C) and rainfall (bars, mm) for 12 months." },
  { lv: 1, q: ["Which graph shows the age and sex structure of a population as horizontal bars, males on one side and females on the other?"], a: txt("population pyramid", "age-sex pyramid", "age sex pyramid", "pyramid"), why: "A **population pyramid** shows each age group's share of males and females." },
  { lv: 1, q: ["Which map shades areas (e.g. countries) darker where the value is higher, like population density?"], a: txt("choropleth map", "choropleth", "chloropleth"), why: "A **choropleth map** uses a graded colour scale — darker usually means more.", traps: [trap("A proportional symbol map uses symbols of different *sizes*, not shading of areas.", "proportional symbol map", "proportional symbol")] },
  { lv: 1, q: ["What do we call the horizontal axis on a graph?", "On a climate graph, the months run along which axis?"], a: txt("x-axis", "x axis", "horizontal axis"), why: "The **x-axis** runs across; the y-axis runs up." },
  { lv: 1, q: ["What do we call the difference between the highest and lowest values in a set of data?"], a: txt("range"), why: "**Range** = highest − lowest. E.g. temperature range on a climate graph.", traps: [trap("The mean is the average (total ÷ number of values).", "mean", "average")] },
  { lv: 1, q: ["What is the name of the average you find by adding up all the values and dividing by how many there are?"], a: txt("mean"), why: "**Mean** = total ÷ number of values." },
  { lv: 2, q: ["Which map uses symbols (e.g. circles) whose size is drawn in proportion to the value at each place?"], a: txt("proportional symbol map", "proportional symbols", "proportional symbol", "proportional circle map", "proportional circles"), why: "On a **proportional symbol map** a bigger circle = bigger value (e.g. city population).", traps: [trap("A choropleth shades whole areas; it doesn't use sized symbols.", "choropleth", "choropleth map")] },
  { lv: 2, q: ["Which map uses arrows whose width shows how many people or goods move between places?"], a: txt("flow line map", "flow map", "flow lines", "flow-line map"), why: "On a **flow line map** the arrow shows direction and its width shows amount." },
  { lv: 2, q: ["Which map uses one dot to represent a fixed number of people (e.g. 1 dot = 10,000 people)?"], a: txt("dot map", "dot distribution map", "dot density map"), why: "A **dot map** shows distribution: clusters of dots show where many people live." },
  { lv: 2, q: ["Which bar chart splits each bar into coloured sections showing the parts that make up each total?"], a: txt("compound bar chart", "stacked bar chart", "divided bar chart", "compound bar graph", "stacked bar graph", "compound bar", "stacked bar"), why: "A **compound (stacked) bar chart** shows totals *and* the parts inside them." },
  { lv: 2, q: ["What do we call the straight line drawn through the middle of the points on a scatter graph to show the trend?"], a: txt("line of best fit", "best fit line", "best-fit line", "trend line", "trendline"), why: "A **line of best fit** has roughly equal numbers of points either side of it." },
  { lv: 2, q: ["What do we call the middle value when data is put in order?"], a: txt("median"), why: "The **median** is the middle value in an ordered list.", traps: [trap("The mean is total ÷ count; the median is the middle value.", "mean")] },
  { lv: 2, q: ["What do we call the value that appears most often in a data set?"], a: txt("mode", "modal value"), why: "The **mode** is the most common value." },
  { lv: 2, q: ["On a scatter graph, what is a point lying far away from the general pattern called?"], a: txt("anomaly", "outlier", "anomalous result", "anomalous point"), why: "An **anomaly** (outlier) doesn't fit the trend — always point it out and suggest why." },
  { lv: 2, q: ["The amount something changes divided by the time it took (e.g. metres of cliff lost per year) is called the…?"], a: txt("rate of change", "rate"), why: "**Rate of change** = change ÷ time, e.g. 20 m ÷ 10 years = 2 m per year." },
  { lv: 2, q: ["What do we call the vertical axis on a graph?"], a: txt("y-axis", "y axis", "vertical axis"), why: "The **y-axis** runs up the side." },
  { lv: 3, q: ["Name the general term for a line on a map joining places with the same value (e.g. same temperature or pressure).", "Contours, isobars and isotherms are all examples of which type of line?"], a: txt("isoline", "isolines", "isopleth"), why: "An **isoline** joins equal values; contours are isolines of height." },
  { lv: 3, q: ["What is the name of a line on a weather map joining places of equal air pressure?"], a: txt("isobar", "isobars"), why: "**Isobars** join equal pressure; close isobars mean strong winds.", traps: [trap("Isotherms join equal temperature.", "isotherm")] },
  { lv: 3, q: ["What is the name of a line on a map joining places of equal temperature?"], a: txt("isotherm", "isotherms"), why: "**Isotherms** join places with the same temperature.", traps: [trap("Isobars join equal air pressure.", "isobar")] },
  { lv: 3, q: ["Which graph has three axes forming a triangle, used when three percentages always add up to 100% (e.g. employment sectors)?"], a: txt("triangular graph", "triangular chart", "ternary graph", "ternary diagram", "ternary plot"), why: "A **triangular graph** plots three parts of 100% — e.g. primary, secondary and tertiary jobs." },
  { lv: 3, q: ["Which circular graph shows how often the wind blows from each compass direction?"], a: txt("wind rose", "rose diagram", "rose chart", "radial graph"), why: "A **wind rose** (rose diagram) has bars pointing out towards each compass direction." },
  { lv: 3, q: ["Which map draws straight lines from where people start to where they go (e.g. home to shop), without following roads?"], a: txt("desire line map", "desire lines", "desire line"), why: "A **desire line map** shows origins and destinations in straight lines; thicker bundles = more trips." },
  { lv: 3, q: ["Which graph shows continuous data grouped into classes with bars touching, e.g. pebble sizes 0–2 cm, 2–4 cm, 4–6 cm?"], a: txt("histogram"), why: "A **histogram** has touching bars because the data is continuous.", traps: [trap("A bar chart has gaps between bars for separate categories.", "bar chart", "bar graph")] },
];

const PATTERNS: Fact[] = [
  { lv: 1, q: ["In the TEA method for describing graphs, what does T stand for?"], a: txt("trend"), why: "TEA = **Trend**, Evidence, Anomaly. Start with the overall trend." },
  { lv: 1, q: ["In the TEA method for describing graphs, what does E stand for?"], a: txt("evidence"), why: "TEA = Trend, **Evidence**, Anomaly. Quote figures with units from the graph." },
  { lv: 1, q: ["In the TEA method for describing graphs, what does A stand for?"], a: txt("anomaly", "anomalies"), why: "TEA = Trend, Evidence, **Anomaly**. Point out anything that doesn't fit." },
  { lv: 1, q: ["Data that you collect yourself (e.g. your own traffic count) is called…?", "Wei Ling counts pedestrians outside Bishan MRT for 10 minutes. What type of data is this?", "Arjun measures beach width with a tape measure at East Coast Park. What type of data is this?", "Aisha gives out a questionnaire to residents of her HDB block. What type of data does she get?"], a: txt("primary data", "primary"), why: "**Primary data** is collected first-hand by you.", traps: [trap("Secondary data was collected by someone else (e.g. a census or a website).", "secondary", "secondary data")] },
  { lv: 1, q: ["Data collected by someone else (e.g. a government census) is called…?", "Marcus downloads population figures from the Singapore Department of Statistics. What type of data is this?", "Priya uses a climate graph from her textbook. What type of data is this?", "Ravi reads rainfall totals from the Meteorological Service Singapore website. What type of data is this?"], a: txt("secondary data", "secondary"), why: "**Secondary data** was collected by someone else — books, websites, census, maps.", traps: [trap("Primary data is collected by *you* — here someone else did the collecting.", "primary", "primary data")] },
  { lv: 1, q: ["Which word describes a distribution where features are grouped closely together in one area?"], a: txt("clustered", "cluster", "concentrated"), why: "**Clustered** = bunched together, e.g. settlements round an oasis." },
  { lv: 1, q: ["Which word describes a distribution where features follow a line, e.g. villages along a river or road?"], a: txt("linear"), why: "A **linear** pattern follows a line — a river, a coast, a road." },
  { lv: 1, q: ["On a scatter graph, as one variable increases the other also increases. What type of correlation is this?"], a: txt("positive", "positive correlation"), why: "Both go up together = **positive correlation**.", traps: [trap("Negative correlation is when one goes up as the other goes down.", "negative", "negative correlation")] },
  { lv: 1, q: ["On a scatter graph, as one variable increases the other decreases. What type of correlation is this?"], a: txt("negative", "negative correlation", "inverse"), why: "One up, the other down = **negative correlation**.", traps: [trap("Positive correlation is when both increase together.", "positive", "positive correlation")] },
  { lv: 1, q: ["Which command word asks you to say what something is like or where it is, *without* giving reasons?"], a: txt("describe"), why: "**Describe** = say what you see (with figures). No 'because'.", traps: [trap("'Explain' asks for reasons — 'describe' doesn't.", "explain")] },
  { lv: 1, q: ["Which command word asks you to give reasons why something happens?"], a: txt("explain"), why: "**Explain** = give reasons (use 'because', 'this leads to').", traps: [trap("'Describe' is just what — 'explain' is why.", "describe")] },
  { lv: 2, q: ["Which command word asks you to put forward possible reasons for something unfamiliar, where more than one answer could be right?"], a: txt("suggest"), why: "**Suggest** = apply what you know to a new situation; sensible ideas earn credit." },
  { lv: 2, q: ["Which command word asks you to weigh up strengths and weaknesses and then reach a judgement?"], a: txt("evaluate", "assess"), why: "**Evaluate** = both sides, then a justified conclusion." },
  { lv: 2, q: ["Which command word asks you to give the similarities and differences between two things?"], a: txt("compare"), why: "**Compare** = similarities *and* differences; use words like 'whereas'." },
  { lv: 2, q: ["In CLOCC (for describing world maps), what does the L stand for?"], a: txt("lines of latitude", "latitude"), why: "CLOCC = Continents, **Lines of latitude**, Oceans, Countries, Compass." },
  { lv: 2, q: ["In CLOCC (for describing world maps), what does the O stand for?"], a: txt("oceans", "ocean"), why: "CLOCC = Continents, Lines of latitude, **Oceans**, Countries, Compass." },
  { lv: 2, q: ["CLOCC has three Cs. Name the C that means 'large land masses such as Asia and Africa'."], a: txt("continents", "continent"), why: "CLOCC = **Continents**, Lines of latitude, Oceans, Countries, Compass." },
  { lv: 2, q: ["Data in the form of numbers (counts, measurements) is called…?"], a: txt("quantitative", "quantitative data"), why: "**Quantitative** = numbers; it can be graphed and calculated. (Qualitative data is words, opinions, photos or sketches.)" },
  { lv: 2, q: ["Data in the form of words, opinions, photos or sketches is called…?"], a: txt("qualitative", "qualitative data"), why: "**Qualitative** = descriptions and opinions, not numbers.", traps: [trap("Quantitative data is numbers.", "quantitative", "quantitative data")] },
  { lv: 2, q: ["What word describes a distribution where some areas have lots of people and others very few?"], a: txt("uneven", "unevenly distributed", "uneven distribution"), why: "World population is **uneven** — dense in places like South Asia, sparse in deserts." },
  { lv: 2, q: ["What one-word adjective (beginning with s) describes an area with very few people spread thinly across it?"], a: txt("sparse", "sparsely populated", "sparsely"), why: "**Sparsely populated** = few people per km², e.g. the Sahara or Mongolia." },
  { lv: 2, q: ["What one-word adjective (beginning with d) describes an area with many people per km²?"], a: txt("dense", "densely populated", "densely"), why: "**Densely populated** = many people per km², e.g. Singapore." },
  { lv: 3, q: ["Which sampling method picks people or sites at regular intervals, e.g. every 10th person or every 5 m along a beach?"], a: txt("systematic", "systematic sampling"), why: "**Systematic sampling** uses a regular interval.", traps: [trap("Random sampling picks by chance — not at a fixed interval.", "random", "random sampling")] },
  { lv: 3, q: ["Which sampling method gives every person or site an equal chance of being chosen, e.g. using random number tables?"], a: txt("random", "random sampling"), why: "**Random sampling** removes bias because every item has an equal chance.", traps: [trap("Systematic sampling uses a regular interval.", "systematic", "systematic sampling")] },
  { lv: 3, q: ["Which sampling method divides the population into groups and samples each group in proportion to its size?"], a: txt("stratified", "stratified sampling"), why: "**Stratified sampling** makes sure each group is fairly represented." },
  { lv: 3, q: ["What is a statement you test with fieldwork data, e.g. 'Pedestrian numbers fall with distance from the MRT station'?"], a: txt("hypothesis"), why: "A **hypothesis** is a testable prediction; your data supports it or not." },
  { lv: 3, q: ["When there is no clear relationship between two variables on a scatter graph, what do we say about the correlation?"], a: txt("no correlation", "none", "zero correlation", "no relationship"), why: "Points scattered with no pattern = **no correlation**." },
];

// ---------------------------------------------------------------------------
// Grid map SVG builder (eastings along the bottom, northings up the side)
// ---------------------------------------------------------------------------

const pad2 = (v: number) => String(v).padStart(2, "0");

interface Feature {
  name: string;
  accept: string[];
  /** SVG for the symbol centred at (x, y). */
  draw: (x: number, y: number) => string;
}

const FEATURES: Feature[] = [
  { name: "church", accept: ["church", "place of worship"], draw: (x, y) => `<circle cx="${x}" cy="${y}" r="6" fill="#1f2937"/><line x1="${x}" y1="${y - 13}" x2="${x}" y2="${y - 4}" stroke="#1f2937" stroke-width="2"/><line x1="${x - 4}" y1="${y - 10}" x2="${x + 4}" y2="${y - 10}" stroke="#1f2937" stroke-width="2"/>` },
  { name: "campsite", accept: ["campsite", "camp site", "camping site", "tent"], draw: (x, y) => `<polygon points="${x},${y - 8} ${x - 8},${y + 6} ${x + 8},${y + 6}" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/>` },
  { name: "windmill", accept: ["windmill", "wind mill"], draw: (x, y) => `<circle cx="${x}" cy="${y}" r="3" fill="#1f2937"/><line x1="${x - 8}" y1="${y - 8}" x2="${x + 8}" y2="${y + 8}" stroke="#1f2937" stroke-width="2"/><line x1="${x - 8}" y1="${y + 8}" x2="${x + 8}" y2="${y - 8}" stroke="#1f2937" stroke-width="2"/>` },
  { name: "pond", accept: ["pond", "lake"], draw: (x, y) => `<ellipse cx="${x}" cy="${y}" rx="10" ry="6" fill="#bae6fd" stroke="#334155" stroke-width="1.5"/>` },
  { name: "school", accept: ["school"], draw: (x, y) => `<rect x="${x - 7}" y="${y - 6}" width="14" height="12" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="${x}" y="${y + 4}" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">S</text>` },
  { name: "trig point", accept: ["trig point", "triangulation pillar", "trig pillar", "triangulation point"], draw: (x, y) => `<polygon points="${x},${y - 7} ${x - 7},${y + 5} ${x + 7},${y + 5}" fill="#2563eb" stroke="#1f2937" stroke-width="1"/><circle cx="${x}" cy="${y}" r="1.6" fill="#ffffff"/>` },
  { name: "lighthouse", accept: ["lighthouse", "light house"], draw: (x, y) => `<polygon points="${x - 4},${y + 7} ${x + 4},${y + 7} ${x + 2},${y - 7} ${x - 2},${y - 7}" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/><circle cx="${x}" cy="${y - 9}" r="2.5" fill="#f59e0b"/>` },
  { name: "bus station", accept: ["bus station", "bus stop", "bus interchange", "bus"], draw: (x, y) => `<rect x="${x - 8}" y="${y - 6}" width="16" height="12" rx="3" fill="#e5e7eb" stroke="#1f2937" stroke-width="1.5"/><text x="${x}" y="${y + 4}" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">B</text>` },
  { name: "viewpoint", accept: ["viewpoint", "view point", "lookout"], draw: (x, y) => `<circle cx="${x}" cy="${y}" r="3" fill="#1f2937"/><path d="M ${x} ${y} L ${x - 9} ${y - 9} A 13 13 0 0 1 ${x + 9} ${y - 9} Z" fill="#fecaca" stroke="#1f2937" stroke-width="1"/>` },
  { name: "post office", accept: ["post office"], draw: (x, y) => `<rect x="${x - 8}" y="${y - 6}" width="16" height="12" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><text x="${x}" y="${y + 4}" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">P</text>` },
];

const G = { L: 40, Tp: 16, S: 64, N: 4 };

function gridSvg(e0: number, n0: number, items: { f: Feature; ex: number; ny: number; label: boolean }[], opts: { tenths: boolean; aria: string }): string {
  const { L, Tp, S, N } = G;
  const W = L + N * S + 16;
  const H = Tp + N * S + 34;
  const xOf = (ex: number) => L + (ex - e0) * S;
  const yOf = (ny: number) => Tp + N * S - (ny - n0) * S;
  let s = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${opts.aria}">`;
  s += `<rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff"/>`;
  s += `<rect x="${L}" y="${Tp}" width="${N * S}" height="${N * S}" fill="#ecfdf5"/>`;
  // A river for realism, entering top-left, leaving bottom-right.
  s += `<path d="M ${L} ${Tp + 40} C ${L + 90} ${Tp + 60}, ${L + 120} ${Tp + 170}, ${L + N * S} ${Tp + 210}" fill="none" stroke="#7dd3fc" stroke-width="5"/>`;
  for (let i = 0; i <= N; i++) {
    s += `<line x1="${L + i * S}" y1="${Tp}" x2="${L + i * S}" y2="${Tp + N * S}" stroke="#334155" stroke-width="1"/>`;
    s += `<line x1="${L}" y1="${Tp + i * S}" x2="${L + N * S}" y2="${Tp + i * S}" stroke="#334155" stroke-width="1"/>`;
    s += `<text x="${L + i * S}" y="${Tp + N * S + 16}" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">${pad2(e0 + i)}</text>`;
    s += `<text x="${L - 6}" y="${Tp + N * S - i * S + 4}" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">${pad2(n0 + i)}</text>`;
  }
  if (opts.tenths) {
    for (let i = 0; i < N * 10; i++) {
      if (i % 10 === 0) continue;
      const x = L + (i * S) / 10;
      const y = Tp + N * S - (i * S) / 10;
      const len = i % 5 === 0 ? 6 : 3;
      s += `<line x1="${clean(x)}" y1="${Tp + N * S}" x2="${clean(x)}" y2="${Tp + N * S - len}" stroke="#334155" stroke-width="1"/>`;
      s += `<line x1="${L}" y1="${clean(y)}" x2="${L + len}" y2="${clean(y)}" stroke="#334155" stroke-width="1"/>`;
    }
  }
  for (const it of items) {
    const x = clean(xOf(it.ex));
    const y = clean(yOf(it.ny));
    s += it.f.draw(x, y);
    if (it.label) s += `<text x="${x}" y="${clean(y + 18)}" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">${it.f.name}</text>`;
  }
  s += `<text x="${L + (N * S) / 2}" y="${H - 2}" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Eastings →</text>`;
  s += `</svg>`;
  return s;
}

// ---------------------------------------------------------------------------
// Compass helpers
// ---------------------------------------------------------------------------

const DIRS = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"] as const;
const ABBR = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
const dirAccept = (i: number) => {
  const d = DIRS[i];
  return [d, d.replace("-", " "), d.replace("-", ""), ABBR[i]];
};
/** Unit steps (x right = east, y up = north) for each direction. */
const DSTEP: [number, number][] = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];

const PLACES = ["farm", "church", "school", "car park", "campsite", "pond", "windmill", "café", "bridge", "hostel", "quarry", "jetty"];

function compassSvg(pts: { name: string; gx: number; gy: number }[], aria: string): string {
  const step = 44;
  const ox = 40;
  const oy = 30;
  let s = `<svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}">`;
  s += `<rect x="0" y="0" width="380" height="250" fill="#ecfdf5"/>`;
  // Compass arrow (north at top)
  s += `<g transform="translate(355,40)"><polygon points="0,-24 6,-6 -6,-6" fill="#1f2937"/><line x1="0" y1="-6" x2="0" y2="14" stroke="#1f2937" stroke-width="2"/><text x="0" y="-27" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">N</text></g>`;
  for (const p of pts) {
    const x = ox + p.gx * step;
    const y = oy + (4 - p.gy) * step;
    s += `<circle cx="${x}" cy="${y}" r="6" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/>`;
    s += `<text x="${x}" y="${y + 19}" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">${p.name}</text>`;
  }
  s += `</svg>`;
  return s;
}

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // ------------------------------------------------------------- level 1
  {
    id: `${T}.compass-direction`,
    topicId: T,
    title: "Give an 8-point compass direction",
    level: 1,
    guideRef: "grid-references",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.4)) {
        // Turning problem, text only.
        const start = rng.int(0, 7);
        const turns = rng.pick([1, 2, 3, 4, 6]);
        const cw = rng.bool();
        const deg = turns * 45;
        const end = (start + (cw ? turns : 8 - turns)) % 8;
        const who = rng.pick(["Aisha", "Jun", "Zara", "Ethan", "Mei", "Ravi"]);
        const wrong = (start + (cw ? 8 - turns : turns)) % 8;
        return {
          prompt: `${who} is walking **${DIRS[start]}** on a trail on Pulau Ubin. They turn **${deg}° ${cw ? "clockwise" : "anticlockwise"}**. In which 8-point compass direction are they now walking?`,
          answer: { type: "text", accept: dirAccept(end), display: DIRS[end] },
          solution: [
            `Each step round the 8-point compass is 45°, so ${deg}° is ${turns} step${turns > 1 ? "s" : ""}.`,
            `Going ${cw ? "clockwise (N → NE → E …)" : "anticlockwise (N → NW → W …)"} from ${DIRS[start]} by ${turns} step${turns > 1 ? "s" : ""} gives **${DIRS[end]}**.`,
          ],
          hint: "Clockwise goes N → NE → E → SE → S. Each step is 45°.",
          traps: wrong !== end ? [{ spec: { type: "text", accept: dirAccept(wrong) }, feedback: `That's turning the other way. ${cw ? "Clockwise" : "Anticlockwise"} means the way a clock's hands ${cw ? "move" : "move backwards"}.` }] : undefined,
        };
      }
      const dirs = tier === 1 ? [0, 2, 4, 6, 1, 3, 5, 7] : [0, 1, 2, 3, 4, 5, 6, 7];
      const d = rng.pick(dirs);
      const k = tier === 1 ? 1 : rng.int(1, 2);
      const [sx, sy] = DSTEP[d];
      // Choose A so that B = A + k·step stays on the 0..6 × 0..4 lattice.
      let ax = 3, ay = 2;
      for (let i = 0; i < 50; i++) {
        ax = rng.int(0, 6);
        ay = rng.int(0, 4);
        const bx = ax + k * sx, by = ay + k * sy;
        if (bx >= 0 && bx <= 6 && by >= 0 && by <= 4) break;
      }
      const bx = ax + k * sx, by = ay + k * sy;
      const names = rng.shuffle(PLACES).slice(0, tier === 1 ? 2 : 3);
      const pts = [{ name: names[0], gx: ax, gy: ay }, { name: names[1], gx: bx, gy: by }];
      if (tier >= 2) {
        // A distractor point that is not on either location.
        for (let i = 0; i < 30; i++) {
          const cx = rng.int(0, 6), cy = rng.int(0, 4);
          if ((cx !== ax || cy !== ay) && (cx !== bx || cy !== by)) {
            pts.push({ name: names[2], gx: cx, gy: cy });
            break;
          }
        }
      }
      const opp = (d + 4) % 8;
      return {
        prompt: `Use the map (north is at the top). In which 8-point compass direction is the **${names[1]}** from the **${names[0]}**?`,
        diagram: compassSvg(pts, `Map with north at the top showing a ${names[0]} and a ${names[1]}${pts.length > 2 ? ` and a ${names[2]}` : ""}`),
        answer: { type: "text", accept: dirAccept(d), display: DIRS[d] },
        solution: [
          `Stand on the ${names[0]} and look towards the ${names[1]}.`,
          `It is ${sy > 0 ? "up (north)" : sy < 0 ? "down (south)" : "level"}${sx !== 0 ? ` and ${sx > 0 ? "right (east)" : "left (west)"}` : ""}${sx !== 0 && sy !== 0 ? " by the same amount" : ""}, so the direction is **${DIRS[d]}**.`,
        ],
        hint: `"From the ${names[0]}" means put your pencil on the ${names[0]} first, then see which way you go.`,
        traps: [{ spec: { type: "text", accept: dirAccept(opp) }, feedback: `That's the direction of the ${names[0]} from the ${names[1]} — the opposite way round. Start where the question says "from".` }],
      };
    },
  },
  {
    id: `${T}.four-figure-grid-ref`,
    topicId: T,
    title: "Give a 4-figure grid reference",
    level: 1,
    guideRef: "grid-references",
    generate(rng, tier) {
      const e0 = tier === 1 ? rng.int(10, 60) : rng.int(0, 95);
      const n0 = tier === 1 ? rng.int(10, 60) : rng.int(0, 95);
      const feats = rng.shuffle(FEATURES).slice(0, 3);
      const cells: [number, number][] = [];
      while (cells.length < 3) {
        const c: [number, number] = [rng.int(0, 3), rng.int(0, 3)];
        if (!cells.some((o) => o[0] === c[0] && o[1] === c[1])) cells.push(c);
      }
      const items = feats.map((f, i) => ({ f, ex: e0 + cells[i][0] + 0.5, ny: n0 + cells[i][1] + 0.4, label: true }));
      const target = rng.int(0, 2);
      const E = pad2(e0 + cells[target][0]);
      const Nn = pad2(n0 + cells[target][1]);
      const ref = E + Nn;
      const diagram = gridSvg(e0, n0, items, { tenths: false, aria: `Grid map with eastings ${pad2(e0)} to ${pad2(e0 + 4)} and northings ${pad2(n0)} to ${pad2(n0 + 4)} showing ${feats.map((f) => f.name).join(", ")}` });
      if (tier === 3 && rng.bool(0.5)) {
        const f = feats[target];
        return {
          prompt: `On this map extract the eastings run from ${pad2(e0)} to ${pad2(e0 + 4)}. Which feature is in grid square **${ref}**?`,
          diagram,
          answer: { type: "text", accept: f.accept, display: f.name },
          solution: [`Eastings first: find the vertical line **${E}** along the bottom.`, `Then northings: find the horizontal line **${Nn}** up the side.`, `The square to the right of and above where they cross contains the **${f.name}**.`],
          hint: "A 4-figure reference names the bottom-left corner of the square.",
          traps: Nn !== E ? (() => {
            const sw = cells.findIndex((c) => pad2(e0 + c[0]) === Nn && pad2(n0 + c[1]) === E);
            return sw >= 0 && sw !== target ? [{ spec: { type: "text", accept: feats[sw].accept }, feedback: "You read the northings first. Along the corridor (eastings) THEN up the stairs (northings)." }] : undefined;
          })() : undefined,
        };
      }
      const f = feats[target];
      const swapped = Nn + E;
      return {
        prompt: `On this map extract the eastings run from ${pad2(e0)} to ${pad2(e0 + 4)} and the northings from ${pad2(n0)} to ${pad2(n0 + 4)}. Give the 4-figure grid reference of the square containing the **${f.name}**.`,
        diagram,
        answer: { type: "text", accept: [ref, `${E} ${Nn}`], display: ref },
        solution: [
          `Find the bottom-left corner of the ${f.name}'s square.`,
          `Along the corridor: easting **${E}**. Up the stairs: northing **${Nn}**.`,
          `Grid reference = **${ref}**.`,
        ],
        hint: "Use the lines to the LEFT of and BELOW the feature. Eastings first.",
        traps: [
          ...(swapped !== ref ? [{ spec: { type: "text" as const, accept: [swapped] }, feedback: "You gave the northing first. Along the corridor (eastings), then up the stairs (northings)." }] : []),
          ...(() => {
            const plus = pad2(e0 + cells[target][0] + 1) + pad2(n0 + cells[target][1] + 1);
            return plus !== ref && plus !== swapped ? [{ spec: { type: "text" as const, accept: [plus] }, feedback: "You used the lines to the right and above. A grid square is named by its bottom-left corner." }] : [];
          })(),
        ],
      };
    },
  },
  {
    id: `${T}.latlong-facts`,
    topicId: T,
    title: "Recall lines of latitude & longitude",
    level: 1,
    guideRef: "latitude-longitude",
    generate: (rng, tier) => factItem(rng, tier, LATLONG, RECALL_FRAMES, "Latitude = lines going across (like the rungs of a ladder); longitude = lines running pole to pole."),
  },
  {
    id: `${T}.map-terms`,
    topicId: T,
    title: "Name the map-reading term",
    level: 1,
    guideRef: "scale-distance",
    generate: (rng, tier) => factItem(rng, tier, MAPTERMS, RECALL_FRAMES, "Picture an Ordnance Survey map and its key — which feature does this describe?"),
  },
  {
    id: `${T}.graph-types`,
    topicId: T,
    title: "Name the graph or map type",
    level: 1,
    guideRef: "graphs-and-charts",
    generate: (rng, tier) => factItem(rng, tier, GRAPHS, RECALL_FRAMES, "Think about what kind of data it shows: parts of a whole, change over time, a relationship, or a pattern on a map?"),
  },
  // ------------------------------------------------------------- level 2
  {
    id: `${T}.six-figure-grid-ref`,
    topicId: T,
    title: "Give a 6-figure grid reference",
    level: 2,
    guideRef: "grid-references",
    generate(rng, tier) {
      const e0 = tier === 1 ? rng.int(10, 60) : rng.int(0, 95);
      const n0 = tier === 1 ? rng.int(10, 60) : rng.int(0, 95);
      const ci = rng.int(0, 3), cj = rng.int(0, 3);
      // Tier 1: halves and near-halves; tiers 2–3: any tenth 2–8.
      const tens = tier === 1 ? [3, 5, 7] : [2, 3, 4, 5, 6, 7, 8];
      const a = rng.pick(tens), b = rng.pick(tens);
      const f = rng.pick(FEATURES);
      const E = pad2(e0 + ci), Nn = pad2(n0 + cj);
      const ref = `${E}${a}${Nn}${b}`;
      // Accept ±1 tenth either way (normal marking tolerance for estimating by eye).
      const accept: string[] = [];
      for (const da of [0, -1, 1]) for (const db of [0, -1, 1]) {
        const r = `${E}${a + da}${Nn}${b + db}`;
        accept.push(r, `${E}${a + da} ${Nn}${b + db}`);
      }
      const swapped = `${Nn}${b}${E}${a}`;
      const diagram = gridSvg(e0, n0, [{ f, ex: e0 + ci + a / 10, ny: n0 + cj + b / 10, label: false }], {
        tenths: true,
        aria: `Grid map with eastings ${pad2(e0)} to ${pad2(e0 + 4)} and northings ${pad2(n0)} to ${pad2(n0 + 4)}; a ${f.name} symbol inside square ${E}${Nn}; small ticks mark tenths`,
      });
      const traps: Trap[] = [{ spec: { type: "text", accept: [`${E}${Nn}`] }, feedback: "That's only the 4-figure square. Add the tenths: split the square into 10 and count across, then up." }];
      if (!accept.includes(swapped)) traps.push({ spec: { type: "text", accept: [swapped] }, feedback: "You gave the northing first. Eastings (along) then northings (up)." });
      return {
        prompt: `The map extract (eastings ${pad2(e0)}–${pad2(e0 + 4)}, northings ${pad2(n0)}–${pad2(n0 + 4)}) shows a **${f.name}** symbol — use its centre. Give its 6-figure grid reference. The small ticks on the axes mark tenths of a square.`,
        diagram,
        answer: { type: "text", accept, display: ref },
        solution: [
          `4-figure square: easting **${E}**, northing **${Nn}**.`,
          `Imagine the square split into tenths. The symbol is about **${a}** tenths across from line ${E} and **${b}** tenths up from line ${Nn}.`,
          `6-figure reference: ${E} + ${a}, then ${Nn} + ${b} = **${ref}** (one tenth either way is accepted).`,
        ],
        hint: "Find the 4-figure square first, then estimate how many tenths across and how many tenths up.",
        traps,
      };
    },
  },
  {
    id: `${T}.latitude-difference`,
    topicId: T,
    title: "Work out a difference in latitude",
    level: 2,
    guideRef: "latitude-longitude",
    generate(rng, tier) {
      // Latitudes rounded to the nearest degree.
      const CITIES: { name: string; lat: number }[] = [
        { name: "Singapore", lat: 1 }, { name: "London", lat: 52 }, { name: "Cairo", lat: 30 }, { name: "Tokyo", lat: 36 },
        { name: "Mumbai", lat: 19 }, { name: "Beijing", lat: 40 }, { name: "Moscow", lat: 56 }, { name: "Reykjavik", lat: 64 },
        { name: "Bangkok", lat: 14 }, { name: "Sydney", lat: -34 }, { name: "Cape Town", lat: -34 }, { name: "Jakarta", lat: -6 },
        { name: "Nairobi", lat: -1 }, { name: "Lima", lat: -12 }, { name: "Perth", lat: -32 }, { name: "Auckland", lat: -37 },
        { name: "Rio de Janeiro", lat: -23 }, { name: "Buenos Aires", lat: -35 }, { name: "Lagos", lat: 6 }, { name: "Hong Kong", lat: 22 },
      ];
      const fmt = (l: number) => (l >= 0 ? `${l}° N` : `${-l}° S`);
      let A = CITIES[0], B = CITIES[1];
      for (let i = 0; i < 60; i++) {
        A = rng.pick(CITIES);
        B = rng.pick(CITIES);
        const opposite = Math.sign(A.lat) !== Math.sign(B.lat);
        if (A.name === B.name || A.lat === B.lat) continue;
        if (tier === 1 && opposite) continue;
        if (tier >= 2 && !opposite && rng.bool(0.6)) continue;
        break;
      }
      const opposite = Math.sign(A.lat) !== Math.sign(B.lat);
      const diff = Math.abs(A.lat - B.lat);
      const wrongDiff = Math.abs(Math.abs(A.lat) - Math.abs(B.lat));
      const traps: Trap[] = [];
      const kmMode = tier === 3;
      const answer = kmMode ? diff * 111 : diff;
      if (opposite && wrongDiff !== diff) traps.push({ spec: n(kmMode ? wrongDiff * 111 : wrongDiff), feedback: "They are on opposite sides of the Equator, so ADD the two latitudes — you subtracted." });
      const steps = opposite
        ? [`${A.name} is ${fmt(A.lat)} and ${B.name} is ${fmt(B.lat)}: opposite sides of the Equator.`, `Add: ${Math.abs(A.lat)} + ${Math.abs(B.lat)} = **${diff}°** of latitude.`]
        : [`${A.name} is ${fmt(A.lat)} and ${B.name} is ${fmt(B.lat)}: same side of the Equator.`, `Subtract: ${Math.max(Math.abs(A.lat), Math.abs(B.lat))} − ${Math.min(Math.abs(A.lat), Math.abs(B.lat))} = **${diff}°** of latitude.`];
      if (kmMode) steps.push(`Distance north–south ≈ ${diff} × 111 = **${big(answer)} km**.`);
      return {
        prompt: kmMode
          ? `${A.name} is at about **${fmt(A.lat)}** and ${B.name} is at about **${fmt(B.lat)}**. Using 1° of latitude ≈ 111 km, estimate the north–south distance between them in km.`
          : `${A.name} is at about **${fmt(A.lat)}** and ${B.name} is at about **${fmt(B.lat)}**. How many degrees of latitude apart are they?`,
        answer: { type: "number", value: answer },
        solution: steps,
        hint: "Same hemisphere → subtract. Opposite hemispheres (one N, one S) → add, because you cross the Equator.",
        traps: traps.length ? traps : undefined,
      };
    },
  },
  {
    id: `${T}.map-scale-distance`,
    topicId: T,
    title: "Convert a map distance to a real distance",
    level: 2,
    guideRef: "scale-distance",
    generate(rng, tier) {
      // kmPerCm = scale / 100 000
      const scales = tier === 1 ? [50000, 100000] : tier === 2 ? [25000, 50000, 10000] : [25000, 50000, 250000, 10000];
      const sc = rng.pick(scales);
      const kmPerCm = sc / 100000;
      const scTxt = big(sc).replace(/,/g, " ");
      const who = rng.pick(["Hana", "Arjun", "Siti", "Marcus", "Wei Ling", "Jun"]);
      const place = rng.pick(["two villages", "the youth hostel and the beach", "the trig point and the car park", "the farm and the bridge", "the church and the campsite", "the lighthouse and the jetty"]);
      if (tier === 3 && rng.bool(0.5)) {
        // Winding route: sum of segments.
        const segs = [rng.int(12, 45) / 10, rng.int(12, 45) / 10, rng.int(5, 30) / 10];
        const total = clean(segs[0] + segs[1] + segs[2]);
        const km = clean(total * kmPerCm);
        return {
          prompt: `${who} measures a winding path on a **1:${scTxt}** map in three straight sections: ${segs.map(num).join(" cm, ")} cm. What is the real length of the path in km?`,
          answer: { type: "number", value: km },
          solution: [
            `Total map distance = ${segs.map(num).join(" + ")} = ${num(total)} cm.`,
            `At 1:${scTxt}, 1 cm = ${big(sc)} cm = ${num(kmPerCm)} km.`,
            `${num(total)} × ${num(kmPerCm)} = **${num(km)} km**.`,
          ],
          hint: "Add the sections first, then convert using the scale.",
          traps: [{ spec: n(clean(total * sc)), feedback: "That's the distance in centimetres. Divide by 100 000 to get km." }],
        };
      }
      const cm = tier === 1 ? rng.int(2, 15) : rng.int(12, 120) / 10;
      const km = clean(cm * kmPerCm);
      const traps: Trap[] = [{ spec: n(clean(cm * sc)), feedback: "That's the real distance in centimetres. Divide by 100 to get metres and by 1000 again for km." }];
      const m = clean(km * 1000);
      if (m !== km) traps.push({ spec: n(m), feedback: `That's the answer in metres. The question wants km: ${big(m)} m = ${num(km)} km.` });
      return {
        prompt: `On a **1:${scTxt}** map, ${who} measures the straight-line distance between ${place} as **${num(cm)} cm**. What is the real distance in km?`,
        answer: { type: "number", value: km },
        solution: [
          `1:${scTxt} means 1 cm on the map = ${big(sc)} cm on the ground = ${num(kmPerCm)} km.`,
          `${num(cm)} × ${num(kmPerCm)} = **${num(km)} km**.`,
        ],
        hint: "Multiply by the scale to get cm on the ground, then ÷ 100 000 to change cm into km.",
        traps,
      };
    },
  },
  {
    id: `${T}.climate-data`,
    topicId: T,
    title: "Read climate data: range, total and mean",
    level: 2,
    guideRef: "graphs-and-charts",
    generate(rng, tier) {
      const CLIMATES = [
        { label: "tropical rainforest", tBase: 27, tAmp: 1, rBase: 200, rAmp: 80 },
        { label: "hot desert", tBase: 24, tAmp: 9, rBase: 4, rAmp: 3 },
        { label: "Mediterranean", tBase: 17, tAmp: 7, rBase: 50, rAmp: -45 },
        { label: "temperate (UK-type)", tBase: 10, tAmp: 6, rBase: 70, rAmp: -15 },
        { label: "polar (tundra)", tBase: -12, tAmp: 14, rBase: 20, rAmp: 10 },
        { label: "monsoon", tBase: 28, tAmp: 3, rBase: 150, rAmp: 145 },
      ];
      const pool2 = tier === 1 ? CLIMATES.slice(0, 4) : CLIMATES;
      const c = rng.pick(pool2);
      const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
      const temps = months.map((_, i) => {
        const seasonal = Math.round(c.tAmp * Math.cos(((i - 6.5) * Math.PI) / 6));
        return c.tBase + seasonal + rng.int(-1, 1);
      });
      const rain = months.map((_, i) => Math.max(0, Math.round(c.rBase + c.rAmp * Math.cos(((i - 6.5) * Math.PI) / 6) + rng.int(-10, 10) * (c.rBase > 20 ? 1 : 0.2))));
      const tRow = `| Temp (°C) | ${temps.map(num).join(" | ")} |`;
      const rRow = `| Rain (mm) | ${rain.join(" | ")} |`;
      const table = `| Month | ${months.join(" | ")} |\n|---|${months.map(() => "---").join("|")}|\n${tRow}\n${rRow}`;
      const kind = tier === 1 ? rng.pick(["range", "total"]) : tier === 2 ? rng.pick(["range", "total", "mean"]) : rng.pick(["mean", "share", "range"]);
      const intro = `Climate data for a Northern Hemisphere weather station with a ${c.label} climate:\n\n${table}\n\n`;
      if (kind === "range") {
        const hi = Math.max(...temps), lo = Math.min(...temps);
        const r = hi - lo;
        const traps: Trap[] = [];
        if (lo < 0 && Math.abs(hi + lo) !== r) traps.push({ spec: n(Math.abs(hi + lo)), feedback: `Careful with negatives: ${num(hi)} − (${num(lo)}) = ${num(hi)} + ${num(-lo)}.` });
        return {
          prompt: intro + "What is the annual temperature range in °C?",
          answer: { type: "number", value: r },
          solution: [`Highest = ${num(hi)} °C, lowest = ${num(lo)} °C.`, `Range = ${num(hi)} − ${lo < 0 ? `(${num(lo)})` : num(lo)} = **${num(r)} °C**.`],
          hint: "Range = highest − lowest.",
          traps: traps.length ? traps : undefined,
        };
      }
      if (kind === "total") {
        const tot = rain.reduce((a, b) => a + b, 0);
        return {
          prompt: intro + "What is the total annual rainfall in mm?",
          answer: { type: "number", value: tot },
          solution: [`Add all 12 months: ${rain.join(" + ")} = **${big(tot)} mm**.`, tot < 250 ? "Under 250 mm a year — that's desert-dry." : "Compare: hot deserts get under 250 mm a year."],
          hint: "Add up all twelve rainfall figures — the total, not the average.",
        };
      }
      if (kind === "mean") {
        const sum = temps.reduce((a, b) => a + b, 0);
        const mean = roundTo(sum / 12, 1);
        return {
          prompt: intro + "What is the mean annual temperature in °C? Give your answer to 1 decimal place.",
          answer: { type: "number", value: mean, tolerance: 0.05 },
          solution: [`Sum of the 12 temperatures = ${num(sum)}.`, `Mean = ${num(sum)} ÷ 12 = ${num(roundTo(sum / 12, 3))}… ≈ **${num(mean)} °C**.`],
          hint: "Add all 12 temperatures (watch any negatives), then divide by 12.",
        };
      }
      // share of rain in wettest three months
      const tot = rain.reduce((a, b) => a + b, 0) || 1;
      const top3 = [...rain].sort((a, b) => b - a).slice(0, 3);
      const s3 = top3.reduce((a, b) => a + b, 0);
      const pct = roundTo((s3 / tot) * 100, 1);
      return {
        prompt: intro + "What percentage of the year's rainfall falls in the three wettest months? Give your answer to 1 decimal place.",
        answer: { type: "number", value: pct, tolerance: 0.05 },
        solution: [`Total rainfall = ${big(tot)} mm.`, `Three wettest months: ${top3.join(" + ")} = ${big(s3)} mm.`, `${big(s3)} ÷ ${big(tot)} × 100 = **${num(pct)}%**.`],
        hint: "Find the total first, then the three biggest monthly values. Part ÷ whole × 100.",
      };
    },
  },
  {
    id: `${T}.patterns-and-data`,
    topicId: T,
    title: "Recall TEA, CLOCC, data types & command words",
    level: 2,
    guideRef: "describing-patterns",
    generate: (rng, tier) => factItem(rng, tier, PATTERNS, RECALL_FRAMES, "Is it about *how* you describe (TEA/CLOCC), *what kind* of data, or *what the question wants* (command word)?"),
  },
  {
    id: `${T}.scatter-correlation`,
    topicId: T,
    title: "Identify correlation on a scatter graph",
    level: 2,
    guideRef: "describing-patterns",
    generate(rng, tier) {
      const CONTEXTS: Record<"positive" | "negative" | "none", { x: string; y: string; xr: [number, number]; yr: [number, number] }[]> = {
        positive: [
          { x: "Distance downstream (km)", y: "Pebble roundness score", xr: [0, 20], yr: [1, 10] },
          { x: "GDP per person ($000)", y: "Life expectancy (years)", xr: [1, 60], yr: [55, 85] },
          { x: "Urban population (%)", y: "Internet users (%)", xr: [10, 100], yr: [5, 95] },
          { x: "Height of land (m)", y: "Annual rainfall (mm)", xr: [0, 1000], yr: [800, 2400] },
          { x: "Shop floor space (m²)", y: "Shoppers per hour", xr: [50, 500], yr: [20, 300] },
        ],
        negative: [
          { x: "Altitude (m)", y: "Mean temperature (°C)", xr: [0, 3000], yr: [5, 28] },
          { x: "Distance from city centre (km)", y: "Land value ($ per m²)", xr: [0, 20], yr: [200, 2000] },
          { x: "GDP per person ($000)", y: "Birth rate (per 1000)", xr: [1, 60], yr: [8, 45] },
          { x: "Distance from MRT station (m)", y: "Pedestrians per 10 minutes", xr: [0, 800], yr: [5, 120] },
          { x: "Women in secondary school (%)", y: "Fertility rate (children per woman)", xr: [10, 100], yr: [1.2, 6.5] },
        ],
        none: [
          { x: "Country area (thousand km²)", y: "Mean July temperature (°C)", xr: [10, 500], yr: [10, 30] },
          { x: "House number", y: "Number of pets", xr: [1, 100], yr: [0, 6] },
          { x: "Student height (cm)", y: "Minutes spent on homework", xr: [140, 175], yr: [20, 120] },
          { x: "Day of the month", y: "Visitors to a museum", xr: [1, 30], yr: [100, 900] },
        ],
      };
      const kind = rng.pick(["positive", "negative", "none"] as const);
      // Lower-case an axis label for use mid-sentence, but keep acronyms such as GDP.
      const lc = (t: string) => (/^[A-Z][a-z]/.test(t) ? t[0].toLowerCase() + t.slice(1) : t);
      const ctx = rng.pick(CONTEXTS[kind]);
      const npts = tier === 1 ? 8 : 10;
      // Generate in unit square, retrying until |r| fits the kind clearly.
      let xs: number[] = [], ys: number[] = [];
      const noise = tier === 3 ? 0.18 : 0.1;
      for (let attempt = 0; attempt < 200; attempt++) {
        xs = Array.from({ length: npts }, () => rng.next());
        ys = xs.map((x) => (kind === "none" ? rng.next() : Math.min(1, Math.max(0, (kind === "positive" ? 0.1 + 0.8 * x : 0.9 - 0.8 * x) + (rng.next() - 0.5) * 2 * noise))));
        const mx = xs.reduce((a, b) => a + b, 0) / npts, my = ys.reduce((a, b) => a + b, 0) / npts;
        let sxy = 0, sxx = 0, syy = 0;
        for (let i = 0; i < npts; i++) { sxy += (xs[i] - mx) * (ys[i] - my); sxx += (xs[i] - mx) ** 2; syy += (ys[i] - my) ** 2; }
        const r = sxy / Math.sqrt(sxx * syy || 1);
        if (kind === "none" ? Math.abs(r) < 0.2 : kind === "positive" ? r > 0.8 : r < -0.8) break;
      }
      const dp = ctx.yr[1] < 10 ? 1 : 0;
      const sx = (u: number) => roundTo(ctx.xr[0] + u * (ctx.xr[1] - ctx.xr[0]), 0);
      const sy = (u: number) => roundTo(ctx.yr[0] + u * (ctx.yr[1] - ctx.yr[0]), dp);
      const order = xs.map((_, i) => i).sort((a, b) => xs[a] - xs[b]);
      const W = 300, H = 210, L = 40, B = 180, R = 290, Tt = 15;
      let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatter graph of ${ctx.y} against ${ctx.x} with ${npts} points">`;
      svg += `<rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff"/>`;
      svg += `<line x1="${L}" y1="${B}" x2="${R}" y2="${B}" stroke="#1f2937" stroke-width="1.5"/><line x1="${L}" y1="${B}" x2="${L}" y2="${Tt}" stroke="#1f2937" stroke-width="1.5"/>`;
      for (const i of order) {
        svg += `<circle cx="${roundTo(L + xs[i] * (R - L - 10) + 5, 1)}" cy="${roundTo(B - ys[i] * (B - Tt - 10) - 5, 1)}" r="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1"/>`;
      }
      svg += `<text x="${(L + R) / 2}" y="${H - 6}" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">${ctx.x}</text>`;
      svg += `<text x="12" y="${(B + Tt) / 2}" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="rotate(-90 12 ${(B + Tt) / 2})">${ctx.y}</text>`;
      svg += `</svg>`;
      const table = `| ${ctx.x} | ${order.map((i) => num(sx(xs[i]))).join(" | ")} |\n|---|${order.map(() => "---").join("|")}|\n| ${ctx.y} | ${order.map((i) => num(sy(ys[i]))).join(" | ")} |`;
      const acc = kind === "positive" ? ["positive", "positive correlation", "strong positive", "strong positive correlation"] : kind === "negative" ? ["negative", "negative correlation", "strong negative", "strong negative correlation", "inverse"] : ["no correlation", "none", "zero correlation", "no relationship", "no clear correlation"];
      const traps: Trap[] = kind === "positive"
        ? [{ spec: { type: "text", accept: ["negative", "negative correlation"] }, feedback: "Look left to right: the points rise, so as x goes up, y goes up too." }]
        : kind === "negative"
          ? [{ spec: { type: "text", accept: ["positive", "positive correlation"] }, feedback: "Look left to right: the points fall, so as x goes up, y goes down." }]
          : [{ spec: { type: "text", accept: ["positive", "positive correlation", "negative", "negative correlation"] }, feedback: "Try to draw one straight line of best fit — the points are scattered all over, so there's no clear relationship." }];
      return {
        prompt: `The data is plotted on the scatter graph.\n\n${table}\n\nWhat type of correlation does the graph show: positive, negative or no correlation?`,
        diagram: svg,
        answer: { type: "text", accept: acc, display: kind === "none" ? "no correlation" : `${kind} correlation` },
        solution: [
          kind === "positive" ? `As ${lc(ctx.x)} increases, ${lc(ctx.y)} also tends to increase: **positive correlation**.` : kind === "negative" ? `As ${lc(ctx.x)} increases, ${lc(ctx.y)} tends to decrease: **negative correlation**.` : "The points are scattered with no upward or downward trend: **no correlation**.",
          "Correlation shows a relationship, not proof that one thing causes the other.",
        ],
        hint: "Imagine a line of best fit. Does it slope up, slope down, or can't you draw one?",
        traps,
      };
    },
  },
  // ------------------------------------------------------------- level 3
  {
    id: `${T}.percentage-change`,
    topicId: T,
    title: "Calculate percentage change and rate of change",
    level: 3,
    guideRef: "graphs-and-charts",
    generate(rng, tier) {
      const CONTEXTS = [
        { what: "The population of a new town", unit: "people", y1: 2000, y2: 2020 },
        { what: "Visitors to a marine park", unit: "visitors", y1: 2015, y2: 2023 },
        { what: "Cars registered in a city", unit: "cars", y1: 2010, y2: 2020 },
        { what: "The number of HDB flats in an estate", unit: "flats", y1: 1990, y2: 2020 },
        { what: "Tourists arriving at an island", unit: "tourists", y1: 2012, y2: 2022 },
        { what: "Students at a school", unit: "students", y1: 2016, y2: 2024 },
        { what: "Fishing boats in a harbour", unit: "boats", y1: 2000, y2: 2020 },
      ];
      const c = rng.pick(CONTEXTS);
      if (tier === 3 && rng.bool(0.5)) {
        // Rate of change per year, exact by construction.
        const years = c.y2 - c.y1;
        let perYear = rng.int(2, 40) * 5 * (rng.bool(0.7) ? 1 : -1);
        const start = rng.int(20, 90) * 100;
        // A decrease must never take the count to zero or below.
        if (start + perYear * years < start / 4) perYear = -perYear;
        const end = start + perYear * years;
        return {
          prompt: `${c.what} changed from **${big(start)}** ${c.unit} in ${c.y1} to **${big(end)}** in ${c.y2}. What was the average rate of change in ${c.unit} per year? (Use a negative number for a decrease.)`,
          answer: { type: "number", value: perYear },
          solution: [`Change = ${big(end)} − ${big(start)} = ${big(end - start)}.`, `Time = ${c.y2} − ${c.y1} = ${years} years.`, `Rate = ${big(end - start)} ÷ ${years} = **${num(perYear)} ${c.unit} per year**.`],
          hint: "Rate of change = change ÷ time taken.",
          traps: [{ spec: n(end - start), feedback: `That's the total change. Divide by the ${years} years.` }],
        };
      }
      let start: number, pct: number;
      if (tier === 1) {
        start = rng.pick([200, 400, 500, 800, 1000, 2000, 5000]);
        pct = rng.pick([10, 20, 25, 30, 40, 50, 60, 75, 100]);
      } else {
        start = rng.int(12, 95) * 100;
        pct = 0;
      }
      let end: number;
      if (tier === 1) end = clean((start * (100 + pct)) / 100);
      else {
        const dec = tier === 3 && rng.bool(0.5);
        end = start + (dec ? -1 : 1) * rng.int(3, 60) * 25;
        if (end <= 0) end = start + 500;
      }
      const ch = end - start;
      const exact = (ch / start) * 100;
      const answerVal = tier === 1 ? roundTo(exact, 0) : roundTo(exact, 1);
      const traps: Trap[] = [];
      const wrong = roundTo((ch / end) * 100, 1);
      if (Math.abs(wrong - answerVal) > 0.1) traps.push({ spec: { type: "number", value: wrong, tolerance: 0.05 }, feedback: "You divided by the NEW value. Percentage change = change ÷ ORIGINAL × 100." });
      return {
        prompt: `${c.what} changed from **${big(start)}** in ${c.y1} to **${big(end)}** in ${c.y2}. Calculate the percentage change${tier === 1 ? "" : " to 1 decimal place"}.${ch < 0 ? " (Give a negative answer for a decrease.)" : ""}`,
        answer: tier === 1 ? { type: "number", value: answerVal } : { type: "number", value: answerVal, tolerance: 0.05 },
        solution: [
          `Change = ${big(end)} − ${big(start)} = ${big(ch)}.`,
          `Percentage change = {{${ch}/${start}}} × 100 = **${num(answerVal)}%**${ch < 0 ? " (a decrease)" : ""}.`,
        ],
        hint: "Percentage change = (new − old) ÷ old × 100.",
        traps: traps.length ? traps : undefined,
      };
    },
  },
];
