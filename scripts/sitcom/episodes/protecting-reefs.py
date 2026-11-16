# "Totally Raotional: Off The Map" S02E14 "Great Barrier Grief" (Topic: Protecting Coral Reefs)
# Format and helpers: see common.py and docs/SITCOM.md; check with lint_episode.py.
# Sections taught: gbr-facts, management-strategies, evaluating-management, protecting-reefs-elsewhere.

EP = dict(topic="protecting-reefs",
          logline="Dad launches a reef fishing charter in a no-take zone and Mum books a 'last chance to see' deal. Globo flies the Raos "
                  "to the Great Barrier Reef to explain zoning, starfish divers, farm rules and the Reef 2050 Plan, whether it is working, "
                  "and how Singapore protects Sisters' Islands.")

D_MAP = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0c4a6e"/>
<path d="M0 0 L150 0 L162 30 L176 60 L196 92 L222 124 L252 152 L284 182 L318 220 L0 220Z" fill="#a3e635"/>
<path d="M176 8 Q200 70 236 112 Q280 162 352 214" stroke="#fb7185" stroke-width="7" fill="none" stroke-dasharray="12 7"/>
<circle cx="196" cy="92" r="6" fill="#fde047"/>
<text x="150" y="98" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1a2e05" text-anchor="end">Cairns</text>
<text x="80" y="170" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1a2e05" text-anchor="middle">QUEENSLAND</text>
<text x="410" y="70" font-family="sans-serif" font-size="20" font-weight="bold" fill="#7dd3fc" text-anchor="middle">CORAL SEA</text>
<text x="380" y="150" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fb7185" text-anchor="middle">reef ~2,300 km</text>
<text x="30" y="24" font-family="sans-serif" font-size="13" fill="#1a2e05">Cape York (north)</text>
<path d="M480 120 v-40" stroke="#fff" stroke-width="3"/><path d="M480 74 l-7 12 h14z" fill="#fff"/>
<text x="480" y="140" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">N</text>
</svg>"""

D_ZONES = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">
<rect width="520" height="190" fill="#0f172a"/>
<rect x="16" y="14" width="56" height="32" rx="5" fill="#22c55e"/>
<text x="88" y="37" font-family="sans-serif" font-size="17" fill="#fff"><tspan font-weight="bold">GREEN</tspan> no-take: visit, take nothing</text>
<rect x="16" y="58" width="56" height="32" rx="5" fill="#f472b6"/>
<text x="88" y="81" font-family="sans-serif" font-size="17" fill="#fff"><tspan font-weight="bold">PINK</tspan> no entry without a permit</text>
<rect x="16" y="102" width="56" height="32" rx="5" fill="#facc15"/>
<text x="88" y="125" font-family="sans-serif" font-size="17" fill="#fff"><tspan font-weight="bold">YELLOW</tspan> limited fishing: 1 line, 1 hook</text>
<rect x="16" y="146" width="56" height="32" rx="5" fill="#60a5fa"/>
<text x="88" y="169" font-family="sans-serif" font-size="17" fill="#fff"><tspan font-weight="bold">BLUE</tspan> fishing allowed (with rules)</text>
</svg>"""

D_TIMELINE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170">
<rect width="520" height="170" fill="#0f172a"/>
<path d="M24 86 H500" stroke="#e2e8f0" stroke-width="3"/>
<text x="24" y="106" font-family="sans-serif" font-size="12" fill="#94a3b8">1970</text>
<text x="500" y="76" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="end">2025</text>
<g fill="#4ade80"><circle cx="67" cy="86" r="6"/><circle cx="118" cy="86" r="6"/><circle cx="315" cy="86" r="6"/><circle cx="409" cy="86" r="6"/></g>
<g font-family="sans-serif" font-size="13" font-weight="bold" fill="#4ade80" text-anchor="middle">
<text x="67" y="70">Park</text><text x="67" y="54">1975</text>
<text x="118" y="70">WHS</text><text x="118" y="54">1981</text>
<text x="315" y="70">Zones</text><text x="315" y="54">2004</text>
<text x="409" y="70">2050</text><text x="409" y="54">2015</text></g>
<g fill="#f87171"><path d="M263 92 l-6 12 h12z"/><path d="M298 92 l-6 12 h12z"/><path d="M418 92 l-6 12 h12z"/><path d="M426 92 l-6 12 h12z"/><path d="M452 92 l-6 12 h12z"/><path d="M469 92 l-6 12 h12z"/><path d="M486 92 l-6 12 h12z"/></g>
<g font-family="sans-serif" font-size="13" font-weight="bold" fill="#f87171" text-anchor="middle">
<text x="263" y="124">1998</text><text x="298" y="140">2002</text>
<text x="452" y="124">2016–2024</text><text x="452" y="140">5 bleachings</text></g>
<text x="24" y="24" font-family="sans-serif" font-size="14" fill="#e2e8f0">green = management · red = mass bleaching</text>
</svg>"""

D_GARDEN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 150">
<rect width="520" height="150" fill="#0f172a"/>
<g fill="#155e75" stroke="#67e8f9" stroke-width="2">
<rect x="8" y="30" width="108" height="48" rx="8"/><rect x="138" y="30" width="108" height="48" rx="8"/>
<rect x="268" y="30" width="118" height="48" rx="8"/><rect x="408" y="30" width="104" height="48" rx="8"/></g>
<g font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">
<text x="62" y="60">COLLECT</text><text x="192" y="60">GROW</text><text x="327" y="60">TRANSPLANT</text><text x="460" y="60">MONITOR</text></g>
<g stroke="#fde047" stroke-width="3"><path d="M118 54 h16"/><path d="M248 54 h16"/><path d="M388 54 h16"/></g>
<path d="M460 80 V118 H62 V82" stroke="#fde047" stroke-width="3" fill="none" stroke-dasharray="6 5"/>
<path d="M62 80 l-6 10 h12z" fill="#fde047"/>
<text x="260" y="140" font-family="sans-serif" font-size="13" fill="#e2e8f0" text-anchor="middle">learn which corals survive best · repeat</text>
<g font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">
<text x="62" y="22">fragments</text><text x="192" y="22">nursery frames</text><text x="327" y="22">onto bare rock</text><text x="460" y="22">survival, bleaching</text></g>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("tara", 300), ("mum", 760)])
L("mum", "Pack the snorkels! The Great Barrier Reef, half price. The advert says, last chance to see it!", mood="excited", shot="close", prop="phone")
L("tara", "Mum. Last chance to see it is not a selling point. It's a warning.", mood="deadpan", shot="close", gap=0.4)
scene("living", [("tara", 260), ("mum", 600), ("dad", 980)])
sfx("door")
L("dad", "Family. I've started a business. Rao Reef Fishing Charters. We fish in the green zones, where the coral trout are biggest.", mood="smug", shot="close", prop="tablet")
L("tara", "Dad. Green zones are where fishing is banned. That's why the fish are big.", mood="deadpan", shot="close")
L("dad", "No competition!", mood="excited", shot="close")
freeze("\"NO COMPETITION.\"", 2.4, narrator="Narrator: There was, however, a very large fine.")
confess("tara", "TARA RAO · 12 · Only Sane Person In This House")
L("tara", "My father found the one place in Australia where fishing is illegal. And called it a gap in the market.", mood="deadpan", gap=0.6)

title()

# ---------------- ACT 1: THE GREAT BARRIER REEF ----------------
scene("kitchen", [("tara", 380)])
L("tara", "Right. Time to open the drawer we don't open.", mood="determined", shot="wide")
sfx("drawer")
poof("globo", 860)
L("globo", "Who disturbs my nap? Ah. Let me guess. Your father has done something to an ocean.", mood="bored", shot="close")
L("tara", "He wants to run a fishing boat on the Great Barrier Reef. In a green zone.", mood="worried", shot="two")
L("globo", "Of course he does. He once asked me where Australia was. I'm a globe. I was pointing at it.", mood="eyeroll", shot="close", gap=0.4)

confess("globo", "GLOBO · Retired Classroom Globe · Lives In The Junk Drawer")
L("globo", "I am Globo. The Great Barrier Reef is painted on me in bright blue. It has faded a little. Like the real thing.", mood="smug", gap=0.5)

scene("reef", [("tara", 280), ("dad", 620), ("globo", 960)], "THE GREAT BARRIER REEF · Queensland, Australia · Flown In By Globo Airways")
L("dad", "Wow. So which bit is the reef?", mood="excited", shot="close", prop="sunglasses")
L("globo", "All of it. The world's largest coral reef system, in the Coral Sea, off the north east coast of Queensland, Australia.", mood="teach", shot="close",
  boardClear=True, board="GREAT BARRIER REEF · in the CORAL SEA", diagram=D_MAP)
L("tara", "Not one reef. About two thousand nine hundred reefs and nine hundred islands, stretching about two thousand three hundred kilometres.", mood="happy", shot="close",
  board="Off QUEENSLAND, north-east Australia")
L("dad", "That's even longer than the prata queue on a Sunday.", mood="shock", shot="close",
  board="~2,300 km · ~2,900 reefs · ~900 islands")
L("globo", "A marine park since nineteen seventy five. A World Heritage Site since nineteen eighty one.", mood="teach", shot="close",
  boardClear=True, board="Marine Park 1975 · World Heritage 1981")
L("dad", "But what's it worth? I'm a finance man.", mood="thinking", shot="close")
L("globo", "A twenty seventeen study estimated about six point four billion Australian dollars a year, and about sixty four thousand jobs. Mostly tourism.", mood="teach", shot="close",
  board="~A$6.4bn a year + ~64,000 jobs (2017 est.)")
L("tara", "Plus fifteen hundred fish species, protection from waves, and the Sea Country of its Traditional Owners.", mood="happy", shot="close",
  board="Biodiversity · coast protection · culture")
L("globo", "Stakeholders. Farmers upstream, whose fertiliser washes onto the reef. Fishers. Tour operators. Scientists. Traditional Owners. And the government, balancing jobs and conservation.", mood="teach", shot="close",
  boardClear=True, board="STAKEHOLDERS: farmers · fishers · tourism")
L("dad", "And businessmen. Who want fish. From the green zone.", mood="smug", shot="close",
  board="Scientists · Traditional Owners · govt")
L("globo", "This businessman wants a lawyer. They all want different things, so the reef is hard to manage.", mood="eyeroll", shot="close",
  board="Interests CLASH → hard to manage")

# ---------------- ACT 2: HOW THE REEF IS MANAGED ----------------
card("MEANWHILE, ON DAD'S BOAT", "Rao Reef Fishing Charters · Customers: zero", 2.4)
scene("reef", [("tara", 240), ("mum", 490), ("dad", 740), ("globo", 1000)])
L("mum", "The man at the marina gave us a map covered in colours. Is it a sale map?", mood="thinking", shot="close", prop="map")
L("globo", "A zoning map. Each zone has different rules.", mood="teach", shot="close",
  boardClear=True, board="ZONING: different rules in each zone", diagram=D_ZONES)
L("globo", "Green zones are no take. Swim and snorkel, but no fishing. In two thousand and four they grew from about four and a half percent of the park to about a third.", mood="teach", shot="close",
  board="GREEN no-take: ~4.5% → ~33% in 2004")
L("tara", "And pink zones, you can't enter without a permit. Green means grab nothing. Pink means please keep out.", mood="happy", shot="close",
  board="PINK: no entry without a permit")
L("dad", "So where can my boat fish?", mood="worried", shot="close")
L("globo", "Yellow or blue zones. With rules. I'd turn those T shirts inside out.", mood="smug", shot="close")
sfx("trombone")
L("globo", "Tool two. Crown of thorns starfish eat coral. Divers kill each one with a single injection of bile salts or vinegar, which doesn't harm the coral.", mood="teach", shot="close",
  boardClear=True, board="STARFISH: divers inject bile salts/vinegar")
L("mum", "Vinegar? Like on my chips?", mood="thinking", shot="close")
L("tara", "Tool three. Farm rules, strengthened in twenty nineteen. Less fertiliser means less plankton, so fewer starfish larvae survive.", mood="determined", shot="close",
  board="FARMS: less fertiliser → fewer starfish")
L("globo", "Tool four. Tourism permits, a visitor charge, and moorings so anchors miss the coral.", mood="teach", shot="close",
  board="TOURISM: permits · charge · moorings")
L("mum", "A charge? Is there a family discount?", mood="excited", shot="close")
L("globo", "Madam, the reef is the one thing on Earth you cannot haggle with.", mood="eyeroll", shot="close")
L("globo", "Tool five. The Reef twenty fifty Plan, from twenty fifteen. Long term targets for water quality, wildlife and jobs.", mood="teach", shot="close",
  boardClear=True, board="REEF 2050 PLAN (2015): long-term targets")
L("globo", "Tool six. Restoration. Coral nurseries, coral I V F with spawn, and heat tolerant corals. But only on small areas.", mood="teach", shot="close",
  board="RESTORATION: nurseries · IVF (small)")
L("tara", "Zara Cleans Water To Restore Reefs. Zoning, crown of thorns, water, tourism, restoration, Reef twenty fifty.", mood="happy", shot="close",
  board="Zara Cleans Water To Restore Reefs")

confess("dad", "VIKRAM RAO · Dad · Self-Described Marine Entrepreneur")
L("dad", "I've pivoted. Rao Reef Looking Charters. You look at the fish. The fish look at you. Nobody gets fined.", mood="smug", gap=0.6)

# ---------------- ACT 3: IS IT WORKING? ----------------
card("THE NEXT MORNING", "Dad has found some white coral", 2.2)
scene("reef", [("tara", 240), ("mum", 490), ("dad", 740), ("globo", 1000)])
L("dad", "Some coral has gone white. So I bought paint. Good as new.", mood="determined", shot="close", prop="paintroller")
L("tara", "Dad. That's bleaching. You can't paint a coral better.", mood="deadpan", shot="close")
L("globo", "When the water stays too hot for weeks, coral expels the algae that feed it, turns white and starves. Stressed. Not dead. Yet.", mood="teach", shot="close",
  boardClear=True, board="BLEACHING: too hot → algae expelled")
L("dad", "So the zoning was a waste of money!", mood="annoyed", shot="close")
L("globo", "Weigh the evidence. For: bigger fish in green zones, and culling protects the reefs divers work on.", mood="teach", shot="close",
  board="✔ Bigger fish in green zones · culling")
L("globo", "Against: mass bleaching in twenty sixteen, seventeen, twenty, twenty two and twenty four. In twenty sixteen, roughly thirty percent of shallow water coral died.", mood="teach", shot="close",
  boardClear=True, board="✘ Bleaching 2016·17·20·22·24", diagram=D_TIMELINE)
L("tara", "And farm run off targets are being missed. UNESCO has even considered listing it as in danger.", mood="thinking", shot="close",
  board="✘ 2016: ~30% shallow coral died")
L("globo", "The key. Local threats, like fishing, run off and starfish, can be managed. Ocean warming is global. A ranger can stop a boat. Not a heatwave.", mood="teach", shot="close",
  boardClear=True, board="LOCAL: fishing · run-off · starfish ✔")
L("tara", "So local management builds resilience. Healthy reefs bounce back faster. It buys time.", mood="happy", shot="close",
  board="GLOBAL: ocean warming ✘")
L("mum", "So is it working? Yes or no. Like a refund.", mood="thinking", shot="close",
  board="RESILIENCE: healthy reefs recover faster")
L("tara", "Largely successful against local threats. But its long term future depends on global action on climate change.", mood="determined", shot="close",
  board="JUDGE: works locally, needs GLOBAL action")
L("globo", "A qualified judgement. The examiner weeps with joy.", mood="smug", shot="close")

confess("mum", "MUM · Deal Hunter · Has Never Paid Full Price")
L("mum", "A qualified judgement. That's what I give every shop. Largely successful. But I want ten percent off.", mood="smug", gap=0.5)

# ---------------- ACT 4: CLOSER TO HOME ----------------
card("BACK IN SINGAPORE", "Same ocean. Smaller reef.", 2.2)
scene("reef", [("tara", 260), ("mum", 580), ("globo", 960)], "SISTERS' ISLANDS MARINE PARK · Singapore · Flown In By Globo Airways")
L("mum", "Singapore has coral? I thought we only had ships.", mood="shock", shot="close")
L("globo", "Reclamation has destroyed a lot, often estimated at around sixty percent. But over two hundred and fifty hard coral species remain.", mood="teach", shot="close",
  boardClear=True, board="SG: 250+ hard coral species remain")
L("tara", "Sisters' Islands Marine Park, from twenty fourteen, was Singapore's first. About forty hectares. No collecting allowed.", mood="happy", shot="close",
  board="SISTERS' ISLANDS: 1st marine park, 2014")
L("mum", "So Australia is the family pack, and ours is the travel size.", mood="happy", shot="close",
  board="~40 hectares · no collecting · research")
L("globo", "Coral gardening. Collect broken fragments. Grow them in a nursery. Transplant them onto a damaged reef. Monitor.", mood="teach", shot="close",
  boardClear=True, board="CORAL GARDENING (NParks nurseries)", diagram=D_GARDEN)
L("globo", "In twenty twenty four, the parks board aimed to plant about a hundred thousand corals in roughly ten years. Helpful, but protecting healthy reefs matters more.", mood="teach", shot="close",
  board="2024: aim ~100,000 corals in ~10 years")
L("tara", "And us? Never touch coral. Keep your fins up. Take the M R T to cut emissions.", mood="determined", shot="close",
  boardClear=True, board="YOU: don't touch · fins up · cut emissions")
L("mum", "And choose sustainable seafood? We're vegetarian. Our seafood is seaweed crisps.", mood="smug", shot="close",
  board="Sustainable seafood (for those who eat it)")

confess("globo", "GLOBO · Recap Globe · Still Slightly Faded In Queensland")
L("globo", "Recap. One. The Great Barrier Reef. Queensland. Huge, and worth billions.", mood="teach", boardClear=True, board="1. GBR: Qld · ~2,300 km · ~A$6.4bn a year")
L("globo", "Two. Zara Cleans Water To Restore Reefs.", mood="teach", board="2. Zoning · COTS · farms · tourism · 2050")
L("globo", "Three. Green means grab nothing. Pink means keep out.", mood="teach", board="3. Green = no-take · Pink = no entry")
L("globo", "Four. Local threats, yes. Global warming, no.", mood="teach", board="4. Local threats ✔ · global warming ✘")
L("globo", "Five. Sisters' Islands, nurseries, and you.", mood="smug", board="5. Sisters' Islands · nurseries · you", gap=0.5)

scene("living", [("tara", 260), ("mum", 560), ("dad", 860)])
L("mum", "So. The reef deal. Last chance to see it.", mood="thinking", shot="close", prop="phone")
L("tara", "Or a ferry to Sisters' Islands. Lower emissions.", mood="deadpan", shot="close")
L("mum", "The ferry is cheaper? Cancel Australia!", mood="excited", shot="close")
L("dad", "And I found an investor for Rao Reef Looking Charters. Uncle Hock. He paid me in thosai.", mood="smug", shot="close")
L("tara", "That's actually a great deal.", mood="shock", shot="close")
sfx("ding")
L("globo", "Back in the drawer. And turn me so the Coral Sea faces the window.", mood="bored", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Five seconds each. Globo is counting.", 3.0)
challenge(1, "In a GREEN zone: can you fish? Can you snorkel?", "NO · YES", "green = no-take: visit, but take nothing",
  "Question one. In a green zone, can you fish? Can you snorkel?",
  "No fishing, yes snorkelling. Green is no take. Pink you can't enter.")
challenge(2, "Why can't zoning stop coral bleaching?", "GLOBAL WARMING", "marine heatwaves → global, not local",
  "Question two. Why can't zoning stop coral bleaching?",
  "Bleaching comes from marine heatwaves, linked to global climate change.")
challenge(3, "Coral gardening: collect → grow → ? → monitor", "TRANSPLANT", "young colonies fixed onto a damaged reef",
  "Question three. Coral gardening. Collect, grow, then what, then monitor?",
  "Transplant. Young corals are fixed onto a damaged reef, then monitored.")
end_card()
