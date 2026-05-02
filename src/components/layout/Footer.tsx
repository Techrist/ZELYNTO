import React from "react";
import { ArrowRight } from "lucide-react";
import logo from "../../assets/zelynto-long.png";
import "./Footer.css";

interface FooterProps {
  variant?: "full" | "simple";
}

export function Footer({ variant = "full" }: FooterProps) {
  if (variant === "simple") {
    return (
      <footer className="siteFooter">
        <div className="footerGrid compactFooter">
          <div className="footerBrand"><img src={logo} alt="Zelynto" style={{ width: '100px' }} /></div>
          <div><strong>Navigation</strong><a href="#/">Accueil</a><a href="#/contact">Contact</a></div>
          <div><strong>Contact</strong><a href="mailto:contact@zelynto.com">contact@zelynto.com</a></div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="siteFooter">
      <div className="footerCta">
        <div>
          <span>Prêt pour la V1 ?</span>
          <h2>Centralisez votre administration Microsoft 365 avec Zelynto.</h2>
        </div>
        <a className="primaryLink large" href="#/contact">
          Get started
          <ArrowRight size={18} />
        </a>
      </div>

      <div className="footerGrid">
        <div className="footerBrand">
          <img src={logo} alt="Zelynto" />
          <p>
            Le copilote d'administration concu pour explorer, securiser, automatiser et auditer votre
            environnement Microsoft 365.
          </p>
        </div>

        <div>
          <strong>Produit</strong>
          <a href="#exploration">Chat M365</a>
          <a href="#exploration">Graph Explorer</a>
          <a href="#automation">Provisioning</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div>
          <strong>Securite</strong>
          <a href="#security-copilot">Alerting</a>
          <a href="#compliance">Audit continu</a>
          <a href="#security-copilot">Gouvernance</a>
        </div>

        <div>
          <strong>Ressources</strong>
          <a href="#demo">Demo produit</a>
          <a href="#exploration">Microsoft Graph</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>

      <div className="footerBottom">
        <span>© 2026 Zelynto. Tous droits reserves.</span>
        <div>
          <a href="#top">Confidentialite</a>
          <a href="#top">Conditions</a>
          <a href="#top">Statut</a>
        </div>
      </div>
    </footer>
  );
}
