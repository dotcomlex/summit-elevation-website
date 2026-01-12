import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bath,
  HardHat,
  Building2,
  CheckCircle2,
  Phone,
  ChefHat,
  Snowflake,
  Zap,
  Shield,
  Star
} from "lucide-react";

import heroImage from "@/assets/hero-home-premium.jpg";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";
import concreteImage from "@/assets/concrete-patio.jpg";
import constructionImage from "@/assets/construction-site.jpg";
import hvacImage from "@/assets/hvac-service.jpg";
import electricalImage from "@/assets/electrical-service.jpg";

const Services = () => {
  const cards = [
    {
      icon: ChefHat,
      title: "Kitchen Remodeling",
      desc: "Custom layouts, premium finishes, and clean execution from start to finish.",
      image: kitchenImage,
      href: "/services/kitchen-bath"
    },
    {
      icon: Bath,
      title: "Bathroom Remodeling",
      desc: "Modern upgrades, tile, fixtures, and spa-level details done the right way.",
      image: bathroomImage,
      href: "/services/kitchen-bath"
    },
    {
      icon: HardHat,
      title: "Concrete & Flatwork",
      desc: "Driveways, patios, walkways, and durable pours built for Colorado weather.",
      image: concreteImage,
      href: "/services/concrete"
    },
    {
      icon: Building2,
      title: "General Contracting",
      desc: "Additions, remodels, and project management with dependable communication.",
      image: constructionImage,
      href: "/services/general-contracting"
    },
    {
      icon: Snowflake,
      title: "HVAC Services",
      desc: "Installations, replacements, repairs, and maintenance for year-round comfort.",
      image: hvacImage,
      href: "/contact"
    },
    {
      icon: Zap,
      title: "Electrical Services",
      desc: "Panel upgrades, lighting, troubleshooting, and remodel electrical support.",
      image: electricalImage,
      href: "/contact"
    }
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional construction services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mountain-charcoal/95 via-mountain-charcoal/80 to-mountain-charcoal/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 text-center">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Our Services
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-snow-white mb-6 max-w-4xl mx-auto leading-tight">
            Professional Remodeling &<br className="hidden sm:block" /> Construction Services
          </h1>

          <p className="text-mountain-mist text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Serving Denver, the Front Range, and Colorado Springs with craftsmanship you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild size="lg" className="text-base">
              <Link to="/contact">Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <a
              href="tel:+17208189678"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-snow-white/30 text-snow-white hover:bg-snow-white/10 transition-colors text-base font-medium"
            >
              <Phone className="h-5 w-5" /> Call (720) 818-9678
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-snow-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-snow-white/30" />
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span>Quality Craftsmanship</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-snow-white/30" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Clear Communication</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO GRID */}
      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 topo-lines opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Comprehensive Home Improvement Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Remodeling, concrete, and core trades handled with a single trusted team.
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
                  className="group relative rounded-2xl overflow-hidden shadow-elevated hover:shadow-2xl transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="aspect-[4/3] relative">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/90 via-mountain-charcoal/40 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-snow-white mb-2">
                      {c.title}
                    </h3>
                    <p className="text-mountain-mist text-sm md:text-base mb-3 line-clamp-2">
                      {c.desc}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILED SECTIONS */}

      {/* Kitchen & Bath */}
      <section id="remodeling" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img src={kitchenImage} alt="Kitchen remodel" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div>
              <Bath className="h-12 w-12 text-primary mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Kitchen & Bathroom Remodeling</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Transform your home with renovations that look high-end, feel functional, and last.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom kitchen design & installation",
                  "Bathroom renovations & updates",
                  "Tile & countertop work",
                  "Fixture installation",
                  "Complete project management"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link to="/services/kitchen-bath">View Service Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Get Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concrete */}
      <section id="concrete" className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <HardHat className="h-12 w-12 text-primary mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Concrete & Flatwork</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Durable work that holds up through freeze-thaw cycles and Colorado sun.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Driveways & parking areas",
                  "Patios & walkways",
                  "Foundations & slabs",
                  "Decorative & stamped concrete",
                  "Repairs & resurfacing"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link to="/services/concrete">View Service Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Get Free Estimate</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated order-1 lg:order-2">
              <img src={concreteImage} alt="Concrete patio" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* General Contracting */}
      <section id="general" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img src={constructionImage} alt="Construction site" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div>
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">General Contracting</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Professional project management, skilled trades, and reliable timelines.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "New construction projects",
                  "Home additions & expansions",
                  "Structural repairs",
                  "Commercial projects",
                  "Project consultation & planning"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link to="/services/general-contracting">View Service Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Get Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HVAC */}
      <section id="hvac" className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Snowflake className="h-12 w-12 text-primary mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">HVAC Services</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Comfort, efficiency, and clean installation standards—no shortcuts.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Furnace replacement & installation",
                  "AC installation & replacement",
                  "HVAC repairs & diagnostics",
                  "Seasonal maintenance",
                  "Thermostat upgrades",
                  "Ductwork support when needed"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/contact">Request HVAC Estimate <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated order-1 lg:order-2">
              <img src={hvacImage} alt="HVAC service" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Electrical */}
      <section id="electrical" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img src={electricalImage} alt="Electrical service" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div>
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Electrical Services</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Safe, code-conscious work that supports remodels and upgrades cleanly.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Electrical panel upgrades",
                  "Recessed lighting installs",
                  "Outlets, switches, and fixture installs",
                  "Troubleshooting & repairs",
                  "Remodel electrical support",
                  "Clean finish and detail work"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/contact">Request Electrical Estimate <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-stone">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-mountain-mist text-lg mb-8 max-w-xl mx-auto">
            Get your free estimate today. We're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Your Free Estimate</Link>
            </Button>
            <a
              href="tel:+17208189678"
              className="inline-flex items-center justify-center gap-2 text-snow-white hover:text-primary transition-colors text-lg font-medium"
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
