import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryPatio from "@/assets/gallery-patio.jpg";
import kitchenRemodel from "@/assets/kitchen-remodel.jpg";
import bathroomRemodel from "@/assets/bathroom-remodel.jpg";
import concretePatio from "@/assets/concrete-patio.jpg";

type Category = "all" | "kitchens" | "bathrooms" | "concrete" | "exteriors";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Category;
  title: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: galleryKitchen, alt: "Modern kitchen renovation", category: "kitchens", title: "Modern Kitchen Remodel" },
  { id: 2, src: galleryBathroom, alt: "Luxury bathroom renovation", category: "bathrooms", title: "Spa-Style Bathroom" },
  { id: 3, src: galleryExterior, alt: "Colorado home exterior", category: "exteriors", title: "Colorado Home Exterior" },
  { id: 4, src: galleryPatio, alt: "Stamped concrete patio", category: "concrete", title: "Stamped Concrete Patio" },
  { id: 5, src: kitchenRemodel, alt: "Kitchen with mountain style", category: "kitchens", title: "Mountain-Style Kitchen" },
  { id: 6, src: bathroomRemodel, alt: "Updated bathroom", category: "bathrooms", title: "Complete Bath Renovation" },
  { id: 7, src: concretePatio, alt: "Outdoor concrete work", category: "concrete", title: "Decorative Concrete" },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "kitchens", label: "Kitchens" },
  { key: "bathrooms", label: "Bathrooms" },
  { key: "concrete", label: "Concrete" },
  { key: "exteriors", label: "Exteriors" },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-snow-soft relative overflow-hidden scroll-mt-20">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzk5OTk5OSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiM2NjY2NjYiPjwvY2lyY2xlPgo8L3N2Zz4=')]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-alpine font-semibold text-sm tracking-wider uppercase mb-3">
            Our Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our recent projects and see the quality craftsmanship that defines 14er Renovations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/80 via-mountain-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading font-semibold text-snow-white text-lg">
                  {item.title}
                </h3>
                <span className="text-snow-white/70 text-sm capitalize">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-[85%] max-w-sm"
                >
                  <div className="relative overflow-hidden rounded-xl bg-card shadow-soft">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-muted-foreground text-sm capitalize">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              className="p-4 rounded-full bg-background border border-border shadow-soft hover:bg-muted transition-colors disabled:opacity-50 active:scale-95"
              disabled={!canScrollPrev}
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-4 rounded-full bg-background border border-border shadow-soft hover:bg-muted transition-colors disabled:opacity-50 active:scale-95"
              disabled={!canScrollNext}
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="h-14 px-8 font-semibold group">
            <Link to="/contact">
              Get a Free Estimate
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
