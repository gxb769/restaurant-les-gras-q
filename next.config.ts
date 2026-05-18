import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — no Node.js server needed, works on any host
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
