import React from "react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS } from "../../i18n/config";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { i18n, t } = useTranslation();
  const current = (SUPPORTED_LANGS as readonly string[]).includes(i18n.language)
    ? i18n.language
    : "en";

  const rootClass = className ? "langToggle " + className : "langToggle";

  return (
    <div className={rootClass} role="group" aria-label={t("language.label")}>
      {SUPPORTED_LANGS.map((lang) => (
        <button
          key={lang}
          type="button"
          className={lang === current ? "langToggleItem active" : "langToggleItem"}
          onClick={() => i18n.changeLanguage(lang)}
          aria-pressed={lang === current}
        >
          {t(`language.${lang}`)}
        </button>
      ))}
    </div>
  );
}