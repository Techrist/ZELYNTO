import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import { SectionLabel } from "../../../components/ui/SectionLabel";
import zelyntoMark from "../../../assets/zelynto-mark.svg";
import blobZelynto from "../../../assets/blob-zelynto.json";

export function BrandSection() {
  const { t } = useTranslation();
  const [showZ, setShowZ] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowZ((value) => !value);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

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
            <div className={showZ ? "brandMorphLayer" : "brandMorphLayer isVisible"}>
              <Lottie
                animationData={blobZelynto}
                loop
                autoplay
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              />
            </div>
            <div className={showZ ? "brandMorphLayer isVisible" : "brandMorphLayer"}>
              <img src={zelyntoMark} alt="" />
            </div>
          </div>
          <p className="brandCaption">
            {showZ ? t("brand.captionZ") : t("brand.captionBlob")}
          </p>
        </div>
      </div>
    </section>
  );
}
