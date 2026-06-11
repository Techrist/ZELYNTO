import React from "react";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "../utility/MagneticButton";

interface PrimaryLinkProps {
  href: string;
  children: React.ReactNode;
  size?: "regular" | "large";
  showArrow?: boolean;
  arrowSize?: number;
  className?: string;
  magnetic?: boolean;
}

export function PrimaryLink({
  href,
  children,
  size = "regular",
  showArrow = true,
  arrowSize,
  className = "",
  magnetic = true
}: PrimaryLinkProps) {
  const sizeClass = size === "large" ? " large" : "";
  const computedArrowSize = arrowSize ?? (size === "large" ? 18 : 17);

  const link = (
    <a className={`primaryLink${sizeClass} ${className}`.trim()} href={href}>
      {children}
      {showArrow && <ArrowRight size={computedArrowSize} />}
    </a>
  );

  if (!magnetic) return link;

  return <MagneticButton strength={size === "large" ? 22 : 14}>{link}</MagneticButton>;
}
