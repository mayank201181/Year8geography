import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "coral-reefs",
  title: "Coral Reefs & Their Threats",
  strand: "Coasts",
  icon: "🪸",
  summary: "Tiny animals, giant structures: how reefs form, where they grow, why they matter and what is killing them.",
  intro:
    "Coral reefs are built by animals smaller than your fingernail, working in partnership with algae that live inside their bodies. In this topic you will find out what a coral actually is and how the three types of reef form, where reefs can grow and why, why they matter so much to wildlife and to people (from Singapore's Southern Islands to the Great Barrier Reef), and how marine heatwaves, ocean acidification and local pressures such as blast fishing, run-off and reclamation are putting them at risk.",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "what-are-reefs",
      heading: "What is a coral reef?",
      discovery: {
        problem:
          "A coral reef looks like a garden of colourful rocks and plants. Yet biologists say coral is an **animal**, and that it gets most of its food from sunlight. How can a 'rock' be alive, and why would an animal need sunshine?",
        idea:
          "Each coral is a colony of tiny animals called **polyps**. Each polyp builds a limestone cup to live in, and inside its tissue live microscopic algae (**zooxanthellae**) that make food from sunlight and share it. Millions of polyps, building on the skeletons of earlier generations for thousands of years, make the reef.",
      },
      body:
        "A **coral reef** is a ridge or mound of limestone built up over thousands of years by living things, mainly **reef-building (hard) corals**.\n\n**The builders: coral polyps**\n\n- A **polyp** is a small, soft animal, related to jellyfish and sea anemones. Most are only a few millimetres across.\n- It has a ring of **tentacles** with stinging cells around a central **mouth**. At night many polyps stretch out to catch tiny drifting animals (**zooplankton**).\n- Each polyp takes dissolved calcium and carbonate from sea water and builds a hard cup of **calcium carbonate** (limestone) around its base.\n- Polyps are joined together in a **colony**. When they die, their skeletons stay behind and new polyps grow on top, so the reef slowly gets bigger.\n\n**The partners: zooxanthellae**\n\nInside the polyp's tissue live millions of microscopic algae called **zooxanthellae** (say 'zoh-zan-THEL-ee'). They **photosynthesise** and pass sugars to the coral: up to about 90% of its food in sunny water. In return the coral gives them shelter plus the carbon dioxide and nutrients they need. A close partnership in which both species benefit is called **symbiosis**. The algae also give coral most of its colour.\n\n**Three types of reef**\n\n| Reef type | Where it grows | Example |\n|---|---|---|\n| **Fringing reef** | Right next to the shore, with little or no lagoon | Much of the Red Sea coast; Singapore's Southern Islands |\n| **Barrier reef** | Further offshore, separated from the land by a wide, deep **lagoon** | Great Barrier Reef (Australia); Belize Barrier Reef |\n| **Atoll** | A ring of reef (often topped with low sandy islands) around a lagoon, with no central island | The Maldives; Bikini Atoll |\n\n**Darwin's subsidence idea**\n\nIn 1842 Charles Darwin suggested that the three types are stages in one story:\n\n1. A **fringing reef** grows around a volcanic island.\n2. Over millions of years the island slowly **sinks (subsides)**, but the coral keeps growing upwards towards the light, so a lagoon opens up behind it: a **barrier reef**.\n3. When the island has sunk out of sight, only a ring of reef is left: an **atoll**.\n\n> In the 1950s, drill holes on Enewetak Atoll in the Pacific passed through more than 1,000 m of reef limestone before reaching volcanic rock: strong evidence that Darwin was right for many atolls.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top: cut-away coral polyp showing tentacles, mouth, gut, algae in its tissue and a limestone cup. Bottom: Darwin's sequence of a fringing reef, a barrier reef with a lagoon, and an atoll around a sunken volcano"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="8" y="16" font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937">1. A coral polyp, cut open (only a few mm across)</text><rect x="150" y="140" width="180" height="10" fill="#d6d3d1" stroke="#334155" stroke-width="0.8"/><path d="M200 100 L200 140 L280 140 L280 100 L270 100 L270 132 L210 132 L210 100 Z" fill="#d6d3d1" stroke="#334155" stroke-width="1"/><g fill="none" stroke="#b45309" stroke-width="4" stroke-linecap="round"><path d="M215 66 Q200 50 190 32"/><path d="M225 63 Q216 44 212 26"/><path d="M235 62 Q232 42 232 22"/><path d="M245 62 Q248 42 250 22"/><path d="M255 63 Q264 44 268 26"/><path d="M265 66 Q280 50 290 32"/></g><path d="M212 130 L212 70 Q212 62 222 62 L258 62 Q268 62 268 70 L268 130 Z" fill="#fde68a" stroke="#334155" stroke-width="1.2"/><ellipse cx="240" cy="100" rx="16" ry="26" fill="#fff7ed" stroke="#334155" stroke-width="0.8"/><line x1="240" y1="63" x2="240" y2="74" stroke="#1f2937" stroke-width="2"/><g fill="#92400e"><circle cx="218" cy="74" r="2"/><circle cx="219" cy="88" r="2"/><circle cx="218" cy="102" r="2"/><circle cx="219" cy="116" r="2"/><circle cx="262" cy="74" r="2"/><circle cx="261" cy="88" r="2"/><circle cx="262" cy="102" r="2"/><circle cx="261" cy="116" r="2"/><circle cx="226" cy="68" r="2"/><circle cx="254" cy="68" r="2"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937"><line x1="182" y1="30" x2="194" y2="36" stroke="#1f2937"/><text x="180" y="30" text-anchor="end">tentacles with</text><text x="180" y="43" text-anchor="end">stinging cells</text><line x1="182" y1="96" x2="226" y2="98" stroke="#1f2937"/><text x="180" y="100" text-anchor="end">gut (stomach)</text><line x1="146" y1="145" x2="152" y2="145" stroke="#1f2937"/><text x="144" y="141" text-anchor="end">older skeletons</text><text x="144" y="154" text-anchor="end">build up the reef</text><line x1="241" y1="63" x2="298" y2="56" stroke="#1f2937"/><text x="302" y="59">mouth</text><line x1="262" y1="88" x2="298" y2="84" stroke="#1f2937"/><text x="302" y="83">zooxanthellae (algae)</text><text x="302" y="96">live inside the tissue</text><line x1="281" y1="128" x2="298" y2="124" stroke="#1f2937"/><text x="302" y="122">limestone cup</text><text x="302" y="135">(calcium carbonate)</text></g><line x1="0" y1="162" x2="480" y2="162" stroke="#334155" stroke-width="0.8"/><text x="8" y="178" font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937">2. Reef types: Darwin's subsidence idea</text><g stroke="#334155" stroke-width="1"><rect x="8" y="225" width="144" height="75" fill="#bae6fd" stroke="none"/><rect x="168" y="225" width="144" height="75" fill="#bae6fd" stroke="none"/><rect x="328" y="225" width="144" height="75" fill="#bae6fd" stroke="none"/><path d="M20 300 L62 212 L80 205 L98 212 L140 300 Z" fill="#d6d3d1"/><path d="M55.8 225 L62 212 L80 205 L98 212 L104.2 225 Z" fill="#bbf7d0"/><path d="M40 222 L57 222 L48.6 240 L38 236 Z" fill="#fda4af"/><path d="M103 222 L120 222 L122 236 L111.4 240 Z" fill="#fda4af"/><path d="M180 300 L222 225 L240 216 L258 225 L300 300 Z" fill="#d6d3d1"/><path d="M222 225 L240 216 L258 225 Z" fill="#bbf7d0"/><path d="M181 222 L196 222 L196 273.2 L181 298.2 Z" fill="#fda4af"/><path d="M284 222 L299 222 L299 298.2 L284 273.2 Z" fill="#fda4af"/><path d="M340 300 L382 245 L400 238 L418 245 L460 300 Z" fill="#d6d3d1"/><path d="M348 222 L364 222 L364 268.6 L348 289.5 Z" fill="#fda4af"/><path d="M436 222 L452 222 L452 289.5 L436 268.6 Z" fill="#fda4af"/></g><g stroke="#1f2937" stroke-width="1"><line x1="8" y1="225" x2="152" y2="225"/><line x1="168" y1="225" x2="312" y2="225"/><line x1="328" y1="225" x2="472" y2="225"/></g><g font-size="12" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="80" y="196">Fringing reef</text><text x="240" y="196">Barrier reef</text><text x="400" y="196">Atoll</text></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="80" y="219">island</text><text x="80" y="252">volcano</text><text x="207" y="214">lagoon</text><line x1="209" y1="216" x2="209" y2="234" stroke="#1f2937"/><text x="400" y="236">lagoon</text><text x="400" y="272">sunken</text><text x="400" y="285">volcano</text><text x="80" y="296">reef at the shore</text><text x="240" y="296">reef far offshore</text><text x="400" y="211">ring of reef</text><line x1="366" y1="208" x2="358" y2="220" stroke="#1f2937"/><line x1="434" y1="208" x2="442" y2="220" stroke="#1f2937"/><text x="326" y="219" text-anchor="end">sea level</text></g><g fill="#1f2937"><path d="M153 260 L165 260 L165 256 L171 262 L165 268 L165 264 L153 264 Z"/><path d="M313 260 L325 260 L325 256 L331 262 L325 268 L325 264 L313 264 Z"/></g><text x="240" y="314" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Over millions of years the island sinks while the coral keeps growing up towards the light.</text></svg>`,
      diagramCaption:
        "Top: a coral polyp is an animal with algae living in its tissue, sitting in a limestone cup it builds itself. Bottom: Darwin's idea. As a volcanic island sinks, a fringing reef becomes a barrier reef and finally an atoll.",
      workedExamples: [
        {
          title: "Read the resource: which reef type?",
          problem:
            "A satellite image shows a ring of reef about 10 km across around a shallow turquoise lagoon. There is no hill or island in the centre, only a few low sandy islets on the ring itself. Identify the reef type and explain how it probably formed. [3]",
          steps: [
            "**Read the clues:** a ring shape, a lagoon, and no central island.",
            "**Match to the types:** fringing = touching the coast; barrier = separated from a coast by a lagoon; a ring with no central island = atoll.",
            "**Explain with Darwin's sequence (cause → process → effect):** it began as a fringing reef around a volcanic island. The island slowly sank while the coral kept growing upwards, so a lagoon opened up (the barrier reef stage). Finally the island disappeared beneath the sea, leaving only the ring of reef.",
          ],
          answer:
            "An **atoll**. It probably started as a fringing reef round a volcanic island; as the island subsided the coral grew upwards, becoming a barrier reef and then an atoll once the island had sunk completely.",
          yourTurn: {
            question:
              "Your turn: a reef runs parallel to a coastline about 30 km offshore, separated from the land by a wide, deep lagoon. Name this type of reef.",
            answer: { type: "text", accept: ["barrier reef", "barrier", "a barrier reef", "barrier-reef"] },
            solution:
              "It is separated from the land by a wide lagoon, so it is a **barrier reef** (like the Great Barrier Reef). A fringing reef would be right next to the shore; an atoll has no mainland at all.",
          },
        },
        {
          title: "Calculation: how slowly reefs grow",
          problem:
            "Suppose a reef builds upwards by about 4 mm a year (real rates vary a lot, from under 1 mm to over 10 mm a year). How many years would it take to build 1 metre of reef?",
          steps: [
            "**Make the units match:** 1 m = 1,000 mm.",
            "**Years = height ÷ growth per year.**",
            "    1,000 mm ÷ 4 mm per year = 250 years",
            "So a reef that is tens of metres thick represents thousands of years of growth, which is why damage can take so long to repair.",
          ],
          answer: "About 250 years.",
          yourTurn: {
            question:
              "Your turn: a coral colony grows upwards at 5 mm per year. How many years would it take to grow 1.5 m? Give your answer in years.",
            answer: { type: "number", value: 300 },
            solution: "1.5 m = 1,500 mm. 1,500 ÷ 5 = 300 years.",
          },
        },
      ],
      keyPoints: [
        "Coral is an **animal** (a polyp), not a plant or a rock.",
        "Polyps build skeletons of **calcium carbonate** (limestone); a reef is millions of these skeletons built up over thousands of years.",
        "**Zooxanthellae** (algae) live inside the polyps and give them most of their food by photosynthesis: a **symbiotic** partnership.",
        "Three reef types: **fringing** (at the shore), **barrier** (offshore, behind a lagoon), **atoll** (a ring round a lagoon, no central island).",
        "Darwin (1842): a sinking volcanic island turns a fringing reef into a barrier reef and then an atoll.",
      ],
      whyItWorks:
        "Why does an animal need sunlight? Because most of its food comes from its algae partners, and algae can only photosynthesise in light. That same fact explains Darwin's sequence. Coral near the sunlit surface thrives and keeps adding limestone on top, while anything dragged too deep goes dark and dies. So as the island sinks, the reef 'climbs' to stay near the surface and is left as a ring when the island has gone.",
      strategies: ["Sketch it", "Cause → process → effect", "Read the key first"],
      thinkDeeper:
        "Darwin worked out the atoll sequence in the 1830s without ever drilling into a reef. What could he see from the surface that made the idea sensible, and why did it take until the 1950s to test it properly?",
    },
    // ------------------------------------------------------------------
    {
      id: "where-reefs-grow",
      heading: "Where coral reefs grow",
      discovery: {
        problem:
          "On a map of coral reefs there are thousands along the coasts of Indonesia and the Caribbean, but almost none along the west coast of South America, even near the Equator. There are also very few at the mouths of huge tropical rivers like the Amazon. What could stop coral growing in hot, tropical places?",
        idea:
          "Latitude is not the only control. Coral needs water that is **warm, clear, shallow, sunlit and salty**. Cold ocean currents chill the west coasts of South America and southern Africa, and big rivers pour out fresh, muddy water that blocks light and lowers salinity. Wherever one condition fails, reefs struggle.",
      },
      body:
        "Reef-building corals are fussy. Most of the world's reefs lie roughly between **30°N and 30°S**, where these conditions are met:\n\n| Condition | What coral needs | Why |\n|---|---|---|\n| **Temperature** | Water of about **18–29 °C** (best about 23–29 °C) | Too cold and coral grows slowly or dies; too hot and it bleaches |\n| **Light** | Shallow, sunlit water: most reefs grow in the top 25 m or so | The algae need light to photosynthesise |\n| **Clear water** | Little **sediment** (mud) | Mud blocks sunlight and can smother polyps |\n| **Salinity** | Normal sea water (roughly 32–42 parts per thousand) | Fresh water from rivers stresses coral |\n| **Clean water** | Low in nutrients from fertiliser or sewage | Extra nutrients feed seaweed that overgrows coral |\n| **Somewhere to attach** | A hard surface such as rock or old reef | Young polyps cannot settle on soft mud |\n\n**Describing the distribution (CLOCC)**\n\n- Most reefs are in the **tropics**, especially in the **Indian Ocean**, the western **Pacific Ocean** and the **Caribbean Sea**.\n- There are few reefs on the **west coasts** of South America and Africa, where **cold currents** (the Humboldt off Peru and the Benguela off Namibia) and cold water rising from the deep keep the sea cool.\n- Big, muddy rivers such as the Amazon and the Ganges leave gaps in the pattern.\n- An anomaly: **Bermuda** has reefs at about 32°N because the warm **Gulf Stream** flows past it.\n\n**The Coral Triangle**\n\nThe richest reefs on Earth lie in the **Coral Triangle**: the seas of Indonesia, Malaysia, the Philippines, Papua New Guinea, Timor-Leste and the Solomon Islands. It holds roughly **three-quarters** of the world's reef-building coral species (about 600) and is often called the 'Amazon of the seas'.\n\n**Singapore's reefs**\n\nSingapore lies at about 1°N, on the edge of the Coral Triangle. Its port is one of the busiest in the world, and land reclamation has buried much of its original reef (an often-quoted estimate is about 60%). Even so, Singapore's waters still host **more than 250 species of hard coral**, mostly on **fringing and patch reefs** around Southern Islands such as Pulau Hantu, Kusu Island and the Sisters' Islands. The water is often murky with sediment, so many of Singapore's corals are hardy species that can cope with low light.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified world map showing coral reefs mostly between 30 degrees north and 30 degrees south, with the Coral Triangle, Great Barrier Reef, Caribbean, Red Sea and Singapore marked, and cold currents off western South America and southern Africa"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><rect x="0" y="99" width="480" height="126.0" fill="#bae6fd"/><rect x="0" y="36" width="480" height="63.0" fill="#e0f2fe"/><rect x="0" y="225" width="480" height="42.0" fill="#e0f2fe"/><path d="M16 36 L40 36 L60 40.2 L74.7 61.2 L74.7 78 L80 90.6 L86.7 99 L93.3 113.7 L100 120 L112 128.4 L117.3 130.5 L125.3 136.8 L129.3 143.1 L134.7 143.1 L137.3 145.2 L136 141 L129.3 138.9 L128 130.5 L122.7 128.4 L122.7 117.9 L118.7 122.1 L113.3 122.1 L110.7 115.8 L110.7 105.3 L114.7 101.1 L120 101.1 L126.7 99 L129.3 101.1 L130.7 107.4 L133.3 109.5 L133.3 103.2 L132 96.9 L138.7 88.5 L141.3 78 L146.7 73.8 L152 69.6 L158.7 65.4 L166.7 57 L162.7 46.5 L157.3 40.2 L154.7 36 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M137.3 145.2 L144 136.8 L157.3 141 L170.7 151.5 L173.3 162 L181.3 166.2 L193.3 174.6 L188 191.4 L185.3 208.2 L176 216.6 L169.3 233.4 L162.7 241.8 L157.3 246 L153.3 250.2 L149.3 267 L141.3 267 L142.7 246 L145.3 225 L146.7 199.8 L138.7 191.4 L132 172.5 L133.3 162 L136 155.7 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M228 71.7 L228 84.3 L233.3 86.4 L240 82.2 L244 73.8 L248 71.7 L252 69.6 L256 73.8 L261.3 82.2 L264 78 L257.3 67.5 L265.3 73.8 L270.7 84.3 L274.7 78 L278.7 75.9 L276 84.3 L288 86.4 L286.7 92.7 L285.3 103.2 L292 117.9 L297.3 134.7 L309.3 128.4 L318.7 115.8 L316 109.5 L322.7 109.5 L329.3 111.6 L336 117.9 L337.3 128.4 L342.7 145.2 L346.7 134.7 L346.7 128.4 L356 117.9 L361.3 115.8 L365.3 128.4 L370.7 128.4 L370.7 145.2 L373.3 153.6 L378 159.1 L378.7 157.8 L377.3 151.5 L373.3 134.7 L380 143.1 L385.3 136.8 L384 117.9 L392 115.8 L400 99 L402.7 84.3 L397.3 80.1 L402.7 78 L409.3 82.2 L412 88.5 L413.3 71.7 L428 61.2 L430.7 50.7 L420 46.5 L440 36 L246.7 36 L246.7 40.2 L250.7 46.5 L250.7 50.7 L245.3 52.8 L237.3 61.2 L233.3 61.2 L238.7 69.6 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M217.3 117.9 L218.7 103.2 L226.7 99 L232 86.4 L253.3 84.3 L254.7 92.7 L266.7 96.9 L282.7 96.9 L285.3 105.3 L289.3 115.8 L292 130.5 L297.3 136.8 L308 136.8 L304 151.5 L296 164.1 L293.3 183 L293.3 193.5 L286.7 210.3 L284 222.9 L276 233.4 L266.7 235.5 L264 229.2 L260 218.7 L256 199.8 L257.3 183 L252 164.1 L253.3 153.6 L246.7 149.4 L233.3 151.5 L229.3 153.6 L222.7 145.2 L217.3 130.5 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M298.7 214.5 L302.7 214.5 L306.7 193.5 L305.3 187.2 L298.7 197.7 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M392 208.2 L392 233.4 L397.3 235.5 L405.3 231.3 L414.7 227.1 L420 235.5 L424 235.5 L428 241.8 L434.7 243.9 L440 239.7 L444 220.8 L444 214.5 L440 208.2 L434.7 201.9 L433.3 193.5 L430.7 185.1 L429.3 185.1 L428 197.7 L421.3 193.5 L422.7 187.2 L414.7 185.1 L412 193.5 L406.7 191.4 L402.7 199.8 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M366.7 151.5 L370.7 153.6 L378.7 166.2 L381.3 174.6 L376 170.4 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M385.3 157.8 L388 168.3 L394.7 170.4 L398.7 159.9 L396 147.3 L390.7 153.6 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M380 174.6 L392 176.7 L392 179.8 L381.3 177.8 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M398.7 172.5 L400 159.9 L406.7 158.9 L401.3 164.1 L402.7 172.5 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M414.7 164.1 L424 166.2 L436 174.6 L440 183 L428 180.9 L424 178.8 L416 168.3 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M400 124.2 L402.7 124.2 L405.3 136.8 L408 147.3 L402.7 147.3 L400 132.6 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M413.3 96.9 L420 90.6 L426.7 86.4 L429.3 78 L428 67.5 L426.7 75.9 L421.3 86.4 L413.3 90.6 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M233.3 57 L241.3 54.9 L240 50.7 L236 44.4 L233.3 40.2 L232 44.4 L233.3 48.6 L236 48.6 L233.3 52.8 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M470.7 235.5 L477.3 241.8 L473.3 248.1 L469.3 254.4 L462.7 258.6 L468 250.2 L472 243.9 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><path d="M346.7 141 L349.3 147.3 L346.7 149.4 Z" fill="#bbf7d0" stroke="#334155" stroke-width="0.8"/><line x1="0" y1="99" x2="480" y2="99" stroke="#1f2937" stroke-width="1" stroke-dasharray="6 3"/><text x="2" y="97.0" font-size="11" font-family="sans-serif" fill="#1f2937">30°N</text><line x1="0" y1="112.7" x2="480" y2="112.7" stroke="#1f2937" stroke-width="0.6" stroke-dasharray="2 3"/><text x="2" y="110.7" font-size="11" font-family="sans-serif" fill="#1f2937"></text><line x1="0" y1="162" x2="480" y2="162" stroke="#1f2937" stroke-width="1"/><text x="2" y="160.0" font-size="11" font-family="sans-serif" fill="#1f2937">Equator 0°</text><line x1="0" y1="211.3" x2="480" y2="211.3" stroke="#1f2937" stroke-width="0.6" stroke-dasharray="2 3"/><text x="2" y="209.3" font-size="11" font-family="sans-serif" fill="#1f2937"></text><line x1="0" y1="225" x2="480" y2="225" stroke="#1f2937" stroke-width="1" stroke-dasharray="6 3"/><text x="2" y="223.0" font-size="11" font-family="sans-serif" fill="#1f2937">30°S</text><path d="M398.7 120 L457.3 185.1 L392 180.9 Z" fill="#fecaca" fill-opacity="0.55" stroke="#b91c1c" stroke-width="1.2" stroke-dasharray="4 2"/><circle cx="133.3" cy="110.5" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="137.3" cy="111.6" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="140" cy="120" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="146.7" cy="124.2" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="156" cy="130.5" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="158.7" cy="134.7" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="122.7" cy="126.3" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="153.3" cy="94.2" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="189.3" cy="197.7" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="288" cy="109.5" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="290.7" cy="120" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="293.3" cy="172.5" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="301.3" cy="204" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="337.3" cy="153.6" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="336" cy="176.7" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="308" cy="109.5" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="412" cy="107.4" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="401.3" cy="141" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="397.3" cy="149.4" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="404" cy="172.5" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="410.7" cy="168.3" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="426.7" cy="183" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="453.3" cy="180.9" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="461.3" cy="206.1" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="477.3" cy="197.7" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="40" cy="197.7" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="30.7" cy="120" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="436" cy="197.7" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="440" cy="206.1" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="433.3" cy="189.3" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="393.3" cy="208.2" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="390.7" cy="218.7" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="120" cy="164.1" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="93.3" cy="115.8" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><circle cx="378.4" cy="159.5" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.6"/><path d="M136 250.2 C130.7 214.5 128 187.2 125.3 168.3" fill="none" stroke="#1d4ed8" stroke-width="2"/><path d="M121.3 174.3 L125.3 168.3 L128.3 175.3" fill="none" stroke="#1d4ed8" stroke-width="2"/><path d="M258.7 237.6 C253.3 220.8 250.7 204 249.3 189.3" fill="none" stroke="#1d4ed8" stroke-width="2"/><path d="M245.3 195.3 L249.3 189.3 L253.3 195.3" fill="none" stroke="#1d4ed8" stroke-width="2"/><line x1="378.4" y1="160" x2="362" y2="192" stroke="#1f2937" stroke-width="1"/><text x="362" y="204" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">Singapore</text><text x="240" y="22" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">Where warm-water coral reefs grow</text><line x1="440" y1="198" x2="452" y2="222" stroke="#1f2937" stroke-width="1"/><text x="458" y="234" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">GBR</text><text x="164" y="124" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="start" font-weight="normal">Caribbean</text><text x="160" y="90" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="start" font-weight="normal">Bermuda</text><text x="262" y="126" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="normal">Red Sea</text><text x="122" y="240" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="normal">cold current</text><text x="246" y="252" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="normal">cold current</text><text x="2" y="110" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="start" font-weight="normal">23.5°N</text><text x="2" y="209" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="start" font-weight="normal">23.5°S</text><line x1="0" y1="267" x2="480" y2="267" stroke="#334155" stroke-width="0.8"/><circle cx="14" cy="284" r="4" fill="#e11d48"/><text x="22" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="start" font-weight="normal">coral reefs</text><rect x="100" y="278" width="16" height="12" fill="#fecaca" stroke="#b91c1c" stroke-dasharray="3 2"/><text x="121" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="start" font-weight="normal">Coral Triangle</text><line x1="218" y1="284" x2="240" y2="284" stroke="#1d4ed8" stroke-width="2"/><text x="245" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="start" font-weight="normal">cold current</text><rect x="330" y="278" width="16" height="12" fill="#bae6fd" stroke="#334155" stroke-width="0.5"/><text x="351" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="start" font-weight="normal">30°N–30°S belt</text></svg>`,
      diagramCaption:
        "Simplified map. Warm-water reefs (red dots) cluster between about 30°N and 30°S. Cold currents (blue) leave gaps on western coasts, the Coral Triangle (pink) is the richest region, and Bermuda is the anomaly, warmed by the Gulf Stream.",
      workedExamples: [
        {
          title: "Read the resource: can coral grow here?",
          problem:
            "Three survey sites (simplified data):\n\n| Site | Coolest month sea temperature (°C) | Warmest month (°C) | Water | Depth (m) |\n|---|---|---|---|---|\n| A | 24 | 29 | clear | 10 |\n| B | 14 | 22 | clear | 8 |\n| C | 26 | 29 | very muddy, near a river mouth | 5 |\n\nWhich site is best for a coral reef? Explain why the other two are unsuitable.",
          steps: [
            "**Treat the conditions as a checklist:** temperature, light (depth), clarity, salinity.",
            "**Site A:** 24–29 °C is inside the 18–29 °C range, the water is clear and only 10 m deep, so sunlight reaches the bottom. Every condition is met.",
            "**Site B:** the coolest month is 14 °C, below the 18 °C minimum, so coral would grow too slowly or die each winter.",
            "**Site C:** the temperature is fine, but muddy water blocks the light the algae need, and fresh river water lowers the salinity.",
          ],
          answer:
            "**Site A.** Site B is too cold in winter (14 °C is below 18 °C); Site C is too muddy and too fresh because of the river.",
          yourTurn: {
            question:
              "Your turn: at Site D the sea temperature ranges from 21 °C in the coolest month to 28 °C in the warmest month. What is the annual temperature range at Site D, in °C?",
            answer: { type: "number", value: 7 },
            solution: "Range = highest − lowest = 28 − 21 = 7 °C. Both values lie within 18–29 °C, so the temperature suits coral.",
          },
        },
        {
          title: "Explain an anomaly",
          problem: "Bermuda lies at about 32°N, outside the usual 30°N–30°S belt, yet it has coral reefs. Suggest why. [2]",
          steps: [
            "**Spot the anomaly:** 32°N is further from the Equator than almost all other reefs.",
            "**Ask what really controls coral:** water temperature, not latitude itself.",
            "**Link to a cause:** the warm Gulf Stream carries tropical water from the Caribbean and the Gulf of Mexico north-east past Bermuda, keeping the sea warm enough in winter.",
          ],
          answer:
            "The warm Gulf Stream ocean current keeps Bermuda's sea warm enough all year (above about 18 °C), so coral can grow further from the Equator than usual.",
          yourTurn: {
            question:
              "Your turn: name the cold ocean current off the west coast of South America (Peru and Chile) that helps explain why reefs are rare there.",
            answer: { type: "text", accept: ["Humboldt Current", "Humboldt", "Peru Current", "Peru", "Humboldt (Peru) Current", "Peru (Humboldt) Current"] },
            solution:
              "The cold **Humboldt (Peru) Current** flows north along the coast, and cold water also wells up from the deep ocean, so the sea is too cool for most reef-building coral.",
          },
        },
      ],
      keyPoints: [
        "Coral needs water that is warm (about 18–29 °C), shallow and sunlit, clear, salty and low in nutrients, plus a hard surface to grow on.",
        "Most reefs lie between about 30°N and 30°S, especially in the Indian and western Pacific Oceans and the Caribbean.",
        "Cold currents on western coasts and muddy, fresh water at big river mouths explain many gaps.",
        "The **Coral Triangle** (Indonesia, Malaysia, the Philippines, Papua New Guinea, Timor-Leste, Solomon Islands) has about three-quarters of all reef-building coral species.",
        "Singapore still has **more than 250** hard coral species despite heavy shipping and land reclamation.",
      ],
      whyItWorks:
        "Every condition traces back to the polyp–algae partnership. The algae need **light**, so the water must be shallow and clear. Both partners are adapted to a narrow band of **warmth**: in cold water their chemistry slows down, while too much heat damages the algae. Corals are adapted to the **salt** level of normal sea water, so fresh water stresses them. And limestone skeletons are easiest to build in warm, tropical sea water. Break any one link and the partnership struggles.",
      strategies: ["CLOCC", "Look for the anomaly", "Use figures from the source", "Eliminate options"],
      thinkDeeper:
        "As the oceans warm, places just outside the tropics may become warm enough for coral. Could reefs simply 'move' away from the Equator? Use the growth conditions to explain what else those new places would need, and why this might take far longer than the warming does.",
    },
    // ------------------------------------------------------------------
    {
      id: "value-of-reefs",
      heading: "Why reefs matter",
      discovery: {
        problem:
          "Coral reefs cover less than 1% of the ocean floor, yet roughly a quarter of all marine species depend on them. How can such a small area support so much life, and why should someone who never goes to the beach care?",
        idea:
          "A reef is like an underwater city. Its branches, ledges, holes and caves give shelter to huge numbers of species, and the coral–algae partnership captures energy from sunlight in water that is otherwise poor in food. People rely on reefs for food, jobs, tourism, coastal protection and even medicines.",
      },
      body:
        "**1. Biodiversity**\n\nReefs cover **less than 1%** of the sea floor but support about **25%** of all marine species: fish, sponges, molluscs, crabs, turtles and sharks. That is why they are called the 'rainforests of the sea'.\n\n**2. Food webs**\n\nEnergy enters the reef through **producers** (the zooxanthellae inside coral, seaweed and phytoplankton), which use sunlight. It passes to grazers such as **parrotfish** and **sea urchins**, to plankton-eaters and coral-eaters such as **butterflyfish**, and then to predators such as **groupers**, **moray eels** and **reef sharks**. Remove one link and others are affected: if too many parrotfish are caught, seaweed can spread and smother the coral.\n\n**3. Value to people**\n\n| Benefit | How | Example |\n|---|---|---|\n| **Food** | Reef fish and shellfish are a key source of protein | Coastal communities across South-East Asia and the Pacific |\n| **Coastal protection** | The reef makes waves break before they reach the shore; a healthy reef can absorb up to about 97% of wave energy | Protects beaches, villages and hotels, e.g. in the Maldives |\n| **Tourism** | Diving, snorkelling and boat trips | The Great Barrier Reef was estimated to support about 64,000 jobs (2017 estimate) |\n| **Jobs and income** | Fishing, guiding, boat building | Small island nations depend heavily on reef income |\n| **Medicine** | Reef animals make unusual chemicals that scientists study | A powerful painkiller was developed from cone-snail venom |\n| **Sand and land** | Parrotfish grind coral into sand; reefs build low islands | Many white beaches and atoll islands are made of coral sand |\n\nAltogether, roughly **half a billion people** depend on reefs for food, income or protection from the sea.\n\n**4. Reefs in Singapore**\n\nSingapore's reefs are small, but they shelter young fish, support research and education (for example, guided intertidal walks and dive trails at the **Sisters' Islands Marine Park**, set up in 2014) and show that reefs can survive next to one of the world's busiest ports.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified coral reef food web: phytoplankton, zooxanthellae and seaweed are producers; zooplankton, coral polyps, sea urchins and parrotfish feed on them; small fish, butterflyfish and crown-of-thorns starfish are eaten by moray eels, groupers, giant tritons and reef sharks"><defs><marker id="fwArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#1f2937"/></marker></defs><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><text x="240" y="20" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A simplified coral reef food web</text><line x1="55" y1="245" x2="55" y2="210" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="55" y1="175" x2="55" y2="140" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="55" y1="105" x2="55" y2="70" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="79" y1="105" x2="145" y2="70" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="175" y1="245" x2="175" y2="210" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="105" y1="192" x2="124" y2="192" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="175" y1="175" x2="175" y2="140" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="175" y1="105" x2="175" y2="70" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="199" y1="175" x2="270" y2="140" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="300" y1="105" x2="300" y2="70" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="336" y1="245" x2="330" y2="210" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="384" y1="245" x2="390" y2="210" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><line x1="420" y1="175" x2="420" y2="70" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><rect x="5" y="36" width="100" height="32" rx="6" fill="#fecaca" stroke="#334155"/><text x="55" y="56" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Moray eel</text><rect x="125" y="36" width="100" height="32" rx="6" fill="#fecaca" stroke="#334155"/><text x="175" y="56" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Grouper</text><rect x="250" y="36" width="100" height="32" rx="6" fill="#fde68a" stroke="#334155"/><text x="300" y="49" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Giant triton</text><text x="300" y="63" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">(sea snail)</text><rect x="370" y="36" width="100" height="32" rx="6" fill="#fecaca" stroke="#334155"/><text x="420" y="56" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Reef shark</text><rect x="5" y="106" width="100" height="32" rx="6" fill="#fde68a" stroke="#334155"/><text x="55" y="119" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Small fish</text><text x="55" y="133" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">(damselfish)</text><rect x="125" y="106" width="100" height="32" rx="6" fill="#fde68a" stroke="#334155"/><text x="175" y="126" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Butterflyfish</text><rect x="250" y="106" width="100" height="32" rx="6" fill="#fde68a" stroke="#334155"/><text x="300" y="119" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Crown-of-thorns</text><text x="300" y="133" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">starfish</text><rect x="5" y="176" width="100" height="32" rx="6" fill="#fde68a" stroke="#334155"/><text x="55" y="196" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Zooplankton</text><rect x="125" y="176" width="100" height="32" rx="6" fill="#fde68a" stroke="#334155"/><text x="175" y="196" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Coral polyps</text><rect x="250" y="176" width="100" height="32" rx="6" fill="#fde68a" stroke="#334155"/><text x="300" y="196" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Sea urchin</text><rect x="370" y="176" width="100" height="32" rx="6" fill="#fde68a" stroke="#334155"/><text x="420" y="196" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Parrotfish</text><rect x="5" y="246" width="100" height="32" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="55" y="266" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Phytoplankton</text><rect x="125" y="246" width="100" height="32" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="175" y="259" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Zooxanthellae</text><text x="175" y="273" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">(algae in coral)</text><rect x="310" y="246" width="100" height="32" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="360" y="259" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Seaweed and</text><text x="360" y="273" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">turf algae</text><circle cx="16" cy="300" r="8" fill="#fde047" stroke="#b45309"/><text x="30" y="304" font-size="11" font-family="sans-serif" fill="#1f2937">Sun powers the producers (green)</text><line x1="222" y1="300" x2="250" y2="300" stroke="#1f2937" stroke-width="1.5" marker-end="url(#fwArrow)"/><text x="256" y="304" font-size="11" font-family="sans-serif" fill="#1f2937">= is eaten by</text><rect x="350" y="292" width="14" height="14" rx="3" fill="#fecaca" stroke="#334155"/><text x="368" y="304" font-size="11" font-family="sans-serif" fill="#1f2937">top predators</text></svg>`,
      diagramCaption:
        "A simplified reef food web. Each arrow points from the food to the animal that eats it, which is the direction energy flows. Producers capture sunlight; take away the grazers (parrotfish, urchins) and seaweed can take over.",
      workedExamples: [
        {
          title: "Calculation: how much wave energy reaches the shore?",
          problem: "A healthy reef absorbs about 97% of the energy of incoming waves. A storm wave arrives with 400 units of energy. How many units reach the beach?",
          steps: [
            "**Find the share that gets through:** 100% − 97% = 3%.",
            "    3% of 400 = 0.03 × 400 = 12 units",
            "**Check by the other route:** 97% of 400 = 388 units absorbed, and 400 − 388 = 12 units.",
          ],
          answer: "About 12 units: only 3% of the wave's energy reaches the shore.",
          yourTurn: {
            question:
              "Your turn: a wave arrives at a healthy reef with 250 units of energy. If the reef absorbs 97% of it, how many units of energy reach the shore?",
            answer: { type: "number", value: 7.5 },
            solution: "100% − 97% = 3%. 3% of 250 = 0.03 × 250 = 7.5 units.",
          },
        },
        {
          title: "Model exam answer: explain two ways reefs are valuable to people [4]",
          problem: "Explain two ways in which coral reefs are valuable to people. [4]",
          steps: [
            "**Use the command word:** *explain* means give the way AND say how or why it helps. Plan for 2 marks per way.",
            "**Way 1 + development:** 'Reefs protect the coast. They make waves break out at sea, absorbing up to about 97% of their energy, so beaches, homes and hotels behind them suffer less erosion and flooding during storms.'",
            "**Way 2 + development:** 'Reefs support tourism. Divers and snorkellers pay for boat trips, hotels and guides, so the reef creates jobs; the Great Barrier Reef was estimated to support about 64,000 jobs.'",
            "**Check:** two *different* ways (not two kinds of tourism), each developed with 'so…' or 'because…', and backed by a figure or a place.",
          ],
          answer:
            "Reefs protect coasts: they absorb up to about 97% of wave energy, so coastal homes and beaches are less likely to be eroded or flooded. Reefs also bring in money through tourism: visitors pay for diving trips, hotels and guides, creating jobs, such as the tens of thousands of jobs supported by the Great Barrier Reef.",
          yourTurn: {
            question:
              "Your turn: which reef fish scrapes algae off coral with its beak-like teeth and, by grinding up the coral, produces much of the white sand on tropical beaches?",
            answer: { type: "text", accept: ["parrotfish", "parrot fish", "parrot-fish"] },
            solution:
              "The **parrotfish**. Its fused, beak-like teeth scrape algae from coral; the crunched-up limestone passes through its gut and comes out as fine white sand. It also keeps seaweed under control.",
          },
        },
      ],
      keyPoints: [
        "Reefs cover less than 1% of the sea floor but support about 25% of marine species.",
        "Energy flows from producers (zooxanthellae, seaweed, phytoplankton) to grazers to predators.",
        "Reefs provide food, jobs, tourism income, coastal protection, medicines and sand.",
        "Roughly half a billion people depend on reefs in some way.",
        "Losing one species (for example, overfished parrotfish) can upset the whole food web.",
      ],
      whyItWorks:
        "Why so much life in so little space? A reef's branches, holes and caves create thousands of different **habitats** in a small area, so many species can live side by side, each using a different space or food. The coral–algae partnership recycles nutrients very efficiently, so the reef stays productive even though tropical sea water is low in nutrients. And the reef's hard, rough top works like a natural breakwater: waves break on it and lose most of their energy before they reach the coast.",
      strategies: ["Use the command word", "PEEL paragraph", "Social / economic / environmental (SEE)", "Use figures from the source"],
      thinkDeeper:
        "If groupers and reef sharks are overfished, what might happen to the number of small fish, and then to the zooplankton they eat? Trace the effect at least three links along the food web, and suggest why scientists say healthy reefs need their predators too.",
    },
    // ------------------------------------------------------------------
    {
      id: "coral-bleaching",
      heading: "Coral bleaching & climate change",
      discovery: {
        problem:
          "In early 2016 divers on the northern Great Barrier Reef found huge areas of coral had turned brilliant white. Within months, much of it was dead. Nobody had poured chemicals on it and no storm had hit. What could harm corals across hundreds of kilometres at once?",
        idea:
          "The sea itself became too hot. In a **marine heatwave**, water about 1 °C or more above the normal summer maximum for several weeks stresses the algae inside the coral. The coral expels them, losing its colour and most of its food: it **bleaches**. If the heat lasts, the coral starves.",
      },
      body:
        "**Coral bleaching** is when stressed corals expel their zooxanthellae and turn white. The white is the limestone skeleton showing through tissue that is now see-through.\n\n**How it happens (cause → process → effect)**\n\n1. A **marine heatwave** keeps the sea about **1 °C or more above its usual summer maximum** for several weeks.\n2. The heat damages the algae's photosynthesis, and they start to make chemicals that harm the coral.\n3. The polyp **expels the algae** to protect itself.\n4. Without its algae, the coral loses its colour and up to about 90% of its food.\n5. **If the water cools quickly**, algae can return and the coral may recover. **If the heat lasts**, the coral starves, dies and is overgrown by seaweed.\n\nScientists measure heat stress in **Degree Heating Weeks (DHW)**: how many °C above the summer maximum the water is, multiplied by the number of weeks it stays there. Around 4 DHW usually causes significant bleaching; 8 or more can cause widespread bleaching and death. Very cold water, floods of fresh water and pollution can also cause bleaching, but almost all **mass** bleaching is caused by heat.\n\n**Mass bleaching on the Great Barrier Reef**\n\n| Year | What happened |\n|---|---|\n| 1998, 2002 | The first mass bleaching events recorded |\n| 2016 | The worst at the time: roughly 30% of the reef's shallow-water corals died, mostly in the north |\n| 2017 | Back-to-back with 2016, leaving little time to recover |\n| 2020 | Widespread, including the southern section |\n| 2022 | The first mass bleaching during a La Niña year, which is usually cooler |\n| 2024 | The fifth mass bleaching in eight years |\n\nWorldwide, NOAA and the International Coral Reef Initiative (ICRI) declared the **fourth global bleaching event** in April 2024. By 2025, bleaching-level heat had reached more than 80% of the world's reef area. Earlier global events happened in 1998, 2010 and 2014–2017.\n\n**Ocean acidification: CO₂'s second blow**\n\nThe ocean absorbs roughly a quarter of the carbon dioxide people release. CO₂ reacts with sea water to make a weak **carbonic acid**. The sea is still slightly alkaline (pH about 8.1, down from about 8.2 before the Industrial Revolution), but that small drop means about 30% more acidity. It leaves less **carbonate** in the water for polyps to build skeletons, so corals grow more slowly and reefs become weaker and easier to erode.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram of coral bleaching: healthy coral with algae; after weeks of water about 1 degree above the normal summer maximum the algae are expelled and the coral turns white; if the water cools quickly the coral can recover, if the heat lasts the coral starves, dies and is covered by seaweed"><defs><marker id="blArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#1f2937"/></marker></defs><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="20" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">How coral bleaching happens</text><rect x="8" y="34" width="124" height="190" rx="8" fill="#ffffff" stroke="#334155"/><rect x="184" y="34" width="124" height="190" rx="8" fill="#ffffff" stroke="#334155"/><rect x="340" y="34" width="132" height="110" rx="8" fill="#bbf7d0" stroke="#334155"/><rect x="340" y="156" width="132" height="110" rx="8" fill="#fecaca" stroke="#334155"/><g font-family="sans-serif" fill="#1f2937"><text x="70" y="52" font-size="12" font-weight="bold" text-anchor="middle">1 Healthy coral</text><text x="246" y="52" font-size="12" font-weight="bold" text-anchor="middle">2 Bleached coral</text><text x="406" y="52" font-size="12" font-weight="bold" text-anchor="middle">3a Cools quickly</text><text x="406" y="174" font-size="12" font-weight="bold" text-anchor="middle">3b Heat lasts</text></g><g fill="none" stroke-width="4" stroke-linecap="round"><g stroke="#b45309"><path d="M60 92 Q54 78 48 68"/><path d="M68 90 Q66 76 66 64"/><path d="M78 90 Q80 76 82 64"/><path d="M86 92 Q92 78 98 68"/></g><g stroke="#94a3b8"><path d="M230 92 Q224 78 218 68"/><path d="M238 90 Q236 76 236 64"/><path d="M248 90 Q250 76 252 64"/><path d="M256 92 Q262 78 268 68"/></g></g><rect x="56" y="90" width="34" height="50" rx="8" fill="#d97706" fill-opacity="0.55" stroke="#334155"/><rect x="226" y="90" width="34" height="50" rx="8" fill="#ffffff" stroke="#334155" stroke-dasharray="3 2"/><rect x="48" y="134" width="50" height="14" fill="#d6d3d1" stroke="#334155"/><rect x="218" y="134" width="50" height="14" fill="#ffffff" stroke="#334155"/><g fill="#92400e"><circle cx="63" cy="100" r="2.5"/><circle cx="82" cy="102" r="2.5"/><circle cx="66" cy="114" r="2.5"/><circle cx="80" cy="120" r="2.5"/><circle cx="64" cy="128" r="2.5"/><circle cx="83" cy="131" r="2.5"/><circle cx="279" cy="98" r="2.5"/><circle cx="286" cy="110" r="2.5"/><circle cx="208" cy="104" r="2.5"/><circle cx="200" cy="116" r="2.5"/></g><g stroke="#92400e" stroke-width="1" marker-end="url(#blArrow)"><line x1="262" y1="104" x2="276" y2="100"/><line x1="224" y1="110" x2="211" y2="106"/></g><g font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="70" y="168">Algae in the tissue</text><text x="70" y="181">make sugars by</text><text x="70" y="194">photosynthesis and</text><text x="70" y="207">give the colour.</text><text x="246" y="168">Stressed algae are</text><text x="246" y="181">expelled. The white</text><text x="246" y="194">skeleton shows</text><text x="246" y="207">through clear tissue.</text><text x="406" y="74">Algae move back in</text><text x="406" y="88">over weeks to months.</text><text x="406" y="102">Coral survives but</text><text x="406" y="116">grows and breeds less</text><text x="406" y="130">for a while.</text><text x="406" y="196">Coral starves and</text><text x="406" y="210">dies. Seaweed grows</text><text x="406" y="224">over the skeleton,</text><text x="406" y="238">which slowly</text><text x="406" y="252">crumbles.</text></g><line x1="132" y1="128" x2="182" y2="128" stroke="#1f2937" stroke-width="2" marker-end="url(#blArrow)"/><text x="158" y="110" font-size="11" font-family="sans-serif" fill="#b91c1c" text-anchor="middle">too hot</text><text x="158" y="122" font-size="11" font-family="sans-serif" fill="#b91c1c" text-anchor="middle">for weeks</text><line x1="308" y1="110" x2="338" y2="90" stroke="#1f2937" stroke-width="2" marker-end="url(#blArrow)"/><line x1="308" y1="150" x2="338" y2="208" stroke="#1f2937" stroke-width="2" marker-end="url(#blArrow)"/><rect x="8" y="236" width="300" height="56" rx="8" fill="#fde68a" stroke="#334155"/><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="18" y="254" font-weight="bold">Trigger: a marine heatwave</text><text x="18" y="268">Sea about 1 °C or more above its normal</text><text x="18" y="282">summer maximum for several weeks.</text></g><text x="406" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Bleached is not yet dead.</text></svg>`,
      diagramCaption:
        "Bleaching step by step. A white coral is stressed, not yet dead: if the water cools in time it can recover; if the heatwave lasts it starves and dies.",
      workedExamples: [
        {
          title: "Calculation: Degree Heating Weeks",
          problem:
            "A reef's normal summer maximum sea temperature is 29 °C. In a heatwave the sea is 30 °C (1 °C above) for 3 weeks, then 31 °C (2 °C above) for 2 weeks, then falls back to 29 °C. Calculate the Degree Heating Weeks and say what is likely to happen to the coral.",
          steps: [
            "**DHW = add up (°C above the summer maximum × number of weeks).** Only count weeks that are at least 1 °C above.",
            "    1 °C × 3 weeks = 3\n    2 °C × 2 weeks = 4\n    total = 3 + 4 = 7 DHW",
            "**Compare with the thresholds:** 7 is above 4 (significant bleaching likely) but below 8 (widespread bleaching and death likely).",
          ],
          answer: "7 DHW: significant bleaching is likely. Many corals may recover if the water stays cool from now on, but some will probably die.",
          yourTurn: {
            question:
              "Your turn: a reef's summer maximum is 28 °C. The sea stays at 29.5 °C for 4 weeks, then at 29 °C for 3 weeks. Calculate the Degree Heating Weeks.",
            answer: { type: "number", value: 9 },
            solution: "29.5 − 28 = 1.5 °C, and 1.5 × 4 = 6. Then 29 − 28 = 1 °C, and 1 × 3 = 3. Total = 6 + 3 = 9 DHW, which is above 8, so widespread bleaching and coral death are likely.",
          },
        },
        {
          title: "Percentage points vs percentage change",
          problem:
            "A survey finds hard coral covered 40% of a reef before a heatwave and 26% a year later. (a) By how many percentage points did coral cover fall? (b) What was the percentage decrease in coral cover?",
          steps: [
            "**(a) Subtract:** 40 − 26 = 14 percentage points.",
            "**(b) Percentage change = change ÷ original × 100.**",
            "    14 ÷ 40 × 100 = 35%",
            "**Careful:** the cover fell by **14 percentage points**, which is a **35% decrease** in the amount of coral. Exam questions often test this difference.",
          ],
          answer: "(a) 14 percentage points. (b) A 35% decrease.",
          yourTurn: {
            question:
              "Your turn: coral cover on a reef falls from 30% to 18%. What is the percentage decrease in coral cover? Give your answer as a percentage.",
            answer: { type: "number", value: 40 },
            solution: "Change = 30 − 18 = 12 percentage points. 12 ÷ 30 × 100 = 40%, so a 40% decrease (not 12%).",
          },
        },
      ],
      keyPoints: [
        "Bleaching = a stressed coral expels its zooxanthellae and turns white; bleached coral is **not yet dead**.",
        "The main trigger is a marine heatwave: about 1 °C or more above the normal summer maximum for several weeks.",
        "If the water cools quickly the coral can recover; if the heat lasts it starves and dies.",
        "Great Barrier Reef mass bleaching: 1998, 2002, 2016, 2017, 2020, 2022 and 2024.",
        "The fourth global bleaching event was declared in April 2024 (NOAA and ICRI).",
        "Ocean acidification (CO₂ dissolving in sea water) makes it harder for coral to build its skeleton.",
      ],
      whyItWorks:
        "The partnership has a breaking point. In very warm water, strong sunlight and heat damage the algae's photosynthesis machinery, and it starts to release reactive oxygen chemicals that harm the coral's own tissue. Getting rid of the algae is the coral's emergency defence, but the algae were its main food supply. It is a trade-off: escape the damage now, risk starving later. Because reef corals already live close to their upper temperature limit, a rise of only 1–2 °C for a few weeks is enough to push them over. Acidification works differently: extra CO₂ reduces the carbonate in sea water, so building limestone takes more energy.",
      strategies: ["Cause → process → effect", "TEA (Trend, Evidence, Anomaly)", "Use figures from the source", "Spot the misconception"],
      thinkDeeper:
        "Mass bleaching hit the Great Barrier Reef in 2016 and again in 2017. Why is the *gap* between bleaching events just as important as how severe each one is? Use the idea that a badly damaged reef often needs around ten years or more to recover.",
    },
    // ------------------------------------------------------------------
    {
      id: "local-threats",
      heading: "Local threats",
      discovery: {
        problem:
          "Some of the most damaged inshore reefs on the Great Barrier Reef lie off river mouths that drain sugar-cane farms, even though the farms are many kilometres inland and the farmers never go near the reef. How can a farm damage a reef?",
        idea:
          "Rivers connect the land to the sea. Soil and fertiliser washed off farms flow out in **river plumes**: the mud blocks sunlight, and the nutrients feed seaweed and plankton, including the larvae of the coral-eating **crown-of-thorns starfish**. Many 'local' threats begin on land.",
      },
      body:
        "Climate change is a **global** threat, but reefs also face many **local** threats: pressures from nearby human activity that could, in principle, be managed locally.\n\n**Human (local) threats**\n\n- **Overfishing:** catching too many grazing fish (such as parrotfish) lets seaweed overgrow coral; removing predators upsets the whole food web.\n- **Blast fishing:** in parts of South-East Asia (for example, some areas of Indonesia, the Philippines and Sabah in Malaysia) some fishers use homemade bombs to stun fish. The blast smashes coral into **rubble** that can take decades to recover. It is illegal but still happens. **Cyanide fishing** (squirting poison to catch live fish for restaurants and aquariums) also kills coral.\n- **Sediment and farm run-off:** soil and fertiliser washed from farmland (such as the sugar-cane and cattle land beside the Great Barrier Reef) make the water murky and too rich in nutrients, so seaweed and algae bloom.\n- **Sewage:** adds nutrients and germs that can spread coral disease.\n- **Coastal development and land reclamation:** dredging and dumping sand stir up sediment and bury reefs. Singapore's reclamation for ports, industry and housing covered much of its original reef.\n- **Careless tourism:** divers and snorkellers kicking or standing on coral, boat anchors, souvenir collecting and some sunscreen chemicals.\n\n**Crown-of-thorns starfish (COTS)**\n\nCOTS are large starfish covered in venomous spines. They eat coral by pushing their stomach out over it and digesting the living tissue, leaving bare white skeleton behind. They are a **natural** part of Indo-Pacific reefs, but **outbreaks** of thousands of starfish can strip whole reefs. Outbreaks are linked to **nutrient run-off** (more plankton for the larvae, so more survive) and possibly to **overfishing** of their predators.\n\n**Natural vs human threats**\n\n| Natural | Human |\n|---|---|\n| Tropical cyclones breaking coral | Overfishing and blast fishing |\n| COTS (natural, but outbreaks made worse by people) | Farm run-off and sewage |\n| Disease; natural warm years such as El Niño | Reclamation, dredging and careless tourism |\n| Exposure to air at very low tides | Climate change and acidification (global) |\n\nA reef hit by **several stresses at once** (say, run-off *and* a heatwave *and* a COTS outbreak) is far less likely to recover than one facing a single threat.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section from land to reef showing local threats: farm run-off carried by a river, a sewage pipe, dredging and reclamation, boat anchors and careless tourists, blast fishing, overfishing and crown-of-thorns starfish, plus global warming and acidification"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><rect x="172" y="90" width="308" height="112" fill="#bae6fd"/><path d="M0 62 L60 64 L150 70 L172 90 L0 90 Z" fill="#bbf7d0" stroke="#334155"/><path d="M0 90 L172 90 L232 200 L480 200 L480 214 L0 214 Z" fill="#d6d3d1" stroke="#334155"/><g fill="#fde68a" stroke="#92400e" stroke-width="0.8"><rect x="8" y="58" width="44" height="6"/><line x1="16" y1="58" x2="16" y2="64"/><line x1="26" y1="58" x2="26" y2="64"/><line x1="36" y1="58" x2="36" y2="64"/></g><path d="M50 64 Q110 84 172 91" fill="none" stroke="#0284c7" stroke-width="3"/><path d="M172 92 Q240 96 330 104 L330 116 Q240 116 200 110 Z" fill="#a16207" fill-opacity="0.35"/><g fill="#e5e7eb" stroke="#334155" stroke-width="0.8"><rect x="96" y="46" width="12" height="22"/><rect x="110" y="40" width="12" height="29"/><rect x="124" y="50" width="12" height="20"/></g><path d="M136 70 L170 96 L214 140" fill="none" stroke="#475569" stroke-width="3"/><path d="M214 140 Q222 146 230 140" fill="none" stroke="#78350f" stroke-width="2" stroke-dasharray="2 2"/><path d="M160 84 L186 84 L186 90 L160 90 Z" fill="#fde68a" stroke="#334155"/><path d="M196 86 L236 86 L230 94 L202 94 Z" fill="#94a3b8" stroke="#334155"/><path d="M216 94 Q210 130 222 160" fill="none" stroke="#78350f" stroke-width="2" stroke-dasharray="3 2"/><path d="M318 200 L322 150 Q332 120 350 126 Q362 112 380 122 Q396 110 412 124 Q430 114 448 126 Q462 132 466 150 L470 200 Z" fill="#fda4af" stroke="#334155"/><path d="M276 86 L312 86 L306 94 L282 94 Z" fill="#94a3b8" stroke="#334155"/><path d="M294 94 L282 140 L306 140 Z" fill="none" stroke="#334155" stroke-width="0.8"/><path d="M286 110 L302 110 M284 120 L304 120 M283 130 L305 130" stroke="#334155" stroke-width="0.8"/><path d="M352 86 L392 86 L386 94 L358 94 Z" fill="#ffffff" stroke="#334155"/><line x1="370" y1="94" x2="376" y2="118" stroke="#1f2937" stroke-width="1"/><path d="M370 118 L376 122 L382 118" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M430 86 L466 86 L460 94 L436 94 Z" fill="#94a3b8" stroke="#334155"/><path d="M440 140 L446 128 L450 140 L462 136 L454 146 L462 156 L450 152 L446 164 L440 152 L428 156 L436 146 L428 136 Z" fill="#fde047" stroke="#b91c1c"/><path d="M402 140 L406 132 L410 140 L418 140 L412 146 L414 154 L406 149 L398 154 L400 146 L394 140 Z" fill="#7c3aed" stroke="#1f2937" stroke-width="0.8"/><g font-size="11" font-family="sans-serif" font-weight="bold" fill="#ffffff"><circle cx="30" cy="46" r="8" fill="#1f2937"/><text x="30" y="50" text-anchor="middle">1</text><circle cx="148" cy="112" r="8" fill="#1f2937"/><text x="148" y="116" text-anchor="middle">2</text><circle cx="216" cy="74" r="8" fill="#1f2937"/><text x="216" y="78" text-anchor="middle">3</text><circle cx="372" cy="72" r="8" fill="#1f2937"/><text x="372" y="76" text-anchor="middle">4</text><circle cx="448" cy="72" r="8" fill="#1f2937"/><text x="448" y="76" text-anchor="middle">5</text><circle cx="294" cy="72" r="8" fill="#1f2937"/><text x="294" y="76" text-anchor="middle">6</text><circle cx="406" cy="170" r="8" fill="#1f2937"/><text x="406" y="174" text-anchor="middle">7</text><circle cx="250" cy="30" r="8" fill="#1f2937"/><text x="250" y="34" text-anchor="middle">8</text></g><circle cx="282" cy="30" r="10" fill="#fde047" stroke="#b45309"/><text x="298" y="34" font-size="11" font-family="sans-serif" fill="#1f2937">warmer, more acidic sea</text><text x="400" y="196" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">coral reef</text><text x="70" y="84" font-size="11" font-family="sans-serif" fill="#1f2937">river</text><text x="250" y="190" font-size="11" font-family="sans-serif" fill="#1f2937">sea bed</text><line x1="0" y1="222" x2="480" y2="222" stroke="#334155" stroke-width="0.8"/><g font-size="11" font-family="sans-serif" fill="#1f2937"><text x="8" y="240"><tspan font-weight="bold">1</tspan> Farm run-off: soil and fertiliser</text><text x="8" y="256"><tspan font-weight="bold">2</tspan> Sewage from towns</text><text x="8" y="272"><tspan font-weight="bold">3</tspan> Dredging and reclamation (sediment)</text><text x="8" y="288"><tspan font-weight="bold">4</tspan> Boat anchors and careless tourists</text><text x="250" y="240"><tspan font-weight="bold">5</tspan> Blast fishing turns coral to rubble</text><text x="250" y="256"><tspan font-weight="bold">6</tspan> Overfishing (nets, traps)</text><text x="250" y="272"><tspan font-weight="bold">7</tspan> Crown-of-thorns starfish outbreak</text><text x="250" y="288"><tspan font-weight="bold">8</tspan> Global: warming and acidification</text></g></svg>`,
      diagramCaption:
        "Local threats (1–7) start on land or on the water near the reef; the global threat (8) comes from greenhouse gases released all over the world. A river plume carries soil and fertiliser far out towards the reef.",
      workedExamples: [
        {
          title: "Read the resource: sort the threats",
          problem:
            "Sort these threats into **local human**, **global human** and **natural**: blast fishing; a tropical cyclone; ocean acidification; sewage; a marine heatwave made worse by global warming; careless anchoring.",
          steps: [
            "**Ask two questions about each:** *Did people cause it?* and *Could one local government stop it?*",
            "**Local human:** blast fishing, sewage and careless anchoring. People nearby cause them, and local laws and enforcement can control them.",
            "**Global human:** ocean acidification and heatwaves made worse by global warming. They are caused by greenhouse gas emissions from all over the world, so one country cannot stop them alone.",
            "**Natural:** the tropical cyclone (although warmer seas may make the strongest storms more intense).",
          ],
          answer:
            "| Local human | Global human | Natural |\n|---|---|---|\n| Blast fishing, sewage, careless anchoring | Ocean acidification, marine heatwaves | Tropical cyclone |",
          yourTurn: {
            question: "Your turn: name the spiny, coral-eating starfish whose outbreaks are linked to fertiliser run-off feeding its larvae.",
            answer: {
              type: "text",
              accept: ["crown-of-thorns starfish", "crown of thorns starfish", "crown-of-thorns", "crown of thorns", "COTS", "crown-of-thorns sea star", "Acanthaster"],
            },
            solution:
              "The **crown-of-thorns starfish** (COTS). Extra nutrients feed the plankton its larvae eat, so more larvae survive and outbreaks become more likely.",
          },
        },
        {
          title: "Model exam answer: how can farming damage a reef? [3]",
          problem: "Explain how farming on land can damage a coral reef offshore. [3]",
          steps: [
            "**Start on the land (cause):** 'Heavy rain washes soil and fertiliser off fields into rivers, which carry them out to sea in a plume.'",
            "**Mechanism 1, sediment (process → effect):** 'The mud makes the water cloudy, blocking the sunlight the zooxanthellae need to photosynthesise, and it can settle on and smother the polyps.'",
            "**Mechanism 2, nutrients (process → effect):** 'Fertiliser feeds seaweed that grows over and shades the coral, and plankton that crown-of-thorns larvae eat, so more starfish survive to eat the coral.'",
          ],
          answer:
            "Rain washes soil and fertiliser from farms into rivers and out to sea. The sediment makes the water cloudy, so less sunlight reaches the zooxanthellae and coral grows more slowly or is smothered. The fertiliser adds nutrients that help seaweed overgrow the coral and help crown-of-thorns starfish larvae survive, leading to outbreaks that eat the coral.",
          yourTurn: {
            question: "Your turn: what name is given to the illegal method of catching fish with explosives, which turns coral into rubble?",
            answer: {
              type: "text",
              accept: ["blast fishing", "dynamite fishing", "bomb fishing", "fish bombing", "blast-fishing", "fish blasting", "explosive fishing"],
            },
            solution:
              "**Blast fishing** (also called dynamite or bomb fishing). The explosion kills or stuns fish and shatters the coral into rubble, which can take decades to recover.",
          },
        },
      ],
      keyPoints: [
        "Local threats include overfishing, blast fishing, sediment and farm run-off, sewage, coastal development and reclamation, and careless tourism.",
        "Many local threats start on land and reach the reef in river plumes.",
        "Crown-of-thorns starfish eat coral; outbreaks are linked to nutrient run-off and possibly to fewer predators.",
        "Some threats are natural (cyclones, COTS, disease), but people can make them worse.",
        "Several stresses at once make recovery much less likely.",
      ],
      whyItWorks:
        "Most local threats work by breaking one of coral's growth conditions. Sediment takes away **clear water and light**. Nutrients tip the balance from coral to **seaweed**, which grows faster and shades the coral. Blast fishing and anchors destroy the reef's **structure** itself. Overfishing removes the grazers that keep seaweed in check. Each one weakens the reef, so when a heatwave arrives a stressed reef has less ability to bounce back.",
      strategies: ["Social / economic / environmental (SEE)", "Think at different scales", "Cause → process → effect", "Compare and contrast"],
      thinkDeeper:
        "Singapore lost much of its reef to reclamation, yet more than 250 hard coral species survive in its murky, busy waters. Why might corals that cope with Singapore's conditions be especially interesting to scientists as the world's oceans change?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Coral polyp", back: "A small, soft-bodied animal related to jellyfish, with tentacles around a mouth, which builds a limestone (calcium carbonate) cup." },
      { front: "Zooxanthellae", back: "Microscopic algae living inside coral tissue. They photosynthesise, giving the coral up to about 90% of its food and most of its colour." },
      { front: "Symbiosis (coral and algae)", back: "A close partnership in which both benefit: the coral gives shelter, CO₂ and nutrients; the algae give food made by photosynthesis." },
      { front: "What are coral skeletons made of?", back: "Calcium carbonate (limestone)." },
      { front: "Fringing reef", back: "A reef growing right next to the shore, with little or no lagoon (e.g. Red Sea coast, Singapore's Southern Islands)." },
      { front: "Barrier reef", back: "A reef further offshore, separated from the land by a wide, deep lagoon (e.g. the Great Barrier Reef, Belize Barrier Reef)." },
      { front: "Atoll", back: "A ring of reef around a lagoon with no central island (e.g. the Maldives)." },
      { front: "Darwin's subsidence theory (1842)", back: "A volcanic island sinks while coral keeps growing upwards: fringing reef → barrier reef → atoll." },
      { front: "Conditions coral needs", back: "Warm water (about 18–29 °C), shallow and sunlit, clear (little sediment), salty, low in nutrients, plus a hard surface to attach to." },
      { front: "Where are most reefs?", back: "Roughly between 30°N and 30°S, especially the Indian Ocean, western Pacific and Caribbean." },
      { front: "Why are there few reefs off western South America?", back: "The cold Humboldt (Peru) Current and cold water rising from the deep keep the sea too cool." },
      { front: "The Coral Triangle", back: "Seas of Indonesia, Malaysia, the Philippines, Papua New Guinea, Timor-Leste and the Solomon Islands: roughly three-quarters of reef-building coral species." },
      { front: "Singapore's corals", back: "More than 250 hard coral species, mainly on fringing reefs around the Southern Islands, despite heavy shipping and reclamation." },
      { front: "Reefs: area vs species", back: "Less than 1% of the sea floor, but about 25% of marine species." },
      { front: "Coral bleaching", back: "Stressed coral expels its zooxanthellae and turns white. It is not yet dead and can recover if conditions improve quickly." },
      { front: "What usually triggers mass bleaching?", back: "A marine heatwave: about 1 °C or more above the normal summer maximum for several weeks." },
      { front: "Great Barrier Reef mass bleaching years", back: "1998, 2002, 2016, 2017, 2020, 2022 and 2024." },
      { front: "Fourth global bleaching event", back: "Declared in April 2024 by NOAA and the International Coral Reef Initiative (ICRI)." },
      { front: "Ocean acidification", back: "CO₂ dissolves in sea water to form weak carbonic acid; pH has fallen from about 8.2 to about 8.1, leaving less carbonate for skeletons." },
      { front: "Crown-of-thorns starfish (COTS)", back: "A spiny, coral-eating starfish. Outbreaks are linked to nutrient run-off feeding its larvae and possibly fewer predators." },
      { front: "Blast fishing", back: "Illegal fishing with explosives, still found in parts of South-East Asia; it shatters coral into rubble." },
      { front: "Degree Heating Weeks (DHW)", back: "°C above the summer maximum × number of weeks, added up. About 4 = significant bleaching; 8+ = widespread bleaching and death." },
    ],
    mustKnow: [
      "Explain why coral is an animal, and describe its partnership with zooxanthellae.",
      "Draw and label a fringing reef, a barrier reef and an atoll.",
      "Explain Darwin's subsidence theory in three stages.",
      "List the conditions coral needs, including the temperature range (about 18–29 °C).",
      "Describe the global distribution of reefs using CLOCC, and explain the gaps (cold currents, river mouths).",
      "Locate the Coral Triangle and name at least three of its countries.",
      "Give Singapore facts: more than 250 hard coral species; Southern Islands; Sisters' Islands Marine Park (2014).",
      "Explain at least three ways reefs are valuable, using a figure each time.",
      "Read a reef food web and predict what happens if one species is removed.",
      "Explain bleaching step by step, and the difference between bleached and dead coral.",
      "Name the Great Barrier Reef mass bleaching years and the 2024 global bleaching event.",
      "Explain ocean acidification in simple terms.",
      "Classify threats as natural or human, and local or global, and explain how COTS, blast fishing and run-off damage reefs.",
      "Calculate Degree Heating Weeks, percentage change and percentage points.",
    ],
    misconceptions: [
      { wrong: "Coral is a plant (or just a rock).", right: "Coral is an animal (a colony of polyps). It has algae living inside it and builds a limestone skeleton, but the coral itself is an animal." },
      { wrong: "Bleached coral is dead coral.", right: "Bleached coral is stressed and starving but still alive. If the water cools quickly its algae can return; it dies only if the stress lasts too long." },
      { wrong: "Bleaching is caused by chemicals like bleach in the sea.", right: "Almost all mass bleaching is caused by heat (marine heatwaves). 'Bleaching' just describes the white colour." },
      { wrong: "Ocean acidification means the sea has turned acidic.", right: "The sea is still slightly alkaline (pH about 8.1). It is becoming *less* alkaline, which is enough to make skeleton-building harder." },
      { wrong: "Anywhere in the tropics is fine for coral.", right: "Coral also needs clear, salty, shallow, sunlit water. Cold currents and muddy river mouths leave big gaps even near the Equator." },
      { wrong: "The zooxanthellae are parasites that harm the coral.", right: "Normally they are partners: both benefit (symbiosis). They only become harmful when heat damages them." },
      { wrong: "Crown-of-thorns starfish are an invasive alien species.", right: "COTS are native to Indo-Pacific reefs. The problem is outbreaks of huge numbers, linked partly to human activity." },
      { wrong: "Atolls form around islands that are still there.", right: "An atoll has no central island: the volcanic island it grew around has sunk beneath the sea." },
      { wrong: "Good local management can stop bleaching.", right: "Bleaching is driven by global warming, so it needs global cuts in emissions. Local management helps reefs recover, but it cannot cool the ocean." },
    ],
    examMistakes: [
      "Calling coral a plant, or writing 'coral plants grow'.",
      "Mixing up fringing and barrier reefs: check whether there is a wide lagoon between reef and land.",
      "Saying bleached coral is dead, instead of explaining that it can recover if the water cools quickly.",
      "Listing threats without explaining how each one damages the reef: use cause → process → effect.",
      "Confusing percentage points with percentage change (40% → 26% cover is a 14-point fall but a 35% decrease).",
      "Giving the temperature range wrongly or without units (it is about 18–29 °C).",
      "Writing a vague 'pollution' instead of naming the type: sediment, fertiliser, sewage or plastic.",
      "Describing reef distribution as 'on the Equator' instead of using CLOCC with latitudes (about 30°N–30°S) and named oceans.",
    ],
    mnemonics: [
      {
        topic: "Conditions coral needs",
        device: "Wear Clean Swim Suits",
        explanation: "**W**arm (about 18–29 °C), **C**lear (little sediment), **S**hallow and sunlit, **S**alty (normal sea water).",
      },
      {
        topic: "Darwin's reef sequence",
        device: "F → B → A: backwards through the alphabet",
        explanation: "**F**ringing reef, then **B**arrier reef, then **A**toll, as the volcanic island sinks.",
      },
      {
        topic: "Steps of bleaching",
        device: "HEAT",
        explanation: "**H**otter water for weeks → **E**xpel the algae → **A**lgae gone, so the coral turns white and starves → **T**ime decides: cool quickly and it recovers, stay hot and it dies.",
      },
      {
        topic: "Why reefs matter",
        device: "FACTS",
        explanation: "**F**ood, **A**nimals (biodiversity), **C**oastal protection, **T**ourism and jobs, **S**cience and medicine.",
      },
    ],
    realWorld: [
      {
        title: "Sisters' Islands Marine Park, Singapore",
        detail:
          "Singapore's first marine park (2014), about 40 hectares around the Sisters' Islands and nearby reefs. It protects coral, giant clams and reef fish, runs guided walks and dive trails, and supports coral nurseries for reef restoration.",
        emoji: "🇸🇬",
      },
      {
        title: "Singapore's surprising reefs",
        detail:
          "Next to one of the world's busiest ports and after decades of reclamation, Singapore's waters still host more than 250 hard coral species around Southern Islands such as Pulau Hantu and Kusu Island.",
        emoji: "🚢",
      },
      {
        title: "Great Barrier Reef, Australia",
        detail:
          "About 2,300 km long with roughly 2,900 individual reefs; a World Heritage Site since 1981. It suffered mass bleaching in 2016, 2017, 2020, 2022 and 2024.",
        emoji: "🐠",
      },
      {
        title: "The Maldives",
        detail:
          "A nation built on coral atolls in the Indian Ocean. Reefs protect its low islands from waves and support its tourism and fishing, so bleaching and sea-level rise are a direct threat to the country.",
        emoji: "🏝️",
      },
      {
        title: "The Coral Triangle Initiative",
        detail:
          "Since 2009, six Coral Triangle countries (Indonesia, Malaysia, the Philippines, Papua New Guinea, Timor-Leste and the Solomon Islands) have worked together to protect reefs, fisheries and food security in the world's richest reef region.",
        emoji: "🌏",
      },
      {
        title: "The fourth global bleaching event",
        detail:
          "Declared by NOAA and the International Coral Reef Initiative in April 2024, after reefs in every major ocean basin bleached during record ocean heat.",
        emoji: "🌡️",
      },
    ],
    videos: [
      { title: "How coral reefs form and why they matter", channel: "TED-Ed", url: "https://www.youtube.com/results?search_query=ted-ed+coral+reefs" },
      { title: "Coral bleaching explained", channel: "NOAA Ocean Service", url: "https://www.youtube.com/results?search_query=noaa+coral+bleaching+explained" },
      { title: "Fringing, barrier and atoll: Darwin's theory", channel: "Time for Geography", url: "https://www.youtube.com/results?search_query=fringing+barrier+reef+atoll+formation+darwin" },
      { title: "Ocean acidification explained", channel: "National Geographic", url: "https://www.youtube.com/results?search_query=ocean+acidification+explained" },
      { title: "Singapore's coral reefs and Sisters' Islands Marine Park", channel: "NParks Singapore", url: "https://www.youtube.com/results?search_query=sisters+islands+marine+park+singapore+coral" },
    ],
    formulas: [
      { name: "Coral polyp", formula: "A small soft-bodied animal, related to jellyfish, that builds a calcium carbonate (limestone) cup; colonies of polyps build reefs." },
      { name: "Zooxanthellae", formula: "Microscopic algae living in coral tissue that photosynthesise and supply most of the coral's food and its colour." },
      { name: "Symbiosis", formula: "A close relationship between two species; for coral and zooxanthellae, both benefit." },
      { name: "Fringing reef", formula: "A reef growing next to the shore with little or no lagoon." },
      { name: "Barrier reef", formula: "A reef separated from the coast by a wide, deep lagoon." },
      { name: "Atoll", formula: "A ring-shaped reef around a lagoon, with no central island." },
      { name: "Lagoon", formula: "A sheltered area of shallow sea water between a reef and the land, or inside an atoll." },
      { name: "Subsidence", formula: "The slow sinking of land, e.g. a volcanic island in Darwin's atoll theory." },
      { name: "Coral growth conditions", formula: "Water about 18–29 °C, shallow and sunlit, clear, salty and low in nutrients, with a hard surface to settle on." },
      { name: "Coral Triangle", formula: "The richest reef region on Earth (Indonesia, Malaysia, the Philippines, Papua New Guinea, Timor-Leste, Solomon Islands), with about three-quarters of reef-building coral species." },
      { name: "Biodiversity", formula: "The variety of living things in an area; reefs cover under 1% of the sea floor but support about 25% of marine species." },
      { name: "Coral bleaching", formula: "When stressed coral expels its zooxanthellae and turns white; it can recover if conditions improve quickly." },
      { name: "Marine heatwave", formula: "A period of unusually warm sea water; about 1 °C above the normal summer maximum for several weeks can trigger bleaching." },
      { name: "Degree Heating Weeks (DHW)", formula: "Sum of (°C above the summer maximum × number of weeks); about 4 = significant bleaching, 8 or more = widespread bleaching and death." },
      { name: "Ocean acidification", formula: "The fall in sea-water pH (about 8.2 to 8.1) as the ocean absorbs CO₂, leaving less carbonate for building skeletons." },
      { name: "Crown-of-thorns starfish (COTS)", formula: "A native, spiny starfish that eats coral polyps; outbreaks are linked to nutrient run-off and possibly overfishing of its predators." },
      { name: "Blast fishing", formula: "Illegal fishing using explosives, which turns coral into rubble; still found in parts of South-East Asia." },
      { name: "Sediment", formula: "Soil and mud carried by rivers or stirred up by dredging; it blocks light and can smother coral." },
      { name: "Percentage change", formula: "Change ÷ original value × 100 (different from a change in percentage points)." },
    ],
  },
};
