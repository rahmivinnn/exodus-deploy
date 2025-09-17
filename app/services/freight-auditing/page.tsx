import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import Image from "next/image"

export default function FreightAuditingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Logistics Consulting & Freight Auditing</h1>
          <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto">
            Our proven theft prevention model will mitigate your theft problem to a complete stop.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">We specialize in Freight Theft Prevention</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Freight theft has increased over 1000% in the past 3 years! We at Exodus Logistix believe this to be
                  an enormous problem and many of you shippers out there will agree. Companies are losing hundreds of
                  thousands to millions of dollars on lost freight!
                </p>
                <p>
                  Our proven theft prevention model will mitigate your theft problem to a complete stop. Freight scams
                  are rampant and have taken many different forms. Our team has perfected learning every new and old
                  scam and has even helped the FBI catch scammers. We would love to help you!
                </p>
                <p>
                  Please contact us to set up a cost free consultation and let us help you protect your company from
                  freight theft immediately.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/freight-auditing-warehouse.jpg"
                alt="Freight Auditing"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Services Cards */}
          <div
            className="relative bg-cover bg-center rounded-lg p-8"
            style={{
              backgroundImage: "url('/logistics-warehouse-background.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Freight Auditing Card */}
              <Card className="bg-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">FREIGHT AUDITING</h3>
                  <p className="text-gray-600 mb-4">
                    Please send us your most recent 30-60 days of freight data and we will audit it within 24 hours! You
                  </p>
                  <p className="text-sm text-gray-500 mb-4">Exodus Logistix Inc</p>
                  <p className="text-sm text-gray-500 mb-6">916-842-7623</p>
                  <Button className="bg-teal-700 hover:bg-teal-800">Submit your request!</Button>
                </CardContent>
              </Card>

              {/* Template Card */}
              <Card className="bg-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">Template</h3>
                  <p className="text-gray-600 mb-6">
                    Please download this template to use for your freight audit. You may upload once complete by
                    clicking on "Click here to audit your freight rates"
                  </p>
                  <p className="text-sm text-gray-500 mb-6">Freight Audit Template (3)</p>
                  <Button className="bg-teal-700 hover:bg-teal-800 flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
