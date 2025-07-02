import GovernanceHeader from "@/components/governance/governance-header"
import ProposalsList from "@/components/governance/proposals-list"
import VotingPower from "@/components/governance/voting-power"
import GovernanceStats from "@/components/governance/governance-stats"

export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <GovernanceHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ProposalsList />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <VotingPower />
            <GovernanceStats />
          </div>
        </div>
      </div>
    </div>
  )
}
