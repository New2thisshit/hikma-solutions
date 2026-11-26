/**
 * The jali: a lattice of eight-point stars, lit from behind.
 * Each star is filled with one shared gradient (userSpaceOnUse), so the
 * screen reads as a single panel with light coming through it.
 */

type JaliProps = {
  cols?: number;
  rows?: number;
  /** Light source position as a fraction of width / height. */
  light?: [number, number];
  animate?: boolean;
  className?: string;
  title?: string;
};

const SPACING = 64;

function starPoints(cx: number, cy: number, r: number) {
  const inner = r * 0.7654; // {8/2} star: two overlapping squares
  const pts: string[] = [];
  for (let i = 0; i < 16; i++) {
    const radius = i % 2 === 0 ? r : inner;
    const angle = (Math.PI / 8) * i - Math.PI / 2;
    pts.push(
      `${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`
    );
  }
  return pts.join(" ");
}

export default function Jali({
  cols = 7,
  rows = 8,
  light = [0.68, 0.32],
  animate = false,
  className = "",
  title,
}: JaliProps) {
  const width = cols * SPACING;
  const height = rows * SPACING;
  const lx = width * light[0];
  const ly = height * light[1];
  const maxDist = Math.hypot(width, height);
  const r = SPACING * 0.47;
  const id = `jali-${cols}-${rows}-${Math.round(light[0] * 100)}-${Math.round(light[1] * 100)}`;

  const stars: { x: number; y: number; d: number; small: boolean }[] = [];
  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const x = col * SPACING;
      const y = row * SPACING;
      const dist = Math.hypot(x - lx, y - ly);
      stars.push({ x, y, d: Math.round((dist / maxDist) * 1100), small: false });
      // Small stars sit in the gaps between the large ones.
      if (row < rows && col < cols) {
        const sx = x + SPACING / 2;
        const sy = y + SPACING / 2;
        const sd = Math.hypot(sx - lx, sy - ly);
        stars.push({ x: sx, y: sy, d: Math.round((sd / maxDist) * 1100) + 120, small: true });
      }
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`jali ${animate ? "jali--animate" : ""} ${className}`}
      preserveAspectRatio="xMidYMid slice"
      style={{ ["--ar" as string]: `${width} / ${height}` }}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <radialGradient
          id={`${id}-glow`}
          gradientUnits="userSpaceOnUse"
          cx={lx}
          cy={ly}
          r={maxDist * 0.62}
        >
          <stop offset="0" stopColor="#fff1c9" />
          <stop offset="0.14" stopColor="#ffd27a" />
          <stop offset="0.38" stopColor="#f4a51c" />
          <stop offset="0.72" stopColor="#7a4a2a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#252c55" stopOpacity="0.25" />
        </radialGradient>
        <clipPath id={`${id}-clip`}>
          <rect width={width} height={height} rx="14" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width={width} height={height} fill="#161b3a" />
        {stars.map((s, i) => (
          <polygon
            key={i}
            className="jali__star"
            style={{ ["--d" as string]: `${s.d}ms` }}
            points={starPoints(s.x, s.y, s.small ? r * 0.42 : r)}
            fill={`url(#${id}-glow)`}
            stroke="#f4a51c"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
        ))}
      </g>
    </svg>
  );
}
