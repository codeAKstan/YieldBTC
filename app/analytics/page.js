import AnalyticsHeader from "@/components/analytics/analytics-header"
import PerformanceChart from "@/components/analytics/performance-chart"
import StrategyBreakdown from "@/components/analytics/strategy-breakdown"
import MarketInsights from "@/components/analytics/market-insights"
import RiskMetrics from "@/components/analytics/risk-metrics"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnalyticsHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Charts */}
          <div className="lg:col-span-2 space-y-8">
            <PerformanceChart />
            <StrategyBreakdown />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <MarketInsights />
            <RiskMetrics />
          </div>
        </div>
      </div>
    </div>
  )
}
