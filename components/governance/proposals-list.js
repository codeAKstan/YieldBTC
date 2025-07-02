import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"

const proposals = [
  {
    id: 1,
    title: "Increase Arbitrage Strategy Allocation to 25%",
    description:
      "Proposal to increase the maximum allocation to arbitrage strategies from 20% to 25% to capture higher yields during volatile market conditions.",
    status: "active",
    timeLeft: "5 days left",
    votesFor: 2340,
    votesAgainst: 890,
    totalVotes: 3230,
    quorum: 5000,
    author: "0x1234...5678",
    created: "2 days ago",
  },
  {
    id: 2,
    title: "Implement Emergency Pause Mechanism",
    description:
      "Add a community-controlled emergency pause feature that can halt all strategies in case of critical vulnerabilities or market crashes.",
    status: "active",
    timeLeft: "12 days left",
    votesFor: 1890,
    votesAgainst: 340,
    totalVotes: 2230,
    quorum: 5000,
    author: "0x9876...4321",
    created: "5 days ago",
  },
  {
    id: 3,
    title: "Reduce Platform Fees to 1.5%",
    description:
      "Lower the annual platform fee from 2% to 1.5% to remain competitive with other yield farming platforms.",
    status: "passed",
    votesFor: 4560,
    votesAgainst: 1240,
    totalVotes: 5800,
    quorum: 5000,
    author: "0x5555...7777",
    created: "1 week ago",
  },
]

const getStatusIcon = (status) => {
  switch (status) {
    case "active":
      return <Clock className="w-4 h-4" />
    case "passed":
      return <CheckCircle className="w-4 h-4" />
    case "failed":
      return <XCircle className="w-4 h-4" />
    default:
      return <AlertCircle className="w-4 h-4" />
  }
}

const getStatusColor = (status) => {
  switch (status) {
    case "active":
      return "bg-blue-100 text-blue-800"
    case "passed":
      return "bg-green-100 text-green-800"
    case "failed":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function ProposalsList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Active Proposals</h2>
        <Button variant="outline" size="sm">
          Filter
        </Button>
      </div>

      {proposals.map((proposal) => (
        <Card key={proposal.id} className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <CardTitle className="text-lg">{proposal.title}</CardTitle>
                  <Badge className={getStatusColor(proposal.status)}>
                    {getStatusIcon(proposal.status)}
                    <span className="ml-1 capitalize">{proposal.status}</span>
                  </Badge>
                </div>
                <CardDescription className="text-base leading-relaxed">{proposal.description}</CardDescription>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
              <span>By {proposal.author}</span>
              <span>•</span>
              <span>{proposal.created}</span>
              {proposal.status === "active" && (
                <>
                  <span>•</span>
                  <span className="text-orange-600 font-medium">{proposal.timeLeft}</span>
                </>
              )}
            </div>
          </CardHeader>

          <CardContent>
            {proposal.status === "active" && (
              <>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Voting Progress</span>
                    <span className="text-sm text-gray-500">
                      {proposal.totalVotes.toLocaleString()} / {proposal.quorum.toLocaleString()} votes
                    </span>
                  </div>
                  <Progress value={(proposal.totalVotes / proposal.quorum) * 100} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-800">For</span>
                      <span className="text-lg font-bold text-green-600">{proposal.votesFor.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-green-600 mt-1">
                      {((proposal.votesFor / proposal.totalVotes) * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-red-800">Against</span>
                      <span className="text-lg font-bold text-red-600">{proposal.votesAgainst.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-red-600 mt-1">
                      {((proposal.votesAgainst / proposal.totalVotes) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">Vote For</Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    Vote Against
                  </Button>
                </div>
              </>
            )}

            {proposal.status === "passed" && (
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-800 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">Proposal Passed</span>
                </div>
                <div className="text-sm text-green-700">
                  Final vote: {proposal.votesFor.toLocaleString()} for, {proposal.votesAgainst.toLocaleString()} against
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
