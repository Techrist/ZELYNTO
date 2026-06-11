import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/zelynto-long.png";
import { LanguageToggle } from "../ui/LanguageToggle";
import { LogoDelight } from "../utility/LogoDelight";
import { MagneticButton } from "../utility/MagneticButton";
import "./Header.css";

interface HeaderProps {
  variant?: "full" | "simple";
}

const productLinks = [
  { href: "#exploration", key: "exploration" },
  { href: "#security-copilot", key: "security" },
  { href: "#automation", key: "automation" },
  { href: "#compliance", key: "compliance" }
] as const;

export function Header({ variant = "full" }: HeaderProps) {
  const { t } = useTranslation();
  const compact = variant === "simple";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function close() {
    setMenuOpen(false);
  }

  return (
    <header className={menuOpen ? "siteHeader menuOpen" : "siteHeader"}>
      <a className="brand" href="#/" aria-label="Zelynto" onClick={close}>
        <LogoDelight>
          <img src={logo} alt="Zelynto" />
        </LogoDelight>
      </a>

      <button
        className="burger"
        type="button"
        aria-label={menuOpen ? t("header.mobileMenu.close") : t("header.mobileMenu.open")}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className="headerCollapsible">
        <nav>
          <div className="navDropdown">
            <button type="button">
              {t("header.product")}
              <ChevronDown size={14} />
            </button>
            <div className="dropdownMenu">
              {productLinks.map((link) => {
                const label = t(`header.productLinks.${link.key}`);
                return (
                  <a key={link.href} href={link.href} onClick={close}>
                    {compact ? label.split(" ").slice(0, 2).join(" ") : label}
                  </a>
                );
              })}
            </div>
          </div>
          <a href="#how-it-works" onClick={close}>{t("header.howItWorks")}</a>
          <a href="#pricing" onClick={close}>{t("common.pricing")}</a>
          <a href="#faq" onClick={close}>{t("common.faq")}</a>
          <a href="#/contact" onClick={close}>{t("common.contact")}</a>
        </nav>

        <div className="headerActions">
          <a
            className="ghostLink"
            href="https://cestfredy.github.io/zelynto-onboarding/login"
            onClick={close}
          >
            {t("common.signIn")}
          </a>
          <MagneticButton strength={14}>
            <a
              className="primaryLink"
              href="https://cestfredy.github.io/zelynto-onboarding/"
              onClick={close}
            >
              {t("common.getStarted")}
              <ArrowRight size={17} />
            </a>
          </MagneticButton>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
