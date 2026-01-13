import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, CheckCircle2, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import denverImage from "@/assets/denver-skyline.jpg";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarMike from "@/assets/avatar-mike.jpg";
import avatarMaria from "@/assets/avatar-maria.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
  };

  const reviews = [
    {
      name: "Sarah M.",
      project: "Kitchen Remodel",
      quote: "They transformed our outdated kitchen into something straight out of a magazine. Professional, clean, and on budget!",
      avatar: avatarSarah
    },
    {
      name: "Mike R.",
      project: "Concrete Patio",
      quote: "Best concrete work in Denver. Our new patio is beautiful and has held up perfectly through Colorado winters.",
      avatar: avatarMike
    },
    {
      name: "Maria L.",
      project: "Bathroom Renovation",
      quote: "From design to completion, the team was incredible. They made the whole process stress-free.",
      avatar: avatarMaria
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={denverImage} alt="Denver skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-mountain-charcoal/90 via-mountain-charcoal/80 to-mountain-charcoal/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-snow-white mb-6 text-shadow-strong">
            Let's Start <span className="text-primary">Your Project</span>
          </h1>
          <p className="text-snow-white/80 text-lg max-w-2xl mx-auto text-shadow-strong">Get in touch for a free consultation. We respond to all inquiries within 24 hours.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Quick Contact Row */}
            <div className="flex justify-center mb-8 text-sm">
              <a 
                href="mailto:info@14errenovations.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@14errenovations.com
              </a>
            </div>

            {/* Form Card */}
            <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-soft">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-center">Tell Us About Your Project</h2>
              <p className="text-muted-foreground text-center mb-8">We'll get back to you within 24 hours</p>
              
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input name="name" placeholder="Your Name *" required className="h-12" />
                    <Input name="email" type="email" placeholder="Email Address *" required className="h-12" />
                  </div>
                  <Input name="phone" type="tel" placeholder="Phone Number *" required className="h-12" />
                  <Select name="service" required>
                    <SelectTrigger className="h-12"><SelectValue placeholder="Service Interested In *" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remodeling">Kitchen/Bath Remodeling</SelectItem>
                      <SelectItem value="concrete">Concrete Work</SelectItem>
                      <SelectItem value="general">General Contracting</SelectItem>
                      <SelectItem value="hvac">HVAC Services</SelectItem>
                      <SelectItem value="electrical">Electrical Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea name="message" placeholder="Tell us about your project..." rows={5} />
                  <Button type="submit" size="lg" className="w-full h-14 text-base" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Get Your Free Quote"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-section-dark">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Trusted by Homeowners
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-10">
            Join 500+ Happy Denver Families
          </h2>

          {/* Review Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white/[0.08] backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  "{review.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white text-sm font-medium">{review.name}</div>
                    <div className="text-white/50 text-xs">{review.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Contact;
