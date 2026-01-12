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
  { id: 1, image: galleryKitchen, title: "Modern Kitchen Transformation", category: "Kitchen Remodel", location: "Denver, CO" },
  { id: 2, image: galleryBathroom, title: "Luxury Spa Bathroom", category: "Bathroom Remodel", location: "Boulder, CO" },
  { id: 3, image: galleryPatio, title: "Stamped Concrete Patio", category: "Concrete Flatwork", location: "Lakewood, CO" },
  { id: 4, image: galleryExterior, title: "Complete Home Renovation", category: "General Contracting", location: "Aurora, CO" },
  { id: 5, image: galleryKitchen1, title: "Contemporary Kitchen Design", category: "Kitchen Remodel", location: "Arvada, CO" },
  { id: 6, image: galleryBathroom1, title: "Master Bath Remodel", category: "Bathroom Remodel", location: "Westminster, CO" },
  { id: 7, image: galleryPatio1, title: "Outdoor Living Space", category: "Concrete Flatwork", location: "Centennial, CO" },
  { id: 8, image: galleryExterior1, title: "Craftsman Home Exterior", category: "General Contracting", location: "Highlands Ranch, CO" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

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

  return (
    <section className="relative py-16 md:py-24 bg-section-dark overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 texture-grain" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-8 md:mb-12">
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

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-[88%] sm:w-[70%] md:w-[45%] lg:w-[32%]"
                >
                  <div
                    className="group relative bg-white/5 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary/30 transition-all duration-300"
                    onClick={() => setSelectedImage(item)}
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Hover Overlay with gradient vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Zoom icon */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                            <ZoomIn className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        {/* Project label on hover */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content - Always Visible */}
                    <div className="p-4">
                      <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-white/50 text-sm">
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
            className="absolute left-2 md:-left-4 top-[35%] -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-colors z-10 border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 md:-right-4 top-[35%] -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-colors z-10 border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-primary w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Dual CTAs */}
        <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-14">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent text-white hover:bg-white/10 border-white/30 hover:border-white/50 px-6 md:px-8 py-5 md:py-6 text-base w-full sm:w-auto"
          >
            <Link to="/services">
              View More Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-5 md:py-6 text-base shadow-warm w-full sm:w-auto"
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
              <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full mb-2">
                {selectedImage.category}
              </span>
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
    </section>
  );
}
