'use client';
import React, { useState } from 'react';

interface VideoBannerProps {
  title?: string;
  videoSrc?: string;
  overlayOpacity?: string;
}

export default function VideoBanner({
  title,
  videoSrc,
  overlayOpacity = '0.4',
}: VideoBannerProps) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/crystalknotfilms' : '';

  const [videoSources] = useState(() => {
    const fallback = videoSrc || '/videos/intro.mp4';
    const path = `${basePath}${fallback}`;

    return [
      // ✅ GitHub raw fallback (production only)
      isProd
        ? 'https://raw.githubusercontent.com/adarsh-oo7/crystalknotfilms/main/public/videos/intro.mp4'
        : path,

      // ✅ GitHub media fallback
      isProd
        ? 'https://media.githubusercontent.com/media/adarsh-oo7/crystalknotfilms/main/public/videos/intro.mp4'
        : path,

      // ✅ Local fallback
      path,
    ];
  });

  const poster = isProd ? `${basePath}/fallback.jpg` : '/fallback.jpg';

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        {videoSources.map((src, idx) => (
          <source key={idx} src={src} type="video/mp4" />
        ))}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Title content */}
      {title && (
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <h1
            className="text-3xl md:text-5xl font-normal"
            style={{ fontFamily: 'Cinzel, sans-serif' }}
          >
            {title}
          </h1>
        </div>
      )}
    </div>
  );
}
