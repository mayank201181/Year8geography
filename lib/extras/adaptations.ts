import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "A kangaroo rat can live its whole life without ever drinking water, and an emperor penguin dad can stand on the Antarctic ice for months in winter storms without eating. How is that even possible?",
  didYouKnow: [
    "A polar bear's fur is not really white. Each hair is see-through and scatters light, and underneath the fur the bear's skin is black, which helps it absorb heat.",
    "A camel's hump stores fat, not water. A very thirsty camel can drink over 100 litres of water in one go.",
    "Male emperor penguins go without food for around four months: through courtship and then the whole Antarctic winter, while they keep the egg warm on their feet.",
    "Bar-headed geese have been tracked flying higher than 7,000 m as they migrate over the Himalaya, where each breath holds far less oxygen than at sea level.",
    "Alaskan wood frogs can survive the winter with much of their body water frozen. Their heart stops beating, then starts again when they thaw in spring.",
    "Antarctica counts as a desert. It gets so little precipitation that it is the largest desert on Earth, even though it is covered in ice.",
  ],
  activities: [
    {
      title: "The blubber glove",
      emoji: "🧤",
      materials: [
        "A large bowl of water with plenty of ice cubes",
        "4 zip-lock sandwich bags",
        "About 1 cup of solid vegetable shortening or cooking fat (vegetarian)",
        "A spoon and some tape",
        "A timer (a phone is fine)",
      ],
      steps: [
        "Fill one zip-lock bag with the vegetable fat. Push a second bag inside it and fold the top edges together. You now have a \"blubber mitten\": a layer of fat between two layers of plastic. Tape the edges.",
        "Make a control mitten: one empty bag inside another, with no fat in between.",
        "Put one hand in the blubber mitten and the other in the empty mitten.",
        "Plunge both hands into the ice water at the same time and start the timer.",
        "Note how long you can keep each hand in before it feels too cold. Swap hands and repeat to make it a fair test.",
        "Record your results in a table and compare.",
      ],
      maths: "Fat is a poor conductor of heat, so the blubber layer slows the flow of heat from your warm hand to the icy water. That is exactly why seals, whales and polar bears have thick blubber, a **structural adaptation** to the cold. Repeating with swapped hands makes your results more reliable, the way geographers test their fieldwork.",
    },
    {
      title: "Cactus or leaf? A water-loss race",
      emoji: "🌵",
      materials: [
        "3 identical kitchen sponges or thick paper towels",
        "Water",
        "Kitchen scales",
        "Cling film or a wax-paper sandwich wrapper",
        "A sunny windowsill or balcony",
      ],
      steps: [
        "Soak all three sponges, squeeze them gently so they are equally damp, and weigh each one. Write down the masses.",
        "Sponge A (\"broad leaf\"): cut or open it out flat to make as much surface as possible.",
        "Sponge B (\"cactus stem\"): roll it up tightly into a fat cylinder and hold it with a rubber band.",
        "Sponge C (\"waxy cactus\"): roll it up like B, then wrap it in cling film or wax paper, leaving one small gap.",
        "Leave all three side by side in the sun for a few hours. In Singapore's heat you will not have to wait long.",
        "Weigh them again and work out the percentage of mass lost by each one.",
      ],
      maths: "The flat sponge has the most surface area exposed, so it loses water fastest, like a broad leaf. Rolling it up reduces the surface area, like a cactus's swollen stem, and the wrapper acts like a **waxy cuticle**. This is why desert plants have spines instead of leaves, thick stems and waxy skins: all of them cut **transpiration**. Percentage change = (start − end) ÷ start × 100.",
    },
  ],
  bonusDiagrams: [
    {
      title: "How a cactus survives the desert",
      caption: "Every part of a cactus is adapted to save, store or find water.",
      svg: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Annotated cactus showing spines, waxy skin, a swollen pleated stem, wide shallow roots and a long tap root">
<rect x="0" y="0" width="440" height="300" fill="#ffffff"/>
<rect x="0" y="0" width="440" height="190" fill="#fef9c3"/>
<rect x="0" y="190" width="440" height="110" fill="#fde68a"/>
<circle cx="400" cy="35" r="20" fill="#fbbf24"/>
<path d="M200 190 L200 70 Q200 45 220 45 Q240 45 240 70 L240 190 Z" fill="#86efac" stroke="#1f2937" stroke-width="2"/>
<line x1="210" y1="60" x2="210" y2="188" stroke="#15803d" stroke-width="1.5"/>
<line x1="220" y1="50" x2="220" y2="188" stroke="#15803d" stroke-width="1.5"/>
<line x1="230" y1="60" x2="230" y2="188" stroke="#15803d" stroke-width="1.5"/>
<path d="M200 130 L175 130 Q165 130 165 120 L165 95 Q165 85 172 85 Q180 85 180 95 L180 115 L200 115 Z" fill="#86efac" stroke="#1f2937" stroke-width="2"/>
<path d="M240 120 L262 120 L262 90 Q262 80 270 80 Q278 80 278 90 L278 125 Q278 135 268 135 L240 135 Z" fill="#86efac" stroke="#1f2937" stroke-width="2"/>
<g stroke="#1f2937" stroke-width="1.2">
<line x1="200" y1="80" x2="192" y2="76"/><line x1="200" y1="100" x2="192" y2="96"/><line x1="240" y1="90" x2="248" y2="86"/><line x1="240" y1="150" x2="248" y2="146"/><line x1="200" y1="160" x2="192" y2="156"/><line x1="220" y1="45" x2="220" y2="37"/>
</g>
<path d="M200 190 Q150 200 70 205" fill="none" stroke="#78350f" stroke-width="2"/>
<path d="M240 190 Q290 200 370 205" fill="none" stroke="#78350f" stroke-width="2"/>
<path d="M205 190 Q160 210 110 222" fill="none" stroke="#78350f" stroke-width="1.5"/>
<path d="M235 190 Q280 210 330 222" fill="none" stroke="#78350f" stroke-width="1.5"/>
<path d="M220 190 L220 290" fill="none" stroke="#78350f" stroke-width="3"/>
<g font-family="sans-serif" font-size="12" fill="#1f2937">
<text x="12" y="60">Spines = leaves with tiny</text>
<text x="12" y="75">surface area: less water lost,</text>
<text x="12" y="90">shade, keep animals away</text>
<line x1="150" y1="72" x2="190" y2="76" stroke="#334155"/>
<text x="290" y="60">Waxy cuticle seals</text>
<text x="290" y="75">in water</text>
<line x1="288" y1="65" x2="242" y2="70" stroke="#334155"/>
<text x="290" y="160">Swollen, pleated stem</text>
<text x="290" y="175">stores water and expands</text>
<line x1="288" y1="160" x2="242" y2="160" stroke="#334155"/>
<text x="12" y="250">Wide, shallow roots soak</text>
<text x="12" y="265">up rain quickly</text>
<line x1="80" y1="242" x2="100" y2="210" stroke="#334155"/>
<text x="235" y="270">Long tap root reaches</text>
<text x="235" y="285">deep groundwater</text>
</g>
</svg>`,
    },
    {
      title: "Bigger body, smaller surface area to volume ratio",
      caption: "Three cube-shaped model animals. Each time the side doubles, surface area grows 4 times and volume 8 times, so SA : V halves. Large bodies keep heat in better.",
      svg: `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three cubes with sides 1, 2 and 4 centimetres and their surface area to volume ratios of 6, 3 and 1.5">
<rect x="0" y="0" width="460" height="260" fill="#ffffff"/>
<line x1="20" y1="190" x2="440" y2="190" stroke="#334155" stroke-width="1.5"/>
<rect x="55" y="170" width="20" height="20" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/>
<rect x="160" y="150" width="40" height="40" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/>
<rect x="300" y="110" width="80" height="80" fill="#bae6fd" stroke="#1f2937" stroke-width="1.5"/>
<g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">
<text x="65" y="160">1 cm</text>
<text x="180" y="140">2 cm</text>
<text x="340" y="100">4 cm</text>
<text x="65" y="210">SA = 6 cm²</text>
<text x="65" y="226">V = 1 cm³</text>
<text x="65" y="246" font-weight="bold">SA : V = 6</text>
<text x="180" y="210">SA = 24 cm²</text>
<text x="180" y="226">V = 8 cm³</text>
<text x="180" y="246" font-weight="bold">SA : V = 3</text>
<text x="340" y="210">SA = 96 cm²</text>
<text x="340" y="226">V = 64 cm³</text>
<text x="340" y="246" font-weight="bold">SA : V = 1.5</text>
<text x="230" y="30" font-size="14" font-weight="bold">Small body = loses heat fast · Big body = keeps heat in</text>
</g>
</svg>`,
    },
  ],
  history: {
    title: "The scientist who helped climbers breathe on Everest",
    story: "In the early 1950s, British climbers kept failing to reach the summit of Everest, and nobody fully understood why the thin air was so punishing. A physiologist named Griffith Pugh joined a training expedition to Cho Oyu in 1952 and studied the climbers like a laboratory. He found they were badly dehydrated and recommended drinking several litres of water a day. He also called for better oxygen sets, warmer clothing and tents, and time to acclimatise slowly. The 1953 expedition followed his advice. On 29 May 1953, Edmund Hillary and the Sherpa climber Tenzing Norgay became the first people known to stand on the summit. Tenzing had grown up in the high Himalaya, and his body was already adapted to thin air in ways scientists are still studying today.",
  },
};
