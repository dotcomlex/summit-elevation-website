import { Link } from "react-router-dom";
import { ArrowRight, Bath, HardHat, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import concreteImage from "@/assets/concrete-patio.jpg";
import constructionImage from "@/assets/construction-site.jpg";

const services = [
  {
    icon: Bath,
    title: "Kitchen & Bath Remodeling",
    description: "Transform your home with stunning kitchen and bathroom renovations designed for Colorado living. Custom cabinetry, modern fixtures, and mountain-inspired design.",
    image: kitchenImage,
    link: "/services#remodeling",
  },
  {
    icon: HardHat,
    title: "Concrete & Flatwork",
    description: "Durable driveways, patios, and foundations built to withstand Colorado's demanding weather. Decorative stamped concrete that elevates your outdoor space.",
    image: concreteImage,
    link: "/services#concrete",
  },
  {
    icon: Building2,
    title: "General Contracting",
    description: "Full-service construction and renovation projects from concept to completion. New builds, additions, and commercial projects with precision craftsmanship.",
    image: constructionImage,
    link: "/services#general",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 topo-lines opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Expertise You Can Trust
          </h2>
          <p className="text-muted-foreground text-lg">
            From detailed remodels to large-scale construction, we deliver quality 
            craftsmanship across every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className={cn(
                "group relative rounded-2xl overflow-hidden bg-card border border-border",
                "hover-lift hover:border-primary/30 transition-all duration-500"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-warm">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
