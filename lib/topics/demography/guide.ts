import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "demography",
  title: "Studying Demography",
  strand: "Population",
  icon: "🧮",
  summary: "Count people, chart their ages and work out who supports whom — the toolkit of a demographer.",
  intro:
    "Before a government can plan a single school, MRT line or care home, it needs to know who lives in the country: how many people, how old they are and how that is changing. That is **demography**. In this topic you will find out how censuses and surveys collect population data (including Singapore's Census 2020), run and analyse your own class census, read population pyramids like a geographer, and calculate the **dependency ratio** to judge the pressure an age structure puts on a country.",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "what-is-demography",
      heading: "What is demography?",
      discovery: {
        problem:
          "Singapore ran a census in 2020 and published detailed results about its roughly 4 million residents. Yet most households were never handed a census form or visited by a census officer. How can a country count everyone without asking most people anything?",
        idea:
          "The government **already holds records** about residents: births, deaths, identity cards and home addresses. Singapore combines these **administrative records** with a **large sample survey** of households for things the records do not hold (such as language spoken at home or how people travel to work). This is called a **register-based census**.",
      },
      body:
        "**Demography** is the study of human populations: how many people there are, where they live, their ages, sexes and other characteristics, and how these change through **births, deaths and migration**. A **demographer** collects and analyses this data so that governments, businesses and charities can plan ahead.\n\n**The census**\n\nA **census** is an official count of every person in a country at a fixed date. Most countries hold one every **10 years**. As well as counting heads, it records characteristics such as age, sex, household size, ethnic group, language, education, job and type of home.\n\nWhy governments run one:\n- **Plan services**: how many primary school places, hospital beds, HDB flats or eldercare centres will be needed, and where.\n- **Share out money and resources** fairly between regions.\n- **Spot trends**, such as an ageing population or falling household size.\n- **Provide a baseline** for estimates in the years between censuses.\n\n**Three ways to get population data**\n\n| Method | Who is asked? | Strength | Weakness |\n|---|---|---|---|\n| Full census | Everyone | Complete picture, even for small areas | Very expensive; only every 10 years, so it dates quickly |\n| Sample survey | A chosen group | Cheaper and quicker; can be repeated often | Might not represent everyone |\n| Administrative records | Nobody is asked — data comes from registrations | Up to date and cheap | Only holds what the forms recorded |\n\nA good **sample** represents the whole population. In a **random** sample everyone has an equal chance of being chosen; in a **systematic** sample you pick every *n*th person (e.g. every 10th household); in a **stratified** sample you choose people in proportion to groups (e.g. ages or regions).\n\n**Singapore's Census 2020**\n\nSingapore's Department of Statistics (SingStat) has run a census every 10 years since 1970. Since 2000 it has used a **register-based** approach: administrative records plus a large sample survey (in 2020, roughly 150,000 households — about one in ten). Census 2020 found about **4.04 million residents** (citizens and permanent residents), and the median age of residents rose from about **37 in 2010 to about 41.5 in 2020** — clear evidence of ageing.\n\n**Limitations of population data**\n- **Undercounting**: homeless people, undocumented migrants, people in remote or conflict areas are easily missed.\n- **Wrong answers**: people misunderstand questions, forget or choose not to answer truthfully.\n- **Out of date**: a 10-year gap means fast-changing places drift away from the figures.\n- **Cost and politics**: Nigeria has not held a full census since **2006**, so estimates of its population (roughly 220–230 million in 2023) are uncertain.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three ways to collect population data. A census counts all 40 people in a grid. A sample survey asks 8 of the 40 people, one in five. A register-based census, as in Singapore 2020, combines government records with a large sample survey."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="12" y="10" width="220" height="170" rx="8" fill="#f8fafc" stroke="#334155"/><text x="122" y="30" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Census</text><circle cx="45" cy="52" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M41.5 52 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="67" cy="52" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M63.5 52 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="89" cy="52" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M85.5 52 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="111" cy="52" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M107.5 52 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="133" cy="52" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M129.5 52 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="155" cy="52" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M151.5 52 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="177" cy="52" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M173.5 52 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="199" cy="52" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M195.5 52 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="45" cy="74" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M41.5 74 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="67" cy="74" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M63.5 74 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="89" cy="74" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M85.5 74 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="111" cy="74" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M107.5 74 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="133" cy="74" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M129.5 74 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="155" cy="74" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M151.5 74 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="177" cy="74" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M173.5 74 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="199" cy="74" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M195.5 74 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="45" cy="96" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M41.5 96 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="67" cy="96" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M63.5 96 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="89" cy="96" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M85.5 96 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="111" cy="96" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M107.5 96 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="133" cy="96" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M129.5 96 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="155" cy="96" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M151.5 96 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="177" cy="96" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M173.5 96 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="199" cy="96" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M195.5 96 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="45" cy="118" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M41.5 118 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="67" cy="118" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M63.5 118 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="89" cy="118" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M85.5 118 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="111" cy="118" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M107.5 118 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="133" cy="118" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M129.5 118 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="155" cy="118" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M151.5 118 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="177" cy="118" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M173.5 118 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="199" cy="118" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M195.5 118 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="45" cy="140" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M41.5 140 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="67" cy="140" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M63.5 140 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="89" cy="140" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M85.5 140 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="111" cy="140" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M107.5 140 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="133" cy="140" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M129.5 140 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="155" cy="140" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M151.5 140 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="177" cy="140" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M173.5 140 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="199" cy="140" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M195.5 140 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="122" y="168" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">All 40 people counted (40 of 40)</text><rect x="248" y="10" width="220" height="170" rx="8" fill="#f8fafc" stroke="#334155"/><text x="358" y="30" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Sample survey</text><circle cx="281" cy="52" r="7" fill="#ffffff" stroke="#334155"/><circle cx="303" cy="52" r="7" fill="#ffffff" stroke="#334155"/><circle cx="325" cy="52" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M321.5 52 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="347" cy="52" r="7" fill="#ffffff" stroke="#334155"/><circle cx="369" cy="52" r="7" fill="#ffffff" stroke="#334155"/><circle cx="391" cy="52" r="7" fill="#ffffff" stroke="#334155"/><circle cx="413" cy="52" r="7" fill="#ffffff" stroke="#334155"/><circle cx="435" cy="52" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M431.5 52 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="281" cy="74" r="7" fill="#ffffff" stroke="#334155"/><circle cx="303" cy="74" r="7" fill="#ffffff" stroke="#334155"/><circle cx="325" cy="74" r="7" fill="#ffffff" stroke="#334155"/><circle cx="347" cy="74" r="7" fill="#ffffff" stroke="#334155"/><circle cx="369" cy="74" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M365.5 74 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="391" cy="74" r="7" fill="#ffffff" stroke="#334155"/><circle cx="413" cy="74" r="7" fill="#ffffff" stroke="#334155"/><circle cx="435" cy="74" r="7" fill="#ffffff" stroke="#334155"/><circle cx="281" cy="96" r="7" fill="#ffffff" stroke="#334155"/><circle cx="303" cy="96" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M299.5 96 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="325" cy="96" r="7" fill="#ffffff" stroke="#334155"/><circle cx="347" cy="96" r="7" fill="#ffffff" stroke="#334155"/><circle cx="369" cy="96" r="7" fill="#ffffff" stroke="#334155"/><circle cx="391" cy="96" r="7" fill="#ffffff" stroke="#334155"/><circle cx="413" cy="96" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M409.5 96 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="435" cy="96" r="7" fill="#ffffff" stroke="#334155"/><circle cx="281" cy="118" r="7" fill="#ffffff" stroke="#334155"/><circle cx="303" cy="118" r="7" fill="#ffffff" stroke="#334155"/><circle cx="325" cy="118" r="7" fill="#ffffff" stroke="#334155"/><circle cx="347" cy="118" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M343.5 118 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="369" cy="118" r="7" fill="#ffffff" stroke="#334155"/><circle cx="391" cy="118" r="7" fill="#ffffff" stroke="#334155"/><circle cx="413" cy="118" r="7" fill="#ffffff" stroke="#334155"/><circle cx="435" cy="118" r="7" fill="#ffffff" stroke="#334155"/><circle cx="281" cy="140" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M277.5 140 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="303" cy="140" r="7" fill="#ffffff" stroke="#334155"/><circle cx="325" cy="140" r="7" fill="#ffffff" stroke="#334155"/><circle cx="347" cy="140" r="7" fill="#ffffff" stroke="#334155"/><circle cx="369" cy="140" r="7" fill="#ffffff" stroke="#334155"/><circle cx="391" cy="140" r="7" fill="#c7d2fe" stroke="#334155"/><path d="M387.5 140 l2.5 3 l4.5 -6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="413" cy="140" r="7" fill="#ffffff" stroke="#334155"/><circle cx="435" cy="140" r="7" fill="#ffffff" stroke="#334155"/><text x="358" y="168" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">8 of 40 asked (1 in 5)</text><rect x="12" y="194" width="456" height="116" rx="8" fill="#f8fafc" stroke="#334155"/><text x="240" y="214" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Register-based census (Singapore 2020)</text><rect x="28" y="228" width="150" height="64" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="103" y="248" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Government records</text><text x="103" y="264" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">births, deaths, IDs,</text><text x="103" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">addresses</text><text x="194" y="266" font-size="22" text-anchor="middle" font-family="sans-serif" fill="#1f2937">+</text><rect x="210" y="228" width="130" height="64" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="275" y="248" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Large sample</text><text x="275" y="264" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">survey: language,</text><text x="275" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">education, travel</text><path d="M346 260 L376 260" stroke="#1f2937" stroke-width="2"/><path d="M376 254 L386 260 L376 266 Z" fill="#1f2937"/><rect x="390" y="228" width="66" height="64" rx="6" fill="#fde68a" stroke="#334155"/><text x="423" y="256" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Census</text><text x="423" y="272" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">results</text></svg>`,
      diagramCaption:
        "A census counts everyone; a sample survey asks a representative few. Singapore's register-based census (2020) combines existing government records with a large sample survey.",
      workedExamples: [
        {
          title: "Skills: working out a sample size",
          problem:
            "A new town has 48,000 households. A survey team uses a systematic sample of **1 in 8** households. (a) How many households are surveyed? (b) What percentage of households is that?",
          steps: [
            "'1 in 8' means divide the total by 8.",
            "48,000 ÷ 8 = 6,000 households.",
            "Percentage = part ÷ whole × 100.",
            "6,000 ÷ 48,000 × 100 = 12.5%.",
            "Check: {{1/8}} = 0.125 = 12.5%, so the answer makes sense.",
          ],
          answer: "(a) 6,000 households (b) 12.5%",
          yourTurn: {
            question:
              "Your turn: a district has 36,000 households and a survey asks 4,500 of them. What percentage of households is surveyed? Give your answer as a percentage.",
            answer: { type: "number", value: 12.5, display: "12.5%" },
            solution: "4,500 ÷ 36,000 × 100 = 12.5%. (That is the same as 1 in 8.)",
          },
        },
        {
          title: "Model answer: why run a census?",
          problem: "Explain two reasons why governments carry out a census. [4 marks]",
          steps: [
            "Command word **explain**: give a reason AND develop it (say why it matters). Two reasons × 2 marks each.",
            "Reason 1 (point): to plan public services. Development: knowing how many young children live in each area tells the government how many school places to build.",
            "Reason 2 (point): to spot long-term trends. Development: a rising median age warns that more healthcare and pensions will be needed in future.",
            "Add a real example to lift the answer: Singapore's Census 2020 showed the median age of residents rising to about 41.5.",
          ],
          answer:
            "Governments run a census to plan services. For example, knowing how many children under 5 live in a new town shows how many primary school places will be needed there in a few years. A census also reveals trends over time. Singapore's Census 2020 showed the median age of residents had risen to about 41.5, warning planners that more eldercare and healthcare will be needed.",
          yourTurn: {
            question:
              "Your turn: what name is given to a census, like Singapore's in 2020, that uses existing government records plus a sample survey instead of sending a form to every household?",
            answer: {
              type: "text",
              accept: ["register-based census", "register based census", "register-based", "register based", "register census", "registered-based census", "administrative census"],
            },
            solution: "A **register-based census** — it draws on administrative registers (births, deaths, IDs, addresses) and adds a large sample survey.",
          },
        },
      ],
      keyPoints: [
        "Demography = the study of population size, structure, distribution and change (births, deaths, migration).",
        "A census is an official count of everyone at a fixed date, usually every 10 years.",
        "Sample surveys are cheaper and faster but must be representative (random, systematic or stratified).",
        "Singapore's Census 2020 was register-based: government records plus a sample of roughly 150,000 households.",
        "All population data has limits: undercounting, wrong answers, cost and data going out of date.",
      ],
      whyItWorks:
        "Why can a sample stand in for everyone? If the sample is chosen randomly, every type of person has the same chance of being picked, so the mix of ages, jobs and languages in the sample mirrors the mix in the whole population. The bigger the (fair) sample, the smaller the chance that luck makes it unrepresentative. A register-based census works because modern states already record each birth, death and change of address — so the basic count is kept up to date continuously, and the survey only has to fill the gaps.",
      strategies: ["Use the command word", "Compare and contrast", "Use figures from the source", "Social / economic / environmental (SEE)"],
      thinkDeeper:
        "A register only knows what was written on official forms. Suggest one question a register-based census could NOT answer without a survey, and one group of people who might be missing from the registers altogether. Why does each gap matter for planning?",
    },
    // ------------------------------------------------------------------
    {
      id: "class-census",
      heading: "Running a class census",
      discovery: {
        problem:
          "Your class of 28 is asked: 'How do you get to school?' Wei Ling writes 'MRT, then I walk.' Arjun writes 'Mostly bus, sometimes Dad drives.' Zara writes 'It depends.' How could you rewrite the question so every answer can be counted — and the totals add up to exactly 28?",
        idea:
          "Use a **closed question** with fixed categories and one tick per person: 'What is the **main** way (the longest part of the journey) you usually travel to school? MRT / Bus / Car / School bus / Walk or cycle / Other.' The categories cover everyone and do not overlap, so the tally adds up to the class size.",
      },
      body:
        "A class census is a small piece of **primary data collection** — data you collect yourself, rather than **secondary data** someone else published (like Census 2020).\n\n**1. Plan**\n- Set an **aim** or hypothesis: 'Most students in 8C use public transport to get to school.'\n- Write **clear, closed questions** with tick-box answers that do not overlap. Avoid **leading questions** ('Don't you agree cars are bad?').\n- Use **open questions** sparingly — answers are richer but harder to count.\n\n**2. Collect ethically**\n- Ask for **consent** and let people skip questions.\n- Keep it **anonymous**: no names on the sheet.\n- Avoid sensitive questions (exact address, family income, health).\n- Store results safely. In Singapore, the Personal Data Protection Act (2012) sets rules on how organisations collect and use personal data.\n\n**3. Tally and tabulate**\n\nRecord each answer with a **tally** — four strokes then a fifth across them (a 'five-bar gate'), so you can count in fives. Then turn the tallies into a **frequency table**.\n\n| Main method | Frequency | Percentage |\n|---|---|---|\n| MRT | 9 | 32.1% |\n| Bus | 7 | 25.0% |\n| Car | 6 | 21.4% |\n| School bus | 4 | 14.3% |\n| Walk/cycle | 2 | 7.1% |\n| **Total** | **28** | **99.9% (rounding)** |\n\n**4. Present**\n- **Bar chart**: compares categories (gaps between bars).\n- **Pie chart**: shows proportions of a whole (angle = frequency ÷ total × 360°).\n- **Histogram**: continuous data such as height (no gaps).\n\n**5. Analyse and conclude**\n- Find the **mode** (most common), **mean**, **median** and **range** where the data is numerical.\n- Use **TEA**: Trend, Evidence (quote figures), Anomaly.\n- Here, 16 of 28 students (57%) use the MRT or public bus, so the hypothesis is **supported** for 8C.\n\n**6. Evaluate**\n\nA sample of 28 from one class, on one day, cannot represent the whole school, let alone Singapore. Students who live close by, or one unusual rainy day, could skew results. To improve reliability: survey several classes or year groups, repeat on different days and use a stratified sample.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tally table and bar chart of how class 8C travels to school, 28 students: MRT 9, bus 7, car 6, school bus 4, walk or cycle 2."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="240" y="20" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Main way class 8C travels to school (28 students)</text><rect x="8" y="34" width="178" height="182" fill="#f8fafc" stroke="#334155"/><line x1="72" y1="34" x2="72" y2="216" stroke="#334155"/><line x1="150" y1="34" x2="150" y2="216" stroke="#334155"/><text x="12" y="52" font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937">Method</text><text x="111" y="52" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Tally</text><text x="168" y="52" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">No.</text><line x1="8" y1="60" x2="186" y2="60" stroke="#334155"/><text x="12" y="79" font-size="11" font-family="sans-serif" fill="#1f2937">MRT</text><text x="168" y="79" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">9</text><line x1="80" y1="66" x2="80" y2="80" stroke="#1f2937" stroke-width="1.5"/><line x1="84" y1="66" x2="84" y2="80" stroke="#1f2937" stroke-width="1.5"/><line x1="88" y1="66" x2="88" y2="80" stroke="#1f2937" stroke-width="1.5"/><line x1="92" y1="66" x2="92" y2="80" stroke="#1f2937" stroke-width="1.5"/><line x1="78" y1="78" x2="94" y2="68" stroke="#1f2937" stroke-width="1.5"/><line x1="102" y1="66" x2="102" y2="80" stroke="#1f2937" stroke-width="1.5"/><line x1="106" y1="66" x2="106" y2="80" stroke="#1f2937" stroke-width="1.5"/><line x1="110" y1="66" x2="110" y2="80" stroke="#1f2937" stroke-width="1.5"/><line x1="114" y1="66" x2="114" y2="80" stroke="#1f2937" stroke-width="1.5"/><line x1="8" y1="86" x2="186" y2="86" stroke="#334155"/><text x="12" y="105" font-size="11" font-family="sans-serif" fill="#1f2937">Bus</text><text x="168" y="105" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">7</text><line x1="80" y1="92" x2="80" y2="106" stroke="#1f2937" stroke-width="1.5"/><line x1="84" y1="92" x2="84" y2="106" stroke="#1f2937" stroke-width="1.5"/><line x1="88" y1="92" x2="88" y2="106" stroke="#1f2937" stroke-width="1.5"/><line x1="92" y1="92" x2="92" y2="106" stroke="#1f2937" stroke-width="1.5"/><line x1="78" y1="104" x2="94" y2="94" stroke="#1f2937" stroke-width="1.5"/><line x1="102" y1="92" x2="102" y2="106" stroke="#1f2937" stroke-width="1.5"/><line x1="106" y1="92" x2="106" y2="106" stroke="#1f2937" stroke-width="1.5"/><line x1="8" y1="112" x2="186" y2="112" stroke="#334155"/><text x="12" y="131" font-size="11" font-family="sans-serif" fill="#1f2937">Car</text><text x="168" y="131" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6</text><line x1="80" y1="118" x2="80" y2="132" stroke="#1f2937" stroke-width="1.5"/><line x1="84" y1="118" x2="84" y2="132" stroke="#1f2937" stroke-width="1.5"/><line x1="88" y1="118" x2="88" y2="132" stroke="#1f2937" stroke-width="1.5"/><line x1="92" y1="118" x2="92" y2="132" stroke="#1f2937" stroke-width="1.5"/><line x1="78" y1="130" x2="94" y2="120" stroke="#1f2937" stroke-width="1.5"/><line x1="102" y1="118" x2="102" y2="132" stroke="#1f2937" stroke-width="1.5"/><line x1="8" y1="138" x2="186" y2="138" stroke="#334155"/><text x="12" y="157" font-size="11" font-family="sans-serif" fill="#1f2937">School bus</text><text x="168" y="157" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4</text><line x1="80" y1="144" x2="80" y2="158" stroke="#1f2937" stroke-width="1.5"/><line x1="84" y1="144" x2="84" y2="158" stroke="#1f2937" stroke-width="1.5"/><line x1="88" y1="144" x2="88" y2="158" stroke="#1f2937" stroke-width="1.5"/><line x1="92" y1="144" x2="92" y2="158" stroke="#1f2937" stroke-width="1.5"/><line x1="8" y1="164" x2="186" y2="164" stroke="#334155"/><text x="12" y="183" font-size="11" font-family="sans-serif" fill="#1f2937">Walk/cycle</text><text x="168" y="183" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2</text><line x1="80" y1="170" x2="80" y2="184" stroke="#1f2937" stroke-width="1.5"/><line x1="84" y1="170" x2="84" y2="184" stroke="#1f2937" stroke-width="1.5"/><line x1="8" y1="190" x2="186" y2="190" stroke="#334155" stroke-width="2"/><text x="12" y="209" font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937">Total</text><text x="168" y="209" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">28</text><line x1="222" y1="270" x2="468" y2="270" stroke="#e5e7eb"/><line x1="218" y1="270" x2="222" y2="270" stroke="#1f2937"/><text x="215" y="274" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">0</text><line x1="222" y1="230" x2="468" y2="230" stroke="#e5e7eb"/><line x1="218" y1="230" x2="222" y2="230" stroke="#1f2937"/><text x="215" y="234" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">2</text><line x1="222" y1="190" x2="468" y2="190" stroke="#e5e7eb"/><line x1="218" y1="190" x2="222" y2="190" stroke="#1f2937"/><text x="215" y="194" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">4</text><line x1="222" y1="150" x2="468" y2="150" stroke="#e5e7eb"/><line x1="218" y1="150" x2="222" y2="150" stroke="#1f2937"/><text x="215" y="154" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">6</text><line x1="222" y1="110" x2="468" y2="110" stroke="#e5e7eb"/><line x1="218" y1="110" x2="222" y2="110" stroke="#1f2937"/><text x="215" y="114" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">8</text><line x1="222" y1="70" x2="468" y2="70" stroke="#e5e7eb"/><line x1="218" y1="70" x2="222" y2="70" stroke="#1f2937"/><text x="215" y="74" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">10</text><line x1="222" y1="270" x2="222" y2="64" stroke="#1f2937"/><line x1="222" y1="270" x2="468" y2="270" stroke="#1f2937"/><text x="0" y="0" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="translate(198 170) rotate(-90)">Number of students</text><rect x="230" y="90" width="34" height="180" fill="#c7d2fe" stroke="#334155"/><text x="247" y="86" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">9</text><text x="247" y="284" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">MRT</text><rect x="279" y="130" width="34" height="140" fill="#c7d2fe" stroke="#334155"/><text x="296" y="126" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">7</text><text x="296" y="284" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Bus</text><rect x="328" y="150" width="34" height="120" fill="#c7d2fe" stroke="#334155"/><text x="345" y="146" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6</text><text x="345" y="284" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Car</text><rect x="377" y="190" width="34" height="80" fill="#c7d2fe" stroke="#334155"/><text x="394" y="186" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4</text><text x="394" y="284" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">School</text><text x="394" y="297" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">bus</text><rect x="426" y="230" width="34" height="40" fill="#c7d2fe" stroke="#334155"/><text x="443" y="226" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2</text><text x="443" y="284" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Walk/</text><text x="443" y="297" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">cycle</text><text x="345" y="314" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Main method of travel</text></svg>`,
      diagramCaption:
        "Class 8C's results: the tally table (five-bar gates) turned into a bar chart. Bar heights match the frequencies exactly — 9, 7, 6, 4 and 2, total 28.",
      workedExamples: [
        {
          title: "Skills: turning a tally into a percentage",
          problem: "Using the class 8C results, what percentage of the class travels mainly by MRT? Give your answer to 1 decimal place.",
          steps: [
            "Find the frequency for MRT: 9 students.",
            "Find the total: 9 + 7 + 6 + 4 + 2 = 28 students.",
            "Percentage = frequency ÷ total × 100.",
            "    9 ÷ 28 × 100 = 32.142…",
            "Round to 1 decimal place: 32.1%.",
          ],
          answer: "32.1% of the class travels mainly by MRT.",
          yourTurn: {
            question: "Your turn: what percentage of class 8C travels mainly by public bus? Give your answer as a whole number percentage.",
            answer: { type: "number", value: 25, display: "25%" },
            solution: "7 ÷ 28 × 100 = 25%.",
          },
        },
        {
          title: "Read the resource: averages from a class census",
          problem:
            "8C also recorded the number of siblings each student has: 0 siblings — 6 students; 1 sibling — 12 students; 2 siblings — 7 students; 3 siblings — 3 students. Find the mode and the mean number of siblings.",
          steps: [
            "Check the total: 6 + 12 + 7 + 3 = 28 students. ✔",
            "**Mode** = the value with the highest frequency = 1 sibling (12 students).",
            "**Mean**: multiply each value by its frequency and add.",
            "    (0 × 6) + (1 × 12) + (2 × 7) + (3 × 3) = 0 + 12 + 14 + 9 = 35 siblings",
            "    Mean = 35 ÷ 28 = 1.25 siblings per student",
          ],
          answer: "Mode = 1 sibling; mean = 1.25 siblings per student.",
          yourTurn: {
            question:
              "Your turn: using the same sibling data, what is the **median** number of siblings? (Hint: list the 28 values in order and find the middle.)",
            answer: { type: "number", value: 1 },
            solution:
              "With 28 values the median is halfway between the 14th and 15th. Values 1–6 are 0 siblings; values 7–18 are 1 sibling. The 14th and 15th are both 1, so the median is 1 sibling.",
          },
        },
      ],
      keyPoints: [
        "Primary data = collected yourself; secondary data = published by others (e.g. a census).",
        "Use closed questions with categories that cover everyone and do not overlap.",
        "Collect ethically: consent, anonymity, no sensitive questions, safe storage.",
        "Tally in five-bar gates, then make a frequency table and choose a suitable chart.",
        "Percentage = frequency ÷ total × 100; check that frequencies add up to the sample size.",
        "A small, one-off sample cannot be generalised to a whole school or country.",
      ],
      whyItWorks:
        "Why do closed, non-overlapping categories matter? Each person must land in exactly one box. If categories overlap (say 'MRT' and 'Public transport'), one person could be counted twice; if a category is missing, someone gets left out. Either way the totals no longer match the number of people asked, and every percentage you calculate is wrong. Five-bar gates work for the same reason — grouping in fives makes miscounting much less likely than a long row of single strokes.",
      strategies: ["TEA (Trend, Evidence, Anomaly)", "Use figures from the source", "Sketch it", "Spot the misconception"],
      thinkDeeper:
        "Marcus says: 'Our class census shows 32% of Singapore's students take the MRT to school.' Give two reasons why this conclusion is not justified, and design a better sample that would let you make a claim about the whole school.",
    },
    // ------------------------------------------------------------------
    {
      id: "population-pyramids",
      heading: "Population pyramids",
      discovery: {
        problem:
          "Look at the two pyramids in the diagram before reading on. One has a very wide base and a sharp point; the other is narrow at the bottom and widest in the middle-aged and older groups. Which country needs to build more primary schools? Which needs more care homes? And which population is likely to keep growing for decades?",
        idea:
          "The **shape tells a story**. A wide base means many births (high birth rate); sides that slope in steeply mean many people die before old age. A narrow base with a wide top means few births and long lives. The youthful country needs schools and will keep growing as its many children grow up and have families; the ageing country needs care homes and may shrink.",
      },
      body:
        "A **population pyramid** (age–sex pyramid) is a pair of horizontal bar charts placed back to back.\n- **Males** are usually on the left and **females** on the right — always check the labels.\n- Each bar is an age group or **cohort**. Real pyramids usually use **5-year bands** (0–4, 5–9 … 100+); the diagram here uses simplified 10-year bands.\n- The horizontal axis shows either **% of the total population** or **numbers** (often millions). Check which before you compare countries.\n\n**How to read one**\n- **Base** → birth rate (wide = many births).\n- **Sides** → death rate (steep inward slope = many people dying young).\n- **Top** → life expectancy (wide top = many people living to old age).\n\n**Simplified, illustrative data used in the diagram (% of total population)**\n\n| Age | Niger-type M | Niger-type F | Japan-type M | Japan-type F |\n|---|---|---|---|---|\n| 80+ | 0.5 | 0.5 | 3.5 | 6.5 |\n| 70–79 | 0.5 | 0.5 | 6 | 7 |\n| 60–69 | 1 | 1.5 | 6 | 6 |\n| 50–59 | 2 | 2 | 7 | 7 |\n| 40–49 | 3.5 | 3.5 | 7 | 7 |\n| 30–39 | 5 | 5 | 5.5 | 5.5 |\n| 20–29 | 8 | 8 | 5 | 5 |\n| 10–19 | 12 | 12 | 4.5 | 4.5 |\n| 0–9 | 17.5 | 17 | 3.5 | 3.5 |\n\n**Three classic shapes**\n\n| Shape | What it shows | Example |\n|---|---|---|\n| **Expansive** (youthful): wide base, narrow top | High birth rate, high-ish death rate, shorter life expectancy | **Niger**: about half the population is under 15; around 6–7 children per woman (early 2020s) |\n| **Constrictive** (ageing): narrow base, wide middle and top | Low birth rate, low death rate, long life expectancy | **Japan**: about 29% aged 65+ (2023); population falling since around 2010 |\n| **Stationary** (column-like): similar widths up to old age | Low birth and death rates, little change | Roughly, some northern European countries |\n\n**Singapore** has a constrictive pyramid: its resident total fertility rate was about **0.97 in 2023**, so the youngest bars are narrower than those of people in their 30s to 60s.\n\n**Bulges and notches**\n- **Bulge**: a baby boom (e.g. after the Second World War in Japan and Singapore), or **immigration** of working-age people — in Gulf states such as Qatar, a huge bulge of men aged about 20–49 reflects male migrant workers.\n- **Notch**: deaths in **war** or **famine** (China's famine of 1959–61 left a notch), emigration, or a sudden fall in births. Japan's 1966 'Fire Horse' year saw about a quarter fewer births because of a superstition about girls born that year.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two simplified illustrative population pyramids drawn to the same scale. Niger-type: very wide base, 17.5 per cent males and 17 per cent females aged 0 to 9, narrowing sharply to a point. Japan-type: narrow base of 3.5 per cent each sex aged 0 to 9, widest at 40 to 59 with 7 per cent each, and a wide top with 6.5 per cent females aged 80 plus."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="120" y="16" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Niger-type (youthful)</text><text x="94" y="34" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Male</text><text x="146" y="34" font-size="11" font-family="sans-serif" fill="#1f2937">Female</text><line x1="98" y1="40" x2="98" y2="265" stroke="#e5e7eb"/><line x1="98" y1="265" x2="98" y2="269" stroke="#1f2937"/><text x="98" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0</text><line x1="142" y1="40" x2="142" y2="265" stroke="#e5e7eb"/><line x1="142" y1="265" x2="142" y2="269" stroke="#1f2937"/><text x="142" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0</text><line x1="73" y1="40" x2="73" y2="265" stroke="#e5e7eb"/><line x1="73" y1="265" x2="73" y2="269" stroke="#1f2937"/><text x="73" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text><line x1="167" y1="40" x2="167" y2="265" stroke="#e5e7eb"/><line x1="167" y1="265" x2="167" y2="269" stroke="#1f2937"/><text x="167" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text><line x1="48" y1="40" x2="48" y2="265" stroke="#e5e7eb"/><line x1="48" y1="265" x2="48" y2="269" stroke="#1f2937"/><text x="48" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10</text><line x1="192" y1="40" x2="192" y2="265" stroke="#e5e7eb"/><line x1="192" y1="265" x2="192" y2="269" stroke="#1f2937"/><text x="192" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10</text><line x1="23" y1="40" x2="23" y2="265" stroke="#e5e7eb"/><line x1="23" y1="265" x2="23" y2="269" stroke="#1f2937"/><text x="23" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">15</text><line x1="217" y1="40" x2="217" y2="265" stroke="#e5e7eb"/><line x1="217" y1="265" x2="217" y2="269" stroke="#1f2937"/><text x="217" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">15</text><rect x="10.5" y="241" width="87.5" height="23" fill="#bae6fd" stroke="#334155"/><rect x="142" y="241" width="85" height="23" fill="#fecaca" stroke="#334155"/><text x="120" y="257" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0–9</text><rect x="38" y="216" width="60" height="23" fill="#bae6fd" stroke="#334155"/><rect x="142" y="216" width="60" height="23" fill="#fecaca" stroke="#334155"/><text x="120" y="232" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10–19</text><rect x="58" y="191" width="40" height="23" fill="#bae6fd" stroke="#334155"/><rect x="142" y="191" width="40" height="23" fill="#fecaca" stroke="#334155"/><text x="120" y="207" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">20–29</text><rect x="73" y="166" width="25" height="23" fill="#bae6fd" stroke="#334155"/><rect x="142" y="166" width="25" height="23" fill="#fecaca" stroke="#334155"/><text x="120" y="182" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">30–39</text><rect x="80.5" y="141" width="17.5" height="23" fill="#bae6fd" stroke="#334155"/><rect x="142" y="141" width="17.5" height="23" fill="#fecaca" stroke="#334155"/><text x="120" y="157" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">40–49</text><rect x="88" y="116" width="10" height="23" fill="#bae6fd" stroke="#334155"/><rect x="142" y="116" width="10" height="23" fill="#fecaca" stroke="#334155"/><text x="120" y="132" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">50–59</text><rect x="93" y="91" width="5" height="23" fill="#bae6fd" stroke="#334155"/><rect x="142" y="91" width="7.5" height="23" fill="#fecaca" stroke="#334155"/><text x="120" y="107" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">60–69</text><rect x="95.5" y="66" width="2.5" height="23" fill="#bae6fd" stroke="#334155"/><rect x="142" y="66" width="2.5" height="23" fill="#fecaca" stroke="#334155"/><text x="120" y="82" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">70–79</text><rect x="95.5" y="41" width="2.5" height="23" fill="#bae6fd" stroke="#334155"/><rect x="142" y="41" width="2.5" height="23" fill="#fecaca" stroke="#334155"/><text x="120" y="57" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">80+</text><line x1="23" y1="265" x2="98" y2="265" stroke="#1f2937"/><line x1="142" y1="265" x2="217" y2="265" stroke="#1f2937"/><text x="360" y="16" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Japan-type (ageing)</text><text x="334" y="34" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Male</text><text x="386" y="34" font-size="11" font-family="sans-serif" fill="#1f2937">Female</text><line x1="338" y1="40" x2="338" y2="265" stroke="#e5e7eb"/><line x1="338" y1="265" x2="338" y2="269" stroke="#1f2937"/><text x="338" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0</text><line x1="382" y1="40" x2="382" y2="265" stroke="#e5e7eb"/><line x1="382" y1="265" x2="382" y2="269" stroke="#1f2937"/><text x="382" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0</text><line x1="313" y1="40" x2="313" y2="265" stroke="#e5e7eb"/><line x1="313" y1="265" x2="313" y2="269" stroke="#1f2937"/><text x="313" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text><line x1="407" y1="40" x2="407" y2="265" stroke="#e5e7eb"/><line x1="407" y1="265" x2="407" y2="269" stroke="#1f2937"/><text x="407" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text><line x1="288" y1="40" x2="288" y2="265" stroke="#e5e7eb"/><line x1="288" y1="265" x2="288" y2="269" stroke="#1f2937"/><text x="288" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10</text><line x1="432" y1="40" x2="432" y2="265" stroke="#e5e7eb"/><line x1="432" y1="265" x2="432" y2="269" stroke="#1f2937"/><text x="432" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10</text><rect x="320.5" y="241" width="17.5" height="23" fill="#bae6fd" stroke="#334155"/><rect x="382" y="241" width="17.5" height="23" fill="#fecaca" stroke="#334155"/><text x="360" y="257" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0–9</text><rect x="315.5" y="216" width="22.5" height="23" fill="#bae6fd" stroke="#334155"/><rect x="382" y="216" width="22.5" height="23" fill="#fecaca" stroke="#334155"/><text x="360" y="232" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10–19</text><rect x="313" y="191" width="25" height="23" fill="#bae6fd" stroke="#334155"/><rect x="382" y="191" width="25" height="23" fill="#fecaca" stroke="#334155"/><text x="360" y="207" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">20–29</text><rect x="310.5" y="166" width="27.5" height="23" fill="#bae6fd" stroke="#334155"/><rect x="382" y="166" width="27.5" height="23" fill="#fecaca" stroke="#334155"/><text x="360" y="182" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">30–39</text><rect x="303" y="141" width="35" height="23" fill="#bae6fd" stroke="#334155"/><rect x="382" y="141" width="35" height="23" fill="#fecaca" stroke="#334155"/><text x="360" y="157" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">40–49</text><rect x="303" y="116" width="35" height="23" fill="#bae6fd" stroke="#334155"/><rect x="382" y="116" width="35" height="23" fill="#fecaca" stroke="#334155"/><text x="360" y="132" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">50–59</text><rect x="308" y="91" width="30" height="23" fill="#bae6fd" stroke="#334155"/><rect x="382" y="91" width="30" height="23" fill="#fecaca" stroke="#334155"/><text x="360" y="107" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">60–69</text><rect x="308" y="66" width="30" height="23" fill="#bae6fd" stroke="#334155"/><rect x="382" y="66" width="35" height="23" fill="#fecaca" stroke="#334155"/><text x="360" y="82" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">70–79</text><rect x="320.5" y="41" width="17.5" height="23" fill="#bae6fd" stroke="#334155"/><rect x="382" y="41" width="32.5" height="23" fill="#fecaca" stroke="#334155"/><text x="360" y="57" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">80+</text><line x1="288" y1="265" x2="338" y2="265" stroke="#1f2937"/><line x1="382" y1="265" x2="432" y2="265" stroke="#1f2937"/><text x="240" y="298" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">% of total population (same scale for both). Age groups in years.</text><text x="240" y="314" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Simplified, illustrative data (10-year bands)</text></svg>`,
      diagramCaption:
        "Simplified, illustrative pyramids drawn exactly from the table, on the same scale. Niger-type: expansive (youthful). Japan-type: constrictive (ageing), with more older women than men because women live longer on average.",
      workedExamples: [
        {
          title: "Read the resource: adding up cohorts",
          problem: "Using the illustrative table, what percentage of the Niger-type population is aged **under 20**?",
          steps: [
            "'Under 20' = the 0–9 and 10–19 bands, **both** sexes.",
            "0–9: 17.5 (male) + 17 (female) = 34.5%.",
            "10–19: 12 + 12 = 24%.",
            "    34.5 + 24 = 58.5%",
            "Sense check: the two bottom bars are by far the widest, so more than half under 20 looks right.",
          ],
          answer: "58.5% of the Niger-type population is under 20.",
          yourTurn: {
            question: "Your turn: using the same table, what percentage of the Japan-type population is aged **70 or over** (both sexes)?",
            answer: { type: "number", value: 23, display: "23%" },
            solution: "70–79: 6 + 7 = 13%. 80+: 3.5 + 6.5 = 10%. Total = 13 + 10 = 23%.",
          },
        },
        {
          title: "Model answer: describe a pyramid",
          problem: "Describe the shape of the Japan-type pyramid. [3 marks]",
          steps: [
            "Command word **describe**: say what you see — no reasons needed.",
            "Start at the base (Trend): narrow base — only 3.5% of each sex aged 0–9.",
            "Middle (Evidence): widest at 40–59, with 7% of each sex in each band.",
            "Top (Anomaly / detail): wide top — 6.5% are women aged 80+ but only 3.5% are men, so more older women than men.",
          ],
          answer:
            "The pyramid has a narrow base, with only 3.5% of each sex aged 0–9. It widens to its widest at ages 40–59 (7% of each sex per band) and stays wide at the top, where 6.5% of the population are women aged 80+ compared with 3.5% men. Overall it is a constrictive (ageing) shape.",
          yourTurn: {
            question:
              "Your turn: give the one-word name for a pyramid shape with a narrow base and a wide middle and top, showing an ageing population.",
            answer: { type: "text", accept: ["constrictive", "constrictive pyramid", "contracting", "contractive", "regressive", "ageing", "aging"] },
            solution: "**Constrictive** (also called contracting or ageing) — few births and long life expectancy.",
          },
        },
      ],
      keyPoints: [
        "Pyramids show age (vertical) and sex (left/right); bars are cohorts, usually 5-year bands.",
        "Check the axis: % of total population or actual numbers.",
        "Base = birth rate, sides = death rate, top = life expectancy.",
        "Expansive = youthful (Niger); constrictive = ageing (Japan, Singapore).",
        "Bulges come from baby booms or immigration; notches from war, famine, emigration or birth dips.",
      ],
      whyItWorks:
        "Why does a youthful pyramid point upwards? Each cohort can only stay the same size or shrink as it ages (unless migrants join it), because people die but nobody is born at age 40. Where many babies are born and many people die before old age, each bar is much smaller than the one below — a pointed pyramid. Where few babies are born and almost everyone survives to old age, bars barely shrink as you go up, so the top ends up as wide as, or wider than, the base. Women's longer average life expectancy is why the oldest bars are usually wider on the female side.",
      strategies: ["Read the key first", "TEA (Trend, Evidence, Anomaly)", "Use figures from the source", "Look for the anomaly", "Cause → process → effect"],
      thinkDeeper:
        "Singapore's **total** population pyramid (which includes foreign workers) has a bigger bulge of adults aged roughly 25–45 than its **resident** pyramid. Explain why, and suggest why planners might want to look at both pyramids.",
    },
    // ------------------------------------------------------------------
    {
      id: "dependency-ratio",
      heading: "Dependency & the age structure",
      discovery: {
        problem:
          "In Niger, roughly every 100 people of working age share their country with about 105–110 children and older people. In Japan the figure is about 65–70. So Japan clearly has the easier job of supporting its dependants… or does it?",
        idea:
          "The **number** of dependants is only half the story — **who** they are matters. Niger's dependants are mostly **children**: they need schools and vaccinations, but they will become workers. Japan's are increasingly **elderly**: they need pensions, healthcare and care, their numbers are still rising, and the workforce that pays for them is shrinking.",
      },
      body:
        "Demographers split a population into three broad age groups:\n- **Young dependants**: aged **0–14**.\n- **Working age** (economically active): aged **15–64**.\n- **Elderly dependants**: aged **65 and over**.\n\nThe **dependency ratio** compares the number of dependants with the number of people of working age:\n\n    dependency ratio = (0–14 + 65+) ÷ (15–64) × 100\n\nIt tells you **how many dependants there are for every 100 people of working age**. You can use actual numbers or percentages — the answer is the same.\n\nYou can also split it:\n\n    young dependency ratio = (0–14) ÷ (15–64) × 100\n    old-age dependency ratio = (65+) ÷ (15–64) × 100\n\n**Two contrasting countries (rounded, about 2023)**\n\n| Country | 0–14 | 15–64 | 65+ | Dependency ratio |\n|---|---|---|---|---|\n| Niger | 49% | 48% | 3% | about 108 |\n| Japan | 11% | 60% | 29% | about 67 |\n\n**Interpreting the number**\n- **Above 100**: more dependants than people of working age (Niger).\n- A **high** ratio means each worker's taxes must support more people, so services can be stretched.\n- A **youthful** high ratio means pressure on schools, maternity care and, later, jobs.\n- An **ageing** high ratio means pressure on pensions, hospitals and care, and fewer workers to pay for them.\n\n**Singapore** watches this closely. Its **old-age support ratio** (citizens aged 20–64 for each citizen aged 65+) fell from well over 10 around 1970 to about 4 in the early 2020s. Responses include raising the retirement and re-employment ages (the retirement age rose to 63 in 2022 and 64 in 2026, and is planned to reach 65 by 2030), encouraging older people to keep working and admitting working-age immigrants.\n\n**Limitations**\n- Not everyone aged 15–64 works (students, unemployed people, carers).\n- Many people over 65 do work, and in some poorer countries children work.\n- It ignores wealth: a rich country can support more dependants per worker.\n\n**The demographic dividend**: when birth rates fall, a large generation reaches working age with relatively few children or elderly to support. If they are educated and find jobs, the economy can grow fast — economists link part of East Asia's rapid growth, including Singapore's, to this effect.",
      diagram: `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stacked bars of age structure, rounded, about 2023. Niger: 49 per cent aged 0 to 14, 48 per cent aged 15 to 64, 3 per cent aged 65 and over; dependency ratio about 108. Japan: 11 per cent aged 0 to 14, 60 per cent aged 15 to 64, 29 per cent aged 65 and over; dependency ratio about 67."><rect x="0" y="0" width="480" height="270" fill="#ffffff"/><text x="240" y="20" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Age structure and dependency ratio (rounded, about 2023)</text><text x="72" y="68" font-size="13" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">Niger</text><rect x="80" y="44" width="176.4" height="36" fill="#fde68a" stroke="#334155"/><text x="168.2" y="67" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">49%</text><rect x="256.4" y="44" width="172.8" height="36" fill="#bbf7d0" stroke="#334155"/><text x="342.8" y="67" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">48%</text><rect x="429.2" y="44" width="10.8" height="36" fill="#c7d2fe" stroke="#334155"/><text x="444" y="67" font-size="12" font-family="sans-serif" fill="#1f2937">3%</text><text x="80" y="100" font-size="12" font-family="sans-serif" fill="#1f2937">Dependency ratio = (49 + 3) ÷ 48 × 100 ≈ 108</text><text x="72" y="154" font-size="13" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">Japan</text><rect x="80" y="130" width="39.6" height="36" fill="#fde68a" stroke="#334155"/><text x="99.8" y="153" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">11%</text><rect x="119.6" y="130" width="216" height="36" fill="#bbf7d0" stroke="#334155"/><text x="227.6" y="153" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">60%</text><rect x="335.6" y="130" width="104.4" height="36" fill="#c7d2fe" stroke="#334155"/><text x="387.8" y="153" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">29%</text><text x="80" y="186" font-size="12" font-family="sans-serif" fill="#1f2937">Dependency ratio = (11 + 29) ÷ 60 × 100 ≈ 67</text><line x1="80" y1="218" x2="80" y2="222" stroke="#1f2937"/><text x="80" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0%</text><line x1="170" y1="218" x2="170" y2="222" stroke="#1f2937"/><text x="170" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">25%</text><line x1="260" y1="218" x2="260" y2="222" stroke="#1f2937"/><text x="260" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">50%</text><line x1="350" y1="218" x2="350" y2="222" stroke="#1f2937"/><text x="350" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">75%</text><line x1="440" y1="218" x2="440" y2="222" stroke="#1f2937"/><text x="440" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">100%</text><line x1="80" y1="218" x2="440" y2="218" stroke="#1f2937"/><rect x="60" y="246" width="14" height="14" fill="#fde68a" stroke="#334155"/><text x="80" y="257" font-size="12" font-family="sans-serif" fill="#1f2937">Young 0–14</text><rect x="200" y="246" width="14" height="14" fill="#bbf7d0" stroke="#334155"/><text x="220" y="257" font-size="12" font-family="sans-serif" fill="#1f2937">Working age 15–64</text><rect x="340" y="246" width="14" height="14" fill="#c7d2fe" stroke="#334155"/><text x="360" y="257" font-size="12" font-family="sans-serif" fill="#1f2937">Elderly 65+</text></svg>`,
      diagramCaption:
        "Rounded age structures (about 2023). Niger's dependants are mostly young; Japan's are mostly elderly. The bar segments are drawn exactly to the percentages shown.",
      workedExamples: [
        {
          title: "Skills: dependency ratio from percentages",
          problem: "Niger (rounded, about 2023): 0–14 = 49%, 15–64 = 48%, 65+ = 3%. Calculate the dependency ratio to 1 decimal place and explain what it means.",
          steps: [
            "Add the dependants: 49 + 3 = 52.",
            "Divide by the working-age group: 52 ÷ 48 = 1.0833…",
            "Multiply by 100: 108.33…",
            "    {{(49 + 3)/48}} × 100 ≈ 108.3",
            "Interpret: there are about 108 dependants for every 100 people of working age — more dependants than workers.",
          ],
          answer: "About 108.3 — roughly 108 dependants per 100 people of working age, almost all of them children.",
          yourTurn: {
            question:
              "Your turn: Japan (rounded, about 2023) has 0–14 = 11%, 15–64 = 60%, 65+ = 29%. Calculate Japan's **old-age** dependency ratio (65+ ÷ 15–64 × 100), to the nearest whole number.",
            answer: { type: "number", value: 48 },
            solution: "29 ÷ 60 × 100 = 48.3…, so about 48 people aged 65+ for every 100 people of working age.",
          },
        },
        {
          title: "Skills: dependency ratio from actual numbers",
          problem: "A small town has 3,000 people aged 0–14, 10,000 aged 15–64 and 2,000 aged 65+. Calculate its dependency ratio.",
          steps: [
            "Dependants = 3,000 + 2,000 = 5,000.",
            "Working age = 10,000.",
            "    5,000 ÷ 10,000 × 100 = 50",
            "Interpret: 50 dependants for every 100 people of working age (one dependant for every two workers).",
            "Common slip: dividing by the **total** population (15,000) gives 33.3 — that is the dependants' share of everyone, not the dependency ratio.",
          ],
          answer: "Dependency ratio = 50.",
          yourTurn: {
            question:
              "Your turn: another town has 2,400 people aged 0–14, 8,000 aged 15–64 and 2,000 aged 65+. What is its dependency ratio?",
            answer: { type: "number", value: 55 },
            solution: "Dependants = 2,400 + 2,000 = 4,400. 4,400 ÷ 8,000 × 100 = 55.",
          },
        },
      ],
      keyPoints: [
        "Young dependants 0–14; working age 15–64; elderly dependants 65+.",
        "Dependency ratio = (0–14 + 65+) ÷ (15–64) × 100 = dependants per 100 people of working age.",
        "Above 100 means more dependants than people of working age.",
        "Same ratio, different problems: youthful (schools, jobs) vs ageing (pensions, healthcare).",
        "It is a rough measure: not all 15–64s work, and many over-65s do.",
      ],
      whyItWorks:
        "Why does a high ratio cause pressure? Services for children and older people — schools, healthcare, pensions — are paid for mostly by the taxes and earnings of people who work. The ratio measures how many people each 'slice' of the workforce has to support. As birth rates fall, the young part shrinks first (the ratio drops — a window of opportunity); decades later, those large working generations retire and live longer, so the elderly part grows and the ratio rises again. That is why Japan's ratio is rising and why Singapore is planning for ageing now.",
      strategies: ["Use figures from the source", "Cause → process → effect", "Weigh both sides then judge", "Compare and contrast"],
      thinkDeeper:
        "Country X and Country Y both have a dependency ratio of 70. In X, most dependants are under 15; in Y, most are over 65. Which country's ratio is likely to rise over the next 20 years, and which might fall? Explain using what happens as each group ages.",
    },
  ],
  learn: {
    flashcards: [
      { front: "Demography", back: "The study of human populations — their size, structure, distribution and how they change through births, deaths and migration." },
      { front: "Census", back: "An official count of everyone in a country at a fixed date, also recording characteristics such as age, sex and job. Usually every 10 years." },
      { front: "Register-based census", back: "A census built from existing government records (births, deaths, IDs, addresses) plus a sample survey. Singapore has used this approach since 2000, including in 2020." },
      { front: "Sample", back: "A smaller group chosen to represent the whole population." },
      { front: "Random sampling", back: "Every member of the population has an equal chance of being chosen." },
      { front: "Systematic sampling", back: "Choosing at regular intervals, e.g. every 10th household on a list." },
      { front: "Stratified sampling", back: "Choosing people in proportion to the size of groups in the population (e.g. age groups or regions)." },
      { front: "Primary vs secondary data", back: "Primary = collected yourself (a class census). Secondary = collected and published by someone else (Census 2020)." },
      { front: "Five-bar gate", back: "A tally of four strokes crossed by a fifth, so counts can be read in fives." },
      { front: "Population pyramid", back: "Back-to-back horizontal bar charts showing the age and sex structure of a population (males usually left, females right)." },
      { front: "Cohort", back: "A group of people born in the same period, e.g. a 5-year age band on a pyramid." },
      { front: "Expansive (youthful) pyramid", back: "Wide base, narrow top: high birth rate, shorter life expectancy. Example: Niger." },
      { front: "Constrictive (ageing) pyramid", back: "Narrow base, wide middle and top: low birth rate, long life expectancy. Examples: Japan, Singapore." },
      { front: "Bulge on a pyramid", back: "A wider-than-expected bar, caused by a baby boom or immigration (e.g. male migrant workers in Gulf states)." },
      { front: "Notch on a pyramid", back: "A narrower-than-expected bar, caused by war, famine, emigration or a sudden fall in births." },
      { front: "Dependency ratio", back: "(0–14 + 65+) ÷ (15–64) × 100 — the number of dependants per 100 people of working age." },
      { front: "Working age", back: "People aged 15–64, assumed to be economically active." },
      { front: "Median age", back: "The age that splits a population in half: half are older, half younger. Singapore residents: about 41.5 (2020)." },
      { front: "Total fertility rate (TFR)", back: "The average number of children a woman would have in her lifetime. About 2.1 is 'replacement level'. Singapore residents: about 0.97 (2023)." },
      { front: "Demographic dividend", back: "Faster economic growth that can happen when a large share of the population is of working age, after birth rates fall." },
    ],
    mustKnow: [
      "Define demography and name the three things that change a population (births, deaths, migration).",
      "Explain what a census is and give at least two reasons governments run one.",
      "Describe how Singapore's Census 2020 worked (register-based: records + a large sample survey) and quote one finding.",
      "Compare a census, a sample survey and administrative records, with a strength and weakness of each.",
      "Explain random, systematic and stratified sampling.",
      "Design a fair, closed survey question and explain how to collect data ethically.",
      "Tally data, build a frequency table and calculate percentages, mode, mean and median.",
      "Choose a suitable chart (bar, pie, histogram) and draw it accurately.",
      "Read a population pyramid: check the axis, describe the shape, quote figures.",
      "Recognise expansive (Niger) and constrictive (Japan, Singapore) pyramids and explain the shapes.",
      "Explain bulges and notches with real causes.",
      "Calculate the dependency ratio from numbers or percentages, and explain what a high value means.",
      "Explain why the same dependency ratio can mean different problems in youthful and ageing countries.",
    ],
    misconceptions: [
      { wrong: "A census just counts how many people there are.", right: "It also records characteristics — age, sex, household, language, education, job, housing — which is what makes it useful for planning." },
      { wrong: "A bigger sample is always a better sample.", right: "Size helps only if the sample is fair. A huge sample from one MRT station at rush hour is still biased." },
      { wrong: "The dependency ratio is a percentage of the population.", right: "It is dependants per 100 people of working age. Niger's is over 100 — impossible for a percentage of the population." },
      { wrong: "Everyone aged 15–64 works and nobody over 65 does.", right: "These are conventional age bands. Students, carers and unemployed people don't earn; many older Singaporeans keep working." },
      { wrong: "A high dependency ratio always means lots of old people.", right: "Niger's ratio (about 108) is high because of children; Japan's (about 67) is mainly older people." },
      { wrong: "An ageing population must be a shrinking population.", right: "Ageing means the share of older people is rising. Singapore is ageing but its total population can still grow through immigration." },
      { wrong: "On a pyramid, the bars always show numbers of people.", right: "Many pyramids show % of the total population. Always read the axis label before comparing countries." },
      { wrong: "Our class survey shows what all students in Singapore do.", right: "A sample of one class on one day cannot be generalised — it is too small and not representative." },
    ],
    examMistakes: [
      "Dividing by the total population instead of the 15–64 group when calculating the dependency ratio.",
      "Forgetting to multiply by 100 (writing 1.08 instead of 108).",
      "Adding only one side of a pyramid when asked for the % of a whole age group — include males AND females.",
      "Describing a pyramid without quoting any figures from the axis.",
      "Explaining when the command word is 'describe' (or describing when asked to 'explain').",
      "Mixing up the left and right sides of a pyramid — check which side is male.",
      "Claiming a small class census proves something about a whole country.",
      "Comparing pyramids drawn in millions with pyramids drawn in % as if they were on the same scale.",
    ],
    mnemonics: [
      { topic: "What makes a census a census", device: "COUNT", explanation: "Compulsory, Official, Universal (everyone), Nationwide, Timed (fixed date, usually every 10 years)." },
      { topic: "Dependency ratio formula", device: "Y + O over W, times 100", explanation: "Young (0–14) plus Old (65+), divided by Workers (15–64), multiplied by 100." },
      { topic: "Reading a pyramid", device: "Base–Sides–Top = Births–Deaths–Lifespan", explanation: "The base shows the birth rate, the slope of the sides shows the death rate and the top shows life expectancy." },
      { topic: "Pyramid shapes", device: "Prams at the bottom, pensions at the top", explanation: "A wide base (lots of prams) = youthful, like Niger. A wide top (lots of pensions) = ageing, like Japan." },
    ],
    realWorld: [
      { title: "Singapore Census 2020", detail: "A register-based census combining government records with a sample of roughly 150,000 households. It found about 4.04 million residents and a median resident age of about 41.5, up from about 37 in 2010.", emoji: "🇸🇬" },
      { title: "Singapore plans for ageing", detail: "With roughly 4 working-age citizens per citizen aged 65+ in the early 2020s (well over 10 around 1970), Singapore has raised its retirement age (63 from 2022, 64 from 2026, with 65 planned by 2030) and expanded eldercare.", emoji: "👵" },
      { title: "Japan's shrinking population", detail: "About 29% of Japan's people were 65 or over in 2023 and the population has been falling since around 2010, putting pressure on pensions, healthcare and the workforce.", emoji: "🇯🇵" },
      { title: "Niger's youthful population", detail: "About half of Niger's people are under 15, with around 6–7 children per woman in the early 2020s — one of the highest fertility rates in the world. The big need is schools, healthcare and future jobs.", emoji: "🇳🇪" },
      { title: "Nigeria's missing census", detail: "Nigeria has not held a full census since 2006, so estimates of Africa's most populous country (roughly 220–230 million in 2023) are uncertain — a real problem for planning.", emoji: "🇳🇬" },
      { title: "Gulf states' migrant bulge", detail: "Population pyramids for countries such as Qatar have a huge bulge of men aged about 20–49, because so many male migrant workers live there.", emoji: "🏗️" },
    ],
    videos: [
      { title: "Population pyramids explained", channel: "Time for Geography", url: "https://www.youtube.com/results?search_query=time+for+geography+population+pyramids" },
      { title: "Dependency ratio explained", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=dependency+ratio+geography+explained" },
      { title: "Singapore Census of Population 2020", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=singapore+census+of+population+2020" },
      { title: "Population growth explained with IKEA boxes", channel: "Gapminder (Hans Rosling)", url: "https://www.youtube.com/results?search_query=hans+rosling+population+growth+ikea+boxes" },
    ],
    formulas: [
      { name: "Demography", formula: "The study of human populations: size, structure, distribution and change." },
      { name: "Census", formula: "An official count of everyone in a country at a fixed date, usually every 10 years.", note: "Singapore: 1970, 1980 … 2020; register-based since 2000." },
      { name: "Sample", formula: "A smaller group chosen to represent the whole population (random, systematic or stratified)." },
      { name: "Sampling fraction", formula: "Number sampled ÷ total population × 100 (as a %)", note: "1 in 8 = 12.5%." },
      { name: "Percentage of a total", formula: "Frequency ÷ total × 100" },
      { name: "Mean", formula: "Sum of all values ÷ number of values" },
      { name: "Pie chart angle", formula: "Frequency ÷ total × 360°" },
      { name: "Population change", formula: "(Births − deaths) + (immigrants − emigrants)", note: "Births − deaths = natural change; immigrants − emigrants = net migration." },
      { name: "Population pyramid", formula: "Back-to-back bar charts showing the age–sex structure of a population." },
      { name: "Dependency ratio", formula: "(0–14 + 65+) ÷ (15–64) × 100", note: "Dependants per 100 people of working age." },
      { name: "Young dependency ratio", formula: "(0–14) ÷ (15–64) × 100" },
      { name: "Old-age dependency ratio", formula: "(65+) ÷ (15–64) × 100" },
      { name: "Median age", formula: "The age that divides a population into two equal halves." },
      { name: "Total fertility rate", formula: "Average number of children per woman over her lifetime; about 2.1 = replacement level." },
    ],
  },
};
