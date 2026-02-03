import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #f7fbfb 0%, #dff1f1 50%, #cbe9f5 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <p
            style={{
              fontSize: "20px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#1ea6a3",
              margin: 0,
            }}
          >
            Hikma Solutions
          </p>
          <h1
            style={{
              fontSize: "56px",
              lineHeight: 1.1,
              color: "#0a1a24",
              margin: 0,
              maxWidth: "640px",
            }}
          >
            Software, apps, and websites that launch with clarity.
          </h1>
          <p style={{ fontSize: "22px", color: "#4b5a65", margin: 0 }}>
            Durban, South Africa - Serving clients worldwide
          </p>
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "48px",
            backgroundColor: "#0f2a36",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", gap: "14px", position: "relative" }}>
            <div
              style={{
                width: "38px",
                height: "120px",
                backgroundColor: "#7ee0d4",
                borderRadius: "14px",
              }}
            />
            <div
              style={{
                width: "38px",
                height: "120px",
                backgroundColor: "#1ea6a3",
                borderRadius: "14px",
              }}
            />
            <div
              style={{
                width: "52px",
                height: "18px",
                backgroundColor: "#8ecaf2",
                borderRadius: "10px",
                position: "absolute",
                left: "34px",
                top: "36px",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size
  );
}
