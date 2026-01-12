import { CheckCircle2, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: Benefit[];
  image: string;
  imageAlt: string;
  ctaText?: string;
  reversed?: boolean;
}

export function BenefitsSection({
  icon: Icon,
  title,
  description,
  benefits,
  image,
  imageAlt,
  ctaText = "Get a Free Estimate",
  reversed = false,
}: BenefitsSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 texture-paper opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Image */}
          <div className={`relative rounded-2xl overflow-hidden shadow-elevated ${reversed ? "lg:order-2" : ""}`}>
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full aspect-[4/3] object-cover"
            />
            {/* Decorative Badge */}
            <div className="absolute top-4 left-4 flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground shadow-warm">
              <Icon className="h-7 w-7" />
            </div>
          </div>
          
          {/* Content */}
          <div className={reversed ? "lg:order-1" : ""}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {description}
            </p>
            
            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-alpine" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button asChild size="lg">
              <Link to="/contact">
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
