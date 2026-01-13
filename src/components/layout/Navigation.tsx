import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-black"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Mountain className={cn(
                "h-8 w-8 md:h-10 md:w-10 transition-all group-hover:scale-110",
                isScrolled ? "text-primary" : "text-primary"
              )} />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-heading font-extrabold text-lg md:text-xl tracking-tight transition-colors",
                isScrolled ? "text-foreground" : "text-snow-white"
              )}>
                14ER
              </span>
              <span className={cn(
                "font-heading text-[10px] md:text-xs tracking-[0.2em] -mt-1 transition-colors",
                isScrolled ? "text-muted-foreground" : "text-snow-white/70"
              )}>
                RENOVATIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "relative px-4 py-2 font-medium text-sm transition-colors rounded-md",
                      location.pathname === link.path
                        ? "text-primary"
                        : isScrolled 
                          ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                          : "text-snow-white/90 hover:text-snow-white hover:bg-white/10"
                    )}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Phone CTA */}
            <a
              href="tel:+17201234567"
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors",
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-snow-white hover:text-primary"
              )}
            >
              <Phone className="h-4 w-4" />
              <span>(720) XXX-XXXX</span>
            </a>

            <Button asChild className="font-semibold">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+17201234567"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-md transition-colors",
                isScrolled 
                  ? "text-foreground hover:bg-muted" 
                  : "text-snow-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Solid Dark Panel */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-16 md:top-20 z-40 transition-all duration-300 ease-out",
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-mountain-charcoal/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={cn(
          "relative bg-mountain-charcoal border-b border-white/10 transition-transform duration-300",
          isOpen ? "translate-y-0" : "-translate-y-4"
        )}>
          <div className="container mx-auto px-4 py-8">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-snow-white hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>

            <ul className="flex flex-col gap-2 mt-4">
              {navLinks.map((link, index) => (
                <li
                  key={link.path}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={cn(isOpen && "animate-fade-up")}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-5 py-4 rounded-xl font-medium text-lg transition-colors",
                      location.pathname === link.path
                        ? "bg-primary/20 text-primary"
                        : "text-snow-white hover:bg-white/10"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <Button asChild className="w-full font-semibold h-14 text-base" size="lg">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Your Free Quote
                </Link>
              </Button>
              
              <a
                href="tel:+17201234567"
                className="flex items-center justify-center gap-3 mt-4 py-4 text-snow-white hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(720) XXX-XXXX</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
