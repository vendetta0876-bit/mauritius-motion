import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0A1A22", color: "#F4F7F8", fontSize: 84, fontWeight: 700, fontFamily: "sans-serif" }}>
        M<span style={{ color: "#00C2B2" }}>M</span>
      </div>
    ),
    { ...size }
  );
}
