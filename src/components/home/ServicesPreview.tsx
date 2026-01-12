import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import concreteImage from "@/assets/concrete-patio.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";

const services = [
  { 
    title: "Kitchen & Bathroom", 
    description: "Elevate your spaces with luxurious kitchen and spa-inspired bath remodels.", 
    link: "/services/kitchen-bath", 
    image: kitchenImage 
  },
  { 
    title: "Concrete & Flatwork", 
    description: "Enhance your outdoor spaces with premium stamped concrete patios and flatwork.", 
    link: "/services/concrete", 
    image: concreteImage 
  },
  { 
    title: "General Contracting", 
    description: "Full-scale renovations and custom home construction managed professionally.", 
    link: "/services/general-contracting", 
    image: bathroomImage 
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-muted/30 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 texture-paper opacity-20" />
      <div className="container relative z-10 px-4 md:px-6">
        {/* Header with decorative element */}
        <AnimatedSection className="text-center mb-10 md:mb-14">
          {/* Decorative diamond with lines */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 md:w-24 h-px bg-primary/40" />
            <div className="w-3 h-3 rotate-45 border-2 border-primary" />
            <div className="w-16 md:w-24 h-px bg-primary/40" />
          </div>
          
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mountain-charcoal mb-4">
            Comprehensive Remodeling Solutions
          </h2>
          <p className="text-base md:text-lg text-mountain-slate max-w-3xl mx-auto">
            We turn your vision into reality with custom, high-quality renovations tailored to your needs. 
            Explore our core services below.
          </p>
        </AnimatedSection>

        {/* Service Cards - Image Background with Text Overlay */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Link 
                to={service.link} 
                className="group block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-[380px] md:h-[420px]"
              >
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal via-mountain-charcoal/40 to-transparent" />
                
                {/* Hover brightness overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                
                {/* Content at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-snow-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-snow-white/80 text-sm md:text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    <span>View our services</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA Section */}
        <AnimatedSection delay={0.3} className="text-center">
          <p className="text-mountain-slate text-base md:text-lg mb-6">
            Need electrical work, HVAC services, or a custom project? We've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="text-base font-semibold h-12 px-8 group shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link to="/services">
                View Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-base font-semibold h-12 px-8 border-mountain-charcoal bg-mountain-charcoal text-snow-white hover:bg-mountain-charcoal/90 hover:text-snow-white hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link to="/contact">Get a Free Estimate</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
