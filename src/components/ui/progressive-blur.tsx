"use client";

import { cn } from "@/lib/utils";

type ProgressiveBlurProps = {
  direction?: "left" | "right" | "top" | "bottom";
  blurLayers?: number;
  blurIntensity?: number;
  className?: string;
};

export function ProgressiveBlur({
  direction = "right",
  blurLayers = 8,
  blurIntensity = 0.25,
  className,
}: ProgressiveBlurProps) {
  const isHorizontal = direction === "left" || direction === "right";
  const isReverse = direction === "right" || direction === "bottom";

  const gradientDirection = isHorizontal
    ? isReverse
      ? "to right"
      : "to left"
    : isReverse
    ? "to bottom"
    : "to top";

  return (
    <div
      className={cn(
        "pointer-events-none absolute",
        isHorizontal ? "inset-y-0 w-1/6" : "inset-x-0 h-1/6",
        direction === "left" && "left-0",
        direction === "right" && "right-0",
        direction === "top" && "top-0",
        direction === "bottom" && "bottom-0",
        className
      )}
      style={{
        maskImage: `linear-gradient(${gradientDirection}, black, transparent)`,
        WebkitMaskImage: `linear-gradient(${gradientDirection}, black, transparent)`,
      }}
    >
      {Array.from({ length: blurLayers }).map((_, i) => {
        const blur = ((i + 1) / blurLayers) * blurIntensity * 20;
        const start = (i / blurLayers) * 100;
        const end = ((i + 1) / blurLayers) * 100;

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: `linear-gradient(${gradientDirection}, transparent ${start}%, black ${end}%)`,
              WebkitMaskImage: `linear-gradient(${gradientDirection}, transparent ${start}%, black ${end}%)`,
            }}
          />
        );
      })}
    </div>
  );
}
