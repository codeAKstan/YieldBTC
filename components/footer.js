import { Button } from "@/components/ui/button"
import { Github, Twitter, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">₿</span>
              </div>
              <span className="text-xl font-bold">BTC Yield</span>
            </div>
            <p className="text-gray-400 text-sm">The first AI-powered Bitcoin yield farming platform built on ICP.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="hover:text-white">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/governance" className="hover:text-white">
                  Governance
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/audit" className="hover:text-white">
                  Audit Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 BTC Yield. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Built on Internet Computer Protocol (ICP)</p>
        </div>
      </div>
    </footer>
  )
}
