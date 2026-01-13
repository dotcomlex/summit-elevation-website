import { LucideIcon } from "lucide-react";

interface ServiceHeroProps {
  icon: LucideIcon;
  title: string;
  highlight: string;
  description: string;
  backgroundImage: string;
}

export function ServiceHero({ icon: Icon, title, highlight, description, backgroundImage }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark Overlay - Stronger at top for transparent header */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-mountain-charcoal/90 via-mountain-charcoal/75 to-mountain-charcoal/60" />
      
      {/* Content - Extra top padding for transparent header */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-40 pb-24 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6">
          <Icon className="h-8 w-8" />
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-snow-white mb-6">
          {title} <span className="text-primary">{highlight}</span>
        </h1>
        <p className="text-mountain-mist text-lg md:text-xl max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
