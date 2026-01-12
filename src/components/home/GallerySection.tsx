import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";

// Import gallery images
import galleryKitchen1 from "@/assets/gallery-kitchen-1.jpg";
import galleryBathroom1 from "@/assets/gallery-bathroom-1.jpg";
import galleryPatio1 from "@/assets/gallery-patio-1.jpg";
import galleryExterior1 from "@/assets/gallery-exterior-1.jpg";

const galleryItems = [
  {
    id: 1,
    image: galleryKitchen1,
    title: "Modern Mountain Kitchen",
    category: "Kitchen",
    location: "Highlands Ranch, CO",
  },
  {
    id: 2,
    image: galleryBathroom1,
    title: "Luxury Spa Bathroom",
    category: "Bathroom",
    location: "Denver, CO",
  },
  {
    id: 3,
    image: galleryPatio1,
    title: "Colorado Stone Patio",
    category: "Outdoor",
    location: "Castle Rock, CO",
  },
  {
    id: 4,
    image: galleryExterior1,
    title: "Craftsman Exterior",
    category: "Exterior",
    location: "Lakewood, CO",
  },
];

const categories = ["All", "Kitchen", "Bathroom", "Outdoor", "Exterior"];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28 bg-snow-soft overflow-hidden scroll-mt-20"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 texture-dots opacity-50" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-alpine/10 text-alpine px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ZoomIn className="w-4 h-4" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mountain-charcoal mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-mountain-slate max-w-2xl mx-auto">
            Browse our latest Colorado home renovations and see the quality craftsmanship that sets us apart
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-alpine text-white shadow-md"
                  : "bg-white text-mountain-stone hover:bg-alpine/10 hover:text-alpine border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 
              bg-white/90 hover:bg-white text-mountain-charcoal rounded-full w-10 h-10 md:w-12 md:h-12 
              shadow-lg border border-border"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 
              bg-white/90 hover:bg-white text-mountain-charcoal rounded-full w-10 h-10 md:w-12 md:h-12 
              shadow-lg border border-border"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-4 md:mx-0" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-[90%] sm:w-[70%] md:w-1/2 lg:w-1/3 pl-4"
                >
                  <div
                    className="group relative rounded-xl overflow-hidden bg-white shadow-soft cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <div className="inline-block bg-evergreen/90 text-white text-xs px-3 py-1 rounded-full mb-2">
                          {item.category}
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          {item.title}
                        </h3>
                        <p className="text-white/70 text-sm">{item.location}</p>
                      </div>
                    </div>

                    {/* Always visible info on mobile */}
                    <div className="md:hidden p-4 bg-white">
                      <div className="inline-block bg-evergreen/10 text-evergreen text-xs px-3 py-1 rounded-full mb-2">
                        {item.category}
                      </div>
                      <h3 className="text-mountain-charcoal font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-mountain-slate text-sm">{item.location}</p>
                    </div>

                    {/* Zoom icon */}
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                      <ZoomIn className="w-5 h-5 text-mountain-charcoal" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {filteredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "bg-alpine w-6"
                  : "bg-mountain-mist hover:bg-mountain-slate"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-alpine text-alpine hover:bg-alpine hover:text-white transition-colors"
          >
            View All Projects
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
