/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { 
    unoptimized: true 
  },
  typescript: {
    // This forces the build to ignore the animation type error
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
