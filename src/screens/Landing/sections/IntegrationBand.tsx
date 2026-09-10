import React from "react";
import { useTranslation } from "react-i18next";
import { integrations } from "../../../content/integrations";
import { Reveal } from "../../../components/utility/Reveal";

export function IntegrationBand() {
  const { t } = useTranslation();
  return (
    <section className="integrationBand container" aria-label={t("integrations.ariaLabel")}>
      {integrations.map(({ icon, label, alt }, index) => (
        <Reveal
          key={label}
          className="integrationCard"
          delay={index * 55}
          y={12}
          amount={0.4}
          duration={0.55}
        >
          <img className="integrationLogo" src={icon} alt={alt} width={24} height={24} />
          <span>{label}</span>
        </Reveal>
      ))}
      <br />
    </section>
  );
}
