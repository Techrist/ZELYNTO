import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUp,
  CheckCircle2,
  ClipboardList,
  Mic,
  PanelLeft,
  Plus,
  Search,
  Shield,
  ShieldCheck,
  SquarePen
} from "lucide-react";
import { useTranslation } from "react-i18next";
import zelyntoMark from "../../assets/zelynto-mark.svg";
import "./ChatPanel.css";

interface ChatPanelProps {
  variant: "explore" | "security" | "automation" | "compliance";
}

interface VariantContent {
  prompt: string;
  title: string;
  answer: string;
  bullets: string[];
}

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
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const content = useMemo<VariantContent>(() => {
    const base = `chat.variants.${variant}`;
    const rawBullets = t(`${base}.bullets`, { returnObjects: true });
    return {
      prompt: t(`${base}.prompt`),
      title: t(`${base}.title`),
      answer: t(`${base}.answer`),
      bullets: Array.isArray(rawBullets) ? (rawBullets as string[]) : []
    };
  }, [t, variant, lang]);

  const recents = useMemo<string[]>(() => {
    const raw = t("chat.recents", { returnObjects: true });
    return Array.isArray(raw) ? (raw as string[]) : [];
  }, [t, lang]);
  const chips = useMemo<string[]>(() => {
    const raw = t("chat.welcome.chips", { returnObjects: true });
    return Array.isArray(raw) ? (raw as string[]) : [];
  }, [t, lang]);

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

  // Replay when the language changes so the typed text matches
  useEffect(() => {
    setPlayId((id) => id + 1);
  }, [lang]);

  useEffect(() => {
    if (playId === 0) return;
    let cancelled = false;

    async function run() {
      setTypedPrompt("");
      setTypedAnswer("");
      setVisibleRows(0);
      setPhase("typing");

      for (let i = 1; i <= content.prompt.length; i++) {
        if (cancelled) return;
        setTypedPrompt(content.prompt.slice(0, i));
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
      for (let i = 1; i <= content.answer.length; i++) {
        if (cancelled) return;
        setTypedAnswer(content.answer.slice(0, i));
        await wait(TYPE_ANSWER_MS);
      }

      if (cancelled) return;
      await wait(ANSWER_PAUSE_MS);
      setPhase("rows");

      for (let i = 1; i <= content.bullets.length; i++) {
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
  }, [playId, content]);

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
          <SquarePen size={15} /> {t("chat.sidebar.newChat")}
        </button>
        <button type="button" className="chatSidebarItem" tabIndex={-1}>
          <Search size={15} /> {t("chat.sidebar.searchChats")}
        </button>

        <div className="chatSidebarSection">
          <span className="chatSidebarLabel">{t("chat.sidebar.administration")}</span>
          <button type="button" className="chatSidebarItem" tabIndex={-1}>
            <ClipboardList size={15} /> {t("chat.sidebar.audit")}
          </button>
          <button type="button" className="chatSidebarItem" tabIndex={-1}>
            <Shield size={15} /> {t("chat.sidebar.security")}
          </button>
        </div>

        <div className="chatSidebarSection chatSidebarRecents">
          <span className="chatSidebarLabel">{t("chat.sidebar.recents")}</span>
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
            <strong>{t("chat.sidebar.user")}</strong>
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
              <h3>{t("chat.welcome.title")}</h3>
            </div>
            <p>{t("chat.welcome.description")}</p>

            <div className="chatInputBar chatInputCenter">
              <button type="button" className="chatInputAdd" tabIndex={-1} aria-hidden="true">
                <Plus size={16} />
              </button>
              <input
                type="text"
                value={typedPrompt}
                readOnly
                placeholder={t("chat.welcome.placeholder")}
                aria-label="Prompt"
              />
              {phase === "typing" && <span className="caret" aria-hidden="true" />}
              <button
                type="button"
                className="chatInputMic"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Mic size={15} />
              </button>
              <button
                type="button"
                className={`chatInputSend${typedPrompt ? " active" : ""}`}
                tabIndex={-1}
                aria-hidden="true"
              >
                <ArrowUp size={15} />
              </button>
            </div>

            <div className="chatChips">
              {chips.map((chip) => (
                <span key={chip} className="chatChip">
                  <Shield size={12} /> {chip}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <>
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

            <div className="chatInputBar chatInputBottom">
              <button type="button" className="chatInputAdd" tabIndex={-1} aria-hidden="true">
                <Plus size={16} />
              </button>
              <input
                type="text"
                value=""
                readOnly
                placeholder={t("chat.welcome.placeholder")}
                aria-label="Prompt"
              />
              <button
                type="button"
                className="chatInputMic"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Mic size={15} />
              </button>
              <button
                type="button"
                className="chatInputSend"
                tabIndex={-1}
                aria-hidden="true"
              >
                <ArrowUp size={15} />
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
