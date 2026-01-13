import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  HardHat,
  Building2,
  Phone,
  Snowflake,
  Zap,
  Shield
} from "lucide-react";

import heroImage from "@/assets/services-hero-bg.jpg";
import paperTexture from "@/assets/paper-texture-light.jpg";
import kitchenImage from "@/assets/services-kitchen.jpg";
import bathroomImage from "@/assets/services-bathroom.jpg";
import concreteImage from "@/assets/services-concrete.jpg";
import constructionImage from "@/assets/services-general-contracting.jpg";
import hvacImage from "@/assets/services-hvac.jpg";
import electricalImage from "@/assets/services-electrical.jpg";

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
      {/* HERO - Reduced height on mobile, responsive typography */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Colorado mountain home at dusk"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mountain-charcoal/70 via-mountain-charcoal/50 to-mountain-charcoal/80" />
          {/* Stronger overlay at top for transparent header readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/45" />
        </div>

        {/* Content - Extra top padding for transparent header */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-16 sm:pb-20 text-center">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            — Our Services —
          </span>

          {/* Headline with clamp for responsive sizing - stays 2-3 lines on mobile */}
          <h1 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.15] font-bold text-snow-white mb-4 sm:mb-6 max-w-4xl mx-auto text-shadow-strong">
            Professional Remodeling &<br className="hidden sm:block" /> Construction Services
          </h1>

          <p className="text-snow-white/80 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2 text-shadow-strong">
            Serving Denver, the Front Range, and Colorado Springs with craftsmanship you can trust.
          </p>

          {/* CTA Button - 48-56px tall on mobile */}
          <Button asChild size="lg" className="text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all duration-300 mb-6 sm:mb-8 md:mb-12">
            <Link to="/contact">
              Get a Free Estimate <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>

          {/* Trust Row */}
          <div className="flex items-center justify-center text-snow-white/90 text-[11px] sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Shield className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-primary" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO GRID - Tighter spacing, scroll-mt for navbar clearance */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden scroll-mt-20">
        {/* Cleaner Paper Texture Background */}
        <div className="absolute inset-0">
          <img
            src={paperTexture}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header - Tighter spacing */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
              — What We Do —
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Comprehensive Home Solutions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              A quick look at the core services homeowners hire us for most.
            </p>
          </div>

          {/* Service Cards Grid - 1 col mobile, 2 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.title}
                  to={c.href}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-black/5 transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Card Image - Consistent aspect ratio and object-position */}
                  <div className="aspect-[4/3] relative">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Enhanced gradient overlay - STRONGER on mobile for guaranteed readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent sm:from-black/90 sm:via-black/35" />
                  </div>

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                      {/* Only show orange circle icon for cards 3-6 */}
                      {c.showIcon && Icon && (
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                          <Icon className="h-3 h-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-white" />
                        </div>
                      )}
                      {/* Title with drop shadow for guaranteed readability */}
                      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                        {c.title}
                      </h3>
                    </div>
                    {/* Description at 85% opacity with drop shadow */}
                    <p className="text-white/85 text-sm sm:text-base drop-shadow-md leading-relaxed line-clamp-2">
                      {c.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA - Consistent with hero treatment */}
      <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/90 via-mountain-charcoal/70 to-mountain-charcoal/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-snow-white mb-3 sm:mb-4 text-shadow-strong">
            Ready to Start Your Project?
          </h2>
          <p className="text-snow-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto text-shadow-strong">
            Get your free estimate today—we'll help you map out the next step clearly.
          </p>
          <Button asChild size="lg" className="text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all duration-300">
            <Link to="/contact">
              Get Your Free Estimate <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
