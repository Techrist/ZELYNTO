import React from "react";
import { integrations } from "../../../content/integrations";

export function IntegrationBand() {
  return (
    <section className="integrationBand container" aria-label="Intégrations Microsoft 365">
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
