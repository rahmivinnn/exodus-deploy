import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AllServicesPage() {
  const services = [
    {
      title: "Refrigerated Transportation",
      description: "Temperature-controlled logistics for sensitive cargo",
      image: "/refrigerated-transportation-service.jpg",
      href: "/services/refrigerated",
    },
    {
      title: "Dry Goods Transportation",
      description: "Reliable delivery of non-perishable items",
      image: "/dry-goods-transportation.jpg",
      href: "/services/dry-goods",
    },
    {
      title: "Shared Truck-Load",
      description: "Cost-effective solution for shipments under 15 pallets",
      image: "/shared-truckload-service.jpg",
      href: "/services/shared-truckload",
    },
    {
      title: "Flatbed Services",
      description: "Open deck freight transportation solutions",
      image: "/flatbed-transportation.jpg",
      href: "/services/flatbed",
    },
    {
      title: "Government Solutions",
      description: "Specialized logistics services for government clients",
      image: "/government-logistics.jpg",
      href: "/services/government",
    },
    {
      title: "Join Our Network",
      description: "Partner with Exodus Logistix as a carrier",
      image: "/carrier-network.jpg",
      href: "/carriers",
    },
    {
      title: "Technology",
      description: "Advanced logistics technology and tracking systems",
      image: "/logistics-technology.jpg",
      href: "/technology",
    },
    {
      title: "Our Stories & Blog",
      description: "Industry insights and company updates",
      image: "/logistics-blog.jpg",
      href: "/blog",
    },
    {
      title: "Contact Us",
      description: "Get in touch with our logistics experts",
      image: "/contact-logistics.jpg",
      href: "/contact",
    },
    {
      title: "Full Truckload (FTL)",
      description: "Dedicated truck capacity for large shipments",
      image: "/full-truckload-service.jpg",
      href: "/services/full-truckload",
    },
    {
      title: "Less Than Truckload (LTL)",
      description: "Ideal for smaller shipments, sharing space",
      image: "/ltl-service.jpg",
      href: "/services/ltl",
    },
    {
      title: "Intermodal Solutions",
      description: "Combined truck and rail transport for flexibility",
      image: "/intermodal-solutions.jpg",
      href: "/services/intermodal",
    },
    {
      title: "Warehousing & Cross-Docking",
      description: "Storage and efficient cross-docking services",
      image: "/warehousing-cross-docking.jpg",
      href: "/services/warehousing",
    },
    {
      title: "Hazmat Logistics",
      description: "Safe transportation of hazardous materials",
      image: "/hazmat-truck-transportation.jpg",
      href: "/services/hazmat",
    },
    {
      title: "Freight Auditing",
      description: "Logistics consulting and freight theft prevention",
      image: "/freight-auditing-warehouse.jpg",
      href: "/services/freight-auditing",
    },
    {
      title: "Private Equity Logistics",
      description: "Supply chain optimization for private equity firms",
      image: "/private-equity-business.jpg",
      href: "/private-equity",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-800 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Logistics Solutions</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore our comprehensive range of transportation and logistics services designed to meet every supply chain
            need.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <Link href={service.href}>
                    <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white">Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our logistics experts today to discuss your transportation needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-3">Get a Quote</Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-700 px-8 py-3 bg-transparent"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
