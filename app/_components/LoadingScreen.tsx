"use client";

import { useEffect, useState } from "react";

// The three strokes of the threefold mark, drawn in sequence.
const LOGO_PATHS = [
  "M3274 3882 c-28 -10 -73 -34 -100 -53 -27 -20 -166 -121 -309 -225 -143 -104 -276 -197 -295 -206 -44 -23 -114 -23 -165 1 -22 10 -170 114 -330 230 -349 254 -368 265 -468 259 -97 -4 -131 -24 -460 -269 -113 -84 -159 -131 -182 -186 -25 -59 -12 -73 15 -18 32 65 77 95 142 95 53 0 35 11 673 -422 551 -374 681 -461 691 -465 6 -2 52 24 102 59 50 35 142 98 204 140 158 107 793 540 911 621 91 62 101 67 152 67 61 0 101 -26 136 -89 19 -35 20 -35 14 -6 -8 36 -43 85 -98 134 -51 47 -401 298 -448 322 -56 28 -125 32 -185 11z",
  "M1070 2768 c-64 -33 -100 -83 -110 -154 -4 -33 -8 -412 -7 -844 2 -775 2 -786 23 -830 12 -25 36 -59 55 -77 48 -45 532 -382 542 -376 4 2 7 288 7 634 l0 630 120 -83 c66 -46 266 -186 445 -311 179 -126 333 -231 342 -233 19 -5 260 160 321 219 73 70 94 176 52 262 -36 75 -44 81 -680 515 -601 410 -958 648 -989 658 -49 17 -71 15 -121 -10z",
  "M3773 2776 c-31 -14 -175 -112 -583 -394 -91 -63 -171 -120 -179 -127 -11 -11 5 -26 100 -92 155 -107 203 -153 242 -232 l32 -66 3 -692 c2 -474 6 -693 13 -693 17 0 459 304 518 357 103 91 96 16 96 973 0 825 0 835 -21 874 -45 87 -143 127 -221 92z",
];

export default function LoadingScreen() {
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Hold the splash while the logo draws + fills, then fade out before unmounting.
    const fade = setTimeout(() => setLeaving(true), 3000);
    const remove = setTimeout(() => setDone(true), 3500);
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
        viewBox="0 0 496 452"
        className="h-20 w-auto overflow-visible"
        role="img"
        aria-label="threefold"
      >
        <g transform="translate(0,452) scale(0.1,-0.1)">
          {LOGO_PATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              className="logo-draw-path"
              pathLength={1}
              vectorEffect="non-scaling-stroke"
              style={{ ["--draw-delay" as string]: `${i * 0.25}s` }}
            />
          ))}
        </g>
      </svg>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
    </div>
  );
}
