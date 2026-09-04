import React from "react";
import { useTranslation } from "react-i18next";
import { ChatPanel } from "../../../components/shared/ChatPanel";
import { FeatureList } from "../../../components/ui/FeatureList";
import { SectionLabel } from "../../../components/ui/SectionLabel";
import { Reveal } from "../../../components/utility/Reveal";
import type { Capability } from "../../../content/capabilities";

interface CapabilityShowcaseProps {
  capability: Capability;
}

export function CapabilityShowcase({ capability }: CapabilityShowcaseProps) {
  const { t } = useTranslation();
  const className = capability.reverse ? "productShowcase reverse" : "productShowcase";
  const base = `capabilities.${capability.variant}`;
  const rawBullets = t(`${base}.bullets`, { returnObjects: true });
  const bullets = Array.isArray(rawBullets) ? (rawBullets as string[]) : [];

  // Copy drifts in gently from the opposite side of the panel.
  const copyX = capability.reverse ? 18 : -18;

  return (
    <section className={className} id={capability.id}>
      <Reveal className="productCopy" x={copyX} y={0} amount={0.25}>
        <SectionLabel>{t(`${base}.label`)}</SectionLabel>
        <h2>{t(`${base}.title`)}</h2>
        <p>{t(`${base}.description`)}</p>
        <FeatureList items={bullets} />
      </Reveal>
      <Reveal y={28} delay={120} amount={0.2}>
        <ChatPanel variant={capability.variant} />
      </Reveal>
    </section>
  );
}
