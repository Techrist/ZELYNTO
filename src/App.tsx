import React, { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsAppButton } from "./components/layout/FloatingWhatsAppButton";
import { LandingPage } from "./pages/Landing/LandingPage";
import { ContactPage } from "./pages/Contact/ContactPage";
import { AuthPage } from "./pages/Auth/AuthPage";
import { SmoothScroll } from "./components/utility/SmoothScroll";
import { ScrollProgress } from "./components/utility/ScrollProgress";
import { InventoriesPage } from "./pages/Inventories/InventoriesPage";
import { PricingPage } from "./pages/Pricing/PricingPage";
import { SavingsShowcase } from "./pages/SavingsShowcase/SavingsShowcase";
import { AuditShowcase } from "./pages/Audit/AuditShowcase";
import "./styles/global.css";

export default function App() {
  const [hash, setHash] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderContent = () => {
    if (hash === "#/contact") {
      return (
        <>
          <Header variant="simple" />
          <ContactPage />
          <Footer />
        </>
      );
    }

    if (hash === "#/inventories") {
      return (
        <>
          <Header variant="simple" />
          <InventoriesPage />
          <Footer />
        </>
      );
    }

    if (hash === "#/pricing") {
      return (
        <>
          <Header variant="simple" />
          <PricingPage />
          <Footer />
        </>
      );
    }

    if (hash === "#/savings") {
      return (
        <>
          <Header variant="simple" />
          <SavingsShowcase />
          <Footer />
        </>
      );
    }

    if (hash === "#/audit") {
      return (
        <>
          <Header variant="simple" />
          <AuditShowcase />
          <Footer />
        </>
      );
    }

    if (hash === "#/connexion" || hash === "#/inscription") {
      return (
        <>
          <Header variant="simple" />
          <AuthPage />
        </>
      );
    }

    return (
      <>
        <Header />
        <LandingPage />
        <Footer />
      </>
    );
  };

  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <main className="landing">
        {renderContent()}
      </main>
      <FloatingWhatsAppButton phoneNumber="+237692979345" />
    </>
  );
}