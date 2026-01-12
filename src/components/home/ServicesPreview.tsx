import { Link } from "react-router-dom";
import { ChefHat, Bath, HardHat, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

// Import service images
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";
import concreteImage from "@/assets/concrete-patio.jpg";

const services = [
  {
    icon: ChefHat,
    title: "Kitchen & Bath Remodeling",
    description:
      "Transform your kitchen and bathrooms into beautiful, functional spaces with custom cabinetry, premium finishes, and expert craftsmanship.",
    link: "/services/kitchen-bath",
    image: kitchenImage,
  },
  {
    icon: Bath,
    title: "Concrete & Flatwork",
    description:
      "Enhance your outdoor living with stamped patios, driveways, and durable concrete solutions built to withstand Colorado weather.",
    link: "/services/concrete",
    image: concreteImage,
  },
  {
    icon: HardHat,
    title: "General Contracting",
    description:
      "Full-service contracting for additions, structural work, and whole-home renovations managed professionally from start to finish.",
    link: "/services/general-contracting",
    image: bathroomImage,
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-white overflow-hidden scroll-mt-20">
      {/* Subtle texture */}
      <div className="absolute inset-0 texture-paper opacity-50" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mountain-charcoal mb-4">
            What We Do
          </h2>
          <p className="text-base md:text-lg text-mountain-slate max-w-2xl mx-auto">
            From kitchens to concrete, we deliver quality craftsmanship tailored to Colorado homes
          </p>
        </AnimatedSection>

        {/* Services Grid - Image-first cards matching reference */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={index}>
                <Link
                  to={service.link}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
                >
                  {/* Image Container with Icon Badge */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Floating Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-warm">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-mountain-charcoal mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-mountain-slate leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
