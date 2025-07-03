import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

const insights = [
  {
    title: "Bitcoin Volatility Low",
    description: "BTC volatility at 30-day low, favorable for lending strategies",
    type: "positive",
    icon: CheckCircle,
    color: "text-green-600",
    badge: "Opportunity",
  },
  {
    title: "DeFi Yields Rising",
    description: "Average lending APY increased 2.3% across major protocols",
    type: "positive",
    icon: TrendingUp,
    color: "text-blue-600",
    badge: "Trending",
  },
  {
    title: "Arbitrage Opportunities",
    description: "Price spreads widening between exchanges, +18% potential",
    type: "neutral",
    icon: AlertTriangle,
    color: "text-orange-600",
    badge: "Monitor",
  },
]

const marketData = [
  { label: "BTC Price", value: "$60,245", change: "+2.1%", positive: true },
  { label: "Market Cap", value: "$1.19T", change: "+1.8%", positive: true },
  { label: "24h Volume", value: "$28.4B", change: "-5.2%", positive: false },
  { label: "Fear & Greed", value: "72", change: "Greed", positive: true },
]

export default function MarketInsights() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle>Market Insights</CardTitle>
        <CardDescription>AI-powered market analysis and opportunities</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Market Data */}
        <div className="grid grid-cols-2 gap-3">
          {marketData.map((data, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">{data.label}</div>
              <div className="font-semibold text-sm">{data.value}</div>
              <div className={`text-xs font-medium ${data.positive ? "text-green-600" : "text-red-600"}`}>
                {data.change}
              </div>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">AI Insights</h4>
          {insights.map((insight, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <div className="flex items-start gap-3">
                <insight.icon className={`w-4 h-4 mt-0.5 ${insight.color}`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{insight.title}</span>
                    <Badge variant="outline" className="text-xs">
                      {insight.badge}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-900 mb-2">Platform Health</div>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <div className="text-gray-600">Uptime</div>
              <div className="font-semibold text-green-600">99.98%</div>
            </div>
            <div>
              <div className="text-gray-600">Response Time</div>
              <div className="font-semibold text-blue-600">0.2s</div>
            </div>
            <div>
              <div className="text-gray-600">Active Strategies</div>
              <div className="font-semibold text-orange-600">12</div>
            </div>
            <div>
              <div className="text-gray-600">Success Rate</div>
              <div className="font-semibold text-purple-600">94.2%</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
