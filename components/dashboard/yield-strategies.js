import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, DollarSign, BarChart3 } from "lucide-react"

const strategies = [
  {
    name: "Lending Protocols",
    allocation: 45,
    apy: "8.2%",
    risk: "Low",
    description: "Lending to overcollateralized borrowers",
    icon: DollarSign,
    color: "bg-green-100 text-green-800",
  },
  {
    name: "Liquidity Provision",
    allocation: 35,
    apy: "14.1%",
    risk: "Medium",
    description: "Providing liquidity to DEX pools",
    icon: BarChart3,
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Arbitrage Trading",
    allocation: 20,
    apy: "18.5%",
    risk: "High",
    description: "Cross-platform price arbitrage",
    icon: TrendingUp,
    color: "bg-orange-100 text-orange-800",
  },
]

export default function YieldStrategies() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-600" />
          AI Strategy Allocation
        </CardTitle>
        <CardDescription>Real-time optimization based on market conditions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Performance */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Weighted Average APY</span>
            <span className="text-2xl font-bold text-purple-600">12.4%</span>
          </div>
          <div className="text-xs text-gray-600">Last updated: 2 minutes ago • Next rebalance: 8 minutes</div>
        </div>

        {/* Strategy Breakdown */}
        <div className="space-y-4">
          {strategies.map((strategy, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <strategy.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{strategy.name}</div>
                    <div className="text-sm text-gray-500">{strategy.description}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-lg">{strategy.apy}</div>
                  <Badge className={strategy.color}>{strategy.risk}</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Allocation</span>
                  <span className="font-medium">{strategy.allocation}%</span>
                </div>
                <Progress value={strategy.allocation} className="h-2" />
              </div>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Brain className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <div className="font-medium text-blue-900 mb-1">AI Insight</div>
              <div className="text-sm text-blue-800">
                Market volatility is low. The AI increased lending allocation by 5% to optimize for stable returns while
                maintaining your risk profile.
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
