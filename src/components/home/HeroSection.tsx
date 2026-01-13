import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import heroImage from "@/assets/hero-home-new.webp";
import kitchenBefore from "@/assets/gallery-kitchen.jpg";
import kitchenAfter from "@/assets/gallery-kitchen-1.jpg";

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

      {/* Main Content Grid */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
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
              className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4 animate-fade-up"
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
              
              <Link 
                to="/services"
                className="text-snow-white/80 hover:text-snow-white font-medium text-base lg:text-lg underline underline-offset-4 decoration-snow-white/30 hover:decoration-snow-white/60 transition-colors"
              >
                View Our Work
              </Link>
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

          {/* Right Column - Featured Project Card */}
          <div 
            className="lg:col-span-5 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="bg-snow-white/5 backdrop-blur-sm border border-snow-white/10 rounded-2xl p-4 lg:p-5 shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-snow-white/60 text-xs uppercase tracking-wider font-medium">Featured Remodel</p>
                  <p className="text-snow-white font-semibold text-lg">Kitchen Transformation</p>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-medium">Completed</span>
                </div>
              </div>
              
              {/* Before/After Slider */}
              <BeforeAfterSlider
                beforeImage={kitchenBefore}
                afterImage={kitchenAfter}
                beforeLabel="Before"
                afterLabel="After"
                className="aspect-[4/3] w-full"
              />
              
              {/* Card Footer */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-snow-white/10 rounded-full text-snow-white/80 text-xs font-medium">Design-Build</span>
                <span className="px-2.5 py-1 bg-snow-white/10 rounded-full text-snow-white/80 text-xs font-medium">Permitted</span>
                <span className="px-2.5 py-1 bg-snow-white/10 rounded-full text-snow-white/80 text-xs font-medium">Denver Metro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
