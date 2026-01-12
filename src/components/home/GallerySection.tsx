import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";

import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryPatio from "@/assets/gallery-patio.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryKitchen1 from "@/assets/gallery-kitchen-1.jpg";
import galleryBathroom1 from "@/assets/gallery-bathroom-1.jpg";
import galleryPatio1 from "@/assets/gallery-patio-1.jpg";
import galleryExterior1 from "@/assets/gallery-exterior-1.jpg";

export function GallerySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [radius, setRadius] = useState(600);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Responsive radius (smaller values for square cards)
  useEffect(() => {
    const update = () => setRadius(window.innerWidth < 640 ? 320 : 520);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  // IntersectionObserver to detect when section is in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting && entry.intersectionRatio > 0.25);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const items: GalleryItem[] = useMemo(
    () => [
      { common: "Kitchen Remodel", binomial: "Denver, CO", photo: { url: galleryKitchen, text: "Modern kitchen remodel", by: "14er Renovations" } },
      { common: "Bathroom Remodel", binomial: "Boulder, CO", photo: { url: galleryBathroom, text: "Luxury bathroom renovation", by: "14er Renovations" } },
      { common: "Stamped Patio", binomial: "Lakewood, CO", photo: { url: galleryPatio, text: "Stamped concrete patio", by: "14er Renovations" } },
      { common: "Home Renovation", binomial: "Aurora, CO", photo: { url: galleryExterior, text: "Complete home exterior", by: "14er Renovations" } },
      { common: "Kitchen Update", binomial: "Arvada, CO", photo: { url: galleryKitchen1, text: "Kitchen update project", by: "14er Renovations" } },
      { common: "Spa Bathroom", binomial: "Littleton, CO", photo: { url: galleryBathroom1, text: "Spa-style bathroom", by: "14er Renovations" } },
      { common: "Outdoor Living", binomial: "Thornton, CO", photo: { url: galleryPatio1, text: "Outdoor patio space", by: "14er Renovations" } },
      { common: "Exterior Work", binomial: "Centennial, CO", photo: { url: galleryExterior1, text: "Exterior renovation", by: "14er Renovations" } },
    ],
    []
  );

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const nextImage = useCallback(() => setLightboxIndex((p) => (p + 1) % items.length), [items.length]);
  const prevImage = useCallback(() => setLightboxIndex((p) => (p - 1 + items.length) % items.length), [items.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden md:min-h-screen"
    >
      {/* Premium multi-layer background */}
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#0a0f1a]" />
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
      
      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(at 20% 80%, rgba(251,146,60,0.15) 0%, transparent 50%),
            radial-gradient(at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 50%),
            radial-gradient(at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 60%)
          `,
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
      <div className="relative flex flex-col items-center pt-16 pb-12 px-4 md:min-h-screen md:py-16">
        {/* Header */}
        <AnimatedSection className="text-center mb-2 md:mb-16 relative z-40">
          <span className="inline-block text-primary font-semibold text-xs md:text-sm tracking-widest uppercase mb-2">
            Our Work
          </span>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Work That Speaks For Itself
          </h2>
          <p className="text-white/70 text-sm md:text-base mt-2 max-w-md mx-auto">
            A quick look at recent projects across Colorado.
          </p>
        </AnimatedSection>

        {/* Circular Gallery */}
        <CircularGallery
          items={items}
          radius={radius}
          autoRotateSpeed={-0.035}
          isActive={isActive}
          onItemClick={openLightbox}
          className="relative z-10 h-[340px] sm:h-[420px] md:h-[480px]"
        />

        {/* Instruction */}
        <AnimatedSection delay={0.2} className="text-center mt-2 md:mt-16 relative z-40">
          <p className="text-white/40 text-xs md:text-sm tracking-wide">
            Auto-rotates • Swipe left or right to explore • Tap any photo to view
          </p>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="mt-6 relative z-40">
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base shadow-lg btn-shine"
          >
            <Link to="/contact">
              Get a Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image container */}
          <div 
            className="relative max-w-5xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[lightboxIndex].photo.url}
              alt={items[lightboxIndex].photo.text}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-lg">
                    {items[lightboxIndex].common}
                  </p>
                  <p className="text-white/60 text-sm">
                    {items[lightboxIndex].binomial}
                  </p>
                </div>
                <span className="text-white/50 text-sm">
                  {lightboxIndex + 1} / {items.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
