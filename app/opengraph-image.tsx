import { generate as DefaultImage } from "fumadocs-ui/og";
import { ImageResponse } from "next/og";

export const alt = "Imgforge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Image() {
  return new ImageResponse(
    <DefaultImage
      title="Imgforge"
      description="Image Processing Reimagined in Rust"
      site="Imgforge"
    />,
    {
      ...size,
    },
  );
}
