import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <section className="relative py-8 sm:py-10 overflow-hidden bg-muted/30">
      {/* Subtle texture */}
      <div className="absolute inset-0 texture-paper opacity-20" />
      
      {/* Minimal label */}
      <div className="relative z-10 text-center mb-4">
        <p className="text-xs uppercase tracking-wider text-mountain-slate/60 font-medium">
          Trusted Partners
        </p>
      </div>

      {/* Logo Slider */}
      <div className="relative z-10">
        <ProgressiveBlur direction="left" bgColor="rgb(244, 244, 245)" className="z-20" />

        <InfiniteSlider duration={35} durationOnHover={80} gap={48} className="py-2">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center px-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </InfiniteSlider>

        <ProgressiveBlur direction="right" bgColor="rgb(244, 244, 245)" className="z-20" />
      </div>
    </section>
  );
}
