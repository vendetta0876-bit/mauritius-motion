import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0A1A22" }}>
        <div style={{ position: "relative", width: 130, height: 150, display: "flex" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 65, height: 150, overflow: "hidden", display: "flex" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 130, height: 150, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", fontWeight: 800, fontSize: 118, color: "#F4F7F8" }}>
              M
            </div>
          </div>
          <div style={{ position: "absolute", top: 0, left: 65, width: 65, height: 150, overflow: "hidden", display: "flex" }}>
            <div style={{ position: "absolute", top: 0, left: -65, width: 130, height: 150, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", fontWeight: 800, fontSize: 118, color: "#00C2B2" }}>
              M
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
