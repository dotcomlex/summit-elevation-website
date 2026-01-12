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

// Curated projects for gallery
const projects = [
  { id: 1, image: galleryKitchen1, title: "Modern Kitchen Transformation", category: "Kitchen", location: "Denver, CO" },
  { id: 2, image: galleryBathroom, title: "Luxury Spa Bathroom", category: "Bathroom", location: "Boulder, CO" },
  { id: 3, image: galleryPatio, title: "Stamped Concrete Patio", category: "Concrete", location: "Lakewood, CO" },
  { id: 4, image: galleryExterior, title: "Complete Home Renovation", category: "Exterior", location: "Aurora, CO" },
  { id: 5, image: galleryKitchen, title: "Chef's Dream Kitchen", category: "Kitchen", location: "Arvada, CO" },
  { id: 6, image: galleryBathroom1, title: "Master Bath Remodel", category: "Bathroom", location: "Centennial, CO" },
];

// Dynamic aspect ratios for masonry effect
const getAspectRatio = (index: number) => {
  const patterns = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/3]', 'aspect-square', 'aspect-[4/3]', 'aspect-[3/4]'];
  return patterns[index % patterns.length];
};

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);

  // Show 4 on mobile, 6 on desktop (handled via CSS)
  const mobileProjects = projects.slice(0, 4);
  const desktopProjects = projects.slice(0, 6);

  return (
    <section className="relative py-16 md:py-24 bg-section-dark overflow-hidden">
      <div className="absolute inset-0 texture-grain" />
      <div className="container relative z-10 px-4 md:px-6">
        {/* Minimal Section Header */}
        <AnimatedSection className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-2">
            Portfolio
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Our Work
          </h2>
        </AnimatedSection>

        {/* Masonry Gallery Grid - Mobile (4 images) */}
        <AnimatedSection delay={0.1} className="md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {mobileProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedImage(project)}
                className="group cursor-pointer touch-manipulation"
              >
                <div className={cn(
                  "relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 active:scale-[0.98]",
                  getAspectRatio(index)
                )}>
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
        </AnimatedSection>

        {/* Masonry Gallery Grid - Desktop (6 images) */}
        <AnimatedSection delay={0.1} className="hidden md:block">
          <div className="grid grid-cols-3 gap-5">
            {desktopProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedImage(project)}
                className="group cursor-pointer"
              >
                <div className={cn(
                  "relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]",
                  getAspectRatio(index)
                )}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Single Focused CTA */}
        <AnimatedSection delay={0.2} className="flex flex-col items-center justify-center gap-4 mt-12 md:mt-16">
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
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center touch-manipulation"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-white/60 text-sm">
                {selectedImage.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
