"use client"

import { motion } from "framer-motion"
import { Zap, Layers, Smartphone, Globe, Code, Lock, Cpu, Gauge } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance, ensuring your website loads quickly and runs smoothly.",
  },
  {
    icon: Layers,
    title: "Fully Customizable",
    description:
      "Tailor every aspect of your website to match your brand and vision with our powerful customization tools.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Your website will look great on any device, from desktop computers to mobile phones.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivery network ensures your website is fast for users around the world.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Well-structured, maintainable code that follows best practices and modern standards.",
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description: "Built-in security features to protect your website and users from common threats.",
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Leverage artificial intelligence to create smarter, more engaging user experiences.",
  },
  {
    icon: Gauge,
    title: "Performance Metrics",
    description: "Real-time analytics and insights to help you optimize your website's performance.",
  },
]

export default function FeaturesPage() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neon-green neon-text">Our Features</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the powerful tools and capabilities that make our platform the choice of digital visionaries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{
                y: -10,
                boxShadow: "0 0 20px rgba(57, 255, 20, 0.3)",
                transition: { duration: 0.2 },
              }}
              className="bg-dark-card p-6 rounded-xl border border-neon-green/20 hover:border-neon-green/50 transition-all"
            >
              <div className="p-3 rounded-full bg-neon-green/10 w-14 h-14 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-neon-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-24 bg-dark-card rounded-xl border border-neon-green/20 p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Advanced Animation System</h2>
              <p className="text-gray-400 mb-6">
                Our platform includes a powerful animation system that allows you to create stunning visual effects with
                minimal effort. From simple transitions to complex sequences, you have complete control over how your
                content moves and behaves.
              </p>
              <ul className="space-y-2">
                {[
                  "Keyframe animations",
                  "Scroll-triggered effects",
                  "Interactive elements",
                  "Performance optimization",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="text-neon-green mr-2">›</span> {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-neon-green/30">
              <Image src="/placeholder.svg?height=400&width=600" alt="Animation system" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}
