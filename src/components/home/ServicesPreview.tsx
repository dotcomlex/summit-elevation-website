import { Link } from "react-router-dom";
import { ChefHat, Bath, HardHat, Hammer, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen into a modern, functional space with custom cabinetry, countertops, and premium finishes.",
    link: "/services/kitchen-bath",
    color: "alpine",
  },
  {
    icon: Bath,
    title: "Bathroom Renovation",
    description:
      "Create your personal spa retreat with luxury fixtures, tile work, and thoughtful design that maximizes space.",
    link: "/services/kitchen-bath",
    color: "evergreen",
  },
  {
    icon: HardHat,
    title: "Concrete & Outdoor",
    description:
      "Enhance your outdoor living with stamped patios, driveways, and durable concrete solutions built for Colorado weather.",
    link: "/services/concrete",
    color: "alpine",
  },
  {
    icon: Hammer,
    title: "General Contracting",
    description:
      "Full-service contracting for additions, structural work, and whole-home renovations managed from start to finish.",
    link: "/services/general-contracting",
    color: "evergreen",
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-cream overflow-hidden scroll-mt-20">
      {/* Subtle topo lines background */}
      <div className="absolute inset-0 topo-lines opacity-30" />
      
      {/* Subtle warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream to-snow-soft/50" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-evergreen/10 text-evergreen px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mountain-charcoal mb-4">
            Expert Renovation Services
          </h2>
          <p className="text-lg text-mountain-slate max-w-2xl mx-auto">
            From kitchens to concrete, we deliver quality craftsmanship tailored to Colorado homes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isAlpine = service.color === "alpine";

            return (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-colors duration-300 ${
                    isAlpine
                      ? "bg-alpine/10 text-alpine group-hover:bg-alpine group-hover:text-white"
                      : "bg-evergreen/10 text-evergreen group-hover:bg-evergreen group-hover:text-white"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-mountain-charcoal mb-3 group-hover:text-alpine transition-colors">
                  {service.title}
                </h3>
                <p className="text-mountain-slate leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <div className="inline-flex items-center gap-2 text-alpine font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-warm"
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom wave divider to gallery section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 wave-divider" />
    </section>
  );
}
