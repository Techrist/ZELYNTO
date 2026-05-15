import { MessageSquare, Plug, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface StepDefinition {
  index: string;
  icon: LucideIcon;
}

// Order must match the i18n array howItWorks.steps
export const steps: StepDefinition[] = [
  { index: "01", icon: Plug },
  { index: "02", icon: MessageSquare },
  { index: "03", icon: ShieldCheck }
];
