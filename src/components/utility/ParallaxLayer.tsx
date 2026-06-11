import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  /** Pixel amplitude. Negative speeds up (element moves with scroll faster), positive moves slower. */
  speed?: number;
  /** Add slight spring smoothing so the parallax doesn't pop when the scroll velocity changes hard. */
  smooth?: boolean;
}

/**
 * Velocity-aware parallax wrapper.
 * Hooks into the global window scroll progress between the element's
 * enter and leave, then maps it to a translateY.
 */
export function ParallaxLayer({
  children,
  className,
  speed = 60,
  smooth = true
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const raw = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const y = useSpring(raw, smooth ? { stiffness: 220, damping: 28, mass: 0.4 } : { stiffness: 1000, damping: 100 });

  if (reduced) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y, willChange: "transform" }}>
      {children}
    </motion.div>
  );
}
