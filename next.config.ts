import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1600, 1920],
    minimumCacheTTL: 2678400,
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [];
  },
};

export default nextConfig;
