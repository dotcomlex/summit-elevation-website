import { Link } from "react-router-dom";
import { ArrowRight, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home-new.webp";

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
        <div className="absolute inset-0 bg-gradient-to-b from-mountain-charcoal/50 via-mountain-charcoal/30 to-mountain-charcoal/70" />
      </div>

      {/* Content - Centered with Glass Card */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Glass Card Container */}
          <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-14 flex flex-col items-center text-center">
            {/* Headline - Larger for desktop */}
            <h1 
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-snow-white leading-[1.08] mb-6 animate-fade-up text-shadow-hero" 
              style={{ animationDelay: "100ms" }}
            >
              Remodels Done{" "}
              <span className="text-primary">Right</span>,
              <br />
              The First Time.
            </h1>

            {/* Subheadline - Larger for desktop */}
            <p 
              className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-snow-white/90 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-up text-shadow-subtle" 
              style={{ animationDelay: "200ms" }}
            >
              Clear scope, clean work, and a finished result you're proud to show off.
            </p>

            {/* Single CTA Button */}
            <div 
              className="flex flex-col items-center gap-4 mb-6 animate-fade-up w-full sm:w-auto" 
              style={{ animationDelay: "300ms" }}
            >
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto text-base lg:text-lg font-semibold h-14 lg:h-16 px-10 lg:px-12 group btn-shine shadow-[0_4px_14px_rgba(234,88,12,0.35)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.45)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Link to="/contact">
                  Get a Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Trust Text */}
            <p 
              className="text-snow-white/70 text-sm sm:text-base lg:text-lg mb-8 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              Licensed & insured, serving Colorado homeowners
            </p>

            {/* Rating */}
            <div 
              className="flex flex-col items-center gap-2 mb-6 animate-fade-up"
              style={{ animationDelay: "500ms" }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 lg:w-6 lg:h-6 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-snow-white/80 text-sm lg:text-base font-medium">
                5.0 rating
              </p>
            </div>

            {/* Stats Row */}
            <div 
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-snow-white/60 text-xs sm:text-sm lg:text-base animate-fade-up"
              style={{ animationDelay: "600ms" }}
            >
              <span className="font-medium">15+ Years Experience</span>
              <span className="hidden sm:block w-px h-4 bg-snow-white/30" />
              <span className="font-medium">500+ Projects</span>
              <span className="hidden sm:block w-px h-4 bg-snow-white/30" />
              <span className="font-medium">100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-up" style={{ animationDelay: "700ms" }}>
        <div className="flex flex-col items-center gap-2 text-snow-white/50 hover:text-snow-white/80 transition-colors cursor-pointer">
          <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
