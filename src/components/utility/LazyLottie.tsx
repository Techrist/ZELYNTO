import React, { Suspense, lazy } from "react";
import type { LottieComponentProps } from "lottie-react";
import { ClientOnly } from "./ClientOnly";

/* lottie-react's default export is double-wrapped in Node ESM contexts, and the
   library touches the DOM — so it is loaded lazily, on the client only, and
   split out of the main bundle. */
const LottieImpl = lazy(async () => {
  const mod: Record<string, unknown> = await import("lottie-react");
  const dflt = mod.default as { default?: unknown } | undefined;
  const Comp = (dflt?.default ?? mod.default ?? mod.LottiePlayer) as React.ComponentType<LottieComponentProps>;
  return { default: Comp };
});

export function LazyLottie(props: LottieComponentProps) {
  return (
    <ClientOnly>
      <Suspense fallback={null}>
        <LottieImpl {...props} />
      </Suspense>
    </ClientOnly>
  );
}
