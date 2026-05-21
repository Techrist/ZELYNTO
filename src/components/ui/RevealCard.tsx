import React, { useEffect, useRef, useState } from "react";

type RevealPhase = "hidden" | "revealing" | "done";

interface RevealCardProps {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}

/**
 * Card wrapper that combines two effects:
 *  - scroll reveal: fades + slides up when it enters the viewport
 *  - spotlight: a soft brand-coloured glow follows the cursor on hover
 */
export function RevealCard({ className = "", delay = 0, children }: RevealCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<RevealPhase>("hidden");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setPhase("revealing");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  const phaseClass =
    phase === "hidden" ? "isHidden" : phase === "revealing" ? "isRevealing" : "";

  return (
    <article
      ref={ref}
      className={`revealCard spotlightCard ${phaseClass} ${className}`.trim()}
      style={
        phase === "revealing" && delay ? { animationDelay: `${delay}ms` } : undefined
      }
      onMouseMove={handleMouseMove}
      onAnimationEnd={() => setPhase("done")}
    >
      {children}
    </article>
  );
}
