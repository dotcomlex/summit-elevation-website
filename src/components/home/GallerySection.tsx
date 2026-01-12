import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, MapPin, ArrowRight, Camera, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
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

// Featured project for Spotlight
const featuredProject = {
  id: 0,
  title: "Modern Kitchen Transformation",
  category: "Kitchen Remodel",
  location: "Denver, CO",
  description: "Complete kitchen overhaul with custom cabinetry, quartz countertops, and premium appliances.",
  imageAfter: galleryKitchen1,
  imageBefore: galleryKitchen,
  timeline: "8 weeks",
  scope: ["Custom cabinetry", "Quartz countertops", "Premium appliances"],
};

// Filmstrip items (unified list)
const filmstripItems = [
  { id: 1, image: galleryBathroom, title: "Luxury Spa Bathroom", category: "Bathroom Remodel", location: "Boulder, CO" },
  { id: 2, image: galleryPatio, title: "Stamped Concrete Patio", category: "Concrete Flatwork", location: "Lakewood, CO" },
  { id: 3, image: galleryExterior, title: "Complete Home Renovation", category: "General Contracting", location: "Aurora, CO" },
  { id: 4, image: galleryPatio1, title: "Outdoor Living Space", category: "Concrete Flatwork", location: "Westminster, CO" },
  { id: 5, image: galleryExterior1, title: "Craftsman Home Exterior", category: "General Contracting", location: "Highlands Ranch, CO" },
  { id: 6, image: galleryBathroom1, title: "Master Bath Remodel", category: "Bathroom Remodel", location: "Centennial, CO" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof filmstripItems[0] | null>(null);
  const [featuredView, setFeaturedView] = useState<"after" | "before">("after");
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start", 
    slidesToScroll: 1,
    containScroll: "trimSnaps"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  
  const onSelect = useCallback(() => { 
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap()); 
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
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

  const currentFeaturedImage = featuredView === "after" ? featuredProject.imageAfter : featuredProject.imageBefore;

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

        {/* ===== SPOTLIGHT AREA ===== */}
        <AnimatedSection delay={0.1} className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 bg-white/5 rounded-2xl p-4 md:p-6 lg:p-8 ring-1 ring-white/10">
            {/* Spotlight Image */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] lg:aspect-[4/3]">
              {/* Image with crossfade */}
              <div className="absolute inset-0">
                <img
                  src={featuredProject.imageBefore}
                  alt={`${featuredProject.title} - Before`}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                    featuredView === "before" ? "opacity-100" : "opacity-0"
                  )}
                />
                <img
                  src={featuredProject.imageAfter}
                  alt={`${featuredProject.title} - After`}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                    featuredView === "after" ? "opacity-100" : "opacity-0"
                  )}
                />
              </div>

              {/* Before/After Toggle */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
                <div className="flex bg-black/60 backdrop-blur-md rounded-full p-1 ring-1 ring-white/20">
                  <button
                    onClick={() => setFeaturedView("before")}
                    className={cn(
                      "px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200",
                      featuredView === "before"
                        ? "bg-white text-gray-900"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setFeaturedView("after")}
                    className={cn(
                      "px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200",
                      featuredView === "after"
                        ? "bg-primary text-white"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    After
                  </button>
                </div>
              </div>

              {/* Featured badge */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4">
                <span className="px-2.5 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-lg">
                  Featured
                </span>
              </div>
            </div>

            {/* Spotlight Details */}
            <div className="flex flex-col justify-center">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
                {featuredProject.category}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                {featuredProject.title}
              </h3>
              <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                <MapPin className="h-4 w-4" />
                <span>{featuredProject.location}</span>
              </div>
              <p className="text-white/70 text-base md:text-lg mb-6 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Scope bullets */}
              <ul className="space-y-2 mb-6">
                {featuredProject.scope.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Timeline badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{featuredProject.timeline}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => setSelectedImage({ 
                    id: featuredProject.id, 
                    image: currentFeaturedImage, 
                    title: featuredProject.title, 
                    category: featuredProject.category, 
                    location: featuredProject.location 
                  })}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-sm font-medium"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  View Photos
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 py-3 text-sm font-medium"
                >
                  <Link to="/contact">Get Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ===== FILMSTRIP CAROUSEL ===== */}
        <AnimatedSection delay={0.2} className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              More Projects
            </h3>
            {/* Desktop nav buttons */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors ring-1 ring-white/20"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors ring-1 ring-white/20"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
            <div className="flex gap-4">
              {filmstripItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-[85%] sm:w-[55%] md:w-[40%] lg:w-[30%] xl:w-[24%]"
                >
                  <div
                    className="group relative rounded-xl overflow-hidden cursor-pointer ring-1 ring-white/10 hover:ring-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] touch-manipulation"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Mobile: Always visible overlay | Desktop: Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="inline-block px-2 py-0.5 bg-primary/90 text-white text-xs font-medium rounded-full mb-2">
                          {item.category}
                        </span>
                        <h4 className="text-white font-semibold text-base line-clamp-1 mb-1">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-1.5 text-white/70 text-sm">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Mobile-visible title bar at bottom */}
                    <div className="lg:hidden bg-white/5 backdrop-blur-sm p-3 border-t border-white/10">
                      <h4 className="text-white font-medium text-sm line-clamp-1">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots - mobile only */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {filmstripItems.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  selectedIndex === i
                    ? "bg-primary w-6"
                    : "bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Dual CTAs */}
        <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent text-white hover:bg-white/10 border-white/30 hover:border-white/50 px-6 md:px-8 py-5 md:py-6 text-base w-full sm:w-auto"
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-5 md:py-6 text-base shadow-lg btn-shine w-full sm:w-auto"
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
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
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
