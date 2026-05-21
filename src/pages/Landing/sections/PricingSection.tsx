import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { pricingPlans } from "../../../content/pricing";
import { RevealCard } from "../../../components/ui/RevealCard";

export function PricingSection() {
  const { t } = useTranslation();

  return (
    <section className="section pricingSection" id="pricing">
      <div className="sectionIntro">
        <span>{t("pricing.label")}</span>
        <h2>{t("pricing.title")}</h2>
        <p>{t("pricing.description")}</p>
      </div>

      <div className="pricingGrid">
        {pricingPlans.map((plan, index) => {
          const base = `pricing.plans.${plan.id}`;
          const rawBullets = t(`${base}.bullets`, { returnObjects: true });
          const bullets: string[] = Array.isArray(rawBullets) ? (rawBullets as string[]) : [];
          const displayedPrice = plan.price ?? t(`${base}.price`);
          return (
            <RevealCard
              key={plan.id}
              className={plan.featured ? "priceCard featured" : "priceCard"}
              delay={index * 110}
            >
              {plan.featured && <div className="popularBadge">{t("pricing.popularBadge")}</div>}
              <div>
                <span className="planLabel">{t(`${base}.label`)}</span>
                <h3>{t(`${base}.title`)}</h3>
                <p>{t(`${base}.description`)}</p>
              </div>
              <div className={plan.showPriceUnit ? "price" : "price custom"}>
                <strong>{displayedPrice}</strong>
                {plan.showPriceUnit && <span>{t("pricing.monthly")}</span>}
              </div>
              <a
                className={plan.featured ? "planButton primary" : "planButton"}
                href={plan.ctaHref}
              >
                {t(`${base}.ctaLabel`)}
              </a>
              <ul>
                {bullets.map((bullet) => (
                  <li key={bullet}>
                    <CheckCircle2 size={17} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </RevealCard>
          );
        })}
      </div>
    </section>
  );
}
