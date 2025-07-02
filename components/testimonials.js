import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Chen",
    role: "Bitcoin Maximalist",
    content:
      "Finally, a way to earn yield on my Bitcoin without trusting centralized custodians. The AI optimization is incredible - I'm earning 13% APY consistently.",
    rating: 5,
    avatar: "AC",
  },
  {
    name: "Sarah Johnson",
    role: "DeFi Investor",
    content:
      "The gas fees on Ethereum were killing my returns. BTC Yield's $0.0001 fees mean I can actually profit from small amounts. Game changer!",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Miguel Rodriguez",
    role: "Crypto Trader",
    content:
      "The transparency is unmatched. I can see exactly where my Bitcoin is allocated in real-time. No black box strategies here.",
    rating: 5,
    avatar: "MR",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Bitcoin HODLers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of users earning passive income on their Bitcoin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
