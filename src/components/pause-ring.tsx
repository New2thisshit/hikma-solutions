"use client";

import { useEffect, useRef, useState } from "react";

const TICKS = 90;

/**
 * Ninety marks, one per second of Redirect's pause. When the ring scrolls
 * into view the arc draws once, slowly, over the full 90 seconds.
 * With reduced motion the ring is shown complete and still.
 */
export default function PauseRing({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRunning(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const ticks = Array.from({ length: TICKS }, (_, i) => {
    const angle = (i / TICKS) * Math.PI * 2 - Math.PI / 2;
    const long = i % 15 === 0;
    const r1 = long ? 86 : 89;
    const r2 = 95;
    return (
      <line
        key={i}
        x1={(100 + r1 * Math.cos(angle)).toFixed(2)}
        y1={(100 + r1 * Math.sin(angle)).toFixed(2)}
        x2={(100 + r2 * Math.cos(angle)).toFixed(2)}
        y2={(100 + r2 * Math.sin(angle)).toFixed(2)}
      />
    );
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      className={`pause-ring ${running ? "is-running" : ""} ${className}`}
      role="img"
      aria-label="A ring of 90 marks, one for each second of the pause"
    >
      <g className="ticks" stroke="var(--rd-pine)" strokeWidth="1" strokeLinecap="round">
        {ticks}
      </g>
      <circle cx="100" cy="100" r="76" fill="none" stroke="var(--rd-line)" strokeWidth="1" />
      <circle
        className="arc"
        cx="100"
        cy="100"
        r="76"
        fill="none"
        stroke="var(--rd-pine)"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={100}
        transform="rotate(-90 100 100)"
      />
      <text
        x="100"
        y="104"
        textAnchor="middle"
        className="serif"
        fontSize="54"
        fill="var(--rd-pine)"
        style={{ fontVariationSettings: '"opsz" 72' }}
      >
        90
      </text>
      <text x="100" y="130" textAnchor="middle" fontSize="12.5" fill="var(--rd-sage)">
        seconds
      </text>
    </svg>
  );
}
