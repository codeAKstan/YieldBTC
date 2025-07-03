import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shield, AlertTriangle, TrendingDown, Activity } from "lucide-react"

const riskMetrics = [
  {
    label: "Portfolio Risk Score",
    value: 6.2,
    max: 10,
    status: "Medium",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    icon: AlertTriangle,
  },
  {
    label: "Volatility (30d)",
    value: 2.8,
    max: 10,
    status: "Low",
    color: "text-green-600",
    bgColor: "bg-green-100",
    icon: Activity,
  },
  {
    label: "Drawdown Risk",
    value: 3.1,
    max: 10,
    status: "Low",
    color: "text-green-600",
    bgColor: "bg-green-100",
    icon: TrendingDown,
  },
  {
    label: "Liquidity Risk",
    value: 1.5,
    max: 10,
    status: "Very Low",
    color: "text-green-600",
    bgColor: "bg-green-100",
    icon: Shield,
  },
]

const riskFactors = [
  { factor: "Smart Contract Risk", level: "Low", description: "Audited canisters with formal verification" },
  { factor: "Market Risk", level: "Medium", description: "Bitcoin price volatility affects returns" },
  { factor: "Liquidity Risk", level: "Low", description: "High liquidity across all strategies" },
  { factor: "Counterparty Risk", level: "Very Low", description: "Trustless protocols only" },
]

export default function RiskMetrics() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-600" />
          Risk Assessment
        </CardTitle>
        <CardDescription>Real-time risk analysis and monitoring</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Risk Scores */}
        <div className="space-y-4">
          {riskMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <metric.icon className={`w-4 h-4 ${metric.color}`} />
                  <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{metric.value}/10</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${metric.bgColor} ${metric.color} font-medium`}>
                    {metric.status}
                  </span>
                </div>
              </div>
              <Progress value={(metric.value / metric.max) * 100} className="h-2" />
            </div>
          ))}
        </div>

        {/* Risk Factors */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Risk Factors</h4>
          <div className="space-y-2">
            {riskFactors.map((risk, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">{risk.factor}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      risk.level === "Very Low"
                        ? "bg-green-100 text-green-800"
                        : risk.level === "Low"
                          ? "bg-green-100 text-green-800"
                          : risk.level === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                    }`}
                  >
                    {risk.level}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Summary */}
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="font-medium text-green-900">Overall Risk: Low</span>
          </div>
          <p className="text-sm text-green-800">
            Your portfolio maintains a conservative risk profile with strong diversification across audited protocols
            and trustless strategies.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
