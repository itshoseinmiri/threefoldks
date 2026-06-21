"use client";

import { useEffect, useState } from "react";

// The mark vectorized from threefolks.svg (the source was a flat raster, which
// can't be stroke-drawn). With a true outline, the pen can trace the logo and
// then let the fill settle in — "drawing the lines to achieve the logo".
const LOGO_PATH =
  "M440 0L350 155L223 384L112 188L0 188L168 471L274 471L382 280L605 280L605 282L546 379L385 379L332 471L605 471L699 310L719 272L767 194L768 190L436 190L435 188L488 96L731 96L787 0Z";

export default function LoadingScreen() {
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Hold the splash while the mark draws + fills, then fade out before unmounting.
    const fade = setTimeout(() => setLeaving(true), 3900);
    const remove = setTimeout(() => setDone(true), 4400);
    return () => {
      clearTimeout(fade);
      clearTimeout(remove);
    };
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-9 bg-background transition-opacity duration-500 ease-out ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <svg
        viewBox="0 0 787 471"
        className="h-20 w-auto overflow-visible"
        role="img"
        aria-label="Threefolks"
      >
        <path
          className="logo-trace"
          d={LOGO_PATH}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
    </div>
  );
}
