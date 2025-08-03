// Fixed Hero.tsx with proper TypeScript types
"use client"

import { motion, Variants, easeInOut } from "framer-motion"
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

  // Fixed logoVariants with proper typing
  const logoVariants: Variants = {
    hidden: { 
      scale: 2, 
      opacity: 0, 
      y: 50 
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: easeInOut, // imported easing function
        delay: 0.5,
      },
    },
  }

// Alternative solutions:

// Option 1: Use predefined easing names
const logoVariants1 = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: 30,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut", // or "easeIn", "easeOut", "linear", "anticipate", "backIn", "backOut", "backInOut", "bounceIn", "bounceOut", "bounceInOut", "circIn", "circOut", "circInOut"
      delay: 0.2,
    },
  },
};

// Option 2: Use cubic-bezier array format
const logoVariants2 = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: 30,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1], // cubic-bezier values as array
      delay: 0.2,
    },
  },
};

// Option 3: Remove ease property to use default
const logoVariants3 = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: 30,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

// Option 4: Import and use easing functions
// At the top of your file, add:
// import { easeInOut } from "framer-motion";

const logoVariants4 = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: 30,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut, // imported easing function
      delay: 0.2,
    },
  },
};