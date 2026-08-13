import React from "react";
import { useTranslation } from "react-i18next";
import { securityPillars } from "../../../content/security";
import { SectionLabel } from "../../../components/ui/SectionLabel";
import { RevealCard } from "../../../components/ui/RevealCard";
import { SectionFade } from "../../../components/utility/SectionFade";

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
      <SectionFade className="sectionIntro">
        <SectionLabel>{t("security.label")}</SectionLabel>
        <h2>{t("security.title")}</h2>
        <p>{t("security.description")}</p>
      </SectionFade>

      <div className="securityGrid">
        {securityPillars.map(({ icon: Icon }, i) => {
          const p = pillars[i];
          if (!p) return null;
          return (
            <RevealCard className="securityPillar" key={p.title} delay={i * 90}>
              <div className="securityIcon">
                <Icon size={22} />
              </div>
              <div className="securityBody">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </RevealCard>
          );
        })}
      </div>
    </section>
  );
}
