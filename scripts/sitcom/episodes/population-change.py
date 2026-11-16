# "Off The Map" (a Claude Sitcom) S01E04 "Push Comes To Shove" (Topic: Why Populations Change: Migration)
# Format and helpers: see common.py and EPISODE_GUIDE.md; check with lint_episode.py.

EP = dict(
    topic="population-change",
    logline="Dad loses the aircon war and threatens to 'emigrate' to Tampines. Nani tells the real story of her family's migration, and Atlas spins everyone to London to meet a Polish builder and a Syrian doctor.",
    names={"guest": "TOMASZ", "guest2": "DR RANA"},
    display={"Tomash": "Tomasz", "E U": "EU", "U S A": "USA", "U S dollars": "US dollars",
             "U K": "UK", "H D B": "HDB", "M R T": "MRT"},
)

EQUATION = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">'
    '<text x="260" y="32" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#fde047">Change = (B − D) + (I − E)</text>'
    '<rect x="190" y="60" width="140" height="110" rx="10" fill="#1e3a8a"/>'
    '<text x="260" y="122" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#f8fafc">POPULATION</text>'
    '<text x="16" y="92" font-family="sans-serif" font-size="20" fill="#86efac">Births IN →</text>'
    '<text x="504" y="92" text-anchor="end" font-family="sans-serif" font-size="20" fill="#86efac">← Immigrants IN</text>'
    '<text x="16" y="156" font-family="sans-serif" font-size="20" fill="#fca5a5">← Deaths OUT</text>'
    '<text x="504" y="156" text-anchor="end" font-family="sans-serif" font-size="20" fill="#fca5a5">Emigrants OUT →</text>'
    '<text x="260" y="208" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#7dd3fc">BI in, DE out</text>'
    '</svg>'
)

LEE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">'
    '<text x="110" y="26" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#fca5a5">ORIGIN</text>'
    '<text x="410" y="26" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#86efac">DESTINATION</text>'
    '<ellipse cx="110" cy="115" rx="95" ry="72" fill="#7f1d1d"/>'
    '<ellipse cx="410" cy="115" rx="95" ry="72" fill="#14532d"/>'
    '<text x="110" y="108" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#f8fafc">− −  +</text>'
    '<text x="110" y="146" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#f8fafc">0  −</text>'
    '<text x="410" y="108" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#f8fafc">+ +  −</text>'
    '<text x="410" y="146" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#f8fafc">+  0</text>'
    '<line x1="190" y1="115" x2="318" y2="115" stroke="#7dd3fc" stroke-width="5"/>'
    '<polygon points="318,103 336,115 318,127" fill="#7dd3fc"/>'
    '<rect x="245" y="68" width="30" height="94" fill="#fde047"/>'
    '<text x="260" y="214" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#fde047">OBSTACLES: cost, distance, laws, sea</text>'
    '</svg>'
)

SYRIA = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<text x="10" y="30" font-family="sans-serif" font-size="22" fill="#f8fafc">Syrian refugees hosted (peak)</text>'
    '<text x="10" y="76" font-family="sans-serif" font-size="20" fill="#f8fafc">Turkey</text>'
    '<rect x="120" y="50" width="300" height="36" fill="#fca5a5"/>'
    '<text x="430" y="76" font-family="sans-serif" font-size="20" fill="#fca5a5">~3.6m</text>'
    '<text x="10" y="126" font-family="sans-serif" font-size="20" fill="#f8fafc">Lebanon</text>'
    '<rect x="120" y="100" width="125" height="36" fill="#fde047"/>'
    '<text x="255" y="126" font-family="sans-serif" font-size="20" fill="#fde047">~1.5m</text>'
    '<text x="10" y="176" font-family="sans-serif" font-size="20" fill="#f8fafc">Jordan</text>'
    '<rect x="120" y="150" width="54" height="36" fill="#7dd3fc"/>'
    '<text x="184" y="176" font-family="sans-serif" font-size="20" fill="#7dd3fc">~650,000 registered</text>'
    '</svg>'
)

def _rank_card(cx, y, label, fill):
    return (f'<rect x="{cx - 75}" y="{y}" width="150" height="42" rx="8" fill="{fill}"/>'
            f'<text x="{cx}" y="{y + 28}" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#f8fafc">{label}</text>')

DIAMOND = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 270">'
    '<text x="12" y="36" font-family="sans-serif" font-size="18" fill="#86efac">MOST</text>'
    '<text x="12" y="246" font-family="sans-serif" font-size="18" fill="#fca5a5">LEAST</text>'
    + _rank_card(260, 10, "Wage gap", "#166534")
    + _rank_card(180, 62, "Jobs", "#3f6212") + _rank_card(340, 62, "EU entry 2004", "#3f6212")
    + _rank_card(100, 114, "Cheap flights", "#854d0e") + _rank_card(260, 114, "Friends there", "#854d0e")
    + _rank_card(420, 114, "Language", "#854d0e")
    + _rank_card(180, 166, "Housing", "#7c2d12") + _rank_card(340, 166, "Schools", "#7c2d12")
    + _rank_card(260, 218, "Weather", "#7f1d1d")
    + '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 250), ("mum", 540), ("priya", 840)])
L("mum", "Twenty five degrees. That is the household temperature. It is on my checklist. Laminated.", mood="smug", shot="close")
L("dad", "Twenty five is a punishment. I need twenty two. Give me the remote.", mood="annoyed", shot="close")
L("mum", "No. You lost the last one inside the sofa for three weeks.", mood="deadpan", shot="close")
L("dad", "Then I am leaving. I am emigrating. To your sister's house. In Tampines.", mood="determined", shot="close", prop="suitcase")
L("priya", "Dad. Tampines is in Singapore.", mood="deadpan", shot="close", gap=0.3)
freeze("DAD'S BIG MIGRATION", 2.6, narrator="Narrator: Borders crossed, zero. Biscuits packed, three.")
confess("priya", "PRIYA · 12 · Lives Inside A Thermostat War")
L("priya", "To emigrate, you leave your country. Dad is leaving the living room.", mood="deadpan")
L("priya", "Luckily, we own a globe with opinions.", mood="smug", gap=0.5)

title()

# ---------------- ACT 1: THE EQUATION ----------------
scene("living", [("dad", 240), ("priya", 500)])
L("priya", "Atlas! Family migration crisis.", mood="determined", shot="wide")
sfx("whoosh")
poof("atlas", 860)
L("atlas", "Tampines? Moving inside one country is internal migration. Very, very small internal migration.", mood="bored", shot="close",
  boardClear=True, board="Internal = moving inside one country")
L("dad", "Then Johor Bahru! Across the Causeway. International!", mood="excited", shot="close")
L("atlas", "Better. You would be an emigrant from Singapore and an immigrant to Malaysia. Same man. Two labels.", mood="teach", shot="close",
  board="International = crosses a border")
L("priya", "Immigrants come in. Emigrants exit.", mood="thinking", shot="close",
  board="Immigrants come IN · Emigrants EXIT")
L("atlas", "Populations change in three ways. People are born, people die, people move. B I in, D E out.", mood="teach", shot="close",
  boardClear=True, diagram=EQUATION)
L("priya", "So births minus deaths is natural change. Immigrants minus emigrants is net migration.", mood="thinking", shot="close",
  board="Natural change = births − deaths")
L("atlas", "Add them for the total change. Forget one of the four, and you lose the marks.", mood="teach", shot="close",
  board="Net migration = immigrants − emigrants")
L("atlas", "Puzzle. Singapore's fertility rate is about zero point nine seven. Replacement is two point one. Yet we grew to about six million. How?", mood="thinking", shot="close",
  boardClear=True, board="SG fertility ≈ 0.97 (replacement = 2.1)")
L("dad", "Very large families. In Tampines.", mood="smug", shot="close")
L("priya", "Migration. About one point nine million people here are non-residents. Nearly one in three.", mood="deadpan", shot="close",
  board="~1.9m of ~6.0m are non-residents")
L("nani", "Who is emigrating? Nobody emigrates without telling me.", mood="annoyed", offstage=True, gap=0.3)

# ---------------- NANI'S STORY: PUSH, PULL, LEE ----------------
scene("living", [("nani", 240), ("dad", 460), ("priya", 680), ("atlas", 1000)])
L("nani", "Tampines. With a pillow. My father crossed the Bay of Bengal with one tin trunk.", mood="smug", shot="close")
L("nani", "I was six. Our village in Kerala had rain, but not enough land, and not enough work.", mood="thinking", shot="close")
L("atlas", "Push factors. The bad things about the place you leave.", mood="teach", shot="close",
  boardClear=True, board="PUSH = bad things at the ORIGIN")
L("nani", "Singapore had the harbour, the naval base, work. And my uncle was already here, with a spare mat.", mood="happy", shot="close")
L("atlas", "Pull factors. Jobs, wages, family already there. Sort them as economic, social, political or environmental.", mood="teach", shot="close",
  board="PULL = good things at the DESTINATION")
L("nani", "The ticket cost a year of savings. A week at sea. Everyone was sick. Even the goat.", mood="neutral", shot="close")
L("atlas", "Intervening obstacles. Cost, distance, laws. Everett Lee's model, nineteen sixty six.", mood="teach", shot="close",
  boardClear=True, diagram=LEE, board="Lee (1966): origin, destination, obstacles")
L("nani", "My father's brother stayed. Same pushes, same pulls. But he had a sick mother, and he hated boats.", mood="sad", shot="close")
L("priya", "Personal factors. The same pushes don't make everyone move.", mood="thinking", shot="close",
  board="+ personal factors: age, family, risk")
L("dad", "My push factor is twenty five degrees.", mood="annoyed", shot="close")
L("nani", "Your push factor is that you lost the remote. Twice.", mood="deadpan", shot="close", gap=0.4)

confess("atlas", "ATLAS · Desk Globe · Migrated Between Four Bookshelves")
L("atlas", "I have migrated four times. Every move, someone dropped me on Australia. My intervening obstacle is gravity.", mood="bored", gap=0.5)

# ---------------- ACT 2: LONDON ----------------
scene("living", [("priya", 260), ("dad", 560), ("atlas", 880)])
L("atlas", "Before anybody emigrates, meet some real migrants. Hold on. Not to me. I bruise.", mood="smug", shot="close")
sfx("whoosh")
scene("city", [("priya", 230), ("dad", 470), ("atlas", 780)], caption="LONDON · United Kingdom · Building site, 8 a.m.")
L("dad", "London! I have been here. Heathrow. Lovely carpet.", mood="smug", shot="close")
sfx("door")
poof("guest", 1080)
L("guest", "Morning! Mind the cement. I'm Tomash. I came from Poland in two thousand and five, with one bag.", mood="happy", shot="close")
L("guest", "In two thousand and four, Polish unemployment was about nineteen percent. Wages here were far higher.", mood="teach", shot="close",
  boardClear=True, board="Poland 2004: unemployment ≈ 19%")
L("guest", "On the first of May that year, Poland joined the European Union. Britain let us work straight away.", mood="happy", shot="close",
  board="1 May 2004: Poland joins the EU")
L("atlas", "An obstacle, removed overnight. The Polish born population here rose to roughly a million.", mood="teach", shot="close",
  board="UK Poles: <100,000 (2001) → ~1m (2016)")
L("guest", "I sent money home every month. My mother fixed the roof. Then built a second roof. Nobody knows why.", mood="happy", shot="close")
L("atlas", "Remittances. In twenty twenty four, about six hundred and eighty five billion U S dollars reached poorer countries.", mood="teach", shot="close",
  boardClear=True, board="Remittances ≈ US$685 bn (2024)")
L("guest", "But my town lost young nurses and engineers.", mood="sad", shot="close")
L("atlas", "Brain drain. The source area loses skilled people, and the cost of training them.", mood="teach", shot="close",
  board="Brain drain = skilled people leave")
L("guest", "Then Polish wages rose, and after Brexit, free movement ended in twenty twenty. Many friends went home.", mood="thinking", shot="close",
  board="Free movement ended 31 Dec 2020")

scene("city", [("dad", 220), ("priya", 430), ("guest2", 650), ("atlas", 960)], caption="LONDON · United Kingdom · Hospital garden, lunchtime")
L("guest2", "Hello. I'm Doctor Rana. Tomash chose to move. I did not. I am from Aleppo, in Syria.", mood="neutral", shot="close")
L("guest2", "The war began in twenty eleven. Our street was bombed. In a war, you do not list pros and cons. You leave.", mood="sad", shot="close",
  boardClear=True, board="Syria: civil war from 2011")
L("atlas", "Forced migration. Little or no choice.", mood="teach", shot="close",
  board="Voluntary vs FORCED migration")
L("guest2", "Syria had about twenty one to twenty two million people. Over half were forced from home. More than six million fled abroad as refugees.", mood="teach", shot="close",
  board="Pre-war ~21–22m · over half displaced")
L("atlas", "Exam trap. Those forced from home inside Syria are internally displaced people. No border crossed, so not refugees.", mood="eyeroll", shot="close",
  board="IDP = displaced, no border crossed")
L("guest2", "At first I was an asylum seeker. I had asked for protection, and was waiting. Now I am a recognised refugee.", mood="teach", shot="close",
  board="Asylum seeker = still Asking, waiting")
L("guest2", "Most Syrians went next door. Turkey hosted about three point six million. Lebanon, one point five million.", mood="teach", shot="close",
  boardClear=True, diagram=SYRIA)
L("atlas", "Distance is an obstacle. The routes to Europe meant sea crossings and smugglers.", mood="teach", shot="close",
  board="Obstacles: sea, smugglers, closed borders")
L("guest2", "In Lebanon, schools ran double shifts. But refugees also brought skills. My cousin is a surgeon in Germany now.", mood="neutral", shot="close",
  board="Hosts: pressure on services + skills")
L("dad", "And I was emigrating to Tampines. Over a remote.", mood="sad", shot="close")
L("guest2", "Go home. Share the remote. That is what a peaceful home looks like.", mood="happy", shot="close", gap=0.5)

confess("dad", "DAD · Self-Declared Explorer · Forty Airports, One Remote")
L("dad", "I have been to forty countries. Well. Forty airports.", mood="smug")
L("dad", "Today I met people who moved for work, and for safety. I moved for twenty two degrees.", mood="sad", gap=0.6)

# ---------------- ACT 3: SINGAPORE ----------------
card("MEANWHILE, BACK IN SINGAPORE", "Dad has unpacked. He has apologised to the sofa.", 2.4)
scene("hawker", [("priya", 240), ("mum", 460), ("uncle", 1000)])
poof("atlas", 720)
L("mum", "Checklist. About one point five million foreign workers in Singapore. Who decides who comes?", mood="determined", shot="close", prop="tablet",
  boardClear=True, board="SG: ~1.5m foreign workers")
L("atlas", "Work passes. Employment Pass, S Pass, Work Permit. Employers pay levies and stay within quotas.", mood="teach", shot="close",
  board="Employment Pass · S Pass · Work Permit")
L("uncle", "Foreign workers built my H D B block and the M R T. On Sundays at Lucky Plaza, they queue to send money home.", mood="teach", shot="close",
  board="Host gains: workers, taxes, skills")
L("priya", "But host areas feel pressure too. Housing, transport, and crowded dormitories in twenty twenty.", mood="thinking", shot="close",
  board="Host pressure: housing, transport, dorms")

# ---------------- MR TAN: NUMBERS AND A DIAMOND ----------------
scene("classroom", [("teacher", 300), ("priya", 600), ("atlas", 920)])
L("teacher", "Thirty thousand births, twenty five thousand deaths, forty thousand immigrants, ten thousand emigrants.", mood="teach", shot="close",
  boardClear=True, board="B 30,000 · D 25,000 · I 40,000 · E 10,000")
L("priya", "Natural change, plus five thousand. Net migration, plus thirty thousand. Total, plus thirty five thousand.", mood="thinking", shot="close",
  board="+5,000 + 30,000 = +35,000")
L("teacher", "So migration is the most significant component. Six times bigger. Like Singapore. In Japan, natural decrease matters most.", mood="teach", shot="close",
  board="Migration 6× bigger · Japan: natural decr.")
L("teacher", "For one migrant, use a diamond ranking. Nine cards. One, two, three, two, one.", mood="teach", shot="close",
  boardClear=True, diagram=DIAMOND, board="Diamond ranking: 1 · 2 · 3 · 2 · 1")
L("priya", "Tomash. Wage gap on top. Weather at the bottom. London weather is not a pull factor.", mood="deadpan", shot="close")
L("priya", "For Doctor Rana, war and danger go straight to the top.", mood="neutral", shot="close",
  board="Syria 2013: war and danger at the top")
L("teacher", "It depends who, where and when. Then judge, with evidence and a figure.", mood="teach", shot="close",
  board="Judgement · evidence + figure · compare")
L("atlas", "And factors change over time. Mexico to the U S A. From about two thousand and nine, net migration fell to around zero.", mood="teach", shot="close",
  boardClear=True, board="Mexico→USA: 2009–14 net migration ≈ 0")
L("teacher", "Who brought a globe to class?", mood="worried", shot="close")
L("priya", "He followed me.", mood="deadpan", shot="close", gap=0.4)

# ---------------- RECAP ----------------
confess("atlas", "ATLAS · Recap Globe · Firmly Against Tampines")
L("atlas", "Recap. One. Change is births minus deaths, plus immigrants minus emigrants.", mood="teach",
  boardClear=True, board="1. Change = (B − D) + (I − E)")
L("atlas", "Two. Internal or international. Voluntary or forced.", mood="teach",
  board="2. Internal/international · vol./forced")
L("atlas", "Three. Refugees crossed a border. Asylum seekers are waiting. Displaced people never crossed one.", mood="teach",
  board="3. Refugee · asylum seeker · IDP")
L("atlas", "Four. Push, pull, obstacles, personal factors.", mood="teach",
  board="4. Push, pull, obstacles, personal")
L("atlas", "Five. Remittances help the source area. Brain drain hurts it. Rank, then judge.", mood="smug",
  board="5. Remittances + · brain drain − · rank", gap=0.5)

# ---------------- TAG ----------------
scene("living", [("dad", 220), ("nani", 440), ("priya", 660), ("atlas", 980)])
L("dad", "I am still going to Tampines. Tonight.", mood="determined", shot="close", prop="suitcase")
L("nani", "Good. My other daughter keeps her aircon at twenty six. And three cats sleep on the guest bed.", mood="smug", shot="close")
L("atlas", "An intervening obstacle. Three of them. With claws.", mood="smug", shot="close")
L("dad", "I'm staying. Twenty five is lovely.", mood="worried", shot="close")
sfx("trombone")
L("priya", "Net migration, zero.", mood="deadpan", shot="wide", gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Atlas gives you 5 seconds. Then he migrates to the next question.", 3.0)
challenge(1, "Births 12,000, deaths 15,000, immigrants 20,000, emigrants 5,000. Population change?", "+12,000",
  "(12,000 − 15,000) + (20,000 − 5,000) = +12,000",
  "Question one. Twelve thousand births, fifteen thousand deaths, twenty thousand immigrants, five thousand emigrants. What is the change?",
  "Plus twelve thousand. Natural change, minus three thousand. Net migration, plus fifteen thousand.")
challenge(2, "Someone has applied for protection abroad and is still waiting for a decision. What are they?", "An asylum seeker",
  "Asylum seeker = waiting; refugee = recognised",
  "Question two. Someone has applied for protection abroad and is still waiting. What are they?",
  "An asylum seeker. Once recognised, they are a refugee.")
challenge(3, "Poland joined the EU in 2004. Using Lee's model, what did this change?", "Removed an obstacle",
  "No visa needed → intervening obstacle removed",
  "Question three. Using Lee's model, what did Poland joining the European Union change?",
  "It removed an intervening obstacle, so migration to the U K rose.")
end_card()
