import DashboardHeader from "@/components/dashboard/dashboard-header"
import StakingCard from "@/components/dashboard/staking-card"
import PortfolioOverview from "@/components/dashboard/portfolio-overview"
import YieldStrategies from "@/components/dashboard/yield-strategies"
import RecentActivity from "@/components/dashboard/recent-activity"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <StakingCard />
            <YieldStrategies />
            <RecentActivity />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <PortfolioOverview />
          </div>
        </div>
      </div>
    </div>
  )
}
