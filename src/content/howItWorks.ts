import { KeyRound, Layers, Rocket, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface StepDefinition {
  index: string;
  icon: LucideIcon;
}

// Order must match the i18n array howItWorks.steps
export const steps: StepDefinition[] = [
  { index: "01", icon: Layers },
  { index: "02", icon: KeyRound },
  { index: "03", icon: Shield },
  { index: "04", icon: Rocket }
];
