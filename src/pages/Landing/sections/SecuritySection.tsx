import React from "react";
import { useTranslation } from "react-i18next";
import { securityPillars } from "../../../content/security";
import { SectionLabel } from "../../../components/ui/SectionLabel";

interface PillarText {
  title: string;
  description: string;
}

export function SecuritySection() {
  const { t } = useTranslation();
  const raw = t("security.pillars", { returnObjects: true });
  const pillars: PillarText[] = Array.isArray(raw) ? (raw as PillarText[]) : [];

  return (
    <section className="securitySection" id="security">
      <div className="sectionIntro">
        <SectionLabel>{t("security.label")}</SectionLabel>
        <h2>{t("security.title")}</h2>
        <p>{t("security.description")}</p>
      </div>

      <div className="securityGrid">
        {securityPillars.map(({ icon: Icon }, i) => {
          const p = pillars[i];
          if (!p) return null;
          return (
            <article className="securityPillar" key={p.title}>
              <div className="securityIcon">
                <Icon size={22} />
              </div>
              <div className="securityBody">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
