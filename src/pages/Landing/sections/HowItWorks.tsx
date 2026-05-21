import React from "react";
import { useTranslation } from "react-i18next";
import { steps } from "../../../content/howItWorks";
import { SectionLabel } from "../../../components/ui/SectionLabel";
import { RevealCard } from "../../../components/ui/RevealCard";

interface StepText {
  title: string;
  description: string;
}

export function HowItWorks() {
  const { t } = useTranslation();
  const raw = t("howItWorks.steps", { returnObjects: true });
  const stepTexts: StepText[] = Array.isArray(raw) ? (raw as StepText[]) : [];

  return (
    <section className="howItWorksSection" id="how-it-works">
      <div className="sectionIntro">
        <SectionLabel>{t("howItWorks.label")}</SectionLabel>
        <h2>{t("howItWorks.title")}</h2>
        <p>{t("howItWorks.description")}</p>
      </div>

      <div className="stepsGrid">
        {steps.map(({ index, icon: Icon }, i) => {
          const step = stepTexts[i];
          if (!step) return null;
          return (
            <RevealCard className="stepCard" key={index} delay={i * 110}>
              <span className="stepIndex">{index}</span>
              <div className="stepIcon">
                <Icon size={22} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </RevealCard>
          );
        })}
      </div>
    </section>
  );
}
