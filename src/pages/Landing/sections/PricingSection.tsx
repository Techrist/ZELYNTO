import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingPlans } from "../../../content/pricing";

export function PricingSection() {
  return (
    <section className="section pricingSection" id="pricing">
      <div className="sectionIntro">
        <span>Pricing</span>
        <h2>Des offres simples pour déployer Zelynto selon votre niveau de maturité M365.</h2>
        <p>
          Commencez par l'audit et l'exploration, puis activez progressivement l'automatisation et les
          contrôles avancés.
        </p>
      </div>

      <div className="pricingGrid">
        {pricingPlans.map((plan) => (
          <article
            key={plan.id}
            className={plan.featured ? "priceCard featured" : "priceCard"}
          >
            {plan.featured && <div className="popularBadge">Le plus demandé</div>}
            <div>
              <span className="planLabel">{plan.label}</span>
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
            </div>
            <div className={plan.priceUnit ? "price" : "price custom"}>
              <strong>{plan.price}</strong>
              {plan.priceUnit && <span>{plan.priceUnit}</span>}
            </div>
            <a
              className={plan.featured ? "planButton primary" : "planButton"}
              href={plan.ctaHref}
            >
              {plan.ctaLabel}
            </a>
            <ul>
              {plan.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckCircle2 size={17} />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
