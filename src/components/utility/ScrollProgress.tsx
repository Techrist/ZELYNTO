import React from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * Hair-thin gradient progress bar pinned to the top of the viewport.
 * Tracks page scroll position with a tiny spring for elegance.
 * No-op for prefers-reduced-motion users.
 */
export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.3,
    restDelta: 0.001
  });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        transformOrigin: "0 50%",
        scaleX,
        background:
          "linear-gradient(90deg, #31b7e8 0%, #5b63d9 50%, #a43da0 100%)",
        zIndex: 200,
        pointerEvents: "none",
        boxShadow: "0 1px 8px rgba(91, 99, 217, 0.35)"
      }}
    />
  );
}
