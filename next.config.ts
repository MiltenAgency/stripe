import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  devIndicators: false,
  turbopack: { root: process.cwd() },
  experimental: { useTypeScriptCli: false },
};
export default nextConfig;
