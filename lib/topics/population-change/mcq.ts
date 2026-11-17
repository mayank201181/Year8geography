import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1
  // =========================================================================
  {
    id: "population-change-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "population-change-m1-q01",
        question: "What is the **birth rate** of a country?",
        options: [
          "The number of live births per 1,000 people per year",
          "The average number of children each woman has in her lifetime",
          "The number of babies who die before their first birthday per 1,000 live births",
          "The total number of babies born in the country each year",
        ],
        answerIndex: 0,
        explanation:
          "Birth rate is a **rate**: live births per 1,000 people per year, so countries of different sizes can be compared fairly. 'The average number of children each woman has' is the **total fertility rate (TFR)**, a different measure. A raw total of babies is not a rate at all — India will always have more births than Singapore simply because it has more people.",
        difficulty: "warmup",
        guideRef: "birth-rate-factors",
        hints: ["A 'rate' compares a number with the size of the population — look for 'per 1,000'."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q02",
        question: "Which change would most directly **lower the death rate** in a poor rural area?",
        options: [
          "A new factory opening in the capital city",
          "Piped clean water and toilets for every village",
          "More people moving into the area from abroad",
          "A rise in the birth rate",
        ],
        answerIndex: 1,
        explanation:
          "Clean water and sanitation stop water-borne diseases such as cholera and diarrhoea, which kill many young children — so fewer people die. A factory in a distant city might raise incomes eventually, but it does not directly stop people dying in the villages.",
        difficulty: "warmup",
        guideRef: "death-rate-factors",
        hints: ["Which option stops people catching deadly diseases?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q03",
        question: "What does **emigration** mean?",
        options: [
          "Moving into a country to live there",
          "Moving from one part of a country to another",
          "Leaving your country to live in another country",
          "Visiting another country on holiday",
        ],
        answerIndex: 2,
        explanation:
          "**E**migration = **E**xiting your country. Moving *into* a country is **im**migration (**I**n). Moving within one country is internal migration, and a holiday is not migration at all because it is not a change of home.",
        difficulty: "warmup",
        guideRef: "migration",
        hints: ["E-migration: think **E** for **E**xit."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q04",
        question: "Which of these is a **pull** factor for a migrant moving to Singapore?",
        options: [
          "Drought destroying crops back home",
          "War in the migrant's home region",
          "Few jobs in the migrant's home village",
          "Well-paid jobs and safe streets",
        ],
        answerIndex: 3,
        explanation:
          "A **pull** factor attracts people to the destination — Singapore's well-paid jobs and low crime. Drought, war and a lack of jobs are all problems at the place of origin, so they are **push** factors.",
        difficulty: "warmup",
        guideRef: "migration",
        hints: ["Push = what drives you away from home. Pull = what draws you to the new place. Which option describes Singapore?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q05",
        question:
          "A country has a birth rate of 32 per 1,000 and a death rate of 9 per 1,000 (ignore migration). What is its rate of natural increase?",
        options: ["41 per 1,000 (4.1%)", "23 per 1,000 (2.3%)", "23% per year", "−23 per 1,000 (−2.3%)"],
        answerIndex: 1,
        explanation:
          "Natural increase = birth rate − death rate = 32 − 9 = 23 per 1,000. To turn 'per 1,000' into a percentage, divide by 10: 2.3% a year. '23% per year' forgets that the rates are per 1,000, not per 100; '41 per 1,000' adds the rates instead of subtracting.",
        difficulty: "core",
        guideRef: "birth-rate-factors",
        hints: ["Natural change = births − deaths.", "Per 1,000 → per 100: divide by 10."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q06",
        question: "Why does a fall in **infant mortality** usually lead, some years later, to a fall in birth rates?",
        options: [
          "Babies need fewer vaccinations, so parents save money",
          "Fewer babies are born because hospitals become full",
          "Parents become confident their children will survive, so they stop having extra children 'just in case'",
          "The government always bans large families once infant mortality falls",
        ],
        answerIndex: 2,
        explanation:
          "Where many babies die, families have extra children as an insurance policy. Once parents see that most children survive, that reason disappears and families gradually become smaller. Government bans are not automatic — most countries never had one, yet their birth rates still fell.",
        difficulty: "core",
        guideRef: "birth-rate-factors",
        hints: ["Think like a parent in a village where many babies die.", "What happens to that worry when most children survive?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q07",
        question: "Families who move from farms to cities often go on to have fewer children. Which reason best explains this?",
        options: [
          "Cities have more hospitals, so more babies are born there",
          "City children can help to work on the family farm",
          "Cities have fewer schools, so children stay at home",
          "In cities, children cost money (housing, school fees) instead of adding workers to the family",
        ],
        answerIndex: 3,
        explanation:
          "On a farm, children can help in the fields and are an economic asset. In a city, housing is cramped and expensive and children go to school for many years, so each child is a cost — families choose to have fewer. Hospitals lower death rates; they do not cause more births.",
        difficulty: "core",
        guideRef: "birth-rate-factors",
        hints: ["On a farm, what can a ten-year-old do to help the family?", "In a city flat, is a child mainly a cost or an earner?"],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q08",
        question:
          "Life expectancy in a country rose from about 45 years in 1960 to about 72 years in 2020. Which is the **most likely** main cause?",
        options: [
          "Better healthcare, vaccination and clean water",
          "A rise in the birth rate",
          "More young people emigrating",
          "Older people from abroad moving into the country",
        ],
        answerIndex: 0,
        explanation:
          "Life expectancy rises when fewer people die young — mainly thanks to vaccination, healthcare, clean water and better food. A higher birth rate adds babies but does not make anyone live longer. Migration changes who lives in a country, not how long people born there live.",
        difficulty: "core",
        guideRef: "death-rate-factors",
        hints: ["Life expectancy is about how long people live, not how many are born.", "What stops children and adults dying early?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q09",
        question:
          "A family flees across the border into a neighbouring country because fighting has destroyed their town. What are they?",
        options: ["Economic migrants", "Internally displaced people", "Refugees", "Retired migrants"],
        answerIndex: 2,
        explanation:
          "**Refugees** are forced to leave their own country because of war, violence or persecution. Internally displaced people are also forced to flee, but they stay **inside** their own country — this family crossed a border. Economic migrants choose to move for work.",
        difficulty: "core",
        guideRef: "migration",
        hints: ["Was the move a free choice or forced?", "Did they cross an international border?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q10",
        question: "In one year a city had 42,000 immigrants and 30,000 emigrants. What was its **net migration**?",
        options: ["+72,000", "−12,000", "+30,000", "+12,000"],
        answerIndex: 3,
        explanation:
          "Net migration = immigrants − emigrants = 42,000 − 30,000 = **+12,000**. It is positive because more people arrived than left. '−12,000' has the subtraction the wrong way round; '+72,000' adds the two flows together.",
        difficulty: "core",
        guideRef: "migration",
        hints: ["Net migration = people coming in − people going out.", "More arrived than left, so is the answer positive or negative?"],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q11",
        question: "Singapore's resident total fertility rate (TFR) was about 0.97 in 2023. Which statement is correct?",
        options: [
          "On average each woman has fewer than one child — well below the replacement level of about 2.1",
          "On average each woman has about two children — almost exactly the replacement level",
          "It proves that Singapore's total population must be falling every year",
          "It means that 0.97% of women in Singapore have children",
        ],
        answerIndex: 0,
        explanation:
          "A TFR of 0.97 means fewer than one child per woman on average — less than half of the 2.1 needed for each generation to replace itself. It does **not** prove the total population is falling: Singapore's total population has grown over time, mainly because of immigration. TFR is an average number of children, not a percentage.",
        difficulty: "core",
        guideRef: "significance-of-factors",
        hints: ["TFR = average children per woman in her lifetime.", "Is a low TFR the only thing that decides whether a population grows?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q12",
        question:
          "Which piece of evidence **best** supports the claim that female education is a significant factor in birth rates?",
        options: [
          "Niger has a hot, dry climate",
          "Across the world, countries where girls stay in school longest generally have the lowest fertility rates",
          "Singapore has a large MRT network",
          "Some families in Niger are wealthy",
        ],
        answerIndex: 1,
        explanation:
          "To support a claim about education you need evidence that links **education** to **fertility** — the pattern that more schooling for girls goes with fewer children per woman. Climate and transport are irrelevant to the claim, and one fact about wealth says nothing about education.",
        difficulty: "core",
        guideRef: "significance-of-factors",
        hints: ["Good evidence must mention both parts of the claim.", "Which option links schooling with number of children?"],
        strategy: "Weigh both sides then judge",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q13",
        question:
          "Country P has these rates (per 1,000 people per year):\n\n| Birth rate | Death rate | Net migration rate |\n|---|---|---|\n| 12 | 11 | +6 |\n\nWhich statement is supported by the data?",
        options: [
          "Natural change is the main reason the population is growing",
          "The population is falling because the death rate is almost as high as the birth rate",
          "The population grows by 29 per 1,000 per year",
          "Net migration adds six times as many people as natural change",
        ],
        answerIndex: 3,
        explanation:
          "Natural change = 12 − 11 = +1 per 1,000. Net migration = +6 per 1,000, which is six times bigger. Total change = 1 + 6 = +7 per 1,000, so the population is growing — mainly because of migration. '29 per 1,000' wrongly adds all three numbers together.",
        difficulty: "challenge",
        guideRef: "significance-of-factors",
        hints: ["Work out natural change first.", "Then compare natural change with the net migration rate.", "Total change = natural change + net migration."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q14",
        question:
          "Over 40 years, Country K's birth rate fell from 45 to 25 per 1,000 and its death rate fell from 18 to 8 per 1,000. Ignoring migration, which statement is correct?",
        options: [
          "Natural increase fell from 2.7% to 1.7% a year, but the population is still growing",
          "The population is now shrinking because both rates fell",
          "Natural increase rose, because the death rate fell",
          "Natural increase stayed the same, because both rates fell by the same amount",
        ],
        answerIndex: 0,
        explanation:
          "Before: 45 − 18 = 27 per 1,000 (2.7%). After: 25 − 8 = 17 per 1,000 (1.7%). The birth rate fell by 20 but the death rate fell by only 10, so natural increase fell — yet births still exceed deaths, so the population keeps growing. It is a common slip to think a falling death rate on its own decides the answer: you must compare **both** changes.",
        difficulty: "challenge",
        guideRef: "death-rate-factors",
        hints: ["Calculate natural increase at the start and at the end.", "Did the two rates fall by the same amount?", "Is births − deaths still positive at the end?"],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-change-m1-q15",
        question: "Which is the best example of **forced internal** migration?",
        options: [
          "A nurse from the Philippines moving to work in a Singapore hospital",
          "Families leaving a flooded river valley for a city in the same country after their homes are destroyed",
          "A student moving from Kuala Lumpur to London for university",
          "A retired couple moving from Manchester to Spain for the sunshine",
        ],
        answerIndex: 1,
        explanation:
          "The flood victims had no real choice (forced) and stayed in their own country (internal). The nurse and the student chose to move (voluntary) and crossed borders (international); the retired couple also moved voluntarily and internationally.",
        difficulty: "core",
        guideRef: "migration",
        hints: ["Check two things for each option: choice or no choice? Same country or new country?", "Only one option is both 'no choice' and 'same country'."],
        strategy: "Eliminate options",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2
  // =========================================================================
  {
    id: "population-change-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "population-change-m2-q01",
        question: "What is the **death rate** of a country?",
        options: [
          "The average age at which people die",
          "The number of babies who die before their first birthday per 1,000 live births",
          "The number of deaths per 1,000 people per year",
          "The percentage of the population aged over 65",
        ],
        answerIndex: 2,
        explanation:
          "Death rate = deaths per 1,000 people per year. Babies dying before age one is measured by the **infant mortality rate**, a separate indicator. The average age at death is linked to life expectancy, not the death rate.",
        difficulty: "warmup",
        guideRef: "death-rate-factors",
        hints: ["Like the birth rate, it is measured 'per 1,000 people per year'."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q02",
        question: "Which is a reason why birth rates are often **high** in poor rural areas?",
        options: [
          "Free contraception is easy to get",
          "Most women have long careers before starting a family",
          "Raising a child is very expensive",
          "Children help on the farm and support their parents in old age",
        ],
        answerIndex: 3,
        explanation:
          "Where farming is done by hand and there are no pensions, children are useful workers and the family's 'pension'. Easy contraception, long careers and expensive child-rearing all **lower** birth rates — they describe richer, more urban places.",
        difficulty: "warmup",
        guideRef: "birth-rate-factors",
        hints: ["Which option gives parents a reason to want MORE children?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q03",
        question: "How is **net migration** calculated?",
        options: [
          "Immigrants − emigrants",
          "Emigrants − immigrants",
          "Immigrants + emigrants",
          "Births − deaths",
        ],
        answerIndex: 0,
        explanation:
          "Net migration = people arriving (immigrants) − people leaving (emigrants). A positive answer means the population gains from migration. 'Births − deaths' is natural change, the other half of population change.",
        difficulty: "warmup",
        guideRef: "migration",
        hints: ["'Net' means what is left after taking away the people who left."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q04",
        question: "Complete the equation: population change = natural change + ______",
        options: ["birth rate", "net migration", "death rate", "life expectancy"],
        answerIndex: 1,
        explanation:
          "A population can only change in two ways: through births and deaths (natural change) and through people moving in and out (net migration). Birth rate and death rate are already inside natural change, so adding either again would double-count.",
        difficulty: "warmup",
        guideRef: "significance-of-factors",
        hints: ["Natural change covers births and deaths. What other way can people join or leave a population?"],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q05",
        question: "Which chain of reasoning correctly links girls' education to a lower birth rate?",
        options: [
          "Girls stay in school longer → marry and start families later → have fewer children",
          "Girls stay in school longer → become healthier → have more children",
          "Girls stay in school longer → emigrate → the birth rate rises",
          "Girls stay in school longer → the death rate rises → fewer children are born",
        ],
        answerIndex: 0,
        explanation:
          "Each extra year in school delays marriage and the first baby, leaving fewer years for childbearing. Educated women also know more about contraception and have careers, which adds to the effect. Education does not make the death rate rise — if anything, educated mothers' children are **more** likely to survive.",
        difficulty: "core",
        guideRef: "birth-rate-factors",
        hints: ["Follow each chain step by step — does every arrow make sense?", "What happens to the age a woman has her first child if she is still at school?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q06",
        question: "Which event would make a country's death rate **rise sharply** for a short time?",
        options: [
          "A new vaccination programme",
          "Building sewers in its cities",
          "A good harvest that increases the food supply",
          "A pandemic such as COVID-19",
        ],
        answerIndex: 3,
        explanation:
          "A pandemic suddenly kills extra people, so the death rate jumps (many countries recorded a spike in deaths in 2020–21). Vaccines, sewers and better harvests all **lower** death rates.",
        difficulty: "core",
        guideRef: "death-rate-factors",
        hints: ["Three options save lives. Which one costs lives?", "'Short time' suggests a sudden shock rather than a long-term improvement."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q07",
        question:
          "Singapore's Baby Bonus scheme gives parents cash gifts and savings support when a child is born. What is the scheme mainly trying to do?",
        options: [
          "Reduce the birth rate to slow population growth",
          "Encourage couples to have children, because the birth rate is very low",
          "Reduce the number of immigrants",
          "Lower the death rate among elderly people",
        ],
        answerIndex: 1,
        explanation:
          "Singapore's fertility is far below replacement level, so the government uses pro-natalist policies such as the Baby Bonus to make having children more affordable. A policy to *reduce* the birth rate would do the opposite — like China's one-child policy (1980–2015).",
        difficulty: "core",
        guideRef: "birth-rate-factors",
        hints: ["Giving money for each baby makes babies cheaper or dearer for parents?", "Is Singapore's birth rate too high or too low?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q08",
        question:
          "The table shows the death rate of Country Z.\n\n| Year | 1950 | 1980 | 2020 |\n|---|---|---|---|\n| Death rate (per 1,000) | 25 | 14 | 7 |\n\nBy how much did the death rate change between 1950 and 2020?",
        options: [
          "It fell by 7 per 1,000",
          "It fell by 32 per 1,000",
          "It fell by 18 per 1,000",
          "It rose by 18 per 1,000",
        ],
        answerIndex: 2,
        explanation:
          "Change = 25 − 7 = a **fall** of 18 per 1,000. '7' is just the final value, '32' adds the two values, and 'rose' gets the direction wrong — the numbers go down over time.",
        difficulty: "core",
        guideRef: "death-rate-factors",
        hints: ["Find the 1950 and 2020 values.", "Subtract, and check whether the rate went up or down."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q09",
        question: "Which of these is a **push** factor?",
        options: [
          "Persecution because of your religion",
          "Good schools in the destination city",
          "Family members already living abroad",
          "Higher wages in another country",
        ],
        answerIndex: 0,
        explanation:
          "Persecution at home drives people away — a push factor (and a reason people become refugees). Good schools, relatives abroad and higher wages are features of the destination that attract people: pull factors.",
        difficulty: "core",
        guideRef: "migration",
        hints: ["Which option is a problem at home rather than an attraction somewhere else?", "Push factors happen at the place of origin."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q10",
        question:
          "Many workers on Singapore's construction sites come from countries such as Bangladesh and India. What type of migration is this mainly?",
        options: [
          "Forced international migration",
          "Voluntary international (economic) migration",
          "Forced internal migration",
          "Voluntary internal migration",
        ],
        answerIndex: 1,
        explanation:
          "The workers choose to move (voluntary) across borders (international) to earn higher wages (economic). It is not forced — nobody is fleeing war or disaster — and it is not internal, because they leave their own country.",
        difficulty: "core",
        guideRef: "migration",
        hints: ["Did they choose to move?", "Did they cross a border?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q11",
        question:
          "A student says: 'Singapore's population keeps growing, so Singaporeans must be having lots of babies.' What is wrong with this?",
        options: [
          "Nothing — Singapore's birth rate is one of the highest in the world",
          "Singapore's death rate is rising very fast",
          "Singapore's total population is actually falling",
          "The resident TFR is below 1; the growth comes mainly from immigration",
        ],
        answerIndex: 3,
        explanation:
          "Singapore's resident TFR was about 0.97 in 2023 — among the lowest in the world. The total population has still grown because many people move to Singapore to work, study or settle. The student assumed natural change is the only way a population grows.",
        difficulty: "core",
        guideRef: "significance-of-factors",
        hints: ["Population change = natural change + net migration.", "Is Singapore's fertility high or very low?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q12",
        question:
          "Rates per 1,000 people per year:\n\n| Country | Birth rate | Death rate | Net migration rate |\n|---|---|---|---|\n| A | 40 | 15 | −2 |\n| B | 10 | 11 | +5 |\n\nIn which country does migration matter **more** than natural change?",
        options: [
          "Country A, because its net migration is negative",
          "Neither — migration never matters more than natural change",
          "Country B, because migration (+5) outweighs natural change (−1)",
          "Country A, because its birth rate is the highest",
        ],
        answerIndex: 2,
        explanation:
          "Country A: natural change = 40 − 15 = +25, net migration −2 — natural change is far bigger. Country B: natural change = 10 − 11 = −1, net migration +5 — migration is bigger and turns a falling population into a growing one (+4 per 1,000). A negative migration figure does not make migration the bigger factor.",
        difficulty: "core",
        guideRef: "significance-of-factors",
        hints: ["Work out natural change for each country.", "Compare the size of natural change with the size of net migration in each."],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q13",
        question:
          "Which observation most **weakens** the claim that China's one-child policy (1980–2015) was the main reason its birth rate fell?",
        options: [
          "China's population is over 1.4 billion",
          "Birth rates also fell steeply in places with no one-child policy, such as South Korea and Taiwan",
          "The policy was enforced with fines",
          "China later allowed couples to have three children",
        ],
        answerIndex: 1,
        explanation:
          "If birth rates fell just as steeply in similar, fast-growing East Asian economies **without** the policy, then economic development, urbanisation and education could explain much of China's fall too. (China's fertility had also already roughly halved during the 1970s, before the policy began.) Fines show how the policy worked, which, if anything, supports the claim.",
        difficulty: "challenge",
        guideRef: "birth-rate-factors",
        hints: ["To weaken a claim, find evidence that the same result happened without the cause.", "Look for a comparison with other places."],
        strategy: "Weigh both sides then judge",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q14",
        question:
          "Classify these three moves in order: (1) a Syrian family flees civil war to Türkiye; (2) a Filipino domestic worker moves to Singapore; (3) a farmer moves from a village in Bihar to Mumbai for work.",
        options: [
          "Economic migrant; refugee; internally displaced person",
          "Refugee; internally displaced person; economic migrant",
          "Refugee; voluntary international (economic) migrant; voluntary internal (economic) migrant",
          "Refugee; voluntary internal migrant; forced international migrant",
        ],
        answerIndex: 2,
        explanation:
          "(1) is forced and crosses a border — refugee. (2) is a free choice to work abroad — voluntary international economic migration. (3) is a free choice within India (Bihar and Mumbai are both in India) — voluntary internal economic migration. Calling the domestic worker 'internally displaced' confuses moving for work with being forced from home.",
        difficulty: "challenge",
        guideRef: "migration",
        hints: ["For each move ask: forced or voluntary?", "Then ask: same country or a new country? (Bihar and Mumbai are both in India.)"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m2-q15",
        question:
          "In a country with no migration, the death rate falls from 20 to 8 per 1,000 while the birth rate stays at 40 per 1,000. What happens to natural increase?",
        options: [
          "It rises from 2.0% to 3.2% a year",
          "It falls from 2.0% to 0.8% a year",
          "It rises from 20% to 32% a year",
          "It stays the same, because the birth rate does not change",
        ],
        answerIndex: 0,
        explanation:
          "Before: 40 − 20 = 20 per 1,000 = 2.0%. After: 40 − 8 = 32 per 1,000 = 3.2%. When deaths fall but births stay high, the gap widens and growth speeds up — exactly what happened in many countries in the 20th century. '20% to 32%' forgets to divide 'per 1,000' by 10.",
        difficulty: "challenge",
        guideRef: "death-rate-factors",
        hints: ["Calculate natural increase before and after.", "Convert per 1,000 to % by dividing by 10."],
        strategy: "Use figures from the source",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3
  // =========================================================================
  {
    id: "population-change-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "population-change-m3-q01",
        question: "What does a **total fertility rate (TFR)** of 2.1 mean?",
        options: [
          "There are 2.1 births per 1,000 people per year",
          "On average, each woman has 2.1 children during her lifetime",
          "The population grows by 2.1% a year",
          "2.1 babies die for every 1,000 born",
        ],
        answerIndex: 1,
        explanation:
          "TFR is the average number of children a woman would have in her lifetime. 2.1 is the **replacement level**: two children replace the parents, and the extra 0.1 covers children who die young. 'Births per 1,000 people' is the birth rate, a different measure.",
        difficulty: "warmup",
        guideRef: "birth-rate-factors",
        hints: ["Fertility rate is about women and the number of children they have."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q02",
        question: "What is **life expectancy**?",
        options: [
          "The average number of years a person born now can expect to live",
          "The age of the oldest person in the country",
          "The number of deaths per 1,000 people per year",
          "The average age of everyone in the country",
        ],
        answerIndex: 0,
        explanation:
          "Life expectancy is the average lifespan a newborn can expect if today's death rates continue. The oldest person is an extreme value, not an average, and deaths per 1,000 is the death rate.",
        difficulty: "warmup",
        guideRef: "death-rate-factors",
        hints: ["'Expectancy' — how long you can expect to live."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q03",
        question: "Which of these is **forced** migration?",
        options: [
          "A banker moving from London to Singapore for a promotion",
          "A student moving abroad to study",
          "A family moving to live near the grandparents",
          "Villagers fleeing a volcanic eruption that has buried their homes",
        ],
        answerIndex: 3,
        explanation:
          "Forced migrants have no real choice — a disaster, war or persecution makes staying impossible. The banker, student and family all chose to move, so theirs is voluntary migration.",
        difficulty: "warmup",
        guideRef: "migration",
        hints: ["Which people could not safely stay at home?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q04",
        question: "Which factor tends to **lower** birth rates?",
        options: [
          "Children being needed to work on farms",
          "High infant mortality",
          "Easy access to contraception and family planning",
          "Few girls attending secondary school",
        ],
        answerIndex: 2,
        explanation:
          "Contraception lets couples choose how many children to have and when, so birth rates fall. Farm work, high infant mortality and limited schooling for girls all tend to keep birth rates **high**.",
        difficulty: "warmup",
        guideRef: "birth-rate-factors",
        hints: ["Three options push birth rates up. Which one lets couples plan smaller families?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q05",
        question: "Why does providing clean water lower death rates?",
        options: [
          "Clean water makes people grow taller",
          "Clean water means fewer babies are born",
          "Clean water helps farmers grow crops for export",
          "It stops the spread of water-borne diseases such as cholera and diarrhoea, which kill many young children",
        ],
        answerIndex: 3,
        explanation:
          "Dirty water spreads germs that cause cholera, typhoid and diarrhoeal disease; young children are especially at risk. Clean water and sanitation break that chain, so fewer people die. Fewer births would change the birth rate, not the death rate.",
        difficulty: "core",
        guideRef: "death-rate-factors",
        hints: ["What can people catch from dirty water?", "Who is most likely to die from those diseases?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q06",
        question:
          "In 2024 Singapore had about 6.0 million people, of whom about 1.9 million were non-residents (for example foreign workers and students). Roughly what proportion were non-residents?",
        options: ["About 10%", "About 30%", "About 50%", "About 70%"],
        answerIndex: 1,
        explanation:
          "1.9 ÷ 6.0 ≈ 0.32, so roughly 30% — nearly a third of everyone living in Singapore. This shows how important migrant workers are to Singapore's population and economy. '70%' is roughly the share of **residents**, not non-residents.",
        difficulty: "core",
        guideRef: "migration",
        hints: ["Divide 1.9 by 6.0.", "Is 1.9 closer to a tenth, a third or a half of 6.0?"],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q07",
        question:
          "In some communities, religious or cultural beliefs discourage the use of contraception. What is the most likely effect on the population?",
        options: ["Higher birth rates", "Lower birth rates", "Higher death rates", "More emigration"],
        answerIndex: 0,
        explanation:
          "If couples do not use contraception, they are likely to have more children, so birth rates stay higher. Some faiths also value large families. These beliefs affect births, not deaths or migration directly.",
        difficulty: "core",
        guideRef: "birth-rate-factors",
        hints: ["What is contraception used for?", "Which population measure does it affect?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q08",
        question:
          "A town starts the year with 50,000 people.\n\n| Births | Deaths | Immigrants | Emigrants |\n|---|---|---|---|\n| 600 | 450 | 300 | 800 |\n\nWhat is its population at the end of the year?",
        options: ["50,650", "50,150", "49,650", "49,500"],
        answerIndex: 2,
        explanation:
          "Natural change = 600 − 450 = +150. Net migration = 300 − 800 = −500. Total change = 150 − 500 = −350, so 50,000 − 350 = **49,650**. '50,650' flips the sign of net migration; '50,150' ignores migration; '49,500' ignores natural change.",
        difficulty: "core",
        guideRef: "significance-of-factors",
        hints: ["Work out natural change and net migration separately.", "Add them (watch the signs), then apply the change to 50,000."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q09",
        question: "Which is an example of **internal** migration?",
        options: [
          "A worker moving from Malaysia to Singapore",
          "A family moving from a village in Yunnan to Shanghai, in China",
          "A Syrian refugee reaching Germany",
          "A British student going to university in Australia",
        ],
        answerIndex: 1,
        explanation:
          "Yunnan and Shanghai are both in China, so the family has stayed inside one country — internal migration (here, rural-to-urban). The other moves all cross international borders.",
        difficulty: "core",
        guideRef: "migration",
        hints: ["Internal = within one country.", "Which option has both places in the same country?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q10",
        question: "Why can a war raise the death rate even among people who never go near the fighting?",
        options: [
          "Soldiers take all the vaccines",
          "War always increases the food supply",
          "War makes the birth rate rise",
          "Hospitals, water supplies and food deliveries are disrupted, so disease and hunger spread",
        ],
        answerIndex: 3,
        explanation:
          "Conflict damages hospitals, water pipes and roads, and crops cannot be grown or delivered. Malnutrition and diseases such as cholera then kill many more people than the fighting itself. War usually *reduces* the food supply.",
        difficulty: "core",
        guideRef: "death-rate-factors",
        hints: ["Think about what keeps people alive day to day.", "What happens to those services in a war zone?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q11",
        question: "What is the **best** way to decide which factor is most significant in a country's population change?",
        options: [
          "Compare the size of each factor's effect using data, e.g. natural change against net migration per 1,000",
          "Choose the factor that is mentioned most often in the news",
          "Assume the birth rate always matters most",
          "Count how many different factors there are",
        ],
        answerIndex: 0,
        explanation:
          "Significance should be judged with **evidence**: measure how much each factor changes the population and compare. The most important factor varies from place to place — in Niger it is the high birth rate; in Singapore it is immigration — so assuming the birth rate always wins is a mistake.",
        difficulty: "core",
        guideRef: "significance-of-factors",
        hints: ["A good judgement needs evidence.", "Does the same factor matter most everywhere?"],
        strategy: "Weigh both sides then judge",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q12",
        question: "How can a state pension scheme help to **reduce** the birth rate?",
        options: [
          "Pensions make people retire earlier",
          "Pensions are paid only to parents with many children",
          "Parents no longer rely on their children to support them in old age, so they choose to have fewer",
          "Pensions raise infant mortality",
        ],
        answerIndex: 2,
        explanation:
          "Without pensions, children are their parents' security in old age, so families have several. A reliable pension removes that need. A pension paid only to big families would encourage *more* children, not fewer.",
        difficulty: "core",
        guideRef: "birth-rate-factors",
        hints: ["Who looks after elderly parents when there is no pension?", "What happens to that reason for having children once a pension exists?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q13",
        question:
          "Country Q (rates per 1,000 people per year):\n\n| Year | Birth rate | Death rate | Net migration rate |\n|---|---|---|---|\n| 2000 | 20 | 7 | +3 |\n| 2020 | 9 | 10 | +12 |\n\nWhich statement is **best** supported by the data?",
        options: [
          "The population fell in 2020 because deaths exceeded births",
          "Natural change was the main driver of growth in both years",
          "The population grew faster in 2020 than in 2000",
          "Migration became more important: in 2000 it added less than natural change, but by 2020 it was the only reason the population grew",
        ],
        answerIndex: 3,
        explanation:
          "2000: natural change 20 − 7 = +13, migration +3, total +16. 2020: natural change 9 − 10 = −1, migration +12, total +11. So migration went from the smaller part of growth to the only source of it. The population did **not** fall in 2020 (+11), and it grew more slowly than in 2000 (+11 < +16).",
        difficulty: "challenge",
        guideRef: "significance-of-factors",
        hints: ["Calculate natural change and total change for each year.", "Was total change positive or negative in 2020?", "Compare +16 with +11."],
        strategy: "TEA (Trend, Evidence, Anomaly)",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q14",
        question:
          "Which piece of evidence would **best** show that women's education, rather than wealth, lowers birth rates?",
        options: [
          "Rich countries have lower birth rates than poor countries",
          "Within the same country and income group, women with secondary education have fewer children than women with no schooling",
          "Singapore is wealthy and has a low birth rate",
          "Niger is poor and has a high birth rate",
        ],
        answerIndex: 1,
        explanation:
          "Rich countries usually also have better-educated women, so comparing countries cannot separate the two factors. Comparing women of the **same** income in the same country, who differ only in education, isolates education's effect. The Singapore and Niger facts mix wealth and education together.",
        difficulty: "challenge",
        guideRef: "birth-rate-factors",
        hints: ["Wealth and education usually go together. How could you separate them?", "A fair test changes only one thing at a time."],
        strategy: "Weigh both sides then judge",
      },
      {
        kind: "mcq",
        id: "population-change-m3-q15",
        question:
          "If Singapore stopped all immigration, what would most likely happen over the following 30 years?",
        options: [
          "The resident population would start to shrink and grow older, with fewer workers supporting more elderly people",
          "The fertility rate would automatically rise to 2.1",
          "The death rate would fall to zero",
          "The population would grow faster than before",
        ],
        answerIndex: 0,
        explanation:
          "With a TFR of about 0.97, each generation of residents is only about half the size of the one before (or less). As the large older generations age, deaths would overtake births, so without migrants the population would shrink and the share of elderly people would rise. Fertility does not bounce back automatically — governments have found it very hard to raise.",
        difficulty: "challenge",
        guideRef: "migration",
        hints: ["What does a TFR far below 2.1 do to each new generation?", "Who would fill the jobs left by retiring workers?"],
        strategy: "Cause → process → effect",
      },
    ],
  },
];
