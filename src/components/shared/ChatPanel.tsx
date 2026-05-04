import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ClipboardList,
  PanelLeft,
  Plus,
  Search,
  Shield,
  ShieldCheck,
  SquarePen
} from "lucide-react";
import zelyntoMark from "../../assets/zelynto-mark.svg";
import "./ChatPanel.css";

interface ChatPanelProps {
  variant: "explore" | "security" | "automation" | "compliance";
}

interface PanelContent {
  prompt: string;
  title: string;
  answer: string;
  bullets: string[];
}

const panelContent: Record<ChatPanelProps["variant"], PanelContent> = {
  explore: {
    prompt: "Liste les utilisateurs inactifs depuis 30 jours",
    title: "14 utilisateurs inactifs détectés",
    answer:
      "J'ai trouvé 14 comptes sans connexion récente. 9 d'entre eux consomment encore une licence active.",
    bullets: [
      "Users : 14 comptes",
      "Licences associées : 9",
      "Risque : accès dormant"
    ]
  },
  security: {
    prompt: "Quelles alertes critiques sont ouvertes ?",
    title: "3 alertes critiques en cours",
    answer:
      "3 alertes critiques sont ouvertes. La priorité absolue est le compte admin signalé en impossible travel.",
    bullets: [
      "Impossible travel — admin@",
      "MFA fatigue — 4 utilisateurs",
      "Privilege escalation — service account"
    ]
  },
  automation: {
    prompt: "Crée 5 groupes marketing avec gouvernance",
    title: "Plan d'action prêt",
    answer:
      "5 groupes M365 prêts à créer avec convention de nommage MKT-*, propriétaires assignés et journalisation.",
    bullets: [
      "Valider la convention MKT-*",
      "Créer les 5 groupes M365",
      "Journaliser dans le registre"
    ]
  },
  compliance: {
    prompt: "Montre les écarts critiques de conformité",
    title: "Score posture : 72 / 100",
    answer:
      "3 écarts critiques détectés : MFA admins, comptes dormants licenciés et partage externe SharePoint.",
    bullets: [
      "MFA admins : 4 / 12 sans MFA",
      "Comptes dormants : 14 licenciés",
      "SharePoint externe : 8 sites publics"
    ]
  }
};

const recents = [
  "Audit MFA admins",
  "Sites SharePoint inactifs",
  "Inventaire licences M365",
  "Comptes dormants > 90j",
  "Partage externe à risque",
  "Stratégies CA actives"
];

const suggestionChips = [
  "Admins without MFA",
  "Anonymous sharing links",
  "Inactive licensed users",
  "Risky guest access"
];

type Phase = "idle" | "typing" | "submitted" | "loading" | "answering" | "rows" | "done";

const TYPE_PROMPT_MS = 38;
const TYPE_ANSWER_MS = 18;
const SUBMIT_PAUSE_MS = 320;
const LOADING_MS = 720;
const ANSWER_PAUSE_MS = 220;
const ROW_DELAY_MS = 260;

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function ChatPanel({ variant }: ChatPanelProps) {
  const content = panelContent[variant];
  const ref = useRef<HTMLDivElement>(null);
  const [playId, setPlayId] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [typedPrompt, setTypedPrompt] = useState("");
  const [typedAnswer, setTypedAnswer] = useState("");
  const [visibleRows, setVisibleRows] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setPlayId((id) => id + 1);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (playId === 0) return;
    const c = panelContent[variant];
    let cancelled = false;

    async function run() {
      setTypedPrompt("");
      setTypedAnswer("");
      setVisibleRows(0);
      setPhase("typing");

      for (let i = 1; i <= c.prompt.length; i++) {
        if (cancelled) return;
        setTypedPrompt(c.prompt.slice(0, i));
        await wait(TYPE_PROMPT_MS);
      }

      if (cancelled) return;
      setPhase("submitted");
      await wait(SUBMIT_PAUSE_MS);

      if (cancelled) return;
      setPhase("loading");
      await wait(LOADING_MS);

      if (cancelled) return;
      setPhase("answering");
      for (let i = 1; i <= c.answer.length; i++) {
        if (cancelled) return;
        setTypedAnswer(c.answer.slice(0, i));
        await wait(TYPE_ANSWER_MS);
      }

      if (cancelled) return;
      await wait(ANSWER_PAUSE_MS);
      setPhase("rows");

      for (let i = 1; i <= c.bullets.length; i++) {
        if (cancelled) return;
        setVisibleRows(i);
        await wait(ROW_DELAY_MS);
      }

      if (cancelled) return;
      setPhase("done");
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [playId, variant]);

  const showThread = phase !== "idle" && phase !== "typing";
  const showAssistant =
    phase === "answering" || phase === "rows" || phase === "done";

  return (
    <div className={`chatPanel ${variant}`} ref={ref} data-phase={phase}>
      <aside className="chatSidebar">
        <div className="chatSidebarHeader">
          <span className="chatSidebarLogo" aria-hidden="true">
            <img src={zelyntoMark} alt="" />
          </span>
          <button
            type="button"
            className="chatSidebarToggle"
            tabIndex={-1}
            aria-hidden="true"
          >
            <PanelLeft size={15} />
          </button>
        </div>

        <button type="button" className="chatSidebarItem" tabIndex={-1}>
          <SquarePen size={15} /> New Chat
        </button>
        <button type="button" className="chatSidebarItem" tabIndex={-1}>
          <Search size={15} /> Search Chats
        </button>

        <div className="chatSidebarSection">
          <span className="chatSidebarLabel">Administration</span>
          <button type="button" className="chatSidebarItem" tabIndex={-1}>
            <ClipboardList size={15} /> Audit
          </button>
          <button type="button" className="chatSidebarItem" tabIndex={-1}>
            <Shield size={15} /> Security
          </button>
        </div>

        <div className="chatSidebarSection chatSidebarRecents">
          <span className="chatSidebarLabel">Recents</span>
          {recents.map((item) => (
            <button
              key={item}
              type="button"
              className="chatSidebarRecent"
              tabIndex={-1}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="chatSidebarUser">
          <div className="chatSidebarAvatar">ZD</div>
          <div className="chatSidebarUserMeta">
            <strong>Zelynto Developer</strong>
            <span>developer@zelynto.com</span>
          </div>
        </div>
      </aside>

      <main className="chatMain">
        <div className="chatTopBar">
          <ShieldCheck size={16} />
        </div>

        {!showThread ? (
          <div className="chatWelcome">
            <div className="chatWelcomeBrand">
              <img className="chatWelcomeMark" src={zelyntoMark} alt="" aria-hidden="true" />
              <h3>Built for those who run everything.</h3>
            </div>
            <p>AI-powered answers for Microsoft 365.</p>

            <div className="chatInputBar">
              <button type="button" className="chatInputAdd" tabIndex={-1} aria-hidden="true">
                <Plus size={16} />
              </button>
              <input
                type="text"
                value={typedPrompt}
                readOnly
                placeholder="Ask your tenant"
                aria-label="Prompt"
              />
              {phase === "typing" && <span className="caret" aria-hidden="true" />}
            </div>

            <div className="chatChips">
              {suggestionChips.map((chip) => (
                <span key={chip} className="chatChip">
                  <Shield size={12} /> {chip}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="chatThread">
            <div className="chatBubble chatUser" key={`user-${playId}`}>
              {content.prompt}
            </div>

            {phase === "loading" && (
              <div className="chatBubble chatAssistant" key={`load-${playId}`}>
                <img className="chatAssistantAvatar" src={zelyntoMark} alt="" aria-hidden="true" />
                <div className="loadingDots">
                  <span /><span /><span />
                </div>
              </div>
            )}

            {showAssistant && (
              <div className="chatBubble chatAssistant" key={`ans-${playId}`}>
                <img className="chatAssistantAvatar" src={zelyntoMark} alt="" aria-hidden="true" />
                <div className="chatAssistantBody">
                  <strong>{content.title}</strong>
                  <p>
                    {typedAnswer}
                    {phase === "answering" && (
                      <span className="caret" aria-hidden="true" />
                    )}
                  </p>
                  {visibleRows > 0 && (
                    <div className="chatBullets">
                      {content.bullets.slice(0, visibleRows).map((bullet) => (
                        <div key={bullet}>
                          <CheckCircle2 size={14} /> {bullet}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
