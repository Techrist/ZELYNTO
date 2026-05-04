import React from "react";
import { securityPillars } from "../../../content/security";
import { SectionLabel } from "../../../components/ui/SectionLabel";

export function SecuritySection() {
  return (
    <section className="securitySection" id="security">
      <div className="sectionIntro">
        <SectionLabel>Sécurité & conformité</SectionLabel>
        <h2>Conçu pour les contraintes des DSI les plus exigeantes.</h2>
        <p>
          Zelynto applique le principe du moindre privilège, conserve les preuves nécessaires aux audits
          et minimise l'empreinte sur vos données.
        </p>
      </div>

      <div className="securityGrid">
        {securityPillars.map(({ icon: Icon, title, description }) => (
          <article className="securityPillar" key={title}>
            <div className="securityIcon">
              <Icon size={22} />
            </div>
            <div className="securityBody">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
