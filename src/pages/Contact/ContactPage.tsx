import React from "react";
import { Mail, Phone, Building2, ArrowRight } from "lucide-react";
import "./Contact.css";

export function ContactPage() {
  return (
    <section className="pageShell contactPage">
      <div className="pageIntro">
        <span className="sectionLabel">Contact</span>
        <h1>Parlons de votre tenant Microsoft 365.</h1>
        <p>Demandez une demo et voyez comment Zelynto simplifie l'administration.</p>
      </div>
      <div className="contactGrid">
        <form className="formCard">
          <label>Nom complet <input type="text" /></label>
          <label>Email pro <input type="email" /></label>
          <label>Entreprise <input type="text" /></label>
          <label>Taille du tenant 
            <select defaultValue=""><option value="" disabled>Choisir...</option><option>{"<"} 500</option><option>500 - 2500</option><option>{">"} 2500</option></select>
          </label>
          <label>Message <textarea /></label>
          <button type="button" className="formButton">Envoyer <ArrowRight size={18} /></button>
        </form>
        <aside className="contactAside">
          <div><Mail size={22} /><strong>Email</strong><span>contact@zelynto.com</span></div>
          <div><Phone size={22} /><strong>Demo</strong><span>Sous 24h</span></div>
          <div><Building2 size={22} /><strong>Cible</strong><span>IT, SecOps, MSP</span></div>
        </aside>
      </div>
    </section>
  );
}
