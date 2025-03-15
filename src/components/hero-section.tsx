"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1920&auto=format&fit=crop",
    title: "Transforming Visions into Reality",
    subtitle: "Expert Design & Build Services",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1920&auto=format&fit=crop",
    title: "Creating Beautiful Living Spaces",
    subtitle: "Custom Home Design & Construction",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1920&auto=format&fit=crop",
    title: "Building With Precision & Care",
    subtitle: "Residential & Commercial Expertise",
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact#contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
                Get in Touch
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
