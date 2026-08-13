import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface SectionFadeProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before entrance (ms). */
  delay?: number;
  /** Duration (s). Defaults to a slow, generous fade. */
  duration?: number;
  /** IntersectionObserver amount. Lower = triggers earlier. */
  amount?: number;
}

/**
 * Ultra-soft section entrance: gentle scale + blur + opacity, longer duration
 * than `Reveal`. Meant to be wrapped around section intros or entire blocks
 * that currently arrive with no animation, to smooth the page's rhythm
 * without adding any bold movement.
 */
export function SectionFade({
  children,
  className,
  delay = 0,
  duration = 1.1,
  amount = 0.12
}: SectionFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.985, filter: "blur(10px)" }}
      animate={
        inView
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : undefined
      }
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}
