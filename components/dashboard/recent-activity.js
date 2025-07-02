import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownLeft, RefreshCw, DollarSign } from "lucide-react"

const activities = [
  {
    type: "stake",
    amount: "0.5 ckBTC",
    usdAmount: "$30,000",
    timestamp: "2 hours ago",
    status: "completed",
    icon: ArrowUpRight,
    color: "text-green-600",
  },
  {
    type: "reward",
    amount: "0.002 ckBTC",
    usdAmount: "$120",
    timestamp: "6 hours ago",
    status: "completed",
    icon: DollarSign,
    color: "text-blue-600",
  },
  {
    type: "rebalance",
    amount: "Portfolio rebalanced",
    timestamp: "12 hours ago",
    status: "completed",
    icon: RefreshCw,
    color: "text-purple-600",
  },
  {
    type: "unstake",
    amount: "0.1 ckBTC",
    usdAmount: "$6,000",
    timestamp: "1 day ago",
    status: "completed",
    icon: ArrowDownLeft,
    color: "text-orange-600",
  },
  {
    type: "reward",
    amount: "0.0015 ckBTC",
    usdAmount: "$90",
    timestamp: "1 day ago",
    status: "completed",
    icon: DollarSign,
    color: "text-blue-600",
  },
]

const getActivityLabel = (type) => {
  switch (type) {
    case "stake":
      return "Staked"
    case "unstake":
      return "Unstaked"
    case "reward":
      return "Reward Earned"
    case "rebalance":
      return "AI Rebalance"
    default:
      return "Activity"
  }
}

export default function RecentActivity() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest transactions and rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${activity.color}`}
                >
                  <activity.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{getActivityLabel(activity.type)}</div>
                  <div className="text-sm text-gray-500">
                    {activity.amount}
                    {activity.usdAmount && <span className="ml-2 text-gray-400">({activity.usdAmount})</span>}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="text-xs">
                  {activity.status}
                </Badge>
                <div className="text-xs text-gray-500 mt-1">{activity.timestamp}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">View All Activity</button>
        </div>
      </CardContent>
    </Card>
  )
}
