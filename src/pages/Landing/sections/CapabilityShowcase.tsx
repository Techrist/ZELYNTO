import React from "react";
import { useTranslation } from "react-i18next";
import { ChatPanel } from "../../../components/shared/ChatPanel";
import { FeatureList } from "../../../components/ui/FeatureList";
import { SectionLabel } from "../../../components/ui/SectionLabel";
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

  return (
    <section className={className} id={capability.id}>
      <div className="productCopy">
        <SectionLabel>{t(`${base}.label`)}</SectionLabel>
        <h2>{t(`${base}.title`)}</h2>
        <p>{t(`${base}.description`)}</p>
        <FeatureList items={bullets} />
      </div>
      <ChatPanel variant={capability.variant} />
    </section>
  );
}
