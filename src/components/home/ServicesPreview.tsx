import { Link } from "react-router-dom";
import { ChefHat, Bath, HardHat, Hammer, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const services = [
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen into a modern, functional space with custom cabinetry, countertops, and premium finishes.",
    link: "/services/kitchen-bath",
    accent: "primary",
  },
  {
    icon: Bath,
    title: "Bathroom Renovation",
    description:
      "Create your personal spa retreat with luxury fixtures, tile work, and thoughtful design that maximizes space.",
    link: "/services/kitchen-bath",
    accent: "navy",
  },
  {
    icon: HardHat,
    title: "Concrete & Outdoor",
    description:
      "Enhance your outdoor living with stamped patios, driveways, and durable concrete solutions built for Colorado weather.",
    link: "/services/concrete",
    accent: "primary",
  },
  {
    icon: Hammer,
    title: "General Contracting",
    description:
      "Full-service contracting for additions, structural work, and whole-home renovations managed from start to finish.",
    link: "/services/general-contracting",
    accent: "navy",
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-5">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mountain-charcoal mb-4">
            Expert Renovation Services
          </h2>
          <p className="text-base md:text-lg text-mountain-slate max-w-2xl mx-auto">
            From kitchens to concrete, we deliver quality craftsmanship tailored to Colorado homes
          </p>
        </AnimatedSection>

        {/* Services Grid - Mobile First */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isPrimary = service.accent === "primary";

            return (
              <StaggerItem key={index}>
                <Link
                  to={service.link}
                  className="group relative bg-white rounded-2xl p-5 md:p-7 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50 flex flex-col h-full"
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mb-4 md:mb-5 transition-colors duration-300 ${
                      isPrimary
                        ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                        : "bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-mountain-charcoal mb-2 md:mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-mountain-slate leading-relaxed mb-4 md:mb-5 flex-grow">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="inline-flex items-center gap-2 text-primary font-medium text-sm md:text-base">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-10 md:mt-14">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg shadow-warm w-full sm:w-auto"
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
