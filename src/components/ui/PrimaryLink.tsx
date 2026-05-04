import React from "react";
import { ArrowRight } from "lucide-react";

interface PrimaryLinkProps {
  href: string;
  children: React.ReactNode;
  size?: "regular" | "large";
  showArrow?: boolean;
  arrowSize?: number;
  className?: string;
}

export function PrimaryLink({
  href,
  children,
  size = "regular",
  showArrow = true,
  arrowSize,
  className = ""
}: PrimaryLinkProps) {
  const sizeClass = size === "large" ? " large" : "";
  const computedArrowSize = arrowSize ?? (size === "large" ? 18 : 17);

  return (
    <a className={`primaryLink${sizeClass} ${className}`.trim()} href={href}>
      {children}
      {showArrow && <ArrowRight size={computedArrowSize} />}
    </a>
  );
}
