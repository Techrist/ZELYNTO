import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import logo from "../../assets/zelynto-long.png";

interface AnimatedPanelProps {
  variant: "explore" | "security" | "automation" | "compliance";
}

interface PanelContent {
  prompt: string;
  title: string;
  answer: string;
  rows: string[];
}

const panelContent: Record<AnimatedPanelProps["variant"], PanelContent> = {
  explore: {
    prompt: "Liste les utilisateurs inactifs depuis 30 jours",
    title: "Graph query generated",
    answer: "J'ai trouvé 14 comptes sans connexion récente. 9 consomment encore une licence active.",
    rows: ["Users : 14 comptes", "Licences associées : 9", "Risque : accès dormant"]
  },
  security: {
    prompt: "Quelles alertes critiques sont ouvertes ?",
    title: "3 alertes critiques",
    answer: "3 alertes critiques sont ouvertes. La priorité est le compte admin signalé en impossible travel.",
    rows: ["Impossible travel", "MFA fatigue", "Privilege escalation"]
  },
  automation: {
    prompt: "Crée 5 groupes marketing avec gouvernance",
    title: "Plan d'action prêt",
    answer:
      "Je peux préparer 5 groupes avec convention de nommage, propriétaires et journalisation avant exécution.",
    rows: ["Valider nommage", "Créer groupes", "Journaliser action"]
  },
  compliance: {
    prompt: "Montre les écarts critiques de conformité",
    title: "Score posture 72/100",
    answer: "Les écarts critiques portent sur la MFA admin, les comptes dormants et le partage externe SharePoint.",
    rows: ["MFA admins", "Comptes dormants", "SharePoint externe"]
  }
};

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

export function AnimatedPanel({ variant }: AnimatedPanelProps) {
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

      for (let i = 1; i <= c.rows.length; i++) {
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

  const showAnswer = phase === "answering" || phase === "rows" || phase === "done";
  const showPrompt = phase === "submitted" || phase === "loading" || showAnswer;

  return (
    <div className={`animatedPanel ${variant}`} ref={ref} data-phase={phase}>
      <div className="panelChrome">
        <span /><span /><span />
      </div>

      <div className="panelInput">
        <input
          type="text"
          value={typedPrompt}
          readOnly
          placeholder={content.prompt}
          aria-label="Prompt"
        />
        <button type="button" tabIndex={-1} aria-hidden="true">Ask</button>
      </div>

      {showPrompt && (
        <div className="panelPrompt" key={`prompt-${playId}`}>
          {content.prompt}
        </div>
      )}

      {(phase === "loading" || showAnswer) && (
        <div className="panelAnswer" key={`answer-${playId}`}>
          <div className="zelyntoAvatar">
            <img src={logo} alt="Zelynto" />
          </div>
          {phase === "loading" ? (
            <div className="loadingDots" aria-label="Zelynto réfléchit">
              <span /><span /><span />
            </div>
          ) : (
            <div>
              <strong>{content.title}</strong>
              <p>
                {typedAnswer}
                {phase === "answering" && <span className="caret" aria-hidden="true" />}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="floatingRows">
        {content.rows.slice(0, visibleRows).map((row) => (
          <div key={`${playId}-${row}`} style={{ "--delay": "0ms" } as React.CSSProperties}>
            <CheckCircle2 size={16} />
            {row}
          </div>
        ))}
      </div>

      <div className="scanLine" />
    </div>
  );
}
