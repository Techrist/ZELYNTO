import { Eye, FileCheck2, ShieldCheck, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SecurityPillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const securityPillars: SecurityPillar[] = [
  {
    icon: ShieldCheck,
    title: "Données isolées",
    description:
      "Vos données restent dans votre périmètre. Aucune information tenant n'est partagée avec des tiers, aucun entraînement de modèle sur vos contenus."
  },
  {
    icon: Lock,
    title: "Permissions minimales",
    description:
      "Zelynto se connecte via une application Entra ID dédiée, avec un scope Graph strictement limité à votre besoin réel."
  },
  {
    icon: Eye,
    title: "Aucun stockage prompt",
    description:
      "Les conversations ne sont pas conservées par défaut. Vous gardez la main sur ce qui est journalisé et combien de temps."
  },
  {
    icon: FileCheck2,
    title: "Audit immuable",
    description:
      "Chaque action exécutée est tracée dans un journal append-only, signé et exportable pour vos audits internes."
  }
];
