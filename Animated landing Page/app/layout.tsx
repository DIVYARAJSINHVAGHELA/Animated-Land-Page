import type React from "react"
import "@/app/globals.css"
import { Roboto_Mono, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata = {
  title: "NeonVerse - Digital Experiences in Neon",
  description: "Build futuristic, interactive, and responsive websites with our powerful platform.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.variable} ${inter.variable} font-sans bg-black text-neon-green`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
