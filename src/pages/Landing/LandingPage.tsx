import React from "react";
import {
  ArrowRight,
  Archive,
  CheckCircle2,
  Database,
  Mail,
  PlayCircle,
  Route,
  Sparkles,
  Users,
  Lock,
  KeyRound
} from "lucide-react";
import { AnimatedPanel } from "../../components/shared/AnimatedPanel";
import { WorkflowNode } from "../../components/shared/WorkflowNode";
import "./Landing.css";

const integrations = [
  { icon: Mail, label: "Outlook" },
  { icon: Users, label: "Teams" },
  { icon: Database, label: "SharePoint" },
  { icon: Lock, label: "Entra ID" }
];

export function LandingPage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="heroText">
          <div className="eyebrow">
            <Sparkles size={16} />
            Copilote d'administration Microsoft 365
          </div>

          <h1>Administrez Microsoft 365 en langage naturel.</h1>
          <p>
            Zelynto transforme les consoles Microsoft 365 complexes en une experience conversationnelle simple
            pour explorer, securiser, provisionner et auditer votre tenant.
          </p>

          <div className="heroActions">
            <a className="primaryLink large" href="#demo">
              Voir la maquette
              <ArrowRight size={18} />
            </a>
            <a className="videoLink" href="#exploration">
              <PlayCircle size={20} />
              Decouvrir le produit
            </a>
          </div>

          <div className="trustLine">
            <span><CheckCircle2 size={16} /> Microsoft Graph-first</span>
            <span><CheckCircle2 size={16} /> Audit trace</span>
            <span><CheckCircle2 size={16} /> Actions confirmees</span>
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
                Analyse le tenant pour trouver les sites SharePoint inactifs et les licences sous-utilisees,
                puis genere un plan d'action priorise pour reduire les couts et renforcer la securite.
              </p>
            </div>

            <div className="workflowCanvas">
              <svg className="workflowLines" viewBox="0 0 520 360" aria-hidden="true">
                <path d="M175 70 C215 70 215 120 250 120" />
                <path d="M175 70 C135 110 130 138 120 165" />
                <path d="M340 150 C318 190 290 205 260 230" />
                <path d="M120 195 C155 232 190 232 228 255" />
                <path d="M260 275 L260 326" />
              </svg>

              <WorkflowNode className="nodePlan" icon={<Route size={18} />} title="Plan" text="5 etapes · M365" />
              <WorkflowNode className="nodeSharePoint active" icon={<Database size={18} />} title="SharePoint" text="14 sites inactifs" />
              <WorkflowNode className="nodeLicenses" icon={<KeyRound size={18} />} title="Licences" text="38 sous-utilisees" />
              <WorkflowNode className="nodeCorrelate" icon={<Sparkles size={18} />} title="Correlate" text="Teams · OneDrive" />
              <WorkflowNode className="nodeAction" icon={<Archive size={18} />} title="Action plan" text="Cout · Securite" />
            </div>

            <div className="approvalBar">
              <div className="approvalIcon">II</div>
              <div>
                <strong>Awaiting approval</strong>
                <span>Archiver 14 sites · recuperer 38 licences · economiser 42k€/an</span>
              </div>
              <button>Review</button>
            </div>
          </div>
        </div>
      </section>

      <section className="integrationBand container" aria-label="Integrations Microsoft 365">
        {integrations.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label}>
              <Icon size={22} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </section>

      <section className="productShowcase" id="exploration">
        <div className="productCopy">
          <span className="sectionLabel">Exploration intelligente M365</span>
          <h2>Interrogez Microsoft 365 comme si vous parliez a un expert.</h2>
          <p>
            Zelynto traduit vos questions en requetes Graph, recoupe les donnees du tenant et livre une
            reponse claire, structuree et actionnable.
          </p>
          <ul>
            <li><CheckCircle2 size={18} /> Questions sur utilisateurs, groupes, mails, fichiers et licences</li>
            <li><CheckCircle2 size={18} /> Syntheses lisibles pour les equipes IT et DSI</li>
            <li><CheckCircle2 size={18} /> Preuves et donnees sources conservees</li>
          </ul>
        </div>
        <AnimatedPanel variant="explore" />
      </section>

      <section className="productShowcase reverse" id="security-copilot">
        <div className="productCopy">
          <span className="sectionLabel">Security Copilot & Alerting</span>
          <h2>Transformez vos alertes M365 en decisions rapides.</h2>
          <p>
            Zelynto centralise les signaux Defender et Identity, explique les alertes critiques et priorise
            les comptes ou configurations a traiter.
          </p>
          <ul>
            <li><CheckCircle2 size={18} /> Vue unifiee des alertes critiques</li>
            <li><CheckCircle2 size={18} /> Explication en langage naturel de chaque incident</li>
            <li><CheckCircle2 size={18} /> Recommandations de remediation contextualisees</li>
          </ul>
        </div>
        <AnimatedPanel variant="security" />
      </section>

      <section className="productShowcase" id="automation">
        <div className="productCopy">
          <span className="sectionLabel">Automation & Provisioning</span>
          <h2>Automatisez les actions admin sans perdre le controle.</h2>
          <p>
            Creez des ressources Microsoft 365 par prompt, avec preview, conventions de nommage, gouvernance
            et confirmation avant execution.
          </p>
          <ul>
            <li><CheckCircle2 size={18} /> Creation de groupes, sites SharePoint et ressources Entra ID</li>
            <li><CheckCircle2 size={18} /> Plan d'execution lisible avant modification</li>
            <li><CheckCircle2 size={18} /> Journalisation automatique des actions</li>
          </ul>
        </div>
        <AnimatedPanel variant="automation" />
      </section>

      <section className="productShowcase reverse" id="compliance">
        <div className="productCopy">
          <span className="sectionLabel">Audit & Compliance Copilot</span>
          <h2>Gardez votre tenant conforme en continu.</h2>
          <p>
            Zelynto surveille les ecarts de configuration, calcule un score de posture et explique pourquoi
            chaque point est prioritaire.
          </p>
          <ul>
            <li><CheckCircle2 size={18} /> Score par categorie : identite, collaboration, licences, gouvernance</li>
            <li><CheckCircle2 size={18} /> Recommandations inspirees des bonnes pratiques M365</li>
            <li><CheckCircle2 size={18} /> Conversation avec les resultats d'audit</li>
          </ul>
        </div>
        <AnimatedPanel variant="compliance" />
      </section>

      <section className="section pricingSection" id="pricing">
        <div className="sectionIntro">
          <span>Pricing</span>
          <h2>Des offres simples pour deployer Zelynto selon votre niveau de maturite M365.</h2>
          <p>
            Commencez par l'audit et l'exploration, puis activez progressivement l'automatisation et les
            controles avances.
          </p>
        </div>

        <div className="pricingGrid">
          <article className="priceCard">
            <div>
              <span className="planLabel">Starter</span>
              <h3>Audit & exploration</h3>
              <p>Pour demarrer avec une vision claire de votre tenant Microsoft 365.</p>
            </div>
            <div className="price">
              <strong>490€</strong>
              <span>/mois</span>
            </div>
            <a className="planButton" href="#/contact">Demander une demo</a>
            <ul>
              <li><CheckCircle2 size={17} /> Chat d'exploration M365</li>
              <li><CheckCircle2 size={17} /> Audit continu initial</li>
              <li><CheckCircle2 size={17} /> Rapport de risques priorises</li>
              <li><CheckCircle2 size={17} /> Jusqu'a 500 utilisateurs</li>
            </ul>
          </article>

          <article className="priceCard featured">
            <div className="popularBadge">Le plus demande</div>
            <div>
              <span className="planLabel">Business</span>
              <h3>Copilote M365 complet</h3>
              <p>Pour piloter securite, alerting, recommandations et actions gouvernees.</p>
            </div>
            <div className="price">
              <strong>1 490€</strong>
              <span>/mois</span>
            </div>
            <a className="planButton primary" href="#/contact">Planifier un appel</a>
            <ul>
              <li><CheckCircle2 size={17} /> Tout Starter</li>
              <li><CheckCircle2 size={17} /> Alerting Defender et Identity</li>
              <li><CheckCircle2 size={17} /> Preview des actions Graph</li>
              <li><CheckCircle2 size={17} /> Recommandations de remediation</li>
              <li><CheckCircle2 size={17} /> Jusqu'a 2 500 utilisateurs</li>
            </ul>
          </article>

          <article className="priceCard">
            <div>
              <span className="planLabel">Enterprise</span>
              <h3>Gouvernance avancee</h3>
              <p>Pour les grands tenants, MSP et organisations avec exigences conformite fortes.</p>
            </div>
            <div className="price custom">
              <strong>Sur devis</strong>
            </div>
            <a className="planButton" href="#/contact">Contacter l'equipe</a>
            <ul>
              <li><CheckCircle2 size={17} /> Tout Business</li>
              <li><CheckCircle2 size={17} /> Multi-tenant et MSP</li>
              <li><CheckCircle2 size={17} /> Regles d'audit personnalisees</li>
              <li><CheckCircle2 size={17} /> SSO, SLA et support prioritaire</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="ctaSection">
        <span>Pour une V1 exploitable</span>
        <h2>Faites de Zelynto votre cockpit Microsoft 365.</h2>
        <p>
          Un chat simple en surface, une couche Graph, securite, provisioning et audit en profondeur.
        </p>
        <a className="primaryLink large" href="#/contact">
          Get started
          <ArrowRight size={18} />
        </a>
      </section>
    </>
  );
}
