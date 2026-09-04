import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/zelynto-long.png";
import { ThemeToggle } from "../ui/ThemeToggle";
import "./Header.css";

interface HeaderProps {
  variant?: "full" | "simple";
}

const reportingLinks = [
  { href: "#/inventories", key: "inventories" },
  { href: "#/savings", key: "savings" },
  { href: "#/audit", key: "audit" }
] as const;

export function Header({ variant = "full" }: HeaderProps) {
  const { t } = useTranslation();
  const compact = variant === "simple";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash || "#/" : "#/"
  );

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

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
        <img src={logo} alt="Zelynto" />
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
            href="#/pricing"
            onClick={close}
            className={currentHash === "#/pricing" ? "isActive" : undefined}
          >
            {t("common.pricing")}
          </a>
          <div className="navDropdown">
            <button
              type="button"
              className={
                reportingLinks.some((link) => link.href === currentHash) ? "isActive" : undefined
              }
            >
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
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className={currentHash === link.href ? "isActive" : undefined}
                  >
                    {compact ? label.split(" ").slice(0, 2).join(" ") : label}
                  </a>
                );
              })}
            </div>
          </div>
          <a
            href="#/contact"
            onClick={close}
            className={currentHash === "#/contact" ? "isActive" : undefined}
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