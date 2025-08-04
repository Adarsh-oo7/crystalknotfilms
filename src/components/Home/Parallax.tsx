'use client';

import React from 'react';
import Image from 'next/image';

const ParallaxHero = () => {
  return (
    <>
      {/* Parallax Section */}
      <section
        className="relative min-h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/A7405566.jpg')", // Replace with your actual image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          {/* Logo Image */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/Ck logo.png" // Replace with your logo path
              alt="Logo"
              width={100}
              height={100}
              className='invert'
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-medium leading-tight">
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
