import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import denverImage from "@/assets/denver-skyline.jpg";

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

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={denverImage} alt="Denver skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-mountain-charcoal/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-snow-white mb-6">
            Let's Start <span className="text-primary">Your Project</span>
          </h1>
          <p className="text-mountain-mist text-lg max-w-2xl mx-auto">Get in touch for a free consultation. We respond to all inquiries within 24 hours.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-soft">
              <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea name="message" placeholder="Tell us about your project..." rows={5} />
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a href="tel:+17201234567" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"><Phone className="h-6 w-6 text-primary" /></div>
                    <div><p className="text-sm text-muted-foreground">Phone</p><p className="font-semibold">(720) XXX-XXXX</p></div>
                  </a>
                  <a href="mailto:info@14errenovations.com" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"><Mail className="h-6 w-6 text-primary" /></div>
                    <div><p className="text-sm text-muted-foreground">Email</p><p className="font-semibold">info@14errenovations.com</p></div>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"><MapPin className="h-6 w-6 text-primary" /></div>
                    <div><p className="text-sm text-muted-foreground">Location</p><p className="font-semibold">Denver, Colorado</p></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"><Clock className="h-6 w-6 text-primary" /></div>
                    <div><p className="text-sm text-muted-foreground">Hours</p><p className="font-semibold">Mon-Fri 7am-6pm, Sat 8am-4pm</p></div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-primary/10 rounded-xl">
                <h3 className="font-heading font-bold mb-2">Serving the Denver Metro Area</h3>
                <p className="text-sm text-muted-foreground">Denver • Aurora • Lakewood • Arvada • Westminster • Thornton</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
