import { createInstance, type i18n as I18nInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import it from "./locales/it.json";
import es from "./locales/es.json";
import type { Lang } from "./config";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  es: { translation: es }
};

/**
 * A fresh, synchronously-initialised i18next instance for one page in one
 * language. Used by PageShell and wrapped in <I18nextProvider> so server
 * render and client hydration produce identical markup.
 */
export function createI18n(lang: Lang): I18nInstance {
  const instance = createInstance();
  // No async backend => init() resolves synchronously and the instance is
  // usable immediately (safe for server render).
  instance.use(initReactI18next).init({
    lng: lang,
    fallbackLng: "en",
    resources,
    interpolation: { escapeValue: false },
    returnNull: false,
    returnEmptyString: false,
    react: { useSuspense: false }
  });
  return instance;
}
