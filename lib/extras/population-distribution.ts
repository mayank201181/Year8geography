import type { TopicExtras } from "../types";

export const populationDistributionExtras: TopicExtras = {
  hook: "Bangladesh is about one-fiftieth the size of Australia, yet it is home to over six times as many people. And roughly 9 in 10 of the world's people live on just 10% of its land. Why do humans crowd into some places and leave others almost empty?",
  didYouKnow: [
    "Singapore packs about 6 million people into roughly 735 km² — around 8,200 people per km², one of the highest densities of any country.",
    "Mongolia has only about 2 people per km². If Singapore were that sparse, the whole country would hold fewer than 2,000 people.",
    "Monaco is the world's most densely populated country, with about 38,000 people on just 2 km² — around 18,000 people per km².",
    "About 90% of Australia's 27 million people live in urban areas, mostly on the coast; much of the dry interior has fewer than 1 person per km².",
    "Around 90% of the world's people live in the Northern Hemisphere, and roughly 4 in 10 people live within 100 km of a coast.",
  ],
  experiments: [
    {
      title: "HDB block density census",
      emoji: "🏢",
      materials: ["Notebook and pencil", "Phone map app (to measure area)", "Calculator"],
      steps: [
        "Pick your own (or a nearby) HDB block. Count the storeys and the number of flats on one floor (look at the letterboxes on the ground floor for a quick total).",
        "Multiply to get the total number of flats. Assume about 3 people per flat to estimate the block's population.",
        "Use a map app to estimate the land the block stands on, including its void deck and the green space around it (e.g. 60 m × 30 m). Convert m² to km² by dividing by 1,000,000.",
        "Work out density = people ÷ area (km²). Compare it with Singapore's average (about 8,200 per km²) and Mongolia's (about 2 per km²).",
        "Repeat for a landed-housing street or a park nearby and compare.",
      ],
      science: "You will usually find your block is far denser than Singapore's average — often tens of thousands of people per km². That is because the national average includes reservoirs, nature reserves, the airport and industrial land where hardly anyone lives. Building upwards lets a small, land-scarce country house millions of people: a human factor overcoming a physical limit.",
      safety: "Count from public areas only and do not disturb residents. Go with an adult or a friend.",
    },
    {
      title: "Map the 'empty' and 'crowded' places",
      emoji: "🗺️",
      materials: ["A printed world or Asia outline map (or an atlas)", "Coloured pencils", "An atlas or online population-density map"],
      steps: [
        "On your outline map, shade in three colours where you think people are dense, moderately populated and sparse — predict before you look anything up!",
        "Now compare with a real population-density map in an atlas. Mark where your predictions were wrong.",
        "For three sparse areas (e.g. the Sahara, Siberia, the Himalayas) and three dense areas (e.g. the Ganges valley, Java, eastern China), write down the physical or human factor that explains each.",
        "Sort your reasons into two columns: physical factors (relief, climate, water, soil) and human factors (jobs, transport, ports, government).",
      ],
      science: "You find that population distribution is very uneven. Sparse areas are usually too cold, too dry, too high or too steep; dense areas tend to be lowland river valleys and coasts with water, fertile soil and good trade links. Human factors such as jobs and ports can then turn those places into huge cities.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Density vs distribution",
      svg: `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two squares with the same number of people: one spread evenly, one clustered"><rect x="10" y="20" width="150" height="110" rx="6" fill="#ecfccb" stroke="#65a30d"/><rect x="200" y="20" width="150" height="110" rx="6" fill="#ecfccb" stroke="#65a30d"/><g fill="#b91c1c"><circle cx="30" cy="40" r="4"/><circle cx="65" cy="40" r="4"/><circle cx="100" cy="40" r="4"/><circle cx="135" cy="40" r="4"/><circle cx="30" cy="75" r="4"/><circle cx="65" cy="75" r="4"/><circle cx="100" cy="75" r="4"/><circle cx="135" cy="75" r="4"/><circle cx="30" cy="110" r="4"/><circle cx="65" cy="110" r="4"/><circle cx="100" cy="110" r="4"/><circle cx="135" cy="110" r="4"/></g><path d="M200 105 Q250 95 260 130" fill="none" stroke="#2563eb" stroke-width="4"/><g fill="#b91c1c"><circle cx="232" cy="105" r="4"/><circle cx="242" cy="98" r="4"/><circle cx="250" cy="110" r="4"/><circle cx="240" cy="116" r="4"/><circle cx="228" cy="118" r="4"/><circle cx="256" cy="100" r="4"/><circle cx="262" cy="114" r="4"/><circle cx="248" cy="122" r="4"/><circle cx="222" cy="108" r="4"/><circle cx="236" cy="124" r="4"/><circle cx="330" cy="40" r="4"/><circle cx="215" cy="35" r="4"/></g><text x="85" y="150" font-size="12" text-anchor="middle" fill="#334155">Even distribution</text><text x="275" y="150" font-size="12" text-anchor="middle" fill="#334155">Uneven (clustered by a river)</text><text x="180" y="13" font-size="12" text-anchor="middle" fill="#334155">Same area, same 12 people = same density</text></svg>`,
      caption: "Density is a number (people per km²); distribution is the pattern of where people are. Both squares have the same density, but very different distributions.",
    },
    {
      title: "Factors affecting where people live",
      svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table of physical and human factors that attract or push away people"><rect x="0" y="0" width="360" height="200" fill="#ffffff"/><rect x="90" y="8" width="130" height="24" rx="5" fill="#059669"/><rect x="225" y="8" width="130" height="24" rx="5" fill="#7c3aed"/><text x="155" y="25" font-size="12" text-anchor="middle" fill="#ffffff" font-weight="bold">Physical</text><text x="290" y="25" font-size="12" text-anchor="middle" fill="#ffffff" font-weight="bold">Human</text><rect x="4" y="38" width="82" height="74" rx="5" fill="#dcfce7"/><rect x="4" y="118" width="82" height="74" rx="5" fill="#fee2e2"/><text x="45" y="72" font-size="12" text-anchor="middle" fill="#166534" font-weight="bold">Attract</text><text x="45" y="88" font-size="11" text-anchor="middle" fill="#166534">(dense)</text><text x="45" y="152" font-size="12" text-anchor="middle" fill="#991b1b" font-weight="bold">Repel</text><text x="45" y="168" font-size="11" text-anchor="middle" fill="#991b1b">(sparse)</text><g font-size="11" fill="#1e293b"><text x="96" y="56">Flat lowland</text><text x="96" y="72">Fresh water, rivers</text><text x="96" y="88">Fertile soil</text><text x="96" y="104">Mild, rainy climate</text><text x="231" y="56">Jobs and industry</text><text x="231" y="72">Ports, roads, airports</text><text x="231" y="88">Schools, hospitals</text><text x="231" y="104">Stable government</text><text x="96" y="136">Steep mountains</text><text x="96" y="152">Deserts (too dry)</text><text x="96" y="168">Ice and cold</text><text x="96" y="184">Dense rainforest</text><text x="231" y="136">Few jobs</text><text x="231" y="152">Poor transport</text><text x="231" y="168">Few services</text><text x="231" y="184">Conflict</text></g></svg>`,
      caption: "Physical factors come from the natural environment; human factors are created by people. Dense places usually have several attracting factors at once.",
    },
  ],
  interactives: ["population-distribution:DensityCalculator", "population-distribution:SettlementIsland"],
};
