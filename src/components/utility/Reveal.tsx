import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before this element animates in (ms). Use for stagger from a parent. */
  delay?: number;
  /** Translation amplitude on Y axis (px). 0 disables vertical slide. */
  y?: number;
  /** Translation amplitude on X axis (px). 0 disables horizontal slide. */
  x?: number;
  /** Animation duration (s). */
  duration?: number;
  /** When `true`, animation only fires once and stays. */
  once?: boolean;
  /** Custom triggering threshold. 0.2 = element 20% in view. */
  amount?: number;
  /** Render tag; defaults to `div`. Use `"span"` for inline-flow contexts. */
  as?: "div" | "span";
}

/**
 * Light Framer Motion wrapper that fades + slides its child when it
 * enters the viewport. Slide direction is configurable via `x`/`y`.
 * Hooks into `prefers-reduced-motion` so the animation is skipped entirely
 * for users who request it.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  as = "div"
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  const reduced = useReducedMotion();

  if (reduced) {
    if (as === "span") return <span className={className}>{children}</span>;
    return <div className={className}>{children}</div>;
  }

  const Component = as === "span" ? motion.span : motion.div;

  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement & HTMLSpanElement>}
      className={className}
      initial={{ opacity: 0, x, y, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" } : undefined}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </Component>
  );
}
