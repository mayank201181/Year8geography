import type { TopicPractice } from "../../types.ts";

// ---------------------------------------------------------------------------
// Shared resources (drawn from the exact values used in the questions).
//
// MAP_A (scale 1:25 000, 1 grid square = 1 km): church 413183 (square 4118),
// school 434173 (4317), post office 434194 (4319), campsite 444183 (4418),
// station 427169 (4216), spot height 142 m at 404196 (4019), lake in 4017,
// woodland in 4419, main road along easting 42.3, minor road along northing
// 18.3, railway along northing 16.9, bridge at 423175.
//
// MAP_B (scale 1:50 000): church 264617 (2661), youth hostel 264643 (2664),
// car park 276629 (2762), viewpoint 285646 (2864), lighthouse 295636 (2963),
// spot height 112 m at 256645, built-up area in 2661, beach in 2861/2862,
// river mouth in 2863, road through 2762, 2763 and 2764.
//
// LATLONG: P 60°N 120°W · Q 30°S 60°E · R 0° 150°E · S 30°N 30°W · T 60°S 90°W.
// CLIMATE (Town X): temp J–D 2,3,6,9,13,16,18,17,14,10,6,3 °C;
//   rain 80,60,55,45,50,55,60,65,70,85,90,95 mm (total 810 mm).
// PIE (40 students): MRT 14 (126°), bus 10 (90°), car 8 (72°), walk 6 (54°), bicycle 2 (18°).
// SCATTER: sites 1–8 at 0.5–4.0 km: 120,100,85,70,55,40,110,20 pedestrians.
// CHORO: A 1,000+, B 100–499, C 0–99, D 500–999, E 100–499, F 0–99 people per km².
// BAR: cars per hour from 08:00 to 12:00: 45, 35, 20, 15, 30 (total 145).
// MISLEAD: recycling Town A 92%, Town B 96%, vertical axis starting at 90%.
// ---------------------------------------------------------------------------

const MAP_A = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map A: grid map extract with eastings 40 to 45 and northings 16 to 20, showing a church, school, post office, campsite, railway station, spot height 142 m, lake, river, woodland, a main road, a minor road and a railway"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="50" y="20" width="320" height="256" fill="#f7fee7" stroke="none"/><rect x="306" y="20" width="64" height="64" fill="#bbf7d0"/><circle cx="313.7" cy="27.7" r="3" fill="#22c55e"/><circle cx="313.7" cy="43.7" r="3" fill="#22c55e"/><circle cx="313.7" cy="59.7" r="3" fill="#22c55e"/><circle cx="313.7" cy="75.7" r="3" fill="#22c55e"/><circle cx="329.7" cy="27.7" r="3" fill="#22c55e"/><circle cx="329.7" cy="43.7" r="3" fill="#22c55e"/><circle cx="329.7" cy="59.7" r="3" fill="#22c55e"/><circle cx="329.7" cy="75.7" r="3" fill="#22c55e"/><circle cx="345.7" cy="27.7" r="3" fill="#22c55e"/><circle cx="345.7" cy="43.7" r="3" fill="#22c55e"/><circle cx="345.7" cy="59.7" r="3" fill="#22c55e"/><circle cx="345.7" cy="75.7" r="3" fill="#22c55e"/><circle cx="361.7" cy="27.7" r="3" fill="#22c55e"/><circle cx="361.7" cy="43.7" r="3" fill="#22c55e"/><circle cx="361.7" cy="59.7" r="3" fill="#22c55e"/><circle cx="361.7" cy="75.7" r="3" fill="#22c55e"/><ellipse cx="82" cy="186.4" rx="22.4" ry="19.2" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/><polyline points="104.4,186.4 152.4,173.6 197.2,180 235.6,164 293.2,170.4 370,157.6" fill="none" stroke="#0284c7" stroke-width="3" stroke-linejoin="round"/><line x1="50" y1="218.4" x2="370" y2="218.4" stroke="#1f2937" stroke-width="3"/><line x1="50" y1="128.8" x2="370" y2="128.8" stroke="#334155" stroke-width="6"/><line x1="50" y1="128.8" x2="370" y2="128.8" stroke="#fde047" stroke-width="4"/><line x1="197.2" y1="20" x2="197.2" y2="276" stroke="#334155" stroke-width="7"/><line x1="197.2" y1="20" x2="197.2" y2="276" stroke="#f97316" stroke-width="5"/><path d="M190.2 174h14M190.2 186h14" stroke="#1f2937" stroke-width="2"/><circle cx="133.2" cy="128.8" r="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><path d="M133.2 124.8v8M129.2 128.8h8" stroke="#1f2937" stroke-width="1.5"/><path d="M331.6 122.8L337.6 132.8H325.6Z" fill="#16a34a" stroke="#14532d" stroke-width="1"/><circle cx="222.8" cy="218.4" r="5" fill="#ef4444" stroke="#7f1d1d" stroke-width="1"/><rect x="262.6" y="187.8" width="10" height="10" fill="#1e3a8a"/><rect x="262.6" y="53.4" width="10" height="10" fill="#c7d2fe" stroke="#4338ca" stroke-width="1.5"/><path d="M75.6 40.6L80.6 49.6H70.6Z" fill="#1d4ed8"/><circle cx="75.6" cy="46.6" r="1.5" fill="#ffffff"/><text x="82.6" y="49.6" font-size="11" font-family="sans-serif" fill="#1f2937">142</text><line x1="50" y1="20" x2="50" y2="276" stroke="#64748b" stroke-width="1"/><text x="50" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">40</text><line x1="114" y1="20" x2="114" y2="276" stroke="#64748b" stroke-width="1"/><text x="114" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">41</text><line x1="178" y1="20" x2="178" y2="276" stroke="#64748b" stroke-width="1"/><text x="178" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">42</text><line x1="242" y1="20" x2="242" y2="276" stroke="#64748b" stroke-width="1"/><text x="242" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">43</text><line x1="306" y1="20" x2="306" y2="276" stroke="#64748b" stroke-width="1"/><text x="306" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">44</text><line x1="370" y1="20" x2="370" y2="276" stroke="#64748b" stroke-width="1"/><text x="370" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">45</text><line x1="50" y1="276" x2="370" y2="276" stroke="#64748b" stroke-width="1"/><text x="42" y="280" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">16</text><line x1="50" y1="212" x2="370" y2="212" stroke="#64748b" stroke-width="1"/><text x="42" y="216" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">17</text><line x1="50" y1="148" x2="370" y2="148" stroke="#64748b" stroke-width="1"/><text x="42" y="152" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">18</text><line x1="50" y1="84" x2="370" y2="84" stroke="#64748b" stroke-width="1"/><text x="42" y="88" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">19</text><line x1="50" y1="20" x2="370" y2="20" stroke="#64748b" stroke-width="1"/><text x="42" y="24" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">20</text><path d="M56.4 276v-3M62.8 276v-3M69.2 276v-3M75.6 276v-3M82 276v-6M88.4 276v-3M94.8 276v-3M101.2 276v-3M107.6 276v-3M120.4 276v-3M126.8 276v-3M133.2 276v-3M139.6 276v-3M146 276v-6M152.4 276v-3M158.8 276v-3M165.2 276v-3M171.6 276v-3M184.4 276v-3M190.8 276v-3M197.2 276v-3M203.6 276v-3M210 276v-6M216.4 276v-3M222.8 276v-3M229.2 276v-3M235.6 276v-3M248.4 276v-3M254.8 276v-3M261.2 276v-3M267.6 276v-3M274 276v-6M280.4 276v-3M286.8 276v-3M293.2 276v-3M299.6 276v-3M312.4 276v-3M318.8 276v-3M325.2 276v-3M331.6 276v-3M338 276v-6M344.4 276v-3M350.8 276v-3M357.2 276v-3M363.6 276v-3M50 269.6h3M50 263.2h3M50 256.8h3M50 250.4h3M50 244h6M50 237.6h3M50 231.2h3M50 224.8h3M50 218.4h3M50 205.6h3M50 199.2h3M50 192.8h3M50 186.4h3M50 180h6M50 173.6h3M50 167.2h3M50 160.8h3M50 154.4h3M50 141.6h3M50 135.2h3M50 128.8h3M50 122.4h3M50 116h6M50 109.6h3M50 103.2h3M50 96.8h3M50 90.4h3M50 77.6h3M50 71.2h3M50 64.8h3M50 58.4h3M50 52h6M50 45.6h3M50 39.2h3M50 32.8h3M50 26.4h3" stroke="#334155" stroke-width="1" fill="none"/><rect x="50" y="20" width="320" height="256" fill="none" stroke="#1f2937" stroke-width="1.5"/><rect x="378" y="20" width="98" height="256" fill="#ffffff" stroke="#334155"/><path d="M427 30l6 14h-12z" fill="#1f2937"/><text x="427" y="56" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">N</text><circle cx="390" cy="72" r="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><path d="M390 68v8M386 72h8" stroke="#1f2937" stroke-width="1.5"/><text x="402" y="76" font-family="sans-serif" fill="#1f2937" font-size="11">Church</text><rect x="385" y="85" width="10" height="10" fill="#1e3a8a"/><text x="402" y="94" font-family="sans-serif" fill="#1f2937" font-size="11">School</text><rect x="385" y="103" width="10" height="10" fill="#c7d2fe" stroke="#4338ca" stroke-width="1.5"/><text x="402" y="112" font-family="sans-serif" fill="#1f2937" font-size="11">Post office</text><path d="M390 120L396 130H384Z" fill="#16a34a" stroke="#14532d" stroke-width="1"/><text x="402" y="130" font-family="sans-serif" fill="#1f2937" font-size="11">Campsite</text><circle cx="390" cy="144" r="5" fill="#ef4444" stroke="#7f1d1d" stroke-width="1"/><text x="402" y="148" font-family="sans-serif" fill="#1f2937" font-size="11">Station</text><path d="M390 157L395 166H385Z" fill="#1d4ed8"/><circle cx="390" cy="163" r="1.5" fill="#ffffff"/><text x="402" y="166" font-family="sans-serif" fill="#1f2937" font-size="11">Spot height</text><line x1="384" y1="180" x2="396" y2="180" stroke="#1f2937" stroke-width="3"/><text x="402" y="184" font-family="sans-serif" fill="#1f2937" font-size="11">Railway</text><line x1="384" y1="198" x2="396" y2="198" stroke="#f97316" stroke-width="5"/><text x="402" y="202" font-family="sans-serif" fill="#1f2937" font-size="11">Main road</text><line x1="384" y1="216" x2="396" y2="216" stroke="#334155" stroke-width="6"/><line x1="384" y1="216" x2="396" y2="216" stroke="#fde047" stroke-width="4"/><text x="402" y="220" font-family="sans-serif" fill="#1f2937" font-size="11">Minor road</text><line x1="384" y1="234" x2="396" y2="234" stroke="#0284c7" stroke-width="3"/><text x="402" y="238" font-family="sans-serif" fill="#1f2937" font-size="11">River</text><rect x="384" y="246" width="12" height="10" fill="#bbf7d0"/><circle cx="390" cy="251" r="3" fill="#22c55e"/><text x="402" y="255" font-family="sans-serif" fill="#1f2937" font-size="11">Woodland</text><ellipse cx="390" cy="268" rx="6" ry="5" fill="#bae6fd" stroke="#0284c7"/><text x="402" y="272" font-family="sans-serif" fill="#1f2937" font-size="11">Lake</text><text x="50" y="312" font-family="sans-serif" fill="#1f2937" font-size="11">Map A: 1 grid square = 1 km. Small ticks mark tenths of a square.</text></svg>`;

const MAP_B = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map B: coastal grid map extract with eastings 25 to 30 and northings 61 to 65, showing sea to the east, a headland with a lighthouse, a bay with a beach, a river, a village with a church, a car park, a youth hostel, a viewpoint, a spot height of 112 m and a road"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="50" y="20" width="320" height="256" fill="#f7fee7" stroke="none"/><polygon points="293.2,20 286.8,64.8 299.6,80.8 331.6,84 354,96.8 357.2,116 338,132 306,138.4 274,154.4 254.8,186.4 251.6,218.4 264.4,250.4 280.4,276 370,276 370,20" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5"/><polygon points="274,154.4 254.8,186.4 251.6,218.4 264.4,250.4 245.2,250.4 242,218.4 245.2,186.4 264.4,154.4" fill="#fde68a" stroke="#ca8a04" stroke-width="1"/><rect x="114" y="218.4" width="57.6" height="44.8" fill="#e5e7eb" stroke="#64748b"/><polyline points="50,103.2 101.2,116 165.2,109.6 216.4,122.4 261.2,141.6 290,144.8" fill="none" stroke="#0284c7" stroke-width="3" stroke-linejoin="round"/><polyline points="50,212 171.6,212 216.4,154.4 222.8,20" fill="none" stroke="#334155" stroke-width="6" stroke-linejoin="round"/><polyline points="50,212 171.6,212 216.4,154.4 222.8,20" fill="none" stroke="#fde047" stroke-width="4" stroke-linejoin="round"/><path d="M212 116.4h14M212 128.4h14" stroke="#1f2937" stroke-width="2"/><circle cx="139.6" cy="231.2" r="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><path d="M139.6 227.2v8M135.6 231.2h8" stroke="#1f2937" stroke-width="1.5"/><path d="M139.6 58.8L145.6 68.8H133.6Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="1"/><rect x="210.4" y="148.4" width="12" height="12" fill="#2563eb"/><text x="216.4" y="158.4" font-size="10" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">P</text><circle cx="274" cy="45.6" r="3.5" fill="#f59e0b" stroke="#1f2937" stroke-width="1"/><path d="M274 40.6v-3M274 50.6v3M269 45.6h-3M279 45.6h3" stroke="#1f2937" stroke-width="1.2"/><polygon points="338,103.6 339.6,107.4 343.7,107.7 340.6,110.4 341.5,114.5 338,112.3 334.5,114.5 335.4,110.4 332.3,107.7 336.4,107.4" fill="#facc15" stroke="#1f2937" stroke-width="1"/><circle cx="88.4" cy="52" r="2" fill="#1f2937"/><text x="93.4" y="56" font-size="11" font-family="sans-serif" fill="#1f2937">112</text><text x="325.2" y="199.2" font-size="11" font-family="sans-serif" font-style="italic" fill="#0369a1" text-anchor="middle">Sea</text><line x1="50" y1="20" x2="50" y2="276" stroke="#64748b" stroke-width="1"/><text x="50" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">25</text><line x1="114" y1="20" x2="114" y2="276" stroke="#64748b" stroke-width="1"/><text x="114" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">26</text><line x1="178" y1="20" x2="178" y2="276" stroke="#64748b" stroke-width="1"/><text x="178" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">27</text><line x1="242" y1="20" x2="242" y2="276" stroke="#64748b" stroke-width="1"/><text x="242" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">28</text><line x1="306" y1="20" x2="306" y2="276" stroke="#64748b" stroke-width="1"/><text x="306" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">29</text><line x1="370" y1="20" x2="370" y2="276" stroke="#64748b" stroke-width="1"/><text x="370" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">30</text><line x1="50" y1="276" x2="370" y2="276" stroke="#64748b" stroke-width="1"/><text x="42" y="280" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">61</text><line x1="50" y1="212" x2="370" y2="212" stroke="#64748b" stroke-width="1"/><text x="42" y="216" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">62</text><line x1="50" y1="148" x2="370" y2="148" stroke="#64748b" stroke-width="1"/><text x="42" y="152" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">63</text><line x1="50" y1="84" x2="370" y2="84" stroke="#64748b" stroke-width="1"/><text x="42" y="88" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">64</text><line x1="50" y1="20" x2="370" y2="20" stroke="#64748b" stroke-width="1"/><text x="42" y="24" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">65</text><path d="M56.4 276v-3M62.8 276v-3M69.2 276v-3M75.6 276v-3M82 276v-6M88.4 276v-3M94.8 276v-3M101.2 276v-3M107.6 276v-3M120.4 276v-3M126.8 276v-3M133.2 276v-3M139.6 276v-3M146 276v-6M152.4 276v-3M158.8 276v-3M165.2 276v-3M171.6 276v-3M184.4 276v-3M190.8 276v-3M197.2 276v-3M203.6 276v-3M210 276v-6M216.4 276v-3M222.8 276v-3M229.2 276v-3M235.6 276v-3M248.4 276v-3M254.8 276v-3M261.2 276v-3M267.6 276v-3M274 276v-6M280.4 276v-3M286.8 276v-3M293.2 276v-3M299.6 276v-3M312.4 276v-3M318.8 276v-3M325.2 276v-3M331.6 276v-3M338 276v-6M344.4 276v-3M350.8 276v-3M357.2 276v-3M363.6 276v-3M50 269.6h3M50 263.2h3M50 256.8h3M50 250.4h3M50 244h6M50 237.6h3M50 231.2h3M50 224.8h3M50 218.4h3M50 205.6h3M50 199.2h3M50 192.8h3M50 186.4h3M50 180h6M50 173.6h3M50 167.2h3M50 160.8h3M50 154.4h3M50 141.6h3M50 135.2h3M50 128.8h3M50 122.4h3M50 116h6M50 109.6h3M50 103.2h3M50 96.8h3M50 90.4h3M50 77.6h3M50 71.2h3M50 64.8h3M50 58.4h3M50 52h6M50 45.6h3M50 39.2h3M50 32.8h3M50 26.4h3" stroke="#334155" stroke-width="1" fill="none"/><rect x="50" y="20" width="320" height="256" fill="none" stroke="#1f2937" stroke-width="1.5"/><rect x="378" y="20" width="98" height="256" fill="#ffffff" stroke="#334155"/><path d="M427 30l6 14h-12z" fill="#1f2937"/><text x="427" y="56" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">N</text><circle cx="390" cy="74" r="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><path d="M390 70v8M386 74h8" stroke="#1f2937" stroke-width="1.5"/><text x="402" y="78" font-size="11" font-family="sans-serif" fill="#1f2937">Church</text><path d="M390 88L396 98H384Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="1"/><text x="402" y="98" font-size="11" font-family="sans-serif" fill="#1f2937">Youth hostel</text><rect x="384" y="108" width="12" height="12" fill="#2563eb"/><text x="390" y="118" font-size="10" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">P</text><text x="402" y="118" font-size="11" font-family="sans-serif" fill="#1f2937">Car park</text><circle cx="390" cy="134" r="3.5" fill="#f59e0b" stroke="#1f2937" stroke-width="1"/><path d="M390 129v-3M390 139v3M385 134h-3M395 134h3" stroke="#1f2937" stroke-width="1.2"/><text x="402" y="138" font-size="11" font-family="sans-serif" fill="#1f2937">Viewpoint</text><polygon points="390,148 391.6,151.8 395.7,152.1 392.6,154.8 393.5,158.9 390,156.7 386.5,158.9 387.4,154.8 384.3,152.1 388.4,151.8" fill="#facc15" stroke="#1f2937" stroke-width="1"/><text x="402" y="158" font-size="11" font-family="sans-serif" fill="#1f2937">Lighthouse</text><circle cx="390" cy="174" r="2" fill="#1f2937"/><text x="402" y="178" font-size="11" font-family="sans-serif" fill="#1f2937">Spot height</text><rect x="384" y="188" width="12" height="10" fill="#e5e7eb" stroke="#64748b"/><text x="402" y="197" font-size="11" font-family="sans-serif" fill="#1f2937">Built-up area</text><line x1="384" y1="213" x2="396" y2="213" stroke="#334155" stroke-width="6"/><line x1="384" y1="213" x2="396" y2="213" stroke="#fde047" stroke-width="4"/><text x="402" y="217" font-size="11" font-family="sans-serif" fill="#1f2937">Road</text><line x1="384" y1="232" x2="396" y2="232" stroke="#0284c7" stroke-width="3"/><text x="402" y="236" font-size="11" font-family="sans-serif" fill="#1f2937">River</text><rect x="384" y="245" width="12" height="10" fill="#fde68a" stroke="#ca8a04"/><text x="402" y="254" font-size="11" font-family="sans-serif" fill="#1f2937">Beach</text><rect x="384" y="262" width="12" height="10" fill="#bae6fd" stroke="#0369a1"/><text x="402" y="271" font-size="11" font-family="sans-serif" fill="#1f2937">Sea</text><text x="50" y="312" font-family="sans-serif" fill="#1f2937" font-size="11">Map B: scale 1:50 000. 1 grid square = 1 km. Ticks mark tenths.</text></svg>`;

const LATLONG = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid of latitude and longitude lines every 30 degrees with the Equator, Prime Meridian, tropics and polar circles marked, and five points P, Q, R, S and T"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="40" y="20" width="400" height="252" fill="#e0f2fe" stroke="#334155"/><line x1="40" y1="20" x2="40" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="40" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">180°W</text><line x1="73.3" y1="20" x2="73.3" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="106.7" y1="20" x2="106.7" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="106.7" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">120°W</text><line x1="140" y1="20" x2="140" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="173.3" y1="20" x2="173.3" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="173.3" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">60°W</text><line x1="206.7" y1="20" x2="206.7" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="240" y1="20" x2="240" y2="272" stroke="#b91c1c" stroke-width="2"/><text x="240" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">0°</text><line x1="273.3" y1="20" x2="273.3" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="306.7" y1="20" x2="306.7" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="306.7" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">60°E</text><line x1="340" y1="20" x2="340" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="373.3" y1="20" x2="373.3" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="373.3" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">120°E</text><line x1="406.7" y1="20" x2="406.7" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="440" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">180°E</text><line x1="40" y1="272" x2="440" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="34" y="276" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">90°S</text><line x1="40" y1="230" x2="440" y2="230" stroke="#94a3b8" stroke-width="1"/><text x="34" y="234" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">60°S</text><line x1="40" y1="188" x2="440" y2="188" stroke="#94a3b8" stroke-width="1"/><text x="34" y="192" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">30°S</text><line x1="40" y1="146" x2="440" y2="146" stroke="#b91c1c" stroke-width="2"/><text x="34" y="150" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">0°</text><line x1="40" y1="104" x2="440" y2="104" stroke="#94a3b8" stroke-width="1"/><text x="34" y="108" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">30°N</text><line x1="40" y1="62" x2="440" y2="62" stroke="#94a3b8" stroke-width="1"/><text x="34" y="66" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">60°N</text><line x1="40" y1="20" x2="440" y2="20" stroke="#94a3b8" stroke-width="1"/><text x="34" y="24" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">90°N</text><line x1="40" y1="113.1" x2="440" y2="113.1" stroke="#1f2937" stroke-width="1" stroke-dasharray="5 3"/><text x="438" y="110.1" font-size="10" font-family="sans-serif" fill="#1f2937" text-anchor="end">Tropic of Cancer (23.5°N)</text><line x1="40" y1="178.9" x2="440" y2="178.9" stroke="#1f2937" stroke-width="1" stroke-dasharray="5 3"/><text x="438" y="175.9" font-size="10" font-family="sans-serif" fill="#1f2937" text-anchor="end">Tropic of Capricorn (23.5°S)</text><line x1="40" y1="52.9" x2="440" y2="52.9" stroke="#1f2937" stroke-width="1" stroke-dasharray="5 3"/><text x="438" y="49.9" font-size="10" font-family="sans-serif" fill="#1f2937" text-anchor="end">Arctic Circle (66.5°N)</text><line x1="40" y1="239.1" x2="440" y2="239.1" stroke="#1f2937" stroke-width="1" stroke-dasharray="5 3"/><text x="438" y="236.1" font-size="10" font-family="sans-serif" fill="#1f2937" text-anchor="end">Antarctic Circle (66.5°S)</text><text x="244" y="32" font-size="10" font-family="sans-serif" fill="#b91c1c">Prime Meridian</text><text x="44" y="143" font-size="10" font-family="sans-serif" fill="#b91c1c">Equator</text><circle cx="106.7" cy="62" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/><text x="113.7" y="76" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">P</text><circle cx="306.7" cy="188" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/><text x="313.7" y="202" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">Q</text><circle cx="406.7" cy="146" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/><text x="413.7" y="160" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">R</text><circle cx="206.7" cy="104" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/><text x="213.7" y="118" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">S</text><circle cx="140" cy="230" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/><text x="147" y="244" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">T</text><text x="240" y="306" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">Lines are drawn every 30°. Longitude labels every 60°.</text></svg>`;

const CLIMATE = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for Town X: blue rainfall bars for each month read on the left axis from 0 to 100 mm, and a red temperature line read on the right axis from 0 to 20 degrees Celsius"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><line x1="60" y1="270" x2="420" y2="270" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="274" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">0</text><text x="425" y="274" font-size="11" font-family="sans-serif" fill="#1f2937">0</text><line x1="60" y1="247" x2="420" y2="247" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="251" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">10</text><text x="425" y="251" font-size="11" font-family="sans-serif" fill="#1f2937">2</text><line x1="60" y1="224" x2="420" y2="224" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="228" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">20</text><text x="425" y="228" font-size="11" font-family="sans-serif" fill="#1f2937">4</text><line x1="60" y1="201" x2="420" y2="201" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">30</text><text x="425" y="205" font-size="11" font-family="sans-serif" fill="#1f2937">6</text><line x1="60" y1="178" x2="420" y2="178" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="182" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">40</text><text x="425" y="182" font-size="11" font-family="sans-serif" fill="#1f2937">8</text><line x1="60" y1="155" x2="420" y2="155" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="159" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">50</text><text x="425" y="159" font-size="11" font-family="sans-serif" fill="#1f2937">10</text><line x1="60" y1="132" x2="420" y2="132" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="136" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">60</text><text x="425" y="136" font-size="11" font-family="sans-serif" fill="#1f2937">12</text><line x1="60" y1="109" x2="420" y2="109" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="113" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">70</text><text x="425" y="113" font-size="11" font-family="sans-serif" fill="#1f2937">14</text><line x1="60" y1="86" x2="420" y2="86" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="90" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">80</text><text x="425" y="90" font-size="11" font-family="sans-serif" fill="#1f2937">16</text><line x1="60" y1="63" x2="420" y2="63" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="67" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">90</text><text x="425" y="67" font-size="11" font-family="sans-serif" fill="#1f2937">18</text><line x1="60" y1="40" x2="420" y2="40" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="44" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">100</text><text x="425" y="44" font-size="11" font-family="sans-serif" fill="#1f2937">20</text><rect x="64" y="86" width="22" height="184" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="75" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">J</text><rect x="94" y="132" width="22" height="138" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="105" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">F</text><rect x="124" y="143.5" width="22" height="126.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="135" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">M</text><rect x="154" y="166.5" width="22" height="103.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="165" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><rect x="184" y="155" width="22" height="115" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="195" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">M</text><rect x="214" y="143.5" width="22" height="126.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="225" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">J</text><rect x="244" y="132" width="22" height="138" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="255" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">J</text><rect x="274" y="120.5" width="22" height="149.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="285" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><rect x="304" y="109" width="22" height="161" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="315" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">S</text><rect x="334" y="74.5" width="22" height="195.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="345" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><rect x="364" y="63" width="22" height="207" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="375" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">N</text><rect x="394" y="51.5" width="22" height="218.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="405" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">D</text><polyline points="75,247 105,235.5 135,201 165,166.5 195,120.5 225,86 255,63 285,74.5 315,109 345,155 375,201 405,235.5" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="75" cy="247" r="3" fill="#dc2626"/><circle cx="105" cy="235.5" r="3" fill="#dc2626"/><circle cx="135" cy="201" r="3" fill="#dc2626"/><circle cx="165" cy="166.5" r="3" fill="#dc2626"/><circle cx="195" cy="120.5" r="3" fill="#dc2626"/><circle cx="225" cy="86" r="3" fill="#dc2626"/><circle cx="255" cy="63" r="3" fill="#dc2626"/><circle cx="285" cy="74.5" r="3" fill="#dc2626"/><circle cx="315" cy="109" r="3" fill="#dc2626"/><circle cx="345" cy="155" r="3" fill="#dc2626"/><circle cx="375" cy="201" r="3" fill="#dc2626"/><circle cx="405" cy="235.5" r="3" fill="#dc2626"/><line x1="60" y1="270" x2="420" y2="270" stroke="#1f2937"/><line x1="60" y1="40" x2="60" y2="270" stroke="#1f2937"/><line x1="420" y1="40" x2="420" y2="270" stroke="#1f2937"/><text x="16" y="155" font-size="11" font-family="sans-serif" fill="#1e40af" text-anchor="middle" transform="rotate(-90 16 155)">Rainfall (mm)</text><text x="462" y="155" font-size="11" font-family="sans-serif" fill="#dc2626" text-anchor="middle" transform="rotate(90 462 155)">Temperature (°C)</text><text x="240" y="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" font-size="12">Climate graph for Town X</text><text x="240" y="302" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Month</text></svg>`;

const POP_LINE = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of world population in billions against year, with labelled points at 1804 (1 billion), 1927 (2), 1960 (3), 1974 (4), 1987 (5), 1999 (6), 2011 (7) and 2022 (8)"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><line x1="60" y1="270" x2="450" y2="270" stroke="#e2e8f0"/><text x="54" y="274" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">0</text><line x1="60" y1="243" x2="450" y2="243" stroke="#e2e8f0"/><text x="54" y="247" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">1</text><line x1="60" y1="216" x2="450" y2="216" stroke="#e2e8f0"/><text x="54" y="220" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">2</text><line x1="60" y1="189" x2="450" y2="189" stroke="#e2e8f0"/><text x="54" y="193" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">3</text><line x1="60" y1="162" x2="450" y2="162" stroke="#e2e8f0"/><text x="54" y="166" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">4</text><line x1="60" y1="135" x2="450" y2="135" stroke="#e2e8f0"/><text x="54" y="139" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">5</text><line x1="60" y1="108" x2="450" y2="108" stroke="#e2e8f0"/><text x="54" y="112" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">6</text><line x1="60" y1="81" x2="450" y2="81" stroke="#e2e8f0"/><text x="54" y="85" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">7</text><line x1="60" y1="54" x2="450" y2="54" stroke="#e2e8f0"/><text x="54" y="58" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">8</text><line x1="60" y1="27" x2="450" y2="27" stroke="#e2e8f0"/><text x="54" y="31" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">9</text><line x1="60" y1="270" x2="60" y2="275" stroke="#1f2937"/><text x="60" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1800</text><line x1="125" y1="270" x2="125" y2="275" stroke="#1f2937"/><text x="125" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1840</text><line x1="190" y1="270" x2="190" y2="275" stroke="#1f2937"/><text x="190" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1880</text><line x1="255" y1="270" x2="255" y2="275" stroke="#1f2937"/><text x="255" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1920</text><line x1="320" y1="270" x2="320" y2="275" stroke="#1f2937"/><text x="320" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1960</text><line x1="385" y1="270" x2="385" y2="275" stroke="#1f2937"/><text x="385" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2000</text><line x1="450" y1="270" x2="450" y2="275" stroke="#1f2937"/><text x="450" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2040</text><line x1="60" y1="270" x2="450" y2="270" stroke="#1f2937"/><line x1="60" y1="27" x2="60" y2="270" stroke="#1f2937"/><polyline points="66.5,243 266.4,216 320,189 342.8,162 363.9,135 383.4,108 402.9,81 420.8,54" fill="none" stroke="#7c3aed" stroke-width="2.5"/><circle cx="66.5" cy="243" r="3.5" fill="#7c3aed"/><text x="72.5" y="235" font-family="sans-serif" fill="#1f2937" font-size="10">1804</text><circle cx="266.4" cy="216" r="3.5" fill="#7c3aed"/><text x="260.4" y="210" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">1927</text><circle cx="320" cy="189" r="3.5" fill="#7c3aed"/><text x="314" y="183" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">1960</text><circle cx="342.8" cy="162" r="3.5" fill="#7c3aed"/><text x="336.8" y="156" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">1974</text><circle cx="363.9" cy="135" r="3.5" fill="#7c3aed"/><text x="357.9" y="129" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">1987</text><circle cx="383.4" cy="108" r="3.5" fill="#7c3aed"/><text x="377.4" y="102" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">1999</text><circle cx="402.9" cy="81" r="3.5" fill="#7c3aed"/><text x="396.9" y="75" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">2011</text><circle cx="420.8" cy="54" r="3.5" fill="#7c3aed"/><text x="414.8" y="48" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">2022</text><text x="16" y="150" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 16 150)">World population (billions)</text><text x="255" y="306" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Year</text><text x="255" y="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" font-size="12">When world population reached each billion</text></svg>`;

const PIE = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pie chart of how 40 students travel to school with sectors for MRT, bus, car, walk and bicycle; the MRT sector is largest and the bicycle sector is smallest"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><path d="M150 160L150 50A110 110 0 0 1 239 224.7Z" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="210.8" y="133" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">MRT</text><path d="M150 160L239 224.7A110 110 0 0 1 85.3 249Z" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5"/><text x="160.7" y="231.4" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">Bus</text><path d="M150 160L85.3 249A110 110 0 0 1 45.4 126Z" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/><text x="85.1" y="185.1" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">Car</text><path d="M150 160L45.4 126A110 110 0 0 1 116 55.4Z" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="101.8" y="115.8" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">Walk</text><path d="M150 160L116 55.4A110 110 0 0 1 150 50Z" fill="#bae6fd" stroke="#1f2937" stroke-width="1.5"/><text x="130.3" y="39.6" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">Bicycle</text><text x="300" y="60" font-family="sans-serif" fill="#1f2937" font-weight="bold" font-size="12">How 40 students in</text><text x="300" y="76" font-family="sans-serif" fill="#1f2937" font-weight="bold" font-size="12">class 8B travel to school</text><text x="300" y="110" font-family="sans-serif" fill="#1f2937" font-size="11">Each student chose</text><text x="300" y="125" font-family="sans-serif" fill="#1f2937" font-size="11">one main way.</text></svg>`;

const SCATTER = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatter graph of pedestrians counted in 10 minutes against distance from the city centre for 8 numbered sites: counts fall from 120 at 0.5 km to 20 at 4 km, except site 7 with 110 at 3.5 km"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><line x1="60" y1="270" x2="440" y2="270" stroke="#e2e8f0"/><text x="54" y="274" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">0</text><line x1="60" y1="235.7" x2="440" y2="235.7" stroke="#e2e8f0"/><text x="54" y="239.7" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">20</text><line x1="60" y1="201.4" x2="440" y2="201.4" stroke="#e2e8f0"/><text x="54" y="205.4" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">40</text><line x1="60" y1="167.1" x2="440" y2="167.1" stroke="#e2e8f0"/><text x="54" y="171.1" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">60</text><line x1="60" y1="132.9" x2="440" y2="132.9" stroke="#e2e8f0"/><text x="54" y="136.9" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">80</text><line x1="60" y1="98.6" x2="440" y2="98.6" stroke="#e2e8f0"/><text x="54" y="102.6" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">100</text><line x1="60" y1="64.3" x2="440" y2="64.3" stroke="#e2e8f0"/><text x="54" y="68.3" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">120</text><line x1="60" y1="30" x2="440" y2="30" stroke="#e2e8f0"/><text x="54" y="34" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">140</text><line x1="60" y1="30" x2="60" y2="270" stroke="#f1f5f9"/><text x="60" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0</text><line x1="102.2" y1="30" x2="102.2" y2="270" stroke="#f1f5f9"/><text x="102.2" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.5</text><line x1="144.4" y1="30" x2="144.4" y2="270" stroke="#f1f5f9"/><text x="144.4" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1</text><line x1="186.7" y1="30" x2="186.7" y2="270" stroke="#f1f5f9"/><text x="186.7" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1.5</text><line x1="228.9" y1="30" x2="228.9" y2="270" stroke="#f1f5f9"/><text x="228.9" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2</text><line x1="271.1" y1="30" x2="271.1" y2="270" stroke="#f1f5f9"/><text x="271.1" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2.5</text><line x1="313.3" y1="30" x2="313.3" y2="270" stroke="#f1f5f9"/><text x="313.3" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3</text><line x1="355.6" y1="30" x2="355.6" y2="270" stroke="#f1f5f9"/><text x="355.6" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3.5</text><line x1="397.8" y1="30" x2="397.8" y2="270" stroke="#f1f5f9"/><text x="397.8" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">4</text><line x1="440" y1="30" x2="440" y2="270" stroke="#f1f5f9"/><text x="440" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">4.5</text><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937"/><line x1="60" y1="30" x2="60" y2="270" stroke="#1f2937"/><path d="M98.2 60.3l8 8M98.2 68.3l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="108.2" y="59.3" font-family="sans-serif" fill="#1f2937" font-size="10">1</text><path d="M140.4 94.6l8 8M140.4 102.6l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="150.4" y="93.6" font-family="sans-serif" fill="#1f2937" font-size="10">2</text><path d="M182.7 120.3l8 8M182.7 128.3l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="192.7" y="119.3" font-family="sans-serif" fill="#1f2937" font-size="10">3</text><path d="M224.9 146l8 8M224.9 154l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="234.9" y="145" font-family="sans-serif" fill="#1f2937" font-size="10">4</text><path d="M267.1 171.7l8 8M267.1 179.7l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="277.1" y="170.7" font-family="sans-serif" fill="#1f2937" font-size="10">5</text><path d="M309.3 197.4l8 8M309.3 205.4l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="319.3" y="196.4" font-family="sans-serif" fill="#1f2937" font-size="10">6</text><path d="M351.6 77.4l8 8M351.6 85.4l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="361.6" y="76.4" font-family="sans-serif" fill="#1f2937" font-size="10">7</text><path d="M393.8 231.7l8 8M393.8 239.7l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="403.8" y="230.7" font-family="sans-serif" fill="#1f2937" font-size="10">8</text><text x="16" y="150" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 16 150)">Pedestrians in 10 minutes</text><text x="250" y="306" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Distance from city centre (km)</text><text x="250" y="18" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" font-size="12">Pedestrian counts at 8 sites (numbers = site)</text></svg>`;

const CHORO = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Choropleth map of six districts: A in the north-west is darkest at 1,000 or more people per km squared, D is 500 to 999, B and E are 100 to 499, and C and F in the east are lightest at 0 to 99. The sea is to the west and mountains to the east"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="10" y="30" width="60" height="230" fill="#bae6fd"/><text x="40" y="150" font-size="12" font-family="sans-serif" fill="#0369a1" font-style="italic" text-anchor="middle" transform="rotate(-90 40 150)">Sea (west coast)</text><rect x="70" y="40" width="100" height="110" fill="#991b1b" stroke="#1f2937" stroke-width="1.5"/><text x="120" y="100" font-size="16" font-weight="bold" font-family="sans-serif" fill="#ffffff" text-anchor="middle">A</text><rect x="170" y="40" width="100" height="110" fill="#fca5a5" stroke="#1f2937" stroke-width="1.5"/><text x="220" y="100" font-size="16" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><rect x="270" y="40" width="100" height="110" fill="#fee2e2" stroke="#1f2937" stroke-width="1.5"/><text x="320" y="100" font-size="16" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">C</text><rect x="70" y="150" width="100" height="110" fill="#ef4444" stroke="#1f2937" stroke-width="1.5"/><text x="120" y="210" font-size="16" font-weight="bold" font-family="sans-serif" fill="#ffffff" text-anchor="middle">D</text><rect x="170" y="150" width="100" height="110" fill="#fca5a5" stroke="#1f2937" stroke-width="1.5"/><text x="220" y="210" font-size="16" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">E</text><rect x="270" y="150" width="100" height="110" fill="#fee2e2" stroke="#1f2937" stroke-width="1.5"/><text x="320" y="210" font-size="16" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">F</text><path d="M300 268l10 -12l10 12M318 268l10 -12l10 12M336 268l10 -12l10 12" stroke="#57534e" stroke-width="1.5" fill="none"/><text x="300" y="284" font-family="sans-serif" fill="#1f2937" font-size="11">Mountains in the east</text><path d="M24 25l6 -14l6 14z" fill="#1f2937"/><text x="30" y="9" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="10" font-weight="bold">N</text><text x="385" y="40" font-family="sans-serif" fill="#1f2937" font-weight="bold" font-size="11">People per km²</text><rect x="385" y="55" width="16" height="14" fill="#fee2e2" stroke="#1f2937"/><text x="406" y="66" font-size="11" font-family="sans-serif" fill="#1f2937">0–99</text><rect x="385" y="79" width="16" height="14" fill="#fca5a5" stroke="#1f2937"/><text x="406" y="90" font-size="11" font-family="sans-serif" fill="#1f2937">100–499</text><rect x="385" y="103" width="16" height="14" fill="#ef4444" stroke="#1f2937"/><text x="406" y="114" font-size="11" font-family="sans-serif" fill="#1f2937">500–999</text><rect x="385" y="127" width="16" height="14" fill="#991b1b" stroke="#1f2937"/><text x="406" y="138" font-size="11" font-family="sans-serif" fill="#1f2937">1,000 or more</text><text x="70" y="300" font-family="sans-serif" fill="#1f2937" font-size="12" font-weight="bold">Population density of districts A to F in a region</text></svg>`;

const BAR = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of cars counted each hour at a junction: 45 in the hour from 08:00, 35 from 09:00, 20 from 10:00, 15 from 11:00 and 30 from 12:00"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><line x1="70" y1="270" x2="450" y2="270" stroke="#e2e8f0"/><text x="64" y="274" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">0</text><line x1="70" y1="247" x2="450" y2="247" stroke="#f1f5f9"/><text x="64" y="251" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">5</text><line x1="70" y1="224" x2="450" y2="224" stroke="#e2e8f0"/><text x="64" y="228" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">10</text><line x1="70" y1="201" x2="450" y2="201" stroke="#f1f5f9"/><text x="64" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">15</text><line x1="70" y1="178" x2="450" y2="178" stroke="#e2e8f0"/><text x="64" y="182" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">20</text><line x1="70" y1="155" x2="450" y2="155" stroke="#f1f5f9"/><text x="64" y="159" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">25</text><line x1="70" y1="132" x2="450" y2="132" stroke="#e2e8f0"/><text x="64" y="136" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">30</text><line x1="70" y1="109" x2="450" y2="109" stroke="#f1f5f9"/><text x="64" y="113" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">35</text><line x1="70" y1="86" x2="450" y2="86" stroke="#e2e8f0"/><text x="64" y="90" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">40</text><line x1="70" y1="63" x2="450" y2="63" stroke="#f1f5f9"/><text x="64" y="67" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">45</text><line x1="70" y1="40" x2="450" y2="40" stroke="#e2e8f0"/><text x="64" y="44" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">50</text><rect x="90" y="63" width="44" height="207" fill="#c7d2fe" stroke="#3730a3" stroke-width="1.2"/><text x="112" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">08:00</text><rect x="162" y="109" width="44" height="161" fill="#c7d2fe" stroke="#3730a3" stroke-width="1.2"/><text x="184" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">09:00</text><rect x="234" y="178" width="44" height="92" fill="#c7d2fe" stroke="#3730a3" stroke-width="1.2"/><text x="256" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">10:00</text><rect x="306" y="201" width="44" height="69" fill="#c7d2fe" stroke="#3730a3" stroke-width="1.2"/><text x="328" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">11:00</text><rect x="378" y="132" width="44" height="138" fill="#c7d2fe" stroke="#3730a3" stroke-width="1.2"/><text x="400" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">12:00</text><line x1="70" y1="270" x2="450" y2="270" stroke="#1f2937"/><line x1="70" y1="35" x2="70" y2="270" stroke="#1f2937"/><text x="20" y="155" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 20 155)">Number of cars</text><text x="260" y="306" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Hour starting at</text><text x="260" y="22" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" font-size="12">Cars counted each hour at a school junction</text></svg>`;

const MISLEAD = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart headlined Town B recycles three times as much, with a vertical axis that starts at 90 per cent: Town A bar reaches 92 per cent and Town B bar reaches 96 per cent"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><line x1="90" y1="270" x2="400" y2="270" stroke="#e2e8f0"/><text x="84" y="274" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">90</text><line x1="90" y1="242" x2="400" y2="242" stroke="#e2e8f0"/><text x="84" y="246" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">91</text><line x1="90" y1="214" x2="400" y2="214" stroke="#e2e8f0"/><text x="84" y="218" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">92</text><line x1="90" y1="186" x2="400" y2="186" stroke="#e2e8f0"/><text x="84" y="190" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">93</text><line x1="90" y1="158" x2="400" y2="158" stroke="#e2e8f0"/><text x="84" y="162" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">94</text><line x1="90" y1="130" x2="400" y2="130" stroke="#e2e8f0"/><text x="84" y="134" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">95</text><line x1="90" y1="102" x2="400" y2="102" stroke="#e2e8f0"/><text x="84" y="106" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">96</text><line x1="90" y1="74" x2="400" y2="74" stroke="#e2e8f0"/><text x="84" y="78" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">97</text><line x1="90" y1="46" x2="400" y2="46" stroke="#e2e8f0"/><text x="84" y="50" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">98</text><rect x="140" y="214" width="80" height="56" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.2"/><text x="180" y="288" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">Town A</text><rect x="280" y="102" width="80" height="168" fill="#fecaca" stroke="#1f2937" stroke-width="1.2"/><text x="320" y="288" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">Town B</text><line x1="90" y1="270" x2="400" y2="270" stroke="#1f2937"/><line x1="90" y1="40" x2="90" y2="270" stroke="#1f2937"/><text x="30" y="155" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 30 155)">Homes that recycle (%)</text><text x="245" y="24" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" font-size="13">Town B recycles THREE TIMES as much!</text></svg>`;


export const practice: TopicPractice = {
  // =========================================================================
  // QUICK QUIZ
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "geo-skills-quiz-q01",
      question: "On an 8-point compass, which direction is exactly halfway between **north** and **east**?",
      answer: { type: "text", accept: ["north-east", "north east", "northeast", "NE"] },
      traps: [
        { spec: { type: "text", accept: ["north-west", "north west", "northwest", "NW"] }, feedback: "North-west is between north and **west**. East is to the right of north on a compass." },
      ],
      solution: ["The four in-between points are named north or south first, then east or west.", "Halfway between north and east is **north-east (NE)**."],
      difficulty: "warmup",
      guideRef: "grid-references",
      hints: ["Draw a quick compass: N at the top, E on the right. What sits between them?"],
      strategy: "Sketch it",
    },
    {
      kind: "short",
      id: "geo-skills-quiz-q02",
      question: "What is the name of the line of **longitude** at 0°, which runs through Greenwich in London?",
      answer: { type: "text", accept: ["Prime Meridian", "Greenwich Meridian", "the Greenwich Meridian", "Meridian of Greenwich"] },
      traps: [{ spec: { type: "text", accept: ["Equator"] }, feedback: "The Equator is 0° **latitude** (it runs east–west). The 0° line of longitude runs pole to pole." }],
      solution: ["Lines of longitude are also called meridians.", "The 0° meridian through Greenwich is the **Prime Meridian**."],
      commonError: "Mixing up the Equator (0° latitude) with the Prime Meridian (0° longitude).",
      difficulty: "warmup",
      guideRef: "latitude-longitude",
      hints: ["'Prime' means first. Lines of longitude are called meridians."],
    },
    {
      kind: "short",
      id: "geo-skills-quiz-q03",
      question: "On a **1:25 000** map, how many centimetres represent 1 km on the ground? Give your answer in cm.",
      answer: { type: "number", value: 4 },
      traps: [{ spec: { type: "number", value: 2 }, feedback: "2 cm = 1 km is the rule for a **1:50 000** map. A 1:25 000 map is twice as detailed." }],
      solution: ["1 km = 100 000 cm.", "Each map cm represents 25 000 cm, so 100 000 ÷ 25 000 = **4 cm**."],
      difficulty: "warmup",
      guideRef: "scale-distance",
      hints: ["How many cm are in 1 km? Divide that by 25 000."],
      strategy: "Work it out from the map",
    },
    {
      kind: "short",
      id: "geo-skills-quiz-q04",
      question: "Look at Map A. Give the **four-figure** grid reference of the square that contains the lake.",
      diagram: MAP_A,
      answer: { type: "text", accept: ["4017", "40 17"] },
      traps: [
        { spec: { type: "text", accept: ["1740", "17 40"] }, feedback: "You gave the northing first. Easting first: along the corridor, then up the stairs." },
        { spec: { type: "text", accept: ["4118", "41 18"] }, feedback: "You used the lines to the right and above the square. Use the **bottom-left** corner." },
      ],
      solution: ["The lake lies between eastings 40 and 41, and between northings 17 and 18.", "Bottom-left corner: easting 40, northing 17 → **4017**."],
      commonError: "Giving the northing first (1740).",
      difficulty: "core",
      guideRef: "grid-references",
      hints: ["Find the lake (pale blue oval).", "Which easting line is on its left? Which northing line is below it?"],
      strategy: "Work it out from the map",
    },
    {
      kind: "short",
      id: "geo-skills-quiz-q05",
      question: "Look at Map A. Give the **six-figure** grid reference of the campsite (green triangle).",
      diagram: MAP_A,
      answer: { type: "text", accept: ["444183", "444 183"] },
      traps: [
        { spec: { type: "text", accept: ["183444", "183 444"] }, feedback: "Right digits, wrong order — easting (444) first, then northing (183)." },
        { spec: { type: "text", accept: ["4418", "44 18"] }, feedback: "That is the four-figure square. Add the tenths across and up to make six figures." },
      ],
      solution: [
        "Square: easting 44, northing 18.",
        "Tenths across from easting 44: 4 → 444.",
        "Tenths up from northing 18: 3 → 183.",
        "Six-figure reference: **444183**.",
      ],
      difficulty: "core",
      guideRef: "grid-references",
      hints: ["Start with the four-figure square.", "Use the tick marks: count tenths across, then tenths up.", "Write the easting digit after 44 and the northing digit after 18."],
      strategy: "Work it out from the map",
    },
    {
      kind: "short",
      id: "geo-skills-quiz-q06",
      question: "On a **1:50 000** map, a straight road measures **7 cm**. How long is it on the ground? Give your answer in km.",
      answer: { type: "number", value: 3.5 },
      traps: [
        { spec: { type: "number", value: 1.75 }, feedback: "You used 4 cm = 1 km, which is the rule for 1:25 000. At 1:50 000, 2 cm = 1 km." },
        { spec: { type: "number", value: 14 }, feedback: "You multiplied. Going from the map to the ground, divide the cm by 2." },
      ],
      solution: ["At 1:50 000, 2 cm = 1 km.", "7 ÷ 2 = **3.5 km**."],
      commonError: "Using the 1:25 000 rule (4 cm = 1 km) on a 1:50 000 map.",
      difficulty: "core",
      guideRef: "scale-distance",
      hints: ["How many cm make 1 km on a 1:50 000 map?", "How many lots of that fit into 7 cm?"],
      strategy: "Work it out from the map",
    },
    {
      kind: "mcq",
      id: "geo-skills-quiz-q07",
      question: "Which line of latitude is found at **66.5°N**?",
      options: ["Tropic of Cancer", "Arctic Circle", "Antarctic Circle", "Equator"],
      answerIndex: 1,
      explanation:
        "The **Arctic Circle** is at 66.5°N. The Tropic of Cancer is much closer to the Equator, at 23.5°N, and the Antarctic Circle is the matching line in the south (66.5°S).",
      difficulty: "core",
      guideRef: "latitude-longitude",
      hints: ["66.5° is a long way from the Equator — near which pole?", "N means it is in the Northern Hemisphere."],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "geo-skills-quiz-q08",
      question: "Use the climate graph for Town X. How much **more rain** falls in December than in April? Give your answer in mm.",
      diagram: CLIMATE,
      answer: { type: "number", value: 50 },
      traps: [
        { spec: { type: "number", value: 140 }, feedback: "You added the two months. 'How much more' means subtract." },
        { spec: { type: "number", value: 6 }, feedback: "That is the difference in **temperature** (9 °C − 3 °C). Rainfall is shown by the bars on the left axis." },
      ],
      solution: ["December bar: 95 mm. April bar: 45 mm.", "95 − 45 = **50 mm**."],
      difficulty: "core",
      guideRef: "graphs-and-charts",
      hints: ["Rainfall = the blue bars, read on the left axis.", "Both bars end halfway between grid lines.", "'How much more' = bigger − smaller."],
      strategy: "Use figures from the source",
    },
    {
      kind: "mcq",
      id: "geo-skills-quiz-q09",
      question: "When you describe a graph using **TEA**, what does the **A** stand for?",
      options: ["Average", "Analysis", "Anomaly", "Axis"],
      answerIndex: 2,
      explanation:
        "TEA = **Trend**, **Evidence**, **Anomaly**. An anomaly is a value that does not fit the overall pattern. An average can be useful evidence, but it is not the A in TEA.",
      difficulty: "warmup",
      guideRef: "describing-patterns",
      hints: ["The A is something that does not fit the pattern."],
      strategy: "TEA (Trend, Evidence, Anomaly)",
    },
    {
      kind: "short",
      id: "geo-skills-quiz-q10",
      question: "In the pie chart of 40 students, the **walk** sector has an angle of 54°. What percentage of the class walk to school? Give your answer as a percentage.",
      diagram: PIE,
      answer: { type: "number", value: 15 },
      traps: [
        { spec: { type: "number", value: 54 }, feedback: "54 is the angle in degrees, not a percentage. A whole pie is 360°, not 100°." },
        { spec: { type: "number", value: 6 }, feedback: "6 is the number of students who walk. Now turn it into a percentage of 40." },
      ],
      solution: ["Percentage = angle ÷ 360 × 100.", "54 ÷ 360 = 0.15", "0.15 × 100 = **15%** (that is 6 of the 40 students)."],
      commonError: "Treating degrees as if they were percentages.",
      difficulty: "core",
      guideRef: "graphs-and-charts",
      hints: ["A whole circle is 360°.", "What fraction of 360 is 54? Turn that fraction into a percentage."],
      strategy: "Spot the misconception",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS
  // =========================================================================
  papers: [
    {
      id: "geo-skills-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "geo-skills-p1-q01",
          question: "Look at Map A. Give the **four-figure** grid reference of the square that contains the school (dark blue square).",
          diagram: MAP_A,
          answer: { type: "text", accept: ["4317", "43 17"] },
          traps: [
            { spec: { type: "text", accept: ["1743", "17 43"] }, feedback: "Northing first by mistake — eastings go first." },
            { spec: { type: "text", accept: ["4318", "43 18"] }, feedback: "You used the northing line **above** the school. Use the line below it (the bottom-left corner)." },
          ],
          solution: ["The school is east of easting 43 and north of northing 17.", "Bottom-left corner → **4317**."],
          difficulty: "warmup",
          guideRef: "grid-references",
          hints: ["Along the corridor (easting), then up the stairs (northing)."],
          strategy: "Work it out from the map",
        },
        {
          kind: "short",
          id: "geo-skills-p1-q02",
          question: "Look at Map A. Give the **six-figure** grid reference of the spot height marked 142 m.",
          diagram: MAP_A,
          answer: { type: "text", accept: ["404196", "404 196"] },
          traps: [
            { spec: { type: "text", accept: ["196404", "196 404"] }, feedback: "Swap the halves: easting (404) comes before northing (196)." },
            { spec: { type: "text", accept: ["4019", "40 19"] }, feedback: "That is only the four-figure square. Add tenths to pinpoint the symbol." },
          ],
          solution: ["Square 4019.", "4 tenths east of easting 40 → 404.", "6 tenths north of northing 19 → 196.", "Answer: **404196**."],
          difficulty: "core",
          guideRef: "grid-references",
          hints: ["Find the blue triangle labelled 142 and its four-figure square first.", "Count tenths across using the ticks along the bottom edge.", "Count tenths up using the ticks on the left edge."],
          strategy: "Work it out from the map",
        },
        {
          kind: "short",
          id: "geo-skills-p1-q03",
          question: "Look at Map A. In which compass direction is the **campsite** from the **school**? Use one of the 8 compass points.",
          diagram: MAP_A,
          answer: { type: "text", accept: ["north-east", "north east", "northeast", "NE"] },
          traps: [{ spec: { type: "text", accept: ["south-west", "south west", "southwest", "SW"] }, feedback: "That is the direction of the school **from** the campsite. Start at the school." }],
          solution: [
            "School 434173 → campsite 444183.",
            "Easting goes up by 1.0 km (further east); northing goes up by 1.0 km (further north).",
            "Equal amounts east and north = **north-east**.",
          ],
          commonError: "Reversing the direction (giving the direction FROM the campsite TO the school).",
          difficulty: "core",
          guideRef: "grid-references",
          hints: ["Put your finger on the school — that is your starting point.", "Is the campsite up or down the map? Left or right?", "Equal distances up and right gives a diagonal compass point."],
          strategy: "Sketch it",
        },
        {
          kind: "short",
          id: "geo-skills-p1-q04",
          question:
            "On Map A, the post office is **2.1 km** due north of the school. How far apart would they be on a printed **1:25 000** map? Give your answer in cm.",
          diagram: MAP_A,
          answer: { type: "number", value: 8.4 },
          traps: [
            { spec: { type: "number", value: 4.2 }, feedback: "You used 2 cm per km (the 1:50 000 rule). At 1:25 000, 1 km = 4 cm." },
            { spec: { type: "number", value: 0.525 }, feedback: "You divided. Going from the ground to the map, multiply the km by 4." },
          ],
          solution: ["At 1:25 000, 1 km = 4 cm on the map.", "2.1 × 4 = **8.4 cm**."],
          commonError: "Dividing instead of multiplying when converting ground distance to map distance.",
          difficulty: "core",
          guideRef: "scale-distance",
          hints: ["How many map cm stand for each km at 1:25 000?", "Every km needs that many cm, so multiply."],
          strategy: "Work it out from the map",
        },
        {
          kind: "mcq",
          id: "geo-skills-p1-q05",
          question: "Look at the latitude–longitude grid. Which point lies **within the tropics** (between 23.5°N and 23.5°S)?",
          diagram: LATLONG,
          options: ["Point Q", "Point S", "Point R", "Point T"],
          answerIndex: 2,
          explanation:
            "**R** is on the Equator (0°), between the two tropics. Q (30°S) and S (30°N) look close to the Equator, but 30° is further out than 23.5°, so they lie just outside the tropics. T (60°S) is far to the south.",
          difficulty: "core",
          guideRef: "latitude-longitude",
          hints: ["Find the two dashed tropic lines.", "Which point lies between them?"],
          strategy: "Eliminate options",
        },
        {
          kind: "written",
          id: "geo-skills-p1-q06",
          question: "Use the climate graph for Town X. **Describe** the pattern of temperature through the year. [3 marks]",
          diagram: CLIMATE,
          marks: 3,
          modelAnswer:
            "Temperature rises steadily from January to a peak in July, then falls again to December. The coldest month is January at 2 °C and the warmest is July at 18 °C, giving an annual range of 16 °C. Temperatures are lowest in winter (December to February, 2–3 °C) and highest in summer (June to August, 16–18 °C).",
          markScheme: [
            { point: "Trend: temperature rises to a peak in summer (July) then falls", keywords: ["rises", "increases", "peak", "falls", "decreases", "summer", "july"] },
            { point: "Evidence: accurate figures with units, e.g. 2 °C in January and 18 °C in July", keywords: ["2", "18", "°c", "degrees", "january", "july"] },
            { point: "Manipulates data, e.g. annual range of 16 °C or winter/summer comparison", keywords: ["16", "range", "difference", "winter", "summer"] },
          ],
          commonError: "Explaining why (e.g. 'because of the Sun') when the command word is describe, or quoting numbers without °C.",
          difficulty: "core",
          guideRef: "describing-patterns",
          hints: [
            "Use the red line and the right-hand axis only.",
            "Trend first: what happens from January to July, then July to December?",
            "Add evidence: highest and lowest values with months and units. Can you calculate the range?",
          ],
          strategy: "TEA (Trend, Evidence, Anomaly)",
        },
        {
          kind: "short",
          id: "geo-skills-p1-q07",
          question: "Use the climate graph for Town X. Calculate the **total annual rainfall**. Give your answer in mm.",
          diagram: CLIMATE,
          answer: { type: "number", value: 810 },
          traps: [
            { spec: { type: "number", value: 715 }, feedback: "You have missed out one month (December, 95 mm). Tick off all 12 bars as you add." },
            { spec: { type: "number", value: 67.5 }, feedback: "That is the **mean** monthly rainfall. The question asks for the total." },
          ],
          solution: [
            "Read each bar: 80, 60, 55, 45, 50, 55, 60, 65, 70, 85, 90, 95.",
            "January–June: 80 + 60 + 55 + 45 + 50 + 55 = 345 mm.",
            "July–December: 60 + 65 + 70 + 85 + 90 + 95 = 465 mm.",
            "Total = 345 + 465 = **810 mm**.",
          ],
          commonError: "Missing a month or misreading a bar that ends halfway between grid lines.",
          difficulty: "core",
          guideRef: "graphs-and-charts",
          hints: ["Read all 12 bars on the left-hand axis and write them down.", "Add them in two groups of six to avoid slips.", "Check you have exactly 12 numbers."],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "geo-skills-p1-q08",
          question: "On a climate graph, rainfall is usually drawn as **bars** and temperature as a **line**. Suggest why. [2 marks]",
          diagram: CLIMATE,
          marks: 2,
          modelAnswer:
            "Rainfall is a total amount collected over each separate month, so each month is its own block and bars show the separate totals. Temperature is a continuous variable that changes gradually from one month to the next, so a line joining monthly averages shows that smooth change and the overall trend.",
          markScheme: [
            { point: "Rainfall is a separate total for each month, so bars suit it", keywords: ["total", "separate", "amount", "each month", "collected", "bars"] },
            { point: "Temperature changes continuously/gradually, so a line shows the trend", keywords: ["continuous", "gradual", "changes", "trend", "line", "smooth"] },
          ],
          difficulty: "core",
          guideRef: "graphs-and-charts",
          hints: ["Is rainfall something you add up, like water in a gauge?", "Does temperature suddenly jump at midnight on the 1st of each month, or change smoothly?"],
          strategy: "Compare and contrast",
        },
        {
          kind: "written",
          id: "geo-skills-p1-q09",
          question: "Look at Map A. **Describe the location** of the railway station. [3 marks]",
          diagram: MAP_A,
          marks: 3,
          modelAnswer:
            "The station is at grid reference 427169, in square 4216. It lies on the railway line, about 0.4 km east of the point where the main road crosses the railway. It is south of the river and about 2 km south-east of the church.",
          markScheme: [
            { point: "Accurate grid reference (427169 or square 4216)", keywords: ["427169", "427 169", "4216"] },
            { point: "Relates it to a nearby feature, e.g. on the railway line / east of the main road / south of the river", keywords: ["railway", "main road", "river", "east", "south"] },
            { point: "Uses a compass direction and distance from another feature, e.g. about 2 km south-east of the church", keywords: ["south-east", "south east", "2 km", "church", "km"] },
          ],
          commonError: "Only giving a grid reference, or using vague words like 'near the bottom of the map'.",
          difficulty: "core",
          guideRef: "grid-references",
          hints: ["Start with a grid reference.", "What is the station on or next to?", "Add a compass direction and a distance from a named feature."],
          strategy: "Work it out from the map",
        },
        {
          kind: "written",
          id: "geo-skills-p1-q10",
          question:
            "Siti counted pedestrians for 10 minutes at 8 sites in a city. Use the scatter graph to **describe** the relationship between distance from the city centre and the number of pedestrians. [4 marks]",
          diagram: SCATTER,
          marks: 4,
          modelAnswer:
            "There is a negative correlation: as distance from the city centre increases, the number of pedestrians generally decreases. For example, site 1 at 0.5 km had 120 pedestrians, while site 8 at 4 km had only 20, a fall of 100. Between 0.5 km and 3 km the count falls steadily, by roughly 15–20 pedestrians every 0.5 km. However, site 7 is an anomaly: it is 3.5 km from the centre but had 110 pedestrians, almost as many as site 1.",
          markScheme: [
            { point: "Trend: number of pedestrians generally falls as distance increases", keywords: ["decrease", "falls", "fewer", "goes down", "decline"] },
            { point: "Uses the correct term: negative correlation", keywords: ["negative", "correlation", "inverse"] },
            { point: "Evidence: at least two paired figures, e.g. 120 at 0.5 km and 20 at 4 km", keywords: ["120", "20", "0.5", "4 km", "100"] },
            { point: "Anomaly: site 7 with 110 pedestrians at 3.5 km", keywords: ["site 7", "anomaly", "110", "3.5", "does not fit"] },
          ],
          commonError: "Giving reasons (shops, offices) instead of describing, or quoting numbers without the matching distance.",
          difficulty: "core",
          guideRef: "describing-patterns",
          hints: [
            "Use TEA: Trend, Evidence, Anomaly.",
            "For evidence, pair each count with its distance (e.g. 120 at 0.5 km).",
            "Which numbered site does not follow the pattern?",
          ],
          strategy: "TEA (Trend, Evidence, Anomaly)",
        },
        {
          kind: "written",
          id: "geo-skills-p1-q11",
          question: "Site 7 on the scatter graph is an anomaly. **Suggest** two possible reasons why it had so many pedestrians. [2 marks]",
          diagram: SCATTER,
          marks: 2,
          modelAnswer:
            "Site 7 may be next to a large shopping centre or an MRT station, which draws lots of people even though it is 3.5 km from the centre. Alternatively, the count may have been taken at a busier time (for example, as a school finished) or during a special event, so the data were not collected fairly.",
          markScheme: [
            { point: "A local attraction or transport hub, e.g. shopping centre, MRT station, bus interchange, school or market", keywords: ["shopping", "mall", "mrt", "station", "bus", "school", "market", "hawker", "attraction"] },
            { point: "A data-collection reason, e.g. different time of day, special event, counting error", keywords: ["time", "event", "error", "mistake", "rush hour", "lunch", "weekend", "busier"] },
          ],
          difficulty: "core",
          guideRef: "describing-patterns",
          hints: ["Think about what could attract people to one place far from the centre.", "Could the way the data were collected explain it?"],
          strategy: "Look for the anomaly",
        },
        {
          kind: "short",
          id: "geo-skills-p1-q12",
          question:
            "A town's population is shown in the table.\n\n| Year | Population |\n|---|---|\n| 2000 | 40,000 |\n| 2020 | 52,000 |\n\nCalculate the **percentage change** in population from 2000 to 2020. Give your answer as a percentage.",
          answer: { type: "number", value: 30 },
          traps: [
            { spec: { type: "number", value: 12000 }, feedback: "12,000 is the actual change. Now divide by the original (40,000) and multiply by 100." },
            { spec: { type: "number", value: 130 }, feedback: "130% is the new population as a percentage of the old one. Percentage **change** is the increase only: 130 − 100." },
            { spec: { type: "number", value: 23.08, tolerance: 0.1 }, feedback: "You divided by the new value (52,000). Always divide by the **original** value." },
          ],
          solution: ["Change = 52,000 − 40,000 = 12,000.", "Percentage change = change ÷ original × 100.", "12,000 ÷ 40,000 × 100 = **30%**."],
          commonError: "Dividing by the new value instead of the original value.",
          difficulty: "core",
          guideRef: "graphs-and-charts",
          hints: ["First find the change (new − old).", "Divide by the ORIGINAL value, then × 100."],
          strategy: "Use figures from the source",
        },
        {
          kind: "mcq",
          id: "geo-skills-p1-q13",
          question: "Which type of graph would be best for showing the **proportion** of a class using each type of transport to school?",
          options: ["A line graph", "A scatter graph", "A climate graph", "A pie chart"],
          answerIndex: 3,
          explanation:
            "A **pie chart** shows how one whole (the class) is split into parts, so you can compare proportions at a glance. A line graph is for change over time and a scatter graph is for the relationship between two variables.",
          difficulty: "warmup",
          guideRef: "graphs-and-charts",
          hints: ["'Proportion' means parts of a whole."],
          strategy: "Eliminate options",
        },
        {
          kind: "written",
          id: "geo-skills-p1-q14",
          question: "**Describe** the location of Singapore. Use latitude and longitude and the CLOCC checklist. [4 marks]",
          marks: 4,
          modelAnswer:
            "Singapore is at about 1°N, 104°E, so it is in the Northern and Eastern hemispheres, only about 1° (roughly 140 km) north of the Equator and well inside the tropics. It is in South-east Asia, on the continent of Asia, at the southern tip of the Malay Peninsula. Malaysia lies to the north, across the Johor Strait, and the islands of Indonesia lie to the south, across the Singapore Strait. The South China Sea lies to the east and the Strait of Malacca to the west, connecting to the Indian Ocean.",
          markScheme: [
            { point: "Coordinates: about 1°N, 104°E", keywords: ["1°n", "1 n", "104", "1 degree", "104°e"] },
            { point: "Hemispheres / close to the Equator / within the tropics", keywords: ["northern", "eastern", "hemisphere", "equator", "tropics"] },
            { point: "Continent / region: South-east Asia, southern tip of the Malay Peninsula", keywords: ["asia", "south-east asia", "southeast asia", "malay peninsula", "peninsula"] },
            { point: "Neighbouring countries or seas with compass directions, e.g. Malaysia to the north, Indonesia to the south, South China Sea to the east", keywords: ["malaysia", "indonesia", "south china sea", "strait", "north", "south"] },
          ],
          commonError: "Saying Singapore is 'on the Equator' or in the Southern Hemisphere — it is just north of it.",
          difficulty: "core",
          guideRef: "latitude-longitude",
          hints: [
            "Start with the coordinates and say which hemispheres they put Singapore in.",
            "CLOCC: Continents, Lines of latitude, Oceans, Countries, Compass.",
            "Name a neighbour to the north and one to the south.",
          ],
          strategy: "CLOCC (Continents, Lines of latitude, Oceans, Countries, Compass)",
        },
        {
          kind: "written",
          id: "geo-skills-p1-q15",
          question:
            "'A six-figure grid reference is always better than a four-figure grid reference.' Using examples from Map A, **to what extent** do you agree? [6 marks]",
          diagram: MAP_A,
          marks: 6,
          modelAnswer:
            "A six-figure reference is more precise: it pinpoints a spot to the nearest 100 m (a tenth of a 1 km square). For small point features this really matters. The church is at 413183 and the station at 427169; the four-figure references 4118 and 4216 only say which 1 km square to search, and a whole square is a large area to search in an emergency or on a walk.\n\nHowever, a four-figure reference is often good enough, and sometimes better. The woodland fills the whole of square 4419 and the lake lies entirely within 4017, so a single six-figure point would only describe one spot in a larger area, while the four-figure square describes the whole feature. Four-figure references are also quicker to give and there is less chance of miscounting the tenths. Neither type describes a long line such as the river or the main road well; for these you need several references or a description.\n\nOverall, I mostly disagree with 'always'. Six figures are better for small point features such as buildings and spot heights, but four figures are better for area features, so the best choice depends on the size of the feature and why you need the location.",
          markScheme: [
            { point: "Six-figure is more precise — to the nearest 100 m / tenths of a square", keywords: ["100 m", "100 metres", "tenths", "precise", "exact", "pinpoint", "accurate"] },
            { point: "Map A example where precision matters, with a correct six-figure reference (e.g. church 413183, station 427169)", keywords: ["413183", "427169", "434173", "444183", "434194", "404196", "church", "station"] },
            { point: "Four-figure is enough/better for area features filling a square, e.g. woodland 4419 or lake 4017", keywords: ["4419", "4017", "woodland", "lake", "area", "whole square"] },
            { point: "Four-figure is quicker/simpler with less risk of error", keywords: ["quicker", "faster", "simpler", "easier", "mistake", "error"] },
            { point: "Recognises linear features (river, road) need more than one reference or a description", keywords: ["river", "road", "railway", "line", "linear", "several"] },
            { point: "Justified conclusion: depends on feature size / purpose", keywords: ["depends", "overall", "conclusion", "therefore", "disagree", "agree"] },
          ],
          commonError: "Only arguing one side, or writing about six-figure references without any examples from the map.",
          difficulty: "challenge",
          guideRef: "grid-references",
          hints: [
            "First say what a six-figure reference can do that a four-figure one cannot.",
            "Now find a feature on Map A that fills a whole square. Would six figures help there?",
            "Think about long features like the river. Does any single reference describe them well?",
            "Finish with 'Overall…' and say what the choice depends on.",
          ],
          strategy: "Weigh both sides then judge",
        },
      ],
    },
    // -----------------------------------------------------------------------
    {
      id: "geo-skills-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "geo-skills-p2-q01",
          question: "Look at Map B. Give the **four-figure** grid reference of the square containing the car park (blue square with a P).",
          diagram: MAP_B,
          answer: { type: "text", accept: ["2762", "27 62"] },
          traps: [
            { spec: { type: "text", accept: ["6227", "62 27"] }, feedback: "Northing first by mistake. Easting (27) then northing (62)." },
            { spec: { type: "text", accept: ["2863", "28 63"] }, feedback: "You used the lines to the right and above. Use the bottom-left corner of the square." },
          ],
          solution: ["The car park is east of easting 27 and north of northing 62.", "Bottom-left corner → **2762**."],
          difficulty: "warmup",
          guideRef: "grid-references",
          hints: ["Along the corridor, then up the stairs."],
          strategy: "Work it out from the map",
        },
        {
          kind: "short",
          id: "geo-skills-p2-q02",
          question: "Look at Map B. Give the **six-figure** grid reference of the church.",
          diagram: MAP_B,
          answer: { type: "text", accept: ["264617", "264 617"] },
          traps: [
            { spec: { type: "text", accept: ["617264", "617 264"] }, feedback: "Easting first: 264, then northing 617." },
            { spec: { type: "text", accept: ["2661", "26 61"] }, feedback: "That is the four-figure square. Add tenths across and up." },
          ],
          solution: ["Square 2661.", "4 tenths east of easting 26 → 264.", "7 tenths north of northing 61 → 617.", "Answer: **264617**."],
          difficulty: "core",
          guideRef: "grid-references",
          hints: ["Find the church (cross in a circle) inside the grey built-up area.", "Count tenths across using the bottom ticks.", "Count tenths up using the left-hand ticks."],
          strategy: "Work it out from the map",
        },
        {
          kind: "short",
          id: "geo-skills-p2-q03",
          question:
            "Map B is from a **1:50 000** map. Wei Ling measures the winding coastal path from the car park to the lighthouse with a piece of string. On the printed map it is **6.5 cm** long. How long is the path in real life? Give your answer in km.",
          diagram: MAP_B,
          answer: { type: "number", value: 3.25 },
          traps: [
            { spec: { type: "number", value: 1.625 }, feedback: "You used 4 cm = 1 km (1:25 000). Map B is 1:50 000, so 2 cm = 1 km." },
            { spec: { type: "number", value: 13 }, feedback: "You multiplied by 2. From map to ground, divide the cm by 2." },
          ],
          solution: ["At 1:50 000, 2 cm on the map = 1 km.", "6.5 ÷ 2 = **3.25 km**.", "This is longer than the straight-line distance (about 2 km), which makes sense for a winding path."],
          commonError: "Using the wrong scale rule.",
          difficulty: "core",
          guideRef: "scale-distance",
          hints: ["Check the scale written under the map.", "How many cm make 1 km at that scale?", "Divide 6.5 by that number."],
          strategy: "Work it out from the map",
        },
        {
          kind: "short",
          id: "geo-skills-p2-q04",
          question:
            "Town X is at **40°N** and Town Y is at **25°S**, on the same line of longitude. How many degrees of latitude apart are they? Give your answer in degrees.",
          answer: { type: "number", value: 65 },
          traps: [{ spec: { type: "number", value: 15 }, feedback: "You subtracted, but the towns are on opposite sides of the Equator. Add the distance north of the Equator to the distance south of it." }],
          solution: ["Town X is 40° north of the Equator.", "Town Y is 25° south of the Equator.", "They are on opposite sides, so add: 40 + 25 = **65°**."],
          commonError: "Subtracting the two numbers when one is N and the other is S.",
          difficulty: "core",
          guideRef: "latitude-longitude",
          hints: ["Sketch the Equator with one town above it and one below.", "How far is each town from the Equator?", "Opposite sides of the Equator → add."],
          strategy: "Sketch it",
        },
        {
          kind: "short",
          id: "geo-skills-p2-q05",
          question: "Use the world population graph. How many years did it take for the world's population to grow from **2 billion to 4 billion**? Give your answer in years.",
          diagram: POP_LINE,
          answer: { type: "number", value: 47 },
          traps: [
            { spec: { type: "number", value: 33 }, feedback: "33 years (1927–1960) only takes you from 2 to 3 billion. Keep going to 4 billion." },
            { spec: { type: "number", value: 14 }, feedback: "14 years (1960–1974) is just 3 to 4 billion. Start at 2 billion." },
          ],
          solution: ["2 billion was reached in 1927.", "4 billion was reached in 1974.", "1974 − 1927 = **47 years**."],
          difficulty: "core",
          guideRef: "graphs-and-charts",
          hints: ["Find the points for 2 billion and 4 billion on the vertical axis.", "Read the year labels next to each point and subtract."],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "geo-skills-p2-q06",
          question:
            "In the pie chart, 8 of the 40 students travel by **car**. Explain how to work out the angle of the car sector, and how to draw it accurately. [3 marks]",
          diagram: PIE,
          marks: 3,
          modelAnswer:
            "First find the fraction of the class: 8 out of 40 is {{8/40}} = {{1/5}} (20%). A whole pie is 360°, so the car sector is {{1/5}} × 360 = 72°. To draw it, place the centre of a protractor on the centre of the circle, line up 0° with the edge of the previous sector, mark 72°, rule a line from the centre to the edge, and then label or shade the sector and add it to the key.",
          markScheme: [
            { point: "Finds the fraction or percentage: 8/40 = 1/5 = 20%", keywords: ["8/40", "1/5", "20%", "fifth", "20 percent", "0.2"] },
            { point: "Multiplies by 360 to get 72°", keywords: ["360", "72"] },
            { point: "Describes using a protractor from the centre / previous line, then labelling", keywords: ["protractor", "centre", "center", "line", "label", "key", "measure"] },
          ],
          difficulty: "core",
          guideRef: "graphs-and-charts",
          hints: ["What fraction of the class is 8 out of 40?", "A whole pie is 360°. Take that fraction of 360.", "Which tool measures angles?"],
          strategy: "Work it out from the map",
        },
        {
          kind: "mcq",
          id: "geo-skills-p2-q07",
          question: "Use the bar chart of cars counted at the school junction. How many cars were counted **altogether** in the five hours?",
          diagram: BAR,
          options: ["135", "150", "45", "145"],
          answerIndex: 3,
          explanation:
            "Read each bar: 45 + 35 + 20 + 15 + 30 = **145** cars. 45 is only the busiest single hour; 135 and 150 come from misreading one bar by 10 or by 5.",
          difficulty: "core",
          guideRef: "graphs-and-charts",
          hints: ["Read all five bars carefully — some end on a 5 line, not a 10 line.", "Add them all together."],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "geo-skills-p2-q08",
          question:
            "Look at the choropleth map. **Describe** the distribution of population density, then **suggest** two reasons for the pattern. [4 marks]",
          diagram: CHORO,
          marks: 4,
          modelAnswer:
            "Population density is highest in the west and decreases towards the east. District A, in the north-west by the coast, has 1,000 or more people per km², and D, in the south-west, has 500–999. The central districts B and E have 100–499, and the eastern districts C and F have only 0–99. The west may be densely populated because flat coastal land is easier to build on and a port or coastal trade provides jobs. The east is sparsely populated because mountains are steep and cold, with poor soils and difficult transport links.",
          markScheme: [
            { point: "Describes the overall pattern: highest in the west/coast, lowest in the east/mountains", keywords: ["west", "east", "coast", "highest", "lowest", "decreases"] },
            { point: "Uses named districts and key values as evidence, e.g. A 1,000 or more, C and F 0–99", keywords: ["district a", "1,000", "1000", "0–99", "0-99", "c", "f", "500"] },
            { point: "Suggests a reason for high density in the west, e.g. flat coastal land, port, jobs, trade", keywords: ["flat", "port", "jobs", "trade", "coast", "transport", "fishing"] },
            { point: "Suggests a reason for low density in the east, e.g. steep mountains, cold, poor soils, poor access", keywords: ["mountain", "steep", "cold", "soil", "access", "relief", "remote"] },
          ],
          commonError: "Describing each district one by one without stating the overall pattern.",
          difficulty: "core",
          guideRef: "describing-patterns",
          hints: [
            "Read the key first: which shade is the highest density?",
            "Describe the big picture (west vs east) before quoting districts.",
            "For reasons, think about what the sea offers and what mountains make difficult.",
          ],
          strategy: "Read the key first",
          solutions: [
            { label: "Physical reasons", steps: ["West: flat, low coastal land is easy to build on and farm.", "East: steep, high mountains are cold with thin soils, so few people live there."] },
            { label: "Human reasons", steps: ["West: a coastal port brings trade and jobs, and transport links are easier.", "East: remote mountains have poor road links and few jobs."] },
          ],
        },
        {
          kind: "short",
          id: "geo-skills-p2-q09",
          question:
            "On the choropleth map, District E has a population of **45,000** and an area of **150 km²**. Calculate its population density, in people per km².",
          diagram: CHORO,
          answer: { type: "number", value: 300 },
          traps: [{ spec: { type: "number", value: 0.003333, tolerance: 0.0001 }, feedback: "You divided area by population. Density = people ÷ area." }],
          solution: ["Density = population ÷ area.", "45,000 ÷ 150 = **300 people per km²**.", "Check with the map: 300 is in the 100–499 class, which matches District E's shading."],
          difficulty: "core",
          guideRef: "graphs-and-charts",
          hints: ["Density = people ÷ area.", "Does your answer fit E's shading in the key?"],
          strategy: "Use figures from the source",
        },
        {
          kind: "written",
          id: "geo-skills-p2-q10",
          question:
            "Look at Map B. **Describe** the coastline shown on the map. Use grid references in your answer. [4 marks]",
          diagram: MAP_B,
          marks: 4,
          modelAnswer:
            "The sea lies to the east of the map. A headland sticks out into the sea in square 2963, with a lighthouse at its tip at 295636. To the south of the headland is a curved bay with a sandy beach in squares 2861 and 2862. A river flows from west to east and meets the sea in square 2863, just north of the beach. There is a car park close to the beach at 276629 and a viewpoint near the coast at 285646.",
          markScheme: [
            { point: "Identifies the headland with a grid reference (2963) or the lighthouse (295636)", keywords: ["headland", "2963", "295636", "lighthouse"] },
            { point: "Identifies the bay and/or beach with a grid reference (2861 / 2862)", keywords: ["bay", "beach", "2861", "2862", "sand"] },
            { point: "Notes the river mouth meeting the sea (2863) or the sea lying to the east", keywords: ["river", "mouth", "2863", "east", "sea"] },
            { point: "Mentions human features on the coast with a grid reference, e.g. car park 276629, viewpoint 285646", keywords: ["car park", "276629", "viewpoint", "285646", "tourist"] },
          ],
          commonError: "Listing features without any grid references or compass directions.",
          difficulty: "core",
          guideRef: "grid-references",
          hints: ["Where is the sea — which compass direction?", "Find land that sticks out (headland) and land that curves in (bay).", "Give a grid reference for each feature you name."],
          strategy: "Work it out from the map",
        },
        {
          kind: "written",
          id: "geo-skills-p2-q11",
          question:
            "**Explain** how lines of latitude and longitude work together to give the exact location of any place on Earth. Use an example. [3 marks]",
          marks: 3,
          modelAnswer:
            "Lines of latitude run east–west and measure how far north or south of the Equator (0°) a place is, up to 90° at the poles. Lines of longitude run from pole to pole and measure how far east or west of the Prime Meridian (0°) a place is, up to 180°. Because each place has exactly one latitude and one longitude, the point where the two lines cross is unique: for example, Singapore is at about 1°N, 104°E.",
          markScheme: [
            { point: "Latitude measures north/south of the Equator", keywords: ["latitude", "north", "south", "equator"] },
            { point: "Longitude measures east/west of the Prime Meridian", keywords: ["longitude", "east", "west", "prime meridian", "greenwich"] },
            { point: "The crossing point gives a unique location, with a correct example (e.g. Singapore about 1°N, 104°E)", keywords: ["cross", "intersect", "meet", "unique", "1°n", "104", "singapore"] },
          ],
          difficulty: "core",
          guideRef: "latitude-longitude",
          hints: ["What does latitude measure, and from which line?", "What does longitude measure, and from which line?", "Why does using both together pin down one point?"],
          strategy: "Cause → process → effect",
        },
        {
          kind: "mcq",
          id: "geo-skills-p2-q12",
          question: "Which of these maps is the **largest scale** (shows the most detail)?",
          options: ["1:25 000", "1:50 000", "1:250 000", "1:1 000 000"],
          answerIndex: 0,
          explanation:
            "On a 1:25 000 map, 1 cm stands for only 250 m, so features are drawn bigger and with more detail: it is the **largest scale**. 1:1 000 000 has the biggest number, but each cm covers 10 km, so it is the *smallest* scale — the classic mix-up.",
          difficulty: "warmup",
          guideRef: "scale-distance",
          hints: ["Large scale = things look large on the map. Which map shows each cm as the shortest real distance?"],
          strategy: "Spot the misconception",
        },
        {
          kind: "written",
          id: "geo-skills-p2-q13",
          question: "Use the world population graph. **Describe** how world population has grown since 1804. [3 marks]",
          diagram: POP_LINE,
          marks: 3,
          modelAnswer:
            "World population has grown at an accelerating rate, so the line curves upwards like a J. It took about 123 years to grow from 1 billion (1804) to 2 billion (1927), but only 11 years to grow from 7 billion (2011) to 8 billion (2022). Since about 1960 the line has been much steeper, with a billion people added roughly every 11–14 years.",
          markScheme: [
            { point: "Trend: growth has accelerated / J-shaped curve / gets steeper", keywords: ["accelerat", "faster", "j-curve", "j curve", "steeper", "exponential", "rapid"] },
            { point: "Evidence: slow early growth with figures, e.g. 123 years from 1 to 2 billion (1804–1927)", keywords: ["1804", "1927", "123"] },
            { point: "Evidence: fast recent growth with figures, e.g. 11 years from 7 to 8 billion (2011–2022)", keywords: ["2011", "2022", "11 years", "1960", "13", "14"] },
          ],
          commonError: "Saying population 'went up' without quantifying how the rate of growth changed.",
          difficulty: "core",
          guideRef: "describing-patterns",
          hints: [
            "Look at the shape: is the line straight, or getting steeper?",
            "Compare how long the first billion took to add with how long the last one took.",
            "Use years and billions from the labels as evidence.",
          ],
          strategy: "TEA (Trend, Evidence, Anomaly)",
        },
        {
          kind: "written",
          id: "geo-skills-p2-q14",
          question:
            "An exam asked: *'Describe the pattern shown in the scatter graph of pedestrian counts.'* Ethan wrote: *'Because the city centre has lots of shops and offices.'*\n\n**Explain** why Ethan's answer would score few marks, and say how he could improve it. [3 marks]",
          marks: 3,
          modelAnswer:
            "Ethan has answered the wrong command word: 'describe' asks what the pattern is, but he has given a reason, which is 'explain'. He also uses no data from the graph. To improve it he should use TEA: state the trend (pedestrian numbers generally fall as distance from the centre increases — a negative correlation), give evidence with figures (120 at 0.5 km falling to 20 at 4 km), and point out the anomaly (site 7, 110 pedestrians at 3.5 km).",
          markScheme: [
            { point: "He explained (gave a reason) instead of describing — wrong command word", keywords: ["explain", "reason", "because", "command word", "describe", "why"] },
            { point: "No evidence or figures from the graph", keywords: ["no data", "figures", "numbers", "evidence", "no statistics"] },
            { point: "Improvement: use TEA — trend, data and the anomaly (site 7)", keywords: ["tea", "trend", "anomaly", "site 7", "negative", "120", "20"] },
          ],
          difficulty: "core",
          guideRef: "describing-patterns",
          hints: ["What does 'describe' ask you to do? What does Ethan's 'because' signal?", "Did he use any numbers?", "Which three-letter checklist would fix it?"],
          strategy: "Use the command word",
        },
        {
          kind: "written",
          id: "geo-skills-p2-q15",
          question:
            "'Primary data is always more reliable than secondary data.' **To what extent** do you agree? Refer to examples such as a pedestrian count and the Singapore Census 2020. [6 marks]",
          marks: 6,
          modelAnswer:
            "Primary data, such as Siti's pedestrian count, can be very reliable for her enquiry because she chose the sites, the method and the timing, and she knows exactly how the data were collected. It is also up to date and focused on her exact question.\n\nHowever, primary data collected by students is often based on a small sample — eight sites counted once for 10 minutes — so a single busy moment can create an anomaly. People can miscount, and different group members may count differently, which reduces reliability.\n\nSecondary data such as the Singapore Census 2020 is collected by trained government staff from the whole population using a standard method, so it is large-scale and consistent, which makes it very reliable for national patterns. On the other hand, secondary data can be out of date (a census happens only every 10 years), may not cover the exact place or question you are studying, and you cannot check how carefully it was collected.\n\nOverall, I disagree with 'always'. Reliability depends on how the data were collected and the size of the sample, not on whether they are primary or secondary. The strongest enquiries use both: primary data for local detail and secondary data to check it against the bigger picture.",
          markScheme: [
            { point: "Strength of primary data: you control the method, it is up to date and fits your question", keywords: ["control", "method", "up to date", "first-hand", "know how", "specific"] },
            { point: "Weakness of primary data: small sample, human error, timing", keywords: ["small sample", "sample", "error", "miscount", "one time", "anomaly", "bias"] },
            { point: "Strength of secondary data: large-scale, professional, consistent (e.g. Census 2020 covers the whole population)", keywords: ["census", "large", "whole population", "government", "professional", "official"] },
            { point: "Weakness of secondary data: may be out of date, collected for another purpose, method unknown", keywords: ["out of date", "old", "every 10 years", "another purpose", "don't know", "unknown"] },
            { point: "Uses named examples (pedestrian count, Singapore Census 2020) to support points", keywords: ["pedestrian", "count", "census", "2020", "singapore"] },
            { point: "Justified conclusion, e.g. reliability depends on collection method/sample; use both", keywords: ["overall", "depends", "both", "conclusion", "disagree", "therefore"] },
          ],
          commonError: "Assuming 'primary = good, secondary = bad' without judging how each was collected.",
          difficulty: "challenge",
          guideRef: "describing-patterns",
          hints: [
            "Make two columns: strengths and weaknesses of each type of data.",
            "Think about sample size and who collected the data.",
            "What does 'reliable' really depend on?",
            "End with a judgement that answers 'to what extent'.",
          ],
          strategy: "Weigh both sides then judge",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "geo-skills-ch-q01",
      question:
        "Look at Map A. Hana starts at a feature, walks **0.7 km due west** and then **0.4 km due south**, and arrives at the railway station (427169). Give the **six-figure** grid reference of where she started.",
      diagram: MAP_A,
      answer: { type: "text", accept: ["434173", "434 173"] },
      traps: [
        { spec: { type: "text", accept: ["420165", "420 165"] }, feedback: "You walked the route forwards from the station. Work backwards: undo 'west' by going east and undo 'south' by going north." },
        { spec: { type: "text", accept: ["4317", "43 17"] }, feedback: "Right square — now give the full six-figure reference." },
      ],
      solution: [
        "Work backwards from the station at easting 42.7, northing 16.9.",
        "She walked west, so the start was 0.7 km further **east**: 42.7 + 0.7 = 43.4.",
        "She walked south, so the start was 0.4 km further **north**: 16.9 + 0.4 = 17.3.",
        "Start = **434173** — the school.",
      ],
      commonError: "Applying the moves forwards from the station instead of reversing them.",
      difficulty: "challenge",
      guideRef: "grid-references",
      hints: [
        "Work backwards: start at the station and undo each move.",
        "Undoing a walk west means going east. Undoing south means going north.",
        "Remember each 0.1 km is one digit in a six-figure reference.",
      ],
      strategy: "Work it out from the map",
    },
    {
      kind: "short",
      id: "geo-skills-ch-q02",
      question:
        "Look at Map A. Planners want a new straight footpath from the spot height (404196) to the campsite (444183). Calculate the **straight-line length** of the path. Give your answer in km to 1 decimal place.",
      diagram: MAP_A,
      answer: { type: "number", value: 4.2, tolerance: 0.05 },
      traps: [{ spec: { type: "number", value: 5.3 }, feedback: "You added the east and south distances (4.0 + 1.3). That is a walk along two sides of a right-angled triangle, not the straight line." }],
      solution: [
        "East–west difference: 44.4 − 40.4 = 4.0 km.",
        "North–south difference: 19.6 − 18.3 = 1.3 km.",
        "The path is the hypotenuse of a right-angled triangle (Pythagoras):",
        "    distance² = 4.0² + 1.3² = 16 + 1.69 = 17.69",
        "    distance = √17.69 ≈ 4.206 km",
        "To 1 d.p.: **4.2 km**.",
      ],
      solutions: [
        { label: "Measure with the scale", steps: ["On the real 1:25 000 map the line would measure about 16.8 cm.", "16.8 ÷ 4 = 4.2 km — the same answer."] },
      ],
      commonError: "Adding the two sides instead of using Pythagoras.",
      difficulty: "challenge",
      guideRef: "scale-distance",
      hints: [
        "Find how far east and how far south the campsite is from the spot height, in km.",
        "Those two distances make a right angle. The path is the long, sloping side.",
        "Use Pythagoras: a² + b² = c².",
      ],
      strategy: "Sketch it",
    },
    {
      kind: "short",
      id: "geo-skills-ch-q03",
      question:
        "On a **1:50 000** map, a reservoir covers an area of **3 cm²**. What is its real area? Give your answer in km².",
      answer: { type: "number", value: 0.75 },
      traps: [
        { spec: { type: "number", value: 1.5 }, feedback: "You converted as if it were a length (3 × 0.5). An area has two directions, so each 1 cm² is 0.5 km × 0.5 km." },
        { spec: { type: "number", value: 6 }, feedback: "You multiplied by 2. On a 1:50 000 map each cm is only 0.5 km." },
      ],
      solution: [
        "At 1:50 000, 1 cm = 50 000 cm = 0.5 km.",
        "So 1 cm² on the map = 0.5 km × 0.5 km = 0.25 km² on the ground.",
        "3 cm² × 0.25 = **0.75 km²**.",
      ],
      solutions: [
        { label: "Count grid squares", steps: ["At 1:50 000 a 1 km grid square is 2 cm × 2 cm = 4 cm² on the map.", "3 cm² is {{3/4}} of a grid square = 0.75 km²."] },
      ],
      commonError: "Applying the length conversion to an area.",
      difficulty: "challenge",
      guideRef: "scale-distance",
      hints: [
        "What real length does 1 cm represent at 1:50 000?",
        "A 1 cm² square is 1 cm long AND 1 cm wide. What real square does that make?",
        "Area of that real square × 3.",
      ],
      strategy: "Sketch it",
    },
    {
      kind: "written",
      id: "geo-skills-ch-q04",
      question:
        "| Place | Latitude, longitude | Height above sea level |\n|---|---|---|\n| Singapore | about 1°N, 104°E | close to sea level |\n| Quito (Ecuador) | about 0°, 78°W | about 2,850 m |\n\nBoth places are almost on the Equator, yet Quito has a much cooler climate than Singapore.\n\nTemperature falls by about 6.5 °C for every 1,000 m of height. Use this to **estimate** how much cooler Quito should be than a sea-level place at the same latitude, then **explain** why latitude alone cannot predict a place's climate. [4 marks]",
      marks: 4,
      modelAnswer:
        "Both places are within about 1° of the Equator, so the midday Sun is high in the sky all year and both receive strong, concentrated sunlight. Latitude alone would suggest that both are hot. However, Quito is about 2,850 m above sea level. Using the lapse rate, 2.85 × 6.5 ≈ 18.5, so Quito should be roughly 18–19 °C cooler than a sea-level place at the same latitude. This shows that altitude also controls temperature, so latitude alone cannot predict climate; other factors such as height and distance from the sea must be considered too.",
      markScheme: [
        { point: "Both near the Equator, so similar high Sun angle / strong sunlight", keywords: ["equator", "sun", "overhead", "high", "sunlight", "same latitude"] },
        { point: "Identifies Quito's high altitude (about 2,850 m) as the key difference", keywords: ["altitude", "height", "2,850", "2850", "high", "mountain", "andes"] },
        { point: "Correct calculation: 2.85 × 6.5 ≈ 18.5 °C cooler", keywords: ["18.5", "18", "19", "6.5"] },
        { point: "Concludes other factors (altitude, distance from sea) also affect climate, so latitude alone is not enough", keywords: ["other factors", "not enough", "alone", "also", "distance from the sea", "altitude"] },
      ],
      commonError: "Calculating 2,850 × 6.5 without first converting to thousands of metres.",
      difficulty: "challenge",
      guideRef: "latitude-longitude",
      hints: [
        "First compare the latitudes. What does being near the Equator mean for sunlight?",
        "Which column in the table is very different?",
        "How many thousands of metres is 2,850 m? Multiply by 6.5.",
        "If latitude is the same but temperature is not, what else must matter?",
      ],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "geo-skills-ch-q05",
      question:
        "Zara measured the average length of 20 pebbles at six sites along a beach, in the direction of longshore drift.\n\n| Site | Distance along beach (m) | Average pebble length (mm) |\n|---|---|---|\n| 1 | 0 | 62 |\n| 2 | 100 | 55 |\n| 3 | 200 | 49 |\n| 4 | 300 | 58 |\n| 5 | 400 | 38 |\n| 6 | 500 | 30 |\n\nUse TEA to **describe** the pattern, then **suggest** one reason for the anomaly. [5 marks]",
      marks: 5,
      modelAnswer:
        "Pebble size generally decreases with distance along the beach in the direction of longshore drift. The average pebble length falls from 62 mm at site 1 (0 m) to 30 mm at site 6 (500 m), a decrease of 32 mm, so the pebbles at the far end are roughly half the size. Site 4 is an anomaly: at 300 m the pebbles average 58 mm, larger than at site 3 (49 mm). This could be because a groyne or a recent cliff fall at site 4 has added larger, fresh pebbles that have not yet been worn down, or because 20 pebbles is a small sample and Zara happened to pick unusually large ones.",
      markScheme: [
        { point: "Trend: pebble size generally decreases along the beach", keywords: ["decrease", "smaller", "falls", "gets smaller", "decline"] },
        { point: "Evidence: paired figures with units, e.g. 62 mm at 0 m to 30 mm at 500 m", keywords: ["62", "30", "0 m", "500"] },
        { point: "Manipulates data, e.g. decrease of 32 mm / roughly halved", keywords: ["32", "half", "halved", "about half"] },
        { point: "Anomaly: site 4 (58 mm at 300 m) is larger than site 3", keywords: ["site 4", "58", "300", "anomaly"] },
        { point: "Plausible reason for the anomaly, e.g. groyne, cliff fall supplying fresh pebbles, small sample / sampling bias", keywords: ["groyne", "cliff", "rock fall", "landslide", "sample", "bias", "random", "error"] },
      ],
      commonError: "Calling site 1 the anomaly because it has the largest value — it fits the trend.",
      difficulty: "challenge",
      guideRef: "describing-patterns",
      hints: [
        "Read down the pebble column. What happens overall?",
        "Quote the first and last values with units, then calculate the change.",
        "Which site breaks the pattern?",
        "Why might larger pebbles suddenly appear at one spot? Think about the beach and about the sampling.",
      ],
      strategy: "TEA (Trend, Evidence, Anomaly)",
    },
    {
      kind: "short",
      id: "geo-skills-ch-q06",
      question:
        "Use the world population graph. Calculate the **percentage increase** in world population from 1960 (3 billion) to 2022 (8 billion). Give your answer to the nearest whole per cent.",
      diagram: POP_LINE,
      answer: { type: "number", value: 167, tolerance: 0.5 },
      traps: [
        { spec: { type: "number", value: 267, tolerance: 0.5 }, feedback: "That is 8 billion as a percentage of 3 billion. Percentage **increase** uses the change only (8 − 3)." },
        { spec: { type: "number", value: 5 }, feedback: "5 billion is the increase. Now divide by the original 3 billion and × 100." },
        { spec: { type: "number", value: 62.5, tolerance: 0.5 }, feedback: "You divided by the new value (8 billion). Divide by the original value (3 billion)." },
      ],
      solution: [
        "Increase = 8 − 3 = 5 billion.",
        "Percentage increase = increase ÷ original × 100.",
        "    5 ÷ 3 × 100 = 166.67…%",
        "To the nearest whole per cent: **167%**.",
      ],
      commonError: "Dividing by the new value, or giving the new value as a percentage of the old (267%).",
      difficulty: "challenge",
      guideRef: "graphs-and-charts",
      hints: ["What was the increase in billions?", "Divide by the ORIGINAL (1960) value.", "Multiply by 100 and round."],
      strategy: "Use figures from the source",
    },
    {
      kind: "written",
      id: "geo-skills-ch-q07",
      question:
        "A newspaper prints this graph with the headline **'Town B recycles THREE TIMES as much as Town A!'** **Evaluate** the newspaper's claim. [4 marks]",
      diagram: MISLEAD,
      marks: 4,
      modelAnswer:
        "The claim is misleading. The vertical axis starts at 90%, not 0%, so Town B's bar (96%) looks three times as tall as Town A's (92%) — the bars are 6 and 2 units above 90. In reality both towns recycle a very high proportion: the difference is only 4 percentage points, and 96 ÷ 92 ≈ 1.04, so Town B recycles only about 4% more than Town A, not three times as much. If the axis started at 0, the bars would look almost the same height. Overall the claim is not supported by the data; the graph exaggerates a small difference.",
      markScheme: [
        { point: "Identifies the truncated axis starting at 90%, not 0", keywords: ["axis", "starts at 90", "not zero", "not 0", "truncated", "90"] },
        { point: "Reads the real values: 92% and 96%", keywords: ["92", "96"] },
        { point: "Calculates the real difference: 4 percentage points / about 4% more (96 ÷ 92 ≈ 1.04)", keywords: ["4", "1.04", "four", "percentage points"] },
        { point: "Justified judgement: the claim is false/misleading; both towns are similar", keywords: ["misleading", "false", "exaggerate", "not three times", "similar", "overall"] },
      ],
      commonError: "Comparing bar heights by eye without reading the axis.",
      difficulty: "challenge",
      guideRef: "graphs-and-charts",
      hints: [
        "Look closely at the number at the bottom of the vertical axis.",
        "Read the actual percentage for each town.",
        "Is 96 really three times 92? Divide to check.",
        "Evaluate means you must end with a judgement.",
      ],
      strategy: "Spot the misconception",
    },
    {
      kind: "written",
      id: "geo-skills-ch-q08",
      question:
        "Look at Map B. The council wants to build a small **visitor centre** for tourists. It is choosing between **square 2862** and **square 2664**. Using evidence from the map, **evaluate** both sites and recommend one. [6 marks]",
      diagram: MAP_B,
      marks: 6,
      modelAnswer:
        "Square 2862 is right next to the attractions: it contains part of the beach, the river mouth is just to the north in 2863 and the lighthouse (295636) is less than 2 km away. The car park at 276629 and the road are less than 0.5 km away, so visitors can easily reach it. However, most of the square is sea and the land is a narrow strip of beach, so there is little space to build. Being low and on the coast next to a river mouth, it could also flood in storms or be eroded, and a building would spoil the natural beach.\n\nSquare 2664 already has a youth hostel at 264643, so there are tourists staying nearby and services could be shared. It is inland, and probably on higher ground (there is a 112 m spot height nearby at 256645), so it has less flood risk and may have good views. However, the nearest road is over 1 km to the east in 2764, so a new access road would be needed, and it is roughly 2.5–3 km from the beach and lighthouse that most visitors come to see.\n\nOverall, I recommend square 2862, but the centre should be built on the higher land at the back of the beach, near the car park. It is where the visitors already go, and its access is far better, as long as it is designed to cope with flooding.",
      markScheme: [
        { point: "Advantage of 2862 with map evidence, e.g. beach, river mouth, near the lighthouse (295636)", keywords: ["beach", "lighthouse", "295636", "river mouth", "attraction", "coast"] },
        { point: "Access for 2862: car park (276629) / road under 0.5 km away", keywords: ["car park", "276629", "road", "access", "close"] },
        { point: "Disadvantage of 2862, e.g. mostly sea / little land, flood or erosion risk, spoils the beach", keywords: ["sea", "space", "flood", "storm", "erosion", "spoil", "narrow"] },
        { point: "Advantage of 2664, e.g. youth hostel (264643) already there, probably higher land (112 m spot height nearby), less flood risk", keywords: ["hostel", "264643", "112", "higher", "views", "flood"] },
        { point: "Disadvantage of 2664, e.g. over 1 km from the road and roughly 2.5–3 km from the beach/lighthouse", keywords: ["far", "no road", "road", "3 km", "1 km", "distance", "remote"] },
        { point: "Clear recommendation justified by comparing the two sites", keywords: ["recommend", "overall", "better", "choose", "because", "therefore"] },
      ],
      commonError: "Describing only one site, or making claims without grid references or distances from the map.",
      difficulty: "challenge",
      guideRef: "grid-references",
      hints: [
        "Find each square on the map first. What is actually inside it?",
        "Measure roughly how far each site is from the road, the car park and the lighthouse.",
        "Think about risks at the coast as well as benefits.",
        "Finish with a recommendation that says why one site is better than the other.",
      ],
      strategy: "Weigh both sides then judge",
      solutions: [
        { label: "Case for 2862", steps: ["Next to the beach and river mouth, less than 2 km from the lighthouse.", "Car park and road under 0.5 km away.", "Risk: narrow strip of land, flooding and erosion."] },
        { label: "Case for 2664", steps: ["Youth hostel already there; probably higher land; lower flood risk.", "Risk: over 1 km from the road and roughly 2.5–3 km from the coast attractions."] },
      ],
    },
  ],
};
