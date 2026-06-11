import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring
} from "framer-motion";
import { useIsTouchDevice } from "./useIsTouchDevice";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  spring?: { stiffness?: number; damping?: number; mass?: number };
  as?: "div" | "span";
}

/**
 * Wraps a CTA so it gently follows the cursor on hover.
 * - Touch devices: behaves like a normal element (no magnetic pull)
 * - prefers-reduced-motion: no animation
 * - Pull is contained (strength px max), with a soft spring return on leave
 */
export function MagneticButton({
  children,
  className = "",
  strength = 18,
  spring = { stiffness: 220, damping: 18, mass: 0.6 },
  as = "div"
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const motionEnabled = !isTouch && !reduced;

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!motionEnabled) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const relX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const relY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Tag = as === "span" ? motion.span : motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={motionEnabled ? { x: sx, y: sy, display: "inline-flex" } : { display: "inline-flex" }}
    >
      {children}
    </Tag>
  );
}
