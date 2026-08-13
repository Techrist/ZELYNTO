import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Mounts Lenis once at the app root for buttery-smooth scrolling.
 * Lenis writes to the native scroll position, so CSS scroll-driven
 * animations (animation-timeline: scroll()/view()) keep working.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user accessibility preference
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      // syncTouch avoids fighting native momentum on iOS
      syncTouch: false
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
