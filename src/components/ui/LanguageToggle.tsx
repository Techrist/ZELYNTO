import React from "react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS } from "../../i18n/config";

export function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const current = (SUPPORTED_LANGS as readonly string[]).includes(i18n.language)
    ? i18n.language
    : "en";

  return (
    <div className="langToggle" role="group" aria-label={t("language.label")}>
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
