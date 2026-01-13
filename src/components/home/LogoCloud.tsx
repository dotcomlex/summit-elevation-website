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
    <section className="relative bg-[hsl(var(--section-dark))] py-12 sm:py-16 overflow-hidden">
      {/* Subtle texture overlay for elegance */}
      <div className="absolute inset-0 texture-grain opacity-20" />
      
      {/* Headline Section */}
      <div className="relative z-10 text-center pb-8">
        <p className="text-sm text-white/60 italic">
          Trusted by Industry Leaders
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
          Colorado's Premier Partners
        </h2>
      </div>

      {/* Logo Slider */}
      <div className="relative">
        <ProgressiveBlur direction="left" className="z-20" />

        <InfiniteSlider duration={25} gap={48} className="py-4">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 backdrop-blur-sm ring-1 ring-white/10 hover:bg-white/15 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto sm:h-10 object-contain"
              />
            </div>
          ))}
        </InfiniteSlider>

        <ProgressiveBlur direction="right" className="z-20" />
      </div>
    </section>
  );
}
