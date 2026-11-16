# Shared cast, season list and beat helpers for "Off The Map" (a Claude Sitcom, Year 8 Geography).
# build.py / lint_episode.py exec this file, then the episode file, in one namespace.
# Episode files set EP = dict(topic=..., logline=..., names={...}) and call the helpers below.

SHOW = "OFF THE MAP"

VOICES = {
    "priya":   dict(voice="af_heart", speed=1.06, lang="en-us"),
    "mum":     dict(voice="bf_emma", speed=1.08, lang="en-gb"),
    "dad":     dict(voice="bm_george", speed=1.0, lang="en-gb"),
    "nani":    dict(voice="bf_isabella", speed=0.96, lang="en-gb", pitch=-1.5),
    "atlas":   dict(voice="bm_lewis", speed=0.97, lang="en-gb", pitch=-2.0),
    "teacher": dict(voice="am_michael", speed=1.02, lang="en-us"),
    "uncle":   dict(voice="am_onyx", speed=1.0, lang="en-us", pitch=-1.0),
    "guest":   dict(voice="am_puck", speed=1.06, lang="en-us"),
    "guest2":  dict(voice="af_nova", speed=1.04, lang="en-us"),
}
# The pause-challenge host (voices the questions and answers).
HOST = "atlas"

# Season 1 running order = the app's topic order.  (num, topic id, short topic name, episode title)
SEASON = [
    (1, "population-distribution", "Distribution & Density", "Crowded House"),
    (2, "population-growth", "Population Growth", "Eight Billion And One"),
    (3, "demography", "Demography", "Pyramid Scheme"),
    (4, "population-change", "Migration", "Push Comes To Shove"),
    (5, "population-policies", "Population Policies", "One Is The Loneliest Number"),
    (6, "extreme-environments", "Extreme Environments", "Hot Stuff, Cold Feet"),
    (7, "extreme-weather", "Extreme Weather", "Under Pressure"),
    (8, "adaptations", "Adaptations", "Survival Of The Fluffiest"),
    (9, "extreme-tourism", "Extreme Tourism", "Penguins Don't Do Selfies"),
    (10, "coastal-processes", "Coastal Processes", "Shore Thing"),
    (11, "coastal-landforms", "Coastal Landforms", "Stack To The Future"),
    (12, "coral-reefs", "Coral Reefs", "Bleached Out"),
    (13, "cities-megacities", "Cities & Megacities", "Mega Problems"),
    (14, "lagos", "Lagos", "Go-Slow Your Roll"),
    (15, "sustainable-cities", "Sustainable Cities", "Green Day"),
]

CHARACTERS = set(VOICES)
SETS = {"living", "kitchen", "classroom", "hawker", "park", "beach", "desert", "polar", "mountain", "reef", "city", "lagos", "ecocity"}  # + confess_<character>
MOODS = {"neutral", "happy", "excited", "deadpan", "annoyed", "shock", "smug", "thinking", "worried", "sad",
         "determined", "teach", "bored", "eyeroll"}
SHOTS = {"close", "two", "wide"}
PROPS = {"phone", "tablet", "book", "plate", "map", "compass", "binoculars", "suitcase", "umbrella", "thermometer", "flag", "calculator"}
SFX_NAMES = {"ding", "buzzer", "scratch", "trombone", "poof", "whoosh", "tick", "door", "drawer"}

B = []
def scene(id, cast, caption=None): B.append(dict(type="scene", id=id, cast=cast, caption=caption))
def L(who, text, **kw): B.append(dict(type="line", who=who, text=text, **kw))
def sfx(name, gap=0.0): B.append(dict(type="sfx", name=name, gap=gap))
def freeze(text, dur=2.6, s="scratch", narrator=""): B.append(dict(type="freeze", text=text, dur=dur, sfx=s, narrator=narrator))
def poof(who, x): B.append(dict(type="poof", who=who, x=x))
def card(text, sub="", dur=2.5): B.append(dict(type="card", text=text, sub=sub, dur=dur))
def challenge(n, q, a, work, qs, as_): B.append(dict(type="challenge", n=n, q=q, a=a, work=work, qs=qs, as_=as_))
def confess(who, caption): scene("confess_" + who, [(who, 640)], caption)

def _ep():
    ep = globals().get("EP") or {}
    row = next(r for r in SEASON if r[1] == ep["topic"])
    return row
def title(dur=5.0):
    num, _, _, t = _ep()
    B.append(dict(type="title", title=SHOW, sub=f"Episode {num} · “{t}”", dur=dur))
def end_card(dur=4.0):
    num = _ep()[0]
    nxt = next((r for r in SEASON if r[0] == num + 1), None)
    sub = f"Next time: {nxt[2]} — “{nxt[3]}”" if nxt else "That's a wrap on Season 1!"
    B.append(dict(type="card", text=SHOW, sub=sub, dur=dur))
