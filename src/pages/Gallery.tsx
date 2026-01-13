import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Bath, ChefHat, Grid3X3, ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
import workersTile from "@/assets/gallery/workers-tile.jpg";

// Work in Progress images
import wipTileInstall from "@/assets/gallery/wip-tile-install.jpg";
import wipCabinetInstall from "@/assets/gallery/wip-cabinet-install.jpg";
import wipCountertopMeasure from "@/assets/gallery/wip-countertop-measure.jpg";

interface GalleryImage {
  id: string;
  category: "bathroom" | "kitchen";
  src: string;
  alt: string;
  title: string;
}

interface WIPImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
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
  { id: "bath-tile-work", category: "bathroom", src: workersTile, alt: "Workers installing ceramic tile in bathroom", title: "Tile Installation" },
  // Kitchen images
  { id: "kitchen-1", category: "kitchen", src: kitchen1, alt: "Before and after kitchen transformation with white cabinets", title: "White Cabinet Transformation" },
  { id: "kitchen-2", category: "kitchen", src: kitchen2, alt: "Kitchen island with wood cabinetry and pendant lights", title: "Rustic Kitchen Island" },
  { id: "kitchen-3", category: "kitchen", src: kitchen3, alt: "White cabinet kitchen transformation before and after", title: "White Cabinet Remodel" },
  { id: "kitchen-4", category: "kitchen", src: kitchen4, alt: "Sage green kitchen renovation before and after", title: "Sage Green Kitchen" },
  { id: "kitchen-finished", category: "kitchen", src: kitchenFinished, alt: "Beautiful finished modern kitchen with white cabinets and island", title: "Modern Kitchen Complete" },
];

const workInProgressImages: WIPImage[] = [
  { 
    id: "wip-tile", 
    src: wipTileInstall, 
    alt: "Professional worker installing subway tiles in bathroom", 
    title: "Precision Tile Work",
    description: "Every tile placed with care"
  },
  { 
    id: "wip-cabinet", 
    src: wipCabinetInstall, 
    alt: "Two contractors installing kitchen cabinets", 
    title: "Cabinet Installation",
    description: "Expert teamwork in action"
  },
  { 
    id: "wip-countertop", 
    src: wipCountertopMeasure, 
    alt: "Craftsman measuring countertop for precision fit", 
    title: "Precision Measurements",
    description: "Measure twice, cut once"
  },
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-20 text-center">
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
      <section className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
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

      {/* Work in Progress Section */}
      <section className="py-10 sm:py-14 md:py-20 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-10"
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2">
              <Wrench className="w-4 h-4" />
              <span>Behind The Scenes</span>
              <Wrench className="w-4 h-4" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Work in Progress
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Our skilled craftsmen bringing your vision to life, one detail at a time.
            </p>
          </motion.div>
          
          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {workInProgressImages.map((image, index) => (
              <motion.div 
                key={image.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-xl group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption overlay - always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="text-snow-white font-semibold text-sm sm:text-base">{image.title}</p>
                  <p className="text-snow-white/70 text-xs sm:text-sm">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <Button asChild size="lg" className="text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all duration-300">
              <Link to="/contact">
                Get Your Free Estimate <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 text-xs sm:text-sm text-snow-white/80">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                15+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Free Estimates
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal - 1:1 aspect ratio images */}
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
            {/* Close Button - Larger touch target on mobile */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-3 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons - Larger on mobile */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="absolute left-2 sm:left-4 z-50 p-3 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="absolute right-2 sm:right-4 z-50 p-3 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container - 1:1 Aspect Ratio */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="w-[85vw] max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] aspect-square relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentImageIndex]?.src}
                alt={filteredImages[currentImageIndex]?.alt}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <h3 className="text-snow-white font-semibold text-base sm:text-lg md:text-xl">
                  {filteredImages[currentImageIndex]?.title}
                </h3>
                <p className="text-snow-white/70 text-xs sm:text-sm capitalize">
                  {filteredImages[currentImageIndex]?.category} Remodel
                </p>
              </div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-xs sm:text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
