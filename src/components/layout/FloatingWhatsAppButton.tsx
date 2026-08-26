import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsAppButton.css";

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function FloatingWhatsAppButton({
  phoneNumber,
  message
}: FloatingWhatsAppButtonProps) {
  const { t } = useTranslation();
  const whatsappUrl = "https://wa.me/" + phoneNumber ;

  return (
    <a
      className="floatingWhatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.ariaLabel")}
    >
      <FaWhatsapp size={26} />
      <span className="floatingWhatsapp__label">
        {t("whatsapp.buttonLabel", "Contact via WhatsApp")}
      </span>
    </a>
  );
}