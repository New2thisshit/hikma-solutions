import { ImageResponse } from "next/og";

export const alt = "Hikma Solutions, a software studio in Durban, South Africa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f2229",
          color: "#ece8df",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", position: "relative", width: 48, height: 48 }}>
            <div style={{ position: "absolute", left: 4, top: 4, width: 13, height: 40, background: "#ece8df" }} />
            <div style={{ position: "absolute", left: 31, top: 4, width: 13, height: 40, background: "#9ad9cb" }} />
            <div style={{ position: "absolute", left: 17, top: 21, width: 14, height: 7, background: "#a9b9bb" }} />
          </div>
          <div style={{ fontSize: 34, fontWeight: 600 }}>Hikma Solutions</div>
        </div>
        <div style={{ display: "flex", fontSize: 72, lineHeight: 1.04, letterSpacing: -2, maxWidth: 1000 }}>
          We build websites and systems for businesses, and apps of our own.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a9b9bb" }}>
          Durban, South Africa
        </div>
      </div>
    ),
    size
  );
}
