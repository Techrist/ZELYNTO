import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../../../components/ui/SectionLabel";
import { Reveal } from "../../../components/utility/Reveal";

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
      <Reveal className="sectionIntro" y={20} amount={0.3}>
        <SectionLabel>{t("faq.label")}</SectionLabel>
        <h2>{t("faq.title")}</h2>
      </Reveal>

      <div className="faqList">
        {items.map((item, index) => (
          <Reveal key={item.question} delay={index * 70} y={18} amount={0.15}>
            <details className="faqItem" open={openIndex === index}>
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
