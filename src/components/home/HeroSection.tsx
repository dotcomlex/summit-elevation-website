import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
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

      {/* Content - Centered */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Headline - Two lines like reference */}
          <h1 
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-snow-white leading-[1.12] mb-6 animate-fade-up text-shadow-hero" 
            style={{ animationDelay: "100ms" }}
          >
            Remodels Done{" "}
            <span className="text-primary">Right</span>,
            <br />
            The First Time.
          </h1>

          {/* Subheadline - Short and punchy */}
          <p 
            className="text-base sm:text-lg md:text-xl text-snow-white/90 leading-relaxed mb-8 max-w-xl mx-auto animate-fade-up text-shadow-subtle" 
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
              className="w-full sm:w-auto text-base font-semibold h-14 px-10 group btn-shine shadow-[0_4px_14px_rgba(234,88,12,0.35)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link to="/contact">
                Get a Free Estimate
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Trust Text */}
          <p 
            className="text-snow-white/70 text-sm sm:text-base mb-10 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            Licensed & insured, serving Colorado homeowners
          </p>

          {/* Simplified Rating */}
          <div 
            className="flex flex-col items-center gap-2 animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-snow-white/80 text-sm font-medium">
              5.0 rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
