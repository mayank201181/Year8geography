import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "population-problems",
  title: "Over-population, Under-population & Policies",
  strand: "Population",
  icon: "⚖️",
  summary: "Too many people, too few, too old or too young — and what governments from Singapore to China have tried to do about it.",
  intro:
    "Is the world 'too full'? Is Japan 'too old'? Should a government ever tell families how many children to have? This topic asks you to think like a geographer *and* a judge. You will learn what over-, under- and optimum population really mean (hint: it is about resources and technology, not just headcount), why ageing and youthful populations bring different problems and opportunities, how pro-natalist, anti-natalist and immigration policies work — with Singapore's own U-turn from 'Stop at Two' to the Baby Bonus — and how to reach a fair, evidence-based judgement on the most famous policy of all: China's One-Child Policy.",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "over-under-population",
      heading: "Over-, under- and optimum population",
      discovery: {
        problem:
          "Singapore packs about 8,000 people into each km². Niger has only about 20 people per km². Yet Singapore has enough food, water and jobs for its people, while many families in Niger struggle to grow enough to eat. Which country is 'over-populated' — and what does that word really measure?",
        idea:
          "Over-population is **not** the same as high density. It means there are more people than the **resources and technology** of a place can support at a decent standard of living. Singapore is crowded but rich in money, skills and technology (it buys food abroad and makes NEWater). Niger has lots of land, but droughts, poor soils and limited technology mean that land supports fewer people well.",
      },
      body:
        "Geographers judge population size against two things: **resources** (food, water, energy, land, jobs) and **technology** (how well those resources can be used).\n\n- **Over-population**: too many people for the resources and technology available. Signs: food or water shortages, unemployment, overcrowded housing, falling living standards.\n- **Under-population**: too few people to make full use of the resources. Signs: labour shortages, empty farmland, services that cost too much per person to run. Canada and Australia are often given as examples — huge areas and rich resources, relatively few people.\n- **Optimum population**: the number of people that gives the **highest standard of living per person** with today's resources and technology.\n- **Carrying capacity**: the largest population an area can support **sustainably**, without damaging its resources for the future.\n\nThe optimum is not fixed. New technology (irrigation, high-yield seeds, desalination, trade) raises it; drought, soil erosion or war lowers it.\n\n**Two famous views**\n\n| Thinker | Big idea | Prediction |\n|---|---|---|\n| Thomas Malthus (1798) | Population grows *geometrically* (1, 2, 4, 8…) but food only *arithmetically* (1, 2, 3, 4…) | Population will outrun food until famine, disease or war 'check' it |\n| Ester Boserup (1965) | 'Necessity is the mother of invention' | Population pressure pushes people to invent better ways to farm, so food supply rises to meet demand |\n\nSo far, Boserup has looked closer to the truth at a global scale: the **Green Revolution** of the 1960s (high-yield crops, fertiliser, irrigation) let world food output grow faster than population. But Malthus still describes some local famines.\n\n**Is 'over-population' really about numbers?**\n\nMany geographers argue the bigger problem is **consumption**. An average person in the USA is responsible for roughly 14–15 tonnes of CO₂ a year; an average person in Niger, roughly 0.1 tonnes (around 2022) — over 100 times less. One extra person in a rich country can put more pressure on the planet than dozens in a poor one. Others reply that numbers still matter: more people means more total demand, even if each uses a little.\n\n> A fair answer: problems come from **numbers × consumption × technology** together, not from numbers alone.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of standard of living per person against population size. A hump-shaped curve rises to a peak at the optimum population; the left side is labelled under-population and the right side over-population. A dashed second curve with better technology peaks higher and further right."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><line x1="60" y1="250" x2="460" y2="250" stroke="#1f2937" stroke-width="2"/><line x1="60" y1="250" x2="60" y2="30" stroke="#1f2937" stroke-width="2"/><polygon points="460,250 450,245 450,255" fill="#1f2937"/><polygon points="60,30 55,40 65,40" fill="#1f2937"/><text x="260" y="275" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Population size (with fixed resources) →</text><text x="22" y="145" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="rotate(-90 22 145)">Standard of living per person →</text><path d="M70,230 C150,60 350,60 440,220" fill="none" stroke="#334155" stroke-width="3"/><path d="M70,228 C180,30 400,30 460,190" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="6 4"/><line x1="251" y1="101" x2="251" y2="250" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="251" cy="101" r="4" fill="#b91c1c"/><text x="251" y="118" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#b91c1c" font-weight="bold">Optimum</text><text x="251" y="132" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#b91c1c">population</text><rect x="100" y="205" width="125" height="38" fill="#bbf7d0" stroke="#334155" rx="4"/><text x="162.5" y="220" font-size="12" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">Under-population</text><text x="162.5" y="235" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">too few to use resources</text><rect x="270" y="205" width="140" height="38" fill="#fecaca" stroke="#334155" rx="4"/><text x="340" y="220" font-size="12" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">Over-population</text><text x="340" y="235" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">too many for resources</text><text x="300" y="58" font-size="11" text-anchor="start" font-family="sans-serif" fill="#334155">- - - with better technology:</text><text x="300" y="72" font-size="11" text-anchor="start" font-family="sans-serif" fill="#334155">optimum moves up and right</text></svg>`,
      diagramCaption:
        "The optimum population gives the highest standard of living per person. Better technology (dashed curve) raises the optimum, so the same number of people can go from 'over' to 'optimum'.",
      workedExamples: [
        {
          title: "Skills: carrying capacity",
          problem:
            "A farming valley grows 900 tonnes of grain a year. Each person needs about 0.25 tonnes of grain a year. The valley has 4,200 people. Is it over-populated, under-populated or near the optimum (in terms of food)?",
          steps: [
            "Work out how many people the food can support: carrying capacity = food produced ÷ food needed per person.",
            "    900 ÷ 0.25 = 3,600 people",
            "Compare with the actual population: 4,200 − 3,600 = 600 more people than the food supports.",
            "So, on food alone, the valley is over-populated by about 600 people — unless it can trade for food or raise yields with better technology (irrigation, better seeds).",
          ],
          answer: "Carrying capacity ≈ 3,600 people, so 4,200 people means the valley is over-populated by about 600 (in terms of food).",
          yourTurn: {
            question:
              "Your turn: an island produces 1,500 tonnes of grain a year and each person needs 0.3 tonnes a year. How many people can the island's food support? Give your answer as a whole number of people.",
            answer: { type: "number", value: 5000 },
            solution: "1,500 ÷ 0.3 = 5,000 people. If only 4,000 people live there, the island is below its carrying capacity — closer to under-populated for food.",
          },
        },
        {
          title: "Read the model: Malthus",
          problem:
            "Malthus imagined population doubling every 25 years while food rose by one 'unit' every 25 years. Starting from 1 unit of each, what happens after 100 years?",
          steps: [
            "100 years = 4 periods of 25 years.",
            "Population (doubling): 1 → 2 → 4 → 8 → 16 units.",
            "Food (adding 1): 1 → 2 → 3 → 4 → 5 units.",
            "After 100 years there are 16 units of people but only 5 units of food: Malthus's 'crisis point' was passed long before.",
            "Boserup's reply: people under pressure would invent ways to raise food output, so the food line would not stay straight.",
          ],
          answer: "Population 16 units, food 5 units — population has far outstripped food in Malthus's model.",
          yourTurn: {
            question: "Your turn: using the same model, how many units of population are there after 150 years?",
            answer: { type: "number", value: 64 },
            solution: "150 ÷ 25 = 6 periods. 1 → 2 → 4 → 8 → 16 → 32 → 64 units. (Food would be only 7 units.)",
          },
        },
      ],
      keyPoints: [
        "Over-/under-population compare **people** with **resources and technology** — not with land area.",
        "Optimum population = the highest standard of living per person.",
        "Carrying capacity = the most people an area can support sustainably.",
        "Malthus (1798): food can't keep up → checks. Boserup (1965): pressure → invention.",
        "Consumption matters: a rich-world person uses far more resources than a poor-world person.",
        "High density ≠ over-population (Singapore is dense but well supplied).",
      ],
      whyItWorks:
        "Think of a pizza shared out. With too few people, slices go to waste (under-population). With too many, everyone goes hungry (over-population). Somewhere in the middle, everyone gets a fair, full meal (optimum). Technology is like a bigger oven: it makes a bigger pizza, so more people can share it before anyone goes short. That is why the same number of people can be 'over-population' in one century and 'optimum' in the next.",
      strategies: ["Spot the misconception", "Use figures from the source", "Weigh both sides then judge", "Think at different scales"],
      thinkDeeper:
        "Singapore imports more than 90% of its food. Does that make it over-populated, or does trade simply stretch its carrying capacity? What could happen to a place like Singapore if global trade were cut off?",
    },
    // ------------------------------------------------------------------
    {
      id: "ageing-youthful",
      heading: "Ageing and youthful populations",
      discovery: {
        problem:
          "In Japan, adult nappies have been reported to outsell baby nappies. In Niger, about half of all people are children under 15. Both countries have a 'population problem' — but they are opposite problems. What would worry a finance minister in each country?",
        idea:
          "Japan's minister worries about **too few workers paying for too many pensions and hospital beds**. Niger's minister worries about **finding enough school places now and enough jobs later**. Both are about the balance between the **working-age** population (15–64) and the **dependants** (0–14 and 65+).",
      },
      body:
        "An **ageing population** has a rising share of people aged 65 and over, usually because birth rates are low and life expectancy is high. A **youthful population** has a large share aged under 15, usually because birth rates are high.\n\n| | Japan (ageing) | Niger (youthful) |\n|---|---|---|\n| Aged 65+ | about 29% (2024) | about 3% |\n| Aged 0–14 | about 11% | about half (49%) |\n| Fertility rate | about 1.2 children per woman (2023) | about 6 (early 2020s), among the world's highest |\n| Population trend | falling since about 2010 | could roughly double by about 2050 (UN projections) |\n\n**Ageing — problems**\n- **Pensions**: fewer workers pay taxes to fund more retirees.\n- **Healthcare and care homes**: older people need more medical care; costs rise.\n- **Shrinking workforce**: labour shortages; some rural Japanese villages are emptying.\n\n**Ageing — opportunities**: older people volunteer, look after grandchildren, and spend savings (the 'silver economy' — health care, travel, technology for the elderly).\n\n**Responses**: Japan has encouraged firms to employ people up to 65 and beyond, opened new work visas (from 2019) and is trialling robots in care homes. **Singapore** — where roughly 1 in 5 citizens is now 65+, heading for about 1 in 4 by 2030 — has raised the retirement and re-employment ages in steps (to 64 and 69 in 2026), uses CPF savings for retirement and healthcare, and builds HDB flats designed for older residents.\n\n**Youthful — problems**\n- **Schools and teachers** are stretched; class sizes can be very large.\n- **Healthcare** for mothers and babies is needed.\n- **Jobs**: millions of young people reach working age every year; if there is no work, unemployment and migration rise.\n- **Food and water** demand climbs quickly.\n\n**Youthful — opportunities**: a big future workforce. If young people are educated, healthy and employed, a country can enjoy a **demographic dividend** — fast economic growth when many workers support relatively few dependants. Nigeria (population over 220 million, 2024) has a huge young workforce and a booming tech and music scene in Lagos, but needs jobs to match.\n\n**Dependency ratio**\n\n    dependency ratio = (people aged 0–14 + people aged 65+) ÷ people aged 15–64 × 100\n\nA higher ratio means each worker supports more dependants.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stacked bar chart of age structure. Japan: 11 percent aged 0 to 14, 60 percent aged 15 to 64, 29 percent aged 65 and over, dependency ratio about 67. Niger: 49 percent aged 0 to 14, 48 percent aged 15 to 64, 3 percent aged 65 and over, dependency ratio about 108."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="22" font-size="13" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">Age structure (% of population, rounded)</text><text x="100" y="88" font-size="13" text-anchor="end" font-family="sans-serif" font-weight="bold" fill="#1f2937">Japan</text><rect x="110" y="66" width="33" height="34" fill="#bbf7d0" stroke="#334155"/><rect x="143" y="66" width="180" height="34" fill="#bae6fd" stroke="#334155"/><rect x="323" y="66" width="87" height="34" fill="#fecaca" stroke="#334155"/><text x="126.5" y="88" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">11%</text><text x="233" y="88" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">60%</text><text x="366.5" y="88" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">29%</text><text x="110" y="117" font-size="11" font-family="sans-serif" fill="#334155">Dependency ratio = (11 + 29) ÷ 60 × 100 ≈ 67</text><text x="100" y="158" font-size="13" text-anchor="end" font-family="sans-serif" font-weight="bold" fill="#1f2937">Niger</text><rect x="110" y="136" width="147" height="34" fill="#bbf7d0" stroke="#334155"/><rect x="257" y="136" width="144" height="34" fill="#bae6fd" stroke="#334155"/><rect x="401" y="136" width="9" height="34" fill="#fecaca" stroke="#334155"/><text x="183.5" y="158" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">49%</text><text x="329" y="158" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">48%</text><text x="415" y="158" font-size="11" font-family="sans-serif" fill="#1f2937">3%</text><text x="110" y="187" font-size="11" font-family="sans-serif" fill="#334155">Dependency ratio = (49 + 3) ÷ 48 × 100 ≈ 108</text><line x1="110" y1="200" x2="410" y2="200" stroke="#1f2937"/><line x1="110" y1="200" x2="110" y2="205" stroke="#1f2937"/><line x1="185" y1="200" x2="185" y2="205" stroke="#1f2937"/><line x1="260" y1="200" x2="260" y2="205" stroke="#1f2937"/><line x1="335" y1="200" x2="335" y2="205" stroke="#1f2937"/><line x1="410" y1="200" x2="410" y2="205" stroke="#1f2937"/><text x="110" y="217" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0%</text><text x="185" y="217" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">25%</text><text x="260" y="217" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">50%</text><text x="335" y="217" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">75%</text><text x="410" y="217" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">100%</text><rect x="70" y="240" width="14" height="14" fill="#bbf7d0" stroke="#334155"/><text x="90" y="252" font-size="11" font-family="sans-serif" fill="#1f2937">0–14 (young dependants)</text><rect x="235" y="240" width="14" height="14" fill="#bae6fd" stroke="#334155"/><text x="255" y="252" font-size="11" font-family="sans-serif" fill="#1f2937">15–64 (working age)</text><rect x="70" y="262" width="14" height="14" fill="#fecaca" stroke="#334155"/><text x="90" y="274" font-size="11" font-family="sans-serif" fill="#1f2937">65+ (elderly dependants)</text><text x="240" y="294" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">Approximate figures, early-to-mid 2020s, rounded to whole per cent</text></svg>`,
      diagramCaption:
        "Japan and Niger both have high dependency ratios — but Japan's dependants are mostly elderly, while Niger's are mostly children. Each bar is drawn exactly to the rounded percentages shown.",
      workedExamples: [
        {
          title: "Skills: dependency ratio (Japan)",
          problem:
            "Using the rounded figures for Japan (0–14: 11%, 15–64: 60%, 65+: 29%), calculate the dependency ratio to the nearest whole number.",
          steps: [
            "Add the two dependent groups: 11 + 29 = 40.",
            "Divide by the working-age group: {{40/60}} = 0.667 (to 3 d.p.).",
            "Multiply by 100: 0.667 × 100 ≈ 66.7.",
            "Round: about 67. That means roughly 67 dependants for every 100 people of working age — and most of them are elderly.",
          ],
          answer: "About 67 dependants per 100 working-age people.",
          yourTurn: {
            question:
              "Your turn: Niger's rounded figures are 0–14: 49%, 15–64: 48%, 65+: 3%. Calculate its dependency ratio to the nearest whole number.",
            answer: { type: "number", value: 108, tolerance: 1 },
            solution: "(49 + 3) ÷ 48 × 100 = 52 ÷ 48 × 100 ≈ 108.3, so about 108. More than one dependant for every working-age person — mostly children.",
          },
        },
        {
          title: "Model exam answer: 'Explain two problems of an ageing population.' [4 marks]",
          problem: "Build a full-mark answer using PEEL (Point, Evidence, Explain, Link) and a named example.",
          steps: [
            "Point 1: pensions. 'One problem is paying for pensions.'",
            "Evidence + explain: 'In Japan about 29% of people are 65 or over (2024), so fewer workers pay taxes to support more retired people, putting pressure on government budgets.'",
            "Point 2: healthcare. 'A second problem is rising healthcare and care costs.'",
            "Evidence + explain + link: 'Older people are more likely to have long-term illnesses, so demand for hospitals and care homes rises at the same time as the workforce that staffs and funds them shrinks.'",
          ],
          answer:
            "Two developed, explained problems (pensions; healthcare/care), each backed by a figure or named place — 2 marks per developed point.",
          yourTurn: {
            question:
              "Your turn: what term describes the boost to economic growth a country can get when a large share of its people are of working age and relatively few are dependants?",
            answer: { type: "text", accept: ["demographic dividend", "a demographic dividend", "the demographic dividend", "demographic bonus"] },
            solution: "This is the **demographic dividend** — but it only pays out if those young adults are educated, healthy and have jobs.",
          },
        },
      ],
      keyPoints: [
        "Ageing = rising share aged 65+ (low birth rate + long life expectancy). Youthful = large share under 15 (high birth rate).",
        "Japan: about 29% aged 65+ (2024) and a shrinking population. Niger: about half under 15.",
        "Ageing problems: pensions, healthcare, shrinking workforce. Youthful problems: schools, jobs, healthcare, food.",
        "Both have opportunities: the silver economy; the demographic dividend.",
        "Dependency ratio = (0–14 + 65+) ÷ 15–64 × 100.",
      ],
      whyItWorks:
        "A country's age structure is the 'memory' of its past birth and death rates. When birth rates stay low for decades (Japan, Singapore), each new generation is smaller than the one before, while better healthcare keeps older people alive longer — so the top of the population pyramid widens and the base narrows. When birth rates stay high (Niger), every year's batch of babies is bigger than the last, so the base keeps widening. Because people can't change their age, these patterns lock in for 60–80 years — which is why governments must plan decades ahead.",
      strategies: ["Use figures from the source", "Compare and contrast", "PEEL paragraph", "Social / economic / environmental (SEE)"],
      thinkDeeper:
        "Japan and Niger both have high dependency ratios (about 67 and 108), but which problem is easier to fix — a shortage of workers, or a shortage of jobs? Consider how long each solution takes to work.",
    },
    // ------------------------------------------------------------------
    {
      id: "population-policies",
      heading: "Population policies",
      discovery: {
        problem:
          "In the 1970s, Singapore's posters said 'Girl or boy, two is enough'. By 1987 the message had become 'Have three or more (if you can afford it)'. Since 2001, parents have been given a Baby Bonus. Why would a government completely reverse its message in about 15 years — and did paying parents work?",
        idea:
          "The 1970s policy worked *too* well. Fertility dropped below the **replacement level of about 2.1** in the mid-to-late 1970s and kept falling, threatening a future of too few workers and too many elderly. So Singapore switched from **anti-natalist** to **pro-natalist**. Yet even with cash, fertility has kept falling — to about 0.97 (2023). Money alone does not change family decisions easily.",
      },
      body:
        "A **population policy** is a government plan to change the size or structure of the population.\n\n- **Anti-natalist**: aims to *reduce* births (China's One-Child Policy; Singapore 1970s; India's family planning).\n- **Pro-natalist**: aims to *increase* births (Singapore since 1987; France; Japan).\n- **Immigration policy**: controls who can move in — often used to fill labour gaps.\n\n**Singapore: from 'Stop at Two' to the Baby Bonus**\n\n| Year | Resident TFR (approx.) | Policy |\n|---|---|---|\n| 1960 | 5.8 | high birth rate after the war |\n| 1970 | 3.1 | family planning; 'Stop at Two' in the 1970s |\n| 1980 | 1.8 | below replacement |\n| 1990 | 1.8 | 'Have Three or More (if you can afford it)' from 1987 |\n| 2000 | 1.6 | Baby Bonus from 2001 |\n| 2010 | 1.2 | more leave, childcare subsidies |\n| 2020 | 1.1 | |\n| 2023 | 0.97 | among the lowest in the world |\n\n'Stop at Two' used **disincentives** for third and later children — for example, higher hospital delivery fees and lower priority in primary-school registration. The pro-natalist era uses **incentives**: today the Baby Bonus includes a cash gift (about S$11,000 for each of the first two children and about S$13,000 from the third, for births from 2023), a Child Development Account with government top-ups, childcare subsidies, longer paternity leave and priority for HDB flats for families.\n\nBecause births are so low, Singapore also relies on **immigration**: roughly 3 in 10 people living in Singapore are non-residents (2024), and new citizens and PRs are taken in each year.\n\n**France** has one of Europe's longest-running pro-natalist policies: family allowances from the second child, tax cuts for bigger families, subsidised crèches and discounts for families with three or more children. Its TFR was about 2.0 around 2010 — among Europe's highest — though it has since fallen to about 1.6–1.7 (2023–24).\n\n**India** launched the world's first national family-planning programme in 1952. During the Emergency (1975–77) millions of people were sterilised, many under pressure — a backlash that made family planning unpopular for years. Fertility fell anyway as education spread: the state of **Kerala**, with high female literacy, reached replacement level by about 1990, and India's TFR is now about 2.0 (2019–21).\n\n**Why policies succeed or fail**\n- They work best when they **go with** social change (education for girls, healthcare, contraception) rather than against it.\n- Cash rarely outweighs the real costs of children: housing, school fees, long working hours and careers.\n- Coercion can cut births fast but damages trust and human rights.",
      diagram: `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of Singapore's resident total fertility rate from 1960 to 2023: 5.8 in 1960, 3.1 in 1970, 1.8 in 1980, 1.8 in 1990, 1.6 in 2000, 1.2 in 2010, 1.1 in 2020 and 0.97 in 2023, with a dashed replacement level line at 2.1, an anti-natalist Stop at Two band in the 1970s to 1986, and markers for Have Three or More in 1987 and the Baby Bonus in 2001."><rect x="0" y="0" width="480" height="290" fill="#ffffff"/><rect x="120" y="40" width="96" height="210" fill="#fecaca" fill-opacity="0.45"/><rect x="222" y="40" width="216" height="210" fill="#bbf7d0" fill-opacity="0.45"/><text x="168" y="54" font-size="11" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">Stop at Two</text><text x="168" y="67" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(anti-natalist)</text><line x1="222" y1="40" x2="222" y2="250" stroke="#15803d" stroke-width="1.5"/><text x="226" y="54" font-size="11" font-family="sans-serif" font-weight="bold" fill="#1f2937">1987: Have Three</text><text x="226" y="67" font-size="11" font-family="sans-serif" font-weight="bold" fill="#1f2937">or More</text><line x1="306" y1="88" x2="306" y2="250" stroke="#15803d" stroke-width="1.5"/><text x="310" y="100" font-size="11" font-family="sans-serif" font-weight="bold" fill="#1f2937">2001: Baby Bonus</text><text x="330" y="114" font-size="10" font-family="sans-serif" fill="#1f2937">(pro-natalist)</text><line x1="60" y1="250" x2="445" y2="250" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="250" x2="60" y2="40" stroke="#1f2937" stroke-width="1.5"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="54" y="254">0</text><text x="54" y="219">1</text><text x="54" y="184">2</text><text x="54" y="149">3</text><text x="54" y="114">4</text><text x="54" y="79">5</text><text x="54" y="44">6</text></g><g stroke="#1f2937"><line x1="56" y1="215" x2="60" y2="215"/><line x1="56" y1="180" x2="60" y2="180"/><line x1="56" y1="145" x2="60" y2="145"/><line x1="56" y1="110" x2="60" y2="110"/><line x1="56" y1="75" x2="60" y2="75"/><line x1="56" y1="40" x2="60" y2="40"/><line x1="60" y1="250" x2="60" y2="254"/><line x1="120" y1="250" x2="120" y2="254"/><line x1="180" y1="250" x2="180" y2="254"/><line x1="240" y1="250" x2="240" y2="254"/><line x1="300" y1="250" x2="300" y2="254"/><line x1="360" y1="250" x2="360" y2="254"/><line x1="420" y1="250" x2="420" y2="254"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="60" y="266">1960</text><text x="120" y="266">1970</text><text x="180" y="266">1980</text><text x="240" y="266">1990</text><text x="300" y="266">2000</text><text x="360" y="266">2010</text><text x="420" y="266">2020</text></g><text x="250" y="284" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Year</text><text x="18" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="rotate(-90 18 145)">TFR (children per woman)</text><line x1="60" y1="176.5" x2="445" y2="176.5" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="6 4"/><text x="440" y="170" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">Replacement level 2.1</text><polyline points="60,47 120,141.5 180,187 240,187 300,194 360,208 420,211.5 438,216" fill="none" stroke="#1d4ed8" stroke-width="2.5"/><g fill="#1d4ed8"><circle cx="60" cy="47" r="3.5"/><circle cx="120" cy="141.5" r="3.5"/><circle cx="180" cy="187" r="3.5"/><circle cx="240" cy="187" r="3.5"/><circle cx="300" cy="194" r="3.5"/><circle cx="360" cy="208" r="3.5"/><circle cx="420" cy="211.5" r="3.5"/><circle cx="438" cy="216" r="3.5"/></g><g font-size="10" font-family="sans-serif" fill="#1d4ed8"><text x="68" y="50">5.8</text><text x="126" y="138">3.1</text><text x="180" y="202" text-anchor="middle">1.8</text><text x="240" y="202" text-anchor="middle">1.8</text><text x="300" y="209" text-anchor="middle">1.6</text><text x="360" y="223" text-anchor="middle">1.2</text><text x="414" y="227" text-anchor="middle">1.1</text><text x="444" y="232" text-anchor="middle">0.97</text></g></svg>`,
      diagramCaption:
        "Singapore's resident total fertility rate (approximate values from the table). The anti-natalist push of the 1970s drove fertility below replacement; pro-natalist policies since 1987 have not brought it back up.",
      workedExamples: [
        {
          title: "Skills: percentage change",
          problem: "Singapore's TFR fell from about 3.1 in 1970 to about 1.8 in 1980. Calculate the percentage change to 1 decimal place.",
          steps: [
            "Percentage change = (new − old) ÷ old × 100.",
            "    (1.8 − 3.1) ÷ 3.1 × 100",
            "    = −1.3 ÷ 3.1 × 100",
            "    = −41.9%",
            "The negative sign shows a decrease: fertility fell by about 42% in a single decade — the 'Stop at Two' years.",
          ],
          answer: "−41.9% (a fall of about 42%).",
          yourTurn: {
            question:
              "Your turn: Singapore's TFR fell from about 1.6 in 2000 (when the Baby Bonus was about to start) to about 0.97 in 2023. By what percentage did it fall? Give the decrease as a positive number, to the nearest whole per cent.",
            answer: { type: "number", value: 39, tolerance: 0.5 },
            solution: "(1.6 − 0.97) ÷ 1.6 × 100 = 0.63 ÷ 1.6 × 100 = 39.4%, so a fall of about 39% — even with pro-natalist incentives in place.",
          },
        },
        {
          title: "Read the resource: classify the policy",
          problem:
            "Classify each measure: (a) parents receive a cash gift for every baby; (b) families with a third child pay higher hospital fees; (c) work passes are issued for nurses from overseas.",
          steps: [
            "Ask: is the government trying to raise births, lower births, or change who lives in the country?",
            "(a) Rewards having babies → **pro-natalist** (like Singapore's Baby Bonus).",
            "(b) Makes extra children more costly → **anti-natalist** (like Singapore's 1970s disincentives).",
            "(c) Brings in workers rather than changing births → **immigration policy**, filling a labour gap.",
          ],
          answer: "(a) pro-natalist; (b) anti-natalist; (c) immigration policy.",
          yourTurn: {
            question:
              "Your turn: a government gives tax cuts to families with three or more children and subsidises nurseries. What type of population policy is this (one hyphenated word)?",
            answer: { type: "text", accept: ["pro-natalist", "pronatalist", "pro natalist", "pro-natalist policy", "pronatalist policy", "pro-natal", "pronatal"] },
            solution: "It encourages people to have more children, so it is **pro-natalist** — like France's family policy.",
          },
        },
      ],
      keyPoints: [
        "Anti-natalist = reduce births; pro-natalist = increase births; immigration policy = control who moves in.",
        "Singapore: 'Stop at Two' (1970s) → 'Have Three or More (if you can afford it)' (1987) → Baby Bonus (2001).",
        "Singapore's resident TFR is about 0.97 (2023), far below the replacement level of about 2.1.",
        "France and India show that education, childcare and social change matter as much as rules or cash.",
        "Coercive policies can work fast but carry heavy human costs.",
      ],
      whyItWorks:
        "Families decide how many children to have by weighing benefits against costs. In farming societies without pensions, children are workers and old-age security, so families are large. As countries develop, children become expensive (school fees, housing, years of education) and women gain education and careers — so families shrink on their own. A policy that pushes the same way as these forces (Singapore's 1970s campaign) works quickly. A policy that pushes against them (a one-off cash gift against decades of costs) has only a small effect.",
      strategies: ["Use figures from the source", "Cause → process → effect", "Weigh both sides then judge", "Compare and contrast"],
      thinkDeeper:
        "If cash gifts don't raise birth rates much, what else might? Think about housing, working hours, the cost of tuition, and who does the childcare. Which would you try first in Singapore, and why?",
    },
    // ------------------------------------------------------------------
    {
      id: "china-one-child",
      heading: "China's One-Child Policy debate",
      discovery: {
        problem:
          "China's fertility rate fell from about 6 children per woman around 1970 to under 3 by 1979 — *before* the One-Child Policy began in 1980. Today China is paying families to have more children and its population is shrinking. So was the One-Child Policy necessary, a success, or a mistake?",
        idea:
          "That is exactly the debate. The policy **did** keep births low for 35 years, but much of the fall had already happened through a voluntary campaign. It also caused a **gender imbalance**, the **4-2-1 problem** and rapid **ageing** — and came with serious human-rights abuses. A good answer weighs all of this and reaches a supported judgement.",
      },
      body:
        "**Why?** By 1980 China had nearly 1 billion people. Leaders feared that rapid growth would block economic development and that there would not be enough food, jobs or housing.\n\n**How it worked (1979–2015; announced in 1979, rolled out nationwide in 1980)**\n- **Incentives** for one-child families: a 'one-child certificate' bringing cash bonuses, better housing and priority for school and healthcare.\n- **Penalties** for extra children: large fines, loss of benefits, and job loss for some government workers. Enforcement varied; in some areas there were forced abortions and sterilisations.\n- **Exceptions**: in many rural areas a second child was allowed if the first was a girl; many ethnic minorities could have more; later, couples who were both only children could have two.\n\n**Effects**\n\n| Effect | Evidence (approximate) |\n|---|---|\n| Slower growth | Government claimed about 400 million births prevented — disputed by many demographers |\n| Gender imbalance | Sex ratio at birth about 117 (2000 census) and 118 (2010 census) boys per 100 girls — some yearly estimates in the 2000s were around 120 (natural ≈ 105); around 35 million more males than females (2020 census) |\n| Ageing | about 15% aged 65+ (2024) and rising fast |\n| Shrinking population | fell in 2022 for the first time in about six decades, and again in 2023 and 2024; India overtook China as most populous in 2023 |\n\nThe gender imbalance came from a traditional **preference for sons** (sons carried the family name and cared for parents) combined with ultrasound scans and sex-selective abortion. Millions of men may never find a wife. Some children born outside the rules were never registered, so had no official identity.\n\nThe **4-2-1 problem**: four grandparents, two parents, one child. When the parents retire, a single child may have to support two parents and four grandparents — with no siblings to share the load.\n\n**U-turns**: two-child policy (2016) → three-child policy (2021), followed by childcare subsidies (in 2025 a national subsidy of about 3,600 yuan a year per child under three was announced). Births have stayed low: TFR is about 1.0–1.2 (early 2020s).\n\n**The debate**\n\n| For (it was justified) | Against (it was not) |\n|---|---|\n| Slowed growth when China was poor | Fertility was already falling under 'Later, Longer, Fewer' in the 1970s |\n| Eased pressure on food, water and jobs | Forced abortions and sterilisations; human-rights abuses |\n| Helped economic growth: more investment per child | Gender imbalance; unregistered children |\n| Only children got more education, especially girls in cities | 4-2-1 problem, fast ageing, shrinking workforce |\n| | Thailand and Kerala cut fertility sharply with voluntary policies |\n\n**Reaching a judgement**: decide your **criteria** (Did it meet its aim? At what cost? Was there a better alternative? Short or long term?), weigh the evidence, and state how far you agree — e.g. 'It succeeded in its narrow aim, but the human cost and long-term problems outweigh that, especially as voluntary methods were already working.'",
      diagram: `<svg viewBox="0 0 480 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The 4-2-1 family: four grandparents link down to two parents, who link down to one child. Below, a timeline: 1980 one-child policy begins; 2016 two-child policy; 2021 three-child policy; 2022 population starts to fall."><rect x="0" y="0" width="480" height="310" fill="#ffffff"/><text x="240" y="18" font-size="13" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">The 4-2-1 family</text><g stroke="#334155" stroke-width="2"><line x1="80" y1="56" x2="120" y2="104"/><line x1="160" y1="56" x2="120" y2="104"/><line x1="320" y1="56" x2="360" y2="104"/><line x1="400" y1="56" x2="360" y2="104"/><line x1="120" y1="126" x2="240" y2="169"/><line x1="360" y1="126" x2="240" y2="169"/></g><g stroke="#334155" stroke-width="1.5"><circle cx="80" cy="45" r="11" fill="#c7d2fe"/><circle cx="160" cy="45" r="11" fill="#c7d2fe"/><circle cx="320" cy="45" r="11" fill="#c7d2fe"/><circle cx="400" cy="45" r="11" fill="#c7d2fe"/><circle cx="120" cy="115" r="11" fill="#bae6fd"/><circle cx="360" cy="115" r="11" fill="#bae6fd"/><circle cx="240" cy="180" r="11" fill="#fecaca"/></g><text x="240" y="49" font-size="12" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">4 grandparents</text><text x="240" y="119" font-size="12" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">2 parents</text><text x="258" y="184" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1f2937">1 child</text><text x="240" y="214" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">One working adult may have to support 2 parents and 4 grandparents</text><line x1="40" y1="262" x2="440" y2="262" stroke="#1f2937" stroke-width="2"/><g stroke="#1f2937" stroke-width="2"><line x1="40" y1="256" x2="40" y2="268"/><line x1="360" y1="256" x2="360" y2="268"/><line x1="404" y1="256" x2="404" y2="268"/><line x1="413" y1="256" x2="413" y2="268"/></g><text x="40" y="282" font-size="11" font-family="sans-serif" fill="#1f2937">1980: one-child policy begins</text><text x="360" y="250" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">2016: two-child policy</text><text x="404" y="282" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">2021: three-child</text><text x="445" y="298" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">2022: population starts to fall</text><text x="40" y="240" font-size="10" font-family="sans-serif" fill="#334155">Timeline (to scale, 1980–2025)</text></svg>`,
      diagramCaption:
        "The 4-2-1 structure: after two generations of only children, one adult may be the only support for six older relatives. The timeline shows how quickly policy changed after 2015.",
      workedExamples: [
        {
          title: "Skills: sex ratio at birth",
          problem:
            "In one province, 11,800 boys and 10,000 girls were born in a year. Calculate the sex ratio at birth (boys per 100 girls) and comment on it.",
          steps: [
            "Sex ratio at birth = boys ÷ girls × 100.",
            "    11,800 ÷ 10,000 × 100 = 118",
            "Compare with nature: without interference, about 105 boys are born per 100 girls.",
            "118 is far above 105, which suggests sex-selective abortion linked to son preference under the One-Child Policy.",
          ],
          answer: "118 boys per 100 girls — well above the natural level of about 105.",
          yourTurn: {
            question:
              "Your turn: in another area, 23,400 boys and 20,000 girls were born. Calculate the sex ratio at birth, in boys per 100 girls.",
            answer: { type: "number", value: 117 },
            solution: "23,400 ÷ 20,000 × 100 = 117 boys per 100 girls — about the national level recorded by China's 2000 census, far above the natural 105.",
          },
        },
        {
          title: "Model exam answer: 'To what extent was China's One-Child Policy a success?' [6 marks]",
          problem: "Build the answer step by step: success → failure → judgement.",
          steps: [
            "Define success: 'If success means slowing population growth, the policy partly succeeded.'",
            "Case for, with evidence: 'Births stayed low for 35 years; the government claimed about 400 million births were prevented, easing pressure on food, jobs and housing while the economy grew.'",
            "Case against, with evidence: 'However, fertility had already fallen from about 6 to under 3 in the 1970s before the policy began. It caused a sex ratio at birth of around 118 boys per 100 girls by the 2010 census, the 4-2-1 problem, and forced abortions and sterilisations.'",
            "Long-term view: 'The policy also sped up ageing; China moved to two children in 2016 and three in 2021, and its population began to fall in 2022.'",
            "Judgement: 'Overall it was only a limited success: it met its narrow aim but at a very high human cost, and voluntary approaches like Thailand's suggest the same fall could have been reached more fairly.'",
          ],
          answer: "A balanced answer with evidence on both sides and a clear, justified conclusion (e.g. 'a limited success').",
          yourTurn: {
            question:
              "Your turn: in a 4-2-1 family, how many older relatives (parents plus grandparents) might the one child eventually have to support?",
            answer: { type: "number", value: 6 },
            solution: "2 parents + 4 grandparents = 6 older relatives, with no brothers or sisters to share the care.",
          },
        },
      ],
      keyPoints: [
        "One-Child Policy: 1979–2015 (announced 1979, nationwide 1980); two-child 2016; three-child 2021.",
        "Worked through incentives (certificates, bonuses) and penalties (fines, job loss); rural and minority exceptions.",
        "Effects: slower growth, a sex ratio at birth of about 118 boys per 100 girls (2010 census), the 4-2-1 problem, rapid ageing.",
        "China's population fell in 2022 for the first time in about six decades.",
        "A strong judgement sets criteria, weighs both sides with evidence, and says 'to what extent'.",
      ],
      whyItWorks:
        "Limiting each couple to one child does two things at once. First, it shrinks each new generation — so in time there are fewer workers and fewer future parents, and the population starts to fall even after rules are relaxed (this is called **population momentum** working in reverse). Second, when families can only have one child, any preference for a son becomes concentrated in that single birth — so where scans were available, more girls were aborted, pushing the sex ratio far above the natural 105. Both effects take decades to undo, which is why the U-turn to two and three children has not quickly raised births.",
      strategies: ["Weigh both sides then judge", "Use figures from the source", "Cause → process → effect", "PEEL paragraph"],
      thinkDeeper:
        "China and Singapore both cut births fast and are now both trying to raise them. What does this suggest about governments trying to 'fine-tune' population? Is there a lesson for countries like Niger today?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Over-population", back: "Too many people for the resources and technology of an area to support at a decent standard of living." },
      { front: "Under-population", back: "Too few people to make full use of an area's resources (often cited: Canada, Australia)." },
      { front: "Optimum population", back: "The population that gives the highest standard of living per person, given current resources and technology." },
      { front: "Carrying capacity", back: "The largest population an area can support sustainably without damaging its resources." },
      { front: "Malthus (1798)", back: "Population grows geometrically, food arithmetically → famine, disease and war act as 'checks'." },
      { front: "Boserup (1965)", back: "'Necessity is the mother of invention': population pressure leads to new technology that raises food supply." },
      { front: "Ageing population", back: "A rising proportion of people aged 65+, caused by low birth rates and long life expectancy (e.g. Japan, about 29% aged 65+ in 2024)." },
      { front: "Youthful population", back: "A large proportion of people under 15, caused by high birth rates (e.g. Niger, about half under 15)." },
      { front: "Dependency ratio", back: "(0–14 + 65+) ÷ 15–64 × 100 — the number of dependants per 100 people of working age." },
      { front: "Demographic dividend", back: "Faster economic growth when a large working-age population supports relatively few dependants — if there are jobs and education." },
      { front: "Pro-natalist policy", back: "A policy to increase the birth rate (e.g. Singapore's Baby Bonus, France's family allowances)." },
      { front: "Anti-natalist policy", back: "A policy to reduce the birth rate (e.g. China's One-Child Policy, Singapore's 1970s 'Stop at Two')." },
      { front: "Singapore's policy timeline", back: "'Stop at Two' (1970s) → 'Have Three or More (if you can afford it)' (1987) → Baby Bonus (2001)." },
      { front: "Replacement level fertility", back: "About 2.1 children per woman — the level needed to keep a population stable long term (ignoring migration)." },
      { front: "China's policy timeline", back: "One-Child Policy 1979–2015 (announced 1979, nationwide 1980) → two-child 2016 → three-child 2021; population fell in 2022." },
      { front: "4-2-1 problem", back: "Four grandparents, two parents, one child: a single child may have to support six older relatives." },
      { front: "Sex ratio at birth", back: "Boys born per 100 girls. Natural ≈ 105; China's was about 118 at the 2010 census (some yearly estimates in the 2000s were around 120)." },
      { front: "Silver economy", back: "Goods and services for older people (health care, leisure, assistive technology) — an opportunity of ageing." },
    ],
    mustKnow: [
      "Define over-, under- and optimum population using resources and technology.",
      "Explain why high density does not automatically mean over-population (Singapore).",
      "Compare Malthus's and Boserup's views and say which evidence supports each.",
      "Explain why consumption, not just numbers, matters to the 'over-population' debate.",
      "Describe the problems and opportunities of an ageing population, using Japan or Singapore.",
      "Describe the problems and opportunities of a youthful population, using Niger or Nigeria.",
      "Calculate a dependency ratio and a percentage change from data.",
      "Distinguish pro-natalist, anti-natalist and immigration policies, with examples.",
      "Outline Singapore's policy U-turn from 'Stop at Two' to the Baby Bonus, and its results.",
      "Explain how China's One-Child Policy worked, including incentives, penalties and exceptions.",
      "Explain the gender imbalance and the 4-2-1 problem.",
      "Write a balanced 'to what extent' answer on the One-Child Policy with a justified conclusion.",
    ],
    misconceptions: [
      { wrong: "A crowded country is over-populated.", right: "Over-population compares people with resources and technology. Singapore is very dense but well supplied." },
      { wrong: "A huge, empty country can't have population problems.", right: "Niger has a low density but limited water, poor soils and rapid growth, so it can still struggle to support its people." },
      { wrong: "More people always means more poverty.", right: "People are also workers and inventors. With education and jobs, a large young population can bring a demographic dividend." },
      { wrong: "The One-Child Policy caused China's whole fertility fall.", right: "Fertility had already fallen from about 6 to under 3 in the 1970s, before the policy began in 1980." },
      { wrong: "The One-Child Policy applied equally to every family in China.", right: "There were many exceptions: rural families whose first child was a girl, many ethnic minorities, and later couples who were both only children." },
      { wrong: "Paying people to have babies quickly raises the birth rate.", right: "Singapore's Baby Bonus since 2001 has not stopped TFR falling to about 0.97 (2023): costs of housing, education and careers matter more." },
      { wrong: "An ageing population only brings problems.", right: "Older people volunteer, care for grandchildren and spend money — the 'silver economy' is an opportunity." },
      { wrong: "Once China allowed three children, births would bounce back.", right: "Small families have become normal and children are expensive; births have stayed low and the population keeps falling." },
    ],
    examMistakes: [
      "Defining over-population as 'too many people' without mentioning resources or technology.",
      "Calculating the dependency ratio upside down (workers ÷ dependants) or forgetting to × 100.",
      "Giving the wrong dates: the One-Child Policy began in 1980 and was replaced by the two-child policy in 2016.",
      "Writing a one-sided answer to a 'to what extent' question, or giving no final judgement.",
      "Listing problems of ageing (pensions, healthcare) without explaining *why* they happen.",
      "Mixing up pro-natalist and anti-natalist, or calling Singapore's Baby Bonus anti-natalist.",
      "Using vague examples ('in some countries…') instead of named places and figures (Japan, about 29% aged 65+).",
      "Forgetting the minus sign or 'decrease' when giving a percentage change.",
    ],
    mnemonics: [
      { topic: "Malthus vs Boserup", device: "Malthus = Misery; Boserup = Brains", explanation: "Malthus predicted misery (famine, disease, war) as checks; Boserup said human brains invent solutions under pressure." },
      { topic: "Problems of an ageing population", device: "The 3 Ps: Pensions, Patients, fewer Producers", explanation: "More pensions to pay, more patients needing care, and fewer producers (workers) paying taxes." },
      { topic: "Problems of a youthful population", device: "SJF: Schools, Jobs, Food", explanation: "More school places now, more jobs later, and more food and water all the time." },
      { topic: "Policy types", device: "PRO = PROmote births; ANTI = against births", explanation: "Pro-natalist policies promote having children; anti-natalist policies discourage it. Natal = birth." },
    ],
    realWorld: [
      { title: "Singapore's Baby Bonus", detail: "Since 2001 parents of Singaporean children receive cash gifts and a Child Development Account with government top-ups — yet resident TFR was about 0.97 in 2023.", emoji: "👶" },
      { title: "Working longer in Singapore", detail: "Singapore has raised its retirement and re-employment ages in steps (to 64 and 69 in 2026) so older people can keep working as the population ages.", emoji: "🧓" },
      { title: "Japan's care robots", detail: "With about 29% of people aged 65+ (2024) and too few carers, Japan has trialled robots for lifting, reminders and companionship in care homes.", emoji: "🤖" },
      { title: "China's three-child policy", detail: "After the One-Child Policy (1980–2015), China moved to two children (2016) and three (2021). Its population still fell in 2022, 2023 and 2024.", emoji: "🇨🇳" },
      { title: "Niger's young population", detail: "About half of Niger's people are under 15 and fertility is about 6 children per woman (early 2020s) — schools and future jobs are the big challenge.", emoji: "🏫" },
      { title: "Kerala's quiet success", detail: "The Indian state of Kerala reached replacement-level fertility by about 1990 without coercion, mainly through girls' education and good healthcare.", emoji: "📚" },
    ],
    videos: [
      { title: "Over-population and under-population explained", channel: "Time for Geography", url: "https://www.youtube.com/results?search_query=time+for+geography+overpopulation+underpopulation+optimum" },
      { title: "China's One-Child Policy — causes and consequences", channel: "BBC Bitesize / search", url: "https://www.youtube.com/results?search_query=china+one+child+policy+geography+gcse" },
      { title: "Don't Panic — The Truth About Population", channel: "Gapminder (Hans Rosling)", url: "https://www.youtube.com/results?search_query=hans+rosling+dont+panic+truth+about+population" },
      { title: "Japan's ageing population", channel: "Search: ageing population Japan geography", url: "https://www.youtube.com/results?search_query=japan+ageing+population+geography" },
      { title: "Singapore's population policies: Stop at Two to Baby Bonus", channel: "Search: Singapore population policy", url: "https://www.youtube.com/results?search_query=singapore+stop+at+two+baby+bonus+population+policy" },
    ],
    formulas: [
      { name: "Over-population", formula: "When there are too many people for the resources and technology available to support a decent standard of living." },
      { name: "Under-population", formula: "When there are too few people to make full use of the resources available." },
      { name: "Optimum population", formula: "The population size that gives the highest standard of living per person." },
      { name: "Carrying capacity", formula: "The maximum population an area can support sustainably." },
      { name: "Dependency ratio", formula: "(people aged 0–14 + people aged 65+) ÷ people aged 15–64 × 100", note: "Japan ≈ 67, Niger ≈ 108 using rounded early-2020s figures." },
      { name: "Percentage change", formula: "(new − old) ÷ old × 100", note: "A negative answer is a decrease." },
      { name: "Sex ratio at birth", formula: "boys born ÷ girls born × 100", note: "Natural ≈ 105 boys per 100 girls." },
      { name: "Total fertility rate (TFR)", formula: "The average number of children a woman is expected to have in her lifetime.", note: "Singapore resident TFR ≈ 0.97 (2023)." },
      { name: "Replacement level fertility", formula: "About 2.1 children per woman — enough to replace parents, allowing for some children not surviving." },
      { name: "Pro-natalist policy", formula: "A government policy that encourages people to have more children." },
      { name: "Anti-natalist policy", formula: "A government policy that discourages people from having children." },
      { name: "Ageing population", formula: "A population with a rising proportion of people aged 65 and over." },
      { name: "Youthful population", formula: "A population with a large proportion of people aged under 15." },
      { name: "4-2-1 problem", formula: "Four grandparents and two parents depending on one only child." },
      { name: "Demographic dividend", formula: "The economic boost possible when the working-age share of the population is large." },
    ],
  },
};
