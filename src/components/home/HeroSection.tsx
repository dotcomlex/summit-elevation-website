import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home-new.webp";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Colorado mountain home with Rocky Mountain views"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-mountain-charcoal/40 via-transparent to-mountain-charcoal/70" />
        <div className="absolute inset-0 bg-mountain-charcoal/20" />
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
            className="text-lg md:text-xl text-snow-white/90 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up text-shadow-subtle" 
            style={{ animationDelay: "200ms" }}
          >
            From stunning kitchen remodels to full-scale renovations, trust our experienced 
            team to elevate your home with exceptional attention to detail.
          </p>

          {/* Single CTA */}
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "300ms" }}>
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
