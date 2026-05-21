import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../../../components/ui/SectionLabel";

interface FaqEntry {
  question: string;
  answer: string;
}

export function FaqSection() {
  const { t } = useTranslation();
  const raw = t("faq.items", { returnObjects: true });
  const items: FaqEntry[] = Array.isArray(raw) ? (raw as FaqEntry[]) : [];
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="faqSection" id="faq">
      <div className="sectionIntro">
        <SectionLabel>{t("faq.label")}</SectionLabel>
        <h2>{t("faq.title")}</h2>
      </div>

      <div className="faqList">
        {items.map((item, index) => (
          <details className="faqItem" key={item.question} open={openIndex === index}>
            <summary
              onClick={(event) => {
                event.preventDefault();
                setOpenIndex((current) => (current === index ? -1 : index));
              }}
            >
              <span>{item.question}</span>
              <span className="faqChevron" aria-hidden="true" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
