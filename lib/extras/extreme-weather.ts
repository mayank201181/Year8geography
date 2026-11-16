import type { TopicExtras } from "../types";

export const extremeWeatherExtras: TopicExtras = {
  hook:
    "Singapore's seas are hot enough to power a monster typhoon every single year — yet in all of recorded history only one has ever formed right on our doorstep. What invisible ingredient is missing at 1°N, and how do forecasters know days in advance where a storm will strike?",
  didYouKnow: [
    "Typhoon Vamei formed on 27 December 2001 at about 1.5°N, roughly 50 km from Singapore — the closest a tropical cyclone has ever been recorded to the Equator. Scientists estimated such an event happens perhaps once every 100–400 years.",
    "Typhoon Tip (1979) holds two records: the lowest sea-level pressure ever measured, 870 hPa, and the largest size — its winds stretched across a circle about 2,200 km wide, roughly the distance from Singapore to Hong Kong.",
    "The strongest surface wind gust ever measured (outside a tornado) was 408 km/h, on Barrow Island, Australia, during Tropical Cyclone Olivia in April 1996.",
    "According to NOAA, the heat released by condensation in an average hurricane is about 200 times the electricity-generating capacity of the whole world.",
    "Singapore's wettest day on record was 2 December 1978, when 512.4 mm of rain fell at Paya Lebar — about a fifth of a normal year's rain in a single day.",
  ],
  experiments: [
    {
      title: "Two-week Singapore weather diary with home-made instruments",
      emoji: "🌦️",
      materials: [
        "A glass jar, a balloon, a rubber band, a drinking straw, tape and a card scale (home-made barometer)",
        "A straight-sided plastic bottle with the top cut off and turned upside down as a funnel, plus a ruler (rain gauge)",
        "A notebook, or the free myENV / NEA weather pages to compare with",
      ],
      steps: [
        "Stretch the cut balloon tightly over the jar, fix with the rubber band, and tape the straw flat on top so one end sticks out. Stand a card behind the straw and mark where it points.",
        "Set up the rain gauge in an open space away from roofs and trees (a corridor ledge or garden), weighed down with stones.",
        "Every day at the same two times (e.g. 7 am and 4 pm), record the straw's position, the rain in mm, the cloud cover (0–8 oktas) and the wind (calm / breezy / gusty).",
        "Look up the official Singapore air pressure for the same times and compare with your barometer.",
        "After two weeks, draw a rainfall bar chart and a pressure line graph on the same time axis.",
      ],
      science:
        "You will probably find that Singapore's pressure hardly changes — usually between about 1005 and 1013 hPa — with a small, regular daily rise and fall of 2–3 hPa (an 'atmospheric tide'), unlike the big swings of 30 hPa or more when a depression crosses the UK. Rain usually comes as afternoon thunderstorms caused by convection, not from passing fronts. That is the equatorial climate in action: hot, humid and stable, with no strong highs and lows — and no tropical cyclones.",
      safety:
        "Keep the jar barometer in the shade at a steady temperature (sunshine also makes the air inside expand). Do not go out to read the gauge during lightning — wait until 30 minutes after the last thunder.",
    },
    {
      title: "See the Coriolis effect on a spinning turntable",
      emoji: "🌀",
      materials: ["A lazy Susan or a round cake board on a pencil", "A circle of paper taped on top", "A marker pen and a ruler", "A partner"],
      steps: [
        "Keep the turntable still and draw a straight line with the ruler from the centre to the edge. It is straight.",
        "Now ask your partner to turn the turntable slowly anticlockwise (as the Earth turns, seen from above the North Pole).",
        "Draw another line from the centre to the edge, moving your pen straight along the fixed ruler at a steady speed.",
        "Look at the paper: the line is curved. Repeat with a faster spin, then spin clockwise (like the Southern Hemisphere viewed from above the South Pole).",
        "Try drawing the line very close to the centre only — does it curve much?",
      ],
      science:
        "Your pen moved in a straight line, but the paper turned underneath it, so the line curves — just as winds travelling over the spinning Earth appear to swerve. On the real Earth this Coriolis effect is strongest near the poles and zero at the Equator. Air rushing into a tropical low is deflected so it spirals — anticlockwise in the Northern Hemisphere, clockwise in the Southern. Within about 5° of the Equator the deflection is too weak, which is why storms near Singapore almost never start spinning.",
      safety: "Spin gently and keep fingers clear of the edge.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Saffir–Simpson scale",
      svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Saffir-Simpson scale: five categories of hurricane from Category 1 at 119 kilometres per hour to Category 5 at 252 kilometres per hour or more, with rough storm surge heights" font-family="sans-serif"><text x="180" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Sustained wind speed and rough storm surge</text><rect x="20" y="168" width="60" height="22" rx="3" fill="#fde68a"/><rect x="88" y="140" width="60" height="50" rx="3" fill="#fdba74"/><rect x="156" y="112" width="60" height="78" rx="3" fill="#fb923c"/><rect x="224" y="78" width="60" height="112" rx="3" fill="#ef4444"/><rect x="292" y="34" width="60" height="156" rx="3" fill="#9f1239"/><text x="50" y="183" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Cat 1</text><text x="118" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Cat 2</text><text x="186" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Cat 3</text><text x="254" y="96" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">Cat 4</text><text x="322" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">Cat 5</text><text x="254" y="112" text-anchor="middle" font-size="11" fill="#fff">surge 4–5 m</text><text x="322" y="68" text-anchor="middle" font-size="11" fill="#fff">surge 5 m+</text><text x="186" y="146" text-anchor="middle" font-size="11" fill="#0f172a">surge ~3 m</text><line x1="20" y1="192" x2="352" y2="192" stroke="#475569"/><text x="50" y="206" text-anchor="middle" font-size="11" fill="#334155">119–153</text><text x="118" y="206" text-anchor="middle" font-size="11" fill="#334155">154–177</text><text x="186" y="206" text-anchor="middle" font-size="11" fill="#334155">178–208</text><text x="254" y="206" text-anchor="middle" font-size="11" fill="#334155">209–251</text><text x="322" y="206" text-anchor="middle" font-size="11" fill="#334155">252+</text><text x="180" y="219" text-anchor="middle" font-size="11" fill="#64748b">km/h · Cat 3 and above = 'major'</text></svg>`,
      caption:
        "Each step up the scale brings far more damage, because the force of the wind grows much faster than its speed. Surge heights are only a rough guide — a funnel-shaped bay like Tacloban's can push the sea much higher.",
    },
    {
      title: "Where tropical cyclones can form",
      svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Latitude bands: tropical cyclones form over warm oceans between about 5 and 30 degrees north and south, but not within 5 degrees of the Equator; they spin anticlockwise in the north and clockwise in the south" font-family="sans-serif"><rect x="0" y="0" width="360" height="220" fill="#e0f2fe"/><rect x="0" y="30" width="360" height="62" fill="#fecaca"/><rect x="0" y="128" width="360" height="62" fill="#fecaca"/><rect x="0" y="92" width="360" height="36" fill="#bae6fd"/><line x1="0" y1="110" x2="360" y2="110" stroke="#0f172a" stroke-width="2"/><text x="6" y="106" font-size="11" font-weight="700" fill="#0f172a">Equator 0°</text><text x="6" y="27" font-size="11" fill="#334155">30°N</text><text x="6" y="89" font-size="11" fill="#334155">5°N</text><text x="6" y="140" font-size="11" fill="#334155">5°S</text><text x="6" y="203" font-size="11" fill="#334155">30°S</text><text x="200" y="124" text-anchor="middle" font-size="11" fill="#075985">Too little spin (Coriolis ≈ 0) · Singapore 1°N</text><circle cx="120" cy="104" r="4" fill="#be123c"/><text x="190" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#991b1b">Cyclone zone: sea ≥ 26.5°C</text><text x="190" y="72" text-anchor="middle" font-size="11" fill="#7f1d1d">spins anticlockwise ↺</text><text x="190" y="156" text-anchor="middle" font-size="12" font-weight="700" fill="#991b1b">Cyclone zone: sea ≥ 26.5°C</text><text x="190" y="172" text-anchor="middle" font-size="11" fill="#7f1d1d">spins clockwise ↻</text><text x="300" y="20" text-anchor="middle" font-size="11" fill="#334155">cooler seas → storms weaken</text><text x="300" y="214" text-anchor="middle" font-size="11" fill="#334155">cooler seas → storms weaken</text></svg>`,
      caption:
        "Two ingredients must overlap: warm sea (at least 26.5°C) and enough spin from the Coriolis effect. The hottest strip of ocean, right along the Equator, has the heat but not the spin.",
    },
  ],
  interactives: ["extreme-weather:CycloneBuilder", "extreme-weather:ForecastDesk"],
};
