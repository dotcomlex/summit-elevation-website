import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, X, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";

import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryPatio from "@/assets/gallery-patio.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryKitchen1 from "@/assets/gallery-kitchen-1.jpg";
import galleryBathroom1 from "@/assets/gallery-bathroom-1.jpg";
import galleryPatio1 from "@/assets/gallery-patio-1.jpg";
import galleryExterior1 from "@/assets/gallery-exterior-1.jpg";

const galleryItems = [
  { id: 1, image: galleryKitchen, title: "Modern Kitchen Transformation", category: "Kitchen", location: "Denver, CO" },
  { id: 2, image: galleryBathroom, title: "Luxury Spa Bathroom", category: "Bathroom", location: "Boulder, CO" },
  { id: 3, image: galleryPatio, title: "Stamped Concrete Patio", category: "Outdoor", location: "Lakewood, CO" },
  { id: 4, image: galleryExterior, title: "Complete Home Renovation", category: "Exterior", location: "Aurora, CO" },
  { id: 5, image: galleryKitchen1, title: "Contemporary Kitchen Design", category: "Kitchen", location: "Arvada, CO" },
  { id: 6, image: galleryBathroom1, title: "Master Bath Remodel", category: "Bathroom", location: "Westminster, CO" },
  { id: 7, image: galleryPatio1, title: "Outdoor Living Space", category: "Outdoor", location: "Centennial, CO" },
  { id: 8, image: galleryExterior1, title: "Craftsman Home Exterior", category: "Exterior", location: "Highlands Ranch, CO" },
];

const categories = ["All", "Kitchen", "Bathroom", "Outdoor", "Exterior"];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setSelectedIndex(0);
    }
  }, [filteredItems, emblaApi]);

  return (
    <section className="relative py-16 md:py-24 bg-navy overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 texture-dots opacity-20" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-5 border border-white/20">
            <ZoomIn className="w-4 h-4" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Explore our latest renovation work across the Denver metro area
          </p>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-navy shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-[85%] sm:w-[70%] md:w-[45%] lg:w-[30%]"
                >
                  <div
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-elevated cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content - Always Visible */}
                    <div className="p-4 md:p-5">
                      <span className="inline-block px-3 py-1 bg-navy/10 text-navy text-xs font-medium rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-mountain-charcoal mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-mountain-slate text-sm">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 bg-white shadow-elevated p-2 md:p-3 rounded-full hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-mountain-charcoal" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 bg-white shadow-elevated p-2 md:p-3 rounded-full hover:bg-gray-50 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-mountain-charcoal" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-white w-6"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-10 md:mt-14">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-navy hover:bg-white/90 border-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto"
          >
            <Link to="/services">
              View All Projects
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
            className="absolute top-4 right-4 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
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
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/70 flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                {selectedImage.location}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Wave divider to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 C300,100 900,20 1200,80 L1200,120 L0,120 Z"
            fill="hsl(38 40% 95%)"
          />
        </svg>
      </div>
    </section>
  );
}
