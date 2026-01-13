import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home-new.webp";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Colorado mountain home"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability - stronger at top for header */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/45" />
      </div>

      {/* Centered Content - Extra top padding for transparent header */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        {/* Headline - Mobile */}
        <h1 className="font-heading text-shadow-strong animate-fade-up lg:hidden">
          <span 
            className="block text-snow-white font-extrabold tracking-tight leading-[1.05] whitespace-nowrap"
            style={{ fontSize: "clamp(1.8rem, 7.5vw, 2.8rem)" }}
          >
            Remodels Done <span className="text-primary">Right,</span>
          </span>
          <span 
            className="block text-snow-white font-extrabold tracking-tight leading-[1.05] whitespace-nowrap"
            style={{ fontSize: "clamp(1.8rem, 7.5vw, 2.8rem)" }}
          >
            The First Time.
          </span>
        </h1>

        {/* Headline - Desktop (single line) */}
        <h1 
          className="hidden lg:block font-heading text-shadow-strong animate-fade-up text-snow-white font-extrabold tracking-tight leading-[1.05] whitespace-nowrap"
          style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)" }}
        >
          Remodels Done <span className="text-primary">Right,</span> The First Time.
        </h1>

        {/* Subheadline */}
        <p 
          className="text-snow-white/90 leading-relaxed mt-8 text-shadow-strong animate-fade-up max-w-xl lg:max-w-none lg:whitespace-nowrap"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", animationDelay: "100ms" }}
        >
          Clear scope, clean work, and a finished result you're proud to show off.
        </p>

        {/* CTA */}
        <div 
          className="mt-10 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <Button 
            asChild 
            size="lg" 
            className="text-base lg:text-lg font-semibold h-14 lg:h-16 px-10 lg:px-12 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <Link to="/contact">
              Get a Free Estimate
              <ArrowRight className="ml-2 h-5 w-5 lg:h-6 lg:w-6" />
            </Link>
          </Button>
        </div>

        {/* Trust Chips */}
        <div 
          className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/20 bg-snow-white/10 backdrop-blur-sm whitespace-nowrap">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-snow-white/90 text-sm font-medium">5.0</span>
          </div>
          
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/20 bg-snow-white/10 backdrop-blur-sm whitespace-nowrap">
            <Clock className="w-3.5 h-3.5 text-snow-white/70" />
            <span className="text-snow-white/90 text-sm font-medium">15+ Years</span>
          </div>
          
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/20 bg-snow-white/10 backdrop-blur-sm whitespace-nowrap">
            <Award className="w-3.5 h-3.5 text-snow-white/70" />
            <span className="text-snow-white/90 text-sm font-medium">500+ Projects</span>
          </div>
        </div>

        {/* Licensed text */}
        <p 
          className="mt-6 text-snow-white/70 text-sm lg:text-base animate-fade-up lg:whitespace-nowrap"
          style={{ animationDelay: "400ms" }}
        >
          Licensed & insured · Serving Colorado homeowners
        </p>
      </div>
    </section>
  );
}
