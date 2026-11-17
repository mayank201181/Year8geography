import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Parts of the Holderness coast in Yorkshire lose about 2 metres of land to the sea every year — and around 30 villages there have vanished since Roman times. What makes some coasts melt away while others barely change in a thousand years?",
  didYouKnow: [
    "Water expands by about 9% when it freezes. Trapped in a crack, that push is strong enough to split solid rock — which is why freeze–thaw weathering is so common on cold coasts (but never happens on Singapore's shores, where it doesn't freeze).",
    "The waves breaking on a beach may have been made by a storm thousands of kilometres away. Long, regular waves called swell can cross a whole ocean before they break.",
    "Singapore has grown from about 580 km² in the 1960s to about 735 km² today, largely through land reclamation — so a lot of its coastline is human-made and protected by sea walls and rock slopes.",
    "The White Cliffs of Dover are chalk, made mostly of the tiny skeletons of plankton that settled on an ancient sea floor tens of millions of years ago. Chalk is a form of calcium carbonate, so sea water can slowly dissolve it by solution.",
    "Pebbles on a beach are rounded because of attrition: as waves roll them against each other for years, their sharp corners are knocked off.",
  ],
  activities: [
    {
      title: "Beach-in-a-tray wave tank",
      emoji: "🌊",
      materials: ["A long baking tray or plastic storage box", "Sand and a handful of small pebbles", "Water", "A flat plastic lid or ruler to make waves", "A timer (phone) and a ruler"],
      steps: [
        "Pile sand and pebbles at one end of the tray to make a sloping beach, then pour water gently into the other end until it is about 2 cm deep.",
        "Measure how high the top of your beach is and how far it reaches into the tray.",
        "Make gentle waves with the lid — about 6 a minute — for 2 minutes. Watch the swash and the backwash. Measure the beach again.",
        "Rebuild the beach. Now make big, fast waves — about 14 a minute — for 2 minutes. Measure again.",
        "Compare: which waves built the beach up, and which dragged sand back into the 'sea'? Where did the pebbles end up?",
      ],
      maths:
        "Slow, gentle waves act like constructive waves: their swash is stronger than their backwash, so sand is pushed up the beach. Fast, tall waves act like destructive waves: a strong backwash drags sand offshore and the beach gets lower. Counting waves per minute is exactly how geographers measure wave frequency on a real beach.",
    },
    {
      title: "Kitchen weathering lab",
      emoji: "🧪",
      materials: ["A small plastic bottle with a screw lid", "A zip-lock bag", "White vinegar", "A piece of blackboard chalk or a small seashell", "A glass and a spoon of salt", "A soft piece of sandstone or a brick offcut (optional)"],
      steps: [
        "Freeze–thaw: fill the plastic bottle right to the brim with water, screw the lid on, put it in the zip-lock bag and leave it in the freezer overnight. Look at the bottle in the morning.",
        "Solution: drop the chalk or shell into a glass of vinegar. Watch for bubbles and check it again after a few hours.",
        "Salt crystallisation: soak the sandstone or brick in very salty water, let it dry in the sun on the balcony, and repeat for a week. Brush the surface and look for loose grains.",
        "Write down which experiment shows mechanical weathering and which shows chemical weathering.",
      ],
      maths:
        "The bulging bottle shows mechanical weathering: water expands by about 9% as it freezes, forcing cracks in rock apart. The bubbling shell or chalk (if it is made of calcium carbonate) shows chemical weathering and solution — acids react with calcium carbonate, just as weak acids dissolve limestone and chalk cliffs. The salt test copies what sea spray does to cliffs in hot places like Singapore.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The four erosion processes",
      caption: "Hydraulic action and abrasion attack the cliff; attrition wears down the load itself; solution dissolves rocks such as chalk and limestone.",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four panels showing hydraulic action, abrasion, attrition and solution at a cliff"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="13" fill="#1f2937"><rect x="10" y="10" width="225" height="135" rx="8" fill="#f8fafc" stroke="#334155"/><text x="20" y="30" font-weight="bold">Hydraulic action</text><rect x="160" y="40" width="65" height="95" fill="#d6d3d1" stroke="#334155"/><path d="M160 85 L195 80 L200 88 L160 92 Z" fill="#ffffff" stroke="#334155"/><path d="M20 135 L20 95 Q60 70 100 95 Q130 112 160 95 L160 135 Z" fill="#bae6fd" stroke="#0369a1"/><path d="M120 88 L155 88" stroke="#1f2937" stroke-width="2"/><path d="M155 88 L147 83 L147 93 Z" fill="#1f2937"/><text x="20" y="62" font-size="11">Water and squeezed air</text><text x="20" y="76" font-size="11">force cracks apart</text><rect x="245" y="10" width="225" height="135" rx="8" fill="#f8fafc" stroke="#334155"/><text x="255" y="30" font-weight="bold">Abrasion</text><rect x="395" y="40" width="65" height="95" fill="#d6d3d1" stroke="#334155"/><path d="M255 135 L255 95 Q295 70 335 95 Q365 112 395 95 L395 135 Z" fill="#bae6fd" stroke="#0369a1"/><circle cx="350" cy="90" r="6" fill="#a8a29e" stroke="#334155"/><circle cx="370" cy="100" r="5" fill="#a8a29e" stroke="#334155"/><path d="M357 88 L390 85" stroke="#1f2937" stroke-width="2"/><path d="M390 85 L382 80 L383 90 Z" fill="#1f2937"/><text x="255" y="62" font-size="11">Waves hurl pebbles at</text><text x="255" y="76" font-size="11">the cliff: sandpaper</text><rect x="10" y="155" width="225" height="135" rx="8" fill="#f8fafc" stroke="#334155"/><text x="20" y="175" font-weight="bold">Attrition</text><rect x="20" y="185" width="205" height="95" fill="#bae6fd" stroke="#0369a1"/><path d="M60 225 L78 215 L92 230 L75 245 L58 238 Z" fill="#a8a29e" stroke="#334155"/><path d="M120 222 L138 218 L145 236 L126 244 Z" fill="#a8a29e" stroke="#334155"/><text x="97" y="235" font-size="16" fill="#b91c1c">✸</text><path d="M160 232 L175 232" stroke="#1f2937" stroke-width="2"/><path d="M175 232 L168 227 L168 237 Z" fill="#1f2937"/><circle cx="195" cy="232" r="8" fill="#a8a29e" stroke="#334155"/><text x="30" y="262" font-size="11">Rocks hit EACH OTHER and</text><text x="30" y="275" font-size="11">become smaller and rounder</text><rect x="245" y="155" width="225" height="135" rx="8" fill="#f8fafc" stroke="#334155"/><text x="255" y="175" font-weight="bold">Solution (corrosion)</text><rect x="395" y="185" width="65" height="95" fill="#e7e5e4" stroke="#334155"/><text x="400" y="235" font-size="11">chalk</text><path d="M255 280 L255 220 L395 220 L395 280 Z" fill="#bae6fd" stroke="#0369a1"/><circle cx="380" cy="240" r="2" fill="#334155"/><circle cx="370" cy="250" r="2" fill="#334155"/><circle cx="360" cy="236" r="2" fill="#334155"/><circle cx="350" cy="258" r="2" fill="#334155"/><text x="262" y="202" font-size="11">Sea water dissolves chalk</text><text x="262" y="214" font-size="11">and limestone</text></g></svg>`,
    },
    {
      title: "Constructive vs destructive waves",
      caption: "Constructive waves: low, about 6–8 a minute, swash stronger than backwash — the beach builds. Destructive waves: tall, about 10–14 a minute, backwash stronger than swash — the beach is eroded.",
      svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-sections comparing constructive waves with a long swash arrow and destructive waves with a long backwash arrow"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="12" y="22" font-size="14" font-weight="bold">Constructive</text><path d="M10 130 Q40 112 70 130 Q100 112 130 130 Q160 112 190 130 L190 140 L10 140 Z" fill="#bae6fd" stroke="#0369a1"/><path d="M150 140 L470 60 L470 140 Z" fill="#fde68a" stroke="#a16207"/><path d="M200 122 L330 90" stroke="#15803d" stroke-width="4"/><path d="M330 90 L318 88 L322 99 Z" fill="#15803d"/><text x="250" y="88" fill="#15803d" font-weight="bold">strong swash</text><path d="M290 122 L230 136" stroke="#c2410c" stroke-width="2"/><path d="M230 136 L240 130 L241 139 Z" fill="#c2410c"/><text x="268" y="134" fill="#c2410c">weak backwash</text><text x="12" y="44">Low, long wavelength, 6–8 a minute</text><text x="12" y="60">Beach builds up</text><text x="12" y="172" font-size="14" font-weight="bold">Destructive</text><path d="M10 280 Q25 230 40 280 Q55 230 70 280 Q85 230 100 280 Q115 230 130 280 Q145 230 160 280 L160 290 L10 290 Z" fill="#bae6fd" stroke="#0369a1"/><path d="M150 290 L470 220 L470 290 Z" fill="#fde68a" stroke="#a16207"/><path d="M175 272 L225 260" stroke="#15803d" stroke-width="2"/><path d="M225 260 L215 258 L218 267 Z" fill="#15803d"/><text x="180" y="252" fill="#15803d">weak swash</text><path d="M350 252 L190 288" stroke="#c2410c" stroke-width="4"/><path d="M190 288 L202 280 L204 292 Z" fill="#c2410c"/><text x="300" y="275" fill="#c2410c" font-weight="bold">strong backwash</text><text x="12" y="194">Tall, steep, short wavelength, 10–14 a minute</text><text x="12" y="210">Sand dragged offshore — beach eroded</text></g></svg>`,
    },
  ],
  history: {
    title: "Dunwich: the town the sea swallowed",
    story:
      "In the Middle Ages, Dunwich on the Suffolk coast was one of the busiest ports in England, with several churches, monasteries and a harbour full of ships. But its cliffs were made of soft sands and gravels. Great storms in the late 1200s and in 1328 smashed the coast and choked the harbour with shingle, and the trade moved elsewhere. Year after year the waves undercut the cliffs, and street after street slid onto the beach. Churches went over the edge one by one; the last tower of All Saints' Church fell in the early 1900s. Today Dunwich is a small village, and most of the medieval town lies under the sea — divers and sonar surveys have mapped its ruins on the sea bed.",
  },
};
