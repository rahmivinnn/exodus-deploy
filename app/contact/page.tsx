import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Star } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Contact us</h1>
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
                    <SelectItem value="hazmat">Hazardous Materials</SelectItem>
                    <SelectItem value="private-equity">Private Equity Logistics</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm">
                    I agree to be contacted for quotation information and more.
                  </label>
                </div>
                <Button className="w-full bg-teal-700 hover:bg-teal-800">Submit</Button>
              </form>
            </div>
            <div className="bg-teal-700 text-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Better yet, see us in person!</h3>
              <p className="mb-6">
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
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full bg-green-100 flex items-center justify-center">
          <p className="text-gray-600">Interactive Map Placeholder</p>
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
                    src="/professional-woman-headshot.png"
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
                    src="/professional-man-headshot.png"
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
                    src="/professional-woman-headshot.png"
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
