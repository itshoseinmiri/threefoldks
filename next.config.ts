import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The Threefolks mark is shipped as an SVG; allow next/image to serve it.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
