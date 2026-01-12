import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bath, HardHat, Building2, CheckCircle2, Phone } from "lucide-react";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";
import concreteImage from "@/assets/concrete-patio.jpg";
import constructionImage from "@/assets/construction-site.jpg";

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 topo-lines opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Services</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Services Built for <span className="text-primary">Colorado Living</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Expert craftsmanship designed to handle the Front Range's unique challenges while elevating your home's beauty and functionality.</p>
        </div>
      </section>

      {/* Kitchen & Bath */}
      <section id="remodeling" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img src={kitchenImage} alt="Kitchen remodel" className="w-full" />
            </div>
            <div>
              <Bath className="h-12 w-12 text-primary mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Kitchen & Bathroom Remodeling</h2>
              <p className="text-muted-foreground text-lg mb-6">Transform your Colorado home with stunning renovations that blend mountain-inspired aesthetics with modern functionality.</p>
              <ul className="space-y-3 mb-8">
                {["Custom kitchen design & installation", "Bathroom renovations & updates", "Tile & countertop work", "Fixture installation", "Complete project management"].map((item) => (
                  <li key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /><span>{item}</span></li>
                ))}
              </ul>
              <Button asChild><Link to="/contact">Start Your Remodel <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Concrete */}
      <section id="concrete" className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <HardHat className="h-12 w-12 text-primary mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Concrete & Flatwork</h2>
              <p className="text-muted-foreground text-lg mb-6">Built to withstand Colorado's demanding weather, our concrete work combines durability with stunning design.</p>
              <ul className="space-y-3 mb-8">
                {["Driveways & parking areas", "Patios & walkways", "Foundations & slabs", "Decorative & stamped concrete", "Repairs & resurfacing"].map((item) => (
                  <li key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /><span>{item}</span></li>
                ))}
              </ul>
              <Button asChild><Link to="/contact">Get Concrete Quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated order-1 lg:order-2">
              <img src={concreteImage} alt="Concrete patio" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* General Contracting */}
      <section id="general" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img src={constructionImage} alt="Construction site" className="w-full" />
            </div>
            <div>
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">General Contracting</h2>
              <p className="text-muted-foreground text-lg mb-6">Full-service construction from concept to completion, with the precision and reliability Colorado homeowners deserve.</p>
              <ul className="space-y-3 mb-8">
                {["New construction projects", "Home additions & expansions", "Structural repairs", "Commercial projects", "Project consultation & planning"].map((item) => (
                  <li key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /><span>{item}</span></li>
                ))}
              </ul>
              <Button asChild><Link to="/contact">Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-stone">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-mountain-mist text-lg mb-8 max-w-xl mx-auto">Get your free estimate today. We're here to bring your vision to life.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link to="/contact">Get Your Free Estimate</Link></Button>
            <a href="tel:+17201234567" className="flex items-center justify-center gap-2 text-snow-white hover:text-primary transition-colors"><Phone className="h-5 w-5" />(720) XXX-XXXX</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
