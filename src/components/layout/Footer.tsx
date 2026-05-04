import React from "react";
import { ArrowRight } from "lucide-react";
import logo from "../../assets/zelynto-long.png";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerCta">
        <div>
          <span>Prêt pour la V1 ?</span>
          <h2>Centralisez votre administration Microsoft 365 avec Zelynto.</h2>
        </div>
        <a className="primaryLink large" href="https://cestfredy.github.io/zelynto-onboarding/">
          Get started
          <ArrowRight size={18} />
        </a>
      </div>

      <div className="footerGrid">
        <div className="footerBrand">
          <img src={logo} alt="Zelynto" />
          <p>
            Le copilote d'administration conçu pour explorer, sécuriser, automatiser et auditer votre
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
          <strong>Sécurité</strong>
          <a href="#security-copilot">Alerting</a>
          <a href="#compliance">Audit continu</a>
          <a href="#security-copilot">Gouvernance</a>
        </div>

        <div>
          <strong>Ressources</strong>
          <a href="#demo">Démo produit</a>
          <a href="#exploration">Microsoft Graph</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>

      <div className="footerBottom">
        <span>© 2026 Zelynto. Tous droits réservés.</span>
        <div>
          <a href="#top">Confidentialité</a>
          <a href="#top">Conditions</a>
          <a href="#top">Statut</a>
        </div>
      </div>
    </footer>
  );
}
