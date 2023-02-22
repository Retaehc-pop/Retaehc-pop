/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  experimental: {
    // Required:
    appDir: true,
  },
  images:{
    domains: ['images.ctfassets.net','via.placeholder.com','t4.ftcdn.net']
  }
}

module.exports = nextConfig
