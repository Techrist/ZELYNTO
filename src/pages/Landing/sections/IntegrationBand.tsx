import React from "react";
import { useTranslation } from "react-i18next";
import { integrations } from "../../../content/integrations";

export function IntegrationBand() {
  const { t } = useTranslation();
  return (
    <section className="integrationBand container" aria-label={t("integrations.ariaLabel")}>
      {integrations.map(({ icon: Icon, label }) => (
        <div key={label}>
          <Icon size={22} />
          <span>{label}</span>
        </div>
      ))}
      <br />
    </section>
  );
}
