"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "This platform completely transformed our online presence. The animations and transitions make our site stand out from the competition.",
    author: "Alex Johnson",
    role: "CEO, TechStart",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "I've never received so many compliments on my website. The animated elements really capture visitors' attention and keep them engaged.",
    author: "Sarah Williams",
    role: "Designer, CreativeStudio",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Implementation was incredibly easy, and the results are stunning. Our conversion rates have increased by 40% since the redesign.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Don't just take our word for it</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-muted/30 p-8 rounded-xl border border-border relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
            >
              <Quote className="h-10 w-10 text-primary/20 absolute -top-2 -left-2" />
              <p className="text-lg mb-6 relative z-10">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="mr-4 rounded-full overflow-hidden h-12 w-12 relative">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
