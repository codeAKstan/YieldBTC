"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const data = [
  { date: "Jan", value: 100, apy: 8.2 },
  { date: "Feb", value: 108, apy: 9.1 },
  { date: "Mar", value: 117, apy: 10.5 },
  { date: "Apr", value: 125, apy: 11.2 },
  { date: "May", value: 134, apy: 12.1 },
  { date: "Jun", value: 142, apy: 12.4 },
]

export default function PerformanceChart() {
  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle>Portfolio Performance</CardTitle>
        <CardDescription>Your Bitcoin yield farming returns over time</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Custom SVG Chart */}
        <div className="h-[300px] w-full bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-6 mb-6">
          <svg width="100%" height="100%" viewBox="0 0 600 240" className="overflow-visible">
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="50"
                y1={50 + i * 40}
                x2="550"
                y2={50 + i * 40}
                stroke="#e5e7eb"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}

            {/* Chart area */}
            <path
              d={`M 50 ${200 - ((data[0].value - minValue) / (maxValue - minValue)) * 150} ${data
                .map((d, i) => `L ${50 + i * 100} ${200 - ((d.value - minValue) / (maxValue - minValue)) * 150}`)
                .join(" ")} L 550 200 L 50 200 Z`}
              fill="url(#areaGradient)"
            />

            {/* Chart line */}
            <path
              d={`M 50 ${200 - ((data[0].value - minValue) / (maxValue - minValue)) * 150} ${data
                .map((d, i) => `L ${50 + i * 100} ${200 - ((d.value - minValue) / (maxValue - minValue)) * 150}`)
                .join(" ")}`}
              fill="none"
              stroke="#f97316"
              strokeWidth="3"
            />

            {/* Data points */}
            {data.map((d, i) => (
              <circle
                key={i}
                cx={50 + i * 100}
                cy={200 - ((d.value - minValue) / (maxValue - minValue)) * 150}
                r="4"
                fill="#f97316"
                stroke="white"
                strokeWidth="2"
              />
            ))}

            {/* X-axis labels */}
            {data.map((d, i) => (
              <text key={i} x={50 + i * 100} y={230} textAnchor="middle" fontSize="12" fill="#6b7280">
                {d.date}
              </text>
            ))}

            {/* Y-axis labels */}
            {[100, 110, 120, 130, 140].map((value, i) => (
              <text key={i} x="40" y={205 - i * 37.5} textAnchor="end" fontSize="12" fill="#6b7280">
                {value}
              </text>
            ))}
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <div className="text-2xl font-bold text-green-600">+42%</div>
            </div>
            <div className="text-sm text-gray-500">Total Return</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <div className="text-2xl font-bold text-blue-600">12.4%</div>
            </div>
            <div className="text-sm text-gray-500">Current APY</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <div className="text-2xl font-bold text-orange-600">0.42</div>
            </div>
            <div className="text-sm text-gray-500">Sharpe Ratio</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
