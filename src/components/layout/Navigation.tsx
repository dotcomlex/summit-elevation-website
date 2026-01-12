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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
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
              <Mountain className="h-8 w-8 md:h-10 md:w-10 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg md:text-xl tracking-tight text-foreground">
                14ER
              </span>
              <span className="font-heading text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground -mt-1">
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
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
              className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(720) XXX-XXXX</span>
            </a>

            <Button asChild className="font-semibold">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <a
              href="tel:+17201234567"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-16 md:top-20 bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 ease-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <li
                key={link.path}
                style={{ animationDelay: `${index * 50}ms` }}
                className={cn(isOpen && "animate-fade-up")}
              >
                <Link
                  to={link.path}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-border">
            <Button asChild className="w-full font-semibold" size="lg">
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
