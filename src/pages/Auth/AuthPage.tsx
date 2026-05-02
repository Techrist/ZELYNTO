import React from "react";
import "./Auth.css";

export function AuthPage() {
  return (
    <section className="pageShell authPage">
      <div className="authLayout">
        <div className="authIntro">
          <h1>Connectez-vous.</h1>
          <p>Accedez a votre futur cockpit M365.</p>
        </div>
        <div className="authCards">
          <form className="formCard authCard">
            <h2>Connexion</h2>
            <label>Email <input type="email" /></label>
            <label>Pass <input type="password" /></label>
            <button type="button" className="formButton">Entrer</button>
          </form>
          <form className="formCard authCard">
            <h2>Inscription</h2>
            <label>Nom <input type="text" /></label>
            <label>Email <input type="email" /></label>
            <button type="button" className="formButton secondaryFormButton">Creer compte</button>
          </form>
        </div>
      </div>
    </section>
  );
}
