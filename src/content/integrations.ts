import { Database, Lock, Mail, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Integration {
  icon: LucideIcon;
  label: string;
}

export const integrations: Integration[] = [
  { icon: Mail, label: "Outlook" },
  { icon: Users, label: "Teams" },
  { icon: Database, label: "SharePoint" },
  { icon: Lock, label: "Entra ID" }
];
