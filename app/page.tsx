import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Star, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/truck-driving-on-highway-bridge-with-mountains-in-.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Powering Logistics with <br />
            <span className="text-green-400">Precision</span> and Trust
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto">
            End-to-end freight brokerage and carrier services tailored for your supply chain success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
              Get Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/red-truck-loading-containers-at-warehouse.jpg"
                  alt="Truck Load & Less Than Truckload"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Truck Load & Less Than Truckload</h3>
                <p className="text-sm text-gray-600 mb-4">
                  For shipments that require dedicated truck capacity, ensuring direct and efficient delivery for your
                  large-scale logistics needs.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image src="/multiple-white-trucks-in-fleet-formation.jpg" alt="Shared Truckload Program" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Shared Truckload Program</h3>
                <p className="text-sm text-gray-600 mb-4">
                  The ideal solution for shipments under 15 pallets and 30,000 lbs, combining multiple loads in one
                  truck for cost efficiency.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/modern-truck-on-highway-for-dry-goods-transportati.jpg"
                  alt="Dry & Refrigerated Transportation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Dry & Refrigerated Transportation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Comprehensive solutions for both dry goods and temperature-controlled shipments with specialized
                  equipment and monitoring.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image src="/military-or-government-freight-transportation-vehi.jpg" alt="Freight Solutions" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Freight Solutions</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Customized logistics solutions tailored to your specific industry needs, ensuring optimal supply chain
                  performance.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-4 border-orange-200">
                <Image
                  src="/truck-silhouette-on-highway-at-golden-sunset.jpg"
                  alt="Truck on highway at sunset"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-gray-600 mb-8">
                At Exodus Logistix, we don't just move freight — we move your business forward.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fast Time Tracking</h3>
                    <p className="text-gray-600 text-sm">Monitor your shipments — anytime, anywhere.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Nationwide Network</h3>
                    <p className="text-gray-600 text-sm">Comprehensive coverage across all 50 states.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Dedicated Fleet Services</h3>
                    <p className="text-gray-600 text-sm">Reliable, scalable, and customized trucking solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fast & Reliable Delivery</h3>
                    <p className="text-gray-600 text-sm">We meet your deadlines without compromising safety.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image src="/food-and-beverage-warehouse-with-products.jpg" alt="Food & Beverage" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Food & Beverage</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We specialize in offering tailored logistics solutions designed to meet the unique demands of the food
                  and beverage industry.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/retail-logistics-warehouse-with-packages-and-boxes.jpg"
                  alt="Personal Logistics & Retail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Personal Logistics & Retail</h3>
                <p className="text-sm text-gray-600 mb-4">
                  At Exodus Logistix, we specialize in providing comprehensive logistics solutions for the retail
                  industry.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image src="/manufacturing-facility-with-industrial-equipment.jpg" alt="Manufacturing" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Manufacturing</h3>
                <p className="text-sm text-gray-600 mb-4">
                  With a deep understanding of manufacturing intricacies, our team ensures the efficient flow of raw
                  materials.
                </p>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Learn More</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
            >
              View More
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Send Us A Message</h3>
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Message" rows={4} />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Type of service needed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ftl">Full Truckload</SelectItem>
                    <SelectItem value="ltl">Less Than Truckload</SelectItem>
                    <SelectItem value="refrigerated">Refrigerated</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm">
                    I agree to be contacted for quotation information and more.
                  </label>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Submit</Button>
              </form>
            </div>
            <div className="bg-green-600 text-white p-8 rounded-lg relative">
              <div className="absolute top-4 right-4">
                <Image
                  src="/professional-woman-customer-service-representative.jpg"
                  alt="Customer Service Representative"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-6">Better yet, see us in person!</h3>
              <p className="mb-6 pr-32">
                We love our customers, so feel free to visit us in Roseville to discuss your logistics needs and
                discover how Exodus Logistix can help.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p>915 Highland Pointe Drive, Roseville, California 95678, United States</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <p>(918) 303-5777</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <p>loads@exoduslogistix.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96">
        <div className="w-full h-full">
          <iframe
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?title=false&access_token=pk.eyJ1IjoidmluYTk4IiwiYSI6ImNtN3I3eDF6ZTB2OW0yam9kdzFxdndhdTkifQ.HNqbNgBUAoBPYmoAMISdaw&zoomwheel=false#9/38.7/-121.3`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">See what our customers are saying!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/avatar-1.png"
                    alt="Diana Marynovych"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Diana Marynovych</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "Aleks and his team have been a great team to work with. They have been very responsive to our needs
                  and have been able to handle some tricky loads. They are always willing to go the extra mile."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/professional-man-headshot-smiling.jpg"
                    alt="Diana Marynovych"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Diana Marynovych</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "They pick up loads from us on a great schedule and they are always on time. They are great to work
                  with and I would recommend them to anyone looking for quality service from start to finish."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/avatar-1.png"
                    alt="Diana Marynovych"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Diana Marynovych</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "Aleks and his team have been a great team to work with. They have been very responsive to our needs
                  and have been able to handle some tricky loads. They are always willing to go the extra mile."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
