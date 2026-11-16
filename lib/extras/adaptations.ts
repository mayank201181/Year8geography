import type { TopicExtras } from "../types";

export const adaptationsExtras: TopicExtras = {
  hook:
    "The fennec fox of the Sahara and the Arctic fox are close cousins, yet one has ears as long as your hand and the other has ears you can barely see. Neither is a mistake — so what does ear size have to do with staying alive?",
  didYouKnow: [
    "An Arctic fox's fur is so warm that it is thought not to start shivering until the air drops to about −70°C.",
    "The fennec fox is the world's smallest fox (about 1–1.5 kg), yet its ears can be up to 15 cm long — the biggest ears for its body size of any member of the dog family.",
    "A thirsty dromedary camel can drink over 100 litres of water in about 10 minutes, and can survive losing around 25% of its body weight in water.",
    "Polar bears are not really white: their hairs are see-through and scatter light, and the skin underneath is black, which helps absorb the Sun's heat.",
    "Inside a tightly packed emperor penguin huddle, the temperature can rise above 20°C even when it is around −20°C outside.",
  ],
  experiments: [
    {
      title: "The blubber glove",
      emoji: "🧤",
      materials: [
        "A large bowl of cold water with ice cubes",
        "4 zip-lock sandwich bags",
        "About 1 cup of solid vegetable shortening (or lard/ghee from the kitchen)",
        "A timer or phone stopwatch",
      ],
      steps: [
        "Spoon the shortening into one zip-lock bag. Turn a second bag inside out and push it into the first, so the fat is sandwiched between the two layers. Seal or tape the tops together — this is your 'blubber glove'.",
        "Put two empty bags, one inside the other, on your other hand as a 'no blubber' glove (so the only difference is the fat).",
        "Predict: how much longer will you be able to keep the blubber hand in the ice water?",
        "Put both hands in the ice water at the same time. Time how long until each hand feels too cold, and take it out straight away.",
        "Repeat with a friend or family member and compare results.",
      ],
      science:
        "Fat conducts heat much more slowly than skin and muscle, so a thick layer of blubber stops body heat leaking into freezing water. That is why seals, whales and polar bears — which swim in water near 0°C — have blubber up to about 10 cm thick, while desert animals store fat in one place (like a camel's hump) so the rest of the body can lose heat easily.",
      safety: "Take your hand out as soon as it hurts or after 2 minutes at most. Do this over a sink or tray, and wash the fat off with warm soapy water afterwards.",
    },
    {
      title: "Shade-seekers: a microclimate survey around your block",
      emoji: "🌡️",
      materials: [
        "A thermometer (a cheap digital one or a weather app with a sensor) — or just your hand to compare",
        "A notebook or phone to record results",
        "A simple map of your HDB block or school grounds",
      ],
      steps: [
        "Choose 5–6 sites: an open car park, a grass field, under a big tree, a covered walkway, the void deck, and a spot near water if there is one.",
        "Predict which will be hottest and coolest, then measure the air temperature at each site about 1 m above the ground at around 1–2 pm.",
        "Go back to the same sites at about 8 pm and measure again.",
        "Mark each reading on your map in red (hot) to blue (cool) and look for patterns.",
        "Watch for animals (birds, cats, lizards, insects) and note where they are resting in the afternoon.",
      ],
      science:
        "You will usually find that shade, trees and covered spaces are several degrees cooler than open tarmac in the afternoon. Desert animals use exactly this behavioural adaptation — resting in shade or burrows by day and coming out at night — and people in Singapore adapt too, with covered walkways, void decks and tree-lined streets. Behaviour can be as important for survival as body shape.",
      safety: "Go with an adult, stay hydrated, don't stand in strong sun for long, and keep away from roads and car parks with moving vehicles.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Two foxes, two designs",
      svg: `<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fennec fox with huge ears and a slim body beside an Arctic fox with tiny ears and a round, furry body" font-family="sans-serif"><rect width="180" height="210" fill="#fef3c7"/><rect x="180" width="180" height="210" fill="#e0f2fe"/><text x="90" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#92400e">Fennec fox (Sahara)</text><text x="270" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">Arctic fox (Arctic)</text><polygon points="92,92 80,30 108,86" fill="#fdba74" stroke="#9a3412"/><polygon points="116,86 140,32 128,96" fill="#fdba74" stroke="#9a3412"/><ellipse cx="72" cy="128" rx="40" ry="18" fill="#fdba74" stroke="#9a3412"/><circle cx="114" cy="102" r="16" fill="#fdba74" stroke="#9a3412"/><circle cx="120" cy="99" r="2" fill="#0f172a"/><rect x="44" y="140" width="6" height="26" fill="#fdba74" stroke="#9a3412"/><rect x="92" y="140" width="6" height="26" fill="#fdba74" stroke="#9a3412"/><path d="M33 124 q-20 4 -22 26" stroke="#fdba74" stroke-width="8" fill="none" stroke-linecap="round"/><text x="150" y="50" font-size="11" fill="#92400e" text-anchor="end">huge ears</text><text x="12" y="186" font-size="11" fill="#78350f">slim body, long legs</text><text x="12" y="201" font-size="11" fill="#78350f">→ high SA:V, loses heat</text><polygon points="276,88 280,76 286,86" fill="#f8fafc" stroke="#64748b"/><polygon points="290,86 296,76 300,88" fill="#f8fafc" stroke="#64748b"/><ellipse cx="256" cy="130" rx="46" ry="34" fill="#f8fafc" stroke="#64748b" stroke-width="4" stroke-dasharray="2 2"/><circle cx="288" cy="102" r="18" fill="#f8fafc" stroke="#64748b" stroke-width="4" stroke-dasharray="2 2"/><circle cx="294" cy="99" r="2" fill="#0f172a"/><rect x="230" y="160" width="9" height="10" fill="#f8fafc" stroke="#64748b"/><rect x="270" y="160" width="9" height="10" fill="#f8fafc" stroke="#64748b"/><text x="350" y="70" font-size="11" fill="#0369a1" text-anchor="end">tiny ears</text><text x="192" y="186" font-size="11" fill="#075985">round, furry, short legs</text><text x="192" y="201" font-size="11" fill="#075985">→ low SA:V, keeps heat</text></svg>`,
      caption:
        "Big, thin ears give the fennec fox lots of surface to radiate heat from; the Arctic fox's small ears, short legs and round body give it as little surface as possible, so it keeps its heat (Allen's rule, simplified).",
    },
    {
      title: "Why bigger bodies keep heat better",
      svg: `<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three cubes of side 1, 2 and 3 cm: surface area to volume ratio falls from 6 to 3 to 2 as the cube gets bigger" font-family="sans-serif"><rect x="40" y="110" width="20" height="20" fill="#fdba74" stroke="#9a3412"/><polygon points="40,110 50,100 70,100 60,110" fill="#fed7aa" stroke="#9a3412"/><polygon points="60,110 70,100 70,120 60,130" fill="#fb923c" stroke="#9a3412"/><rect x="130" y="90" width="40" height="40" fill="#fdba74" stroke="#9a3412"/><polygon points="130,90 150,70 190,70 170,90" fill="#fed7aa" stroke="#9a3412"/><polygon points="170,90 190,70 190,110 170,130" fill="#fb923c" stroke="#9a3412"/><rect x="240" y="70" width="60" height="60" fill="#93c5fd" stroke="#1e40af"/><polygon points="240,70 270,40 330,40 300,70" fill="#bfdbfe" stroke="#1e40af"/><polygon points="300,70 330,40 330,100 300,130" fill="#60a5fa" stroke="#1e40af"/><text x="55" y="150" text-anchor="middle" font-size="11" fill="#334155">1 cm cube</text><text x="55" y="165" text-anchor="middle" font-size="11" fill="#334155">SA 6 · V 1</text><text x="55" y="182" text-anchor="middle" font-size="12" font-weight="700" fill="#c2410c">SA:V = 6</text><text x="160" y="150" text-anchor="middle" font-size="11" fill="#334155">2 cm cube</text><text x="160" y="165" text-anchor="middle" font-size="11" fill="#334155">SA 24 · V 8</text><text x="160" y="182" text-anchor="middle" font-size="12" font-weight="700" fill="#c2410c">SA:V = 3</text><text x="285" y="150" text-anchor="middle" font-size="11" fill="#334155">3 cm cube</text><text x="285" y="165" text-anchor="middle" font-size="11" fill="#334155">SA 54 · V 27</text><text x="285" y="182" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">SA:V = 2</text><text x="180" y="20" text-anchor="middle" font-size="12" fill="#334155">Bigger → less surface per unit of body → keeps heat</text></svg>`,
      caption:
        "Volume (where heat is made) grows faster than surface area (where heat escapes). So larger animals lose heat more slowly for their size — one reason why many cold-climate animals are bigger than their warm-climate relatives (Bergmann's rule, simplified).",
    },
  ],
  interactives: ["adaptations:DesignASurvivor", "adaptations:EarsHeatLoss"],
};
