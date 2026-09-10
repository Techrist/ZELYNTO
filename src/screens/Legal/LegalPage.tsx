import React from "react";
import { useTranslation } from "react-i18next";
import { getLegalDoc } from "../../content/legal";
import type { LegalBlock } from "../../content/legal";
import type { Lang } from "../../i18n/config";
import type { LegalPageKey } from "../../routing";
import "./Legal.css";

interface LegalPageProps {
  page: LegalPageKey;
  lang: Lang;
}

function formatDate(iso: string, lang: Lang): string {
  try {
    return new Intl.DateTimeFormat(lang, { dateStyle: "long", timeZone: "UTC" }).format(
      new Date(iso)
    );
  } catch {
    return iso;
  }
}

function Blocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "p":
            return <p key={i}>{block.text}</p>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div className="legalTableWrap" key={i}>
                <table>
                  <thead>
                    <tr>
                      {block.head.map((cell, j) => (
                        <th key={j}>{cell}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export function LegalPage({ page, lang }: LegalPageProps) {
  const { t } = useTranslation();
  const doc = getLegalDoc(page, lang);

  function jumpTo(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <article className="legalPage">
      <div className="legalContainer">
        <p className="legalEyebrow">{t("legal.eyebrow")}</p>
        <h1 className="legalTitle">{doc.title}</h1>
        <p className="legalMeta">
          {t("legal.lastUpdated")} {formatDate(doc.updated, lang)}
        </p>

        <div className="legalIntro">
          <Blocks blocks={doc.intro} />
        </div>

        <nav className="legalToc" aria-label={t("legal.onThisPage")}>
          <strong>{t("legal.onThisPage")}</strong>
          <ol>
            {doc.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} onClick={(e) => jumpTo(e, section.id)}>
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="legalBody">
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="legalSection">
              <h2>{section.heading}</h2>
              <Blocks blocks={section.blocks} />
            </section>
          ))}
        </div>

        <p className="legalFootnote">
          {t("legal.resourcesNote")}{" "}
          <a href={`mailto:${t("legal.contactEmail")}`}>{t("legal.contactEmail")}</a>
        </p>
      </div>
    </article>
  );
}
