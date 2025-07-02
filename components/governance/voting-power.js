import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Vote, Plus, TrendingUp } from "lucide-react"

export default function VotingPower() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Vote className="w-5 h-5 text-blue-600" />
          Your Voting Power
        </CardTitle>
        <CardDescription>Stake YBTC to participate in governance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
          <div className="text-3xl font-bold text-gray-900 mb-2">1,250</div>
          <div className="text-sm text-gray-600 mb-4">YBTC Voting Power</div>
          <Badge className="bg-blue-100 text-blue-800">
            <TrendingUp className="w-3 h-3 mr-1" />
            Top 15% Voter
          </Badge>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">Staked YBTC</span>
            <span className="font-semibold">1,250 YBTC</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">Voting Weight</span>
            <span className="font-semibold">2.5%</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">Proposals Voted</span>
            <span className="font-semibold">12/15</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Stake More YBTC
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            Delegate Voting Power
          </Button>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-sm font-medium text-blue-900 mb-1">Governance Rewards</div>
          <div className="text-xs text-blue-800">Earn 0.1% of platform fees distributed monthly to active voters</div>
          <div className="text-sm font-semibold text-blue-600 mt-2">Next reward: 0.05 ckBTC (~$3,000)</div>
        </div>
      </CardContent>
    </Card>
  )
}
