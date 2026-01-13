import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import denverImage from "@/assets/denver-skyline.jpg";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={denverImage}
          alt="Denver skyline with mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-charcoal/95 via-mountain-charcoal/85 to-mountain-charcoal/70" />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45" />
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 texture-stone opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/10">
            <MessageSquare className="w-4 h-4" />
            <span>Free Consultation</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight text-shadow-strong">
            Let's Build
            <br />
            <span className="text-primary">Something Beautiful</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed text-shadow-strong">
            Schedule your free consultation today and discover how we can bring your vision to life with expert craftsmanship and attention to detail.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-warm"
          >
            <a href="tel:+17208189678">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          {/* Trust indicators */}
          <div className="mt-12 pt-10 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
