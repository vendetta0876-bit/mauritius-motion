import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0A1A22" }}>
        <div style={{ position: "relative", width: 24, height: 28, display: "flex" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 12, height: 28, overflow: "hidden", display: "flex" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 24, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", fontWeight: 800, fontSize: 22, color: "#F4F7F8" }}>
              M
            </div>
          </div>
          <div style={{ position: "absolute", top: 0, left: 12, width: 12, height: 28, overflow: "hidden", display: "flex" }}>
            <div style={{ position: "absolute", top: 0, left: -12, width: 24, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", fontWeight: 800, fontSize: 22, color: "#00C2B2" }}>
              M
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
