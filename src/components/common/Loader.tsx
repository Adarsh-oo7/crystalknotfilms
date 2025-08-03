"use client"

import type React from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface LoaderProps {
  /** The content to be displayed after the loading time. */
  children: React.ReactNode
  /** The duration in milliseconds for which the loader should be visible. Defaults to 3000ms (3 seconds). */
  loadingTime?: number
}

/**
 * A client-side loader component that displays a logo with a continuous scale-in and scale-out effect
 * for a specified duration before rendering its children.
 */
export function Loader({ children, loadingTime = 3000 }: LoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, loadingTime)

    return () => clearTimeout(timer)
  }, [loadingTime])

  if (isLoading) {
    return (
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="relative"
        >
          <Image
            src="/images/Ck logo.png"
            alt="Company Logo"
            width={150}
            height={150}
            priority
          />
        </motion.div>
        <span className="sr-only">Loading content...</span>
      </motion.div>
    )
  }

  return <>{children}</>
}
