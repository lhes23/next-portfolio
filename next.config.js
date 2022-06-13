/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const withVideos = require("next-videos");
module.exports = withVideos();

module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
};
