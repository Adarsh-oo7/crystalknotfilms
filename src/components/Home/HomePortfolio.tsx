"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""

const videos = [
    {
        src: `${BASE_PATH}/videos/intro.mp4`,
        webm: `${BASE_PATH}/videos/intro.webm`,
        coupleName: "RACHEL + BEN",
        title: "Rachel & Ben's Wedding Film",
    },
    {
        src: `${BASE_PATH}/videos/intro.mp4`,
        webm: `${BASE_PATH}/videos/intro.webm`,
        coupleName: "SARAH + TOM",
        title: "Sarah & Tom's Special Day",
    },
    {
        src: `${BASE_PATH}/videos/intro.mp4`,
        webm: `${BASE_PATH}/videos/intro.webm`,
        coupleName: "EMILY + DAVID",
        title: "Emily & David's Love Story",
    },
]

export default function HomePortfolio() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const [videoReady, setVideoReady] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const currentVideo = videos[currentVideoIndex]

    const handleNext = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }

    const handlePrev = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
    }

    const handleClickToPlay = () => {
        const video = videoRef.current
        if (!video) return
        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handleCanPlay = () => setVideoReady(true)
        const handleError = () => setVideoReady(true)

        video.addEventListener("canplay", handleCanPlay)
        video.addEventListener("error", handleError)

        video.load()
        video.play().catch(() => {
            // Fallback: show controls if autoplay fails
            video.controls = true
        })

        return () => {
            video.removeEventListener("canplay", handleCanPlay)
            video.removeEventListener("error", handleError)
        }
    }, [currentVideo])

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-[#1a1a1a] text-white p-4 md:p-8 overflow-x-hidden">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="grid grid-cols-3 grid-rows-4 gap-10 opacity-5">
                    {["OUR", "FILMS", "OUR", "FILMS", "OUR", "FILMS", "OUR", "FILMS", "OUR"].map((word, i) => (
                        <span key={i} className="text-9xl  text-gray-600 uppercase tracking-widest">
                            {word}
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-8 mt-20">
                {/* Video wrapper with arrows outside */}
                <div className="relative w-full max-w-3xl flex flex-col items-end">
                    {/* Arrows outside video */}
                    <div className="mb-2 flex gap-2 pr-1">
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="bg-black/50 p-3 border border-white border-dotted rounded-full transition"
                            aria-label="Previous video"
                        >
                            <ChevronLeft className="h-5 w-5 text-white" />
                        </button>
                        <button
                            type="button"
                            onClick={handleNext}
                            className="bg-black/50 p-3 border border-white border-dotted rounded-full transition"
                            aria-label="Next video"
                        >
                            <ChevronRight className="h-5 w-5 text-white" />
                        </button>
                    </div>


                    {/* Video */}
                    <div className="relative w-full aspect-video border border-pink-300/50 rounded-lg shadow-lg overflow-hidden">
                        <video
                            ref={videoRef}
                            key={currentVideo.src}
                            className={`w-full h-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"
                                }`}
                            muted
                            playsInline
                            preload="auto"
                            loop
                            onClick={handleClickToPlay}
                            aria-label={currentVideo.title}
                        >
                            <source src={currentVideo.webm} type="video/webm" />
                            <source src={currentVideo.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Vertical couple name */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center text-lg font-semibold tracking-widest text-white -ml-16">
                    {currentVideo.coupleName}
                </div>

                {/* Call-to-action button */}
                <button
                    type="button"
                    className="bg-[#5a7a7e] hover:bg-[#4a6a6e] text-white px-6 py-3 rounded-sm mt-4 text-sm font-medium transition-colors"
                >
                    VIEW MORE WEDDING FILMS
                </button>
            </div>
        </div>
    )
}
