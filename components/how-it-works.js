import { Button } from "@/components/ui/button"
import { ArrowRight, Wallet, Brain, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Wallet,
    title: "Connect & Deposit",
    description: "Connect your wallet and deposit ckBTC or convert fiat directly in the app",
    step: "01",
  },
  {
    icon: Brain,
    title: "AI Optimization",
    description: "Our on-chain AI automatically allocates your funds across the highest-yield strategies",
    step: "02",
  },
  {
    icon: TrendingUp,
    title: "Earn & Compound",
    description: "Watch your Bitcoin grow with up to 15% APY, automatically compounded",
    step: "03",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start earning yield on your Bitcoin in just 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-blue-300 transform -translate-x-1/2 z-0" />
              )}

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
