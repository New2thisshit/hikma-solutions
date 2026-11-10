import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Redirect, a private porn blocker for Android. Coming soon to Google Play.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function RedirectOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#f3eee3",
          color: "#1e4338",
          padding: "72px 88px",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 700 }}>
          <div style={{ fontSize: 120, lineHeight: 1, letterSpacing: -3 }}>Redirect</div>
          <div style={{ fontSize: 38, lineHeight: 1.3, color: "#1a2a24" }}>
            A private porn blocker for Android, with a calm 90-second pause.
          </div>
          <div style={{ display: "flex", fontSize: 26, fontFamily: "sans-serif", color: "#4f6b5c" }}>
            Coming soon to Google Play. By Hikma Solutions.
          </div>
        </div>
        <div
          style={{
            width: 260,
            height: 260,
            borderRadius: 999,
            border: "4px solid #1e4338",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 96, lineHeight: 1 }}>90</div>
          <div style={{ fontSize: 22, fontFamily: "sans-serif", color: "#4f6b5c" }}>seconds</div>
        </div>
      </div>
    ),
    size
  );
}
