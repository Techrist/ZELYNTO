import type { Lang } from "../../i18n/config";
import type { LegalPageKey } from "../../routing";
import type { LegalContent, LegalDoc } from "./types";
import { privacy } from "./privacy";
import { terms } from "./terms";
import { dpa } from "./dpa";
import { acceptableUse } from "./acceptable-use";

export const legalContent: LegalContent = {
  privacy,
  terms,
  dpa,
  "acceptable-use": acceptableUse
};

/** Resolve the legal document for a page in a language (de/it/es fall back to en). */
export function getLegalDoc(page: LegalPageKey, lang: Lang): LegalDoc {
  return legalContent[page][lang] ?? legalContent[page].en;
}

export type { LegalDoc, LegalSection, LegalBlock } from "./types";
