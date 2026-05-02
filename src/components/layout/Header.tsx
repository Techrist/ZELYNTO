import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import logo from "../../assets/zelynto-long.png";
import "./Header.css";

interface HeaderProps {
  variant?: "full" | "simple";
}

export function Header({ variant = "full" }: HeaderProps) {
  if (variant === "simple") {
    return (
      <header className="siteHeader">
        <a className="brand" href="#/" aria-label="Zelynto accueil">
          <img src={logo} alt="Zelynto" />
        </a>
        <nav aria-label="Navigation principale">
          <div className="navDropdown">
            <button type="button">Produit <ChevronDown size={14} /></button>
            <div className="dropdownMenu">
              <a href="#exploration">Exploration intelligente</a>
              <a href="#security-copilot">Security & Alerting</a>
              <a href="#automation">Automation</a>
              <a href="#compliance">Audit & Compliance</a>
            </div>
          </div>
          <a href="#pricing">Pricing</a>
          <a href="#/contact">Contact</a>
        </nav>
        <div className="headerActions">
          <a className="ghostLink" href="#/connexion">Se connecter</a>
          <a className="primaryLink" href="#/contact">Get started <ArrowRight size={17} /></a>
        </div>
      </header>
    );
  }

  return (
    <header className="siteHeader">
      <a className="brand" href="#/" aria-label="Zelynto accueil">
        <img src={logo} alt="Zelynto" />
      </a>

      <nav aria-label="Navigation principale">
        <div className="navDropdown">
          <button type="button">
            Produit
            <ChevronDown size={14} />
          </button>
          <div className="dropdownMenu">
            <a href="#exploration">Exploration intelligente M365</a>
            <a href="#security-copilot">Security Copilot & Alerting</a>
            <a href="#automation">Automation & Provisioning</a>
            <a href="#compliance">Audit & Compliance Copilot</a>
          </div>
        </div>
        <a href="#pricing">Pricing</a>
        <a href="#/contact">Contact</a>
      </nav>

      <div className="headerActions">
        <a className="ghostLink" href="#/connexion">Se connecter</a>
        <a className="primaryLink" href="#/contact">
          Get started
          <ArrowRight size={17} />
        </a>
      </div>
    </header>
  );
}
