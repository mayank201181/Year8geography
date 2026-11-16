# Shared cast, season list and beat helpers for "Totally Raotional: Off The Map" (Season 2, Geography).
# build.py / lint_episode.py exec this file, then the episode file, in one namespace.
# Episode files set EP = dict(topic=..., title=...) and call the helpers below.

VOICES = {
    "tara":    dict(voice="af_heart", speed=1.06, lang="en-us"),
    "mum":     dict(voice="bf_emma", speed=1.08, lang="en-gb"),
    "dad":     dict(voice="bm_george", speed=1.0, lang="en-gb"),
    "centi":   dict(voice="am_fenrir", speed=0.95, lang="en-us", pitch=-2.5),
    "globo":   dict(voice="bm_lewis", speed=1.1, lang="en-gb", pitch=-1.5),
    "cashier": dict(voice="am_puck", speed=1.12, lang="en-us"),
    "teacher": dict(voice="af_sarah", speed=1.02, lang="en-us"),
    "uncle":   dict(voice="am_michael", speed=1.0, lang="en-us", pitch=-1.0),
}

SHOW = "TOTALLY RAOTIONAL"
SHOW_TAG = "OFF THE MAP"
SEASON_NUM = 2
TEACHER = "globo"   # who runs the holo-board and the pause challenges

# Season 2 running order = the Geography Lab's topic order (lib/topics/meta.ts).
# (num, topic id, short topic name, episode title)
SEASON = [
    (1, "geo-skills", "Geo Skills", "Six Figures And Still Lost"),
    (2, "population-distribution", "Where People Live", "Location, Location, Population"),
    (3, "population-growth", "Population Growth", "The J-Curve Strikes Back"),
    (4, "demography", "Demography", "Census And Sensibility"),
    (5, "population-change", "Population Change", "Push Me, Pull You"),
    (6, "population-problems", "Population Problems", "One Child, Many Opinions"),
    (7, "extreme-climates", "Extreme Climates", "Hot Desert, Cold Shoulder"),
    (8, "extreme-weather", "Extreme Weather", "Isobar None"),
    (9, "adaptations", "Adaptations", "Cactus Makes Perfect"),
    (10, "living-in-extremes", "Living In Extremes", "Base Camp Drama"),
    (11, "coastal-erosion", "Coastal Erosion", "Erosion Of Trust"),
    (12, "coastal-landforms", "Coastal Landforms", "Stack To The Future"),
    (13, "coral-reefs", "Coral Reefs", "Bleach, Please"),
    (14, "protecting-reefs", "Protecting Reefs", "Great Barrier Grief"),
    (15, "cities-megacities", "Cities & Megacities", "Concrete Jungle Fever"),
    (16, "lagos", "Lagos", "Go-Slow, Go Lagos"),
    (17, "sustainable-cities", "Sustainable Cities", "Turn On All Four Taps"),
]

CHARACTERS = set(VOICES)
SETS = {"living", "kitchen", "mall", "checkout", "classroom", "hawker", "park",
        "beach", "desert", "polar", "mountain", "megacity", "reef", "weatherdesk"}  # + confess_<character>
MOODS = {"neutral", "happy", "excited", "deadpan", "annoyed", "shock", "smug", "thinking", "worried", "sad",
         "determined", "teach", "bored", "eyeroll"}
SHOTS = {"close", "two", "wide"}
PROPS = {"phone", "tablet", "cushion", "book", "plate", "map", "dice", "calculator", "compass", "paintroller",
         "globe", "umbrella", "sunglasses", "binoculars", "bucket"}
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
def title(dur=5.5):
    num, _, _, t = _ep()
    B.append(dict(type="title", title=SHOW, tag=SHOW_TAG, sub=f"Season {SEASON_NUM} · Episode {num} · “{t}”", dur=dur))
def end_card(dur=4.0):
    num = _ep()[0]
    nxt = next((r for r in SEASON if r[0] == num + 1), None)
    sub = f"Next time: {nxt[2]} — “{nxt[3]}”" if nxt else f"That's a wrap on Season {SEASON_NUM}!"
    B.append(dict(type="card", text=f"{SHOW}: {SHOW_TAG}", sub=sub, dur=dur))
