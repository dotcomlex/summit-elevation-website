import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryPatio from "@/assets/gallery-patio.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryKitchen1 from "@/assets/gallery-kitchen-1.jpg";
import galleryBathroom1 from "@/assets/gallery-bathroom-1.jpg";
import galleryPatio1 from "@/assets/gallery-patio-1.jpg";
import galleryExterior1 from "@/assets/gallery-exterior-1.jpg";

// Unified projects data
const projects = [
  { id: 1, image: galleryKitchen1, title: "Modern Kitchen Transformation", category: "Kitchen", location: "Denver, CO" },
  { id: 2, image: galleryBathroom, title: "Luxury Spa Bathroom", category: "Bathroom", location: "Boulder, CO" },
  { id: 3, image: galleryPatio, title: "Stamped Concrete Patio", category: "Concrete", location: "Lakewood, CO" },
  { id: 4, image: galleryExterior, title: "Complete Home Renovation", category: "Exterior", location: "Aurora, CO" },
  { id: 5, image: galleryKitchen, title: "Chef's Dream Kitchen", category: "Kitchen", location: "Arvada, CO" },
  { id: 6, image: galleryBathroom1, title: "Master Bath Remodel", category: "Bathroom", location: "Centennial, CO" },
  { id: 7, image: galleryPatio1, title: "Outdoor Living Space", category: "Concrete", location: "Westminster, CO" },
  { id: 8, image: galleryExterior1, title: "Craftsman Home Exterior", category: "Exterior", location: "Highlands Ranch, CO" },
];

// Curated selection for premium feel
const featuredProjects = projects.slice(0, 6);

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);

  return (
    <section className="relative py-20 md:py-28 bg-section-dark overflow-hidden">
      <div className="absolute inset-0 texture-grain" />
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Explore our latest renovation work across the Denver metro area
          </p>
        </AnimatedSection>

        {/* Gallery Grid - Single column mobile, multi-column desktop */}
        <AnimatedSection delay={0.1} className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedImage(project)}
                className="group cursor-pointer touch-manipulation"
              >
                {/* Image Container - No text overlay */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02] active:scale-[0.98]">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Caption - Below the image, clean and minimal */}
                <div className="pt-5">
                  <h4 className="text-white font-semibold text-lg md:text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-white/40 text-sm mt-1">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Single Focused CTA */}
        <AnimatedSection delay={0.2} className="flex flex-col items-center justify-center gap-4">
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center touch-manipulation"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base">
                {selectedImage.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
