import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import type { LottieComponentProps } from "lottie-react";
import { ClientOnly } from "./ClientOnly";

/* lottie-react's default export is double-wrapped in Node ESM contexts, and the
   library touches the DOM - so it is loaded lazily, on the client only, and
   split out of the main bundle. */
const LottieImpl = lazy(async () => {
  const mod: Record<string, unknown> = await import("lottie-react");
  const dflt = mod.default as { default?: unknown } | undefined;
  const Comp = (dflt?.default ?? mod.default ?? mod.LottiePlayer) as React.ComponentType<LottieComponentProps>;
  return { default: Comp };
});

type LazyLottieProps = Omit<LottieComponentProps, "animationData"> & {
  /** Animation JSON already in hand. */
  animationData?: unknown;
  /**
   * Deferred loader (e.g. `() => import("../assets/x.json")`). The JSON chunk is
   * fetched only once the placeholder nears the viewport, keeping large
   * animation files out of the critical bundle.
   */
  loadAnimationData?: () => Promise<{ default: unknown } | unknown>;
  /** How early to start loading, as an IntersectionObserver rootMargin. */
  preloadMargin?: string;
};

export function LazyLottie({
  animationData,
  loadAnimationData,
  preloadMargin = "600px",
  className,
  ...lottieProps
}: LazyLottieProps) {
  const holderRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<unknown>(animationData ?? null);

  useEffect(() => {
    if (data != null || !loadAnimationData) return;
    const el = holderRef.current;
    if (!el) return;

    let cancelled = false;
    const run = () => {
      Promise.resolve(loadAnimationData()).then((mod) => {
        if (cancelled) return;
        const resolved =
          mod && typeof mod === "object" && "default" in (mod as Record<string, unknown>)
            ? (mod as { default: unknown }).default
            : mod;
        setData(resolved);
      });
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { rootMargin: preloadMargin }
    );
    observer.observe(el);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [data, loadAnimationData, preloadMargin]);

  return (
    <div ref={holderRef} className={className}>
      {data != null && (
        <ClientOnly>
          <Suspense fallback={null}>
            <LottieImpl
              {...lottieProps}
              animationData={data}
              style={{ width: "100%", height: "100%", ...lottieProps.style }}
            />
          </Suspense>
        </ClientOnly>
      )}
    </div>
  );
}
