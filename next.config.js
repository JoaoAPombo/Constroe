/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  trailingSlash: true,
  assetPrefix: './',
  publicRuntimeConfig: {
    staticFolder: '/imgs',
  },
}

module.exports = nextConfig
