import { Shield, Clock, Award, Users, Wrench } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed Colorado contractor with comprehensive insurance coverage.",
    accent: "navy",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your timeline with efficient project management.",
    accent: "primary",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Attention to detail and premium materials ensure lasting results.",
    accent: "navy",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your vision drives our work. We deliver beyond expectations.",
    accent: "primary",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 bg-sand overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 texture-paper" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-5">
            <Award className="w-4 h-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mountain-charcoal mb-4">
            Colorado's Trusted Renovators
          </h2>
          <p className="text-base md:text-lg text-mountain-slate max-w-2xl mx-auto">
            15+ years of transforming Colorado homes with integrity and excellence
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          {/* Image - Shows FIRST on mobile */}
          <AnimatedSection delay={0.2} className="mb-8 md:hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={teamImage}
                alt="14er Renovations team at work"
                className="w-full h-64 object-cover"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs font-medium text-mountain-charcoal">Years Experience</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Desktop: Two columns */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Features Grid */}
            <StaggerContainer className="grid grid-cols-2 gap-3 md:gap-4 order-2 md:order-1">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isPrimary = feature.accent === "primary";

                return (
                  <StaggerItem key={index}>
                    <div className="bg-white rounded-xl p-4 md:p-5 shadow-soft hover:shadow-elevated transition-all duration-300 h-full">
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg mb-3 ${
                          isPrimary
                            ? "bg-primary/10 text-primary"
                            : "bg-navy/10 text-navy"
                        }`}
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-mountain-charcoal mb-1 md:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-xs md:text-sm text-mountain-slate leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Image - Desktop only */}
            <AnimatedSection delay={0.3} direction="right" className="hidden md:block order-1 md:order-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={teamImage}
                    alt="14er Renovations team at work"
                    className="w-full h-[400px] lg:h-[480px] object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-4 shadow-elevated">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm font-medium text-mountain-charcoal">Years Experience</div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              </div>
            </AnimatedSection>
          </div>

          {/* Colorado Pride - Full width */}
          <AnimatedSection delay={0.4} className="mt-8 md:mt-12">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-soft flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex-shrink-0 bg-navy/10 p-3 rounded-full">
                <Wrench className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-mountain-charcoal mb-1">
                  Colorado Built, Colorado Proud
                </h3>
                <p className="text-sm text-mountain-slate">
                  We understand local building codes, weather challenges, and what makes Colorado homes special. 
                  Our team lives and works here—your neighbors trust us with their homes.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Wave divider to testimonials */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 C300,100 900,20 1200,80 L1200,120 L0,120 Z"
            fill="hsl(225 25% 15%)"
          />
        </svg>
      </div>
    </section>
  );
}
