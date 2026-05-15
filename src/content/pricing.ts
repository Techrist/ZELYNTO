export interface PricingPlan {
  id: "starter" | "business" | "enterprise";
  price: string | null;       // null => price is read from i18n (pricing.plans.<id>.price)
  showPriceUnit: boolean;
  ctaHref: string;
  featured?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    price: "490€",
    showPriceUnit: true,
    ctaHref: "#/contact"
  },
  {
    id: "business",
    price: "1 490€",
    showPriceUnit: true,
    ctaHref: "#/contact",
    featured: true
  },
  {
    id: "enterprise",
    price: null,
    showPriceUnit: false,
    ctaHref: "#/contact"
  }
];
