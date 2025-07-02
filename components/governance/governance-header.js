import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Vote, Plus, Users } from "lucide-react"

export default function GovernanceHeader() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Governance</h1>
            <div className="flex items-center gap-4">
              <Badge className="bg-blue-100 text-blue-800">
                <Users className="w-3 h-3 mr-1" />
                5,234 YBTC Holders
              </Badge>
              <span className="text-sm text-gray-500">3 Active Proposals</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Vote className="w-4 h-4 mr-2" />
              Vote History
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Proposal
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
