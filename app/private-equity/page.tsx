import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function PrivateEquityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/private-equity-logistics-bg.jpg')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Private Equity Logistics</h1>
          <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto">
            Exodus Logistix offers a transformative approach to logistics solutions, particularly tailored for private
            equity firms seeking to optimize their portfolio companies' supply chains.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
              Find out More
            </Button>
          </div>
        </div>
      </section>

      {/* Supply Chain Connections Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Supply Chain Connections</h2>
              <p className="text-gray-600 mb-6">
                Exodus Logistix offers a transformative approach to logistics solutions, particularly tailored for
                private equity firms seeking to optimize their portfolio companies' supply chains. Through a meticulous
                analysis of each company's logistics network, Exodus Logistix adeptly identifies hidden connections
                within the supply chain, enabling clients to unveil synergies and streamline transportation processes.
                By leveraging advanced data analytics and industry expertise, Exodus Logistix empowers clients to make
                informed decisions that enhance efficiency and reduce costs across their portfolio. This strategic
                optimization not only drives operational excellence but also significantly contributes to the bottom
                line of operations. With Exodus Logistix's innovative solutions, private equity firms can navigate the
                complexities of supply chain management with confidence, ultimately maximizing the value of their
                investments.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/supply-chain-connections.jpg"
                alt="Supply Chain Connections"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* High-yield investing section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/high-yield-investing.jpg"
                alt="High-yield investing"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">High-yield investing starts with your supply chain.</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">In-depth industry relationships</h3>
                  <p className="text-gray-600">
                    With a far-reaching logistics network spanning across the globe, we capitalize on longstanding
                    relationships with carriers to consolidate shipment volumes, resulting in substantial cost savings
                    for your enterprise.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Innovative logistics technology</h3>
                  <p className="text-gray-600">
                    Data-driven operations underscore our approach. Our state-of-the-art technology transforms extensive
                    insights into freight movement within supply chains, empowering businesses to continually refine and
                    enhance their logistics strategies.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tailored Account Support.</h3>
                  <p className="text-gray-600">
                    Comprising seasoned industry professionals, our private equity logistics teams provide
                    round-the-clock assistance, offering personalized account management to guarantee that your business
                    attains targeted margins within specified timeframes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dedicated account expertise</h3>
                  <p className="text-gray-600">
                    Comprising seasoned industry professionals, our private equity logistics teams provide
                    round-the-clock assistance, offering personalized account management to guarantee that your business
                    attains targeted margins within specified timeframes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">The value-creation lever for transportation</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3">
              Call Us!
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-800 px-8 py-3 bg-transparent"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
