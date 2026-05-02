import type { ChatResponse } from "../../types";

interface GraphLike {
  api(path: string): { get(): Promise<unknown> };
}

export async function answerSecurity(prompt: string, graph: GraphLike): Promise<ChatResponse> {
  const data = await graph.api("/security/alerts_v2?$filter=severity eq 'high'").get();

  return {
    intent: "security_alerting",
    title: "Alertes de sécurité critiques",
    answer:
      "J'ai centralisé les alertes critiques disponibles. Priorité : qualifier les comptes impactés, confirmer le statut et documenter la remédiation.",
    data: { prompt, alerts: data },
    nextActions: ["Expliquer l'alerte la plus critique", "Lister les comptes à risque", "Créer une tâche de remédiation"]
  };
}
