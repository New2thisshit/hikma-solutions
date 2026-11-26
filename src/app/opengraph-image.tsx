import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hikma Solutions: open to your customers, closed to everyone else.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function star(cx: number, cy: number, r: number) {
  const inner = r * 0.7654;
  const pts: string[] = [];
  for (let i = 0; i < 16; i++) {
    const rad = i % 2 === 0 ? r : inner;
    const a = (Math.PI / 8) * i - Math.PI / 2;
    pts.push(`${cx + rad * Math.cos(a)},${cy + rad * Math.sin(a)}`);
  }
  return pts.join(" ");
}

export default function OpenGraphImage() {
  const stars: { x: number; y: number; r: number }[] = [];
  for (let row = 0; row <= 10; row++) {
    for (let col = 0; col <= 8; col++) {
      stars.push({ x: col * 64, y: row * 64, r: 30 });
      stars.push({ x: col * 64 + 32, y: row * 64 + 32, r: 12.6 });
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#1c2245",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px",
          }}
        >
          <p style={{ fontSize: "30px", color: "#f4a51c", margin: 0, fontWeight: 700 }}>
            Hikma Solutions
          </p>
          <h1 style={{ fontSize: "68px", lineHeight: 1.05, color: "#eef0f7", margin: 0 }}>
            Open to your customers. Closed to everyone else.
          </h1>
          <p style={{ fontSize: "26px", color: "#aab0cc", margin: 0 }}>
            Websites, business systems and security testing · Durban
          </p>
        </div>
        <svg width="500" height="630" viewBox="0 0 500 630">
          <defs>
            <radialGradient id="g" gradientUnits="userSpaceOnUse" cx="300" cy="220" r="480">
              <stop offset="0" stopColor="#fff1c9" />
              <stop offset="0.16" stopColor="#ffd27a" />
              <stop offset="0.42" stopColor="#f4a51c" />
              <stop offset="1" stopColor="#252c55" />
            </radialGradient>
          </defs>
          <rect width="500" height="630" fill="#161b3a" />
          {stars.map((s, i) => (
            <polygon key={i} points={star(s.x, s.y, s.r)} fill="url(#g)" />
          ))}
        </svg>
      </div>
    ),
    size
  );
}
