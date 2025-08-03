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
    // Handle GLB/GLTF files (existing functionality)
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/models/[name][ext]',
      },
    });
    
    // Add video file support
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|avi|mov|wmv|flv|m4v)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/videos/[name]-[hash][ext]',
      },
    });
    
    return config;
  },
  
  // Optional: Add headers for better video caching
  async headers() {
    return [
      {
        source: '/static/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;