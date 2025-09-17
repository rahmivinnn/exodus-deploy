import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function HazmatPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">hazardous materials transportation</h1>
          <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto">
            Our Hazmat Logistics Department is your trusted partner for safe and efficient transportation of hazardous
            materials.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">hazardous materials transportation</h2>
                <p className="text-gray-600 mb-6">
                  Our Hazmat Logistics Department is your trusted partner for safe and efficient transportation of
                  hazardous materials. With a deep understanding of complex regulations and industry best practices, we
                  provide comprehensive solutions tailored to your specific needs. From regulatory compliance to risk
                  mitigation, our team is dedicated to ensuring the safe and timely delivery of your hazardous
                  shipments.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/hazmat-truck-transportation.jpg"
                  alt="Hazmat Transportation Truck"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pharmaceuticals */}
            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image src="/pharmaceutical-transportation.jpg" alt="Pharmaceuticals" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Pharmaceuticals</h3>
                <p className="text-gray-600 mb-6">
                  Exodus Logistix is committed to providing exceptional pharmaceutical transportation services. Our
                  expertise in handling temperature-sensitive and time-critical shipments ensures that your valuable
                  products reach their destination intact and on time. With our state-of-the-art facilities, advanced
                  tracking systems, and experienced team, we prioritize the safety and integrity of your pharmaceutical
                  cargo.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Get a Quote!</Button>
              </CardContent>
            </Card>

            {/* Hazardous Waste */}
            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image src="/hazardous-waste-disposal.jpg" alt="Hazardous Waste" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Hazardous Waste</h3>
                <p className="text-gray-600 mb-6">
                  Exodus Logistix is your reliable partner for safe and compliant hazardous waste removal. With our
                  expertise in handling hazardous materials and strict adherence to environmental regulations, we
                  provide efficient and responsible solutions for both private and government sectors. From proper
                  packaging and transportation to secure disposal, trust Exodus Logistix to ensure the safe and
                  environmentally friendly removal of your hazardous waste.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Get a Quote!</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
