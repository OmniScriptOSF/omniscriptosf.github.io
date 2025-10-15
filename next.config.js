/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/omniscript.github.io',
  trailingSlash: true,
}

module.exports = nextConfig
