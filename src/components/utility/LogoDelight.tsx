import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface Particle {
  id: number;
  angle: number;
  distance: number;
  color: string;
  delay: number;
  size: number;
}

interface Burst {
  id: number;
  particles: Particle[];
}

const COLORS = ["#31b7e8", "#5b63d9", "#a43da0"];

/**
 * Subtle delight: clicking the wrapped logo emits a small confetti-like
 * burst of brand-coloured particles. Doesn't block the underlying link
 * navigation. Skipped entirely for prefers-reduced-motion users.
 */
export function LogoDelight({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const counter = useRef(0);
  const [bursts, setBursts] = useState<Burst[]>([]);

  function spawn() {
    if (reduced) return;
    const id = ++counter.current;
    const particles: Particle[] = Array.from({ length: 11 }).map((_, i) => ({
      id: i,
      angle: (i / 11) * Math.PI * 2 + (Math.random() - 0.5) * 0.4,
      distance: 42 + Math.random() * 22,
      color: COLORS[i % COLORS.length] ?? "#5b63d9",
      delay: Math.random() * 70,
      size: 5 + Math.random() * 3
    }));
    setBursts((prev) => [...prev, { id, particles }]);
    window.setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 1100);
  }

  return (
    <span
      onClick={spawn}
      style={{ position: "relative", display: "inline-flex", lineHeight: 0 }}
    >
      {children}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 0,
          height: 0,
          pointerEvents: "none"
        }}
      >
        <AnimatePresence>
          {bursts.map((burst) =>
            burst.particles.map((p) => {
              const x = Math.cos(p.angle) * p.distance;
              const y = Math.sin(p.angle) * p.distance;
              return (
                <motion.span
                  key={`${burst.id}-${p.id}`}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    x: [0, x * 0.7, x, x * 1.05],
                    y: [0, y * 0.7, y, y * 1.05 + 6],
                    scale: [0.3, 1, 1, 0.4]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.95,
                    delay: p.delay / 1000,
                    ease: [0.22, 1, 0.36, 1],
                    times: [0, 0.25, 0.7, 1]
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: p.size,
                    height: p.size,
                    marginTop: -p.size / 2,
                    marginLeft: -p.size / 2,
                    borderRadius: 999,
                    background: p.color,
                    boxShadow: `0 0 12px ${p.color}`
                  }}
                />
              );
            })
          )}
        </AnimatePresence>
      </span>
    </span>
  );
}
