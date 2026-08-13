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
import { useTranslation } from "react-i18next";
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

const WHATSAPP_NUMBER = "237682448965"; 

export function ContactPage() {
  const { t } = useTranslation();
  const rawSubjects = t("contact.form.fields.subjectOptions", { returnObjects: true });
  const subjects: string[] = Array.isArray(rawSubjects) ? (rawSubjects as string[]) : [];
  const rawBenefits = t("contact.aside.benefits", { returnObjects: true });
  const benefits: string[] = Array.isArray(rawBenefits) ? (rawBenefits as string[]) : [];

  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    company: "",
    role: "",
    tenantSize: "",
    subject: subjects[0] ?? "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof ContactFormState>(key: K, value: ContactFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function buildWhatsAppMessage(data: ContactFormState): string {
    const lines = [
      "Bonjour l'équipe Zelynto ! ",
      "",
      "Je m'appelle " + data.name + " et j'aimerais échanger avec vous.",
      ""
    ];

    if (data.company) lines.push("Entreprise : " + data.company);
    if (data.role) lines.push("Rôle : " + data.role);
    if (data.email) lines.push("Email : " + data.email);
    if (data.tenantSize) lines.push("Taille du tenant : " + data.tenantSize);
    if (data.subject) lines.push("Sujet : " + data.subject);

    lines.push("");
    lines.push(data.message || "(non renseigné)");
    lines.push("");
    lines.push("Merci d'avance pour votre retour !");

    return lines.join("\n");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = buildWhatsAppMessage(form);
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedText;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      company: "",
      role: "",
      tenantSize: "",
      subject: subjects[0] ?? "",
      message: ""
    });
  }

  return (
    <section className="contactPage">
      <div className="contactHero">
        <div className="contactHeroInner">
          <SectionLabel>{t("contact.label")}</SectionLabel>
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.description")}</p>
          <div className="contactTrust">
            <span><CheckCircle2 size={16} /> {t("contact.trust.response")}</span>
            <span><CheckCircle2 size={16} /> {t("contact.trust.demo")}</span>
            <span><CheckCircle2 size={16} /> {t("contact.trust.commitment")}</span>
          </div>
        </div>
      </div>

      <div className="contactBody">
        <form className="formCard contactForm" onSubmit={handleSubmit} noValidate>
          <div className="formIntro">
            <SectionLabel>{t("contact.form.intro.label")}</SectionLabel>
            <h2>{t("contact.form.intro.title")}</h2>
          </div>

          <div className="formGrid">
            <label className="formField">
              {t("contact.form.fields.name")}
              <input
                type="text"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder={t("contact.form.fields.namePlaceholder")}
                required
              />
            </label>

            <label className="formField">
              {t("contact.form.fields.email")}
              <input
                type="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder={t("contact.form.fields.emailPlaceholder")}
                required
              />
            </label>

            <label className="formField">
              {t("contact.form.fields.company")}
              <input
                type="text"
                value={form.company}
                onChange={(event) => update("company", event.target.value)}
                placeholder={t("contact.form.fields.companyPlaceholder")}
              />
            </label>

            <label className="formField">
              {t("contact.form.fields.role")}
              <input
                type="text"
                value={form.role}
                onChange={(event) => update("role", event.target.value)}
                placeholder={t("contact.form.fields.rolePlaceholder")}
              />
            </label>

            <label className="formField">
              {t("contact.form.fields.tenantSize")}
              <select
                value={form.tenantSize}
                onChange={(event) => update("tenantSize", event.target.value)}
              >
                <option value="" disabled>{t("contact.form.fields.tenantPlaceholder")}</option>
                <option value="lt-500">{t("contact.form.fields.tenantOptions.lt500")}</option>
                <option value="500-2500">{t("contact.form.fields.tenantOptions.500to2500")}</option>
                <option value="2500-10000">{t("contact.form.fields.tenantOptions.2500to10000")}</option>
                <option value="gt-10000">{t("contact.form.fields.tenantOptions.gt10000")}</option>
              </select>
            </label>

            <label className="formField">
              {t("contact.form.fields.subject")}
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
            {t("contact.form.fields.message")}
            <textarea
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              placeholder={t("contact.form.fields.messagePlaceholder")}
              rows={6}
            />
          </label>

          <div className="formFooter">
            <button type="submit" className="formButton">
              {t("contact.form.submit")}
              <ArrowRight size={18} />
            </button>
            <span className="formNote">
              <ShieldCheck size={14} /> {t("contact.form.privacyNote")}
            </span>
          </div>

          {submitted && (
            <div className="formSuccess" role="status">
              <CheckCircle2 size={18} />
              {t("contact.form.success")}
            </div>
          )}
        </form>

        <aside className="contactAside">
          <div className="asideCard">
            <div className="asideIcon"><Mail size={20} /></div>
            <div>
              <strong>{t("contact.aside.email")}</strong>
              <a href="mailto:contact@zelynto.com">contact@zelynto.com</a>
            </div>
          </div>

          <div className="asideCard">
            <div className="asideIcon"><CalendarClock size={20} /></div>
            <div>
              <strong>{t("contact.aside.demoTitle")}</strong>
              <span>{t("contact.aside.demoText")}</span>
            </div>
          </div>

          <div className="asideCard">
            <div className="asideIcon"><Building2 size={20} /></div>
            <div>
              <strong>{t("contact.aside.audience")}</strong>
              <span>{t("contact.aside.audienceText")}</span>
            </div>
          </div>

          <div className="asideHighlight">
            <div className="asideHighlightHeader">
              <Sparkles size={18} />
              <strong>{t("contact.aside.benefitsTitle")}</strong>
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