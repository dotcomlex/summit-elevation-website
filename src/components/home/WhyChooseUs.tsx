import { Shield, Clock, Award, Users, Mountain, Wrench } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed contractors with comprehensive insurance for your peace of mind.",
    color: "alpine",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your schedule with realistic timelines and consistent communication.",
    color: "evergreen",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Premium materials and expert craftsmanship backed by our satisfaction guarantee.",
    color: "alpine",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "15+ years of experience renovating homes throughout the Denver metro area.",
    color: "evergreen",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-snow-soft via-cream to-cream overflow-hidden">
      {/* Subtle mountain silhouette in background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg
          viewBox="0 0 1200 400"
          className="w-full h-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <path
            d="M0,400 L0,250 L200,180 L350,220 L500,120 L650,200 L800,100 L950,180 L1100,140 L1200,200 L1200,400 Z"
            fill="currentColor"
            className="text-mountain-charcoal"
          />
        </svg>
      </div>

      {/* Texture overlay */}
      <div className="absolute inset-0 texture-paper" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-alpine/10 text-alpine px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Why 14er</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mountain-charcoal mb-4">
            Why Choose 14er Renovations?
          </h2>
          <p className="text-lg text-mountain-slate max-w-2xl mx-auto">
            Colorado's trusted renovation partner since 2009, delivering exceptional results on every project
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={teamImage}
                alt="Professional 14er Renovations team at work"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-primary text-primary-foreground p-4 md:p-6 rounded-2xl shadow-warm">
              <div className="flex items-center gap-3">
                <Mountain className="h-8 w-8 md:h-10 md:w-10" />
                <div>
                  <p className="text-2xl md:text-3xl font-bold">15+</p>
                  <p className="text-xs md:text-sm opacity-90">Years in Colorado</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-alpine/20 rounded-2xl -z-10" />
          </div>

          {/* Features Side */}
          <div className="order-1 lg:order-2">
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isAlpine = feature.color === "alpine";

                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/30"
                  >
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-colors duration-300 ${
                        isAlpine
                          ? "bg-alpine/10 text-alpine group-hover:bg-alpine group-hover:text-white"
                          : "bg-evergreen/10 text-evergreen group-hover:bg-evergreen group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-mountain-charcoal mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-mountain-slate text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Colorado Pride */}
            <div className="mt-8 flex items-center gap-3 p-4 bg-mountain-charcoal/5 rounded-xl">
              <Wrench className="h-5 w-5 text-evergreen flex-shrink-0" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Colorado-tested quality:</span> Every project built to handle 
                Front Range weather conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider to dark testimonials section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 mountain-divider-dark" />
    </section>
  );
}
