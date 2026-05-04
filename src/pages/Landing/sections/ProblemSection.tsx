import React from "react";
import { problems } from "../../../content/problems";
import { SectionLabel } from "../../../components/ui/SectionLabel";

export function ProblemSection() {
  return (
    <section className="problemSection" id="problem">
      <div className="sectionIntro">
        <SectionLabel>Le problème</SectionLabel>
        <h2>Microsoft 365 est devenu impossible à piloter à la main.</h2>
        <p>
          Plus le tenant grandit, plus l'effort opérationnel grimpe. Les équipes IT cherchent une vue claire,
          des actions sûres et une trace de tout ce qui est exécuté.
        </p>
      </div>

      <div className="problemGrid">
        {problems.map(({ icon: Icon, title, description }) => (
          <article className="problemCard" key={title}>
            <div className="problemIcon">
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
