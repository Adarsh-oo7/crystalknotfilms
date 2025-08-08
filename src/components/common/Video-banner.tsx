'use client';
import React from 'react';

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

  // Use a base path in production
  const resolvedVideoSrc = videoSrc
    ? isProd
      ? `/crystalknotfilms${videoSrc}`
      : videoSrc
    : isProd
    ? '/crystalknotfilms/videos/intro.mp4'
    : '/videos/intro.mp4';

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={isProd ? '/crystalknotfilms/fallback.jpg' : '/fallback.jpg'}
      >
        <source src={resolvedVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {title}
        </h1>
      </div>
    </div>
  );
}
