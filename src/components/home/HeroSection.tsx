import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home-new.webp";

const microReview = {
  text: "Exceeded all our expectations. True craftsmen!",
  author: "Sarah M.",
  location: "Denver, CO"
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Colorado mountain home with Rocky Mountain views"
          className="w-full h-full object-cover animate-ken-burns"
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-mountain-charcoal/40 via-transparent to-mountain-charcoal/70" />
        <div className="absolute inset-0 bg-mountain-charcoal/20" />
      </div>

      {/* Trust Badge - Top Right */}
      <div 
        className="absolute top-24 right-6 lg:right-12 z-20 animate-fade-up hidden sm:block"
        style={{ animationDelay: "600ms" }}
      >
        <div className="flex items-center gap-3 bg-snow-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-elevated">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <div className="text-left">
            <div className="font-heading text-2xl font-bold text-mountain-charcoal leading-none">15+</div>
            <div className="text-xs text-mountain-slate font-medium uppercase tracking-wide">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline with text shadow for readability */}
          <h1 
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-snow-white leading-[1.08] mb-6 animate-fade-up text-shadow-hero" 
            style={{ animationDelay: "100ms" }}
          >
            Transforming Colorado Homes with{" "}
            <span className="text-primary">Craftsmanship</span> & Care
          </h1>

          {/* Subheadline with subtle text shadow */}
          <p 
            className="text-lg md:text-xl text-snow-white/90 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-up text-shadow-subtle" 
            style={{ animationDelay: "200ms" }}
          >
            From stunning kitchen remodels to full-scale renovations, trust our experienced 
            team to elevate your home with exceptional attention to detail.
          </p>

          {/* CTAs - Primary + Phone */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-up" 
            style={{ animationDelay: "300ms" }}
          >
            <Button 
              asChild 
              size="lg" 
              className="text-base font-semibold h-14 px-10 group btn-shine shadow-[0_4px_14px_rgba(234,88,12,0.35)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link to="/contact">
                Get Your Free Estimate
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <a 
              href="tel:+13035551234" 
              className="flex items-center gap-2 text-snow-white/90 hover:text-snow-white transition-colors font-medium group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-snow-white/10 group-hover:bg-snow-white/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span>(303) 555-1234</span>
            </a>
          </div>

          {/* Mini Review */}
          <div 
            className="flex flex-col items-center gap-2 mb-8 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-snow-white/80 text-sm italic">
              "{microReview.text}" — <span className="font-medium">{microReview.author}</span>, {microReview.location}
            </p>
          </div>

          {/* Stats Row */}
          <div 
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            <div className="flex items-center gap-2 text-snow-white/70">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-snow-white">15+</span>
              <span className="text-sm uppercase tracking-wide">Years</span>
            </div>
            <div className="w-px h-8 bg-snow-white/20 hidden sm:block" />
            <div className="flex items-center gap-2 text-snow-white/70">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-snow-white">500+</span>
              <span className="text-sm uppercase tracking-wide">Projects</span>
            </div>
            <div className="w-px h-8 bg-snow-white/20 hidden sm:block" />
            <div className="flex items-center gap-2 text-snow-white/70">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-gold text-gold" />
                <span className="font-heading text-2xl sm:text-3xl font-bold text-snow-white">5.0</span>
              </div>
              <span className="text-sm uppercase tracking-wide">Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-snow-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-snow-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
