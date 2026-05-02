import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import logo from "../../assets/zelynto-long.png";

interface AnimatedPanelProps {
  variant: "explore" | "security" | "automation" | "compliance";
}

export function AnimatedPanel({ variant }: AnimatedPanelProps) {
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
          <img src={logo} alt="Zelynto" />
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
