/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig

const withVideos = require("next-videos")
module.exports = withVideos()

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  images: {
    domains: ["images.unsplash.com"]
  }
}
