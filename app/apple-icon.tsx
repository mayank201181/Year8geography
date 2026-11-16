// iOS home-screen icon. iOS rounds the corners itself (and paints transparent
// corners black), so this one is a full-bleed square.
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0e7490 0%, #0369a1 100%)",
        }}
      >
        <svg width={100} height={100} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={12} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="50" r="36" />
            <ellipse cx="50" cy="50" rx="15" ry="36" />
            <path d="M14 50 L 86 50" />
            <path d="M21 31 L 79 31" />
            <path d="M21 69 L 79 69" />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 2,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: "#0e7490",
            fontSize: 22,
            letterSpacing: 2,
          }}
        >
          Y8
        </div>
      </div>
    ),
    { ...size },
  );
}
