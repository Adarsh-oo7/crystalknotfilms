

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"


const images = ["./images/A7405470.jpg", "./images/A7405566.jpg", "./images/A7405701.jpg", "./images/Abbey&Andy_Previews (21 of 37).jpg", "./images/Chelsea&Liam (11 of 24).jpg", "./images/SONY (1272).jpg"]

export default function LandingSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 2000) // Change image every 5 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
            <div className="container px-4 md:px-8">
                {/* Centered Title */}
                <div className="text-center justify-center  mb-12">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl  tracking-tight">
                        MOMENTS TO REMEMBER WITH <br /> PEOPLE YOU&apos;LL NEVER FORGET.
                    </h1>
                </div>
                {/* Content Grid: Text on Left, Vertical Line, Image on Right */}
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        {" "}
                        {/* Centered text on mobile, left on md+ */}
                        <p className="text-gray-300 max-w-xl mx-auto md:mx-0">
                            {" "}
                            {/* Centered paragraph on mobile, left on md+ */}
                            We work with creators, planners, and couples across the world who care about quality not just quantity. So whether it’s a luxury vineyard wedding in California, a cozy countryside ceremony in Italy, or a city elopement in New York, we treat every project like it’s a feature film.
                            Because your memories deserve more than filters and flashy effects.
                            They deserve heart, rhythm, and a story that actually feels like you.
                            So if you’re looking for an editor who gets the vibe, nails the tone, and makes your footage feel like magic
                            you’ve found your team.

                        </p>
                        <p className="text-gray-300 max-w-xl mx-auto md:mx-0">
                            {" "}
                            {/* Centered paragraph on mobile, left on md+ */}
                            Let’s make something beautiful — frame by frame.
                        </p>
                        <p className="text-gray-300 max-w-xl mx-auto md:mx-0">
                            {" "}
                            {/* Centered paragraph on mobile, left on md+ */}
                            We create cinematic masterpieces that you can watch as seasons turn, and years go by. Our videos are much
                            more than just souvenirs of your wedding day. They&apos;re time capsules. Beloved heirlooms. Pieces of
                            your family heritage that will live on for generations. So, what are you waiting for?
                        </p>

                    </div>

                    {/* Vertical Line */}
                    <div className="hidden md:block h-full w-px bg-gray-600 self-stretch"></div>

                    {/* Right Content (Image Carousel) */}
                    <div className="relative w-full max-w-md mx-auto  border border-white p-3 bg-black shadow-lg">
                        <div className="relative aspect-[4/3] overflow-hidden ">
                            {/* Overlay Logo */}
                            <Image
                                src="/images/Ck logo.png"
                                alt="Logo overlay"
                                width={64}
                                height={64}
                                className="absolute top-4 left-4 z-10 invert w-16 h-auto"
                                priority
                            />


                            <AnimatePresence initial={false}>
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full h-full"
                                >
                                    <Image
                                        src={images[currentImageIndex]}
                                        alt={`Wedding image ${currentImageIndex + 1}`}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>

                            </AnimatePresence>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}



