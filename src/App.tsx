import React, { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { LandingPage } from "./pages/Landing/LandingPage";
import { ContactPage } from "./pages/Contact/ContactPage";
import { AuthPage } from "./pages/Auth/AuthPage";
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
    <main className="landing">
      {renderContent()}
    </main>
  );
}
