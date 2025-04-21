"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, Layers, Smartphone, Globe } from "lucide-react"

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
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-24 bg-muted/50" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Powerful Features</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create amazing digital experiences
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
