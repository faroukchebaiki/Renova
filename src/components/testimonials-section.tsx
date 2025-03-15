import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "REnova Design + Build transformed our outdated home into a modern masterpiece. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, responsive, and a pleasure to work with throughout the entire process.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Business Owner",
    content: "We hired REnova Design + Build for our retail store renovation, and the results were outstanding. They understood our vision perfectly and executed it with precision. The project was completed on time and within budget, making it a stress-free experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "Homeowner",
    content: "The secondary suite REnova Design + Build created for our home is beautifully designed and perfectly functional. Their team provided excellent suggestions that enhanced the final result, and the craftsmanship is exceptional.",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Roberts",
    role: "Property Developer",
    content: "I've worked with many construction companies over the years, and REnova Design + Build stands out for their reliability and quality of work. Their team's expertise in both design and construction makes the entire process seamless.",
    rating: 4
  }
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <RatingStars rating={testimonial.rating} />
                <p className="mt-6 mb-8 text-gray-700 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
