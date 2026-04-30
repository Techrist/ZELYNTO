import type { ZelyntoIntent } from "../types";

const provisioningTerms = ["crée", "creer", "créer", "déploie", "deploie", "provision", "ajoute"];
const securityTerms = ["alerte", "alertes", "critique", "risque", "risqués", "defender", "identity"];
const auditTerms = ["audit", "conforme", "non conforme", "écart", "risques", "recommandation", "score"];
const explorationTerms = ["liste", "donne", "combien", "quels", "quelles", "derniers", "configuration"];

export function detectIntent(prompt: string): ZelyntoIntent {
  const normalized = prompt.toLowerCase();

  if (provisioningTerms.some((term) => normalized.includes(term))) {
    return "m365_provisioning";
  }

  if (securityTerms.some((term) => normalized.includes(term))) {
    return "security_alerting";
  }

  if (auditTerms.some((term) => normalized.includes(term))) {
    return "continuous_audit";
  }

  if (explorationTerms.some((term) => normalized.includes(term))) {
    return "m365_exploration";
  }

  return "unknown";
}
