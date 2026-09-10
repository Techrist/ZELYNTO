import React from "react";
import { useTranslation } from "react-i18next";
import { PrimaryLink } from "../../../components/ui/PrimaryLink";
import { Reveal } from "../../../components/utility/Reveal";
import { localizedHref } from "../../../routing";
import { SUPPORTED_LANGS, type Lang } from "../../../i18n/config";

export function PricingCta() {
  const { t, i18n } = useTranslation();
  const lang: Lang = (SUPPORTED_LANGS as readonly string[]).includes(i18n.language)
    ? (i18n.language as Lang)
    : "en";

  return (
    <section className="pricingCta" id="pricing">
      <Reveal className="pricingCtaInner" y={20} amount={0.3}>
        <span>{t("pricing.cta.eyebrow")}</span>
        <h2>{t("pricing.cta.title")}</h2>
        <p>{t("pricing.cta.description")}</p>
        <PrimaryLink href={localizedHref("pricing", lang)} size="large">
          {t("pricing.cta.button")}
        </PrimaryLink>
      </Reveal>
    </section>
  );
}
