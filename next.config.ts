/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 👈 disables type-checking at build time
  },
};

export default nextConfig;
