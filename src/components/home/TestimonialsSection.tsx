import { useState, useCallback, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatedSection } from "@/components/ui/animated-section";

import avatarMike from "@/assets/avatar-mike.jpg";
import avatarMaria from "@/assets/avatar-maria.jpg";
import avatarDavid from "@/assets/avatar-david.jpg";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarJames from "@/assets/avatar-james.jpg";

const testimonials = [
  {
    name: "Mike Thompson",
    location: "Denver, CO",
    rating: 5,
    text: "14er Renovations transformed our outdated kitchen into a modern masterpiece. Their attention to detail exceeded all expectations.",
    project: "Kitchen Remodel",
    avatar: avatarMike,
  },
  {
    name: "Maria Garcia",
    location: "Boulder, CO",
    rating: 5,
    text: "Professional, punctual, and passionate about their work. Our bathroom renovation was completed on time and the results are stunning.",
    project: "Bathroom Renovation",
    avatar: avatarMaria,
  },
  {
    name: "David Chen",
    location: "Lakewood, CO",
    rating: 5,
    text: "The stamped concrete patio they built has become our favorite outdoor space. Quality work that will last for years.",
    project: "Concrete Patio",
    avatar: avatarDavid,
  },
  {
    name: "Sarah Williams",
    location: "Aurora, CO",
    rating: 5,
    text: "From start to finish, the team was communicative and respectful. The whole-house renovation exceeded our dreams.",
    project: "Whole Home Renovation",
    avatar: avatarSarah,
  },
  {
    name: "James Miller",
    location: "Arvada, CO",
    rating: 5,
    text: "Best contractor experience we've ever had. Fair pricing, excellent communication, and outstanding quality.",
    project: "Basement Finish",
    avatar: avatarJames,
  },
];

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

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

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative py-16 md:py-24 bg-section-dark overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 texture-grain" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Real reviews from homeowners across the Denver metro area
          </p>
        </AnimatedSection>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-none w-full px-2 md:px-4">
                  {/* Premium Card with left accent border */}
                  <div className="relative bg-white/[0.08] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg overflow-hidden">
                    {/* Orange accent border on left */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                    
                    {/* Stars Row */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <blockquote className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 font-light">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Divider */}
                    <div className="h-px bg-white/10 mb-5" />

                    {/* Author info */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                        />
                        <div>
                          <div className="text-base font-semibold text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/50">
                            {testimonial.location} • {testimonial.project}
                          </div>
                        </div>
                      </div>

                      {/* Google badge */}
                      <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                        <GoogleIcon />
                        <span className="text-xs text-white/70">Google Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation - Desktop */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors border border-white/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors border border-white/20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Navigation - Mobile */}
          <div className="flex items-center justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={scrollPrev}
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors border border-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    selectedIndex === index
                      ? "bg-primary w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors border border-white/20"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Dots - Desktop */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-primary w-8"
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
