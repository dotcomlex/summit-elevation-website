import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, MapPin, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryPatio from "@/assets/gallery-patio.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryKitchen1 from "@/assets/gallery-kitchen-1.jpg";
import galleryBathroom1 from "@/assets/gallery-bathroom-1.jpg";
import galleryPatio1 from "@/assets/gallery-patio-1.jpg";
import galleryExterior1 from "@/assets/gallery-exterior-1.jpg";

const galleryItems = [
  { id: 1, image: galleryKitchen, title: "Modern Kitchen Transformation", category: "Kitchen Remodel", location: "Denver, CO" },
  { id: 2, image: galleryBathroom, title: "Luxury Spa Bathroom", category: "Bathroom Remodel", location: "Boulder, CO" },
  { id: 3, image: galleryPatio, title: "Stamped Concrete Patio", category: "Concrete Flatwork", location: "Lakewood, CO" },
  { id: 4, image: galleryExterior, title: "Complete Home Renovation", category: "General Contracting", location: "Aurora, CO" },
];

const bentoItems = [
  { id: 5, image: galleryPatio1, title: "Outdoor Living Space", category: "Concrete Flatwork", location: "Westminster, CO" },
  { id: 6, image: galleryExterior1, title: "Craftsman Home Exterior", category: "General Contracting", location: "Highlands Ranch, CO" },
  { id: 7, image: galleryBathroom1, title: "Master Bath Remodel", category: "Bathroom Remodel", location: "Centennial, CO" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const onSelect = useCallback(() => { if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap()); }, [emblaApi]);

  useEffect(() => { if (!emblaApi) return; onSelect(); emblaApi.on("select", onSelect); return () => { emblaApi.off("select", onSelect); }; }, [emblaApi, onSelect]);

  return (
    <section className="relative py-16 md:py-24 bg-section-dark overflow-hidden">
      <div className="absolute inset-0 texture-grain" />
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Recent Projects</h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">Explore our latest renovation work across the Denver metro area</p>
        </AnimatedSection>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-10">
          {/* Featured Before/After Tile */}
          <div className="lg:col-span-7 aspect-[4/3] lg:aspect-auto lg:row-span-2 min-h-[300px] lg:min-h-[450px]">
            <BeforeAfterSlider
              beforeImage={galleryKitchen}
              afterImage={galleryKitchen1}
              beforeLabel="Before"
              afterLabel="After"
              className="w-full h-full shadow-xl"
            />
          </div>

          {/* Side Bento Tiles */}
          {bentoItems.map((item, index) => (
            <div
              key={index}
              className="lg:col-span-5 aspect-[16/9] lg:aspect-auto rounded-xl overflow-hidden shadow-lg group cursor-pointer relative"
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {/* Premium hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2.5 py-1 bg-primary/90 text-white text-xs font-medium rounded-full mb-2">{item.category}</span>
                  <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                  <div className="flex items-center gap-1 text-white/70 text-sm mt-1"><MapPin className="h-3 w-3" /><span>{item.location}</span></div>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"><Eye className="h-4 w-4 text-white" /></div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Carousel */}
        <div className="relative mb-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {galleryItems.map((item) => (
                <div key={item.id} className="flex-none w-[75%] sm:w-[60%] md:w-[45%] lg:w-[30%]">
                  <div className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg" onClick={() => setSelectedImage(item)}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="inline-block px-2 py-0.5 bg-primary/90 text-white text-xs font-medium rounded-full mb-1.5">{item.category}</span>
                          <div className="flex items-center gap-1 text-white/80 text-xs"><MapPin className="h-3 w-3" /><span>{item.location}</span></div>
                        </div>
                        <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"><Eye className="h-4 w-4 text-white" /></div>
                      </div>
                    </div>
                    <div className="p-4 bg-white/5">
                      <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Buttons */}
          <button onClick={scrollPrev} className="absolute left-2 md:-left-4 top-[40%] -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-colors z-10 border border-white/20"><ChevronLeft className="w-5 h-5 text-white" /></button>
          <button onClick={scrollNext} className="absolute right-2 md:-right-4 top-[40%] -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-colors z-10 border border-white/20"><ChevronRight className="w-5 h-5 text-white" /></button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">{galleryItems.map((_, i) => <button key={i} onClick={() => emblaApi?.scrollTo(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${selectedIndex === i ? "bg-primary w-8" : "bg-white/30 hover:bg-white/50"}`} />)}</div>
        </div>

        {/* Dual CTAs */}
        <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/10 border-white/30 hover:border-white/50 px-6 md:px-8 py-5 md:py-6 text-base w-full sm:w-auto">
            <Link to="/services">View More Projects<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-5 md:py-6 text-base shadow-lg btn-shine w-full sm:w-auto">
            <Link to="/contact">Get a Free Estimate<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </AnimatedSection>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" onClick={() => setSelectedImage(null)}><X className="w-6 h-6 text-white" /></button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
            <div className="text-center mt-4">
              <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full mb-2">{selectedImage.category}</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-white/70 flex items-center justify-center gap-2"><MapPin className="w-4 h-4" />{selectedImage.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
