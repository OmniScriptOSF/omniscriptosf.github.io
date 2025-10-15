/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/omniscript-site',
  trailingSlash: true,
}

module.exports = nextConfig
