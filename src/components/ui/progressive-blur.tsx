"use client";

import { cn } from "@/lib/utils";

type ProgressiveBlurProps = {
  direction?: "left" | "right" | "top" | "bottom";
  className?: string;
  bgColor?: string;
};

export function ProgressiveBlur({
  direction = "right",
  className,
  bgColor = "hsl(var(--section-dark))",
}: ProgressiveBlurProps) {
  const isHorizontal = direction === "left" || direction === "right";

  const gradientDirection =
    direction === "left"
      ? "to right"
      : direction === "right"
      ? "to left"
      : direction === "top"
      ? "to bottom"
      : "to top";

  return (
    <div
      className={cn(
        "pointer-events-none absolute z-20",
        isHorizontal ? "inset-y-0 w-16 sm:w-24" : "inset-x-0 h-16",
        direction === "left" && "left-0",
        direction === "right" && "right-0",
        direction === "top" && "top-0",
        direction === "bottom" && "bottom-0",
        className
      )}
      style={{
        background: `linear-gradient(${gradientDirection}, ${bgColor}, transparent)`,
      }}
    />
  );
}
