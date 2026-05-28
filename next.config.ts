import type { NextConfig } from "next";

const backendUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'https://sira-backend-7zre.onrender.com';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sira-backend-7zre.onrender.com',
        port: '',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: `${backendUrl}/admin/:path*`,
      },
      {
        source: '/livewire/:path*',
        destination: `${backendUrl}/livewire/:path*`,
      },
      {
        source: '/filament/:path*',
        destination: `${backendUrl}/filament/:path*`,
      },
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
      {
        source: '/storage/:path*',
        destination: `${backendUrl}/storage/:path*`,
      },
      {
        source: '/public/:path*',
        destination: `${backendUrl}/public/:path*`,
      },
    ];
  },
};

export default nextConfig;