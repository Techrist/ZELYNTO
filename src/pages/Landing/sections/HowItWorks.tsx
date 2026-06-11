import React, { useEffect, useRef, useState } from "react";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  FolderOpen,
  Lock,
  MessageSquare,
  ShieldCheck,
  Users,
  XCircle
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { steps } from "../../../content/howItWorks";
import { SectionLabel } from "../../../components/ui/SectionLabel";
import zelyntoMark from "../../../assets/zelynto-mark.svg";

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

  const mockups = [
    <ConnectStackMockup key="0" active={activeStep === 0} />,
    <AuthorizeMockup key="1" active={activeStep === 1} />,
    <GovernanceMockup key="2" active={activeStep === 2} />,
    <AllSetMockup key="3" active={activeStep === 3} />
  ];

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
            {mockups.map((mockup, i) => (
              <div
                key={i}
                className={activeStep === i ? "howMockup isVisible" : "howMockup"}
              >
                {mockup}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   Mockup 1 — Connect your stack
   ----------------------------------------------------------- */

function ConnectStackMockup({ active }: { active: boolean }) {
  return (
    <div className={active ? "mockupCard mockupDark mockupStack isActive" : "mockupCard mockupDark mockupStack"}>
      <div className="mockupDarkLabel">Connect your stack</div>
      <h4 className="mockupDarkTitle">What systems do you work with?</h4>
      <p className="mockupDarkSub">
        Select one or more. You can always add, remove, or scope connectors later from Admin → Integrations.
      </p>

      <div className="mockupStackCard">
        <div className="mockupStackHead">
          <div className="mockupStackIcon">
            <span /><span /><span /><span />
          </div>
          <div className="mockupStackTitle">
            <strong>Microsoft 365</strong>
            <span className="mockupStackBadge">12 services</span>
          </div>
          <div className="mockupStackCheck">
            <Check size={14} />
          </div>
        </div>
        <p className="mockupStackDesc">
          Users, groups, teams, sites, licenses, mailboxes, devices, security policies and more.
        </p>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   Mockup 2 — Authorize Microsoft 365
   ----------------------------------------------------------- */

function AuthorizeMockup({ active }: { active: boolean }) {
  const capabilities = [
    { icon: Users, title: "Scan users, groups & licenses", sub: "Full inventory of your tenant" },
    { icon: FolderOpen, title: "Analyze SharePoint & OneDrive", sub: "Sites, storage and activity" },
    { icon: MessageSquare, title: "Review Teams & mailboxes", sub: "Activity, status and configuration" },
    { icon: ShieldCheck, title: "Read security & access policies", sub: "Conditional access and Entra ID" }
  ];

  return (
    <div className={active ? "mockupCard mockupDark mockupAuth isActive" : "mockupCard mockupDark mockupAuth"}>
      <div className="mockupDarkLabel">Connector 1 of 1 · Microsoft 365</div>
      <h4 className="mockupDarkTitle">Connect your Microsoft 365</h4>
      <p className="mockupDarkSub">
        Sign in with your Microsoft account. Zelynto will get to know your environment so it can answer your questions and take action, instantly.
      </p>

      <div className="mockupAuthGrid">
        <div className="mockupAuthList">
          <div className="mockupAuthItems">
            {capabilities.map((cap, idx) => (
              <div
                className="mockupAuthItem"
                key={cap.title}
                style={{ "--i": idx } as React.CSSProperties}
              >
                <span className="mockupAuthItemIcon">
                  <cap.icon size={14} />
                </span>
                <div>
                  <strong>{cap.title}</strong>
                  <span>{cap.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mockupAuthPanel">
          <div className="mockupAuthOrbit">
            <img src={zelyntoMark} alt="" />
            <span className="mockupAuthMsLogo">
              <span /><span /><span /><span />
            </span>
          </div>
          <span className="mockupAuthEyebrow">OAuth 2.0 · Entra ID</span>
          <strong className="mockupAuthHeading">Ready to authorize</strong>
          <p className="mockupAuthDesc">
            A Microsoft consent window will open. Approve once, revoke anytime from your admin console.
          </p>
          <button type="button" className="mockupAuthButton" tabIndex={-1} aria-hidden="true">
            <span className="mockupAuthMsBadge">
              <span /><span /><span /><span />
            </span>
            Authorize with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   Mockup 3 — Set governance rules
   ----------------------------------------------------------- */

function GovernanceMockup({ active }: { active: boolean }) {
  const rules = [
    {
      title: "Always require human approval",
      sub: "Every agent action, even safe reads, asks for explicit confirmation before executing.",
      on: true
    },
    {
      title: "Block destructive actions",
      sub: "Hard-stop delete, drop, overwrite, or mass-update operations.",
      on: true,
      badge: "Recommended"
    },
    {
      title: "Require approval for write operations",
      sub: "Sends, updates, creations, and status changes need a thumbs-up.",
      on: true
    }
  ];

  const previews = [
    {
      kind: "block" as const,
      action: "delete 38 closed opportunities",
      state: "Blocked: destructive"
    },
    {
      kind: "approve" as const,
      action: "send 6 follow-up emails",
      state: "Approval required"
    },
    {
      kind: "approve" as const,
      action: "read 12 SharePoint documents",
      state: "Approval required"
    }
  ];

  return (
    <div className={active ? "mockupCard mockupDark mockupGov isActive" : "mockupCard mockupDark mockupGov"}>
      <div className="mockupDarkLabel">Governance</div>
      <h4 className="mockupDarkTitle">Set your governance rules</h4>
      <p className="mockupDarkSub">
        Zelynto always asks before acting. Configure when, how loudly, and who's in the loop.
      </p>

      <div className="mockupGovGrid">
        <div className="mockupGovRules">
          {rules.map((rule, i) => (
            <div
              className="mockupGovRule"
              key={rule.title}
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="mockupGovRuleBody">
                <strong>{rule.title}</strong>
                <span>{rule.sub}</span>
              </div>
              {rule.badge ? <span className="mockupGovBadge">{rule.badge}</span> : null}
              <span className={rule.on ? "mockupToggle isOn" : "mockupToggle"}>
                <span />
              </span>
            </div>
          ))}

          <div
            className="mockupGovRule mockupGovSlider"
            style={{ "--i": rules.length } as React.CSSProperties}
          >
            <div className="mockupGovRuleBody">
              <strong>Minimum risk level requiring validation</strong>
              <span>Operations at or above this level trigger approval.</span>
            </div>
            <span className="mockupGovBadge mockupGovBadgeNeutral">Medium</span>
            <div className="mockupGovTrack">
              <div className="mockupGovTrackFill" />
              <span className="mockupGovTrackThumb" />
              <div className="mockupGovTrackLabels">
                <span>Low</span>
                <span className="isOn">Medium</span>
                <span>High</span>
                <span>Critical</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mockupGovPreview">
          <div className="mockupGovPreviewLabel">Live preview</div>
          {previews.map((p, i) => (
            <div
              className="mockupGovPreviewBlock"
              key={p.action}
              style={{ "--i": i } as React.CSSProperties}
            >
              <span className="mockupGovPreviewAction">
                Agent wants to <strong>{p.action}</strong>.
              </span>
              <div className={`mockupGovVerdict ${p.kind === "block" ? "isBlocked" : "isApprove"}`}>
                {p.kind === "block" ? <XCircle size={14} /> : <ShieldCheck size={14} />}
                <div>
                  <strong>{p.state}</strong>
                  <span>Decision will be logged to the audit trail.</span>
                </div>
              </div>
            </div>
          ))}
          <p className="mockupGovAuditNote">
            All decisions, approvals, and refusals are written to an immutable audit log. Tenant admins can replay any session.
          </p>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   Mockup 4 — You're all set
   ----------------------------------------------------------- */

function AllSetMockup({ active }: { active: boolean }) {
  return (
    <div className={active ? "mockupCard mockupDark mockupAllSet isActive" : "mockupCard mockupDark mockupAllSet"}>
      <div className="mockupAllSetCheck">
        <CheckCircle2 size={28} />
      </div>
      <div className="mockupDarkLabel mockupAllSetLabel">Workspace provisioned</div>
      <h4 className="mockupAllSetTitle">You're all set !</h4>
      <p className="mockupAllSetSub">
        Your connector are authorized. Start a conversation and Zelynto will handle the rest.
      </p>

      <div className="mockupAllSetCards">
        <div className="mockupAllSetCard">
          <span className="mockupAllSetCardIcon">
            <span /><span /><span /><span />
          </span>
          <div>
            <strong>Microsoft 365</strong>
            <span>Connected · 4 scopes</span>
          </div>
          <span className="mockupAllSetLive"><span />Live</span>
        </div>
        <div className="mockupAllSetCard">
          <span className="mockupAllSetCardIcon mockupAllSetCardIconGov">
            <Lock size={16} />
          </span>
          <div>
            <strong>Governance policy</strong>
            <span>Strict · 3 rules · audit on</span>
          </div>
          <span className="mockupAllSetLive"><span />Live</span>
        </div>
      </div>

      <button type="button" className="mockupAllSetCta" tabIndex={-1} aria-hidden="true">
        Start using Zelynto
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

