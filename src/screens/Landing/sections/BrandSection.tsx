import React from "react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../../../components/ui/SectionLabel";
import { SectionFade } from "../../../components/utility/SectionFade";
import { LazyLottie } from "../../../components/utility/LazyLottie";

const loadZelyntoAnimation = () => import("../../../assets/zelynto-animation.json");

export function BrandSection() {
  const { t } = useTranslation();

  return (
    <section className="brandSection" id="brand">
      <div className="brandGlow" aria-hidden="true" />

      <SectionFade className="brandLayout">
        <div className="brandCopy">
          <SectionLabel>{t("brand.label")}</SectionLabel>
          <h2>{t("brand.title")}</h2>
          <p>{t("brand.description")}</p>
        </div>

        <div className="brandVisual">
          <div className="brandMorph" aria-hidden="true">
            <div className="brandMorphRing" />
            <LazyLottie
              loadAnimationData={loadZelyntoAnimation}
              loop
              autoplay
              className="brandLottie"
              rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
            />
          </div>
        </div>
      </SectionFade>
    </section>
  );
}
