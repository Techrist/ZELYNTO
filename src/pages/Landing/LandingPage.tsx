import React from "react";
import { capabilities } from "../../content/capabilities";
import { CapabilityShowcase } from "./sections/CapabilityShowcase";
import { FaqSection } from "./sections/FaqSection";
import { FinalCta } from "./sections/FinalCta";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { IntegrationBand } from "./sections/IntegrationBand";
import { PricingSection } from "./sections/PricingSection";
import { ProblemSection } from "./sections/ProblemSection";
import { SecuritySection } from "./sections/SecuritySection";
import "./Landing.css";

export function LandingPage() {
  return (
    <>
      <Hero />
      <IntegrationBand />
      <ProblemSection />
      {capabilities.map((capability) => (
        <CapabilityShowcase key={capability.id} capability={capability} />
      ))}
      <HowItWorks />
      <SecuritySection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
