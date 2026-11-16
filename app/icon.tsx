// Browser-tab icon: a rounded teal square with a white line-drawn globe.
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0e7490 0%, #0369a1 100%)",
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 1 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="50" r="36" />
            <ellipse cx="50" cy="50" rx="15" ry="36" />
            <path d="M14 50 L 86 50" />
            <path d="M21 31 L 79 31" />
            <path d="M21 69 L 79 69" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
