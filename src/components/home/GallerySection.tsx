import { useState, useCallback, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import useEmblaCarousel from "embla-carousel-react";

import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryPatio from "@/assets/gallery-patio.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";

const projects = [
  { id: 1, image: galleryKitchen, title: "Modern Kitchen Transformation", location: "Denver, CO" },
  { id: 2, image: galleryBathroom, title: "Luxury Spa Bathroom", location: "Boulder, CO" },
  { id: 3, image: galleryPatio, title: "Stamped Concrete Patio", location: "Lakewood, CO" },
  { id: 4, image: galleryExterior, title: "Complete Home Renovation", location: "Aurora, CO" },
];

export function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const currentProject = projects[selectedIndex];

  return (
    <section className="relative py-20 md:py-32 bg-section-dark overflow-hidden">
      <div className="absolute inset-0 texture-grain" />
      <div className="container relative z-10 px-4 md:px-6">
        
        {/* Minimal Header */}
        <AnimatedSection className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection delay={0.1} className="relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => (
                <div key={project.id} className="flex-[0_0_100%] min-w-0">
                  <div className="aspect-[16/9] md:aspect-[2/1]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full items-center justify-center transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full items-center justify-center transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </AnimatedSection>

        {/* Project Info */}
        <div className="mt-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {currentProject.title}
          </h3>
          <p className="text-white/50 text-sm mt-1">
            {currentProject.location}
          </p>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? "bg-primary w-6" 
                  : "bg-white/30 hover:bg-white/50 w-2"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.2} className="flex justify-center mt-12">
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base md:text-lg shadow-lg btn-shine"
          >
            <Link to="/contact">
              Get a Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
