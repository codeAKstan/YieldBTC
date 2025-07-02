import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, TrendingUp, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-blue-100/20" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            AI-Powered Bitcoin Yield Farming on ICP
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Earn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">15% APY</span>
            <br />
            on Your Bitcoin
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The first AI-optimized yield farming platform built natively for Bitcoin. Stake ckBTC with one click, earn
            maximum yields with zero gas fees.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Trustless Custody</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">$0.0001 Fees</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium">AI Optimized</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Earning Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50 bg-transparent"
            >
              View Live Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-sm text-gray-500">
            <p className="mb-4">Trusted by Bitcoin HODLers worldwide</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">$6M+</div>
              <div className="w-px h-6 bg-gray-300" />
              <div className="text-2xl font-bold">10K+</div>
              <div className="w-px h-6 bg-gray-300" />
              <div className="text-2xl font-bold">100%</div>
            </div>
            <div className="flex justify-center items-center gap-8 text-xs mt-2">
              <div>Total Value Locked</div>
              <div>Active Users</div>
              <div>Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
