import React from "react";
import { useTranslation } from "react-i18next";
import { problems } from "../../../content/problems";
import { RevealCard } from "../../../components/ui/RevealCard";

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
      <div className="sectionIntro">
        <h2>{t("problem.title")}</h2>
        <p>{t("problem.description")}</p>
      </div>

      <div className="problemGrid">
        {problems.map(({ icon: Icon }, index) => {
          const item = items[index];
          if (!item) return null;
          return (
            <RevealCard className="problemCard" key={item.title} delay={index * 90}>
              <div className="problemIcon">
                <Icon size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </RevealCard>
          );
        })}
      </div>
    </section>
  );
}
