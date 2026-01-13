import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo14er from "@/assets/logo-14er.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const location = useLocation();

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

  // Show floating CTA after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header - Absolute overlay, transparent */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-6">
          
          {/* Desktop Navigation - Logo left, nav right */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center">
              <img
                src={logo14er}
                alt="14ER Renovations"
                className="h-24 xl:h-28 w-auto drop-shadow-xl"
              />
            </Link>

            {/* Desktop Nav Links - Right */}
            <nav className="flex items-center">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={cn(
                        "relative px-4 py-2 font-medium text-sm transition-colors rounded-md",
                        location.pathname === link.path
                          ? "text-primary"
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
            </nav>
          </div>

          {/* Mobile Header - Logo center, hamburger right */}
          <div className="lg:hidden grid grid-cols-3 items-center">
            {/* Empty left column for balance */}
            <div />

            {/* Centered Logo */}
            <Link to="/" className="flex items-center justify-self-center">
              <img
                src={logo14er}
                alt="14ER Renovations"
                className="h-24 sm:h-28 w-auto drop-shadow-xl"
              />
            </Link>

            {/* Hamburger Menu Button - Right */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="justify-self-end flex items-center justify-center w-11 h-11 rounded-lg bg-white/90 shadow-md text-mountain-charcoal hover:bg-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Slide down panel */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 z-50 transition-all duration-300 ease-out",
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            "relative bg-black transition-transform duration-300",
            isOpen ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <div className="container mx-auto px-4 py-8">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-snow-white hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Logo in mobile menu */}
            <div className="flex justify-center mb-6">
              <img
                src={logo14er}
                alt="14ER Renovations"
                className="h-16 w-auto"
              />
            </div>

            <ul className="flex flex-col gap-2">
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
                <a href="tel:+17208189678" onClick={() => setIsOpen(false)}>
                  Get Your Free Quote
                </a>
              </Button>

              <a
                href="tel:+17208189678"
                className="flex items-center justify-center gap-3 mt-4 py-4 text-snow-white hover:text-primary transition-colors"
              >
                <span className="font-semibold">(720) 818-9678</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA Bar - visible but not intrusive */}
      <a
        href="tel:+17208189678"
        className={cn(
          "fixed bottom-6 right-6 z-40",
          "bg-primary hover:bg-primary/90",
          "text-primary-foreground font-semibold text-sm",
          "px-6 py-3 rounded-full",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-300 hover:scale-105",
          showFloatingCTA 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        Get a Free Quote
      </a>
    </>
  );
}
