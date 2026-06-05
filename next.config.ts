import type { NextConfig } from "next";

const backendUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || process.env.NEXT_PUBLIC_STORAGE_URL || 'http://localhost:8000';

let backendProtocol = 'http';
let backendHostname = 'localhost';
let backendPort = '8000';

try {
  const url = new URL(backendUrl);
  backendProtocol = url.protocol.replace(':', '');
  backendHostname = url.hostname;
  backendPort = url.port;
} catch (e) {
  // fallback if URL parsing fails
}

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: backendProtocol as 'http' | 'https',
        hostname: backendHostname,
        port: backendPort,
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