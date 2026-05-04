import React from "react";
import { AnimatedPanel } from "../../../components/shared/AnimatedPanel";
import { FeatureList } from "../../../components/ui/FeatureList";
import { SectionLabel } from "../../../components/ui/SectionLabel";
import type { Capability } from "../../../content/capabilities";

interface CapabilityShowcaseProps {
  capability: Capability;
}

export function CapabilityShowcase({ capability }: CapabilityShowcaseProps) {
  const className = capability.reverse ? "productShowcase reverse" : "productShowcase";

  return (
    <section className={className} id={capability.id}>
      <div className="productCopy">
        <SectionLabel>{capability.label}</SectionLabel>
        <h2>{capability.title}</h2>
        <p>{capability.description}</p>
        <FeatureList items={capability.bullets} />
      </div>
      <AnimatedPanel variant={capability.variant} />
    </section>
  );
}
