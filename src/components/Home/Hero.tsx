"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Header } from "../common/Header"

const HAS_HERO_ANIMATED_KEY = "hasHeroAnimated"

export function Hero() {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const storedValue = sessionStorage.getItem(HAS_HERO_ANIMATED_KEY)
    if (storedValue === "true") {
      setHasAnimated(true)
    } else {
      sessionStorage.setItem(HAS_HERO_ANIMATED_KEY, "true")
    }
  }, [])

  const logoVariants = {
    hidden: { scale: 2, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  }

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-30">
        <Header/>
      </div>
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/80 " />
      <div className="relative z-20 flex flex-1 items-center justify-center px-6 lg:px-8 min-h-screen">
        <div className="text-center text-white max-w-4xl">
          <motion.div
            initial={hasAnimated ? "visible" : "hidden"}
            animate="visible"
            variants={logoVariants}
            className="mb-8"
          >
            <Image
              src="/images/Ck logo.png"
              alt="Company Logo"
              width={150}
              height={150}
              priority
              className="mx-auto invert" // Added 'invert' class here
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
    </section>
  )
}
