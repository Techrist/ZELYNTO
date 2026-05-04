export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Faut-il déployer un agent ou un connecteur dans notre tenant ?",
    answer:
      "Non. Zelynto utilise Microsoft Graph via une application Entra ID que vous créez en quelques minutes. Aucune installation côté serveur, aucun agent à pousser sur les postes."
  },
  {
    question: "Quelles permissions Microsoft Graph sont nécessaires ?",
    answer:
      "Le périmètre est ajusté selon les modules activés. Pour l'exploration et l'audit, des permissions de lecture suffisent (Directory.Read.All, AuditLog.Read.All). Le provisioning ajoute les écritures correspondantes."
  },
  {
    question: "Mes données quittent-elles mon environnement ?",
    answer:
      "Les requêtes Graph sont émises depuis Zelynto, mais aucune donnée tenant n'est conservée par défaut au-delà du temps de la conversation. Vous pouvez activer un journal d'actions chez vous pour la traçabilité."
  },
  {
    question: "Comment fonctionnent les actions automatisées ?",
    answer:
      "Toute action passe d'abord par une preview lisible — création de groupe, modification de policy, archivage de site. Rien n'est exécuté sans votre confirmation explicite."
  },
  {
    question: "Zelynto est-il adapté aux MSP gérant plusieurs tenants ?",
    answer:
      "Oui. L'offre Enterprise est pensée pour le multi-tenant : isolation des contextes, règles d'audit par client et tableau de bord consolidé."
  },
  {
    question: "Combien de temps pour démarrer ?",
    answer:
      "Comptez moins d'une heure entre la création de l'application Entra ID, la connexion à Zelynto et la première session d'exploration de votre tenant."
  }
];
