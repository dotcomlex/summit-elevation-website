import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bath,
  HardHat,
  Building2,
  Phone,
  ChefHat,
  Snowflake,
  Zap,
  Shield
} from "lucide-react";

import heroImage from "@/assets/services-hero-bg.jpg";
import paperTexture from "@/assets/paper-texture-bg.jpg";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";
import concreteImage from "@/assets/concrete-patio.jpg";
import constructionImage from "@/assets/construction-site.jpg";
import hvacImage from "@/assets/hvac-service.jpg";
import electricalImage from "@/assets/electrical-service.jpg";

const Services = () => {
  const cards = [
    {
      title: "Kitchen Remodeling",
      desc: "Custom layouts, premium finishes, and clean execution from start to finish.",
      image: kitchenImage,
      href: "/services/kitchen-bath",
      showIcon: false
    },
    {
      title: "Bathroom Remodeling",
      desc: "Modern upgrades, tile, fixtures, and spa-level details done the right way.",
      image: bathroomImage,
      href: "/services/kitchen-bath",
      showIcon: false
    },
    {
      icon: HardHat,
      title: "Concrete & Flatwork",
      desc: "Driveways, patios, walkways, and durable pours built for Colorado weather.",
      image: concreteImage,
      href: "/services/concrete",
      showIcon: true
    },
    {
      icon: Building2,
      title: "General Contracting",
      desc: "Additions, remodels, and project management with dependable communication.",
      image: constructionImage,
      href: "/services/general-contracting",
      showIcon: true
    },
    {
      icon: Snowflake,
      title: "HVAC Services",
      desc: "Installations, replacements, repairs, and maintenance for year-round comfort.",
      image: hvacImage,
      href: "/contact",
      showIcon: true
    },
    {
      icon: Zap,
      title: "Electrical Services",
      desc: "Panel upgrades, lighting, troubleshooting, and remodel electrical support.",
      image: electricalImage,
      href: "/contact",
      showIcon: true
    }
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Colorado mountain home at dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mountain-charcoal/70 via-mountain-charcoal/50 to-mountain-charcoal/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 text-center">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            — Our Services —
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-snow-white mb-6 max-w-4xl mx-auto leading-tight">
            Professional Remodeling &<br className="hidden sm:block" /> Construction Services
          </h1>

          <p className="text-mountain-mist text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Serving Denver, the Front Range, and Colorado Springs with craftsmanship you can trust.
          </p>

          <Button asChild size="lg" className="text-base mb-12">
            <Link to="/contact">Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>

          {/* Simplified Trust Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-snow-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-snow-white/30" />
            <a
              href="tel:+17208189678"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span>Call (720) 818-9678</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO GRID */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Paper Texture Background */}
        <div className="absolute inset-0">
          <img
            src={paperTexture}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              — What We Do —
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Comprehensive Home Improvement Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A quick look at the core services homeowners hire us for most.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.title}
                  to={c.href}
                  className="group relative rounded-3xl overflow-hidden shadow-elevated hover:shadow-2xl transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="aspect-[4/3] relative">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/95 via-mountain-charcoal/30 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      {/* Only show orange circle icon for cards 3-6 */}
                      {c.showIcon && Icon && (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-snow-white">
                        {c.title}
                      </h3>
                    </div>
                    <p className="text-mountain-mist text-sm md:text-base line-clamp-2">
                      {c.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mountain-charcoal/80 via-mountain-charcoal/70 to-mountain-charcoal/80" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-snow-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-mountain-mist text-lg mb-8 max-w-xl mx-auto">
            Get your free estimate today—we'll help you map out the next step clearly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-base">
              <Link to="/contact">Get Your Free Estimate <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <a
              href="tel:+17208189678"
              className="inline-flex items-center gap-2 text-snow-white hover:text-primary transition-colors text-lg font-medium"
            >
              <Phone className="h-5 w-5" />
              (720) 818-9678
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
