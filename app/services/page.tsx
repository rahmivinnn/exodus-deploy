import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/warehouse-logistics-facility.jpg')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Comprehensive Logistics Solutions Tailored to Your Needs
          </h1>
          <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto">
            From Full Truckload to Warehousing, Exodus Logistix Delivers Excellence at Every Step.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Full Truckload */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-red-600 relative">
                <Image src="/full-truckload-service.jpg" alt="Full Truckload (FTL)" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Full Truckload (FTL)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Dedicated truck capacity for large shipments ensuring direct and efficient delivery.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Shared Truckload */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-blue-400 relative">
                <Image src="/shared-truckload-service.jpg" alt="Shared Truckload (STL)" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Shared Truckload (STL)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Cost-effective solution for shipments under 15 pallets and 30,000 lbs, combining multiple loads in one
                  truck.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Less Than Truckload */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-teal-600 relative">
                <Image src="/ltl-service.jpg" alt="Less Than Truckload (LTL)" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Less Than Truckload (LTL)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Ideal for smaller shipments, sharing truck space to optimize costs and efficiency.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Refrigerated Transportation */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-blue-600 relative">
                <Image
                  src="/refrigerated-transportation-service.jpg"
                  alt="Refrigerated Transportation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Refrigerated Transportation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Specialized equipment and monitoring for temperature-sensitive cargo, ensuring product integrity.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Dry Goods Transportation */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-orange-500 relative">
                <Image
                  src="/dry-goods-transportation.jpg"
                  alt="Dry Goods Transportation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Dry Goods Transportation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Secure and efficient delivery of non-perishable items across various industries.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Intermodal Solutions */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-600 relative">
                <Image src="/intermodal-solutions.jpg" alt="Intermodal Solutions" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Intermodal Solutions</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Combining truck and rail transport for flexible and cost-effective shipping options.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Warehousing & Cross-Docking */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-yellow-600 relative">
                <Image
                  src="/warehousing-cross-docking.jpg"
                  alt="Warehousing & Cross-Docking"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Warehousing & Cross-Docking</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Secure storage and efficient cross-docking services to streamline your supply chain.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Government Logistics */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-blue-800 relative">
                <Image src="/government-logistics.jpg" alt="Government Logistics" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Government Logistics</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Exodus Logistix and our partners offer specialized logistics services tailored to the unique needs of
                  government c...
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>
          </div>

          {/* Freight Theft Prevention Section */}
          <div className="bg-gray-100 rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Freight Theft Prevention</h3>
                <p className="text-gray-600 mb-4">We specialize in Freight Theft Prevention</p>
                <p className="text-gray-600 mb-6">
                  Freight theft has increased over 1000% in the past 3 years! We at Exodus Logistix believe this to be
                  an enormous problem and many of you shippers out there will agree. Companies are losing hundreds of
                  thousands to millions of dollars on lost freight!
                </p>
                <p className="text-gray-600 mb-6">
                  Please contact us to set up a cost free consultation and let us help you protect your company from
                  freight theft immediately.
                </p>
                <Button className="bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </div>
              <div className="relative">
                <Image
                  src="/freight-theft-prevention.jpg"
                  alt="Freight Theft Prevention"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Other Services Section */}
          <h2 className="text-3xl font-bold text-center mb-12">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Reverse Logistics */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-blue-500 relative">
                <Image src="/reverse-logistics.jpg" alt="Reverse Logistics" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Reverse Logistics</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Reverse logistics is a critical component of modern supply chain, focusing on the movement of goods
                  f...
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Hazmat Logistics */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-red-500 relative">
                <Image src="/hazmat-logistics.jpg" alt="Hazmat Logistics" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Hazmat Logistics</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our Hazmat Logistics Department is your trusted partner for safe and efficient transportation of
                  hazardous...
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Flatbed services */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-green-600 relative">
                <Image src="/flatbed-services.jpg" alt="Flatbed services" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Flatbed services</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We can help your open deck freight! We can transport your open deck fr in the continental 48 states.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            {/* Private Equity Logistics */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-blue-900 relative">
                <Image
                  src="/private-equity-logistics.jpg"
                  alt="Private Equity Logistics"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Private Equity Logistics</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Exodus Logistix offers a transformative approach to logistics solutions, particularly tailored for
                  private equit...
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
