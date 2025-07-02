import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Vote, CheckCircle, Clock } from "lucide-react"

const stats = [
  {
    label: "Total YBTC Holders",
    value: "5,234",
    icon: Users,
    color: "text-blue-600",
  },
  {
    label: "Active Proposals",
    value: "3",
    icon: Clock,
    color: "text-orange-600",
  },
  {
    label: "Proposals Passed",
    value: "28",
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    label: "Avg Participation",
    value: "67%",
    icon: Vote,
    color: "text-purple-600",
  },
]

export default function GovernanceStats() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle>Governance Stats</CardTitle>
        <CardDescription>Platform governance overview</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <span className="text-sm font-medium text-gray-700">{stat.label}</span>
            </div>
            <span className="font-semibold text-gray-900">{stat.value}</span>
          </div>
        ))}

        <div className="pt-4 border-t border-gray-200">
          <div className="text-sm font-medium text-gray-900 mb-2">Recent Activity</div>
          <div className="space-y-2 text-xs text-gray-600">
            <div>• Proposal #31 created 2 hours ago</div>
            <div>• Proposal #30 passed with 78% approval</div>
            <div>• 234 new YBTC holders this week</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
