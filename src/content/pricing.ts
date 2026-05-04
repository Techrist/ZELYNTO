export interface PricingPlan {
  id: string;
  label: string;
  title: string;
  description: string;
  price: string;
  priceUnit?: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  bullets: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    label: "Starter",
    title: "Audit & exploration",
    description: "Pour démarrer avec une vision claire de votre tenant Microsoft 365.",
    price: "490€",
    priceUnit: "/mois",
    ctaLabel: "Demander une démo",
    ctaHref: "#/contact",
    bullets: [
      "Chat d'exploration M365",
      "Audit continu initial",
      "Rapport de risques priorisés",
      "Jusqu'à 500 utilisateurs"
    ]
  },
  {
    id: "business",
    label: "Business",
    title: "Copilote M365 complet",
    description: "Pour piloter sécurité, alerting, recommandations et actions gouvernées.",
    price: "1 490€",
    priceUnit: "/mois",
    ctaLabel: "Planifier un appel",
    ctaHref: "#/contact",
    featured: true,
    bullets: [
      "Tout Starter",
      "Alerting Defender et Identity",
      "Preview des actions Graph",
      "Recommandations de remédiation",
      "Jusqu'à 2 500 utilisateurs"
    ]
  },
  {
    id: "enterprise",
    label: "Enterprise",
    title: "Gouvernance avancée",
    description: "Pour les grands tenants, MSP et organisations avec exigences conformité fortes.",
    price: "Sur devis",
    ctaLabel: "Contacter l'équipe",
    ctaHref: "#/contact",
    bullets: [
      "Tout Business",
      "Multi-tenant et MSP",
      "Règles d'audit personnalisées",
      "SSO, SLA et support prioritaire"
    ]
  }
];
