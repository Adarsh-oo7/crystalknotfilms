import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const isExport = process.env.NEXT_EXPORT === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/crystalknotfilms' : '',
  assetPrefix: isProd ? '/crystalknotfilms' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/models/[name][ext]',
      },
    });
    return config;
  },
};

// Only add headers if not doing a static export
if (!isExport) {
  nextConfig.headers = async () => [
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
}

export default nextConfig;
