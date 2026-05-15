import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/zelynto-long.png";
import "./Footer.css";

const productLinks: Array<{ key: string; href: string }> = [
  { key: "chat", href: "#exploration" },
  { key: "graph", href: "#exploration" },
  { key: "provisioning", href: "#automation" },
  { key: "pricing", href: "#pricing" }
];

const securityLinks: Array<{ key: string; href: string }> = [
  { key: "alerting", href: "#security-copilot" },
  { key: "audit", href: "#compliance" },
  { key: "governance", href: "#security-copilot" }
];

const resourcesLinks: Array<{ key: string; href: string }> = [
  { key: "demo", href: "#demo" },
  { key: "graph", href: "#exploration" },
  { key: "contact", href: "#/contact" }
];

export function Footer() {
  const { t } = useTranslation();

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
          <img src={logo} alt="Zelynto" />
          <p>{t("footer.brandTagline")}</p>
        </div>

        <div>
          <strong>{t("footer.columns.product.title")}</strong>
          {productLinks.map((link) => (
            <a key={`product-${link.key}`} href={link.href}>
              {t(`footer.columns.product.links.${link.key}`)}
            </a>
          ))}
        </div>

        <div>
          <strong>{t("footer.columns.security.title")}</strong>
          {securityLinks.map((link) => (
            <a key={`security-${link.key}`} href={link.href}>
              {t(`footer.columns.security.links.${link.key}`)}
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
