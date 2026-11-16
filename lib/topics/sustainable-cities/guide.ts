import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "sustainable-cities",
  title: "Sustainable Cities of the Future",
  strand: "Cities",
  icon: "🌱",
  summary: "How can billions of people live in cities without using up the planet? Singapore, Las Vegas and the eco-city challenge.",
  intro:
    "More than half of all humans now live in cities, and that share keeps rising. Cities are where most energy is burned, most water is used and most waste is thrown away — but they are also where clever planning can make the biggest difference. In this topic you will learn what 'sustainable' really means (and how to test a claim that something is), see how Singapore turned a tiny, water-poor island into a model city, judge whether a desert city like Las Vegas can last, and use real eco-city examples to design and score your own city for the inter-class eco-city competition.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "what-is-sustainable",
      heading: "What makes a city sustainable?",
      discovery: {
        problem:
          "A city builds a huge new motorway into its centre. For two years, traffic jams vanish and businesses love it. Then the jams come back — worse than before — and doctors report more children with asthma. Was the motorway a 'sustainable' idea? What would you need to check before deciding?",
        idea:
          "Faster roads tempt more people to drive, so traffic grows to fill the new space. The motorway helped the **economy** in the short term, but harmed **people's health** and the **environment** in the long term. A sustainable decision has to work for all three — **social, economic and environmental** — and keep working for **future generations**, not just for the next two years.",
      },
      body:
        "The most famous definition in this topic comes from the **Brundtland Report**, *Our Common Future*, published by the United Nations' World Commission on Environment and Development in **1987**:\n\n> **Sustainable development** is development that meets the needs of the present without compromising the ability of future generations to meet their own needs.\n\nIn plain words: live well today **without** leaving a mess, a debt or an empty cupboard for the people who come after you.\n\n**The three pillars of sustainability**\n\nA sustainable city has to succeed on all three at the same time:\n\n| Pillar | The question it asks | City examples |\n|---|---|---|\n| Social | Are people healthy, safe, housed and treated fairly? | affordable homes, schools, clinics, safe streets, places to meet |\n| Economic | Can people earn a living, and can the city pay its way? | jobs, efficient transport, low running costs, tourism |\n| Environmental | Is the city protecting nature, water and the climate? | clean air, low carbon emissions, green space, recycling, saving water |\n\nA project that scores on only one pillar is **not** sustainable. A new motorway may help businesses but adds traffic, pollution and emissions. A beautiful nature reserve that nobody can afford to visit fails the social test.\n\n**Why cities matter so much**\n\n- About **57%** of the world's people lived in urban areas in 2023, and the share is still rising.\n- Cities cover only a tiny share of the Earth's land (roughly 2–3%), but UN estimates suggest they use most of the world's energy and produce roughly **70%** of its carbon dioxide emissions.\n- So making cities more sustainable tackles a huge part of the global problem in one go.\n\n**Ecological footprint**\n\nYour **ecological footprint** is the area of productive land and sea needed to supply everything you use (food, energy, materials) and to absorb your waste, including carbon dioxide. It is measured in **global hectares (gha) per person**.\n\nWe compare it with the Earth's **biocapacity** — what the planet can renew each year, roughly 1.5–1.6 gha for each person alive today.\n\n    number of Earths needed = footprint per person ÷ biocapacity per person\n\nThe Global Footprint Network estimates that humanity as a whole uses roughly **1.7 Earths' worth** of resources each year. We are living on 'credit': catching fish faster than they breed, cutting forests faster than they regrow and releasing more CO₂ than oceans and forests can absorb. People in rich, high-consuming countries have far larger footprints than people in low-income countries, so the problem is also one of **fairness**.",
      diagram: `<svg viewBox="0 0 420 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram of the three pillars of sustainability. Three overlapping circles: social, economic and environmental. Social and economic overlap is labelled equitable, social and environmental is bearable, economic and environmental is viable, and the centre where all three overlap is sustainable."><rect width="420" height="310" fill="#ffffff"/><circle cx="210" cy="110" r="90" fill="#fecaca" fill-opacity="0.6" stroke="#334155" stroke-width="2"/><circle cx="160" cy="195" r="90" fill="#fde68a" fill-opacity="0.6" stroke="#334155" stroke-width="2"/><circle cx="260" cy="195" r="90" fill="#bbf7d0" fill-opacity="0.6" stroke="#334155" stroke-width="2"/><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="210" y="58" font-size="13" font-weight="bold">Social</text><text x="210" y="74" font-size="11">people, fairness</text><text x="120" y="205" font-size="12" font-weight="bold">Economic</text><text x="120" y="221" font-size="11">jobs, money</text><text x="300" y="205" font-size="12" font-weight="bold">Environmental</text><text x="300" y="221" font-size="11">the planet</text><text x="158" y="145" font-size="11">Equitable</text><text x="262" y="145" font-size="11">Bearable</text><text x="210" y="248" font-size="11">Viable</text><rect x="170" y="161" width="80" height="18" rx="4" fill="#ffffff" stroke="#334155"/><text x="210" y="174" font-size="11" font-weight="bold">Sustainable</text><text x="210" y="303" font-size="12">Sustainable = all three pillars at the same time</text></g></svg>`,
      diagramCaption:
        "The three pillars. Social + economic = equitable (fair); social + environmental = bearable (liveable); economic + environmental = viable (can last). Only the centre, where all three overlap, is truly sustainable.",
      workedExamples: [
        {
          title: "How many Earths? (calculation)",
          problem:
            "Country X has an average ecological footprint of **5.4 gha per person**. Using a world biocapacity of **1.6 gha per person**, how many Earths would we need if everyone lived like the people of Country X?",
          steps: [
            "Write the method: number of Earths = footprint per person ÷ biocapacity per person.",
            "Substitute: 5.4 ÷ 1.6.",
            "Calculate: 5.4 ÷ 1.6 = 3.375.",
            "Round sensibly and interpret: about 3.4 Earths — more than three times what the planet can renew each year.",
          ],
          answer: "About 3.4 Earths (5.4 ÷ 1.6 = 3.375).",
          yourTurn: {
            question:
              "Your turn: Arjun's class works out that the average footprint of people in Country Y is 4.0 gha per person. Using a biocapacity of 1.6 gha per person, how many Earths would be needed if everyone lived this way? Give your answer to 1 decimal place.",
            answer: { type: "number", value: 2.5, tolerance: 0.05 },
            solution: "Number of Earths = 4.0 ÷ 1.6 = 2.5. Everyone living like this would need two and a half Earths.",
          },
        },
        {
          title: "Model answer: is this project sustainable? (3 marks)",
          problem:
            "A city plans a large solar farm on a rubbish tip that has been closed for years. Explain why this could be described as sustainable. [3 marks]",
          steps: [
            "Use the command word: 'explain' means give reasons, not just features. Plan one reason for each pillar (SEE).",
            "Environmental: solar power replaces electricity from burning fossil fuels, cutting carbon emissions, and it reuses damaged land instead of clearing green space.",
            "Economic: after it is built the 'fuel' (sunlight) is free, so energy bills fall and the land earns money instead of lying unused.",
            "Social: cleaner air improves health, and jobs are created in installing and maintaining the panels.",
            "Link back to the definition: it meets today's needs (electricity) without harming future generations' ability to meet theirs.",
          ],
          answer:
            "The solar farm is environmentally sustainable because it produces electricity without burning fossil fuels, cutting carbon emissions, and it reuses old, damaged land so no green space is lost. It is economically sustainable because sunlight is free, so running costs are low and unused land now earns money. It is also socially sustainable because cleaner air improves people's health and new maintenance jobs are created — so it meets today's needs without harming future generations.",
          yourTurn: {
            question:
              "Your turn: a city plants 10,000 street trees to absorb carbon dioxide, give shade and provide homes for birds. Which ONE pillar of sustainability does this mainly support?",
            answer: { type: "text", accept: ["environmental", "environment", "environmental pillar", "the environmental pillar"] },
            solution:
              "Mainly **environmental**: absorbing CO₂, cooling streets and supporting wildlife all protect nature and the climate. (Shade also helps people's health — a social benefit — but the main aim here is environmental.)",
          },
        },
      ],
      keyPoints: [
        "Brundtland Report (1987): sustainable development meets the needs of the present without compromising the ability of future generations to meet their own needs.",
        "The three pillars are social, economic and environmental — a sustainable city must succeed on all three at once.",
        "About 57% of people lived in urban areas in 2023; cities produce roughly 70% of CO₂ emissions (UN estimate), so cities are central to sustainability.",
        "Ecological footprint = productive land and sea needed to supply what you use and absorb your waste, in global hectares per person.",
        "Humanity uses roughly 1.7 Earths of resources a year (Global Footprint Network) — we are overshooting what the planet can renew.",
      ],
      whyItWorks:
        "Sustainability is about **time**. Nature renews resources at a fixed rate: forests regrow, fish breed, rain refills reservoirs. If a city takes resources faster than they renew, or dumps waste faster than it can be absorbed, the 'stock' shrinks every year — like spending more than you earn and dipping into your savings. It can feel fine for a while, but eventually the savings run out and the next generation inherits the debt. Checking all three pillars matters because they are linked: wreck the environment and you eventually damage health (social) and jobs (economic) too.",
      strategies: ["Social / economic / environmental (SEE)", "Use the command word", "Think at different scales", "Weigh both sides then judge"],
      thinkDeeper:
        "Singapore's footprint per person is large because it imports most of its food, energy and materials — but its land use per person is tiny. Is it fair to judge a city only by the land inside its own borders? Where does a city's footprint really lie?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "singapore-success",
      heading: "Sustainable success: Singapore",
      discovery: {
        problem:
          "Singapore gets more than 2,000 mm of rain a year — several times more than London (about 600 mm). Yet for most of its history Singapore has worried about running out of water. How can a rainy island be short of water?",
        idea:
          "Rain is only useful if you can **catch and store** it. Singapore is tiny (about 735 km²), has no large rivers, no natural lakes and little usable groundwater, and around 6 million people and many industries need water every day. There is simply not enough land to hold all the water it needs. So Singapore spread the risk across **four different sources** — the **Four National Taps** — including two that do not depend on rain at all.",
      },
      body:
        "Singapore packs about **6.0 million people (2024)** into roughly **735 km²** — a density of about 8,000 people per km². With so little space, every decision about water, transport and housing has to be planned carefully. That planning is why Singapore is often called a model sustainable city.\n\n**1. Water: the Four National Taps** (run by **PUB**, Singapore's national water agency)\n\n| Tap | How it works | Key fact |\n|---|---|---|\n| Local catchment | Rain is collected by drains and canals and stored in 17 reservoirs | About two-thirds of Singapore's land is water catchment |\n| Imported water | Piped across the Causeway from **Johor, Malaysia** | The **1962 Water Agreement** runs until **2061** |\n| NEWater | Used water is cleaned with membranes (microfiltration and reverse osmosis) and ultraviolet light | Can meet **up to about 40%** of current water demand (PUB) |\n| Desalination | Seawater is pushed through reverse-osmosis membranes to remove salt | Can meet **up to about 25%** of current water demand (PUB); uses a lot of energy |\n\nNEWater (first produced in 2003) is mostly used by industry and for cooling; some is added to reservoirs. Because NEWater and desalination do not depend on rainfall, they protect Singapore during droughts. **Marina Barrage** (2008) turned the Marina Channel into a freshwater reservoir in the middle of the city and helps prevent flooding.\n\n**2. Transport: making driving the expensive choice**\n\n- **ERP (Electronic Road Pricing)**, introduced in **1998**, charges drivers automatically when they pass gantries on busy roads at busy times. It replaced the Area Licensing Scheme of 1975, one of the world's first congestion charges. A satellite-based version (ERP 2.0) is being introduced.\n- A **Certificate of Entitlement (COE)** must be won in a bidding system before you can own a car; it lasts 10 years. Because the number of COEs is limited, prices are high — often over S$100,000 in recent years.\n- The money and space saved go into a fast, cheap **MRT and bus network**.\n\n**3. Housing: HDB new towns** — around **80%** of residents live in HDB flats, and most of these households own their flat. New towns are planned with schools, clinics, hawker centres and an MRT station close to home.\n\n**4. City in Nature** — park connectors (more than 300 km of green paths linking parks), skyrise greenery and Gardens by the Bay bring nature into a dense city, cooling streets and supporting wildlife.\n\n**5. Singapore Green Plan 2030** (launched **2021**) has five pillars: City in Nature, Energy Reset, Sustainable Living, Green Economy and Resilient Future. Targets include planting **1 million more trees** and cutting the waste sent to landfill.\n\n**6. Tengah — the 'Forest Town'**: a new HDB town in the west designed around a wide forest corridor, with a **car-free town centre** (traffic routed underground) and **centralised cooling** for some blocks, which is more efficient than every flat running its own air-conditioner.\n\n**Weaknesses?** Singapore still imports most of its food, gets around 95% of its electricity from imported natural gas, and desalination is energy-hungry. Successful, yes — but not finished.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of Singapore's Four National Taps feeding a central box labelled Singapore's water supply. Local catchment and imported water from Johor above; NEWater and desalination below, with bars showing NEWater can meet up to about 40 percent and desalination up to about 25 percent of current demand on a 0 to 50 percent scale."><rect width="480" height="320" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><rect x="15" y="15" width="170" height="85" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="100" y="35" font-size="13" font-weight="bold">1. Local catchment</text><text x="100" y="54" font-size="11">rain, drains, canals</text><text x="100" y="70" font-size="11">17 reservoirs</text><text x="100" y="88" font-size="11">about 2/3 of land is catchment</text><rect x="295" y="15" width="170" height="85" rx="6" fill="#fde68a" stroke="#334155"/><text x="380" y="35" font-size="13" font-weight="bold">2. Imported water</text><text x="380" y="54" font-size="11">piped from Johor, Malaysia</text><text x="380" y="70" font-size="11">1962 Water Agreement</text><text x="380" y="88" font-size="11">runs until 2061</text><rect x="175" y="130" width="130" height="60" rx="6" fill="#c7d2fe" stroke="#334155" stroke-width="2"/><text x="240" y="151" font-size="12" font-weight="bold">Singapore's water</text><text x="240" y="166" font-size="12" font-weight="bold">supply</text><text x="240" y="181" font-size="11">run by PUB</text><rect x="15" y="215" width="170" height="95" rx="6" fill="#bae6fd" stroke="#334155"/><text x="100" y="235" font-size="13" font-weight="bold">3. NEWater</text><text x="100" y="252" font-size="11">used water, membranes, UV</text><rect x="30" y="262" width="140" height="12" fill="#ffffff" stroke="#334155"/><rect x="30" y="262" width="112" height="12" fill="#1e3a8a"/><text x="100" y="290" font-size="11">up to about 40% of demand</text><text x="30" y="304" font-size="11" text-anchor="start">0%</text><text x="170" y="304" font-size="11" text-anchor="end">50%</text><rect x="295" y="215" width="170" height="95" rx="6" fill="#e0f2fe" stroke="#334155"/><text x="380" y="235" font-size="13" font-weight="bold">4. Desalination</text><text x="380" y="252" font-size="11">seawater, reverse osmosis</text><rect x="310" y="262" width="140" height="12" fill="#ffffff" stroke="#334155"/><rect x="310" y="262" width="70" height="12" fill="#1e3a8a"/><text x="380" y="290" font-size="11">up to about 25% of demand</text><text x="310" y="304" font-size="11" text-anchor="start">0%</text><text x="450" y="304" font-size="11" text-anchor="end">50%</text></g><g fill="none" stroke="#334155" stroke-width="2"><polyline points="100,100 100,113 215,113 215,121"/><polyline points="380,100 380,113 265,113 265,121"/><polyline points="100,215 100,205 215,205 215,199"/><polyline points="380,215 380,205 265,205 265,199"/></g><g fill="#334155"><polygon points="215,130 210,121 220,121"/><polygon points="265,130 260,121 270,121"/><polygon points="215,190 210,199 220,199"/><polygon points="265,190 260,199 270,199"/></g></svg>`,
      diagramCaption:
        "The Four National Taps. Bars are drawn to scale on a 0–50% axis: NEWater can meet up to about 40% and desalination up to about 25% of current water demand (PUB figures). These two 'weather-proof' taps protect Singapore in droughts.",
      workedExamples: [
        {
          title: "Using percentages from a source (calculation)",
          problem:
            "PUB says Singapore uses about **440 million gallons of water a day**, and NEWater can meet **up to 40%** of current demand. What is the most NEWater could supply each day?",
          steps: [
            "Find 40% of 440 million gallons.",
            "40% = {{40/100}} = 0.4.",
            "0.4 × 440 = 176.",
            "Add the units: up to about 176 million gallons a day.",
          ],
          answer: "Up to about 176 million gallons a day.",
          yourTurn: {
            question:
              "Your turn: desalination can meet up to 25% of Singapore's current demand of about 440 million gallons a day. What is the most desalination could supply each day, in millions of gallons?",
            answer: { type: "number", value: 110 },
            solution: "25% of 440 = 0.25 × 440 = 110 million gallons a day (a quarter of 440).",
          },
        },
        {
          title: "Model answer: ERP and COE (4 marks)",
          problem: "Explain how Singapore reduces traffic congestion. [4 marks]",
          steps: [
            "Point 1 — name a policy with its detail: ERP (Electronic Road Pricing), introduced in 1998, charges drivers automatically at gantries at busy times.",
            "Explain it: because it costs more to drive at peak times, some drivers travel at a different time, take another route or switch to the MRT, so fewer cars are on the busiest roads.",
            "Point 2 — the Certificate of Entitlement (COE): you must win a COE before owning a car, and the number is limited, so prices are very high.",
            "Explain it: this keeps the total number of cars low, so roads stay less crowded.",
            "Link: money and space are put into a cheap, frequent MRT and bus network, giving people a good alternative to driving.",
          ],
          answer:
            "Singapore uses Electronic Road Pricing (ERP), introduced in 1998, which charges drivers automatically when they pass gantries at busy times. This makes driving at peak times more expensive, so some people change their route or time, or use the MRT instead, which reduces jams. Singapore also controls car ownership with the Certificate of Entitlement (COE): a limited number are sold by bidding, so prices are very high and fewer people own cars. Because of this, roads are less crowded, and money is invested in a cheap, frequent MRT and bus network that gives people an alternative to driving.",
          yourTurn: {
            question:
              "Your turn: name the Singapore system, introduced in 1998, that automatically charges drivers when they pass gantries on busy roads at busy times.",
            answer: { type: "text", accept: ["ERP", "Electronic Road Pricing", "electronic road pricing (ERP)", "ERP system", "road pricing", "electronic road pricing system"] },
            solution: "**Electronic Road Pricing (ERP)**, introduced in 1998. It replaced the paper-based Area Licensing Scheme (1975).",
          },
        },
      ],
      keyPoints: [
        "Four National Taps: local catchment, imported water (Johor; 1962 agreement runs to 2061), NEWater (up to about 40% of current demand) and desalination (up to about 25%).",
        "NEWater and desalination do not depend on rainfall, so they make Singapore's water supply drought-resistant.",
        "ERP (1998) charges drivers at busy times; the COE limits car numbers; money goes into MRT and buses.",
        "Around 80% of residents live in HDB flats in planned new towns with services close to home.",
        "Singapore Green Plan 2030 (launched 2021): five pillars, including City in Nature and Energy Reset; Tengah is the 'Forest Town' with a car-free centre and centralised cooling.",
        "Weaknesses: most food and energy is imported, and desalination uses a lot of energy.",
      ],
      whyItWorks:
        "Singapore's success comes from two big ideas. **Diversification**: relying on one water source is risky (a drought or a political dispute could cut it off), so four sources spread the risk — if one fails, the others keep the taps running. **Price signals**: people respond to cost. ERP and COEs make the environmental and social cost of driving (congestion, pollution) show up in the price, so people choose public transport instead. Because the government owns most land and plans HDB towns from scratch, it can put homes, jobs, MRT stations and parks in the right places from day one instead of fixing problems afterwards.",
      strategies: ["Use figures from the source", "PEEL paragraph", "Cause → process → effect", "Social / economic / environmental (SEE)"],
      thinkDeeper:
        "The 1962 Water Agreement with Johor runs until 2061. Why do you think PUB has been expanding NEWater and desalination so strongly before then? What would happen to Singapore's energy use if desalination grew much bigger — and is that a sustainability trade-off?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "las-vegas",
      heading: "A city in the desert: Las Vegas",
      discovery: {
        problem:
          "Las Vegas gets only about 100 mm of rain a year — less than Singapore often gets in a single wet month — and summer days often pass 40 °C. Yet it has fountains, golf courses, swimming pools and over 2 million residents. Where does all the water come from — and what happens if it stops?",
        idea:
          "Las Vegas 'borrows' its water from somewhere else: about **90%** comes from **Lake Mead**, a reservoir on the **Colorado River**, which is fed mainly by snowmelt from the Rocky Mountains hundreds of kilometres away. The city's future depends on a river that is shrinking because of long-term drought and climate change. That is why Las Vegas has become one of the most water-careful cities in the USA.",
      },
      body:
        "**Location and climate**: Las Vegas is in southern Nevada, USA, in the **Mojave Desert**. It receives only about 100 mm of rain a year (hot deserts receive less than 250 mm), and July temperatures often exceed 40 °C, so water evaporates fast.\n\n**Rapid growth**: cheap land, jobs in tourism and casinos, and no state income tax drew people in. Clark County (the Las Vegas area) grew very quickly:\n\n| Year | Population of Clark County (approx., US Census) |\n|---|---|\n| 1970 | 270,000 |\n| 1990 | 740,000 |\n| 2000 | 1,380,000 |\n| 2010 | 1,950,000 |\n| 2020 | 2,270,000 |\n\nIt also welcomes around **40 million visitors a year**. Most growth has been **urban sprawl** — low-density suburbs with lawns and pools, where nearly everyone drives.\n\n**Where the water comes from**\n\n- About **90%** comes from **Lake Mead**, the reservoir behind the **Hoover Dam** (completed 1936) on the Colorado River. Most of the rest is groundwater.\n- The Colorado River is shared by seven US states and Mexico. Nevada's share is the smallest: 300,000 acre-feet a year.\n\n**The drought crisis**: since about 2000 the Colorado River basin has had its driest period in centuries, made worse by rising temperatures. In **July 2022 Lake Mead fell to a record low** — only about a quarter full, with a white 'bathtub ring' of minerals showing where the water used to be. The first-ever official shortage on the river was declared in 2021, cutting the water some states could take. The Southern Nevada Water Authority (SNWA) even built a **'third intake'** (finished 2020) deep in the lake so it can still draw water if levels keep falling.\n\n**How Las Vegas saves water**\n\n- **Turf-removal rebates**: SNWA pays people to rip out lawns and replace them with desert plants (**xeriscaping**).\n- **A Nevada law (2021)** bans the use of Colorado River water on **non-functional turf** — decorative grass on roadsides, roundabouts and office parks that nobody uses — by the end of 2026.\n- **Watering schedules** limit which days sprinklers may run; water-waste inspectors can fine people; heavy users pay higher prices; new home swimming pools are limited in size.\n- **Recycling indoor water**: almost all water used **indoors** (showers, sinks, toilets) goes down the drain, is treated and returned to Lake Mead, so it can be taken out again (**return-flow credits**). Water used **outdoors** evaporates or soaks away and is lost — so cutting outdoor use saves the most.\n\nSNWA reports that the area now uses noticeably less Colorado River water than in the early 2000s, even though hundreds of thousands more people live there.\n\n**Is Las Vegas sustainable?** It has made real progress on water, and its tourism economy is strong. But it still depends on one shrinking river, its sprawl means long car journeys, and its desert heat is intensified by the urban heat island. Most geographers would say: *more sustainable than before, but still at serious risk*.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram of Las Vegas's water. Lake Mead on the Colorado River supplies about 90 percent and groundwater about 10 percent to a treatment plant, then to homes, hotels and casinos. Indoor water goes to wastewater treatment and is returned to Lake Mead via the Las Vegas Wash, earning return-flow credits. Outdoor water for lawns, pools and cooling is lost to evaporation."><rect width="480" height="320" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="240" y="18" font-size="13" font-weight="bold">Where Las Vegas's water goes</text><rect x="15" y="30" width="135" height="75" rx="6" fill="#bae6fd" stroke="#334155"/><text x="82" y="50" font-size="12" font-weight="bold">Lake Mead</text><text x="82" y="66" font-size="11">(Colorado River)</text><text x="82" y="82" font-size="11">about 90% of supply</text><text x="82" y="97" font-size="11">behind Hoover Dam</text><rect x="180" y="40" width="115" height="55" rx="6" fill="#e0f2fe" stroke="#334155"/><text x="237" y="64" font-size="12">Water</text><text x="237" y="80" font-size="12">treatment</text><rect x="180" y="120" width="115" height="36" rx="6" fill="#d6d3d1" stroke="#334155"/><text x="237" y="142" font-size="11">Groundwater ~10%</text><rect x="325" y="30" width="140" height="75" rx="6" fill="#e5e7eb" stroke="#334155"/><text x="395" y="55" font-size="12" font-weight="bold">City use</text><text x="395" y="72" font-size="11">homes, hotels,</text><text x="395" y="88" font-size="11">casinos</text><rect x="180" y="210" width="115" height="70" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="237" y="230" font-size="11" font-weight="bold">Indoor water</text><text x="237" y="246" font-size="11">showers, toilets</text><text x="237" y="262" font-size="11">to sewers, then</text><text x="237" y="276" font-size="11">cleaned</text><rect x="325" y="210" width="140" height="70" rx="6" fill="#fecaca" stroke="#334155"/><text x="395" y="230" font-size="11" font-weight="bold">Outdoor water</text><text x="395" y="246" font-size="11">lawns, pools, cooling</text><text x="395" y="266" font-size="12" font-weight="bold">LOST: evaporates</text><text x="342" y="168" font-size="11" text-anchor="start">indoor</text><text x="432" y="168" font-size="11" text-anchor="end">outdoor</text><text x="20" y="262" font-size="11" text-anchor="start">Returned to the lake</text><text x="20" y="276" font-size="11" text-anchor="start">via Las Vegas Wash</text><text x="20" y="290" font-size="11" text-anchor="start">(return-flow credits)</text><text x="240" y="312" font-size="11">Indoor water is recycled; outdoor water is lost, so cut outdoor use first</text></g><g fill="none" stroke="#334155" stroke-width="2"><line x1="150" y1="67" x2="171" y2="67"/><line x1="295" y1="67" x2="316" y2="67"/><line x1="237" y1="120" x2="237" y2="104"/><line x1="345" y1="105" x2="299" y2="202"/><line x1="445" y1="105" x2="445" y2="201"/><polyline points="180,245 82,245 82,114"/></g><g fill="#334155"><polygon points="180,67 171,62 171,72"/><polygon points="325,67 316,62 316,72"/><polygon points="237,95 232,104 242,104"/><polygon points="295,210 296,200 304,204"/><polygon points="445,210 440,201 450,201"/><polygon points="82,105 77,114 87,114"/></g></svg>`,
      diagramCaption:
        "Las Vegas's water loop. Indoor water is cleaned and returned to Lake Mead (return-flow credits), so it can be used again; outdoor water evaporates in the desert heat and is lost. That is why removing lawns saves far more than shorter showers.",
      workedExamples: [
        {
          title: "Percentage increase from a table (calculation)",
          problem:
            "Use the population table. Calculate the percentage increase in Clark County's population from 1990 (740,000) to 2020 (2,270,000). Give your answer to the nearest whole number.",
          steps: [
            "Method: % increase = (new − old) ÷ old × 100.",
            "Increase: 2,270,000 − 740,000 = 1,530,000.",
            "Divide by the ORIGINAL value: 1,530,000 ÷ 740,000 = 2.0676…",
            "× 100 = 206.76… ≈ 207%.",
            "Interpret: the population roughly tripled in 30 years — an increase of about 207%.",
          ],
          answer: "About 207% increase (the population roughly tripled).",
          yourTurn: {
            question:
              "Your turn: calculate the percentage increase in Clark County's population from 2000 (1,380,000) to 2020 (2,270,000). Give your answer to the nearest whole number (%).",
            answer: { type: "number", value: 64, tolerance: 1 },
            solution:
              "Increase = 2,270,000 − 1,380,000 = 890,000. 890,000 ÷ 1,380,000 = 0.6449… × 100 ≈ 64%.",
          },
        },
        {
          title: "Reading the resource: why lawns, not showers? (model answer)",
          problem:
            "Use the water-loop diagram. Suggest why the Southern Nevada Water Authority pays people to remove lawns rather than focusing on shorter showers. [3 marks]",
          steps: [
            "Read the diagram: find what happens to indoor water — it goes to sewers, is treated and returned to Lake Mead.",
            "So indoor water is not really 'lost': SNWA earns return-flow credits and can take it out again.",
            "Find what happens to outdoor water — it evaporates in the desert heat or soaks into the ground. It never comes back.",
            "Conclude: every litre saved outdoors is a litre saved for good, so lawn removal gives the biggest real saving.",
          ],
          answer:
            "Water used indoors, such as in showers, goes down the drain, is treated and returned to Lake Mead, so it can be reused through return-flow credits. Water sprayed on lawns evaporates quickly in the hot, dry Mojave climate and is lost completely. Therefore removing lawns saves water permanently, which matters far more for the shrinking Colorado River supply than shorter showers.",
          yourTurn: {
            question:
              "Your turn: name the reservoir, formed by the Hoover Dam on the Colorado River, that supplies about 90% of Las Vegas's water.",
            answer: { type: "text", accept: ["Lake Mead", "Mead", "Lake Mead reservoir"] },
            solution: "**Lake Mead**, the reservoir behind the Hoover Dam. It reached a record low in July 2022.",
          },
        },
      ],
      keyPoints: [
        "Las Vegas is in the Mojave Desert: about 100 mm of rain a year and summer days often above 40 °C.",
        "About 90% of its water comes from Lake Mead on the Colorado River; Lake Mead hit a record low in July 2022.",
        "Clark County grew from about 740,000 people (1990) to about 2.27 million (2020), mostly as low-density sprawl.",
        "Water saving: turf-removal rebates, a 2021 Nevada law banning non-functional turf, watering schedules, higher prices for heavy users.",
        "Indoor water is treated and returned to Lake Mead (return-flow credits); outdoor water is lost to evaporation.",
        "Verdict: more water-efficient than before, but still dependent on one shrinking river — not yet fully sustainable.",
      ],
      whyItWorks:
        "In a desert, the problem is not just low rainfall but **high evaporation**: hot, dry, sunny air pulls water out of lawns, pools and reservoirs very quickly. Water used indoors flows to a treatment works in pipes, out of the sun, so it can be cleaned and returned to the lake. Water used outdoors meets the hot air directly and evaporates. That is why a city can grow its population and still use less water — if it moves the water it uses from outdoors (lost) to indoors (recycled). But the river itself depends on snow falling in the Rocky Mountains; warmer winters mean less snow and more evaporation, so the supply is shrinking whatever Las Vegas does.",
      strategies: ["Use figures from the source", "Read the key first", "TEA (Trend, Evidence, Anomaly)", "Weigh both sides then judge"],
      thinkDeeper:
        "Las Vegas's population and its Colorado River water use have moved in opposite directions since the early 2000s. Does that prove the city is now sustainable? What would you need to know about the river itself — and about the other states and Mexico that share it — before you decide?",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "eco-city-design",
      heading: "Designing an eco-city",
      discovery: {
        problem:
          "Two teams design an eco-city. Team Zara covers every roof in solar panels and puts a giant car park under each block. Team Ravi uses fewer solar panels but builds a tram loop, cycle lanes and shops within a ten-minute walk of every home. Which design is more sustainable — and how could a judge decide fairly?",
        idea:
          "One brilliant feature does not make a sustainable city: Team Zara's design still encourages everyone to drive. A fair judge uses **criteria** — transport, energy, water, waste, housing, green space, community and economy — and scores each one. Designs where the features **work together** (homes near transit, so fewer cars, so more space for parks) usually beat designs with one impressive gadget.",
      },
      body:
        "An **eco-city** is a city designed to have a small ecological footprint: it uses renewable energy, reuses water and waste, makes walking, cycling and public transport the easy choice, and still gives people good homes, jobs and community life.\n\n**Criteria for judging a design**\n\n| Criterion | What a strong design includes |\n|---|---|\n| Transport | Tram, MRT or BRT; safe cycle lanes; car-free or car-light centre; shops within walking distance |\n| Energy | Solar, wind or other renewables; well-insulated buildings; district or centralised cooling |\n| Water | Rainwater harvesting, recycled water, wetlands that soak up floods |\n| Waste | Recycling and composting, waste-to-energy, less packaging |\n| Housing | Compact mid- or high-rise homes, affordable for all incomes, built on brownfield sites |\n| Green space | Parks, green corridors for wildlife, green roofs, street trees to cool the city |\n| Community | Schools, clinics, places to meet, safe streets, residents having a say |\n| Economy | Local jobs, green industries, low running costs |\n\n**Real eco-city examples**\n\n- **Curitiba, Brazil** (about 1.8 million people): from the **1970s** it built one of the world's first **bus rapid transit (BRT)** systems — buses in their own lanes, later with 'tube' stations where you pay before boarding. Many cities, such as Bogotá, copied it. Its 'Green Exchange' lets people swap recyclable waste for fresh fruit and vegetables, and parks were built on floodplains to hold floodwater.\n- **Copenhagen, Denmark**: separated cycle tracks and 'cycle superhighways' mean that, by the city's own counts, roughly half of all trips to work or study are made by bike. Most homes are warmed by district heating, and the CopenHill waste-to-energy plant has a ski slope on its roof. The city aimed to be carbon-neutral by 2025 but admitted it would miss that target — even leaders struggle.\n- **Vauban, Freiburg, Germany**: built from the late 1990s on the site of old army barracks (a **brownfield site**) for about 5,000 people. Many homes are built to low-energy 'Passivhaus' standards; some solar homes produce more energy than they use. Cars are parked in garages at the edge, so streets are safe for children, and a tram links it to the city centre.\n- **Masdar City, Abu Dhabi**: launched in 2006 as a planned zero-carbon city for about 50,000 people, with shaded narrow streets and a wind tower to cool the air. After the 2008 financial crisis it was **scaled back**: its completion was delayed and far fewer people live there than planned. A lesson: a brand-new 'perfect' city is expensive and slow; improving existing cities often does more good.\n\n**The inter-class eco-city competition — scoring rubric**\n\nEach of the eight criteria above is scored **0–3**, giving a total out of **24**:\n\n| Score | Level descriptor |\n|---|---|\n| 0 | Not addressed |\n| 1 | Mentioned, but vague ('there will be solar panels') |\n| 2 | Clear feature explained: how it works and why it helps |\n| 3 | Detailed, linked to other features, backed by a real example, and a trade-off is discussed |\n\nTo turn a score into a percentage: percentage = score ÷ 24 × 100.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan of an eco-city, not to scale. A green corridor runs north to south through a car-free town centre. A dashed tram or bus rapid transit loop with four stations circles the centre. Clusters of mid-rise homes with solar roofs sit inside the loop. A cycle lane runs east to west. A recycling and waste-to-energy plant is in the south-west, wind turbines in the south-east, and a river with a wetland park runs along the bottom."><rect width="480" height="300" fill="#ffffff"/><rect x="10" y="28" width="460" height="262" fill="none" stroke="#334155"/><rect x="220" y="28" width="40" height="234" fill="#bbf7d0"/><rect x="10" y="262" width="460" height="28" fill="#bae6fd"/><ellipse cx="240" cy="140" rx="150" ry="85" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="8 5"/><line x1="15" y1="140" x2="205" y2="140" stroke="#15803d" stroke-width="2" stroke-dasharray="2 4"/><line x1="275" y1="140" x2="465" y2="140" stroke="#15803d" stroke-width="2" stroke-dasharray="2 4"/><g stroke="#334155" fill="#e5e7eb"><rect x="140" y="85" width="26" height="28"/><rect x="172" y="85" width="26" height="28"/><rect x="282" y="85" width="26" height="28"/><rect x="314" y="85" width="26" height="28"/><rect x="140" y="167" width="26" height="28"/><rect x="172" y="167" width="26" height="28"/><rect x="282" y="167" width="26" height="28"/><rect x="314" y="167" width="26" height="28"/></g><g fill="#c7d2fe" stroke="#334155"><rect x="143" y="88" width="20" height="7"/><rect x="175" y="88" width="20" height="7"/><rect x="285" y="88" width="20" height="7"/><rect x="317" y="88" width="20" height="7"/><rect x="143" y="170" width="20" height="7"/><rect x="175" y="170" width="20" height="7"/><rect x="285" y="170" width="20" height="7"/><rect x="317" y="170" width="20" height="7"/></g><circle cx="240" cy="140" r="35" fill="#fecaca" stroke="#334155" stroke-width="2"/><g fill="#ffffff" stroke="#334155" stroke-width="2"><circle cx="90" cy="140" r="6"/><circle cx="390" cy="140" r="6"/><circle cx="240" cy="55" r="6"/><circle cx="240" cy="225" r="6"/></g><rect x="10" y="200" width="95" height="45" fill="#d6d3d1" stroke="#334155"/><g stroke="#334155" stroke-width="2"><line x1="425" y1="250" x2="425" y2="215"/><line x1="425" y1="215" x2="425" y2="200"/><line x1="425" y1="215" x2="412" y2="222"/><line x1="425" y1="215" x2="438" y2="222"/><line x1="452" y1="250" x2="452" y2="215"/><line x1="452" y1="215" x2="452" y2="200"/><line x1="452" y1="215" x2="439" y2="222"/><line x1="452" y1="215" x2="465" y2="222"/><line x1="130" y1="68" x2="150" y2="85"/></g><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="240" y="18" font-size="13" font-weight="bold">Plan of an eco-city (not to scale)</text><text x="240" y="137" font-size="11" font-weight="bold">Car-free</text><text x="240" y="151" font-size="11" font-weight="bold">centre</text><text x="15" y="50" font-size="11" text-anchor="start">Homes: solar roofs +</text><text x="15" y="64" font-size="11" text-anchor="start">rainwater tanks</text><text x="270" y="44" font-size="11" text-anchor="start">Green corridor for wildlife</text><text x="397" y="105" font-size="11" text-anchor="start">Tram /</text><text x="397" y="119" font-size="11" text-anchor="start">BRT loop</text><text x="18" y="132" font-size="11" text-anchor="start">Cycle lane</text><text x="57" y="219" font-size="11">Recycling +</text><text x="57" y="235" font-size="11">waste-to-energy</text><text x="436" y="194" font-size="11">Wind turbines</text><text x="240" y="280" font-size="11">River + wetland park: soaks up floods, cleans water</text></g></svg>`,
      diagramCaption:
        "A model eco-city plan. Notice how the features link: homes are close to tram stations and a car-free centre, so fewer cars are needed; the green corridor cools the city and lets wildlife move; the wetland stores floodwater and cleans it.",
      workedExamples: [
        {
          title: "Scoring a design with the rubric (calculation)",
          problem:
            "Team Mei's design scores: Transport 3, Energy 2, Water 3, Waste 1, Housing 2, Green space 3, Community 2, Economy 2. What is their total out of 24, and their percentage?",
          steps: [
            "Add the eight scores: 3 + 2 + 3 + 1 + 2 + 3 + 2 + 2 = 18.",
            "Percentage = score ÷ maximum × 100 = 18 ÷ 24 × 100.",
            "18 ÷ 24 = 0.75, so 0.75 × 100 = 75%.",
            "Use the result: their weakest criterion is Waste (1) — adding recycling and composting is the quickest way to improve.",
          ],
          answer: "18 out of 24 = 75%. Improve Waste first.",
          yourTurn: {
            question:
              "Your turn: Team Jun scores Transport 3, Energy 3, Water 2, Waste 2, Housing 1, Green space 3, Community 2, Economy 1. What percentage of the 24 marks did they score? Give your answer to the nearest whole number.",
            answer: { type: "number", value: 71, tolerance: 0.5 },
            solution: "Total = 3 + 3 + 2 + 2 + 1 + 3 + 2 + 1 = 17. 17 ÷ 24 × 100 = 70.83… ≈ 71%.",
          },
        },
        {
          title: "Model answer: was Masdar a success? (4 marks)",
          problem: "Evaluate how successful Masdar City has been as a sustainable city. [4 marks]",
          steps: [
            "Success 1: it tested good design ideas — shaded narrow streets and a wind tower cool the air without as much air-conditioning; it uses solar power.",
            "Limitation 1: it was scaled back after the 2008 financial crisis; completion was delayed and far fewer people live there than the planned 50,000.",
            "Limitation 2: building a brand-new city in the desert is very expensive, so it fails the economic pillar and few ordinary people benefit (social).",
            "Judge: partly successful as a testing ground for ideas, but not (yet) a working sustainable city — improving existing cities like Curitiba or Copenhagen has helped far more people.",
          ],
          answer:
            "Masdar has had some success: its narrow, shaded streets and wind tower keep the air cooler, reducing the need for air-conditioning, and it uses solar energy, so its environmental design is good. However, after the 2008 financial crisis the project was scaled back and delayed, and far fewer people live there than the 50,000 originally planned. Building a new city in the desert is also very expensive, so it does poorly on the economic and social pillars. Overall, Masdar is only partly successful: it is a useful testing ground for ideas, but cities such as Curitiba, which improved existing neighbourhoods cheaply, have helped many more people live sustainably.",
          yourTurn: {
            question:
              "Your turn: which Brazilian city began building one of the world's first bus rapid transit (BRT) systems in the 1970s?",
            answer: { type: "text", accept: ["Curitiba", "Curitiba, Brazil"] },
            solution: "**Curitiba**, Brazil. Its BRT (from the 1970s, with 'tube' stations later) has been copied by cities such as Bogotá.",
          },
        },
      ],
      keyPoints: [
        "An eco-city has a small ecological footprint: renewable energy, reused water and waste, and easy walking, cycling and public transport.",
        "Judge a design with criteria: transport, energy, water, waste, housing, green space, community and economy.",
        "Curitiba (BRT from the 1970s), Copenhagen (cycling, district heating), Vauban in Freiburg (car-free streets, low-energy homes) and Masdar (scaled back) are key examples.",
        "Linked features score highest: homes near transit means fewer cars, which frees space for parks.",
        "Competition rubric: 8 criteria × 0–3 = 24 marks; percentage = score ÷ 24 × 100.",
      ],
      whyItWorks:
        "Good eco-city features reinforce each other. If homes, shops and schools are close together (**compact city**), trips are short, so walking, cycling and trams become easier than driving. Fewer cars means less land for roads and car parks, so more land is left for parks and wetlands — which cool the city, absorb floodwater and support wildlife. Renewable energy works best when buildings are well insulated and need less energy in the first place. That is why a design with joined-up features beats one with a single impressive gadget: the benefits multiply rather than just add up.",
      strategies: ["Compare and contrast", "Weigh both sides then judge", "Social / economic / environmental (SEE)", "Sketch it"],
      thinkDeeper:
        "Vauban and Masdar were both built from scratch, but Curitiba and Copenhagen changed cities that already existed. Most of the world's city-dwellers in 2050 will live in cities that already exist today. What does that suggest about where planners should spend their money?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Sustainable development (Brundtland, 1987)", back: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs." },
      { front: "Brundtland Report", back: "*Our Common Future* (1987), by the UN World Commission on Environment and Development — source of the classic definition of sustainable development." },
      { front: "Three pillars of sustainability", back: "Social (people), economic (jobs and money) and environmental (nature and climate). Sustainable = all three at once." },
      { front: "Ecological footprint", back: "The area of productive land and sea needed to supply what a person uses and absorb their waste, measured in global hectares (gha) per person." },
      { front: "How many Earths?", back: "Footprint per person ÷ biocapacity per person. Humanity uses roughly 1.7 Earths a year (Global Footprint Network)." },
      { front: "Four National Taps", back: "Singapore's water sources: local catchment, imported water (from Johor), NEWater and desalination." },
      { front: "NEWater", back: "Used water treated by microfiltration, reverse osmosis and UV light. Can meet up to about 40% of Singapore's current water demand (PUB)." },
      { front: "Desalination", back: "Removing salt from seawater (in Singapore, by reverse osmosis). Can meet up to about 25% of current demand (PUB) but uses a lot of energy." },
      { front: "1962 Water Agreement", back: "Agreement letting Singapore draw water from the Johor River in Malaysia. It runs until 2061." },
      { front: "ERP", back: "Electronic Road Pricing, introduced in Singapore in 1998: drivers are charged automatically at gantries on busy roads at busy times." },
      { front: "COE", back: "Certificate of Entitlement: must be won by bidding before owning a car in Singapore; lasts 10 years; numbers are limited, so prices are high." },
      { front: "HDB", back: "Housing & Development Board. Around 80% of Singapore residents live in HDB flats in planned new towns." },
      { front: "Singapore Green Plan 2030", back: "Launched 2021. Five pillars: City in Nature, Energy Reset, Sustainable Living, Green Economy, Resilient Future." },
      { front: "Tengah", back: "Singapore's 'Forest Town': built around a forest corridor, with a car-free town centre and centralised cooling for some blocks." },
      { front: "Las Vegas's main water source", back: "About 90% comes from Lake Mead, the reservoir behind the Hoover Dam on the Colorado River." },
      { front: "Return-flow credits", back: "Las Vegas treats indoor wastewater and returns it to Lake Mead, which lets it take that water out again." },
      { front: "Non-functional turf", back: "Decorative grass nobody uses (roadsides, roundabouts, office parks). A 2021 Nevada law bans watering it with Colorado River water by the end of 2026." },
      { front: "Xeriscaping", back: "Landscaping with desert plants, rocks and drip irrigation so gardens need little or no watering." },
      { front: "Curitiba", back: "Brazilian city that built one of the world's first bus rapid transit (BRT) systems from the 1970s; 'Green Exchange' swaps recycling for fresh food." },
      { front: "Vauban (Freiburg)", back: "German eco-district on former army barracks: low-energy homes, solar houses, cars parked at the edge, tram to the centre." },
      { front: "Masdar City", back: "Planned zero-carbon city in Abu Dhabi (launched 2006) that was scaled back and delayed after the 2008 financial crisis." },
    ],
    mustKnow: [
      "Quote the Brundtland (1987) definition of sustainable development accurately.",
      "Name the three pillars of sustainability and give a city example of each.",
      "Explain what an ecological footprint is and calculate the number of Earths needed (footprint ÷ biocapacity).",
      "Name and explain all Four National Taps, including the 2061 end date of the Johor water agreement.",
      "Quote PUB's figures with care: NEWater up to about 40% and desalination up to about 25% of current demand.",
      "Explain how ERP (1998) and the COE reduce traffic congestion in Singapore.",
      "Describe HDB housing (around 80% of residents), City in Nature, the Green Plan 2030 and Tengah as parts of Singapore's strategy.",
      "Describe Las Vegas's location (Mojave Desert), growth and dependence on Lake Mead and the Colorado River.",
      "Explain why recycling indoor water and removing lawns work, using the idea of evaporation and return-flow credits.",
      "Reach a justified judgement on whether Las Vegas is sustainable, using both sides of the argument.",
      "Use Curitiba, Copenhagen, Vauban and Masdar as examples of eco-city ideas, including what went wrong at Masdar.",
      "Score an eco-city design with the eight criteria and convert the total to a percentage.",
    ],
    misconceptions: [
      { wrong: "Sustainable just means 'green' or good for the environment.", right: "It means meeting today's needs without harming future generations — and it must work socially and economically as well as environmentally." },
      { wrong: "A city with lots of rain can never run short of water.", right: "Water must be caught and stored. Singapore is rainy but small, with little space for reservoirs, so it needed NEWater, desalination and imports too." },
      { wrong: "NEWater supplies 40% of all the water Singapore uses right now.", right: "PUB says NEWater *can meet up to* about 40% of current demand. Much of it goes to industry and cooling — it is a capacity, not the exact share drunk from taps." },
      { wrong: "Las Vegas gets its water from rain or from local rivers.", right: "Las Vegas gets about 100 mm of rain a year; about 90% of its water comes from Lake Mead on the Colorado River." },
      { wrong: "Taking shorter showers is the best way for Las Vegas to save water.", right: "Indoor water is treated and returned to Lake Mead, so it is reused. Outdoor water (lawns) evaporates and is lost, so removing lawns saves far more." },
      { wrong: "More solar panels automatically make the most sustainable city.", right: "Judges look at all criteria. A city full of solar panels but designed around cars still has high emissions, traffic and sprawl." },
      { wrong: "Masdar City is a finished, fully working zero-carbon city.", right: "Masdar was scaled back after the 2008 financial crisis; it is delayed and has far fewer residents than the 50,000 planned." },
      { wrong: "High density is always bad for sustainability.", right: "Well-planned high density (like HDB towns) means shorter journeys, efficient public transport and less land taken from nature." },
    ],
    examMistakes: [
      "Paraphrasing the Brundtland definition so loosely that 'future generations' disappears — always include the needs of the present AND future generations.",
      "Writing about only the environment when asked if something is sustainable — cover social, economic and environmental (SEE).",
      "Stating Singapore's figures as exact ('NEWater supplies 40%') instead of 'can meet up to about 40% of current demand'.",
      "Mixing up ERP (a charge for using busy roads) and COE (a certificate needed to own a car).",
      "Dividing by the new value instead of the original value when calculating percentage increase.",
      "Describing Las Vegas's water measures without explaining WHY they work (evaporation, return-flow credits).",
      "Answering 'to what extent' or 'evaluate' questions with only one side and no final judgement.",
      "Listing eco-city features without linking them to a named real example such as Curitiba or Vauban.",
    ],
    mnemonics: [
      { topic: "The Four National Taps", device: "Lovely Ice-cold New Drinks", explanation: "Local catchment, Imported water, NEWater, Desalination." },
      { topic: "Three pillars of sustainability", device: "SEE", explanation: "Social, Economic, Environmental — check you can SEE all three in every sustainability answer." },
      { topic: "Eco-city criteria", device: "The Eagle Watches Wild Herons Grow Calm Every day", explanation: "Transport, Energy, Water, Waste, Housing, Green space, Community, Economy — the eight scoring criteria." },
    ],
    realWorld: [
      { title: "Marina Barrage, Singapore", detail: "Opened in 2008, it turned the Marina Channel into a freshwater reservoir in the city centre, adding to local catchment and helping to prevent flooding in low-lying areas.", emoji: "💧" },
      { title: "Tengah Forest Town, Singapore", detail: "A new HDB town designed around a wide forest corridor, with a car-free town centre and centralised cooling for some blocks — Singapore's showcase of green housing.", emoji: "🌳" },
      { title: "Lake Mead's 'bathtub ring', USA", detail: "In July 2022 Lake Mead fell to its lowest level since it was filled, leaving a white mineral ring on the canyon walls and pushing Las Vegas to tighten water rules even further.", emoji: "🏜️" },
      { title: "Curitiba's BRT, Brazil", detail: "Buses in their own lanes with pay-before-you-board tube stations move people almost as fast as a metro at a fraction of the cost; the idea spread to cities worldwide.", emoji: "🚌" },
      { title: "Copenhagen's cycle city, Denmark", detail: "Separated cycle tracks and cycle superhighways mean roughly half of trips to work or study are by bike, and the CopenHill waste-to-energy plant has a ski slope on its roof.", emoji: "🚲" },
      { title: "Vauban, Freiburg, Germany", detail: "An eco-district on old army barracks where cars park at the edge, streets belong to children and some solar homes make more energy than they use.", emoji: "☀️" },
    ],
    videos: [
      { title: "What is sustainable development?", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=what+is+sustainable+development+brundtland+geography" },
      { title: "Singapore's Four National Taps and NEWater", channel: "YouTube search (try PUB Singapore)", url: "https://www.youtube.com/results?search_query=PUB+singapore+four+national+taps+NEWater" },
      { title: "Las Vegas, Lake Mead and the Colorado River drought", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=las+vegas+water+lake+mead+colorado+river+drought" },
      { title: "Curitiba bus rapid transit explained", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=curitiba+bus+rapid+transit+sustainable+city" },
      { title: "Tengah: Singapore's Forest Town", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=tengah+forest+town+singapore+HDB" },
    ],
    formulas: [
      { name: "Sustainable development", formula: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland Report, 1987)." },
      { name: "Three pillars of sustainability", formula: "Social, economic and environmental; a sustainable city succeeds on all three at once." },
      { name: "Ecological footprint", formula: "Area of productive land and sea needed to supply what a person uses and absorb their waste, in global hectares (gha) per person." },
      { name: "Biocapacity", formula: "The amount of resources the Earth (or an area) can renew each year — roughly 1.5–1.6 gha per person globally." },
      { name: "Number of Earths needed", formula: "Footprint per person ÷ biocapacity per person.", note: "Humanity: roughly 1.7 Earths (Global Footprint Network)." },
      { name: "Four National Taps", formula: "Singapore's four water sources: local catchment, imported water, NEWater and desalination." },
      { name: "NEWater", formula: "High-grade reclaimed water made from treated used water; can meet up to about 40% of Singapore's current water demand (PUB)." },
      { name: "Desalination", formula: "Removing salt from seawater (by reverse osmosis in Singapore); can meet up to about 25% of current demand (PUB)." },
      { name: "Electronic Road Pricing (ERP)", formula: "Singapore's automatic congestion charge at busy roads and times, introduced in 1998." },
      { name: "Certificate of Entitlement (COE)", formula: "A 10-year right to own a vehicle in Singapore, won by bidding; limits car numbers." },
      { name: "Return-flow credits", formula: "In Las Vegas, treated indoor wastewater returned to Lake Mead can be withdrawn again." },
      { name: "Non-functional turf", formula: "Decorative grass that is not used for recreation; banned from Colorado River water in Southern Nevada by a 2021 law (by the end of 2026)." },
      { name: "Xeriscaping", formula: "Landscaping with drought-tolerant plants and little or no irrigation." },
      { name: "Bus rapid transit (BRT)", formula: "Buses running in dedicated lanes with fast boarding stations — pioneered in Curitiba from the 1970s." },
      { name: "Brownfield site", formula: "Land that has been built on before (e.g. old barracks or factories) and can be reused, protecting greenfield countryside." },
      { name: "Eco-city", formula: "A city designed to have a small ecological footprint while giving residents good homes, jobs and community life." },
    ],
  },
};
