/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['wp.adtravel.is'],
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
