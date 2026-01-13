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
    <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden">
      {/* Match "Our Work" section background exactly */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#0a0f1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
      
      {/* Headline Section */}
      <div className="relative z-10 text-center pb-10">
        <p className="text-sm text-white/60 italic">
          Trusted by Industry Leaders
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
          Colorado's Premier Partners
        </h2>
      </div>

      {/* Logo Slider */}
      <div className="relative z-10">
        <ProgressiveBlur direction="left" bgColor="#0a1628" className="z-20" />

        <InfiniteSlider duration={30} gap={40} className="py-4">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center px-6 py-4 rounded-xl bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto sm:h-12 object-contain"
              />
            </div>
          ))}
        </InfiniteSlider>

        <ProgressiveBlur direction="right" bgColor="#0a0f1a" className="z-20" />
      </div>
    </section>
  );
}
