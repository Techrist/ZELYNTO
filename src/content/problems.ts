import { LayoutGrid, Hourglass, EyeOff, History } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProblemDefinition {
  icon: LucideIcon;
}

// Order must match the i18n array problem.items
export const problems: ProblemDefinition[] = [
  { icon: LayoutGrid },
  { icon: Hourglass },
  { icon: EyeOff },
  { icon: History }
];