import React from "react";
import { PrimaryLink } from "../../../components/ui/PrimaryLink";

export function FinalCta() {
  return (
    <section className="ctaSection">
      <span>Pour une V1 exploitable</span>
      <h2>Faites de Zelynto votre cockpit Microsoft 365.</h2>
      <p>
        Un chat simple en surface, une couche Graph, sécurité, provisioning et audit en profondeur.
      </p>
      <PrimaryLink href="https://cestfredy.github.io/zelynto-onboarding/" size="large">
        Get started
      </PrimaryLink>
    </section>
  );
}
