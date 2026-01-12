import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, ChevronLeft, ChevronRight, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Aurora, CO",
    rating: 5,
    text: "14er Renovations completely transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible, and they finished ahead of schedule. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael T.",
    location: "Lakewood, CO",
    rating: 5,
    text: "We hired them for a complete bathroom remodel and couldn't be happier. Professional, clean, and the quality of work exceeded our expectations. True craftsmen.",
  },
  {
    id: 3,
    name: "Jennifer & David R.",
    location: "Denver, CO",
    rating: 5,
    text: "The stamped concrete patio they installed is absolutely stunning. Our neighbors constantly compliment it. Great communication throughout the entire project.",
  },
  {
    id: 4,
    name: "Robert K.",
    location: "Littleton, CO",
    rating: 5,
    text: "From estimate to completion, the 14er team was exceptional. They handled our home addition with expertise and kept us informed every step of the way. Worth every penny.",
  },
  {
    id: 5,
    name: "Amanda L.",
    location: "Centennial, CO",
    rating: 5,
    text: "Best contractor experience we've ever had. Fair pricing, excellent work, and they treated our home with respect. Already planning our next project with them!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
          )}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden scroll-mt-20">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-snow-soft to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-alpine font-semibold text-sm tracking-wider uppercase mb-3">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from Colorado homeowners who trusted us with their renovation projects.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full px-4"
                >
                  <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/50 relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-8 bg-primary rounded-full p-3">
                      <Quote className="h-5 w-5 text-primary-foreground" />
                    </div>
                    
                    {/* Content */}
                    <div className="pt-4">
                      <StarRating rating={testimonial.rating} />
                      
                      <blockquote className="mt-6 text-lg md:text-xl text-foreground leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="mt-8 flex items-center gap-4">
                        {/* Avatar placeholder */}
                        <div className="w-12 h-12 rounded-full bg-alpine/20 flex items-center justify-center">
                          <span className="text-alpine font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="p-4 rounded-full bg-card border border-border shadow-soft hover:bg-muted transition-colors disabled:opacity-50 active:scale-95"
              disabled={!canScrollPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  className={cn(
                    "h-3 rounded-full transition-all duration-200",
                    idx === selectedIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground/30 w-3"
                  )}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={scrollNext}
              className="p-4 rounded-full bg-card border border-border shadow-soft hover:bg-muted transition-colors disabled:opacity-50 active:scale-95"
              disabled={!canScrollNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="h-14 px-8 font-semibold group">
            <Link to="/contact">
              Schedule Your Free Estimate
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
