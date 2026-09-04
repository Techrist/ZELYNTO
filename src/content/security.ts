import { FileLock2, KeyRound, MessageSquareLock, ShieldHalf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SecurityPillarDefinition {
  icon: LucideIcon;
}

// Order must match the i18n array security.pillars
export const securityPillars: SecurityPillarDefinition[] = [
  { icon: ShieldHalf }, // Données isolées — périmètre
  { icon: KeyRound }, // Permissions minimales — moindre privilège
  { icon: MessageSquareLock }, // Aucun stockage prompt — conversations éphémères
  { icon: FileLock2 } // Audit immuable — journal signé
];
