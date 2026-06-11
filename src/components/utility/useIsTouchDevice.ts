import { useEffect, useState } from "react";

/**
 * Detects pointer/touch capability after mount so we can opt out of
 * pointer-based micro-interactions (magnetic CTA, tilt cards…) on phones
 * where they don't apply and would jank the scroll.
 */
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(coarse.matches);
    update();
    coarse.addEventListener("change", update);
    return () => coarse.removeEventListener("change", update);
  }, []);

  return isTouch;
}
