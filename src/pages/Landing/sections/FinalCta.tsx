import React from "react";
import { useTranslation } from "react-i18next";
import { PrimaryLink } from "../../../components/ui/PrimaryLink";

export function FinalCta() {
  const { t } = useTranslation();
  return (
    <section className="ctaSection">
      <span>{t("cta.eyebrow")}</span>
      <h2>{t("cta.title")}</h2>
      <p>{t("cta.description")}</p>
      <PrimaryLink href="https://cestfredy.github.io/zelynto-onboarding/" size="large">
        {t("common.getStarted")}
      </PrimaryLink>
    </section>
  );
}
