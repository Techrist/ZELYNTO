import React from "react";
import { useTranslation } from "react-i18next";
import { PrimaryLink } from "../../../components/ui/PrimaryLink";
import { Reveal } from "../../../components/utility/Reveal";

export function FinalCta() {
  const { t } = useTranslation();
  return (
    <section className="ctaSection">
      <Reveal y={22} amount={0.4}>
        <h2>{t("cta.title")}</h2>
      </Reveal>
      <Reveal y={18} delay={120} amount={0.4}>
        <p>{t("cta.description")}</p>
      </Reveal>
      <Reveal y={14} delay={240} amount={0.4}>
        <PrimaryLink href="https://cestfredy.github.io/zelynto-onboarding/" size="large">
          {t("common.getStarted")}
        </PrimaryLink>
      </Reveal>
    </section>
  );
}
