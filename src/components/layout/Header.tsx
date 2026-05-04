import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/zelynto-long.png";
import "./Header.css";

interface HeaderProps {
  variant?: "full" | "simple";
}

const productLinks = [
  { href: "#exploration", label: "Exploration intelligente M365" },
  { href: "#security-copilot", label: "Security Copilot & Alerting" },
  { href: "#automation", label: "Automation & Provisioning" },
  { href: "#compliance", label: "Audit & Compliance Copilot" }
];

export function Header({ variant = "full" }: HeaderProps) {
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
      <a className="brand" href="#/" aria-label="Zelynto accueil" onClick={close}>
        <img src={logo} alt="Zelynto" />
      </a>

      <button
        className="burger"
        type="button"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className="headerCollapsible">
        <nav aria-label="Navigation principale">
          <div className="navDropdown">
            <button type="button">
              Produit
              <ChevronDown size={14} />
            </button>
            <div className="dropdownMenu">
              {productLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={close}>
                  {compact ? link.label.split(" ").slice(0, 2).join(" ") : link.label}
                </a>
              ))}
            </div>
          </div>
          <a href="#how-it-works" onClick={close}>Comment ça marche</a>
          <a href="#pricing" onClick={close}>Pricing</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a href="#/contact" onClick={close}>Contact</a>
        </nav>

        <div className="headerActions">
          <a
            className="ghostLink"
            href="https://cestfredy.github.io/zelynto-onboarding/login"
            onClick={close}
          >
            Se connecter
          </a>
          <a
            className="primaryLink"
            href="https://cestfredy.github.io/zelynto-onboarding/"
            onClick={close}
          >
            Get started
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}
