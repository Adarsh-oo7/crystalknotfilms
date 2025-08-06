'use client'

import { useRef } from "react"
import { motion, Variants, easeOut, useScroll, useTransform } from "framer-motion"
import LightRays from "../LightRays"
import { ProfileCard } from "./ProfileCard"

const slideLeft: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1.5, ease: easeOut },
    },
}

const slideRight: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1.5, ease: easeOut },
    },
}


export default function Story() {
    const contentRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: contentRef,
        offset: ["start end", "end start"],
    })
    const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.3, 0])

    const storyContent = (
        <>
            <p>
                Working with other big brands in the Video editing industry for almost 8 years, I realized that almost every editor was after one thing – to cover as many weddings and make as much money as possible.
                There was no character in the wedding films. Have you observed that most wedding videos are just plain slow-motion walking clips of the couple? God, it’s almost 2025! Your iPhones can do that!
                And no one even tried to change that. That killed me as an artist. In 2020,
                I decided to start Crystal Knot Films — a place where edits aren’t rushed, stories aren’t recycled, and every timeline is built with care, coffee, and just the right amount of drama.
            </p>
            <p>
                Today, we create wedding films that don’t just look good — they feel right.
                Real stories. Real emotion. Zero copy-paste vibes.
            </p>
        </>
    )

    return (
        <div id="about" className="relative bg-gradient-to-b from-black via-black/100 to-black/70 text-white min-h-screen px-6 py-12 md:py-0 flex items-center justify-center">
            {/* Light Rays Background */}
            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="ffffff"
                    raysSpeed={2.5}
                    lightSpread={0.9}
                    rayLength={2.5}
                    followMouse={true}
                    mouseInfluence={0.5}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="pointer-events-none w-full h-full"
                />
            </div>

            {/* Two Column Content */}
            <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Story */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideLeft}
                    className="mt-8 md:mt-5 md:mb-5 backdrop-blur-md border border-white/30 bg-white/10 rounded-xl shadow-lg p-6 space-y-6"
                >


                    <h1 className="text-3xl md:text-3xl font-bold text-white tracking-tight text-center md:text-left" style={{ fontFamily: "Cinzel, Regular" }}>
                        FOUNDERING STORY
                    </h1>

                    <motion.div
                        ref={contentRef}
                        style={{ opacity, fontFamily: "Cinzel, Regular" }}
                        className="text-white leading-relaxed text-sm sm:text-sm md:text-sm lg:text-base space-y-6"
                    >
                        {storyContent}
                    </motion.div>
                </motion.div>

                {/* Right: Profile Card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideRight}
                    className="flex justify-center md:justify-end"
                >
                    <ProfileCard />
                </motion.div>

            </div>
        </div>
    )
}
