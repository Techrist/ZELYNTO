import React, { useState } from "react";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { SectionLabel } from "../../components/ui/SectionLabel";
import "./Contact.css";

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  role: string;
  tenantSize: string;
  subject: string;
  message: string;
}

const subjects = [
  "Demander une démo",
  "Évaluer Zelynto sur mon tenant",
  "Question commerciale",
  "Question technique",
  "Partenariat / MSP",
  "Autre"
];

const benefits = [
  "Audit express de votre tenant",
  "Démo personnalisée sur vos cas d'usage",
  "Recommandations chiffrées avant engagement"
];

export function ContactPage() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    company: "",
    role: "",
    tenantSize: "",
    subject: subjects[0]!,
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof ContactFormState>(key: K, value: ContactFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contactPage">
      <div className="contactHero">
        <div className="contactHeroInner">
          <SectionLabel>Contact</SectionLabel>
          <h1>Parlons de votre tenant Microsoft 365.</h1>
          <p>
            Demandez une démo et voyez comment Zelynto simplifie l'administration : exploration en
            langage naturel, alerting hiérarchisé, actions gouvernées et audit continu.
          </p>
          <div className="contactTrust">
            <span><CheckCircle2 size={16} /> Réponse sous 24h ouvrées</span>
            <span><CheckCircle2 size={16} /> Démo personnalisée</span>
            <span><CheckCircle2 size={16} /> Sans engagement</span>
          </div>
        </div>
      </div>

      <div className="contactBody">
        <form className="formCard contactForm" onSubmit={handleSubmit} noValidate>
          <div className="formIntro">
            <SectionLabel>Votre demande</SectionLabel>
            <h2>Quelques informations pour préparer notre échange.</h2>
          </div>

          <div className="formGrid">
            <label className="formField">
              Nom complet
              <input
                type="text"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="Camille Durand"
                required
              />
            </label>

            <label className="formField">
              Email pro
              <input
                type="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder="camille@entreprise.com"
                required
              />
            </label>

            <label className="formField">
              Entreprise
              <input
                type="text"
                value={form.company}
                onChange={(event) => update("company", event.target.value)}
                placeholder="Nom de l'entreprise"
              />
            </label>

            <label className="formField">
              Rôle
              <input
                type="text"
                value={form.role}
                onChange={(event) => update("role", event.target.value)}
                placeholder="DSI, RSSI, Admin M365…"
              />
            </label>

            <label className="formField">
              Taille du tenant
              <select
                value={form.tenantSize}
                onChange={(event) => update("tenantSize", event.target.value)}
              >
                <option value="" disabled>Choisir une plage…</option>
                <option value="lt-500">Moins de 500 utilisateurs</option>
                <option value="500-2500">500 – 2 500 utilisateurs</option>
                <option value="2500-10000">2 500 – 10 000 utilisateurs</option>
                <option value="gt-10000">Plus de 10 000 utilisateurs</option>
              </select>
            </label>

            <label className="formField">
              Sujet
              <select
                value={form.subject}
                onChange={(event) => update("subject", event.target.value)}
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="formField">
            Message
            <textarea
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              placeholder="Vos enjeux actuels, ce que vous aimeriez explorer pendant la démo…"
              rows={6}
            />
          </label>

          <div className="formFooter">
            <button type="submit" className="formButton">
              Envoyer la demande
              <ArrowRight size={18} />
            </button>
            <span className="formNote">
              <ShieldCheck size={14} /> Vos données sont utilisées uniquement pour vous recontacter.
            </span>
          </div>

          {submitted && (
            <div className="formSuccess" role="status">
              <CheckCircle2 size={18} />
              Merci ! Votre demande a bien été enregistrée. Notre équipe revient vers vous sous 24h.
            </div>
          )}
        </form>

        <aside className="contactAside">
          <div className="asideCard">
            <div className="asideIcon"><Mail size={20} /></div>
            <div>
              <strong>Email</strong>
              <a href="mailto:contact@zelynto.com">contact@zelynto.com</a>
            </div>
          </div>

          <div className="asideCard">
            <div className="asideIcon"><CalendarClock size={20} /></div>
            <div>
              <strong>Démo en moins de 24h</strong>
              <span>Créneau personnalisé selon votre fuseau et vos cas d'usage.</span>
            </div>
          </div>

          <div className="asideCard">
            <div className="asideIcon"><Building2 size={20} /></div>
            <div>
              <strong>Cible</strong>
              <span>DSI, RSSI, Admin M365, MSP gérant plusieurs tenants.</span>
            </div>
          </div>

          <div className="asideHighlight">
            <div className="asideHighlightHeader">
              <Sparkles size={18} />
              <strong>Ce que vous obtenez</strong>
            </div>
            <ul>
              {benefits.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
