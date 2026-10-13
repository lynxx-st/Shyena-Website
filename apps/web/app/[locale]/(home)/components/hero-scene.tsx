"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

const HeroSceneCanvas = dynamic(
  () => import("./hero-scene-canvas").then((module) => module.HeroSceneCanvas),
  { ssr: false }
);
const ambientBookSlots = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

export function HeroScene() {
  const [webgl, setWebgl] = useState(false);
  const markWebglReady = useCallback(() => setWebgl(true), []);

  return (
    <div
      aria-label="Three floating volumes represent software security, device and operational technology security, and cybersecurity practice."
      className="hero-scene"
      data-webgl={webgl}
      role="img"
    >
      <div aria-hidden="true" className="hero-scene-fallback">
        {ambientBookSlots.map((slot, index) => (
          <span
            className={`fallback-volume-ambient fallback-volume-ambient-${index + 1}`}
            key={slot}
          />
        ))}
        <span className="fallback-volume fallback-volume-software">
          <span>SHYENA / 01</span>
          <strong>
            SOFTWARE
            <br />
            SECURITY
          </strong>
        </span>
        <span className="fallback-volume fallback-volume-systems">
          <span>SYSTEMS / 02</span>
          <strong>
            DEVICES &amp;
            <br />
            OPERATIONS
          </strong>
        </span>
        <span className="fallback-volume fallback-volume-practice">
          <span>FLAGFORGE / 03</span>
          <strong>
            LEARN BY
            <br />
            DOING
          </strong>
        </span>
      </div>
      <HeroSceneCanvas onReady={markWebglReady} />
    </div>
  );
}
