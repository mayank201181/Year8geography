import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "population-growth",
  title: "How Has the World's Population Grown?",
  strand: "Population",
  icon: "📈",
  summary: "It took all of human history to reach 1 billion — and just 11 years to add the eighth.",
  intro:
    "On 15 November 2022 the United Nations marked the 'Day of Eight Billion'. Yet in 1800 there were fewer than 1 billion of us. In this topic you will trace that explosion on the J-curve, measure growth with birth rates, death rates and the rate of natural increase, use the Demographic Transition Model to explain why countries grow at different speeds, and judge how far we can trust forecasts that the world will peak at about 10.3 billion in the 2080s.",
  guide: [
    // ---------------------------------------------------------------------
    {
      id: "growth-over-time",
      heading: "From 1 billion to 8 billion",
      discovery: {
        problem:
          "The world reached 1 billion people in about 1804. It reached 2 billion in 1927 — 123 years later. The jump from 7 billion to 8 billion took only 11 years (2011 to 2022). Each step adds the *same* 1 billion people. So why did the later steps happen so much faster? Make a guess before you read on.",
        idea:
          "Growth builds on itself, like compound interest. When there are 7 billion people, even a small growth rate adds a huge number of babies each year. And from the 1800s onwards death rates fell sharply — thanks to more food, clean water and medicine — while birth rates stayed high for a long time. More people surviving to have children of their own made the curve shoot upwards into a **J-shape**.",
      },
      body:
        "For most of human history, population grew extremely slowly. High birth rates were cancelled out by high death rates from famine, disease and war. Then, from roughly 1800, the line on the graph turns sharply upwards. Geographers call this shape the **J-curve**.\n\n| Population milestone | Year reached | Years since previous billion |\n|---|---|---|\n| 1 billion | about 1804 | — |\n| 2 billion | 1927 | 123 |\n| 3 billion | 1960 | 33 |\n| 4 billion | 1974 | 14 |\n| 5 billion | 1987 | 13 |\n| 6 billion | 1999 | 12 |\n| 7 billion | 2011 | 12 |\n| 8 billion | 15 Nov 2022 | 11 |\n\nNotice two things. The gap between milestones shrank dramatically from 123 years to about 12. But since the 1970s it has hardly shrunk at all — a clue that the *rate* of growth is now slowing, even though the *number* added each year is still large.\n\n**Doubling time** is the number of years a population takes to double. The world went from 1 billion to 2 billion in 123 years, but from 2 billion (1927) to 4 billion (1974) in just 47 years.\n\n**Why did growth explode?** Mainly because **death rates fell**, not because people suddenly had more children:\n\n- **Farming improvements** — the Agricultural Revolution in 18th-century Britain, and later the Green Revolution (high-yield rice and wheat from the 1960s), meant more food and fewer famines.\n- **Clean water and sanitation** — sewers and piped water cut deadly diseases such as cholera. London's great sewer network was built after the 'Great Stink' of 1858.\n- **Medicine** — vaccination (Edward Jenner's smallpox vaccine, 1796), and antibiotics (penicillin was discovered in 1928 and mass-produced from the 1940s).\n- **Better living standards** — better housing, nutrition and, later, education about hygiene.\n\nThe world's growth *rate* peaked at a little over 2% a year in the 1960s. Today it is below 1% a year, because birth rates have fallen in most countries. Growth continues partly because of **population momentum**: the large number of young people born in the past are now having children of their own, even if each family is smaller.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of world population from 1800 to 2030 drawn to scale through the milestones 1 billion in 1804, 2 billion in 1927, 3 billion in 1960, 4 billion in 1974, 5 billion in 1987, 6 billion in 1999, 7 billion in 2011 and 8 billion in 2022, forming a J-shaped curve"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="240" y="18" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">World population: the J-curve</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="216.7" x2="450" y2="216.7"/><line x1="60" y1="163.3" x2="450" y2="163.3"/><line x1="60" y1="110" x2="450" y2="110"/><line x1="60" y1="56.7" x2="450" y2="56.7"/></g><line x1="60" y1="270" x2="455" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="35" stroke="#1f2937" stroke-width="1.5"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="54" y="274">0</text><text x="54" y="220.7">2</text><text x="54" y="167.3">4</text><text x="54" y="114">6</text><text x="54" y="60.7">8</text></g><g stroke="#1f2937"><line x1="60" y1="270" x2="60" y2="275"/><line x1="144.8" y1="270" x2="144.8" y2="275"/><line x1="229.6" y1="270" x2="229.6" y2="275"/><line x1="314.3" y1="270" x2="314.3" y2="275"/><line x1="399.1" y1="270" x2="399.1" y2="275"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="60" y="288">1800</text><text x="144.8" y="288">1850</text><text x="229.6" y="288">1900</text><text x="314.3" y="288">1950</text><text x="399.1" y="288">2000</text></g><text x="255" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">Year</text><text x="18" y="155" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155" transform="rotate(-90 18 155)">Population (billions)</text><polyline points="66.8,243.3 275.3,216.7 331.3,190 355,163.3 377.1,136.7 397.4,110 417.8,83.3 436.4,56.7" fill="none" stroke="#1f2937" stroke-width="2.5"/><g fill="#c7d2fe" stroke="#1f2937" stroke-width="1.2"><circle cx="66.8" cy="243.3" r="4"/><circle cx="275.3" cy="216.7" r="4"/><circle cx="331.3" cy="190" r="4"/><circle cx="355" cy="163.3" r="4"/><circle cx="377.1" cy="136.7" r="4"/><circle cx="397.4" cy="110" r="4"/><circle cx="417.8" cy="83.3" r="4"/><circle cx="436.4" cy="56.7" r="4"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="72" y="236">1804</text><text x="281" y="221">1927</text><text x="337" y="194">1960</text><text x="361" y="167">1974</text><text x="383" y="140">1987</text><text x="403" y="114">1999</text><text x="424" y="87">2011</text><text x="442" y="61">2022</text></g><g font-size="11" font-family="sans-serif" fill="#334155" font-style="italic"><text x="170" y="205" text-anchor="middle">123 years for 1 bn → 2 bn</text><text x="300" y="70" text-anchor="middle">only 11–14 years</text><text x="300" y="84" text-anchor="middle">per extra billion</text><text x="300" y="98" text-anchor="middle">since 1960</text></g></svg>`,
      diagramCaption:
        "The J-curve, drawn to scale from the milestone years: 1 billion (about 1804), 2 (1927), 3 (1960), 4 (1974), 5 (1987), 6 (1999), 7 (2011), 8 (2022). The steeper the line, the faster the growth.",
      workedExamples: [
        {
          title: "Reading the resource: how long between milestones?",
          problem:
            "Using the milestone table, how many years did it take the world's population to double from 2 billion to 4 billion?",
          steps: [
            "Find the year for 2 billion: 1927.",
            "Find the year for 4 billion: 1974.",
            "Subtract: 1974 − 1927 = 47 years.",
            "Compare: the previous doubling (1 billion to 2 billion) took 123 years, so the doubling time had shrunk by more than half.",
          ],
          answer: "47 years — much faster than the 123 years for the previous doubling.",
          yourTurn: {
            question:
              "Your turn: how many years did it take the world's population to double from 4 billion to 8 billion? Give your answer in years.",
            answer: { type: "number", value: 48 },
            solution:
              "4 billion was reached in 1974 and 8 billion in 2022. 2022 − 1974 = 48 years — almost exactly the same as the previous doubling (47 years), which shows the growth *rate* has stopped speeding up.",
          },
        },
        {
          title: "Skills calculation: average growth per year",
          problem:
            "The world grew from 7 billion (2011) to 8 billion (2022). On average, how many people were added each year? Give your answer to the nearest million.",
          steps: [
            "Increase = 8 billion − 7 billion = 1 billion = 1,000,000,000 people.",
            "Time = 2022 − 2011 = 11 years.",
            "Average per year = 1,000,000,000 ÷ 11 ≈ 90,909,091.",
            "To the nearest million: about 91 million people a year — roughly fifteen times Singapore's population, every year.",
          ],
          answer: "About 91 million people per year.",
          yourTurn: {
            question:
              "Your turn: the world grew from 5 billion (1987) to 6 billion (1999). On average, how many million people were added each year? Give your answer to the nearest million.",
            answer: { type: "number", value: 83, tolerance: 1 },
            solution:
              "Time = 1999 − 1987 = 12 years. 1,000 million ÷ 12 ≈ 83.3, so about 83 million people a year.",
          },
        },
      ],
      keyPoints: [
        "World population reached 1 billion in about 1804, 2 billion in 1927 and 8 billion on 15 November 2022.",
        "Plotted on a graph, this growth makes a J-curve: slow for centuries, then very steep after about 1900.",
        "Growth exploded mainly because death rates fell (food, sanitation, medicine) while birth rates stayed high for decades.",
        "The time taken to add each extra billion fell from 123 years to about 12, but has barely shrunk since the 1970s.",
        "The growth rate peaked at just over 2% a year in the 1960s and is now below 1% a year.",
      ],
      whyItWorks:
        "Population grows like money earning interest: each year's increase is a percentage of an ever-bigger total. When death rates fell, many more children survived to adulthood and had children themselves, so the base kept getting larger. A steady 2% growth rate adds 20 million people a year to 1 billion, but 160 million a year to 8 billion. That is why the curve bends upwards into a J instead of rising in a straight line. Today birth rates are falling, so the percentage rate is shrinking — but because the base is so large, the world still adds tens of millions of people each year.",
      strategies: ["Use figures from the source", "TEA (Trend, Evidence, Anomaly)", "Cause → process → effect"],
      thinkDeeper:
        "The gap between milestones was 12 years (5 → 6 billion) and 11 years (7 → 8 billion), yet the world's growth rate fell by more than half between the 1960s and today. How can the gap stay almost the same while the rate falls? (Hint: 1% of 8 billion versus 2% of 3 billion.)",
    },
    // ---------------------------------------------------------------------
    {
      id: "birth-death-rates",
      heading: "Birth rates, death rates & natural increase",
      discovery: {
        problem:
          "Japan has about 124 million people; Niger has roughly 27 million. Yet each year Japan's population *shrinks* while Niger's grows by more than 3%. With no migration involved, what two numbers would you need to explain the difference?",
        idea:
          "You need the **birth rate** and the **death rate**. In 2023 Japan had about 6 births but about 13 deaths per 1,000 people, so it lost people. Niger has roughly 45 births but only about 9 deaths per 1,000, so it gains people fast. Comparing *rates per 1,000*, not raw totals, lets you compare countries of any size fairly.",
      },
      body:
        "Geographers measure population change using rates **per 1,000 people per year**, so that a huge country and a tiny one can be compared fairly.\n\n- **Birth rate** (crude birth rate): the number of live births per 1,000 people per year.\n- **Death rate** (crude death rate): the number of deaths per 1,000 people per year.\n- **Natural increase**: when the birth rate is *higher* than the death rate, so the population grows.\n- **Natural decrease**: when the death rate is *higher* than the birth rate, so the population shrinks (unless migrants arrive).\n\n**Rate of natural increase (RNI)** is the difference between the birth and death rates, turned into a percentage. Because the rates are per 1,000 and a percentage is per 100, you divide by 10:\n\n    RNI (%) = (birth rate − death rate) ÷ 10\n\n| Place (approx., early 2020s) | Birth rate (per 1,000) | Death rate (per 1,000) | RNI |\n|---|---|---|---|\n| Niger | about 45 | about 9 | about +3.6% |\n| World | about 17 | about 8 | about +0.9% |\n| UK | about 10 | about 9 | about +0.1% |\n| Japan (2023) | about 6 | about 13 | about −0.7% |\n\n**Natural change ignores migration.** The full picture is:\n\n    population change = (births − deaths) + (immigrants − emigrants)\n\nSingapore is a good example: its resident birth rate is low, but immigration keeps its total population growing.\n\n**Other key measures**\n\n- **Total fertility rate (TFR)**: the average number of children a woman would have in her lifetime. A TFR of about **2.1** is **replacement level** — just enough to replace both parents (the extra 0.1 allows for children who die young). The world's TFR was about 2.25 in 2024; Niger's is roughly 6; Singapore's resident TFR was just 0.97 in 2023.\n- **Life expectancy**: how many years a newborn baby can expect to live, on average. The world average is about 73 years (2024); Japan's is about 84.\n- **Infant mortality rate**: deaths of babies under one year old per 1,000 live births. Singapore's is about 2 — one of the lowest in the world. It is a powerful clue to a country's healthcare and development.\n\n**Doubling time shortcut (the Rule of 70):** doubling time (years) ≈ 70 ÷ growth rate (%). At about 3.6% a year, Niger's population would double in roughly 19 years.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of birth and death rates per 1000: Niger 45 and 9, World 17 and 8, UK 10 and 9, Japan 6 and 13, with rates of natural increase of plus 3.6, plus 0.9, plus 0.1 and minus 0.7 percent"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="240" y="18" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Birth and death rates (approx., early 2020s)</text><g stroke="#e5e7eb" stroke-width="1"><line x1="70" y1="216" x2="460" y2="216"/><line x1="70" y1="172" x2="460" y2="172"/><line x1="70" y1="128" x2="460" y2="128"/><line x1="70" y1="84" x2="460" y2="84"/><line x1="70" y1="40" x2="460" y2="40"/></g><line x1="70" y1="260" x2="460" y2="260" stroke="#1f2937" stroke-width="1.5"/><line x1="70" y1="260" x2="70" y2="35" stroke="#1f2937" stroke-width="1.5"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="64" y="264">0</text><text x="64" y="220">10</text><text x="64" y="176">20</text><text x="64" y="132">30</text><text x="64" y="88">40</text><text x="64" y="44">50</text></g><text x="20" y="150" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155" transform="rotate(-90 20 150)">Rate per 1,000 per year</text><g stroke="#1f2937" stroke-width="1"><rect x="90" y="62" width="30" height="198" fill="#c7d2fe"/><rect x="122" y="220.4" width="30" height="39.6" fill="#fecaca"/><rect x="185" y="185.2" width="30" height="74.8" fill="#c7d2fe"/><rect x="217" y="224.8" width="30" height="35.2" fill="#fecaca"/><rect x="280" y="216" width="30" height="44" fill="#c7d2fe"/><rect x="312" y="220.4" width="30" height="39.6" fill="#fecaca"/><rect x="375" y="233.6" width="30" height="26.4" fill="#c7d2fe"/><rect x="407" y="202.8" width="30" height="57.2" fill="#fecaca"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="105" y="57">45</text><text x="137" y="215">9</text><text x="200" y="180">17</text><text x="232" y="219">8</text><text x="295" y="211">10</text><text x="327" y="215">9</text><text x="390" y="228">6</text><text x="422" y="197">13</text></g><g font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="121" y="277">Niger</text><text x="216" y="277">World</text><text x="311" y="277">UK</text><text x="406" y="277">Japan (2023)</text></g><g font-size="12" font-family="sans-serif" fill="#334155" text-anchor="middle" font-weight="bold"><text x="121" y="297">RNI +3.6%</text><text x="216" y="297">RNI +0.9%</text><text x="311" y="297">RNI +0.1%</text><text x="406" y="297">RNI −0.7%</text></g><rect x="300" y="44" width="14" height="12" fill="#c7d2fe" stroke="#1f2937"/><text x="320" y="54" font-size="12" font-family="sans-serif" fill="#1f2937">Birth rate</text><rect x="300" y="64" width="14" height="12" fill="#fecaca" stroke="#1f2937"/><text x="320" y="74" font-size="12" font-family="sans-serif" fill="#1f2937">Death rate</text></svg>`,
      diagramCaption:
        "Birth rate (purple) and death rate (pink) per 1,000 people, drawn to scale from the table. The gap between the bars, divided by 10, gives the rate of natural increase. Japan's death bar is taller than its birth bar, so it has a natural decrease.",
      workedExamples: [
        {
          title: "Skills calculation: rate of natural increase",
          problem:
            "Country A has a birth rate of 32 per 1,000 and a death rate of 7 per 1,000. Calculate its rate of natural increase as a percentage.",
          steps: [
            "Write the formula: RNI (%) = (birth rate − death rate) ÷ 10.",
            "Subtract: 32 − 7 = 25 per 1,000. This is the natural increase per 1,000 people.",
            "Divide by 10 to turn 'per 1,000' into 'per 100' (a percentage): {{25/10}} = 2.5.",
            "Check it makes sense: 25 extra people for every 1,000 is the same as 2.5 extra for every 100, so 2.5%.",
          ],
          answer: "RNI = 2.5% (a natural increase).",
          yourTurn: {
            question:
              "Your turn: Country B has a birth rate of 24 per 1,000 and a death rate of 6 per 1,000. What is its rate of natural increase, in %?",
            answer: { type: "number", value: 1.8 },
            solution: "24 − 6 = 18 per 1,000. 18 ÷ 10 = 1.8%.",
          },
        },
        {
          title: "Skills calculation: natural decrease",
          problem:
            "In 2023 Japan had a birth rate of about 6 per 1,000 and a death rate of about 13 per 1,000. Calculate the rate of natural increase and say what it means.",
          steps: [
            "RNI (%) = (birth rate − death rate) ÷ 10.",
            "6 − 13 = −7 per 1,000. The answer is negative because more people died than were born.",
            "−7 ÷ 10 = −0.7%.",
            "A negative RNI is a **natural decrease**: without immigration, Japan's population shrinks by about 0.7% a year.",
          ],
          answer: "RNI ≈ −0.7%, a natural decrease.",
          yourTurn: {
            question:
              "Your turn: Country C has a birth rate of 9 per 1,000 and a death rate of 12 per 1,000. What is its rate of natural increase, in %? (Include a minus sign if it is a decrease.)",
            answer: { type: "number", value: -0.3 },
            solution:
              "9 − 12 = −3 per 1,000. −3 ÷ 10 = −0.3%. The death rate is higher, so this is a natural decrease.",
          },
        },
      ],
      keyPoints: [
        "Birth and death rates are measured per 1,000 people per year.",
        "Rate of natural increase (%) = (birth rate − death rate) ÷ 10; a negative answer is a natural decrease.",
        "Natural change ignores migration: total change = natural change + net migration.",
        "Replacement-level fertility is a TFR of about 2.1 children per woman.",
        "Life expectancy and infant mortality are strong clues to how developed a country's healthcare is.",
      ],
      whyItWorks:
        "Why divide by 10? A rate 'per 1,000' and a percentage ('per 100') measure the same thing on different scales. If 25 people are added for every 1,000, then for every 100 people there are 25 ÷ 10 = 2.5 extra — that is 2.5%. Why is replacement level 2.1 and not exactly 2? Two parents need two children to replace them, but not every child survives to have children of their own, so a little extra is needed. In countries where many children die young, replacement level is higher than 2.1.",
      strategies: ["Use figures from the source", "Show your working", "Spot the misconception"],
      thinkDeeper:
        "Singapore's resident TFR (0.97 in 2023) is far below replacement level, yet its total population has kept growing. Using the formula for total population change, explain how this is possible — and what would happen if migration stopped.",
    },
    // ---------------------------------------------------------------------
    {
      id: "demographic-transition",
      heading: "The Demographic Transition Model",
      discovery: {
        problem:
          "In 1750 England had high birth rates *and* high death rates, and its population grew slowly. Today it has low birth rates *and* low death rates, and it grows slowly again. But in between, England's population boomed. Sketch two lines — birth rate and death rate — over time. Which line must have fallen first to cause the boom?",
        idea:
          "The **death rate fell first**. Food, clean water and medicine improved before families decided to have fewer children, so for many decades births far outnumbered deaths. Later the birth rate fell too, and the gap closed. This journey — high/high, then a gap, then low/low — is the **Demographic Transition Model (DTM)**.",
      },
      body:
        "The **Demographic Transition Model** shows how birth rates, death rates and total population change as a country develops. It was first described in 1929 by the American demographer Warren Thompson and is based mainly on what happened in Europe and North America.\n\n| Stage | Birth rate | Death rate | Total population | Example (approx.) |\n|---|---|---|---|---|\n| 1 High stationary | High, fluctuating | High, fluctuating | Low, stable | No countries today; some isolated tribal groups |\n| 2 Early expanding | High | Falling rapidly | Rising fast | Niger is often placed here |\n| 3 Late expanding | Falling rapidly | Falling more slowly, then low | Still rising, but more slowly | India, Bangladesh (late stage 3) |\n| 4 Low stationary | Low, fluctuating | Low | High, stable | UK, USA |\n| 5 Declining | Very low, below death rate | Low, rising slightly | Slowly falling | Japan is the usual example; Italy and Germany are often suggested |\n\n**What drives each change?**\n\n- **Stage 1 → 2:** death rates fall thanks to better food supply, clean water, sanitation and vaccinations.\n- **Stage 2 → 3:** birth rates start to fall. Fewer babies die, so parents don't need as many; girls stay in school longer; contraception becomes available; people move to cities, where children are expensive rather than useful farm workers.\n- **Stage 3 → 4:** birth and death rates are both low. Women often have careers and start families later.\n- **Stage 4 → 5:** an ageing population means more deaths, while very low fertility means fewer births, so natural decrease begins.\n\nThe area between the two lines in stages 2 and 3 is the **natural increase** — the period when the population booms.\n\n**Limitations of the model**\n\n- It is based on Europe's experience; poorer countries today may not follow the same path or timescale.\n- It ignores **migration** — Singapore's population keeps growing despite very low fertility because of immigration.\n- Speed varies hugely: the UK took roughly 200 years to pass through stages 2 to 4, but South Korea did it in a few decades.\n- Government policy can force change (China's One-Child Policy, 1980–2015), and disease or war (such as HIV/AIDS in parts of southern Africa) can push death rates back up.\n- Stage 5 was added later, and nobody knows whether there is a stage 6.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Demographic Transition Model with five stages showing a birth rate line, a death rate line, the shaded natural increase between them in stages 2 and 3, and a dashed total population line rising then levelling and slightly falling"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><g stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"><line x1="130" y1="44" x2="130" y2="250"/><line x1="210" y1="44" x2="210" y2="250"/><line x1="290" y1="44" x2="290" y2="250"/><line x1="370" y1="44" x2="370" y2="250"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold"><text x="90" y="16">Stage 1</text><text x="170" y="16">Stage 2</text><text x="250" y="16">Stage 3</text><text x="330" y="16">Stage 4</text><text x="410" y="16">Stage 5</text></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="90" y="30">High</text><text x="90" y="42">stationary</text><text x="170" y="30">Early</text><text x="170" y="42">expanding</text><text x="250" y="30">Late</text><text x="250" y="42">expanding</text><text x="330" y="30">Low</text><text x="330" y="42">stationary</text><text x="410" y="30">Declining</text></g><polygon points="130,90 170,90 210,94 250,130 290,190 290,210 250,202 210,190 170,162 130,102" fill="#fecaca" opacity="0.8"/><text x="200" y="140" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">natural</text><text x="200" y="153" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">increase</text><line x1="50" y1="250" x2="450" y2="250" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="250" x2="50" y2="50" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="150" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155" transform="rotate(-90 20 150)">Birth / death rate per 1,000</text><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="46" y="254">0</text><text x="46" y="154">25</text><text x="46" y="54">50</text></g><polyline points="50,98 70,82 90,102 110,86 130,90 170,90 210,94 250,130 290,190 310,198 330,190 350,202 370,198 410,210 450,214" fill="none" stroke="#1d4ed8" stroke-width="2.5"/><polyline points="50,106 70,90 90,114 110,94 130,102 170,162 210,190 250,202 290,210 310,206 330,210 350,202 370,206 410,202 450,198" fill="none" stroke="#b91c1c" stroke-width="2.5"/><path d="M50 238 L130 236 C170 232 190 220 210 210 C250 186 270 160 290 148 C320 132 350 124 370 122 C400 121 430 124 450 128" fill="none" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="7 4"/><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle" font-style="italic"><text x="90" y="266">none today</text><text x="170" y="266">e.g. Niger</text><text x="250" y="266">India,</text><text x="250" y="278">Bangladesh</text><text x="330" y="266">UK, USA</text><text x="410" y="266">Japan</text></g><line x1="50" y1="300" x2="72" y2="300" stroke="#1d4ed8" stroke-width="2.5"/><text x="77" y="304" font-size="11" font-family="sans-serif" fill="#1f2937">Birth rate</text><line x1="145" y1="300" x2="167" y2="300" stroke="#b91c1c" stroke-width="2.5"/><text x="172" y="304" font-size="11" font-family="sans-serif" fill="#1f2937">Death rate</text><line x1="245" y1="300" x2="267" y2="300" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="7 4"/><text x="272" y="304" font-size="11" font-family="sans-serif" fill="#1f2937">Total population (not to scale)</text></svg>`,
      diagramCaption:
        "The Demographic Transition Model (schematic). The death rate (red) falls first in stage 2; the birth rate (blue) follows in stage 3. The shaded gap is natural increase, which makes the total population (dashed purple) climb. In stage 5 the birth rate dips below the death rate. Example countries are approximate and change over time.",
      workedExamples: [
        {
          title: "Reading the resource: which stage?",
          problem:
            "Country P has a birth rate of 41 per 1,000 and a death rate of 11 per 1,000. Twenty years ago its death rate was 22 per 1,000, while its birth rate has hardly changed. Which stage of the DTM is it in?",
          steps: [
            "Look at the birth rate first: 41 per 1,000 is high, and it has hardly changed.",
            "Now the death rate: it has halved, from 22 to 11 per 1,000 — it is falling rapidly.",
            "Match to the model: high birth rate + rapidly falling death rate = stage 2 (early expanding).",
            "Check with the RNI: (41 − 11) ÷ 10 = 3.0% a year — a very fast-growing population, typical of stage 2.",
          ],
          answer: "Stage 2 (early expanding).",
          yourTurn: {
            question:
              "Your turn: Country Q has a birth rate of 7 per 1,000 and a death rate of 11 per 1,000, and its total population is slowly falling. Which stage of the DTM is it in? (Give the stage number.)",
            answer: { type: "text", accept: ["5", "stage 5", "five", "stage five", "declining", "stage 5 declining", "declining stage", "stage 5 (declining)"] },
            solution:
              "The birth rate (7) is below the death rate (11), so there is a natural decrease of (7 − 11) ÷ 10 = −0.4% a year. A birth rate below the death rate with a slowly falling population is stage 5 (declining), like Japan.",
          },
        },
        {
          title: "Model exam answer: explain the fall in death rate",
          problem: "Explain why the death rate falls in stage 2 of the Demographic Transition Model. [3 marks]",
          steps: [
            "Use the command word: 'explain' means give reasons and say *how* each one lowers deaths — not just a list.",
            "Point 1 + development: 'Clean water and sanitation are introduced, which reduces waterborne diseases such as cholera, so fewer people die.'",
            "Point 2 + development: 'Vaccinations and basic healthcare, such as clinics, mean fewer babies and children die from infectious diseases, so infant mortality falls.'",
            "Point 3 + development: 'Better farming increases the food supply, so there are fewer famines and people are better nourished and more able to fight off illness.'",
          ],
          answer:
            "In stage 2, clean water and sanitation reduce diseases such as cholera, so fewer people die. Vaccinations and clinics cut deaths from infectious diseases, especially among babies and young children. Improvements in farming increase the food supply, so famines become rarer and people are better nourished. Together these make the death rate fall rapidly while the birth rate stays high.",
        },
      ],
      keyPoints: [
        "The DTM has five stages: high stationary, early expanding, late expanding, low stationary, declining.",
        "The death rate falls first (stage 2); the birth rate falls later (stage 3).",
        "The gap between the birth and death rate lines is natural increase — biggest in stages 2 and 3.",
        "Example countries (approximate): Niger stage 2, India/Bangladesh late stage 3, UK stage 4, Japan stage 5.",
        "Limitations: based on Europe, ignores migration, varies in speed, and policies or disease can disrupt it.",
      ],
      whyItWorks:
        "Death rates can fall quickly because one change — say, a clean water supply or a vaccination programme — saves lives straight away, whatever people believe. Birth rates fall more slowly because they depend on millions of family decisions shaped by culture, religion, education and economics. Parents need time, often a generation, to trust that their children will survive, to see the costs of raising children in a city, and for girls to gain education and careers. This *time lag* between the death rate falling and the birth rate falling is what creates the population boom in stages 2 and 3.",
      strategies: ["Sketch it", "Use the command word", "Apply a model to a new place", "Cause → process → effect"],
      thinkDeeper:
        "Singapore went from rapid growth in the 1950s–60s to a resident TFR below 1.0 in about 60 years — far faster than the UK. Suggest two reasons why countries that develop later might move through the DTM faster. Does this make the model more or less useful?",
    },
    // ---------------------------------------------------------------------
    {
      id: "future-population",
      heading: "Future population",
      discovery: {
        problem:
          "For 200 years the world's population has gone up and up. Yet the United Nations now expects the total to stop rising and start to fall before 2100. What would have to change for a growing world population to stop growing — and which parts of the world would stop first?",
        idea:
          "The world stops growing when global births fall to the level of global deaths. That is already happening country by country: more than 60 countries, including China, Japan, Germany and Russia, had already passed their population peak by 2024. The UN's *World Population Prospects 2024* projects a world peak of about **10.3 billion in the mid-2080s**, followed by a slight fall.",
      },
      body:
        "A **population projection** is a forecast of future population, based on assumptions about fertility, life expectancy and migration. The most widely used projections come from the United Nations' *World Population Prospects* (WPP). The 2024 edition projects:\n\n| Year | World population (UN WPP 2024, medium variant) |\n|---|---|\n| 2024 | about 8.2 billion |\n| 2050 | about 9.7 billion |\n| mid-2080s | peak of about 10.3 billion |\n| 2100 | about 10.2 billion |\n\n**Huge regional differences**\n\n- **Sub-Saharan Africa** is expected to provide most of the growth still to come. Fertility remains high (Niger's TFR is roughly 6) and the population is very young, so momentum is strong. Countries such as Nigeria, the Democratic Republic of the Congo and Ethiopia are projected to grow substantially.\n- **South Asia** is still growing, but more slowly. India overtook China as the world's most populous country in 2023 (UN estimate), although India's TFR has now fallen to about replacement level.\n- **East Asia** is shrinking or close to it. China's population fell in 2022 for the first time in about six decades. South Korea's TFR was about 0.72 in 2023 — the lowest in the world — and Japan's about 1.2.\n- **Europe** has low fertility and many countries are already shrinking without immigration.\n- **Singapore** has a resident TFR of 0.97 (2023), so it relies on immigration to keep its population and workforce stable.\n\n**Why projections are uncertain**\n\n- **Fertility assumptions matter most.** The UN also publishes high and low variants that assume about half a child more or fewer per woman; by 2100 the gap between them is several billion people.\n- Projections are revised as new data arrive: the UN's 2022 edition projected a slightly higher peak (about 10.4 billion) than the 2024 one.\n- Other researchers disagree. A 2020 study in *The Lancet* by the Institute for Health Metrics and Evaluation (IHME) projected an earlier, lower peak of about 9.7 billion in the 2060s, because it assumed fertility would fall faster as girls' education and access to contraception improve.\n- Unexpected events — pandemics, wars, new government policies, or changes in migration — can all shift the numbers.\n\nSo a projection is not a prediction of certain fact: it is 'what will happen *if* these assumptions hold'.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of world population: actual milestones from 3 billion in 1960 to 8 billion in 2022, then a dashed UN 2024 projection to 9.7 billion in 2050, a peak of about 10.3 billion in the mid-2080s and 10.2 billion in 2100, with an illustrative widening uncertainty band"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="250" y="18" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">World population: past and UN projection (WPP 2024)</text><g stroke="#e5e7eb" stroke-width="1"><line x1="60" y1="230" x2="455" y2="230"/><line x1="60" y1="190" x2="455" y2="190"/><line x1="60" y1="150" x2="455" y2="150"/><line x1="60" y1="110" x2="455" y2="110"/><line x1="60" y1="70" x2="455" y2="70"/><line x1="60" y1="30" x2="455" y2="30"/></g><polygon points="247.2,110 320,64 411,40 450,30 450,102 411,90 320,88" fill="#c7d2fe" opacity="0.6"/><line x1="60" y1="270" x2="455" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="28" stroke="#1f2937" stroke-width="1.5"/><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end"><text x="54" y="274">0</text><text x="54" y="234">2</text><text x="54" y="194">4</text><text x="54" y="154">6</text><text x="54" y="114">8</text><text x="54" y="74">10</text><text x="54" y="34">12</text></g><g stroke="#1f2937"><line x1="60" y1="270" x2="60" y2="275"/><line x1="190" y1="270" x2="190" y2="275"/><line x1="320" y1="270" x2="320" y2="275"/><line x1="450" y1="270" x2="450" y2="275"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="60" y="288">1950</text><text x="190" y="288">2000</text><text x="320" y="288">2050</text><text x="450" y="288">2100</text></g><text x="255" y="306" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">Year</text><text x="18" y="150" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155" transform="rotate(-90 18 150)">Population (billions)</text><line x1="247.2" y1="28" x2="247.2" y2="270" stroke="#94a3b8" stroke-dasharray="3 3"/><text x="243" y="262" font-size="11" font-family="sans-serif" fill="#334155" text-anchor="end">actual</text><text x="252" y="262" font-size="11" font-family="sans-serif" fill="#334155">projected</text><polyline points="86,210 122.4,190 156.2,170 187.4,150 218.6,130 247.2,110" fill="none" stroke="#1f2937" stroke-width="2.5"/><polyline points="247.2,110 320,76 411,64 450,66" fill="none" stroke="#1f2937" stroke-width="2.5" stroke-dasharray="7 4"/><g fill="#1f2937"><circle cx="86" cy="210" r="3.5"/><circle cx="122.4" cy="190" r="3.5"/><circle cx="156.2" cy="170" r="3.5"/><circle cx="187.4" cy="150" r="3.5"/><circle cx="218.6" cy="130" r="3.5"/><circle cx="247.2" cy="110" r="3.5"/></g><g fill="#ffffff" stroke="#1f2937" stroke-width="1.5"><circle cx="320" cy="76" r="4"/><circle cx="411" cy="64" r="4"/><circle cx="450" cy="66" r="4"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="92" y="214">3 bn (1960)</text><text x="222" y="104" text-anchor="end">8 bn (2022)</text><text x="324" y="104">9.7 bn (2050)</text><text x="405" y="50" text-anchor="end">peak ≈ 10.3 bn (mid-2080s)</text><text x="444" y="124" text-anchor="end">10.2 bn (2100)</text></g><text x="352" y="166" font-size="11" font-family="sans-serif" fill="#334155" font-style="italic" text-anchor="middle">shaded band: uncertainty</text><text x="352" y="179" font-size="11" font-family="sans-serif" fill="#334155" font-style="italic" text-anchor="middle">grows with time (illustrative)</text></svg>`,
      diagramCaption:
        "Solid line: actual milestones (3 billion in 1960 to 8 billion in 2022). Dashed line: UN WPP 2024 medium projection — about 9.7 billion in 2050, a peak of about 10.3 billion in the mid-2080s and about 10.2 billion in 2100. The shaded band is illustrative: the further ahead we look, the less certain the forecast.",
      workedExamples: [
        {
          title: "Skills calculation: percentage increase",
          problem:
            "The world reached 8 billion in 2022. The UN projects a peak of about 10.3 billion in the mid-2080s. By what percentage is the population projected to grow from 8 billion to the peak? Give your answer to the nearest whole number.",
          steps: [
            "Percentage change = (new − old) ÷ old × 100.",
            "Increase = 10.3 − 8 = 2.3 billion.",
            "{{2.3/8}} = 0.2875.",
            "0.2875 × 100 = 28.75%, which rounds to 29%.",
            "Interpret: the world will grow by less than a third more — very different from the 700% growth between 1804 and 2022.",
          ],
          answer: "About 29% growth from 8 billion to the projected peak.",
          yourTurn: {
            question:
              "Your turn: the UN projects about 9.7 billion people in 2050. What is the percentage increase from 8.0 billion in 2022 to 9.7 billion in 2050? Give your answer to the nearest whole number, in %.",
            answer: { type: "number", value: 21 },
            solution:
              "Increase = 9.7 − 8.0 = 1.7 billion. 1.7 ÷ 8.0 = 0.2125. × 100 = 21.25%, so about 21%. (Common slip: dividing by 9.7 instead of the starting value 8.0.)",
          },
        },
        {
          title: "Model exam answer: why projections are uncertain",
          problem: "Suggest two reasons why projections of world population in 2100 may turn out to be wrong. [4 marks]",
          steps: [
            "Command word 'suggest': give sensible reasons and develop each one — two reasons × (point + development) = 4 marks.",
            "Reason 1 (point): 'Projections depend on assumptions about future fertility rates.'",
            "Reason 1 (development + evidence): 'If birth rates in sub-Saharan Africa fall faster than expected — for example because more girls stay in school — the peak will be lower. A 2020 IHME study suggested a peak of only about 9.7 billion in the 2060s, compared with the UN's 10.3 billion in the 2080s.'",
            "Reason 2 (point): 'Unexpected events can change death rates or migration.'",
            "Reason 2 (development): 'A severe pandemic or war could raise death rates, while new pro-natalist policies, like those tried in Singapore, could raise birth rates, so the real total could be higher or lower.'",
          ],
          answer:
            "Projections rely on assumptions about future fertility. If birth rates in sub-Saharan Africa fall faster than the UN expects, for example because more girls stay in education and contraception becomes more widely available, the population will peak lower and earlier — an IHME study in 2020 suggested about 9.7 billion in the 2060s rather than the UN's 10.3 billion in the 2080s. Secondly, unexpected events such as pandemics or wars could raise death rates, and new government policies could change birth rates, so the actual population in 2100 could be quite different from the forecast.",
        },
      ],
      keyPoints: [
        "UN WPP 2024 projects about 9.7 billion people in 2050 and a peak of about 10.3 billion in the mid-2080s.",
        "Most future growth is expected in sub-Saharan Africa; East Asia and Europe are shrinking or close to it.",
        "India overtook China as the most populous country in 2023; China's population fell in 2022.",
        "Projections depend mainly on fertility assumptions, so they carry uncertainty that grows the further ahead you look.",
        "Different organisations (UN, IHME) produce different projections because they use different assumptions.",
      ],
      whyItWorks:
        "Why will growth continue for decades even though fertility is falling almost everywhere? Because of **population momentum**. A youthful population — like Niger's or Nigeria's — has huge numbers of children who have not yet reached parenthood. Even if each of them has fewer children than their parents did, there are so many future parents that the total number of births stays high for another generation or two. Growth only stops once these large young generations have aged, and births fall to the level of deaths. That is why the world's peak is still about 60 years away, even though global TFR (about 2.25 in 2024) is already close to replacement level.",
      strategies: ["Use figures from the source", "Think at different scales", "Weigh both sides then judge", "Use the command word"],
      thinkDeeper:
        "Is a world population that peaks and then slowly falls good news or bad news? Consider it at different scales — for the planet's resources, for a country like Japan or Singapore with an ageing population, and for a youthful country like Niger. Reach a judgement.",
    },
  ],
  // -----------------------------------------------------------------------
  learn: {
    flashcards: [
      { front: "When did the world's population reach 1 billion?", back: "In about 1804." },
      { front: "When did the world's population reach 8 billion?", back: "15 November 2022 (the UN's 'Day of Eight Billion')." },
      { front: "World population milestones 2–7 billion", back: "2 bn 1927 · 3 bn 1960 · 4 bn 1974 · 5 bn 1987 · 6 bn 1999 · 7 bn 2011." },
      { front: "What is the J-curve?", back: "The shape of the world population graph: very slow growth for centuries, then a steep rise from about 1900." },
      { front: "Birth rate", back: "The number of live births per 1,000 people per year." },
      { front: "Death rate", back: "The number of deaths per 1,000 people per year." },
      { front: "Rate of natural increase (%) — formula", back: "(birth rate − death rate) ÷ 10." },
      { front: "Natural decrease", back: "When the death rate is higher than the birth rate, so the population falls (ignoring migration)." },
      { front: "Total fertility rate (TFR)", back: "The average number of children a woman would have during her lifetime." },
      { front: "Replacement-level fertility", back: "A TFR of about 2.1 — enough children to replace both parents." },
      { front: "Infant mortality rate", back: "Deaths of babies under 1 year old per 1,000 live births." },
      { front: "Life expectancy", back: "The average number of years a newborn baby can expect to live." },
      { front: "Main reason population exploded after 1800", back: "Death rates fell (more food, clean water, sanitation, vaccines, antibiotics) while birth rates stayed high." },
      { front: "The five stages of the DTM", back: "1 High stationary · 2 Early expanding · 3 Late expanding · 4 Low stationary · 5 Declining." },
      { front: "Which falls first in the DTM — birth rate or death rate?", back: "The death rate (stage 2). The birth rate falls later (stage 3)." },
      { front: "An example country for DTM stage 5", back: "Japan (birth rate about 6, death rate about 13 per 1,000 in 2023)." },
      { front: "UN WPP 2024 projected peak", back: "About 10.3 billion people in the mid-2080s, then about 10.2 billion by 2100." },
      { front: "Population momentum", back: "Continued growth caused by a large number of young people reaching parenthood, even when each family is smaller." },
      { front: "Rule of 70", back: "Doubling time (years) ≈ 70 ÷ growth rate (%)." },
    ],
    mustKnow: [
      "Can you quote the milestone years from 1 billion (about 1804) to 8 billion (2022)?",
      "Can you draw and describe the J-curve, using figures?",
      "Can you explain why world population grew so fast after 1800, linking each cause to falling death rates?",
      "Can you define birth rate, death rate, natural increase and natural decrease, with units (per 1,000 per year)?",
      "Can you calculate the rate of natural increase as a percentage, including a negative answer?",
      "Can you define total fertility rate and explain why replacement level is about 2.1?",
      "Can you define life expectancy and infant mortality rate, and say what they reveal about a country?",
      "Can you draw the DTM, labelling all five stages, both lines, natural increase and total population?",
      "Can you place a country in a DTM stage from its birth and death rate data, and justify your choice?",
      "Can you give at least three limitations of the DTM?",
      "Can you quote the UN WPP 2024 projection (about 9.7 billion in 2050, peak about 10.3 billion in the mid-2080s)?",
      "Can you explain why projections are uncertain and why growth continues despite falling fertility (momentum)?",
    ],
    misconceptions: [
      {
        wrong: "World population grew because people started having more babies.",
        right: "It grew mainly because death rates fell. Birth rates stayed high for a while, so the gap between births and deaths widened.",
      },
      {
        wrong: "The world's population is growing faster than ever.",
        right: "The growth *rate* peaked at just over 2% a year in the 1960s and is now below 1%. The number added each year is still large because the base is so big.",
      },
      {
        wrong: "A birth rate of 20 per 1,000 means a growth rate of 20%.",
        right: "Rates are per 1,000, not per 100. You subtract the death rate and divide by 10: a birth rate of 20 and death rate of 10 give an RNI of 1%.",
      },
      {
        wrong: "If a country's birth rate is below its death rate, its population must be falling.",
        right: "Only natural change is negative. Immigration can still make the total grow — as in Singapore.",
      },
      {
        wrong: "A TFR of 2.0 means the population will stay exactly the same.",
        right: "Replacement level is about 2.1, because not every child survives to adulthood. Population momentum and migration also affect the total for decades.",
      },
      {
        wrong: "Every country must pass through the DTM in the same way and at the same speed.",
        right: "The DTM is based on Europe's experience. South Korea and Singapore moved through it in a few decades; migration, policy and disease can all change the path.",
      },
      {
        wrong: "The world's population will keep rising for ever.",
        right: "The UN projects a peak of about 10.3 billion in the mid-2080s, and more than 60 countries had already passed their peak by 2024.",
      },
      {
        wrong: "A UN projection is a fact about the future.",
        right: "It is a forecast based on assumptions about fertility, mortality and migration. Different assumptions give different answers.",
      },
    ],
    examMistakes: [
      "Forgetting to divide by 10 when calculating the rate of natural increase (writing 25% instead of 2.5%).",
      "Subtracting the wrong way round (death rate − birth rate) and getting the sign wrong.",
      "Leaving out units: birth and death rates are 'per 1,000 per year'; RNI is a percentage.",
      "Describing the J-curve without quoting any figures or years from the graph.",
      "Saying the death rate and birth rate fall at the same time in the DTM — the death rate falls first.",
      "Mixing up stage 2 (death rate falling fast) and stage 3 (birth rate falling fast).",
      "Listing reasons for population growth ('medicine, food') without explaining how each one lowers the death rate.",
      "Dividing by the new value instead of the original value when calculating percentage change.",
      "Writing UN projections as certainties ('the population *will* be 10.3 billion') instead of 'is projected to be about'.",
    ],
    mnemonics: [
      {
        topic: "The five DTM stages in order",
        device: "Happy Elephants Love Lazy Days",
        explanation: "High stationary → Early expanding → Late expanding → Low stationary → Declining.",
      },
      {
        topic: "Rate of natural increase",
        device: "Births minus Deaths, then Drop a zero (÷ 10)",
        explanation: "Subtract the death rate from the birth rate (per 1,000), then divide by 10 to get a percentage.",
      },
      {
        topic: "Which DTM line moves first",
        device: "Death Departs first, Births Behind",
        explanation: "The death rate falls first (stage 2); the birth rate falls behind it (stage 3), creating the population boom in between.",
      },
      {
        topic: "Early milestones",
        device: "1-2-3 billion: 1804, 1927, 1960",
        explanation: "Chant it like a phone number: 'one-eight-oh-four, nineteen-twenty-seven, nineteen-sixty'. After 3 billion, a new billion arrived roughly every 11–14 years.",
      },
    ],
    realWorld: [
      {
        title: "Singapore: from 'Stop at Two' to the Baby Bonus",
        detail:
          "In the 1970s Singapore's 'Stop at Two' campaign encouraged smaller families. By 1987 the message had changed to 'Have Three or More (if you can afford it)', and the Baby Bonus followed in 2001. Even so, the resident TFR fell to 0.97 in 2023, and immigration now helps keep the population (about 6.0 million in 2024) growing.",
        emoji: "🇸🇬",
      },
      {
        title: "The Day of Eight Billion",
        detail:
          "The UN marked 15 November 2022 as the day the world reached 8 billion people — only 11 years after 7 billion in 2011.",
        emoji: "🌍",
      },
      {
        title: "Japan's shrinking population",
        detail:
          "In 2023 Japan recorded about 6 births and about 13 deaths per 1,000 people — a natural decrease of roughly 0.7%. It is the textbook example of DTM stage 5.",
        emoji: "🇯🇵",
      },
      {
        title: "Niger: one of the world's fastest-growing countries",
        detail:
          "With a TFR of roughly 6 children per woman and a very young population, Niger grows by over 3% a year — fast enough to double in about 20 years.",
        emoji: "🌍",
      },
      {
        title: "India overtakes China",
        detail:
          "The UN estimates that India became the world's most populous country in 2023. China's population fell in 2022 for the first time in about six decades.",
        emoji: "📊",
      },
      {
        title: "South Korea's record-low fertility",
        detail:
          "South Korea's TFR was about 0.72 in 2023, the lowest in the world — a sign of how fast East Asia has moved through the DTM.",
        emoji: "🇰🇷",
      },
    ],
    videos: [
      {
        title: "Human Population Through Time",
        channel: "American Museum of Natural History",
        url: "https://www.youtube.com/results?search_query=human+population+through+time+american+museum+of+natural+history",
      },
      {
        title: "The Demographic Transition Model explained",
        channel: "Time for Geography",
        url: "https://www.youtube.com/results?search_query=demographic+transition+model+explained+geography",
      },
      {
        title: "Don't Panic — Hans Rosling on world population",
        channel: "Gapminder / BBC",
        url: "https://www.youtube.com/results?search_query=hans+rosling+don%27t+panic+world+population",
      },
      {
        title: "Overpopulation – The Human Explosion Explained",
        channel: "Kurzgesagt – In a Nutshell",
        url: "https://www.youtube.com/results?search_query=kurzgesagt+overpopulation+human+explosion+explained",
      },
    ],
    formulas: [
      { name: "Birth rate (crude birth rate)", formula: "Live births per 1,000 people per year = births ÷ population × 1,000." },
      { name: "Death rate (crude death rate)", formula: "Deaths per 1,000 people per year = deaths ÷ population × 1,000." },
      { name: "Rate of natural increase (RNI)", formula: "RNI (%) = (birth rate − death rate) ÷ 10.", note: "A negative answer is a natural decrease." },
      { name: "Natural increase", formula: "When the birth rate is higher than the death rate, so the population grows (ignoring migration)." },
      { name: "Natural decrease", formula: "When the death rate is higher than the birth rate, so the population shrinks (ignoring migration)." },
      { name: "Population change", formula: "Population change = (births − deaths) + (immigrants − emigrants)." },
      { name: "Net migration", formula: "Immigrants − emigrants." },
      { name: "Total fertility rate (TFR)", formula: "The average number of children a woman would have in her lifetime." },
      { name: "Replacement-level fertility", formula: "A TFR of about 2.1 children per woman." },
      { name: "Life expectancy", formula: "The average number of years a newborn baby can expect to live." },
      { name: "Infant mortality rate", formula: "Deaths of babies under 1 year old per 1,000 live births per year." },
      { name: "Doubling time (Rule of 70)", formula: "Doubling time (years) ≈ 70 ÷ growth rate (%).", note: "At 2% a year, a population doubles in about 35 years." },
      { name: "Percentage change", formula: "(new − old) ÷ old × 100." },
      { name: "J-curve", formula: "The J-shaped graph of world population: slow growth for centuries, then a very steep rise." },
      { name: "Demographic Transition Model (DTM)", formula: "A model showing how birth rate, death rate and total population change in five stages as a country develops." },
      { name: "Population momentum", formula: "Continued growth because many young people are reaching child-bearing age, even when fertility is falling." },
      { name: "Population projection", formula: "A forecast of future population based on assumptions about fertility, mortality and migration (UN WPP 2024: peak about 10.3 billion in the mid-2080s)." },
    ],
  },
};
