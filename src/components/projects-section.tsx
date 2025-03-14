import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "renovation", label: "Renovation" },
];

const projects = [
  {
    id: 1,
    title: "Modern Lakeside Home",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    location: "Vancouver, BC"
  },
  {
    id: 2,
    title: "Urban Office Renovation",
    category: "commercial renovation",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
    location: "Burnaby, BC"
  },
  {
    id: 3,
    title: "Luxury Apartment Complex",
    category: "residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    location: "West Vancouver, BC"
  },
  {
    id: 4,
    title: "Kitchen Transformation",
    category: "renovation",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=800&auto=format&fit=crop",
    location: "Richmond, BC"
  },
  {
    id: 5,
    title: "Retail Store Redesign",
    category: "commercial renovation",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop",
    location: "Surrey, BC"
  },
  {
    id: 6,
    title: "Modern Family Home",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    location: "Coquitlam, BC"
  }
];

export function ProjectsSection() {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our portfolio of completed projects showcasing our quality and expertise.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="h-12">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="px-6 py-3">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project =>
                    category.id === "all" ||
                    project.category.includes(category.id)
                  )
                  .map((project) => (
                    <div key={project.id} className="group overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="relative">
                        <AspectRatio ratio={4/3}>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.location}</p>
                        <Button variant="outline" className="w-full hover:bg-blue-600 hover:text-white transition-colors">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
