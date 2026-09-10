import en from "../i18n/locales/en.json";
import fr from "../i18n/locales/fr.json";
import de from "../i18n/locales/de.json";
import it from "../i18n/locales/it.json";
import es from "../i18n/locales/es.json";
import { SITE_URL, localizedHref, isLegalPage, type PageKey } from "../routing";
import { SUPPORTED_LANGS, type Lang } from "../i18n/config";
import { getLegalDoc } from "../content/legal";

const DICT: Record<Lang, unknown> = { en, fr, de, it, es };
const BRAND = "Zelynto";

/**
 * Serialise structured data for inline `<script type="application/ld+json">`.
 * `JSON.stringify` does not escape `<`, `>` or `&`, so a translated string
 * containing `</script>` (or an HTML comment sequence) could otherwise break
 * out of the script element. Escaping these as unicode keeps the JSON valid
 * while making break-out impossible.
 */
function jsonLd(data: unknown): string {
  // JSON.stringify leaves <, > and & literal; escaping them as \uXXXX keeps
  // the JSON valid while making a </script> break-out impossible even if a
  // translated string ever contains one.
  const ESC: Record<string, string> = { "<": "u003c", ">": "u003e", "&": "u0026" };
  return JSON.stringify(data).replace(/[<>&]/g, (c) => String.fromCharCode(92) + ESC[c]);
}
// TODO: replace with a purpose-built 1200×630 social card.
export const OG_IMAGE = `${SITE_URL}/zelynto-long.png`;

export const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
  it: "it_IT",
  es: "es_ES"
};

function tr(lang: Lang, path: string): string {
  const value = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[key];
    return undefined;
  }, DICT[lang]);
  return typeof value === "string" ? value : path;
}

function trArray(lang: Lang, path: string): unknown[] {
  const value = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[key];
    return undefined;
  }, DICT[lang]);
  return Array.isArray(value) ? value : [];
}

function clamp(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length <= max ? clean : clean.slice(0, max - 1).trimEnd() + "…";
}

const abs = (page: PageKey, lang: Lang) => SITE_URL + localizedHref(page, lang);

function breadcrumb(page: PageKey, lang: Lang, name: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: BRAND, item: abs("", lang) },
      { "@type": "ListItem", position: 2, name, item: abs(page, lang) }
    ]
  };
}

function faqPage(lang: Lang) {
  const items = trArray(lang, "faq.items") as Array<{ question: string; answer: string }>;
  return {
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer }
    }))
  };
}

function pricingProduct(lang: Lang) {
  return {
    "@type": "Product",
    name: `${BRAND} — Microsoft 365 admin copilot`,
    description: clamp(tr(lang, "pricing.description")),
    brand: { "@type": "Brand", name: BRAND },
    offers: (["starter", "business", "enterprise"] as const).map((id, i) => ({
      "@type": "Offer",
      name: tr(lang, `pricing.plans.${id}.label`),
      priceCurrency: "EUR",
      ...(i < 2 ? { price: i === 0 ? "490" : "1490" } : {}),
      availability: "https://schema.org/InStock",
      url: abs("pricing", "en")
    }))
  };
}

/** Site-wide structured data, rendered in every page <head>. */
export const GLOBAL_JSON_LD = jsonLd({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/zelynto-long.png`,
      description:
        "Zelynto is a Microsoft 365 administration copilot driven by natural language: explore your tenant, understand alerts, automate actions and audit continuously."
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: BRAND,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: [...SUPPORTED_LANGS]
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: BRAND,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Microsoft 365 administration",
      operatingSystem: "Web",
      url: `${SITE_URL}/`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "490",
        offerCount: "3"
      }
    }
  ]
});

export interface HeadData {
  lang: Lang;
  title: string;
  description: string;
  canonical: string;
  ogLocale: string;
  ogImage: string;
  noindex: boolean;
  alternates: Array<{ hreflang: string; href: string }>;
  jsonLd: string | null;
}

export function buildHead(page: PageKey, lang: Lang): HeadData {
  let title = `${BRAND} — ${tr(lang, "hero.eyebrow")}`;
  let description = clamp(tr(lang, "hero.description"));
  let noindex = false;
  const graph: Array<Record<string, unknown>> = [];

  if (isLegalPage(page)) {
    const doc = getLegalDoc(page, lang);
    title = `${doc.title} — ${BRAND}`;
    description = clamp(doc.summary);
    graph.push(breadcrumb(page, lang, doc.title));
    const alternates = [
      ...SUPPORTED_LANGS.map((l) => ({ hreflang: l, href: abs(page, l) })),
      { hreflang: "x-default", href: abs(page, "en") }
    ];
    return {
      lang,
      title,
      description,
      canonical: abs(page, lang),
      ogLocale: OG_LOCALE[lang],
      ogImage: OG_IMAGE,
      noindex,
      alternates,
      jsonLd: jsonLd({ "@context": "https://schema.org", "@graph": graph })
    };
  }

  switch (page) {
    case "":
      graph.push(faqPage(lang));
      break;
    case "pricing":
      title = `${tr(lang, "common.pricing")} — ${BRAND}`;
      description = clamp(tr(lang, "pricing.description"));
      graph.push(breadcrumb("pricing", lang, tr(lang, "common.pricing")), pricingProduct(lang));
      break;
    case "contact":
      title = `${tr(lang, "contact.label")} — ${BRAND}`;
      description = clamp(tr(lang, "contact.description"));
      graph.push(breadcrumb("contact", lang, tr(lang, "contact.label")));
      break;
    case "inventories":
      title = `${tr(lang, "inventories.title")} — ${BRAND}`;
      description = clamp(tr(lang, "inventories.description"));
      graph.push(breadcrumb("inventories", lang, tr(lang, "common.inventories")));
      break;
    case "savings":
      title = `${tr(lang, "savings.title")} — ${BRAND}`;
      description = clamp(tr(lang, "savings.description"));
      graph.push(breadcrumb("savings", lang, tr(lang, "header.reportingLinks.savings")));
      break;
    case "audit":
      title = `${tr(lang, "audit.title")} — ${BRAND}`;
      description = clamp(tr(lang, "audit.description"));
      graph.push(breadcrumb("audit", lang, tr(lang, "header.reportingLinks.audit")));
      break;
    case "connexion":
      title = `${tr(lang, "auth.title")} — ${BRAND}`;
      description = clamp(tr(lang, "auth.description"));
      noindex = true;
      break;
  }

  const alternates = noindex
    ? []
    : [
        ...SUPPORTED_LANGS.map((l) => ({ hreflang: l, href: abs(page, l) })),
        { hreflang: "x-default", href: abs(page, "en") }
      ];

  return {
    lang,
    title,
    description,
    canonical: abs(page, lang),
    ogLocale: OG_LOCALE[lang],
    ogImage: OG_IMAGE,
    noindex,
    alternates,
    jsonLd: graph.length
      ? jsonLd({ "@context": "https://schema.org", "@graph": graph })
      : null
  };
}
