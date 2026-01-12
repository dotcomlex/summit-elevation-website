interface GalleryImage {
  src: string;
  alt: string;
}

interface ServiceGalleryProps {
  images: GalleryImage[];
  title?: string;
}

export function ServiceGallery({ images, title = "Our Recent Work" }: ServiceGalleryProps) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-mountain-charcoal/0 group-hover:bg-mountain-charcoal/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
