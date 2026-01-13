import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home-new.webp";
import crewImage from "@/assets/hero-crew-working.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Colorado mountain home"
          className="w-full h-full object-cover"
        />
        {/* Cinematic overlay - stronger throughout for contrast with crew image */}
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-charcoal/95 via-mountain-charcoal/85 to-mountain-charcoal/75 lg:to-mountain-charcoal/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/60 via-transparent to-mountain-charcoal/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Headline - All lines with whitespace-nowrap */}
            <h1 className="font-heading text-shadow-hero animate-fade-up">
              <span 
                className="block text-snow-white font-extrabold tracking-tight leading-[1.05] whitespace-nowrap"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
              >
                Remodels Done
              </span>
              <span 
                className="block text-primary font-extrabold tracking-tight leading-[1.05] whitespace-nowrap"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
              >
                Right,
              </span>
              <span 
                className="block text-snow-white font-extrabold tracking-tight leading-[1.05] whitespace-nowrap"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
              >
                The First Time.
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-snow-white/85 leading-relaxed max-w-lg mx-auto lg:mx-0 mt-6 lg:mt-8 text-shadow-subtle animate-fade-up lg:whitespace-nowrap"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", animationDelay: "100ms" }}
            >
              Clear scope, clean work, and a finished result you're proud to show off.
            </p>

            {/* CTA Area */}
            <div 
              className="mt-8 lg:mt-10 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto text-base lg:text-lg font-semibold h-14 lg:h-16 px-10 lg:px-12 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <Link to="/contact">
                  Get a Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Trust Chips */}
            <div 
              className="mt-8 lg:mt-10 flex flex-wrap justify-center lg:justify-start gap-3 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/20 bg-snow-white/5 whitespace-nowrap">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-snow-white/90 text-sm font-medium">5.0</span>
              </div>
              
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/20 bg-snow-white/5 whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-snow-white/70" />
                <span className="text-snow-white/90 text-sm font-medium">15+ Years</span>
              </div>
              
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/20 bg-snow-white/5 whitespace-nowrap">
                <Award className="w-3.5 h-3.5 text-snow-white/70" />
                <span className="text-snow-white/90 text-sm font-medium">500+ Projects</span>
              </div>
            </div>

            {/* Licensed text */}
            <p 
              className="mt-6 text-snow-white/60 text-sm lg:text-base animate-fade-up text-center lg:text-left whitespace-nowrap"
              style={{ animationDelay: "400ms" }}
            >
              Licensed & insured · Serving Colorado homeowners
            </p>
          </div>

          {/* Right Column - Crew Image (Desktop Only) */}
          <div 
            className="hidden lg:block lg:col-span-5 animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            <div className="relative">
              <img
                src={crewImage}
                alt="Professional construction crew at work"
                className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-2xl border border-snow-white/10"
              />
              {/* Subtle gradient overlay for polish */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-mountain-charcoal/20 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
