/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      // "res.cloudinary.com",
      "localhost"
    ]
  }
}

module.exports = nextConfig
