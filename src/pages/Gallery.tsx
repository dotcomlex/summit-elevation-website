import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Bath, ChefHat, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

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
import kitchen1 from "@/assets/gallery/kitchen-1.jpg";
import kitchen2 from "@/assets/gallery/kitchen-2.jpg";

interface GalleryImage {
  id: string;
  category: "bathroom" | "kitchen";
  src: string;
  alt: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
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
  { id: "kitchen-1", category: "kitchen", src: kitchen1, alt: "Modern kitchen with white cabinets", title: "White Cabinet Kitchen" },
  { id: "kitchen-2", category: "kitchen", src: kitchen2, alt: "Kitchen island with pendant lights", title: "Kitchen Island Design" },
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
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-mountain-charcoal to-mountain-charcoal/95">
        <div className="absolute inset-0 bg-[url('/paper-texture-bg.jpg')] opacity-5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6"
          >
            Our Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-snow-white mb-6"
          >
            Crafted with Precision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-snow-white/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Browse our collection of completed projects and see the quality craftsmanship 
            that sets 14ER Renovations apart.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-4 gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm
                    transition-all duration-300 whitespace-nowrap
                    ${isActive 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                  {isActive && (
                    <span className="ml-1 px-2 py-0.5 bg-primary-foreground/20 rounded-full text-xs">
                      {filteredImages.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-snow-white font-semibold text-sm md:text-base">{image.title}</p>
                        <p className="text-snow-white/70 text-xs md:text-sm capitalize">{image.category} Remodel</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Let's bring your vision to life. Get a free consultation and estimate from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="font-semibold px-8 h-14 text-base">
                <Link to="/contact">Get Your Free Estimate</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold px-8 h-14 text-base">
                <a href="tel:+17201234567">Call (720) XXX-XXXX</a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                20+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Free Estimates
              </span>
            </div>
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
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="max-w-[90vw] max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentImageIndex]?.src}
                alt={filteredImages[currentImageIndex]?.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <p className="text-white font-semibold text-lg">{filteredImages[currentImageIndex]?.title}</p>
                <p className="text-white/70 capitalize">{filteredImages[currentImageIndex]?.category} Remodel</p>
              </div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
              {currentImageIndex + 1} of {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
