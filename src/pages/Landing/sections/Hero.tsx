import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Atom,
  BarChart3,
  CheckCircle2,
  Database,
  KeyRound,
  ListChecks,
  Pause,
  Sparkles
} from "lucide-react";
import { PrimaryLink } from "../../../components/ui/PrimaryLink";
import { WorkflowNode } from "../../../components/shared/WorkflowNode";

interface Box {
  left: number;
  right: number;
  top: number;
  bottom: number;
  cx: number;
  cy: number;
}

interface CanvasGeometry {
  w: number;
  h: number;
  paths: {
    planSp: string;
    planLic: string;
    spLic: string;
    licCor: string;
    corAct: string;
  };
}

const EMPTY_GEOMETRY: CanvasGeometry = {
  w: 480,
  h: 360,
  paths: {
    planSp: "",
    planLic: "",
    spLic: "",
    licCor: "",
    corAct: ""
  }
};

export function Hero() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const planRef = useRef<HTMLDivElement>(null);
  const spRef = useRef<HTMLDivElement>(null);
  const licRef = useRef<HTMLDivElement>(null);
  const corRef = useRef<HTMLDivElement>(null);
  const actRef = useRef<HTMLDivElement>(null);

  const [geometry, setGeometry] = useState<CanvasGeometry>(EMPTY_GEOMETRY);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const measure = () => {
      const canvasRect = canvas.getBoundingClientRect();

      const box = (ref: React.RefObject<HTMLDivElement | null>): Box | null => {
        const el = ref.current;
        if (!el) return null;
        const r = el.getBoundingClientRect();
        const left = r.left - canvasRect.left;
        const top = r.top - canvasRect.top;
        const right = r.right - canvasRect.left;
        const bottom = r.bottom - canvasRect.top;
        return {
          left,
          right,
          top,
          bottom,
          cx: (left + right) / 2,
          cy: (top + bottom) / 2
        };
      };

      const plan = box(planRef);
      const sp = box(spRef);
      const lic = box(licRef);
      const cor = box(corRef);
      const act = box(actRef);

      if (!plan || !sp || !lic || !cor || !act) return;

      const newPaths = {
        planSp: `M ${plan.cx} ${plan.bottom} L ${sp.cx} ${sp.top}`,
        planLic: `M ${plan.right} ${plan.cy} C ${plan.right + 70} ${plan.cy} ${lic.left - 70} ${lic.cy - 40} ${lic.left} ${lic.cy}`,
        spLic: `M ${sp.right} ${sp.cy} C ${sp.right + 60} ${sp.cy} ${lic.left - 60} ${lic.cy} ${lic.left} ${lic.cy}`,
        licCor: `M ${lic.cx} ${lic.bottom} C ${lic.cx} ${lic.bottom + 30} ${cor.cx + 60} ${cor.top} ${cor.cx} ${cor.top}`,
        corAct: `M ${cor.cx} ${cor.bottom} L ${act.cx} ${act.top}`
      };

      setGeometry({
        w: canvasRect.width,
        h: canvasRect.height,
        paths: newPaths
      });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(canvas);
    [planRef, spRef, licRef, corRef, actRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Recompute also when fonts are loaded (text metrics can shift node widths)
  useEffect(() => {
    if (typeof document === "undefined" || !document.fonts) return;
    document.fonts.ready.then(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      // trigger ResizeObserver indirectly by reading layout — easiest is to dispatch a resize event
      window.dispatchEvent(new Event("resize"));
    });
  }, []);

  return (
    <section className="hero" id="top">
      <div className="heroText">
        <div className="eyebrow">
          <Sparkles size={16} />
          Copilote d'administration Microsoft 365
        </div>

        <h1>Administrez Microsoft 365 en langage naturel.</h1>
        <p>
          Zelynto transforme les consoles Microsoft 365 complexes en une expérience conversationnelle simple
          pour explorer, sécuriser, provisionner et auditer votre tenant.
        </p>

        <div className="heroActions">
          <PrimaryLink href="https://cestfredy.github.io/zelynto-onboarding/" size="large">
            Get started
          </PrimaryLink>
        </div>

        <div className="trustLine">
          <span><CheckCircle2 size={16} /> Microsoft Graph-first</span>
          <span><CheckCircle2 size={16} /> Audit tracé</span>
          <span><CheckCircle2 size={16} /> Actions confirmées</span>
        </div>
      </div>

      <div className="heroVisual" id="demo" aria-label="Workflow Zelynto">
        <div className="workflowMockup">
          <div className="workflowTop">
            <div className="windowDots">
              <span />
              <span />
              <span />
            </div>
            <span>m365.zelynto.com</span>
          </div>

          <div className="workflowPrompt">
            <small>YOU</small>
            <p>
              Analyze the tenant for inactive SharePoint sites and underutilized licenses,
              correlate usage across Teams and OneDrive, and generate a prioritized action
              plan to reduce costs and improve security.
            </p>
          </div>

          <div className="workflowCanvas" ref={canvasRef}>
            <svg
              className="workflowLines"
              viewBox={`0 0 ${geometry.w} ${geometry.h}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <filter id="flowGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path id="flow-plan-sp" d={geometry.paths.planSp} />
              <path id="flow-plan-lic" d={geometry.paths.planLic} />
              <path id="flow-sp-lic" d={geometry.paths.spLic} />
              <path id="flow-lic-cor" d={geometry.paths.licCor} />
              <path id="flow-cor-act" d={geometry.paths.corAct} />

              <circle className="flowParticle" r="2.6" filter="url(#flowGlow)">
                <animateMotion dur="2.6s" repeatCount="indefinite" begin="0s">
                  <mpath href="#flow-plan-sp" />
                </animateMotion>
              </circle>
              <circle className="flowParticle" r="2.6" filter="url(#flowGlow)">
                <animateMotion dur="3.2s" repeatCount="indefinite" begin="0.3s">
                  <mpath href="#flow-plan-lic" />
                </animateMotion>
              </circle>
              <circle className="flowParticle" r="2.6" filter="url(#flowGlow)">
                <animateMotion dur="2.6s" repeatCount="indefinite" begin="0.8s">
                  <mpath href="#flow-sp-lic" />
                </animateMotion>
              </circle>
              <circle className="flowParticle" r="2.6" filter="url(#flowGlow)">
                <animateMotion dur="3s" repeatCount="indefinite" begin="1.4s">
                  <mpath href="#flow-lic-cor" />
                </animateMotion>
              </circle>
              <circle className="flowParticle" r="2.6" filter="url(#flowGlow)">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="2s">
                  <mpath href="#flow-cor-act" />
                </animateMotion>
              </circle>
            </svg>

            <WorkflowNode
              ref={planRef}
              className="nodePlan"
              icon={<ListChecks size={18} />}
              title="Plan"
              text="5 steps · M365 …"
              ports={["right", "bottom"]}
            />
            <WorkflowNode
              ref={spRef}
              className="nodeSharePoint active"
              icon={<Database size={18} />}
              title="SharePoint"
              text="Inactive sites · 9…"
              ports={["top", "right"]}
            />
            <WorkflowNode
              ref={licRef}
              className="nodeLicenses"
              icon={<KeyRound size={18} />}
              title="Licenses"
              text="Underutilized · E…"
              ports={["left", "bottom"]}
            />
            <WorkflowNode
              ref={corRef}
              className="nodeCorrelate"
              icon={<Atom size={18} />}
              title="Correlate"
              text="Teams · OneDri…"
              ports={["top", "bottom"]}
            />
            <WorkflowNode
              ref={actRef}
              className="nodeAction"
              icon={<BarChart3 size={18} />}
              title="Action plan"
              text="Cost · Security · …"
              ports={["top"]}
            />
          </div>

          <div className="approvalBar">
            <div className="approvalIcon"><Pause size={16} /></div>
            <div>
              <strong>Awaiting approval</strong>
              <span>Archive 14 sites · reclaim 38 licenses · save €42k/yr</span>
            </div>
            <button>Review</button>
          </div>
        </div>
      </div>
    </section>
  );
}
