"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface LineChartProps {
  data: { [key: string]: any }[]
  xKey: string
  yKey: string
  color: string
}

export function LineChart({ data, xKey, yKey, color }: LineChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Draw chart
    const padding = 40
    const chartWidth = rect.width - padding * 2
    const chartHeight = rect.height - padding * 2

    // Find min and max values
    const maxValue = Math.max(...data.map((d) => d[yKey])) * 1.1
    const minValue = 0

    // Draw axes
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, rect.height - padding)
    ctx.lineTo(rect.width - padding, rect.height - padding)
    ctx.stroke()

    // Draw grid lines
    ctx.strokeStyle = "#222"
    ctx.lineWidth = 0.5
    const gridLines = 5
    for (let i = 1; i <= gridLines; i++) {
      const y = padding + (chartHeight / gridLines) * i
      ctx.beginPath()
      ctx.moveTo(padding, rect.height - y)
      ctx.lineTo(rect.width - padding, rect.height - y)
      ctx.stroke()

      // Draw y-axis labels
      ctx.fillStyle = "#888"
      ctx.font = "10px Inter, sans-serif"
      ctx.textAlign = "right"
      const labelValue = Math.round((maxValue / gridLines) * (gridLines - i))
      ctx.fillText(labelValue.toLocaleString(), padding - 5, rect.height - y + 3)
    }

    // Draw x-axis labels
    ctx.fillStyle = "#888"
    ctx.font = "10px Inter, sans-serif"
    ctx.textAlign = "center"
    data.forEach((d, i) => {
      const x = padding + (chartWidth / (data.length - 1)) * i
      ctx.fillText(d[xKey], x, rect.height - padding + 15)
    })

    // Draw line
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.beginPath()
    data.forEach((d, i) => {
      const x = padding + (chartWidth / (data.length - 1)) * i
      const y = rect.height - padding - ((d[yKey] - minValue) / (maxValue - minValue)) * chartHeight
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw points
    data.forEach((d, i) => {
      const x = padding + (chartWidth / (data.length - 1)) * i
      const y = rect.height - padding - ((d[yKey] - minValue) / (maxValue - minValue)) * chartHeight
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = "#000"
      ctx.lineWidth = 1
      ctx.stroke()
    })

    // Draw area under the line
    ctx.beginPath()
    data.forEach((d, i) => {
      const x = padding + (chartWidth / (data.length - 1)) * i
      const y = rect.height - padding - ((d[yKey] - minValue) / (maxValue - minValue)) * chartHeight
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.lineTo(padding + chartWidth, rect.height - padding)
    ctx.lineTo(padding, rect.height - padding)
    ctx.closePath()
    const gradient = ctx.createLinearGradient(0, padding, 0, rect.height - padding)
    gradient.addColorStop(0, `${color}33`)
    gradient.addColorStop(1, `${color}00`)
    ctx.fillStyle = gradient
    ctx.fill()
  }, [data, xKey, yKey, color])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}

export function BarChart({ data, xKey, yKey, color }: LineChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Draw chart
    const padding = 40
    const chartWidth = rect.width - padding * 2
    const chartHeight = rect.height - padding * 2

    // Find max value
    const maxValue = Math.max(...data.map((d) => d[yKey])) * 1.1
    const barWidth = chartWidth / data.length - 10

    // Draw axes
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, rect.height - padding)
    ctx.lineTo(rect.width - padding, rect.height - padding)
    ctx.stroke()

    // Draw grid lines
    ctx.strokeStyle = "#222"
    ctx.lineWidth = 0.5
    const gridLines = 5
    for (let i = 1; i <= gridLines; i++) {
      const y = padding + (chartHeight / gridLines) * i
      ctx.beginPath()
      ctx.moveTo(padding, rect.height - y)
      ctx.lineTo(rect.width - padding, rect.height - y)
      ctx.stroke()

      // Draw y-axis labels
      ctx.fillStyle = "#888"
      ctx.font = "10px Inter, sans-serif"
      ctx.textAlign = "right"
      const labelValue = Math.round((maxValue / gridLines) * (gridLines - i))
      ctx.fillText(labelValue.toLocaleString(), padding - 5, rect.height - y + 3)
    }

    // Draw bars and x-axis labels
    data.forEach((d, i) => {
      const barHeight = (d[yKey] / maxValue) * chartHeight
      const x = padding + (chartWidth / data.length) * i + (chartWidth / data.length - barWidth) / 2
      const y = rect.height - padding - barHeight

      // Draw bar
      const gradient = ctx.createLinearGradient(0, y, 0, rect.height - padding)
      gradient.addColorStop(0, color)
      gradient.addColorStop(1, `${color}33`)
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0])
      ctx.fill()

      // Draw x-axis label
      ctx.fillStyle = "#888"
      ctx.font = "10px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(d[xKey], x + barWidth / 2, rect.height - padding + 15)

      // Draw value on top of bar
      ctx.fillStyle = "#fff"
      ctx.font = "10px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(d[yKey].toString(), x + barWidth / 2, y - 5)
    })
  }, [data, xKey, yKey, color])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}
