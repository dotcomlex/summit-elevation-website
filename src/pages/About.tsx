import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Heart, Target, Mountain } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";

const values = [
  { icon: Award, title: "Quality Craftsmanship", description: "Every nail, every beam, every detail meets our exacting standards." },
  { icon: Users, title: "Honest Communication", description: "Clear updates, transparent pricing, and no surprises along the way." },
  { icon: Heart, title: "Colorado Community Pride", description: "We live here, we build here, and we care about our neighbors." },
  { icon: Target, title: "Customer Satisfaction", description: "Your vision is our mission. We're not done until you're thrilled." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 topo-lines opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">About Us</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Building Colorado Dreams <span className="text-primary">Since 2009</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A local team dedicated to quality, community, and mountain-level craftsmanship.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img src={teamImage} alt="14er Renovations team" className="w-full" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-warm">
                <Mountain className="h-8 w-8 mb-2" />
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>14er Renovations was born from a simple belief: Colorado homeowners deserve contractors who understand our unique environment and share our love for this incredible place we call home.</p>
                <p>The name "14er" represents Colorado's majestic 14,000-foot peaks—a symbol of reaching new heights. Just as climbers prepare meticulously and execute with precision to summit these mountains, we approach every project with the same dedication and attention to detail.</p>
                <p>For over 15 years, we've served homeowners across Denver, Aurora, Lakewood, Arvada, Westminster, and Thornton. We're licensed, insured, and committed to building spaces that stand the test of time and Colorado's demanding climate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Values</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all">
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
