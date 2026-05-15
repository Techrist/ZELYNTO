import { Eye, FileCheck2, ShieldCheck, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SecurityPillarDefinition {
  icon: LucideIcon;
}

// Order must match the i18n array security.pillars
export const securityPillars: SecurityPillarDefinition[] = [
  { icon: ShieldCheck },
  { icon: Lock },
  { icon: Eye },
  { icon: FileCheck2 }
];
