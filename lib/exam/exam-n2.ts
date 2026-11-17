// Big Exam — Paper 3: Geographical Skills & Resources (cross-topic, calculator).
// All resources are drawn from the data stated in the questions (fictional places are labelled as such).
import type { ExamPaper } from "../types.ts";

const MAP = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OS-style map extract at 1:50 000 with eastings 41 to 45 and northings 72 to 75, showing a wood, a village with a church, a river with a bridge, roads, a car park, a campsite, a beach in a bay, a headland with a lighthouse and a stack offshore"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="30" y="15" width="320" height="240" fill="#bbf7d0"/><polygon points="295,15 290,60 292,100 298,118 322,120 342,128 347,143 341,160 320,168 298,172 268,182 256,205 252,232 256,255 350,255 350,15" fill="#bae6fd"/><polygon points="268,182 256,205 252,232 256,255 240,255 236,232 240,205 252,184" fill="#fde68a"/><rect x="34" y="19" width="72" height="72" fill="#86efac" stroke="#15803d" stroke-width="1"/><circle cx="46" cy="32" r="4" fill="#15803d"/><circle cx="64" cy="30" r="4" fill="#15803d"/><circle cx="84" cy="34" r="4" fill="#15803d"/><circle cx="98" cy="46" r="4" fill="#15803d"/><circle cx="50" cy="52" r="4" fill="#15803d"/><circle cx="72" cy="50" r="4" fill="#15803d"/><circle cx="90" cy="64" r="4" fill="#15803d"/><circle cx="46" cy="74" r="4" fill="#15803d"/><circle cx="66" cy="72" r="4" fill="#15803d"/><circle cx="84" cy="82" r="4" fill="#15803d"/><rect x="118" y="102" width="66" height="68" fill="#e5e7eb" stroke="#64748b" stroke-width="1"/><rect x="124" y="108" width="9" height="7" fill="#94a3b8"/><rect x="138" y="110" width="9" height="7" fill="#94a3b8"/><rect x="164" y="108" width="9" height="7" fill="#94a3b8"/><rect x="126" y="124" width="9" height="7" fill="#94a3b8"/><rect x="168" y="124" width="9" height="7" fill="#94a3b8"/><rect x="124" y="154" width="9" height="7" fill="#94a3b8"/><rect x="140" y="156" width="9" height="7" fill="#94a3b8"/><rect x="166" y="152" width="9" height="7" fill="#94a3b8"/><polyline points="30,215 80,205 120,224 150,231 190,236 230,236 252,236" fill="none" stroke="#2563eb" stroke-width="3"/><polyline points="150,255 150,170" fill="none" stroke="#dc2626" stroke-width="3"/><polyline points="184,143 230,150 280,144 315,139" fill="none" stroke="#dc2626" stroke-width="3"/><polyline points="184,112 244,57" fill="none" stroke="#dc2626" stroke-width="3"/><path d="M143,225 L146,228 L146,234 L143,237 M157,225 L154,228 L154,234 L157,237" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="154" cy="139" r="3.5" fill="#1f2937"/><path d="M154,128 V136 M151,131 H157" stroke="#1f2937" stroke-width="1.5"/><polygon points="322,132.5 323.76,137.07 328.66,137.34 324.85,140.43 326.11,145.16 322,142.5 317.89,145.16 319.15,140.43 315.34,137.34 320.24,137.07" fill="#1f2937"/><polygon points="220,208 232,208 226,197" fill="#1d4ed8"/><rect x="244" y="45" width="12" height="12" fill="#1d4ed8"/><text x="250" y="55" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#ffffff">P</text><polygon points="333.5,110.5 335.5,103.5 340.5,103.5 342.5,110.5" fill="#78716c" stroke="#1f2937" stroke-width="1"/><line x1="30" y1="15" x2="30" y2="255" stroke="#1e40af" stroke-width="1"/><text x="30" y="270" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">41</text><line x1="110" y1="15" x2="110" y2="255" stroke="#1e40af" stroke-width="1"/><text x="110" y="270" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">42</text><line x1="190" y1="15" x2="190" y2="255" stroke="#1e40af" stroke-width="1"/><text x="190" y="270" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">43</text><line x1="270" y1="15" x2="270" y2="255" stroke="#1e40af" stroke-width="1"/><text x="270" y="270" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">44</text><line x1="350" y1="15" x2="350" y2="255" stroke="#1e40af" stroke-width="1"/><text x="350" y="270" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">45</text><line x1="30" y1="255" x2="350" y2="255" stroke="#1e40af" stroke-width="1"/><text x="22" y="259" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">72</text><line x1="30" y1="175" x2="350" y2="175" stroke="#1e40af" stroke-width="1"/><text x="22" y="179" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">73</text><line x1="30" y1="95" x2="350" y2="95" stroke="#1e40af" stroke-width="1"/><text x="22" y="99" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">74</text><line x1="30" y1="15" x2="350" y2="15" stroke="#1e40af" stroke-width="1"/><text x="22" y="19" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">75</text><text x="190" y="292" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Scale 1:50 000 — each grid square is 1 km × 1 km</text><text x="190" y="308" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">Eastings run along the bottom; northings up the side</text><text x="366" y="24" font-size="12" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">Key</text><circle cx="370" cy="45" r="3.5" fill="#1f2937"/><path d="M370,34 V42 M367,37 H373" stroke="#1f2937" stroke-width="1.5"/><text x="386" y="46" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Church</text><polygon points="370,55 371.76,59.57 376.66,59.84 372.85,62.93 374.11,67.66 370,65 365.89,67.66 367.15,62.93 363.34,59.84 368.24,59.57" fill="#1f2937"/><text x="386" y="66" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Lighthouse</text><polygon points="364,87 376,87 370,76" fill="#1d4ed8"/><text x="386" y="86" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Campsite</text><rect x="364" y="96" width="12" height="12" fill="#1d4ed8"/><text x="370" y="106" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#ffffff">P</text><text x="386" y="106" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Car park</text><path d="M363,116 L366,119 L366,125 L363,128 M377,116 L374,119 L374,125 L377,128" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="386" y="126" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Bridge</text><polygon points="366,145 368,138 373,138 375,145" fill="#78716c" stroke="#1f2937" stroke-width="1"/><text x="386" y="146" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Stack</text><rect x="363" y="156" width="14" height="12" fill="#86efac" stroke="#15803d"/><text x="386" y="166" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Wood</text><rect x="363" y="176" width="14" height="12" fill="#e5e7eb" stroke="#64748b"/><text x="386" y="186" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Built-up area</text><rect x="363" y="196" width="14" height="12" fill="#fde68a"/><text x="386" y="206" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Beach</text><rect x="363" y="216" width="14" height="12" fill="#bae6fd"/><text x="386" y="226" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Sea</text><line x1="362" y1="242" x2="378" y2="242" stroke="#2563eb" stroke-width="3"/><text x="386" y="246" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">River</text><line x1="362" y1="262" x2="378" y2="262" stroke="#dc2626" stroke-width="3"/><text x="386" y="266" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Road</text><path d="M440,300 L440,272 M433,281 L440,270 L447,281" fill="none" stroke="#1f2937" stroke-width="2"/><text x="440" y="266" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">N</text></svg>`;

const CLIMATE = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for Station D: temperature line from 13 °C in January to 34 °C in July, and rainfall bars of 8, 5, 4, 2, 1, 0, 0, 0, 0, 2, 4 and 7 mm"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="18" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Climate graph for Station D</text><line x1="60" y1="250" x2="420" y2="250" stroke="#e2e8f0" stroke-width="1"/><text x="54" y="254" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">0</text><text x="426" y="254" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">0</text><line x1="60" y1="222.5" x2="420" y2="222.5" stroke="#e2e8f0" stroke-width="1"/><text x="54" y="226.5" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">2</text><text x="426" y="226.5" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">5</text><line x1="60" y1="195" x2="420" y2="195" stroke="#e2e8f0" stroke-width="1"/><text x="54" y="199" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">4</text><text x="426" y="199" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">10</text><line x1="60" y1="167.5" x2="420" y2="167.5" stroke="#e2e8f0" stroke-width="1"/><text x="54" y="171.5" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">6</text><text x="426" y="171.5" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">15</text><line x1="60" y1="140" x2="420" y2="140" stroke="#e2e8f0" stroke-width="1"/><text x="54" y="144" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">8</text><text x="426" y="144" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">20</text><line x1="60" y1="112.5" x2="420" y2="112.5" stroke="#e2e8f0" stroke-width="1"/><text x="54" y="116.5" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">10</text><text x="426" y="116.5" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">25</text><line x1="60" y1="85" x2="420" y2="85" stroke="#e2e8f0" stroke-width="1"/><text x="54" y="89" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">12</text><text x="426" y="89" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">30</text><line x1="60" y1="57.5" x2="420" y2="57.5" stroke="#e2e8f0" stroke-width="1"/><text x="54" y="61.5" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">14</text><text x="426" y="61.5" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">35</text><line x1="60" y1="30" x2="420" y2="30" stroke="#e2e8f0" stroke-width="1"/><text x="54" y="34" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">16</text><text x="426" y="34" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">40</text><rect x="65" y="140" width="20" height="110" fill="#3b82f6"/><text x="75" y="136" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">8</text><text x="75" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="95" y="181.25" width="20" height="68.75" fill="#3b82f6"/><text x="105" y="177.25" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">5</text><text x="105" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">F</text><rect x="125" y="195" width="20" height="55" fill="#3b82f6"/><text x="135" y="191" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">4</text><text x="135" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><rect x="155" y="222.5" width="20" height="27.5" fill="#3b82f6"/><text x="165" y="218.5" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">2</text><text x="165" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><rect x="185" y="236.25" width="20" height="13.75" fill="#3b82f6"/><text x="195" y="232.25" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">1</text><text x="195" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><text x="225" y="246" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">0</text><text x="225" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><text x="255" y="246" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">0</text><text x="255" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><text x="285" y="246" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">0</text><text x="285" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="315" y="246" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">0</text><text x="315" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">S</text><rect x="335" y="222.5" width="20" height="27.5" fill="#3b82f6"/><text x="345" y="218.5" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">2</text><text x="345" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">O</text><rect x="365" y="195" width="20" height="55" fill="#3b82f6"/><text x="375" y="191" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">4</text><text x="375" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">N</text><rect x="395" y="153.75" width="20" height="96.25" fill="#3b82f6"/><text x="405" y="149.75" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#1e3a8a">7</text><text x="405" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><polyline points="75,178.5 105,167.5 135,145.5 165,118 195,96 225,74 255,63 285,68.5 315,85 345,112.5 375,145.5 405,173" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="75" cy="178.5" r="2.5" fill="#dc2626"/><circle cx="105" cy="167.5" r="2.5" fill="#dc2626"/><circle cx="135" cy="145.5" r="2.5" fill="#dc2626"/><circle cx="165" cy="118" r="2.5" fill="#dc2626"/><circle cx="195" cy="96" r="2.5" fill="#dc2626"/><circle cx="225" cy="74" r="2.5" fill="#dc2626"/><circle cx="255" cy="63" r="2.5" fill="#dc2626"/><circle cx="285" cy="68.5" r="2.5" fill="#dc2626"/><circle cx="315" cy="85" r="2.5" fill="#dc2626"/><circle cx="345" cy="112.5" r="2.5" fill="#dc2626"/><circle cx="375" cy="145.5" r="2.5" fill="#dc2626"/><circle cx="405" cy="173" r="2.5" fill="#dc2626"/><line x1="60" y1="30" x2="60" y2="250" stroke="#334155"/><line x1="420" y1="30" x2="420" y2="250" stroke="#334155"/><line x1="60" y1="250" x2="420" y2="250" stroke="#334155"/><text x="20" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="rotate(-90 20 140)">Rainfall (mm)</text><text x="462" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="rotate(90 462 140)">Temperature (°C)</text><rect x="120" y="280" width="14" height="10" fill="#3b82f6"/><text x="140" y="289" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">Rainfall (mm), value above each bar</text><line x1="320" y1="285" x2="340" y2="285" stroke="#dc2626" stroke-width="2.5"/><text x="345" y="289" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">Temperature (°C)</text></svg>`;

const RETREAT = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of distance from a farmhouse to the cliff edge: 120 m in 1990, 101 m in 2000, 83 m in 2010 and 62 m in 2020"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="250" y="18" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Distance from the farmhouse to the cliff edge</text><line x1="70" y1="250" x2="430" y2="250" stroke="#e2e8f0"/><text x="64" y="254" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">0</text><line x1="70" y1="218.57" x2="430" y2="218.57" stroke="#e2e8f0"/><text x="64" y="222.57" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">20</text><line x1="70" y1="187.14" x2="430" y2="187.14" stroke="#e2e8f0"/><text x="64" y="191.14" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">40</text><line x1="70" y1="155.71" x2="430" y2="155.71" stroke="#e2e8f0"/><text x="64" y="159.71" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">60</text><line x1="70" y1="124.29" x2="430" y2="124.29" stroke="#e2e8f0"/><text x="64" y="128.29" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">80</text><line x1="70" y1="92.86" x2="430" y2="92.86" stroke="#e2e8f0"/><text x="64" y="96.86" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">100</text><line x1="70" y1="61.43" x2="430" y2="61.43" stroke="#e2e8f0"/><text x="64" y="65.43" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">120</text><line x1="70" y1="30" x2="430" y2="30" stroke="#e2e8f0"/><text x="64" y="34" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">140</text><line x1="70" y1="250" x2="70" y2="255" stroke="#334155"/><text x="70" y="268" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1990</text><line x1="130" y1="250" x2="130" y2="255" stroke="#334155"/><text x="130" y="268" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1995</text><line x1="190" y1="250" x2="190" y2="255" stroke="#334155"/><text x="190" y="268" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2000</text><line x1="250" y1="250" x2="250" y2="255" stroke="#334155"/><text x="250" y="268" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2005</text><line x1="310" y1="250" x2="310" y2="255" stroke="#334155"/><text x="310" y="268" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2010</text><line x1="370" y1="250" x2="370" y2="255" stroke="#334155"/><text x="370" y="268" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2015</text><line x1="430" y1="250" x2="430" y2="255" stroke="#334155"/><text x="430" y="268" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2020</text><line x1="70" y1="30" x2="70" y2="250" stroke="#334155"/><line x1="70" y1="250" x2="430" y2="250" stroke="#334155"/><polyline points="70,61.43 190,91.29 310,119.57 430,152.57" fill="none" stroke="#b45309" stroke-width="2.5"/><circle cx="70" cy="61.43" r="4" fill="#b45309"/><text x="84" y="52.43" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#78350f">120 m</text><circle cx="190" cy="91.29" r="4" fill="#b45309"/><text x="190" y="82.29" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#78350f">101 m</text><circle cx="310" cy="119.57" r="4" fill="#b45309"/><text x="310" y="110.57" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#78350f">83 m</text><circle cx="430" cy="152.57" r="4" fill="#b45309"/><text x="418" y="143.57" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#78350f">62 m</text><text x="18" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="rotate(-90 18 140)">Distance (m)</text><text x="250" y="290" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Year</text></svg>`;

const STORM = `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Latitude and longitude grid from 5 to 25 degrees north and 120 to 145 degrees east showing a storm centre at 10°N 140°E on Day 1, 15°N 134°E on Day 3 and 20°N 128°E on Day 5; land is not shown"><rect x="0" y="0" width="480" height="290" fill="#ffffff"/><text x="240" y="18" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Track of a tropical storm (western Pacific Ocean)</text><rect x="60" y="30" width="275" height="220" fill="#bae6fd"/><line x1="60" y1="30" x2="60" y2="250" stroke="#64748b" stroke-width="1"/><text x="60" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">120°E</text><line x1="115" y1="30" x2="115" y2="250" stroke="#64748b" stroke-width="1"/><text x="115" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">125°E</text><line x1="170" y1="30" x2="170" y2="250" stroke="#64748b" stroke-width="1"/><text x="170" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">130°E</text><line x1="225" y1="30" x2="225" y2="250" stroke="#64748b" stroke-width="1"/><text x="225" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">135°E</text><line x1="280" y1="30" x2="280" y2="250" stroke="#64748b" stroke-width="1"/><text x="280" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">140°E</text><line x1="335" y1="30" x2="335" y2="250" stroke="#64748b" stroke-width="1"/><text x="335" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">145°E</text><line x1="60" y1="250" x2="335" y2="250" stroke="#64748b" stroke-width="1"/><text x="54" y="254" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">5°N</text><line x1="60" y1="195" x2="335" y2="195" stroke="#64748b" stroke-width="1"/><text x="54" y="199" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">10°N</text><line x1="60" y1="140" x2="335" y2="140" stroke="#64748b" stroke-width="1"/><text x="54" y="144" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">15°N</text><line x1="60" y1="85" x2="335" y2="85" stroke="#64748b" stroke-width="1"/><text x="54" y="89" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">20°N</text><line x1="60" y1="30" x2="335" y2="30" stroke="#64748b" stroke-width="1"/><text x="54" y="34" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">25°N</text><polyline points="280,195 214,140 148,85" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/><circle cx="280" cy="195" r="6" fill="#dc2626" stroke="#7f1d1d" stroke-width="1.5"/><text x="289" y="187" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">Day 1</text><circle cx="214" cy="140" r="6" fill="#dc2626" stroke="#7f1d1d" stroke-width="1.5"/><text x="223" y="132" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">Day 3</text><circle cx="148" cy="85" r="6" fill="#dc2626" stroke="#7f1d1d" stroke-width="1.5"/><text x="157" y="77" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">Day 5</text><text x="197" y="284" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Longitude</text><text x="16" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="rotate(-90 16 140)">Latitude</text><circle cx="358" cy="60" r="6" fill="#dc2626" stroke="#7f1d1d" stroke-width="1.5"/><text x="370" y="64" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Storm centre</text><text x="352" y="84" font-size="10" text-anchor="start" font-family="sans-serif" fill="#334155">(position at noon)</text><line x1="350" y1="104" x2="368" y2="104" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/><text x="372" y="108" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Track</text><text x="352" y="132" font-size="10" text-anchor="start" font-family="sans-serif" fill="#334155">Grid lines every 5°</text><text x="352" y="150" font-size="10" text-anchor="start" font-family="sans-serif" fill="#334155">Land not shown</text><path d="M420,230 L420,190 M412,201 L420,188 L428,201" fill="none" stroke="#1f2937" stroke-width="2"/><text x="420" y="182" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">N</text></svg>`;

const GROYNE = `<svg viewBox="0 0 480 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of a south-facing beach running west to east with three groynes; the prevailing wind blows from the south-east towards the north-west"><rect x="0" y="0" width="480" height="285" fill="#ffffff"/><rect x="0" y="0" width="480" height="90" fill="#bbf7d0"/><text x="240" y="40" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Land (cliffs and promenade)</text><rect x="0" y="90" width="480" height="65" fill="#fde68a"/><text x="60" y="128" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Beach</text><rect x="0" y="155" width="480" height="125" fill="#bae6fd"/><text x="60" y="250" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Sea</text><rect x="136" y="92" width="8" height="98" fill="#92400e"/><rect x="256" y="92" width="8" height="98" fill="#92400e"/><rect x="376" y="92" width="8" height="98" fill="#92400e"/><text x="260" y="206" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Groynes (wooden barriers)</text><line x1="430" y1="262" x2="355" y2="200" stroke="#1f2937" stroke-width="3"/><polygon points="355,200 368,203 360,212" fill="#1f2937"/><text x="420" y="278" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Prevailing wind</text><path d="M440,82 L440,34 M432,46 L440,32 L448,46" fill="none" stroke="#1f2937" stroke-width="2"/><text x="440" y="24" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">N</text><text x="14" y="172" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">W</text><text x="466" y="172" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">E</text></svg>`;

const CHORO = `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Choropleth map of the island of Kestra with six districts A to F shaded by population density: A under 100, B and D 100 to 499, C and F 500 to 999, E 1,000 and over people per km²"><rect x="0" y="0" width="480" height="280" fill="#ffffff"/><rect x="0" y="0" width="480" height="280" fill="#bae6fd"/><polygon points="130,140 130,38 95,32 60,45 38,75 34,110 40,140" fill="#fef9c3" stroke="#1f2937" stroke-width="1.5"/><text x="85" y="95" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">A</text><polygon points="130,140 130,38 165,28 200,30 230,36 230,140" fill="#fcd34d" stroke="#1f2937" stroke-width="1.5"/><text x="180" y="90" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">B</text><polygon points="230,140 230,36 265,40 300,55 322,90 326,120 318,140" fill="#f59e0b" stroke="#1f2937" stroke-width="1.5"/><text x="275" y="95" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">C</text><polygon points="40,140 36,175 48,210 80,238 130,246 130,140" fill="#fcd34d" stroke="#1f2937" stroke-width="1.5"/><text x="85" y="190" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">D</text><polygon points="130,140 130,246 175,252 230,248 230,140" fill="#9a3412" stroke="#1f2937" stroke-width="1.5"/><text x="180" y="195" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#ffffff" font-weight="bold">E</text><polygon points="230,140 318,140 312,165 296,182 305,200 290,220 262,240 230,248" fill="#f59e0b" stroke="#1f2937" stroke-width="1.5"/><text x="262" y="190" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">F</text><text x="180" y="272" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Island of Kestra (districts not drawn to scale)</text><text x="345" y="30" font-size="12" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">Population density</text><text x="345" y="46" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">(people per km²)</text><rect x="345" y="62" width="22" height="18" fill="#fef9c3" stroke="#1f2937"/><text x="374" y="75" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">Under 100</text><rect x="345" y="88" width="22" height="18" fill="#fcd34d" stroke="#1f2937"/><text x="374" y="101" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">100–499</text><rect x="345" y="114" width="22" height="18" fill="#f59e0b" stroke="#1f2937"/><text x="374" y="127" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">500–999</text><rect x="345" y="140" width="22" height="18" fill="#9a3412" stroke="#1f2937"/><text x="374" y="153" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">1,000 and over</text><path d="M410,230 L410,185 M402,197 L410,183 L418,197" fill="none" stroke="#1f2937" stroke-width="2"/><text x="410" y="177" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">N</text></svg>`;

const SCATTER = `<svg viewBox="0 0 480 295" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatter graph of female literacy against total fertility rate for countries P to W: P 30 percent and 6.5, Q 45 and 5.5, R 55 and 4.8, S 65 and 4.0, T 75 and 3.0, U 85 and 2.2, V 95 and 1.6, W 90 and 4.5"><rect x="0" y="0" width="480" height="295" fill="#ffffff"/><text x="240" y="18" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Female literacy and fertility in eight countries</text><line x1="60" y1="40" x2="60" y2="250" stroke="#e2e8f0"/><text x="60" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0</text><line x1="96" y1="40" x2="96" y2="250" stroke="#e2e8f0"/><text x="96" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10</text><line x1="132" y1="40" x2="132" y2="250" stroke="#e2e8f0"/><text x="132" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">20</text><line x1="168" y1="40" x2="168" y2="250" stroke="#e2e8f0"/><text x="168" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">30</text><line x1="204" y1="40" x2="204" y2="250" stroke="#e2e8f0"/><text x="204" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">40</text><line x1="240" y1="40" x2="240" y2="250" stroke="#e2e8f0"/><text x="240" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">50</text><line x1="276" y1="40" x2="276" y2="250" stroke="#e2e8f0"/><text x="276" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">60</text><line x1="312" y1="40" x2="312" y2="250" stroke="#e2e8f0"/><text x="312" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">70</text><line x1="348" y1="40" x2="348" y2="250" stroke="#e2e8f0"/><text x="348" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">80</text><line x1="384" y1="40" x2="384" y2="250" stroke="#e2e8f0"/><text x="384" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">90</text><line x1="420" y1="40" x2="420" y2="250" stroke="#e2e8f0"/><text x="420" y="266" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">100</text><line x1="60" y1="250" x2="420" y2="250" stroke="#e2e8f0"/><text x="54" y="254" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">0</text><line x1="60" y1="220" x2="420" y2="220" stroke="#e2e8f0"/><text x="54" y="224" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">1</text><line x1="60" y1="190" x2="420" y2="190" stroke="#e2e8f0"/><text x="54" y="194" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">2</text><line x1="60" y1="160" x2="420" y2="160" stroke="#e2e8f0"/><text x="54" y="164" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">3</text><line x1="60" y1="130" x2="420" y2="130" stroke="#e2e8f0"/><text x="54" y="134" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">4</text><line x1="60" y1="100" x2="420" y2="100" stroke="#e2e8f0"/><text x="54" y="104" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">5</text><line x1="60" y1="70" x2="420" y2="70" stroke="#e2e8f0"/><text x="54" y="74" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">6</text><line x1="60" y1="40" x2="420" y2="40" stroke="#e2e8f0"/><text x="54" y="44" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">7</text><line x1="60" y1="40" x2="60" y2="250" stroke="#334155"/><line x1="60" y1="250" x2="420" y2="250" stroke="#334155"/><circle cx="168" cy="55" r="4.5" fill="#7c3aed"/><text x="176" y="49" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">P</text><circle cx="222" cy="85" r="4.5" fill="#7c3aed"/><text x="230" y="79" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">Q</text><circle cx="258" cy="106" r="4.5" fill="#7c3aed"/><text x="266" y="100" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">R</text><circle cx="294" cy="130" r="4.5" fill="#7c3aed"/><text x="302" y="124" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">S</text><circle cx="330" cy="160" r="4.5" fill="#7c3aed"/><text x="338" y="154" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">T</text><circle cx="366" cy="184" r="4.5" fill="#7c3aed"/><text x="374" y="178" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">U</text><circle cx="402" cy="202" r="4.5" fill="#7c3aed"/><text x="410" y="196" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">V</text><circle cx="384" cy="115" r="4.5" fill="#7c3aed"/><text x="392" y="109" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">W</text><text x="240" y="284" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Women aged 15+ who can read and write (%)</text><text x="18" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="rotate(-90 18 145)">Total fertility rate (children per woman)</text></svg>`;

const PYRAMIDS = `<svg viewBox="0 0 480 308" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two population pyramids with 10-year age groups. Country A has a wide base, 15 percent males and 15 percent females aged 0 to 9, narrowing to 1 percent each aged 70 and over. Country B has a narrow base of 4 percent each aged 0 to 9 and 7 percent males and 9 percent females aged 70 and over"><rect x="0" y="0" width="480" height="308" fill="#ffffff"/><text x="120" y="24" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Country A</text><text x="360" y="24" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Country B</text><line x1="30" y1="36" x2="30" y2="250" stroke="#e2e8f0"/><text x="30" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">15</text><line x1="60" y1="36" x2="60" y2="250" stroke="#e2e8f0"/><text x="60" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10</text><line x1="90" y1="36" x2="90" y2="250" stroke="#e2e8f0"/><text x="90" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text><line x1="120" y1="36" x2="120" y2="250" stroke="#e2e8f0"/><text x="120" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0</text><line x1="150" y1="36" x2="150" y2="250" stroke="#e2e8f0"/><text x="150" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text><line x1="180" y1="36" x2="180" y2="250" stroke="#e2e8f0"/><text x="180" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10</text><line x1="210" y1="36" x2="210" y2="250" stroke="#e2e8f0"/><text x="210" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">15</text><rect x="114" y="40" width="6" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="120" y="40" width="6" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="108" y="66" width="12" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="120" y="66" width="12" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="102" y="92" width="18" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="120" y="92" width="18" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="96" y="118" width="24" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="120" y="118" width="24" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="84" y="144" width="36" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="120" y="144" width="36" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="72" y="170" width="48" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="120" y="170" width="48" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="54" y="196" width="66" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="120" y="196" width="66" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="30" y="222" width="90" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="120" y="222" width="90" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><line x1="30" y1="250" x2="210" y2="250" stroke="#334155"/><line x1="120" y1="36" x2="120" y2="250" stroke="#334155"/><text x="75" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Males</text><text x="165" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Females</text><line x1="270" y1="36" x2="270" y2="250" stroke="#e2e8f0"/><text x="270" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">15</text><line x1="300" y1="36" x2="300" y2="250" stroke="#e2e8f0"/><text x="300" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10</text><line x1="330" y1="36" x2="330" y2="250" stroke="#e2e8f0"/><text x="330" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text><line x1="360" y1="36" x2="360" y2="250" stroke="#e2e8f0"/><text x="360" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0</text><line x1="390" y1="36" x2="390" y2="250" stroke="#e2e8f0"/><text x="390" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text><line x1="420" y1="36" x2="420" y2="250" stroke="#e2e8f0"/><text x="420" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10</text><line x1="450" y1="36" x2="450" y2="250" stroke="#e2e8f0"/><text x="450" y="264" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">15</text><rect x="318" y="40" width="42" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="360" y="40" width="54" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="318" y="66" width="42" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="360" y="66" width="42" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="312" y="92" width="48" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="360" y="92" width="48" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="318" y="118" width="42" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="360" y="118" width="42" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="324" y="144" width="36" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="360" y="144" width="36" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="330" y="170" width="30" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="360" y="170" width="30" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="330" y="196" width="30" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="360" y="196" width="30" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><rect x="336" y="222" width="24" height="24" fill="#93c5fd" stroke="#1e3a8a" stroke-width="0.8"/><rect x="360" y="222" width="24" height="24" fill="#fca5a5" stroke="#7f1d1d" stroke-width="0.8"/><line x1="270" y1="250" x2="450" y2="250" stroke="#334155"/><line x1="360" y1="36" x2="360" y2="250" stroke="#334155"/><text x="315" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Males</text><text x="405" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Females</text><text x="240" y="56" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">70+</text><text x="240" y="82" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">60–69</text><text x="240" y="108" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">50–59</text><text x="240" y="134" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">40–49</text><text x="240" y="160" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">30–39</text><text x="240" y="186" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">20–29</text><text x="240" y="212" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">10–19</text><text x="240" y="238" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">0–9</text><text x="240" y="22" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Age</text><text x="240" y="300" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">% of total population (each bar = one sex in one age group)</text></svg>`;

const CIRCLES = `<svg viewBox="0 0 480 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Proportional symbol map of fictional Country Z with circles for cities J, K and M; a key circle of radius 15 represents 5 million people; circle K has radius 30"><rect x="0" y="0" width="480" height="275" fill="#ffffff"/><rect x="0" y="0" width="480" height="275" fill="#bae6fd"/><polygon points="40,40 120,22 210,30 290,60 320,120 300,200 250,248 160,252 80,236 36,180 28,110" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5"/><circle cx="95" cy="85" r="15" fill="#c7d2fe" stroke="#312e81" stroke-width="1.5" fill-opacity="0.85"/><text x="95" y="90" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">J</text><circle cx="215" cy="150" r="30" fill="#c7d2fe" stroke="#312e81" stroke-width="1.5" fill-opacity="0.85"/><text x="215" y="155" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">K</text><circle cx="120" cy="205" r="10.61" fill="#c7d2fe" stroke="#312e81" stroke-width="1.5" fill-opacity="0.85"/><text x="120" y="210" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">M</text><text x="175" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Country Z (fictional) — largest cities</text><text x="340" y="30" font-size="12" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold">Key</text><circle cx="370" cy="70" r="15" fill="#c7d2fe" stroke="#312e81" stroke-width="1.5"/><text x="392" y="74" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937">5 million people</text><text x="338" y="110" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">The AREA of each circle is</text><text x="338" y="125" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">proportional to the city's</text><text x="338" y="140" font-size="10" text-anchor="start" font-family="sans-serif" fill="#1f2937">population.</text><text x="340" y="166" font-size="10" text-anchor="start" font-family="sans-serif" fill="#334155">Radius of key circle: 15 units</text><text x="340" y="181" font-size="10" text-anchor="start" font-family="sans-serif" fill="#334155">Radius of circle K: 30 units</text></svg>`;

const BARS = `<svg viewBox="0 0 480 296" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of visitors to a desert national park in thousands, with a vertical axis starting at 900: 950 in 2020, 990 in 2022 and 1,045 in 2024"><rect x="0" y="0" width="480" height="296" fill="#ffffff"/><text x="250" y="20" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Visitors to a desert national park</text><line x1="80" y1="250" x2="420" y2="250" stroke="#e2e8f0"/><text x="74" y="254" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">900</text><line x1="80" y1="215" x2="420" y2="215" stroke="#e2e8f0"/><text x="74" y="219" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">925</text><line x1="80" y1="180" x2="420" y2="180" stroke="#e2e8f0"/><text x="74" y="184" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">950</text><line x1="80" y1="145" x2="420" y2="145" stroke="#e2e8f0"/><text x="74" y="149" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">975</text><line x1="80" y1="110" x2="420" y2="110" stroke="#e2e8f0"/><text x="74" y="114" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">1,000</text><line x1="80" y1="75" x2="420" y2="75" stroke="#e2e8f0"/><text x="74" y="79" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">1,025</text><line x1="80" y1="40" x2="420" y2="40" stroke="#e2e8f0"/><text x="74" y="44" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">1,050</text><rect x="120" y="180" width="60" height="70" fill="#f59e0b" stroke="#92400e"/><text x="150" y="195" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">950</text><text x="150" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2020</text><rect x="220" y="124" width="60" height="126" fill="#f59e0b" stroke="#92400e"/><text x="250" y="139" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">990</text><text x="250" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2022</text><rect x="320" y="47" width="60" height="203" fill="#f59e0b" stroke="#92400e"/><text x="350" y="62" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1,045</text><text x="350" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2024</text><line x1="80" y1="40" x2="80" y2="250" stroke="#334155"/><line x1="80" y1="250" x2="420" y2="250" stroke="#334155"/><text x="20" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" transform="rotate(-90 20 145)">Visitors (thousands)</text><text x="250" y="288" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Year</text></svg>`;

const KESTRA_TABLE =
  "| District | Population | Area (km²) | Notes |\n|---|---|---|---|\n| A | 12,000 | 150 | steep mountains and forest |\n| B | 30,000 | 200 | hilly farmland |\n| C | 45,000 | 60 | flat coastal plain with beach resorts |\n| D | 54,000 | 120 | farmland on a river floodplain |\n| E | 96,000 | 80 | capital city: government offices, university, main hospital |\n| F | 63,000 | 90 | port on a sheltered bay, with factories |";

export const paper: ExamPaper = {
  id: "exam-n2",
  title: "Paper 3 — Geographical Skills & Resources",
  calculator: true,
  minutes: 50,
  questions: [
    // ---------------------------------------------------------------- Map extract
    {
      kind: "mcq",
      id: "exam-n2-q01",
      topicId: "geo-skills",
      guideRef: "grid-references",
      difficulty: "warmup",
      question: "Use the map extract. What is the **4-figure grid reference** of the square that is almost completely filled by the wood?",
      diagram: MAP,
      options: ["7441", "4175", "4174", "4274"],
      answerIndex: 2,
      explanation:
        "The wood's square has easting **41** on its left edge and northing **74** along its bottom edge. Easting first (along the corridor), then northing (up the stairs): **4174**. 7441 gives the northing first; 4175 uses the line along the *top* of the square instead of the bottom; 4274 uses the line on the *right* of the square instead of the left.",
      hints: ["Find the vertical line on the LEFT of the wood's square, then the horizontal line along its BOTTOM. Easting first."],
      strategy: "Work it out from the map",
    },
    {
      kind: "short",
      id: "exam-n2-q02",
      topicId: "geo-skills",
      guideRef: "grid-references",
      difficulty: "warmup",
      question: "Use the map extract. In which direction is the **campsite** from the **church**? Give an 8-point compass direction.",
      diagram: MAP,
      answer: { type: "text", accept: ["south-east", "southeast", "south east", "SE"], display: "South-east (SE)" },
      traps: [
        {
          spec: { type: "text", accept: ["north-west", "northwest", "north west", "NW"] },
          feedback: "That is the direction from the campsite TO the church. Start at the church and look towards the campsite.",
        },
      ],
      solution: [
        "Start at the church (425734) — the place you are measuring FROM.",
        "The campsite (434726) is 9 tenths of a square further east (434 − 425) and 8 tenths further south (734 − 726): 0.9 km east and 0.8 km south.",
        "About equal amounts of east and south make **south-east**.",
      ],
      commonError: "Giving the direction the wrong way round — from the campsite to the church.",
      hints: ["Put your finger on the church, then look towards the campsite. Is it up or down the map? Left or right?"],
      strategy: "Work it out from the map",
    },
    {
      kind: "short",
      id: "exam-n2-q03",
      topicId: "geo-skills",
      guideRef: "grid-references",
      difficulty: "core",
      question: "Use the map extract. Give the **6-figure grid reference** of the lighthouse.",
      diagram: MAP,
      answer: { type: "text", accept: ["446734", "446 734", "446-734", "447734", "447 734", "447-734", "446735", "446 735", "446-735", "447735", "447 735", "447-735"], display: "446734" },
      traps: [
        { spec: { type: "text", accept: ["734446", "734 446"] }, feedback: "You gave the northing first. Easting first: along the corridor, then up the stairs." },
        { spec: { type: "text", accept: ["4473", "44 73"] }, feedback: "That is the 4-figure reference of the square. Add the tenths across and the tenths up to make six figures." },
      ],
      solution: [
        "The lighthouse's square is 4473: easting line 44 on its left, northing line 73 along its bottom.",
        "Across: the star is 6 tenths of the way from line 44 towards line 45 → **446**.",
        "Up: it is 4 tenths of the way from line 73 towards line 74 → **734**.",
        "Easting first, then northing: **446734**.",
      ],
      commonError: "Counting the tenths from the right-hand or top line of the square instead of from the left and bottom.",
      hints: [
        "Find the square first: which easting line is just to the left of the lighthouse, and which northing line is just below it?",
        "Imagine each side of that square split into 10 equal parts. Count the tenths across from the left line, then the tenths up from the bottom line.",
        "Write the easting (two figures + tenths) before the northing (two figures + tenths).",
      ],
      strategy: "Work it out from the map",
    },
    {
      kind: "short",
      id: "exam-n2-q04",
      topicId: "geo-skills",
      guideRef: "scale-distance",
      difficulty: "core",
      question:
        "On the original **1:50 000** map, the straight-line distance from the church to the lighthouse measures **4.2 cm**. What is the real distance on the ground? Give your answer in km.",
      diagram: MAP,
      answer: { type: "number", value: 2.1, display: "2.1 km" },
      traps: [
        { spec: { type: "number", value: 21 }, feedback: "At 1:50 000, 1 cm stands for 0.5 km, not 5 km. Check your conversion from cm to km." },
        { spec: { type: "number", value: 1.05 }, feedback: "That would be right for a 1:25 000 map (1 cm = 0.25 km). This map is 1:50 000." },
        { spec: { type: "number", value: 8.4 }, feedback: "At 1:50 000, 2 cm = 1 km — so divide the centimetres by 2, don't multiply." },
      ],
      solution: [
        "At 1:50 000, 1 cm on the map = 50,000 cm on the ground.",
        "100,000 cm = 1 km, so 50,000 cm = 0.5 km.",
        "    4.2 × 0.5 = 2.1 km",
      ],
      solutions: [
        {
          label: "Check with the grid",
          steps: [
            "The church (425734) and the lighthouse (446734) share the same northing, so the line between them runs due east.",
            "446 − 425 = 21 tenths of a grid square. Each grid square is 1 km, so each tenth is 100 m.",
            "21 × 100 m = 2,100 m = 2.1 km. ✓",
          ],
        },
      ],
      commonError: "Mixing up units — forgetting that there are 100,000 cm in 1 km.",
      hints: [
        "What does 1 cm on the map stand for at 1:50 000? Write it in cm first, then convert to km.",
        "There are 100,000 cm in 1 km.",
        "Check your answer with the grid: both features have the same northing — count the tenths of eastings between them.",
      ],
      strategy: "Work it out from the map",
    },
    {
      kind: "written",
      id: "exam-n2-q05",
      topicId: "geo-skills",
      guideRef: "grid-references",
      difficulty: "core",
      question:
        "Using evidence from the map extract, suggest why this stretch of coast attracts tourists. Give a grid reference for each piece of evidence. [3 marks]",
      diagram: MAP,
      marks: 3,
      modelAnswer:
        "The bay has a sandy beach in square **4372**, which attracts visitors for sunbathing, swimming and water sports. Tourists have somewhere to stay at the campsite at **434726**, and the car park at **437745** and the roads from the village make the coast easy to reach. There is also attractive coastal scenery to visit, such as the lighthouse on the headland at **446734** and the stack just offshore at **448738**, and the wood in square **4174** offers walks.",
      markScheme: [
        { point: "A beach in the bay (square 4372) for sunbathing, swimming or water sports", keywords: ["beach", "4372", "swim", "sand", "bay", "sunbath"] },
        {
          point: "Somewhere to stay or park, and access: campsite at 434726, car park at 437745, roads",
          keywords: ["campsite", "434726", "car park", "437745", "road", "access", "stay", "camp"],
        },
        {
          point: "Scenery or sights to visit: lighthouse at 446734, stack at 448738, headland, walks in the wood (4174)",
          keywords: ["lighthouse", "446734", "stack", "448738", "headland", "scenery", "view", "wood", "4174", "walk"],
        },
      ],
      commonError: "Listing features with no grid references, or giving a 6-figure reference for a whole area such as the beach (use a 4-figure reference for an area).",
      hints: [
        "Read the key first: which symbols are linked to tourism?",
        "Think of three things a tourist needs: something to do, somewhere to stay or park, and something to see.",
        "Use a 4-figure reference for an area (the beach, the wood) and a 6-figure reference for a point (the campsite, the lighthouse).",
      ],
      strategy: "Read the key first",
    },
    {
      kind: "written",
      id: "exam-n2-q06",
      topicId: "coastal-landforms",
      guideRef: "cave-arch-stack",
      difficulty: "core",
      question:
        "The map extract shows a **stack** at 448738, just off the headland in square 4473. Explain how erosion of the headland could have formed this stack. [4 marks]",
      diagram: MAP,
      marks: 4,
      modelAnswer:
        "The headland sticks out into the sea, so waves attack it from both sides. Waves erode weaknesses such as cracks and joints in the rock by **hydraulic action** (air and water forced into the cracks) and **abrasion** (pebbles hurled against the rock). Over time a crack is widened into a **cave**. If the cave is eroded right through the headland — or two caves on opposite sides meet back-to-back — an **arch** forms. Waves keep eroding the base of the arch while weathering, such as freeze–thaw, weakens its roof from above, until the roof collapses. This leaves a pillar of rock cut off from the headland: the **stack** at 448738. Eventually it may be eroded into a stump.",
      markScheme: [
        { point: "Waves attack weaknesses (cracks, joints, faults) in the headland by hydraulic action and/or abrasion", keywords: ["crack", "joint", "fault", "weakness", "hydraulic", "abrasion"] },
        { point: "The crack is widened into a cave", keywords: ["cave"] },
        { point: "The cave is eroded through the headland (or two caves meet back-to-back) to form an arch", keywords: ["arch", "through", "back-to-back", "back to back"] },
        {
          point: "The arch roof is weakened by erosion at its base and weathering from above, then collapses, leaving the stack (which may later become a stump)",
          keywords: ["collapse", "roof", "weathering", "freeze", "falls", "stump"],
        },
      ],
      commonError: "Listing the sequence (cave, arch, stack) without naming any erosion process, or not explaining why the arch collapses.",
      hints: [
        "The sequence is crack → ? → ? → stack. Fill in the gaps.",
        "Which erosion processes widen a crack? Name them — don't just say 'the sea erodes it'.",
        "What makes the roof of an arch fall in? Think about attack from below AND from above.",
      ],
      strategy: "Cause → process → effect",
    },
    // ---------------------------------------------------------------- Coasts
    {
      kind: "mcq",
      id: "exam-n2-q07",
      topicId: "coastal-landforms",
      guideRef: "longshore-drift",
      difficulty: "core",
      question:
        "The diagram shows a south-facing beach with three groynes. The prevailing wind blows from the **south-east**. After a few months, where will the most sand have built up?",
      diagram: GROYNE,
      options: ["On the east side of each groyne", "On the west side of each groyne", "Evenly on both sides of each groyne", "Only out at the seaward tip of each groyne"],
      answerIndex: 0,
      explanation:
        "Waves driven by a south-easterly wind push the swash up the beach at an angle, towards the north-west. The backwash runs straight back down the slope. So sand zig-zags along the beach from **east to west** (longshore drift). Each groyne blocks that movement, so sand piles up on the side it arrives from — the **east** (updrift) side. Choosing the west side assumes sand collects where the wind is 'heading', but the groyne stops it before it can get past.",
      hints: [
        "First decide which way longshore drift carries sand along this beach: east to west, or west to east?",
        "Swash follows the wind direction up the beach; backwash runs straight down.",
        "A groyne is a barrier: sand builds up on the side it reaches first.",
      ],
      strategy: "Sketch it",
    },
    {
      kind: "short",
      id: "exam-n2-q08",
      topicId: "coastal-erosion",
      guideRef: "erosion-processes",
      difficulty: "core",
      question:
        "The graph shows the distance from a farmhouse to the edge of a soft boulder-clay cliff. Calculate the **mean rate of cliff retreat** between 1990 and 2020. Give your answer in metres per year, to 1 decimal place.",
      diagram: RETREAT,
      answer: { type: "number", value: 1.9, tolerance: 0.05, display: "1.9 m per year" },
      traps: [
        { spec: { type: "number", value: 58 }, feedback: "58 m is the total distance lost. A rate is per year: divide by the number of years." },
        { spec: { type: "number", value: 19.3, tolerance: 0.05 }, feedback: "That is the retreat per decade. 1990 to 2020 is 30 years, so divide by 30." },
        { spec: { type: "number", value: 2.1, tolerance: 0.05 }, feedback: "You divided the 2020 distance (62 m) by 30. Use the CHANGE in distance: 120 − 62." },
      ],
      solution: [
        "Distance lost = 120 − 62 = 58 m.",
        "Time = 2020 − 1990 = 30 years.",
        "    58 ÷ 30 = 1.933… ≈ 1.9 m per year",
      ],
      commonError: "Dividing the final distance, not the change in distance, by the number of years.",
      hints: [
        "Rate of change = change ÷ time.",
        "How many metres of cliff were lost between the first and last points on the graph?",
        "Divide by the number of years between 1990 and 2020.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "exam-n2-q09",
      topicId: "coastal-erosion",
      guideRef: "mass-movement",
      difficulty: "challenge",
      question:
        "Use the graph of the farmhouse and the cliff edge. The council says the farmhouse must be abandoned once the cliff edge is **20 m** from it, because slumping could suddenly take a large chunk of cliff. Assume the cliff keeps retreating at its **2010–2020** rate. In which year will the edge be 20 m from the farmhouse?",
      diagram: RETREAT,
      answer: { type: "number", value: 2040, display: "2040" },
      traps: [
        { spec: { type: "number", value: 2041.7, tolerance: 0.8 }, feedback: "You used the 1990–2020 mean rate (about 1.9 m a year). The question asks for the faster 2010–2020 rate." },
        { spec: { type: "number", value: 2049.5, tolerance: 0.6 }, feedback: "You worked out when the edge reaches the farmhouse itself. The council's limit is 20 m away, so only 62 − 20 m of cliff can be lost." },
        { spec: { type: "number", value: 20 }, feedback: "20 is a number of years. Add it to the year you started from." },
      ],
      solution: [
        "2010–2020 rate: 83 − 62 = 21 m in 10 years = 2.1 m per year.",
        "Cliff that can still be lost before the 20 m limit: 62 − 20 = 42 m.",
        "    42 ÷ 2.1 = 20 years",
        "2020 + 20 = **2040**.",
        "This is only an estimate: boulder clay often fails in sudden slumps, especially after heavy rain, so the edge may move in big jumps rather than steadily.",
      ],
      commonError: "Using the wrong rate, or forgetting the 20 m safety buffer.",
      hints: [
        "Two things to find: how fast is the cliff retreating in 2010–2020, and how much more cliff can be lost?",
        "The rate is the change from 2010 to 2020 divided by 10 years.",
        "The edge only needs to move from 62 m away to 20 m away. Years needed = distance ÷ rate; then add to 2020.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-n2-q10",
      topicId: "coastal-erosion",
      guideRef: "erosion-processes",
      difficulty: "challenge",
      question:
        "Zara tested this hypothesis on a long pebble beach: *'Pebbles get smaller from west to east because longshore drift carries them east and attrition wears them down.'* The prevailing wind is from the south-west. At five sites, 200 m apart, she measured the long axis of 10 pebbles and worked out the mean.\n\n| Site (west → east) | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n| Mean long axis (mm) | 64 | 55 | 58 | 41 | 33 |\n\nTo what extent do her results support the hypothesis? Use figures, and suggest one improvement to her method. [4 marks]",
      marks: 4,
      modelAnswer:
        "The results largely support the hypothesis. Overall the pebbles get smaller towards the east: the mean long axis falls from 64 mm at Site 1 to 33 mm at Site 5, about half the size. This fits the process: the south-westerly wind drives longshore drift from west to east, and as pebbles are carried along they knock against each other (attrition), becoming smaller and rounder. However, Site 3 is an anomaly — at 58 mm its pebbles are larger than those at Site 2 (55 mm), so the decrease is not perfectly steady. Her sample of only 10 pebbles per site, collected on one day, is small; she should measure more pebbles (for example 30), chosen randomly at fixed points along a tape, and repeat the survey on another day. Overall the hypothesis is mostly, but not completely, supported.",
      markScheme: [
        { point: "Overall trend supports it: pebbles get smaller eastwards, from 64 mm (Site 1) to 33 mm (Site 5) — 31 mm smaller, about half", keywords: ["64", "33", "31", "smaller", "decrease", "half"] },
        { point: "Anomaly: Site 3 (58 mm) is larger than Site 2 (55 mm), so the pattern is not perfect", keywords: ["site 3", "58", "55", "anomaly", "doesn't fit", "does not fit"] },
        { point: "Links to process: south-westerly wind drives drift west to east; attrition (pebbles knocking together) wears them down as they travel", keywords: ["attrition", "longshore", "south-west", "knock", "collide", "each other"] },
        {
          point: "Limitation or improvement with a judgement: only 10 pebbles per site on one day — measure more pebbles chosen randomly and repeat; so mostly but not fully supported",
          keywords: ["10 pebbles", "more pebbles", "random", "repeat", "sample", "mostly", "largely"],
        },
      ],
      commonError: "Saying the results 'prove' the hypothesis — one small survey with an anomaly can only support it.",
      hints: [
        "Start with the overall trend, then quote the first and last figures.",
        "Is there a site that breaks the pattern? Quote it.",
        "Is 10 pebbles from each site enough? How could the sample be bigger and fairer?",
      ],
      strategy: "Weigh both sides then judge",
    },
    {
      kind: "mcq",
      id: "exam-n2-q11",
      topicId: "coral-reefs",
      guideRef: "where-reefs-grow",
      difficulty: "warmup",
      question:
        "Most coral reefs grow between about 30°N and 30°S, in warm, shallow, clear, salty water. Which location is **least** likely to have a coral reef?",
      options: [
        "1°N, 104°E (Singapore's Southern Islands)",
        "4°S, 55°E (the Seychelles, Indian Ocean)",
        "18°S, 147°E (off the coast of Queensland, Australia)",
        "51°N, 1°E (the Strait of Dover, between England and France)",
      ],
      answerIndex: 3,
      explanation:
        "51°N is far outside the 30°N–30°S belt: the water in the Strait of Dover is much too cold for reef-building corals, especially in winter. Singapore may seem 'too busy' for reefs, but at 1°N its Southern Islands do have living reefs. The Seychelles and the Great Barrier Reef off Queensland are both well inside the tropical belt.",
      hints: ["Check each latitude against the 30°N–30°S belt."],
      strategy: "Eliminate options",
    },
    // ---------------------------------------------------------------- Extreme environments
    {
      kind: "short",
      id: "exam-n2-q12",
      topicId: "extreme-climates",
      guideRef: "climate-graphs",
      difficulty: "warmup",
      question: "Use the climate graph for Station D. Calculate the **annual temperature range**. Give your answer in °C.",
      diagram: CLIMATE,
      answer: { type: "number", value: 21, tolerance: 1, display: "21 °C" },
      traps: [
        { spec: { type: "number", value: 47 }, feedback: "You added the highest and lowest temperatures. Range = highest − lowest." },
        { spec: { type: "number", value: 34 }, feedback: "34 °C is the highest temperature. Range = highest − lowest." },
      ],
      solution: ["Highest monthly temperature: July, about 34 °C.", "Lowest monthly temperature: January, about 13 °C.", "    range = 34 − 13 = 21 °C"],
      commonError: "Reading the temperature line against the left-hand (rainfall) axis.",
      hints: ["Range = highest − lowest. Read the red line against the RIGHT-hand axis."],
      strategy: "Read the key first",
    },
    {
      kind: "written",
      id: "exam-n2-q13",
      topicId: "extreme-climates",
      guideRef: "hot-desert-climate",
      difficulty: "core",
      question: "Describe the climate of Station D shown on the climate graph. Use figures in your answer. [4 marks]",
      diagram: CLIMATE,
      marks: 4,
      modelAnswer:
        "Station D has hot summers and mild winters. Temperatures rise from a minimum of about 13 °C in January to a maximum of about 34 °C in July, an annual range of about 21 °C. It is extremely dry: the total rainfall is only 33 mm a year (8 + 5 + 4 + 2 + 1 + 0 + 0 + 0 + 0 + 2 + 4 + 7), far below the 250 mm a year that marks a desert. The little rain there is falls in the cooler months — the wettest month is January with 8 mm — and there is no rain at all from June to September.",
      markScheme: [
        { point: "Hot summer: maximum about 34 °C in July", keywords: ["34", "july", "hot", "summer", "maximum"] },
        { point: "Mild winter: minimum about 13 °C in January, giving a range of about 21 °C", keywords: ["13", "january", "21", "range", "mild", "minimum"] },
        { point: "Very low total rainfall: 33 mm a year, well under 250 mm (a desert)", keywords: ["33", "250", "dry", "desert", "arid", "total"] },
        { point: "Seasonal rain: the little rain falls in the cooler months (wettest January, 8 mm); none from June to September", keywords: ["8 mm", "june", "september", "no rain", "0 mm", "cooler", "winter"] },
      ],
      commonError: "Explaining WHY it is dry (sinking air, high pressure) — the command word is describe, so give patterns and figures, not reasons.",
      hints: [
        "Describe temperature AND rainfall — both need figures with units.",
        "For rainfall, add up all 12 bars to get the annual total. How does it compare with 250 mm?",
        "When does the little rain fall — in the hot months or the cool months?",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "exam-n2-q14",
      topicId: "geo-skills",
      guideRef: "latitude-longitude",
      difficulty: "core",
      question:
        "Use the storm-track map. Using 1° of latitude ≈ 111 km, calculate how far **north** the storm centre moved between Day 1 and Day 5 (ignore its east–west movement). Give your answer in km.",
      diagram: STORM,
      answer: { type: "number", value: 1110, display: "1,110 km" },
      traps: [
        { spec: { type: "number", value: 1332 }, feedback: "You used the change in longitude (140 − 128 = 12°). Distance north comes from the change in LATITUDE." },
        { spec: { type: "number", value: 2220 }, feedback: "You used Day 5's latitude on its own. You need the CHANGE in latitude from Day 1 to Day 5." },
      ],
      solution: ["Day 1: 10°N. Day 5: 20°N.", "Change in latitude = 20 − 10 = 10°.", "    10 × 111 = 1,110 km"],
      commonError: "Using longitude instead of latitude to measure distance north.",
      hints: [
        "Latitude tells you how far north a place is. Read it from the left-hand axis for Day 1 and for Day 5.",
        "Find the change in latitude, then multiply by 111 km.",
      ],
      strategy: "Work it out from the map",
    },
    {
      kind: "mcq",
      id: "exam-n2-q15",
      topicId: "extreme-weather",
      guideRef: "tropical-storms",
      difficulty: "core",
      question: "Use the storm-track map. In which general direction did the tropical storm travel between Day 1 and Day 5?",
      diagram: STORM,
      options: ["North-east", "North-west", "South-east", "South-west"],
      answerIndex: 1,
      explanation:
        "Latitude rose from 10°N to 20°N, so the storm moved **north**. Longitude fell from 140°E to 128°E — in the Eastern Hemisphere, smaller numbers are further **west** — so it also moved west: **north-west**. North-east is the tempting slip of assuming 'the longitude is in °E, so it went east'. South-east is the direction from Day 5 back to Day 1.",
      hints: [
        "Did the latitude go up or down? Up means north.",
        "In the Eastern Hemisphere, longitude numbers get bigger towards the east. Did they get bigger or smaller?",
      ],
      strategy: "Work it out from the map",
    },
    {
      kind: "written",
      id: "exam-n2-q16",
      topicId: "extreme-weather",
      guideRef: "measuring-weather",
      difficulty: "warmup",
      question:
        "Jun's class recorded daily rainfall with **one rain gauge** in their school grounds in Singapore for one week:\n\n| Day | Mon | Tue | Wed | Thu | Fri | Sat | Sun |\n|---|---|---|---|---|---|---|---|\n| Rainfall (mm) | 0 | 12 | 3 | 0 | 41 | 6 | 1 |\n\nSuggest two reasons why these results might not be accurate or reliable. [2 marks]",
      marks: 2,
      modelAnswer:
        "The gauge may have been placed in a poor spot — for example under a tree or next to a building, which would shelter it from rain or let extra water drip or splash in. Also, the readings may not have been taken at the same time each day (it is unlikely anyone was at school to read it at the weekend), and in Singapore's heat some water could evaporate before it was read. One gauge for one week is also too little data to show a typical pattern.",
      markScheme: [
        { point: "A problem with where the gauge was placed: under a tree, near a building or wall, splash from hard ground", keywords: ["tree", "building", "wall", "shelter", "splash", "placed", "position", "roof"] },
        {
          point: "A problem with when or how it was read, or how much data: different times, nobody there at the weekend, evaporation, misreading, only one gauge for one week",
          keywords: ["time", "weekend", "evaporat", "misread", "one week", "one gauge", "only", "short"],
        },
      ],
      hints: ["Think about WHERE the gauge was put, and WHEN and HOW it was read — including Saturday and Sunday."],
      strategy: "Spot the misconception",
    },
    {
      kind: "short",
      id: "exam-n2-q17",
      topicId: "living-in-extremes",
      guideRef: "planning-an-expedition",
      difficulty: "core",
      question:
        "Aisha's team of **6** people is planning a **5-day** trek in a hot desert. Their plan allows **4.5 litres** of drinking water per person per day, carried in **20-litre** containers. What is the smallest number of full 20-litre containers they must take?",
      answer: { type: "number", value: 7, display: "7 containers" },
      traps: [
        { spec: { type: "number", value: 6.75 }, feedback: "You can't carry 0.75 of a container. Round up, or someone goes thirsty on the last day." },
        { spec: { type: "number", value: 6 }, feedback: "6 containers hold only 120 litres — 15 litres short. Always round UP when the answer is a supply you must not run out of." },
        { spec: { type: "number", value: 135 }, feedback: "135 litres is the total water needed. Now work out how many 20-litre containers that is." },
      ],
      solution: [
        "Water per day for the team: 6 × 4.5 = 27 litres.",
        "For 5 days: 27 × 5 = 135 litres.",
        "    135 ÷ 20 = 6.75 containers",
        "Round **up**: 7 containers (140 litres), so there is enough water for the whole trek.",
      ],
      commonError: "Rounding 6.75 down to 6, which leaves the team short of water.",
      hints: [
        "First find the total water the whole team needs for the whole trek.",
        "Total = people × days × litres per person per day.",
        "Divide by 20. Should you round up or down — what happens if you run out?",
      ],
      strategy: "Use figures from the source",
    },
    // ---------------------------------------------------------------- Population
    {
      kind: "short",
      id: "exam-n2-q18",
      topicId: "population-distribution",
      guideRef: "population-density",
      difficulty: "core",
      question:
        "The choropleth map shows population density on the island of Kestra (fictional). The table gives data for its six districts.\n\n" +
        KESTRA_TABLE +
        "\n\nCalculate the population density of **district F**. Give your answer in people per km².",
      diagram: CHORO,
      answer: { type: "number", value: 700, display: "700 people per km²" },
      traps: [
        { spec: { type: "number", value: 0.00143, tolerance: 0.0001 }, feedback: "You divided the area by the population. Density = people ÷ area." },
      ],
      solution: [
        "Density = population ÷ area.",
        "    63,000 ÷ 90 = 700 people per km²",
        "Check the map: 700 is in the 500–999 class, which matches F's shading.",
      ],
      commonError: "Dividing area by population, giving a tiny decimal.",
      hints: ["Density = population ÷ area. Which number goes on top?", "Check your answer against the class F is shaded in on the map."],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "exam-n2-q19",
      topicId: "geo-skills",
      guideRef: "graphs-and-charts",
      difficulty: "challenge",
      question:
        "Use the choropleth map and the table for the island of Kestra.\n\n" +
        KESTRA_TABLE +
        "\n\nCalculate the population density of the **whole island**. Give your answer in people per km², to the nearest whole number.",
      diagram: CHORO,
      answer: { type: "number", value: 429, tolerance: 0.5, display: "429 people per km²" },
      traps: [
        {
          spec: { type: "number", value: 555 },
          feedback: "You averaged the six district densities. That treats tiny district C (60 km²) the same as large district B (200 km²). Divide the island's total population by its total area instead.",
        },
      ],
      solution: [
        "Total population = 12,000 + 30,000 + 45,000 + 54,000 + 96,000 + 63,000 = 300,000.",
        "Total area = 150 + 200 + 60 + 120 + 80 + 90 = 700 km².",
        "    300,000 ÷ 700 = 428.57… ≈ 429 people per km²",
      ],
      commonError: "Taking the mean of the six district densities (555), which ignores that the districts have different areas.",
      hints: [
        "Density of the island = the island's total population ÷ the island's total area.",
        "Add up all six populations, then all six areas.",
        "Why would averaging the six density figures give the wrong answer?",
      ],
      strategy: "Spot the misconception",
    },
    {
      kind: "written",
      id: "exam-n2-q20",
      topicId: "population-distribution",
      guideRef: "explaining-distribution",
      difficulty: "core",
      question:
        "Use the choropleth map and the table for the island of Kestra.\n\n" +
        KESTRA_TABLE +
        "\n\nSuggest reasons why districts E and F are densely populated, but district A is sparsely populated. [4 marks]",
      diagram: CHORO,
      marks: 4,
      modelAnswer:
        "District A has only 80 people per km² because it is steep and mountainous: it is hard to build homes or roads on steep slopes, and difficult to farm, so few people can make a living there. Its forest cover also means few jobs or services. In contrast, district E (1,200 people per km²) is the capital city, so government offices, the university and the main hospital provide many jobs and services that pull people in. District F (700 people per km²) has a port on a sheltered bay, so trade and factories create jobs, and the flat coastal land is easier to build on.",
      markScheme: [
        { point: "A: steep, mountainous relief makes building, farming and access difficult", keywords: ["steep", "mountain", "relief", "build", "farm", "access", "roads"] },
        { point: "A: forest, few jobs or services, isolated — only 80 people per km²", keywords: ["forest", "jobs", "services", "80", "isolated", "remote"] },
        { point: "E: capital city with jobs and services (government, university, hospital) — 1,200 per km²", keywords: ["capital", "government", "university", "hospital", "services", "1,200", "1200"] },
        { point: "F: port on a sheltered bay gives trade and factory jobs; flat coastal land — 700 per km²", keywords: ["port", "bay", "sheltered", "trade", "factor", "700", "coast"] },
      ],
      commonError: "Only describing which districts are dense or sparse, without giving reasons.",
      hints: [
        "Use the Notes column — each note is a clue to a physical or a human factor.",
        "For A, think about relief and what work there is.",
        "For E and F, think about jobs, services and trade. Quote the densities as evidence.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-n2-q21",
      topicId: "geo-skills",
      guideRef: "describing-patterns",
      difficulty: "core",
      question: "Describe the relationship shown on the scatter graph of female literacy and total fertility rate. [3 marks]",
      diagram: SCATTER,
      marks: 3,
      modelAnswer:
        "There is a negative correlation: as the percentage of women who can read and write increases, the total fertility rate falls. For example, in country P only 30% of women are literate and the fertility rate is 6.5 children per woman, whereas in country V 95% are literate and the rate is just 1.6. Country W is an anomaly: 90% of its women are literate, but its fertility rate is still 4.5.",
      markScheme: [
        { point: "Trend: negative correlation — as female literacy rises, fertility falls", keywords: ["negative", "as", "falls", "decrease", "lower", "inverse"] },
        { point: "Evidence: figures from two points, e.g. P 30% and 6.5; V 95% and 1.6", keywords: ["30", "6.5", "95", "1.6"] },
        { point: "Anomaly: W has 90% literacy but a fertility rate of 4.5", keywords: ["w", "anomaly", "90", "4.5"] },
      ],
      commonError: "Explaining why educated women have fewer children — the command word is describe.",
      hints: [
        "Trend: as one variable goes up, what does the other do?",
        "Evidence: quote two countries from opposite ends — both values, with units.",
        "Anomaly: which point sits well away from the others?",
      ],
      strategy: "TEA (Trend, Evidence, Anomaly)",
    },
    {
      kind: "written",
      id: "exam-n2-q22",
      topicId: "population-change",
      guideRef: "birth-rate-factors",
      difficulty: "core",
      question:
        "On the scatter graph, country W does not fit the pattern. Suggest three reasons why a country could have high female literacy but still have a high fertility rate. [3 marks]",
      diagram: SCATTER,
      marks: 3,
      modelAnswer:
        "First, religious or cultural traditions may value large families or discourage the use of contraception, whatever a woman's education. Second, the government could have a pro-natalist policy, such as cash bonuses or tax breaks for each child, that encourages couples to have more children. Third, if infant mortality is still high, or if families need children to work on farms or to look after parents in old age because there are no pensions, couples may choose to have more children.",
      markScheme: [
        { point: "Religious or cultural beliefs that value large families or discourage contraception", keywords: ["religio", "culture", "tradition", "large families", "contraception"] },
        { point: "A government pro-natalist policy rewarding people for having children", keywords: ["policy", "pro-natalist", "government", "bonus", "incentive", "tax"] },
        { point: "High infant mortality, or children needed as workers or as support in old age", keywords: ["infant mortality", "die", "farm", "work", "old age", "pension", "labour"] },
      ],
      commonError: "Repeating that literacy lowers fertility — the question asks what ELSE could keep fertility high.",
      hints: [
        "Literacy is only one factor. What else affects how many children couples want?",
        "Think about beliefs, government policy and economic needs.",
        "Could families expect some children not to survive, or need children to support them later?",
      ],
      strategy: "Look for the anomaly",
    },
    {
      kind: "short",
      id: "exam-n2-q23",
      topicId: "population-growth",
      guideRef: "birth-death-rates",
      difficulty: "core",
      question:
        "The table shows birth and death rates for four countries.\n\n| Country | Birth rate (per 1,000 per year) | Death rate (per 1,000 per year) |\n|---|---|---|\n| K | 38 | 9 |\n| L | 31 | 7 |\n| M | 12 | 9 |\n| N | 7 | 11 |\n\nCalculate the **rate of natural increase** for country L, as a percentage.",
      answer: { type: "number", value: 2.4, display: "2.4%" },
      traps: [
        { spec: { type: "number", value: 24 }, feedback: "24 is the natural increase per 1,000 people. A percentage is per 100, so divide by 10." },
        { spec: { type: "number", value: 3.8 }, feedback: "You added the rates. Natural increase = birth rate − death rate." },
      ],
      solution: [
        "Natural increase = birth rate − death rate = 31 − 7 = 24 per 1,000.",
        "Per 1,000 → per 100 (%): divide by 10.",
        "    24 ÷ 10 = 2.4%",
        "(Notice that country N has a natural DECREASE: 7 − 11 = −4 per 1,000, or −0.4%.)",
      ],
      commonError: "Forgetting to divide by 10, and giving 24% instead of 2.4%.",
      hints: ["Natural increase = births − deaths.", "These rates are per 1,000 people; a percentage is per 100. How do you convert?"],
      strategy: "Use figures from the source",
    },
    {
      kind: "short",
      id: "exam-n2-q24",
      topicId: "demography",
      guideRef: "dependency-ratio",
      difficulty: "core",
      question:
        "The table shows the age structure of a country.\n\n| Age group | 0–14 | 15–64 | 65 and over |\n|---|---|---|---|\n| Population (millions) | 0.9 | 4.2 | 0.9 |\n\nCalculate the **dependency ratio**. Give your answer to 1 decimal place.",
      answer: { type: "number", value: 42.9, tolerance: 0.05, display: "42.9" },
      traps: [
        { spec: { type: "number", value: 30 }, feedback: "You divided by the TOTAL population (6.0 million). Divide by the working-age population (15–64) only." },
        { spec: { type: "number", value: 233.3, tolerance: 0.1 }, feedback: "Upside down: dependants go on top, working-age people underneath." },
        { spec: { type: "number", value: 21.4, tolerance: 0.1 }, feedback: "You used only one group of dependants. Include BOTH the young (0–14) and the elderly (65+)." },
      ],
      solution: [
        "Dependants = young + elderly = 0.9 + 0.9 = 1.8 million.",
        "Working age (15–64) = 4.2 million.",
        "    1.8 ÷ 4.2 × 100 = 42.857… ≈ 42.9",
        "So there are about 43 dependants for every 100 people of working age.",
      ],
      commonError: "Dividing by the total population instead of the working-age population.",
      hints: [
        "Dependency ratio = (young + elderly) ÷ working age × 100.",
        "Which age groups count as dependants? Add them first.",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "exam-n2-q25",
      topicId: "population-problems",
      guideRef: "ageing-youthful",
      difficulty: "challenge",
      question:
        "Compare the population structures of Country A and Country B, using figures from the pyramids. Then explain one challenge that each country's government is likely to face. [5 marks]",
      diagram: PYRAMIDS,
      marks: 5,
      modelAnswer:
        "Country A has a youthful population: its pyramid has a very wide base, with 30% of people aged 0–9 (15% male + 15% female), and it narrows quickly so that only 2% are aged 70 and over. Country B has an ageing population: its base is narrow, with only 8% aged 0–9, while 16% are aged 70 and over (7% male + 9% female). A's shape suggests a high birth rate and low life expectancy; B's suggests a low birth rate and long life expectancy, with women living longer than men (9% compared with 7% at 70+). A's government must provide enough schools, vaccinations and, later, jobs and housing for a huge number of young people. B's government faces rising costs of pensions, healthcare and elderly care, while a shrinking workforce pays the taxes to fund them.",
      markScheme: [
        { point: "A is youthful: wide base, 30% aged 0–9 compared with only 8% in B", keywords: ["30", "wide base", "youthful", "young", "8%", "8 per cent"] },
        { point: "B is ageing: narrow base and top-heavy, 16% aged 70+ compared with 2% in A", keywords: ["16", "70+", "ageing", "elderly", "narrow base", "2%"] },
        {
          point: "Explains the shapes: A has a high birth rate and short life expectancy; B a low birth rate and long life expectancy (more women than men at 70+: 9% v 7%)",
          keywords: ["birth rate", "life expectancy", "9%", "7%", "women live longer", "high birth"],
        },
        { point: "A's challenge: providing schools, healthcare and future jobs and housing for many young people", keywords: ["school", "education", "jobs", "vaccin", "housing"] },
        { point: "B's challenge: paying for pensions, healthcare and care with a shrinking workforce and tax base", keywords: ["pension", "care", "healthcare", "workforce", "tax", "shrinking"] },
      ],
      commonError: "Reading only one side of the pyramid — add the male and female bars to get the percentage of the whole population.",
      hints: [
        "Compare the BASE and the TOP of each pyramid. Add the male and female bars to get a figure for the whole population.",
        "Which pyramid suggests a high birth rate? Which suggests people live long lives?",
        "Who needs schools, and who needs pensions and care? Link each challenge to a figure.",
      ],
      strategy: "Compare and contrast",
    },
    // ---------------------------------------------------------------- Cities
    {
      kind: "mcq",
      id: "exam-n2-q26",
      topicId: "lagos",
      guideRef: "lagos-location-growth",
      difficulty: "warmup",
      question: "Lagos lies at about **6°N, 3°E**. Which description of its location is correct?",
      options: [
        "Southern Hemisphere, just east of the Prime Meridian, on the Gulf of Guinea",
        "Northern Hemisphere, just west of the Prime Meridian, on the Mediterranean coast of North Africa",
        "Northern Hemisphere, just east of the Prime Meridian, on the Gulf of Guinea in West Africa",
        "Northern Hemisphere, about 40° east of the Prime Meridian, on the Indian Ocean coast of East Africa",
      ],
      answerIndex: 2,
      explanation:
        "6°N means 6 degrees north of the Equator, so Lagos is in the Northern Hemisphere. 3°E means it is just east of the Prime Meridian. That puts it on the Gulf of Guinea coast of south-west Nigeria, in West Africa. The Southern Hemisphere option mixes up N and S; the Indian Ocean option would need a longitude of about 40°E, not 3°E.",
      hints: ["N or S gives the hemisphere; E or W tells you which side of the Prime Meridian."],
      strategy: "CLOCC (Continents, Lines of latitude, Oceans, Countries, Compass)",
    },
    {
      kind: "short",
      id: "exam-n2-q27",
      topicId: "cities-megacities",
      guideRef: "megacities",
      difficulty: "challenge",
      question:
        "On the proportional symbol map of Country Z, the **area** of each circle is proportional to the city's population. The key circle (radius 15 units) stands for 5 million people. Circle K has a radius of 30 units. Estimate the population of city K. Give your answer in millions.",
      diagram: CIRCLES,
      answer: { type: "number", value: 20, display: "20 million" },
      traps: [
        {
          spec: { type: "number", value: 10 },
          feedback: "Twice the radius does not mean twice the area. Area depends on radius squared, so doubling the radius makes the circle 4 times bigger.",
        },
      ],
      solution: [
        "Area of a circle = π × radius².",
        "K's radius is 30 ÷ 15 = 2 times the key circle's radius.",
        "So K's area is 2² = 4 times the key circle's area.",
        "    4 × 5 million = 20 million",
        "With over 10 million people, city K is a megacity.",
      ],
      commonError: "Assuming that twice the radius means twice the population (10 million).",
      hints: [
        "Is population linked to the circle's radius or to its area?",
        "Area of a circle = π r². What happens to the area when r doubles?",
        "Area scale factor = (radius scale factor)².",
      ],
      strategy: "Read the key first",
    },
    {
      kind: "written",
      id: "exam-n2-q28",
      topicId: "sustainable-cities",
      guideRef: "what-is-sustainable",
      difficulty: "challenge",
      question:
        "The city of Riverton (fictional) introduced a road-pricing charge, similar to Singapore's ERP, on roads into its centre. A class surveyed one main road from 8:00 to 9:00 on one weekday in March (before the charge) and on one weekday in June (after):\n\n| Measure | Before (March) | After (June) |\n|---|---|---|\n| Cars passing per hour | 1,200 | 900 |\n| Passengers boarding the bus at one stop | 160 | 210 |\n| Average traffic speed (km/h) | 18 | 26 |\n| Shops (out of 10) reporting fewer customers | — | 6 |\n\nEvaluate whether the road-pricing scheme has made Riverton more sustainable. Use figures from the table. [5 marks]",
      marks: 5,
      modelAnswer:
        "Environmentally, the scheme seems to have worked: cars fell from 1,200 to 900 an hour, a 25% drop, which should mean less air pollution and lower carbon emissions. Socially, more people are using public transport — bus passengers at the stop rose from 160 to 210, about 31% more — and traffic moves faster (18 to 26 km/h), so journeys are quicker for buses as well as cars. However, there may be an economic cost: 6 out of 10 shops reported fewer customers, and the charge could be unfair on poorer drivers who have no other way to get to work. The evidence is also weak: it comes from one road, for one hour, on one day in each month, and March and June might differ anyway (school holidays or weather could change traffic). Overall, the scheme appears to have made Riverton more sustainable environmentally and socially, but the council should collect more data, and watch the effect on shops, before judging it a full success.",
      markScheme: [
        { point: "Environmental: cars fell by 300 an hour (25%), so less air pollution and fewer carbon emissions", keywords: ["25", "300", "fewer cars", "pollution", "emission", "carbon"] },
        { point: "Social: more bus use (160 to 210, about 31%) and faster traffic (18 to 26 km/h)", keywords: ["bus", "210", "31", "26", "faster", "public transport"] },
        { point: "Economic or fairness downside: 6 of 10 shops report fewer customers; the charge may be unfair on poorer drivers", keywords: ["shops", "6", "customers", "unfair", "poorer", "cost", "business"] },
        { point: "Limits of the data: one road, one hour, one day each; March and June may differ, so results are not reliable", keywords: ["one road", "one day", "one hour", "march", "june", "reliable", "holiday", "weather"] },
        { point: "A supported overall judgement that weighs the pillars", keywords: ["overall", "on balance", "conclude", "more sustainable", "however", "judgement"] },
      ],
      commonError: "Only listing the benefits — 'evaluate' needs both sides, the limits of the evidence and a justified conclusion.",
      hints: [
        "Sort the evidence into social, economic and environmental (SEE).",
        "Turn the changes into figures: what % did car numbers fall by? How many more bus passengers were there?",
        "How trustworthy is a survey of one road for one hour on two days?",
        "Finish with a judgement that weighs both sides.",
      ],
      strategy: "Weigh both sides then judge",
    },
    // ---------------------------------------------------------------- Data and fieldwork skills
    {
      kind: "mcq",
      id: "exam-n2-q29",
      topicId: "geo-skills",
      guideRef: "describing-patterns",
      difficulty: "core",
      question:
        "Ravi wants to test the hypothesis: *'The amount of litter decreases with distance from the hawker centre.'* He will count litter items at five sites along a path, 50 m apart. Which plan will give the fairest, most reliable results?",
      options: [
        "Count litter in the same-sized area at every site, at the same time of day, and repeat the counts on three different days",
        "Count litter only at the site next to the hawker centre, because that is where most litter will be",
        "Count each site on a different day of the week, so that the results include more variety",
        "Use the Singapore Census 2020 to find out how much litter there is near the hawker centre",
      ],
      answerIndex: 0,
      explanation:
        "A fair test changes only the thing being tested — distance — and keeps everything else the same: the same-sized area and the same time of day. Repeating the counts smooths out one-off results, which makes them more reliable. Counting each site on a different day changes two things at once: a site might look cleaner simply because the cleaners had just been. Counting one site gives nothing to compare, and the census is secondary data about people, not litter.",
      hints: ["A fair test changes only ONE thing. What should change from site to site here?", "Why would you repeat a count on more than one day?"],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "exam-n2-q30",
      topicId: "geo-skills",
      guideRef: "graphs-and-charts",
      difficulty: "challenge",
      question:
        "Look at the bar chart. Wei Ling says: *'Visitor numbers almost tripled between 2020 and 2024 — just look at the bars!'* Calculate the **actual percentage increase** in visitors from 2020 to 2024.",
      diagram: BARS,
      answer: { type: "number", value: 10, display: "10%" },
      traps: [
        {
          spec: { type: "number", value: 190, tolerance: 1 },
          feedback: "You compared the heights of the bars above 900. The axis starts at 900, not 0, so bar heights exaggerate the change. Use the actual values.",
        },
        { spec: { type: "number", value: 9.1, tolerance: 0.05 }, feedback: "You divided by the new value (1,045). Percentage change is always worked out from the OLD (starting) value." },
        { spec: { type: "number", value: 95 }, feedback: "95 thousand is the increase in visitors. Turn it into a percentage of the 2020 value." },
      ],
      solution: [
        "Read the values: 950 thousand (2020) and 1,045 thousand (2024).",
        "Change = 1,045 − 950 = 95 thousand.",
        "    95 ÷ 950 × 100 = 10%",
        "The bars look almost three times taller because the vertical axis starts at 900, not 0. A 10% rise is real growth — but nothing like tripling.",
      ],
      commonError: "Judging the change from bar heights when the axis does not start at zero.",
      hints: [
        "Before trusting the bars, check where the vertical axis starts.",
        "Use the numbers: % change = (new − old) ÷ old × 100.",
        "Which value is the 'old' one here?",
      ],
      strategy: "Spot the misconception",
    },
  ],
};
