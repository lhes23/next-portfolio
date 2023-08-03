/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  images: {
    domains: ["images.unsplash.com"]
  },
  transpilePackages: ["three"],
  experimental: {
    nftTracing: true
  },
  trailingSlash: true,
  output: "export"
}

module.exports = nextConfig

const withVideos = require("next-videos")
module.exports = withVideos()
