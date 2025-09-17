import { FreightRateCalculator } from "@/components/freight-rate-calculator"

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">UK Freight Rate Calculator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant freight quotes for your UK domestic road haulage needs. Calculate rates for Van, Reefer, and
            Flatbed transportation with real-time market data.
          </p>
        </div>
        <FreightRateCalculator />
      </div>
    </div>
  )
}
