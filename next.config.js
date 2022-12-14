/** @type {import('next').NextConfig} */
const { EDGE_RUNTIME_WEBPACK } = require('next/dist/shared/lib/constants')
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  distDir: 'build',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig