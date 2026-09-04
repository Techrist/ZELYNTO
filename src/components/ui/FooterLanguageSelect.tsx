import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS, type Lang } from "../../i18n/config";

const FLAGS: Record<Lang, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
  it: "🇮🇹",
  es: "🇪🇸"
};

export function FooterLanguageSelect() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current: Lang = (SUPPORTED_LANGS as readonly string[]).includes(i18n.language)
    ? (i18n.language as Lang)
    : "en";

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="footerLangSelect" ref={rootRef}>
      <button
        type="button"
        className="footerLangSelectTrigger"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        title={t("footer.language.label")}
      >
        <span>
          <span className="footerLangFlag" aria-hidden="true">
            {FLAGS[current]}
          </span>
          {t(`language.${current}Full`)}
        </span>
        <ChevronDown size={16} className={open ? "isOpen" : undefined} />
      </button>

      {open && (
        <ul className="footerLangSelectMenu" role="listbox">
          {SUPPORTED_LANGS.map((lang) => (
            <li key={lang}>
              <button
                type="button"
                role="option"
                aria-selected={lang === current}
                className={lang === current ? "isActive" : undefined}
                onClick={() => {
                  i18n.changeLanguage(lang);
                  setOpen(false);
                }}
              >
                <span className="footerLangFlag" aria-hidden="true">
                  {FLAGS[lang]}
                </span>
                {t(`language.${lang}Full`)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
