"use client"

import { motion, Variants, easeInOut } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Header } from "../common/Header"
// Use direct path instead of import due to Git LFS
// import vediosss from "../../../public/videos/intro.mp4"

const HAS_HERO_ANIMATED_KEY = "hasHeroAnimated"

export function Hero() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const storedValue = sessionStorage.getItem(HAS_HERO_ANIMATED_KEY)
    if (storedValue === "true") {
      setHasAnimated(true)
    } else {
      sessionStorage.setItem(HAS_HERO_ANIMATED_KEY, "true")
    }
  }, [])

  const logoVariants: Variants = {
    hidden: { scale: 2, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.5,
      },
    },
  }

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video failed to load:", e.currentTarget.error)
    setVideoError(true)
  }

  const handleVideoLoad = () => {
    console.log("Video loaded successfully")
    setVideoLoaded(true)
  }

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-30">
        <Header/>
      </div>
      
      {/* Video Background using imported video */}
      {!videoError && (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
          preload="auto"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Fallback Background if video fails */}
      {videoError && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      )}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-1 items-center justify-center px-6 lg:px-8 min-h-screen">
        <div className="text-center text-white max-w-4xl">
          <motion.div
            initial={hasAnimated ? "visible" : "hidden"}
            animate="visible"
            variants={logoVariants}
            className="mb-8"
          >
            <Image
              src="./images/Ck logo.png"
              alt="Company Logo"
              width={150}
              height={150}
              priority
              className="mx-auto invert"
            />
          </motion.div>

          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-white/60" />
          </div>
          <div className="mb-4">
            <span className="text-3xl lg:text-5xl font-light italic" style={{ fontFamily: "serif" }}>
              Feel Good
            </span>
          </div>
          <h2
            className="text-4xl lg:text-7xl xl:text-8xl font-light tracking-wider mb-8"
            style={{ fontFamily: "serif" }}
          >
            WEDDING FILMS
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-px bg-white/60" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 text-right text-white/80 text-sm lg:text-base tracking-wide max-w-xs z-20">
        <p className="leading-relaxed">
          INSPIRED BY FAMILY,
          <br />
          FASHIONED BY HEART.
        </p>
      </div>
      
      {/* Debug info - only in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-20 left-4 text-white text-xs z-40 bg-black/70 p-3 rounded max-w-sm">
          <div>Video Source: /videos/intro.mp4</div>
          <div>Video Error: {videoError ? 'Yes' : 'No'}</div>
          <div>Video Loaded: {videoLoaded ? 'Yes' : 'No'}</div>
        </div>
      )}
    </section>
  )
}