"use client";

import React from "react";

export default function VideoBanner() {
  return (
    <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Centered content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center" style={{ fontFamily: 'Cinzel, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-2 drop-shadow-md">
          The Clarity You Deserve
        </h1>
        
      </div>
    </section>
  );
}
