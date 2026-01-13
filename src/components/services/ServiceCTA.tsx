import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import denverImage from "@/assets/denver-skyline.jpg";

interface ServiceCTAProps {
  title?: string;
  description?: string;
}

export function ServiceCTA({ 
  title = "Ready to Get Started?",
  description = "Contact us today for a free estimate. Let's bring your vision to life."
}: ServiceCTAProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${denverImage})` }}
      />
      <div className="absolute inset-0 bg-mountain-charcoal/85" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-snow-white mb-6">
          {title}
        </h2>
        <p className="text-mountain-mist text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="tel:+17208189678">
              Get Your Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <a 
            href="tel:+17208189678" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-snow-white hover:text-primary transition-colors font-semibold"
          >
            <Phone className="h-5 w-5" />
            (720) 818-9678
          </a>
        </div>
      </div>
    </section>
  );
}
