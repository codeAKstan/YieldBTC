import { Button } from "@/components/ui/button"
import { Bell, Settings, User } from "lucide-react"
import Link from "next/link"

export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">₿</span>
            </div>
            <span className="text-xl font-bold text-gray-900">BTC Yield</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/dashboard" className="text-orange-600 font-medium">
              Dashboard
            </Link>
            <Link href="/analytics" className="text-gray-600 hover:text-gray-900">
              Analytics
            </Link>
            <Link href="/governance" className="text-gray-600 hover:text-gray-900">
              Governance
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              0x1234...5678
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
