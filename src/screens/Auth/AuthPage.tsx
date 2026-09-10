import React from "react";
import { useTranslation } from "react-i18next";
import "./Auth.css";

export function AuthPage() {
  const { t } = useTranslation();
  return (
    <section className="pageShell authPage">
      <div className="authLayout">
        <div className="authIntro">
          <h1>{t("auth.title")}</h1>
          <p>{t("auth.description")}</p>
        </div>
        <div className="authCards">
          <form className="formCard authCard">
            <h2>{t("auth.login.title")}</h2>
            <label>{t("auth.login.email")} <input type="email" /></label>
            <label>{t("auth.login.password")} <input type="password" /></label>
            <button type="button" className="formButton">{t("auth.login.cta")}</button>
          </form>
          <form className="formCard authCard">
            <h2>{t("auth.signup.title")}</h2>
            <label>{t("auth.signup.name")} <input type="text" /></label>
            <label>{t("auth.signup.email")} <input type="email" /></label>
            <button type="button" className="formButton secondaryFormButton">{t("auth.signup.cta")}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
