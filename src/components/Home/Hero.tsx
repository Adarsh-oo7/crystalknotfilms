"use client"

import { motion, Variants, easeInOut } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

const HAS_HERO_ANIMATED_KEY = "hasHeroAnimated"

// const logoVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// }

const textVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
}

export function Hero() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null)
  const [showPlayButton, setShowPlayButton] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [currentVideoSource, setCurrentVideoSource] = useState(0)

  // Define video sources directly in useState
  const [videoSources] = useState(() => {
    const isProd = process.env.NODE_ENV === 'production'
    const basePath = isProd ? '/crystalknotfilms' : ''




    return [
      // Try GitHub raw URL first since we know it works for download
      isProd ? 'https://github.com/adarsh-oo7/crystalknotfilms/raw/main/public/videos/intro.mp4' : `${basePath}/videos/intro.mp4`,
      // Standard GitHub Pages path
      `${basePath}/videos/intro.mp4`,
      // Media URL for LFS files (fallback)
      isProd ? 'https://media.githubusercontent.com/media/adarsh-oo7/crystalknotfilms/main/public/videos/intro.mp4' : `${basePath}/videos/intro.mp4`
    ]
  })

  useEffect(() => {
    const storedValue = sessionStorage.getItem(HAS_HERO_ANIMATED_KEY)
    if (storedValue === "true") {
      setHasAnimated(true)
    } else {
      sessionStorage.setItem(HAS_HERO_ANIMATED_KEY, "true")
    }
  }, [])

  // Handle video autoplay
  useEffect(() => {
    const handleVideoPlay = async () => {
      if (videoRef && videoLoaded) {
        try {
          // Try to play the video
          await videoRef.play()
          console.log("Video started playing successfully")
        } catch (error) {
          console.log("Autoplay failed, this is normal in many browsers:", error)
          // Autoplay failed - this is expected in many browsers
          // The video will start when user interacts with the page
        }
      }
    }

    if (videoRef && videoLoaded) {
      handleVideoPlay()
    }
  }, [videoRef, videoLoaded])

  // Add click handler to start video if autoplay failed
  useEffect(() => {
    const handleUserInteraction = async (e: Event) => {
      // Don't trigger if user clicked the play button (handled separately)
      if (e.target && (e.target as HTMLElement).closest('.play-button')) {
        return
      }

      if (videoRef && videoRef.paused && !hasUserInteracted) {
        try {
          await videoRef.play()
          setShowPlayButton(false)
          setHasUserInteracted(true)
        } catch (error) {
          console.log("Could not start video on interaction:", error)
        }
      }
    }

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('touchstart', handleUserInteraction)
    document.addEventListener('keydown', handleUserInteraction)

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }
  }, [videoRef, hasUserInteracted])

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

    // Try next video source if available
    if (currentVideoSource < videoSources.length - 1) {
      console.log(`Trying next video source: ${videoSources[currentVideoSource + 1]}`)
      setCurrentVideoSource(prev => prev + 1)
      setVideoLoaded(false)
    } else {
      console.error("All video sources failed")
      setVideoError(true)
    }
  }

  const handleVideoLoad = () => {
    console.log("Video loaded successfully")
    setVideoLoaded(true)
  }

  const handleCanPlay = async (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget
    setVideoRef(video)
    console.log("Video can start playing")

    // Check if video meets minimum requirements for autoplay
    const videoWidth = video.videoWidth || video.clientWidth
    const videoHeight = video.videoHeight || video.clientHeight
    const videoDuration = video.duration

    console.log(`Video dimensions: ${videoWidth}x${videoHeight}, Duration: ${videoDuration}s`)

    // Try to play immediately when video can play
    try {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        await playPromise
        console.log("Video autoplay successful")
        setShowPlayButton(false)
      }
    } catch (error) {
      console.log("Autoplay blocked by browser:", error)
      setShowPlayButton(true) // Show manual play button
    }
  }

  const handleManualPlay = async () => {
    if (videoRef) {
      try {
        await videoRef.play()
        setShowPlayButton(false)
        setHasUserInteracted(true)
        console.log("Manual play successful")
      } catch (error) {
        console.error("Manual play failed:", error)
      }
    }
  }

  // Get the base path for GitHub Pages - matches your next.config.js
  // const getVideoPath = () => {
  //   const isProd = process.env.NODE_ENV === 'production'
  //   const basePath = isProd ? '/crystalknotfilms' : ''

  //   // For GitHub Pages, try multiple video sources - prioritize raw URL since it works
  //   return {
  //     // Try GitHub raw URL first since we know it works
  //     rawUrl: isProd ? 'https://github.com/adarsh-oo7/crystalknotfilms/raw/main/public/videos/intro.mp4' : `${basePath}/videos/intro.mp4`,
  //     // Standard GitHub Pages path
  //     mp4: `${basePath}/videos/intro.mp4`,
  //     // Media URL for LFS files (fallback)
  //     mediaUrl: isProd ? 'https://media.githubusercontent.com/media/adarsh-oo7/crystalknotfilms/main/public/videos/intro.mp4' : `${basePath}/videos/intro.mp4`
  //   }
  // }

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-30">
      </div>

      {/* Video Background */}
      {!videoError && (
        <div className="absolute inset-0 w-full h-full">
          <video
            key={currentVideoSource} // Force re-render when source changes
            ref={setVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={handleVideoError}
            onLoadedData={handleVideoLoad}
            onCanPlay={handleCanPlay}
            preload="metadata" // Changed back to metadata to reduce initial load
            // Remove crossOrigin for GitHub raw URLs
            crossOrigin={currentVideoSource === 0 ? undefined : "anonymous"}
            style={{ backgroundColor: '#000', minWidth: '200px', minHeight: '140px' }}
          >
            <source src={videoSources[currentVideoSource]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Manual Play Button - only show when autoplay is specifically blocked */}
          {showPlayButton && videoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={handleManualPlay}
                className="play-button bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-6 transition-all duration-300 group"
                aria-label="Play video"
              >
                <svg
                  className="w-12 h-12 text-white ml-1 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
        </div>
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
            className="absolute top-15 left-5 lg:left-0 xl:left-35  z-40"
          >
            <img
              src="./images/Ck logo.png" // make sure the path is correct
              alt="Company Logo"
              className="invert w-16 sm:w-20 md:w-24 lg:w-28 xl:w-30   h-auto"
            />
          </motion.div>



          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-white/60" />
          </div>
          <motion.div
            initial={hasAnimated ? "visible" : "hidden"}
            animate="visible"
            variants={textVariants}
            className="text-center text-white max-w-4xl"
          >
            <div className="mb-4">
              <span className="text-3xl lg:text-5xl font-light italic" style={{ fontFamily: "GingerBread, serif" }}
              >
                Where Moments 
              </span>
            </div>
            <h2
              className="text-4xl lg:text-7xl xl:text-8xl font-light tracking-wider mb-8"
              style={{ fontFamily: "Essential sans, serif" }}


            >
              Meet Style
            </h2>
          </motion.div>


          <div className="flex items-center justify-center">
            <div className="w-16 h-px bg-white/60" />
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-8 right-8 text-right text-white/80 text-sm lg:text-base tracking-wide max-w-xs z-20">
        <p className="leading-relaxed">
          INSPIRED BY FAMILY,
          <br />
          EDITE WITH SURGICAL PRECISION.
        </p>
      </div> */}

      {/* Enhanced debug info */}
      {/* {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-20 left-4 text-white text-xs z-40 bg-black/70 p-3 rounded max-w-sm">
          <div>Current Video Source: {videoSources[currentVideoSource]}</div>
          <div>Source Index: {currentVideoSource + 1}/{videoSources.length}</div>
          <div>Video Error: {videoError ? 'Yes' : 'No'}</div>
          <div>Video Loaded: {videoLoaded ? 'Yes' : 'No'}</div>
          <div>Video Playing: {videoRef && !videoRef.paused ? 'Yes' : 'No'}</div>
          <div>Video Muted: {videoRef?.muted ? 'Yes' : 'No'}</div>
          <div>Show Play Button: {showPlayButton ? 'Yes' : 'No'}</div>
          <div>User Interacted: {hasUserInteracted ? 'Yes' : 'No'}</div>
          <div>Video Duration: {videoRef?.duration ? `${videoRef.duration.toFixed(1)}s` : 'Unknown'}</div>
          <div>Video Dimensions: {videoRef ? `${videoRef.videoWidth || 'Unknown'}x${videoRef.videoHeight || 'Unknown'}` : 'Unknown'}</div>
          <div>Environment: {process.env.NODE_ENV}</div>
          <div>Base Path: {process.env.NODE_ENV === 'development' ? 'none' : '/crystalknotfilms'}</div>
          <div className="mt-2 text-yellow-300">
            {showPlayButton ? 'Click the play button to start video' : 
             videoRef && videoRef.paused && !hasUserInteracted ? 'Click anywhere to start video' : ''}
          </div>
        </div>
      )} */}
    </section>
  )
}