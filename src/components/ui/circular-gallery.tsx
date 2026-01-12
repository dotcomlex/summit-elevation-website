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
  isActive?: boolean;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      className,
      radius = 600,
      autoRotateSpeed = -0.014, // Negative = rotate LEFT
      onItemClick,
      isActive = true,
      ...props
    },
    ref
  ) => {
    const [rotation, setRotation] = useState(0);

    const prefersReducedMotionRef = useRef(false);
    const rafRef = useRef<number | null>(null);

    // Drag state
    const pointerIdRef = useRef<number | null>(null);
    const startXRef = useRef(0);
    const startYRef = useRef(0);
    const lastXRef = useRef(0);
    const dragEngagedRef = useRef(false);
    const isInteractingRef = useRef(false);
    const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

    // Auto-rotate only when active and not interacting
    useEffect(() => {
      const tick = () => {
        if (isActive && !prefersReducedMotionRef.current && !isInteractingRef.current) {
          setRotation((prev) => prev + autoRotateSpeed);
        }
        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [autoRotateSpeed, isActive]);

    const onPointerDown = (e: React.PointerEvent) => {
      pointerIdRef.current = e.pointerId;
      startXRef.current = e.clientX;
      startYRef.current = e.clientY;
      lastXRef.current = e.clientX;
      dragEngagedRef.current = false;
      isInteractingRef.current = true;
    };

    const onPointerMove = (e: React.PointerEvent) => {
      if (pointerIdRef.current !== e.pointerId) return;

      const dx = e.clientX - startXRef.current;
      const dy = e.clientY - startYRef.current;

      // Only engage drag when horizontal intent is clear (keeps vertical scroll working)
      if (!dragEngagedRef.current) {
        if (Math.abs(dx) > Math.abs(dy) + 8) {
          dragEngagedRef.current = true;
          try {
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          } catch {}
        } else {
          return;
        }
      }

      // Rotate based on horizontal delta
      const deltaX = e.clientX - lastXRef.current;
      lastXRef.current = e.clientX;

      setRotation((prev) => prev + deltaX * 0.12);
      e.preventDefault();
    };

    const onPointerUp = (e: React.PointerEvent) => {
      if (pointerIdRef.current !== e.pointerId) return;
      pointerIdRef.current = null;
      dragEngagedRef.current = false;
      isInteractingRef.current = false;
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    };

    const onPointerCancel = (e: React.PointerEvent) => {
      onPointerUp(e);
    };

    const onWheel = (e: React.WheelEvent) => {
      if (!isActive) return;

      // Horizontal wheel/trackpad rotates the gallery
      const dx = Math.abs(e.deltaX) > 0 ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
      if (dx === 0) return;

      isInteractingRef.current = true;
      setRotation((prev) => prev + dx * 0.08);
      e.preventDefault();

      // Resume auto-rotate after a short delay
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
      wheelTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
      }, 180);
    };

    // Cleanup wheel timeout on unmount
    useEffect(() => {
      return () => {
        if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
      };
    }, []);

    const anglePerItem = 360 / Math.max(items.length, 1);

    return (
      <div
        ref={ref}
        className={cn("relative w-full h-[400px] md:h-[500px] touch-pan-y", className)}
        style={{ perspective: "1200px" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onWheel={onWheel}
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

            // Depth cues via scale and brightness (NOT opacity - keeps images fully visible)
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(
              relativeAngle > 180 ? 360 - relativeAngle : relativeAngle
            );

            const scale = 1 - Math.min(0.08, (normalizedAngle / 180) * 0.08);
            const brightness = 1 - Math.min(0.14, (normalizedAngle / 180) * 0.14);

            return (
              <button
                key={i}
                onClick={() => onItemClick?.(i)}
                aria-label={`View ${item.common} in ${item.binomial}`}
                className="absolute select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) scale(${scale})`,
                  left: "50%",
                  top: "50%",
                  translate: "-50% -50%",
                  // CRITICAL: Hide backside to prevent mirrored/backwards text
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  filter: `brightness(${brightness})`,
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
                    <p className="text-white/70 text-xs md:text-sm mt-0.5">
                      {item.binomial}
                    </p>
                    <p className="text-white/50 text-xs mt-1">
                      {item.photo.by}
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
