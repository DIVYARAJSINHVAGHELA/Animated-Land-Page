"use client"

import React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Startup background images
const backgroundImages = [
  "/placeholder.svg?height=1080&width=1920", // Replace with actual startup image URLs
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
]

export default function Hero() {
  const constraintsRef = useRef(null)
  const [currentBgIndex, setCurrentBgIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentBgIndex ? 0.3 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image src={img || "/placeholder.svg"} alt="Startup background" fill className="object-cover" priority />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 grid-background"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden z-0" ref={constraintsRef}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-green/10 backdrop-blur-md border border-neon-green/30"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              boxShadow: [
                "0 0 5px rgba(57, 255, 20, 0.3)",
                "0 0 15px rgba(57, 255, 20, 0.5)",
                "0 0 5px rgba(57, 255, 20, 0.3)",
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            drag
            dragConstraints={constraintsRef}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6 inline-block rounded-full bg-neon-green/10 border border-neon-green/50 px-4 py-1.5 text-sm font-medium text-neon-green animate-glow"
          >
            ENTER THE DIGITAL FRONTIER
          </motion.div>
        </motion.div>

        <div className="space-y-6 text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="block">
              {Array.from("CREATE STUNNING").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.04 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="block mt-2 text-neon-green neon-text">
              {Array.from("EXPERIENCES").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.04 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-gray-400 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Build futuristic, interactive, and responsive websites with our powerful platform. Designed for visionaries
            who want to stand out in the digital realm.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Link href="/get-started">
              <Button
                size="lg"
                className="rounded-full bg-neon-green text-black hover:bg-neon-green-light hover:neon-glow font-mono"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-neon-green text-neon-green hover:bg-neon-green/10 font-mono"
              >
                Explore Features
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <ArrowDown className="h-8 w-8 text-neon-green animate-bounce" />
      </motion.div>
    </section>
  )
}
