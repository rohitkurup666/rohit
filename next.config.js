/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://allaboutrelationship.blog/free-thumbnail-tool',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
