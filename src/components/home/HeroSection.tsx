import { Link } from "react-router-dom";
import { ArrowRight, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home-new.webp";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Colorado mountain home with Rocky Mountain views"
          className="w-full h-full object-cover animate-ken-burns"
        />
        {/* Cinematic gradient - darker on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-charcoal/85 via-mountain-charcoal/50 to-mountain-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/60 via-transparent to-mountain-charcoal/30" />
      </div>

      {/* Main Content - Left aligned on desktop, centered on mobile */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-24">
          <div className="max-w-4xl">
            {/* Headline - Large, no awkward wrapping */}
            <h1 
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-snow-white leading-[1.05] tracking-tight mb-6 animate-fade-up text-center lg:text-left" 
              style={{ animationDelay: "100ms" }}
            >
              <span className="block sm:inline">Remodels Done</span>{" "}
              <span className="text-primary whitespace-nowrap">Right</span>,
              <br />
              <span className="whitespace-nowrap">The First Time.</span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-lg sm:text-xl md:text-2xl text-snow-white/90 leading-relaxed mb-10 max-w-xl animate-fade-up text-center lg:text-left" 
              style={{ animationDelay: "200ms" }}
            >
              Clear scope, clean work, and a finished result you're proud to show off.
            </p>

            {/* CTA Button */}
            <div 
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8 animate-fade-up" 
              style={{ animationDelay: "300ms" }}
            >
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto text-base lg:text-lg font-semibold h-14 lg:h-16 px-10 lg:px-14 group btn-shine shadow-[0_4px_20px_rgba(234,88,12,0.4)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <Link to="/contact">
                  Get a Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Trust Text */}
            <p 
              className="text-snow-white/70 text-sm sm:text-base lg:text-lg animate-fade-up text-center lg:text-left"
              style={{ animationDelay: "400ms" }}
            >
              Licensed & insured, serving Colorado homeowners
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Trust Bar - Pinned to bottom */}
      <div 
        className="relative z-10 border-t border-snow-white/10 bg-mountain-charcoal/60 backdrop-blur-sm animate-fade-up"
        style={{ animationDelay: "500ms" }}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-8 lg:gap-12 py-5 lg:py-6">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-snow-white/90 text-sm lg:text-base font-medium">5.0 Rating</span>
            </div>

            <span className="hidden sm:block w-px h-5 bg-snow-white/20" />

            <span className="text-snow-white/80 text-sm lg:text-base font-medium">15+ Years Experience</span>

            <span className="hidden sm:block w-px h-5 bg-snow-white/20" />

            <span className="text-snow-white/80 text-sm lg:text-base font-medium">500+ Projects Completed</span>

            <span className="hidden lg:block w-px h-5 bg-snow-white/20" />

            <span className="hidden lg:inline text-snow-white/80 text-sm lg:text-base font-medium">100% Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 lg:bottom-28 left-1/2 -translate-x-1/2 z-10 animate-fade-up" style={{ animationDelay: "600ms" }}>
        <div className="flex flex-col items-center gap-2 text-snow-white/40 hover:text-snow-white/70 transition-colors cursor-pointer">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
