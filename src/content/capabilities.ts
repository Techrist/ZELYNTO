export type CapabilityVariant = "explore" | "security" | "automation" | "compliance";

export interface Capability {
  id: string;
  variant: CapabilityVariant;
  reverse: boolean;
  label: string;
  title: string;
  description: string;
  bullets: string[];
}

export const capabilities: Capability[] = [
  {
    id: "exploration",
    variant: "explore",
    reverse: false,
    label: "Exploration intelligente M365",
    title: "Interrogez Microsoft 365 comme si vous parliez à un expert.",
    description:
      "Zelynto traduit vos questions en requêtes Graph, recoupe les données du tenant et livre une réponse claire, structurée et actionnable.",
    bullets: [
      "Questions sur utilisateurs, groupes, mails, fichiers et licences",
      "Synthèses lisibles pour les équipes IT et DSI",
      "Preuves et données sources conservées"
    ]
  },
  {
    id: "security-copilot",
    variant: "security",
    reverse: true,
    label: "Security Copilot & Alerting",
    title: "Transformez vos alertes M365 en décisions rapides.",
    description:
      "Zelynto centralise les signaux Defender et Identity, explique les alertes critiques et priorise les comptes ou configurations à traiter.",
    bullets: [
      "Vue unifiée des alertes critiques",
      "Explication en langage naturel de chaque incident",
      "Recommandations de remédiation contextualisées"
    ]
  },
  {
    id: "automation",
    variant: "automation",
    reverse: false,
    label: "Automation & Provisioning",
    title: "Automatisez les actions admin sans perdre le contrôle.",
    description:
      "Créez des ressources Microsoft 365 par prompt, avec preview, conventions de nommage, gouvernance et confirmation avant exécution.",
    bullets: [
      "Création de groupes, sites SharePoint et ressources Entra ID",
      "Plan d'exécution lisible avant modification",
      "Journalisation automatique des actions"
    ]
  },
  {
    id: "compliance",
    variant: "compliance",
    reverse: true,
    label: "Audit & Compliance Copilot",
    title: "Gardez votre tenant conforme en continu.",
    description:
      "Zelynto surveille les écarts de configuration, calcule un score de posture et explique pourquoi chaque point est prioritaire.",
    bullets: [
      "Score par catégorie : identité, collaboration, licences, gouvernance",
      "Recommandations inspirées des bonnes pratiques M365",
      "Conversation avec les résultats d'audit"
    ]
  }
];
