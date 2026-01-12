import { Shield, Award, ThumbsUp, Clock, Mountain, Wrench } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed in Colorado with comprehensive insurance coverage for your protection.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Over a decade and a half of trusted service across the Denver Metro area.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description: "We stand behind our work with industry-leading warranties and craftsmanship.",
  },
  {
    icon: Clock,
    title: "Free Estimates",
    description: "No-obligation consultations and detailed quotes for your project.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden scroll-mt-20">
      {/* Subtle Texture Background */}
      <div className="absolute inset-0 texture-dots opacity-40" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-alpine/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-sky-pale/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built for Colorado,
              <span className="text-primary"> Trusted by Homeowners</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              When you work with 14er Renovations, you're partnering with a team that 
              understands Colorado's unique building challenges. From altitude-resistant 
              materials to weather-proof construction, we build to last.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:border-alpine/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-alpine/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-alpine" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Colorado Pride */}
            <div className="mt-8 flex items-center gap-3 p-4 bg-mountain-charcoal/5 rounded-xl">
              <Wrench className="h-5 w-5 text-primary" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Colorado-tested quality:</span> Every project built to handle 
                Front Range weather conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
