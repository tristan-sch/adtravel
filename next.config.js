/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["wp.adtravel.is"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.adtravel.is",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
