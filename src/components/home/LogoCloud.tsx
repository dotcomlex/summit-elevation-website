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
    <div className="relative bg-muted/30 py-6 sm:py-8">
      <div className="relative">
        <ProgressiveBlur
          direction="left"
          blurLayers={8}
          blurIntensity={0.25}
          className="z-10"
        />

        <InfiniteSlider gap={48} speed={40} className="py-2">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-10 w-auto sm:h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </InfiniteSlider>

        <ProgressiveBlur
          direction="right"
          blurLayers={8}
          blurIntensity={0.25}
          className="z-10"
        />
      </div>
    </div>
  );
}
