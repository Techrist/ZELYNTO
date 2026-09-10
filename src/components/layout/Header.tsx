import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/zelynto-long.png";
import { assetUrl } from "../../assets/asset";
import { ThemeToggle } from "../ui/ThemeToggle";
import { localizedHref, type PageKey } from "../../routing";
import type { Lang } from "../../i18n/config";
import "./Header.css";

interface HeaderProps {
  variant?: "full" | "simple";
  page: PageKey;
  lang: Lang;
}

const reportingLinks = [
  { page: "inventories", key: "inventories" },
  { page: "savings", key: "savings" },
  { page: "audit", key: "audit" }
] as const;

export function Header({ variant = "full", page, lang }: HeaderProps) {
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

  const reportingActive = reportingLinks.some((link) => link.page === page);

  return (
    <header className={classes.join(" ")}>
      <a className="brand" href={localizedHref("", lang)} aria-label="Zelynto" onClick={close}>
        <img src={assetUrl(logo)} alt="Zelynto" />
      </a>

      <div className="mobileBar">
        <ThemeToggle />
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
          <a
            href={localizedHref("pricing", lang)}
            onClick={close}
            className={page === "pricing" ? "isActive" : undefined}
          >
            {t("common.pricing")}
          </a>
          <div className="navDropdown">
            <button type="button" className={reportingActive ? "isActive" : undefined}>
              {t("header.reporting")}
              <ChevronDown size={14} />
            </button>
            <div className="dropdownMenu">
              {reportingLinks.map((link) => {
                const label =
                  link.key === "inventories"
                    ? t("common.inventories")
                    : t(`header.reportingLinks.${link.key}`);
                return (
                  <a
                    key={link.page}
                    href={localizedHref(link.page, lang)}
                    onClick={close}
                    className={page === link.page ? "isActive" : undefined}
                  >
                    {compact ? label.split(" ").slice(0, 2).join(" ") : label}
                  </a>
                );
              })}
            </div>
          </div>
          <a
            href={localizedHref("contact", lang)}
            onClick={close}
            className={page === "contact" ? "isActive" : undefined}
          >
            {t("common.contact")}
          </a>
        </nav>

        <div className="headerActions">
          <a
            className="ghostLink"
            href="https://app-src-zelynto-front-dev-fr-hcfhemc2fngtcze0.francecentral-01.azurewebsites.net/signin"
            onClick={close}
          >
            {t("common.signIn")}
          </a>
          <a
            className="primaryLink"
            href="https://app-src-zelynto-front-dev-fr-hcfhemc2fngtcze0.francecentral-01.azurewebsites.net/"
            onClick={close}
          >
            {t("common.getStarted")}
            <ArrowRight size={17} />
          </a>
          <ThemeToggle className="desktopThemeToggle" />
        </div>
      </div>
    </header>
  );
}
