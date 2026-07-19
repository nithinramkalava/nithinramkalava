import { ImageResponse } from "next/og";

export const alt = "Nithin Ram Kalava, Software Engineer at SecureMachines";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0e13",
          color: "#e8ecf1",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24, color: "#d59a80", letterSpacing: 2 }}>
          <div
            style={{
              width: 46,
              height: 46,
              border: "2px solid #d59a80",
              borderRadius: 11,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ display: "flex" }}>SOFTWARE ENGINEER · SECUREMACHINES</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 700, letterSpacing: -2, lineHeight: 1.02 }}>
            Nithin Ram Kalava
          </div>
          <div style={{ display: "flex", fontSize: 31, color: "#b6bfca", maxWidth: 940, lineHeight: 1.35 }}>
            I build the cloud services and infrastructure that make hardware security modules usable, and I maintain pqc, a post-quantum cryptography library.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, fontSize: 22, color: "#8b96a0" }}>
          {["Cloud HSM", "PKCS#11 · JCE", "Post-Quantum"].map((t) => (
            <div key={t} style={{ display: "flex", border: "1px solid #1e242d", borderRadius: 8, padding: "8px 16px" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
