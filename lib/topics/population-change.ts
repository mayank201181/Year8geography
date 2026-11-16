// Topic: Why Populations Change: Migration (unit: 8 Billion++)
// How and why do populations change, and how significant are the factors involved?

import type { Topic } from "../types";

export const populationChange: Topic = {
  id: "population-change",
  title: "Why Populations Change: Migration",
  subject: "8 Billion++",
  icon: "🧳",
  summary: "Births, deaths and migration — push and pull factors.",
  intro:
    "Every country's population changes for just three reasons: people are born, people die, and people move. Singapore is a brilliant example — its women have on average fewer than one child each, yet its population keeps growing, because people from all over the world come here to live and work. In this topic you will learn to calculate population change, explain why people migrate using push and pull factors, judge which factors matter most, and weigh up the impacts on the places migrants leave and the places they move to.",

  guide: [
    {
      id: "components",
      heading: "The three components of population change",
      body:
        "A country's population can only change in three ways: **births** add people, **deaths** remove people, and **migration** (people moving in or out) can do either. These are called the three **components of population change**.\n\n**Natural change** is births minus deaths. If there are more births than deaths there is **natural increase**; if there are more deaths than births there is **natural decrease**. **Net migration** is immigrants minus emigrants. An **immigrant** is someone who moves *into* a country to live; an **emigrant** is someone who moves *out* of a country to live elsewhere. If more people arrive than leave, net migration is positive (a **net migration gain**).\n\nPut together:\n\n- **Population change = (births − deaths) + (immigrants − emigrants)**\n- or: population change = natural change + net migration\n\nGeographers often compare countries using **rates per 1,000 people** so that big and small countries can be compared fairly. The **crude birth rate (CBR)** is the number of live births per 1,000 people per year; the **crude death rate (CDR)** is deaths per 1,000 people per year. The **rate of natural increase** = (CBR − CDR) ÷ 10, giving a percentage. For example, a CBR of 30 and a CDR of 10 gives (30 − 10) ÷ 10 = 2% natural increase per year.\n\nThe balance between the components is very different from place to place:\n\n- In **Niger**, the CBR is above 40 per 1,000 — natural increase drives very fast growth.\n- In **Japan**, deaths have outnumbered births every year since 2007, so the population is shrinking.\n- In **Germany** and **Singapore**, natural change is very low (or negative), but **immigration** keeps the population growing.\n\nSo to explain why a population is changing, you must ask: *which component is doing most of the work?*",
      diagram: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Population drawn as a water tank: births and immigrants flow in, deaths and emigrants flow out"><defs><marker id="components-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs><text x="160" y="16" font-size="12" text-anchor="middle" fill="#0f172a" font-weight="bold">Change = (B − D) + (I − E)</text><rect x="105" y="55" width="110" height="90" rx="6" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/><rect x="107" y="92" width="106" height="51" fill="#7dd3fc"/><text x="160" y="122" font-size="12" text-anchor="middle" fill="#0c4a6e" font-weight="bold">POPULATION</text><text x="40" y="38" font-size="11" text-anchor="middle" fill="#166534">Births (B)</text><line x1="45" y1="44" x2="108" y2="68" stroke="#334155" stroke-width="2" marker-end="url(#components-ah)"/><text x="280" y="38" font-size="11" text-anchor="middle" fill="#166534">Immigrants (I)</text><line x1="275" y1="44" x2="212" y2="68" stroke="#334155" stroke-width="2" marker-end="url(#components-ah)"/><line x1="108" y1="135" x2="52" y2="158" stroke="#334155" stroke-width="2" marker-end="url(#components-ah)"/><text x="40" y="172" font-size="11" text-anchor="middle" fill="#991b1b">Deaths (D)</text><line x1="212" y1="135" x2="268" y2="158" stroke="#334155" stroke-width="2" marker-end="url(#components-ah)"/><text x="280" y="172" font-size="11" text-anchor="middle" fill="#991b1b">Emigrants (E)</text></svg>`,
      diagramCaption:
        "Think of a population as a tank of water: births and immigrants are the taps filling it; deaths and emigrants are the drains emptying it.",
      keyPoints: [
        "Population change = (births − deaths) + (immigrants − emigrants).",
        "Natural increase means more births than deaths; natural decrease means more deaths than births.",
        "Rate of natural increase (%) = (CBR − CDR) ÷ 10.",
        "A country can have natural decrease and still grow if net migration is large enough.",
      ],
      thinkDeeper:
        "Japan and Germany both have more deaths than births. Germany's population has grown to about 84 million while Japan's has fallen. Using the formula, what must be different about the two countries — and why might Japan have chosen a different path?",
      discovery: {
        problem:
          "Singapore's women have on average fewer than one baby each (a total fertility rate of about 0.97 in 2023 and 2024) — well below the 2.1 needed to replace each generation. Yet Singapore's total population grew to over 6 million. How can both of these facts be true?",
        idea:
          "Births and deaths are only two of the three components. Migration is the third: large numbers of people moving into Singapore can outweigh very low natural increase.",
      },
      caseStudy: {
        place: "Japan — a country of natural decrease",
        facts: [
          "In 2024 Japan recorded only about 0.69 million births of Japanese nationals but about 1.6 million deaths.",
          "That is a natural decrease of roughly 900,000 people in a single year.",
          "Japan's total population peaked at about 128 million around 2008 and has been falling since.",
          "About 29% of Japanese people are aged 65 or over — one of the oldest populations in the world.",
          "Japan has traditionally allowed little immigration, although numbers of foreign workers have risen in recent years.",
        ],
      },
      skill: "Calculating natural increase and population change",
    },
    {
      id: "migration-types",
      heading: "Types of migration",
      body:
        "**Migration** is the movement of people from one place to another to live, either permanently or for a long period (international statistics usually count a move of at least a year). A **migrant** is the person who moves. Short trips such as holidays or commuting are *not* migration.\n\nGeographers classify migration in several ways:\n\n- **Internal migration** — moving within the same country (for example from rural Sichuan to the city of Shenzhen in China).\n- **International migration** — moving from one country to another, crossing a national border (for example from the Philippines to Singapore).\n- **Voluntary migration** — the person *chooses* to move, usually for a better job, education or family reasons.\n- **Forced migration** — the person has little or no choice because of war, persecution or disaster.\n- **Rural–urban migration** — moving from the countryside to towns and cities. This is the main reason cities in Asia and Africa are growing so fast. The reverse, moving from cities to the countryside, is called **counter-urbanisation**.\n- **Temporary or seasonal migration** — moving for a fixed time, such as fruit pickers who return home after harvest, or workers on two-year contracts.\n\nSome special types of migrant have precise meanings:\n\n- An **economic migrant** moves voluntarily to find work or better pay.\n- A **refugee** is someone forced to flee their country because of persecution, war or violence, who has crossed an international border. The **1951 Refugee Convention** protects people with a well-founded fear of persecution and says refugees must not be sent back to danger (UNHCR also protects people fleeing war and violence).\n- An **asylum seeker** has fled to another country and *applied* for protection as a refugee, but is still waiting for a decision.\n- An **internally displaced person (IDP)** has been forced from home but has *not* crossed an international border.\n\nAround 300 million people (about 3.7% of the world's population) are international migrants, and the UN refugee agency (UNHCR) counts well over 100 million people forcibly displaced worldwide — the majority of them displaced inside their own country.",
      diagram: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of migration: by distance into internal and international, and by choice into voluntary and forced"><rect x="115" y="6" width="90" height="26" rx="6" fill="#fef3c7" stroke="#b45309"/><text x="160" y="23" font-size="12" text-anchor="middle" fill="#78350f" font-weight="bold">Migration</text><line x1="140" y1="32" x2="80" y2="52" stroke="#475569" stroke-width="1.5"/><line x1="180" y1="32" x2="240" y2="52" stroke="#475569" stroke-width="1.5"/><text x="80" y="64" font-size="11" text-anchor="middle" fill="#334155" font-weight="bold">By distance</text><text x="240" y="64" font-size="11" text-anchor="middle" fill="#334155" font-weight="bold">By choice</text><rect x="10" y="74" width="66" height="24" rx="4" fill="#dbeafe" stroke="#1d4ed8"/><text x="43" y="90" font-size="10" text-anchor="middle" fill="#1e3a8a">Internal</text><rect x="84" y="74" width="72" height="24" rx="4" fill="#dbeafe" stroke="#1d4ed8"/><text x="120" y="90" font-size="10" text-anchor="middle" fill="#1e3a8a">International</text><rect x="168" y="74" width="68" height="24" rx="4" fill="#dcfce7" stroke="#15803d"/><text x="202" y="90" font-size="10" text-anchor="middle" fill="#14532d">Voluntary</text><rect x="244" y="74" width="66" height="24" rx="4" fill="#fee2e2" stroke="#b91c1c"/><text x="277" y="90" font-size="10" text-anchor="middle" fill="#7f1d1d">Forced</text><text x="43" y="114" font-size="10" text-anchor="middle" fill="#334155">rural–urban</text><text x="43" y="128" font-size="10" text-anchor="middle" fill="#334155">IDPs</text><text x="120" y="114" font-size="10" text-anchor="middle" fill="#334155">refugees</text><text x="120" y="128" font-size="10" text-anchor="middle" fill="#334155">asylum seekers</text><text x="202" y="114" font-size="10" text-anchor="middle" fill="#334155">economic</text><text x="202" y="128" font-size="10" text-anchor="middle" fill="#334155">migrants</text><text x="277" y="114" font-size="10" text-anchor="middle" fill="#334155">war, persecution,</text><text x="277" y="128" font-size="10" text-anchor="middle" fill="#334155">disaster</text><text x="160" y="164" font-size="10" text-anchor="middle" fill="#475569">Every move can be classified BOTH ways,</text><text x="160" y="177" font-size="10" text-anchor="middle" fill="#475569">e.g. a Syrian refugee = international + forced</text></svg>`,
      diagramCaption:
        "Migration can be classified by distance (internal or international) and by choice (voluntary or forced). Every migrant fits somewhere in both.",
      keyPoints: [
        "Internal migration stays inside one country; international migration crosses a border.",
        "Voluntary migrants choose to move; forced migrants have little or no choice.",
        "A refugee has fled persecution or war across a border; an asylum seeker is still waiting for that status to be decided.",
        "Rural–urban migration is the biggest migration flow on Earth, especially in Asia and Africa.",
      ],
      thinkDeeper:
        "A farmer in Bangladesh leaves her village after her fields are repeatedly flooded with salt water and moves to Dhaka. Is she a voluntary or a forced migrant? Is the line between the two always clear?",
      discovery: {
        problem:
          "Every year, around Chinese New Year, hundreds of millions of journeys are made across China as workers travel home from the cities to their villages — the world's largest annual human movement. Why are so many Chinese workers living so far from their home villages in the first place?",
        idea:
          "This reveals internal rural–urban migration: workers moved from poorer rural provinces to booming coastal cities for factory and construction jobs. Because this migration is often temporary, many return home every year.",
      },
      caseStudy: {
        place: "China — internal rural–urban migration",
        facts: [
          "China has nearly 300 million rural migrant workers — more people than the whole population of Indonesia.",
          "Most moved from inland provinces such as Sichuan, Henan and Anhui to coastal cities like Shenzhen, Guangzhou and Shanghai.",
          "Shenzhen grew from a town of about 30,000 people in 1979 to a city of over 17 million.",
          "The hukou (household registration) system has often limited migrants' access to city schools and healthcare.",
          "The Spring Festival travel rush (chunyun) involves billions of passenger trips over about 40 days.",
        ],
      },
      skill: "Classifying migrants using precise definitions",
    },
    {
      id: "push-pull",
      heading: "Push and pull factors and Lee's model",
      body:
        "Why do people move? Geographers explain migration using **push factors** and **pull factors**.\n\n- **Push factors** are the negative things about the place a person lives that encourage them to leave (for example unemployment, low wages, war, drought, persecution, poor schools).\n- **Pull factors** are the positive things about another place that attract people to it (for example jobs, higher wages, safety, good healthcare, family already living there, better education).\n\nIt helps to sort factors into four groups: **economic** (jobs, wages), **social** (family, education, healthcare), **political** (war, persecution, freedom, immigration rules) and **environmental** (drought, floods, climate, natural hazards).\n\nIn 1966 the American geographer **Everett Lee** produced a more careful model. **Lee's model of migration** says:\n\n- Both the **origin** (where you live now) and the **destination** have positive (+), negative (−) and neutral (0) factors. Every place has good and bad points — even the place you leave.\n- Between the two places lie **intervening obstacles**: things that make the move difficult, such as distance, the cost of travel, immigration laws and visas, borders and walls, physical barriers (seas, deserts, mountains) and language.\n- **Personal factors** decide how each individual weighs all of this up — their age, family, skills, personality, health and how much they know about the destination.\n\nLee's model explains why two neighbours facing the same push factors may make different choices: one leaves and one stays. It also explains why most migrants move only a short distance — the obstacles are smaller.\n\n**Intervening opportunities** can matter too: a migrant heading for one city may find work in a nearer one and stop there instead.",
      diagram: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lee's model of migration: origin and destination each with plus, minus and neutral factors, separated by intervening obstacles"><defs><marker id="push-pull-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e3a8a"/></marker></defs><ellipse cx="62" cy="88" rx="54" ry="52" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/><text x="62" y="30" font-size="11" text-anchor="middle" fill="#7f1d1d" font-weight="bold">ORIGIN</text><text x="40" y="68" font-size="14" fill="#7f1d1d">− −</text><text x="70" y="92" font-size="14" fill="#7f1d1d">+</text><text x="34" y="114" font-size="14" fill="#7f1d1d">0 −</text><ellipse cx="258" cy="88" rx="54" ry="52" fill="#dcfce7" stroke="#15803d" stroke-width="2"/><text x="258" y="30" font-size="11" text-anchor="middle" fill="#14532d" font-weight="bold">DESTINATION</text><text x="236" y="68" font-size="14" fill="#14532d">+ +</text><text x="270" y="92" font-size="14" fill="#14532d">−</text><text x="232" y="114" font-size="14" fill="#14532d">+ 0</text><rect x="138" y="52" width="8" height="72" fill="#94a3b8"/><rect x="156" y="52" width="8" height="72" fill="#94a3b8"/><rect x="174" y="52" width="8" height="72" fill="#94a3b8"/><line x1="112" y1="88" x2="208" y2="88" stroke="#1e3a8a" stroke-width="2.5" marker-end="url(#push-pull-ah)"/><text x="160" y="140" font-size="10" text-anchor="middle" fill="#334155">Intervening obstacles</text><text x="160" y="152" font-size="10" text-anchor="middle" fill="#334155">(distance, cost, visas, borders)</text><text x="160" y="172" font-size="10" text-anchor="middle" fill="#7c2d12" font-weight="bold">+ Personal factors decide each person's choice</text></svg>`,
      diagramCaption:
        "Lee's model (1966): both places have positive (+), negative (−) and neutral (0) factors; intervening obstacles stand between them; personal factors decide whether an individual actually moves.",
      keyPoints: [
        "Push factors drive people away from the origin; pull factors attract them to the destination.",
        "Group factors as economic, social, political and environmental.",
        "Lee's model adds intervening obstacles (distance, cost, laws, borders) and personal factors (age, family, skills).",
        "Migration usually happens when the pulls and pushes outweigh the obstacles for that particular person.",
      ],
      thinkDeeper:
        "Cheap flights, smartphones and video calls have changed migration. Which parts of Lee's model have they changed most — the obstacles, the pull factors, or the personal factors? Explain.",
      discovery: {
        problem:
          "Two brothers grow up in the same village in Bangladesh, where farm wages are low. One moves to Singapore to work in construction; the other stays and runs the family's shop. If push and pull factors were the whole story, both would have left. What else must be going on?",
        idea:
          "Lee's model: migration also depends on intervening obstacles (such as agent fees and the cost of a work permit) and personal factors (age, family responsibilities, attitude to risk). The same pushes and pulls do not affect everyone in the same way.",
      },
      skill: "Applying a model (Lee's model) to a real migration",
    },
    {
      id: "impacts",
      heading: "Impacts on source and host areas",
      body:
        "Migration affects three groups: the **source area** (the place migrants leave, also called the origin), the **host area** (the place they move to, also called the destination) and the migrants themselves. Impacts can be **positive or negative** and **economic, social or environmental**.\n\n**Impacts on the source area**\n\n- **Remittances** (+): money that migrants send back home to their families. In 2024 remittances to low- and middle-income countries reached about **US$685 billion** — more than all overseas aid. India received about US$129 billion, the most of any country. In Nepal remittances are about a quarter of the whole economy, and in Tonga and Tajikistan even more. Families spend the money on food, housing, school fees and businesses.\n- **Brain drain** (−): when educated and skilled people (such as doctors, nurses and engineers) emigrate, the source country loses their skills and the money spent training them. For example, many nurses trained in Zimbabwe and the Philippines now work in the UK.\n- **Ageing and imbalance** (−): migrants are usually young adults, so the people left behind are often older people and children. This raises the **dependency ratio** and can leave villages with too few workers. Where mostly men migrate, there can be a gender imbalance.\n- **Less pressure** (+): emigration can reduce unemployment and pressure on land, housing and services.\n- **Returning migrants** (+) bring back money, new skills and ideas (sometimes called **brain gain**).\n\n**Impacts on the host area**\n\n- **Labour supply** (+): migrants fill job shortages, often in construction, cleaning, farming, care work and healthcare, as well as in highly skilled jobs such as finance and technology.\n- Migrants pay **taxes** and, because most are of working age, they help to support an **ageing population**.\n- **Cultural diversity** (+): new foods, languages, festivals and businesses.\n- **Pressure on services** (−): more demand for housing, schools, healthcare and transport, especially if many arrive quickly.\n- Possible **competition for low-paid jobs** and downward pressure on wages (−), though economists disagree about how large this effect is.\n- **Tension and discrimination** (−) if integration is poor, and the risk that migrant workers are **exploited** (low pay, poor housing, long hours).\n\nGood answers always say *who* is affected, *where*, and whether the impact is short-term or long-term.",
      diagram: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flows between a source area and a host area: people move to the host, remittances flow back"><defs><marker id="impacts-ah1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e3a8a"/></marker><marker id="impacts-ah2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803d"/></marker></defs><rect x="6" y="20" width="110" height="150" rx="8" fill="#fef3c7" stroke="#b45309"/><text x="61" y="38" font-size="12" text-anchor="middle" fill="#78350f" font-weight="bold">SOURCE AREA</text><text x="14" y="62" font-size="10" fill="#166534">+ remittances</text><text x="14" y="78" font-size="10" fill="#166534">+ less unemployment</text><text x="14" y="94" font-size="10" fill="#166534">+ returners' skills</text><text x="14" y="118" font-size="10" fill="#991b1b">− brain drain</text><text x="14" y="134" font-size="10" fill="#991b1b">− ageing villages</text><text x="14" y="150" font-size="10" fill="#991b1b">− families split</text><rect x="204" y="20" width="110" height="150" rx="8" fill="#e0f2fe" stroke="#0369a1"/><text x="259" y="38" font-size="12" text-anchor="middle" fill="#0c4a6e" font-weight="bold">HOST AREA</text><text x="212" y="62" font-size="10" fill="#166534">+ fills job gaps</text><text x="212" y="78" font-size="10" fill="#166534">+ taxes paid</text><text x="212" y="94" font-size="10" fill="#166534">+ diversity</text><text x="212" y="118" font-size="10" fill="#991b1b">− pressure on</text><text x="212" y="132" font-size="10" fill="#991b1b">  housing, services</text><text x="212" y="150" font-size="10" fill="#991b1b">− tension</text><line x1="120" y1="70" x2="198" y2="70" stroke="#1e3a8a" stroke-width="3" marker-end="url(#impacts-ah1)"/><text x="160" y="62" font-size="10" text-anchor="middle" fill="#1e3a8a">migrants</text><line x1="198" y1="125" x2="120" y2="125" stroke="#15803d" stroke-width="3" marker-end="url(#impacts-ah2)"/><text x="160" y="142" font-size="10" text-anchor="middle" fill="#15803d">remittances</text></svg>`,
      diagramCaption:
        "People flow from the source area to the host area; money (remittances) flows back. Both places gain and lose.",
      keyPoints: [
        "Remittances are money sent home by migrants — worth about US$685 billion a year to poorer countries.",
        "Brain drain is the loss of skilled, educated people from the source area.",
        "Source areas can be left with ageing populations because young adults leave.",
        "Host areas gain workers and taxes but may face pressure on housing and services.",
      ],
      thinkDeeper:
        "Remittances help families in the source area, but some economists warn they can create dependency. Can a country become too reliant on its emigrants? What would happen to Nepal if remittances suddenly stopped?",
      discovery: {
        problem:
          "On a Sunday at Lucky Plaza on Orchard Road, long queues form outside small shops with signs offering to send money to the Philippines. Why are these shops so busy on Sundays — and what difference might the money make thousands of kilometres away?",
        idea:
          "Sunday is the day off for many migrant domestic workers. They send remittances home to their families — one of the biggest positive impacts of migration on a source country.",
      },
      skill: "Organising impacts in a table (positive/negative × economic/social/environmental)",
    },
    {
      id: "singapore",
      heading: "Case study: Singapore's foreign workforce and immigration",
      body:
        "Singapore is one of the world's most important **immigrant** countries. Of its total population of about **6 million** (2024), about **3.6 million are citizens**, about **0.5 million are permanent residents (PRs)** and about **1.9 million are non-residents** — people living here on work passes, student passes or as dependants. That means almost **one in three people** in Singapore is a non-resident.\n\n**Why does Singapore attract so many migrants? (pull factors)**\n\n- Jobs and much higher wages than in nearby countries — a construction worker can earn several times what he could earn at home in Bangladesh or India.\n- A strong economy as a global hub for finance, shipping, technology and aviation.\n- Safety, low crime, good infrastructure, healthcare and education.\n- English is widely spoken, and Singapore is close to many source countries.\n\n**Why does Singapore need migrants?**\n\n- Very low fertility: the resident **total fertility rate (TFR)** — the average number of children per woman — was about **0.97** in 2023 and 2024, far below the **replacement level of 2.1**.\n- An **ageing population**: by 2030 about one in four citizens will be 65 or over.\n- Many Singaporeans prefer not to work in physically demanding jobs such as construction, shipyards and cleaning.\n\n**How is migration controlled?** The Ministry of Manpower issues different **work passes**:\n\n- **Employment Pass (EP)** for professionals and managers (minimum salary S$5,600 a month from 2025, assessed with the COMPASS points system).\n- **S Pass** for mid-skilled workers such as technicians.\n- **Work Permit** for lower-wage workers in construction, manufacturing, shipyards, services and domestic work. Employers pay a monthly **levy** and must stay within **quotas** (the dependency ratio ceiling).\n\nAbout **1.5 million foreign workers** make up more than a third of the workforce, including roughly **300,000 migrant domestic workers**, mainly from Indonesia, the Philippines and Myanmar.\n\n**Impacts**\n\n- (+) Migrants built much of Singapore's HDB estates, MRT lines and Changi Airport, care for elderly people and children, and allow more Singaporean women to work.\n- (+) Skilled immigrants bring expertise and investment.\n- (−) Concerns about crowding, housing costs and competition for professional jobs; the 2013 **Population White Paper** (which projected 6.5–6.9 million people by 2030) led to public protest.\n- (−) Welfare of lower-paid workers: in 2020 COVID-19 spread rapidly through crowded **dormitories**, leading to new standards for dorm housing.",
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar showing Singapore's 2024 population of about 6 million split into citizens 60 percent, permanent residents 9 percent and non-residents 31 percent"><text x="160" y="18" font-size="12" text-anchor="middle" fill="#0f172a" font-weight="bold">Singapore's population, 2024 (about 6.0 million)</text><rect x="10" y="40" width="180" height="40" fill="#ef4444"/><rect x="190" y="40" width="27" height="40" fill="#f59e0b"/><rect x="217" y="40" width="93" height="40" fill="#3b82f6"/><text x="100" y="65" font-size="12" text-anchor="middle" fill="#ffffff" font-weight="bold">Citizens ~60%</text><text x="263" y="65" font-size="11" text-anchor="middle" fill="#ffffff" font-weight="bold">Non-res ~31%</text><line x1="203" y1="80" x2="203" y2="96" stroke="#92400e"/><text x="203" y="108" font-size="10" text-anchor="middle" fill="#92400e">PRs ~9%</text><text x="100" y="98" font-size="10" text-anchor="middle" fill="#334155">~3.6 million</text><text x="263" y="98" font-size="10" text-anchor="middle" fill="#334155">~1.9 million</text><text x="10" y="132" font-size="10" fill="#334155">Non-residents include ~1.5 million foreign workers:</text><text x="10" y="148" font-size="10" fill="#334155">Employment Pass, S Pass, Work Permit holders</text><text x="10" y="164" font-size="10" fill="#334155">and ~300,000 migrant domestic workers.</text></svg>`,
      diagramCaption:
        "Roughly three in ten people living in Singapore are non-residents — most of them foreign workers on work passes.",
      keyPoints: [
        "Singapore's resident TFR (about 0.97) is far below replacement level (2.1), so migration keeps the population and workforce growing.",
        "About 1.9 million of Singapore's roughly 6 million people are non-residents.",
        "Work passes (EP, S Pass, Work Permit), levies and quotas let the government control who comes.",
        "Benefits: labour for construction, care and the economy. Challenges: crowding, housing, worker welfare.",
      ],
      thinkDeeper:
        "Singapore controls immigration very tightly with work passes, levies and quotas. Compared with a country that has long land borders, such as the USA, which intervening obstacles does Singapore's geography give the government more control over?",
      discovery: {
        problem:
          "Look around any HDB construction site, a hawker centre's cleaning team or a Changi Airport building project. Who is doing the work — and why might a country with a TFR below 1 need them?",
        idea:
          "Singapore's low birth rate and ageing population mean it does not have enough young workers of its own, so it relies on a large foreign workforce, managed through work passes.",
      },
      caseStudy: {
        place: "Singapore — managed immigration",
        facts: [
          "Total population about 6.0 million (June 2024): about 3.6 million citizens, 0.5 million PRs and 1.9 million non-residents.",
          "Resident total fertility rate about 0.97 in 2023 and 2024 — one of the lowest in the world.",
          "About 1.5 million foreign workers, including around 300,000 migrant domestic workers.",
          "Employment Pass minimum qualifying salary rose to S$5,600 a month in January 2025.",
          "The 2013 Population White Paper projected 6.5–6.9 million people by 2030 and sparked a rare public protest at Hong Lim Park.",
          "In 2020 most of Singapore's COVID-19 cases were among migrant workers living in dormitories.",
        ],
      },
      skill: "Calculating percentages from population data",
    },
    {
      id: "syria",
      heading: "Case study: Syrian refugees — forced international migration",
      body:
        "The **Syrian civil war**, which began in **2011** after anti-government protests were violently put down, caused the largest refugee crisis of the early 21st century.\n\nBefore the war Syria had about **21–22 million** people. At the peak, more than **half** had been forced from their homes: around **6–7 million** became **internally displaced persons** inside Syria and over **6 million** fled abroad as **refugees**.\n\n**Push factors** were overwhelmingly political and violent: bombing of cities such as Aleppo and Homs, persecution, forced military service, and the collapse of hospitals, schools, electricity and jobs. Some researchers also point to a severe **drought (2006–2010)** that had already pushed farmers into cities, although how much it contributed is debated.\n\n**Where did they go?** Most refugees stayed in **neighbouring countries** — close by, reachable over land, and hoping to return:\n\n- **Turkey** hosted about **3.6 million** at the peak, the largest refugee population in the world.\n- **Lebanon** took in about **1.5 million** (government estimate) — roughly one person in every four or five living in Lebanon.\n- **Jordan** registered about **650,000**; the **Zaatari camp**, opened in 2012, housed over 100,000 people at its 2013 peak (about 80,000 in later years) and became one of Jordan's largest settlements.\n- In **2015** alone, over a million asylum seekers and migrants reached Europe by sea — about half of them Syrians — many crossing the Aegean Sea to Greece and walking the **Balkan route**; **Germany** received the most, and over 900,000 Syrians now live there.\n\n**Intervening obstacles** were dangerous: dangerous sea crossings in overcrowded boats, smugglers' fees, closed borders and fences, and the **EU–Turkey deal (2016)**, which aimed to stop boats reaching Greece.\n\n**Impacts on host countries:** pressure on water, housing, schools (Lebanese schools ran double shifts), healthcare and jobs; rents rose; tensions grew. But refugees also brought skills, opened businesses, and in Germany helped fill labour shortages — thousands of Syrian doctors work in German hospitals.\n\n**Impacts on Syria:** loss of young people and skilled workers (brain drain), destroyed families and communities, and a much smaller workforce for rebuilding.\n\nIn **December 2024** the Assad government fell. Since then large numbers of refugees and displaced people have begun to return — UNHCR estimated over a million refugees had gone back by late 2025 — but many homes are destroyed and millions remain abroad.",
      diagram: `<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map showing refugees moving from Syria to Turkey, Lebanon, Jordan, Iraq and Europe"><defs><marker id="syria-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b91c1c"/></marker></defs><rect x="0" y="0" width="320" height="190" fill="#f8fafc"/><polygon points="130,80 210,72 222,110 180,140 132,128" fill="#fde68a" stroke="#92400e" stroke-width="1.5"/><text x="176" y="108" font-size="12" text-anchor="middle" fill="#78350f" font-weight="bold">SYRIA</text><rect x="110" y="16" width="130" height="30" rx="4" fill="#e2e8f0" stroke="#64748b"/><text x="175" y="35" font-size="11" text-anchor="middle" fill="#0f172a">TURKEY ~3.6m (peak)</text><line x1="175" y1="76" x2="175" y2="50" stroke="#b91c1c" stroke-width="2.5" marker-end="url(#syria-ah)"/><rect x="8" y="104" width="86" height="26" rx="4" fill="#e2e8f0" stroke="#64748b"/><text x="51" y="121" font-size="10" text-anchor="middle" fill="#0f172a">LEBANON ~1.5m</text><line x1="132" y1="110" x2="98" y2="116" stroke="#b91c1c" stroke-width="2.5" marker-end="url(#syria-ah)"/><rect x="110" y="156" width="110" height="26" rx="4" fill="#e2e8f0" stroke="#64748b"/><text x="165" y="173" font-size="10" text-anchor="middle" fill="#0f172a">JORDAN ~0.65m reg.</text><line x1="160" y1="136" x2="162" y2="152" stroke="#b91c1c" stroke-width="2.5" marker-end="url(#syria-ah)"/><rect x="238" y="118" width="74" height="26" rx="4" fill="#e2e8f0" stroke="#64748b"/><text x="275" y="135" font-size="10" text-anchor="middle" fill="#0f172a">IRAQ ~0.25m</text><line x1="218" y1="114" x2="236" y2="124" stroke="#b91c1c" stroke-width="2.5" marker-end="url(#syria-ah)"/><rect x="8" y="16" width="86" height="40" rx="4" fill="#e2e8f0" stroke="#64748b"/><text x="51" y="32" font-size="10" text-anchor="middle" fill="#0f172a">EUROPE</text><text x="51" y="47" font-size="10" text-anchor="middle" fill="#0f172a">(Germany ~0.9m)</text><path d="M135,82 Q110,70 98,52" fill="none" stroke="#b91c1c" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#syria-ah)"/><text x="292" y="22" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">N</text><line x1="292" y1="52" x2="292" y2="28" stroke="#0f172a" stroke-width="2" marker-end="url(#syria-ah)"/><text x="276" y="72" font-size="10" fill="#475569">Not to scale</text></svg>`,
      diagramCaption:
        "Sketch map (not to scale) of the main destinations of Syrian refugees. Most stayed in neighbouring countries; a smaller share travelled on to Europe.",
      keyPoints: [
        "The Syrian civil war from 2011 forced over half of Syria's pre-war population of about 21–22 million from their homes.",
        "Most refugees stayed in neighbouring Turkey, Lebanon and Jordan; Turkey hosted about 3.6 million at the peak.",
        "Push factors were mainly political and violent; intervening obstacles included sea crossings, smugglers and closed borders.",
        "Host countries faced pressure on services but also gained workers and skills.",
      ],
      thinkDeeper:
        "Most Syrian refugees went to Turkey, Lebanon and Jordan, not to richer countries like Germany. Use Lee's model to explain why distance and intervening obstacles mattered more than wealth for most families fleeing war.",
      discovery: {
        problem:
          "Lebanon is a small country of about 5–6 million people. During the Syrian war, about 1.5 million Syrians lived there. Imagine Singapore suddenly receiving 1.5 million extra people in a few years. What would happen to schools, hospitals, water supplies and rents?",
        idea:
          "Forced migration happens suddenly and unplanned, so the impacts on host areas — especially poorer neighbouring countries — can be very large compared with planned economic migration.",
      },
      caseStudy: {
        place: "Syria — refugee crisis (2011 onwards)",
        facts: [
          "The civil war began in 2011; Syria's pre-war population was about 21–22 million.",
          "At the peak, over 6 million Syrians were refugees abroad and 6–7 million were internally displaced.",
          "Turkey hosted about 3.6 million Syrian refugees at the peak — the largest refugee population in any country.",
          "Lebanon hosted about 1.5 million Syrians — roughly 1 in 4 or 5 of its population.",
          "Jordan's Zaatari camp opened in 2012; it held over 100,000 people at its 2013 peak and about 80,000 in later years.",
          "The Assad government fell in December 2024; over a million refugees had returned by late 2025 (UNHCR estimate).",
        ],
      },
      skill: "Drawing and annotating a sketch map of migration flows",
    },
    {
      id: "economic-migration",
      heading: "Case studies: economic migration — Mexico to the USA, Poland to the UK",
      body:
        "Most international migrants are **economic migrants**: they move voluntarily to find work and higher wages. Two classic examples show how **push and pull factors change over time**.\n\n**Mexico → USA**\n\nThe USA and Mexico share a land border of about **3,100 km**, one of the most crossed borders in the world. About **10–11 million Mexican-born people** live in the USA — the largest immigrant group there.\n\n- **Push factors (Mexico):** lower wages, unemployment and poverty in rural states such as Michoacán, Oaxaca and Zacatecas; violence linked to drug cartels.\n- **Pull factors (USA):** wages several times higher, jobs in farming (e.g. California's fruit and vegetables), construction, food processing and services; family and community networks already in cities like Los Angeles, Chicago and Houston.\n- **Intervening obstacles:** the border wall and fencing, US Border Patrol, the Sonoran Desert and Rio Grande river, and the high fees charged by smugglers. Hundreds of migrants die trying to cross each year.\n- **Impacts on Mexico:** remittances reached a record of about **US$65 billion in 2024** — about 3.5% of Mexico's economy — but some villages lost most of their young men.\n- **Impacts on the USA:** essential labour for agriculture and construction; political arguments about undocumented migration and border security.\n- **Change over time:** between about 2009 and 2014 more Mexicans left the USA than arrived, because Mexico's birth rate had fallen (fewer young people) and its economy improved, while US jobs were lost after the 2008 financial crisis. Today many people crossing the border come from Central America and further away, using Mexico as a **transit** country.\n\n**Poland → UK**\n\n- On **1 May 2004 Poland joined the European Union**. The UK was one of only three EU countries (with Ireland and Sweden) to let workers from the new members work immediately.\n- **Push factors (Poland):** unemployment of about **19%** in 2004 and much lower wages.\n- **Pull factors (UK):** jobs in construction, farming, food processing, hospitality and care; wages several times higher; cheap flights; English as a widely learned language.\n- The Poland-born population of the UK rose from under **100,000** in 2001 to a peak of roughly **0.9–1 million** around 2016–17. Polish became the most common non-English main language in England.\n- **Impacts on Poland:** remittances, but also labour shortages and brain drain of young workers; many returned with new skills and savings.\n- **Impacts on the UK:** workers filled gaps and paid taxes; some local pressure on schools and housing.\n- **Change over time:** Poland's economy grew strongly (it avoided recession in 2008–09) and wages rose; after the **Brexit** vote (2016) and the end of free movement (**31 December 2020**), many Poles returned. The 2021 census counted about **740,000** Poland-born people in England and Wales. Poland itself is now a *host* country, taking in over a million Ukrainians after 2022.",
      diagram: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagrams: Mexico to USA with remittances flowing back, and Poland to UK after 2004"><defs><marker id="econ-ah1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e3a8a"/></marker><marker id="econ-ah2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803d"/></marker></defs><rect x="10" y="14" width="90" height="34" rx="5" fill="#dcfce7" stroke="#15803d"/><text x="55" y="35" font-size="12" text-anchor="middle" fill="#14532d" font-weight="bold">MEXICO</text><rect x="220" y="14" width="90" height="34" rx="5" fill="#dbeafe" stroke="#1d4ed8"/><text x="265" y="35" font-size="12" text-anchor="middle" fill="#1e3a8a" font-weight="bold">USA</text><line x1="104" y1="24" x2="214" y2="24" stroke="#1e3a8a" stroke-width="2.5" marker-end="url(#econ-ah1)"/><text x="160" y="18" font-size="10" text-anchor="middle" fill="#1e3a8a">workers (~10–11m live in USA)</text><line x1="214" y1="42" x2="104" y2="42" stroke="#15803d" stroke-width="2.5" marker-end="url(#econ-ah2)"/><text x="160" y="58" font-size="10" text-anchor="middle" fill="#15803d">remittances ~US$65bn (2024)</text><rect x="10" y="104" width="90" height="34" rx="5" fill="#fee2e2" stroke="#b91c1c"/><text x="55" y="125" font-size="12" text-anchor="middle" fill="#7f1d1d" font-weight="bold">POLAND</text><rect x="220" y="104" width="90" height="34" rx="5" fill="#e0e7ff" stroke="#4338ca"/><text x="265" y="125" font-size="12" text-anchor="middle" fill="#312e81" font-weight="bold">UK</text><line x1="104" y1="114" x2="214" y2="114" stroke="#1e3a8a" stroke-width="2.5" marker-end="url(#econ-ah1)"/><text x="160" y="108" font-size="10" text-anchor="middle" fill="#1e3a8a">after EU entry 2004</text><line x1="214" y1="132" x2="104" y2="132" stroke="#15803d" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#econ-ah2)"/><text x="160" y="150" font-size="10" text-anchor="middle" fill="#15803d">return migration after Brexit</text><text x="160" y="172" font-size="10" text-anchor="middle" fill="#475569">Both flows changed as push and pull factors changed</text></svg>`,
      diagramCaption:
        "Two economic migration corridors. In both, migration rose and later slowed or reversed as push and pull factors changed.",
      keyPoints: [
        "Economic migrants move voluntarily for work and higher wages.",
        "Mexico receives about US$65 billion a year in remittances (2024), mainly from the USA.",
        "Poland's entry to the EU in 2004 removed an intervening obstacle and triggered large migration to the UK.",
        "Migration flows change over time: falling birth rates, economic growth at home and new laws (Brexit, border controls) can slow or reverse them.",
      ],
      thinkDeeper:
        "In 2004 Poland joining the EU removed a legal obstacle; in 2020 the end of free movement put one back. Which do you think did more to change the number of Poles in the UK — the laws or the changing wage gap between the two countries? How could you test your idea with data?",
      discovery: {
        problem:
          "Between 2009 and 2014, more Mexicans moved from the USA back to Mexico than moved the other way — even though US wages were still much higher. What could have changed in Mexico and the USA to cause this?",
        idea:
          "Push and pull factors are not fixed. Fewer young Mexicans (falling birth rates), a stronger Mexican economy, fewer US jobs after the 2008 crisis and tougher border enforcement together reduced migration.",
      },
      caseStudy: {
        place: "Mexico → USA and Poland → UK",
        facts: [
          "About 10–11 million Mexican-born people live in the USA, its largest immigrant group.",
          "Remittances to Mexico reached a record of about US$65 billion in 2024 (about 3.5% of GDP).",
          "From about 2009 to 2014, net migration from Mexico to the USA was roughly zero or negative.",
          "Poland joined the EU on 1 May 2004, when Polish unemployment was about 19%.",
          "The Poland-born population of the UK peaked at roughly 0.9–1 million around 2016–17.",
          "Free movement between the UK and EU ended on 31 December 2020; the 2021 census counted about 740,000 Poland-born residents in England and Wales.",
        ],
      },
      skill: "Comparing two case studies",
    },
    {
      id: "significance",
      heading: "How significant are the factors? Ranking and evaluating",
      body:
        "The big enquiry question asks not only *how* and *why* populations change, but **how significant** the factors are. **Significance** means how much difference a factor makes. To answer well you must **compare** factors and **justify** a judgement.\n\n**1. Which component matters most for a country?**\n\nCompare natural change with net migration:\n\n- In **Niger**, natural increase is huge and migration is small — births are the most significant factor.\n- In **Singapore**, **Germany** and the **UK**, natural change is small, so **immigration** is the most significant factor in recent growth.\n- In **Japan**, deaths outnumber births and immigration is small — natural decrease is most significant.\n- In parts of **Eastern Europe** (e.g. Bulgaria, Latvia), emigration *and* natural decrease both shrink the population.\n\n**2. Which push/pull factors matter most for a migrant?**\n\nA **diamond ranking** is a useful thinking tool. Write nine factors on cards and arrange them in a diamond: 1 most significant card at the top, then 2, then 3 in the middle, then 2, and 1 least significant card at the bottom. The arrangement forces you to compare and decide.\n\nThe ranking is never the same for every migrant. For a Syrian family in 2013, *war and danger* goes at the top; for a Polish builder in 2005, *wage difference* and *jobs* go at the top; for a Filipina domestic worker in Singapore, *wages* and *supporting family through remittances* may come first.\n\n**3. Writing an evaluation**\n\n- State your judgement clearly (e.g. *the most significant factor was...*).\n- Support it with **evidence** — a named place and a figure.\n- **Compare**: explain why it mattered more than the next factor.\n- Recognise **interaction**: factors often work together (a drought can make poverty worse, which then makes leaving more likely).\n- Mention **scale and time**: what is most significant for one person, one year or one country may differ for another.\n\nThe best answers use phrases such as *more significant than*, *because*, *however*, *on the other hand*, and *overall*.",
      diagram: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diamond ranking of nine migration factors arranged one, two, three, two, one from most to least significant"><text x="300" y="22" font-size="10" text-anchor="end" fill="#166534" font-weight="bold">MOST</text><text x="300" y="34" font-size="10" text-anchor="end" fill="#166534">significant</text><rect x="128" y="8" width="64" height="24" rx="4" fill="#bbf7d0" stroke="#15803d"/><text x="160" y="24" font-size="10" text-anchor="middle" fill="#14532d">War/danger</text><rect x="93" y="38" width="64" height="24" rx="4" fill="#d9f99d" stroke="#4d7c0f"/><text x="125" y="54" font-size="10" text-anchor="middle" fill="#365314">Wages</text><rect x="163" y="38" width="64" height="24" rx="4" fill="#d9f99d" stroke="#4d7c0f"/><text x="195" y="54" font-size="10" text-anchor="middle" fill="#365314">Jobs</text><rect x="58" y="68" width="64" height="24" rx="4" fill="#fef9c3" stroke="#a16207"/><text x="90" y="84" font-size="10" text-anchor="middle" fill="#713f12">Family</text><rect x="128" y="68" width="64" height="24" rx="4" fill="#fef9c3" stroke="#a16207"/><text x="160" y="84" font-size="10" text-anchor="middle" fill="#713f12">Visas/laws</text><rect x="198" y="68" width="64" height="24" rx="4" fill="#fef9c3" stroke="#a16207"/><text x="230" y="84" font-size="10" text-anchor="middle" fill="#713f12">Education</text><rect x="93" y="98" width="64" height="24" rx="4" fill="#fed7aa" stroke="#c2410c"/><text x="125" y="114" font-size="10" text-anchor="middle" fill="#7c2d12">Cost of trip</text><rect x="163" y="98" width="64" height="24" rx="4" fill="#fed7aa" stroke="#c2410c"/><text x="195" y="114" font-size="10" text-anchor="middle" fill="#7c2d12">Language</text><rect x="128" y="128" width="64" height="24" rx="4" fill="#fecaca" stroke="#b91c1c"/><text x="160" y="144" font-size="10" text-anchor="middle" fill="#7f1d1d">Climate</text><text x="300" y="150" font-size="10" text-anchor="end" fill="#991b1b" font-weight="bold">LEAST</text><text x="300" y="162" font-size="10" text-anchor="end" fill="#991b1b">significant</text><text x="160" y="172" font-size="10" text-anchor="middle" fill="#475569">1 – 2 – 3 – 2 – 1 cards</text></svg>`,
      diagramCaption:
        "A diamond ranking for one imagined migrant. Your ranking should change depending on who the migrant is — that is the point of the exercise.",
      keyPoints: [
        "Significance = how much difference a factor makes; you must compare factors, not just list them.",
        "For some countries natural change is the most significant component (Niger, Japan); for others migration is (Singapore, UK, Germany).",
        "A diamond ranking (1–2–3–2–1) forces you to justify which factors matter most.",
        "Strong evaluations give a judgement, evidence, comparison and recognise that factors interact.",
      ],
      thinkDeeper:
        "Is it possible to rank push and pull factors in general, or only for a particular person at a particular time? Construct the best argument you can for each side.",
      discovery: {
        problem:
          "Here are nine reasons a person might move: higher wages, war, family already abroad, a cheaper flight, better schools, a drought, a new visa rule, speaking the language, and a job offer. If you could only keep three, which three would explain the most migration in the world today?",
        idea:
          "Ranking forces you to weigh up significance. Economic factors (wages, jobs) explain most voluntary migration, but for forced migrants conflict outweighs everything — so the answer depends on who and where.",
      },
      skill: "Diamond ranking and writing a PEEL evaluation",
    },
  ],

  mnemonics: [
    {
      topic: "The population change formula",
      device: "BI in, DE out",
      explanation:
        "Births and Immigrants come IN (add them); Deaths and Emigrants go OUT (subtract them). Population change = (B − D) + (I − E).",
    },
    {
      topic: "Immigrant vs emigrant",
      device: "Immigrants come In; Emigrants Exit",
      explanation:
        "The first letter tells you the direction: an Immigrant moves Into a country, an Emigrant Exits a country. The same person is both — an emigrant from Poland and an immigrant to the UK.",
    },
    {
      topic: "Lee's model of migration",
      device: "Oh Dear, Obstacles Persist",
      explanation:
        "Origin factors (+, −, 0), Destination factors (+, −, 0), intervening Obstacles, and Personal factors.",
    },
    {
      topic: "Refugee vs asylum seeker",
      device: "An Asylum seeker is still Asking; a Refugee has been Recognised",
      explanation:
        "An asylum seeker has applied for protection and is waiting for a decision; a refugee has a recognised need for protection after fleeing persecution or war across a border.",
    },
  ],

  examMistakes: [
    "Mixing up immigrant and emigrant — an immigrant moves IN, an emigrant moves OUT.",
    "Calling every forced migrant a refugee: someone displaced inside their own country is an internally displaced person (IDP), not a refugee.",
    "Writing 'they move for a better life' without saying what exactly (higher wages, safety, jobs, schools) — vague answers do not get explanation marks.",
    "Listing push and pull factors without saying which is a push (at the origin) and which is a pull (at the destination).",
    "Forgetting one of the four parts of the formula, e.g. calculating births − deaths and ignoring migration.",
    "Describing a case study without any figures — always quote at least one number (e.g. Turkey hosted about 3.6 million Syrian refugees).",
    "In 'evaluate' or 'how significant' questions, giving no judgement — you must say which factor matters most and why.",
    "Only giving impacts on the host country when the question asks about the source area (or vice versa).",
  ],

  misconceptions: [
    {
      wrong: "Most migrants move from poor countries to rich countries in Europe and North America.",
      right:
        "Most migration is internal (within a country) and much international migration is between neighbouring or similar countries. For example, most Syrian refugees stayed in Turkey, Lebanon and Jordan.",
    },
    {
      wrong: "If a country's birth rate is below replacement level, its population must be shrinking.",
      right:
        "Population can still grow through immigration (Singapore, Germany, UK) or because of population momentum from a young age structure.",
    },
    {
      wrong: "Refugees and economic migrants are the same thing.",
      right:
        "Economic migrants choose to move for work; refugees are forced to flee persecution or war and have legal protection under the 1951 Refugee Convention.",
    },
    {
      wrong: "Migration only harms the country people leave.",
      right:
        "Source countries lose workers (brain drain) but also gain remittances, reduced unemployment and returning migrants' skills.",
    },
    {
      wrong: "Push and pull factors are fixed for a country.",
      right:
        "They change over time — for example, Poland's fast-growing economy and Brexit led many Poles to return home, and Mexico's falling birth rate reduced emigration to the USA.",
    },
    {
      wrong: "Everyone facing the same push factors will migrate.",
      right:
        "Lee's model shows that intervening obstacles (cost, distance, laws) and personal factors (age, family, attitude to risk) mean individuals make different choices.",
    },
  ],

  expertDebates: [
    {
      question: "Is brain drain always bad for the source country?",
      detail:
        "Losing doctors and nurses can leave countries such as Zimbabwe or Malawi with far too few health workers, and the WHO has a code to discourage rich countries from actively recruiting from them. But some economists argue for 'brain gain': the chance of working abroad encourages more people to study, remittances pay for schooling, and returning migrants bring skills and business links — the Philippines deliberately trains nurses for export. The answer may depend on how many leave and whether they return.",
    },
    {
      question: "Should countries with very low birth rates rely on immigration to solve ageing?",
      detail:
        "Singapore, Germany and the UK use immigration to keep their workforces growing, while Japan and South Korea have traditionally relied more on automation and encouraging births. Supporters say immigration quickly fills job gaps and pays for pensions. Critics point out that migrants also grow old, that very high numbers can strain housing and social cohesion, and that the source countries lose workers. Most experts think a mix of policies is needed — but disagree about the right balance.",
    },
    {
      question: "How significant will climate change become as a cause of migration?",
      detail:
        "A World Bank study (2021) suggested over 200 million people could move within their own countries by 2050 because of climate impacts, and Australia agreed in 2023 to offer residency to up to 280 people a year from Tuvalu, which is threatened by sea-level rise. However, other researchers stress that people rarely move for environmental reasons alone — drought or flooding usually combines with poverty, conflict and politics — so headline numbers are very uncertain.",
    },
  ],

  realWorld: [
    {
      title: "Sunday at Lucky Plaza",
      detail:
        "Migrant domestic workers in Singapore send remittances home to the Philippines and Indonesia on their day off — money that pays for school fees and houses back home.",
      emoji: "💸",
    },
    {
      title: "Who built your HDB block?",
      detail:
        "Work Permit holders from Bangladesh, India, China and Myanmar build most of Singapore's homes, MRT lines and Changi Airport's new Terminal 5.",
      emoji: "🏗️",
    },
    {
      title: "The world's largest annual migration",
      detail:
        "Every Chinese New Year, rural–urban migrant workers in China make an enormous number of journeys home — a visible sign of internal migration.",
      emoji: "🚄",
    },
    {
      title: "Nurses and doctors on the move",
      detail:
        "The UK's NHS relies heavily on staff trained in India, the Philippines, Nigeria and Zimbabwe — a host country's gain and a source country's brain drain.",
      emoji: "🩺",
    },
    {
      title: "Poland: from source to host",
      detail:
        "Poland, once a major source of migrants to the UK, took in over a million Ukrainians after Russia's full-scale invasion in 2022.",
      emoji: "🇵🇱",
    },
    {
      title: "A climate visa for Tuvalu",
      detail:
        "Under the Falepili Union treaty (2023), Australia offers up to 280 Tuvaluans a year the right to live and work in Australia as rising seas threaten their islands.",
      emoji: "🌊",
    },
  ],

  flashcards: [
    { front: "The three components of population change", back: "Births, deaths and migration." },
    { front: "Population change formula", back: "(Births − deaths) + (immigrants − emigrants)." },
    { front: "Natural increase", back: "When births exceed deaths. Rate of natural increase (%) = (CBR − CDR) ÷ 10." },
    { front: "Net migration", back: "Immigrants minus emigrants. Positive = net gain; negative = net loss." },
    { front: "Immigrant / emigrant", back: "Immigrant = moves into a country; emigrant = moves out of a country." },
    { front: "Refugee", back: "A person forced to flee their country because of persecution, war or violence, who has crossed an international border (protected by the 1951 Refugee Convention)." },
    { front: "Asylum seeker", back: "A person who has fled to another country and applied for refugee status, but is still awaiting a decision." },
    { front: "Internally displaced person (IDP)", back: "Someone forced from their home who has not crossed an international border." },
    { front: "Push factor / pull factor", back: "Push = negative feature of the origin encouraging people to leave. Pull = positive feature of the destination attracting people." },
    { front: "Lee's model (1966)", back: "Origin and destination factors (+, −, 0), intervening obstacles and personal factors." },
    { front: "Remittances", back: "Money sent home by migrants to family in the source country — about US$685 billion to low- and middle-income countries in 2024." },
    { front: "Brain drain", back: "The emigration of highly skilled, educated people, so the source country loses their skills." },
    { front: "Singapore's population mix (2024)", back: "About 6.0 million: ~3.6m citizens, ~0.5m PRs, ~1.9m non-residents; ~1.5m foreign workers." },
    { front: "Syrian refugees: main host countries", back: "Turkey (~3.6m at peak), Lebanon (~1.5m), Jordan (~650,000 registered); about 1 million+ reached Europe, mostly Germany." },
    { front: "Mexico–USA key figures", back: "~10–11 million Mexican-born people in the USA; remittances to Mexico ~US$65 billion in 2024." },
    { front: "Poland–UK key dates", back: "Poland joined the EU on 1 May 2004; free movement with the UK ended on 31 December 2020." },
  ],

  mustKnow: [
    "Name the three components of population change and use the formula (B − D) + (I − E) to calculate population change.",
    "Calculate the rate of natural increase from crude birth and death rates.",
    "Define and give examples of internal, international, voluntary, forced and rural–urban migration.",
    "Explain the difference between an economic migrant, a refugee, an asylum seeker and an IDP.",
    "Classify push and pull factors as economic, social, political or environmental, and draw and explain Lee's model.",
    "Explain at least three impacts of migration on a source area (including remittances, brain drain, ageing) and on a host area (including labour supply and pressure on services).",
    "Use figures from Singapore, Syria, Mexico–USA and Poland–UK case studies.",
    "Rank factors (e.g. with a diamond ranking) and write a justified judgement about which is most significant.",
  ],

  videos: [
    {
      title: "Push and pull factors of migration",
      channel: "Time for Geography",
      url: "https://www.youtube.com/results?search_query=time+for+geography+migration+push+pull+factors",
    },
    {
      title: "Population change and migration (KS3)",
      channel: "BBC Bitesize",
      url: "https://www.youtube.com/results?search_query=bbc+bitesize+ks3+geography+migration",
    },
    {
      title: "Lee's model of migration explained",
      channel: "Geography Hub",
      url: "https://www.youtube.com/results?search_query=lee%27s+model+of+migration+geography",
    },
    {
      title: "The Syrian refugee crisis explained",
      channel: "Cool Geography",
      url: "https://www.youtube.com/results?search_query=syrian+refugee+crisis+explained+geography",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "pchange-quiz-mcq-1",
        question: "Which formula correctly calculates population change?",
        options: [
          "(births + deaths) − (immigrants + emigrants)",
          "(births − deaths) + (emigrants − immigrants)",
          "(births − deaths) + (immigrants − emigrants)",
          "(births − immigrants) + (deaths − emigrants)",
        ],
        answerIndex: 2,
        hint: "Which two things add people to a country, and which two take people away?",
        explanation:
          "Births and immigrants add people; deaths and emigrants remove them, so change = (B − D) + (I − E). The second option has migration the wrong way round — emigrants leaving would wrongly increase the population.",
        guideRef: "components",
      },
      {
        id: "pchange-quiz-mcq-2",
        question: "A Syrian family flees fighting in Aleppo and is now living in a different part of Syria. What are they?",
        options: ["Refugees", "Internally displaced persons", "Asylum seekers", "Economic migrants"],
        answerIndex: 1,
        hint: "Have they crossed an international border?",
        explanation:
          "They were forced to move but are still inside Syria, so they are internally displaced persons (IDPs). They would only be refugees (or asylum seekers) if they crossed into another country such as Turkey.",
        guideRef: "migration-types",
      },
      {
        id: "pchange-quiz-mcq-3",
        question: "In Lee's model of migration, which of these is an intervening obstacle?",
        options: [
          "High wages in the destination",
          "Unemployment in the origin",
          "A migrant's age and family",
          "The cost of a visa and air fare",
        ],
        answerIndex: 3,
        hint: "Intervening obstacles lie BETWEEN the origin and destination.",
        explanation:
          "Costs, visas, distance and borders stand between the two places, making migration harder. High wages are a pull factor, unemployment is a push factor, and age and family are personal factors.",
        guideRef: "push-pull",
      },
      {
        id: "pchange-quiz-mcq-4",
        question: "What are remittances?",
        options: [
          "Money sent home by migrants to their families",
          "Taxes paid by migrants in the host country",
          "Aid given by rich countries to refugees",
          "Fees paid to smugglers by migrants",
        ],
        answerIndex: 0,
        hint: "Think of the queues at money-transfer shops at Lucky Plaza on a Sunday.",
        explanation:
          "Remittances are money migrants send back to their source country. Taxes paid in the host country are a different impact; aid comes from governments, not migrants.",
        guideRef: "impacts",
      },
    ],
    qa: [
      {
        id: "pchange-quiz-qa-1",
        question:
          "In one year a country has 50,000 births, 30,000 deaths, 12,000 immigrants and 20,000 emigrants. Calculate the population change and state whether the population grew or shrank. Show your working.",
        marks: 3,
        hint: "Work out natural change and net migration separately, then add them.",
        modelAnswer:
          "Natural change = 50,000 − 30,000 = +20,000. Net migration = 12,000 − 20,000 = −8,000. Population change = 20,000 + (−8,000) = +12,000, so the population grew by 12,000.",
        markScheme: [
          { point: "Natural change of +20,000 (births − deaths)", keywords: ["20,000", "20000", "20 000", "natural increase of 20"] },
          { point: "Net migration of −8,000 (immigrants − emigrants)", keywords: ["-8,000", "−8,000", "-8000", "8,000", "8000", "net loss"] },
          { point: "Total change +12,000 — population grew", keywords: ["12,000", "12 000", "grew", "grow", "increased by"] },
        ],
        commonError: "Adding emigrants instead of subtracting them, giving 50,000 − 30,000 + 12,000 + 20,000.",
        guideRef: "components",
      },
      {
        id: "pchange-quiz-qa-2",
        question: "Explain the difference between a refugee and an economic migrant.",
        marks: 2,
        hint: "Think about choice and the reason for moving.",
        modelAnswer:
          "An economic migrant chooses to move (voluntary migration) in order to find work or higher wages. A refugee is forced to flee their country because of war, persecution or violence and has crossed an international border, so they did not have a real choice.",
        markScheme: [
          { point: "Economic migrant moves voluntarily for work/higher wages", keywords: ["choose", "voluntar", "work", "job", "wage"] },
          { point: "Refugee is forced to flee persecution/war across a border", keywords: ["forced", "flee", "war", "persecut", "conflict", "no choice"] },
        ],
        commonError: "Saying refugees are 'poor' and migrants are 'rich' — the difference is choice and reason, not wealth.",
        guideRef: "migration-types",
      },
      {
        id: "pchange-quiz-qa-3",
        question: "Explain two reasons why Singapore relies on foreign workers.",
        marks: 4,
        hint: "Think about births, age structure and the kinds of jobs that need filling.",
        modelAnswer:
          "First, Singapore has a very low birth rate — the resident total fertility rate was about 0.97 in 2023, far below the replacement level of 2.1 — so not enough young Singaporeans are entering the workforce. Second, the population is ageing, so there are more elderly people needing care and fewer working-age people; foreign workers, including about 300,000 migrant domestic workers, provide care and fill jobs in construction and shipyards that many Singaporeans do not want to do.",
        markScheme: [
          { point: "Identifies low birth rate / low fertility", keywords: ["birth rate", "fertility", "tfr", "0.97", "few babies"] },
          { point: "Develops: not enough young workers entering workforce", keywords: ["workforce", "labour", "shortage", "working age", "not enough", "young singaporeans"] },
          { point: "Identifies ageing population", keywords: ["ageing", "aging", "elderly", "old", "65"] },
          { point: "Develops: jobs in care/construction that locals avoid", keywords: ["construction", "care", "domestic", "shipyard", "do not want", "don't want"] },
        ],
        commonError: "Giving two reasons but not developing either — each reason needs an explanation of how it leads to the need for workers.",
        guideRef: "singapore",
      },
      {
        id: "pchange-quiz-qa-4",
        question:
          "'Remittances mean migration is good for source countries.' Evaluate this statement, using examples. (6 marks)",
        marks: 6,
        hint: "Give the benefits of remittances with evidence, then the costs of emigration, then a judgement.",
        modelAnswer:
          "Remittances can be very important for source countries. In 2024 Mexico received about US$65 billion from migrants, mainly in the USA, and in Nepal remittances make up about a quarter of the economy. This money pays for food, school fees, housing and small businesses, so it reduces poverty. However, emigration also brings costs. When skilled workers such as doctors and nurses leave, there is a brain drain — for example, many nurses trained in Zimbabwe now work in the UK, leaving hospitals short of staff. Villages can be left with mainly elderly people and children, and families are separated. Overall, remittances do make migration beneficial for many families, but the statement is only partly true because the loss of young and skilled people can hold back a country's long-term development.",
        markScheme: [
          { point: "Benefit of remittances explained (pay for food, education, housing, business)", keywords: ["school", "education", "food", "housing", "business", "poverty"] },
          { point: "Evidence: named country/figure for remittances", keywords: ["mexico", "nepal", "india", "philippines", "billion", "65"] },
          { point: "Counter-argument: brain drain", keywords: ["brain drain", "skilled", "doctor", "nurse", "engineer"] },
          { point: "Counter-argument: ageing / loss of young people / families split", keywords: ["ageing", "aging", "elderly", "young", "famil", "dependen"] },
          { point: "Uses connectives to weigh up both sides", keywords: ["however", "on the other hand", "although", "whereas", "despite"] },
          { point: "Reaches a justified overall judgement", keywords: ["overall", "conclusion", "partly", "to some extent", "largely", "i think"] },
        ],
        commonError: "Writing only about the benefits of remittances and never reaching a judgement.",
        guideRef: "impacts",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "pchange-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "pchange-mcq-p1-q01",
            question: "Which of these is NOT one of the three components of population change?",
            options: ["Births", "Deaths", "Migration", "Urbanisation"],
            answerIndex: 3,
            hint: "Only three things can add people to, or remove people from, a country.",
            explanation:
              "The three components are births, deaths and migration. Urbanisation (more people living in towns) changes where people live within a country, but on its own does not change the country's total population.",
            guideRef: "components",
          },
          {
            id: "pchange-mcq-p1-q02",
            question: "What is an immigrant?",
            options: [
              "A person who moves into a country to live",
              "A person who moves out of a country to live elsewhere",
              "A person who visits a country on holiday",
              "A person who travels to work in another city each day",
            ],
            answerIndex: 0,
            hint: "Immigrants come In.",
            explanation:
              "An immigrant moves into a country to live. Someone moving out is an emigrant. Holidays and daily commuting are not migration because there is no change of home.",
            guideRef: "components",
          },
          {
            id: "pchange-mcq-p1-q03",
            question: "A country has a crude birth rate of 32 per 1,000 and a crude death rate of 12 per 1,000. What is its rate of natural increase?",
            options: ["0.2%", "2.0%", "20%", "4.4%"],
            answerIndex: 1,
            hint: "Subtract the death rate from the birth rate, then divide by 10.",
            explanation:
              "(32 − 12) ÷ 10 = 2.0%. A common slip is to stop at 20 and forget that the rates are per 1,000, not per 100 — which gives the tempting but wrong 20%.",
            guideRef: "components",
          },
          {
            id: "pchange-mcq-p1-q04",
            question: "What does 'natural decrease' mean?",
            options: [
              "More people emigrate than immigrate",
              "The birth rate is falling but still above the death rate",
              "There are more deaths than births",
              "The population is getting older",
            ],
            answerIndex: 2,
            hint: "'Natural' change only involves births and deaths.",
            explanation:
              "Natural decrease means deaths exceed births, as in Japan. More emigrants than immigrants is a net migration loss, which is not 'natural' change.",
            guideRef: "components",
          },
          {
            id: "pchange-mcq-p1-q05",
            question: "Which of these is an example of rural–urban migration?",
            options: [
              "A family moving from Singapore to Perth",
              "A retired couple moving from London to a village in Cornwall",
              "A Syrian family crossing into Turkey",
              "A young man moving from a village in Sichuan to work in Shenzhen",
            ],
            answerIndex: 3,
            hint: "Rural means countryside; urban means towns and cities.",
            explanation:
              "Moving from a village to a city is rural–urban migration. The retired couple moving from a city to a village is the opposite — counter-urbanisation.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-mcq-p1-q06",
            question: "What is an asylum seeker?",
            options: [
              "Someone who moves abroad for a higher-paid job",
              "Someone who has applied for refugee status and is waiting for a decision",
              "Someone forced from their home who stays in their own country",
              "Someone who has been granted citizenship in a new country",
            ],
            answerIndex: 1,
            hint: "An asylum seeker is still Asking.",
            explanation:
              "An asylum seeker has applied for protection as a refugee but has not yet had a decision. Someone forced from home who stays in their own country is an internally displaced person.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-mcq-p1-q07",
            question: "Which of these is a push factor?",
            options: [
              "Civil war in the home country",
              "Well-paid jobs in another country",
              "Family members already living abroad",
              "Good universities in another country",
            ],
            answerIndex: 0,
            hint: "Push factors are found at the place people are leaving.",
            explanation:
              "Civil war is a negative feature of the origin that pushes people to leave. The other three are attractive features of a destination — pull factors.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-mcq-p1-q08",
            question: "'Better hospitals in the destination country' is best classified as which kind of factor?",
            options: ["Economic push", "Social pull", "Political push", "Environmental pull"],
            answerIndex: 1,
            hint: "Is it at the origin or the destination? Is it about money, people's wellbeing, government, or nature?",
            explanation:
              "Healthcare is a social factor, and because it is an attraction of the destination it is a pull. It is not economic, even though hospitals cost money, because the reason for moving is wellbeing, not earning.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-mcq-p1-q09",
            question: "Who produced the model of migration that includes intervening obstacles and personal factors?",
            options: ["Thomas Malthus", "Ester Boserup", "Everett Lee", "Warren Thompson"],
            answerIndex: 2,
            hint: "The model was published in 1966 by an American geographer.",
            explanation:
              "Everett Lee published his model of migration in 1966. Malthus and Boserup are famous for ideas about population and food supply, and Thompson for the demographic transition model.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-mcq-p1-q10",
            question: "In Lee's model, which of these is a personal factor?",
            options: [
              "A border wall",
              "Low wages at the origin",
              "Jobs at the destination",
              "Having young children to look after",
            ],
            answerIndex: 3,
            hint: "Personal factors are about the individual, not the places.",
            explanation:
              "Family responsibilities are personal — they affect how one person weighs up the move. A border wall is an intervening obstacle; wages and jobs are origin and destination factors.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-mcq-p1-q11",
            question: "What is meant by 'brain drain'?",
            options: [
              "The emigration of skilled and educated people from a country",
              "Migrants forgetting their home language",
              "Students moving from rural schools to city schools",
              "The money that migrants send back home",
            ],
            answerIndex: 0,
            hint: "Think about who the source country loses.",
            explanation:
              "Brain drain is the loss of skilled people such as doctors, nurses and engineers through emigration. Money sent home is remittances — a different impact.",
            guideRef: "impacts",
          },
          {
            id: "pchange-mcq-p1-q12",
            question: "Which of these is a NEGATIVE impact of immigration on a host area?",
            options: [
              "More workers to fill job shortages",
              "More taxes paid to the government",
              "Increased pressure on housing and schools",
              "Greater variety of food and culture",
            ],
            answerIndex: 2,
            hint: "Which option describes a problem rather than a benefit?",
            explanation:
              "Rapid immigration can increase demand for housing, schools and healthcare. Filling job shortages, paying taxes and cultural diversity are all usually seen as positives.",
            guideRef: "impacts",
          },
          {
            id: "pchange-mcq-p1-q13",
            question: "About how many of Singapore's roughly 6 million people (2024) were non-residents?",
            options: ["About 0.5 million", "About 1.9 million", "About 3.6 million", "About 5 million"],
            answerIndex: 1,
            hint: "Roughly three in every ten people.",
            explanation:
              "About 1.9 million people were non-residents. About 3.6 million were citizens and about 0.5 million were permanent residents — the other tempting figures.",
            guideRef: "singapore",
          },
          {
            id: "pchange-mcq-p1-q14",
            question: "Singapore's resident total fertility rate in 2023 and 2024 was about…",
            options: ["2.1", "1.8", "1.5", "0.97"],
            answerIndex: 3,
            hint: "It is below one child per woman.",
            explanation:
              "Singapore's resident TFR was about 0.97, one of the lowest in the world. 2.1 is the replacement level that would keep the population stable without migration.",
            guideRef: "singapore",
          },
          {
            id: "pchange-mcq-p1-q15",
            question: "Which Singapore work pass is used for lower-wage workers in construction, shipyards and domestic work?",
            options: ["Work Permit", "Employment Pass", "S Pass", "Student Pass"],
            answerIndex: 0,
            hint: "Employers must pay a monthly levy for these workers.",
            explanation:
              "Work Permits cover lower-wage jobs such as construction and domestic work, with levies and quotas. Employment Passes are for professionals and managers; S Passes for mid-skilled workers.",
            guideRef: "singapore",
          },
          {
            id: "pchange-mcq-p1-q16",
            question: "In which year did the Syrian civil war begin?",
            options: ["2001", "2008", "2011", "2015"],
            answerIndex: 2,
            hint: "It followed protests across several Arab countries in the 'Arab Spring'.",
            explanation:
              "The war began in 2011. 2015 is a tempting answer because that was when over a million asylum seekers reached Europe, but the war had started four years earlier.",
            guideRef: "syria",
          },
          {
            id: "pchange-mcq-p1-q17",
            question: "Which country hosted the largest number of Syrian refugees, about 3.6 million at the peak?",
            options: ["Germany", "Turkey", "Jordan", "Lebanon"],
            answerIndex: 1,
            hint: "It shares Syria's long northern border.",
            explanation:
              "Turkey hosted about 3.6 million Syrians at the peak. Germany took the most in Europe (under a million), and Lebanon hosted the most per person, but not the largest total.",
            guideRef: "syria",
          },
          {
            id: "pchange-mcq-p1-q18",
            question: "When did Poland join the European Union, allowing many Poles to work in the UK?",
            options: ["1973", "1995", "2016", "2004"],
            answerIndex: 3,
            hint: "Ten countries joined together, mostly from Central and Eastern Europe.",
            explanation:
              "Poland joined the EU on 1 May 2004. 2016 is the year of the UK's Brexit referendum, which later reduced Polish migration.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-mcq-p1-q19",
            question: "About how much money did migrants send home to Mexico in remittances in 2024?",
            options: ["About US$65 billion", "About US$6.5 billion", "About US$650 million", "About US$650 billion"],
            answerIndex: 0,
            hint: "It is a record figure of a few per cent of Mexico's economy.",
            explanation:
              "Remittances to Mexico reached a record of about US$65 billion in 2024. About US$650 billion is closer to the total sent to ALL low- and middle-income countries.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-mcq-p1-q20",
            question: "How are the nine cards arranged in a diamond ranking?",
            options: ["3 rows of 3", "In a single line from best to worst", "1–2–3–2–1", "2–2–2–2–1"],
            answerIndex: 2,
            hint: "Picture the shape of a diamond.",
            explanation:
              "A diamond ranking has 1 most significant card at the top, then 2, 3, 2, and 1 least significant at the bottom. This allows ties in the middle while forcing decisions at the top and bottom.",
            guideRef: "significance",
          },
        ],
      },
      {
        id: "pchange-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          {
            id: "pchange-mcq-p2-q01",
            question: "A country has 40,000 births, 45,000 deaths, 10,000 immigrants and 2,000 emigrants in one year. What is the population change?",
            options: ["−5,000", "+8,000", "+3,000", "−3,000"],
            answerIndex: 2,
            hint: "Natural change first, then net migration, then add them.",
            explanation:
              "Natural change = 40,000 − 45,000 = −5,000. Net migration = 10,000 − 2,000 = +8,000. Total = +3,000. Choosing −5,000 or +8,000 means only one component was counted.",
            guideRef: "components",
          },
          {
            id: "pchange-mcq-p2-q02",
            question: "Why do geographers use birth and death rates 'per 1,000 people' rather than total numbers?",
            options: [
              "So that countries with very different population sizes can be compared fairly",
              "Because most countries only count 1,000 people in their census",
              "Because total numbers are always secret",
              "So the numbers always come out as percentages",
            ],
            answerIndex: 0,
            hint: "India has about 1.4 billion people; Singapore about 6 million.",
            explanation:
              "Rates standardise the data, so a large and a small country can be compared. India obviously has far more births than Singapore in total, but rates show how fast each population is replacing itself.",
            guideRef: "components",
          },
          {
            id: "pchange-mcq-p2-q03",
            question: "Germany has had more deaths than births for decades, yet its population grew to about 84 million. Why?",
            options: [
              "Its death rate has been rising rapidly",
              "Its birth rate rose above replacement level",
              "Many Germans emigrated",
              "Its net migration gain was larger than its natural decrease",
            ],
            answerIndex: 3,
            hint: "Use the formula: which component must be positive and large?",
            explanation:
              "If natural change is negative, the population can only grow if net migration is positive and larger. Emigration of Germans would make the population fall, not grow.",
            guideRef: "components",
          },
          {
            id: "pchange-mcq-p2-q04",
            question: "Which is the best example of forced migration?",
            options: [
              "A Malaysian engineer taking a job in Singapore",
              "People evacuated from Montserrat after volcanic eruptions in the 1990s",
              "A student moving to London for university",
              "A retired Briton moving to Spain for the sunshine",
            ],
            answerIndex: 1,
            hint: "Which group had little or no choice?",
            explanation:
              "The Soufrière Hills eruptions forced about two-thirds of Montserrat's people to leave — forced, environmental migration. The other three people chose to move.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-mcq-p2-q05",
            question: "What is counter-urbanisation?",
            options: [
              "The growth of cities due to rural–urban migration",
              "Building new towns on reclaimed land",
              "The movement of people from cities to rural areas",
              "People moving between two cities",
            ],
            answerIndex: 2,
            hint: "'Counter' means against or opposite.",
            explanation:
              "Counter-urbanisation is the opposite of rural–urban migration: people leave cities for towns and villages in the countryside, common in richer countries such as the UK.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-mcq-p2-q06",
            question: "Under the 1951 Refugee Convention, what is a key right of refugees?",
            options: [
              "They must not be sent back to a country where they face serious danger",
              "They must be given citizenship immediately",
              "They can choose any country in the world to live in",
              "They must be housed in camps",
            ],
            answerIndex: 0,
            hint: "The legal term is 'non-refoulement'.",
            explanation:
              "The core principle is non-refoulement: refugees must not be returned to danger. The Convention does not give a right to choose any country or to instant citizenship.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-mcq-p2-q07",
            question: "Which of these is an environmental push factor?",
            options: [
              "A government that imprisons journalists",
              "A shortage of jobs in the local factory",
              "A lack of secondary schools",
              "Repeated droughts that ruin crops",
            ],
            answerIndex: 3,
            hint: "Environmental factors come from the natural world.",
            explanation:
              "Drought is an environmental push. Imprisoning journalists is political, a shortage of jobs is economic, and a lack of schools is social.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-mcq-p2-q08",
            question: "According to Lee's model, why do most migrants travel only short distances?",
            options: [
              "Pull factors are always stronger nearby",
              "The intervening obstacles, such as cost and borders, are smaller",
              "Personal factors stop people travelling far",
              "There are no push factors in faraway places",
            ],
            answerIndex: 1,
            hint: "What stands between origin and destination, and how does distance affect it?",
            explanation:
              "Shorter moves usually mean lower costs, fewer borders and more familiar language and culture — smaller intervening obstacles. Pull factors are not always stronger nearby; wages are often higher far away.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-mcq-p2-q09",
            question: "A migrant sets off from a village intending to reach the capital city but finds a good job in a nearer town and stays there. This is an example of…",
            options: ["a push factor", "brain drain", "an intervening opportunity", "counter-urbanisation"],
            answerIndex: 2,
            hint: "Something along the way changed the plan.",
            explanation:
              "An intervening opportunity is an attraction between the origin and the intended destination that stops the migrant earlier. It is not counter-urbanisation, because the migrant still moved towards a town.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-mcq-p2-q10",
            question: "Why are source areas often left with an ageing population?",
            options: [
              "Most migrants are young adults, so older people and children are left behind",
              "Migrants send money that makes people live longer",
              "Elderly people are the most likely to emigrate",
              "Immigrants to rural areas are usually retired",
            ],
            answerIndex: 0,
            hint: "Think about which age group usually migrates for work.",
            explanation:
              "Young adults (roughly 18–35) are most likely to migrate for work, so the remaining population is older on average and the dependency ratio rises.",
            guideRef: "impacts",
          },
          {
            id: "pchange-mcq-p2-q11",
            question: "Which country received the most remittances in the world in 2024 (about US$129 billion)?",
            options: ["Mexico", "Philippines", "China", "India"],
            answerIndex: 3,
            hint: "It has the largest diaspora in the world, including many in the Gulf states.",
            explanation:
              "India received the most, about US$129 billion. Mexico was second-largest at about US$65 billion; the Philippines receives far less in total but it is still very important there.",
            guideRef: "impacts",
          },
          {
            id: "pchange-mcq-p2-q12",
            question: "The UK's NHS employs many nurses trained in the Philippines and India. What is the main impact on the UK as the host country?",
            options: [
              "A brain drain of skilled workers",
              "Labour shortages in healthcare are reduced",
              "Remittances flow into the UK",
              "The UK's population becomes older",
            ],
            answerIndex: 1,
            hint: "Think about what a host country gains from skilled immigrants.",
            explanation:
              "The host gains skilled labour and fills shortages. The brain drain is felt by the source countries, and remittances flow out of the UK, not into it.",
            guideRef: "impacts",
          },
          {
            id: "pchange-mcq-p2-q13",
            question: "Who is the Singapore Employment Pass (EP) designed for?",
            options: [
              "Migrant domestic workers",
              "Construction workers",
              "Foreign professionals, managers and executives",
              "International students",
            ],
            answerIndex: 2,
            hint: "It has the highest minimum salary of the work passes.",
            explanation:
              "The EP is for professionals, managers and executives, with a minimum salary of S$5,600 a month from 2025. Construction and domestic workers use Work Permits.",
            guideRef: "singapore",
          },
          {
            id: "pchange-mcq-p2-q14",
            question: "What is the main purpose of the foreign worker levy and quotas in Singapore?",
            options: [
              "To control the number of lower-wage foreign workers employers hire",
              "To pay for migrant workers' flights home",
              "To stop all foreign workers entering Singapore",
              "To encourage foreign workers to become citizens",
            ],
            answerIndex: 0,
            hint: "They make each extra foreign worker more expensive and set a maximum share.",
            explanation:
              "Levies raise the cost of hiring foreign workers and quotas (dependency ratio ceilings) cap their share, so the government can manage numbers while still allowing firms to fill jobs.",
            guideRef: "singapore",
          },
          {
            id: "pchange-mcq-p2-q15",
            question: "About what proportion of the people living in Lebanon were Syrian refugees during the crisis?",
            options: ["About 1 in 100", "About 1 in 50", "About 1 in 2", "About 1 in 4 or 5"],
            answerIndex: 3,
            hint: "About 1.5 million Syrians in a country of about 5–6 million people.",
            explanation:
              "1.5 million out of roughly 5–6 million is about one in four or five — the highest number of refugees per person of any country.",
            guideRef: "syria",
          },
          {
            id: "pchange-mcq-p2-q16",
            question: "In which country is the Zaatari refugee camp?",
            options: ["Turkey", "Jordan", "Lebanon", "Greece"],
            answerIndex: 1,
            hint: "It is south of Syria.",
            explanation:
              "Zaatari is in northern Jordan, opened in 2012 and housing around 80,000 people. Lebanon did not set up formal camps for Syrians; most lived in rented rooms and informal settlements.",
            guideRef: "syria",
          },
          {
            id: "pchange-mcq-p2-q17",
            question: "What was the main aim of the EU–Turkey deal of 2016?",
            options: [
              "To give all Syrian refugees EU citizenship",
              "To end the war in Syria",
              "To reduce the number of people crossing by boat from Turkey to Greece",
              "To move refugees from Turkey to Lebanon",
            ],
            answerIndex: 2,
            hint: "It created a new intervening obstacle on the route to Europe.",
            explanation:
              "The deal aimed to cut irregular crossings to the Greek islands; in return the EU gave Turkey funding to support refugees. It did not end the war or give citizenship.",
            guideRef: "syria",
          },
          {
            id: "pchange-mcq-p2-q18",
            question: "In 2004, the UK was one of only three EU countries to let workers from new member states such as Poland work immediately. Which were the other two?",
            options: ["Ireland and Sweden", "France and Germany", "Spain and Italy", "Belgium and the Netherlands"],
            answerIndex: 0,
            hint: "One is the UK's neighbour; the other is in Scandinavia.",
            explanation:
              "Ireland and Sweden also opened their labour markets immediately. Germany and France kept temporary restrictions for several years, which helped make the UK such a strong pull.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-mcq-p2-q19",
            question: "Between about 2009 and 2014, net migration from Mexico to the USA fell to around zero. Which combination best explains this?",
            options: [
              "The USA removed its border fence and wages in the USA rose",
              "Mexico's population grew faster and US farms needed more workers",
              "A war broke out in Mexico",
              "Fewer young Mexicans, a stronger Mexican economy and fewer US jobs after 2008",
            ],
            answerIndex: 3,
            hint: "Think about changes to pushes, pulls and the number of potential migrants.",
            explanation:
              "Mexico's falling birth rate meant fewer young adults, its economy improved, and the 2008 financial crisis cut US jobs — weaker pushes and weaker pulls. Tougher enforcement also played a part.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-mcq-p2-q20",
            question: "Niger has a crude birth rate above 40 per 1,000 and little migration. Which component is most significant in its population change?",
            options: ["Net migration", "Natural increase", "Emigration", "Natural decrease"],
            answerIndex: 1,
            hint: "Compare the birth rate with typical death rates.",
            explanation:
              "With very high births and much lower deaths, natural increase drives Niger's rapid growth. Migration is small compared with this.",
            guideRef: "significance",
          },
        ],
      },
      {
        id: "pchange-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "pchange-mcq-p3-q01",
            question: "A country has a crude birth rate of 9 per 1,000 and a crude death rate of 11 per 1,000. What is its rate of natural change?",
            options: ["+0.2%", "−2%", "−0.2%", "+2%"],
            answerIndex: 2,
            hint: "Birth rate minus death rate, then divide by 10. Watch the sign.",
            explanation:
              "(9 − 11) ÷ 10 = −0.2%, a natural decrease. −2% forgets to divide by 10; +0.2% gets the subtraction the wrong way round.",
            guideRef: "components",
          },
          {
            id: "pchange-mcq-p3-q02",
            question: "A town's population rises from 5,000,000 to 5,100,000 in one year. What is the percentage change?",
            options: ["+2%", "+0.2%", "+10%", "+20%"],
            answerIndex: 0,
            hint: "Percentage change = (change ÷ original) × 100.",
            explanation:
              "Change = 100,000. (100,000 ÷ 5,000,000) × 100 = 2%. Dividing by the new total instead of the original gives a slightly different (wrong) answer.",
            guideRef: "components",
          },
          {
            id: "pchange-mcq-p3-q03",
            question: "Country X: natural change −50,000; net migration +80,000. Which statement is correct?",
            options: [
              "The population fell by 50,000",
              "Migration is the more significant component and the population grew by 30,000",
              "Natural change is the more significant component and the population grew by 130,000",
              "The population fell by 30,000",
            ],
            answerIndex: 1,
            hint: "Add the two components, keeping the signs. Which has the larger size?",
            explanation:
              "−50,000 + 80,000 = +30,000. Net migration (80,000) is larger than the natural decrease (50,000), so migration is more significant. 130,000 ignores the minus sign.",
            guideRef: "significance",
          },
          {
            id: "pchange-mcq-p3-q04",
            question: "Which pair are BOTH examples of forced international migration?",
            options: [
              "Poles moving to the UK in 2005 and Mexicans moving to the USA",
              "Chinese villagers moving to Shenzhen and Ukrainians moving to Poland",
              "Filipina domestic workers moving to Singapore and Syrians moving to Turkey",
              "Rohingya fleeing Myanmar to Bangladesh and Ukrainians fleeing to Poland in 2022",
            ],
            answerIndex: 3,
            hint: "Both must be forced AND cross a border.",
            explanation:
              "Rohingya fled violence in Myanmar and Ukrainians fled Russia's invasion — both forced and international. Moving from a village to Shenzhen is internal, and Polish and Filipina workers are voluntary economic migrants.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-mcq-p3-q05",
            question: "Which is the best example of seasonal migration?",
            options: [
              "Fruit pickers who work on farms during the harvest and then return home",
              "A family emigrating permanently to Australia",
              "A refugee settling in Germany",
              "A worker commuting by MRT each day",
            ],
            answerIndex: 0,
            hint: "It is linked to the time of year and is temporary.",
            explanation:
              "Seasonal migrants move for part of the year, such as harvests, then return. Daily commuting is not migration at all because there is no change of home.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-mcq-p3-q06",
            question: "A woman from the Philippines takes a two-year contract as a domestic worker in Singapore. How is her migration best classified?",
            options: [
              "Internal, forced",
              "International, forced",
              "International, voluntary, economic",
              "Internal, voluntary, rural–urban",
            ],
            answerIndex: 2,
            hint: "Has she crossed a border? Did she choose to go? Why?",
            explanation:
              "She crosses a border (international), chooses to go (voluntary) and moves for work and wages (economic). She is also a temporary migrant because the contract is fixed-term.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-mcq-p3-q07",
            question: "In Lee's model, what do the '0' symbols at the origin and destination represent?",
            options: [
              "Places with no people",
              "Neutral factors that do not affect the decision much",
              "Factors that have been removed by the government",
              "Intervening obstacles",
            ],
            answerIndex: 1,
            hint: "+ is positive, − is negative, so 0 is…",
            explanation:
              "0 shows neutral factors that people are indifferent to. Intervening obstacles are drawn between the two places, not inside them.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-mcq-p3-q08",
            question: "Which of these is a political pull factor?",
            options: [
              "Higher wages",
              "A warmer climate",
              "Better schools",
              "Freedom from persecution and the right to vote",
            ],
            answerIndex: 3,
            hint: "Political factors are about governments, laws, rights and conflict.",
            explanation:
              "Freedom and safety from persecution are political pulls. Wages are economic, climate environmental and schools social.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-mcq-p3-q09",
            question: "How have low-cost airlines most affected migration, using Lee's model?",
            options: [
              "They have reduced intervening obstacles",
              "They have created new push factors",
              "They have removed personal factors",
              "They have made pull factors weaker",
            ],
            answerIndex: 0,
            hint: "What part of the model is about the cost and difficulty of the journey?",
            explanation:
              "Cheaper travel lowers the cost and difficulty of moving — a smaller intervening obstacle. This helped Polish migration to the UK after 2004, when budget flights linked many Polish cities to UK airports.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-mcq-p3-q10",
            question: "Which of these is an example of 'brain gain' for a source country?",
            options: [
              "A doctor emigrating to Australia",
              "Remittances being spent on food",
              "A migrant returning home with new skills and savings to start a business",
              "Young people leaving villages for cities",
            ],
            answerIndex: 2,
            hint: "It is the opposite of brain drain.",
            explanation:
              "Returning migrants bring back skills, ideas and money — a brain gain. A doctor emigrating is the brain drain itself.",
            guideRef: "impacts",
          },
          {
            id: "pchange-mcq-p3-q11",
            question: "In which country are remittances worth about a quarter of the whole economy (GDP)?",
            options: ["USA", "Nepal", "Singapore", "Germany"],
            answerIndex: 1,
            hint: "It is a mountainous South Asian country with many workers in the Gulf states and Malaysia.",
            explanation:
              "Nepal relies heavily on remittances from workers abroad. The USA, Singapore and Germany are mainly sources of remittances, not receivers.",
            guideRef: "impacts",
          },
          {
            id: "pchange-mcq-p3-q12",
            question: "Which economic concern about immigration in host countries is most often debated by economists?",
            options: [
              "Immigrants never pay any taxes",
              "Immigrants always cause unemployment to double",
              "Immigration makes the host country's population younger",
              "Possible downward pressure on wages in some low-paid jobs",
            ],
            answerIndex: 3,
            hint: "Look for the claim that is cautious rather than extreme.",
            explanation:
              "Some economists argue that large numbers of new workers can hold down wages in some low-paid jobs, though they disagree about the size of the effect. The extreme claims ('never', 'always double') are not supported by evidence.",
            guideRef: "impacts",
          },
          {
            id: "pchange-mcq-p3-q13",
            question: "What did Singapore's 2013 Population White Paper project?",
            options: [
              "A population of 6.5–6.9 million by 2030",
              "A population of 10 million by 2030",
              "That Singapore's population would fall to 4 million",
              "That all foreign workers would leave by 2020",
            ],
            answerIndex: 0,
            hint: "It caused a rare public protest at Hong Lim Park.",
            explanation:
              "The White Paper used 6.5–6.9 million by 2030 as a planning range, worrying many residents about crowding and competition for jobs and housing.",
            guideRef: "singapore",
          },
          {
            id: "pchange-mcq-p3-q14",
            question: "In 2020, why did COVID-19 spread so rapidly among Singapore's migrant workers?",
            options: [
              "They had all just arrived from abroad",
              "They worked mainly in hospitals",
              "Many lived in crowded dormitories with shared rooms and facilities",
              "They were not allowed to see doctors",
            ],
            answerIndex: 2,
            hint: "Think about living conditions.",
            explanation:
              "Crowded dormitories, often with a dozen or more men per room and shared kitchens and toilets let the virus spread quickly. Singapore later introduced improved dormitory standards.",
            guideRef: "singapore",
          },
          {
            id: "pchange-mcq-p3-q15",
            question: "Why did most Syrian refugees stay in neighbouring countries rather than travelling to Europe?",
            options: [
              "Neighbouring countries were richer than Europe",
              "They were close, reachable by land, and families hoped to return home soon",
              "European countries had no laws about refugees",
              "Turkey, Lebanon and Jordan paid refugees to come",
            ],
            answerIndex: 1,
            hint: "Think about intervening obstacles and the hope of going home.",
            explanation:
              "Short distances meant smaller obstacles (cost, danger, borders), and staying near Syria made return easier. Neighbouring countries were not richer than Europe.",
            guideRef: "syria",
          },
          {
            id: "pchange-mcq-p3-q16",
            question: "At the peak of the crisis, roughly what fraction of Syria's pre-war population had been forced from their homes?",
            options: ["About a tenth", "About a quarter", "More than half", "Almost everyone"],
            answerIndex: 2,
            hint: "Add up about 6–7 million IDPs and over 6 million refugees out of about 21–22 million.",
            explanation:
              "Around 12–13 million of about 21–22 million people were displaced — more than half. 'About a quarter' counts only one of the two groups.",
            guideRef: "syria",
          },
          {
            id: "pchange-mcq-p3-q17",
            question: "What was Poland's approximate unemployment rate when it joined the EU in 2004?",
            options: ["About 19%", "About 2%", "About 5%", "About 50%"],
            answerIndex: 0,
            hint: "It was one of the highest in the EU at the time.",
            explanation:
              "Polish unemployment was about 19% — a strong economic push factor. By the late 2010s it had fallen to only a few per cent, which helps explain return migration.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-mcq-p3-q18",
            question: "Why did many Polish migrants return home from the UK after 2016?",
            options: [
              "Poland left the EU",
              "The UK closed all its airports to Poland",
              "Poland's population was growing too fast",
              "Brexit created uncertainty while wages and jobs in Poland improved",
            ],
            answerIndex: 3,
            hint: "Think about a change in both the pull of the UK and the push of Poland.",
            explanation:
              "The Brexit vote weakened the UK's pull (uncertainty, weaker pound, later the end of free movement) while Poland's growing economy reduced the push. Poland did not leave the EU — the UK did.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-mcq-p3-q19",
            question: "Which is a PHYSICAL intervening obstacle for migrants crossing from Mexico into the USA?",
            options: ["US immigration law", "The Sonoran Desert", "Smugglers' fees", "Language differences"],
            answerIndex: 1,
            hint: "Physical means part of the natural landscape.",
            explanation:
              "The Sonoran Desert is a natural barrier where extreme heat kills migrants every year. Laws, fees and language are obstacles too, but they are human, not physical.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-mcq-p3-q20",
            question: "Which sentence is the strongest evaluation of why people migrate from Mexico to the USA?",
            options: [
              "People move because of lots of push and pull factors.",
              "Wages are higher in the USA and there are jobs there too.",
              "The wage gap is the most significant factor because US wages are several times higher, although family networks make it easier to act on.",
              "Migrants move because they want a better life.",
            ],
            answerIndex: 2,
            hint: "Look for a judgement, evidence and a comparison.",
            explanation:
              "The third sentence makes a clear judgement, supports it with evidence and links it to another factor. The others only list or describe and make no judgement about significance.",
            guideRef: "significance",
          },
        ],
      },
      {
        id: "pchange-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "pchange-mcq-p4-q01",
            question: "A country of 2,000,000 people has a crude birth rate of 15 per 1,000, a crude death rate of 10 per 1,000 and net migration of +5,000. By how much does the population change?",
            options: ["+10,000", "+15,000", "+5,000", "+25,000"],
            answerIndex: 1,
            hint: "Natural increase = (15 − 10) per 1,000 of 2,000,000.",
            explanation:
              "Natural increase = (15 − 10) × 2,000 = 10,000. Adding net migration of 5,000 gives +15,000. +10,000 forgets migration; +5,000 counts only migration; +25,000 wrongly adds the natural increase twice.",
            guideRef: "components",
          },
          {
            id: "pchange-mcq-p4-q02",
            question: "A country has a total fertility rate of 1.3 but its population is still growing. Which of these could NOT explain this?",
            options: [
              "A large net migration gain",
              "Many young adults in the population (population momentum)",
              "Rising life expectancy, so fewer people die each year",
              "A rapidly rising death rate",
            ],
            answerIndex: 3,
            hint: "Which option would make the population fall faster?",
            explanation:
              "A rising death rate would reduce the population. Immigration, a young age structure (lots of parents even if each has few children) and longer lives can all keep a low-fertility population growing for a while.",
            guideRef: "components",
          },
          {
            id: "pchange-mcq-p4-q03",
            question: "Latvia's population has fallen by nearly a third since 1990. Which combination best explains this?",
            options: [
              "Natural decrease and a net migration loss",
              "Natural increase and a net migration gain",
              "Natural increase and a net migration loss",
              "Natural decrease and a net migration gain",
            ],
            answerIndex: 0,
            hint: "For a big, long fall, both components are likely to be pulling the same way.",
            explanation:
              "Latvia has had more deaths than births AND many young people emigrating to richer EU countries. With a net migration gain or natural increase, a fall that large would be very unlikely.",
            guideRef: "significance",
          },
          {
            id: "pchange-mcq-p4-q04",
            question: "A Venezuelan woman crosses into Colombia, applies for international protection and is waiting for the decision. What is she?",
            options: ["An internally displaced person", "An economic migrant", "An asylum seeker", "A recognised refugee"],
            answerIndex: 2,
            hint: "Has her claim been decided yet?",
            explanation:
              "She has applied but is awaiting a decision, so she is an asylum seeker. She would become a recognised refugee only once her claim is accepted.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-mcq-p4-q05",
            question: "A rice farmer in coastal Bangladesh moves to Dhaka after salt water repeatedly floods his fields. Which description fits best?",
            options: [
              "International voluntary migration with a political push",
              "Internal migration driven mainly by an environmental push",
              "Counter-urbanisation driven by a social pull",
              "International forced migration as a refugee",
            ],
            answerIndex: 1,
            hint: "Did he cross a border? What kind of factor is salt-water flooding?",
            explanation:
              "Moving within Bangladesh is internal, and flooding is environmental. He is not a refugee: he has not crossed a border, and refugee protection covers people fleeing persecution, war or violence, not environmental change.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-mcq-p4-q06",
            question: "Which statement about global migration is accurate?",
            options: [
              "About half of the world's people are international migrants",
              "Most forcibly displaced people are refugees in Europe",
              "International migration is falling rapidly every year",
              "Around 3–4% of the world's people are international migrants",
            ],
            answerIndex: 3,
            hint: "The figure is about 300 million out of over 8 billion.",
            explanation:
              "About 300 million people — roughly 3.7% — are international migrants. Most forcibly displaced people are displaced inside their own countries or in neighbouring countries, not in Europe.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-mcq-p4-q07",
            question: "Two neighbours in the same Mexican village face the same low wages. One migrates to the USA; the other stays. Which part of Lee's model best explains the difference?",
            options: ["Personal factors", "Origin factors", "Destination factors", "Intervening opportunities"],
            answerIndex: 0,
            hint: "The origin and destination are the same for both people.",
            explanation:
              "Since the places are identical, the difference must lie in personal factors — age, family, savings, contacts in the USA or attitude to risk.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-mcq-p4-q08",
            question: "Which intervening obstacle was removed for Polish workers when Poland joined the EU in 2004?",
            options: [
              "The English Channel",
              "The cost of flights",
              "The need for a work permit — they gained the legal right to work in the UK",
              "Language differences",
            ],
            answerIndex: 2,
            hint: "EU membership changed the law, not geography.",
            explanation:
              "EU free movement gave Poles the legal right to live and work in the UK — a legal obstacle removed. The Channel and language did not change, though cheap flights did lower costs at the same time.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-mcq-p4-q09",
            question: "How did remittances to low- and middle-income countries in 2024 (about US$685 billion) compare with official overseas aid?",
            options: [
              "They were about a tenth of overseas aid",
              "They were larger than all official overseas aid",
              "They were exactly the same",
              "Remittances are not measured",
            ],
            answerIndex: 1,
            hint: "Total overseas aid from rich countries is roughly US$200–250 billion a year.",
            explanation:
              "Remittances are several times larger than official aid, which is why they matter so much to source countries. They go straight to families rather than through governments.",
            guideRef: "impacts",
          },
          {
            id: "pchange-mcq-p4-q10",
            question: "Large-scale emigration of young adults from a rural area is most likely to…",
            options: [
              "lower the dependency ratio",
              "raise the birth rate in the area",
              "increase the number of young workers",
              "raise the dependency ratio",
            ],
            answerIndex: 3,
            hint: "The dependency ratio compares dependants (young and old) with people of working age.",
            explanation:
              "If working-age people leave, there are more dependants per worker, so the dependency ratio rises. The birth rate usually falls because those of child-bearing age have gone.",
            guideRef: "impacts",
          },
          {
            id: "pchange-mcq-p4-q11",
            question: "In which situation is pressure on services in a host area likely to be greatest?",
            options: [
              "When many people arrive suddenly in a country with limited resources, like Lebanon after 2011",
              "When a small number of skilled workers arrive with job offers",
              "When migrants arrive slowly over many decades",
              "When migrants arrive in a rich country with plenty of empty housing",
            ],
            answerIndex: 0,
            hint: "Think about speed of arrival and the host's ability to cope.",
            explanation:
              "Sudden, large, unplanned arrivals into a country with stretched resources create the greatest pressure on water, housing, schools and healthcare. Planned, gradual migration gives time to adapt.",
            guideRef: "impacts",
          },
          {
            id: "pchange-mcq-p4-q12",
            question: "Why is it easier for Singapore to control immigration than for the USA?",
            options: [
              "Singapore has no pull factors",
              "Singapore has no immigration laws",
              "Singapore is a small island state with a few tightly controlled entry points",
              "Singapore is further from poorer countries",
            ],
            answerIndex: 2,
            hint: "Compare the borders: about 3,100 km of land border versus a small island.",
            explanation:
              "Almost everyone enters Singapore through Changi Airport, seaports or the two Causeway links, all tightly checked. The USA has a long land border with deserts and rivers. Singapore is actually very close to many poorer countries.",
            guideRef: "singapore",
          },
          {
            id: "pchange-mcq-p4-q13",
            question: "Singapore's population in 2024 was about 6.0 million, including about 1.9 million non-residents. Roughly what percentage were non-residents?",
            options: ["About 19%", "About 32%", "About 50%", "About 9%"],
            answerIndex: 1,
            hint: "1.9 ÷ 6.0 × 100.",
            explanation:
              "1.9 ÷ 6.0 × 100 ≈ 32%. About 9% is the share of permanent residents, which is a common mix-up.",
            guideRef: "singapore",
          },
          {
            id: "pchange-mcq-p4-q14",
            question: "Singapore has raised the minimum salary for Employment Passes and introduced the COMPASS points system. What is the most likely reason?",
            options: [
              "To stop all foreign professionals coming",
              "To bring in more lower-wage workers",
              "To reduce the number of citizens",
              "To make sure foreign professionals complement, rather than compete unfairly with, local workers",
            ],
            answerIndex: 3,
            hint: "Think about the public concerns raised after the 2013 White Paper.",
            explanation:
              "The changes aim to keep attracting high-quality professionals while addressing concerns about competition for good jobs. They do not stop foreign professionals entirely.",
            guideRef: "singapore",
          },
          {
            id: "pchange-mcq-p4-q15",
            question: "Which is the best example of a long-term POSITIVE impact of Syrian refugees on Germany?",
            options: [
              "Filling labour shortages, including thousands of Syrian doctors in hospitals",
              "Increased demand for emergency housing in 2015",
              "Political arguments about immigration",
              "The cost of processing asylum claims",
            ],
            answerIndex: 0,
            hint: "Germany has an ageing population and shortages of skilled workers.",
            explanation:
              "Many Syrians now work in Germany, helping fill gaps caused by its ageing population. Emergency housing and processing costs were short-term pressures, not benefits.",
            guideRef: "syria",
          },
          {
            id: "pchange-mcq-p4-q16",
            question: "How do geographers view the 2006–2010 drought in Syria as a cause of the refugee crisis?",
            options: [
              "It was the only cause of the war",
              "It had no connection at all with migration in Syria",
              "It is a debated contributing factor; conflict and violence were the main push factors",
              "It caused all refugees to move to Europe",
            ],
            answerIndex: 2,
            hint: "Environmental factors usually interact with others.",
            explanation:
              "The drought pushed many farmers into cities before the war and may have added to tension, but researchers disagree about how important it was. The direct cause of the mass flight was the war itself.",
            guideRef: "syria",
          },
          {
            id: "pchange-mcq-p4-q17",
            question: "Many people now crossing the US–Mexico border come from Central America and further away. What role does Mexico play for them?",
            options: ["A source country", "A transit country", "A host country with a refugee camp", "An intervening opportunity only"],
            answerIndex: 1,
            hint: "They pass through Mexico on their way to somewhere else.",
            explanation:
              "Mexico has become a transit country that migrants travel through. Some do settle in Mexico, but for most it lies on the route rather than being the destination or the origin.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-mcq-p4-q18",
            question: "The Poland-born population of the UK was about 60,000 in 2001 and about 1,000,000 in 2017. Roughly how many times larger was it in 2017?",
            options: ["About 1.6 times", "About 6 times", "About 160 times", "About 16 times"],
            answerIndex: 3,
            hint: "1,000,000 ÷ 60,000.",
            explanation:
              "1,000,000 ÷ 60,000 ≈ 16.7, so roughly 16–17 times larger — the closest option is about 16 times. 1.6 times is an error of one decimal place.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-mcq-p4-q19",
            question: "What is the main advantage of using a diamond ranking rather than a simple list of migration factors?",
            options: [
              "It means you do not need evidence",
              "It always gives the same answer for every migrant",
              "It forces you to compare factors and justify which matter most",
              "It removes the need to write a conclusion",
            ],
            answerIndex: 2,
            hint: "Think about what the 1–2–3–2–1 shape makes you do.",
            explanation:
              "The diamond forces decisions about relative significance, which you then justify. The ranking should change for different migrants, and you still need evidence and a conclusion.",
            guideRef: "significance",
          },
          {
            id: "pchange-mcq-p4-q20",
            question: "In recent years the UK's births have only slightly exceeded deaths, while net migration has been hundreds of thousands a year. Which judgement is best supported?",
            options: [
              "Net migration has been the most significant component of UK population growth",
              "Natural increase has been the most significant component of UK population growth",
              "Emigration has caused the UK's population to fall",
              "Migration has had no effect on the UK's population",
            ],
            answerIndex: 0,
            hint: "Compare the size of the two components.",
            explanation:
              "When natural increase is small and net migration is large and positive, migration is the dominant component. The UK's population has been growing, not falling.",
            guideRef: "significance",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "pchange-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "pchange-qa-p1-q01",
            question: "Name the three components of population change.",
            marks: 3,
            hint: "Two are 'natural' and one involves people moving.",
            modelAnswer: "The three components are births, deaths and migration (immigration and emigration).",
            markScheme: [
              { point: "Births", keywords: ["birth", "born", "fertility", "babies"] },
              { point: "Deaths", keywords: ["death", "die", "mortality", "dying"] },
              { point: "Migration", keywords: ["migrat", "immigra", "emigra", "moving"] },
            ],
            commonError: "Writing 'immigration and emigration' as two separate components and leaving out births or deaths.",
            guideRef: "components",
          },
          {
            id: "pchange-qa-p1-q02",
            question: "What is meant by 'natural increase'?",
            marks: 2,
            hint: "It only involves two of the three components.",
            modelAnswer:
              "Natural increase is when the number of births is greater than the number of deaths in a population, so the population grows without counting migration. It can be calculated as the birth rate minus the death rate.",
            markScheme: [
              { point: "Births are greater than deaths", keywords: ["more births", "births exceed", "births is greater", "births are greater", "outnumber", "more babies"] },
              { point: "Calculated as birth rate minus death rate / ignores migration", keywords: ["minus", "subtract", "birth rate - death rate", "birth rate − death rate", "not including migration", "without migration"] },
            ],
            commonError: "Saying 'when the population increases' — that could be due to migration, so it is not a definition of NATURAL increase.",
            guideRef: "components",
          },
          {
            id: "pchange-qa-p1-q03",
            question: "A country has a crude birth rate of 25 per 1,000 and a crude death rate of 8 per 1,000. Calculate the rate of natural increase as a percentage. Show your working.",
            marks: 2,
            hint: "(CBR − CDR) ÷ 10.",
            modelAnswer: "25 − 8 = 17 per 1,000. 17 ÷ 10 = 1.7% natural increase per year.",
            markScheme: [
              { point: "Subtracts: 25 − 8 = 17", keywords: ["17", "25 - 8", "25 − 8", "25-8"] },
              { point: "Divides by 10 to give 1.7%", keywords: ["1.7", "1.7%", "1.7 percent"] },
            ],
            commonError: "Giving the answer as 17% by forgetting that the rates are per 1,000, not per 100.",
            guideRef: "components",
          },
          {
            id: "pchange-qa-p1-q04",
            question: "Explain the difference between internal and international migration. Give an example of each.",
            marks: 4,
            hint: "Think about whether a border is crossed.",
            modelAnswer:
              "Internal migration is when people move within the same country, for example a worker moving from a village in Sichuan to the city of Shenzhen in China. International migration is when people move from one country to another, crossing a national border, for example a Filipina domestic worker moving to Singapore.",
            markScheme: [
              { point: "Internal = within the same country", keywords: ["within", "same country", "inside", "one country"] },
              { point: "Valid example of internal migration", keywords: ["shenzhen", "sichuan", "dhaka", "china", "village to", "rural"] },
              { point: "International = between countries / crossing a border", keywords: ["another country", "different country", "border", "between countries", "abroad"] },
              { point: "Valid example of international migration", keywords: ["singapore", "uk", "usa", "turkey", "germany", "poland"] },
            ],
            commonError: "Giving examples that do not match the definition, such as calling a move from Malaysia to Singapore internal.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-qa-p1-q05",
            question: "What is the difference between a refugee and an asylum seeker?",
            marks: 2,
            hint: "One is still waiting for a decision.",
            modelAnswer:
              "An asylum seeker is someone who has fled to another country and applied for protection, but whose claim has not yet been decided. A refugee is someone who has been forced to flee persecution or war across a border and is recognised as needing protection.",
            markScheme: [
              { point: "Asylum seeker has applied and is waiting for a decision", keywords: ["waiting", "applied", "not yet", "decision", "pending", "claim"] },
              { point: "Refugee is recognised as fleeing persecution/war and needing protection", keywords: ["recognised", "recognized", "granted", "accepted", "persecut", "refugee status"] },
            ],
            commonError: "Thinking asylum seekers are 'illegal' — applying for asylum is a legal right.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-qa-p1-q06",
            question: "Give two push factors and two pull factors that explain migration from Mexico to the USA.",
            marks: 4,
            hint: "Push factors are in Mexico; pull factors are in the USA.",
            modelAnswer:
              "Push factors in Mexico include low wages and unemployment, especially in rural states such as Oaxaca, and violence linked to drug cartels. Pull factors in the USA include much higher wages and plenty of jobs in farming and construction, and family members already living in cities such as Los Angeles.",
            markScheme: [
              { point: "First push factor (e.g. low wages/unemployment in Mexico)", keywords: ["low wage", "low pay", "unemploy", "poverty", "poor"] },
              { point: "Second push factor (e.g. violence/crime/cartels)", keywords: ["violence", "crime", "cartel", "drug", "danger", "gang"] },
              { point: "First pull factor (e.g. higher wages/jobs in USA)", keywords: ["higher wage", "better pay", "more money", "jobs", "work"] },
              { point: "Second pull factor (e.g. family networks/services)", keywords: ["family", "relative", "friends", "community", "school", "healthcare"] },
            ],
            commonError: "Putting factors in the wrong place, e.g. calling 'jobs in the USA' a push factor.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-qa-p1-q07",
            question: "Describe the main parts of Lee's model of migration.",
            marks: 4,
            hint: "There are four parts: two places, what lies between them, and the individual.",
            modelAnswer:
              "Lee's model (1966) says that the origin has positive, negative and neutral factors, and so does the destination. Between them are intervening obstacles such as distance, cost, borders and immigration laws, which make migration harder. Finally, personal factors such as age, family, skills and personality decide how each individual weighs up these factors and whether they move.",
            markScheme: [
              { point: "Origin has positive/negative/neutral factors", keywords: ["origin", "where they live", "home area", "source"] },
              { point: "Destination has positive/negative/neutral factors", keywords: ["destination", "where they move to", "host"] },
              { point: "Intervening obstacles between the two", keywords: ["intervening", "obstacle", "barrier", "distance", "cost"] },
              { point: "Personal factors", keywords: ["personal", "family", "skills", "individual", "personality"] },
            ],
            commonError: "Only describing push and pull factors and missing the obstacles and personal factors that make Lee's model special.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-qa-p1-q08",
            question: "What are remittances? Explain one way they can benefit a source country.",
            marks: 3,
            hint: "Define, then explain what the money is spent on and why that matters.",
            modelAnswer:
              "Remittances are money sent home by migrants to their families in the source country. They can benefit the source country because families spend the money on things such as school fees, healthcare and better housing, which reduces poverty and improves people's quality of life. For example, Mexico received about US$65 billion in 2024.",
            markScheme: [
              { point: "Definition: money sent home by migrants", keywords: ["money sent", "send money", "sent home", "sent back", "send back"] },
              { point: "Identifies a use (education, food, housing, business)", keywords: ["school", "education", "food", "housing", "business", "health"] },
              { point: "Explains the effect (reduces poverty / improves living standards / economy)", keywords: ["poverty", "quality of life", "living standard", "economy", "develop"] },
            ],
            commonError: "Defining remittances correctly but not explaining HOW the money helps.",
            guideRef: "impacts",
          },
          {
            id: "pchange-qa-p1-q09",
            question: "Explain what is meant by 'brain drain' and why it is a problem. Use an example.",
            marks: 3,
            hint: "Who leaves, and what does the source country lose?",
            modelAnswer:
              "Brain drain is when highly skilled and educated people, such as doctors and nurses, emigrate from a country. It is a problem because the source country loses their skills and the money it spent training them, so services suffer. For example, many nurses trained in Zimbabwe now work in the UK, leaving Zimbabwean hospitals short of staff.",
            markScheme: [
              { point: "Definition: skilled/educated people emigrate", keywords: ["skilled", "educated", "qualified", "professional", "doctor", "nurse"] },
              { point: "Problem explained: loss of skills/training cost/services suffer", keywords: ["lose", "loss", "shortage", "training", "short of"] },
              { point: "Named example", keywords: ["zimbabwe", "philippines", "india", "syria", "poland", "nigeria"] },
            ],
            commonError: "Confusing brain drain with any emigration — it is specifically about skilled people.",
            guideRef: "impacts",
          },
          {
            id: "pchange-qa-p1-q10",
            question:
              "Singapore's population in 2024 was about 6.0 million: citizens 3.6 million; permanent residents 0.5 million; non-residents 1.9 million. (a) Calculate the percentage of the population who were non-residents. (b) Name two types of Singapore work pass.",
            marks: 3,
            hint: "(a) part ÷ total × 100. (b) One is for professionals; one is for lower-wage jobs.",
            modelAnswer:
              "(a) 1.9 ÷ 6.0 × 100 = about 32%. (b) Two work passes are the Employment Pass (for professionals and managers) and the Work Permit (for lower-wage workers such as construction workers). The S Pass for mid-skilled workers is another.",
            markScheme: [
              { point: "About 32% (accept 31–32%)", keywords: ["32", "31", "31.7", "a third"] },
              { point: "Names one work pass", keywords: ["work permit", "employment pass", "s pass", "permit"] },
              { point: "Names a second, different work pass", keywords: ["work permit", "s pass", "employment pass"] },
            ],
            commonError: "Dividing by the citizen number (3.6) instead of the total population (6.0).",
            guideRef: "singapore",
          },
          {
            id: "pchange-qa-p1-q11",
            question: "Explain why most Syrian refugees went to neighbouring countries rather than to Europe.",
            marks: 4,
            hint: "Think about distance, cost, danger and the hope of returning home.",
            modelAnswer:
              "Most Syrian refugees fled to neighbouring countries such as Turkey (about 3.6 million at the peak), Lebanon and Jordan because they were close and could be reached quickly over land when fleeing danger. Travelling to Europe meant large intervening obstacles: expensive smugglers, dangerous sea crossings and closed borders. Many families had little money left. Also, staying close to Syria meant they could return home more easily when the fighting stopped, and some had relatives or shared language and culture in these countries.",
            markScheme: [
              { point: "Neighbouring countries were close / reachable by land", keywords: ["close", "near", "neighbour", "short distance", "by land", "border"] },
              { point: "Intervening obstacles to Europe (cost, danger, sea, borders)", keywords: ["expensive", "cost", "dangerous", "sea crossing", "smuggl", "boat"] },
              { point: "Hoped to return home soon", keywords: ["return", "go back", "go home", "temporary"] },
              { point: "Uses evidence (named country/figure)", keywords: ["turkey", "lebanon", "jordan", "3.6", "1.5 million"] },
            ],
            commonError: "Saying refugees 'chose' the neighbouring countries for jobs — most were fleeing quickly and had little choice.",
            guideRef: "syria",
          },
          {
            id: "pchange-qa-p1-q12",
            question: "Explain why many Polish people migrated to the UK after 2004.",
            marks: 4,
            hint: "Consider a push, a pull and an obstacle that was removed.",
            modelAnswer:
              "In 2004 Poland joined the EU, which gave Polish people the legal right to work in the UK — one of only three countries to open its labour market straight away. There were strong push factors in Poland, where unemployment was about 19% and wages were low. The UK had pull factors such as jobs in construction, farming and hospitality, with wages several times higher. Cheap flights also reduced the cost of moving.",
            markScheme: [
              { point: "Poland joined EU in 2004 — legal right to work", keywords: ["joined the eu", "european union", "2004", "free movement", "right to work"] },
              { point: "Push: high unemployment/low wages in Poland", keywords: ["unemploy", "19", "low wage", "low pay", "few jobs"] },
              { point: "Pull: jobs/higher wages in UK", keywords: ["higher wage", "better pay", "jobs", "construction", "farm", "hospitality"] },
              { point: "Reduced obstacles e.g. cheap flights / UK opened labour market", keywords: ["cheap flight", "budget airline", "flights", "only three", "ireland and sweden"] },
            ],
            commonError: "Ignoring EU entry — the key change in 2004 was the removal of a legal obstacle.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-qa-p1-q13",
            question: "Explain two negative impacts that immigration can have on a host area.",
            marks: 4,
            hint: "Identify each impact, then explain how and why it happens.",
            modelAnswer:
              "One negative impact is increased pressure on services: if many people arrive quickly, there is more demand for housing, schools and hospitals, which can lead to overcrowding and higher rents, as happened in Lebanon when about 1.5 million Syrians arrived. A second is social tension: if migrants are not well integrated, some local people may feel they are competing for jobs or housing, which can lead to discrimination.",
            markScheme: [
              { point: "Identifies pressure on services/housing", keywords: ["pressure", "housing", "school", "hospital", "service", "overcrowd"] },
              { point: "Explains how (more demand, rent, waiting lists)", keywords: ["demand", "rent", "waiting", "crowded", "shortage"] },
              { point: "Identifies tension/competition for jobs", keywords: ["tension", "conflict", "discriminat", "competition", "compete", "racism"] },
              { point: "Explains with development or example", keywords: ["lebanon", "integrat", "wages", "low-paid", "feel"] },
            ],
            commonError: "Listing several impacts without explaining any of them.",
            guideRef: "impacts",
          },
          {
            id: "pchange-qa-p1-q14",
            question:
              "Classify each migrant using two terms (e.g. internal/international and voluntary/forced): (a) a Rohingya family fleeing violence in Myanmar to Bangladesh; (b) a young woman moving from a village in Java to work in Jakarta; (c) an Indian software engineer moving to Singapore on an Employment Pass.",
            marks: 3,
            hint: "Ask: did they cross a border? Did they choose to move?",
            modelAnswer:
              "(a) International and forced — they are refugees. (b) Internal and voluntary — rural–urban migration within Indonesia. (c) International and voluntary — an economic migrant.",
            markScheme: [
              { point: "(a) international + forced / refugee", keywords: ["refugee", "forced", "international and forced"] },
              { point: "(b) internal + voluntary / rural–urban", keywords: ["internal", "rural-urban", "rural–urban", "rural to urban"] },
              { point: "(c) international + voluntary / economic migrant", keywords: ["economic", "voluntary", "skilled"] },
            ],
            commonError: "Calling the Javanese woman an international migrant because Jakarta is a capital city — she stayed in Indonesia.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-qa-p1-q15",
            question: "Explain why Singapore's population has continued to grow even though its birth rate is very low. (6 marks)",
            marks: 6,
            hint: "Use the components of population change, then explain the role of migration with evidence.",
            modelAnswer:
              "Singapore's resident total fertility rate was only about 0.97 in 2023 and 2024, far below the replacement level of 2.1, so natural increase is very small. However, population change depends on migration as well as births and deaths. Singapore has a large net migration gain: about 1.9 million of its roughly 6 million people are non-residents, including about 1.5 million foreign workers. These migrants are attracted by pull factors such as much higher wages than in Bangladesh, India or Indonesia, plenty of jobs in construction, domestic work and finance, and a safe, well-run city. The government allows this immigration through work passes because the ageing population and low birth rate mean there are not enough local workers. Also, life expectancy is high, so relatively few people die each year. Therefore immigration is the most significant reason the population keeps growing.",
            markScheme: [
              { point: "Point: very low birth rate / TFR so little natural increase", keywords: ["0.97", "low birth", "low fertility", "tfr", "below replacement", "natural increase"] },
              { point: "Point: migration/immigration adds people", keywords: ["immigra", "migrat", "foreign worker", "non-resident", "move to singapore"] },
              { point: "Evidence: figure for migrants or population", keywords: ["1.9", "1.5 million", "6 million", "300,000", "31", "32"] },
              { point: "Explanation of pull factors (wages, jobs, safety)", keywords: ["wage", "jobs", "safe", "pull", "salary"] },
              { point: "Explanation of why government allows it (ageing, labour shortage)", keywords: ["ageing", "aging", "shortage", "not enough", "work pass", "elderly"] },
              { point: "Link/judgement: migration most significant component", keywords: ["most significant", "main reason", "therefore", "overall", "most important"] },
            ],
            commonError: "Only describing Singapore's low birth rate and never explaining how migration outweighs it.",
            guideRef: "singapore",
          },
        ],
      },
      {
        id: "pchange-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "pchange-qa-p2-q01",
            question: "Write down the formula for calculating population change.",
            marks: 2,
            hint: "It has two brackets — one for natural change and one for migration.",
            modelAnswer: "Population change = (births − deaths) + (immigrants − emigrants).",
            markScheme: [
              { point: "Births minus deaths", keywords: ["births - deaths", "births minus deaths", "births take away deaths", "b - d", "natural change"] },
              { point: "Plus immigrants minus emigrants", keywords: ["immigrants - emigrants", "immigrants minus emigrants", "immigration - emigration", "immigration minus emigration", "net migration"] },
            ],
            commonError: "Writing emigrants − immigrants, which reverses the effect of migration.",
            guideRef: "components",
          },
          {
            id: "pchange-qa-p2-q02",
            question:
              "Country Z in one year: births 120,000; deaths 80,000; immigrants 30,000; emigrants 50,000. Calculate (a) natural change, (b) net migration, (c) total population change.",
            marks: 3,
            hint: "Keep track of plus and minus signs.",
            modelAnswer:
              "(a) Natural change = 120,000 − 80,000 = +40,000. (b) Net migration = 30,000 − 50,000 = −20,000. (c) Total change = 40,000 − 20,000 = +20,000.",
            markScheme: [
              { point: "Natural change +40,000", keywords: ["40,000", "40000", "40 000"] },
              { point: "Net migration −20,000", keywords: ["-20,000", "−20,000", "-20000", "minus 20"] },
              { point: "Total +20,000", keywords: ["+20,000", "+20000", "total 20", "= 20,000", "grew by 20", "increase of 20"] },
            ],
            commonError: "Writing net migration as +20,000 because the minus sign was dropped.",
            guideRef: "components",
          },
          {
            id: "pchange-qa-p2-q03",
            question: "Japan's population is falling because of natural decrease. Explain why Japan has more deaths than births.",
            marks: 4,
            hint: "Explain both sides: why so few births, and why so many deaths.",
            modelAnswer:
              "Japan has very few births because many people marry later or not at all, raising children is expensive, housing in cities is small and many women face difficulties combining careers with family. At the same time it has a very old population — about 29% of people are 65 or over — so even though life expectancy is high, many elderly people die each year. In 2024 there were only about 0.69 million births but about 1.6 million deaths, a natural decrease of roughly 900,000.",
            markScheme: [
              { point: "Reason for low births (cost, late marriage, careers)", keywords: ["cost", "expensive", "late marriage", "marry later", "career", "childcare"] },
              { point: "Develops low birth rate / low fertility", keywords: ["low birth", "few births", "fewer births", "fewer babies", "fertility", "few children"] },
              { point: "Ageing population means many deaths", keywords: ["ageing", "aging", "elderly", "old", "65"] },
              { point: "Uses evidence (births/deaths figures or %)", keywords: ["0.69", "1.6 million", "900,000", "29", "686"] },
            ],
            commonError: "Saying Japan's death rate is high because healthcare is poor — it is high because the population is so old.",
            guideRef: "components",
          },
          {
            id: "pchange-qa-p2-q04",
            question: "Explain the difference between voluntary and forced migration, using an example of each.",
            marks: 4,
            hint: "Think about choice and the cause.",
            modelAnswer:
              "Voluntary migration is when a person chooses to move, usually to improve their life, for example a Polish builder moving to the UK in 2005 for higher wages. Forced migration is when people have little or no choice because their lives are in danger from war, persecution or disaster, for example Syrians fleeing the civil war to Turkey.",
            markScheme: [
              { point: "Voluntary = chooses to move", keywords: ["choose", "choice", "decide", "want to", "own free will"] },
              { point: "Valid voluntary example", keywords: ["poland", "polish", "mexic", "filipin", "economic", "singapore"] },
              { point: "Forced = no choice, danger/war/disaster", keywords: ["no choice", "forced", "war", "danger", "disaster", "persecut"] },
              { point: "Valid forced example", keywords: ["syria", "ukrain", "rohingya", "montserrat", "refugee"] },
            ],
            commonError: "Giving 'moving for a job' as forced because the person was poor — poverty usually still leaves some choice.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-qa-p2-q05",
            question: "What is an internally displaced person (IDP)? Give an example.",
            marks: 2,
            hint: "Displaced — but where?",
            modelAnswer:
              "An IDP is someone forced to leave their home who stays within their own country, without crossing an international border — for example the 6–7 million Syrians displaced inside Syria during the civil war.",
            markScheme: [
              { point: "Forced from home but remains in own country", keywords: ["own country", "same country", "within", "not crossed", "inside"] },
              { point: "Valid example", keywords: ["syria", "sudan", "ukraine", "yemen", "congo", "myanmar"] },
            ],
            commonError: "Confusing IDPs with refugees, who have crossed a border.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-qa-p2-q06",
            question:
              "Classify each factor as economic, social, political or environmental: (a) a drought destroys crops; (b) a government arrests its critics; (c) a factory offers higher wages; (d) a city has better secondary schools.",
            marks: 4,
            hint: "Money, people's wellbeing, government, or nature?",
            modelAnswer: "(a) environmental; (b) political; (c) economic; (d) social.",
            markScheme: [
              { point: "(a) environmental", keywords: ["environment", "(a) environ", "a environ", "a = environ"] },
              { point: "(b) political", keywords: ["politic", "b) politic", "b = politic"] },
              { point: "(c) economic", keywords: ["economic", "c) economic", "c = economic"] },
              { point: "(d) social", keywords: ["social", "d) social", "d = social"] },
            ],
            commonError: "Calling better schools 'economic' — education is a social factor even if it leads to better jobs later.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-qa-p2-q07",
            question: "What are intervening obstacles? Explain how two different obstacles can stop or slow migration.",
            marks: 3,
            hint: "They lie between the origin and destination.",
            modelAnswer:
              "Intervening obstacles are barriers between the origin and destination that make migration more difficult. For example, the cost of travel and agent fees may be too high for poor families to afford, so they cannot leave. Immigration laws and visas may refuse entry, as the end of free movement after Brexit did for many EU citizens wishing to move to the UK.",
            markScheme: [
              { point: "Definition: barriers between origin and destination", keywords: ["between", "barrier", "harder", "difficult", "in the way"] },
              { point: "First obstacle explained (e.g. cost/distance)", keywords: ["cost", "expensive", "distance", "far away", "fees", "afford"] },
              { point: "Second obstacle explained (e.g. laws/visas/borders/physical)", keywords: ["visa", "law", "border", "wall", "sea crossing", "desert"] },
            ],
            commonError: "Giving push factors (such as war) as obstacles — obstacles are between places, not reasons to leave.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-qa-p2-q08",
            question: "Explain how emigration can lead to an ageing population in the source area.",
            marks: 3,
            hint: "Who migrates, who stays, and what happens to births?",
            modelAnswer:
              "Most migrants are young adults of working age, so when they leave, the people left behind are mostly older people and children. This raises the average age of the population. Also, because young adults of child-bearing age have gone, fewer babies are born, so over time the population becomes even older.",
            markScheme: [
              { point: "Migrants are mostly young adults", keywords: ["young", "working age", "20", "adults"] },
              { point: "Older people left behind / average age rises", keywords: ["elderly", "old", "left behind", "average age", "older"] },
              { point: "Fewer births because parents have gone", keywords: ["fewer births", "fewer babies", "birth rate", "child-bearing", "have children"] },
            ],
            commonError: "Saying 'old people move in' — the population ages because the young leave.",
            guideRef: "impacts",
          },
          {
            id: "pchange-qa-p2-q09",
            question: "Explain two positive impacts of immigration on a host country.",
            marks: 4,
            hint: "Think about the economy and society.",
            modelAnswer:
              "First, immigrants fill labour shortages in jobs such as construction, care and healthcare — in Singapore, foreign workers built many HDB estates and MRT lines. This helps the economy grow. Second, most immigrants are of working age and pay taxes, which helps pay for services and pensions for an ageing population, as in Germany and the UK.",
            markScheme: [
              { point: "Identifies filling labour/job shortages", keywords: ["labour", "shortage", "fill jobs", "workers", "workforce"] },
              { point: "Develops with example or effect (economy grows, named jobs)", keywords: ["construction", "care", "nhs", "hdb", "economy", "nurse"] },
              { point: "Identifies taxes / support ageing population", keywords: ["tax", "pension", "ageing", "aging", "elderly"] },
              { point: "Develops second impact or gives cultural diversity explained", keywords: ["pay for", "services", "diversity", "culture", "food", "business"] },
            ],
            commonError: "Writing 'they help the economy' without saying how.",
            guideRef: "impacts",
          },
          {
            id: "pchange-qa-p2-q10",
            question: "Explain two pull factors that attract foreign workers to Singapore.",
            marks: 4,
            hint: "Identify a pull factor, then explain why it matters to the migrant.",
            modelAnswer:
              "One pull factor is higher wages: a construction worker from Bangladesh can earn several times more in Singapore than at home, so he can send remittances to support his family. A second pull factor is Singapore's strong economy and range of jobs, from construction and shipyards to finance and technology, as well as its safety, good infrastructure and use of English, which make it an attractive and easy place to work.",
            markScheme: [
              { point: "Identifies higher wages", keywords: ["wage", "salary", "pay", "earn", "money"] },
              { point: "Develops (e.g. several times more than home, send remittances)", keywords: ["several times", "remittance", "send", "family", "bangladesh", "india"] },
              { point: "Identifies jobs/strong economy", keywords: ["jobs", "economy", "construction", "finance", "employment"] },
              { point: "Identifies safety/English/infrastructure with development", keywords: ["safe", "english", "infrastructure", "clean", "healthcare", "close"] },
            ],
            commonError: "Giving push factors from the home country when the question asks about pulls to Singapore.",
            guideRef: "singapore",
          },
          {
            id: "pchange-qa-p2-q11",
            question: "Describe the impacts of Syrian refugees on Lebanon.",
            marks: 4,
            hint: "Think about scale, services, the economy and society.",
            modelAnswer:
              "Lebanon received about 1.5 million Syrians, roughly one in four or five of its population — the most refugees per person of any country. This put great pressure on services: schools had to run double shifts, and water, electricity and hospitals were stretched. Rents rose as demand for housing increased, and some Lebanese workers felt they were competing with Syrians for low-paid jobs, increasing tension. However, Syrians also provided labour, for example in farming and construction, and international aid money came into the country.",
            markScheme: [
              { point: "Scale with evidence (1.5 million / 1 in 4–5)", keywords: ["1.5", "1 in 4", "one in four", "1 in 5", "quarter"] },
              { point: "Pressure on services (schools, water, health)", keywords: ["school", "double shift", "water", "electric", "hospital", "service"] },
              { point: "Housing/rent or jobs competition", keywords: ["rent", "housing", "jobs", "compet", "wage"] },
              { point: "Social tension or a positive (labour/aid)", keywords: ["tension", "conflict", "aid", "labour", "worker"] },
            ],
            commonError: "Writing about impacts on Syria instead of Lebanon.",
            guideRef: "syria",
          },
          {
            id: "pchange-qa-p2-q12",
            question: "Explain the impacts of emigration to the USA on Mexico.",
            marks: 4,
            hint: "Mexico is the source area: consider money, people and communities.",
            modelAnswer:
              "A major positive impact is remittances: Mexico received about US$65 billion in 2024, which families use for food, housing, school fees and small businesses. Emigration also reduces unemployment. However, some rural villages have lost many of their young men, leaving older people, women and children behind, so there are fewer workers for farming and families are separated for years.",
            markScheme: [
              { point: "Remittances identified", keywords: ["remittance", "money sent", "send money", "sent home"] },
              { point: "Evidence: about US$65 billion", keywords: ["65", "billion", "us$65", "$65"] },
              { point: "Loss of young workers / ageing villages", keywords: ["young", "village", "elderly", "older people", "fewer workers", "labour"] },
              { point: "Social impact: families separated / reduced unemployment", keywords: ["famil", "separat", "unemploy", "children"] },
            ],
            commonError: "Writing about impacts on the USA instead of Mexico.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-qa-p2-q13",
            question:
              "Study the data on the Poland-born population of the UK. 2001: about 60,000; 2011: about 580,000; 2017 (peak): about 1,000,000; 2021: about 740,000 (England and Wales). Describe the trend shown.",
            marks: 4,
            hint: "Overall trend, figures, the peak, and the change after it.",
            modelAnswer:
              "The Poland-born population rose very rapidly between 2001 and 2017, from about 60,000 to about 1,000,000 — roughly a sixteen-fold increase, with the fastest growth after Poland joined the EU in 2004. It peaked in about 2017. After that it fell to about 740,000 by 2021, a decrease of roughly a quarter, as some Poles returned home after the Brexit vote.",
            markScheme: [
              { point: "Overall trend: rapid increase then decrease", keywords: ["increase", "rose", "grew", "rise", "went up"] },
              { point: "Quotes figures for the increase", keywords: ["60,000", "1,000,000", "1 million", "580,000", "16 times", "sixteen"] },
              { point: "Identifies peak around 2017", keywords: ["peak", "2017", "highest"] },
              { point: "Identifies decline after peak with figure", keywords: ["740,000", "fell", "decrease", "declin", "dropped"] },
            ],
            commonError: "Explaining reasons (EU, Brexit) at length but not quoting the data — 'describe' needs figures.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-qa-p2-q14",
            question: "Explain the difference between 'brain drain' and 'brain gain'.",
            marks: 3,
            hint: "Which way are the skills flowing?",
            modelAnswer:
              "Brain drain is the loss of skilled and educated people, such as doctors and engineers, when they emigrate, so the source country loses their skills. Brain gain is when a country gains skills — for example when migrants return home with new skills, savings and ideas, or when a host country receives skilled immigrants. For example, Germany gained thousands of Syrian doctors, which was a brain drain for Syria.",
            markScheme: [
              { point: "Brain drain = loss of skilled people through emigration", keywords: ["loss", "lose", "leave", "emigrat"] },
              { point: "Brain gain = gaining skills (returnees or skilled immigrants)", keywords: ["return", "gain", "come back", "receive", "bring back"] },
              { point: "Example of either", keywords: ["syria", "germany", "zimbabwe", "nurse", "doctor", "poland"] },
            ],
            commonError: "Thinking brain gain only happens in the host country — returning migrants also create brain gain for the source.",
            guideRef: "impacts",
          },
          {
            id: "pchange-qa-p2-q15",
            question: "'Economic factors are the most significant cause of migration.' To what extent do you agree? (6 marks)",
            marks: 6,
            hint: "Argue for economic factors with evidence, then consider other factors, then judge.",
            modelAnswer:
              "I agree to a large extent. Most international migrants are economic migrants. For example, after 2004 hundreds of thousands of Poles moved to the UK because unemployment in Poland was about 19% and UK wages were several times higher, and about 1.5 million foreign workers come to Singapore mainly for higher wages. Economic factors also explain rural–urban migration of nearly 300 million workers in China. However, for forced migrants political factors are far more significant: over 6 million Syrians fled abroad because of war, not wages, and they went to the nearest safe countries such as Turkey rather than the richest. Environmental factors, such as rising seas in Tuvalu, may become more significant in future. Overall, economic factors are the most significant cause of voluntary migration and of migration as a whole, but for refugees conflict and persecution are far more important, so the answer depends on the type of migration.",
            markScheme: [
              { point: "Argues economic factors are significant (wages, jobs)", keywords: ["wage", "jobs", "economic", "money", "unemploy"] },
              { point: "Evidence for economic factors (named case + figure)", keywords: ["poland", "19", "singapore", "1.5 million", "mexic", "china"] },
              { point: "Counter-argument: political/conflict causes forced migration", keywords: ["war", "conflict", "persecut", "political", "forced"] },
              { point: "Evidence for counter-argument", keywords: ["syria", "6 million", "turkey", "ukrain", "rohingya"] },
              { point: "Considers another factor (environmental/social)", keywords: ["environment", "climate", "drought", "family", "education", "tuvalu"] },
              { point: "Justified overall judgement", keywords: ["overall", "to a large extent", "depends", "partly", "in conclusion", "agree"] },
            ],
            commonError: "Agreeing completely without considering forced migration, or failing to reach a judgement.",
            guideRef: "significance",
          },
        ],
      },
      {
        id: "pchange-qa-p3",
        title: "Written Paper 3",
        questions: [
          {
            id: "pchange-qa-p3-q01",
            question:
              "Study the data. Niger: crude birth rate 44 per 1,000, crude death rate 8 per 1,000. Japan: crude birth rate 6 per 1,000, crude death rate 13 per 1,000. Calculate the rate of natural change for each country and compare them.",
            marks: 4,
            hint: "(CBR − CDR) ÷ 10 for each, then say what the results mean.",
            modelAnswer:
              "Niger: (44 − 8) ÷ 10 = +3.6% natural increase. Japan: (6 − 13) ÷ 10 = −0.7%, a natural decrease. Niger's population is growing very rapidly from natural increase, whereas Japan's is shrinking naturally because deaths exceed births. The difference between them is 4.3 percentage points.",
            markScheme: [
              { point: "Niger = +3.6%", keywords: ["3.6", "+3.6", "3.6%"] },
              { point: "Japan = −0.7%", keywords: ["-0.7", "−0.7", "minus 0.7", "0.7"] },
              { point: "Niger has natural increase / growing fast", keywords: ["niger is growing", "natural increase", "growing", "increase"] },
              { point: "Japan has natural decrease / shrinking", keywords: ["natural decrease", "shrink", "falling", "decreas", "declin"] },
            ],
            commonError: "Getting Japan's answer as +0.7% by subtracting the birth rate from the death rate.",
            guideRef: "components",
          },
          {
            id: "pchange-qa-p3-q02",
            question: "Singapore's total population was about 3.0 million in 1990 and about 6.0 million in 2024. Calculate the percentage change.",
            marks: 2,
            hint: "(new − old) ÷ old × 100.",
            modelAnswer: "Change = 6.0 − 3.0 = 3.0 million. (3.0 ÷ 3.0) × 100 = 100% increase — the population doubled.",
            markScheme: [
              { point: "Finds the change of 3.0 million", keywords: ["3.0 million", "3 million", "6.0 - 3.0", "6 - 3", "6 − 3"] },
              { point: "Answer: 100% increase / doubled", keywords: ["100", "doubled", "double"] },
            ],
            commonError: "Dividing by the new population (6.0) to get 50%.",
            guideRef: "singapore",
          },
          {
            id: "pchange-qa-p3-q03",
            question: "Explain why rural–urban migration is happening in many lower-income countries.",
            marks: 4,
            hint: "Consider push factors in the countryside and pull factors in the city.",
            modelAnswer:
              "In rural areas there are push factors such as a lack of jobs, low and unreliable farm incomes, and poor access to schools, hospitals, electricity and clean water. Droughts or floods can destroy crops. Cities have pull factors: jobs in factories, construction and services that pay more, better schools and healthcare, and the hope of a better quality of life. For example, nearly 300 million rural migrant workers in China have moved to cities such as Shenzhen for factory work.",
            markScheme: [
              { point: "Rural push: few jobs/low incomes", keywords: ["few jobs", "lack of jobs", "low income", "low wage", "poverty", "farm"] },
              { point: "Rural push: poor services or environmental problems", keywords: ["school", "hospital", "service", "drought", "flood", "electric"] },
              { point: "Urban pull: jobs/higher wages", keywords: ["factory", "factories", "jobs", "higher wage", "pay more", "employment"] },
              { point: "Example with evidence", keywords: ["china", "shenzhen", "300 million", "dhaka", "lagos", "mumbai"] },
            ],
            commonError: "Only listing pull factors of cities and ignoring what pushes people out of the countryside.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-qa-p3-q04",
            question: "Describe internal migration in China, using figures.",
            marks: 3,
            hint: "Who moves, from where, to where, and how many?",
            modelAnswer:
              "China has nearly 300 million rural migrant workers who have moved from inland provinces such as Sichuan and Henan to coastal cities such as Shenzhen, Guangzhou and Shanghai to work in factories and construction. Shenzhen grew from about 30,000 people in 1979 to over 17 million. Many migrants travel home each year for the Spring Festival.",
            markScheme: [
              { point: "Direction: inland/rural to coastal cities", keywords: ["inland", "coast", "rural", "countryside", "village"] },
              { point: "Named places", keywords: ["sichuan", "henan", "shenzhen", "guangzhou", "shanghai", "anhui"] },
              { point: "Figure (e.g. ~300 million; Shenzhen growth)", keywords: ["300 million", "290", "17 million", "30,000"] },
            ],
            commonError: "Describing the one-child policy instead of migration.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-qa-p3-q05",
            question: "Use Lee's model to explain why a young man from rural Bangladesh migrates to work in construction in Singapore. (6 marks)",
            marks: 6,
            hint: "Work through all four parts of the model and finish with a judgement.",
            modelAnswer:
              "At the origin, rural Bangladesh has negative factors such as low farm wages, few jobs and regular flooding, although there are positive factors such as family and friends. At the destination, Singapore has positive factors such as construction wages several times higher than at home and a safe environment, but also negatives such as living in crowded dormitories and being far from family. Between them there are intervening obstacles: the high fees charged by recruitment agents, the need to pass a skills test and obtain a Work Permit, and the cost of the journey. Personal factors explain why this man goes: he is young, healthy and may need to support his parents and siblings through remittances. Overall, for him the large wage difference outweighs the obstacles and the costs of being separated from his family.",
            markScheme: [
              { point: "Origin negative factors (low wages, few jobs, floods)", keywords: ["low wage", "few jobs", "poverty", "flood", "unemploy", "low pay"] },
              { point: "Destination positive factors (higher wages, jobs)", keywords: ["higher wage", "better pay", "several times", "jobs in singapore", "construction"] },
              { point: "Intervening obstacles (agent fees, work permit, cost)", keywords: ["agent", "fees", "work permit", "cost", "visa", "obstacle"] },
              { point: "Personal factors (young, healthy, family to support)", keywords: ["young", "personal", "family", "healthy", "support", "responsib"] },
              { point: "Recognises negatives at destination or positives at origin", keywords: ["dormitor", "far from family", "lonely", "miss", "positive factors at home", "friends"] },
              { point: "Judgement: benefits outweigh obstacles for him", keywords: ["outweigh", "overall", "therefore", "worth", "decides"] },
            ],
            commonError: "Ignoring the obstacles and personal factors, which turns the answer into a simple push–pull list.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-qa-p3-q06",
            question: "Using an example, explain why push and pull factors change over time.",
            marks: 4,
            hint: "Mexico–USA between 2009 and 2014 is a good example.",
            modelAnswer:
              "Push and pull factors depend on economic, social and political conditions, which change. For example, between about 2009 and 2014 net migration from Mexico to the USA fell to around zero. Mexico's birth rate had fallen, so there were fewer young adults looking for work, and Mexico's economy had improved, weakening the push. At the same time the 2008 financial crisis destroyed many US construction jobs and border enforcement increased, weakening the pull and raising obstacles.",
            markScheme: [
              { point: "Conditions in places change (economy/politics/population)", keywords: ["conditions", "economy", "improv", "weaken", "laws", "policy"] },
              { point: "Named example", keywords: ["mexic", "poland", "brexit", "2009", "2014"] },
              { point: "Weaker push explained (falling birth rate/economy improved)", keywords: ["birth rate", "fewer young", "economy improved", "stronger economy", "wages rose"] },
              { point: "Weaker pull or more obstacles (2008 crisis, enforcement, Brexit)", keywords: ["2008", "financial crisis", "fewer jobs", "border", "enforcement", "brexit"] },
            ],
            commonError: "Describing one moment in time instead of explaining a change.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-qa-p3-q07",
            question: "Explain one positive and one negative SOCIAL impact of emigration on a source area.",
            marks: 4,
            hint: "Social impacts are about people, families, communities, health and education.",
            modelAnswer:
              "A positive social impact is that remittances can pay for children's schooling and healthcare, so the next generation is better educated and healthier — for example in Nepal and the Philippines. A negative social impact is that families are separated for long periods; children may grow up without one or both parents, and elderly relatives may be left without anyone to care for them.",
            markScheme: [
              { point: "Positive social impact identified (education/health)", keywords: ["school", "education", "health", "hospital", "medicine"] },
              { point: "Positive developed (how/why, example)", keywords: ["remittance", "pay for", "nepal", "philippines", "better educated"] },
              { point: "Negative social impact identified (family separation)", keywords: ["famil", "separat", "parent", "children", "lonely"] },
              { point: "Negative developed (elderly left / care / community decline)", keywords: ["elderly", "care", "grow up", "community", "village"] },
            ],
            commonError: "Giving economic impacts (such as unemployment) when the question asks for social ones.",
            guideRef: "impacts",
          },
          {
            id: "pchange-qa-p3-q08",
            question: "Evaluate the benefits and problems of Singapore's reliance on foreign workers. (6 marks)",
            marks: 6,
            hint: "Benefits with evidence, problems with evidence, then a judgement.",
            modelAnswer:
              "Singapore benefits greatly from its foreign workforce of about 1.5 million people. Because the resident fertility rate is only about 0.97, there are not enough local workers, so migrants fill jobs in construction, shipyards and cleaning, and built much of the HDB housing, MRT network and Changi Airport. About 300,000 migrant domestic workers care for children and elderly people, allowing more Singaporean women to work. However, there are problems. Large numbers increase crowding and pressure on housing and transport, and the 2013 Population White Paper, which projected 6.5–6.9 million people by 2030, led to public protest. Some residents worry about competition for professional jobs. Lower-paid workers can face poor conditions, as shown when COVID-19 spread through crowded dormitories in 2020. Overall, foreign workers are essential to Singapore's economy and ageing society, but the benefits depend on careful management through work passes, levies and quotas and on protecting workers' welfare.",
            markScheme: [
              { point: "Benefit: fill labour shortages (construction/care) with reason (low TFR/ageing)", keywords: ["shortage", "construction", "0.97", "ageing", "aging", "not enough"] },
              { point: "Evidence of benefit (HDB/MRT/Changi, 1.5m, 300,000 MDWs)", keywords: ["hdb", "mrt", "changi", "1.5 million", "300,000", "domestic"] },
              { point: "Problem: crowding/pressure on housing or transport", keywords: ["crowd", "housing", "transport", "pressure", "white paper", "6.9"] },
              { point: "Problem: competition for jobs or worker welfare (dormitories)", keywords: ["compet", "dormitor", "covid", "welfare", "exploit"] },
              { point: "Balanced use of connectives", keywords: ["however", "on the other hand", "although", "despite", "whereas"] },
              { point: "Justified judgement", keywords: ["overall", "essential", "in conclusion", "outweigh", "depends"] },
            ],
            commonError: "Writing only about benefits, or only about problems, and never weighing them up.",
            guideRef: "singapore",
          },
          {
            id: "pchange-qa-p3-q09",
            question: "Explain the push factors that caused millions of Syrians to leave their homes after 2011.",
            marks: 4,
            hint: "Think about violence, persecution and the collapse of daily life.",
            modelAnswer:
              "The main push factor was the civil war: cities such as Aleppo and Homs were bombed, making it too dangerous to stay. People also faced persecution, arrest and forced military service. As the war continued, hospitals, schools, electricity and water supplies were destroyed and jobs disappeared, so even areas without fighting became very hard to live in. Some researchers also argue that a severe drought from 2006 to 2010 had already pushed farmers into cities and added to tension.",
            markScheme: [
              { point: "War / bombing / violence", keywords: ["war", "bomb", "fighting", "violence", "conflict"] },
              { point: "Persecution / conscription", keywords: ["persecut", "arrest", "military service", "conscript", "torture"] },
              { point: "Collapse of services / jobs", keywords: ["hospital", "school", "electric", "water", "jobs", "service"] },
              { point: "Named evidence (Aleppo/Homs) or drought", keywords: ["aleppo", "homs", "drought", "2011", "2006"] },
            ],
            commonError: "Writing about pull factors in Europe instead of push factors in Syria.",
            guideRef: "syria",
          },
          {
            id: "pchange-qa-p3-q10",
            question: "Describe three intervening obstacles faced by Syrian refugees trying to reach Europe.",
            marks: 3,
            hint: "Think about the sea, money and borders.",
            modelAnswer:
              "First, crossing the Aegean or Mediterranean Sea in overcrowded small boats was very dangerous, and thousands drowned. Second, smugglers charged large fees, often thousands of dollars per person. Third, borders were closed or fenced along the Balkan route, and the 2016 EU–Turkey deal made it much harder to reach Greece.",
            markScheme: [
              { point: "Dangerous sea crossing", keywords: ["sea", "boat", "drown", "aegean", "mediterranean"] },
              { point: "Cost / smugglers' fees", keywords: ["smuggl", "fee", "cost", "money", "expensive"] },
              { point: "Closed borders / fences / EU–Turkey deal / laws", keywords: ["border", "fence", "deal", "closed", "law", "balkan"] },
            ],
            commonError: "Listing reasons for leaving Syria (push factors) rather than obstacles on the journey.",
            guideRef: "syria",
          },
          {
            id: "pchange-qa-p3-q11",
            question: "Compare migration from Mexico to the USA with migration from Poland to the UK.",
            marks: 4,
            hint: "Give at least one similarity and at least one difference, using 'whereas' or 'both'.",
            modelAnswer:
              "Both are mainly voluntary economic migration driven by a large wage gap and jobs in farming and construction, and both source countries receive remittances. However, Polish migrants had a legal right to work in the UK after 2004 because of EU free movement, whereas many Mexicans faced a heavily guarded border and some crossed without documents. Also, Polish migration fell partly because of Brexit and rising Polish wages, whereas Mexican migration fell after 2009 because of Mexico's falling birth rate, the 2008 US recession and tougher enforcement.",
            markScheme: [
              { point: "Similarity: both economic/wage gap/jobs", keywords: ["both", "economic", "wage", "jobs", "similar"] },
              { point: "Similarity: both have remittances or both declined over time", keywords: ["remittance", "both declined", "both fell", "both changed"] },
              { point: "Difference: legal free movement vs guarded border/undocumented", keywords: ["free movement", "legal", "border", "wall", "undocumented", "illegal"] },
              { point: "Difference in reasons for change / distance / scale", keywords: ["brexit", "birth rate", "2008", "flights", "land border", "whereas"] },
            ],
            commonError: "Writing two separate descriptions without any comparison words or direct comparison.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-qa-p3-q12",
            question: "Explain why remittances are important for many families in source countries.",
            marks: 3,
            hint: "What can the money pay for, and how does that change lives?",
            modelAnswer:
              "Remittances often form a large part of a family's income — in Nepal they are about a quarter of the national economy. Families use them to buy food, pay school and medical fees, and build better houses, which reduces poverty. Some invest in small businesses or land, creating income for the future and jobs for others.",
            markScheme: [
              { point: "Large share of income / evidence", keywords: ["income", "quarter", "nepal", "billion", "large"] },
              { point: "Spent on basic needs/education/health", keywords: ["food", "school", "education", "health", "house"] },
              { point: "Long-term benefit: business/investment/reduced poverty", keywords: ["business", "invest", "poverty", "future", "jobs"] },
            ],
            commonError: "Explaining what remittances are without saying why they matter.",
            guideRef: "impacts",
          },
          {
            id: "pchange-qa-p3-q13",
            question: "Describe how to use a diamond ranking to judge the significance of migration factors, and explain why it is useful.",
            marks: 3,
            hint: "Describe the layout, then say what it makes you do.",
            modelAnswer:
              "You write nine factors on cards and arrange them in a diamond: one most significant at the top, then rows of two, three and two, and one least significant at the bottom. It is useful because it forces you to compare factors and make decisions about which matter most, which you then have to justify with evidence — the basis of an evaluation answer.",
            markScheme: [
              { point: "Nine cards in a 1–2–3–2–1 shape", keywords: ["nine", "9", "1-2-3-2-1", "1–2–3–2–1", "diamond"] },
              { point: "Most significant at top, least at bottom", keywords: ["at the top", "most significant", "least significant", "bottom", "most important"] },
              { point: "Useful because it forces comparison/justification", keywords: ["compare", "justif", "decide", "prioriti", "judge"] },
            ],
            commonError: "Describing the shape but not explaining why it helps.",
            guideRef: "significance",
          },
          {
            id: "pchange-qa-p3-q14",
            question:
              "Country Y in one year: births 600,000; deaths 650,000; immigrants 300,000; emigrants 100,000. (a) Calculate the total population change. (b) Which component was more significant? Explain using your figures.",
            marks: 4,
            hint: "Work out natural change and net migration separately first.",
            modelAnswer:
              "(a) Natural change = 600,000 − 650,000 = −50,000. Net migration = 300,000 − 100,000 = +200,000. Total change = +150,000. (b) Migration was more significant: the net migration gain of 200,000 was four times larger than the natural decrease of 50,000, so it turned a natural decrease into overall growth.",
            markScheme: [
              { point: "Natural change −50,000", keywords: ["-50,000", "−50,000", "-50000", "minus 50"] },
              { point: "Net migration +200,000", keywords: ["200,000", "200000", "200 000"] },
              { point: "Total +150,000", keywords: ["150,000", "150000", "150 000"] },
              { point: "Migration more significant, justified with comparison", keywords: ["migration", "four times", "4 times", "larger", "bigger", "more significant"] },
            ],
            commonError: "Saying natural change was more significant simply because births and deaths are the biggest numbers in the table.",
            guideRef: "significance",
          },
          {
            id: "pchange-qa-p3-q15",
            question: "Explain how migrants themselves can be negatively affected by migration.",
            marks: 3,
            hint: "Think about work, housing and wellbeing in the host country.",
            modelAnswer:
              "Migrants can be exploited by employers or recruitment agents — for example paying high fees, receiving low wages or working very long hours. They may live in poor or crowded housing, as shown by COVID-19 outbreaks in Singapore's dormitories in 2020. They may also face discrimination, language barriers and loneliness from being separated from their families.",
            markScheme: [
              { point: "Exploitation / low pay / long hours / fees", keywords: ["exploit", "low pay", "low wage", "long hours", "fee", "debt"] },
              { point: "Poor or crowded housing (e.g. dormitories)", keywords: ["dormitor", "crowd", "housing", "conditions", "covid"] },
              { point: "Discrimination / loneliness / language", keywords: ["discriminat", "racism", "lonely", "language", "family", "homesick"] },
            ],
            commonError: "Writing about impacts on the host country instead of on the migrants.",
            guideRef: "impacts",
          },
        ],
      },
      {
        id: "pchange-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "pchange-qa-p4-q01",
            question:
              "A country of 4,000,000 people has a crude birth rate of 12 per 1,000 and a crude death rate of 9 per 1,000. In the same year 20,000 people immigrate and 8,000 emigrate. Calculate (a) natural increase, (b) net migration, (c) total population change, (d) percentage change.",
            marks: 4,
            hint: "Natural increase = (CBR − CDR) per 1,000 × (population ÷ 1,000).",
            modelAnswer:
              "(a) (12 − 9) = 3 per 1,000; 3 × 4,000 = 12,000. (b) 20,000 − 8,000 = 12,000. (c) 12,000 + 12,000 = 24,000. (d) 24,000 ÷ 4,000,000 × 100 = 0.6%.",
            markScheme: [
              { point: "Natural increase 12,000", keywords: ["12,000", "12000", "12 000"] },
              { point: "Net migration +12,000", keywords: ["20,000 - 8,000", "20,000 − 8,000", "20000-8000", "net migration 12", "net migration = 12"] },
              { point: "Total change 24,000", keywords: ["24,000", "24000", "24 000"] },
              { point: "Percentage change 0.6%", keywords: ["0.6", "0.6%", "0.6 percent"] },
            ],
            commonError: "Multiplying the rate by 4,000,000 instead of 4,000 (forgetting that the rate is per 1,000).",
            guideRef: "components",
          },
          {
            id: "pchange-qa-p4-q02",
            question: "Explain why governments treat refugees differently from economic migrants.",
            marks: 3,
            hint: "Think about international law and choice.",
            modelAnswer:
              "Refugees are protected by international law — the 1951 Refugee Convention — which says they must not be returned to a country where they face persecution or serious danger (non-refoulement). Economic migrants chose to move, so governments can decide whether to let them in, for example through visas and work passes such as Singapore's Work Permits. That is why asylum claims are assessed carefully, to decide whether each person needs protection.",
            markScheme: [
              { point: "Refugees protected by 1951 Convention/international law", keywords: ["1951", "convention", "international law", "legal protection", "united nations", "unhcr"] },
              { point: "Cannot be sent back to danger (non-refoulement)", keywords: ["sent back", "returned", "non-refoulement", "danger", "deport"] },
              { point: "Economic migrants' entry is controlled by the state (visas/work passes)", keywords: ["visa", "work pass", "permit", "choose who", "control", "chose to"] },
            ],
            commonError: "Saying refugees are treated better because they are poorer — it is about legal protection, not wealth.",
            guideRef: "migration-types",
          },
          {
            id: "pchange-qa-p4-q03",
            question: "Evaluate how useful Lee's model is for explaining migration.",
            marks: 4,
            hint: "Give strengths and weaknesses, with an example of each.",
            modelAnswer:
              "Lee's model is useful because it recognises that both places have positive and negative factors, and it adds intervening obstacles and personal factors, which explain why some people move and others do not — for example why only some young men in a Bangladeshi village go to Singapore. However, it works less well for forced migration such as Syrian refugees, who had little time to weigh up factors. It also does not fully show the role of migrant networks (family already abroad) or how factors change over time. Overall it is a useful starting point but simplifies reality.",
            markScheme: [
              { point: "Strength: includes obstacles and/or personal factors", keywords: ["obstacle", "personal", "individual", "why some"] },
              { point: "Strength: both places have + and − factors", keywords: ["both places", "positive and negative", "origin and destination", "plus and minus"] },
              { point: "Weakness: less suited to forced migration", keywords: ["forced", "refugee", "no choice", "syria", "war"] },
              { point: "Weakness: ignores networks/change over time/simplifies; with judgement", keywords: ["network", "change over time", "simplif", "static", "overall", "family abroad"] },
            ],
            commonError: "Describing the model without evaluating it.",
            guideRef: "push-pull",
          },
          {
            id: "pchange-qa-p4-q04",
            question: "Explain why environmental factors may become more significant causes of migration in the future. Use an example.",
            marks: 4,
            hint: "Think about climate change and places at risk.",
            modelAnswer:
              "Climate change is expected to cause more sea-level rise, droughts, floods and extreme heat, which can destroy homes, farmland and water supplies. Low-lying places will be most affected: Tuvalu is so threatened by rising seas that in 2023 Australia agreed to offer up to 280 Tuvaluans a year the right to live there. A World Bank study suggested over 200 million people could move within their own countries by 2050. However, environmental factors usually combine with poverty and conflict, so it is hard to measure exactly.",
            markScheme: [
              { point: "Climate change will increase hazards (sea-level rise, drought, floods)", keywords: ["climate change", "sea level", "sea-level", "drought", "flood", "heat"] },
              { point: "Explains loss of homes/land/water/livelihoods", keywords: ["home", "farm", "crop", "water", "land", "livelihood"] },
              { point: "Named example (Tuvalu/Bangladesh/Sahel)", keywords: ["tuvalu", "bangladesh", "kiribati", "sahel", "maldives"] },
              { point: "Figure or qualification (200 million / 280 / combined with other factors)", keywords: ["200 million", "280", "2050", "combine", "uncertain", "other factors"] },
            ],
            commonError: "Calling climate migrants 'refugees' — they are not covered by the 1951 Convention.",
            guideRef: "significance",
          },
          {
            id: "pchange-qa-p4-q05",
            question: "'Immigration brings more benefits than problems to host countries.' Do you agree? Use examples. (6 marks)",
            marks: 6,
            hint: "PEEL: benefits with evidence, problems with evidence, then a judgement that depends on circumstances.",
            modelAnswer:
              "Immigration can bring major benefits. In Singapore, about 1.5 million foreign workers fill jobs that the shrinking local workforce cannot, building HDB flats and MRT lines and caring for elderly people, which matters because the resident fertility rate is only about 0.97. In the UK, nurses and doctors from abroad help the NHS cope with shortages, and immigrants pay taxes that help fund pensions for an ageing population. However, there can be problems, especially when large numbers arrive quickly. Lebanon's 1.5 million Syrian refugees put heavy pressure on schools, water and housing and raised rents, and in Singapore concerns about crowding led to protest against the 2013 Population White Paper. Overall I agree that the benefits are usually greater, particularly for planned economic migration into rich, ageing countries, but problems can outweigh benefits in the short term when a poorer country receives a sudden influx of refugees without enough support.",
            markScheme: [
              { point: "Benefit: fills labour shortages / supports ageing population", keywords: ["shortage", "labour", "ageing", "aging", "workforce", "fill"] },
              { point: "Evidence for benefits (Singapore 1.5m / NHS / taxes)", keywords: ["singapore", "1.5 million", "nhs", "tax", "hdb", "germany"] },
              { point: "Problem: pressure on services/housing", keywords: ["pressure", "housing", "school", "rent", "service", "crowd"] },
              { point: "Evidence for problems (Lebanon / White Paper)", keywords: ["lebanon", "white paper", "1.5 million", "protest", "dormitor"] },
              { point: "Recognises it depends on speed/type/scale of migration", keywords: ["depend", "sudden", "planned", "short term", "long term", "type"] },
              { point: "Clear overall judgement", keywords: ["overall", "i agree", "i disagree", "in conclusion", "to a large extent", "mostly"] },
            ],
            commonError: "Giving one-sided answers with no named places or figures.",
            guideRef: "impacts",
          },
          {
            id: "pchange-qa-p4-q06",
            question: "Explain the impacts of the refugee crisis on Syria itself.",
            marks: 4,
            hint: "Syria is the source area. Think about people, skills and rebuilding.",
            modelAnswer:
              "Syria lost over 6 million people as refugees, many of them young adults and skilled workers such as doctors, engineers and teachers — a severe brain drain. This left fewer people to run hospitals and schools and fewer workers for the economy. Families and communities were split up. Since the fall of the Assad government in December 2024, some refugees have returned, but many homes are destroyed and the lack of workers and money makes rebuilding slow.",
            markScheme: [
              { point: "Population loss with figure", keywords: ["6 million", "half", "millions", "population fell"] },
              { point: "Brain drain / loss of skilled workers", keywords: ["brain drain", "skilled", "doctor", "engineer", "teacher"] },
              { point: "Social impact: families/communities split", keywords: ["famil", "communit", "split", "separat"] },
              { point: "Long-term impact: rebuilding/returns", keywords: ["rebuild", "return", "2024", "reconstruct", "recover"] },
            ],
            commonError: "Describing the war rather than the impacts of migration on Syria.",
            guideRef: "syria",
          },
          {
            id: "pchange-qa-p4-q07",
            question:
              "Study the data on Syrian refugees (approximate peak figures) and host population sizes. Lebanon: 1.5 million refugees, population 5.5 million. Jordan: 0.65 million registered, population 11 million. Germany: 0.9 million, population 84 million. (a) Calculate refugees per 100 people for Lebanon and Germany. (b) Explain which country was under the most pressure.",
            marks: 4,
            hint: "Refugees ÷ population × 100.",
            modelAnswer:
              "(a) Lebanon: 1.5 ÷ 5.5 × 100 ≈ 27 refugees per 100 people. Germany: 0.9 ÷ 84 × 100 ≈ 1.1 per 100. (b) Lebanon was under far more pressure: it had about 25 times as many refugees per person as Germany, and as a smaller, poorer country with weaker public services, it struggled to provide enough housing, school places, water and electricity, whereas Germany's large, rich economy could absorb its refugees more easily.",
            markScheme: [
              { point: "Lebanon ≈ 27 per 100", keywords: ["27", "27.3", "about a quarter"] },
              { point: "Germany ≈ 1.1 per 100", keywords: ["1.1", "1.07", "about 1"] },
              { point: "Identifies Lebanon as under most pressure", keywords: ["lebanon", "lebanon was", "lebanon is"] },
              { point: "Explains using relative size and wealth/services", keywords: ["poorer", "smaller", "per person", "services", "rich", "proportion"] },
            ],
            commonError: "Choosing Germany or Turkey because they had large totals — pressure depends on refugees relative to population and resources.",
            guideRef: "syria",
          },
          {
            id: "pchange-qa-p4-q08",
            question: "Explain why migration from Mexico to the USA slowed between about 2009 and 2014.",
            marks: 4,
            hint: "Consider changes in Mexico, in the USA and at the border.",
            modelAnswer:
              "Net migration fell to about zero because several factors changed at once. In Mexico, the birth rate had fallen sharply since the 1970s, so there were fewer young adults looking for work, and the economy had improved, weakening the push. In the USA, the 2008 financial crisis caused a recession and a collapse in construction jobs, weakening the pull. At the same time border enforcement increased, raising the intervening obstacles and costs of crossing.",
            markScheme: [
              { point: "Falling Mexican birth rate / fewer young people", keywords: ["birth rate", "fertility", "fewer young", "fewer children"] },
              { point: "Improving Mexican economy", keywords: ["economy improved", "economy had improved", "stronger economy", "better economy", "more jobs in mexico", "economic growth"] },
              { point: "US recession/2008 crisis reduced jobs", keywords: ["2008", "recession", "financial crisis", "fewer jobs", "construction"] },
              { point: "Tougher border enforcement / higher obstacles", keywords: ["border", "enforcement", "wall", "patrol", "obstacle"] },
            ],
            commonError: "Mentioning only the border wall and ignoring the population and economic changes in Mexico.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-qa-p4-q09",
            question: "Poland was once a major source of migrants to the UK but is now also a host country. Explain how and why this has changed.",
            marks: 4,
            hint: "Think about Poland's economy and events in neighbouring countries.",
            modelAnswer:
              "Poland's economy grew strongly after joining the EU — it avoided recession in 2008–09 — so wages rose and unemployment fell from about 19% in 2004 to only a few per cent, weakening the push to emigrate. Brexit and the end of free movement in 2020 reduced the pull of the UK, so many Poles returned. Poland now has labour shortages and attracts workers, especially from Ukraine, and after Russia's full-scale invasion in 2022 it took in over a million Ukrainian refugees, becoming a major host country.",
            markScheme: [
              { point: "Polish economy grew / wages rose / unemployment fell", keywords: ["economy grew", "wages rose", "unemployment fell", "growth", "richer"] },
              { point: "Brexit / end of free movement reduced UK pull", keywords: ["brexit", "free movement", "2020", "2016"] },
              { point: "Labour shortages attract workers to Poland", keywords: ["shortage", "attract", "workers from", "need workers"] },
              { point: "Ukrainian refugees after 2022", keywords: ["ukrain", "2022", "invasion", "russia"] },
            ],
            commonError: "Only describing Polish migration to the UK and not explaining the change to a host country.",
            guideRef: "economic-migration",
          },
          {
            id: "pchange-qa-p4-q10",
            question: "'Brain drain is the most serious impact of emigration on source countries.' Evaluate this statement. (6 marks)",
            marks: 6,
            hint: "Consider brain drain with evidence, then other impacts (positive and negative), then judge.",
            modelAnswer:
              "Brain drain can be very serious. When doctors and nurses leave countries such as Zimbabwe for the UK, hospitals are left short of staff and the money spent training them is lost; Syria lost many doctors and engineers it now needs to rebuild. However, other impacts may be equally or more significant. Losing large numbers of young adults can leave villages with ageing populations and too few workers, as in parts of rural Mexico, which also lowers the birth rate. On the positive side, remittances can outweigh the losses: Mexico received about US$65 billion in 2024 and India about US$129 billion, paying for education and housing, and returning migrants bring 'brain gain'. Overall, brain drain is the most serious impact where a country loses a large share of a small number of skilled workers, especially in healthcare, but for many countries the benefits of remittances are larger, so the statement is only partly true.",
            markScheme: [
              { point: "Explains why brain drain is serious", keywords: ["shortage", "training", "lose skills", "loss of skills", "skilled"] },
              { point: "Evidence for brain drain (Zimbabwe/Syria/nurses)", keywords: ["zimbabwe", "syria", "nurse", "doctor", "philippines"] },
              { point: "Other negative impact (ageing/fewer workers/families)", keywords: ["ageing", "aging", "elderly", "young", "famil", "village"] },
              { point: "Positive counterweight: remittances with evidence", keywords: ["remittance", "65", "129", "billion"] },
              { point: "Brain gain / returning migrants", keywords: ["brain gain", "return", "come back", "new skills"] },
              { point: "Justified judgement (depends on scale/sector)", keywords: ["overall", "partly", "depends", "in conclusion", "to some extent"] },
            ],
            commonError: "Only describing brain drain and never comparing it with other impacts.",
            guideRef: "impacts",
          },
          {
            id: "pchange-qa-p4-q11",
            question:
              "A population pyramid for a rural village in Mexico shows wide bars for children aged 0–14 and adults over 60, but very narrow bars for men aged 20–39 compared with women of the same age. Describe and explain this pattern.",
            marks: 4,
            hint: "Describe the shape, then link it to who migrates.",
            modelAnswer:
              "The pyramid has a wide base and wide top but is 'pinched' in the young adult age groups, especially for men, so there are fewer men aged 20–39 than women. This is because young adult men are the group most likely to emigrate to the USA for work in farming and construction. Children and older people are left behind, so the village has a high dependency ratio, and women may take on more farm work and family responsibilities.",
            markScheme: [
              { point: "Describes narrow/pinched young adult male bars", keywords: ["narrow", "pinch", "fewer men", "gap", "missing"] },
              { point: "Describes wide bars for children/elderly", keywords: ["wide", "children", "elderly", "old", "over 60"] },
              { point: "Explains: young men emigrate for work", keywords: ["emigrat", "migrat", "left for", "work in the usa", "usa"] },
              { point: "Effect: high dependency / women left", keywords: ["dependen", "women", "left behind", "fewer workers"] },
            ],
            commonError: "Explaining the narrow bars as a high death rate among young men rather than emigration.",
            guideRef: "impacts",
          },
          {
            id: "pchange-qa-p4-q12",
            question: "Explain how the Singapore government manages immigration.",
            marks: 4,
            hint: "Think about passes, costs, limits and long-term residents.",
            modelAnswer:
              "The Ministry of Manpower issues different work passes depending on skills and salary: Employment Passes for professionals (minimum salary S$5,600 a month from 2025, with the COMPASS points system), S Passes for mid-skilled workers and Work Permits for lower-wage jobs. Employers of Work Permit and S Pass holders must pay a monthly levy, which makes foreign workers more expensive, and quotas limit what share of a firm's workforce can be foreign. The government also decides how many people are granted permanent residence and citizenship each year.",
            markScheme: [
              { point: "Tiered work passes (EP/S Pass/Work Permit)", keywords: ["employment pass", "s pass", "work permit", "work pass"] },
              { point: "Salary thresholds / COMPASS", keywords: ["salary", "5,600", "compass", "minimum", "points"] },
              { point: "Levies", keywords: ["levy", "levies", "pay a fee", "cost to employer"] },
              { point: "Quotas / control of PR and citizenship", keywords: ["quota", "ratio", "limit", "permanent resident", "citizenship"] },
            ],
            commonError: "Saying Singapore 'bans' foreign workers or has 'open borders' — it uses controlled, selective systems.",
            guideRef: "singapore",
          },
          {
            id: "pchange-qa-p4-q13",
            question:
              "Qatar has a population of about 3 million, of whom around 85–90% are non-citizens, mostly male workers from South Asia. Using your knowledge of Singapore, suggest reasons for this and one impact.",
            marks: 4,
            hint: "Apply what you know about pull factors and small, rich, labour-short countries.",
            modelAnswer:
              "Like Singapore, Qatar is small and rich (from oil and gas) but has a small local population, so it needs foreign workers for construction, services and domestic work. Wages are much higher than in countries such as Nepal, India and Bangladesh, a strong pull factor, and huge building projects — such as stadiums for the 2022 FIFA World Cup — created demand for construction labour. One impact is a large gender imbalance, with many more men than women; another is concern about workers' welfare, such as high recruitment fees, heat and poor living conditions.",
            markScheme: [
              { point: "Small local population / labour shortage", keywords: ["small population", "few citizens", "shortage", "not enough", "labour"] },
              { point: "Wealth/higher wages as pull factor", keywords: ["oil", "gas", "rich", "wealth", "higher wage", "wages"] },
              { point: "Demand from construction / World Cup", keywords: ["construction", "world cup", "stadium", "building", "2022"] },
              { point: "Valid impact (gender imbalance / worker welfare / remittances)", keywords: ["gender", "more men", "welfare", "exploit", "remittance", "heat"] },
            ],
            commonError: "Not applying the ideas — simply copying facts about Singapore without linking them to Qatar.",
            guideRef: "singapore",
          },
          {
            id: "pchange-qa-p4-q14",
            question: "How significant is migration, compared with natural change, in explaining population change in Singapore and in Niger? (6 marks)",
            marks: 6,
            hint: "Treat each country separately with evidence, then compare and judge.",
            modelAnswer:
              "In Singapore, migration is the most significant factor. The resident fertility rate is only about 0.97, far below replacement level, and the population is ageing, so natural increase is very small. Yet the population has doubled since 1990 to about 6 million, largely because of immigration: about 1.9 million people are non-residents, including about 1.5 million foreign workers. In Niger the opposite is true. Its crude birth rate is over 40 per 1,000 while its death rate is far lower, so natural increase is very high and the population grows by over 3% a year; migration is small by comparison and mostly temporary movement to neighbouring countries. Therefore the significance of migration depends on the country: it is the main driver of growth in a rich, low-fertility country like Singapore, but natural increase dominates in a poorer, high-fertility country like Niger.",
            markScheme: [
              { point: "Singapore: low natural increase (TFR ~0.97)", keywords: ["0.97", "low fertility", "low birth", "below replacement"] },
              { point: "Singapore: migration main driver with evidence", keywords: ["1.9 million", "1.5 million", "non-resident", "foreign worker", "immigra"] },
              { point: "Niger: high birth rate / natural increase", keywords: ["niger", "40", "high birth", "natural increase", "3%"] },
              { point: "Niger: migration small in comparison", keywords: ["migration is small", "little migration", "small", "less significant", "minor"] },
              { point: "Comparison between countries", keywords: ["whereas", "opposite", "in contrast", "unlike", "compared"] },
              { point: "Judgement: significance depends on the country/level of development", keywords: ["depends", "overall", "therefore", "in conclusion", "most significant"] },
            ],
            commonError: "Writing about only one country, or describing both without comparing their components.",
            guideRef: "significance",
          },
          {
            id: "pchange-qa-p4-q15",
            question: "Do forced or voluntary migrations usually have greater impacts on host areas? Justify your answer with examples.",
            marks: 5,
            hint: "Think about speed, planning, numbers and skills.",
            modelAnswer:
              "Forced migrations usually have greater short-term impacts on host areas because they are sudden, unplanned and large. Lebanon received about 1.5 million Syrians in just a few years, which strained schools, water supplies and housing. Refugees often arrive with few possessions and may not be allowed to work at first, so they need support. By contrast, voluntary economic migration is usually planned and matched to jobs — Singapore's work pass system selects workers to fill specific labour shortages, so benefits are often greater than costs. However, voluntary migration can also have large long-term impacts, such as the 1 million Poles who lived in the UK by 2017. Overall, forced migration tends to have greater and more immediate impacts, especially on poorer neighbouring countries.",
            markScheme: [
              { point: "Forced migration is sudden/unplanned/large", keywords: ["sudden", "unplanned", "quickly", "large numbers", "influx"] },
              { point: "Evidence for forced (Lebanon/Turkey)", keywords: ["lebanon", "turkey", "jordan", "1.5 million", "3.6 million"] },
              { point: "Voluntary migration is planned/matched to jobs", keywords: ["planned", "work pass", "matched", "selected", "jobs"] },
              { point: "Evidence for voluntary (Singapore/Poland–UK)", keywords: ["singapore", "poland", "polish", "uk", "1 million"] },
              { point: "Justified judgement", keywords: ["overall", "usually", "in conclusion", "therefore", "depends"] },
            ],
            commonError: "Describing both types without deciding which has the greater impact.",
            guideRef: "significance",
          },
        ],
      },
    ],
  },
};
