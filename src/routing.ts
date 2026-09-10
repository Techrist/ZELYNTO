import { SUPPORTED_LANGS, isLang, type Lang } from "./i18n/config";

/** Canonical production origin. */
export const SITE_URL = "https://www.zelynto.com";

/** Page keys. "" is the landing page; slugs are shared across languages. */
export const PAGE_KEYS = [
  "",
  "pricing",
  "contact",
  "inventories",
  "savings",
  "audit",
  "connexion"
] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

const PAGE_SET = new Set<string>(PAGE_KEYS);

/** Pages that Astro should generate a page for (auth aliases handled separately). */
export const INDEXABLE_PAGES: PageKey[] = [
  "",
  "pricing",
  "contact",
  "inventories",
  "savings",
  "audit"
];

/** Build an internal href for a page in a given language. */
export function localizedHref(page: PageKey, lang: Lang): string {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const slug = page === "" ? "" : `/${page}`;
  return `${prefix}${slug}` || "/";
}

export interface ParsedRoute {
  lang: Lang;
  page: PageKey;
}

/** Client-side helper: current language + page from a pathname. */
export function parseLocation(pathname: string): ParsedRoute {
  const segments = pathname.replace(/^\/+/, "").replace(/\/+$/, "").split("/").filter(Boolean);
  let lang: Lang = "en";
  if (segments[0] && isLang(segments[0])) lang = segments.shift() as Lang;

  let raw = segments[0] ?? "";
  if (raw === "inscription") raw = "connexion";
  const page: PageKey = PAGE_SET.has(raw) ? (raw as PageKey) : "";
  return { lang, page };
}

/**
 * Every (lang, page) route for Astro's getStaticPaths. Slug is the URL path
 * without a leading slash ("" for the root).
 */
export function staticRoutes(): Array<{ slug: string | undefined; lang: Lang; page: PageKey }> {
  const out: Array<{ slug: string | undefined; lang: Lang; page: PageKey }> = [];
  for (const page of PAGE_KEYS) {
    for (const lang of SUPPORTED_LANGS) {
      const href = localizedHref(page, lang);
      out.push({ slug: href === "/" ? undefined : href.slice(1), lang, page });
    }
  }
  return out;
}
