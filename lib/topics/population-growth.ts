import type { Topic } from "../types";

export const populationGrowth: Topic = {
  id: "population-growth",
  title: "How the World Grew to 8 Billion",
  subject: "8 Billion++",
  icon: "📈",
  summary: "Birth rates, death rates and the population explosion.",
  intro:
    "For almost all of human history there were fewer people on Earth than live in Singapore, Malaysia and Indonesia today. Then, in just over 200 years, the world went from 1 billion people to more than 8 billion. In this topic you will find out how and why that happened, learn to calculate birth rates, death rates, natural increase and doubling time like a demographer, and explain why some countries are still growing fast while others, like Singapore, are worried about having too few babies.",

  guide: [
    {
      id: "billions-timeline",
      heading: "From 1 billion to 8 billion: the timeline",
      discovery: {
        problem:
          "It took all of human history until about 1804 for the world to reach 1 billion people. How long do you think it took to add the most recent billion (7 billion to 8 billion)? 100 years? 50 years? Guess before you read.",
        idea:
          "Only about 11 years (2011 to November 2022). Each new billion has been added faster than the one before, because more people means more parents, so growth builds on itself.",
      },
      body:
        "**Population** means the number of people living in a place. **Demography** is the study of populations, and the people who study it are called **demographers**.\n\nFor tens of thousands of years the world's population grew extremely slowly. About 10,000 years ago, when farming began, there were perhaps 5 million people on Earth, fewer than live in Singapore today. By the year 1 CE there were roughly 200 to 300 million. Disease, famine and war kept death rates almost as high as birth rates, so numbers crept up and sometimes fell, for example when the **Black Death** (1347 to 1351) killed around a third or more of Europe's people.\n\nThen growth took off. Here are the **milestones** that every geographer should know:\n\n- **1 billion**: about 1804\n- **2 billion**: 1927 (123 years later)\n- **3 billion**: 1960 (33 years later)\n- **4 billion**: 1974 (14 years later)\n- **5 billion**: 1987 (13 years later)\n- **6 billion**: 1999 (12 years later)\n- **7 billion**: 2011 (12 years later)\n- **8 billion**: 15 November 2022 (about 11 years later), which the United Nations (UN) called the **Day of Eight Billion**\n\nNotice the pattern: the **gap between each billion shrank** dramatically from 123 years to about 12 years, and has stayed at roughly 12 years since the 1970s. That is because the **growth rate** (the percentage increase each year) peaked at just over **2% a year in the 1960s** and has since fallen to under **1% a year**. However, because the population is now so large, even a smaller percentage still adds around **70 million people a year**, roughly the population of Thailand.\n\nThe UN's latest projections suggest the world will reach about **9.7 billion by 2050** and **peak at about 10.3 billion in the mid-2080s**, before very slowly declining.",
      diagram: `<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of world population from 1800 to 2022 showing each billion milestone"><line x1="30" y1="160" x2="305" y2="160" stroke="#334155" stroke-width="1.5"/><line x1="30" y1="160" x2="30" y2="12" stroke="#334155" stroke-width="1.5"/><text x="168" y="185" font-size="10" text-anchor="middle" fill="#334155">Year</text><text x="12" y="90" font-size="10" text-anchor="middle" fill="#334155" transform="rotate(-90 12 90)">Billions</text><text x="30" y="172" font-size="10" text-anchor="middle" fill="#334155">1800</text><text x="147" y="172" font-size="10" text-anchor="middle" fill="#334155">1900</text><text x="265" y="172" font-size="10" text-anchor="middle" fill="#334155">2000</text><polyline points="30,148 35,142.5 100,136 179,125 218,107.5 234,90 250,72.5 264,55 278,37.5 291,20" fill="none" stroke="#2563eb" stroke-width="2.5"/><g fill="#dc2626"><circle cx="35" cy="142.5" r="3"/><circle cx="179" cy="125" r="3"/><circle cx="218" cy="107.5" r="3"/><circle cx="234" cy="90" r="3"/><circle cx="250" cy="72.5" r="3"/><circle cx="264" cy="55" r="3"/><circle cx="278" cy="37.5" r="3"/><circle cx="291" cy="20" r="3"/></g><g font-size="10" fill="#0f172a"><text x="40" y="138">1bn 1804</text><text x="140" y="120">2bn 1927</text><text x="178" y="104">3bn 1960</text><text x="194" y="88">4bn 1974</text><text x="210" y="71">5bn 1987</text><text x="224" y="54">6bn 1999</text><text x="238" y="37">7bn 2011</text><text x="236" y="17">8bn 2022</text></g><text x="95" y="155" font-size="10" fill="#7c3aed">123 years for the 2nd billion</text><text x="160" y="30" font-size="10" fill="#7c3aed">~12 years each</text></svg>`,
      diagramCaption:
        "World population milestones. The line is almost flat for a long time, then shoots upwards: each billion arrived much faster than the last.",
      keyPoints: [
        "1bn about 1804; 2bn 1927; 3bn 1960; 4bn 1974; 5bn 1987; 6bn 1999; 7bn 2011; 8bn November 2022.",
        "The time to add a billion fell from 123 years to about 12 years.",
        "The growth rate peaked at just over 2% a year in the 1960s and is now under 1%, but the world still adds about 70 million people a year.",
      ],
      thinkDeeper:
        "The growth rate today (under 1%) is less than half what it was in the 1960s (about 2%), yet the world still adds roughly the same number of people each year as it did then. How can both of these facts be true at the same time?",
      skill: "Reading a line graph and calculating the time intervals between milestones",
    },
    {
      id: "exponential-growth",
      heading: "Exponential growth and the J-curve",
      discovery: {
        problem:
          "Imagine you are offered either 1 million dollars today, or 1 cent that doubles every day for 30 days. Which would you choose? Work out roughly how much the cent would be worth on day 30.",
        idea:
          "The doubling cent reaches over 5 million dollars by day 30. When something grows by a percentage of itself, it grows slowly at first and then explosively. Populations grow in the same way.",
      },
      body:
        "**Linear growth** means adding the **same amount** each period, for example 10 more people every year: 100, 110, 120, 130. **Exponential growth** means growing by the **same percentage** each period, for example 10% a year: 100, 110, 121, 133, 146. Because the extra people are themselves added to the base, the increase gets bigger every time, like **compound interest** in a bank account.\n\nPopulations naturally grow exponentially when birth rates are higher than death rates, because today's babies become tomorrow's parents. When world population is drawn on a graph against time, the line is almost flat for thousands of years and then turns sharply upwards. This shape is called a **J-curve** because, like the letter J, it has a long low base followed by a steep upward stroke.\n\nThe J-curve has three parts:\n\n- **The lag phase**: very slow growth for most of human history, because high death rates almost cancelled out high birth rates.\n- **The bend**: from about **1750**, the **Agricultural Revolution** and the **Industrial Revolution** in Europe began to push death rates down, so growth sped up.\n- **The steep rise**: in the 20th century, medicine and clean water spread worldwide and the line shot up, the so-called **population explosion**.\n\nGeographers also talk about an **S-curve**, which is what happens if growth slows and levels off as a population reaches a limit. Today the world's curve is beginning to bend from a J towards an S, because birth rates are falling almost everywhere.\n\n**Population momentum** is an important idea: even after families start having fewer children, a population keeps growing for decades because there are so many young people who will become parents. This is why the world will keep growing until the 2080s even though the average woman now has about 2.3 children, close to replacement level.",
      diagram: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="J-curve of world population showing lag phase, bend and steep rise"><line x1="30" y1="150" x2="305" y2="150" stroke="#334155" stroke-width="1.5" marker-end="url(#expArrow)"/><line x1="30" y1="150" x2="30" y2="15" stroke="#334155" stroke-width="1.5" marker-end="url(#expArrow)"/><defs><marker id="expArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs><text x="290" y="166" font-size="10" text-anchor="end" fill="#334155">Time</text><text x="14" y="85" font-size="10" text-anchor="middle" fill="#334155" transform="rotate(-90 14 85)">Population</text><path d="M32,146 L200,143 Q240,140 258,118 Q276,90 288,22" fill="none" stroke="#16a34a" stroke-width="3"/><text x="80" y="135" font-size="10" fill="#0f172a">Lag phase: very slow growth</text><text x="80" y="122" font-size="10" fill="#0f172a">for thousands of years</text><text x="160" y="100" font-size="10" fill="#b45309">Bend: c.1750</text><text x="160" y="88" font-size="10" fill="#b45309">Agricultural and</text><text x="160" y="76" font-size="10" fill="#b45309">Industrial Revolutions</text><text x="212" y="30" font-size="10" fill="#dc2626">Steep rise:</text><text x="212" y="42" font-size="10" fill="#dc2626">population</text><text x="212" y="54" font-size="10" fill="#dc2626">explosion</text></svg>`,
      diagramCaption:
        "The J-curve: world population stayed low for thousands of years, bent upwards after about 1750, then rose steeply in the 20th century.",
      keyPoints: [
        "Exponential growth is growth by the same percentage each period, so the amount added keeps getting bigger.",
        "World population over time forms a J-curve: long lag phase, a bend around 1750, then a steep rise.",
        "Population momentum keeps a young population growing for decades even after fertility falls.",
      ],
      thinkDeeper:
        "A J-curve cannot go on forever on a finite planet. What different things could make the curve flatten into an S-shape? Which of these would be good news, and which would be bad news?",
    },
    {
      id: "birth-death-rates",
      heading: "Measuring change: birth rate, death rate and natural increase",
      discovery: {
        problem:
          "Country A has 2,000 births a year and Country B has 50,000 births a year. Which country has the higher birth rate? What extra piece of information do you need before you can answer?",
        idea:
          "You cannot tell without knowing the total population. A rate compares the number of events with the size of the population (per 1,000 people), so big and small countries can be compared fairly.",
      },
      body:
        "Demographers use **rates** so they can compare places of very different sizes.\n\n- **Birth rate** (crude birth rate): the number of live births per **1,000 people** per year. The world's birth rate is about **17 per 1,000**; Niger's is over **40 per 1,000**; Singapore's is about **8 per 1,000**.\n- **Death rate** (crude death rate): the number of deaths per **1,000 people** per year. The world's death rate is about **8 per 1,000**.\n- **Natural increase**: when the birth rate is **higher** than the death rate, the population grows naturally. **Natural decrease** is when the death rate is **higher** than the birth rate, as in Japan and Italy, so the population shrinks unless people move in.\n- **Natural increase rate** = birth rate minus death rate. World: 17 - 8 = **9 per 1,000**.\n- **Growth rate (%)**: divide the natural increase per 1,000 by 10. So 9 per 1,000 = **0.9% per year**. (The real growth rate of a country also includes **migration**: people moving in or out.)\n\n**Doubling time** is how long a population would take to double if the growth rate stayed the same. Use the **rule of 70**:\n\n- Doubling time (years) = **70 divided by the growth rate (%)**\n- At 2% a year: 70 / 2 = **35 years**\n- At 0.9% a year: 70 / 0.9 = about **78 years**\n- At 3.5% a year (like Niger): 70 / 3.5 = **20 years**\n\nTwo other useful measures:\n\n- **Total fertility rate (TFR)**: the average number of children a woman is expected to have in her lifetime. The world TFR is about **2.3**.\n- **Replacement level fertility**: about **2.1 children per woman**, enough for each couple to replace themselves (the 0.1 allows for children who die young). Below 2.1, a population will eventually shrink without immigration.\n- **Infant mortality rate**: deaths of babies under one year old per 1,000 live births. It is a powerful sign of a country's health care and development.",
      diagram: `<svg viewBox="0 0 320 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart comparing world birth rate of 17 per 1000 with death rate of 8 per 1000 and the natural increase between them"><line x1="40" y1="160" x2="300" y2="160" stroke="#334155" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="20" stroke="#334155" stroke-width="1.5"/><text x="34" y="163" font-size="10" text-anchor="end" fill="#334155">0</text><text x="34" y="104" font-size="10" text-anchor="end" fill="#334155">8</text><text x="34" y="45" font-size="10" text-anchor="end" fill="#334155">17</text><rect x="65" y="41" width="60" height="119" fill="#93c5fd" stroke="#1d4ed8"/><rect x="160" y="104" width="60" height="56" fill="#fca5a5" stroke="#b91c1c"/><text x="95" y="174" font-size="10" text-anchor="middle" fill="#0f172a">Birth rate</text><text x="190" y="174" font-size="10" text-anchor="middle" fill="#0f172a">Death rate</text><text x="95" y="35" font-size="10" text-anchor="middle" fill="#1d4ed8">17 per 1,000</text><text x="190" y="98" font-size="10" text-anchor="middle" fill="#b91c1c">8 per 1,000</text><line x1="125" y1="41" x2="245" y2="41" stroke="#16a34a" stroke-dasharray="4 3"/><line x1="220" y1="104" x2="245" y2="104" stroke="#16a34a" stroke-dasharray="4 3"/><line x1="240" y1="44" x2="240" y2="101" stroke="#16a34a" stroke-width="2" marker-start="url(#bdrArrowS)" marker-end="url(#bdrArrowE)"/><defs><marker id="bdrArrowE" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#16a34a"/></marker><marker id="bdrArrowS" markerWidth="8" markerHeight="8" refX="0" refY="3" orient="auto"><path d="M6,0 L0,3 L6,6 Z" fill="#16a34a"/></marker></defs><text x="248" y="66" font-size="10" fill="#15803d">Natural</text><text x="248" y="78" font-size="10" fill="#15803d">increase</text><text x="248" y="90" font-size="10" fill="#15803d">9 per 1,000</text><text x="248" y="118" font-size="10" fill="#15803d">= 0.9%</text></svg>`,
      diagramCaption:
        "World birth rate (about 17 per 1,000) minus death rate (about 8 per 1,000) gives a natural increase of 9 per 1,000, which is 0.9% a year.",
      keyPoints: [
        "Birth and death rates are measured per 1,000 people per year.",
        "Natural increase = birth rate minus death rate; divide by 10 to turn per 1,000 into a percentage.",
        "Rule of 70: doubling time = 70 divided by the growth rate in %.",
        "Replacement level fertility is about 2.1 children per woman.",
      ],
      thinkDeeper:
        "Singapore's natural increase is now very small, yet its total population has kept growing. What else, apart from births and deaths, changes a country's population, and why does a natural increase rate not tell the whole story?",
      skill: "Calculating natural increase, growth rate (%) and doubling time using the rule of 70",
    },
    {
      id: "why-death-rates-fell",
      heading: "Why did death rates fall?",
      discovery: {
        problem:
          "In London in 1854, hundreds of people living near one street died of cholera within a few days. Doctors at the time blamed bad air. A doctor called John Snow made a map of the deaths and asked the council to remove one thing from the street. What do you think it was?",
        idea:
          "The handle of the Broad Street water pump. Snow's map showed the deaths clustered around a pump with dirty water. Clean water and sewers, not just doctors, did a huge amount to cut death rates.",
      },
      body:
        "The population explosion did **not** happen mainly because people started having more babies. It happened because **death rates fell** while birth rates stayed high for several generations. The gap between the two lines produced rapid natural increase.\n\n**1. More and better food**\n\n- The **British Agricultural Revolution** (roughly 1700 to 1850) brought new methods such as **crop rotation** (the Norfolk four-course system), **selective breeding** of animals and Jethro Tull's **seed drill** (1701). Farms produced far more food with fewer workers, so fewer people starved and people were healthier and better able to fight disease.\n- In the 1960s the **Green Revolution** spread high-yield rice and wheat, fertilisers and irrigation across Asia and Latin America, helping countries such as India avoid feared famines.\n\n**2. The Industrial Revolution**\n\nFrom about **1750**, factories, railways and steamships made it possible to move food quickly to where it was needed, raised incomes over time and paid for public services. (At first, crowded industrial cities were very unhealthy, but wealth eventually funded better housing and sanitation.)\n\n**3. Sanitation and clean water**\n\n**Sanitation** means safe disposal of sewage and waste. After **John Snow** linked cholera to a dirty water pump in 1854, and London's **Great Stink** of 1858, engineer **Joseph Bazalgette** built a huge sewer network. Clean piped water and sewers cut deaths from cholera, typhoid and diarrhoea, which killed huge numbers of babies and children.\n\n**4. Medicine and health care**\n\n- **Vaccination**: Edward Jenner's smallpox vaccine (1796). Smallpox was declared eradicated worldwide in **1980**.\n- **Antibiotics**: penicillin, discovered by Alexander Fleming in **1928**, mass-produced in the 1940s.\n- Better hospitals, midwives, and knowledge about hygiene such as hand-washing.\n\nAs a result, global **life expectancy** (how long a newborn can expect to live on average) rose from about **46 years in 1950** to about **73 years** today, and the share of children dying before age five fell from about 1 in 4 to fewer than 1 in 25.\n\nIn today's lower-income countries, death rates fell **much faster** than they did in Europe, because vaccines, antibiotics and clean-water technology arrived all at once after 1950. That is why their populations grew so quickly in the late 20th century.",
      diagram: `<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of a falling death rate with causes labelled along the curve"><line x1="35" y1="160" x2="305" y2="160" stroke="#334155" stroke-width="1.5"/><line x1="35" y1="160" x2="35" y2="15" stroke="#334155" stroke-width="1.5"/><text x="170" y="182" font-size="10" text-anchor="middle" fill="#334155">Time (1700 to today)</text><text x="14" y="90" font-size="10" text-anchor="middle" fill="#334155" transform="rotate(-90 14 90)">Per 1,000 per year</text><path d="M38,32 L300,36" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 3"/><text x="240" y="28" font-size="10" fill="#2563eb">Birth rate</text><path d="M38,40 L90,44 Q140,60 175,100 Q215,140 300,146" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="250" y="138" font-size="10" fill="#dc2626">Death rate</text><circle cx="90" cy="44" r="4" fill="#f59e0b"/><text x="55" y="62" font-size="10" fill="#0f172a">1 Food: farming</text><text x="55" y="74" font-size="10" fill="#0f172a">revolutions</text><circle cx="150" cy="76" r="4" fill="#f59e0b"/><text x="160" y="66" font-size="10" fill="#0f172a">2 Clean water</text><text x="160" y="78" font-size="10" fill="#0f172a">and sewers</text><circle cx="200" cy="119" r="4" fill="#f59e0b"/><text x="82" y="118" font-size="10" fill="#0f172a">3 Vaccines and</text><text x="82" y="130" font-size="10" fill="#0f172a">antibiotics</text><text x="150" y="100" font-size="10" fill="#16a34a">gap = growth</text></svg>`,
      diagramCaption:
        "Death rates fell first, while birth rates stayed high. The widening gap between the two lines caused the population explosion.",
      keyPoints: [
        "The population explosion was caused mainly by falling death rates, not rising birth rates.",
        "Key causes: more food (Agricultural Revolution, Green Revolution), wealth and transport (Industrial Revolution), sanitation and clean water, vaccines and antibiotics.",
        "Global life expectancy rose from about 46 years in 1950 to about 73 years today.",
      ],
      thinkDeeper:
        "Which do you think saved more lives over the last 200 years: doctors and medicines, or engineers who built sewers and water pipes? What evidence would you need to decide?",
      caseStudy: {
        place: "London, United Kingdom, in the 1800s",
        facts: [
          "In 1854 a cholera outbreak around Broad Street, Soho, killed over 600 people.",
          "Dr John Snow mapped the deaths and showed they clustered around one water pump; removing its handle helped end the outbreak.",
          "The hot summer of 1858 caused the Great Stink from sewage in the River Thames.",
          "Joseph Bazalgette then built about 1,800 km of street sewers and 132 km of main intercepting sewers, mostly finished by the 1870s.",
          "London's last major cholera outbreak was in 1866, in the one area not yet connected to the new system.",
        ],
      },
      skill: "Using a historical map (John Snow's dot map) as evidence",
    },
    {
      id: "why-birth-rates-fall",
      heading: "Why do birth rates fall?",
      discovery: {
        problem:
          "In 1960 the average woman in Singapore had nearly 6 children. Today she has fewer than 1. Nobody banned babies. List as many reasons as you can for why families chose to have so many fewer children.",
        idea:
          "Birth rates fall when children are more likely to survive, girls stay in school longer, women have careers, contraception is available, families move to cities and children become expensive. These changes happen to most countries as they develop.",
      },
      body:
        "After death rates fall, birth rates usually follow, but often a generation or more later. Here are the main reasons:\n\n- **Education of girls and women**: girls who stay in school longer tend to marry later, start families later and have fewer children. They are more likely to have paid careers, so having a child has a bigger **opportunity cost** (what you give up). Many demographers think this is the single most powerful factor.\n- **Contraception and family planning**: **contraception** means methods that prevent pregnancy. When it is cheap, available and accepted, couples can choose how many children to have and when.\n- **Lower infant and child mortality**: when parents are confident their children will survive, they no longer need to have extra babies as an insurance policy.\n- **Urbanisation**: **urbanisation** means a growing share of people living in towns and cities. On a farm, children help with work from a young age and are an economic asset. In a city, housing is small and expensive and children are in school, not working.\n- **The cost of raising children**: in high-income places, school fees, tuition, housing and childcare make children very expensive. In Singapore, the high cost of living and long working hours are often given as reasons for having fewer children.\n- **Pensions and welfare**: where the state or savings support old people, parents do not depend on many children to look after them in old age.\n- **Changing attitudes and status of women**: later marriage, more people choosing not to marry, and greater gender equality.\n\nSome governments have tried to change birth rates directly. **Anti-natalist** policies try to **reduce** births (for example China's **one-child policy**, 1979 to 2015, and Singapore's **Stop at Two** campaign of 1972). **Pro-natalist** policies try to **increase** births (for example Singapore's **Baby Bonus**, introduced in 2001, and its 1987 slogan **Have Three or More, if you can afford it**).\n\nWhen birth rates fall below replacement level (2.1) for a long time, a country faces an **ageing population** (a rising proportion of older people) and eventually **natural decrease**.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram showing five factors leading to fewer births per woman"><defs><marker id="wbrArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs><rect x="105" y="82" width="110" height="36" rx="8" fill="#fde68a" stroke="#b45309"/><text x="160" y="98" font-size="10" text-anchor="middle" fill="#78350f">Fewer births</text><text x="160" y="111" font-size="10" text-anchor="middle" fill="#78350f">per woman</text><rect x="8" y="10" width="92" height="30" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="54" y="29" font-size="10" text-anchor="middle" fill="#1e3a8a">Girls' education</text><rect x="220" y="10" width="92" height="30" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="266" y="29" font-size="10" text-anchor="middle" fill="#1e3a8a">Contraception</text><rect x="8" y="160" width="92" height="30" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="54" y="179" font-size="10" text-anchor="middle" fill="#1e3a8a">Urbanisation</text><rect x="220" y="160" width="92" height="30" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="266" y="179" font-size="10" text-anchor="middle" fill="#1e3a8a">Cost of children</text><rect x="114" y="10" width="92" height="30" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="160" y="23" font-size="10" text-anchor="middle" fill="#14532d">Fewer child</text><text x="160" y="35" font-size="10" text-anchor="middle" fill="#14532d">deaths</text><line x1="70" y1="40" x2="118" y2="80" stroke="#475569" stroke-width="1.5" marker-end="url(#wbrArrow)"/><line x1="250" y1="40" x2="202" y2="80" stroke="#475569" stroke-width="1.5" marker-end="url(#wbrArrow)"/><line x1="160" y1="40" x2="160" y2="78" stroke="#475569" stroke-width="1.5" marker-end="url(#wbrArrow)"/><line x1="70" y1="160" x2="118" y2="121" stroke="#475569" stroke-width="1.5" marker-end="url(#wbrArrow)"/><line x1="250" y1="160" x2="202" y2="121" stroke="#475569" stroke-width="1.5" marker-end="url(#wbrArrow)"/></svg>`,
      diagramCaption:
        "Several social and economic changes work together to reduce the number of children families choose to have.",
      keyPoints: [
        "Main causes of falling birth rates: girls' education, contraception, lower child mortality, urbanisation and the rising cost of children.",
        "Anti-natalist policies try to lower births; pro-natalist policies try to raise them.",
        "Long-term fertility below 2.1 leads to an ageing population and eventually natural decrease.",
      ],
      thinkDeeper:
        "Singapore offers generous Baby Bonus payments, yet its fertility rate is among the lowest in the world. What does this suggest about whether money alone can persuade people to have more children?",
      caseStudy: {
        place: "Singapore",
        facts: [
          "Total fertility rate fell from about 5.8 children per woman in 1960 to 0.97 in 2023, the first time it dropped below 1.",
          "1972: the anti-natalist Stop at Two campaign used fees and incentives to discourage large families.",
          "1987: policy switched to pro-natalist with the slogan Have Three or More, if you can afford it.",
          "The Baby Bonus scheme (from 2001) gives cash gifts and savings top-ups for each child.",
          "Singapore's total population (about 6 million in 2024) still grows mainly because of immigration.",
        ],
      },
    },
    {
      id: "fastest-growth-today",
      heading: "Where is population growing fastest today?",
      discovery: {
        problem:
          "In 2023 a headline said a country had just overtaken China as the most populous country on Earth. Which country was it, and do you think it got there because it grew faster, because China shrank, or both?",
        idea:
          "India, in about April 2023 (UN estimate), with roughly 1.43 billion people. It was both: India kept growing while China's population started to fall in 2022. But the fastest growth rates of all are in sub-Saharan Africa.",
      },
      body:
        "Population growth today is very **uneven**. Describe the pattern using **TEA**: **T**rend, **E**xample, **A**nomaly.\n\n- **Trend**: the fastest growth is in **sub-Saharan Africa** (the part of Africa south of the Sahara Desert) and parts of the Middle East and South Asia. The slowest growth, or decline, is in **Europe**, **East Asia** (Japan, South Korea, China) and some Caribbean islands.\n- **Example**: **Niger** has one of the highest fertility rates in the world (about **6 children per woman**) and grows by about **3.5% a year**, so its population (about **27 million**) would double in about **20 years**. Half its people are under about **15 years old**.\n- **Anomaly**: some places break the pattern, for example **Singapore** and **the Gulf states** grow quickly through **immigration** even though birth rates are low.\n\n**Nigeria** is Africa's most populous country, with roughly **220 to 230 million** people and a TFR of about **5**. Its largest city, Lagos, has around 15 to 17 million people (20 million+ in the wider metro area). The UN projects Nigeria could reach about **375 million by 2050**, rivalling the USA as the world's third most populous country after India and China.\n\n**India and China**: India overtook China as the world's most populous country in **2023**, with about **1.43 billion** people. India's fertility rate has fallen to about **2.0**, already below replacement, but **population momentum** (its very young population) means it will keep growing until about the 2060s. China's fertility is about **1.0**; its population **fell in 2022 for the first time since 1961**, partly a legacy of the **one-child policy** (1979 to 2015).\n\nThe UN says more than half of the world's growth up to 2050 will happen in just **eight countries**: the Democratic Republic of the Congo, Egypt, Ethiopia, India, Nigeria, Pakistan, the Philippines and Tanzania. By 2050 more than **1 in 5** people on Earth may live in sub-Saharan Africa (and about 1 in 4 in Africa as a whole).",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal bar chart of total fertility rate for Niger, Nigeria, world, India, China and Singapore with a replacement level line at 2.1"><text x="160" y="14" font-size="11" text-anchor="middle" fill="#0f172a">Children per woman (TFR, approx. early 2020s)</text><g font-size="10" fill="#0f172a" text-anchor="end"><text x="84" y="37">Niger</text><text x="84" y="63">Nigeria</text><text x="84" y="89">World</text><text x="84" y="115">India</text><text x="84" y="141">China</text><text x="84" y="167">Singapore</text></g><rect x="90" y="26" width="180" height="16" fill="#dc2626"/><rect x="90" y="52" width="150" height="16" fill="#f97316"/><rect x="90" y="78" width="69" height="16" fill="#64748b"/><rect x="90" y="104" width="60" height="16" fill="#eab308"/><rect x="90" y="130" width="30" height="16" fill="#2563eb"/><rect x="90" y="156" width="29" height="16" fill="#2563eb"/><g font-size="10" fill="#0f172a"><text x="274" y="38">~6</text><text x="244" y="64">~5</text><text x="163" y="90">~2.3</text><text x="154" y="116">~2.0</text><text x="124" y="142">~1.0</text><text x="123" y="168">0.97</text></g><line x1="153" y1="22" x2="153" y2="178" stroke="#16a34a" stroke-width="2" stroke-dasharray="5 3"/><text x="153" y="192" font-size="10" text-anchor="middle" fill="#15803d">Replacement level 2.1</text><line x1="90" y1="22" x2="90" y2="178" stroke="#334155"/></svg>`,
      diagramCaption:
        "Fertility rates vary hugely. Niger and Nigeria are far above replacement level (2.1); China and Singapore are far below it.",
      keyPoints: [
        "The fastest growth is in sub-Saharan Africa, e.g. Niger (about 6 children per woman, about 3.5% growth a year).",
        "Nigeria (roughly 220 to 230 million) is Africa's most populous country and may reach about 375 million by 2050.",
        "India overtook China as the most populous country in 2023 (about 1.43 billion); China's population began falling in 2022.",
      ],
      thinkDeeper:
        "India's fertility rate is already below replacement level, yet its population is still growing. Use the idea of population momentum to explain why. When might India's population finally stop growing?",
      caseStudy: {
        place: "Niger, West Africa",
        facts: [
          "Population about 27 million (2023), up from about 3.4 million in 1960.",
          "Total fertility rate about 6 children per woman, among the highest in the world.",
          "Growth rate roughly 3.5% a year, giving a doubling time of about 20 years (70 / 3.5).",
          "Median age about 15: half the population is younger than a typical Year 10 student.",
          "Around three-quarters of girls marry before 18, and few women complete secondary school, which keeps fertility high.",
        ],
      },
      skill: "Describing a distribution using TEA (Trend, Example, Anomaly) and reading a bar chart",
    },
    {
      id: "future-population",
      heading: "The future: peak population and what comes next",
      discovery: {
        problem:
          "If the average woman in the world now has about 2.3 children, and that number keeps falling, will the world's population ever start to shrink? If so, roughly when?",
        idea:
          "Yes. The UN projects that world population will peak at about 10.3 billion in the mid-2080s and then slowly decline. Momentum keeps it rising for decades after fertility nears replacement level.",
      },
      body:
        "A **projection** is an estimate of a future population based on assumptions about birth rates, death rates and migration. It is not a certain prediction.\n\nThe UN's **World Population Prospects 2024** gives a central (most likely) projection of:\n\n- about **9.7 billion** people by **2050**\n- a **peak of about 10.3 billion in the mid-2080s**\n- a slight fall to about **10.2 billion by 2100**\n\nThe UN also shows a range of uncertainty: by 2100 the world might have anything from under 9 billion to over 12 billion people. Small changes in the average number of children per woman make a huge difference over 75 years.\n\nThe future is **two different worlds**:\n\n- Countries with **natural decrease and ageing**: Japan's population has been falling since about 2010; China, South Korea and Italy are shrinking. South Korea's TFR (about **0.7**) is the lowest in the world. These countries worry about too few workers, rising pension and health costs, and empty schools and villages.\n- Countries with **youthful, fast-growing populations**: in Niger, Chad, Somalia and the Democratic Republic of the Congo, most people are children. These countries must create schools, health care and millions of new jobs every year. If they succeed, a large working-age population can boost the economy, called a **demographic dividend**.\n\nGeographers ask whether the planet can support 10 billion people. Thomas **Malthus** (1798) argued that population grows faster than food supply, leading to famine. Ester **Boserup** (1965) argued that people invent new ways to produce more food when they need to (**necessity is the mother of invention**). So far, food production has kept up, but climate change, water shortages and high consumption in rich countries raise new questions.",
      diagram: `<svg viewBox="0 0 320 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of UN world population estimates and projections from 1950 to 2100 with a peak of about 10.3 billion in the 2080s and a shaded uncertainty range"><line x1="40" y1="160" x2="305" y2="160" stroke="#334155" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="12" stroke="#334155" stroke-width="1.5"/><g font-size="10" fill="#334155" text-anchor="middle"><text x="40" y="172">1950</text><text x="127" y="172">2000</text><text x="213" y="172">2050</text><text x="300" y="172">2100</text></g><g font-size="10" fill="#334155" text-anchor="end"><text x="35" y="163">0</text><text x="35" y="104">5</text><text x="35" y="46">10</text></g><text x="172" y="184" font-size="10" text-anchor="middle" fill="#334155">Year (population in billions)</text><polygon points="165,66.7 213,40 260,26 300,17.6 300,56 260,52 213,54 165,66.7" fill="#bfdbfe" opacity="0.7"/><polyline points="40,130.8 83,112.2 127,88.8 165,66.7" fill="none" stroke="#1d4ed8" stroke-width="2.5"/><polyline points="165,66.7 213,46.8 245,41.5 272,39.8 300,41" fill="none" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="6 3"/><circle cx="272" cy="39.8" r="4" fill="#dc2626"/><text x="248" y="32" font-size="10" fill="#dc2626">Peak ~10.3bn</text><text x="248" y="21" font-size="10" fill="#dc2626">mid-2080s</text><circle cx="165" cy="66.7" r="3.5" fill="#0f172a"/><text x="110" y="64" font-size="10" fill="#0f172a">8bn (2022)</text><text x="180" y="80" font-size="10" fill="#1e3a8a">shaded = uncertainty</text></svg>`,
      diagramCaption:
        "UN estimates (solid line) and projections (dashed line). The central projection peaks at about 10.3 billion in the mid-2080s; the shaded area shows the range of uncertainty.",
      keyPoints: [
        "UN central projection: about 9.7 billion in 2050, peaking at about 10.3 billion in the mid-2080s.",
        "Projections are estimates based on assumptions and have a wide uncertainty range.",
        "The future has both shrinking, ageing countries (Japan, South Korea) and fast-growing, youthful ones (Niger, Chad).",
      ],
      thinkDeeper:
        "Is the biggest challenge for the planet the number of people, or how much each person consumes? Compare the impact of one extra person in Niger with one extra person in a high-income country.",
      skill: "Interpreting projections and uncertainty ranges on a line graph",
    },
  ],

  mnemonics: [
    {
      topic: "Billion milestone years",
      device: "1804, then gaps of 123, 33, then about a dozen each time (14, 13, 12, 12, 11)",
      explanation:
        "Learn the anchor 1804, then the gaps: 123, 33, 14, 13, 12, 12, 11 years. After 1960 the gaps are all about 12 to 14 years, so you only need to remember 1960 and count on by roughly twelve.",
    },
    {
      topic: "Why death rates fell",
      device: "FISH: Food, Industry, Sanitation, Health care",
      explanation:
        "Food (Agricultural and Green Revolutions), Industry (Industrial Revolution wealth and transport), Sanitation (clean water and sewers), Health care (vaccines, antibiotics, hospitals).",
    },
    {
      topic: "Why birth rates fall",
      device: "CHEAP: Contraception, Health (fewer child deaths), Education of girls, Affordability (cost of children), Places (urbanisation)",
      explanation:
        "Each letter is a reason families choose fewer children. Education of girls and women is often the most powerful.",
    },
    {
      topic: "Doubling time",
      device: "Seventy over the rate, and the doubling's your date",
      explanation:
        "Rule of 70: doubling time in years = 70 divided by the percentage growth rate. 2% doubles in 35 years; 1% in 70 years.",
    },
  ],

  examMistakes: [
    "Saying the population explosion happened because people had more babies: it happened mainly because death rates fell while birth rates stayed high.",
    "Forgetting the units: birth and death rates are per 1,000 people per year, not percentages. To turn natural increase per 1,000 into a %, divide by 10.",
    "Confusing birth rate (births per 1,000 people) with fertility rate (children per woman).",
    "Describing instead of explaining: 'the death rate fell' gains little; say WHY (e.g. vaccines reduced deaths from smallpox and measles).",
    "Describing a pattern without data: always quote figures or examples, e.g. 'Niger, about 6 children per woman'.",
    "Saying India overtook China because China's population crashed: India overtook in 2023 mainly because India kept growing; China's fall was small.",
    "Writing the rule of 70 the wrong way round (rate divided by 70) or using a decimal instead of a percentage (70 / 0.02).",
    "Treating a UN projection as a certain fact: say 'is projected to' and mention the uncertainty.",
  ],

  misconceptions: [
    {
      wrong: "The world's population is growing faster than ever.",
      right:
        "The growth rate peaked at just over 2% a year in the 1960s and is now under 1%. The number added each year is still large (about 70 million) because the base is so big.",
    },
    {
      wrong: "Poor families have lots of children because they do not know any better.",
      right:
        "High fertility often makes sense in context: children help on farms, there are no pensions, child mortality is high, and contraception or girls' education may be unavailable. When these conditions change, fertility falls.",
    },
    {
      wrong: "Once fertility falls to replacement level (2.1), the population immediately stops growing.",
      right:
        "Population momentum means a young population keeps growing for decades because there are so many future parents. India is below 2.1 but still growing.",
    },
    {
      wrong: "The population will keep rising forever.",
      right:
        "The UN projects a peak of about 10.3 billion in the mid-2080s, followed by a slow decline, because fertility is falling almost everywhere.",
    },
    {
      wrong: "A high birth rate means a high growth rate.",
      right:
        "Growth depends on the gap between birth and death rates (and migration). A country with a birth rate of 40 and a death rate of 35 grows more slowly than one with 20 and 5.",
    },
  ],

  expertDebates: [
    {
      question: "Is the world overpopulated, or is over-consumption the real problem?",
      detail:
        "Some scientists argue more people inevitably means more pressure on forests, water and the climate, so slowing population growth helps the planet. Others point out that the richest 10% of people cause around half of carbon emissions, while a person in Niger uses a tiny fraction of what a person in a high-income country uses, so reducing consumption matters far more than reducing numbers.",
    },
    {
      question: "Malthus or Boserup: can food supply keep up with population?",
      detail:
        "Thomas Malthus (1798) predicted that population would outrun food and cause famine. Ester Boserup (1965) argued population pressure drives new farming inventions. Since 1800 food production has grown faster than population, which supports Boserup, but neo-Malthusians warn that soil loss, water shortages and climate change could still set limits.",
    },
    {
      question: "Should governments try to change how many children people have?",
      detail:
        "China's one-child policy slowed growth but caused human rights abuses, a gender imbalance and rapid ageing. Pro-natalist cash incentives in Singapore, South Korea and Europe have had only small effects. Many experts argue the best approach is to expand education, health care and choice, and let families decide.",
    },
  ],

  realWorld: [
    {
      title: "Singapore's Baby Bonus",
      detail:
        "Singapore's fertility rate (0.97 in 2023) is among the lowest on Earth, so the government offers Baby Bonus cash gifts, housing priority for families (HDB) and paid parental leave to encourage births.",
      emoji: "👶",
    },
    {
      title: "Ageing classmates' grandparents",
      detail:
        "Low birth rates plus longer lives mean Singapore's share of residents aged 65+ is rising fast, so there are more eldercare centres, Silver Zones on roads and pressure on CPF retirement savings.",
      emoji: "👵",
    },
    {
      title: "Feeding 8 billion",
      detail:
        "Singapore imports over 90% of its food. Population growth elsewhere raises world demand for rice, wheat and protein, which is one reason Singapore invests in vertical farms and food security.",
      emoji: "🍚",
    },
    {
      title: "Lagos: a megacity in the making",
      detail:
        "Nigeria's fast growth means Lagos adds hundreds of thousands of people each year, creating huge demand for housing, roads, water and jobs.",
      emoji: "🏙️",
    },
    {
      title: "Vaccines that changed the curve",
      detail:
        "The eradication of smallpox (1980) and childhood vaccination programmes saved hundreds of millions of lives. Your own vaccination record is part of the story of falling death rates.",
      emoji: "💉",
    },
  ],

  flashcards: [
    { front: "Birth rate", back: "The number of live births per 1,000 people per year. World: about 17 per 1,000." },
    { front: "Death rate", back: "The number of deaths per 1,000 people per year. World: about 8 per 1,000." },
    { front: "Natural increase", back: "Birth rate minus death rate when births exceed deaths. World: about 9 per 1,000 = 0.9% a year." },
    { front: "Natural decrease", back: "When the death rate is higher than the birth rate, so the population falls without immigration (e.g. Japan)." },
    { front: "Growth rate (%)", back: "The percentage change in population per year. Natural increase per 1,000 divided by 10 (plus the effect of migration)." },
    { front: "Rule of 70", back: "Doubling time (years) = 70 / growth rate (%). E.g. 2% a year doubles in 35 years." },
    { front: "Total fertility rate (TFR)", back: "Average number of children a woman is expected to have in her lifetime. World about 2.3; Niger about 6; Singapore 0.97 (2023)." },
    { front: "Replacement level fertility", back: "About 2.1 children per woman: enough for a population to replace itself in the long run." },
    { front: "Exponential growth", back: "Growth by the same percentage each period, so the amount added keeps increasing. Produces a J-curve." },
    { front: "J-curve", back: "The shape of world population over time: a long flat lag phase, then a steep rise after about 1750." },
    { front: "Population momentum", back: "A young population keeps growing for decades even after fertility falls, because so many people will become parents." },
    { front: "World population milestones", back: "1bn ~1804, 2bn 1927, 3bn 1960, 4bn 1974, 5bn 1987, 6bn 1999, 7bn 2011, 8bn 15 Nov 2022." },
    { front: "UN projection of peak population", back: "About 10.3 billion in the mid-2080s (UN World Population Prospects 2024), about 9.7 billion by 2050." },
    { front: "Why death rates fell (4 reasons)", back: "More food (Agricultural Revolution), wealth (Industrial Revolution), sanitation and clean water, medicine (vaccines, antibiotics)." },
    { front: "India vs China", back: "India overtook China as the most populous country in 2023 (about 1.43 billion). China's population fell in 2022 for the first time since 1961." },
    { front: "Anti-natalist vs pro-natalist", back: "Anti-natalist policies reduce births (China's one-child policy, Singapore's Stop at Two). Pro-natalist policies increase births (Singapore's Baby Bonus)." },
  ],

  mustKnow: [
    "Recall the year the world reached each billion from 1 to 8 billion, and the UN peak projection (about 10.3 billion, mid-2080s).",
    "Explain the difference between linear and exponential growth and draw/label a J-curve.",
    "Define birth rate, death rate, natural increase, natural decrease and growth rate, with correct units.",
    "Calculate natural increase, growth rate (%) and doubling time using the rule of 70.",
    "Explain at least four reasons why death rates fell, with named examples (Jenner, Snow, Fleming, Agricultural Revolution).",
    "Explain at least four reasons why birth rates fall, especially girls' education and contraception.",
    "Describe where population is growing fastest today using TEA, naming Niger and Nigeria with data.",
    "Explain why India overtook China in 2023 and why India is still growing despite below-replacement fertility.",
    "Evaluate whether the world's population is a problem, using Malthus, Boserup and the consumption argument.",
  ],

  videos: [
    {
      title: "World population growth explained",
      channel: "Time for Geography",
      url: "https://www.youtube.com/results?search_query=time+for+geography+world+population+growth",
    },
    {
      title: "Birth rate, death rate and natural increase",
      channel: "BBC Bitesize",
      url: "https://www.youtube.com/results?search_query=bbc+bitesize+geography+birth+rate+death+rate+population",
    },
    {
      title: "Why is the world population growing?",
      channel: "Cool Geography",
      url: "https://www.youtube.com/results?search_query=cool+geography+population+growth+exponential",
    },
    {
      title: "8 billion people: where next?",
      channel: "Geography Hub",
      url: "https://www.youtube.com/results?search_query=geography+hub+8+billion+population",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "pgrow-quiz-mcq-1",
        question: "In which year did the world's population reach 8 billion?",
        options: ["2011", "2019", "2022", "2025"],
        answerIndex: 2,
        hint: "The UN marked the Day of Eight Billion in November of this year.",
        explanation:
          "The UN estimated the world reached 8 billion on 15 November 2022. 2011 is tempting, but that was the 7 billion milestone.",
        guideRef: "billions-timeline",
      },
      {
        id: "pgrow-quiz-mcq-2",
        question: "A country has a birth rate of 30 per 1,000 and a death rate of 10 per 1,000. What is its natural increase rate as a percentage?",
        options: ["2%", "20%", "3%", "0.2%"],
        answerIndex: 0,
        hint: "Subtract first, then convert 'per 1,000' into 'per 100'.",
        explanation:
          "30 - 10 = 20 per 1,000. Dividing by 10 gives 2 per 100, which is 2%. 20% is wrong because it forgets that the rate is per 1,000, not per 100.",
        guideRef: "birth-death-rates",
      },
      {
        id: "pgrow-quiz-mcq-3",
        question: "What was the MAIN cause of the rapid growth of world population in the 19th and 20th centuries?",
        options: [
          "Birth rates rose sharply everywhere",
          "Large-scale migration between continents",
          "People began marrying at a younger age",
          "Death rates fell while birth rates stayed high",
        ],
        answerIndex: 3,
        hint: "Think about the gap between two lines on a graph.",
        explanation:
          "Better food, sanitation and medicine made death rates fall, but birth rates stayed high for a generation or more, so the gap (natural increase) widened. Migration moves people between countries but does not add people to the world total.",
        guideRef: "why-death-rates-fell",
      },
      {
        id: "pgrow-quiz-mcq-4",
        question: "Which country overtook China as the world's most populous country in 2023?",
        options: ["Nigeria", "India", "Indonesia", "The USA"],
        answerIndex: 1,
        hint: "Its population is about 1.43 billion.",
        explanation:
          "India passed China in 2023 with about 1.43 billion people. Nigeria is growing fast but has roughly 220 to 230 million people, far fewer.",
        guideRef: "fastest-growth-today",
      },
    ],
    qa: [
      {
        id: "pgrow-quiz-qa-1",
        question: "Define 'natural increase' and explain how it is calculated.",
        marks: 2,
        hint: "Two rates are involved.",
        modelAnswer:
          "Natural increase is the growth in population when the birth rate is higher than the death rate. It is calculated by subtracting the death rate from the birth rate (both per 1,000 people per year), e.g. 17 - 8 = 9 per 1,000.",
        markScheme: [
          { point: "Defines natural increase as births exceeding deaths / population growth from births and deaths", keywords: ["births exceed", "more births than deaths", "birth rate is higher", "higher than the death", "exceeds the death", "births minus deaths"] },
          { point: "Calculation: birth rate minus death rate (per 1,000)", keywords: ["minus", "subtract", "take away", "birth rate - death rate", "difference between"] },
        ],
        commonError: "Including migration in natural increase. Natural increase is only births and deaths.",
        guideRef: "birth-death-rates",
      },
      {
        id: "pgrow-quiz-qa-2",
        question: "Explain two reasons why death rates fell in Europe during the 1800s.",
        marks: 4,
        hint: "Think about what people ate and drank, and what happened to waste.",
        modelAnswer:
          "First, the Agricultural Revolution (crop rotation, selective breeding, the seed drill) increased food supply, so fewer people starved and better-fed people resisted disease. Second, improved sanitation such as Bazalgette's London sewers and clean piped water reduced waterborne diseases like cholera, which had killed many people, especially children.",
        markScheme: [
          { point: "Reason 1: more / better food (Agricultural Revolution)", keywords: ["food", "agricultur", "farming", "crop rotation", "harvest"] },
          { point: "Explains: less starvation / better nutrition so more resistance to disease", keywords: ["starv", "nutrition", "famine", "healthier", "resist"] },
          { point: "Reason 2: sanitation / clean water / medicine", keywords: ["sanitation", "sewer", "clean water", "vaccin", "medicine"] },
          { point: "Explains: fewer deaths from diseases such as cholera / smallpox", keywords: ["cholera", "typhoid", "smallpox", "disease", "infection"] },
        ],
        commonError: "Listing reasons without explaining HOW each one reduced deaths.",
        guideRef: "why-death-rates-fell",
      },
      {
        id: "pgrow-quiz-qa-3",
        question: "A country's population is growing at 1.4% a year. Use the rule of 70 to calculate its doubling time. Show your working.",
        marks: 2,
        hint: "Divide 70 by the growth rate.",
        modelAnswer: "Doubling time = 70 divided by 1.4 = 50 years.",
        markScheme: [
          { point: "Correct method: 70 divided by growth rate", keywords: ["70 1 4", "70 divided by 1 4", "divide 70", "rule of 70"] },
          { point: "Correct answer: 50 years", keywords: ["50 years", "50 yrs", "= 50", "fifty"] },
        ],
        commonError: "Dividing 1.4 by 70, or using 0.014 instead of 1.4.",
        guideRef: "birth-death-rates",
      },
      {
        id: "pgrow-quiz-qa-4",
        question: "Explain why educating girls tends to reduce birth rates.",
        marks: 3,
        hint: "Think about marriage age, careers and knowledge.",
        modelAnswer:
          "Girls who stay in school longer usually marry and have their first child later, shortening the time they have children. Education opens up paid careers, so having many children has a bigger opportunity cost. Educated women also know more about contraception and health, and their children are more likely to survive, so they choose smaller families.",
        markScheme: [
          { point: "Marry / start families later", keywords: ["marry later", "later marriage", "start families later", "first child later", "delay"] },
          { point: "Careers / jobs make children more costly in lost income", keywords: ["career", "job", "paid work", "opportunity cost", "income"] },
          { point: "Knowledge of contraception / health / child survival", keywords: ["contracep", "family planning", "birth control", "child health", "survive"] },
        ],
        commonError: "Saying 'they are too busy studying' without linking education to marriage age, careers or contraception.",
        guideRef: "why-birth-rates-fall",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "pgrow-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "pgrow-mcq-p1-q01",
            question: "Roughly when did the world's population first reach 1 billion?",
            options: ["About 1504", "About 1804", "About 1904", "About 1950"],
            answerIndex: 1,
            hint: "It was during the early Industrial Revolution, around the time of Napoleon.",
            explanation:
              "Demographers estimate 1 billion was reached around 1804. 1904 is tempting, but by 1927 the world had already doubled to 2 billion, so 1 billion must have been much earlier.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-mcq-p1-q02",
            question: "What is demography?",
            options: [
              "The study of landforms and rocks",
              "The study of how governments are elected",
              "The study of weather and climate",
              "The study of human populations and how they change",
            ],
            answerIndex: 3,
            hint: "The Greek word 'demos' means 'the people'.",
            explanation:
              "Demography is the study of populations: their size, structure and change through births, deaths and migration. 'Democracy' shares the same root but is about government, not population.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-mcq-p1-q03",
            question: "How is the crude birth rate measured?",
            options: [
              "Live births per 1,000 people per year",
              "Live births per 100 women per year",
              "Average number of children per woman",
              "Live births per 1,000 babies",
            ],
            answerIndex: 0,
            hint: "Rates in demography are usually given 'per thousand'.",
            explanation:
              "Birth rate = live births per 1,000 people in the whole population per year. 'Average children per woman' is the total fertility rate, a different measure.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p1-q04",
            question: "How many years did it take the world to grow from 1 billion (1804) to 2 billion (1927)?",
            options: ["33 years", "73 years", "123 years", "223 years"],
            answerIndex: 2,
            hint: "Subtract 1804 from 1927.",
            explanation:
              "1927 - 1804 = 123 years. 33 years is the next gap (2 billion in 1927 to 3 billion in 1960).",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-mcq-p1-q05",
            question: "Why is the graph of world population over time called a 'J-curve'?",
            options: [
              "It rises steadily in a straight line",
              "It is flat for a long time, then rises very steeply",
              "It rises and then falls back down",
              "It rises quickly and then levels off",
            ],
            answerIndex: 1,
            hint: "Picture the letter J: a long, low base and then a steep upward stroke.",
            explanation:
              "For most of history growth was very slow (the flat part), then after about 1750 it shot up (the steep part). Rising then levelling off describes an S-curve, not a J-curve.",
            guideRef: "exponential-growth",
          },
          {
            id: "pgrow-mcq-p1-q06",
            question: "Which sequence shows exponential growth?",
            options: ["100, 110, 121, 133", "100, 110, 120, 130", "100, 105, 110, 115", "100, 100, 100, 100"],
            answerIndex: 0,
            hint: "Look for growth by the same percentage, not the same amount.",
            explanation:
              "100, 110, 121, 133 grows by 10% each time, so the amount added gets bigger (10, 11, 12). 100, 110, 120, 130 adds the same 10 each time, which is linear growth.",
            guideRef: "exponential-growth",
          },
          {
            id: "pgrow-mcq-p1-q07",
            question: "What is the approximate world crude birth rate in the 2020s?",
            options: ["About 4 per 1,000", "About 45 per 1,000", "About 30 per 1,000", "About 17 per 1,000"],
            answerIndex: 3,
            hint: "It is roughly double the world death rate of about 8 per 1,000.",
            explanation:
              "The world birth rate is about 17 per 1,000. About 45 per 1,000 is closer to Niger's rate, one of the highest in the world, not the global average.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p1-q08",
            question: "Which country is experiencing natural decrease?",
            options: ["Niger", "Nigeria", "Japan", "India"],
            answerIndex: 2,
            hint: "Natural decrease means more deaths than births: look for an old, low-fertility population.",
            explanation:
              "Japan has more deaths than births each year and its population has been falling since about 2010. India's fertility is below replacement but it still has more births than deaths because of its young population.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p1-q09",
            question: "Using the rule of 70, how long would a population growing at 2% a year take to double?",
            options: ["140 years", "35 years", "20 years", "70 years"],
            answerIndex: 1,
            hint: "Doubling time = 70 / growth rate (%).",
            explanation:
              "70 / 2 = 35 years. 140 years comes from multiplying 70 by 2 instead of dividing.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p1-q10",
            question: "What is 'replacement level fertility'?",
            options: [
              "About 2.1 children per woman",
              "About 1.0 child per woman",
              "About 4 children per woman",
              "Exactly 2.0 children per woman",
            ],
            answerIndex: 0,
            hint: "Two parents need to be replaced, plus a little extra.",
            explanation:
              "About 2.1 children per woman replaces both parents, with 0.1 extra to allow for children who die before adulthood. Exactly 2.0 ignores child deaths.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p1-q11",
            question: "In 1854, Dr John Snow showed that cholera deaths in London were linked to what?",
            options: ["Bad air from factories", "Rats in the docks", "Overcrowded schools", "A contaminated water pump"],
            answerIndex: 3,
            hint: "He asked for the handle of something on Broad Street to be removed.",
            explanation:
              "Snow mapped deaths clustered around the Broad Street water pump. Many people then believed in 'bad air' (miasma), which Snow's evidence challenged.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p1-q12",
            question: "Edward Jenner developed the first vaccine in 1796. Which disease was it against?",
            options: ["Cholera", "Malaria", "Smallpox", "Polio"],
            answerIndex: 2,
            hint: "This disease was declared eradicated worldwide in 1980.",
            explanation:
              "Jenner's vaccine was against smallpox, which was eventually eradicated in 1980. Polio vaccines came much later, in the 1950s.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p1-q13",
            question: "Penicillin, the first widely used antibiotic, was discovered by Alexander Fleming in which year?",
            options: ["1854", "1928", "1960", "1980"],
            answerIndex: 1,
            hint: "It was between the two World Wars.",
            explanation:
              "Fleming discovered penicillin in 1928 and it was mass-produced in the 1940s. 1854 is the year of John Snow's cholera map.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p1-q14",
            question: "Why does urbanisation usually lead to lower birth rates?",
            options: [
              "In cities children are expensive and do not work on farms",
              "City air makes people less fertile",
              "Governments ban large families in cities",
              "Cities have fewer hospitals than villages",
            ],
            answerIndex: 0,
            hint: "Compare what a child means to a farming family and to a city family.",
            explanation:
              "On farms children help with work, but in cities housing and schooling are costly and children are not an economic asset, so families choose fewer. Cities actually usually have more hospitals, not fewer.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-mcq-p1-q15",
            question: "Approximately how many children does the average woman in Niger have?",
            options: ["About 1", "About 2", "About 3", "About 6"],
            answerIndex: 3,
            hint: "Niger has one of the highest fertility rates in the world.",
            explanation:
              "Niger's total fertility rate is about 6, among the highest anywhere. About 2 is closer to India's rate.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p1-q16",
            question: "Which is Africa's most populous country?",
            options: ["Egypt", "Ethiopia", "Nigeria", "Niger"],
            answerIndex: 2,
            hint: "Its largest city is Lagos.",
            explanation:
              "Nigeria has roughly 220 to 230 million people. Niger has a faster growth rate but only about 27 million people; the names are easy to confuse.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p1-q17",
            question: "According to the UN's 2024 projections, when is world population expected to peak, and at roughly what size?",
            options: [
              "2030, at about 8.5 billion",
              "The mid-2080s, at about 10.3 billion",
              "2050, at about 15 billion",
              "It will never peak",
            ],
            answerIndex: 1,
            hint: "It is in the second half of this century and just over 10 billion.",
            explanation:
              "The UN's central projection is a peak of about 10.3 billion in the mid-2080s. 2030 is far too early, because population momentum keeps growth going for decades.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-mcq-p1-q18",
            question: "When did the world's population growth RATE (%) reach its highest level?",
            options: ["The 1960s", "The 1800s", "The 2010s", "The 1920s"],
            answerIndex: 0,
            hint: "It peaked at just over 2% a year, before falling.",
            explanation:
              "The growth rate peaked at just over 2% a year in the 1960s and has roughly halved since. In the 2010s the rate was falling, even though many people were still being added.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-mcq-p1-q19",
            question: "A country has a birth rate of 12 per 1,000 and a death rate of 14 per 1,000, with no migration. What is happening to its population?",
            options: [
              "Natural increase of 0.2% a year",
              "Natural increase of 2% a year",
              "Natural decrease of 2% a year",
              "Natural decrease of 0.2% a year",
            ],
            answerIndex: 3,
            hint: "Which is bigger, births or deaths? Then convert per 1,000 into a %.",
            explanation:
              "12 - 14 = -2 per 1,000, a natural decrease. Dividing by 10 gives -0.2%. 'Natural decrease of 2%' forgets that per 1,000 must be divided by 10.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p1-q20",
            question: "In the 1960s world growth was about 2% a year; today it is under 1%. Yet each year the world still adds roughly 70 million people. Why?",
            options: [
              "Migration has increased",
              "The death rate has risen",
              "The population is now so much bigger that a smaller percentage is still a large number",
              "Fertility has risen again since the 1960s",
            ],
            answerIndex: 2,
            hint: "Compare 2% of about 3.5 billion with 0.9% of about 8 billion.",
            explanation:
              "2% of 3.5 billion is about 70 million; 0.9% of 8 billion is about 72 million. A smaller rate on a much bigger base gives a similar total. Migration moves people between countries but does not change the world total.",
            guideRef: "billions-timeline",
          },
        ],
      },
      {
        id: "pgrow-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          {
            id: "pgrow-mcq-p2-q01",
            question: "In which year did world population reach 3 billion?",
            options: ["1927", "1945", "1960", "1974"],
            answerIndex: 2,
            hint: "It was only 33 years after the 2 billion milestone.",
            explanation:
              "3 billion was reached in 1960, 33 years after 2 billion (1927). 1974 is the 4 billion milestone.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-mcq-p2-q02",
            question: "What does 'natural increase' mean?",
            options: [
              "Population growth when the birth rate is higher than the death rate",
              "Population growth caused by people moving into a country",
              "The total population of a country divided by its area",
              "The number of babies born each year",
            ],
            answerIndex: 0,
            hint: "'Natural' means it does not include migration.",
            explanation:
              "Natural increase is the growth caused by births exceeding deaths. Growth from people moving in is net migration, which is not 'natural'.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p2-q03",
            question: "Which of these was part of the British Agricultural Revolution (about 1700 to 1850)?",
            options: ["Antibiotics", "Vaccination against smallpox", "Tractors and combine harvesters", "Crop rotation and selective breeding"],
            answerIndex: 3,
            hint: "Think of farming methods that needed no engines.",
            explanation:
              "Crop rotation (the Norfolk four-course system) and selective breeding raised food output in the 1700s. Tractors and combine harvesters came in the 20th century, much later.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p2-q04",
            question: "What is the infant mortality rate?",
            options: [
              "Deaths of children under 5 per 100 children",
              "Deaths of babies under 1 year old per 1,000 live births",
              "Deaths of all people per 1,000 population",
              "The number of babies born per 1,000 women",
            ],
            answerIndex: 1,
            hint: "An infant is a baby in its first year of life.",
            explanation:
              "Infant mortality = deaths of babies under one year old per 1,000 live births. Deaths of all people per 1,000 is the crude death rate.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p2-q05",
            question: "What does the total fertility rate (TFR) measure?",
            options: [
              "The number of births per 1,000 people",
              "The average number of children a woman is expected to have in her lifetime",
              "The percentage of women who have children",
              "The number of children in a country under the age of 15",
            ],
            answerIndex: 1,
            hint: "It is the measure where the world average is about 2.3.",
            explanation:
              "TFR is the average number of children per woman over her lifetime (world about 2.3). Births per 1,000 people is the crude birth rate, a different measure.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p2-q06",
            question: "What does 'sanitation' mean?",
            options: [
              "Giving people vaccinations",
              "Building more hospitals",
              "Growing more food",
              "Safely removing and treating sewage and waste",
            ],
            answerIndex: 3,
            hint: "Think of Bazalgette's work in London.",
            explanation:
              "Sanitation is the safe disposal of sewage and waste, often together with clean water supply. Vaccinations are medical care, a separate cause of falling death rates.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p2-q07",
            question: "Which is an example of an ANTI-natalist policy?",
            options: [
              "China's one-child policy (1979 to 2015)",
              "Singapore's Baby Bonus",
              "Paid parental leave in Sweden",
              "Cheaper childcare in France",
            ],
            answerIndex: 0,
            hint: "'Anti' means against: this policy tries to reduce births.",
            explanation:
              "China's one-child policy aimed to cut births. The Baby Bonus is pro-natalist: it tries to increase births.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-mcq-p2-q08",
            question: "What is Singapore's Baby Bonus scheme designed to do?",
            options: [
              "Reduce the number of births",
              "Attract foreign workers",
              "Encourage couples to have more children",
              "Pay for school fees for older children",
            ],
            answerIndex: 2,
            hint: "Singapore's fertility rate is very low.",
            explanation:
              "The Baby Bonus (from 2001) gives cash gifts and savings top-ups to encourage births, a pro-natalist policy. Reducing births was the aim of the much older Stop at Two campaign (1972).",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-mcq-p2-q09",
            question: "What was Singapore's resident total fertility rate in 2023?",
            options: ["About 2.1", "About 1.5", "About 3.0", "About 0.97"],
            answerIndex: 3,
            hint: "It fell below 1 for the first time.",
            explanation:
              "Singapore's TFR was 0.97 in 2023, among the lowest in the world. 2.1 is replacement level, which Singapore has been below since the late 1970s.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-mcq-p2-q10",
            question: "What did engineer Joseph Bazalgette build in London after the Great Stink of 1858?",
            options: ["The first hospital", "A huge network of sewers", "The first railway", "A vaccination centre"],
            answerIndex: 1,
            hint: "The Great Stink came from the River Thames.",
            explanation:
              "Bazalgette built a vast sewer system that carried waste away from the Thames, cutting cholera deaths. Hospitals and vaccines are medical improvements, not engineering ones.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p2-q11",
            question: "A country has a birth rate of 25 per 1,000 and a death rate of 5 per 1,000. What is its natural increase rate?",
            options: ["2.0% a year", "0.2% a year", "20% a year", "3.0% a year"],
            answerIndex: 0,
            hint: "Subtract, then divide by 10.",
            explanation:
              "25 - 5 = 20 per 1,000 = 2.0%. 20% is wrong because the 20 is per 1,000, not per 100.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p2-q12",
            question: "Why does a fall in child mortality usually lead, a generation later, to a fall in birth rates?",
            options: [
              "Governments automatically fine families once child mortality falls",
              "Hospitals provide contraception to every mother",
              "Parents no longer need extra babies as 'insurance' against some dying",
              "Healthy children make parents less fertile",
            ],
            answerIndex: 2,
            hint: "Think about why families in the past had 'spare' children.",
            explanation:
              "When parents are confident their children will survive, they do not need to have extra babies to make sure some live to adulthood. Falling child mortality does not trigger automatic government fines or reduce biological fertility.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-mcq-p2-q13",
            question: "What was the Green Revolution of the 1960s?",
            options: [
              "A campaign to plant forests in Europe",
              "The spread of solar power",
              "The spread of high-yield crops, fertilisers and irrigation in Asia and Latin America",
              "A movement to reduce car use",
            ],
            answerIndex: 2,
            hint: "It helped countries like India grow much more rice and wheat.",
            explanation:
              "The Green Revolution used high-yield seeds, fertilisers and irrigation to boost harvests, helping avoid famine. Despite the name, it was not about forests or the environment.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p2-q14",
            question: "Roughly how did global life expectancy change between 1950 and today?",
            options: [
              "From about 46 years to about 73 years",
              "From about 70 years to about 75 years",
              "From about 30 years to about 90 years",
              "It has stayed about the same",
            ],
            answerIndex: 0,
            hint: "It increased by more than 25 years.",
            explanation:
              "Global life expectancy rose from about 46 in 1950 to about 73 today, thanks mainly to fewer child deaths. 90 years is far above even the highest national averages.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p2-q15",
            question: "What is 'population momentum'?",
            options: [
              "The speed at which people migrate to cities",
              "Continued population growth after fertility falls, because many young people are still to become parents",
              "A sudden rise in births after a war",
              "The fall in population when death rates rise",
            ],
            answerIndex: 1,
            hint: "Think of a heavy object that keeps moving after you stop pushing.",
            explanation:
              "Momentum means a youthful population keeps growing for decades even after fertility drops near replacement, because so many people are entering child-bearing age. A rise in births after a war is called a baby boom.",
            guideRef: "exponential-growth",
          },
          {
            id: "pgrow-mcq-p2-q16",
            question: "In which year did China's population fall for the first time since 1961?",
            options: ["1979", "2000", "2015", "2022"],
            answerIndex: 3,
            hint: "It was the year before India overtook China.",
            explanation:
              "China's population fell in 2022, and India overtook it in 2023. 1979 is when the one-child policy began.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p2-q17",
            question: "After 1950, death rates in many lower-income countries fell much faster than they had in Europe. Why?",
            options: [
              "Birth rates rose at the same time",
              "Vaccines, antibiotics and clean-water methods arrived all at once instead of slowly over 150 years",
              "These countries had cooler climates",
              "People in these countries moved to Europe",
            ],
            answerIndex: 1,
            hint: "Europe had to invent these improvements; other countries could adopt them.",
            explanation:
              "Europe developed farming, sanitation and medicine gradually from 1750 onwards. Later-developing countries received many of these at once after 1950, so death rates fell rapidly. Climate has little to do with it.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p2-q18",
            question: "A population grows at 0.5% a year. Using the rule of 70, what is its doubling time?",
            options: ["35 years", "70 years", "140 years", "350 years"],
            answerIndex: 2,
            hint: "Dividing by a number smaller than 1 makes the answer bigger.",
            explanation:
              "70 / 0.5 = 140 years. 35 years would be 70 / 2, the doubling time at 2%.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p2-q19",
            question: "Country X has 10 million people, a birth rate of 35 per 1,000 and a death rate of 10 per 1,000. Ignoring migration, about how many people does it add in a year?",
            options: ["250,000", "25,000", "2.5 million", "350,000"],
            answerIndex: 0,
            hint: "Natural increase per 1,000 x number of thousands of people.",
            explanation:
              "Natural increase = 25 per 1,000. 10 million is 10,000 thousands, so 25 x 10,000 = 250,000. 350,000 would be the number of births alone, forgetting to subtract deaths.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p2-q20",
            question: "Growth rates: Country A 3.5%; Country B 1.0%; Country C 0.2%; Country D 2.0%. Which country has the LONGEST doubling time?",
            options: ["Country A", "Country B", "Country D", "Country C"],
            answerIndex: 3,
            hint: "The slower the growth, the longer it takes to double.",
            explanation:
              "Country C: 70 / 0.2 = 350 years. Country A has the SHORTEST doubling time (70 / 3.5 = 20 years), which is a common mix-up.",
            guideRef: "birth-death-rates",
          },
        ],
      },
      {
        id: "pgrow-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "pgrow-mcq-p3-q01",
            question: "In which year did world population reach 7 billion?",
            options: ["1999", "2011", "2017", "2022"],
            answerIndex: 1,
            hint: "It was about 11 to 12 years before the 8 billion milestone.",
            explanation:
              "7 billion was reached in 2011; 8 billion followed in November 2022. 1999 was the 6 billion milestone.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-mcq-p3-q02",
            question: "What does 'sub-Saharan Africa' mean?",
            options: [
              "The countries of North Africa along the Mediterranean",
              "Only the countries in the Sahara Desert",
              "The countries of Africa's east coast only",
              "The part of Africa south of the Sahara Desert",
            ],
            answerIndex: 3,
            hint: "'Sub' means below.",
            explanation:
              "Sub-Saharan Africa is the large region south of the Sahara, including Niger, Nigeria and the DR Congo. North African countries like Egypt are usually grouped separately.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p3-q03",
            question: "Approximately how many people lived in India when it became the world's most populous country in 2023?",
            options: ["About 1.43 billion", "About 430 million", "About 2.4 billion", "About 1 billion"],
            answerIndex: 0,
            hint: "It is just above China's total.",
            explanation:
              "India had about 1.43 billion people in 2023, just more than China. 1 billion was India's population around the year 2000.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p3-q04",
            question: "Which regions have the slowest growing or shrinking populations today?",
            options: [
              "Sub-Saharan Africa and South Asia",
              "Central America and West Africa",
              "Europe and East Asia",
              "The Middle East and North Africa",
            ],
            answerIndex: 2,
            hint: "Think of Japan, South Korea, Italy and Germany.",
            explanation:
              "Europe and East Asia have very low fertility and ageing populations; several countries are shrinking. Sub-Saharan Africa is the fastest-growing region, the opposite.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p3-q05",
            question: "Niger's population grows by roughly 3.5% a year. About how long would it take to double?",
            options: ["About 20 years", "About 35 years", "About 70 years", "About 245 years"],
            answerIndex: 0,
            hint: "Rule of 70.",
            explanation:
              "70 / 3.5 = 20 years. 245 years comes from multiplying 70 by 3.5 instead of dividing.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p3-q06",
            question: "What did Thomas Malthus argue in 1798?",
            options: [
              "New technology will always solve food shortages",
              "Population tends to grow faster than food supply, leading to famine and disease",
              "Birth rates fall when countries become rich",
              "Migration is the main cause of population growth",
            ],
            answerIndex: 1,
            hint: "He was a pessimist about food.",
            explanation:
              "Malthus believed population would outgrow food and be checked by famine, disease and war. The idea that technology will solve shortages is Boserup's more optimistic view.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-mcq-p3-q07",
            question: "Which idea is most closely linked to Ester Boserup (1965)?",
            options: [
              "Population growth always ends in famine",
              "Governments should limit families to one child",
              "World population will peak in 2030",
              "Population pressure drives people to invent new ways to produce more food",
            ],
            answerIndex: 3,
            hint: "'Necessity is the mother of invention.'",
            explanation:
              "Boserup argued rising population encourages farming innovation, so food supply can keep up. 'Population growth always ends in famine' is closer to Malthus.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-mcq-p3-q08",
            question: "What is a population 'projection'?",
            options: [
              "An exact count of everyone in a country",
              "A map of where people live",
              "An estimate of future population based on assumptions about births, deaths and migration",
              "A government target for population size",
            ],
            answerIndex: 2,
            hint: "It is about the future, and it could turn out wrong.",
            explanation:
              "A projection estimates the future using assumptions, so it has uncertainty. An exact count of everyone is a census.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-mcq-p3-q09",
            question: "According to the UN's central projection, about how many people will live on Earth in 2050?",
            options: ["About 8.2 billion", "About 9.7 billion", "About 12 billion", "About 15 billion"],
            answerIndex: 1,
            hint: "It is still below the peak of about 10.3 billion.",
            explanation:
              "The UN projects about 9.7 billion in 2050, rising to a peak of about 10.3 billion in the mid-2080s. 12 billion is only at the very top of the uncertainty range for 2100.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-mcq-p3-q10",
            question: "Which country has the lowest total fertility rate in the world, at about 0.7?",
            options: ["South Korea", "Niger", "India", "USA"],
            answerIndex: 0,
            hint: "It is an East Asian country with very expensive education and housing.",
            explanation:
              "South Korea's TFR is about 0.7, the lowest in the world, even lower than Singapore's 0.97. Niger has one of the HIGHEST rates.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-mcq-p3-q11",
            question: "What is a 'demographic dividend'?",
            options: [
              "A cash payment to parents for each new baby",
              "The money a government saves when the population shrinks",
              "A tax on large families",
              "An economic boost when a large share of the population is of working age",
            ],
            answerIndex: 3,
            hint: "It happens after birth rates fall but before the population becomes old.",
            explanation:
              "When fertility falls, a big generation of working-age adults with fewer dependants can boost the economy. A cash payment per baby is a pro-natalist incentive like the Baby Bonus.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-mcq-p3-q12",
            question: "India's fertility rate (about 2.0) is below replacement level. Why is its population still growing?",
            options: [
              "Large numbers of people are migrating into India",
              "Death rates are rising",
              "Its young population means many people are still entering parenthood (population momentum)",
              "The government pays families to have more children",
            ],
            answerIndex: 2,
            hint: "Look at the age structure, not just children per woman.",
            explanation:
              "India has a very large young population, so even with about 2 children per woman there are many births. This is population momentum. India actually has more emigration than immigration.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p3-q13",
            question: "The UN projects Nigeria's population could reach about what size by 2050?",
            options: ["About 100 million", "About 375 million", "About 1 billion", "About 225 million"],
            answerIndex: 1,
            hint: "It would put Nigeria level with the USA, behind only India and China.",
            explanation:
              "Projections suggest about 375 million by 2050. About 225 million is roughly Nigeria's population today, not its 2050 projection.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p3-q14",
            question: "When describing a pattern on a map, what does 'TEA' stand for?",
            options: [
              "Trend, Example, Anomaly",
              "Text, Evidence, Analysis",
              "Time, Energy, Area",
              "Topic, Explain, Argue",
            ],
            answerIndex: 0,
            hint: "Start with the general pattern, then a named place, then an exception.",
            explanation:
              "TEA = Trend (the overall pattern), Example (a named place with data) and Anomaly (a place that does not fit). 'Text, Evidence, Analysis' sounds sensible but is not the geography technique.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p3-q15",
            question: "In general, countries with low birth rates grow slowly. Which is an anomaly to this pattern?",
            options: [
              "Japan, whose population is falling",
              "Niger, which has a high birth rate",
              "Singapore, which grows mainly through immigration despite very low fertility",
              "Italy, which has natural decrease",
            ],
            answerIndex: 2,
            hint: "Look for a low-birth-rate country that is still growing.",
            explanation:
              "Singapore has one of the world's lowest fertility rates but its population has grown because of immigration, so it breaks the pattern. Japan and Italy fit the pattern (low births, slow or negative growth).",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p3-q16",
            question: "Roughly how many people live in the city of Lagos, Nigeria?",
            options: ["About 1 to 2 million", "About 50 million", "About 5 million", "About 15 to 17 million (20 million+ in the wider metro area)"],
            answerIndex: 3,
            hint: "Lagos is one of Africa's largest megacities.",
            explanation:
              "Estimates vary but Lagos has around 15 to 17 million people, with over 20 million in the wider metropolitan area. 50 million would be larger than any city on Earth.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p3-q17",
            question: "Which combination best explains Niger's very high fertility rate?",
            options: [
              "Early marriage, few girls completing secondary school and a mostly rural farming economy",
              "High incomes and generous pensions",
              "A government one-child policy",
              "A very old population with few young adults",
            ],
            answerIndex: 0,
            hint: "Think about the CHEAP factors working in reverse.",
            explanation:
              "In Niger most girls marry before 18, few finish secondary school and children help on farms, all of which keep fertility high. Generous pensions would reduce the need for many children, so they would lower fertility.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p3-q18",
            question: "Niger's median age is about 15. What does this tell you?",
            options: [
              "Most people in Niger die at 15",
              "Half of the population is younger than about 15",
              "The average woman has 15 children",
              "Only 15% of people are children",
            ],
            answerIndex: 1,
            hint: "The median is the middle value when everyone is lined up by age.",
            explanation:
              "A median age of 15 means half the population is under 15, so huge numbers will soon become parents (momentum). It is not a life expectancy, so 'die at 15' is wrong.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-mcq-p3-q19",
            question: "Country A: birth rate 40, death rate 35 per 1,000. Country B: birth rate 20, death rate 5 per 1,000. Which statement is correct?",
            options: [
              "A grows faster because it has the higher birth rate",
              "Both grow at the same rate",
              "A grows at 4% and B at 2%",
              "B grows faster: 1.5% a year compared with A's 0.5%",
            ],
            answerIndex: 3,
            hint: "Growth depends on the GAP between the two rates.",
            explanation:
              "A: 40 - 35 = 5 per 1,000 = 0.5%. B: 20 - 5 = 15 per 1,000 = 1.5%. A high birth rate alone does not mean fast growth if the death rate is also high.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p3-q20",
            question: "The UN says over half of world population growth to 2050 will happen in just eight countries. Which list contains ONLY countries from that group?",
            options: [
              "India, China, USA, Brazil",
              "Japan, Nigeria, Egypt, Italy",
              "Nigeria, Pakistan, Ethiopia, Tanzania",
              "Germany, Ethiopia, Russia, Pakistan",
            ],
            answerIndex: 2,
            hint: "The group is dominated by African and South Asian countries with high fertility.",
            explanation:
              "The eight are the DR Congo, Egypt, Ethiopia, India, Nigeria, Pakistan, the Philippines and Tanzania. China, Japan, Italy, Germany and Russia all have low fertility and are shrinking or about to shrink.",
            guideRef: "fastest-growth-today",
          },
        ],
      },
      {
        id: "pgrow-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "pgrow-mcq-p4-q01",
            question: "In which year did world population reach 5 billion?",
            options: ["1987", "1974", "1999", "1960"],
            answerIndex: 0,
            hint: "It was 13 years after 4 billion (1974).",
            explanation:
              "1974 + 13 = 1987. 1999 is the 6 billion milestone.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-mcq-p4-q02",
            question: "What happened during the 'lag phase' of the world population J-curve?",
            options: [
              "Population fell steadily for thousands of years",
              "Population grew very rapidly",
              "Population grew very slowly because high death rates almost cancelled out high birth rates",
              "Birth rates were very low",
            ],
            answerIndex: 2,
            hint: "It is the long, nearly flat part of the curve.",
            explanation:
              "For most of history both birth and death rates were high, so numbers rose only slowly. Birth rates were actually high, not low, during this phase.",
            guideRef: "exponential-growth",
          },
          {
            id: "pgrow-mcq-p4-q03",
            question: "What shape of population graph shows growth that slows down and levels off?",
            options: ["A J-curve", "An S-curve", "A straight line", "A U-curve"],
            answerIndex: 1,
            hint: "Think of a letter that starts flat, rises steeply, then flattens again.",
            explanation:
              "An S-curve rises then levels off as growth slows. A J-curve keeps rising steeply.",
            guideRef: "exponential-growth",
          },
          {
            id: "pgrow-mcq-p4-q04",
            question: "How did the Industrial Revolution help death rates to fall over time?",
            options: [
              "It made cities cleaner straight away",
              "It reduced the number of factories",
              "It made people have fewer children",
              "It created wealth and transport (railways, steamships) to move food and fund public health",
            ],
            answerIndex: 3,
            hint: "Think about money and moving goods.",
            explanation:
              "Industrial wealth and transport moved food quickly to where it was needed and paid for sewers, water and hospitals. Early industrial cities were actually very unhealthy, so 'cleaner straight away' is wrong.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p4-q05",
            question: "Which improvement would most reduce deaths of babies from diarrhoea?",
            options: ["Building more roads", "Building more factories", "More doctors in big city hospitals", "Clean piped water and safe sewage disposal"],
            answerIndex: 3,
            hint: "Diarrhoea is mostly spread through dirty water.",
            explanation:
              "Diarrhoeal diseases are waterborne, so clean water and sanitation prevent them at source. City hospitals help, but they do not stop the infections happening in the first place.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p4-q06",
            question: "What does 'contraception' mean?",
            options: [
              "Methods that prevent pregnancy",
              "Medicines that cure infections",
              "Care for babies after birth",
              "A government limit on family size",
            ],
            answerIndex: 0,
            hint: "'Contra' means against; 'ception' comes from conception.",
            explanation:
              "Contraception is any method used to prevent pregnancy, allowing couples to plan family size. A government limit on family size is an anti-natalist policy, not contraception itself.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-mcq-p4-q07",
            question: "Why does a woman with a well-paid career often choose to have fewer children?",
            options: [
              "Educated women are less fertile",
              "The law forbids it",
              "Having children has a high opportunity cost in lost income and career progress",
              "Employers pay her not to have children",
            ],
            answerIndex: 2,
            hint: "Opportunity cost is what you give up to do something.",
            explanation:
              "The time spent raising children could otherwise be spent earning and building a career, so each child 'costs' more. Education does not reduce biological fertility.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-mcq-p4-q08",
            question: "What is an 'ageing population'?",
            options: [
              "A population where life expectancy is falling",
              "A population in which the proportion of older people is rising",
              "A population with many young children",
              "A population that has existed for a long time",
            ],
            answerIndex: 1,
            hint: "It is about proportions, caused by low birth rates and long lives.",
            explanation:
              "An ageing population has a rising share of older people (e.g. 65+), as in Japan and Singapore. Many young children indicates a youthful population, the opposite.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-mcq-p4-q09",
            question: "Which of these would be most likely to INCREASE a country's birth rate?",
            options: [
              "High infant mortality",
              "More girls going to university",
              "Rapid urbanisation",
              "Free contraception",
            ],
            answerIndex: 0,
            hint: "Which one makes families want 'spare' children?",
            explanation:
              "When many babies die, parents tend to have more children to make sure some survive. The other three all tend to REDUCE birth rates.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-mcq-p4-q10",
            question: "The Black Death (1347 to 1351) killed around a third or more of Europe's population. What does this show about the period before about 1750?",
            options: [
              "Birth rates were very low",
              "Population always grew steadily",
              "Migration was the main cause of change",
              "High and unpredictable death rates kept population growth very slow",
            ],
            answerIndex: 3,
            hint: "Think about why the J-curve stays flat for so long.",
            explanation:
              "Plague, famine and war repeatedly pushed death rates up, cancelling out high birth rates, so growth was slow and uneven. Birth rates were high, not low.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-mcq-p4-q11",
            question: "How long did it take the world to grow from 6 billion to 7 billion?",
            options: ["About 6 years", "About 12 years", "About 25 years", "About 33 years"],
            answerIndex: 1,
            hint: "6 billion in 1999, 7 billion in 2011.",
            explanation:
              "2011 - 1999 = 12 years. 33 years was the gap between 2 and 3 billion (1927 to 1960).",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-mcq-p4-q12",
            question: "World population was about 2.5 billion in 1950 and 8.0 billion in 2022. What is the percentage increase?",
            options: ["About 320%", "About 55%", "About 220%", "About 5.5%"],
            answerIndex: 2,
            hint: "% change = (new - old) / old x 100.",
            explanation:
              "(8.0 - 2.5) / 2.5 x 100 = 5.5 / 2.5 x 100 = 220%. 320% is the new value as a percentage of the old (8.0 / 2.5 = 3.2), not the increase.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-mcq-p4-q13",
            question: "Smallpox was declared eradicated (wiped out worldwide) in which year?",
            options: ["1796", "1854", "1928", "1980"],
            answerIndex: 3,
            hint: "It followed a global vaccination campaign in the 1960s and 1970s.",
            explanation:
              "Smallpox was declared eradicated in 1980. 1796 is when Jenner created the first smallpox vaccine.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-mcq-p4-q14",
            question: "Which formula correctly gives a country's total population change?",
            options: [
              "(Births - deaths) + (immigrants - emigrants)",
              "Births + deaths + migrants",
              "Births - immigrants",
              "Deaths - births",
            ],
            answerIndex: 0,
            hint: "Natural change plus net migration.",
            explanation:
              "Total change = natural change (births minus deaths) plus net migration (people in minus people out). 'Deaths - births' only gives natural decrease and ignores migration.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p4-q15",
            question: "When was China's one-child policy in force?",
            options: ["1949 to 1975", "1979 to 2015", "2000 to 2020", "1960 to 1990"],
            answerIndex: 1,
            hint: "It ended when China switched to a two-child policy.",
            explanation:
              "The policy was introduced in 1979 and replaced by a two-child policy from 2016 (announced in 2015). 1949 is when the People's Republic of China was founded.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-mcq-p4-q16",
            question: "The rule of 70 gives an estimated doubling time. What does it assume?",
            options: [
              "That migration is the only cause of growth",
              "That the death rate is zero",
              "That the growth rate stays the same over the whole period",
              "That every woman has exactly two children",
            ],
            answerIndex: 2,
            hint: "Would Niger really keep growing at 3.5% for ever?",
            explanation:
              "The rule assumes a constant growth rate. In reality growth rates usually change (e.g. falling as fertility drops), so the doubling time is only an estimate. It does not assume zero deaths.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p4-q17",
            question: "The world has about 8 billion people, a birth rate of about 17 and a death rate of about 8 per 1,000. Roughly how many people are added each year?",
            options: ["About 72 million", "About 7.2 million", "About 720 million", "About 136 million"],
            answerIndex: 0,
            hint: "9 per 1,000 of 8 billion.",
            explanation:
              "8 billion is 8 million thousands; 9 x 8 million = 72 million. 136 million is the number of births alone (17 x 8 million), forgetting deaths.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-mcq-p4-q18",
            question: "The UN's projection for 2100 ranges from under 9 billion to over 12 billion. Which statement best explains why the range is so wide?",
            options: [
              "The UN does not know how many people are alive today",
              "Migration between countries will increase",
              "Death rates are expected to rise sharply",
              "Small differences in future fertility rates add up to very large differences over 75 years",
            ],
            answerIndex: 3,
            hint: "Remember how exponential growth magnifies small differences.",
            explanation:
              "If women average even 0.5 children more or fewer than expected, the total by 2100 changes by billions. Migration does not change the world total at all.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-mcq-p4-q19",
            question: "Which statement best represents the 'over-consumption' side of the population debate?",
            options: [
              "Countries with high birth rates cause most environmental damage",
              "The environmental impact of a person depends heavily on how much they consume, so rich countries' lifestyles matter more than numbers",
              "World population will keep growing for ever",
              "Food supply will always fall short of population",
            ],
            answerIndex: 1,
            hint: "Compare the carbon footprint of a person in Niger with one in a high-income country.",
            explanation:
              "Over-consumption arguments point out that the richest people cause a large share of emissions, so how people live matters more than how many there are. Blaming high-birth-rate countries alone is the opposite view and ignores very different consumption levels.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-mcq-p4-q20",
            question: "A country has a birth rate of 9, a death rate of 11 and net migration of +5 per 1,000 people per year. What is its overall growth rate?",
            options: ["-0.2% a year", "+2.5% a year", "+0.3% a year", "+0.5% a year"],
            answerIndex: 2,
            hint: "Natural change first, then add migration, then divide by 10.",
            explanation:
              "Natural change = 9 - 11 = -2 per 1,000. Add net migration: -2 + 5 = +3 per 1,000 = +0.3%. -0.2% is only the natural decrease, ignoring migration.",
            guideRef: "birth-death-rates",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "pgrow-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "pgrow-qa-p1-q01",
            question: "Define the term 'birth rate'.",
            marks: 2,
            hint: "Say what is counted and what it is measured against.",
            modelAnswer: "The birth rate is the number of live births per 1,000 people in a population per year.",
            markScheme: [
              { point: "Number of (live) births", keywords: ["births", "babies born", "born"] },
              { point: "Per 1,000 people per year", keywords: ["1,000", "1000", "thousand", "per year", "each year"] },
            ],
            commonError: "Saying 'per woman', which describes the total fertility rate, or missing out the 'per 1,000'.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p1-q02",
            question: "State the approximate years in which the world's population reached (a) 1 billion and (b) 8 billion.",
            marks: 2,
            hint: "One is during the early Industrial Revolution; the other is very recent.",
            modelAnswer: "(a) About 1804. (b) 2022 (15 November 2022, according to the UN).",
            markScheme: [
              { point: "1 billion: about 1804 (accept 1800 to 1810)", keywords: ["1804", "1800", "1805", "early 1800s", "1803"] },
              { point: "8 billion: 2022", keywords: ["2022", "november 2022", "15 november"] },
            ],
            commonError: "Giving 2011 for 8 billion: that is the 7 billion milestone.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-qa-p1-q03",
            question: "Study the data. World population milestones: 1 billion 1804; 2 billion 1927; 3 billion 1960; 4 billion 1974; 5 billion 1987; 6 billion 1999; 7 billion 2011; 8 billion 2022. Describe how the time taken to add each billion has changed. Use data in your answer.",
            marks: 3,
            hint: "Calculate the gaps, then describe the overall trend and the most recent pattern.",
            modelAnswer:
              "The time taken to add each billion has fallen dramatically. The second billion took 123 years (1804 to 1927) but the third took only 33 years (1927 to 1960). Since the 1970s each billion has taken only about 11 to 14 years, e.g. 12 years from 6 billion (1999) to 7 billion (2011), so the gap has now levelled off at roughly 12 years.",
            markScheme: [
              { point: "Overall trend: the time taken has decreased / got shorter", keywords: ["decreas", "shorter", "less time", "fallen", "faster", "quicker"] },
              { point: "Uses data for early gap (e.g. 123 years or 33 years)", keywords: ["123", "33 years", "33 yr"] },
              { point: "Uses data for recent gaps (about 11 to 14 years) / notes levelling off", keywords: ["12 years", "11 years", "13 years", "14 years", "level", "constant"] },
            ],
            commonError: "Just listing the dates instead of calculating the gaps and describing the trend.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-qa-p1-q04",
            question: "A country has a birth rate of 38 per 1,000 and a death rate of 12 per 1,000. Calculate (a) its natural increase per 1,000 and (b) its natural increase rate as a percentage.",
            marks: 2,
            hint: "Subtract, then divide by 10.",
            modelAnswer: "(a) 38 - 12 = 26 per 1,000. (b) 26 / 10 = 2.6% per year.",
            markScheme: [
              { point: "26 per 1,000", keywords: ["26", "twenty-six", "twenty six"] },
              { point: "2.6%", keywords: ["2.6", "2 6", "two point six"] },
            ],
            commonError: "Writing 26% instead of 2.6%: the figure is per 1,000, not per 100.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p1-q05",
            question: "Explain the difference between linear growth and exponential growth. Use numbers to illustrate your answer.",
            marks: 3,
            hint: "One adds the same amount; the other grows by the same percentage.",
            modelAnswer:
              "Linear growth adds the same amount each period, e.g. 100, 110, 120, 130 (always +10). Exponential growth increases by the same percentage each period, e.g. 10% a year gives 100, 110, 121, 133. Because each increase is added to the base, the amount added gets bigger every time, so exponential growth speeds up, like populations where children become parents.",
            markScheme: [
              { point: "Linear = same amount added each time", keywords: ["same amount", "same number", "constant amount", "fixed amount", "adds the same"] },
              { point: "Exponential = same percentage / rate each time", keywords: ["percentage", "same rate", "per cent", "%", "proportion"] },
              { point: "Explains the increase gets bigger / illustrated with numbers", keywords: ["bigger", "larger", "speeds up", "accelerat", "121", "compound"] },
            ],
            commonError: "Saying exponential just means 'very fast'. It means growth by a constant percentage, which starts slowly.",
            guideRef: "exponential-growth",
          },
          {
            id: "pgrow-qa-p1-q06",
            question: "Describe the shape of the world population graph over the last 10,000 years and explain why it is called a J-curve.",
            marks: 4,
            hint: "Describe the two parts of the curve, then give a reason for each.",
            modelAnswer:
              "For thousands of years the line is almost flat (the lag phase): population grew very slowly because high death rates from famine, disease and war almost cancelled out high birth rates. From about 1750 the curve bends upwards and in the 20th century it rises extremely steeply. This is because the Agricultural and Industrial Revolutions and later medicine and sanitation cut death rates while birth rates stayed high. The long flat base and steep upright stroke look like the letter J.",
            markScheme: [
              { point: "Long flat / slow growth phase for most of history", keywords: ["flat", "slow", "lag", "gradual"] },
              { point: "Reason: high death rates (disease/famine) cancelled high birth rates", keywords: ["high death", "disease", "famine", "plague", "wars"] },
              { point: "Steep rise after about 1750 / in 20th century", keywords: ["steep", "rapid", "1750", "20th century", "shot up", "explosion"] },
              { point: "Reason: death rates fell (food, sanitation, medicine) while birth rates stayed high", keywords: ["medicine", "sanitation", "revolution", "vaccin", "food", "death rates fell"] },
            ],
            commonError: "Describing the shape without explaining WHY each part looks the way it does.",
            guideRef: "exponential-growth",
          },
          {
            id: "pgrow-qa-p1-q07",
            question: "Explain how the work of Dr John Snow in 1854 helped to reduce death rates.",
            marks: 3,
            hint: "Think about his map, what he found, and what changed afterwards.",
            modelAnswer:
              "John Snow mapped cholera deaths in Soho, London, and showed they clustered around the Broad Street water pump. This proved cholera was spread by contaminated water, not 'bad air'. His evidence helped persuade authorities to provide clean water and build sewers, which greatly reduced deaths from waterborne diseases.",
            markScheme: [
              { point: "Mapped cholera deaths / found cluster around a water pump", keywords: ["map", "pump", "broad street", "cluster"] },
              { point: "Showed cholera spread by dirty / contaminated water", keywords: ["water", "contaminat", "dirty", "waterborne"] },
              { point: "Led to clean water supply / sewers / sanitation reducing deaths", keywords: ["sewer", "sanitation", "clean water", "public health", "bazalgette"] },
            ],
            commonError: "Saying John Snow invented a cure or vaccine for cholera. He used a map as evidence.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-qa-p1-q08",
            question: "Describe two ways in which the British Agricultural Revolution increased food supply.",
            marks: 2,
            hint: "Think about new methods for crops and for animals.",
            modelAnswer:
              "Crop rotation (such as the Norfolk four-course system) kept soil fertile so fields did not need to be left empty. Selective breeding produced larger, more productive animals, and new machines such as Jethro Tull's seed drill (1701) planted seeds more efficiently.",
            markScheme: [
              { point: "Crop rotation / keeping soil fertile", keywords: ["crop rotation", "rotation", "norfolk", "fertile", "fallow"] },
              { point: "Selective breeding / seed drill / enclosure / new machinery", keywords: ["selective breeding", "breeding", "seed drill", "enclosure", "machine", "jethro tull"] },
            ],
            commonError: "Naming 20th-century methods (tractors, fertilisers) instead of 18th-century ones.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-qa-p1-q09",
            question: "Explain how access to contraception affects birth rates.",
            marks: 2,
            hint: "Think about choice.",
            modelAnswer:
              "Contraception allows couples to prevent pregnancy, so they can choose how many children to have and when. This usually leads to fewer, more widely spaced births, lowering the birth rate.",
            markScheme: [
              { point: "Contraception prevents pregnancy / allows choice or family planning", keywords: ["prevent", "choose", "choice", "family planning", "control"] },
              { point: "So fewer births / smaller families / lower birth rate", keywords: ["fewer children", "fewer births", "smaller famil", "lower birth", "lowering", "reduce"] },
            ],
            commonError: "Not explaining the link: just saying 'contraception lowers birth rates' gains only one mark.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-qa-p1-q10",
            question: "Describe how Singapore's population policies have changed since the 1970s, and explain why they changed.",
            marks: 4,
            hint: "Compare the 1972 campaign with policies from 1987 and 2001.",
            modelAnswer:
              "In 1972 Singapore introduced the anti-natalist Stop at Two campaign to slow rapid population growth. Fertility fell so fast that it dropped below replacement level (2.1) by the late 1970s. The government worried about an ageing population and a shortage of future workers, so in 1987 it switched to pro-natalist policy with Have Three or More (if you can afford it). Since 2001 the Baby Bonus has given cash gifts to parents, but fertility has kept falling, to 0.97 in 2023.",
            markScheme: [
              { point: "1970s anti-natalist policy: Stop at Two (1972)", keywords: ["stop at two", "anti-natalist", "antinatalist", "1972"] },
              { point: "Later pro-natalist policy: Have Three or More / Baby Bonus", keywords: ["have three", "baby bonus", "pro-natalist", "pronatalist", "1987", "2001"] },
              { point: "Reason: fertility fell below replacement / too low", keywords: ["below replacement", "2.1", "too low", "low fertility", "0 97"] },
              { point: "Reason: concern about ageing / fewer workers", keywords: ["ageing", "aging", "elderly", "workers", "workforce", "labour"] },
            ],
            commonError: "Describing the Baby Bonus only, without showing the change from anti-natalist to pro-natalist.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-qa-p1-q11",
            question: "The Philippines' population grows by about 1.4% a year and Nigeria's by about 2.4% a year. Use the rule of 70 to calculate the doubling time for each country, to the nearest year.",
            marks: 2,
            hint: "70 divided by the growth rate.",
            modelAnswer: "Philippines: 70 / 1.4 = 50 years. Nigeria: 70 / 2.4 = 29.2, about 29 years.",
            markScheme: [
              { point: "Philippines: 50 years", keywords: ["50 year", "50 yrs", "fifty", "philippines 50", "50"] },
              { point: "Nigeria: about 29 years", keywords: ["29 year", "29 2", "twenty nine", "nigeria 29", "29"] },
            ],
            commonError: "Dividing the rate by 70 instead of 70 by the rate.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p1-q12",
            question: "Niger has one of the highest fertility rates in the world (about 6 children per woman). Explain why.",
            marks: 4,
            hint: "Use the factors that lower birth rates elsewhere, but in reverse.",
            modelAnswer:
              "Most girls in Niger marry young (around three-quarters before 18), so they start having children early. Few girls complete secondary school, so they have fewer career options and less knowledge of contraception, which is not widely used. Most people live in rural areas and farm, so children are useful workers and look after parents in old age because there are few pensions. Child mortality is still high, so families have extra children to make sure some survive.",
            markScheme: [
              { point: "Early marriage", keywords: ["marry young", "early marriage", "child marriage", "married before 18", "young age"] },
              { point: "Low education of girls / women", keywords: ["education", "school", "literacy"] },
              { point: "Little use / access to contraception", keywords: ["contracep", "family planning", "birth control", "condom", "the pill"] },
              { point: "Rural farming economy / children as workers / no pensions / high child mortality", keywords: ["farm", "rural", "labour", "workers", "pension", "mortality"] },
            ],
            commonError: "Writing 'because they are poor' without explaining HOW poverty leads to more children.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-qa-p1-q13",
            question: "Explain why India overtook China as the world's most populous country in 2023.",
            marks: 3,
            hint: "Think about what was happening in each country.",
            modelAnswer:
              "India's population kept growing because it has a large young population (population momentum), even though its fertility has fallen to about 2.0. China's fertility had fallen to about 1.0, partly as a legacy of the one-child policy (1979 to 2015), and its population began to fall in 2022. So India, at about 1.43 billion, passed China.",
            markScheme: [
              { point: "India still growing / young population / momentum", keywords: ["young", "momentum", "still growing", "keeps growing", "youthful"] },
              { point: "China's very low fertility / one-child policy legacy", keywords: ["one-child", "one child", "low fertility", "low birth", "1.0"] },
              { point: "China's population began to fall (2022)", keywords: ["population fell", "population fall", "shrink", "declin", "2022"] },
            ],
            commonError: "Saying India has a much higher fertility rate than replacement: it is now about 2.0.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-qa-p1-q14",
            question: "What is replacement level fertility, and why is it about 2.1 rather than exactly 2.0?",
            marks: 2,
            hint: "Not every child survives to adulthood.",
            modelAnswer:
              "Replacement level fertility is the average number of children per woman needed for a population to replace itself in the long term, about 2.1. It is slightly above 2 because some children die before they grow up and have children themselves (and slightly more boys than girls are born).",
            markScheme: [
              { point: "Number of children per woman for a population to replace itself", keywords: ["replace", "same size", "stable", "stay the same"] },
              { point: "Extra 0.1 allows for children who die young", keywords: ["die", "death", "mortality", "survive"] },
            ],
            commonError: "Saying 2.1 is the number needed for growth. It only keeps the population stable in the long run.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p1-q15",
            question: "'The world's population explosion was caused by falling death rates, not by rising birth rates.' To what extent do you agree? Use examples in a PEEL-style answer.",
            marks: 6,
            hint: "Give evidence of death rates falling, check whether birth rates rose, and reach a judgement.",
            modelAnswer:
              "I largely agree. Point: the explosion happened because death rates fell while birth rates stayed high. Evidence: global life expectancy rose from about 46 in 1950 to about 73 today, thanks to vaccines (smallpox eradicated in 1980), antibiotics such as penicillin, the Green Revolution and clean water, for example Bazalgette's sewers in London after John Snow's 1854 cholera map. Explanation: birth rates did not rise much; they stayed high for a generation or more because families still expected some children to die and needed workers on farms. The widening gap between birth and death rates caused natural increase of over 2% a year by the 1960s. However, some argue that better nutrition did slightly increase fertility, and population momentum from earlier high birth rates also added to growth. Link: overall, falling death rates were the main cause, with birth rates only falling later.",
            markScheme: [
              { point: "Point: agrees that falling death rates were the main cause", keywords: ["i agree", "main cause", "death rates fell", "falling death", "mainly"] },
              { point: "Evidence of falling death rate / life expectancy data", keywords: ["life expectancy", "46", "73", "infant mortality", "1950"] },
              { point: "Named cause: medicine (vaccine / antibiotics)", keywords: ["vaccin", "antibiotic", "penicillin", "smallpox", "jenner", "fleming"] },
              { point: "Named cause: food / sanitation / clean water", keywords: ["sanitation", "sewer", "clean water", "green revolution", "agricultur", "snow"] },
              { point: "Explains birth rates stayed high (lag) so gap widened", keywords: ["stayed high", "remained high", "gap", "lag", "natural increase"] },
              { point: "Counter-point or judgement / momentum / nutrition", keywords: ["however", "although", "momentum", "overall", "on the other hand", "judgement"] },
            ],
            commonError: "Only listing medical advances without showing that birth rates stayed high, so the GAP widened.",
            guideRef: "why-death-rates-fell",
          },
        ],
      },
      {
        id: "pgrow-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "pgrow-qa-p2-q01",
            question: "Define the term 'death rate'.",
            marks: 2,
            hint: "Same units as the birth rate.",
            modelAnswer: "The death rate is the number of deaths per 1,000 people in a population per year.",
            markScheme: [
              { point: "Number of deaths", keywords: ["deaths", "people who die", "died", "dying"] },
              { point: "Per 1,000 people per year", keywords: ["1,000", "1000", "thousand", "per year", "each year"] },
            ],
            commonError: "Confusing the death rate with life expectancy or infant mortality.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p2-q02",
            question: "What is meant by 'natural decrease'? Name a country experiencing it.",
            marks: 2,
            hint: "Which rate is bigger?",
            modelAnswer: "Natural decrease is when the death rate is higher than the birth rate, so the population falls (unless there is immigration). Japan is an example.",
            markScheme: [
              { point: "Death rate higher than birth rate / more deaths than births", keywords: ["more deaths", "death rate is higher", "deaths exceed", "higher than the birth", "deaths than births"] },
              { point: "Named example (Japan, Italy, South Korea, China, etc.)", keywords: ["japan", "italy", "south korea", "korea", "china", "germany"] },
            ],
            commonError: "Naming a country that is shrinking only because of emigration rather than natural decrease.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p2-q03",
            question: "Study the data (per 1,000 people per year). Country A: birth rate 44, death rate 10. Country B: birth rate 10, death rate 9. Country C: birth rate 7, death rate 12. (a) Calculate the natural change rate (%) for each country. (b) Which country would take the shortest time to double its population?",
            marks: 4,
            hint: "Subtract, divide by 10, watch for negatives.",
            modelAnswer:
              "(a) A: 44 - 10 = 34 per 1,000 = 3.4%. B: 10 - 9 = 1 per 1,000 = 0.1%. C: 7 - 12 = -5 per 1,000 = -0.5% (natural decrease). (b) Country A, because it has the highest growth rate (70 / 3.4 is about 21 years).",
            markScheme: [
              { point: "Country A: 3.4%", keywords: ["3.4", "34 per", "a: 3.4", "a = 3.4"] },
              { point: "Country B: 0.1%", keywords: ["0.1", "1 per 1 000", "1 per 1000", "0 1 per"] },
              { point: "Country C: -0.5% / natural decrease", keywords: ["-0.5", "−0.5", "minus 0.5", "decrease"] },
              { point: "Country A doubles fastest (about 21 years)", keywords: ["country a", "a doubles", "21", "20.6"] },
            ],
            commonError: "Forgetting the negative sign for Country C, or saying C doubles fastest.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p2-q04",
            question: "The world's growth rate has fallen from about 2% a year in the 1960s to under 1% today, yet the world still adds around 70 million people a year. Explain why.",
            marks: 3,
            hint: "Think about the size of the base the percentage is applied to.",
            modelAnswer:
              "A percentage growth rate is applied to the whole population. In the 1960s the population was about 3.5 billion, so 2% added about 70 million. Today the population is over 8 billion, so even 0.9% adds about 70 million. The rate has halved, but the base has more than doubled, so the absolute number added stays high.",
            markScheme: [
              { point: "Growth rate is a percentage of the total population", keywords: ["percentage of", "proportion", "base", "applied to"] },
              { point: "Population is now much larger", keywords: ["larger", "bigger", "8 billion", "more people", "doubled"] },
              { point: "Uses figures to show a smaller % of a bigger number is similar", keywords: ["3.5 billion", "70 million", "0.9", "2%", "72 million"] },
            ],
            commonError: "Claiming birth rates have risen again. They have actually fallen.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-qa-p2-q05",
            question: "Explain how two different medical advances helped to reduce death rates.",
            marks: 4,
            hint: "Name the advance, then explain which deaths it prevented.",
            modelAnswer:
              "Vaccination, starting with Edward Jenner's smallpox vaccine in 1796, made people immune to deadly infectious diseases; smallpox was eradicated in 1980 and vaccines against measles and polio save millions of children. Antibiotics such as penicillin (discovered by Fleming in 1928) cure bacterial infections, so infected wounds, pneumonia and infections after childbirth stopped being death sentences.",
            markScheme: [
              { point: "Advance 1 named: vaccination", keywords: ["vaccin", "immunis", "jenner", "immuniz"] },
              { point: "Explains: prevents infectious diseases such as smallpox / measles", keywords: ["smallpox", "measles", "polio", "immune", "prevent"] },
              { point: "Advance 2 named: antibiotics / penicillin / hospitals / hygiene", keywords: ["antibiotic", "penicillin", "fleming", "hospital", "hygiene"] },
              { point: "Explains: cures bacterial infections / safer childbirth", keywords: ["infection", "bacteria", "cure", "childbirth", "pneumonia"] },
            ],
            commonError: "Naming two advances without explaining HOW each one reduced deaths.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-qa-p2-q06",
            question: "Explain how urbanisation can lead to lower birth rates.",
            marks: 3,
            hint: "Compare raising children on a farm and in a city flat.",
            modelAnswer:
              "Urbanisation means a growing share of people live in towns and cities. In rural farming areas children are an economic asset because they work on the land, but in cities children are in school and do not earn money. City housing is small and expensive, and city dwellers have better access to education, jobs for women and contraception, so families choose to have fewer children.",
            markScheme: [
              { point: "Children not needed as farm workers in cities", keywords: ["farm", "work on the land", "labour", "asset", "workers"] },
              { point: "Cities are expensive (housing, schooling) / small homes", keywords: ["expensive", "cost", "housing", "small home", "afford"] },
              { point: "Better access to contraception / education / jobs for women", keywords: ["contracep", "education", "career", "jobs for women", "school"] },
            ],
            commonError: "Saying 'cities are crowded so people have fewer children' without explaining the economic reasons.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-qa-p2-q07",
            question: "Define 'total fertility rate' and give the approximate world figure today.",
            marks: 2,
            hint: "It is measured per woman, not per 1,000 people.",
            modelAnswer: "The total fertility rate is the average number of children a woman is expected to have in her lifetime. The world figure is about 2.3.",
            markScheme: [
              { point: "Average number of children per woman (in her lifetime)", keywords: ["per woman", "each woman", "children a woman", "average number of children"] },
              { point: "World figure about 2.3 (accept 2.2 to 2.5)", keywords: ["2.3", "2 3", "2 2", "2 4", "2 5"] },
            ],
            commonError: "Confusing TFR with the crude birth rate (about 17 per 1,000).",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p2-q08",
            question: "Study the data on total fertility rate (children per woman, early 2020s): Niger 6.0; Chad 6.0; Nigeria 5.0; Pakistan 3.4; India 2.0; UK 1.5; China 1.0; Singapore 0.97; South Korea 0.7. Describe the pattern shown. Use TEA (Trend, Example, Anomaly).",
            marks: 4,
            hint: "Which continent has the highest rates? Which region the lowest? Is there anything surprising?",
            modelAnswer:
              "Trend: the highest fertility rates are in sub-Saharan Africa and the lowest in East Asia and Europe. Example: Niger and Chad have about 6 children per woman, three times replacement level, while South Korea has only 0.7. Anomaly / extra detail: South Asia is in between: Pakistan (3.4) is above replacement but India (2.0) is now slightly below replacement level of 2.1. Wealthy Asian city-states such as Singapore (0.97) are among the lowest in the world.",
            markScheme: [
              { point: "Trend: highest in (sub-Saharan) Africa", keywords: ["africa", "sub-saharan", "niger", "chad"] },
              { point: "Trend: lowest in East Asia / Europe", keywords: ["east asia", "europe", "korea", "china", "lowest"] },
              { point: "Example with data quoted", keywords: ["6 children", "6 0", "0 97", "0 7", "1 5"] },
              { point: "Anomaly / comparison to replacement level (2.1) / South Asia in between", keywords: ["anomaly", "2.1", "replacement", "pakistan", "india", "in between"] },
            ],
            commonError: "Listing every country in order instead of grouping them into a pattern.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-qa-p2-q09",
            question: "Explain what is meant by 'population momentum'.",
            marks: 3,
            hint: "Think about a population with lots of children.",
            modelAnswer:
              "Population momentum is the tendency of a population to keep growing even after fertility has fallen to (or below) replacement level. This happens because a young population has a large number of people who are about to reach child-bearing age. Even if each couple has only two children, the large number of couples means many births, so growth continues for decades, as in India.",
            markScheme: [
              { point: "Population keeps growing after fertility falls", keywords: ["keeps growing", "keep growing", "continues to grow", "still grow", "carry on growing"] },
              { point: "Because of a large young population / many future parents", keywords: ["young", "youthful", "child-bearing", "future parents", "many parents"] },
              { point: "Example or timescale (decades, e.g. India)", keywords: ["india", "decades", "many years", "nigeria", "generation"] },
            ],
            commonError: "Thinking momentum means fertility is rising. Fertility can be falling while momentum keeps growth going.",
            guideRef: "exponential-growth",
          },
          {
            id: "pgrow-qa-p2-q10",
            question: "Explain why death rates in many lower-income countries fell much faster after 1950 than they had done in Europe in the 1800s.",
            marks: 3,
            hint: "Europe had to invent the improvements; others could adopt them.",
            modelAnswer:
              "Europe's death rate fell slowly over about 150 years because farming, sanitation and medicine were invented step by step. After 1950, lower-income countries could adopt all these technologies at once: vaccines, antibiotics, insecticides against malaria, oral rehydration and clean water projects, often supported by international organisations such as the World Health Organization. So death rates fell in a few decades while birth rates stayed high, causing very rapid growth.",
            markScheme: [
              { point: "Europe invented improvements slowly / gradually", keywords: ["slowly", "gradual", "invented", "over 150", "step by step"] },
              { point: "Lower-income countries adopted existing technologies quickly / all at once", keywords: ["all at once", "at once", "adopt", "quickly", "existing", "imported"] },
              { point: "Named technologies or international aid (vaccines, antibiotics, WHO)", keywords: ["vaccin", "antibiotic", "world health", "foreign aid", "international aid", "insecticide"] },
            ],
            commonError: "Ignoring the comparison with Europe, which is the key part of the question.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-qa-p2-q11",
            question: "World population was 3 billion in 1960 and 8 billion in 2022. Calculate the percentage increase. Show your working.",
            marks: 2,
            hint: "% increase = (new - old) / old x 100.",
            modelAnswer: "(8-3)/3 x 100 = 5/3 x 100 = about 167%.",
            markScheme: [
              { point: "Correct method: (8 - 3) / 3 x 100", keywords: ["8 3", "5 3", "divided by 3", "divide by 3"] },
              { point: "Answer about 167% (accept 166.7%)", keywords: ["167", "166.7", "166"] },
            ],
            commonError: "Dividing by the new value (8) instead of the original value (3).",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-qa-p2-q12",
            question: "Explain two problems that a country with a low birth rate and an ageing population, such as Singapore or Japan, may face.",
            marks: 4,
            hint: "Think about workers, taxes, health care and pensions.",
            modelAnswer:
              "First, there will be fewer people of working age, so businesses face labour shortages and there are fewer taxpayers to fund public services; Singapore relies on foreign workers partly for this reason. Second, there will be more elderly people who need pensions, health care and eldercare, so government spending rises; for example Japan spends heavily on care homes and has rural villages and schools closing.",
            markScheme: [
              { point: "Problem 1: fewer workers / labour shortage", keywords: ["fewer workers", "labour shortage", "workforce", "working age", "worker"] },
              { point: "Explains: less tax / slower economy / need for migrants", keywords: ["tax", "economy", "migrant", "foreign workers", "productiv"] },
              { point: "Problem 2: more elderly needing pensions / health care", keywords: ["pension", "health care", "healthcare", "eldercare", "care home", "elderly"] },
              { point: "Explains: rising government costs / burden on young / closures", keywords: ["cost", "spending", "burden", "dependen", "closing"] },
            ],
            commonError: "Naming the problems without explaining their consequences.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-qa-p2-q13",
            question: "Compare the views of Thomas Malthus and Ester Boserup about population and food.",
            marks: 4,
            hint: "One is a pessimist, one an optimist.",
            modelAnswer:
              "Malthus (1798) argued that population grows faster than food supply, so eventually there would not be enough food and population would be reduced by famine, disease and war. Boserup (1965) argued the opposite: when population grows, people are forced to invent new farming methods to produce more food (necessity is the mother of invention). The Green Revolution of the 1960s, which boosted harvests in Asia, supports Boserup, while neo-Malthusians warn that climate change and soil loss could still limit food production.",
            markScheme: [
              { point: "Malthus: population grows faster than food", keywords: ["malthus", "faster than food", "outgrow", "outstrip"] },
              { point: "Malthus: leads to famine / disease / war (checks)", keywords: ["famine", "starv", "disease", "wars", "check"] },
              { point: "Boserup: population pressure leads to new farming technology", keywords: ["boserup", "invent", "technolog", "innovat", "necessity"] },
              { point: "Comparison / evidence (e.g. Green Revolution supports Boserup)", keywords: ["green revolution", "whereas", "however", "opposite", "evidence"] },
            ],
            commonError: "Describing both views without comparing them or giving any evidence.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-qa-p2-q14",
            question: "State the UN's projections for (a) world population in 2050 and (b) the peak population and when it is expected.",
            marks: 2,
            hint: "World Population Prospects 2024.",
            modelAnswer: "(a) About 9.7 billion in 2050. (b) A peak of about 10.3 billion in the mid-2080s.",
            markScheme: [
              { point: "About 9.7 billion in 2050", keywords: ["9.7", "9 7", "9 8", "almost 10"] },
              { point: "Peak about 10.3 billion in the mid-2080s", keywords: ["10.3", "2080", "2084", "mid-2080s"] },
            ],
            commonError: "Treating projections as certain facts, or saying population will grow for ever.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-qa-p2-q15",
            question: "'Educating girls is the most important factor in reducing birth rates.' Do you agree? Explain your answer, referring to other factors too.",
            marks: 6,
            hint: "Explain the education argument, then weigh it against contraception, child mortality, urbanisation and cost.",
            modelAnswer:
              "I mostly agree. Educated girls marry later and start families later, they have careers so children have a higher opportunity cost, and they know more about contraception and child health. Evidence: in Niger, where few girls finish secondary school and most marry before 18, women have about 6 children, whereas in Singapore, where women are highly educated, fertility is 0.97. However, other factors matter too. Contraception must actually be available: education is less effective without it. Falling child mortality matters because parents stop having 'insurance' babies. Urbanisation and the cost of children also reduce birth rates, as seen in Singapore's expensive housing. These factors are linked: education often comes with urbanisation and better health care. Overall, girls' education is probably the most powerful single factor, but it works best alongside access to contraception and health care.",
            markScheme: [
              { point: "Explains how education lowers fertility (later marriage / careers)", keywords: ["marry later", "later marriage", "career", "opportunity cost", "delay"] },
              { point: "Evidence: named country / data", keywords: ["niger", "singapore", "0.97", "6 children", "korea", "bangladesh"] },
              { point: "Other factor: contraception / family planning", keywords: ["contracep", "family planning", "birth control", "condom", "the pill"] },
              { point: "Other factor: lower child mortality / urbanisation / cost of children", keywords: ["mortality", "urbanis", "urbaniz", "cost", "city", "pension"] },
              { point: "Recognises factors are linked / interact", keywords: ["linked", "together", "interact", "combination", "connected"] },
              { point: "Reaches a supported judgement", keywords: ["overall", "conclusion", "i agree", "most important", "to a large extent", "judgement"] },
            ],
            commonError: "Writing only about education and never weighing it against other factors.",
            guideRef: "why-birth-rates-fall",
          },
        ],
      },
      {
        id: "pgrow-qa-p3",
        title: "Written Paper 3",
        questions: [
          {
            id: "pgrow-qa-p3-q01",
            question: "Explain how to turn a natural increase given 'per 1,000' into a growth rate percentage. Use the world figures (birth rate 17, death rate 8 per 1,000) as an example.",
            marks: 2,
            hint: "Per 1,000 to per 100.",
            modelAnswer: "Subtract the death rate from the birth rate (17 - 8 = 9 per 1,000), then divide by 10 to convert to per 100: 9 / 10 = 0.9% per year.",
            markScheme: [
              { point: "Divide the per 1,000 figure by 10", keywords: ["divide by 10", "divided by 10", "dividing by 10", "9 10", "over 10"] },
              { point: "Correct worked example: 9 per 1,000 = 0.9%", keywords: ["0.9", "0 9", "nought point nine", "zero point nine"] },
            ],
            commonError: "Multiplying by 10 or dividing by 100.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p3-q02",
            question: "Explain why a doubling time calculated with the rule of 70 is only an estimate.",
            marks: 2,
            hint: "What would have to stay the same for the answer to be right?",
            modelAnswer:
              "The rule of 70 assumes the growth rate stays the same every year. In reality growth rates change, for example as fertility falls or migration changes, so the population will probably take a different time to double.",
            markScheme: [
              { point: "Assumes growth rate stays constant", keywords: ["constant", "stays the same", "same rate", "does not change", "unchanged"] },
              { point: "Growth rates actually change (fertility falls / migration / events)", keywords: ["rate changes", "rates change", "fertility falls", "migration", "vary", "in reality"] },
            ],
            commonError: "Saying the rule is 'wrong'. It is a good approximation for a constant rate.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p3-q03",
            question: "Nigeria had about 225 million people in 2023 and a growth rate of about 2.4% a year. (a) Use the rule of 70 to estimate its doubling time. (b) Estimate its population if it doubled once. (c) The UN projects about 375 million by 2050. Suggest why this is lower than your estimate would suggest.",
            marks: 4,
            hint: "70 / 2.4; then double 225 million; then think about whether 2.4% will last.",
            modelAnswer:
              "(a) 70 / 2.4 = about 29 years. (b) 225 million x 2 = 450 million, by about 2052. (c) The UN expects Nigeria's fertility and growth rate to keep falling as more girls are educated, more people move to cities and contraception becomes more available, so growth will slow and the population will not double so quickly.",
            markScheme: [
              { point: "Doubling time about 29 years", keywords: ["29 year", "29 2", "twenty nine", "about 30 years"] },
              { point: "Doubled population about 450 million", keywords: ["450", "0.45 billion", "four hundred and fifty"] },
              { point: "Growth rate expected to fall / not constant", keywords: ["fall", "slow", "decrease", "not constant", "decline"] },
              { point: "Reason for falling fertility (education, urbanisation, contraception)", keywords: ["education", "urbanis", "urbaniz", "contracep", "city", "cities"] },
            ],
            commonError: "Treating the rule of 70 result as a certain prediction.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-qa-p3-q04",
            question: "Explain how the Green Revolution of the 1960s affected death rates in countries such as India.",
            marks: 3,
            hint: "What did it change, and why does that matter for deaths?",
            modelAnswer:
              "The Green Revolution introduced high-yield varieties of rice and wheat, along with fertilisers, pesticides and irrigation. This greatly increased harvests, so India avoided the famines many people had predicted. More food meant less starvation and better nutrition, so people (especially children) were better able to fight disease, and death rates fell.",
            markScheme: [
              { point: "Describes Green Revolution (high-yield crops / fertilisers / irrigation)", keywords: ["high-yield", "high yield", "fertiliser", "fertilizer", "irrigation", "new seeds"] },
              { point: "Increased food production / avoided famine", keywords: ["more food", "harvest", "famine", "yield", "production"] },
              { point: "Better nutrition so fewer deaths / resist disease", keywords: ["nutrition", "starv", "malnutrition", "healthier", "resist"] },
            ],
            commonError: "Thinking the Green Revolution was an environmental movement.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-qa-p3-q05",
            question: "Explain why improved sanitation was so important in reducing death rates, especially among children.",
            marks: 3,
            hint: "Which diseases are spread by dirty water and sewage?",
            modelAnswer:
              "Sanitation means safely removing sewage and waste, often with clean piped water. Without it, sewage contaminates drinking water and spreads diseases such as cholera, typhoid and diarrhoea. Babies and young children are most vulnerable because diarrhoea quickly dehydrates them, so clean water and sewers, such as Bazalgette's London system, saved huge numbers of young lives.",
            markScheme: [
              { point: "Sanitation separates sewage from drinking water", keywords: ["sewage", "sewer", "waste", "clean water", "drinking water"] },
              { point: "Prevents waterborne diseases (cholera / typhoid / diarrhoea)", keywords: ["cholera", "typhoid", "diarrhoea", "diarrhea", "waterborne"] },
              { point: "Children especially vulnerable / infant mortality falls", keywords: ["child", "babies", "infant", "dehydrat", "young"] },
            ],
            commonError: "Confusing sanitation with medicine.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-qa-p3-q06",
            question: "Explain the difference between anti-natalist and pro-natalist policies, giving a named example of each.",
            marks: 4,
            hint: "'Anti' means against; 'pro' means for.",
            modelAnswer:
              "Anti-natalist policies try to reduce the birth rate, for example China's one-child policy (1979 to 2015) or Singapore's Stop at Two campaign (1972). Pro-natalist policies try to increase the birth rate, for example Singapore's Baby Bonus (from 2001), which gives cash gifts and savings top-ups to parents.",
            markScheme: [
              { point: "Anti-natalist = reduce births", keywords: ["reduce birth", "reduce the birth", "lower birth", "fewer births", "fewer children", "discourage"] },
              { point: "Anti-natalist example (one-child policy / Stop at Two)", keywords: ["one-child", "one child", "stop at two", "china"] },
              { point: "Pro-natalist = increase births", keywords: ["increase birth", "increase the birth", "encourage", "more children", "raise birth", "more babies"] },
              { point: "Pro-natalist example (Baby Bonus / Have Three or More / France)", keywords: ["baby bonus", "have three", "france", "sweden", "singapore"] },
            ],
            commonError: "Getting the two terms the wrong way round.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-qa-p3-q07",
            question: "Explain why high infant and child mortality tends to lead to high birth rates.",
            marks: 2,
            hint: "Think about insurance.",
            modelAnswer:
              "When many babies and children die, parents have extra children to make sure that some survive to adulthood, to help with work and to care for them in old age. So high mortality encourages families to have more births.",
            markScheme: [
              { point: "Parents have extra children in case some die", keywords: ["in case", "insurance", "replace", "make sure", "some survive"] },
              { point: "Need children for work / care in old age", keywords: ["help with work", "old age", "look after", "care for", "labour", "farm"] },
            ],
            commonError: "Saying 'they want big families' without explaining the link to mortality.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-qa-p3-q08",
            question: "Study the data. World population growth rate: 1965 about 2.1%; 1990 about 1.7%; 2023 about 0.9%. (a) Describe the trend. (b) Calculate the fall in the growth rate between 1965 and 2023 in percentage points.",
            marks: 3,
            hint: "Percentage points means simply subtracting one % from the other.",
            modelAnswer:
              "(a) The world growth rate has fallen steadily since the 1960s, and the fall has been faster since 1990 (0.8 points in 33 years compared with 0.4 in 25 years). (b) 2.1 - 0.9 = 1.2 percentage points (the rate has more than halved).",
            markScheme: [
              { point: "Trend: growth rate has fallen / decreased", keywords: ["fallen", "decreas", "declin", "dropped", "fell"] },
              { point: "Uses data / notes faster fall after 1990 / more than halved", keywords: ["1990", "halved", "half", "0.8", "faster"] },
              { point: "Correct calculation: 1.2 percentage points", keywords: ["1.2", "1 2", "one point two"] },
            ],
            commonError: "Saying the population is falling. It is the growth RATE that is falling; the population is still rising.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-qa-p3-q09",
            question: "Explain how the introduction of pensions and savings schemes (such as Singapore's CPF) can affect birth rates.",
            marks: 2,
            hint: "Who looks after old people if there is no pension?",
            modelAnswer:
              "Without pensions, parents rely on their children to support them in old age, so they have many children. When pensions or savings schemes such as CPF provide for retirement, parents do not need as many children for security, so birth rates fall.",
            markScheme: [
              { point: "Without pensions, children support parents in old age", keywords: ["old age", "look after", "support", "care for", "security"] },
              { point: "Pensions reduce the need for many children so birth rate falls", keywords: ["fewer children", "less need", "don t need", "do not need", "lower birth", "birth rate fall"] },
            ],
            commonError: "Not linking pensions to the reason for having children.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-qa-p3-q10",
            question: "Nigeria's population is growing rapidly, and Lagos has around 15 to 17 million people. Explain two challenges that rapid population growth creates for Nigeria.",
            marks: 4,
            hint: "Think about services, jobs and housing for a young, growing population.",
            modelAnswer:
              "First, providing services: with about 40% or more of Nigerians under 15, the government must build many new schools and health clinics every year, and classrooms become overcrowded. Second, jobs and housing: millions of young people join the workforce each year, but there are not enough formal jobs, so unemployment is high and many people in Lagos live in informal settlements (slums) such as Makoko, without safe water or sanitation.",
            markScheme: [
              { point: "Challenge 1: services (schools / health care)", keywords: ["school", "education", "health", "hospital", "clinic", "services"] },
              { point: "Explains with detail (overcrowding / young population)", keywords: ["overcrowd", "young", "under 15", "teachers", "pressure"] },
              { point: "Challenge 2: jobs / housing / infrastructure", keywords: ["job", "unemploy", "housing", "slum", "informal", "traffic"] },
              { point: "Explains with detail (Lagos / slums / lack of water)", keywords: ["lagos", "makoko", "water", "sanitation", "congest"] },
            ],
            commonError: "Listing problems without linking them to rapid population growth.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-qa-p3-q11",
            question: "Explain why China's population began to fall in 2022.",
            marks: 3,
            hint: "Think about fertility over the previous 40 years.",
            modelAnswer:
              "China's fertility rate has been below replacement level for decades and is now about 1.0. The one-child policy (1979 to 2015) and rapid urbanisation, rising education and the high cost of housing and schooling all reduced births. With fewer births and an ageing population producing more deaths, deaths overtook births in 2022, so China had natural decrease.",
            markScheme: [
              { point: "Very low fertility / below replacement (about 1.0)", keywords: ["low fertility", "below replacement", "1.0", "low birth", "few births"] },
              { point: "Cause: one-child policy / cost of children / urbanisation", keywords: ["one-child", "one child", "cost", "urbanis", "urbaniz", "expensive"] },
              { point: "Deaths exceeded births / ageing population / natural decrease", keywords: ["more deaths", "deaths exceed", "ageing", "aging", "natural decrease", "elderly"] },
            ],
            commonError: "Saying China's population fell because of emigration.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-qa-p3-q12",
            question: "Explain why population projections for 2100 are uncertain.",
            marks: 3,
            hint: "What assumptions does a projection rely on?",
            modelAnswer:
              "Projections depend on assumptions about future fertility, mortality and migration. Small differences in fertility, such as women averaging 0.5 more or fewer children, add up to billions of people over 75 years because of exponential growth. Unexpected events such as pandemics, wars, climate change or new government policies can also change birth and death rates. So the UN gives a range (under 9 to over 12 billion for 2100).",
            markScheme: [
              { point: "Based on assumptions about future fertility / mortality / migration", keywords: ["assum", "fertility", "birth rate", "migration"] },
              { point: "Small changes multiply over many years", keywords: ["small change", "add up", "multipl", "billions", "compound", "exponential"] },
              { point: "Unexpected events (pandemics, war, climate, policy) / range given", keywords: ["pandemic", "wars", "climate", "policy", "range", "covid"] },
            ],
            commonError: "Saying projections are 'just guesses'. They are careful calculations, but based on assumptions.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-qa-p3-q13",
            question: "What is a 'demographic dividend'? Explain what a country needs to do to benefit from one.",
            marks: 3,
            hint: "It follows a fall in fertility; the 'dividend' is not automatic.",
            modelAnswer:
              "A demographic dividend is the economic boost a country can get when falling fertility leaves it with a large working-age population and relatively few dependants. To benefit, the country must educate and train its young people and create enough jobs for them; good health care and investment also help. Without jobs, a large young population can instead lead to unemployment.",
            markScheme: [
              { point: "Definition: economic boost from large working-age population", keywords: ["working age", "working-age", "economic", "economy", "boost"] },
              { point: "Fewer dependants after fertility falls", keywords: ["dependants", "dependents", "fewer children", "fertility falls", "fewer young"] },
              { point: "Needs education / jobs / investment to benefit", keywords: ["education", "jobs", "employment", "invest", "training", "skills"] },
            ],
            commonError: "Thinking any country with many young people automatically gets richer.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-qa-p3-q14",
            question: "Describe and explain when and why the world population J-curve 'bends' upwards.",
            marks: 4,
            hint: "Name two revolutions in Europe and what they did to the death rate.",
            modelAnswer:
              "The curve bends upwards from about 1750. This is when the British Agricultural Revolution (crop rotation, selective breeding) increased food supply, and the Industrial Revolution created wealth and transport to move food and later pay for sewers and clean water. These changes lowered death rates in Europe while birth rates stayed high, so natural increase grew. In the 20th century medicine spread worldwide and the curve became very steep.",
            markScheme: [
              { point: "Timing: about 1750 / 18th century", keywords: ["1750", "18th century", "1700s", "eighteenth"] },
              { point: "Agricultural Revolution increased food supply", keywords: ["agricultur", "food", "crop rotation", "farming"] },
              { point: "Industrial Revolution: wealth / transport / later sanitation", keywords: ["industrial", "railway", "wealth", "transport", "factory", "factories"] },
              { point: "Death rates fell while birth rates stayed high", keywords: ["death rates fell", "death rate fell", "lower death", "birth rates stayed", "gap", "natural increase"] },
            ],
            commonError: "Placing the bend in the 20th century: that is when the curve becomes steepest, not when it first bends.",
            guideRef: "exponential-growth",
          },
          {
            id: "pgrow-qa-p3-q15",
            question: "'World population growth is no longer a problem.' Evaluate this statement.",
            marks: 6,
            hint: "Arguments for: falling growth rate, peak expected. Arguments against: fast growth in some countries, consumption, ageing.",
            modelAnswer:
              "There is some truth in the statement. The world growth rate has fallen from just over 2% in the 1960s to under 1%, fertility is about 2.3 and falling, and the UN projects a peak of about 10.3 billion in the mid-2080s, so the population explosion is ending. Food production has also kept up with population, as Boserup predicted. However, growth is still a serious challenge in some places: Niger's population grows by about 3.5% a year, doubling in about 20 years, and Nigeria may reach 375 million by 2050, putting huge pressure on schools, jobs and housing. Adding another 2 billion people, especially if consumption rises, will increase pressure on resources and the climate. Meanwhile, some countries face the opposite problem: Singapore (0.97) and South Korea (0.7) have very low fertility, causing ageing and labour shortages. Overall, the global problem has changed rather than disappeared: it is now about uneven growth and consumption rather than an ever-rising total.",
            markScheme: [
              { point: "Agrees: growth rate falling / peak projected", keywords: ["growth rate has fallen", "growth rate is falling", "peak", "10 3", "slowing"] },
              { point: "Supporting evidence with data (e.g. 2% to under 1%, TFR 2.3)", keywords: ["2%", "0.9", "1960s", "2.3", "2080"] },
              { point: "Disagrees: fast growth in sub-Saharan Africa (Niger / Nigeria) with data", keywords: ["niger", "nigeria", "africa", "3.5", "375"] },
              { point: "Pressure on resources / consumption / climate", keywords: ["resource", "consum", "climate", "food", "water", "environment"] },
              { point: "Opposite problem: ageing / very low fertility elsewhere", keywords: ["ageing", "aging", "low fertility", "korea", "singapore", "japan"] },
              { point: "Balanced judgement / conclusion", keywords: ["overall", "conclusion", "to some extent", "partly", "judgement", "uneven"] },
            ],
            commonError: "Arguing only one side, or making a judgement without any data.",
            guideRef: "future-population",
          },
        ],
      },
      {
        id: "pgrow-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "pgrow-qa-p4-q01",
            question: "Define the term 'infant mortality rate' and explain why it is a useful measure of development.",
            marks: 2,
            hint: "Which age group, and per how many?",
            modelAnswer:
              "The infant mortality rate is the number of babies who die before their first birthday per 1,000 live births per year. It is useful because it reflects a country's health care, clean water, nutrition and mothers' education.",
            markScheme: [
              { point: "Deaths of babies under 1 per 1,000 live births", keywords: ["under 1 year", "first birthday", "under one", "under a year", "live births"] },
              { point: "Reflects health care / clean water / nutrition / development", keywords: ["health care", "healthcare", "clean water", "nutrition", "development", "doctor"] },
            ],
            commonError: "Using 'per 1,000 people' instead of 'per 1,000 live births'.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p4-q02",
            question: "A country has 50 million people, a birth rate of 20 per 1,000 and a death rate of 8 per 1,000. Calculate (a) its natural increase per 1,000, (b) its growth rate as a %, and (c) the number of people it adds in one year (ignoring migration).",
            marks: 3,
            hint: "50 million is 50,000 thousands.",
            modelAnswer: "(a) 20 - 8 = 12 per 1,000. (b) 12 / 10 = 1.2%. (c) 12 x 50,000 = 600,000 people (or 1.2% of 50 million).",
            markScheme: [
              { point: "12 per 1,000", keywords: ["12 per", "= 12", "12/1000", "12 /1,000"] },
              { point: "1.2%", keywords: ["1.2", "1 2", "one point two"] },
              { point: "600,000 people", keywords: ["600,000", "600000", "600 000", "0.6 million"] },
            ],
            commonError: "Calculating 12% of 50 million (6 million) by forgetting that 12 is per 1,000.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p4-q03",
            question: "Explain why Japan has natural decrease.",
            marks: 3,
            hint: "Think about both births and deaths.",
            modelAnswer:
              "Japan's fertility rate is about 1.2, well below replacement level, because of the high cost of raising children, long working hours and later marriage. At the same time it has one of the oldest populations in the world, with nearly 30% aged 65 or over, so many people die each year. As deaths are higher than births, and immigration is low, the population has been falling since about 2010.",
            markScheme: [
              { point: "Low birth rate / fertility below replacement", keywords: ["low birth", "low fertility", "below replacement", "1.2", "few babies"] },
              { point: "Reason for low births (cost / work / later marriage)", keywords: ["cost", "expensive", "long hours", "career", "later marriage", "marry later"] },
              { point: "Ageing population means many deaths / deaths exceed births", keywords: ["ageing", "aging", "elderly", "oldest", "old people", "more deaths"] },
            ],
            commonError: "Saying Japan's death rate is high because of poor health care. It is high because the population is old.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p4-q04",
            question: "Explain how the Industrial Revolution contributed to falling death rates in Europe.",
            marks: 3,
            hint: "It made things worse at first, then better. Why?",
            modelAnswer:
              "At first, crowded industrial cities were very unhealthy. Over time, though, industry created wealth that paid for public health improvements such as sewers, clean water and better housing. Railways and steamships moved food quickly and cheaply, reducing local famines, and factories mass-produced goods like soap and cotton clothing that improved hygiene.",
            markScheme: [
              { point: "Created wealth / higher incomes / taxes to fund public health", keywords: ["wealth", "money", "income", "tax", "afford", "richer"] },
              { point: "Transport (railways / ships) moved food, reducing famine", keywords: ["railway", "train", "ship", "transport", "famine"] },
              { point: "Improved sanitation / housing / hygiene products", keywords: ["sewer", "sanitation", "housing", "soap", "hygiene", "clean water"] },
            ],
            commonError: "Saying industrial cities were healthy. They were initially very unhealthy; the benefits came later.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-qa-p4-q05",
            question: "Global life expectancy was about 46 years in 1950 and about 73 years in 2023. (a) Calculate the increase. (b) Explain two reasons for this increase.",
            marks: 4,
            hint: "Subtract, then think about medicine, water and food.",
            modelAnswer:
              "(a) 73 - 46 = 27 years. (b) First, vaccination programmes against diseases such as measles, polio and smallpox (eradicated 1980) greatly reduced child deaths, which raises average life expectancy. Second, clean water and sanitation reduced deaths from diarrhoea and cholera, and the Green Revolution increased food supplies so fewer people died of malnutrition.",
            markScheme: [
              { point: "Increase of 27 years", keywords: ["27", "twenty-seven", "twenty seven"] },
              { point: "Reason 1: vaccines / antibiotics / medical care", keywords: ["vaccin", "antibiotic", "medic", "doctor", "hospital"] },
              { point: "Reason 2: clean water / sanitation / food supply", keywords: ["clean water", "sanitation", "food", "nutrition", "green revolution"] },
              { point: "Explains link: fewer child deaths / fewer deaths from disease", keywords: ["child deaths", "infant", "fewer deaths", "disease", "malnutrition", "diarrhoea"] },
            ],
            commonError: "Giving two reasons without explaining how each one increases life expectancy.",
            guideRef: "why-death-rates-fell",
          },
          {
            id: "pgrow-qa-p4-q06",
            question: "Explain how the cost of raising children contributes to Singapore's very low fertility rate.",
            marks: 3,
            hint: "Think about housing, education and time.",
            modelAnswer:
              "Raising a child in Singapore is very expensive: housing (even HDB flats) costs a lot, and parents often spend heavily on tuition and enrichment classes because education is very competitive. Long working hours and high living costs mean many couples marry later and decide they can only afford one child or none, so fertility has fallen to 0.97, despite incentives like the Baby Bonus.",
            markScheme: [
              { point: "High costs: housing / education / tuition", keywords: ["housing", "hdb", "tuition", "school", "education", "expensive"] },
              { point: "Long working hours / careers / time pressures", keywords: ["working hours", "career", "long hours", "little time", "busy"] },
              { point: "Leads to later marriage / fewer children / quotes 0.97", keywords: ["fewer children", "one child", "marry later", "0 97", "low fertility", "afford"] },
            ],
            commonError: "Not making it specific to Singapore when the question asks about Singapore.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-qa-p4-q07",
            question: "Study the data. Niger: total fertility rate about 6.0; growth rate about 3.5% a year; median age about 15. Singapore (residents): total fertility rate 0.97; median age about 43. Compare the populations of Niger and Singapore and suggest one challenge each country faces.",
            marks: 4,
            hint: "Use the data in a comparative sentence ('whereas'), then think about young and old populations.",
            modelAnswer:
              "Niger's fertility rate (6.0) is about six times Singapore's (0.97), so Niger grows very quickly (doubling in about 20 years) whereas Singapore's resident population would shrink without immigration. Niger's population is very young (median age 15) whereas Singapore's is much older (median age about 43). Niger must provide schools, health care and jobs for a rapidly growing number of young people, whereas Singapore faces an ageing population with fewer workers and rising eldercare and health costs.",
            markScheme: [
              { point: "Compares fertility using data (6.0 vs 0.97)", keywords: ["6.0", "0.97", "six times", "higher fertility", "whereas"] },
              { point: "Compares age structure using median age (15 vs 43)", keywords: ["15", "43", "younger", "older", "median"] },
              { point: "Niger challenge: schools / jobs / health care for young population", keywords: ["school", "jobs", "education", "food", "health care", "young"] },
              { point: "Singapore challenge: ageing / fewer workers / eldercare", keywords: ["ageing", "aging", "elderly", "eldercare", "fewer workers", "pension"] },
            ],
            commonError: "Describing each country separately without comparing them.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-qa-p4-q08",
            question: "Explain why sub-Saharan Africa is expected to account for a large share of world population growth up to 2050.",
            marks: 3,
            hint: "Think about fertility, age structure and death rates.",
            modelAnswer:
              "Sub-Saharan Africa still has the highest fertility rates in the world (around 4.5 on average, and about 6 in Niger). Its population is very young, so population momentum means many future parents. Death rates, especially child deaths, have fallen thanks to vaccines and better health care, while birth rates are falling only slowly, so natural increase stays high. More than 1 in 5 people on Earth may live there by 2050.",
            markScheme: [
              { point: "Highest fertility rates (e.g. Niger about 6)", keywords: ["high fertility", "highest fertility", "niger", "high birth", "children per woman"] },
              { point: "Young population / momentum", keywords: ["young", "youthful", "momentum", "median age"] },
              { point: "Falling death rates while birth rates fall slowly", keywords: ["death rates fell", "falling death", "mortality", "vaccin", "health care", "falling slowly"] },
            ],
            commonError: "Saying growth is caused by migration into Africa.",
            guideRef: "fastest-growth-today",
          },
          {
            id: "pgrow-qa-p4-q09",
            question: "The second billion took 123 years to add, but the eighth took only about 11 years. Explain why each billion has been added more quickly.",
            marks: 4,
            hint: "Exponential growth plus falling death rates.",
            modelAnswer:
              "Population grows exponentially: the larger the population, the more parents there are, so the same growth rate adds more people each year. In addition, the growth rate itself rose sharply between 1800 and the 1960s as death rates fell because of better food, sanitation and medicine while birth rates stayed high. Even though the growth rate has since fallen below 1%, the base is now so big (8 billion) that about 70 million people are added each year, so a billion still takes only about 12 years.",
            markScheme: [
              { point: "Exponential growth: bigger population means more parents / more added", keywords: ["exponential", "more parents", "bigger base", "larger population", "compound"] },
              { point: "Growth rate rose as death rates fell", keywords: ["death rates fell", "death rate fell", "falling death", "growth rate rose", "lower death"] },
              { point: "Causes of falling death rates (food / sanitation / medicine)", keywords: ["food", "sanitation", "medicine", "vaccin", "clean water"] },
              { point: "Large base means many added despite lower rate (about 70 million a year)", keywords: ["70 million", "8 billion", "despite", "although", "even though"] },
            ],
            commonError: "Saying birth rates have risen. Births per 1,000 have fallen; the total grows because the base is bigger.",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-qa-p4-q10",
            question: "How does the Green Revolution provide evidence to support Ester Boserup's theory?",
            marks: 2,
            hint: "What did Boserup say would happen when population grows?",
            modelAnswer:
              "Boserup argued that population pressure forces people to invent new ways of producing food. In the 1960s, fears of famine in a fast-growing India led to the Green Revolution (high-yield seeds, fertilisers, irrigation), which greatly increased food production, so food supply kept up with population, as Boserup predicted.",
            markScheme: [
              { point: "Boserup: population pressure leads to new food technology", keywords: ["invent", "technolog", "innovat", "necessity", "pressure"] },
              { point: "Green Revolution increased food supply to keep up with population", keywords: ["high-yield", "high yield", "more food", "kept up", "harvest", "yields"] },
            ],
            commonError: "Using the Green Revolution as evidence for Malthus.",
            guideRef: "future-population",
          },
          {
            id: "pgrow-qa-p4-q11",
            question: "Study the data. Country Y population: 2000: 10 million; 2020: 15 million. (a) Calculate the percentage increase. (b) Calculate the average number of people added per year.",
            marks: 3,
            hint: "% change = (new - old) / old x 100. Then divide the increase by the number of years.",
            modelAnswer: "(a) (15-10)/10 x 100 = 50 per cent (50%). (b) Increase of 5 million over 20 years: 5,000,000 / 20 = 250,000 people per year on average.",
            markScheme: [
              { point: "Method: (15 - 10) / 10 x 100", keywords: ["15 10", "5 10", "divided by 10", "divide by 10"] },
              { point: "50%", keywords: ["50%", "50 %", "50 per"] },
              { point: "250,000 per year", keywords: ["250,000", "250000", "250 000", "0.25 million", "quarter of a million"] },
            ],
            commonError: "Dividing by the new population (15 million) instead of the original (10 million).",
            guideRef: "billions-timeline",
          },
          {
            id: "pgrow-qa-p4-q12",
            question: "Explain why migration can change the population of a country but not the population of the whole world.",
            marks: 2,
            hint: "Where do migrants go?",
            modelAnswer:
              "Migration moves people from one country to another, so one country gains people and another loses the same number. For the world as a whole these cancel out, so only births and deaths (natural change) change the world's total population.",
            markScheme: [
              { point: "Migration moves people between countries (one gains, one loses)", keywords: ["move", "one country", "gains", "loses", "between countries"] },
              { point: "World total only changes through births and deaths / cancels out", keywords: ["cancel", "births and deaths", "natural", "same total", "no change"] },
            ],
            commonError: "Ignoring that emigration from one country is immigration to another.",
            guideRef: "birth-death-rates",
          },
          {
            id: "pgrow-qa-p4-q13",
            question: "Explain why some governments introduce pro-natalist policies, and why such policies often have only a small effect.",
            marks: 4,
            hint: "Why are they worried, and why does money not change people's minds much?",
            modelAnswer:
              "Governments such as Singapore, South Korea and France introduce pro-natalist policies because fertility well below replacement level leads to an ageing population, fewer workers, fewer taxpayers and rising pension and health costs. However, the policies often have little effect because the real reasons for small families, such as the high cost of housing and education, long working hours, careers for women and changing attitudes, are not solved by a one-off cash payment. Singapore's fertility has kept falling (to 0.97) despite the Baby Bonus.",
            markScheme: [
              { point: "Reason: very low fertility / below replacement", keywords: ["low fertility", "below replacement", "low birth", "few babies", "2.1"] },
              { point: "Concern: ageing / fewer workers / pension costs", keywords: ["ageing", "aging", "workers", "pension", "workforce", "tax"] },
              { point: "Small effect: real causes (cost, careers, attitudes) not solved", keywords: ["cost", "career", "attitude", "housing", "working hours", "lifestyle"] },
              { point: "Evidence: Singapore / South Korea fertility still falling", keywords: ["singapore", "0.97", "korea", "0.7", "baby bonus"] },
            ],
            commonError: "Only explaining why the policies exist and not why they struggle.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-qa-p4-q14",
            question: "Suggest and explain two strategies that could help reduce the fertility rate in a country like Niger.",
            marks: 4,
            hint: "Think about the reasons for high fertility and how to change them.",
            modelAnswer:
              "First, keep girls in school longer, for example with free secondary education and laws against child marriage. Educated girls marry later, have careers and choose smaller families. Second, improve access to family planning and health care: free contraception through local clinics lets couples choose how many children to have, and vaccinations and clean water reduce child deaths, so parents no longer need extra 'insurance' children.",
            markScheme: [
              { point: "Strategy 1: girls' education / end child marriage", keywords: ["education", "school", "child marriage", "girls"] },
              { point: "Explains: later marriage / careers / smaller families", keywords: ["marry later", "later marriage", "career", "smaller famil", "fewer children"] },
              { point: "Strategy 2: contraception / family planning / health care", keywords: ["contracep", "family planning", "clinic", "health care", "vaccin"] },
              { point: "Explains: choice / fewer child deaths so fewer births needed", keywords: ["choose", "choice", "child deaths", "mortality", "insurance", "survive"] },
            ],
            commonError: "Suggesting harsh measures like a one-child policy without considering human rights or effectiveness.",
            guideRef: "why-birth-rates-fall",
          },
          {
            id: "pgrow-qa-p4-q15",
            question: "'Medicine was more important than clean water and food in reducing death rates.' To what extent do you agree?",
            marks: 6,
            hint: "Weigh medicine against sanitation and food, using dates and named examples, and reach a judgement.",
            modelAnswer:
              "Medicine was very important. Jenner's smallpox vaccine (1796) eventually led to smallpox being eradicated in 1980, and antibiotics such as penicillin (1928, mass-produced in the 1940s) cured infections that used to kill millions. However, in Europe death rates had started falling long before antibiotics existed. Better food from the Agricultural Revolution (crop rotation, selective breeding) from about 1750 meant fewer people starved and bodies could resist disease. Clean water and sewers, after John Snow's 1854 cholera map and Bazalgette's London sewers, cut deaths from cholera and diarrhoea, especially among babies. In lower-income countries after 1950, vaccines and antibiotics arrived together with clean water projects and the Green Revolution, so all three worked at once. Overall, I disagree that medicine was more important: food and clean water came first and saved huge numbers of lives, while medicine added to these gains, especially in the 20th century.",
            markScheme: [
              { point: "Medicine evidence: vaccines / antibiotics with names or dates", keywords: ["jenner", "smallpox", "penicillin", "fleming", "antibiotic", "vaccin"] },
              { point: "Food evidence: Agricultural / Green Revolution", keywords: ["agricultur", "crop rotation", "green revolution", "food", "nutrition"] },
              { point: "Clean water / sanitation evidence: Snow / Bazalgette / cholera", keywords: ["snow", "bazalgette", "sewer", "cholera", "sanitation", "clean water"] },
              { point: "Timing: death rates fell before modern medicine existed", keywords: ["before antibiotics", "before modern", "1750", "earlier", "already falling", "came first"] },
              { point: "Recognises factors worked together / differs by place or time", keywords: ["together", "combination", "after 1950", "lower-income", "depends", "linked"] },
              { point: "Clear supported judgement", keywords: ["overall", "conclusion", "i disagree", "i agree", "to some extent", "judgement"] },
            ],
            commonError: "Only writing about medicine, or not reaching a clear judgement.",
            guideRef: "why-death-rates-fell",
          },
        ],
      },
    ],
  },
};
