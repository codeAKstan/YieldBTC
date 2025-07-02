import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Download, RefreshCw } from "lucide-react"

export default function AnalyticsHeader() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
            <div className="flex items-center gap-4">
              <Badge className="bg-green-100 text-green-800">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12.4% This Month
              </Badge>
              <span className="text-sm text-gray-500">Last updated: 2 minutes ago</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
