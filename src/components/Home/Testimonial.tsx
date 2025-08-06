"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight } from 'lucide-react'

// Define a type for your testimonial data for better type safety
type Testimonial = {
    id: number;
    image: string;
    quote: string;
    description: string;
    author: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        image: "./images/A7405470.jpg",
        quote: "They truly felt like the whole package!",
        description: "Deciding who is going to document one of the best days of your life is an important decision! We could see the passion they had for their art and trusted they would document our love in a way that felt natural and meaningful. They delivered nothing short of that!",
        author: "Julia & Jack"
    },
    {
        id: 2,
        image: "./images/A7405566.jpg",
        quote: "Absolutely incredible experience from start to finish!",
        description: "From our first consultation to receiving our final gallery, everything was seamless. They captured not just photos, but emotions and memories that we'll treasure forever. Their artistic vision and professional approach made our special day even more magical.",
        author: "Sarah & Michael"
    },
    {
        id: 3,
        image: "./images/A7405701.jpg",
        quote: "We couldn't have asked for better photographers!",
        description: "Their ability to make us feel comfortable and natural in front of the camera was amazing. Every shot tells a story, and looking through our wedding album brings back all the joy and love from that perfect day. Highly recommend to any couple!",
        author: "Emma & David"
    }
]

export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000) // Auto-slide every 5 seconds

        return () => clearInterval(timer)
    }, [])

    const goToNext = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                    backgroundImage: `url(${currentTestimonial.image})`,
                }}
            ></div>

            {/* Glassy Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            {/* Fixed Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rotate-45"></div>
                <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rotate-12"></div>
                <div className="absolute bottom-32 left-40 w-28 h-28 border-2 border-white -rotate-12"></div>
                <div className="absolute bottom-20 right-20 w-36 h-36 border-2 border-white rotate-45"></div>
                <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-white rotate-45"></div>
                <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-white -rotate-12"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-16">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider" style={{ fontFamily: "Cinzel, Regular" }}>
                        KIND WORDS
                    </h1>
                </div>

                {/* Testimonial Content */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image and Label */}
                        <div className="relative">
                            {/* Label */}
                            <div className="absolute -top-8 -left-4 bg-red-700 text-white px-4 py-2 text-sm font-medium transform -rotate-2 z-20" style={{ fontFamily: "Quicksand, Regular" }}>
                                WHAT OUR COUPLES SAY
                            </div>

                            {/* Testimonial Image */}
                            <div className="relative w-64 h-64 mx-auto transition-all duration-700 ease-in-out transform">
                                <Image
                                    src={currentTestimonial.image || "./placeholder.svg"} // Ensure src is always a string
                                    alt={`Testimonial from ${currentTestimonial.author}`}
                                    fill
                                    className="object-cover rounded-lg shadow-2xl transition-opacity duration-700"
                                />
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="text-black space-y-6 transition-all duration-700 ease-in-out">
                            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight" style={{ fontFamily: "Quicksand, Regular" }}>
                                {currentTestimonial.quote}
                            </h2>

                            <p className="text-md md:text-md text-white leading-relaxed opacity-90" style={{ fontFamily: "Quicksand, Regular" }}>
                                {currentTestimonial.description}
                            </p>

                            {/* Removed font-script class */}
                            <div className="text-xl text-white italic" style={{ fontFamily: "Ginger, Regular" }}>
                                - {currentTestimonial.author}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute right-8 bottom-8 flex space-x-4">
                    <button
                        onClick={goToNext}
                        className="bg-red-600 hover:bg-red-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}
