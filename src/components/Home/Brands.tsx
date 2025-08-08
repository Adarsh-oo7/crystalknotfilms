"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const logoPairs = [
  [
    "/images/brands/gerdau-logo-removebg-preview.png",
    "/images/brands/timeSquare-removebg-preview.png",
  ],
  [
    "/images/brands/ninja-removebg-preview.png",
    "/images/brands/TV9-removebg-preview.png",
  ],
  [
    "/images/brands/TEDx-Logo-500x281-removebg-preview.png",
    "/images/brands/gerdau-logo-removebg-preview.png",
  ],
  [
    "/images/brands/timeSquare-removebg-preview.png",
    "/images/brands/ninja-removebg-preview.png",
  ],
  [
    "/images/brands/TV9-removebg-preview.png",
    "/images/brands/TEDx-Logo-500x281-removebg-preview.png",
  ],
];

export default function Brands() {
  const [activeIndex, setActiveIndex] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev.map((val, i) => (val + 1) % logoPairs[i].length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* White Box Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="bg-[#f5f5f5] p-10 md:p-16 rounded-lg shadow-lg max-w-5xl w-full text-center">
          <h2 className="text-2xl md:text-3xl  font-normal mb-8 text-black" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}>
            AS SEEN ON:
          </h2>

          {/* Logos Grid */}
          <div className="grid grid-cols-6 gap-6 items-center justify-items-center">
            {/* First row: 3 logos spanning 2 columns each */}
            {/* First row: 3 logos spanning 2 columns each */}
            {[0, 1, 2].map((i) => (
              <div key={i} className="col-span-2 relative w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={logoPairs[i][activeIndex[i]]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                      src={logoPairs[i][activeIndex[i]]}
                      alt={`Logo ${i}`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}


            {/* Second row: logos between the top ones */}
            {/* Second row: logos between the top ones */}
            <div className="col-span-1" />
            {[3, 4].map((i) => (
              <div key={i} className="col-span-2 relative w-20 h-10 sm:w-28 sm:h-14 md:w-32 md:h-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={logoPairs[i][activeIndex[i]]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                      src={logoPairs[i][activeIndex[i]]}
                      alt={`Logo ${i}`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
            <div className="col-span-1" />

          </div>
        </div>
      </div>
    </section>
  );
}
