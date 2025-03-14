import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "About Us | WF Design + Build",
  description: "Learn about WF Design + Build company, our history, mission, and team. Expert design and construction services in Vancouver, BC.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format"
            alt="Construction Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About WF Design + Build
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We are a premier design and construction company dedicated to
              bringing your vision to life with exceptional craftsmanship and
              attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1540749837070-2c417adc1ac1?q=80&w=800&auto=format&fit=crop"
                alt="Our Company Story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">
                Our Story
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Building Excellence Since 2010
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                Founded by Warren Friesen, WF Design + Build began with a simple mission:
                to deliver high-quality construction services with integrity and
                excellence. With decades of experience in the construction industry,
                Warren established the company to provide a more personalized approach
                to design and construction.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Over the years, we've grown from a small operation to a respected name
                in the Vancouver construction industry. Our team has expanded, but our
                commitment to quality and client satisfaction remains unwavering.
              </p>
              <p className="text-gray-700 text-lg">
                Today, WF Design + Build is known for its innovative designs,
                exceptional craftsmanship, and ability to transform spaces into
                functional, beautiful environments that exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">
              Our Mission
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              What Drives Us Forward
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl">
              At WF Design + Build, we are guided by our commitment to quality,
              integrity, and client satisfaction in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4">Quality Craftsmanship</h4>
              <p className="text-gray-600">
                We take pride in our work and use only the highest quality materials
                and construction techniques to ensure that every project is built to last.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4">Client Communication</h4>
              <p className="text-gray-600">
                We believe that clear communication is essential for a successful project,
                and we keep our clients informed and involved throughout the entire process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4">Innovation & Efficiency</h4>
              <p className="text-gray-600">
                We stay up-to-date with the latest industry trends and technologies to
                provide innovative solutions that maximize efficiency and value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">
              Our Team
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Experts Behind Our Success
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl">
              Our talented team brings together decades of combined experience in design,
              construction, and project management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative rounded-lg overflow-hidden mb-6 aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=400&auto=format&fit=crop"
                  alt="Warren Friesen"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mb-1">Warren Friesen</h4>
              <p className="text-blue-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                With over 20 years of experience in construction, Warren leads the company
                with a commitment to excellence and innovation.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative rounded-lg overflow-hidden mb-6 aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                  alt="Sarah Williams"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mb-1">Sarah Williams</h4>
              <p className="text-blue-600 mb-4">Lead Designer</p>
              <p className="text-gray-600">
                Sarah brings creative vision and technical expertise to every project,
                ensuring aesthetically pleasing and functional designs.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative rounded-lg overflow-hidden mb-6 aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                  alt="Michael Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mb-1">Michael Chen</h4>
              <p className="text-blue-600 mb-4">Project Manager</p>
              <p className="text-gray-600">
                Michael's attention to detail and organizational skills ensure that
                projects are completed on time and within budget.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative rounded-lg overflow-hidden mb-6 aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop"
                  alt="Emily Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mb-1">Emily Rodriguez</h4>
              <p className="text-blue-600 mb-4">Client Relations Manager</p>
              <p className="text-gray-600">
                Emily ensures that client needs are met throughout the project,
                providing exceptional service and communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose WF Design + Build
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We bring together the perfect combination of design expertise and
              construction excellence to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Integrated Approach</h3>
              <p className="text-white/80 mb-4">
                Our design-build approach streamlines the process, reducing costs
                and ensuring a seamless transition from concept to completion.
              </p>
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 mr-2" />
                <span>Single point of responsibility</span>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Experienced Team</h3>
              <p className="text-white/80 mb-4">
                Our professionals bring decades of combined experience in residential
                and commercial construction projects of all sizes.
              </p>
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 mr-2" />
                <span>Skilled craftsmen and designers</span>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Transparent Process</h3>
              <p className="text-white/80 mb-4">
                We maintain open and honest communication throughout the project,
                keeping you informed and involved every step of the way.
              </p>
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 mr-2" />
                <span>Clear pricing and timelines</span>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Quality Materials</h3>
              <p className="text-white/80 mb-4">
                We use only the highest quality materials and trusted suppliers
                to ensure that your project is built to last.
              </p>
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 mr-2" />
                <span>Durable and sustainable options</span>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Custom Solutions</h3>
              <p className="text-white/80 mb-4">
                We tailor our services to meet your specific needs and preferences,
                creating unique spaces that reflect your vision.
              </p>
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 mr-2" />
                <span>Personalized designs and approach</span>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Customer Satisfaction</h3>
              <p className="text-white/80 mb-4">
                Our commitment to exceeding expectations has earned us a reputation
                for excellence and a high rate of client referrals.
              </p>
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 mr-2" />
                <span>5-star rated service</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
