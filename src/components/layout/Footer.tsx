import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/zelynto-long.png";
import { assetUrl } from "../../assets/asset";
import { FooterLanguageSelect } from "../ui/FooterLanguageSelect";
import { localizedHref, type PageKey } from "../../routing";
import { isLang, type Lang } from "../../i18n/config";
import "./Footer.css";

interface FooterProps {
  page: PageKey;
}

const quickLinks: Array<{ key: string; page: PageKey }> = [
  { key: "reporting", page: "inventories" },
  { key: "pricing", page: "pricing" },
  { key: "contact", page: "contact" }
];

const resourcesLinks: Array<{ key: string; href: string }> = [
  { key: "privacy", href: "#" },
  { key: "terms", href: "#" },
  { key: "dpa", href: "#" },
  { key: "aup", href: "#" }
];

export function Footer({ page }: FooterProps) {
  const { t, i18n } = useTranslation();
  const lang: Lang = isLang(i18n.language) ? i18n.language : "en";

  return (
    <footer className="siteFooter">
      <div className="footerCta">
        <div>
          <span>{t("footer.ctaEyebrow")}</span>
          <h2>{t("footer.ctaTitle")}</h2>
        </div>
        <a className="primaryLink large" href="https://cestfredy.github.io/zelynto-onboarding/">
          {t("common.getStarted")}
          <ArrowRight size={18} />
        </a>
      </div>

      <div className="footerGrid">
        <div className="footerBrand">
          <img src={assetUrl(logo)} alt="Zelynto" />
          <p>{t("footer.brandTagline")}</p>
        </div>

        <div>
          <strong>{t("footer.columns.quickLinks.title")}</strong>
          {quickLinks.map((link) => (
            <a key={`quick-${link.key}`} href={localizedHref(link.page, lang)}>
              {t(`footer.columns.quickLinks.links.${link.key}`)}
            </a>
          ))}
        </div>

        <div>
          <strong>{t("footer.columns.resources.title")}</strong>
          {resourcesLinks.map((link) => (
            <a key={`resources-${link.key}`} href={link.href}>
              {t(`footer.columns.resources.links.${link.key}`)}
            </a>
          ))}
        </div>

        <FooterLanguageSelect page={page} />
      </div>

      <div className="footerBottom">
        <span>{t("footer.copyright")}</span>
        <div>
          <a href="#top">{t("footer.legal.privacy")}</a>
          <a href="#top">{t("footer.legal.terms")}</a>
          <a href="#top">{t("footer.legal.status")}</a>
        </div>
      </div>
    </footer>
  );
}
