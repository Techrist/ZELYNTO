import type { ZelyntoIntent } from "../types";

const provisioningTerms = ["creer", "cree", "deployer", "provision", "ajoute", "ajouter", "crée", "déploie"];
const securityTerms = ["alerte", "alertes", "critique", "risque", "defender", "identity", "securite"];
const auditTerms = ["audit", "conforme", "ecart", "score", "risques", "recommandation", "governance"];
const explorationTerms = ["liste", "donne", "combien", "quel", "derni", "config", "utilisateur", "groupe", "licence"];

export function detectIntent(prompt: string): ZelyntoIntent {
  const normalized = prompt.toLowerCase().normalize("NFD");

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
