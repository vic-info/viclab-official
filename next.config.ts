/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/viclab-official',
  assetPrefix: '/viclab-official/',
};

export default nextConfig;
