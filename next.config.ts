/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 👈 disables type-checking at build time
  },
  eslint: {
    ignoreDuringBuilds: true, // ← disables ESLint during build
  },
};

export default nextConfig;
