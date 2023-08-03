/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash:true,
  output: "export",
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
  }
}

module.exports = nextConfig

const withVideos = require("next-videos")
module.exports = withVideos()
