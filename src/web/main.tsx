import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Archive,
  Bot,
  Building2,
  CheckCircle2,
  ChevronDown,
  Database,
  FileCheck2,
  KeyRound,
  Lock,
  Mail,
  MessageSquareText,
  Phone,
  PlayCircle,
  Route,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Users
} from "lucide-react";
import "./styles.css";

// --- DONNÉES ---
const features = [
  {
    icon: MessageSquareText,
    title: "Explorez votre tenant par le chat",
    text: "Posez une question simple et Zelynto traduit votre intention en requetes Microsoft Graph exploitables."
  },
  {
    icon: ShieldAlert,
    title: "Centralisez les alertes M365",
    text: "Defender, Identity, comptes a risque et signaux critiques deviennent lisibles dans une seule experience."
  },
  {
    icon: Bot,
    title: "Automatisez le provisioning",
    text: "Creez des groupes, sites SharePoint ou ressources Entra ID avec validation et gouvernance integree."
  },
  {
    icon: FileCheck2,
    title: "Auditez en continu",
    text: "Scores, ecarts, priorites et recommandations guident vos decisions de securite et de conformite."
  }
];

const integrations = [
  { icon: Mail, label: "Outlook" },
  { icon: Users, label: "Teams" },
  { icon: Database, label: "SharePoint" },
  { icon: Lock, label: "Entra ID" }
];

// --- COMPOSANT PRINCIPAL ---
function App() {
  // Utilisation du hash pour éviter les erreurs 404 sur GitHub Pages
  const [hash, setHash] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Définition des routes
  if (hash === "#/contact") {
    return (
      <main className="landing">
        <SimpleHeader />
        <ContactPage />
        <Footer />
      </main>
    );
  }

  if (hash === "#/connexion" || hash === "#/inscription") {
    return (
      <main className="landing">
        <SimpleHeader />
        <AuthPage />
      </main>
    );
  }

  // Page d'accueil (Route par défaut)
  return (
    <main className="landing">
      <header className="siteHeader">
        <a className="brand" href="#/" aria-label="Zelynto accueil">
          <img src="./zelynto-long.png" alt="Zelynto" />
        </a>

        <nav aria-label="Navigation principale">
          <div className="navDropdown">
            <button type="button">
              Produit
              <ChevronDown size={14} />
            </button>
            <div className="dropdownMenu">
              <a href="#exploration">Exploration intelligente M365</a>
              <a href="#security-copilot">Security Copilot & Alerting</a>
              <a href="#automation">Automation & Provisioning</a>
              <a href="#compliance">Audit & Compliance Copilot</a>
            </div>
          </div>
          <a href="#pricing">Pricing</a>
          <a href="#/contact">Contact</a>
        </nav>

        <div className="headerActions">
          <a className="ghostLink" href="#/connexion">Se connecter</a>
          <a className="primaryLink" href="#/contact">
            Get started
            <ArrowRight size={17} />
          </a>
        </div>
      </header>

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

      <section className="integrationBand" aria-label="Integrations Microsoft 365">
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

      <footer className="siteFooter">
        <div className="footerCta">
          <div>
            <span>Prêt pour la V1 ?</span>
            <h2>Centralisez votre administration Microsoft 365 avec Zelynto.</h2>
          </div>
          <a className="primaryLink large" href="#/contact">
            Get started
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="footerGrid">
          <div className="footerBrand">
            <img src="./zelynto-long.png" alt="Zelynto" />
            <p>
              Le copilote d'administration concu pour explorer, securiser, automatiser et auditer votre
              environnement Microsoft 365.
            </p>
          </div>

          <div>
            <strong>Produit</strong>
            <a href="#exploration">Chat M365</a>
            <a href="#exploration">Graph Explorer</a>
            <a href="#automation">Provisioning</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div>
            <strong>Securite</strong>
            <a href="#security-copilot">Alerting</a>
            <a href="#compliance">Audit continu</a>
            <a href="#security-copilot">Gouvernance</a>
          </div>

          <div>
            <strong>Ressources</strong>
            <a href="#demo">Demo produit</a>
            <a href="#exploration">Microsoft Graph</a>
            <a href="#/contact">Contact</a>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 Zelynto. Tous droits reserves.</span>
          <div>
            <a href="#top">Confidentialite</a>
            <a href="#top">Conditions</a>
            <a href="#top">Statut</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// --- SOUS-COMPOSANTS ---

function AnimatedPanel({ variant }: { variant: "explore" | "security" | "automation" | "compliance" }) {
  const content = {
    explore: {
      prompt: "Liste les utilisateurs inactifs depuis 30 jours",
      title: "Graph query generated",
      answer: "J'ai trouve 14 comptes sans connexion recente. 9 consomment encore une licence active.",
      rows: ["Users: 14 comptes", "Licences associees: 9", "Risque: acces dormant"]
    },
    security: {
      prompt: "Quelles alertes critiques sont ouvertes ?",
      title: "3 alertes critiques",
      answer: "3 alertes critiques sont ouvertes. La priorite est le compte admin signale en impossible travel.",
      rows: ["Impossible travel", "MFA fatigue", "Privilege escalation"]
    },
    automation: {
      prompt: "Cree 5 groupes marketing avec gouvernance",
      title: "Plan d'action pret",
      answer: "Je peux preparer 5 groupes avec convention de nommage, proprietaires et journalisation avant execution.",
      rows: ["Valider nommage", "Creer groupes", "Journaliser action"]
    },
    compliance: {
      prompt: "Montre les ecarts critiques de conformite",
      title: "Score posture 72/100",
      answer: "Les ecarts critiques portent sur la MFA admin, les comptes dormants et le partage externe SharePoint.",
      rows: ["MFA admins", "Comptes dormants", "SharePoint externe"]
    }
  }[variant];

  const [input, setInput] = useState(content.prompt);
  const [question, setQuestion] = useState(content.prompt);
  const [submitted, setSubmitted] = useState(0);

  function submitQuestion() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setQuestion(trimmed);
    setSubmitted((v) => v + 1);
  }

  return (
    <div className={`animatedPanel ${variant}`}>
      <div className="panelChrome">
        <span /><span /><span />
      </div>
      <form className="panelInput" onSubmit={(e) => { e.preventDefault(); submitQuestion(); }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Question a poser a Zelynto"
        />
        <button type="submit">Ask</button>
      </form>
      <div className="panelPrompt" key={`p-${submitted}`}>{question}</div>
      <div className="panelAnswer" key={`a-${submitted}`}>
        <div className="zelyntoAvatar">
          <img src="./zelynto-long.png" alt="Zelynto" />
        </div>
        <div>
          <strong>{content.title}</strong>
          <p>{content.answer}</p>
        </div>
      </div>
      <div className="floatingRows">
        {content.rows.map((row, index) => (
          <div style={{ "--delay": `${index * 140}ms` } as React.CSSProperties} key={row}>
            <CheckCircle2 size={16} />
            {row}
          </div>
        ))}
      </div>
      <div className="scanLine" />
    </div>
  );
}

function WorkflowNode({ className, icon, title, text }: { className: string; icon: React.ReactNode; title: string; text: string; }) {
  return (
    <div className={`workflowNode ${className}`}>
      <div>{icon}</div>
      <span>
        <strong>{title}</strong>
        <small>{text}</small>
      </span>
    </div>
  );
}

function SimpleHeader() {
  return (
    <header className="siteHeader">
      <a className="brand" href="#/" aria-label="Zelynto accueil">
        <img src="./zelynto-long.png" alt="Zelynto" />
      </a>
      <nav aria-label="Navigation principale">
        <div className="navDropdown">
          <button type="button">Produit <ChevronDown size={14} /></button>
          <div className="dropdownMenu">
            <a href="#/index.html#exploration">Exploration intelligente</a>
            <a href="#/index.html#security-copilot">Security & Alerting</a>
            <a href="#/index.html#automation">Automation</a>
            <a href="#/index.html#compliance">Audit & Compliance</a>
          </div>
        </div>
        <a href="#/index.html#pricing">Pricing</a>
        <a href="#/contact">Contact</a>
      </nav>
      <div className="headerActions">
        <a className="ghostLink" href="#/connexion">Se connecter</a>
        <a className="primaryLink" href="#/contact">Get started <ArrowRight size={17} /></a>
      </div>
    </header>
  );
}

function ContactPage() {
  return (
    <section className="pageShell contactPage">
      <div className="pageIntro">
        <span className="sectionLabel">Contact</span>
        <h1>Parlons de votre tenant Microsoft 365.</h1>
        <p>Demandez une demo et voyez comment Zelynto simplifie l'administration.</p>
      </div>
      <div className="contactGrid">
        <form className="formCard">
          <label>Nom complet <input type="text" /></label>
          <label>Email pro <input type="email" /></label>
          <label>Entreprise <input type="text" /></label>
          <label>Taille du tenant 
            <select defaultValue=""><option value="" disabled>Choisir...</option><option>{"<"} 500</option><option>500 - 2500</option><option>{">"} 2500</option></select>
          </label>
          <label>Message <textarea /></label>
          <button type="button" className="formButton">Envoyer <ArrowRight size={18} /></button>
        </form>
        <aside className="contactAside">
          <div><Mail size={22} /><strong>Email</strong><span>contact@zelynto.com</span></div>
          <div><Phone size={22} /><strong>Demo</strong><span>Sous 24h</span></div>
          <div><Building2 size={22} /><strong>Cible</strong><span>IT, SecOps, MSP</span></div>
        </aside>
      </div>
    </section>
  );
}

function AuthPage() {
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

function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerGrid compactFooter">
        <div className="footerBrand"><img src="./zelynto-long.png" alt="Z" /></div>
        <div><strong>Navigation</strong><a href="#/">Accueil</a><a href="#/contact">Contact</a></div>
        <div><strong>Contact</strong><a href="mailto:contact@zelynto.com">contact@zelynto.com</a></div>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")!).render(<App />);