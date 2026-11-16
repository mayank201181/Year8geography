import type { Paper } from "../../types.ts";

// Climate graphs below are drawn exactly from the data tables that accompany them.
// Station data marked "illustrative" are realistic teaching data, not official climate normals.
const graphDesertA = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for Station A: temperature line from 14 °C in January to 33 °C in July and August; rainfall bars all 4 mm or less"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="20" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Station A (illustrative data, about 25° N)</text><line x1="60" y1="250" x2="420" y2="250" stroke="#e5e7eb"/><text x="54" y="254" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">0</text><text x="426" y="254" font-size="11" font-family="sans-serif" fill="#1d4ed8">0</text><line x1="60" y1="197.5" x2="420" y2="197.5" stroke="#e5e7eb"/><text x="54" y="201.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">10</text><text x="426" y="201.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">10</text><line x1="60" y1="145" x2="420" y2="145" stroke="#e5e7eb"/><text x="54" y="149" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">20</text><text x="426" y="149" font-size="11" font-family="sans-serif" fill="#1d4ed8">20</text><line x1="60" y1="92.5" x2="420" y2="92.5" stroke="#e5e7eb"/><text x="54" y="96.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">30</text><text x="426" y="96.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">30</text><line x1="60" y1="40" x2="420" y2="40" stroke="#e5e7eb"/><text x="54" y="44" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">40</text><text x="426" y="44" font-size="11" font-family="sans-serif" fill="#1d4ed8">40</text><rect x="65" y="234.3" width="20" height="15.7" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="75" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="95" y="239.5" width="20" height="10.5" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="105" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">F</text><rect x="125" y="239.5" width="20" height="10.5" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="135" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><rect x="155" y="244.8" width="20" height="5.2" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="165" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><rect x="185" y="244.8" width="20" height="5.2" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="195" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><text x="225" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><text x="255" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="275" y="244.8" width="20" height="5.2" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="285" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><rect x="305" y="244.8" width="20" height="5.2" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="315" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">S</text><rect x="335" y="239.5" width="20" height="10.5" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="345" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">O</text><rect x="365" y="234.3" width="20" height="15.7" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="375" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">N</text><rect x="395" y="229" width="20" height="21" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="405" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><line x1="60" y1="40" x2="60" y2="250" stroke="#334155"/><line x1="420" y1="40" x2="420" y2="250" stroke="#334155"/><line x1="60" y1="250" x2="420" y2="250" stroke="#334155"/><polyline points="75,176.5 105,166 135,145 165,118.8 195,97.8 225,82 255,76.8 285,76.8 315,92.5 345,118.8 375,150.3 405,171.3" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="75" cy="176.5" r="3" fill="#dc2626"/><circle cx="105" cy="166" r="3" fill="#dc2626"/><circle cx="135" cy="145" r="3" fill="#dc2626"/><circle cx="165" cy="118.8" r="3" fill="#dc2626"/><circle cx="195" cy="97.8" r="3" fill="#dc2626"/><circle cx="225" cy="82" r="3" fill="#dc2626"/><circle cx="255" cy="76.8" r="3" fill="#dc2626"/><circle cx="285" cy="76.8" r="3" fill="#dc2626"/><circle cx="315" cy="92.5" r="3" fill="#dc2626"/><circle cx="345" cy="118.8" r="3" fill="#dc2626"/><circle cx="375" cy="150.3" r="3" fill="#dc2626"/><circle cx="405" cy="171.3" r="3" fill="#dc2626"/><text x="16" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#b91c1c" transform="rotate(-90 16 145)">Temperature (°C)</text><text x="462" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1d4ed8" transform="rotate(90 462 145)">Rainfall (mm)</text><text x="240" y="290" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Month (red line = temperature, blue bars = rainfall)</text></svg>`;
const graphSingapore = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for Singapore: temperature 26.5 to 28.5 °C all year; rainfall bars from 115 mm in February to 320 mm in December"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="20" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Singapore, about 1° N (approximate averages)</text><line x1="60" y1="250" x2="420" y2="250" stroke="#e5e7eb"/><text x="54" y="254" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">0</text><text x="426" y="254" font-size="11" font-family="sans-serif" fill="#1d4ed8">0</text><line x1="60" y1="197.5" x2="420" y2="197.5" stroke="#e5e7eb"/><text x="54" y="201.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">10</text><text x="426" y="201.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">100</text><line x1="60" y1="145" x2="420" y2="145" stroke="#e5e7eb"/><text x="54" y="149" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">20</text><text x="426" y="149" font-size="11" font-family="sans-serif" fill="#1d4ed8">200</text><line x1="60" y1="92.5" x2="420" y2="92.5" stroke="#e5e7eb"/><text x="54" y="96.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">30</text><text x="426" y="96.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">300</text><line x1="60" y1="40" x2="420" y2="40" stroke="#e5e7eb"/><text x="54" y="44" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">40</text><text x="426" y="44" font-size="11" font-family="sans-serif" fill="#1d4ed8">400</text><rect x="65" y="124" width="20" height="126" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="75" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="95" y="189.6" width="20" height="60.4" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="105" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">F</text><rect x="125" y="158.1" width="20" height="91.9" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="135" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><rect x="155" y="163.4" width="20" height="86.6" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="165" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><rect x="185" y="160.7" width="20" height="89.3" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="195" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><rect x="215" y="168.6" width="20" height="81.4" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="225" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="245" y="168.6" width="20" height="81.4" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="255" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="275" y="160.7" width="20" height="89.3" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="285" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><rect x="305" y="173.9" width="20" height="76.1" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="315" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">S</text><rect x="335" y="160.7" width="20" height="89.3" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="345" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">O</text><rect x="365" y="116.1" width="20" height="133.9" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="375" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">N</text><rect x="395" y="82" width="20" height="168" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="405" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><line x1="60" y1="40" x2="60" y2="250" stroke="#334155"/><line x1="420" y1="40" x2="420" y2="250" stroke="#334155"/><line x1="60" y1="250" x2="420" y2="250" stroke="#334155"/><polyline points="75,110.9 105,108.3 135,105.6 165,103 195,100.4 225,100.4 255,103 285,103 315,105.6 345,105.6 375,108.3 405,110.9" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="75" cy="110.9" r="3" fill="#dc2626"/><circle cx="105" cy="108.3" r="3" fill="#dc2626"/><circle cx="135" cy="105.6" r="3" fill="#dc2626"/><circle cx="165" cy="103" r="3" fill="#dc2626"/><circle cx="195" cy="100.4" r="3" fill="#dc2626"/><circle cx="225" cy="100.4" r="3" fill="#dc2626"/><circle cx="255" cy="103" r="3" fill="#dc2626"/><circle cx="285" cy="103" r="3" fill="#dc2626"/><circle cx="315" cy="105.6" r="3" fill="#dc2626"/><circle cx="345" cy="105.6" r="3" fill="#dc2626"/><circle cx="375" cy="108.3" r="3" fill="#dc2626"/><circle cx="405" cy="110.9" r="3" fill="#dc2626"/><text x="16" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#b91c1c" transform="rotate(-90 16 145)">Temperature (°C)</text><text x="462" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1d4ed8" transform="rotate(90 462 145)">Rainfall (mm)</text><text x="240" y="290" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Month (red line = temperature, blue bars = rainfall)</text></svg>`;
const graphPolarC = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for Station C: temperature from −1 °C in January down to −19 °C in August; precipitation bars between 8 and 15 mm"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="20" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Station C (illustrative data, Antarctic coast)</text><line x1="60" y1="250" x2="420" y2="250" stroke="#e5e7eb"/><text x="54" y="254" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">−30</text><text x="426" y="254" font-size="11" font-family="sans-serif" fill="#1d4ed8">0</text><line x1="60" y1="197.5" x2="420" y2="197.5" stroke="#e5e7eb"/><text x="54" y="201.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">−20</text><text x="426" y="201.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">10</text><line x1="60" y1="145" x2="420" y2="145" stroke="#e5e7eb"/><text x="54" y="149" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">−10</text><text x="426" y="149" font-size="11" font-family="sans-serif" fill="#1d4ed8">20</text><line x1="60" y1="92.5" x2="420" y2="92.5" stroke="#e5e7eb"/><text x="54" y="96.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">0</text><text x="426" y="96.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">30</text><line x1="60" y1="40" x2="420" y2="40" stroke="#e5e7eb"/><text x="54" y="44" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">10</text><text x="426" y="44" font-size="11" font-family="sans-serif" fill="#1d4ed8">40</text><rect x="65" y="197.5" width="20" height="52.5" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="75" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="95" y="187" width="20" height="63" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="105" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">F</text><rect x="125" y="171.3" width="20" height="78.7" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="135" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><rect x="155" y="176.5" width="20" height="73.5" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="165" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><rect x="185" y="181.8" width="20" height="68.2" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="195" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><rect x="215" y="187" width="20" height="63" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="225" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="245" y="192.3" width="20" height="57.7" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="255" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="275" y="187" width="20" height="63" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="285" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><rect x="305" y="192.3" width="20" height="57.7" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="315" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">S</text><rect x="335" y="197.5" width="20" height="52.5" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="345" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">O</text><rect x="365" y="202.8" width="20" height="47.2" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="375" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">N</text><rect x="395" y="208" width="20" height="42" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="405" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><line x1="60" y1="92.5" x2="420" y2="92.5" stroke="#334155" stroke-dasharray="4 3"/><line x1="60" y1="40" x2="60" y2="250" stroke="#334155"/><line x1="420" y1="40" x2="420" y2="250" stroke="#334155"/><line x1="60" y1="250" x2="420" y2="250" stroke="#334155"/><polyline points="75,97.8 105,118.8 135,145 165,166 195,176.5 225,181.8 255,187 285,192.3 315,181.8 345,160.8 375,124 405,103" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="75" cy="97.8" r="3" fill="#dc2626"/><circle cx="105" cy="118.8" r="3" fill="#dc2626"/><circle cx="135" cy="145" r="3" fill="#dc2626"/><circle cx="165" cy="166" r="3" fill="#dc2626"/><circle cx="195" cy="176.5" r="3" fill="#dc2626"/><circle cx="225" cy="181.8" r="3" fill="#dc2626"/><circle cx="255" cy="187" r="3" fill="#dc2626"/><circle cx="285" cy="192.3" r="3" fill="#dc2626"/><circle cx="315" cy="181.8" r="3" fill="#dc2626"/><circle cx="345" cy="160.8" r="3" fill="#dc2626"/><circle cx="375" cy="124" r="3" fill="#dc2626"/><circle cx="405" cy="103" r="3" fill="#dc2626"/><text x="16" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#b91c1c" transform="rotate(-90 16 145)">Temperature (°C)</text><text x="462" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1d4ed8" transform="rotate(90 462 145)">Rainfall (mm)</text><text x="240" y="290" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Month (red line = temperature, blue bars = rainfall)</text></svg>`;
const graphMystery = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for Station X: temperature from 21 °C in January falling to 14 °C in July and August; rainfall bars 1 mm or less"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="20" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Station X (illustrative data)</text><line x1="60" y1="250" x2="420" y2="250" stroke="#e5e7eb"/><text x="54" y="254" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">0</text><text x="426" y="254" font-size="11" font-family="sans-serif" fill="#1d4ed8">0</text><line x1="60" y1="197.5" x2="420" y2="197.5" stroke="#e5e7eb"/><text x="54" y="201.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">10</text><text x="426" y="201.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">10</text><line x1="60" y1="145" x2="420" y2="145" stroke="#e5e7eb"/><text x="54" y="149" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">20</text><text x="426" y="149" font-size="11" font-family="sans-serif" fill="#1d4ed8">20</text><line x1="60" y1="92.5" x2="420" y2="92.5" stroke="#e5e7eb"/><text x="54" y="96.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">30</text><text x="426" y="96.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">30</text><line x1="60" y1="40" x2="420" y2="40" stroke="#e5e7eb"/><text x="54" y="44" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">40</text><text x="426" y="44" font-size="11" font-family="sans-serif" fill="#1d4ed8">40</text><text x="75" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><text x="105" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">F</text><text x="135" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><text x="165" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="195" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><rect x="215" y="244.8" width="20" height="5.2" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="225" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="245" y="244.8" width="20" height="5.2" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="255" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="275" y="244.8" width="20" height="5.2" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="285" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="315" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">S</text><text x="345" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">O</text><text x="375" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">N</text><text x="405" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><line x1="60" y1="40" x2="60" y2="250" stroke="#334155"/><line x1="420" y1="40" x2="420" y2="250" stroke="#334155"/><line x1="60" y1="250" x2="420" y2="250" stroke="#334155"/><polyline points="75,139.8 105,139.8 135,145 165,155.5 195,166 225,171.3 255,176.5 285,176.5 315,171.3 345,166 375,155.5 405,145" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="75" cy="139.8" r="3" fill="#dc2626"/><circle cx="105" cy="139.8" r="3" fill="#dc2626"/><circle cx="135" cy="145" r="3" fill="#dc2626"/><circle cx="165" cy="155.5" r="3" fill="#dc2626"/><circle cx="195" cy="166" r="3" fill="#dc2626"/><circle cx="225" cy="171.3" r="3" fill="#dc2626"/><circle cx="255" cy="176.5" r="3" fill="#dc2626"/><circle cx="285" cy="176.5" r="3" fill="#dc2626"/><circle cx="315" cy="171.3" r="3" fill="#dc2626"/><circle cx="345" cy="166" r="3" fill="#dc2626"/><circle cx="375" cy="155.5" r="3" fill="#dc2626"/><circle cx="405" cy="145" r="3" fill="#dc2626"/><text x="16" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#b91c1c" transform="rotate(-90 16 145)">Temperature (°C)</text><text x="462" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1d4ed8" transform="rotate(90 462 145)">Rainfall (mm)</text><text x="240" y="290" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Month (red line = temperature, blue bars = rainfall)</text></svg>`;
const graphTemperate = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for Station E: temperature from 5 °C in January to 18 °C in July and August; rainfall bars between 40 and 70 mm"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="20" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Station E (illustrative data, about 51° N)</text><line x1="60" y1="250" x2="420" y2="250" stroke="#e5e7eb"/><text x="54" y="254" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">−10</text><text x="426" y="254" font-size="11" font-family="sans-serif" fill="#1d4ed8">0</text><line x1="60" y1="197.5" x2="420" y2="197.5" stroke="#e5e7eb"/><text x="54" y="201.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">0</text><text x="426" y="201.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">25</text><line x1="60" y1="145" x2="420" y2="145" stroke="#e5e7eb"/><text x="54" y="149" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">10</text><text x="426" y="149" font-size="11" font-family="sans-serif" fill="#1d4ed8">50</text><line x1="60" y1="92.5" x2="420" y2="92.5" stroke="#e5e7eb"/><text x="54" y="96.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">20</text><text x="426" y="96.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">75</text><line x1="60" y1="40" x2="420" y2="40" stroke="#e5e7eb"/><text x="54" y="44" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">30</text><text x="426" y="44" font-size="11" font-family="sans-serif" fill="#1d4ed8">100</text><rect x="65" y="134.5" width="20" height="115.5" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="75" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="95" y="166" width="20" height="84" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="105" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">F</text><rect x="125" y="166" width="20" height="84" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="135" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><rect x="155" y="155.5" width="20" height="94.5" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="165" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><rect x="185" y="145" width="20" height="105" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="195" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><rect x="215" y="155.5" width="20" height="94.5" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="225" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="245" y="155.5" width="20" height="94.5" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="255" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="275" y="145" width="20" height="105" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="285" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><rect x="305" y="145" width="20" height="105" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="315" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">S</text><rect x="335" y="103" width="20" height="147" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="345" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">O</text><rect x="365" y="124" width="20" height="126" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="375" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">N</text><rect x="395" y="134.5" width="20" height="115.5" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="405" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><line x1="60" y1="197.5" x2="420" y2="197.5" stroke="#334155" stroke-dasharray="4 3"/><line x1="60" y1="40" x2="60" y2="250" stroke="#334155"/><line x1="420" y1="40" x2="420" y2="250" stroke="#334155"/><line x1="60" y1="250" x2="420" y2="250" stroke="#334155"/><polyline points="75,171.3 105,171.3 135,160.8 165,145 195,129.3 225,113.5 255,103 285,103 315,118.8 345,134.5 375,155.5 405,166" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="75" cy="171.3" r="3" fill="#dc2626"/><circle cx="105" cy="171.3" r="3" fill="#dc2626"/><circle cx="135" cy="160.8" r="3" fill="#dc2626"/><circle cx="165" cy="145" r="3" fill="#dc2626"/><circle cx="195" cy="129.3" r="3" fill="#dc2626"/><circle cx="225" cy="113.5" r="3" fill="#dc2626"/><circle cx="255" cy="103" r="3" fill="#dc2626"/><circle cx="285" cy="103" r="3" fill="#dc2626"/><circle cx="315" cy="118.8" r="3" fill="#dc2626"/><circle cx="345" cy="134.5" r="3" fill="#dc2626"/><circle cx="375" cy="155.5" r="3" fill="#dc2626"/><circle cx="405" cy="166" r="3" fill="#dc2626"/><text x="16" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#b91c1c" transform="rotate(-90 16 145)">Temperature (°C)</text><text x="462" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1d4ed8" transform="rotate(90 462 145)">Rainfall (mm)</text><text x="240" y="290" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Month (red line = temperature, blue bars = rainfall)</text></svg>`;
const graphArcticF = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for Station F: temperature from −29 °C in February to 6 °C in July; precipitation bars between 7 and 24 mm, highest in August"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><text x="240" y="20" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Station F (illustrative data, about 70° N)</text><line x1="60" y1="250" x2="420" y2="250" stroke="#e5e7eb"/><text x="54" y="254" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">−30</text><text x="426" y="254" font-size="11" font-family="sans-serif" fill="#1d4ed8">0</text><line x1="60" y1="197.5" x2="420" y2="197.5" stroke="#e5e7eb"/><text x="54" y="201.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">−20</text><text x="426" y="201.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">10</text><line x1="60" y1="145" x2="420" y2="145" stroke="#e5e7eb"/><text x="54" y="149" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">−10</text><text x="426" y="149" font-size="11" font-family="sans-serif" fill="#1d4ed8">20</text><line x1="60" y1="92.5" x2="420" y2="92.5" stroke="#e5e7eb"/><text x="54" y="96.5" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">0</text><text x="426" y="96.5" font-size="11" font-family="sans-serif" fill="#1d4ed8">30</text><line x1="60" y1="40" x2="420" y2="40" stroke="#e5e7eb"/><text x="54" y="44" font-size="11" text-anchor="end" font-family="sans-serif" fill="#b91c1c">10</text><text x="426" y="44" font-size="11" font-family="sans-serif" fill="#1d4ed8">40</text><rect x="65" y="208" width="20" height="42" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="75" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="95" y="213.3" width="20" height="36.7" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="105" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">F</text><rect x="125" y="208" width="20" height="42" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="135" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><rect x="155" y="213.3" width="20" height="36.7" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="165" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><rect x="185" y="208" width="20" height="42" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="195" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><rect x="215" y="187" width="20" height="63" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="225" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="245" y="145" width="20" height="105" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="255" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">J</text><rect x="275" y="124" width="20" height="126" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="285" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><rect x="305" y="171.3" width="20" height="78.7" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="315" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">S</text><rect x="335" y="187" width="20" height="63" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="345" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">O</text><rect x="365" y="202.8" width="20" height="47.2" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="375" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">N</text><rect x="395" y="208" width="20" height="42" fill="#93c5fd" stroke="#1d4ed8" stroke-width="0.8"/><text x="405" y="265" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><line x1="60" y1="92.5" x2="420" y2="92.5" stroke="#334155" stroke-dasharray="4 3"/><line x1="60" y1="40" x2="60" y2="250" stroke="#334155"/><line x1="420" y1="40" x2="420" y2="250" stroke="#334155"/><line x1="60" y1="250" x2="420" y2="250" stroke="#334155"/><polyline points="75,239.5 105,244.8 135,229 165,187 195,124 225,82 255,61 285,71.5 315,103 345,155.5 375,202.8 405,229" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="75" cy="239.5" r="3" fill="#dc2626"/><circle cx="105" cy="244.8" r="3" fill="#dc2626"/><circle cx="135" cy="229" r="3" fill="#dc2626"/><circle cx="165" cy="187" r="3" fill="#dc2626"/><circle cx="195" cy="124" r="3" fill="#dc2626"/><circle cx="225" cy="82" r="3" fill="#dc2626"/><circle cx="255" cy="61" r="3" fill="#dc2626"/><circle cx="285" cy="71.5" r="3" fill="#dc2626"/><circle cx="315" cy="103" r="3" fill="#dc2626"/><circle cx="345" cy="155.5" r="3" fill="#dc2626"/><circle cx="375" cy="202.8" r="3" fill="#dc2626"/><circle cx="405" cy="229" r="3" fill="#dc2626"/><text x="16" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#b91c1c" transform="rotate(-90 16 145)">Temperature (°C)</text><text x="462" y="145" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1d4ed8" transform="rotate(90 462 145)">Rainfall (mm)</text><text x="240" y="290" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Month (red line = temperature, blue bars = rainfall)</text></svg>`;
const tableA =
  "| Month | J | F | M | A | M | J | J | A | S | O | N | D |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| Temperature (°C) | 14 | 16 | 20 | 25 | 29 | 32 | 33 | 33 | 30 | 25 | 19 | 15 |\n| Rainfall (mm) | 3 | 2 | 2 | 1 | 1 | 0 | 0 | 1 | 1 | 2 | 3 | 4 |";
const tableSingapore =
  "| Month | J | F | M | A | M | J | J | A | S | O | N | D |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| Temperature (°C) | 26.5 | 27.0 | 27.5 | 28.0 | 28.5 | 28.5 | 28.0 | 28.0 | 27.5 | 27.5 | 27.0 | 26.5 |\n| Rainfall (mm) | 240 | 115 | 175 | 165 | 170 | 155 | 155 | 170 | 145 | 170 | 255 | 320 |";
const tableC =
  "| Month | J | F | M | A | M | J | J | A | S | O | N | D |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| Temperature (°C) | −1 | −5 | −10 | −14 | −16 | −17 | −18 | −19 | −17 | −13 | −6 | −2 |\n| Precipitation (mm) | 10 | 12 | 15 | 14 | 13 | 12 | 11 | 12 | 11 | 10 | 9 | 8 |";
const tableX =
  "| Month | J | F | M | A | M | J | J | A | S | O | N | D |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| Temperature (°C) | 21 | 21 | 20 | 18 | 16 | 15 | 14 | 14 | 15 | 16 | 18 | 20 |\n| Rainfall (mm) | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |";
const tableE =
  "| Month | J | F | M | A | M | J | J | A | S | O | N | D |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| Temperature (°C) | 5 | 5 | 7 | 10 | 13 | 16 | 18 | 18 | 15 | 12 | 8 | 6 |\n| Rainfall (mm) | 55 | 40 | 40 | 45 | 50 | 45 | 45 | 50 | 50 | 70 | 60 | 55 |";
const tableF =
  "| Month | J | F | M | A | M | J | J | A | S | O | N | D |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| Temperature (°C) | −28 | −29 | −26 | −18 | −6 | 2 | 6 | 4 | −2 | −12 | −21 | −26 |\n| Precipitation (mm) | 8 | 7 | 8 | 7 | 8 | 12 | 20 | 24 | 15 | 12 | 9 | 8 |";
const tableHigh =
  "| Month | J | F | M | A | M | J | J | A | S | O | N | D |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| Temperature (°C) | 14 | 14 | 14 | 14 | 14 | 13 | 13 | 13 | 14 | 14 | 14 | 14 |\n| Rainfall (mm) | 80 | 90 | 110 | 120 | 90 | 40 | 20 | 30 | 60 | 100 | 90 | 80 |";
const sunAngle = `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two beams of sunlight of equal width. One arrives vertically and heats a small patch of ground; the other arrives at a low angle of 30 degrees and spreads over a patch twice as wide"><rect x="0" y="0" width="480" height="260" fill="#ffffff"/><polygon points="80,40 120,40 120,200 80,200" fill="#fde68a" stroke="#b45309"/><polygon points="144,110 224,110 380,200 300,200" fill="#fde68a" stroke="#b45309"/><line x1="20" y1="200" x2="460" y2="200" stroke="#334155" stroke-width="2"/><line x1="80" y1="200" x2="120" y2="200" stroke="#dc2626" stroke-width="6"/><line x1="300" y1="200" x2="380" y2="200" stroke="#dc2626" stroke-width="6"/><text x="100" y="30" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Sun high in the sky</text><text x="184" y="100" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Sun low in the sky (30°)</text><text x="100" y="222" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Near the equator</text><text x="100" y="238" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">energy on a small area</text><text x="340" y="222" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Near the poles</text><text x="340" y="238" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">same energy over twice the area</text><text x="330" y="40" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Both beams carry the same amount of energy</text></svg>`;

export const mcqPapers: Paper[] = [
  {
    id: "extreme-climates-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "extreme-climates-m1-q01",
        question: "Which statement best describes an **extreme environment**?",
        options: [
          "A place where conditions such as temperature, rainfall or altitude make it very difficult for people, plants and animals to survive",
          "Any place where the temperature is above 30 °C",
          "A place where no living thing can survive at all",
          "A place that has had a natural disaster in the last year",
        ],
        answerIndex: 0,
        explanation:
          "Extreme environments are defined by harsh conditions — too hot, too cold, too dry or too high — that make survival difficult, not impossible. \"Above 30 °C\" is the misconception that extreme means hot: Antarctica and the Himalayas are extreme because they are cold. Plenty of life survives in extreme places (camels, emperor penguins, yaks), so \"no living thing\" is wrong too.",
        difficulty: "warmup",
        guideRef: "what-is-extreme",
        hints: ["Think of Antarctica, the Sahara and the Himalayas. What do they have in common?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q02",
        question: "A **hot desert** is usually defined as a hot place that receives less than how much rain in a year?",
        options: ["500 mm", "250 mm", "25 mm", "1,000 mm"],
        answerIndex: 1,
        explanation:
          "The standard definition is under 250 mm of rain a year. 25 mm is far too strict — most of the Sahara would not count — although some extremely dry places such as parts of the Atacama do get less than that. For comparison, Singapore gets roughly ten times 250 mm.",
        difficulty: "warmup",
        guideRef: "hot-desert-climate",
        hints: ["It is a quarter of a metre of rain."],
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q03",
        question: "Antarctica is classed as a **desert**. Why?",
        options: [
          "There is sand beneath the ice sheet",
          "It is extremely cold all year",
          "It receives very little precipitation each year",
          "No plants can grow there",
        ],
        answerIndex: 2,
        explanation:
          "A desert is defined by **low precipitation**, not by heat or sand. Much of inland Antarctica receives less than 50 mm of precipitation a year (as water). Being cold is true but is not what makes it a desert — plenty of cold places (such as Iceland's mountains) are wet.",
        difficulty: "warmup",
        guideRef: "polar-climate",
        hints: ["What single measurement decides whether somewhere is a desert?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q04",
        question: "On a standard climate graph, how is **rainfall** shown?",
        options: [
          "As a line, read against the temperature axis",
          "As a pie chart beside the graph",
          "As dots plotted at the end of each month",
          "As bars, read against the rainfall (mm) axis",
        ],
        answerIndex: 3,
        explanation:
          "Rainfall is shown as **bars** (one per month) read against the rainfall axis in mm. Temperature is the **line** read against the °C axis. Which side each axis sits on varies between graphs, so check the labels — reading a bar against the temperature axis is the most common climate-graph slip.",
        difficulty: "warmup",
        guideRef: "climate-graphs",
        hints: ["Rainfall is a total for each month, so it suits a block shape."],
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q05",
        question: "The climate graph shows Station A. It was drawn from this table:\n\n" + tableA + "\n\nWhat is the **annual temperature range** at Station A?",
        diagram: graphDesertA,
        options: ["33 °C", "19 °C", "47 °C", "14 °C"],
        answerIndex: 1,
        explanation:
          "Annual range = highest monthly temperature − lowest = 33 − 14 = 19 °C. Adding them (33 + 14 = 47) is the classic slip; 33 °C and 14 °C are just the maximum and minimum on their own.",
        difficulty: "core",
        guideRef: "climate-graphs",
        hints: ["Find the hottest and the coldest month.", "Range is a difference, so subtract."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q06",
        question: "Using the same table for Station A:\n\n" + tableA + "\n\nWhat is Station A's **total annual rainfall**?",
        diagram: graphDesertA,
        options: ["20 mm", "4 mm", "about 1.7 mm", "33 mm"],
        answerIndex: 0,
        explanation:
          "Add all twelve bars: 3 + 2 + 2 + 1 + 1 + 0 + 0 + 1 + 1 + 2 + 3 + 4 = 20 mm — far below 250 mm, so Station A has a hot desert climate. 4 mm is only the wettest month (December), and about 1.7 mm is the monthly *average* (20 ÷ 12), not the total.",
        difficulty: "core",
        guideRef: "climate-graphs",
        hints: ["Total means add up every month.", "Count carefully — two months have no rain at all."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q07",
        question: "Why are most of the world's hot deserts found at roughly **15–30° north and south** of the equator?",
        options: [
          "These latitudes are closest to the Sun",
          "Warm air rises strongly here, cools and forms clouds",
          "Winds blow sand towards these latitudes from the equator",
          "Air that rose at the equator sinks here, warming as it falls and creating high pressure with clear skies",
        ],
        answerIndex: 3,
        explanation:
          "Air rises at the equator (giving the rainforest its rain), spreads towards the poles and **sinks** at about 30°. Sinking air warms and dries, so clouds cannot form — high pressure and very little rain. \"Air rises and forms clouds\" describes the equator, the opposite process.",
        difficulty: "core",
        guideRef: "hot-desert-climate",
        hints: ["Is the air rising or sinking over a desert?", "What happens to clouds when air sinks and warms?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q08",
        question: "Hot deserts have a very large **diurnal (daily) temperature range**. Which is the main reason?",
        options: [
          "The Sun sets much earlier in deserts than elsewhere",
          "Sand gives off heat in the day and absorbs cold at night",
          "Clear skies and dry air let heat escape quickly into space at night",
          "Deserts are all at high altitude, so nights are always cold",
        ],
        answerIndex: 2,
        explanation:
          "With no cloud \"blanket\" and very little water vapour in the air, the heat the ground gained in the day radiates away rapidly after sunset, so temperatures plunge. \"Sand absorbs cold\" is a misconception — cold is just the absence of heat; the ground is *losing* heat.",
        difficulty: "core",
        guideRef: "hot-desert-climate",
        hints: ["Think about what clouds do at night.", "Compare a cloudy night in Singapore with a clear desert night."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q09",
        question: "The diagram shows two beams of sunlight carrying the same amount of energy. Use it to explain **why the poles are cold**.",
        diagram: sunAngle,
        options: [
          "The poles are much further from the Sun than the equator is",
          "Ice at the poles produces cold air that blocks sunlight",
          "Near the poles the Sun is low in the sky, so the same energy is spread over a larger area",
          "The Earth's core is cooler underneath the poles",
        ],
        answerIndex: 2,
        explanation:
          "At high latitudes the Sun's rays hit the ground at a low angle, so each unit of energy is spread over a bigger area (twice the area at 30° in the diagram) and heats it less. The distance idea is a misconception: the poles are only a few thousand km further from the Sun, which is nothing compared with about 150 million km.",
        difficulty: "core",
        guideRef: "polar-climate",
        hints: ["Compare the red patches on the ground.", "Same energy, bigger area — what happens to the heating per square metre?"],
        strategy: "Read the diagram first",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q10",
        question: "A town at **500 m** above sea level has a temperature of **24 °C**. Using a lapse rate of 6.5 °C per 1,000 m, estimate the temperature at the top of a nearby mountain at **2,500 m**.",
        options: ["37.0 °C", "17.5 °C", "7.75 °C", "11.0 °C"],
        answerIndex: 3,
        explanation:
          "The climb is 2,500 − 500 = 2,000 m. Drop = 2 × 6.5 = 13 °C, so 24 − 13 = 11 °C. 7.75 °C comes from using the full 2,500 m instead of the height *difference*; 37 °C wrongly adds the change; 17.5 °C only allows for 1,000 m.",
        difficulty: "core",
        guideRef: "mountain-climate",
        hints: ["How many metres do you actually climb?", "How many lots of 1,000 m is that?", "Temperature goes down as you go up."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q11",
        question: "Why is the **leeward** side of a mountain range often much drier than the windward side?",
        options: [
          "The air has already lost most of its moisture on the windward side, and it warms as it sinks, so clouds do not form",
          "The wind never reaches the leeward side of a mountain",
          "The leeward side is always higher than the windward side",
          "Trees on the windward side block the clouds",
        ],
        answerIndex: 0,
        explanation:
          "Moist air is forced up the windward side, cools, condenses and drops relief rain. When it descends the other side it is drier and warms up, so it can hold its remaining moisture — a **rain shadow**. The wind does reach the leeward side; it just carries little water by then.",
        difficulty: "core",
        guideRef: "mountain-climate",
        hints: ["Follow a parcel of air over the mountain.", "Where did its water vapour go?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q12",
        question: "Which pair of places are **both** extreme environments?",
        options: [
          "The Sahara and central London",
          "Antarctica and the Himalayas",
          "The Atacama Desert and central Paris",
          "Central Singapore and the Arctic",
        ],
        answerIndex: 1,
        explanation:
          "Antarctica (polar) and the Himalayas (high mountain) are both extreme. Each other pair contains one extreme place and one city with a mild or comfortable climate where millions live easily.",
        difficulty: "core",
        guideRef: "what-is-extreme",
        hints: ["Check both places in each pair.", "A big, comfortable city is not an extreme environment."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q13",
        question:
          "Compare Station A (hot desert) with Singapore (graph shown, approximate averages).\n\n**Station A**\n\n" +
          tableA +
          "\n\n**Singapore**\n\n" +
          tableSingapore +
          "\n\nWhich statement is supported by the data?",
        diagram: graphSingapore,
        options: [
          "Station A is hotter than Singapore in every month",
          "Both places have at least one month with under 50 mm of rain",
          "Singapore's hottest month is hotter than Station A's hottest month",
          "Singapore's total rainfall is more than 100 times Station A's, but its annual temperature range is much smaller",
        ],
        answerIndex: 3,
        explanation:
          "Singapore's total is 2,235 mm against 20 mm (2,235 ÷ 20 ≈ 112 times), and its range is 28.5 − 26.5 = 2 °C against Station A's 19 °C. Station A is *cooler* than Singapore from October to April — for example 14 °C against 26.5 °C in January — and its hottest month, at 33 °C, beats Singapore's 28.5 °C. Singapore's driest month (February) still has 115 mm.",
        difficulty: "challenge",
        guideRef: "climate-graphs",
        hints: ["Test each statement against the numbers — one counter-example kills it.", "Work out both totals and both ranges."],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q14",
        question: "As Arctic sea ice melts, the Arctic warms even faster. Which explanation is correct?",
        options: [
          "Ice has a lower albedo than water, so losing ice means less sunlight is absorbed",
          "Darker ocean water has a lower albedo than white ice, so it absorbs more solar energy, which melts more ice",
          "Melting ice releases heat that was stored inside it",
          "With less ice, the Sun's rays hit the Arctic at a steeper angle",
        ],
        answerIndex: 1,
        explanation:
          "Snow and ice reflect most sunlight (high albedo); dark open water absorbs most of it (low albedo). So melting exposes water that absorbs more energy, causing more melting — a **positive feedback**. The option saying ice has a lower albedo has it backwards, and melting actually *absorbs* heat rather than releasing it. The Sun's angle depends on latitude and season, not on ice.",
        difficulty: "challenge",
        guideRef: "polar-climate",
        hints: ["Which reflects more sunlight: white ice or dark sea?", "What happens to the energy that is not reflected?", "Look for a loop: melting → ? → more melting."],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m1-q15",
        question: "A town at sea level has an average temperature of **26 °C**. A town at the same latitude in nearby mountains averages **13 °C**. Using 6.5 °C per 1,000 m, about how high is the mountain town?",
        options: ["2,000 m", "1,300 m", "845 m", "4,000 m"],
        answerIndex: 0,
        explanation:
          "Temperature difference = 26 − 13 = 13 °C. Each 1,000 m gives 6.5 °C, so 13 ÷ 6.5 = 2 lots of 1,000 m = 2,000 m. 4,000 m comes from dividing 26 (not the difference) by 6.5; 1,300 m wrongly assumes 1 °C per 100 m.",
        difficulty: "challenge",
        guideRef: "mountain-climate",
        hints: ["Work backwards from the temperature drop.", "How many 6.5 °C steps fit into the drop?"],
        strategy: "Work backwards",
      },
    ],
  },
  {
    id: "extreme-climates-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "extreme-climates-m2-q01",
        question: "Which of these is a **high mountain** extreme environment?",
        options: ["The Sahara", "The Andes", "The Great Barrier Reef", "The Thames Valley"],
        answerIndex: 1,
        explanation:
          "The Andes run down the west of South America with many peaks above 6,000 m. The Sahara is extreme too, but it is a hot desert, not a mountain environment.",
        difficulty: "warmup",
        guideRef: "what-is-extreme",
        hints: ["Which is a mountain range?"],
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q02",
        question: "Which of these is a **hot** desert?",
        options: ["Antarctica", "Siberia", "The Arabian Desert", "The Himalayas"],
        answerIndex: 2,
        explanation:
          "The Arabian Desert lies at roughly 15–30° N, in the belt of sinking air. Antarctica is a desert too, but a cold (polar) one.",
        difficulty: "warmup",
        guideRef: "hot-desert-climate",
        hints: ["Two conditions: dry AND hot."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q03",
        question: "Near the North Pole in midsummer, what does the Sun do?",
        options: [
          "It is directly overhead at midday",
          "It rises and sets twice a day",
          "It never rises above the horizon",
          "It stays above the horizon for 24 hours a day",
        ],
        answerIndex: 3,
        explanation:
          "Because the Earth is tilted, the North Pole leans towards the Sun in June, giving **polar day** — 24-hour daylight. The Sun stays low, though; it is never overhead at the pole. \"Never rises\" describes midwinter (polar night).",
        difficulty: "warmup",
        guideRef: "polar-climate",
        hints: ["Think 'land of the midnight Sun'."],
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q04",
        question: "As you climb a mountain, what generally happens to the air temperature?",
        options: [
          "It falls by about 6.5 °C for every 1,000 m",
          "It rises by about 6.5 °C for every 1,000 m, because you are closer to the Sun",
          "It falls by about 65 °C for every 1,000 m",
          "It stays the same",
        ],
        answerIndex: 0,
        explanation:
          "Temperature drops by about 6.5 °C per 1,000 m (the **lapse rate**). Being a few kilometres closer to the Sun makes no difference — the atmosphere is heated mainly from the ground, so the air gets colder further from it.",
        difficulty: "warmup",
        guideRef: "mountain-climate",
        hints: ["Why do high mountains have snow even near the equator?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q05",
        question: "The graph shows Station C on the Antarctic coast, drawn from this table:\n\n" + tableC + "\n\nWhat is the annual temperature range?",
        diagram: graphPolarC,
        options: ["−18 °C", "−20 °C", "18 °C", "−1 °C"],
        answerIndex: 2,
        explanation:
          "Range = highest − lowest = −1 − (−19) = −1 + 19 = 18 °C. A range is a difference, so it is always positive. −20 comes from adding −1 and −19; −1 °C is just the warmest month.",
        difficulty: "core",
        guideRef: "climate-graphs",
        hints: ["Highest is −1 °C (January). Lowest is −19 °C (August).", "Subtracting a negative is the same as adding: −1 − (−19) = −1 + 19."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q06",
        question: "Station C's precipitation adds up to 137 mm a year.\n\n" + tableC + "\n\nWhich conclusion is correct?",
        diagram: graphPolarC,
        options: [
          "It cannot be a desert because it is so cold",
          "It is a polar (cold) desert, because it receives under 250 mm of precipitation a year",
          "It is wet, because some precipitation falls in every month",
          "It is a hot desert, because precipitation is under 250 mm",
        ],
        answerIndex: 1,
        explanation:
          "Under 250 mm a year makes it a desert; temperatures below 0 °C all year make it a **cold/polar desert**. Having some precipitation every month does not make a place wet — the *amounts* are tiny (8–15 mm). It cannot be a hot desert with every month below freezing.",
        difficulty: "core",
        guideRef: "polar-climate",
        hints: ["What decides whether somewhere is a desert?", "Then decide hot or cold from the temperature line."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q07",
        question: "Antarctica is much colder than the Arctic. Which is the best explanation?",
        options: [
          "Antarctica is a high, ice-covered continent, while the Arctic is mostly frozen ocean, and the sea beneath the ice holds heat",
          "Antarctica is much further from the Sun than the Arctic",
          "Only the Arctic gets 24-hour daylight in summer",
          "Antarctica's ice has a lower albedo than Arctic ice",
        ],
        answerIndex: 0,
        explanation:
          "Antarctica's ice sheet is about 2 km thick on average, so much of it is very high (temperature falls with height), and land loses heat faster than ocean. The Arctic Ocean under its floating ice releases stored heat. Both poles get polar day in their summer, so that option is false.",
        difficulty: "core",
        guideRef: "polar-climate",
        hints: ["Is each pole land or sea?", "Link height to temperature."],
        strategy: "Compare and contrast",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q08",
        question: "Which combination best explains why the **Atacama Desert** in northern Chile is one of the driest places on Earth?",
        options: [
          "Rising air near the equator and a warm ocean current offshore",
          "Its high latitude, close to Antarctica",
          "Strong winds that blow every cloud out over the Pacific",
          "Sinking air at about 20–25° S, a cold ocean current offshore and the Andes blocking moist air from the east",
        ],
        answerIndex: 3,
        explanation:
          "Three factors combine: subtropical high pressure (sinking air), the cold Humboldt Current (which cools the air from below so it cannot rise and rain) and the Andes, which put the Atacama in a rain shadow for moist air from the east. It lies at roughly 20–25° S — tropical latitudes, nowhere near Antarctica.",
        difficulty: "core",
        guideRef: "hot-desert-climate",
        hints: ["There is more than one cause.", "Think: pressure, ocean, mountains."],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q09",
        question: "The graph shows Station E, drawn from this table:\n\n" + tableE + "\n\nWhich statement best describes the rainfall?",
        diagram: graphTemperate,
        options: [
          "Most rain falls in summer (June to August)",
          "The annual total is under 250 mm, so it is a desert",
          "Rainfall peaks in December",
          "Rain falls in every month, ranging from 40 mm to 70 mm, with a peak in October",
        ],
        answerIndex: 3,
        explanation:
          "Every month has rain, the lowest being 40 mm (February and March) and the highest 70 mm (October). June to August are among the drier months (45, 45, 50 mm), and the total is 605 mm — far too wet for a desert. December has 55 mm, not the peak.",
        difficulty: "core",
        guideRef: "climate-graphs",
        hints: ["Find the tallest and the shortest bars.", "A good description quotes figures with months."],
        strategy: "TEA (Trend, Evidence, Anomaly)",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q10",
        question: "Using the same table for Station E:\n\n" + tableE + "\n\nWhat is the **total annual rainfall**?",
        diagram: graphTemperate,
        options: ["605 mm", "70 mm", "about 50 mm", "650 mm"],
        answerIndex: 0,
        explanation:
          "55 + 40 + 40 + 45 + 50 + 45 + 45 + 50 + 50 + 70 + 60 + 55 = 605 mm. 70 mm is only the wettest month; about 50 mm is the monthly average (605 ÷ 12 ≈ 50.4).",
        difficulty: "core",
        guideRef: "climate-graphs",
        hints: ["Add the twelve bars.", "Add them in pairs or running totals to avoid slips."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q11",
        question: "Which sequence correctly describes **relief rainfall**?",
        options: [
          "Air sinks down a mountain → cools → clouds form → rain on the leeward side",
          "Moist air is forced up a mountain → it cools → water vapour condenses into clouds → rain on the windward side",
          "Moist air rises up a mountain → it warms → water vapour condenses → rain on the leeward side",
          "Dry air rises → water evaporates → rain falls evenly on both sides",
        ],
        answerIndex: 1,
        explanation:
          "Rising air cools; cooler air holds less water vapour, so vapour condenses into cloud and rain falls on the windward side. Rising air does not warm, so the version with warming air is wrong, and sinking air warms rather than cools.",
        difficulty: "core",
        guideRef: "mountain-climate",
        hints: ["Rising air → cooling → ?", "Which side does the wind hit first?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q12",
        question: "Which is a good reason why extreme environments **matter** to the rest of the world?",
        options: [
          "Nobody lives in them, so they cannot be damaged",
          "They have the highest population densities on Earth",
          "They hold important resources such as minerals, oil and fresh water stored as ice, and they influence global climate",
          "They have no effect on the world's climate",
        ],
        answerIndex: 2,
        explanation:
          "The Antarctic ice sheet stores most of the world's fresh water, polar ice reflects sunlight and helps regulate global temperatures, and deserts and the Arctic hold valuable minerals and oil. People do live in many extreme environments (Inuit, Sherpa, Bedouin communities), and they can be damaged by tourism, mining and climate change.",
        difficulty: "core",
        guideRef: "what-is-extreme",
        hints: ["Think resources and climate.", "Are extreme places really empty and untouched?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q13",
        question: "On the same day a desert town records a maximum of **42 °C** and a minimum of **18 °C**. Singapore records **32 °C** and **25 °C**. How much **larger** is the desert town's diurnal range than Singapore's?",
        options: ["17 °C", "10 °C", "24 °C", "7 °C"],
        answerIndex: 0,
        explanation:
          "Desert diurnal range = 42 − 18 = 24 °C. Singapore's = 32 − 25 = 7 °C. Difference = 24 − 7 = 17 °C. 10 °C compares only the two maximums; 24 °C and 7 °C are the individual ranges, not the difference between them.",
        difficulty: "challenge",
        guideRef: "hot-desert-climate",
        hints: ["Work out each place's range first.", "Then compare the two ranges."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q14",
        question: "In the Alps (Northern Hemisphere), villages and farms are often on **south-facing** slopes. Why?",
        options: [
          "South-facing slopes are higher, so they are closer to the Sun",
          "South-facing slopes are always on the windward side, so they get more rain for crops",
          "South-facing slopes face the Sun, so they get more direct sunlight and are warmer",
          "North-facing slopes have thinner air",
        ],
        answerIndex: 2,
        explanation:
          "This is **aspect**. North of the Tropic of Cancer the midday Sun is always in the southern sky, so south-facing slopes receive sunlight at a steeper angle and for longer — warmer for homes and crops. In the Southern Hemisphere (e.g. the Andes of Chile) it is the north-facing slopes that are sunnier. Height and air thickness do not depend on which way a slope faces.",
        difficulty: "challenge",
        guideRef: "mountain-climate",
        hints: ["Where is the Sun at midday from the Alps?", "Link this to the sun-angle idea from polar climates."],
        strategy: "Think at different scales",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m2-q15",
        question: "A weather station's warmest month is **January (21 °C)**, its coldest is **July and August (14 °C)** and its total rainfall is about **3 mm** a year. Where is it most likely to be?",
        options: [
          "A hot desert at about 25° N in North Africa",
          "On the coast of a desert at about 23° S, such as northern Chile",
          "An Antarctic coastal research station",
          "An equatorial rainforest",
        ],
        answerIndex: 1,
        explanation:
          "About 3 mm a year means desert. Warmest in January means the Southern Hemisphere, which rules out North Africa (warmest in July). A mild 14–21 °C with a small range fits a coast cooled by a cold current — the Atacama coast. Antarctica would be below freezing; a rainforest would have thousands of mm of rain.",
        difficulty: "challenge",
        guideRef: "climate-graphs",
        hints: ["Rainfall tells you the type of climate.", "The warmest month tells you the hemisphere.", "Are the temperatures hot, mild or freezing?"],
        strategy: "Eliminate options",
      },
    ],
  },
  {
    id: "extreme-climates-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "extreme-climates-m3-q01",
        question: "Which is the **coldest** continent?",
        options: ["Asia", "Europe", "Antarctica", "North America"],
        answerIndex: 2,
        explanation:
          "Antarctica is the coldest, driest and windiest continent and, on average, the highest. The lowest air temperature measured by a weather station, about −89 °C, was recorded there at Vostok in 1983.",
        difficulty: "warmup",
        guideRef: "what-is-extreme",
        hints: ["Which continent sits over the South Pole?"],
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q02",
        question: "**High pressure** is usually linked with which weather?",
        options: ["Rising air and heavy rain", "Thick cloud all day", "Strong tropical storms", "Sinking air, clear skies and little rain"],
        answerIndex: 3,
        explanation:
          "In high pressure, air sinks and warms, so clouds cannot form — clear skies and dry weather, as over hot deserts. Rising air, cloud, heavy rain and storms go with **low** pressure.",
        difficulty: "warmup",
        guideRef: "hot-desert-climate",
        hints: ["Think about the weather over the Sahara."],
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q03",
        question: "What is the **annual temperature range** of a place?",
        options: [
          "The difference between the highest and lowest monthly average temperatures",
          "The average of all twelve monthly temperatures",
          "The total of the twelve monthly temperatures",
          "The hottest temperature ever recorded there",
        ],
        answerIndex: 0,
        explanation:
          "Range = highest monthly average − lowest monthly average. The average of the twelve months is the *mean annual temperature* — a different statistic.",
        difficulty: "warmup",
        guideRef: "climate-graphs",
        hints: ["A range measures how spread out something is."],
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q04",
        question: "What does **albedo** mean?",
        options: [
          "The amount of rain a surface absorbs",
          "The proportion of sunlight a surface reflects",
          "The temperature of a surface at midday",
          "The height of a place above sea level",
        ],
        answerIndex: 1,
        explanation:
          "Albedo is how reflective a surface is. Fresh snow reflects most incoming sunlight (very high albedo), while dark ocean reflects only a small fraction — one reason the poles stay cold.",
        difficulty: "warmup",
        guideRef: "polar-climate",
        hints: ["Why does snow glare so brightly?"],
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q05",
        question: "The graph shows Station F, drawn from this table:\n\n" + tableF + "\n\nWhat is the **annual temperature range**?",
        diagram: graphArcticF,
        options: ["23 °C", "−35 °C", "29 °C", "35 °C"],
        answerIndex: 3,
        explanation:
          "Highest = 6 °C (July). Lowest = −29 °C (February). Range = 6 − (−29) = 6 + 29 = 35 °C. 23 comes from adding 6 and −29 (= −23) and dropping the sign; a range is never negative.",
        difficulty: "core",
        guideRef: "climate-graphs",
        hints: ["Find the highest and lowest points on the red line.", "6 − (−29): subtracting a negative means adding."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q06",
        question: "Using Station F's data:\n\n" + tableF + "\n\nWhich statement is supported by the data?",
        diagram: graphArcticF,
        options: [
          "Most precipitation falls in winter",
          "Total precipitation is over 250 mm a year",
          "Average temperatures are above 0 °C in only three months, June to August",
          "It is in the Southern Hemisphere",
        ],
        answerIndex: 2,
        explanation:
          "June, July and August, at 2, 6 and 4 °C, are the only months above 0 °C. Precipitation peaks in summer (24 mm in August) and totals 138 mm — a polar desert. The warmest month is July, so it is in the Northern Hemisphere.",
        difficulty: "core",
        guideRef: "polar-climate",
        hints: ["Check each statement against the table.", "Which months are above the dashed 0 °C line?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q07",
        question: "Why are **daytime** temperatures so high in hot deserts?",
        options: [
          "Deserts are closer to the Sun than other places",
          "Clear skies let strong sunlight reach the ground, and dry sand and rock heat up quickly",
          "Hot winds blow from the equator every day",
          "Sand produces its own heat",
        ],
        answerIndex: 1,
        explanation:
          "Under high pressure there are almost no clouds, so intense sunlight from a high Sun reaches the ground. Dry sand and rock have no water to evaporate, so they heat rapidly and warm the air above. Distance from the Sun is not the reason.",
        difficulty: "core",
        guideRef: "hot-desert-climate",
        hints: ["What is missing from the sky?", "What happens to dry ground in strong sunshine?"],
        strategy: "Cause → process → effect",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q08",
        question: "Climbers say the air is \"thin\" on high mountains. What does this mean?",
        options: [
          "Air pressure is lower, so each breath contains fewer oxygen molecules",
          "The percentage of oxygen in the air falls to about half",
          "Fewer plants grow, so less oxygen is produced",
          "The cold destroys oxygen in the air",
        ],
        answerIndex: 0,
        explanation:
          "There is less air above pressing down, so air pressure and density fall. Oxygen is still about 21% of the air, but each breath holds fewer molecules — on Everest's summit roughly a third as many as at sea level. The \"percentage falls\" option is a common misconception.",
        difficulty: "core",
        guideRef: "mountain-climate",
        hints: ["Think about the weight of air above you.", "Does the *mix* of gases change, or the amount?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q09",
        question: "Mount Everest is **8,849 m** high. If the temperature at sea level nearby were **30 °C**, estimate the summit temperature using 6.5 °C per 1,000 m.",
        options: ["About −28 °C", "About −58 °C", "About 24 °C", "About 88 °C"],
        answerIndex: 0,
        explanation:
          "Drop = 8.849 × 6.5 ≈ 57.5 °C. 30 − 57.5 ≈ −27.5, so about −28 °C. −58 °C is the size of the drop, not the final temperature; 88 °C adds the drop instead of subtracting; 24 °C only allows for 1,000 m.",
        difficulty: "core",
        guideRef: "mountain-climate",
        hints: ["How many thousands of metres is 8,849 m?", "Multiply by 6.5, then subtract from 30."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q10",
        question: "Which set of challenges best describes a **high mountain** environment?",
        options: [
          "High temperatures all year and very high humidity",
          "Low temperatures, thin air and steep slopes",
          "Very low rainfall and scorching days",
          "Months of darkness and sea ice",
        ],
        answerIndex: 1,
        explanation:
          "Mountains are cold (lapse rate), have thin air (low pressure) and steep, unstable slopes. Hot and humid fits a rainforest; scorching and dry fits a hot desert; months of darkness and sea ice fit the polar regions.",
        difficulty: "core",
        guideRef: "what-is-extreme",
        hints: ["Match each set of challenges to a type of extreme environment.", "Which two problems does altitude cause, apart from the terrain?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q11",
        question: "The graph shows Station X, drawn from this table:\n\n" + tableX + "\n\nWhich month is warmest, and what does that suggest?",
        diagram: graphMystery,
        options: [
          "July, so it is in the Northern Hemisphere",
          "January, so it is in the Northern Hemisphere",
          "January (with February), so it is probably in the Southern Hemisphere",
          "August, so it is on the equator",
        ],
        answerIndex: 2,
        explanation:
          "January and February are warmest at 21 °C and July–August coldest at 14 °C. Summer in December–February means the Southern Hemisphere. In the Northern Hemisphere July is usually warmest; at the equator there is hardly any seasonal change at all.",
        difficulty: "core",
        guideRef: "climate-graphs",
        hints: ["Find the highest point on the line.", "When is summer south of the equator?"],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q12",
        question: "Which statement about deserts is correct?",
        options: [
          "All deserts are covered in sand dunes",
          "Deserts are hot both day and night",
          "A desert is any place with temperatures above 30 °C",
          "Deserts are defined by low precipitation, so some deserts are very cold",
        ],
        answerIndex: 3,
        explanation:
          "A desert is defined by low precipitation (under 250 mm a year), so Antarctica and parts of the Arctic are cold deserts. Most of the Sahara is rock and gravel plains, not dunes, and desert nights can be very cold because of the large diurnal range.",
        difficulty: "core",
        guideRef: "hot-desert-climate",
        hints: ["What is the one measurement that defines a desert?", "Can a place be both freezing and a desert?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q13",
        question: "Polar regions have a much larger **annual** temperature range than the equator. Which is the main reason?",
        options: [
          "The Earth is much closer to the Sun during the polar summer",
          "Day length changes from 24-hour daylight in summer to 24-hour darkness in winter, so incoming solar energy varies hugely",
          "All the ice melts every summer",
          "Polar winds reverse direction every season",
        ],
        answerIndex: 1,
        explanation:
          "Because of the Earth's tilt, the poles swing between polar day and polar night, so the energy received changes enormously through the year. At the equator day length stays close to 12 hours. Distance is not the cause: the Earth is actually closest to the Sun in early January — during the *Arctic* winter.",
        difficulty: "challenge",
        guideRef: "polar-climate",
        hints: ["What changes most at the poles between June and December?", "Is the Earth's distance from the Sun really the cause of seasons?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q14",
        question: "On one mountain range, a windward town receives **2,400 mm** of rain a year and a leeward town at the same height receives **300 mm**. The leeward town's rainfall is what **percentage** of the windward town's?",
        options: ["87.5%", "800%", "2.1%", "12.5%"],
        answerIndex: 3,
        explanation:
          "300 ÷ 2,400 × 100 = 12.5%. 87.5% is the percentage *reduction* (2,100 ÷ 2,400); 800% divides the wrong way round (2,400 ÷ 300 × 100).",
        difficulty: "challenge",
        guideRef: "mountain-climate",
        hints: ["'A as a percentage of B' = A ÷ B × 100.", "Which town is A here?"],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "extreme-climates-m3-q15",
        question: "Identify the climate from this data (illustrative):\n\n" + tableHigh + "\n\nTotal rainfall is 910 mm.",
        options: [
          "A polar coastal station",
          "A hot desert at about 25° N",
          "A high-altitude station near the equator, for example in the Andes",
          "A lowland station at about 51° N",
        ],
        answerIndex: 2,
        explanation:
          "The annual range is only 1 °C (13–14 °C), which happens near the equator where the Sun is high all year. But 14 °C is far cooler than lowland equatorial places (about 27 °C), so altitude must be cooling it: with a lapse rate of 6.5 °C per 1,000 m, about 2,000 m higher would explain the difference. 910 mm is too wet for a desert, and a station at 51° N would have a range of over 10 °C.",
        difficulty: "challenge",
        guideRef: "climate-graphs",
        hints: ["What does a tiny annual range tell you about latitude?", "Then why is it so much cooler than Singapore?", "Is 910 mm desert, or not?"],
        strategy: "Look for the anomaly",
      },
    ],
  },
];
