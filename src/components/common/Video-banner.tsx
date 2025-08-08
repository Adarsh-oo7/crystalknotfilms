"use client";

import React, { useEffect, useState } from "react";

export default function VideoBanner({
  title = "The Clarity You Deserve",
  overlayOpacity = "40",
}: {
  title?: string;
  overlayOpacity?: string;
}) {
  const isProd = process.env.NODE_ENV === "production";

  const [currentVideoSource, setCurrentVideoSource] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const videoSources = [
    isProd
      ? "https://github.com/adarsh-oo7/crystalknotfilms/raw/main/public/videos/intro.mp4"
      : "/videos/intro.mp4",
    isProd
      ? "https://media.githubusercontent.com/media/adarsh-oo7/crystalknotfilms/main/public/videos/intro.mp4"
      : "/videos/intro.mp4",
    "/videos/intro.mp4", // fallback
  ];

  useEffect(() => {
    if (videoRef && videoLoaded) {
      videoRef
        .play()
        .then(() => {
          console.log("Banner video autoplayed");
        })
        .catch((err) => {
          console.log("Autoplay blocked for banner video:", err);
        });
    }
  }, [videoRef, videoLoaded]);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Banner video error:", e.currentTarget.error);

    if (currentVideoSource < videoSources.length - 1) {
      setCurrentVideoSource((prev) => prev + 1);
      setVideoLoaded(false);
    } else {
      setVideoError(true);
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
      {/* Background Video */}
      {!videoError && (
        <video
          key={currentVideoSource}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
          ref={setVideoRef}
          preload="metadata"
          crossOrigin={currentVideoSource === 0 ? undefined : "anonymous"}
        >
          <source src={videoSources[currentVideoSource]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/${overlayOpacity} z-10`} />

      {/* Title */}
      <div
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
        style={{
          fontFamily: "Cinzel, sans-serif",
          letterSpacing: "0.1em",
          lineHeight: 1.4,
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-2 drop-shadow-md">
          {title}
        </h1>
      </div>
    </section>
  );
}
