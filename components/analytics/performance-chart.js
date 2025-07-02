"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { date: "Jan", value: 100, apy: 8.2 },
  { date: "Feb", value: 108, apy: 9.1 },
  { date: "Mar", value: 117, apy: 10.5 },
  { date: "Apr", value: 125, apy: 11.2 },
  { date: "May", value: 134, apy: 12.1 },
  { date: "Jun", value: 142, apy: 12.4 },
]

const chartConfig = {
  value: {
    label: "Portfolio Value",
    color: "hsl(var(--chart-1))",
  },
}

export default function PerformanceChart() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle>Portfolio Performance</CardTitle>
        <CardDescription>Your Bitcoin yield farming returns over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#f97316"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">+42%</div>
            <div className="text-sm text-gray-500">Total Return</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">12.4%</div>
            <div className="text-sm text-gray-500">Current APY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">0.42</div>
            <div className="text-sm text-gray-500">Sharpe Ratio</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
