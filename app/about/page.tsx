import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-teal-500 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-green-400 to-teal-400 relative">
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
              <Image src="/white-truck-side-view.png" alt="Truck" width={200} height={100} className="opacity-80" />
            </div>
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
              <Image
                src="/white-truck-side-view.png"
                alt="Truck"
                width={200}
                height={100}
                className="opacity-80 scale-x-[-1]"
              />
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Who We Are</h1>
          <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto">
            Exodus Logistix is a full-service logistics company driven by precision, powered by people.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a vision to transform logistics into a seamless and customer-centric experience, Exodus
                  Logistix began as a small, determined team with a passion for delivering excellence. Over the years,
                  we've grown into a nationwide logistics provider known for our reliability, innovation, and personal
                  approach to every shipment. We understand that behind every delivery is a business that counts on us —
                  and we take that responsibility seriously. With deep commitment to communication, precision, and
                  partnership, we've built long-term relationships with clients across a wide range of industries.
                </p>
                <p>
                  Our journey continues as we invest in new technologies, expand our fleet, and enhance our services.
                  Our continued success is driven by a dedicated team and a relentless focus on improvement. Every mile
                  we cover reflects our promise to deliver more than freight — we deliver trust.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/desert-highway-truck.jpg"
                alt="Truck on desert highway"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/highway-truck-sunset.jpg"
                alt="Truck on highway at sunset"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mission:</h3>
                  <p className="text-gray-600">
                    To provide dependable, efficient, and customized logistics solutions that drive success for our
                    clients. We are committed to delivering every shipment with care, speed, and transparency while
                    upholding the highest standards of customer service and operational excellence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Vision:</h3>
                  <p className="text-gray-600">
                    To be the most trusted and innovative logistics partner in the nation — recognized for our
                    integrity, technology-driven services, and unwavering dedication to connecting businesses with the
                    future where logistics is smarter, faster, and more responsive to the unique needs of every client.
                    At Exodus, we're not just moving goods — we're moving industries forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet The Exodus Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3">
                <Image
                  src="/ceo-professional-headshot.jpg"
                  alt="Aleks Levko, CEO"
                  width={200}
                  height={250}
                  className="rounded-lg w-full"
                />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-xl font-semibold mb-2">Aleks Levko, CEO</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I am the Chief Executive Officer and Operations Director at Exodus Logistix. My background in the
                  logistics space started at the age of 16 helping my dad search for loads on load boards. I was the
                  owner and operator of one truck and one trailer. The moment I realized my destiny was in the logistics
                  space is when I was a teenager and my parents took us to a truck stop in Iowa. I remember being able
                  to walk around the store with us showing us all of the stuff that he has transported across the U.S.
                  and I thought that was the coolest thing ever. My wife is my greatest encouragement and has blessed me
                  with 3 amazing children.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3">
                <Image
                  src="/president-professional-headshot.jpg"
                  alt="Vitaliy Levko, President"
                  width={200}
                  height={250}
                  className="rounded-lg w-full"
                />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-xl font-semibold mb-2">Vitaliy Levko, President</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I was a professional truck driver for more than 18 years and my wife Nelli encouraged me to pursue
                  opening my very own trucking company. I've always thought that the trucking industry was the most
                  difficult business to be in and of course it would be me who would choose to be in it. However, I have
                  learned that what I do impacts so many in my community and even around the world in the most
                  encouraging ways. I can't forward. I am now able to help feed a lot of people and do what I love to do
                  with the ones closest to me.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
