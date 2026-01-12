import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import denverImage from "@/assets/denver-skyline.jpg";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden scroll-mt-20">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${denverImage})` }}
      />
      <div className="absolute inset-0 bg-mountain-charcoal/85" />
      
      {/* Mountain Pattern Overlay */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-32 opacity-10"
        >
          <path
            d="M0,200 L150,120 L300,160 L450,80 L600,140 L750,60 L900,100 L1050,40 L1200,80 L1200,200 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-snow-white mb-6">
            Ready to Transform
            <span className="text-primary"> Your Space?</span>
          </h2>
          <p className="text-mountain-mist text-lg md:text-xl mb-10 leading-relaxed">
            Let's discuss your vision. From initial consultation to final walkthrough, 
            we're with you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-base font-semibold h-14 px-8 group w-full sm:w-auto">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <span className="text-mountain-mist hidden sm:block">or</span>
            <a
              href="tel:+17201234567"
              className="flex items-center gap-3 text-snow-white hover:text-primary transition-colors group w-full sm:w-auto justify-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-alpine/30 border border-alpine-light/20 group-hover:bg-alpine/40 transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold">(720) XXX-XXXX</span>
            </a>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 inline-flex items-center gap-3 text-mountain-mist text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-alpine/40 border-2 border-mountain-charcoal flex items-center justify-center text-snow-white text-xs font-semibold"
                >
                  ★
                </div>
              ))}
            </div>
            <span>Trusted by 500+ Colorado homeowners</span>
          </div>
        </div>
      </div>
    </section>
  );
}
