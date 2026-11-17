import type { Paper } from "../../types.ts";

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
// spot height 112 m at 256645, built-up area 260612 to 269619, beach in 2861/2862.
//
// LATLONG: P 60°N 120°W · Q 30°S 60°E · R 0° 150°E · S 30°N 30°W · T 60°S 90°W.
// CLIMATE (Town X): temp J–D 2,3,6,9,13,16,18,17,14,10,6,3 °C;
//   rain 80,60,55,45,50,55,60,65,70,85,90,95 mm (total 810 mm).
// PIE (40 students): MRT 14 (126°), bus 10 (90°), car 8 (72°), walk 6 (54°), bicycle 2 (18°).
// SCATTER: sites 1–8 at 0.5–4.0 km: 120,100,85,70,55,40,110,20 pedestrians.
// CHORO: A 1,000+, B 100–499, C 0–99, D 500–999, E 100–499, F 0–99 people per km².
// BAR: cars per hour from 08:00 to 12:00: 45, 35, 20, 15, 30.
// ---------------------------------------------------------------------------

const MAP_A = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map A: grid map extract with eastings 40 to 45 and northings 16 to 20, showing a church, school, post office, campsite, railway station, spot height 142 m, lake, river, woodland, a main road, a minor road and a railway"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="50" y="20" width="320" height="256" fill="#f7fee7" stroke="none"/><rect x="306" y="20" width="64" height="64" fill="#bbf7d0"/><circle cx="313.7" cy="27.7" r="3" fill="#22c55e"/><circle cx="313.7" cy="43.7" r="3" fill="#22c55e"/><circle cx="313.7" cy="59.7" r="3" fill="#22c55e"/><circle cx="313.7" cy="75.7" r="3" fill="#22c55e"/><circle cx="329.7" cy="27.7" r="3" fill="#22c55e"/><circle cx="329.7" cy="43.7" r="3" fill="#22c55e"/><circle cx="329.7" cy="59.7" r="3" fill="#22c55e"/><circle cx="329.7" cy="75.7" r="3" fill="#22c55e"/><circle cx="345.7" cy="27.7" r="3" fill="#22c55e"/><circle cx="345.7" cy="43.7" r="3" fill="#22c55e"/><circle cx="345.7" cy="59.7" r="3" fill="#22c55e"/><circle cx="345.7" cy="75.7" r="3" fill="#22c55e"/><circle cx="361.7" cy="27.7" r="3" fill="#22c55e"/><circle cx="361.7" cy="43.7" r="3" fill="#22c55e"/><circle cx="361.7" cy="59.7" r="3" fill="#22c55e"/><circle cx="361.7" cy="75.7" r="3" fill="#22c55e"/><ellipse cx="82" cy="186.4" rx="22.4" ry="19.2" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/><polyline points="104.4,186.4 152.4,173.6 197.2,180 235.6,164 293.2,170.4 370,157.6" fill="none" stroke="#0284c7" stroke-width="3" stroke-linejoin="round"/><line x1="50" y1="218.4" x2="370" y2="218.4" stroke="#1f2937" stroke-width="3"/><line x1="50" y1="128.8" x2="370" y2="128.8" stroke="#334155" stroke-width="6"/><line x1="50" y1="128.8" x2="370" y2="128.8" stroke="#fde047" stroke-width="4"/><line x1="197.2" y1="20" x2="197.2" y2="276" stroke="#334155" stroke-width="7"/><line x1="197.2" y1="20" x2="197.2" y2="276" stroke="#f97316" stroke-width="5"/><path d="M190.2 174h14M190.2 186h14" stroke="#1f2937" stroke-width="2"/><circle cx="133.2" cy="128.8" r="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><path d="M133.2 124.8v8M129.2 128.8h8" stroke="#1f2937" stroke-width="1.5"/><path d="M331.6 122.8L337.6 132.8H325.6Z" fill="#16a34a" stroke="#14532d" stroke-width="1"/><circle cx="222.8" cy="218.4" r="5" fill="#ef4444" stroke="#7f1d1d" stroke-width="1"/><rect x="262.6" y="187.8" width="10" height="10" fill="#1e3a8a"/><rect x="262.6" y="53.4" width="10" height="10" fill="#c7d2fe" stroke="#4338ca" stroke-width="1.5"/><path d="M75.6 39.6L80.6 48.6H70.6Z" fill="#1d4ed8"/><circle cx="75.6" cy="45.6" r="1.5" fill="#ffffff"/><text x="82.6" y="48.6" font-size="11" font-family="sans-serif" fill="#1f2937">142</text><line x1="50" y1="20" x2="50" y2="276" stroke="#64748b" stroke-width="1"/><text x="50" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">40</text><line x1="114" y1="20" x2="114" y2="276" stroke="#64748b" stroke-width="1"/><text x="114" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">41</text><line x1="178" y1="20" x2="178" y2="276" stroke="#64748b" stroke-width="1"/><text x="178" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">42</text><line x1="242" y1="20" x2="242" y2="276" stroke="#64748b" stroke-width="1"/><text x="242" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">43</text><line x1="306" y1="20" x2="306" y2="276" stroke="#64748b" stroke-width="1"/><text x="306" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">44</text><line x1="370" y1="20" x2="370" y2="276" stroke="#64748b" stroke-width="1"/><text x="370" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">45</text><line x1="50" y1="276" x2="370" y2="276" stroke="#64748b" stroke-width="1"/><text x="42" y="280" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">16</text><line x1="50" y1="212" x2="370" y2="212" stroke="#64748b" stroke-width="1"/><text x="42" y="216" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">17</text><line x1="50" y1="148" x2="370" y2="148" stroke="#64748b" stroke-width="1"/><text x="42" y="152" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">18</text><line x1="50" y1="84" x2="370" y2="84" stroke="#64748b" stroke-width="1"/><text x="42" y="88" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">19</text><line x1="50" y1="20" x2="370" y2="20" stroke="#64748b" stroke-width="1"/><text x="42" y="24" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">20</text><path d="M56.4 276v-3M62.8 276v-3M69.2 276v-3M75.6 276v-3M82 276v-6M88.4 276v-3M94.8 276v-3M101.2 276v-3M107.6 276v-3M120.4 276v-3M126.8 276v-3M133.2 276v-3M139.6 276v-3M146 276v-6M152.4 276v-3M158.8 276v-3M165.2 276v-3M171.6 276v-3M184.4 276v-3M190.8 276v-3M197.2 276v-3M203.6 276v-3M210 276v-6M216.4 276v-3M222.8 276v-3M229.2 276v-3M235.6 276v-3M248.4 276v-3M254.8 276v-3M261.2 276v-3M267.6 276v-3M274 276v-6M280.4 276v-3M286.8 276v-3M293.2 276v-3M299.6 276v-3M312.4 276v-3M318.8 276v-3M325.2 276v-3M331.6 276v-3M338 276v-6M344.4 276v-3M350.8 276v-3M357.2 276v-3M363.6 276v-3M50 269.6h3M50 263.2h3M50 256.8h3M50 250.4h3M50 244h6M50 237.6h3M50 231.2h3M50 224.8h3M50 218.4h3M50 205.6h3M50 199.2h3M50 192.8h3M50 186.4h3M50 180h6M50 173.6h3M50 167.2h3M50 160.8h3M50 154.4h3M50 141.6h3M50 135.2h3M50 128.8h3M50 122.4h3M50 116h6M50 109.6h3M50 103.2h3M50 96.8h3M50 90.4h3M50 77.6h3M50 71.2h3M50 64.8h3M50 58.4h3M50 52h6M50 45.6h3M50 39.2h3M50 32.8h3M50 26.4h3" stroke="#334155" stroke-width="1" fill="none"/><rect x="50" y="20" width="320" height="256" fill="none" stroke="#1f2937" stroke-width="1.5"/><rect x="378" y="20" width="98" height="256" fill="#ffffff" stroke="#334155"/><path d="M427 30l6 14h-12z" fill="#1f2937"/><text x="427" y="56" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">N</text><circle cx="390" cy="72" r="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><path d="M390 68v8M386 72h8" stroke="#1f2937" stroke-width="1.5"/><text x="402" y="76" font-family="sans-serif" fill="#1f2937" font-size="11">Church</text><rect x="385" y="85" width="10" height="10" fill="#1e3a8a"/><text x="402" y="94" font-family="sans-serif" fill="#1f2937" font-size="11">School</text><rect x="385" y="103" width="10" height="10" fill="#c7d2fe" stroke="#4338ca" stroke-width="1.5"/><text x="402" y="112" font-family="sans-serif" fill="#1f2937" font-size="11">Post office</text><path d="M390 120L396 130H384Z" fill="#16a34a" stroke="#14532d" stroke-width="1"/><text x="402" y="130" font-family="sans-serif" fill="#1f2937" font-size="11">Campsite</text><circle cx="390" cy="144" r="5" fill="#ef4444" stroke="#7f1d1d" stroke-width="1"/><text x="402" y="148" font-family="sans-serif" fill="#1f2937" font-size="11">Station</text><path d="M390 157L395 166H385Z" fill="#1d4ed8"/><circle cx="390" cy="163" r="1.5" fill="#ffffff"/><text x="402" y="166" font-family="sans-serif" fill="#1f2937" font-size="11">Spot height</text><line x1="384" y1="180" x2="396" y2="180" stroke="#1f2937" stroke-width="3"/><text x="402" y="184" font-family="sans-serif" fill="#1f2937" font-size="11">Railway</text><line x1="384" y1="198" x2="396" y2="198" stroke="#f97316" stroke-width="5"/><text x="402" y="202" font-family="sans-serif" fill="#1f2937" font-size="11">Main road</text><line x1="384" y1="216" x2="396" y2="216" stroke="#334155" stroke-width="6"/><line x1="384" y1="216" x2="396" y2="216" stroke="#fde047" stroke-width="4"/><text x="402" y="220" font-family="sans-serif" fill="#1f2937" font-size="11">Minor road</text><line x1="384" y1="234" x2="396" y2="234" stroke="#0284c7" stroke-width="3"/><text x="402" y="238" font-family="sans-serif" fill="#1f2937" font-size="11">River</text><rect x="384" y="246" width="12" height="10" fill="#bbf7d0"/><circle cx="390" cy="251" r="3" fill="#22c55e"/><text x="402" y="255" font-family="sans-serif" fill="#1f2937" font-size="11">Woodland</text><ellipse cx="390" cy="268" rx="6" ry="5" fill="#bae6fd" stroke="#0284c7"/><text x="402" y="272" font-family="sans-serif" fill="#1f2937" font-size="11">Lake</text><text x="50" y="312" font-family="sans-serif" fill="#1f2937" font-size="11">Map A: 1 grid square = 1 km. Small ticks mark tenths of a square.</text></svg>`;

const MAP_B = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map B: coastal grid map extract with eastings 25 to 30 and northings 61 to 65, showing sea to the east, a headland with a lighthouse, a bay with a beach, a river, a village with a church, a car park, a youth hostel, a viewpoint, a spot height of 112 m and a road"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="50" y="20" width="320" height="256" fill="#f7fee7" stroke="none"/><polygon points="293.2,20 286.8,64.8 299.6,80.8 331.6,84 354,96.8 357.2,116 338,132 306,138.4 274,154.4 254.8,186.4 251.6,218.4 264.4,250.4 280.4,276 370,276 370,20" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5"/><polygon points="274,154.4 254.8,186.4 251.6,218.4 264.4,250.4 245.2,250.4 242,218.4 245.2,186.4 264.4,154.4" fill="#fde68a" stroke="#ca8a04" stroke-width="1"/><rect x="114" y="218.4" width="57.6" height="44.8" fill="#e5e7eb" stroke="#64748b"/><polyline points="50,103.2 101.2,116 165.2,109.6 216.4,122.4 261.2,141.6 290,144.8" fill="none" stroke="#0284c7" stroke-width="3" stroke-linejoin="round"/><polyline points="50,212 171.6,212 216.4,154.4 222.8,20" fill="none" stroke="#334155" stroke-width="6" stroke-linejoin="round"/><polyline points="50,212 171.6,212 216.4,154.4 222.8,20" fill="none" stroke="#fde047" stroke-width="4" stroke-linejoin="round"/><path d="M212 116.4h14M212 128.4h14" stroke="#1f2937" stroke-width="2"/><circle cx="139.6" cy="231.2" r="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><path d="M139.6 227.2v8M135.6 231.2h8" stroke="#1f2937" stroke-width="1.5"/><path d="M139.6 58.8L145.6 68.8H133.6Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="1"/><rect x="210.4" y="148.4" width="12" height="12" fill="#2563eb"/><text x="216.4" y="158.4" font-size="10" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">P</text><circle cx="274" cy="45.6" r="3.5" fill="#f59e0b" stroke="#1f2937" stroke-width="1"/><path d="M274 40.6v-3M274 50.6v3M269 45.6h-3M279 45.6h3" stroke="#1f2937" stroke-width="1.2"/><polygon points="338,103.6 339.6,107.4 343.7,107.7 340.6,110.4 341.5,114.5 338,112.3 334.5,114.5 335.4,110.4 332.3,107.7 336.4,107.4" fill="#facc15" stroke="#1f2937" stroke-width="1"/><circle cx="88.4" cy="52" r="2" fill="#1f2937"/><text x="93.4" y="56" font-size="11" font-family="sans-serif" fill="#1f2937">112</text><text x="325.2" y="199.2" font-size="11" font-family="sans-serif" font-style="italic" fill="#0369a1" text-anchor="middle">Sea</text><line x1="50" y1="20" x2="50" y2="276" stroke="#64748b" stroke-width="1"/><text x="50" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">25</text><line x1="114" y1="20" x2="114" y2="276" stroke="#64748b" stroke-width="1"/><text x="114" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">26</text><line x1="178" y1="20" x2="178" y2="276" stroke="#64748b" stroke-width="1"/><text x="178" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">27</text><line x1="242" y1="20" x2="242" y2="276" stroke="#64748b" stroke-width="1"/><text x="242" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">28</text><line x1="306" y1="20" x2="306" y2="276" stroke="#64748b" stroke-width="1"/><text x="306" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">29</text><line x1="370" y1="20" x2="370" y2="276" stroke="#64748b" stroke-width="1"/><text x="370" y="292" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">30</text><line x1="50" y1="276" x2="370" y2="276" stroke="#64748b" stroke-width="1"/><text x="42" y="280" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">61</text><line x1="50" y1="212" x2="370" y2="212" stroke="#64748b" stroke-width="1"/><text x="42" y="216" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">62</text><line x1="50" y1="148" x2="370" y2="148" stroke="#64748b" stroke-width="1"/><text x="42" y="152" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">63</text><line x1="50" y1="84" x2="370" y2="84" stroke="#64748b" stroke-width="1"/><text x="42" y="88" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">64</text><line x1="50" y1="20" x2="370" y2="20" stroke="#64748b" stroke-width="1"/><text x="42" y="24" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-weight="bold">65</text><path d="M56.4 276v-3M62.8 276v-3M69.2 276v-3M75.6 276v-3M82 276v-6M88.4 276v-3M94.8 276v-3M101.2 276v-3M107.6 276v-3M120.4 276v-3M126.8 276v-3M133.2 276v-3M139.6 276v-3M146 276v-6M152.4 276v-3M158.8 276v-3M165.2 276v-3M171.6 276v-3M184.4 276v-3M190.8 276v-3M197.2 276v-3M203.6 276v-3M210 276v-6M216.4 276v-3M222.8 276v-3M229.2 276v-3M235.6 276v-3M248.4 276v-3M254.8 276v-3M261.2 276v-3M267.6 276v-3M274 276v-6M280.4 276v-3M286.8 276v-3M293.2 276v-3M299.6 276v-3M312.4 276v-3M318.8 276v-3M325.2 276v-3M331.6 276v-3M338 276v-6M344.4 276v-3M350.8 276v-3M357.2 276v-3M363.6 276v-3M50 269.6h3M50 263.2h3M50 256.8h3M50 250.4h3M50 244h6M50 237.6h3M50 231.2h3M50 224.8h3M50 218.4h3M50 205.6h3M50 199.2h3M50 192.8h3M50 186.4h3M50 180h6M50 173.6h3M50 167.2h3M50 160.8h3M50 154.4h3M50 141.6h3M50 135.2h3M50 128.8h3M50 122.4h3M50 116h6M50 109.6h3M50 103.2h3M50 96.8h3M50 90.4h3M50 77.6h3M50 71.2h3M50 64.8h3M50 58.4h3M50 52h6M50 45.6h3M50 39.2h3M50 32.8h3M50 26.4h3" stroke="#334155" stroke-width="1" fill="none"/><rect x="50" y="20" width="320" height="256" fill="none" stroke="#1f2937" stroke-width="1.5"/><rect x="378" y="20" width="98" height="256" fill="#ffffff" stroke="#334155"/><path d="M427 30l6 14h-12z" fill="#1f2937"/><text x="427" y="56" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">N</text><circle cx="390" cy="74" r="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><path d="M390 70v8M386 74h8" stroke="#1f2937" stroke-width="1.5"/><text x="402" y="78" font-size="11" font-family="sans-serif" fill="#1f2937">Church</text><path d="M390 88L396 98H384Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="1"/><text x="402" y="98" font-size="11" font-family="sans-serif" fill="#1f2937">Youth hostel</text><rect x="384" y="108" width="12" height="12" fill="#2563eb"/><text x="390" y="118" font-size="10" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">P</text><text x="402" y="118" font-size="11" font-family="sans-serif" fill="#1f2937">Car park</text><circle cx="390" cy="134" r="3.5" fill="#f59e0b" stroke="#1f2937" stroke-width="1"/><path d="M390 129v-3M390 139v3M385 134h-3M395 134h3" stroke="#1f2937" stroke-width="1.2"/><text x="402" y="138" font-size="11" font-family="sans-serif" fill="#1f2937">Viewpoint</text><polygon points="390,148 391.6,151.8 395.7,152.1 392.6,154.8 393.5,158.9 390,156.7 386.5,158.9 387.4,154.8 384.3,152.1 388.4,151.8" fill="#facc15" stroke="#1f2937" stroke-width="1"/><text x="402" y="158" font-size="11" font-family="sans-serif" fill="#1f2937">Lighthouse</text><circle cx="390" cy="174" r="2" fill="#1f2937"/><text x="402" y="178" font-size="11" font-family="sans-serif" fill="#1f2937">Spot height</text><rect x="384" y="188" width="12" height="10" fill="#e5e7eb" stroke="#64748b"/><text x="402" y="197" font-size="11" font-family="sans-serif" fill="#1f2937">Built-up area</text><line x1="384" y1="213" x2="396" y2="213" stroke="#334155" stroke-width="6"/><line x1="384" y1="213" x2="396" y2="213" stroke="#fde047" stroke-width="4"/><text x="402" y="217" font-size="11" font-family="sans-serif" fill="#1f2937">Road</text><line x1="384" y1="232" x2="396" y2="232" stroke="#0284c7" stroke-width="3"/><text x="402" y="236" font-size="11" font-family="sans-serif" fill="#1f2937">River</text><rect x="384" y="245" width="12" height="10" fill="#fde68a" stroke="#ca8a04"/><text x="402" y="254" font-size="11" font-family="sans-serif" fill="#1f2937">Beach</text><rect x="384" y="262" width="12" height="10" fill="#bae6fd" stroke="#0369a1"/><text x="402" y="271" font-size="11" font-family="sans-serif" fill="#1f2937">Sea</text><text x="50" y="312" font-family="sans-serif" fill="#1f2937" font-size="11">Map B: scale 1:50 000. 1 grid square = 1 km. Ticks mark tenths.</text></svg>`;

const LATLONG = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid of latitude and longitude lines every 30 degrees with the Equator, Prime Meridian, tropics and polar circles marked, and five points P, Q, R, S and T"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="40" y="20" width="400" height="252" fill="#e0f2fe" stroke="#334155"/><line x1="40" y1="20" x2="40" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="40" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">180°W</text><line x1="73.3" y1="20" x2="73.3" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="106.7" y1="20" x2="106.7" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="106.7" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">120°W</text><line x1="140" y1="20" x2="140" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="173.3" y1="20" x2="173.3" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="173.3" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">60°W</text><line x1="206.7" y1="20" x2="206.7" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="240" y1="20" x2="240" y2="272" stroke="#b91c1c" stroke-width="2"/><text x="240" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">0°</text><line x1="273.3" y1="20" x2="273.3" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="306.7" y1="20" x2="306.7" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="306.7" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">60°E</text><line x1="340" y1="20" x2="340" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="373.3" y1="20" x2="373.3" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="373.3" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">120°E</text><line x1="406.7" y1="20" x2="406.7" y2="272" stroke="#94a3b8" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="440" y="286" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">180°E</text><line x1="40" y1="272" x2="440" y2="272" stroke="#94a3b8" stroke-width="1"/><text x="34" y="276" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">90°S</text><line x1="40" y1="230" x2="440" y2="230" stroke="#94a3b8" stroke-width="1"/><text x="34" y="234" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">60°S</text><line x1="40" y1="188" x2="440" y2="188" stroke="#94a3b8" stroke-width="1"/><text x="34" y="192" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">30°S</text><line x1="40" y1="146" x2="440" y2="146" stroke="#b91c1c" stroke-width="2"/><text x="34" y="150" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">0°</text><line x1="40" y1="104" x2="440" y2="104" stroke="#94a3b8" stroke-width="1"/><text x="34" y="108" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">30°N</text><line x1="40" y1="62" x2="440" y2="62" stroke="#94a3b8" stroke-width="1"/><text x="34" y="66" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">60°N</text><line x1="40" y1="20" x2="440" y2="20" stroke="#94a3b8" stroke-width="1"/><text x="34" y="24" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="11">90°N</text><line x1="40" y1="113.1" x2="440" y2="113.1" stroke="#1f2937" stroke-width="1" stroke-dasharray="5 3"/><text x="438" y="125" font-size="10" font-family="sans-serif" fill="#1f2937" text-anchor="end">Tropic of Cancer (23.5°N)</text><line x1="40" y1="178.9" x2="440" y2="178.9" stroke="#1f2937" stroke-width="1" stroke-dasharray="5 3"/><text x="438" y="175.9" font-size="10" font-family="sans-serif" fill="#1f2937" text-anchor="end">Tropic of Capricorn (23.5°S)</text><line x1="40" y1="52.9" x2="440" y2="52.9" stroke="#1f2937" stroke-width="1" stroke-dasharray="5 3"/><text x="438" y="49.9" font-size="10" font-family="sans-serif" fill="#1f2937" text-anchor="end">Arctic Circle (66.5°N)</text><line x1="40" y1="239.1" x2="440" y2="239.1" stroke="#1f2937" stroke-width="1" stroke-dasharray="5 3"/><text x="438" y="251" font-size="10" font-family="sans-serif" fill="#1f2937" text-anchor="end">Antarctic Circle (66.5°S)</text><text x="244" y="32" font-size="10" font-family="sans-serif" fill="#b91c1c">Prime Meridian</text><text x="44" y="143" font-size="10" font-family="sans-serif" fill="#b91c1c">Equator</text><circle cx="106.7" cy="62" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/><text x="113.7" y="76" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">P</text><circle cx="306.7" cy="188" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/><text x="313.7" y="202" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">Q</text><circle cx="406.7" cy="146" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/><text x="413.7" y="160" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">R</text><circle cx="206.7" cy="104" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/><text x="213.7" y="97" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">S</text><circle cx="140" cy="230" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/><text x="147" y="223" font-size="13" font-weight="bold" font-family="sans-serif" fill="#1f2937">T</text><text x="240" y="306" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="11">Lines are drawn every 30°. Longitude labels every 60°.</text></svg>`;

const CLIMATE = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate graph for Town X: blue rainfall bars for each month read on the left axis from 0 to 100 mm, and a red temperature line read on the right axis from 0 to 20 degrees Celsius"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><line x1="60" y1="270" x2="420" y2="270" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="274" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">0</text><text x="425" y="274" font-size="11" font-family="sans-serif" fill="#1f2937">0</text><line x1="60" y1="247" x2="420" y2="247" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="251" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">10</text><text x="425" y="251" font-size="11" font-family="sans-serif" fill="#1f2937">2</text><line x1="60" y1="224" x2="420" y2="224" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="228" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">20</text><text x="425" y="228" font-size="11" font-family="sans-serif" fill="#1f2937">4</text><line x1="60" y1="201" x2="420" y2="201" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">30</text><text x="425" y="205" font-size="11" font-family="sans-serif" fill="#1f2937">6</text><line x1="60" y1="178" x2="420" y2="178" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="182" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">40</text><text x="425" y="182" font-size="11" font-family="sans-serif" fill="#1f2937">8</text><line x1="60" y1="155" x2="420" y2="155" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="159" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">50</text><text x="425" y="159" font-size="11" font-family="sans-serif" fill="#1f2937">10</text><line x1="60" y1="132" x2="420" y2="132" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="136" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">60</text><text x="425" y="136" font-size="11" font-family="sans-serif" fill="#1f2937">12</text><line x1="60" y1="109" x2="420" y2="109" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="113" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">70</text><text x="425" y="113" font-size="11" font-family="sans-serif" fill="#1f2937">14</text><line x1="60" y1="86" x2="420" y2="86" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="90" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">80</text><text x="425" y="90" font-size="11" font-family="sans-serif" fill="#1f2937">16</text><line x1="60" y1="63" x2="420" y2="63" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="67" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">90</text><text x="425" y="67" font-size="11" font-family="sans-serif" fill="#1f2937">18</text><line x1="60" y1="40" x2="420" y2="40" stroke="#e2e8f0" stroke-width="1"/><text x="55" y="44" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">100</text><text x="425" y="44" font-size="11" font-family="sans-serif" fill="#1f2937">20</text><rect x="64" y="86" width="22" height="184" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="75" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">J</text><rect x="94" y="132" width="22" height="138" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="105" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">F</text><rect x="124" y="143.5" width="22" height="126.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="135" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">M</text><rect x="154" y="166.5" width="22" height="103.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="165" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><rect x="184" y="155" width="22" height="115" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="195" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">M</text><rect x="214" y="143.5" width="22" height="126.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="225" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">J</text><rect x="244" y="132" width="22" height="138" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="255" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">J</text><rect x="274" y="120.5" width="22" height="149.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="285" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><rect x="304" y="109" width="22" height="161" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="315" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">S</text><rect x="334" y="74.5" width="22" height="195.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="345" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><rect x="364" y="63" width="22" height="207" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="375" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">N</text><rect x="394" y="51.5" width="22" height="218.5" fill="#60a5fa" stroke="#1e40af" stroke-width="1"/><text x="405" y="284" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">D</text><polyline points="75,247 105,235.5 135,201 165,166.5 195,120.5 225,86 255,63 285,74.5 315,109 345,155 375,201 405,235.5" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="75" cy="247" r="3" fill="#dc2626"/><circle cx="105" cy="235.5" r="3" fill="#dc2626"/><circle cx="135" cy="201" r="3" fill="#dc2626"/><circle cx="165" cy="166.5" r="3" fill="#dc2626"/><circle cx="195" cy="120.5" r="3" fill="#dc2626"/><circle cx="225" cy="86" r="3" fill="#dc2626"/><circle cx="255" cy="63" r="3" fill="#dc2626"/><circle cx="285" cy="74.5" r="3" fill="#dc2626"/><circle cx="315" cy="109" r="3" fill="#dc2626"/><circle cx="345" cy="155" r="3" fill="#dc2626"/><circle cx="375" cy="201" r="3" fill="#dc2626"/><circle cx="405" cy="235.5" r="3" fill="#dc2626"/><line x1="60" y1="270" x2="420" y2="270" stroke="#1f2937"/><line x1="60" y1="40" x2="60" y2="270" stroke="#1f2937"/><line x1="420" y1="40" x2="420" y2="270" stroke="#1f2937"/><text x="16" y="155" font-size="11" font-family="sans-serif" fill="#1e40af" text-anchor="middle" transform="rotate(-90 16 155)">Rainfall (mm)</text><text x="462" y="155" font-size="11" font-family="sans-serif" fill="#dc2626" text-anchor="middle" transform="rotate(90 462 155)">Temperature (°C)</text><text x="240" y="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" font-size="12">Climate graph for Town X</text><text x="240" y="302" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Month</text></svg>`;

const POP_LINE = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of world population in billions against year, with labelled points at 1804 (1 billion), 1927 (2), 1960 (3), 1974 (4), 1987 (5), 1999 (6), 2011 (7) and 2022 (8)"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><line x1="60" y1="270" x2="450" y2="270" stroke="#e2e8f0"/><text x="54" y="274" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">0</text><line x1="60" y1="243" x2="450" y2="243" stroke="#e2e8f0"/><text x="54" y="247" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">1</text><line x1="60" y1="216" x2="450" y2="216" stroke="#e2e8f0"/><text x="54" y="220" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">2</text><line x1="60" y1="189" x2="450" y2="189" stroke="#e2e8f0"/><text x="54" y="193" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">3</text><line x1="60" y1="162" x2="450" y2="162" stroke="#e2e8f0"/><text x="54" y="166" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">4</text><line x1="60" y1="135" x2="450" y2="135" stroke="#e2e8f0"/><text x="54" y="139" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">5</text><line x1="60" y1="108" x2="450" y2="108" stroke="#e2e8f0"/><text x="54" y="112" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">6</text><line x1="60" y1="81" x2="450" y2="81" stroke="#e2e8f0"/><text x="54" y="85" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">7</text><line x1="60" y1="54" x2="450" y2="54" stroke="#e2e8f0"/><text x="54" y="58" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">8</text><line x1="60" y1="27" x2="450" y2="27" stroke="#e2e8f0"/><text x="54" y="31" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">9</text><line x1="60" y1="270" x2="60" y2="275" stroke="#1f2937"/><text x="60" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1800</text><line x1="125" y1="270" x2="125" y2="275" stroke="#1f2937"/><text x="125" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1840</text><line x1="190" y1="270" x2="190" y2="275" stroke="#1f2937"/><text x="190" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1880</text><line x1="255" y1="270" x2="255" y2="275" stroke="#1f2937"/><text x="255" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1920</text><line x1="320" y1="270" x2="320" y2="275" stroke="#1f2937"/><text x="320" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1960</text><line x1="385" y1="270" x2="385" y2="275" stroke="#1f2937"/><text x="385" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2000</text><line x1="450" y1="270" x2="450" y2="275" stroke="#1f2937"/><text x="450" y="288" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2040</text><line x1="60" y1="270" x2="450" y2="270" stroke="#1f2937"/><line x1="60" y1="27" x2="60" y2="270" stroke="#1f2937"/><polyline points="66.5,243 266.4,216 320,189 342.8,162 363.9,135 383.4,108 402.9,81 420.8,54" fill="none" stroke="#7c3aed" stroke-width="2.5"/><circle cx="66.5" cy="243" r="3.5" fill="#7c3aed"/><text x="72.5" y="235" font-family="sans-serif" fill="#1f2937" font-size="10">1804</text><circle cx="266.4" cy="216" r="3.5" fill="#7c3aed"/><text x="260.4" y="210" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">1927</text><circle cx="320" cy="189" r="3.5" fill="#7c3aed"/><text x="314" y="183" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">1960</text><circle cx="342.8" cy="162" r="3.5" fill="#7c3aed"/><text x="336.8" y="156" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">1974</text><circle cx="363.9" cy="135" r="3.5" fill="#7c3aed"/><text x="357.9" y="129" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">1987</text><circle cx="383.4" cy="108" r="3.5" fill="#7c3aed"/><text x="377.4" y="102" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">1999</text><circle cx="402.9" cy="81" r="3.5" fill="#7c3aed"/><text x="396.9" y="75" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">2011</text><circle cx="420.8" cy="54" r="3.5" fill="#7c3aed"/><text x="414.8" y="48" font-family="sans-serif" fill="#1f2937" text-anchor="end" font-size="10">2022</text><text x="16" y="150" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 16 150)">World population (billions)</text><text x="255" y="306" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Year</text><text x="255" y="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" font-size="12">When world population reached each billion</text></svg>`;

const PIE = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pie chart of how 40 students travel to school with sectors for MRT, bus, car, walk and bicycle; the MRT sector is largest and the bicycle sector is smallest"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><path d="M150 160L150 50A110 110 0 0 1 239 224.7Z" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="210.8" y="133" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">MRT</text><path d="M150 160L239 224.7A110 110 0 0 1 85.3 249Z" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5"/><text x="160.7" y="231.4" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">Bus</text><path d="M150 160L85.3 249A110 110 0 0 1 45.4 126Z" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/><text x="85.1" y="185.1" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">Car</text><path d="M150 160L45.4 126A110 110 0 0 1 116 55.4Z" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="101.8" y="115.8" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">Walk</text><path d="M150 160L116 55.4A110 110 0 0 1 150 50Z" fill="#bae6fd" stroke="#1f2937" stroke-width="1.5"/><text x="130.3" y="39.6" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12">Bicycle</text><text x="300" y="60" font-family="sans-serif" fill="#1f2937" font-weight="bold" font-size="12">How 40 students in</text><text x="300" y="76" font-family="sans-serif" fill="#1f2937" font-weight="bold" font-size="12">class 8B travel to school</text><text x="300" y="110" font-family="sans-serif" fill="#1f2937" font-size="11">Each student chose</text><text x="300" y="125" font-family="sans-serif" fill="#1f2937" font-size="11">one main way.</text></svg>`;

const SCATTER = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatter graph of pedestrians counted in 10 minutes against distance from the city centre for 8 numbered sites: counts fall from 120 at 0.5 km to 20 at 4 km, except site 7 with 110 at 3.5 km"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><line x1="60" y1="270" x2="440" y2="270" stroke="#e2e8f0"/><text x="54" y="274" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">0</text><line x1="60" y1="235.7" x2="440" y2="235.7" stroke="#e2e8f0"/><text x="54" y="239.7" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">20</text><line x1="60" y1="201.4" x2="440" y2="201.4" stroke="#e2e8f0"/><text x="54" y="205.4" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">40</text><line x1="60" y1="167.1" x2="440" y2="167.1" stroke="#e2e8f0"/><text x="54" y="171.1" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">60</text><line x1="60" y1="132.9" x2="440" y2="132.9" stroke="#e2e8f0"/><text x="54" y="136.9" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">80</text><line x1="60" y1="98.6" x2="440" y2="98.6" stroke="#e2e8f0"/><text x="54" y="102.6" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">100</text><line x1="60" y1="64.3" x2="440" y2="64.3" stroke="#e2e8f0"/><text x="54" y="68.3" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">120</text><line x1="60" y1="30" x2="440" y2="30" stroke="#e2e8f0"/><text x="54" y="34" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">140</text><line x1="60" y1="30" x2="60" y2="270" stroke="#f1f5f9"/><text x="60" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0</text><line x1="102.2" y1="30" x2="102.2" y2="270" stroke="#f1f5f9"/><text x="102.2" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.5</text><line x1="144.4" y1="30" x2="144.4" y2="270" stroke="#f1f5f9"/><text x="144.4" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1</text><line x1="186.7" y1="30" x2="186.7" y2="270" stroke="#f1f5f9"/><text x="186.7" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1.5</text><line x1="228.9" y1="30" x2="228.9" y2="270" stroke="#f1f5f9"/><text x="228.9" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2</text><line x1="271.1" y1="30" x2="271.1" y2="270" stroke="#f1f5f9"/><text x="271.1" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2.5</text><line x1="313.3" y1="30" x2="313.3" y2="270" stroke="#f1f5f9"/><text x="313.3" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3</text><line x1="355.6" y1="30" x2="355.6" y2="270" stroke="#f1f5f9"/><text x="355.6" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3.5</text><line x1="397.8" y1="30" x2="397.8" y2="270" stroke="#f1f5f9"/><text x="397.8" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">4</text><line x1="440" y1="30" x2="440" y2="270" stroke="#f1f5f9"/><text x="440" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">4.5</text><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937"/><line x1="60" y1="30" x2="60" y2="270" stroke="#1f2937"/><path d="M98.2 60.3l8 8M98.2 68.3l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="108.2" y="59.3" font-family="sans-serif" fill="#1f2937" font-size="10">1</text><path d="M140.4 94.6l8 8M140.4 102.6l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="150.4" y="93.6" font-family="sans-serif" fill="#1f2937" font-size="10">2</text><path d="M182.7 120.3l8 8M182.7 128.3l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="192.7" y="119.3" font-family="sans-serif" fill="#1f2937" font-size="10">3</text><path d="M224.9 146l8 8M224.9 154l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="234.9" y="145" font-family="sans-serif" fill="#1f2937" font-size="10">4</text><path d="M267.1 171.7l8 8M267.1 179.7l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="277.1" y="170.7" font-family="sans-serif" fill="#1f2937" font-size="10">5</text><path d="M309.3 197.4l8 8M309.3 205.4l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="319.3" y="196.4" font-family="sans-serif" fill="#1f2937" font-size="10">6</text><path d="M351.6 77.4l8 8M351.6 85.4l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="361.6" y="76.4" font-family="sans-serif" fill="#1f2937" font-size="10">7</text><path d="M393.8 231.7l8 8M393.8 239.7l8 -8" stroke="#b91c1c" stroke-width="2"/><text x="403.8" y="230.7" font-family="sans-serif" fill="#1f2937" font-size="10">8</text><text x="16" y="150" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 16 150)">Pedestrians in 10 minutes</text><text x="250" y="306" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Distance from city centre (km)</text><text x="250" y="18" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" font-size="12">Pedestrian counts at 8 sites (numbers = site)</text></svg>`;

const CHORO = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Choropleth map of six districts: A in the north-west is darkest at 1,000 or more people per km squared, D is 500 to 999, B and E are 100 to 499, and C and F in the east are lightest at 0 to 99. The sea is to the west and mountains to the east"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><rect x="10" y="30" width="60" height="230" fill="#bae6fd"/><text x="40" y="150" font-size="12" font-family="sans-serif" fill="#0369a1" font-style="italic" text-anchor="middle" transform="rotate(-90 40 150)">Sea (west coast)</text><rect x="70" y="40" width="100" height="110" fill="#991b1b" stroke="#1f2937" stroke-width="1.5"/><text x="120" y="100" font-size="16" font-weight="bold" font-family="sans-serif" fill="#ffffff" text-anchor="middle">A</text><rect x="170" y="40" width="100" height="110" fill="#fca5a5" stroke="#1f2937" stroke-width="1.5"/><text x="220" y="100" font-size="16" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><rect x="270" y="40" width="100" height="110" fill="#fee2e2" stroke="#1f2937" stroke-width="1.5"/><text x="320" y="100" font-size="16" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">C</text><rect x="70" y="150" width="100" height="110" fill="#ef4444" stroke="#1f2937" stroke-width="1.5"/><text x="120" y="210" font-size="16" font-weight="bold" font-family="sans-serif" fill="#ffffff" text-anchor="middle">D</text><rect x="170" y="150" width="100" height="110" fill="#fca5a5" stroke="#1f2937" stroke-width="1.5"/><text x="220" y="210" font-size="16" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">E</text><rect x="270" y="150" width="100" height="110" fill="#fee2e2" stroke="#1f2937" stroke-width="1.5"/><text x="320" y="210" font-size="16" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">F</text><path d="M300 268l10 -12l10 12M318 268l10 -12l10 12M336 268l10 -12l10 12" stroke="#57534e" stroke-width="1.5" fill="none"/><text x="300" y="284" font-family="sans-serif" fill="#1f2937" font-size="11">Mountains in the east</text><path d="M24 25l6 -14l6 14z" fill="#1f2937"/><text x="30" y="9" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="10" font-weight="bold">N</text><text x="385" y="40" font-family="sans-serif" fill="#1f2937" font-weight="bold" font-size="11">People per km²</text><rect x="385" y="55" width="16" height="14" fill="#fee2e2" stroke="#1f2937"/><text x="406" y="66" font-size="11" font-family="sans-serif" fill="#1f2937">0–99</text><rect x="385" y="79" width="16" height="14" fill="#fca5a5" stroke="#1f2937"/><text x="406" y="90" font-size="11" font-family="sans-serif" fill="#1f2937">100–499</text><rect x="385" y="103" width="16" height="14" fill="#ef4444" stroke="#1f2937"/><text x="406" y="114" font-size="11" font-family="sans-serif" fill="#1f2937">500–999</text><rect x="385" y="127" width="16" height="14" fill="#991b1b" stroke="#1f2937"/><text x="406" y="138" font-size="11" font-family="sans-serif" fill="#1f2937">1,000 or more</text><text x="70" y="300" font-family="sans-serif" fill="#1f2937" font-size="12" font-weight="bold">Population density of districts A to F in a region</text></svg>`;

const BAR = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of cars counted each hour at a junction: 45 in the hour from 08:00, 35 from 09:00, 20 from 10:00, 15 from 11:00 and 30 from 12:00"><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><line x1="70" y1="270" x2="450" y2="270" stroke="#e2e8f0"/><text x="64" y="274" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">0</text><line x1="70" y1="247" x2="450" y2="247" stroke="#f1f5f9"/><text x="64" y="251" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">5</text><line x1="70" y1="224" x2="450" y2="224" stroke="#e2e8f0"/><text x="64" y="228" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">10</text><line x1="70" y1="201" x2="450" y2="201" stroke="#f1f5f9"/><text x="64" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">15</text><line x1="70" y1="178" x2="450" y2="178" stroke="#e2e8f0"/><text x="64" y="182" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">20</text><line x1="70" y1="155" x2="450" y2="155" stroke="#f1f5f9"/><text x="64" y="159" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">25</text><line x1="70" y1="132" x2="450" y2="132" stroke="#e2e8f0"/><text x="64" y="136" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">30</text><line x1="70" y1="109" x2="450" y2="109" stroke="#f1f5f9"/><text x="64" y="113" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">35</text><line x1="70" y1="86" x2="450" y2="86" stroke="#e2e8f0"/><text x="64" y="90" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">40</text><line x1="70" y1="63" x2="450" y2="63" stroke="#f1f5f9"/><text x="64" y="67" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">45</text><line x1="70" y1="40" x2="450" y2="40" stroke="#e2e8f0"/><text x="64" y="44" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">50</text><rect x="90" y="63" width="44" height="207" fill="#c7d2fe" stroke="#3730a3" stroke-width="1.2"/><text x="112" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">08:00</text><rect x="162" y="109" width="44" height="161" fill="#c7d2fe" stroke="#3730a3" stroke-width="1.2"/><text x="184" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">09:00</text><rect x="234" y="178" width="44" height="92" fill="#c7d2fe" stroke="#3730a3" stroke-width="1.2"/><text x="256" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">10:00</text><rect x="306" y="201" width="44" height="69" fill="#c7d2fe" stroke="#3730a3" stroke-width="1.2"/><text x="328" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">11:00</text><rect x="378" y="132" width="44" height="138" fill="#c7d2fe" stroke="#3730a3" stroke-width="1.2"/><text x="400" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">12:00</text><line x1="70" y1="270" x2="450" y2="270" stroke="#1f2937"/><line x1="70" y1="35" x2="70" y2="270" stroke="#1f2937"/><text x="20" y="155" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 20 155)">Number of cars</text><text x="260" y="306" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Hour starting at</text><text x="260" y="22" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" font-size="12">Cars counted each hour at a school junction</text></svg>`;


export const mcqPapers: Paper[] = [
  // =========================================================================
  {
    id: "geo-skills-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "geo-skills-m1-q01",
        question: "On an 8-point compass, which direction is exactly **opposite** north-east?",
        options: ["South-west", "South-east", "North-west", "South"],
        answerIndex: 0,
        explanation:
          "Opposite means turning through 180°. Half a turn from north-east takes you past east, south-east and south to **south-west**. South-east is only a quarter turn (90°) away, not opposite.",
        difficulty: "warmup",
        guideRef: "grid-references",
        hints: ["Picture the compass: \"opposite\" means turning half a circle (180°) from north-east."],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q02",
        question: "What is the name of the line of **latitude** at 0°?",
        options: ["Prime Meridian", "Equator", "Tropic of Cancer", "International Date Line"],
        answerIndex: 1,
        explanation:
          "The **Equator** is 0° latitude, halfway between the poles. The Prime Meridian is also 0°, but it is a line of **longitude** (running north–south through Greenwich), so it is the classic mix-up.",
        difficulty: "warmup",
        guideRef: "latitude-longitude",
        hints: ["Latitude lines run east–west around the Earth. Which one cuts the Earth into two equal halves?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q03",
        question: "On a **1:50 000** map, how many centimetres on the map represent 1 km on the ground?",
        options: ["4 cm", "50 cm", "2 cm", "5 cm"],
        answerIndex: 2,
        explanation:
          "1 km = 100 000 cm. On a 1:50 000 map each 1 cm stands for 50 000 cm, so 100 000 ÷ 50 000 = **2 cm**. 4 cm per km is the rule for a 1:25 000 map, which shows things twice as big.",
        difficulty: "warmup",
        guideRef: "scale-distance",
        hints: ["How many centimetres are in 1 km? Then divide by 50 000."],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q04",
        question: "The pie chart shows how 40 students in class 8B travel to school. The **bus** sector has an angle of 90°. What percentage of the class travel by bus?",
        diagram: PIE,
        options: ["90%", "10%", "20%", "25%"],
        answerIndex: 3,
        explanation:
          "A whole pie is 360°, so 90° is {{90/360}} = {{1/4}} of the circle = **25%** (10 of the 40 students). Writing 90% confuses the angle in degrees with a percentage.",
        difficulty: "warmup",
        guideRef: "graphs-and-charts",
        hints: ["A whole circle is 360°. What fraction of 360° is 90°?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q05",
        question: "Look at Map A. What is the **four-figure** grid reference of the square that contains the church?",
        diagram: MAP_A,
        options: ["4118", "1841", "4219", "4218"],
        answerIndex: 0,
        explanation:
          "Go **along the corridor** to the easting on the left edge of the church's square (41), then **up the stairs** to the northing along its bottom edge (18): **4118**. 1841 gives the northing first; 4219 and 4218 use lines to the right (and above) of the square instead of the bottom-left corner.",
        difficulty: "core",
        guideRef: "grid-references",
        hints: [
          "Find the church symbol (a cross in a circle), then find the lines on the left and bottom of its square.",
          "Easting first (the number along the bottom), then northing (the number up the side).",
          "Always use the bottom-left corner of the square.",
        ],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q06",
        question: "Look at Map A. What is the **six-figure** grid reference of the railway station?",
        diagram: MAP_A,
        options: ["169427", "427169", "437169", "427179"],
        answerIndex: 1,
        explanation:
          "The station is in square 4216. It is 7 tenths of the way east across the square (427) and 9 tenths of the way up (169): **427169**. 169427 gives the northing first, 437169 starts from the wrong easting line, and 427179 counts the tenths from the northing line above (17) instead of the one below (16).",
        difficulty: "core",
        guideRef: "grid-references",
        hints: [
          "First find the four-figure square: which easting is just left of the station, and which northing just below it?",
          "Now use the small tick marks to count tenths across, then tenths up.",
          "Write 3 digits for the easting, then 3 digits for the northing.",
        ],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q07",
        question: "Look at Map A. In which direction is the **railway station** from the **church**?",
        diagram: MAP_A,
        options: ["North-west", "North-east", "South-east", "South-west"],
        answerIndex: 2,
        explanation:
          "Stand at the church (413183) and look towards the station (427169): it is 1.4 km further east **and** 1.4 km further south, so it is **south-east**. North-west is the direction of the church *from* the station — the answer you get if you start at the wrong end.",
        difficulty: "core",
        guideRef: "grid-references",
        hints: [
          "Imagine standing on the church. Is the station above or below you on the map? Left or right?",
          "North is at the top of the map. Combine the up/down word with the left/right word.",
        ],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q08",
        question: "Map A comes from a **1:25 000** map. On the printed map, the straight line from the church to the campsite measures **12.4 cm**. What is the real distance?",
        diagram: MAP_A,
        options: ["6.2 km", "31 km", "12.4 km", "3.1 km"],
        answerIndex: 3,
        explanation:
          "On a 1:25 000 map, 4 cm = 1 km, so 12.4 ÷ 4 = **3.1 km**. Check with the grid: the church is at easting 41.3 and the campsite at 44.4, both on northing 18.3, and 44.4 − 41.3 = 3.1 squares = 3.1 km. 6.2 km comes from using the 1:50 000 rule (2 cm = 1 km).",
        difficulty: "core",
        guideRef: "scale-distance",
        hints: [
          "How many cm make 1 km on a 1:25 000 map?",
          "Divide the map distance by that number.",
          "Check: each grid square is 1 km wide — count the squares between the two symbols.",
        ],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q09",
        question: "Which of these is an example of **primary** data?",
        options: [
          "Counting pedestrians yourself on Orchard Road for 10 minutes",
          "Downloading results from the Singapore Census 2020",
          "Copying a rainfall graph from a textbook",
          "Using a population map from a government website",
        ],
        answerIndex: 0,
        explanation:
          "Primary data is collected **first-hand by you**, for your own enquiry — like doing your own pedestrian count. Census results are very useful, but someone else collected them, so they are **secondary** data, as are the textbook graph and the website map.",
        difficulty: "core",
        guideRef: "describing-patterns",
        hints: ["Who collected the data — you, or someone else?", "Primary = first-hand; secondary = someone else's data you use."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q10",
        question: "Look at the latitude–longitude grid. What are the coordinates of point **Q**?",
        diagram: LATLONG,
        options: ["30°N, 60°E", "30°S, 60°E", "30°S, 60°W", "60°S, 30°E"],
        answerIndex: 1,
        explanation:
          "Q is one line **below** the Equator (30°S) and two lines **right** of the Prime Meridian (60°E): **30°S, 60°E**. 30°N would be above the Equator; 60°W would be left of the Prime Meridian; 60°S, 30°E swaps the latitude and longitude values.",
        difficulty: "core",
        guideRef: "latitude-longitude",
        hints: [
          "Latitude first: is Q above (N) or below (S) the Equator, and by how many 30° lines?",
          "Then longitude: is Q left (W) or right (E) of the Prime Meridian?",
        ],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q11",
        question: "Use the climate graph for Town X. What is the **annual temperature range**?",
        diagram: CLIMATE,
        options: ["18 °C", "20 °C", "16 °C", "9.75 °C"],
        answerIndex: 2,
        explanation:
          "Range = highest − lowest. The warmest month is July, at 18 °C, and the coldest is January, at 2 °C, so the range is 18 − 2 = **16 °C**. 18 °C is just the maximum, 20 °C adds the two values, and 9.75 °C is the mean temperature, not the range.",
        difficulty: "core",
        guideRef: "graphs-and-charts",
        hints: [
          "Read temperature on the **right-hand** axis — the red line.",
          "Find the highest and lowest points on the line.",
          "Range = highest − lowest.",
        ],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q12",
        question: "Which statement best describes the relationship shown in the scatter graph?",
        diagram: SCATTER,
        options: [
          "Positive correlation: the further from the centre, the more pedestrians",
          "No relationship: the points are scattered randomly",
          "Pedestrian numbers fall at every single site as distance increases",
          "Negative correlation: pedestrian numbers generally fall with distance from the centre",
        ],
        answerIndex: 3,
        explanation:
          "As one variable (distance) goes up, the other (pedestrians) generally goes down — a **negative correlation**. The word *generally* matters: site 7 (110 pedestrians at 3.5 km) breaks the pattern, so 'falls at every single site' is wrong. It is an anomaly, not proof of 'no relationship'.",
        difficulty: "core",
        guideRef: "describing-patterns",
        hints: [
          "Read the points from left to right. Do they mostly go up or down?",
          "Is there a point that does not fit? Does one odd point destroy the whole pattern?",
        ],
        strategy: "TEA (Trend, Evidence, Anomaly)",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q13",
        question: "Look at Map A. Priya says: \"The campsite is about 1.4 km north-east of the school.\" Which judgement is correct?",
        diagram: MAP_A,
        options: [
          "Correct: the campsite is 1 km east and 1 km north of the school, so it is north-east and about 1.4 km away",
          "Wrong direction: the campsite is south-west of the school",
          "Right direction, but the distance is 2 km, because 1 km east + 1 km north = 2 km",
          "Right direction, but the distance is exactly 1 km, because it is only one square away",
        ],
        answerIndex: 0,
        explanation:
          "School 434173, campsite 444183: the campsite is 1.0 km further east and 1.0 km further north, so it is **north-east**. The straight line is the diagonal of a 1 km square, about 1.4 km (√2 ≈ 1.41). Adding 1 + 1 = 2 km measures a walk along two sides, not the straight line. South-west is the direction of the school from the campsite.",
        difficulty: "challenge",
        guideRef: "grid-references",
        hints: [
          "Write six-figure references for both features and compare the eastings, then the northings.",
          "If you go the same distance east as north, which compass point is that?",
          "A straight diagonal is shorter than going along two sides of the square. Measure it against the 1 km side.",
        ],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q14",
        question:
          "On a **1:50 000** map, a winding river between two bridges measures 9 cm. A straight line between the same two bridges measures 6 cm. In real distance, how much **longer** is the river route than the straight line?",
        options: ["3 km", "1.5 km", "0.75 km", "150 m"],
        answerIndex: 1,
        explanation:
          "Difference on the map = 9 − 6 = 3 cm. On a 1:50 000 map 2 cm = 1 km, so 3 cm = **1.5 km**. 3 km treats 1 cm as 1 km; 0.75 km uses the 1:25 000 rule (4 cm = 1 km); 150 m comes from dividing 150 000 cm by 1,000 instead of 100,000.",
        difficulty: "core",
        guideRef: "scale-distance",
        hints: [
          "You can subtract on the map first, then convert just once.",
          "On a 1:50 000 map, how many cm make 1 km?",
          "3 cm × 50 000 = 150 000 cm. How many cm are in a km?",
        ],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m1-q15",
        question: "Use the graph of world population. What was the **average rate of growth** between 1999 (6 billion) and 2022 (8 billion)?",
        diagram: POP_LINE,
        options: [
          "About 8.7 million people per year",
          "About 870 million people per year",
          "About 87 million people per year",
          "About 2 billion people per year",
        ],
        answerIndex: 2,
        explanation:
          "Rate of change = change ÷ time = 2 billion ÷ 23 years = 2,000 million ÷ 23 ≈ **87 million people per year**. '2 billion per year' forgets to divide by the 23 years; 8.7 million and 870 million are slips of a power of ten.",
        difficulty: "challenge",
        guideRef: "graphs-and-charts",
        hints: [
          "Rate of change = change in value ÷ change in time.",
          "How many years from 1999 to 2022? How many billion were added?",
          "Write 2 billion as 2,000 million before dividing.",
        ],
        strategy: "Use figures from the source",
      },
    ],
  },
  // =========================================================================
  {
    id: "geo-skills-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "geo-skills-m2-q01",
        question: "When you give a grid reference, which number do you give **first**?",
        options: [
          "The northing (the number up the side)",
          "Whichever number is smaller",
          "The number of the line to the right of the square",
          "The easting (the number along the bottom)",
        ],
        answerIndex: 3,
        explanation:
          "Always the **easting** first — 'along the corridor, then up the stairs'. Eastings are the lines numbered along the bottom (they increase as you go east). Giving the northing first is the most common grid-reference mistake.",
        difficulty: "warmup",
        guideRef: "grid-references",
        hints: ["Remember: along the corridor, then up the stairs."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q02",
        question: "Singapore lies at about **1°N, 104°E**. Which two hemispheres is Singapore in?",
        options: ["Northern and Eastern", "Southern and Eastern", "Northern and Western", "Southern and Western"],
        answerIndex: 0,
        explanation:
          "1°**N** means just north of the Equator, so Northern Hemisphere; 104°**E** means east of the Prime Meridian, so Eastern Hemisphere. Being very close to the Equator does not put Singapore in the south — 'N' decides it.",
        difficulty: "warmup",
        guideRef: "latitude-longitude",
        hints: ["The letter after each number tells you the hemisphere."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q03",
        question: "What does a ratio scale of **1:25 000** mean?",
        options: [
          "1 cm on the map represents 25 000 m (25 km) on the ground",
          "1 cm on the map represents 25 000 cm (250 m) on the ground",
          "1 cm on the map represents 2.5 km on the ground",
          "1 m on the ground is shown as 25 000 cm on the map",
        ],
        answerIndex: 1,
        explanation:
          "In a ratio scale both numbers use the **same unit**: 1 cm on the map = 25 000 cm on the ground = 250 m. So 4 cm = 1 km. Reading it as 25 000 **metres** makes every distance 100 times too big.",
        difficulty: "warmup",
        guideRef: "scale-distance",
        hints: ["Both sides of a ratio scale are in the same unit. 25 000 cm = how many metres?"],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q04",
        question: "The bar chart shows cars counted each hour at a school junction. During which hour were the **fewest** cars counted?",
        diagram: BAR,
        options: ["The hour starting 08:00", "The hour starting 10:00", "The hour starting 11:00", "The hour starting 12:00"],
        answerIndex: 2,
        explanation:
          "The shortest bar is the hour starting **11:00**, with 15 cars. The hour starting 10:00 is low too (20 cars) but its bar is taller.",
        difficulty: "warmup",
        guideRef: "graphs-and-charts",
        hints: ["Fewest cars = shortest bar."],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q05",
        question: "Look at Map B. What is the **four-figure** grid reference of the square containing the lighthouse?",
        diagram: MAP_B,
        options: ["6329", "3064", "2964", "2963"],
        answerIndex: 3,
        explanation:
          "The lighthouse (yellow star) is east of easting 29 and north of northing 63, so the bottom-left corner of its square is 29, 63: **2963**. 6329 puts the northing first; 2964 uses the northing line above; 3064 uses the lines to the right and above.",
        difficulty: "core",
        guideRef: "grid-references",
        hints: [
          "Find the star symbol in the key, then on the map.",
          "Which easting line is just to its left? Which northing line just below it?",
        ],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q06",
        question: "Look at Map B. Which feature is found at grid reference **264643**?",
        diagram: MAP_B,
        options: ["Youth hostel", "Church", "Viewpoint", "Car park"],
        answerIndex: 0,
        explanation:
          "264643 means easting 26 and 4 tenths, northing 64 and 3 tenths — the red triangle, the **youth hostel**. The church has the same easting (264) but its northing is 617, much further south: always check both halves.",
        difficulty: "core",
        guideRef: "grid-references",
        hints: [
          "Split it: 264 | 643. The first half is the easting.",
          "Go to easting 26, 4 tenths across; then northing 64, 3 tenths up.",
        ],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q07",
        question: "Look at Map B. In which direction is the **lighthouse** from the **viewpoint**?",
        diagram: MAP_B,
        options: ["North-west", "South-east", "North-east", "South-west"],
        answerIndex: 1,
        explanation:
          "Viewpoint 285646, lighthouse 295636: the lighthouse is 1 km further east and 1 km further south, so it is **south-east** of the viewpoint. North-west is the direction of the viewpoint *from* the lighthouse.",
        difficulty: "core",
        guideRef: "grid-references",
        hints: [
          "Start at the viewpoint (the 'from' place).",
          "Is the lighthouse higher or lower on the map? Left or right?",
        ],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q08",
        question: "Map B comes from a **1:50 000** map. On the printed map, the church is 5.2 cm due south of the youth hostel. What is the real distance between them?",
        diagram: MAP_B,
        options: ["1.3 km", "10.4 km", "2.6 km", "5.2 km"],
        answerIndex: 2,
        explanation:
          "On a 1:50 000 map, 2 cm = 1 km, so 5.2 ÷ 2 = **2.6 km**. Check with the grid: hostel northing 64.3 − church northing 61.7 = 2.6 squares = 2.6 km. 1.3 km uses the 1:25 000 rule; 10.4 km multiplies by 2 instead of dividing.",
        difficulty: "core",
        guideRef: "scale-distance",
        hints: ["How many cm make 1 km at 1:50 000?", "Divide the map distance by that. Check by counting grid squares."],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q09",
        question: "Which line of latitude is found at **23.5°S**?",
        options: ["Tropic of Cancer", "Antarctic Circle", "Prime Meridian", "Tropic of Capricorn"],
        answerIndex: 3,
        explanation:
          "The **Tropic of Capricorn** is at 23.5°S. The Tropic of Cancer is the matching line in the north (23.5°N); the Antarctic Circle is at 66.5°S; the Prime Meridian is a line of longitude, not latitude.",
        difficulty: "core",
        guideRef: "latitude-longitude",
        hints: ["There are two tropics, both 23.5° from the Equator.", "The Tropic of Cancer is in the Northern Hemisphere, so which tropic must be in the south?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q10",
        question: "Use the climate graph for Town X. How much rain falls in **October**?",
        diagram: CLIMATE,
        options: ["85 mm", "10 mm", "90 mm", "80 mm"],
        answerIndex: 0,
        explanation:
          "Rainfall is the **bar**, read on the left axis: October's bar stops halfway between 80 and 90, so **85 mm**. 10 is October's *temperature*, 10 °C, read from the red line — the wrong axis.",
        difficulty: "core",
        guideRef: "graphs-and-charts",
        hints: [
          "Which part of a climate graph shows rainfall — the bars or the line?",
          "Use the left-hand axis. The top of the bar is between two grid lines.",
        ],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q11",
        question: "Which answer is the best **description** of the scatter graph, using TEA?",
        diagram: SCATTER,
        options: [
          "Pedestrian numbers fall as you move away from the city centre.",
          "Pedestrian numbers generally fall with distance, from 120 at 0.5 km to 20 at 4 km, but site 7 is an anomaly with 110 at 3.5 km.",
          "Pedestrian numbers fall from 120 at 0.5 km to 20 at 4 km; site 1 is an anomaly because it has the most people.",
          "There are more pedestrians near the centre because there are more shops and offices there.",
        ],
        answerIndex: 1,
        explanation:
          "The best answer has all three parts: **Trend** (generally fall), **Evidence** (120 at 0.5 km to 20 at 4 km) and **Anomaly** (site 7, 110 at 3.5 km). Site 1 is not an anomaly — it fits the trend. The 'shops and offices' answer *explains* instead of describing.",
        difficulty: "core",
        guideRef: "describing-patterns",
        hints: [
          "TEA = Trend, Evidence, Anomaly. Tick off each part for every answer.",
          "An anomaly is a point that does NOT fit the trend — is that site 1 or site 7?",
          "'Describe' means say what the pattern is, not why.",
        ],
        strategy: "TEA (Trend, Evidence, Anomaly)",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q12",
        question: "On a map, villages are found in a long, thin line following a river valley. Which word best describes this distribution?",
        options: ["Clustered", "Sparse", "Linear", "Evenly spread"],
        answerIndex: 2,
        explanation:
          "A **linear** distribution follows a line, such as a river, road, railway or coastline. Clustered means bunched together in one area; sparse means few and far apart.",
        difficulty: "core",
        guideRef: "describing-patterns",
        hints: ["What shape do the villages make on the map?", "The word comes from 'line'."],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q13",
        question: "Two places are at **P (20°N, 80°E)** and **Q (20°S, 80°W)**. Which statement is correct?",
        options: [
          "Both places lie outside the tropics, because they are 20° from the Equator",
          "P is in the Southern Hemisphere, because it is east of the Prime Meridian",
          "P lies north of the Tropic of Cancer",
          "P is in the Northern and Eastern hemispheres, Q is in the Southern and Western hemispheres, and both lie within the tropics",
        ],
        answerIndex: 3,
        explanation:
          "N/S decides north or south; E/W decides east or west. The tropics are at 23.5°N and 23.5°S, so anything between them — including 20°N and 20°S — is **within the tropics**. P (20°N) is south of the Tropic of Cancer (23.5°N), not north of it. East/west never decides which hemisphere is northern or southern.",
        difficulty: "challenge",
        guideRef: "latitude-longitude",
        hints: [
          "Deal with each place separately: latitude letter, then longitude letter.",
          "At what latitudes are the two tropics? Is 20 more or less than that?",
          "'Within the tropics' means between the Tropic of Cancer and the Tropic of Capricorn.",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q14",
        question:
          "On a proportional-symbol map, the **area** of each circle is proportional to the number of visitors. Town A's circle has **twice the radius** of Town B's circle. Town B has 50,000 visitors. About how many visitors does Town A have?",
        options: ["200,000", "100,000", "400,000", "25,000"],
        answerIndex: 0,
        explanation:
          "Area depends on radius × radius. Doubling the radius makes the area 2 × 2 = 4 times bigger, so Town A has 4 × 50,000 = **200,000** visitors. 100,000 is the common mistake of thinking twice the radius means twice the value.",
        difficulty: "challenge",
        guideRef: "graphs-and-charts",
        hints: [
          "It's the AREA that shows the value, not the width.",
          "Draw a square of side 1 and a square of side 2. How many small squares fit in the big one?",
          "Circles behave the same way: area grows with radius².",
        ],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "geo-skills-m2-q15",
        question:
          "Look at Map B. Each grid square is 1 km × 1 km = 1 km². The built-up area of the village stretches from easting 26.0 to 26.9 and from northing 61.2 to 61.9. Estimate its area.",
        diagram: MAP_B,
        options: [
          "About 1 km², because it is inside one grid square",
          "About 0.6 km²",
          "About 6 km²",
          "About 2.5 km²",
        ],
        answerIndex: 1,
        explanation:
          "Width = 26.9 − 26.0 = 0.9 km; height = 61.9 − 61.2 = 0.7 km. Area = 0.9 × 0.7 = 0.63 ≈ **0.6 km²**. Saying 1 km² counts the whole square even though the village does not fill it.",
        difficulty: "challenge",
        guideRef: "scale-distance",
        hints: [
          "How wide is the village in km? How tall?",
          "Area of a rectangle = width × height.",
          "Does the grey area fill the whole square?",
        ],
        strategy: "Work it out from the map",
      },
    ],
  },
  // =========================================================================
  {
    id: "geo-skills-m3",
    title: "MCQ Paper 3",
    questions: [
      {
        kind: "mcq",
        id: "geo-skills-m3-q01",
        question: "What does a **four-figure** grid reference identify?",
        options: ["An exact point, to the nearest 100 m", "A line of latitude", "A whole 1 km grid square", "A whole map sheet"],
        answerIndex: 2,
        explanation:
          "A four-figure reference names a **whole grid square** (1 km × 1 km on OS maps) by its bottom-left corner. To pinpoint a spot to the nearest 100 m you need a six-figure reference.",
        difficulty: "warmup",
        guideRef: "grid-references",
        hints: ["Four figures = two for the easting, two for the northing. That only gets you to a corner of a square."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q02",
        question: "Which statement about lines of **longitude** is correct?",
        options: [
          "They run east–west, parallel to the Equator",
          "They measure how far north or south a place is",
          "They are different lengths, longest at the Equator",
          "They run from the North Pole to the South Pole and measure how far east or west a place is",
        ],
        answerIndex: 3,
        explanation:
          "Lines of longitude (meridians) run **pole to pole** and measure position **east or west** of the Prime Meridian (0°). The other three statements describe lines of *latitude*, which run east–west, are parallel and get shorter towards the poles.",
        difficulty: "warmup",
        guideRef: "latitude-longitude",
        hints: ["Latitude lines are like the rungs of a ladder (flat); longitude lines are 'long' and run top to bottom."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q03",
        question: "Which type of graph is best for showing how the population of one town changed over 50 years?",
        options: ["A line graph", "A pie chart", "A choropleth map", "A scatter graph"],
        answerIndex: 0,
        explanation:
          "Change over **continuous time** is shown best by a **line graph**, because the line lets you see the trend and the rate of change. A pie chart shows parts of one whole at one moment, not change over time.",
        difficulty: "warmup",
        guideRef: "graphs-and-charts",
        hints: ["Which graph has time along the bottom and a line joining the points?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q04",
        question: "What do geographers call data that **you collect yourself**, first-hand — for example, by counting traffic outside school?",
        options: ["Secondary data", "Primary data", "A census", "A choropleth"],
        answerIndex: 1,
        explanation:
          "Data you collect yourself is **primary data**. Secondary data has been collected by someone else (for example, census results or a newspaper graph).",
        difficulty: "warmup",
        guideRef: "describing-patterns",
        hints: ["Primary means 'first'."],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q05",
        question: "On a **1:25 000** map, Arjun lays a piece of string along a winding road. The string measures **14 cm**. How long is the road in real life?",
        options: ["7 km", "1.4 km", "3.5 km", "35 km"],
        answerIndex: 2,
        explanation:
          "At 1:25 000, 4 cm = 1 km, so 14 ÷ 4 = **3.5 km**. 7 km uses the 1:50 000 rule (2 cm = 1 km); 1.4 km and 35 km are place-value slips.",
        difficulty: "core",
        guideRef: "scale-distance",
        hints: [
          "Why use string? Because the road bends — you then straighten the string along the scale.",
          "How many cm make 1 km at 1:25 000?",
        ],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q06",
        question: "Look at Map A. Which feature is found at grid reference **434194**?",
        diagram: MAP_A,
        options: ["School", "Woodland", "Campsite", "Post office"],
        answerIndex: 3,
        explanation:
          "434 = easting 43 and 4 tenths; 194 = northing 19 and 4 tenths. That is the pale purple square, the **post office**. The school has the same easting (434) but sits at northing 173 — always check both halves.",
        difficulty: "core",
        guideRef: "grid-references",
        hints: [
          "Split the reference into 434 | 194.",
          "Find easting 43, count 4 tenths east; find northing 19, count 4 tenths north.",
        ],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q07",
        question: "Two villages are **3.5 km** apart. How far apart will they be on a **1:50 000** map?",
        options: ["7 cm", "14 cm", "1.75 cm", "3.5 cm"],
        answerIndex: 0,
        explanation:
          "This time you go from the ground to the map, so **multiply**: at 1:50 000, 1 km = 2 cm, so 3.5 × 2 = **7 cm**. 14 cm uses the 1:25 000 rule (4 cm per km); 1.75 cm divides when it should multiply.",
        difficulty: "core",
        guideRef: "scale-distance",
        hints: [
          "How many cm on a 1:50 000 map stand for 1 km?",
          "Each km needs that many cm, so multiply.",
        ],
        strategy: "Work it out from the map",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q08",
        question: "Look at the latitude–longitude grid. Which point is in **both** the Southern and the Western hemispheres?",
        diagram: LATLONG,
        options: ["Point Q", "Point T", "Point S", "Point R"],
        answerIndex: 1,
        explanation:
          "Southern = below the Equator; Western = left of the Prime Meridian. **T** (60°S, 90°W) is both. Q is southern but eastern (30°S, 60°E); S is western but northern (30°N, 30°W); R is on the Equator in the east (0°, 150°E).",
        difficulty: "core",
        guideRef: "latitude-longitude",
        hints: ["Find the bottom-left quarter of the grid (below the Equator, left of the Prime Meridian).", "Which point is in that quarter?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q09",
        question: "Use the world population graph. Which extra billion people was added in the **shortest** time?",
        diagram: POP_LINE,
        options: ["From 1 to 2 billion", "From 3 to 4 billion", "From 7 to 8 billion", "From 5 to 6 billion"],
        answerIndex: 2,
        explanation:
          "Subtract the years: 1→2 billion took 123 years (1804–1927); 3→4 took 14 (1960–1974); 5→6 took 12 (1987–1999); 7→8 took **11 years** (2011–2022), the shortest. On the graph, the steepest part of the line shows the fastest growth.",
        difficulty: "core",
        guideRef: "graphs-and-charts",
        hints: ["Work out the number of years for each billion.", "Shortest time = steepest section of the line."],
        strategy: "Use figures from the source",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q10",
        question: "In the pie chart of 40 students, the **bicycle** sector has an angle of 18°. How many students cycle to school?",
        diagram: PIE,
        options: ["18 students", "5 students", "4 students", "2 students"],
        answerIndex: 3,
        explanation:
          "18° out of 360° is {{18/360}} = {{1/20}} of the class. {{1/20}} of 40 = **2 students**. 18 copies the angle as if it were the number of students; 5 is the percentage (5%), not the number of students.",
        difficulty: "core",
        guideRef: "graphs-and-charts",
        hints: ["What fraction of 360° is 18°?", "Then take that fraction of 40 students."],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q11",
        question: "Which statement correctly describes the pattern on the choropleth map?",
        diagram: CHORO,
        options: [
          "Density is highest in the west, near the coast, and decreases towards the mountains in the east",
          "Density is highest in the east and decreases towards the coast",
          "Density is the same in every district",
          "Density is highest in the south of the region and lowest in the north",
        ],
        answerIndex: 0,
        explanation:
          "Darker shading = more people per km². The darkest districts (A at 1,000 or more, D at 500–999) are in the **west** by the coast; the lightest (C and F, 0–99) are in the **east** by the mountains. North vs south does not fit: A (north) is darker than D (south).",
        difficulty: "core",
        guideRef: "describing-patterns",
        hints: ["Read the key first: which shade means the most people per km²?", "Where are the darkest districts — north, south, east or west?"],
        strategy: "Read the key first",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q12",
        question: "An exam question begins with the command word **Evaluate**. What must your answer include?",
        options: [
          "A description of what the graph shows, using figures",
          "Points for and against, then a supported judgement",
          "Reasons why something happens, using cause and effect",
          "One fact, stated with no extra detail",
        ],
        answerIndex: 1,
        explanation:
          "**Evaluate** means weigh up strengths and weaknesses (or both sides) and then reach a **justified judgement**. Describing with figures answers 'describe'; reasons with cause and effect answer 'explain'; one fact answers 'state' or 'name'.",
        difficulty: "core",
        guideRef: "describing-patterns",
        hints: ["Think of a judge: what do they listen to before deciding?", "Match each option to a command word: describe, explain, state, evaluate."],
        strategy: "Use the command word",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q13",
        question: "Look at Map A. Marcus writes the six-figure grid reference of the church as **183413**. What has he done wrong?",
        diagram: MAP_A,
        options: [
          "Nothing: the two halves can be given in either order",
          "He used the wrong square: the answer should be 4118",
          "He gave the northing before the easting: it should be 413183",
          "He counted from the top-right corner: it should be 423193",
        ],
        answerIndex: 2,
        explanation:
          "His digits are right but in the wrong order. The church is at easting 41.3 and northing 18.3, so it is **413183** — easting first. Order matters: 183413 would point somewhere else entirely. 4118 is only the four-figure square, not a six-figure point.",
        difficulty: "core",
        guideRef: "grid-references",
        hints: [
          "Work out the church's six-figure reference yourself first.",
          "Compare your answer with Marcus's. Are the same digits there?",
          "Which half should come first?",
        ],
        strategy: "Spot the misconception",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q14",
        question:
          "One degree of latitude is about **111 km**. A ship sails due south from **10°N, 100°E** to **10°S, 100°E**. About how far has it sailed?",
        options: ["0 km", "About 1,110 km", "About 11,100 km", "About 2,220 km"],
        answerIndex: 3,
        explanation:
          "From 10°N down to the Equator is 10°, and from the Equator to 10°S is another 10°: 20° in total. 20 × 111 = **about 2,220 km**. '0 km' treats 10°N and 10°S as the same place; 1,110 km counts only one side of the Equator.",
        difficulty: "challenge",
        guideRef: "latitude-longitude",
        hints: [
          "The ship crosses the Equator. How many degrees north of it does it start? How many south does it finish?",
          "Add the two parts to get the total degrees of latitude.",
          "Multiply the total by 111 km.",
        ],
        strategy: "Sketch it",
      },
      {
        kind: "mcq",
        id: "geo-skills-m3-q15",
        question: "Which is the **best** conclusion from the pedestrian scatter graph?",
        diagram: SCATTER,
        options: [
          "There is a negative correlation, but site 7 shows another factor (such as a shopping centre or MRT station) can break the pattern, and 8 sites counted once is a small sample",
          "Distance from the city centre is the only thing that controls pedestrian numbers",
          "Site 7 is a mistake and should be deleted, which proves a perfect negative correlation",
          "Because site 7 is so high, there is no relationship at all",
        ],
        answerIndex: 0,
        explanation:
          "A good conclusion states the overall pattern, **uses the anomaly** as evidence that other factors matter, and recognises the limits of the data (few sites, one count each). Deleting awkward data to 'prove' a perfect pattern is poor practice, and one anomaly does not wipe out the clear overall trend.",
        difficulty: "challenge",
        guideRef: "describing-patterns",
        hints: [
          "A strong conclusion is neither too strong nor too weak.",
          "What does the anomaly tell you — should you hide it or explain it?",
          "Would 8 sites, each counted once, convince you completely?",
        ],
        strategy: "Weigh both sides then judge",
      },
    ],
  },
];
