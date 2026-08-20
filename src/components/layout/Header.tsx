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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 12);
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  function close() {
    setMenuOpen(false);
  }

  const classes = ["siteHeader"];
  if (menuOpen) classes.push("menuOpen");
  if (scrolled) classes.push("isScrolled");

  return (
    <header className={classes.join(" ")}>
      <a className="brand" href="#/" aria-label="Zelynto" onClick={close}>
        <LogoDelight>
          <img src={logo} alt="Zelynto" />
        </LogoDelight>
      </a>

      <div className="mobileBar">
        <LanguageToggle />
        <button
          className="burger"
          type="button"
          aria-label={menuOpen ? t("header.mobileMenu.close") : t("header.mobileMenu.open")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

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
          <a href="#/inventories" onClick={close}>{t("common.inventories")}</a>
          <a href="#/contact" onClick={close}>{t("common.contact")}</a>
        </nav>

        <div className="headerActions">
          <a
            className="ghostLink"
            href="https://app-src-zelynto-front-dev-fr-hcfhemc2fngtcze0.francecentral-01.azurewebsites.net/signin"
            onClick={close}
          >
            {t("common.signIn")}
          </a>
          <MagneticButton strength={14}>
            <a
              className="primaryLink"
              href="https://app-src-zelynto-front-dev-fr-hcfhemc2fngtcze0.francecentral-01.azurewebsites.net/"
              onClick={close}
            >
              {t("common.getStarted")}
              <ArrowRight size={17} />
            </a>
          </MagneticButton>
          <LanguageToggle className="desktopLangToggle" />
        </div>
      </div>
    </header>
  );
}