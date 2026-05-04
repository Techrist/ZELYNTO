import React from "react";
import { steps } from "../../../content/howItWorks";
import { SectionLabel } from "../../../components/ui/SectionLabel";

export function HowItWorks() {
  return (
    <section className="howItWorksSection" id="how-it-works">
      <div className="sectionIntro">
        <SectionLabel>Comment ça marche</SectionLabel>
        <h2>De l'application Entra ID à votre première action en moins d'une heure.</h2>
        <p>Trois étapes, pas de déploiement lourd, pas d'agent à installer.</p>
      </div>

      <div className="stepsGrid">
        {steps.map(({ index, icon: Icon, title, description }) => (
          <article className="stepCard" key={index}>
            <span className="stepIndex">{index}</span>
            <div className="stepIcon">
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
