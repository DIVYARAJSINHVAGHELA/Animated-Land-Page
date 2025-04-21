"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Footer from "@/components/footer"

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Alex has over 15 years of experience in web development and digital design.",
  },
  {
    name: "Sarah Williams",
    role: "Creative Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah leads our creative team with her innovative approach to digital experiences.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael is a full-stack developer with expertise in animation and interactive design.",
  },
  {
    name: "Emma Rodriguez",
    role: "UX Designer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emma creates intuitive user experiences that balance aesthetics and functionality.",
  },
]

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neon-green neon-text">About Us</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're a team of designers, developers, and digital enthusiasts passionate about creating the future of web
            experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-gray-400 mb-4">
              At NeonVerse, we believe in pushing the boundaries of what's possible on the web. Our mission is to
              empower creators and businesses to build digital experiences that captivate, engage, and inspire.
            </p>
            <p className="text-gray-400 mb-4">
              Founded in 2020, we've helped hundreds of clients transform their online presence with cutting-edge
              animation and interactive design.
            </p>
            <p className="text-gray-400">
              Our approach combines technical excellence with creative vision, resulting in websites that not only look
              stunning but also perform flawlessly.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-80 rounded-xl overflow-hidden border border-neon-green/30"
          >
            <Image src="/placeholder.svg?height=600&width=800" alt="Our team at work" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 0 20px rgba(57, 255, 20, 0.3)",
                  transition: { duration: 0.2 },
                }}
                className="bg-dark-card rounded-xl overflow-hidden border border-neon-green/20 hover:border-neon-green/50 transition-all"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-neon-green mb-2">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-dark-card rounded-xl border border-neon-green/20 p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { title: "Innovation", description: "We constantly push the boundaries of what's possible." },
              { title: "Quality", description: "We never compromise on the quality of our work." },
              { title: "Collaboration", description: "We believe in the power of teamwork and partnership." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="p-6 rounded-lg bg-black/50 border border-neon-green/10"
              >
                <h3 className="text-xl font-bold mb-2 text-neon-green">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}
