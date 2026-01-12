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

const categories = ["All", "Kitchen", "Bathroom", "Concrete", "Exterior"];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, 4);

  return (
    <section className="relative py-16 md:py-24 bg-section-dark overflow-hidden">
      <div className="absolute inset-0 texture-grain" />
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Explore our latest renovation work across the Denver metro area
          </p>
        </AnimatedSection>

        {/* Filter Chips */}
        <AnimatedSection delay={0.1} className="mb-8 md:mb-12">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 md:justify-center md:mx-0 md:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 touch-manipulation",
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white ring-1 ring-white/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Compact Responsive Grid */}
        <AnimatedSection delay={0.15} className="mb-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedImage(project)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-[0.98] touch-manipulation"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                {/* Caption - title only for cleaner look */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h4 className="text-white font-semibold text-sm md:text-lg line-clamp-2">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAll && filteredProjects.length > 4 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="text-white/70 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors"
              >
                Show all {filteredProjects.length} projects
              </button>
            </div>
          )}
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent text-white hover:bg-white/10 border-white/30 hover:border-white/50 px-6 py-5 text-sm md:text-base w-full sm:w-auto"
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-5 text-sm md:text-base shadow-lg btn-shine w-full sm:w-auto"
          >
            <Link to="/contact">
              Get a Free Estimate
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
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
