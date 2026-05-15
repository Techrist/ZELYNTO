import React from "react";
import { useTranslation } from "react-i18next";
import { integrations } from "../../../content/integrations";

export function IntegrationBand() {
  const { t } = useTranslation();
  return (
    <section className="integrationBand container" aria-label={t("integrations.ariaLabel")}>
      {integrations.map(({ icon, label, alt }) => (
        <div key={label}>
          <img className="integrationLogo" src={icon} alt={alt} width={24} height={24} />
          <span>{label}</span>
        </div>
      ))}
      <br />
    </section>
  );
}
