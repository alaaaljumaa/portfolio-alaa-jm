import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // generates static HTML in /out
  basePath: "/portfolio-alaa-jm/",   // your repo name
  images: {
    unoptimized: true,       // required: GH Pages can't run Next's image optimizer
  },
};

export default nextConfig;
