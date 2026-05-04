import React from "react";
import { faqItems } from "../../../content/faq";
import { SectionLabel } from "../../../components/ui/SectionLabel";

export function FaqSection() {
  return (
    <section className="faqSection" id="faq">
      <div className="sectionIntro">
        <SectionLabel>FAQ</SectionLabel>
        <h2>Les réponses aux questions qu'on nous pose le plus.</h2>
      </div>

      <div className="faqList">
        {faqItems.map((item, index) => (
          <details className="faqItem" key={item.question} open={index === 0}>
            <summary>
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
