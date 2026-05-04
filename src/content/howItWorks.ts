import { MessageSquare, Plug, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Step {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    index: "01",
    icon: Plug,
    title: "Connectez votre tenant",
    description:
      "Une seule app Entra ID avec les permissions Graph minimales. Aucune donnée ne quitte votre environnement."
  },
  {
    index: "02",
    icon: MessageSquare,
    title: "Posez vos questions",
    description:
      "Zelynto traduit votre intention en requêtes Graph, recoupe les résultats et propose une réponse claire."
  },
  {
    index: "03",
    icon: ShieldCheck,
    title: "Validez chaque action",
    description:
      "Pour toute opération sensible, un plan d'exécution s'affiche. Rien ne se déclenche sans votre confirmation."
  }
];
