"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-neon-green/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-bold text-xl text-neon-green neon-text font-mono">
            NeonVerse
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link
                  href={item.path}
                  className={`hover:text-neon-green transition-colors ${
                    pathname === item.path ? "text-neon-green" : "text-gray-400"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Button
                variant="outline"
                size="sm"
                className="border-neon-green/50 text-neon-green hover:bg-neon-green/10 font-mono"
              >
                Log in
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Link href="/get-started">
                <Button size="sm" className="bg-neon-green text-black hover:bg-neon-green-light font-mono">
                  Sign up
                </Button>
              </Link>
            </motion.div>
          </div>

          <button className="md:hidden text-neon-green" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black/95 border-b border-neon-green/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={`block py-2 hover:text-neon-green transition-colors ${
                      pathname === item.path ? "text-neon-green" : "text-gray-400"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-neon-green/50 text-neon-green hover:bg-neon-green/10 font-mono"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Button>
                <Link href="/get-started" className="w-full">
                  <Button
                    className="w-full bg-neon-green text-black hover:bg-neon-green-light font-mono"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
