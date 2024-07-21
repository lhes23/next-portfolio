/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:process.env.BASE_PATH,
  output: "export",
  images: { unoptimized: true }
}

module.exports = nextConfig
