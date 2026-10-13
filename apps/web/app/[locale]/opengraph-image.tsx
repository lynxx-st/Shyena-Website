import { ImageResponse } from "next/og";

export const alt = "Shyena Technologies Pvt. Ltd. cybersecurity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#eef5f3",
        background: "#0b1114",
        fontFamily: "Arial",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 58,
            height: 58,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #9af1cc",
            borderRadius: 8,
            color: "#9af1cc",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          S.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 23,
            fontWeight: 700,
          }}
        >
          Shyena Technologies Pvt. Ltd.
          <span style={{ color: "#94aaa6", fontSize: 15, fontWeight: 400 }}>
            Cybersecurity · Nepal
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 22,
          maxWidth: 900,
        }}
      >
        <div style={{ color: "#9af1cc", fontSize: 18, letterSpacing: 3 }}>
          CYBERSECURITY SERVICES · PRODUCTS · LEARNING
        </div>
        <div
          style={{
            fontSize: 66,
            lineHeight: 1.12,
            fontWeight: 700,
            letterSpacing: -3,
          }}
        >
          Security that moves your work forward.
        </div>
      </div>
      <div style={{ display: "flex", color: "#94aaa6", fontSize: 17 }}>
        Practical cybersecurity from Lalitpur, Nepal
      </div>
    </div>,
    size
  );
}
