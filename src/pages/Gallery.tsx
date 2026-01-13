import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Bath, ChefHat, Grid3X3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

// Import hero/CTA background
import heroImage from "@/assets/services-hero-bg.jpg";

// Import all gallery images
import bathroom1 from "@/assets/gallery/bathroom-1.jpg";
import bathroom2 from "@/assets/gallery/bathroom-2.jpg";
import bathroom3 from "@/assets/gallery/bathroom-3.jpg";
import bathroom4 from "@/assets/gallery/bathroom-4.jpg";
import bathroom5 from "@/assets/gallery/bathroom-5.jpg";
import bathroom6 from "@/assets/gallery/bathroom-6.jpg";
import bathroom7 from "@/assets/gallery/bathroom-7.jpg";
import bathroom8 from "@/assets/gallery/bathroom-8.jpg";
import bathroom9 from "@/assets/gallery/bathroom-9.jpg";
import bathroom10 from "@/assets/gallery/bathroom-10.jpg";
import bathroom11 from "@/assets/gallery/bathroom-11.jpg";
import bathroom12 from "@/assets/gallery/bathroom-12.jpg";
import bathroom13 from "@/assets/gallery/bathroom-13.jpg";
import bathroom14 from "@/assets/gallery/bathroom-14.jpg";
import bathroom15 from "@/assets/gallery/bathroom-15.jpg";
import bathroom16 from "@/assets/gallery/bathroom-16.jpg";
import bathroomFinished from "@/assets/gallery/bathroom-finished.jpg";
import kitchen1 from "@/assets/gallery/kitchen-1.jpg";
import kitchen2 from "@/assets/gallery/kitchen-2.jpg";
import kitchen3 from "@/assets/gallery/kitchen-3.jpg";
import kitchen4 from "@/assets/gallery/kitchen-4.jpg";
import kitchenFinished from "@/assets/gallery/kitchen-finished.jpg";

interface GalleryImage {
  id: string;
  category: "bathroom" | "kitchen";
  src: string;
  alt: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  // Bathroom images
  { id: "bath-1", category: "bathroom", src: bathroom1, alt: "Modern bathroom with marble shower", title: "Marble Master Bath" },
  { id: "bath-2", category: "bathroom", src: bathroom2, alt: "Elegant bathroom vanity design", title: "Elegant Vanity Suite" },
  { id: "bath-3", category: "bathroom", src: bathroom3, alt: "Contemporary bathroom remodel", title: "Contemporary Bath" },
  { id: "bath-4", category: "bathroom", src: bathroom4, alt: "Luxury shower with glass enclosure", title: "Luxury Glass Shower" },
  { id: "bath-5", category: "bathroom", src: bathroom5, alt: "Custom bathroom tile work", title: "Custom Tile Design" },
  { id: "bath-6", category: "bathroom", src: bathroom6, alt: "Spa-inspired bathroom", title: "Spa Retreat" },
  { id: "bath-7", category: "bathroom", src: bathroom7, alt: "Modern freestanding tub bathroom", title: "Freestanding Tub Suite" },
  { id: "bath-8", category: "bathroom", src: bathroom8, alt: "Walk-in shower with bench", title: "Walk-In Shower" },
  { id: "bath-9", category: "bathroom", src: bathroom9, alt: "Marble shower with custom fixtures", title: "Marble Shower Detail" },
  { id: "bath-10", category: "bathroom", src: bathroom10, alt: "Bathtub with glass door", title: "Glass Door Tub" },
  { id: "bath-11", category: "bathroom", src: bathroom11, alt: "Vanity and shower view", title: "Open Vanity Layout" },
  { id: "bath-12", category: "bathroom", src: bathroom12, alt: "Luxury tub detail", title: "Luxury Tub Detail" },
  { id: "bath-13", category: "bathroom", src: bathroom13, alt: "Full shower with chandelier", title: "Chandelier Master Bath" },
  { id: "bath-14", category: "bathroom", src: bathroom14, alt: "Shower with built-in seating", title: "Shower with Seating" },
  { id: "bath-15", category: "bathroom", src: bathroom15, alt: "Double vanity hallway", title: "Double Vanity Hall" },
  { id: "bath-16", category: "bathroom", src: bathroom16, alt: "Full master bath overview", title: "Master Bath Overview" },
  { id: "bath-finished", category: "bathroom", src: bathroomFinished, alt: "Luxury finished bathroom with marble and freestanding tub", title: "Luxury Spa Bathroom" },
  // Kitchen images
  { id: "kitchen-1", category: "kitchen", src: kitchen1, alt: "Before and after kitchen transformation with white cabinets", title: "White Cabinet Transformation" },
  { id: "kitchen-2", category: "kitchen", src: kitchen2, alt: "Kitchen island with wood cabinetry and pendant lights", title: "Rustic Kitchen Island" },
  { id: "kitchen-3", category: "kitchen", src: kitchen3, alt: "White cabinet kitchen transformation before and after", title: "White Cabinet Remodel" },
  { id: "kitchen-4", category: "kitchen", src: kitchen4, alt: "Sage green kitchen renovation before and after", title: "Sage Green Kitchen" },
  { id: "kitchen-finished", category: "kitchen", src: kitchenFinished, alt: "Beautiful finished modern kitchen with white cabinets and island", title: "Modern Kitchen Complete" },
];

type CategoryFilter = "all" | "bathroom" | "kitchen";

const categories: { id: CategoryFilter; label: string; icon: typeof Grid3X3 }[] = [
  { id: "all", label: "All Projects", icon: Grid3X3 },
  { id: "bathroom", label: "Bathroom", icon: Bath },
  { id: "kitchen", label: "Kitchen", icon: ChefHat },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImageIndex((prev) => 
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox("prev");
    if (e.key === "ArrowRight") navigateLightbox("next");
  };

  return (
    <Layout>
      {/* Hero Section - Reduced padding on mobile only */}
      <section className="relative min-h-[35vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Gallery of completed renovation projects"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mountain-charcoal/70 via-mountain-charcoal/50 to-mountain-charcoal/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45" />
        </div>

        {/* Content - Reduced mobile padding */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-28 pb-8 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-4"
          >
            — Our Portfolio —
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-[clamp(1.5rem,5vw,3.5rem)] leading-[1.15] font-bold text-snow-white mb-3 sm:mb-6 max-w-4xl mx-auto text-shadow-strong"
          >
            Crafted with Precision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-snow-white/80 text-xs sm:text-lg md:text-xl max-w-2xl mx-auto text-shadow-strong"
          >
            Browse our collection of completed projects and see the quality craftsmanship 
            that sets 14ER Renovations apart.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs - Clean, minimal design */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-3 sm:py-4 gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              const count = category.id === "all" 
                ? galleryImages.length 
                : galleryImages.filter(img => img.category === category.id).length;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    relative flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 
                    rounded-full font-medium text-xs sm:text-sm
                    transition-all duration-300 whitespace-nowrap min-h-[44px]
                    ${isActive 
                      ? "bg-foreground/5 text-foreground border border-foreground/15" 
                      : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} />
                  <span className="hidden xs:inline">{category.label}</span>
                  <span className="xs:hidden">{category.id === "all" ? "All" : category.label}</span>
                  {isActive && (
                    <span className="ml-1 px-1.5 py-0.5 bg-foreground/10 rounded-full text-[10px] sm:text-xs font-normal">
                      {count}
                    </span>
                  )}
                  {/* Subtle underline indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Mobile optimized */}
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-3 sm:px-4">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg sm:rounded-xl bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-snow-white font-semibold text-xs sm:text-sm md:text-base">{image.title}</p>
                        <p className="text-snow-white/70 text-xs capitalize">{image.category} Remodel</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - With background image matching Services page */}
      <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/90 via-mountain-charcoal/70 to-mountain-charcoal/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-snow-white mb-3 sm:mb-4 text-shadow-strong">
              Ready to Transform Your Space?
            </h2>
            <p className="text-snow-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto text-shadow-strong">
              Let's bring your vision to life. Get a free consultation and estimate from our expert team.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 shadow-warm">
              <a href="tel:+17208189678">
                Get Your Free Estimate <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentImageIndex]?.src}
                alt={filteredImages[currentImageIndex]?.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <p className="text-white font-semibold text-sm sm:text-lg">{filteredImages[currentImageIndex]?.title}</p>
                <p className="text-white/70 text-xs sm:text-sm capitalize">{filteredImages[currentImageIndex]?.category} Remodel</p>
              </div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
