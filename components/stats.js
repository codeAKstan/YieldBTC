"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Users, DollarSign, Zap } from "lucide-react"

const stats = [
  {
    icon: DollarSign,
    label: "Total Value Locked",
    value: 6000000,
    prefix: "$",
    suffix: "M",
    color: "text-green-600",
  },
  {
    icon: TrendingUp,
    label: "Average APY",
    value: 12.5,
    suffix: "%",
    color: "text-orange-600",
  },
  {
    icon: Users,
    label: "Active Users",
    value: 10000,
    suffix: "+",
    color: "text-blue-600",
  },
  {
    icon: Zap,
    label: "Gas Fees Saved",
    value: 250000,
    prefix: "$",
    suffix: "K",
    color: "text-purple-600",
  },
]

function AnimatedNumber({ value, duration = 2000 }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setDisplayValue(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return displayValue
}

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.prefix}
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
