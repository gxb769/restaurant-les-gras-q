import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — no Node.js server needed, works on any host
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
