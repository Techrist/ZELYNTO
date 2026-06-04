import React from "react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import { SectionLabel } from "../../../components/ui/SectionLabel";
import zelyntoAnimation from "../../../assets/zelynto-animation.json";

export function BrandSection() {
  const { t } = useTranslation();

  return (
    <section className="brandSection" id="brand">
      <div className="brandGlow" aria-hidden="true" />

      <div className="brandLayout">
        <div className="brandCopy">
          <SectionLabel>{t("brand.label")}</SectionLabel>
          <h2>{t("brand.title")}</h2>
          <p>{t("brand.description")}</p>
        </div>

        <div className="brandVisual">
          <div className="brandMorph" aria-hidden="true">
            <div className="brandMorphRing" />
            <Lottie
              animationData={zelyntoAnimation}
              loop
              autoplay
              className="brandLottie"
              rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
