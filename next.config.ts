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
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable Turbopack to avoid CSP issues in development
  experimental: {},
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
        source: '/api/newsletter/:path*',
        destination: 'http://api-gateway:3000/api/newsletter/:path*',
      },
      {
        source: '/api/v1/ghost/:path*',
        destination: 'http://ghost-service:2368/ghost/api/v4/:path*',
      }
    ];
  },
  // Disable CSP in development to avoid script loading issues
  async headers() {
    return process.env.NODE_ENV === 'production' ? [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
          }
        ]
      }
    ] : [];
  }
};

export default nextConfig;
