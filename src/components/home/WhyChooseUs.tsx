import { Shield, ClipboardCheck, CalendarCheck, ClipboardList, FileText, Hammer, Award, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-work.jpg";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

const proofCards = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully covered, code-compliant work.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Scope, No Surprises",
    description: "Detailed estimates, transparent line items.",
  },
  {
    icon: CalendarCheck,
    title: "Clean, On-Schedule Builds",
    description: "Professional timelines and communication.",
  },
];

const processSteps = [
  {
    icon: ClipboardList,
    label: "Walkthrough",
  },
  {
    icon: FileText,
    label: "Written Estimate",
  },
  {
    icon: Hammer,
    label: "Build & Final Walk",
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
            Why Homeowners Trust 14er
          </h2>
          <p className="text-base md:text-lg text-mountain-slate max-w-2xl mx-auto">
            Trusted expertise, clear estimates, and professional build-outs.
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          {/* Mobile: Image first */}
          <AnimatedSection delay={0.2} className="mb-8 md:hidden">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={teamImage}
                  alt="Active jobsite in the Colorado Rockies"
                  className="w-full h-64 object-cover"
                />
              </div>
              {/* Circular badge */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                <span className="text-xl font-bold leading-none">15+</span>
                <span className="text-[10px] font-medium leading-tight">Years</span>
                <span className="text-[10px] font-medium leading-tight">Experience</span>
              </div>
            </div>
            <p className="text-sm text-mountain-slate italic text-center mt-3">
              Active jobsite in the Colorado Rockies
            </p>
          </AnimatedSection>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Proof Cards */}
            <StaggerContainer className="space-y-4 order-2 md:order-1">
              {proofCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="bg-white rounded-xl p-5 shadow-soft hover:shadow-elevated transition-all duration-300 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-mountain-charcoal mb-1">
                          {card.title}
                        </h3>
                        <p className="text-sm text-mountain-slate">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Right: Image with badge (Desktop only) */}
            <AnimatedSection delay={0.3} direction="right" className="hidden md:block order-1 md:order-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={teamImage}
                    alt="Active jobsite in the Colorado Rockies"
                    className="w-full h-[400px] lg:h-[380px] object-cover"
                  />
                </div>
                {/* Circular badge */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex flex-col items-center justify-center text-white shadow-lg border-4 border-white">
                  <span className="text-2xl font-bold leading-none">15+</span>
                  <span className="text-xs font-medium leading-tight">Years</span>
                  <span className="text-xs font-medium leading-tight">Experience</span>
                </div>
              </div>
              <p className="text-sm text-mountain-slate italic text-center mt-4">
                Active jobsite in the Colorado Rockies
              </p>
            </AnimatedSection>
          </div>

          {/* Process Strip */}
          <AnimatedSection delay={0.4} className="mt-10 md:mt-14">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-soft">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === processSteps.length - 1;
                  return (
                    <div key={index} className="flex items-center gap-4 sm:gap-6 md:gap-10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <span className="text-sm md:text-base font-medium text-mountain-charcoal whitespace-nowrap">
                          {step.label}
                        </span>
                      </div>
                      {!isLast && (
                        <ChevronRight className="hidden sm:block w-5 h-5 text-mountain-slate/50" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.5} className="mt-8 md:mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/contact">
                  Get a Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-charcoal hover:bg-charcoal/90 text-white border-charcoal font-semibold px-8 py-6 text-base transition-all duration-300"
              >
                <Link to="/services">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
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
