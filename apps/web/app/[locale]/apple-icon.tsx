import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 38,
        color: "#9af1cc",
        background: "#0b1114",
        fontFamily: "Arial",
        fontSize: 86,
        fontWeight: 700,
      }}
    >
      S.
    </div>,
    size
  );
}
