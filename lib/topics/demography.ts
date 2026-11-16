import type { Topic } from "../types";

export const demography: Topic = {
  id: "demography",
  title: "Demography: Census, Pyramids & the DTM",
  subject: "8 Billion++",
  icon: "👥",
  summary: "How geographers study populations — and what the shapes tell us.",
  intro:
    "Every school place, MRT line, hospital bed and HDB flat in Singapore was planned using population data. Demographers count people, sort them by age and sex, and draw shapes — population pyramids and the Demographic Transition Model — that reveal a country's past and predict its future. By the end of this topic you will be able to run your own class census, read any population pyramid like a detective, calculate a dependency ratio and explain why Niger and Japan face opposite population challenges.",

  guide: [
    {
      id: "studying-demography",
      heading: "How do we study demography?",
      body:
        "**Demography** is the scientific study of human populations: how big they are, how they are structured (by age, sex and other characteristics) and how they change over time. A **demographer** is a person who studies population data.\n\nA population can only change in four ways: people are born, people die, people move in and people move out. Geographers use a few key measures to describe these changes:\n\n- **Birth rate**: the number of live births per 1,000 people per year (written ‰, 'per thousand').\n- **Death rate**: the number of deaths per 1,000 people per year.\n- **Natural increase**: birth rate minus death rate. If it is negative, it is called **natural decrease**.\n- **Migration**: the movement of people from one place to another. **Immigration** is moving in; **emigration** is moving out. **Net migration** = immigrants minus emigrants.\n- **Total fertility rate (TFR)**: the average number of children a woman would have in her lifetime. A TFR of about **2.1** is called **replacement level** — just enough to replace both parents (the 0.1 allows for children who die young).\n- **Life expectancy**: the average number of years a newborn baby can expect to live.\n\nNatural increase is usually converted into a **percentage growth rate** by dividing by 10. For example, a birth rate of 30‰ and a death rate of 10‰ gives natural increase of 20‰, which is **2.0% per year**.\n\nWhere does the data come from? The most complete source is a **census** (a count of every person). Others include **civil registration** (births, deaths and marriages must legally be registered), **sample surveys**, immigration records at places like Changi Airport, and estimates from the United Nations and World Bank.",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Population change equation: births and immigration add people, deaths and emigration remove people"><defs><marker id="sd-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs><rect x="110" y="60" width="100" height="50" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><text x="160" y="82" font-size="12" text-anchor="middle" fill="#0c4a6e" font-weight="bold">POPULATION</text><text x="160" y="98" font-size="10" text-anchor="middle" fill="#0c4a6e">of a place</text><rect x="10" y="15" width="80" height="30" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="50" y="34" font-size="11" text-anchor="middle" fill="#14532d">+ Births</text><rect x="10" y="125" width="80" height="30" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="50" y="144" font-size="11" text-anchor="middle" fill="#14532d">+ Immigrants</text><rect x="230" y="15" width="80" height="30" rx="6" fill="#fee2e2" stroke="#dc2626"/><text x="270" y="34" font-size="11" text-anchor="middle" fill="#7f1d1d">− Deaths</text><rect x="230" y="125" width="80" height="30" rx="6" fill="#fee2e2" stroke="#dc2626"/><text x="270" y="144" font-size="11" text-anchor="middle" fill="#7f1d1d">− Emigrants</text><line x1="90" y1="35" x2="112" y2="62" stroke="#334155" stroke-width="2" marker-end="url(#sd-ah)"/><line x1="90" y1="135" x2="112" y2="108" stroke="#334155" stroke-width="2" marker-end="url(#sd-ah)"/><line x1="208" y1="62" x2="230" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#sd-ah)"/><line x1="208" y1="108" x2="230" y2="135" stroke="#334155" stroke-width="2" marker-end="url(#sd-ah)"/><text x="160" y="22" font-size="10" text-anchor="middle" fill="#334155">natural change</text><text x="160" y="160" font-size="10" text-anchor="middle" fill="#334155">net migration</text></svg>`,
      diagramCaption: "Only four flows change a population: births and deaths (natural change) and immigration and emigration (net migration).",
      keyPoints: [
        "Demography is the study of population size, structure and change.",
        "Natural increase = birth rate − death rate (per 1,000); divide by 10 to get % per year.",
        "Replacement-level fertility is a TFR of about 2.1 children per woman.",
        "Population data comes from censuses, civil registration, surveys and migration records.",
      ],
      thinkDeeper:
        "Singapore's resident TFR is below 1, far under replacement level, yet its total population has kept growing for most years. Using the four flows in the diagram, explain how this is possible.",
      discovery: {
        problem:
          "Country A has a birth rate of 40 per 1,000 and a death rate of 20 per 1,000. Country B has a birth rate of 12 and a death rate of 2. Which country's population is growing faster from natural change — and why might your first guess be wrong?",
        idea:
          "Both have natural increase of 20 per 1,000 (2% a year). Growth depends on the GAP between birth and death rates, not how high either rate is. That gap is the key idea behind the Demographic Transition Model.",
      },
      skill: "Calculating natural increase and percentage growth rate",
    },
    {
      id: "census",
      heading: "What is a census — and why do governments need one?",
      body:
        "A **census** is an official count of every person in a country on a particular day, which also collects information about them. Most countries hold one **every 10 years**. Because it tries to include everybody, it is the most complete picture of a population a government ever gets.\n\n**What does a census measure?** Typical questions cover:\n\n- **Age and sex** (used to draw population pyramids)\n- Where people live and who lives in each **household**\n- **Ethnicity**, religion and languages spoken\n- **Education** and qualifications\n- **Jobs**, and how people **travel to work or school**\n- **Housing** type (e.g. HDB flat, condominium, landed property)\n- Place of birth and citizenship\n\n**Why do governments need it?** Planning! If you know how many 3-year-olds there are today, you know how many Primary 1 places you will need in four years. Census data is used to plan **schools, hospitals, housing, transport and elderly care**, to share out money between regions, to draw election boundaries and to check whether policies (such as encouraging more births) are working. Businesses, charities and researchers use it too.\n\n**Singapore's census** is run by the **Department of Statistics (SingStat)** every 10 years; the latest was **Census 2020** and the next is due in 2030. The first census of Singapore was taken in **1871** under British rule. Since 2000 Singapore has used a **register-based** approach: most basic counts come from government administrative records (such as identity card and address records), topped up with a large **sample survey** of households for detailed questions. This is cheaper and quicker than knocking on every door.\n\n**The UK census** is also held every 10 years. The 2021 Census for England and Wales took place on **21 March 2021** and was the first to be **'digital-first'**, with most households answering online. Scotland postponed its census to 2022 because of COVID-19.\n\nCensuses have problems too: they are **very expensive**, quickly go **out of date**, some people are **missed** (e.g. homeless people, undocumented migrants) and some people give wrong answers.",
      diagram: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A census form feeds data into planning for schools, hospitals, housing and transport"><defs><marker id="ce-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs><rect x="10" y="30" width="95" height="120" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/><text x="57" y="50" font-size="12" text-anchor="middle" fill="#7c2d12" font-weight="bold">CENSUS</text><text x="20" y="72" font-size="10" fill="#7c2d12">☐ Age</text><text x="20" y="88" font-size="10" fill="#7c2d12">☐ Sex</text><text x="20" y="104" font-size="10" fill="#7c2d12">☐ Household</text><text x="20" y="120" font-size="10" fill="#7c2d12">☐ Job / travel</text><text x="20" y="136" font-size="10" fill="#7c2d12">☐ Housing</text><line x1="105" y1="90" x2="150" y2="90" stroke="#334155" stroke-width="2" marker-end="url(#ce-ah)"/><text x="128" y="82" font-size="10" text-anchor="middle" fill="#334155">data</text><rect x="155" y="10" width="155" height="32" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="232" y="30" font-size="11" text-anchor="middle" fill="#1e3a8a">🏫 School places</text><rect x="155" y="52" width="155" height="32" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="232" y="72" font-size="11" text-anchor="middle" fill="#14532d">🏥 Hospitals and eldercare</text><rect x="155" y="94" width="155" height="32" rx="6" fill="#fef9c3" stroke="#ca8a04"/><text x="232" y="114" font-size="11" text-anchor="middle" fill="#713f12">🏢 HDB housing</text><rect x="155" y="136" width="155" height="32" rx="6" fill="#f3e8ff" stroke="#9333ea"/><text x="232" y="156" font-size="11" text-anchor="middle" fill="#581c87">🚇 MRT and bus routes</text></svg>`,
      diagramCaption: "Census answers become the evidence governments use to plan services years ahead.",
      keyPoints: [
        "A census counts everyone on one day, usually every 10 years.",
        "Singapore: run by SingStat, latest Census 2020, register-based plus a large sample survey.",
        "UK: Census 2021 (England and Wales, 21 March 2021), the first digital-first census.",
        "Uses: planning schools, healthcare, housing, transport and sharing out money.",
      ],
      thinkDeeper:
        "A census is only taken every 10 years, but Singapore publishes population figures every June. How can a government know its population between censuses — and which of the four population flows is hardest to track?",
      discovery: {
        problem:
          "You are a Ministry of Education planner. You must decide today how many Primary 1 classes to open in Punggol in six years' time. What single piece of information would you most want, and where would you get it?",
        idea:
          "You need to know how many young children live in the area now — exactly the kind of age-by-place data a census (and birth registration) provides. Population data is the foundation of planning.",
      },
      caseStudy: {
        place: "Singapore Census 2020",
        facts: [
          "Conducted by the Department of Statistics; Singapore's censuses are held every 10 years (first in 1871).",
          "Total population in June 2020: about 5.69 million, of whom about 4.04 million were residents (citizens and permanent residents).",
          "Median age of residents rose from 37.4 (2010) to 41.5 (2020).",
          "Share of residents aged 65 and over rose from about 9% (2010) to about 15% (2020).",
          "Uses a register-based approach (administrative records) plus a large household sample survey answered online, by phone or face-to-face.",
        ],
      },
    },
    {
      id: "class-census",
      heading: "What does our class census tell us?",
      body:
        "You can practise being a demographer by running a **class census**. Geographers follow an **enquiry process**: ask a question, collect data, present it, analyse it, conclude and evaluate.\n\n**1. Ask a question (and a hypothesis).** For example: 'Most students in our class were born outside Singapore.' A **hypothesis** is a statement you can test and prove true or false.\n\n**2. Design a questionnaire.** A **questionnaire** is a set of written questions. Use **closed questions** (fixed answers, e.g. 'How many siblings do you have? 0 / 1 / 2 / 3+') because they are easy to count. **Open questions** ('Why did your family move to Singapore?') give richer answers but are harder to analyse. Keep questions short, clear and not **leading** (a leading question pushes people towards an answer). Respect **privacy**: keep answers **anonymous** and let people skip questions.\n\n**3. Sampling.** Asking everyone is a census. Asking only some people is a **sample**. Types of sampling:\n\n- **Random**: everyone has an equal chance of being picked (e.g. names out of a hat).\n- **Systematic**: picking at regular intervals (e.g. every 3rd name on the register).\n- **Stratified**: making sure groups are represented in the right proportions (e.g. if 60% of the year are girls, 60% of the sample are girls).\n\nA bigger sample is usually more **reliable**. A sample that over-represents one group is **biased**.\n\n**4. Record the data** using a **tally chart** (strokes grouped in fives) and then a **frequency** total.\n\n**5. Present it.** Use a **bar chart** to compare categories (e.g. number of siblings); use a **pie chart** to show parts of a whole (e.g. country of birth). To draw a pie chart, each slice angle = (frequency ÷ total) × 360°.\n\n**6. Analyse and conclude.** Describe the pattern using the most and least common answers, quote numbers and percentages, and say whether the hypothesis is **accepted or rejected**.\n\n**7. Evaluate.** One class of 25 is a small sample, so you cannot say your results represent all of Singapore. How could you improve it? Survey the whole year group, compare with census data, or repeat the survey.",
      diagram: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tally chart and bar chart of number of siblings in a class of 25"><text x="80" y="16" font-size="11" text-anchor="middle" font-weight="bold" fill="#1e293b">Tally</text><text x="10" y="38" font-size="10" fill="#1e293b">0 siblings</text><text x="75" y="38" font-size="11" fill="#1e293b">||||</text><text x="135" y="38" font-size="10" fill="#1e293b">4</text><text x="10" y="60" font-size="10" fill="#1e293b">1 sibling</text><text x="75" y="60" font-size="11" fill="#1e293b">|||| ||||</text><text x="135" y="60" font-size="10" fill="#1e293b">10</text><text x="10" y="82" font-size="10" fill="#1e293b">2 siblings</text><text x="75" y="82" font-size="11" fill="#1e293b">|||| ||</text><text x="135" y="82" font-size="10" fill="#1e293b">7</text><text x="10" y="104" font-size="10" fill="#1e293b">3+ siblings</text><text x="75" y="104" font-size="11" fill="#1e293b">||||</text><text x="135" y="104" font-size="10" fill="#1e293b">4</text><text x="10" y="128" font-size="10" fill="#1e293b">Total</text><text x="135" y="128" font-size="10" font-weight="bold" fill="#1e293b">25</text><line x1="175" y1="20" x2="175" y2="150" stroke="#1e293b"/><line x1="175" y1="150" x2="315" y2="150" stroke="#1e293b"/><rect x="185" y="102" width="24" height="48" fill="#60a5fa"/><rect x="217" y="30" width="24" height="120" fill="#60a5fa"/><rect x="249" y="66" width="24" height="84" fill="#60a5fa"/><rect x="281" y="102" width="24" height="48" fill="#60a5fa"/><text x="197" y="163" font-size="10" text-anchor="middle" fill="#1e293b">0</text><text x="229" y="163" font-size="10" text-anchor="middle" fill="#1e293b">1</text><text x="261" y="163" font-size="10" text-anchor="middle" fill="#1e293b">2</text><text x="293" y="163" font-size="10" text-anchor="middle" fill="#1e293b">3+</text><text x="245" y="176" font-size="10" text-anchor="middle" fill="#1e293b">Number of siblings</text><text x="170" y="34" font-size="10" text-anchor="end" fill="#1e293b">10</text><text x="170" y="153" font-size="10" text-anchor="end" fill="#1e293b">0</text></svg>`,
      diagramCaption: "A tally chart turns raw answers into frequencies; a bar chart makes the most common answer (1 sibling) obvious at a glance.",
      keyPoints: [
        "Enquiry steps: question → collect → present → analyse → conclude → evaluate.",
        "Closed questions are easy to count; open questions give detail but are hard to analyse.",
        "Random, systematic and stratified sampling reduce bias; bigger samples are more reliable.",
        "Bar charts compare categories; pie charts show parts of a whole (angle = share × 360°).",
      ],
      thinkDeeper:
        "Your class census finds that 64% of students were born outside Singapore. Census 2020 shows that most Singapore residents were born in Singapore. Does that mean your survey was wrong? Explain what this tells you about sampling at an international school.",
      discovery: {
        problem:
          "You want to know the average number of siblings of Year 8 students across Singapore. You survey only your own class of 25. Name two reasons your answer might not match the real Singapore average.",
        idea:
          "A small, non-random sample can be biased: one class is not representative of the whole population. This is exactly why governments use a full census or a carefully designed large sample.",
      },
      skill: "Designing a questionnaire, tallying, and drawing bar and pie charts",
    },
    {
      id: "population-pyramids",
      heading: "Reading population pyramids",
      body:
        "A **population pyramid** (also called an **age-sex pyramid**) is a pair of back-to-back horizontal bar charts that shows the **population structure** — the number or percentage of people in each age group, split by sex.\n\n**How to read one:**\n\n- **Males** are usually on the **left**, **females** on the **right**.\n- Each bar is an age group called a **cohort**, usually **5 years wide** (0–4, 5–9, 10–14 … 85+). Young people are at the bottom; old people at the top.\n- The horizontal axis shows either the **percentage of the total population** or the **actual number** (e.g. millions). **Check the axis!** Percentage axes let you compare countries of very different sizes (Niger and India, for example); number axes show real sizes.\n- The axis counts outwards from zero in the middle, so a bar reaching '5' on the male side means 5% of the whole population are males of that age.\n\n**Reading the shape:**\n\n- **Wide base**: lots of children → high birth rate.\n- **Narrow base**: few children → low birth rate.\n- **Sides that slope in quickly** (concave): many people die at each age → high death rate, low life expectancy.\n- **Straight, vertical sides**: most people survive into old age → low death rate.\n- **Wide or tall top**: many elderly people → long life expectancy, an **ageing population**.\n- A **bulge** is an unusually wide cohort — for example a **baby boom** (Singapore and the UK both had baby booms after the Second World War) or lots of working-age **immigrants**.\n- An **indent** (a 'bite' out of the side) shows a missing group — caused by war, famine, a disease outbreak, emigration or a sudden fall in births (e.g. China's one-child policy).\n- **Uneven sides** between males and females can show migrant workers (e.g. many young men in Gulf states such as Qatar) or women's longer life expectancy at the top.\n\nWhen describing a pyramid in an exam, **quote data** from the axis ('about 8% of males are aged 0–4') and use the words **cohort, base, apex, bulge and indent**.",
      diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Labelled population pyramid with males on the left and females on the right, showing a wide base, a bulge and a narrow top"><text x="90" y="14" font-size="11" text-anchor="middle" fill="#1d4ed8" font-weight="bold">Males</text><text x="230" y="14" font-size="11" text-anchor="middle" fill="#be185d" font-weight="bold">Females</text><g fill="#93c5fd"><rect x="80" y="150" width="80" height="14"/><rect x="88" y="135" width="72" height="14"/><rect x="96" y="120" width="64" height="14"/><rect x="82" y="105" width="78" height="14"/><rect x="110" y="90" width="50" height="14"/><rect x="122" y="75" width="38" height="14"/><rect x="134" y="60" width="26" height="14"/><rect x="146" y="45" width="14" height="14"/><rect x="154" y="30" width="6" height="14"/></g><g fill="#f9a8d4"><rect x="160" y="150" width="78" height="14"/><rect x="160" y="135" width="70" height="14"/><rect x="160" y="120" width="63" height="14"/><rect x="160" y="105" width="76" height="14"/><rect x="160" y="90" width="52" height="14"/><rect x="160" y="75" width="40" height="14"/><rect x="160" y="60" width="29" height="14"/><rect x="160" y="45" width="17" height="14"/><rect x="160" y="30" width="9" height="14"/></g><line x1="160" y1="26" x2="160" y2="166" stroke="#1e293b"/><line x1="40" y1="166" x2="280" y2="166" stroke="#1e293b"/><text x="160" y="178" font-size="10" text-anchor="middle" fill="#1e293b">0</text><text x="80" y="178" font-size="10" text-anchor="middle" fill="#1e293b">8%</text><text x="240" y="178" font-size="10" text-anchor="middle" fill="#1e293b">8%</text><text x="160" y="193" font-size="10" text-anchor="middle" fill="#1e293b">% of total population</text><text x="10" y="161" font-size="10" fill="#1e293b">0–4</text><text x="10" y="41" font-size="10" fill="#1e293b">80+</text><text x="245" y="160" font-size="10" fill="#334155">← wide base</text><text x="240" y="115" font-size="10" fill="#334155">← bulge</text><text x="180" y="40" font-size="10" fill="#334155">← narrow apex</text></svg>`,
      diagramCaption: "Read the axis first, then the base (births), the sides (deaths) and the apex (elderly). Bulges and indents tell stories about the past.",
      keyPoints: [
        "Males left, females right; each bar is a 5-year cohort; young at the bottom.",
        "Always check whether the x-axis is % of total population or actual numbers.",
        "Wide base = high birth rate; wide top = long life expectancy.",
        "Bulges (baby booms, immigrants) and indents (war, famine, falling births) reveal history.",
      ],
      thinkDeeper:
        "A cohort that is a bulge today will move up the pyramid by one bar every 5 years. Singapore's post-war baby boomers (born about 1947–1964) are now in their 60s and 70s. Sketch what Singapore's pyramid might look like in 2040 and explain what services will be under pressure.",
      discovery: {
        problem:
          "Two pyramids look identical in shape, but one has an axis in % and the other in millions. One country has 27 million people and the other 1.4 billion. Can you tell from the shapes alone which country is bigger?",
        idea:
          "No! A percentage axis shows structure (proportions), not size. That is exactly why percentage pyramids are useful for comparing countries of very different sizes.",
      },
      skill: "Reading and describing a population pyramid",
    },
    {
      id: "dependency-ratio",
      heading: "Dependants and the dependency ratio",
      body:
        "Geographers split a population into three broad age groups:\n\n- **Young dependants**: aged **0–14**. They usually go to school and do not earn money.\n- **Economically active** (working-age) population: aged **15–64**. Most jobs and taxes come from this group.\n- **Elderly dependants**: aged **65 and over**. Many are retired and need more healthcare.\n\nA **dependant** is someone who relies on others (family or the government) for support. The **dependency ratio** compares the number of dependants with the number of working-age people:\n\n**Dependency ratio = (population aged 0–14 + population aged 65+) ÷ population aged 15–64 × 100**\n\nIt tells you how many dependants there are for every **100** working-age people. The higher the ratio, the more pressure there is on each worker.\n\n**Worked example:** a country has 30% aged 0–14, 10% aged 65+ and 60% aged 15–64. Dependency ratio = (30 + 10) ÷ 60 × 100 = **66.7**. So there are about 67 dependants for every 100 working-age people.\n\nYou can split the ratio in two:\n\n- **Youth dependency ratio** = 0–14 ÷ 15–64 × 100 (high in countries like Niger)\n- **Old-age dependency ratio** = 65+ ÷ 15–64 × 100 (high in countries like Japan)\n\nTwo countries can have the **same total ratio for opposite reasons**: one because of lots of children, the other because of lots of elderly people. Each needs different spending — schools and vaccinations versus pensions, hospitals and eldercare.\n\n**Limitations:** the ratio assumes everyone aged 15–64 works and nobody else does. In reality many 15–19 year-olds are still studying, some adults are unemployed or caring for family, and many people over 65 still work — in Singapore the re-employment age is rising to 69 in 2026.",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram splitting population into young dependants, working age and elderly dependants with the dependency ratio formula"><rect x="10" y="20" width="90" height="70" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="55" y="45" font-size="11" text-anchor="middle" fill="#78350f" font-weight="bold">0–14</text><text x="55" y="62" font-size="10" text-anchor="middle" fill="#78350f">young</text><text x="55" y="76" font-size="10" text-anchor="middle" fill="#78350f">dependants</text><rect x="115" y="20" width="90" height="70" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="160" y="45" font-size="11" text-anchor="middle" fill="#14532d" font-weight="bold">15–64</text><text x="160" y="62" font-size="10" text-anchor="middle" fill="#14532d">working</text><text x="160" y="76" font-size="10" text-anchor="middle" fill="#14532d">age</text><rect x="220" y="20" width="90" height="70" rx="6" fill="#ede9fe" stroke="#7c3aed"/><text x="265" y="45" font-size="11" text-anchor="middle" fill="#4c1d95" font-weight="bold">65+</text><text x="265" y="62" font-size="10" text-anchor="middle" fill="#4c1d95">elderly</text><text x="265" y="76" font-size="10" text-anchor="middle" fill="#4c1d95">dependants</text><text x="160" y="118" font-size="12" text-anchor="middle" fill="#1e293b" font-weight="bold">(0–14) + (65+)</text><line x1="95" y1="124" x2="225" y2="124" stroke="#1e293b" stroke-width="1.5"/><text x="160" y="140" font-size="12" text-anchor="middle" fill="#1e293b" font-weight="bold">(15–64)</text><text x="250" y="132" font-size="12" fill="#1e293b">× 100</text><text x="160" y="162" font-size="10" text-anchor="middle" fill="#475569">= dependants per 100 working-age people</text></svg>`,
      diagramCaption: "The dependency ratio puts both dependent groups on top and the working-age group underneath.",
      keyPoints: [
        "Dependency ratio = (0–14 + 65+) ÷ (15–64) × 100.",
        "Answer = number of dependants for every 100 working-age people.",
        "High youth dependency → spend on schools; high old-age dependency → pensions and healthcare.",
        "It is a simplification: not all 15–64s work and many over-65s do.",
      ],
      thinkDeeper:
        "Niger and Japan both have high dependency ratios. If you were finance minister of each, which three things would you spend money on first? Why might Niger's ratio fall in the future while Japan's keeps rising?",
      discovery: {
        problem:
          "Country X: 45% under 15, 3% over 65. Country Y: 12% under 15, 30% over 65. Before calculating, guess which has more dependants per worker. Then calculate both.",
        idea:
          "X = 48 ÷ 52 × 100 ≈ 92; Y = 42 ÷ 58 × 100 ≈ 72. Both are high, but for opposite reasons — a young country and an old country face different, but equally real, pressures.",
      },
      skill: "Calculating the dependency ratio from age-group data",
    },
    {
      id: "comparing-pyramids",
      heading: "Comparing pyramids: Niger, India, UK, Japan and Singapore",
      body:
        "Population pyramids for real countries show how different places are at different points in their population story. Figures below are rounded recent estimates.\n\n**Niger (West Africa) — the classic 'true pyramid'.** Population about 26–27 million. Very **wide base** and **concave sides**: the total fertility rate is about **6 children per woman**, among the highest in the world, and about **half the population is under 15**. The **median age** (the age that splits the population in half) is only about **15**. Causes include low use of contraception, early marriage, children being valued as farm workers and as security in old age, and high infant mortality. Few people reach old age (life expectancy about 62).\n\n**India (South Asia) — a pyramid becoming a 'beehive'.** Population about **1.4 billion**; India overtook China as the world's most populous country in **2023**. The base is **narrowing** because the TFR has fallen to about **2.0** — around replacement level. A huge working-age group (median age about 28–29) could give India a **demographic dividend**: lots of workers paying taxes and few dependants, *if* there are enough jobs.\n\n**United Kingdom — a 'column' or 'beehive'.** Population about 68–69 million. Fairly **straight sides** and a **narrow base** (TFR about 1.4–1.5). A **bulge** in the 50s–60s shows the 1960s baby boom; about **19% are aged 65+**. Immigration adds young adults, which partly balances low birth rates.\n\n**Japan — an 'inverted' or 'top-heavy' pyramid.** Population about 124 million and **falling since about 2010**. TFR about **1.2**. Around **29% are aged 65+** and about 1 in 10 people is over 80. Median age about **49** — one of the oldest populations on Earth. Very low immigration means the population is shrinking.\n\n**Singapore — a 'vase' or 'urn' shape.** Resident population about 4.2 million (total population including non-residents about 6 million). Resident TFR has been **below 1** (0.97 in 2023 and 2024) — among the lowest in the world. A **narrow base**, a wide middle (the post-war baby boomers, plus many working-age foreign workers in the total population) and a **rapidly widening top**: about **1 in 5 residents is 65+** and the government expects about **1 in 4 citizens to be 65+ by 2030**. In the 1970s the 'Stop at Two' campaign tried to cut births; since 1987 policy has flipped to encouraging births, including the **Baby Bonus** (since 2001).",
      diagram: `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five simplified pyramid outlines: Niger triangle, India beehive, UK column, Japan inverted, Singapore vase"><g stroke-width="1.5"><polygon points="30,110 55,20 80,110" fill="#fde68a" stroke="#b45309"/><polygon points="92,110 100,70 110,40 120,20 130,40 140,70 148,110" fill="#fed7aa" stroke="#c2410c"/><polygon points="160,110 162,60 168,30 185,20 202,30 208,60 210,110" fill="#bfdbfe" stroke="#1d4ed8"/><polygon points="230,110 225,70 222,40 238,20 252,20 268,40 265,70 260,110" fill="#ddd6fe" stroke="#6d28d9"/><polygon points="285,110 275,75 272,50 288,20 302,20 318,50 315,75 305,110" fill="#fbcfe8" stroke="#be185d"/></g><text x="55" y="126" font-size="10" text-anchor="middle" fill="#1e293b" font-weight="bold">Niger</text><text x="120" y="126" font-size="10" text-anchor="middle" fill="#1e293b" font-weight="bold">India</text><text x="185" y="126" font-size="10" text-anchor="middle" fill="#1e293b" font-weight="bold">UK</text><text x="245" y="126" font-size="10" text-anchor="middle" fill="#1e293b" font-weight="bold">Japan</text><text x="295" y="126" font-size="10" text-anchor="middle" fill="#1e293b" font-weight="bold">S'pore</text><text x="55" y="140" font-size="10" text-anchor="middle" fill="#475569">TFR ~6</text><text x="120" y="140" font-size="10" text-anchor="middle" fill="#475569">TFR ~2</text><text x="185" y="140" font-size="10" text-anchor="middle" fill="#475569">TFR ~1.4</text><text x="245" y="140" font-size="10" text-anchor="middle" fill="#475569">TFR ~1.2</text><text x="295" y="140" font-size="10" text-anchor="middle" fill="#475569">TFR &lt;1</text></svg>`,
      diagramCaption: "Simplified outlines: from Niger's wide-based triangle to the narrow bases of Japan and Singapore (resident population).",
      keyPoints: [
        "Niger: TFR about 6, about half under 15, median age about 15 — a true pyramid.",
        "India: about 1.4 billion, most populous since 2023, TFR about 2.0 — base narrowing.",
        "UK: column shape, about 19% aged 65+, immigration adds young adults.",
        "Japan and Singapore: narrow bases, wide tops — rapidly ageing; Singapore resident TFR below 1.",
      ],
      thinkDeeper:
        "Singapore's pyramid looks very different if you include non-resident foreign workers. Which cohorts would grow, and on which side? Why does it matter which version a planner uses?",
      discovery: {
        problem:
          "Imagine five pyramid outlines without labels: a triangle, a beehive, a column, an upside-down shape and a vase. Match them to Niger, India, UK, Japan and Singapore — then explain your matching using birth rates and life expectancy.",
        idea:
          "Shape follows fertility and survival: very high births make a triangle; falling births make a beehive; low births with long lives make a column, vase or inverted pyramid. Each shape is a 'snapshot' of a stage in demographic change.",
      },
      caseStudy: {
        place: "Niger vs Japan — opposite ends of the scale",
        facts: [
          "Niger: total fertility rate about 6 children per woman; Japan: about 1.2.",
          "Niger: about half the population is under 15; Japan: only about 11–12% under 15.",
          "Niger: median age about 15; Japan: median age about 49.",
          "Japan: about 29% aged 65+ and the population has been falling since about 2010; Niger: under 3% aged 65+.",
          "Niger's population (about 26–27 million) could roughly double by the 2050s; Japan's (about 124 million) is projected to keep shrinking.",
        ],
      },
      skill: "Comparing population pyramids of contrasting countries",
    },
    {
      id: "dtm",
      heading: "The Demographic Transition Model (DTM)",
      body:
        "The **Demographic Transition Model (DTM)** is a graph showing how a country's **birth rate**, **death rate** and **total population** change over time as it develops. It is based on what happened in Europe from the 1700s onwards. A **model** is a simplified picture of reality — useful, but not perfect.\n\n**Stage 1 — High fluctuating.** Birth rate and death rate are **both high** (about 35–40 per 1,000) and go up and down with famine and disease. Population is **low and stable**. No country is in Stage 1 today; only some remote tribal groups, such as in the Amazon rainforest, come close.\n\n**Stage 2 — Early expanding.** The **death rate falls rapidly** thanks to better food supply, clean water, sanitation and vaccinations, but the **birth rate stays high**. The gap means **rapid population growth**. Examples: Niger, Afghanistan, Chad.\n\n**Stage 3 — Late expanding.** The **birth rate falls** as more children survive, women get more education and jobs, contraception becomes available and people move to cities (where children cost more to raise). Death rate keeps falling slowly. Population still grows, but more slowly. Examples: India, Kenya, Bangladesh.\n\n**Stage 4 — Low fluctuating.** Birth and death rates are **both low** (about 10–15 per 1,000). Population is **high and stable**, growing slowly. Examples: UK, USA, France.\n\n**Stage 5 — Declining.** The **birth rate falls below the death rate**, so there is **natural decrease** and the population shrinks unless immigrants arrive. The population is **ageing**. Examples: Japan, Italy, Germany. Singapore's resident population is close to this stage — its births only slightly exceed its deaths — but immigration keeps the total population growing.\n\n**Pyramids and the DTM link together:** Stage 1–2 = wide-based triangle; Stage 3 = narrowing base; Stage 4 = column; Stage 5 = inverted or top-heavy.\n\n**Limitations of the DTM:** it is based on European history; it ignores **migration**; it does not give a timescale (the UK took about 200 years, South Korea and Singapore about 50); it did not originally include Stage 5; and countries in poorer parts of the world may not follow the same path, for example if conflict or HIV/AIDS raises death rates again.",
      diagram: `<svg viewBox="0 0 320 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Demographic Transition Model graph with five stages, birth rate, death rate and total population lines"><line x1="30" y1="20" x2="30" y2="160" stroke="#1e293b"/><line x1="30" y1="160" x2="310" y2="160" stroke="#1e293b"/><g stroke="#cbd5e1" stroke-dasharray="3,3"><line x1="86" y1="20" x2="86" y2="160"/><line x1="142" y1="20" x2="142" y2="160"/><line x1="198" y1="20" x2="198" y2="160"/><line x1="254" y1="20" x2="254" y2="160"/></g><g font-size="10" fill="#1e293b" text-anchor="middle"><text x="58" y="173">1</text><text x="114" y="173">2</text><text x="170" y="173">3</text><text x="226" y="173">4</text><text x="282" y="173">5</text></g><text x="170" y="190" font-size="10" text-anchor="middle" fill="#1e293b">Stage (time →)</text><text x="12" y="95" font-size="10" fill="#1e293b" transform="rotate(-90 12 95)" text-anchor="middle">Rate per 1,000</text><path d="M30,40 L45,30 L58,42 L72,32 L86,38 L142,38 Q170,60 198,118 L254,120 L270,132 L310,138" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M30,36 L45,46 L58,30 L72,44 L86,40 Q114,100 142,112 L198,122 L254,124 L280,120 L310,116" fill="none" stroke="#dc2626" stroke-width="2.5"/><path d="M30,150 L86,148 Q142,140 198,80 L254,58 L310,62" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="6,3"/><line x1="30" y1="205" x2="46" y2="205" stroke="#2563eb" stroke-width="2.5"/><text x="50" y="208" font-size="10" fill="#1e293b">Birth rate</text><line x1="115" y1="205" x2="131" y2="205" stroke="#dc2626" stroke-width="2.5"/><text x="135" y="208" font-size="10" fill="#1e293b">Death rate</text><line x1="200" y1="205" x2="216" y2="205" stroke="#16a34a" stroke-width="2" stroke-dasharray="6,3"/><text x="220" y="208" font-size="10" fill="#1e293b">Total population</text></svg>`,
      diagramCaption: "In Stage 2 the death rate (red) falls first; in Stage 3 the birth rate (blue) follows. The gap between them drives population growth (green). In Stage 5 births drop below deaths.",
      keyPoints: [
        "Stage 1: both rates high; Stage 2: death rate falls; Stage 3: birth rate falls.",
        "Stage 4: both low, population high and stable; Stage 5: birth rate below death rate.",
        "Fastest growth is in late Stage 2 and early Stage 3, when the gap between the lines is widest.",
        "Examples: Niger (2), India (3), UK (4), Japan (5).",
      ],
      thinkDeeper:
        "Why does the death rate fall BEFORE the birth rate? Think about how quickly a new vaccine or clean water supply can change things compared with how quickly families' attitudes and traditions change.",
      discovery: {
        problem:
          "Between 1750 and 1900, Britain's population roughly quadrupled, yet the birth rate barely changed for the first 100 years. What must have changed to cause such growth?",
        idea:
          "The death rate fell (better farming, then clean water and sanitation) while the birth rate stayed high. A falling death rate with a steady birth rate is the engine of Stage 2 growth.",
      },
      skill: "Interpreting a line graph of birth and death rates (the DTM)",
    },
    {
      id: "ageing-populations",
      heading: "Ageing populations: challenges and responses",
      body:
        "An **ageing population** is one in which the **proportion** of older people (usually 65+) is rising and the **median age** is increasing. It happens when **birth rates fall** and **life expectancy rises** — the typical result of Stages 4 and 5 of the DTM.\n\n**Why is Singapore ageing so fast?** Life expectancy at birth is about **83 years**, among the highest in the world. Resident fertility is **below 1 child per woman**, so each new generation is much smaller than the last. And the large post-war **baby-boom** generation is now reaching 65+. About **1 in 5 residents is now 65+**, and about **1 in 4 citizens** is expected to be by **2030**.\n\n**Challenges (problems):**\n\n- **Rising healthcare and eldercare costs** — more hospital beds, nursing homes and carers.\n- **Fewer workers** paying taxes to support each elderly person (a rising old-age dependency ratio).\n- **Labour shortages** in jobs such as construction, care and transport.\n- **Pension pressure** — savings must last for longer retirements.\n- Some older people face **loneliness** or live alone.\n\n**Opportunities (it is not all negative!):**\n\n- Many older people are healthy, volunteer, care for grandchildren and spend money — the **'silver economy'**.\n- Experienced older workers can keep contributing.\n\n**Singapore's responses:**\n\n- Raising the **retirement age** to **64** and the **re-employment age** to **69** in 2026, so people can work for longer.\n- **CPF** (Central Provident Fund) savings and **CPF LIFE** annuities to provide income for life.\n- **Pioneer Generation** and **Merdeka Generation** packages to help with healthcare costs.\n- **Active Ageing Centres**, barrier-free HDB designs, lifts that stop on every floor and senior-friendly 'Silver Zones' on roads.\n- **Pro-natalist policies** (policies that encourage births): the **Baby Bonus** cash gift and savings account, longer parental leave, more childcare places and HDB priority for families.\n- **Immigration** of foreign workers and new citizens to support the workforce.\n\n**Japan's responses:** encouraging older people to keep working, using **robots** in care homes, gradually allowing more foreign care workers, and trying to raise the birth rate. Japan is often called a 'super-aged society' because more than 21% of its people are aged 65+.",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart showing the share of Singapore residents aged 65 and over rising from about 9 percent in 2010 to about 15 percent in 2020 and about 19 percent in 2024, with about 25 percent of citizens projected by 2030"><line x1="40" y1="20" x2="40" y2="140" stroke="#1e293b"/><line x1="40" y1="140" x2="310" y2="140" stroke="#1e293b"/><g font-size="10" fill="#1e293b" text-anchor="end"><text x="36" y="143">0%</text><text x="36" y="103">10%</text><text x="36" y="63">20%</text><text x="36" y="23">30%</text></g><g stroke="#e2e8f0"><line x1="40" y1="100" x2="310" y2="100"/><line x1="40" y1="60" x2="310" y2="60"/><line x1="40" y1="20" x2="310" y2="20"/></g><rect x="60" y="104" width="44" height="36" fill="#a78bfa"/><rect x="125" y="80" width="44" height="60" fill="#8b5cf6"/><rect x="190" y="64" width="44" height="76" fill="#7c3aed"/><rect x="255" y="40" width="44" height="100" fill="#ddd6fe" stroke="#7c3aed" stroke-dasharray="4,3"/><g font-size="10" fill="#1e293b" text-anchor="middle"><text x="82" y="155">2010</text><text x="147" y="155">2020</text><text x="212" y="155">2024</text><text x="277" y="155">2030*</text><text x="82" y="99">~9%</text><text x="147" y="75">~15%</text><text x="212" y="59">~19%</text><text x="277" y="35">~25%</text></g><text x="175" y="168" font-size="10" text-anchor="middle" fill="#475569">Share aged 65+ (*2030 = projection for citizens)</text></svg>`,
      diagramCaption: "Singapore is one of the fastest-ageing places in the world: the share of residents aged 65+ roughly doubled in about 15 years.",
      keyPoints: [
        "Ageing = falling birth rates + rising life expectancy (+ large older cohorts).",
        "Challenges: healthcare costs, fewer workers per elderly person, labour shortages, pensions.",
        "Singapore responses: later retirement/re-employment ages, CPF LIFE, Baby Bonus, eldercare and immigration.",
        "Ageing also brings opportunities: the silver economy, volunteering, grandparent childcare.",
      ],
      thinkDeeper:
        "Is immigration a long-term solution to an ageing population? Remember that immigrants also grow old. What would Singapore need to do every year to keep its old-age dependency ratio steady using migration alone?",
      discovery: {
        problem:
          "In 1972 Singapore told families to 'Stop at Two'. By 1987 it was saying 'Have Three or More (if you can afford it)'. Why would a government completely reverse its message in about 15 years?",
        idea:
          "Fertility fell faster and further than expected — below replacement level by the mid-1970s. Policies that slow growth today shape the age structure for decades, so governments must think one or two generations ahead.",
      },
      caseStudy: {
        place: "Singapore — one of the world's fastest-ageing societies",
        facts: [
          "Resident total fertility rate 0.97 in 2023 and 2024 — the first time below 1.",
          "Life expectancy at birth about 83 years.",
          "Share of residents aged 65+ rose from about 9% (2010) to about 19% (2024); about 1 in 4 citizens expected to be 65+ by 2030.",
          "Retirement age rising to 64 and re-employment age to 69 in 2026.",
          "Baby Bonus scheme introduced in 2001 to encourage couples to have children.",
        ],
      },
      skill: "Writing a PEEL paragraph to evaluate policies",
    },
  ],

  mnemonics: [
    {
      topic: "The five DTM stages",
      device: "High, Early, Late, Low, Decline — 'Hungry Elephants Like Lots of Dinner'",
      explanation:
        "Stage 1 High fluctuating, Stage 2 Early expanding, Stage 3 Late expanding, Stage 4 Low fluctuating, Stage 5 Declining. In Stage 2 the Death rate drops first; in Stage 3 the Birth rate follows — 'D before B'.",
    },
    {
      topic: "Reading a population pyramid",
      device: "A-B-S-T: Axis, Base, Sides, Top",
      explanation:
        "Axis — % or numbers? Base — wide (high births) or narrow (low births)? Sides — concave (high deaths) or straight (low deaths)? Top — narrow (short lives) or wide (ageing). Then look for bulges and indents.",
    },
    {
      topic: "Dependency ratio formula",
      device: "'Kids plus Grandparents, over the Parents, times a hundred'",
      explanation:
        "Kids (0–14) + Grandparents (65+) go on top; Parents (working age, 15–64) go underneath; multiply by 100 to get dependants per 100 workers.",
    },
    {
      topic: "Sampling types",
      device: "RSS — Random, Systematic, Stratified ('Rolling Sushi Stall')",
      explanation:
        "Random = names from a hat; Systematic = every nth person; Stratified = groups in the right proportions.",
    },
  ],

  examMistakes: [
    "Putting the working-age group on top of the dependency ratio fraction, or forgetting to multiply by 100.",
    "Describing a pyramid without quoting figures from the axis (e.g. 'about 8% are males aged 0–4').",
    "Not checking whether the pyramid's axis is a percentage or an actual number before comparing countries.",
    "Saying the birth rate falls in Stage 2 of the DTM — it is the death rate that falls first.",
    "Confusing natural increase (births − deaths) with total population change, which also includes migration.",
    "Writing 'Singapore's population is falling' — the resident TFR is below 1, but immigration (and births still slightly above deaths) keep the total growing.",
    "In 'explain' questions, only describing the pattern (what) instead of giving the reasons (why) with linking phrases like 'this is because' or 'which leads to'.",
    "Calling a sample of one class 'representative of Singapore' without evaluating its size and bias.",
  ],

  misconceptions: [
    {
      wrong: "A high birth rate always means fast population growth.",
      right: "Growth from natural change depends on the gap between birth and death rates. Stage 1 societies had high birth rates but almost no growth because death rates were just as high.",
    },
    {
      wrong: "A census asks every person every question.",
      right: "Many censuses, including Singapore's since 2000, combine administrative registers with a large sample survey for detailed questions.",
    },
    {
      wrong: "Population pyramids show how many people live in a country.",
      right: "A percentage pyramid shows structure (proportions), not size. Only a pyramid with an axis in actual numbers shows size.",
    },
    {
      wrong: "Every country must pass through every DTM stage in the same way and at the same speed.",
      right: "The DTM is a model based on European history. Some countries (e.g. South Korea, Singapore) raced through in about 50 years, and migration, war or disease can change the path.",
    },
    {
      wrong: "An ageing population is only a problem.",
      right: "It brings challenges (healthcare, pensions, labour shortages) but also opportunities, such as experienced workers, volunteering, grandparent childcare and a growing 'silver economy'.",
    },
    {
      wrong: "Everyone aged 15–64 works and everyone over 65 is dependent.",
      right: "These are convenient categories. Many teenagers are still in school, and many over-65s work — Singapore's re-employment age is rising to 69.",
    },
  ],

  expertDebates: [
    {
      question: "Is the DTM still useful for today's poorer countries?",
      detail:
        "Supporters say it still describes the broad pattern seen almost everywhere: death rates fall, then birth rates follow. Critics say it was built from European history, ignores migration and gives no timescale; some countries' birth rates have fallen much faster (Bangladesh, Iran) or stayed high for a long time (Niger) for reasons the model does not explain, such as culture, religion, women's education and government policy.",
    },
    {
      question: "Should Singapore rely on immigration to deal with ageing and low fertility?",
      detail:
        "Supporters argue immigrants fill labour shortages, pay taxes and keep the economy growing. Others worry about crowding, pressure on housing and transport, and social cohesion — and point out that immigrants also age, so migration only delays the problem. Most experts think a mix of policies (working longer, technology, pro-natalist support and carefully managed immigration) is needed.",
    },
    {
      question: "Can pro-natalist policies like the Baby Bonus really raise birth rates?",
      detail:
        "Singapore, South Korea and Japan have spent large sums encouraging births, yet fertility has kept falling. Some researchers think money helps families who already want children but cannot change deeper causes such as high housing and education costs, long working hours and changing attitudes. Others point to countries like France and Sweden, where generous childcare and parental leave are linked to higher fertility than in East Asia.",
    },
  ],

  realWorld: [
    {
      title: "Planning Primary 1 places",
      detail: "The Ministry of Education uses birth and population data to decide where to open, merge or close primary schools — several schools in older estates have merged as the number of children fell.",
      emoji: "🏫",
    },
    {
      title: "Lifts on every floor",
      detail: "HDB's Lift Upgrading Programme and barrier-free designs exist because planners could see Singapore's pyramid becoming top-heavy.",
      emoji: "🛗",
    },
    {
      title: "Baby Bonus",
      detail: "Singapore's cash gift and savings account for newborns, introduced in 2001, is a pro-natalist policy aimed at raising the very low birth rate.",
      emoji: "👶",
    },
    {
      title: "Robots in Japanese care homes",
      detail: "Japan, with about 29% of people aged 65+, is testing robots that help lift patients and keep elderly residents company.",
      emoji: "🤖",
    },
    {
      title: "India's demographic dividend",
      detail: "With a huge working-age population, India could see rapid economic growth — if it can create enough jobs for the millions who reach working age each year.",
      emoji: "🇮🇳",
    },
    {
      title: "Your class census",
      detail: "Surveying your classmates uses exactly the same skills — questionnaire design, sampling, tallying and charts — that SingStat and the UK's Office for National Statistics use.",
      emoji: "📋",
    },
  ],

  flashcards: [
    { front: "Demography", back: "The study of human populations — their size, structure and how they change." },
    { front: "Census", back: "An official count of every person in a country on a particular day, usually every 10 years, which also collects details such as age, sex, housing and jobs." },
    { front: "Singapore's latest census", back: "Census 2020, run by the Department of Statistics (SingStat); register-based plus a large sample survey. Next due 2030." },
    { front: "UK's latest census", back: "Census 2021 (England and Wales on 21 March 2021) — the first 'digital-first' census. Scotland's was delayed to 2022." },
    { front: "Birth rate / death rate", back: "Number of live births / deaths per 1,000 people per year." },
    { front: "Natural increase", back: "Birth rate minus death rate. Divide by 10 for % growth per year. Negative = natural decrease." },
    { front: "Total fertility rate (TFR)", back: "Average number of children a woman has in her lifetime. Replacement level is about 2.1." },
    { front: "Population pyramid", back: "Back-to-back bar chart of a population's age-sex structure: males left, females right, 5-year cohorts, young at the bottom." },
    { front: "Cohort", back: "A group of people born in the same period, shown as one bar (e.g. 10–14) on a population pyramid." },
    { front: "Dependency ratio", back: "(0–14 + 65+) ÷ (15–64) × 100 = dependants per 100 working-age people." },
    { front: "DTM Stage 2", back: "Death rate falls rapidly, birth rate stays high → rapid population growth. Example: Niger." },
    { front: "DTM Stage 5", back: "Birth rate falls below death rate → natural decrease and ageing. Example: Japan." },
    { front: "Ageing population", back: "A rising proportion of people aged 65+ and a rising median age, caused by low birth rates and long life expectancy." },
    { front: "Pro-natalist policy", back: "A policy that encourages people to have more children, e.g. Singapore's Baby Bonus." },
    { front: "Stratified sampling", back: "Choosing a sample so that groups (e.g. boys/girls) appear in the same proportions as in the whole population." },
    { front: "Niger vs Japan in numbers", back: "Niger: TFR ~6, ~half under 15, median age ~15. Japan: TFR ~1.2, ~29% aged 65+, median age ~49." },
  ],

  mustKnow: [
    "Define demography, census, birth rate, death rate, natural increase and TFR.",
    "Explain why governments need a census and give Singapore (2020) and UK (2021) examples.",
    "Design a fair questionnaire and choose a suitable sampling method for a class census.",
    "Turn tally data into a bar chart or pie chart and draw conclusions from it.",
    "Read a population pyramid: axis, base, sides, top, bulges and indents — quoting data.",
    "Calculate a dependency ratio and explain what the answer means.",
    "Compare the pyramids of Niger, India, the UK, Japan and Singapore with reasons.",
    "Draw and label the DTM, describing birth rate, death rate and population in each stage with an example country.",
    "Explain the causes, challenges and responses to an ageing population, using Singapore or Japan.",
  ],

  videos: [
    {
      title: "Population pyramids explained",
      channel: "Time for Geography",
      url: "https://www.youtube.com/results?search_query=time+for+geography+population+pyramids",
    },
    {
      title: "The Demographic Transition Model",
      channel: "Cool Geography",
      url: "https://www.youtube.com/results?search_query=cool+geography+demographic+transition+model",
    },
    {
      title: "What is a census?",
      channel: "BBC Bitesize",
      url: "https://www.youtube.com/results?search_query=bbc+bitesize+what+is+a+census+geography",
    },
    {
      title: "Ageing populations — Japan and Singapore",
      channel: "Geography Hub",
      url: "https://www.youtube.com/results?search_query=geography+hub+ageing+population+japan+singapore",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "demog-quiz-mcq-1",
        question: "How often are Singapore's and the UK's censuses normally held?",
        options: ["Every year", "Every 5 years", "Every 10 years", "Every 25 years"],
        answerIndex: 2,
        hint: "Think about the dates of the latest ones: Singapore 2020, UK 2021, and the ones before them.",
        explanation:
          "Both countries hold a census every 10 years (Singapore 2010, 2020; UK 2011, 2021). Annual population estimates exist, but these are not full censuses — a common distractor.",
        guideRef: "census",
      },
      {
        id: "demog-quiz-mcq-2",
        question: "A population pyramid has a very wide base and sides that slope inwards steeply. What does this suggest?",
        options: [
          "Low birth rate and low death rate",
          "High birth rate and high death rate",
          "Low birth rate and high life expectancy",
          "A large number of elderly immigrants",
        ],
        answerIndex: 1,
        hint: "The base tells you about births; steep sides tell you how many people survive to each age.",
        explanation:
          "A wide base means many births; steeply sloping (concave) sides mean many people die at each age, so high death rates. 'Low birth rate and high life expectancy' describes the opposite shape — a narrow base and wide top.",
        guideRef: "population-pyramids",
      },
      {
        id: "demog-quiz-mcq-3",
        question: "A country has 25% of its population aged 0–14, 15% aged 65+ and 60% aged 15–64. What is its dependency ratio?",
        options: ["40.0", "66.7", "150.0", "25.0"],
        answerIndex: 1,
        hint: "Add the two dependent groups, divide by the working-age group, then multiply by 100.",
        explanation:
          "(25 + 15) ÷ 60 × 100 = 66.7 dependants per 100 working-age people. 40 is just the total dependants (forgetting to divide by 60); 150 comes from turning the fraction upside down.",
        guideRef: "dependency-ratio",
      },
      {
        id: "demog-quiz-mcq-4",
        question: "In which stage of the Demographic Transition Model does the birth rate fall below the death rate?",
        options: ["Stage 5", "Stage 2", "Stage 3", "Stage 4"],
        answerIndex: 0,
        hint: "Which stage leads to a shrinking population without immigration?",
        explanation:
          "Stage 5 (declining) has a birth rate lower than the death rate, giving natural decrease — e.g. Japan. In Stage 4 both rates are low and roughly equal, so the population is stable rather than falling.",
        guideRef: "dtm",
      },
    ],
    qa: [
      {
        id: "demog-quiz-qa-1",
        question: "Give two reasons why a government needs to hold a census.",
        marks: 2,
        hint: "Think about what services must be planned years in advance.",
        modelAnswer:
          "A census tells the government how many people of each age live in each area, so it can plan services such as schools, hospitals, housing and public transport for the future. It is also used to share out funding fairly between regions and to draw election boundaries.",
        markScheme: [
          { point: "To plan services (schools, hospitals, housing, transport)", keywords: ["school", "hospital", "housing", "transport", "plan", "healthcare"] },
          { point: "A second distinct use (funding, elections, monitoring policies, research, businesses)", keywords: ["fund", "money", "election", "policy", "budget", "business"] },
        ],
        commonError: "Writing 'to count people' — that is what a census does, not why the government needs the count.",
        guideRef: "census",
      },
      {
        id: "demog-quiz-qa-2",
        question: "Describe the main features of a population pyramid for a country in Stage 2 of the DTM, such as Niger.",
        marks: 3,
        hint: "Use A-B-S-T: base, sides, top.",
        modelAnswer:
          "The pyramid has a very wide base because the birth rate is high (about half of Niger's population is under 15). The sides slope inwards steeply (concave) because many people die at each age, so the death rate is still fairly high. The top is very narrow because few people live to old age — under 3% are over 65.",
        markScheme: [
          { point: "Wide base / many children (high birth rate)", keywords: ["wide base", "broad base", "many children", "high birth", "young"] },
          { point: "Concave / steeply sloping sides (high death rate)", keywords: ["concave", "slope", "steep", "high death", "people die"] },
          { point: "Narrow top / few elderly (low life expectancy)", keywords: ["narrow top", "top is very narrow", "top is narrow", "few elderly", "few people live to old age", "low life expectancy"] },
        ],
        commonError: "Describing only the base and forgetting the sides and top, or giving no link between the shape and birth/death rates.",
        guideRef: "comparing-pyramids",
      },
      {
        id: "demog-quiz-qa-3",
        question: "Explain why the death rate falls before the birth rate in the Demographic Transition Model.",
        marks: 3,
        hint: "Compare how quickly technology changes with how quickly attitudes change.",
        modelAnswer:
          "The death rate falls first because improvements such as clean water, sanitation, vaccinations and better food supply can reduce deaths quickly once they are introduced. The birth rate falls later because it depends on people changing their attitudes and traditions about family size, which takes a generation or more. Families only start having fewer children once they see that most children now survive, and once women gain education and access to contraception.",
        markScheme: [
          { point: "Medical/health improvements reduce deaths quickly", keywords: ["vaccin", "clean water", "sanitation", "medic", "healthcare", "food supply"] },
          { point: "Birth rates depend on attitudes/traditions that change slowly", keywords: ["attitude", "tradition", "culture", "slow", "generation", "religio"] },
          { point: "Families have fewer children once child survival rises / women educated / contraception", keywords: ["survive", "infant mortality", "educat", "contracepti", "women", "family planning"] },
        ],
        commonError: "Describing the graph ('the red line drops first') without explaining WHY.",
        guideRef: "dtm",
      },
      {
        id: "demog-quiz-qa-4",
        question: "Describe two challenges an ageing population creates for Singapore and one way the government is responding.",
        marks: 3,
        hint: "Think about money, workers and care — then a named Singapore policy.",
        modelAnswer:
          "One challenge is rising healthcare and eldercare costs, as more people need hospital care and nursing homes. A second is a shrinking workforce: fewer working-age people pay taxes to support each older person, causing labour shortages. The government is responding by raising the re-employment age to 69 in 2026 so people can work longer (it also offers the Baby Bonus to encourage births).",
        markScheme: [
          { point: "Healthcare / eldercare / pension cost challenge", keywords: ["healthcare", "hospital", "eldercare", "nursing", "pension", "medical"] },
          { point: "Workforce / dependency / tax challenge", keywords: ["worker", "labour", "workforce", "tax", "dependency", "shortage"] },
          { point: "Named Singapore response", keywords: ["retirement age", "re-employment", "baby bonus", "cpf", "immigra", "active ageing"] },
        ],
        commonError: "Giving general responses ('build more hospitals') without naming a Singapore policy.",
        guideRef: "ageing-populations",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "demog-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "demog-mcq-p1-q01",
            question: "What is demography?",
            options: [
              "The study of how landforms are made",
              "The study of weather and climate",
              "The study of government and elections",
              "The study of human populations and how they change",
            ],
            answerIndex: 3,
            hint: "The word comes from Greek 'demos', meaning people.",
            explanation:
              "Demography is the study of population size, structure and change. 'Government and elections' is tempting because 'democracy' shares the same root word (demos), but that is politics, not demography.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-mcq-p1-q02",
            question: "How is the birth rate usually measured?",
            options: [
              "Live births per 1,000 people per year",
              "Live births per 100 women per year",
              "Total births in a country since records began",
              "Average number of children per woman",
            ],
            answerIndex: 0,
            hint: "Look for the 'per thousand' measure.",
            explanation:
              "Birth rate = live births per 1,000 people per year. 'Average number of children per woman' is the total fertility rate (TFR), a different measure.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-mcq-p1-q03",
            question: "A country has a birth rate of 32 per 1,000 and a death rate of 12 per 1,000. What is its natural increase as a percentage per year?",
            options: ["20%", "2.0%", "4.4%", "0.2%"],
            answerIndex: 1,
            hint: "Subtract, then remember the rates are per 1,000, not per 100.",
            explanation:
              "32 − 12 = 20 per 1,000. Divide by 10 to convert per 1,000 into per 100: 2.0% per year. '20%' forgets this conversion — a very common slip.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-mcq-p1-q04",
            question: "What total fertility rate (TFR) is known as 'replacement level'?",
            options: ["About 1.0", "About 1.5", "About 2.1", "About 4.0"],
            answerIndex: 2,
            hint: "Each couple needs to replace two people — plus a little extra.",
            explanation:
              "About 2.1 children per woman replaces both parents; the extra 0.1 allows for children who die before adulthood. A TFR of 1.0 (close to Singapore's) would roughly halve each generation.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-mcq-p1-q05",
            question: "Which organisation carries out Singapore's census?",
            options: [
              "The Housing & Development Board (HDB)",
              "The Ministry of Manpower",
              "The Urban Redevelopment Authority (URA)",
              "The Department of Statistics (SingStat)",
            ],
            answerIndex: 3,
            hint: "It is the government department whose whole job is collecting numbers.",
            explanation:
              "The Department of Statistics (SingStat) runs the Census of Population. HDB and URA are major USERS of census data for planning housing and land, but they do not run it.",
            guideRef: "census",
          },
          {
            id: "demog-mcq-p1-q06",
            question: "In which year was the first census of Singapore taken?",
            options: ["1819", "1871", "1965", "2000"],
            answerIndex: 1,
            hint: "It was taken under British colonial rule, about 50 years after Raffles arrived.",
            explanation:
              "Singapore's first census was in 1871. 1819 is when Raffles arrived; 1965 is independence; 2000 is when Singapore switched to a register-based census approach.",
            guideRef: "census",
          },
          {
            id: "demog-mcq-p1-q07",
            question: "Which of these is a closed question suitable for a class census?",
            options: [
              "How many siblings do you have? (0 / 1 / 2 / 3 or more)",
              "Why did your family choose to live in Singapore?",
              "What do you think about living in an HDB flat?",
              "Describe your journey to school.",
            ],
            answerIndex: 0,
            hint: "A closed question has a fixed set of possible answers.",
            explanation:
              "The siblings question has fixed answer choices, so it is easy to tally. 'Why did your family choose…' is open — useful for detail but hard to count.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p1-q08",
            question: "A student surveys every 5th name on the class register. What type of sampling is this?",
            options: ["Random", "Stratified", "Systematic", "Census"],
            answerIndex: 2,
            hint: "The choice follows a regular system or interval.",
            explanation:
              "Picking at a regular interval is systematic sampling. It is not random, because once you start, which people are chosen is fixed by the interval.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p1-q09",
            question: "In a class of 30, 6 students were born in the UK. What angle should the UK slice be on a pie chart?",
            options: ["6°", "20°", "60°", "72°"],
            answerIndex: 3,
            hint: "Angle = (frequency ÷ total) × 360°.",
            explanation:
              "6 ÷ 30 = 0.2; 0.2 × 360° = 72°. '20°' confuses the 20% share with the angle; you must multiply by 360, not use the percentage directly.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p1-q10",
            question: "On a population pyramid, where are males usually shown?",
            options: ["On the left side", "On the right side", "At the top", "At the bottom"],
            answerIndex: 0,
            hint: "Think of the standard layout used by the UN and textbooks.",
            explanation:
              "By convention males are on the left and females on the right. The top and bottom show age (old at the top, young at the bottom), not sex.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p1-q11",
            question: "What is a 'cohort' on a population pyramid?",
            options: [
              "The whole pyramid",
              "A group of people in the same age band, shown by one bar",
              "The gap between the male and female sides",
              "A group of people who have migrated",
            ],
            answerIndex: 1,
            hint: "It is one 'row' of the pyramid.",
            explanation:
              "A cohort is an age group, e.g. 10–14, shown as one horizontal bar. Migrants can create a bulge in a cohort, but 'cohort' itself just means the age group.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p1-q12",
            question: "Which of these is most likely to create an indent (a 'bite' missing) in a population pyramid?",
            options: [
              "A baby boom",
              "The arrival of many young immigrants",
              "Improved healthcare for the elderly",
              "A major war that killed many young adults",
            ],
            answerIndex: 3,
            hint: "An indent means a cohort is smaller than expected.",
            explanation:
              "A war that kills many young adults leaves a missing group. A baby boom and young immigrants do the opposite — they create a bulge.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p1-q13",
            question: "In the dependency ratio formula, which age group goes on the bottom (the denominator)?",
            options: ["0–14", "65 and over", "15–64", "0–14 and 65+ together"],
            answerIndex: 2,
            hint: "The ratio compares dependants WITH the people who support them.",
            explanation:
              "The working-age group (15–64) goes on the bottom; the dependants (0–14 + 65+) go on top. Putting both dependent groups on the bottom turns the ratio upside down.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-mcq-p1-q14",
            question: "A country has 12% aged 0–14, 29% aged 65+ and 59% aged 15–64. What is its dependency ratio (to 1 d.p.)?",
            options: ["41.0", "69.5", "143.9", "29.0"],
            answerIndex: 1,
            hint: "(0–14 + 65+) ÷ (15–64) × 100.",
            explanation:
              "(12 + 29) ÷ 59 × 100 = 41 ÷ 59 × 100 = 69.5. '41.0' is only the dependants' share without dividing by 59; 143.9 is the fraction upside down.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-mcq-p1-q15",
            question: "Roughly what is Niger's total fertility rate?",
            options: ["About 6", "About 3", "About 2", "About 1"],
            answerIndex: 0,
            hint: "Niger has one of the highest fertility rates in the world.",
            explanation:
              "Niger's TFR is about 6 children per woman, among the highest on Earth. About 2 is India's level; about 1 is closer to Singapore's.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-mcq-p1-q16",
            question: "In which year did India overtake China as the world's most populous country (UN estimate)?",
            options: ["2000", "2010", "2015", "2023"],
            answerIndex: 3,
            hint: "It was very recent — after the world passed 8 billion people.",
            explanation:
              "UN estimates showed India overtaking China in 2023, at about 1.43 billion. The world passed 8 billion in November 2022, just before.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-mcq-p1-q17",
            question: "Which country is the best example of Stage 2 of the Demographic Transition Model?",
            options: ["Japan", "United Kingdom", "Niger", "Italy"],
            answerIndex: 2,
            hint: "Stage 2 = death rate falling, birth rate still very high.",
            explanation:
              "Niger still has a very high birth rate while its death rate has fallen, giving rapid growth. Japan and Italy are Stage 5; the UK is Stage 4.",
            guideRef: "dtm",
          },
          {
            id: "demog-mcq-p1-q18",
            question: "Which statement describes Stage 1 of the DTM?",
            options: [
              "Low birth rate, low death rate, high stable population",
              "High birth rate, high death rate, low stable population",
              "High birth rate, falling death rate, rapid growth",
              "Birth rate below death rate, falling population",
            ],
            answerIndex: 1,
            hint: "Before modern medicine and farming, both lines were high and jumpy.",
            explanation:
              "In Stage 1 both rates are high and fluctuate, so the population stays low and fairly stable. 'High birth rate, falling death rate' describes Stage 2.",
            guideRef: "dtm",
          },
          {
            id: "demog-mcq-p1-q19",
            question: "What is an ageing population?",
            options: [
              "One where the proportion of older people and the median age are rising",
              "One where everybody is over 65",
              "One where the birth rate is rising",
              "One where life expectancy is falling",
            ],
            answerIndex: 0,
            hint: "It is about proportions changing over time.",
            explanation:
              "An ageing population has a rising share of older people and a rising median age. A rising birth rate would make the population younger, not older.",
            guideRef: "ageing-populations",
          },
          {
            id: "demog-mcq-p1-q20",
            question: "Which of these is a pro-natalist policy?",
            options: [
              "Singapore's 'Stop at Two' campaign in the 1970s",
              "Raising the re-employment age to 69",
              "Building more nursing homes",
              "Singapore's Baby Bonus scheme",
            ],
            answerIndex: 3,
            hint: "'Natal' means to do with birth; 'pro' means in favour of.",
            explanation:
              "The Baby Bonus encourages births, so it is pro-natalist. 'Stop at Two' did the opposite — it was anti-natalist, trying to reduce births.",
            guideRef: "ageing-populations",
          },
        ],
      },
      {
        id: "demog-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          {
            id: "demog-mcq-p2-q01",
            question: "In one year, 50,000 people move into a country and 20,000 people leave it. What is the net migration?",
            options: ["−30,000", "+70,000", "+30,000", "+2.5"],
            answerIndex: 2,
            hint: "Net migration = immigrants − emigrants.",
            explanation:
              "50,000 − 20,000 = +30,000 (a net gain). '+70,000' adds the two flows together, which gives total movement, not net migration.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-mcq-p2-q02",
            question: "Why is natural increase not always the same as a country's total population change?",
            options: [
              "Because migration also adds or removes people",
              "Because death rates are not counted",
              "Because births are counted per 100 people",
              "Because a census is only taken every 10 years",
            ],
            answerIndex: 0,
            hint: "Natural increase only uses two of the four population flows.",
            explanation:
              "Natural increase = births − deaths. Total change also includes net migration. The census timing does not change the real population — only how often we measure it.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-mcq-p2-q03",
            question: "What was special about the 2021 Census in England and Wales?",
            options: [
              "It was the first ever census in the UK",
              "It was the first 'digital-first' census, with most people answering online",
              "It only counted people over 18",
              "It was cancelled because of COVID-19",
            ],
            answerIndex: 1,
            hint: "Think about HOW people answered.",
            explanation:
              "Census 2021 was the first digital-first census. It was not cancelled in England and Wales — only Scotland postponed its census to 2022. The UK's first modern census was in 1801.",
            guideRef: "census",
          },
          {
            id: "demog-mcq-p2-q04",
            question: "Why does Singapore use a 'register-based' census rather than visiting every household?",
            options: [
              "Because it is illegal to visit households",
              "Because Singapore does not need detailed data",
              "Because only citizens are counted",
              "Because using existing government records is quicker and cheaper",
            ],
            answerIndex: 3,
            hint: "Singapore already holds a lot of data in official records.",
            explanation:
              "Using administrative records (like identity card and address records) is quicker, cheaper and less of a burden on households. A sample survey is still used for detailed questions, so it is not true that Singapore doesn't need detail.",
            guideRef: "census",
          },
          {
            id: "demog-mcq-p2-q05",
            question: "Which is a genuine disadvantage of a traditional door-to-door census?",
            options: [
              "It only counts people in cities",
              "It cannot record anyone's age",
              "It is very expensive and quickly becomes out of date",
              "It always counts everyone perfectly",
            ],
            answerIndex: 2,
            hint: "Think about cost and timing.",
            explanation:
              "Censuses cost a great deal and the data ages over the 10 years until the next one. 'Counts everyone perfectly' is false — some people, such as homeless people, are always missed.",
            guideRef: "census",
          },
          {
            id: "demog-mcq-p2-q06",
            question: "Which question is a 'leading question' that should be avoided in a questionnaire?",
            options: [
              "How many people live in your home?",
              "Don't you agree that Singapore is far too crowded?",
              "Which country were you born in?",
              "How do you usually travel to school?",
            ],
            answerIndex: 1,
            hint: "A leading question pushes the person towards one answer.",
            explanation:
              "'Don't you agree…' pressures people to say yes, so the results would be biased. The other questions are neutral and factual.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p2-q07",
            question: "A year group has 120 girls and 80 boys. You want a stratified sample of 50 students. How many girls should you choose?",
            options: ["30", "25", "20", "60"],
            answerIndex: 0,
            hint: "Girls make up what fraction of the year group?",
            explanation:
              "120 ÷ 200 = 60% girls; 60% of 50 = 30 girls (and 20 boys). Choosing 25 of each would be a simple half-and-half split, not stratified.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p2-q08",
            question: "A student surveys only people in the school library at lunchtime about how often they read. What is the main problem?",
            options: [
              "The sample is too large",
              "Library users cannot answer questionnaires",
              "Lunchtime is too short",
              "The sample is biased towards keen readers",
            ],
            answerIndex: 3,
            hint: "Who is likely to be in the library?",
            explanation:
              "People in the library are more likely to be keen readers, so the sample is not representative — it is biased. Sample size is not the main problem here.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p2-q09",
            question: "Which graph is best for showing what percentage of a class was born in each continent?",
            options: ["Line graph", "Scatter graph", "Pie chart", "Climate graph"],
            answerIndex: 2,
            hint: "You are showing parts that add up to a whole (100%).",
            explanation:
              "A pie chart shows parts of a whole. A line graph is for change over time, which is not what this data shows.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p2-q10",
            question: "Why do geographers often use population pyramids with a percentage axis?",
            options: [
              "Because percentages are easier to draw",
              "So countries of very different sizes can be compared fairly",
              "Because actual numbers are secret",
              "So that the pyramid shows the total population",
            ],
            answerIndex: 1,
            hint: "Think about comparing Niger (about 27 million) with India (about 1.4 billion).",
            explanation:
              "A percentage axis shows structure, so very different-sized countries can be compared. It does NOT show the total population — that needs an axis in actual numbers.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p2-q11",
            question: "The UK's population pyramid in the 2020s has a bulge in the 55–64 age groups. What is the most likely cause?",
            options: [
              "A baby boom in the 1960s",
              "A war in the 1960s",
              "Low life expectancy",
              "Emigration of older people",
            ],
            answerIndex: 0,
            hint: "Work out when people aged 55–64 in the 2020s were born.",
            explanation:
              "People aged 55–64 in the 2020s were born around 1958–1970, during the UK's 1960s baby boom. A war would usually create an indent, not a bulge.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p2-q12",
            question: "In most countries the female bars at the top of the pyramid (e.g. 80+) are longer than the male bars. Why?",
            options: [
              "More girls are born than boys",
              "Men migrate abroad when they retire",
              "Censuses do not count older men",
              "Women tend to have a longer life expectancy than men",
            ],
            answerIndex: 3,
            hint: "It is about survival, not births.",
            explanation:
              "Women on average live several years longer than men, so more women survive into the oldest cohorts. In fact slightly MORE boys than girls are born (about 105 per 100).",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p2-q13",
            question: "Qatar's population pyramid has a huge bulge of MALES aged 25–40, much bigger than the female side. What best explains this?",
            options: [
              "A baby boom of boys 30 years ago",
              "Women emigrating from Qatar",
              "Large numbers of male migrant workers",
              "A very high birth rate today",
            ],
            answerIndex: 2,
            hint: "Think about who builds and runs the country's construction projects.",
            explanation:
              "Gulf states such as Qatar employ very large numbers of young male migrant workers, mainly from South Asia. A baby boom would affect both sexes about equally.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p2-q14",
            question: "A country has 45% aged 0–14 and 52% aged 15–64. What is its YOUTH dependency ratio (to 1 d.p.)?",
            options: ["45.0", "86.5", "115.6", "92.3"],
            answerIndex: 1,
            hint: "Youth dependency ratio = 0–14 ÷ 15–64 × 100.",
            explanation:
              "45 ÷ 52 × 100 = 86.5. 115.6 is the fraction upside down (52 ÷ 45). 92.3 would be the TOTAL dependency ratio if 3% were aged 65+ — not what was asked.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-mcq-p2-q15",
            question: "Two countries both have a dependency ratio of 70. What could be very different between them?",
            options: [
              "Whether most dependants are children or elderly people",
              "The number of dependants per 100 workers",
              "The formula used to calculate the ratio",
              "Nothing — they must have identical pyramids",
            ],
            answerIndex: 0,
            hint: "The ratio adds two different groups together.",
            explanation:
              "A ratio of 70 could come mostly from children (like Niger) or mostly from elderly people (like Japan). The number of dependants per 100 workers is the same — that is what 70 means.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-mcq-p2-q16",
            question: "Roughly what percentage of Japan's population is aged 65 or over?",
            options: ["About 5%", "About 10%", "About 15%", "About 29%"],
            answerIndex: 3,
            hint: "Japan is called a 'super-aged' society — over 21% is the threshold.",
            explanation:
              "About 29% of Japanese people are aged 65+, one of the highest shares in the world. About 15% was Singapore's resident share in 2020.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-mcq-p2-q17",
            question: "What was Singapore's resident total fertility rate in 2023?",
            options: ["About 2.1", "About 1.5", "0.97", "About 3.0"],
            answerIndex: 2,
            hint: "It fell below one for the first time.",
            explanation:
              "Singapore's resident TFR was 0.97 in 2023, the first time it fell below 1. 2.1 is replacement level — Singapore has been below that since the mid-1970s.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-mcq-p2-q18",
            question: "Why does the birth rate fall in Stage 3 of the DTM?",
            options: [
              "Because famine and disease kill more babies",
              "Because women have more education and jobs, and contraception is available",
              "Because the government bans large families in every country",
              "Because the death rate rises again",
            ],
            answerIndex: 1,
            hint: "Think about how families' choices change as a country develops.",
            explanation:
              "Education and jobs for women, access to contraception, urbanisation and better child survival all lead families to have fewer children. Very few countries have ever banned large families (China's one-child policy was unusual).",
            guideRef: "dtm",
          },
          {
            id: "demog-mcq-p2-q19",
            question: "When is population growth fastest in the DTM?",
            options: [
              "Late Stage 2 / early Stage 3, when the gap between birth and death rates is widest",
              "Stage 1, when birth rates are highest",
              "Stage 4, when the population is highest",
              "Stage 5, when life expectancy is longest",
            ],
            answerIndex: 0,
            hint: "Growth from natural change = the gap between the two lines.",
            explanation:
              "The widest gap between birth and death rates is at the end of Stage 2 and start of Stage 3. Stage 1 has the highest birth rates, but deaths are just as high, so growth is near zero.",
            guideRef: "dtm",
          },
          {
            id: "demog-mcq-p2-q20",
            question: "To what age is Singapore raising its re-employment age in 2026?",
            options: ["55", "60", "65", "69"],
            answerIndex: 3,
            hint: "It is higher than the retirement age of 64.",
            explanation:
              "The re-employment age rises from 68 to 69 in 2026 and the retirement age from 63 to 64. 65 is the age used in the dependency ratio, not the re-employment age.",
            guideRef: "ageing-populations",
          },
        ],
      },
      {
        id: "demog-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "demog-mcq-p3-q01",
            question: "A country has a birth rate of 15 per 1,000 and a death rate of 18 per 1,000. Which statement is correct?",
            options: [
              "+0.3% natural increase",
              "−3% natural decrease",
              "−0.3% natural decrease",
              "+3.3% natural increase",
            ],
            answerIndex: 2,
            hint: "Subtract the death rate from the birth rate, then divide by 10.",
            explanation:
              "15 − 18 = −3 per 1,000 = −0.3% per year: a natural decrease. '−3%' forgets that the rates are per 1,000, not per 100.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-mcq-p3-q02",
            question: "Singapore's total population is about 6 million but its resident population is only about 4.2 million. Who makes up most of the difference?",
            options: [
              "Non-residents such as foreign workers, students and their dependants",
              "Tourists visiting on the census day",
              "Singaporeans living overseas",
              "Babies born that year",
            ],
            answerIndex: 0,
            hint: "Residents = citizens + permanent residents. Who else lives here?",
            explanation:
              "The non-resident population (about 1.8–1.9 million) includes foreign workers, international students and dependants living in Singapore. Tourists are only visiting and are not counted as part of the population.",
            guideRef: "census",
          },
          {
            id: "demog-mcq-p3-q03",
            question: "Which of these would a national census be LEAST likely to ask?",
            options: [
              "Your age and sex",
              "The type of home you live in",
              "How you travel to work or school",
              "Your favourite food",
            ],
            answerIndex: 3,
            hint: "A census collects information that helps plan services.",
            explanation:
              "Favourite food does not help plan schools, housing or transport, so it is not asked. Travel to work IS asked — it helps plan MRT and bus routes.",
            guideRef: "census",
          },
          {
            id: "demog-mcq-p3-q04",
            question: "Which group of people is most likely to be missed by a census?",
            options: [
              "Children in primary school",
              "Homeless people and undocumented migrants",
              "People who own a house",
              "Retired people living with family",
            ],
            answerIndex: 1,
            hint: "Who has no fixed address or may avoid official forms?",
            explanation:
              "People without a fixed address, or who fear officials, are hardest to count. Retired people living with family are recorded by their household like everyone else.",
            guideRef: "census",
          },
          {
            id: "demog-mcq-p3-q05",
            question: "In a class census of 25 students, 16 were born outside Singapore. What percentage is this?",
            options: ["16%", "40%", "64%", "36%"],
            answerIndex: 2,
            hint: "(part ÷ whole) × 100.",
            explanation:
              "16 ÷ 25 × 100 = 64%. 36% is the percentage born IN Singapore (9 ÷ 25), the opposite group.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p3-q06",
            question: "Why would it be unwise to use one international-school class census to describe the whole of Singapore?",
            options: [
              "The sample is small and not representative of Singapore's population",
              "Tally charts are not accurate",
              "Pie charts cannot show nationality",
              "Students always give false answers",
            ],
            answerIndex: 0,
            hint: "Think about sample size AND who is in the sample.",
            explanation:
              "25 students at one international school is a small, biased sample — many more were born abroad than in Singapore as a whole. Tally charts are a perfectly accurate way to record data.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p3-q07",
            question: "Which of these is a hypothesis for a class census?",
            options: [
              "What is the most common number of siblings?",
              "Ask everyone how many siblings they have.",
              "Draw a bar chart of siblings.",
              "Most students in our class have exactly one sibling.",
            ],
            answerIndex: 3,
            hint: "A hypothesis is a statement that can be tested and proved true or false.",
            explanation:
              "'Most students have exactly one sibling' is a testable statement. 'What is the most common…' is a question (an enquiry question), not a hypothesis.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p3-q08",
            question: "Why should a class census questionnaire be anonymous?",
            options: [
              "So it takes less time",
              "To protect privacy and encourage honest answers",
              "So the teacher can mark it",
              "Because names make tally charts harder",
            ],
            answerIndex: 1,
            hint: "Think about ethics and how people feel answering personal questions.",
            explanation:
              "Anonymity protects people's privacy, so they are more willing to answer honestly. It does not really save time — the main reason is ethical.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p3-q09",
            question: "A pyramid's horizontal axis is labelled 'Population (millions)'. The male 0–4 bar reaches 3. What does this mean?",
            options: [
              "3% of the population are boys aged 0–4",
              "3,000 boys are aged 0–4",
              "About 3 million males are aged 0–4",
              "The birth rate is 3 per 1,000",
            ],
            answerIndex: 2,
            hint: "Read the axis label carefully before interpreting the bar.",
            explanation:
              "With an axis in millions, the bar shows about 3 million males aged 0–4. '3%' would only be correct if the axis showed percentages.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p3-q10",
            question: "A pyramid has almost straight, vertical sides up to about age 65. What does this show?",
            options: [
              "Most people survive into old age — a low death rate",
              "A very high birth rate",
              "Many young adults have emigrated",
              "A recent war",
            ],
            answerIndex: 0,
            hint: "Sides show how many people survive from one cohort to the next.",
            explanation:
              "Straight sides mean each cohort is about the same size as the one below, so few people die before old age. A war would cause an indent, not straight sides.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p3-q11",
            question: "Singapore's TOTAL population pyramid (including non-residents) has a much wider middle (ages about 25–39) than its resident pyramid. Why?",
            options: [
              "A baby boom 25–39 years ago",
              "Low life expectancy",
              "Older residents moving overseas",
              "Many working-age foreign workers living in Singapore",
            ],
            answerIndex: 3,
            hint: "What is the difference between the two pyramids?",
            explanation:
              "Foreign workers are mostly young adults, so including them widens the working-age cohorts. A baby boom would show in the resident pyramid too — but it doesn't.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p3-q12",
            question: "China's one-child policy (about 1980–2015) is most likely to appear on its pyramid as:",
            options: [
              "A wide base of young children",
              "Narrower cohorts for people born after 1980, compared with the generation before",
              "A bulge in the 80+ age groups",
              "More females than males in every cohort",
            ],
            answerIndex: 1,
            hint: "The policy reduced births — which cohorts were born then?",
            explanation:
              "Fewer births after 1980 created narrower cohorts for those generations. A wide base would mean MORE births, the opposite of what the policy did.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p3-q13",
            question: "What does a dependency ratio of 100 mean?",
            options: [
              "Everyone in the country is a dependant",
              "100% of people are working",
              "There is one dependant for every working-age person",
              "There are 100 dependants in total",
            ],
            answerIndex: 2,
            hint: "The ratio is dependants per 100 working-age people.",
            explanation:
              "100 dependants per 100 workers = one dependant for each working-age person. It is a ratio, not a total, so '100 dependants in total' is wrong.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-mcq-p3-q14",
            question: "Which is a limitation of the dependency ratio?",
            options: [
              "It assumes everyone aged 15–64 works and everyone else does not",
              "It cannot be calculated from census data",
              "It only works for Singapore",
              "It ignores children completely",
            ],
            answerIndex: 0,
            hint: "Think about real 17-year-olds and real 67-year-olds.",
            explanation:
              "Many 15–19 year-olds are studying and many over-65s still work, so the ratio is a simplification. It definitely includes children (0–14) in the top of the formula.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-mcq-p3-q15",
            question: "Niger's median age is about 15. What does this mean?",
            options: [
              "Most people die at 15",
              "The average family has 15 children",
              "People must work from age 15",
              "Half the population is younger than about 15",
            ],
            answerIndex: 3,
            hint: "The median is the middle value when everyone is lined up by age.",
            explanation:
              "The median age splits the population into two equal halves, so about half of Niger's people are under 15. It is not the age at which people die — life expectancy is about 62.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-mcq-p3-q16",
            question: "What is meant by India's possible 'demographic dividend'?",
            options: [
              "Money paid to families for each child",
              "A period of economic growth when there are many working-age people and relatively few dependants",
              "The division of India into states by population",
              "A fall in the death rate",
            ],
            answerIndex: 1,
            hint: "A dividend is a bonus or reward.",
            explanation:
              "When fertility falls, a large working-age group with fewer dependants can boost the economy — if there are enough jobs. 'Money paid for each child' describes a pro-natalist payment like the Baby Bonus.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-mcq-p3-q17",
            question: "The UK's fertility rate is about 1.4–1.5, below replacement level, yet its population keeps growing. What is the main reason?",
            options: [
              "Net immigration",
              "A rising death rate",
              "A baby boom in the 2020s",
              "The census counts people twice",
            ],
            answerIndex: 0,
            hint: "Remember the four population flows.",
            explanation:
              "Net migration into the UK has been high, adding many people (mostly young adults). A rising death rate would REDUCE the population, not increase it.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-mcq-p3-q18",
            question: "Which is a valid criticism of the Demographic Transition Model?",
            options: [
              "It shows birth rates as well as death rates",
              "It has too many stages",
              "It ignores migration and is based mainly on European history",
              "It can be drawn as a graph",
            ],
            answerIndex: 2,
            hint: "Which flows of population are missing from the model?",
            explanation:
              "The DTM shows only natural change, ignoring migration, and was based on the experience of Europe. Showing both rates is a strength, not a criticism.",
            guideRef: "dtm",
          },
          {
            id: "demog-mcq-p3-q19",
            question: "A country has a birth rate of 38 per 1,000, a death rate of 12 per 1,000 and a rapidly growing population. Which DTM stage is it most likely in?",
            options: ["Stage 1", "Stage 2", "Stage 4", "Stage 5"],
            answerIndex: 1,
            hint: "Birth rate still very high, death rate already much lower.",
            explanation:
              "A very high birth rate with a much lower death rate means rapid growth — Stage 2. In Stage 1 the death rate would be about as high as the birth rate.",
            guideRef: "dtm",
          },
          {
            id: "demog-mcq-p3-q20",
            question: "Which is an OPPORTUNITY created by an ageing population?",
            options: [
              "Rising pension costs",
              "Shortage of workers",
              "More pressure on hospitals",
              "A growing 'silver economy' of products and services for older people",
            ],
            answerIndex: 3,
            hint: "Three of these are challenges; one is a positive.",
            explanation:
              "Older people spend money on travel, health, leisure and services — the silver economy — and many volunteer or look after grandchildren. The other three options are challenges.",
            guideRef: "ageing-populations",
          },
        ],
      },
      {
        id: "demog-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "demog-mcq-p4-q01",
            question: "A country of 5 million has a birth rate of 9 per 1,000, a death rate of 7 per 1,000 and net migration of +20,000 in a year. By how much does its population change?",
            options: ["+10,000", "+20,000", "+30,000", "+100,000"],
            answerIndex: 2,
            hint: "Work out natural increase in people first, then add migration.",
            explanation:
              "Natural increase = (9 − 7) per 1,000 = 2 per 1,000 × 5,000 thousand = 10,000. Add net migration of 20,000 = +30,000. '+10,000' forgets migration.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-mcq-p4-q02",
            question: "Singapore's total population was about 5.08 million in 2010 and about 5.69 million in 2020. What was the percentage change (to 1 d.p.)?",
            options: ["+12.0%", "+10.7%", "+0.6%", "+61.0%"],
            answerIndex: 0,
            hint: "% change = (new − old) ÷ OLD × 100.",
            explanation:
              "(5.69 − 5.08) ÷ 5.08 × 100 = 0.61 ÷ 5.08 × 100 ≈ 12.0%. +10.7% divides by the NEW value (5.69) instead of the old one — a classic error.",
            guideRef: "census",
          },
          {
            id: "demog-mcq-p4-q03",
            question: "Singapore's register-based census still includes a large household sample survey. Why?",
            options: [
              "Because government records do not exist",
              "Because administrative records do not hold details such as languages spoken or how people travel to work",
              "Because the law requires every household to be visited",
              "Because samples are more accurate than full counts",
            ],
            answerIndex: 1,
            hint: "What would an identity card record NOT tell you?",
            explanation:
              "Records give basic facts like age, sex and address, but not detailed characteristics; the survey fills these gaps. Samples are cheaper, but not automatically more accurate than a full count.",
            guideRef: "census",
          },
          {
            id: "demog-mcq-p4-q04",
            question: "The 2021 Census showed about 18.6% of people in England and Wales were aged 65+, up from about 16.4% in 2011. Which planning response is MOST justified by this data?",
            options: [
              "Building more primary schools",
              "Reducing the number of GP surgeries",
              "Cutting bus services for older people",
              "Expanding healthcare and social care for older people",
            ],
            answerIndex: 3,
            hint: "Which age group is growing?",
            explanation:
              "A growing share of over-65s means more demand for healthcare, social care and accessible transport. Building primary schools would respond to a rise in young children, which the data does not show.",
            guideRef: "census",
          },
          {
            id: "demog-mcq-p4-q05",
            question: "You want to compare the number of siblings for boys and girls in your class on one graph. Which is most suitable?",
            options: [
              "A single pie chart",
              "A line graph",
              "A comparative (side-by-side) bar chart",
              "A population pyramid",
            ],
            answerIndex: 2,
            hint: "You need categories AND two groups side by side.",
            explanation:
              "A comparative bar chart puts boys' and girls' bars next to each other for each category. A single pie chart can only show one set of parts of a whole.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p4-q06",
            question: "A student surveys only their friends because it is quick. What kind of sample is this, and what is the problem?",
            options: [
              "Random — everyone has an equal chance",
              "Systematic — chosen at regular intervals",
              "Stratified — groups in correct proportions",
              "Convenience (opportunity) — likely to be biased",
            ],
            answerIndex: 3,
            hint: "The choice is based on who is easy to reach.",
            explanation:
              "Choosing whoever is easiest is convenience (opportunity) sampling. Friends often share similar backgrounds, so the sample is biased. It is not random, because people outside the friendship group have no chance of being picked.",
            guideRef: "class-census",
          },
          {
            id: "demog-mcq-p4-q07",
            question: "Which is the best exam-style description of part of a population pyramid?",
            options: [
              "The pyramid is big at the bottom.",
              "The base is wide: about 8% of the population are males aged 0–4 and about 7.5% are females aged 0–4, suggesting a high birth rate.",
              "There are lots of babies because people like babies.",
              "The pyramid looks like a triangle.",
            ],
            answerIndex: 1,
            hint: "Examiners reward data quoted from the axis and geographical terms.",
            explanation:
              "The best answer uses a term (base), quotes data from the axis and links it to the birth rate. 'Big at the bottom' and 'looks like a triangle' are vague with no data.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p4-q08",
            question: "In 2020 a country's pyramid has a bulge in the 55–59 cohort. Assuming no migration, where will this bulge be in 2035?",
            options: ["70–74", "60–64", "55–59", "40–44"],
            answerIndex: 0,
            hint: "Each cohort moves up as the years pass.",
            explanation:
              "15 years later the same people are 70–74. Cohorts move UP the pyramid over time; '40–44' would mean they got younger.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p4-q09",
            question: "A pyramid shows an indent affecting only the MALE side in the 20–40 age groups, in a country recently at war. What is the most likely explanation?",
            options: [
              "A fall in the birth rate 20–40 years ago",
              "Better healthcare for men",
              "Deaths of young men who fought in the war",
              "A baby boom of girls",
            ],
            answerIndex: 2,
            hint: "If births had fallen, which side(s) would be affected?",
            explanation:
              "Because only males of fighting age are missing, war deaths among soldiers are most likely. A fall in births would narrow BOTH the male and female sides.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-mcq-p4-q10",
            question: "A country has 0.7 million people aged 0–14, 0.8 million aged 65+ and 2.7 million aged 15–64. What is its dependency ratio (to 1 d.p.)?",
            options: ["35.7", "180.0", "55.6", "29.6"],
            answerIndex: 2,
            hint: "The formula works with actual numbers as well as percentages.",
            explanation:
              "(0.7 + 0.8) ÷ 2.7 × 100 = 1.5 ÷ 2.7 × 100 = 55.6. 35.7 divides by the whole population (4.2 million) instead of the working-age group; 29.6 is only the old-age part.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-mcq-p4-q11",
            question: "Over 30 years a country's dependency ratio rises from 50 to 75, while the share of under-15s falls. What must be happening?",
            options: [
              "The birth rate is rising quickly",
              "The share of elderly dependants is rising faster than the share of children is falling",
              "More young adults are immigrating",
              "Life expectancy is falling",
            ],
            answerIndex: 1,
            hint: "If one dependent group shrinks but the total ratio rises, the other group must grow.",
            explanation:
              "With fewer children but a higher ratio, the 65+ group must be growing quickly — classic population ageing. Immigration of young adults would lower the ratio, not raise it.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-mcq-p4-q12",
            question: "Country P: TFR about 1.2, about 29% aged 65+, population falling. Country Q: TFR about 2.0, median age about 28, population about 1.4 billion. Which pair is correct?",
            options: [
              "P = Niger, Q = UK",
              "P = UK, Q = Japan",
              "P = Singapore, Q = Niger",
              "P = Japan, Q = India",
            ],
            answerIndex: 3,
            hint: "Which country is shrinking? Which has around 1.4 billion people?",
            explanation:
              "Japan has a TFR of about 1.2, about 29% aged 65+ and a falling population; India has about 1.4 billion people and a TFR near 2.0. Niger's TFR is about 6, so it cannot be either.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-mcq-p4-q13",
            question: "Why does Singapore's resident pyramid look like a vase, with a base narrower than the middle?",
            options: [
              "Births have been well below replacement level for decades, while earlier larger generations are now middle-aged and older",
              "The death rate among children is very high",
              "Most residents emigrate before age 15",
              "Singapore has a very high birth rate",
            ],
            answerIndex: 0,
            hint: "Each new generation of babies is smaller than the generation of parents.",
            explanation:
              "Fertility has been below 2.1 since the mid-1970s, so younger cohorts are smaller than older ones. Child deaths in Singapore are among the lowest in the world, so that is not the cause.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-mcq-p4-q14",
            question: "Which of these is NOT a reason for Niger's very high fertility rate?",
            options: [
              "Children help on family farms",
              "Limited access to contraception",
              "High costs of housing and education in cities",
              "High infant mortality, so families have more children in case some die",
            ],
            answerIndex: 2,
            hint: "One option is a reason why fertility is LOW in places like Singapore.",
            explanation:
              "High housing and education costs discourage large families — they help explain LOW fertility in Singapore. The other three options all help explain Niger's high fertility.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-mcq-p4-q15",
            question: "The UK took about 200 years to move from Stage 2 to Stage 4; Singapore and South Korea took about 50. What does this show about the DTM?",
            options: [
              "The DTM is wrong about the order of the stages",
              "The DTM does not give a timescale — countries can move through it at very different speeds",
              "Singapore skipped Stage 3",
              "The UK is still in Stage 2",
            ],
            answerIndex: 1,
            hint: "The model shows the order of change, but not…?",
            explanation:
              "The DTM has no time axis in years, so it cannot predict how fast a country moves. The order of stages still held for Singapore — it did not skip Stage 3.",
            guideRef: "dtm",
          },
          {
            id: "demog-mcq-p4-q16",
            question: "In Stage 3 the birth rate is falling, yet the total population line on the DTM keeps rising. Why?",
            options: [
              "The death rate is rising",
              "Immigration is shown on the DTM",
              "The birth rate is below the death rate",
              "The birth rate is still higher than the death rate",
            ],
            answerIndex: 3,
            hint: "Population grows whenever there is a gap with births above deaths.",
            explanation:
              "Even though births are falling, there are still more births than deaths, so natural increase continues (just more slowly). Immigration is not part of the DTM at all.",
            guideRef: "dtm",
          },
          {
            id: "demog-mcq-p4-q17",
            question: "A country's pyramid is column-shaped: narrow base, straight sides and a fairly wide top. Which DTM stage does it best match?",
            options: ["Stage 4", "Stage 1", "Stage 2", "Stage 3"],
            answerIndex: 0,
            hint: "Low births AND low deaths.",
            explanation:
              "A column means low birth rates (narrow base) and low death rates (straight sides) — Stage 4, like the UK. Stage 2 would show a wide base and concave sides.",
            guideRef: "dtm",
          },
          {
            id: "demog-mcq-p4-q18",
            question: "Which policy would take the LONGEST to reduce Singapore's old-age dependency ratio?",
            options: [
              "Raising the re-employment age",
              "Recruiting foreign workers",
              "Paying a Baby Bonus to encourage births",
              "Encouraging older people to return to work",
            ],
            answerIndex: 2,
            hint: "How long does a newborn take to become 'working age'?",
            explanation:
              "Babies born today only join the 15–64 group in about 15 years (and most do not work until their 20s). Raising the re-employment age or recruiting workers affects the workforce almost immediately.",
            guideRef: "ageing-populations",
          },
          {
            id: "demog-mcq-p4-q19",
            question: "What is the main limitation of using immigration to solve an ageing population?",
            options: [
              "Immigrants never pay taxes",
              "Immigrants also grow old, so more and more immigration is needed over time",
              "Immigrants are always elderly",
              "Immigration lowers life expectancy",
            ],
            answerIndex: 1,
            hint: "Fast-forward 40 years for today's young immigrants.",
            explanation:
              "Young immigrants help today, but they will age too, so the problem is delayed rather than solved. Most immigrants are of working age and do pay taxes, so 'never pay taxes' is false.",
            guideRef: "ageing-populations",
          },
          {
            id: "demog-mcq-p4-q20",
            question: "A country has 12% aged 0–14, 30% aged 65+ and 58% aged 15–64. What is its OLD-AGE dependency ratio (to 1 d.p.)?",
            options: ["30.0", "72.4", "193.3", "51.7"],
            answerIndex: 3,
            hint: "Old-age dependency ratio = 65+ ÷ 15–64 × 100. Ignore the children.",
            explanation:
              "30 ÷ 58 × 100 = 51.7. 72.4 is the TOTAL dependency ratio ((12 + 30) ÷ 58 × 100), which includes children and was not asked for.",
            guideRef: "ageing-populations",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "demog-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "demog-qa-p1-q01",
            question: "Define 'demography' and name one measure demographers use to describe population change.",
            marks: 2,
            hint: "One mark for the definition, one for a named measure.",
            modelAnswer:
              "Demography is the study of human populations — their size, structure and how they change over time. One measure is the birth rate (the number of live births per 1,000 people per year).",
            markScheme: [
              { point: "Study of human population size/structure/change", keywords: ["study of", "studying", "human population", "structure", "population change", "change over time"] },
              { point: "Names a measure (birth rate, death rate, natural increase, TFR, migration, life expectancy)", keywords: ["birth rate", "death rate", "natural increase", "fertility", "migration", "life expectancy"] },
            ],
            commonError: "Confusing demography with democracy, or naming a measure without saying what it measures.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-qa-p1-q02",
            question: "A country has a birth rate of 28 per 1,000 and a death rate of 8 per 1,000. Calculate its natural increase per 1,000 and as a percentage per year. Show your working.",
            marks: 2,
            hint: "Subtract first; then convert 'per 1,000' to 'per 100'.",
            modelAnswer:
              "Natural increase = 28 − 8 = 20 per 1,000. As a percentage: 20 ÷ 10 = 2.0% per year.",
            markScheme: [
              { point: "20 per 1,000", keywords: ["20 per", "= 20", "20‰", "20 per 1,000", "28 - 8", "28 − 8"] },
              { point: "2% per year", keywords: ["2%", "2.0%", "2 %", "2 percent", "2.0 %"] },
            ],
            commonError: "Writing 20% — forgetting that rates are per 1,000, so you divide by 10 to get a percentage.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-qa-p1-q03",
            question: "State three types of information that a national census collects.",
            marks: 3,
            hint: "Think about the person, their home and their daily life.",
            modelAnswer:
              "A census collects each person's age and sex, the type of housing they live in (e.g. HDB flat), and how they travel to work or school. It also records education, jobs, ethnicity and languages spoken.",
            markScheme: [
              { point: "Age and/or sex", keywords: ["age", "sex", "gender", "born"] },
              { point: "Housing / household information", keywords: ["hous", "home", "flat", "dwelling", "address"] },
              { point: "A third valid type (job, travel, education, ethnicity, religion, language, citizenship)", keywords: ["job", "travel", "educat", "ethnic", "language", "religio"] },
            ],
            commonError: "Listing things a census does not ask, such as opinions or favourite activities.",
            guideRef: "census",
          },
          {
            id: "demog-qa-p1-q04",
            question: "Describe how Singapore carries out its census.",
            marks: 3,
            hint: "Who runs it, how often, and where most of the data comes from.",
            modelAnswer:
              "Singapore's census is run by the Department of Statistics (SingStat) every 10 years; the latest was Census 2020. Since 2000 it has been register-based: most basic data comes from government administrative records such as identity card and address records. A large sample survey of households is added to collect detailed information, which people answer online, by phone or face-to-face.",
            markScheme: [
              { point: "Run by SingStat / every 10 years / Census 2020", keywords: ["singstat", "department of statistics", "10 years", "2020", "ten years"] },
              { point: "Register-based / uses administrative records", keywords: ["register", "record", "administrative", "database", "identity card"] },
              { point: "Plus a sample survey of households", keywords: ["sample", "survey", "household", "online", "questionnaire"] },
            ],
            commonError: "Assuming officials still knock on every door in Singapore to ask every question.",
            guideRef: "census",
          },
          {
            id: "demog-qa-p1-q05",
            question: "Explain the difference between an open question and a closed question. Give an example of each that could be used in a class census.",
            marks: 4,
            hint: "Define each, then give one example of each.",
            modelAnswer:
              "A closed question has a fixed set of answers to choose from, so it is quick to tally — for example, 'How many siblings do you have? 0 / 1 / 2 / 3 or more'. An open question lets people answer in their own words, giving richer detail but making results harder to count — for example, 'Why did your family move to Singapore?'",
            markScheme: [
              { point: "Closed = fixed/limited choice of answers", keywords: ["fixed", "choose", "options", "limited", "tick", "set answers"] },
              { point: "Valid closed example", keywords: ["how many", "yes/no", "yes or no", "which country", "0 / 1", "tick"] },
              { point: "Open = answer in own words / detailed", keywords: ["own words", "any answer", "detail", "open-ended", "opinion", "richer"] },
              { point: "Valid open example", keywords: ["why", "describe", "what do you think", "how do you feel", "tell"] },
            ],
            commonError: "Giving examples without explaining the difference, or giving a leading question as an example.",
            guideRef: "class-census",
          },
          {
            id: "demog-qa-p1-q06",
            question: "Describe three different sampling methods that could be used for a survey of your year group.",
            marks: 3,
            hint: "Random, systematic and ...?",
            modelAnswer:
              "Random sampling: every student has an equal chance of being chosen, e.g. pulling names out of a hat. Systematic sampling: choosing at regular intervals, e.g. every 5th name on the year list. Stratified sampling: choosing so that groups are represented in the right proportions, e.g. if 55% of the year are girls, 55% of the sample are girls.",
            markScheme: [
              { point: "Random — equal chance", keywords: ["random", "equal chance", "hat", "chance"] },
              { point: "Systematic — regular interval", keywords: ["systematic", "every 5th", "interval", "every nth", "every 10th", "regular"] },
              { point: "Stratified — groups in correct proportions", keywords: ["stratified", "proportion", "represent", "groups", "strata"] },
            ],
            commonError: "Naming the methods without describing how each one picks people.",
            guideRef: "class-census",
          },
          {
            id: "demog-qa-p1-q07",
            question: "A class census of 25 students recorded country of birth: Singapore 9; UK 6; India 4; Australia 3; Other 3. (a) What percentage were born in the UK? (b) What angle should the UK slice be on a pie chart?",
            marks: 2,
            hint: "Percentage = 6 ÷ 25 × 100. Angle = 6 ÷ 25 × 360°.",
            modelAnswer:
              "(a) 6 ÷ 25 × 100 = 24%. (b) 6 ÷ 25 × 360° = 86.4° (about 86°).",
            markScheme: [
              { point: "24%", keywords: ["24%", "24 %", "24 percent", "24"] },
              { point: "86.4 degrees", keywords: ["86.4", "86°", "86 degrees", "86"] },
            ],
            commonError: "Using 24° as the angle — the percentage must be multiplied by 3.6 (or the fraction by 360).",
            guideRef: "class-census",
          },
          {
            id: "demog-qa-p1-q08",
            question: "Explain how to read a population pyramid: what do the vertical axis, the horizontal axis and the two sides show?",
            marks: 3,
            hint: "Three parts: up the middle, along the bottom, left and right.",
            modelAnswer:
              "The vertical axis shows age groups (cohorts), usually in 5-year bands, with the youngest at the bottom and oldest at the top. The horizontal axis shows the percentage of the total population (or the actual number) in each cohort. Males are shown on the left and females on the right.",
            markScheme: [
              { point: "Vertical = age groups/cohorts, young at bottom", keywords: ["age group", "cohort", "age", "5-year", "five year"] },
              { point: "Horizontal = % or number of population", keywords: ["percent", "%", "number", "million", "proportion"] },
              { point: "Males left, females right", keywords: ["male", "female", "women", "left side", "left", "sex"] },
            ],
            commonError: "Thinking the horizontal axis shows time or years.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-qa-p1-q09",
            question: "A population pyramid shows a bulge in the 30–39 age groups. Suggest two possible causes.",
            marks: 2,
            hint: "A bulge means MORE people than expected in those cohorts.",
            modelAnswer:
              "It could be caused by a baby boom 30–39 years earlier, when many more babies were born. It could also be caused by immigration of working-age people, such as foreign workers moving in for jobs.",
            markScheme: [
              { point: "Baby boom / high births 30–39 years ago", keywords: ["baby boom", "more births", "high birth", "boom", "more babies"] },
              { point: "Immigration of working-age people", keywords: ["immigra", "migrant", "foreign worker", "moved in", "migration"] },
            ],
            commonError: "Suggesting a war or famine — those cause indents, not bulges.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-qa-p1-q10",
            question: "A country has 40% of its population aged 0–14, 4% aged 65+ and 56% aged 15–64. Calculate the dependency ratio. Show your working.",
            marks: 2,
            hint: "(0–14 + 65+) ÷ (15–64) × 100.",
            modelAnswer:
              "Dependency ratio = (40 + 4) ÷ 56 × 100 = 44 ÷ 56 × 100 = 78.6. There are about 79 dependants for every 100 working-age people.",
            markScheme: [
              { point: "Correct working: 44 ÷ 56", keywords: ["44", "44/56", "44 ÷ 56", "40 + 4"] },
              { point: "Answer 78.6 (or 79)", keywords: ["78.6", "78.57", "79", "78.5"] },
            ],
            commonError: "Dividing 56 by 44 (answer 127) — the working-age group must go on the bottom.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-qa-p1-q11",
            question: "Describe the shape of Japan's population pyramid and what it shows.",
            marks: 3,
            hint: "Base, top, and what that means for birth rate and life expectancy.",
            modelAnswer:
              "Japan's pyramid has a narrow base, showing a low birth rate (TFR about 1.2, only about 11–12% under 15). It is widest in the older age groups and has a wide top, showing high life expectancy — about 29% of people are aged 65+. Overall it looks top-heavy or inverted, showing an ageing and shrinking population.",
            markScheme: [
              { point: "Narrow base → low birth rate", keywords: ["narrow base", "small base", "low birth", "few children", "1.2"] },
              { point: "Wide top → many elderly / long life expectancy", keywords: ["wide top", "elderly", "old", "29%", "life expectancy", "65+"] },
              { point: "Overall top-heavy / inverted / ageing / shrinking", keywords: ["top-heavy", "top heavy", "inverted", "ageing", "aging", "shrink"] },
            ],
            commonError: "Describing the shape without linking it to birth rate or life expectancy, or not quoting any figures.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-qa-p1-q12",
            question: "Describe what happens to the birth rate, death rate and total population in Stage 2 of the Demographic Transition Model.",
            marks: 3,
            hint: "One mark for each line on the graph.",
            modelAnswer:
              "In Stage 2 the birth rate stays high (about 35–40 per 1,000). The death rate falls rapidly because of better healthcare, clean water and food supply. Because births are now far higher than deaths, the total population grows rapidly.",
            markScheme: [
              { point: "Birth rate stays high", keywords: ["birth rate stays high", "birth rate remains high", "high birth", "birth rate high", "births stay"] },
              { point: "Death rate falls rapidly", keywords: ["death rate falls", "death rate drops", "falling death", "death rate decreases", "deaths fall"] },
              { point: "Population grows rapidly", keywords: ["population grows", "population increases", "grows rapidly", "rapid growth", "population rises", "expand"] },
            ],
            commonError: "Saying the birth rate falls in Stage 2 — it falls in Stage 3.",
            guideRef: "dtm",
          },
          {
            id: "demog-qa-p1-q13",
            question: "Name one example country for Stage 3, one for Stage 4 and one for Stage 5 of the DTM.",
            marks: 3,
            hint: "Think of India, the UK and Japan.",
            modelAnswer:
              "Stage 3: India (or Kenya, Bangladesh). Stage 4: the UK (or USA, France). Stage 5: Japan (or Italy, Germany).",
            markScheme: [
              { point: "Stage 3 example", keywords: ["india", "kenya", "bangladesh", "brazil", "mexico"] },
              { point: "Stage 4 example", keywords: ["uk", "united kingdom", "usa", "france", "britain", "australia"] },
              { point: "Stage 5 example", keywords: ["japan", "italy", "germany", "south korea", "korea"] },
            ],
            commonError: "Putting Niger in Stage 3 or the UK in Stage 5.",
            guideRef: "dtm",
          },
          {
            id: "demog-qa-p1-q14",
            question: "What is an ageing population? Give two causes.",
            marks: 3,
            hint: "A definition, then two reasons why the proportion of older people rises.",
            modelAnswer:
              "An ageing population is one in which the proportion of older people (65+) is increasing and the median age is rising. One cause is a falling birth rate, so there are fewer young people. Another is rising life expectancy, due to better healthcare and diets, so more people live into old age.",
            markScheme: [
              { point: "Definition: rising proportion of older people / rising median age", keywords: ["proportion", "percentage", "median age", "more older", "share"] },
              { point: "Cause: falling birth rate", keywords: ["falling birth", "birth rate falls", "fewer babies", "fertility", "fewer children", "low birth"] },
              { point: "Cause: rising life expectancy", keywords: ["life expectancy", "live longer", "healthcare", "medic", "longer lives"] },
            ],
            commonError: "Defining it as 'lots of old people' without mentioning proportion or change over time.",
            guideRef: "ageing-populations",
          },
          {
            id: "demog-qa-p1-q15",
            question: "Explain how census data could help the Singapore government plan for its ageing population.",
            marks: 4,
            hint: "What does a census tell you, and which services does that help plan?",
            modelAnswer:
              "A census shows how many older people there are and where they live, for example which HDB estates have many residents aged 65+. This helps the government plan where to build new eldercare facilities, polyclinics and Active Ageing Centres. It also shows how many working-age people there will be, which helps plan the workforce and decisions such as raising the re-employment age. Comparing censuses (e.g. 2010 and 2020) shows how fast ageing is happening, so services can be ready in time.",
            markScheme: [
              { point: "Census shows number/age/location of older people", keywords: ["how many", "number of", "where they live", "location", "estate", "aged 65"] },
              { point: "Plan healthcare/eldercare facilities", keywords: ["eldercare", "hospital", "polyclinic", "nursing", "healthcare", "active ageing"] },
              { point: "Plan workforce/pensions/retirement policy", keywords: ["workforce", "worker", "retirement", "re-employment", "pension", "cpf"] },
              { point: "Compares censuses to show trends/speed of change", keywords: ["compare", "trend", "2010", "change over time", "faster", "predict"] },
            ],
            commonError: "Listing services without explaining how census data links to them.",
            guideRef: "census",
          },
        ],
      },
      {
        id: "demog-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "demog-qa-p2-q01",
            question: "Define 'total fertility rate' and explain what 'replacement level' means.",
            marks: 2,
            hint: "Replacement level is a particular TFR value.",
            modelAnswer:
              "Total fertility rate is the average number of children a woman would have during her lifetime. Replacement level is a TFR of about 2.1 — enough children to replace both parents, with 0.1 extra to allow for children who die young.",
            markScheme: [
              { point: "Average number of children per woman", keywords: ["children per woman", "average number of children", "per woman", "each woman"] },
              { point: "Replacement = about 2.1, replacing both parents", keywords: ["2.1", "replace", "both parents", "two parents"] },
            ],
            commonError: "Confusing TFR with birth rate (which is per 1,000 people per year).",
            guideRef: "studying-demography",
          },
          {
            id: "demog-qa-p2-q02",
            question: "Country X: birth rate 42 per 1,000, death rate 10 per 1,000. Country Y: birth rate 9 per 1,000, death rate 11 per 1,000. Calculate the natural change for each as a percentage, and comment on what this means for each population.",
            marks: 4,
            hint: "Birth rate − death rate, then ÷ 10. A negative answer is natural decrease.",
            modelAnswer:
              "Country X: 42 − 10 = 32 per 1,000 = 3.2% per year — very rapid natural increase, so the population will grow quickly (likely Stage 2). Country Y: 9 − 11 = −2 per 1,000 = −0.2% per year — natural decrease, so without immigration the population will shrink (Stage 5, like Japan).",
            markScheme: [
              { point: "X = 3.2%", keywords: ["3.2", "3.2%", "32 per"] },
              { point: "X grows rapidly / Stage 2", keywords: ["rapid", "grow quickly", "fast", "stage 2", "increase quickly"] },
              { point: "Y = −0.2%", keywords: ["0.2", "2 per 1,000", "minus 0.2", "negative"] },
              { point: "Y shrinks / natural decrease / Stage 5", keywords: ["shrink", "decrease", "decline", "stage 5", "fall"] },
            ],
            commonError: "Giving 32% and −2% — forgetting to divide by 10.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-qa-p2-q03",
            question: "Explain two problems with carrying out a national census.",
            marks: 4,
            hint: "Two problems, each with an explanation of WHY it matters.",
            modelAnswer:
              "First, a census is very expensive because millions of forms must be delivered, collected and processed — money that could be spent on other services. Second, some people are missed, such as homeless people or undocumented migrants, so the count is incomplete and services for these groups may be under-planned. (Also: data goes out of date over the 10 years between censuses.)",
            markScheme: [
              { point: "Problem 1 identified (cost / out of date / people missed / false answers)", keywords: ["expensive", "cost", "out of date", "missed", "false", "lie"] },
              { point: "Problem 1 explained", keywords: ["because", "therefore", "which means", "millions", "10 years"] },
              { point: "Problem 2 identified", keywords: ["homeless", "undocumented", "migrant", "out of date", "privacy", "not return"] },
              { point: "Problem 2 explained", keywords: ["under-plan", "incomplete", "inaccurate", "wrong", "not counted", "planning"] },
            ],
            commonError: "Listing problems without explaining their effect on the data or planning.",
            guideRef: "census",
          },
          {
            id: "demog-qa-p2-q04",
            question: "Compare Singapore's Census 2020 with the 2021 Census of England and Wales.",
            marks: 3,
            hint: "One similarity and at least one difference in how they were carried out.",
            modelAnswer:
              "Both are held every 10 years and count the population to help plan services. However, Singapore's census is register-based, using government records plus a large sample survey, while the England and Wales census asked every household to fill in a form. The 2021 UK census was the first digital-first one, with most households answering online on 21 March 2021.",
            markScheme: [
              { point: "Similarity: both every 10 years / both to plan services", keywords: ["both", "10 years", "every ten", "similar", "plan"] },
              { point: "Singapore uses registers plus sample survey", keywords: ["register", "records", "sample", "administrative"] },
              { point: "UK every household / digital-first / online", keywords: ["every household", "digital", "online", "21 march", "all households"] },
            ],
            commonError: "Only describing one census and not making a direct comparison ('whereas', 'however').",
            guideRef: "census",
          },
          {
            id: "demog-qa-p2-q05",
            question: "You want to investigate how students in your class travel to school. Write a hypothesis and two closed questions you could ask.",
            marks: 3,
            hint: "A hypothesis is a testable statement; closed questions have fixed answers.",
            modelAnswer:
              "Hypothesis: 'Most students in our class travel to school by public transport.' Question 1: 'How do you usually travel to school? MRT / bus / car / school bus / walk.' Question 2: 'How long is your journey? Under 15 min / 15–30 min / 30–45 min / over 45 min.'",
            markScheme: [
              { point: "Testable hypothesis statement", keywords: ["most", "majority", "more than", "hypothesis", "more students"] },
              { point: "First closed question with options", keywords: ["mrt", "bus", "car", "walk", "school bus"] },
              { point: "Second closed question with options", keywords: ["how long", "minutes", "min", "distance", "how many", "km"] },
            ],
            commonError: "Writing the hypothesis as a question ('How do students travel?') or writing open questions.",
            guideRef: "class-census",
          },
          {
            id: "demog-qa-p2-q06",
            question: "A class of 30 recorded how they travel to school: MRT 8; public bus 7; car 6; school bus 6; walk 3. Describe what the data shows. Use figures.",
            marks: 3,
            hint: "Most common, least common, and a pattern (e.g. combine groups). Use percentages.",
            modelAnswer:
              "The most common way to travel is by MRT (8 students, about 27%). The least common is walking (only 3 students, 10%). Public transport (MRT and public bus) is used by 15 students — exactly half the class — while 12 students (40%) travel by car or school bus.",
            markScheme: [
              { point: "Most common = MRT with data", keywords: ["mrt", "8 students", "27%", "26.7"] },
              { point: "Least common = walk with data", keywords: ["walk", "3 students", "10%", "least"] },
              { point: "Pattern / grouping with data (e.g. half use public transport)", keywords: ["half", "15", "50%", "public transport", "40%", "12"] },
            ],
            commonError: "Listing every number without identifying the pattern or using any percentages.",
            guideRef: "class-census",
          },
          {
            id: "demog-qa-p2-q07",
            question: "Explain why a stratified sample may give more reliable results than simply asking your friends.",
            marks: 3,
            hint: "Think about bias and representativeness.",
            modelAnswer:
              "Asking your friends is a convenience sample, which is likely to be biased because friends often share similar backgrounds, interests or neighbourhoods. A stratified sample makes sure each group (e.g. boys and girls, or different classes) is included in the correct proportion. This makes the sample more representative of the whole population, so the results are more reliable.",
            markScheme: [
              { point: "Friends = biased / similar people", keywords: ["bias", "similar", "same", "not representative", "convenience"] },
              { point: "Stratified includes groups in correct proportions", keywords: ["proportion", "each group", "groups", "strata", "boys and girls"] },
              { point: "So more representative / reliable", keywords: ["representative", "reliable", "accurate", "fair", "whole population"] },
            ],
            commonError: "Saying stratified sampling is 'more random' — it is about proportions, not randomness.",
            guideRef: "class-census",
          },
          {
            id: "demog-qa-p2-q08",
            question: "Explain the difference between a population pyramid drawn with a percentage axis and one drawn with actual numbers. When is each most useful?",
            marks: 3,
            hint: "Structure vs size.",
            modelAnswer:
              "A percentage pyramid shows each cohort as a share of the total population, so it shows the structure (proportions). It is most useful for comparing countries of very different sizes, such as Niger and India. A pyramid with actual numbers (e.g. millions) shows the real size of each cohort, which is most useful for planning, such as how many school places a country needs.",
            markScheme: [
              { point: "Percentage shows structure/proportions", keywords: ["proportion", "structure", "share of", "percentage of", "shape"] },
              { point: "Percentage useful for comparing different-sized countries", keywords: ["compare", "different size", "different-sized", "niger", "india"] },
              { point: "Numbers show real size / useful for planning", keywords: ["actual number", "real size", "real number", "million", "planning", "how many"] },
            ],
            commonError: "Thinking both show the same thing, or that a % pyramid shows total population.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-qa-p2-q09",
            question: "Describe what an 'indent' on a population pyramid looks like and explain two possible causes.",
            marks: 3,
            hint: "Describe it, then give two different reasons for a missing group.",
            modelAnswer:
              "An indent is a cohort that is noticeably narrower than the ones above and below it, like a bite taken out of the side. It could be caused by a war, which kills many young adults (often men). It could also be caused by a sharp fall in births, for example during a famine or because of a policy such as China's one-child policy.",
            markScheme: [
              { point: "Description: narrower cohort / 'bite' out of the side", keywords: ["narrow", "smaller", "bite", "gap", "missing", "shorter bar"] },
              { point: "Cause 1 (war / disease deaths)", keywords: ["war", "disease", "epidemic", "pandemic", "conflict"] },
              { point: "Cause 2 (fall in births / famine / emigration / policy)", keywords: ["famine", "fall in birth", "fewer births", "one-child", "emigra", "policy"] },
            ],
            commonError: "Giving 'baby boom' as a cause — that makes a bulge, not an indent.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-qa-p2-q10",
            question: "A country has 1.2 million people aged 0–14, 0.9 million aged 65+ and 3.5 million aged 15–64. Calculate its dependency ratio.",
            marks: 2,
            hint: "You can use actual numbers in the formula.",
            modelAnswer:
              "(1.2 + 0.9) ÷ 3.5 × 100 = 2.1 ÷ 3.5 × 100 = 60. There are 60 dependants for every 100 working-age people.",
            markScheme: [
              { point: "Working: 2.1 ÷ 3.5", keywords: ["2.1", "2.1/3.5", "2.1 ÷ 3.5", "1.2 + 0.9"] },
              { point: "Answer 60", keywords: ["60", "60 dependants", "60 per 100"] },
            ],
            commonError: "Dividing by the total population (5.6 million) instead of the working-age group.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-qa-p2-q11",
            question: "Niger and Japan both have high dependency ratios. Explain why, and how the spending needs of each government differ.",
            marks: 4,
            hint: "Which dependent group is large in each country? What does that group need?",
            modelAnswer:
              "Niger's ratio is high because about half its population is under 15 — a high youth dependency caused by a TFR of about 6. Its government needs to spend on schools, teachers, vaccinations and maternal healthcare. Japan's ratio is high because about 29% of people are 65+ — a high old-age dependency caused by low birth rates and long lives. Its government must spend on pensions, hospitals and eldercare.",
            markScheme: [
              { point: "Niger: many children / youth dependency", keywords: ["children", "under 15", "young", "youth", "half"] },
              { point: "Niger spending: schools/education/vaccinations", keywords: ["school", "educat", "vaccin", "teacher", "maternal"] },
              { point: "Japan: many elderly / old-age dependency", keywords: ["elderly", "older", "old-age", "65+", "29%", "ageing"] },
              { point: "Japan spending: pensions/healthcare/eldercare", keywords: ["pension", "hospital", "eldercare", "care home", "healthcare", "nursing"] },
            ],
            commonError: "Saying both countries have the same problem because their ratios are both high.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-qa-p2-q12",
            question: "Explain why the base of India's population pyramid is becoming narrower.",
            marks: 3,
            hint: "The base shows births. Why are Indian families having fewer children?",
            modelAnswer:
              "India's birth rate is falling — its TFR has dropped to about 2.0, around replacement level — so each new cohort of babies is smaller. This is because more girls and women are educated and working, family planning and contraception are widely available, and more people live in cities where raising children is expensive. As infant mortality has fallen, families no longer need many children to make sure some survive.",
            markScheme: [
              { point: "Falling birth rate / TFR about 2", keywords: ["falling birth", "fewer births", "2.0", "fertility", "fewer children"] },
              { point: "Education/jobs for women or contraception", keywords: ["educat", "women", "contracepti", "family planning", "girls"] },
              { point: "Urbanisation or lower infant mortality", keywords: ["urban", "city", "cities", "infant mortality", "survive", "expensive"] },
            ],
            commonError: "Saying the base narrows because more children are dying — child deaths have actually fallen.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-qa-p2-q13",
            question: "Describe the changes in birth rate, death rate and total population during Stages 3 and 4 of the DTM.",
            marks: 4,
            hint: "Two marks for each stage.",
            modelAnswer:
              "In Stage 3 the birth rate falls quickly while the death rate continues to fall more slowly; the population keeps growing, but at a slower rate. In Stage 4 both birth and death rates are low (about 10–15 per 1,000) and fluctuate; the population is high and fairly stable, growing only slowly.",
            markScheme: [
              { point: "Stage 3: birth rate falls rapidly", keywords: ["birth rate falls", "birth rate drops", "falling birth", "birth rate decreases", "births fall"] },
              { point: "Stage 3: population still grows but more slowly", keywords: ["slower", "still grow", "still increase", "slowing", "keeps growing"] },
              { point: "Stage 4: both rates low", keywords: ["both low", "rates are low", "low birth", "low death", "both rates are low"] },
              { point: "Stage 4: population high and stable", keywords: ["stable", "high population", "steady", "levels off", "constant"] },
            ],
            commonError: "Mixing up which stage the birth rate falls in, or not mentioning the total population.",
            guideRef: "dtm",
          },
          {
            id: "demog-qa-p2-q14",
            question: "Explain two reasons why Singapore's population is ageing rapidly.",
            marks: 4,
            hint: "Two reasons, each with an explanation and a figure if you can.",
            modelAnswer:
              "First, the birth rate is very low: the resident TFR was 0.97 in 2023, so each generation of children is much smaller than the generation before, increasing the proportion of older people. Second, life expectancy is very high (about 83 years) because of excellent healthcare, clean water and good diets, so more people survive into old age. In addition, the large post-war baby-boom generation is now reaching 65+.",
            markScheme: [
              { point: "Low birth rate / TFR below 1", keywords: ["low birth", "fertility", "0.97", "below 1", "fewer babies"] },
              { point: "Explains effect: smaller young cohorts → older share rises", keywords: ["smaller", "proportion", "fewer young", "share", "generation"] },
              { point: "High/rising life expectancy", keywords: ["life expectancy", "live longer", "83", "longer lives"] },
              { point: "Explains cause: healthcare/diet or baby boomers reaching 65", keywords: ["healthcare", "medic", "diet", "baby boom", "boomer", "hospital"] },
            ],
            commonError: "Naming the reasons without explaining how each one increases the proportion of older people.",
            guideRef: "ageing-populations",
          },
          {
            id: "demog-qa-p2-q15",
            question: "'Singapore's pro-natalist policies, such as the Baby Bonus, have solved its low birth rate.' To what extent do you agree? Use evidence in a PEEL-style answer.",
            marks: 6,
            hint: "Point, Evidence, Explain, Link — and consider both sides before concluding.",
            modelAnswer:
              "I mostly disagree. Point: the Baby Bonus has not reversed the fall in births. Evidence: it was introduced in 2001, yet the resident TFR has kept falling, reaching 0.97 in 2023 — far below the replacement level of 2.1. Explanation: cash payments do not remove deeper causes of low fertility, such as high housing and education costs, long working hours and couples marrying later. On the other hand, the scheme and related support (parental leave, childcare places, HDB priority for families) may help families who already want children, and the TFR might have fallen even further without them. Link: overall, the policies may have slowed the decline, but they have not solved Singapore's low birth rate, which is why the government also relies on immigration and on people working longer.",
            markScheme: [
              { point: "Clear point / judgement", keywords: ["disagree", "agree", "not solved", "to some extent", "partly"] },
              { point: "Evidence: Baby Bonus since 2001 / TFR 0.97", keywords: ["2001", "0.97", "below 1", "2.1", "tfr"] },
              { point: "Explains deeper causes of low fertility", keywords: ["housing", "cost", "working hours", "marry", "career", "expensive"] },
              { point: "Counter-argument: support helps / could be worse without", keywords: ["help", "might have", "without", "slowed", "childcare", "parental leave"] },
              { point: "Names other policies or alternatives (immigration, working longer)", keywords: ["immigra", "re-employment", "retirement", "foreign", "workers"] },
              { point: "Linked conclusion", keywords: ["overall", "therefore", "in conclusion", "this shows", "to conclude"] },
            ],
            commonError: "Only describing the Baby Bonus without using evidence (TFR figures) to judge whether it worked.",
            guideRef: "ageing-populations",
          },
        ],
      },
      {
        id: "demog-qa-p3",
        title: "Written Paper 3",
        questions: [
          {
            id: "demog-qa-p3-q01",
            question: "Singapore's resident birth rate is only slightly higher than its death rate. Explain why natural increase alone cannot tell you how Singapore's total population will change.",
            marks: 3,
            hint: "Natural increase uses only two of the four population flows.",
            modelAnswer:
              "Natural increase only measures births minus deaths. Total population change also depends on migration: immigration adds people and emigration removes them. Singapore has large numbers of foreign workers and new citizens and permanent residents arriving, so net migration has a big effect — it is the main reason Singapore's total population has kept growing despite a TFR below 1.",
            markScheme: [
              { point: "Natural increase = births − deaths only", keywords: ["births minus deaths", "birth rate minus death rate", "only births", "natural increase only", "births and deaths"] },
              { point: "Migration also changes population", keywords: ["migration", "immigra", "emigra", "move in", "move out"] },
              { point: "Applied to Singapore (foreign workers / new citizens / growth despite low TFR)", keywords: ["foreign", "new citizens", "permanent resident", "workers", "below 1", "still grow"] },
            ],
            commonError: "Ignoring migration completely, or saying Singapore's population is falling.",
            guideRef: "studying-demography",
          },
          {
            id: "demog-qa-p3-q02",
            question: "Singapore's resident population was about 3.77 million in 2010 and about 4.04 million in 2020. Calculate the percentage change. Show your working.",
            marks: 2,
            hint: "(new − old) ÷ old × 100.",
            modelAnswer:
              "Change = 4.04 − 3.77 = 0.27 million. 0.27 ÷ 3.77 × 100 = 7.2% increase (to 1 d.p.).",
            markScheme: [
              { point: "Working: 0.27 ÷ 3.77", keywords: ["0.27", "270,000", "270 000", "4.04 - 3.77", "4.04 − 3.77"] },
              { point: "Answer about 7.2%", keywords: ["7.2", "7.16", "7%", "7.2 percent"] },
            ],
            commonError: "Dividing by the new value (4.04) instead of the old value, giving 6.7%.",
            guideRef: "census",
          },
          {
            id: "demog-qa-p3-q03",
            question: "Explain how the Housing & Development Board (HDB) could use census data.",
            marks: 3,
            hint: "What does HDB build, and what population information would help?",
            modelAnswer:
              "Census data shows how many households there are, their size and where people live. HDB can use this to decide how many new flats to build and where, for example in growing towns like Tengah or Punggol. Data on the age of residents helps HDB plan the type of flats and facilities, such as smaller flats, barrier-free access and lifts for older residents or larger flats near schools for young families.",
            markScheme: [
              { point: "Census shows households / where people live", keywords: ["household", "where people live", "location", "number of people", "family size"] },
              { point: "Plan how many flats and where", keywords: ["how many flats", "build", "new flats", "where to build", "estate", "town"] },
              { point: "Plan type of housing/facilities for different ages", keywords: ["elderly", "lift", "barrier-free", "young families", "size of flat", "older"] },
            ],
            commonError: "Saying HDB uses the census to 'count flats' — the census counts people and households.",
            guideRef: "census",
          },
          {
            id: "demog-qa-p3-q04",
            question: "Explain why some people are missed by a census, and why this matters.",
            marks: 3,
            hint: "Who is hard to count — and what happens to services they need?",
            modelAnswer:
              "Some people are hard to count because they have no fixed address, such as homeless people, or because they fear contact with the government, such as undocumented migrants. Others may simply not return the form. This matters because the population will be undercounted in some places, so the government may under-plan services such as healthcare, housing and schools for these groups.",
            markScheme: [
              { point: "No fixed address / homeless", keywords: ["homeless", "no fixed address", "no address", "sleep rough"] },
              { point: "Fear authorities / undocumented / don't respond", keywords: ["undocumented", "illegal", "fear", "don't respond", "not return", "avoid"] },
              { point: "Consequence: undercount → services under-planned", keywords: ["undercount", "under-plan", "not enough", "services", "funding", "inaccurate"] },
            ],
            commonError: "Explaining who is missed but not why it matters for planning.",
            guideRef: "census",
          },
          {
            id: "demog-qa-p3-q05",
            question: "Describe the stages you would follow to carry out a class census investigating 'What does our class census tell us?'",
            marks: 5,
            hint: "Follow the geographical enquiry process from start to finish.",
            modelAnswer:
              "1. Ask an enquiry question and write a hypothesis, e.g. 'Most students were born outside Singapore.' 2. Collect data using an anonymous questionnaire with mainly closed questions, asking everyone in the class (or a fair sample). 3. Record the answers in a tally chart and present them using bar charts or pie charts. 4. Analyse the results by identifying the most and least common answers and calculating percentages. 5. Conclude whether the hypothesis is accepted or rejected, and evaluate the method, e.g. the sample is small so results may not represent Singapore.",
            markScheme: [
              { point: "Question / hypothesis", keywords: ["hypothesis", "enquiry question", "aim", "research question", "key question"] },
              { point: "Collect data with questionnaire / sample", keywords: ["questionnaire", "survey", "sample", "collect", "ask"] },
              { point: "Record/present: tally, bar or pie chart", keywords: ["tally", "bar chart", "pie chart", "graph", "present"] },
              { point: "Analyse: most/least common, percentages", keywords: ["analys", "most common", "percent", "%", "pattern"] },
              { point: "Conclude and evaluate", keywords: ["conclu", "evaluat", "accept", "reject", "improve", "limitation"] },
            ],
            commonError: "Missing out the evaluation stage, or not mentioning a hypothesis.",
            guideRef: "class-census",
          },
          {
            id: "demog-qa-p3-q06",
            question: "Explain when you would choose a bar chart and when you would choose a pie chart to present class census results.",
            marks: 2,
            hint: "Comparing categories vs parts of a whole.",
            modelAnswer:
              "A bar chart is best for comparing the size of different categories, such as the number of students with 0, 1, 2 or 3+ siblings. A pie chart is best for showing parts of a whole, such as the proportion of the class born in each country, adding up to 100%.",
            markScheme: [
              { point: "Bar chart: comparing categories/frequencies", keywords: ["compare", "categories", "frequenc", "which is biggest", "siblings"] },
              { point: "Pie chart: parts of a whole / proportions", keywords: ["whole", "proportion", "100%", "share", "fraction"] },
            ],
            commonError: "Saying a pie chart can show change over time — that needs a line graph.",
            guideRef: "class-census",
          },
          {
            id: "demog-qa-p3-q07",
            question: "A student surveyed only their own class of 25 and concluded: 'Most children in Singapore have one sibling.' Evaluate this conclusion and suggest two improvements.",
            marks: 4,
            hint: "Is the sample big enough and representative? How could the method be made better?",
            modelAnswer:
              "The conclusion is not reliable. The sample is very small (25 out of hundreds of thousands of children) and it comes from one international school, so it is not representative — families at the school may differ from Singapore as a whole. Improvement 1: survey a much larger, stratified sample from several different schools. Improvement 2: compare the results with official data from the Census 2020 or SingStat on household size.",
            markScheme: [
              { point: "Sample too small", keywords: ["small", "only 25", "too few", "size"] },
              { point: "Not representative / biased (one school)", keywords: ["representative", "bias", "one school", "international", "not typical"] },
              { point: "Improvement: larger / more schools / stratified sample", keywords: ["larger", "more schools", "bigger", "stratified", "random", "more students"] },
              { point: "Improvement: compare with census / official data / repeat", keywords: ["census", "singstat", "official", "repeat", "secondary data", "compare"] },
            ],
            commonError: "Only saying 'it's wrong' without explaining why, or suggesting improvements that would not reduce bias.",
            guideRef: "class-census",
          },
          {
            id: "demog-qa-p3-q08",
            question: "Study the pyramid data for Country Z (% of total population). Age 0–4: males 2.5%, females 2.4%. Age 30–34: males 4.5%, females 4.6%. Age 80+: males 1.5%, females 2.5%. Describe and explain the population structure.",
            marks: 4,
            hint: "Compare the base, middle and top — then explain each. Quote the data.",
            modelAnswer:
              "The base is narrow: only about 4.9% of the population is aged 0–4 (2.5% male, 2.4% female), much smaller than the 30–34 cohort (9.1%). This suggests a low and falling birth rate. The 80+ group is large (4.0%), showing high life expectancy, so the population is ageing. There are more females (2.5%) than males (1.5%) aged 80+ because women tend to live longer than men.",
            markScheme: [
              { point: "Narrow base with data", keywords: ["narrow base", "4.9", "2.5%", "2.4%", "small base"] },
              { point: "Explains low/falling birth rate", keywords: ["low birth", "falling birth", "fewer babies", "fertility"] },
              { point: "Large elderly group → high life expectancy / ageing", keywords: ["life expectancy", "ageing", "aging", "elderly", "4.0", "80+"] },
              { point: "More females than males at 80+ because women live longer", keywords: ["women live longer", "females live longer", "more females", "more women", "longer life"] },
            ],
            commonError: "Not quoting the data, or not adding male and female figures to compare cohorts.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-qa-p3-q09",
            question: "Explain how migration can change the shape of a population pyramid. Use an example.",
            marks: 3,
            hint: "Which ages and which sex usually migrate for work?",
            modelAnswer:
              "Most migrants who move for work are young adults, so immigration creates a bulge in the working-age cohorts (about 20–40), while emigration creates an indent in the same ages in the place they leave. If mostly one sex migrates, one side of the pyramid becomes much wider. For example, Qatar has a huge bulge of males aged 25–40 because of male migrant workers from South Asia; Singapore's total population pyramid also widens in the working ages because of foreign workers.",
            markScheme: [
              { point: "Migrants are mostly young adults / working age", keywords: ["young adult", "working age", "20–40", "economically active", "young men", "young people"] },
              { point: "Creates bulge (immigration) or indent (emigration) / uneven sides", keywords: ["bulge", "indent", "wider", "uneven", "one side"] },
              { point: "Named example", keywords: ["qatar", "uae", "dubai", "singapore", "gulf"] },
            ],
            commonError: "Not giving a named example, or thinking migration only affects children.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-qa-p3-q10",
            question: "Singapore's resident population is roughly: 0–14: 14%; 15–64: 67%; 65+: 19%. Calculate (a) the youth dependency ratio, (b) the old-age dependency ratio and (c) the total dependency ratio.",
            marks: 3,
            hint: "Each one divides by the 15–64 group and multiplies by 100.",
            modelAnswer:
              "(a) Youth: 14 ÷ 67 × 100 = 20.9. (b) Old-age: 19 ÷ 67 × 100 = 28.4. (c) Total: (14 + 19) ÷ 67 × 100 = 49.3. Singapore now has more elderly dependants than young dependants.",
            markScheme: [
              { point: "Youth ratio 20.9", keywords: ["20.9", "21", "20.89"] },
              { point: "Old-age ratio 28.4", keywords: ["28.4", "28", "28.36"] },
              { point: "Total ratio 49.3", keywords: ["49.3", "49", "49.25"] },
            ],
            commonError: "Using 100 as the denominator (just adding the percentages) instead of dividing by 67.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-qa-p3-q11",
            question: "Explain the limitations of the dependency ratio as a measure of how many people depend on workers.",
            marks: 3,
            hint: "Do the age groups really match who works and who doesn't?",
            modelAnswer:
              "The dependency ratio assumes everyone aged 15–64 works, but many 15–19 year-olds are still in education and some adults are unemployed or caring for family. It also assumes everyone over 65 is dependent, yet many older people still work — Singapore's re-employment age is rising to 69. It also ignores how wealthy people are: a retired person with large CPF savings may not depend on others at all.",
            markScheme: [
              { point: "Not all 15–64s work (students, unemployed, carers)", keywords: ["students", "education", "unemployed", "not all", "carers", "study"] },
              { point: "Many over-65s work / are independent", keywords: ["over 65", "older people work", "re-employment", "still work", "69"] },
              { point: "Ignores wealth/savings or other factors", keywords: ["savings", "wealth", "cpf", "pension", "rich", "income"] },
            ],
            commonError: "Explaining what the ratio is instead of what is wrong with it.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-qa-p3-q12",
            question: "Compare the population pyramids of the UK and Singapore (resident population).",
            marks: 4,
            hint: "One similarity and at least one difference, with figures, using comparative words.",
            modelAnswer:
              "Both pyramids have a narrow base because both countries have below-replacement fertility, and both have a growing number of older people (about 19% aged 65+ in each). However, Singapore's base is narrower than the UK's because its resident TFR (0.97) is lower than the UK's (about 1.4–1.5). Singapore's shape is more like a vase, with the widest part in the middle-aged cohorts, whereas the UK's is more like a column with fairly straight sides, partly because immigration adds young adults.",
            markScheme: [
              { point: "Similarity: both narrow base / below replacement", keywords: ["both", "narrow base", "below replacement", "similar"] },
              { point: "Similarity or data: ageing / about 19% 65+", keywords: ["19%", "ageing", "aging", "elderly", "65+"] },
              { point: "Difference: Singapore TFR lower / narrower base", keywords: ["0.97", "lower", "narrower", "below 1", "1.4"] },
              { point: "Difference: vase vs column / comparative language", keywords: ["vase", "column", "whereas", "however", "while"] },
            ],
            commonError: "Describing each pyramid separately without comparing them.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-qa-p3-q13",
            question: "Explain why the death rate falls in Stage 2 of the Demographic Transition Model.",
            marks: 3,
            hint: "Think about food, water, and medicine.",
            modelAnswer:
              "The death rate falls because food supply improves through better farming, so fewer people die of starvation. Clean water and better sanitation reduce diseases such as cholera. Medical improvements such as vaccinations and antibiotics mean fewer people, especially babies and children, die from infections.",
            markScheme: [
              { point: "Better food supply / farming", keywords: ["food", "farming", "agricultur", "diet", "nutrition"] },
              { point: "Clean water / sanitation", keywords: ["clean water", "sanitation", "sewer", "hygiene", "toilets"] },
              { point: "Medical improvements: vaccinations / healthcare", keywords: ["vaccin", "medic", "antibiotic", "healthcare", "hospital", "doctor"] },
            ],
            commonError: "Explaining why the BIRTH rate falls (education, contraception) instead.",
            guideRef: "dtm",
          },
          {
            id: "demog-qa-p3-q14",
            question: "In both Stage 1 and Stage 4 of the DTM, the total population is fairly stable. Explain why the reasons are different.",
            marks: 4,
            hint: "Look at the LEVEL of the two lines in each stage.",
            modelAnswer:
              "In Stage 1 the population is stable because both the birth rate and death rate are high (about 35–40 per 1,000) — many babies are born, but many people die from famine and disease. In Stage 4 the population is also stable, but because both rates are low (about 10–15 per 1,000): families choose to have few children, and good healthcare means few people die young. So in Stage 1 the population is low and stable, while in Stage 4 it is high and stable.",
            markScheme: [
              { point: "Stage 1: both rates high", keywords: ["both high", "high birth", "high death", "35", "40"] },
              { point: "Stage 1 reasons: famine/disease/no healthcare", keywords: ["famine", "disease", "no healthcare", "poor hygiene", "starv"] },
              { point: "Stage 4: both rates low", keywords: ["both low", "low birth", "low death", "10", "15"] },
              { point: "Stage 4 reasons or low vs high population", keywords: ["contracepti", "choose", "healthcare", "high and stable", "low and stable"] },
            ],
            commonError: "Saying both stages are the same because the population line is flat.",
            guideRef: "dtm",
          },
          {
            id: "demog-qa-p3-q15",
            question: "'An ageing population is a serious problem for Singapore.' To what extent do you agree? Write a PEEL-style answer using evidence.",
            marks: 6,
            hint: "Consider challenges AND opportunities, and how the government is responding, then judge.",
            modelAnswer:
              "To a large extent I agree. Point: ageing creates serious pressure on Singapore's workforce and healthcare. Evidence: the share of residents aged 65+ rose from about 9% in 2010 to about 19% in 2024, and about 1 in 4 citizens is expected to be 65+ by 2030. Explanation: there will be fewer working-age people paying taxes for each elderly person, causing labour shortages and higher spending on hospitals and eldercare. However, ageing also brings opportunities: many older people are healthy, keep working or volunteer, and spend money in the 'silver economy'. The government is also responding by raising the re-employment age to 69 in 2026, using CPF LIFE to provide income, and building Active Ageing Centres. Link: overall it is a serious challenge, but planning and policies can turn part of it into an opportunity, so it is manageable rather than a crisis.",
            markScheme: [
              { point: "Clear point / judgement", keywords: ["agree", "disagree", "to a large extent", "to some extent", "partly"] },
              { point: "Evidence with figures", keywords: ["19%", "1 in 4", "2030", "15%", "9%", "0.97"] },
              { point: "Explains challenges (workforce/tax/healthcare)", keywords: ["worker", "tax", "healthcare", "hospital", "labour", "eldercare"] },
              { point: "Counter-argument: opportunities", keywords: ["opportunit", "silver economy", "volunteer", "experience", "grandparent"] },
              { point: "Named government responses", keywords: ["re-employment", "retirement", "cpf", "active ageing", "baby bonus", "immigra"] },
              { point: "Linked conclusion", keywords: ["overall", "in conclusion", "therefore", "to conclude", "manageable"] },
            ],
            commonError: "Writing one-sided answers that only list problems, with no evidence or final judgement.",
            guideRef: "ageing-populations",
          },
        ],
      },
      {
        id: "demog-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "demog-qa-p4-q01",
            question: "A country of 10 million people has, in one year: 250,000 births; 80,000 deaths; 20,000 immigrants; 50,000 emigrants. Calculate (a) the birth rate, (b) the death rate, (c) natural increase as a %, (d) the total population change.",
            marks: 4,
            hint: "Birth rate = births ÷ population × 1,000. Total change = natural change + net migration.",
            modelAnswer:
              "(a) Birth rate = 250,000 ÷ 10,000,000 × 1,000 = 25 per 1,000. (b) Death rate = 80,000 ÷ 10,000,000 × 1,000 = 8 per 1,000. (c) Natural increase = 25 − 8 = 17 per 1,000 = 1.7%. (d) Natural change = 250,000 − 80,000 = +170,000; net migration = 20,000 − 50,000 = −30,000; total change = +140,000.",
            markScheme: [
              { point: "Birth rate 25 per 1,000", keywords: ["25 per", "25‰", "= 25", "br 25", "birth rate is 25"] },
              { point: "Death rate 8 per 1,000", keywords: ["8 per", "8‰", "= 8", "dr 8", "death rate is 8"] },
              { point: "Natural increase 1.7%", keywords: ["1.7", "1.7%", "17 per"] },
              { point: "Total change +140,000", keywords: ["140,000", "140000", "140 000", "0.14 million"] },
            ],
            commonError: "Forgetting that net migration here is negative (more emigrants than immigrants).",
            guideRef: "studying-demography",
          },
          {
            id: "demog-qa-p4-q02",
            question: "Evaluate the advantages and disadvantages of a register-based census, like Singapore's, compared with a traditional census where every household fills in a form.",
            marks: 4,
            hint: "Two advantages, at least one disadvantage, and a judgement.",
            modelAnswer:
              "A register-based census is cheaper and quicker, because most data already exists in government records, and it reduces the burden on households, who do not all have to fill in long forms. However, records only hold basic details, so a sample survey is still needed for things like languages or travel to work, and the sample results are estimates with some error. It also depends on records being accurate and up to date. Overall, it works well for a small, well-organised country like Singapore with good records, but would be harder in countries with poor registration systems.",
            markScheme: [
              { point: "Advantage: cheaper / quicker", keywords: ["cheaper", "quicker", "faster", "cost less", "less expensive"] },
              { point: "Advantage: less burden on households / uses existing records", keywords: ["burden", "existing records", "already", "less effort", "fewer forms"] },
              { point: "Disadvantage: limited detail / sample estimates / record errors", keywords: ["detail", "estimate", "sample", "error", "out of date", "accura"] },
              { point: "Judgement (depends on quality of records / suits Singapore)", keywords: ["overall", "depends", "suits", "good records", "small country", "therefore"] },
            ],
            commonError: "Listing only advantages, with no judgement.",
            guideRef: "census",
          },
          {
            id: "demog-qa-p4-q03",
            question: "Suggest two reasons why the 2021 Census in England and Wales was 'digital-first', and one possible disadvantage.",
            marks: 3,
            hint: "Think about cost, speed, COVID-19 and who might struggle online.",
            modelAnswer:
              "Answering online is cheaper and faster to process than paper forms, and it reduced face-to-face contact during the COVID-19 pandemic in 2021. However, some people — especially older people or those without internet access — may find it hard to answer online, so paper forms and help still had to be offered or they might be missed.",
            markScheme: [
              { point: "Cheaper / faster processing", keywords: ["cheaper", "faster", "quicker", "cost", "process"] },
              { point: "COVID-19 / less contact / convenience", keywords: ["covid", "pandemic", "contact", "convenien", "safer"] },
              { point: "Disadvantage: digital exclusion (older people/no internet)", keywords: ["older", "elderly", "internet", "no computer", "digital exclusion", "online access"] },
            ],
            commonError: "Giving only advantages and forgetting the disadvantage.",
            guideRef: "census",
          },
          {
            id: "demog-qa-p4-q04",
            question: "A year group has 160 students: 100 girls and 60 boys. Explain how you would choose a stratified sample of 40 students.",
            marks: 3,
            hint: "Work out the proportions first, then how you would pick individuals.",
            modelAnswer:
              "Girls are 100 ÷ 160 = 62.5% of the year and boys 37.5%. So the sample of 40 should include 62.5% × 40 = 25 girls and 37.5% × 40 = 15 boys. Within each group I would choose students randomly, for example by drawing names out of a hat, to avoid bias.",
            markScheme: [
              { point: "Works out proportions (62.5% / 37.5% or 5:3)", keywords: ["62.5", "37.5", "5:3", "proportion", "100/160"] },
              { point: "25 girls and 15 boys", keywords: ["25 girls", "15 boys", "25", "15"] },
              { point: "Random selection within each group", keywords: ["random", "hat", "names", "within each", "number generator"] },
            ],
            commonError: "Choosing 20 girls and 20 boys — equal numbers are not stratified when the groups are different sizes.",
            guideRef: "class-census",
          },
          {
            id: "demog-qa-p4-q05",
            question: "A class census at an international school in Singapore found 64% of students were born outside Singapore. Census 2020 shows most Singapore residents were born in Singapore. Explain why the results are different.",
            marks: 3,
            hint: "Who attends an international school? Who counts as a 'resident'?",
            modelAnswer:
              "The class is a small sample from an international school, which mainly serves families who have moved to Singapore from abroad for work, so it is not representative of Singapore's population. The census covers all residents (citizens and permanent residents), most of whom were born in Singapore. The two data sets also measure different populations — many international school families are non-residents, who are not included in the resident figures.",
            markScheme: [
              { point: "International school = many expatriate/foreign families", keywords: ["expat", "foreign", "abroad", "moved", "overseas", "non-singaporean"] },
              { point: "Small / unrepresentative / biased sample", keywords: ["small", "representative", "bias", "sample", "one class"] },
              { point: "Census covers all residents / different population (non-residents)", keywords: ["all residents", "whole population", "non-resident", "citizens", "everyone"] },
            ],
            commonError: "Saying one of the surveys must be 'wrong' rather than explaining that they measure different groups.",
            guideRef: "class-census",
          },
          {
            id: "demog-qa-p4-q06",
            question: "Predict how Singapore's resident population pyramid will change between 2020 and 2040 if fertility stays below 1 and life expectancy keeps rising. Explain your predictions.",
            marks: 4,
            hint: "Move the cohorts up 20 years. What happens at the base, middle and top?",
            modelAnswer:
              "The base will stay narrow or become even narrower, because with a TFR below 1 each new cohort of babies will be smaller than the last. The large baby-boom cohorts now in their 50s–70s will move up 20 years, making the top of the pyramid much wider — there will be many more people aged 80+. Because life expectancy keeps rising, more people will survive to the oldest cohorts. The working-age middle will shrink, so the old-age dependency ratio will rise and the pyramid will look more top-heavy, like Japan's today.",
            markScheme: [
              { point: "Base stays narrow / narrows further (TFR below 1)", keywords: ["narrow", "smaller base", "fewer babies", "below 1", "base"] },
              { point: "Baby-boom cohorts move up → wider top", keywords: ["move up", "boomer", "baby boom", "wider top", "80+"] },
              { point: "Rising life expectancy → more very old people", keywords: ["life expectancy", "live longer", "more elderly", "older"] },
              { point: "Working-age shrinks / dependency rises / top-heavy like Japan", keywords: ["dependency", "top-heavy", "top heavy", "japan", "fewer workers", "inverted"] },
            ],
            commonError: "Forgetting that cohorts move UP the pyramid as time passes.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-qa-p4-q07",
            question: "Qatar's population pyramid has a very large bulge of males aged 25–45, with far fewer females of the same age. Suggest reasons for this shape and one consequence for Qatar.",
            marks: 3,
            hint: "Think about the jobs available and who fills them.",
            modelAnswer:
              "Qatar's oil and gas wealth and large construction projects (such as for the 2022 FIFA World Cup) have attracted very large numbers of migrant workers, mostly young men from South Asia. These workers usually come without their families, so there are far more males than females aged 25–45. One consequence is a large demand for worker housing and services for single men, and a very unbalanced sex ratio; many workers send money home (remittances) rather than settling permanently.",
            markScheme: [
              { point: "Male migrant workers", keywords: ["migrant", "worker", "immigra", "labour"] },
              { point: "Reason: oil/gas wealth or construction jobs; come without families", keywords: ["oil", "gas", "construction", "world cup", "without famil", "jobs"] },
              { point: "Consequence (sex ratio, housing, remittances, services)", keywords: ["sex ratio", "housing", "remittance", "unbalanced", "dormitor", "services"] },
            ],
            commonError: "Explaining the bulge as a baby boom — a baby boom would affect males and females equally.",
            guideRef: "population-pyramids",
          },
          {
            id: "demog-qa-p4-q08",
            question: "Country A: 0–14: 48%; 15–64: 49%; 65+: 3%. Country B: 0–14: 12%; 15–64: 59%; 65+: 29%. Calculate the dependency ratio for each country. Then explain the different challenges each country faces.",
            marks: 6,
            hint: "Calculate first (to 1 d.p.), then look at which dependent group is bigger in each.",
            modelAnswer:
              "Country A: (48 + 3) ÷ 49 × 100 = 104.1. Country B: (12 + 29) ÷ 59 × 100 = 69.5. Country A has more dependants than workers — over 104 per 100 — almost all of them children, so it is a youthful country like Niger. It must provide enough schools, teachers, vaccinations and, in future, millions of jobs as these children reach working age. Country B's dependants are mostly elderly, like Japan's, so it faces rising costs for pensions, healthcare and eldercare, and a shrinking workforce paying taxes. Although A's ratio is higher, both face serious pressure, but of very different kinds.",
            markScheme: [
              { point: "Country A = 104.1", keywords: ["104.1", "104", "104.08"] },
              { point: "Country B = 69.5", keywords: ["69.5", "69.49", "69"] },
              { point: "A: mostly young dependants (youthful, like Niger)", keywords: ["children", "young", "youth", "niger", "48%"] },
              { point: "A challenges: schools/education/vaccinations/future jobs", keywords: ["school", "educat", "vaccin", "jobs", "teacher"] },
              { point: "B: mostly elderly dependants (ageing, like Japan)", keywords: ["elderly", "old", "ageing", "aging", "japan", "29%"] },
              { point: "B challenges: pensions/healthcare/eldercare/shrinking workforce", keywords: ["pension", "healthcare", "hospital", "eldercare", "workforce", "tax"] },
            ],
            commonError: "Stopping after the calculation, or assuming the country with the higher ratio has 'more problems' without explaining the type of dependants.",
            guideRef: "dependency-ratio",
          },
          {
            id: "demog-qa-p4-q09",
            question: "Explain how India could benefit from a 'demographic dividend' and what might prevent this from happening.",
            marks: 4,
            hint: "Define it, explain the benefit, then give a barrier.",
            modelAnswer:
              "A demographic dividend is a boost to economic growth when a country has a large working-age population and relatively few dependants. As India's TFR has fallen to about 2.0, the share of working-age people has grown, so there are more workers to produce goods, pay taxes and save, and families can spend more on each child's education. However, the dividend only happens if there are enough jobs; if millions of young people are unemployed or lack skills and education, the opportunity could be wasted and lead to frustration.",
            markScheme: [
              { point: "Definition: large working-age population, few dependants", keywords: ["working age", "workforce", "few dependants", "fewer dependants", "15-64", "15–64"] },
              { point: "Benefit: more workers/taxes/savings/economic growth", keywords: ["tax", "economic growth", "productiv", "savings", "economy"] },
              { point: "Link to falling fertility (TFR about 2)", keywords: ["fertility", "2.0", "fewer children", "birth rate", "smaller families"] },
              { point: "Barrier: not enough jobs / skills / education", keywords: ["jobs", "unemploy", "skills", "education", "infrastructure"] },
            ],
            commonError: "Thinking a demographic dividend is a payment made to families.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-qa-p4-q10",
            question: "Explain why Niger has one of the highest fertility rates in the world.",
            marks: 4,
            hint: "Think about economic, social and health reasons.",
            modelAnswer:
              "Niger's TFR is about 6. Many families are subsistence farmers, so children are valued as workers on the land and as security to care for parents in old age, because there are few pensions. Infant mortality is still high, so families have more children in case some die. Many girls marry young and have limited access to education, and contraception is not widely available or used. Cultural and religious traditions also value large families.",
            markScheme: [
              { point: "Children as farm workers / income", keywords: ["farm", "work", "labour", "income", "land"] },
              { point: "Security in old age / no pensions", keywords: ["old age", "pension", "look after", "care for parents", "security"] },
              { point: "High infant mortality", keywords: ["infant mortality", "children die", "die young", "replace", "survive"] },
              { point: "Early marriage / limited education or contraception / culture", keywords: ["marr", "educat", "contracepti", "tradition", "religio", "culture"] },
            ],
            commonError: "Giving only one reason, or reasons with no explanation of why they lead to more children.",
            guideRef: "comparing-pyramids",
          },
          {
            id: "demog-qa-p4-q11",
            question: "Evaluate the usefulness of the Demographic Transition Model for understanding population change in the world today.",
            marks: 6,
            hint: "Strengths, weaknesses with examples, then a judgement.",
            modelAnswer:
              "The DTM is useful because it shows a general pattern that most countries have followed: death rates fall first, then birth rates. It allows countries to be compared — Niger (Stage 2), India (Stage 3), the UK (Stage 4) and Japan (Stage 5) — and helps predict future challenges, such as ageing. However, it is based on the experience of Europe, so it may not fit all countries. It ignores migration, which is very important in places like Singapore and the UK. It also has no timescale: the UK took about 200 years to pass through, while Singapore and South Korea took about 50. Some countries' death rates have risen again because of conflict or disease, which the model does not predict. Overall, the DTM is a useful starting point for describing and comparing countries, but it should be used alongside real data rather than as a strict prediction.",
            markScheme: [
              { point: "Strength: shows general pattern / sequence", keywords: ["general pattern", "most countries", "sequence", "pattern", "death rates fall first"] },
              { point: "Strength: allows comparison / prediction with named examples", keywords: ["compare", "predict", "niger", "japan", "india"] },
              { point: "Weakness: based on Europe", keywords: ["europe", "western", "european", "britain"] },
              { point: "Weakness: ignores migration", keywords: ["migration", "immigra", "migrant"] },
              { point: "Weakness: no timescale / speeds differ", keywords: ["timescale", "200 years", "50 years", "speed", "faster", "no time"] },
              { point: "Supported judgement", keywords: ["overall", "in conclusion", "starting point", "to some extent", "therefore"] },
            ],
            commonError: "Describing the five stages instead of evaluating how useful the model is.",
            guideRef: "dtm",
          },
          {
            id: "demog-qa-p4-q12",
            question: "Study the data for a country (per 1,000 per year). 1950: birth rate 45, death rate 25. 1980: birth rate 40, death rate 12. 2010: birth rate 22, death rate 7. 2024: birth rate 16, death rate 6. Calculate the natural increase (%) in each year and explain how the country has moved through the DTM.",
            marks: 4,
            hint: "Natural increase = (BR − DR) ÷ 10. When was growth fastest?",
            modelAnswer:
              "Natural increase: 1950 = 2.0%; 1980 = 2.8%; 2010 = 1.5%; 2024 = 1.0%. In 1950 the country was in Stage 2: the death rate was falling while the birth rate stayed high. By 1980 the death rate had fallen much further but the birth rate was still high, so growth peaked at 2.8% (late Stage 2). By 2010 the birth rate had dropped sharply (Stage 3), so growth slowed, and by 2024 both rates were fairly low, so the country is moving towards Stage 4.",
            markScheme: [
              { point: "Correct natural increase figures (2.0, 2.8, 1.5, 1.0)", keywords: ["2.8", "1.5%", "2.0%", "1.0%"] },
              { point: "1950/1980 = Stage 2: death rate falling, birth rate high", keywords: ["stage 2", "death rate fell", "death rate falling", "birth rate high", "birth rate stayed"] },
              { point: "Growth peaked around 1980", keywords: ["peak", "fastest", "highest", "1980"] },
              { point: "2010–2024: birth rate falling → Stage 3 moving to Stage 4", keywords: ["stage 3", "stage 4", "birth rate fell", "birth rate falling", "slowed"] },
            ],
            commonError: "Not calculating the natural increase, or saying growth was fastest when the birth rate was highest (1950).",
            guideRef: "dtm",
          },
          {
            id: "demog-qa-p4-q13",
            question: "Describe how Japan is responding to its ageing population and evaluate one of these responses.",
            marks: 4,
            hint: "Name two or three responses, then judge how well one of them works.",
            modelAnswer:
              "Japan encourages older people to keep working for longer, uses robots and technology in care homes, and has gradually allowed more foreign workers, especially care workers, into the country. It has also tried to raise the birth rate with childcare support. Evaluation: robots can help with tasks such as lifting patients and reduce the shortage of care workers, but they are expensive and cannot fully replace human care and company, so they only partly solve the problem.",
            markScheme: [
              { point: "Response: older people working longer", keywords: ["work longer", "retirement", "older workers", "keep working"] },
              { point: "Response: robots / technology", keywords: ["robot", "technology", "automat", "machines"] },
              { point: "Response: foreign/care workers or pro-natalist support", keywords: ["foreign", "immigra", "care worker", "childcare", "birth rate"] },
              { point: "Evaluation of one response (strength and limitation)", keywords: ["however", "although", "expensive", "only partly", "limited", "effective"] },
            ],
            commonError: "Describing responses without evaluating any of them.",
            guideRef: "ageing-populations",
          },
          {
            id: "demog-qa-p4-q14",
            question: "Explain how and why Singapore's population policy changed from anti-natalist in the 1970s to pro-natalist from the late 1980s.",
            marks: 4,
            hint: "What was the 1970s campaign, what happened to fertility, and what replaced it?",
            modelAnswer:
              "In the 1970s Singapore's 'Stop at Two' campaign was anti-natalist: it discouraged large families because the government worried that rapid population growth would cause unemployment and housing shortages. The policy worked too well — fertility fell below the replacement level of 2.1 by the mid-1970s and kept falling. In 1987 the government switched to 'Have Three or More (if you can afford it)', and later introduced pro-natalist measures such as the Baby Bonus in 2001, because low birth rates threatened a shrinking workforce and a rapidly ageing population.",
            markScheme: [
              { point: "1970s 'Stop at Two' anti-natalist campaign", keywords: ["stop at two", "two children", "1972", "small families", "discourag"] },
              { point: "Reason: fears of rapid growth / unemployment / housing", keywords: ["unemploy", "housing", "overpopulat", "rapid growth", "too many"] },
              { point: "Fertility fell below replacement (2.1)", keywords: ["below replacement", "2.1", "fell", "too well", "dropped"] },
              { point: "Switch to pro-natalist (1987 'Have Three', Baby Bonus 2001) because of ageing/workforce", keywords: ["have three", "1987", "baby bonus", "2001", "encourag", "ageing"] },
            ],
            commonError: "Not explaining WHY the policy changed — the key is that fertility fell further than intended.",
            guideRef: "ageing-populations",
          },
          {
            id: "demog-qa-p4-q15",
            question: "'Immigration is the best solution to Singapore's ageing population.' Evaluate this statement.",
            marks: 6,
            hint: "Argue for immigration, against it, compare with other solutions, and reach a judgement.",
            modelAnswer:
              "Immigration helps in the short term. Most immigrants are of working age, so they fill labour shortages in sectors like construction and healthcare and pay taxes, lowering the old-age dependency ratio; it is the main reason Singapore's total population has kept growing even though the resident TFR is below 1. However, immigrants also grow old, so ever more immigration would be needed over time. Large numbers of newcomers can also put pressure on housing, MRT and public services, and raise concerns about social cohesion. Other solutions work alongside it: raising the re-employment age to 69 keeps experienced workers, technology and automation reduce the need for labour, and pro-natalist policies such as the Baby Bonus could help in the long term, although fertility has kept falling. Overall, immigration is an important part of the solution but not the 'best' on its own — a combination of policies is needed.",
            markScheme: [
              { point: "For: immigrants are working age / fill labour shortages", keywords: ["working age", "labour shortage", "fill jobs", "workers", "workforce"] },
              { point: "For: pay taxes / lower dependency ratio / keeps population growing", keywords: ["tax", "dependency", "population grow", "economy", "lower the ratio"] },
              { point: "Against: immigrants also age / only delays the problem", keywords: ["also age", "grow old", "delay", "short term", "temporary"] },
              { point: "Against: pressure on housing/transport or social cohesion", keywords: ["housing", "crowd", "mrt", "transport", "cohesion", "tension"] },
              { point: "Compares other solutions (re-employment, technology, Baby Bonus)", keywords: ["re-employment", "retirement", "technology", "robot", "baby bonus", "automat"] },
              { point: "Supported judgement", keywords: ["overall", "in conclusion", "combination", "not the best", "mix"] },
            ],
            commonError: "Only arguing one side, or not comparing immigration with other possible solutions.",
            guideRef: "ageing-populations",
          },
        ],
      },
    ],
  },
};
