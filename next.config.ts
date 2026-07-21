import type { NextConfig } from "next";
import path from "path";

const root = process.cwd();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(root),
  turbopack: {
    root: path.join(root),
  },
};

export default nextConfig;
