import React, { useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { createI18n } from "./i18n/instance";
import type { Lang } from "./i18n/config";
import type { PageKey } from "./routing";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsAppButton } from "./components/layout/FloatingWhatsAppButton";
import { SmoothScroll } from "./components/utility/SmoothScroll";
import { ScrollProgress } from "./components/utility/ScrollProgress";
import { LandingPage } from "./screens/Landing/LandingPage";
import { ContactPage } from "./screens/Contact/ContactPage";
import { AuthPage } from "./screens/Auth/AuthPage";
import { InventoriesPage } from "./screens/Inventories/InventoriesPage";
import { PricingPage } from "./screens/Pricing/PricingPage";
import { SavingsShowcase } from "./screens/SavingsShowcase/SavingsShowcase";
import { AuditShowcase } from "./screens/Audit/AuditShowcase";
import "./styles/global.css";

interface PageShellProps {
  lang: Lang;
  page: PageKey;
}

function PageBody({ page, lang }: PageShellProps) {
  switch (page) {
    case "pricing":
      return (
        <>
          <Header variant="simple" page={page} lang={lang} />
          <PricingPage />
          <Footer page={page} />
        </>
      );
    case "contact":
      return (
        <>
          <Header variant="simple" page={page} lang={lang} />
          <ContactPage />
          <Footer page={page} />
        </>
      );
    case "inventories":
      return (
        <>
          <Header variant="simple" page={page} lang={lang} />
          <InventoriesPage />
          <Footer page={page} />
        </>
      );
    case "savings":
      return (
        <>
          <Header variant="simple" page={page} lang={lang} />
          <SavingsShowcase />
          <Footer page={page} />
        </>
      );
    case "audit":
      return (
        <>
          <Header variant="simple" page={page} lang={lang} />
          <AuditShowcase />
          <Footer page={page} />
        </>
      );
    case "connexion":
      return (
        <>
          <Header variant="simple" page={page} lang={lang} />
          <AuthPage />
        </>
      );
    default:
      return (
        <>
          <Header page={page} lang={lang} />
          <LandingPage />
          <Footer page={page} />
        </>
      );
  }
}

export default function PageShell({ lang, page }: PageShellProps) {
  const i18n = useMemo(() => createI18n(lang), [lang]);

  return (
    <I18nextProvider i18n={i18n}>
      <SmoothScroll />
      <ScrollProgress />
      <main className="landing">
        <PageBody page={page} lang={lang} />
      </main>
      <FloatingWhatsAppButton phoneNumber="+237692979345" />
    </I18nextProvider>
  );
}
