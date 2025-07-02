import Hero from "@/components/hero"
import Features from "@/components/features"
import Stats from "@/components/stats"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  )
}
