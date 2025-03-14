import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Home, Wrench, RefreshCw, Building, Ruler } from "lucide-react";

const services = [
  {
    icon: <Home className="h-10 w-10 text-blue-600" />,
    title: "Residential Construction",
    description: "Custom home construction with attention to detail and quality craftsmanship for your dream home.",
    link: "/services#residential"
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-blue-600" />,
    title: "Renovations",
    description: "Transform your existing space with our comprehensive renovation services for any room or area.",
    link: "/services#renovations"
  },
  {
    icon: <Building className="h-10 w-10 text-blue-600" />,
    title: "Secondary Suites",
    description: "Add value to your property with legal secondary suites designed for comfort and functionality.",
    link: "/services#secondary-suites"
  },
  {
    icon: <Wrench className="h-10 w-10 text-blue-600" />,
    title: "Tenant Improvements",
    description: "Commercial space renovations and improvements to meet your business needs and requirements.",
    link: "/services#tenant-improvements"
  },
  {
    icon: <Ruler className="h-10 w-10 text-blue-600" />,
    title: "Custom Design",
    description: "Architectural design services that blend aesthetics, functionality, and structural integrity.",
    link: "/services#custom-design"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive design and construction services tailored to your specific needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none bg-white shadow">
              <CardContent className="p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
