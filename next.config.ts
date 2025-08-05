import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://sebastiangdesign.framer.website/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
