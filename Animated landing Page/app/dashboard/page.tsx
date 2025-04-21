"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, Instagram, Youtube, TwitterIcon as TikTok, Linkedin, ArrowUp } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/footer"
import { LineChart, BarChart } from "@/components/charts"

// Dummy data for social media services
const socialMediaServices = [
  {
    id: "instagram",
    name: "Instagram Growth",
    icon: Instagram,
    plans: [
      {
        name: "Basic",
        price: "$199",
        features: ["Content calendar", "3 posts per week", "Basic hashtag research", "Monthly performance report"],
        popular: false,
      },
      {
        name: "Pro",
        price: "$399",
        features: [
          "Content calendar",
          "5 posts per week",
          "Advanced hashtag research",
          "Weekly performance reports",
          "Story creation",
          "1 Reel per week",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$799",
        features: [
          "Content calendar",
          "Daily posts",
          "Advanced hashtag research",
          "Real-time analytics",
          "Daily stories",
          "3 Reels per week",
          "Influencer outreach",
          "Community management",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "shorts",
    name: "Short Form Content",
    icon: TikTok,
    plans: [
      {
        name: "Starter",
        price: "$299",
        features: [
          "2 short videos per week",
          "Basic editing",
          "Trending audio selection",
          "Monthly performance report",
        ],
        popular: false,
      },
      {
        name: "Growth",
        price: "$599",
        features: [
          "4 short videos per week",
          "Advanced editing",
          "Trending audio selection",
          "Custom effects",
          "Weekly performance reports",
          "Engagement strategy",
        ],
        popular: true,
      },
      {
        name: "Viral",
        price: "$999",
        features: [
          "Daily short videos",
          "Premium editing",
          "Custom sound design",
          "Special effects",
          "Real-time analytics",
          "Trend research",
          "Viral strategy development",
          "Cross-platform distribution",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "video",
    name: "Video Editing",
    icon: Youtube,
    plans: [
      {
        name: "Basic",
        price: "$249",
        features: [
          "2 videos per month",
          "Up to 5 minutes each",
          "Basic editing",
          "Royalty-free music",
          "Simple graphics",
        ],
        popular: false,
      },
      {
        name: "Standard",
        price: "$499",
        features: [
          "4 videos per month",
          "Up to 10 minutes each",
          "Advanced editing",
          "Custom intro/outro",
          "Motion graphics",
          "Sound design",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "$899",
        features: [
          "8 videos per month",
          "Up to 20 minutes each",
          "Professional editing",
          "Custom animations",
          "Advanced color grading",
          "Professional voiceover",
          "Comprehensive SEO optimization",
          "Distribution strategy",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "full",
    name: "Full Social Media Management",
    icon: Linkedin,
    plans: [
      {
        name: "Essential",
        price: "$999",
        features: [
          "2 platforms",
          "Content calendar",
          "Weekly posts",
          "Basic community management",
          "Monthly reporting",
        ],
        popular: false,
      },
      {
        name: "Business",
        price: "$1,999",
        features: [
          "4 platforms",
          "Content calendar",
          "Daily posts",
          "Active community management",
          "Weekly reporting",
          "Monthly strategy calls",
          "Paid advertising management",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$3,999",
        features: [
          "All major platforms",
          "Custom content strategy",
          "Multiple daily posts",
          "24/7 community management",
          "Real-time analytics",
          "Weekly strategy calls",
          "Advanced paid advertising",
          "Crisis management",
          "Influencer partnerships",
        ],
        popular: false,
      },
    ],
  },
]

// Dummy data for client growth
const clientGrowthData = [
  {
    name: "TechStart Inc.",
    platform: "Instagram",
    startFollowers: 5200,
    currentFollowers: 28500,
    growthPeriod: "6 months",
    engagementIncrease: "215%",
    image: "/placeholder.svg?height=100&width=100",
    chartData: [
      { month: "Jan", followers: 5200 },
      { month: "Feb", followers: 7800 },
      { month: "Mar", followers: 12400 },
      { month: "Apr", followers: 16900 },
      { month: "May", followers: 22300 },
      { month: "Jun", followers: 28500 },
    ],
  },
  {
    name: "FitLife Brands",
    platform: "TikTok",
    startFollowers: 10800,
    currentFollowers: 145000,
    growthPeriod: "8 months",
    engagementIncrease: "380%",
    image: "/placeholder.svg?height=100&width=100",
    chartData: [
      { month: "Jan", followers: 10800 },
      { month: "Feb", followers: 18500 },
      { month: "Mar", followers: 32000 },
      { month: "Apr", followers: 58000 },
      { month: "May", followers: 79000 },
      { month: "Jun", followers: 98000 },
      { month: "Jul", followers: 125000 },
      { month: "Aug", followers: 145000 },
    ],
  },
  {
    name: "EcoFriendly Co.",
    platform: "Instagram & TikTok",
    startFollowers: 3500,
    currentFollowers: 67000,
    growthPeriod: "12 months",
    engagementIncrease: "290%",
    image: "/placeholder.svg?height=100&width=100",
    chartData: [
      { month: "Jan", followers: 3500 },
      { month: "Feb", followers: 5200 },
      { month: "Mar", followers: 8900 },
      { month: "Apr", followers: 14500 },
      { month: "May", followers: 22000 },
      { month: "Jun", followers: 29500 },
      { month: "Jul", followers: 38000 },
      { month: "Aug", followers: 45000 },
      { month: "Sep", followers: 52000 },
      { month: "Oct", followers: 58000 },
      { month: "Nov", followers: 63000 },
      { month: "Dec", followers: 67000 },
    ],
  },
  {
    name: "Urban Fashion",
    platform: "Instagram & YouTube",
    startFollowers: 25000,
    currentFollowers: 189000,
    growthPeriod: "10 months",
    engagementIncrease: "245%",
    image: "/placeholder.svg?height=100&width=100",
    chartData: [
      { month: "Jan", followers: 25000 },
      { month: "Feb", followers: 38000 },
      { month: "Mar", followers: 52000 },
      { month: "Apr", followers: 78000 },
      { month: "May", followers: 95000 },
      { month: "Jun", followers: 115000 },
      { month: "Jul", followers: 135000 },
      { month: "Aug", followers: 155000 },
      { month: "Sep", followers: 172000 },
      { month: "Oct", followers: 189000 },
    ],
  },
]

// Dummy testimonials
const testimonials = [
  {
    quote:
      "NeonVerse transformed our social media presence completely. Our Instagram following grew by 5x in just 6 months, and our engagement rates are through the roof!",
    author: "Sarah Johnson",
    role: "Marketing Director, TechStart Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The short-form content strategy NeonVerse developed for us resulted in our first viral TikTok video with over 2 million views. Our account grew from 10k to 145k followers in record time.",
    author: "Michael Chen",
    role: "CEO, FitLife Brands",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with NeonVerse's full social media management team has been a game-changer. They handle everything while we focus on our business, and the results speak for themselves.",
    author: "Emma Rodriguez",
    role: "Founder, EcoFriendly Co.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The video editing team at NeonVerse is exceptional. The quality of our content has improved dramatically, and our audience retention metrics have never been better.",
    author: "David Kim",
    role: "Content Director, Urban Fashion",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function DashboardPage() {
  const [selectedClient, setSelectedClient] = useState(clientGrowthData[0])

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid-background"></div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Dashboard background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neon-green neon-text font-mono">
            Social Media Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Welcome to your dashboard! Explore our comprehensive social media services designed to elevate your brand's
            digital presence and drive meaningful engagement.
          </p>
        </motion.div>

        {/* Services Tabs */}
        <Tabs defaultValue="instagram" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-dark-card">
            {socialMediaServices.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-neon-green/20 data-[state=active]:text-neon-green"
              >
                <service.icon className="mr-2 h-4 w-4" />
                {service.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {socialMediaServices.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div className="grid md:grid-cols-3 gap-8">
                {service.plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`rounded-xl p-6 border ${
                      plan.popular
                        ? "border-neon-green neon-border bg-dark-card relative overflow-hidden"
                        : "border-gray-800 bg-dark-card/50"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-neon-green text-black text-center text-sm py-1 font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    <div className={`${plan.popular ? "pt-4" : ""}`}>
                      <h3 className="text-2xl font-bold mb-2 font-mono">{plan.name}</h3>
                      <div className="flex items-end mb-4">
                        <span className="text-4xl font-bold text-neon-green font-mono">{plan.price}</span>
                        <span className="text-gray-400 ml-1">/month</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                          >
                            <Check className="h-5 w-5 text-neon-green mr-2 shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-neon-green text-black hover:bg-neon-green-light font-mono"
                            : "bg-gray-800 text-white hover:bg-gray-700 font-mono"
                        }`}
                      >
                        Select Plan
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Client Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white font-mono">Client Success Stories</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-dark-card rounded-xl border border-neon-green/20 p-6">
              <h3 className="text-xl font-bold mb-4 font-mono">Follower Growth</h3>
              <div className="h-80">
                <LineChart data={selectedClient.chartData} xKey="month" yKey="followers" color="#39FF14" />
              </div>
            </div>

            <div className="bg-dark-card rounded-xl border border-neon-green/20 p-6">
              <h3 className="text-xl font-bold mb-4 font-mono">Client Results</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {clientGrowthData.map((client, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedClient.name === client.name
                        ? "bg-neon-green/20 border border-neon-green/50"
                        : "bg-black/50 border border-gray-800"
                    }`}
                    onClick={() => setSelectedClient(client)}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={client.image || "/placeholder.svg"}
                          alt={client.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{client.name}</h4>
                        <p className="text-xs text-gray-400">{client.platform}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-400">Growth</p>
                        <p className="text-neon-green font-bold">
                          {Math.round((client.currentFollowers / client.startFollowers - 1) * 100)}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Period</p>
                        <p className="text-white">{client.growthPeriod}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-black/30 rounded-lg p-4 border border-neon-green/10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <Image
                        src={selectedClient.image || "/placeholder.svg"}
                        alt={selectedClient.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{selectedClient.name}</h4>
                      <p className="text-sm text-gray-400">{selectedClient.platform}</p>
                    </div>
                  </div>
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30">
                    {selectedClient.growthPeriod}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-2">
                  <div>
                    <p className="text-xs text-gray-400">Starting Followers</p>
                    <p className="text-lg font-bold text-white">{selectedClient.startFollowers.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Current Followers</p>
                    <p className="text-lg font-bold text-neon-green">
                      {selectedClient.currentFollowers.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Engagement Increase</p>
                    <p className="text-lg font-bold text-white flex items-center">
                      {selectedClient.engagementIncrease}
                      <ArrowUp className="h-4 w-4 text-neon-green ml-1" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white font-mono">Client Testimonials</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="bg-dark-card rounded-xl p-6 border border-neon-green/20 hover:border-neon-green/50 transition-all"
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(57, 255, 20, 0.1)" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex text-neon-green">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white font-mono">Platform Performance</h2>

          <div className="bg-dark-card rounded-xl border border-neon-green/20 p-6">
            <h3 className="text-xl font-bold mb-6 font-mono">Engagement by Platform</h3>
            <div className="h-80">
              <BarChart
                data={[
                  { platform: "Instagram", engagement: 68 },
                  { platform: "TikTok", engagement: 82 },
                  { platform: "YouTube", engagement: 56 },
                  { platform: "Twitter", engagement: 42 },
                  { platform: "Facebook", engagement: 38 },
                  { platform: "LinkedIn", engagement: 45 },
                ]}
                xKey="platform"
                yKey="engagement"
                color="#39FF14"
              />
            </div>
            <p className="text-sm text-gray-400 mt-4 text-center">
              Average engagement rates (%) across different social media platforms based on our client data
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-dark-card rounded-xl border border-neon-green/20 p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white font-mono">Ready to Grow Your Social Media Presence?</h2>
          <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
            Our team of experts is ready to help you develop a customized social media strategy that drives real
            results. Schedule a consultation today to get started.
          </p>
          <Button className="bg-neon-green text-black hover:bg-neon-green-light font-mono">
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}
