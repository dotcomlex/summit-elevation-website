import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
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
      radius = 560,
      autoRotateSpeed = -0.014,
      onItemClick,
      isActive = true,
      ...props
    },
    ref
  ) => {
    const [rotation, setRotation] = useState(0);

    const prefersReducedMotionRef = useRef(false);
    const rafRef = useRef<number | null>(null);

    // Interaction state
    const pointerIdRef = useRef<number | null>(null);
    const startXRef = useRef(0);
    const startYRef = useRef(0);
    const lastXRef = useRef(0);
    const dragEngagedRef = useRef(false);
    const isInteractingRef = useRef(false);
    const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // IMPORTANT: prevent tap while dragging
    const dragDistanceRef = useRef(0);
    const didDragRef = useRef(false);

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
      dragDistanceRef.current = 0;
      didDragRef.current = false;
    };

    const onPointerMove = (e: React.PointerEvent) => {
      if (pointerIdRef.current !== e.pointerId) return;

      const dxTotal = e.clientX - startXRef.current;
      const dyTotal = e.clientY - startYRef.current;

      // Only engage drag when horizontal intent is clear (keeps vertical scroll working)
      if (!dragEngagedRef.current) {
        if (Math.abs(dxTotal) > Math.abs(dyTotal) + 6) {
          dragEngagedRef.current = true;
          try {
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          } catch {}
        } else {
          return;
        }
      }

      const deltaX = e.clientX - lastXRef.current;
      lastXRef.current = e.clientX;

      dragDistanceRef.current += Math.abs(deltaX);
      if (dragDistanceRef.current > 10) didDragRef.current = true;

      // Rotate based on horizontal delta
      setRotation((prev) => prev + deltaX * 0.14);
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
      }, 160);
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
        role="region"
        aria-label="Our Work Gallery"
        className={cn(
          "relative w-full h-full flex items-center justify-center",
          "cursor-grab active:cursor-grabbing",
          className
        )}
        style={{
          perspective: "2600px",
          touchAction: "pan-y",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onWheel={onWheel}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;

            // Frontness determines stacking order so edges don't overlap incorrectly
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const rad = (relativeAngle * Math.PI) / 180;
            const frontness = Math.cos(rad); // 1 = front, -1 = back

            // Z-index ensures front card stacks above neighbors
            const zIndex = Math.round((frontness + 1) * 1000);

            // Subtle brightness for depth, keep images fully visible
            const brightness = 0.92 + Math.max(0, frontness) * 0.10;

            return (
              <button
                key={`${item.photo.url}-${i}`}
                type="button"
                aria-label={`View ${item.common} in ${item.binomial}`}
                className="absolute select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: "50%",
                  top: "50%",
                  translate: "-50% -50%",
                  zIndex,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  filter: `brightness(${brightness})`,
                }}
                onClick={(e) => {
                  // DO NOT open lightbox if user dragged
                  if (didDragRef.current) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                  }
                  onItemClick?.(i);
                }}
              >
                <div
                  className="relative w-[clamp(240px,32vw,380px)] h-[clamp(240px,32vw,380px)] rounded-2xl overflow-hidden border border-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.45)] bg-black/10"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || "center" }}
                  />
                  {/* Bottom gradient overlay with labels */}
                  <div className="absolute bottom-0 left-0 w-full px-4 pt-8 pb-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white">
                    <h3 className="text-base sm:text-lg font-semibold leading-tight">
                      {item.common}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-90 leading-tight">
                      {item.binomial}
                    </p>
                    <p className="hidden sm:block text-[11px] mt-1 opacity-70">
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
