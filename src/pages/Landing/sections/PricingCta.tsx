import React from "react";
import { useTranslation } from "react-i18next";
import { PrimaryLink } from "../../../components/ui/PrimaryLink";
import { Reveal } from "../../../components/utility/Reveal";

export function PricingCta() {
  const { t } = useTranslation();

  return (
    <section className="pricingCta" id="pricing">
      <Reveal className="pricingCtaInner" y={20} amount={0.3}>
        <span>{t("pricing.cta.eyebrow")}</span>
        <h2>{t("pricing.cta.title")}</h2>
        <p>{t("pricing.cta.description")}</p>
        <PrimaryLink href="#/pricing" size="large">
          {t("pricing.cta.button")}
        </PrimaryLink>
      </Reveal>
    </section>
  );
}
