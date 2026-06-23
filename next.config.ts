import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/` for hosting on Cloudflare Pages.
  output: "export",
  images: {
    // Static export has no image-optimization server, so serve images as-is.
    unoptimized: true,
    // The Threefolks mark is shipped as an SVG; allow next/image to serve it.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
