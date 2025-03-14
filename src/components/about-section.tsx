import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1556156653-e5a7676c4821?q=80&w=800&auto=format&fit=crop"
              alt="WF Design + Build Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">About Our Company</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Expert Design and Construction Services</h3>

            <p className="text-gray-700 mb-6 text-lg">
              WF Design + Build is a premier design and construction company specializing in residential projects,
              secondary suites, and tenant improvements. Led by Warren Friesen, our dedicated team brings decades of
              combined experience to every project.
            </p>

            <p className="text-gray-700 mb-8 text-lg">
              We pride ourselves on our meticulous attention to detail, exceptional craftsmanship, and
              client-focused approach. From concept to completion, we work closely with our clients to
              transform their vision into reality, delivering results that exceed expectations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <ChevronRight className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-gray-700"><span className="font-semibold">Quality Craftsmanship:</span> We use only the finest materials and proven construction techniques.</p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-gray-700"><span className="font-semibold">Professional Team:</span> Our experienced professionals are committed to excellence.</p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-gray-700"><span className="font-semibold">Customer Satisfaction:</span> Your vision and satisfaction are our top priorities.</p>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
