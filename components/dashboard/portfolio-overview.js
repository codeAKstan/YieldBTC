import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Percent, Clock } from "lucide-react"

const portfolioStats = [
  {
    label: "Total Staked",
    value: "2.45 ckBTC",
    usdValue: "$147,000",
    icon: DollarSign,
    change: "+5.2%",
    positive: true,
  },
  {
    label: "Current APY",
    value: "12.4%",
    icon: Percent,
    change: "+0.8%",
    positive: true,
  },
  {
    label: "Total Earned",
    value: "0.12 ckBTC",
    usdValue: "$7,200",
    icon: TrendingUp,
    change: "+$240",
    positive: true,
  },
  {
    label: "Time Staked",
    value: "45 days",
    icon: Clock,
  },
]

export default function PortfolioOverview() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle>Portfolio Overview</CardTitle>
        <CardDescription>Your Bitcoin yield farming performance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {portfolioStats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <stat.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{stat.value}</div>
                {stat.usdValue && <div className="text-sm text-gray-500">{stat.usdValue}</div>}
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            </div>
            {stat.change && (
              <div className={`text-sm font-medium ${stat.positive ? "text-green-600" : "text-red-600"}`}>
                {stat.change}
              </div>
            )}
          </div>
        ))}

        {/* Quick Actions */}
        <div className="pt-4 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
          <div className="space-y-2">
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="font-medium text-sm">Compound Rewards</div>
              <div className="text-xs text-gray-500">Reinvest earned ckBTC</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="font-medium text-sm">Claim Rewards</div>
              <div className="text-xs text-gray-500">Withdraw to wallet</div>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
