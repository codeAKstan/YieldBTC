import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Shield, Smartphone, DollarSign, BarChart3, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Optimization",
    description:
      "On-chain AI model automatically allocates your ckBTC across lending, liquidity, and arbitrage for maximum yields.",
    highlight: "5-15% APY",
  },
  {
    icon: Shield,
    title: "Trustless Bitcoin Custody",
    description:
      "Your Bitcoin is held in ckBTC canisters, backed 1:1 by real Bitcoin. No custodians, no bridges, no risks.",
    highlight: "100% Secure",
  },
  {
    icon: DollarSign,
    title: "Ultra-Low Fees",
    description: "Leverage ICP's near-zero gas fees. Pay $0.0001 per transaction vs $5-50 on Ethereum.",
    highlight: "1000x Cheaper",
  },
  {
    icon: Smartphone,
    title: "One-Click Simplicity",
    description: "Stake ckBTC with a single click. No complex vault selection or manual strategy management required.",
    highlight: "Beginner Friendly",
  },
  {
    icon: BarChart3,
    title: "Real-Time Transparency",
    description:
      "Monitor your funds with live dashboard showing pool allocations, APYs, and risk metrics stored on-chain.",
    highlight: "Full Visibility",
  },
  {
    icon: Users,
    title: "Community Governance",
    description: "Earn YBTC tokens to vote on strategies and receive ckBTC rewards. No lockups, full liquidity.",
    highlight: "Your Voice Matters",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose BTC Yield?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built from the ground up to solve the biggest problems in DeFi yield farming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {feature.highlight}
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
