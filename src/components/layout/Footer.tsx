import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight, Mountain } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const serviceAreas = [
  "Denver",
  "Boulder",
  "Lakewood",
  "Aurora",
  "Arvada",
  "Westminster",
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-charcoal-dark text-white">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <Mountain className="h-7 w-7 text-primary" />
              <span className="text-xl md:text-2xl font-bold">
                <span className="text-primary">14er</span>
                <span className="text-white"> Renovations</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Denver's premier home renovation contractor. We transform Colorado homes with quality
              craftsmanship and exceptional service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+13035551234"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                (303) 555-1234
              </a>
              <a
                href="mailto:info@14errenovations.com"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@14errenovations.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Denver, CO 80202</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-base font-bold mb-4">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/60">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-base font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="bg-white/10 hover:bg-primary p-2.5 rounded-lg transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} 14er Renovations. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
