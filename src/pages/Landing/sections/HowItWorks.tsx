import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ListChecks,
  Pause,
  Plus,
  Shield,
  Sparkles
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { steps } from "../../../content/howItWorks";
import { SectionLabel } from "../../../components/ui/SectionLabel";
import { ChatPanel } from "../../../components/shared/ChatPanel";

interface StepText {
  title: string;
  description: string;
}

export function HowItWorks() {
  const { t } = useTranslation();
  const raw = t("howItWorks.steps", { returnObjects: true });
  const stepTexts: StepText[] = Array.isArray(raw) ? (raw as StepText[]) : [];

  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const manualOverrideUntil = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (performance.now() < manualOverrideUntil.current) return;
        const rect = section.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const progress = total > 0 ? scrolled / total : 0;
        const count = steps.length;
        const next = Math.min(Math.floor(progress * count), count - 1);
        setActiveStep(next < 0 ? 0 : next);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  function jumpTo(index: number) {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const total = rect.height - window.innerHeight;
    const fraction = (index + 0.5) / steps.length;
    const target = sectionTop + fraction * total;
    setActiveStep(index);
    manualOverrideUntil.current = performance.now() + 900;
    window.scrollTo({ top: target, behavior: "smooth" });
  }

  return (
    <section className="howItWorksSection" id="how-it-works" ref={sectionRef}>
      <div className="howItWorksSticky">
        <header className="howIntro">
          <SectionLabel>{t("howItWorks.label")}</SectionLabel>
          <h2>{t("howItWorks.title")}</h2>
          <p>{t("howItWorks.description")}</p>
        </header>

        <div className="howBody">
          <div className="howStepsList">
            {steps.map(({ index, icon: Icon }, i) => {
              const step = stepTexts[i];
              if (!step) return null;
              return (
                <button
                  type="button"
                  key={index}
                  className={i === activeStep ? "howStepCompact isActive" : "howStepCompact"}
                  onClick={() => jumpTo(i)}
                  aria-current={i === activeStep ? "step" : undefined}
                >
                  <span className="howStepCompactIndex">{index}</span>
                  <div className="howStepCompactIcon">
                    <Icon size={18} />
                  </div>
                  <div className="howStepCompactBody">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="howStage" aria-hidden="true">
            <div className={activeStep === 0 ? "howMockup isVisible" : "howMockup"}>
              <ConnectMockup active={activeStep === 0} />
            </div>
            <div className={activeStep === 1 ? "howMockup isVisible" : "howMockup"}>
              <ChatPanel variant="explore" />
            </div>
            <div className={activeStep === 2 ? "howMockup isVisible" : "howMockup"}>
              <ValidateMockup active={activeStep === 2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   Mockup 1 — Connect: Entra ID app registration
   ----------------------------------------------------------- */

function ConnectMockup({ active }: { active: boolean }) {
  return (
    <div className={active ? "mockupCard mockupEntra isActive" : "mockupCard mockupEntra"}>
      <div className="mockupTopBar">
        <div className="windowDots">
          <span /><span /><span />
        </div>
        <span>portal.azure.com</span>
      </div>
      <div className="mockupBody">
        <div className="mockupHeader">
          <div className="mockupHeaderIcon"><Shield size={18} /></div>
          <div>
            <strong>App registration</strong>
            <span>Microsoft Entra ID</span>
          </div>
        </div>

        <div className="mockupField">
          <label>Display name</label>
          <div className="mockupInput readonly">Zelynto · M365 Copilot</div>
        </div>

        <div className="mockupField">
          <label>API permissions</label>
          <div className="mockupPermList">
            <span className="mockupPerm" style={{ "--i": "0" } as React.CSSProperties}>
              <CheckCircle2 size={14} />
              <code>Directory.Read.All</code>
            </span>
            <span className="mockupPerm" style={{ "--i": "1" } as React.CSSProperties}>
              <CheckCircle2 size={14} />
              <code>User.Read.All</code>
            </span>
            <span className="mockupPerm" style={{ "--i": "2" } as React.CSSProperties}>
              <CheckCircle2 size={14} />
              <code>AuditLog.Read.All</code>
            </span>
          </div>
        </div>

        <div className="mockupCta">
          <CheckCircle2 size={14} />
          Grant admin consent
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   Mockup 3 — Validate: action plan with approval
   ----------------------------------------------------------- */

function ValidateMockup({ active }: { active: boolean }) {
  return (
    <div className={active ? "mockupCard mockupValidate isActive" : "mockupCard mockupValidate"}>
      <div className="mockupValidateHeader">
        <div className="mockupValidateIcon"><Sparkles size={18} /></div>
        <div>
          <strong>Action plan</strong>
          <span>Create 5 marketing groups</span>
        </div>
        <span className="mockupValidateBadge">Awaiting approval</span>
      </div>

      <div className="mockupValidateSteps">
        <div className="mockupValidateStep">
          <span className="mockupValidateCheck"><ListChecks size={14} /></span>
          <div>
            <strong>Naming convention</strong>
            <code>MKT-Brand · MKT-Growth · MKT-Content · …</code>
          </div>
        </div>
        <div className="mockupValidateStep">
          <span className="mockupValidateCheck"><Plus size={14} /></span>
          <div>
            <strong>Create 5 Microsoft 365 groups</strong>
            <span>Owners assigned · members provisioned</span>
          </div>
        </div>
        <div className="mockupValidateStep">
          <span className="mockupValidateCheck"><Shield size={14} /></span>
          <div>
            <strong>Log to audit registry</strong>
            <span>Signed, append-only, exportable</span>
          </div>
        </div>
      </div>

      <div className="mockupValidateFooter">
        <span className="mockupValidatePause"><Pause size={14} /></span>
        <span className="mockupValidateText">Nothing runs until you click confirm.</span>
        <button type="button" className="mockupValidateConfirm" tabIndex={-1} aria-hidden="true">
          Confirm
        </button>
      </div>
    </div>
  );
}
