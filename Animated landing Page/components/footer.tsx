"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Instagram, Linkedin, Facebook, Youtube, TwitterIcon as TikTok } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: TikTok, href: "#", label: "TikTok" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Support", href: "#support" },
        { name: "API", href: "#api" },
        { name: "Status", href: "#status" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "GDPR", href: "#gdpr" },
      ],
    },
  ]

  return (
    <footer className="bg-dark-card border-t border-neon-green/20 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h3 className="text-2xl font-bold mb-4 text-neon-green neon-text font-mono">NeonVerse</h3>
              <p className="text-gray-400 max-w-md">
                Creating stunning animated websites that captivate your audience and drive engagement in the digital
                frontier. Our social media services help brands stand out in today's competitive landscape.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * columnIndex }}
              >
                <h4 className="font-bold mb-4 text-white font-mono">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * columnIndex + 0.05 * linkIndex }}
                    >
                      <Link href={link.href} className="text-gray-400 hover:text-neon-green transition-colors">
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className="border-t border-neon-green/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-gray-400">© {currentYear} NeonVerse. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#privacy" className="text-sm text-gray-400 hover:text-neon-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-sm text-gray-400 hover:text-neon-green transition-colors">
              Terms of Service
            </Link>
            <Link href="#cookies" className="text-sm text-gray-400 hover:text-neon-green transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
