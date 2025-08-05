'use client'

import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { motion, Variants, easeInOut, easeOut, useScroll, useTransform } from "framer-motion"
import LightRays from "../LightRays";



const imageLeftVariants: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easeInOut, // ✅ Use imported function, not a string
        },
    },
};

const imageRightVariants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: easeOut }, // ✅ use imported easeOut
    },
};

const textVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 2, ease: easeOut, delay: 0.1 }, // ✅ fixed
    },
};




export default function About() {
    const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null)
    const [videoLoaded, setVideoLoaded] = useState(false)
    const [videoError, setVideoError] = useState(false)
    const [currentVideoSource, setCurrentVideoSource] = useState(0)
    const [showPlayButton, setShowPlayButton] = useState(false)
    const [hasUserInteracted, setHasUserInteracted] = useState(false)

    // const videoSources = [
    //     'https://github.com/adarsh-oo7/crystalknotfilms/raw/main/public/videos/intro.mp4',
    //     '/videos/intro.mp4',
    //     'https://media.githubusercontent.com/media/adarsh-oo7/crystalknotfilms/main/public/videos/intro.mp4',
    // ]
    const contentRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: contentRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.3, 0])
    const storyContent = (
        <>
            <p>
                Working with other big brands in the Video editing industry for almost 8 years, I realized that Almost editors was after one thing - to cover as many weddings and make as much money as possible.
                There was no character in the wedding Films, Have you observed that most of the wedding videos you see are just plain slow-motion walking clips of the couple? God, it’s almost 2025! Your iPhones can do that!
                And no one even tried to change that. That killed me as an artist. In 2020,
                I decided to start Crystal Knot Films — a place where edits aren’t rushed, stories aren’t recycled, and every timeline is built with care, coffee, and just the right amount of drama.

            </p>
            <p>
                Today, we create wedding films that don’t just look good — they feel right.
                Real stories. Real emotion. Zero copy-paste vibes.
            </p>
        </>
    )

    // Attempt autoplay when loaded
    // useEffect(() => {
    //     if (videoRef && videoLoaded) {
    //         videoRef.play().catch(() => setShowPlayButton(true))
    //     }
    // }, [videoRef, videoLoaded])

    // // User interaction fallback
    // useEffect(() => {
    //     const handler = async () => {
    //         if (videoRef && videoRef.paused && !hasUserInteracted) {
    //             try {
    //                 await videoRef.play()
    //                 setShowPlayButton(false)
    //                 setHasUserInteracted(true)
    //             } catch { }
    //         }
    //     }

    //     document.addEventListener("click", handler)
    //     document.addEventListener("keydown", handler)
    //     return () => {
    //         document.removeEventListener("click", handler)
    //         document.removeEventListener("keydown", handler)
    //     }
    // }, [videoRef, hasUserInteracted])

    return (
        // <div className="relative min-h-screen bg-black text-light-text p-4 overflow-hidden">

        <div id="about" className="relative bg-gradient-to-b from-black via-black/100 to-black/70 text-light-text p-4 overflow-hidden w-full min-h-screen">
            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={2.5}
                    lightSpread={0.9}
                    rayLength={2.5}
                    followMouse={true}
                    mouseInfluence={0.5}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="pointer-events-none w-full h-full "
                />
            </div>
            <div className="relative z-10">

                Mobile Layout
                <div className="md:hidden flex flex-col items-center justify-center w-full py-8 relative">
                    <div className="w-[250px] h-[250px] mb-8 relative">
                        {/* {!videoError ? (
                            <>
                                <video
                                    key={currentVideoSource}
                                    ref={setVideoRef}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover rounded-lg"
                                    onLoadedData={() => setVideoLoaded(true)}
                                    onCanPlay={async (e) => {
                                        setVideoRef(e.currentTarget)
                                        try {
                                            await e.currentTarget.play()
                                            setShowPlayButton(false)
                                        } catch {
                                            setShowPlayButton(true)
                                        }
                                    }}
                                    onError={() => {
                                        if (currentVideoSource < videoSources.length - 1) {
                                            setCurrentVideoSource(prev => prev + 1)
                                            setVideoLoaded(false)
                                        } else {
                                            setVideoError(true)
                                        }
                                    }}
                                >
                                </video>

                                {showPlayButton && videoLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <button
                                            onClick={async () => {
                                                if (videoRef) {
                                                    try {
                                                        await videoRef.play()
                                                        setShowPlayButton(false)
                                                        setHasUserInteracted(true)
                                                    } catch { }
                                                }
                                            }}
                                            className="play-button bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-6 group"
                                            aria-label="Play video"
                                        >
                                            <svg
                                                className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="w-full h-full bg-black rounded-lg flex items-center justify-center text-white text-sm">
                                Video unavailable
                            </div>
                        )} */}
                    </div>

                    {/* Mobile Content */}
                    <div className="flex flex-col items-center text-center w-full px-4">
                        <h1 className="text-3xl text-white  tracking-tight leading-tight mb-3" style={{ fontFamily: "Essential sans, serif" }}>
                            Foundering story

                        </h1>
                        <div className="w-20 h-0.5 bg-light-text mb-10" />
                        <div className="text-sm text-white leading-relaxed space-y-4 max-w-md">{storyContent}</div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-3 grid-rows-2 w-full min-h-screen relative">
                    {/* Image - Top Left */}
                    <div className="col-start-1 row-start-1 flex items-start justify-start p-10">
                        {/* <div className="w-[250px] h-[250px] relative z-10"> */}
                        <motion.div
                            className="w-[250px] h-[250px] relative z-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageLeftVariants}
                        >
{/* 
                            <Image
                                src="./images/A7401967.jpg"
                                alt="Couple by a river"
                                fill
                                className="object-cover rounded-lg"
                            /> */}
                        </motion.div>
                        {/* </div> */}
                    </div>

                    {/* Centered Content */}
       <div className="col-start-2 row-span-2 flex items-center justify-center text-center px-8 py-10 z-20">
  <div className="backdrop-blur-md border border-white/30 bg-white/10 rounded-xl shadow-lg p-10 md:p-12 lg:p-16 w-full max-w-6xl min-h-[500px] lg:min-h-[600px] xl:min-h-[650px]">
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textVariants}
    >
      <h1
        className="text-2xl text-white md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-6"
        style={{ fontFamily: "Cinzel, Regular" }}
      >
        FOUNDERING STORY
      </h1>

      <div className="text-base text-white md:text-lg leading-relaxed">
        <motion.div
          ref={contentRef}
          style={{ opacity, fontFamily: "Cinzel, Regular" }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          {storyContent}
        </motion.div>
      </div>
    </motion.div>
  </div>
</div>


                    {/* Video - Bottom Right */}
                    <div className="col-start-3 row-start-2 flex items-end justify-end p-10">
                        {/* <div className="w-[250px] h-[250px] relative z-10"> */}
                        <motion.div
                            className="w-[250px] h-[250px] relative z-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageRightVariants}
                        >
                            {/* {!videoError ? (
                                <>
                                    <video
                                        key={currentVideoSource}
                                        ref={setVideoRef}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        className="w-full h-full object-cover rounded-lg"
                                        onLoadedData={() => setVideoLoaded(true)}
                                        onCanPlay={async (e) => {
                                            setVideoRef(e.currentTarget)
                                            try {
                                                await e.currentTarget.play()
                                                setShowPlayButton(false)
                                            } catch {
                                                setShowPlayButton(true)
                                            }
                                        }}
                                        onError={() => {
                                            if (currentVideoSource < videoSources.length - 1) {
                                                setCurrentVideoSource((prev) => prev + 1)
                                                setVideoLoaded(false)
                                            } else {
                                                setVideoError(true)
                                            }
                                        }}
                                    >
                                        <source src={videoSources[currentVideoSource]} type="video/mp4" />
                                    </video>

                                    {showPlayButton && videoLoaded && (
                                        <div className="absolute inset-0 flex items-center justify-center z-10">
                                            <button
                                                onClick={async () => {
                                                    if (videoRef) {
                                                        try {
                                                            await videoRef.play()
                                                            setShowPlayButton(false)
                                                            setHasUserInteracted(true)
                                                        } catch { }
                                                    }
                                                }}
                                                className="play-button bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-6 group"
                                                aria-label="Play video"
                                            >
                                                <svg
                                                    className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="w-full h-full bg-black rounded-lg flex items-center justify-center text-white text-sm">
                                    Video unavailable
                                </div>
                            )} */}
                        </motion.div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
