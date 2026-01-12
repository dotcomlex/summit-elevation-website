import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home-new.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Colorado home renovation with mountain views"
          className="w-full h-full object-cover"
        />
        {/* Neutral Dark Overlay - Reduced Orange */}
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-charcoal/85 via-mountain-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/70 via-transparent to-mountain-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-3xl">
          {/* Badge - Using Alpine Blue accent */}
          <div className="inline-flex items-center gap-2 bg-alpine/30 border border-alpine-light/40 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Shield className="h-4 w-4 text-snow-white" />
            <span className="text-sm font-medium text-snow-white/90">
              Licensed & Insured • 15+ Years Experience
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-snow-white leading-[1.1] mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Colorado's Trusted
            <span className="block text-primary mt-2">General Contractor</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-snow-white/80 leading-relaxed mb-10 max-w-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
            From stunning kitchen remodels to durable concrete work, we bring 
            mountain-level precision to every project across the Denver Metro area.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button asChild size="lg" className="text-base font-semibold h-14 px-8 group shadow-warm hover:shadow-lg transition-shadow">
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-base font-semibold h-14 px-8 border-snow-white/40 bg-snow-white/5 text-snow-white hover:bg-snow-white/15 hover:text-snow-white hover:border-snow-white/60 transition-all"
            >
              <Link to="/services">View Our Work</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <a 
              href="tel:+17201234567"
              className="flex items-center gap-3 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-alpine/30 border border-alpine-light/30 group-hover:bg-alpine/40 transition-colors">
                <Phone className="h-5 w-5 text-snow-white" />
              </div>
              <div>
                <p className="text-xs text-snow-white/60">Call Anytime</p>
                <span className="text-snow-white font-semibold group-hover:text-primary transition-colors">
                  (720) XXX-XXXX
                </span>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-alpine/30 border border-alpine-light/30">
                <Clock className="h-5 w-5 text-snow-white" />
              </div>
              <div>
                <p className="text-xs text-snow-white/60">Quick Response</p>
                <p className="text-snow-white font-semibold">Free Estimates</p>
              </div>
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
