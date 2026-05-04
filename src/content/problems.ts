import { AlertTriangle, Clock, FileWarning, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    icon: Layers,
    title: "Trop de consoles",
    description:
      "Entra ID, Defender, Purview, Teams, SharePoint… vos admins jonglent entre dix portails pour répondre à une seule question."
  },
  {
    icon: Clock,
    title: "Du temps perdu",
    description:
      "Les requêtes Graph et les rapports manuels prennent des heures alors que la plupart des questions reviennent chaque semaine."
  },
  {
    icon: AlertTriangle,
    title: "Des angles morts",
    description:
      "Les alertes critiques se noient dans le bruit, les comptes dormants restent licenciés, le partage externe glisse hors de contrôle."
  },
  {
    icon: FileWarning,
    title: "Aucune traçabilité",
    description:
      "Les actions admin sont rarement journalisées de bout en bout. Les audits internes deviennent un cauchemar à reconstituer."
  }
];
