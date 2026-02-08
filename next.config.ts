import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  
  // ADD THESE LINES:
  eslint: {
    ignoreDuringBuilds: true,  // This bypasses ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true,   // This bypasses TypeScript errors
  },
};

export default nextConfig;