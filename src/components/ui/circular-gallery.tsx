import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    by: string;
  };
}

interface CircularGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
  onItemClick?: (index: number) => void;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      className,
      radius = 600,
      autoRotateSpeed = 0.012,
      onItemClick,
      ...props
    },
    ref
  ) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const prefersReducedMotionRef = useRef(false);
    const scrollRafRef = useRef<number | null>(null);
    const latestScrollYRef = useRef(0);

    // Detect reduced motion preference
    useEffect(() => {
      if (typeof window === "undefined") return;
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      prefersReducedMotionRef.current = mq.matches;
      const handler = () => {
        prefersReducedMotionRef.current = mq.matches;
      };
      mq.addEventListener?.("change", handler);
      return () => mq.removeEventListener?.("change", handler);
    }, []);

    // Scroll-driven rotation with rAF throttling
    useEffect(() => {
      const computeRotation = () => {
        scrollRafRef.current = null;
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress =
          scrollableHeight > 0 ? latestScrollYRef.current / scrollableHeight : 0;
        const multiplier = prefersReducedMotionRef.current ? 0.55 : 1;
        setRotation(scrollProgress * 360 * multiplier);
      };

      const handleScroll = () => {
        setIsScrolling(true);
        latestScrollYRef.current = window.scrollY;

        if (scrollRafRef.current == null) {
          scrollRafRef.current = requestAnimationFrame(computeRotation);
        }

        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 140);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        if (scrollRafRef.current != null) cancelAnimationFrame(scrollRafRef.current);
      };
    }, []);

    // Auto-rotate when not scrolling
    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling && !prefersReducedMotionRef.current) {
          setRotation((prev) => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);
      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }, [isScrolling, autoRotateSpeed]);

    const anglePerItem = 360 / Math.max(items.length, 1);

    return (
      <div
        ref={ref}
        className={cn("relative w-full h-[400px] md:h-[500px]", className)}
        style={{ perspective: "1200px" }}
        {...props}
      >
        <div
          className="absolute left-1/2 top-1/2 w-0 h-0"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateX(-50%) translateY(-50%) rotateY(${-rotation}deg)`,
            transition: "transform 0.05s linear",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(
              relativeAngle > 180 ? 360 - relativeAngle : relativeAngle
            );
            const opacity = Math.max(0.38, 1 - normalizedAngle / 180);
            const scale = 1 - normalizedAngle / 600;

            return (
              <button
                key={i}
                onClick={() => onItemClick?.(i)}
                aria-label={`View ${item.common} in ${item.binomial}`}
                className="absolute select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) scale(${scale})`,
                  left: "50%",
                  top: "50%",
                  translate: "-50% -50%",
                  opacity,
                  transition: "opacity 0.22s linear",
                }}
              >
                <div className="relative w-[280px] h-[200px] md:w-[360px] md:h-[260px] rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom gradient overlay with labels */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                    <p className="text-white font-semibold text-sm md:text-base leading-tight">
                      {item.common}
                    </p>
                    <p className="text-white/60 text-xs md:text-sm mt-0.5">
                      {item.binomial}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = "CircularGallery";
export { CircularGallery };
