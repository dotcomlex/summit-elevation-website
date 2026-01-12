import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

// Import avatar images
import avatarMike from "@/assets/avatar-mike.jpg";
import avatarMaria from "@/assets/avatar-maria.jpg";
import avatarDavid from "@/assets/avatar-david.jpg";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarJames from "@/assets/avatar-james.jpg";

const testimonials = [
  {
    id: 1,
    name: "Mike Thompson",
    location: "Highlands Ranch, CO",
    rating: 5,
    text: "14er Renovations transformed our outdated kitchen into a modern masterpiece. The attention to detail was exceptional, and they finished on time and within budget. Couldn't be happier!",
    project: "Kitchen Remodel",
    avatar: avatarMike,
  },
  {
    id: 2,
    name: "Maria Garcia",
    location: "Lakewood, CO",
    rating: 5,
    text: "From the initial consultation to the final walkthrough, the team was professional and communicative. Our new bathroom feels like a luxury spa. Highly recommend!",
    project: "Bathroom Renovation",
    avatar: avatarMaria,
  },
  {
    id: 3,
    name: "David Chen",
    location: "Aurora, CO",
    rating: 5,
    text: "The concrete patio they installed is absolutely stunning. Great craftsmanship and the crew was respectful of our property throughout the entire project.",
    project: "Concrete Patio",
    avatar: avatarDavid,
  },
  {
    id: 4,
    name: "Sarah Williams",
    location: "Denver, CO",
    rating: 5,
    text: "We've used 14er for two projects now - kitchen and basement. Both times they exceeded our expectations. True professionals who take pride in their work.",
    project: "Multiple Projects",
    avatar: avatarSarah,
  },
  {
    id: 5,
    name: "James Morrison",
    location: "Castle Rock, CO",
    rating: 5,
    text: "Best contractor experience we've ever had. Clear communication, quality materials, and the finished product speaks for itself. Our home has never looked better.",
    project: "Whole Home Renovation",
    avatar: avatarJames,
  },
];

// Google "G" icon component
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

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

  // Auto-scroll every 6 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 bg-mountain-charcoal overflow-hidden scroll-mt-20"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 texture-stone opacity-30" />
      
      {/* Background gradient accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-alpine/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-evergreen/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-alpine/20 text-alpine-light px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GoogleIcon />
            <span>Google Reviews</span>
            <div className="flex items-center gap-0.5 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-gold text-gold"
                />
              ))}
            </div>
            <span className="text-snow-soft/80">5.0</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-snow-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-snow-soft/70 max-w-2xl mx-auto">
            Real reviews from real Colorado homeowners who trusted us with their renovation projects
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons - Desktop */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 
              bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 md:w-12 md:h-12 
              hidden md:flex backdrop-blur-sm border border-white/10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 
              bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 md:w-12 md:h-12 
              hidden md:flex backdrop-blur-sm border border-white/10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full px-4 md:px-8"
                >
                  {/* Testimonial Card */}
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-8 md:left-10">
                      <div className="bg-alpine rounded-full p-3">
                        <Quote className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Stars & Google Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-6 pt-4">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-gold text-gold"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs text-snow-soft/80">
                        <GoogleIcon />
                        <span>Verified Review</span>
                      </div>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-lg md:text-xl lg:text-2xl text-snow-white leading-relaxed mb-8">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-alpine/50"
                      />
                      <div>
                        <div className="font-semibold text-snow-white text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-snow-soft/60 text-sm">
                          {testimonial.location}
                        </div>
                        <div className="text-alpine-light text-sm font-medium mt-0.5">
                          {testimonial.project}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 backdrop-blur-sm border border-white/10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 backdrop-blur-sm border border-white/10"
              onClick={scrollNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-alpine w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
