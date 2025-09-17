import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/industrial-logistics-facility.jpg')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Tailored Logistics Solutions Across Industries
          </h1>
          <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto">
            Exodus Logistix delivers customized supply chain solutions to meet the unique demands of various sectors.
          </p>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="space-y-12">
            {/* Food & Beverage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <Image
                  src="/food-beverage-industry.jpg"
                  alt="Food & Beverage Industry"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Food & Beverage</h3>
                <p className="text-gray-600 mb-6">
                  We specialize in offering tailored logistics solutions designed to meet the unique demands of the food
                  and beverage industry. From sourcing to distribution, our services ensure seamless operations while
                  maintaining optimal temperature control and handling sensitive products with care.
                </p>
              </div>
            </div>

            {/* Automotive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-4">Automotive</h3>
                <p className="text-gray-600 mb-6">
                  Exodus specializes in streamlining supply chains, ensuring seamless coordination between manufacturers
                  and distribution networks for the automotive sector. With relentless focus on precision and
                  reliability, our team guarantees timely delivery of crucial components, enabling your business to
                  thrive in the fast-paced world of automotive energy.
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <Image
                  src="/automotive-industry.jpg"
                  alt="Automotive Industry"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Manufacturing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <Image
                  src="/manufacturing-industry.jpg"
                  alt="Manufacturing Industry"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Manufacturing</h3>
                <p className="text-gray-600 mb-6">
                  With a keen understanding of manufacturing intricacies, our team ensures the efficient flow of raw
                  materials and finished goods, optimizing production schedules and minimizing downtime. Through a blend
                  of advanced logistical strategies and a robust transportation network, we guarantee prompt and secure
                  delivery of essential components. Our unwavering commitment to precision, reliability, and tailored
                  solutions solidifies your manufacturing operations, empowering manufacturers seeking seamless
                  logistical support to drive their operations forward.
                </p>
              </div>
            </div>

            {/* Health Care */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-4">Health Care</h3>
                <p className="text-gray-600 mb-6">
                  Save lives and improve quality of care with a strong, resilient supply chain and medical logistics
                  strategy dedicated to delivering products when you need them most. In the healthcare industry,
                  precision is non-negotiable when it comes to the transportation and delivery of essential healthcare
                  products. Gain confidence in your most essential supply chain visibility. From vaccines and medical
                  equipment to pharmaceuticals and laboratory specimens, we understand the critical nature of healthcare
                  logistics, security protocols, good distribution practices (GDP) certifications,
                  temperature-controlled environments, and market-leading technology to help deliver shipments safely,
                  on time, and on budget.
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <Image
                  src="/healthcare-industry.jpg"
                  alt="Health Care Industry"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Reverse Logistics & Retail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <Image
                  src="/retail-logistics.jpg"
                  alt="Reverse Logistics & Retail"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Reverse Logistics & Retail</h3>
                <p className="text-gray-600 mb-6">
                  At Exodus Logistix, we specialize in providing seamless reverse logistics solutions for the retail
                  industry. Whether it's handling returns, managing excess inventory, or optimizing the flow of returned
                  products, our expertise ensures efficiency and cost-effectiveness. We understand the unique challenges
                  of the retail sector and are committed to delivering reliable, timely solutions that keep your
                  business running smoothly.
                </p>
              </div>
            </div>

            {/* Energy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-4">Energy</h3>
                <p className="text-gray-600 mb-6">
                  At the forefront of the energy sector, our company stands as a beacon of reliability and innovation in
                  logistics services. Specializing in the energy industry, we orchestrate seamless and efficient
                  transportation of critical components, ensuring timely delivery to power plants, renewable energy
                  projects, and distribution hubs. Our comprehensive logistical expertise and robust transportation
                  network tailored to meet the unique demands of the energy sector.
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <Image
                  src="/energy-industry.jpg"
                  alt="Energy Industry"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Private Equity Logistics Section */}
          <div className="mt-16 bg-gray-100 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <Image
                  src="/private-equity-business.jpg"
                  alt="Private Equity Logistics"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Private Equity Logistics</h3>
                <p className="text-gray-600 mb-6">
                  Exodus Logistix offers a transformative approach to logistics solutions, particularly tailored for
                  private equity firms seeking to optimize their portfolio companies' supply chains. Through a
                  meticulous analysis of each company's logistics network, Exodus Logistix adeptly identifies hidden
                  connections within the supply chain, enabling clients to unveil synergies and streamline
                  transportation processes. By leveraging advanced data analytics and industry expertise, Exodus
                  Logistix empowers clients to make informed decisions that enhance efficiency and reduce costs across
                  their portfolio. This strategic optimization not only drives operational excellence but also
                  significantly contributes to the bottom line of operations. With Exodus Logistix's innovative
                  solutions, private equity firms can navigate the complexities of supply chain management with
                  confidence, ultimately maximizing the value of their investments.
                </p>
                <Button className="bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Industry's Logistics?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3">
                Request a Quote
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
        </div>
      </section>
    </div>
  )
}
