"use client";

import { Globe, type GlobeArc, type GlobeMarker } from "./velora/globe";

const HUB: [number, number] = [27.6644, 85.3188];
const base: GlobeMarker[] = [
  { lat: HUB[0], lng: HUB[1], label: "Lalitpur, Nepal" },
];

// Illustrative destinations are distributed across serviceable continents;
// they are regional references, not customer or office locations.
const routes: GlobeArc[] = [
  // Asia
  { from: HUB, to: [25.2854, 51.531] },
  { from: HUB, to: [25.2048, 55.2708] },
  { from: HUB, to: [19.076, 72.8777] },
  { from: HUB, to: [1.3521, 103.8198] },
  { from: HUB, to: [35.6762, 139.6503] },
  { from: HUB, to: [37.5665, 126.978] },
  // Europe
  { from: HUB, to: [51.5072, -0.1276] },
  { from: HUB, to: [50.1109, 8.6821] },
  { from: HUB, to: [48.8566, 2.3522] },
  { from: HUB, to: [40.4168, -3.7038] },
  // Africa
  { from: HUB, to: [6.5244, 3.3792] },
  { from: HUB, to: [30.0444, 31.2357] },
  { from: HUB, to: [-1.2864, 36.8172] },
  { from: HUB, to: [-26.2041, 28.0473] },
  // North America
  { from: HUB, to: [37.7749, -122.4194] },
  { from: HUB, to: [40.7128, -74.006] },
  { from: HUB, to: [43.6532, -79.3832] },
  { from: HUB, to: [19.4326, -99.1332] },
  // South America
  { from: HUB, to: [-23.5505, -46.6333] },
  { from: HUB, to: [-33.4489, -70.6693] },
  // Oceania
  { from: HUB, to: [-33.8688, 151.2093] },
  { from: HUB, to: [-36.8509, 174.7645] },
  { from: HUB, to: [-37.8136, 144.9631] },
];

/** Globe paths and overlaid beams are illustrative, not client or office locations. */
export function GlobalGlobe() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      <Globe
        accentColor="var(--primary)"
        arcs={routes}
        aria-label="Continuously rotating dotted globe with illustrative network paths. The only identified location is Shyena’s base in Lalitpur, Nepal; other paths do not represent customer or office locations."
        center={[HUB[0], HUB[1]]}
        className="absolute inset-[8%] z-0 h-auto w-auto max-w-none text-foreground"
        dotColor="var(--muted-foreground)"
        markers={base}
        pauseOnInteraction={false}
        samples={9000}
        speed={6}
      />
    </div>
  );
}
