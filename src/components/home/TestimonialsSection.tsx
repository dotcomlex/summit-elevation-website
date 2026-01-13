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
  { name: "Mike Thompson", location: "Denver, CO", rating: 5, text: "14er Renovations transformed our outdated kitchen into a modern masterpiece. Their attention to detail exceeded all expectations.", project: "Kitchen Remodel", avatar: avatarMike },
  { name: "Maria Garcia", location: "Boulder, CO", rating: 5, text: "Professional, punctual, and passionate about their work. Our bathroom renovation was completed on time and the results are stunning.", project: "Bathroom Renovation", avatar: avatarMaria },
  { name: "David Chen", location: "Lakewood, CO", rating: 5, text: "The stamped concrete patio they built has become our favorite outdoor space. Quality work that will last for years.", project: "Concrete Patio", avatar: avatarDavid },
  { name: "Sarah Williams", location: "Aurora, CO", rating: 5, text: "From start to finish, the team was communicative and respectful. The whole-house renovation exceeded our dreams.", project: "Whole Home Renovation", avatar: avatarSarah },
  { name: "James Miller", location: "Arvada, CO", rating: 5, text: "Best contractor experience we've ever had. Fair pricing, excellent communication, and outstanding quality.", project: "Basement Finish", avatar: avatarJames },
];

const microReviews = [
  { text: "Exceeded expectations!", author: "Mike T." },
  { text: "Flawless kitchen work", author: "Sarah W." },
  { text: "Best contractor ever", author: "David C." },
  { text: "Transformed our home", author: "Maria G." },
  { text: "Incredible attention to detail", author: "James R." },
  { text: "Highly recommend!", author: "Lisa M." },
  { text: "Professional from start to finish", author: "Tom B." },
  { text: "Quality craftsmanship", author: "Anna K." },
];


export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const onSelect = useCallback(() => { if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap()); }, [emblaApi]);

  useEffect(() => { if (!emblaApi) return; onSelect(); emblaApi.on("select", onSelect); return () => { emblaApi.off("select", onSelect); }; }, [emblaApi, onSelect]);
  useEffect(() => { if (!emblaApi) return; const interval = setInterval(() => emblaApi.scrollNext(), 6000); return () => clearInterval(interval); }, [emblaApi]);

  return (
    <section className="relative py-16 md:py-24 bg-section-dark overflow-hidden">
      <div className="absolute inset-0 texture-grain" />
      <div className="container relative z-10 px-4 md:px-6">
        <AnimatedSection className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Client Reviews</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">Real reviews from homeowners across the Denver metro area</p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-none w-full px-2 md:px-4">
                  <div className="relative bg-white/[0.08] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg overflow-hidden card-shine transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                    <div className="flex items-center gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}</div>
                    <blockquote className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 font-light">"{testimonial.text}"</blockquote>
                    <div className="h-px bg-white/10 mb-5" />
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30" />
                        <div><div className="text-base font-semibold text-white">{testimonial.name}</div><div className="text-sm text-white/50">{testimonial.location} • {testimonial.project}</div></div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollPrev} className="hidden md:flex absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors border border-white/20"><ChevronLeft className="w-5 h-5 text-white" /></button>
          <button onClick={scrollNext} className="hidden md:flex absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors border border-white/20"><ChevronRight className="w-5 h-5 text-white" /></button>

          <div className="flex items-center justify-center gap-4 mt-6 md:hidden">
            <button onClick={scrollPrev} className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors border border-white/20"><ChevronLeft className="w-5 h-5 text-white" /></button>
            <div className="flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => scrollTo(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${selectedIndex === i ? "bg-primary w-8" : "bg-white/30"}`} />)}</div>
            <button onClick={scrollNext} className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors border border-white/20"><ChevronRight className="w-5 h-5 text-white" /></button>
          </div>
          <div className="hidden md:flex justify-center gap-2 mt-8">{testimonials.map((_, i) => <button key={i} onClick={() => scrollTo(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${selectedIndex === i ? "bg-primary w-8" : "bg-white/30 hover:bg-white/50"}`} />)}</div>
        </div>

        {/* Marquee Row */}
        <div className="mt-14 overflow-hidden">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-section-dark to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-section-dark to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...microReviews, ...microReviews].map((review, i) => (
                <div key={i} className="flex-shrink-0 mx-6 flex items-center gap-2">
                  <Star className="h-4 w-4 text-gold fill-gold" />
                  <span className="text-white/50 text-sm whitespace-nowrap">"{review.text}" — <span className="text-white/70">{review.author}</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
