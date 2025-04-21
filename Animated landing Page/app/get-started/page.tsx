"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Check } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid-background"></div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Cyberpunk background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neon-green neon-text">Get Started Today</h1>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of creators and businesses building stunning digital experiences with NeonVerse.
              </p>
              <div className="space-y-6 mb-8">
                {[
                  "14-day free trial, no credit card required",
                  "Unlimited access to all features",
                  "24/7 customer support",
                  "Cancel anytime",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-neon-green/20">
                      <Check className="h-4 w-4 text-neon-green" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <div className="p-6 bg-dark-card rounded-xl border border-neon-green/20 mb-6">
                <p className="text-gray-400 italic">
                  "NeonVerse transformed our online presence completely. The animations and interactive elements have
                  increased our user engagement by over 200%."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-800 mr-3"></div>
                  <div>
                    <p className="font-bold text-white">Jamie Smith</p>
                    <p className="text-sm text-gray-400">Marketing Director, TechCorp</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-card rounded-xl border border-neon-green/20 p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Create your account</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm text-gray-400">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-black border-neon-green/30 focus:border-neon-green focus:ring-neon-green/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm text-gray-400">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-black border-neon-green/30 focus:border-neon-green focus:ring-neon-green/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-black border-neon-green/30 focus:border-neon-green focus:ring-neon-green/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm text-gray-400">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-black border-neon-green/30 focus:border-neon-green focus:ring-neon-green/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm text-gray-400">
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    className="bg-black border-neon-green/30 focus:border-neon-green focus:ring-neon-green/20"
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    className="border-neon-green/50 data-[state=checked]:bg-neon-green data-[state=checked]:text-black"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400 leading-tight">
                    I agree to the{" "}
                    <Link href="#" className="text-neon-green hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-neon-green hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <Button className="w-full bg-neon-green text-black hover:bg-neon-green-light">
                  Create Account <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Already have an account?{" "}
                  <Link href="#" className="text-neon-green hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
