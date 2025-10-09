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
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'http://localhost:3001/api/auth/:path*',
      },
      {
        source: '/api/users/:path*',
        destination: 'http://localhost:3001/api/users/:path*',
      }
    ];
  }
};

export default nextConfig;
