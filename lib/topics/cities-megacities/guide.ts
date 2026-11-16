import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "cities-megacities",
  title: "Cities & Megacities",
  strand: "Cities",
  icon: "🏙️",
  summary: "More than half of humanity now lives in towns and cities. Why do people pour in, and what is life like in a city of 20 million?",
  intro:
    "For most of history almost everyone lived in the countryside. Around 2007–2008 the world passed a turning point: for the first time, more people lived in urban areas than rural ones, and today about 57% do (2023). In this topic you will learn how geographers rank settlements, what makes city life attractive and difficult, where the world's **megacities** of 10 million+ people are, and why cities keep growing. You will also practise the skills examiners love: calculating % urban and % change, reading a bar chart, and building a PEEL answer step by step.",
  guide: [
    // -----------------------------------------------------------------------
    {
      id: "what-is-a-city",
      heading: "What is a city?",
      discovery: {
        problem:
          "St Davids in Wales has fewer than 2,000 people, yet it is officially a **city**. Some suburbs on the edge of Dhaka have far more people than that and are not called cities at all. Denmark counts a cluster of a few hundred people as 'urban'; Japan needs tens of thousands before a place can call itself a city.\n\nSo what actually makes somewhere a city? Try to write a definition that works everywhere.",
        idea:
          "There is no single world-wide definition. Geographers judge settlements by **size** (population) and **function** (the range of services they offer), and rank them in a **settlement hierarchy**. Each country then sets its own official rules — St Davids is a city because the UK monarch granted it city status, not because it is big. When you quote a figure, always ask: *which definition is being used?*",
      },
      body:
        "A **settlement** is any place where people live, from a cluster of farmhouses to a city of over 30 million. Geographers sort settlements into a **settlement hierarchy**, ranked by population and by the **range of services** they offer.\n\n| Level | Rough size | Typical services |\n|---|---|---|\n| Hamlet | a few houses | often none, perhaps a post box |\n| Village | hundreds of people | primary school, small shop, place of worship |\n| Town | thousands to tens of thousands | secondary school, supermarket, doctors, bank |\n| City | hundreds of thousands or more | hospital, university, department stores, major places of worship |\n| Conurbation | millions (several towns and cities merged) | everything above, many times over |\n| Megacity | 10 million or more | stock exchange, international airports, company headquarters |\n\nThe sizes are **rough guides**: countries define 'urban' and 'city' differently.\n\nAs you go **up** the hierarchy:\n- population rises;\n- the range of services widens (more **high-order** services such as hospitals and universities);\n- the **sphere of influence** (the area people travel in from) grows;\n- there are **fewer** settlements at each level. That is why the diagram is drawn as a pyramid.\n\n**Urban** areas are built-up towns and cities, where most people work in industry and services. **Rural** areas are the countryside, with lower density and more farming.\n\n**Urbanisation** is the increase in the *proportion* (percentage) of a country's population living in urban areas. It is not the same as a city simply getting bigger.\n\n    % urban = urban population ÷ total population × 100\n\n| Year | World population living in urban areas (approx.) |\n|---|---|\n| 1950 | about 30% |\n| 2007–2008 | 50%: more urban than rural for the first time |\n| 2023 | about 57% |\n| 2050 (UN projection) | about 68% |\n\n> Singapore is an extreme case: a **city-state**, where the whole country is one city. It is counted as **100% urban**, with about 6 million people (2024) on roughly 735 km².",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Settlement hierarchy pyramid. From bottom to top: hamlet, village, town, city, conurbation, megacity. An arrow pointing up says bigger population and more services; an arrow pointing down says more settlements at each level."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><polygon points="200,20 280,20 305,65 175,65" fill="#fecaca"/><polygon points="175,65 305,65 330,110 150,110" fill="#c7d2fe"/><polygon points="150,110 330,110 355,155 125,155" fill="#e5e7eb"/><polygon points="125,155 355,155 380,200 100,200" fill="#bae6fd"/><polygon points="100,200 380,200 405,245 75,245" fill="#bbf7d0"/><polygon points="75,245 405,245 430,290 50,290" fill="#fde68a"/></g><g font-family="sans-serif" text-anchor="middle" fill="#1f2937"><text x="240" y="40" font-size="13" font-weight="bold">Megacity</text><text x="240" y="55" font-size="11">10 million +</text><text x="240" y="85" font-size="13" font-weight="bold">Conurbation</text><text x="240" y="100" font-size="11">millions</text><text x="240" y="130" font-size="13" font-weight="bold">City</text><text x="240" y="145" font-size="11">hundreds of thousands</text><text x="240" y="175" font-size="13" font-weight="bold">Town</text><text x="240" y="190" font-size="11">thousands</text><text x="240" y="220" font-size="13" font-weight="bold">Village</text><text x="240" y="235" font-size="11">hundreds</text><text x="240" y="265" font-size="13" font-weight="bold">Hamlet</text><text x="240" y="280" font-size="11">a few houses</text></g><line x1="24" y1="285" x2="24" y2="34" stroke="#1f2937" stroke-width="2"/><polygon points="24,22 18,36 30,36" fill="#1f2937"/><text x="40" y="160" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 40 160)">Bigger population, more services</text><line x1="456" y1="25" x2="456" y2="276" stroke="#1f2937" stroke-width="2"/><polygon points="456,288 450,274 462,274" fill="#1f2937"/><text x="440" y="160" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(90 440 160)">More settlements at each level</text><text x="240" y="310" font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle">Sizes are rough guides: definitions vary by country</text></svg>`,
      diagramCaption:
        "The settlement hierarchy. Each step up has more people and more high-order services, but there are fewer settlements at that level, so the shape is a pyramid.",
      workedExamples: [
        {
          title: "Calculating % urban",
          problem: "Country A has 50 million people. 28 million of them live in towns and cities. What percentage of its population is urban?",
          steps: [
            "Write the formula: % urban = urban population ÷ total population × 100.",
            "Urban goes on top: 28 million ÷ 50 million = 0.56.",
            "Multiply by 100: 0.56 × 100 = 56.",
            "Sense check: 28 is just over half of 50, so just over 50% makes sense.",
          ],
          answer: "56% of Country A's population is urban.",
          yourTurn: {
            question: "Your turn: a country has 40 million people, and 14 million of them live in urban areas. What percentage of the population is urban? Give your answer as a %.",
            answer: { type: "number", value: 35, display: "35%" },
            solution: "14 ÷ 40 = 0.35, and 0.35 × 100 = 35%. Check: 14 is a bit over a third of 40, so about 35% is sensible.",
          },
        },
        {
          title: "Percentage points, not percent",
          problem: "The world was about 30% urban in 1950 and about 57% urban in 2023. By how much did the urban share rise?",
          steps: [
            "Both numbers are already percentages, so subtract: 57 − 30 = 27.",
            "The correct unit is **percentage points**: the share rose by 27 percentage points.",
            "Saying it rose by '27%' would be wrong: 27% of 30 is only about 8.",
            "(Stretch: as a percentage change, 27 ÷ 30 × 100 = 90%, so the urban share nearly doubled.)",
          ],
          answer: "The urban share rose by about 27 percentage points (from about 30% to about 57%).",
          yourTurn: {
            question: "Your turn: the UN projects the world will be about 68% urban by 2050. How many percentage points higher is that than about 57% in 2023?",
            answer: { type: "number", value: 11, display: "11 percentage points" },
            solution: "68 − 57 = 11 percentage points.",
          },
        },
      ],
      keyPoints: [
        "Settlement hierarchy (smallest to largest): hamlet → village → town → city → conurbation → megacity.",
        "Going up the hierarchy: more people, more high-order services, a bigger sphere of influence, but fewer settlements.",
        "There is no single world-wide definition of 'city' or 'urban': each country sets its own rules.",
        "Urbanisation = a rising proportion of people living in urban areas. % urban = urban ÷ total × 100.",
        "The world passed 50% urban around 2007–2008 and was about 57% urban in 2023.",
        "Singapore is a city-state: 100% urban.",
      ],
      whyItWorks:
        "Every service needs a **threshold population**: the minimum number of customers to stay open. A small shop needs a few hundred regular customers; a big hospital or university needs hundreds of thousands. So high-order services can only survive in large settlements, and people travel further to reach them, giving big places a large sphere of influence. Because there are only enough people to support a few large centres but plenty of room for many small ones, the hierarchy forms a pyramid.",
      strategies: ["Use figures from the source", "Sense check your answer", "Spot the misconception", "Think at different scales"],
      thinkDeeper:
        "Singapore is 100% urban, but it has nature reserves, reservoirs and farms on its outlying islands. Does '100% urban' mean every square metre is built on? What does the figure actually measure?",
    },
    // -----------------------------------------------------------------------
    {
      id: "characteristics-of-cities",
      heading: "The good and bad of city life",
      discovery: {
        problem:
          "Cities are crowded, noisy, expensive and often polluted. Rents can swallow half a pay packet. Yet every year tens of millions of people choose to move *into* cities, not out of them.\n\nWhy would anyone choose traffic jams and smog? And if you moved to a city, which part would you live in, and why?",
        idea:
          "Cities concentrate **opportunities** (jobs, wages, schools, hospitals, culture) as well as **problems** (congestion, pollution, high housing costs). For most migrants the opportunities outweigh the costs. *Where* you live inside a city also matters, because land use changes in a fairly regular way from the centre outwards: geographers show this with **urban land-use models**.",
      },
      body:
        "Cities pull people in because they concentrate **opportunities**, but packing millions of people together also concentrates **problems**.\n\n**Opportunities (the good)**\n- **Jobs and higher wages**: offices, factories, ports, shops and the informal sector all cluster in cities.\n- **Services**: hospitals, universities, specialist schools, and (in most cities) piped water and electricity.\n- **Culture and connections**: museums, sport, festivals, airports, fast internet, people with new ideas.\n- **Efficient public transport**: dense cities can support metro systems such as Singapore's MRT or Tokyo's rail network.\n\n**Challenges (the bad)**\n- **Congestion**: traffic jams waste time and fuel.\n- **Pollution**: air pollution from vehicles, industry and burning waste. Delhi's winter smog regularly ranks among the worst of any major city.\n- **Housing costs**: rents are high; in many lower-income cities newcomers end up in **informal settlements** (slums). UN-Habitat estimates that over 1 billion people worldwide live in slums or informal settlements.\n- **Inequality**: very rich and very poor neighbourhoods can sit side by side.\n- **Urban heat island**: concrete, glass and traffic make cities several °C warmer than the surrounding countryside, especially at night.\n\nSort impacts with **SEE**: Social, Economic, Environmental.\n\n**Land-use zones: a simple model**\n\nIn 1925 the sociologist Ernest Burgess suggested, from studying Chicago, that cities grow outwards in rings. A simplified version is shown in the diagram. It is a **model**: a simplified picture to compare real cities with, not a map of any actual city.\n\n| Zone | Where | Typical land use |\n|---|---|---|\n| CBD (Central Business District) | the centre | offices, shops, banks, tall buildings, highest land values |\n| Inner city | around the CBD | older, dense housing, old factories, areas being regenerated |\n| Suburbs | further out | newer, lower-density housing with gardens, parks, commuters |\n| Rural–urban fringe | the edge | retail and business parks, airports, golf courses, farmland under pressure |\n\nMoving outwards, **land values and building density fall**, buildings get **newer**, and there is **more green space**.\n\nReal cities bend the model: rivers, coasts, hills, motorways and planning all distort the rings. Singapore's CBD is around Raffles Place and Marina Bay, but planners deliberately built self-contained **HDB new towns** (such as Tampines, Jurong and Punggol) around the island, each with its own town centre. Singapore is many mini-centres, not neat rings.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concentric ring model of urban land use. CBD at the centre, then inner city, then suburbs, then the rural-urban fringe at the edge. A key explains each zone and notes that moving outwards land values and density fall, buildings get newer and there is more green space."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><circle cx="155" cy="160" r="140" fill="#bbf7d0" stroke-dasharray="6 4"/><circle cx="155" cy="160" r="100" fill="#c7d2fe"/><circle cx="155" cy="160" r="62" fill="#fde68a"/><circle cx="155" cy="160" r="28" fill="#fecaca"/></g><g font-family="sans-serif" text-anchor="middle" fill="#1f2937"><text x="155" y="165" font-size="13" font-weight="bold">CBD</text><text x="155" y="119" font-size="12">Inner city</text><text x="155" y="82" font-size="12">Suburbs</text><text x="155" y="44" font-size="12">Rural–urban fringe</text></g><line x1="155" y1="190" x2="155" y2="284" stroke="#1f2937" stroke-width="2"/><polygon points="155,296 149,282 161,282" fill="#1f2937"/><g font-family="sans-serif" fill="#1f2937" font-size="11"><rect x="312" y="22" width="14" height="14" fill="#fecaca" stroke="#334155"/><text x="332" y="33" font-weight="bold">CBD</text><text x="332" y="47">offices, shops, banks</text><rect x="312" y="60" width="14" height="14" fill="#fde68a" stroke="#334155"/><text x="332" y="71" font-weight="bold">Inner city</text><text x="332" y="85">old, dense housing</text><rect x="312" y="98" width="14" height="14" fill="#c7d2fe" stroke="#334155"/><text x="332" y="109" font-weight="bold">Suburbs</text><text x="332" y="123">newer homes, gardens</text><rect x="312" y="136" width="14" height="14" fill="#bbf7d0" stroke="#334155"/><text x="332" y="147" font-weight="bold">Rural–urban fringe</text><text x="332" y="161">retail parks, farmland</text><text x="312" y="192" font-weight="bold">Moving outwards (arrow):</text><text x="318" y="210">- land values fall</text><text x="318" y="226">- density falls</text><text x="318" y="242">- buildings get newer</text><text x="318" y="258">- more green space</text><text x="312" y="292" font-style="italic" fill="#334155">A model: real cities differ</text></g></svg>`,
      diagramCaption:
        "A simplified concentric-ring (Burgess-style) model of urban land use. It is a model, not a map: real cities are shaped by rivers, coasts, transport routes and planning.",
      workedExamples: [
        {
          title: "Building a model exam answer",
          problem: "Explain one advantage and one disadvantage of living in a large city. [4 marks]",
          steps: [
            "Read the command word: **explain** means give a point *and* the reason or consequence. Two points × 2 marks each.",
            "Advantage, point: cities offer more jobs, often with higher wages.",
            "Advantage, develop it: because many businesses cluster there, people have a better chance of finding work and earning enough to pay for school and healthcare.",
            "Disadvantage, point: traffic congestion and air pollution.",
            "Disadvantage, develop it: millions of vehicles mean long, slow commutes, and exhaust fumes can cause asthma and other breathing problems, for example during Delhi's winter smog.",
            "Check: each point has a 'because' or 'so', and there is a named example.",
          ],
          answer:
            "One advantage is that cities offer more jobs, often with higher wages, because many businesses cluster there; this means people can earn enough to afford better healthcare and schooling for their children. One disadvantage is traffic congestion, which leads to air pollution: millions of vehicles produce exhaust fumes that can cause asthma and other breathing problems, as seen in Delhi's severe winter smog.",
          yourTurn: {
            question: "Your turn: name the zone of a city, at the centre of the urban model, that has the highest land values, the tallest buildings and most of the offices and big shops.",
            answer: {
              type: "text",
              accept: ["CBD", "central business district", "C.B.D.", "the CBD", "central business district (CBD)", "CBD (central business district)"],
              display: "CBD (Central Business District)",
            },
            solution: "The **CBD (Central Business District)**. It is the most accessible point in the city, so land there is in highest demand and most expensive, which is why only offices and shops can afford it and why they build upwards.",
          },
        },
        {
          title: "Read the resource: a transect",
          problem:
            "Wei Ling walked a straight line (a **transect**) from the centre of a city to its edge and recorded:\n\n| Distance from centre | What she saw |\n|---|---|\n| 0 km | 30-storey office towers, department stores, very few homes |\n| 2 km | old, closely packed terraces and flats, a disused factory being turned into apartments |\n| 6 km | two-storey detached and semi-detached houses with gardens, a park |\n| 12 km | a retail park, a golf course and fields |\n\nIdentify the land-use zone at each point.",
          steps: [
            "0 km: tall offices and shops, few homes → **CBD**.",
            "2 km: old, dense housing plus old industry being regenerated → **inner city**.",
            "6 km: newer, lower-density housing with gardens → **suburbs**.",
            "12 km: retail park, golf course and farmland at the edge → **rural–urban fringe**.",
            "Notice the pattern: building height and density fall with distance from the centre, exactly as the model predicts.",
          ],
          answer: "0 km CBD; 2 km inner city; 6 km suburbs; 12 km rural–urban fringe.",
          yourTurn: {
            question: "Your turn: on the edge of a city, Arjun finds a new business park, an airport and farmland that is being sold for housing. Name this land-use zone.",
            answer: {
              type: "text",
              accept: ["rural-urban fringe", "rural–urban fringe", "rural urban fringe", "urban fringe", "the rural-urban fringe", "rural-urban fringe zone"],
              display: "Rural–urban fringe",
            },
            solution: "This is the **rural–urban fringe**, the zone where the built-up city meets the countryside. Land is cheaper and there is space for large, land-hungry uses like airports and business parks.",
          },
        },
      ],
      keyPoints: [
        "Cities offer opportunities: jobs, higher wages, services, culture and good transport.",
        "Cities bring challenges: congestion, pollution, high housing costs, informal settlements, inequality, the urban heat island.",
        "Sort impacts with SEE: Social, Economic, Environmental.",
        "Model zones from the centre outwards: CBD → inner city → suburbs → rural–urban fringe.",
        "Moving outwards: land values and density fall, buildings get newer, green space increases.",
        "The Burgess-style model is a simplification; real cities (like Singapore with its HDB new towns) differ.",
      ],
      whyItWorks:
        "The centre of a city is the **most accessible** point: roads and rail lines meet there, so the most customers and workers can reach it. Everyone wants that land, so it is the most **expensive**. Only shops and offices earn enough per square metre to pay, and they build **upwards** to make the most of each plot. Further out, land is cheaper, so people can afford houses with gardens. Cities also grow outwards over time, so the oldest buildings are near the centre (inner city) and the newest are at the edge (suburbs and fringe).",
      strategies: ["Use the command word", "PEEL paragraph", "Social / economic / environmental (SEE)", "Read the key first", "Apply a model to a new place"],
      thinkDeeper:
        "In many lower-income cities the pattern is partly reversed: wealthy people live near the centre and the poorest live in informal settlements at the edge. Using what you know about transport and land prices, suggest why.",
    },
    // -----------------------------------------------------------------------
    {
      id: "megacities",
      heading: "Megacities",
      discovery: {
        problem:
          "In 1990 the UN counted about 10 cities with more than 10 million people. By 2018 it counted about 33.\n\n1. Predict: which continent gained the most?\n2. Tokyo was the world's largest city for decades. Is it still? And how could two reports disagree about which city is 'the biggest'?",
        idea:
          "Most of the new megacities are in **Asia**, and the fastest-growing ones are in lower-income countries and NEEs (newly emerging economies) such as India, Bangladesh, Nigeria and the DR Congo. Tokyo is barely growing as Japan's population ages. And 'biggest' depends on **where you draw the city's boundary**: different methods give different rankings, so always quote the source and year.",
      },
      body:
        "A **megacity** is an urban area with **10 million or more** people. Counting them is harder than it sounds, because you must decide where a city *ends*. Some counts use the official city boundary; others use the whole continuous built-up area (the **urban agglomeration**), which is usually much bigger. That is why sources disagree.\n\n**How many?** Using its 2018 method, the UN counted:\n- about **10** megacities in 1990;\n- about **33** in 2018;\n- a projected **43** by 2030.\n\n**Where?** Most are in **Asia**: roughly 20 of the 33 in 2018 (including Tokyo, Delhi, Shanghai, Mumbai, Beijing, Dhaka, Osaka, Karachi, Manila and Jakarta). Others are in Latin America (São Paulo, Mexico City, Buenos Aires), Africa (Cairo, Lagos, Kinshasa), North America (New York, Los Angeles) and Europe (Moscow, Paris).\n\n| Rank | Urban agglomeration | Country | Population, 2018 (UN estimate, millions) |\n|---|---|---|---|\n| 1 | Tokyo | Japan | 37.5 |\n| 2 | Delhi | India | 28.5 |\n| 3 | Shanghai | China | 25.6 |\n| 4 | São Paulo | Brazil | 21.7 |\n| 5 | Mexico City | Mexico | 21.6 |\n| 6 | Cairo | Egypt | 20.1 |\n| 7 | Mumbai | India | 20.0 |\n| 8 | Beijing | China | 19.6 |\n| 9 | Dhaka | Bangladesh | 19.6 |\n\n**Two kinds of megacity**\n- **Slow-growing megacities in high-income countries (HICs)**, such as Tokyo, Osaka and New York. These grew mainly in the 20th century. Tokyo is now barely growing, and the UN expects it to shrink slightly as Japan's population ages.\n- **Fast-growing megacities in lower-income countries and NEEs**, such as Delhi, Dhaka, Lagos and Kinshasa. These add many people every year through rural–urban migration and natural increase. The UN's 2018 projections had Delhi overtaking Tokyo around 2028.\n\n**Rankings depend on definitions.** A newer UN report (2025), which draws city boundaries using a different, more consistent method, put **Jakarta** first (roughly 40 million people) with **Dhaka** second and Tokyo third. Neither list is 'wrong': they measure differently. In an exam, quote the figure *with* its source and year, and say 'about'.\n\n**Big is not the same as important.** London (about 9 million) is not a megacity, but it is one of the most powerful **world cities** for finance. Singapore (about 6 million) is also a major world city, port and financial centre without being a megacity.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal bar chart of the nine largest urban agglomerations in 2018, UN estimates in millions: Tokyo 37.5, Delhi 28.5, Shanghai 25.6, Sao Paulo 21.7, Mexico City 21.6, Cairo 20.1, Mumbai 20.0, Beijing 19.6, Dhaka 19.6. A dashed line marks the 10 million megacity threshold."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="240" y="18" font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Nine largest urban agglomerations, 2018 (UN estimates)</text><g stroke="#e5e7eb" stroke-width="1"><line x1="270" y1="28" x2="270" y2="276"/><line x1="350" y1="28" x2="350" y2="276"/><line x1="430" y1="28" x2="430" y2="276"/></g><g fill="#c7d2fe" stroke="#334155" stroke-width="1"><rect x="110" y="32" width="300" height="20" fill="#fecaca"/><rect x="110" y="59" width="228" height="20"/><rect x="110" y="86" width="204.8" height="20"/><rect x="110" y="113" width="173.6" height="20"/><rect x="110" y="140" width="172.8" height="20"/><rect x="110" y="167" width="160.8" height="20"/><rect x="110" y="194" width="160" height="20"/><rect x="110" y="221" width="156.8" height="20"/><rect x="110" y="248" width="156.8" height="20"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="end"><text x="104" y="46">Tokyo</text><text x="104" y="73">Delhi</text><text x="104" y="100">Shanghai</text><text x="104" y="127">São Paulo</text><text x="104" y="154">Mexico City</text><text x="104" y="181">Cairo</text><text x="104" y="208">Mumbai</text><text x="104" y="235">Beijing</text><text x="104" y="262">Dhaka</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="414" y="46">37.5</text><text x="342" y="73">28.5</text><text x="318.8" y="100">25.6</text><text x="287.6" y="127">21.7</text><text x="286.8" y="154">21.6</text><text x="274.8" y="181">20.1</text><text x="274" y="208">20.0</text><text x="270.8" y="235">19.6</text><text x="270.8" y="262">19.6</text></g><line x1="190" y1="28" x2="190" y2="276" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="110" y1="276" x2="430" y2="276" stroke="#1f2937" stroke-width="1.5"/><line x1="110" y1="28" x2="110" y2="276" stroke="#1f2937" stroke-width="1.5"/><g stroke="#1f2937" stroke-width="1.5"><line x1="110" y1="276" x2="110" y2="281"/><line x1="190" y1="276" x2="190" y2="281"/><line x1="270" y1="276" x2="270" y2="281"/><line x1="350" y1="276" x2="350" y2="281"/><line x1="430" y1="276" x2="430" y2="281"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="110" y="293">0</text><text x="190" y="293">10</text><text x="270" y="293">20</text><text x="350" y="293">30</text><text x="430" y="293">40</text><text x="270" y="311">Population (millions). Dashed line = 10 million (megacity)</text></g></svg>`,
      diagramCaption:
        "The nine largest urban agglomerations in 2018, using UN World Urbanization Prospects 2018 estimates. Every bar passes the dashed 10 million line, so all are megacities. Newer UN estimates using a different boundary method rank Jakarta and Dhaka above Tokyo.",
      workedExamples: [
        {
          title: "Read the bar chart",
          problem: "Using the bar chart, how many more people lived in Tokyo than in Cairo in 2018?",
          steps: [
            "Read the values from the bar labels (or the table): Tokyo 37.5 million, Cairo 20.1 million.",
            "Subtract: 37.5 − 20.1 = 17.4.",
            "Keep the unit: the values are in millions.",
            "Sense check: Tokyo's bar is almost twice as long as Cairo's, so a difference of about 17 million fits.",
          ],
          answer: "About 17.4 million more people lived in Tokyo than in Cairo (2018, UN estimates).",
          yourTurn: {
            question: "Your turn: using the bar chart, how many more people lived in Delhi than in Dhaka in 2018? Give your answer in millions to 1 decimal place.",
            answer: { type: "number", value: 8.9, tolerance: 0.05, display: "8.9 million" },
            solution: "Delhi 28.5 million − Dhaka 19.6 million = 8.9 million.",
          },
        },
        {
          title: "Percentage increase in megacities",
          problem: "The UN counted about 10 megacities in 1990 and about 33 in 2018. Calculate the percentage increase.",
          steps: [
            "Formula: % change = (new − old) ÷ old × 100.",
            "Change: 33 − 10 = 23.",
            "Divide by the **old** value: 23 ÷ 10 = 2.3.",
            "Multiply by 100: 2.3 × 100 = 230%.",
            "Sense check: the number more than tripled; a 200% increase would mean tripling, so 230% fits.",
          ],
          answer: "An increase of 230% (from about 10 to about 33 megacities).",
          yourTurn: {
            question: "Your turn: the UN projected about 43 megacities by 2030, up from about 33 in 2018. Calculate the percentage increase, to the nearest whole number.",
            answer: { type: "number", value: 30, tolerance: 0.5, display: "30%" },
            solution: "Change = 43 − 33 = 10. 10 ÷ 33 = 0.303… × 100 = 30.3%, which rounds to **30%**. (Dividing by 43 instead of 33 gives 23%, a common slip: always divide by the old value.)",
          },
        },
      ],
      keyPoints: [
        "A megacity is an urban area of 10 million or more people.",
        "The UN counted about 10 megacities in 1990 and about 33 in 2018, with about 43 projected by 2030; counts depend on how boundaries are drawn.",
        "Most megacities (roughly 20 of 33 in 2018) are in Asia.",
        "Tokyo was the largest (about 37 million, UN 2018) but is barely growing; newer UN estimates put Jakarta and Dhaka ahead.",
        "The fastest-growing megacities are in lower-income countries and NEEs (Delhi, Dhaka, Lagos, Kinshasa).",
        "Always quote a city's population with 'about', a year and a source.",
      ],
      whyItWorks:
        "Megacities grow fastest where three things combine. First, a **large national population** that is still mostly rural, so there are many potential migrants (India, Bangladesh, Nigeria). Second, a **young population**, so lots of babies are born in the city as well. Third, **cumulative causation**: as a city grows it attracts more businesses, which create more jobs, which attract more migrants, which attract more businesses. HIC megacities like Tokyo have already used up their rural 'reservoir' of migrants and have ageing populations, so their growth has stalled.",
      strategies: ["Read the key first", "Use figures from the source", "TEA (Trend, Evidence, Anomaly)", "Sense check your answer", "Compare and contrast"],
      thinkDeeper:
        "One report says Tokyo is the world's biggest city; another says Jakarta. Invent a simple example (two towns and a ring of suburbs) to show how changing the boundary line could flip the ranking. Which method do you think is fairer, and why?",
    },
    // -----------------------------------------------------------------------
    {
      id: "causes-of-urbanisation",
      heading: "Why cities grow",
      discovery: {
        problem:
          "Imagine that from tomorrow nobody at all moved into Dhaka. Would its population stop growing?\n\nThink about *who* usually moves to a city: what age are they, and what happens in the years after they arrive?",
        idea:
          "No: it would keep growing. Most migrants are **young adults**, so they go on to have children *in the city*. Cities grow in two linked ways: **rural–urban migration** (driven by **push** and **pull** factors) and **natural increase** (more births than deaths). In many lower-income countries natural increase now adds about as many people to cities as migration does, and often more.",
      },
      body:
        "Cities grow in two ways:\n\n1. **Rural–urban migration**: people moving from the countryside to the city.\n2. **Natural increase**: more births than deaths in the city itself.\n\nThe two are linked. Migrants are usually **young adults**. They then start families *in the city*, so migration today creates natural increase tomorrow.\n\n**Push and pull factors**\n\n| Push factors (drive people out of rural areas) | Pull factors (attract people to cities) |\n|---|---|\n| Few jobs; farming is hard work for low pay | More jobs, often better paid, including the informal sector |\n| Drought, floods, crop failure, worn-out soil | Schools, colleges and universities |\n| Poor healthcare and few schools | Hospitals and clinics |\n| Farm machines mean fewer workers are needed | Electricity, piped water, internet |\n| Conflict or insecurity | Family and friends already there; the 'bright lights' |\n\nPull factors are often **perceived**: migrants *expect* a better life, but may at first find unemployment, low-paid informal work and informal housing.\n\n**Urbanisation in HICs vs LICs and NEEs**\n\n| Country | Income group | Urban population (about, 2023) |\n|---|---|---|\n| Japan | HIC | 92% |\n| United Kingdom | HIC | 84% |\n| China | NEE | 65% |\n| Nigeria | NEE | 54% |\n| India | NEE | 36% |\n| Niger | LIC | 17% |\n| Singapore | HIC (city-state) | 100% |\n\n- **HICs** such as the UK urbanised during the Industrial Revolution of the 19th century. They are already highly urban, so their % urban now rises only slowly.\n- **LICs and NEEs** are urbanising **fastest** today, from a lower starting point. Most of the world's future urban growth is expected in Asia and Africa.\n\n**Counter-urbanisation**\n\nIn many HICs some people move the *other* way: out of big cities to small towns and villages. This is **counter-urbanisation**. Reasons include high city house prices, congestion and pollution; car ownership, better roads and fast broadband; remote working (which grew after the COVID-19 pandemic); and retiring to the countryside. In the UK it has been noticeable since the 1960s–70s.\n\nSingapore is a special case: with no countryside to migrate *from*, its population changes through natural increase and international migration.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Push and pull diagram. A rural area box on the left lists push factors: few jobs and low pay, drought and crop failure, poor healthcare, few schools, machines replace workers, conflict. A city box on the right lists pull factors: more jobs and higher pay, schools and universities, hospitals, electricity and clean water, family already there, bright lights. A large arrow labelled rural-urban migration points from the rural area to the city. Obstacles such as travel cost and leaving family lie in between."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="13" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="90" y="24">PUSH factors</text><text x="390" y="24">PULL factors</text></g><rect x="10" y="34" width="160" height="214" rx="8" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><rect x="310" y="34" width="160" height="214" rx="8" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/><g font-family="sans-serif" font-size="13" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="90" y="56">Rural area</text><text x="390" y="56">City</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="20" y="84">- Few jobs, low pay</text><text x="20" y="110">- Drought, crop failure</text><text x="20" y="136">- Poor healthcare</text><text x="20" y="162">- Few schools</text><text x="20" y="188">- Machines replace</text><text x="28" y="202">workers</text><text x="20" y="228">- Conflict</text><text x="320" y="84">- More jobs, higher pay</text><text x="320" y="110">- Schools, universities</text><text x="320" y="136">- Hospitals</text><text x="320" y="162">- Electricity, clean</text><text x="328" y="176">water</text><text x="320" y="202">- Family already there</text><text x="320" y="228">- Bright lights</text></g><polygon points="178,135 278,135 278,120 304,145 278,170 278,155 178,155" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="240" y="100">Rural–urban</text><text x="240" y="114">migration</text></g><g font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle"><text x="240" y="190">mostly young</text><text x="240" y="204">adults</text></g><text x="240" y="276" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Obstacles in between: cost of travel, leaving family behind</text></svg>`,
      diagramCaption:
        "Push factors drive people out of rural areas; pull factors attract them to the city. Obstacles such as the cost of the journey can stop some people moving.",
      workedExamples: [
        {
          title: "Migration or natural increase?",
          problem:
            "A city's population grew by 500,000 in one year. 300,000 of this growth came from rural–urban migration and the rest from natural increase.\n\n(a) How much growth came from natural increase?\n(b) What percentage of the growth came from migration?",
          steps: [
            "(a) Natural increase = total growth − migration = 500,000 − 300,000 = 200,000.",
            "(b) % from migration = migration ÷ total growth × 100.",
            "300,000 ÷ 500,000 = 0.6.",
            "0.6 × 100 = 60%.",
            "Check: 60% + 40% (natural increase, 200,000 ÷ 500,000) = 100%.",
          ],
          answer: "(a) 200,000 people from natural increase. (b) 60% of the growth came from migration.",
          yourTurn: {
            question: "Your turn: a city grew by 400,000 people in a year, and 260,000 of these were rural–urban migrants. What percentage of the growth came from migration? Give your answer as a %.",
            answer: { type: "number", value: 65, display: "65%" },
            solution: "260,000 ÷ 400,000 = 0.65, and 0.65 × 100 = 65%. (The other 35%, 140,000 people, came from natural increase.)",
          },
        },
        {
          title: "Building a model exam answer",
          problem: "Explain why cities in lower-income countries are growing rapidly. [4 marks]",
          steps: [
            "Command word **explain**: give reasons and link them together. Aim for two developed points.",
            "Point 1, migration (push): rural areas have few jobs and poor services, and drought or crop failure can make farming impossible, so people are pushed out.",
            "Point 1, migration (pull): cities offer more jobs, even in the informal sector, plus schools and hospitals, so people are pulled in.",
            "Point 2, natural increase: most migrants are young adults, so they have children in the city; with a young population, births far outnumber deaths.",
            "Link and example: say that the two processes reinforce each other, and name a city such as Dhaka or Lagos.",
          ],
          answer:
            "Cities in lower-income countries grow quickly partly because of rural–urban migration. People are pushed out of the countryside by a lack of jobs, poor healthcare and crop failures, and pulled to cities such as Dhaka by the hope of paid work, schools and hospitals. Secondly, cities grow by natural increase. Most migrants are young adults, so they start families in the city, and because the population is young, births greatly outnumber deaths. Together, these two processes make cities grow very rapidly.",
          yourTurn: {
            question: "Your turn: in many HICs, some people move out of big cities to live in small towns and villages. What is this process called?",
            answer: {
              type: "text",
              accept: [
                "counter-urbanisation",
                "counterurbanisation",
                "counter urbanisation",
                "counter-urbanization",
                "counterurbanization",
                "counter urbanization",
              ],
              display: "Counter-urbanisation",
            },
            solution: "**Counter-urbanisation**: the movement of people out of large cities to smaller towns, villages and the countryside, helped by cars, broadband and remote working.",
          },
        },
      ],
      keyPoints: [
        "Cities grow through rural–urban migration and natural increase.",
        "Push factors drive people out of rural areas; pull factors attract them to cities.",
        "Migrants are mostly young adults, so migration leads to natural increase in the city.",
        "Pull factors are often perceived: reality can be unemployment and informal housing at first.",
        "HICs are already highly urban (UK about 84%); LICs and NEEs are urbanising fastest.",
        "Counter-urbanisation is the movement out of big cities to smaller settlements, common in HICs.",
      ],
      whyItWorks:
        "Migration is a decision: people weigh what they would lose (home, family, land, the cost of the journey) against what they expect to gain. When rural life gets harder (push) and city life looks better (pull), the balance tips. Once migrants arrive, they send news and money home, which encourages relatives to follow (**chain migration**). Because the newcomers are young, they have children in the city, so even if migration slowed, the city's population would keep rising for years. In HICs most people already live in cities, so there are few rural migrants left; and when cities become expensive and congested, the balance can tip the other way, causing counter-urbanisation.",
      strategies: ["Cause → process → effect", "PEEL paragraph", "Use the command word", "Compare and contrast", "Spot the misconception"],
      thinkDeeper:
        "A family is choosing between staying on their farm in rural Bangladesh and moving to Dhaka. Make a push–pull list from *their* point of view, then add one 'obstacle'. Would every family member (a grandparent, a teenager) weigh the factors in the same way?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Settlement", back: "Any place where people live, from a hamlet to a megacity." },
      { front: "Settlement hierarchy (in order)", back: "Hamlet → village → town → city → conurbation → megacity, ranked by population size and range of services." },
      { front: "Urban area", back: "A built-up area (town or city) where most people work in industry and services." },
      { front: "Rural area", back: "The countryside: lower density, more farming, fewer services." },
      { front: "Urbanisation", back: "The increase in the proportion (percentage) of a population living in urban areas." },
      { front: "How do you calculate % urban?", back: "Urban population ÷ total population × 100." },
      { front: "What share of the world's people live in urban areas?", back: "About 57% (2023). The 50% mark was passed around 2007–2008." },
      { front: "Megacity", back: "An urban area with 10 million or more people." },
      { front: "How many megacities did the UN count in 2018?", back: "About 33 (up from about 10 in 1990), with about 43 projected by 2030. Counts vary with the definition used." },
      { front: "Which continent has most megacities?", back: "Asia: roughly 20 of the 33 in 2018." },
      { front: "Largest urban agglomeration in UN 2018 estimates", back: "Tokyo, about 37 million people. Newer UN estimates (2025, different boundaries) put Jakarta and Dhaka ahead." },
      { front: "CBD", back: "Central Business District: the city centre, with offices, shops, tall buildings and the highest land values." },
      { front: "Inner city", back: "The zone around the CBD with older, dense housing and old industry, often being regenerated." },
      { front: "Suburbs", back: "Outer residential areas with newer, lower-density housing, gardens and parks." },
      { front: "Rural–urban fringe", back: "The edge of the city where built-up land meets the countryside: retail parks, business parks, airports, farmland." },
      { front: "Rural–urban migration", back: "The movement of people from the countryside to towns and cities." },
      { front: "Push factor", back: "Something that drives people away from where they live (e.g. few jobs, drought, conflict)." },
      { front: "Pull factor", back: "Something that attracts people to a new place (e.g. jobs, hospitals, schools, family)." },
      { front: "Natural increase", back: "Population growth when births exceed deaths." },
      { front: "Counter-urbanisation", back: "The movement of people out of big cities to smaller towns, villages and the countryside." },
      { front: "City-state", back: "A country that consists of one city, e.g. Singapore, which is 100% urban." },
    ],
    mustKnow: [
      "Can you put the settlement hierarchy in order and describe how services change up the hierarchy?",
      "Can you explain why there is no single world-wide definition of a city?",
      "Can you define urbanisation as a rising *proportion* of people in urban areas?",
      "Can you calculate % urban (urban ÷ total × 100) and explain why Singapore is 100% urban?",
      "Can you quote the world's urban share (about 57% in 2023) and when it passed 50% (around 2007–2008)?",
      "Can you explain the difference between a percentage-point change and a percentage change?",
      "Can you list opportunities and challenges of city life and sort them using SEE?",
      "Can you sketch and label the urban land-use model (CBD, inner city, suburbs, rural–urban fringe) and explain why land values fall outwards?",
      "Can you define a megacity (10 million+) and say roughly how many there are, with a source and year?",
      "Can you describe where most megacities are (Asia) and name at least five?",
      "Can you explain why rankings of the 'largest city' differ between sources?",
      "Can you explain push and pull factors with examples, and how natural increase adds to city growth?",
      "Can you compare urbanisation in HICs with LICs/NEEs using figures?",
      "Can you define counter-urbanisation and give reasons for it?",
    ],
    misconceptions: [
      { wrong: "Urbanisation just means cities getting bigger.", right: "Urbanisation is a rise in the *proportion* of people living in urban areas. A city can grow while the country's % urban stays the same if the rural population grows just as fast." },
      { wrong: "Megacities are mostly in rich countries like the USA and Japan.", right: "Most megacities are in Asia, and the fastest-growing ones are in lower-income countries and NEEs such as India, Bangladesh, Nigeria and the DR Congo." },
      { wrong: "There is one correct answer to 'Which is the world's largest city?'", right: "It depends on where the boundary is drawn. UN 2018 estimates put Tokyo first; a newer UN method (2025) puts Jakarta first. Always quote the source and year." },
      { wrong: "Cities only grow because people move there.", right: "Natural increase matters too. Young migrants have children in the city, so in many lower-income countries natural increase now adds about as much growth as migration, often more." },
      { wrong: "Everyone who moves to a city finds a good job and a home.", right: "Pull factors are often perceived. Many migrants first find low-paid informal work and live in informal settlements." },
      { wrong: "The Burgess model is an accurate map of how every city is laid out.", right: "It is a simplified model based on Chicago in the 1920s. Rivers, coasts, transport routes and planning distort it; Singapore's planned HDB new towns don't fit neat rings." },
      { wrong: "A city is any place with more than a certain number of people.", right: "Definitions vary by country, and some are about status, not size: St Davids in Wales has fewer than 2,000 people but is officially a city." },
      { wrong: "The biggest cities are the most important cities.", right: "Size is not influence. London (about 9 million) and Singapore (about 6 million) are not megacities but are among the world's most important financial centres." },
    ],
    examMistakes: [
      "Writing '%' when the answer is a percentage-point change (30% → 57% is a rise of 27 percentage points, not 27%).",
      "Doing the % urban calculation upside down (total ÷ urban instead of urban ÷ total).",
      "Dividing by the new value instead of the old value in a % change calculation.",
      "Quoting a city population as an exact fact with no 'about', year or source.",
      "Listing push and pull factors without explaining *why* each one makes people move.",
      "Putting a push factor in the city or a pull factor in the countryside: push factors belong to the place people leave.",
      "Calling any large city a megacity: the threshold is 10 million.",
      "Forgetting natural increase when explaining why cities grow.",
      "Describing the CBD as the zone where most people live (it has few homes).",
    ],
    mnemonics: [
      { topic: "Settlement hierarchy (small to large)", device: "Happy Villagers Take City Coaches Mostly", explanation: "Hamlet, Village, Town, City, Conurbation, Megacity." },
      { topic: "Urban model zones (centre outwards)", device: "Cats In Smart Raincoats", explanation: "CBD, Inner city, Suburbs, Rural–urban fringe." },
      { topic: "Push vs pull", device: "PUSH = Problems where you are; PULL = Promises of where you're going", explanation: "Push factors belong to the place people leave; pull factors belong to the place they move to." },
    ],
    realWorld: [
      { title: "Singapore: a 100% urban city-state", detail: "With about 6 million people on roughly 735 km², the whole country is one city. Planners use HDB new towns, each with its own town centre and MRT links, so people don't all need to travel to the CBD at Raffles Place and Marina Bay.", emoji: "🇸🇬" },
      { title: "Tokyo: the giant that stopped growing", detail: "Tokyo topped the UN's 2018 list at about 37 million, linked by one of the world's busiest rail networks. Japan's ageing, shrinking population means the UN expects Tokyo to shrink slightly.", emoji: "🚄" },
      { title: "Dhaka: one of the fastest-growing megacities", detail: "Bangladesh's capital grows by hundreds of thousands of people a year, pulled by jobs in the garment industry and pushed by floods, river erosion and rural poverty. Many newcomers live in informal settlements.", emoji: "🏘️" },
      { title: "Delhi's winter smog", detail: "Vehicle exhaust, industry, construction dust and crop burning in neighbouring states combine with still winter air to make Delhi's air among the most polluted of any major city: a clear cost of rapid urban growth.", emoji: "😷" },
      { title: "Jakarta and the definition debate", detail: "Using a newer, consistent method of drawing city boundaries, a 2025 UN report ranked Jakarta as the world's largest city (roughly 40 million). The same place can rank very differently depending on where you draw the line.", emoji: "🗺️" },
      { title: "Counter-urbanisation in the UK", detail: "Since the 1960s–70s many people have left big UK cities for towns and villages, helped by cars and broadband. Remote working after the COVID-19 pandemic encouraged more people to move out.", emoji: "🏡" },
    ],
    videos: [
      { title: "Urbanisation explained (GCSE / KS3 geography)", channel: "YouTube search: Time for Geography and others", url: "https://www.youtube.com/results?search_query=urbanisation+explained+geography+gcse" },
      { title: "What is a megacity?", channel: "YouTube search: geography channels", url: "https://www.youtube.com/results?search_query=what+is+a+megacity+geography" },
      { title: "Urban land-use models: the Burgess model", channel: "YouTube search: geography channels", url: "https://www.youtube.com/results?search_query=burgess+model+urban+land+use+geography" },
      { title: "Push and pull factors of rural–urban migration", channel: "YouTube search: geography channels", url: "https://www.youtube.com/results?search_query=push+and+pull+factors+rural+urban+migration" },
    ],
    formulas: [
      { name: "% urban", formula: "Urban population ÷ total population × 100.", note: "Urban goes on top. Singapore = 100%." },
      { name: "% change", formula: "(new − old) ÷ old × 100.", note: "Always divide by the OLD value." },
      { name: "Percentage points", formula: "The simple difference between two percentages (57% − 30% = 27 percentage points).", note: "Not the same as a % change." },
      { name: "Settlement hierarchy", formula: "The ranking of settlements by population and range of services: hamlet, village, town, city, conurbation, megacity." },
      { name: "Sphere of influence", formula: "The area around a settlement from which people travel to use its services." },
      { name: "Threshold population", formula: "The minimum number of people needed to keep a service (e.g. a shop or hospital) open." },
      { name: "Urbanisation", formula: "The increase in the proportion of a population living in urban areas." },
      { name: "Conurbation", formula: "A large urban area formed when several towns and cities grow and merge together." },
      { name: "Megacity", formula: "An urban area with 10 million or more people." },
      { name: "Urban agglomeration", formula: "A continuous built-up urban area, including a city and its suburbs, even if it crosses official boundaries." },
      { name: "CBD", formula: "Central Business District: the commercial heart of a city, with the highest land values." },
      { name: "Rural–urban fringe", formula: "The zone at the edge of a city where built-up land meets the countryside." },
      { name: "Rural–urban migration", formula: "The movement of people from the countryside to towns and cities." },
      { name: "Push factor", formula: "A reason that drives people to leave the place where they live." },
      { name: "Pull factor", formula: "A reason that attracts people to move to a new place." },
      { name: "Natural increase", formula: "Population growth when the number of births is greater than the number of deaths." },
      { name: "Counter-urbanisation", formula: "The movement of people out of large cities to smaller towns, villages and the countryside." },
      { name: "Informal settlement", formula: "An area of housing built without legal permission, often lacking clean water, sanitation and secure tenure (a slum)." },
      { name: "City-state", formula: "An independent country made up of a single city, e.g. Singapore (100% urban)." },
      { name: "World urban share", formula: "About 57% of people lived in urban areas in 2023; the 50% mark was passed around 2007–2008.", note: "UN projects about 68% by 2050." },
    ],
  },
};
