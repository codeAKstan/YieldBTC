"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownLeft, Zap, Shield, TrendingUp } from "lucide-react"

const riskProfiles = [
  {
    id: "stable",
    name: "Stable",
    apy: "5-8%",
    risk: "Low",
    description: "Conservative lending strategies",
    color: "bg-green-100 text-green-800",
  },
  {
    id: "balanced",
    name: "Balanced",
    apy: "8-12%",
    risk: "Medium",
    description: "Mixed lending and liquidity",
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "aggressive",
    name: "Aggressive",
    apy: "12-15%",
    risk: "High",
    description: "Advanced arbitrage strategies",
    color: "bg-orange-100 text-orange-800",
  },
]

export default function StakingCard() {
  const [selectedProfile, setSelectedProfile] = useState("balanced")
  const [amount, setAmount] = useState("")

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          Stake ckBTC
        </CardTitle>
        <CardDescription>Earn up to 15% APY with AI-optimized yield strategies</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="stake" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="stake" className="flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4" />
              Stake
            </TabsTrigger>
            <TabsTrigger value="unstake" className="flex items-center gap-2">
              <ArrowDownLeft className="w-4 h-4" />
              Unstake
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stake" className="space-y-6">
            {/* Amount Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Amount</label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-lg h-12 pr-16"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-500">
                  ckBTC
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Balance: 0.5 ckBTC</span>
                <button className="text-orange-600 hover:text-orange-700 font-medium">Max</button>
              </div>
            </div>

            {/* Risk Profiles */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Risk Profile</label>
              <div className="grid grid-cols-1 gap-3">
                {riskProfiles.map((profile) => (
                  <div
                    key={profile.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedProfile === profile.id
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedProfile(profile.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{profile.name}</span>
                            <Badge className={profile.color}>{profile.risk} Risk</Badge>
                          </div>
                          <span className="text-sm text-gray-600">{profile.description}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-lg">{profile.apy}</div>
                        <div className="text-sm text-gray-500">APY</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Trustless custody with 1:1 Bitcoin backing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span>AI-optimized allocation for maximum yields</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-orange-600" />
                <span>Ultra-low fees: $0.0001 per transaction</span>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white h-12 text-lg font-semibold">
              Stake ckBTC
            </Button>
          </TabsContent>

          <TabsContent value="unstake" className="space-y-6">
            <div className="text-center py-8 text-gray-500">
              <ArrowDownLeft className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>You don't have any staked ckBTC yet.</p>
              <p className="text-sm">Start staking to see your positions here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
