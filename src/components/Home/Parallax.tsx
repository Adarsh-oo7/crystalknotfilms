'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ParallaxHero = () => {
  const [videoSources] = useState(() => {
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/crystalknotfilms' : '';

    return [
      // Primary: GitHub raw file (works well in production)
      isProd
        ? 'https://github.com/adarsh-oo7/crystalknotfilms/raw/main/public/videos/intro.mp4'
        : `${basePath}/videos/intro.mp4`,

      // Fallback: standard hosted file
      `${basePath}/videos/intro.mp4`,

      // Fallback: media.githubusercontent.com (for Git LFS/media files)
      isProd
        ? 'https://media.githubusercontent.com/media/adarsh-oo7/crystalknotfilms/main/public/videos/intro.mp4'
        : `${basePath}/videos/intro.mp4`
    ];
  });

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            {videoSources.map((src, i) => (
              <source key={i} src={src} type="video/mp4" />
            ))}
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 -z-0" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <div className="mb-6 flex justify-center">
            <Image
              src="./images/Ck logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="invert"
              priority
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-medium leading-tight"style={{ fontFamily: 'Cinzel, sans-serif', letterSpacing: '0.09em', lineHeight: 1.4, }}>
            INTENTIONALLY CRAFTED <br />
            <span className="block mt-2">LOVE STORIES.</span>
          </h1>
        </div>
      </section>

      {/* Running Banner */}
      <div className="overflow-hidden whitespace-nowrap bg-[#886e74] text-white text-sm md:text-base font-medium py-2">
        <div className="inline-block animate-marquee px-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-4">
              MOMENTS TO REMEMBER WITH PEOPLE YOU’LL NEVER FORGET.
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ParallaxHero;
