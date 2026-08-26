import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
// ⚠️ Ajustez la profondeur du chemin relatif selon l'emplacement réel de ce
// fichier par rapport à content/savings.ts (même logique que
// InventoriesPage.tsx -> "../../content/inventories").
import { savingsHighlightDefinitions } from "../../content/savings";
import "./SavingsShowcase.css";

/* ────────────────────────────────────────────────────────────
   Hook: dessine les traits SVG (stroke-dasharray) au scroll,
   respecte prefers-reduced-motion, se déclenche une seule fois.
   ──────────────────────────────────────────────────────────── */
function useDrawLoop<T extends HTMLElement>(delay = 0, duration = 3200) {
  const wrapperRef = useRef<T>(null);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const svg = node.querySelector("svg");
    const shapes = svg
      ? Array.from(svg.querySelectorAll<SVGGeometryElement>("path, circle, ellipse, rect, line, polyline"))
      : [];

    if (reduceMotion) {
      shapes.forEach((shape) => {
        shape.style.strokeDasharray = "none";
        shape.style.strokeDashoffset = "0";
      });
      return;
    }

    shapes.forEach((shape) => {
      const length = shape.getTotalLength ? shape.getTotalLength() : 300;
      shape.style.setProperty("--path-length", `${length}`);
      shape.style.strokeDasharray = `${length}`;
      shape.style.strokeDashoffset = `${length}`;
      shape.style.animationDuration = `${duration}ms`;
      shape.style.animationDelay = `${delay}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsLooping(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, duration]);

  return { wrapperRef, isLooping };
}

function LicensesIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="20" y="52" width="62" height="38" rx="7" stroke="url(#savingsIconGradient)" />
      <rect x="33" y="38" width="62" height="38" rx="7" stroke="url(#savingsIconGradient)" />
      <rect x="46" y="24" width="62" height="38" rx="7" stroke="url(#savingsIconGradient)" />
      <line x1="58" y1="40" x2="80" y2="40" stroke="url(#savingsIconGradient)" />
    </svg>
  );
}

function InactiveUsersIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="60" cy="42" r="18" stroke="url(#savingsIconGradient)" />
      <path d="M26 96c0-21 15.2-34 34-34s34 13 34 34" stroke="url(#savingsIconGradient)" />
      <path d="M92 30l14 14M106 30l-14 14" stroke="url(#savingsIconGradient)" />
    </svg>
  );
}

function StorageIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="60" cy="32" rx="34" ry="12" stroke="url(#savingsIconGradient)" />
      <path d="M26 32v22c0 6.6 15.2 12 34 12s34-5.4 34-12V32" stroke="url(#savingsIconGradient)" />
      <path d="M26 54v22c0 6.6 15.2 12 34 12s34-5.4 34-12V54" stroke="url(#savingsIconGradient)" />
    </svg>
  );
}

// Table de correspondance i18nKey -> icône (les clés viennent de
// content/savings.ts, dans l'ordre attendu par savings.highlights.* côté i18n).
const HIGHLIGHT_ICONS: Record<string, React.ReactNode> = {
  licenses: <LicensesIcon />,
  users: <InactiveUsersIcon />,
  storage: <StorageIcon />
};

/* ────────────────────────────────────────────────────────────
   Bloc explicatif individuel
   ──────────────────────────────────────────────────────────── */
interface HighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function HighlightBlock({ icon, title, description, index }: HighlightProps) {
  const { wrapperRef, isLooping } = useDrawLoop<HTMLDivElement>(index * 150);

  return (
    <div className="highlightBlock">
      <div
        ref={wrapperRef}
        className={["iconWrap", isLooping ? "isAnimating" : ""].join(" ").trim()}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


function SavingsCardMock() {
  const { t } = useTranslation();

  return (
    <div className="savingsCardMock">

      <nav className="inventoriesTabs savingsMockTabs">
        <button type="button" tabIndex={-1}>
          {t("inventories.tabs.inventories")}
        </button>
        <button type="button" className="isActive" tabIndex={-1}>
          {t("inventories.tabs.savings")}
        </button>
        <button type="button" tabIndex={-1}>
          {t("inventories.tabs.audit")}
        </button>
      </nav>

      <div className="mockMeta">
        <span>
          {t("savings.mock.metaSummary", { unused: 8, inactive: 17 })}
        </span>
        <div className="ghostThresholds ghostThresholdsHeader">
          <span className="ghostThreshold">{t("savings.mock.periods.30d")}</span>
          <span className="ghostThreshold isActive">{t("savings.mock.periods.60d")}</span>
          <span className="ghostThreshold">{t("savings.mock.periods.90d")}</span>
        </div>
      </div>

      <div className="mockSavingsHero">
        <span className="mockEyebrow">{t("savings.mock.heroLabel")}</span>
        <strong>{t("savings.mock.heroValue", { amount: "4 850" })}</strong>
        <span className="mockCaption">{t("savings.mock.heroCaption", { days: 60 })}</span>
      </div>

      <div className="mockSection">
        <span className="ghostSectionLabel">{t("savings.mock.sections.licenses.label")}</span>
        <div className="mockInfoBanner">{t("savings.mock.sections.licenses.emptyBanner")}</div>
      </div>

      <div className="mockSection">
        <span className="ghostSectionLabel">{t("savings.mock.sections.usage.label")}</span>
        <div className="ghostRow mockRow">
          <div>
            <strong>{t("savings.mock.rows.inactiveUsers.title")}</strong>
            <span>{t("savings.mock.rows.inactiveUsers.subtitle", { count: 17 })}</span>
          </div>
          <span className="mockValue">{t("savings.mock.rows.inactiveUsers.value", { amount: "2 040" })}</span>
        </div>
        <div className="ghostRow mockRow">
          <div>
            <strong>{t("savings.mock.rows.inactiveSites.title")}</strong>
            <span>{t("savings.mock.rows.inactiveSites.subtitle", { count: 93, size: "2,4" })}</span>
          </div>
          <span className="mockValue">{t("savings.mock.rows.inactiveSites.value", { amount: "2 810" })}</span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Section complète
   ──────────────────────────────────────────────────────────── */
export function SavingsShowcase() {
  const { t } = useTranslation();

  return (
    <section className="savingsShowcase" id="savings">
      {/* défini une seule fois, référencé par toutes les icônes */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <linearGradient id="savingsIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#31b7e8" />
            <stop offset="50%" stopColor="#5b63d9" />
            <stop offset="100%" stopColor="#a43da0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="savingsIntro">
        <span className="eyebrow sectionLabel">{t("savings.label")}</span>
        {/* h2 : cette section vit sur la même page qu'Inventories (voir ses
           onglets "Inventories / Savings / Audit"), qui porte déjà le h1. */}
        <h2>{t("savings.title")}</h2>
        <p>{t("savings.description")}</p>
      </div>

      <div className="savingsCardFrame">
        <SavingsCardMock />
      </div>

      <div className="savingsHighlights">
        {savingsHighlightDefinitions.map((item, index) => (
          <HighlightBlock
            key={item.id}
            index={index}
            icon={HIGHLIGHT_ICONS[item.i18nKey]}
            title={t(`savings.highlights.${item.i18nKey}.title`)}
            description={t(`savings.highlights.${item.i18nKey}.description`)}
          />
        ))}
      </div>
    </section>
  );
}