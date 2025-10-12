/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.ghost.org', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.ghost.org',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '2368',
        pathname: '/**'
      }
    ]
  },
  experimental: {
    turbopack: false // Disable turbopack to avoid lightningcss build issues in Docker
  },
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'http://api-gateway:3000/api/auth/:path*',
      },
      {
        source: '/api/users/:path*',
        destination: 'http://api-gateway:3000/api/users/:path*',
      },
      {
        source: '/api/v1/ghost/:path*',
        destination: 'http://ghost-service:2368/ghost/api/v4/:path*',
      }
    ];
  }
};

export default nextConfig;
