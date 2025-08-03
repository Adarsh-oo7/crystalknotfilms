import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/crystalknotfilms' : '',
  assetPrefix: isProd ? '/crystalknotfilms' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configure static file handling
  webpack: (config, { dev, isServer }) => {
    // Handle GLB/GLTF files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/models/[name][ext]',
      },
    });
    
    return config;
  },
  
  // Optional: Add headers for better video serving from public folder
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
        ],
      },
    ];
  },
};

export default nextConfig;