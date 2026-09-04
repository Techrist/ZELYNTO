import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../../../components/ui/SectionLabel";
import entraIcon from "../../../assets/ms365-icons/entra-id.webp";
import teamsIcon from "../../../assets/ms365-icons/teams.png";
import sharepointIcon from "../../../assets/ms365-icons/sharepoint.webp";
import exchangeIcon from "../../../assets/ms365-icons/exchange.webp";
import onedriveIcon from "../../../assets/ms365-icons/onedrive.png";
import intuneIcon from "../../../assets/ms365-icons/intune.webp";

interface StepText {
  title: string;
  description: string;
}

const msApps = [
  { key: "entra", label: "Entra ID", icon: entraIcon },
  { key: "teams", label: "Teams", icon: teamsIcon },
  { key: "sharepoint", label: "SharePoint", icon: sharepointIcon },
  { key: "exchange", label: "Exchange", icon: exchangeIcon },
  { key: "onedrive", label: "OneDrive", icon: onedriveIcon },
  { key: "intune", label: "Intune", icon: intuneIcon }
] as const;

interface FlowDot {
  x: number;
  y: number;
  kind: "start" | "end";
}

interface FlowGeometry {
  w: number;
  h: number;
  oneTwo: string;
  twoThree: string;
  dots: FlowDot[];
}

const EMPTY_FLOW: FlowGeometry = { w: 1200, h: 640, oneTwo: "", twoThree: "", dots: [] };

/**
 * Connectors are drawn from the cards' real measured rectangles (relative to
 * .howBento), the same measure-then-draw pattern used in Hero.tsx — no guessed
 * SVG coordinates, so the dashed paths always land on the right corners
 * whatever the viewport width or font metrics.
 */
export function HowItWorks() {
  const { t } = useTranslation();
  const raw = t("howItWorks.steps", { returnObjects: true });
  const stepTexts: StepText[] = Array.isArray(raw) ? (raw as StepText[]) : [];

  const bentoRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const [flow, setFlow] = useState<FlowGeometry>(EMPTY_FLOW);

  useLayoutEffect(() => {
    const bento = bentoRef.current;
    const c1 = card1Ref.current;
    const c2 = card2Ref.current;
    const c3 = card3Ref.current;
    if (!bento || !c1 || !c2 || !c3) return;

    let raf = 0;

    const measure = () => {
      const b = bento.getBoundingClientRect();
      const rel = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return {
          left: r.left - b.left,
          right: r.right - b.left,
          top: r.top - b.top,
          bottom: r.bottom - b.top
        };
      };

      const a1 = rel(c1);
      const a2 = rel(c2);
      const a3 = rel(c3);

      // Card 1 -> Card 2 : short link down the left spine, only a hint of a
      // left bow. Offsets scale with the real gap so the curve never balloons
      // when the cards sit close together.
      const s1x = a1.left + 52;
      const s1y = a1.bottom;
      const e1x = a2.left + 44;
      const e1y = a2.top + 12;
      const dy1 = Math.max(e1y - s1y, 24);
      const bow = Math.min(dy1 * 0.35, 14);
      const oneTwo = `M ${s1x} ${s1y} C ${s1x - bow} ${s1y + dy1 * 0.45}, ${e1x - bow} ${e1y - dy1 * 0.45}, ${e1x} ${e1y}`;

      // Card 2 -> Card 3 : leaves card 2 near its top-right corner (clear of the
      // heading text), humps gently across the gutter into card 3's top-left.
      const s2x = a2.right - 28;
      const s2y = a2.top + 6;
      const e2x = a3.left + 46;
      const e2y = a3.top + 10;
      const humpY = Math.min(s2y, e2y) - 26;
      const twoThree = `M ${s2x} ${s2y} C ${s2x + 28} ${humpY}, ${e2x - 28} ${humpY}, ${e2x} ${e2y}`;

      setFlow({
        w: Math.round(b.width),
        h: Math.round(b.height),
        oneTwo,
        twoThree,
        dots: [
          { x: s1x, y: s1y, kind: "start" },
          { x: e1x, y: e1y, kind: "end" },
          { x: s2x, y: s2y, kind: "start" },
          { x: e2x, y: e2y, kind: "end" }
        ]
      });
    };

    const schedule = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    schedule();

    const observer = new ResizeObserver(schedule);
    observer.observe(bento);
    [c1, c2, c3].forEach((el) => observer.observe(el));
    window.addEventListener("resize", schedule);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [stepTexts.length]);

  // Fonts can shift text metrics (and therefore card heights) after first paint.
  useEffect(() => {
    if (typeof document === "undefined" || !document.fonts) return;
    document.fonts.ready.then(() => window.dispatchEvent(new Event("resize")));
  }, []);

  return (
    <section className="howItWorksSection" id="how-it-works">
      <div className="howBento" ref={bentoRef}>
        <div className="howBentoAtmosphere" aria-hidden="true">
          <span className="howDecor howDecor1" />
          <span className="howDecor howDecor2" />
          <span className="howDecor howDecor3" />
        </div>

        <header className="howBentoHeading">
          <SectionLabel>{t("howItWorks.label")}</SectionLabel>
          <h2>{t("howItWorks.title")}</h2>
          <p>{t("howItWorks.description")}</p>
        </header>

        <svg
          className="howFlow"
          viewBox={`0 0 ${flow.w} ${flow.h}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className="howFlowPath" d={flow.oneTwo} />
          <path className="howFlowPath" d={flow.twoThree} />
          {flow.dots.map((dot, index) => (
            <circle
              key={index}
              className={
                dot.kind === "start" ? "howFlowDot howFlowDotStart" : "howFlowDot howFlowDotEnd"
              }
              cx={dot.x}
              cy={dot.y}
              r={dot.kind === "start" ? 4 : 6}
            />
          ))}
        </svg>

        <article className="howBentoCard howBentoCard1" ref={card1Ref}>
          <span className="howBentoNum" aria-hidden="true">1</span>
          <div className="howBentoCardBody">
            <h3>{stepTexts[0]?.title}</h3>
            <p>{stepTexts[0]?.description}</p>
            <div className="howMsStrip">
              {msApps.map((app) => (
                <span className="howMsChip" key={app.key}>
                  <img src={app.icon} alt="" loading="lazy" />
                  {app.label}
                </span>
              ))}
            </div>
          </div>
        </article>

        <article className="howBentoCard howBentoCard2" ref={card2Ref}>
          <span className="howBentoNum" aria-hidden="true">2</span>
          <div className="howBentoCardBody">
            <h3>{stepTexts[1]?.title}</h3>
            <p>{stepTexts[1]?.description}</p>
          </div>
        </article>

        <article className="howBentoCard howBentoCard3" ref={card3Ref}>
          <span className="howBentoNum" aria-hidden="true">3</span>
          <div className="howBentoCardBody">
            <h3>{stepTexts[2]?.title}</h3>
            <p>{stepTexts[2]?.description}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
