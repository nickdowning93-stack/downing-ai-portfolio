import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nicholas MacLeod Downing's AI Builds & Project Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #111118 50%, #0d0d15 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: "60px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo + Label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 900,
              color: "white",
            }}
          >
            D
          </div>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Project Portfolio
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 800,
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "8px",
          }}
        >
          Nicholas MacLeod Downing&apos;s
        </div>

        {/* Title */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "24px" }}>
          <span style={{ fontSize: "56px", fontWeight: 800, color: "white" }}>AI Builds</span>
          <span style={{ fontSize: "56px", fontWeight: 300, color: "#4b5563" }}>&</span>
          <span style={{ fontSize: "56px", fontWeight: 800, color: "#d1d5db" }}>Portfolio</span>
        </div>

        {/* Description */}
        <div style={{ fontSize: "20px", color: "#9ca3af", marginBottom: "40px", maxWidth: "700px" }}>
          Enterprise AI platforms, iOS apps, SaaS tools, and creative ventures
        </div>

        {/* Stats pills */}
        <div style={{ display: "flex", gap: "12px" }}>
          {[
            { label: "40+ Projects", bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.3)", color: "#60a5fa" },
            { label: "16 on Vercel", bg: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.3)", color: "#a78bfa" },
            { label: "iOS Apps", bg: "rgba(6,182,212,0.15)", border: "rgba(6,182,212,0.3)", color: "#22d3ee" },
            { label: "Next.js", bg: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.3)", color: "#34d399" },
            { label: "Claude AI", bg: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.3)", color: "#fbbf24" },
          ].map((pill) => (
            <div
              key={pill.label}
              style={{
                padding: "10px 20px",
                borderRadius: "999px",
                background: pill.bg,
                border: `1px solid ${pill.border}`,
                fontSize: "15px",
                fontWeight: 700,
                color: pill.color,
              }}
            >
              {pill.label}
            </div>
          ))}
        </div>

        {/* Bottom gradient accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
