import type { AuditFinding, ChatResponse } from "../../types";

interface GraphLike {
  api(path: string): { get(): Promise<unknown> };
}

export async function runContinuousAudit(prompt: string, graph: GraphLike): Promise<ChatResponse> {
  const conditionalAccess = await graph.api("/identity/conditionalAccess/policies").get();

  const findings: AuditFinding[] = [
    {
      id: "iam-001",
      title: "MFA administrateur à vérifier",
      category: "Identité et accès",
      severity: "critical",
      status: "warning",
      evidence: "Les stratégies d'accès conditionnel doivent être comparées aux rôles administrateurs actifs.",
      recommendation: "Exiger MFA pour tous les rôles privilégiés et limiter les exclusions."
    },
    {
      id: "gov-001",
      title: "Revue des utilisateurs inactifs",
      category: "Gouvernance",
      severity: "medium",
      status: "warning",
      evidence: "Les comptes sans connexion récente peuvent conserver des accès ou licences inutiles.",
      recommendation: "Mettre en place une revue d'accès mensuelle et désactiver les comptes dormants."
    }
  ];

  return {
    intent: "continuous_audit",
    title: "Audit continu M365",
    answer: "Score initial : 72/100. Les priorités actuelles portent sur l'identité, la MFA et les comptes inactifs.",
    data: {
      prompt,
      score: 72,
      categories: ["Identité et accès", "Gouvernance", "Licences", "Collaboration"],
      findings,
      evidence: { conditionalAccess }
    },
    nextActions: ["Expliquer le risque critique", "Afficher les corrections recommandées", "Exporter le rapport"]
  };
}
