import type { ActionPlan, ChatResponse } from "../../types";

interface GraphLike {
  api(path: string): { post(payload: unknown): Promise<unknown> };
}

export function buildProvisioningPlan(prompt: string): ActionPlan {
  return {
    summary: "Plan de provisioning généré à partir du prompt. Exécution bloquée tant qu'aucune confirmation n'est fournie.",
    steps: [
      {
        label: "Valider le nommage et la gouvernance",
        graphOperation: "local-policy-validation",
        risk: "low"
      },
      {
        label: "Créer la ressource Microsoft 365 demandée",
        graphOperation: "POST /groups, /sites ou /applications selon l'intention finale",
        risk: "medium"
      },
      {
        label: "Journaliser l'action dans l'audit Zelynto",
        graphOperation: "append-audit-log",
        risk: "low"
      }
    ]
  };
}

export async function answerProvisioning(
  prompt: string,
  graph: GraphLike,
  execute = false
): Promise<ChatResponse> {
  const plan = buildProvisioningPlan(prompt);

  if (!execute) {
    return {
      intent: "m365_provisioning",
      title: "Prévisualisation de l'action",
      answer: "J'ai préparé le plan d'action. Une confirmation est requise avant modification du tenant.",
      data: plan,
      nextActions: ["Confirmer l'exécution", "Modifier les règles de nommage", "Voir l'impact sécurité"],
      requiresConfirmation: true
    };
  }

  const result = await graph.api("/groups").post({
    displayName: "Zelynto generated group",
    mailEnabled: true,
    mailNickname: "zelynto-generated-group",
    securityEnabled: false
  });

  return {
    intent: "m365_provisioning",
    title: "Action exécutée",
    answer: "L'action demandée a été exécutée et doit être inscrite au journal d'audit.",
    data: { plan, result },
    nextActions: ["Afficher le journal", "Lancer un audit post-changement", "Créer une recommandation de gouvernance"]
  };
}
