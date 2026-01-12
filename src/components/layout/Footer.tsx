import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Mountain } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const serviceAreas = [
  "Denver",
  "Aurora",
  "Lakewood",
  "Arvada",
  "Westminster",
  "Thornton",
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
];

export function Footer() {
  return (
    <footer className="bg-mountain-charcoal text-snow-soft">
      {/* Mountain Divider */}
      <div className="h-16 md:h-24 bg-background relative overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0,120 L200,60 L350,90 L500,40 L650,70 L800,30 L950,60 L1100,20 L1200,50 L1200,120 Z"
            className="fill-mountain-charcoal"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-tight text-snow-white">
                  14ER
                </span>
                <span className="font-heading text-[10px] tracking-[0.2em] text-mountain-mist -mt-1">
                  RENOVATIONS
                </span>
              </div>
            </Link>
            <p className="text-mountain-mist text-sm leading-relaxed mb-6">
              Building Colorado dreams with precision, quality, and mountain-inspired craftsmanship. 
              Your trusted partner for renovations and construction across the Denver Metro area.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-mountain-stone/50 text-mountain-mist hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-snow-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17201234567"
                  className="flex items-center gap-3 text-mountain-mist hover:text-primary transition-colors group"
                >
                  <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span>(720) XXX-XXXX</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@14errenovations.com"
                  className="flex items-center gap-3 text-mountain-mist hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span>info@14errenovations.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-mountain-mist">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Denver, Colorado</span>
                </div>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-mountain-stone/30">
              <p className="text-sm text-mountain-mist">
                <span className="text-snow-white font-medium">Hours:</span>
                <br />
                Mon-Fri: 7am - 6pm
                <br />
                Sat: 8am - 4pm
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading font-bold text-snow-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-mountain-mist hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 className="font-heading font-bold text-snow-white mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-mountain-mist">
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-mountain-stone/30 rounded-lg">
              <p className="text-xs text-mountain-mist">
                <span className="text-primary font-semibold">Licensed & Insured</span>
                <br />
                Proudly serving the entire Denver Metro area for 15+ years
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-mountain-stone/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-mountain-mist text-center md:text-left">
              © {new Date().getFullYear()} 14er Renovations. All rights reserved.
            </p>
            <p className="text-xs text-mountain-slate text-center md:text-right">
              Built for Colorado. Inspired by the peaks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
