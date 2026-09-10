import type { Lang } from "../../i18n/config";
import type { LegalPageKey } from "../../routing";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export interface LegalSection {
  /** Stable anchor slug, shared across languages so deep links survive translation. */
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  title: string;
  /** ISO date (YYYY-MM-DD). Rendered as "Last updated". */
  updated: string;
  /** One or two sentences; also feeds the page meta description. */
  summary: string;
  /** Blocks rendered above the first numbered section. */
  intro: LegalBlock[];
  sections: LegalSection[];
}

/** A document authored in en + fr; other locales fall back to en. */
export type LegalDocSet = Record<Lang, LegalDoc>;

export type LegalContent = Record<LegalPageKey, LegalDocSet>;

/** Expand an { en, fr } pair to the full locale set (de/it/es reuse en). */
export function withFallback(base: { en: LegalDoc; fr: LegalDoc }): LegalDocSet {
  return { en: base.en, fr: base.fr, de: base.en, it: base.en, es: base.en };
}
