"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Image from "next/image"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small projects and personal websites",
    features: ["5 pages", "Basic animations", "Responsive design", "1 month of support", "Standard CDN"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    description: "Ideal for businesses and professional portfolios",
    features: [
      "Unlimited pages",
      "Advanced animations",
      "Responsive design",
      "6 months of support",
      "Global CDN",
      "Custom domain",
      "Analytics dashboard",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited pages",
      "Premium animations",
      "Responsive design",
      "12 months of priority support",
      "Global CDN with edge optimization",
      "Custom domain with SSL",
      "Advanced analytics dashboard",
      "API access",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
]

export default function PricingPage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neon-green neon-text">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select the perfect plan for your needs and start creating stunning digital experiences today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl p-8 border ${
                plan.highlighted
                  ? "border-neon-green neon-border bg-dark-card relative overflow-hidden"
                  : "border-gray-800 bg-dark-card/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-neon-green text-black text-center text-sm py-1 font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className={`${plan.highlighted ? "pt-4" : ""}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-neon-green">{plan.price}</span>
                  <span className="text-gray-400 ml-1">/month</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <Button
                  className={`w-full mb-8 ${
                    plan.highlighted
                      ? "bg-neon-green text-black hover:bg-neon-green-light"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    >
                      <Check className="h-5 w-5 text-neon-green mr-2 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-24 bg-dark-card rounded-xl border border-neon-green/20 p-8 md:p-12 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Need a custom solution?</h2>
          <p className="text-gray-400 mb-6">
            Contact our team for a tailored package that meets your specific requirements.
          </p>
          <Button className="bg-neon-green text-black hover:bg-neon-green-light">Contact Sales</Button>
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}
