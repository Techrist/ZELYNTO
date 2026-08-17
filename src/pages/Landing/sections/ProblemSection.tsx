import React from "react";
import { useTranslation } from "react-i18next";
import { problems } from "../../../content/problems";
import { RevealCard } from "../../../components/ui/RevealCard";
import { SectionFade } from "../../../components/utility/SectionFade";
import problemShowcase from "../../../assets/problem-showcase.png";

interface ProblemItem {
  title: string;
  description: string;
}

export function ProblemSection() {
  const { t } = useTranslation();
  const raw = t("problem.items", { returnObjects: true });
  const items: ProblemItem[] = Array.isArray(raw) ? (raw as ProblemItem[]) : [];

  return (
    <section className="problemSection" id="problem">
      <SectionFade className="sectionIntro">
        <h2>{t("problem.title")}</h2>
        <p>{t("problem.description")}</p>
      </SectionFade>

      <div className="problemGrid">
        {problems.map(({ icon: Icon }, index) => {
          const item = items[index];
          if (!item) return null;
          return (
            <RevealCard className="problemCard" key={item.title} delay={index * 90}>
              <div className="problemCardBody">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="problemIcon">
                <Icon size={22} />
              </div>
            </RevealCard>
          );
        })}

        <RevealCard className="problemCard problemCardShowcase" delay={problems.length * 90}>
          <img src={problemShowcase} alt="" />
        </RevealCard>
      </div>
    </section>
  );
}