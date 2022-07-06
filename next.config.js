/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["new.adtravel.is"],
  },
  twin: {
    styled: "styled-components",
    config: "./src/tailwind.config.js",
    format: "auto",
    includeClassNames: true,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
