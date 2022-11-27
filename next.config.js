/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const {withPlausibleProxy} = require('next-plausible');
const withBundleAnalyzer = require('@next/bundle-analyzer');

const plausiblePlugin = withPlausibleProxy

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false
})

const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    localeDetection: false
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "localhost"
    ]
  }
}

module.exports = withPlugins([plausiblePlugin, bundleAnalyzer], nextConfig)
