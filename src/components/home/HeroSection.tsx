import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home-new.webp";

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
        {/* Cinematic overlay - stronger on left for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-charcoal/90 via-mountain-charcoal/70 to-mountain-charcoal/40 lg:to-mountain-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/50 via-transparent to-mountain-charcoal/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16 py-24 lg:py-32">
        <div className="max-w-3xl">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Headline - Controlled line breaks */}
            <h1 className="font-heading text-shadow-hero animate-fade-up">
              <span 
                className="block text-snow-white font-extrabold tracking-tight leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                Remodels Done
              </span>
              <span 
                className="block text-primary font-extrabold tracking-tight leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                Right,
              </span>
              <span 
                className="block text-snow-white font-extrabold tracking-tight leading-[1.05] whitespace-nowrap"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                The First Time.
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-snow-white/85 leading-relaxed max-w-lg mx-auto lg:mx-0 mt-6 lg:mt-8 text-shadow-subtle animate-fade-up"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", animationDelay: "100ms" }}
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
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/20 bg-snow-white/5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-snow-white/90 text-sm font-medium">5.0</span>
              </div>
              
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/20 bg-snow-white/5">
                <Clock className="w-3.5 h-3.5 text-snow-white/70" />
                <span className="text-snow-white/90 text-sm font-medium">15+ Years</span>
              </div>
              
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/20 bg-snow-white/5">
                <Award className="w-3.5 h-3.5 text-snow-white/70" />
                <span className="text-snow-white/90 text-sm font-medium">500+ Projects</span>
              </div>
            </div>

            {/* Licensed text */}
            <p 
              className="mt-6 text-snow-white/60 text-sm lg:text-base animate-fade-up text-center lg:text-left"
              style={{ animationDelay: "400ms" }}
            >
              Licensed & insured · Serving Colorado homeowners
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
