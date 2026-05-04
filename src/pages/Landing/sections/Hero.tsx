import React from "react";
import {
  Atom,
  BarChart3,
  CheckCircle2,
  Database,
  KeyRound,
  ListChecks,
  Pause,
  PlayCircle,
  Sparkles
} from "lucide-react";
import { PrimaryLink } from "../../../components/ui/PrimaryLink";
import { WorkflowNode } from "../../../components/shared/WorkflowNode";

export function Hero() {
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
          <a className="videoLink" href="#exploration">
            <PlayCircle size={20} />
            Découvrir le produit
          </a>
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

          <div className="workflowCanvas">
            <svg className="workflowLines" viewBox="0 0 480 360" aria-hidden="true">
              <path d="M102 60 L102 90" />
              <path d="M120 30 C220 30 270 70 310 88" />
              <path d="M172 116 C188 148 200 168 214 178" />
              <path d="M240 116 C228 148 220 168 214 178" />
              <path d="M214 230 L214 266" />
            </svg>

            <WorkflowNode className="nodePlan" icon={<ListChecks size={18} />} title="Plan" text="5 steps · M365 …" />
            <WorkflowNode className="nodeSharePoint active" icon={<Database size={18} />} title="SharePoint" text="Inactive sites · 9…" />
            <WorkflowNode className="nodeLicenses" icon={<KeyRound size={18} />} title="Licenses" text="Underutilized · E…" />
            <WorkflowNode className="nodeCorrelate" icon={<Atom size={18} />} title="Correlate" text="Teams · OneDri…" />
            <WorkflowNode className="nodeAction" icon={<BarChart3 size={18} />} title="Action plan" text="Cost · Security · …" />
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
