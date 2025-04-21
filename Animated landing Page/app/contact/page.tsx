"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ContactPage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neon-green neon-text">Get In Touch</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions or ready to start your project? Reach out to our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-card rounded-xl border border-neon-green/20 p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-400">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-black border-neon-green/30 focus:border-neon-green focus:ring-neon-green/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-400">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-black border-neon-green/30 focus:border-neon-green focus:ring-neon-green/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  className="bg-black border-neon-green/30 focus:border-neon-green focus:ring-neon-green/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className="bg-black border-neon-green/30 focus:border-neon-green focus:ring-neon-green/20 min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-neon-green text-black hover:bg-neon-green-light">Send Message</Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-dark-card rounded-xl border border-neon-green/20 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-neon-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-white">Email</h3>
                    <p className="text-gray-400">contact@neonverse.com</p>
                    <p className="text-gray-400">support@neonverse.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-neon-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-white">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-neon-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-white">Office</h3>
                    <p className="text-gray-400">123 Digital Avenue</p>
                    <p className="text-gray-400">Tech City, TC 10101</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-card rounded-xl border border-neon-green/20 p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How long does a typical project take?",
                    answer:
                      "Project timelines vary based on complexity, but most projects are completed within 2-6 weeks.",
                  },
                  {
                    question: "Do you offer maintenance services?",
                    answer: "Yes, we offer ongoing maintenance and support packages for all our projects.",
                  },
                  {
                    question: "Can you work with existing websites?",
                    answer: "We can enhance your current website or rebuild it from the ground up.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="border-b border-neon-green/10 pb-4 last:border-0 last:pb-0"
                  >
                    <h3 className="font-bold text-white mb-2">{item.question}</h3>
                    <p className="text-gray-400">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
