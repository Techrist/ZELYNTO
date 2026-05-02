import type { ChatResponse } from "../../types";

interface GraphLike {
  api(path: string): { get(): Promise<unknown> };
}

export async function answerM365Exploration(prompt: string, graph: GraphLike): Promise<ChatResponse> {
  const normalized = prompt.toLowerCase();

  if (normalized.includes("accès conditionnel") || normalized.includes("conditional")) {
    const data = await graph.api("/identity/conditionalAccess/policies").get();
    return {
      intent: "m365_exploration",
      title: "Stratégies d'accès conditionnel",
      answer: "J'ai récupéré les stratégies d'accès conditionnel disponibles et leur état.",
      data,
      nextActions: ["Filtrer les stratégies désactivées", "Auditer les exceptions", "Afficher les règles sans MFA"]
    };
  }

  if (normalized.includes("connectés") || normalized.includes("connecte") || normalized.includes("30 jours")) {
    const data = await graph
      .api("/users?$select=displayName,userPrincipalName,signInActivity")
      .get();
    return {
      intent: "m365_exploration",
      title: "Utilisateurs inactifs",
      answer: "Voici les utilisateurs dont l'activité de connexion doit être vérifiée.",
      data,
      nextActions: ["Créer une revue d'accès", "Exporter la liste", "Comparer avec les licences actives"]
    };
  }

  return {
    intent: "m365_exploration",
    title: "Exploration M365",
    answer: "Je peux interroger Microsoft Graph pour les utilisateurs, groupes, mails, fichiers, licences et stratégies.",
    data: { prompt },
    nextActions: ["Lister les utilisateurs", "Afficher les licences inutilisées", "Vérifier les stratégies d'accès conditionnel"]
  };
}
